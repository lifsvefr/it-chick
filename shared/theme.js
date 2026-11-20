/* IT CHICK Academy · the theme tune (owner asked 20 Nov 2026).
   One melody in F major, made with the Web Audio API (no sound files, works offline). It always ends on two
   "cheep" chirps, after the chick's call. Uses:
     ICATheme.sting()        welcome screen, about 3 s            (Music volume)
     ICATheme.loop("chip")   the first-launch game, 8-bit         (Music volume)
     ICATheme.loop("soft")   optional desk music, lo-fi, OFF by default (Settings → Music on the desk)
     ICATheme.flourish()     lesson complete, about 1 s           (Sound effects volume)
     ICATheme.stop()
   Music fades down while any voice clip plays and stops when the page is hidden. */
(function(root){
"use strict";
var T = {}, AC = null, MASTER = null, MUS = null, DUCK = null, TONE = null, FX = null, SG = null, NOISE = null;
function vol(k){ try { return root.ICA && ICA.vol ? ICA.vol(k) : 1; } catch(e){ return 1; } }
function ac(){
  if (!AC){
    try {
      AC = new (root.AudioContext || root.webkitAudioContext)(); graph();
    } catch(e){ AC = null; }
  }
  if (AC && AC.state === "suspended" && AC.resume){ try { var r = AC.resume(); if (r && r.catch) r.catch(function(){}); } catch(e){} }
  return AC;
}
function graph(){
  var comp = AC.createDynamicsCompressor(); comp.connect(AC.destination);
  MASTER = AC.createGain(); MASTER.gain.value = 0.85; MASTER.connect(comp);
  TONE = AC.createBiquadFilter(); TONE.type = "lowpass"; TONE.frequency.value = 18000; TONE.connect(MASTER);
  DUCK = AC.createGain(); DUCK.connect(TONE);
  MUS = AC.createGain(); MUS.connect(DUCK);
  FX = AC.createGain(); FX.connect(MASTER);
  SG = AC.createGain(); SG.connect(MASTER);   /* the welcome sting: music volume, but not caught by a loop fading out */
  NOISE = AC.createBuffer(1, AC.sampleRate * 0.5, AC.sampleRate);
  var d = NOISE.getChannelData(0); for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}
function levels(){ if (MUS){ MUS.gain.value = vol("music") * 0.55; SG.gain.value = vol("music") * 0.55; FX.gain.value = vol("fx") * 0.6; } }
function soundOff(){ try { return ((ICA.load().settings || {}).sound) === "off"; } catch(e){ return false; } }
function mf(n){ return 440 * Math.pow(2, (n - 69) / 12); }

/* ---------- instruments ---------- */
function env(g, t, a, peak, d, sus){
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a);
  if (sus) g.gain.setValueAtTime(peak, t + Math.max(a, d - sus));
  g.gain.exponentialRampToValueAtTime(0.0001, t + d);
}
function osc(type, f, t, d, peak, out, a, sus, detune){
  var o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.setValueAtTime(f, t);
  if (detune) o.detune.setValueAtTime(detune, t);
  env(g, t, a || 0.005, peak, d, sus); o.connect(g); g.connect(out); o.start(t); o.stop(t + d + 0.05);
}
var INST = {
  sq:   function(n, t, d, v, out){ osc("square", mf(n), t, d * 0.92, 0.075 * v, out, 0.004, d * 0.5); },
  tri:  function(n, t, d, v, out){ osc("triangle", mf(n), t, d * 0.95, 0.16 * v, out, 0.004, d * 0.5); },
  bell: function(n, t, d, v, out){ osc("sine", mf(n), t, Math.max(d, 0.5), 0.2 * v, out, 0.004); osc("sine", mf(n + 12), t, 0.35, 0.06 * v, out, 0.003); osc("triangle", mf(n), t, d, 0.05 * v, out, 0.004); },
  lead: function(n, t, d, v, out){ osc("triangle", mf(n), t, d * 1.1, 0.13 * v, out, 0.02, d * 0.4); osc("sine", mf(n + 12), t, d * 0.8, 0.025 * v, out, 0.02, 0, 4); },
  ep:   function(n, t, d, v, out){ osc("sine", mf(n), t, 1.4, 0.06 * v, out, 0.01); osc("sine", mf(n + 12), t, 0.5, 0.012 * v, out, 0.005); },
  pad:  function(n, t, d, v, out){ osc("triangle", mf(n), t, d, 0.022 * v, out, 0.25, d * 0.5, -6); osc("triangle", mf(n), t, d, 0.022 * v, out, 0.25, d * 0.5, 6); },
  bass: function(n, t, d, v, out){ osc("triangle", mf(n), t, d * 0.9, 0.22 * v, out, 0.005, d * 0.5); },
  sub:  function(n, t, d, v, out){ osc("sine", mf(n), t, d * 0.95, 0.24 * v, out, 0.015, d * 0.5); },
  arp:  function(n, t, d, v, out){ osc("square", mf(n), t, d * 0.7, 0.014 * v, out, 0.003); }
};
function chirp(t, v, out, soft){   /* the chick's "cheep": a quick upward glide */
  var o = AC.createOscillator(), g = AC.createGain(); o.type = soft ? "sine" : "square";
  o.frequency.setValueAtTime(1180, t); o.frequency.exponentialRampToValueAtTime(2350, t + 0.06); o.frequency.exponentialRampToValueAtTime(2100, t + 0.1);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime((soft ? 0.12 : 0.05) * v, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
  o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.14);
}
function drum(kind, t, v, out){
  if (kind === "kick"){ var o = AC.createOscillator(), g = AC.createGain(); o.frequency.setValueAtTime(130, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    env(g, t, 0.003, 0.35 * v, 0.16); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.2); return; }
  var n = AC.createBufferSource(), f = AC.createBiquadFilter(), g2 = AC.createGain(); n.buffer = NOISE;
  f.type = kind === "hat" ? "highpass" : "bandpass"; f.frequency.value = kind === "hat" ? 7000 : 1800;
  var d = kind === "hat" ? 0.035 : 0.11; env(g2, t, 0.002, (kind === "hat" ? 0.05 : 0.14) * v, d);
  n.connect(f); f.connect(g2); g2.connect(out); n.start(t); n.stop(t + d + 0.02);
}

/* ---------- the tune ---------- */
/* melody in eighth notes: [midi, eighths]; "c" = a cheep, 0 = rest */
var A = [[65,1],[69,1],[72,1],[77,1],[76,2],[72,2],  [74,2],[70,1],[74,1],[72,2],[69,2],
         [70,2],[67,1],[70,1],[69,2],[65,1],[69,1],  [67,1],[64,1],[65,2],["c",1],["c",1],[0,2]];
var B = [[65,1],[69,1],[72,1],[77,1],[79,2],[81,2],  [82,2],[81,1],[79,1],[77,2],[74,2],
         [72,2],[69,1],[72,1],[70,1],[67,1],[64,2],  [65,4],["c",1],["c",1],[0,2]];
var CH = {F:[53,57,60], Bb:[50,53,58], Gm:[50,55,58], C7:[48,52,58], Dm:[50,53,57]};
var ROOT = {F:41, Bb:46, Gm:43, C7:48, Dm:38};
var HARM = ["F","F","Bb","Bb","Gm","C7","F","F",  "F","F","Bb","Dm","F","C7","F","F"];   /* per half bar, bars 1–8 */

/* build a loop as events per 16th step */
function build(style){
  var bars = style === "soft" ? 16 : 8, steps = bars * 16, ev = [], i;
  for (i = 0; i < steps; i++) ev.push([]);
  var put = function(s, e){ ev[s % steps].push(e); };
  var mel = A.concat(B), pos = 0;
  if (style === "soft") mel = mel.concat(mel);   /* 16 bars: the tune, then a thinned second pass */
  mel.forEach(function(m){
    var s = pos * 2, bar = Math.floor(s / 16);
    if (style !== "soft" || bar < 8){ if (m[0] === "c") put(s, {c:1}); else if (m[0]) put(s, {i: style === "soft" ? "lead" : "sq", n: m[0] + (style === "soft" ? 0 : 12), d: m[1]}); }
    else if (m[0] && m[0] !== "c" && pos % 4 === 0) put(s, {i:"lead", n:m[0], d:m[1], v:0.6});   /* second pass: just a few notes, so it stays in the background */
    pos += m[1];
  });
  for (var h = 0; h < bars * 2; h++){
    var name = HARM[h % 16], s0 = h * 8, ch = CH[name], r = ROOT[name];
    if (style === "soft"){
      ch.forEach(function(n){ put(s0, {i:"ep", n:n + 12, d:4}); }); put(s0 + 6, {i:"ep", n:ch[1] + 12, d:2, v:0.7});
      put(s0, {i:"sub", n:r, d:3, v:0.75}); put(s0 + 6, {i:"sub", n:r + 7, d:1, v:0.5});
      if (h % 2 === 0) put(s0, {k:"kick", v:0.5}); else put(s0 + 4, {k:"kick", v:0.35});
      put(s0 + 2, {k:"hat", v:0.8}); put(s0 + 6, {k:"hat"});
    } else {
      for (var q = 0; q < 8; q += 2) put(s0 + q, {i:"bass", n:r + (q % 4 ? 12 : 0), d:1, v:0.65});
      for (var a = 0; a < 8; a++) put(s0 + a, {i:"arp", n:ch[a % 3] + 24, d:0.5});
      put(s0, {k:"kick", v:0.55}); if (h % 2) put(s0 + 4, {k:"snare", v:0.8});
      put(s0 + 4, {k:"hat", v:0.6});
    }
  }
  return {ev:ev, steps:steps, bpm: style === "soft" ? 80 : 138, swing: style === "soft" ? 0.16 : 0};
}

var song = null, timer = null, step = 0, next = 0, style = null;
function tick(){
  if (!AC || !song) return; levels();
  var e16 = 60 / song.bpm / 4;
  if (next < AC.currentTime) next = AC.currentTime + 0.03;
  while (next < AC.currentTime + 0.15){
    var s = step % song.steps, t = next + (s % 4 === 2 ? song.swing * e16 * 2 : 0);
    song.ev[s].forEach(function(e){
      if (e.c) chirp(t, 1, MUS, style === "soft");
      else if (e.k) drum(e.k, t, e.v || 1, MUS);
      else INST[e.i](e.n, t, e.d * e16 * 2, e.v || 1, MUS);
    });
    step++; next += e16;
  }
}
T.loop = function(st){
  if (!vol("music")) return false;
  if (timer && style === st) return true;
  T.stop(true); if (!ac()) return false;
  style = st; song = build(st); step = 0; next = AC.currentTime + 0.08;
  TONE.frequency.setValueAtTime(st === "soft" ? 2600 : 18000, AC.currentTime);
  MUS.gain.cancelScheduledValues(AC.currentTime); levels();
  timer = setInterval(tick, 25); return true;
};
T.stop = function(now){
  if (!timer) return; clearInterval(timer); timer = null; song = null;
  if (MUS && !now){ var t = AC.currentTime; MUS.gain.setValueAtTime(MUS.gain.value, t); MUS.gain.linearRampToValueAtTime(0.0001, t + 0.6); setTimeout(levels, 900); }
};
T.playing = function(){ return timer ? style : null; };

/* welcome screen: the opening of the tune, landing on the cheeps */
T.sting = function(){
  if (!vol("music") || !ac()) return; levels();
  var e8 = 60 / 132 / 2, t0 = AC.currentTime + 0.05, notes = [[65,1],[69,1],[72,1],[77,1],[76,1],[79,1],[81,3]], p = 0;
  notes.forEach(function(m){ INST.bell(m[0], t0 + p * e8, m[1] * e8, 1, SG); p += m[1]; });
  CH.F.forEach(function(n){ INST.pad(n + 12, t0, p * e8 + 0.9, 1.6, SG); }); INST.sub(41, t0, p * e8 + 0.6, 0.8, SG);
  chirp(t0 + p * e8 + 0.05, 1, SG, true); chirp(t0 + p * e8 + 0.05 + e8, 1, SG, true);
};
/* lesson complete: the cadence + cheeps (sound effects volume) */
T.flourish = function(){
  if (!vol("fx") || soundOff() || !ac()) return; levels();
  var e8 = 60 / 160 / 2, t0 = AC.currentTime + 0.03;
  [[72,1],[76,1],[77,2]].reduce(function(p, m){ INST.bell(m[0], t0 + p * e8, m[1] * e8, 0.9, FX); return p + m[1]; }, 0);
  INST.ep(57, t0 + 2 * e8, 1, 1.4, FX); INST.ep(60, t0 + 2 * e8, 1, 1.4, FX);
  chirp(t0 + 4 * e8 + 0.04, 0.9, FX, true); chirp(t0 + 5 * e8 + 0.04, 0.9, FX, true);
};

/* fade the music down while a voice clip plays */
var talking = 0;
function duck(on){ if (!DUCK || !AC) return; var t = AC.currentTime; DUCK.gain.cancelScheduledValues(t); DUCK.gain.setValueAtTime(DUCK.gain.value, t); DUCK.gain.linearRampToValueAtTime(on ? 0.18 : 1, t + (on ? 0.15 : 0.7)); }
document.addEventListener("play", function(e){ if (e.target && e.target.tagName === "AUDIO"){ talking++; duck(true); } }, true);
["pause", "ended"].forEach(function(k){ document.addEventListener(k, function(e){ if (e.target && e.target.tagName === "AUDIO"){ talking = Math.max(0, talking - 1); if (!talking) duck(false); } }, true); });
var hiddenStyle = null;
document.addEventListener("visibilitychange", function(){
  if (document.hidden){ if (timer){ hiddenStyle = style; T.stop(true); } }
  else if (hiddenStyle){ var s = hiddenStyle; hiddenStyle = null; T.loop(s); }
});
document.addEventListener("ica:settings", function(e){ var d = e.detail || {}; if (d.k === "vol"){ levels(); if (!vol("music")) T.stop(true); } });
/* preview: render into an OfflineAudioContext (used to make listening samples; not used by the app) */
T.renderTo = function(ctx, what, bars){
  AC = ctx; graph(); levels();
  if (what === "sting") return T.sting();
  if (what === "flourish") return T.flourish();
  style = what; song = build(what); var e16 = 60 / song.bpm / 4, n = (bars || song.steps / 16) * 16;
  for (var s = 0; s < n; s++){ var t = 0.05 + s * e16 + (s % 4 === 2 ? song.swing * e16 * 2 : 0);
    song.ev[s % song.steps].forEach(function(e){ if (e.c) chirp(t, 1, MUS, style === "soft"); else if (e.k) drum(e.k, t, e.v || 1, MUS); else INST[e.i](e.n, t, e.d * e16 * 2, e.v || 1, MUS); }); }
  TONE.frequency.value = what === "soft" ? 2600 : 18000;
};
root.ICATheme = T;
})(window);
