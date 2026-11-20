/* IT CHICK Academy · first-launch intro: "The way to school".
   Plays before the welcome screen, only on a first launch and after "Run setup again" (index.html calls ICA.intro(done)).
   On your first day you meet a small, studious chick that seems lost, and guide it to the Academy by giving it a little
   program of steps: sequences, debugging (it bonks and you fix the steps) and a loop (Repeat). At the door Mugi reveals who
   the chick really is: THE IT Chick, mascot and head of the Academy, which was testing you all along.
   Everything is pixel art drawn here on a 160 x 120 canvas (8 x 6 tiles of 20 px), scaled up by whole numbers, with a faint
   tile grid. A panel under the controls shows the player's arrows as real code and highlights each line as it runs.
   Skip is always available. Sounds use shared/arcadefx.js at the effects volume. Reduced motion: no walking animation. */
(function(){
"use strict";
var W = 160, H = 120, T = 20;
var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
var C = {K:"#3b2419", F:"#8c5c3e", Y:"#ffd65c", y:"#ecaa3e", O:"#f28434", P:"#f6968c", W:"#fffcf0",
  g1:"#a9d18e", g2:"#9fca85", gd:"#7fb26c", gl:"#c6e4ab",
  p1:"#f0e2c4", pe:"#dcc59c", pd:"#c4a77c", pl:"#fff6e0",
  bd:"#3f7a46", bm:"#5e9e58", bl:"#86c072", bs:"#b9e19c", trunk:"#8c5c3e",
  wd:"#5b93c6", wm:"#86b9e0", wl:"#cfe7f7",
  wall:"#f8edd8", wall2:"#ead8b8", roof:"#7a3f2c", roof2:"#94523a", roof3:"#5e2f21", win:"#9cc0d8", win2:"#cfe3ef", door:"#8c5c3e", door2:"#6e4630", pot:"#d9644a",
  fp:"#f6968c", fl:"#c0a8cc", fw:"#fffcf0", fc:"#ffd65c",
  H:"#4a2e24", h:"#6b4535", S:"#f8dcc8", s:"#ecbfa6", E:"#2b1a12", Cr:"#f6ead2", c:"#e2cfae", V:"#3e2a22", v:"#5a3e32", T:"#8a5a3c", t:"#6e4630", L:"#4a2e24", B:"#5a3328", b:"#7a4a3a", M:"#d9a640"};

/* ---------- sprites (strings, one character per pixel) ---------- */
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
/* Mugi, standing: dark hair, round glasses, cream shirt, dark knit vest, wide brown trousers, mustard socks, loafers. Single-letter palette keys; "Cr" is written as "C" here. Shoulder-length hair; no bag (brown on brown did not read). */
var MUGI = [
".......KKKKKK.......",
".....KKHHHHHHKK.....",
"....KHHhhHHHHHHK....",
"...KHHhHHHHHHHHHK...",
"...KHHHHHHHHHHHHK...",
"..KHHHHHHHHHHHHHHK..",
"..KHHHSHHHHSSHHHHK..",
"..KHHSSSSSSSSSSHHK..",
"..KHSFFFSSSSFFFSHK..",
"..KHFSESFFFFSESFHK..",
"..KHFSESFSSFSESFHK..",
"..KHSFFFSSSSFFFSHK..",
"..KHHPSSSssSSSPHHK..",
"..KHHHSSSSSSSSHHHK..",
".KHHHHKSSSSSSKHHHHK.",
".KHHHKCCWCCWCCKHHHK.",
"..KHKCCVVVVVVCCKHK..",
"...KCCVVvVVvVVCCK...",
"...KCCVVVVVVVVCCK...",
"...KSCVVVVVVVVCSK...",
"....KcVVVVVVVVcK....",
"....KTTTTTTTTTTK....",
"....KTTTTTTTTTTK....",
"....KTTTTtTTTTTK....",
"...KTTTTTtTTTTTTK...",
"...KTTTTKtKTTTTTK...",
"..KTTTTTK.KTTTTTTK..",
"..KTTTTTK.KTTTTTTK..",
"..KKKKKKK.KKKKKKKK..",
"....KMMK...KMMK.....",
"...KLLLLK.KLLLLK....",
"...KKKKKK.KKKKKK...."];
function variant(base, edits){ var g = base.slice(); edits.forEach(function(e){ var r = g[e[0]].split(""); for (var i = 0; i < e[2].length; i++) if (e[2][i] !== "_") r[e[1] + i] = e[2][i]; g[e[0]] = r.join(""); }); return g; }
var CHICK_STEP = variant(CHICK, [[19, 6, "..KOK.KOK..."]]);
var CHICK_HAPPY = variant(CHICK, [[8, 5, "WKY"], [9, 5, "KYK"], [8, 12, "WKY"], [9, 12, "KYK"]]);
var CHICK_WINGS = variant(CHICK_HAPPY, [[9, 0, "K"], [10, 0, "KY"], [9, 19, "K"], [10, 18, "YK"], [11, 0, ".K"], [11, 18, "K."]]);
var CHICK_BONK = variant(CHICK, [[8, 5, "YKY"], [9, 5, "KYK"], [8, 12, "YKY"], [9, 12, "KYK"]]);

function sprite(rows){
  var c = document.createElement("canvas"); c.width = rows[0].length; c.height = rows.length; var x = c.getContext("2d");
  rows.forEach(function(r, j){ for (var i = 0; i < r.length; i++){ var k = r[i]; if (k === ".") continue; var col = k === "C" ? C.Cr : C[k]; if (!col) continue; x.fillStyle = col; x.fillRect(i, j, 1, 1); } });
  return c;
}
var SP = {};
function sprites(){
  if (SP.chick) return;
  SP.chick = sprite(CHICK); SP.step = sprite(CHICK_STEP); SP.happy = sprite(CHICK_HAPPY); SP.wings = sprite(CHICK_WINGS); SP.bonk = sprite(CHICK_BONK);
  SP.mugi = sprite(MUGI);
}

/* ---------- tiles, drawn with a tiny pixel pen ---------- */
var g, lvlRef;
function px(x, y, w, h, c){ g.fillStyle = c; g.fillRect(x, y, w || 1, h || 1); }
function inE(x, y, rx, ry){ return (x*x)/(rx*rx) + (y*y)/(ry*ry) <= 1.02; }
function blob(cx, cy, rx, ry, fill, line){
  for (var y = -ry; y <= ry; y++) for (var x = -rx; x <= rx; x++){
    if (!inE(x, y, rx, ry)) continue;
    var edge = !inE(x+1, y, rx, ry) || !inE(x-1, y, rx, ry) || !inE(x, y+1, rx, ry) || !inE(x, y-1, rx, ry);
    px(cx + x, cy + y, 1, 1, edge && line ? line : fill);
  }
}
function shadow(cx, cy, rx, ry){ g.globalAlpha = .22; blob(cx, cy, rx, ry, C.K); g.globalAlpha = 1; }
function hash(a, b){ var h = (a * 374761393 + b * 668265263) | 0; h = (h ^ (h >>> 13)) * 1274126177 | 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
function grass(X, Y, s){
  px(X, Y, T, T, C.g1);
  for (var by = 0; by < T; by += 4) for (var bx = 0; bx < T; bx += 4) if (hash(X + bx + s, Y + by) < .32) px(X + bx, Y + by, 4, 4, C.g2);
  for (var i = 0; i < 3; i++){ var a = 2 + Math.floor(hash(X + i, Y + s) * 15), b = 3 + Math.floor(hash(Y + i * 3, X + s) * 14);
    px(X + a, Y + b, 1, 1, C.gd); px(X + a + 2, Y + b, 1, 1, C.gd); px(X + a + 1, Y + b + 1, 1, 1, C.gd); px(X + a + 1, Y + b - 1, 1, 1, C.gl); }
}
function pathTile(X, Y, s, open){   // open = [up, right, down, left]: true where the next tile is also path
  px(X, Y, T, T, C.p1);
  for (var i = 0; i < 3; i++){ var a = 3 + Math.floor(hash(X + i * 5, Y + s) * 13), b = 3 + Math.floor(hash(Y + i * 7, X) * 13); px(X + a, Y + b, 2, 1, C.pl); px(X + a + 1, Y + b + 1, 1, 1, C.pe); }
  var e = [[X, Y, T, 2, X, Y, 1, 0], [X + T - 2, Y, 2, T, X + T - 1, Y, 0, 1], [X, Y + T - 2, T, 2, X, Y + T - 1, 1, 0], [X, Y, 2, T, X, Y, 0, 1]];
  for (var k = 0; k < 4; k++){
    if (open[k]) continue; var q = e[k];
    px(q[0], q[1], q[2], q[3], C.pe); px(q[4], q[5], q[6] ? T : 1, q[7] ? T : 1, C.pd);
    for (var j = 2; j < T - 2; j += 4){ var off = Math.floor(hash(X + j, Y + k) * 2); if (q[6]) px(X + j + off, q[5] + (k === 0 ? 1 : -1) * 0, 2, 1, C.g1); else px(q[4] + (k === 3 ? 0 : 0), Y + j + off, 1, 2, C.g1); }
  }
  // rounded outside corners
  if (!open[0] && !open[3]){ px(X, Y, 3, 1, C.g1); px(X, Y + 1, 1, 2, C.g1); px(X + 1, Y + 1, 1, 1, C.pd); }
  if (!open[0] && !open[1]){ px(X + T - 3, Y, 3, 1, C.g1); px(X + T - 1, Y + 1, 1, 2, C.g1); px(X + T - 2, Y + 1, 1, 1, C.pd); }
  if (!open[2] && !open[3]){ px(X, Y + T - 1, 3, 1, C.g1); px(X, Y + T - 3, 1, 2, C.g1); px(X + 1, Y + T - 2, 1, 1, C.pd); }
  if (!open[2] && !open[1]){ px(X + T - 3, Y + T - 1, 3, 1, C.g1); px(X + T - 1, Y + T - 3, 1, 2, C.g1); px(X + T - 2, Y + T - 2, 1, 1, C.pd); }
}
function bush(X, Y){
  shadow(X + 10, Y + 16, 8, 2);
  blob(X + 10, Y + 11, 8, 6, C.bd, C.K); blob(X + 9, Y + 10, 6, 4, C.bm); blob(X + 7, Y + 8, 3, 2, C.bl);
  px(X + 6, Y + 7, 1, 1, C.bs); px(X + 12, Y + 9, 1, 1, C.bl); px(X + 14, Y + 11, 1, 1, C.bm); px(X + 4, Y + 12, 1, 1, C.bm);
}
function tree(X, Y){
  shadow(X + 10, Y + 18, 7, 2);
  px(X + 8, Y + 12, 4, 7, C.trunk); px(X + 8, Y + 12, 1, 7, C.K); px(X + 11, Y + 12, 1, 7, C.K); px(X + 9, Y + 13, 1, 4, "#a8744f");
  blob(X + 10, Y + 8, 9, 7, C.bd, C.K); blob(X + 9, Y + 7, 7, 5, C.bm); blob(X + 7, Y + 5, 4, 3, C.bl); px(X + 5, Y + 4, 2, 1, C.bs); px(X + 13, Y + 9, 1, 1, C.bl);
}
function flowers(X, Y, s){
  grass(X, Y, s);
  [[4, 5, C.fp], [13, 3, C.fl], [9, 12, C.fw], [15, 14, C.fp]].forEach(function(f){
    var x = X + f[0], y = Y + f[1]; px(x, y + 3, 1, 2, C.bd); px(x - 1, y + 1, 3, 1, f[2]); px(x, y, 1, 3, f[2]); px(x, y + 1, 1, 1, C.fc);
  });
}
function puddle(X, Y, s, open, t){
  pathTile(X, Y, s, open);
  blob(X + 10, Y + 11, 8, 5, C.wm, C.K); blob(X + 10, Y + 12, 6, 3, C.wd);
  px(X + 5, Y + 9, 4, 1, C.wl); px(X + 7, Y + 10, 2, 1, C.wl); px(X + 12, Y + 14, 3, 1, C.wl);
  if (!RM && Math.floor(t / 700) % 3 === 0) px(X + 14, Y + 9, 1, 1, C.W);
}
/* one irregular puddle over every "p" tile, drawn once per map as metaballs: each tile adds a soft blob, and wherever the
   blobs add up past 1 is water. That gives one organic shape with a single outline, deeper water in the middle, and glints. */
var pondCache = {};
function pond(t){
  var key = lvlRef.map.join("");
  if (!(key in pondCache)){
    var balls = [];
    lvlRef.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++) if (r[x] === "p"){
      balls.push([x * T + 10 + (hash(x, y) - .5) * 3, y * T + 10 + (hash(y, x) - .5) * 2, 7.5 + hash(x + 7, y) * 1.5]);
      if (r[x + 1] === "p") balls.push([x * T + 20, y * T + 10 + (hash(x, y + 9) - .5) * 3, 6.5]);                         // smooth the join to the right
      if (lvlRef.map[y + 1] && lvlRef.map[y + 1][x] === "p") balls.push([x * T + 10 + (hash(x + 9, y) - .5) * 3, y * T + 20, 6.5]);   // and below
    } });
    if (!balls.length){ pondCache[key] = null; return; }
    var field = function(x, y){ var f = 0; balls.forEach(function(b){ var dx = (x - b[0]) / 1.15, dy = y - b[1]; f += b[2] * b[2] / (dx * dx + dy * dy + 1); }); return f; };
    var c = document.createElement("canvas"); c.width = W; c.height = H; var q = c.getContext("2d"), inside = function(x, y){ return field(x, y) > 1.15; };
    for (var y = 0; y < H; y++) for (var x = 0; x < W; x++){
      if (!inside(x, y)) continue;
      var edge = !inside(x + 1, y) || !inside(x - 1, y) || !inside(x, y + 1) || !inside(x, y - 1), f = field(x, y);
      q.fillStyle = edge ? C.K : f > 2.6 ? C.wd : f > 1.6 && !inside(x, y - 2) ? C.wl : C.wm; q.fillRect(x, y, 1, 1);
    }
    balls.forEach(function(b){ q.fillStyle = C.wl; q.fillRect(Math.round(b[0]) - 5, Math.round(b[1]) - 3, 4, 1); });
    pondCache[key] = {c:c, balls:balls};
  }
  var P = pondCache[key]; if (!P) return;
  g.drawImage(P.c, 0, 0);
  if (!RM) P.balls.forEach(function(b, i){ if (Math.floor(t / 650 + i * 1.7) % 4 === 0) px(Math.round(b[0]) + 4, Math.round(b[1]) - 1, 1, 1, C.W); });
}
function building(X, Y, w, h){   // the Academy: cream walls, tiled roof, a < > sign with the chick, windows, door, two potted plants
  var wy = Y + 9;
  px(X, wy, w, h - 9, C.wall);
  for (var r = wy + 4; r < Y + h - 3; r += 5) for (var c = X + 1 + ((r / 5) % 2) * 4; c < X + w - 2; c += 9) px(c, r, 4, 1, C.wall2);
  px(X, Y + h - 3, w, 3, C.wall2); px(X, wy, 1, h - 9, C.K); px(X + w - 1, wy, 1, h - 9, C.K); px(X, Y + h - 1, w, 1, C.K);
  for (var i = 0; i < 10; i++){ var rx = X - 3 + i, rw = w + 6 - i * 2; px(rx, wy - i, rw, 1, i % 3 === 0 ? C.roof3 : i % 3 === 1 ? C.roof : C.roof2); px(rx, wy - i, 1, 1, C.K); px(rx + rw - 1, wy - i, 1, 1, C.K); }
  px(X - 3, wy, w + 6, 1, C.K); px(X + 7, Y - 1, w - 14, 1, C.K);
  var sx = X + w / 2 - 10, sy = wy + 2;
  px(sx, sy, 20, 9, C.W); px(sx, sy, 20, 1, C.K); px(sx, sy + 8, 20, 1, C.K); px(sx, sy, 1, 9, C.K); px(sx + 19, sy, 1, 9, C.K);
  [[3, 4], [4, 3], [4, 5], [5, 2], [5, 6]].forEach(function(p){ px(sx + p[0], sy + p[1], 1, 1, C.F); });
  [[16, 4], [15, 3], [15, 5], [14, 2], [14, 6]].forEach(function(p){ px(sx + p[0], sy + p[1], 1, 1, C.F); });
  px(sx + 8, sy + 2, 4, 5, C.Y); px(sx + 8, sy + 3, 1, 1, C.K); px(sx + 11, sy + 3, 1, 1, C.K); px(sx + 9, sy + 4, 2, 1, C.O); px(sx + 9, sy + 1, 1, 1, C.Y);
  for (var k = 0; k < 2; k++){ var wx = X + 5 + k * (w - 16);
    px(wx, wy + 13, 6, 7, C.win); px(wx + 1, wy + 14, 2, 2, C.win2); px(wx, wy + 13, 6, 1, C.K); px(wx, wy + 19, 6, 1, C.K); px(wx, wy + 13, 1, 7, C.K); px(wx + 5, wy + 13, 1, 7, C.K); px(wx + 3, wy + 14, 1, 5, C.K); px(wx - 1, wy + 20, 8, 1, C.wall2); }
  var dx = X + w / 2 - 5; px(dx, Y + h - 13, 10, 12, C.door); px(dx + 5, Y + h - 12, 1, 11, C.door2); px(dx, Y + h - 13, 10, 1, C.K); px(dx, Y + h - 13, 1, 12, C.K); px(dx + 9, Y + h - 13, 1, 12, C.K); px(dx + 3, Y + h - 7, 1, 1, C.Y); px(dx + 6, Y + h - 7, 1, 1, C.Y);
  [dx - 6, dx + 12].forEach(function(px0){ px(px0, Y + h - 5, 4, 4, C.pot); px(px0, Y + h - 5, 4, 1, C.K); blob(px0 + 2, Y + h - 8, 3, 3, C.bm, C.K); px(px0 + 1, Y + h - 9, 1, 1, C.bl); });
}
function goal(X, Y, t){
  var on = RM || Math.floor(t / 300) % 2;
  px(X + 9, Y + 3, 2, 14, on ? C.W : C.Y); px(X + 3, Y + 9, 14, 2, on ? C.W : C.Y); px(X + 7, Y + 7, 6, 6, C.Y); px(X + 8, Y + 8, 4, 4, C.W);
  if (on){ px(X + 4, Y + 4, 1, 1, C.Y); px(X + 15, Y + 15, 1, 1, C.Y); } else { px(X + 15, Y + 4, 1, 1, C.Y); px(X + 4, Y + 15, 1, 1, C.Y); }
}

/* ---------- levels ---------- */
/* map letters: . path, S start, G goal, m path where Mugi appears, g grass, f flowers, b bush, t tree, p puddle, A academy */
var PATHS = ".SGmp";
var LEVELS = [
  {map: ["tfgbtgfb",
         "gbfggtgf",
         "........",
         ".S.pp..G",
         "....p...",
         "tgfbgftg"], slots: 8, repeat: false,
   hint: [[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2]],
   intro: ["The chick moves one square at a time. Give it a list of steps with the arrows, then press ▶ Run.", "Careful: it can’t swim."],
   win: ["Cheep! Cheep!", "It followed your steps in order, one by one. That’s all a program is: instructions, run from top to bottom."],
   tip: "A program is a list of instructions. The computer runs them in order, top to bottom, exactly as written."},
  {map: ["tbgAAAft",
         "gfgAAAbg",
         "gbfbGmfg",
         "gbb..bgt",
         "fb..bbfg",
         ".S.bgfgb"], slots: 2, repeat: true,
   hint: [[2,5],[2,4],[3,4],[3,3],[4,3],[4,2]],
   intro: ["The Academy is just up the hill! But the chick will only remember two steps at a time...", "Tap ↻ Repeat to run your steps more than once."],
   tip: "A loop runs the lines inside it again and again. range(3) means three times. Loops save you writing the same steps over and over."}
];
var WORD = {U:"up", D:"down", L:"left", R:"right"}, ARROW = {U:"↑", D:"↓", L:"←", R:"→"};

/* ---------- the overlay ---------- */
ICA.intro = function(done){
  sprites();
  var host = document.createElement("div"); host.className = "pintro"; host.setAttribute("role", "dialog"); host.setAttribute("aria-modal", "true"); host.setAttribute("aria-label", "The way to school");
  host.innerHTML =
    '<div class="pi-top"><span class="pi-title">THE WAY TO SCHOOL</span><button class="pi-skip" type="button">Skip ›</button></div>' +
    '<div class="pi-stage"><canvas width="' + W + '" height="' + H + '" aria-hidden="true"></canvas><div class="pi-bubble" hidden></div></div>' +
    '<div class="pi-box" aria-live="polite"><div class="pi-who"></div><img class="pi-face" alt="" hidden><p class="pi-text"></p><button class="pi-next" type="button" aria-label="Next">▼</button></div>' +
    '<div class="pi-code" hidden><div class="pi-prog" aria-label="Your steps"></div>' +
      '<div class="pi-pad"><button data-c="U" aria-label="Up">↑</button><button data-c="L" aria-label="Left">←</button><button data-c="D" aria-label="Down">↓</button><button data-c="R" aria-label="Right">→</button>' +
      '<button data-c="rep" class="pi-rep" aria-label="Repeat">↻ ×1</button><button data-c="del" aria-label="Delete the last step">⌫</button><button data-c="run" class="pi-run">▶ Run</button></div>' +
      '<div class="pi-learn"><div class="pi-lt">YOUR STEPS AS CODE</div><pre class="pi-src" aria-label="Your steps written as Python code"></pre><p class="pi-tip"></p></div></div>';
  document.body.appendChild(host); document.documentElement.style.overflow = "hidden";
  var cv = host.querySelector("canvas"); g = cv.getContext("2d"); g.imageSmoothingEnabled = false;
  var box = host.querySelector(".pi-box"), who = host.querySelector(".pi-who"), face = host.querySelector(".pi-face"), text = host.querySelector(".pi-text"), nextB = host.querySelector(".pi-next");
  var code = host.querySelector(".pi-code"), prog = host.querySelector(".pi-prog"), repB = host.querySelector(".pi-rep"), bub = host.querySelector(".pi-bubble"), src = host.querySelector(".pi-src"), tip = host.querySelector(".pi-tip");
  var FX = window.ArcadeFX; if (FX){ FX.fxVol = function(){ return ICA.vol("fx"); }; FX.musicVol = function(){ return ICA.vol("music"); }; }
  function sfx(k, a){ try { if (FX) FX.sfx(k, a); } catch(e){} }
  function cheep(){ sfx("ok", 5); }
  var scale = 2;
  function fit(){ scale = Math.max(1, Math.floor(Math.min(host.clientWidth - 24, 560) / W)); if (host.clientHeight < 600) scale = Math.min(scale, Math.max(1, Math.floor((host.clientHeight - 300) / H))); cv.style.width = W * scale + "px"; cv.style.height = H * scale + "px"; }
  fit(); window.addEventListener("resize", fit);

  var L = 0, lvl, start, pos, steps = [], rep = 1, running = false, bonks = 0, mode = "talk", pose = "chick", hopT = 0, t0 = performance.now(), ended = false, showHint = false, outro = null, revealed = false;
  function cell(x, y){ var r = lvl.map[y]; return r ? r[x] : undefined; }
  function isPath(x, y){ if (y < 0 || y >= lvl.map.length) return false; x = Math.max(0, Math.min(lvl.map[0].length - 1, x)); return PATHS.indexOf(cell(x, y)) > -1; }   // a road at the edge carries on off the map
  function free(x, y){ var k = cell(x, y); return k === "." || k === "S" || k === "G"; }
  function load(i){
    L = i; lvl = lvlRef = LEVELS[i]; steps = []; rep = 1; bonks = 0; showHint = false;
    lvl.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++){ if (r[x] === "S") start = {x:x, y:y}; if (r[x] === "G") lvl.goal = {x:x, y:y}; } });
    pos = {x:start.x, y:start.y, dx:0, dy:0}; pose = "chick"; repB.hidden = !lvl.repeat; tip.textContent = lvl.tip; drawProg();
  }
  function draw(now){
    var t = now - t0;
    lvl.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++){
      var k = r[x], X = x * T, Y = y * T, s = L * 13;
      if (PATHS.indexOf(k) > -1){ var open = [isPath(x, y - 1), isPath(x + 1, y), isPath(x, y + 1), isPath(x - 1, y)]; pathTile(X, Y, s, open); }
      else if (k === "f") flowers(X, Y, s); else grass(X, Y, s);
    } });
    pond(t);
    // a faint tile grid, so each step is easy to count
    g.globalAlpha = .1; g.fillStyle = C.K; for (var gx = T; gx < W; gx += T) g.fillRect(gx, 0, 1, H); for (var gy = T; gy < H; gy += T) g.fillRect(0, gy, W, 1); g.globalAlpha = 1;
    lvl.map.forEach(function(r, y){ for (var x = 0; x < r.length; x++){ if (r[x] === "b") bush(x * T, y * T); else if (r[x] === "t") tree(x * T, y * T); } });
    if (L === 1) building(3 * T + 2, 1, 3 * T - 4, 2 * T - 3);
    if (lvl.goal && !outro) goal(lvl.goal.x * T, lvl.goal.y * T, t);
    if (showHint && lvl.hint) lvl.hint.forEach(function(p, i){ if (RM || Math.floor(t / 220) % (lvl.hint.length + 3) >= i) { px(p[0] * T + 8, p[1] * T + 8, 4, 4, C.F); px(p[0] * T + 9, p[1] * T + 9, 2, 2, C.Y); } });
    if (outro && outro.mugi){ var mb = RM ? 0 : (Math.floor(t / 420) % 2); shadow(5 * T + 10, 2 * T + 18, 7, 2); g.drawImage(SP.mugi, 5 * T, 2 * T - 12 - mb); }
    var bob = RM ? 0 : (running || mode === "talk" ? Math.round(Math.sin(t / 160)) : 0), hop = hopT > now ? -Math.round(Math.sin((hopT - now) / 300 * Math.PI) * 6) : 0;
    var img = SP[pose] || SP.chick; if (pose === "chick" && running && Math.floor(t / 150) % 2) img = SP.step;
    var cx = Math.round(pos.x * T + pos.dx), cy = Math.round(pos.y * T + pos.dy);
    shadow(cx + 10, cy + 18, 7, 2);
    g.drawImage(img, cx, cy + bob + hop - 3);
    if (!bub.hidden){ bub.style.left = (pos.x * T + pos.dx + 10) * scale + "px"; bub.style.top = (pos.y * T + pos.dy - 4) * scale + "px"; }
  }
  function loop(now){ if (ended) return; draw(now); requestAnimationFrame(loop); }
  requestAnimationFrame(loop);

  /* dialogue: a queue of lines; each tap shows the next one */
  var queue = [], after = null;
  function say(lines, then){ queue = lines.slice(); after = then; code.hidden = true; box.hidden = false; mode = "talk"; nextLine(); }
  function nextLine(){
    var l = queue.shift();
    if (!l){ var a = after; after = null; if (a) a(); return; }
    if (typeof l === "string") l = {t:l};
    who.textContent = l.who === "mugi" ? "MUGI" : l.who === "chick" ? (revealed ? "THE IT CHICK" : "CHICK") : "";
    face.hidden = l.who !== "mugi"; if (l.who === "mugi") face.src = ICA.base + "shared/mascot/pixel/mugi-px-" + (l.mood || "hello") + ".webp";
    if (l.who === "chick"){ cheep(); hopT = performance.now() + 300; }
    if (l.reveal) revealed = true;
    if (l.choice){ text.textContent = l.t; var b = document.createElement("button"); b.className = "pi-choice"; b.type = "button"; b.textContent = l.choice; text.appendChild(document.createElement("br")); text.appendChild(b); b.onclick = function(e){ e.stopPropagation(); sfx("tap"); nextLine(); }; nextB.hidden = true; b.focus(); }
    else { text.textContent = l.t; nextB.hidden = false; }
    if (l.bubble){ bub.hidden = false; bub.textContent = l.bubble; } else bub.hidden = true;
    if (l.pose) pose = l.pose;
  }
  box.addEventListener("click", function(){ if (!nextB.hidden){ sfx("tap"); nextLine(); } });

  /* the program, shown as arrows and as code */
  function lines(){
    var out = [];
    if (lvl.repeat && rep > 1){ out.push({s:"for i in range(" + rep + "):", i:-1}); steps.forEach(function(s, i){ out.push({s:"    chick." + WORD[s] + "()", i:i}); }); }
    else steps.forEach(function(s, i){ out.push({s:"chick." + WORD[s] + "()", i:i}); });
    if (!out.length) out.push({s:"# your steps will appear here", i:-2});
    return out;
  }
  function drawProg(){
    var cells = "";
    for (var i = 0; i < lvl.slots; i++){ var s = steps[i]; cells += '<span class="pi-slot' + (s ? " on" : "") + '" data-i="' + i + '">' + (s ? ARROW[s] : "") + '</span>'; }
    prog.innerHTML = cells + (lvl.repeat ? '<span class="pi-x">×' + rep + '</span>' : "");
    repB.textContent = "↻ ×" + rep;
    src.innerHTML = lines().map(function(l){ return '<span data-i="' + l.i + '"' + (l.i === -2 ? ' class="cm"' : "") + '>' + l.s.replace(/&/g, "&amp;").replace(/</g, "&lt;") + '</span>'; }).join("\n");
  }
  code.addEventListener("click", function(e){
    var b = e.target.closest("button"); if (!b || running) return; var c = b.dataset.c;
    if (WORD[c]){ if (steps.length < lvl.slots){ steps.push(c); sfx("flip"); } else sfx("no"); }
    else if (c === "del"){ steps.pop(); sfx("tap"); }
    else if (c === "rep"){ rep = rep % 4 + 1; sfx("tap"); }
    else if (c === "run"){ if (steps.length) run(); else sfx("no"); return; }
    drawProg();
  });
  function highlight(i, loopLine){
    prog.querySelectorAll(".pi-slot").forEach(function(s){ s.classList.toggle("now", +s.dataset.i === i); });
    src.querySelectorAll("span").forEach(function(s){ var k = +s.dataset.i; s.classList.toggle("now", k === i || (loopLine && k === -1)); });
  }
  function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function slide(dx, dy){
    if (RM){ pos.x += dx; pos.y += dy; return wait(220); }
    return new Promise(function(res){ var a = performance.now(), D = 260; (function f(n){ var k = Math.min(1, (n - a) / D); pos.dx = dx * T * k; pos.dy = dy * T * k; if (k < 1) requestAnimationFrame(f); else { pos.x += dx; pos.y += dy; pos.dx = pos.dy = 0; res(); } })(a); });
  }
  function bump(dx, dy){
    pose = "bonk"; sfx("no"); if (RM) return wait(250);
    return new Promise(function(res){ var a = performance.now(); (function f(n){ var k = (n - a) / 220; pos.dx = dx * 5 * Math.sin(Math.min(1, k) * Math.PI); pos.dy = dy * 5 * Math.sin(Math.min(1, k) * Math.PI); if (k < 1) requestAnimationFrame(f); else { pos.dx = pos.dy = 0; res(); } })(a); });
  }
  function run(){
    running = true; code.classList.add("busy"); bub.hidden = true;
    var list = []; for (var r = 0; r < rep; r++) steps.forEach(function(s, i){ list.push([s, i]); });
    var k = 0;
    (function nextStep(){
      if (k >= list.length){ highlight(-3); return oops("short"); }
      var s = list[k][0], i = list[k][1]; k++; highlight(i, lvl.repeat && rep > 1);
      var d = {U:[0,-1], D:[0,1], L:[-1,0], R:[1,0]}[s];
      if (!free(pos.x + d[0], pos.y + d[1])) return bump(d[0], d[1]).then(function(){ oops("bonk"); });
      sfx("tick"); slide(d[0], d[1]).then(function(){ if (lvl.goal && pos.x === lvl.goal.x && pos.y === lvl.goal.y) return win(); nextStep(); });
    })();
  }
  function oops(kind){
    bonks++; bub.hidden = false; bub.textContent = kind === "short" ? "?" : "BUG!";
    if (bonks >= 2) showHint = true;
    wait(900).then(function(){
      pos = {x:start.x, y:start.y, dx:0, dy:0}; pose = "chick"; running = false; code.classList.remove("busy"); highlight(-3); bub.hidden = true;
      who.textContent = ""; face.hidden = true; nextB.hidden = true;
      text.textContent = kind === "short" ? "The chick stopped before the sparkle. Add more steps and run it again."
        : bonks >= 2 ? "Bonk! The little dots show one way through. Fix your steps and run it again."
        : "Bonk! That’s a bug: the program ran, but a step didn’t do what we meant. Change it and run again.";
      tip.textContent = kind === "short" ? lvl.tip : "Debugging means finding the step that went wrong and fixing it. Every programmer does it, every day.";
    });
  }
  function win(){
    running = false; highlight(-3); pose = "wings"; sfx("clear"); hopT = performance.now() + 300; code.classList.remove("busy");
    wait(700).then(function(){
      if (L === 0) say([{t:lvl.win[0], who:"chick", pose:"happy"}, {t:lvl.win[1]}], function(){ load(1); say(LEVELS[1].intro, play); });
      else ending();
    });
  }
  function play(){ who.textContent = ""; face.hidden = true; nextB.hidden = true; text.textContent = lvl.repeat ? "Two steps, then Repeat. What pattern climbs the hill?" : "Tap the arrows to build the chick’s steps, then ▶ Run."; code.hidden = false; box.hidden = false; mode = "code"; }
  function ending(){
    outro = {mugi:false}; pose = "wings"; hopT = performance.now() + 300;
    wait(700).then(function(){ outro.mugi = true; sfx("flip"); return wait(600); }).then(function(){
      say([{t:"Oh! There you are!", who:"mugi", mood:"oops"},
           {t:"Thank you for walking it all the way here. Though... I should probably tell you something.", who:"mugi", mood:"think"},
           {t:"That isn’t just any chick. That’s THE IT Chick: our mascot, and the head of this whole Academy.", who:"mugi", mood:"tip", reveal:true},
           {t:"Cheep.", who:"chick", pose:"happy"},
           {t:"It knows every path in this town. It doesn’t get lost. ...It was testing you, wasn’t it?", who:"mugi", mood:"oops"},
           {t:"Wait. Are you the new student starting today?", who:"mugi", mood:"think", choice:"Yes, that’s me!"},
           {t:"Then you’ve already passed your first test! Welcome to IT CHICK Academy. Come in, come in!", who:"mugi", mood:"yay", pose:"wings"}], close);
    });
  }
  function close(){
    if (ended) return; ended = true; window.removeEventListener("resize", fit);
    function finish(){ if (host.parentNode) host.parentNode.removeChild(host); document.documentElement.style.overflow = ""; if (done) done(); }
    if (RM) return finish();
    // squares grow across the screen from the top left (a classic 8-bit transition), a white flash, then the welcome fades in
    var wc = document.createElement("canvas"), dpr = Math.min(2, window.devicePixelRatio || 1), Wd = innerWidth, Hd = innerHeight, CELL = 28;
    wc.className = "pi-wipe"; wc.width = Wd * dpr; wc.height = Hd * dpr; document.body.appendChild(wc);
    var x = wc.getContext("2d"); x.scale(dpr, dpr); x.fillStyle = "#fff6e6";
    var cols = Math.ceil(Wd / CELL), rows = Math.ceil(Hd / CELL), a = performance.now(), D = 520;
    (function f(n){
      var k = Math.min(1, (n - a) / D); x.clearRect(0, 0, Wd, Hd);
      for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++){ var d = (i / cols + j / rows) / 2, s = Math.max(0, Math.min(1, (k * 1.7 - d) * 2.2)) * CELL; if (s > 0) x.fillRect(i * CELL + (CELL - s) / 2, j * CELL + (CELL - s) / 2, s + .5, s + .5); }
      if (k < 1) return requestAnimationFrame(f);
      sfx("flip"); finish();
      wc.classList.add("flash"); setTimeout(function(){ wc.classList.add("gone"); }, 90); setTimeout(function(){ if (wc.parentNode) wc.parentNode.removeChild(wc); }, 700);
    })(a);
  }
  host.querySelector(".pi-skip").onclick = close;
  document.addEventListener("keydown", function key(e){
    if (ended){ document.removeEventListener("keydown", key); return; }
    if (mode === "code" && !running){ var m = {ArrowUp:"U", ArrowDown:"D", ArrowLeft:"L", ArrowRight:"R", Backspace:"del", Enter:"run"}[e.key]; if (m){ e.preventDefault(); var b = code.querySelector('[data-c="' + m + '"]'); if (b) b.click(); } }
    else if (mode === "talk" && (e.key === "Enter" || e.key === " ") && !nextB.hidden){ e.preventDefault(); sfx("tap"); nextLine(); }
  });

  load(0);
  say([{t:"It’s your first day. You’re on your way to IT CHICK Academy..."},
       {t:"Cheep?", who:"chick", bubble:"?"},
       {t:"A small chick in round glasses is standing in the street, holding a tiny book. It keeps looking up the hill, toward the Academy."},
       {t:"Is it lost? It seems to want you to lead the way."}].concat(LEVELS[0].intro), play);
};
})();
