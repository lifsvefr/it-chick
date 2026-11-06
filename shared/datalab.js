/* IT CHICK Academy · Data Lab client: SQL (sql.js in a worker) and R (webR, which runs in its own worker).
   Both have time limits; a stuck engine is thrown away and restarted. Errors are explained in plain words. */
(function(root){
"use strict";
var DL = {}, base = "";
DL.LIMIT = 5000;
DL.MAXROWS = 5000;   // kept in step with shared/sqlworker.js
DL.MAXPLOTS = 12;    // charts shown per run
DL.init = function(b){ base = b || ""; };

/* ------------------------------ SQL ------------------------------ */
var sqlW = null, seq = 0, pend = {}, sqlReady = null;
function sqlSpawn(){
  sqlW = new Worker(base + "shared/sqlworker.js");
  sqlW.onmessage = function(e){ var m = e.data, p = pend[m.id]; if (!p) return; delete pend[m.id]; clearTimeout(p.t); m.ok ? p.res(m) : p.rej(new Error(m.error)); };
  sqlReady = sqlSend({op:"ping"}, 60000);
  return sqlReady;
}
function sqlSend(msg, limit){
  return new Promise(function(res, rej){
    var id = ++seq; msg.id = id;
    var t = setTimeout(function(){ delete pend[id]; try { sqlW.terminate(); } catch (e){} sqlW = null; sqlReady = null; var er = new Error("timeout"); er.timeout = true; rej(er); }, limit || DL.LIMIT);
    pend[id] = {res:res, rej:rej, t:t};
    sqlW.postMessage(msg);
  });
}
DL.sqlReady = function(){ if (!sqlW) sqlSpawn(); return sqlReady; };
DL.sql = async function(setup, sql, after){
  await DL.sqlReady();
  try { return (await sqlSend({op:"run", setup:setup, sql:sql, after:after})).data; }
  catch (e){ if (e.timeout){ sqlSpawn(); return {timeout:true}; } throw e; }
};
// compare a learner's result with the model answer's result
function norm(v){ if (typeof v === "number") return Math.round(v * 1e6) / 1e6; return v; }
function fmtRow(r){ return r.map(function(v){ return v === null ? "NULL" : String(norm(v)); }).join(", "); }
function perms(n){
  var out = [];
  (function go(p, left){ if (!left.length){ out.push(p); return; } left.forEach(function(x, i){ go(p.concat([x]), left.slice(0, i).concat(left.slice(i + 1))); }); })([], Array.from({length:n}, function(_, i){ return i; }));
  return out;
}
function sameRows(gv, wv, p, ordered){
  var gk = gv.map(function(r){ return JSON.stringify(p.map(function(j){ return norm(r[j]); })); }), wk = wv.map(function(r){ return JSON.stringify(r.map(norm)); });
  if (!ordered){ gk.sort(); wk.sort(); }
  for (var i = 0; i < wk.length; i++) if (gk[i] !== wk[i]) return false;
  return true;
}
// colOrder: the columns must come in the model answer's order (otherwise any order is fine)
DL.sameResult = function(got, want, ordered, colOrder){
  var g = got.results[got.results.length - 1], w = want.results[want.results.length - 1];
  if (g && g.more) return {ok:false, msg:"Your query returns more than " + DL.MAXROWS.toLocaleString("en-GB") + " rows, far more than this task needs. Check your JOIN has an ON condition, and your WHERE."};
  if (!w || !w.values.length) return {ok:!g || !g.values.length, msg:"This query should return no rows."};
  if (!g) return {ok:false, msg:"Your code didn’t return a table. A question to the database starts with SELECT."};
  var quoted = g.columns.filter(function(c){ return /^'.*'$/.test(c); });
  if (g.columns.length !== w.columns.length) return {ok:false, msg:"Your result has " + g.columns.length + " column" + (g.columns.length === 1 ? "" : "s") + ", but it should have " + w.columns.length + " (" + w.columns.join(", ") + "). Check the list after SELECT."};
  if (!g.values.length) return {ok:false, msg:"Your query returned no rows, but it should return " + w.values.length + ". Check your conditions (WHERE or HAVING): text must match exactly (capitals count), and empty values need IS NULL, not = NULL."};
  if (g.values.length !== w.values.length) return {ok:false, msg:"Your result has " + g.values.length + " row" + (g.values.length === 1 ? "" : "s") + ", but it should have " + w.values.length + ". Check your WHERE, GROUP BY, JOIN or LIMIT."};
  var n = w.columns.length, id = Array.from({length:n}, function(_, i){ return i; });
  var ps = colOrder || n > 6 ? [id] : perms(n);
  for (var k = 0; k < ps.length; k++) if (sameRows(g.values, w.values, ps[k], ordered)) return {ok:true};
  // not a match: pick the column order that fits best, to give useful feedback
  function colKey(rows, j){ return JSON.stringify(rows.map(function(r){ return norm(r[j]); }).sort()); }
  var best = id, bestScore = -1;
  ps.forEach(function(p){ var sc = 0; for (var j = 0; j < n; j++) if (colKey(g.values, p[j]) === colKey(w.values, j)) sc++; if (sc > bestScore){ bestScore = sc; best = p; } });
  var tip = quoted.length ? " Single quotes make text: SELECT " + quoted[0] + " shows the same word on every row. Write column names without quotes." : "";
  if (ordered && sameRows(g.values, w.values, best, false)) return {ok:false, msg:"The right rows, but not in the right order. Check your ORDER BY (ASC is smallest first, DESC is largest first)."};
  if (ordered){
    for (var i = 0; i < w.values.length; i++){
      var gr = best.map(function(j){ return g.values[i][j]; });
      if (JSON.stringify(gr.map(norm)) !== JSON.stringify(w.values[i].map(norm))) return {ok:false, msg:"Row " + (i + 1) + " isn’t right yet: expected “" + fmtRow(w.values[i]) + "”, got “" + fmtRow(gr) + "”." + tip};
    }
  }
  var gk = g.values.map(function(r){ return JSON.stringify(best.map(function(j){ return norm(r[j]); })); });
  if (n === 1 && w.values.length === 1) return {ok:false, msg:"Your query gives " + fmtRow(g.values[0]) + ", but that isn’t the right answer yet." + (tip || " Check the WHERE condition (> means more than; >= also includes the value itself) and the calculation after SELECT.")};
  var miss = w.values.filter(function(r){ return gk.indexOf(JSON.stringify(r.map(norm))) < 0; })[0];
  return {ok:false, msg:"Some values aren’t right yet." + (miss ? " For example, this row is missing from your result: “" + fmtRow(miss) + "”." : "") + (tip || " Check the columns and calculations after SELECT.")};
};
var SQL_TYPOS = {FORM:"FROM", FRM:"FROM", FRON:"FROM", SELCT:"SELECT", SELET:"SELECT", SLECT:"SELECT", SELEC:"SELECT", WERE:"WHERE", WHRE:"WHERE", WHER:"WHERE", WEHRE:"WHERE", ODER:"ORDER", ORDR:"ORDER", OREDR:"ORDER", GRUOP:"GROUP", GROPU:"GROUP", GORUP:"GROUP", GRUP:"GROUP", HAVNG:"HAVING", HAVIN:"HAVING", LIMT:"LIMIT", LIMI:"LIMIT", DECS:"DESC", DSEC:"DESC", ACS:"ASC", JION:"JOIN", JOING:"JOIN"};
function sqlWords(code){ return String(code || "").replace(/--[^\n]*/g, " ").replace(/\/\*[\s\S]*?\*\//g, " ").replace(/'(?:[^']|'')*'/g, " ''' "); }
DL.explainSql = function(msg, code){
  var m = String(msg || ""), x, c = sqlWords(code), cu = c.toUpperCase();
  var typo = (cu.match(/[A-Z_]+/g) || []).filter(function(w){ return SQL_TYPOS[w]; })[0];
  if (typo && /syntax error|no such column/.test(m)) return "“" + typo + "” looks like a typo for " + SQL_TYPOS[typo] + ".";
  if ((x = /no such column: (.+)$/.exec(m))){
    var col = x[1].replace(/ - should this be a string literal.*$/, "");
    if (/[‘’“”]/.test(col)) return "There’s a curly quote (‘ ’ “ ”) in the query, often added by a phone or word processor. SQLite only understands straight quotes: 'beans'. Delete the quotes and type them again (on some phones, turn off “smart punctuation”).";
    return "There’s no column called “" + col + "”. Check the spelling against the table’s columns (shown above). If you meant a piece of text, put it in single quotes: WHERE crop = 'beans'.";
  }
  if ((x = /no such table: (\S+)/.exec(m))) return "There’s no table called “" + x[1] + "”. The tables here are listed above the editor (check the spelling, including any final s).";
  if ((x = /no such function: (\S+)/.exec(m))) return "SQLite has no function called " + x[1] + ". Check the spelling; SQLite’s functions include COUNT, SUM, AVG, MIN, MAX, ROUND, LENGTH, UPPER, LOWER and SUBSTR.";
  if (/wrong number of arguments to function/.test(m)) return "A function has the wrong number of values in its brackets. For example ROUND(x, 1) takes two, COUNT(*) and SUM(kg) take one.";
  if (/ORDER BY term out of range/.test(m)) return "ORDER BY with a number means “sort by that column of the result” (ORDER BY 2 is the second column), and there aren’t that many columns.";
  if (/do not have the same number of result columns/.test(m)) return "Both sides of UNION must select the same number of columns.";
  if (/misuse of aggregate|aggregate functions are not allowed in the GROUP BY/.test(m)) return "COUNT, SUM, AVG, MIN and MAX can’t go in WHERE (or GROUP BY). WHERE works on single rows, before grouping. To filter on a total, use HAVING after GROUP BY: … GROUP BY bed HAVING COUNT(*) >= 2.";
  if (/HAVING clause on a non-aggregate query|GROUP BY clause is required before HAVING/.test(m)) return "HAVING filters groups, so it needs a GROUP BY before it: … GROUP BY crop HAVING SUM(kg) > 10.";
  if ((x = /ambiguous column name: (\S+)/.exec(m))) return "Two tables both have a column called “" + x[1] + "”. Say which one you mean by putting the table name in front, like members." + x[1].replace(/^.*\./, "") + " or harvests." + x[1].replace(/^.*\./, "") + ".";
  if ((x = /unrecognized token: "(.*)"$/.exec(m))){
    if (/^['"]/.test(x[1])) return "A quote isn’t closed: text needs a quote at both ends, like 'beans'.";
    if (/[‘’“”]/.test(x[1])) return "There’s a curly quote (‘ ’ “ ”) in the query. SQLite only understands straight quotes: 'beans'.";
    return "There’s a character SQLite can’t read: “" + x[1] + "”. Often a curly quote (‘ ’ “ ”) or a stray symbol: use straight 'single quotes' for text.";
  }
  if (/incomplete input/.test(m)) return "The query stops too early: a bracket or quote may not be closed, or something is missing after the last keyword.";
  if ((x = /near "([^"]*)": syntax error/.exec(m))){
    var near = x[1].toUpperCase();
    if (/\bTOP\s+\d/.test(cu)) return "SQLite doesn’t have TOP. Sort, then put LIMIT at the end: … ORDER BY kg DESC LIMIT 3.";
    if (near === "FROM" && /,\s*FROM\b/.test(cu)) return "There’s a comma just before FROM. Commas go between columns, not after the last one.";
    if (near === "WHERE" && /\bGROUP\s+BY\b[\s\S]*\bWHERE\b/.test(cu)) return "WHERE has to come before GROUP BY. To filter groups (on a COUNT or SUM), use HAVING after GROUP BY instead.";
    if (near === "GROUP" && /\bHAVING\b[\s\S]*\bGROUP\s+BY\b/.test(cu)) return "HAVING goes after GROUP BY: … GROUP BY crop HAVING SUM(kg) > 10.";
    if ((near === "ORDER" || near === "WHERE" || near === "GROUP") && /\bLIMIT\b[\s\S]*\b(ORDER|WHERE|GROUP)\b/.test(cu)) return "LIMIT goes at the very end, after ORDER BY: … ORDER BY kg DESC LIMIT 3.";
    if (near === "WHERE" && /\bORDER\s+BY\b[\s\S]*\bWHERE\b/.test(cu)) return "WHERE has to come before ORDER BY: SELECT … FROM … WHERE … ORDER BY ….";
    return "SQLite got confused near “" + x[1] + "”. Check the spelling of the keywords, the order of the parts (SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT), and that commas separate the columns.";
  }
  return "";
};

/* ------------------------------- R ------------------------------- */
var webR = null, shelter = null, rReady = null, RVER = "";
/* The harness lives in an environment attached to the search path ("tools:lab"), not in the global
   environment, so rm(list = ls()) can't remove it. Its functions' enclosure has only base R as parent,
   so a learner redefining paste, cat, vapply… in the global environment doesn't affect it. Before each run
   it resets what a previous run might have changed (sinks, attached data, options, the random generator). */
var HARNESS = String.raw`base::eval(base::quote({
  if (!is.na(match("tools:lab", search()))) detach("tools:lab")
  E <- attach(NULL, pos = 2L, name = "tools:lab", warn.conflicts = FALSE)
  L <- new.env(parent = baseenv())
  local({
    hists <- list(); plots <- 0L; opts <- NULL; search0 <- NULL
    esc <- function(s) { s <- gsub("\\", "\\\\", s, fixed = TRUE); s <- gsub("\"", "\\\"", s, fixed = TRUE); s <- gsub("\n", "\\n", s, fixed = TRUE); s <- gsub("\t", "\\t", s, fixed = TRUE); s <- gsub("\r", "", s, fixed = TRUE); s <- gsub("[\001-\037]", " ", s, useBytes = TRUE); paste0("\"", s, "\"") }
    json <- function(x) {
      if (is.null(x)) return("null")
      if (is.list(x)) { n <- names(x); parts <- vapply(seq_along(x), function(i) json(x[[i]]), ""); if (!is.null(n)) return(paste0("{", paste0(esc(n), ":", parts, collapse = ","), "}")); return(paste0("[", paste(parts, collapse = ","), "]")) }
      v <- if (is.logical(x)) ifelse(is.na(x), "null", ifelse(x, "true", "false")) else if (is.numeric(x)) ifelse(is.finite(x), as.character(x), "null") else ifelse(is.na(x), "null", esc(as.character(x)))
      if (length(v) == 1L) v else paste0("[", paste(v, collapse = ","), "]")
    }
    reset <- function() {
      while (sink.number() > 0L) sink()
      try(sink(type = "message"), silent = TRUE)
      for (p in setdiff(search(), search0)) try(detach(p, character.only = TRUE), silent = TRUE)
      for (p in setdiff(search0, search())) if (startsWith(p, "package:")) try(suppressMessages(library(substring(p, 9L), character.only = TRUE)), silent = TRUE)
      try(options(opts), silent = TRUE)
      rm(list = ls(globalenv(), all.names = TRUE), envir = globalenv())
      suppressWarnings(RNGkind("default", "default", "default")); set.seed(NULL)
      hists <<- list(); plots <<- 0L
      invisible()
    }
    run <- function(code) {
      reset()
      exprs <- tryCatch(parse(text = code, keep.source = TRUE), error = function(e) e)
      if (inherits(exprs, "error")) return(list(out = "", err = list(kind = "parse", msg = conditionMessage(exprs)), warns = list()))
      out <- character(); warns <- character(); err <- NULL
      con <- textConnection("out", "w", local = TRUE)
      conns0 <<- getAllConnections()
      sink(con); sink(con, type = "message")
      refs <- attr(exprs, "srcref")
      for (i in seq_along(exprs)) {
        r <- withCallingHandlers(tryCatch({ v <- withVisible(eval(exprs[[i]], globalenv())); if (v$visible) print(v$value); NULL }, error = function(e) e, labStop = function(e) e),
          warning = function(w) { warns <<- c(warns, conditionMessage(w)); invokeRestart("muffleWarning") })
        if (inherits(r, "error") || inherits(r, "labStop")) {
          cl <- tryCatch(paste(deparse(conditionCall(r), nlines = 1L), collapse = " "), error = function(e) "")
          if (!length(cl) || startsWith(cl, "eval(exprs") || identical(cl, "NULL")) cl <- ""
          err <- list(kind = "error", msg = conditionMessage(r), call = cl, line = if (!is.null(refs)) refs[[i]][1L] else 0L); break
        }
      }
      while (sink.number() > 0L) sink()
      try(sink(type = "message"), silent = TRUE)
      try(close(con), silent = TRUE)
      o <- tryCatch(paste(out, collapse = "\n"), error = function(e) "")
      if (isTRUE(nchar(o, allowNA = TRUE) > 20000L)) o <- paste0(substr(o, 1L, 20000L), "\n… (output cut short: only the first 20,000 characters are shown)")
      list(out = o, err = err, warns = as.list(unique(warns)))
    }
    check <- function(tests) {
      pe <- tryCatch(as.environment("package:stats"), error = function(e) parent.env(globalenv()))
      te <- new.env(parent = pe)
      for (nm in ls(globalenv(), all.names = TRUE)) { v <- tryCatch(get(nm, envir = globalenv()), error = function(e) NULL); if (!is.function(v)) assign(nm, v, envir = te) }
      h <- hists
      # .same(x, y): equal values, ignoring names and dims (so coef(fit)[2] or colMeans(d["age"]) count), but not type
      assign(".same", function(x, y) isTRUE(all.equal(as.vector(unname(x)), as.vector(unname(y)))), envir = te)
      assign(".hist_of", function(x) Filter(function(k) is.numeric(k$x) && isTRUE(all.equal(as.numeric(k$x), as.numeric(x))), h), envir = te)
      vapply(tests, function(t) isTRUE(suppressWarnings(tryCatch(eval(parse(text = t), te), error = function(e) FALSE))), TRUE, USE.NAMES = FALSE)
    }
    hist <- function(x, ...) {
      a <- list(...); nm <- names(a); if (is.null(nm)) nm <- rep("", length(a))
      xn <- paste(deparse(substitute(x), width.cutoff = 500L), collapse = " ")
      hists[[length(hists) + 1L]] <<- list(x = x, main = a[["main", exact = TRUE]], xlab = a[["xlab", exact = TRUE]])
      if (!isFALSE(a[["plot", exact = TRUE]])) { if (!("main" %in% nm)) a$main <- paste("Histogram of", xn); if (!("xlab" %in% nm)) a$xlab <- xn }
      do.call(graphics::hist, c(list(x), a))
    }
    stopq <- function(...) stop("q() and quit() would close R, so they’re switched off in the Data Lab.", call. = FALSE)
    # plot.new() runs its hooks inside try(), so an ordinary error wouldn't stop the code: signal a condition that isn't an error
    plothook <- function() { plots <<- plots + 1L; if (plots > 40L) stop(structure(class = c("labStop", "condition"), list(message = "Your code drew more than 40 charts, so it was stopped. A loop may be drawing a new chart each time round.", call = NULL))) }
    conns0 <- integer()
    closeall <- function() { for (i in setdiff(getAllConnections(), conns0)) try(close(getConnection(i)), silent = TRUE); invisible() }
  }, envir = L)
  assign(".lab", L, envir = E); assign("hist", L$hist, envir = E); assign("q", L$stopq, envir = E); assign("quit", L$stopq, envir = E); assign("closeAllConnections", L$closeall, envir = E)
  setHook("plot.new", L$plothook, "replace")
  L$search0 <- search(); L$opts <- options()
  invisible()
}), base::new.env(parent = base::baseenv()))`;
var ENSURE = 'if (base::is.na(base::match("tools:lab", base::search())) || !base::exists(".lab", where = "tools:lab", inherits = FALSE)) {\n' + HARNESS + '\n}';
var LAB = 'base::get(".lab", envir = base::as.environment("tools:lab"))';
async function rStart(){
  var mod = await import(new URL(base + "vendor/webr/webr.mjs", location.href).href);
  webR = new mod.WebR({baseUrl:new URL(base + "vendor/webr/", location.href).href, channelType:mod.ChannelType.PostMessage});
  await webR.init();
  shelter = await new webR.Shelter();
  await webR.evalRVoid(HARNESS);
  RVER = await webR.evalRString("paste(R.version$major, R.version$minor, sep = '.')");
  return {version:"R " + RVER};
}
DL.rReady = function(){ if (!rReady) rReady = rStart().catch(function(e){ rReady = null; throw e; }); return rReady; };
function withLimit(p, ms){
  return new Promise(function(res, rej){
    var t = setTimeout(function(){ var e = new Error("timeout"); e.timeout = true; rej(e); }, ms);
    p.then(function(v){ clearTimeout(t); res(v); }, function(e){ clearTimeout(t); rej(e); });
  });
}
async function rRestart(){ try { webR.close(); } catch (e){} webR = null; shelter = null; rReady = null; }
async function writeFiles(files){
  await webR.evalRVoid('base::dir.create("/home/web_user", showWarnings = FALSE, recursive = TRUE); base::setwd("/home/web_user"); base::unlink(base::list.files("/home/web_user", all.files = TRUE, no.. = TRUE, full.names = TRUE), recursive = TRUE)');
  var keys = Object.keys(files || {});
  for (var i = 0; i < keys.length; i++) await webR.FS.writeFile("/home/web_user/" + keys[i], new TextEncoder().encode(files[keys[i]]));
}
async function rString(cap){
  var j = await cap.result.toJs();
  return j && j.values ? j.values[0] : "";
}
function tidyParse(err){
  // "<text>:2:12: unexpected ','\n1: …" → line 2, "unexpected ','"
  var m = String(err.msg || ""), x = /^<text>:(\d+):(\d+): ([^\n]*)/.exec(m);
  if (x){ err.line = +x[1]; err.msg = /'=>' is disabled/.test(x[3]) ? "unexpected '=>'" : x[3]; return err; }
  if ((x = /\s*\(<text>:(\d+):(\d+)\)/.exec(m))){ err.line = +x[1]; err.msg = m.replace(x[0], "").split("\n")[0]; }
  if (/'=>' is disabled/.test(err.msg)) err.msg = "unexpected '=>'";
  return err;
}
// run code; returns {out, err, warns, plots, checks?}
DL.r = async function(code, files, tests){
  await DL.rReady();
  try {
    return await withLimit((async function(){
      await webR.evalRVoid(ENSURE);
      await writeFiles(files);
      var cap = await shelter.captureR(LAB + '$json(' + LAB + '$run(code))', {env:{code:code}, captureStreams:true, captureConditions:false, captureGraphics:{width:504, height:360}});
      var res = JSON.parse(await rString(cap));
      var extra = cap.output.filter(function(o){ return o.type === "stdout" || o.type === "stderr"; }).map(function(o){ return o.data; }).join("\n");
      if (extra) res.out = (res.out ? res.out + "\n" : "") + extra;
      if (res.err && res.err.kind === "parse") tidyParse(res.err);
      var imgs = cap.images || [];
      res.plotCount = imgs.length;
      res.plots = imgs.slice(0, DL.MAXPLOTS);
      imgs.slice(DL.MAXPLOTS).forEach(function(b){ try { b.close(); } catch (e){} });
      if (tests && tests.length){
        await webR.evalRVoid(ENSURE);
        await writeFiles(files);   // the tests read the original files, even if the code changed them
        var chk = await shelter.captureR(LAB + '$json(' + LAB + '$check(tests))', {env:{tests:tests}, captureStreams:true, captureConditions:false});
        res.checks = [].concat(JSON.parse(await rString(chk)));
      }
      await shelter.purge();
      return res;
    })(), DL.LIMIT + 3000);
  } catch (e){
    if (e.timeout){ await rRestart(); return {timeout:true}; }
    await rRestart();
    if (/ExitStatus|terminated|exit\(/i.test(String(e && e.message))) return {out:"", warns:[], plots:[], plotCount:0, checks:[], err:{kind:"error", msg:"R was closed by the code (q() or quit()), so it has been restarted. Leave out q(): the Data Lab runs your code and tidies up for you."}};
    throw new Error("R had a problem and has been restarted. Press Run again. (" + (e && e.message || e) + ")");
  }
};
// what the code calls its data frame, and the column names it could mean (for friendlier messages)
DL.rContext = function(code, files){
  var c = String(code || ""), x, df = "", cols = [];
  if ((x = /(?:^|\n)\s*([A-Za-z.][\w.]*)\s*(?:<-|=)\s*(?:read\.csv|read\.table|data\.frame)\s*\(/.exec(c))) df = x[1];
  Object.keys(files || {}).forEach(function(f){ String(files[f]).split("\n")[0].split(",").forEach(function(h){ h = h.trim().replace(/^"|"$/g, ""); if (h) cols.push(h); }); });
  var re = /data\.frame\s*\(([\s\S]*?)\)\s*(?:\n|$)/g, y;
  while ((y = re.exec(c))){ var r2 = /([A-Za-z.][\w.]*)\s*=/g, z; while ((z = r2.exec(y[1]))) if (cols.indexOf(z[1]) < 0 && !/^(stringsAsFactors|check\.names|row\.names)$/.test(z[1])) cols.push(z[1]); }
  var names = [], r3 = /(?:^|[\n;{])\s*([A-Za-z.][\w.]*)\s*(?:<-|=)(?!=)/g, w;
  while ((w = r3.exec(c))) if (names.indexOf(w[1]) < 0) names.push(w[1]);
  var r4 = /->\s*([A-Za-z.][\w.]*)/g; while ((w = r4.exec(c))) if (names.indexOf(w[1]) < 0) names.push(w[1]);
  var hasFiles = !!(files && Object.keys(files).length);
  return {df:df || (hasFiles ? "d" : "df"), data:!!df || hasFiles, cols:cols, names:names, code:c};
};
var BASE_FUNS = ["mean", "median", "sum", "length", "nrow", "ncol", "print", "c", "table", "hist", "plot", "round", "sd", "max", "min", "cor", "lm", "coef", "summary", "head", "str", "names", "subset", "tapply", "aggregate", "sample", "replicate", "read.csv", "data.frame", "sqrt", "abs", "paste", "cat", "seq", "rep", "sort", "order", "unique", "is.na", "ifelse", "set.seed", "prop.table", "barplot", "boxplot", "nchar", "toupper", "tolower"];
var PKG_FUNS = {"%>%":"magrittr/dplyr", filter:"dplyr", mutate:"dplyr", select:"dplyr", summarise:"dplyr", summarize:"dplyr", group_by:"dplyr", arrange:"dplyr", count:"dplyr", n:"dplyr", ggplot:"ggplot2", aes:"ggplot2", geom_histogram:"ggplot2", geom_point:"ggplot2", read_csv:"readr", tibble:"tibble", glimpse:"dplyr", describe:"psych", skim:"skimr"};
var BASE_WAY = {"%>%":"Base R (4.1 and later) has its own pipe, |>: d |> head().", filter:"In base R: d[d$age >= 30, ] or subset(d, age >= 30).", select:"In base R: d[, c(\"age\", \"score\")].", mutate:"In base R: d$new <- … adds a column.", summarise:"In base R: mean(d$score), or tapply()/aggregate() by group.", summarize:"In base R: mean(d$score), or tapply()/aggregate() by group.", group_by:"In base R: tapply(d$score, d$group, mean) or aggregate(score ~ group, data = d, FUN = mean).", arrange:"In base R: d[order(d$age), ].", count:"In base R: nrow() counts rows, sum(condition) counts the TRUEs, and table() counts each value.", ggplot:"In base R: hist(), plot(), barplot() and boxplot().", read_csv:"In base R: read.csv(\"survey.csv\").", glimpse:"In base R: str(d)."};
DL.explainR = function(err, ctx){
  if (!err) return "";
  ctx = ctx || {}; var df = ctx.df || "d", cols = ctx.cols || [], known = cols.concat(ctx.names || []);
  var m = String(err.msg || ""), x;
  if (err.kind === "parse"){
    if (/unexpected end of input/.test(m)) return "R reached the end while still waiting for something: a closing bracket ) ] }, or a closing quote.";
    if (/INCOMPLETE_STRING/.test(m)) return "A quote isn’t closed: text needs a quote at both ends, like \"Yes\".";
    if (/pipe operator requires a function call/.test(m)) return "After |> R needs a function call with brackets: d |> head(), not d |> head.";
    if (/unexpected ','/.test(m)) return "There’s a comma where R didn’t expect one. R writes decimals with a full stop (12.5, not 12,5), and commas only go between the arguments inside brackets.";
    if (/unexpected symbol/.test(m)) return "Two things are next to each other with nothing between them. Often a missing comma between arguments, a missing operator (+, *), a missing bracket on the line before, or two commands on one line without a ; between them.";
    if (/unexpected string constant/.test(m)) return "There’s a piece of text in quotes where R didn’t expect one. Usually a comma is missing before it.";
    if (/unexpected numeric constant/.test(m)) return "There’s a number where R didn’t expect one. Usually a comma or an operator is missing before it.";
    if (/unexpected '\)'/.test(m)) return "There’s a closing bracket ) with no matching opening one, or a comma right before it.";
    if (/unexpected '\]'/.test(m)) return "There’s a ] with no matching [, or brackets of the wrong kind: c( ) uses round brackets, d[ ] uses square ones.";
    if (/unexpected '\}'/.test(m)) return "There’s a closing brace } that doesn’t match an opening {.";
    if (/unexpected '='/.test(m)) return "An = is in the wrong place. To store a value, use <- (or =) at the start of a line; to compare, use ==.";
    if (/'=>' is disabled|unexpected '=>'/.test(m)) return "=> isn’t an R operator. “Greater than or equal to” is written >= (and “less than or equal to” is <=).";
    if (/unexpected '>'/.test(m)) return "A > is in the wrong place. “Greater than or equal to” is written >= (not =>), and the pipe is |>.";
    if (/unexpected input/.test(m)) return "There’s a character R can’t read here. Often a curly quote (“ ” ‘ ’) from a phone or word processor: use straight quotes \"…\".";
    if (/unexpected 'else'/.test(m)) return "In R, else must go on the same line as the closing } of the if: } else {";
    return "R couldn’t read the code. Check brackets, quotes and commas, especially near the end of the line it mentions.";
  }
  if ((x = /object '([^']+)' not found/.exec(m))){
    var o = x[1], ci = known.filter(function(c){ return c.toLowerCase() === o.toLowerCase() && c !== o; })[0];
    if (/\.(csv|txt|tsv)$/i.test(o)) return "File names go in quotes: read.csv(\"" + o + "\"). Without quotes, R looks for an object called " + o + ".";
    if (cols.indexOf(o) > -1 && /\bfilter\s*\(/.test(ctx.code || "")) return "filter() in base R is a different function (for time series), and dplyr’s filter() isn’t available here. To pick rows in base R, use subset() or [ , ], for example subset(" + df + ", " + o + " >= 30) or " + df + "[" + df + "$" + o + " >= 30, ].";
    if (cols.indexOf(o) > -1) return "“" + o + "” is a column of a data frame, not an object of its own. Put the data frame’s name and $ in front: " + df + "$" + o + (/eval\((mf|predvars)/.test(err.call || "") ? ". In a formula, tell R where the columns are with data = " + df + ", and use ~ (tilde): lm(score ~ hours, data = " + df + ")." : ".");
    if (ci) return "R doesn’t know anything called “" + o + "”. Names are case-sensitive: did you mean “" + ci + "”?";
    if (new RegExp("(^|[^\\w.])" + o.replace(/\./g, "\\.") + "\\s*\\[[^\\]]*\\]\\s*(<-|=)").test(ctx.code || "")) return "R doesn’t know anything called “" + o + "” yet. To fill a vector in a loop, create it first, before the loop: " + o + " <- numeric(1000) (with the length you need).";
    return "R doesn’t know anything called “" + o + "”. Check the spelling and capital letters, and that you created it with <- earlier in the code. If it’s a column, write " + df + "$" + o + "; if it’s a piece of text, put it in quotes: \"" + o + "\".";
  }
  if ((x = /could not find function "([^"]+)"/.exec(m))){
    var f = x[1];
    if (PKG_FUNS[f]) return "“" + f + "” comes from the " + PKG_FUNS[f] + " package, and the Data Lab only has base R. " + (BASE_WAY[f] || "See the lesson for the base R way.");
    if (BASE_FUNS.indexOf(f.toLowerCase()) > -1 && f !== f.toLowerCase()) return "There’s no function called “" + f + "”. Function names are case-sensitive: did you mean “" + f.toLowerCase() + "”?";
    return "There’s no function called “" + f + "”. Check the spelling and capital letters. If it comes from a package (like dplyr or ggplot2), the Data Lab only has base R: see the lesson for the base R way.";
  }
  if (/there is no package called|not set up to install|install\.packages/.test(m)) return "The Data Lab has base R only, and packages can’t be installed here. Everything in these challenges can be done with base R, so leave out library() and install.packages().";
  if (/object of type 'closure' is not subsettable/.test(m)) return "You used $ or [ ] on a function rather than on data. R has built-in functions called df, data, c, t and mean, so a data frame name that’s misspelt or not created yet can land on one of them. Check the name: here the data frame is called " + df + ".";
  if (/non-numeric argument to (binary operator|mathematical function)/.test(m)) return "You’re doing maths with text. Check the column type with str(): numbers stored as text can be converted with as.numeric().";
  if (/invalid 'type' \(character\) of argument/.test(m)) return "sum() and similar functions need numbers, but got text. Check the column type with str(" + df + "); numbers stored as text can be converted with as.numeric().";
  if (/'[xy]' must be numeric/.test(m) && !ctx.data) return "This function needs a vector of numbers, but got something else: text, or perhaps a function’s name (mean is a function; check you used the name of your own object).";
  if (/'[xy]' must be numeric/.test(m)) return "This function needs numbers: one numeric column, like " + df + "$hours, not the whole data frame or a text column. A misspelt column name (like " + df + "$Hours) gives NULL, which isn’t numeric either.";
  if (/supply both 'x' and 'y' or a matrix-like 'x'/.test(m)) return "cor() only got one set of numbers. Usually a misspelt column name: " + df + "$Score gives NULL when the column is score. Check with names(" + df + ").";
  if (/arguments must have same length/.test(m)) return "The vectors you gave have different lengths. Usually a misspelt column name: " + df + "$Group gives NULL when the column is group. Check with names(" + df + ").";
  if (/undefined columns selected/.test(m)) return "R was asked for a column that doesn’t exist. To pick rows, remember the comma: " + df + "[condition, ] (without the comma, R picks columns). Check column names with names(" + df + ").";
  if (/\$ operator is invalid for atomic vectors/.test(m)) return "$ only works on data frames and lists. This object is a plain vector: use [ ] instead, or check you used the data frame’s name.";
  if (/incorrect number of dimensions/.test(m)) return "You used [rows, columns] on something with only one dimension (a vector). Use x[i] for a vector, and " + df + "[rows, columns] for a data frame.";
  if (/subscript out of bounds/.test(m)) return "You asked for a position or name that doesn’t exist. R counts from 1, and length() tells you how many items there are.";
  if (/arguments imply differing number of rows/.test(m)) return "The columns you gave data.frame() have different lengths. Each column needs the same number of values.";
  if (/cannot open file '([^']+)'/.test(m) || /cannot open the connection/.test(m)) return "R couldn’t find that file. Check the file name exactly (capitals count, and the .csv ending). The files here are listed above the editor.";
  if ((x = /argument "(\w+)" is missing, with no default/.exec(m))) return "A function needs a value for “" + x[1] + "” that wasn’t given. Check you gave all its arguments, separated by commas.";
  if ((x = /unused argument/.exec(m))) return "A function was given an argument it doesn’t have. Check the spelling of the argument names, and that each bracket closes in the right place.";
  if (/missing value where TRUE\/FALSE needed/.test(m)) return "An if() got NA instead of TRUE or FALSE, usually because of a missing value. Check with is.na().";
  if (/the condition has length > 1/.test(m)) return "if() needs a single TRUE or FALSE, but got several. To test every value of a vector, use ifelse(), or a condition inside [ ].";
  if (/argument is of length zero/.test(m)) return "An if() got nothing at all to test, often because of a misspelt column name (" + df + "$Age gives NULL when the column is age).";
  if (/cannot take a sample larger than the population/.test(m)) return "Without replace = TRUE, sample() uses each value at most once, like dealing cards, so it can’t draw 10 values from 6. For dice rolls add replace = TRUE: sample(1:6, 10, replace = TRUE).";
  if (/plot\.new has not been called yet/.test(m)) return "abline(), lines(), points() and text() add to a chart that’s already there: draw one first, for example plot(" + df + "$hours, " + df + "$score), then abline(fit).";
  if (/attempt to apply non-function/.test(m)) return "Something that isn’t a function is followed by ( ). Often a missing operator: write 2 * (3 + 4), not 2(3 + 4).";
  if (/replacement has \d+ rows?, data has \d+/.test(m)) return "The new column has a different number of values from the data frame’s rows.";
  return "";
};
DL.explainWarn = function(w, ctx){
  var df = (ctx && ctx.df) || "d", x;
  if (/argument is not numeric or logical: returning NA/.test(w)) return "mean() was given something that isn’t numbers, so it returned NA: a text column, or NULL from a misspelt column name (" + df + "$Age when the column is age). Check with str(" + df + ").";
  if (/NAs introduced by coercion/.test(w)) return "Some values couldn’t be turned into numbers, so they became NA. Look for stray text such as “n/a”, or commas in the numbers.";
  if (/longer object length is not a multiple of shorter object length|number of items to replace is not a multiple/.test(w)) return "Two things of different lengths were combined, so R reused (recycled) the shorter one. This usually means a mistake: check the lengths with length().";
  if (/NaNs produced/.test(w)) return "A calculation had no answer in ordinary numbers (like sqrt(-1) or log(-1)), so it gave NaN, “not a number”.";
  if (/the standard deviation is zero/.test(w)) return "One of the variables has the same value in every row, so a correlation can’t be calculated (it gives NA).";
  if ((x = /"(\w+)" is not a graphical parameter/.exec(w))) return "“" + x[1] + "” isn’t an argument of this function, so R ignored it. A chart’s title is main = \"…\", and the axis labels are xlab = and ylab =.";
  if (/extra argument.*will be disregarded/.test(w)) return "R ignored an argument it doesn’t use. In a model formula, use ~ (tilde), not =: lm(score ~ hours, data = " + df + ").";
  if (/no non-missing arguments to (max|min)/.test(w)) return "max() or min() was given nothing (an empty vector), so it returned -Inf or Inf. Check the condition you used to pick the values.";
  return "";
};
/* ------------------------------ checking ------------------------------ */
function stripComments(code, kind){
  return kind === "sql" ? code.replace(/--[^\n]*/g, "").replace(/\/\*[\s\S]*?\*\//g, "") : code.split("\n").map(function(l){
    var q = null, out = "";
    for (var i = 0; i < l.length; i++){ var c = l[i]; if (q){ out += c; if (c === "\\"){ out += l[++i] || ""; } else if (c === q) q = null; } else if (c === "\"" || c === "'"){ q = c; out += c; } else if (c === "#") break; else out += c; }
    return out;
  }).join("\n");
}
DL.check = async function(ch, code){
  var res = {results:[], error:null, output:"", plots:[], table:null};
  if (ch.kind === "sql"){
    var runs = [[ch.setup, "this database"], [ch.setup2, "a second version of the database with different numbers"]].filter(function(r){ return r[0]; });
    for (var k = 0; k < runs.length; k++){
      var got = await DL.sql(runs[k][0], code), want = await DL.sql(runs[k][0], ch.solution);
      if (got.timeout){ res.timeout = true; return res; }
      if (k === 0){ res.table = got.results[got.results.length - 1] || null; }
      if (got.error){ res.error = {msg:got.error, explain:DL.explainSql(got.error, code)}; res.results.push({t:"The query runs", ok:false, msg:"SQLite stopped with an error: " + got.error + "."}); return res; }
      var cmp = DL.sameResult(got, want, ch.ordered, ch.colOrder);
      if (!cmp.ok && k > 0){
        var gl = got.results[got.results.length - 1], wl = want.results[want.results.length - 1], gn = gl ? gl.values.length : 0, wn = wl ? wl.values.length : 0, cu = sqlWords(code).toUpperCase(), why;
        if (/\bDISTINCT\b/.test(cu) && gn < wn) why = "DISTINCT removes repeated rows, but here two rows really are the same (for example two harvests of the same crop and weight), and both should be shown.";
        else if (/\b(LEFT|RIGHT|FULL)\s+(OUTER\s+)?JOIN\b/.test(cu) && gn > wn) why = "An outer JOIN also keeps rows with no match (here a member with no harvests). Use a plain JOIN, which keeps only matching pairs.";
        else why = "Check the query doesn’t rely on particular values from the first database (typed-in answers, ids or names, or a LIMIT that happened to fit), and that each comparison is the right one (> or >=).";
        cmp.msg = "Right on the first database, but not on a second version with different data. " + cmp.msg + " " + why;
      }
      res.results.push({t:k === 0 ? "The result matches" : "It also works on " + runs[k][1], ok:cmp.ok, msg:cmp.msg || ""});
      if (!cmp.ok) return res;
    }
    return res;
  }
  // R
  var clean = stripComments(code, "r"), ctx = DL.rContext(code, ch.files);
  var sets = [[ch.files || {}, ""]]; if (ch.files2) sets.push([ch.files2, " (also with a second data file)"]);
  for (var s = 0; s < sets.length; s++){
    var rtests = ch.tests.filter(function(t){ return t.r; }).map(function(t){ return t.r; });
    var r = await DL.r(code, sets[s][0], rtests);
    if (r.timeout){ res.timeout = true; return res; }
    if (s === 0){ res.output = r.out; res.plots = r.plots; res.plotCount = r.plotCount; res.warns = r.warns; }
    if (r.err){ res.error = {msg:r.err.msg, line:r.err.line, kind:r.err.kind, explain:DL.explainR(r.err, ctx)}; res.results = [{t:"The code runs", ok:false, msg:(r.err.kind === "parse" ? "R couldn’t read the code" : "R stopped with an error") + (r.err.line ? " on line " + r.err.line : "") + (s ? " (with a second data file)" : "") + ": " + r.err.msg.split("\n")[0]}]; return res; }
    var ri = 0, list = [];
    ch.tests.forEach(function(t){
      var ok = true, msg = "";
      if (t.r){ ok = !!(r.checks && r.checks[ri++]); }
      if (ok && t.plot) ok = r.plots.length > 0, msg = ok ? "" : "No chart was drawn.";
      if (ok && t.outHas) ok = r.out.indexOf(t.outHas) > -1;
      if (ok && t.src) ok = new RegExp(t.src).test(clean);
      if (ok && t.srcNot) ok = !new RegExp(t.srcNot).test(clean);
      list.push({t:t.t + (s ? sets[s][1] : ""), ok:ok, msg:ok ? "" : (t.msg || msg || "Not quite yet.")});
    });
    if (s === 0) res.results = list;
    else list.forEach(function(x, i){ if (res.results[i].ok && !x.ok){ x.msg = "This worked with the first file, but not with a second version of " + Object.keys(ch.files2)[0] + " that has different numbers, so part of the answer may be typed in rather than worked out from the data. Calculate it from the data frame (for example with nrow(), mean() or sum())."; res.results[i] = x; } });
    if (list.some(function(x){ return !x.ok; })) break;
  }
  if (res.warns && res.warns.length) res.warnText = res.warns.map(function(w){ var e = DL.explainWarn(w, ctx); return w + (e ? " — " + e : ""); });
  return res;
};
if (typeof module !== "undefined" && module.exports) module.exports = DL; else root.DataLab = DL;
})(this);
