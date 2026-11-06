/* IT CHICK Academy · Citation Lab checker.
   A reference is written as plain text with *asterisks* around the parts in italics.
   Each challenge field lists the expected parts ("segs") in order: {label, t, alt?, re?, example?, opt?, join?, ci?, why,
   capMsg?, itMsg?, notItMsg?, bad?:[{re, f?, msg}]}.
   The checker finds the longest run of parts written correctly and in order, then looks at what's between them:
   a missing part, a part that's written differently (with the closest words compared), a part in the wrong place,
   a repeat, or extra text. So it can say exactly which part is off, and how. */
(function(root){
"use strict";
var CL = {};

/* ---------- text with italics ---------- */
// parse "*Journal*, *12*(3)" -> {p:"Journal, 12(3)", it:[true…]}
function parse(s){
  var p = "", it = [], on = false;
  for (var i = 0; i < s.length; i++){
    var c = s[i];
    if (c === "*"){ on = !on; continue; }
    p += c; it.push(on);
  }
  return {p:p, it:it, open:on};
}
function norm(s){
  return String(s == null ? "" : s)
    .replace(/[“”„‟″«»]/g, "\"")
    .replace(/[‘’‚‛′]/g, "'")
    .replace(/[     ]/g, " ")
    .replace(/…/g, "...")
    .replace(/(^|[\s(\["'])_(?=\S)/g, "$1*")   // _italics_ also works (but a_b inside a link stays as it is)
    .replace(/(\S)_(?=$|[\s,.;:()[\]"'])/g, "$1*")
    .replace(/\*(\s*)\*/g, "$1")       // empty italics (keep the space: "*Review,* *12*")
    .replace(/[ \t]+/g, " ")
    .replace(/\s*\n\s*/g, " ")
    .trim();
}
CL.norm = norm;
// page ranges: a hyphen or em dash between numbers counts, with a tip (not inside links)
function dashes(s, tips){
  return s.split(" ").map(function(w){
    if (/^(https?:|www\.)|\//.test(w.replace(/^\*/, ""))) return w;
    return w.replace(/(\d)\s*[-‐‑‒—−](\s*)(\d)/g, function(m, a, sp, b){
      tips.dash = true; return a + "–" + b;
    });
  }).join(" ");
}
var LETTER = /[\p{L}\p{N}]/u;

/* ---------- matching one part at a position ---------- */
function isL(c){ return !!c && LETTER.test(c); }
function variants(seg){
  if (!seg._v) seg._v = [seg.t].concat(seg.alt || []).filter(function(x){ return x != null; }).map(function(x){ return parse(norm(x)); }).sort(function(a, b){ return b.p.length - a.p.length; });
  return seg._v;
}
function expText(seg){ return seg.t != null ? parse(norm(seg.t)).p : (seg.example || ""); }
function startsAt(P, pos, exp, ci){
  var a = P.p.substr(pos, exp.p.length);
  return ci ? a.toLowerCase() === exp.p.toLowerCase() : a === exp.p;
}
function italicDiff(P, pos, exp){
  // compare italics only on letters and digits; punctuation and spaces may go either way
  var want = [], wrong = [];
  for (var i = 0; i < exp.p.length; i++){
    if (!LETTER.test(exp.p[i])) continue;
    if (!!P.it[pos + i] !== !!exp.it[i]) (exp.it[i] ? want : wrong).push(i);
  }
  return {want:want.length, wrong:wrong.length};
}
function reAt(P, pos, seg, flags){
  var r = new RegExp("(?:" + seg.re + ")", "y" + flags); r.lastIndex = pos;
  var m = r.exec(P.p); return m ? m[0].length : -1;
}
function tryAt(P, pos, seg){
  if (seg.re){
    // a part given as a pattern is never in italics
    var n = reAt(P, pos, seg, ""), kind = "ok";
    if (n < 0){ n = reAt(P, pos, seg, "i"); kind = seg.ci ? "ok" : "case"; }
    if (n <= 0) return null;
    var wrong = 0;
    for (var q = pos; q < pos + n; q++) if (P.it[q] && isL(P.p[q])) wrong++;
    if (wrong && kind === "ok") return {end:pos + n, kind:"italic", it:{want:0, wrong:wrong}};
    return {end:pos + n, kind:kind};
  }
  var vs = variants(seg), best = null;
  for (var k = 0; k < vs.length; k++){
    var e = vs[k];
    if (startsAt(P, pos, e, false)){
      var d = italicDiff(P, pos, e);
      var r = {end:pos + e.p.length, kind:(d.want || d.wrong) ? "italic" : "ok", it:d, exp:e};
      if (r.kind === "ok") return r;
      best = best || r;
    }
  }
  if (best) return best;
  for (k = 0; k < vs.length; k++){
    if (startsAt(P, pos, vs[k], true)) return {end:pos + vs[k].p.length, kind:seg.ci ? "ok" : "case", exp:vs[k]};
  }
  return null;
}
// a part may start at the beginning, after a space or closing punctuation (or straight after the part before, for join:"")
function startOk(P, i, seg){
  if (i === 0) return true;
  var a = P.p[i - 1], b = P.p[i];
  if (seg.join === "") return !(isL(a) && isL(b));
  if (a === " ") return true;
  if (a === ".") return /[A-Z(\["']/.test(b);
  // not inside a word, a link or a number ("quill.example", "10.5555/…", "45–67")
  return !(isL(a) && isL(b)) && !/[\/\-–—@_=?#%+~]/.test(a);
}
// …and must end at the end of a word; links must end at a space or the end (perhaps with a full stop)
function endOk(P, e, matched){
  var b = P.p[e];
  if (b === undefined || b === " ") return true;
  if (/\//.test(matched)) return /^[.,;]?( |$)/.test(P.p.slice(e, e + 2));
  return !(isL(P.p[e - 1]) && isL(b));
}
function cands(P, seg){
  var out = [];
  for (var i = 0; i < P.p.length; i++){
    if (P.p[i] === " " || !startOk(P, i, seg)) continue;
    var r = tryAt(P, i, seg);
    if (!r || r.end <= i || !endOk(P, r.end, P.p.slice(i, r.end))) continue;
    // a part found just inside brackets that it shouldn't have, like "(2nd ed.)", is left for the messages to explain
    if (i > 0 && /[(\[]/.test(P.p[i - 1]) && !/^[(\[]/.test(P.p.slice(i, r.end)) && !/[)\]]/.test(P.p.slice(i, r.end))) continue;
    out.push({s:i, e:r.end, r:r});
  }
  return out;
}
var MARKS = {".":"a full stop", ",":"a comma", ":":"a colon", ";":"a semicolon", "\"":"a quotation mark", "'":"a quotation mark", "(":"a bracket", ")":"a bracket"};
function show(s){ s = s.trim(); return MARKS[s] || "“" + curly(s) + "”"; }
function lab(seg){
  var l = seg.label.replace(/\s*\(.*\)\s*$/, "");
  return "the " + (/^[A-Z]{2,}/.test(l) ? l : l.charAt(0).toLowerCase() + l.slice(1));
}
function letters(s){ var n = 0; for (var i = 0; i < s.length; i++) if (isL(s[i])) n++; return n; }

/* ---------- how close is a piece of text to what's expected? ---------- */
function bigrams(s){ s = s.toLowerCase(); var m = {}, n = 0; for (var i = 0; i < s.length - 1; i++){ var g = s.substr(i, 2); m[g] = (m[g] || 0) + 1; n++; } return {m:m, n:n}; }
function dice(a, b){
  if (a.length < 2 || b.length < 2) return a.toLowerCase() === b.toLowerCase() ? 1 : 0;
  var A = bigrams(a), B = bigrams(b), both = 0;
  for (var g in A.m) if (B.m[g]) both += Math.min(A.m[g], B.m[g]);
  return 2 * both / (A.n + B.n);
}
// share the words of a stretch of text between the parts that should be there, as closely as possible
function split(text, own){
  var toks = text.split(" ").filter(Boolean), k = own.length, n = toks.length, INF = 1e9;
  if (k === 1) return [toks.join(" ")];
  var dp = [], from = [];
  for (var s = 0; s <= k; s++){ dp.push([]); from.push([]); for (var t = 0; t <= n; t++){ dp[s].push(INF); from[s].push(0); } }
  // words that look like none of the parts can be left over (they're reported as unexpected text)
  var SKIP = 0.35;
  dp[0][0] = 0;
  for (t = 1; t <= n; t++){ dp[0][t] = t * SKIP; from[0][t] = -1; }
  for (s = 1; s <= k; s++){
    var exp = expText(own[s - 1]);
    for (t = 0; t <= n; t++){
      if (t > 0 && dp[s][t - 1] + SKIP < dp[s][t]){ dp[s][t] = dp[s][t - 1] + SKIP; from[s][t] = -1; }
      for (var u = 0; u <= t; u++){
        if (dp[s - 1][u] >= INF) continue;
        var piece = toks.slice(u, t).join(" "), d = piece ? dice(piece, exp) : 0;
        var c = dp[s - 1][u] + (piece ? (d < 0.3 ? 1.01 + SKIP * (t - u) : 1 - d) : (own[s - 1].opt ? 0.3 : 1));
        if (c < dp[s][t]){ dp[s][t] = c; from[s][t] = u; }
      }
    }
  }
  var out = [], left = [], tt = n;
  for (s = k; s >= 0 && tt > 0; ){
    var uu = from[s][tt];
    if (uu === -1){ left.unshift({w:toks[tt - 1], s:s}); tt--; continue; }
    if (s === 0) break;
    out.unshift(toks.slice(uu, tt).join(" ")); tt = uu; s--;
  }
  while (out.length < k) out.unshift("");
  // leftover words, grouped by the part they come just before (k: after the last part)
  out.left = [];
  left.forEach(function(x){ var g = out.left[out.left.length - 1]; if (g && g.s === x.s) g.text += " " + x.w; else out.left.push({s:x.s, text:x.w}); });
  return out;
}
// one small, clear difference between what's written and what's expected, if there is just one
function diffNote(have, want){
  var a = have.split(" ").filter(Boolean), b = want.split(" ").filter(Boolean);
  if (dice(have, want) < 0.5) return "";
  var L = [];
  for (var i = 0; i <= a.length; i++){ L.push([]); for (var j = 0; j <= b.length; j++) L[i].push(0); }
  for (i = a.length - 1; i >= 0; i--) for (j = b.length - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  var del = [], ins = [], before = null; i = 0; j = 0;
  while (i < a.length || j < b.length){
    if (i < a.length && j < b.length && a[i] === b[j]){ i++; j++; continue; }
    if (j < b.length && (i >= a.length || L[i][j + 1] >= L[i + 1][j])){ if (!ins.length) before = a[i] || null; ins.push(b[j]); j++; }
    else { del.push(a[i]); i++; }
  }
  if (del.length === 1 && ins.length === 1) return "Look at " + show(del[0]) + ": it should be " + show(ins[0]) + ".";
  if (del.length === 0 && ins.length === 1) return show(ins[0]) + " is missing" + (before ? " (before " + show(before) + ")" : " at the end") + ".";
  if (del.length === 1 && ins.length === 0) return "Leave out " + show(del[0]) + ".";
  return "";
}

/* ---------- checking one field ---------- */
CL.checkField = function(field, text){
  var tips = {}, raw = norm(text), segs = field.segs, n = segs.length;
  if (!raw) return {ok:false, empty:true, parts:segs.map(function(s){ return {label:s.label, ok:false, msg:"Nothing written yet."}; }), tips:[], extra:""};
  var P = parse(dashes(raw, tips)), L = P.p.length;
  if (P.open) tips.open = true;
  var C = segs.map(function(seg){ return cands(P, seg); });
  function junk(a, b){ return P.p.slice(a, b).replace(/ /g, "").length; }

  // 1. the longest chain of parts found in the right order (fewest stray characters breaks ties)
  var nodes = [];
  C.forEach(function(cs, k){ cs.forEach(function(c){ nodes.push({k:k, c:c}); }); });
  nodes.forEach(function(nd, x){
    var v = nd.c.r.kind === "ok" ? 10 : 9;
    nd.best = v - junk(0, nd.c.s) * 0.01; nd.prev = -1;
    for (var y = 0; y < x; y++){
      var m = nodes[y];
      if (m.k >= nd.k || m.c.e > nd.c.s) continue;
      var sc = m.best + v - junk(m.c.e, nd.c.s) * 0.01;
      if (sc > nd.best + 1e-9){ nd.best = sc; nd.prev = y; }
    }
  });
  var top = -junk(0, L) * 0.01, last = -1;
  nodes.forEach(function(nd, x){ var sc = nd.best - junk(nd.c.e, L) * 0.01; if (sc > top + 1e-9){ top = sc; last = x; } });
  var chain = [];
  for (var x = last; x >= 0; x = nodes[x].prev) chain.unshift(nodes[x]);
  var at = {}; chain.forEach(function(nd){ at[nd.k] = nd.c; });

  // 2. the gaps between the parts found, and which missing parts belong in each
  var gaps = [], bounds = [{k:-1, e:0}].concat(chain.map(function(nd){ return {k:nd.k, s:nd.c.s, e:nd.c.e}; }), [{k:n, s:L}]);
  for (var g = 0; g < bounds.length - 1; g++){
    var A = bounds[g], B = bounds[g + 1], own = [];
    for (var k = A.k + 1; k < B.k; k++) own.push(k);
    gaps.push({gs:A.e, ge:B.s, own:own, A:A.k, B:B.k < n ? B.k : null});
  }
  // parts written somewhere else (in the wrong place), or written twice
  var moved = {};
  gaps.forEach(function(gp){
    var occ = [];
    C.forEach(function(cs, j){
      if (gp.own.indexOf(j) >= 0) return;
      if (gp.own.length && (j in at)) return;   // where parts are missing, a repeat is more likely the missing part written wrongly
      cs.forEach(function(c){ if (c.s >= gp.gs && c.e <= gp.ge && letters(P.p.slice(c.s, c.e)) >= 4) occ.push({j:j, c:c}); });
    });
    occ.sort(function(p, q){ return (q.c.e - q.c.s) - (p.c.e - p.c.s) || p.c.s - q.c.s; });
    gp.occ = [];
    occ.forEach(function(o){
      if (gp.occ.some(function(z){ return o.c.s < z.c.e && z.c.s < o.c.e; })) return;
      if (gp.occ.some(function(z){ return z.j === o.j; })) return;
      gp.occ.push(o);
      if (!(o.j in at) && !moved[o.j]) moved[o.j] = {gap:gp, c:o.c};
    });
    gp.occ.sort(function(p, q){ return p.c.s - q.c.s; });
    var rest = "", p0 = gp.gs;
    gp.occ.forEach(function(o){ rest += P.p.slice(p0, o.c.s) + " "; p0 = o.c.e; });
    gp.rest = (rest + P.p.slice(p0, gp.ge)).replace(/ +/g, " ").trim();
    gp.text = P.p.slice(gp.gs, gp.ge).trim();
  });

  // 3. a message for every part
  var parts = segs.map(function(seg){ return {label:seg.label, ok:true, msg:""}; }), extra = "", extraMsg = "";
  chain.forEach(function(nd, ci){
    var seg = segs[nd.k], r = nd.c.r, part = parts[nd.k];
    if (r.kind === "italic"){ part.ok = false; part.msg = r.it.want ? (seg.itMsg || "This part should be in italics. Put *asterisks* around it, or select it and tap I.") : (seg.notItMsg || "This part shouldn’t be in italics."); }
    else if (r.kind === "case"){ part.ok = false; part.msg = (seg.capMsg || "Check the capital letters here.") + " Expected " + show(seg.t != null ? expText(seg) : P.p.slice(nd.c.s, nd.c.e)) + "."; }
    var prevEnd = ci ? chain[ci - 1].c.e : 0, gapRaw = P.p.slice(prevEnd, nd.c.s);
    if (nd.c.s > 0 && gapRaw === "" && seg.join !== "" && part.ok){ part.ok = false; part.msg = "Put a space between this part and the one before it."; }
    if (seg.join === "" && gapRaw && !gapRaw.trim() && ci && chain[ci - 1].k === nd.k - 1 && part.ok){ part.ok = false; part.msg = seg.joinMsg || "Take out the space before this part: it goes straight after " + lab(segs[nd.k - 1]) + "."; }
  });
  function wrongPlace(j){
    var mv = moved[j], seg = segs[j], prev = j > 0 ? segs[j - 1] : null;
    var msg = "This is in the wrong place: it should come " + (prev ? "straight after " + lab(prev) : "first") + ". ";
    msg += mv.gap.B != null ? "You have it just before " + lab(segs[mv.gap.B]) + "." : "You have it at the end.";
    if (mv.c.r.kind === "case") msg += " Also check its capital letters: " + show(expText(seg)) + ".";
    if (mv.c.r.kind === "italic") msg += mv.c.r.it.want ? " Also, it should be in italics." : " Also, it shouldn’t be in italics.";
    return msg;
  }
  gaps.forEach(function(gp){
    var dup = gp.occ.filter(function(o){ return o.j in at; });
    var dupMsg = dup.length ? "It repeats " + dup.map(function(o){ return lab(segs[o.j]); }).join(" and ") + "." : "";
    var movedHere = gp.occ.filter(function(o){ return !(o.j in at) && moved[o.j] && moved[o.j].gap === gp; });
    if (gp.own.length){
      var pieces = gp.rest ? split(gp.rest, gp.own.map(function(k){ return segs[k]; })) : gp.own.map(function(){ return ""; });
      var leftBefore = {};
      (pieces.left || []).forEach(function(lf){
        // text next to a part that has nothing is that part, written wrongly
        var opts = gp.own.map(function(k, i){ return i; }).filter(function(i){ return !pieces[i]; }).sort(function(i, j){ return Math.abs(i - lf.s + 0.4) - Math.abs(j - lf.s + 0.4); });
        var q = opts.filter(function(i){ return badFor(segs[gp.own[i]], lf.text); })[0];
        if (q == null) q = opts.filter(function(i){ return i === lf.s || i === lf.s - 1; }).sort(function(i, j){ return dice(lf.text, expText(segs[gp.own[j]])) - dice(lf.text, expText(segs[gp.own[i]])); })[0];
        if (q == null) q = -1;
        if (q >= 0){ pieces[q] = lf.text; return; }
        var nk = lf.s < gp.own.length ? gp.own[lf.s] : gp.B;
        if (nk == null){ extra = lf.text; extraMsg = badFor({bad:field.tail}, lf.text) || badFor(field, lf.text) || "It doesn’t match any part of this reference."; return; }
        var lm = "Unexpected text before this part: " + show(lf.text) + ". " + (badFor(field, lf.text) || badFor(segs[nk], lf.text) || "It doesn’t match what goes here.");
        if (lf.s < gp.own.length) leftBefore[nk] = lm;
        else { parts[nk].ok = false; parts[nk].msg = lm + (parts[nk].msg ? " " + parts[nk].msg : ""); }
      });
      gp.own.forEach(function(k, q){
        var seg = segs[k], part = parts[k], pc = pieces[q], exp = expText(seg);
        if (!letters(pc) && letters(exp)) pc = "";
        if (!pc){
          if (moved[k]){ part.ok = false; part.msg = wrongPlace(k); return; }
          if (seg.opt){ part.skipped = true; return; }
          part.ok = false; part.msg = "Missing. " + (seg.why || "") + (exp ? " Expected " + show(exp) + "." : "");
          return;
        }
        part.ok = false;
        var specific = badFor(seg, pc) || generic(pc);
        part.msg = (specific || ((seg.why || "This part isn’t right yet.") + (diffNote(pc, exp) ? " " + diffNote(pc, exp) : ""))) + (exp ? " Expected " + show(exp) + "; you have " + show(pc) + "." : " You have " + show(pc) + ".");
      });
      gp.own.forEach(function(k){ if (leftBefore[k]){ parts[k].ok = false; parts[k].skipped = false; parts[k].msg = leftBefore[k] + (parts[k].msg ? " " + parts[k].msg : ""); } });
      if (dupMsg){
        if (gp.B != null){ parts[gp.B].ok = false; parts[gp.B].msg = (parts[gp.B].msg ? parts[gp.B].msg + " " : "") + "Before this part: " + dupMsg; }
        else { extra = dup.map(function(o){ return P.p.slice(o.c.s, o.c.e); }).join(" "); extraMsg = dupMsg; }
      }
      return;
    }
    if (!gp.text) return;
    if (!gp.rest && !dup.length && movedHere.length) return;   // only a part that belongs elsewhere: that part says so
    var jm = gp.text, idMsg = movedHere.map(function(o){ return "“" + P.p.slice(o.c.s, o.c.e) + "” looks like " + lab(segs[o.j]) + ", which goes " + (o.j > 0 ? "straight after " + lab(segs[o.j - 1]) : "first") + "."; }).join(" ");
    if (gp.B == null){ extra = jm; extraMsg = badFor({bad:field.tail}, jm) || badFor(field, jm) || [dupMsg, idMsg].filter(Boolean).join(" "); return; }
    gp.junk = jm;
    var part = parts[gp.B];
    var why = badFor(field, jm) || badFor(segs[gp.B], jm) || [dupMsg, idMsg].filter(Boolean).join(" ") || (letters(jm) ? "Is it in the wrong place, or extra?" : "Take this out: it doesn’t belong here.");
    part.msg = "Unexpected text before this part: " + show(jm) + ". " + why + (part.ok ? "" : " " + part.msg);
    part.ok = false;
  });
  gaps.forEach(function(gp){
    if (!gp.junk || gp.B == null) return;
    segs.forEach(function(seg, k){
      var part = parts[k], exp = expText(seg);
      if (part.ok || part.msg.indexOf("Missing.") !== 0 || !exp || dice(gp.junk, exp) < 0.55) return;
      part.msg = "This seems to be in the wrong place: " + show(gp.junk) + " (just before " + lab(segs[gp.B]) + ") looks like " + lab(seg) + ", which should come " + (k > 0 ? "straight after " + lab(segs[k - 1]) : "first") + ". " + (seg.why || "") + " Expected " + show(exp) + ".";
      parts[gp.B].msg = parts[gp.B].msg.replace("Is it in the wrong place, or extra?", "It looks like " + lab(seg) + ", in the wrong place.");
      gp.junk = "";
    });
  });
  // a missing part that's written (a bit differently) somewhere else
  var toks = []; P.p.replace(/\S+/g, function(m, off){ toks.push({s:off, e:off + m.length}); return m; });
  segs.forEach(function(seg, k){
    var part = parts[k], exp = expText(seg);
    if (part.ok || part.msg.indexOf("Missing.") !== 0 || letters(exp) < 4) return;
    var core = function(x){ return x.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase(); };
    var n = exp.split(" ").length, best = null;
    for (var a = 0; a < toks.length; a++) for (var len = Math.max(1, n - 1); len <= n + 1 && a + len <= toks.length; len++){
      var s0 = toks[a].s, e0 = toks[a + len - 1].e;
      if (chain.some(function(nd){ return nd.c.s < e0 && s0 < nd.c.e; })) continue;
      var d = letters(exp) < 6 ? (core(P.p.slice(s0, e0)) === core(exp) ? 1 : 0) : dice(P.p.slice(s0, e0), exp);
      if (!best || d > best.d) best = {d:d, s:s0, e:e0};
    }
    if (best && best.d >= 0.75) part.msg = "Not found in the right place. " + (seg.why || "") + " Expected " + show(exp) + ". It looks like you have it somewhere else (" + show(P.p.slice(best.s, best.e)) + "): it should come " + (k > 0 ? "straight after " + lab(segs[k - 1]) : "first") + ".";
  });
  var problems = parts.filter(function(p){ return !p.ok; }).length + (extra ? 1 : 0);
  var tipList = [];
  if (tips.dash) tipList.push("Page ranges use an en dash (–), not a hyphen. It’s accepted here, but the style guides use –. The – key is in the row under the box.");
  if (tips.open) tipList.push("There’s an odd number of asterisks, so the italics never close. Check each *…* pair.");
  return {ok:problems === 0 && !tips.open, parts:parts, extra:extra, extraMsg:extraMsg, tips:tipList};
};
// mistakes that can happen in any part
function generic(text){
  if (/\d\s+[-–—]\s*\d|\d\s*[-–—]\s+\d/.test(text)) return "No spaces around the dash in a page range: write it like 45–67.";
  return "";
}
function badFor(seg, text){
  var bs = (seg && seg.bad) || [];
  for (var k = 0; k < bs.length; k++){ if (new RegExp(bs[k].re, bs[k].f || "").test(text)) return bs[k].msg; }
  return "";
}

/* ---------- checking a whole challenge ---------- */
CL.check = function(ch, answers){
  var out = (ch.fields || []).map(function(f, i){ return CL.checkField(f, answers[i] || ""); });
  return {ok:out.every(function(r){ return r.ok; }), fields:out};
};
CL.solution = function(field){
  var s = "";
  field.segs.forEach(function(seg, i){ if (seg.opt) return; s += (i === 0 || seg.join === "" ? "" : " ") + (seg.t != null ? seg.t : seg.example); });
  return s;
};
/* render *italics* safely for the preview */
function curly(p){
  // show typographic quotation marks in the preview: opening after a start, space or bracket, closing otherwise
  return p.replace(/(^|[\s(\[])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/(^|[\s(\[])'/g, "$1\u2018").replace(/'/g, "\u2019");
}
CL.preview = function(text, esc){
  var P = parse(norm(text)), h = "", on = false;
  P.p = curly(P.p);
  for (var i = 0; i < P.p.length; i++){
    if (P.it[i] && !on){ h += "<i>"; on = true; }
    if (!P.it[i] && on){ h += "</i>"; on = false; }
    h += esc(P.p[i]);
  }
  return h + (on ? "</i>" : "");
};
if (typeof module !== "undefined" && module.exports) module.exports = CL; else root.CiteLab = CL;
})(this);
