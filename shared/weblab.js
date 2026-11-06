/* IT CHICK Academy · Web Lab checker (browser only)
   The learner's HTML/CSS/JS runs in a real (sandboxed, same-origin) iframe. Checks look at what the browser
   actually built: the DOM, computed styles, layout, and what happens after clicks and typing. So any correct
   way of writing the code passes. Before running checks, lints explain syntax problems with line numbers. */
(function(root){
"use strict";
var WL = {};

/* ---------- building the page ---------- */
/* :where() keeps these defaults at zero specificity, so any learner rule (html, :root, body, *) overrides them */
var BASE_CSS = ":where(html){font-family:system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.45;color:#222}:where(body){margin:12px;background:#fff}:where(img){max-width:100%}";
var PRELUDE = "window.__errs=[];window.__logs=[];window.addEventListener('error',function(e){window.__errs.push({msg:String(e.message||e),line:e.lineno||0,col:e.colno||0});});" +
  "(function(){var L=console.log;console.log=function(){try{window.__logs.push([].map.call(arguments,function(a){try{return typeof a==='string'?a:JSON.stringify(a);}catch(x){return String(a);}}).join(' '));}catch(x){}return L.apply(console,arguments);};})();" +
  "window.alert=function(m){window.__logs.push('alert: '+m);};window.confirm=function(){return true;};window.prompt=function(){return '';};" +
  "document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(a){e.preventDefault();window.__logs.push('link: '+a.getAttribute('href'));}},true);" +
  "document.addEventListener('submit',function(e){e.preventDefault();window.__logs.push('form submitted');},true);";
WL.buildDoc = function(ch, code){
  var html = code.html != null ? code.html : (ch.fixed && ch.fixed.html) || "";
  var css = code.css != null ? code.css : (ch.fixed && ch.fixed.css) || "";
  var js = code.js != null ? code.js : (ch.fixed && ch.fixed.js) || "";
  // never run code that would loop forever (it would freeze the whole tab); check() explains why
  if (code.js != null && WL.loopRisk(js)) js = "";
  if (code.html != null && scriptLoopRisk(html)) html = html.replace(/<script\b/gi, '<script type="text/plain"');
  var head = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n<style>' + BASE_CSS + '</style>\n<style>\n' + css + '\n</style>\n<script>' + PRELUDE + '<\/script>\n</head><body>\n';
  var before = head + html + '\n<script>\n';
  var doc = before + js + '\n<\/script>\n</body></html>';
  return {doc:doc, jsLine:before.split("\n").length};
};

/* ---------- helpers ---------- */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function lineOf(src, idx){ return src.slice(0, idx).split("\n").length; }
function lev(a, b){ var m = [], i, j; for (i = 0; i <= a.length; i++) m[i] = [i]; for (j = 0; j <= b.length; j++) m[0][j] = j; for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i-1][j]+1, m[i][j-1]+1, m[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)); return m[a.length][b.length]; }
function nearest(w, list, max){ var best = null, bd = (max || 2) + 1; list.forEach(function(k){ var d = lev(w, k); if (d < bd){ bd = d; best = k; } }); return best; }
WL.esc = esc;

/* ---------- HTML lint ---------- */
var VOID = "area base br col embed hr img input link meta source track wbr".split(" ");
var KNOWN = ("a abbr address area article aside audio b base bdi bdo blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd label legend li link main map mark menu meta meter nav noscript object ol optgroup option output p picture pre progress q rp rt ruby s samp script search section select slot small source span strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track u ul var video wbr svg math").split(" ");
var OLD = {center:"Use CSS instead: text-align:center (for text) or margin:auto / flexbox (for boxes).", font:"Use CSS instead: color, font-family and font-size.", marquee:"Don’t use it in new pages (moving text is also hard for many people to read).", blink:"Browsers dropped it long ago.", big:"Use CSS font-size instead.", tt:"Use <code> instead.", strike:"Use <s> or <del> instead.", frame:"Frames are obsolete.", frameset:"Frames are obsolete.", acronym:"Use <abbr> instead."};
var IMPLIED_END = {p:1, li:1, dt:1, dd:1, tr:1, td:1, th:1, option:1, thead:1, tbody:1, tfoot:1, colgroup:1, rt:1, rp:1, optgroup:1};
var RAWTEXT = {script:1, style:1, textarea:1, title:1};
var BOOL_ATTRS = "allowfullscreen async autofocus autoplay checked contenteditable controls default defer disabled download formnovalidate hidden inert ismap itemscope loop multiple muted nomodule novalidate open playsinline popover readonly required reversed selected".split(" ");
WL.lintHTML = function(src){
  var out = [], stack = [], i = 0, s = src, curly = false;
  while (i < s.length){
    var lt = s.indexOf("<", i);
    if (lt < 0) break;
    if (s.startsWith("<!--", lt)){ var ce = s.indexOf("-->", lt + 4); if (ce < 0){ out.push({line:lineOf(s, lt), msg:"A comment starts with <!-- but never ends. Close it with -->."}); break; } i = ce + 3; continue; }
    if (/^<!doctype/i.test(s.slice(lt, lt + 9))){ i = s.indexOf(">", lt) + 1 || s.length; continue; }
    var m = /^<(\/?)([a-zA-Z][a-zA-Z0-9-]*)/.exec(s.slice(lt));
    if (!m){ if (/^<\s/.test(s.slice(lt)) || /^<\//.test(s.slice(lt))) out.push({line:lineOf(s, lt), msg:"There’s a “<” that doesn’t start a tag. If you mean the less-than sign as text, write &lt; instead."}); i = lt + 1; continue; }
    // find end of tag, respecting quotes
    var j = lt + m[0].length, q = null, bad = false;
    while (j < s.length){ var c = s[j]; if (q){ if (c === q) q = null; } else if (c === '"' || c === "'") q = c; else if (c === ">") break; else if (c === "<"){ bad = true; break; } j++; }
    var name = m[2].toLowerCase(), closing = !!m[1], tagText = s.slice(lt, j + 1);
    if (j >= s.length || bad){ out.push({line:lineOf(s, lt), msg:"The tag <"+(closing ? "/" : "")+m[2]+" is never closed with “>”."+(q ? " (A quote inside it is also never closed.)" : "")}); i = j; if (j >= s.length) break; continue; }
    if (q){ out.push({line:lineOf(s, lt), msg:"In <"+m[2]+">, a quote mark around an attribute value is opened but not closed."}); }
    i = j + 1;
    // inside <svg> or <math> the element names come from SVG/MathML, and <x/> really does close itself
    var foreign = stack.some(function(x){ return x.name === "svg" || x.name === "math"; });
    if (!curly && /[“”]/.test(tagText)){ curly = true; out.push({line:lineOf(s, lt), msg:"Curly quotes (“ ”) in a tag. HTML attributes need straight quotes (\"). Phones and word processors often swap them in: retype them."}); }
    if (!closing && !foreign && KNOWN.indexOf(name) < 0 && name.indexOf("-") < 0){
      var tip = OLD[name] ? "<"+name+"> is obsolete HTML: it may still work, but it’s no longer part of the language. "+OLD[name] : "There’s no <"+name+"> element in HTML."+(nearest(name, KNOWN) ? " Did you mean <"+nearest(name, KNOWN)+">?" : name === "heading" ? " Headings are <h1> to <h6>; a page header is <header>." : "");
      out.push({line:lineOf(s, lt), msg:tip, soft:!!OLD[name]});
    }
    if (!closing){
      // attributes: an unquoted value followed by more words (a value with spaces needs quotes)
      var attrs = tagText.replace(/^<[a-zA-Z0-9-]+/, "").replace(/\/?>$/, "").replace(/"[^"]*"|'[^']*'/g, '""');
      var am = /([a-zA-Z-]+)\s*=\s*([^"'\s>]+)\s+([^\s=>"'\/]+)(?=\s|$)/.exec(attrs);
      if (am && BOOL_ATTRS.indexOf(am[3].toLowerCase()) < 0 && !/^(data|aria)-/i.test(am[3])) out.push({line:lineOf(s, lt), msg:"In <"+m[2]+">, the value of "+am[1]+" has a space but no quotes, so the browser stops reading at the space. Put the value in quotes: "+am[1]+"=\""+am[2]+" "+am[3]+"…\""+(/\.(jpe?g|png|gif|webp|svg|html?)$/i.test(am[3]) ? " (and ideally avoid spaces in file names)." : ".")});
      if (RAWTEXT[name] && !foreign){ var endTag = s.toLowerCase().indexOf("</" + name, i); if (endTag < 0){ out.push({line:lineOf(s, lt), msg:"<"+name+"> is never closed. Add </"+name+">."}); i = s.length; } else i = (s.indexOf(">", endTag) + 1) || s.length; continue; }
      if (VOID.indexOf(name) > -1) continue;
      if (/\/>$/.test(tagText)){ if (!foreign) out.push({line:lineOf(s, lt), msg:"<"+name+"/> doesn’t close itself in HTML: the browser ignores the slash, so the <"+name+"> stays open. Write <"+name+"></"+name+"> instead. (Only empty elements like <br> and <img> work without a closing tag.)", soft:true}); continue; }
      var parentName = stack.length ? stack[stack.length-1].name : "";
      if (parentName !== "template" && !foreign){
      if ((name === "td" || name === "th") && ["tr","td","th"].indexOf(parentName) < 0) out.push({line:lineOf(s, lt), msg:"<"+name+"> is a table cell, so it must sit inside a row: <tr><"+name+">…</"+name+"></tr>. Is a <tr> missing?"});
      if (name === "tr" && ["table","thead","tbody","tfoot","tr","td","th"].indexOf(parentName) < 0) out.push({line:lineOf(s, lt), msg:"<tr> (a table row) must be inside a <table>."});
      if (name === "li" && ["ul","ol","menu","li"].indexOf(parentName) < 0) out.push({line:lineOf(s, lt), msg:"<li> (a list item) must be inside a <ul> or <ol>."});
      }
      if (IMPLIED_END[name] && stack.length && stack[stack.length-1].name === name && (name === "li" || name === "p" || name === "td" || name === "th" || name === "tr" || name === "option" || name === "dt" || name === "dd")){ stack.pop(); }
      stack.push({name:name, line:lineOf(s, lt)});
    } else {
      if (VOID.indexOf(name) > -1){ out.push({line:lineOf(s, lt), msg:"<"+name+"> is an empty (void) element: it has no closing tag. Remove </"+name+">.", soft:true}); continue; }
      var top = stack.length ? stack[stack.length-1] : null;
      if (top && top.name === name){ stack.pop(); continue; }
      var deeper = -1; for (var d = stack.length - 1; d >= 0; d--) if (stack[d].name === name){ deeper = d; break; }
      if (deeper < 0){ out.push({line:lineOf(s, lt), msg:"</"+m[2]+"> closes an element that was never opened"+(top ? " (the open element here is <"+top.name+">)" : "")+". Remove it, or check the opening tag’s spelling."}); continue; }
      // misnested: inner elements not closed before closing outer
      var inner = stack.slice(deeper + 1).filter(function(x){ return !IMPLIED_END[x.name]; });
      if (inner.length){ var x = inner[inner.length-1]; out.push({line:lineOf(s, lt), msg:"</"+m[2]+"> closes <"+name+"> while <"+x.name+"> (opened on line "+x.line+") is still open inside it. Close tags in reverse order: last opened, first closed, like </"+x.name+"></"+name+">."}); }
      stack.length = deeper;
    }
  }
  stack.filter(function(x){ return !IMPLIED_END[x.name] && ["html","head","body"].indexOf(x.name) < 0; }).forEach(function(x){ out.push({line:x.line, msg:"<"+x.name+"> (line "+x.line+") is opened but never closed. Add </"+x.name+"> where it should end."}); });
  return out;
};

/* ---------- CSS lint ---------- */
var CSS_PROPS = null;
function propList(win){
  if (CSS_PROPS) return CSS_PROPS;
  var cs = win.getComputedStyle(win.document.documentElement), list = [];
  for (var k = 0; k < cs.length; k++) list.push(cs[k]);
  "margin padding border border-top border-right border-bottom border-left border-radius border-color border-width border-style background font flex flex-flow grid grid-template grid-area grid-column grid-row gap inset outline list-style transition animation overflow place-items place-content text-decoration columns".split(" ").forEach(function(p){ if (list.indexOf(p) < 0) list.push(p); });
  CSS_PROPS = list; return list;
}
/* Native CSS nesting (.menu { li { … } }) is valid in current browsers. When the braces balance, nested rules are
   flattened (their selector blanked, their braces turned into ;) so their declarations are still checked, line for line.
   When braces don't balance, nesting is far more likely a forgotten "}", so the old messages apply. */
function flattenNesting(s){
  var d = 0, i, c;
  for (i = 0; i < s.length; i++){ c = s[i]; if (c === "{") d++; else if (c === "}"){ d--; if (d < 0) return s; } }
  if (d !== 0) return s;
  var a = s.split(""), stack = [], last = 0;
  for (i = 0; i < s.length; i++){
    c = s[i];
    if (c === "{"){
      var parent = stack[stack.length - 1], prelude = s.slice(last, i);
      if (parent === "style" || parent === "nested"){ for (var k = last; k < i; k++) if (a[k] !== "\n") a[k] = " "; a[i] = ";"; stack.push("nested"); }
      else stack.push(/^\s*@(media|supports|layer|container|scope|document|starting-style)\b/i.test(prelude) ? "group" : "style");
      last = i + 1;
    } else if (c === "}"){ if (stack.pop() === "nested") a[i] = ";"; last = i + 1; }
    else if (c === ";") last = i + 1;
  }
  return a.join("");
}
var MEDIA_FEATURES = "width min-width max-width height min-height max-height aspect-ratio min-aspect-ratio max-aspect-ratio orientation resolution min-resolution max-resolution hover any-hover pointer any-pointer prefers-color-scheme prefers-reduced-motion prefers-contrast prefers-reduced-transparency prefers-reduced-data forced-colors inverted-colors color min-color max-color color-gamut color-index monochrome display-mode scripting update overflow-block overflow-inline dynamic-range video-dynamic-range device-width min-device-width max-device-width device-height min-device-height max-device-height device-aspect-ratio grid".split(" ");
function mediaHint(q){
  var g, re = /\(([^()]*)\)/g;
  while ((g = re.exec(q))){
    var t = g[1].trim(); if (/[<>]/.test(t)) continue;
    if (/=/.test(t) && t.indexOf(":") < 0) return " Inside the brackets, use a colon:  ("+t.replace(/\s*=\s*/, ": ")+")";
    var mm = /^([a-z-]+)\s*(?::\s*(.+))?$/i.exec(t); if (!mm || /^-/.test(mm[1])) continue;
    var name = mm[1].toLowerCase(), val = (mm[2] || "").trim();
    if (MEDIA_FEATURES.indexOf(name) < 0){ var n = nearest(name, MEDIA_FEATURES, 3); return " “"+mm[1]+"” isn’t a media feature."+(n ? " Did you mean “"+n+"”?" : ""); }
    if (/width|height/.test(name) && /^\d*\.?\d+$/.test(val) && parseFloat(val) !== 0) return " "+val+" needs a unit:  ("+name+": "+val+"px)";
    if (/^\d*\.?\d+\s+[a-z%]+$/i.test(val)) return " Don’t put a space between the number and the unit: "+val.replace(/\s+/, "")+".";
  }
  return "";
}
WL.lintCSS = function(src, win, doc){
  var out = [], s = flattenNesting(src.replace(/\/\*[\s\S]*?\*\//g, function(c){ return c.replace(/[^\n]/g, " "); }));
  var noStr = s.replace(/"[^"\n]*"|'[^'\n]*'/g, function(c){ return c.replace(/./g, " "); });
  if (/[“”‘’]/.test(noStr)){ var k = noStr.search(/[“”‘’]/); out.push({line:lineOf(s, k), msg:"Curly quotes found. CSS needs straight quotes (\" or ')."}); }
  if (/\/\*/.test(s)){ out.push({line:lineOf(s, s.indexOf("/*")), msg:"A comment starts with /* but never ends. Close it with */."}); return out; }
  var depth = 0, start = 0, i, sel = null, selStart = 0, rules = [];
  for (i = 0; i < s.length; i++){
    var c = s[i];
    if (c === "{"){
      if (depth === 0){ sel = s.slice(start, i); selStart = start; start = i + 1; }
      else if (depth === 1 && !/^\s*@/.test(sel)){ out.push({line:lineOf(s, i), msg:"A “{” opens inside a rule that hasn’t been closed. Is a “}” missing before this line?"}); }
      depth++;
    } else if (c === "}"){
      if (depth === 0){ out.push({line:lineOf(s, i), msg:"There’s a “}” with no matching “{”. Is a “{” missing after the selector above it? (Or remove the extra “}”.)"}); start = i + 1; continue; }
      depth--;
      if (depth === 0){ rules.push({sel:sel, selLine:lineOf(s, selStart + (sel.length - sel.replace(/^\s+/, "").length)), body:s.slice(start, i), bodyStart:start}); start = i + 1; }
      else if (depth === 1 && /^\s*@/.test(sel)) { /* nested rule in @media: handled by recursion below */ }
    }
  }
  if (depth > 0) out.push({line:lineOf(s, s.length), msg:"A “{” is never closed. Add “}” at the end of the rule."});
  var stray = s.slice(start).trim(); if (depth === 0 && stray && !/^@import|^@charset/.test(stray)) out.push({line:lineOf(s, start + s.slice(start).search(/\S/)), msg:"“"+stray.slice(0, 30)+"” is outside any rule. CSS goes inside { } after a selector, like  h1 { color: red; }"});
  rules.forEach(function(r){
    var selector = r.sel.trim();
    if (/^@media/i.test(selector)){
      var sub = WL.lintCSS(r.body, win, doc); sub.forEach(function(x){ x.line += lineOf(s, r.bodyStart) - 1; out.push(x); });
      var mq = selector.replace(/^@media\s*/i, ""), mh = mediaHint(mq), bad = false;
      try { bad = !win.matchMedia(mq).media || win.matchMedia(mq).media === "not all"; } catch (e){}
      if (bad || mh) out.push({line:r.selLine, msg:"The media query “"+selector+"” isn’t valid."+(mh || " A typical one looks like  @media (max-width: 600px) { … }")});
      return;
    }
    if (/^@/.test(selector)) return;
    if (!selector){ out.push({line:r.selLine, msg:"A rule has no selector before “{”. Say what to style, like  p { … }  or  .note { … }"}); }
    else {
      var valid = true;
      try { doc.querySelector(selector); } catch (e){ valid = false; out.push({line:r.selLine, msg:"The selector “"+selector.replace(/\s+/g, " ").slice(0, 60)+"” isn’t valid CSS."+(/[^\s,>+~]\s*[{;]/.test(selector) || /;/.test(selector) ? " Is a “}” missing from the rule above?" : / \.\s/.test(selector) || /\.\s/.test(selector) ? " There’s a space after the dot: a class selector is written .name with no space." : /^#\d/.test(selector) ? " IDs used as selectors can’t start with a digit." : "")}); }
      if (valid && !/:(hover|focus|active|visited|focus-visible|focus-within|checked|disabled|enabled|target|valid|invalid|user-valid|user-invalid|placeholder-shown|required|optional|open)|::?(before|after|placeholder|marker|selection|first-line|first-letter|backdrop|file-selector-button)/.test(selector)){
        try { if (!doc.querySelector(selector)) out.push({line:r.selLine, msg:"The selector “"+selector+"” doesn’t match anything in the HTML."+classHint(selector, doc), soft:true}); } catch (e){}
      }
    }
    // declarations
    var body = r.body, decls = [], par = 0, inq = null, buf = "", bstart = 0;
    for (var t = 0; t <= body.length; t++){ var ch = body[t]; if (inq){ if (ch === inq) inq = null; buf += ch; continue; } if (ch === '"' || ch === "'"){ inq = ch; buf += ch; continue; } if (ch === "(") par++; else if (ch === ")") par--; if ((ch === ";" && par <= 0) || t === body.length){ par = 0; if (buf.trim()) decls.push({text:buf, at:bstart}); buf = ""; bstart = t + 1; } else { if (!buf) bstart = t; buf += ch; } }
    decls.forEach(function(d){
      var line = lineOf(s, r.bodyStart + d.at + (d.text.length - d.text.replace(/^\s+/, "").length)), txt = d.text.trim();
      var colon = txt.indexOf(":");
      if (colon < 0){
        if (/=/.test(txt)) out.push({line:line, msg:"“"+txt+"” uses “=”. In CSS, a property and its value are joined with a colon:  "+txt.replace(/\s*=\s*/, ": ")+";"});
        else out.push({line:line, msg:"“"+txt+"” is missing a colon. Write it as  property: value;  for example  color: navy;"});
        return;
      }
      var prop = txt.slice(0, colon).trim(), val = txt.slice(colon + 1).trim();
      if (/\n/.test(val) && /^[\s\S]*\n\s*[a-z-]+\s*:/i.test(val)){ var nl = val.split("\n"); out.push({line:line, msg:"The line with “"+prop+": "+nl[0].trim()+"” has no semicolon at the end, so the next line is read as part of its value and both are ignored. Add “;” after "+nl[0].trim()+"."}); return; }
      if (!prop){ out.push({line:line, msg:"A declaration is missing its property name before the colon."}); return; }
      if (/^--/.test(prop)) return;
      if (!win.CSS.supports(prop, "inherit")){ var near = nearest(prop.toLowerCase(), propList(win), 3); out.push({line:line, msg:"“"+prop+"” isn’t a CSS property."+(prop.toLowerCase() === "colour" ? " CSS uses American spelling: color." : /^(font|text)-colou?r$/i.test(prop) ? " The property for text colour is just  color: …;" : near ? " Did you mean “"+near+"”?" : "")}); return; }
      var v = val.replace(/\s*!important\s*$/i, "");
      if (!v){ out.push({line:line, msg:"“"+prop+"” has no value after the colon."}); return; }
      if (!win.CSS.supports(prop, v)) out.push({line:line, msg:"“"+v+"” isn’t a valid value for "+prop+"."+valueHint(prop, v)});
    });
  });
  return out;
};
function classHint(sel, doc){
  var m = /\.([a-zA-Z0-9_-]+)/.exec(sel) || /#([a-zA-Z0-9_-]+)/.exec(sel);
  if (!m) return /^[a-z]+[1-6]?$/.test(sel) ? " There’s no <"+sel+"> element in this page." : "";
  var isClass = sel.indexOf("." + m[1]) > -1, all = [];
  doc.querySelectorAll(isClass ? "[class]" : "[id]").forEach(function(e){ (isClass ? Array.prototype.slice.call(e.classList) : [e.id]).forEach(function(c){ if (all.indexOf(c) < 0) all.push(c); }); });
  var n = nearest(m[1], all, 3);
  return n ? " The HTML has "+(isClass ? "class=\""+n+"\"" : "id=\""+n+"\"")+": did you mean "+(isClass ? "." : "#")+n+"? (Names must match exactly, including capitals.)" : (isClass && doc.getElementById(m[1]) ? " The HTML has an id=\""+m[1]+"\": for ids, use #"+m[1]+" instead of ."+m[1]+"." : !isClass && doc.querySelector("."+m[1]) ? " The HTML has class=\""+m[1]+"\": for classes, use ."+m[1]+" instead of #"+m[1]+"." : /^[a-z]+[1-6]?$/i.test(m[1]) && sel.trim() === (isClass ? "." : "#") + m[1] && doc.querySelector(m[1]) ? " To style every <"+m[1].toLowerCase()+"> element, write just "+m[1].toLowerCase()+", with no "+(isClass ? "dot" : "#")+" in front." : "");
}
function valueHint(prop, v){
  if (/^\d+(\.\d+)?$/.test(v) && v !== "0" && /(width|height|size|margin|padding|gap|top|left|right|bottom|radius|indent)/.test(prop)) return " Lengths need a unit, like "+v+"px or "+v+"rem (only 0 can go without one).";
  if (/^\d*\.?\d+\s+(px|rem|em|%|vh|vw|fr)$/.test(v)) return " Don’t put a space between the number and the unit: "+v.replace(/\s+/, "")+".";
  if (/^[0-9a-f]{3,8}$/i.test(v) && /color|background/.test(prop)) return " Hex colours start with #: #"+v+".";
  if (/^#/.test(v) && !/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) return " Hex colours have 3 or 6 digits from 0–9 and a–f, like #c0392b.";
  if (/^center$/i.test(v) && /^(align|justify)-content$/.test(prop)) return "";
  if (prop === "display" && /^flexbox$/i.test(v)) return " The value is flex:  display: flex;";
  if (/,/.test(v) && /^(margin|padding)$/.test(prop)) return " Separate the sides with spaces, not commas:  "+prop+": "+v.replace(/\s*,\s*/g, " ")+";";
  return "";
}

/* ---------- JS lint (static hints) ---------- */
/* blanks out comments and the insides of strings (keeping line breaks), so hints only look at real code */
function stripJS(src){
  var out = "", i = 0, n = src.length, c, q;
  while (i < n){
    c = src[i];
    if (c === "/" && src[i+1] === "/"){ while (i < n && src[i] !== "\n"){ out += " "; i++; } continue; }
    if (c === "/" && src[i+1] === "*"){ var e = src.indexOf("*/", i + 2); e = e < 0 ? n : e + 2; out += src.slice(i, e).replace(/[^\n]/g, " "); i = e; continue; }
    if (c === '"' || c === "'" || c === "`"){
      q = c; out += c; i++;
      while (i < n && src[i] !== q && (q === "`" || src[i] !== "\n")){ if (src[i] === "\\" && i + 1 < n){ out += "  "; i += 2; continue; } out += src[i] === "\n" ? "\n" : " "; i++; }
      if (i < n && src[i] === q){ out += q; i++; }
      continue;
    }
    out += c; i++;
  }
  return out;
}
function matchClose(s, i, open, close){ var d = 0; for (var k = i; k < s.length; k++){ if (s[k] === open) d++; else if (s[k] === close){ d--; if (!d) return k; } } return -1; }
/* A loop that never ends freezes the whole tab (the page and the lab share one thread), so obvious endless loops
   are caught before running: while(true) or for(;;) with no break/return, a for loop counting the wrong way,
   and a while loop whose body can't change anything. Returns {line, msg} or null. */
WL.loopRisk = function(src){
  var c = stripJS(src || ""), m, re = /\b(while|for)\s*\(/g;
  while ((m = re.exec(c))){
    var open = m.index + m[0].length - 1, close = matchClose(c, open, "(", ")"); if (close < 0) continue;
    var head = c.slice(open + 1, close).trim(), kw = m[1], line = lineOf(src, m.index), bs = close + 1;
    while (bs < c.length && /\s/.test(c[bs])) bs++;
    var be = c[bs] === "{" ? matchClose(c, bs, "{", "}") : c.indexOf(";", bs), body = c.slice(bs, be < 0 ? c.length : be + 1);
    var before = c.slice(0, m.index).replace(/\s+$/, ""), isDo = kw === "while" && before.slice(-1) === "}";
    var exits = /\b(break|return|throw)\b/.test(isDo ? c : body), parts = head.split(";");
    var forever = kw === "while" ? /^(true|1|!0|!false)$/.test(head) : parts.length === 3 && !parts[1].trim();
    var stop = " A loop that never ends freezes the page, so the lab didn’t run your JavaScript.";
    if (forever && !exits) return {line:line, msg:"This loop never stops: its condition is always true and nothing inside it says break."+stop+" Give it a condition that becomes false, or add a break."};
    if (isDo || exits) continue;
    if (kw === "for" && parts.length === 3){
      var cm = /^([A-Za-z_$][\w$]*)\s*(<|>)/.exec(parts[1].trim()); if (!cm) continue;
      var v = cm[1], esc2 = v.replace(/\$/g, "\\$"), up = parts[2];
      var dec = new RegExp("\\b" + esc2 + "\\s*(--|-=)|--\\s*" + esc2 + "\\b").test(up), inc = new RegExp("\\b" + esc2 + "\\s*(\\+\\+|\\+=)|\\+\\+\\s*" + esc2 + "\\b").test(up);
      if ((cm[2] === "<" && dec) || (cm[2] === ">" && inc)) return {line:line, msg:"This loop counts the wrong way: "+v+" keeps getting "+(dec ? "smaller" : "bigger")+", so “"+parts[1].trim()+"” stays true forever."+stop+" Check the last part of for (…; …; …): you probably want "+v+(dec ? "++" : "--")+"."};
      if (!up.trim() && !new RegExp("\\b" + esc2 + "\\s*(\\+\\+|--|[-+*/]?=(?!=))|(\\+\\+|--)\\s*" + esc2 + "\\b").test(body)) return {line:line, msg:"Nothing in this loop changes "+v+", so “"+parts[1].trim()+"” stays true forever."+stop+" Add "+v+"++ as the last part: for (…; …; "+v+"++)."};
    }
    if (kw === "while" && !forever){
      var changes = /\+\+|--|[^=!<>]=(?![=>])|\b(await|yield)\b/, calls = /[\w$\])]\s*\(/;
      var bodyNoLog = body.replace(/\bconsole\.\w+\s*\(|\balert\s*\(/g, "");
      if (!changes.test(head) && !calls.test(head) && !changes.test(body) && !calls.test(bodyNoLog)) return {line:line, msg:"Nothing inside this while loop changes its condition ("+head+"), so it would run forever."+stop+" Change a variable inside the loop (for example i++), or add a break."};
    }
  }
  return null;
};
function scriptLoopRisk(html){
  var r = null, re = /(<script\b[^>]*>)([\s\S]*?)<\/script/gi, m;
  while (!r && (m = re.exec(html || ""))){ var k = WL.loopRisk(m[2]); if (k) r = {line:k.line + lineOf(html, m.index + m[1].length) - 1, msg:k.msg}; }
  return r;
}
WL.lintJS = function(src){
  var out = [], lines = stripJS(src).split("\n"), raw = src.split("\n");
  lines.forEach(function(l, k){
    var n = k + 1;
    if (/[“”‘’]/.test(l)) out.push({line:n, msg:"Curly quotes found. JavaScript strings need straight quotes: \"…\", '…' or `…`."});
    if (/addEventListener\(\s*["']on[a-z]+["']/.test(raw[k])) out.push({line:n, msg:"Event names in addEventListener don’t start with “on”: use \"click\", not \"onclick\".", soft:false});
    var NAMES = ["textContent","innerText","innerHTML","classList","querySelector","querySelectorAll","getElementById","addEventListener","preventDefault","toUpperCase","toLowerCase","toFixed","forEach","appendChild","createElement","setAttribute","getAttribute","removeEventListener"];
    (l.match(/\.([A-Za-z]+)/g) || []).forEach(function(tok){ var w = tok.slice(1), hit = NAMES.filter(function(x){ return x !== w && x.toLowerCase() === w.toLowerCase(); })[0]; if (hit) out.push({line:n, msg:"JavaScript is case-sensitive: “"+w+"” should be “"+hit+"”. With the wrong capitals, JavaScript treats it as a different (non-existent) thing."}); });
    if (/\bconsole\.Log\b|\bDocument\./.test(l)) out.push({line:n, msg:"JavaScript is case-sensitive: it’s console.log and document (all lower case)."});
  });
  return out;
};
WL.explainError = function(msg){
  var m;
  if ((m = /Cannot read propert(?:y|ies) of null \(reading '([^']+)'\)/.exec(msg))) return "Something you tried to use is null, so it has no “"+m[1]+"”. Most often, document.querySelector(…) or getElementById(…) found nothing: check the selector matches the HTML exactly (a class needs a dot: \".name\"; an id needs #; capitals count), and that the script runs after the HTML exists.";
  if ((m = /Cannot read propert(?:y|ies) of undefined \(reading '([^']+)'\)/.exec(msg))) return "Something you tried to use is undefined, so it has no “"+m[1]+"”. Usually the name just before ."+m[1]+" is misspelt or has the wrong capitals (for example classlist instead of classList), or the variable was never given a value.";
  if ((m = /Cannot set propert(?:y|ies) of (null|undefined)/.exec(msg))) return "You’re setting something on "+m[1]+". Usually document.querySelector(…) found nothing: check the selector matches the HTML exactly.";
  if ((m = /(\S+) is not defined/.exec(msg))) return "“"+m[1]+"” hasn’t been created. Check the spelling and capitals, and that you declared it with const or let before using it.";
  if ((m = /(\S+) is not a function/.exec(msg))) return "“"+m[1]+"” isn’t a function you can call. Check the spelling and capitals (for example querySelector, addEventListener), and that you’re calling it on the right thing.";
  if (/Assignment to constant variable/.test(msg)) return "A const can’t be given a new value. Use let for a variable that changes (like a counter).";
  if (/Unexpected end of input/.test(msg)) return "The code ends while something is still open: usually a missing } or ). Count them: every { needs a }, every ( needs a ).";
  if ((m = /Unexpected token '?([^']*)'?/.exec(msg))) return "JavaScript didn’t expect “"+m[1]+"” here. Look just before it: a missing comma, bracket, quote or operator is the usual cause.";
  if (/Malformed arrow function parameter list/.test(msg)) return "Something just before an arrow (=>) is off: usually a missing comma between the arguments, as in addEventListener(\"click\", () => { … }).";
  if (/Invalid or unexpected token/.test(msg)) return "There’s a character JavaScript can’t read here, often a curly quote or a quote that’s never closed.";
  if (/missing \) after argument list/.test(msg)) return "A function call is missing its closing “)”, or the things inside need commas between them.";
  if (/has already been declared/.test(msg)) return "This name is declared twice. Declare it once with const or let, and after that just use it.";
  if (/Unexpected (identifier|string|number)/.test(msg)) return "Two words are next to each other with nothing joining them: often a missing comma, operator, quote or bracket just before this point.";
  return "";
};

/* ---------- running and checking ---------- */
WL.run = function(frame, ch, code){
  return new Promise(function(resolve){
    var b = WL.buildDoc(ch, code), done = false;
    frame.onload = function(){ if (done) return; done = true; setTimeout(function(){ resolve(b); }, 60); };
    frame.srcdoc = b.doc;
    setTimeout(function(){ if (!done){ done = true; resolve(b); } }, 1500);
  });
};
function norm(t){ return String(t || "").replace(/\s+/g, " ").trim(); }
function colorOf(win, c){ var e = win.document.createElement("span"); e.style.color = ""; e.style.color = c; win.document.body.appendChild(e); var v = win.getComputedStyle(e).color; e.remove(); return v; }
/* colours match if each channel is within 2 of the target (hsl() or a colour picker can round a shade by 1) */
function sameColor(a, b){ if (a === b) return true; var x = (a.match(/[\d.]+/g) || []).map(Number), y = (b.match(/[\d.]+/g) || []).map(Number); if (x.length !== y.length || x.length < 3) return false; return x.every(function(v, k){ return Math.abs(v - y[k]) <= (k < 3 ? 2 : 0.01); }); }
function px(v){ var n = parseFloat(v); return isNaN(n) ? null : n; }
function styleMatch(win, el, prop, want){
  var got = win.getComputedStyle(el).getPropertyValue(prop).trim(), wants = [].concat(want);
  return {ok:wants.some(function(w){
    if (typeof w === "function") return w(got, el, win);
    if (/color|background-color|border-.*color/.test(prop)) return sameColor(colorOf(win, w), got);
    if (/^-?\d+(\.\d+)?px$/.test(w)) return px(got) !== null && Math.abs(px(got) - px(w)) <= 0.6;
    return got === w;
  }), got:got};
}
var COLOR_NAMES = {"rgb(0, 0, 0)":"black", "rgb(255, 255, 255)":"white", "rgba(0, 0, 0, 0)":"transparent (none)", "rgb(34, 34, 34)":"the default dark grey"};
function describe(prop, got){ return /color/.test(prop) ? (COLOR_NAMES[got] || got) : got; }

/* evaluate one check; returns {ok, msg} */
function evalCheck(c, win, doc){
  var els = c.el ? Array.prototype.slice.call(doc.querySelectorAll(c.el)) : [];
  if (c.fn){ var r = c.fn(doc, win); return {ok:r === true, msg:typeof r === "string" ? r : c.msg}; }
  if (c.count != null && els.length !== c.count) return {ok:false, msg:c.msg || "Expected "+c.count+" × "+c.el+", found "+els.length+"."};
  if (c.min != null && els.length < c.min) return {ok:false, msg:c.msg || "Expected at least "+c.min+" × "+c.el+", found "+els.length+"."};
  if (c.el && !els.length && c.count !== 0) return {ok:false, msg:c.missing || c.msg || "Couldn’t find "+c.el+"."};
  var target = c.all ? els : els.slice(0, 1);
  for (var k = 0; k < target.length; k++){
    var el = target[k];
    if (c.text != null){ var tx = norm(el.textContent); if (c.text instanceof RegExp ? !c.text.test(tx) : tx.toLowerCase() !== String(c.text).toLowerCase()) return {ok:false, msg:(c.msg || "The text should be “"+c.text+"”.") + (tx ? " Right now it says “"+tx.slice(0, 60)+"”." : " Right now it’s empty.")}; }
    if (c.attr){ var av = el.getAttribute(c.attr); if (av == null) return {ok:false, msg:c.msg || "<"+el.tagName.toLowerCase()+"> needs a "+c.attr+" attribute."}; if (c.match && !c.match.test(av)) return {ok:false, msg:(c.msg || "The "+c.attr+" doesn’t look right.") + " It is “"+av+"”."}; if (c.nonempty && !av.trim()) return {ok:false, msg:c.msg || "The "+c.attr+" is empty."}; }
    if (c.style){ for (var p in c.style){ var sm = styleMatch(win, el, p, c.style[p]); if (!sm.ok) return {ok:false, msg:(c.msg || p+" isn’t right yet.") + " The browser currently shows "+p+": "+describe(p, sm.got)+"."}; } }
    if (c.labelled && !(el.labels && el.labels.length) && !el.getAttribute("aria-label")) return {ok:false, msg:c.msg || "This input has no label connected to it."};
  }
  return {ok:true};
}
WL.check = async function(frame, ch, code){
  var res = {ok:false, lint:[], checks:[], errors:[], logs:[]}, b = await WL.run(frame, ch, code);
  var win = frame.contentWindow, doc = frame.contentDocument;
  var edit = ch.edit || ["html"];
  if (edit.indexOf("html") > -1 && code.html != null) WL.lintHTML(code.html).forEach(function(x){ x.pane = "html"; res.lint.push(x); });
  if (edit.indexOf("css") > -1 && code.css != null) WL.lintCSS(code.css, win, doc).forEach(function(x){ x.pane = "css"; res.lint.push(x); });
  if (edit.indexOf("js") > -1 && code.js != null) WL.lintJS(code.js).forEach(function(x){ x.pane = "js"; res.lint.push(x); });
  var loop = code.js != null ? WL.loopRisk(code.js) : null, hloop = code.html != null ? scriptLoopRisk(code.html) : null;
  if (loop) res.lint.push({pane:"js", line:loop.line, msg:loop.msg});
  if (hloop) res.lint.push({pane:"html", line:hloop.line, msg:hloop.msg});
  var errs = (safe(function(){ return win.__errs; }) || []).map(function(e){ return {msg:e.msg.replace(/^Uncaught /, ""), line:e.line >= b.jsLine ? e.line - b.jsLine + 1 : 0}; });
  res.errors = errs.slice(); res.logs = (safe(function(){ return win.__logs; }) || []).slice();
  // checks (some include actions)
  var all = ch.checks || [];
  for (var k = 0; k < all.length; k++){
    var c = all[k], r;
    try {
      if (c.width){ frame.style.width = c.width + "px"; await wait(80); }
      if (c.act){ await WL.run(frame, ch, code); win = frame.contentWindow; doc = frame.contentDocument; for (var a = 0; a < c.act.length; a++){ await act(win, doc, c.act[a]); } }
      if (frame.contentDocument !== doc) throw new Error("left");
      r = evalCheck(c, win, doc);
      if (c.width){ frame.style.width = ""; await wait(40); }
    } catch (e){ r = {ok:false, msg:frame.contentDocument !== doc ? "The page went to a different address (a link, a form, or code that sets location), so there was nothing left to check. Remove the code that leaves the page." : "This check couldn’t run: "+e.message}; }
    res.checks.push({t:c.t, ok:r.ok, msg:r.ok ? "" : r.msg});
  }
  // errors that happened during actions
  (safe(function(){ return win.__errs; }) || []).forEach(function(e){ var m = e.msg.replace(/^Uncaught /, ""); if (!res.errors.some(function(x){ return x.msg === m; })) res.errors.push({msg:m, line:e.line >= b.jsLine ? e.line - b.jsLine + 1 : 0}); });
  res.ok = res.checks.every(function(x){ return x.ok; }) && !res.lint.some(function(x){ return !x.soft; }) && !(edit.indexOf("js") > -1 && res.errors.length);
  if (ch.checks && ch.checks.some(function(x){ return x.act; })) await WL.run(frame, ch, code);
  return res;
};
function safe(f){ try { return f(); } catch (e){ return null; } }
function wait(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
async function act(win, doc, a){
  if (a.click){ var el = doc.querySelector(a.click); if (!el) throw new Error("couldn’t find "+a.click+" to click"); el.click(); }
  if (a.type){ var inp = doc.querySelector(a.type[0]); if (!inp) throw new Error("couldn’t find "+a.type[0]+" to type into"); inp.focus(); inp.value = a.type[1]; inp.dispatchEvent(new win.Event("input", {bubbles:true})); inp.dispatchEvent(new win.Event("change", {bubbles:true})); }
  if (a.key){ var t = doc.querySelector(a.key[0]); t.dispatchEvent(new win.KeyboardEvent("keydown", {key:a.key[1], bubbles:true})); t.dispatchEvent(new win.KeyboardEvent("keyup", {key:a.key[1], bubbles:true})); }
  await wait(a.wait || 40);
}

if (typeof module !== "undefined" && module.exports) module.exports = WL; else root.WebLab = WL;
})(this);
