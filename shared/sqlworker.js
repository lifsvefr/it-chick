/* IT CHICK Academy · Data Lab SQL worker. Runs SQLite (sql.js, bundled in /vendor/sqljs) away from the page,
   so a runaway query can be stopped by terminating the worker.
   Message: {id, op:"run", setup, sql} → {id, ok, data:{results:[{columns, values, more?}], error, changes}}
   Every statement that returns columns gives a result, even with no rows (so "no rows" still shows the columns).
   At most MAXROWS rows are kept per result; `more` is set when there were more. */
importScripts("../vendor/sqljs/sql-wasm.js");
var MAXROWS = 5000;
var ready = initSqlJs({ locateFile: function(f){ return "../vendor/sqljs/" + f; } });
function runAll(db, sql){
  var out = [];
  for (var it = db.iterateStatements(sql || ""), s = it.next(); !s.done; s = it.next()){
    var st = s.value, cols = st.getColumnNames(), res = cols.length ? {columns:cols, values:[]} : null;
    while (st.step()){
      if (!res) continue;
      if (res.values.length >= MAXROWS){ res.more = true; break; }
      res.values.push(st.get());
    }
    if (res) out.push(res);
  }
  return out;
}
self.onmessage = function(e){
  var m = e.data;
  ready.then(function(SQL){
    if (m.op === "ping"){ self.postMessage({id:m.id, ok:true, version:"SQLite " + new SQL.Database().exec("select sqlite_version()")[0].values[0][0]}); return; }
    var db = new SQL.Database(), out = {results:[], error:null};
    try { if (m.setup) db.exec(m.setup); }
    catch (err){ self.postMessage({id:m.id, ok:false, error:"setup: " + err.message}); db.close(); return; }
    try {
      out.results = runAll(db, m.sql);
      out.changes = db.getRowsModified();
      if (m.after) out.after = db.exec(m.after);
    } catch (err){ out.error = String(err.message || err); }
    try { db.close(); } catch (err){}
    self.postMessage({id:m.id, ok:true, data:out});
  }).catch(function(err){ self.postMessage({id:m.id, ok:false, error:String(err && err.message || err)}); });
};
