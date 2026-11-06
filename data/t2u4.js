/* Track 2 · Unit 4 · First steps in JavaScript */
ICA.addUnit({
  id:"t2u4", track:"t2", n:4, title:"First steps in JavaScript", icon:"⚡",
  blurb:"JavaScript is the language that makes web pages respond. Learn where it runs, how it stores values, makes decisions and repeats work, how functions and objects keep code tidy, and how to change a page when someone taps a button, with a calm way of reading error messages all along.",
  goals:[
    "Explain what JavaScript does on a web page, add a script with `defer`, use the Console, and read an error message without panic",
    "Store strings, numbers and booleans in well-named `const` and `let` variables, and predict the classic surprises such as `0.1 + 0.2` and `\"5\" + 1`",
    "Make decisions with `===`, `if`/`else` and `&&`, `||`, `!`, and repeat work over arrays with `for...of` and `for` loops without getting stuck",
    "Write functions that take parameters and return values, and organise data as objects and arrays of objects",
    "Find elements, change text safely with `textContent`, toggle classes, respond to clicks and read inputs, then debug with `console.log`"
  ],
  read:[
    {book:"mdn", where:"Dynamic scripting with JavaScript → What is JavaScript?, A first splash into JavaScript, What went wrong? Troubleshooting JavaScript, Storing the information you need — Variables, Basic math in JavaScript — numbers and operators, Handling text — strings in JavaScript, Arrays, Making decisions in your code — conditionals, Looping code, Functions — reusable blocks of code, Function return values, JavaScript object basics, Introduction to events, DOM scripting introduction, JavaScript debugging and error handling", note:"MDN’s own beginner course. Each lesson below names the pages that match it; the module also has small “Test your skills” exercises."},
    {book:"ejs", where:"Introduction; Chapter 1, “Values, Types, and Operators”; Chapter 2, “Program Structure”; Chapter 3, “Functions”; Chapter 4, “Data Structures: Objects and Arrays”; Chapter 14, “The Document Object Model”; Chapter 15, “Handling Events”", note:"Faster and deeper than these lessons. Read the first sections of each chapter; skip anything that feels too far ahead and come back later."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u4-l1", title:"What JavaScript does and where it runs", minutes:50,
   hook:{q:"A page has fully loaded on your phone. You switch off Wi-Fi and mobile data, then tap a button that opens the page’s menu. What usually happens?", options:["Nothing: the website’s server runs the button’s code, so it needs a connection","The menu opens: the code came with the page and runs in your browser, on your phone","The menu opens only if the phone has Java installed","It depends on whether you’re using a phone or a computer"], answer:1, reveal:"Usually the menu opens. The JavaScript for that button was downloaded along with the page, and your own browser runs it on your own device. It would only fail if the button needed to fetch something new from the internet. This lesson shows where that code lives, how the browser runs it, and how to talk to it directly in the Console."},
   goals:[
     "Describe what JavaScript adds to HTML and CSS, and where it runs",
     "Add a script to a page with `<script src=\"…\" defer>` and explain why its position matters",
     "Read a short script as a list of statements, and write comments",
     "Open the Console on a computer (or use the Web Lab on a phone), and read an error message: its type, its message and its line number"
   ],
   learn:[
    {h:"The third layer of a web page", body:[
      {lead:"HTML says what is on a page, CSS says how it looks, and JavaScript says what it does."},
      "Think of a café’s web page. The HTML holds the content: the menu items, the prices, the opening hours. The CSS decides the colours, fonts and layout. Neither of them can **react**: they can’t show today’s specials when someone taps a button, add up an order, or tell you the café opens in 25 minutes. That is JavaScript’s job.",
      {table:[
        ["Layer","Its job","On the café page"],
        ["HTML","Structure and content","The headings, the menu list, the order form"],
        ["CSS","Presentation","Warm colours, two columns on wide screens"],
        ["JavaScript","Behaviour","Show specials on a tap, total an order, check a form before it is sent"]
      ]},
      "JavaScript is a **programming language**: a precise way of writing instructions that a computer follows. A small piece of JavaScript is often called a **script**. Your browser contains a **JavaScript engine** (V8 in Chrome and Edge, SpiderMonkey in Firefox, JavaScriptCore in Safari) that reads the script and runs it.",
      "Here is the answer to the warm-up puzzle: browser JavaScript runs **on your device**, inside the browser, not on the website’s computer. The script arrives with the page, like the HTML and CSS do. That is why a page can still respond after the connection drops, and why a slow phone can make a heavy page feel sluggish.",
      "JavaScript also runs outside browsers. Tools such as Node.js run it on servers and ordinary computers, which is how some websites run JavaScript on both ends. This unit stays in the browser.",
      {key:"JavaScript is not Java. They are different languages. When JavaScript appeared in 1995, the name was chosen to ride on Java’s popularity: Eloquent JavaScript calls it a marketing decision rather than good judgement."},
      "The official standard for the language is called **[[ecmascript|ECMAScript]]**, published by Ecma International. A committee called TC39 updates it every year, and browsers follow it. A big update in 2015 added much of what this unit teaches, such as `let`, `const` and template literals, so in old tutorials you may see older ways of doing things."
    ]},
    {h:"Your first script, and where to put it", body:[
      "Scripts are attached to a page with the `<script>` element. The tidy way is to keep the JavaScript in its own file, usually named something like `script.js`, and point to it from the HTML:",
      {code:['<!DOCTYPE html>','<html lang="en">','<head>','  <meta charset="utf-8">','  <title>Garden club</title>','  <script src="script.js" defer><\/script>','</head>','<body>','  <h1>Community garden</h1>','  <p id="hours">Opening hours coming soon.</p>','</body>','</html>'].join("\n"), lang:"html", label:"index.html"},
      {code:['// Runs after the whole page has been read','const hours = document.querySelector("#hours");','hours.textContent = "Open today, 9:00 to 17:00";','console.log("script.js ran");'].join("\n"), lang:"js", label:"script.js", weblab:"wl-js-hello", cap:"The page now says “Open today, 9:00 to 17:00”, and the Console shows “script.js ran”."},
      "What each piece does:",
      {list:[
        "`src=\"script.js\"` tells the browser which file to download, just like `src` on an image. The file sits in the same folder as `index.html`.",
        "`defer` means “download this while you keep reading the HTML, and run it once the whole page has been read”.",
        "The `<script>` element always needs its closing tag, `<\/script>`, even when it’s empty.",
        "In `script.js`, `document.querySelector(\"#hours\")` finds the paragraph whose id is `hours`, and `.textContent = …` replaces its text. Lesson 5 explains these properly; for now, notice that JavaScript can **reach into the page and change it**."
      ]},
      {h:"Why the position matters"},
      "A browser reads HTML from top to bottom. When it meets a plain `<script>` without `defer`, it **stops reading**, downloads the script, runs it, and only then carries on. A plain script in the `<head>` therefore runs before the `<body>` exists. If it tries to find `#hours`, there’s nothing to find yet, and you get an error.",
      {fig:'<svg viewBox="0 0 340 362"><defs><marker id="t2u4a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">1. In &lt;head&gt;, no defer</text><rect class="d-lup" x="10" y="28" width="90" height="26" rx="5" stroke-width="1.5"/><text x="55" y="46" text-anchor="middle">read HTML</text><rect class="d-rose" x="100" y="28" width="120" height="26" rx="5" stroke-width="1.5"/><text x="160" y="46" text-anchor="middle">fetch, run JS</text><rect class="d-lup" x="220" y="28" width="110" height="26" rx="5" stroke-width="1.5"/><text x="275" y="46" text-anchor="middle">read the rest</text><text class="s" x="10" y="74">Reading pauses. The script runs before</text><text class="s" x="10" y="90">the body exists, so it can’t find elements.</text><text x="10" y="126">2. In &lt;head&gt; with defer (used here)</text><rect class="d-lup" x="10" y="136" width="230" height="26" rx="5" stroke-width="1.5"/><text x="125" y="154" text-anchor="middle">read all the HTML</text><rect class="d-gold" x="30" y="168" width="110" height="26" rx="5" stroke-width="1.5"/><text x="85" y="186" text-anchor="middle">fetch JS</text><rect class="d-sage" x="240" y="168" width="90" height="26" rx="5" stroke-width="1.5"/><text x="285" y="186" text-anchor="middle">run JS</text><text class="s" x="10" y="214">Fetching happens while reading; the script</text><text class="s" x="10" y="230">runs once the whole page has been read.</text><text x="10" y="266">3. Just before &lt;/body&gt;</text><rect class="d-lup" x="10" y="276" width="170" height="26" rx="5" stroke-width="1.5"/><text x="95" y="294" text-anchor="middle">read all the HTML</text><rect class="d-gold" x="180" y="276" width="80" height="26" rx="5" stroke-width="1.5"/><text x="220" y="294" text-anchor="middle">fetch JS</text><rect class="d-sage" x="260" y="276" width="70" height="26" rx="5" stroke-width="1.5"/><text x="295" y="294" text-anchor="middle">run JS</text><text class="s" x="10" y="322">Works too, but fetching may start later.</text><path class="d-ink" d="M10,342 L326,342" stroke-width="1.5" marker-end="url(#t2u4a1)"/><text class="s" x="170" y="358" text-anchor="middle">time</text></svg>', alt:"Three timelines. First: a script in the head without defer. The browser reads some HTML, then pauses while it fetches and runs the JavaScript, then reads the rest; the script runs before the body exists. Second: a script in the head with defer. The browser reads all the HTML while fetching the JavaScript at the same time, then runs the script after the page has been read. Third: a script just before the closing body tag. The browser reads all the HTML, then fetches the script, then runs it; this works but fetching may start later.", cap:"Three places for a script. With `defer`, downloading overlaps reading and the script still waits for the whole page."},
      "So there are three common choices:",
      {list:[
        "**In the `<head>` with `defer`** (used in this unit): downloading starts early and the script waits for the whole page. `defer` only works on scripts with a `src`.",
        "**Just before `</body>`**: the older habit. It works, because the page above it has been read, but the download may start later, because the script is near the end of the HTML.",
        "**`<script type=\"module\" src=\"…\">`** in the `<head>`: modules wait for the page automatically, and MDN’s course uses them. They need the page to come from a web server, though: opened straight from a file on your computer, a module script is blocked. That’s why this unit uses `defer`."
      ]},
      {lab:"wl-js-hello", t:"Practise: make a button change some text"}
    ]},
    {h:"Statements, order and comments", body:[
      "A script is a list of instructions called **[[js-statement|statements]]**. The engine runs them **one after another, top to bottom**, unless you tell it otherwise (Lesson 3 shows how). Each statement usually sits on its own line and ends with a semicolon.",
      {code:['// A comment: JavaScript skips this line','console.log("Good morning");','console.log(7 * 6);','/* A longer comment','   can cover several lines */','console.log("Done");'].join("\n"), lang:"js", label:"Three statements", cap:"The Console shows `Good morning`, then `42`, then `Done`."},
      "`console.log(…)` writes whatever is in the brackets to the Console, the developer’s notebook you’ll meet in the next section. Text goes inside quotes; a calculation such as `7 * 6` (the `*` means multiply) is worked out first, so 42 is logged.",
      "**[[js-comment|Comments]]** are notes for humans. JavaScript ignores everything from `//` to the end of that line, and everything between `/*` and `*/`. Use comments to explain **why** you did something, not to repeat what the code obviously does. They’re also handy for switching a line off while you test: put `//` in front of it.",
      "Two details catch everyone at first:",
      {list:[
        "**JavaScript is case-sensitive.** `console.log` works; `Console.log` and `console.Log` are errors, because they are different names.",
        "**Semicolons.** JavaScript can often add missing semicolons for you, but the rules have surprising corners. Ending each statement with `;` yourself is the safe habit, and it’s what MDN’s examples do."
      ]},
      {tip:"Inside quotes, `//` is just text. `console.log(\"https://example.com\")` logs the whole address; it does not start a comment."}
    ]},
    {h:"The Console: a place to talk to JavaScript", body:[
      "Every desktop browser has **developer tools**, and one of their panels is the **Console**. It does two jobs: it shows messages from the page’s scripts (including errors), and it lets you type JavaScript and see the answer straight away.",
      {table:[
        ["Device","How to open the Console"],
        ["Windows, Linux or ChromeOS (Chrome or Edge)","[[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]]"],
        ["Mac (Chrome or Edge)","[[kbd:Cmd]] + [[kbd:Option]] + [[kbd:J]]"],
        ["Chrome, Edge or Firefox","[[kbd:F12]] or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]] ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]] on a Mac), then the **Console** tab"],
        ["Safari on a Mac","First turn on **Safari → Settings → Advanced → Show features for web developers**, then **Develop → Show Web Inspector**, Console tab"]
      ]},
      "Type a line after the `>` prompt and press [[kbd:Enter]]:",
      {code:['2 + 2','"garden".toUpperCase()','console.log("Hello")'].join("\n"), lang:"js", label:"Try these in the Console", cap:"The answers are `4`, then GARDEN in quotes (the Console marks strings that way), then `Hello` followed by `undefined`."},
      "The last one surprises people. The Console prints `Hello` because you asked it to log that, and then it prints `undefined` because it always shows the result of the line you typed, and `console.log` itself gives back no value. That `undefined` is not an error. You’ll meet `undefined` properly in Lesson 2.",
      "**On a phone.** Mobile browsers don’t include a Console. Use the **Web Lab** in this app instead: open a JavaScript challenge, type your code, and tap **Check**. Under the result it shows the Console output (the last few lines) and any error with its line number. Developers who need the full tools connect the phone to a computer (Safari’s Web Inspector needs a Mac; Chrome’s remote debugging needs a computer and a USB cable).",
      {warn:"Never paste code into the Console because someone asked you to. Scammers use “paste this to unlock a feature” to take over accounts: code in the Console runs with your login on that site. Chrome and Firefox, for example, show a warning when someone who rarely uses the Console tries to paste there. Type only code you understand."},
      {tip:"On a school or work Chromebook, the administrator can switch developer tools off. If the shortcut does nothing, use the Web Lab."}
    ]},
    {h:"Reading an error message calmly", body:[
      "Errors are normal. Professional programmers see them all day; an error message is the engine telling you exactly where it got confused. Here’s a script with a mistake:",
      {code:['console.log("Start");','console.log(visitorCount);','console.log("End");'].join("\n"), lang:"js", label:"script.js", cap:"The Console shows `Start`, then the error. `End` never appears."},
      {ex:"Uncaught ReferenceError: visitorCount is not defined\n    at script.js:2:13", label:"What Chrome shows", mono:true},
      "Read it in three parts:",
      {ol:[
        "**The type**, `ReferenceError`: the kind of problem. A ReferenceError means you used a name JavaScript doesn’t know, often a typo or a variable you forgot to create.",
        "**The message**, `visitorCount is not defined`: the details, in plain-ish English.",
        "**The place**, `script.js:2:13`: file `script.js`, line 2, character 13. In the Console you can click it to jump to that line. (“Uncaught” just means no code was set up to catch the error.)"
      ]},
      "Notice that `Start` **was** logged: the engine ran line 1, hit the problem on line 2, and stopped. That is a **[[runtime-error|runtime error]]**: the code was valid, but something went wrong while it ran.",
      "A **[[syntax-error|syntax error]]** is different. It means the code breaks the language’s grammar, such as a missing bracket, so the engine can’t even begin. **Nothing in that script runs**, not even the lines before the mistake:",
      {code:['console.log("Start");','console.log("End";'].join("\n"), lang:"js", label:"A missing bracket", cap:"Nothing is logged. Chrome reports `Uncaught SyntaxError: missing ) after argument list`."},
      {table:[
        ["Error type","Usually means","Check first"],
        ["SyntaxError","The code breaks the grammar; nothing in the script ran","Brackets, quotes and commas on that line and the one before"],
        ["ReferenceError","A name that doesn’t exist","Spelling and capitals; was the variable created?"],
        ["TypeError","A value used the wrong way, often `null` or `undefined`","Did `querySelector` find anything? Is a method name spelled right?"]
      ]},
      "The wording differs between browsers. For `document.querySelector(\"#totl\").textContent = \"5\"` (a misspelled id), Chrome says `Cannot set properties of null (setting 'textContent')`, while Firefox says something like `can't access property \"textContent\", … is null`. Both are TypeErrors, and both point to the same line.",
      {key:"Calm routine: read the type, read the message, go to the line, look at that line and the one before it, and fix the first error first. Later errors are often caused by the first one."},
      {lab:"wl-js-fix", t:"Practise: use the error messages to fix a broken Like button"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“JavaScript is a simpler Java.”** They are separate languages with different rules; only the name is similar.",
        "**“JavaScript runs on the website’s server.”** Browser JavaScript runs on your device. Some sites also run JavaScript on their servers, but that’s separate code.",
        "**“An error means I broke something.”** Errors in your own page can’t harm your device. Read the message, fix the line, reload.",
        "**“The script didn’t do anything, so the browser ignored it.”** Open the Console: there’s almost always an error, or the script ran before the page existed (add `defer`).",
        "**“`undefined` in the Console is an error.”** After lines like `console.log(…)`, it’s just the Console showing that the line gave back no value."
      ]}
    ]}
   ],
   try:[
    {id:"t2u4-l1-x1", type:"sort", q:"Amara is building a page for her family’s bakery. Which layer does each job belong to?", buckets:["HTML","CSS","JavaScript"], items:[
      {t:"The list of breads and their prices", b:0, why:"That’s content, so it belongs in the HTML (for example a list or a table)."},
      {t:"Prices shown in a warm brown colour", b:1, why:"Colour is presentation, which is CSS’s job."},
      {t:"Show “Fresh out of the oven!” when someone taps a loaf", b:2, why:"Reacting to a tap is behaviour, which needs JavaScript."},
      {t:"A heading for each section of the menu", b:0, why:"Headings are structure: `<h2>` elements in the HTML."},
      {t:"Count down the minutes until the bakery opens", b:2, why:"The page has to calculate and update itself as time passes, which takes JavaScript."},
      {t:"Two columns on wide screens, one on phones", b:1, why:"Layout that adapts to the screen is CSS (flexbox or grid with a media query)."}
    ]},
    {id:"t2u4-l1-x2", type:"order", q:"A page has `<script src=\"script.js\" defer><\/script>` in its `<head>`. Put what the browser does in order.", items:[
      {t:"Starts reading the HTML from the top", why:"Every page load starts with the browser reading the HTML."},
      {t:"Meets the script element and starts downloading `script.js`", why:"The `<script>` is in the `<head>`, so the browser sees it early and starts fetching."},
      {t:"Keeps reading the rest of the HTML while the download continues", why:"That’s what `defer` allows: no pause. Without `defer`, reading would stop here."},
      {t:"Finishes reading the whole page", why:"Deferred scripts wait for this point."},
      {t:"Runs `script.js`, which can now find any element on the page", why:"The script runs last, so `document.querySelector` finds elements in the body."}
    ]},
    {id:"t2u4-l1-x3", type:"mcq", q:"Kenji puts `<script src=\"app.js\"><\/script>` (no `defer`) in his page’s `<head>`. The script’s first line is `document.querySelector(\"h1\").textContent = \"Welcome\";`. The Console says `Cannot set properties of null`. What’s the most likely cause?", options:[
      {t:"The script ran before the `<h1>` existed, so `querySelector` found nothing and gave back `null`", ok:true, why:"Right. Without `defer`, the script runs as soon as the browser meets it in the `<head>`, before the body has been read. Adding `defer` (or moving the script to the end of the body) fixes it."},
      {t:"`textContent` only works on paragraphs, not headings", why:"`textContent` works on any element. The message says the value is `null`: there was no element at all."},
      {t:"The file name must be `script.js`, not `app.js`", why:"Any file name works if `src` matches it. The script clearly ran, because it produced an error."},
      {t:"Headings can’t be changed by JavaScript", why:"JavaScript can change any element’s text. The problem is timing, not permission."}
    ]},
    {id:"t2u4-l1-x4", type:"spot", q:"Tap every part of this script that JavaScript **ignores** when it runs.", ask:"ignored when it runs", mono:true, parts:[
      {t:"// Greet the visitor", flag:true, why:"A line comment: everything from `//` to the end of the line is skipped."}, "\n", {t:"console.log(\"Hi there\");", flag:false, why:"A normal statement. It runs and logs Hi there."}, "\n", {t:"/* console.log(\"Old greeting\"); */", flag:true, why:"This statement is inside `/* … */`, so it’s commented out and never runs. A handy way to switch a line off."}, "\n", {t:"console.log(\"Visit https://example.com\");", flag:false, why:"The `//` is inside quotes, so it’s just part of the text. This line runs and logs the whole address."}, "\n", {t:"console.log(2 + 3);", flag:false, why:"A normal statement: it runs and logs 5."}, " ", {t:"// shows 5", flag:true, why:"A comment can follow code on the same line. Everything from `//` onwards is skipped; the statement before it still runs."}
    ]},
    {id:"t2u4-l1-x5", type:"match", q:"Match each error message with its most likely cause.", pairs:[
      ["SyntaxError: missing ) after argument list","A bracket was left out, so the script couldn’t start at all","A SyntaxError means the grammar is broken. Nothing in the script runs until it’s fixed."],
      ["ReferenceError: totl is not defined","A name was misspelled, or the variable was never created","ReferenceError means JavaScript doesn’t know that name. Compare it with where you created the variable."],
      ["TypeError: Cannot set properties of null (setting 'textContent')","`querySelector` found no matching element","`null` is what `querySelector` gives back when nothing matches, and `null` has no `textContent`. Check the selector and that the script runs after the page is read."],
      ["TypeError: button.addeventListener is not a function","A method name has the wrong capitals","It’s `addEventListener`. JavaScript is case-sensitive, so the misspelled name doesn’t exist."]
    ]},
    {id:"t2u4-l1-x6", type:"mcq", q:"Priya’s script has three lines: line 1 logs `A`, line 2 contains a ReferenceError, line 3 logs `C`. The rest of the code is valid. What appears in the Console?", options:[
      {t:"`A`, then the ReferenceError. `C` never appears", ok:true, why:"Right. Statements run top to bottom. Line 1 runs; line 2 throws a runtime error, which stops the script; line 3 is never reached."},
      {t:"Only the ReferenceError, because errors stop the whole script before it starts", why:"That’s how a **syntax** error behaves. A ReferenceError is a runtime error: it only happens when line 2 actually runs, so line 1 has already logged `A`."},
      {t:"`A`, the error, then `C`", why:"An uncaught error stops the script at that line, so line 3 never runs."},
      {t:"`A` and `C`; the browser skips the broken line", why:"Browsers skip CSS they don’t understand, but JavaScript stops at an uncaught error."}
    ]},
    {id:"t2u4-l1-x7", type:"mcq", q:"Tomás’s friend says: “JavaScript is just the lightweight version of Java for websites.” What’s the accurate reply?", options:[
      {t:"They’re separate languages with different rules; the similar name was chosen for marketing in 1995", ok:true, why:"Right. JavaScript was named to ride on Java’s popularity. The languages are designed differently and run in different ways."},
      {t:"True: JavaScript is Java with fewer features", why:"JavaScript isn’t a subset of Java. Code written for one doesn’t run in the other."},
      {t:"True, but only in older browsers", why:"At no point has JavaScript been a version of Java. Browsers once had a separate Java plug-in, which is now gone."},
      {t:"JavaScript is the old name for ECMAScript, which is Java’s web edition", why:"ECMAScript is the official standard **for JavaScript**, published by Ecma International. It has nothing to do with Java."}
    ]}
   ],
   apply:{intro:"Talk to JavaScript in the Console, make a page that runs a script, then break it on purpose so error messages become familiar. On a phone, do every task in the Web Lab.", tasks:[
     {t:"Open the Console and try some lines", how:{
       win:["Open Chrome, Edge or Firefox and go to any page (a blank tab is fine).","Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]] (Chrome or Edge) or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]] (Firefox). [[kbd:F12]] then the **Console** tab works in all of them.","After the `>` prompt, type `2 + 2` and press [[kbd:Enter]]. Then try `\"garden\".toUpperCase()` and `console.log(\"Hello\")`.","If the browser warns you about pasting, that’s expected: type the lines yourself."],
       mac:["Open Chrome, Edge or Firefox and press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:J]] (Chrome or Edge) or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:K]] (Firefox).","In Safari, first choose **Safari → Settings → Advanced** and tick **Show features for web developers**, then **Develop → Show Web Inspector** and pick the **Console** tab.","Type `2 + 2` and press [[kbd:Return]]. Then try `\"garden\".toUpperCase()` and `console.log(\"Hello\")`."],
       chromeos:["Open Chrome and press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]].","Type `2 + 2` and press [[kbd:Enter]]. Then try `\"garden\".toUpperCase()` and `console.log(\"Hello\")`.","If nothing opens, your administrator may have turned developer tools off. Use the Web Lab steps instead."],
       phone:["Mobile browsers (Safari on iPhone, Chrome on Android) have no Console, so use this app’s Web Lab.","Open **Labs → Web Lab** and choose the JavaScript challenge “Change text on click”.","Below the starting comment, type `console.log(2 + 2);` and `console.log(\"garden\".toUpperCase());`, then tap **Check**.","The check will say “Not quite yet” (you haven’t solved it), but under it you’ll see **Console output** with `4` and `GARDEN`."]
     }, write:"What did each line give back? Did anything surprise you?"},
     {t:"Make a page that runs a script", how:{
       win:["Make a folder called `garden`. In it, create `index.html` and `script.js` with a text editor such as Notepad or VS Code (in Notepad, choose **Save as type: All files** so it doesn’t add .txt).","Copy the two code blocks from “Your first script” into the files and save.","Double-click `index.html`. The paragraph should say “Open today, 9:00 to 17:00”. Open the Console and look for “script.js ran”.","Now delete `defer`, save and reload. Read the error in the Console, then put `defer` back."],
       mac:["Make a folder called `garden`. In it, create `index.html` and `script.js` in a code editor such as VS Code. (TextEdit works only after **Format → Make Plain Text**.)","Copy the two code blocks from “Your first script” into the files and save.","Open `index.html` in your browser. Check the paragraph’s text and look for “script.js ran” in the Console.","Delete `defer`, save and reload. Read the error, then put `defer` back."],
       chromeos:["ChromeOS has no built-in code editor for this. Use the Web Lab steps, or an online code editor in the browser.","If you have Linux turned on (Settings → About ChromeOS → Developers), you can install VS Code there and follow the Windows steps."],
       phone:["Open the Web Lab challenge “Change text on click”. The HTML is already there; you write the JavaScript.","Follow the hints to find the button and the message and change the text on a click, then tap **Check** until it passes.","Then add `console.log(\"script ran\");` as the first line and check again: the message appears under **Console output**."]
     }, write:"What happened when you removed `defer`? Copy the error message."},
     {t:"Break it on purpose", how:["In your script (or a Web Lab JavaScript pane), delete one closing bracket `)` and run it. Note the error type and line number.","Put it back. Now misspell a variable’s name in one place only (in the garden script, change `hours` to `hour` on line 3). Run it and note the error type and line number.","Put it back. Change a selector to an id that doesn’t exist (for example `#hour` instead of `#hours`). Note the error.","For each one, say whether any earlier lines still ran."], write:"Write each error type, its line number, and what caused it."}
   ], proof:"The Console (or the Web Lab’s Console output) showing the results of at least three lines you typed; a page whose text was changed by your script; and notes on three error messages: their type, line and cause."},
   read:[
     {book:"mdn", where:"Dynamic scripting with JavaScript → What is JavaScript? (especially “How do you add JavaScript to your page?”, comments and script loading)"},
     {book:"mdn", where:"Dynamic scripting with JavaScript → What went wrong? Troubleshooting JavaScript", note:"MDN loosely calls a misspelled method name a “syntax error”; strictly it’s a TypeError that happens while the code runs."},
     {book:"ejs", where:"Introduction (including “On programming” and “What is JavaScript?”) and Chapter 13, “JavaScript and the Browser”, section “HTML and JavaScript”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u4-l2", title:"Values and variables", minutes:55,
   hook:{q:"Type `0.1 + 0.2` into a JavaScript Console. What does it show?", options:["0.3","0.30000000000000004","0.3, but only after rounding","An error: JavaScript can’t add decimals"], answer:1, reveal:"It shows 0.30000000000000004. Computers store numbers in binary, and most decimals, including 0.1 and 0.2, can’t be stored exactly in binary, just as 1/3 can’t be written exactly in decimal. Most programming languages do the same. This lesson covers the kinds of values JavaScript has, how to name them with variables, and the handful of surprises worth knowing."},
   goals:[
     "Recognise strings, numbers, booleans, `undefined` and `null`, and check a value’s type with `typeof`",
     "Create variables with `const` and `let`, choose between them, and explain why modern code avoids `var`",
     "Build text with template literals",
     "Predict the classic number surprises: `0.1 + 0.2`, `NaN`, and `\"5\" + 1` versus `\"5\" * 1`",
     "Choose clear, valid names"
   ],
   learn:[
    {h:"Values come in types", body:[
      {lead:"Everything a program works with is a value, and every value has a type that decides what you can do with it."},
      "You can add two numbers, but “adding” two pieces of text joins them. You can ask whether something is true. So JavaScript keeps track of what kind of value each one is. The five you’ll use first:",
      {table:[
        ["Type","Examples","Used for"],
        ["[[string|String]]","`\"Amara\"`, `'café'`, `\"42\"`","Text of any kind, in quotes"],
        ["[[number-type|Number]]","`42`, `3.5`, `-12`","Amounts you calculate with"],
        ["[[boolean|Boolean]]","`true`, `false`","Yes-or-no answers"],
        ["[[undefined|undefined]]","`undefined`","“No value has been given yet”"],
        ["[[null-value|null]]","`null`","“Deliberately empty”"]
      ]},
      "Notice `\"42\"` in the string row. Quotes make it text, even though it contains digits, and that matters a lot when you calculate, as you’ll see below. Arrays and objects, which hold several values, come in Lessons 3 and 4.",
      "The `typeof` operator tells you a value’s type, as a string:",
      {code:['console.log(typeof "Amara");  // "string"','console.log(typeof 42);  // "number"','console.log(typeof "42");  // "string"','console.log(typeof true);  // "boolean"','console.log(typeof undefined); // "undefined"','console.log(typeof null);  // "object" (!)'].join("\n"), lang:"js", label:"Checking types", cap:"The comments show what each line logs. The Console prints strings without the quotes."},
      "That last line is a famous quirk. `null` is its own type, but `typeof null` gives `\"object\"` because of a mistake in the very first version of JavaScript. Fixing it would break old websites, so it stays. To check for `null`, write `value === null` instead (Lesson 3)."
    ]},
    {h:"Variables: names for values", body:[
      "A **[[js-variable|variable]]** is a name you give to a value so you can use it later. Picture a **name tag on a string**: the tag is the name, and the string ties it to a value. Eloquent JavaScript calls variables “bindings” and pictures them as tentacles that grasp values; it’s the same idea.",
      "Modern JavaScript creates variables with two keywords:",
      {code:['const siteName = "Garden club";','let visitors = 3;','','visitors = visitors + 1;','console.log(visitors);  // 4','console.log(siteName);  // Garden club'].join("\n"), lang:"js", label:"const and let"},
      {list:[
        "**`[[const]]`** creates a name that **can’t be pointed at a different value** later. Use it for anything that won’t be reassigned, which is most things.",
        "**`[[let]]`** creates a name that **can** be reassigned. Use it for values that change, such as a counter or a running total.",
        "`=` means **“make this name refer to this value”**, not “is equal to”. Read `visitors = visitors + 1` as: work out `visitors + 1` (which is 4), then move the tag `visitors` to that new value."
      ]},
      {fig:'<svg viewBox="0 0 340 266"><defs><marker id="t2u4a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">A variable is a name tag tied to a value</text><rect class="d-rose" x="10" y="34" width="140" height="30" rx="15" stroke-width="2"/><text x="80" y="54" text-anchor="middle">const siteName</text><path class="d-ink" d="M150,49 L196,49" stroke-width="2" marker-end="url(#t2u4a2)"/><rect class="d-panel" x="200" y="34" width="130" height="30" rx="4" stroke-width="1.5"/><text x="265" y="54" text-anchor="middle">"Garden club"</text><rect class="d-lup" x="10" y="110" width="140" height="30" rx="15" stroke-width="2"/><text x="80" y="130" text-anchor="middle">let visitors</text><path class="d-ink" d="M150,125 L196,104" stroke-width="1.5" stroke-dasharray="4 4"/><rect class="d-soft" x="200" y="88" width="60" height="28" rx="4" stroke-width="1.5"/><text x="230" y="107" text-anchor="middle">3</text><text class="s" x="268" y="107">before</text><path class="d-ink" d="M150,125 L196,146" stroke-width="2" marker-end="url(#t2u4a2)"/><rect class="d-sage" x="200" y="132" width="60" height="28" rx="4" stroke-width="2"/><text x="230" y="151" text-anchor="middle">4</text><text class="s" x="268" y="151">after</text><text class="s" x="10" y="184">visitors = visitors + 1 moves the tag</text><text class="s" x="10" y="200">to a new value. The old 3 is left behind.</text><rect class="d-rose" x="10" y="218" width="140" height="30" rx="15" stroke-width="2"/><text x="80" y="238" text-anchor="middle">const siteName</text><text x="164" y="230">✗ can’t be moved:</text><text class="s" x="164" y="248">reassigning is a TypeError</text></svg>', alt:"A name tag labelled const siteName points to the value Garden club. Below, a tag labelled let visitors has a dashed line to its old value 3 and an arrow to its new value 4, with the note that visitors = visitors + 1 moves the tag to a new value. At the bottom, the const siteName tag is marked as unable to move: reassigning it is a TypeError.", cap:"Assignment moves a name to a value. `let` names can move; `const` names can’t."},
      "Try to reassign a `const` and JavaScript stops with an error:",
      {code:['const siteName = "Garden club";','siteName = "Allotment club";'].join("\n"), lang:"js", label:"Not allowed", cap:"Chrome reports `TypeError: Assignment to constant variable.`"},
      "A `const` must also get its value straight away: `const total;` on its own is a SyntaxError. A `let` can start empty: `let total;` creates the name with the value `undefined` until you assign something.",
      {key:"Use `const` by default. Switch to `let` only when you know the value will be reassigned. MDN’s advice is the same: “Use const when you can, and use let when you have to.”"},
      {lab:"wl-js-counter", t:"Practise: a counter keeps its number in a `let` variable (the click part is explained in Lesson 5)"}
    ]},
    {h:"Why not var?", body:[
      "Older code and tutorials use a third keyword, `var`. It still works, but it was designed in a way that makes mistakes easy, which is why `let` and `const` were added in 2015. Every current browser supports them.",
      {code:['console.log(price);  // undefined (no error!)','var price = 5;','','console.log(total);  // ReferenceError','let total = 5;'].join("\n"), lang:"js", label:"Two different behaviours", cap:"With `var`, using the name too early quietly gives `undefined`. With `let`, Chrome stops with `ReferenceError: Cannot access 'total' before initialization`, which points you to the mistake."},
      {list:[
        "`var` lets you declare the same name twice by accident; `let` and `const` refuse.",
        "`var` ignores the braces `{ }` of an `if` or a loop, so a name can leak out of the block where it was made. `let` and `const` stay inside (Lesson 4 explains this “scope”).",
        "Using a `var` before its line gives `undefined` instead of an error (this is called hoisting), so bugs hide."
      ]},
      "You’ll meet `var` in older examples. Read it as “an older `let`” and write `const` or `let` in your own code."
    ]},
    {h:"Strings and template literals", body:[
      "A string can be written in double quotes, single quotes or backticks (the grave-accent key): `\"Mei\"`, `'Mei'` and Mei between backticks are all the same value. Pick one style for ordinary strings and stick to it; this unit uses double quotes. The `+` operator joins strings:",
      {code:['const firstName = "Mei";','const city = "Taipei";','console.log("Hi, " + firstName + " from " + city + "!");','// Hi, Mei from Taipei!'].join("\n"), lang:"js", label:"Joining with +"},
      "All those quotes and plus signs are easy to get wrong (a missing space is the classic). A **[[template-literal|template literal]]** is easier: write the text in **backticks** and drop values in with `${…}`:",
      {code:['const firstName = "Mei";','const tickets = 3;','console.log(`${firstName} has ${tickets} tickets.`);','// Mei has 3 tickets.','console.log(`Next year: ${tickets + 1} tickets.`);','// Next year: 4 tickets.'].join("\n"), lang:"js", label:"Template literals", cap:"Anything inside `${ }` is worked out first, so `${tickets + 1}` becomes 4."},
      "With ordinary quotes, `${…}` is just text: `\"${firstName}\"` prints the dollar sign and braces literally. On many computer keyboards the backtick key is at the top left, next to 1, but layouts differ; on phone keyboards it is often in the symbols page, sometimes behind a long press on the apostrophe.",
      "Strings also have useful **properties** and **methods** (actions you call with a dot and brackets):",
      {code:['const word = "  Garden ";','console.log(word.length);  // 9','console.log(word.trim());  // "Garden"','console.log(word.toUpperCase());  // "  GARDEN "','console.log("garden".includes("den")); // true'].join("\n"), lang:"js", label:"A few string tools", cap:"`length` counts every character, spaces included. `trim()` removes spaces at both ends, which is useful for anything someone typed."}
    ]},
    {h:"Numbers and their surprises", body:[
      "JavaScript has one main number type for whole numbers and decimals alike. The arithmetic operators:",
      {table:[
        ["Operator","Meaning","Example → result"],
        ["`+` `-`","Add, subtract","`7 + 2` → 9"],
        ["`*` `/`","Multiply, divide","`7 * 2` → 14, `7 / 2` → 3.5"],
        ["`%`","Remainder after dividing","`7 % 2` → 1"]
      ]},
      {code:['console.log(2 + 3 * 4);  // 14','console.log((2 + 3) * 4);  // 20','console.log(2 ** 3);  // 8 (2 × 2 × 2)'].join("\n"), lang:"js", label:"Order of operations, and powers"},
      "As in maths, `*` and `/` happen before `+` and `-`, and brackets go first. Two stars make the power operator.",
      {h:"Surprise 1: decimals are approximate"},
      "`0.1 + 0.2` gives `0.30000000000000004`, as the warm-up showed. The tiny error comes from storing decimals in binary. For display, round the result: `(0.1 + 0.2).toFixed(2)` gives `\"0.30\"`, a **string** with two decimal places. For money, many programs count in whole cents (or pence, or yen) and only divide for display.",
      {h:"Surprise 2: NaN, “not a number”"},
      "A calculation that has no sensible numeric answer gives **[[nan|NaN]]**: `\"five\" * 2` is `NaN`. Confusingly, `typeof NaN` is `\"number\"`. NaN spreads: almost any calculation that uses NaN gives NaN. And it is the only value not equal to itself, so test for it with `Number.isNaN(value)`.",
      {h:"Surprise 3: “5” + 1"},
      "When an operator gets the wrong type, JavaScript quietly converts one value to another, called **[[type-coercion|type coercion]]**. The `+` operator prefers joining strings; the other arithmetic operators prefer numbers:",
      {code:['console.log("5" + 1);  // "51" (joined as text)','console.log("5" * 1);  // 5 (made a number)','console.log("5" - 1);  // 4','console.log("five" * 2);  // NaN','console.log(Number("5") + 1); // 6','console.log(Number("12 kg"));  // NaN'].join("\n"), lang:"js", label:"Coercion in action"},
      "This matters on real pages: whatever someone types into a form box reaches JavaScript **as a string**, even if it’s digits. Add 12 and 8 typed into two boxes with `+` and you get `\"128\"` instead of 20. Convert first with `Number(…)`, then check the result isn’t NaN. Lesson 5 does exactly this.",
      {tip:"Dividing by zero doesn’t cause an error: `10 / 0` is `Infinity`. It’s a number, but rarely the one you wanted, so check for zero before dividing by something a person typed."}
    ]},
    {h:"undefined and null: two kinds of nothing", body:[
      "Both mean “no real value here”, but they turn up in different ways:",
      {list:[
        "**`undefined`** is what JavaScript gives you when nothing has been set: a `let` with no value yet, a missing property, or a function that doesn’t return anything. Think “not filled in yet”.",
        "**`null`** is a value that people (and browser features) use on purpose to say “empty”. For example, `document.querySelector(\"#menu\")` gives back `null` when there is no element with that id. Think “deliberately nothing”."
      ]},
      {code:['let nextEvent;','console.log(nextEvent);  // undefined','','nextEvent = null;  // we checked: nothing planned','console.log(nextEvent);  // null'].join("\n"), lang:"js", label:"Two kinds of nothing"},
      "In practice, when something says `undefined` or `null` and you didn’t expect it, ask: “Where was this supposed to get its value?” That question finds most bugs of this kind."
    ]},
    {h:"Naming things well", body:[
      "Variable names follow a few hard rules, and good names follow a few habits.",
      {list:[
        "**Allowed:** letters, digits, `_` and `$`. A name can’t **start** with a digit and can’t contain spaces or hyphens (`first-name` would be read as `first` minus `name`).",
        "**Case matters:** `total` and `Total` are different variables.",
        "**No [[js-keyword|reserved words]]:** `let`, `const`, `if`, `for`, `function` and similar words already mean something.",
        "**Convention:** join words in **lower camel case**: `ticketPrice`, `firstName`, `isMember`. Names for booleans often start with `is` or `has`."
      ]},
      {table:[
        ["Unclear","Clearer","Why"],
        ["`x`","`ticketPrice`","Says what it holds"],
        ["`data2`","`guestNames`","Says what is in the list"],
        ["`flag`","`isMember`","Reads like a yes-or-no question"],
        ["`n`","`peopleCount`","No guessing at what n counts"]
      ]},
      "Clear names are a gift to the next reader, who is often you, a month later. Short names are fine for tiny, obvious jobs, such as `i` as a loop counter in Lesson 3."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`=` means equals.”** It means assign. Comparing uses `===` (Lesson 3).",
        "**“`\"42\"` is a number.”** Quotes make it a string. `typeof \"42\"` is `\"string\"`.",
        "**“`const` means the value can never change.”** It means the name can’t be pointed elsewhere. Lesson 3 shows that you can still add items to a `const` array.",
        "**“0.1 + 0.2 = 0.30000000000000004 is a JavaScript bug.”** It’s how binary floating-point numbers work in most languages. Round for display.",
        "**“Everything typed into a form is a number if it looks like one.”** Inputs give strings; convert with `Number()`."
      ]}
    ]}
   ],
   try:[
    {id:"t2u4-l2-x1", type:"sort", q:"Sort each value by its type.", buckets:["String","Number","Boolean","Empty (undefined or null)"], items:[
      {t:"`\"Hana\"`", b:0, why:"Text in quotes is a string."},
      {t:"`42`", b:1, why:"Digits without quotes make a number."},
      {t:"`\"42\"`", b:0, why:"The quotes make this text, even though it contains only digits. `typeof \"42\"` is `\"string\"`."},
      {t:"`true`", b:2, why:"`true` and `false` (no quotes) are the two boolean values."},
      {t:"`\"false\"`", b:0, why:"In quotes, it’s just a five-letter string. It isn’t the boolean `false`."},
      {t:"`null`", b:3, why:"`null` means deliberately empty."},
      {t:"`3.75`", b:1, why:"Decimals are numbers too; JavaScript uses one number type for both."},
      {t:"A `let` declared with no value", b:3, why:"A variable that hasn’t been given a value holds `undefined`."}
    ]},
    {id:"t2u4-l2-x2", type:"number", q:"What does this log?\n\n`let tickets = 3;`\n`tickets = tickets + 2;`\n`tickets = tickets * 2;`\n`console.log(tickets);`", answer:10, tol:0, unit:"", why:"Run the lines in order: tickets starts at 3, becomes 3 + 2 = 5, then 5 × 2 = **10**. Each `=` replaces the old value with the newly calculated one.", wrongs:[
      {v:8, tol:0, why:"That does the multiplication first (3 × 2 = 6) and then adds 2. Statements run top to bottom, so the + 2 happens first: 5, then 10."},
      {v:5, tol:0, why:"That stops after the second line. The third line runs too, doubling 5 to 10."},
      {v:6, tol:0, why:"That doubles the starting value and forgets the + 2 line. Each line uses the value left by the line before."}
    ]},
    {id:"t2u4-l2-x3", type:"mcq", q:"Fatima’s page will keep a **running total** of a basket that changes as items are added, and a **shop name** that never changes. Which declarations fit best?", options:[
      {t:"`let basketTotal = 0;` and `const shopName = \"Fatima’s Fabrics\";`", ok:true, why:"Right. The total is reassigned every time an item is added, so it needs `let`. The name is never reassigned, so `const` protects it and tells readers it won’t change."},
      {t:"`const basketTotal = 0;` and `const shopName = \"Fatima’s Fabrics\";`", why:"The first `basketTotal = basketTotal + 5` would throw `TypeError: Assignment to constant variable.` A value you reassign needs `let`."},
      {t:"`var basketTotal = 0;` and `var shopName = \"Fatima’s Fabrics\";`", why:"`var` still runs, but it’s the older, error-prone keyword. Modern code uses `let` and `const`, which catch mistakes `var` hides."},
      {t:"`let basketTotal = 0;` and `let shopName = \"Fatima’s Fabrics\";`", why:"It works, but `const` is the better choice for a value that never changes: it prevents accidental reassignment and documents your intent."}
    ]},
    {id:"t2u4-l2-x4", type:"match", q:"Match each expression with what JavaScript gives back.", pairs:[
      ["`\"5\" + 1`","`\"51\"` (a string)","With a string involved, `+` joins text: the 1 is converted to \"1\" and stuck on the end."],
      ["`\"5\" * 1`","`5` (a number)","`*` only works on numbers, so the string \"5\" is converted to the number 5 first."],
      ["`\"5\" - 1`","`4`","Like `*`, `-` converts the string to a number, then subtracts."],
      ["`\"five\" * 2`","`NaN`","\"five\" can’t be converted to a number, so the result is NaN, “not a number”."],
      ["`0.1 + 0.2`","`0.30000000000000004`","0.1 and 0.2 can’t be stored exactly in binary, so the sum is very slightly off."]
    ]},
    {id:"t2u4-l2-x5", type:"mcq", q:"Sione’s code has `const guest = \"Sione\";` and `const seats = 2;`, then logs this template literal (written between backticks):\n\n`${guest} booked ${seats + 1} seats`\n\nWhat appears in the Console?", options:[
      {t:"Sione booked 3 seats", ok:true, why:"Right. In a template literal, each `${…}` is worked out first: `guest` is \"Sione\" and `seats + 1` is 3."},
      {t:"Sione booked 21 seats", why:"That would happen with string joining, such as `\"…\" + seats + 1`. Inside `${ }`, `seats + 1` is plain number arithmetic: 3."},
      {t:"${guest} booked ${seats + 1} seats", why:"That’s what you’d get with ordinary quotes. Backticks make it a template literal, so the `${ }` parts are filled in."},
      {t:"An error, because you can’t do maths inside text", why:"Any expression can go inside `${ }`, including arithmetic."}
    ]},
    {id:"t2u4-l2-x6", type:"spot", q:"Lucía wrote these variable names. Tap every one that JavaScript will **reject** as a name.", ask:"not a valid name", mono:true, parts:[
      "let ", {t:"2ndPlace", flag:true, why:"Names can’t start with a digit. `secondPlace` or `place2` would work."}, " = \"Ana\";\nlet ", {t:"firstName", flag:false, why:"Valid, and in the recommended lower camel case."}, " = \"Lucía\";\nlet ", {t:"first-name", flag:true, why:"A hyphen is the minus sign, so this reads as `first` minus `name`. Use `firstName`."}, " = \"Lucía\";\nlet ", {t:"total_cost", flag:false, why:"Underscores are allowed. Camel case (`totalCost`) is the usual JavaScript style, but this is valid."}, " = 12;\nlet ", {t:"let", flag:true, why:"`let` is a keyword in this position, so it can’t be used as a variable name."}, " = 5;\nlet ", {t:"$price", flag:false, why:"`$` is allowed anywhere in a name, so this is valid (if unusual)."}, " = 4;"
    ]},
    {id:"t2u4-l2-x7", type:"mcq", q:"Dmitri writes `let nextMeeting;` and then `console.log(nextMeeting);`. What appears?", options:[
      {t:"`undefined`", ok:true, why:"Right. A `let` created without a value holds `undefined` until something is assigned."},
      {t:"`null`", why:"`null` is only there if someone assigns it on purpose. JavaScript’s own “not set yet” value is `undefined`."},
      {t:"`0`", why:"JavaScript doesn’t assume a number. Nothing has been assigned, so the value is `undefined`."},
      {t:"A ReferenceError", why:"The variable exists (it was declared on the line before), so there’s no ReferenceError. It just has no value yet."}
    ]}
   ],
   apply:{intro:"Experiment with values in the Console (computer) or the Web Lab (phone). On a phone, put each experiment inside `console.log(…);` in a Web Lab JavaScript pane and tap **Check** to see the Console output.", tasks:[
     {t:"Make and change variables", how:["Create `const myCity = \"…\";` with any city or town you like, and `let visits = 0;`.","Add 1 to `visits` three times with `visits = visits + 1;`, logging it each time.","Now try `myCity = \"Somewhere\";`. Read the error and note its type.","Log `typeof myCity` and `typeof visits`."], write:"Which error did reassigning the const give? What did typeof show?"},
     {t:"Hunt the number surprises", how:["Log `0.1 + 0.2`, then `(0.1 + 0.2).toFixed(2)`, then `typeof (0.1 + 0.2).toFixed(2)`.","Log `\"5\" + 1`, `\"5\" * 1`, `\"5\" - 1` and `Number(\"5\") + 1`.","Log `\"five\" * 2`, then `Number.isNaN(\"five\" * 2)`.","Log `10 / 0`."], write:"Which result surprised you most, and why does it happen?"},
     {t:"Write a template-literal greeting", how:["Make three `const` variables: a name, an event (for example “the choir concert”), and a number of days until it.","Use one template literal to log a sentence such as “Hi Oluwaseun, the choir concert is in 5 days.”","Add a second line that says how many days will be left after one more day has passed, using `${days - 1}` inside the template.","Swap the backticks for double quotes and log it again, to see what changes."]}
   ], proof:"Console output (or Web Lab Console output) showing a reassigned `let`, the TypeError from reassigning a `const`, at least three coercion results with your explanation, and a sentence built with a template literal."},
   read:[
     {book:"mdn", where:"Dynamic scripting with JavaScript → Storing the information you need — Variables; Basic math in JavaScript — numbers and operators; Handling text — strings in JavaScript"},
     {book:"ejs", where:"Chapter 1, “Values, Types, and Operators” (Numbers, Strings, Empty values, Automatic type conversion) and Chapter 2, “Program Structure”, sections “Bindings” and “Binding names”", note:"Eloquent JavaScript calls variables bindings."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u4-l3", title:"Decisions and repetition", minutes:55,
   hook:{q:"In JavaScript, what do `\"7\" == 7` and `\"7\" === 7` give?", options:["Both true","Both false","`==` gives true, `===` gives false","`==` gives false, `===` gives true"], answer:2, reveal:"`==` converts the string \"7\" to a number before comparing, so it says true. `===` also checks that the types match, and a string isn’t a number, so it says false. Because `==` converts in ways that are hard to predict, most JavaScript style guides tell you to use `===`. This lesson covers comparisons, decisions with `if`, lists called arrays, and loops that repeat work."},
   goals:[
     "Compare values with `===`, `!==`, `<`, `>`, `<=` and `>=`, and explain why `===` is safer than `==`",
     "Write `if`, `else if` and `else` blocks, and combine conditions with `&&`, `||` and `!`",
     "Recognise truthy and falsy values, including the trap of `0` and `\"\"`",
     "Create arrays, read items by index from 0, use `length` and `push`",
     "Repeat work with `for...of`, a classic `for` loop and `while`, and avoid infinite loops"
   ],
   learn:[
    {h:"Comparing values", body:[
      {lead:"Programs make decisions by asking yes-or-no questions, and each question is a comparison that gives back true or false."},
      {code:['console.log(5 === 5);  // true','console.log("5" === 5);  // false: different types','console.log("5" == 5);  // true: == converts first','console.log(3 !== 4);  // true','console.log(10 >= 10);  // true'].join("\n"), lang:"js", label:"Comparisons give booleans"},
      {table:[
        ["Operator","Asks","Example → result"],
        ["`===`","Same type **and** same value?","`2 === 2` → true"],
        ["`!==`","Different type or value?","`\"2\" !== 2` → true"],
        ["`<` `>`","Less than, greater than?","`3 > 7` → false"],
        ["`<=` `>=`","Less or equal, greater or equal?","`7 <= 7` → true"]
      ]},
      "**[[strict-equality|Strict equality]], `===`,** is the one to use. The older loose equality, `==`, converts values before comparing, with rules few people remember: `\"\" == 0` is true, and so is `\"0\" == 0`, but `\"\" == \"0\"` is false. Using `===` and converting on purpose (with `Number(…)`) keeps you in control. One more oddity: `NaN === NaN` is false, so use `Number.isNaN(x)` to test for NaN.",
      "Strings compare too, character by character, using each character’s code. That gives some surprises:",
      {code:['console.log("apple" < "banana"); // true','console.log("Zebra" < "apple");  // true: capitals first','console.log("10" < "9");  // true: compared as text','console.log(10 < 9);  // false'].join("\n"), lang:"js", label:"Comparing strings", cap:"`\"10\" < \"9\"` is true because \"1\" comes before \"9\", just as “apple” comes before “banana”. Convert to numbers before comparing amounts."}
    ]},
    {h:"if, else if and else", body:[
      "An **`if` statement** runs a block of code only when its **[[condition]]** is true. Add `else` for what to do otherwise, and `else if` for more cases. Here’s a community cinema’s ticket price:",
      {code:['const age = 70;','let price;','','if (age < 12) {','  price = 4;','} else if (age >= 65) {','  price = 6;','} else {','  price = 10;','}','console.log(`Ticket: ${price}`);  // Ticket: 6'].join("\n"), lang:"js", label:"Choosing a ticket price"},
      {list:[
        "The condition goes in round brackets `( )`; the code to run goes in curly braces `{ }`, called a **block**.",
        "JavaScript checks the conditions **from top to bottom** and runs the **first** block whose condition is true. All the others are skipped, even if they would also be true.",
        "`else` has no condition: it catches everything that didn’t match.",
        "The indentation (two spaces here) doesn’t change what the code does, but it shows at a glance which lines belong to which block."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="t2u4a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="45" y="8" width="130" height="28" rx="14" stroke-width="1.5"/><text x="110" y="27" text-anchor="middle">const age = 70</text><path class="d-ink" d="M110,36 L110,50" stroke-width="2" marker-end="url(#t2u4a3)"/><path class="d-lup" d="M40,80 L110,54 L180,80 L110,106 Z" stroke-width="2"/><text x="110" y="85" text-anchor="middle">age &lt; 12?</text><path class="d-ink" d="M180,80 L226,80" stroke-width="2" marker-end="url(#t2u4a3)"/><text class="s" x="203" y="72" text-anchor="middle">yes</text><rect class="d-soft" x="230" y="66" width="100" height="28" rx="5" stroke-width="1.5"/><text x="280" y="85" text-anchor="middle">price = 4</text><path class="d-ink" d="M110,106 L110,134" stroke-width="2" marker-end="url(#t2u4a3)"/><text class="s" x="118" y="124">no</text><path class="d-lup" d="M40,164 L110,138 L180,164 L110,190 Z" stroke-width="2"/><text x="110" y="169" text-anchor="middle">age &gt;= 65?</text><path class="d-ink" d="M180,164 L226,164" stroke-width="2.5" marker-end="url(#t2u4a3)"/><text class="s" x="203" y="156" text-anchor="middle">yes</text><rect class="d-sage" x="230" y="150" width="100" height="28" rx="5" stroke-width="2.5"/><text x="280" y="169" text-anchor="middle">price = 6</text><path class="d-ink" d="M110,190 L110,218" stroke-width="2" marker-end="url(#t2u4a3)"/><text class="s" x="118" y="208">no</text><rect class="d-soft" x="50" y="222" width="120" height="28" rx="5" stroke-width="1.5"/><text x="110" y="241" text-anchor="middle">else: price = 10</text><text class="s" x="10" y="276">Checks run top to bottom. The first true one</text><text class="s" x="10" y="292">wins; the rest are skipped. Age 70 gets 6.</text></svg>', alt:"A flowchart. Start: const age = 70. First diamond asks age less than 12; yes leads to price = 4, no leads down to a second diamond asking age greater than or equal to 65; yes leads to price = 6, which is highlighted; no leads down to else: price = 10. A note says checks run top to bottom, the first true one wins and the rest are skipped, so age 70 gets 6.", cap:"An `if … else if … else` chain is a set of questions asked in order."},
      {warn:"Order matters. If the first condition were `age >= 12` (adults and seniors), a 70-year-old would match it first and the senior check below it would never be reached. Put the most specific cases first."}
    ]},
    {h:"Combining conditions: and, or, not", body:[
      "Three **logical operators** build bigger questions from smaller ones:",
      {table:[
        ["Operator","Name","True when…"],
        ["`a && b`","and","**both** a and b are true"],
        ["`a || b`","or","**at least one** of them is true"],
        ["`!a`","not","a is false (it flips true and false)"]
      ]},
      {code:['const age = 30;','const isMember = true;','','const freeEntry = age < 5 || isMember;','console.log(freeEntry);  // true','','const canVolunteer = age >= 16 && age <= 80;','console.log(canVolunteer);  // true','console.log(!isMember);  // false'].join("\n"), lang:"js", label:"Garden club rules"},
      "Write each side in full. `age >= 16 && <= 80` is a SyntaxError, because `<= 80` on its own doesn’t say **what** is compared with 80.",
      {h:"Truthy and falsy"},
      "An `if` doesn’t need a real boolean. JavaScript converts whatever you give it, and a handful of values count as false. These are called **[[truthy-falsy|falsy]]**: `false`, `0`, `-0`, `0n`, `\"\"` (the empty string), `null`, `undefined` and `NaN`. Everything else is **truthy**, including `\"0\"`, `\"false\"` and `[]`.",
      {code:['const nickname = "";','if (nickname) {','  console.log(`Hi, ${nickname}`);','} else {','  console.log("Hi, friend");  // this runs','}'].join("\n"), lang:"js", label:"An empty string is falsy"},
      {warn:"The zero trap: if someone ordered `0` plates, `if (plates)` treats it like “no answer”. When 0 is a real answer, compare explicitly: `if (plates > 0)` or `if (plates !== undefined)`."}
    ]},
    {h:"Arrays: lists in order", body:[
      "An **[[array]]** holds several values in order, in square brackets, separated by commas. Each item has a position number called its **[[js-array-index|index]]**, and **counting starts at 0**:",
      {code:['const guests = ["Amara", "Kenji", "Lucía"];','console.log(guests[0]);  // Amara','console.log(guests.length);  // 3','console.log(guests[guests.length - 1]); // Lucía','console.log(guests[3]);  // undefined','','guests.push("Tomás");','console.log(guests.length);  // 4','console.log(guests.includes("Kenji")); // true'].join("\n"), lang:"js", label:"A guest list"},
      {list:[
        "`guests[0]` is the **first** item. The last item’s index is always `length - 1`, because counting started at 0.",
        "Asking for an index that doesn’t exist gives `undefined`, not an error, so typos here are quiet.",
        "`push(…)` adds an item to the end. `includes(…)` asks whether a value is in the list.",
        "The array is a `const`, yet `push` still works. `const` stops the **name** being moved to a different array; it doesn’t freeze the array’s contents."
      ]},
      "Why start at 0? The index says **how far from the start** an item is: the first item is 0 steps along. Most programming languages count this way, so it’s worth getting used to."
    ]},
    {h:"Loops: doing something for each item", body:[
      "A **[[loop]]** repeats a block of code. The simplest way to visit every item in an array is `for...of`:",
      {code:['const prices = [3.5, 2, 4.25];','let total = 0;','','for (const price of prices) {','  total = total + price;','}','console.log(total);  // 9.75'].join("\n"), lang:"js", label:"Adding up a basket", cap:"`total += price` is a common shorthand for `total = total + price`."},
      "Read it as “for each `price` in `prices`, run the block”. On the first time round, `price` is 3.5; then 2; then 4.25. Then there are no items left, so the loop ends and the next line runs. Note the two variables: `total` is a `let` because it changes, and `price` can be a `const` because each time round it’s a fresh variable.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="t2u4a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">prices = [3.5, 2, 4.25]</text><rect class="d-gold" x="10" y="28" width="100" height="32" rx="4" stroke-width="1.5"/><text x="60" y="49" text-anchor="middle">3.5</text><rect class="d-gold" x="120" y="28" width="100" height="32" rx="4" stroke-width="1.5"/><text x="170" y="49" text-anchor="middle">2</text><rect class="d-gold" x="230" y="28" width="100" height="32" rx="4" stroke-width="1.5"/><text x="280" y="49" text-anchor="middle">4.25</text><text class="s" x="60" y="76" text-anchor="middle">index 0</text><text class="s" x="170" y="76" text-anchor="middle">index 1</text><text class="s" x="280" y="76" text-anchor="middle">index 2</text><text class="s" x="10" y="98">length is 3, so the last index is 2</text><path class="d-lup" d="M30,150 L120,122 L210,150 L120,178 Z" stroke-width="2"/><text x="120" y="155" text-anchor="middle">another item?</text><path class="d-ink" d="M120,178 L120,206" stroke-width="2" marker-end="url(#t2u4a4)"/><text class="s" x="128" y="198">yes</text><rect class="d-sage" x="30" y="210" width="180" height="48" rx="6" stroke-width="2"/><text x="120" y="230" text-anchor="middle">price = next item</text><text x="120" y="249" text-anchor="middle">run the { } block</text><path class="d-ink" d="M30,234 L14,234 L14,150 L26,150" stroke-width="2" marker-end="url(#t2u4a4)"/><path class="d-ink" d="M210,150 L246,150" stroke-width="2" marker-end="url(#t2u4a4)"/><text class="s" x="228" y="142" text-anchor="middle">no</text><rect class="d-panel" x="250" y="134" width="80" height="32" rx="6" stroke-width="1.5"/><text x="290" y="155" text-anchor="middle">carry on</text><text class="s" x="10" y="286">The block runs once per item: three times here.</text></svg>', alt:"Top: an array of three prices, 3.5, 2 and 4.25, in boxes labelled index 0, index 1 and index 2, with the note that length is 3 so the last index is 2. Below, a loop flowchart: a diamond asks another item?; yes leads to a box saying price = next item, run the block, with an arrow looping back to the diamond; no leads to carry on.", cap:"A `for...of` loop asks “another item?” before every round, and stops when the answer is no."}
    ]},
    {h:"The classic for loop, and while", body:[
      "Sometimes you need the position number too, for example to number a recipe’s steps. The **classic `for` loop** has three parts in its brackets, separated by semicolons:",
      {code:['const steps = ["Wash", "Chop", "Fry"];','','for (let i = 0; i < steps.length; i++) {','  console.log(`${i + 1}. ${steps[i]}`);','}','// 1. Wash','// 2. Chop','// 3. Fry'].join("\n"), lang:"js", label:"Numbered steps"},
      {ol:[
        "`let i = 0` runs **once**, before anything else: it creates a counter.",
        "`i < steps.length` is checked **before every round**. While it’s true, the block runs; when it’s false, the loop ends.",
        "`i++` (short for `i = i + 1`) runs **after every round**."
      ]},
      "The condition is `i < steps.length`, not `<=`. With `<=` the loop would also run with `i` equal to 3 and log `4. undefined`: the classic **off-by-one** mistake.",
      "A **`while` loop** has only a condition. It suits jobs where you don’t know in advance how many rounds you need:",
      {code:['let seedlings = 1;','let weeks = 0;','while (seedlings < 100) {','  seedlings = seedlings * 2;','  weeks = weeks + 1;','}','console.log(weeks);  // 7'].join("\n"), lang:"js", label:"How many weeks until 100 seedlings?", cap:"1, 2, 4, 8, 16, 32, 64, 128: seven doublings to pass 100."},
      {lab:"wl-js-fix", t:"Review of Lesson 1: read the error messages and fix a broken Like button"}
    ]},
    {h:"Avoiding infinite loops", body:[
      "A loop stops only when its condition becomes false. If nothing inside the loop ever changes the condition, it runs forever:",
      {code:['// Do NOT run this: it never stops','let count = 0;','while (count < 5) {','  console.log(count);','  // forgot: count = count + 1;','}'].join("\n"), lang:"js", label:"An infinite loop", cap:"`count` stays 0, so `count < 5` is true for ever."},
      "The tab then freezes, because the browser is busy running your loop and can’t redraw the page. It isn’t dangerous: close the tab (browsers may also offer to stop an unresponsive page), fix the code, and reopen.",
      {list:[
        "**Prefer `for...of`** for arrays: it stops by itself when the items run out (as long as the loop doesn’t keep adding to that same array; see the last point).",
        "**Check the update.** In a `while` loop, find the line that moves things towards the end (`count = count + 1`). In a classic `for`, check the third part.",
        "**Check the direction.** `for (let i = 10; i > 0; i++)` counts **up** while waiting for `i` to get small, so it never ends.",
        "**Don’t change an array while looping over it**, for example by pushing to the same array inside a `for...of`: the end keeps moving away."
      ]},
      {key:"Every loop needs an exit: a condition that will become false, and code inside that moves towards it."}
    ]}
   ],
   try:[
    {id:"t2u4-l3-x1", type:"sort", q:"Does each expression give `true` or `false`?", buckets:["true","false"], items:[
      {t:"`5 === 5`", b:0, why:"Same type, same value."},
      {t:"`\"5\" === 5`", b:1, why:"A string and a number are different types, and `===` checks the type too."},
      {t:"`\"5\" == 5`", b:0, why:"Loose `==` converts the string to a number first, so it says true. That conversion is why `===` is preferred."},
      {t:"`\"10\" < \"9\"`", b:0, why:"Both are strings, so they’re compared as text, character by character, and \"1\" comes before \"9\". As numbers, 10 < 9 would be false."},
      {t:"`10 > 9 && 2 > 3`", b:1, why:"`&&` needs both sides to be true. 10 > 9 is true, but 2 > 3 is false."},
      {t:"`10 > 9 || 2 > 3`", b:0, why:"`||` needs at least one side to be true, and 10 > 9 is."},
      {t:"`!true`", b:1, why:"`!` flips the value: not true is false."},
      {t:"`NaN === NaN`", b:1, why:"NaN is the one value that isn’t equal to itself. Test with `Number.isNaN(x)`."}
    ]},
    {id:"t2u4-l3-x2", type:"mcq", q:"Hana’s museum charges children (under 12) 3, adults 8, and seniors (65 and over) 5. She writes:\n\n`if (age >= 12) { price = 8; }`\n`else if (age >= 65) { price = 5; }`\n`else { price = 3; }`\n\nWhat price does a 70-year-old get, and why?", options:[
      {t:"8, because 70 matches `age >= 12` first and the senior check is never reached", ok:true, why:"Right. JavaScript runs the first block whose condition is true. Checking `age >= 65` first (or writing `age >= 12 && age < 65`) fixes it."},
      {t:"5, because 70 is over 65", why:"The senior check never runs. The first condition, `age >= 12`, is already true for 70, and only the first true block runs."},
      {t:"Both 8 and 5, one after the other", why:"An `if … else if … else` chain runs exactly one block: the first whose condition is true."},
      {t:"3, because `else` catches everyone left over", why:"`else` only runs if none of the conditions above it were true. For 70, the first condition was true."}
    ]},
    {id:"t2u4-l3-x3", type:"number", q:"`const days = [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\"];`\n\nWhat index do you write inside `days[ ]` to get `\"Thu\"`?", answer:3, tol:0, unit:"", why:"Indexes start at 0: Mon is 0, Tue 1, Wed 2, **Thu 3**, Fri 4.", wrongs:[
      {v:4, tol:0, why:"That counts from 1, as people usually do. Array indexes start at 0, so Thu is at 3 (and `days[4]` is Fri)."},
      {v:5, tol:0, why:"5 is the array’s `length`. The last valid index is 4, and Thu is at 3."}
    ]},
    {id:"t2u4-l3-x4", type:"number", q:"What does this log?\n\n`let total = 0;`\n`for (let i = 1; i <= 4; i++) {`\n`  total = total + i * 2;`\n`}`\n`console.log(total);`", answer:20, tol:0, unit:"", why:"`i` takes the values 1, 2, 3 and 4 (the condition is `<=`, so 4 is included). Each round adds `i * 2`: 2 + 4 + 6 + 8 = **20**.", wrongs:[
      {v:12, tol:0, why:"That stops at i = 3 (2 + 4 + 6). The condition is `i <= 4`, so the round with i = 4 also runs and adds 8."},
      {v:10, tol:0, why:"That adds 1 + 2 + 3 + 4 and forgets the `* 2`. Multiplication happens before the addition here: each round adds i × 2."},
      {v:30, tol:0, why:"That starts i at 0 and goes to 5, or adds an extra round. The loop starts at 1 and stops after 4."}
    ]},
    {id:"t2u4-l3-x5", type:"order", q:"Put the steps of `for (let i = 0; i < 3; i++) { … }` in the order they happen.", items:[
      {t:"Run `let i = 0` (only once)", why:"The first part runs once, before the loop starts."},
      {t:"Check `i < 3`: it’s true", why:"The condition is checked before every round, including the first."},
      {t:"Run the block with `i` equal to 0", why:"Because the check was true, the body runs."},
      {t:"Run `i++`, so `i` becomes 1", why:"The third part runs after each round."},
      {t:"Check `i < 3` again, and keep repeating until it’s false", why:"The loop goes round with i = 1 and i = 2; when i reaches 3, the check is false."},
      {t:"Leave the loop and run the line after it", why:"A false check ends the loop."}
    ]},
    {id:"t2u4-l3-x6", type:"spot", q:"This loop never ends. Tap the line that causes it.", ask:"causes the infinite loop", mono:true, parts:[
      {t:"let count = 0;", flag:false, why:"Starting a counter at 0 is fine."}, "\n", {t:"while (count < 5) {", flag:false, why:"A sensible condition, as long as something inside makes count grow."}, "\n  ", {t:"console.log(count);", flag:false, why:"Logging doesn’t change anything, so it isn’t the cause."}, "\n  ", {t:"count + 1;", flag:true, why:"This works out count + 1 and throws the answer away: nothing is assigned. `count` stays 0 for ever. It should be `count = count + 1;` (or `count++;`)."}, "\n}"
    ]},
    {id:"t2u4-l3-x7", type:"mcq", q:"Oluwaseun’s order form asks how many extra plates are needed, and stores the answer as a number in `plates`. His code says `if (plates) { … } else { showMessage(\"Please answer\"); }`. A guest types 0. What happens?", options:[
      {t:"The guest is told to answer, because 0 is falsy", ok:true, why:"Right. 0 counts as false in an `if`, so a real answer of 0 is treated like no answer. Check what you mean instead, such as `plates >= 0`, or check for a missing value separately."},
      {t:"The form accepts 0 normally, because a number is always truthy", why:"Numbers aren’t always truthy: 0 (and NaN) are falsy."},
      {t:"JavaScript shows an error, because `if` needs a boolean", why:"`if` accepts any value and converts it. No error; just the wrong branch for 0."},
      {t:"It depends on the browser", why:"Truthy and falsy are defined by the language standard, so every browser behaves the same."}
    ]}
   ],
   apply:{intro:"Write small programs that decide and repeat. Use the Console on a computer, or a Web Lab JavaScript pane on a phone (put results in `console.log` and tap **Check** to see them).", tasks:[
     {t:"Decide a price with your own rules", how:["Invent a pricing rule with three cases, for example a swimming pool, a bus fare or a workshop (children, adults, a discount group).","Write `const age = …;` and an `if … else if … else` chain that sets `let price`.","Test at least four ages, including the exact boundaries (such as 12 and 65). Change the `const` each time.","Swap the order of two conditions and see whether any age now gets the wrong price."], write:"Which ages did you test, and did any boundary give a surprise?"},
     {t:"Loop over a list", how:["Make an array of five shopping prices and add them up with `for...of`.","Make an array of four recipe steps and number them with a classic `for` loop and a template literal.","Change `<` to `<=` in the classic loop and see what is logged. Change it back.","Bonus: use `push` to add a sixth price before the loop, and check that the total changes."], write:"Paste your output, including the off-by-one line."},
     {t:"Count with while", how:["A savings jar starts with 10 and grows by 15 each week. Write a `while` loop that counts the weeks until it holds at least 100.","Predict the answer on paper first, then run it.","Deliberately remove the line that adds 15, and think about what would happen (don’t run it, or be ready to close the tab)."], write:"Your prediction, the real answer, and what would happen without the update line."}
   ], proof:"Output showing a three-case `if` chain tested at its boundaries, a `for...of` total, a numbered list from a classic `for` loop (plus the off-by-one version), and a `while` loop that stops at the right week."},
   read:[
     {book:"mdn", where:"Dynamic scripting with JavaScript → Making decisions in your code — conditionals; Arrays; Looping code"},
     {book:"ejs", where:"Chapter 2, “Program Structure”, sections “Control flow” to “Updating bindings succinctly”, and Chapter 4, “Data Structures: Objects and Arrays”, sections “Datasets” and “Array loops”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u4-l4", title:"Functions and objects", minutes:55,
   hook:{q:"Ana writes `function double(n) { n * 2; }` and then `console.log(double(5));`. What is logged?", options:["10","5","undefined","An error"], answer:2, reveal:"It logs `undefined`. The function works out 10 and then throws it away, because nothing sends the result back. To hand a value back to the code that called it, a function needs the word `return`: `return n * 2;`. This lesson covers how functions take inputs and return outputs, where their variables can be seen, and how objects group related values."},
   goals:[
     "Declare and call functions, and pass values in through parameters",
     "Use `return` to send a result back, and tell it apart from `console.log`",
     "Explain scope: which variables are visible inside and outside a function or block",
     "Read and write arrow functions",
     "Create objects with properties and methods, and loop over arrays of objects"
   ],
   learn:[
    {h:"Why functions?", body:[
      {lead:"A function is a named, reusable piece of code: write the steps once, then run them whenever you need them by calling the name."},
      "Think of a recipe card. You write “Pancakes” on top and the steps below once; after that, saying “make pancakes” is enough. A **[[function-js|function]]** is a recipe card for the computer. You’ve already used built-in ones: `console.log(…)`, `Number(…)`, `\"garden\".toUpperCase()`. Now you’ll write your own.",
      {code:['function greet(person) {','  console.log(`Hello, ${person}!`);','}','','greet("Amara");  // Hello, Amara!','greet("Kenji");  // Hello, Kenji!'].join("\n"), lang:"js", label:"Declaring and calling a function"},
      {list:[
        "`function` starts a **declaration**. Then comes the name (`greet`), the **[[parameter|parameters]]** in round brackets, and the **body** in curly braces.",
        "Declaring a function does nothing visible. It only runs when it is **called**: its name followed by round brackets, `greet(\"Amara\")`.",
        "Calling it twice runs the body twice, with a different value each time. That’s the whole point: one definition, many uses."
      ]},
      "Functions are also how you **name an idea**. A line like `splitBill(60, 4)` says what it does; the details live in one place, so a fix there fixes every use."
    ]},
    {h:"Parameters and arguments", body:[
      "A **parameter** is a placeholder name in the function’s definition. An **argument** is the actual value you pass when you call it. When the function runs, each parameter takes the value of the matching argument, **by position**:",
      {code:['function splitBill(total, people) {','  return total / people;','}','','const share = splitBill(60, 4);','console.log(share);  // 15','console.log(splitBill(90, 3));  // 30'].join("\n"), lang:"js", label:"Two parameters"},
      "In `splitBill(60, 4)`, the first argument (60) becomes `total` and the second (4) becomes `people`. Swap them, `splitBill(4, 60)`, and you get 0.0666…: JavaScript can’t know you meant otherwise.",
      "Leave an argument out and that parameter is `undefined`. `splitBill(60)` calculates `60 / undefined`, which is NaN. You can give a parameter a **default value** to use when it’s missing:",
      {code:['function welcome(person = "friend") {','  return `Welcome, ${person}!`;','}','console.log(welcome());  // Welcome, friend!','console.log(welcome("Mei"));  // Welcome, Mei!'].join("\n"), lang:"js", label:"A default value"}
    ]},
    {h:"Return values", body:[
      "The word **`return`** does two things: it sends a value back to the code that called the function, and it **ends** the function straight away. The value that comes back is the **[[return-value|return value]]**, and you can store it, log it or use it in a calculation, just like any other value.",
      {fig:'<svg viewBox="0 0 340 312"><defs><marker id="t2u4a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="95" y="8" width="150" height="30" rx="15" stroke-width="1.5"/><text x="170" y="28" text-anchor="middle">splitBill(60, 4)</text><text class="s" x="10" y="58">arguments</text><path class="d-ink" d="M130,38 L100,82" stroke-width="2" marker-end="url(#t2u4a5)"/><path class="d-ink" d="M210,38 L240,82" stroke-width="2" marker-end="url(#t2u4a5)"/><rect class="d-gold" x="58" y="86" width="96" height="26" rx="5" stroke-width="1.5"/><text x="106" y="104" text-anchor="middle">total = 60</text><rect class="d-gold" x="186" y="86" width="104" height="26" rx="5" stroke-width="1.5"/><text x="238" y="104" text-anchor="middle">people = 4</text><text class="s" x="10" y="132">parameters take the values, by position</text><rect class="d-lup" x="20" y="142" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="166" text-anchor="middle">function splitBill(total, people)</text><text x="170" y="190" text-anchor="middle">{ return total / people; }</text><path class="d-ink" d="M170,204 L170,232" stroke-width="2" marker-end="url(#t2u4a5)"/><text class="s" x="180" y="224">return value</text><rect class="d-sage" x="130" y="236" width="80" height="30" rx="15" stroke-width="2"/><text x="170" y="256" text-anchor="middle">15</text><text class="s" x="10" y="290">The 15 goes back to where the call was:</text><text class="s" x="10" y="306">const share = splitBill(60, 4); stores 15.</text></svg>', alt:"The call splitBill(60, 4) at the top. Arrows take the arguments 60 and 4 down into the parameters total = 60 and people = 4. They feed a box containing function splitBill(total, people) with the body return total / people. An arrow labelled return value leads to 15. A note says the 15 goes back to where the call was, so const share = splitBill(60, 4) stores 15.", cap:"Arguments go in, parameters receive them, and `return` sends one value back to the place the function was called."},
      "The most common beginner mix-up is between **returning** and **logging**:",
      {code:['function doubleAndLog(n) {','  console.log(n * 2);','}','function double(n) {','  return n * 2;','}','','const a = doubleAndLog(5);  // logs 10','const b = double(5);  // logs nothing','console.log(a);  // undefined','console.log(b);  // 10'].join("\n"), lang:"js", label:"Logging is not returning"},
      "`console.log` only **shows** a value to a human in the Console; the program can’t use it. `return` **hands** the value back to the program. A function with no `return` gives back `undefined`, which is why the warm-up logged `undefined`.",
      {tip:"Anything after a `return` in the same block never runs. If a line seems to be ignored, check whether it comes after a `return`."}
    ]},
    {h:"Scope: where names can be seen", body:[
      "Variables created inside a function exist only inside it. That region is the variable’s **[[js-scope|scope]]**:",
      {code:['function addTip(bill) {','  const tip = bill * 0.2;','  return bill + tip;','}','console.log(addTip(50));  // 60','console.log(tip);  // ReferenceError'].join("\n"), lang:"js", label:"A local variable", cap:"`tip` was created inside `addTip`, so outside it Chrome says `ReferenceError: tip is not defined`."},
      "`let` and `const` are also limited to the **block** (the `{ }`) they’re created in, including the blocks of `if` and loops. Code inside a function **can** see variables from outside it, though:",
      {code:['const taxRate = 0.1;','','function withTax(price) {','  return price + price * taxRate;','}','console.log(withTax(20));  // 22'].join("\n"), lang:"js", label:"Seeing outwards", cap:"Inner code can see outer variables, not the other way round. Think of one-way windows: you can look out from a room, but not into it."},
      "Why is this good? Two functions can both use a variable called `total` without interfering, and a function’s helpers can’t be broken by code elsewhere. Keep variables in the smallest scope that works, and pass values in as parameters rather than reaching for outside variables."
    ]},
    {h:"Arrow functions", body:[
      "There’s a shorter way to write a function, called an **[[arrow-function|arrow function]]**, which you’ll see often in modern code, especially with events in Lesson 5:",
      {code:['const double = (n) => n * 2;','console.log(double(21));  // 42','','const splitBill = (total, people) => {','  const share = total / people;','  return share;','};','console.log(splitBill(60, 4));  // 15'].join("\n"), lang:"js", label:"Arrow functions"},
      {list:[
        "The parameters go in brackets, then `=>` (an equals sign and a greater-than sign, read “goes to”).",
        "With a single expression and no braces, the result is returned automatically: `(n) => n * 2`.",
        "With braces, it’s an ordinary body and you need `return`, just like a declared function. Forgetting it gives `undefined` again.",
        "Here the arrow function is stored in a `const`, and it’s called the same way as any function: `double(21)`."
      ]},
      "Arrow functions and `function` declarations differ in a few advanced ways. For now, treat them as two spellings of the same idea; use whichever the surrounding code uses."
    ]},
    {h:"Objects: values with named parts", body:[
      "An array keeps values in numbered order. An **[[object]]** keeps values under **names**, like a labelled card. Each name–value pair is a **property**:",
      {code:['const book = {','  title: "The Shared Garden",','  pages: 320,','  borrowed: false','};','','console.log(book.title);  // The Shared Garden','console.log(book["pages"]);  // 320','book.borrowed = true;  // change a property','book.dueDays = 14;  // add a new one','console.log(book.author);  // undefined'].join("\n"), lang:"js", label:"A library book"},
      {list:[
        "Curly braces create the object; each property is `name: value`, separated by commas.",
        "**Dot notation**, `book.title`, reads a property. **Bracket notation**, `book[\"pages\"]`, does the same with the name as a string, which is useful when the name is in a variable.",
        "Assigning to a property changes it, or adds it if it’s new. Reading one that doesn’t exist gives `undefined`, not an error.",
        "`book` is a `const`, but its properties can still change. As with arrays, `const` only fixes which object the name points to."
      ]},
      "Values can be anything, including arrays and other objects: `{ name: \"Sione\", skills: [\"guitar\", \"first aid\"] }`."
    ]},
    {h:"Methods, and arrays of objects", body:[
      "A property whose value is a function is called a **[[js-method|method]]**. You’ve been calling methods all along: `toUpperCase` is a method of strings, and `push` a method of arrays. You can write your own:",
      {code:['const counter = {','  count: 0,','  add() {','    this.count = this.count + 1;','    return this.count;','  }','};','counter.add();','console.log(counter.add());  // 2'].join("\n"), lang:"js", label:"A method", cap:"Inside a method, `this` means the object the method was called on, here `counter`."},
      "Real data is often a **list of similar things**: books on loan, events in a calendar, plants in a garden. That’s an array of objects, and a `for...of` loop with an `if` inside does a lot of useful work:",
      {code:['const loans = [','  { title: "Atlas", days: 7 },','  { title: "Poems", days: 21 },','  { title: "Recipes", days: 14 }','];','','let longLoans = 0;','for (const loan of loans) {','  if (loan.days > 10) {','    longLoans++;','    console.log(`${loan.title}: ${loan.days} days`);','  }','}','console.log(longLoans);','// Poems: 21 days','// Recipes: 14 days','// 2'].join("\n"), lang:"js", label:"Loans longer than 10 days"},
      "Each time round, `loan` is one object, so `loan.days` and `loan.title` read that object’s properties. This pattern (loop, check, count or collect) appears in almost every program.",
      {lab:"wl-js-counter", t:"Practise: a click counter, built from a variable and a function that runs on each click"},
      {key:"Arrays answer “which one, in what order?”; objects answer “which property?”. Arrays of objects answer both."}
    ]}
   ],
   try:[
    {id:"t2u4-l4-x1", type:"mcq", q:"Priya writes a function that works out a total and `console.log`s it, with no `return`. The Console shows the right number, but `const total = basketTotal(prices);` leaves `total` as `undefined`. Why?", options:[
      {t:"`console.log` only displays the value; without `return`, the function gives back `undefined`", ok:true, why:"Right. Logging shows the number to a person; returning hands it to the program. Add `return` with the total at the end of the function."},
      {t:"`const` can’t store the result of a function", why:"`const` can store any value, including a function’s return value. There just isn’t one to store yet."},
      {t:"The function ran twice and the second time it was empty", why:"Calling it once runs it once. The problem is that nothing is returned."},
      {t:"The variable name `total` is reserved", why:"`total` is an ordinary name. The `undefined` comes from the missing `return`."}
    ]},
    {id:"t2u4-l4-x2", type:"number", q:"What does `price(3, 4)` return?\n\n`function price(qty, each) {`\n`  return qty * each + 2;`\n`}`", answer:14, tol:0, unit:"", why:"`qty` is 3 and `each` is 4. Multiplication comes first: 3 × 4 = 12, then + 2 = **14**.", wrongs:[
      {v:18, tol:0, why:"That adds first: 3 × (4 + 2). Without brackets, `*` happens before `+`, so it’s 3 × 4 + 2 = 14."},
      {v:9, tol:0, why:"That adds everything: 3 + 4 + 2. The function multiplies qty by each."},
      {v:12, tol:0, why:"That’s 3 × 4 without the + 2. The `return` line adds 2 after multiplying."}
    ]},
    {id:"t2u4-l4-x3", type:"match", q:"In this code, match each part with its role:\n\n`function splitBill(total, people) { return total / people; }`\n`const share = splitBill(60, 4);`", pairs:[
      ["`splitBill`","The function’s name","The name comes straight after `function`, and it’s what you call."],
      ["`total` and `people`","Parameters","Placeholder names in the definition, which receive values when it’s called."],
      ["`60` and `4`","Arguments","The actual values passed in the call, matched to parameters by position."],
      ["`return total / people;`","Sends the result back to the caller","`return` hands the result back, and `share` stores it (15)."],
      ["`splitBill(60, 4)`","A call that runs the function","A name followed by round brackets runs the function."]
    ]},
    {id:"t2u4-l4-x4", type:"spot", q:"Running this script gives `ReferenceError: tip is not defined`. Tap the line that causes it.", ask:"causes the ReferenceError", mono:true, parts:[
      {t:"function addTip(bill) {", flag:false, why:"An ordinary function declaration."}, "\n  ", {t:"const tip = bill * 0.2;", flag:false, why:"Creating `tip` here is fine; it just only exists inside this function."}, "\n  ", {t:"return bill + tip;", flag:false, why:"Inside the function, `tip` is visible, so this works."}, "\n}\n", {t:"console.log(addTip(50));", flag:false, why:"Calls the function and logs 60. No problem."}, "\n", {t:"console.log(tip);", flag:true, why:"`tip` is local to `addTip`. Outside the function it doesn’t exist, so this line throws the ReferenceError. Use the returned value instead."}
    ]},
    {id:"t2u4-l4-x5", type:"sort", q:"Each line works with `const book = { title: \"Atlas\", describe() { … } }` or with strings and arrays. Is it reading a property or calling a method?", buckets:["Reads a property","Calls a method"], items:[
      {t:"`book.title`", b:0, why:"No round brackets: it just reads the value stored under `title`."},
      {t:"`book.describe()`", b:1, why:"The round brackets call the function stored in `describe`."},
      {t:"`\"hi\".toUpperCase()`", b:1, why:"`toUpperCase` is a string method; the brackets call it."},
      {t:"`guests.length`", b:0, why:"`length` is a property of arrays (and strings), read without brackets."},
      {t:"`guests.push(\"Mei\")`", b:1, why:"`push` is an array method, called with the value to add."},
      {t:"`book[\"title\"]`", b:0, why:"Bracket notation reads a property by its name as a string; no call happens."}
    ]},
    {id:"t2u4-l4-x6", type:"mcq", q:"`const pet = { name: \"Biscuit\", age: 4 };` What does `console.log(pet.colour);` show?", options:[
      {t:"`undefined`", ok:true, why:"Right. Reading a property that doesn’t exist gives `undefined`, without an error. (So a typo such as `pet.nmae` also gives `undefined`: worth knowing when debugging.)"},
      {t:"A ReferenceError", why:"ReferenceErrors are for unknown **variable** names. `pet` exists; a missing property on it just gives `undefined`."},
      {t:"`null`", why:"JavaScript doesn’t use `null` for missing properties; that’s `undefined`. `null` appears only when something is set to it."},
      {t:"An empty string", why:"Nothing is created automatically. A missing property reads as `undefined`."}
    ]},
    {id:"t2u4-l4-x7", type:"number", q:"How many plants does this count?\n\n`const plants = [`\n`  { name: \"Basil\", water: 2 },`\n`  { name: \"Fern\", water: 5 },`\n`  { name: \"Cactus\", water: 0 },`\n`  { name: \"Mint\", water: 3 }`\n`];`\n`let thirsty = 0;`\n`for (const p of plants) {`\n`  if (p.water > 1) { thirsty++; }`\n`}`", answer:3, tol:0, unit:"plants", why:"Check each plant’s `water`: Basil 2 > 1 yes, Fern 5 yes, Cactus 0 no, Mint 3 yes. That’s **3**.", wrongs:[
      {v:4, tol:0, why:"That counts every plant. Cactus has `water: 0`, and 0 > 1 is false, so it isn’t counted."},
      {v:10, tol:0, why:"That adds up the water amounts (2 + 5 + 0 + 3). The loop adds 1 to `thirsty` for each matching plant; it never adds the water values."},
      {v:2, tol:0, why:"Check Basil again: 2 > 1 is true. Only Cactus fails the test."}
    ]}
   ],
   apply:{intro:"Write your own functions and objects. Use the Console on a computer, or a Web Lab JavaScript pane on a phone (tap **Check** to see the Console output).", tasks:[
     {t:"A function that returns", how:["Write `function splitBill(total, people)` that returns the share.","Call it with three different bills and log the results.","Add a third parameter, `tipPercent`, with a default of 10, and include the tip in the result.","Write the same function as an arrow function stored in a `const`, and check it gives the same answers."], write:"Paste your function and three results. What happened when you left out the third argument?"},
     {t:"Prove scope to yourself", how:["Create a variable inside a function and try to log it outside. Copy the error.","Create a `const` inside an `if` block and try to log it after the block.","Create a variable outside a function and use it inside. Does it work?"], write:"Which of the three worked, and why?"},
     {t:"An array of objects of your choice", how:["Pick a small list: books you want to read, plants, a club’s events, a week of meals.","Make an array of at least four objects, each with the same two or three properties (for example `title`, `pages`, `finished`).","Loop over it with `for...of` and log one line per item using a template literal.","Add an `if` to count the items that match a condition (unfinished books, events this month), and log the count."], write:"Paste your array and the output."}
   ], proof:"A working `splitBill` (declaration and arrow versions) with a default parameter, notes on three scope experiments, and an array of at least four objects with a loop that lists and counts them."},
   read:[
     {book:"mdn", where:"Dynamic scripting with JavaScript → Functions — reusable blocks of code; Build your own function; Function return values; JavaScript object basics"},
     {book:"ejs", where:"Chapter 3, “Functions” (Defining a function, Bindings and scopes, Arrow functions, Optional Arguments) and Chapter 4, “Data Structures: Objects and Arrays” (Properties, Methods, Objects)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u4-l5", title:"Making pages interactive", minutes:60,
   hook:{q:"A page shows whatever name a visitor types. Someone types `<b>Sam</b>`. Version A displays it with `textContent`; version B with `innerHTML`. What does each show?", options:["Both show **Sam** in bold","A shows the tags exactly as typed; B shows **Sam** in bold","A shows **Sam** in bold; B shows the tags as typed","Both show the tags exactly as typed"], answer:1, reveal:"`textContent` treats everything as plain text, so the visitor sees the angle brackets. `innerHTML` reads the text as HTML and builds a bold element. Bold is harmless, but the same door lets in HTML that runs someone else’s code, which is why `textContent` is the safe choice for anything people type. This lesson shows how JavaScript finds, changes and listens to the page."},
   goals:[
     "Explain the DOM as the browser’s live tree of the page",
     "Find elements with `document.querySelector` and `querySelectorAll`, and handle `null`",
     "Change text with `textContent`, and explain why `innerHTML` with user input is risky",
     "Toggle classes with `classList`, respond to clicks with `addEventListener`, and read input values",
     "Build a small working tool, and debug it with `console.log` and the Console"
   ],
   learn:[
    {h:"The DOM: the page as a tree", body:[
      {lead:"When a browser reads HTML, it builds a tree of objects in memory. JavaScript changes that tree, and the screen follows."},
      "That tree is the **[[dom|DOM]]**, short for Document Object Model. Each element becomes an object (a **node**) with properties you can read and change, such as its text and its classes. Elements inside other elements become their **children**, so the page forms a family tree with `document` at the top.",
      {fig:'<svg viewBox="0 0 340 344"><defs><marker id="t2u4a6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><path class="d-ink" d="M170,32 L170,50 M170,74 L90,92 M170,74 L250,92 M90,116 L90,134 M250,116 L190,134 M250,116 L257,134 M250,116 L315,134" stroke-width="1.5"/><rect class="d-inkf" x="115" y="8" width="110" height="24" rx="12"/><text class="d-panel" x="170" y="25" text-anchor="middle" stroke-width="0">document</text><rect class="d-panel" x="135" y="50" width="70" height="24" rx="5" stroke-width="1.5"/><text x="170" y="67" text-anchor="middle">html</text><rect class="d-panel" x="55" y="92" width="70" height="24" rx="5" stroke-width="1.5"/><text x="90" y="109" text-anchor="middle">head</text><rect class="d-panel" x="215" y="92" width="70" height="24" rx="5" stroke-width="1.5"/><text x="250" y="109" text-anchor="middle">body</text><rect class="d-panel" x="55" y="134" width="70" height="24" rx="5" stroke-width="1.5"/><text x="90" y="151" text-anchor="middle">title</text><rect class="d-lup" x="165" y="134" width="50" height="24" rx="5" stroke-width="1.5"/><text x="190" y="151" text-anchor="middle">h1</text><rect class="d-rose" x="222" y="134" width="70" height="24" rx="5" stroke-width="2"/><text x="257" y="151" text-anchor="middle">button</text><rect class="d-sage" x="298" y="134" width="36" height="24" rx="5" stroke-width="2"/><text x="316" y="151" text-anchor="middle">p</text><text class="s" x="10" y="180">The DOM: the page as a tree of objects</text><rect class="d-rose" x="10" y="196" width="150" height="46" rx="8" stroke-width="2"/><text x="85" y="215" text-anchor="middle">1. You tap</text><text x="85" y="233" text-anchor="middle">the button</text><path class="d-ink" d="M160,219 L176,219" stroke-width="2" marker-end="url(#t2u4a6)"/><rect class="d-lup" x="180" y="196" width="150" height="46" rx="8" stroke-width="2"/><text x="255" y="215" text-anchor="middle">2. The listener</text><text x="255" y="233" text-anchor="middle">function runs</text><path class="d-ink" d="M255,242 L255,262" stroke-width="2" marker-end="url(#t2u4a6)"/><rect class="d-sage" x="180" y="266" width="150" height="46" rx="8" stroke-width="2"/><text x="255" y="285" text-anchor="middle">3. It changes</text><text x="255" y="303" text-anchor="middle">p.textContent</text><path class="d-ink" d="M180,289 L164,289" stroke-width="2" marker-end="url(#t2u4a6)"/><rect class="d-gold" x="10" y="266" width="150" height="46" rx="8" stroke-width="2"/><text x="85" y="285" text-anchor="middle">4. The browser</text><text x="85" y="303" text-anchor="middle">redraws the page</text><path class="d-ink" d="M85,266 L85,246" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#t2u4a6)"/><text class="s" x="10" y="336">JavaScript changes the tree; the screen follows.</text></svg>', alt:"Top: a tree. document at the top, then html, which has two children, head and body. head contains title; body contains h1, button and p. Below, a cycle of four steps: 1, you tap the button; 2, the listener function runs; 3, it changes p.textContent; 4, the browser redraws the page, ready for the next tap.", cap:"The DOM tree, and the cycle behind almost every interactive page: an event, a function, a change, a redraw."},
      "The DOM is **live**. View source (on a computer) shows the HTML file as it was downloaded; the **Elements** panel (Inspector in Firefox) in the developer tools shows the DOM as it is **now**, including every change your script has made. When a page looks different from its source, that’s why.",
      "Almost every interactive page follows the cycle in the diagram: **find** an element, **listen** for an event, **change** the DOM in response. The rest of this lesson takes those three steps one at a time."
    ]},
    {h:"Finding elements with querySelector", body:[
      "`document.querySelector(…)` takes a **CSS selector**, the same kind you write in a stylesheet, and gives back the **first** element that matches. `querySelectorAll(…)` gives back **all** of them, in a list you can loop over.",
      {code:['<h1>Bake sale</h1>','<p class="price">Scones: 2</p>','<p class="price">Bread: 4</p>','<p id="total"></p>'].join("\n"), lang:"html", label:"Some HTML"},
      {code:['const heading = document.querySelector("h1");','const firstPrice = document.querySelector(".price");','const total = document.querySelector("#total");','','const prices = document.querySelectorAll(".price");','console.log(prices.length);  // 2','for (const p of prices) {','  console.log(p.textContent);  // Scones: 2, Bread: 4','}','','console.log(document.querySelector("#totl"));  // null'].join("\n"), lang:"js", label:"Finding them"},
      {table:[
        ["Selector","Finds"],
        ["`\"h1\"`","The first `<h1>` element"],
        ["`\".price\"`","The first element with `class=\"price\"` (dot = class)"],
        ["`\"#total\"`","The element with `id=\"total\"` (hash = id)"],
        ["`\"nav a\"`","The first link inside a `<nav>`"]
      ]},
      "When nothing matches, the answer is **`null`**, and the next line that uses it fails with a TypeError such as `Cannot set properties of null`. Two causes cover most cases: a typo in the selector (ids and classes must match exactly, capitals included), or a script that ran before the page was read (the `defer` from Lesson 1)."
    ]},
    {h:"Changing text, safely", body:[
      "To change what an element says, set its **`textContent`**:",
      {code:['const greeting = document.querySelector("#greeting");','greeting.textContent = "Welcome back, Amara!";'].join("\n"), lang:"js", label:"Changing text"},
      "There’s also **`innerHTML`**, which reads the string you give it **as HTML** and builds elements from it. That’s exactly what makes it dangerous with anything a person typed, or anything that came from outside your own code:",
      {code:['// Imagine someone typed this into a name box:','const typed = \'<img src="x" onerror="alert(1)">\';','','greeting.textContent = typed;','// shows those characters as plain text','','greeting.innerHTML = typed;','// builds an image whose error handler runs code!'].join("\n"), lang:"js", label:"Why innerHTML is risky", cap:"With `innerHTML`, the broken image triggers its `onerror` code. A real attacker would run something worse than an alert."},
      "This attack is called **[[js-xss|cross-site scripting (XSS)]]**: getting a site to run code that someone else wrote. MDN calls `innerHTML` “probably the most common vector” for it. If a site shows comments, reviews or names using `innerHTML`, one visitor can plant code that runs in every other visitor’s browser, with their login.",
      {key:"For text, use `textContent`. It’s safe with anything, because it never treats text as HTML. Use `innerHTML` only with fixed HTML that you wrote yourself, never with anything from a person or another site."},
      "If you need new elements, build them with `document.createElement(…)` and fill them with `textContent`; MDN’s “DOM scripting introduction” shows how."
    ]},
    {h:"Changing looks with classList", body:[
      "To change how something looks, the clean way is to define the look in **CSS** and let JavaScript switch a **class** on or off. Every element has a `classList` with four handy methods:",
      {code:['.hidden { display: none; }','.highlight { background: gold; }'].join("\n"), lang:"css", label:"CSS: the looks"},
      {code:['const menu = document.querySelector("#menu");','menu.classList.add("highlight");','menu.classList.remove("hidden");','menu.classList.toggle("hidden"); // on if off, else off','console.log(menu.classList.contains("hidden")); // true'].join("\n"), lang:"js", label:"JavaScript: switching classes", cap:"Class names in `classList` have **no dot**: it’s `\"hidden\"`, not `\".hidden\"`."},
      "Keeping style in CSS and behaviour in JavaScript means a designer can change the look without touching the script, and the script stays short. You can also set styles directly (`menu.style.color = \"red\"`), but that scatters design decisions through your code."
    ]},
    {h:"Responding to clicks", body:[
      "An **[[event]]** is something that happens on the page: a click, a key press, a form being submitted. An **[[event-listener|event listener]]** is a function you ask the browser to run whenever that event happens on an element:",
      {code:['<button id="specials-btn" type="button">','  Show today’s specials','</button>','<p id="specials" class="hidden">Lentil soup and rye</p>'].join("\n"), lang:"html", label:"HTML"},
      {code:['const button = document.querySelector("#specials-btn");','const specials = document.querySelector("#specials");','','button.addEventListener("click", () => {','  specials.classList.toggle("hidden");','});'].join("\n"), lang:"js", label:"Show and hide on each click", weblab:"wl-js-toggle"},
      {list:[
        "`addEventListener` takes two arguments: the event’s name as a string (`\"click\"`, not `\"onclick\"`), and the function to run.",
        "Here the function is an arrow function written right there. It doesn’t run now; the browser keeps it and calls it on **every** click.",
        "Pass the function itself, without calling it. `addEventListener(\"click\", showSpecials)` is right; `addEventListener(\"click\", showSpecials())` runs `showSpecials` once, immediately, and hands its result (usually `undefined`) to the listener.",
        "Use a real `<button>`: it works with a keyboard and with screen readers automatically, which a clickable `<div>` doesn’t."
      ]},
      "Old tutorials put JavaScript in the HTML, like `<button onclick=\"show()\">`. It still works, but MDN calls it bad practice: it mixes the two languages and has to be repeated on every element. Keep JavaScript in its file and use `addEventListener`.",
      {tip:"For a show-and-hide button, accessibility guidance (the WAI-ARIA “disclosure” pattern) also sets `aria-expanded` to `\"true\"` or `\"false\"` on the button, so screen-reader users hear whether the content is open."},
      {lab:"wl-js-hello", t:"Practise: change some text when a button is clicked"},
      {lab:"wl-js-counter", t:"Practise: count clicks"}
    ]},
    {h:"Reading what people type", body:[
      "A text box’s current contents are in its **`value`** property. Read it **inside** the listener, so you get what’s there at the moment of the click; read it when the page loads and you only ever get the empty box.",
      {code:['<label for="guest-name">Your name</label>','<input id="guest-name" type="text">','<button id="hello-btn" type="button">Say hello</button>','<p id="hello"></p>'].join("\n"), lang:"html", label:"HTML"},
      {code:['const nameInput = document.querySelector("#guest-name");','const hello = document.querySelector("#hello");','const helloBtn = document.querySelector("#hello-btn");','','helloBtn.addEventListener("click", () => {','  const typed = nameInput.value.trim();','  if (typed === "") {','    hello.textContent = "Please type your name first.";','  } else {','    hello.textContent = `Hello, ${typed}!`;','  }','});'].join("\n"), lang:"js", label:"A friendly greeting", weblab:"wl-js-input"},
      "Remember Lesson 2: `value` is **always a string**, even for `<input type=\"number\">`. For sums, convert with `Number(…)`. Two traps: `Number(\"\")` is `0`, so check for an empty box first; and anything that isn’t a number becomes NaN, so check with `Number.isNaN(…)`. Never trust that people typed what you expected; the page should say kindly what’s missing."
    ]},
    {h:"Mini-project: a bill splitter", body:[
      "Time to put it all together: a small tool that splits a restaurant bill, with a tip, between friends. Put the HTML in the page’s `<body>` and the JavaScript in `split.js`, linked with `<script src=\"split.js\" defer><\/script>` in the `<head>`.",
      {code:['<h1>Bill splitter</h1>','<label for="bill">Bill total</label>','<input id="bill" type="number" min="0" step="0.01">','<label for="tip">Tip (%)</label>','<input id="tip" type="number" min="0" value="10">','<label for="people">Number of people</label>','<input id="people" type="number" min="1" value="2">','<button id="split" type="button">Split the bill</button>','<p id="result" aria-live="polite"></p>'].join("\n"), lang:"html", label:"index.html (inside body)"},
      {code:['const billInput = document.querySelector("#bill");','const tipInput = document.querySelector("#tip");','const peopleInput = document.querySelector("#people");','const result = document.querySelector("#result");','','function splitBill(bill, tipPercent, people) {','  const total = bill + bill * (tipPercent / 100);','  return total / people;','}','','const splitBtn = document.querySelector("#split");','splitBtn.addEventListener("click", () => {','  const bill = Number(billInput.value);','  const tip = Number(tipInput.value);','  const people = Number(peopleInput.value);','','  if (billInput.value === "" || !(bill >= 0)) {','    result.textContent = "Please enter the bill total.";','    return;','  }','  if (!Number.isInteger(people) || people < 1) {','    result.textContent = "Please enter at least 1 person.";','    return;','  }','','  const share = splitBill(bill, tip, people);','  const shown = share.toFixed(2);','  result.textContent = `Each person pays ${shown}`;','  console.log(bill, tip, people, share);','});'].join("\n"), lang:"js", label:"split.js", cap:"With a bill of 84.50, a 10% tip and 3 people, the page says “Each person pays 30.98”."},
      "Every piece is something you’ve met:",
      {list:[
        "**Find:** four `querySelector` calls, stored in `const` variables at the top.",
        "**A function** with three parameters does the maths and `return`s the share, so it can be reused and tested on its own.",
        "**Listen:** the click listener reads the three values **at the moment of the click** and converts them with `Number`.",
        "**Decide:** two `if` checks catch an empty bill and an impossible number of people. `return;` with no value simply stops the listener early. `!(bill >= 0)` is true for negative numbers and for NaN, because any comparison with NaN is false.",
        "**Change:** `textContent` shows the answer, and `toFixed(2)` rounds it to two decimal places for display.",
        "`aria-live=\"polite\"` asks screen readers to announce the result when it changes; `console.log` leaves a trail for debugging."
      ]},
      "Ideas to extend it: round each share **up** to the next whole number with `Math.ceil(…)`, show the tip amount on its own line, or listen for the `\"input\"` event on each box so the answer updates as people type."
    ]},
    {h:"Debugging with console.log and the Console", body:[
      "When a page doesn’t do what you expect, don’t guess: **look**. A calm routine:",
      {ol:[
        "**Reproduce it.** Do the exact steps that go wrong, with the Console open.",
        "**Read any error** (Lesson 1): type, message, line. Fix the first one first.",
        "**No error? Log what you expect.** Put `console.log(\"bill:\", bill, typeof bill);` just before the line that misbehaves, and compare what you see with what you assumed.",
        "**Move the log** earlier or later until you find the first place where the value is wrong.",
        "**Fix one thing, test again**, then remove the extra logs."
      ]},
      {table:[
        ["What you see","Likely cause"],
        ["TypeError mentioning `null`","The selector found nothing: a typo, a missing `#` or `.`, or no `defer`"],
        ["Nothing happens, no error","Listener on the wrong element, `\"onclick\"` instead of `\"click\"`, or the function was called with `()` when passed"],
        ["`128` instead of `20`","Two strings joined with `+`; convert with `Number(…)`"],
        ["`NaN`","Something that isn’t a number went into the maths; log each value"],
        ["`[object HTMLInputElement]`","You showed the input itself; you meant its `.value`"]
      ]},
      "Developer tools can also **pause** a script. In Chrome’s **Sources** panel (Firefox’s **Debugger**), click a line number to set a breakpoint; the next time that line runs, everything stops and you can inspect every variable. Writing the statement `debugger;` in your code does the same while the tools are open. On a phone, the Web Lab shows the Console output and error messages, which is enough for everything in this unit.",
      {key:"Debugging is comparing what you assumed with what is actually there. `console.log` is the simplest way to see what is actually there."}
    ]}
   ],
   try:[
    {id:"t2u4-l5-x1", type:"mcq", q:"A page has three paragraphs with `class=\"price\"`. What does `document.querySelector(\".price\")` give back?", options:[
      {t:"The first paragraph with that class", ok:true, why:"Right. `querySelector` returns the first match in the page’s order. Use `querySelectorAll(\".price\")` to get all three."},
      {t:"All three paragraphs, as a list", why:"That’s `querySelectorAll`. Plain `querySelector` stops at the first match."},
      {t:"The last paragraph with that class", why:"It searches from the top of the document and returns the first match, not the last."},
      {t:"`null`, because more than one element matches", why:"`null` means **no** element matched. Several matches is fine: you get the first."}
    ]},
    {id:"t2u4-l5-x2", type:"spot", q:"Kenji’s community noticeboard runs this code. Tap every line that could let a visitor’s typing run as code (an XSS risk).", ask:"is an XSS risk", mono:true, parts:[
      {t:"title.textContent = \"Noticeboard\";", flag:false, why:"Fixed text, and `textContent` never treats text as HTML. Safe."}, "\n", {t:"note.innerHTML = noteBox.value;", flag:true, why:"Whatever the visitor typed is parsed as HTML, so typed HTML with an event handler would run. Use `textContent`."}, "\n", {t:"list.innerHTML = \"\";", flag:false, why:"Setting it to an empty string just clears the list. Nothing from a visitor is involved."}, "\n", {t:"banner.innerHTML = \"<strong>New!</strong>\";", flag:false, why:"Fixed HTML written by Kenji himself, with no outside data. That’s the one acceptable use."}, "\n", {t:"author.innerHTML = `By ${nameBox.value}`;", flag:true, why:"A template literal doesn’t make it safe: the visitor’s name still goes into `innerHTML` and is parsed as HTML. Use `textContent`."}, "\n", {t:"count.textContent = noteBox.value.length;", flag:false, why:"`textContent` shows the number as plain text. Safe."}
    ]},
    {id:"t2u4-l5-x3", type:"mcq", q:"Mei writes `button.addEventListener(\"click\", showTotal());`. When the page loads, the total appears straight away, and later clicks do nothing. Why?", options:[
      {t:"The brackets after `showTotal` call it immediately; the listener receives its result instead of the function", ok:true, why:"Right. `showTotal()` runs once, now, and returns `undefined`, so there’s no function left to run on clicks. Pass the function itself: `addEventListener(\"click\", showTotal)`."},
      {t:"The event name should be `\"onclick\"`", why:"The event is called `\"click\"`; `onclick` is the name of the old HTML attribute. The problem is the brackets."},
      {t:"A button can only be clicked once", why:"Listeners run on every click. This one never got a function to run."},
      {t:"`addEventListener` only works with arrow functions", why:"Any function works: a named one like `showTotal`, or an arrow function. It just has to be passed, not called."}
    ]},
    {id:"t2u4-l5-x4", type:"number", q:"Two number boxes contain 12 and 8. The script does `result.textContent = a.value + b.value;`. What does the page show?", answer:128, tol:0, unit:"", why:"`value` is always a string, so this is \"12\" + \"8\", which joins the text: **128**. Write `Number(a.value) + Number(b.value)` to get 20.", wrongs:[
      {v:20, tol:0, why:"That’s what was meant, but `value` gives strings even for number inputs, and `+` joins strings. Convert with `Number(…)` first."},
      {v:96, tol:0, why:"Nothing multiplies here. With strings, `+` joins them: \"12\" + \"8\" is \"128\"."}
    ]},
    {id:"t2u4-l5-x5", type:"match", q:"`panel` currently has the class `open`. Match each line with what it does.", pairs:[
      ["`panel.classList.add(\"dark\")`","Adds `dark`; `open` stays","`add` puts a class on without removing others."],
      ["`panel.classList.remove(\"open\")`","Removes `open`","`remove` takes the named class off."],
      ["`panel.classList.toggle(\"open\")`","Removes `open`, because it was there; a second toggle adds it back","`toggle` adds a class if it’s missing and removes it if it’s present."],
      ["`panel.classList.contains(\"open\")`","Gives back `true` and changes nothing","`contains` only asks a question."]
    ]},
    {id:"t2u4-l5-x6", type:"order", q:"Lucía’s “Add to basket” button does nothing and shows no error. Put a sensible debugging routine in order.", items:[
      {t:"Reproduce it: click the button with the Console open", why:"First see the problem happen while you can watch the Console."},
      {t:"Read any error in the Console, and fix the first one", why:"An error message is the fastest clue. If there is none, move on to logging."},
      {t:"Add `console.log(\"clicked\")` as the first line inside the listener", why:"This tells you whether the listener runs at all: if “clicked” never appears, the problem is the listener (wrong element, event name, or a called function)."},
      {t:"Log the values the listener uses, just before the line that misbehaves", why:"If the listener runs, compare the real values with what you expected, for example a string instead of a number."},
      {t:"Fix one thing, test again, then remove the extra logs", why:"One change at a time shows which change fixed it."}
    ]},
    {id:"t2u4-l5-x7", type:"mcq", q:"Tomás writes `const name = input.value;` at the top of his script, and inside the click listener he shows `Hi, ${name}!`. Whatever he types, it shows “Hi, !”. Why?", options:[
      {t:"`input.value` was read once, when the page loaded and the box was empty", ok:true, why:"Right. `name` holds the empty string from page load. Read `input.value` inside the listener, so you get what’s there at the moment of the click."},
      {t:"Template literals can’t include variables", why:"They can, with `${…}`. The variable itself is empty."},
      {t:"`const` variables are cleared after each click", why:"`const` keeps its value. That’s the problem: it keeps the empty string from page load."},
      {t:"Inputs only give their value after the form is submitted", why:"`value` is always available and always current. It was just read at the wrong moment."}
    ]}
   ],
   apply:{intro:"Make pages respond. The Web Lab challenges work on any device; the full bill splitter needs a computer, or an online code editor in your phone’s browser.", tasks:[
     {t:"Four Web Lab challenges", how:["Open **Labs → Web Lab** and do the JavaScript challenges “Change text on click”, “A counter”, “Toggle a class” and “Read what someone types”.","When a check fails, read the message and the Console output before changing anything.","After each one passes, change one thing on purpose (a selector, a capital letter, `click` to `onclick`) and see what the checker says."], write:"Which mistake was hardest to spot, and what clue gave it away?"},
     {t:"Build the bill splitter", how:{
       win:["In a folder, create `index.html` (with the usual page skeleton, the HTML from the mini-project in the body, and `<script src=\"split.js\" defer><\/script>` in the head) and `split.js` with the JavaScript.","Open `index.html` in your browser and try 84.50, 10% and 3 people. You should see 30.98.","Try an empty bill, 0 people and 2.5 people, and check the messages.","Open the Console ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]] in Chrome or Edge) and look at the logged values."],
       mac:["In a folder, create `index.html` (page skeleton, mini-project HTML in the body, `<script src=\"split.js\" defer><\/script>` in the head) and `split.js`, using a code editor such as VS Code.","Open `index.html` in your browser and try 84.50, 10% and 3 people: 30.98.","Try an empty bill, 0 people and 2.5 people.","Open the Console ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:J]] in Chrome or Edge; Safari’s Web Inspector after enabling developer features) and check the logged values."],
       chromeos:["Use an online code editor that runs in the browser (several free ones have separate HTML and JavaScript boxes), or VS Code in the Linux environment if your device allows it.","Paste the HTML into the HTML box and the JavaScript into the JavaScript box (online editors link the two for you, so leave out the `<script>` tag).","Test 84.50, 10% and 3 people (30.98), then an empty bill, 0 people and 2.5 people."],
       phone:["Phones can’t easily save and open HTML files, so use a free online code editor in your browser; turn the phone sideways for more room.","Paste the HTML into its HTML box and the JavaScript into its JavaScript box (leave out the `<script>` tag).","Test 84.50, 10% and 3 people (30.98), then an empty bill, 0 people and 2.5 people.","If that’s too cramped, do this task later on a computer; the four Web Lab challenges cover the same skills."]
     }, write:"Which test inputs did you try, and what did each show?"},
     {t:"Break it and debug it", how:["Change `\"#bill\"` to `\"#bil\"`. Click the button and read the error. Fix it.","Remove `Number(…)` around `billInput.value`. What does the page show now, and why? (Log `typeof bill` to check.) Fix it.","Change `\"click\"` to `\"onclick\"`. What happens, and is there an error? Use `console.log(\"clicked\")` to prove the listener never runs. Fix it.","Extend it: add `Math.ceil` to round each share up to a whole number, or update the result on the `\"input\"` event."], write:"For each bug: the symptom, the clue, and the fix."}
   ], proof:"Four passed Web Lab JavaScript challenges; a working bill splitter that rejects an empty bill and impossible numbers of people; and notes on three bugs you caused on purpose, with their symptoms and fixes."},
   read:[
     {book:"mdn", where:"Dynamic scripting with JavaScript → DOM scripting introduction; Introduction to events; JavaScript debugging and error handling"},
     {book:"ejs", where:"Chapter 14, “The Document Object Model” (Document structure, Trees, Finding elements, Changing the document, Query selectors) and Chapter 15, “Handling Events” (Event handlers, Events and DOM nodes, Event objects)", note:"Eloquent JavaScript uses an older style in places; the ideas are the same."}
   ]
  }
  ],
  checkpoint:["t2u4-q02","t2u4-q06","t2u4-q11","t2u4-q14","t2u4-q17","t2u4-q22","t2u4-q25","t2u4-q29","t2u4-q32","t2u4-q37","t2u4-q40","t2u4-q44"],
  codex:[
   {id:"js-what-it-does", title:"What JavaScript does, and where it runs", aka:["JavaScript","JS","ECMAScript","script element","defer"], tags:["javascript","basics","web"],
    summary:"JavaScript is the programming language that gives web pages behaviour; browsers download it with the page and run it on your device.",
    levels:{
     starter:[
      "A web page has three layers. **HTML** is the content, **CSS** is the look, and **JavaScript** is the behaviour: what happens when you tap a button, type in a box or wait for a countdown.",
      "JavaScript comes with the page, like a set of instructions tucked inside a parcel. Your browser opens the parcel and follows the instructions **on your own device**. That’s why a menu can still open after your connection drops, and why heavy pages can feel slow on an older phone.",
      "Despite the name, JavaScript has almost nothing to do with the language Java. The name was chosen in 1995 for marketing reasons.",
      {key:"HTML is what’s there, CSS is how it looks, JavaScript is what it does."},
      "You don’t need to install anything to start: every browser can run JavaScript, and this app’s Web Lab lets you write and test it on a phone."
     ],
     builder:[
      "Pages load JavaScript with the `<script>` element, usually pointing to a separate file:",
      {code:'<script src="script.js" defer><\/script>', lang:"html"},
      "Where you put it matters, because the browser reads HTML top to bottom. A plain script **pauses** reading while it downloads and runs, so a plain script in the `<head>` runs before the `<body>` exists and can’t find elements. Three good options:",
      {table:[
        ["Option","How it behaves"],
        ["`defer` in the `<head>`","Downloads while the HTML is read; runs after the whole page is read, in order"],
        ["Plain script before `</body>`","Runs after the content above it; the download may start later"],
        ["`type=\"module\"` in the `<head>`","Deferred automatically; needs the page served over HTTP(S), not opened as a file"]
      ]},
      "`defer` only applies to scripts with a `src`; on code written inside the `<script>` element itself it has no effect. Inline event attributes such as `onclick=\"…\"` still work but mix languages; keep JavaScript in its own file and attach behaviour with `addEventListener`.",
      "The browser’s **JavaScript engine** runs the code: V8 in Chrome and Edge, SpiderMonkey in Firefox, JavaScriptCore in Safari. Code runs as a list of statements, top to bottom.",
      "MDN’s course puts module scripts in the head; this unit uses `defer` because it also works when you open the HTML file straight from your computer, without a web server."
     ],
     pro:[
      "The language is standardised as **ECMAScript** (ECMA-262), maintained by Ecma International’s TC39 committee, which publishes a new edition every year. ES2015 (also called ES6) was the big modern update: `let`, `const`, arrow functions, template literals, classes, modules and `for...of`. Browsers then add the **Web APIs** on top, such as the DOM, `fetch` and `localStorage`. These aren’t part of ECMAScript; they come from WHATWG and W3C standards. Node.js offers different APIs (files, network servers) around the same language.",
      "Engines don’t simply interpret line by line: they parse the whole script first (which is why a syntax error anywhere stops the whole script), then interpret and **just-in-time compile** hot code into machine code. MDN still calls JavaScript an interpreted language, since compilation happens while the program runs rather than ahead of time.",
      "Script loading in detail: `async` scripts download in parallel and run as soon as they arrive, in no guaranteed order, which suits independent scripts such as analytics. `defer` scripts keep document order and run before the `DOMContentLoaded` event. Module scripts are deferred by default, run in strict mode, have their own top-level scope, and can `import` other modules.",
      "Security model: page JavaScript runs in a **sandbox**. It can’t read your files or other sites’ data (the same-origin policy), but it can do anything the page itself can, with your login. That’s why pasting unknown code into the Console, or letting other people’s text become code (XSS), is dangerous."
     ]
    },
    related:["js-errors","js-console-debugging","dom-basics","js-variables"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → What is JavaScript?"},{book:"ejs", where:"Introduction and Chapter 13, “JavaScript and the Browser”"}],
    sources:[{t:"MDN: What is JavaScript?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"},{t:"MDN: <script>: The Script element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script"},{t:"MDN: JavaScript technologies overview", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/JavaScript_technologies_overview"}], checked:"2026-11"},

   {id:"js-variables", title:"Variables: const and let", aka:["const","let","var","binding","declaration","assignment"], tags:["javascript","basics"],
    summary:"A variable is a name for a value; use const for names that won’t be reassigned and let for those that will, and avoid the older var.",
    levels:{
     starter:[
      "A **variable** is a name you give a value so you can use it later, like a name tag tied to something with a piece of string. `const siteName = \"Garden club\";` ties the name `siteName` to the text “Garden club”.",
      "Modern JavaScript has two ways to make one:",
      {list:["`const` for a name that will always point at the same value (most names).","`let` for a name you’ll point at new values, such as a score or a running total."]},
      "The `=` sign doesn’t mean “equals” here. It means “make this name refer to this value”. So `score = score + 1` is perfectly sensible: work out the new number, then move the tag to it.",
      {key:"Use const when you can, and let when you have to."},
      "Good names save time: `ticketPrice` says what it holds; `x` doesn’t."
     ],
     builder:[
      {code:['const shop = "Fatima’s Fabrics";','let basketTotal = 0;','basketTotal = basketTotal + 12;  // fine','shop = "Other";  // TypeError: Assignment to constant variable.'].join("\n"), lang:"js"},
      {list:[
        "A `const` must be given its value immediately; `const x;` is a SyntaxError. A `let` can start empty and holds `undefined` until assigned.",
        "Neither can be declared twice in the same scope: a second `let basketTotal` is a SyntaxError, which catches copy-paste mistakes.",
        "Both are **block-scoped**: created inside `{ }`, they disappear at the closing brace.",
        "Using either before its declaration line throws a ReferenceError (“Cannot access … before initialization”)."
      ]},
      "`const` protects the **name**, not the contents. `const guests = [];` can still `guests.push(\"Mei\")`, and `const book = {}` can gain properties. What you can’t do is point `guests` at a different array.",
      "**Naming rules:** letters, digits, `_` and `$`; no digit at the start; no spaces or hyphens; case-sensitive; not a reserved word such as `let`, `if` or `function`. **Convention:** lower camel case (`firstName`), booleans starting with `is`/`has`, and short names only for tiny jobs (`i` in a loop).",
      "A common pattern: declare with `const` everything that won’t be reassigned (elements you find, settings, lists), and use `let` only for the few values that change, such as a score. If you later need to reassign a `const`, the TypeError points to the exact line, and switching to `let` becomes a deliberate choice rather than an accident."
     ],
     pro:[
      "`var` is the pre-2015 keyword. Its differences are why style guides and MDN recommend against it:",
      {table:[
        ["Behaviour","var","let / const"],
        ["Scope","Whole function (ignores blocks)","The enclosing block"],
        ["Redeclare in same scope","Allowed silently","SyntaxError"],
        ["Use before declaration","`undefined` (hoisted)","ReferenceError (temporal dead zone)"],
        ["Top level of a classic script","Creates a property on `window`","No `window` property"]
      ]},
      "The “temporal dead zone” is the stretch between entering a scope and reaching the `let`/`const` line; the name exists but can’t be touched. This turns order mistakes into loud errors rather than silent `undefined`s.",
      "A classic loop bug that `let` fixes: with `for (var i = 0; i < 3; i++) { buttons[i].addEventListener(\"click\", () => console.log(i)); }` every button logs 3, because all three functions share one `i`. With `let`, each round gets a fresh binding, so they log 0, 1 and 2.",
      "Constants that are true configuration values are sometimes written in UPPER_SNAKE_CASE (`MAX_GUESTS`). `Object.freeze(obj)` makes an object’s own properties read-only (shallowly), which is different from `const`. The Chrome Console relaxes some rules for convenience: re-running a `let` declaration in a new Console input is allowed there, but not in a script.",
      "Code-checking tools called linters (ESLint is a common one) can flag `var`, unused variables, and `let` declarations that are never reassigned (its `prefer-const` rule)."
     ]
    },
    related:["js-types","js-functions","js-arrays-loops","js-what-it-does"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Storing the information you need — Variables"},{book:"ejs", where:"Chapter 2, “Program Structure”: “Bindings” and “Binding names”"}],
    sources:[{t:"MDN: Storing the information you need — Variables", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables"},{t:"MDN: const", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"},{t:"MDN: let", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let"}], checked:"2026-11"},

   {id:"js-types", title:"Values and types", aka:["string","number","boolean","undefined","null","NaN","typeof","type coercion","template literal"], tags:["javascript","basics","data"],
    summary:"Every JavaScript value has a type, such as string, number or boolean; knowing the type explains surprises like \"5\" + 1 giving \"51\".",
    levels:{
     starter:[
      "JavaScript sorts values into **types**, and the type decides what you can do with a value:",
      {table:[["Type","Looks like","For"],["String","`\"Hana\"`, `\"42\"`","Text (in quotes)"],["Number","`42`, `3.5`","Amounts"],["Boolean","`true`, `false`","Yes/no"],["undefined","`undefined`","Not set yet"],["null","`null`","Deliberately empty"]]},
      "Quotes matter: `42` is a number you can calculate with, but `\"42\"` is text that happens to contain digits. Anything typed into a box on a web page arrives as text, so it must be converted before doing sums.",
      {key:"When a result looks strange, ask what type each value is. `typeof value` tells you."},
      "Why it matters: a shop page that adds “15” and “25” typed into two boxes shows 1525 instead of 40, because both values are text and `+` joins text. Converting them to numbers first, with `Number(…)`, fixes it."
     ],
     builder:[
      "**Strings** can use `\"…\"`, `'…'` or backticks. Backticks make a **template literal**, which can drop values in with `${…}` and span several lines. Useful string tools: `length`, `trim()`, `toUpperCase()`, `includes()`.",
      "**Numbers** are all one type (whole and decimal). The operators are `+`, `-`, `*`, `/`, `%` (remainder) and a double star for powers, with the usual precedence. Watch for:",
      {list:[
        "`0.1 + 0.2` → `0.30000000000000004`: decimals are approximate in binary. Round for display with `toFixed(2)` (which returns a **string**), or count money in whole cents.",
        "`NaN` (“not a number”) from impossible arithmetic such as `\"five\" * 2`. `typeof NaN` is `\"number\"`, and `NaN === NaN` is false; test with `Number.isNaN(x)`.",
        "`10 / 0` → `Infinity`, not an error."
      ]},
      "**Coercion**: operators convert mismatched types quietly. `+` prefers strings (`\"5\" + 1` → `\"51\"`); `-`, `*` and `/` prefer numbers (`\"5\" * 1` → 5). Convert deliberately with `Number(\"5\")` or `String(5)`; note `Number(\"\")` is 0 and `Number(\"12 kg\")` is NaN.",
      "**undefined vs null**: JavaScript produces `undefined` for “not set” (an unassigned variable, a missing property, a function with no `return`). Code and browser APIs use `null` for “deliberately nothing”, such as `querySelector` finding no match."
     ],
     pro:[
      "ECMAScript has seven **primitive** types (string, number, bigint, boolean, undefined, symbol, null) plus **objects**, which include arrays and functions. Primitives are immutable: string methods return new strings rather than changing the original.",
      "`typeof` results to know: `typeof null` is `\"object\"` (a bug kept since the first version for compatibility); `typeof []` is `\"object\"` (use `Array.isArray`); `typeof function(){}` is `\"function\"`.",
      "Numbers are IEEE 754 double-precision floats. Whole numbers are exact only up to `Number.MAX_SAFE_INTEGER` (9007199254740991); beyond that, use `BigInt` (`123n`). For money, either work in integer minor units or use a decimal library; `Intl.NumberFormat` formats currency for display in the reader’s locale.",
      "`parseInt(\"12 kg\")` gives 12 and `parseFloat(\"3.5m\")` gives 3.5: they read leading digits and stop, which is lenient but can hide bad input. `Number()` is stricter and returns NaN for trailing junk. For form fields, `input.valueAsNumber` returns a number (NaN when empty) for `type=\"number\"`.",
      "Strings are sequences of UTF-16 code units, so `\"😀\".length` is 2. Comparing strings with `<` compares code units, which puts capitals before lower-case letters; for human sorting use `a.localeCompare(b)`.",
      "Convert deliberately rather than relying on the rules: `String(x)` or a template literal for text, `Number(x)` for numbers, `Boolean(x)` (or `!!x`) for truthiness. Being explicit shows your intent to the next reader and avoids surprises when the input is not what you expected."
     ]
    },
    related:["js-variables","js-operators-comparison","js-errors"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Basic math in JavaScript — numbers and operators; Handling text — strings in JavaScript"},{book:"ejs", where:"Chapter 1, “Values, Types, and Operators”"}],
    sources:[{t:"MDN: JavaScript data types and data structures", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures"},{t:"MDN: typeof", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"},{t:"MDN: Template literals (Template strings)", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"}], checked:"2026-11"},

   {id:"js-operators-comparison", title:"Comparisons and logic", aka:["===","==","strict equality","&&","||","!","truthy","falsy"], tags:["javascript","logic"],
    summary:"Comparisons such as === and < give true or false; && (and), || (or) and ! (not) combine them, and any value can act as true or false in a condition.",
    levels:{
     starter:[
      "Programs decide by asking yes-or-no questions. A **comparison** gives back `true` or `false`:",
      {list:["`age >= 18`: is age 18 or more?","`answer === \"yes\"`: is the answer exactly “yes”?","`total !== 0`: is the total anything other than 0?"]},
      "Use three equals signs, `===`. It checks that both the value and the type match, so the text `\"7\"` doesn’t count as equal to the number `7`. (One equals sign, `=`, is assignment, not comparison.)",
      "Join questions with **and** (`&&`, both must be true), **or** (`||`, at least one true) and **not** (`!`, flips true and false): `age < 5 || isMember` gives free entry to small children and to members.",
      {key:"Compare with `===` and `!==`, and write each side of `&&` and `||` in full."}
     ],
     builder:[
      {table:[["Expression","Result","Why"],["`\"5\" === 5`","false","Different types"],["`\"5\" == 5`","true","`==` converts first"],["`\"10\" < \"9\"`","true","Strings compare as text"],["`NaN === NaN`","false","NaN equals nothing"]]},
      "Loose equality `==` converts values with rules that surprise everyone (`\"\" == 0` and `\"0\" == 0` are true, but `\"\" == \"0\"` is false). Convert on purpose and use `===`.",
      "**Truthy and falsy.** In an `if` or with `&&`, `||` and `!`, any value counts as true or false. The falsy values are `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined` and `NaN` (plus the legacy `document.all`). Everything else is truthy, including `\"0\"`, `\"false\"`, `[]` and `{}`.",
      "That makes `if (nickname)` a quick test for “not empty”, but it treats a genuine `0` as missing. When zero is a real answer, compare explicitly: `if (count > 0)`.",
      "`!!value` converts anything to its boolean, which is handy when logging what an `if` will see.",
      "Combined checks read better when each part is named: `const isWeekend = day === \"Sat\" || day === \"Sun\";` and then `if (isWeekend && isOpen)`. Write each comparison in full: `age >= 16 && <= 80` is a SyntaxError; it must be `age >= 16 && age <= 80`."
     ],
     pro:[
      "`&&` and `||` don’t always return booleans; they return one of their operands and **short-circuit**. `a || b` returns `a` if it’s truthy, otherwise `b`; `a && b` returns `a` if it’s falsy, otherwise `b`. The right side is evaluated only if needed, so `user && user.name` avoids reading a property of `null`.",
      "The old default-value idiom `const n = input || 10;` replaces **every** falsy value, including a legitimate 0 or empty string. Modern code uses the nullish coalescing operator `??`, which only falls back for `null` and `undefined`, and optional chaining `?.` to read through possibly missing objects (`user?.name`).",
      "Precedence: `!` binds tightest, then comparisons, then `&&`, then `||`. `a || b && c` means `a || (b && c)`. Add brackets when mixing them; the next reader will thank you.",
      "`==` has one widely accepted use: `x == null` is true for both `null` and `undefined`. Everything else is clearer with `===`. `Object.is(a, b)` is like `===` but treats `NaN` as equal to itself and distinguishes `0` from `-0`.",
      "Relational comparisons between a string and a number convert the string to a number (`\"10\" < 9` is false), but two strings compare by UTF-16 code units. For human-friendly ordering use `localeCompare`, optionally with `{ numeric: true }` so “item 10” sorts after “item 9”."
     ]
    },
    related:["js-conditionals","js-types","js-arrays-loops"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Making decisions in your code — conditionals"},{book:"ejs", where:"Chapter 1, “Values, Types, and Operators”: “Boolean values” and “Automatic type conversion”"}],
    sources:[{t:"MDN: Equality comparisons and sameness", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness"},{t:"MDN: Strict equality (===)", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality"},{t:"MDN Glossary: Falsy", url:"https://developer.mozilla.org/en-US/docs/Glossary/Falsy"}], checked:"2026-11"},

   {id:"js-conditionals", title:"Decisions with if and else", aka:["if","else if","else","conditional","branch"], tags:["javascript","logic"],
    summary:"An if statement runs a block only when its condition is true; else if and else handle the other cases, checked from top to bottom.",
    levels:{
     starter:[
      "Real rules have cases: children pay less, members get in free, the shop is closed on Mondays. An `if` statement lets a program follow such rules:",
      {code:['if (age < 12) {','  price = 4;','} else {','  price = 10;','}'].join("\n"), lang:"js"},
      "The question (the **condition**) goes in round brackets. The code to run when it’s true goes in curly braces. `else` says what to do otherwise.",
      "Add more cases with `else if`. JavaScript asks the questions **in order** and runs only the first block whose answer is yes; the rest are skipped.",
      {key:"In an if … else if … else chain, exactly one block runs: the first one whose condition is true."},
      "A condition is a question with a yes-or-no answer, such as `age < 12` or `day === \"Mon\"`. You can try one on its own in the Console: type it and the Console answers `true` or `false`."
     ],
     builder:[
      {code:['if (age < 12) {','  price = 4;','} else if (age >= 65) {','  price = 6;','} else {','  price = 10;','}'].join("\n"), lang:"js"},
      {list:[
        "**Order the cases** from most specific to most general. `if (age >= 12)` first would catch a 70-year-old before the senior check.",
        "**Test the boundaries**: for rules at 12 and 65, try 11, 12, 64 and 65. Most bugs live at the edges (`<` versus `<=`).",
        "**Always use braces**, even for one line. Without them only the next statement belongs to the `if`, which bites when someone adds a second line.",
        "**Conditions can combine**: `if (isMember && age >= 16)`."
      ]},
      "For two simple outcomes, the **conditional (ternary) operator** is a compact expression: `const label = stock > 0 ? \"In stock\" : \"Sold out\";`. Use it for choosing a value, not for running big blocks.",
      "An early `return` inside a function can replace deep nesting: check the problem cases first (empty input, impossible values), return, and let the main work follow unindented. The bill splitter in this unit does exactly this.",
      "Test every branch. For a rule with three cases, choose inputs that reach each block at least once, plus the values right at the boundaries. A temporary `console.log(\"senior branch\")` inside a block confirms which one actually ran."
     ],
     pro:[
      "`switch` compares one value against many cases using strict equality, falling through to the next case unless you `break` (or `return`):",
      {code:['switch (day) {','  case "Sat":','  case "Sun":','    hours = "10–16";','    break;','  default:','    hours = "9–18";','}'].join("\n"), lang:"js"},
      "Forgetting `break` is a classic bug; many teams prefer a lookup object (`const hours = { Sat: \"10–16\", Sun: \"10–16\" }[day] ?? \"9–18\";`) or `if`/`else if` for readability.",
      "Conditions are evaluated with truthiness, so `if (items.length)` means “if the array isn’t empty”. It’s idiomatic but slightly implicit; `items.length > 0` reads more clearly to newcomers.",
      "Keep conditions readable by naming them: `const isWeekend = day === \"Sat\" || day === \"Sun\";` then `if (isWeekend)`. Deeply nested `if`s are a sign to extract a function or use guard clauses.",
      "Floating-point comparisons deserve care: `0.1 + 0.2 === 0.3` is false. Compare with a tolerance, such as `Math.abs(a - b) < 1e-9`, or work in integers.",
      "When a chain of conditions only maps inputs to outputs, keeping that mapping in data (an object or array) rather than in code makes it easier to extend and test. Boolean logic can also simplify conditions: `!(a && b)` means the same as `!a || !b`, and `!(a || b)` the same as `!a && !b` (De Morgan’s laws)."
     ]
    },
    related:["js-operators-comparison","js-functions","js-arrays-loops"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Making decisions in your code — conditionals"},{book:"ejs", where:"Chapter 2, “Program Structure”: “Conditional execution” and “Dispatching on a value with switch”"}],
    sources:[{t:"MDN: Making decisions in your code — conditionals", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals"},{t:"MDN: if...else", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else"}], checked:"2026-11"},

   {id:"js-functions", title:"Functions, parameters and return values", aka:["function","parameter","argument","return","arrow function","scope","default parameter"], tags:["javascript","functions"],
    summary:"A function is a named, reusable block of code: values go in through parameters, and return sends a result back to the caller.",
    levels:{
     starter:[
      "A **function** is like a recipe card: write the steps once, give them a name, and use the name whenever you need them.",
      {code:['function splitBill(total, people) {','  return total / people;','}','const share = splitBill(60, 4);  // 15'].join("\n"), lang:"js"},
      {list:["`total` and `people` are **parameters**: placeholders for the values the function needs.","`60` and `4` are **arguments**: the actual values passed in when it’s called, matched in order.","`return` sends the answer back to where the function was called, so `share` becomes 15."]},
      "A function does nothing until it’s **called**, with its name and round brackets. Then the same steps can run again and again with different values.",
      {key:"`console.log` shows a value to you; `return` gives it to the program. A function without `return` gives back `undefined`."},
      "Name functions with verbs that say what they do: `splitBill`, `showMenu`, `countLateLoans`. A good name makes the code that calls it read almost like a sentence."
     ],
     builder:[
      "Three ways you’ll see functions written:",
      {code:['function double(n) { return n * 2; }  // declaration','const triple = function (n) { return n * 3; }; // expression','const half = (n) => n / 2;  // arrow function'].join("\n"), lang:"js"},
      "An arrow function without braces returns its single expression automatically; with braces it needs `return` like any other function.",
      {list:[
        "**Missing arguments** are `undefined`; give defaults with `function greet(name = \"friend\")`.",
        "**`return` ends the function** immediately; lines after it in the same block never run. A bare `return;` just stops early.",
        "**Scope:** variables declared inside a function (or inside any `{ }` block with `let`/`const`) exist only there. Code inside can see outer variables; code outside can’t see in.",
        "**Functions are values:** you can store them in variables and pass them to other functions, which is exactly what `addEventListener(\"click\", showMenu)` does. Pass the function’s name without `()`; with `()` you’d call it immediately and pass its result."
      ]},
      "Good functions do one job, have a name that is a verb (`splitBill`, `showMenu`), take what they need as parameters and return a result instead of changing outside variables.",
      "Test a function on its own in the Console before connecting it to a page: call `splitBill(60, 4)` and check you get 15, then try awkward inputs such as 0 people. Bugs are far easier to find in a small function than in a whole page."
     ],
     pro:[
      "**Hoisting:** function declarations are available throughout their scope, even before the line where they appear. Function expressions and arrow functions stored in `const` are not usable before their line.",
      "**Closures:** a function remembers the variables of the scope it was created in, even after that scope has finished. This is why a click counter’s listener can keep using a `let count` declared outside it, and why each loop round with `let` gets its own value.",
      "**Arrow functions differ** from `function` in ways that matter later: they don’t have their own `this` (they use the surrounding one), can’t be used with `new`, and have no `arguments` object. That makes them ideal for short callbacks and unsuitable as object methods that rely on `this`.",
      "**Pure functions** (same inputs always give the same output, no side effects) are the easiest to test and reuse. Keep DOM access and other side effects at the edges, and keep the calculations, such as `splitBill`, pure.",
      "**Rest parameters** collect any number of arguments into an array: `function sum(...nums) { … }`. **Higher-order functions** take or return functions; array methods such as `map`, `filter` and `reduce` are the everyday examples (Eloquent JavaScript Chapter 5, “Higher-order Functions”).",
      "Recursion (a function calling itself) is legal; without a stopping case it ends with an error: `RangeError: Maximum call stack size exceeded` in Chrome, `InternalError: too much recursion` in Firefox."
     ]
    },
    related:["js-variables","js-objects","js-events","js-conditionals"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Functions — reusable blocks of code; Build your own function; Function return values"},{book:"ejs", where:"Chapter 3, “Functions”"}],
    sources:[{t:"MDN: Functions — reusable blocks of code", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions"},{t:"MDN: Functions (JavaScript Guide)", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},{t:"MDN: Arrow function expressions", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"}], checked:"2026-11"},

   {id:"js-arrays-loops", title:"Arrays and loops", aka:["array","index","length","push","for...of","for loop","while","infinite loop","off-by-one"], tags:["javascript","data","loops"],
    summary:"Arrays hold values in order, numbered from 0; loops such as for...of, for and while repeat code for each item or until a condition is false.",
    levels:{
     starter:[
      "An **array** is a numbered list: `const guests = [\"Amara\", \"Kenji\", \"Lucía\"];`. Each item has an **index**, and counting starts at **0**, so `guests[0]` is Amara and `guests[2]` is Lucía. `guests.length` is 3.",
      "A **loop** repeats work. To do something with every item, use `for...of`:",
      {code:['for (const guest of guests) {','  console.log(`Welcome, ${guest}!`);','}'].join("\n"), lang:"js"},
      "The block runs once per item, with `guest` set to each name in turn, and stops when the list runs out.",
      {key:"The first index is 0 and the last is `length - 1`."},
      "Arrays fit anything that comes as a list: guests, prices in a basket, steps in a recipe, scores in a game. Add to the end with `guests.push(\"Tomás\")`, and ask whether something is there with `guests.includes(\"Kenji\")`. A loop saves writing the same line once per item, however long the list grows."
     ],
     builder:[
      {table:[["Tool","What it does"],["`arr[i]`","Reads the item at index i (`undefined` if there isn’t one)"],["`arr.length`","How many items"],["`arr.push(x)`","Adds x to the end"],["`arr.includes(x)`","Is x in the list?"],["`arr.indexOf(x)`","Position of x, or -1"]]},
      "Three loops, each with its use:",
      {list:[
        "`for (const item of arr)`: every item, in order. The safest choice for arrays: it stops when the items run out (unless the loop keeps adding to the same array).",
        "`for (let i = 0; i < arr.length; i++)`: when you need the index. The three parts are start, condition (checked before each round) and update (after each round). Use `<`, not `<=`, or you’ll read one past the end.",
        "`while (condition)`: when you don’t know how many rounds you need, such as “keep doubling until we pass 100”."
      ]},
      "**Infinite loops** happen when nothing inside changes the condition (a missing `count++`, or a counter going the wrong way). The tab freezes; close it, fix the update, and try again.",
      "`const` arrays can still change their contents with `push`; `const` only stops the name being pointed at another array.",
      "To build a new list from an old one, start with an empty array and `push` inside a loop: `const cheap = []; for (const p of prices) { if (p < 3) cheap.push(p); }`. The original array is left untouched."
     ],
     pro:[
      "**Array methods** often replace hand-written loops: `forEach` runs a function per item; `map` makes a new array of transformed items; `filter` keeps the items that pass a test; `find` returns the first match; `reduce` folds the array into one value; `some`/`every` answer yes-or-no questions. `sort` sorts **in place** and compares as strings by default, so `[10, 9, 1].sort()` gives `[1, 10, 9]`; pass a compare function: `arr.sort((a, b) => a - b)`.",
      "**`for...in` is not for arrays**: it loops over property **names** (as strings), can include inherited ones and doesn’t guarantee the order you expect. Use `for...of` for values, or `arr.entries()` to get index and value together: `for (const [i, item] of arr.entries())`.",
      "`break` leaves a loop early; `continue` skips to the next round. Both work in `for`, `for...of` and `while`, but not inside `forEach` callbacks.",
      "Mutating an array while iterating it (pushing to it, or removing items by index) causes skipped or repeated items. Build a new array instead (`filter`), or loop backwards when removing.",
      "Copying: `const copy = [...arr]` makes a shallow copy; `copy === arr` is false. Two different arrays with the same items are not `===`, because objects compare by identity. Out-of-range writes create “holes”: `arr[10] = 1` on a 3-item array makes its length 11."
     ]
    },
    related:["js-objects","js-operators-comparison","js-conditionals","js-functions"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Arrays; Looping code"},{book:"ejs", where:"Chapter 2, “Program Structure” (loops) and Chapter 4, “Data Structures: Objects and Arrays”"}],
    sources:[{t:"MDN: Arrays (Learn web development)", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays"},{t:"MDN: Looping code", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops"},{t:"MDN: for...of", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"}], checked:"2026-11"},

   {id:"js-objects", title:"Objects, properties and methods", aka:["object","property","method","dot notation","bracket notation","this","array of objects"], tags:["javascript","data"],
    summary:"An object groups related values under names (properties); a property holding a function is a method, and arrays of objects model lists of real things.",
    levels:{
     starter:[
      "An **object** is like a filled-in form: each box has a label and a value.",
      {code:['const book = {','  title: "The Shared Garden",','  pages: 320,','  borrowed: false','};','console.log(book.title);  // The Shared Garden'].join("\n"), lang:"js"},
      "Each label–value pair is a **property**. Read one with a dot: `book.pages`. Change one by assigning: `book.borrowed = true`.",
      "A list of similar things, such as books on loan or events in a calendar, is an **array of objects**, and a loop can visit each one.",
      {key:"Arrays are for “which one, in what order”; objects are for “which property”."},
      "Objects can hold any kind of value: text, numbers, true or false, even arrays (`skills: [\"guitar\", \"first aid\"]`) or other objects. Reading a property that doesn’t exist gives `undefined` rather than an error, so check the spelling when a value seems to be missing. Arrays and page elements are objects too, and strings behave much like them, which is why they have properties such as `length`."
     ],
     builder:[
      {list:[
        "**Dot notation** (`book.title`) is the usual way. **Bracket notation** (`book[\"title\"]`) takes a string, so it works with a name stored in a variable (`book[field]`) or names with spaces.",
        "Reading a missing property gives `undefined`, not an error, so a typo such as `book.titel` fails quietly. Log the object to see its real property names.",
        "Assigning to a new name adds a property; `delete book.borrowed` removes one.",
        "A `const` object can still change its properties; `const` only fixes which object the name refers to."
      ]},
      "A **method** is a property whose value is a function. Inside it, `this` refers to the object it was called on:",
      {code:['const counter = {','  count: 0,','  add() {','    this.count++;','    return this.count;','  }','};','counter.add();  // 1'].join("\n"), lang:"js"},
      "Strings and arrays have built-in methods (`\"hi\".toUpperCase()`, `list.push(4)`), and so do DOM elements (`button.addEventListener(…)`). The round brackets are the difference between calling a method and just reading a property.",
      "Looping over an array of objects with an `if` inside (to count, total or pick out matches) is one of the most common patterns in all programming.",
      "Use the same property names for every object in an array (always `title`, never sometimes `name`): loops and checks rely on each object having the same shape. To see what an object really contains, `console.log(book)` shows every property, and `console.table(loans)` shows an array of objects as a table."
     ],
     pro:[
      "Objects are compared and copied **by reference**: two variables can point at the same object, so a change through one is visible through the other, and `{a: 1} === {a: 1}` is false. Shallow-copy with `{ ...obj }`; for a deep copy of plain data, `structuredClone(obj)`.",
      "Handy syntax: shorthand properties (`{ name, age }` when variables already have those names), computed names (`{ [key]: value }`), destructuring (`const { title, pages } = book;`), and optional chaining (`book.author?.name`).",
      "`Object.keys(obj)`, `Object.values(obj)` and `Object.entries(obj)` turn an object into arrays you can loop over with `for...of`. `\"title\" in book` checks whether a property exists (including inherited ones); `Object.hasOwn(book, \"title\")` checks only its own.",
      "`this` is decided by **how** a function is called, not where it is written. `counter.add()` sets `this` to `counter`, but passing `counter.add` as a callback loses it. Arrow functions don’t have their own `this`, so don’t use them as methods that rely on it.",
      "**JSON** (JavaScript Object Notation) is the text format for sending objects between programs: `JSON.stringify(obj)` and `JSON.parse(text)`. It looks like object literals but requires double-quoted property names and allows no functions, `undefined` or comments.",
      "Every object has a **prototype** it inherits properties from; that’s where methods such as `push` live. Classes (`class Book { … }`) are a cleaner syntax over prototypes (Eloquent JavaScript Chapter 6, “The Secret Life of Objects”)."
     ]
    },
    related:["js-arrays-loops","js-functions","dom-basics"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → JavaScript object basics"},{book:"ejs", where:"Chapter 4, “Data Structures: Objects and Arrays”"}],
    sources:[{t:"MDN: JavaScript object basics", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics"},{t:"MDN: Working with objects", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"}], checked:"2026-11"},

   {id:"dom-basics", title:"The DOM: finding and changing elements", aka:["DOM","Document Object Model","querySelector","querySelectorAll","textContent","innerHTML","classList","XSS"], tags:["javascript","dom","web","security"],
    summary:"The DOM is the browser’s live tree of a page; JavaScript finds elements with querySelector and changes them, using textContent for text and classList for looks.",
    levels:{
     starter:[
      "When a browser reads HTML, it builds a **tree** of everything on the page in memory, called the **DOM** (Document Object Model). JavaScript can find any part of that tree and change it, and the screen updates to match.",
      {code:['const hours = document.querySelector("#hours");','hours.textContent = "Open today, 9:00 to 17:00";'].join("\n"), lang:"js"},
      "`document.querySelector` finds an element using the same selectors as CSS (`#id`, `.class`, `h1`). `textContent` replaces its text.",
      {warn:"Use `textContent` for anything a person typed. `innerHTML` treats text as HTML, which can let someone else’s code run on your page."},
      {key:"Find an element, then change it. The DOM is the page as JavaScript sees it."},
      "The DOM is live. The browser’s developer tools (the Elements panel) show the page as it is now, including your script’s changes, which can differ from the original HTML file."
     ],
     builder:[
      {table:[["Task","Code"],["First match","`document.querySelector(\".price\")`"],["All matches","`document.querySelectorAll(\".price\")` (loop with `for...of`)"],["Change text","`el.textContent = \"…\"`"],["Switch a class","`el.classList.add / remove / toggle / contains(\"name\")`"],["Make an element","`document.createElement(\"li\")`, then `list.append(li)`"],["Read an input","`input.value` (always a string)"]]},
      "`querySelector` returns `null` when nothing matches. The next line then fails with a TypeError (“Cannot set properties of null”). Check the selector’s spelling and capitals, and make sure the script runs after the page is read (`defer`).",
      "Keep the look in CSS and switch classes from JavaScript; class names in `classList` have no dot.",
      "**Why `innerHTML` is risky:** it parses its string as HTML. If that string contains a visitor’s typing, they can include something like an image whose `onerror` attribute runs code. This is **cross-site scripting (XSS)**, and MDN calls `innerHTML` “probably the most common vector” for it. Use `textContent` for text, and `createElement` plus `textContent` to build new elements. `innerHTML` is acceptable only for fixed HTML you wrote yourself.",
      "The DOM is live: the developer tools’ Elements panel (Inspector in Firefox) shows its current state, including your script’s changes, while View source shows the original file.",
      "Store elements you use more than once in `const` variables at the top of your script, so each selector is written once and is easy to fix."
     ],
     pro:[
      "The DOM is defined by the WHATWG DOM and HTML standards. Nodes include elements, text nodes and comments; `children` gives element children only, while `childNodes` includes text nodes (often whitespace).",
      "`querySelectorAll` returns a **static** NodeList (a snapshot), while older methods such as `getElementsByClassName` return **live** HTMLCollections that update as the document changes. `element.querySelector` searches only inside that element. `getElementById` is a fast alternative for ids (no `#`).",
      "`textContent` vs `innerText`: `textContent` returns all text, including hidden elements and the text of `<script>`/`<style>`, and doesn’t trigger layout. `innerText` is aware of CSS (skips hidden text) and forces a reflow when read, so it is slower.",
      "Defence in depth against XSS: never build HTML by concatenating untrusted strings; prefer DOM methods (`createElement`, `textContent`, `setAttribute` on safe attributes); be careful with URLs in `href` (a `javascript:` URL runs code); and on real sites use a **Content Security Policy**, and Trusted Types where supported, to block injected scripts. Note that `<script>` elements inserted via `innerHTML` don’t run, but event-handler attributes do.",
      "Performance: each DOM change can trigger style recalculation and layout. Batch changes (build a list in a `DocumentFragment` or a string you control, then insert once), and avoid reading layout values (`offsetHeight`) between writes in a loop."
     ]
    },
    related:["js-events","js-what-it-does","js-objects","js-console-debugging"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → DOM scripting introduction"},{book:"ejs", where:"Chapter 14, “The Document Object Model”"}],
    sources:[{t:"MDN: DOM scripting introduction", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting"},{t:"MDN: Element: innerHTML property (Security considerations)", url:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"},{t:"MDN: Node: textContent property", url:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"}], checked:"2026-11"},

   {id:"js-events", title:"Events and event listeners", aka:["event","addEventListener","click","input event","submit","event object","onclick"], tags:["javascript","dom","web"],
    summary:"Events are things that happen on a page, such as clicks; addEventListener asks the browser to run a function each time one happens.",
    levels:{
     starter:[
      "Pages respond to **events**: a tap, a click, a key press, typing in a box. You tell the browser “when this happens to that element, run this function” with `addEventListener`:",
      {code:['const button = document.querySelector("#more");','button.addEventListener("click", () => {','  document.querySelector("#extra").classList.toggle("hidden");','});'].join("\n"), lang:"js"},
      "The function doesn’t run straight away. The browser keeps it and runs it **every time** the button is clicked.",
      "Use a real `<button>` for things people click: it works with a keyboard, a mouse, a touch screen and a screen reader without extra work.",
      {key:"Find the element, listen for the event, change the page in the function."},
      "Common events include `\"click\"` (a tap or click, or Enter on a focused button), `\"input\"` (the text in a box changed) and `\"submit\"` (a form was sent). Each listener runs only when its event happens, so a page can sit quietly until someone does something."
     ],
     builder:[
      {list:[
        "The first argument is the event’s name as a string: `\"click\"`, `\"input\"` (the value of a box changed), `\"change\"`, `\"submit\"` (a form was sent), `\"keydown\"`. Not `\"onclick\"`: that’s the old attribute’s name.",
        "The second is the function to run. Pass the function itself (`showMenu`), not a call (`showMenu()`), which would run once immediately.",
        "Read changing things, such as `input.value`, **inside** the listener, so you get the value at the moment of the event.",
        "The function receives an **event object**: `(event) => { … }`. `event.target` is the element the event happened on."
      ]},
      "For forms, listen for `\"submit\"` on the `<form>` rather than `\"click\"` on its button: that also catches someone pressing [[kbd:Enter]]. Call `event.preventDefault()` first if you handle the data in JavaScript instead of sending the page somewhere.",
      "Inline handlers (`<button onclick=\"go()\">`) still work but mix HTML and JavaScript and must be repeated on every element; MDN calls them bad practice. `addEventListener` keeps behaviour in the script and allows several listeners per event.",
      "Variables that must remember things between events (a click count) belong **outside** the listener; variables needed for one event belong inside.",
      "Keep listeners short: read the values, call a function that does the work, then update the page. The function can then be tested on its own in the Console."
     ],
     pro:[
      "**Propagation:** most events **bubble** from the target up through its ancestors to `document`. That enables **event delegation**: one listener on a list (`ul.addEventListener(\"click\", …)`) can handle clicks on any item, including ones added later, by checking `event.target.closest(\"li\")`. `event.stopPropagation()` stops bubbling; use it sparingly.",
      "**Options:** `addEventListener(type, fn, { once: true })` removes itself after one call; `{ passive: true }` promises not to call `preventDefault`, which helps scrolling performance for touch and wheel listeners. `removeEventListener` needs the **same function reference**, so an inline arrow function can’t be removed later; store it in a variable first.",
      "**Default actions:** links navigate, forms submit and reload, checkboxes toggle. `event.preventDefault()` cancels them. Prefer keeping the default when it helps (a real link should stay a link).",
      "**Pointer vs touch vs mouse:** `click` fires for mouse, touch and keyboard activation of buttons, so it’s the most inclusive choice. Pointer events (`pointerdown`, `pointermove`) unify mouse, pen and touch when you need more detail.",
      "**Timing:** listeners run on the main thread one at a time (the event loop). A slow listener freezes the page; long work should be split up or moved to a Web Worker. Use `DOMContentLoaded` for code in non-deferred scripts that must wait for the HTML."
     ]
    },
    related:["dom-basics","js-functions","js-console-debugging"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → Introduction to events; Event bubbling"},{book:"ejs", where:"Chapter 15, “Handling Events”"}],
    sources:[{t:"MDN: Introduction to events", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events"},{t:"MDN: EventTarget: addEventListener() method", url:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"},{t:"MDN: Element: classList property", url:"https://developer.mozilla.org/en-US/docs/Web/API/Element/classList"}], checked:"2026-11"},

   {id:"js-console-debugging", title:"The Console and debugging", aka:["console","console.log","DevTools","debugger","breakpoint","logic error"], tags:["javascript","debugging","tools"],
    summary:"The Console shows a page’s messages and errors and runs JavaScript you type; console.log and breakpoints let you see what your code is really doing.",
    levels:{
     starter:[
      "Every desktop browser has **developer tools**, and the **Console** is the panel where JavaScript talks back. It shows errors, shows anything your code logs, and runs lines you type.",
      {table:[["Where","Open the Console"],["Chrome or Edge, Windows/Linux/ChromeOS","[[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]]"],["Chrome or Edge, Mac","[[kbd:Cmd]] + [[kbd:Option]] + [[kbd:J]]"],["Firefox","[[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]] ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:K]] on Mac)"],["Safari","Turn on Settings → Advanced → Show features for web developers, then Develop → Show Web Inspector"]]},
      "Phone browsers have no Console; this app’s Web Lab shows Console output and errors instead.",
      "`console.log(\"total is\", total);` prints values so you can see what’s really happening inside your code.",
      {warn:"Don’t paste code into the Console because a stranger asked you to. It runs with your login on that site."}
     ],
     builder:[
      "**A debugging routine** that works for any bug:",
      {ol:["Reproduce the problem with the Console open.","Read any error: its type, message and line. Fix the first one first.","No error? Log the values you’re relying on just before the misbehaving line, with labels and types: `console.log(\"bill:\", bill, typeof bill)`.","Move the log until you find the first place a value is wrong.","Change one thing, test again, remove the extra logs."]},
      "Useful Console tools: `console.error` and `console.warn` (stand out, and show where they were called from), `console.table(arrayOfObjects)` (a neat table), and typing a variable’s name in the Console to inspect it. The Console prints `undefined` after statements that produce no value; that’s not an error.",
      "**Logic errors** are the hardest: no message, just a wrong answer (a `<=` that should be `<`, conditions in the wrong order, strings joined instead of added). Predict what each value should be before you log it, then compare.",
      "On a school or work device, developer tools may be disabled by an administrator.",
      "Label your logs so you can tell them apart: `console.log(\"after split:\", share)` is far easier to read than a bare number among several others."
     ],
     pro:[
      "**Breakpoints** pause execution so you can inspect every variable at that moment. In Chrome DevTools use the **Sources** panel; in Firefox, the **Debugger**; in Safari, **Sources** in Web Inspector. Click a line number to set one, then step over, into and out of function calls and watch the **Scope** pane. The `debugger;` statement pauses at that line whenever the tools are open.",
      "Other breakpoint types save time: conditional breakpoints (pause only when `people === 0`), logpoints (log without editing code), DOM-change breakpoints (pause when an element is modified) and event-listener breakpoints (pause on any click).",
      "**Preserve log** keeps Console messages across page reloads. **Network** shows whether `script.js` actually loaded (a 404 there explains a script that “does nothing”). The Elements panel shows the live DOM and which classes are currently applied.",
      "Logging an object shows a **live** reference: the Console reads its details when you first expand it, so it may show newer values than at log time. Log `JSON.stringify(obj)` or a copy (`structuredClone(obj)`) if you need a snapshot.",
      "Mobile debugging: Safari on iPhone can be inspected from Safari on a Mac (on the iPhone turn on **Settings → Apps → Safari → Advanced → Web Inspector**, connect it to the Mac with a cable, then use the Mac’s Develop menu); Chrome on Android can be inspected from desktop Chrome at `chrome://inspect` with USB debugging enabled."
     ]
    },
    related:["js-errors","js-what-it-does","dom-basics"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → JavaScript debugging and error handling"},{book:"ejs", where:"Chapter 8, “Bugs and Errors”: “Debugging”"}],
    sources:[{t:"MDN: JavaScript debugging and error handling", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript"},{t:"MDN: console: log() static method", url:"https://developer.mozilla.org/en-US/docs/Web/API/console/log_static"},{t:"Chrome for Developers: Open Chrome DevTools", url:"https://developer.chrome.com/docs/devtools/open"}], checked:"2026-11"},

   {id:"js-errors", title:"Reading JavaScript errors", aka:["error message","SyntaxError","ReferenceError","TypeError","runtime error","stack trace","try...catch"], tags:["javascript","debugging"],
    summary:"An error message names the kind of problem, describes it and points to the line; syntax errors stop a whole script, runtime errors stop it at the failing line.",
    levels:{
     starter:[
      "Errors are normal: they are JavaScript telling you exactly where it got confused. An error message has three parts:",
      {ex:"Uncaught ReferenceError: visitorCount is not defined\n    at script.js:2:13", label:"An error", mono:true},
      {list:["**Type**: `ReferenceError`, the kind of problem.","**Message**: `visitorCount is not defined`, the details.","**Place**: `script.js:2:13`, file, line 2, character 13. Click it in the Console to jump there."]},
      "Fix the **first** error first. Later errors are often side effects of the first one.",
      {key:"Read the type, read the message, go to the line, check that line and the one before."},
      "Two kinds behave differently. A **syntax error** (broken grammar, such as a missing bracket) stops the whole script before any of it runs. A **runtime error** (such as an unknown name) stops it at that line, after the earlier lines have already run."
     ],
     builder:[
      {table:[["Type","Usually means","Check"],["SyntaxError","The code breaks the language’s grammar","Brackets, quotes, commas on that line and the line before"],["ReferenceError","An unknown name","Spelling, capitals, whether it was declared, scope"],["TypeError","A value used the wrong way (often `null`/`undefined`, or calling something that isn’t a function)","Did `querySelector` find anything? Is the method name exact?"],["RangeError","A number out of the allowed range","`toFixed(200)`; in Chrome, endless recursion"]]},
      "**Syntax errors** are found when the engine first reads the script, so **nothing in that script runs**, not even the lines above the mistake. **Runtime errors** happen while running: everything before the failing line has already happened, and nothing after it runs.",
      "Browsers word errors differently. For a misspelled id, Chrome says `Cannot set properties of null (setting 'textContent')` while Firefox says something like `can't access property \"textContent\", … is null`. The type and line number are what matter. MDN’s JavaScript error reference explains each message.",
      "A **logic error** produces no message at all, just a wrong result. Those need `console.log` and careful predictions (see {{js-console-debugging}}).",
      "Many messages have their own page in MDN’s JavaScript error reference, with an example of the mistake and the fix. Searching for the exact message in quotes usually finds it."
     ],
     pro:[
      "Errors are objects (`Error`, with subclasses such as `TypeError`) that carry `name`, `message` and `stack`. The **stack trace** lists the chain of function calls that led to the error, most recent first; read from the top to find the first line in your own code.",
      "**try…catch** lets a program handle an error instead of stopping:",
      {code:['try {','  const data = JSON.parse(text);','  show(data);','} catch (error) {','  message.textContent = "That file isn’t valid JSON.";','  console.error(error);','}'].join("\n"), lang:"js"},
      "Catch errors where you can do something useful (tell the user, try again, use a default). Swallowing errors silently with an empty `catch` hides bugs. `throw new Error(\"…\")` raises your own errors for impossible situations.",
      "An error in one listener or one script file doesn’t stop the others: each event handler call and each `<script>` runs separately. That’s why a page can be half-working.",
      "Errors in **asynchronous** code (promises, `fetch`) appear as “Uncaught (in promise)”; handle them with `.catch()` or `try…catch` around `await`. In production, sites often collect errors with `window.addEventListener(\"error\", …)` and report them, and use **source maps** so minified code’s line numbers map back to the original files.",
      "Strict mode (automatic in modules and classes) turns some silent mistakes into errors, such as assigning to an undeclared variable.",
      "A `finally` block runs after `try` and `catch` whatever happened, which suits tidying up, such as re-enabling a button that was disabled while work was in progress."
     ]
    },
    related:["js-console-debugging","js-what-it-does","dom-basics"],
    read:[{book:"mdn", where:"Dynamic scripting with JavaScript → What went wrong? Troubleshooting JavaScript"},{book:"ejs", where:"Chapter 8, “Bugs and Errors”"}],
    sources:[{t:"MDN: What went wrong? Troubleshooting JavaScript", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong"},{t:"MDN: JavaScript error reference", url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors"}], checked:"2026-11"}
  ],
  terms:[
   {id:"js-variable", term:"Variable (JavaScript)", def:"A name that refers to a value so you can use it later, created with const or let. Eloquent JavaScript calls variables bindings.", codex:"js-variables"},
   {id:"const", term:"const", def:"Creates a variable that can’t be reassigned to a different value. Its contents (such as an array’s items) can still change.", codex:"js-variables"},
   {id:"let", term:"let", def:"Creates a variable that can be reassigned later, such as a counter or a running total. It exists only inside the block where it was made.", codex:"js-variables"},
   {id:"string", term:"String", def:"A piece of text in JavaScript, written in quotes or backticks, such as \"Amara\" or \"42\". Digits in quotes are text, not a number.", codex:"js-types"},
   {id:"number-type", term:"Number (type)", def:"JavaScript’s type for amounts, whole or decimal, such as 42 or 3.5. Decimals are stored approximately, so 0.1 + 0.2 isn’t exactly 0.3.", codex:"js-types"},
   {id:"boolean", term:"Boolean", def:"A value that is either true or false. Comparisons such as age >= 18 produce booleans.", codex:"js-types"},
   {id:"undefined", term:"undefined", def:"JavaScript’s value for “not set yet”: a variable with no value, a missing property, or the result of a function with no return.", codex:"js-types"},
   {id:"null-value", term:"null", def:"A value meaning “deliberately empty”. For example, document.querySelector gives back null when no element matches.", codex:"js-types"},
   {id:"array", term:"Array", def:"An ordered list of values in square brackets, such as [\"Mon\", \"Tue\"]. Items are numbered from 0, and length says how many there are.", codex:"js-arrays-loops"},
   {id:"js-array-index", term:"Index (array)", def:"An item’s position number in an array, counted from 0. The last item’s index is length − 1.", codex:"js-arrays-loops"},
   {id:"object", term:"Object", def:"A group of named values (properties) in curly braces, such as { title: \"Atlas\", pages: 120 }. Read a property with a dot: book.title.", codex:"js-objects"},
   {id:"js-method", term:"Method", def:"A function stored in an object’s property and called with a dot and round brackets, such as \"hi\".toUpperCase() or list.push(4).", codex:"js-objects"},
   {id:"function-js", term:"Function (JavaScript)", def:"A named, reusable block of code that runs when it is called. It can take values in through parameters and give one back with return.", codex:"js-functions"},
   {id:"parameter", term:"Parameter", def:"A placeholder name in a function’s definition that receives a value when the function is called. The value passed in is called an argument.", codex:"js-functions"},
   {id:"return-value", term:"Return value", def:"The value a function sends back to the code that called it, using return. A function without return gives back undefined.", codex:"js-functions"},
   {id:"arrow-function", term:"Arrow function", def:"A shorter way to write a function: (n) => n * 2. Without braces it returns its expression automatically.", codex:"js-functions"},
   {id:"js-scope", term:"Scope", def:"The part of a program where a variable can be used. Variables made inside a function or a { } block can’t be seen from outside it.", codex:"js-functions"},
   {id:"condition", term:"Condition", def:"An expression that is checked for true or false to decide what happens next, such as the age < 12 in if (age < 12).", codex:"js-conditionals"},
   {id:"strict-equality", term:"Strict equality (===)", def:"A comparison that is true only when both values have the same type and the same value. Safer than ==, which converts types first.", codex:"js-operators-comparison"},
   {id:"truthy-falsy", term:"Truthy and falsy", def:"How JavaScript treats any value in a condition. The falsy values are false, 0, -0, 0n, \"\", null, undefined and NaN; everything else is truthy.", codex:"js-operators-comparison"},
   {id:"loop", term:"Loop", def:"Code that repeats a block, either once for each item (for...of) or while a condition stays true (for, while).", codex:"js-arrays-loops"},
   {id:"template-literal", term:"Template literal", def:"A string written between backticks that can include values with ${…}, such as a greeting that drops in a person’s name.", codex:"js-types"},
   {id:"nan", term:"NaN", def:"“Not a number”: the result of arithmetic that has no numeric answer, such as \"five\" * 2. Test for it with Number.isNaN().", codex:"js-types"},
   {id:"type-coercion", term:"Type coercion", def:"JavaScript quietly converting a value to another type, as when \"5\" + 1 gives \"51\" but \"5\" * 1 gives 5.", codex:"js-types"},
   {id:"js-keyword", term:"Reserved word", def:"A word with a special meaning in JavaScript, such as let, const, if, for or function, which can’t be used as a variable name.", codex:"js-variables"},
   {id:"js-statement", term:"Statement", def:"One instruction in a program, usually on its own line and ended with a semicolon. Statements run in order, top to bottom.", codex:"js-what-it-does"},
   {id:"js-comment", term:"Comment (code)", def:"A note for humans that JavaScript ignores: everything after // on a line, or between /* and */.", codex:"js-what-it-does"},
   {id:"ecmascript", term:"ECMAScript", def:"The official standard that defines the JavaScript language, published by Ecma International and updated every year.", codex:"js-what-it-does"},
   {id:"dom", term:"DOM", def:"Document Object Model: the browser’s live tree of objects representing a page. JavaScript changes the DOM, and the screen updates to match.", codex:"dom-basics"},
   {id:"query-selector", term:"querySelector", def:"A method that finds the first element matching a CSS selector, such as document.querySelector(\"#total\"). It gives back null if nothing matches.", codex:"dom-basics"},
   {id:"js-xss", term:"Cross-site scripting (XSS)", def:"An attack where text from one person is treated as code and runs in other people’s browsers, often through innerHTML. Using textContent for text prevents it.", codex:"dom-basics"},
   {id:"event", term:"Event", def:"Something that happens on a page, such as a click, a key press or typing in a box, which code can respond to.", codex:"js-events"},
   {id:"event-listener", term:"Event listener", def:"A function the browser runs every time a particular event happens on an element, attached with addEventListener.", codex:"js-events"},
   {id:"console-log", term:"console.log", def:"A built-in function that writes values to the browser’s Console, used to see what code is doing. People see it; the program can’t use it.", codex:"js-console-debugging"},
   {id:"syntax-error", term:"Syntax error", def:"A mistake in the grammar of the code, such as a missing bracket. The engine can’t read the script, so none of it runs.", codex:"js-errors"},
   {id:"runtime-error", term:"Runtime error", def:"An error that happens while valid code is running, such as using a name that doesn’t exist. Lines before it have already run; lines after it don’t.", codex:"js-errors"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u4-q01", lesson:"t2u4-l1", level:1, q:"What does JavaScript add to a web page that HTML and CSS can’t?", options:[
     {t:"Behaviour: responding to taps and typing, calculating, and changing the page while it’s open", ok:true, why:"HTML gives structure and CSS gives presentation; reacting and calculating need a programming language."},
     {t:"The text and headings", why:"Content is HTML’s job. JavaScript can change text, but the page’s content belongs in the HTML."},
     {t:"Colours, fonts and layout", why:"That’s CSS. JavaScript can switch classes that CSS styles, but the styling itself lives in CSS."},
     {t:"The web address of the page", why:"Addresses come from where the file is hosted, not from JavaScript."}
   ]},
   {id:"t2u4-q02", lesson:"t2u4-l1", level:1, q:"Where does the JavaScript of an ordinary web page run?", options:[
     {t:"In the visitor’s browser, on their own device", ok:true, why:"The script is downloaded with the page and the browser’s JavaScript engine runs it locally."},
     {t:"Only on the website’s server", why:"Some sites also run JavaScript on servers (for example with Node.js), but a page’s own scripts run in the browser."},
     {t:"Inside a Java program that must be installed", why:"JavaScript isn’t Java and needs no extra installation: every browser includes a JavaScript engine."},
     {t:"On the search engine that found the page", why:"Search engines only point you to the page; your browser downloads and runs it."}
   ]},
   {id:"t2u4-q03", lesson:"t2u4-l1", level:2, q:"Which line, placed in the `<head>`, loads `app.js` so that it can safely find elements in the `<body>`?", options:[
     {t:"`<script src=\"app.js\" defer><\/script>`", ok:true, why:"`defer` downloads the file while the HTML is read and runs it after the whole page has been read."},
     {t:"`<script src=\"app.js\"><\/script>`", why:"Without `defer`, the script runs as soon as the browser meets it in the head, before the body exists, so `querySelector` finds nothing."},
     {t:"`<script href=\"app.js\" defer><\/script>`", why:"Scripts use `src`, not `href` (that’s for links and stylesheets). This loads nothing."},
     {t:"`<script defer>` with the code from `app.js` pasted inside", why:"`defer` has no effect on inline scripts: they run immediately, before the body exists."}
   ]},
   {id:"t2u4-q04", lesson:"t2u4-l1", level:1, q:"Which of these is the normal way to write a comment in a JavaScript file?", options:[
     {t:"`// check the stock first`", ok:true, why:"`//` starts a comment that runs to the end of the line."},
     {t:"`<!-- check the stock first -->`", why:"That’s an HTML comment, which belongs in HTML files. JavaScript comments use `//` or `/* … */`."},
     {t:"`# check the stock first`", why:"`#` starts comments in Python and the command line, not in JavaScript."},
     {t:"`console.log(\"// check the stock\");`", why:"Inside quotes, `//` is just text. This line runs and logs it."}
   ]},
   {id:"t2u4-q05", lesson:"t2u4-l1", level:3, q:"Ana’s 10-line script has a missing `)` on line 4. Line 1 is `console.log(\"Starting\");`, but the Console shows only an error and no “Starting”. Why?", options:[
     {t:"A syntax error stops the whole script before any of it runs", ok:true, why:"The engine reads the entire script first. Broken grammar anywhere means none of it runs, including line 1."},
     {t:"Line 1 must also be wrong", why:"Line 1 is fine. Syntax errors prevent the whole script from starting."},
     {t:"The Console only shows the most recent message", why:"The Console keeps all messages. “Starting” was never logged."},
     {t:"Errors always delete earlier output", why:"Errors don’t remove earlier messages. A runtime error on line 4 would have left “Starting” visible."}
   ]},
   {id:"t2u4-q06", lesson:"t2u4-l1", level:2, q:"The Console shows `Uncaught ReferenceError: totl is not defined` with `app.js:7:15`. Where should you look first?", options:[
     {t:"Line 7 of app.js, around the 15th character, for the name `totl`", ok:true, why:"The location is file:line:column. A ReferenceError on an unknown name is usually a typo, here probably for `total`."},
     {t:"Line 15 of app.js", why:"The first number after the file name is the line (7); the second is the character position (15)."},
     {t:"The 7th script file on the page", why:"The location names the file directly: app.js. The 7 is a line number."},
     {t:"Anywhere: errors don’t say where they happened", why:"They do: the file, line and column are right there, and clicking them in the Console jumps to the line."}
   ]},
   {id:"t2u4-q07", lesson:"t2u4-l1", level:3, q:"Kenji gets a message in a game’s chat: “Open your browser Console on the game site and paste this code to unlock free coins.” What should he do?", options:[
     {t:"Not paste it: code in the Console runs with his login on that site and could take over his account", ok:true, why:"This is a known scam. Console code can do anything the page can do as him. Some browsers warn about pasting for exactly this reason."},
     {t:"Paste it, because the Console can’t change anything important", why:"The Console runs real JavaScript on the page, with his session: it can read and send his data."},
     {t:"Paste it, but only on a phone", why:"Phones have no Console anyway, and the risk is the same wherever the code runs."},
     {t:"Paste it and then close the tab quickly", why:"The code runs the instant it’s entered; closing the tab afterwards doesn’t undo what it did."}
   ]},
   {id:"t2u4-q08", lesson:"t2u4-l1", level:1, q:"What is ECMAScript?", options:[
     {t:"The official standard that defines the JavaScript language", ok:true, why:"Ecma International publishes it, and the TC39 committee updates it every year. Browsers implement it."},
     {t:"A newer version of Java for web pages", why:"It has nothing to do with Java; it’s the standard for JavaScript."},
     {t:"A browser made by Ecma", why:"It’s a specification document, not a browser."},
     {t:"A library you must install to use JavaScript", why:"Nothing needs installing: browsers already implement the ECMAScript standard."}
   ]},
   {id:"t2u4-q09", lesson:"t2u4-l1", level:3, q:"Hana types `console.log(\"Hello\")` into the Console. It shows `Hello`, then a grey `undefined`. What does the `undefined` mean?", options:[
     {t:"The Console is showing the result of the line she typed; `console.log` gives back no value", ok:true, why:"The Console prints the value of each line you enter. `console.log` displays its message and returns nothing, which shows as `undefined`. It isn’t an error."},
     {t:"Her code has an error", why:"Errors appear in red with a type such as ReferenceError. This is just a value."},
     {t:"The word Hello wasn’t defined", why:"`\"Hello\"` is a string, and it was logged successfully."},
     {t:"The browser doesn’t support console.log", why:"Every browser supports it; the Hello line proves it worked."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u4-q10", lesson:"t2u4-l2", level:1, q:"What does `typeof \"42\"` give?", options:[
     {t:"`\"string\"`", ok:true, why:"The quotes make it text, even though it contains only digits."},
     {t:"`\"number\"`", why:"Without quotes, `42` would be a number. With quotes, it’s a string."},
     {t:"`\"boolean\"`", why:"Booleans are only `true` and `false`."},
     {t:"`42`", why:"`typeof` always gives back the type’s name as a string, not the value."}
   ]},
   {id:"t2u4-q11", lesson:"t2u4-l2", level:2, q:"A page stores its club name, which will never be reassigned. Which declaration fits best?", options:[
     {t:"`const clubName = \"Riverside Readers\";`", ok:true, why:"`const` is the default for names that won’t be reassigned; it prevents accidents and tells readers it won’t change."},
     {t:"`let clubName = \"Riverside Readers\";`", why:"It works, but `let` signals the value will change. Use `const` when you can."},
     {t:"`var clubName = \"Riverside Readers\";`", why:"`var` is the older, error-prone keyword. Modern code uses `const` or `let`."},
     {t:"`clubName = \"Riverside Readers\";`", why:"Without a keyword you aren’t declaring a variable properly; in strict code it’s an error."}
   ]},
   {id:"t2u4-q12", lesson:"t2u4-l2", level:2, q:"What does this log?\n\n`let a = \"3\";`\n`let b = 4;`\n`console.log(a + b);`", options:[
     {t:"`34`", ok:true, why:"`a` is a string, so `+` joins: \"3\" + 4 becomes \"34\"."},
     {t:"`7`", why:"That would need two numbers. One is the string \"3\", so `+` joins them as text."},
     {t:"`NaN`", why:"Joining a string and a number is allowed; nothing here fails to be a number in a calculation."},
     {t:"An error", why:"JavaScript converts quietly instead of complaining. That’s why type surprises are easy to miss."}
   ]},
   {id:"t2u4-q13", lesson:"t2u4-l2", level:2, q:"Sione writes `console.log(\"Hi ${name}\");` (with double quotes), where `name` is \"Ana\". What appears?", options:[
     {t:"`Hi ${name}`", ok:true, why:"Only template literals (written between backticks) fill in `${…}`. In double quotes it’s plain text."},
     {t:"`Hi Ana`", why:"That needs backticks instead of double quotes."},
     {t:"`Hi undefined`", why:"The variable isn’t looked up at all inside ordinary quotes; the characters are printed as they are."},
     {t:"A SyntaxError", why:"It’s a valid string that happens to contain a dollar sign and braces."}
   ]},
   {id:"t2u4-q14", lesson:"t2u4-l2", level:3, q:"Mei’s page adds two amounts typed into boxes, 15 and 25, and shows 1525 instead of 40. What’s the fix?", options:[
     {t:"Convert each value with `Number(…)` before adding", ok:true, why:"Typed values arrive as strings, and `+` joins strings. `Number(\"15\") + Number(\"25\")` is 40."},
     {t:"Use `*` instead of `+`", why:"That would multiply (375), not add. The problem is the type, not the operator."},
     {t:"Put the values in quotes", why:"They’re already strings; that’s the problem."},
     {t:"Use `toFixed(2)` on the result", why:"Rounding a joined string doesn’t turn it into a sum."}
   ]},
   {id:"t2u4-q15", lesson:"t2u4-l2", level:1, q:"Which of these is **not** a valid JavaScript variable name?", options:[
     {t:"`first-name`", ok:true, why:"A hyphen is the minus operator, so this reads as `first` minus `name`. Use `firstName`."},
     {t:"`firstName`", why:"Valid, and the usual lower camel case style."},
     {t:"`total_2`", why:"Letters, digits and underscores are allowed, as long as it doesn’t start with a digit."},
     {t:"`$price`", why:"`$` is allowed in names."}
   ]},
   {id:"t2u4-q16", lesson:"t2u4-l2", level:2, q:"What does `0.1 + 0.2 === 0.3` give?", options:[
     {t:"`false`, because 0.1 + 0.2 is stored as 0.30000000000000004", ok:true, why:"Most decimals can’t be stored exactly in binary, so the sum is very slightly off. Round for display, or compare with a small tolerance."},
     {t:"`true`, because that’s basic arithmetic", why:"In exact maths it would be true, but computer numbers store decimals approximately."},
     {t:"An error", why:"The comparison works fine; it just gives a surprising result."},
     {t:"`NaN`", why:"All three are real numbers, so nothing is NaN. The comparison gives a boolean."}
   ]},
   {id:"t2u4-q17", lesson:"t2u4-l2", level:3, q:"Dmitri writes `const total = 0;` and later, in a loop, `total = total + price;`. The Console shows `TypeError: Assignment to constant variable.` What should he change?", options:[
     {t:"Declare it with `let total = 0;`, because its value is reassigned", ok:true, why:"`const` names can’t be pointed at a new value. A running total changes, so it needs `let`."},
     {t:"Use `==` instead of `=`", why:"`==` compares; it doesn’t store anything. He needs assignment, which requires `let`."},
     {t:"Put the 0 in quotes", why:"That would make it a string and cause joining instead of adding. The error is about `const`."},
     {t:"Move the `const` inside the loop", why:"It would still be a `const`, so the same error appears. And a total created inside the loop would restart at 0 on every round, so it could never build up."}
   ]},
   {id:"t2u4-q18", lesson:"t2u4-l2", level:1, q:"What is the usual difference between `undefined` and `null`?", options:[
     {t:"`undefined` means nothing has been set; `null` is a value someone chose to mean “empty”", ok:true, why:"JavaScript produces `undefined` for unset things; code and browser features use `null` on purpose, such as `querySelector` finding no match."},
     {t:"They are exactly the same value", why:"They’re different values of different types (`null === undefined` is false), though both mean “no real value”."},
     {t:"`null` is an error and `undefined` isn’t", why:"Neither is an error by itself; errors happen when you try to use them like real values."},
     {t:"`undefined` is a string and `null` is a number", why:"Each is its own type. `typeof undefined` is \"undefined\"; `typeof null` is \"object\" only because of an old bug."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u4-q19", lesson:"t2u4-l3", level:1, q:"Why is `===` usually preferred over `==`?", options:[
     {t:"`===` compares without converting types, so there are no hidden conversions", ok:true, why:"`==` converts values first with rules that surprise people (`\"\" == 0` is true). `===` needs the same type and value."},
     {t:"`===` is faster to type", why:"It’s one character longer. The reason is predictability."},
     {t:"`==` doesn’t work in modern browsers", why:"It still works; it’s just easy to misread."},
     {t:"`===` assigns and compares at the same time", why:"Comparison operators never assign. Assignment is a single `=`."}
   ]},
   {id:"t2u4-q20", lesson:"t2u4-l3", level:2, q:"`const fruits = [\"fig\", \"kiwi\", \"lime\"];` What is `fruits[fruits.length - 1]`?", options:[
     {t:"`\"lime\"`", ok:true, why:"`length` is 3, so this is `fruits[2]`, the last item (indexes are 0, 1, 2)."},
     {t:"`\"kiwi\"`", why:"That’s index 1. `length - 1` is 2."},
     {t:"`undefined`", why:"That’s what `fruits[3]` (or `fruits[fruits.length]`) gives. Subtracting 1 lands on the last real item."},
     {t:"`3`", why:"3 is the length; the expression uses it to find the last item."}
   ]},
   {id:"t2u4-q21", lesson:"t2u4-l3", level:2, q:"`const list = [\"tea\", \"rice\"];` then `list.push(\"oil\");`. What is `list.length` now, and did the `const` cause an error?", options:[
     {t:"3, and no error: `const` stops reassigning the name, not changing the array’s contents", ok:true, why:"`push` adds to the same array. Only `list = [...]` (pointing the name elsewhere) would be an error."},
     {t:"2, because `const` arrays can’t grow", why:"`const` doesn’t freeze contents. The array now has three items."},
     {t:"An error: Assignment to constant variable", why:"That error is for `list = …`. `push` changes the array without reassigning the name."},
     {t:"3, but only if `list` was declared with `let`", why:"`let` or `const` makes no difference to `push`."}
   ]},
   {id:"t2u4-q22", lesson:"t2u4-l3", level:3, q:"A café gives a discount when `total > 50 || isMember`. Which customer does **not** get it?", options:[
     {t:"Total 30, not a member", ok:true, why:"Both sides are false (30 isn’t over 50, and isMember is false), so `||` gives false."},
     {t:"Total 60, not a member", why:"`total > 50` is true, and `||` only needs one true side."},
     {t:"Total 30, a member", why:"`isMember` is true, which is enough for `||`."},
     {t:"Total 50, a member", why:"50 > 50 is false, but `isMember` is true, so the discount applies."}
   ]},
   {id:"t2u4-q23", lesson:"t2u4-l3", level:2, q:"How many times does the body of `for (let i = 0; i < 5; i++) { … }` run?", options:[
     {t:"5", ok:true, why:"i takes the values 0, 1, 2, 3 and 4. When i reaches 5, `i < 5` is false and the loop ends."},
     {t:"4", why:"Starting at 0 adds a round: 0 to 4 is five values."},
     {t:"6", why:"That would need `i <= 5`. With `<`, 5 itself is excluded."},
     {t:"It never stops", why:"`i++` raises i each round, so `i < 5` eventually becomes false."}
   ]},
   {id:"t2u4-q24", lesson:"t2u4-l3", level:1, q:"Which value is **truthy** (counts as true in an `if`)?", options:[
     {t:"`\"0\"`", ok:true, why:"Any non-empty string is truthy, even one containing a zero."},
     {t:"`0`", why:"The number 0 is falsy."},
     {t:"`\"\"`", why:"The empty string is falsy."},
     {t:"`null`", why:"`null` is falsy, as are `undefined` and `NaN`."}
   ]},
   {id:"t2u4-q25", lesson:"t2u4-l3", level:3, q:"Priya’s loop is `for (let i = 0; i <= items.length; i++) { console.log(items[i]); }`. With three items, it logs them and then `undefined`. What’s wrong?", options:[
     {t:"`<=` makes one round too many; with `<` the last round is the last real index", ok:true, why:"With 3 items the indexes are 0–2. `i <= 3` also runs with i = 3, and `items[3]` is `undefined`. This is an off-by-one error."},
     {t:"Arrays always end with `undefined`", why:"They don’t; the extra value comes from reading past the end."},
     {t:"The loop should start at 1", why:"Then it would skip the first item (index 0) and still read past the end."},
     {t:"`console.log` can’t print the last item", why:"It prints whatever it’s given; here it was given `items[3]`, which doesn’t exist."}
   ]},
   {id:"t2u4-q26", lesson:"t2u4-l3", level:2, q:"What does this log?\n\n`let n = 1;`\n`let steps = 0;`\n`while (n < 20) {`\n`  n = n * 3;`\n`  steps = steps + 1;`\n`}`\n`console.log(steps);`", options:[
     {t:"3", ok:true, why:"n goes 1 → 3 → 9 → 27. After the third round n is 27, which isn’t below 20, so the loop stops with steps = 3."},
     {t:"2", why:"After two rounds n is 9, still below 20, so a third round runs."},
     {t:"20", why:"20 is the limit for n, not the number of rounds."},
     {t:"It never stops", why:"n triples every round, so it soon passes 20."}
   ]},
   {id:"t2u4-q27", lesson:"t2u4-l3", level:3, q:"Tomás runs a page with a new `while` loop and the tab freezes. What’s the most likely cause?", options:[
     {t:"Nothing inside the loop changes the condition, so it never becomes false", ok:true, why:"An infinite loop keeps the browser busy, so it can’t redraw the page. Check the line that should move towards the end, such as `count = count + 1`."},
     {t:"The computer is too slow for loops", why:"Loops of thousands of rounds take milliseconds. A freeze means the loop doesn’t end."},
     {t:"`while` loops aren’t supported in browsers", why:"They’re a standard part of JavaScript."},
     {t:"The loop has too few rounds", why:"Too few rounds would end quickly, not freeze."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u4-q28", lesson:"t2u4-l4", level:1, q:"In `function greet(person) { … }` and the call `greet(\"Amara\")`, which is the parameter and which is the argument?", options:[
     {t:"`person` is the parameter; `\"Amara\"` is the argument", ok:true, why:"Parameters are the placeholder names in the definition; arguments are the actual values passed in a call."},
     {t:"`\"Amara\"` is the parameter; `person` is the argument", why:"It’s the other way round: the definition has parameters, the call has arguments."},
     {t:"Both are parameters", why:"Only the name in the definition is a parameter."},
     {t:"`greet` is the parameter", why:"`greet` is the function’s name."}
   ]},
   {id:"t2u4-q29", lesson:"t2u4-l4", level:2, q:"`function area(w, h) { return w * h; }` What is `area(3, 5) + 1`?", options:[
     {t:"16", ok:true, why:"The call returns 15, and then 1 is added."},
     {t:"15", why:"That’s the return value before the `+ 1` outside the function."},
     {t:"18", why:"That would be 3 × (5 + 1). The function returns 15 first, then 1 is added."},
     {t:"`undefined`", why:"The function has `return`, so it gives back 15."}
   ]},
   {id:"t2u4-q30", lesson:"t2u4-l4", level:3, q:"Kenji writes `function isAdult(age) { if (age >= 18) { return true; } }`. What does `isAdult(15)` give?", options:[
     {t:"`undefined`, because no `return` runs for 15", ok:true, why:"The only `return` is inside the `if`. For 15 the `if` is skipped and the function ends without returning, which gives `undefined`. Add `return false;` after the `if`."},
     {t:"`false`", why:"A function doesn’t return `false` automatically; it returns `undefined` when no `return` runs."},
     {t:"`true`", why:"15 >= 18 is false, so the `return true` line never runs."},
     {t:"A ReferenceError", why:"Nothing undefined is referenced; the function simply finishes without returning a value."}
   ]},
   {id:"t2u4-q31", lesson:"t2u4-l4", level:2, q:"`const square = (n) => n * n;` What is `square(4)`?", options:[
     {t:"16", ok:true, why:"An arrow function without braces returns its expression automatically: 4 × 4."},
     {t:"8", why:"That’s 4 + 4 or 4 × 2. The function multiplies n by itself."},
     {t:"`undefined`", why:"Without braces, the arrow function returns its expression. `undefined` happens with braces and no `return`."},
     {t:"An error, because arrow functions can’t be stored in `const`", why:"Storing a function in a `const` is normal; it’s called like any function."}
   ]},
   {id:"t2u4-q32", lesson:"t2u4-l4", level:3, q:"Lucía writes this (earlier in her script, `hour` is set to 9):\n\n`if (hour < 12) { const greeting = \"Good morning\"; }`\n`console.log(greeting);`\n\nWhat happens?", options:[
     {t:"A ReferenceError, because `greeting` only exists inside the `if` block", ok:true, why:"`const` and `let` are block-scoped: they disappear at the closing brace. Declare the variable before the `if` (with `let`) and assign it inside."},
     {t:"It logs Good morning", why:"That’s what the older `var` would do, because `var` ignores blocks. `const` was created inside the braces and isn’t visible after them."},
     {t:"It logs `undefined`", why:"A `const` used outside its block doesn’t give `undefined`; the name simply doesn’t exist there, which is a ReferenceError."},
     {t:"A SyntaxError", why:"The grammar is fine; the name simply isn’t in scope where it’s used."}
   ]},
   {id:"t2u4-q33", lesson:"t2u4-l4", level:1, q:"What is a method?", options:[
     {t:"A function stored in an object’s property, called with a dot and brackets", ok:true, why:"For example `\"hi\".toUpperCase()` or `list.push(4)`."},
     {t:"Any variable declared with `const`", why:"That’s just a constant variable; it may or may not hold a function."},
     {t:"A comment that explains a function", why:"Comments are ignored by JavaScript; a method is runnable code."},
     {t:"The value a function returns", why:"That’s a return value."}
   ]},
   {id:"t2u4-q34", lesson:"t2u4-l4", level:2, q:"`const event = { name: \"Quiz night\", seats: 40 };` What is `event.seats - 5`?", options:[
     {t:"35", ok:true, why:"`event.seats` reads the property (40), then 5 is subtracted."},
     {t:"`\"Quiz night\"`", why:"That’s `event.name`. The expression reads `seats`."},
     {t:"`NaN`", why:"`seats` holds a number, so the subtraction works."},
     {t:"`undefined`", why:"`seats` exists on the object. A misspelled name such as `event.seat` would give `undefined`."}
   ]},
   {id:"t2u4-q35", lesson:"t2u4-l4", level:3, q:"A library loop counts loans with `if (loan.days > 14) { late++; }`. The loans have `days` of 7, 21, 15 and 14. What is `late` at the end (starting from 0)?", options:[
     {t:"2", ok:true, why:"Only 21 and 15 are greater than 14. 14 itself isn’t greater than 14, and 7 isn’t either."},
     {t:"3", why:"That counts the 14, but `>` excludes it. `>=` would include it."},
     {t:"4", why:"7 and 14 fail the test, so not every loan is counted."},
     {t:"57", why:"That adds up the days. The loop adds 1 per matching loan, not the days themselves."}
   ]},
   {id:"t2u4-q36", lesson:"t2u4-l4", level:2, q:"`function greet() { return \"Hi!\"; }` What does `const x = greet;` (no brackets) store in `x`?", options:[
     {t:"The function itself; it hasn’t run", ok:true, why:"Without brackets you refer to the function as a value. `x()` would now call it. This is how functions are passed to `addEventListener`."},
     {t:"The string \"Hi!\"", why:"That needs a call: `greet()`. Without brackets, nothing runs."},
     {t:"`undefined`", why:"`greet` exists, so `x` gets the function."},
     {t:"An error", why:"Referring to a function without calling it is allowed and common."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u4-q37", lesson:"t2u4-l5", level:1, q:"What is the DOM?", options:[
     {t:"The browser’s live tree of objects that represents the page, which JavaScript can read and change", ok:true, why:"The browser builds it from the HTML; changes to it show on screen immediately."},
     {t:"The HTML file exactly as it was downloaded", why:"That’s the source. The DOM starts from it but changes as scripts run."},
     {t:"A JavaScript library you have to install", why:"Every browser provides the DOM; no installation needed."},
     {t:"The list of websites in your history", why:"That’s browser history, unrelated to the structure of one page."}
   ]},
   {id:"t2u4-q38", lesson:"t2u4-l5", level:2, q:"No element on the page has `id=\"menu\"`. What does `document.querySelector(\"#menu\")` give back?", options:[
     {t:"`null`", ok:true, why:"`querySelector` returns `null` when nothing matches, and using it next causes a TypeError."},
     {t:"`undefined`", why:"DOM methods use `null` for “no element found”."},
     {t:"An empty element", why:"Nothing is created; you get `null`."},
     {t:"It throws an error immediately", why:"The search itself succeeds and returns `null`. The error comes when you try to use that `null`."}
   ]},
   {id:"t2u4-q39", lesson:"t2u4-l5", level:3, q:"A recipe site shows visitors’ comments with `box.innerHTML = comment;`. A reviewer warns it’s unsafe. What’s the risk, and the fix?", options:[
     {t:"A comment containing HTML with event-handler code could run in every reader’s browser (XSS); use `textContent`", ok:true, why:"`innerHTML` parses text as HTML, so attackers can plant code. `textContent` shows any text literally and never runs it."},
     {t:"Comments might be too long; use `toFixed`", why:"Length isn’t the danger, and `toFixed` is for numbers."},
     {t:"`innerHTML` is slow; use `console.log` instead", why:"`console.log` only writes to the Console, so readers would see nothing. The real issue is security."},
     {t:"There’s no risk as long as the site uses HTTPS", why:"HTTPS protects data in transit; it doesn’t stop the page itself running planted code."}
   ]},
   {id:"t2u4-q40", lesson:"t2u4-l5", level:2, q:"Which line adds the class `open` if it’s missing and removes it if it’s there?", options:[
     {t:"`panel.classList.toggle(\"open\");`", ok:true, why:"`toggle` switches the class each time it runs."},
     {t:"`panel.classList.add(\"open\");`", why:"`add` only ever adds; a second click wouldn’t remove it."},
     {t:"`panel.classList.toggle(\".open\");`", why:"Class names in `classList` have no dot. This would toggle a class literally named “.open”."},
     {t:"`panel.classList.contains(\"open\");`", why:"`contains` only asks whether the class is there; it changes nothing."}
   ]},
   {id:"t2u4-q41", lesson:"t2u4-l5", level:3, q:"Fatima’s greeting page always shows “Hi, !” even after she types her name. Her script starts with `const typed = nameBox.value;` and the click listener uses `typed`. Why?", options:[
     {t:"The value was read once when the page loaded, while the box was empty", ok:true, why:"`value` is read at the moment the line runs. Read `nameBox.value` inside the listener to get what’s there at the click."},
     {t:"Input boxes can’t be read by JavaScript", why:"They can, through `value`; the timing is the problem."},
     {t:"`const` erases its value after each click", why:"`const` keeps its value, which is exactly why it’s stuck on the empty string."},
     {t:"She needs `innerHTML` instead of `value`", why:"An input’s typed text is in `value`. `innerHTML` of an input is empty, and it would also be unsafe for display."}
   ]},
   {id:"t2u4-q42", lesson:"t2u4-l5", level:2, q:"What is wrong with `saveBtn.addEventListener(\"click\", save());`?", options:[
     {t:"`save()` runs once immediately, and its result (not the function) is given to the listener", ok:true, why:"Pass the function itself: `addEventListener(\"click\", save)`, or wrap it: `() => save()`."},
     {t:"The event should be called `\"onclick\"`", why:"The event’s name is `\"click\"`. `onclick` is the old attribute name."},
     {t:"Buttons can’t have event listeners", why:"Buttons are the most common place for click listeners."},
     {t:"Nothing; this is the correct form", why:"The brackets call the function now, which is the bug."}
   ]},
   {id:"t2u4-q43", lesson:"t2u4-l5", level:1, q:"Why should something people click be a `<button>` rather than a `<div>` with a click listener?", options:[
     {t:"A button already works with the keyboard and with screen readers", ok:true, why:"Buttons can be focused with Tab, activated with Enter or Space, and are announced as buttons. A `<div>` needs extra code for all of that."},
     {t:"Divs can’t have event listeners", why:"They can, but they lack built-in keyboard and screen-reader support."},
     {t:"Buttons load faster", why:"Speed isn’t the difference; accessibility is."},
     {t:"`<div>` elements are invalid HTML", why:"Divs are valid; they’re just not interactive controls."}
   ]},
   {id:"t2u4-q44", lesson:"t2u4-l5", level:3, q:"Hana removes the empty-bill check from the bill splitter and clicks with the bill box empty (2 people, 10% tip). What appears?", options:[
     {t:"“Each person pays 0.00”, because `Number(\"\")` is 0", ok:true, why:"An empty box gives `\"\"`, and `Number(\"\")` is 0, so the maths quietly works on 0. That’s why the code checks for an empty box before converting."},
     {t:"“Each person pays NaN”", why:"NaN comes from text that isn’t a number, such as \"abc\". The empty string converts to 0."},
     {t:"A TypeError in the Console", why:"Nothing is `null`; every value is a number, so no error appears. That’s what makes this bug quiet."},
     {t:"Nothing at all", why:"The listener still runs and sets `textContent` to a message with 0.00."}
   ]},
   {id:"t2u4-q45", lesson:"t2u4-l5", level:2, q:"A greeting shows “Hi, [object HTMLInputElement]!”. What did the code most likely forget?", options:[
     {t:"`.value`, to get the text typed into the input", ok:true, why:"The code put the input element itself into the string. `nameBox.value` gives its contents."},
     {t:"`defer` on the script element", why:"Without `defer` you’d get a null error, not the element’s description."},
     {t:"Backticks around the template", why:"The template clearly worked: it filled in something. It was given the wrong thing."},
     {t:"`Number(…)` around the name", why:"Names are text; converting to a number would give NaN."}
   ]}
  ]
});
