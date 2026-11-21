/* IT CHICK Academy · Arcade sound, music, effects and high-score boards.
   Chiptune sounds and the background tune are made with the Web Audio API (no sound files).
   Effects switch off when the device asks for reduced motion. Boards live in the store under arcade.boards. */
(function(root){
"use strict";
var AFX = {};
var RM = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
AFX.reduced = RM;

/* ---------- audio ---------- */
var AC = null, MASTER = null, NOISE = null, FXG = null, MUSG = null, talking = 0;
AFX.soundOn = function(){ return true; };       // the page replaces these with its settings
AFX.musicOn = function(){ return true; };
AFX.fxVol = function(){ return 1; };            // 0..1, from the volume sliders in Settings
AFX.musicVol = function(){ return 1; };
function ac(){
  if (!AC){
    try {
      AC = new (root.AudioContext || root.webkitAudioContext)();
      MASTER = AC.createGain(); MASTER.gain.value = 0.9;
      var comp = AC.createDynamicsCompressor(); MASTER.connect(comp); comp.connect(AC.destination);
      FXG = AC.createGain(); FXG.connect(MASTER); MUSG = AC.createGain(); MUSG.connect(MASTER);
      NOISE = AC.createBuffer(1, AC.sampleRate * 0.5, AC.sampleRate);
      var d = NOISE.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random()*2 - 1;
    } catch(e){ AC = null; }
  }
  if (AC && AC.state === "suspended" && AC.resume) AC.resume();
  return AC;
}
function vols(){ if (FXG){ FXG.gain.value = AFX.fxVol(); MUSG.gain.value = AFX.musicVol() * (talking ? .2 : 1); } }
AFX.applyVolume = vols;
var OUT = null;   // which bus the next tones go to: effects by default, music while the tune is scheduled
function tone(f, t0, d, type, vol, slide){
  var c = ac(); if (!c) return;
  var t = c.currentTime + t0, o = c.createOscillator(), g = c.createGain();
  o.type = type || "square"; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + d);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(OUT || FXG || MASTER); o.start(t); o.stop(t + d + 0.02);
}
function noise(t0, d, vol, freq){
  var c = ac(); if (!c) return;
  var t = c.currentTime + t0, n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
  n.buffer = NOISE; f.type = "lowpass"; f.frequency.setValueAtTime(freq || 3000, t); f.frequency.exponentialRampToValueAtTime(80, t + d);
  g.gain.setValueAtTime(vol || 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  n.connect(f); f.connect(g); g.connect(OUT || FXG || MASTER); n.start(t); n.stop(t + d);
}
var SFX = {
  tap:   function(){ tone(880, 0, .05, "square", .14); tone(1320, .04, .05, "square", .1); },
  flip:  function(){ tone(520, 0, .05, "square", .1); tone(780, .04, .06, "square", .1); },
  ok:    function(k){ var m = Math.pow(2, Math.min(k || 0, 12)/12); tone(988*m, 0, .06, "square", .2); tone(1319*m, .055, .2, "square", .2); },
  no:    function(){ tone(220, 0, .28, "sawtooth", .2, 70); tone(110, 0, .3, "square", .13, 55); noise(0, .18, .3, 1200); },
  boom:  function(){ noise(0, .7, .85, 4000); tone(120, 0, .6, "triangle", .45, 30); },
  combo: function(){ for (var i = 0; i < 10; i++) tone(330*Math.pow(2, i/5), i*.035, .06, "square", .15); tone(1319, .36, .3, "square", .17); tone(1760, .36, .3, "triangle", .17); },
  count: function(){ tone(523, 0, .12, "square", .2); },
  go:    function(){ tone(1046, 0, .4, "square", .22); noise(0, .2, .22, 6000); },
  tick:  function(){ tone(1397, 0, .05, "square", .12); },
  end:   function(){ [523,494,466,440,415].forEach(function(f, i){ tone(f, i*.15, .17, "square", .16); }); tone(392, .75, .6, "square", .18, 98); },
  clear: function(){ [659,784,988].forEach(function(f, i){ tone(f, i*.1, .12, "triangle", .2); }); tone(1319, .32, .35, "triangle", .2); tone(988, .32, .35, "square", .08); },   /* all right, no new best: bright, short, no fanfare */
  best:  function(){ [523,659,784,1046,784,1046].forEach(function(f, i){ tone(f, i*.08, .1, "square", .18); }); tone(1319, .5, .6, "square", .2); tone(659, .5, .6, "triangle", .28); noise(.5, .25, .18, 8000); }
};
AFX.sfx = function(kind, arg){ if (!AFX.soundOn() || !AFX.fxVol()) return; try { ac(); vols(); OUT = FXG; (SFX[kind] || SFX.tap)(arg); } catch(e){} OUT = null; };

/* ---------- music: one loop per game (owner asked 21 Nov 2026), all original, all made here ----------
   "drive" is the first arcade tune (A minor, 168 bpm, builds up from bass and kick).
   "theme" is the academy's own theme tune (shared/theme.js, the 8-bit version) when that file is on the page.
   The rest are written as data for one small sequencer: chords per bar, a melody in eighth notes, a bass
   pattern, drum steps. Each plays two bars of groove before the melody comes in.
   Music fades down while a voice clip plays, so it never talks over Mugi or a listening line. */
var bgm = null, step = 0, next = 0, cur = null;
AFX.song = "drive";
function mf(n){ return 440*Math.pow(2, (n - 69)/12); }

/* drive: the first tune, unchanged */
var D_CH = [[57,60,64],[53,57,60],[55,59,62],[52,56,59]], D_ROOT = [45,41,43,40];
var D_LEAD = [69,72,76,72,81,79,76,72, 77,76,72,69,72,74,76,72, 74,79,83,79,86,83,79,74, 80,76,71,76,80,83,80,76];
function driveStep(t, sp){
  var bar = Math.floor(step/16), b4 = bar % 4, s16 = step % 16;
  if (step % 2 === 0){
    if (bar >= 2) tone(mf(D_LEAD[(step/2) % 32]), t, sp*1.6, "square", .06);
    tone(mf(D_ROOT[b4] + (s16 % 4 ? 12 : 0)), t, sp*1.5, "square", .075);
  }
  if (bar >= 4) tone(mf(D_CH[b4][s16 % 3] + 12), t, sp*.7, "square", .02);
  if (s16 === 0 || s16 === 8 || s16 === 10) tone(150, t, .12, "triangle", .45, 40);
  if (bar >= 4 && (s16 === 4 || s16 === 12)) noise(t, .12, .32, 2600);
}

/* chords: [root (bass octave), chord tones] */
var C = {
  C:[36,[60,64,67]], Cmaj7:[36,[60,64,67,71]], Dm:[38,[62,65,69]], Dm7:[38,[62,65,69,72]], D:[38,[62,66,69]], D7:[38,[62,66,69,72]],
  Em:[40,[64,67,71]], Em7:[40,[64,67,71,74]], E:[40,[64,68,71]], F:[41,[65,69,72]], Fmaj7:[41,[65,69,72,76]], G:[43,[67,71,74]], Gmaj7:[43,[67,71,74,78]],
  Gm:[43,[67,70,74]], A:[45,[69,73,76]], A7:[45,[69,73,76,79]], Am:[45,[69,72,76]], Am7:[45,[69,72,76,79]], Bb:[46,[70,74,77]]
};
var SONGS = {
  /* Kana Rain: soft and bright, bells over raindrop plinks */
  rain:{bpm:112, swing:0, prog:["Fmaj7","G","Em7","Am","Fmaj7","G","C","C"],
    lead:[[76,2],[79,2],[81,3],[79,1], [79,2],[74,2],[76,2],[74,2], [71,2],[74,2],[76,4], [72,3],[71,1],[69,4],
          [76,2],[79,2],[84,3],[81,1], [79,2],[83,2],[81,2],[79,2], [76,2],[74,1],[72,1],[74,4], [72,6],[0,2]],
    leadT:"triangle", leadV:.16, leadLen:1.3, bass:[[0,0,6],[8,7,4],[12,12,3]], bassT:"triangle", bassV:.16,
    drops:[0,3,6,10,13], dropV:.035, k:[0], s:[], h:[4,12], hV:.09},
  /* Particle Pop: bouncy, a little swing, every melody note pops */
  pop:{bpm:132, swing:.12, prog:["F","Dm","Bb","C","F","Dm","Bb","C"],
    lead:[[72,1],[0,1],[77,1],[0,1],[76,1],[77,1],[81,2], [79,1],[77,1],[74,2],[77,1],[0,1],[74,2], [70,1],[74,1],[77,1],[82,1],[81,2],[77,2], [79,2],[76,1],[72,1],[74,2],[76,2],
          [77,1],[0,1],[81,1],[0,1],[84,1],[81,1],[77,2], [81,1],[79,1],[77,1],[74,1],[77,2],[81,2], [82,2],[81,1],[79,1],[77,2],[74,2], [72,2],[76,2],[77,4]],
    leadT:"square", leadV:.055, leadLen:.8, blip:true, bass:[[0,0,2],[3,12,1],[6,7,2],[8,0,2],[11,12,1],[14,7,2]], bassT:"square", bassV:.07,
    arp:[2,6,10,14], arpV:.025, k:[0,8], s:[4,12], h:[2,6,10,14], hV:.12},
  /* Sentence Builder, Kanji Match, Pair Up: thinking music, slow and swung */
  puzzle:{bpm:96, swing:.2, prog:["Gmaj7","Em7","Cmaj7","D7","Gmaj7","Em7","Cmaj7","D7"],
    lead:[[71,3],[74,1],[78,2],[76,2], [74,4],[71,2],[67,2], [69,2],[71,2],[72,2],[76,2], [74,6],[0,2],
          [71,2],[74,2],[79,3],[78,1], [76,2],[74,2],[71,4], [72,2],[76,2],[74,2],[72,2], [69,4],[66,2],[69,2]],
    leadT:"triangle", leadV:.14, leadLen:1.1, bass:[[0,0,3],[6,7,2],[10,12,2],[14,10,2]], bassT:"triangle", bassV:.17,
    pad:true, padV:.016, k:[0,10], s:[8], h:[4,12], hV:.07},
  /* Boss Battle and Survival: D minor, driving, a bit menacing */
  boss:{bpm:150, swing:0, prog:["Dm","Dm","Bb","C","Dm","Dm","Gm","A"],
    lead:[[74,1],[74,1],[77,1],[74,1],[81,2],[79,2], [77,1],[76,1],[74,2],[69,4], [70,1],[74,1],[77,1],[82,1],[81,2],[77,2], [79,2],[76,2],[72,4],
          [74,1],[77,1],[81,1],[86,1],[84,2],[81,2], [82,2],[81,2],[77,2],[74,2], [79,2],[82,2],[81,2],[79,2], [76,2],[73,2],[69,4]],
    leadT:"sawtooth", leadV:.04, leadLen:1.2, dbl:"square", bass:[[0,0,1],[2,0,1],[4,12,1],[6,0,1],[8,0,1],[10,12,1],[12,0,1],[14,7,1]], bassT:"square", bassV:.08,
    arp:[1,3,5,7,9,11,13,15], arpV:.012, k:[0,6,8], s:[4,12], h:[2,6,10,14], hV:.1},
  /* Word Sprint: fast and bright, A mixolydian */
  sprint:{bpm:176, swing:0, prog:["A","G","D","A","A","G","D","E"],
    lead:[[76,1],[81,1],[85,1],[81,1],[88,2],[85,2], [86,1],[83,1],[79,1],[83,1],[86,2],[83,2], [81,1],[78,1],[74,1],[78,1],[81,2],[86,2], [85,4],[0,2],[81,2],
          [76,1],[81,1],[85,1],[88,1],[90,2],[88,2], [86,2],[83,2],[79,2],[83,2], [81,2],[86,2],[90,2],[86,2], [88,4],[83,2],[80,2]],
    leadT:"square", leadV:.05, leadLen:1.1, bass:[[0,0,1],[2,12,1],[4,0,1],[6,12,1],[8,0,1],[10,12,1],[12,7,1],[14,12,1]], bassT:"square", bassV:.07,
    arp:[0,2,4,6,8,10,12,14], arpV:.015, k:[0,8], s:[4,12], h:[2,6,10,14], hV:.12},
  /* Kana Keys: a laid-back groove with room to think, E dorian */
  keys:{bpm:108, swing:.1, prog:["Em7","A7","Em7","A7","Em7","A7","Em7","A7"],
    lead:[[79,1],[0,1],[76,1],[79,1],[0,1],[81,1],[79,2], [0,2],[78,1],[76,1],[73,2],[76,2], [71,1],[74,1],[76,1],[79,1],[0,1],[83,1],[81,2], [79,2],[78,1],[76,1],[78,4],
          [79,1],[0,1],[76,1],[79,1],[0,1],[81,1],[79,2], [0,2],[78,1],[76,1],[73,2],[76,2], [83,1],[0,1],[81,1],[79,1],[76,2],[74,2], [76,4],[0,4]],
    leadT:"square", leadV:.045, leadLen:.7, bass:[[0,0,2],[3,0,1],[6,12,1],[10,7,2],[11,10,1],[14,12,1]], bassT:"triangle", bassV:.19,
    stab:[4,12], stabV:.02, k:[0,7,10], s:[4,12], h:[2,6,10,14], hV:.09},
  /* Listening Booth: just a quiet bed, so the voice is what you hear */
  calm:{bpm:76, swing:0, prog:["Cmaj7","Am7","Fmaj7","G","Cmaj7","Am7","Fmaj7","G"],
    lead:[[0,4],[76,4], [0,4],[72,4], [0,4],[69,4], [0,4],[71,4], [0,4],[79,4], [0,4],[76,4], [0,4],[77,4], [74,8]],
    leadT:"sine", leadV:.08, leadLen:1.6, bass:[[0,0,14]], bassT:"sine", bassV:.12, pad:true, padV:.02, k:[], s:[], h:[], hV:0}
};
function build(sg){
  var bars = sg.prog.length, ev = [], i; for (i = 0; i < bars*16; i++) ev.push([]);
  var pos = 0; sg.lead.forEach(function(m){ if (m[0]) ev[(pos*2) % (bars*16)].push({l:m[0], d:m[1]*2}); pos += m[1]; });
  sg.prog.forEach(function(name, b){
    var ch = C[name], r = ch[0], s0 = b*16;
    sg.bass.forEach(function(p){ ev[s0 + p[0]].push({b:r + p[1], d:p[2]}); });
    (sg.arp || []).forEach(function(st, k){ ev[s0 + st].push({a:ch[1][k % ch[1].length] + 12}); });
    (sg.drops || []).forEach(function(st, k){ ev[s0 + st].push({a:ch[1][(k*2 + b) % ch[1].length] + 24, drop:1}); });
    (sg.stab || []).forEach(function(st){ ch[1].forEach(function(n){ ev[s0 + st].push({st:n}); }); });
    if (sg.pad) ch[1].forEach(function(n){ ev[s0].push({p:n, d:16}); });
    sg.k.forEach(function(st){ ev[s0 + st].push({k:1}); }); sg.s.forEach(function(st){ ev[s0 + st].push({s:1}); }); sg.h.forEach(function(st){ ev[s0 + st].push({h:1}); });
  });
  return ev;
}
function songStep(t, sp){
  var sg = cur.sg, ev = cur.ev, s = step % ev.length, intro = step < 32;
  ev[s].forEach(function(e){
    if (e.l){ if (intro) return; tone(mf(e.l), t, sp*e.d*sg.leadLen, sg.leadT, sg.leadV, sg.blip ? mf(e.l)*1.06 : 0); if (sg.dbl) tone(mf(e.l - 12), t, sp*e.d*sg.leadLen, sg.dbl, sg.leadV*.6); }
    else if (e.b) tone(mf(e.b), t, sp*e.d*.9, sg.bassT, sg.bassV);
    else if (e.a){ if (intro && !e.drop) return; tone(mf(e.a), t, e.drop ? .35 : sp*.7, e.drop ? "sine" : "square", e.drop ? sg.dropV : sg.arpV); }
    else if (e.st){ if (!intro) tone(mf(e.st), t, sp*.6, "square", sg.stabV); }
    else if (e.p) tone(mf(e.p), t, sp*e.d, "triangle", sg.padV);
    else if (e.k) tone(150, t, .12, "triangle", .4, 40);
    else if (e.s) noise(t, .11, .26, 2600);
    else if (e.h) noise(t, .03, sg.hV, 9000);
  });
}
function sched(){
  var c = AC; if (!c) return; vols(); OUT = MUSG;
  var bpm = cur.sg ? cur.sg.bpm : 168, sp = 60/bpm/4;
  if (next < c.currentTime) next = c.currentTime + .03;
  while (next < c.currentTime + .12){
    var t = next - c.currentTime, sw = cur.sg && cur.sg.swing && step % 2 ? cur.sg.swing*sp : 0;
    if (cur.sg) songStep(t + sw, sp); else driveStep(t, sp);
    step++; next += sp;
  }
  OUT = null;
}
AFX.songs = function(){ return ["drive", "theme"].concat(Object.keys(SONGS)); };
AFX.musicStart = function(id){
  if (id) AFX.song = id; id = AFX.song;
  if (bgm || !AFX.soundOn() || !AFX.musicOn() || !AFX.musicVol()) return;
  if (id === "theme" && root.ICATheme){ if (root.ICATheme.loop("chip")) bgm = "theme"; return; }
  var c = ac(); if (!c) return; cur = {sg: SONGS[id] || null}; if (cur.sg) cur.ev = build(cur.sg);
  step = 0; next = c.currentTime + .05; bgm = setInterval(sched, 25);
};
function themeOn(){ return !!(root.ICATheme && root.ICATheme.playing()); }   /* the theme resumes itself when the page comes back */
AFX.musicStop = function(){ if (themeOn()) root.ICATheme.stop(); if (bgm && bgm !== "theme") clearInterval(bgm); bgm = null; };
AFX.musicPlaying = function(){ return !!bgm || themeOn(); };
/* fade the arcade music down while a voice clip plays (the theme does this itself) */
function duck(){ vols(); }
document.addEventListener("play", function(e){ if (e.target && e.target.tagName === "AUDIO" && !e.target.hasAttribute("data-bgm")){ talking++; duck(true); } }, true);
["pause", "ended"].forEach(function(k){ document.addEventListener(k, function(e){ if (e.target && e.target.tagName === "AUDIO" && !e.target.hasAttribute("data-bgm")){ talking = Math.max(0, talking - 1); if (!talking) duck(false); } }, true); });
document.addEventListener("visibilitychange", function(){ if (document.hidden) AFX.musicStop(); });

/* ---------- effects ---------- */
function restart(el, cls, ms){ if (!el || RM) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(function(){ el.classList.remove(cls); }, ms); }
AFX.shake = function(screen){ restart(screen, "fx-shake", 460); restart(screen, "fx-red", 360); };
AFX.jelly = function(el){ restart(el, "fx-jelly", 520); };
AFX.flash = function(screen){ restart(screen, "fx-white", 320); };
function at(screen, el){ var r = el.getBoundingClientRect(), g = screen.getBoundingClientRect(); return {x: r.left - g.left + r.width/2, y: r.top - g.top + r.height/2}; }
AFX.burst = function(screen, el, n){
  if (RM || !screen || !el) return; var p0 = at(screen, el), cols = ["#f2cf6b","#7cc4c2","#a3c79a","#f09a70","#ffffff"];
  for (var i = 0; i < (n || 18); i++){
    var p = document.createElement("span"); p.className = "fx-pix"; p.style.left = p0.x + "px"; p.style.top = p0.y + "px"; p.style.background = cols[i % 5];
    var a = Math.random()*Math.PI*2, v = 45 + Math.random()*75;
    p.style.setProperty("--dx", Math.cos(a)*v + "px"); p.style.setProperty("--dy", Math.sin(a)*v - 30 + "px");
    screen.appendChild(p); setTimeout(function(p){ return function(){ if (p.parentNode) p.parentNode.removeChild(p); }; }(p), 850);
  }
};
AFX.pop = function(screen, el, text){
  if (!screen || !el) return; var r = el.getBoundingClientRect(), g = screen.getBoundingClientRect(), s = document.createElement("span");
  s.className = "fx-pop"; s.textContent = text; s.style.left = (r.left - g.left + r.width/2) + "px"; s.style.top = Math.max(0, r.top - g.top - 24) + "px";
  screen.appendChild(s); setTimeout(function(){ if (s.parentNode) s.parentNode.removeChild(s); }, 1000);
};
AFX.slam = function(screen, text){
  if (RM || !screen) return; var e = document.createElement("div"); e.className = "fx-slam"; e.textContent = text;
  screen.appendChild(e); setTimeout(function(){ if (e.parentNode) e.parentNode.removeChild(e); }, 950);
};
/* 3 · 2 · 1 · GO! over the screen, then cb() */
AFX.countdown = function(screen, cb){
  var ov = document.createElement("div"); ov.className = "fx-cd"; ov.setAttribute("aria-hidden", "true"); screen.appendChild(ov);
  var seq = ["3","2","1","GO!"], i = 0, gap = RM ? 300 : 520;
  (function step(){
    if (!ov.parentNode) return;
    if (i >= seq.length){ ov.parentNode.removeChild(ov); cb(); return; }
    ov.innerHTML = '<b>' + seq[i] + '</b>'; AFX.sfx(i < 3 ? "count" : "go"); i++; setTimeout(step, i === 4 ? 380 : gap);
  })();
  return function cancel(){ if (ov.parentNode) ov.parentNode.removeChild(ov); };
};
/* a score that rolls up to its new value */
AFX.roll = function(el, to, fmt){
  if (!el) return; var from = +(el.getAttribute("data-v") || 0); el.setAttribute("data-v", to);
  if (RM || to <= from){ el.textContent = fmt(to); return; }
  el.classList.add("fx-roll"); var v = from;
  var iv = setInterval(function(){ v = Math.min(to, v + Math.ceil((to - v)/4)); el.textContent = fmt(v); if (v >= to){ clearInterval(iv); el.classList.remove("fx-roll"); } }, 30);
};

/* ---------- high-score boards (Mugi made every game, so her score tops each board) ---------- */
AFX.MUGI = {practice:10, blitz:99999, survival:99999, today:9999, sprint:9999, match:9999, pairs:3};
AFX.LOWER = {pairs:true};
AFX.num = function(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); };
AFX.fmt = function(key, n){ return key === "pairs" ? n + " s" : key === "practice" ? n + "/10" : AFX.num(n); };
AFX.board = function(st, key){ var a = st.arcade; a.boards = a.boards || {}; return a.boards[key] = a.boards[key] || []; };
AFX.name = function(st){ return (st.arcade.name || "PLAYER 1").slice(0, 12); };
/* adds a score; returns the entry if it made the top 5, else null */
AFX.add = function(st, key, score){
  var b = AFX.board(st, key), low = AFX.LOWER[key], e = {n: AFX.name(st), s: score, t: Date.now()};
  b.push(e); b.sort(function(x, y){ return low ? x.s - y.s || x.t - y.t : y.s - x.s || x.t - y.t; });
  st.arcade.boards[key] = b.slice(0, 5);
  return st.arcade.boards[key].indexOf(e) > -1 ? e : null;
};
AFX.top = function(st, key){ var b = AFX.board(st, key); return b.length ? b[0].s : null; };
/* letter grade from accuracy (lesson games) */
AFX.grade = function(right, seen, min){ if (!seen) return "D"; var a = right/seen; return a === 1 && seen >= (min || 1) ? "S" : a >= .9 ? "A" : a >= .75 ? "B" : a >= .5 ? "C" : "D"; };
AFX.gradeStars = function(stars, misses){ return stars >= 3 ? (misses ? "A" : "S") : stars === 2 ? "B" : stars === 1 ? "C" : "D"; };

root.ArcadeFX = AFX;
})(this);
