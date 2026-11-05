/* IT CHICK Academy · Formula engine
   A small, careful spreadsheet formula parser and evaluator for the Formula Lab.
   Behaviour follows Microsoft Excel for everything it supports. Google Sheets and LibreOffice Calc agree on
   nearly all of it; known differences (CONCAT's two-part limit in Sheets, 0^0, the date base before March 1900,
   optional ROUND digits) are noted where they come up. Works in the browser (window.FX) and in Node (module.exports). */
(function(root){
"use strict";
var FX = {};

/* ---------- values ---------- */
function Err(code, why){ this.code = code; this.why = why || ""; }
Err.prototype.toString = function(){ return this.code; };
FX.Err = Err;
var BLANK = {blank:true};
FX.BLANK = BLANK;
function isErr(v){ return v instanceof Err; }
function isBlank(v){ return v === BLANK || v === undefined || v === null; }
function E(code, why){ return new Err(code, why); }

/* ---------- references ---------- */
function colToNum(s){ var n = 0; s = s.toUpperCase(); for (var i = 0; i < s.length; i++) n = n*26 + (s.charCodeAt(i)-64); return n; }
function numToCol(n){ var s = ""; while (n > 0){ var m = (n-1) % 26; s = String.fromCharCode(65+m) + s; n = Math.floor((n-1)/26); } return s; }
FX.colToNum = colToNum; FX.numToCol = numToCol;
FX.addr = function(c, r){ return numToCol(c) + r; };
FX.parseAddr = function(a){ var m = /^\$?([A-Za-z]{1,3})\$?(\d+)$/.exec(a); return m ? {c:colToNum(m[1]), r:+m[2]} : null; };
function refText(n){ return (n.ac?"$":"") + numToCol(n.c) + (n.ar?"$":"") + n.r; }
FX.refText = refText;

/* ---------- tokenizer ---------- */
var FUNCS = {}; // filled below
FX.FUNCS = FUNCS;
function tokenize(src, opts){
  var t = [], i = 0, s = src, sep = opts.sep;
  function push(type, v, start){ t.push({type:type, v:v, pos:start, end:i}); }
  while (i < s.length){
    var ch = s[i], st = i;
    if (/\s/.test(ch)){ i++; continue; }
    if (ch === '"'){
      var str = ""; i++;
      while (true){
        if (i >= s.length) throw syntax("A piece of text in quotes is never closed. Add the closing \".", st);
        if (s[i] === '"'){ if (s[i+1] === '"'){ str += '"'; i += 2; continue; } i++; break; }
        str += s[i++];
      }
      push("str", str, st); continue;
    }
    if (ch === "“" || ch === "”" || ch === "„" || ch === "«" || ch === "»")
      throw syntax("This formula has curly quotes (“ ”). Spreadsheets only understand straight quotes (\"). Phones and word processors often swap them in: retype the quotes, or paste from a plain-text place.", st);
    if (ch === "‘" || ch === "’") throw syntax("This formula has a curly apostrophe (’). In formulas, text goes in straight double quotes (\"like this\").", st);
    if (ch === "'") throw syntax("Text in a formula goes in double quotes (\"like this\"), not single quotes ('). Single quotes are only used around sheet names.", st);
    var dec = sep === ";" ? "[.,]" : "\\.";
    var numRe = new RegExp("^(?:\\d+(?:"+dec+"\\d*)?|"+dec+"\\d+)(?:[eE][+-]?\\d+)?");
    var m = numRe.exec(s.slice(i));
    if (m){
      var after = s.slice(i+m[0].length);
      if (/^\s*[xX\u00d7]\s*(\d|\$?[A-Za-z]{1,3}\$?\d)/.test(after)) throw syntax("To multiply, use * (an asterisk), not × or x.", i+m[0].length);
      if (/^[A-Za-z]/.test(after)) throw syntax("A number runs straight into letters here (“"+(m[0]+after).slice(0, 8)+"”). Is an operator such as * missing, or is it meant to be a cell address like B2 (letter first)?", st);
      i += m[0].length; push("num", parseFloat(m[0].replace(",", ".")), st); continue;
    }
    m = /^\$?[A-Za-z]{1,3}\$?\d+(?::\$?[A-Za-z]{1,3}\$?\d+)?(?![A-Za-z0-9_(.])/.exec(s.slice(i));
    if (m){
      i += m[0].length;
      var parts = m[0].split(":"), refs = parts.map(function(p){ var q = /^(\$?)([A-Za-z]{1,3})(\$?)(\d+)$/.exec(p); return {c:colToNum(q[2]), r:+q[4], ac:!!q[1], ar:!!q[3]}; });
      push(parts.length === 2 ? "range" : "ref", refs, st); continue;
    }
    m = /^\$?[A-Za-z]{1,3}:\$?[A-Za-z]{1,3}(?![A-Za-z0-9_(])/.exec(s.slice(i));
    if (m && /:/.test(m[0])){ i += m[0].length; throw syntax("Whole-column ranges like "+m[0]+" work in real spreadsheets, but this lab needs exact ranges with row numbers, like B2:B9.", st); }
    m = /^[A-Za-z_][A-Za-z0-9_.]*/.exec(s.slice(i));
    if (m){
      i += m[0].length;
      var w = m[0], up = w.toUpperCase();
      if (up === "TRUE" || up === "FALSE"){ if (s[i] === "("){ i++; var j = i; while (s[j] === " ") j++; if (s[j] === ")"){ i = j+1; } else throw syntax(up+"() takes nothing inside its brackets.", st); } push("bool", up === "TRUE", st); continue; }
      var k = i; while (s[k] === " ") k++;
      if (s[k] === "("){ i = k+1; push("fn", up, st); continue; }
      push("name", w, st); continue;
    }
    if (ch === "#"){
      m = /^#(DIV\/0!|VALUE!|NAME\?|REF!|N\/A|NUM!|NULL!)/i.exec(s.slice(i));
      if (m){ i += m[0].length; push("errlit", m[0].toUpperCase(), st); continue; }
    }
    var two = s.substr(i, 2);
    if (two === "<=" || two === ">=" || two === "<>"){ i += 2; push("op", two, st); continue; }
    if (two === "!=" ){ throw syntax("Spreadsheets write “not equal to” as <> (not !=).", st); }
    if (two === "==" ){ throw syntax("Spreadsheets compare with a single = (not ==).", st); }
    if ("+-*/^&=<>%".indexOf(ch) > -1){ i++; push("op", ch, st); continue; }
    if (ch === "(" || ch === ")"){ i++; push(ch, ch, st); continue; }
    if (ch === "," || ch === ";"){
      if (ch !== sep) {
        if (sep === "," && ch === ";") throw syntax("Use a comma (,) between the parts of a function here. (Some countries’ settings use semicolons; this lab is set to commas.)", st);
        throw syntax("Mixing , and ; confuses the formula. Use the same separator between all the parts of a function (; in this formula, since you used it elsewhere).", st);
      }
      i++; push("sep", ch, st); continue;
    }
    if (ch === ":"){ throw syntax("A colon makes a range between two cells, like B2:B9. Check both sides are cell addresses.", st); }
    if (ch === "×" || ch === "x" || ch === "X") throw syntax("To multiply, use * (an asterisk), not × or x.", st);
    if (ch === "≥" || ch === "≤" || ch === "≠") throw syntax("Spreadsheets don’t understand "+ch+". Type it as two characters: "+(ch === "≥" ? ">=" : ch === "≤" ? "<=" : "<>")+".", st);
    if (ch === "÷") throw syntax("To divide, use / (a slash), not ÷.", st);
    if (ch === "−" || ch === "–" || ch === "—") throw syntax("This minus sign is a dash character (– or −). Type the plain hyphen-minus key (-).", st);
    if (ch === "[" || ch === "]" || ch === "{" || ch === "}") throw syntax("Formulas group things with round brackets ( ), not [ ] or { }.", st);
    if (ch === "!") throw syntax("This lab works on one sheet, so you don’t need sheet names with ! here.", st);
    throw syntax("The character “"+ch+"” doesn’t belong in a formula.", st);
  }
  return t;
}
function syntax(msg, pos){ var e = new Error(msg); e.fx = true; e.pos = pos; return e; }

/* ---------- parser (Excel precedence) ----------
   lowest → highest: comparison (= <> < > <= >=) · & · + - · * / · ^ · % · unary - + · range */
function parse(src, opts){
  opts = opts || {};
  var s = String(src);
  var hasEq = /^\s*=/.test(s);
  var body = s.replace(/^\s*=/, "");
  if (/^\s*$/.test(body)) throw syntax(hasEq ? "There’s nothing after the = yet." : "Type a formula, starting with =.", 0);
  var sep = opts.sep || (detectSemicolon(body) ? ";" : ",");
  var toks = tokenize(body, {sep:sep}), p = 0;
  function peek(){ return toks[p]; }
  function next(){ return toks[p++]; }
  function isOp(t, ops){ return t && t.type === "op" && ops.indexOf(t.v) > -1; }
  function cmp(){ var l = cat(); while (isOp(peek(), ["=","<>","<",">","<=",">="])){ var o = next().v; l = {k:"bin", op:o, l:l, r:cat()}; } return l; }
  function cat(){ var l = add(); while (isOp(peek(), ["&"])){ next(); l = {k:"bin", op:"&", l:l, r:add()}; } return l; }
  function add(){ var l = mul(); while (isOp(peek(), ["+","-"])){ var o = next().v; l = {k:"bin", op:o, l:l, r:mul()}; } return l; }
  function mul(){ var l = pow(); while (isOp(peek(), ["*","/"])){ var o = next().v; l = {k:"bin", op:o, l:l, r:pow()}; } return l; }
  function pow(){ var l = pct(); while (isOp(peek(), ["^"])){ next(); l = {k:"bin", op:"^", l:l, r:pct()}; } return l; }
  function pct(){ var x = un(); while (isOp(peek(), ["%"])){ next(); x = {k:"pct", x:x}; } return x; }
  function un(){ if (isOp(peek(), ["-","+"])){ var o = next().v; return {k:"un", op:o, x:un()}; } return prim(); }
  function prim(){
    var t = next();
    if (!t) throw syntax("The formula ends too soon. Something is missing at the end (a value, a cell, or a closing bracket).", body.length);
    if (t.type === "num") return {k:"num", v:t.v};
    if (t.type === "str") return {k:"str", v:t.v};
    if (t.type === "bool") return {k:"bool", v:t.v};
    if (t.type === "errlit") return {k:"errlit", v:t.v};
    if (t.type === "ref"){ var r = t.v[0]; return {k:"ref", c:r.c, r:r.r, ac:r.ac, ar:r.ar, pos:t.pos, end:t.end}; }
    if (t.type === "range"){ return {k:"range", a:t.v[0], b:t.v[1], pos:t.pos, end:t.end}; }
    if (t.type === "name") return {k:"name", v:t.v, pos:t.pos};
    if (t.type === "("){ var x = cmp(); var c = next(); if (!c || c.type !== ")") throw syntax(c ? "Something unexpected after a bracketed part: check for a missing operator like + or *." : "A bracket ( is opened but never closed. Add ).", c ? c.pos : body.length); return {k:"paren", x:x}; }
    if (t.type === "fn"){
      var args = [];
      if (peek() && peek().type === ")"){ next(); return {k:"fn", name:t.v, args:args, pos:t.pos}; }
      while (true){
        if (peek() && (peek().type === "sep" || peek().type === ")")) args.push({k:"missing"});
        else args.push(cmp());
        var q = next();
        if (!q) throw syntax(t.v+"( is opened but never closed. Add ) at the end.", body.length);
        if (q.type === ")") break;
        if (q.type !== "sep"){
          var la = args[args.length - 1];
          if (la && la.k === "name" && (q.type === "name" || q.type === "fn")) throw syntax("“"+la.v+" "+q.v+"” looks like words. Text inside a formula must be in straight double quotes, including any spaces, like \""+la.v+" "+(q.type === "name" ? q.v : q.v.toLowerCase())+"\".", la.pos);
          if (la && la.k === "str" && /^[<>=]{1,2}$/.test(la.v)) throw syntax("To join an operator to a value, use &: \""+la.v+"\"&"+(q.type === "num" ? numText(q.v) : "E2")+", or put the whole condition in quotes, like \""+la.v+"100\".", q.pos);
          if (la && la.k === "str" && (q.type === "ref" || q.type === "str")) throw syntax("Two values are side by side with nothing joining them. To join text and cells, put & between them.", q.pos);
          throw syntax("Inside "+t.v+"( ), separate the parts with "+sep+" . Something here isn’t separated, or an operator is missing.", q.pos);
        }
      }
      return {k:"fn", name:t.v, args:args, pos:t.pos};
    }
    if (t.type === ")") throw syntax("There’s a closing bracket ) with no matching opening (. Remove it, or add the ( where it belongs.", t.pos);
    if (t.type === "sep") throw syntax("A "+sep+" is out of place. Separators only go between the parts inside a function’s brackets.", t.pos);
    if (t.type === "op" && /^[<>]=?$|^<>$/.test(t.v) && p > 1 && toks[p-2] && toks[p-2].type === "sep") throw syntax("A condition like "+t.v+"100 must be written as text in quotes inside the function: \""+t.v+"100\". To compare with a cell, join it with &: \""+t.v+"\"&E2.", t.pos);
    if (t.type === "op" && t.v === "=" && toks[p-2] && toks[p-2].type === "op" && /[<>]/.test(toks[p-2].v)) throw syntax("Write “greater than or equal to” as >= and “less than or equal to” as <= (the = goes second).", t.pos);
    if (t.type === "op" && t.v === ">" && toks[p-2] && toks[p-2].type === "op" && toks[p-2].v === "=") throw syntax("Write “greater than or equal to” as >= (the = goes second, not =>).", t.pos);
    if (t.type === "op") throw syntax("Two operators are next to each other, or the formula starts with one that needs something before it (“"+t.v+"”).", t.pos);
    throw syntax("Something unexpected here.", t.pos);
  }
  var ast = cmp();
  if (p < toks.length){
    var t = toks[p];
    if (t.type === ")") throw syntax("There’s an extra closing bracket ). Count your brackets: every ( needs one ).", t.pos);
    if (t.type === "sep") throw syntax("A "+sep+" is outside any function’s brackets. Is a bracket closed too early?", t.pos);
    throw syntax("Two values are next to each other with nothing joining them. Is an operator (+ - * / &) missing?", t.pos);
  }
  return {ast:ast, hasEq:hasEq, sep:sep};
}
function detectSemicolon(b){ var inq = false; for (var i = 0; i < b.length; i++){ if (b[i] === '"') inq = !inq; else if (!inq && b[i] === ";") return true; } return false; }
FX.parse = parse;

/* ---------- printing (used for fill-down display) ---------- */
function print(n, sep){
  sep = sep || ",";
  switch (n.k){
    case "num": return numText(n.v);
    case "str": return '"' + n.v.replace(/"/g, '""') + '"';
    case "bool": return n.v ? "TRUE" : "FALSE";
    case "errlit": return n.v;
    case "ref": return refText(n);
    case "range": return refText(n.a) + ":" + refText(n.b);
    case "name": return n.v;
    case "paren": return "(" + print(n.x, sep) + ")";
    case "un": return n.op + print(n.x, sep);
    case "pct": return print(n.x, sep) + "%";
    case "bin": return print(n.l, sep) + n.op + print(n.r, sep);
    case "fn": return n.name + "(" + n.args.map(function(a){ return print(a, sep); }).join(sep) + ")";
    case "missing": return "";
  }
  return "";
}
FX.print = function(ast, sep){ return "=" + print(ast, sep); };

/* ---------- fill (copy) a formula: shift relative references ---------- */
function shift(n, dr, dc){
  var o = {}; for (var k in n) o[k] = n[k];
  if (n.k === "ref"){ o.r = n.ar ? n.r : n.r + dr; o.c = n.ac ? n.c : n.c + dc; return o; }
  if (n.k === "range"){ o.a = shift(Object.assign({k:"ref"}, n.a), dr, dc); o.b = shift(Object.assign({k:"ref"}, n.b), dr, dc); return o; }
  if (n.x) o.x = shift(n.x, dr, dc);
  if (n.l) o.l = shift(n.l, dr, dc);
  if (n.r && n.k === "bin") o.r = shift(n.r, dr, dc);
  if (n.args) o.args = n.args.map(function(a){ return shift(a, dr, dc); });
  return o;
}
FX.shift = shift;

/* ---------- walk helpers ---------- */
function walk(n, f){ if (!n) return; f(n); if (n.x) walk(n.x, f); if (n.k === "bin"){ walk(n.l, f); walk(n.r, f); } if (n.args) n.args.forEach(function(a){ walk(a, f); }); }
FX.walk = walk;
FX.refsIn = function(ast){ var out = []; walk(ast, function(n){ if (n.k === "ref") out.push({c1:n.c, r1:n.r, c2:n.c, r2:n.r, node:n}); if (n.k === "range") out.push({c1:Math.min(n.a.c,n.b.c), r1:Math.min(n.a.r,n.b.r), c2:Math.max(n.a.c,n.b.c), r2:Math.max(n.a.r,n.b.r), node:n}); }); return out; };
FX.funcsIn = function(ast){ var out = []; walk(ast, function(n){ if (n.k === "fn") out.push(n.name); }); return out; };

/* ---------- number formatting (General format, like a spreadsheet) ---------- */
function numText(v){
  if (!isFinite(v)) return "#NUM!";
  if (v === 0) return "0";
  var s = Number(v.toPrecision(15)).toString();
  if (/e/.test(s)){ var a = Math.abs(v); if (a >= 1e-9 && a < 1e15) s = Number(v.toPrecision(15)).toFixed(20).replace(/0+$/, "").replace(/\.$/, ""); }
  return s;
}
FX.numText = numText;
FX.display = function(v, fmt){
  if (isErr(v)) return /^#(ARGS|CIRC|SYNTAX|ERROR|LAB)$/.test(v.code) ? "⚠" : v.code;
  if (isBlank(v)) return "";
  if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
  if (typeof v === "number"){
    if (fmt === "date") return serialToISO(v);
    if (fmt === "money") return (v < 0 ? "-" : "") + Math.abs(v).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (fmt === "pct") return numText(Math.round(v*10000)/100) + "%";
    var s = numText(v);
    if (s.replace(/[-.]/g, "").length > 11){ var a = Math.abs(v); s = a >= 1e11 || a < 1e-4 ? v.toExponential(5).replace(/\.?0+e/, "e") : Number(v.toPrecision(10)).toString(); }
    return s;
  }
  return String(v);
};
/* dates (Excel's 1900 system): serial 1 = 1900-01-01, serial 60 = the fake 29 Feb 1900 Excel keeps for Lotus 1-2-3
   compatibility, serial 61 = 1900-03-01. Google Sheets and LibreOffice count from 30 Dec 1899 = 0 instead, so they
   agree with Excel from 1 March 1900 on. */
function serialToISO(n){ var d = Math.floor(n); if (d < 1) return "date " + d; if (d === 60) return "1900-02-29"; var t = Date.UTC(1899, 11, d < 60 ? 31 : 30) + d*86400000, x = new Date(t); return x.getUTCFullYear()+"-"+pad(x.getUTCMonth()+1)+"-"+pad(x.getUTCDate()); }
function pad(n){ return (n < 10 ? "0" : "") + n; }
FX.isoToSerial = function(s){ var m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(s); return m ? Math.round((Date.UTC(+m[1], +m[2]-1, +m[3]) - Date.UTC(1899, 11, 30))/86400000) : null; };
FX.serialToISO = serialToISO;

/* ---------- rounding the way spreadsheets do (half away from zero, decimal-safe) ---------- */
function roundTo(x, d, mode){
  if (!isFinite(x)) return x;
  d = Math.trunc(d);
  var sign = x < 0 ? -1 : 1, a = Math.abs(x);
  var p = Number(a.toPrecision(15));
  function sh(v, k){ var s = String(v).split("e"); return Number(s[0] + "e" + ((s[1] ? +s[1] : 0) + k)); }
  var y = sh(p, d);
  var r = mode === "up" ? Math.ceil(Number(y.toPrecision(15))) : mode === "down" ? Math.floor(Number(y.toPrecision(15))) : Math.round(y);
  return sign * sh(r, -d) || 0;
}
FX.roundTo = roundTo;

/* ---------- coercion ---------- */
function toNum(v){
  if (isErr(v)) return v;
  if (isBlank(v)) return 0;
  if (typeof v === "number") return v;
  if (typeof v === "boolean") return v ? 1 : 0;
  var s = String(v).trim();
  if (s === "") return E("#VALUE!", "An empty piece of text (\"\") can’t be used as a number.");
  var pc = /%$/.test(s); if (pc) s = s.slice(0, -1);
  if (/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(s)) return parseFloat(s) / (pc ? 100 : 1);
  return E("#VALUE!", "“"+v+"” is text, and text can’t be used in arithmetic.");
}
function toText(v){
  if (isErr(v)) return v;
  if (isBlank(v)) return "";
  if (typeof v === "boolean") return v ? "TRUE" : "FALSE";
  if (typeof v === "number") return numText(v);
  return String(v);
}
function toBool(v){
  if (isErr(v)) return v;
  if (isBlank(v)) return false;
  if (typeof v === "boolean") return v;
  if (typeof v === "number") return v !== 0;
  var u = String(v).toUpperCase();
  if (u === "TRUE") return true; if (u === "FALSE") return false;
  return E("#VALUE!", "“"+v+"” is text, so it can’t be read as TRUE or FALSE.");
}
FX.toNum = toNum; FX.toText = toText;
function typeRank(v){ return typeof v === "number" ? 1 : typeof v === "string" ? 2 : typeof v === "boolean" ? 3 : 0; }
function compare(a, b){ // returns -1, 0, 1 the way spreadsheets compare
  if (isBlank(a)) a = typeof b === "string" ? "" : typeof b === "boolean" ? false : 0;
  if (isBlank(b)) b = typeof a === "string" ? "" : typeof a === "boolean" ? false : 0;
  var ra = typeRank(a), rb = typeRank(b);
  if (ra !== rb) return ra < rb ? -1 : 1;
  if (typeof a === "string"){ var x = a.toLowerCase(), y = b.toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; }
  if (typeof a === "boolean"){ return a === b ? 0 : a ? 1 : -1; }
  var d = a - b; if (Math.abs(d) <= 1e-12 * Math.max(Math.abs(a), Math.abs(b))) return 0;
  return d < 0 ? -1 : 1;
}
FX.compare = compare;

/* ---------- evaluation ---------- */
function Range(sheet, c1, r1, c2, r2){ this.sheet = sheet; this.c1 = c1; this.r1 = r1; this.c2 = c2; this.r2 = r2; }
Range.prototype.rows = function(){ return this.r2 - this.r1 + 1; };
Range.prototype.cols = function(){ return this.c2 - this.c1 + 1; };
Range.prototype.at = function(i, j){ return this.sheet.get(this.c1 + j, this.r1 + i); };
Range.prototype.values = function(){ var out = []; for (var i = 0; i < this.rows(); i++) for (var j = 0; j < this.cols(); j++) out.push(this.at(i, j)); return out; };
Range.prototype.text = function(){ return numToCol(this.c1)+this.r1+":"+numToCol(this.c2)+this.r2; };
FX.Range = Range;

/* Sheet: cells keyed "A1" → {v:value} or {f:formulaText, ast} ; fmt per cell optional */
function Sheet(cells){ this.cells = cells || {}; this.cache = {}; this.visiting = {}; this.maxCol = 26; this.maxRow = 999; }
Sheet.prototype.get = function(c, r){
  if (c < 1 || r < 1) return E("#REF!", "This reference points off the edge of the sheet (above row 1 or left of column A). That usually happens when a formula is copied and a reference moves too far.");
  var a = numToCol(c) + r, cell = this.cells[a];
  if (!cell) return BLANK;
  if (cell.ast === undefined && cell.f === undefined) return cell.v === undefined || cell.v === null || cell.v === "" ? BLANK : cell.v;
  if (a in this.cache) return this.cache[a];
  if (this.visiting[a]) return E("#CIRC", "Circular reference: this formula depends on its own cell (directly or through other cells), so it can never finish calculating.");
  this.visiting[a] = true;
  var v;
  try { var ast = cell.ast || parse(cell.f).ast; v = evaluate(ast, this); if (v instanceof Range) v = v.rows() === 1 && v.cols() === 1 ? v.at(0,0) : E("#VALUE!", "This formula gives a whole range, but a cell can only show one value. Wrap the range in a function such as SUM( ).");
    if (isBlank(v)) v = 0; }
  catch (e){ v = E("#ERROR", e.message); }
  delete this.visiting[a];
  this.cache[a] = v;
  return v;
};
Sheet.prototype.reset = function(){ this.cache = {}; this.visiting = {}; };
FX.Sheet = Sheet;

function evaluate(n, sh){
  switch (n.k){
    case "num": return n.v;
    case "str": return n.v;
    case "bool": return n.v;
    case "errlit": return E(n.v, "This error was typed into the formula.");
    case "missing": return BLANK;
    case "paren": return evaluate(n.x, sh);
    case "ref": return sh.get(n.c, n.r);
    case "range": { var c1 = Math.min(n.a.c, n.b.c), c2 = Math.max(n.a.c, n.b.c), r1 = Math.min(n.a.r, n.b.r), r2 = Math.max(n.a.r, n.b.r); if (c1 < 1 || r1 < 1) return E("#REF!", "This range points off the edge of the sheet."); return new Range(sh, c1, r1, c2, r2); }
    case "name": return E("#NAME?", nameWhy(n.v));
    case "un": { var x = scalar(evaluate(n.x, sh), "op"); if (isErr(x)) return x; if (n.op === "+") return isBlank(x) ? 0 : x; /* a leading + changes nothing, even for text (Excel, Sheets) */ var v = toNum(x); if (isErr(v)) return v; return -v; }
    case "pct": { var y = scalar(evaluate(n.x, sh), "op"); var w = toNum(y); if (isErr(w)) return w; return w / 100; }
    case "bin": return binop(n.op, scalar(evaluate(n.l, sh), "op"), scalar(evaluate(n.r, sh), "op"));
    case "fn": {
      var f = FUNCS[n.name];
      if (!f) return E("#NAME?", unknownFnWhy(n.name));
      if (n.args.length < f.min) return E("#ARGS", (f.argsWhy || n.name+" needs at least "+f.min+" part"+(f.min>1?"s":"")+" inside its brackets") + " ("+f.sig+").");
      if (f.max !== undefined && n.args.length > f.max) return E("#ARGS", n.name+" takes at most "+f.max+" part"+(f.max>1?"s":"")+" ("+f.sig+"). Check your separators and brackets.");
      if (f.lazy) return f.fn(n.args, sh);
      var args = n.args.map(function(a){ return evalR(a, sh); });
      return f.fn(args, sh, n);
    }
  }
  return E("#VALUE!");
}
FX.evaluate = evaluate;
/* inside a function's brackets a single cell reference acts as a 1-cell range (so SUM(B5) ignores text in B5, as spreadsheets do) */
function evalR(n, sh){ if (n.k === "ref"){ if (n.c < 1 || n.r < 1) return E("#REF!", "This reference points off the edge of the sheet."); return new Range(sh, n.c, n.r, n.c, n.r); } return evaluate(n, sh); }
function scalar(v, ctx){
  if (v instanceof Range){
    if (v.rows() === 1 && v.cols() === 1) return v.at(0, 0);
    return E("#VALUE!", "A range like "+v.text()+" holds many values, so it can’t be used directly with "+(ctx === "op" ? "+, -, *, / or &" : "this")+". Use a function such as SUM("+v.text()+"), or point to a single cell.");
  }
  return v;
}
function binop(op, a, b){
  if (isErr(a)) return a; if (isErr(b)) return b;
  if (op === "&"){ return toText(a) + toText(b); }
  if (["=","<>","<",">","<=",">="].indexOf(op) > -1){
    var c = compare(a, b);
    return op === "=" ? c === 0 : op === "<>" ? c !== 0 : op === "<" ? c < 0 : op === ">" ? c > 0 : op === "<=" ? c <= 0 : c >= 0;
  }
  var x = toNum(a); if (isErr(x)) return x;
  var y = toNum(b); if (isErr(y)) return y;
  switch (op){
    case "+": return x + y;
    case "-": return x - y;
    case "*": return x * y;
    case "/": return y === 0 ? E("#DIV/0!", "Dividing by zero (or by an empty cell) has no answer.") : x / y;
    case "^": { if (x === 0 && y < 0) return E("#DIV/0!", "0 to a negative power means dividing by zero."); if (x === 0 && y === 0) return E("#NUM!", "0^0 has no agreed answer: Excel shows #NUM! (Google Sheets and LibreOffice give 1)."); var r = Math.pow(x, y); return isFinite(r) && !isNaN(r) ? r : E("#NUM!", "This power has no real-number answer."); }
  }
}
function nameWhy(w){
  var known = Object.keys(FUNCS), up = w.toUpperCase(), near = nearest(up, known);
  if (FUNCS[up]) return "“"+w+"” is a function name, but there are no brackets after it. Functions always need brackets: "+up+"( ).";
  if (/^(\$?[A-Za-z]{1,3}\$?\d+|\d+)[xX](\$?[A-Za-z]{1,3}\$?\d+|\d+)$/.test(w)) return "To multiply, use * (an asterisk), not the letter x. For example: B2*C2.";
  if (/^[A-Za-z]{1,3}\d+[A-Za-z]/.test(w) || /^[A-Za-z]{4,}\d+$/.test(w)) return "“"+w+"” isn’t a cell address. Cell addresses are a column letter (up to 3 letters) then a row number, like B7.";
  if (/^[A-Za-z]{1,2}$/.test(w)) return "“"+w+"” looks like a column letter, but on its own it isn’t a cell: a cell address needs a row number too, like "+up+"2. (If you’re telling VLOOKUP which column to bring back, give a number counted from the table’s first column: 1, 2, 3…)";
  return "“"+w+"” isn’t a cell, a function or a number. If you meant it as text, put it in straight double quotes: \""+w+"\"."+(near ? " If you meant the function "+near+", add brackets: "+near+"( )." : "");
}
function unknownFnWhy(name){
  var near = nearest(name, Object.keys(FUNCS));
  var tail = near ? " Did you mean "+near+"?" : " Check the spelling. If it’s a real function, this lab may just not run it: each challenge can be solved with the functions it teaches.";
  var en = TRANSLATED[name];
  if (en) return "This lab uses the English function names, so it doesn’t know "+name+". In English that’s "+en+". (When Excel or LibreOffice is set to another language, function names are translated, for example SUMME for SUM in German; Google Sheets does this in some languages too.)";
  return "This lab doesn’t know a function called "+name+"."+tail;
}
var TRANSLATED = {SUMA:"SUM", SUMME:"SUM", SOMME:"SUM", SOMMA:"SUM", SOMA:"SUM", SI:"IF", WENN:"IF", SE:"IF", PROMEDIO:"AVERAGE", MOYENNE:"AVERAGE", MITTELWERT:"AVERAGE", MEDIA:"AVERAGE", "MÉDIA":"AVERAGE", CONTAR:"COUNT", ANZAHL:"COUNT", NB:"COUNT", "CONTAR.SI":"COUNTIF", "NB.SI":"COUNTIF", "CONT.SE":"COUNTIF", "CONTA.SE":"COUNTIF", "SUMAR.SI":"SUMIF", "SOMME.SI":"SUMIF", SUMMEWENN:"SUMIF", "SOMA.SE":"SUMIF", "SOMMA.SE":"SUMIF", BUSCARV:"VLOOKUP", RECHERCHEV:"VLOOKUP", SVERWEIS:"VLOOKUP", PROCV:"VLOOKUP", "CERCA.VERT":"VLOOKUP", BUSCARX:"XLOOKUP", RECHERCHEX:"XLOOKUP", XVERWEIS:"XLOOKUP", PROCX:"XLOOKUP", REDONDEAR:"ROUND", ARRONDI:"ROUND", RUNDEN:"ROUND", ARRED:"ROUND", ARROTONDA:"ROUND", SIERROR:"IFERROR", "SIERREUR":"IFERROR", WENNFEHLER:"IFERROR", "SEERRO":"IFERROR", CONCATENAR:"CONCATENATE", "SUPPRESPACE":"TRIM", ESPACIOS:"TRIM", "ARRUMAR":"TRIM"};
function nearest(w, list){ var lim = w.length <= 4 ? 1 : 2, best = null, bd = lim + 1; list.forEach(function(k){ var d = lev(w, k); if (d < bd){ bd = d; best = k; } }); return bd <= lim ? best : null; }
function lev(a, b){ var m = [], i, j; for (i = 0; i <= a.length; i++){ m[i] = [i]; } for (j = 0; j <= b.length; j++) m[0][j] = j; for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i-1][j]+1, m[i][j-1]+1, m[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)); return m[a.length][b.length]; }

/* ---------- function helpers ---------- */
function flat(args, opts){
  // returns {nums:[], err:Err|null, count fields} following spreadsheet rules:
  // direct arguments: numbers, booleans, numeric text are counted; ranges: only real numbers
  var nums = [], err = null;
  args.forEach(function(a){
    if (err) return;
    if (a instanceof Range){ a.values().forEach(function(v){ if (err) return; if (isErr(v)) err = v; else if (typeof v === "number") nums.push(v); }); }
    else if (isErr(a)) err = a;
    else if (isBlank(a)) { if (opts && opts.blankZero) nums.push(0); }
    else { var x = toNum(a); if (isErr(x)) err = x; else nums.push(x); }
  });
  return {nums:nums, err:err};
}
function def(name, sig, min, max, fn, lazy){ FUNCS[name] = {sig:sig, min:min, max:max, fn:fn, lazy:!!lazy}; }
function oneVal(v){ return scalar(v); }

def("SUM", "SUM(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); return f.err || f.nums.reduce(function(s, x){ return s + x; }, 0); });
def("AVERAGE", "AVERAGE(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); if (f.err) return f.err; if (!f.nums.length) return E("#DIV/0!", "AVERAGE found no numbers to average (empty or text-only cells), so it would divide by zero."); return f.nums.reduce(function(s, x){ return s + x; }, 0) / f.nums.length; });
def("MIN", "MIN(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); return f.err || (f.nums.length ? Math.min.apply(null, f.nums) : 0); });
def("MAX", "MAX(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); return f.err || (f.nums.length ? Math.max.apply(null, f.nums) : 0); });
def("MEDIAN", "MEDIAN(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); if (f.err) return f.err; if (!f.nums.length) return E("#NUM!", "MEDIAN found no numbers."); var s = f.nums.slice().sort(function(x, y){ return x - y; }), m = Math.floor(s.length/2); return s.length % 2 ? s[m] : (s[m-1] + s[m]) / 2; });
def("PRODUCT", "PRODUCT(number1, [number2], …)", 1, 255, function(a){ var f = flat(a); return f.err || (f.nums.length ? f.nums.reduce(function(s, x){ return s * x; }, 1) : 0); });
def("COUNT", "COUNT(value1, [value2], …)", 1, 255, function(a){
  var n = 0;
  a.forEach(function(x){ if (x instanceof Range) x.values().forEach(function(v){ if (typeof v === "number") n++; }); else if (typeof x === "number" || typeof x === "boolean" || (typeof x === "string" && !isErr(toNum(x)))) n++; });
  return n;
});
def("COUNTA", "COUNTA(value1, [value2], …)", 1, 255, function(a){
  var n = 0;
  a.forEach(function(x){ if (x instanceof Range) x.values().forEach(function(v){ if (!isBlank(v)) n++; }); else if (!isBlank(x)) n++; });
  return n;
});
def("COUNTBLANK", "COUNTBLANK(range)", 1, 1, function(a){ if (!(a[0] instanceof Range)) return E("#VALUE!", "COUNTBLANK needs a range of cells, like B2:B9."); return a[0].values().filter(function(v){ return isBlank(v) || v === ""; }).length; });
def("ROUND", "ROUND(number, num_digits)", 2, 2, function(a){ var x = toNum(oneVal(a[0])), d = toNum(oneVal(a[1])); if (isErr(x)) return x; if (isErr(d)) return d; return roundTo(x, d); });
def("ROUNDUP", "ROUNDUP(number, num_digits)", 2, 2, function(a){ var x = toNum(oneVal(a[0])), d = toNum(oneVal(a[1])); if (isErr(x)) return x; if (isErr(d)) return d; return roundTo(x, d, "up"); });
def("ROUNDDOWN", "ROUNDDOWN(number, num_digits)", 2, 2, function(a){ var x = toNum(oneVal(a[0])), d = toNum(oneVal(a[1])); if (isErr(x)) return x; if (isErr(d)) return d; return roundTo(x, d, "down"); });
def("ABS", "ABS(number)", 1, 1, function(a){ var x = toNum(oneVal(a[0])); return isErr(x) ? x : Math.abs(x); });
def("IF", "IF(logical_test, value_if_true, [value_if_false])", 2, 3, function(args, sh){
  var t = scalar(evaluate(args[0], sh)); if (isErr(t)) return t;
  var b = toBool(t); if (isErr(b)) return E("#VALUE!", "IF’s first part must be a test that is TRUE or FALSE, like B2>=50. "+b.why);
  if (b) return args[1].k === "missing" ? 0 : evaluate(args[1], sh);
  if (args.length < 3) return false;
  return args[2].k === "missing" ? 0 : evaluate(args[2], sh);
}, true);
/* the lab's own problem codes (#ARGS, #LAB, #CIRC, #ERROR) stand for formulas a real spreadsheet wouldn't accept at all, so IFERROR mustn't hide them */
function labErr(v){ return isErr(v) && /^#(ARGS|LAB|CIRC|ERROR|SYNTAX)$/.test(v.code); }
def("IFERROR", "IFERROR(value, value_if_error)", 2, 2, function(args, sh){ var v = scalar(evaluate(args[0], sh)); if (labErr(v)) return v; return isErr(v) ? (args[1].k === "missing" ? 0 : evaluate(args[1], sh)) : v; }, true);
def("IFNA", "IFNA(value, value_if_na)", 2, 2, function(args, sh){ var v = scalar(evaluate(args[0], sh)); return isErr(v) && v.code === "#N/A" ? (args[1].k === "missing" ? 0 : evaluate(args[1], sh)) : v; }, true);
def("IFS", "IFS(test1, value1, [test2, value2], …)", 2, 254, function(args, sh){
  if (args.length % 2) return E("#ARGS", "IFS takes pairs: a test, then the value to show if it’s TRUE. One part is missing.");
  for (var i = 0; i < args.length; i += 2){
    var t = scalar(evaluate(args[i], sh)); if (isErr(t)) return t;
    var b = toBool(t); if (isErr(b)) return E("#VALUE!", "Each test in IFS must be TRUE or FALSE, like B2>=50. "+b.why);
    if (b) return args[i+1].k === "missing" ? 0 : evaluate(args[i+1], sh);
  }
  return E("#N/A", "None of the tests in IFS was TRUE, so it has nothing to show. A last pair of TRUE, \"…\" catches everything else.");
}, true);
function logicArgs(a){ var out = [], err = null; a.forEach(function(x){ if (err) return; if (x instanceof Range) x.values().forEach(function(v){ if (isErr(v)) err = v; else if (typeof v === "boolean") out.push(v); else if (typeof v === "number") out.push(v !== 0); }); else { var b = toBool(x); if (isErr(b)) err = b; else out.push(b); } }); return {v:out, err:err}; }
def("AND", "AND(logical1, [logical2], …)", 1, 255, function(a){ var l = logicArgs(a); return l.err || (l.v.length ? l.v.every(Boolean) : E("#VALUE!", "AND found nothing TRUE or FALSE to check.")); });
def("OR", "OR(logical1, [logical2], …)", 1, 255, function(a){ var l = logicArgs(a); return l.err || (l.v.length ? l.v.some(Boolean) : E("#VALUE!", "OR found nothing TRUE or FALSE to check.")); });
def("NOT", "NOT(logical)", 1, 1, function(a){ var b = toBool(oneVal(a[0])); return isErr(b) ? b : !b; });
def("CONCAT", "CONCAT(text1, [text2], …)", 1, 255, function(a){ var s = "", err = null; a.forEach(function(x){ if (err) return; if (x instanceof Range) x.values().forEach(function(v){ if (isErr(v)) err = v; else s += toText(v); }); else { var t = toText(x); if (isErr(t)) err = t; else s += t; } }); return err || s; });
def("CONCATENATE", "CONCATENATE(text1, [text2], …)", 1, 255, function(a){ var s = "", err = null; a.forEach(function(x){ if (err) return; if (x instanceof Range && x.rows()*x.cols() > 1){ err = E("#VALUE!", "CONCATENATE joins single cells, not ranges like "+x.text()+". List the cells one by one, for example CONCATENATE(A2, \" \", B2). (CONCAT accepts a range, but adds nothing between the parts.)"); return; } var t = toText(scalar(x)); if (isErr(t)) err = t; else s += t; }); return err || s; });
def("LEN", "LEN(text)", 1, 1, function(a){ var t = toText(oneVal(a[0])); return isErr(t) ? t : t.length; });
def("UPPER", "UPPER(text)", 1, 1, function(a){ var t = toText(oneVal(a[0])); return isErr(t) ? t : t.toUpperCase(); });
def("LOWER", "LOWER(text)", 1, 1, function(a){ var t = toText(oneVal(a[0])); return isErr(t) ? t : t.toLowerCase(); });
def("TRIM", "TRIM(text)", 1, 1, function(a){ var t = toText(oneVal(a[0])); return isErr(t) ? t : t.replace(/ +/g, " ").replace(/^ | $/g, ""); });
def("LEFT", "LEFT(text, [num_chars])", 1, 2, function(a){ var t = toText(oneVal(a[0])); if (isErr(t)) return t; var n = a.length > 1 ? toNum(oneVal(a[1])) : 1; if (isErr(n)) return n; if (n < 0) return E("#VALUE!", "LEFT can’t take a negative number of characters."); return t.slice(0, Math.floor(n)); });
def("RIGHT", "RIGHT(text, [num_chars])", 1, 2, function(a){ var t = toText(oneVal(a[0])); if (isErr(t)) return t; var n = a.length > 1 ? toNum(oneVal(a[1])) : 1; if (isErr(n)) return n; if (n < 0) return E("#VALUE!", "RIGHT can’t take a negative number of characters."); n = Math.floor(n); return n === 0 ? "" : t.slice(-n); });

["ROUND","ROUNDUP","ROUNDDOWN"].forEach(function(n){ FUNCS[n].argsWhy = n+" needs two parts: the number, then how many decimal places. (Excel insists on both; Google Sheets and LibreOffice assume 0 places if you leave the second out, so giving both works everywhere.)"; });
/* criteria for COUNTIF / SUMIF / AVERAGEIF (and the *IFS versions) */
function criteria(c){
  if (isErr(c)) return function(){ return false; };
  if (typeof c === "number" || typeof c === "boolean") return function(v){ return !isBlank(v) && typeof v === typeof c && compare(v, c) === 0; };
  var s = isBlank(c) ? "" : String(c), m = /^(<=|>=|<>|<|>|=)?([\s\S]*)$/.exec(s), op = m[1] || "=", rest = m[2];
  var num = rest !== "" && !isErr(toNum(rest)) ? toNum(rest) : null;
  var upper = rest.toUpperCase(), boolv = upper === "TRUE" ? true : upper === "FALSE" ? false : null;
  if (op === "=" || op === "<>"){
    var test;
    if (rest === "") test = function(v){ return isBlank(v) || v === ""; };
    else if (num !== null) test = function(v){ return typeof v === "number" && compare(v, num) === 0; };
    else if (boolv !== null) test = function(v){ return typeof v === "boolean" && v === boolv; };
    else { var re = wild(rest); test = function(v){ return typeof v === "string" && re.test(v); }; }
    return op === "=" ? test : function(v){ return !test(v); };
  }
  if (num !== null) return function(v){ if (typeof v !== "number") return false; var k = compare(v, num); return op === "<" ? k < 0 : op === ">" ? k > 0 : op === "<=" ? k <= 0 : k >= 0; };
  return function(v){ if (typeof v !== "string") return false; var k = compare(v, rest); return op === "<" ? k < 0 : op === ">" ? k > 0 : op === "<=" ? k <= 0 : k >= 0; };
}
function wild(p){ var out = "", i; for (i = 0; i < p.length; i++){ var ch = p[i]; if (ch === "~" && i+1 < p.length){ out += esc(p[++i]); } else if (ch === "*") out += "[\\s\\S]*"; else if (ch === "?") out += "[\\s\\S]"; else out += esc(ch); } return new RegExp("^" + out + "$", "i"); }
function esc(c){ return c.replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&"); }
FX.criteria = criteria;
function needRange(x, fn, part){ return x instanceof Range ? null : E("#VALUE!", fn+"’s "+part+" must be a range of cells, like B2:B9."); }
def("COUNTIF", "COUNTIF(range, criteria)", 2, 2, function(a){ var bad = needRange(a[0], "COUNTIF", "first part"); if (bad) return bad; var cv = scalar(a[1]); if (isErr(cv)) return cv; var t = criteria(cv); return a[0].values().filter(function(v){ return !isErr(v) && t(v); }).length; });
function sumifCore(a, avg, fname){
  var bad = needRange(a[0], fname, "first part"); if (bad) return bad;
  var rng = a[0], sr = a.length > 2 && !isBlank(a[2]) ? a[2] : rng;
  if (!(sr instanceof Range)) return E("#VALUE!", fname+"’s third part must be a range of cells, like C2:C9.");
  var cv = scalar(a[1]); if (isErr(cv)) return cv;
  var t = criteria(cv), s = 0, n = 0, err = null;
  for (var i = 0; i < rng.rows(); i++) for (var j = 0; j < rng.cols(); j++){
    var v = rng.at(i, j);
    if (!isErr(v) && t(v)){ var w = sr.sheet.get(sr.c1 + j, sr.r1 + i); if (isErr(w)){ err = err || w; } else if (typeof w === "number"){ s += w; n++; } }
  }
  if (err) return err;
  if (avg) return n ? s / n : E("#DIV/0!", "AVERAGEIF found no matching numbers to average.");
  return s;
}
def("SUMIF", "SUMIF(range, criteria, [sum_range])", 2, 3, function(a){ return sumifCore(a, false, "SUMIF"); });
def("AVERAGEIF", "AVERAGEIF(range, criteria, [average_range])", 2, 3, function(a){ return sumifCore(a, true, "AVERAGEIF"); });
function ifsCore(target, pairs, mode, fname){
  for (var k = 0; k < pairs.length; k++) if (!(pairs[k][0] instanceof Range)) return E("#VALUE!", fname+": every criteria range must be a range of cells."+(fname === "COUNTIFS" ? "" : " Note the order: "+fname+" starts with the range to "+(fname === "SUMIFS" ? "add up" : "average")+", then pairs of (range to check, criteria), e.g. "+fname+"(C2:C9, A2:A9, \"Amara\")."));
  for (k = 0; k < pairs.length; k++){ var cv = scalar(pairs[k][1]); if (isErr(cv)) return cv; }
  var base = target || pairs[0][0];
  for (k = 0; k < pairs.length; k++) if (pairs[k][0].rows() !== base.rows() || pairs[k][0].cols() !== base.cols()) return E("#VALUE!", fname+": all the ranges must be the same size (same number of rows and columns). Check where each range starts and ends.");
  var tests = pairs.map(function(p){ return criteria(scalar(p[1])); }), s = 0, n = 0, err = null;
  for (var i = 0; i < base.rows(); i++) for (var j = 0; j < base.cols(); j++){
    var ok = pairs.every(function(p, q){ var v = p[0].at(i, j); return !isErr(v) && tests[q](v); });
    if (!ok) continue;
    if (mode === "count"){ n++; continue; }
    var w = target.at(i, j); if (isErr(w)) err = err || w; else if (typeof w === "number"){ s += w; n++; }
  }
  if (err) return err;
  return mode === "count" ? n : mode === "avg" ? (n ? s / n : E("#DIV/0!", "AVERAGEIFS found no matching numbers.")) : s;
}
function pairsOf(a, from){ var p = []; for (var i = from; i < a.length; i += 2) p.push([a[i], a[i+1]]); return p; }
def("COUNTIFS", "COUNTIFS(criteria_range1, criteria1, …)", 2, 254, function(a){ if (a.length % 2) return E("#ARGS", "COUNTIFS takes pairs: a range, then its criteria. One part is missing."); return ifsCore(null, pairsOf(a, 0), "count", "COUNTIFS"); });
def("SUMIFS", "SUMIFS(sum_range, criteria_range1, criteria1, …)", 3, 255, function(a){ if (!(a[0] instanceof Range)) return E("#VALUE!", "SUMIFS starts with the range to add up."); if ((a.length - 1) % 2) return E("#ARGS", "After the sum range, SUMIFS takes pairs: a range, then its criteria. One part is missing."); return ifsCore(a[0], pairsOf(a, 1), "sum", "SUMIFS"); });
def("AVERAGEIFS", "AVERAGEIFS(average_range, criteria_range1, criteria1, …)", 3, 255, function(a){ if (!(a[0] instanceof Range)) return E("#VALUE!", "AVERAGEIFS starts with the range to average."); if ((a.length - 1) % 2) return E("#ARGS", "After the average range, AVERAGEIFS takes pairs."); return ifsCore(a[0], pairsOf(a, 1), "avg", "AVERAGEIFS"); });

/* lookups */
def("XLOOKUP", "XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])", 3, 6, function(args, sh){
  var key = scalar(evaluate(args[0], sh)); if (isErr(key)) return key;
  var la = evalR(args[1], sh), ra = evalR(args[2], sh);
  if (!(la instanceof Range) || !(ra instanceof Range)) return E("#VALUE!", "XLOOKUP’s second and third parts must be ranges: where to look, and what to bring back.");
  if (la.rows() > 1 && la.cols() > 1) return E("#VALUE!", "XLOOKUP looks in a single row or column. "+la.text()+" is a block of several rows and columns.");
  var vertical = la.cols() === 1, len = vertical ? la.rows() : la.cols();
  if ((vertical ? ra.rows() : ra.cols()) !== len) return E("#VALUE!", "The lookup range ("+la.text()+") and the return range ("+ra.text()+") must be the same length. Check where each one starts and ends.");
  var mm = args.length > 4 && args[4].k !== "missing" ? toNum(scalar(evaluate(args[4], sh))) : 0;
  var sm = args.length > 5 && args[5].k !== "missing" ? toNum(scalar(evaluate(args[5], sh))) : 1;
  if (isErr(mm)) return E("#VALUE!", "XLOOKUP’s 5th part (match_mode) must be a number: 0, -1, 1 or 2. Text to show when nothing is found goes in the 4th part.");
  if (isErr(sm)) return E("#VALUE!", "XLOOKUP’s 6th part (search_mode) must be a number, such as 1 or -1.");
  if ([0, -1, 1, 2].indexOf(mm) < 0) return E("#VALUE!", "XLOOKUP’s match_mode must be 0, -1, 1 or 2.");
  if ([1, -1].indexOf(sm) < 0) return E("#VALUE!", "This lab supports search_mode 1 (first to last) or -1 (last to first).");
  var test = mm === 2 && typeof key === "string" ? wild(key) : null, found = -1, best = -1;
  for (var q = 0; q < len; q++){
    var i = sm === 1 ? q : len - 1 - q, v = vertical ? la.at(i, 0) : la.at(0, i);
    if (isErr(v) || isBlank(v)) continue;
    if (test ? (typeof v === "string" && test.test(v)) : typeTarget(v, key) && compare(v, key) === 0){ found = i; break; }
    if (mm === -1 && typeTarget(v, key) && compare(v, key) < 0 && (best < 0 || compare(v, vertical ? la.at(best, 0) : la.at(0, best)) > 0)) best = i;
    if (mm === 1 && typeTarget(v, key) && compare(v, key) > 0 && (best < 0 || compare(v, vertical ? la.at(best, 0) : la.at(0, best)) < 0)) best = i;
  }
  if (found < 0 && (mm === -1 || mm === 1)) found = best;
  if (found < 0){ if (args.length > 3 && args[3].k !== "missing") return evaluate(args[3], sh); return E("#N/A", "XLOOKUP didn’t find "+quoteVal(key)+" in "+la.text()+". Check spelling, extra spaces, or numbers stored as text."); }
  var out = vertical ? (ra.cols() === 1 ? ra.at(found, 0) : null) : (ra.rows() === 1 ? ra.at(0, found) : null);
  if (out === null) return E("#VALUE!", "This lab’s XLOOKUP returns one value, so the return range should be a single column (or row).");
  return isBlank(out) ? 0 : out;
}, true);
function typeTarget(v, key){ return typeof v === typeof key || (typeof key === "number" && typeof v === "number"); }
function quoteVal(v){ return typeof v === "string" ? "“"+v+"”" : toText(v); }
def("VLOOKUP", "VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])", 3, 4, function(args, sh){
  var key = scalar(evaluate(args[0], sh)); if (isErr(key)) return key;
  var t = evalR(args[1], sh); if (!(t instanceof Range)) return E("#VALUE!", "VLOOKUP’s second part must be the whole table, as a range like A2:C9.");
  var ci = toNum(scalar(evaluate(args[2], sh))); if (isErr(ci)) return ci; ci = Math.floor(ci);
  if (ci < 1) return E("#VALUE!", "VLOOKUP’s column number counts from 1 (the first column of the table).");
  if (ci > t.cols()) return E("#REF!", "Column "+ci+" doesn’t exist: the table "+t.text()+" only has "+t.cols()+" column"+(t.cols()>1?"s":"")+". Count columns from the table’s first column, starting at 1.");
  var approx = true;
  if (args.length > 3 && args[3].k !== "missing"){ var b = toBool(scalar(evaluate(args[3], sh))); if (isErr(b)) return b; approx = b; }
  else if (args.length > 3) approx = false; // VLOOKUP(a,b,c,) with an empty last part means FALSE in Excel
  var row = -1;
  if (!approx){ var wre = typeof key === "string" && /[*?~]/.test(key) ? wild(key) : null; /* exact match understands * ? ~ wildcards for text, as in Excel */
    for (var i = 0; i < t.rows(); i++){ var v = t.at(i, 0); if (!isErr(v) && !isBlank(v) && (wre ? typeof v === "string" && wre.test(v) : typeTarget(v, key) && compare(v, key) === 0)){ row = i; break; } } }
  else {
    // approximate match: binary search, as spreadsheets do; assumes the first column is sorted ascending
    var lo = 0, hi = t.rows() - 1;
    while (lo <= hi){ var mid = (lo + hi) >> 1, mv = t.at(mid, 0); if (isBlank(mv) || isErr(mv) || !typeTarget(mv, key)) { hi = mid - 1; continue; } if (compare(mv, key) <= 0){ row = mid; lo = mid + 1; } else hi = mid - 1; }
  }
  if (row < 0) return E("#N/A", "VLOOKUP didn’t find "+quoteVal(key)+" in the first column of "+t.text()+"."+(approx ? "" : " Check spelling, extra spaces, or numbers stored as text."));
  var out = t.at(row, ci - 1);
  return isBlank(out) ? 0 : out;
}, true);

def("MATCH", "MATCH(lookup_value, lookup_array, [match_type])", 2, 3, function(args, sh){
  var key = scalar(evaluate(args[0], sh)); if (isErr(key)) return key;
  var la = evalR(args[1], sh); if (!(la instanceof Range)) return E("#N/A", "MATCH’s second part must be a range of cells, like A2:A9.");
  if (la.rows() > 1 && la.cols() > 1) return E("#N/A", "MATCH looks in a single row or column. "+la.text()+" is a block of several rows and columns.");
  var mt = args.length > 2 ? toNum(scalar(evaluate(args[2], sh))) : 1; if (isErr(mt)) return mt; mt = mt > 0 ? 1 : mt < 0 ? -1 : 0;
  var vals = la.values(), found = -1, i;
  if (mt === 0){ var wre = typeof key === "string" && /[*?~]/.test(key) ? wild(key) : null; for (i = 0; i < vals.length; i++){ var v = vals[i]; if (!isErr(v) && !isBlank(v) && (wre ? typeof v === "string" && wre.test(v) : typeTarget(v, key) && compare(v, key) === 0)){ found = i; break; } } }
  else { for (i = 0; i < vals.length; i++){ var w = vals[i]; if (isErr(w) || isBlank(w) || !typeTarget(w, key)) continue; var c = compare(w, key); if (mt === 1 ? c <= 0 : c >= 0) found = i; else break; } }
  if (found < 0) return E("#N/A", "MATCH didn’t find "+quoteVal(key)+" in "+la.text()+"."+(mt === 0 ? " Check spelling, extra spaces, or numbers stored as text." : ""));
  return found + 1;
}, true);
def("INDEX", "INDEX(array, row_num, [column_num])", 2, 3, function(args, sh){
  var r = evalR(args[0], sh); if (isErr(r)) return r; if (!(r instanceof Range)) return E("#VALUE!", "INDEX’s first part must be a range of cells.");
  var i = args[1].k === "missing" ? 0 : toNum(scalar(evaluate(args[1], sh))); if (isErr(i)) return i;
  var j = args.length > 2 && args[2].k !== "missing" ? toNum(scalar(evaluate(args[2], sh))) : 0; if (isErr(j)) return j;
  i = Math.floor(i); j = Math.floor(j);
  if (r.rows() === 1 && args.length < 3){ j = i; i = 1; }
  if (r.cols() === 1 && j === 0) j = 1;
  if (i < 1 || j < 1) return E("#LAB", "This lab’s INDEX returns one cell, so give both a row and (for a block) a column number from 1.");
  if (i > r.rows() || j > r.cols()) return E("#REF!", "INDEX was asked for row "+i+(r.cols() > 1 ? ", column "+j : "")+", but "+r.text()+" isn’t that big.");
  var out = r.at(i - 1, j - 1); return isBlank(out) ? 0 : out;
}, true);
def("DAYS", "DAYS(end_date, start_date)", 2, 2, function(a){ var e = toNum(oneVal(a[0])), s = toNum(oneVal(a[1])); if (isErr(e)) return e; if (isErr(s)) return s; return Math.floor(e) - Math.floor(s); });
def("DATEDIF", "DATEDIF(start_date, end_date, unit)", 3, 3, function(a){
  var s = toNum(oneVal(a[0])), e = toNum(oneVal(a[1])), u = toText(oneVal(a[2])); if (isErr(s)) return s; if (isErr(e)) return e; if (isErr(u)) return u;
  s = Math.floor(s); e = Math.floor(e); u = u.toUpperCase();
  if (s > e) return E("#NUM!", "DATEDIF needs the earlier date first: DATEDIF(start, end, unit).");
  if (u === "D") return e - s;
  if (u === "M" || u === "Y"){ var A = new Date(Date.UTC(1899, 11, 30) + s*86400000), B = new Date(Date.UTC(1899, 11, 30) + e*86400000); var m = (B.getUTCFullYear() - A.getUTCFullYear())*12 + B.getUTCMonth() - A.getUTCMonth() - (B.getUTCDate() < A.getUTCDate() ? 1 : 0); return u === "M" ? m : Math.floor(m / 12); }
  if (/^(MD|YM|YD)$/.test(u)) return E("#LAB", "This lab runs DATEDIF with \"D\", \"M\" or \"Y\" only.");
  return E("#NUM!", "DATEDIF’s unit must be one of \"D\", \"M\", \"Y\", \"MD\", \"YM\" or \"YD\".");
});

/* functions this lab knows exist but doesn't run: give a clear message instead of #NAME? */
["FILTER","UNIQUE","SORT","SEQUENCE","LET","LAMBDA","HLOOKUP","XMATCH","MAXIFS","MINIFS","COUNTUNIQUE","AVERAGEA","ISBLANK","ISNUMBER","ISTEXT","ISERROR","INT","MOD","TRUNC","YEAR","MONTH","DAY","WEEKDAY","NETWORKDAYS","EDATE","EOMONTH","PROPER","CHOOSE","SUBTOTAL","SPLIT","JOIN","TEXTBEFORE","TEXTAFTER","TODAY","NOW","RAND","RANDBETWEEN","INDIRECT","OFFSET","SUMPRODUCT","TEXT","VALUE","DATE","SWITCH","TEXTJOIN","SUBSTITUTE","FIND","SEARCH","MID","QUERY","ARRAYFORMULA","IMPORTRANGE","STDEV","STDEV.S","MODE"].forEach(function(n){
  FUNCS[n] = {sig:n+"( … )", min:0, fn:function(){ return E("#LAB", n+" is a real function, but this lab doesn’t run it yet. This challenge can be solved with the functions it teaches."); }};
});

/* ---------- one-shot helper for tests and the lab ---------- */
FX.calc = function(formula, cells){
  var sh = new Sheet(cells || {});
  try { var p = parse(formula); var v = evaluate(p.ast, sh); if (v instanceof Range) v = v.rows() === 1 && v.cols() === 1 ? v.at(0, 0) : E("#VALUE!", "This formula gives a whole range."); return isBlank(v) ? 0 : v; }
  catch (e){ if (e.fx) return E("#SYNTAX", e.message); throw e; }
};
FX.isErr = isErr; FX.isBlank = isBlank;

if (typeof module !== "undefined" && module.exports) module.exports = FX;
else root.FX = FX;
})(this);
