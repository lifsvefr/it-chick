/* IT CHICK Academy · shared engine
   One registry (ICA) that every data file adds to, plus the store, text formatting,
   glossary pop-ups, sheets, mistake reports and the interactive exercise types.
   Written in plain ES5-style JavaScript so it runs on older phones and tablets. */
(function(){
"use strict";
var ICA = window.ICA = window.ICA || {};
ICA.version = "pass1";
ICA.tracks = {}; ICA.units = []; ICA.unitById = {}; ICA.lessons = {}; ICA.codex = {}; ICA.terms = {}; ICA.bank = []; ICA.bankById = {}; ICA.books = {};
ICA.base = "./"; ICA.figs = [];

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
ICA.loadAll = function(base, done){
  ICA.base = base;
  var files = ["data/tracks.js","data/books.js"].concat((window.ICA_CATALOG||{units:[]}).units.map(function(u){ return "data/"+u+".js"; }));
  var i = 0, failed = [];
  function next(){
    if (i >= files.length){ ICA.units.sort(function(a,b){ var ta = ICA.tracks[a.track] ? ICA.tracks[a.track].n : 99, tb = ICA.tracks[b.track] ? ICA.tracks[b.track].n : 99; return ta - tb || a.n - b.n; }); done(failed); return; }
    var s = document.createElement("script"); s.src = base + files[i] + "?v=" + ICA.version;
    s.onload = function(){ i++; next(); };
    s.onerror = function(){ failed.push(files[i]); i++; next(); };
    document.head.appendChild(s);
  }
  next();
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
ICA.save = function(){ try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch(e){} };
ICA.replaceStore = function(obj){ mem = fill(obj); ICA.save(); };
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
ICA.md = function(s){
  var codes = [], out = ICA.esc(s);
  out = out.replace(/`([^`]+)`/g, function(m, c){ codes.push(c); return "\u0000"+(codes.length-1)+"\u0000"; });
  out = out.replace(/\[\[kbd:([^\]]+)\]\]/g, "<kbd>$1</kbd>");
  out = out.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  out = out.replace(/(^|[\s(\u201c"'\u2014\u2013\/-])\*([^*\s](?:[^*]*?[^*\s])?)\*(?=[\s.,;:!?)\u201d"'\u2019\u2014\u2013\/-]|$)/g, "$1<i>$2</i>");
  out = out.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, function(m, id, shown){
    var t = ICA.terms[id]; var label = shown || (t ? t.term : id);
    return '<button type="button" class="term" data-term="'+id+'">'+label+'</button>';
  });
  out = out.replace(/\{\{([a-z0-9-]+)(?:\|([^}]+))?\}\}/g, function(m, id, shown){
    var e = ICA.codex[id]; var label = shown || (e ? e.title : id);
    return '<a class="xref" href="'+ICA.base+'codex/index.html#'+id+'">'+label+'</a>';
  });
  out = out.replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  out = out.replace(/\n/g, "<br>");
  out = out.replace(/\u0000(\d+)\u0000/g, function(m, i){ return "<code>"+codes[+i]+"</code>"; });
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
    if (b.lab) return '<a class="callout labcall" href="'+ICA.base+'labs/formula.html#'+ICA.esc(b.lab)+'"><b class="h">🧮 Practise in the Formula Lab</b><span>'+ICA.md(b.t || "Try it on a real practice sheet")+' →</span></a>';
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
ICA.toast = function(msg){
  var t = ICA.$(".toast"); if (!t){ t = document.createElement("div"); t.className = "toast"; t.setAttribute("role","status"); document.body.appendChild(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function(){ t.hidden = true; }, 2200);
};
var lastFocus = null;
ICA.sheet = function(html, onOpen){
  ICA.closeSheet();
  lastFocus = document.activeElement;
  var bg = document.createElement("div"); bg.className = "sheetbg"; bg.id = "sheetbg";
  bg.innerHTML = '<div class="sheet" role="dialog" aria-modal="true"><button class="iconbtn x" data-close aria-label="Close">✕</button>'+html+'</div>';
  document.body.appendChild(bg);
  bg.addEventListener("click", function(e){ if (e.target === bg || e.target.closest("[data-close]")) ICA.closeSheet(); });
  var f = bg.querySelector("button,input,textarea,select,a"); if (f) f.focus();
  if (onOpen) onOpen(bg.querySelector(".sheet"));
  return bg.querySelector(".sheet");
};
ICA.closeSheet = function(){ var b = document.getElementById("sheetbg"); if (b){ b.parentNode.removeChild(b); if (lastFocus && lastFocus.focus) lastFocus.focus(); } };
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

/* ---------- top bar used by every app ---------- */
ICA.topbar = function(title){
  var bar = document.createElement("header"); bar.className = "topbar";
  bar.innerHTML = '<div class="in"><a class="home" href="'+ICA.base+'index.html" aria-label="Back to the desk"><span class="dot" aria-hidden="true">✦</span><span>Desk</span></a><span class="title">'+ICA.esc(title)+'</span></div>';
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

/* --- put steps in order (move up / down) --- */
RENDER.order = function(el, ex, api){
  var n = ex.items.length, cur;
  do { cur = ICA.shuffle(ex.items.map(function(x, i){ return i; })); } while (n > 1 && cur.every(function(v, i){ return v === i; }));
  el.innerHTML = head(ex)+'<div class="small muted">Use the arrows to move each step. The top is first.</div><ol class="orderlist"></ol><div class="row"><button type="button" class="btn primary" data-check>Check order</button></div><div class="fbw"></div>';
  var ol = el.querySelector(".orderlist"), fbw = el.querySelector(".fbw");
  function draw(marks){
    ol.innerHTML = cur.map(function(v, pos){ return '<li data-v="'+v+'" class="'+(marks ? (v === pos ? "right" : "wrong") : "")+'"><span class="n">'+(pos+1)+'</span><span class="tx">'+ICA.md(ex.items[v].t)+'</span><button type="button" class="mv" data-up="'+pos+'" aria-label="Move up"'+(pos===0||api.state.solved?" disabled":"")+'>▲</button><button type="button" class="mv" data-down="'+pos+'" aria-label="Move down"'+(pos===n-1||api.state.solved?" disabled":"")+'>▼</button></li>'; }).join("");
  }
  ol.addEventListener("click", function(e){
    var u = e.target.closest("[data-up]"), d = e.target.closest("[data-down]"), p, t;
    if (u){ p = +u.getAttribute("data-up"); t = cur[p-1]; cur[p-1] = cur[p]; cur[p] = t; }
    else if (d){ p = +d.getAttribute("data-down"); t = cur[p+1]; cur[p+1] = cur[p]; cur[p] = t; }
    else return;
    fbw.innerHTML = ""; draw();
    var focusSel = u ? '[data-up="'+(p-1)+'"]' : '[data-down="'+(p+1)+'"]', f = ol.querySelector(focusSel) || ol.querySelector(u ? '[data-down="'+(p-1)+'"]' : '[data-up="'+(p+1)+'"]'); if (f) f.focus();
  });
  el.querySelector("[data-check]").addEventListener("click", function(){
    var ok = cur.every(function(v, i){ return v === i; });
    draw(true);
    if (ok){ fbw.innerHTML = fbBox("ok", "Right order.", ex.why ? "<div>"+ICA.md(ex.why)+"</div>" : ""); api.attempt(true); this.disabled = true; draw(true); return; }
    api.attempt(false);
    var first = -1; cur.forEach(function(v, i){ if (first < 0 && v !== i) first = i; });
    var should = ex.items[first];
    fbw.innerHTML = fbBox("no", "Not in order yet.", "<div>Step "+(first+1)+" should be <b>"+ICA.md(should.t)+"</b>. "+ICA.md(should.why||"")+"</div>"+(api.state.tries >= 2 ? '<div class="row"><button type="button" class="btn small" data-show>Show the correct order</button></div>' : ""));
    var sb = fbw.querySelector("[data-show]");
    if (sb) sb.addEventListener("click", function(){ cur = ex.items.map(function(x, i){ return i; }); api.solved(false); draw(true); fbw.innerHTML = fbBox("part", "Here’s the correct order.", lis(ex.items.map(function(it){ return "<b>"+ICA.md(it.t)+"</b>"+(it.why ? ": "+ICA.md(it.why) : ""); }))); });
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
