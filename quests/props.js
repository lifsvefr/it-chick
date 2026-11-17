/* Kamome House · drawn props for the "Tap-to-read cards" blocks (notice, tin, poster, map, phone alert, ledger, ward signs, envelope).
   Each line of Japanese stays real text: a button drawn as part of the object. Tapping it shows its reading and note in the box below.
   A block's look comes from story_app_extras.json plateLooks (title -> look); blocks without one keep the plain cards. */
(function(root){
"use strict";
var P = {};
var SW = '<svg class="swallow" viewBox="0 0 60 30" aria-hidden="true"><path d="M30 14c-6-8-16-12-29-11 9 3 15 7 19 13-6 1-11 4-14 9 7-3 13-4 19-3l5 6 5-6c6-1 12 0 19 3-3-5-8-8-14-9 4-6 10-10 19-13-13-1-23 3-29 11z" fill="currentColor"/></svg>';
function flower(x, y){ var h = '<g transform="translate(' + x + ' ' + y + ')">'; for (var a = 0; a < 5; a++){ var r = a * 72 * Math.PI / 180; h += '<circle cx="' + (4.2 * Math.sin(r)).toFixed(1) + '" cy="' + (-4.2 * Math.cos(r)).toFixed(1) + '" r="3.2" fill="#f2d27a"/>'; } return h + '<circle r="2.4" fill="#c8453a"/></g>'; }
var LID = '<svg viewBox="0 0 200 150" aria-hidden="true"><defs><clipPath id="lidov"><ellipse cx="100" cy="75" rx="58" ry="41"/></clipPath><linearGradient id="lidsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7e3b8"/><stop offset="1" stop-color="#fbf3df"/></linearGradient></defs>' +
  '<rect x="2" y="2" width="196" height="146" rx="18" fill="#1f3a68"/><rect x="2" y="2" width="196" height="146" rx="18" fill="none" stroke="#14284a" stroke-width="3"/>' +
  '<rect x="9" y="9" width="182" height="132" rx="13" fill="none" stroke="#d9b65a" stroke-width="2"/><rect x="14" y="14" width="172" height="122" rx="10" fill="none" stroke="#d9b65a" stroke-width="1" stroke-dasharray="1.5 3.5" stroke-linecap="round"/>' +
  flower(28, 28) + flower(172, 28) + flower(28, 122) + flower(172, 122) +
  (function(){ var d = ""; for (var i = 0; i < 28; i++){ var t = i / 28 * 2 * Math.PI; d += '<circle cx="' + (100 + 67 * Math.cos(t)).toFixed(1) + '" cy="' + (75 + 49 * Math.sin(t)).toFixed(1) + '" r="1.6" fill="#d9b65a"/>'; } return d; })() +
  '<ellipse cx="100" cy="75" rx="62" ry="45" fill="#d9b65a"/><g clip-path="url(#lidov)"><rect x="30" y="30" width="140" height="90" fill="url(#lidsky)"/><circle cx="72" cy="58" r="9" fill="#f0a24a" opacity=".85"/>' +
  '<path d="M30 84c12-4 22-4 34 0s22 4 34 0 22-4 34 0 22 4 38 0V120H30z" fill="#4d7fab"/><path d="M30 94c14-3 26-3 38 0s24 3 36 0 26-3 38 0 20 3 28 1V120H30z" fill="#2f5f8f"/>' +
  '<path d="M112 92l4-10h22l6 10z" fill="#6b5a48"/><path d="M121 82l2-28h7l2 28z" fill="#fbfaf5" stroke="#3b3b3b" stroke-width=".8"/><path d="M122.3 72h9.4l.5 6h-10.4zM123 61h8l.4 5h-8.8z" fill="#c8453a"/><rect x="121.5" y="48" width="10" height="6" fill="#3b3b3b"/><rect x="123" y="49.5" width="7" height="3.5" fill="#ffe59a"/><path d="M120 48l6.5-5 6.5 5z" fill="#c8453a"/>' +
  '<path d="M84 50q3-3 6 0q3-3 6 0M146 60q2.5-2.5 5 0q2.5-2.5 5 0M95 64q2-2 4 0q2-2 4 0" fill="none" stroke="#2b2b2b" stroke-width="1.3" stroke-linecap="round"/></g>' +
  '<ellipse cx="100" cy="75" rx="58" ry="41" fill="none" stroke="#b8923a" stroke-width="1.5"/></svg>';
var SLIP = '<svg viewBox="0 0 64 56" aria-hidden="true"><g fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round"><path d="M8 50h48" stroke-width="2.5"/><path d="M29 33 19 19" stroke-width="6"/><path d="M29 33l12 4 11-6M29 33l-3 9 5 7" stroke-width="5"/><path d="M20 20l-8 7M20 20l7-7" stroke-width="4"/><path d="M50 24l4-4M54 27l5-1M45 45h9M40 48h5" stroke-width="1.6"/></g><circle cx="13" cy="12" r="5" fill="#222"/></svg>';
var WARN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20z" fill="currentColor"/><path d="M12 9v6M12 17.5v.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>';

P.html = function(p, i, md, esc){
  var B = p.items.map(function(it, k){
    var t = md(it.ja);
    if (p.look === "ledger" && /（[^）]*）\s*$/.test(it.ja)) t = md(it.ja.replace(/\s*（[^）]*）\s*$/, "")) + ' <span class="pencil">' + md(it.ja.match(/（[^）]*）\s*$/)[0]) + '</span>';
    return '<button type="button" class="pl pl' + k + '" data-k="' + k + '" lang="ja" aria-expanded="false">' + t + '</button>';
  });
  var L = p.look, h = "";
  if (L === "notice") h =
    '<div class="cork"><div class="paper notice"><i class="pin a"></i><i class="pin b"></i>' +
    '<svg class="beach" viewBox="0 0 200 40" aria-hidden="true"><path d="M0 26c20-8 40-8 60 0s40 8 60 0 40-8 60 0 20 4 20 4V40H0z" fill="#9fd0d6"/><path d="M0 33c25-5 50-5 75 0s50 5 75 0 50-4 50-4V40H0z" fill="#ecd9a8"/><circle cx="170" cy="11" r="7" fill="#f0b64a"/></svg>' +
    B[0] + '<div class="when">' + B[1] + B[2] + '</div>' + B[3] + B[4] + '</div></div>';
  else if (L === "tin") h =
    '<div class="tinscene"><div class="lids"><figure class="lidtop">' + LID + '<figcaption class="cap">the lid</figcaption></figure>' +
    '<figure class="tinlid"><div class="tinin"><span class="cap">inside the lid</span>' + B[0] + '</div></figure></div>' +
    '<div class="env air front"><span class="avion">BY AIR MAIL<br>PAR AVION</span><span class="stamp au"><i>AUSTRALIA</i></span><div class="addr"><span class="en-addr">126 Kawaminami<br>Shioura, JAPAN</span>' + B[1] + '</div></div>' +
    '<div class="env air back"><span class="cap">back of the top envelope</span><i class="flap"></i>' + B[2] + '</div></div>';
  else if (L === "poster") h =
    '<div class="poster"><svg class="lanterns" viewBox="0 0 300 46" preserveAspectRatio="none" aria-hidden="true"><path d="M0 6Q75 26 150 8T300 6" fill="none" stroke="#2b2b2b" stroke-width="1.5"/>' +
    [30, 80, 130, 180, 230, 275].map(function(x, j){ var y = 13 + (j % 2 ? 4 : 0); return '<g transform="translate(' + x + ' ' + y + ')"><rect x="-2" y="-2" width="4" height="4" fill="#2b2b2b"/><ellipse cx="0" cy="13" rx="9" ry="12" fill="#e2483a"/><path d="M-8 9h16M-8 17h16" stroke="#b5302a" stroke-width="1"/><rect x="-4" y="24" width="8" height="3" fill="#2b2b2b"/></g>'; }).join("") + '</svg>' +
    '<div class="birds">' + SW + SW + SW + '</div>' + B[0] + '<div class="pmeta">' + B[1] + B[2] + '</div>' + B[3] + '<div class="sticker">' + B[4] + '</div></div>';
  else if (L === "map") h =
    '<div class="hmap"><div class="hbar">' + B[0] + '</div><div class="hbody"><svg viewBox="0 0 320 210" preserveAspectRatio="none" aria-hidden="true">' +
    '<rect width="320" height="210" fill="#eef1e4"/><path d="M0 0h320v58C250 70 200 46 150 52S40 70 0 60z" fill="#d6e2c3"/><path d="M200 0c10 20 5 30 28 40s50 6 92 4V0z" fill="#c4d6ad"/>' +
    '<path d="M-5 150C60 135 90 175 160 160s110-30 170-14" fill="none" stroke="#8cc3e0" stroke-width="16"/>' +
    '<path d="M40 85h250M30 120h270M70 60v140M130 60v140M190 55v150M250 50v150" stroke="#fff" stroke-width="5"/>' +
    '<path d="M20 100c40-12 120-10 190-4s80 20 100 30v70H10z" fill="#e0524a" opacity=".55"/><path d="M50 128c40-6 90-4 150 2s60 14 80 22v45H40z" fill="#c62f2f" opacity=".45"/>' +
    '<path d="M0 205C70 196 160 210 320 200" stroke="#5d7f95" stroke-width="5" fill="none"/>' +
    '<g transform="translate(232 26)"><rect x="-13" y="-8" width="26" height="18" fill="#fff" stroke="#2f7a3f" stroke-width="2"/><path d="M-15-8 0-19 15-8z" fill="#2f7a3f"/><path d="M-4 10V2h8v8" fill="#2f7a3f"/></g></svg>' +
    '<div class="hshelter">' + B[2] + '</div><div class="hlegend"><i class="sw"></i>' + B[1] + '</div></div><div class="hfoot">' + B[3] + '</div></div>';
  else if (L === "alert") h =
    '<div class="phone' + (/レベル[4４5５]/.test(p.items[0].ja) ? ' lv4' : '') + '"><div class="pscreen"><div class="pstat"><span></span><span class="bars"><i></i><i></i><i></i><i></i></span></div>' +
    '<div class="palert"><div class="phead">' + WARN + '</div>' + B.join("") + '</div></div></div>';
  else if (L === "ledger") h =
    '<div class="ledger"><div class="lhead">' + B[0] + '</div><div class="lsub">' + B[1] + '</div><div class="lrows">' + B.slice(2).map(function(b){ return '<div class="lrow">' + b + '</div>'; }).join("") + '</div><i class="seal"></i></div>';
  else if (L === "ward") h =
    '<div class="ward"><div class="ceil"></div><div class="hang"><i class="rod"></i><i class="rod"></i><div class="wsign"><span class="wband"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7" cy="11" r="2" fill="#fff"/></svg></span><span class="wtxt">' + B[0] + '<span class="wen">Orthopedics Ward</span></span></div></div>' +
    '<div class="wall"><div class="plaque"><i class="scr"></i><i class="scr"></i><i class="scr"></i><i class="scr"></i><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg><span>' + B[1] + '<span class="wen">Visiting hours</span></span></div>' +
    '<div class="wbed"><div class="bedcard">' + SLIP + B[2] + '</div><div class="clip"><i class="clipt"></i><span class="cap">his chart</span>' + B[3] + '</div></div></div></div>';
  else if (L === "envelope") h =
    '<div class="env air big"><span class="avion">PAR AVION</span><span class="stamp au"><i>AUSTRALIA</i></span><span class="pmark">' + B[3] + '</span>' +
    '<div class="addr"><span class="en-addr">Miss Fumiko Murai<br>126 Kawaminami<br>Shioura, JAPAN</span>' + B[0] + '</div>' +
    '<div class="pstamp purple">' + B[1] + '<span class="inconnu">INCONNU</span></div><div class="pstamp hand"><span class="fing" aria-hidden="true">☞</span>' + B[2] + '</div></div>';
  return '<div class="propwrap" data-pp="' + i + '"><h2>' + esc(p.title) + '</h2><p class="small muted">' + esc(p.hint) + '</p><div class="prop prop-' + L + '">' + h + '</div>' +
    '<div class="propinfo card small" aria-live="polite" data-nosay>Tap a line to check it. <span class="muted">0 of ' + p.items.length + ' read</span></div></div>';
};
P.bind = function(app, parts, md, esc){
  Array.prototype.forEach.call(app.querySelectorAll(".propwrap"), function(w){
    var p = parts[+w.getAttribute("data-pp")], info = w.querySelector(".propinfo"), seen = {};
    Array.prototype.forEach.call(w.querySelectorAll(".pl"), function(b){
      b.addEventListener("click", function(){
        var k = +b.getAttribute("data-k"), it = p.items[k]; seen[k] = 1;
        Array.prototype.forEach.call(w.querySelectorAll(".pl"), function(x){ var on = x === b; x.classList.toggle("sel", on); x.setAttribute("aria-expanded", on); });
        b.classList.add("seen");
        var n = Object.keys(seen).length;
        info.innerHTML = '<span lang="ja" class="pij">' + md(it.ja) + '</span>' + (it.ro ? '<b class="pir">' + esc(it.ro) + '</b>' : '') + '<span>' + md(it.who) + '</span><span class="muted">' + n + ' of ' + p.items.length + ' read</span>';
      });
    });
  });
};
root.StoryProps = P;
})(this);
