/* Kamome House · drawn props for the "Tap-to-read cards" blocks (notice, tin, poster, map, phone alert, ledger, ward signs, envelope).
   Each line of Japanese stays real text: a button drawn as part of the object. Tapping it shows its reading and note in the box below.
   A block's look comes from story_app_extras.json plateLooks (title -> look); blocks without one keep the plain cards. */
(function(root){
"use strict";
var P = {};
var SW = '<svg class="swallow" viewBox="0 0 60 30" aria-hidden="true"><path d="M30 14c-6-8-16-12-29-11 9 3 15 7 19 13-6 1-11 4-14 9 7-3 13-4 19-3l5 6 5-6c6-1 12 0 19 3-3-5-8-8-14-9 4-6 10-10 19-13-13-1-23 3-29 11z" fill="currentColor"/></svg>';
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
    '<div class="tinscene"><div class="tinlid"><div class="tinin"><span class="cap">inside the lid</span>' + B[0] + '</div></div>' +
    '<div class="bundle"><div class="env air"><span class="avion">BY AIR MAIL<br>PAR AVION</span><span class="stamp au"><i>AUSTRALIA</i></span><span class="en-addr">126 Kawaminami<br>Shioura, JAPAN</span>' + B[1] + '<i class="string"></i></div>' +
    '<div class="env air backside"><span class="cap">back of the top envelope</span><i class="flap"></i>' + B[2] + '</div></div></div>';
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
    '<div class="ward"><div class="wsign">' + B[0] + '</div><div class="wboard"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>' + B[1] + '</div>' +
    '<div class="wbed"><div class="bedcard"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="22" cy="7" r="4" fill="currentColor"/><path d="M20 12 14 24l-8 2M20 12l8 9 6-3M17 18l5 9-4 10M22 27l9 4" stroke="currentColor" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 38h36" stroke="currentColor" stroke-width="2"/></svg>' + B[2] + '</div><div class="clip"><i class="clipt"></i>' + B[3] + '</div></div></div>';
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
