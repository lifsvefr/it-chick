/* IT CHICK Academy · first-launch intro: "Piyo's way to school".
   Plays before the welcome screen, only on a first launch and after "Run setup again" (index.html calls ICA.intro(done)).
   You meet a lost, studious chick and guide it to the Academy by giving it a little program of steps: a first taste of
   sequences, debugging (it bonks and you fix the steps) and loops (Repeat). Then Mugi arrives and the welcome begins.
   Everything is drawn here as pixel art on a 160 x 120 canvas (8 x 6 tiles of 20 px), scaled up by whole numbers.
   Skip is always available. Sounds use shared/arcadefx.js at the effects volume. Reduced motion: no walking animation. */
(function(){
"use strict";
var W = 160, H = 120, T = 20, COLS = 8, ROWS = 6;
var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
var C = {K:"#3b2419", F:"#8c5c3e", Y:"#ffd65c", y:"#ecaa3e", O:"#f28434", P:"#f6968c", W:"#fffcf0",
  grass:"#a8cf8e", grass2:"#93bf7a", path:"#efe2c6", path2:"#e2d1ae", water:"#86b9de", water2:"#b9d9ef", bush:"#5f9e5c", bush2:"#7fbb6f",
  wall:"#f6ead2", wall2:"#e7d4b2", roof:"#7a3f2c", roof2:"#93513a", win:"#9cc0d8", door:"#8c5c3e", red:"#d9644a", cat:"#fffaf2", catB:"#2b2420", flower:"#f6968c", flower2:"#c0a8cc", sky:"#cfe6f2"};

/* ---------- sprites (20 x 20 strings) ---------- */
var CHICK = [
"........KK.K........",
".......KYYKYK.......",
"........KYYK........",
"......KKKYYKKK......",
"....KKYYYYYYYYKK....",
"...KYYYYYYYYYYYYK...",
"..KYYYYYYYYYYYYYYK..",
"..KYYFFFYYYYFFFYYK..",
".KYYFWKYFFFFWKYFYYK.",
".KYYFYKYFYYFYKYFYYK.",
".KPYYFFFYOOYFFFYYPK.",
"KYKYYYYYYOOYYYYYYKYK",
".KYKYYYYYYYYYYYYYKYK",
"..KKYYYYYYYYYYYYKK..",
"..KYYYYYYYYYYYYYYK..",
"..KyYYYYYYYYYYYYyK..",
"...KyYYYYYYYYYYyK...",
"....KyyYYYYYYyyK....",
".....KKKKKKKKKK.....",
"......KOK..KOK......"];
function variant(base, edits){ var g = base.slice(); edits.forEach(function(e){ var r = g[e[0]].split(""); for (var i = 0; i < e[2].length; i++) if (e[2][i] !== "_") r[e[1] + i] = e[2][i]; g[e[0]] = r.join(""); }); return g; }
var CHICK_STEP = variant(CHICK, [[19, 6, "..KOK.KOK..."]]);                                    // feet apart: walking
var CHICK_HAPPY = variant(CHICK, [[8, 5, "WYY"], [8, 12, "WYY"], [9, 5, "KYK"], [9, 12, "KYK"], [8, 6, "K"], [8, 13, "K"]]);   // ^ ^ eyes
CHICK_HAPPY = variant(CHICK_HAPPY, [[9, 6, "Y"], [9, 13, "Y"]]);
var CHICK_WINGS = variant(CHICK_HAPPY, [[9, 0, "K"], [10, 0, "KY"], [9, 19, "K"], [10, 18, "YK"], [11, 0, ".K"], [11, 18, "K."]]);   // wings up
var CHICK_BONK = variant(CHICK, [[8, 5, "YKY"], [9, 5, "KYK"], [8, 12, "YKY"], [9, 12, "KYK"]]);  // > < eyes

function sprite(rows, pal){
  var c = document.createElement("canvas"); c.width = rows[0].length; c.height = rows.length; var x = c.getContext("2d");
  rows.forEach(function(r, j){ for (var i = 0; i < r.length; i++){ var k = r[i]; if (k === "." || !(pal || C)[k]) continue; x.fillStyle = (pal || C)[k]; x.fillRect(i, j, 1, 1); } });
  return c;
}
var SP = {}, MUGI = new Image();
function sprites(){
  if (SP.chick) return;
  SP.chick = sprite(CHICK); SP.step = sprite(CHICK_STEP); SP.happy = sprite(CHICK_HAPPY); SP.wings = sprite(CHICK_WINGS); SP.bonk = sprite(CHICK_BONK);
}

/* ---------- tiles, drawn with a tiny pixel pen ---------- */
var g;   // context
function px(x, y, w, h, c){ g.fillStyle = c; g.fillRect(x, y, w || 1, h || 1); }
function blob(cx, cy, rx, ry, fill, line){   // pixel ellipse with a 1 px outline
  for (var y = -ry; y <= ry; y++) for (var x = -rx; x <= rx; x++){
    var d = (x*x)/(rx*rx) + (y*y)/(ry*ry); if (d > 1.05) continue;
    var edge = (x+1)*(x+1)/(rx*rx) + y*y/(ry*ry) > 1.05 || (x-1)*(x-1)/(rx*rx) + y*y/(ry*ry) > 1.05 || x*x/(rx*rx) + (y+1)*(y+1)/(ry*ry) > 1.05 || x*x/(rx*rx) + (y-1)*(y-1)/(ry*ry) > 1.05;
    px(cx + x, cy + y, 1, 1, edge && line ? line : fill);
  }
}
function grass(X, Y, seed){ px(X, Y, T, T, C.grass); for (var i = 0; i < 4; i++){ var a = (seed * 7 + i * 13) % 17, b = (seed * 11 + i * 5) % 17; px(X + a + 1, Y + b + 1, 1, 2, C.grass2); px(X + a + 2, Y + b, 1, 2, C.grass2); } }
function path(X, Y, seed){ px(X, Y, T, T, C.path); for (var i = 0; i < 3; i++){ var a = (seed * 5 + i * 7) % 16, b = (seed * 3 + i * 11) % 16; px(X + a + 2, Y + b + 2, 2, 1, C.path2); } }
function bush(X, Y){ blob(X + 10, Y + 12, 8, 6, C.bush, C.K); blob(X + 7, Y + 10, 4, 3, C.bush2); px(X + 13, Y + 9, 2, 1, C.bush2); }
function flowers(X, Y, seed){ grass(X, Y, seed); [[4, 6, C.flower], [13, 4, C.flower2], [9, 13, C.W], [15, 15, C.flower]].forEach(function(f){ px(X + f[0], Y + f[1], 2, 2, f[2]); px(X + f[0], Y + f[1] + 2, 1, 2, C.bush); }); }
function puddle(X, Y){ path(X, Y, 3); blob(X + 10, Y + 11, 8, 5, C.water, C.K); px(X + 6, Y + 9, 4, 1, C.water2); px(X + 12, Y + 13, 3, 1, C.water2); }
function cat(X, Y, t){   // the Kamome House cat, asleep in the road
  path(X, Y, 5);
  blob(X + 12, Y + 13, 7, 5, C.cat, C.K); blob(X + 6, Y + 11, 4, 4, C.cat, C.K);
  px(X + 3, Y + 6, 1, 2, C.K); px(X + 4, Y + 7, 1, 1, C.catB); px(X + 4, Y + 6, 1, 1, C.K);   // ears
  px(X + 8, Y + 6, 1, 2, C.K); px(X + 7, Y + 7, 1, 1, C.catB); px(X + 7, Y + 6, 1, 1, C.K);
  px(X + 12, Y + 10, 4, 3, C.catB); px(X + 14, Y + 13, 3, 2, C.catB); px(X + 5, Y + 8, 2, 2, C.catB);   // patches
  px(X + 4, Y + 11, 2, 1, C.K); px(X + 7, Y + 11, 2, 1, C.K); px(X + 6, Y + 13, 1, 1, C.P);           // sleeping eyes, nose
  if (!RM && Math.floor(t / 900) % 2) { px(X + 14, Y + 3, 3, 1, C.K); px(X + 16, Y + 4, 1, 1, C.K); px(X + 14, Y + 5, 3, 1, C.K); }   // z
}
function building(X, Y, w, h){   // the Academy: cream walls, cocoa roof, windows, a door and a < > sign
  px(X, Y + 8, w, h - 8, C.wall); px(X, Y + h - 3, w, 3, C.wall2); px(X, Y + 8, w, 1, C.K); px(X, Y + 8, 1, h - 8, C.K); px(X + w - 1, Y + 8, 1, h - 8, C.K);
  for (var i = 0; i < 9; i++) px(X - 2 + i, Y + 8 - i, w + 4 - i * 2, 1, i % 3 ? C.roof : C.roof2);
  px(X + 2, Y, w - 4, 1, C.K);
  var sx = X + w / 2 - 9; px(sx, Y + 11, 18, 8, C.W); px(sx, Y + 11, 18, 1, C.K); px(sx, Y + 18, 18, 1, C.K); px(sx, Y + 11, 1, 8, C.K); px(sx + 17, Y + 11, 1, 8, C.K);
  [[3, 14], [4, 13], [4, 15], [5, 12], [5, 16]].forEach(function(p){ px(sx + p[0], Y + p[1], 1, 1, C.F); });              // <
  [[14, 14], [13, 13], [13, 15], [12, 12], [12, 16]].forEach(function(p){ px(sx + p[0], Y + p[1], 1, 1, C.F); });         // >
  px(sx + 7, Y + 13, 4, 4, C.Y); px(sx + 8, Y + 14, 1, 1, C.K); px(sx + 10, Y + 14, 1, 1, C.K); px(sx + 9, Y + 15, 1, 1, C.O);   // tiny chick
  for (var k = 0; k < 2; k++){ var wx = X + 6 + k * (w - 18); px(wx, Y + 24, 6, 6, C.win); px(wx, Y + 24, 6, 1, C.K); px(wx, Y + 29, 6, 1, C.K); px(wx, Y + 24, 1, 6, C.K); px(wx + 5, Y + 24, 1, 6, C.K); px(wx + 1, Y + 25, 2, 1, C.W); }
  px(X + w / 2 - 4, Y + h - 12, 8, 12, C.door); px(X + w / 2 - 4, Y + h - 12, 8, 1, C.K); px(X + w / 2 - 4, Y + h - 12, 1, 12, C.K); px(X + w / 2 + 3, Y + h - 12, 1, 12, C.K); px(X + w / 2 + 1, Y + h - 6, 1, 1, C.Y);
}
function goal(X, Y, t){   // a sparkling spot where the chick should end up
  var on = RM || Math.floor(t / 300) % 2;
  px(X + 9, Y + 4, 2, 12, on ? C.W : C.Y); px(X + 4, Y + 9, 12, 2, on ? C.W : C.Y); px(X + 7, Y + 7, 6, 6, C.Y); px(X + 8, Y + 8, 4, 4, C.W);
}

/* ---------- levels ---------- */
/* map letters: . path, g grass, f flowers, b bush, p puddle, c cat, A academy (drawn once), G goal, S start */
var LEVELS = [
  {map: ["gfgbgfgb",
         "gg..g.gg",
         "g.....Gg",
         "g.Sp...g",
         "gg....bg",
         "bgfgbgfg"], slots: 8, repeat: false,
   intro: ["Piyo can only take one step at a time. Give it a list of steps with the arrows, then press ▶ Run.", "Careful: Piyo can’t swim."],
   win: ["Piyo! Piyo!", "It followed your steps in order, one by one. That’s all a program is."]},
  {map: ["gbgfAAAA",
         "ggbbGAAA",
         "gbb..bfg",
         "gb..bbgg",
         "gS.bbfgg",
         "bgfgbgfb"], slots: 2, repeat: true,
   intro: ["The Academy is just up the hill! But Piyo can only remember two steps at a time…", "Tap ↻ Repeat to run your steps more than once."],
   win: []}
];

/* ---------- the overlay ---------- */
ICA.intro = function(done){
  sprites(); MUGI.src = ICA.base + "shared/mascot/pixel/mugi-px-yay.webp";
  var host = document.createElement("div"); host.className = "pintro"; host.setAttribute("role", "dialog"); host.setAttribute("aria-modal", "true"); host.setAttribute("aria-label", "Piyo’s way to school");
  host.innerHTML =
    '<div class="pi-top"><span class="pi-title">PIYO’S WAY TO SCHOOL</span><button class="pi-skip" type="button">Skip ›</button></div>' +
    '<div class="pi-stage"><canvas width="' + W + '" height="' + H + '" aria-hidden="true"></canvas><div class="pi-bubble" hidden></div></div>' +
    '<div class="pi-box" aria-live="polite"><div class="pi-who"></div><img class="pi-face" alt="" hidden><p class="pi-text"></p><button class="pi-next" type="button">▼</button></div>' +
    '<div class="pi-code" hidden><div class="pi-prog" aria-label="Your program"></div>' +
      '<div class="pi-pad"><button data-c="U" aria-label="Up">↑</button><button data-c="L" aria-label="Left">←</button><button data-c="D" aria-label="Down">↓</button><button data-c="R" aria-label="Right">→</button>' +
      '<button data-c="rep" class="pi-rep" aria-label="Repeat">↻ ×1</button><button data-c="del" aria-label="Delete last step">⌫</button><button data-c="run" class="pi-run">▶ Run</button></div></div>';
  document.body.appendChild(host); document.documentElement.style.overflow = "hidden";
  var cv = host.querySelector("canvas"); g = cv.getContext("2d"); g.imageSmoothingEnabled = false;
  var box = host.querySelector(".pi-box"), who = host.querySelector(".pi-who"), face = host.querySelector(".pi-face"), text = host.querySelector(".pi-text"), nextB = host.querySelector(".pi-next");
  var code = host.querySelector(".pi-code"), prog = host.querySelector(".pi-prog"), repB = host.querySelector(".pi-rep"), bub = host.querySelector(".pi-bubble");
  var FX = window.ArcadeFX; if (FX){ FX.fxVol = function(){ return ICA.vol("fx"); }; FX.musicVol = function(){ return ICA.vol("music"); }; }
  function sfx(k, a){ try { if (FX) FX.sfx(k, a); } catch(e){} }
  function chirp(){ try { if (FX) FX.sfx("tap"); } catch(e){} }
  // fit the canvas to the screen in whole-number steps, so every pixel stays square
  function fit(){ var s = Math.max(1, Math.floor(Math.min(host.clientWidth - 24, 560) / W)); if (host.clientHeight < 640) s = Math.min(s, Math.max(1, Math.floor((host.clientHeight - 300) / H))); cv.style.width = W * s + "px"; cv.style.height = H * s + "px"; host.style.setProperty("--px", s); }
  fit(); window.addEventListener("resize", fit);

  var L = 0, lvl, start, pos, steps = [], rep = 1, running = false, bonks = 0, mode = "talk", pose = "chick", hopT = 0, t0 = performance.now(), ended = false, showHint = false, outro = null;
  function cell(x, y){ var r = lvl.map[y]; return r ? r[x] : undefined; }
  function free(x, y){ var k = cell(x, y); return k === "." || k === "S" || k === "G"; }
  function load(i){
    L = i; lvl = LEVELS[i]; steps = []; rep = 1; bonks = 0; showHint = false;
    lvl.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++){ if (r[x] === "S") start = {x:x, y:y}; if (r[x] === "G") lvl.goal = {x:x, y:y}; } });
    pos = {x:start.x, y:start.y, dx:0, dy:0}; pose = "chick"; repB.hidden = !lvl.repeat; drawProg();
  }
  function seed(x, y){ return (x * 31 + y * 17 + L * 7) % 23; }
  function draw(now){
    var t = now - t0;
    lvl.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++){
      var k = r[x], X = x * T, Y = y * T;
      if (k === "g" || k === "A") grass(X, Y, seed(x, y)); else if (k === "f") flowers(X, Y, seed(x, y)); else if (k === "b"){ grass(X, Y, seed(x, y)); bush(X, Y); }
      else if (k === "p") puddle(X, Y); else if (k === "c") cat(X, Y, t); else path(X, Y, seed(x, y));
    } });
    if (L === 1) building(5 * T + 2, 0, 3 * T - 4, 2 * T - 2);
    if (outro && outro.mugi && MUGI.complete){ g.imageSmoothingEnabled = true; var my = RM ? 0 : Math.round(Math.sin(t / 220)); g.drawImage(MUGI, 110, 22 + my, 40, 40); g.imageSmoothingEnabled = false; }
    if (lvl.goal && !outro) goal(lvl.goal.x * T, lvl.goal.y * T, t);
    if (showHint && lvl.hint) lvl.hint.forEach(function(p, i){ if (Math.floor(t / 250) % lvl.hint.length >= i) px(p.x * T + 9, p.y * T + 9, 2, 2, C.F); });
    // the chick
    {
      var bob = RM ? 0 : (running || mode === "talk" ? Math.round(Math.sin(t / 160)) : 0), hop = hopT > now ? -Math.round(Math.sin((hopT - now) / 300 * Math.PI) * 6) : 0;
      var img = SP[pose] || SP.chick; if (pose === "chick" && running && Math.floor(t / 150) % 2) img = SP.step;
      g.drawImage(img, Math.round(pos.x * T + pos.dx), Math.round(pos.y * T + pos.dy) + bob + hop - 2);
    }
    if (!bub.hidden){ var s = +getComputedStyle(host).getPropertyValue("--px") || 2; bub.style.left = (pos.x * T + pos.dx + 10) * s + "px"; bub.style.top = (pos.y * T + pos.dy - 3) * s + "px"; }
  }
  function loop(now){ if (ended) return; draw(now); requestAnimationFrame(loop); }
  requestAnimationFrame(loop);

  /* dialogue: a queue of lines; each tap shows the next one */
  var queue = [], after = null;
  function say(lines, then, speaker){
    queue = lines.map(function(l){ return typeof l === "string" ? {t:l, who:speaker} : l; }); after = then; code.hidden = true; box.hidden = false; mode = "talk"; nextLine();
  }
  function nextLine(){
    var l = queue.shift();
    if (!l){ var a = after; after = null; if (a) a(); return; }
    who.textContent = l.who === "mugi" ? "MUGI" : l.who === "piyo" ? "PIYO" : "";
    face.hidden = l.who !== "mugi"; if (l.who === "mugi") face.src = ICA.base + "shared/mascot/pixel/mugi-px-" + (l.mood || "hello") + ".webp";
    if (l.who === "piyo"){ chirp(); hopT = performance.now() + 300; }
    if (l.choice){ text.innerHTML = ""; text.textContent = l.t; var b = document.createElement("button"); b.className = "pi-choice"; b.type = "button"; b.textContent = l.choice; text.appendChild(document.createElement("br")); text.appendChild(b); b.onclick = function(e){ e.stopPropagation(); sfx("tap"); nextLine(); }; nextB.hidden = true; b.focus(); }
    else { text.textContent = l.t; nextB.hidden = false; }
    if (l.bubble){ bub.hidden = false; bub.textContent = l.bubble; } else bub.hidden = true;
    if (l.pose) pose = l.pose;
  }
  box.addEventListener("click", function(){ if (!nextB.hidden) { sfx("tap"); nextLine(); } });

  /* the program */
  function drawProg(){
    var cells = "";
    for (var i = 0; i < lvl.slots; i++){ var s = steps[i]; cells += '<span class="pi-slot' + (s ? " on" : "") + '" data-i="' + i + '">' + (s ? {U:"↑", D:"↓", L:"←", R:"→"}[s] : "") + '</span>'; }
    prog.innerHTML = cells + (lvl.repeat ? '<span class="pi-x">×' + rep + '</span>' : "");
    repB.textContent = "↻ ×" + rep;
  }
  code.addEventListener("click", function(e){
    var b = e.target.closest("button"); if (!b || running) return; var c = b.dataset.c;
    if (c === "U" || c === "D" || c === "L" || c === "R"){ if (steps.length < lvl.slots){ steps.push(c); sfx("flip"); } else sfx("no"); }
    else if (c === "del"){ steps.pop(); sfx("tap"); }
    else if (c === "rep"){ rep = rep % 4 + 1; sfx("tap"); }
    else if (c === "run"){ if (steps.length) run(); else sfx("no"); return; }
    drawProg();
  });
  function highlight(i){ prog.querySelectorAll(".pi-slot").forEach(function(s){ s.classList.toggle("now", +s.dataset.i === i); }); }
  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function slide(dx, dy){
    if (RM){ pos.x += dx; pos.y += dy; return wait(220); }
    return new Promise(function(res){ var a = performance.now(), D = 260; (function f(n){ var k = Math.min(1, (n - a) / D); pos.dx = dx * T * k; pos.dy = dy * T * k; if (k < 1) requestAnimationFrame(f); else { pos.x += dx; pos.y += dy; pos.dx = pos.dy = 0; res(); } })(a); });
  }
  function bump(dx, dy){
    return new Promise(function(res){ var a = performance.now(); pose = "bonk"; sfx("no"); (function f(n){ var k = (n - a) / 220; pos.dx = dx * 5 * Math.sin(Math.min(1, k) * Math.PI); pos.dy = dy * 5 * Math.sin(Math.min(1, k) * Math.PI); if (k < 1 && !RM) requestAnimationFrame(f); else { pos.dx = pos.dy = 0; res(); } })(a); });
  }
  function run(){
    running = true; code.classList.add("busy"); bub.hidden = true;
    var list = []; for (var r = 0; r < rep; r++) steps.forEach(function(s, i){ list.push([s, i]); });
    var k = 0;
    (function nextStep(){
      if (k >= list.length){ return finish(); }
      var s = list[k][0], i = list[k][1]; k++; highlight(i);
      var d = {U:[0,-1], D:[0,1], L:[-1,0], R:[1,0]}[s];
      if (!free(pos.x + d[0], pos.y + d[1])) return bump(d[0], d[1]).then(oops);
      sfx("tick"); slide(d[0], d[1]).then(function(){ if (lvl.goal && pos.x === lvl.goal.x && pos.y === lvl.goal.y) return win(); nextStep(); });
    })();
  }
  function finish(){ highlight(-1); oops(true); }
  function oops(short){
    bonks++; bub.hidden = false; bub.textContent = short === true ? "?" : "BUG!";
    if (bonks >= 2 && lvl.hint) showHint = true;
    wait(900).then(function(){
      pos = {x:start.x, y:start.y, dx:0, dy:0}; pose = "chick"; running = false; code.classList.remove("busy"); highlight(-1); bub.hidden = true;
      box.hidden = false; who.textContent = ""; face.hidden = true; nextB.hidden = true;
      text.textContent = short === true ? "Piyo stopped before the sparkle. Add more steps and run it again."
        : bonks >= 2 && lvl.hint ? "Bonk! Follow the little dots: they show a way through. Fix your steps and run again."
        : "Bonk! That’s a bug: a step that doesn’t do what we meant. Change your steps and run it again.";
    });
  }
  function win(){
    running = false; highlight(-1); pose = "wings"; sfx("clear"); hopT = performance.now() + 300;
    code.classList.remove("busy");
    wait(700).then(function(){
      if (L === 0) say(lvl.win.map(function(t, i){ return i ? {t:t} : {t:t, who:"piyo", pose:"happy"}; }), function(){ load(1); say(LEVELS[1].intro, play); });
      else ending();
    });
  }
  function play(){ box.hidden = false; who.textContent = ""; face.hidden = true; nextB.hidden = true; text.textContent = lvl.repeat ? "Two steps, then Repeat. What pattern climbs the hill?" : "Tap arrows to build Piyo’s steps, then ▶ Run."; code.hidden = false; mode = "code"; }
  function ending(){
    outro = {mugi:false}; pose = "wings"; hopT = performance.now() + 300;
    wait(700).then(function(){ outro.mugi = true; sfx("flip"); return wait(500); }).then(function(){ chirp(); pose = "happy"; hopT = performance.now() + 300; return wait(400); }).then(function(){
      say([{t:"Oh! There you are, Piyo!", who:"mugi", mood:"oops"},
           {t:"Thank you for bringing it all the way here. Piyo follows me everywhere. My name, Mugi, means wheat in Japanese, so I can’t really blame it.", who:"mugi", mood:"tip"},
           {t:"…Wait. Are you the new student starting today?", who:"mugi", mood:"think", choice:"Yes, that’s me!"},
           {t:"I knew it! Welcome to IT CHICK Academy. Come in, come in!", who:"mugi", mood:"yay"}], close);
    });
  }
  function close(){
    if (ended) return; ended = true; window.removeEventListener("resize", fit);
    host.classList.add("out"); setTimeout(function(){ if (host.parentNode) host.parentNode.removeChild(host); document.documentElement.style.overflow = ""; if (done) done(); }, RM ? 0 : 450);
  }
  host.querySelector(".pi-skip").onclick = close;
  document.addEventListener("keydown", function key(e){
    if (ended){ document.removeEventListener("keydown", key); return; }
    if (mode === "code" && !running){ var m = {ArrowUp:"U", ArrowDown:"D", ArrowLeft:"L", ArrowRight:"R", Backspace:"del", Enter:"run"}[e.key]; if (m){ e.preventDefault(); var b = code.querySelector('[data-c="' + m + '"]'); if (b) b.click(); } }
    else if (mode === "talk" && (e.key === "Enter" || e.key === " ") && !nextB.hidden){ e.preventDefault(); nextLine(); }
  });
  // the solution path, shown as dots after two bonks
  LEVELS[0].hint = [{x:2, y:2}, {x:3, y:2}, {x:4, y:2}, {x:5, y:2}];
  LEVELS[1].hint = [{x:2, y:4}, {x:2, y:3}, {x:3, y:3}, {x:3, y:2}, {x:4, y:2}, {x:4, y:1}];

  load(0);
  say([{t:"It’s your first day. You’re on your way to IT CHICK Academy…"},
       {t:"Piyo?", who:"piyo", bubble:"?"},
       {t:"A small chick in round glasses is standing in the street, holding a tiny book. It keeps looking up the hill, toward the Academy."},
       {t:"It must be lost. Can you show it the way?"}].concat(LEVELS[0].intro.map(function(t){ return {t:t}; })), play);
};
})();
