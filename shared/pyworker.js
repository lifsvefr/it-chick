/* IT CHICK Academy · Python Lab worker (module worker).
   Runs learner code with real Python (Pyodide, bundled in /vendor/pyodide) away from the page, so a loop that
   never ends can be stopped by terminating the worker. Messages: {id, op:"run"|"check", code, inputs, files, tests}. */
import { loadPyodide } from "../vendor/pyodide/pyodide.mjs";

const HARNESS = String.raw`
import sys, io, os, json, math, traceback, shutil, re, builtins, tokenize

WORK = "/home/pyodide/lab"
KEEP = 200000   # characters of output kept for checking
SHOW = 20000    # characters of output sent back to the page
_MISSING = object()

class _OutOfInput(Exception):
    pass

_BUILTINS = vars(builtins)

def _snapshot():
    # learner code may replace things like print, os.remove or math.pi; put them back after each run
    snap = []
    for m in list(sys.modules.values()):
        try:
            snap.append((m, dict(vars(m))))
        except TypeError:
            pass
    return snap, sys.getrecursionlimit(), dict(_BUILTINS), dict(sys.modules)

def _restore(state):
    snap, limit, bi, mods = state
    # builtins first, using only dict methods, in case the program removed setattr, len and friends
    _BUILTINS.clear()
    _BUILTINS.update(bi)
    for k, v in mods.items():
        if k not in sys.modules:
            sys.modules[k] = v
    for m, before in snap:
        try:
            d = vars(m)
            for k in [k for k in d if k not in before]:
                try:
                    delattr(m, k)
                except BaseException:
                    pass
            for k, v in before.items():
                if d.get(k, _MISSING) is not v:
                    try:
                        setattr(m, k, v)
                    except BaseException:
                        pass
        except BaseException:
            pass
    try:
        sys.setrecursionlimit(limit)
    except BaseException:
        pass

class _Out(io.TextIOBase):
    # collects printed text, keeping at most KEEP characters so a runaway print loop can't eat the memory
    def __init__(self, also=None):
        super().__init__()
        self.parts, self.n, self.cut, self.also = [], 0, False, also
    def writable(self):
        return True
    @property
    def encoding(self):
        return "utf-8"
    def write(self, s):
        if not isinstance(s, str):
            raise TypeError("write() argument must be str, not %s" % type(s).__name__)
        if self.also is not None:
            self.also.write(s)
        room = KEEP - self.n
        if len(s) > room:
            self.cut = True
            s = s[:max(room, 0)]
        if s:
            self.parts.append(s)
            self.n += len(s)
        return len(s)
    def getvalue(self):
        return "".join(self.parts)

class _In(io.TextIOBase):
    # sys.stdin reads the same answers as input()
    def __init__(self, queue):
        super().__init__()
        self.queue = queue
    def readable(self):
        return True
    def readline(self, size=-1):
        return str(self.queue.pop(0)) + "\n" if self.queue else ""
    def read(self, size=-1):
        s = "".join(str(x) + "\n" for x in self.queue)
        del self.queue[:]
        return s

def _shown(buf):
    s = buf.getvalue()
    if len(s) > SHOW or buf.cut:
        s = s[:SHOW] + "\n… (That’s a lot of output, so only the first %s characters are shown.)" % format(SHOW, ",")
    return s

def _reset(files):
    os.chdir("/")
    if os.path.isdir(WORK):
        shutil.rmtree(WORK)
    os.makedirs(WORK)
    os.chdir(WORK)
    for name, content in (files or {}).items():
        d = os.path.dirname(name)
        if d:
            os.makedirs(d, exist_ok=True)
        with open(name, "w", encoding="utf-8") as f:
            f.write(content)

def _err_info(e, code):
    try:
        return _err_info2(e, code)
    except BaseException:
        return {"type": type(e).__name__, "msg": "", "line": 0, "text": ""}

def _err_info2(e, code):
    lines = code.split("\n")
    if isinstance(e, SyntaxError):
        ln = e.lineno or 0
        smsg = e.msg or str(e)
        try:
            last = list(traceback.TracebackException.from_exception(e).format_exception_only())[-1].strip()
            pre = type(e).__name__ + ": "
            if last.startswith(pre) and last[len(pre):].startswith(smsg):
                smsg = last[len(pre):]
        except BaseException:
            pass
        return {"type": type(e).__name__, "msg": smsg, "line": ln,
                "text": (lines[ln-1] if 0 < ln <= len(lines) else (e.text or "")).rstrip("\r\n"),
                "offset": e.offset or 0}
    tb = traceback.extract_tb(e.__traceback__)
    user = [f for f in tb if f.filename == "main.py"]
    ln = user[-1].lineno if user else 0
    msg = str(e)
    try:
        last = list(traceback.TracebackException.from_exception(e).format_exception_only())[-1].strip()
        pre = type(e).__name__ + ": "
        if last.startswith(pre):
            msg = last[len(pre):]
    except BaseException:
        pass
    return {"type": type(e).__name__, "msg": msg, "line": ln,
            "text": (lines[ln-1] if 0 < ln <= len(lines) else "").rstrip("\r"),
            "frames": [[f.lineno, f.name] for f in user[-20:]]}

def _run(code, inputs, files, echo=False):
    _reset(files)
    shown = _Out()
    out = _Out(also=shown)
    asked = []
    queue = list(inputs or [])
    def fake_input(prompt=""):
        prompt = str(prompt)
        asked.append(prompt)
        if not queue:
            if echo:
                shown.write(prompt)
            raise _OutOfInput("input() was called more times than there are answers.")
        answer = str(queue.pop(0))
        if echo:
            shown.write(prompt + answer + "\n")
        return answer
    ns = {"__name__": "__main__", "__file__": WORK + "/main.py", "input": fake_input}
    state = _snapshot()
    sys.stdout, sys.stderr, sys.stdin = out, shown, _In(queue)
    builtins.input = fake_input
    err = None
    try:
        exec(compile(code, "main.py", "exec"), ns)
    except SystemExit as e:
        if e.code is not None and not isinstance(e.code, int):
            shown.write(str(e.code) + "\n")
    except BaseException as e:
        err = _err_info(e, code)
    finally:
        _restore(state)   # also puts back sys.stdout, sys.stderr, sys.stdin and builtins.input
        # like Python does when a program ends: files left open are saved and closed
        for v in list(ns.values()):
            if isinstance(v, io.IOBase):
                try:
                    v.close()
                except BaseException:
                    pass
        try:
            os.chdir(WORK)
        except BaseException:
            os.chdir("/")
    return ns, out, shown, err, asked, queue

def _nocomments(code):
    # the source without comments, so a comment can't pass (or fail) a source check
    try:
        toks = list(tokenize.generate_tokens(io.StringIO(code).readline))
    except BaseException:
        return code
    lines = code.split("\n")
    for t in reversed(toks):
        if t.type == tokenize.COMMENT and t.start[0] == t.end[0] and 0 < t.start[0] <= len(lines):
            l = lines[t.start[0] - 1]
            lines[t.start[0] - 1] = l[:t.start[1]] + l[t.end[1]:]
    return "\n".join(lines)

def _where(err):
    if err["type"] == "_OutOfInput":
        return "The program asked for input() more times than this test gives answers for."
    at = " on line %s" % err["line"] if err.get("line") else ""
    if err["type"] in ("SyntaxError", "IndentationError", "TabError"):
        return "Python couldn’t read the program: %s%s (see the explanation above)." % (err["type"], at)
    return "The program stopped with %s%s." % (err["type"], at)

def _norm(s):
    lines = [l.rstrip() for l in str(s).replace("\r\n", "\n").replace("\r", "\n").split("\n")]
    while lines and not lines[-1]:
        lines.pop()
    return "\n".join(lines)

def _same(a, b):
    if isinstance(a, bool) or isinstance(b, bool):
        return a is b or a == b and type(a) == type(b)
    if isinstance(a, (int, float)) and isinstance(b, (int, float)):
        return math.isclose(a, b, rel_tol=1e-9, abs_tol=1e-9)
    if isinstance(a, (list, tuple)) and isinstance(b, (list, tuple)):
        return len(a) == len(b) and all(_same(x, y) for x, y in zip(a, b))
    if isinstance(a, dict) and isinstance(b, dict):
        return a.keys() == b.keys() and all(_same(a[k], b[k]) for k in a)
    return a == b

def _numeq(text, v):
    if isinstance(v, bool) or not isinstance(v, (int, float)):
        return False
    try:
        return math.isclose(float(text), v, rel_tol=1e-9, abs_tol=1e-9)
    except (TypeError, ValueError):
        return False

def _show(v, n=160):
    r = repr(v)
    return r if len(r) <= n else r[:n-3] + "..."

def _out_hint(got, want, code):
    g, w = _norm(got), _norm(want)
    if g.lower() == w.lower():
        return "The words are right but some capital letters differ."
    if re.sub(r"\s+", "", g) == re.sub(r"\s+", "", w):
        return "The characters are right but the spaces or line breaks differ."
    if not g:
        return "Nothing was printed. Did you use print()?"
    if re.sub(r"(\d)\.0\b", r"\1", g) == w:
        return "Some numbers end in “.0” where they shouldn’t. float() and / always give a decimal number; use int(…) for whole numbers."
    gl, wl = g.split("\n"), w.split("\n")
    if len(gl) > len(wl):
        it = iter(gl)
        if all(any(x == y for x in it) for y in wl):
            return "The expected lines are all there, but there are extra lines too. Look for a print() that runs more often than it should (is it inside a loop?) or isn’t needed" + (" (to show a question, put its text inside input(\"…\") instead of printing it)." if "input(" in code else ".")
    if len(gl) != len(wl):
        return "Expected %d line%s of output, got %d." % (len(wl), "" if len(wl) == 1 else "s", len(gl))
    if len(wl) == 1:
        return ""
    for i, (a, b) in enumerate(zip(gl, wl)):
        if a != b:
            return "Line %d differs: it should be %s but it’s %s." % (i + 1, _show(b, 80), _show(a, 80))
    return ""

def _call_failed(name, args, cerr):
    if cerr["type"] == "_OutOfInput":
        return "Calling %s(%s) stopped because the function asked for input(). It should use its parameters instead: the values arrive in the brackets." % (name, args)
    return "Calling %s(%s) stopped with %s%s." % (name, args, cerr["type"], " on line %s" % cerr["line"] if cerr.get("line") else "")

def _check(code, tests_json):
    tests = json.loads(tests_json)
    results = []
    first_err = None
    first_out = None
    plain = _nocomments(code)
    d_in = next((t["inputs"] for t in tests if "inputs" in t), None)
    d_files = next((t["files"] for t in tests if "files" in t), None)
    for t in tests:
        t.setdefault("inputs", d_in)
        t.setdefault("files", d_files)
        r = {"t": t.get("t", ""), "ok": True, "msg": ""}
        def fail(m):
            r["ok"] = False
            r["msg"] = m.strip()
        run_code = code
        if "sub" in t:
            # change the starting values, to check the program works them out instead of typing the answer in
            for pat, rep in t["sub"]:
                run_code, n = re.subn(pat, rep, run_code, flags=re.M)
                if not n:
                    fail(t.get("submsg") or "Keep the starting lines that set up the values: this test changes them to check your code still works.")
            if not r["ok"]:
                results.append(r)
                continue
        ns, outbuf, shownbuf, err, asked, left = _run(run_code, t.get("inputs"), t.get("files"))
        out = outbuf.getvalue()
        if first_out is None:
            first_out = _shown(shownbuf)
        if err and not t.get("expectError"):
            if first_err is None:
                first_err = err
            fail(t.get("errmsg") or _where(err))
            results.append(r)
            continue
        if t.get("expectError"):
            if not err or err["type"] != t["expectError"]:
                fail(t.get("msg") or "Expected a %s here." % t["expectError"])
        if "out" in t and r["ok"]:
            if _norm(out) != _norm(t["out"]):
                fail((t.get("msg") or "The output isn’t right yet.") + " Expected: " + _show(_norm(t["out"])) + ". Got: " + _show(_norm(out)) + ". " + _out_hint(out, t["out"], code))
        if "outHas" in t and r["ok"]:
            for piece in t["outHas"]:
                if piece.lower() not in out.lower():
                    fail((t.get("msg") or "The output is missing something.") + " It should include " + _show(piece) + ". Got: " + _show(_norm(out)) + ".")
                    break
        if "outRe" in t and r["ok"]:
            if not re.search(t["outRe"], out, re.I | re.M):
                fail((t.get("msg") or "The output doesn’t look right yet.") + " Got: " + _show(_norm(out)) + ".")
        if "var" in t and r["ok"]:
            name = t["var"]
            if name not in ns:
                fail("There’s no variable called %s. Check the spelling (Python names are case-sensitive)." % name)
            elif "expect" in t and not _same(ns[name], t["expect"]):
                got, want = ns[name], t["expect"]
                if isinstance(got, str) and not isinstance(want, str) and _numeq(got.strip(), want):
                    fail("%s holds the text %s, but it should hold the number %s. Text in quotes, str() and f-strings make text; leave them out here." % (name, _show(got), _show(want)))
                else:
                    fail((t.get("msg") or ("%s isn’t right yet." % name)) + " It is %s; expected %s." % (_show(got), _show(want)))
        if "call" in t and r["ok"]:
            fn = ns.get(t["call"])
            if fn is None:
                fail("There’s no function called %s(). Define it with def %s(…):" % (t["call"], t["call"]))
            elif not callable(fn):
                fail("%s exists but isn’t a function." % t["call"])
            else:
                buf = _Out()
                state = _snapshot()
                old = sys.stdout, sys.stderr, sys.stdin
                sys.stdout = sys.stderr = buf
                sys.stdin = _In([])
                try:
                    got = fn(*t.get("args", []))
                    cerr = None
                except BaseException as e:
                    got = None; cerr = _err_info(e, run_code)
                finally:
                    sys.stdout, sys.stderr, sys.stdin = old
                    _restore(state)
                    try:
                        os.chdir(WORK)
                    except BaseException:
                        pass
                printed = _norm(buf.getvalue())
                args = ", ".join(_show(a) for a in t.get("args", []))
                if cerr:
                    if first_err is None and cerr["type"] != "_OutOfInput":
                        first_err = cerr
                    fail(_call_failed(t["call"], args, cerr))
                elif "expect" in t and not _same(got, t["expect"]):
                    if got is None and printed and (printed == _norm(str(t["expect"])) or _numeq(printed.split("\n")[-1], t["expect"])):
                        fail("%s(%s) printed %s but returned None. The task needs the function to return the value (use return), so other code can use it." % (t["call"], args, _show(printed)))
                    elif got is None:
                        fail((t.get("msg") + " " if t.get("msg") else "") + "%s(%s) returned None, which means the function didn’t give anything back. End it with a return line that hands back the answer." % (t["call"], args))
                    elif isinstance(got, str) and not isinstance(t["expect"], str) and (got.strip() == str(t["expect"]) or _numeq(got.strip(), t["expect"])):
                        fail("%s(%s) returned the text %s, but it should return the number %s. Leave out the quotes or str()." % (t["call"], args, _show(got), _show(t["expect"])))
                    else:
                        fail((t.get("msg") or "") + (" " if t.get("msg") else "") + "%s(%s) returned %s; expected %s." % (t["call"], args, _show(got), _show(t["expect"])))
        if "file" in t and r["ok"]:
            p = t["file"]
            if not os.path.exists(p):
                fail("The file %s wasn’t created." % p)
            else:
                with open(p, encoding="utf-8", errors="replace") as f:
                    content = f.read()
                if "fileHas" in t and any(x not in content for x in t["fileHas"]):
                    fail((t.get("msg") or "The file’s contents aren’t right yet.") + " It contains: " + _show(content) + ".")
                if "fileEq" in t and _norm(content) != _norm(t["fileEq"]):
                    fail((t.get("msg") or "The file’s contents aren’t right yet.") + " Expected " + _show(_norm(t["fileEq"])) + ", got " + _show(_norm(content)) + ".")
        if "src" in t and r["ok"]:
            if not re.search(t["src"], plain, re.M):
                fail(t.get("msg") or "The code doesn’t use what this task practises yet.")
        if "srcNot" in t and r["ok"]:
            if re.search(t["srcNot"], plain, re.M):
                fail(t.get("msg") or "The code uses something this task asks you to avoid.")
        if "py" in t and r["ok"]:
            try:
                ok = eval(t["py"], {"ns": ns, "out": out, "code": plain, "os": os, "re": re})
            except BaseException as e:
                ok = False
            if not ok:
                fail(t.get("msg") or "Not quite yet.")
        if r["ok"] and left and not t.get("allowUnused"):
            fail("The program didn’t ask for all the input this test gives it (it used %d of %d answers). Is an input() missing?" % (len(t.get("inputs") or []) - len(left), len(t.get("inputs") or [])))
        results.append(r)
    return json.dumps({"results": results, "error": first_err, "output": first_out or ""})

def _just_run(code, inputs_json, files_json):
    ns, out, shown, err, asked, left = _run(code, json.loads(inputs_json), json.loads(files_json), echo=True)
    listing = []
    for root, dirs, fs in os.walk(WORK):
        for f in fs:
            listing.append(os.path.relpath(os.path.join(root, f), WORK))
    return json.dumps({"output": _shown(shown), "error": err, "asked": asked, "files": sorted(listing)})
`;

let py = null;
const ready = (async () => {
  py = await loadPyodide({ indexURL: new URL("../vendor/pyodide/", import.meta.url).href });
  py.runPython(HARNESS);
  return py;
})();

self.onmessage = async (e) => {
  const m = e.data;
  try {
    await ready;
    if (m.op === "ping") { self.postMessage({ id: m.id, ok: true, version: py.runPython("import sys; sys.version.split()[0]") }); return; }
    let res;
    if (m.op === "check") res = py.globals.get("_check")(m.code, JSON.stringify(m.tests || []));
    else res = py.globals.get("_just_run")(m.code, JSON.stringify(m.inputs || []), JSON.stringify(m.files || {}));
    self.postMessage({ id: m.id, ok: true, data: JSON.parse(res) });
  } catch (err) {
    self.postMessage({ id: m.id, ok: false, error: String(err && err.message || err) });
  }
};
