/* IT CHICK Academy · shared engine
   One registry (ICA) that every data file adds to, plus the store, text formatting,
   glossary pop-ups, sheets, mistake reports and the interactive exercise types.
   Written in plain ES5-style JavaScript so it runs on older phones and tablets. */
(function(){
"use strict";
var ICA = window.ICA = window.ICA || {};
ICA.version = "pass1";
ICA.tracks = {}; ICA.units = []; ICA.unitById = {}; ICA.lessons = {}; ICA.codex = {}; ICA.terms = {}; ICA.bank = []; ICA.bankById = {}; ICA.books = {};
ICA.base = /\/(quests|arcade|codex|labs|forge)\//.test(location.pathname) ? "../" : "./"; ICA.figs = [];  /* pages in a subfolder link home with ../ */

/* ---------- registry (used by data files) ---------- */
ICA.addTrack = function(t){ ICA.tracks[t.id] = t; };
ICA.addBooks = function(list){ list.forEach(function(b){ ICA.books[b.id] = b; }); };
ICA.addUnit = function(u){
  ICA.units.push(u); ICA.unitById[u.id] = u;
  (u.lessons||[]).forEach(function(l, i){ l.unit = u.id; l.n = i+1; ICA.lessons[l.id] = l; });
  if (u.codex) ICA.addCodex(u.codex, u.id);
  if (u.terms) ICA.addTerms(u.terms, u.id);
  if (u.bank) ICA.addBank(u.bank, u.id);
};
ICA.addCodex = function(list, unit){ list.forEach(function(e){ if(unit && !e.unit) e.unit = unit; ICA.codex[e.id] = e; }); };
ICA.addTerms = function(list, unit){ list.forEach(function(t){ if(unit && !t.unit) t.unit = unit; ICA.terms[t.id] = t; }); };
ICA.addBank = function(list, unit){ list.forEach(function(q){ if(unit && !q.unit) q.unit = unit; ICA.bank.push(q); ICA.bankById[q.id] = q; }); };
ICA.lessonBank = function(lessonId){ return ICA.bank.filter(function(q){ return q.lesson === lessonId; }); };
ICA.unitLessons = function(uid){ var u = ICA.unitById[uid]; return u ? u.lessons : []; };

/* ---------- loading data files listed in the catalog ---------- */
ICA.loadAll = function(base, done, opt){
  ICA.base = base; opt = opt || {};
  var files = ["data/tracks.js","data/books.js","data/audio-index.js"].concat((window.ICA_CATALOG||{units:[]}).units.map(function(u){ return "data/"+u+".js"; }));
  var total = files.length, n = 0, failed = [], finished = false, ui = null;
  /* a loading screen appears only if loading takes more than a moment */
  var showT = setTimeout(function(){ if (!finished) ui = ICA.loadingScreen(opt.pixel); upd(); }, 250);
  function upd(){ if (!ui) return; ui.querySelector("i").style.width = Math.round(100*n/total) + "%"; ui.querySelector(".lc").textContent = n + " / " + total; }
  function one(){ n++; upd(); if (n >= total && !finished){ finished = true; clearTimeout(showT);
    ICA.units.sort(function(a,b){ var ta = ICA.tracks[a.track] ? ICA.tracks[a.track].n : 99, tb = ICA.tracks[b.track] ? ICA.tracks[b.track].n : 99; return ta - tb || a.n - b.n; });
    done(failed);
    if (ICA.syncOn()) ICA.syncNow({onChange:function(){ try { if (sessionStorage.getItem("itchick-synced-reload")) return; sessionStorage.setItem("itchick-synced-reload", "1"); } catch(e){} location.reload(); }}).then(function(){ try { sessionStorage.removeItem("itchick-synced-reload"); } catch(e){} }).catch(function(){});
    if (ui){ ui.classList.add("out"); setTimeout(function(){ if (ui.parentNode) ui.parentNode.removeChild(ui); }, 260); } } }
  /* all files download at once; async=false keeps them running in list order */
  files.forEach(function(f){
    var s = document.createElement("script"); s.async = false; s.src = base + f + "?v=" + ICA.version;
    s.onload = one; s.onerror = function(){ failed.push(f); one(); };
    document.head.appendChild(s);
  });
};
ICA.loadingScreen = function(pixel){
  var d = document.createElement("div"); d.className = "loadscr" + (pixel ? " px" : ""); d.setAttribute("role", "status");
  d.innerHTML = '<img src="' + ICA.base + 'shared/mascot/' + (pixel ? 'pixel/mugi-px-think.webp' : 'think.webp') + '" alt="">' +
    '<b>' + (pixel ? 'LOADING…' : 'Getting your lessons ready…') + '</b><span class="lbar"><i></i></span><span class="lc small muted"></span>';
  document.body.appendChild(d); return d;
};

/* ---------- store (one key, safe when storage is blocked) ---------- */
var KEY = "itchick-academy-v1", mem = null;
function blank(){ return {v:1, tracks:[], lessons:{}, cards:{}, arcade:{best:{}}, reports:[], settings:{theme:"system", size:"normal", level:"starter"}, last:null, welcomed:false}; }
ICA.load = function(){
  if (mem) return mem;
  var s = null;
  try { s = JSON.parse(localStorage.getItem(KEY)); } catch(e){}
  mem = fill(s);
  return mem;
};
function fill(s){
  var b = blank();
  if (!s || typeof s !== "object") return b;
  for (var k in b){ if (s[k] === undefined) s[k] = b[k]; }
  for (var k2 in b.settings){ if (s.settings[k2] === undefined) s.settings[k2] = b.settings[k2]; }
  if (!s.arcade.best) s.arcade.best = {};
  return s;
}
ICA.save = function(quiet){ if (mem) mem.savedAt = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch(e){} if (!quiet && ICA.syncSoon) ICA.syncSoon(); };
ICA.replaceStore = function(obj, quiet){ mem = fill(obj); ICA.save(quiet); };
ICA.eraseAll = function(){ mem = blank(); mem.resetAt = Date.now(); try { localStorage.removeItem(KEY); } catch(e){} ICA.save(); };
/* ---------- Sync with Google Drive (optional) ----------
   Progress is saved as one small JSON file in the learner's own Google Drive "app data" folder (hidden, only this
   app's Google project can see it; drive.appdata scope). No server of ours. Sign-in tokens last about an hour and
   are kept for this browser tab only (sessionStorage); after that a tap on "Sync now" signs in again.
   Merging keeps progress from both sides: finished lessons, the further-along flashcards and Kanji Lab cards,
   high scores from both boards. Other things (settings, tracks) come from whichever device saved last. */
ICA.GCID = "857115958422-65tf8htsa74g8abl9fcv1dosgl4ff5oc.apps.googleusercontent.com";
var SKEY = "itchick-sync", SFILE = "it-chick-academy-progress.json", GSCOPE = "https://www.googleapis.com/auth/drive.appdata";
var syncing = false, syncT = null, gisP = null;
function smeta(){ try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch(e){ return {}; } }
function ssave(m){ try { localStorage.setItem(SKEY, JSON.stringify(m)); } catch(e){} }
function gtok(){ try { var t = JSON.parse(sessionStorage.getItem("itchick-gtok")); return t && Date.now() < t.exp - 60000 ? t.tok : null; } catch(e){ return null; } }
ICA.syncOn = function(){ return !!smeta().on; };
function loadGIS(){
  if (window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
  if (gisP) return gisP;
  gisP = new Promise(function(res, rej){ var sc = document.createElement("script"); sc.src = "https://accounts.google.com/gsi/client"; sc.async = true; sc.onload = res; sc.onerror = function(){ gisP = null; rej(new Error("Couldn’t reach Google sign-in. Check your connection.")); }; document.head.appendChild(sc); });
  return gisP;
}
function signIn(consent){
  return loadGIS().then(function(){ return new Promise(function(res, rej){
    var tc = google.accounts.oauth2.initTokenClient({client_id:ICA.GCID, scope:GSCOPE,
      callback:function(r){ if (r.error) return rej(new Error(r.error === "access_denied" ? "Google sign-in was cancelled." : r.error));
        try { sessionStorage.setItem("itchick-gtok", JSON.stringify({tok:r.access_token, exp:Date.now() + (+r.expires_in || 3600)*1000})); } catch(e){}
        res(r.access_token); },
      error_callback:function(e){ rej(new Error(e && e.type === "popup_closed" ? "The Google window was closed." : "Google sign-in didn’t open. Allow pop-ups for this site and try again.")); }});
    tc.requestAccessToken({prompt: consent ? "consent" : ""});
  }); });
}
function gfetch(url, opt, tok){
  opt = opt || {}; opt.headers = Object.assign({}, opt.headers || {}, {Authorization:"Bearer " + tok});
  return fetch(url, opt).then(function(r){ if (r.status === 401){ try { sessionStorage.removeItem("itchick-gtok"); } catch(e){} throw new Error("signin"); } if (!r.ok) throw new Error("Google Drive said " + r.status + "."); return r; });
}
var DRV = "https://www.googleapis.com/drive/v3", UPL = "https://www.googleapis.com/upload/drive/v3";
function driveGet(tok){
  return gfetch(DRV + "/files?spaces=appDataFolder&fields=files(id,name,modifiedTime)&q=" + encodeURIComponent("name='" + SFILE + "'"), {}, tok).then(function(r){ return r.json(); })
    .then(function(j){ var f = (j.files || [])[0]; if (!f) return {id:null, data:null};
      return gfetch(DRV + "/files/" + f.id + "?alt=media", {}, tok).then(function(r){ return r.json(); }).then(function(d){ return {id:f.id, data:d}; }).catch(function(e){ if (e.message === "signin") throw e; return {id:f.id, data:null}; }); });
}
function drivePut(tok, id, obj){
  var body = JSON.stringify(obj);
  if (id) return gfetch(UPL + "/files/" + id + "?uploadType=media", {method:"PATCH", headers:{"Content-Type":"application/json"}, body:body}, tok);
  var b = "ica" + Math.random().toString(36).slice(2), meta = JSON.stringify({name:SFILE, parents:["appDataFolder"]});
  return gfetch(UPL + "/files?uploadType=multipart", {method:"POST", headers:{"Content-Type":"multipart/related; boundary=" + b},
    body:"--" + b + "\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n" + meta + "\r\n--" + b + "\r\nContent-Type: application/json\r\n\r\n" + body + "\r\n--" + b + "--"}, tok);
}
/* ---- merging two stores ---- */
function isObj(x){ return x && typeof x === "object" && !Array.isArray(x); }
function deep(a, b){ // b wins on conflicts; keys from both kept
  if (!isObj(a) || !isObj(b)) return b === undefined ? a : b;
  var o = {}; Object.keys(a).forEach(function(k){ o[k] = a[k]; });
  Object.keys(b).forEach(function(k){ o[k] = (k in a) ? deep(a[k], b[k]) : b[k]; });
  return o;
}
function mergeMap(a, b, pick){ var o = {}; a = a || {}; b = b || {}; Object.keys(a).forEach(function(k){ o[k] = a[k]; }); Object.keys(b).forEach(function(k){ o[k] = (k in a) ? pick(a[k], b[k]) : b[k]; }); return o; }
function lessonPick(x, y){
  var m = deep(x, y); m.done = x.done && y.done ? Math.min(x.done, y.done) : (x.done || y.done || 0);
  m.learn = Math.max(+x.learn || 0, +y.learn || 0); if (x.card != null || y.card != null) m.card = Math.max(+x.card || 0, +y.card || 0);
  m.tries = mergeMap(x.tries, y.tries, function(p, q){ return Math.min(p, q); }); return m;
}
function cardPick(x, y){ var nx = +(x.n != null ? x.n : x.box || x.b || 0), ny = +(y.n != null ? y.n : y.box || y.b || 0);
  if (nx !== ny) return nx > ny ? x : y; return +(x.due || x.d || 0) >= +(y.due || y.d || 0) ? x : y; }
function latest(p, q){ return +p >= +q ? p : q; }
function boardMerge(a, b, key){ var seen = {}, all = (a || []).concat(b || []).filter(function(e){ var k = e.n + "|" + e.s + "|" + e.t; if (seen[k]) return false; seen[k] = 1; return true; });
  var low = key === "pairs"; all.sort(function(x, y){ return low ? x.s - y.s || x.t - y.t : y.s - x.s || x.t - y.t; }); return all.slice(0, 5); }
ICA.mergeStores = function(L, R){
  if (!isObj(R)) return L; if (!isObj(L)) return R;
  if (L.resetAt && (+R.savedAt || 0) < L.resetAt) return L;          // erased here after that copy was made
  if (R.resetAt && (+L.savedAt || 0) < R.resetAt) return R;
  var newer = (+R.savedAt || 0) > (+L.savedAt || 0) ? R : L, older = newer === R ? L : R;
  var m = deep(older, newer);
  m.lessons = mergeMap(L.lessons, R.lessons, lessonPick);
  m.cards = mergeMap(L.cards, R.cards, cardPick);
  var la = L.arcade || {}, ra = R.arcade || {};
  m.arcade = m.arcade || {};
  if (la.boards || ra.boards){ var bk = {}; Object.keys(la.boards || {}).concat(Object.keys(ra.boards || {})).forEach(function(k){ bk[k] = boardMerge((la.boards || {})[k], (ra.boards || {})[k], k); }); m.arcade.boards = bk; }
  m.arcade.miss = mergeMap(la.miss, ra.miss, latest);
  if (la.jp || ra.jp){ m.arcade.jp = m.arcade.jp || {}; m.arcade.jp.missed = mergeMap((la.jp || {}).missed, (ra.jp || {}).missed, latest); }
  var ld = la.daily || {}, rd = ra.daily || {}; if (ld.last || rd.last) m.arcade.daily = (+ld.last || 0) >= (+rd.last || 0) ? ld : rd;
  var lk = ((L.labs || {}).kanji || {}).c, rk = ((R.labs || {}).kanji || {}).c;
  if (lk || rk){ m.labs = m.labs || {}; m.labs.kanji = m.labs.kanji || {}; m.labs.kanji.c = mergeMap(lk, rk, cardPick); }
  var seenR = {}; m.reports = (L.reports || []).concat(R.reports || []).filter(function(x){ var k = JSON.stringify(x); if (seenR[k]) return false; seenR[k] = 1; return true; });
  m.welcomed = !!(L.welcomed || R.welcomed);
  return m;
};
/* ---- the sync itself ---- */
ICA.syncNow = function(o){
  o = o || {};
  if (syncing) return Promise.resolve();
  var tok = gtok();
  if (!tok && !o.interactive) return Promise.resolve("needs-signin");
  syncing = true; clearTimeout(syncT);
  var p = tok ? Promise.resolve(tok) : signIn(!smeta().on);
  return p.then(function(t){ tok = t; return driveGet(tok); }).then(function(rem){
    var before = JSON.stringify(ICA.load()), merged = ICA.mergeStores(ICA.load(), rem.data);
    merged.savedAt = Date.now();
    var changed = JSON.stringify(merged) !== before;
    ICA.replaceStore(merged, true);
    return drivePut(tok, rem.id, merged).then(function(){ var m = smeta(); m.on = true; m.last = Date.now(); ssave(m); syncing = false; if (changed && o.onChange) o.onChange(); return "ok"; });
  }).catch(function(e){ syncing = false; if (e.message === "signin" && !o.interactive) return "needs-signin"; throw e; });
};
ICA.syncOff = function(){ var m = smeta(); m.on = false; ssave(m); try { sessionStorage.removeItem("itchick-gtok"); } catch(e){} };
ICA.syncSoon = function(){ if (!ICA.syncOn() || !gtok() || !navigator.onLine) return; clearTimeout(syncT); syncT = setTimeout(function(){ ICA.syncNow({}).catch(function(){}); }, 15000); };
document.addEventListener("visibilitychange", function(){ if (document.hidden && syncT && gtok()){ clearTimeout(syncT); syncT = null; ICA.syncNow({}).catch(function(){}); } });
ICA.syncLabel = function(){ var m = smeta(); return m.last ? "Last synced " + new Date(m.last).toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : "Not synced yet"; };


ICA.lessonState = function(id){ var st = ICA.load(); if (!st.lessons[id]) st.lessons[id] = {learn:0, tries:{}, apply:{}, check:null, done:0}; return st.lessons[id]; };
ICA.lessonDone = function(id){ var st = ICA.load().lessons[id]; return !!(st && st.done); };
ICA.unitProgress = function(uid){ var ls = ICA.unitLessons(uid), d = 0; ls.forEach(function(l){ if (ICA.lessonDone(l.id)) d++; }); return {done:d, total:ls.length}; };

/* ---------- theme & text size (call as early as possible) ---------- */
ICA.applySettings = function(){
  var st = ICA.load().settings, r = document.documentElement;
  if (st.theme === "light" || st.theme === "dark") r.setAttribute("data-theme", st.theme); else r.removeAttribute("data-theme");
  if (st.size && st.size !== "normal") r.setAttribute("data-size", st.size); else r.removeAttribute("data-size");
};

/* ---------- helpers ---------- */
ICA.esc = function(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); };
ICA.shuffle = function(a){ a = a.slice(); for (var i = a.length-1; i > 0; i--){ var j = Math.floor(Math.random()*(i+1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
ICA.$ = function(s, el){ return (el||document).querySelector(s); };
ICA.$$ = function(s, el){ return Array.prototype.slice.call((el||document).querySelectorAll(s)); };
ICA.today = function(){ var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime(); };

/* Inline formatting:
   **bold**  *italic*  `code`  [[termId]] or [[termId|shown text]] (glossary pop-up)
   {{entryId|shown text}} (link to a Codex entry)   [text](https://link)  <kbd>Ctrl</kbd> via [[kbd:Ctrl]] */
/* A glossary term written mid-sentence starts with a small letter ("a sample"), unless it is a name (Zotero, Wi-Fi). */
ICA.KEEPCAP = /^(Bluetooth|Finder|Wikipedia|JavaScript|Lighthouse|PowerShell|Git|GitHub|Python|Zotero|Boolean|Likert|Hawthorne|Sapir|Thomas|Davis|McDonaldization|Malthusian|Gini|Verstehen|NaN|None|ShareAlike|NonCommercial|NoDerivatives|Mbps|Wi-Fi|Task Manager|Fast Startup|File Explorer|File History|Time Machine|Recycle Bin|Creative Commons|Content Credentials|Undo Send|Reply All|GitHub Pages|Core Web Vitals|Open Graph|Stack Overflow|Journal Impact Factor|Zotero Connector|Human Development Index)\b/;
ICA.termInSentence = function(term, before){
  var plain = String(before || "").replace(/<[^>]*>/g, "").replace(/\s+$/, "");
  if (!/[A-Za-z0-9]/.test(plain) || /[.!?:]["\u201d\u2019')]*$/.test(plain)) return term;   // start of a sentence, item or cell
  if (!/^[A-Z][a-z]/.test(term) || ICA.KEEPCAP.test(term)) return term;
  return term.charAt(0).toLowerCase() + term.slice(1);
};
ICA.JA = /[\u3005\u3006\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uff01-\uff60][\u3000-\u303f\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uff01-\uff60]*/g;
ICA.md = function(s){
  var codes = [], out = ICA.esc(s);
  out = out.replace(/`([^`]+)`/g, function(m, c){ codes.push(c); return "\u0000"+(codes.length-1)+"\u0000"; });
  out = out.replace(/\[\[kbd:([^\]]+)\]\]/g, "<kbd>$1</kbd>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  out = out.replace(/(^|[\s(\u201c"'\u2014\u2013\/-])\*([^*\s](?:[^*]*?[^*\s])?)\*(?=[\s.,;:!?)\u201d"'\u2019\u2014\u2013\/-]|$)/g, "$1<i>$2</i>");
  out = out.replace(/\[([^\[\]<>]+)\]\{([^{}<>]+)\}/g, '<ruby lang="ja">$1<rt>$2</rt></ruby>');   // furigana: [漢字]{かんじ}
  out = out.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, function(m, id, shown, at, all){
    var t = ICA.terms[id]; var label = shown || (t ? ICA.termInSentence(t.term, all.slice(0, at)) : id.replace(/-/g, " "));
    if (!t && ICA.units && ICA.units.length) return label;   // term not built yet: plain words
    return '<button type="button" class="term" data-term="'+id+'">'+label+'</button>';
  });
  out = out.replace(/\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g, function(m, id, shown){
    var e = ICA.codex[id]; var label = shown || (e ? e.title : id.replace(/-/g, " "));
    if (!e && ICA.units && ICA.units.length) return label;   // entry not built yet: plain words, no broken link
    return '<a class="xref" href="'+ICA.base+'codex/index.html#'+id+'">'+label+'</a>';
  });
  out = out.replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  out = out.replace(/\n/g, "<br>");
  out = out.split(/(<[^>]*>)/).map(function(seg){   // mark Japanese text so devices pick Japanese glyphs
    return seg.charAt(0) === "<" ? seg : seg.replace(ICA.JA, '<span lang="ja">$&</span>');
  }).join("");
  out = out.replace(/\u0000(\d+)\u0000/g, function(m, i){ return "<code>"+codes[+i].replace(/([_\/.,=&])(?=[^\s])/g, "$1<wbr>")+"</code>"; });   // let long code words break at sensible points
  return out;
};

/* Block content (lessons and Codex entries share this):
   "paragraph" · {h:"subheading"} · {list:[]} · {ol:[]} · {table:[[head...],[row...]]}
   {tip:""} {warn:""} {key:""} (big idea) · {ex:"", label:""} (worked example, \n allowed)
   {fig:"<svg>…</svg>", alt:"", cap:""} · {lead:""} */
ICA.blocks = function(list){
  return (list||[]).map(function(b){
    if (typeof b === "string") return "<p>"+ICA.md(b)+"</p>";
    if (b.h) return "<h3>"+ICA.md(b.h)+"</h3>";
    if (b.lead) return '<p class="lead">'+ICA.md(b.lead)+"</p>";
    if (b.list) return "<ul>"+b.list.map(function(x){ return "<li>"+ICA.md(x)+"</li>"; }).join("")+"</ul>";
    if (b.ol) return "<ol>"+b.ol.map(function(x){ return "<li>"+ICA.md(x)+"</li>"; }).join("")+"</ol>";
    if (b.table){ var hd = b.table[0], t = '<div class="tw" tabindex="0"><table class="c'+hd.length+'">'; b.table.forEach(function(r, i){ t += "<tr>"+r.map(function(c, j){ return i ? '<td data-l="'+ICA.esc(String(hd[j]||"").replace(/[*`]/g,""))+'">'+ICA.md(c)+"</td>" : "<th>"+ICA.md(c)+"</th>"; }).join("")+"</tr>"; }); return t+"</table></div>"; }
    if (b.tip) return '<div class="callout tip"><b class="h">Tip</b>'+ICA.md(b.tip)+"</div>";
    if (b.warn) return '<div class="callout warn"><b class="h">Watch out</b>'+ICA.md(b.warn)+"</div>";
    if (b.key) return '<div class="callout key"><b class="h">Big idea</b>'+ICA.md(b.key)+"</div>";
    if (b.ex) return '<div class="callout ex"><b class="h">'+ICA.esc(b.label||"Example")+"</b>"+(b.mono ? "<pre>"+ICA.esc(b.ex)+"</pre>" : ICA.md(b.ex))+"</div>";
    if (b.terms) return '<dl class="keyterms">'+b.terms.map(function(id){ var t = ICA.terms[id]; return t ? '<dt><button type="button" class="term" data-term="'+id+'">'+ICA.esc(t.term)+'</button></dt><dd>'+ICA.md(t.def)+'</dd>' : ""; }).join("")+'</dl>';
    if (b.look) return '<div class="callout look"><b class="h">Look for these while you read</b><ol>'+b.look.map(function(x){ return "<li>"+ICA.md(x)+"</li>"; }).join("")+'</ol></div>';
    if (b.beyond) return '<div class="callout beyond"><b class="h">Beyond the book</b>'+ICA.md(b.beyond)+'</div>';
    if (b.fix) return '<div class="callout fix"><b class="h">Textbook check</b>'+ICA.md(b.fix)+'</div>';
    if (b.code !== undefined){ var cid = "cb" + Math.random().toString(36).slice(2, 8); ICA.codes = ICA.codes || {}; ICA.codes[cid] = b.code;
      return '<figure class="codeblk"><figcaption><span>'+ICA.esc(b.label || ({html:"HTML", css:"CSS", js:"JavaScript", sh:"Command line", py:"Python", r:"R", sql:"SQL", txt:"Text"}[b.lang] || "Code"))+'</span><span class="cbtns">'+(b.weblab ? '<a href="'+ICA.base+'labs/web.html#'+ICA.esc(b.weblab)+'">Try in Web Lab</a>' : '')+(b.pylab ? '<a href="'+ICA.base+'labs/python.html#'+ICA.esc(b.pylab)+'">Try in Python Lab</a>' : '')+'<button type="button" data-copycode="'+cid+'">Copy</button></span></figcaption><pre><code class="lang-'+ICA.esc(b.lang || "txt")+'">'+ICA.esc(b.code)+'</code></pre>'+(b.cap ? '<p class="small muted">'+ICA.md(b.cap)+'</p>' : '')+'</figure>'; }
    if (b.lab && /^kl-/.test(b.lab)) return '<a class="callout labcall" href="'+ICA.base+'labs/kanji.html#'+ICA.esc(b.lab)+'"><b class="h">🀄 Practise in the Kanji Lab</b><span>'+ICA.md(b.t || "Daily spaced review")+' →</span></a>';
    if (b.lab && /^dl-/.test(b.lab)) return '<a class="callout labcall" href="'+ICA.base+'labs/data.html#'+ICA.esc(b.lab)+'"><b class="h">📈 Practise in the Data Lab</b><span>'+ICA.md(b.t || "Try it with real data")+' →</span></a>';
    if (b.lab && /^cl-/.test(b.lab)) return '<a class="callout labcall" href="'+ICA.base+'labs/cite.html#'+ICA.esc(b.lab)+'"><b class="h">📚 Practise in the Citation Lab</b><span>'+ICA.md(b.t || "Build a real reference")+' →</span></a>';
    if (b.lab && /^pl-/.test(b.lab)) return '<a class="callout labcall" href="'+ICA.base+'labs/python.html#'+ICA.esc(b.lab)+'"><b class="h">🐍 Practise in the Python Lab</b><span>'+ICA.md(b.t || "Try it for real")+' →</span></a>';
    if (b.lab) return /^wl-/.test(b.lab) ? '<a class="callout labcall" href="'+ICA.base+'labs/web.html#'+ICA.esc(b.lab)+'"><b class="h">🌐 Practise in the Web Lab</b><span>'+ICA.md(b.t || "Try it live")+' →</span></a>' : '<a class="callout labcall" href="'+ICA.base+'labs/formula.html#'+ICA.esc(b.lab)+'"><b class="h">🧮 Practise in the Formula Lab</b><span>'+ICA.md(b.t || "Try it on a real practice sheet")+' →</span></a>';
    if (b.fig){
      var vb = /viewBox="\s*[\d.-]+\s+[\d.-]+\s+([\d.]+)/.exec(b.fig), w = vb ? Math.round(+vb[1]*0.86) : 420;
      var fid = ICA.figs.push(b) - 1;
      return '<figure><button type="button" class="figzoom" data-fig="'+fid+'" aria-label="Enlarge diagram: '+ICA.esc(b.alt||b.cap||"")+'"><span class="figscroll">'+b.fig+'</span><span class="hint">Tap to enlarge</span></button>'+(b.cap?"<figcaption>"+ICA.md(b.cap)+"</figcaption>":"")+"</figure>";
    }
    return "";
  }).join("");
};

/* ---------- toast, sheet, glossary pop-up ---------- */
var toastT;
/* Mugi, the academy's guide. mood: hello | think | oops | yay | tip | sleepy */
ICA.MUGI_ALT = {hello:"Mugi waving hello", think:"Mugi thinking, hand on chin", oops:"Mugi wincing with a sweat drop", yay:"Mugi cheering with sparkly eyes", tip:"Mugi raising one finger to explain", sleepy:"Mugi dozing off"};
ICA.mugi = function(mood, html, opt){
  opt = opt || {};
  return '<div class="mugi'+(opt.small ? " sm" : "")+(opt.cls ? " "+opt.cls : "")+'"><img src="'+ICA.base+'shared/mascot/'+mood+'.webp" alt="'+ICA.MUGI_ALT[mood]+'" width="'+(opt.small ? 64 : 96)+'" loading="lazy"><div class="bubble">'+html+'</div></div>';
};
ICA.toast = function(msg){
  var t = ICA.$(".toast"); if (!t){ t = document.createElement("div"); t.className = "toast"; t.setAttribute("role","status"); document.body.appendChild(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function(){ t.hidden = true; }, 2200);
};
var lastFocus = null;
ICA.sheet = function(html, onOpen){
  ICA.closeSheet();
  if (ICA.onSheet) ICA.onSheet(true);     // e.g. the Arcade pauses a game clock
  lastFocus = document.activeElement;
  var bg = document.createElement("div"); bg.className = "sheetbg"; bg.id = "sheetbg";
  bg.innerHTML = '<div class="sheet" role="dialog" aria-modal="true"><button class="iconbtn x" data-close aria-label="Close">✕</button>'+html+'</div>';
  document.body.appendChild(bg);
  bg.addEventListener("click", function(e){ if (e.target === bg || e.target.closest("[data-close]")) ICA.closeSheet(); });
  var f = bg.querySelector("button,input,textarea,select,a"); if (f) f.focus();
  if (onOpen) onOpen(bg.querySelector(".sheet"));
  return bg.querySelector(".sheet");
};
ICA.closeSheet = function(){ var b = document.getElementById("sheetbg"); if (b){ b.parentNode.removeChild(b); if (lastFocus && lastFocus.focus) lastFocus.focus(); if (ICA.onSheet) ICA.onSheet(false); } };
ICA.closePop = function(){ var p = ICA.$(".pop"); if (p) p.parentNode.removeChild(p); };
ICA.showTerm = function(id){
  ICA.closePop();
  var t = ICA.terms[id]; if (!t) return;
  var p = document.createElement("div"); p.className = "pop"; p.setAttribute("role","dialog"); p.setAttribute("aria-label", t.term);
  p.innerHTML = '<div class="spread"><span class="t">'+ICA.esc(t.term)+'</span><button class="iconbtn" data-closepop aria-label="Close">✕</button></div><div>'+ICA.md(t.def)+'</div>'+
    (t.codex && ICA.codex[t.codex] ? '<a class="btn small" href="'+ICA.base+'codex/index.html#'+t.codex+'">Open “'+ICA.esc(ICA.codex[t.codex].title)+'” in the Codex</a>' : "");
  document.body.appendChild(p);
  var c = p.querySelector("[data-closepop]"); c.focus();
};
document.addEventListener("click", function(e){
  var t = e.target.closest ? e.target.closest("[data-term]") : null;
  if (t){ e.preventDefault(); ICA.showTerm(t.getAttribute("data-term")); return; }
  if (e.target.closest && e.target.closest("[data-closepop]")){ ICA.closePop(); return; }
  var fz = e.target.closest ? e.target.closest("[data-fig]") : null;
  if (fz){ var f = ICA.figs[+fz.getAttribute("data-fig")]; if (f){ ICA.sheet('<h2>'+ICA.esc(f.cap ? f.cap.replace(/[*`]/g,"") : "Diagram")+'</h2><div class="row"><button class="btn small" data-zoom="1">Fit</button><button class="btn small" data-zoom="1.6">Bigger</button><button class="btn small" data-zoom="2.4">Biggest</button></div><div class="zoomview">'+f.fig+'</div><p class="small muted">On a phone you can also turn it sideways or pinch to zoom.</p>', function(sh){ sh.addEventListener("click", function(ev){ var z = ev.target.closest("[data-zoom]"); if (z) sh.querySelector(".zoomview").style.setProperty("--zw", (+z.getAttribute("data-zoom")*100)+"%"); }); }); } return; }
  if (ICA.$(".pop") && !(e.target.closest && e.target.closest(".pop"))) ICA.closePop();
});
document.addEventListener("keydown", function(e){ if (e.key === "Escape"){ ICA.closePop(); ICA.closeSheet(); } });

/* ---------- report a mistake ---------- */
ICA.report = function(where){
  ICA.sheet('<h2>Report a mistake</h2><p class="muted">Tell us what looks wrong or confusing. Your note is saved on this device, in Progress on the desk, where you can copy all your notes at once.</p><p class="small"><b>Where:</b> '+ICA.esc(where)+'</p><label class="lb" for="repnote">What’s wrong?</label><textarea id="repnote" placeholder="For example: step 3 says Settings, but my phone calls it Preferences."></textarea><div class="row"><button class="btn primary" id="repsave">Save note</button><button class="btn ghost" data-close>Cancel</button></div>', function(sh){
    sh.querySelector("#repsave").addEventListener("click", function(){
      var note = sh.querySelector("#repnote").value.trim();
      if (!note){ sh.querySelector("#repnote").focus(); return; }
      var st = ICA.load(); st.reports.push({where:where, note:note, ts:Date.now()}); ICA.save();
      ICA.closeSheet(); ICA.toast("Saved. Thank you!");
    });
  });
};

/* ---------- Settings (every page): display, text size, sound, backup / restore, erase (short, no progress) ---------- */
ICA.settingsSheet = function(o){
  o = o || {};
  var st = ICA.load(), s = st.settings;
  var snd = s.sound || (st.arcade && st.arcade.jp && st.arcade.jp.snd === false ? "off" : "on");
  function seg(name, label, opts, cur){ return '<div class="spread"><span id="lb-'+name+'">'+label+'</span><div class="seg3" role="group" aria-labelledby="lb-'+name+'">'+opts.map(function(o){ return '<button data-set="'+name+'" data-val="'+o[0]+'" aria-pressed="'+(o[0]===cur)+'">'+o[1]+'</button>'; }).join("")+'</div></div>'; }
  ICA.sheet('<div class="eyebrow">Settings</div><h2>Settings</h2>'+
    '<div class="stack setlist">'+seg("theme","Display mode",[["system","Auto"],["light","Light"],["dark","Dark"]],s.theme)+seg("size","Text size",[["small","Smaller"],["normal","Normal"],["large","Larger"]],s.size)+seg("sound","Sound effects",[["on","On"],["off","Off"]],snd)+seg("audioSpeed","Listening speed",[["1","Normal"],["0.75","Slower"]],s.audioSpeed || "1")+seg("audioAuto","Play examples by themselves",[["off","Off"],["on","On"]],s.audioAuto || "off")+'</div>'+
    '<h3>Sync with Google Drive</h3><div id="syncbox"></div>'+
    '<h3>Backup</h3><p class="small muted">Without sync, progress is saved in this browser only. A backup lets you move it to another device or keep it safe.</p><div class="row"><button class="btn small" id="dl">Download backup</button><button class="btn small" id="cp">Copy backup</button></div>'+
    '<details'+(o.openRestore ? ' open' : '')+'><summary class="small"><b>Restore from a backup</b></summary><div class="stack" style="margin-top:8px"><label class="lb" for="restfile">Choose a backup file</label><input type="file" id="restfile" accept=".json,application/json"><label class="lb" for="resttext">…or paste backup text</label><textarea id="resttext" placeholder="{ &quot;v&quot;: 1, … }"></textarea><button class="btn small" id="restore">Restore</button><div id="restmsg"></div></div></details>'+
    '<h3>Start over</h3><p class="small muted">Erase everything on this device: lessons, quiz scores, flashcards, notes, every lab’s progress (including Kanji Lab reviews), tracks and settings. This can’t be undone, so download a backup first if you might want it back.</p><div class="row"><button class="btn small" id="erase">Erase all progress…</button></div><div id="eraseconfirm"></div>'+
    '<div class="row">'+(o.progress ? '<button class="btn small ghost" id="goprogress">See my progress</button>' : '')+(o.setup ? '<button class="btn small ghost" id="gosetup">Run setup again</button>' : '<a class="btn small ghost" href="'+ICA.base+'index.html#setup">Run setup again</a>')+'</div>'+
    '<p class="small muted">Version: Pass 20 · four tracks, four electives, six labs · International Studies Passes A–C · Japanese Foundations N5–N3 · Drive sync · Mugi.</p>', function(sh){
    sh.setAttribute("aria-label", "Settings"); sh.id = "settingspanel";
    sh.addEventListener("click", function(e){
      var b = e.target.closest("[data-set]");
      if (b){ var k = b.getAttribute("data-set"), v = b.getAttribute("data-val"); st.settings[k] = v; if (k === "sound" && st.arcade && st.arcade.jp) st.arcade.jp.snd = v === "on"; ICA.save(); ICA.applySettings(); if (ICA.onSettings) ICA.onSettings(k, v); ICA.$$('[data-set="'+k+'"]', sh).forEach(function(x){ x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); }
    });
    if (o.progress) sh.querySelector("#goprogress").onclick = o.progress;
    if (o.setup) sh.querySelector("#gosetup").onclick = o.setup;
    sh.querySelector("#erase").onclick = function(){
      var box = sh.querySelector("#eraseconfirm");
      box.innerHTML = '<div class="card stack" style="border-color:var(--bad)"><b>Erase all progress on this device?</b><span class="small">You’ll start fresh, as if opening IT CHICK Academy for the first time.</span><div class="row"><button class="btn small" id="erasecancel">Keep my progress</button><button class="btn small primary" id="eraseyes" style="background:var(--bad);border-color:var(--bad)">Yes, erase everything</button></div></div>';
      sh.querySelector("#erasecancel").onclick = function(){ box.innerHTML = ""; };
      sh.querySelector("#eraseyes").onclick = function(){ ICA.eraseAll(); ICA.applySettings(); ICA.closeSheet(); window.scrollTo(0, 0); if (o.after){ o.after(); ICA.toast("All progress erased. Fresh start!"); } else location.reload(); };
    };
    var sbox = sh.querySelector("#syncbox");
    var drawSync = function(msg, bad){
      var on = ICA.syncOn();
      sbox.innerHTML = on
        ? '<p class="small muted">Your progress is kept in a hidden app folder in your own Google Drive, so every device you sign in on stays in step. '+ICA.syncLabel()+'.</p><div class="row"><button class="btn small" id="syncnow">Sync now</button><button class="btn small ghost" id="syncoff">Stop syncing on this device</button></div>'
        : '<p class="small muted">Sign in with Google to keep your progress in step across your phone, tablet and computer. It’s saved as one small file in a hidden app folder in your own Google Drive: the app can’t see anything else in your Drive.</p><div class="row"><button class="btn small" id="syncnow">Connect Google Drive</button></div>';
      if (msg) sbox.innerHTML += '<div class="fb '+(bad ? 'part' : 'ok')+'" role="status">'+ICA.esc(msg)+'</div>';
      sbox.querySelector("#syncnow").onclick = function(){ var b = this; b.disabled = true; b.textContent = "Syncing…";
        ICA.syncNow({interactive:true}).then(function(){ drawSync("Synced. Your progress is up to date."); if (o.after) o.after(); })
          .catch(function(e){ drawSync(e.message === "signin" ? "Google asked to sign in again. Tap the button once more." : e.message, true); }); };
      var off = sbox.querySelector("#syncoff"); if (off) off.onclick = function(){ ICA.syncOff(); drawSync("Sync is off on this device. Your progress here is kept."); };
    };
    drawSync();
    sh.querySelector("#dl").onclick = function(){ var ok = ICA.download("itchick-backup-"+new Date().toISOString().slice(0,10)+".json", ICA.exportText()); ICA.toast(ok ? "Backup downloaded" : "Download isn’t available here. Use Copy backup."); };
    sh.querySelector("#cp").onclick = function(){ ICA.copy(ICA.exportText(), function(ok){ ICA.toast(ok ? "Backup copied. Paste it somewhere safe." : "Couldn’t copy here."); }); };
    function tryRestore(text){
      var msg = sh.querySelector("#restmsg"), obj;
      try { obj = JSON.parse(text); } catch(err){ msg.innerHTML = '<div class="fb no"><b>That isn’t a backup.</b>The text couldn’t be read. Check that you pasted all of it, from the first { to the last }.</div>'; return; }
      if (!obj || obj.v !== 1 || typeof obj.lessons !== "object"){ msg.innerHTML = '<div class="fb no"><b>That isn’t an IT CHICK Academy backup.</b>It’s missing the parts a backup always has.</div>'; return; }
      msg.innerHTML = '<div class="card stack"><span>This replaces the progress on this device with the backup. Continue?</span><div class="row"><button class="btn small primary" id="yesrest">Replace my progress</button></div></div>';
      sh.querySelector("#yesrest").onclick = function(){ ICA.replaceStore(obj); ICA.applySettings(); ICA.closeSheet(); if (o.after){ o.after(); ICA.toast("Backup restored"); } else location.reload(); };
    }
    sh.querySelector("#restore").onclick = function(){
      var f = sh.querySelector("#restfile").files[0], txt = sh.querySelector("#resttext").value.trim();
      if (f){ var r = new FileReader(); r.onload = function(){ tryRestore(String(r.result)); }; r.readAsText(f); }
      else if (txt) tryRestore(txt);
      else sh.querySelector("#restmsg").innerHTML = '<div class="fb part"><b>Nothing to restore yet.</b>Choose a file or paste backup text first.</div>';
    };
  });
};

/* ---------- top bar used by every app ---------- */
ICA.topbar = function(title){
  var bar = document.createElement("header"); bar.className = "topbar";
  bar.innerHTML = '<div class="in"><a class="home" href="'+ICA.base+'" aria-label="Home: back to your study desk"><span class="dot" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/></svg></span><span>Home</span></a><span class="title">'+ICA.esc(title)+'</span><button class="iconbtn setb" type="button" aria-label="Settings" title="Settings">⚙︎</button></div>';
  bar.querySelector(".setb").addEventListener("click", function(){ ICA.settingsSheet(); });
  document.body.insertBefore(bar, document.body.firstChild);
  return bar;
};

/* =====================================================================
   EXERCISES
   Every exercise explains the specific mistake, not just right/wrong.
   Types: mcq · sort · order · match · spot · number
   ICA.exercise(el, ex, {onSolved(firstTry), quiz:false})
   ===================================================================== */
var KIND = {mcq:"Choose", sort:"Sort", order:"Put in order", match:"Match", spot:"Spot it", number:"Work it out"};
function head(ex){ return '<div class="kind">'+(KIND[ex.type]||"Try")+'</div><div class="q">'+ICA.md(ex.q)+'</div>'+(ex.hint ? '<div class="small muted">'+ICA.md(ex.hint)+'</div>' : ""); }
function fbBox(cls, title, body){ return '<div class="fb '+cls+'" role="status"><b>'+title+'</b>'+(body||"")+'</div>'; }
function lis(arr){ return arr.length ? "<ul>"+arr.map(function(x){ return "<li>"+x+"</li>"; }).join("")+"</ul>" : ""; }

ICA.exercise = function(el, ex, opt){
  opt = opt || {};
  var R = RENDER[ex.type];
  el.className = "ex"; el.setAttribute("data-ex", ex.id || "");
  if (!R){ el.innerHTML = '<p class="muted">This exercise type isn’t available yet.</p>'; return; }
  var state = {tries:0, solved:false, firstTry:null};
  function solved(ok){ if (state.solved) return; state.solved = true; if (state.firstTry === null) state.firstTry = ok; if (opt.onSolved) opt.onSolved(state.firstTry); }
  function attempt(ok){ state.tries++; if (state.firstTry === null) state.firstTry = ok; if (ok) solved(true); }
  R(el, ex, {attempt:attempt, solved:solved, state:state, quiz:!!opt.quiz, onAnswer:opt.onAnswer});
};

var RENDER = {};

/* --- multiple choice (single or several right answers) --- */
RENDER.mcq = function(el, ex, api){
  var multi = ex.options.filter(function(o){ return o.ok; }).length > 1;
  var order = ex.fixed ? ex.options.map(function(o, i){ return i; }) : ICA.shuffle(ex.options.map(function(o, i){ return i; }));
  el.innerHTML = head(ex) + (multi ? '<div class="small muted">Choose all that apply.</div>' : "") +
    '<div class="opts" role="'+(multi?"group":"radiogroup")+'">'+order.map(function(i){ return '<button type="button" class="opt" data-i="'+i+'" role="'+(multi?"checkbox":"radio")+'" aria-checked="false"><span class="mk" aria-hidden="true"></span><span>'+ICA.md(ex.options[i].t)+'</span></button>'; }).join("")+'</div>'+
    (multi ? '<div class="row"><button type="button" class="btn primary" data-check>Check</button></div>' : "")+'<div class="fbw"></div>';
  var fbw = el.querySelector(".fbw"), btns = ICA.$$(".opt", el), picked = {};
  function lock(){ btns.forEach(function(b){ b.disabled = true; }); }
  function why(o){ return o.why ? ICA.md(o.why) : ""; }
  function finishReveal(){
    btns.forEach(function(b){ var o = ex.options[+b.getAttribute("data-i")]; if (o.ok) b.classList.add("right"); });
    lock();
  }
  if (!multi){
    btns.forEach(function(b){
      b.addEventListener("click", function(){
        var o = ex.options[+b.getAttribute("data-i")];
        btns.forEach(function(x){ x.setAttribute("aria-checked", x === b ? "true" : "false"); });
        if (o.ok){
          b.classList.add("right"); lock();
          fbw.innerHTML = fbBox("ok", api.state.tries ? "That’s it." : "Correct.", "<div>"+why(o)+(ex.why ? " "+ICA.md(ex.why) : "")+"</div>");
          api.attempt(true);
          if (api.onAnswer) api.onAnswer(api.state.firstTry, o);
        } else {
          b.classList.add("wrong");
          if (api.quiz){
            finishReveal();
            var right = ex.options.filter(function(x){ return x.ok; })[0];
            fbw.innerHTML = fbBox("no", "Not quite.", "<div>"+why(o)+"</div><div><b>Answer:</b> "+ICA.md(right.t)+". "+why(right)+(ex.why ? " "+ICA.md(ex.why) : "")+"</div>");
            api.attempt(false); api.solved(false);
            if (api.onAnswer) api.onAnswer(false, o);
          } else {
            b.disabled = true;
            api.attempt(false);
            fbw.innerHTML = fbBox("no", "Not quite. Try another answer.", "<div>"+why(o)+"</div>");
          }
        }
      });
    });
  } else {
    btns.forEach(function(b){ b.addEventListener("click", function(){ var i = b.getAttribute("data-i"); picked[i] = !picked[i]; b.classList.toggle("sel", !!picked[i]); b.setAttribute("aria-checked", picked[i] ? "true" : "false"); }); });
    el.querySelector("[data-check]").addEventListener("click", function(){
      var wrongPicked = [], missed = [], rightPicked = [];
      ex.options.forEach(function(o, i){ var p = !!picked[i]; if (p && o.ok) rightPicked.push(o); else if (p && !o.ok) wrongPicked.push(o); else if (!p && o.ok) missed.push(o); });
      var ok = !wrongPicked.length && !missed.length;
      btns.forEach(function(b){ b.classList.remove("right","wrong"); var i = +b.getAttribute("data-i"), o = ex.options[i]; if (picked[i]) b.classList.add(o.ok ? "right" : "wrong"); });
      if (ok){
        lock(); this.disabled = true;
        fbw.innerHTML = fbBox("ok", "All correct.", lis(rightPicked.map(function(o){ return "<b>"+ICA.md(o.t)+"</b>: "+why(o); }))+(ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""));
        api.attempt(true); if (api.onAnswer) api.onAnswer(api.state.firstTry);
      } else {
        api.attempt(false);
        var body = "";
        if (wrongPicked.length) body += "<div><b>These don’t belong:</b></div>"+lis(wrongPicked.map(function(o){ return "<b>"+ICA.md(o.t)+"</b>: "+why(o); }));
        if (missed.length) body += "<div><b>"+(missed.length === 1 ? "One more is right." : missed.length+" more are right.")+"</b> "+(api.quiz ? "" : "Look again before you check.")+"</div>";
        if (api.quiz){
          finishReveal(); this.disabled = true;
          if (missed.length) body += lis(missed.map(function(o){ return "<b>"+ICA.md(o.t)+"</b>: "+why(o); }));
          api.solved(false); if (api.onAnswer) api.onAnswer(false);
        }
        fbw.innerHTML = fbBox(wrongPicked.length ? "no" : "part", api.quiz ? "Not quite." : "Not quite yet.", body);
      }
    });
  }
};

/* --- sort items into groups (tap an item, then tap a group) --- */
RENDER.sort = function(el, ex, api){
  var place = {}, sel = null;
  var order = ICA.shuffle(ex.items.map(function(x, i){ return i; }));
  el.innerHTML = head(ex)+'<div class="small muted">Tap an item, then tap the group it belongs in. Tap a placed item to move it back.</div><div class="pool" aria-label="Items to sort"></div><div class="buckets">'+ex.buckets.map(function(b, i){ return '<button type="button" class="bucket" data-b="'+i+'"><h4>'+ICA.md(b)+'</h4><div class="in"></div></button>'; }).join("")+'</div><div class="row"><button type="button" class="btn primary" data-check disabled>Check</button></div><div class="fbw"></div>';
  var pool = el.querySelector(".pool"), fbw = el.querySelector(".fbw"), check = el.querySelector("[data-check]");
  function chip(i){ return '<span role="button" tabindex="0" class="chipbtn'+(sel===i?" sel":"")+'" data-item="'+i+'">'+ICA.md(ex.items[i].t)+'</span>'; }
  function draw(){
    pool.innerHTML = order.filter(function(i){ return place[i] === undefined; }).map(chip).join("") || '<span class="small muted">All placed.</span>';
    ICA.$$(".bucket", el).forEach(function(bk){ var b = +bk.getAttribute("data-b"); bk.classList.toggle("armed", sel !== null); bk.querySelector(".in").innerHTML = order.filter(function(i){ return place[i] === b; }).map(chip).join(""); });
    check.disabled = Object.keys(place).length < ex.items.length || api.state.solved;
  }
  el.addEventListener("click", function(e){
    if (api.state.solved) return;
    var it = e.target.closest("[data-item]");
    if (it){ e.stopPropagation(); var i = +it.getAttribute("data-item"); if (place[i] !== undefined){ delete place[i]; sel = i; } else sel = (sel === i ? null : i); fbw.innerHTML = ""; draw(); return; }
    var bk = e.target.closest(".bucket");
    if (bk && sel !== null){ place[sel] = +bk.getAttribute("data-b"); sel = null; draw(); }
  });
  el.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && e.target.getAttribute("data-item") !== null){ e.preventDefault(); e.target.click(); } });
  check.addEventListener("click", function(){
    var wrong = [];
    ex.items.forEach(function(it, i){ if (place[i] !== it.b) wrong.push(i); });
    if (!wrong.length){
      draw(); ICA.$$("[data-item]", el).forEach(function(c){ c.classList.add("right"); });
      fbw.innerHTML = fbBox("ok", "All sorted correctly.", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : "");
      api.attempt(true); check.disabled = true; return;
    }
    api.attempt(false);
    ICA.$$("[data-item]", el).forEach(function(c){ var i = +c.getAttribute("data-item"); c.classList.add(wrong.indexOf(i) > -1 ? "wrong" : "right"); });
    fbw.innerHTML = fbBox("no", wrong.length === 1 ? "One item is in the wrong group." : wrong.length+" items are in the wrong group.", lis(wrong.map(function(i){ return "<b>"+ICA.md(ex.items[i].t)+"</b> belongs in <b>"+ICA.md(ex.buckets[ex.items[i].b])+"</b>. "+ICA.md(ex.items[i].why||""); }))+'<div class="row"><button type="button" class="btn small" data-retry>Move the wrong ones back and try again</button></div>');
    fbw.querySelector("[data-retry]").addEventListener("click", function(){ wrong.forEach(function(i){ delete place[i]; }); fbw.innerHTML = ""; draw(); });
    check.disabled = true;
  });
  draw();
};

/* --- put steps in order: tap the steps first to last, or drag them by the handle --- */
RENDER.order = function(el, ex, api){
  var n = ex.items.length, cur, k = 0;   // k = how many steps have been placed at the top
  do { cur = ICA.shuffle(ex.items.map(function(x, i){ return i; })); } while (n > 1 && cur.every(function(v, i){ return v === i; }));
  el.innerHTML = head(ex)+'<div class="small muted">Tap the steps from first to last, or drag them by ⠿. Tap a numbered step to undo it.</div><ol class="orderlist"></ol><div class="row"><button type="button" class="btn primary" data-check>Check order</button><button type="button" class="btn small" data-reset>Start over</button></div><div class="fbw"></div>';
  var ol = el.querySelector(".orderlist"), fbw = el.querySelector(".fbw"), done = function(){ return api.state.solved; };
  function draw(marks){
    ol.innerHTML = cur.map(function(v, pos){
      var placed = pos < k;
      return '<li data-v="'+v+'" data-pos="'+pos+'" class="'+(placed ? "placed " : "")+(marks ? (v === pos ? "right" : "wrong") : "")+'" tabindex="0" role="button" aria-label="'+ICA.esc(ex.items[v].t.replace(/\[([^\]]+)\]\{[^}]*\}/g, "$1"))+(placed ? ", step "+(pos+1) : ", not placed yet")+'"><span class="n">'+(placed ? pos+1 : "·")+'</span><span class="tx">'+ICA.md(ex.items[v].t)+'</span>'+(done() ? "" : '<span class="grip" aria-hidden="true">⠿</span>')+'</li>';
    }).join("");
    el.querySelector("[data-reset]").hidden = done() || k === 0;
  }
  function changed(){ fbw.innerHTML = ""; draw(); }
  function move(from, to){ var v = cur.splice(from, 1)[0]; cur.splice(to, 0, v); }
  function tapRow(pos){
    if (done()) return;
    if (pos >= k){ move(pos, k); k++; }            // place it next
    else { move(pos, k - 1); k--; }               // take it back out
    changed(); var f = ol.children[Math.min(k, n - 1)]; if (f && document.activeElement && ol.contains(document.activeElement)) f.focus();
  }
  ol.addEventListener("click", function(e){ if (e.target.closest(".grip") || dragged) return; var li = e.target.closest("li"); if (li) tapRow(+li.getAttribute("data-pos")); });
  ol.addEventListener("keydown", function(e){
    var li = e.target.closest("li"); if (!li || done()) return; var p = +li.getAttribute("data-pos");
    if (e.key === "Enter" || e.key === " "){ e.preventDefault(); tapRow(p); }
    else if ((e.key === "ArrowUp" && p > 0) || (e.key === "ArrowDown" && p < n - 1)){
      e.preventDefault(); var q = e.key === "ArrowUp" ? p - 1 : p + 1; move(p, q); k = Math.max(k, Math.max(p, q) + 1); changed(); ol.children[q].focus();
    }
  });
  /* drag by the handle (mouse, pen or finger) */
  var drag = null, dragged = false;
  ol.addEventListener("pointerdown", function(e){
    var g = e.target.closest(".grip"); if (!g || done()) return;
    var li = g.closest("li"); e.preventDefault(); dragged = false;
    drag = {li: li, y0: e.clientY, top0: li.offsetTop, id: e.pointerId};
    try { g.setPointerCapture(e.pointerId); } catch(x){}
    li.classList.add("dragging");
  });
  ol.addEventListener("pointermove", function(e){
    if (!drag || e.pointerId !== drag.id) return;
    var li = drag.li, want = drag.top0 + (e.clientY - drag.y0), mid = want + li.offsetHeight/2;
    if (Math.abs(e.clientY - drag.y0) > 4) dragged = true;
    var prev = li.previousElementSibling, next = li.nextElementSibling;
    if (prev && mid < prev.offsetTop + prev.offsetHeight/2) ol.insertBefore(li, prev);
    else if (next && mid > next.offsetTop + next.offsetHeight/2) ol.insertBefore(next, li);
    li.style.transform = "translateY(" + (want - li.offsetTop) + "px)";
  });
  function endDrag(){
    if (!drag) return; var li = drag.li; drag = null; li.style.transform = ""; li.classList.remove("dragging");
    if (dragged){
      var order = ICA.$$("li", ol).map(function(x){ return +x.getAttribute("data-v"); });
      if (order.join() !== cur.join()){ cur = order; var at = order.indexOf(+li.getAttribute("data-v")); k = Math.max(k, at + 1); }
      changed();
    }
    setTimeout(function(){ dragged = false; }, 0);
  }
  ol.addEventListener("pointerup", endDrag); ol.addEventListener("pointercancel", endDrag);
  el.querySelector("[data-reset]").addEventListener("click", function(){ k = 0; changed(); });
  el.querySelector("[data-check]").addEventListener("click", function(){
    var ok = cur.every(function(v, i){ return v === i; });
    if (ok){ api.attempt(true); this.disabled = true; k = n; draw(true); fbw.innerHTML = fbBox("ok", "Right order.", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""); return; }
    api.attempt(false); draw(true);
    var first = -1; cur.forEach(function(v, i){ if (first < 0 && v !== i) first = i; });
    var should = ex.items[first];
    fbw.innerHTML = fbBox("no", "Not in order yet.", "<div>Step "+(first+1)+" should be <b>"+ICA.md(should.t)+"</b>. "+ICA.md(should.why||"")+"</div>"+(api.state.tries >= 2 ? '<div class="row"><button type="button" class="btn small" data-show>Show the correct order</button></div>' : ""));
    var sb = fbw.querySelector("[data-show]");
    if (sb) sb.addEventListener("click", function(){ cur = ex.items.map(function(x, i){ return i; }); k = n; api.solved(false); draw(true); fbw.innerHTML = fbBox("part", "Here’s the correct order.", lis(ex.items.map(function(it){ return "<b>"+ICA.md(it.t)+"</b>"+(it.why ? ": "+ICA.md(it.why) : ""); }))); });
  });
  draw();
};

/* --- match each left item with a right item (drop-downs) --- */
RENDER.match = function(el, ex, api){
  var rights = ICA.shuffle(ex.pairs.map(function(p, i){ return i; }));
  el.innerHTML = head(ex)+'<div class="stack">'+ex.pairs.map(function(p, i){ return '<div class="card" style="padding:10px 12px"><label class="lb" for="m'+i+'_'+(ex.id||"")+'">'+ICA.md(p[0])+'</label><select id="m'+i+'_'+(ex.id||"")+'" data-left="'+i+'" style="width:100%;margin-top:6px;padding:9px;border-radius:10px;border:1px solid var(--line);background:var(--bg)"><option value="">Choose…</option>'+rights.map(function(r){ return '<option value="'+r+'">'+ICA.esc(ex.pairs[r][1])+'</option>'; }).join("")+'</select></div>'; }).join("")+'</div><div class="row"><button type="button" class="btn primary" data-check>Check</button></div><div class="fbw"></div>';
  var fbw = el.querySelector(".fbw");
  el.querySelector("[data-check]").addEventListener("click", function(){
    var sels = ICA.$$("select", el), wrong = [], empty = 0;
    sels.forEach(function(s){ s.style.borderColor = ""; var l = +s.getAttribute("data-left"); if (s.value === "") empty++; else if (+s.value !== l) wrong.push(l); });
    if (empty){ fbw.innerHTML = fbBox("part", "Choose a match for every item first.", ""); return; }
    sels.forEach(function(s){ var l = +s.getAttribute("data-left"); s.style.borderColor = wrong.indexOf(l) > -1 ? "var(--bad)" : "var(--ok)"; });
    if (!wrong.length){ fbw.innerHTML = fbBox("ok", "All matched.", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""); api.attempt(true); sels.forEach(function(s){ s.disabled = true; }); this.disabled = true; return; }
    api.attempt(false);
    fbw.innerHTML = fbBox("no", wrong.length === 1 ? "One match isn’t right." : wrong.length+" matches aren’t right.", "<div>Check these again:</div>"+lis(wrong.map(function(l){ return "<b>"+ICA.md(ex.pairs[l][0])+"</b>"+(ex.pairs[l][2] ? ": "+ICA.md(ex.pairs[l][2]) : ""); }))+(api.state.tries >= 2 ? '<div class="row"><button type="button" class="btn small" data-show>Show the answers</button></div>' : ""));
    var sb = fbw.querySelector("[data-show]");
    if (sb) sb.addEventListener("click", function(){ sels.forEach(function(s){ s.value = s.getAttribute("data-left"); s.style.borderColor = "var(--ok)"; s.disabled = true; }); api.solved(false); fbw.innerHTML = fbBox("part", "Here are the matches.", lis(ex.pairs.map(function(p){ return "<b>"+ICA.md(p[0])+"</b> → "+ICA.md(p[1]); }))); });
  });
};

/* --- spot the parts that matter in a text (emails, links, file names) --- */
RENDER.spot = function(el, ex, api){
  var picked = {};
  el.innerHTML = head(ex)+'<div class="small muted">Tap every part that '+ICA.esc(ex.ask || "is a warning sign")+'. Tap again to unselect.</div><div class="spot'+(ex.mono?" mono":"")+'">'+ex.parts.map(function(p, i){
    if (typeof p === "string") return ICA.md(p);
    return '<button type="button" class="seg" data-s="'+i+'" aria-pressed="false">'+ICA.md(p.t)+'</button>';
  }).join("")+'</div><div class="row"><button type="button" class="btn primary" data-check>Check</button></div><div class="fbw"></div>';
  var fbw = el.querySelector(".fbw"), segs = ICA.$$(".seg", el);
  segs.forEach(function(s){ s.addEventListener("click", function(){ if (api.state.solved) return; var i = s.getAttribute("data-s"); picked[i] = !picked[i]; s.classList.toggle("sel", !!picked[i]); s.setAttribute("aria-pressed", picked[i] ? "true" : "false"); fbw.innerHTML = ""; }); });
  el.querySelector("[data-check]").addEventListener("click", function(){
    var found = [], falseAlarm = [], missed = [];
    segs.forEach(function(s){ var i = +s.getAttribute("data-s"), p = ex.parts[i]; s.classList.remove("right","wrong","missed"); if (picked[i] && p.flag) found.push(i); else if (picked[i] && !p.flag) falseAlarm.push(i); else if (!picked[i] && p.flag) missed.push(i); });
    var ok = !falseAlarm.length && !missed.length;
    found.forEach(function(i){ segs.filter(function(s){ return +s.getAttribute("data-s") === i; })[0].classList.add("right"); });
    falseAlarm.forEach(function(i){ segs.filter(function(s){ return +s.getAttribute("data-s") === i; })[0].classList.add("wrong"); });
    function line(i){ return "<b>"+ICA.md(ex.parts[i].t)+"</b>: "+ICA.md(ex.parts[i].why||""); }
    if (ok){ fbw.innerHTML = fbBox("ok", "You found them all.", lis(found.map(line))+(ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : "")); api.attempt(true); this.disabled = true; return; }
    api.attempt(false);
    var body = "";
    if (found.length) body += "<div><b>Good catches:</b></div>"+lis(found.map(line));
    if (falseAlarm.length) body += "<div><b>These are actually fine:</b></div>"+lis(falseAlarm.map(line));
    if (missed.length) body += "<div><b>"+(missed.length === 1 ? "There’s one more to find." : "There are "+missed.length+" more to find.")+"</b></div>";
    if (missed.length && api.state.tries >= 2) body += '<div class="row"><button type="button" class="btn small" data-show>Show what I missed</button></div>';
    fbw.innerHTML = fbBox(falseAlarm.length ? "no" : "part", "Not quite yet.", body);
    var sb = fbw.querySelector("[data-show]");
    if (sb) sb.addEventListener("click", function(){ missed.forEach(function(i){ segs.filter(function(s){ return +s.getAttribute("data-s") === i; })[0].classList.add("missed"); }); api.solved(false); fbw.innerHTML = fbBox("part", "Here’s what was left.", lis(missed.map(line))); });
  });
};

/* --- calculate a number (with explanations for common wrong answers) --- */
RENDER.number = function(el, ex, api){
  var id = "n_"+(ex.id||Math.random().toString(36).slice(2));
  el.innerHTML = head(ex)+'<div class="numrow"><label class="lb" for="'+id+'">Your answer</label><input type="text" inputmode="decimal" id="'+id+'" autocomplete="off"><span>'+ICA.esc(ex.unit||"")+'</span><button type="button" class="btn primary" data-check>Check</button></div><div class="fbw"></div>';
  var inp = el.querySelector("input"), fbw = el.querySelector(".fbw");
  function near(v, target, tol){ return Math.abs(v - target) <= (tol || 0); }
  function go(){
    var raw = inp.value.replace(/,/g, "").trim(), v = parseFloat(raw);
    if (!raw || isNaN(v)){ fbw.innerHTML = fbBox("part", "Type a number first.", ""); return; }
    if (near(v, ex.answer, ex.tol)){ fbw.innerHTML = fbBox("ok", "Correct.", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""); api.attempt(true); inp.disabled = true; el.querySelector("[data-check]").disabled = true; return; }
    api.attempt(false);
    var hit = (ex.wrongs||[]).filter(function(w){ return near(v, w.v, w.tol); })[0];
    var msg = hit ? ICA.md(hit.why) : (v < ex.answer ? "That’s too small." : "That’s too large.")+(ex.hint2 ? " "+ICA.md(ex.hint2) : "");
    fbw.innerHTML = fbBox("no", "Not quite.", "<div>"+msg+"</div>"+(api.state.tries >= 2 ? '<div class="row"><button type="button" class="btn small" data-show>Show the working</button></div>' : ""));
    var sb = fbw.querySelector("[data-show]");
    if (sb) sb.addEventListener("click", function(){ api.solved(false); inp.value = ex.answer; inp.disabled = true; fbw.innerHTML = fbBox("part", "The answer is "+ICA.esc(ex.answer)+" "+ICA.esc(ex.unit||"")+".", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""); });
  }
  el.querySelector("[data-check]").addEventListener("click", go);
  inp.addEventListener("keydown", function(e){ if (e.key === "Enter") go(); });
};

/* ---------- backup helpers ---------- */
ICA.exportText = function(){ return JSON.stringify(ICA.load(), null, 1); };
ICA.download = function(name, text){
  try {
    var a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], {type:"application/json"})); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(function(){ URL.revokeObjectURL(a.href); a.parentNode.removeChild(a); }, 500); return true;
  } catch(e){ return false; }
};
ICA.copy = function(text, done){
  function fallback(){ var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly",""); ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); var ok = false; try { ok = document.execCommand("copy"); } catch(e){} document.body.removeChild(ta); done(ok); }
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function(){ done(true); }, fallback); else fallback();
};

ICA.applySettings();
})();


/* ---------- Audio: ▶ buttons for Japanese examples and Mugi's lines ----------
   data/audio-index.js sets window.ICA_AUDIO = {ja:{text:file}, mugi:{text:file}}; clips live in audio/.
   Japanese text is found after rendering: runs of <span lang="ja"> and <ruby lang="ja"> that sit side by side. */
ICA.audioIndex = function(){ return window.ICA_AUDIO || {ja:{}, mugi:{}}; };
ICA.sayText = function(nodes){ return nodes.map(function(n){ if (n.nodeType === 3) return n.nodeValue; var c = n.cloneNode(true); ICA.$$("rt,rp", c).forEach(function(r){ r.parentNode.removeChild(r); }); return c.textContent; }).join("").replace(/\s+/g, " ").trim(); };
function jaNode(n){ return n && n.nodeType === 1 && (n.tagName === "SPAN" || n.tagName === "RUBY") && n.getAttribute("lang") === "ja" && !n.classList.contains("say"); }
/* groups of neighbouring Japanese nodes: [{nodes, key}] (also used by tools/extract_audio to list what to record) */
ICA.sayGroups = function(root){
  var out = [], seen = new Set();
  ICA.$$('span[lang="ja"],ruby[lang="ja"]', root).forEach(function(n){
    if (seen.has(n) || n.closest(".say,rt,.ttsb") || (n.parentElement && n.parentElement.closest("ruby"))) return;
    var prev = n.previousSibling; if (jaNode(prev)) return;   // not the start of a run
    var g = [n]; seen.add(n); var x = n.nextSibling;
    while (x && (jaNode(x) || (x.nodeType === 3 && /^[　-〿！-｠]+$/.test(x.nodeValue)) || (x.nodeType === 3 && /^\s*[+＋]\s*$/.test(x.nodeValue) && x.previousSibling && x.previousSibling.tagName === "RUBY" && jaNode(x.nextSibling)))){ g.push(x); if (x.nodeType === 1) seen.add(x); x = x.nextSibling; }
    var key = ICA.sayText(g), read = g.map(function(x){ if (x.nodeType === 3) return x.nodeValue; var rt = x.tagName === "RUBY" && x.querySelector("rt"); return rt ? rt.textContent : x.textContent; }).join("").replace(/\s+/g, " ").trim();
    var core = key.replace(/[　-〿！-｠・]/g, "");
    if (!/[ぁ-んァ-ヴ㐀-鿿々]/.test(key) || /^[っゃゅょぁぃぅぇぉッャュョァィゥェォー゛゜]+$/.test(core)) return;
    if (/[㐀-鿿々]/.test(core) && core.length === 1 && read === key) return;   // a lone kanji with no reading given
    if (core === "は" || core === "へ"){   // letter (ha/he) or particle (wa/e)? only when the romaji written next to it says
      var t = "", y = g[g.length - 1].nextSibling; for (var j = 0; y && j < 3; j++, y = y.nextSibling) t += y.textContent;
      var m = t.match(/^\s*\(\s*(ha|wa|he|e)\b/i); if (!m) return;
      key = core + "|" + m[1].toLowerCase();
    }
    out.push({nodes:g, key:key, read:read});
  });
  return out;
};
var AUD = {cache:{}, el:null, btn:null};
ICA.say = function(kind, key, btn){
  var many = String(key).split("\u0001");
  if (many.length > 1){ var i = 0; AUD.queue = function(){ i++; if (i < many.length){ ICA.say(kind, many[i], btn); if (btn) btn.classList.add("playing"); } else AUD.queue = null; }; AUD.queueKeep = true; ICA.say(kind, many[0], btn); return true; }
  if (!AUD.queueKeep) AUD.queue = null; AUD.queueKeep = false;
  var f = (ICA.audioIndex()[kind] || {})[key]; if (!f) return false;
  var url = ICA.base + "audio/" + f, st = ICA.load().settings || {}, rate = parseFloat(st.audioSpeed) || 1;
  if (!AUD.el){ AUD.el = new Audio(); AUD.el.addEventListener("ended", function(){ if (AUD.queue){ AUD.queueKeep = true; AUD.queue(); return; } if (AUD.btn) AUD.btn.classList.remove("playing"); AUD.btn = null; }); }
  var a = AUD.el; a.pause(); if (AUD.btn) AUD.btn.classList.remove("playing");
  a.src = AUD.cache[url] || url; a.playbackRate = rate; try { a.preservesPitch = true; } catch(e){}
  var p = a.play(); if (p && p.catch) p.catch(function(){});
  if (btn){ btn.classList.add("playing"); AUD.btn = btn; }
  if (!AUD.cache[url] && window.fetch) fetch(url).then(function(r){ return r.ok ? r.blob() : null; }).then(function(b){ if (b) AUD.cache[url] = URL.createObjectURL(b); }).catch(function(){});
  return true;
};
function ttsBtn(kind, key, label){
  var b = document.createElement("button"); b.type = "button"; b.className = "ttsb"; b.setAttribute("data-say", kind); b.setAttribute("data-key", key);
  b.setAttribute("aria-label", label); b.title = label; b.innerHTML = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor"/><path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.6a6 6 0 0 1 0 8.8" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  return b;
}
ICA.voiceScan = function(root){
  var idx = ICA.audioIndex(); if (!root || !root.querySelectorAll) return;
  if (idx.ja && Object.keys(idx.ja).length) ICA.sayGroups(root).forEach(function(g){
    if (!idx.ja[g.key] || g.nodes[0].closest("button,label,select,option,[data-nosay]")) return;
    var w = document.createElement("span"); w.className = "say"; w.setAttribute("lang", "ja");
    g.nodes[0].parentNode.insertBefore(w, g.nodes[0]); g.nodes.forEach(function(n){ w.appendChild(n); });
    w.appendChild(ttsBtn("ja", g.key, "Listen: " + g.key));
  });
  /* Mugi's speech bubbles: one button per bubble, playing its paragraphs in turn */
  if (idx.mugi && Object.keys(idx.mugi).length) ICA.$$(".sbub,.ssay,.bub", root.matches && root.matches(".sbub,.ssay,.bub") ? root.parentNode : root).forEach(function(bub){
    if (bub.querySelector(".ttsb")) return; var ps = ICA.$$("p", bub), keys = ps.map(function(p){ return p.textContent.replace(/\s+/g, " ").trim(); }).filter(function(k){ return idx.mugi[k]; });
    if (keys.length) ps[ps.length - 1].appendChild(ttsBtn("mugi", keys.join("\u0001"), "Hear Mugi"));
  });
};
document.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest(".ttsb"); if (!b) return; e.preventDefault(); e.stopPropagation(); ICA.say(b.getAttribute("data-say"), b.getAttribute("data-key"), b); }, true);
if (window.MutationObserver) (function(){
  var q = [], t = null;
  new MutationObserver(function(ms){ ms.forEach(function(m){ m.addedNodes.forEach(function(n){ if (n.nodeType === 1 && !n.classList.contains("ttsb") && !n.classList.contains("say")) q.push(n); }); }); if (!t) t = setTimeout(function(){ var list = q; q = []; t = null; list.forEach(function(n){ if (n.isConnected) ICA.voiceScan(n); }); ICA.autoSay(); }, 40); })
    .observe(document.documentElement, {childList:true, subtree:true});
})();
/* auto-play: the first Japanese line of a newly shown exercise, if the setting is on */
var AUTO_DONE = new WeakSet();
ICA.autoSay = function(){
  var st = ICA.load().settings || {}; if (st.audioAuto !== "on") return;
  var q = ICA.$$(".ex .q .ttsb, .qcard .ttsb").filter(function(b){ var ex = b.closest(".ex,.qcard"); return ex && !AUTO_DONE.has(ex) && ex.getBoundingClientRect().height; })[0];
  if (q){ AUTO_DONE.add(q.closest(".ex,.qcard")); ICA.say(q.getAttribute("data-say"), q.getAttribute("data-key"), q); }
};

/* home-screen app: register the service worker from the site root (one folder above shared/) */
(function(){
  try {
    var src = document.currentScript && document.currentScript.src;
    if (!src || !("serviceWorker" in navigator) || location.protocol !== "https:" && location.hostname !== "localhost") return;
    var root = src.replace(/shared\/engine\.js.*$/, "");
    window.addEventListener("load", function(){ navigator.serviceWorker.register(root + "sw.js", {scope: root}).catch(function(){}); });
  } catch(e){}
})();


document.addEventListener("click", function(e){ var b = e.target.closest && e.target.closest("[data-copycode]"); if (!b) return; var t = (ICA.codes || {})[b.getAttribute("data-copycode")] || ""; ICA.copy ? ICA.copy(t) : (navigator.clipboard && navigator.clipboard.writeText(t)); b.textContent = "Copied ✓"; setTimeout(function(){ b.textContent = "Copy"; }, 1500); });
