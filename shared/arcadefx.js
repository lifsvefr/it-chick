/* IT CHICK Academy · Arcade sound, music, effects and high-score boards.
   Chiptune sounds and the background tune are made with the Web Audio API (no sound files).
   Effects switch off when the device asks for reduced motion. Boards live in the store under arcade.boards. */
(function(root){
"use strict";
var AFX = {};
var RM = root.matchMedia && root.matchMedia("(prefers-reduced-motion: reduce)").matches;
AFX.reduced = RM;

/* ---------- audio ---------- */
var AC = null, MASTER = null, NOISE = null;
AFX.soundOn = function(){ return true; };       // the page replaces these two with its settings
AFX.musicOn = function(){ return true; };
function ac(){
  if (!AC){
    try {
      AC = new (root.AudioContext || root.webkitAudioContext)();
      MASTER = AC.createGain(); MASTER.gain.value = 0.9;
      var comp = AC.createDynamicsCompressor(); MASTER.connect(comp); comp.connect(AC.destination);
      NOISE = AC.createBuffer(1, AC.sampleRate * 0.5, AC.sampleRate);
      var d = NOISE.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random()*2 - 1;
    } catch(e){ AC = null; }
  }
  if (AC && AC.state === "suspended" && AC.resume) AC.resume();
  return AC;
}
function tone(f, t0, d, type, vol, slide){
  var c = ac(); if (!c) return;
  var t = c.currentTime + t0, o = c.createOscillator(), g = c.createGain();
  o.type = type || "square"; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + d);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(MASTER); o.start(t); o.stop(t + d + 0.02);
}
function noise(t0, d, vol, freq){
  var c = ac(); if (!c) return;
  var t = c.currentTime + t0, n = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
  n.buffer = NOISE; f.type = "lowpass"; f.frequency.setValueAtTime(freq || 3000, t); f.frequency.exponentialRampToValueAtTime(80, t + d);
  g.gain.setValueAtTime(vol || 0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  n.connect(f); f.connect(g); g.connect(MASTER); n.start(t); n.stop(t + d);
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
  best:  function(){ [523,659,784,1046,784,1046].forEach(function(f, i){ tone(f, i*.08, .1, "square", .18); }); tone(1319, .5, .6, "square", .2); tone(659, .5, .6, "triangle", .28); noise(.5, .25, .18, 8000); }
};
AFX.sfx = function(kind, arg){ if (!AFX.soundOn()) return; try { (SFX[kind] || SFX.tap)(arg); } catch(e){} };

/* background tune: an original driving loop in A minor, 168 bpm, 16th-note steps */
var bgm = null, step = 0, next = 0;
var CH = [[57,60,64],[53,57,60],[55,59,62],[52,56,59]], ROOT = [45,41,43,40];
var LEAD = [69,72,76,72,81,79,76,72, 77,76,72,69,72,74,76,72, 74,79,83,79,86,83,79,74, 80,76,71,76,80,83,80,76];
function mf(n){ return 440*Math.pow(2, (n - 69)/12); }
function sched(){
  var c = AC; if (!c) return; var sp = 60/168/4;
  if (next < c.currentTime) next = c.currentTime + .03;
  while (next < c.currentTime + .12){
    var t = next - c.currentTime, bar = Math.floor(step/16) % 4, s16 = step % 16;
    if (step % 2 === 0){ tone(mf(LEAD[(step/2) % 32]), t, sp*1.6, "square", .06); tone(mf(ROOT[bar] + (s16 % 4 ? 12 : 0)), t, sp*1.5, "square", .075); }
    tone(mf(CH[bar][s16 % 3] + 12), t, sp*.7, "square", .02);
    if (s16 === 0 || s16 === 8 || s16 === 10) tone(150, t, .12, "triangle", .45, 40);
    if (s16 === 4 || s16 === 12) noise(t, .12, .32, 2600);
    if (step % 2 === 1) noise(t, .03, .1, 10000);
    step++; next += sp;
  }
}
AFX.musicStart = function(){
  if (bgm || !AFX.soundOn() || !AFX.musicOn()) return;
  var c = ac(); if (!c) return; step = 0; next = c.currentTime + .05; bgm = setInterval(sched, 25);
};
AFX.musicStop = function(){ if (bgm){ clearInterval(bgm); bgm = null; } };
AFX.musicPlaying = function(){ return !!bgm; };
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
