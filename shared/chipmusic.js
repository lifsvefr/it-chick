/* IT CHICK Academy · Arcade game music (owner asked 21 Nov 2026: a tune per game, quiz-tempo, with the first
   tune's buildup, and more oomph). Original tunes, made live with the Web Audio API (no sound files).
   Every tune is arranged the same way:
     bars 1–2  bass and kick                     bars 3–4  + melody and hi-hats, a riser and a snare roll
     bar 5     the drop: crash, full drums, 16th hats, arpeggio, sub bass
     after     a fill every 8 bars, a crash on each new pass, and a harmony line under the melody from the 2nd pass
   Use: ChipMusic.start(audioContext, outputNode, id) · ChipMusic.stop() · ChipMusic.ids() */
(function(root){
"use strict";
var M = {}, AC = null, OUT = null, BUS = null, ECHO = null, NB = null, PW = {}, timer = null, step = 0, next = 0, cur = null;
function mf(n){ return 440*Math.pow(2, (n - 69)/12); }
function setup(ctx, out){
  if (AC === ctx && OUT === out) return;
  AC = ctx; OUT = out;
  BUS = AC.createGain(); BUS.connect(OUT);
  ECHO = AC.createDelay(1); var fb = AC.createGain(), wet = AC.createGain(), lp = AC.createBiquadFilter();
  fb.gain.value = .3; wet.gain.value = .26; lp.type = "lowpass"; lp.frequency.value = 3200;
  ECHO.connect(lp); lp.connect(fb); fb.connect(ECHO); lp.connect(wet); wet.connect(BUS);
  NB = AC.createBuffer(1, AC.sampleRate, AC.sampleRate);
  var d = NB.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random()*2 - 1;
  [.125, .25].forEach(function(duty){   /* NES-style pulse waves */
    var n = 48, re = new Float32Array(n), im = new Float32Array(n);
    for (var k = 1; k < n; k++) re[k] = 2/(k*Math.PI)*Math.sin(k*Math.PI*duty);
    PW[duty === .125 ? "p12" : "p25"] = AC.createPeriodicWave(re, im);
  });
}
function voice(f, t, d, w, vol, o){
  o = o || {}; var s = AC.createOscillator(), g = AC.createGain();
  if (PW[w]) s.setPeriodicWave(PW[w]); else s.type = w;
  s.frequency.setValueAtTime(f, t); if (o.slide) s.frequency.exponentialRampToValueAtTime(o.slide, t + Math.min(d, .08));
  if (o.vib && d > .22){ var l = AC.createOscillator(), lg = AC.createGain(); l.frequency.value = 6; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(f*.014, t + d*.7); l.connect(lg); lg.connect(s.frequency); l.start(t); l.stop(t + d + .05); }
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .004);
  g.gain.setValueAtTime(vol*.75, t + Math.max(.006, d*.55)); g.gain.exponentialRampToValueAtTime(.0001, t + d);
  s.connect(g); g.connect(BUS); if (o.echo) g.connect(ECHO); s.start(t); s.stop(t + d + .05);
}
function nz(t, d, vol, type, f1, f2, q, attack){
  var n = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain();
  n.buffer = NB; f.type = type; f.frequency.setValueAtTime(f1, t); if (f2) f.frequency.exponentialRampToValueAtTime(f2, t + d); if (q) f.Q.value = q;
  if (attack){ g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + d + .02); }
  else { g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + d); }
  n.connect(f); f.connect(g); g.connect(BUS); n.start(t, Math.random()*.4); n.stop(t + d + .05);
}
function kick(t, v){ var o = AC.createOscillator(), g = AC.createGain(); o.frequency.setValueAtTime(175, t); o.frequency.exponentialRampToValueAtTime(42, t + .13);
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.95*v, t + .003); g.gain.exponentialRampToValueAtTime(.0001, t + .24);
  o.connect(g); g.connect(BUS); o.start(t); o.stop(t + .26); voice(1400, t, .012, "square", .06*v); }
function snare(t, v){ voice(210, t, .09, "triangle", .32*v, {slide:150}); nz(t, .16, .42*v, "highpass", 1300); }
function hat(t, v, open){ nz(t, open ? .2 : .035, (open ? .1 : .13)*v, "highpass", 8000); }
function crash(t){ nz(t, 1.5, .2, "highpass", 4200); nz(t, .9, .1, "bandpass", 6500, 0, 1); }
function riser(t, d){ nz(t, d, .16, "bandpass", 300, 7500, 2.5, d*.95); }

var C = {
  Cm:[36,[60,63,67]], C:[36,[60,64,67]], D:[38,[62,66,69]], Dm:[38,[62,65,69]], Eb:[39,[63,67,70]], Em:[40,[64,67,71]], E:[40,[64,68,71]], Em7:[40,[64,67,71,74]],
  F:[41,[65,69,72]], Fm:[41,[65,68,72]], G:[43,[67,71,74]], Gm:[43,[67,70,74]], Ab:[44,[68,72,75]], A:[45,[69,73,76]], A7:[45,[69,73,76,79]], Am:[45,[69,72,76]],
  Bb:[46,[70,74,77]], B:[47,[71,75,78]], Bm:[47,[71,74,78]]
};
var OCT = [[0,0],[2,12],[4,0],[6,12],[8,0],[10,12],[12,0],[14,12]];
var DRIVE = [69,72,76,72,81,79,76,72, 77,76,72,69,72,74,76,72, 74,79,83,79,86,83,79,74, 80,76,71,76,80,83,80,76].map(function(n){ return [n,1]; });
var SONGS = {
  /* Blitz: the first arcade tune, A minor, 168 */
  drive:{bpm:168, prog:["Am","F","G","E","Am","F","G","E"], lead:DRIVE.concat(DRIVE), bass:OCT, k:[0,8,10], s:[4,12]},
  /* Practice, Today's Challenge, Track Mix: E minor, 160 */
  quiz:{bpm:160, prog:["Em","C","G","D","Em","C","D","B"],
    lead:[[76,1],[76,1],[79,1],[76,1],[83,2],[81,2], [79,1],[76,1],[72,2],[79,2],[76,2], [74,1],[79,1],[83,1],[79,1],[86,2],[83,2], [81,2],[78,2],[74,4],
          [76,1],[79,1],[83,1],[88,1],[86,2],[83,2], [84,2],[83,2],[79,2],[76,2], [78,1],[81,1],[86,1],[81,1],[78,2],[74,2], [75,2],[78,2],[83,2],[78,2]],
    bass:OCT, k:[0,8,10], s:[4,12]},
  /* Kana Rain: C minor, 152, the melody keeps falling */
  rain:{bpm:152, prog:["Cm","Ab","Bb","G","Cm","Ab","Fm","G"], arpUp:24,
    lead:[[84,1],[82,1],[79,1],[75,1],[79,2],[72,2], [80,1],[79,1],[75,1],[72,1],[75,2],[68,2], [82,1],[80,1],[77,1],[74,1],[77,2],[70,2], [79,2],[74,2],[71,4],
          [84,1],[82,1],[79,1],[84,1],[87,2],[84,2], [80,1],[84,1],[87,1],[84,1],[80,2],[75,2], [77,1],[80,1],[84,1],[80,1],[77,2],[72,2], [74,2],[79,2],[83,4]],
    bass:[[0,0],[2,0],[4,12],[6,0],[8,0],[10,0],[12,12],[14,7]], k:[0,6,8], s:[4,12]},
  /* Particle Pop: F major, 148, short popping notes */
  pop:{bpm:148, prog:["F","Dm","Bb","C","F","Dm","Bb","C"], blip:true, leadLen:.6,
    lead:[[72,1],[0,1],[77,1],[0,1],[76,1],[77,1],[81,2], [79,1],[77,1],[74,2],[77,1],[0,1],[74,2], [70,1],[74,1],[77,1],[82,1],[81,2],[77,2], [79,2],[76,1],[72,1],[74,2],[76,2],
          [77,1],[0,1],[81,1],[0,1],[84,1],[81,1],[77,2], [81,1],[79,1],[77,1],[74,1],[77,2],[81,2], [82,2],[81,1],[79,1],[77,2],[74,2], [72,2],[76,2],[77,4]],
    bass:[[0,0],[3,12],[4,0],[6,7],[8,0],[11,12],[12,0],[14,7]], k:[0,8,10], s:[4,12]},
  /* Sentence Builder, Kanji Match, Pair Up: G minor, 144 */
  think:{bpm:144, prog:["Gm","Eb","F","D","Gm","Eb","Cm","D"],
    lead:[[79,1],[0,1],[74,1],[79,1],[82,2],[79,2], [79,1],[77,1],[75,2],[70,2],[75,2], [77,1],[0,1],[72,1],[77,1],[81,2],[77,2], [78,2],[74,2],[69,2],[66,2],
          [79,1],[82,1],[86,1],[82,1],[84,2],[82,2], [79,2],[75,2],[82,2],[79,2], [75,1],[79,1],[84,1],[79,1],[75,2],[72,2], [74,2],[78,2],[81,2],[78,2]],
    bass:[[0,0],[2,12],[4,0],[6,12],[8,0],[10,12],[12,7],[14,12]], k:[0,8,11], s:[4,12]},
  /* Boss Battle, Survival: D minor, 150, heavier */
  boss:{bpm:150, prog:["Dm","Dm","Bb","C","Dm","Dm","Gm","A"], leadW:"sawtooth", leadV:.05, dbl:true,
    lead:[[74,1],[74,1],[77,1],[74,1],[81,2],[79,2], [77,1],[76,1],[74,2],[69,4], [70,1],[74,1],[77,1],[82,1],[81,2],[77,2], [79,2],[76,2],[72,4],
          [74,1],[77,1],[81,1],[86,1],[84,2],[81,2], [82,2],[81,2],[77,2],[74,2], [79,2],[82,2],[81,2],[79,2], [76,2],[73,2],[69,4]],
    bass:[[0,0],[2,0],[4,12],[6,0],[8,0],[10,12],[12,0],[14,7]], k:[0,6,8,14], s:[4,12]},
  /* Word Sprint: A minor, 176, the fastest */
  sprint:{bpm:176, prog:["Am","F","G","E","Am","F","G","E"],
    lead:[[76,1],[81,1],[84,1],[81,1],[88,2],[84,2], [84,1],[81,1],[77,1],[81,1],[84,2],[81,2], [83,1],[79,1],[74,1],[79,1],[83,2],[86,2], [83,4],[0,2],[80,2],
          [76,1],[81,1],[84,1],[88,1],[89,2],[88,2], [84,2],[81,2],[77,2],[81,2], [79,2],[83,2],[86,2],[83,2], [88,4],[83,2],[80,2]],
    bass:OCT, k:[0,8], s:[4,12]},
  /* Kana Keys: E minor, 128, syncopated, room to type */
  keys:{bpm:128, prog:["Em7","A7","Em7","A7","Em7","A7","C","B"], leadLen:.55,
    lead:[[79,1],[0,1],[76,1],[79,1],[0,1],[81,1],[79,2], [0,2],[78,1],[76,1],[73,2],[76,2], [71,1],[74,1],[76,1],[79,1],[0,1],[83,1],[81,2], [79,2],[78,1],[76,1],[78,4],
          [79,1],[0,1],[76,1],[79,1],[0,1],[81,1],[79,2], [0,2],[78,1],[76,1],[73,2],[76,2], [79,1],[0,1],[76,1],[72,1],[76,2],[79,2], [78,4],[75,4]],
    bass:[[0,0],[3,0],[6,12],[8,0],[10,7],[11,10],[14,12]], k:[0,7,10], s:[4,12]},
  /* Listening Booth: A minor, 120, no melody, no crashes, so it never competes with the voice */
  pulse:{bpm:120, prog:["Am","F","C","G","Am","F","Dm","E"], lead:[], calm:true,
    bass:OCT, k:[0,8], s:[12]}
};
function build(sg){
  var bars = sg.prog.length, ev = [], i; for (i = 0; i < bars*16; i++) ev.push([]);
  var pos = 0; sg.lead.forEach(function(m){ if (m[0]) ev[(pos*2) % (bars*16)].push({l:m[0], d:m[1]*2, ch:sg.prog[Math.floor(pos/8) % bars]}); pos += m[1]; });
  sg.prog.forEach(function(name, b){
    var ch = C[name], r = ch[0], s0 = b*16;
    sg.bass.forEach(function(p){ ev[s0 + p[0]].push({b:r + p[1]}); });
    for (var a = 0; a < 16; a++) ev[s0 + a].push({a:ch[1][a % ch[1].length] + (sg.arpUp || 12)});
    sg.k.forEach(function(st){ ev[s0 + st].push({k:1}); }); sg.s.forEach(function(st){ ev[s0 + st].push({s:1}); });
  });
  return ev;
}
/* a harmony note under the melody: the nearest chord tone at least a third below */
function under(n, name){ var best = null; C[name][1].forEach(function(c){ for (var o = -24; o <= 24; o += 12){ var x = c + o; if (x <= n - 3 && (best === null || x > best)) best = x; } }); return best; }
function play(t, sp){
  var sg = cur.sg, s = step % cur.ev.length, bar = Math.floor(step/16), s16 = step % 16, q = sg.calm ? .7 : 1;
  var full = bar >= 4, nbars = sg.prog.length, second = bar >= 4 + nbars, phrase = (bar - 4) % nbars;
  if (!sg.calm){
    if (bar === 3 && s16 === 0) riser(t, sp*16);
    if (full && phrase === 0 && s16 === 0) crash(t);
    if ((bar === 3 && s16 >= 8) || (full && phrase === nbars - 1 && s16 >= 12)){ if (s16 % 2 === 0 || s16 >= 12) snare(t, .45 + (s16 - 8)*.07); }
  }
  /* hi-hats: 8ths while it builds, 16ths with accents after the drop, an open hat to push into the next bar */
  if (bar >= 2 && !full && s16 % 2 === 0) hat(t, .7*q);
  if (full){ if (s16 === 14 && bar % 2 === 1 && !sg.calm) hat(t, 1, true); else hat(t, (s16 % 4 === 2 ? 1 : s16 % 2 ? .45 : .7)*q); }
  if (full && s16 % 8 === 0) voice(mf(C[sg.prog[bar % nbars]][0] - 12), t, sp*3, "sine", .2*q);   /* sub */
  var rolling = bar === 3 && s16 >= 8;
  cur.ev[s].forEach(function(e){
    if (e.l){ if (bar < 2) return; var d = sp*e.d*(sg.leadLen || .85), w = sg.leadW || "p25", v = (sg.leadV || .085)*q;
      voice(mf(e.l), t, d, w, v, {echo:true, vib:e.d >= 3, slide: sg.blip ? mf(e.l)*1.05 : 0});
      if (sg.dbl) voice(mf(e.l - 12), t, d, "square", .035*q);
      if (second){ var h = under(e.l, e.ch); if (h) voice(mf(h), t, d, "p12", v*.55); } }
    else if (e.b){ if (rolling && s16 % 4) return; voice(mf(e.b), t, sp*1.5, "p25", (full ? .1 : .085)*q); }
    else if (e.a){ if (full) voice(mf(e.a), t, sp*.6, "p12", .028*q); }
    else if (e.k){ if (rolling) return; kick(t, (full ? 1 : .85)*q); }
    else if (e.s){ if (full && !(phrase === nbars - 1 && s16 >= 12)) snare(t, .85*q); }
  });
}
function sched(){
  if (!AC || !cur) return; var sp = 60/cur.sg.bpm/4;
  if (next < AC.currentTime) next = AC.currentTime + .03;
  while (next < AC.currentTime + .15){ play(next, sp); step++; next += sp; }
}
M.ids = function(){ return Object.keys(SONGS); };
M.has = function(id){ return !!SONGS[id]; };
M.start = function(ctx, out, id){
  M.stop(); if (!SONGS[id]) return false; setup(ctx, out);
  ECHO.delayTime.value = 60/SONGS[id].bpm*.75;   /* a dotted-8th echo */
  cur = {sg:SONGS[id], ev:build(SONGS[id])}; step = 0; next = AC.currentTime + .06; timer = setInterval(sched, 25); return true;
};
M.stop = function(){ if (timer){ clearInterval(timer); timer = null; } cur = null; };
M.playing = function(){ return !!timer; };
root.ChipMusic = M;
})(typeof window !== "undefined" ? window : this);
