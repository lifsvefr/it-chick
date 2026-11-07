/* IT CHICK Academy · Kanji Lab engine.
   Decks, Leitner scheduling (the same boxes and wording as the Arcade Flashcards: Again → box 1, back tomorrow;
   Good → next box; Easy → skips a box; gaps of 1, 3, 7, 14 and 30 days), question building with safe distractors,
   and romaji checking. No page code here, so tools/check_kanjilab.py can run it in node over every item.
   Distractor rule: no two options may share a reading (for reading questions) or a meaning word (for meaning
   questions), and no wrong option may be a reading or meaning of the item asked about. */
(function(root){
"use strict";
var KL = {};
KL.BOX_DAYS = [0, 1, 3, 7, 14, 30];
KL.DAY = 86400000;
KL.NEW_CHOICES = [5, 10, 20];

/* ---------- kana helpers ---------- */
function k2h(s){ return String(s).replace(/[ァ-ヶ]/g, function(c){ return String.fromCharCode(c.charCodeAt(0) - 0x60); }); }
function h2k(s){ return String(s).replace(/[ぁ-ゖ]/g, function(c){ return String.fromCharCode(c.charCodeAt(0) + 0x60); }); }
KL.k2h = k2h; KL.h2k = h2k;
var VOICE = {}, HANDA = {};
"かきくけこさしすせそたちつてとはひふへほ".split("").forEach(function(c, i){ VOICE[c] = "がぎぐげござじずぜぞだぢづでどばびぶべぼ".charAt(i); });
"はひふへほ".split("").forEach(function(c, i){ HANDA[c] = "ぱぴぷぺぽ".charAt(i); });
/* a reading plus the sound changes it takes inside words (rendaku, h→p, small っ) */
function variants(r){
  r = k2h(r).replace(/[.\-]/g, "");
  var firsts = [r], out = {};
  if (VOICE[r.charAt(0)]) firsts.push(VOICE[r.charAt(0)] + r.slice(1));
  if (HANDA[r.charAt(0)]) firsts.push(HANDA[r.charAt(0)] + r.slice(1));
  firsts.forEach(function(f){ out[f] = 1; if (f.length > 1 && "つくちき".indexOf(f.charAt(f.length-1)) > -1) out[f.slice(0, -1) + "っ"] = 1; });
  return Object.keys(out);
}
KL.variants = variants;
function rnorm(r){ return k2h(r).replace(/[.\-]/g, ""); }
KL.rnorm = rnorm;

/* ---------- meaning words (same rough rule as dev/kanjilab/build.py: merging words only makes the check stricter) ---------- */
var STOP = {};
"to a an the of be in on at for with and or by from as someone something sth sb e g eg esp etc i ie usu usually it is that this into about also orig s".split(" ").forEach(function(w){ STOP[w] = 1; });
function stem(w){
  var sufs = ["ings","ing","ied","ies","ed","es","s","ly"];
  for (var i = 0; i < sufs.length; i++){
    var s = sufs[i];
    if (w.length - s.length >= 3 && w.slice(-s.length) === s){
      w = w.slice(0, -s.length);
      if (w.length >= 4 && w.charAt(w.length-1) === w.charAt(w.length-2) && "aeiouls".indexOf(w.charAt(w.length-1)) < 0) w = w.slice(0, -1);
      break;
    }
  }
  if (w.length >= 4 && w.charAt(w.length-1) === "e") w = w.slice(0, -1);
  return w;
}
function tokens(texts){
  var out = {};
  (typeof texts === "string" ? [texts] : texts).forEach(function(t){
    t = String(t).toLowerCase().replace(/\([^)]*\)/g, " ").replace(/\b(some)?one's\b|\boneself\b/g, " ").replace(/'s\b/g, "");
    (t.match(/[a-z][a-z'\-]*/g) || []).forEach(function(w){
      w = w.replace(/^['\-]+|['\-]+$/g, "");
      if (!w || w.length < 2 || STOP[w]) return;
      out[stem(w)] = 1;
    });
  });
  return out;
}
KL.tokens = tokens;
function overlap(a, b){ for (var k in a) if (b[k]) return true; return false; }
KL.overlap = overlap;

/* ---------- parts of speech (JMdict tags) ---------- */
function posGroup(pt){
  function any(re){ return pt.some(function(t){ return re.test(t); }); }
  if (any(/^(v1|v5|vk|vs-i|vs-s|vz|v2|v4|aux-v)/)) return "v";
  if (any(/^adj-(i|ix)$/)) return "i";
  if (any(/^adj-na$/)) return "na";
  if (any(/^adv/)) return "d";
  if (any(/^(n|pn|ctr|num|suf|pref)/)) return "n";
  return "x";
}
KL.posGroup = posGroup;
KL.POS = {n:"noun", pn:"pronoun", "n-suf":"noun used as a suffix", "n-pref":"noun used as a prefix", adv:"adverb", "adv-to":"adverb (takes と)",
  "adj-i":"い-adjective", "adj-ix":"い-adjective (いい/よい type)", "adj-na":"な-adjective", "adj-no":"takes の", "adj-pn":"pre-noun adjectival (連体詞)",
  "adj-t":"たる-adjective", "adj-f":"used before a noun", conj:"conjunction", "int":"interjection", exp:"expression", ctr:"counter", num:"number",
  pref:"prefix", suf:"suffix", vs:"takes する", "vs-i":"する verb", "vs-s":"する verb (special class)", vk:"くる verb (irregular)",
  v1:"ichidan verb", "v5k-s":"godan verb (行く, special)", "v5r-i":"godan verb (irregular)", "v5u-s":"godan verb (special)",
  vi:"intransitive", vt:"transitive"};
KL.posLabel = function(pt){
  var out = [];
  pt.forEach(function(t){ var l = KL.POS[t] || (/^v5/.test(t) ? "godan verb" : null); if (l && out.indexOf(l) < 0) out.push(l); });
  return out;
};

/* ---------- decks and items ---------- */
var GROUP = {basic:"Basic", dakuten:"With dakuten ゛", handakuten:"With handakuten ゜", yoon:"Combined sound (拗音)"};
KL.GROUP = GROUP;
KL.init = function(data){
  var decks = [], byId = {}, items = {};
  data.decks.forEach(function(d){ var dk = {id:d.id, t:d.t, kind:d.kind, l:d.l, set:d.set, blurb:d.blurb, items:[]}; decks.push(dk); byId[d.id] = dk; });
  var kanaH = data.kana.h, kanaK = data.kana.k;
  decks.forEach(function(dk){
    if (dk.kind === "kana"){
      var list = dk.set === "h" ? kanaH : kanaK, other = dk.set === "h" ? kanaK : kanaH;
      list.forEach(function(k, i){ var it = {key:(dk.set === "h" ? "h" : "k") + k[0], deck:dk.id, kind:"kana", q:k[0], ro:k[1], grp:k[2], also:k[3] || [], other:k[4] || [], pair:other[i][0], script:dk.set}; dk.items.push(it); items[it.key] = it; });
    }
  });
  data.kanji.forEach(function(k){
    var dk = byId["kl-" + k.l.toLowerCase()]; if (!dk) return;
    var it = {key:"j" + k.c, deck:dk.id, kind:"kanji", c:k.c, m:k.m, s:k.s, l:k.l, on:k.on || [], kun:k.kun || [], xo:k.xo || [], xk:k.xk || [], ex:k.ex || []};
    it.tok = tokens((k.t || "").split(" ").concat(k.m));
    it.xr = {}; (k.x || []).concat(it.on, it.kun, it.xo, it.xk).forEach(function(r){ variants(r).forEach(function(v){ it.xr[v] = 1; }); it.xr[rnorm(r)] = 1; });
    dk.items.push(it); items[it.key] = it;
  });
  data.vocab.forEach(function(v){
    var dk = byId["kl-" + v.l.toLowerCase() + "-vocab"]; if (!dk) return;
    var pt = (v.pt || "").split(",").filter(Boolean);
    var it = {key:"v" + v.w + "|" + v.r, deck:dk.id, kind:"vocab", w:v.w, r:v.r, f:v.f || v.w, m:v.m, pt:pt, p:posGroup(pt), l:v.l, a:v.a || [], ar:v.ar || [], s:pt.indexOf("vs") > -1, u:!!v.u, rk:!!v.rk, rare:!!v.rare};
    it.kanaOnly = !/[㐀-鿿々]/.test(v.w);
    it.tok = tokens(v.t ? v.t.split(" ").concat(v.m) : v.m);
    it.rs = {}; it.rs[k2h(v.r)] = 1; it.ar.forEach(function(r){ it.rs[k2h(r)] = 1; });
    dk.items.push(it); items[it.key] = it;
  });
  KL.decks = decks; KL.deckById = byId; KL.items = items; KL.data = data;
  return KL;
};

/* ---------- progress (lives in the app's one store: ICA.load().labs.kanji) ---------- */
KL.store = function(s){
  s.labs = s.labs || {}; var k = s.labs.kanji = s.labs.kanji || {};
  k.c = k.c || {}; k.nd = k.nd || {}; k.set = k.set || {}; if (KL.NEW_CHOICES.indexOf(k.set.nw) < 0) k.set.nw = 10;
  return k;
};
KL.newToday = function(ks, deckId, today){ var x = ks.nd[deckId]; return x && x.d === today ? x.n : 0; };
KL.counts = function(ks, deckId, now, today){
  var dk = KL.deckById[deckId], due = 0, fresh = 0, learned = 0, seen = 0;
  dk.items.forEach(function(it){ var c = ks.c[it.key]; if (!c){ fresh++; return; } seen++; if (c.d <= now) due++; if (c.b >= 3) learned++; });
  var left = Math.max(0, ks.set.nw - KL.newToday(ks, deckId, today));
  return {total:dk.items.length, due:due, fresh:fresh, seen:seen, learned:learned, newToday:Math.min(left, fresh)};
};
/* today's queue: every due review (shuffled), then new cards in deck order up to the daily limit */
KL.queue = function(ks, deckId, now, today, shuffle){
  var dk = KL.deckById[deckId], due = [], fresh = [];
  dk.items.forEach(function(it){ var c = ks.c[it.key]; if (!c) fresh.push(it.key); else if (c.d <= now) due.push(it.key); });
  var left = Math.max(0, ks.set.nw - KL.newToday(ks, deckId, today));
  return {due:shuffle ? shuffle(due) : due, fresh:fresh.slice(0, left)};
};
KL.when = function(c, r){ var nb = Math.min(KL.BOX_DAYS.length - 1, ((c && c.b) || 0) + r), d = KL.BOX_DAYS[nb]; return r === 0 || d <= 1 ? "Back tomorrow" : "Back in " + d + " days"; };
/* r: 0 Again, 1 Good, 2 Easy (as the Arcade) */
KL.rate = function(ks, key, r, today){
  var c = ks.c[key], isNew = !c;
  c = c || {b:0, n:0};
  if (r === 0) c.b = 1; else c.b = Math.min(KL.BOX_DAYS.length - 1, (c.b || 0) + r);
  c.d = today + Math.max(1, KL.BOX_DAYS[c.b]) * KL.DAY;
  if (r === 0) c.d = today + KL.DAY;
  c.n = (c.n || 0) + 1;
  ks.c[key] = c;
  if (isNew){ var it = KL.items[key], x = ks.nd[it.deck]; if (!x || x.d !== today) x = ks.nd[it.deck] = {d:today, n:0}; x.n++; }
  return c;
};

/* ---------- romaji ---------- */
/* NFKC first: a Japanese keyboard in full-width mode types ｓｈｉ */
KL.cleanRomaji = function(s){ s = String(s || ""); if (s.normalize) s = s.normalize("NFKC"); return s.toLowerCase().replace(/[\s　]+/g, "").replace(/[’‘`]/g, "'"); };
/* wrong as the kana's sound, but a fair guess: say why */
KL.NEAR = {"は": {wa:"As a sound, {k} is ha. Only the hiragana は, as the topic particle, is read wa (わたしは, watashi wa)."},
  "へ": {e:"As a sound, {k} is he. Only the hiragana へ, as the direction particle, is read e (どこへ, doko e)."},
  "づ": {dzu:"Close: Hepburn writes {k} as zu, the same as ず."}};
KL.checkRomaji = function(it, input){
  var a = KL.cleanRomaji(input);
  if (!a) return {ok:false, empty:true};
  if (/[぀-ヿ]/.test(a)) return {ok:false, kana:true};     // the keyboard is typing kana: ask again, don't mark it wrong
  if (a === it.ro) return {ok:true};
  var near = KL.NEAR[k2h(it.q)] && KL.NEAR[k2h(it.q)][a];
  if (near) return {ok:false, note:near.replace("{k}", it.q)};
  if (it.also.indexOf(a) > -1) return {ok:true, note:a === "wo" ? "Yes. In Hepburn it is written o (it sounds like お), but wo is common too, and it's how you type it." : "Yes. Hepburn writes it " + it.ro + "."};
  if (it.other.indexOf(a) > -1) return {ok:true, note:"Right sound. That spelling is from another romaji system (Kunrei or typing style); Hepburn, used on signs, passports and in this app, writes it " + it.ro + "."};
  return {ok:false};
};

/* ---------- questions ---------- */
function plainReading(r){ return !/^-|-$/.test(r); }
KL.readingChoices = function(it){
  var on = it.on.filter(plainReading).slice(0, 2).map(function(r){ return {r:r, t:"on"}; }), kun = it.kun.filter(plainReading).slice(0, 2).map(function(r){ return {r:r, t:"kun"}; });
  var out = [], i;
  for (i = 0; i < 2; i++){ if (on[i]) out.push(on[i]); if (kun[i]) out.push(kun[i]); }
  return out;
};
/* which question a card asks this time: alternates with each review */
KL.qtype = function(it, n){
  n = n || 0;
  if (it.kind === "kana") return "kana";
  if (it.kind === "kanji") return (n % 2 === 0 || !KL.readingChoices(it).length) ? "kmean" : "kread";
  if (it.kanaOnly) return "wmean";
  return n % 2 === 0 ? "wread" : "wword";
};
KL.QTEXT = {kana:"Type this kana in rōmaji", kmean:"What does this kanji mean?", kread:"Which is a reading of this kanji?", wread:"How do you read this word?", wword:"Which word is this?", wmean:"What does this word mean?"};
KL.meaningText = function(it){ return it.kind === "kanji" ? it.m.slice(0, 3).join("; ") : it.m[0]; };

function pickDistractors(target, cands, valid, score, rng, need){
  var scored = cands.map(function(c){ return {c:c, s:score(c) + rng()}; }).sort(function(a, b){ return b.s - a.s; });
  var chosen = [];
  for (var i = 0; i < scored.length && chosen.length < need; i++){
    var c = scored[i].c;
    if (valid(c, chosen)) chosen.push(c);
  }
  return chosen;
}
function lenScore(a, b){ var d = Math.abs(a.length - b.length); return d === 0 ? 1 : d === 1 ? 0.5 : 0; }

/* Build one question: {type, prompt, opts:[{t, ok}], answer, readType?}. rng() in [0,1). */
KL.question = function(it, n, rng){
  rng = rng || Math.random;
  var type = KL.qtype(it, n), q = {type:type, item:it, opts:[]};
  if (type === "kana"){ q.answer = it.ro; return q; }
  var all = Object.keys(KL.items).map(function(k){ return KL.items[k]; }), ds, right;
  if (type === "kmean"){
    right = KL.meaningText(it);
    ds = pickDistractors(it, all.filter(function(o){ return o.kind === "kanji" && o !== it; }),
      function(o, chosen){ return !overlap(o.tok, it.tok) && chosen.every(function(c){ return !overlap(o.tok, c.tok); }); },
      function(o){ return (o.deck === it.deck ? 2 : 0); }, rng, 3);
    q.opts = [{t:right, ok:true}].concat(ds.map(function(o){ return {t:KL.meaningText(o), ok:false, key:o.key}; }));
  } else if (type === "kread"){
    var ch = KL.readingChoices(it), pick = ch[Math.floor(n / 2) % ch.length];
    q.readType = pick.t; right = pick.r;
    var pool = [];
    all.forEach(function(o){ if (o.kind !== "kanji" || o === it) return; (pick.t === "on" ? o.on.concat(o.xo) : o.kun.concat(o.xk)).filter(plainReading).forEach(function(r){ pool.push({r:r, o:o}); }); });
    var seenR = {}; pool = pool.filter(function(p){ var k = rnorm(p.r); if (seenR[k]) return false; seenR[k] = 1; return true; });
    ds = pickDistractors(it, pool,
      function(p, chosen){ var k = rnorm(p.r); if (it.xr[k] || variants(p.r).some(function(v){ return it.xr[v]; })) return false; return k !== rnorm(right) && chosen.every(function(c){ return rnorm(c.r) !== k && variants(c.r).indexOf(k) < 0 && variants(p.r).indexOf(rnorm(c.r)) < 0; }); },
      function(p){ return (p.o.deck === it.deck ? 1 : 0) + lenScore(p.r, right) + (p.r.indexOf(".") > -1 === right.indexOf(".") > -1 ? 1 : 0); }, rng, 3);
    q.opts = [{t:right, ok:true}].concat(ds.map(function(p){ return {t:p.r, ok:false, key:p.o.key}; }));
  } else if (type === "wread"){
    right = it.r;
    var seenW = {};
    ds = pickDistractors(it, all.filter(function(o){ if (o.kind !== "vocab" || o === it) return false; var k = k2h(o.r); if (seenW[k]) return false; seenW[k] = 1; return true; }),
      function(o, chosen){ var k = k2h(o.r); return !it.rs[k] && chosen.every(function(c){ return k2h(c.r) !== k; }); },
      function(o){ return (o.deck === it.deck ? 1 : 0) + (o.p === it.p ? 1.5 : 0) + lenScore(o.r, it.r) + (o.rare ? 0 : 0.5) + (o.r.slice(-1) === it.r.slice(-1) ? 0.5 : 0); }, rng, 3);
    q.opts = [{t:right, ok:true}].concat(ds.map(function(o){ return {t:o.r, ok:false, key:o.key}; }));
  } else if (type === "wword" || type === "wmean"){
    right = type === "wword" ? it.w : KL.meaningText(it);
    var seenF = {}; seenF[it.w] = 1; it.a.forEach(function(a){ seenF[a] = 1; });
    ds = pickDistractors(it, all.filter(function(o){ if (o.kind !== "vocab" || o === it || seenF[o.w]) return false; seenF[o.w] = 1; return true; }),
      function(o, chosen){
        if (it.rs[k2h(o.r)] || o.rs[k2h(it.r)] || overlap(o.tok, it.tok)) return false;
        return chosen.every(function(c){ return k2h(c.r) !== k2h(o.r) && !overlap(o.tok, c.tok) && c.w !== o.w; });
      },
      function(o){ return (o.deck === it.deck ? 1 : 0) + (o.p === it.p ? 1.5 : 0) + lenScore(o.w, it.w) + (o.rare ? 0 : 1) + (type === "wword" && o.w.slice(-1) === it.w.slice(-1) ? 0.5 : 0); }, rng, 3);
    q.opts = [{t:right, ok:true}].concat(ds.map(function(o){ return {t:type === "wword" ? o.w : KL.meaningText(o), ok:false, key:o.key}; }));
  }
  q.answer = right;
  // shuffle the options
  for (var i = q.opts.length - 1; i > 0; i--){ var j = Math.floor(rng() * (i + 1)), t = q.opts[i]; q.opts[i] = q.opts[j]; q.opts[j] = t; }
  return q;
};

root.KanjiLab = KL;
if (typeof module !== "undefined" && module.exports) module.exports = KL;
})(typeof window !== "undefined" ? window : this);
