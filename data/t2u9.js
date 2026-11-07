/* Track 2 · Unit 9 · Automating and debugging */
ICA.addUnit({
  id:"t2u9", track:"t2", n:9, title:"Automating and debugging", icon:"🔧",
  blurb:"Put Python to work on real files: read and write text, total up spreadsheet data, and rename or tidy hundreds of files with a script that shows you its plan before it touches anything. Then learn the calm, step-by-step way professionals find bugs, and what to do when you’re stuck.",
  goals:[
    "Build file paths with `pathlib`, read and write text files with `with open(…)` and `encoding=\"utf-8\"`, and choose the right mode without wiping a file by accident",
    "Read, total, filter and write CSV files with the `csv` module, explain why a spreadsheet app can change CSV data, and save simple data as JSON",
    "Automate a repetitive file task safely: a dry run first, a backup, checks for name clashes, a script that is safe to run twice, and running it from the command line",
    "Debug calmly: read a whole traceback, reproduce the bug, look inside with `print`, narrow it down by halves, check assumptions with `assert`, step through code with a debugger, and test edge cases",
    "Get unstuck: search error messages well, read the official documentation, ask a clear question with a minimal example, and use AI assistants to explain without handing over your thinking or your secrets"
  ],
  read:[
    {book:"atbs", where:"Chapter 5, “Debugging”; Chapter 10, “Reading and Writing Files”; Chapter 11, “Organizing Files”; Chapter 12, “Designing and Deploying Command Line Programs”; Chapter 18, “CSV, JSON, and XML Files”", note:"Third edition (2025), free to read online. Each lesson below names the sections that match it. The book uses the Mu editor for its debugger; the ideas are the same in Thonny or VS Code."},
    {book:"missing", where:"“Debugging and Profiling” (2026 lecture), the “Debugging” half: “Printf Debugging and Logging”, “Debuggers” and “AI for Debugging”", note:"Written for computer science students, so it soon moves on to tools for C programs and servers. Read the first sections and skip the rest for now."},
    {book:"thinkpy", where:"The “Debugging” section at the end of most chapters, especially 1.7, 6.10 (checking what goes into and out of a function), 12.10 (the “six R’s” of debugging) and 13.8 (invisible whitespace in files); Chapter 13, “Files and Databases”"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u9-l1", title:"Working with files and paths", minutes:55,
   hook:{q:"A file called `notes.txt` holds a whole week of notes. Lucía’s script runs `open(\"notes.txt\", \"w\")`, writes one line, and finishes. What is in the file now?", options:["The week of notes, with the new line added at the end","Only the new line: the week of notes is gone","Nothing changes: Python refuses to open a file that already exists","Python asks “Replace the existing file?” before writing"], answer:1, reveal:"Only the new line. Mode `\"w\"` means “write from scratch”: Python empties the file the moment it opens it, with no warning and no undo. To add to the end you need mode `\"a\"` (append). This lesson covers how to find files with paths, how to read and write them, and how to choose a mode without losing anything."},
   goals:[
     "Explain absolute and relative paths, the working directory, and why Windows paths use backslashes",
     "Build and take apart paths with `pathlib.Path`, using `/`, `.name`, `.stem`, `.suffix` and `.parent`",
     "Write and read text files with `with open(…)`, always passing `encoding=\"utf-8\"`",
     "Choose between the modes `\"r\"`, `\"w\"`, `\"a\"` and `\"x\"`, and check whether a file exists before using it"
   ],
   learn:[
    {h:"Why programs need files", body:[
      {lead:"Everything a script keeps in variables disappears when it finishes. Files are how a program remembers."},
      "In Unit 8 your programs worked with values in memory: strings, lists, dictionaries. That memory is wiped the moment the program ends. To keep a shopping list, a log of what happened, or the results of a long calculation, a program has to **save it to a file**, and to use data someone else made, it has to **read a file**.",
      "This lesson works with **text files**: files that hold readable characters, such as `.txt`, `.csv`, `.json`, `.py` and `.html`. You can open them in Notepad, TextEdit or VS Code and read them. A photo or a Word document is a **binary** file instead: its bytes only make sense to the right program. Python can handle those too, but they need different tools.",
      "Quick recap of what this unit relies on from Unit 8: `print()`, variables, strings and f-strings, `if`, lists, dictionaries, `for` loops, functions with `def` and `return`, and reading the last line of a traceback. When something new appears, it’s explained where it’s used."
    ]},
    {h:"Paths: the address of a file", body:[
      "Before Python can open a file, it needs to know **where** the file is. A [[file-path-py|path]] is that address: the chain of folders that leads to the file, then the file’s name.",
      {fig:'<svg viewBox="0 0 340 344"><rect class="d-panel" x="10" y="10" width="110" height="26" rx="5" stroke-width="1.5"/><text x="65" y="28" text-anchor="middle">Users</text><path class="d-ink" d="M22,36 L22,62 L34,62" stroke-width="1.5" fill="none"/><rect class="d-panel" x="34" y="49" width="90" height="26" rx="5" stroke-width="1.5"/><text x="79" y="67" text-anchor="middle">ana</text><text class="s" x="134" y="66">her home folder</text><path class="d-ink" d="M46,75 L46,101 L58,101" stroke-width="1.5" fill="none"/><rect class="d-gold" x="58" y="88" width="90" height="26" rx="5" stroke-width="2"/><text x="103" y="106" text-anchor="middle">club</text><text class="s" x="158" y="99">working directory:</text><text class="s" x="158" y="114">the script runs here</text><path class="d-ink" d="M70,114 L70,140 L82,140" stroke-width="1.5" fill="none"/><rect class="d-soft" x="82" y="127" width="100" height="26" rx="5" stroke-width="1.5"/><text x="132" y="145" text-anchor="middle">tidy.py</text><path class="d-ink" d="M70,140 L70,179 L82,179" stroke-width="1.5" fill="none"/><rect class="d-panel" x="82" y="166" width="100" height="26" rx="5" stroke-width="1.5"/><text x="132" y="184" text-anchor="middle">notes</text><path class="d-ink" d="M94,192 L94,218 L106,218" stroke-width="1.5" fill="none"/><rect class="d-sage" x="106" y="205" width="130" height="26" rx="5" stroke-width="2"/><text x="171" y="223" text-anchor="middle">shopping.txt</text><text x="10" y="262">Absolute: from the very top</text><text class="s" x="10" y="280">/Users/ana/club/notes/shopping.txt</text><text class="s" x="10" y="296">C:\\Users\\ana\\club\\notes\\shopping.txt</text><text x="10" y="320">Relative: from the working directory</text><text class="s" x="10" y="338">notes/shopping.txt</text></svg>', alt:"A folder tree. Users contains ana, her home folder. ana contains club, highlighted as the working directory where the script runs. club contains tidy.py and a folder called notes, which contains shopping.txt. Below: the absolute path from the very top is /Users/ana/club/notes/shopping.txt on a Mac, or C:\\Users\\ana\\club\\notes\\shopping.txt on Windows. The relative path from the working directory is notes/shopping.txt.", cap:"One file, two ways to write its address. A relative path only works if you start from the right folder."},
      {list:[
        "An **[[absolute-path|absolute path]]** starts at the very top of the drive, so it works from anywhere: `/Users/ana/club/notes/shopping.txt` on a Mac, `/home/ana/club/notes/shopping.txt` on Linux, `C:\\Users\\ana\\club\\notes\\shopping.txt` on Windows.",
        "A **relative path** starts from the **[[working-directory|working directory]]**, the folder the program is “standing in”. If Ana runs her script from inside `club`, then `notes/shopping.txt` finds the same file."
      ]},
      "When you run `python3 tidy.py` in a [[terminal]], the working directory is the folder the terminal was in (Unit 6). Editors such as VS Code and Thonny usually run a script from its own folder or from the project folder you opened, which is why a script can work in the editor and fail in the terminal, or the other way round.",
      {table:[
        ["System","Separator","Example"],
        ["Windows","Backslash `\\`","`C:\\Users\\ana\\notes.txt`"],
        ["macOS","Forward slash `/`","`/Users/ana/notes.txt`"],
        ["Linux and ChromeOS Linux","Forward slash `/`","`/home/ana/notes.txt`"]
      ]},
      {tip:"Windows also accepts forward slashes in most places, and Python is happy with `C:/Users/ana/notes.txt` on Windows. That avoids the backslash trap explained next."}
    ]},
    {h:"pathlib: paths as objects, not just strings", body:[
      "You could store paths as plain strings, but Python’s [[pathlib]] module (built in, nothing to install) gives you **Path objects** that know how to join folders correctly on every system and how to pull a path apart.",
      {code:['from pathlib import Path','','folder = Path("notes")','file = folder / "shopping.txt"','print(file)','print(file.name)','print(file.stem)','print(file.suffix)','print(file.parent)'].join("\n"), lang:"py", label:"paths.py", cap:"Prints `notes/shopping.txt` (on Windows, `notes\\shopping.txt`), then `shopping.txt`, `shopping`, `.txt` and `notes`."},
      {list:[
        "`from pathlib import Path` loads the `Path` tool from the [[py-module|module]] `pathlib`.",
        "The `/` operator **joins** path parts. Python puts in the right separator for your system, so the same script works on Windows, macOS and Linux.",
        "`.name` is the last part, `.stem` is the name without its extension, `.suffix` is the [[file-extension|extension]] with its dot, and `.parent` is the folder that contains it."
      ]},
      "Three more you’ll use often: `Path.cwd()` gives the working directory, `Path.home()` gives your home folder, and `.resolve()` turns a relative path into the absolute path it points to, which is a quick way to see where Python is really looking.",
      {code:['from pathlib import Path','','print(Path.cwd())','print(Path.home())','print(Path("notes/shopping.txt").resolve())'].join("\n"), lang:"py", label:"Where am I?", cap:"For Ana on a Mac this might print `/Users/ana/club`, `/Users/ana` and `/Users/ana/club/notes/shopping.txt`. Your output shows your own folders."},
      {h:"The backslash trap"},
      "Inside a normal Python string, a backslash starts an **escape sequence**: `\\n` means “new line” and `\\t` means “tab”. So a Windows path typed as an ordinary string can quietly turn into something else:",
      {code:['print("C:\\new\\table.txt")','print(r"C:\\new\\table.txt")','print("C:/new/table.txt")'].join("\n"), lang:"py", label:"Same path, three ways", cap:"The first line prints `C:`, then a line break, then `ew`, a tab and `able.txt`. The second and third print the path as written."},
      "The `r` before the quotes makes a **raw string**, where backslashes are just backslashes. Worse cases fail outright: `\"C:\\Users\\Ana\"` is a SyntaxError, because `\\U` starts a special code for a Unicode character. Use a raw string, forward slashes, or best of all, `Path(\"C:/Users/Ana\") / \"notes.txt\"`.",
      {code:['print(r"C:\\new\\table.txt")'].join("\n"), lang:"py", label:"Raw string", cap:"`C:\\new\\table.txt`, exactly as typed."}
    ]},
    {h:"Writing a text file", body:[
      "Here is the standard way to create a file and put text in it:",
      {code:['from pathlib import Path','','Path("notes").mkdir(exist_ok=True)','with open("notes/shopping.txt", "w", encoding="utf-8") as f:','    f.write("rice\\n")','    f.write("lentils\\n")','    f.write("café au lait\\n")','print("Saved")'].join("\n"), lang:"py", label:"write_list.py", cap:"Creates the folder `notes` if it isn’t there yet, then a file with three lines. The script prints `Saved`."},
      {list:[
        "`Path(\"notes\").mkdir(exist_ok=True)` makes the folder. `exist_ok=True` means “if it already exists, that’s fine”; without it, a second run would stop with `FileExistsError`.",
        "`open(…)` [[open-file|opens]] the file and gives back a **file object**, here named `f`. Its arguments are the path, the **[[file-mode|mode]]** (`\"w\"` for write), and the **[[text-encoding|encoding]]**.",
        "`with … as f:` is a **[[with-statement|with statement]]**. The indented lines run with the file open; when they finish, Python **closes the file for you**, even if an error happens halfway. Closing matters: until a file is closed, some of the text may still be waiting in memory instead of being on the disk.",
        "`f.write()` writes exactly the string you give it. It does **not** add a line break, so each line ends with `\\n`."
      ]},
      {key:"Write every file with `with open(path, mode, encoding=\"utf-8\") as f:`. The `with` closes the file; the encoding makes sure accented letters, emoji and every writing system survive."}
    ]},
    {h:"Reading a text file", body:[
      "Reading uses the same pattern. Mode `\"r\"` (read) is the default, so you can leave it out:",
      {code:['with open("notes/shopping.txt", encoding="utf-8") as f:','    text = f.read()','print(text)'].join("\n"), lang:"py", label:"Read it all at once", cap:"Prints the three lines. `text` is one string, line breaks included."},
      "`f.read()` gives you the whole file as one string. That’s fine for small files. For anything bigger, or when you want to deal with one line at a time, loop over the file object:",
      {code:['with open("notes/shopping.txt", encoding="utf-8") as f:','    for line in f:','        print(repr(line), "->", line.strip())'].join("\n"), lang:"py", label:"One line at a time", cap:"Prints `\'rice\\n\' -> rice`, then the same for `lentils` and `café au lait`."},
      "Each `line` still ends with its `\\n`. `repr()` shows a string with its hidden characters visible, which is why you can see the `\\n` here. `.strip()` removes spaces and line breaks from both ends; you’ll want it almost every time you read lines, or comparisons such as `line == \"rice\"` will quietly be false.",
      {h:"Shortcuts for small files"},
      "Path objects have two one-line helpers that open, read or write, and close for you:",
      {code:['from pathlib import Path','','p = Path("notes") / "log.txt"','p.write_text("Started\\n", encoding="utf-8")','print(p.read_text(encoding="utf-8"))'].join("\n"), lang:"py", label:"read_text and write_text", cap:"Prints `Started`. `write_text` replaces the whole file, just like mode `\"w\"`."}
    ]},
    {h:"Modes and encodings", body:[
      "The mode decides what happens to a file **the moment it’s opened**, before you write anything:",
      {table:[
        ["Mode","Meaning","If the file exists","If it doesn’t"],
        ["`\"r\"`","Read (the default)","Reads it","FileNotFoundError"],
        ["`\"w\"`","Write from scratch","**Empties it straight away**","Creates it"],
        ["`\"a\"`","Append","Adds to the end","Creates it"],
        ["`\"x\"`","Create only","FileExistsError","Creates it"]
      ]},
      {code:['with open("notes/shopping.txt", "w", encoding="utf-8") as f:','    f.write("bread\\n")','','with open("notes/shopping.txt", "a", encoding="utf-8") as f:','    f.write("tea\\n")','','with open("notes/shopping.txt", encoding="utf-8") as f:','    print(f.read())'].join("\n"), lang:"py", label:"w, then a", pylab:"pl-file", cap:"Prints `bread` and `tea`. The rice, lentils and café au lait are gone: the `\"w\"` wiped them."},
      {warn:"`\"w\"` has no undo and no warning. If you want to keep what’s there, use `\"a\"`. If you must never replace an existing file (a report, a backup), use `\"x\"`: it stops with `FileExistsError` instead of overwriting."},
      {lab:"pl-file", t:"Practise: add lines to a to-do file with `\"a\"`, then read it back"},
      {h:"Why encoding=\"utf-8\" every time"},
      "A file on disk is bytes, not letters. An [[text-encoding|encoding]] is the rule that turns characters into bytes and back. UTF-8 can store every writing system and is what the web, macOS and Linux use. But if you leave `encoding` out, Python has used the computer’s own default, and on many Windows computers that has been an older encoding such as cp1252.",
      "Mismatched encodings cause two kinds of trouble. Reading UTF-8 text with the wrong encoding gives **mojibake**, garbled text such as `cafÃ©` instead of `café`. Reading other bytes as UTF-8 stops with a `UnicodeDecodeError`. Python 3.15 (released in October 2026) makes UTF-8 the default everywhere, but many computers run older versions, so writing `encoding=\"utf-8\"` keeps your script behaving the same on every machine."
    ]},
    {h:"When the file isn’t there", body:[
      "Trying to read a file that doesn’t exist stops the program:",
      {code:['path = "notes/todo.txt"','with open(path, encoding="utf-8") as f:','    print(f.read())'].join("\n"), lang:"py", label:"A missing file"},
      {ex:"Traceback (most recent call last):\n  File \"/Users/ana/club/read_todo.py\", line 2, in <module>\n    with open(path, encoding=\"utf-8\") as f:\n         ~~~~^^^^^^^^^^^^^^^^^^^^^^^^\nFileNotFoundError: [Errno 2] No such file or directory: 'notes/todo.txt'", label:"What Python shows", mono:true},
      "You can check first with `.exists()`:",
      {code:['from pathlib import Path','','p = Path("notes") / "todo.txt"','if p.exists():','    print(p.read_text(encoding="utf-8"))','else:','    print("No file yet:", p)'].join("\n"), lang:"py", label:"Check before reading", cap:"Prints `No file yet: notes/todo.txt` instead of crashing."},
      "When you’re **sure** the file is there and still get `FileNotFoundError`, the cause is almost always one of these:",
      {ol:[
        "**The working directory isn’t what you think.** The relative path is being looked up from a different folder. Print `Path.cwd()` and `Path(\"notes/todo.txt\").resolve()` to see where Python is actually looking.",
        "**The name is slightly different.** A hidden extension (`todo.txt.txt` on Windows when extensions are hidden), a capital letter (`Todo.txt` on macOS or Linux, where case can matter), or a trailing space.",
        "**A backslash turned into an escape**, as in the trap above."
      ]},
      {tip:"`p.is_file()` and `p.is_dir()` are stricter versions of `exists()`: they tell you whether the path is a file or a folder."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Mode `\"w\"` adds to the file.”** It empties the file first. Adding is `\"a\"`.",
        "**“`write()` adds a new line.”** Unlike `print()`, it writes exactly what you give it. Put `\\n` at the end of each line.",
        "**“I don’t need `with`; the file closes itself.”** It usually does eventually, but `with` guarantees it, at a known moment, even after an error.",
        "**“A relative path is relative to the script’s folder.”** It’s relative to the working directory, which may be somewhere else.",
        "**“Encoding only matters for other languages.”** A single é, ñ, ü, curly quote or emoji can break reading if the encodings don’t match."
      ]}
    ]}
   ],
   try:[
    {id:"t2u9-l1-x1", type:"sort", q:"Sort each path: does it work from any folder (absolute), or does it depend on the working directory (relative)?", buckets:["Absolute","Relative"], items:[
      {t:"`C:\\Users\\Hana\\Documents\\budget.csv`", b:0, why:"It starts with a drive letter, so it names the full chain from the top of the C: drive."},
      {t:"`/home/kenji/photos/cat.jpg`", b:0, why:"On Linux and macOS a path starting with `/` begins at the very top of the file system."},
      {t:"`notes/shopping.txt`", b:1, why:"No drive and no leading slash: Python looks for a `notes` folder inside the working directory."},
      {t:"`shopping.txt`", b:1, why:"A bare file name is the most relative path of all: it only means “in the working directory”."},
      {t:"`../data/members.csv`", b:1, why:"`..` means “the folder above the working directory”, so where this ends up depends on where you start."},
      {t:"`/Users/amara/club/minutes.txt`", b:0, why:"A macOS path starting with `/`: it works the same from any folder."}
    ]},
    {id:"t2u9-l1-x2", type:"match", q:"`p = Path(\"club\") / \"2026\" / \"minutes.txt\"`. Match each expression with what it gives (shown as text, on macOS or Linux).", pairs:[
      ["`p.name`","`minutes.txt`","`.name` is the last part of the path: the file’s full name."],
      ["`p.stem`","`minutes`","`.stem` is the name without the extension."],
      ["`p.suffix`","`.txt`","`.suffix` is the extension, including its dot."],
      ["`p.parent`","`club/2026`","`.parent` is everything except the last part: the folder that holds the file."],
      ["`p`","`club/2026/minutes.txt`","The `/` operator joined the three parts with the system’s separator (a backslash on Windows)."]
    ]},
    {id:"t2u9-l1-x3", type:"mcq", q:"Kenji’s script keeps a diary of each run in `log.txt`. Every time it runs, he wants **one new line added** and every earlier line kept. Which line opens the file correctly?", options:[
      {t:"`with open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:`", ok:true, why:"Right. Append mode adds to the end and keeps what’s there, and creates the file on the very first run."},
      {t:"`with open(\"log.txt\", \"w\", encoding=\"utf-8\") as f:`", why:"`\"w\"` empties the file every time it’s opened, so the log would only ever hold the latest line."},
      {t:"`with open(\"log.txt\", \"x\", encoding=\"utf-8\") as f:`", why:"`\"x\"` only creates new files. The second run would stop with `FileExistsError` because the log already exists."},
      {t:"`with open(\"log.txt\", encoding=\"utf-8\") as f:`", why:"With no mode this opens for reading (`\"r\"`), so `f.write()` would fail. It also fails on the first run, when there is no file yet."}
    ]},
    {id:"t2u9-l1-x4", type:"number", q:"Sione’s script does four things to `list.txt`, in order:\n\n1. Opens it with `\"w\"` and writes two lines.\n2. Opens it with `\"a\"` and writes three lines.\n3. Opens it with `\"w\"` and writes one line.\n4. Opens it with `\"a\"` and writes one line.\n\nEvery line ends with `\\n`. How many lines does the file hold at the end?", answer:2, tol:0, unit:"lines", why:"Step 1: 2 lines. Step 2 appends: 5. Step 3 opens with `\"w\"`, which empties the file, then writes 1 line: 1. Step 4 appends: **2**.", wrongs:[
      {v:7, tol:0, why:"That adds every line up, as if every mode appended. The `\"w\"` in step 3 empties the file first."},
      {v:1, tol:0, why:"That stops after step 3. Step 4 opens with `\"a\"`, which keeps that line and adds another."},
      {v:6, tol:0, why:"That treats only the first `\"w\"` as starting fresh. The `\"w\"` in step 3 wipes the file too."}
    ]},
    {id:"t2u9-l1-x5", type:"spot", q:"Fatima wrote this to save her café’s menu. Tap every line that could **lose data, crash or garble text**.", ask:"a problem", mono:true, parts:[
      {t:"folder = Path(\"C:\\Users\\Fatima\\menu\")", flag:true, why:"In an ordinary string, `\\U` starts a Unicode escape, so this is a SyntaxError. Use `Path(\"C:/Users/Fatima/menu\")` or a raw string `r\"…\"`."}, "\n", {t:"folder.mkdir(exist_ok=True)", flag:false, why:"Fine: it makes the folder, and `exist_ok=True` means a second run doesn’t fail."}, "\n", {t:"with open(folder / \"menu.txt\", \"w\") as f:", flag:true, why:"No `encoding=\"utf-8\"`. On a computer whose default isn’t UTF-8, the “è” and “û” in “Crème brûlée” may be saved in another encoding, and reading the file back as UTF-8 then stops with a `UnicodeDecodeError` or shows garbled text."}, "\n", {t:"    f.write(\"Crème brûlée\\n\")", flag:false, why:"Fine: the string ends with `\\n`, so the next item starts on a new line."}, "\n", {t:"with open(folder / \"menu.txt\", \"w\", encoding=\"utf-8\") as f:", flag:true, why:"Opening the same file again with `\"w\"` empties it, so the crème brûlée line is lost. To add more, use `\"a\"`, or write everything inside one `with` block."}, "\n", {t:"    f.write(\"Mint tea\\n\")", flag:false, why:"Writing a line is fine; the data loss comes from the `\"w\"` on the line above."}
    ]},
    {id:"t2u9-l1-x6", type:"mcq", q:"Priya’s script reads `data/members.txt`. It works when she clicks **Run** in her editor, but in the terminal `python3 scripts/report.py` gives `FileNotFoundError`. The file definitely exists. What should she check first?", options:[
      {t:"The working directory: in the terminal, the relative path is looked up from the folder she ran the command in", ok:true, why:"Right. A relative path like `data/members.txt` is relative to the working directory, not to the script. Printing `Path.cwd()` and `Path(\"data/members.txt\").resolve()` shows where Python is looking."},
      {t:"Whether the file is too big for Python to open", why:"Size gives other errors, if any. `FileNotFoundError` means Python looked in a place where there was no such file."},
      {t:"Whether she needs `\"a\"` mode instead of `\"r\"`", why:"The mode doesn’t change where Python looks. Append mode would even create a new, empty file in the wrong place."},
      {t:"Whether the terminal needs the file to be opened in an editor first", why:"Files don’t need to be open anywhere else. The difference is which folder each way of running starts from."}
    ]}
   ],
   apply:{intro:"Write and read real files. On a computer, use a code editor such as VS Code or Thonny (or the terminal); on a phone, use the Python Lab in this app. The Lab keeps files in a temporary folder inside the browser and empties it each time you press ▶ Run, so write and read a file in the same program.", tasks:[
     {t:"Find out where your script is standing", how:{
       win:["Make a folder called `filework` in your Documents folder. In VS Code use **File → Open Folder** to open it; in Thonny just save your files there.","Create `where.py` with the second code block from “pathlib: paths as objects” (the one that prints `Path.cwd()`, `Path.home()` and a resolved path).","Run it with the editor’s **Run** button. Then open a terminal in that folder (in VS Code: **Terminal → New Terminal**) and run `python where.py` (or `py where.py`).","Compare the outputs. Then run it from your home folder instead: `cd ~` and `python Documents\\filework\\where.py`, and see how the working directory changes."],
       mac:["Make a folder called `filework` in Documents and open it in VS Code (**File → Open Folder**) or save files there from Thonny.","Create `where.py` with the second code block from “pathlib: paths as objects”.","Run it with **Run**, then in Terminal: `cd ~/Documents/filework` and `python3 where.py`.","Now `cd ~` and run `python3 Documents/filework/where.py`. Notice that `Path.cwd()` changed but the script didn’t."],
       chromeos:["Turn on the Linux development environment if you haven’t (Settings → About ChromeOS → Developers), then open the Terminal app.","Run `mkdir -p filework`, `cd filework`, and create `where.py` with a text editor (for example `nano where.py`, or VS Code installed inside Linux).","Paste the second code block from “pathlib: paths as objects”, save, and run `python3 where.py`.","Run `cd ~` and `python3 filework/where.py` and compare."],
       phone:["Open **Labs → Python Lab** and pick any challenge (or the file challenge).","Type `from pathlib import Path` and `print(Path.cwd())` and run it.","You’ll see a folder such as `/home/pyodide/lab`, inside the Lab’s own small, temporary file system, not your phone’s files. That’s normal: the Lab runs Python inside the browser, and anything a program saves there is cleared the next time you press ▶ Run."]
     }, write:"What did Path.cwd() print each time? Why did it change?"},
     {t:"Keep a list in a file", how:["Write `write_list.py`: create a `notes` folder and write three items of your own shopping or to-do list to `notes/list.txt`, using `\"w\"` and `encoding=\"utf-8\"`. Include one word with an accent or an emoji.","Write a second script, or add lines, that opens the file with `\"a\"` and adds one more item.","Read the file back line by line, and print each line with `line.strip()`.","Change the `\"a\"` to `\"w\"`, run everything again, and see what disappears. (On a phone, do all of this as one program in the Python Lab, because the Lab empties its folder before each run. The `pl-file` challenge practises the append step.)"], write:"What did the file contain after the \"w\" run? Which mode would you use for a running log?"},
     {t:"Make the crash, then prevent it", how:["Try to read `notes/missing.txt`. Read the whole traceback: the error type, the message and the line number.","Rewrite it with `Path(…).exists()` so it prints a friendly message instead.","Also try `print(\"C:\\new\\table.txt\")` and then the raw-string version, to see the backslash trap for yourself. It behaves the same on every computer and in the Python Lab, because the escapes belong to Python strings, not to Windows."]}
   ], proof:"A file you created with Python containing at least four lines (one added with \"a\"), the output of Path.cwd() from two different starting folders, and the FileNotFoundError you caused and then prevented with exists()."},
   read:[
     {book:"atbs", where:"Chapter 10, “Reading and Writing Files”: from “Files and Filepaths” to “Checking Path Validity”, then “The File Reading and Writing Process” to “Using with Statements”", note:"The book explains `encoding='utf-8'`, the modes, and Windows’ older cp1252 default."},
     {book:"thinkpy", where:"Chapter 13, “Files and Databases”: 13.1 “Filenames and paths” and 13.8 “Debugging” (invisible whitespace in files, and differences between operating systems)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u9-l2", title:"Spreadsheet data: CSV and JSON", minutes:55,
   hook:{q:"A CSV file has a column `qty`, and one row says 3. Python’s `csv` module reads that row into `row`. What does `row[\"qty\"] * 2` give?", options:["6","\"33\"","An error: you can’t multiply text","3.0"], answer:1, reveal:"It gives \"33\". The `csv` module hands you every cell as a **string**, even ones that look like numbers, and multiplying a string by 2 repeats it. To do arithmetic you convert first: `int(row[\"qty\"]) * 2` is 6. This lesson shows how to read, total, filter and write CSV files, and why that “everything is text” rule is actually a gift."},
   goals:[
     "Read a CSV file with `csv.reader` and `csv.DictReader`, and explain why splitting lines on commas isn’t enough",
     "Convert text to numbers and calculate totals, counts per category and filtered totals",
     "Write a new CSV with `csv.writer` or `csv.DictWriter`, using `newline=\"\"`, without touching the original",
     "Explain how spreadsheet apps can change CSV data and how Python avoids that, and save simple data as JSON"
   ],
   learn:[
    {h:"CSV: a table written as plain text", body:[
      {lead:"A CSV file is a spreadsheet with everything except the values stripped away: one row per line, commas between the cells."},
      "You met [[csv|CSV]] files in Digital Foundations ({{csv-files}}). Banks, shops, survey tools and club membership systems all export them, so “read this CSV and work something out” is one of the most useful things a short Python script can do. Here’s a community bake sale’s record, saved as `sales.csv`:",
      {code:['date,item,qty,price','2026-11-01,banana bread,3,4.50','2026-11-01,"cookies, oat",12,1.25','2026-11-02,banana bread,2,4.50','2026-11-02,samosa,10,1.50'].join("\n"), lang:"txt", label:"sales.csv"},
      "The first line is the **header row**: the column names. Look at the third line. The item name contains a comma, so the program that saved it wrapped it in double quotes. That’s the CSV rule: a value that contains a comma, a quote or a line break goes inside quotes.",
      "That rule is why splitting each line on commas goes wrong:",
      {code:['line = \'2026-11-01,"cookies, oat",12,1.25\'','print(line.split(","))'].join("\n"), lang:"py", label:"Don’t do this", cap:"Prints five pieces instead of four: `\'\"cookies\'` and `\' oat\"\'` have been torn apart, so every later column is in the wrong place."},
      {key:"Never take CSVs apart with `split(\",\")`. Python’s built-in [[csv-module|csv module]] knows the quoting rules, so let it do the reading and writing."}
    ]},
    {h:"Reading rows with csv.reader", body:[
      {code:['import csv','','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.reader(f):','        print(row)'].join("\n"), lang:"py", label:"read_sales.py", cap:"Prints five lists, starting with `[\'date\', \'item\', \'qty\', \'price\']` and including `[\'2026-11-01\', \'cookies, oat\', \'12\', \'1.25\']`, with the comma safely inside the item."},
      {list:[
        "`import csv` loads the module. It’s part of Python’s [[standard-library|standard library]], so there’s nothing to install.",
        "`newline=\"\"` hands line endings to the `csv` module untouched. Python’s documentation asks for it whenever you open a file for `csv`: without it, a value with a line break inside quotes can be misread, and on Windows a written CSV gets an extra `\\r` at the end of every row, which many apps show as a blank line between rows.",
        "`csv.reader(f)` turns the file into rows, and each row is a **list of strings**. The header row is just the first row."
      ]},
      "Notice the quotes around `\'12\'` and `\'1.25\'`. They are strings, not numbers. The `csv` module never guesses what a cell means; it gives you exactly the characters that are in the file. You decide what to convert."
    ]},
    {h:"Rows as dictionaries: DictReader", body:[
      "Remembering that the quantity is `row[2]` gets confusing fast. `csv.DictReader` reads the header row for you and gives each later row as a [[py-dict|dictionary]], so you can use the column names:",
      {code:['import csv','','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.DictReader(f):','        print(row["item"], row["qty"])'].join("\n"), lang:"py", label:"By column name", cap:"Prints `banana bread 3`, `cookies, oat 12`, `banana bread 2` and `samosa 10`. The header row isn’t printed: it became the keys."},
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="t2u9a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">In the file: one line of text</text><rect class="d-panel" x="10" y="28" width="320" height="30" rx="5" stroke-width="1.5"/><text class="s" x="20" y="48">2026-11-01,"cookies, oat",12,1.25</text><path class="d-ink" d="M170,58 L170,88" stroke-width="2" marker-end="url(#t2u9a1)"/><text class="s" x="180" y="78">csv.reader</text><text x="10" y="106">A list of strings</text><rect class="d-lup" x="10" y="114" width="320" height="48" rx="5" stroke-width="1.5"/><text class="s" x="20" y="134">[\'2026-11-01\', \'cookies, oat\',</text><text class="s" x="20" y="152"> \'12\', \'1.25\']</text><path class="d-ink" d="M170,162 L170,192" stroke-width="2" marker-end="url(#t2u9a1)"/><text class="s" x="180" y="182">csv.DictReader</text><text x="10" y="210">A dictionary, keyed by the header</text><rect class="d-sage" x="10" y="218" width="320" height="66" rx="5" stroke-width="1.5"/><text class="s" x="20" y="238">{\'date\': \'2026-11-01\',</text><text class="s" x="20" y="256"> \'item\': \'cookies, oat\',</text><text class="s" x="20" y="274"> \'qty\': \'12\', \'price\': \'1.25\'}</text><text x="10" y="306">Every value is still a string.</text><text class="s" x="10" y="324">Convert with int() or float() before maths.</text></svg>', alt:"One line of the file, 2026-11-01, then cookies, oat in quotes, then 12, then 1.25. An arrow labelled csv.reader leads to a list of four strings in which cookies, oat stays one item. A second arrow labelled csv.DictReader leads to a dictionary: date 2026-11-01, item cookies, oat, qty 12, price 1.25, all as strings. A note says every value is still a string; convert with int() or float() before doing maths.", cap:"The same line read two ways. The quotes in the file protect the comma; the quotes in Python mean “this is a string”."},
      "If you want all the rows at once, for example to count them or loop over them twice, turn the reader into a list:",
      {code:['import csv','','with open("sales.csv", newline="", encoding="utf-8") as f:','    rows = list(csv.DictReader(f))','','print(len(rows), "rows")','print(rows[0])'].join("\n"), lang:"py", label:"All rows in a list", cap:"Prints `4 rows`, then the first row as a dictionary: `{\'date\': \'2026-11-01\', \'item\': \'banana bread\', \'qty\': \'3\', \'price\': \'4.50\'}`."}
    ]},
    {h:"Totals, filters and counts", body:[
      "Now the useful part. To total the takings, convert each cell before multiplying. `int()` turns `\"3\"` into 3; `float()` turns `\"4.50\"` into 4.5:",
      {code:['import csv','','total = 0','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.DictReader(f):','        total += int(row["qty"]) * float(row["price"])','print(f"Takings: {total:.2f}")'].join("\n"), lang:"py", label:"Total a column", pylab:"pl-csv", cap:"Prints `Takings: 52.50` (3 × 4.50 + 12 × 1.25 + 2 × 4.50 + 10 × 1.50). `:.2f` in the [[f-string]] shows two decimal places."},
      "`total += x` is short for `total = total + x`. Forget the conversion, and Python stops you:",
      {ex:"    print(row[\"qty\"] * row[\"price\"])\n          ~~~~~~~~~~~^~~~~~~~~~~~~~\nTypeError: can't multiply sequence by non-int of type 'str'", label:"Without int() and float()", mono:true},
      "Read that message calmly: a “sequence” here is a string, and Python can multiply a string only by a whole number (that’s how `\"3\" * 2` became `\"33\"` in the warm-up). Two strings can’t be multiplied, hence the error.",
      {h:"A filter: only some rows"},
      "Add an `if` inside the loop to use only the rows you care about:",
      {code:['import csv','','total = 0','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.DictReader(f):','        if row["item"] == "banana bread":','            total += int(row["qty"])','print("Banana bread sold:", total)'].join("\n"), lang:"py", label:"Filtered total", cap:"Prints `Banana bread sold: 5`."},
      {h:"Counts per category"},
      "To total each item separately, keep a dictionary whose keys are the item names. `per_item.get(name, 0)` means “the value for this key, or 0 if it isn’t there yet”:",
      {code:['import csv','','per_item = {}','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.DictReader(f):','        name = row["item"]','        money = int(row["qty"]) * float(row["price"])','        per_item[name] = per_item.get(name, 0) + money','','for name, money in per_item.items():','    print(f"{name}: {money:.2f}")'].join("\n"), lang:"py", label:"Takings per item", cap:"Prints `banana bread: 22.50`, `cookies, oat: 15.00` and `samosa: 15.00`."},
      "That one pattern (loop over rows, convert, add into a dictionary) is the same idea as a spreadsheet’s SUMIF or a pivot table, and it works the same on four rows or four million.",
      {lab:"pl-csv", t:"Practise: total a column of a CSV with the csv module"},
      {lab:"pl-fix-type", t:"Practise: fix a ticket calculator that tries to multiply text"}
    ]},
    {h:"Writing a new CSV", body:[
      "Scripts often read one CSV and write another: a filtered list, a summary, a cleaned copy. Write with `csv.writer` and give it one list per row:",
      {code:['import csv','','with open("sales.csv", newline="", encoding="utf-8") as f:','    rows = list(csv.DictReader(f))','','with open("bread.csv", "w", newline="",','          encoding="utf-8") as f:','    writer = csv.writer(f)','    writer.writerow(["date", "qty"])','    for row in rows:','        if row["item"] == "banana bread":','            writer.writerow([row["date"], row["qty"]])'].join("\n"), lang:"py", label:"filter_bread.py", cap:"Creates `bread.csv` with a header and two rows: `2026-11-01,3` and `2026-11-02,2`."},
      "If your rows are already dictionaries, `csv.DictWriter` writes them by key. You tell it the column order with `fieldnames`:",
      {code:['import csv','','members = [','    {"name": "Sione", "code": "00731"},','    {"name": "Lucía", "code": "01200"},',']','with open("members.csv", "w", newline="",','          encoding="utf-8") as f:','    writer = csv.DictWriter(f, fieldnames=["name", "code"])','    writer.writeheader()','    writer.writerows(members)'].join("\n"), lang:"py", label:"DictWriter", cap:"`members.csv` holds `name,code`, then `Sione,00731` and `Lucía,01200`. The leading zeros are kept, because the codes are strings."},
      {warn:"Write to a **new** file name, never the file you are reading. Opening the input with `\"w\"` empties it on the spot, so a bug can destroy your only copy. Check the output, and only then decide whether to replace anything."},
      {tip:"The `csv` module writes Windows-style line endings (`\\r\\n`) by default, as the CSV convention suggests. Spreadsheet apps and text editors on every system read them fine."}
    ]},
    {h:"When spreadsheet apps change your data", body:[
      "Digital Foundations Unit 9 showed that opening a CSV by double-clicking it lets the spreadsheet app **guess** what each cell is ({{cell-data-types}}). Codes like `00731` lose their leading zeros, some codes and fractions turn into dates, and long ID numbers can be rounded or shown in E notation. Save the file again and the damage is written into it.",
      "Python doesn’t guess. `csv` gives you `\"00731\"` exactly as stored, and only converts what you convert. That makes a short script a safe way to inspect, clean or combine CSVs **without** opening them in a spreadsheet app first. Two real-world wrinkles to know:",
      {list:[
        "**The invisible first character.** Excel’s “CSV UTF-8” format starts the file with a hidden marker called a **byte order mark** (BOM). Read with `encoding=\"utf-8\"` and your first column name comes out as `\'\\ufeffname\'`, so `row[\"name\"]` fails with a `KeyError`. Read with `encoding=\"utf-8-sig\"`, which removes the marker if it’s there and works fine if it isn’t.",
        "**Semicolons.** Where a comma is the decimal mark, many programs separate cells with semicolons and write numbers like `3,50`. Read them with `csv.reader(f, delimiter=\";\")`, then turn `\"3,50\"` into a number with `float(text.replace(\",\", \".\"))`."
      ]},
      {code:['import csv','','with open("export.csv", newline="",','          encoding="utf-8-sig") as f:','    for row in csv.DictReader(f):','        print(row)'].join("\n"), lang:"py", label:"Reading a CSV saved by Excel", cap:"With `utf-8-sig`, the first key is `\'name\'`, not `\'\\ufeffname\'`."},
      {tip:"Keep the original export untouched, read it with Python, and write your results to a new file. Tidy data ({{tidy-data}}), one row per record and one value per cell, is also the easiest kind for a script to read."}
    ]},
    {h:"JSON: for data that isn’t a flat table", body:[
      "CSV suits tables: every row has the same columns. Settings, an event with a list of teams inside it, or data from a web service often has lists and dictionaries **inside** each other. For that, the usual text format is **[[json|JSON]]** (JavaScript Object Notation). It looks almost exactly like Python’s dictionaries and lists, and Python’s built-in `json` module converts between the two:",
      {code:['import json','','event = {"title": "Quiz night", "seats": 40,','         "teams": ["Owls", "Foxes"], "paid": False}','text = json.dumps(event, indent=2)','print(text)','back = json.loads(text)','print(back["teams"][0])'].join("\n"), lang:"py", label:"Python to JSON and back", cap:"Prints the event as indented JSON (note `false` in lower case and double quotes everywhere), then `Owls`."},
      "`dumps` means “dump to a string” and `loads` “load from a string”. To use files, drop the `s`: `json.dump(data, f)` writes and `json.load(f)` reads.",
      {code:['import json','','settings = {"city": "Lagos", "units": "metric"}','with open("settings.json", "w", encoding="utf-8") as f:','    json.dump(settings, f, indent=2)','','with open("settings.json", encoding="utf-8") as f:','    loaded = json.load(f)','print(loaded["city"])'].join("\n"), lang:"py", label:"Save and load settings", cap:"Prints `Lagos`, and `settings.json` is a readable text file."},
      {table:[
        ["","CSV","JSON"],
        ["Shape","One flat table","Nested lists and dictionaries"],
        ["Numbers","Always read as text","Numbers stay numbers; `true`, `false`, `null` too"],
        ["Opens in","Spreadsheets, text editors","Text editors, browsers, code"],
        ["Typical use","Exports, records, lists of people or sales","Settings, web data, saving a program’s state"]
      ]},
      {tip:"`json.dumps` writes letters like “í” as codes such as `\\u00ed` unless you add `ensure_ascii=False`. Either way, `json.loads` turns them back into the right letters."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“CSV cells that look like numbers are numbers.”** In Python they’re strings until you convert them with `int()` or `float()`.",
        "**“I can split CSV lines on commas.”** Quoted values can contain commas. Use the `csv` module.",
        "**“Opening a CSV in a spreadsheet and saving it changes nothing.”** The app may already have changed codes, dates and long numbers when it opened the file.",
        "**“The header row is data.”** With `DictReader` it becomes the keys; with `reader` it’s the first row, which you skip or treat differently.",
        "**“JSON and Python dictionaries are the same thing.”** JSON is text with stricter rules: double quotes only, `true`/`false`/`null` instead of `True`/`False`/`None`."
      ]}
    ]}
   ],
   try:[
    {id:"t2u9-l2-x1", type:"mcq", q:"Why does `line.split(\",\")` give the wrong columns for the line `2026-11-01,\"cookies, oat\",12,1.25`?", options:[
      {t:"The comma inside the quoted item is treated as a separator, so the item is split in two", ok:true, why:"Right. `split` knows nothing about CSV quoting, so it gives five pieces instead of four and shifts every later column. `csv.reader` reads it correctly."},
      {t:"`split` only works on lines without numbers", why:"`split` works on any string. The problem is the comma inside the quotes."},
      {t:"The date has hyphens, which confuse `split`", why:"`split(\",\")` only looks for commas; hyphens are left alone."},
      {t:"`split` removes the last column", why:"It doesn’t drop anything; it makes one piece too many because of the quoted comma."}
    ]},
    {id:"t2u9-l2-x2", type:"number", q:"A club’s `orders.csv` has these rows under the header `name,qty,price`:\n\n`Ana,2,3.00`\n`Tomás,1,4.50`\n`Mei,3,2.00`\n\nThe script does `total += int(row[\"qty\"]) * float(row[\"price\"])` for every row, starting from 0. What is `total`?", answer:16.5, tol:0.001, unit:"", why:"2 × 3.00 = 6.00, 1 × 4.50 = 4.50, 3 × 2.00 = 6.00. 6 + 4.5 + 6 = **16.5**.", wrongs:[
      {v:6, tol:0.001, why:"That’s just the quantities added up (2 + 1 + 3). The script multiplies each quantity by its price first."},
      {v:9.5, tol:0.001, why:"That adds the prices (3 + 4.5 + 2) without multiplying by the quantities."},
      {v:57, tol:0.001, why:"That multiplies the total quantity (6) by the total of the prices (9.5). Each row’s quantity belongs with its own price: multiply row by row, then add."}
    ]},
    {id:"t2u9-l2-x3", type:"match", q:"Match each job with the tool that fits it best.", pairs:[
      ["Read a CSV and refer to columns by their header names","`csv.DictReader`","It turns each row into a dictionary keyed by the header row."],
      ["Write rows given as lists, such as `[\"2026-11-01\", \"3\"]`","`csv.writer`","`writerow` takes one list per row and handles the quoting."],
      ["Write rows that are dictionaries, with a header","`csv.DictWriter`","Give it `fieldnames`, call `writeheader()`, then `writerows()`."],
      ["Save settings with a list inside a dictionary","`json.dump`","Nested data fits JSON, not a flat CSV table."],
      ["Read a CSV saved by Excel as “CSV UTF-8”","`encoding=\"utf-8-sig\"`","It removes the hidden byte order mark, so the first column name is correct."]
    ]},
    {id:"t2u9-l2-x4", type:"spot", q:"Kenji wants a new file with only his choir’s paid members. Tap every line with a **bug or a risk**.", ask:"a bug or a risk", mono:true, parts:[
      "import csv\n", {t:"with open(\"members.csv\", newline=\"\", encoding=\"utf-8\") as f:", flag:false, why:"Fine: `newline=\"\"` and an explicit encoding, as the `csv` module expects."}, "\n", {t:"    rows = list(csv.DictReader(f))", flag:false, why:"Fine: reads every row into a list of dictionaries."}, "\n", {t:"with open(\"members.csv\", \"w\", newline=\"\", encoding=\"utf-8\") as f:", flag:true, why:"This writes over the input file. If the filter has a bug, the original list is gone. Write to a new name such as `paid.csv`."}, "\n    w = csv.writer(f)\n    for row in rows:\n", {t:"        if row[\"paid\"] == True:", flag:true, why:"CSV values are strings, so `row[\"paid\"]` is something like `\"yes\"` or `\"TRUE\"`, never the boolean `True`. This is always false and nobody gets written. Compare with the text actually in the file."}, "\n", {t:"            w.writerow([row[\"name\"], row[\"email\"]])", flag:false, why:"Fine: one list per row, which is what `csv.writer` expects."}
    ]},
    {id:"t2u9-l2-x5", type:"sort", q:"CSV or JSON? Sort each piece of data by the format that fits it best.", buckets:["CSV","JSON"], items:[
      {t:"A list of 300 sales, each with a date, item, quantity and price", b:0, why:"Same columns for every record: a flat table, ideal for CSV, and it opens in any spreadsheet."},
      {t:"An app’s settings: a city, a units choice, and a list of favourite stops", b:1, why:"A list inside a dictionary is nested data, which JSON handles naturally."},
      {t:"A class register: one row per student with name and three test scores", b:0, why:"Fixed columns for every student: a table."},
      {t:"A recipe with a title, a list of ingredients (each with amount and unit) and a list of steps", b:1, why:"Lists of dictionaries inside a dictionary are nested. Flattening it into one table would be awkward."},
      {t:"Data a weather service sends back to a program, with nested readings for each hour", b:1, why:"Web services usually send JSON, because it carries nesting and real numbers."},
      {t:"A bank statement export to open in a spreadsheet", b:0, why:"Spreadsheets open CSVs directly, and a statement is a simple table."}
    ]},
    {id:"t2u9-l2-x6", type:"mcq", q:"Amara’s script reads a CSV her colleague saved from Excel as “CSV UTF-8”. `row[\"name\"]` fails with `KeyError: 'name'`, but printing the row shows `{'\\ufeffname': 'Amara', …}`. What’s the cleanest fix?", options:[
      {t:"Open the file with `encoding=\"utf-8-sig\"`", ok:true, why:"Right. `\\ufeff` is the byte order mark Excel puts at the start of “CSV UTF-8” files. The `utf-8-sig` encoding removes it, and it also reads files without one."},
      {t:"Rename the column in Excel and save again", why:"Saving from Excel again adds the same marker. The fix belongs in how Python reads the file."},
      {t:"Use `row[\"Name\"]` with a capital N", why:"The key isn’t capitalised differently; it has an invisible character in front. A capital N makes another KeyError."},
      {t:"Switch to `csv.reader` and use `split(\",\")`", why:"That swaps a clean reader for a fragile one and still leaves the marker stuck to the first value."}
    ]}
   ],
   apply:{intro:"Make a small CSV, total it, filter it and write a summary. On a phone, the Python Lab can do all of it: start your program by writing the CSV text to a file, then read it in the same program (the Lab empties its folder each time you press ▶ Run).", tasks:[
     {t:"Create a CSV and total it", how:["Make `spending.csv` with the header `date,category,amount` and at least six rows of made-up spending in two or three categories (food, travel, books…). On a computer, type it in a code editor; or export one from a spreadsheet as CSV.","Write a script that totals the `amount` column with `csv.DictReader` and `float()`, and prints the total with two decimal places.","Run it. Then delete the `float()` on purpose, run it again and read the error message.","On a phone: in the Python Lab, begin the program by writing the CSV text with `open(\"spending.csv\", \"w\", encoding=\"utf-8\")`, then total it further down. Or do the `pl-csv` challenge, which provides its own `sales.csv`."], write:"What was the total? What did the error say when you removed float()?"},
     {t:"Totals per category and a summary file", how:["Use a dictionary with `.get(category, 0)` to total each category.","Write the results to a new file `summary.csv` with `csv.writer`: a header `category,total`, then one row per category.","Open `summary.csv` in a text editor (or print it with Python) to check it, and make sure `spending.csv` is unchanged."], write:"Paste your summary.csv. Which category was largest?"},
     {t:"See the spreadsheet change a code (computer)", how:{
       win:["Add a column `code` to your CSV with values such as `00731` and `1-2`. Save it.","Double-click the CSV to open it in Excel (or open it in LibreOffice Calc with default settings). Look at the code column.","Close **without saving**. Then read the same file with Python and print the codes."],
       mac:["Add a column `code` with values such as `00731` and `1-2`. Save it.","Open the CSV in Numbers, Excel or LibreOffice with default settings and look at the codes.","Close **without saving**, then print the codes with Python."],
       chromeos:["Add a column `code` with values such as `00731` and `1-2`.","Upload it to Google Drive and open it with Google Sheets (or File → Import). Look at the codes.","Then print the codes with Python in the Linux environment."],
       phone:["Spreadsheet apps on phones guess types too, but you can do the Python half in the Python Lab: write a CSV with `00731` and `1-2` in a code column, read it back and print it, and note that Python keeps them exactly."]
     }, write:"What did the spreadsheet show for 00731 and 1-2? What did Python show?"},
     {t:"Save something as JSON", how:["Make a dictionary of your own settings or a small recipe with a list inside it.","Save it with `json.dump(…, indent=2)` and `encoding=\"utf-8\"`, open the file to look at it, then load it back with `json.load` and print one value."]}
   ], proof:"A CSV you made, a script that prints its total, a summary.csv with a total per category written to a new file, and a note comparing how a spreadsheet and Python showed the same codes."},
   read:[
     {book:"atbs", where:"Chapter 18, “CSV, JSON, and XML Files”: “The CSV Format” to “Handling Header Rows”, then “JSON”, “Reading JSON Data” and “Writing JSON Data”", note:"The book’s reading examples leave out `newline=''`; Python’s own documentation recommends it for every file opened for the csv module, so this lesson uses it throughout."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u9-l3", title:"Automating a boring task safely", minutes:60,
   hook:{q:"A script renames 300 photos. Because of a bug, two photos are given the same new name, `beach-007.jpg`. What does Python’s `Path.rename()` do with the second one?", options:["It always refuses and stops with an error","It always adds “(1)” to the name, like a file manager does","On macOS and Linux it silently replaces the first photo; on Windows it stops with an error","It asks you whether to replace the file"], answer:2, reveal:"On macOS and Linux, `rename()` quietly replaces an existing file with that name, so one photo is simply gone. On Windows it raises `FileExistsError` instead. Scripts don’t ask and don’t add “(1)”: they do exactly what the code says, hundreds of times a second. That’s why this lesson is about doing automation safely: a dry run first, a backup, and checks before anything is changed."},
   goals:[
     "Decide whether a task is worth automating, and write its rule precisely, including the awkward cases",
     "Write a file-renaming or file-sorting script that does a dry run by default",
     "Protect files with backups and name-clash checks, and explain what makes a script safe to run twice",
     "Run a script from the command line with `python3 script.py`, pass it an option, and know which folder it runs in"
   ],
   learn:[
    {h:"What’s worth automating", body:[
      {lead:"Computers are brilliant at doing the same small thing hundreds of times, exactly the same way, without getting bored."},
      "**[[py-automation|Automation]]** means handing a repetitive job to a program. Good candidates share three features: the job is **repetitive** (300 photos, 50 files a week), the **rule is clear** enough to write down, and doing it by hand is slow or error-prone. Examples from many kinds of lives:",
      {list:[
        "Renaming a phone’s `IMG_0412.jpg`, `IMG_0413.jpg`… to `beach-001.jpg`, `beach-002.jpg`… after a trip.",
        "Sorting a cluttered Downloads folder into Documents, Pictures and Archives.",
        "Combining twelve monthly CSV exports into one yearly file.",
        "Making a personalised certificate text for each of the 40 people on a course list."
      ]},
      "A program you run to do a job like this is often called a **[[script]]**: a single `.py` file, run from start to finish. Before writing one, ask: how often will I do this, and how long does it take by hand? A rename you do once, for ten files, is quicker by hand. One you do every month for hundreds of files is worth an hour of scripting.",
      {key:"A script does exactly what it says, very fast, with no common sense. A mistake that would cost you one file by hand can cost you all of them by script. The habits in this lesson exist for that reason."}
    ]},
    {h:"Plan the rule, including the awkward cases", body:[
      "Tomás wants his holiday photos renamed. Write the rule in plain words first:",
      {ex:"Take every file in the photos folder whose name starts with IMG_.\nIn name order, rename them beach-001, beach-002, beach-003…\nKeep each file’s extension, in lower case.\nNever replace a file that already exists.", label:"The rule, in words"},
      "Then list the awkward cases, because that’s where scripts go wrong:",
      {list:[
        "**Other files** in the folder (`notes.txt`, a screenshot). The rule says “starts with `IMG_`”, so they are left alone.",
        "**Upper-case extensions.** Phones and cameras often save `.JPG` or `.jpeg`. Using `.suffix.lower()` gives `.jpg` whatever the case.",
        "**Order.** Python doesn’t promise any order when it lists a folder, so `sorted()` makes `IMG_0412` come before `IMG_0413` every time.",
        "**Names already taken.** If `beach-001.jpg` exists, renaming onto it could destroy a photo (the warm-up). The script must check.",
        "**Running it twice.** After the first run there are no `IMG_` files left, so a second run should do nothing. More on that below."
      ]},
      "One new formatting trick: inside an f-string, `{number:03}` pads a whole number with zeros to three digits, so 7 becomes `007` and 42 becomes `042`. Padded numbers sort correctly in every file manager; without padding, `beach-10` would come before `beach-2`."
    ]},
    {h:"The dry-run habit", body:[
      "A **[[dry-run|dry run]]** means running the script so it **prints what it would do** without doing it. You read the plan, and only when it’s right do you let it act. Here’s the renamer, with a dry run built in:",
      {code:['from pathlib import Path','','DRY_RUN = True','folder = Path("photos")','','photos = sorted(folder.glob("IMG_*"))','number = 1','for old in photos:','    ext = old.suffix.lower()','    new = old.with_name(f"beach-{number:03}{ext}")','    if new.exists():','        print("Skip, already exists:", new.name)','    elif DRY_RUN:','        print("Would rename", old.name, "->", new.name)','    else:','        old.rename(new)','        print("Renamed", old.name, "->", new.name)','    number += 1'].join("\n"), lang:"py", label:"rename_photos.py", pylab:"pl-rename", cap:"With `IMG_0412.jpg`, `IMG_0413.JPG` and `IMG_0415.jpg` in `photos`, it prints three “Would rename” lines, ending `IMG_0415.jpg -> beach-003.jpg`, and changes nothing."},
      {list:[
        "`folder.glob(\"IMG_*\")` finds the paths in `photos` whose names match the pattern; `*` means “anything”. `sorted()` puts them in name order.",
        "`old.with_name(…)` gives a new path in the **same folder** with a different file name. It doesn’t touch the disk; it’s just a path.",
        "`DRY_RUN = True` at the top is a **switch**. While it’s `True`, the only thing the script does is print. Change it to `False` to run for real.",
        "The `if new.exists()` check comes **first**, so a name clash is reported and skipped in both modes."
      ]},
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="t2u9a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="40" y="10" width="220" height="40" rx="6" stroke-width="1.5"/><text x="150" y="28" text-anchor="middle">1. Back up the folder</text><text class="s" x="150" y="44" text-anchor="middle">a copy you could restore</text><path class="d-ink" d="M150,50 L150,72" stroke-width="2" marker-end="url(#t2u9a2)"/><rect class="d-gold" x="40" y="76" width="220" height="40" rx="6" stroke-width="2"/><text x="150" y="94" text-anchor="middle">2. Dry run</text><text class="s" x="150" y="110" text-anchor="middle">print “Would rename A -&gt; B”</text><path class="d-ink" d="M150,116 L150,138" stroke-width="2" marker-end="url(#t2u9a2)"/><path class="d-panel" d="M150,142 L260,180 L150,218 L40,180 Z" stroke-width="2"/><text x="150" y="176" text-anchor="middle">3. Is the plan right?</text><text class="s" x="150" y="194" text-anchor="middle">files, names, clashes</text><path class="d-ink" d="M260,180 L300,180 L300,96 L264,96" stroke-width="2" fill="none" marker-end="url(#t2u9a2)"/><text class="s" x="306" y="150">no:</text><text class="s" x="306" y="164">fix</text><text class="s" x="306" y="178">the</text><text class="s" x="306" y="192">rule</text><path class="d-ink" d="M150,218 L150,248" stroke-width="2" marker-end="url(#t2u9a2)"/><text class="s" x="158" y="238">yes</text><rect class="d-sage" x="40" y="252" width="220" height="40" rx="6" stroke-width="2"/><text x="150" y="270" text-anchor="middle">4. Real run</text><text class="s" x="150" y="286" text-anchor="middle">DRY_RUN = False, or --go</text><path class="d-ink" d="M150,292 L150,314" stroke-width="2" marker-end="url(#t2u9a2)"/><rect class="d-soft" x="40" y="318" width="220" height="40" rx="6" stroke-width="1.5"/><text x="150" y="336" text-anchor="middle">5. Check the result</text><text class="s" x="150" y="352" text-anchor="middle">a second run changes nothing</text><text class="s" x="10" y="384">Keep the backup until you’re sure</text><text class="s" x="10" y="400">everything is where it should be.</text></svg>', alt:"A flowchart. 1: back up the folder, a copy you could restore. 2: dry run, printing Would rename A to B. 3: a decision, is the plan right, checking files, names and clashes. If no, an arrow loops back to the dry run labelled fix the rule. If yes, 4: real run, with DRY_RUN set to False or the --go option. 5: check the result; a second run changes nothing. A note says keep the backup until you’re sure everything is where it should be.", cap:"The safe loop: copy, rehearse, check, then act, then check again."},
      {lab:"pl-rename", t:"Practise: plan new file names from a list, as a dry run"}
    ]},
    {h:"Name clashes and what rename really does", body:[
      "The warm-up is worth remembering in detail, because it surprises experienced people too:",
      {table:[
        ["Call","If the new name is free","If the new name is taken"],
        ["`old.rename(new)`","Renames","macOS/Linux: silently replaces it. Windows: FileExistsError"],
        ["`old.replace(new)`","Renames","Replaces it on every system, on purpose"]
      ]},
      "So a renaming script should **check `new.exists()` itself** and decide what to do (skip, or stop), instead of relying on whatever the operating system happens to do. And when two of your own planned names are the same, for example two photos taken in the same second both becoming `2026-08-14-10-31.jpg`, the dry run is where you spot it.",
      {warn:"Deleting with Python (`Path.unlink()`, `shutil.rmtree()`) skips the Recycle Bin or Trash: there is no undo. Leave deleting out of your first versions. Move files to a “to-delete” folder instead, look at it, and empty it yourself. (A third-party package, Send2Trash, sends files to the Recycle Bin or Trash instead; Automate the Boring Stuff, Chapter 11, shows it.)"}
    ]},
    {h:"Backups and running twice", body:[
      "Before a real run on files you care about, make a copy. `shutil.copytree` copies a whole folder:",
      {code:['import shutil','from datetime import date','','src = "practice-downloads"','dst = f"{src}-backup-{date.today()}"','shutil.copytree(src, dst)','print("Copied to", dst)'].join("\n"), lang:"py", label:"backup.py", cap:"Prints something like `Copied to practice-downloads-backup-2026-11-06`. Run it twice on the same day and the second run stops with `FileExistsError`, so it never overwrites an earlier backup."},
      "For photos, also check that you have the cloud or external-drive backup you rely on anyway (Digital Foundations Unit 2, {{backup}}).",
      {h:"Safe to run twice"},
      "Scripts get run twice by accident all the time: a double-click, an up-arrow in the terminal, a scheduled job that overlaps. A script is **[[idempotent]]** if running it twice leaves things exactly as running it once did. Programmers use the long word; the plain idea is “a second run does no harm”.",
      "The renamer is idempotent: after the first run nothing starts with `IMG_` any more, so a second run finds nothing to do. A version that renamed **every** `.jpg` in the folder would not be: the second run would rename `beach-001.jpg` all over again, or clash with itself. The downloads sorter below is idempotent because it skips anything already in place.",
      {tip:"Make the rule select only files that **still need** the change (names starting with `IMG_`, files not yet in a subfolder). That one decision makes most file scripts idempotent."}
    ]},
    {h:"A second example: tidying a downloads folder", body:[
      "Mei’s Downloads folder is a jumble. This script sorts files into subfolders by extension. It’s a dry run **unless** you add `--go` when you start it:",
      {code:['import sys','from pathlib import Path','','DRY_RUN = "--go" not in sys.argv','downloads = Path("practice-downloads")','','kinds = {','    ".pdf": "Documents", ".docx": "Documents",','    ".jpg": "Pictures", ".png": "Pictures",','    ".zip": "Archives",','}','','for item in sorted(downloads.iterdir()):','    if not item.is_file():','        continue','    folder = kinds.get(item.suffix.lower())','    if folder is None:','        continue','    target = downloads / folder / item.name','    if target.exists():','        print("Skip, already there:", item.name)','    elif DRY_RUN:','        print("Would move", item.name, "to", folder)','    else:','        target.parent.mkdir(exist_ok=True)','        item.rename(target)','        print("Moved", item.name, "to", folder)','','if DRY_RUN:','    print("Dry run only. Add --go to move files.")'].join("\n"), lang:"py", label:"tidy.py", cap:"With `tickets.pdf`, `CV.docx`, `cat.PNG`, `photos.zip` and `song.mp3` in the folder, the dry run prints four “Would move” lines and leaves `song.mp3` alone, because `.mp3` isn’t in the dictionary."},
      {list:[
        "`sys.argv` is the list of words typed after `python3` on the [[command-line|command line]]. `\"--go\" not in sys.argv` is `True` unless you typed `--go`, so **forgetting is safe**.",
        "`downloads.iterdir()` lists everything in the folder, files and subfolders.",
        "`continue` skips straight to the next item in the loop. The first one skips subfolders; the second skips extensions the script doesn’t know.",
        "`kinds.get(…)` gives `None` for an extension that isn’t in the dictionary, which is how unknown files are left alone.",
        "The `target.exists()` check makes it skip a file whose name is already taken in the destination, and makes a second run harmless."
      ]},
      {tip:"Practise on a **copy**: make a folder called `practice-downloads` and put a few files in it (empty files are fine). Only when you trust the script, change the path to `Path.home() / \"Downloads\"`, and back that folder up first."}
    ]},
    {h:"Running scripts from the command line", body:[
      "Editors are comfortable, but a script you use regularly is often quickest to run from a terminal ({{shell-navigation|Unit 6}}). Save it, move into its folder, and run it with Python:",
      {code:['cd Documents/scripts','python3 tidy.py','python3 tidy.py --go'].join("\n"), lang:"sh", label:"macOS, Linux, ChromeOS Linux", cap:"The first run is the dry run; the second adds `--go` and does the moves."},
      {table:[
        ["System","Run a script","Notes"],
        ["macOS, Linux, ChromeOS","`python3 tidy.py`","`python` may not exist, or may be an old version"],
        ["Windows (PowerShell)","`python tidy.py` or `py tidy.py`","`py` is the Python launcher; which works depends on how Python was installed"],
        ["Any","Press [[kbd:Ctrl]] + [[kbd:C]]","Stops a script that is running"]
      ]},
      "Two things trip people up. First, the terminal’s current folder becomes the script’s **working directory**, so relative paths such as `practice-downloads` are looked up from there (Lesson 1). Run the script from its own folder, or use absolute paths. Second, `python3 tidy.py` must be typed in the **terminal**, not inside Python’s `>>>` prompt (the [[repl|REPL]]); if you see `>>>`, type `exit()` first.",
      {tip:"Not sure a command is safe? A script that defaults to a dry run lets you run it as often as you like to see what it would do."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“If the dry run looked right, I don’t need a backup.”** The dry run checks your rule; a backup protects you from what you didn’t think of.",
        "**“rename() will warn me before replacing a file.”** On macOS and Linux it replaces silently. Check `exists()` yourself.",
        "**“Running a script twice just does the same thing twice, so it’s fine.”** Only if it’s idempotent. Otherwise it can rename renamed files or create duplicates.",
        "**“Automating saves time on every task.”** Writing and checking a script takes time too. It pays off for big or repeated jobs.",
        "**“The script works on files next to it.”** It works relative to the working directory, which depends on where you ran it from."
      ]}
    ]}
   ],
   try:[
    {id:"t2u9-l3-x1", type:"order", q:"Put the steps of a safe file automation in order.", items:[
      {t:"Write the rule in plain words, including the awkward cases", why:"You can’t check a script against a rule you haven’t stated. Odd files, upper-case extensions and name clashes belong in the plan."},
      {t:"Back up the folder", why:"Before anything can change, make a copy you could restore."},
      {t:"Run it as a dry run and read every planned action", why:"The dry run shows exactly which files would change, and how, while nothing is touched."},
      {t:"Fix the rule until the dry run is right", why:"Mistakes found here cost nothing. Rerun the dry run after each fix."},
      {t:"Do the real run", why:"Only now let the script act: `DRY_RUN = False` or `--go`."},
      {t:"Check the result and run it once more to confirm nothing changes", why:"A second run that does nothing shows the script is idempotent, and that the job is complete."}
    ]},
    {id:"t2u9-l3-x2", type:"number", q:"`photos` contains `IMG_0001.jpg`, `IMG_0002.JPG`, `IMG_0003.jpg`, `notes.txt`, `beach-001.jpg` and `Screenshot.png`. Tomás runs `rename_photos.py` (from this lesson) with `DRY_RUN = True` on a Mac. How many lines start with **“Would rename”**?", answer:2, tol:0, unit:"lines", why:"`glob(\"IMG_*\")` matches the three IMG files. The first would become `beach-001.jpg`, which already exists, so it prints “Skip, already exists”. The other two print “Would rename”: **2**.", wrongs:[
      {v:3, tol:0, why:"Three files match `IMG_*`, but the first one’s new name, `beach-001.jpg`, is already taken, so the script prints “Skip” for it instead."},
      {v:6, tol:0, why:"The pattern only matches names starting with `IMG_`. `notes.txt`, `beach-001.jpg` and `Screenshot.png` are left alone."},
      {v:0, tol:0, why:"`DRY_RUN = True` still prints the plan; it just doesn’t rename. And `IMG_0002.JPG` matches too: the pattern checks the start of the name, not the extension."}
    ]},
    {id:"t2u9-l3-x3", type:"mcq", q:"Oluwaseun’s script renames scanned receipts by date. Two receipts from the same day both get the new name `2026-03-14.pdf`. He’s on Linux and uses `old.rename(new)` with no checks. What happens?", options:[
      {t:"The second rename silently replaces the first receipt, which is lost", ok:true, why:"Right. On Linux and macOS, `rename` replaces an existing file without a word. A dry run would have shown two identical new names, and an `exists()` check would have skipped the second one."},
      {t:"Python stops with FileExistsError before anything is lost", why:"That’s what happens on Windows. On Linux and macOS the existing file is replaced."},
      {t:"Linux adds “(1)” to the second file’s name", why:"File managers may do that when you drag files, but `rename` in a script doesn’t: it does exactly what it’s told."},
      {t:"Both files end up with the same name in the same folder", why:"A folder can’t hold two files with the same name. One of them has to go, and here it’s the first receipt."}
    ]},
    {id:"t2u9-l3-x4", type:"sort", q:"Which scripts are safe to run twice (idempotent), and which would do something different or harmful the second time?", buckets:["Safe to run twice","Not safe to run twice"], items:[
      {t:"Renames files starting with `IMG_` to `beach-001.jpg`, `beach-002.jpg`…", b:0, why:"After the first run nothing starts with `IMG_`, so a second run finds nothing to rename."},
      {t:"Renames every `.jpg` in the folder to `beach-001.jpg`, `beach-002.jpg`…", b:1, why:"The second run picks up the `beach-…` files and renames them again, and may clash with its own names."},
      {t:"Moves each file into a subfolder by extension, skipping files already there", b:0, why:"Moved files are no longer in the top folder, and the skip check protects anything already in place."},
      {t:"Appends today’s total to `log.txt`", b:1, why:"Each run adds another line, so running it twice records the same day twice."},
      {t:"Adds “OLD-” to the start of every file name", b:1, why:"Run it twice and you get `OLD-OLD-…`. It would need to skip names that already start with “OLD-”."},
      {t:"Makes a folder with `mkdir(exist_ok=True)`", b:0, why:"If the folder exists already, it’s left as it is. That’s exactly what `exist_ok=True` is for."}
    ]},
    {id:"t2u9-l3-x5", type:"spot", q:"Dmitri wrote a quick script to move his old screenshots. Tap every line that makes it **risky**.", ask:"risky", mono:true, parts:[
      "from pathlib import Path\n", {t:"pics = Path(\"C:/Users/Dmitri/Pictures\")", flag:false, why:"Fine: forward slashes avoid the backslash trap, and an absolute path doesn’t depend on the working directory."}, "\n", {t:"for p in pics.glob(\"*\"):", flag:true, why:"`*` matches everything, not just screenshots: photos, documents and subfolders too. The rule should select only what needs moving, such as `Screenshot*`."}, "\n", {t:"    p.rename(pics / \"old\" / p.name)", flag:true, why:"It acts straight away with no dry run, no `exists()` check for clashes, and the `old` folder must already exist. Print the plan first."}, "\n", {t:"    print(\"moved\", p.name)", flag:false, why:"Printing what happened is good practice; the trouble is that nothing was checked before it happened."}
    ]},
    {id:"t2u9-l3-x6", type:"mcq", q:"Hana runs `python3 tidy.py` from her home folder, but `tidy.py` is in `Documents/scripts`. The script uses `Path(\"practice-downloads\")`, which is also in `Documents/scripts`. What happens?", options:[
      {t:"Python can’t find tidy.py: the terminal looks for it in her home folder", ok:true, why:"Right. `python3 tidy.py` looks for the file in the current folder. She should `cd Documents/scripts` first, which also makes `practice-downloads` resolve correctly."},
      {t:"It works, because Python searches the whole computer for tidy.py", why:"Python only looks where you tell it: here, the current folder. It reports “can’t open file … No such file or directory”."},
      {t:"It runs and moves files in her home folder instead", why:"It never gets that far: the script file itself isn’t found. (If she ran it by its full path, the relative `practice-downloads` would then be looked up from her home folder.)"},
      {t:"It runs, but only as a dry run", why:"Dry run or not depends on `--go`, but here the script can’t even start, because the terminal is in the wrong folder."}
    ]}
   ],
   apply:{intro:"Build a safe renamer or sorter on practice files. You need empty test files, not your real photos. On a phone, the Python Lab’s `pl-rename` challenge covers the dry-run part.", tasks:[
     {t:"Make practice files", how:{
       win:["In File Explorer, make a folder `scripts` in Documents, and inside it a folder `photos`.","In PowerShell, `cd` into `scripts`, then make empty files: `New-Item -ItemType File photos/IMG_0412.jpg, photos/IMG_0413.JPG, photos/IMG_0415.jpg, photos/notes.txt`.","(Or make them with Python: `Path(\"photos/IMG_0412.jpg\").touch()` for each name.)"],
       mac:["In Terminal: `mkdir -p ~/Documents/scripts/photos` then `cd ~/Documents/scripts`.","Make empty files: `touch photos/IMG_0412.jpg photos/IMG_0413.JPG photos/IMG_0415.jpg photos/notes.txt`."],
       chromeos:["In the Linux Terminal: `mkdir -p scripts/photos` then `cd scripts`.","`touch photos/IMG_0412.jpg photos/IMG_0413.JPG photos/IMG_0415.jpg photos/notes.txt`."],
       phone:["Open the Python Lab. Make the files with Python at the top of your program: `Path(\"photos\").mkdir(exist_ok=True)`, then `Path(\"photos/IMG_0412.jpg\").touch()` and the same for the other names. Put the renamer underneath, in the same program: the Lab empties its folder each time you press ▶ Run.","Or do the `pl-rename` challenge, which gives you a folder of photo files to plan new names for."]
     }},
     {t:"Dry run, then real run, then run again", how:["Save `rename_photos.py` from this lesson next to the `photos` folder. Change `beach` to a name you like.","Run it with `DRY_RUN = True` (`python3 rename_photos.py`, or `python`/`py` on Windows). Read every line.","Make a backup copy of `photos`, then set `DRY_RUN = False` and run it.","Run it a third time and confirm it does nothing.","Now add a new empty `IMG_0420.jpg` and run the dry run again. The script numbers from 1 every time, so it plans `beach-001.jpg`, which already exists: you’ll see “Skip, already exists” instead of a lost photo. (How would you change the script to carry on numbering from the highest existing number?)"], write:"Paste the dry-run output. What did the third run print?"},
     {t:"Sort a practice downloads folder", how:["Make `practice-downloads` with a few empty files: a .pdf, a .docx, a .PNG, a .zip and a .mp3.","Save `tidy.py`, run `python3 tidy.py` (dry run) from the same folder, then `python3 tidy.py --go`.","Add one extension of your own to the `kinds` dictionary and run the dry run again."], write:"Which files did it leave alone, and why?"}
   ], proof:"A dry-run printout, the folder after a real run, and proof that a second run changed nothing; plus the tidy.py dry run with one extension you added."},
   read:[
     {book:"atbs", where:"Chapter 11, “Organizing Files”: “The shutil Module” (copying, moving and renaming), “Permanently Deleting Files and Folders” and “Deleting to the Recycle Bin”", note:"The book recommends a dry run before any copy, move, rename or delete: comment out the real action and print instead."},
     {book:"atbs", where:"Chapter 12, “Designing and Deploying Command Line Programs”: “Using the Terminal” and “Command Line Arguments”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u9-l4", title:"Debugging calmly", minutes:60,
   hook:{q:"A Python traceback is 12 lines long. Where is the single most useful line usually found?", options:["The first line, “Traceback (most recent call last):”","The last line, which names the error and describes it","The middle line","None of them: tracebacks are for experts"], answer:1, reveal:"The last line: it gives the error’s type and a short message, such as `ZeroDivisionError: division by zero`. The lines just above it show exactly where that happened, and the ones above those show how the program got there. A traceback is written so that the newest step is at the bottom, which is why you read it from the bottom up. This lesson turns that, and a handful of other habits, into a calm routine for finding any bug."},
   goals:[
     "Tell syntax errors, runtime errors and logic errors apart, and follow a calm debugging routine",
     "Read a whole traceback from the bottom up, including the calls that led to the error",
     "Reproduce a bug, look inside with `print` and `repr`, and explain the code line by line (to a rubber duck if need be)",
     "Narrow a bug down by halves, check assumptions with `assert`, and step through code with a debugger",
     "Spot off-by-one errors and test edge cases such as empty lists, blank lines and zero"
   ],
   learn:[
    {h:"Bugs are normal: have a routine", body:[
      {lead:"Every programmer writes bugs every day. The skill isn’t avoiding them; it’s finding them calmly."},
      "Think Python (1.7) warns that debugging can bring out strong feelings: anger, sadness, embarrassment. Expecting that helps. The computer isn’t being difficult; it does precisely what the code says, and your job is to find where that differs from what you meant. Bugs come in three kinds:",
      {table:[
        ["Kind","What you see","Example"],
        ["Syntax error","Python refuses to start; nothing runs","A missing colon or bracket"],
        ["Runtime error ([[py-exception|exception]])","It runs, then stops with a [[traceback]]","Dividing by zero, a missing file"],
        ["Logic error","It runs and finishes, but the answer is wrong","A total that’s too small"]
      ]},
      "Logic errors are the sneakiest: nothing tells you they’re there, so you notice only if you know what the right answer should be. Whatever the kind, the same routine works:",
      {ol:[
        "**Reproduce it** on purpose, with the smallest input you can.",
        "**Read** the whole error message.",
        "**Locate** the line or step where things first go wrong.",
        "**Guess** why, then **test the guess**, for example with a `print`.",
        "**Fix** one thing, **rerun** the failing case, then check the normal cases still work."
      ]}
    ]},
    {h:"Reading a traceback fully", body:[
      "Here’s a short program with a bug that only shows up for one person:",
      {code:['def average(numbers):','    return sum(numbers) / len(numbers)','','def report(name, scores):','    print(name, "averages", average(scores))','','report("Kenji", [72, 85, 90])','report("Hana", [])'].join("\n"), lang:"py", label:"scores.py", cap:"Prints `Kenji averages 82.33333333333333`, then stops with a traceback."},
      {ex:"Traceback (most recent call last):\n  File \"/Users/mei/scores.py\", line 8, in <module>\n    report(\"Hana\", [])\n    ~~~~~~^^^^^^^^^^^^\n  File \"/Users/mei/scores.py\", line 5, in report\n    print(name, \"averages\", average(scores))\n                            ~~~~~~~^^^^^^^^\n  File \"/Users/mei/scores.py\", line 2, in average\n    return sum(numbers) / len(numbers)\n           ~~~~~~~~~~~~~^~~~~~~~~~~~~~\nZeroDivisionError: division by zero", label:"What Python shows", mono:true},
      {fig:'<svg viewBox="0 0 340 342"><rect class="d-panel" x="6" y="6" width="328" height="190" rx="6" stroke-width="1.5"/><text class="s" x="34" y="26">Traceback (most recent call last):</text><rect class="d-lup" x="28" y="36" width="300" height="72" rx="4" stroke-width="1"/><text class="s" x="34" y="54">File "scores.py", line 8, in &lt;module&gt;</text><text class="s" x="46" y="70">report("Hana", [])</text><text class="s" x="34" y="86">File "scores.py", line 5, in report</text><text class="s" x="46" y="102">print(…, average(scores))</text><rect class="d-gold" x="28" y="114" width="300" height="38" rx="4" stroke-width="1.5"/><text class="s" x="34" y="130">File "scores.py", line 2, in average</text><text class="s" x="46" y="146">return sum(numbers) / len(numbers)</text><rect class="d-rose" x="28" y="158" width="300" height="28" rx="4" stroke-width="2"/><text class="s" x="34" y="177">ZeroDivisionError: division by zero</text><text x="16" y="182">1</text><text x="16" y="138">2</text><text x="16" y="76">3</text><text x="10" y="222">1. Start at the bottom: the error type</text><text x="10" y="240">and what went wrong.</text><text x="10" y="266">2. Just above: the line that failed,</text><text x="10" y="284">in average(), line 2.</text><text x="10" y="310">3. Further up: the calls that led there.</text><text x="10" y="328">The top one is where it all began.</text></svg>', alt:"The traceback in three coloured bands, numbered from the bottom. 1, at the bottom: ZeroDivisionError: division by zero. 2, just above: line 2, in average, return sum(numbers) / len(numbers), the line that failed. 3, above that: line 8 in the main script, report Hana with an empty list, and line 5 in report, which called average: the calls that led there.", cap:"Read a traceback from the bottom up. The file paths are shortened here; Python shows the full path."},
      {ol:[
        "**The last line** names the exception type (`ZeroDivisionError`) and the message (`division by zero`). {{py-errors-tracebacks|Unit 8’s guide to errors}} lists the common types.",
        "**The frame just above** (a “frame” is one `File …, line …, in …` pair) is where it actually broke: line 2, inside `average`. The `~~~^^^` marks point to the exact part of the line; here the `/`.",
        "**The frames above that** are the chain of calls that got there, oldest at the top: line 8 called `report`, and line 5 called `average`. `<module>` means the main body of the script."
      ]},
      "The crash is in `average`, but the **cause** is further up: line 8 passed an empty list. That’s common. The line that fails is often an innocent victim, so ask “where did this bad value come from?” and walk up the frames.",
      {tip:"When a traceback passes through code you didn’t write (paths containing `lib` or `site-packages`), look for the **lowest frame in your own file**. That’s usually where your code handed over something unexpected."}
    ]},
    {h:"Reproduce it, then explain it", body:[
      "You can’t fix what you can’t see. **Reproducing** a bug means finding a way to make it happen whenever you want. Write down exactly what you did: which file, which input, which command. Then shrink it: if the script fails on a 2,000-row CSV, does it fail on the first 10 rows? On just the odd-looking row? The smaller the failing case, the fewer places the bug can hide.",
      "Then **explain the code, line by line, out loud**. Programmers call this **[[rubber-duck|rubber duck debugging]]**, after explaining your code to a toy duck on your desk. Think Python (12.10) lists it among its “six R’s” of debugging: “If you explain the problem to someone else, you sometimes find the answer before you finish asking the question.” Saying “and then this line adds the price…” makes you notice what the line **really** does.",
      {tip:"No duck? A plant, a pet or a draft message to a friend works the same way. Often the message never needs sending."}
    ]},
    {h:"Look inside: print debugging", body:[
      "Most bugs come down to a value that isn’t what you think it is. The quickest way to check is to **print it**: **[[print-debugging|print debugging]]**, which MIT’s Missing Semester calls “a first approach to debug a program”. Here is a logic error: the total is too small.",
      {code:['prices = [4.5, 1.25, 1.5]','total = 0','for p in prices:','    total = p','    print(f"{p=} {total=}")','print("Total:", total)'].join("\n"), lang:"py", label:"A total that’s too small", cap:"Prints `p=4.5 total=4.5`, `p=1.25 total=1.25`, `p=1.5 total=1.5`, then `Total: 1.5`. The total is replaced each time instead of growing: it should be `total += p`."},
      "The `=` inside the f-string braces is a debugging shortcut: `{total=}` prints the name **and** the value. Print inside loops to watch values change, at the start of a function to check what came in, and before a `return` to check what goes out (Think Python, 6.10).",
      "Some values look right but aren’t. A name read from a file might be `\"Ana \"` with a trailing space. Printing shows `Ana` either way; `repr()` shows the truth:",
      {code:['name = "Ana "','print(name == "Ana")','print(repr(name))'].join("\n"), lang:"py", label:"Invisible differences", cap:"Prints `False`, then `\'Ana \'`, with the quotes showing the space."},
      {tip:"Remove debugging prints when you’ve finished. Starting each one with `DEBUG` makes them easy to find."}
    ]},
    {h:"Narrow it down by halves", body:[
      "When you don’t know where a wrong value comes from, don’t check every line in turn. Check **halfway**. If a script takes eight steps to turn raw data into a result, print the data after step 4. If it’s still correct there, the bug is in steps 5 to 8; if it’s already wrong, it’s in 1 to 4. Then check halfway through the half that’s left.",
      {fig:'<svg viewBox="0 0 340 330"><text x="10" y="18">8 steps. Each check halves the suspects.</text><g><text class="s" x="55" y="40" text-anchor="middle">Check 1</text><rect class="d-sage" x="20" y="48" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="64" text-anchor="middle">step 1</text><rect class="d-sage" x="20" y="72" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="88" text-anchor="middle">step 2</text><rect class="d-sage" x="20" y="96" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="112" text-anchor="middle">step 3</text><rect class="d-sage" x="20" y="120" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="136" text-anchor="middle">step 4</text><rect class="d-gold" x="20" y="148" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="164" text-anchor="middle">step 5</text><rect class="d-gold" x="20" y="172" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="188" text-anchor="middle">step 6</text><rect class="d-gold" x="20" y="196" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="212" text-anchor="middle">step 7</text><rect class="d-gold" x="20" y="220" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="55" y="236" text-anchor="middle">step 8</text><path class="d-rose" d="M14,145 L96,145" stroke-width="3"/></g><g><text class="s" x="170" y="40" text-anchor="middle">Check 2</text><rect class="d-panel" x="135" y="48" width="70" height="94" rx="3" stroke-width="1"/><text class="s" x="170" y="100" text-anchor="middle">cleared</text><rect class="d-gold" x="135" y="148" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="170" y="164" text-anchor="middle">step 5</text><rect class="d-gold" x="135" y="172" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="170" y="188" text-anchor="middle">step 6</text><rect class="d-panel" x="135" y="196" width="70" height="46" rx="3" stroke-width="1"/><text class="s" x="170" y="224" text-anchor="middle">cleared</text><path class="d-rose" d="M129,193 L211,193" stroke-width="3"/></g><g><text class="s" x="285" y="40" text-anchor="middle">Check 3</text><rect class="d-panel" x="250" y="48" width="70" height="94" rx="3" stroke-width="1"/><text class="s" x="285" y="100" text-anchor="middle">cleared</text><rect class="d-sage" x="250" y="148" width="70" height="22" rx="3" stroke-width="1"/><text class="s" x="285" y="164" text-anchor="middle">step 5</text><rect class="d-rose" x="250" y="172" width="70" height="22" rx="3" stroke-width="2"/><text class="s" x="285" y="188" text-anchor="middle">step 6 ✗</text><rect class="d-panel" x="250" y="196" width="70" height="46" rx="3" stroke-width="1"/><text class="s" x="285" y="224" text-anchor="middle">cleared</text><path class="d-rose" d="M244,169 L326,169" stroke-width="3"/></g><text class="s" x="10" y="270">Red line: where you print and check.</text><text class="s" x="10" y="288">1: right after step 4, so the bug is in 5–8.</text><text class="s" x="10" y="306">2: wrong after step 6, so it’s in 5–6.</text><text class="s" x="10" y="324">3: right after step 5, so step 6 is the bug.</text></svg>', alt:"Three columns of eight steps. Check 1: a red check line after step 4; steps 1 to 4 are fine (green), steps 5 to 8 are suspects (gold). Check 2: steps 1 to 4 and 7 to 8 are cleared; a check after step 6 shows the data is wrong, so steps 5 and 6 remain. Check 3: a check after step 5 shows the data is right, so step 6, marked with a cross, is the bug.", cap:"Three checks find one faulty step among eight. Twenty checks would be enough for about a million."},
      "This is a binary search, and it scales well: 8 steps need 3 checks, 64 need 6, and 1,000 need 10. It works on data too (does the script fail on the first half of the rows or the second?) and on changes over time: if it worked last week, [[git|Git]]’s `git bisect` command ({{git-basics|Unit 7}}) runs this search over your saved versions to find the [[commit-git|commit]] that broke it.",
      "A related move is **commenting out**: put `#` in front of half the suspicious code, or replace a calculation with a fixed value, and see whether the problem goes away."
    ]},
    {h:"Check your assumptions with assert", body:[
      "Every program rests on assumptions: “this list is never empty”, “the price is never negative”. An `assert` statement writes one down and checks it. If the condition is false, the program stops at once with an `AssertionError` and your message:",
      {code:['def average(numbers):','    assert len(numbers) > 0, "average() needs numbers"','    return sum(numbers) / len(numbers)','','print(average([72, 85, 90]))','print(average([]))'].join("\n"), lang:"py", label:"An assumption, written down", cap:"Prints `82.33333333333333`, then stops with `AssertionError: average() needs numbers`, pointing at line 2."},
      "That error says what was wrong, in your own words, at the moment it went wrong, instead of a puzzling crash further on. Automate the Boring Stuff (Chapter 5) calls an [[assertion]] “a sanity check”.",
      "`assert` is also the simplest way to write **tests**: small checks that a function gives the answers you expect. Run them after every change:",
      {code:['def average(numbers):','    return sum(numbers) / len(numbers)','','assert average([2, 4]) == 3','assert average([5]) == 5','assert average([1, 2]) == 1.5','print("All tests passed")'].join("\n"), lang:"py", label:"Three tiny tests", pylab:"pl-test", cap:"Prints `All tests passed`. Break `average` on purpose and one of the asserts stops the script."},
      {warn:"Use `assert` to catch your own mistakes, not to check what users type or what’s in a file: running `python3 -O` switches assertions off entirely. For bad input, use an `if` and a clear message. {{testing-basics|Unit 10}} goes further with testing."},
      {lab:"pl-test", t:"Practise: write assert tests for a function"}
    ]},
    {h:"Using a debugger", body:[
      "A **[[debugger]]** lets you pause a running program and look around: see every variable’s value, then run one line at a time. You choose where to pause by setting a **[[debug-breakpoint|breakpoint]]** on a line. The program pauses just before running that line. From there, **step over** runs one line and pauses again, **step into** goes inside a function the line calls, and **continue** runs on to the next breakpoint or the end.",
      {list:[
        "**Thonny** (a free beginners’ editor): click a line number to set a breakpoint, then press the **Debug** button (the bug icon) or choose **Run → Debug current script (nicer)** ([[kbd:Ctrl]] + [[kbd:F5]]). It stops at your breakpoint; **Step over** ([[kbd:F6]]) and **Step into** ([[kbd:F7]]) go line by line, and **Resume** ([[kbd:F8]]) runs on to the next breakpoint. Watch the **Variables** view (**View → Variables**).",
        "**VS Code** (with Microsoft’s Python extension): click in the margin left of a line number to set a red-dot breakpoint, choose **Run → Start Debugging** ([[kbd:F5]]), then **Python Debugger** and **Python File**. The toolbar has Continue, Step Over, Step Into and Stop; the **Run and Debug** view shows variables.",
        "**Any terminal:** put `breakpoint()` in your script and run it normally. Python pauses there with a `(Pdb)` prompt: its built-in debugger, pdb."
      ]},
      {code:['prices = [4.5, 1.25, 1.5]','total = 0','for p in prices:','    breakpoint()','    total = p','print("Total:", total)'].join("\n"), lang:"py", label:"Pausing with breakpoint()", cap:"Pauses each time round the loop. Type these commands at the `(Pdb)` prompt:"},
      {table:[
        ["At (Pdb), type","To"],
        ["`p total`","Print a variable or expression"],
        ["`n`","Run the next line"],
        ["`s`","Step into a function call"],
        ["`c`","Continue to the next pause"],
        ["`l`","List the code around where you are"],
        ["`q`","Quit (Python 3.14 and later ask you to confirm: press [[kbd:Enter]])"]
      ]},
      {tip:"`breakpoint()` needs a terminal you can type into. In this app’s Python Lab it can’t pause: the program just stops, saying it asked for more input than you gave it. Use `print` in the Lab, and the debugger on a computer."}
    ]},
    {h:"Off-by-one errors and edge cases", body:[
      "An **[[off-by-one|off-by-one error]]** is a loop or index that’s one too many or one too few. Python counts list positions from 0, and `range(a, b)` stops **before** `b`, so it’s easy to slip:",
      {code:['guests = ["Amara", "Kenji", "Lucía"]','for i in range(1, len(guests)):','    print(i, guests[i])'].join("\n"), lang:"py", label:"Who’s missing?", pylab:"pl-fix-offbyone", cap:"Prints `1 Kenji` and `2 Lucía`. Amara, at position 0, is skipped. `range(len(guests))` starts at 0; better still, `for name in guests:` needs no index at all."},
      "Go the other way, `range(len(guests) + 1)`, and the last round asks for `guests[3]`, which doesn’t exist: `IndexError: list index out of range`.",
      "**[[edge-case|Edge cases]]** are the inputs at the edges of what a program expects. Many bugs hide there, so test them on purpose:",
      {table:[
        ["Edge case","What often happens"],
        ["An empty list or file","Division by zero, or an empty result nobody notices"],
        ["Exactly one item","Loops that compare neighbours misbehave"],
        ["A blank line at the end of a file","`int(\"\")` gives `ValueError: invalid literal for int() with base 10: ''`"],
        ["A number with a decimal point","`int(\"4.50\")` is a ValueError; use `float()`"],
        ["Zero, or a negative number","Divisions fail; totals look wrong"],
        ["Spaces, accents, upper case","Comparisons like `name == \"ana\"` fail"]
      ]},
      {key:"After any fix, rerun three things: the case that failed, the normal cases, and the edges. A fix that breaks something else isn’t finished."},
      {lab:"pl-fix-offbyone", t:"Practise: fix a loop that’s off by one"},
      {lab:"pl-fix-name", t:"Practise: use a NameError traceback to fix a typo"},
      {lab:"pl-fix-indent", t:"Practise: fix an indentation error"}
    ]}
   ],
   try:[
    {id:"t2u9-l4-x1", type:"sort", q:"What kind of bug is each one?", buckets:["Syntax error","Runtime error","Logic error"], items:[
      {t:"`if total > 10` with the colon missing at the end", b:0, why:"A missing colon breaks Python’s grammar, so the script can’t start at all."},
      {t:"The script stops with `FileNotFoundError` on line 12", b:1, why:"The code was valid and started running; it stopped when line 12 tried to open a missing file."},
      {t:"A shopping total prints 1.5 when it should be 7.25", b:2, why:"No error appears, but the answer is wrong. Only knowing the right answer reveals it."},
      {t:"`int(\"\")` stops the script with a ValueError when it reaches a blank line", b:1, why:"The code is valid; it fails while running, on one particular input."},
      {t:"A loop prints every guest except the first one", b:2, why:"It runs without complaint but does the wrong thing: an off-by-one logic error."},
      {t:"A string opened with `\"` but never closed", b:0, why:"An unterminated string is a grammar problem: Python reports it before running anything."}
    ]},
    {id:"t2u9-l4-x2", type:"mcq", q:"In the `scores.py` traceback, the last frame points at line 2, `return sum(numbers) / len(numbers)`. Where should Mei look to find the **cause**?", options:[
      {t:"Up the traceback: line 8 called `report(\"Hana\", [])` with an empty list, which reached `average`", ok:true, why:"Right. Line 2 is correct for any non-empty list. The empty list came from line 8, through `report` on line 5. The crash site and the cause are often in different places."},
      {t:"Only line 2, because that’s where the error happened", why:"Line 2 is where it broke, but it did what it was told. The question is why it was given an empty list."},
      {t:"The first line of the traceback, “Traceback (most recent call last):”", why:"That line is just a heading. It tells you the newest call is at the bottom."},
      {t:"Python’s own files, because division is a built-in", why:"No frame here is in Python’s own files, and division works fine. The input was the problem."}
    ]},
    {id:"t2u9-l4-x3", type:"match", q:"Match each error message with its most likely cause.", pairs:[
      ["`IndexError: list index out of range`","A loop or index went one past the end of a list","Positions run from 0 to `len - 1`. Asking for `len` itself is one too far."],
      ["`ValueError: invalid literal for int() with base 10: ''`","An empty string, such as a blank line from a file, was turned into a number","Check for blank lines or empty cells before converting."],
      ["`KeyError: 'qty'`","A dictionary (or CSV row) has no key with exactly that name","Print the row to see the real keys: check spelling, capitals and stray characters such as a BOM."],
      ["`NameError: name 'totl' is not defined`","A variable’s name was misspelled, or it was used before being created","Compare the name with where you created it."],
      ["`TypeError: can't multiply sequence by non-int of type 'str'`","Two strings were multiplied, often numbers from a file that weren’t converted","Convert with `int()` or `float()` first."]
    ]},
    {id:"t2u9-l4-x4", type:"number", q:"A data-cleaning script runs 64 steps in order, and the result is wrong. Ana checks the data halfway through the remaining suspects each time. At most, how many checks does she need to find the one faulty step?", answer:6, tol:0, unit:"checks", why:"Each check halves the suspects: 64 → 32 → 16 → 8 → 4 → 2 → 1. That’s **6** checks (2 × 2 × 2 × 2 × 2 × 2 = 64).", wrongs:[
      {v:32, tol:0, why:"32 is how many suspects remain after the first check, not the number of checks."},
      {v:64, tol:0, why:"That’s checking every step in turn. Halving each time is far quicker."},
      {v:63, tol:0, why:"Checking after each step until the bad one could take up to 63 checks. Halving needs only 6."},
      {v:8, tol:0, why:"8 checks would be enough for 256 steps. For 64, six halvings are enough."}
    ]},
    {id:"t2u9-l4-x5", type:"spot", q:"Fatima’s script prints a numbered list of members, then the average fee from a CSV (`rows`) in which some new members’ fee cells are still blank. Tap every line that has an **off-by-one or edge-case bug**.", ask:"a bug", mono:true, parts:[
      {t:"names = [\"Ana\", \"Sione\", \"Mei\"]", flag:false, why:"Fine: a list of three names."}, "\n", {t:"for i in range(1, len(names)):", flag:true, why:"Starting at 1 skips `names[0]`, Ana. Use `range(len(names))`, or `for i, name in enumerate(names, start=1):` to number from 1."}, "\n", {t:"    print(i, names[i])", flag:false, why:"This line is fine; the problem is which values of `i` the loop gives it."}, "\n", "fees = []\n", {t:"for row in rows: fees.append(int(row[\"fee\"]))", flag:true, why:"Some fee cells are blank, and a blank cell is the empty string: `int(\"\")` is a ValueError. Skip or handle empty values before converting."}, "\n",{t:"print(sum(fees) / len(fees))", flag:true, why:"If `fees` is ever empty (no members), this divides by zero. Check `if fees:` first, or use an `assert` that states the assumption."}
    ]},
    {id:"t2u9-l4-x6", type:"mcq", q:"Tomás adds `assert price >= 0, \"negative price\"` to his invoice function. What does this line do?", options:[
      {t:"Nothing while the price is 0 or more; stops with `AssertionError: negative price` if it’s negative", ok:true, why:"Right. An assert checks an assumption and stops the program loudly, with your message, the moment it’s broken."},
      {t:"Changes negative prices to 0", why:"`assert` never changes values. It only checks, and stops if the check fails."},
      {t:"Asks the user to type a new price", why:"It doesn’t interact with anyone; it raises an error."},
      {t:"Guarantees prices are never negative, even when Python runs with -O", why:"With `python3 -O`, assertions are skipped entirely. Use `if` and a clear message to check input you don’t control."}
    ]},
    {id:"t2u9-l4-x7", type:"order", q:"Put Kenji’s debugging session in a sensible order.", items:[
      {t:"Make the bug happen again on purpose with the smallest input that fails", why:"Reproducing comes first: without it you can’t tell whether a change fixed anything, and it gives you a fresh traceback to read."},
      {t:"Read the whole traceback from that small run, bottom line first", why:"The error type, message and line numbers tell you where to look."},
      {t:"Print the suspicious values (or pause with a debugger) to test a guess", why:"Check what the values really are instead of assuming."},
      {t:"Change one thing to fix it", why:"One change at a time, so you know which change worked."},
      {t:"Rerun the failing case, then the normal cases and edge cases", why:"Confirm the fix, and that it didn’t break something else."}
    ]}
   ],
   apply:{intro:"Debug real code on purpose. All of these work in the Python Lab on a phone, except the debugger task, which needs a computer.", tasks:[
     {t:"Read a traceback from the bottom up", how:["Run `scores.py` from this lesson.","Write down, in order: the error type, the message, the line that failed, and the line where the bad value came from.","Fix it so `average` handles an empty list (for example `report` prints “no scores yet” when the list is empty), and rerun both people."], write:"What were the four things you wrote down? How did you fix it?"},
     {t:"Find a logic error with print", how:["Run the “total that’s too small” example, with the `print(f\"{p=} {total=}\")` line in it.","Explain each line out loud as if to a rubber duck, then fix it.","Remove the debug print and add three `assert` tests for a function that totals a list (empty list, one item, several items)."], write:"Which line was wrong, and what did saying it out loud reveal?"},
     {t:"Step through with a debugger (computer)", how:{
       win:["Install Thonny from thonny.org (it includes Python), or use VS Code with Microsoft’s Python extension.","Open the “total that’s too small” example. Set a breakpoint on `total = p` (Thonny: click its line number; VS Code: click just left of its line number).","Thonny: the **Debug** button, or **Run → Debug current script (nicer)** ([[kbd:Ctrl]] + [[kbd:F5]]). VS Code: **Run → Start Debugging** ([[kbd:F5]]), then **Python Debugger** and **Python File**.","Step over a few lines and watch `p` and `total` change in the variables view."],
       mac:["Install Thonny from thonny.org, or use VS Code with Microsoft’s Python extension.","Open the example, set a breakpoint on `total = p`, and start debugging (Thonny: the **Debug** button, or **Run → Debug current script (nicer)**; VS Code: **Run → Start Debugging**, then **Python Debugger** and **Python File**).","Step over a few lines and watch the variables.","In Terminal, also try the `breakpoint()` version: at `(Pdb)`, type `p total`, `n`, `c`."],
       chromeos:["In the Linux Terminal, save the `breakpoint()` version of the example and run `python3` with its file name.","At `(Pdb)`, type `p total`, then `n` a few times, then `c`, then `q`.","Thonny and VS Code can also be installed inside the Linux environment if you want a visual debugger."],
       phone:["Phones can’t run a step-by-step debugger in this app. Use print debugging in the Python Lab instead: add `print(f\"{p=} {total=}\")` inside the loop and watch the values.","Then try the `pl-fix-offbyone`, `pl-fix-name` and `pl-fix-indent` challenges."]
     }, write:"What did you see in the variables view (or at the Pdb prompt) that you couldn’t see before?"},
     {t:"Hunt edge cases", how:["Take any script from this unit (the CSV total is a good one).","Run it on an empty file, a file with only a header, a file with a blank line at the end, and a file with `4.50` where a whole number was expected.","Note each error, then make the script handle at least two of them."]}
   ], proof:"Your notes on one traceback (type, message, failing line, origin of the bad value), a fixed logic error with assert tests that pass, and a list of the edge cases you tried with what happened."},
   read:[
     {book:"atbs", where:"Chapter 5, “Debugging”: “Raising Exceptions”, “Assertions”, “Logging” and “Mu’s Debugger”", note:"Mu is another beginners’ editor; its debugger works like Thonny’s."},
     {book:"missing", where:"“Debugging and Profiling”: “Printf Debugging and Logging” and “Debuggers”", note:"Mentions Python’s pdb. The later sections (system call tracing, memory debugging) are beyond this unit."},
     {book:"thinkpy", where:"1.7 “Debugging”, 6.10 “Debugging” (printing what goes into and out of a function) and 12.10 “Debugging” (the six R’s: reading, running, ruminating, rubberducking, retreating, resting)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u9-l5", title:"Getting unstuck", minutes:50,
   hook:{q:"Your script stops with `KeyError: 'qty'`. Which search is most likely to find a helpful answer quickly?", options:["The whole traceback, file paths and all","`python csv DictReader KeyError` plus the key name, with your own file names left out","“my python code doesn’t work”","`KeyError`"], answer:1, reveal:"The second. Good searches keep the parts other people share (the language, the module, the error type, the general wording) and drop the parts that are only yours, such as your folder names and variable names. Too much detail matches nothing; too little matches everything. This lesson covers searching, reading the official documentation, asking a good question, using AI assistants wisely, and knowing when to step away."},
   goals:[
     "Turn an error message into a search that finds useful answers, and judge whether an answer fits your Python version",
     "Find and read the right page of the official Python documentation, and use `help()`",
     "Ask a clear question with a minimal reproducible example, what you expected and what you got",
     "Use AI assistants to explain errors while keeping your own understanding, checking every suggestion, and never pasting secrets",
     "Recognise when to retreat to working code or take a break"
   ],
   learn:[
    {h:"Being stuck is part of the work", body:[
      {lead:"Everyone who writes code gets stuck, many times a week. What differs is how quickly they get moving again."},
      "Getting unstuck is a skill with steps, not a matter of being clever. The steps go from things you can do alone in a minute to things that need someone else’s time. Work down the ladder, and notice that several of the steps solve the problem on their own, before you ever ask anyone:",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="t2u9a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-sage" x="10" y="10" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="28">1. Read the whole error</text><text class="s" x="22" y="44">bottom line first (Lesson 4)</text><rect class="d-sage" x="10" y="58" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="76">2. Reproduce, print, explain</text><text class="s" x="22" y="92">to a rubber duck</text><rect class="d-lup" x="10" y="106" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="124">3. Search the error</text><text class="s" x="22" y="140">shared words, not your names</text><rect class="d-lup" x="10" y="154" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="172">4. Read the documentation</text><text class="s" x="22" y="188">docs.python.org, help()</text><rect class="d-gold" x="10" y="202" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="220">5. Make a minimal example</text><text class="s" x="22" y="236">this often solves it by itself</text><rect class="d-gold" x="10" y="250" width="250" height="40" rx="6" stroke-width="1.5"/><text x="22" y="268">6. Ask a person or an AI</text><text class="s" x="22" y="284">code, error, expected vs got</text><path class="d-ink" d="M300,22 L300,286" stroke-width="2" marker-end="url(#t2u9a3)"/><text class="s" x="286" y="150" text-anchor="middle" transform="rotate(-90 286 150)">more help, more time</text><rect class="d-rose" x="10" y="306" width="320" height="56" rx="6" stroke-width="1.5"/><text x="22" y="326">At any step: stuck and tense?</text><text class="s" x="22" y="344">Undo back to code that worked, or take</text><text class="s" x="22" y="358">a break. Come back with fresh eyes.</text></svg>', alt:"A ladder of six steps. 1: read the whole error, bottom line first. 2: reproduce, print, explain to a rubber duck. 3: search the error, using shared words, not your own names. 4: read the documentation at docs.python.org or with help(). 5: make a minimal example, which often solves it by itself. 6: ask a person or an AI, giving code, the error, and what you expected versus what you got. An arrow along the side shows the steps going from quick and alone to more help and more time. A box at the bottom says: at any step, if you’re stuck and tense, undo back to code that worked or take a break, and come back with fresh eyes.", cap:"Climb from the quick, solo steps to asking for help. Breaks are allowed at every rung."},
      "Lesson 4 covered steps 1 and 2. This lesson covers the rest."
    ]},
    {h:"Searching for an error", body:[
      "Someone has almost certainly met your error before. The trick is to search for the part of the message that **they** would have seen too:",
      {list:[
        "**Start from the last line** of the traceback: the error type and message.",
        "**Remove what’s only yours**: your folder names, file names, variable names and data. `KeyError: 'qty'` is yours; “KeyError” plus “csv DictReader” is shared.",
        "**Add context**: `python`, and the module or tool (`csv`, `pathlib`, `VS Code`).",
        "**Put the exact message in quotes** if the plain search is too broad: `\"can't multiply sequence by non-int of type\"`."
      ]},
      {table:[
        ["Your error","A better search"],
        ["`TypeError: can't multiply sequence by non-int of type 'str'` on `row[\"qty\"] * row[\"price\"]`","python can't multiply sequence by non-int of type str csv"],
        ["`KeyError: '\\ufeffname'`","python csv DictReader \\ufeff first column"],
        ["`UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe9`","python UnicodeDecodeError utf-8 can't decode byte 0xe9 open file"]
      ]},
      {h:"Judging what you find"},
      "Question-and-answer sites such as **[[stack-overflow|Stack Overflow]]**, forums, blog posts and official issue trackers will turn up. Before copying anything:",
      {list:[
        "**Check it’s the same problem**: same error type, similar code. A different cause can produce a similar message.",
        "**Check the date and version.** Answers written for Python 2 (gone since 2020) give themselves away with `print \"hello\"` without brackets or `raw_input()`. Newer answers lower down a page are sometimes better than the top one.",
        "**Understand before pasting.** If you can’t explain what a line does, you can’t tell whether it’s safe. Never run commands you don’t understand, especially ones that delete, install or need administrator rights."
      ]}
    ]},
    {h:"Reading the documentation", body:[
      "The official documentation at **docs.python.org** is the most reliable description of what Python actually does. It has several parts; three matter most at the start:",
      {table:[
        ["Part","Use it for"],
        ["The Python Tutorial","A guided introduction to the language"],
        ["The Python Standard Library","Every built-in function and module: `open`, `csv`, `pathlib`, `json`…"],
        ["Glossary","Short definitions of terms such as “iterable” or “path-like object”"]
      ]},
      "Use the version menu at the top of the page to match your own Python (run `python3 --version` to see it). Search the docs for a module’s name, such as `csv`, then read a function’s entry in this order:",
      {ol:[
        "**The signature**: the function’s name and its parameters, such as `open(file, mode='r', buffering=-1, encoding=None, …)`. A parameter with `=` has a default, so you may leave it out.",
        "**The first paragraph**: what it does and what it gives back.",
        "**Notes such as “Changed in version 3.x”**: these explain why an older answer online behaves differently.",
        "**The examples**: many module pages have short examples near the end. Copy one, run it, then change it."
      ]},
      "Python can also show its own documentation without a browser. In the interactive `>>>` prompt (the [[repl|REPL]]: start it with `python3`), type `help(…)` with any function, method or module:",
      {code:['help(str.split)','help(open)','import csv','help(csv.DictReader)'].join("\n"), lang:"py", label:"In the >>> prompt", cap:"Each one shows the signature and an explanation. Press [[kbd:Space]] for more, and [[kbd:Q]] to go back to the prompt. `help()` also works in a script and in the Python Lab, where it simply prints the text."},
      {tip:"`dir(\"text\")` lists everything a string can do (`upper`, `split`, `strip`…). It’s a quick way to remember a method’s exact name."}
    ]},
    {h:"Asking a good question", body:[
      "When you ask a person, a forum or a classmate, the quality of the answer depends on the question. A **[[minimal-example|minimal reproducible example]]** is the heart of it: the **smallest complete piece of code that still shows the problem**, which anyone can run on their own computer and see the same thing.",
      "Making one is also a debugging technique in its own right. Start from your script and remove things (other functions, most of the data, the menu, the file reading) while checking the problem still happens. Very often, somewhere along the way, you find the cause yourself.",
      {ex:"Goal: total the qty column of a CSV.\n\nCode (complete, 6 lines):\n  import csv\n  rows = [\"qty\", \"3\", \"12\"]\n  total = 0\n  for row in csv.DictReader(rows):\n      total += row[\"qty\"]\n  print(total)\n\nExpected: 15\nGot: TypeError: unsupported operand type(s)\n     for +=: 'int' and 'str'\n(full traceback below)\n\nTried: printing row, which shows {'qty': '3'}.\nPython 3.13 on Windows 11.", label:"A clear question", mono:true},
      "That example replaced the CSV file with a list of lines (the `csv` module accepts any list of lines, not just a file), so anyone can run it without the file. Each part does a job:",
      {list:[
        "**What you’re trying to do**, in one sentence.",
        "**Code that runs as it is**, as text, not a screenshot (people can’t copy and run a picture, and screen readers can’t read one).",
        "**What you expected and what you got**, including the **full** traceback, also as text.",
        "**What you’ve tried**, so helpers don’t suggest it again.",
        "**Versions**: Python version and operating system."
      ]},
      {warn:"Before posting anything publicly, remove passwords, API keys, access tokens, personal data (real names, emails, addresses from your CSV) and anything your school or workplace treats as confidential. Replace them with made-up values. Anything posted publicly can be copied and kept, even if you delete it later."}
    ]},
    {h:"AI assistants: help without handing over your thinking", body:[
      "AI chat assistants and coding tools ({{ai-coding-tools|Unit 10}}) can be very good at explaining an error message in plain words, suggesting where to look, or describing what an unfamiliar line does. MIT’s Missing Semester calls them “surprisingly useful debugging assistants”, and warns in the same breath that they “can hallucinate plausible-sounding but wrong explanations”. Use them in a way that keeps you learning:",
      {ol:[
        "**Guess first.** Read the error and decide what you think it means before you ask. Then compare.",
        "**Ask for an explanation or a hint, not just a fix**: “Explain this traceback and where I should look” teaches more than “fix my code”.",
        "**Give the same things you’d give a person**: a minimal example, the full error, and what you expected.",
        "**Verify everything.** Run the suggestion. Read it line by line until you can explain it. Check functions and options against the documentation; an assistant can invent a parameter that doesn’t exist, or confidently fix the wrong problem.",
        "**Check any package it tells you to install** really exists and is the one you want, on pypi.org, before installing. Invented package names are a real attack route: people register the names AI tools tend to make up (“hallucinated packages”, Unit 10)."
      ]},
      {warn:"Never paste secrets into an AI tool: passwords, API keys, tokens, private keys, or other people’s personal data from your files. Depending on the service and your settings, what you type may be stored, reviewed or used for training. Follow your school’s or employer’s rules on which tools may see their code at all."},
      "Think Python ends its chapters with “Ask a virtual assistant” exercises, and its final chapter makes a useful point: the thinking you do to **write** a clear prompt and **judge** the answer is valuable in itself, like explaining to a rubber duck. If you find yourself pasting errors back and forth without reading them, stop and go back to step 1 of the ladder."
    ]},
    {h:"Retreat, rest and come back", body:[
      "Think Python’s “six R’s” of debugging end with two that aren’t about code at all. **Retreating**: “At some point, the best thing to do is back up – undoing recent changes – until you get to a program that works.” If you use Git (Unit 7), that’s exactly what your last [[commit-git|commit]] is for; otherwise, keep a copy of the last working version before big changes. **Resting**: “If you give your brain a break, sometime it will find the problem for you.”",
      "Signs it’s time to step away:",
      {list:[
        "You’re changing things at random to see what happens.",
        "You’ve read the same lines many times and can no longer really see them.",
        "You’re tense, angry at the computer, or telling yourself you’re bad at this. (You aren’t: you’re at the stuck stage, which everyone visits.)"
      ]},
      "A walk, a meal or a night’s sleep often does more than another hour of staring. Before you go, write down what you know so far: what fails, what you’ve ruled out, and your next idea. That note gets you moving again quickly, and if you do need to ask for help, it’s half of your question already written.",
      {key:"Getting unstuck, in order: read, reproduce, search, read the docs, shrink it to a minimal example, then ask with code, error, expected and got. Rest whenever you need to."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Good programmers don’t need to search.”** Professionals search and read documentation constantly; knowing what to search for is part of the skill.",
        "**“The top answer is always right.”** It may be old, for another version, or for a slightly different problem. Check the date and test it.",
        "**“A screenshot of my code is enough.”** Helpers need text they can copy and run, plus the full error.",
        "**“If the AI’s fix runs, it’s correct.”** Code can run and still be wrong, or hide the real problem. Understand it and test the edge cases.",
        "**“Taking a break is giving up.”** Resting and retreating are recognised debugging steps, and they often work."
      ]}
    ]}
   ],
   try:[
    {id:"t2u9-l5-x1", type:"sort", q:"Lucía’s script failed with `KeyError: 'Membership_Fee_2026'` in her file `C:\\Users\\Lucia\\Desktop\\club\\fees.py`. Which parts belong in her search?", buckets:["Keep in the search","Leave out"], items:[
      {t:"`python`", b:0, why:"Says which language. Without it you may get results about other tools that also use the word KeyError."},
      {t:"`KeyError`", b:0, why:"The error type is shared by everyone who meets this problem."},
      {t:"`csv DictReader`", b:0, why:"The module she’s using narrows it to the right situation."},
      {t:"`'Membership_Fee_2026'`", b:1, why:"That column name is hers alone; nobody else’s answer will contain it."},
      {t:"`C:\\Users\\Lucia\\Desktop\\club`", b:1, why:"Her folder path is personal and unhelpful in a search, and better not shared publicly."},
      {t:"`fees.py`", b:1, why:"Her own file name; nobody else’s question will mention it."}
    ]},
    {id:"t2u9-l5-x2", type:"mcq", q:"Kenji finds an answer that fixes his problem with `print \"Total:\", total`. Python 3 rejects it with a SyntaxError. What does this tell him?", options:[
      {t:"The answer was written for Python 2; he should look for a newer answer or adapt it to Python 3", ok:true, why:"Right. `print` without brackets is Python 2 syntax. In Python 3 it’s a function: `print(\"Total:\", total)`. Check the date and version of answers you find."},
      {t:"His Python is broken and needs reinstalling", why:"Python 3 is working correctly: it’s rejecting Python 2 syntax."},
      {t:"He needs to add a semicolon at the end", why:"Python doesn’t need semicolons. The missing brackets are the problem."},
      {t:"The search engine gave him the wrong language", why:"It’s Python, but Python 2, an older version that ended in 2020."}
    ]},
    {id:"t2u9-l5-x3", type:"match", q:"Match each need with the best place to look first.", pairs:[
      ["Exactly which parameters `open()` accepts in your Python version","The Python Standard Library docs on docs.python.org (version menu set to yours)","The official reference is the most reliable description of what Python does."],
      ["A quick reminder of what `str.strip` does, without leaving the terminal","`help(str.strip)` at the `>>>` prompt","`help()` shows the built-in documentation right where you are working."],
      ["Whether others have hit the same strange error message","A web search for the shared part of the message","Someone has probably met it before; their question and its answers may explain it."],
      ["A plain-words explanation of a traceback you’ve already tried to read","An AI assistant, then check its explanation against the code and docs","Good for explanations, as long as you verify, and never paste secrets."]
    ]},
    {id:"t2u9-l5-x4", type:"spot", q:"Ana is about to post this question on a public forum. Tap every part she should **change or remove** before posting.", ask:"should change", parts:[
      {t:"Title: “HELP!!! code broken”", flag:true, why:"The title should say what’s wrong, for example “KeyError when reading a CSV exported from Excel with csv.DictReader”."}, "\n", {t:"I’m trying to total the amount column of a CSV.", flag:false, why:"Good: a clear one-sentence goal."}, "\n", {t:"[a phone photo of the screen showing the code]", flag:true, why:"Code should be pasted as text, so helpers can copy and run it and screen readers can read it."}, "\n", {t:"API_KEY = \"sk-live-…\" (left in the code)", flag:true, why:"A secret key must never be posted. Replace it with a fake value. If a real key has ever been shared anywhere, treat it as exposed: revoke it and make a new one."}, "\n", {t:"Expected 52.50, got KeyError: 'amount' (full traceback pasted as text)", flag:false, why:"Exactly right: what she expected, what she got, and the full error as text."}, "\n", {t:"Python 3.13 on macOS", flag:false, why:"Versions help people reproduce the problem."}
    ]},
    {id:"t2u9-l5-x5", type:"mcq", q:"An AI assistant tells Sione to run `pip install csvfixer-pro` to solve his CSV problem. He has never heard of this package. What should he do first?", options:[
      {t:"Check on pypi.org that the package exists, is the one he wants and is well maintained, or ask for a solution with the built-in csv module", ok:true, why:"Right. AI tools sometimes invent package names, and attackers register those names with harmful code inside. The built-in `csv` module may be all he needs."},
      {t:"Install it straight away: the assistant wouldn’t suggest something harmful", why:"Assistants can invent or misremember package names, and they can’t check what a package does today. Verify before installing anything."},
      {t:"Install it with administrator rights so it definitely works", why:"That gives an unknown package more power over his computer. It makes any risk worse, not better."},
      {t:"Paste his whole CSV of member details to the assistant so it can check", why:"Member data is personal information. Share a few made-up rows instead."}
    ]},
    {id:"t2u9-l5-x6", type:"order", q:"Priya has been stuck for a while on a script that reads a 3,000-row CSV. Put her next steps in a sensible order.", items:[
      {t:"Read the whole traceback again, bottom line first", why:"The quickest step, and it’s easy to skip details when tired."},
      {t:"Search for the shared part of the error message with `python` and `csv`", why:"Someone may already have explained this exact error."},
      {t:"Check the `csv` documentation for the function she’s using", why:"The docs say exactly what the function expects and returns."},
      {t:"Shrink it to a minimal example: three rows and only the failing lines", why:"This often reveals the cause, and if not, it’s exactly what a helper needs."},
      {t:"Ask a person or an AI assistant, with the example, the full error, and what she expected", why:"By now she can ask a clear question, and has made any secrets and personal data safe to share."}
    ]}
   ],
   apply:{intro:"Practise each rung of the ladder on a real error. Everything here works on a phone, using the Python Lab and your browser.", tasks:[
     {t:"Search an error well", how:["Pick an error you met in this unit (for example the TypeError from multiplying strings, or the UnicodeDecodeError).","Write two searches: a bad one (the whole traceback, or just “error”) and a good one (shared words, `python`, the module).","Try both. Open the first two results of the good search and check: same problem? same Python version? date?"], write:"Your two searches, and what the better one found."},
     {t:"Read the documentation", how:{
       win:["Go to docs.python.org and set the version menu to your Python (`python --version` in PowerShell).","Find the page for the `csv` module and read the entry for `DictReader`: signature, first paragraph, and the example.","In PowerShell, start `python`, then try `help(open)` and `dir(\"text\")`. Type `exit()` to leave."],
       mac:["Go to docs.python.org and set the version menu to your Python (`python3 --version` in Terminal).","Find the `csv` module page and read `DictReader`: signature, first paragraph, example.","In Terminal, start `python3`, try `help(open)` (press [[kbd:Q]] to leave the help) and `dir(\"text\")`, then `exit()`."],
       chromeos:["Open docs.python.org in Chrome, set the version menu, and read `csv.DictReader`.","In the Linux Terminal, start `python3` and try `help(open)` and `dir(\"text\")`."],
       phone:["Open docs.python.org in your phone’s browser. The pages work on small screens; use the search box to find `csv`.","Read the `DictReader` entry. In the Python Lab, run `import csv` and `help(csv.DictReader)`, then try the docs’ example (start the program by writing a small `names.csv` with `first_name,last_name` columns, since the Lab’s folder starts empty)."]
     }, write:"What does the newline='' note in the csv docs say, in your own words?"},
     {t:"Write a minimal example and a good question", how:["Take a bug from this unit (or make one: forget `int()` in the CSV total).","Shrink it until it’s under ten lines, runs on its own, and still shows the error. Replace the file with a list of lines if you can.","Write the question with all five parts: goal, code as text, expected vs got (full traceback), what you tried, versions. Check it contains no secrets or real personal data.","Optional: give the same question to an AI assistant, ask for an explanation rather than a fix, and check its answer against the docs."], write:"Paste your question. Did shrinking it reveal the cause?"}
   ], proof:"A pair of searches (weak and strong) with what the strong one found, notes from one documentation entry, and a complete question with a minimal reproducible example and no secrets in it."},
   read:[
     {book:"missing", where:"“Debugging and Profiling”: “AI for Debugging”", note:"Short, balanced advice: useful, but able to hallucinate convincing wrong explanations."},
     {book:"thinkpy", where:"12.10 “Debugging” (especially retreating and resting) and Chapter 19, “Final thoughts”; also try any chapter’s “Ask a virtual assistant” exercises"},
     {book:"atbs", where:"Introduction: “How to Find Help” and “Asking Smart Programming Questions”", note:"Short and practical: explain what you’re trying to do, not just what you did, and share the entire error message and your code."}
   ]
  }
  ],
  checkpoint:["t2u9-q02","t2u9-q05","t2u9-q10","t2u9-q13","t2u9-q18","t2u9-q21","t2u9-q26","t2u9-q29","t2u9-q31","t2u9-q35","t2u9-q37","t2u9-q40"],
  codex:[
   {id:"py-files", title:"Reading and writing text files in Python", aka:["open()","with open","file modes","write mode","append mode","read a file","encoding utf-8","FileNotFoundError"], tags:["python","files"],
    summary:"Open text files with `with open(path, mode, encoding=\"utf-8\") as f:`; mode \"w\" empties the file first, \"a\" adds to the end, \"x\" refuses to overwrite.",
    levels:{
     starter:[
      "Variables vanish when a program ends. To keep anything, a program writes it to a **file**, and to use data from elsewhere, it reads one.",
      "In Python you open a file, use it, and close it. The safe pattern does the closing for you:",
      {code:['with open("notes.txt", "w", encoding="utf-8") as f:','    f.write("Buy rice\\n")'].join("\n"), lang:"py"},
      "The second argument is the **mode**: `\"r\"` reads (the default), `\"w\"` writes from scratch, `\"a\"` adds to the end. The big trap: **`\"w\"` empties an existing file the moment it opens it**, with no warning and no undo.",
      "Always add `encoding=\"utf-8\"`, so accented letters, other alphabets and emoji are saved and read the same way on every computer.",
      {key:"Reading: `with open(path, encoding=\"utf-8\") as f:`. Adding: mode `\"a\"`. Starting fresh: `\"w\"`, carefully."},
      "The same pattern works for any **text** file: notes, logs, CSV and JSON data, web pages, even other Python scripts. Photos and Word documents are binary files and need other tools."
     ],
     builder:[
      {table:[
        ["Mode","If the file exists","If it doesn’t"],
        ["`\"r\"`","Reads it","FileNotFoundError"],
        ["`\"w\"`","Empties it, then writes","Creates it"],
        ["`\"a\"`","Writes at the end","Creates it"],
        ["`\"x\"`","FileExistsError","Creates it"]
      ]},
      "**Reading.** `f.read()` returns the whole file as one string. Looping `for line in f:` gives one line at a time, each still ending in `\\n`, so use `line.strip()` before comparing or converting. Path objects offer one-line versions for small files: `p.read_text(encoding=\"utf-8\")` and `p.write_text(text, encoding=\"utf-8\")`.",
      "**Writing.** `f.write(s)` writes exactly `s` and returns the number of characters written; unlike `print`, it adds no line break. `print(…, file=f)` is an alternative that does add one.",
      "**Why `with`.** The `with` statement closes the file when the block ends, even if an error happens inside it. Until a written file is closed, part of the text may still be in a memory buffer rather than on disk.",
      "**Common errors.** `FileNotFoundError` usually means the relative path is being looked up from a different working directory, or the name differs (hidden `.txt.txt`, capitals, spaces). `UnicodeDecodeError` means the bytes aren’t in the encoding you asked for. Garbled text such as `cafÃ©` means UTF-8 bytes were read as another encoding.",
      "**Checking first.** `Path(p).exists()` tells you whether something is there before you read it, and `Path(\"folder\").mkdir(exist_ok=True)` makes sure a folder exists before you write into it.",
      {tip:"For a log that must keep its history, use `\"a\"`. For a report that must never replace an older one, use `\"x\"`."}
     ],
     pro:[
      "**Default encoding.** Without `encoding=`, Python versions before 3.15 use the locale’s preferred encoding, which on many Windows systems is a legacy code page such as cp1252. Python 3.15 (released October 2026; PEP 686) makes UTF-8 mode the default, but code that runs on older versions should still pass `encoding=\"utf-8\"` (or `encoding=\"locale\"` when you really want the system’s). Setting the environment variable `PYTHONWARNDEFAULTENCODING=1` makes Python warn about calls that leave it out.",
      "**Errors handling.** `errors=\"replace\"` swaps undecodable bytes for a replacement character instead of failing; useful for skimming messy files, dangerous for data you will save back.",
      "**Text vs binary.** Text mode decodes bytes to `str` and translates line endings: on reading, `\\r\\n` and `\\r` become `\\n` (universal newlines); on writing, `\\n` becomes the platform’s line separator. Binary mode (`\"rb\"`, `\"wb\"`) gives raw `bytes` with no decoding or translation, which is what images, PDFs and other non-text files need. The `csv` module wants `newline=\"\"` so that it can manage line endings itself.",
      "**Atomic replacement.** `\"w\"` truncates first, so a crash mid-write leaves a half-written file. For important files, write to a temporary file in the same folder, then `Path.replace()` it onto the real name. On the same file system, readers then see either the old file or the new one, never half of one (Python’s documentation promises this on POSIX systems such as macOS and Linux).",
      "**Large files.** Iterating `for line in f` reads a line at a time, so memory stays small however big the file is; `f.read()` loads everything at once.",
      "**Where files live.** In browser-based Python (such as Pyodide, used by this app’s Python Lab), files are written to an in-memory file system, not to your device’s storage. This app’s Lab goes further and empties its folder before every run, so a program must create any file it reads, unless a challenge provides it."
     ]},
    related:["pathlib-paths","csv-python","reading-tracebacks"],
    read:[{book:"atbs", where:"Chapter 10, “Reading and Writing Files”"},{book:"thinkpy", where:"Chapter 13, “Files and Databases”"}],
    sources:[{t:"Automate the Boring Stuff, 3rd ed., Chapter 10: Reading and Writing Files", url:"https://automatetheboringstuff.com/3e/chapter10.html"},{t:"Python documentation: Built-in Functions, open()", url:"https://docs.python.org/3/library/functions.html#open"},{t:"Python tutorial: Reading and Writing Files", url:"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"}],
    checked:"2026-11"},
   {id:"pathlib-paths", title:"File paths and pathlib", aka:["Path","pathlib.Path","absolute path","relative path","working directory","cwd","backslash","raw string"], tags:["python","files","paths"],
    summary:"A path is a file’s address; `pathlib.Path` joins paths with `/`, takes them apart with `.name`, `.stem`, `.suffix` and `.parent`, and works on every system.",
    levels:{
     starter:[
      "A **path** is the address of a file: the folders that lead to it, then its name. An **absolute** path starts at the top of the drive (`C:\\Users\\Ana\\notes.txt` on Windows, `/Users/ana/notes.txt` on a Mac). A **relative** path such as `notes/shopping.txt` starts from the **working directory**, the folder the program is running in.",
      "Windows separates folders with backslashes; macOS and Linux use forward slashes. Python’s `pathlib` module hides that difference:",
      {code:['from pathlib import Path','p = Path("notes") / "shopping.txt"','print(p.name)   # shopping.txt'].join("\n"), lang:"py"},
      "The `/` joins parts with the right separator for the computer the script runs on, so one script works on Windows, macOS and Linux. Path objects can also take a path apart: `.name`, `.stem` (name without extension), `.suffix` (the extension) and `.parent` (the folder).",
      {warn:"Typing a Windows path in an ordinary string can go wrong: `\\n` and `\\t` inside quotes mean new line and tab. Use forward slashes or a raw string such as `r\"C:\\new\\file.txt\"`."}
     ],
     builder:[
      {table:[
        ["Expression","For `Path(\"club/2026/minutes.txt\")`"],
        ["`.name`","`minutes.txt`"],
        ["`.stem`","`minutes`"],
        ["`.suffix`","`.txt`"],
        ["`.parent`","`club/2026`"],
        ["`.with_name(\"agenda.txt\")`","`club/2026/agenda.txt`"],
        ["`.with_suffix(\".md\")`","`club/2026/minutes.md`"]
      ]},
      "**Where am I?** `Path.cwd()` is the working directory, `Path.home()` your home folder, and `p.resolve()` the absolute path a relative path points to. Printing `p.resolve()` is the quickest way to debug `FileNotFoundError`.",
      "**Asking about the disk.** `p.exists()`, `p.is_file()` and `p.is_dir()` check what’s there. `p.mkdir(parents=True, exist_ok=True)` creates a folder and any missing parents without failing if it exists. `p.iterdir()` lists a folder; `p.glob(\"*.csv\")` finds matching names; `p.rglob(\"*.csv\")` searches subfolders too. Wrap listings in `sorted()` when order matters, because the file system returns them in no particular order.",
      "**Working directory.** Run `python3 script.py` from a terminal and the working directory is the terminal’s current folder. Editors often use the script’s folder or the project folder. To make a script find files next to itself whatever the working directory, build paths from `Path(__file__).parent`.",
      "**Joining safely.** Build paths with `/` rather than gluing strings together (`\"notes\" + \"/\" + name`), which breaks on the other system’s separator. One surprise: if a later part is itself absolute, it wins, so `Path(\"notes\") / \"/etc\"` is just `/etc`. `.with_stem(\"agenda\")` changes only the name before the extension.",
      "**The backslash trap.** `\"C:\\Users\\Ana\"` is a SyntaxError because `\\U` starts a Unicode escape; `\"C:\\docs\\new.txt\"` quietly contains a line break. Since Python 3.12, an unknown escape such as `\\d` also triggers a SyntaxWarning."
     ],
     pro:[
      "**Pure and concrete paths.** `PurePosixPath` and `PureWindowsPath` manipulate path strings without touching the disk, useful for handling Windows paths on Linux or the reverse. `Path` is the concrete class for the current system, with methods that do touch the disk.",
      "**Case sensitivity.** Windows and, by default, macOS file systems ignore case; Linux file systems don’t. `Path.glob()` follows the platform by default (case-insensitive on Windows); since Python 3.12 it accepts `case_sensitive=` to choose. A script tested on Windows may miss `.JPG` files on Linux, so compare `p.suffix.lower()`.",
      "**Order.** `iterdir()` and `glob()` return entries in an arbitrary order that depends on the file system. Wrap them in `sorted()` whenever order matters.",
      "**Strings still work.** Almost every standard-library function that takes a file name accepts a `Path` (a “path-like object”), and `str(p)` converts one when a library insists on a string. `os.path` is the older, string-based module you’ll see in older code; `pathlib` is the modern equivalent for most jobs.",
      "**Relative to what?** `Path.rename()` and friends interpret a relative target relative to the working directory, not to the original file’s folder. `old.with_name(new_name)` keeps the target in the same folder.",
      "**Portability.** Characters such as `: * ? \" < > |` are not allowed in Windows file names, and names like `CON` or `NUL` are reserved. Code that builds file names from data (dates with colons, titles with slashes) should replace such characters."
     ]},
    related:["py-files","renaming-files-safely","folders-paths","shell-navigation"],
    read:[{book:"atbs", where:"Chapter 10, “Reading and Writing Files”, from “Files and Filepaths” to “Checking Path Validity”"}],
    sources:[{t:"Python documentation: pathlib — Object-oriented filesystem paths", url:"https://docs.python.org/3/library/pathlib.html"},{t:"Automate the Boring Stuff, 3rd ed., Chapter 10", url:"https://automatetheboringstuff.com/3e/chapter10.html"}],
    checked:"2026-11"},
   {id:"csv-python", title:"CSV and JSON in Python", aka:["csv module","csv.reader","DictReader","DictWriter","csv.writer","newline=''","utf-8-sig","json.load","json.dump"], tags:["python","data","spreadsheets"],
    summary:"Python’s `csv` module reads and writes spreadsheet-style text safely, giving every cell as a string; `json` saves nested lists and dictionaries.",
    levels:{
     starter:[
      "A CSV file is a table in plain text: one row per line, commas between cells. Python’s built-in `csv` module reads it properly, including values such as `\"cookies, oat\"` that contain a comma, which a simple split on commas gets wrong.",
      {code:['import csv','with open("sales.csv", newline="", encoding="utf-8") as f:','    for row in csv.DictReader(f):','        print(row["item"])'].join("\n"), lang:"py"},
      "`DictReader` uses the header row as names, so each row is a dictionary.",
      {key:"Every cell arrives as **text**. Convert with `int()` or `float()` before doing arithmetic, or `\"3\" * 2` gives `\"33\"`."},
      "Unlike a spreadsheet app, Python never guesses: codes like `00731` keep their zeros, and nothing turns into a date by accident. That makes a script a safe way to look inside a CSV without changing it. For data that is nested rather than a flat table, such as settings, use the `json` module."
     ],
     builder:[
      "**Reading.** Open with `newline=\"\"` and an explicit encoding. `csv.reader(f)` gives lists; `csv.DictReader(f)` gives dictionaries keyed by the header. `list(csv.DictReader(f))` keeps all rows for counting or several passes.",
      "**Totals and groups.** Loop, convert, accumulate: `total += int(row[\"qty\"]) * float(row[\"price\"])`. For a total per category, `totals[key] = totals.get(key, 0) + amount`. Add an `if` to filter.",
      "**Writing.** `csv.writer(f).writerow([…])` writes one list; `csv.DictWriter(f, fieldnames=[…])` with `writeheader()` and `writerows(dicts)` writes dictionaries. Values with commas or quotes are quoted automatically. Always write to a new file, not the one you’re reading.",
      "**Files from spreadsheets.** Excel’s “CSV UTF-8” adds a byte order mark, which turns the first header into `\\ufeffname`; read with `encoding=\"utf-8-sig\"`. Regional exports may use `;` between cells (`delimiter=\";\"`) and `,` as the decimal mark (`float(s.replace(\",\", \".\"))`).",
      {code:['import csv','with open("sales.csv", newline="", encoding="utf-8") as f:','    rows = list(csv.DictReader(f))','with open("big.csv", "w", newline="",','          encoding="utf-8") as f:','    w = csv.DictWriter(f, fieldnames=rows[0].keys())','    w.writeheader()','    for row in rows:','        if int(row["qty"]) >= 10:','            w.writerow(row)'].join("\n"), lang:"py"},
      "That copies only the rows with a quantity of 10 or more into a new file, keeping the original columns. Note the `int()`: comparing the text `\"9\" >= \"10\"` would compare character by character and give the wrong answer.",
      "**JSON.** `json.dump(obj, f, indent=2)` writes, `json.load(f)` reads; `dumps` and `loads` work with strings. JSON keeps numbers, `true`/`false` and `null` (Python’s `True`, `False`, `None`)."
     ],
     pro:[
      "**Why `newline=\"\"`.** Python’s csv documentation asks for it on every file object used with the module. Without it, line breaks inside quoted fields are misinterpreted when reading, and on systems that write `\\r\\n` an extra `\\r` is added when writing, which shows up as blank rows in some apps. The writer’s default line terminator is `\\r\\n`.",
      "**Dialects and sniffing.** `csv.Sniffer().sniff(sample)` guesses the delimiter and quoting from a sample; use it for unknown files, but check the result. `quoting=csv.QUOTE_NONNUMERIC` makes the reader convert unquoted fields to floats, which is rarely what you want for codes.",
      "**Ragged rows.** `DictReader` puts extra fields under the key given by `restkey` (default `None`) and fills missing ones with `restval`. A row whose fields shift usually means bad quoting in the source.",
      "**Money and floats.** Floats are binary approximations, so sums can come out as `52.499999999`. Round for display with an f-string (`:.2f`), or use `decimal.Decimal` from strings when exact cents matter.",
      "**JSON details.** JSON object keys are always strings: a dictionary with integer keys comes back with string keys. Tuples become lists. `ensure_ascii=False` writes non-ASCII characters as themselves instead of `\\u` escapes. JSON has no date type; store dates as ISO 8601 strings such as `2026-11-05`.",
      "**Scale.** The `csv` module streams rows, so it handles files far bigger than a spreadsheet’s row limit. For heavier analysis, libraries such as pandas read CSVs into tables, but the type-conversion lessons still apply."
     ]},
    related:["csv-files","cell-data-types","tidy-data","py-files"],
    read:[{book:"atbs", where:"Chapter 18, “CSV, JSON, and XML Files”"}],
    sources:[{t:"Python documentation: csv — CSV File Reading and Writing", url:"https://docs.python.org/3/library/csv.html"},{t:"Python documentation: json — JSON encoder and decoder", url:"https://docs.python.org/3/library/json.html"},{t:"Automate the Boring Stuff, 3rd ed., Chapter 18: CSV, JSON, and XML Files", url:"https://automatetheboringstuff.com/3e/chapter18.html"}],
    checked:"2026-11"},
   {id:"renaming-files-safely", title:"Renaming and moving files with Python", aka:["rename","Path.rename","Path.replace","shutil.move","bulk rename","batch rename","organise downloads","glob"], tags:["python","automation","files"],
    summary:"Select files with `glob`, plan new names, check for clashes with `exists()`, print a dry run, then rename; `rename` silently overwrites on macOS and Linux.",
    levels:{
     starter:[
      "Renaming hundreds of files by hand is slow and error-prone; a short script does it in a second. The pattern:",
      {ol:["Pick the files: `sorted(folder.glob(\"IMG_*\"))`.","Work out each new name, such as `beach-001.jpg`.","Check the new name isn’t already taken.","Print what you would do (a dry run).","Only then rename for real."]},
      {warn:"On macOS and Linux, Python’s `rename()` **replaces** a file that already has the new name, without asking. On Windows it stops with an error. Either way, your script should check first."},
      "Practise on copies of your files, keep a backup, and start with a dry run. The same pattern sorts a Downloads folder into subfolders by file type, or adds a date to the front of every scan. Choose the files carefully: a rule such as “names starting with IMG_” also means a second run finds nothing left to do."
     ],
     builder:[
      {code:['photos = sorted(folder.glob("IMG_*"))','for n, old in enumerate(photos, start=1):','    new = old.with_name(f"beach-{n:03}{old.suffix.lower()}")','    if new.exists():','        print("Skip:", new.name)','    elif DRY_RUN:','        print("Would rename", old.name, "->", new.name)','    else:','        old.rename(new)'].join("\n"), lang:"py"},
      "`enumerate(…, start=1)` numbers the files from 1; `{n:03}` pads to `001`, so names sort correctly. `with_name` keeps the new path in the same folder. `suffix.lower()` treats `.JPG` and `.jpg` alike.",
      "**Moving** is renaming into another folder: `item.rename(folder / \"Pictures\" / item.name)`, after `mkdir(exist_ok=True)` on the destination. `shutil.move()` also works across drives, where `rename` may fail.",
      "**Selecting precisely** makes scripts safe to rerun: a renamer that only picks `IMG_*` files finds nothing to do the second time.",
      "**Plan first, act second.** For bigger jobs, build the whole plan as a list of `(old, new)` pairs, check it, and only then loop again to act:",
      {code:['plan = []','photos = sorted(folder.glob("IMG_*"))','for n, old in enumerate(photos, start=1):','    new = old.with_name(f"beach-{n:03}{old.suffix.lower()}")','    plan.append((old, new))','','new_names = [new.name for old, new in plan]','if len(set(new_names)) != len(new_names):','    print("Two files would get the same name. Stopping.")'].join("\n"), lang:"py"},
      "A set keeps only one copy of each name, so if it’s shorter than the list, two files were heading for the same name. If the check passes, print the plan as the dry run, and loop over `plan` once more to rename for real.",
      "**Copying instead.** `shutil.copy2(src, dst)` copies a file with its timestamps; `shutil.copytree(src, dst)` copies a folder. Copy-then-check-then-delete is slower but recoverable."
     ],
     pro:[
      "**Overwrite semantics.** `Path.rename(target)`: on Unix, an existing file target is replaced silently if permissions allow; on Windows, an existing target raises `FileExistsError`. `Path.replace(target)` replaces on every platform. Neither asks. Checking `exists()` first leaves a tiny window in which another process could create the file; for personal scripts that’s acceptable, and `\"x\"` mode or `os.link` tricks exist for stricter needs.",
      "**Collisions you create yourself.** Two inputs can map to the same output: photos renamed by timestamp to the second, or titles that differ only in punctuation removed by your cleaning. Build the full plan first, check that `len(set(new_names)) == len(new_names)`, and refuse to run if not.",
      "**Swaps and cycles.** Renaming `a → b` and `b → a` in sequence destroys data. Rename everything to temporary unique names first, then to final names.",
      "**Case-only renames.** On case-insensitive file systems (Windows, default macOS) `photo.JPG → photo.jpg` can be awkward; renaming via a temporary name is reliable.",
      "**Metadata.** File names often duplicate information in the file (photo EXIF dates). Third-party libraries can read it; standard `os.stat` gives modification times, which copying may or may not preserve (`copy2` tries to).",
      "**Deletion.** `Path.unlink()` and `shutil.rmtree()` bypass the Recycle Bin or Trash. The third-party Send2Trash package sends items there instead.",
      "**Synced folders.** Renaming thousands of files inside a cloud-synced folder (OneDrive, iCloud Drive, Google Drive, Dropbox) triggers thousands of uploads, and a mistake syncs to every device. Work on a local copy, then move the finished result into the synced folder."
     ]},
    related:["py-automation-safety","pathlib-paths","file-naming"],
    read:[{book:"atbs", where:"Chapter 11, “Organizing Files”"}],
    sources:[{t:"Python documentation: pathlib, Path.rename and Path.replace", url:"https://docs.python.org/3/library/pathlib.html"},{t:"Python documentation: shutil — High-level file operations", url:"https://docs.python.org/3/library/shutil.html"},{t:"Automate the Boring Stuff, 3rd ed., Chapter 11: Organizing Files", url:"https://automatetheboringstuff.com/3e/chapter11.html"}],
    checked:"2026-11"},
   {id:"py-automation-safety", title:"Safe automation: dry runs, backups and idempotence", aka:["dry run","idempotent","backup before script","--dry-run","sys.argv","run a python script","python3 script.py"], tags:["python","automation","safety","command line"],
    summary:"Scripts act fast and without judgement: back up, print a dry run first, make the real run opt-in, and design scripts so a second run does no harm.",
    levels:{
     starter:[
      "A script does exactly what its code says, to every file, in a second. That’s why mistakes in automation can be big. Four habits keep you safe:",
      {list:["**Back up** the folder before a real run.","**Dry run first**: print what the script would do, read it, and fix the rule until it’s right.","**Make the real run deliberate**: a switch at the top (`DRY_RUN = True`) or an option you must type (`--go`).","**Check afterwards**, and run it again: a well-made script then does nothing."]},
      "That last idea, “a second run does no harm”, is called being **idempotent**. A script that only renames files starting with `IMG_` has it; one that adds “OLD-” to every name does not.",
      {key:"Rehearse, check, act, check. Never delete in a first version."},
      "Automate the Boring Stuff (Chapter 11) gives the same advice: comment out the line that really copies, moves, renames or deletes, print instead, and run that first."
     ],
     builder:[
      "**Dry-run switch on the command line.** `sys.argv` holds the words typed after `python3`:",
      {code:['import sys','DRY_RUN = "--go" not in sys.argv'].join("\n"), lang:"py"},
      "Forgetting `--go` is then harmless. Print one line per planned action, and a summary (“12 files would move, 3 skipped”).",
      "**Backups.** `shutil.copytree(src, f\"{src}-backup-{date.today()}\")` copies a folder; it refuses to overwrite an existing backup. Keep it until you’ve checked the result.",
      "**Running scripts.** macOS, Linux and ChromeOS Linux: `python3 script.py`. Windows: `python script.py` or `py script.py`, depending on how Python was installed. [[kbd:Ctrl]] + [[kbd:C]] stops a running script. The terminal’s folder becomes the working directory, so relative paths start there.",
      "**Summaries.** End a run with counts: how many files would move, how many were skipped and why. A summary that says “0 skipped” when you expected some is a useful warning.",
      "**Designing for reruns.** Select only items that still need work; skip targets that exist; create folders with `exist_ok=True`; log with mode `\"a\"`, accepting that logs grow.",
      "**Is it worth it?** Automate jobs that are repetitive, follow a clear rule and happen often or at scale. A one-off rename of ten files is quicker by hand; a monthly job on hundreds of files repays an hour of scripting many times over.",
      {tip:"Test on a practice folder of empty files made with `Path(name).touch()` before pointing a script at real data."}
     ],
     pro:[
      "**argparse.** For anything beyond one flag, the standard `argparse` module gives `--dry-run`/`--apply` options, help text and error messages for free. Many professional tools default to a dry run or require an explicit apply flag for destructive changes.",
      "**Logging over printing.** The `logging` module adds timestamps and levels and can write to a file, so you have a record of what a scheduled script did. Automate the Boring Stuff Chapter 5 introduces it.",
      "**Undo plans.** Have the script write a CSV of `old,new` pairs as it works; a second small script can reverse it. This is cheap insurance for renames.",
      "**Idempotence in practice.** True idempotence means the end state is the same whether the script runs once or many times, including after a crash halfway. Selecting by state (not by count), checking before acting, and making each step complete or not-at-all (write to a temp file, then replace) get you most of the way.",
      "**Scheduling.** Once trusted, scripts can run on a schedule (Task Scheduler on Windows, `launchd` or `cron` on macOS and Linux; Automate the Boring Stuff Chapter 19 mentions them briefly). A scheduled script has nobody watching, so it needs logging and safe defaults even more.",
      "**Permissions.** Don’t run personal scripts with administrator or `sudo` rights; a bug can then reach system files."
     ]},
    related:["renaming-files-safely","backup","shell-navigation"],
    read:[{book:"atbs", where:"Chapter 11, “Organizing Files”, and Chapter 12, “Designing and Deploying Command Line Programs”"}],
    sources:[{t:"Automate the Boring Stuff, 3rd ed., Chapter 11 (dry runs before copy, move, rename or delete)", url:"https://automatetheboringstuff.com/3e/chapter11.html"},{t:"Automate the Boring Stuff, 3rd ed., Chapter 12: Designing and Deploying Command Line Programs", url:"https://automatetheboringstuff.com/3e/chapter12.html"},{t:"Python documentation: sys.argv", url:"https://docs.python.org/3/library/sys.html#sys.argv"}],
    checked:"2026-11"},
   {id:"reading-tracebacks", title:"Reading a Python traceback", aka:["traceback","stack trace","most recent call last","error message","exception","frame"], tags:["python","debugging","errors"],
    summary:"A traceback lists the calls that led to an error, oldest first; read the last line for the error, the frame above it for where, and further up for why.",
    levels:{
     starter:[
      "When a Python program hits an error it can’t handle, it stops and prints a **traceback**: a report of what went wrong and where.",
      "Read it from the **bottom up**:",
      {ol:["The **last line** is the error type and message, such as `ZeroDivisionError: division by zero`.","The `File …, line …` just above it is **where** it happened, with the line of code shown.","The lines further up show **how the program got there**: which line called which function."]},
      "The title line says “most recent call last”: the newest step is at the bottom. Above each line of code, Python names the file, the line number and the function it was in, so you can jump straight there in your editor.",
      {tip:"The line where it crashed isn’t always where the mistake is. If a function was given a bad value, walk up the traceback to find where that value came from."}
     ],
     builder:[
      "Each `File \"…\", line N, in name` pair is a **frame**: one function call in progress. `<module>` is the script’s main body. Since Python 3.11, markers such as `~~~^^^` under the code point at the exact expression that failed.",
      {table:[
        ["Exception","Usual meaning"],
        ["`NameError`","A name doesn’t exist: typo, or used before it was assigned"],
        ["`TypeError`","An operation got the wrong type: `\"3\" * \"2\"`, `1 + \"a\"`"],
        ["`ValueError`","Right type, wrong value: `int(\"\")`, `int(\"4.50\")`"],
        ["`IndexError` / `KeyError`","A list position or dictionary key that isn’t there"],
        ["`FileNotFoundError`","No file at that path, often a working-directory issue"],
        ["`ZeroDivisionError`","Division by zero, often an empty list’s length"]
      ]},
      "**Library frames.** When a traceback passes through modules you didn’t write (paths containing `lib` or `site-packages`), find the lowest frame in your own code: that’s where your code handed over something unexpected.",
      "**Crash site versus cause.** The failing line is often innocent: `sum(numbers) / len(numbers)` is correct, but not for an empty list passed in from three calls away. Ask “where did this value come from?” and walk up the frames.",
      "**Syntax errors** are different: Python can’t start, so there’s no chain of calls, just the file, the line, a caret and a message such as `expected ':'`. Look at that line and the one before it: an unclosed bracket or quote on the line above is a common cause."
     ],
     pro:[
      "**Chained exceptions.** “During handling of the above exception, another exception occurred” means an error happened inside an `except` block; “The above exception was the direct cause of the following exception” means code used `raise … from …` deliberately. Read both parts: the first is usually the root cause.",
      "**Exception groups** (Python 3.11+) appear with `+-+` boxes when several errors are raised together, for example by concurrent tasks.",
      "**Notes and hints.** Recent versions add suggestions such as “Did you mean: 'total'?” to NameError and AttributeError messages, and `add_note()` lets code attach extra context.",
      "**Printing tracebacks yourself.** `traceback.print_exc()` inside an `except` block prints the current traceback without stopping the program; `logging.exception()` writes it to a log.",
      "**Long recursion.** `RecursionError: maximum recursion depth exceeded` comes with a traceback in which the same frame repeats; Python collapses repeats into a line such as “[Previous line repeated 996 more times]”.",
      "**Handled errors.** `try`/`except` blocks catch exceptions so a program can carry on; a bare `except:` that hides every error makes bugs much harder to find, because the traceback never appears. Catch the specific exception you expect, such as `FileNotFoundError`.",
      "**Version differences.** Wording of messages changes between versions, so search for the stable part (the exception type and the main phrase), and compare with your own version’s output."
     ]},
    related:["debugging-strategies","py-errors-tracebacks","asking-for-help"],
    read:[{book:"thinkpy", where:"The “Debugging” sections at the end of chapters 1–6"}],
    sources:[{t:"Python tutorial: Errors and Exceptions", url:"https://docs.python.org/3/tutorial/errors.html"},{t:"Python documentation: Built-in Exceptions", url:"https://docs.python.org/3/library/exceptions.html"}],
    checked:"2026-11"},
   {id:"debugging-strategies", title:"Debugging strategies", aka:["debugging","print debugging","rubber duck","binary search debugging","assert","debugger","breakpoint()","pdb","off-by-one","edge cases"], tags:["python","debugging"],
    summary:"Reproduce the bug, read the error, look inside with print or a debugger, narrow it down by halves, check assumptions with assert, and test the edges.",
    levels:{
     starter:[
      "Debugging is finding the difference between what your code **says** and what you **meant**. A calm routine beats guessing:",
      {ol:["Make the bug happen again on purpose, with the smallest input.","Read the whole error message.","Print the values you’re unsure about.","Explain the code line by line, even to a rubber duck.","Fix one thing, then test again: the failing case, the normal cases and the edge cases."]},
      "Bugs hide at the **edges**: empty lists, blank lines, zero, the first and last items. Off-by-one errors, a loop that runs once too often or too rarely, are the classic example.",
      {key:"The computer is doing exactly what the code says. Your job is to find where that differs from what you meant."},
      "When you’re going round in circles, undo back to the last version that worked, or take a break."
     ],
     builder:[
      "**Print debugging.** `print(f\"{total=}\")` shows a name and its value; `repr(x)` reveals spaces and `\\n`. Print what goes into a function and what comes out (Think Python 6.10).",
      "**Narrow it down by halves.** Check the data halfway through. Fine there? The bug is later. Each check halves the suspects: 64 steps need at most 6 checks. Commenting out half the suspect code works the same way, and `git bisect` does it across saved versions.",
      "**Assertions.** `assert len(scores) > 0, \"no scores\"` stops with your message when an assumption breaks. A few `assert` lines comparing a function’s output with known answers make simple tests. Assertions are skipped under `python -O`, so don’t use them to validate user input.",
      "**Debuggers.** Set a breakpoint, run in debug mode, step over or into lines and watch the variables: Thonny (**Run → Debug current script (nicer)**, [[kbd:Ctrl]] + [[kbd:F5]]), VS Code (**Run → Start Debugging**, [[kbd:F5]]), or `breakpoint()` in a terminal, which opens Python’s `pdb` (`p name`, `n`, `s`, `c`, `l`, `q`).",
      "**Rubber duck.** Explaining the code line by line, out loud, makes you notice what each line really does rather than what you meant. A friend, a pet or a written note works just as well.",
      "**The six R’s** (Think Python 12.10): reading, running, ruminating, rubberducking, retreating (undo back to working code) and resting."
     ],
     pro:[
      "**Logging.** For programs that run unattended, the `logging` module records events with levels (DEBUG, INFO, WARNING, ERROR) and timestamps; you can turn detail up or down without editing code. Missing Semester suggests logging “instead of ad hoc print statements”, and turning useful debugging prints into log statements before removing them.",
      "**Post-mortem debugging.** `python3 -m pdb script.py` runs a script under the debugger and, if it crashes, leaves you inside the failing frame to inspect variables; `pdb.pm()` does the same after a crash in the interactive prompt.",
      "**Conditional breakpoints.** VS Code and pdb (`break 12, total > 100`) can pause only when a condition is true, which saves stepping through thousands of loop rounds.",
      "**`PYTHONBREAKPOINT`.** Setting the environment variable `PYTHONBREAKPOINT=0` disables every `breakpoint()` call, so a forgotten one can’t hang a script; it can also point to another debugger.",
      "**Heisenbugs.** Some bugs change or vanish when observed: timing issues, or prints that change buffering. Record inputs and logs instead of relying on interactive inspection.",
      "**Changing one thing at a time.** Several simultaneous edits make it impossible to know which one mattered, and often introduce new bugs. Version control lets you diff what changed since the code last worked.",
      "**Regression tests.** Once fixed, add a test that reproduces the bug, so it can’t silently return. That’s the bridge to testing frameworks such as pytest (Unit 10)."
     ]},
    related:["reading-tracebacks","asking-for-help","testing-basics","git-basics"],
    read:[{book:"atbs", where:"Chapter 5, “Debugging”"},{book:"missing", where:"“Debugging and Profiling”"},{book:"thinkpy", where:"12.10 “Debugging”"}],
    sources:[{t:"MIT Missing Semester (2026): Debugging and Profiling", url:"https://missing.csail.mit.edu/2026/debugging-profiling/"},{t:"Python documentation: pdb — The Python Debugger", url:"https://docs.python.org/3/library/pdb.html"},{t:"Think Python, 3rd ed., Chapter 12 (12.10 Debugging)", url:"https://allendowney.github.io/ThinkPython/chap12.html"}],
    checked:"2026-11"},
   {id:"asking-for-help", title:"Getting help: search, documentation, good questions and AI", aka:["minimal reproducible example","MRE","Stack Overflow","how to ask","docs.python.org","help()","AI debugging","search error message"], tags:["python","debugging","help","ai"],
    summary:"Search the shared part of an error, read the official docs, shrink the problem to a minimal example, ask with expected-vs-got, and use AI to explain while verifying everything and sharing no secrets.",
    levels:{
     starter:[
      "Everyone gets stuck. Work up a ladder: read the error, reproduce it, **search** it, **read the documentation**, make a **minimal example**, then **ask** a person or an AI.",
      "**Searching:** use the error type and message plus `python` and the module name. Leave out your own file names and variable names.",
      "**Asking:** say what you’re trying to do, paste the code and the full error as text, and say what you expected and what you got.",
      {warn:"Never paste passwords, keys or other people’s personal data into a forum or an AI tool. Replace them with made-up values."},
      "And when you’re going round in circles, take a break. Resting is a recognised debugging step, and so is undoing your recent changes back to a version that worked."
     ],
     builder:[
      "**Judging answers.** Check the problem really matches, check the date and Python version (Python 2 code has `print \"x\"` without brackets), and understand code before running it.",
      "**Documentation.** docs.python.org has the Tutorial, the Standard Library reference and a Glossary; set the version menu to yours. Read a function’s signature (parameters with `=` have defaults), its description and any “Changed in version” notes. In the `>>>` prompt, `help(name)` shows the same reference text and `dir(obj)` lists what an object offers.",
      "**Minimal reproducible example.** The smallest complete code that still shows the problem, runnable by anyone: replace files with a short list of lines, remove unrelated code, and keep checking the problem remains. Building one often reveals the cause.",
      "**A good question** has five parts: the goal in one sentence, code as text that runs, expected versus actual result with the full traceback, what you’ve tried, and your Python version and operating system. Remove secrets and personal data first. Automate the Boring Stuff’s introduction adds: explain what you’re trying to do, not just what you did.",
      "**AI assistants.** Predict the cause first, ask for an explanation or a hint, verify by running and reading, and check suggested functions in the docs and packages on pypi.org. Missing Semester notes that language models can “hallucinate plausible-sounding but wrong explanations”."
     ],
     pro:[
      "**Search operators.** Quotes force an exact phrase; a minus sign excludes a word; `site:docs.python.org` limits results to one site. Searching an issue tracker (for example a library’s GitHub issues) finds bugs in the library itself, often with workarounds.",
      "**Version archaeology.** “Changed in version” and “Deprecated since version” notes explain answers that worked once. The “What’s New in Python” pages list behaviour changes per release, such as UTF-8 becoming the default encoding in 3.15.",
      "**Question etiquette.** Forums expect you to show prior effort, use a descriptive title, format code as code, and follow up with the solution if you find it yourself. Respect that answers come from volunteers.",
      "**AI and confidentiality.** Consumer AI services may retain prompts and use them to improve models depending on settings and plan; organisations often restrict which tools may see their code. Secrets pasted anywhere should be treated as exposed: revoke and replace them.",
      "**Supply-chain risk.** Package names suggested by AI can be invented; attackers register such names (sometimes called slopsquatting). Verify the publisher, project page, download history and source repository before `pip install`.",
      "**Keeping your skills.** Using AI to explain, not to replace your reasoning, matters most while learning: write the prompt, predict the answer, then check. Think Python makes the point that composing a good prompt is itself like rubber duck debugging."
     ]},
    related:["debugging-strategies","reading-tracebacks","ai-coding-tools","ai-chatbot-accuracy"],
    read:[{book:"atbs", where:"Introduction: “How to Find Help” and “Asking Smart Programming Questions”"},{book:"missing", where:"“Debugging and Profiling”: “AI for Debugging”"}],
    sources:[{t:"MIT Missing Semester (2026): Debugging and Profiling, AI for Debugging", url:"https://missing.csail.mit.edu/2026/debugging-profiling/"},{t:"Automate the Boring Stuff, 3rd ed., Introduction (How to Find Help; Asking Smart Programming Questions)", url:"https://automatetheboringstuff.com/3e/chapter0.html"},{t:"Python documentation (all versions)", url:"https://docs.python.org/3/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"file-path-py", term:"Path (in Python)", def:"The address of a file or folder that a program uses to find it, such as notes/shopping.txt. In Python, usually written as a pathlib Path object.", codex:"pathlib-paths"},
   {id:"absolute-path", term:"Absolute path", def:"A path that starts at the top of the drive, such as C:\\Users\\Ana\\notes.txt or /Users/ana/notes.txt, so it works from any folder.", codex:"pathlib-paths"},
   {id:"pathlib", term:"pathlib", def:"Python’s built-in module for working with file paths as objects: joining them with /, taking them apart, and checking what’s on the disk.", codex:"pathlib-paths"},
   {id:"open-file", term:"open()", def:"Python’s built-in function that opens a file and gives back a file object for reading or writing. Takes a path, a mode and an encoding.", codex:"py-files"},
   {id:"file-mode", term:"File mode", def:"The second argument to open(): \"r\" reads, \"w\" empties the file and writes, \"a\" adds to the end, \"x\" creates a new file only.", codex:"py-files"},
   {id:"text-encoding", term:"Encoding (text)", def:"The rule for turning characters into bytes and back. A file must be read with the encoding it was written in; UTF-8 is the usual choice.", codex:"py-files"},
   {id:"with-statement", term:"with statement", def:"Python’s `with … as …:` block, which sets something up and reliably cleans up afterwards; with open() it closes the file, even after an error.", codex:"py-files"},
   {id:"csv-module", term:"csv module", def:"Python’s built-in module for reading and writing CSV files correctly, including values that contain commas or quotes. It gives every cell as a string.", codex:"csv-python"},
   {id:"json", term:"JSON", def:"JavaScript Object Notation: a text format for nested data made of objects (like dictionaries), lists, strings, numbers, true, false and null.", codex:"csv-python"},
   {id:"script", term:"Script", def:"A program saved in a file, such as tidy.py, that runs from start to finish to do a job, usually started from an editor or the command line.", codex:"py-automation-safety"},
   {id:"py-automation", term:"Automation", def:"Handing a repetitive, rule-based job, such as renaming many files, to a program that does it the same way every time.", codex:"py-automation-safety"},
   {id:"dry-run", term:"Dry run", def:"Running a script so that it only prints what it would do, without changing anything, so you can check the plan first.", codex:"py-automation-safety"},
   {id:"idempotent", term:"Idempotent", def:"Safe to run more than once: running it twice leaves things exactly as running it once did.", codex:"py-automation-safety"},
   {id:"debugger", term:"Debugger", def:"A tool that pauses a running program so you can see variables’ values and run it one line at a time. Thonny, VS Code and Python’s pdb include one.", codex:"debugging-strategies"},
   {id:"debug-breakpoint", term:"Breakpoint", def:"A marked line where a debugger pauses the program before running it. Set by clicking a line number or the margin beside it in an editor, or with breakpoint() in Python.", codex:"debugging-strategies"},
   {id:"print-debugging", term:"Print debugging", def:"Finding a bug by adding temporary print() calls that show values as the program runs, such as print(f\"{total=}\").", codex:"debugging-strategies"},
   {id:"rubber-duck", term:"Rubber duck debugging", def:"Explaining your code line by line out loud, even to an object such as a toy duck. Saying what each line does often reveals the bug.", codex:"debugging-strategies"},
   {id:"off-by-one", term:"Off-by-one error", def:"A bug where a loop or index is one too many or one too few, such as skipping a list’s first item or reading one past its end.", codex:"debugging-strategies"},
   {id:"edge-case", term:"Edge case", def:"An input at the limits of what a program expects, such as an empty list, a blank line, zero or a single item. Many bugs hide there.", codex:"debugging-strategies"},
   {id:"minimal-example", term:"Minimal reproducible example", def:"The smallest complete piece of code that still shows a problem and that anyone can run to see it. Making one often reveals the cause.", codex:"asking-for-help"},
   {id:"stack-overflow", term:"Stack Overflow", def:"A large public question-and-answer website for programming. Useful for searching errors; check each answer’s date, version and fit before using it.", codex:"asking-for-help"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u9-q01", lesson:"t2u9-l1", level:1, q:"What does mode `\"w\"` do when you open a file that already exists?", options:[
     {t:"Empties it straight away, then lets you write", ok:true, why:"Write mode starts from scratch. Everything that was in the file is gone the moment it opens."},
     {t:"Adds your writing to the end", why:"That’s append mode, `\"a\"`."},
     {t:"Refuses with FileExistsError", why:"That’s `\"x\"`, the create-only mode."},
     {t:"Opens it read-only", why:"Reading is `\"r\"`, the default. `\"w\"` is for writing."}
   ]},
   {id:"t2u9-q02", lesson:"t2u9-l1", level:3, q:"Ana’s script reads `data/members.txt` and works when run from her editor, but `FileNotFoundError` appears when a colleague runs it from a different folder. What’s the most likely cause?", options:[
     {t:"The relative path is looked up from the working directory, which differs between the two ways of running it", ok:true, why:"Relative paths start from where the program is running. Printing `Path(\"data/members.txt\").resolve()` shows where Python is looking; building the path from `Path(__file__).parent` makes it independent of the working directory."},
     {t:"The colleague’s computer can’t read .txt files", why:"Every computer can read text files. The error says Python looked in a place with no such file."},
     {t:"The file needs `encoding=\"utf-8\"` to be found", why:"Encoding affects how the contents are decoded, not whether the file is found."},
     {t:"The file is open in Ana’s editor, which hides it", why:"Having a file open elsewhere doesn’t make it disappear. The path is the issue."}
   ]},
   {id:"t2u9-q03", lesson:"t2u9-l1", level:2, q:"`p = Path(\"photos\") / \"2026\" / \"cat.JPG\"`. What is `p.suffix.lower()`?", options:[
     {t:"`.jpg`", ok:true, why:"`.suffix` is `.JPG`, with its dot, and `.lower()` makes it lower case."},
     {t:"`jpg`", why:"`.suffix` includes the dot."},
     {t:"`cat`", why:"That’s `.stem`."},
     {t:"`photos/2026`", why:"That’s `.parent`."}
   ]},
   {id:"t2u9-q04", lesson:"t2u9-l1", level:2, q:"Why does `print(\"C:\\new\\table.txt\")` print something strange?", options:[
     {t:"`\\n` and `\\t` inside an ordinary string mean a new line and a tab", ok:true, why:"Backslashes start escape sequences. Use forward slashes, a raw string `r\"…\"`, or `Path`."},
     {t:"Windows paths can’t be printed", why:"They can, as long as the backslashes aren’t read as escapes."},
     {t:"The file doesn’t exist", why:"`print` only shows the string; it doesn’t look for any file."},
     {t:"Python only understands Mac paths", why:"Python works on Windows; the issue is how backslashes behave inside string quotes."}
   ]},
   {id:"t2u9-q05", lesson:"t2u9-l1", level:3, q:"Kenji reads a file of recipe titles with `encoding=\"utf-8\"`, and `crème` comes out as `crÃ¨me`. What happened, most likely?", options:[
     {t:"Earlier, someone opened the UTF-8 text with a different encoding and saved it again, so the garbled letters are now in the file itself", ok:true, why:"`Ã¨` is what the two UTF-8 bytes for `è` look like when decoded as an older encoding such as cp1252. Kenji read with UTF-8, so that mix-up must have happened before, and been saved. Reading and writing with the same encoding, UTF-8, avoids it."},
     {t:"Python can’t store accented letters", why:"Python strings hold every character. The problem is a mismatch between how the bytes were written and read."},
     {t:"He should have used mode `\"a\"`", why:"The mode decides what happens to existing content, not how characters are decoded."},
     {t:"The file is too long", why:"Length has nothing to do with garbled characters."}
   ]},
   {id:"t2u9-q06", lesson:"t2u9-l1", level:1, q:"What does the `with` in `with open(…) as f:` guarantee?", options:[
     {t:"The file is closed when the block ends, even if an error happens inside it", ok:true, why:"That’s the job of a with statement: reliable clean-up."},
     {t:"The file will never be overwritten", why:"Overwriting depends on the mode; `\"w\"` still empties the file."},
     {t:"The file is saved in UTF-8", why:"Only `encoding=\"utf-8\"` does that."},
     {t:"The file exists before opening", why:"Opening a missing file for reading still raises FileNotFoundError inside a with."}
   ]},
   {id:"t2u9-q07", lesson:"t2u9-l1", level:2, q:"A file has the three lines `rice`, `lentils`, `tea`. In `for line in f:`, why is `line == \"rice\"` false on the first line?", options:[
     {t:"The line is `\"rice\\n\"`: it still ends with its line break; use `line.strip()`", ok:true, why:"Lines read from a file keep their `\\n`. `repr(line)` shows it; `.strip()` removes it."},
     {t:"Python reads the lines in reverse order", why:"Lines come in order from the top."},
     {t:"Comparisons don’t work on text from files", why:"They work fine once the hidden newline is removed."},
     {t:"The first line is always the header", why:"Text files have no special header line; that’s a CSV idea, and even then the line is still read."}
   ]},
   {id:"t2u9-q08", lesson:"t2u9-l1", level:3, q:"Priya’s script makes a monthly report and must **never** replace an existing report by accident. Which mode fits best?", options:[
     {t:"`\"x\"`, which raises FileExistsError if the file is already there", ok:true, why:"Create-only mode turns an accidental overwrite into a loud error instead of silent data loss."},
     {t:"`\"w\"`", why:"`\"w\"` replaces existing files silently: exactly what she wants to avoid."},
     {t:"`\"a\"`", why:"Append would add this month’s report onto the end of last month’s, mixing them."},
     {t:"`\"r\"`", why:"Read mode can’t write at all."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u9-q09", lesson:"t2u9-l2", level:1, q:"What type is `row[\"qty\"]` when a CSV is read with `csv.DictReader`, if the cell contains 12?", options:[
     {t:"A string, `\"12\"`", ok:true, why:"The csv module gives every cell as text. Convert with `int()` before doing arithmetic."},
     {t:"An integer, `12`", why:"The module never guesses types; you convert yourself."},
     {t:"A float, `12.0`", why:"No conversion happens automatically."},
     {t:"A list, `[\"12\"]`", why:"A whole row is a dictionary; each value is a single string."}
   ]},
   {id:"t2u9-q10", lesson:"t2u9-l2", level:3, q:"Mei totals a CSV with `total += row[\"amount\"]` and gets `TypeError: unsupported operand type(s) for +=: 'int' and 'str'`. What’s the fix?", options:[
     {t:"Convert first: `total += float(row[\"amount\"])`", ok:true, why:"`total` is a number and `row[\"amount\"]` is text; Python won’t add them. `float()` turns \"4.50\" into 4.5."},
     {t:"Start with `total = \"0\"`", why:"Then `+=` would join text, giving something like \"04.501.25\", not a sum."},
     {t:"Use `csv.reader` instead of `DictReader`", why:"Both give strings; the conversion is still needed."},
     {t:"Open the file with `\"a\"` mode", why:"Mode doesn’t change cell types, and `\"a\"` is for writing."}
   ]},
   {id:"t2u9-q11", lesson:"t2u9-l2", level:2, q:"Why open a CSV with `newline=\"\"`?", options:[
     {t:"So the csv module handles line endings itself; otherwise quoted line breaks can be misread and Windows output gets blank rows", ok:true, why:"Python’s csv documentation recommends it for every file used with the module."},
     {t:"It adds a blank line between rows", why:"It prevents extra blank rows; it doesn’t add them."},
     {t:"It removes the header row", why:"Headers are handled by `DictReader`, not by `newline`."},
     {t:"It sets the encoding to UTF-8", why:"Encoding is a separate argument."}
   ]},
   {id:"t2u9-q12", lesson:"t2u9-l2", level:2, q:"Which code counts the total `qty` per `item` in a CSV?", options:[
     {t:"`counts[name] = counts.get(name, 0) + int(row[\"qty\"])` inside the loop", ok:true, why:"`.get(name, 0)` starts each new item at 0, then adds this row’s quantity."},
     {t:"`counts[name] = int(row[\"qty\"])` inside the loop", why:"That replaces the value each time, so you get only the last row’s quantity per item."},
     {t:"`counts = counts + row[\"qty\"]`", why:"You can’t add a string to a dictionary, and this doesn’t group by item."},
     {t:"`counts[name] += row[\"qty\"]`", why:"It fails on the first row of each item (no key yet) and adds text instead of numbers."}
   ]},
   {id:"t2u9-q13", lesson:"t2u9-l2", level:3, q:"Tomás double-clicked a members CSV, Excel opened it, and he saved it. Now member codes like `00731` read as `731`. What would have avoided this?", options:[
     {t:"Reading and changing the file with Python (or importing with the code column set to Text), and never re-saving the original from the spreadsheet", ok:true, why:"Spreadsheet apps guess types when they open a CSV and drop leading zeros. Python’s csv module keeps `\"00731\"` exactly."},
     {t:"Saving it as CSV twice", why:"Each save keeps whatever the app already changed; the zeros don’t come back."},
     {t:"Renaming the file to .txt after saving", why:"The zeros were already lost when the app treated the codes as numbers."},
     {t:"Using `int()` on the codes in Python", why:"`int(\"00731\")` is 731, which drops the zeros too. Codes should stay as text."}
   ]},
   {id:"t2u9-q14", lesson:"t2u9-l2", level:2, q:"A CSV from Excel gives `KeyError: 'name'`, and printing a row shows `'\\ufeffname'`. What should the script change?", options:[
     {t:"Open with `encoding=\"utf-8-sig\"`", ok:true, why:"That encoding strips the byte order mark at the start of the file, so the first key becomes `'name'`."},
     {t:"Use `row[\"Name\"]`", why:"The key has an invisible character in front, not a capital letter."},
     {t:"Add `delimiter=\";\"`", why:"The separator is fine; only the first header is affected."},
     {t:"Use `split(\",\")` instead of the csv module", why:"That loses proper quoting and still leaves the marker attached."}
   ]},
   {id:"t2u9-q15", lesson:"t2u9-l2", level:1, q:"Which data fits JSON better than CSV?", options:[
     {t:"An event with a title, a seat count and a list of teams", ok:true, why:"A list inside a dictionary is nested data, which JSON represents directly."},
     {t:"A list of 500 sales with the same four columns", why:"A flat table like that is exactly what CSV is for."},
     {t:"A bank statement to open in a spreadsheet", why:"Spreadsheets open CSV directly."},
     {t:"A register of students with one row each", why:"Fixed columns per record: a table, so CSV."}
   ]},
   {id:"t2u9-q16", lesson:"t2u9-l2", level:3, q:"Amara’s script reads `orders.csv`, filters it, and writes the result with `open(\"orders.csv\", \"w\", newline=\"\", encoding=\"utf-8\")`. Why is that risky?", options:[
     {t:"It overwrites the input; if the filter has a bug, the original data is lost", ok:true, why:"Write to a new file name, check it, and keep the original."},
     {t:"CSV files can’t be written by Python", why:"`csv.writer` writes them fine."},
     {t:"`newline=\"\"` will delete the header", why:"It only controls line endings."},
     {t:"The file will be saved as JSON", why:"The format depends on what you write, here CSV."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u9-q17", lesson:"t2u9-l3", level:1, q:"What is a dry run?", options:[
     {t:"Running a script so it only prints what it would do, without changing anything", ok:true, why:"You read the plan and fix the rule before letting the script act."},
     {t:"Running a script on an empty folder", why:"That might test it, but a dry run means printing the planned actions on the real files without acting."},
     {t:"Running a script once and deleting it", why:"That’s unrelated to checking the plan."},
     {t:"A script that only works without internet", why:"Network access has nothing to do with it."}
   ]},
   {id:"t2u9-q18", lesson:"t2u9-l3", level:3, q:"Fatima’s script renames scans to `<date>.pdf`. On her Mac, two scans from the same day both map to `2026-05-02.pdf`, and the script uses `old.rename(new)` with no checks. What happens?", options:[
     {t:"The second rename silently replaces the first scan", ok:true, why:"On macOS and Linux `rename` overwrites an existing target without warning. A dry run would have shown the duplicate name; an `exists()` check would have skipped it."},
     {t:"Python stops with FileExistsError", why:"That’s the Windows behaviour."},
     {t:"macOS renames the second file to `2026-05-02 (1).pdf`", why:"Finder may do that for drag-and-drop, but Python’s `rename` doesn’t."},
     {t:"Both files share the name", why:"A folder can’t contain two files with the same name."}
   ]},
   {id:"t2u9-q19", lesson:"t2u9-l3", level:1, q:"What does “idempotent” mean for a script?", options:[
     {t:"Running it twice leaves things the same as running it once", ok:true, why:"A second run does no harm, which protects you from accidental reruns."},
     {t:"It runs twice as fast the second time", why:"Speed isn’t the point; the result is."},
     {t:"It can only be run once", why:"The opposite: it can be run many times safely."},
     {t:"It has no bugs", why:"Idempotence is one specific property, not freedom from all bugs."}
   ]},
   {id:"t2u9-q20", lesson:"t2u9-l3", level:2, q:"What does `\"--go\" not in sys.argv` give when you run `python3 tidy.py` with nothing after it?", options:[
     {t:"`True`, so the script stays in dry-run mode", ok:true, why:"`sys.argv` is just `[\"tidy.py\"]`, which doesn’t contain \"--go\". Forgetting the option is therefore safe."},
     {t:"`False`, so the script moves files", why:"That would need `--go` on the command line."},
     {t:"An error, because no option was given", why:"An empty option list is fine; the check simply finds no `--go`."},
     {t:"`None`", why:"`not in` always gives `True` or `False`."}
   ]},
   {id:"t2u9-q21", lesson:"t2u9-l3", level:3, q:"Dmitri’s first script adds “2026-” to the start of every file name in a folder. He accidentally runs it twice. What fix makes it safe to rerun?", options:[
     {t:"Skip files whose names already start with “2026-”", ok:true, why:"Selecting only files that still need the change makes the script idempotent: the second run finds nothing to do."},
     {t:"Run it with `--go`", why:"That only switches off the dry run; it doesn’t stop the double prefix."},
     {t:"Use `rename` instead of `replace`", why:"Both rename; neither stops `2026-2026-` names."},
     {t:"Sort the files first", why:"Order doesn’t matter here; every file still gets a second prefix."}
   ]},
   {id:"t2u9-q22", lesson:"t2u9-l3", level:2, q:"Why does the renamer use `sorted(folder.glob(\"IMG_*\"))` instead of just `folder.glob(\"IMG_*\")`?", options:[
     {t:"Folder listings come in no guaranteed order; sorting makes the numbering follow the names every time", ok:true, why:"Without sorting, `IMG_0413` might become `beach-001` on one computer and `beach-002` on another."},
     {t:"`glob` only works inside `sorted`", why:"`glob` works alone; sorting is about predictable order."},
     {t:"Sorting removes non-photo files", why:"Sorting changes order only; the `IMG_*` pattern does the selecting."},
     {t:"It makes the script run faster", why:"Sorting adds a little work; it’s there for correctness."}
   ]},
   {id:"t2u9-q23", lesson:"t2u9-l3", level:2, q:"On Windows, which command usually runs a script called `tidy.py` in the current folder?", options:[
     {t:"`python tidy.py` or `py tidy.py`", ok:true, why:"Depending on how Python was installed, `python` or the `py` launcher starts it. On macOS and Linux it’s `python3 tidy.py`."},
     {t:"`run tidy.py`", why:"There’s no `run` command for Python scripts."},
     {t:"`tidy.py --python`", why:"Options go after the script name, and they’re read by your script, not by Windows."},
     {t:"Typing `tidy.py` at the `>>>` prompt", why:"`>>>` is Python’s interactive prompt; commands to run scripts go in the terminal."}
   ]},
   {id:"t2u9-q24", lesson:"t2u9-l3", level:3, q:"Hana’s first version of a cleanup script uses `Path.unlink()` to delete duplicate photos. What safer first version does this lesson recommend?", options:[
     {t:"Move the suspected duplicates into a to-delete folder, check it, and delete them yourself", ok:true, why:"`unlink` skips the Recycle Bin or Trash, so mistakes can’t be undone. Moving first keeps everything recoverable."},
     {t:"Run `unlink` twice to be sure", why:"Deleting twice doesn’t make it safer; the files are already gone after the first time."},
     {t:"Use `\"w\"` mode on each duplicate", why:"That would empty the files rather than remove them, and is no safer."},
     {t:"Run it with administrator rights", why:"Extra rights only increase the damage a bug can do."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u9-q25", lesson:"t2u9-l4", level:1, q:"In which order should you read a Python traceback?", options:[
     {t:"From the bottom up: the error line, then the frame that failed, then the calls that led there", ok:true, why:"“Most recent call last” means the newest step is at the bottom."},
     {t:"Top to bottom, stopping at the first file name", why:"The top frame is the oldest call, often far from where it failed."},
     {t:"Only the middle frame", why:"Every part has a job; the bottom line is the most important."},
     {t:"Skip it and read the code instead", why:"The traceback tells you exactly where to look; skipping it wastes time."}
   ]},
   {id:"t2u9-q26", lesson:"t2u9-l4", level:3, q:"A traceback ends with `ZeroDivisionError` in `average()`, called from `report()` with an empty list that came from reading a blank CSV. Where is the best fix?", options:[
     {t:"Where the empty list is handled: check for no scores before calling `average`, or have `average` handle empty input clearly", ok:true, why:"The crash site is innocent: dividing by the length is fine for real data. The fix belongs where the empty case should be decided."},
     {t:"Delete the division", why:"Then `average` stops computing an average at all."},
     {t:"Wrap the whole script so errors are ignored", why:"Hiding errors leaves wrong or missing results nobody notices."},
     {t:"Reinstall Python", why:"Python is working correctly; the input was empty."}
   ]},
   {id:"t2u9-q27", lesson:"t2u9-l4", level:2, q:"What does `print(f\"{total=}\")` print when `total` is 7.25?", options:[
     {t:"`total=7.25`", ok:true, why:"The `=` inside the braces prints the expression’s text and its value, handy for print debugging."},
     {t:"`7.25`", why:"That’s `{total}` without the `=`."},
     {t:"`{total=}`", why:"With the `f` prefix the braces are filled in."},
     {t:"`True`", why:"It isn’t a comparison; `=` here is a debugging shortcut."}
   ]},
   {id:"t2u9-q28", lesson:"t2u9-l4", level:2, q:"`guests = [\"Amara\", \"Kenji\", \"Lucía\"]`. Which loop prints all three names?", options:[
     {t:"`for i in range(len(guests)): print(guests[i])`", ok:true, why:"`range(3)` gives 0, 1 and 2: every valid position. (`for name in guests:` is simpler still.)"},
     {t:"`for i in range(1, len(guests)): print(guests[i])`", why:"Starting at 1 skips Amara at position 0."},
     {t:"`for i in range(len(guests) + 1): print(guests[i])`", why:"The last round asks for `guests[3]`: IndexError."},
     {t:"`for i in range(1, len(guests) + 1): print(guests[i])`", why:"Skips Amara and then goes one past the end."}
   ]},
   {id:"t2u9-q29", lesson:"t2u9-l4", level:3, q:"Sione’s script prints 0 as the total for a 500-row CSV. He prints the data after step 3 of 6: it’s correct there. What does he know now?", options:[
     {t:"The bug is in steps 4 to 6; check halfway through those next", ok:true, why:"Each check halves the suspects. Correct after step 3 clears steps 1 to 3."},
     {t:"The bug is in steps 1 to 3", why:"Those produced correct data, so they’re cleared."},
     {t:"There is no bug", why:"The final total is wrong, so something after step 3 is wrong."},
     {t:"He must check every line from the top", why:"Halving is quicker: check after step 5 or so next."}
   ]},
   {id:"t2u9-q30", lesson:"t2u9-l4", level:1, q:"What happens when an `assert` condition is false?", options:[
     {t:"The program stops with an AssertionError and the message you gave", ok:true, why:"An assert states an assumption and stops loudly when it’s broken."},
     {t:"Python fixes the value", why:"`assert` only checks; it never changes anything."},
     {t:"Nothing; asserts only print warnings", why:"A failed assert raises an error that stops the program (unless caught)."},
     {t:"The line is skipped and the program continues", why:"That happens only when Python runs with `-O`, which switches asserts off entirely."}
   ]},
   {id:"t2u9-q31", lesson:"t2u9-l4", level:3, q:"Oluwaseun puts `breakpoint()` inside a loop and runs the script in a terminal. A `(Pdb)` prompt appears. He wants to see the value of `total`, then run one more line. What does he type?", options:[
     {t:"`p total`, then `n`", ok:true, why:"`p` prints an expression; `n` runs the next line and pauses again."},
     {t:"`print total`, then `next line`", why:"Pdb uses short commands: `p` and `n`."},
     {t:"`q`, then `c`", why:"`q` quits the program, so there’d be nothing to continue."},
     {t:"`help(total)`", why:"That shows documentation about the value’s type, not its value."}
   ]},
   {id:"t2u9-q32", lesson:"t2u9-l4", level:2, q:"Which is an edge case worth testing for a function that averages the numbers in a CSV column?", options:[
     {t:"A file with only the header row, so there are no numbers", ok:true, why:"Empty input leads to division by zero. Edges such as empty, one item and blank lines are where bugs hide."},
     {t:"A file with ten ordinary numbers", why:"That’s a normal case; test it too, but it isn’t an edge."},
     {t:"Running it on a faster computer", why:"Speed doesn’t change the logic."},
     {t:"Renaming the script", why:"The script’s name doesn’t affect how it handles data."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u9-q33", lesson:"t2u9-l5", level:1, q:"What is a minimal reproducible example?", options:[
     {t:"The smallest complete code that still shows the problem, which anyone can run", ok:true, why:"It lets helpers see the bug quickly, and building it often reveals the cause."},
     {t:"Your whole project, zipped", why:"Too big: helpers would have to search for the problem."},
     {t:"A screenshot of the error", why:"Nobody can run a picture, and it may leave out the code."},
     {t:"A one-line description of the bug", why:"Without runnable code, helpers can only guess."}
   ]},
   {id:"t2u9-q34", lesson:"t2u9-l5", level:2, q:"Which search is most likely to help with `UnicodeDecodeError: 'utf-8' codec can't decode byte 0xe9 in position 3` in `C:\\Users\\Mei\\shop\\load.py`?", options:[
     {t:"`python UnicodeDecodeError utf-8 can't decode byte 0xe9 open file`", ok:true, why:"It keeps the shared parts of the message and adds context, leaving out Mei’s own paths."},
     {t:"`C:\\Users\\Mei\\shop\\load.py error`", why:"Nobody else has her path; this matches nothing useful."},
     {t:"`error`", why:"Far too broad."},
     {t:"`my file is broken`", why:"No technical detail for a search engine to match."}
   ]},
   {id:"t2u9-q35", lesson:"t2u9-l5", level:3, q:"Lucía finds an online answer using `raw_input(\"Name: \")`. Her Python says `NameError: name 'raw_input' is not defined`. What’s going on?", options:[
     {t:"The answer is for Python 2; in Python 3 the function is `input()`", ok:true, why:"`raw_input` and `print` without brackets are signs of Python 2 code. Check the date and version of answers."},
     {t:"She needs to install a raw_input package", why:"There’s no need: Python 3’s built-in `input()` does the job. Installing unknown packages to match an old answer is risky."},
     {t:"Her Python installation is broken", why:"It’s working correctly; that name doesn’t exist in Python 3."},
     {t:"She must import raw_input from csv", why:"The csv module has nothing to do with reading typed input."}
   ]},
   {id:"t2u9-q36", lesson:"t2u9-l5", level:1, q:"Where is the official, version-specific description of `csv.DictReader`?", options:[
     {t:"The Python Standard Library documentation at docs.python.org", ok:true, why:"Set the version menu to your Python and search for the csv module."},
     {t:"The first search result, whatever it is", why:"Search results vary in quality and age; the official docs are the reference."},
     {t:"An AI assistant’s answer", why:"Useful for explanations, but it can be wrong; check against the docs."},
     {t:"The file’s properties in your file manager", why:"That shows file details, not documentation."}
   ]},
   {id:"t2u9-q37", lesson:"t2u9-l5", level:3, q:"Kenji wants an AI assistant’s help with a script that contains his email password and reads a CSV of customers. What should he do?", options:[
     {t:"Replace the password with a placeholder and the customer data with a few made-up rows, then share a minimal example", ok:true, why:"Secrets and other people’s personal data shouldn’t go into AI tools or forums. A minimal example with fake data gets the same help."},
     {t:"Paste everything: the assistant needs full context", why:"It doesn’t need the real secrets or people’s data to explain a bug, and what you paste may be stored."},
     {t:"Paste the password but not the CSV", why:"The password is the most dangerous part to share."},
     {t:"Post the whole script publicly instead", why:"Public posting is even riskier for secrets and personal data."}
   ]},
   {id:"t2u9-q38", lesson:"t2u9-l5", level:2, q:"An AI suggests `open(\"data.csv\", mode=\"r\", autoencoding=True)`. Python says `TypeError: open() got an unexpected keyword argument 'autoencoding'`. What’s the lesson?", options:[
     {t:"Assistants can invent parameters; check suggestions against the documentation and test them", ok:true, why:"`open()` has no `autoencoding` parameter. The docs list the real ones, such as `encoding`."},
     {t:"His Python is too old for this feature", why:"No Python version has this parameter; it was made up."},
     {t:"He should install an autoencoding package", why:"That chases an invented feature, possibly into an unsafe package."},
     {t:"`open()` can’t read CSV files", why:"It opens any file; the csv module then parses it."}
   ]},
   {id:"t2u9-q39", lesson:"t2u9-l5", level:2, q:"Which detail is most useful to include when asking for help with a bug?", options:[
     {t:"What you expected to happen and what actually happened, with the full error text", ok:true, why:"Expected vs got shows helpers the gap, and the full traceback shows where."},
     {t:"How long you’ve been stuck", why:"Understandable to mention, but it doesn’t help anyone find the bug."},
     {t:"A photo of your screen", why:"Text can be copied and run; photos can’t."},
     {t:"Your full name and address", why:"Personal details are unnecessary and unsafe to share."}
   ]},
   {id:"t2u9-q40", lesson:"t2u9-l5", level:3, q:"Priya has changed her code at random for an hour and it now fails in new ways. What does Think Python’s “retreating” suggest?", options:[
     {t:"Undo recent changes back to the last version that worked, then make one change at a time", ok:true, why:"Retreating gets you back to solid ground; a Git commit or a saved copy makes this easy."},
     {t:"Keep changing things until it works", why:"Random changes add new bugs, which is what happened."},
     {t:"Delete the whole project and start again from nothing", why:"There’s no need to lose the working version; retreat to it."},
     {t:"Ask an AI to rewrite it without reading the answer", why:"That hands over the thinking and may add new problems she can’t judge."}
   ]}
  ]
});
