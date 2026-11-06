/* Track 2 · Unit 8 · Python basics */
ICA.addUnit({
  id:"t2u8", track:"t2", n:8, title:"Python basics", icon:"🐍",
  blurb:"Python is a friendly, general-purpose programming language used for everything from tidying files to analysing data. Learn to run it on any device, store and calculate with values, make decisions, work through lists and dictionaries with loops, write your own functions, and read error messages calmly from the bottom up.",
  goals:[
    "Run Python on your device (or in this app’s Python Lab), tell the REPL from a script, and write a first program with `print()` and comments",
    "Work with `int`, `float`, `str`, `bool` and `None`, name variables in snake_case, calculate with `/`, `//` and `%` and powers, and predict `round()` and `input()` surprises",
    "Make decisions with comparisons, `if`/`elif`/`else`, `and`/`or`/`not` and correct indentation, and clean up text with string methods, `in`, `len()` and slicing",
    "Store data in lists and dictionaries, repeat work with `for`, `range()` and `while` without getting stuck, and build a small grocery-total and word-count program",
    "Write functions with parameters, defaults and `return`, read a traceback from the bottom up, fix the eight most common errors, and use the standard library with `import`"
  ],
  read:[
    {book:"atbs", where:"Introduction; Chapter 1, “Python Basics”; Chapter 2, “if-else and Flow Control”; Chapter 3, “Loops”; Chapter 4, “Functions”; Chapter 6, “Lists”; Chapter 7, “Dictionaries and Structuring Data”; Chapter 8, “Strings and Text Editing”", note:"Practical and gentle, with small programs in every chapter. The book uses the Mu editor; IDLE, Thonny, VS Code or the Python Lab work just as well."},
    {book:"thinkpy", where:"Chapter 1, “Programming as a way of thinking”; Chapter 2, “Variables and Statements”; Chapter 3, “Functions”; Chapter 5, “Conditionals and Recursion”; Chapter 6, “Return Values”; Chapter 7, “Iteration and Search”; Chapter 8, “Strings and Regular Expressions”; Chapter 9, “Lists”; Chapter 10, “Dictionaries”", note:"A more conceptual second view. Each chapter is also a notebook you can run online. Skip the recursion and regular-expression parts for now."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u8-l1", title:"Meet Python", minutes:50,
   hook:{q:"A Python program contains exactly this line: `print(\"2 + 3\")`. What appears when it runs?", options:["5","2 + 3","\"2 + 3\", with the quotes","An error, because you can’t print a sum"], answer:1, reveal:"It shows 2 + 3. The quotes make it a piece of text, so Python prints those characters exactly as written and does no maths. Without the quotes, `print(2 + 3)` would work out the sum and show 5. This lesson starts there: what Python is, where to run it, and how `print()` talks back to you."},
   goals:[
     "Say what Python is and what people use it for",
     "Run Python in the Python Lab, or on Windows, macOS, ChromeOS or Linux, and choose between `python3`, `python` and `py`",
     "Tell the REPL (`>>>`) from a script file, and know why a script needs `print()`",
     "Write a first program with `print()` and `#` comments, and pick an editor such as IDLE, Thonny or VS Code"
   ],
   learn:[
    {h:"What Python is, and what it’s for", body:[
      {lead:"Python is a programming language designed to be easy to read, and it is used almost everywhere."},
      "A **programming language** is a precise way of writing instructions for a computer. Python’s instructions look a lot like short English sentences, with few brackets and symbols, which is one reason it’s so often the first language people learn. It was created by Guido van Rossum and first released in 1991. The name comes from the comedy series *Monty Python’s Flying Circus*, not the snake (though the snake became the logo).",
      "People use Python for very different jobs:",
      {table:[
        ["Kind of job","An everyday example"],
        ["Automating chores","Renaming 300 holiday photos, or merging a folder of spreadsheets"],
        ["Working with data","Totalling a community group’s membership fees, or charting survey results"],
        ["Science and research","Analysing lab measurements, or cleaning a dataset for a thesis"],
        ["Websites and apps","The server code behind sign-up forms and online shops"],
        ["Teaching and learning","Many schools and universities start with Python"]
      ]},
      "[[python|Python]] is **general-purpose**: one language, many uses. That’s different from HTML and CSS, which only describe web pages. If you did Unit 4, you met JavaScript, which runs inside web browsers. Python normally runs on a computer instead, but the core ideas you met there (values, variables, decisions, loops, functions) carry straight over. This unit explains them again from the start, so you don’t need to remember any JavaScript.",
      "Python has a free, official home at **python.org**. A new version comes out every October: 3.14 in 2025, 3.15 in 2026. This unit works with any recent Python 3. The old **Python 2** reached its end of life in 2020; if a tutorial writes `print \"Hi\"` without brackets, it’s Python 2 and out of date.",
      {key:"Python is a general-purpose, readable programming language. You write instructions; a program called the Python interpreter carries them out."}
    ]},
    {h:"The interpreter, and where to run it", body:[
      "To run Python code you need a **[[interpreter]]**: a program that reads your Python, line by line, and carries it out. Think of it as a translator who reads your instructions aloud to the computer as you go. Installing “Python” means installing this interpreter, plus a large collection of ready-made tools that come with it.",
      "**On a phone.** Use the **Python Lab** in this app (in **Labs**). It runs a real Python 3.14 interpreter inside the page, so nothing needs installing, and its **Check** button tells you whether your program does what a challenge asks. You can do every practice task in this unit there, on a phone or a computer.",
      "**On a computer**, you have several choices:",
      {table:[
        ["Device","How to get Python","Command to run it"],
        ["Windows 10 or 11","The **Python install manager** from python.org/downloads or the Microsoft Store","`py` (also `python`)"],
        ["Mac","The macOS installer from python.org/downloads, or Homebrew (`brew install python`)","`python3`"],
        ["Chromebook","Turn on the **Linux development environment**; Python 3 is usually already there","`python3`"],
        ["Linux","Usually already installed","`python3`"]
      ]},
      {h:"Why three different commands?"},
      "On macOS and Linux, the command is **`python3`**. On many of those systems a plain `python` command doesn’t exist at all, and on very old ones it starts the outdated Python 2. On Windows, the Python install manager gives you both **`python`** and **`py`** (`py` is the one to use when you have several versions). Either works; this unit writes `py` for Windows. (On a Windows computer without Python, typing `python` may open the Microsoft Store page instead: that’s a built-in shortcut, not an error.)",
      "Whichever you use, check which version you have:",
      {code:'python3 --version', lang:"sh", label:"Mac, Linux, ChromeOS", cap:"Shows something like `Python 3.14.0`. On Windows, type `py --version` instead."},
      {tip:"A Mac may already have a `python3` command that offers to install Apple’s “command line developer tools”. That Python belongs to Apple’s tools, and Python’s own documentation describes it as usually older and incomplete, so don’t change or delete it. Install Python from python.org as well: the two live side by side, and the python.org one is what most tutorials (and this unit) assume."}
    ]},
    {h:"Two ways to talk to Python: the REPL and scripts", body:[
      "Type `python3` (or `py` on Windows) in a [[terminal]] (the text window where you type commands; Unit 6 covers it) and press [[kbd:Enter]]. A few lines about the version appear, then a prompt of three arrows: `>>>`. This is the **[[repl|REPL]]**, short for read–evaluate–print loop: it **reads** one line, **evaluates** it (works it out), **prints** the result, and loops back for the next line. It’s a calculator that understands Python.",
      {ex:">>> 2 + 3\n5\n>>> \"Hello\"\n'Hello'\n>>> 7 * 6\n42", label:"A REPL session (you type after >>>)", mono:true},
      "The REPL is perfect for trying one idea quickly. To leave it, type `exit()` and press [[kbd:Enter]]. (Since Python 3.13 plain `exit` works too; [[kbd:Ctrl]] + [[kbd:D]] also works on Mac and Linux, and [[kbd:Ctrl]] + [[kbd:Z]] then [[kbd:Enter]] on Windows.)",
      "For anything you want to keep, write a **script**: a plain-text file whose name ends in `.py`, such as `hello.py`. You run the whole file at once:",
      {code:'python3 hello.py', lang:"sh", label:"Run a script", cap:"Run this in the folder that contains the file. On Windows: `py hello.py`."},
      "Here’s the big difference. In the REPL, every line’s result is shown automatically. In a script, **nothing is shown unless you ask** with `print()`. A script line that just says `2 + 3` is worked out and then quietly thrown away.",
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="t2u8a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">1. The REPL: one line at a time</text><rect class="d-panel" x="10" y="28" width="320" height="106" rx="8" stroke-width="1.5"/><text class="mono" x="24" y="52">&gt;&gt;&gt; 2 + 3</text><text class="mono" x="24" y="72">5</text><text class="mono" x="24" y="98">&gt;&gt;&gt; "Hello"</text><text class="mono" x="24" y="118">\'Hello\'</text><text class="s" x="200" y="62">result shown</text><text class="s" x="200" y="78">automatically</text><text class="s" x="10" y="156">Good for trying ideas. Lost when you close it.</text><text x="10" y="196">2. A script: a whole file at once</text><rect class="d-lup" x="10" y="208" width="150" height="86" rx="8" stroke-width="1.5"/><text class="s" x="22" y="228">hello.py</text><text class="mono" x="22" y="254">2 + 3</text><text class="mono" x="22" y="278">print("Hi")</text><path class="d-ink" d="M164,251 L200,251" stroke-width="2" marker-end="url(#t2u8a1)"/><rect class="d-gold" x="204" y="230" width="126" height="42" rx="8" stroke-width="1.5"/><text x="267" y="249" text-anchor="middle">python3</text><text x="267" y="265" text-anchor="middle">hello.py</text><path class="d-ink" d="M267,272 L267,318" stroke-width="2" marker-end="url(#t2u8a1)"/><rect class="d-sage" x="204" y="322" width="126" height="40" rx="8" stroke-width="1.5"/><text class="mono" x="267" y="347" text-anchor="middle">Hi</text><text class="s" x="10" y="326">2 + 3 is worked out,</text><text class="s" x="10" y="342">then thrown away:</text><text class="s" x="10" y="358">only print() shows output.</text><text class="s" x="10" y="398">Saved in a file, so you can run it again.</text></svg>', alt:"Two panels. First, the REPL: after the >>> prompt the learner types 2 + 3 and Python shows 5; types \"Hello\" and Python shows 'Hello'. Results are shown automatically; it is good for trying ideas but lost when closed. Second, a script: a file hello.py containing 2 + 3 and print(\"Hi\") is run with python3 hello.py, and the only output is Hi, because 2 + 3 is worked out and thrown away; only print() shows output. The file is saved and can be run again.", cap:"The REPL shows every result. A script shows only what you `print()`."}
    ]},
    {h:"print(): your first program", body:[
      "`print()` is a **[[py-function|function]]**: a named action you **call** by writing its name followed by round brackets. Whatever you put inside the brackets (the **[[py-argument|arguments]]**) is what it works with. `print()` shows its arguments on the screen.",
      {code:['# hello.py: my first program','print("Hello! I am learning Python.")','print("2 + 3 =", 2 + 3)','print()','print("Bye for now.")'].join("\n"), lang:"py", label:"hello.py", pylab:"pl-hello", cap:"Output: `Hello! I am learning Python.`, then `2 + 3 = 5`, then an empty line, then `Bye for now.`"},
      "What each line does:",
      {list:[
        "`\"Hello! I am learning Python.\"` is a **[[py-string|string]]**: a piece of text in quotes. Python prints the characters inside, without the quotes. Double quotes `\"…\"` and single quotes `'…'` mean the same thing; pick one style and stick to it.",
        "`print(\"2 + 3 =\", 2 + 3)` has **two** arguments separated by a comma. The first is text, printed as it is; the second has no quotes, so Python works it out (5). `print()` puts a space between its arguments.",
        "`print()` with nothing inside prints an empty line, handy for spacing.",
        "Lines run **top to bottom**, one after another."
      ]},
      "Python is **case-sensitive**: `print` works, `Print` doesn’t. Brackets and quotes must come in pairs. Python 3 always needs the brackets after `print`.",
      {code:'Print("Hi")', lang:"py", label:"A capital P", cap:"Python stops with `NameError: name 'Print' is not defined. Did you mean: 'print'?` Recent versions add that helpful “Did you mean” hint."},
      {lab:"pl-hello", t:"Practise: print two lines of text exactly"}
    ]},
    {h:"Comments: notes for humans", body:[
      "A **[[py-comment|comment]]** starts with `#`. Python ignores everything from the `#` to the end of that line. Use comments to explain **why** something is done, to leave yourself reminders, or to switch a line off while you test.",
      {code:['# Party budget, written by Sione','print("Snacks:", 12 + 8)  # two bags','# print("Drinks:", 15)','print("Tickets: #1 to #40")'].join("\n"), lang:"py", label:"Comments", pylab:"pl-hello", cap:"Output: `Snacks: 20` and `Tickets: #1 to #40`. The drinks line is commented out, so it never runs."},
      "Two things to notice:",
      {list:[
        "A comment can follow code on the same line. The code before `#` still runs.",
        "A `#` **inside quotes** is just a character in the text, not a comment, so the last line prints in full."
      ]},
      "Python has no special syntax for multi-line comments: put `#` at the start of each line. (Editors can do this for you: in VS Code select the lines and press [[kbd:Ctrl]] + [[kbd:/]], or [[kbd:Cmd]] + [[kbd:/]] on a Mac; IDLE has **Format → Comment Out Region**.)",
      {tip:"Good comments say what the code can’t: `# prices include tax` is useful; `# print the total` above `print(total)` just repeats it."}
    ]},
    {h:"Where to write code: IDLE, Thonny, VS Code", body:[
      "You can write a `.py` file in any plain-text editor, but a **[[code-editor|code editor]]** helps: it colours the code, indents for you and has a **Run** button. Three popular free choices:",
      {table:[
        ["Editor","Good for","Notes"],
        ["IDLE","Starting straight away","Comes with Python from python.org on Windows and Mac. Opens with a REPL; **File → New File** for a script, **Run → Run Module** ([[kbd:F5]]) to run it"],
        ["Thonny","Complete beginners","Includes its own Python, a simple layout and a step-by-step debugger"],
        ["VS Code","Growing into bigger projects","Add Microsoft’s **Python** extension; runs scripts in a built-in terminal"]
      ]},
      "*Automate the Boring Stuff* uses another beginner editor, Mu. Any of them is fine; the code is the same. What matters is that you save files with the `.py` ending and know which folder they’re in.",
      "When you press **Run** in an editor, it simply runs your file with the Python interpreter for you, exactly like typing `python3 hello.py` in a terminal.",
      {warn:"Don’t run Python files from people you don’t know or trust. A script can do anything you can do on your computer, including deleting files. Read code before you run it, and run only what you understand."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Python is only for experts or maths people.”** It’s designed to be readable, and much everyday Python is simple arithmetic and text.",
        "**“`python` and `python3` are different languages.”** They’re two names for starting the interpreter. Which one works depends on your system.",
        "**“My script ran but showed nothing, so it’s broken.”** In a script, only `print()` produces output. A line like `2 + 3` is calculated and discarded.",
        "**“Python is the same as JavaScript.”** They share ideas but have different rules. Python uses indentation instead of `{ }` and runs mainly on computers, not in web pages.",
        "**“I need to buy an editor.”** Python, IDLE, Thonny and VS Code are all free, and the Python Lab works on a phone."
      ]}
    ]}
   ],
   try:[
    {id:"t2u8-l1-x1", type:"sort", q:"Lucía is deciding whether Python fits each job. Sort them.", buckets:["A good job for Python","Not really Python’s job"], items:[
      {t:"Rename 300 photos so the date comes first", b:0, why:"Repetitive file chores are a classic first Python project (*Automate the Boring Stuff* has a whole chapter on it)."},
      {t:"Total a column of fees in a spreadsheet file", b:0, why:"Python reads spreadsheet and CSV files and does the arithmetic; Unit 9 shows how."},
      {t:"Choose the colours and fonts of a web page", b:1, why:"That’s CSS’s job. Python can run a website’s server, but presentation in the browser is CSS."},
      {t:"Analyse survey answers and count the most common words", b:0, why:"Counting and analysing data is one of Python’s most common uses."},
      {t:"Show a menu when someone taps a button on a web page", b:1, why:"Behaviour inside the browser is JavaScript’s job. Python normally runs on a computer or server, not in the visitor’s browser."}
    ]},
    {id:"t2u8-l1-x2", type:"match", q:"Match each situation with the best way to start Python.", pairs:[
      ["Using only an Android phone or an iPhone","Open the Python Lab in this app","Phones don’t come with a Python interpreter; the Lab runs one inside the page."],
      ["A Windows laptop with the Python install manager","Type `py` in a terminal","The install manager provides `py` (and `python`) on Windows."],
      ["A Mac after running the python.org installer","Type `python3` in Terminal","On macOS the command is `python3`; plain `python` often doesn’t exist."],
      ["A Chromebook","Turn on Linux, open its Terminal and type `python3`","ChromeOS runs Python inside the Linux development environment, where Python 3 is usually included."]
    ]},
    {id:"t2u8-l1-x3", type:"sort", q:"Kenji saves these lines in a **script** and runs it. Which lines put something on the screen?", buckets:["Shows something","Shows nothing"], items:[
      {t:"`print(2 + 3)`", b:0, why:"`print()` shows its argument: 5."},
      {t:"`2 + 3`", b:1, why:"In a script, a bare calculation is worked out and thrown away. Only the REPL shows results automatically."},
      {t:"`\"Good morning\"`", b:1, why:"A string on its own is just a value; nothing asks for it to be shown. In the REPL it would appear."},
      {t:"`print(\"Good morning\")`", b:0, why:"`print()` shows the text, without the quotes."},
      {t:"`# print(\"Hi\")`", b:1, why:"The `#` makes the whole line a comment, so the `print()` never runs."},
      {t:"`print(\"2 + 3\")`", b:0, why:"`print()` shows the text inside the quotes, `2 + 3`, exactly as written. The quotes stop Python doing the sum."}
    ]},
    {id:"t2u8-l1-x4", type:"mcq", q:"What does this line show?\n\n`print(\"Total:\", 4 * 5)`", options:[
      {t:"Total: 20", ok:true, why:"Right. The first argument is text and is printed as it is. The second has no quotes, so Python works out 4 × 5. `print()` adds a space between arguments."},
      {t:"Total: 4 * 5", why:"Only the part inside quotes is printed literally. `4 * 5` is outside the quotes, so it’s calculated."},
      {t:"\"Total:\" 20", why:"`print()` shows the characters inside the quotes, not the quotes themselves."},
      {t:"Total:20", why:"Close, but `print()` puts a space between separate arguments by default."}
    ]},
    {id:"t2u8-l1-x5", type:"spot", q:"Tap every part of this script that Python **ignores**.", ask:"ignored by Python", mono:true, parts:[
      {t:"# Club sign-up counter", flag:true, why:"A whole-line comment: everything after `#` is skipped."}, "\n", {t:"print(\"Members:\", 18 + 4)", flag:false, why:"Normal code. It runs and shows `Members: 22`."}, " ", {t:"# 4 joined today", flag:true, why:"A comment after code. The code before the `#` runs; the comment is skipped."}, "\n", {t:"# print(\"Old total:\", 18)", flag:true, why:"This `print` has been commented out, so it never runs."}, "\n", {t:"print(\"Ask for tag #22\")", flag:false, why:"The `#` is inside quotes, so it’s part of the text. The line prints `Ask for tag #22`."}
    ]},
    {id:"t2u8-l1-x6", type:"order", q:"Amara wants to write and run her first script on a laptop. Put the steps in order.", items:[
      {t:"Open a code editor such as IDLE, Thonny or VS Code", why:"First you need somewhere to type the code."},
      {t:"Type `print(\"Hello from Amara\")`", why:"The program itself: one line that shows a greeting."},
      {t:"Save the finished file as `hello.py` in a folder you can find", why:"The `.py` ending marks it as Python; you need to know where it is to run it."},
      {t:"Run it: press Run (IDLE: F5), or type `python3 hello.py` in a terminal in that folder", why:"Running hands the file to the Python interpreter. On Windows the command is `py hello.py`."},
      {t:"Read the output, `Hello from Amara`", why:"If an error appears instead, read its last line: it says what went wrong and where."}
    ]},
    {id:"t2u8-l1-x7", type:"mcq", q:"Tomás runs a script whose only line is `Print(\"Hi\")`. Python says `NameError: name 'Print' is not defined. Did you mean: 'print'?` What’s the fix?", options:[
      {t:"Change `Print` to `print`, because Python is case-sensitive", ok:true, why:"Right. `Print` and `print` are different names, and only the lowercase one exists. The “Did you mean” hint points straight at it."},
      {t:"Install the `Print` module", why:"There’s no such module. The message says Python doesn’t know the name, which here is a capitalisation slip."},
      {t:"Use single quotes: `Print('Hi')`", why:"Single and double quotes behave the same. The problem is the capital P."},
      {t:"Run it with `python` instead of `python3`", why:"The command that starts Python doesn’t change how names are spelled. The same error would appear."}
    ]}
   ],
   apply:{intro:"Get Python running, write a first script, and break it on purpose so error messages become familiar. On a phone, do everything in the Python Lab.", tasks:[
     {t:"Get Python running and check the version", how:{
       win:["Go to **python.org/downloads** and get the Windows download, the **Python install manager**. (Or install “Python Install Manager” from the Microsoft Store, which python.org recommends for most people; the two are identical.) Older guides show a traditional installer with an **Add python.exe to PATH** box; python.org says that installer will stop being released with Python 3.16.","Open **Terminal** (or PowerShell) from the Start menu.","Type `py --version` and press [[kbd:Enter]]. The first time, the install manager may run a short configuration check and download the latest Python, which can take a minute. If it asks whether to add a folder to PATH, either answer is fine for this unit: `py` and `python` work without it.","Type `py` to open the REPL. Try `2 + 3` and `\"hi\" * 3`, then type `exit()` to leave."],
       mac:["Go to **python.org/downloads** and download the macOS installer. Open it and follow the steps.","Open **Terminal** (Applications → Utilities, or search with Spotlight, [[kbd:Cmd]] + [[kbd:Space]]).","Type `python3 --version` and press [[kbd:Return]].","Type `python3` to open the REPL. Try `2 + 3` and `\"hi\" * 3`, then `exit()` to leave.","If you use Homebrew already, `brew install python` is another way; the command is still `python3`."],
       chromeos:["Open **Settings → About ChromeOS → Developers** and turn on the **Linux development environment**. (On a school or work Chromebook this may be blocked; use the Python Lab instead.)","Open the **Terminal** app and choose **penguin** (the Linux container).","Type `python3 --version`. Python 3 is usually already there. If the command isn’t found, install it with `sudo apt install python3` (Unit 6 explains `sudo`), or use the Python Lab.","Type `python3` to open the REPL. Try `2 + 3` and `\"hi\" * 3`, then `exit()` to leave."],
       phone:["Open this app’s **Labs → Python Lab**. It runs Python 3.14 inside the page; nothing to install.","Choose the first challenge, on `print()`.","Type `print(2 + 3)` and `print(\"hi\" * 3)` and press **▶ Run**.","Mobile browsers don’t include Python, and there’s no REPL here, so always use `print()` in the Lab."]
     }, write:"Which command started Python on your device, and which version is it? What did `\"hi\" * 3` give?"},
     {t:"Write and run your first script", how:["Open IDLE (**File → New File**), Thonny, VS Code, or the Python Lab.","Type the `hello.py` program from this lesson, but change the greeting to your own words and add one more `print()` with a sum, such as the number of days in 3 weeks.","Add a comment at the top saying what the program does.","Save it as `hello.py` and run it (IDLE: [[kbd:F5]]; terminal: `python3 hello.py`, or `py hello.py` on Windows). In the Lab there’s nothing to save: just press **▶ Run**."], write:"Paste your program and its output."},
     {t:"Break it on purpose", how:["Change `print` to `Print` on one line, run it, and copy the last line of the error.","Fix it. Now delete one closing bracket `)`, run it, and copy the last line again.","Fix it. Now delete one closing quote `\"`, run it, and note the error.","For each one, notice the line number the error mentions."], write:"Write the three error messages and what caused each one."}
   ], proof:"Python running on your device (or the Lab) with its version number noted; a saved first script with a comment and at least three lines of output; and three error messages with their causes."},
   read:[
     {book:"atbs", where:"Introduction: “What Is Python?”, “Downloading and Installing Python”, “Starting IDLE” and “The Interactive Shell”", note:"The book suggests the Mu editor and assumes Python 3.13; newer versions work the same for this unit."},
     {book:"atbs", where:"Chapter 1, “Python Basics”: “Entering Expressions into the Interactive Shell” and “Your First Program”"},
     {book:"thinkpy", where:"Chapter 1, “Programming as a way of thinking” and Chapter 2, “Variables and Statements”, sections 2.6 “The print function” and 2.8 “Comments”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u8-l2", title:"Values and variables", minutes:55,
   hook:{q:"In Python, what does `round(2.5)` give?", options:["3","2","2.5 (it can’t decide, so it leaves it)","An error: you must say how many decimal places"], answer:1, reveal:"It gives 2, which surprises almost everyone. When a number is exactly halfway, Python rounds to the nearest **even** number, so `round(2.5)` is 2 but `round(3.5)` is 4. This “banker’s rounding” keeps totals from drifting upwards. This lesson covers Python’s kinds of values, how to name them, how to calculate, and a few surprises like this one."},
   goals:[
     "Recognise `int`, `float`, `str`, `bool` and `None`, and check a value’s type with `type()`",
     "Create and reassign variables, picturing a variable as a label on a value, and name them in snake_case",
     "Calculate with Python’s arithmetic operators, including `/`, `//` and `%`, and predict `round()`, including halves",
     "Build text with f-strings, read typed answers with `input()`, and convert them with `int()` and `float()`"
   ],
   learn:[
    {h:"Every value has a type", body:[
      {lead:"Everything a program works with is a value, and each value has a type that decides what you can do with it."},
      "You can multiply two numbers, but what would it mean to multiply two names? So Python keeps track of what kind of thing each value is. The five types you’ll use first:",
      {table:[
        ["Type","Examples","Used for"],
        ["`int` ([[integer]])","`42`, `0`, `-7`","Whole numbers: counts, ages, years"],
        ["`float` ([[float|floating-point]])","`3.5`, `0.25`, `2.0`","Numbers with a decimal point"],
        ["`str` ([[py-string|string]])","`\"Amara\"`, `'42'`, `\"\"`","Text of any kind, in quotes"],
        ["`bool` ([[boolean]])","`True`, `False`","Yes-or-no answers"],
        ["`NoneType`","`None`","“No value here” ([[py-none|None]])"]
      ]},
      "Notice `'42'`: quotes make it text, even though it holds digits. And `2.0` is a float, not an int, because it has a decimal point. `True`, `False` and `None` start with capital letters, and have no quotes.",
      "The `type()` function tells you a value’s type:",
      {code:['print(type(42))','print(type(3.5))','print(type("42"))','print(type(True))','print(type(None))'].join("\n"), lang:"py", label:"Checking types", cap:"Output, one per line: `<class 'int'>`, `<class 'float'>`, `<class 'str'>`, `<class 'bool'>`, `<class 'NoneType'>`. “Class” is Python’s word for a type."},
      "`None` is Python’s way of saying “nothing”. You’ll meet it in Lesson 5: a function that doesn’t send a value back gives `None`."
    ]},
    {h:"Variables: labels on values", body:[
      "A **[[py-variable|variable]]** is a name that refers to a value, so you can use the value later. Create one with `=`:",
      {code:['city = "Lagos"','price = 4.5','price = price * 2','print(city, price)'].join("\n"), lang:"py", label:"Creating and changing variables", pylab:"pl-variables", cap:"Output: `Lagos 9.0`"},
      "Picture a variable as a **label tied to a value**, not a box that holds it. `city = \"Lagos\"` ties the label `city` to the text \"Lagos\".",
      {list:[
        "`=` means **“make this name refer to this value”**. It’s an instruction, not a statement that two things are equal (checking equality uses `==`, Lesson 3).",
        "Python first works out the right-hand side, then ties the name to the result. So `price = price * 2` reads: take the current price (4.5), double it (9.0), and move the label `price` to 9.0.",
        "There’s no special keyword to create a variable: the first `=` creates it, and later ones move the label."
      ]},
      {fig:'<svg viewBox="0 0 340 384"><defs><marker id="t2u8a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">A variable is a label tied to a value</text><rect class="d-rose" x="10" y="34" width="96" height="30" rx="15" stroke-width="2"/><text class="mono" x="58" y="54" text-anchor="middle">city</text><path class="d-ink" d="M106,49 L176,49" stroke-width="2" marker-end="url(#t2u8a2)"/><rect class="d-panel" x="180" y="34" width="150" height="30" rx="4" stroke-width="1.5"/><text class="mono" x="255" y="54" text-anchor="middle">"Lagos"</text><text class="s" x="10" y="98">price = price * 2 moves the label:</text><rect class="d-lup" x="10" y="122" width="96" height="30" rx="15" stroke-width="2"/><text class="mono" x="58" y="142" text-anchor="middle">price</text><path class="d-ink" d="M106,130 L176,114" stroke-width="1.5" stroke-dasharray="4 4"/><rect class="d-soft" x="180" y="100" width="70" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="215" y="119" text-anchor="middle">4.5</text><text class="s" x="258" y="119">before</text><path class="d-ink" d="M106,144 L176,158" stroke-width="2" marker-end="url(#t2u8a2)"/><rect class="d-sage" x="180" y="146" width="70" height="28" rx="4" stroke-width="2"/><text class="mono" x="215" y="165" text-anchor="middle">9.0</text><text class="s" x="258" y="165">after</text><text class="s" x="10" y="214">b = a ties a second label to the same value.</text><text class="s" x="10" y="230">Then a = 11 moves only a; b stays on 10.</text><rect class="d-gold" x="10" y="250" width="60" height="30" rx="15" stroke-width="2"/><text class="mono" x="40" y="270" text-anchor="middle">a</text><rect class="d-gold" x="10" y="312" width="60" height="30" rx="15" stroke-width="2"/><text class="mono" x="40" y="332" text-anchor="middle">b</text><path class="d-ink" d="M70,265 L176,265" stroke-width="2" marker-end="url(#t2u8a2)"/><rect class="d-sage" x="180" y="250" width="70" height="30" rx="4" stroke-width="2"/><text class="mono" x="215" y="270" text-anchor="middle">11</text><path class="d-ink" d="M70,327 L176,327" stroke-width="2" marker-end="url(#t2u8a2)"/><path class="d-ink" d="M70,262 L176,318" stroke-width="1.5" stroke-dasharray="4 4"/><rect class="d-panel" x="180" y="312" width="70" height="30" rx="4" stroke-width="1.5"/><text class="mono" x="215" y="332" text-anchor="middle">10</text><text class="s" x="258" y="270">a now</text><text class="s" x="258" y="332">b still</text><text class="s" x="10" y="372">The dashed line shows where a pointed before.</text></svg>', alt:"The label city points to the value \"Lagos\". The label price has a dashed line to its old value 4.5 and an arrow to its new value 9.0, because price = price * 2 moves the label. Below, labels a and b: after b = a both pointed at 10; after a = 11, a points to 11 while b still points to 10.", cap:"Assignment ties a name to a value. Moving one label never moves another."},
      "The bottom of the picture answers a common worry. After `b = a`, both names refer to the same value. Then `a = 11` moves only the label `a`; `b` still refers to 10:",
      {code:['a = 10','b = a','a = 11','print(a, b)'].join("\n"), lang:"py", label:"Moving one label", cap:"Output: `11 10`"},
      "Variables can be re-tied to a value of a different type (`x = 5`, then `x = \"five\"`). Python allows it, but it makes code confusing, so keep each name to one kind of thing."
    ]},
    {h:"Naming variables well", body:[
      "Names follow a few hard rules:",
      {list:[
        "Letters, digits and underscores `_` only. No spaces, no hyphens (`first-name` would mean “first minus name”).",
        "Can’t **start** with a digit: `total2` is fine, `2nd_place` is a SyntaxError.",
        "Case matters: `total`, `Total` and `TOTAL` are three different names.",
        "Not a **keyword**: words such as `if`, `for`, `def`, `class`, `return`, `True` and `None` already have a job."
      ]},
      "And a few habits. Python’s official style guide, **PEP 8**, says to write variable names in lowercase with words joined by underscores. This is called **[[snake-case|snake_case]]**: `ticket_price`, `first_name`, `is_member`. A name written in all capitals, like `TAX_RATE = 0.2`, tells readers “treat this as a fixed setting”.",
      {table:[
        ["Unclear","Clearer","Why"],
        ["`x`","`ticket_price`","Says what it holds"],
        ["`d`","`days_left`","No guessing"],
        ["`firstName`","`first_name`","snake_case is the Python convention"],
        ["`list`","`guests`","`list` is already a Python name"]
      ]},
      {warn:"Avoid names Python already uses for its built-in functions, such as `print`, `list`, `str`, `sum`, `input` or `type`. Python lets you write `sum = 5`, but afterwards `sum([1, 2])` fails with `TypeError: 'int' object is not callable`, because the name now means 5. If that happens in the REPL, restart it."}
    ]},
    {h:"Arithmetic: seven operators", body:[
      "Python is a very good calculator. Its arithmetic operators:",
      {table:[
        ["Operator","Meaning","Example → result"],
        ["`+`  `-`  `*`","Add, subtract, multiply","`7 * 2` → `14`"],
        ["`/`","Divide (always gives a float)","`7 / 2` → `3.5`; `6 / 2` → `3.0`"],
        ["`//`","**[[floor-division|Floor division]]**: divide and drop the remainder","`7 // 2` → `3`"],
        ["`%`","Remainder (also called modulo)","`7 % 2` → `1`"],
        ["`**` (as in `2 ** 10`)","Power: 2 to the 10th","`1024`"]
      ]},
      "As in maths, powers come first (so `2 * 3 ** 2` is 18, because `3 ** 2` is worked out first), then `*`, `/`, `//` and `%`, then `+` and `-`; brackets go before all of them. So `2 + 3 * 4` is 14, and `(2 + 3) * 4` is 20. Mixing an int and a float gives a float: `3 + 0.5` is `3.5`.",
      "Floor division and remainder belong together. They split a quantity into whole units and what’s left over:",
      {code:['minutes = 135','hours = minutes // 60','left = minutes % 60','print(hours, "h", left, "min")'].join("\n"), lang:"py", label:"135 minutes in hours and minutes", pylab:"pl-math", cap:"Output: `2 h 15 min`. 135 // 60 is 2 whole hours; 135 % 60 is the 15 minutes left over."},
      "`%` is also the standard way to test whether a number divides evenly: `n % 2` is 0 for even numbers and 1 for odd ones.",
      {h:"Decimals are approximate"},
      "Try `print(0.1 + 0.2)`: it shows `0.30000000000000004`. Computers store floats in binary, and most decimals, including 0.1, can’t be stored exactly in binary, just as 1/3 can’t be written exactly in decimal. The error is tiny, and almost every programming language behaves the same way. Round the result when you show it."
    ]},
    {h:"round(), and why round(2.5) is 2", body:[
      "`round(number)` rounds to a whole number; `round(number, places)` keeps that many decimal places:",
      {code:['print(round(3.14159, 2))','print(round(2.5))','print(round(3.5))','print(round(2.675, 2))'].join("\n"), lang:"py", label:"Rounding", pylab:"pl-math", cap:"Output: `3.14`, `2`, `4`, `2.67`."},
      "If `2` and `2.67` surprised you, you’re in good company. There are two separate reasons:",
      {ol:[
        "**Halves go to the even neighbour.** For a value exactly halfway between two choices, Python picks the even one: `round(0.5)` is 0, `round(1.5)` is 2, `round(2.5)` is 2, `round(3.5)` is 4. This is called **round half to even**, or banker’s rounding. School rounding (“5 always goes up”) pushes every half upwards, so adding up thousands of rounded amounts drifts too high. Going to the even neighbour sends half of them up and half down, so totals stay fair.",
        "**Some “halves” aren’t really halves.** 2.675 is stored in binary as a number very slightly **below** 2.675, so it rounds down to 2.67. Python’s documentation calls this out: it isn’t a bug, it’s floating point."
      ]},
      "Neither is a mistake on your part, and for most jobs the difference is a cent at most. If you need “always round halves up”, for example for official money calculations, Python’s `decimal` module can do it; that’s for later.",
      {key:"`round(2.5)` is 2 and `round(3.5)` is 4: exact halves go to the even number. Use `round()` (or an f-string, next) to tidy results for display."}
    ]},
    {h:"f-strings: putting values into text", body:[
      "You’ll often want to show values inside a sentence. An **[[f-string]]** is a string with the letter `f` just before the opening quote. Inside it, anything in curly braces `{ }` is worked out and dropped into the text:",
      {code:['name = "Hana"','tickets = 3','price = 4.5','print(f"{name} has {tickets} tickets.")','print(f"Total: {tickets * price:.2f}")'].join("\n"), lang:"py", label:"f-strings", pylab:"pl-variables", cap:"Output: `Hana has 3 tickets.` and `Total: 13.50`."},
      {list:[
        "`{name}` is replaced by the value of `name`. You can put a whole calculation inside the braces, such as `{tickets * price}`.",
        "`:.2f` after the value means “show as a number with exactly 2 decimal places”. It’s the easiest way to show money: 13.5 becomes `13.50`.",
        "Forget the `f` and the braces are printed literally: `\"{name}\"` shows `{name}`."
      ]},
      "Older code joins strings with `+`, as in `\"Hi \" + name`. That works for text, but `\"Age: \" + 30` is a TypeError, because Python won’t join text and a number without being told how. An f-string converts the number for you."
    ]},
    {h:"input(): asking the user, and converting the answer", body:[
      "`input()` shows a prompt, waits for the person to type something and press [[kbd:Enter]], and gives back what they typed. Whatever they type, **`input()` always gives back a string**.",
      {code:['name = input("What is your name? ")','age = input("How old are you? ")','next_year = int(age) + 1','print(f"Hi {name}!")','print(f"Next year: {next_year}")'].join("\n"), lang:"py", label:"greet.py", pylab:"pl-input", cap:"If someone types `Amara` and `30`, the program prints `Hi Amara!` and `Next year: 31`"},
      "`int(age)` turns the text \"30\" into the number 30 so Python can add 1. This is **[[type-conversion|type conversion]]**. The conversion functions:",
      {table:[
        ["Function","Turns","Example → result"],
        ["`int()`","Text or a float into a whole number","`int(\"30\")` → `30`; `int(3.9)` → `3`"],
        ["`float()`","Text or an int into a float","`float(\"2.5\")` → `2.5`"],
        ["`str()`","Anything into text","`str(30)` → `'30'`"]
      ]},
      "Two details: `int(3.9)` simply **chops off** the decimals (it gives 3, not 4), and `int(\"3.5\")` is a **ValueError**, because \"3.5\" isn’t written as a whole number. Use `float()` for answers that may have decimals. `int(\"thirty\")` is a ValueError too: conversion can’t understand words.",
      "Forgetting to convert is the classic beginner bug:",
      {code:['a = input("First number: ")','b = input("Second number: ")','print(a + b)'].join("\n"), lang:"py", label:"A sneaky bug", cap:"Type 3 and 4 and it prints `34`. Both answers are strings, and `+` joins strings. Fix: `print(int(a) + int(b))` prints `7`."},
      {tip:"In the Python Lab, a program can’t stop and wait for you to type. Instead, write your answers before you run it, in the box **What to type when the program asks for input()**, one answer per line. Each `input()` takes the next line. When you press **▶ Run**, the output shows each question with its answer, as a terminal would (`What is your name? Amara`). When you press **Check**, only what your program prints with `print()` is compared; the questions inside `input(\"…\")` don’t count."},
      {lab:"pl-input", t:"Practise: ask for a name and an age, then reply"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`=` means equals.”** It means “tie this name to this value”. Comparing uses `==`.",
        "**“`'42'` is a number.”** Quotes make it a string. `type('42')` is `str`.",
        "**“`/` gives a whole number when it divides evenly.”** `/` always gives a float: `6 / 2` is `3.0`. Use `//` for a whole-number result.",
        "**“`round()` is broken.”** `round(2.5)` being 2 is deliberate (halves go to the even neighbour), and `round(2.675, 2)` being 2.67 comes from binary storage.",
        "**“If someone types a number, `input()` gives a number.”** It always gives a string. Convert with `int()` or `float()`.",
        "**“`int(3.9)` rounds to 4.”** It drops the decimals and gives 3. Use `round()` to round."
      ]}
    ]}
   ],
   try:[
    {id:"t2u8-l2-x1", type:"sort", q:"Sort each value by its Python type.", buckets:["int","float","str","bool or None"], items:[
      {t:"`2026`", b:0, why:"A whole number without quotes is an `int`."},
      {t:"`\"2026\"`", b:2, why:"Quotes make it text, a `str`, even though it’s all digits."},
      {t:"`7.0`", b:1, why:"The decimal point makes it a `float`, even though it equals a whole number."},
      {t:"`True`", b:3, why:"`True` and `False` (capital letter, no quotes) are the two `bool` values."},
      {t:"`\"False\"`", b:2, why:"In quotes, it’s just a five-letter string, not the boolean."},
      {t:"`None`", b:3, why:"`None` is Python’s value for “nothing here”; its type is `NoneType`."},
      {t:"`-3`", b:0, why:"Negative whole numbers are `int` too."},
      {t:"`0.5`", b:1, why:"A number with a decimal point is a `float`."}
    ]},
    {id:"t2u8-l2-x2", type:"spot", q:"Tap every variable name that Python **won’t accept**.", ask:"not allowed as a name", mono:true, parts:[
      {t:"first_name", flag:false, why:"Letters and underscores: valid, and good snake_case."}, "   ", {t:"2nd_place", flag:true, why:"A name can’t start with a digit. `second_place` or `place_2` would work."}, "   ", {t:"total2", flag:false, why:"Digits are fine after the first character."}, "\n", {t:"first-name", flag:true, why:"A hyphen is the minus sign, so Python reads this as `first - name`. Use an underscore."}, "   ", {t:"_count", flag:false, why:"A name may start with an underscore. (By convention it hints “for internal use”.)"}, "   ", {t:"class", flag:true, why:"`class` is a keyword with its own job in Python, so it can’t be a variable name."}, "\n", {t:"Total", flag:false, why:"Valid, though PEP 8 prefers lowercase. Remember `Total` and `total` are different names."}, "   ", {t:"my total", flag:true, why:"Names can’t contain spaces. Write `my_total`."}
    ]},
    {id:"t2u8-l2-x3", type:"match", q:"Match each expression with the value Python gives.", pairs:[
      ["`7 / 2`","`3.5`","`/` is true division and always gives a float."],
      ["`7 // 2`","`3`","`//` divides and drops the remainder (floor division)."],
      ["`7 % 2`","`1`","`%` gives the remainder: 7 = 3 × 2 + 1."],
      ["`10 % 4`","`2`","10 = 2 × 4 + 2, so the remainder is 2."],
      ["`6 / 2`","`3.0`","Even when it divides evenly, `/` gives a float."]
    ]},
    {id:"t2u8-l2-x4", type:"number", q:"Mei has 50 eggs and packs them in boxes of 6. What does `50 % 6` give: how many eggs are left over?", answer:2, tol:0, unit:"eggs", why:"50 // 6 is 8 full boxes, which use 48 eggs. 50 − 48 leaves **2**, and that’s what `50 % 6` gives.", wrongs:[
      {v:8, tol:0, why:"8 is the number of full boxes: that’s `50 // 6`. `%` gives the remainder instead."},
      {v:8.33, tol:0.01, why:"That’s `50 / 6`, ordinary division. `%` gives the whole eggs left over."},
      {v:6, tol:0, why:"6 is the box size. The remainder after filling 8 boxes is 50 − 48."}
    ]},
    {id:"t2u8-l2-x5", type:"mcq", q:"Fatima writes `print(round(2.5), round(3.5))`. What does it show?", options:[
      {t:"2 4", ok:true, why:"Right. Exact halves go to the even neighbour: 2.5 → 2 and 3.5 → 4. This “round half to even” rule keeps totals of many rounded numbers from drifting upwards."},
      {t:"3 4", why:"That’s school rounding, where halves always go up. Python’s `round()` sends exact halves to the even number, so 2.5 becomes 2."},
      {t:"2 3", why:"That would be dropping the decimals, which is what `int()` does. `round()` sends 3.5 up to 4, because 4 is the even neighbour."},
      {t:"2.5 3.5", why:"`round()` with one argument always rounds to a whole number."}
    ]},
    {id:"t2u8-l2-x6", type:"mcq", q:"Tomás’s program asks for two numbers with `input()` and prints `a + b`. He types 3 and 4 and gets `34`. What’s going on?", options:[
      {t:"`input()` gave back two strings, and `+` joins strings; convert them with `int()` first", ok:true, why:"Right. `input()` always returns text. `\"3\" + \"4\"` is `\"34\"`. `int(a) + int(b)` gives 7."},
      {t:"`+` is the wrong operator; addition in Python is `add()`", why:"`+` does add numbers. The problem is that these aren’t numbers yet."},
      {t:"He needs `float()` instead of `int()`", why:"He hasn’t converted at all yet. Either `int()` or `float()` would fix it; `int()` suits whole numbers."},
      {t:"Python can’t add numbers that someone typed", why:"It can, once they’re converted from text to numbers."}
    ]},
    {id:"t2u8-l2-x7", type:"mcq", q:"Priya’s café sells 3 teas at 2.25 each. Which line prints `Total: 6.75`?", options:[
      {t:"`print(f\"Total: {3 * 2.25:.2f}\")`", ok:true, why:"Right. The `f` before the quote makes it an f-string; the calculation in braces is worked out, and `:.2f` shows exactly two decimals."},
      {t:"`print(\"Total: {3 * 2.25:.2f}\")`", why:"Without the `f`, the braces are just characters, so it prints them literally."},
      {t:"`print(\"Total: \" + 3 * 2.25)`", why:"`+` can’t join a string and a float: this is a TypeError. An f-string converts the number for you."},
      {t:"`print(f\"Total: (3 * 2.25)\")`", why:"Values go in curly braces `{ }`, not round brackets. This prints the brackets and the sum as text."}
    ]}
   ],
   apply:{intro:"Use the REPL (or the Python Lab) as a calculator, then write two small programs that use variables, f-strings and input. Every task works in the Python Lab on a phone.", tasks:[
     {t:"Calculator warm-up", how:["Open the REPL (`python3`, or `py` on Windows) or a Python Lab challenge.","Work these out, wrapping each in `print()` if you’re in the Lab: `17 / 5`, `17 // 5`, `17 % 5`, `2 ** 8`, `10 ** 3`, `0.1 + 0.2`.","Try `round(0.5)`, `round(1.5)`, `round(2.5)` and `round(3.5)`. Can you see the even-number pattern?","Try `type(17 / 5)` and `type(17 // 5)` (in the Lab: `print(type(17 / 5))`)."], write:"Write each result. Which one surprised you most, and why does it happen?"},
     {t:"A receipt with f-strings", how:["Make variables for an item’s name, its price and how many were bought, for example a notebook at 3.20, quantity 4.","Calculate the total in a new variable.","Print a line such as `4 x notebook = 12.80` using an f-string with `:.2f`.","Change the quantity and run it again."], write:"Paste your program and its output."},
     {t:"Ask, convert, answer", how:["Write a program that asks for a name and a number of minutes with `input()`.","Convert the minutes with `int()`, then work out hours and minutes with `//` and `%`.","Print something like `Kenji, 135 minutes is 2 h 15 min.`","Now run it and type `two hours` instead of a number (in the Lab, put it on the second line of the input box). Read the error: what type is it?"], write:"Paste your program, one run, and the error message from the last step."}
   ], proof:"Results of the calculator warm-up with one surprise explained; a receipt program with a two-decimal total; and a program that converts typed minutes, plus the ValueError it gives for words."},
   read:[
     {book:"atbs", where:"Chapter 1, “Python Basics”: “Entering Expressions into the Interactive Shell”, “The Integer, Floating-Point, and String Data Types”, “Storing Values in Variables” and “Dissecting the Program” (including “The input() Function”, “The str(), int(), and float() Functions” and “The round() and abs() Functions”)"},
     {book:"atbs", where:"Chapter 8, “Strings and Text Editing”: “F-Strings”"},
     {book:"thinkpy", where:"Chapter 1, sections 1.1 “Arithmetic operators” to 1.5 “Values and types”; Chapter 2, sections 2.1 “Variables” to 2.3 “Variable names”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u8-l3", title:"Decisions and text", minutes:55,
   hook:{q:"What does Python say to `\"apple\" < \"Banana\"`? (For strings, `<` means “comes earlier in order”.)", options:["True, because a comes before b","False","An error: you can’t compare words","It depends on the computer’s language settings"], answer:1, reveal:"It says False. Python compares strings character by character using each character’s code number, and every capital letter (A–Z) has a smaller code than every lowercase letter (a–z). So \"B\" comes before \"a\", and \"Banana\" sorts first. That’s why programs often compare `.lower()` versions of text. This lesson covers comparisons, decisions with `if`, and the tools for cleaning up text."},
   goals:[
     "Compare values with `==`, `!=`, `<`, `>`, `<=` and `>=`, and combine conditions with `and`, `or` and `not`",
     "Write `if`/`elif`/`else` blocks with a colon and consistent four-space indentation, and fix IndentationErrors",
     "Clean and change text with `upper()`, `lower()`, `strip()`, `replace()`, `split()` and `join()`",
     "Use `in`, `len()`, indexes and slices to look inside strings"
   ],
   learn:[
    {h:"Comparisons give True or False", body:[
      {lead:"A program makes decisions by asking yes-or-no questions, and Python answers each one with True or False."},
      "These questions are **comparisons**. Each one produces a [[boolean]] value:",
      {table:[
        ["Operator","Asks","Example → result"],
        ["`==`","Equal?","`5 == 5` → `True`"],
        ["`!=`","Not equal?","`\"tea\" != \"coffee\"` → `True`"],
        ["`<`  `>`","Less than? Greater than?","`3 > 7` → `False`"],
        ["`<=`  `>=`","Less or equal? Greater or equal?","`18 >= 18` → `True`"]
      ]},
      "Remember the difference: **one** `=` ties a name to a value; **two** `==` asks whether two values are equal. Python protects you here: `if age = 18:` is a SyntaxError, and recent versions even suggest “Maybe you meant '==' …”.",
      "Python compares carefully:",
      {list:[
        "`1 == 1.0` is `True`: an int and a float with the same value are equal.",
        "`\"1\" == 1` is `False`: text is never equal to a number. Python doesn’t quietly convert one into the other (JavaScript does, which is why it needs `===`). Convert `input()` answers first.",
        "Strings compare letter by letter, by each character’s code number, so they’re **case-sensitive**: `\"Yes\" == \"yes\"` is `False`, and capitals sort before lowercase, as the warm-up showed.",
        "You can chain comparisons the way maths does: `18 <= age < 65` means “at least 18 and under 65”."
      ]}
    ]},
    {h:"if, elif and else", body:[
      "An **`if` statement** runs a block of code only when its [[condition]] is True:",
      {code:['age = 15','if age < 12:','    price = 3','elif age < 18:','    price = 5','elif age >= 65:','    price = 4','else:','    price = 8','print(f"Ticket: {price}")'].join("\n"), lang:"py", label:"Cinema ticket prices", pylab:"pl-if", cap:"Output: `Ticket: 5`. Change `age` to 8, 40 or 70 and you get 3, 8 and 4."},
      "How to read it:",
      {list:[
        "Each test line ends with a **colon** `:`. The lines that belong to it are **indented** underneath.",
        "**`elif`** means “else if”: it’s checked only if every test above it was False. You can have as many as you like.",
        "**`else`** has no condition. It runs when nothing above was True. It’s optional.",
        "Python checks from the top and runs the **first** block whose test is True, then skips the rest. Exactly one block runs (or none, if there’s no `else`)."
      ]},
      {fig:'<svg viewBox="0 0 340 384"><defs><marker id="t2u8a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">if / elif / else: the first True wins</text><rect class="d-lup" x="10" y="32" width="150" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="85" y="54" text-anchor="middle">age &lt; 12 ?</text><path class="d-ink" d="M160,49 L196,49" stroke-width="2" marker-end="url(#t2u8a3)"/><text class="s" x="162" y="40">True</text><rect class="d-panel" x="200" y="32" width="110" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="255" y="54" text-anchor="middle">price = 3</text><path class="d-ink" d="M85,66 L85,94" stroke-width="2" marker-end="url(#t2u8a3)"/><text class="s" x="92" y="86">False</text><rect class="d-sage" x="10" y="98" width="150" height="34" rx="6" stroke-width="2.5"/><text class="mono" x="85" y="120" text-anchor="middle">age &lt; 18 ?</text><path class="d-ink" d="M160,115 L196,115" stroke-width="2.5" marker-end="url(#t2u8a3)"/><text class="s" x="162" y="106">True</text><rect class="d-sage" x="200" y="98" width="110" height="34" rx="6" stroke-width="2.5"/><text class="mono" x="255" y="120" text-anchor="middle">price = 5</text><path class="d-ink" d="M85,132 L85,160" stroke-width="2" marker-end="url(#t2u8a3)"/><text class="s" x="92" y="152">False</text><rect class="d-lup" x="10" y="164" width="150" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="85" y="186" text-anchor="middle">age &gt;= 65 ?</text><path class="d-ink" d="M160,181 L196,181" stroke-width="2" marker-end="url(#t2u8a3)"/><text class="s" x="162" y="172">True</text><rect class="d-panel" x="200" y="164" width="110" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="255" y="186" text-anchor="middle">price = 4</text><path class="d-ink" d="M85,198 L85,226" stroke-width="2" marker-end="url(#t2u8a3)"/><text class="s" x="92" y="218">False</text><rect class="d-soft" x="10" y="230" width="150" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="85" y="252" text-anchor="middle">else</text><path class="d-ink" d="M160,247 L196,247" stroke-width="2" marker-end="url(#t2u8a3)"/><rect class="d-panel" x="200" y="230" width="110" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="255" y="252" text-anchor="middle">price = 8</text><path class="d-ink" d="M310,49 L326,49 M310,115 L326,115 M310,181 L326,181 M310,247 L326,247 M326,49 L326,315" stroke-width="1.5"/><path class="d-ink" d="M326,315 L314,315" stroke-width="1.5" marker-end="url(#t2u8a3)"/><rect class="d-gold" x="10" y="298" width="300" height="34" rx="6" stroke-width="1.5"/><text class="mono" x="160" y="320" text-anchor="middle">print(f"Ticket: {price}")</text><text class="s" x="10" y="356">With age = 15 the 1st test is False and the</text><text class="s" x="10" y="372">2nd is True: price = 5, the rest is skipped.</text></svg>', alt:"A flowchart. The test age < 12 leads, if True, to price = 3; if False, down to age < 18, which leads to price = 5 if True; if False, down to age >= 65, leading to price = 4; otherwise else leads to price = 8. All four results join and continue to print(f\"Ticket: {price}\"). The path for age 15 is highlighted: the first test is False, the second True, so price = 5 and the remaining tests are skipped.", cap:"Python tries each test from the top and runs only the first block whose test is True."},
      "Order matters. If the `age >= 65` test came first it would still work, but if `age < 18` came before `age < 12`, an 8-year-old would match `age < 18` first and pay 5. Put the most specific tests first."
    ]},
    {h:"Indentation is part of the grammar", body:[
      "In many languages, curly braces `{ }` mark which lines belong together and indentation is just tidiness. In Python, **the [[indentation]] itself is the grammar**: the lines indented under a colon form a **block**, and the block ends when the indentation goes back.",
      {code:['temp = 31','if temp > 30:','    print("Hot today.")','    print("Drink some water.")','print("Have a nice day.")'].join("\n"), lang:"py", label:"Two lines inside, one outside", cap:"Output: all three lines. With `temp = 20`, only `Have a nice day.` appears, because the last line isn’t indented and so isn’t part of the `if`."},
      "The standard (PEP 8) is **four spaces** per level. Code editors insert four spaces when you press [[kbd:Tab]] in a `.py` file. What matters is being consistent within a block. The three indentation errors you’ll meet:",
      {table:[
        ["Error message","What happened"],
        ["`IndentationError: expected an indented block after 'if' statement on line 1`","The line after a colon isn’t indented"],
        ["`IndentationError: unexpected indent`","A line is indented when nothing asked for a block"],
        ["`IndentationError: unindent does not match any outer indentation level`","A line steps back to a level that didn’t exist, such as 3 spaces instead of 4 or 0"]
      ]},
      {tip:"Mixing tab characters and spaces can cause a `TabError`. Let your editor turn tabs into spaces, and copy code from the web carefully: some sites swap spaces for look-alike characters."},
      {lab:"pl-fix-indent", t:"Practise: fix a program with broken indentation (it uses a `for` loop from Lesson 4, but you only need to fix the spaces)"}
    ]},
    {h:"and, or, not", body:[
      "Combine conditions with three words:",
      {list:[
        "`a and b` is True only when **both** are True.",
        "`a or b` is True when **at least one** is True.",
        "`not a` flips True to False and back."
      ]},
      {code:['total = 42','is_member = True','if total >= 50 or is_member:','    print("Free delivery")','if is_member and not total >= 50:','    print("Small-order member deal")'].join("\n"), lang:"py", label:"Combining conditions", cap:"Output: both lines. The first test is True because `is_member` is True; the second because both parts are True."},
      "Any value can be used as a condition, not only True and False. Python treats **empty or zero** values as false: `0`, `0.0`, `\"\"` (an empty string), `None` and empty lists. Everything else counts as true, even the string `\"False\"`. So `if name:` is a neat way to say “if name isn’t empty”:",
      {code:['name = input("Your name: ").strip()','if not name:','    print("Please type your name.")','else:','    print(f"Welcome, {name}!")'].join("\n"), lang:"py", label:"Checking for an empty answer", pylab:"pl-if"}
    ]},
    {h:"String methods: tidying text", body:[
      "Strings come with built-in actions called **[[py-method|methods]]**. You call a method with a dot after the value: `text.upper()`. The most useful ones:",
      {table:[
        ["Method","Does","Example → result"],
        ["`upper()` `lower()`","Change case","`\"Tea\".lower()` → `'tea'`"],
        ["`title()`","Capitalise each word","`\"mei tanaka\".title()` → `'Mei Tanaka'`"],
        ["`strip()`","Remove spaces (and line breaks) at both ends","`\"  hi  \".strip()` → `'hi'`"],
        ["`replace(old, new)`","Swap every match","`\"a-b-c\".replace(\"-\", \"/\")` → `'a/b/c'`"],
        ["`split()`","Cut into a list of pieces","`\"red green\".split()` → `['red', 'green']`"],
        ["`join(list)`","Glue a list together","`\", \".join([\"a\", \"b\"])` → `'a, b'`"]
      ]},
      "`split()` with nothing in the brackets splits on any run of spaces; `split(\",\")` splits on commas instead. `join()` looks back to front at first: the glue goes before the dot, and the list goes inside.",
      "A key fact: **strings never change**. A method gives you a **new** string and leaves the original alone, so keep the result:",
      {code:['answer = "  YES "','answer.strip().lower()','print(answer)','answer = answer.strip().lower()','print(answer)','print(answer == "yes")'].join("\n"), lang:"py", label:"Keep the result", pylab:"pl-strings", cap:"Output: `  YES ` (unchanged, because line 2 threw its result away), then `yes`, then `True`. Methods can be chained: `strip()` runs first, then `lower()`."},
      "This “strip then lower” pattern is how programs accept `Yes`, `yes ` or `YES` as the same answer.",
      {lab:"pl-strings", t:"Practise: clean up and reformat some text"}
    ]},
    {h:"Inside a string: in, len() and slices", body:[
      "`in` asks whether one piece of text appears inside another; `len()` counts characters, spaces included:",
      {code:['print("cat" in "concatenate")','print("Cat" in "concatenate")','print(len("Hi there"))'].join("\n"), lang:"py", label:"in and len()", cap:"Output: `True`, `False` (case-sensitive), `8`."},
      "Each character has a position number, an **[[py-index|index]]**, counting from **0**. Negative indexes count from the end: `-1` is the last character. A **[[py-slice|slice]]** such as `word[0:3]` takes a range of characters:",
      {fig:'<svg viewBox="0 0 340 236"><text class="mono" x="10" y="18">word = "Python"</text><text class="s" x="10" y="40">cuts between characters:</text><text class="mono" x="38" y="62" text-anchor="middle">0</text><text class="mono" x="82" y="62" text-anchor="middle">1</text><text class="mono" x="126" y="62" text-anchor="middle">2</text><text class="mono" x="170" y="62" text-anchor="middle">3</text><text class="mono" x="214" y="62" text-anchor="middle">4</text><text class="mono" x="258" y="62" text-anchor="middle">5</text><text class="mono" x="302" y="62" text-anchor="middle">6</text><rect class="d-gold" x="38" y="70" width="44" height="40" stroke-width="1.5"/><rect class="d-gold" x="82" y="70" width="44" height="40" stroke-width="1.5"/><rect class="d-gold" x="126" y="70" width="44" height="40" stroke-width="1.5"/><rect class="d-panel" x="170" y="70" width="44" height="40" stroke-width="1.5"/><rect class="d-panel" x="214" y="70" width="44" height="40" stroke-width="1.5"/><rect class="d-panel" x="258" y="70" width="44" height="40" stroke-width="1.5"/><text class="mono" x="60" y="95" text-anchor="middle">P</text><text class="mono" x="104" y="95" text-anchor="middle">y</text><text class="mono" x="148" y="95" text-anchor="middle">t</text><text class="mono" x="192" y="95" text-anchor="middle">h</text><text class="mono" x="236" y="95" text-anchor="middle">o</text><text class="mono" x="280" y="95" text-anchor="middle">n</text><text class="mono" x="60" y="130" text-anchor="middle">-6</text><text class="mono" x="104" y="130" text-anchor="middle">-5</text><text class="mono" x="148" y="130" text-anchor="middle">-4</text><text class="mono" x="192" y="130" text-anchor="middle">-3</text><text class="mono" x="236" y="130" text-anchor="middle">-2</text><text class="mono" x="280" y="130" text-anchor="middle">-1</text><text class="s" x="10" y="150">negative indexes count from the end</text><text class="mono" x="10" y="178">word[0] → \'P\'</text><text class="mono" x="170" y="178">word[-1] → \'n\'</text><text class="mono" x="10" y="200">word[0:3] → \'Pyt\' (gold)</text><text class="mono" x="10" y="222">word[2:] → \'thon\'</text></svg>', alt:"The string Python drawn as six boxes holding P, y, t, h, o, n. Numbers 0 to 6 sit on the cuts between the boxes, starting before P and ending after n. Under each box is its negative index, from -6 under P to -1 under n. The first three boxes are highlighted to show that word[0:3] is 'Pyt'. Also shown: word[0] is 'P', word[-1] is 'n', and word[2:] is 'thon'.", cap:"Think of the numbers as cuts between characters: `word[0:3]` takes everything between cut 0 and cut 3."},
      {list:[
        "`word[0]` is `'P'`; `word[5]` and `word[-1]` are both `'n'`.",
        "`word[start:stop]` goes from `start` **up to but not including** `stop`. So `word[0:3]` is `'Pyt'`: three characters.",
        "Leave out a number to go to that end: `word[:2]` is `'Py'` and `word[2:]` is `'thon'`.",
        "`word[6]` is an `IndexError: string index out of range`, because the last index of a 6-character string is 5. Slices are forgiving: `word[2:99]` just gives `'thon'`."
      ]},
      {tip:"`len(word)` is 6, but the last index is 5. “Length minus one” trips everyone up at first; drawing the boxes, as above, helps."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`=` and `==` are the same.”** `=` ties a name to a value; `==` asks a question and gives True or False.",
        "**“Indentation is just for neatness.”** In Python it decides which lines belong to an `if`, a loop or a function.",
        "**“`text.upper()` changes `text`.”** Strings never change. Keep the result: `text = text.upper()`.",
        "**“After an `if` matches, Python still checks the `elif` lines.”** Only the first True branch runs; the rest are skipped.",
        "**“The first character is number 1.”** Indexes start at 0. The last index is `len(text) - 1`.",
        "**“`\"5\" == 5` is True.”** Text and numbers are never equal in Python. Convert first."
      ]}
    ]}
   ],
   try:[
    {id:"t2u8-l3-x1", type:"match", q:"Match each comparison with the value Python gives.", pairs:[
      ["`18 >= 18`","`True` (it’s equal, and `>=` includes equal)","`>=` means greater than **or equal to**, so 18 passes."],
      ["`\"Yes\" == \"yes\"`","`False` (case differs)","String comparison is case-sensitive: Y and y are different characters."],
      ["`\"5\" == 5`","`False` (text is never equal to a number)","Python doesn’t convert types when comparing. Convert with `int()` first."],
      ["`1 == 1.0`","`True` (same value)","An int and a float with the same value are equal."]
    ]},
    {id:"t2u8-l3-x2", type:"number", q:"What does this program print?\n\n`age = 70`\n`if age < 12:`\n`    price = 3`\n`elif age < 18:`\n`    price = 5`\n`elif age >= 65:`\n`    price = 4`\n`else:`\n`    price = 8`\n`print(price)`", answer:4, tol:0, unit:"", why:"70 isn’t under 12 or under 18, so the first two tests are False. `70 >= 65` is True, so price is **4**, and the `else` is skipped.", wrongs:[
      {v:8, tol:0, why:"The `else` only runs when every test is False. `age >= 65` is True for 70, so that branch runs first."},
      {v:5, tol:0, why:"`70 < 18` is False, so that branch doesn’t run."},
      {v:3, tol:0, why:"`70 < 12` is False, so the first branch is skipped."}
    ]},
    {id:"t2u8-l3-x3", type:"spot", q:"Ana’s program won’t run. Tap every line with an **indentation or colon** problem.", ask:"a line that breaks the rules", mono:true, parts:[
      {t:"score = 72", flag:false, why:"A normal line at the left edge. Fine."}, "\n", {t:"if score >= 50", flag:true, why:"The colon is missing. Every `if`, `elif` and `else` line must end with `:` (Python says `SyntaxError: expected ':'`)."}, "\n", {t:"    print(\"Pass\")", flag:false, why:"Indented four spaces under the `if`: correct."}, "\n", {t:"else:", flag:false, why:"At the same level as the `if`, with a colon: correct."}, "\n", {t:"print(\"Try again\")", flag:true, why:"This line belongs to the `else`, so it must be indented. Without indentation Python says `IndentationError: expected an indented block after 'else' statement`."}, "\n", {t:"print(\"Done\")", flag:false, why:"Meant to run every time, so it correctly sits at the left edge, outside the `if`/`else`."}
    ]},
    {id:"t2u8-l3-x4", type:"mcq", q:"A shop gives free delivery when `total >= 50 or is_member`. Which customer does **not** get it?", options:[
      {t:"Total 30, not a member", ok:true, why:"Right. `30 >= 50` is False and `is_member` is False. `or` needs at least one True, so the result is False."},
      {t:"Total 60, not a member", why:"`60 >= 50` is True, and one True side is enough for `or`."},
      {t:"Total 20, a member", why:"`is_member` is True, which is enough for `or`."},
      {t:"Total 50, not a member", why:"`50 >= 50` is True, because `>=` includes equal."}
    ]},
    {id:"t2u8-l3-x5", type:"match", q:"`text = \"  Tea, Cake  \"`. Match each expression with its result.", pairs:[
      ["`text.strip()`","`'Tea, Cake'`","`strip()` removes the spaces at both ends only."],
      ["`text.strip().lower()`","`'tea, cake'`","Strip first, then make everything lowercase."],
      ["`text.strip().split(\", \")`","`['Tea', 'Cake']`","`split(\", \")` cuts at each comma-and-space and gives a list."],
      ["`text.replace(\"Cake\", \"Scones\")`","`'  Tea, Scones  '`","`replace()` swaps the word but leaves the outer spaces, because there’s no `strip()`."]
    ]},
    {id:"t2u8-l3-x6", type:"mcq", q:"Kenji writes:\n\n`city = \"oslo\"`\n`city.upper()`\n`print(city)`\n\nWhat appears?", options:[
      {t:"oslo", ok:true, why:"Right. Strings never change. `city.upper()` made a new string `'OSLO'`, but nothing kept it. Write `city = city.upper()`."},
      {t:"OSLO, in capitals", why:"That would need `city = city.upper()` or `print(city.upper())`. The result of line 2 was thrown away."},
      {t:"Oslo, with only the O capitalised", why:"That’s what `title()` or `capitalize()` would make, and the result still wasn’t kept."},
      {t:"An error: strings can’t be changed", why:"Calling `upper()` is fine; it just returns a new string rather than changing the old one."}
    ]},
    {id:"t2u8-l3-x7", type:"match", q:"`word = \"garden\"`. Match each expression with its result.", pairs:[
      ["`word[0]`","`'g'`","Indexes start at 0, so index 0 is the first character."],
      ["`word[-1]`","`'n'`","Negative indexes count from the end; -1 is the last character."],
      ["`word[0:3]`","`'gar'`","From cut 0 up to (not including) cut 3: three characters."],
      ["`word[3:]`","`'den'`","From cut 3 to the end."],
      ["`len(word)`","`6`","Six characters. The last index is 5."]
    ]}
   ],
   apply:{intro:"Write decision-making programs that cope with messy typing. All of these work in the Python Lab on a phone.", tasks:[
     {t:"A yes-or-no question that forgives messy typing", how:["Ask a question with `input()`, such as “Do you want a receipt?”.","Clean the answer with `.strip().lower()` and keep the result.","Use `if`/`elif`/`else` to print one message for `yes`, another for `no`, and a polite “Please answer yes or no” for anything else.","Test it with `YES`, ` no ` (with spaces), and `maybe`."], write:"Paste your program and the three test runs."},
     {t:"A grade or ticket-price chooser", how:["Pick a scale: exam grades (for example 80+ = A, 65+ = B, 50+ = C, otherwise “not yet”) or ticket prices by age.","Write it with one `if`, some `elif`s and an `else`, with the highest band first.","Test values on each boundary, such as 80, 79, 65 and 50, and one far outside the range.","Swap two of the `elif` lines and test again. What breaks?"], write:"Paste your program, your tests, and what went wrong when the order changed."},
     {t:"Text detective", how:["Store a sentence in a variable, such as a line from a song or a recipe.","Print its length, its first and last characters, and the first five characters with a slice.","Use `in` to check whether a word appears, before and after `.lower()`.","Use `.split()` to make a list of its words, then `\" \".join()` to glue them back, and `\"-\".join()` to glue them with hyphens."], write:"Paste the results. Did anything surprise you?"}
   ], proof:"Three working programs: a forgiving yes-or-no question, a banded chooser tested on its boundaries (and what changing the order broke), and a string investigation with slices, `in`, `split()` and `join()`."},
   read:[
     {book:"atbs", where:"Chapter 2, “if-else and Flow Control” (Boolean values, comparison and Boolean operators, blocks of code, `if`, `else` and `elif`)"},
     {book:"atbs", where:"Chapter 8, “Strings and Text Editing”: “Working with Strings” (indexes, slices, `in`) and “Useful String Methods”"},
     {book:"thinkpy", where:"Chapter 5, “Conditionals and Recursion” (the conditional parts; recursion can wait) and Chapter 8, “Strings and Regular Expressions” (the first sections, before regular expressions)"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u8-l4", title:"Collections and loops", minutes:60,
   hook:{q:"How many lines does this print?\n\n`for n in range(1, 5):`\n`    print(n)`", options:["5","4","6","It never stops"], answer:1, reveal:"Four lines: 1, 2, 3 and 4. `range(1, 5)` starts at 1 and stops **before** 5, the same “up to but not including” rule as slices. That one rule explains a lot of Python, and getting it wrong by one is so common it has a name: an off-by-one error. This lesson covers lists, dictionaries, and the loops that work through them."},
   goals:[
     "Store items in a list, read them by index, change them, and use `append()`, `len()`, `sum()`, `min()`, `max()` and `sorted()`",
     "Store labelled data in a dictionary, look values up by key, and avoid KeyErrors with `in` and `get()`",
     "Repeat work with `for` over lists, dictionaries and `range()`, and with `while` loops that are sure to stop",
     "Combine all of these into a grocery-total program and a word counter"
   ],
   learn:[
    {h:"Lists: many values under one name", body:[
      {lead:"A list keeps several values in order, under one name, like a numbered shopping list."},
      "Write a **[[py-list|list]]** in square brackets, with commas between the items. Each item has an [[py-index|index]], counting from **0**, just like the characters of a string:",
      {code:['basket = ["eggs", "rice", "tea"]','print(basket[0])','print(basket[-1])','print(len(basket))','basket.append("milk")','basket[1] = "brown rice"','print(basket)'].join("\n"), lang:"py", label:"A shopping list", pylab:"pl-list", cap:"Output: `eggs`, `tea`, `3`, then `['eggs', 'brown rice', 'tea', 'milk']`."},
      {list:[
        "`basket[0]` is the first item and `basket[-1]` the last.",
        "`len(basket)` counts the items.",
        "`basket.append(\"milk\")` adds an item to the **end**. Unlike strings, lists **can** change: the same list grows.",
        "`basket[1] = \"brown rice\"` replaces the item at index 1."
      ]},
      {fig:'<svg viewBox="0 0 340 330"><text class="mono" x="10" y="18">basket = ["eggs", "rice",</text><text class="mono" x="104" y="36">"tea", "milk"]</text><text class="s" x="10" y="62">index:</text><text class="mono" x="62" y="84" text-anchor="middle">0</text><text class="mono" x="134" y="84" text-anchor="middle">1</text><text class="mono" x="206" y="84" text-anchor="middle">2</text><text class="mono" x="278" y="84" text-anchor="middle">3</text><rect class="d-lup" x="26" y="92" width="72" height="40" rx="4" stroke-width="1.5"/><rect class="d-lup" x="98" y="92" width="72" height="40" rx="4" stroke-width="1.5"/><rect class="d-lup" x="170" y="92" width="72" height="40" rx="4" stroke-width="1.5"/><rect class="d-lup" x="242" y="92" width="72" height="40" rx="4" stroke-width="1.5"/><text class="mono" x="62" y="117" text-anchor="middle">"eggs"</text><text class="mono" x="134" y="117" text-anchor="middle">"rice"</text><text class="mono" x="206" y="117" text-anchor="middle">"tea"</text><text class="mono" x="278" y="117" text-anchor="middle">"milk"</text><text class="mono" x="62" y="152" text-anchor="middle">-4</text><text class="mono" x="134" y="152" text-anchor="middle">-3</text><text class="mono" x="206" y="152" text-anchor="middle">-2</text><text class="mono" x="278" y="152" text-anchor="middle">-1</text><text class="s" x="10" y="176">len(basket) is 4; the last index is 3.</text><text class="s" x="10" y="192">basket[4] is an IndexError.</text><text x="10" y="228">A dictionary: look up by key, not position</text><rect class="d-rose" x="26" y="242" width="100" height="30" rx="15" stroke-width="1.5"/><text class="mono" x="76" y="262" text-anchor="middle">"eggs"</text><rect class="d-rose" x="26" y="284" width="100" height="30" rx="15" stroke-width="1.5"/><text class="mono" x="76" y="304" text-anchor="middle">"rice"</text><path class="d-ink" d="M126,257 L196,257 M126,299 L196,299" stroke-width="2"/><path class="d-inkf" d="M196,252 L206,257 L196,262 z M196,294 L206,299 L196,304 z"/><rect class="d-sage" x="210" y="242" width="80" height="30" rx="4" stroke-width="1.5"/><text class="mono" x="250" y="262" text-anchor="middle">2.5</text><rect class="d-sage" x="210" y="284" width="80" height="30" rx="4" stroke-width="1.5"/><text class="mono" x="250" y="304" text-anchor="middle">1.8</text><text class="s" x="140" y="248">key</text><text class="s" x="296" y="262">value</text></svg>', alt:"A list named basket holding \"eggs\", \"rice\", \"tea\" and \"milk\" in four boxes. Above the boxes are their indexes 0, 1, 2 and 3; below them the negative indexes -4, -3, -2 and -1. The note says len(basket) is 4, the last index is 3, and basket[4] is an IndexError. Below, a dictionary: the key \"eggs\" points to the value 2.5 and the key \"rice\" points to the value 1.8.", cap:"A list finds items by position, counted from 0. A dictionary finds values by key."},
      "Asking for an index that doesn’t exist, such as `basket[4]` in a four-item list, stops the program with `IndexError: list index out of range`. A list can hold any values, even a mix such as `[\"Mei\", 34, True]`, but lists of one kind of thing are easier to work with.",
      {tip:"You’ll also meet **[[py-tuple|tuples]]**, written with round brackets: `(3, 4)`. A tuple is like a list that can’t be changed once made, handy for fixed pairs like a map coordinate."}
    ]},
    {h:"Working with lists of numbers", body:[
      "Python has built-in functions that work on whole lists:",
      {code:['prices = [2.5, 1.8, 3.0, 0.9]','total = sum(prices)','average = total / len(prices)','print(f"Total: {total:.2f}")','print(f"Average: {average:.2f}")','print(min(prices), max(prices))','print(sorted(prices))'].join("\n"), lang:"py", label:"sum, len, min, max, sorted", pylab:"pl-list", cap:"Output: `Total: 8.20`, `Average: 2.05`, `0.9 3.0`, `[0.9, 1.8, 2.5, 3.0]`."},
      "The average is the classic combination: `sum()` divided by `len()`. One caution: with an empty list, `len()` is 0, and dividing by zero stops the program with a `ZeroDivisionError`. Check `if prices:` first when a list might be empty.",
      {h:"sorted() versus .sort()"},
      "There are two ways to sort, and mixing them up is a famous trap:",
      {list:[
        "`sorted(prices)` gives back a **new**, sorted list and leaves `prices` alone.",
        "`prices.sort()` sorts the list **in place** and gives back `None`. So `prices = prices.sort()` throws your list away and leaves `prices` as `None`.",
        "Add `reverse=True` to either for largest first: `sorted(prices, reverse=True)`."
      ]},
      "`in` works on lists too: `\"tea\" in basket` is True if any item equals \"tea\".",
      {lab:"pl-list", t:"Practise: total and average a list of numbers"}
    ]},
    {h:"for loops: once for each item", body:[
      "A **[[py-for-loop|for loop]]** runs a block of code once for each item in a list. Each time round, the loop variable refers to the next item:",
      {code:['guests = ["Amara", "Kenji", "Lucía"]','for guest in guests:','    print(f"Welcome, {guest}!")','print("Everyone is in.")'].join("\n"), lang:"py", label:"Looping over a list", pylab:"pl-loop", cap:"Output: `Welcome, Amara!`, `Welcome, Kenji!`, `Welcome, Lucía!`, then `Everyone is in.` once."},
      "The `for` line ends with a colon, the indented lines are the **body** that repeats, and the first line back at the left edge runs after the loop is finished. The name `guest` is your choice; a singular name for one item of a plural list reads naturally.",
      "One of the most useful patterns is the **running total** (an “accumulator”): start at zero and add each item as you go.",
      {code:['prices = [2.5, 1.8, 3.0]','total = 0','for price in prices:','    total += price','print(f"Total: {total:.2f}")'].join("\n"), lang:"py", label:"A running total", pylab:"pl-loop", cap:"Output: `Total: 7.30`. `total += price` is short for `total = total + price`."},
      "`sum()` would do this particular job in one line, but the pattern works for anything: counting matches, building a new list, finding the longest word. Loops also work over strings, one character at a time: `for letter in \"tea\":` runs three times.",
      {lab:"pl-loop", t:"Practise: loop over a list and print each item"}
    ]},
    {h:"range(): counting loops", body:[
      "To repeat something a set number of times, or to count, loop over **`range()`**. Like slices, it stops **before** its end number:",
      {table:[
        ["You write","You get","Why"],
        ["`range(5)`","0, 1, 2, 3, 4","Starts at 0; five numbers; 5 is excluded"],
        ["`range(1, 6)`","1, 2, 3, 4, 5","Start at 1, stop before 6"],
        ["`range(0, 10, 2)`","0, 2, 4, 6, 8","The third number is the step"],
        ["`range(5, 0, -1)`","5, 4, 3, 2, 1","A negative step counts down"]
      ]},
      {code:['for n in range(1, 6):','    print(n, "x 7 =", n * 7)'].join("\n"), lang:"py", label:"A times table", pylab:"pl-range", cap:"Output: `1 x 7 = 7` down to `5 x 7 = 35`. For a table up to 10, write `range(1, 11)`."},
      "`range()` doesn’t make a list; it produces the numbers one at a time as the loop asks. To see them all, wrap it: `print(list(range(5)))` shows `[0, 1, 2, 3, 4]`.",
      "Getting the end number wrong by one is called an **off-by-one error**. When a loop does one round too few or too many, check the stop number first.",
      {lab:"pl-range", t:"Practise: print a times table with range()"},
      {lab:"pl-fix-offbyone", t:"Practise: find and fix an off-by-one error"}
    ]},
    {h:"Dictionaries: look things up by name", body:[
      "A list finds things by position. Often you want to find things by **name** instead: the price of tea, the phone number for Dmitri. That’s a **[[py-dict|dictionary]]** (a `dict`): pairs of **keys** and **values** in curly braces.",
      {code:['stock = {"eggs": 12, "rice": 3}','print(stock["eggs"])','stock["tea"] = 5','stock["rice"] = stock["rice"] - 1','print(stock)','print("milk" in stock)','print(stock.get("milk", 0))'].join("\n"), lang:"py", label:"A small stock list", pylab:"pl-dict", cap:"Output: `12`, then `{'eggs': 12, 'rice': 2, 'tea': 5}`, then `False`, then `0`."},
      {list:[
        "`stock[\"eggs\"]` looks up the value for the key \"eggs\".",
        "Assigning to a new key adds a pair; assigning to an existing key replaces its value. Each key appears only once.",
        "Asking for a key that isn’t there, such as `stock[\"milk\"]`, stops the program with `KeyError: 'milk'`. Check first with `in`, or use `get()`, which gives a default value (here 0) instead of an error.",
        "`in` checks the **keys**, not the values.",
        "Dictionaries remember the order you added things in."
      ]},
      "Loop over a dictionary with `.items()` to get each key and its value together:",
      {code:['for item, qty in stock.items():','    print(f"{item}: {qty}")'].join("\n"), lang:"py", label:"Looping over a dictionary", cap:"Output: `eggs: 12`, `rice: 2`, `tea: 5`. A plain `for item in stock:` gives just the keys."}
    ]},
    {h:"while loops, and how not to get stuck", body:[
      "A **[[py-while-loop|while loop]]** repeats **as long as** its condition stays True. Use it when you don’t know in advance how many rounds you need:",
      {code:['savings = 0','weeks = 0','while savings < 100:','    savings += 15','    weeks += 1','print(f"{weeks} weeks, {savings} saved")'].join("\n"), lang:"py", label:"Saving 15 a week until reaching 100", pylab:"pl-while", cap:"Output: `7 weeks, 105 saved`. After 6 weeks savings is 90, still under 100, so a seventh round runs."},
      "Python checks the condition **before** each round. When it’s False, the loop ends and the program continues after it.",
      "The danger is an **infinite loop**: if nothing inside the loop changes the condition, it stays True forever. Delete `savings += 15` above and the program never ends. If that happens, press [[kbd:Ctrl]] + [[kbd:C]] in the terminal to stop it (Python reports `KeyboardInterrupt`); in an editor, use its Stop button. The Python Lab stops any program that is still running after 4 seconds and tells you so. Before running a `while` loop, ask: “What line moves this towards the end?”",
      "Sometimes it’s clearer to loop “forever” and leave with **`break`** when something happens:",
      {code:['while True:','    word = input("A word, or stop: ")','    if word == "stop":','        break','    print(word.upper())','print("Bye!")'].join("\n"), lang:"py", label:"Leaving with break", cap:"It shouts back each word until you type `stop`, then prints `Bye!`."},
      {lab:"pl-while", t:"Practise: a while loop that stops at the right time"}
    ]},
    {h:"Putting it together: a grocery total and a word counter", body:[
      "Here’s a small program that uses a dictionary of prices, a list of what’s in the basket, a loop, a decision and an f-string:",
      {code:['prices = {"eggs": 2.5, "rice": 1.8,','          "tea": 3.0, "milk": 1.2}','basket = ["eggs", "tea", "milk",','          "eggs", "jam"]','total = 0','for item in basket:','    if item in prices:','        total += prices[item]','    else:','        print(f"No price for {item}")','print(f"Total: {total:.2f}")'].join("\n"), lang:"py", label:"grocery.py", pylab:"pl-dict", cap:"Output: `No price for jam`, then `Total: 9.20` (2.5 + 3.0 + 1.2 + 2.5). The `if item in prices` check prevents a KeyError."},
      "And a word counter, a classic first data-analysis job. It starts with an empty dictionary and adds 1 to a word’s count each time it appears:",
      {code:['text = "the cat and the hat and the bat"','counts = {}','for word in text.split():','    if word in counts:','        counts[word] += 1','    else:','        counts[word] = 1','print(counts)'].join("\n"), lang:"py", label:"wordcount.py", pylab:"pl-dict", cap:"Output: `{'the': 3, 'cat': 1, 'and': 2, 'hat': 1, 'bat': 1}`"},
      "Try it on a real paragraph: add `.lower()` before `.split()` so “The” and “the” count together. (Punctuation would still stick to words; Unit 9 deals with messier text.)",
      {lab:"pl-dict", t:"Practise: count words with a dictionary"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The first item is `basket[1]`.”** It’s `basket[0]`. The last is `basket[-1]` or `basket[len(basket) - 1]`.",
        "**“`range(1, 5)` includes 5.”** It stops before the end number: 1, 2, 3, 4.",
        "**“`prices.sort()` gives me the sorted list.”** It sorts in place and returns `None`. Use `sorted(prices)` for a new list.",
        "**“`in` on a dictionary checks the values.”** It checks the keys.",
        "**“A `while` loop stops by itself.”** Only when its condition becomes False. Something inside must change it.",
        "**“Changing the loop variable changes the list.”** In `for price in prices: price = 0`, only the name `price` moves; the list is untouched."
      ]}
    ]}
   ],
   try:[
    {id:"t2u8-l4-x1", type:"match", q:"`days = [\"Mon\", \"Tue\", \"Wed\", \"Thu\"]`. Match each expression with its result.", pairs:[
      ["`days[0]`","`'Mon'`","Indexes start at 0."],
      ["`days[-1]`","`'Thu'`","-1 is the last item."],
      ["`len(days)`","`4`","Four items, so the last index is 3."],
      ["`days[4]`","`IndexError`","Index 4 would be a fifth item. There isn’t one."]
    ]},
    {id:"t2u8-l4-x2", type:"mcq", q:"Oluwaseun writes `scores = [70, 55, 90]`, then `scores = scores.sort()`, then `print(scores)`. What appears?", options:[
      {t:"None", ok:true, why:"Right. `.sort()` sorts the list in place and returns `None`; assigning that to `scores` throws the list away. Use `scores.sort()` on its own line, or `scores = sorted(scores)`."},
      {t:"[55, 70, 90]", why:"That’s what you’d get with `scores.sort()` alone or `sorted(scores)`. Assigning the result of `.sort()` gives `None`."},
      {t:"[70, 55, 90]", why:"The original list was sorted, but the name `scores` was then tied to `None`, which is what gets printed."},
      {t:"An error", why:"No error appears, which is what makes this bug sneaky: `scores` quietly becomes `None`."}
    ]},
    {id:"t2u8-l4-x3", type:"number", q:"What does this print?\n\n`total = 0`\n`for n in range(1, 5):`\n`    total += n`\n`print(total)`", answer:10, tol:0, unit:"", why:"`range(1, 5)` gives 1, 2, 3, 4 (stopping before 5). 1 + 2 + 3 + 4 = **10**.", wrongs:[
      {v:15, tol:0, why:"That includes 5. `range(1, 5)` stops before its end number."},
      {v:6, tol:0, why:"That’s 1 + 2 + 3, one round too few. The loop also adds 4."},
      {v:4, tol:0, why:"That’s the number of rounds, not the total. `total += n` adds each number."}
    ]},
    {id:"t2u8-l4-x4", type:"order", q:"Put the output of this program in order.\n\n`for name in [\"Hana\", \"Sione\"]:`\n`    print(\"Hi\", name)`\n`    print(\"--\")`\n`print(\"Done\")`", items:[
      {t:"Hi Hana", why:"The first round: `name` is \"Hana\"."},
      {t:"--", why:"Still inside the first round: both indented lines run for each item."},
      {t:"Hi Sione", why:"The second round starts with the next item."},
      {t:"-- (a second time)", why:"The second round finishes."},
      {t:"Done", why:"Not indented, so it runs once, after the loop."}
    ]},
    {id:"t2u8-l4-x5", type:"sort", q:"`phone = {\"Dmitri\": \"555-0101\", \"Ana\": \"555-0144\"}`. Which lines run safely, and which stop with an error?", buckets:["Runs fine","Stops with an error"], items:[
      {t:"`print(phone[\"Ana\"])`", b:0, why:"\"Ana\" is a key, so this prints her number."},
      {t:"`print(phone[\"Mei\"])`", b:1, why:"\"Mei\" isn’t a key: `KeyError: 'Mei'`."},
      {t:"`print(phone.get(\"Mei\", \"unknown\"))`", b:0, why:"`get()` returns the default, \"unknown\", instead of raising an error."},
      {t:"`phone[\"Mei\"] = \"555-0199\"`", b:0, why:"Assigning to a new key adds the pair. Only reading a missing key is an error."},
      {t:"`print(\"555-0101\" in phone)`", b:0, why:"It runs and prints False: `in` checks keys, and \"555-0101\" is a value."},
      {t:"`print(phone[0])`", b:1, why:"Dictionaries aren’t looked up by position. 0 isn’t a key, so this is a KeyError."}
    ]},
    {id:"t2u8-l4-x6", type:"mcq", q:"Hana’s program freezes:\n\n`count = 0`\n`while count < 5:`\n`    print(count)`\n\nWhat’s wrong?", options:[
      {t:"Nothing changes `count`, so `count < 5` stays True forever; add `count += 1` inside the loop", ok:true, why:"Right. This is an infinite loop: it prints 0 forever. Stop it with Ctrl+C, then add the line that moves `count` towards 5."},
      {t:"`while` should be `for`", why:"A `for` loop would work too (`for count in range(5):`), but the `while` is fine once something updates `count`."},
      {t:"`print()` can’t be used inside loops", why:"It can; the loop simply never ends."},
      {t:"The condition should be `count > 5`", why:"That would be False straight away, so the loop wouldn’t run at all."}
    ]},
    {id:"t2u8-l4-x7", type:"number", q:"How many rounds does this loop run?\n\n`n = 1`\n`while n < 50:`\n`    n = n * 3`", answer:4, tol:0, unit:"rounds", why:"n goes 1 → 3 → 9 → 27 → 81. After the fourth round n is 81, which isn’t under 50, so the loop stops: **4** rounds.", wrongs:[
      {v:3, tol:0, why:"After three rounds n is 27, still under 50, so a fourth round runs."},
      {v:5, tol:0, why:"After the fourth round n is 81; the condition is False, so there’s no fifth round."},
      {v:50, tol:0, why:"50 is the limit for n, not the number of rounds."}
    ]}
   ],
   apply:{intro:"Build three small programs with lists, dictionaries and loops. They all work in the Python Lab.", tasks:[
     {t:"Your own grocery total", how:["Copy `grocery.py` from this lesson.","Change the prices dictionary to five things you actually buy, in your own currency.","Put six items in the basket, including one item twice and one item with no price.","Run it, then add a line that also prints how many items had a price."], write:"Paste your program and its output."},
     {t:"A savings or study planner with while", how:["Pick a goal: save an amount, or study a number of hours.","Write a `while` loop that adds a weekly amount until the goal is reached, counting the weeks.","Print the number of weeks with an f-string.","Before running, point to the line that makes the loop end. Then remove it, run, and stop the infinite loop with Ctrl+C (or your editor’s Stop button). The Python Lab stops it for you after 4 seconds."], write:"Paste your program, its output, and what happened without the update line."},
     {t:"Count the words in a paragraph", how:["Copy `wordcount.py` and replace the text with a paragraph you like (a recipe, a news paragraph, song lyrics).","Add `.lower()` before `.split()`.","After the loop, print only the words that appear more than once: loop over `counts.items()` with an `if`.","Notice any words that are counted separately because of punctuation, such as “day” and “day.”."], write:"Which word was most common? What problems did punctuation cause?"}
   ], proof:"A grocery program with your own prices that handles a missing price; a `while` loop with a clear ending (and what happened without it); and a word count of a real paragraph with the repeated words listed."},
   read:[
     {book:"atbs", where:"Chapter 3, “Loops”: “while Loop Statements” and “for Loops and the range() Function”"},
     {book:"atbs", where:"Chapter 6, “Lists”: “The List Data Type” and “Working with Lists”; Chapter 7, “Dictionaries and Structuring Data”"},
     {book:"thinkpy", where:"Chapter 7, “Iteration and Search”; Chapter 9, “Lists”; Chapter 10, “Dictionaries”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u8-l5", title:"Functions, errors and the standard library", minutes:60,
   hook:{q:"What does this program show?\n\n`def add(a, b):`\n`    print(a + b)`\n\n`total = add(2, 3)`\n`print(total)`", options:["5, then 5","5, then None","Just None","An error"], answer:1, reveal:"It shows 5, then None. The function **prints** the sum, but it never **returns** it, so the call `add(2, 3)` gives back Python’s “nothing” value, `None`, and that’s what `total` refers to. Printing shows a value to a person; returning hands it back to the program. This lesson covers writing functions, reading error messages calmly, and borrowing ready-made tools with `import`."},
   goals:[
     "Define functions with `def`, parameters and default values, and call them with arguments",
     "Choose between `return` and `print()`, and explain why a function without `return` gives `None`",
     "Read a traceback from the bottom up, and fix SyntaxError, IndentationError, NameError, TypeError, ValueError, IndexError, KeyError and ZeroDivisionError",
     "Use `import` to borrow tools from the standard library: `math`, `random` and `datetime`"
   ],
   learn:[
    {h:"Functions: name a job, then reuse it", body:[
      {lead:"A function is a named, reusable job: write the steps once, then run them whenever you call the name."},
      "You’ve been calling Python’s built-in functions all along: `print()`, `len()`, `round()`. Now you’ll write your own **[[py-function|functions]]** with `def` (short for “define”):",
      {code:['def greet(name):','    print(f"Hello, {name}!")','','greet("Mei")','greet("Dmitri")'].join("\n"), lang:"py", label:"Defining and calling", pylab:"pl-function", cap:"Output: `Hello, Mei!` then `Hello, Dmitri!`"},
      {list:[
        "`def greet(name):` creates a function called `greet`. Like `if` and `for`, the line ends with a colon and the body is indented.",
        "`name` is a **[[parameter]]**: a placeholder that receives a value each time the function is called.",
        "`greet(\"Mei\")` **calls** the function. The value in the brackets, \"Mei\", is the **[[py-argument|argument]]**; inside the body, `name` refers to it.",
        "Defining a function **doesn’t run it**. The body runs only when the function is called, and it runs again on every call."
      ]},
      "Why bother? A function gives a job a **name**, so code reads like a description of what it does. If the steps change, you fix them in one place. And a tested function can be trusted and reused, in this program and the next.",
      "Function names follow the same rules as variables: lowercase snake_case, ideally a verb that says what it does, such as `greet`, `add_tax` or `count_words`. A function must be defined (higher up in the file) before the line that calls it runs; otherwise you get a NameError."
    ]},
    {h:"return versus print()", body:[
      "This is the single most important idea in the lesson. A function can do two very different things with a result:",
      {table:[
        ["","`print()` inside a function","`return` from a function"],
        ["What it does","Shows the value on the screen, for a person","Hands the value back to the code that called it"],
        ["Can the program use the value afterwards?","No","Yes: store it, add to it, print it, pass it on"],
        ["What the call gives back","`None` (if there’s no `return`)","The returned value"]
      ]},
      {code:['def add_tax(price):','    return price * 1.2','','cost = add_tax(10)','print(cost)','print(add_tax(5) + add_tax(10))'].join("\n"), lang:"py", label:"Returning a value", pylab:"pl-function", cap:"Output: `12.0`, then `18.0`. Because the function returns its answer, the calls can be stored and added."},
      "A function that only prints is like a calculator that shows the answer on its screen but won’t let you copy it. A function that returns is one whose answer you can keep using. As a rule, functions that **work something out** should `return` the result, and let the caller decide whether to print it.",
      "Three details:",
      {list:[
        "`return` **ends the function** straight away. Any lines after it in the body don’t run.",
        "A function with no `return`, or one that reaches its end without meeting a `return`, gives back **[[py-none|None]]**. That’s exactly what happened in the warm-up.",
        "The value a function sends back is its **[[py-return|return value]]**."
      ]},
      {lab:"pl-function", t:"Practise: write a function that returns a result"}
    ]},
    {h:"Default values and named arguments", body:[
      "A parameter can have a **default value**, used when the caller leaves that argument out:",
      {code:['def ticket_total(price, people=1):','    return price * people','','print(ticket_total(8))','print(ticket_total(8, 3))','print(ticket_total(8, people=4))'].join("\n"), lang:"py", label:"A default value", cap:"Output: `8`, `24`, `32`."},
      {list:[
        "`people=1` means: if no second argument is given, use 1.",
        "Arguments are matched to parameters **by position**: in `ticket_total(8, 3)`, 8 goes to `price` and 3 to `people`.",
        "You can also pass an argument **by name**, as in `people=4`. It makes calls easier to read. You’ve seen this already: `sorted(prices, reverse=True)`.",
        "Parameters with defaults come after the ones without."
      ]},
      "Calling with the wrong number of arguments is a TypeError that names the problem, for example `TypeError: ticket_total() missing 1 required positional argument: 'price'`.",
      "Variables you create **inside** a function are **local**: they exist only while that call runs and can’t be seen from outside. That keeps functions independent. To get a value out, return it."
    ]},
    {h:"Reading a traceback, from the bottom up", body:[
      "When something goes wrong while a program runs, Python stops and prints a **[[traceback]]**: a report of where it was and what went wrong. It can look alarming, but it’s the most helpful thing Python does. Here’s a program that works for Amara and fails for Kenji, who has no scores yet:",
      {code:['def average(numbers):','    total = sum(numbers)','    return total / len(numbers)','','def report(name, scores):','    avg = average(scores)','    print(f"{name}: {avg:.1f}")','','report("Amara", [80, 92, 75])','report("Kenji", [])'].join("\n"), lang:"py", label:"scores.py", cap:"The first call prints `Amara: 82.3`. The second stops with the traceback below."},
      {ex:"Traceback (most recent call last):\n  File \"scores.py\", line 10, in <module>\n    report(\"Kenji\", [])\n    ~~~~~~^^^^^^^^^^^^^\n  File \"scores.py\", line 6, in report\n    avg = average(scores)\n  File \"scores.py\", line 3, in average\n    return total / len(numbers)\n           ~~~~~~^~~~~~~~~~~~~~\nZeroDivisionError: division by zero", label:"What Python shows (the file path is shortened)", mono:true},
      "“Most recent call last” is the key: the newest, deepest step is at the **bottom**, so read upwards.",
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="t2u8a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text class="s mono" x="44" y="20">Traceback (most recent call last):</text><rect class="d-panel" x="44" y="32" width="286" height="48" rx="6" stroke-width="1.5"/><text class="mono" x="54" y="52">line 10, in &lt;module&gt;</text><text class="mono" x="54" y="70">report("Kenji", [])</text><rect class="d-panel" x="44" y="90" width="286" height="48" rx="6" stroke-width="1.5"/><text class="mono" x="54" y="110">line 6, in report</text><text class="mono" x="54" y="128">avg = average(scores)</text><rect class="d-gold" x="44" y="148" width="286" height="48" rx="6" stroke-width="2"/><text class="mono" x="54" y="168">line 3, in average</text><text class="mono" x="54" y="186">return total / len(numbers)</text><rect class="d-rose" x="44" y="206" width="286" height="48" rx="6" stroke-width="2.5"/><text class="mono" x="54" y="226">ZeroDivisionError:</text><text class="mono" x="54" y="244">division by zero</text><path class="d-ink" d="M20,250 L20,40" stroke-width="2.5" marker-end="url(#t2u8a5)"/><circle class="d-rose" cx="20" cy="230" r="11" stroke-width="1.5"/><text x="20" y="235" text-anchor="middle">1</text><circle class="d-gold" cx="20" cy="172" r="11" stroke-width="1.5"/><text x="20" y="177" text-anchor="middle">2</text><circle class="d-panel" cx="20" cy="114" r="11" stroke-width="1.5"/><text x="20" y="119" text-anchor="middle">3</text><circle class="d-panel" cx="20" cy="56" r="11" stroke-width="1.5"/><text x="20" y="61" text-anchor="middle">4</text><text x="10" y="290">Read upwards:</text><text class="s" x="10" y="312">1  What went wrong: the error type and message.</text><text class="s" x="10" y="332">2  The line that failed, deepest in the calls.</text><text class="s" x="10" y="352">3  The line that called that function.</text><text class="s" x="10" y="372">4  Where it all started, in the main program.</text><text class="s" x="10" y="396">Fix the cause, which may be higher up.</text></svg>', alt:"A traceback drawn as four stacked boxes with an arrow pointing upwards beside them. Bottom box, numbered 1: ZeroDivisionError: division by zero, what went wrong. Above it, numbered 2: line 3, in average, return total / len(numbers), the line that failed. Above that, numbered 3: line 6, in report, avg = average(scores), the line that called it. Top, numbered 4: line 10, in <module>, report(\"Kenji\", []), where it started in the main program. The note says to fix the cause, which may be higher up.", cap:"Start at the bottom line, then climb: each step up shows who called the step below."},
      {ol:[
        "**The last line** names the error type and gives a message: `ZeroDivisionError: division by zero`.",
        "**Just above** is the line where it happened: line 3, inside `average`, dividing by `len(numbers)`. The `^` and `~` marks (Python 3.11 and later) point at the exact part that failed.",
        "**Above that**, who called it: line 6, in `report`.",
        "**At the top**, where it all began: line 10, the main program (`<module>`), calling `report(\"Kenji\", [])`."
      ]},
      "Now think about **why**. The division is where it broke, but the cause is an empty list arriving from line 10. Fixes could go in either place: check `if not numbers:` in `average`, or don’t call `report` for someone with no scores. The traceback tells you where to look; you decide what the program should do.",
      {tip:"A **SyntaxError** or **IndentationError** looks different: no “Traceback” lines and no calls, just the file, the line and a caret, because Python found the mistake while reading the file, before running any of it."},
      {tip:"The Python Lab shows a shorter report instead of the full traceback: the error type and the line number in your program, that line of code, **Python says:** with Python’s own message, and an explanation in plain words. The line it names is the deepest one in your program (here, line 3), so the “climb upwards” step is up to you: ask where the bad value came from."}
    ]},
    {h:"The common errors, and calm fixes", body:[
      "Errors in Python are called **[[py-exception|exceptions]]**, and each has a type name. These eight cover most of what beginners see:",
      {table:[
        ["Error","Usually means","Calm fix"],
        ["`SyntaxError`","The grammar is broken: missing colon, bracket or quote","Look at that line **and the one before**; Python often notices late"],
        ["`IndentationError`","A block isn’t indented, or indents don’t line up","Four spaces per level, consistently"],
        ["`NameError`","A name Python doesn’t know: a typo, wrong capitals, or used before it was created","Compare spellings; read the “Did you mean” hint"],
        ["`TypeError`","An action on the wrong kind of value, such as `\"Age: \" + 30`","Convert (`str()`, `int()`) or use an f-string"],
        ["`ValueError`","The right type with an unusable value, such as `int(\"twelve\")`","Check the input; ask again or explain the format"],
        ["`IndexError`","A list or string position that doesn’t exist","Remember indexes start at 0; check `len()`"],
        ["`KeyError`","A dictionary key that isn’t there","Check spelling and capitals; use `in` or `get()`"],
        ["`ZeroDivisionError`","Dividing by zero, often an empty list’s `len()`","Check for zero or empty before dividing"]
      ]},
      "Recent Python versions are kind about mistakes: `NameError: name 'mesage' is not defined. Did you mean: 'message'?`, or `NameError: name 'math' is not defined. Did you forget to import 'math'?`. Python 3.14 also spots misspelt keywords when it prints an error in a terminal: for `whille True:` it says `invalid syntax. Did you mean 'while'?` (3.13 says only `invalid syntax`). The Python Lab runs 3.14, so its report shows the hint too.",
      {lab:"pl-fix-name", t:"Practise: fix a NameError"},
      {lab:"pl-fix-type", t:"Practise: fix the TypeErrors in a program that mixes text and numbers"},
      "When a ValueError is something you **expect**, such as a person typing words where you asked for a number, you can catch it with `try` and `except` instead of letting the program stop:",
      {code:['try:','    guests = int(input("Guests? "))','    print(f"Chairs: {guests + 1}")','except ValueError:','    print("Please type a number.")'].join("\n"), lang:"py", label:"Catching a ValueError", cap:"Type `12` and it prints `Chairs: 13`. Type `twelve` and it prints the friendly message instead of a traceback."},
      "Use `except` only for errors you understand and can handle well. Hiding every error makes bugs much harder to find; Unit 9 goes further with debugging.",
      {key:"Calm routine: read the last line, find your line just above it, look at that line and the one before, fix the first error first, and run again."}
    ]},
    {h:"import: borrowing from the standard library", body:[
      "Python comes with a large **[[standard-library|standard library]]**: hundreds of ready-made **[[py-module|modules]]**, each a collection of tools for one area. This is why Python is described as having “batteries included”. To use a module, **`import`** it at the top of your file, then use its tools with a dot:",
      {code:['import math','','print(math.sqrt(81))','print(math.pi)','print(math.ceil(4.1), math.floor(4.9))'].join("\n"), lang:"py", label:"math", cap:"Output: `9.0`, `3.141592653589793`, `5 4`. `ceil` rounds up and `floor` rounds down, always."},
      {code:['import random','','print(random.randint(1, 6))','print(random.choice(["tea", "juice"]))'].join("\n"), lang:"py", label:"random", cap:"A dice roll from 1 to 6 (both ends included, unlike `range()`) and a random drink: different each run."},
      {code:['from datetime import date','','today = date.today()','exam = date(2027, 6, 14)','print(today)','print((exam - today).days, "days left")'].join("\n"), lang:"py", label:"datetime", cap:"Prints today’s date as year-month-day (such as `2026-11-06`) and the number of days until 14 June 2027. The result depends on the day you run it."},
      "`from datetime import date` brings in just the `date` tool, so you write `date.today()` instead of `datetime.date.today()`. Both styles are common.",
      {warn:"Don’t name your own file after a module you import, such as `random.py` or `datetime.py`. Python may import **your** file instead of the real module, giving baffling errors like `module 'random' has no attribute 'randint'`. Recent versions add a hint to rename your file."},
      "Beyond the standard library are hundreds of thousands of extra packages that others have published, installed with a tool called pip. Unit 10 covers them, including how to check a package is real before installing it."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`print()` and `return` do the same thing.”** `print()` shows a value to a person; `return` hands it back to the program. A function without `return` gives `None`.",
        "**“Defining a function runs it.”** The body runs only when the function is called.",
        "**“The top of a traceback is the important part.”** Start at the bottom: the error type, then the line just above it.",
        "**“The error is always on the line Python names.”** That’s where Python noticed. For a SyntaxError, check the line before too; for a runtime error, ask where the bad value came from.",
        "**“An error means I’m bad at this.”** Errors are how Python talks to you. Professionals read them all day.",
        "**“`random.randint(1, 6)` can’t give 6.”** Unlike `range()`, `randint` includes both ends."
      ]}
    ]}
   ],
   try:[
    {id:"t2u8-l5-x1", type:"match", q:"`def greet(name, greeting=\"Hello\"):` then the call `greet(\"Ana\")`. Match each part with what it is.", pairs:[
      ["`def`","The keyword that creates a function","`def` starts every function definition."],
      ["`name`","A parameter","Parameters are the placeholder names in the definition."],
      ["`\"Ana\"`","An argument","Arguments are the actual values passed in a call."],
      ["`greeting=\"Hello\"`","A parameter with a default value","It’s used when the call leaves that argument out, as this one does."]
    ]},
    {id:"t2u8-l5-x2", type:"mcq", q:"Lucía writes:\n\n`def double(n):`\n`    print(n * 2)`\n\n`result = double(4) + 1`\n\nWhat happens?", options:[
      {t:"It prints 8, then stops with a TypeError, because `double(4)` gave back `None`", ok:true, why:"Right. The function prints 8 but returns nothing, so the call is `None`, and `None + 1` is `TypeError: unsupported operand type(s) for +: 'NoneType' and 'int'`. Change `print` to `return`."},
      {t:"`result` becomes 9", why:"That would work only if the function **returned** `n * 2`. Printing shows 8 but doesn’t hand it back."},
      {t:"It prints 9", why:"Nothing prints 9. The function prints 8; then adding 1 to `None` fails."},
      {t:"`result` becomes 8", why:"The `+ 1` is attempted on `None`, which is an error, so `result` is never set."}
    ]},
    {id:"t2u8-l5-x3", type:"number", q:"What does this print?\n\n`def ticket_total(price, people=1):`\n`    return price * people`\n\n`print(ticket_total(6) + ticket_total(6, 3))`", answer:24, tol:0, unit:"", why:"`ticket_total(6)` uses the default `people=1` and returns 6. `ticket_total(6, 3)` returns 18. 6 + 18 = **24**.", wrongs:[
      {v:18, tol:0, why:"That’s only the second call. The first call returns 6 (with the default of 1 person), and the two are added."},
      {v:36, tol:0, why:"That treats both calls as 3 people. The first call leaves `people` out, so it uses the default, 1."},
      {v:12, tol:0, why:"That treats both calls as 1 person. The second call passes 3 for `people`."}
    ]},
    {id:"t2u8-l5-x4", type:"order", q:"A traceback ends like this:\n\n`File \"shop.py\", line 12, in <module>`\n`File \"shop.py\", line 7, in checkout`\n`File \"shop.py\", line 3, in price_of`\n`KeyError: 'jam'`\n\nPut the parts in the order you should **read** them.", items:[
      {t:"`KeyError: 'jam'`: what went wrong", why:"Start at the bottom: the error type and message. Someone looked up the key 'jam' and it isn’t there."},
      {t:"Line 3, in `price_of`: where it failed", why:"The last frame is the deepest call, the exact line that raised the error."},
      {t:"Line 7, in `checkout`: who called `price_of`", why:"One step up shows the caller, which may be where the bad item came from."},
      {t:"Line 12, the main program: where it started", why:"The top frame is the beginning of the chain, often useful for seeing which data was used."}
    ]},
    {id:"t2u8-l5-x5", type:"match", q:"Match each line with the error it causes.", pairs:[
      ["`print(\"Total: \" + 5)`","TypeError","You can’t join text and a number with `+`. Use an f-string or `str(5)`."],
      ["`int(\"five\")`","ValueError","`int()` accepts strings, but this one isn’t written as a number."],
      ["`[\"a\", \"b\"][2]`","IndexError","A two-item list has indexes 0 and 1 only."],
      ["`{\"tea\": 3}[\"Tea\"]`","KeyError","Keys are case-sensitive: \"Tea\" isn’t \"tea\"."],
      ["`prnt(\"hi\")`","NameError","Python doesn’t know the name `prnt` and suggests `print`."],
      ["`10 / 0`","ZeroDivisionError","Dividing by zero has no answer."]
    ]},
    {id:"t2u8-l5-x6", type:"mcq", q:"Fatima’s script starts with `print(math.sqrt(49))` and stops with `NameError: name 'math' is not defined. Did you forget to import 'math'?` What fixes it?", options:[
      {t:"Add `import math` at the top of the file", ok:true, why:"Right. Modules from the standard library must be imported before you use them. The hint says exactly that."},
      {t:"Install `math` from the internet with pip", why:"`math` comes with Python as part of the standard library; it only needs importing."},
      {t:"Change it to `Math.sqrt(49)`", why:"Names are case-sensitive and the module is `math`, lowercase. The missing piece is the import."},
      {t:"Rename the file to `math.py`", why:"Naming your file like a module can hide the real module. Keep your own file names different."}
    ]},
    {id:"t2u8-l5-x7", type:"mcq", q:"Sione’s program has `import random` and then `random.randint(1, 6)`, but it fails with `module 'random' has no attribute 'randint'`. His file is called `random.py`. What’s going on?", options:[
      {t:"Python imported his own `random.py` instead of the real module; renaming his file fixes it", ok:true, why:"Right. Python looks in the script’s own folder first, so a file called `random.py` there hides the standard one. Rename it (for example `dice.py`)."},
      {t:"`randint` was removed from Python", why:"It’s still there. The error comes from importing the wrong file."},
      {t:"He needs `from random import *`", why:"Any form of import would find his own file first. The fix is the file name."},
      {t:"`randint` only works with `range()`", why:"`randint` takes two numbers and needs no `range()`."}
    ]}
   ],
   apply:{intro:"Write and test your own functions, then practise reading tracebacks on purpose. Everything works in the Python Lab, and on a computer.", tasks:[
     {t:"Three small functions", how:["Write `def area(width, height):` that **returns** the area of a rectangle.","Write `def greeting(name, time=\"morning\"):` that returns a string such as `Good morning, Kenji!`.","Write `def average(numbers):` that returns the average, and returns 0 for an empty list.","Call each one at least twice and print the results. Try one call with a named argument."], write:"Paste your functions and their outputs."},
     {t:"A traceback scavenger hunt", how:["Copy `scores.py` from this lesson and run it. On a computer, find the four parts of the traceback, reading from the bottom. In the Python Lab you’ll see the shorter report instead: find the error type, the line it names, and then the lines in your program that led there.","Fix it so Kenji gets the message `Kenji: no scores yet` instead of an error.","Then cause, read and fix three different errors on purpose: a KeyError, a TypeError and an IndentationError.","For each one, write down the last line of the error and the line number it points to."], write:"For each error: the last line, the line number, the cause and your fix."},
     {t:"Borrow from the standard library", how:["Use `random` to roll two dice 10 times in a loop and print each total.","Use `datetime` to print how many days are left until a date that matters to you (a holiday, a deadline, a birthday).","Use `math.ceil()` to work out how many boxes of 6 you need for 50 eggs.","Look up one more function on the official page for one of these modules, at docs.python.org/3/library, and try it."], write:"Paste your code and outputs. Which extra function did you find?"}
   ], proof:"Three tested functions that return values (one with a default); four errors read from the bottom up with their fixes; and a program using `random`, `datetime` and `math`."},
   read:[
     {book:"atbs", where:"Chapter 4, “Functions” (creating functions, arguments and parameters, return values, the None value, named parameters, the call stack, local and global scopes, and exception handling)"},
     {book:"atbs", where:"Chapter 3, “Loops”: “Importing Modules”"},
     {book:"thinkpy", where:"Chapter 3, “Functions” (including 3.7 “Tracebacks”) and Chapter 6, “Return Values”; Chapter 2, section 2.4 “The import statement”"}
   ]
  }
  ],
  checkpoint:["t2u8-q02","t2u8-q06","t2u8-q11","t2u8-q14","t2u8-q17","t2u8-q21","t2u8-q25","t2u8-q29","t2u8-q32","t2u8-q37","t2u8-q40","t2u8-q44"],
  codex:[
   {id:"running-python", title:"Running Python: installing, the REPL and scripts", aka:["python3","py launcher","Python install manager","REPL","IDLE","Thonny","script"], tags:["python","basics","setup"],
    summary:"Python runs through an interpreter: try lines one at a time in the REPL, or save a .py script and run the whole file.",
    levels:{
     starter:[
      "Python is a programming language, and to run it you need a program called the **interpreter**. Think of it as a translator who reads your instructions aloud to the computer.",
      "There are two ways to use it. The **REPL** (you’ll see a `>>>` prompt) answers one line at a time, like a calculator: type `2 + 3`, press Enter, and it shows `5`. A **script** is a saved file ending in `.py`. You run the whole file at once, and it only shows what you ask it to with `print()`.",
      "On a phone, use the Python Lab in this app. On a computer, install Python from python.org (or the Microsoft Store on Windows, or Homebrew on a Mac); Chromebooks and Linux usually have it already. The command to start it is `python3` on Mac, Linux and ChromeOS, and `py` (or `python`) on Windows.",
      {key:"REPL for trying things; scripts for keeping them."}
     ],
     builder:[
      {table:[
        ["Device","Install","Start"],
        ["Windows","Python install manager (python.org or Microsoft Store)","`py` or `python`"],
        ["Mac","python.org installer, or `brew install python`","`python3`"],
        ["ChromeOS","Turn on the Linux development environment","`python3`"],
        ["Linux","Usually preinstalled","`python3`"],
        ["Phone","Nothing: use the Python Lab","Run button"]
      ]},
      "Check the version with `python3 --version` (Windows: `py --version`). Leave the REPL with `exit()` (plain `exit` since Python 3.13).",
      "To run a script, open a [[terminal]] in the folder that holds it and type `python3 hello.py` (Windows: `py hello.py`). Editors do the same when you press Run: **IDLE** comes with python.org’s installers (**Run → Run Module**, F5); **Thonny** is built for beginners and includes its own Python; **VS Code** needs Microsoft’s Python extension.",
      "Differences between REPL and script trip people up. In the REPL, the value of every expression is echoed, and strings are shown with quotes (`'Hello'`). In a script, bare expressions produce no output; use `print()`, which shows strings without quotes.",
      "A new Python version arrives every October (3.14 in 2025, 3.15 in 2026); Python 2 ended in 2020, so ignore tutorials that write `print \"x\"` without brackets.",
      "**Saving scripts.** Write code in a code editor or a plain-text editor, never a word processor: Word and similar apps add formatting and curly quotes that Python can’t read. Keep your scripts in one folder you can find again, such as a `python-practice` folder in Documents, and give files names without spaces, such as `grocery_total.py`."
     ],
     pro:[
      "The reference interpreter is **CPython**, written in C. It compiles your source to bytecode (cached in `__pycache__` folders for imported modules) and runs that on a virtual machine. Other implementations exist; the Python Lab uses **Pyodide**, CPython compiled to WebAssembly so it runs inside a browser. It has no access to your own files or a real terminal: programs read and write files in a temporary folder inside the browser, which goes back to its starting files on every Run or Check, typed answers come from a box filled in before the run, and a program still running after 4 seconds is stopped.",
      "On Windows, the **Python install manager** (from python.org or the Microsoft Store; python.org recommends the Store for most users) installs and updates runtimes and provides the `python`, `py` and `pymanager` commands. Its first launch runs a configuration check, and if no runtime is installed yet, the first `python` or `py` installs the latest one. python.org says the traditional executable installer will stop being released with Python 3.16. Windows also ships “app execution aliases” named `python` and `python3` that open the Microsoft Store if no Python is installed; they’re managed under **Manage app execution aliases** in Settings.",
      "On macOS, `/usr/bin/python3` is an Apple-controlled Python that comes with Xcode or the Command Line Tools (running it first offers to install them); Python’s documentation calls it usually older and incomplete, and warns never to modify or delete it. The python.org installer adds its own `python3` alongside, plus IDLE in Applications. On Debian-based Linux (including ChromeOS’s container), `python` may not exist unless the `python-is-python3` package is installed, and the system Python is used by the operating system itself, so add libraries in a virtual environment (Unit 10) rather than system-wide.",
      "The REPL was rewritten in 3.13 (colour, multi-line editing, `exit` without brackets) and 3.14 adds syntax highlighting. `python3 -i script.py` runs a script and then drops into the REPL with its variables available, handy for exploring."
     ]
    },
    related:["py-values-types","py-errors-tracebacks","what-a-shell-is","shell-on-your-device"],
    read:[{book:"atbs", where:"Introduction: “Downloading and Installing Python”, “Starting IDLE”, “The Interactive Shell”"},{book:"thinkpy", where:"Chapter 1, “Programming as a way of thinking”"}],
    sources:[{t:"Python documentation: Using the Python Interpreter", url:"https://docs.python.org/3/tutorial/interpreter.html"},{t:"python.org: Python install manager release notes", url:"https://www.python.org/downloads/release/pymanager-263/"},{t:"Python documentation: Using Python on Windows", url:"https://docs.python.org/3/using/windows.html"}], checked:"2026-11"},

   {id:"py-values-types", title:"Values, types and variables in Python", aka:["int","float","str","bool","None","type()","variable","assignment","snake_case","round","input"], tags:["python","basics","variables"],
    summary:"Every Python value has a type (int, float, str, bool, NoneType); variables are names tied to values with =.",
    levels:{
     starter:[
      "Programs work with **values**: numbers, text, yes-or-no answers. Each value has a **type**: `int` for whole numbers (42), `float` for decimals (3.5), `str` for text in quotes (\"Amara\"), `bool` for `True` or `False`, and `None` for “nothing”.",
      "A **variable** is a name tied to a value, like a luggage label tied to a suitcase. `city = \"Lagos\"` ties the label `city` to the text \"Lagos\". Later, `city = \"Lima\"` moves the label to a new value.",
      "Quotes matter: `42` is a number you can calculate with, but `\"42\"` is text. And whatever someone types into `input()` arrives as text, so convert it with `int()` or `float()` before doing maths.",
      {key:"Type decides what you can do with a value; a variable is just a name for it."}
     ],
     builder:[
      {table:[
        ["Operator","Meaning","Example"],
        ["`/`","Division, always a float","`7 / 2` → `3.5`"],
        ["`//`","Floor division","`7 // 2` → `3`"],
        ["`%`","Remainder","`7 % 2` → `1`"],
        ["`**` (as in `2 ** 3`)","Power","`8`"]
      ]},
      "Precedence follows maths: powers, then `* / // %`, then `+ -`; brackets first. Mixing int and float gives a float.",
      "Names: letters, digits and underscores, not starting with a digit, case-sensitive, not a keyword. PEP 8 style is `snake_case`; `ALL_CAPS` signals a constant by convention only. Don’t reuse built-in names such as `list`, `sum` or `print`.",
      "**Conversion:** `int(\"30\")` → 30; `int(3.9)` → 3 (truncates); `int(\"3.5\")` and `int(\"thirty\")` raise ValueError; `float(\"3.5\")` → 3.5; `str(30)` → '30'.",
      "**Rounding:** `round(x, n)` rounds halves to the even neighbour (`round(2.5)` is 2, `round(3.5)` is 4), and binary storage means `round(2.675, 2)` is 2.67. For display, an f-string such as `f\"{x:.2f}\"` is usually simplest.",
      "Use `type(x)` to check a value’s type while learning: `print(type(\"42\"))` shows `<class 'str'>`. `None` is the single value of its type, meaning “no value yet” or “nothing returned”; test for it with `if x is None:`. When reading numbers from people, `qty = int(input(\"How many? \"))` converts in one step, but stops with a ValueError if the text isn’t a whole number (Lesson 5 shows how to catch that). And remember that `bool(\"False\")` is True: any non-empty string counts as true."
     ],
     pro:[
      "Python variables are **references**: names bound to objects. Assignment never copies; `b = a` binds a second name to the same object. With immutable values (ints, floats, strings, tuples) this is invisible, because operations create new objects. With mutable ones (lists, dicts) two names can see the same change: after `b = a` and `a.append(4)`, `b` has the 4 too. Use `a.copy()` or `list(a)` when you need a separate list.",
      "Python is **dynamically but strongly typed**: a name can be rebound to any type, but operations don’t silently convert between unrelated types (`\"5\" + 1` is a TypeError, unlike JavaScript). `bool` is a subclass of `int` (`True + True` is 2), a historical quirk worth knowing.",
      "Ints have **arbitrary precision** (`2 ** 100` and even `10 ** 1000` are exact). Floats are IEEE 754 doubles, so `0.1 + 0.2` is `0.30000000000000004`; compare floats with `math.isclose()`, not `==`. `//` and `%` floor towards minus infinity: `-7 // 2` is -4 and `-7 % 2` is 1. For money that must round in a particular way, the `decimal` module offers exact decimal arithmetic and rounding modes such as `ROUND_HALF_UP`.",
      "`input()` always returns `str` (without the trailing newline); `int()` tolerates surrounding whitespace (`int(\" 42 \")` is 42) and underscores between digits (`int(\"1_000\")`).",
      "`type(x) == int` checks an exact type; `isinstance(x, (int, float))` is the usual check because it also accepts subclasses (including `bool`, which may or may not be what you want)."
     ]
    },
    related:["running-python","py-strings","py-conditionals","js-variables"],
    read:[{book:"atbs", where:"Chapter 1, “Python Basics”"},{book:"thinkpy", where:"Chapter 1, “Programming as a way of thinking” and Chapter 2, “Variables and Statements”"}],
    sources:[{t:"Python documentation: An Informal Introduction to Python", url:"https://docs.python.org/3/tutorial/introduction.html"},{t:"Python documentation: Built-in Functions (round, input, int)", url:"https://docs.python.org/3/library/functions.html"},{t:"Python documentation: Floating-Point Arithmetic: Issues and Limitations", url:"https://docs.python.org/3/tutorial/floatingpoint.html"}], checked:"2026-11"},

   {id:"py-strings", title:"Python strings: f-strings, methods and slices", aka:["str","f-string","upper","lower","strip","split","join","replace","slice","len"], tags:["python","strings","text"],
    summary:"Strings hold text; f-strings drop values into them, methods return changed copies, and indexes and slices pick out characters.",
    levels:{
     starter:[
      "A **string** is text in quotes: `\"Hello\"` or `'Hello'`. You can glue strings with `+`, but the easiest way to mix text and values is an **f-string**: put `f` before the quote and values in curly braces, as in `f\"Hi {name}, you have {count} messages\"`.",
      "Strings come with **methods**, actions you call with a dot: `\"tea\".upper()` gives \"TEA\", `\"  hi \".strip()` removes the spaces at the ends, and `\"a,b\".split(\",\")` cuts the text into a list.",
      "Each character has a position number starting from **0**, so in `\"Python\"` the `P` is number 0 and the `n` is number 5. `len(\"Python\")` is 6.",
      {key:"Strings never change: methods hand you a new string, so keep the result."},
      "Text that people type often has stray spaces or capitals, so tidy it with `.strip()` and `.lower()` before comparing it with anything."
     ],
     builder:[
      {table:[
        ["Tool","Example","Result"],
        ["f-string with format","`f\"{13.5:.2f}\"`","`'13.50'`"],
        ["`strip()` / `lower()`","`\" Yes \".strip().lower()`","`'yes'`"],
        ["`replace()`","`\"2026-11-06\".replace(\"-\", \"/\")`","`'2026/11/06'`"],
        ["`split()` / `join()`","`\"-\".join(\"a b\".split())`","`'a-b'`"],
        ["`in`","`\"cat\" in \"concatenate\"`","`True`"],
        ["Slice","`\"Python\"[1:4]`","`'yth'`"]
      ]},
      "Slices take `[start:stop]`, including `start` and excluding `stop`; leave either out to go to that end; negative numbers count from the end. Slicing never raises an error; plain indexing past the end is an IndexError.",
      "Because strings are **immutable**, `name.upper()` on its own line does nothing useful. Write `name = name.upper()`.",
      "Comparison is case-sensitive and goes by character code, so every capital comes before every lowercase letter. Normalise with `.lower()` (or `.casefold()`, which also handles cases such as German ß) before comparing what people type.",
      "**Quotes and special characters.** To put a quote inside a string, use the other kind outside (`\"It's here\"`) or a backslash escape (`'It\\'s here'`). Inside a string, `\\n` is a line break and `\\t` a tab. Triple quotes let a string run over several lines. `\"-\" * 20` repeats a string, handy for a divider line.","Other useful methods: `startswith()`, `endswith()`, `count()`, `find()` (gives -1 when the text isn’t there), `title()`, and `isdigit()`, which checks that typed text is all digits before you call `int()` (it’s False for `\"-1\"` and `\"3.5\"`, so it suits only whole numbers with no minus sign)."
     ],
     pro:[
      "Python 3 strings are sequences of **Unicode code points**, so `len(\"café\")` is 4 and emoji count as one character in most cases (but some emoji and accented letters are built from several code points). `ord(\"a\")` is 97 and `chr(97)` is 'a'.",
      "f-strings (since 3.6) accept any expression and a format specification after a colon: `{x:.2f}` fixed decimals, `{n:,}` thousands separators, `{s:>10}` right-align in 10 characters, `{x=}` (3.8+) prints the expression and its value for quick debugging. Python 3.12 relaxed the rules so the same quotes can be reused inside the braces. Python 3.14 adds **t-strings** (`t\"…\"`), template strings that keep values separate from text so that, for example, database or HTML code can escape them safely.",
      "`split()` with no argument splits on runs of any whitespace and drops empty pieces; `split(\" \")` splits on single spaces and keeps empty strings between double spaces. `\"\".join(list)` requires every item to be a string; `\", \".join([1, 2])` is a TypeError, so convert with `str()` first.",
      "Joining many pieces with `+` in a loop creates a new string each time; collecting pieces in a list and calling `join()` once is the idiomatic, faster approach for large texts.",
      "Because strings are immutable, even `text += \"!\"` builds a new string and moves the name to it; any other name that referred to the old string still sees the old text."
     ]
    },
    related:["py-values-types","py-conditionals","py-lists"],
    read:[{book:"atbs", where:"Chapter 8, “Strings and Text Editing”"},{book:"thinkpy", where:"Chapter 8, “Strings and Regular Expressions”"}],
    sources:[{t:"Python documentation: Built-in Types, Text Sequence Type (str)", url:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str"},{t:"Python documentation: Input and Output (formatted string literals)", url:"https://docs.python.org/3/tutorial/inputoutput.html"}], checked:"2026-11"},

   {id:"py-lists", title:"Python lists", aka:["list","index","append","sorted","sort","len","sum","tuple"], tags:["python","collections","lists"],
    summary:"A list is an ordered, changeable collection in square brackets, indexed from 0.",
    levels:{
     starter:[
      "A **list** keeps several values in order under one name: `basket = [\"eggs\", \"rice\", \"tea\"]`. It’s like a numbered shopping list, except the numbering starts at **0**: `basket[0]` is \"eggs\" and `basket[2]` is \"tea\". `basket[-1]` is always the last item.",
      "Lists can change. `basket.append(\"milk\")` adds an item to the end, and `basket[1] = \"oats\"` replaces one. `len(basket)` tells you how many items there are.",
      "For lists of numbers, `sum()`, `min()` and `max()` do the obvious jobs, and `sum(prices) / len(prices)` gives the average.",
      {key:"Indexes start at 0, so the last index is always one less than the length."},
      "A list can hold any values, and it can grow or shrink while the program runs. Asking for a position past the end, such as `basket[10]` in a three-item list, stops the program with an IndexError."
     ],
     builder:[
      {table:[
        ["Want to…","Write"],
        ["Add to the end","`items.append(x)`"],
        ["Count items","`len(items)`"],
        ["Check membership","`x in items`"],
        ["Get a sorted copy","`sorted(items)` (add `reverse=True` for descending)"],
        ["Sort in place","`items.sort()` (returns `None`)"],
        ["Remove by value","`items.remove(x)` (first match)"],
        ["Take a slice","`items[1:3]`"]
      ]},
      "The classic trap: `items = items.sort()` sets `items` to `None`, because `sort()` changes the list and returns nothing. Use `sorted()` when you want a result.",
      "`items[len(items)]` is always an IndexError. Averages divide by `len()`, so guard against empty lists.",
      "Loop over a list with `for item in items:`. If you also need positions, `for i, item in enumerate(items):` gives both. A **tuple**, `(3, 4)`, is like a list that can’t change, often used for fixed groups such as coordinates or the key–value pairs from `dict.items()`.",
      "Lists inside lists make simple tables: with `rows = [[\"Ana\", 82], [\"Mei\", 91]]`, `rows[1][0]` is \"Mei\". More methods: `items.pop()` removes and returns the last item; `items.insert(0, x)` adds at the front; `items.index(x)` finds a position (ValueError if it isn’t there); `items.count(x)` counts matches. `min()`, `max()`, `sum()` and sorting need items that can be compared or added, so a list mixing numbers and strings fails with a TypeError. `list(\"abc\")` makes `['a', 'b', 'c']`, and `list(range(3))` makes `[0, 1, 2]`."
     ],
     pro:[
      "Lists are **mutable** and hold references. `b = a` makes two names for one list; `a.append(1)` shows up in `b`. Copy with `a.copy()`, `list(a)` or `a[:]` (all shallow: nested lists are still shared; `copy.deepcopy` copies all the way down). A common bug from the same cause: `grid = [[0] * 3] * 3` makes three references to one inner list.",
      "Default arguments are evaluated once, so `def f(items=[]):` shares one list between calls; use `items=None` and create the list inside.",
      "Don’t add or remove items from a list while looping over it; loop over a copy or build a new list. A **list comprehension** does that concisely: `[p * 1.2 for p in prices if p > 1]`.",
      "Performance: indexing, `append()` and `pop()` from the end are fast (constant time on average); `insert(0, x)`, `pop(0)` and `x in items` scan the list, so they slow down as lists grow. For frequent membership checks use a `set`; for queues, `collections.deque`.",
      "`sorted()` and `sort()` are stable and accept `key=`, for example `sorted(names, key=str.lower)` for case-insensitive order.",
      "Slices never raise errors: `items[5:10]` on a short list is just `[]`. Slice assignment (`items[1:3] = [\"x\"]`) replaces a section, and `del items[0]` removes by position. Equality (`==`) compares contents item by item; `is` asks whether two names refer to the very same list."
     ]
    },
    related:["py-loops","py-dicts","py-strings"],
    read:[{book:"atbs", where:"Chapter 6, “Lists”"},{book:"thinkpy", where:"Chapter 9, “Lists” and Chapter 11, “Tuples”"}],
    sources:[{t:"Python documentation: Data Structures (More on Lists)", url:"https://docs.python.org/3/tutorial/datastructures.html"},{t:"Python documentation: Sorting Techniques", url:"https://docs.python.org/3/howto/sorting.html"}], checked:"2026-11"},

   {id:"py-dicts", title:"Python dictionaries", aka:["dict","dictionary","key","value","get","items","KeyError"], tags:["python","collections","dictionaries"],
    summary:"A dictionary stores key–value pairs in curly braces, so you can look values up by name instead of position.",
    levels:{
     starter:[
      "A **dictionary** works like a real dictionary or a phone book: you look something up by its name (the **key**) and get its information (the **value**). `prices = {\"tea\": 3.0, \"cake\": 2.5}` stores two pairs.",
      "`prices[\"tea\"]` gives 3.0. `prices[\"jam\"] = 1.5` adds a new pair, and assigning to an existing key replaces its value. Each key appears only once.",
      "Asking for a key that isn’t there, like `prices[\"milk\"]`, stops the program with a **KeyError**. Check first with `\"milk\" in prices`, or use `prices.get(\"milk\", 0)`, which gives 0 instead of an error.",
      {key:"Lists find things by position; dictionaries find things by key."},
      "Dictionaries suit anything you’d look up by name: prices, stock levels, settings, contact details, or how many times each word appears in a text."
     ],
     builder:[
      {table:[
        ["Want to…","Write"],
        ["Look up (must exist)","`d[key]`"],
        ["Look up with a fallback","`d.get(key, default)`"],
        ["Add or replace","`d[key] = value`"],
        ["Check for a key","`key in d`"],
        ["Loop over pairs","`for k, v in d.items():`"],
        ["Remove a pair","`del d[key]`"]
      ]},
      "Counting is the classic use: start with `counts = {}`; for each word, add 1 if it’s already a key, otherwise set it to 1. With `get()` that’s one line: `counts[w] = counts.get(w, 0) + 1`.",
      "`in`, plain `for` loops and `len()` all work on **keys**. Use `.values()` for values and `.items()` for pairs. Keys are case-sensitive: \"Tea\" and \"tea\" are different.",
      "Since Python 3.7, dictionaries keep the order in which keys were first added. To list counts from biggest to smallest: `sorted(counts.items(), key=lambda pair: pair[1], reverse=True)`.",
      "Dictionaries can hold lists and other dictionaries, which is how real data is often organised: with `member = {\"name\": \"Hana\", \"fees\": [20, 20, 15]}`, `sum(member[\"fees\"])` is 55. A list of such dictionaries, one per person, is a simple table. Keys are usually strings, but numbers and tuples work too. To change a value based on its old value, as in `stock[\"rice\"] -= 1`, the key must already exist, or you get a KeyError. `len(d)` counts the pairs."
     ],
     pro:[
      "Dictionaries are hash tables: lookup, insertion and `in` take roughly constant time however big the dictionary gets, which is why they’re used everywhere (Python itself stores module and object attributes in them).",
      "Keys must be **hashable**: immutable values such as strings, numbers and tuples of those. Lists can’t be keys. Values can be anything, including lists and other dictionaries, which is how JSON data is represented in Python.",
      "Useful tools: `collections.Counter(words)` counts in one step and has `.most_common(n)`; `collections.defaultdict(list)` creates missing values automatically; `d.setdefault(k, [])` does similar for one call; `d1 | d2` (3.9+) merges two dictionaries, with the right side winning.",
      "Don’t add or remove keys while looping over a dictionary (`RuntimeError: dictionary changed size during iteration`); loop over `list(d)` instead. `1` and `1.0` (and `True`) are the same key, because they’re equal and hash equally.",
      "Comprehensions build dictionaries: `{w: len(w) for w in words}`. `dict.fromkeys(names, 0)` starts every count at zero. `d.pop(key, default)` removes and returns a value without a KeyError. The `json` module converts between dictionaries and JSON text (`json.dumps()`, `json.loads()`), which is how Python exchanges data with many web services and saves settings to files. Equality compares contents, not order: `{\"a\": 1, \"b\": 2} == {\"b\": 2, \"a\": 1}` is True."
     ]
    },
    related:["py-lists","py-loops","py-errors-tracebacks"],
    read:[{book:"atbs", where:"Chapter 7, “Dictionaries and Structuring Data”"},{book:"thinkpy", where:"Chapter 10, “Dictionaries”"}],
    sources:[{t:"Python documentation: Data Structures (Dictionaries)", url:"https://docs.python.org/3/tutorial/datastructures.html#dictionaries"},{t:"Python documentation: Built-in Types, Mapping Types (dict)", url:"https://docs.python.org/3/library/stdtypes.html#mapping-types-dict"}], checked:"2026-11"},

   {id:"py-conditionals", title:"Decisions in Python: if, elif, else and indentation", aka:["if","elif","else","comparison","and","or","not","indentation","IndentationError","truthy"], tags:["python","control flow"],
    summary:"if/elif/else runs the first block whose condition is True; indentation marks which lines belong to each block.",
    levels:{
     starter:[
      "Programs make decisions with **if**. Python asks a yes-or-no question, a **condition** such as `age < 12`, and runs the indented lines underneath only if the answer is True.",
      "`elif` (“else if”) adds more questions, checked one by one, and `else` catches everything left over. Python runs only the **first** block whose question is True, then skips the rest.",
      "In Python, **indentation is grammar**. The lines indented under the colon belong to the `if`; the first line back at the left edge is outside it. Use four spaces per level, as editors do automatically.",
      {key:"Colon at the end of the question, indented block underneath, first True wins."},
      "The questions are comparisons such as `==` (equal), `!=` (not equal), `<` and `>=`, and each one gives True or False. Remember: one `=` stores a value; two `==` compare."
     ],
     builder:[
      "Comparisons: `==`, `!=`, `<`, `>`, `<=`, `>=`. One `=` assigns; two compare (`if x = 5:` is a SyntaxError that suggests `==`). `\"5\" == 5` is False: Python doesn’t convert types. Chains such as `0 <= score <= 100` work.",
      "Combine with `and` (both), `or` (at least one) and `not` (flip). Put the most specific `elif` tests first, because the first True branch wins.",
      "Any value can be a condition. **Falsy** values: `False`, `None`, `0`, `0.0`, `\"\"`, and empty lists, tuples and dicts. Everything else is truthy, including `\"0\"`, `\"False\"` and `\" \"`. So `if items:` means “if the list isn’t empty”.",
      {table:[
        ["Message","Fix"],
        ["`expected ':'`","Add the colon to the `if`/`elif`/`else`/`for`/`def` line"],
        ["`expected an indented block`","Indent the body under the colon"],
        ["`unexpected indent`","Remove indentation where no block was opened"],
        ["`unindent does not match any outer indentation level`","Line up with an existing level (4, 8… spaces)"]
      ]},
      "An `if` inside another `if` (nesting) works, but each level adds four spaces; two or three levels deep is usually a sign to combine conditions with `and`, or to move the logic into a function. `in` makes tidy conditions: `if answer in (\"yes\", \"y\"):`. String comparisons are case-sensitive and go by character codes, so `\"apple\" < \"Banana\"` is False; compare `.lower()` versions to sort or match words. Test the boundaries of every band (49, 50, 51) when you write a chain of `elif`s."
     ],
     pro:[
      "`and` and `or` **short-circuit** and return one of their operands, not necessarily a bool: `name or \"guest\"` gives `name` if it’s non-empty, otherwise \"guest\". The right side isn’t evaluated when the left decides the result, so `if items and items[0] > 0:` is safe for empty lists.",
      "Use `is` only for identity checks against singletons: `if x is None:`. Comparing to `True` with `==` is unnecessary (`if done:`).",
      "Python 3.10 added `match` statements (structural pattern matching), which can replace long `elif` chains that compare one value against many patterns, including the shapes of lists and dictionaries.",
      "The conditional expression `label = \"adult\" if age >= 18 else \"child\"` fits a choice into one line; keep it for simple cases.",
      "Indentation rules: tabs and spaces may not be mixed inconsistently (TabError). PEP 8 recommends four spaces and lines of at most 79 characters. Code inside brackets can continue onto the next line without any special character, which is the preferred way to wrap long conditions.",
      "Comparing floats with `==` is fragile: `0.1 + 0.2 == 0.3` is False, so use `math.isclose(a, b)` or compare rounded values. Values that can’t be ordered raise an error: `3 < \"4\"` is `TypeError: '<' not supported between instances of 'int' and 'str'`."
     ]
    },
    related:["py-values-types","py-strings","py-loops","py-errors-tracebacks"],
    read:[{book:"atbs", where:"Chapter 2, “if-else and Flow Control”"},{book:"thinkpy", where:"Chapter 5, “Conditionals and Recursion”"}],
    sources:[{t:"Python documentation: More Control Flow Tools (if statements)", url:"https://docs.python.org/3/tutorial/controlflow.html"},{t:"PEP 8: Style Guide for Python Code", url:"https://peps.python.org/pep-0008/"}], checked:"2026-11"},

   {id:"py-loops", title:"Loops in Python: for, range() and while", aka:["for loop","while loop","range","break","infinite loop","accumulator","off-by-one"], tags:["python","control flow","loops"],
    summary:"for repeats once per item (or per number from range()); while repeats as long as a condition stays True.",
    levels:{
     starter:[
      "Loops repeat work so you don’t have to. A **for loop** runs its indented body once for each item: `for guest in guests:` greets every guest in a list, however many there are.",
      "`range()` makes numbers to loop over. `range(5)` gives 0, 1, 2, 3, 4: five numbers, starting at 0, stopping **before** 5. `range(1, 11)` gives 1 to 10.",
      "A **while loop** repeats as long as a condition is True, such as “while the savings are under 100”. Something inside the loop must change, or it never stops: an **infinite loop**. Press Ctrl+C to stop one in a terminal.",
      {key:"for: once per item. while: until the condition turns False."},
      "Most loops follow one simple shape: set something up before the loop, update it inside, and use the result after."
     ],
     builder:[
      "**Running total (accumulator):** start a variable at 0 before the loop, update it inside, use it after. The same shape counts matches, finds the biggest value or builds a new list.",
      {table:[
        ["`range(...)`","Gives"],
        ["`range(4)`","0, 1, 2, 3"],
        ["`range(2, 6)`","2, 3, 4, 5"],
        ["`range(0, 20, 5)`","0, 5, 10, 15"],
        ["`range(3, 0, -1)`","3, 2, 1"]
      ]},
      "Loop over a dictionary’s pairs with `for key, value in d.items():`, over a string’s characters with `for ch in text:`, and over positions and items together with `enumerate()`.",
      "`break` leaves a loop immediately; `continue` skips to the next round. `while True:` with a `break` is a clear way to write “keep asking until the answer is valid”.",
      "Off-by-one errors come from the stop value: `range(1, 10)` stops at 9. When a loop does one round too many or too few, check the end number first, then whether you used `<` or `<=`.",
      "A classic `while` job is checking what someone typed:",{code:['age = input("Age: ")','while not age.isdigit():','    age = input("Digits only, please: ")','age = int(age)'].join("\n"), lang:"py"},"The loop keeps asking until the answer is all digits, so `int()` can’t fail afterwards. A loop inside another loop (nesting) runs the inner loop completely for each round of the outer one."
     ],
     pro:[
      "A `for` loop works on any **iterable**: lists, strings, dicts, files (line by line), and lazy objects like `range()` that produce values on demand without building a list. `range(1_000_000_000)` costs almost no memory.",
      "Loops can have an `else` clause, which runs only if the loop finished without `break`; handy for search loops, but surprising to many readers, so comment it.",
      "Prefer direct iteration (`for item in items`) over `for i in range(len(items))`. Use `zip(a, b)` to walk two lists in step, and comprehensions for building new lists or dicts.",
      "The Python Lab runs your program away from the page and stops it if it’s still running after 4 seconds, then starts a fresh Python, so an infinite loop there costs nothing. In scripts, a guard such as a maximum number of rounds is cheap insurance when a loop depends on outside data.",
      "Modifying a list while iterating over it skips or repeats items; iterate over a copy or build a new list.",
      "`break` leaves only the innermost loop; to leave nested loops at once, put them in a function and `return`. `enumerate(items, start=1)` numbers items from 1 for display. Loop variables keep their last value after the loop ends, which is occasionally handy and occasionally confusing. For long-running loops, an occasional `print()` of progress shows that the program hasn’t frozen."
     ]
    },
    related:["py-lists","py-dicts","py-conditionals","js-arrays-loops"],
    read:[{book:"atbs", where:"Chapter 3, “Loops”"},{book:"thinkpy", where:"Chapter 7, “Iteration and Search”"}],
    sources:[{t:"Python documentation: More Control Flow Tools (for, range, break)", url:"https://docs.python.org/3/tutorial/controlflow.html"},{t:"Python documentation: The while statement", url:"https://docs.python.org/3/reference/compound_stmts.html#the-while-statement"}], checked:"2026-11"},

   {id:"py-functions", title:"Python functions: def, parameters and return", aka:["def","function","parameter","argument","return","None","default value","keyword argument","scope"], tags:["python","functions"],
    summary:"def creates a named, reusable block; parameters receive arguments, and return hands a value back (or None).",
    levels:{
     starter:[
      "A **function** is a named job you can run again and again. You define it once with `def`, then **call** it by name with brackets:",
      {code:['def greet(name):','    print(f"Hello, {name}!")','','greet("Ana")'].join("\n"), lang:"py"},
      "`name` is a **parameter**, a placeholder; \"Ana\" is the **argument**, the actual value for this call.",
      "The big idea: **`print()` shows a value; `return` hands it back.** A function that returns its answer lets the rest of the program store it, add to it or print it. A function with no `return` gives back `None`, Python’s “nothing”.",
      {key:"Functions that work something out should return the result."},
      "Functions also keep programs tidy: instead of repeating the same five lines in three places, you write them once and call the function three times. If something needs fixing, you fix it once."
     ],
     builder:[
      {code:['def ticket_total(price, people=1):','    return price * people','','print(ticket_total(8))','print(ticket_total(8, people=3))'].join("\n"), lang:"py"},
      "This prints 8 and 24. `people=1` is a **default**; `people=3` is a **keyword (named) argument**. Positional arguments are matched in order; parameters with defaults go last.",
      "`return` ends the function immediately. Every path through a function should reach a `return` if callers expect a value; otherwise some calls quietly give `None`, which later causes `TypeError: unsupported operand type(s) … 'NoneType'`.",
      "Variables created inside a function are **local**: they vanish when the call ends and don’t clash with names elsewhere. Pass data in as arguments and send it out with `return`, rather than reaching for outside variables.",
      "A function must be defined before the line that calls it runs. Calling with too few or too many arguments raises a TypeError that names the missing parameter.",
      "A function can call other functions, and a well-organised program is often a handful of small functions plus a few lines at the bottom that call them. Name functions with verbs (`calculate_total`, `print_receipt`) and keep each to one job. If you find yourself copying and pasting code, that’s usually a function waiting to be written. Test a new function by calling it with values whose answers you already know, including awkward ones such as 0 or an empty list."
     ],
     pro:[
      "Arguments are passed **by object reference**: the parameter is a new name for the caller’s object. Rebinding the parameter doesn’t affect the caller, but mutating a passed list or dict does.",
      "Defaults are evaluated once, when `def` runs. A mutable default (`def add(item, items=[])`) is shared across calls, a famous bug; use `None` and create the list inside.",
      "Return several values as a tuple: `return low, high`, then unpack with `lo, hi = bounds(nums)`.",
      "Docstrings (a string as the first line of the body) document a function and appear in `help()`. Type hints such as `def area(w: float, h: float) -> float:` are not enforced at run time but help editors and checkers.",
      "Scope lookup follows **LEGB**: local, enclosing function, global (module), built-in. Assigning to a name inside a function makes it local for the whole function, which explains `UnboundLocalError` when you read it before assigning. `global` exists but is rarely the right answer.",
      "Small, single-purpose functions that return values are easy to test with `assert` (Unit 10).",
      "Functions are values too: you can store them in variables, put them in lists and pass them to other functions, as in `sorted(names, key=len)`. `lambda` makes a small unnamed function for such cases: `key=lambda pair: pair[1]`."
     ]
    },
    related:["py-errors-tracebacks","py-modules","js-functions"],
    read:[{book:"atbs", where:"Chapter 4, “Functions”"},{book:"thinkpy", where:"Chapter 3, “Functions” and Chapter 6, “Return Values”"}],
    sources:[{t:"Python documentation: More Control Flow Tools (Defining Functions)", url:"https://docs.python.org/3/tutorial/controlflow.html#defining-functions"}], checked:"2026-11"},

   {id:"py-errors-tracebacks", title:"Python errors and tracebacks", aka:["traceback","exception","SyntaxError","IndentationError","NameError","TypeError","ValueError","IndexError","KeyError","ZeroDivisionError","try","except"], tags:["python","errors","debugging"],
    summary:"A traceback lists the calls that led to an error, newest last: read the bottom line first, then climb.",
    levels:{
     starter:[
      "When Python can’t carry on, it stops and prints an error report called a **traceback**. It looks scary but it’s a gift: it says what went wrong and where.",
      "Read it **from the bottom up**. The last line names the error type and explains it, for example `ZeroDivisionError: division by zero`. Just above is the line of your code where it happened. Further up are the lines that led there.",
      "Most beginner errors are small: a missing colon or bracket (SyntaxError), a line not indented (IndentationError), a typo in a name (NameError), or mixing text and numbers (TypeError). Python often adds a hint such as “Did you mean: 'print'?”.",
      {key:"Bottom line first, then your line just above it. Fix the first error, run again."}
     ],
     builder:[
      {table:[
        ["Error","Typical cause"],
        ["SyntaxError","Missing `:` `)` or quote; check the line before too"],
        ["IndentationError","Body not indented, or levels don’t line up"],
        ["NameError","Typo, wrong capitals, missing import, used before assigned"],
        ["TypeError","Wrong kind of value: `\"a\" + 1`, `None + 1`, wrong number of arguments"],
        ["ValueError","Right type, bad value: `int(\"twelve\")`"],
        ["IndexError","Position past the end of a list or string"],
        ["KeyError","Missing dictionary key (case matters)"],
        ["ZeroDivisionError","Dividing by zero, often `len()` of an empty list"]
      ]},
      "A runtime traceback has a frame per call, outermost first, each with file, line number and function name (`<module>` is the main program). Since Python 3.11, `^` and `~` marks point at the exact sub-expression. SyntaxErrors appear before anything runs and have no call frames.",
      "Handle **expected** problems with `try`/`except SpecificError:`, for example asking again when `int(input())` raises ValueError. Never write a bare `except:` that hides every error.",
      "Good habits when stuck: copy the last line of the traceback, minus your own file and variable names, into a search engine, because many people have met the same message. Change one thing at a time and run again, so you know what fixed it. And when an error seems to point at a perfectly good line, look at the line before: an unclosed bracket on line 4 is often reported on line 5."
     ],
     pro:[
      "Exceptions are objects in a class hierarchy: `IndexError` and `KeyError` are both `LookupError`s; nearly everything derives from `Exception`. Catch the narrowest class you can handle, keep the `try` block small, and use `else` (runs if no exception) and `finally` (always runs) to separate concerns.",
      "When an exception is raised while handling another, the traceback shows both, joined by “During handling of the above exception, another exception occurred”; `raise NewError(...) from err` marks the link as deliberate. Python 3.11 added `ExceptionGroup` and notes (`err.add_note()`).",
      "Error messages keep improving: 3.10 added “Did you mean” for names and attributes and better bracket diagnostics; 3.12 added “Did you forget to import”; 3.13 coloured tracebacks and warns when your file shadows a standard-library module; 3.14 suggests misspelt keywords (`whille` → `while`). Don’t rely on exact wording in code; match on exception types.",
      "The Python Lab (Pyodide) doesn’t print a full traceback. It reports the exception type, Python’s message, and the line in your program where it happened (the deepest frame in your code), plus a plain-language explanation. To see every frame, run the same code with Python on a computer.",
      "The `traceback` module formats tracebacks yourself (for logs), and `python3 -X dev` turns on extra runtime checks while developing.",
      "`assert condition, \"message\"` raises AssertionError when the condition is False, a cheap way to check your assumptions while developing (Unit 10 uses it for tests)."
     ]
    },
    related:["py-functions","py-conditionals","reading-tracebacks","debugging-strategies","js-errors"],
    read:[{book:"atbs", where:"Chapter 4, “Functions”: “The Call Stack” and “Exception Handling”; Chapter 5, “Debugging”"},{book:"thinkpy", where:"Chapter 3, “Functions”: section 3.7 “Tracebacks”"}],
    sources:[{t:"Python documentation: Errors and Exceptions", url:"https://docs.python.org/3/tutorial/errors.html"},{t:"Python documentation: Built-in Exceptions", url:"https://docs.python.org/3/library/exceptions.html"}], checked:"2026-11"},

   {id:"py-modules", title:"Modules, import and the standard library", aka:["import","module","standard library","math","random","datetime","from import"], tags:["python","modules","standard library"],
    summary:"A module is a file of ready-made tools; import brings it into your program, and Python ships with hundreds in its standard library.",
    levels:{
     starter:[
      "You don’t have to write everything yourself. A **module** is a file of ready-made tools, and Python comes with hundreds of them, called the **standard library**: tools for maths, random numbers, dates, files, the internet and much more.",
      "To use a module, write `import` and its name at the top of your program, then use its tools with a dot: `import math` and then `math.sqrt(81)` gives 9.0. `import random` and then `random.randint(1, 6)` rolls a dice.",
      "If you forget the import, Python says something like `NameError: name 'math' is not defined. Did you forget to import 'math'?`.",
      {key:"import first, then module.tool()."},
      "There are modules for so many jobs that experienced programmers usually check the standard library before writing something from scratch."
     ],
     builder:[
      {table:[
        ["Module","Useful tools"],
        ["`math`","`sqrt`, `ceil` (round up), `floor` (round down), `pi`"],
        ["`random`","`randint(a, b)` (both ends included), `choice(list)`, `shuffle(list)`"],
        ["`datetime`","`date.today()`, `date(2027, 6, 14)`, subtracting dates gives days"],
        ["`statistics`","`mean`, `median`"],
        ["`csv`, `pathlib`","Files and folders (Unit 9)"]
      ]},
      "`from datetime import date` imports one name, so you write `date.today()`. `import datetime` then needs `datetime.date.today()`. Avoid `from module import *`, which makes it unclear where names come from.",
      "**Don’t name your files after modules.** A file called `random.py` in your project folder is imported instead of the real module, so `random.randint` “doesn’t exist”. Rename your file.",
      "The official list is the Python Standard Library reference at docs.python.org, with a page per module.",
      "Other handy standard modules: `statistics` (`mean`, `median`, `mode`), `pathlib` and `shutil` for files and folders, `csv` and `json` for data files, `time` (`time.sleep(2)` pauses for two seconds) and `secrets` for passwords. To explore a module in the REPL, `import math` then `dir(math)` lists its names, and `help(math.ceil)` shows the documentation for one function (press q to leave the help screen in a terminal). Put imports at the top of the file, one per line, so readers see at a glance what the program relies on. Importing the same module twice is harmless."
     ],
     pro:[
      "`import` searches `sys.path` in order: the script’s directory first, then the standard library, then installed packages (`site-packages`). That order is why local files can shadow standard modules; Python 3.13 detects this and suggests renaming.",
      "A module runs its top-level code once, on first import, and is cached in `sys.modules`. The idiom `if __name__ == \"__main__\":` lets a file work both as an importable module and as a script.",
      "`random` is **not** for security: use the `secrets` module for passwords and tokens. `datetime` objects can be naive or time-zone-aware; `zoneinfo` (3.9+) supplies time zones. For exact decimal money arithmetic use `decimal`.",
      "Third-party packages from PyPI are installed with pip into a virtual environment (Unit 10). Check names carefully: attackers publish look-alike packages, and AI tools sometimes suggest packages that don’t exist.",
      "Aliases such as `import statistics as st` are fine for long names; well-known conventions (`import numpy as np`) are worth following so others can read your code.",
      "Your own modules work the same way: put functions in `helpers.py` next to your script, write `import helpers`, then call `helpers.some_function()`. `importlib.reload(helpers)` re-runs an edited module during a long REPL session. Old modules are occasionally removed: Python 3.13 removed several outdated ones, such as `cgi`, so check the documentation for your version."
     ]
    },
    related:["py-functions","py-errors-tracebacks","running-python","packages-venv"],
    read:[{book:"atbs", where:"Chapter 3, “Loops”: “Importing Modules”"},{book:"thinkpy", where:"Chapter 2, “Variables and Statements”: section 2.4 “The import statement”"}],
    sources:[{t:"Python documentation: Modules", url:"https://docs.python.org/3/tutorial/modules.html"},{t:"Python documentation: Brief Tour of the Standard Library", url:"https://docs.python.org/3/tutorial/stdlib.html"},{t:"Python documentation: The Python Standard Library", url:"https://docs.python.org/3/library/index.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"python", term:"Python", def:"A free, general-purpose programming language designed to be easy to read, used for automation, data analysis, science, websites and teaching.", codex:"running-python"},
   {id:"interpreter", term:"Interpreter", def:"The program that reads Python code and carries it out. Installing Python means installing the interpreter and its standard library.", codex:"running-python"},
   {id:"repl", term:"REPL", def:"Read–evaluate–print loop: Python’s interactive mode with the >>> prompt, which runs one line at a time and shows each result.", codex:"running-python"},
   {id:"py-comment", term:"Comment (Python)", def:"A note for humans that Python ignores: everything from # to the end of the line, unless the # is inside quotes.", codex:"running-python"},
   {id:"py-variable", term:"Variable (Python)", def:"A name tied to a value with =, such as price = 4.5. Assigning again moves the name to a new value.", codex:"py-values-types"},
   {id:"integer", term:"Integer (int)", def:"A whole number without a decimal point, such as 42 or -7. Python’s type for them is int.", codex:"py-values-types"},
   {id:"float", term:"Float", def:"A number with a decimal point, such as 3.5 or 2.0. Floats are stored in binary, so some decimals are slightly approximate.", codex:"py-values-types"},
   {id:"py-string", term:"String (Python)", def:"A piece of text in quotes, such as \"Amara\" or '42'. Python’s type for it is str; strings can’t be changed, only replaced.", codex:"py-strings"},
   {id:"py-none", term:"None", def:"Python’s value for “nothing here”. A function that doesn’t return anything gives back None.", codex:"py-values-types"},
   {id:"snake-case", term:"snake_case", def:"Writing names in lowercase with underscores between words, such as ticket_price. It’s the standard style for Python variables and functions.", codex:"py-values-types"},
   {id:"floor-division", term:"Floor division (//)", def:"Division that drops the remainder and rounds down: 7 // 2 is 3. Pair it with % to get the remainder.", codex:"py-values-types"},
   {id:"type-conversion", term:"Type conversion", def:"Turning a value into another type, such as int(\"30\") to make the number 30 from text typed into input().", codex:"py-values-types"},
   {id:"f-string", term:"f-string", def:"A string with f before the opening quote, in which values in curly braces are filled in, such as f\"Total: {total:.2f}\".", codex:"py-strings"},
   {id:"py-method", term:"Method (Python)", def:"A function that belongs to a value and is called with a dot, such as text.upper() or basket.append(\"tea\").", codex:"py-strings"},
   {id:"py-index", term:"Index (Python)", def:"A position number in a string or list, counted from 0. Negative indexes count from the end: -1 is the last item.", codex:"py-lists"},
   {id:"py-slice", term:"Slice", def:"A range of a string or list, written [start:stop]. It includes start and stops before stop: \"Python\"[0:3] is 'Pyt'.", codex:"py-strings"},
   {id:"indentation", term:"Indentation", def:"Spaces at the start of a line. In Python they’re part of the grammar: lines indented under a colon form a block. The standard is four spaces.", codex:"py-conditionals"},
   {id:"py-list", term:"List (Python)", def:"An ordered, changeable collection in square brackets, such as [\"eggs\", \"tea\"]. Items are numbered from 0.", codex:"py-lists"},
   {id:"py-tuple", term:"Tuple", def:"An ordered collection in round brackets, such as (3, 4), that can’t be changed once made. Useful for fixed pairs.", codex:"py-lists"},
   {id:"py-dict", term:"Dictionary (dict)", def:"A collection of key–value pairs in curly braces, such as {\"tea\": 3.0}. You look values up by key, not by position.", codex:"py-dicts"},
   {id:"py-for-loop", term:"for loop (Python)", def:"A loop that runs its indented body once for each item in a list, string, dictionary or range().", codex:"py-loops"},
   {id:"py-while-loop", term:"while loop", def:"A loop that repeats as long as its condition is True. Something inside must change the condition, or it never ends.", codex:"py-loops"},
   {id:"py-function", term:"Function (Python)", def:"A named, reusable block of code, defined with def and run by calling its name with brackets, such as greet(\"Ana\").", codex:"py-functions"},
   {id:"py-argument", term:"Argument", def:"A value you pass into a function when you call it, such as \"Ana\" in greet(\"Ana\"). The function receives it in a parameter.", codex:"py-functions"},
   {id:"py-return", term:"Return value", def:"The value a function hands back to its caller with return. Without return, a Python function gives back None.", codex:"py-functions"},
   {id:"traceback", term:"Traceback", def:"Python’s error report: the chain of calls that led to an error, most recent last, ending with the error type and message. Read it from the bottom up.", codex:"py-errors-tracebacks"},
   {id:"py-exception", term:"Exception", def:"Python’s name for an error that happens while a program runs, such as ValueError or KeyError. Uncaught, it stops the program with a traceback.", codex:"py-errors-tracebacks"},
   {id:"py-module", term:"Module", def:"A file of Python code, usually ready-made tools, that you bring into a program with import, such as math or random.", codex:"py-modules"},
   {id:"standard-library", term:"Standard library", def:"The large collection of modules that comes with Python, such as math, random, datetime and csv, ready to import without installing anything.", codex:"py-modules"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u8-q01", lesson:"t2u8-l1", level:1, q:"What is the Python interpreter?", options:[
     {t:"The program that reads Python code and carries it out", ok:true, why:"Installing Python means installing the interpreter (plus its standard library). Editors and the Lab hand your code to it."},
     {t:"A website that translates Python into English", why:"No translation into English happens; the interpreter runs the instructions."},
     {t:"The editor you type code into", why:"Editors such as IDLE or VS Code are where you write code; the interpreter is what runs it."},
     {t:"A paid add-on needed for scripts", why:"Python and its interpreter are free from python.org."}
   ]},
   {id:"t2u8-q02", lesson:"t2u8-l1", level:2, q:"In the REPL, Kenji types `7 * 6` and sees 42. He saves the same line in `calc.py` and runs it. What appears?", options:[
     {t:"Nothing", ok:true, why:"A script only shows what you `print()`. The REPL echoes results automatically; scripts don’t. `print(7 * 6)` would show 42."},
     {t:"42", why:"That’s the REPL’s behaviour. In a script, a bare expression is worked out and discarded."},
     {t:"7 * 6", why:"Nothing is printed at all; and if it were, it would be the result, not the text."},
     {t:"A SyntaxError", why:"`7 * 6` is valid Python; it just produces no output in a script."}
   ]},
   {id:"t2u8-q03", lesson:"t2u8-l1", level:1, q:"Which command usually starts Python on a Mac or a Chromebook’s Linux terminal?", options:[
     {t:"`python3`", ok:true, why:"On macOS and Linux the command is `python3`; plain `python` often doesn’t exist."},
     {t:"`py`", why:"`py` is the launcher on Windows."},
     {t:"`run python`", why:"There’s no `run` command; you type the interpreter’s name."},
     {t:"`start.py`", why:"That would be a file name, not the command that starts the interpreter."}
   ]},
   {id:"t2u8-q04", lesson:"t2u8-l1", level:2, q:"What does `print(\"Score:\", 3 + 4)` show?", options:[
     {t:"Score: 7", ok:true, why:"The text is printed as it is, the sum is worked out, and `print()` puts a space between the two arguments."},
     {t:"Score: 3 + 4", why:"`3 + 4` is outside the quotes, so it’s calculated."},
     {t:"Score:7", why:"`print()` separates its arguments with a space by default."},
     {t:"\"Score:\" 7", why:"`print()` doesn’t show the quotes around strings."}
   ]},
   {id:"t2u8-q05", lesson:"t2u8-l1", level:1, q:"In Python, what does `#` start (outside quotes)?", options:[
     {t:"A comment that runs to the end of the line", ok:true, why:"Python ignores everything from `#` to the end of the line."},
     {t:"A number", why:"Numbers are written with digits; `#` marks a comment."},
     {t:"A heading for the output", why:"Comments never appear in the output."},
     {t:"A block that must be indented", why:"Blocks start after a colon; `#` starts a comment."}
   ]},
   {id:"t2u8-q06", lesson:"t2u8-l1", level:3, q:"Mei’s script prints `Tickets: #1 to #40` correctly, although her line contains `#`. Why wasn’t the rest of the line treated as a comment?", options:[
     {t:"The `#` characters are inside the quotes, so they’re part of the string", ok:true, why:"A `#` only starts a comment outside a string. Inside quotes it’s an ordinary character."},
     {t:"Comments only work at the start of a line", why:"A comment can follow code on the same line; the rule is about quotes."},
     {t:"Python ignores `#` when followed by a digit", why:"Digits don’t matter. Being inside the string is what matters."},
     {t:"`print()` turns comments back on", why:"`print()` has nothing to do with comments; it just shows its string."}
   ]},
   {id:"t2u8-q07", lesson:"t2u8-l1", level:3, q:"Tomás, on Windows, types `python3 --version` and the Microsoft Store opens. What’s the most likely situation?", options:[
     {t:"Python isn’t installed yet; Windows’ built-in shortcut is offering the Store", ok:true, why:"Windows has app shortcuts named `python` and `python3` that open the Store when no Python is installed. Install it (for example with the Python install manager), then use `py`."},
     {t:"His computer has a virus", why:"Opening the Store is a normal Windows shortcut for a missing Python."},
     {t:"Python only works on Mac and Linux", why:"Python runs on Windows; the command there is usually `py` or `python`."},
     {t:"`--version` is a typo for `-version`", why:"`--version` is correct. The problem is that no Python is installed."}
   ]},
   {id:"t2u8-q08", lesson:"t2u8-l1", level:3, q:"Priya only has a phone and wants to practise this unit. What’s the best option?", options:[
     {t:"Use the Python Lab in this app, which runs Python in the page", ok:true, why:"The Lab runs a real Python 3.14 interpreter in the browser, so nothing needs installing."},
     {t:"She can’t learn Python without a computer", why:"Every exercise here works in the Lab, and the lessons can be read anywhere."},
     {t:"Type Python into the phone’s web address bar", why:"Browsers don’t run Python typed into the address bar."},
     {t:"Download a `.py` file and tap it", why:"Phones don’t include a Python interpreter, and running files from unknown sources is risky."}
   ]},
   {id:"t2u8-q09", lesson:"t2u8-l1", level:2, q:"Which is valid Python 3?", options:[
     {t:"`print(\"Hello\")`", ok:true, why:"`print` is lowercase and needs brackets, with the text in quotes."},
     {t:"`print \"Hello\"`", why:"That’s Python 2 style, which ended in 2020. Python 3 needs brackets."},
     {t:"`Print(\"Hello\")`, with a capital P", why:"Python is case-sensitive: `Print` is a NameError."},
     {t:"`print(Hello)`", why:"Without quotes, `Hello` is treated as a variable name, which doesn’t exist: a NameError."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u8-q10", lesson:"t2u8-l2", level:1, q:"What type is `\"3.5\"`?", options:[
     {t:"str", ok:true, why:"The quotes make it text, whatever characters are inside."},
     {t:"float", why:"`3.5` without quotes would be a float. The quotes make it a string."},
     {t:"int", why:"It isn’t a whole number, and it’s in quotes anyway."},
     {t:"bool", why:"Only `True` and `False` are booleans."}
   ]},
   {id:"t2u8-q11", lesson:"t2u8-l2", level:2, q:"What does `print(17 // 5, 17 % 5)` show?", options:[
     {t:"3 2", ok:true, why:"17 // 5 is 3 (whole fives) and 17 % 5 is 2 (left over): 3 × 5 + 2 = 17."},
     {t:"3.4 2", why:"3.4 is `17 / 5`. `//` drops the remainder."},
     {t:"2 3", why:"The order is swapped: `//` gives the 3, `%` gives the 2."},
     {t:"3 0.4", why:"`%` gives the remainder as a whole amount (2), not a fraction."}
   ]},
   {id:"t2u8-q12", lesson:"t2u8-l2", level:1, q:"What does `6 / 2` give in Python 3?", options:[
     {t:"3.0", ok:true, why:"`/` always gives a float, even when the division is exact."},
     {t:"3", why:"That’s `6 // 2`. Plain `/` gives a float."},
     {t:"\"3\"", why:"Arithmetic gives numbers, not strings."},
     {t:"An error", why:"Dividing 6 by 2 is fine."}
   ]},
   {id:"t2u8-q13", lesson:"t2u8-l2", level:2, q:"What does `round(4.5)` give?", options:[
     {t:"4", ok:true, why:"Exact halves round to the even neighbour, and 4 is even."},
     {t:"5", why:"That’s “halves always go up” rounding. Python sends exact halves to the even number."},
     {t:"4.5", why:"`round()` with one argument gives a whole number."},
     {t:"An error", why:"`round()` works on floats; it just uses round-half-to-even."}
   ]},
   {id:"t2u8-q14", lesson:"t2u8-l2", level:3, q:"Amara’s program does `age = input(\"Age? \")` and then `print(age + 1)`. She types 30. What happens?", options:[
     {t:"A TypeError, because `age` is the string \"30\" and you can’t add 1 to text", ok:true, why:"`input()` always returns a string. Convert first: `int(age) + 1` gives 31."},
     {t:"It prints 31", why:"Only after converting with `int()`. As written, it’s text plus a number."},
     {t:"It prints 301", why:"Joining would need both to be strings (`age + \"1\"`). A string plus an int is an error."},
     {t:"It prints 30", why:"The program doesn’t reach printing: the addition fails first."}
   ]},
   {id:"t2u8-q15", lesson:"t2u8-l2", level:2, q:"What does `int(9.99)` give?", options:[
     {t:"9", ok:true, why:"`int()` drops the decimal part without rounding."},
     {t:"10", why:"That would be `round(9.99)`. `int()` chops off the decimals."},
     {t:"9.99", why:"`int()` always gives a whole number."},
     {t:"A ValueError", why:"Converting a float with `int()` is fine; it’s strings like \"9.99\" that cause ValueError."}
   ]},
   {id:"t2u8-q16", lesson:"t2u8-l2", level:1, q:"Which name follows Python’s usual style for a variable?", options:[
     {t:"`ticket_price`", ok:true, why:"Lowercase words joined by underscores: snake_case, as PEP 8 recommends."},
     {t:"`TicketPrice`", why:"Valid, but capitalised words are the style for class names, not variables."},
     {t:"`ticket-price`", why:"Not allowed: the hyphen is read as a minus sign."},
     {t:"`1ticket`", why:"Not allowed: names can’t start with a digit."}
   ]},
   {id:"t2u8-q17", lesson:"t2u8-l2", level:3, q:"Dmitri runs:\n\n`a = 5`\n`b = a`\n`a = a + 1`\n`print(a, b)`\n\nWhat appears?", options:[
     {t:"6 5", ok:true, why:"`b = a` ties `b` to 5. Then `a` is moved to 6; `b` still refers to 5."},
     {t:"6 6", why:"Moving the label `a` doesn’t move `b`. They were only tied to the same value for a moment."},
     {t:"5 5", why:"`a = a + 1` changes what `a` refers to: 6."},
     {t:"5 6", why:"The order is `a`, then `b`: 6 then 5."}
   ]},
   {id:"t2u8-q18", lesson:"t2u8-l2", level:2, q:"`price = 4.5` and `qty = 3`. Which line prints `Total: 13.50`?", options:[
     {t:"`print(f\"Total: {price * qty:.2f}\")`", ok:true, why:"The f-string works out 13.5 and `:.2f` shows two decimals."},
     {t:"`print(\"Total: {price * qty:.2f}\")`", why:"Without the `f`, the braces are printed literally."},
     {t:"`print(f\"Total: {price * qty}\")`", why:"That shows `Total: 13.5`: without `:.2f` there’s no second decimal."},
     {t:"`print(\"Total: \" + price * qty)`", why:"A string plus a float is a TypeError."}
   ]},
   {id:"t2u8-q19", lesson:"t2u8-l2", level:3, q:"Hana writes `list = [\"a\", \"b\"]` and later `items = list(\"xyz\")` fails with `TypeError: 'list' object is not callable`. Why?", options:[
     {t:"She reused the built-in name `list` for her own variable, so `list` no longer means the function", ok:true, why:"Assigning to `list` hides Python’s built-in `list()`. Choose names like `letters` instead, and restart the REPL to recover."},
     {t:"`list()` can’t take a string", why:"Normally `list(\"xyz\")` gives `['x', 'y', 'z']`. The name was overwritten."},
     {t:"Lists can’t contain letters", why:"Lists can hold any values."},
     {t:"She needs `import list`", why:"`list` is built in; nothing needs importing. The variable name is the problem."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u8-q20", lesson:"t2u8-l3", level:1, q:"Which line **asks whether** `score` equals 10?", options:[
     {t:"`score == 10`", ok:true, why:"Two equals signs compare and give True or False."},
     {t:"`score = 10`", why:"One equals sign assigns: it ties `score` to 10."},
     {t:"`score === 10`", why:"`===` is JavaScript. In Python it’s a SyntaxError."},
     {t:"`score := 10`", why:"That’s an assignment expression, not a comparison."}
   ]},
   {id:"t2u8-q21", lesson:"t2u8-l3", level:3, q:"A grading program reads:\n\n`if mark >= 50:`\n`    grade = \"C\"`\n`elif mark >= 65:`\n`    grade = \"B\"`\n`elif mark >= 80:`\n`    grade = \"A\"`\n\nWhy does a mark of 90 get a C?", options:[
     {t:"The first True test wins, and `90 >= 50` is True, so the later tests never run", ok:true, why:"Put the highest band first: `>= 80`, then `>= 65`, then `>= 50`."},
     {t:"`elif` only works with `==`", why:"`elif` works with any condition. The order is the problem."},
     {t:"90 is too big for an `if`", why:"There’s no size limit; the first matching branch is chosen."},
     {t:"There’s no `else`", why:"An `else` would only matter if every test were False."}
   ]},
   {id:"t2u8-q22", lesson:"t2u8-l3", level:2, q:"Which message does Python give when the line after `if x > 3:` isn’t indented?", options:[
     {t:"`IndentationError: expected an indented block after 'if' statement`", ok:true, why:"After a colon, Python requires an indented block."},
     {t:"`NameError: name 'if' is not defined`", why:"`if` is a keyword; the problem is the missing indentation."},
     {t:"`TypeError: 'if' object is not callable`", why:"TypeErrors happen while running; this is caught while reading the file."},
     {t:"No error: indentation is optional", why:"In Python, indentation is part of the grammar."}
   ]},
   {id:"t2u8-q23", lesson:"t2u8-l3", level:2, q:"What does `\"  Hello World \".strip().lower()` give?", options:[
     {t:"`'hello world'`", ok:true, why:"`strip()` removes the outer spaces, then `lower()` makes it lowercase. The inner space stays."},
     {t:"`'helloworld'`", why:"`strip()` only removes spaces at the ends."},
     {t:"`'  hello world '`", why:"`strip()` ran first and removed the outer spaces."},
     {t:"`'HELLO WORLD'`, all in capitals", why:"That’s `upper()`."}
   ]},
   {id:"t2u8-q24", lesson:"t2u8-l3", level:2, q:"`code = \"AB-2026\"`. What is `code[3:]`?", options:[
     {t:"`'2026'`", ok:true, why:"Index 3 is the `2` (A=0, B=1, -=2), and leaving out the stop goes to the end."},
     {t:"`'-2026'`", why:"That’s `code[2:]`. Index 2 is the hyphen."},
     {t:"`'AB-'`", why:"That’s `code[:3]`, the part before cut 3."},
     {t:"`'6'`", why:"That’s `code[-1]`, a single character."}
   ]},
   {id:"t2u8-q25", lesson:"t2u8-l3", level:3, q:"A quiz accepts the answer with `if answer == \"yes\":`. Users who type `Yes` or `yes ` are told they’re wrong. What’s the best fix?", options:[
     {t:"Clean it first: `answer = answer.strip().lower()`", ok:true, why:"Comparison is exact and case-sensitive. Normalising removes stray spaces and capitals before comparing."},
     {t:"Use `=` instead of `==`", why:"`=` assigns; in an `if` it’s a SyntaxError."},
     {t:"Add `elif answer == \"Yes\":`", why:"That covers one variant but misses `YES`, `yes ` and others. Normalising handles them all."},
     {t:"Use `answer.upper()` on its own line", why:"Strings don’t change; that line’s result is thrown away. And the comparison is with lowercase \"yes\"."}
   ]},
   {id:"t2u8-q26", lesson:"t2u8-l3", level:1, q:"Which of these counts as **false** in an `if`?", options:[
     {t:"`\"\"` (an empty string)", ok:true, why:"Empty strings, 0, None and empty collections are falsy."},
     {t:"`\"False\"`", why:"A non-empty string is truthy, whatever it says."},
     {t:"`\" \"` (one space)", why:"A space is a character, so the string isn’t empty: truthy."},
     {t:"`-1`", why:"Only zero is falsy among numbers."}
   ]},
   {id:"t2u8-q27", lesson:"t2u8-l3", level:2, q:"What does `\", \".join([\"tea\", \"cake\", \"jam\"])` give?", options:[
     {t:"`'tea, cake, jam'`", ok:true, why:"`join()` glues the list items together with the string before the dot between them."},
     {t:"`['tea', 'cake', 'jam']`", why:"That’s the list itself. `join()` gives a single string."},
     {t:"`'tea, cake, jam, '`", why:"The glue only goes between items, not after the last."},
     {t:"`'teacakejam'`", why:"That would be `\"\".join(...)`, with empty glue."}
   ]},
   {id:"t2u8-q28", lesson:"t2u8-l3", level:3, q:"Ana’s code is `if is_member and total > 20:`. Which customer gets the discount?", options:[
     {t:"A member spending 25", ok:true, why:"`and` needs both: member (True) and 25 > 20 (True)."},
     {t:"A member spending 20", why:"20 > 20 is False, so `and` gives False."},
     {t:"A non-member spending 50", why:"`is_member` is False, so `and` gives False."},
     {t:"A non-member spending 10", why:"Both parts are False."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u8-q29", lesson:"t2u8-l4", level:2, q:"`basket = [\"eggs\", \"rice\", \"tea\"]`. After `basket.append(\"milk\")`, what is `basket[3]`?", options:[
     {t:"`'milk'`", ok:true, why:"`append()` adds to the end. The list now has indexes 0 to 3, and index 3 is the new item."},
     {t:"`'tea'`", why:"`'tea'` is at index 2."},
     {t:"An IndexError", why:"Before the append there was no index 3; after it there is."},
     {t:"`'eggs'`", why:"`'eggs'` is index 0."}
   ]},
   {id:"t2u8-q30", lesson:"t2u8-l4", level:1, q:"Which numbers does `range(2, 6)` produce?", options:[
     {t:"2, 3, 4, 5", ok:true, why:"It starts at 2 and stops before 6."},
     {t:"2, 3, 4, 5, 6", why:"The end number is excluded."},
     {t:"3, 4, 5, 6", why:"The start number is included."},
     {t:"0, 1, 2, 3, 4, 5", why:"With two arguments, the first is the start."}
   ]},
   {id:"t2u8-q31", lesson:"t2u8-l4", level:2, q:"`stock = {\"eggs\": 12}`. What does `stock.get(\"rice\", 0)` give?", options:[
     {t:"0", ok:true, why:"\"rice\" isn’t a key, so `get()` gives the default, 0."},
     {t:"A KeyError", why:"`stock[\"rice\"]` would be a KeyError; `get()` returns the default instead."},
     {t:"None", why:"`get()` gives `None` only when you don’t supply a default. Here it’s 0."},
     {t:"12", why:"12 belongs to \"eggs\"."}
   ]},
   {id:"t2u8-q32", lesson:"t2u8-l4", level:3, q:"Tomás averages scores with `sum(scores) / len(scores)`. It works until a new pupil with no scores arrives, and the program stops. Which error, and what fix?", options:[
     {t:"ZeroDivisionError; check `if scores:` before dividing", ok:true, why:"An empty list has length 0. Checking first lets you print “no scores yet” instead."},
     {t:"IndexError; start counting at 1", why:"No index is used. The division by `len()` of an empty list is the problem."},
     {t:"KeyError; use `get()`", why:"No dictionary is involved here."},
     {t:"TypeError; convert with `int()`", why:"The values are already numbers; it’s dividing by zero."}
   ]},
   {id:"t2u8-q33", lesson:"t2u8-l4", level:2, q:"What does this print?\n\n`count = 0`\n`for word in [\"tea\", \"cake\", \"tart\"]:`\n`    if word.startswith(\"t\"):`\n`        count += 1`\n`print(count)`", options:[
     {t:"2", ok:true, why:"\"tea\" and \"tart\" start with t; \"cake\" doesn’t."},
     {t:"3", why:"\"cake\" starts with c, so it isn’t counted."},
     {t:"1", why:"Both \"tea\" and \"tart\" match."},
     {t:"0", why:"`count += 1` runs for each match."}
   ]},
   {id:"t2u8-q34", lesson:"t2u8-l4", level:1, q:"In a dictionary, what does `\"tea\" in prices` check?", options:[
     {t:"Whether \"tea\" is one of the keys", ok:true, why:"`in` on a dictionary looks at the keys."},
     {t:"Whether \"tea\" is one of the values", why:"For values, use `\"tea\" in prices.values()`."},
     {t:"Whether the dictionary is sorted", why:"`in` checks membership, nothing else."},
     {t:"Whether \"tea\" appears in any key or value as part of a word", why:"It checks for a key that equals \"tea\" exactly."}
   ]},
   {id:"t2u8-q35", lesson:"t2u8-l4", level:3, q:"Kenji’s loop is meant to print 1 to 10 but prints 1 to 9:\n\n`for n in range(1, 10):`\n`    print(n)`\n\nWhat’s the fix?", options:[
     {t:"`range(1, 11)`, because the end number is excluded", ok:true, why:"This is a classic off-by-one error: to include 10, stop at 11."},
     {t:"`range(0, 10)`", why:"That prints 0 to 9: still no 10, and an extra 0."},
     {t:"`range(10)`", why:"That starts at 0 and stops at 9."},
     {t:"`range(1, 10, 1)`", why:"A step of 1 is the default; the end is still excluded."}
   ]},
   {id:"t2u8-q36", lesson:"t2u8-l4", level:2, q:"Which loop is guaranteed to stop?", options:[
     {t:"`n = 10` then `while n > 0:` with `n -= 1` inside", ok:true, why:"n goes down by 1 each round, so `n > 0` becomes False after 10 rounds."},
     {t:"`n = 10` then `while n > 0:` with `n += 1` inside", why:"n grows forever, so `n > 0` is always True."},
     {t:"`n = 10` then `while n > 0:` with only `print(n)` inside", why:"Nothing changes n: an infinite loop."},
     {t:"`while True:` with only `print(\"hi\")` inside", why:"With no `break`, `while True` never ends."}
   ]},
   {id:"t2u8-q37", lesson:"t2u8-l4", level:3, q:"A word counter loops `for w in text.split():` and runs `counts[w] += 1`, with `counts = {}` at the start. It stops on the first word with an error. Which one, and why?", options:[
     {t:"KeyError: the word isn’t a key yet, so there’s nothing to add 1 to", ok:true, why:"`+= 1` reads the old value first. Check `if w in counts:` (else set it to 1), or write `counts[w] = counts.get(w, 0) + 1`."},
     {t:"IndexError: dictionaries start at 0", why:"Dictionaries use keys, not positions."},
     {t:"TypeError: words can’t be keys", why:"Strings make perfect keys."},
     {t:"NameError: `counts` isn’t defined", why:"It is defined (`counts = {}`); it’s just empty."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u8-q38", lesson:"t2u8-l5", level:1, q:"What does a Python function return if it has no `return` statement?", options:[
     {t:"`None`", ok:true, why:"Every call gives back a value; without `return`, it’s `None`."},
     {t:"0", why:"Python doesn’t invent a zero; it uses `None` for “nothing”."},
     {t:"Whatever it printed last", why:"Printing shows a value but doesn’t return it."},
     {t:"An error", why:"Functions without `return` are allowed; they simply give `None`."}
   ]},
   {id:"t2u8-q39", lesson:"t2u8-l5", level:2, q:"`def area(w, h=2):` returns `w * h`. What is `area(5) + area(3, 4)`?", options:[
     {t:"22", ok:true, why:"`area(5)` uses the default h=2 and returns 10; `area(3, 4)` returns 12; 10 + 12 = 22."},
     {t:"17", why:"That’s 5 + 12: the first call returns 5 × 2, not 5."},
     {t:"32", why:"That treats the first call as 5 × 4. The default for h is 2."},
     {t:"An error, because `area(5)` is missing `h`", why:"`h` has a default, so it can be left out."}
   ]},
   {id:"t2u8-q40", lesson:"t2u8-l5", level:3, q:"A traceback has three “File …” lines and ends with `ValueError: invalid literal for int() with base 10: 'ten'`. Where should Mei look first?", options:[
     {t:"The last line, then the “File” line just above it, which is where `int()` was given 'ten'", ok:true, why:"Read from the bottom: the error message, then the deepest frame, then upwards to see where 'ten' came from."},
     {t:"The very first “File” line, because it happened first", why:"The top frame is where the program started. The failure is at the bottom."},
     {t:"Every line in her program, from the top", why:"The traceback already points to the exact line; start there."},
     {t:"Nowhere: ValueErrors fix themselves when run again", why:"The same input gives the same error. The input or the code has to change."}
   ]},
   {id:"t2u8-q41", lesson:"t2u8-l5", level:2, q:"Which error does `print(\"Age: \" + 30)` cause?", options:[
     {t:"TypeError", ok:true, why:"`+` can’t join a string and an int. Use `f\"Age: {30}\"` or `str(30)`."},
     {t:"ValueError", why:"ValueError is a right type with a bad value, such as `int(\"ten\")`."},
     {t:"SyntaxError", why:"The grammar is fine; the problem appears when it runs."},
     {t:"NameError", why:"No unknown names are used."}
   ]},
   {id:"t2u8-q42", lesson:"t2u8-l5", level:1, q:"What must come before `random.randint(1, 6)` in a script?", options:[
     {t:"`import random`", ok:true, why:"Standard-library modules are available but must be imported before use."},
     {t:"`install random`", why:"There’s no such statement, and `random` comes with Python."},
     {t:"`def random():`", why:"That would define your own function, hiding the module."},
     {t:"Nothing: `random` is built in", why:"It’s in the standard library, but it still needs `import`."}
   ]},
   {id:"t2u8-q43", lesson:"t2u8-l5", level:2, q:"Which values can `random.randint(1, 6)` return?", options:[
     {t:"Any whole number from 1 to 6, including both 1 and 6", ok:true, why:"Unlike `range()`, `randint` includes both ends."},
     {t:"1 to 5 only", why:"That’s the `range()` rule. `randint` includes 6."},
     {t:"Any number from 1 to 6, including decimals", why:"`randint` gives whole numbers; `random.uniform` gives decimals."},
     {t:"0 to 6", why:"It starts at the first argument, 1."}
   ]},
   {id:"t2u8-q44", lesson:"t2u8-l5", level:3, q:"Fatima writes `def total(prices): print(sum(prices))` and then `vat = total([10, 20]) * 0.2`. What goes wrong?", options:[
     {t:"It prints 30, then fails, because `total()` returns `None` and `None * 0.2` is a TypeError", ok:true, why:"The function shows the sum but doesn’t return it. Change `print(sum(prices))` to `return sum(prices)`."},
     {t:"`vat` becomes 6.0", why:"That needs `return`. As written, the call gives `None`."},
     {t:"It prints 6.0", why:"Nothing prints the VAT; and the multiplication fails first."},
     {t:"A NameError, because `sum` isn’t imported", why:"`sum` is a built-in function; no import is needed."}
   ]},
   {id:"t2u8-q45", lesson:"t2u8-l5", level:3, q:"Oluwaseun’s program asks “How many guests?” and crashes when someone types `twelve`. What’s a kind way to handle it?", options:[
     {t:"Wrap the `int(input(...))` in `try`/`except ValueError` and print a friendly message", ok:true, why:"The ValueError is expected when people type words; catching that specific error lets the program explain the format instead of crashing."},
     {t:"Use `except:` with no error type around the whole program", why:"A bare `except` hides every error, including real bugs. Catch only ValueError."},
     {t:"Use `float()` instead of `int()`", why:"`float(\"twelve\")` is a ValueError too."},
     {t:"Delete the `int()` so it never fails", why:"Then the answer stays a string and any arithmetic with it fails later."}
   ]}
  ]
});
