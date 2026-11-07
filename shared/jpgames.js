/* IT CHICK Academy · Japanese quick-review games for the Arcade (Word Sprint, Kanji Match, Pair Up).
   Question building only (no page code), so tools/check_jpgames.js can run it in node. Built on the Kanji Lab
   engine (shared/kanjilab.js): its items, its distractor rule (KL.question) and its progress store (labs.kanji).
   A wrong answer marks that Lab card due now, so it comes up in the Lab's next session. */
(function(root){
"use strict";
var JG = {};
var KL = root.KanjiLab || (typeof require !== "undefined" ? require("./kanjilab.js") : null);
JG.LEVELS = ["N5", "N4", "N3", "missed"];

/* the Arcade's own corner of the store: missed keys and best scores */
JG.store = function(s){
  s.arcade = s.arcade || {best:{}};
  var j = s.arcade.jp = s.arcade.jp || {};
  j.missed = j.missed || {}; j.best = j.best || {}; if (!j.level) j.level = "N5"; if (j.snd === undefined) j.snd = true;
  return j;
};

/* items for a game: kind "vocab" (Word Sprint) or "kanji" (Kanji Match, Pair Up) */
JG.pool = function(kind, level, jp){
  var out = [];
  KL.decks.forEach(function(dk){
    dk.items.forEach(function(it){
      if (it.kind !== kind) return;
      if (level === "missed" ? jp.missed[it.key] : it.l === level) out.push(it);
    });
  });
  if (kind === "kanji") out = out.filter(function(it){ return KL.readingChoices(it).length; });
  return out;
};

/* KL.question with the question type fixed (the Lab alternates types by review count) */
function forced(type, it, n, rng){
  var orig = KL.qtype; KL.qtype = function(){ return type; };
  try { return KL.question(it, n || 0, rng); } finally { KL.qtype = orig; }
}
JG.wordQ = function(it, rng){ var q = forced("wmean", it, 0, rng); q.prompt = it.w; q.sub = it.kanaOnly ? "" : it.r; q.ja = false; return q; };

/* Kanji Match: kanji → reading (the Lab's kread), or reading → kanji (built here with the same rule turned round:
   a wrong kanji may not have the asked reading, or any sound-changed form of it, among its readings) */
JG.kanjiQ = function(it, dir, rng){
  rng = rng || Math.random;
  var ch = KL.readingChoices(it), n = Math.floor(rng() * ch.length) * 2 + 1;
  if (dir !== "rk"){ var q = forced("kread", it, n, rng); q.prompt = it.c; q.dir = "kr"; q.ja = true; return q; }
  var pick = ch[Math.floor(rng() * ch.length)], k = KL.rnorm(pick.r), vs = KL.variants(pick.r);
  var cands = [];
  KL.decks.forEach(function(dk){ dk.items.forEach(function(o){
    if (o.kind !== "kanji" || o === it || o.xr[k] || vs.some(function(v){ return o.xr[v]; })) return;
    cands.push({o:o, s:(o.deck === it.deck ? 2 : 0) + rng()});
  }); });
  cands.sort(function(a, b){ return b.s - a.s; });
  var opts = [{t:it.c, ok:true}].concat(cands.slice(0, 3).map(function(c){ return {t:c.o.c, ok:false, key:c.o.key}; }));
  for (var i = opts.length - 1; i > 0; i--){ var j = Math.floor(rng() * (i + 1)), t = opts[i]; opts[i] = opts[j]; opts[j] = t; }
  return {type:"kanji-rk", dir:"rk", item:it, prompt:pick.r, readType:pick.t, opts:opts, answer:it.c, ja:true};
};

/* Pair Up: n kanji, each with one reading, chosen so that no reading on the board also fits another kanji there */
JG.board = function(pool, n, rng){
  rng = rng || Math.random;
  var list = pool.slice(); for (var i = list.length - 1; i > 0; i--){ var j = Math.floor(rng() * (i + 1)), t = list[i]; list[i] = list[j]; list[j] = t; }
  var chosen = [];
  for (var a = 0; a < list.length && chosen.length < n; a++){
    var it = list[a], ch = KL.readingChoices(it), r = ch[Math.floor(rng() * ch.length)].r, k = KL.rnorm(r), vs = KL.variants(r);
    var clash = chosen.some(function(p){
      if (p.it.c === it.c) return true;
      if (p.it.xr[k] || vs.some(function(v){ return p.it.xr[v]; })) return true;          // my reading fits them
      var pk = KL.rnorm(p.r); return it.xr[pk] || KL.variants(p.r).some(function(v){ return it.xr[v]; }); // theirs fits me
    });
    if (!clash) chosen.push({it:it, r:r});
  }
  return chosen;
};

/* a wrong answer: the Lab card is due now (Again: back to box 1), and the Arcade remembers it for "my missed ones" */
JG.miss = function(s, key, now){
  var ks = KL.store(s), jp = JG.store(s), c = ks.c[key];
  if (c){ c.b = 1; c.d = Math.min(c.d || now, now); } else ks.c[key] = {b:0, n:0, d:now};
  jp.missed[key] = now;
};
/* right in "my missed ones": off the list (the Lab card keeps its own schedule) */
JG.cleared = function(s, key){ delete JG.store(s).missed[key]; };

root.JPGames = JG;
if (typeof module !== "undefined" && module.exports) module.exports = JG;
})(typeof window !== "undefined" ? window : this);
