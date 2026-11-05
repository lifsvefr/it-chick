/* IT CHICK Academy · Formula Lab checker
   check(challenge, text) → {ok, kind, title, msg (markdown-lite), results:{addr:value}, notes:[…]}
   It runs the learner's formula (copied down/across when the challenge says so) on the visible data
   AND on hidden variants with different numbers, so typed-in answers and lucky formulas don't pass.
   Every message says what happened and why, in plain words. */
(function(root){
"use strict";
var FX = root.FX || (typeof require !== "undefined" ? require("./formula.js") : null);
var LAB = {};

/* ---------- building sheets ---------- */
function gridCells(ch){
  var cells = {}, rows = ch.data;
  rows.forEach(function(row, i){ row.forEach(function(v, j){ if (v !== null && v !== undefined && v !== "") cells[FX.addr(j+1, i+1)] = {v:v}; }); });
  return cells;
}
LAB.gridCells = gridCells;
function targets(ch){
  var t = FX.parseAddr(ch.target), list = [{c:t.c, r:t.r, dr:0, dc:0}];
  if (ch.fill){
    var f = ch.fill.split(":").map(FX.parseAddr);
    list = [];
    for (var r = Math.min(f[0].r, f[1].r); r <= Math.max(f[0].r, f[1].r); r++)
      for (var c = Math.min(f[0].c, f[1].c); c <= Math.max(f[0].c, f[1].c); c++) list.push({c:c, r:r, dr:r - t.r, dc:c - t.c});
  }
  return list;
}
LAB.targets = targets;
function rng(seed){ var s = seed >>> 0 || 1; return function(){ s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }
function hash(str){ var h = 2166136261; for (var i = 0; i < str.length; i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function variants(ch){
  var base = gridCells(ch), out = [base], tset = {};
  targets(ch).forEach(function(t){ tset[FX.addr(t.c, t.r)] = 1; });
  var kinds = ch.vary || ["num"], keep = {}; (ch.keep || []).forEach(function(a){ keep[a] = 1; });
  var head = ch.header === false ? 0 : 1;
  kinds.forEach(function(kind, k){
    var R = rng(hash(ch.id + kind + k)), cells = JSON.parse(JSON.stringify(base));
    if (kind === "num" || kind === "num2"){
      Object.keys(cells).forEach(function(a){
        var p = FX.parseAddr(a), v = cells[a].v;
        if (p.r <= head || tset[a] || keep[a] || typeof v !== "number") return;
        var dec = (String(v).split(".")[1] || "").length, f = 0.55 + R() * 1.3, nv = Number((v * f).toFixed(dec));
        if (nv === v) nv = Number((v + (v >= 0 ? 1 : -1) * Math.pow(10, -dec) * (1 + Math.floor(R()*3))).toFixed(dec));
        if (ch.intRange){ nv = Math.max(ch.intRange[0], Math.min(ch.intRange[1], Math.round(nv))); if (nv === v) nv = v === ch.intRange[1] ? v - 1 : v + 1; }
        cells[a].v = nv;
      });
    } else if (kind === "shuffle"){
      var first = head + 1, last = ch.data.length, width = ch.data[0].length, rowsData = [];
      for (var r = first; r <= last; r++){ var row = []; for (var c = 1; c <= width; c++){ var ad = FX.addr(c, r); row.push(tset[ad] || keep[ad] ? undefined : (cells[ad] ? cells[ad].v : undefined)); } rowsData.push(row); }
      var order = rowsData.map(function(_, i){ return i; });
      for (var i = order.length - 1; i > 0; i--){ var j = Math.floor(R() * (i + 1)), tmp = order[i]; order[i] = order[j]; order[j] = tmp; }
      if (order.every(function(v, i){ return v === i; }) && order.length > 1){ order.push(order.shift()); }
      order.forEach(function(src, i){ for (var c = 1; c <= width; c++){ var ad = FX.addr(c, first + i); if (tset[ad] || keep[ad]) continue; var v = rowsData[src][c-1]; if (v === undefined) delete cells[ad]; else cells[ad] = {v:v}; } });
    }
    if (ch.extra && ch.extra[k]) Object.keys(ch.extra[k]).forEach(function(a){ cells[a] = {v:ch.extra[k][a]}; });
    out.push(cells);
  });
  return out;
}
LAB.variants = variants;
function runOn(cells, ast, ch){
  var c2 = {}; for (var a in cells) c2[a] = cells[a];
  var ts = targets(ch);
  ts.forEach(function(t){ c2[FX.addr(t.c, t.r)] = {ast:FX.shift(ast, t.dr, t.dc)}; });
  var sh = new FX.Sheet(c2), res = {};
  ts.forEach(function(t){ var a = FX.addr(t.c, t.r); res[a] = sh.get(t.c, t.r); });
  return res;
}
LAB.runOn = runOn;

/* ---------- comparing results ---------- */
function same(a, b, loose){
  if (FX.isErr(a) || FX.isErr(b)) return FX.isErr(a) && FX.isErr(b) && a.code === b.code;
  if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a), Math.abs(b));
  if (typeof a === "string" && typeof b === "string") return loose ? a.toLowerCase() === b.toLowerCase() : a === b;
  return a === b;
}
function allSame(A, B, loose){ for (var i = 0; i < A.length; i++) for (var k in A[i]) if (!same(A[i][k], B[i][k], loose)) return false; return true; }
function shown(v){ if (FX.isErr(v)) return v.code === "#SYNTAX" ? "an error" : FX.display(v) === "⚠" ? "a problem (no value)" : v.code; if (v === "") return "empty text (“”)"; if (typeof v === "string") return "“"+v+"” (text)"; if (typeof v === "boolean") return v ? "TRUE" : "FALSE"; return FX.display(v); }
LAB.shown = shown;

/* ---------- describing cells ---------- */
function header(ch, c){ var h = ch.data[0] && ch.data[0][c-1]; return ch.header === false || h === undefined || h === null ? "" : String(h); }
function cellDesc(ch, cells, c, r){
  var a = FX.addr(c, r), cell = cells[a], h = header(ch, c), v = cell ? cell.v : undefined;
  var what = v === undefined ? "empty" : typeof v === "string" ? "“"+v+"”" : FX.display(v);
  return "`"+a+"`" + (h && r > 1 ? " ("+h+")" : r === 1 && v !== undefined ? " (the header)" : "") + " = " + what;
}

/* ---------- the checker ---------- */
LAB.check = function(ch, text){
  var raw = String(text || "").replace(/ /g, " ").trim();
  var V = variants(ch), ansAst = FX.parse(ch.answer).ast;
  var want = V.map(function(c){ return runOn(c, ansAst, ch); });
  var t0 = FX.addr(FX.parseAddr(ch.target).c, FX.parseAddr(ch.target).r);
  var res = {ok:false, results:{}, notes:[]};
  if (!raw) return fin(res, "empty", "Nothing to check yet", "Type a formula in the formula bar, starting with `=`. Tip: tap a cell in the grid to add its address.");

  // 1. missing "="
  if (raw[0] !== "="){
    var asNum = Number(raw.replace(/,/g, ""));
    if (raw !== "" && !isNaN(asNum) && /^[\d.,\s-]+$/.test(raw)){
      return fin(res, "typed", "That’s a typed number, not a formula", (same(asNum, want[0][t0]) ? "It’s the right number for now, but " : "") + "a typed number never changes. If the data changes, a formula updates by itself; a typed number goes quietly wrong. Write a formula that starts with `=` and points to the cells.");
    }
    if (/^[+-]/.test(raw)) return fin(res, "noeq", "Start with =", "Formulas start with `=`. (Excel quietly turns a formula that starts with + or - into one starting with =, but other apps may store it as text.) Add `=` at the very beginning.");
    try { FX.parse("=" + raw); return fin(res, "noeq", "Start with =", "Without `=` at the start, the spreadsheet stores `"+esc(raw)+"` as plain text instead of calculating it. Add `=` at the very beginning."); }
    catch (e){ return fin(res, "noeq", "Start with =", "Every formula starts with `=`. Without it, the spreadsheet just stores what you typed as text."); }
  }

  // 2. syntax
  var P;
  try { P = FX.parse(raw); }
  catch (e){ if (!e.fx) throw e; return fin(res, "syntax", "The formula can’t be read yet", e.message, {pos:e.pos + 1}); }
  if (P.sep === ";") res.notes.push("You used `;` between the parts. That’s right in places whose settings use a decimal comma (much of Europe and Latin America, for example). This lab accepts both; in your own app, use whichever it expects.");
  var ast = P.ast;

  // 3. run it everywhere
  var got = V.map(function(c){ return runOn(c, ast, ch); });
  res.results = got[0];
  var ts = targets(ch), refs = FX.refsIn(ast), fns = FX.funcsIn(ast);

  // 3a. self-reference
  for (var k in got[0]) if (FX.isErr(got[0][k]) && got[0][k].code === "#CIRC") return fin(res, "circ", "Circular reference", "Your formula refers to the cell it’s in (`"+k+"`), so it would have to know its own answer before it could work it out. Point only to the data cells.");

  // 4. correct?
  if (allSame(got, want, false) || allSame(got, want, true)){
    var caseOnly = !allSame(got, want, false);
    var needFn = (ch.must && ch.must.fn) || [];
    var missing = needFn.filter(function(f){ return !f.split("|").some(function(g){ return fns.indexOf(g) > -1; }); }).map(function(f){ return f.split("|").join(" or "); });
    if (missing.length) return fin(res, "mustfn", "Right answer, different tool", "Your formula works. This challenge is practising **"+missing.join(", ")+"**, so try writing it with "+(missing.length > 1 ? "those functions" : "that function")+". (Knowing two ways is a real skill: you can check one with the other.)");
    if (ch.must && ch.must.noFn && ch.must.noFn.some(function(f){ return fns.indexOf(f) > -1; })) return fin(res, "mustfn", "Right answer, but…", ch.must.noFnWhy || "This challenge asks you to do it without that function.");
    if (ch.must && ch.must.abs && !refs.some(function(r){ return r.node.k === "ref" ? (r.node.ac || r.node.ar) : (r.node.a.ac || r.node.a.ar || r.node.b.ac || r.node.b.ar); })) return fin(res, "mustabs", "Right answer, but not copy-proof", ch.must.absWhy || "This works here, but the challenge is about locking a reference with `$` so the formula still works when copied. Add `$` to the reference that must not move.");
    var accApprox = false, ansExact2 = false;
    FX.walk(ansAst, function(m){ if (m.k === "fn" && (m.name === "XLOOKUP" || (m.name === "VLOOKUP" && m.args[3] && ((m.args[3].k === "bool" && !m.args[3].v) || (m.args[3].k === "num" && m.args[3].v === 0))))) ansExact2 = true; });
    FX.walk(ast, function(m){ if (m.k === "fn" && m.name === "VLOOKUP"){ var l4 = m.args[3]; if (!l4 || (l4.k === "bool" && l4.v) || (l4.k === "num" && l4.v !== 0)) accApprox = true; } });
    if (accApprox && ansExact2) return fin(res, "approx", "Right answer, by luck", "Your VLOOKUP gives the right answer here, but it’s doing an **approximate** match (the last part is missing or TRUE). That assumes the first column is sorted, and on other data it can quietly return the wrong row. End it with `FALSE` for an exact match.");
    res.ok = true;
    FX.walk(ast, function(m){ if (m.k === "fn" && (m.name === "SUMIF" || m.name === "AVERAGEIF") && m.args[2] && m.args[0].k === "range" && m.args[2].k === "range"){ var a0 = m.args[0], a2 = m.args[2]; if (Math.abs(a0.b.r - a0.a.r) !== Math.abs(a2.b.r - a2.a.r) || Math.abs(a0.b.c - a0.a.c) !== Math.abs(a2.b.c - a2.a.c)) res.notes.push("Your two ranges are different sizes. The spreadsheet quietly treats the second one as if it were the same size as the first, so it works, but it’s easy to misread later (and SUMIFS won’t allow it). Make them the same size, e.g. both ending on the same row."); } });
    FX.walk(ast, function(m){ if (m.k === "fn" && m.name === "CONCAT" && m.args.length > 2 && !res.notes.some(function(x){ return /CONCAT/.test(x); })) res.notes.push("Heads-up: in Google Sheets, CONCAT takes only two parts. There, use `&` or CONCATENATE, which take any number. (Excel 2019 and later, Microsoft 365 and LibreOffice accept more.)"); });
    if (caseOnly) res.notes.push("Only capital letters differ from the expected text. Spreadsheets treat “Yes” and “yes” as equal when comparing, but people reading your sheet will notice, so match the task’s wording.");
    var alts = (ch.also || []).filter(function(f){ return norm(f) !== norm(raw); });
    var msg = (ch.explain || "") + (alts.length ? "\n\nOther formulas that also work: " + alts.map(function(f){ return "`"+f+"`"; }).join(", ") + "." : "");
    if (ch.fill) msg += "\n\nCopied down, your formula became: " + ts.slice(0, 3).map(function(t){ return "`"+FX.addr(t.c, t.r)+": "+FX.print(FX.shift(ast, t.dr, t.dc))+"`"; }).join(", ") + (ts.length > 3 ? "…" : "") + ".";
    if (V.length > 1) msg += "\n\nIt also passed on " + (V.length - 1) + " hidden version" + (V.length > 2 ? "s" : "") + " of this data with different values.";
    return fin(res, "ok", pick(["Correct!", "That works!", "Nicely done.", "Yes, that’s it."], raw), msg);
  }

  // 5. why not?  A known trap (same results everywhere, and the same kind of formula) explains it best.
  var trap = findTrap(ch, ast, V, got);
  if (trap) return fin(res, "trap", trap.title || "Not quite", trap.why);
  var first = got[0], wfirst = want[0], firstBad = null;
  ts.forEach(function(t){ var a = FX.addr(t.c, t.r); if (!firstBad && !same(first[a], wfirst[a], true)) firstBad = a; });
  var mainOK = !firstBad;

  // 5a. errors with reasons
  var errCell = null; ts.forEach(function(t){ var a = FX.addr(t.c, t.r); if (!errCell && FX.isErr(first[a]) && !FX.isErr(wfirst[a])) errCell = a; });
  if (errCell){
    var ev = first[errCell], atStart = errCell === t0;
    if (!atStart && ch.fill){ var lk = lockHint(ch, ast, ansAst, V[0]); if (lk) return fin(res, "lock", "It breaks when it’s copied", lk); }
    var title = {"#DIV/0!":"#DIV/0!: dividing by zero", "#VALUE!":"#VALUE!: the wrong kind of value", "#NAME?":"#NAME?: a name the spreadsheet doesn’t know", "#REF!":"#REF!: a reference that doesn’t exist", "#N/A":"#N/A: not found", "#NUM!":"#NUM!: an impossible number", "#ARGS":"The function has the wrong number of parts", "#LAB":"Not available in this lab", "#ERROR":"The formula can’t run"}[ev.code] || ev.code;
    var why = ev.why || "";
    if (ev.code === "#VALUE!" && /used in arithmetic/.test(why)){ var tr = textRefs(ch, refs, V[0]); if (tr) why += " " + tr; }
    var extra = specific(ch, ast, ansAst, refs, fns, V, got, want, ev.code === "#NAME?");
    return fin(res, "error", title, (ts.length > 1 ? "In `"+errCell+"`: " : "") + why + (extra ? "\n\n" + extra : ""));
  }

  // 5b. right here, wrong on hidden data → typed values or coincidence
  if (mainOK){
    if (!refs.length) return fin(res, "hard", "Right answer, but it won’t update", "Your formula only uses values you typed in, so it gives the right answer for today’s data only. We changed the data in a hidden copy and it didn’t follow. Point to the cells instead (tap them in the grid), so the formula updates when the data does.");
    var typed = typedData(ast, V[0], ch);
    if (typed) return fin(res, "hard", "Part of it is typed in", "Your formula includes the number "+typed.v+", which is the value in `"+typed.a+"`. Typed numbers don’t update. Use the cell address `"+typed.a+"` instead, so it still works when the data changes. (We tested with different numbers in a hidden copy.)");
    if (ch.fill){ var lk2 = lockHint(ch, ast, ansAst, V[0]); if (lk2) return fin(res, "lock", "Works in some rows, not all", lk2); }
    var sp = specific(ch, ast, ansAst, refs, fns, V, got, want);
    return fin(res, "lucky", "Right here, but not in general", (sp ? sp + "\n\n" : "") + "Your formula happens to give the right answer for this data, but when we tried it on a hidden copy with different values"+(ch.vary && ch.vary.indexOf("shuffle") > -1 ? " (or with the rows in a different order)" : "")+", it gave "+shownFirstDiff(ts, got, want)+". Check that it uses the right cells and does what the task says in every case.");
  }

  // 5d. specific diagnostics
  if (ch.fill && firstBad !== t0){ var lk3 = lockHint(ch, ast, ansAst, V[0]); if (lk3) return fin(res, "lock", "The first row works, the copies don’t", lk3); }
  var sp2 = specific(ch, ast, ansAst, refs, fns, V, got, want);
  var uses = refs.length ? "Your formula uses " + uniq(refs.filter(function(r){ return r.node.k === "ref"; }).map(function(r){ return cellDesc(ch, V[0], r.c1, r.r1); })).concat(refs.filter(function(r){ return r.node.k === "range"; }).map(function(r){ return "the range `" + FX.addr(r.c1, r.r1) + ":" + FX.addr(r.c2, r.r2) + "`"; })).join(", ") + "." : "Your formula doesn’t point to any cells yet.";
  var gv = first[firstBad], wv = wfirst[firstBad];
  var base = "In `"+firstBad+"` your formula gives **"+shown(gv)+"**, but the answer should be **"+shown(wv)+"**. " + uses;
  var ratio = typeof gv === "number" && typeof wv === "number" && wv !== 0 ? gv / wv : null;
  if (ratio !== null && Math.abs(ratio - 100) < 1e-6) sp2 = sp2 || "Your answer is exactly 100 times too big. Is a percentage being used as a whole number (8 instead of 8% or 0.08)?";
  if (ratio !== null && Math.abs(ratio - 0.01) < 1e-9) sp2 = sp2 || "Your answer is exactly 100 times too small. Did you divide by 100 when the cell already holds a percentage?";
  if (typeof gv === "string" && typeof wv === "number" && !FX.isErr(FX.toNum(gv))) sp2 = sp2 || "Your result is text that looks like a number (because of quotes, or because & joins things into text). The spreadsheet can’t add it up later. Leave out the quotes around numbers.";
  if (typeof gv === "string" && typeof wv === "string" && gv !== wv && gv.replace(/\s+/g, " ").trim().toLowerCase() === wv.toLowerCase()) sp2 = sp2 || "So close: the only difference is spaces. Your text has "+(/^\s|\s$/.test(gv) ? "a space at the start or end" : "a double space")+", and spreadsheets count every space. Check the spaces inside your quotes.";
  if (!sp2){ var ty = typedData(ast, V[0], ch); if (ty) sp2 = "Your formula includes the number "+ty.v+", which is the value in `"+ty.a+"`. Typed numbers don’t update when the data changes, and in copied formulas they don’t move. Use the cell address instead."; }
  if (typeof gv === "boolean" && typeof wv !== "boolean") sp2 = sp2 || "Your formula gives TRUE or FALSE: that’s the result of a comparison (like `B2>50`). The task needs a value. Do you need IF to turn the test into a result?";
  return fin(res, "wrong", "Not quite yet", base + (sp2 ? "\n\n" + sp2 : "") + (ch.hints && ch.hints.length ? "\n\nStuck? Tap **Hint**." : ""));
};

/* ---------- specific diagnostics ---------- */
function specific(ch, ast, ansAst, refs, fns, V, got, want, skipNames){
  var afns = FX.funcsIn(ansAst), arefs = FX.refsIn(ansAst), msgs = [];
  // SUM(B2-B6): minus where a colon was meant
  FX.walk(ast, function(n){ if (n.k === "fn" && ["SUM","AVERAGE","MIN","MAX","COUNT","COUNTA","MEDIAN"].indexOf(n.name) > -1) n.args.forEach(function(a){ if (a.k === "bin" && a.op === "-" && a.l.k === "ref" && a.r.k === "ref" && a.l.c === a.r.c) msgs.push("Inside "+n.name+"( ) you wrote `"+FX.refText(a.l)+"-"+FX.refText(a.r)+"`. A minus sign subtracts one cell from the other. To mean “all the cells from "+FX.refText(a.l)+" to "+FX.refText(a.r)+"”, use a colon: `"+FX.refText(a.l)+":"+FX.refText(a.r)+"`."); }); });
  // a cell from the wrong row
  var tgt = FX.parseAddr(ch.target);
  refs.forEach(function(r){ if (r.node.k !== "ref") return; var hit = arefs.some(function(a){ return a.node.k === "ref" && a.c1 === r.c1 && a.r1 === r.r1; }); if (hit) return; var same = arefs.filter(function(a){ return a.node.k === "ref" && a.c1 === r.c1; }), alt = same.filter(function(a){ return a.r1 !== r.r1; })[0]; if (alt && same.length === 1 && arefs.every(function(a){ return a.node.k === "ref" || a.c1 > r.c1 || a.c2 < r.c1; }) && alt.r1 === tgt.r && r.r1 !== tgt.r) msgs.push("You used `"+FX.addr(r.c1, r.r1)+"`, which is in row "+r.r1+". The data for this row is in `"+FX.addr(alt.c1, alt.r1)+"`."); });
  // VLOOKUP approximate by accident
  FX.walk(ast, function(n){ if (n.k === "fn" && n.name === "VLOOKUP"){ var last = n.args[3]; var approx = !last || (last.k === "bool" && last.v) || (last.k === "num" && last.v !== 0); var ansExact = false; FX.walk(ansAst, function(m){ if (m.k === "fn" && m.name === "VLOOKUP" && m.args[3] && ((m.args[3].k === "bool" && !m.args[3].v) || (m.args[3].k === "num" && m.args[3].v === 0))) ansExact = true; if (m.k === "fn" && m.name === "XLOOKUP") ansExact = true; }); if (approx && ansExact) msgs.push("Your VLOOKUP is doing an **approximate** match. When the last part is left out (or TRUE), VLOOKUP assumes the first column is sorted and can quietly return the wrong row. For an exact match, end with `FALSE`: `VLOOKUP(…, …, …, FALSE)`."); if (!approx && !ansExact) msgs.push("Here an approximate match is the point: the first column holds the *starting value* of each band, so leave the last part out or use TRUE."); } });
  // COUNT vs COUNTA
  var okFns = afns.slice(); (ch.also || []).forEach(function(f){ try { okFns = okFns.concat(FX.funcsIn(FX.parse(f).ast)); } catch (e){} });
  if (fns.indexOf("COUNT") > -1 && afns.indexOf("COUNTA") > -1 && okFns.indexOf("COUNT") < 0) msgs.push("COUNT only counts cells holding **numbers**. To count every filled-in cell (text too), use COUNTA.");
  if (fns.indexOf("COUNTA") > -1 && afns.indexOf("COUNT") > -1 && okFns.indexOf("COUNTA") < 0) msgs.push("COUNTA counts every filled-in cell, including text. To count only the numbers, use COUNT.");
  if (fns.indexOf("SUM") > -1 && afns.indexOf("COUNT") > -1 && afns.indexOf("SUM") < 0) msgs.push("SUM adds the values up; the task wants how many there are (COUNT or COUNTIF).");
  if (fns.indexOf("COUNTIF") > -1 && afns.indexOf("SUMIF") > -1) msgs.push("COUNTIF counts how many rows match. To add up their amounts, use SUMIF with a third part: the column to add.");
  if (fns.indexOf("SUMIF") > -1 && afns.indexOf("COUNTIF") > -1 && afns.indexOf("SUMIF") < 0) msgs.push("SUMIF adds amounts; the task asks how many rows match, which is COUNTIF.");
  // range edges compared with the answer's main range
  var aR = arefs.filter(function(r){ return r.node.k === "range"; }), lR = refs.filter(function(r){ return r.node.k === "range"; });
  if (aR.length && lR.length){
    lR.forEach(function(l){
      var a = aR.filter(function(x){ return x.c1 === l.c1 && x.c2 === l.c2; })[0];
      if (!a) return;
      var lt = FX.addr(l.c1, l.r1) + ":" + FX.addr(l.c2, l.r2);
      if (l.r1 < a.r1 && l.r1 === 1) msgs.push("Your range `"+lt+"` starts at row 1, which is the header. "+(fns.some(function(f){ return /COUNTA|COUNTIF/.test(f); }) ? "COUNTA and COUNTIF count the header too." : "Start at the first row of data."));
      else if (l.r1 > a.r1) msgs.push("Your range `"+lt+"` starts at row "+l.r1+", so it misses row"+(l.r1 - a.r1 > 1 ? "s "+a.r1+"–"+(l.r1-1) : " "+a.r1)+".");
      if (l.r2 < a.r2) msgs.push("Your range `"+lt+"` stops at row "+l.r2+", so it leaves out row"+(a.r2 - l.r2 > 1 ? "s "+(l.r2+1)+"–"+a.r2 : " "+a.r2)+". Drag to the last row of the data, or type the last row number.");
      else if (l.r2 > a.r2 && !ch.allowLong) msgs.push("Your range `"+lt+"` goes past the data (to row "+l.r2+"). It may work today, but it’s clearer to stop at the last data row, row "+a.r2+".");
    });
    if (ch.lookup){ // ranges that must line up
      var lens = lR.map(function(r){ return (r.r2 - r.r1) + "x" + (r.c2 - r.c1); });
      if (lR.length > 1 && lens.some(function(x){ return x !== lens[0]; }) && fns.some(function(f){ return /XLOOKUP|SUMIF|AVERAGEIF|S$/.test(f); })) msgs.push("The ranges in your formula are different sizes. In a lookup or SUMIF, the ranges must start and end on the same rows, so row 1 of one lines up with row 1 of the other.");
    }
  }
  // order of operations
  if (ch.order){
    var noParen = true; FX.walk(ast, function(n){ if (n.k === "paren") noParen = false; });
    if (noParen) msgs.push("Spreadsheets do `^` first, then `*` and `/`, then `+` and `-` (left to right within each level). If something must happen first, put it in brackets ( ).");
  }
  // IF with text outputs missing quotes
  if (!skipNames) FX.walk(ast, function(n){ if (n.k === "name" && !/^(\$?[A-Za-z]{1,3}\$?\d+|\d+)[xX]/.test(n.v)) msgs.push("`"+n.v+"` has no quotes, so the spreadsheet looks for a cell or function with that name. Text in a formula always goes in straight double quotes: `\""+n.v+"\"`."); });
  // criteria without quotes like COUNTIF(B2:B9,>50) can't parse; criteria with a cell: ">"&E1 vs ">E1"
  FX.walk(ast, function(n){ if (n.k === "fn" && /IFS?$/.test(n.name) && n.name !== "IF") n.args.forEach(function(a){ if (a.k === "str" && /^[<>=]{1,2}\$?[A-Z]{1,3}\$?\d+$/i.test(a.v)) msgs.push("The criteria `\""+a.v+"\"` is all inside quotes, so the spreadsheet compares with the *letters* “"+a.v.replace(/^[<>=]+/, "")+"”, not with that cell’s value. Join the operator to the cell with &: `\""+a.v.match(/^[<>=]+/)[0]+"\"&"+a.v.replace(/^[<>=]+/, "").toUpperCase()+"`."); }); });
  FX.walk(ast, function(n){ if (n.k === "fn" && /IFS?$/.test(n.name) && n.name !== "IF") n.args.forEach(function(a){ var sv = a.k === "str" ? a.v : a.k === "bin" && a.op === "&" && a.l.k === "str" ? a.l.v : null; if (sv === null) return;
    if (/[≥≤≠]/.test(sv)) msgs.push("Spreadsheets don’t understand ≥, ≤ or ≠, even inside quotes. Type them as two characters: `>=`, `<=`, `<>`.");
    else if (/^=[<>]/.test(sv)) msgs.push("In criteria, write “greater than or equal to” as `>=` and “less than or equal to” as `<=`: the `=` goes second. `\""+sv.slice(0, 2)+"\"` means “equal to the text "+sv.slice(1, 2)+"…”, so nothing matches.");
    else if (/^[<>]=?\s|^[<>]\s+=|^\s|\s$/.test(sv) && sv.trim() !== "") msgs.push("There’s a space inside the quotes in `\""+sv+"\"`. Spaces count in criteria, so leave them out: `\""+sv.replace(/\s+/g, "")+"\"`."); }); });
  var ansOpCrit = false; FX.walk(ansAst, function(n){ if (n.k === "fn" && /^(COUNTIF|SUMIF|AVERAGEIF)$/.test(n.name) && n.args[1]){ var c = n.args[1], sv = c.k === "str" ? c.v : c.k === "bin" && c.op === "&" && c.l.k === "str" ? c.l.v : ""; if (/^[<>]/.test(sv)) ansOpCrit = true; } });
  if (ansOpCrit) FX.walk(ast, function(n){ if (n.k === "fn" && /^(COUNTIFS?|SUMIF|AVERAGEIF)$/.test(n.name) && n.args[1]){ var c = n.args[1]; if (c.k === "num" || c.k === "ref" || (c.k === "str" && !FX.isErr(FX.toNum(c.v)))) msgs.push("Criteria with no operator means “equal to”, so this only counts cells exactly equal to "+(c.k === "ref" ? "the value in `"+FX.refText(c)+"`" : "that number")+". For a comparison, put the operator in quotes first: `\">=100\"`, or `\">=\"&E2` to use a cell."); } });
  FX.walk(ast, function(n){ if (n.k === "bin" && /^(=|<>|<|>|<=|>=)$/.test(n.op) && [n.l, n.r].some(function(x){ return x.k === "str" && x.v.trim() !== "" && !FX.isErr(FX.toNum(x.v)); })) msgs.push("A number in quotes, like `\""+[n.l, n.r].filter(function(x){ return x.k === "str"; })[0].v+"\"`, is **text**, and spreadsheets never treat text as equal to a number (in comparisons, text counts as bigger than any number). Leave the quotes off numbers in a comparison."); });
  return uniq(msgs).slice(0, 2).join("\n\n");
}
/* a known trap: the same results on every version of the data and, when the trap uses functions, the same functions and cells (so a trap's explanation is only given to formulas it describes) */
function findTrap(ch, ast, V, got){
  var mine = shape(ast);
  return (ch.traps || []).filter(function(tp){ try { var ta = FX.parse(tp.f).ast, tr = V.map(function(c){ return runOn(c, ta, ch); }); if (!allSame(got, tr, true)) return false; var sh = shape(ta), errs = tr.some(function(r){ for (var k in r) if (FX.isErr(r[k])) return true; return false; }); return (!sh.fns && !errs) || (sh.fns === mine.fns && sh.refs === mine.refs); } catch (e){ return false; } })[0];
}
var FN_FAMILY = {COUNTIFS:"COUNTIF", SUMIFS:"SUMIF", AVERAGEIFS:"AVERAGEIF", CONCATENATE:"CONCAT", IFNA:"IFERROR"};
function shape(ast){
  var f = uniq(FX.funcsIn(ast).map(function(n){ return FN_FAMILY[n] || n; })).sort().join(",");
  var r = uniq(FX.refsIn(ast).map(function(x){ return FX.addr(x.c1, x.r1) + ":" + FX.addr(x.c2, x.r2); })).sort().join(",");
  return {fns:f, refs:r};
}
/* a reference that should (or shouldn't) be locked with $: compares each reference with the answer's */
function lockHint(ch, ast, ansAst, cells){
  var ts = targets(ch), down = ts.some(function(t){ return t.dr; }), across = ts.some(function(t){ return t.dc; });
  var aRefs = []; FX.walk(ansAst, function(n){ if (n.k === "ref") aRefs.push(n); if (n.k === "range"){ aRefs.push(Object.assign({inRange:true}, n.a)); aRefs.push(Object.assign({inRange:true}, n.b)); } });
  var last = ts[ts.length - 1], out = null;
  FX.walk(ast, function(n){
    if (out) return;
    var cand = n.k === "ref" ? [n] : n.k === "range" ? [n.a, n.b] : [], isR = n.k === "range";
    cand.forEach(function(e){
      if (out) return;
      var a = aRefs.filter(function(x){ return x.c === e.c && x.r === e.r && !!x.inRange === isR; })[0];
      if (!a) return;
      var want = (a.ac ? "$" : "") + FX.numToCol(a.c) + (a.ar ? "$" : "") + a.r, have = FX.refText(e);
      var rowUnder = down && !e.ar && a.ar, colUnder = across && !e.ac && a.ac, rowOver = down && e.ar && !a.ar, colOver = across && e.ac && !a.ac;
      if (rowUnder || colUnder){
        var moved = FX.addr(colUnder ? e.c + last.dc : (e.ac ? e.c : e.c + last.dc), rowUnder ? e.r + last.dr : (e.ar ? e.r : e.r + last.dr));
        out = "When your formula is copied " + (rowUnder ? "down" : "across") + ", `" + have + "` moves too: by `" + FX.addr(last.c, last.r) + "` it has become `" + moved + "`, which is " + (cells[moved] ? "a different cell" : "empty") + ". " +
          (rowUnder && colUnder ? "It must stay exactly where it is" : rowUnder ? "Its **row** must stay put" : "Its **column** must stay put") + ": lock it with `$` → `" + want + "`." +
          (want.split("$").length === 3 && (down !== across) ? " (Locking just the " + (down ? "row, `" + FX.numToCol(a.c) + "$" + a.r : "column, `$" + FX.numToCol(a.c) + a.r) + "`, also works when copying in one direction.)" : "") +
          " Typing the `$` signs always works. While editing a formula you can also press [[kbd:F4]] on the reference (Excel and LibreOffice Calc on Windows or Linux, and Google Sheets on Windows). On a Mac: [[kbd:Cmd]] + [[kbd:T]] in Excel, [[kbd:Fn]] + [[kbd:F4]] in Google Sheets. On a Chromebook in Google Sheets: [[kbd:Search]] + [[kbd:4]].";
      } else if (rowOver || colOver){
        out = "`" + have + "` is locked " + (rowOver && colOver ? "in both directions" : rowOver ? "to its row" : "to its column") + ", so when the formula is copied " + (rowOver ? "down" : "across") + " every copy still uses " + (rowOver ? "row " + e.r : "column " + FX.numToCol(e.c)) + ". This reference should " + (rowOver ? "move down a row with each copy" : "move across with each copy") + ". Remove that `$`: `" + want + "`.";
      }
    });
  });
  return out;
}
var INDEX_ARGS = {VLOOKUP:[2,3], ROUND:[1], ROUNDUP:[1], ROUNDDOWN:[1], XLOOKUP:[4,5], LEFT:[1], RIGHT:[1]};
function typedData(ast, cells, ch){
  var skip = [], ansNums = [];
  FX.walk(ast, function(n){ if (n.k === "fn" && INDEX_ARGS[n.name]) INDEX_ARGS[n.name].forEach(function(i){ if (n.args[i]) skip.push(n.args[i]); }); if (n.k === "fn" && /^(COUNTIF|SUMIF|AVERAGEIF)$/.test(n.name) && n.args[1]) skip.push(n.args[1]); if (n.k === "fn" && /IFS$/.test(n.name)) n.args.forEach(function(a, i){ if (i > 0 && i % 2 === (n.name === "COUNTIFS" ? 1 : 0)) skip.push(a); }); });
  var keep = {}; (ch.keep || []).forEach(function(a){ keep[a] = 1; });
  FX.walk(ast, function(n){ if (n.k === "bin" && /^(=|<>|<|>|<=|>=)$/.test(n.op)){ skip.push(n.l); skip.push(n.r); } }); // thresholds in a test are meant to be typed
  try { FX.walk(FX.parse(ch.answer).ast, function(n){ if (n.k === "num") ansNums.push(n.v); }); } catch (e){}
  var nums = []; FX.walk(ast, function(n){ if (n.k === "num" && skip.indexOf(n) < 0 && ansNums.indexOf(n.v) < 0) nums.push(n.v); });
  var head = ch.header === false ? 0 : 1, hit = null;
  Object.keys(cells).forEach(function(a){ var p = FX.parseAddr(a), v = cells[a].v; if (!hit && p.r > head && !keep[a] && typeof v === "number" && v !== 0 && v !== 1 && nums.some(function(x){ return Math.abs(x - v) < 1e-12; })) hit = {a:a, v:FX.display(v)}; });
  return hit;
}
function textRefs(ch, refs, cells){
  var t = refs.filter(function(r){ return r.node.k === "ref"; }).map(function(r){ var c = cells[FX.addr(r.c1, r.r1)]; return c && typeof c.v === "string" ? cellDesc(ch, cells, r.c1, r.r1) : null; }).filter(Boolean);
  return t.length ? "Here: " + t.join(", ") + "." + (t.some(function(x){ return /header/.test(x); }) ? " That’s a header: start one row lower." : "") : "";
}
function shownFirstDiff(ts, got, want){ for (var i = 1; i < got.length; i++) for (var k = 0; k < ts.length; k++){ var a = FX.addr(ts[k].c, ts[k].r); if (!same(got[i][a], want[i][a], true)) return "**"+shown(got[i][a])+"** where the right answer was **"+shown(want[i][a])+"**"; } return "a different answer"; }
function uniq(a){ var s = {}, o = []; a.forEach(function(x){ if (!s[x]){ s[x] = 1; o.push(x); } }); return o; }
function norm(f){ return String(f).replace(/\s+/g, "").toUpperCase(); }
function esc(s){ return String(s).replace(/`/g, "'"); }
function pick(list, seed){ return list[hash(seed) % list.length]; }
function fin(res, kind, title, msg, extra){ res.kind = kind; res.title = title; res.msg = msg; if (extra) for (var k in extra) res[k] = extra[k]; return res; }

/* ---------- self-test of a challenge (used by tools/test_lab.js and the render checker) ---------- */
LAB.selfTest = function(ch){
  var probs = [];
  try { FX.parse(ch.answer); } catch (e){ return ["answer does not parse: " + e.message]; }
  var r = LAB.check(ch, ch.answer); if (!r.ok) probs.push("answer not accepted: " + r.title + " · " + r.msg);
  (ch.also || []).forEach(function(f){ var q = LAB.check(ch, f); if (!q.ok) probs.push("alternative " + f + " not accepted: " + q.title); });
  (ch.traps || []).forEach(function(tp){ var q = LAB.check(ch, tp.f); if (q.ok) probs.push("trap " + tp.f + " is accepted as correct"); });
  var want = runOn(gridCells(ch), FX.parse(ch.answer).ast, ch);
  for (var a in want) if (FX.isErr(want[a])) probs.push("answer gives an error in " + a + ": " + want[a].code + " " + want[a].why);
  if (ch.start){ var s = LAB.check(ch, ch.start); if (s.ok) probs.push("the starting (broken) formula is already accepted"); }
  return probs;
};

if (typeof module !== "undefined" && module.exports) module.exports = LAB;
else root.FormulaLab = LAB;
})(this);
