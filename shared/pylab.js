/* IT CHICK Academy · Python Lab client: talks to the worker, enforces a time limit, explains errors kindly. */
(function(root){
"use strict";
var PL = {}, worker = null, seq = 0, pending = {}, readyP = null, base = "";
PL.LIMIT = 4000;
function spawn(){
  if (worker){ try { worker.terminate(); } catch (e){} }
  worker = new Worker(base + "shared/pyworker.js", {type:"module"});
  worker.onmessage = function(e){ var m = e.data, p = pending[m.id]; if (!p) return; delete pending[m.id]; clearTimeout(p.timer); m.ok ? p.resolve(m) : p.reject(new Error(m.error)); };
  worker.onerror = function(e){ Object.keys(pending).forEach(function(k){ clearTimeout(pending[k].timer); pending[k].reject(new Error("The Python engine couldn’t start: " + (e.message || "unknown error"))); delete pending[k]; }); };
  readyP = send({op:"ping"}, 90000);
  return readyP;
}
function send(msg, limit){
  return new Promise(function(resolve, reject){
    var id = ++seq; msg.id = id;
    var timer = setTimeout(function(){
      delete pending[id];
      try { worker.terminate(); } catch (e){}
      worker = null; readyP = null;
      var err = new Error("timeout"); err.timeout = true; reject(err);
    }, limit || PL.LIMIT);
    pending[id] = {resolve:resolve, reject:reject, timer:timer};
    worker.postMessage(msg);
  });
}
PL.init = function(b){ base = b || ""; if (!worker) spawn(); return readyP; };
PL.ready = function(){ if (!worker) spawn(); return readyP; };
async function call(msg){
  await PL.ready();
  try { return (await send(msg, PL.LIMIT)).data; }
  catch (e){
    if (e.timeout){ spawn(); return {timeout:true}; }
    /* the program upset the engine itself: start a fresh one so the next try works */
    spawn();
    throw new Error("Your program confused the Python engine, so I’ve restarted it. Press the button again; if this keeps happening, look for code that changes Python’s own tools (like print, sys or os).");
  }
}
PL.run = function(code, inputs, files){ return call({op:"run", code:code, inputs:inputs || [], files:files || {}}); };
PL.check = function(code, tests){ return call({op:"check", code:code, tests:tests}); };

/* Splits code into lines, noting for each the code outside strings and comments (string contents removed, quotes
   kept), whether it starts inside a triple-quoted string, and the bracket depth, so the tips below don't trip over
   text in quotes, comments or statements spread over several lines. */
function scan(code){
  var lines = code.replace(/\r\n?/g, "\n").split("\n"), res = [], q = null, depth = 0;
  lines.forEach(function(l){
    var info = {raw:l, startDepth:depth, startStr:!!q}, out = "", i = 0, c;
    while (i < l.length){
      if (q){
        if (l[i] === "\\"){ i += 2; continue; }
        if (l.substr(i, q.length) === q){ out += q; i += q.length; q = null; continue; }
        i++; continue;
      }
      c = l[i];
      if (c === "#") break;
      if (c === '"' || c === "'"){ q = l.substr(i, 3) === c + c + c ? c + c + c : c; out += q; i += q.length; continue; }
      if ("([{".indexOf(c) > -1) depth++;
      else if (")]}".indexOf(c) > -1 && depth > 0) depth--;
      out += c; i++;
    }
    info.openStr = !!(q && q.length === 1);
    if (q && q.length === 1 && !/\\$/.test(l)) q = null;
    info.code = out; info.endDepth = depth; info.endStr = !!q;
    info.more = depth > 0 || !!q || /\\\s*$/.test(out);
    res.push(info);
  });
  return res;
}
function colonAtTop(s){
  var d = 0;
  for (var i = 0; i < s.length; i++){ var c = s[i]; if ("([{".indexOf(c) > -1) d++; else if (")]}".indexOf(c) > -1) d--; else if (c === ":" && d <= 0) return true; }
  return false;
}

/* static checks before running */
PL.lint = function(code){
  var out = [], info = scan(code);
  var spaceIndented = info.some(function(x){ return !x.startStr && x.startDepth === 0 && /^ +\S/.test(x.raw); });
  info.forEach(function(x, k){
    var n = k + 1, l = x.code;
    if (x.startStr && x.endStr) return;
    if (/[“”‘’]/.test(l) || x.openStr && /[“”‘’]/.test(x.raw)) out.push({line:n, msg:"Curly quotes (“ ” ‘ ’) found. Python needs straight quotes: \"…\" or '…'. Phones and word processors often swap them in."});
    if (x.startDepth === 0 && !x.startStr && /^\s*print\s+["'a-zA-Z0-9]/.test(l)) out.push({line:n, msg:"In Python 3, print needs brackets: print(\"…\")."});
    if (/(^|[^.\w])(true|false|null|none)\b/.test(l)) out.push({line:n, msg:"Python writes these with a capital letter: True, False and None.", soft:true});
    if (x.startDepth === 0 && !x.startStr && spaceIndented && /^[ ]*\t/.test(x.raw) && /\S/.test(x.raw)) out.push({line:n, msg:"This line is indented with a tab while others use spaces. Mixing them confuses Python: use 4 spaces everywhere.", soft:true});
  });
  /* block lines need a colon: look at whole statements, so lines inside brackets (or after a \) are joined first */
  for (var k = 0; k < info.length; k++){
    if (info[k].startStr || info[k].startDepth > 0) continue;
    var j = k, joined = info[k].code;
    while (info[j].more && j + 1 < info.length){ j++; joined += " " + info[j].code; }
    var m = /^\s*(if|elif|else|for|while|def|class|try|except|finally|with)\b/.exec(joined);
    if (m && !info[j].more && !colonAtTop(joined)) out.push({line:j + 1, msg:"This line starts a block (“" + m[1] + "”) but doesn’t end with a colon. Add “:” at the end.", soft:true});
    k = j;
  }
  out.sort(function(a, b){ return a.line - b.line; });
  var plain = info.map(function(x){ return x.code; }).join("\n");
  if (/^\s*while\s+True\s*:/m.test(plain) && !/\b(break|return|raise|exit|quit)\b/.test(plain)) out.push({line:info.findIndex(function(x){ return /^\s*while\s+True\s*:/.test(x.code); }) + 1, msg:"while True: never stops on its own, and there’s no break inside it, so the program would run forever. Add a condition or a break."});
  return out;
};

/* plain-language explanations for Python errors */
var KIND = {str:"piece of text (str)", list:"list", dict:"dictionary (dict)", int:"whole number (int)", float:"decimal number (float)", tuple:"tuple", set:"set", bool:"True/False value (bool)", NoneType:"None"};
function kind(t){ return KIND[t] || t; }
PL.explain = function(err){
  if (!err) return "";
  var t = err.type, m = err.msg || "", x, y;
  if (t === "IndentationError" || t === "TabError"){
    if (/expected an indented block/.test(m)) return "Python expected the next line to be indented (moved right). After a line ending in “:”, the lines that belong to it need 4 spaces in front.";
    if (/unexpected indent/.test(m)) return "This line is indented (moved right) but nothing above it starts a block. Remove the spaces at its start, or check the line above ends with “:”.";
    if (/unindent does not match/.test(m)) return "This line’s indentation doesn’t line up with any line above it. Lines in the same block must start at exactly the same column (use 4 spaces per level).";
    if (/inconsistent use of tabs/.test(m)) return "Tabs and spaces are mixed. Use 4 spaces for each level everywhere.";
    return "The indentation (spaces at the start of lines) isn’t consistent. In Python, indentation shows which lines belong together.";
  }
  if (t === "SyntaxError"){
    if (/expected ':'/.test(m)) return /^\s*else\s+if\b/.test(err.text || "") ? "Python writes “else if” as one word: elif. For example: elif temp < 25:" : "Python expected a colon “:” at the end of this line. Lines starting with if, elif, else, for, while and def end with “:”.";
    if (/was never closed/.test(m)) return "A bracket or quote opened here is never closed. Count them: every ( needs a ), every [ needs a ], every \" needs another \".";
    if (/unterminated (triple-quoted )?string/.test(m)) return /'/.test(err.text || "") && /\w'\w/.test(err.text || "") ? "A piece of text in quotes is never closed. An apostrophe inside text in single quotes ends the text early: use double quotes around it instead, like \"It's here\"." : "A piece of text in quotes is never closed. Add the matching closing quote" + (/triple/.test(m) ? " (three quotes: \"\"\")." : " on the same line.");
    if (/Missing parentheses in call to 'print'/.test(m)) return "In Python 3, print needs brackets: print(\"hello\").";
    if (/Maybe you meant '==' or ':=' instead of '='|Maybe you meant '==' instead of '='/.test(m)) return "A single = stores a value; to compare two things (for example in an if), use ==.";
    if (/cannot assign to (True|False|None)/.test(m)) return "True, False and None are fixed values in Python, so they can’t be used as variable names. Pick another name.";
    if (/cannot assign to|cannot delete/.test(m)) return "The left side of = must be a name (like total = 5). Here it’s something else, so Python can’t store a value in it. To compare two things, use == instead.";
    if (/Perhaps you forgot a comma/.test(m)) return "Python thinks a comma is missing between two values here, for example between a piece of text and a variable in print(…). Add a comma, or use + or an f-string to join them.";
    if (/f-string/.test(m)) return "Something inside an f-string isn’t right. Check that every { has a matching } and that what’s inside the { } is a name or a small piece of Python, like {total} or {age + 1}.";
    if (/does not match opening parenthesis/.test(m)) return "A closing bracket doesn’t match the one it closes: ( pairs with ), [ with ] and { with }.";
    if (/invalid (non-printable )?character/.test(m)) return "There’s a character Python can’t read here, often a curly quote or a dash from a word processor. Retype it.";
    if (/invalid decimal literal|invalid digit/.test(m)) return "A number has letters stuck to it. Names can’t start with a digit (use second instead of 2nd), and a number needs a space or a sign before a name, like 2 * x.";
    if (/unmatched/.test(m)) return "There’s a closing bracket with no matching opening one.";
    if (/'return' outside function/.test(m)) return "return only works inside a function (indented under a def line).";
    if (/'break' outside loop|'continue' not properly in loop/.test(m)) return "break and continue only work inside a loop (indented under a for or while line).";
    if (/expected 'except' or 'finally'/.test(m)) return "A try: block needs an except: (or finally:) after it.";
    if ((x = /Did you mean '(\w+)'\?/.exec(m))) return "A keyword looks misspelt here. Python guesses you meant “" + x[1] + "”: check the spelling of the first word on this line.";
    return "Python couldn’t read this line. Look for a missing bracket, quote, colon or comma, here or on the line just above.";
  }
  if (t === "NameError"){
    x = /name '([^']+)' is not defined/.exec(m);
    if (x){
      if ((y = /Did you forget to import '([^']+)'/.exec(m))) return "“" + x[1] + "” is a module that hasn’t been imported. Add import " + y[1] + " at the top of the program.";
      y = /Did you mean: '([^']+)'\?/.exec(m);
      if (new RegExp("^\\s*" + x[1] + "\\s*==[^=]").test(err.text || "")) return "“" + x[1] + "” hasn’t been created yet. To store a value in it, use a single = (== compares).";
      return "“" + x[1] + "” hasn’t been created yet." + (y ? " Did you mean “" + y[1] + "”?" : "") + " Check the spelling and capitals, and that it’s given a value (with =) before this line." + (!y && /^[a-z]+$/i.test(x[1]) && x[1].length > 2 ? " If you meant the word itself, put it in quotes: \"" + x[1] + "\"." : "");
    }
  }
  if (t === "TypeError"){
    if (/can only concatenate str \(not "(int|float)"\) to str/.test(m)) return "You’re using + on text and a number, and Python won’t guess what you mean. If the text came from input() and you wanted maths, convert it first with int(…) or float(…). If you wanted to build a sentence, turn the number into text with str(…), or use an f-string like f\"Total: {total}\".";
    if (/can only concatenate str \(not "NoneType"\)|unsupported operand type\(s\) for [^:]+: 'NoneType'|unsupported operand type\(s\) for [^:]+: '\w+' and 'NoneType'/.test(m)) return "One of the values is None (no value). A common cause: a function that prints instead of using return.";
    if ((x = /unsupported operand type\(s\) for ([+\-*/%]+=?|\*\*|\/\/): '(int|float)' and 'str'|unsupported operand type\(s\) for ([+\-*/%]+=?|\*\*|\/\/): 'str' and '(int|float)'/.exec(m))) return "You’re doing maths with a number and text. input() always gives you text, so convert it first: int(…) or float(…)." + (/^\+/.test(x[1] || x[3]) ? " (To build a sentence instead, turn the number into text with str(…), or use an f-string.)" : "");
    if (/can't multiply sequence by non-int of type 'str'/.test(m)) return "You’re multiplying by text. If it came from input(), convert it with int(…) or float(…) first.";
    if (/can't multiply sequence by non-int of type 'float'/.test(m)) return "Text (or a list) can only be repeated a whole number of times, and here it’s multiplied by a decimal. If the text is a number from input(), convert it with float(…) first.";
    if (/'NoneType' object is not callable/.test(m)) return "Something that is None (no value) is being called with ( ). Check the name before the brackets holds a function.";
    if ((x = /'(\w+)' object is not callable/.exec(m))) return "A " + kind(x[1]) + " is being called with ( ), as if it were a function. Often a variable has the same name as a function (for example a variable called list, str, sum or input), or a * is missing before a bracket, like 2(x + 1) instead of 2 * (x + 1).";
    if (/takes (\d+) positional arguments? but (\d+) (were|was) given/.test(m)) return "The function is called with a different number of values than its def line has parameters. Match them up.";
    if (/missing (\d+) required positional argument/.test(m)) return "The function needs more values than it was given. Check the def line and the call.";
    if (/NoneType/.test(m)) return "Something is None (no value). A common cause: a function that prints instead of using return, or a list method like .sort() that changes the list and returns None.";
    if (/object is not subscriptable/.test(m)) return "Square brackets [ ] only work on things like lists, strings and dictionaries. Check what this variable holds.";
    if ((x = /'(\w+)' object is not iterable/.exec(m))) return x[1] === "int" || x[1] === "float" ? "A for loop needs something to go through, like a list, a string or range(…). A plain number can’t be looped over: try range(n)." : "This needs something to go through, like a list, a string or range(…), but got a " + kind(x[1]) + ".";
    if (/'str' object does not support item assignment/.test(m)) return "Strings can’t be changed in place. Build a new string instead (for example with .replace() or by joining pieces).";
    if (/not supported between instances of '(str|int|float)' and '(str|int|float)'/.test(m)) return "You’re comparing text with a number (using <, >, <= or >=). input() always gives text, so convert it first: int(input(…)) or float(input(…)).";
    if ((x = /list indices must be integers or slices, not (\w+)/.exec(m))) return x[1] === "float" ? "List positions must be whole numbers, and this one is a decimal. / always gives a decimal: use // or int(…)." : x[1] === "str" ? "List positions must be whole numbers, and this one is text. If it came from input(), convert it with int(…)." : "List positions must be whole numbers.";
    if (/string indices must be integers/.test(m)) return "Positions in a string must be whole numbers. If you’re reading a CSV row as a dictionary, the row may actually be a list or a string here.";
    if ((x = /'(\w+)' object cannot be interpreted as an integer/.exec(m))) return x[1] === "str" ? "Python needed a whole number here (for example in range(…)) but got text. If it came from input(), convert it with int(…)." : x[1] === "float" ? "Python needed a whole number here (for example in range(…)) but got a decimal. Use int(…), or // instead of /." : "Python needed a whole number here, but got a " + kind(x[1]) + ".";
    if ((x = /object of type '(\w+)' has no len\(\)/.exec(m))) return "len() counts the items in a list, a string or a dictionary; a " + kind(x[1]) + " has no length." + (x[1] === "int" ? " To count the digits of a number, use len(str(n))." : "");
    if (/type str doesn't define __round__/.test(m)) return "round() needs a number, but got text. Convert it first with float(…).";
    if (/write\(\) argument must be str/.test(m)) return "write() only takes text. Turn a number into text with str(…) or an f-string, and add \"\\n\" when you want a new line.";
    if (/must be str, not|must be a string/.test(m)) return "This needs text (a str), but got something else. Convert it with str(…), or use an f-string.";
  }
  if (t === "ValueError"){
    if (/invalid literal for int\(\) with base 10: '(.*)'/.test(m)) { x = /'(.*)'/.exec(m); return "int() can only turn text that looks like a whole number into a number, and it got “" + (x ? x[1] : "") + "”." + (x && /^-?\d*\.\d+$|^-?\d+\.\d*$/.test(x[1].trim()) ? " For decimals, use float(…)." : x && x[1] === "" ? " The text was empty: maybe nothing was typed." : ""); }
    if (/could not convert string to float/.test(m)) { x = /: '(.*)'$/.exec(m); return "float() can only convert text that looks like a number" + (x ? ", and it got “" + x[1] + "”" : "") + "." + (x && /^[a-z_ ]+$/i.test(x[1]) ? " If you’re reading a file, this may be the header row: skip it (for example with next(reader)) or use csv.DictReader." : "") + (x && /,/.test(x[1]) ? " Python uses a dot for decimals, not a comma." : ""); }
    if (/not enough values to unpack|too many values to unpack/.test(m)) return "The number of names on the left doesn’t match the number of values on the right." + (/expected 2, got 1/.test(m) ? " Looping over a dictionary gives only its keys: use .items() to get key and value together." : "");
    if (/not in list/.test(m)) return "list.index(…) or list.remove(…) couldn’t find that value in the list. Check it with “in” first.";
    if (/arg is an empty sequence|iterable argument is empty/.test(m)) return "max() and min() can’t pick from an empty list. Check the list has something in it first (if numbers:).";
  }
  if (t === "AssertionError") return "An assert check failed: the comparison after assert was False. Either the code has a bug or the test expects the wrong thing. Work out which, then fix that one.";
  if (t === "ZeroDivisionError") return "Something is divided by zero, which has no answer. Check the number after / (or // or %), or guard with an if before dividing.";
  if (t === "IndexError"){
    if (/empty/.test(m)) return "The list is empty, so there’s nothing to take out of it.";
    return "That position doesn’t exist. Positions start at 0, so the last of 3 items is at [2] (or [-1]). Loops that use range(len(…) + 1) or <= often go one too far.";
  }
  if (t === "KeyError"){ x = /^'?(.*?)'?$/.exec(m); return "The dictionary has no key " + (x ? "“" + x[1] + "”" : "") + ". Check spelling and capitals, or use .get(key, default) to avoid the error."; }
  if (t === "AttributeError"){
    y = /Did you mean: '(\w+)'\?/.exec(m);
    if ((x = /module '([\w.]+)' has no attribute '(\w+)'/.exec(m))) return "The " + x[1] + " module has nothing called “" + x[2] + "”." + (y ? " Did you mean “" + y[1] + "”?" : " Check the spelling and capitals.");
    x = /'(\w+)' object has no attribute '(\w+)'/.exec(m);
    if (x){
      if (x[1] === "NoneType") return "This holds None (no value), so it has no “." + x[2] + "”. A common cause: saving the result of a method like .sort() or .append() (they change the list and give back None), or a function that prints instead of using return.";
      if (x[1] === "dict" && x[2] === "append") return "Dictionaries don’t have .append. To add or change an entry, write counts[key] = value.";
      var tips = {push:"append", length:"len(…)", add:x[1] === "list" ? "append" : "", lenght:"len(…)", upper_case:"upper", toUpperCase:"upper", toLowerCase:"lower", trim:"strip", size:"len(…)", contains:"in", includes:"in", round:"round(x, 2)", len:"len(…)"};
      return "A " + kind(x[1]) + " doesn’t have “." + x[2] + "”." + (y ? " Did you mean “." + y[1] + "”?" : tips[x[2]] ? " In Python, use " + tips[x[2]] + " instead." : " Check the spelling, or whether the variable holds what you think (print it).");
    }
  }
  if (t === "UnsupportedOperation"){
    if (/not readable/.test(m)) return "The file was opened for writing, so it can’t be read. Open it again with open(name) (reading is the default) to read it.";
    if (/not writable/.test(m)) return "The file was opened for reading, so it can’t be written to. Open it with \"w\" (replace) or \"a\" (add to the end) to write.";
  }
  if (t === "_OutOfInput") return "The program asked for input() more times than there were answers to give it. Check how many times input() runs (it may be inside a loop), and that each question has an answer.";
  if (t === "EOFError") return "The program asked for more input than there was.";
  if (t === "RecursionError") return "A function keeps calling itself and never stops.";
  if (t === "FileNotFoundError") return "That file doesn’t exist at that path. Check the name, the folder and capitals, and that it was created first.";
  if (t === "IsADirectoryError") return "That name is a folder, not a file.";
  if (t === "ModuleNotFoundError") return "That module isn’t available here. The lab has Python’s standard library (math, random, csv, json, datetime, pathlib…), but not extra packages.";
  if (t === "UnboundLocalError") return "Inside the function, this name is assigned, so Python treats it as local, but it’s used before that line. Pass it in as a parameter, or assign it first.";
  return "";
};
if (typeof module !== "undefined" && module.exports) module.exports = PL; else root.PyLab = PL;
})(this);
