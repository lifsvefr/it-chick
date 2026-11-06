/* Track 2 · Unit 2 · Structuring pages with HTML */
ICA.addUnit({
  id:"t2u2", track:"t2", n:2, title:"Structuring pages with HTML", icon:"🧱",
  blurb:"How HTML really works: elements, tags and attributes, the skeleton every page needs, and the elements that give text, links, images, tables and forms their meaning, so browsers, search engines and screen readers all understand your page.",
  goals:[
    "Read and write HTML elements with correct nesting, quoted attributes, comments and character references, and predict what a browser does with mistakes",
    "Build a complete page skeleton with a doctype, a language, a character set, a viewport and a title, and explain what each part is for",
    "Mark up text by meaning: headings in order, paragraphs, lists, emphasis and quotations",
    "Write links that make sense out of context and images with useful alt text, and choose a sensible image format",
    "Structure a page with landmarks, build an accessible data table and a labelled form, and check your work with the W3C validator"
  ],
  read:[
    {book:"mdn", where:"Core modules → “Structuring content with HTML” (the module overview and its first pages: “Basic HTML syntax”, “What’s in the head? Web page metadata”, “Headings and paragraphs”)", note:"MDN’s HTML module covers everything in this unit, with live examples and short tests. Each lesson names the exact pages."},
    {book:"mdn", where:"Structuring content with HTML → “Creating links”, “HTML images”, “Structuring documents”, “HTML table basics”, “HTML table accessibility”, “Forms and buttons in HTML” and “Debugging HTML”"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u2-l1", title:"Elements, tags and attributes", minutes:50,
   hook:{q:"In HTML you type `<p>Open      Monday` then press Enter twice and type `to Friday</p>`. What does the browser show?", options:["The words exactly as typed, with the six spaces and the blank line","“Open Monday to Friday” on one line, with single spaces","An error message, because the spacing is wrong","Two separate paragraphs"], answer:1, reveal:"The browser shows “Open Monday to Friday” with single spaces. In HTML, any run of spaces, tabs and line breaks collapses into one space, so the spacing in your file is for you, not the reader. Layout comes from elements (and later CSS), which is what this lesson is about."},
   goals:[
     "Name the parts of an element: opening tag, content, closing tag, attributes",
     "Nest elements correctly and predict what a browser does with overlapping tags",
     "Recognise void elements, quote attribute values, and use boolean attributes",
     "Use whitespace, comments and character references such as `&lt;` and `&amp;` correctly"
   ],
   learn:[
    {h:"Labels around content", body:[
      {lead:"HTML doesn’t draw a page. It labels the parts of your content, and the browser decides how to show each kind of part."},
      "Imagine printing a recipe and marking it up with a pen: you bracket the title and write “heading” beside it, bracket the shopping items and write “list”, bracket a warning and write “important”. That is exactly what HTML (HyperText Markup Language) does, except the brackets are typed into the text itself.",
      "Here is plain text, then the same text marked up:",
      {code:'Lemon drizzle cake\nA soft sponge with a sharp, sweet glaze.', lang:"txt", label:"Plain text"},
      {code:'<h1>Lemon drizzle cake</h1>\n<p>A soft sponge with a sharp, sweet glaze.</p>', lang:"html", weblab:"wl-first-page"},
      "`<h1>` labels the top heading of the page and `<p>` labels a paragraph. The browser reads those labels and shows a big heading and a normal paragraph. Search engines read them too, and so do screen readers, the programs that read a page aloud for people who are blind or have low vision. That is why this whole unit is about choosing the label that matches the **meaning**, not the look.",
      {key:"HTML says what each piece of content is. CSS (Unit 3) says how it looks. JavaScript (Unit 4) says how it behaves."}
    ]},
    {h:"Anatomy of an element", body:[
      "Each labelled piece is an [[element]]. Most elements have three parts:",
      {fig:'<svg viewBox="0 0 340 272"><text x="106" y="50" text-anchor="middle">opening tag</text><text x="239" y="50" text-anchor="middle">content</text><text x="304" y="32" text-anchor="middle">closing</text><text x="304" y="50" text-anchor="middle">tag</text><rect class="d-gold" x="8" y="60" width="188" height="42" rx="6" stroke-width="2"/><rect class="d-lup" x="34" y="67" width="138" height="28" rx="4" stroke-width="1.5"/><text x="12" y="86" font-family="monospace">&lt;a</text><text x="40" y="86" font-family="monospace" textLength="126" lengthAdjust="spacing">href="menu.html"</text><text x="178" y="86" font-family="monospace">&gt;</text><rect class="d-sage" x="202" y="60" width="74" height="42" rx="6" stroke-width="2"/><text x="239" y="86" text-anchor="middle" font-family="monospace">Our menu</text><rect class="d-gold" x="282" y="60" width="44" height="42" rx="6" stroke-width="2"/><text x="304" y="86" text-anchor="middle" font-family="monospace">&lt;/a&gt;</text><text class="s" x="56" y="118" text-anchor="middle">name</text><text class="s" x="122" y="118" text-anchor="middle">value</text><text x="103" y="136" text-anchor="middle">attribute</text><path class="d-ink" d="M8,148 L8,156 L326,156 L326,148" stroke-width="1.5"/><text x="167" y="176" text-anchor="middle">all of it together is one element</text><rect class="d-panel" x="8" y="196" width="326" height="36" rx="6" stroke-width="1.5"/><text x="171" y="219" text-anchor="middle" font-family="monospace">&lt;img src="cake.jpg" alt="Lemon cake"&gt;</text><text x="171" y="250" text-anchor="middle">A void element: attributes, but no</text><text x="171" y="266" text-anchor="middle">content and no closing tag.</text></svg>', alt:"The link element <a href=\"menu.html\">Our menu</a> split into parts. The opening tag, <a href=\"menu.html\">, is outlined in gold, and inside it the attribute href=\"menu.html\" is outlined in lupine, with href labelled name and \"menu.html\" labelled value. The words Our menu, outlined in sage, are the content. </a>, in gold, is the closing tag. A bracket underneath says all of it together is one element. Below, <img src=\"cake.jpg\" alt=\"Lemon cake\"> is labelled a void element: attributes, but no content and no closing tag.", cap:"An element is the opening tag, the content and the closing tag together. Attributes live inside the opening tag."},
      {list:[
        "The [[opening-tag|opening tag]], such as `<a>`: the element’s name between angle brackets. It says “this kind of thing starts here”.",
        "The **content**: the text (or other elements) the label applies to.",
        "The [[closing-tag|closing tag]], such as `</a>`: the same name with a forward slash. It says “it ends here”."
      ]},
      "People often say “tag” when they mean “element”. The difference is worth keeping: a [[tag]] is just the bracketed marker, while the element is the whole thing, from opening tag to closing tag, including the content. A paragraph element has two tags.",
      "Element names are not case-sensitive (`<P>` works), but lowercase is the convention almost everyone follows, and it’s what you’ll see in MDN and in this course."
    ]},
    {h:"Attributes: extra information", body:[
      "An [[attribute]] adds information about an element that isn’t part of its visible content. It goes inside the opening tag, after the name and a space, written as `name=\"value\"`:",
      {code:'<a href="menu.html" lang="en">Our menu</a>\n<img src="cake.jpg" alt="Lemon drizzle cake">', lang:"html"},
      "`href` says where the link goes, `lang` says which language the text is in, `src` says which image file to show, and `alt` gives a text alternative for the image. Lesson 4 covers these in depth. Separate several attributes with spaces; their order doesn’t matter.",
      {h:"Always quote the value"},
      "Quotes are technically optional when a value has no spaces or special characters (such as `=`, `<`, `>` or quote marks), but leaving them out causes a quiet, confusing bug. Watch what happens to a value with spaces:",
      {code:'<a href="menu.html" title=Our cafe menu>Menu</a>', lang:"html", cap:"The browser reads this as `title=\"Our\"` plus two extra, meaningless attributes named `cafe` and `menu`."},
      "The space ends the unquoted value. Single quotes (`'…'`) and double quotes (`\"…\"`) both work; pick one style and stick to it. Most people use double quotes.",
      {h:"Boolean attributes"},
      "A few attributes are switches: being present means “on”. These [[boolean-attribute|boolean attributes]] include `required`, `checked` and `disabled`. You write just the name, as in `<input type=\"checkbox\" checked>`.",
      {warn:"`checked=\"false\"` does **not** untick a checkbox. The attribute is present, so it’s on. To turn it off, remove the attribute."}
    ]},
    {h:"Elements inside elements", body:[
      "Elements can contain other elements. This is [[nesting]], and it’s how a page gets its structure: a list contains list items, a paragraph can contain a link, a link can contain emphasised words.",
      {code:'<p>We’re open <strong>every day</strong> until 6 pm.</p>', lang:"html"},
      "The `<strong>` element is a **child** of the `<p>` element, and the `<p>` is its **parent**. The rule is simple: an element must close inside the element that contains it. Think of boxes inside boxes: a box can sit inside another box, but two boxes can’t half-overlap.",
      {fig:'<svg viewBox="0 0 340 266"><text x="8" y="18">Right: one box fully inside another</text><rect class="d-sage" x="8" y="28" width="324" height="64" rx="6" stroke-width="2"/><text x="16" y="48" font-family="monospace">&lt;p&gt;</text><rect class="d-lup" x="100" y="42" width="150" height="38" rx="5" stroke-width="2"/><text x="175" y="66" text-anchor="middle" font-family="monospace">&lt;strong&gt;</text><text x="8" y="114" font-family="monospace">&lt;p&gt;Open &lt;strong&gt;daily&lt;/strong&gt;.&lt;/p&gt;</text><text x="8" y="146">Wrong: the boxes overlap</text><rect class="d-sage" x="8" y="156" width="200" height="64" rx="6" stroke-width="2"/><text x="16" y="176" font-family="monospace">&lt;p&gt;</text><rect class="d-rose" x="120" y="170" width="212" height="38" rx="5" stroke-width="2"/><text x="270" y="194" text-anchor="middle" font-family="monospace">&lt;strong&gt;</text><text x="8" y="242" font-family="monospace">&lt;p&gt;Open &lt;strong&gt;daily.&lt;/p&gt;&lt;/strong&gt;</text><text class="s" x="8" y="262">Close in reverse order: last opened, first closed.</text></svg>', alt:"Two diagrams. Top, labelled right: a sage box marked p contains a lupine box marked strong entirely inside it, with the code <p>Open <strong>daily</strong>.</p>. Bottom, labelled wrong: a sage box marked p and a rose box marked strong overlap, with strong sticking out past the end of p, and the code <p>Open <strong>daily.</p></strong>. A note says close in reverse order: last opened, first closed.", cap:"Correct nesting and overlapping tags."},
      {h:"What a browser does with mistakes"},
      "Browsers never refuse to show a page. The HTML standard gives them rules for repairing broken markup, so you get **something**, but not always what you meant. Three real results from Chromium, the engine behind Chrome and Edge:",
      {table:[
        ["You write","The browser builds"],
        ["`<p>Doors open at <strong>7 pm.</p><p>Bring a cushion.</p>`","Closes the `<strong>` at the end of the first paragraph, then reopens it: “Bring a cushion.” comes out bold too."],
        ["`<p>Shopping:<ul><li>Eggs</li></ul></p>`","A list can’t go inside a paragraph, so the `<p>` ends before the `<ul>`, and the stray `</p>` becomes an extra empty paragraph."],
        ["`<p>Visit <a href=\"https://example.org/>our site</a> today.</p>` (missing quote)","Everything after the missing quote is swallowed into the attribute value. Here the link and all the text after it disappear."]
      ]},
      "The lesson: mistakes in HTML don’t produce error messages on the page. They produce strange formatting, missing text or broken structure. Lesson 5 shows how a validator finds them for you.",
      {lab:"wl-fix-nesting", t:"Practise: fix wrongly nested tags"}
    ]},
    {h:"Void elements", body:[
      "Some elements can’t have content, so they have no closing tag. These are [[void-element|void elements]]. The ones you’ll use most:",
      {table:[
        ["Element","What it does"],
        ["`<br>`","A line break inside text, as in an address or a poem"],
        ["`<img>`","Shows an image (its information is in attributes)"],
        ["`<input>`","A form field, such as a text box or checkbox"],
        ["`<meta>`","Information about the page, in the head"],
        ["`<link>`","Connects another file, such as a stylesheet"],
        ["`<hr>`","A thematic break between topics"]
      ]},
      "You may see them written with a slash, like `<br />`. That style comes from XHTML. In HTML the slash is allowed on void elements and simply ignored, so `<br>` and `<br />` are identical. Choose one style for your project.",
      {warn:"The slash doesn’t close other elements. `<div />` is treated as an opening `<div>`, and everything after it ends up inside the div."}
    ]},
    {h:"Whitespace and comments", body:[
      "When the browser shows text, it collapses every run of spaces, tabs and line breaks into a single space (the warm-up question showed this). So indent your code freely; the reader never sees it. The usual style is two spaces per level of nesting:",
      {code:'<ul>\n  <li>Flour</li>\n  <li>Lemons</li>\n</ul>', lang:"html"},
      "Two consequences catch beginners. Pressing Enter in your file doesn’t start a new line on the page; use a new `<p>` for a new paragraph, or `<br>` for a line break within one. And typing ten spaces won’t indent text; that’s a job for CSS. (The `<pre>` element is the exception: it keeps spacing exactly, which is useful for showing code.)",
      "An [[html-comment|HTML comment]] is a note for people reading the code. The browser skips it:",
      {code:'<!-- Opening hours change in winter -->\n<p>Open 8 am to 6 pm.</p>', lang:"html"},
      "Comments start with `<!--` and end with `-->`. They’re handy for leaving notes and for temporarily hiding a piece of HTML.",
      {warn:"Comments are invisible on the page but **not** private. Anyone can read them in the page’s source. Never put passwords, keys or private notes in a comment."}
    ]},
    {h:"Special characters", body:[
      "Because `<` starts a tag, you can’t always type it as ordinary text. Write `a<b` in a paragraph and the browser tries to read `<b` as the start of a tag, and your text is damaged. A [[character-reference|character reference]] solves this: a short code that starts with `&` and ends with `;` and stands for one character.",
      {table:[
        ["To show","Write","When you need it"],
        ["<","&lt;","Any time a < is followed by a letter, `/`, `!` or `?`; simplest to always use it"],
        [">","&gt;","Optional in text, but often used with `&lt;` for symmetry"],
        ["&","&amp;","Whenever an & could be read as the start of a reference"],
        ["\"","`&quot;`","Inside an attribute value wrapped in double quotes"],
        ["'","`&apos;`","Inside an attribute value wrapped in single quotes"]
      ]},
      "So to write about HTML in HTML, you write the references:",
      {code:'<p>Start each paragraph with &lt;p&gt;.</p>\n<p>Fish &amp; chips: 9.50</p>', lang:"html", cap:"The page shows: Start each paragraph with <p>. Fish & chips: 9.50"},
      "You don’t need references for accents, other alphabets or symbols such as é, ñ, ü, ç, 日本, ©, € or emoji. Type them directly, as long as the page declares the UTF-8 character encoding, which every page in this course does (Lesson 2).",
      {tip:"Some named references exist for convenience, such as `&copy;` (©) and `&nbsp;` (a no-break space that keeps two words on the same line, as in “10 kg”). You’ll rarely need more than the five above."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A tag and an element are the same thing.”** The tag is the marker; the element is opening tag + content + closing tag.",
        "**“If it looks right, the HTML is right.”** Browsers repair mistakes silently. Broken nesting can look fine today and break when you add CSS or JavaScript.",
        "**“Extra spaces and blank lines will show on the page.”** They collapse to one space. Use elements for structure.",
        "**“`<br />` is the modern, correct way.”** The slash is optional and ignored in HTML. Neither style is more correct.",
        "**“Comments are hidden.”** Hidden from the page, readable by anyone who views the source."
      ]}
    ]}
   ],
   try:[
    {id:"t2u2-l1-x1", type:"mcq", q:"Look at `<p>Open daily</p>`. Which statement is accurate?", options:[
      {t:"`<p>` and `</p>` are two tags; together with the text they form one element", ok:true, why:"Right. Tags are the markers. The element is everything from the opening tag to the closing tag, content included."},
      {t:"It contains two elements: `<p>` and `</p>`", why:"Those are the opening and closing tags of a **single** paragraph element, not two elements."},
      {t:"“Open daily” is an attribute of the paragraph", why:"Attributes live inside the opening tag, like `lang=\"en\"`. The words between the tags are the element’s content."},
      {t:"The closing tag is optional, so it isn’t part of the element", why:"Whether or not a closing tag is optional, when it’s written it belongs to the element. Writing it is the clearest habit."}
    ]},
    {id:"t2u2-l1-x2", type:"mcq", q:"Kenji writes `<img src=\"stall.jpg\" alt=Our market stall>`. What does the browser do with the alt attribute?", options:[
      {t:"It reads `alt=\"Our\"`, plus two extra attributes called `market` and `stall`", ok:true, why:"An unquoted value ends at the first space. The rest becomes meaningless attribute names, so a screen reader would announce just “Our”. Quoting the value fixes it."},
      {t:"It reads the whole phrase “Our market stall”, because quotes are optional", why:"Quotes are only optional when the value has no spaces. Here the space cuts the value short."},
      {t:"It refuses to show the image", why:"Browsers don’t refuse; they repair. The image still shows, but its alt text is wrong."},
      {t:"It shows an error message on the page", why:"HTML mistakes never show error messages on the page, which is why they’re easy to miss. A validator would report them."}
    ]},
    {id:"t2u2-l1-x3", type:"mcq", q:"Ana’s event page contains `<p>Doors open at <strong>7 pm.</p><p>Bring a cushion.</p>`. How will it look?", options:[
      {t:"“7 pm.” is bold, and so is the whole next paragraph, “Bring a cushion.”", ok:true, why:"The `<strong>` was never closed. The browser closes it at the end of the first paragraph and then reopens it in the next one, so the bold spreads. Closing `</strong>` before `</p>` fixes it."},
      {t:"Only “7 pm.” is bold; the browser knows where it should stop", why:"The browser can only follow its repair rules; it can’t read Ana’s mind. Those rules carry the open `<strong>` into the next paragraph."},
      {t:"Nothing is bold, because the element is broken", why:"Browsers don’t discard a broken element; they repair it. The repair here makes more text bold, not less."},
      {t:"The page shows the tags as text", why:"Tags are only shown as text when written with references like `&lt;`. These are real tags, just badly nested."}
    ]},
    {id:"t2u2-l1-x4", type:"sort", q:"Sort these elements: which are void (no content, no closing tag) and which need a closing tag?", buckets:["Void: no closing tag","Has content and a closing tag"], items:[
      {t:"`<br>`", b:0, why:"A line break holds nothing; it just marks a point in the text."},
      {t:"`<img>`", b:0, why:"An image’s information is all in attributes (`src`, `alt`), so there’s no content to wrap."},
      {t:"`<input>`", b:0, why:"A form field is described by attributes such as `type` and `name`; its label is a separate element."},
      {t:"`<meta>`", b:0, why:"A piece of page information given entirely in attributes, such as `charset=\"utf-8\"`."},
      {t:"`<p>`", b:1, why:"A paragraph wraps text, so it has content and a closing tag."},
      {t:"`<a>`", b:1, why:"A link wraps its link text: `<a href=\"…\">Our menu</a>`."},
      {t:"`<strong>`", b:1, why:"It wraps the words that are important."},
      {t:"`<title>`", b:1, why:"It wraps the page title text: `<title>Menu</title>`."}
    ]},
    {id:"t2u2-l1-x5", type:"number", q:"How many **elements** are in this snippet?\n`<p>Open <strong>daily</strong> from <time>8:00</time><br>until late.</p>`", answer:4, tol:0, unit:"elements", why:"`<p>`, `<strong>`, `<time>` and `<br>`: four elements. The paragraph contains the other three. `<br>` is a void element: one tag, but still a whole element.", wrongs:[
      {v:3, tol:0, why:"You probably skipped `<br>`. It has no closing tag, but it’s still an element (a void element)."},
      {v:7, tol:0, why:"That counts tags, not elements. Paired tags (opening and closing) make one element each: p, strong and time, plus the void br."},
      {v:1, tol:0, why:"The paragraph is the outer element, but the elements nested inside it count too."}
    ], hint2:"Count each opening tag once; closing tags don’t start new elements."},
    {id:"t2u2-l1-x6", type:"mcq", q:"Sione’s file says:\n`<p>Line one`\n(blank line)\n`Line two</p>`\nHe wants “Line two” on a new line inside the same paragraph. What should he do?", options:[
      {t:"Put `<br>` after “Line one”", ok:true, why:"`<br>` is the element for a line break that belongs to the content, as in an address or a poem. Line breaks in the file collapse to a space."},
      {t:"Add more blank lines in the file", why:"All whitespace in the file collapses to a single space, however much there is."},
      {t:"Type spaces until the text wraps", why:"Runs of spaces also collapse to one, and the wrap point would change on every screen size anyway."},
      {t:"Wrap the text in `<!-- -->`", why:"That’s a comment: the browser would hide both lines."}
    ]},
    {id:"t2u2-l1-x7", type:"match", q:"Hana is writing a page that explains HTML. Match what she wants the reader to see with what she should type.", pairs:[
      ["<","&lt;","`lt` stands for “less than”. Typing a bare `<` before a letter starts a tag."],
      ["&","&amp;","Every character reference starts with &, so the & itself needs a reference when it could be misread."],
      [">","&gt;","“Greater than”. Often optional in text, but it pairs neatly with `&lt;`."],
      ["\" inside a double-quoted attribute","&quot;","A plain \" would end the attribute value early."],
      ["é in “café”","é (just type it)","With UTF-8 declared, accented letters and other alphabets need no reference."]
    ]},
    {id:"t2u2-l1-x8", type:"spot", q:"Mei’s snippet has some mistakes. Tap every part that is wrong.", ask:"This is a mistake", mono:true, parts:[
      {t:"<p>", flag:false, why:"A correct opening tag."}, "Come to our ", {t:"<a href=\"quiz.html\">", flag:false, why:"A correct opening tag with a quoted attribute value."}, "quiz night", {t:"</a>", flag:false, why:"Closes the link correctly."}, " at the ", {t:"<em>library</p></em>", flag:true, why:"Overlapping tags: `<em>` was opened inside the paragraph, so it must close before `</p>`: `<em>library</em></p>`."}, "\n", {t:"<img src=\"quiz.png\" alt=Quiz night poster>", flag:true, why:"The alt value has spaces but no quotes, so it becomes `alt=\"Quiz\"` plus junk attributes. Write `alt=\"Quiz night poster\"`."}, "\n<p>Teams ", {t:"&amp;", flag:false, why:"The correct way to show an & in text."}, " snacks", {t:"<br>", flag:false, why:"A void element: it doesn’t need a closing tag."}, "Ages 5 ", {t:"<", flag:true, why:"This one happens to display, because a digit follows it, but a validator reports it as an error, and before a letter it would start a tag and damage the text. Write `&lt;` to show the symbol."}, "12 welcome</p>"
    ]}
   ],
   apply:{intro:"You can do all of this on a phone, in the Web Lab (tap **Labs** on the desk, then **Web Lab**). If you set up a code editor in Unit 1, you can use that too.", tasks:[
     {t:"Fix the nesting challenge", how:["Open the Web Lab challenge “Fix it: tangled tags” (use the practise button in this lesson).","Read each line and find where tags overlap or are never closed. Remember: last opened, first closed.","Fix them and press the check button until every line passes."]},
     {t:"Watch the browser’s rules in action", how:["In an empty Web Lab page (or a new file in your editor), type `<p>Open      Monday` then two blank lines, then `to Friday</p>`. Look at the preview: one line, single spaces.","Add `<br>` after “Monday” and look again.","Type `<p>Start with <p> then text</p>` and look at the preview. Then replace the inner `<p>` with `&lt;p&gt;` and compare.","Add a comment, `<!-- note to self -->`, and confirm it doesn’t appear.","Type `<p>Doors open at <strong>7 pm.</p><p>Bring a cushion.</p>` and see the bold spread. Fix it."], write:"Which result surprised you most?"},
     {t:"Optional, on a computer: see the repaired code", how:{
       win:["Save the snippets from the last task in a file called `test.html` (in Notepad, choose **Save as type: All files** so it doesn’t become test.html.txt). Double-click it to open it in your browser.","Press [[kbd:F12]] (or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]]) to open the developer tools and choose the **Elements** tab (Chrome, Edge) or **Inspector** (Firefox).","Find the paragraph with the bold mistake. The tools show the code the browser **built**, with its repairs, not the code you typed."],
       mac:["Save the snippets in `test.html`. In TextEdit, first choose **Format → Make Plain Text**; a code editor such as VS Code avoids this step. Double-click the file to open it in your browser.","In Chrome, Edge or Firefox press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]]. In Safari, first turn on **Settings → Advanced → Show features for web developers**, then press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]].","Find the paragraph with the bold mistake and compare the repaired code with what you typed."],
       chromeos:["Use the Web Lab, or an editor set up in Unit 1, to create `test.html` and open it in Chrome (from the Files app, double-click it).","Press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]] and choose **Elements**.","Find the paragraph with the bold mistake and compare the repaired code with what you typed."],
       phone:["Mobile browsers don’t include developer tools, so stay in the Web Lab: its preview shows the result of the browser’s repairs.","If you want to see repaired code on a phone, Lesson 5’s validator lists each mistake in words instead."]
     }}
   ], proof:"A corrected snippet with properly nested tags, quoted attributes and character references, plus a note of what the browser did with each mistake."},
   read:[
     {book:"mdn", where:"Structuring content with HTML → “Basic HTML syntax” (sections: Anatomy of an HTML element, Attributes, Whitespace in HTML, Character references, HTML comments)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u2-l2", title:"A whole page", minutes:45,
   hook:{q:"You delete the `<html>`, `<head>` and `<body>` tags from a working page, but keep everything between them. What happens when you open it?", options:["A blank white page","An error message from the browser","The page looks the same, because the browser adds those elements back","Only the title shows, in the middle of the page"], answer:2, reveal:"The page looks the same. The HTML standard lets you leave out those three pairs of tags, and the browser builds the html, head and body elements anyway. Other parts of the skeleton are not so forgiving: leave out the doctype, the character set or the viewport line and you’ll see real problems. This lesson goes through each line and what it protects you from."},
   goals:[
     "Write a complete HTML page from memory: doctype, html with lang, head, body",
     "Explain what the character set, viewport and title lines do, and what goes wrong without them",
     "Decide whether a piece of HTML belongs in the head or the body",
     "Connect a stylesheet and a script file to a page"
   ],
   learn:[
    {h:"The smallest complete page", body:[
      {lead:"Every web page, from a one-line note to a huge shop, starts from the same skeleton of about ten lines."},
      "Here it is. Read it once, then the sections below explain every line.",
      {code:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport"\n      content="width=device-width, initial-scale=1">\n    <title>Opening hours · Riverside Café</title>\n  </head>\n  <body>\n    <h1>Opening hours</h1>\n    <p>Monday to Saturday, 8 am to 4 pm.</p>\n  </body>\n</html>', lang:"html", label:"HTML · index.html", weblab:"wl-first-page"},
      {fig:'<svg viewBox="0 0 340 352"><text x="8" y="18" font-family="monospace">&lt;!doctype html&gt;</text><text class="s" x="332" y="18" text-anchor="end">first line</text><rect class="d-panel" x="8" y="30" width="324" height="314" rx="8" stroke-width="2"/><text x="18" y="50" font-family="monospace">&lt;html lang="en"&gt;</text><text class="s" x="322" y="50" text-anchor="end">the root</text><rect class="d-lup" x="20" y="62" width="300" height="130" rx="6" stroke-width="2"/><text x="30" y="82" font-family="monospace">&lt;head&gt;</text><text class="s" x="310" y="82" text-anchor="end">about the page,</text><text class="s" x="310" y="96" text-anchor="end">not shown in it</text><text x="34" y="118" font-family="monospace">&lt;meta charset="utf-8"&gt;</text><text x="34" y="140" font-family="monospace">&lt;meta name="viewport" …&gt;</text><text x="34" y="162" font-family="monospace">&lt;title&gt;…&lt;/title&gt;</text><text x="34" y="184" font-family="monospace">&lt;link rel="stylesheet" …&gt;</text><rect class="d-sage" x="20" y="204" width="300" height="128" rx="6" stroke-width="2"/><text x="30" y="224" font-family="monospace">&lt;body&gt;</text><text class="s" x="310" y="224" text-anchor="end">everything people</text><text class="s" x="310" y="238" text-anchor="end">see and use</text><text x="34" y="262" font-family="monospace">&lt;h1&gt;Opening hours&lt;/h1&gt;</text><text x="34" y="286" font-family="monospace">&lt;p&gt;Monday to …&lt;/p&gt;</text><text x="34" y="310" font-family="monospace">&lt;img src="…" alt="…"&gt;</text></svg>', alt:"Nested boxes. The doctype line sits on top, outside everything. A large box labelled <html lang=\"en\">, the root, contains two boxes. The first, in lupine, is <head>, about the page and not shown in it, holding meta charset, meta viewport, title and link stylesheet. The second, in sage, is <body>, everything people see and use, holding an h1, a p and an img.", cap:"The page as boxes: one root, containing the head (information about the page) and the body (the page itself)."},
      {tip:"Most code editors write this skeleton for you. In VS Code, type `!` in an empty .html file and press [[kbd:Tab]] or [[kbd:Enter]]. Still, type it by hand a few times so you know what each line does."}
    ]},
    {h:"The doctype", body:[
      "The first line, `<!doctype html>`, is the [[doctype]]. It isn’t an element; it’s an instruction that says “this is a modern HTML document”. It’s not case-sensitive (`<!DOCTYPE html>` is the same) and it must come first.",
      "Why keep a line that looks like it does nothing? Because without it, browsers switch to [[quirks-mode|quirks mode]], where they imitate the bugs of browsers from the late 1990s so that very old pages still look the way they did. Sizes, spacing and some CSS rules then behave differently from the standards you’ll learn in Unit 3. You can check: in the browser console, `document.compatMode` says `CSS1Compat` in standards mode and `BackCompat` in quirks mode.",
      {key:"One short line keeps your page in standards mode. Always start with `<!doctype html>`."}
    ]},
    {h:"The html element and the page’s language", body:[
      "`<html>` is the root: every other element is inside it. Its most important attribute is `lang`, the language of the page’s content, written as a language code:",
      {table:[
        ["Code","Language"],
        ["`en`","English"],
        ["`es`","Spanish"],
        ["`ja`","Japanese"],
        ["`pt-BR`","Portuguese as used in Brazil (language + region)"],
        ["`sw`","Swahili"]
      ]},
      "Lucía’s bakery page is in Spanish. If it says `lang=\"en\"`, a screen reader will try to read the Spanish words with English pronunciation, which can be hard to understand. With `lang=\"es\"`, it switches to a Spanish voice. The same setting helps browsers offer translation, choose correct hyphenation and quotation marks, and helps search engines show the page to the right readers.",
      "If one phrase is in a different language, mark just that phrase:",
      {code:'<p>Our motto: <span lang="fr">joie de vivre</span>.</p>', lang:"html"},
      "Setting the page language is part of the international accessibility guidelines, WCAG 2.2 (success criterion 3.1.1, “Language of Page”)."
    ]},
    {h:"Head and body", body:[
      "Inside `<html>` there are exactly two children. The [[head-element|head]] holds information **about** the page: its title, its character set, links to stylesheets and scripts. Nothing in the head appears in the page itself. The [[body-element|body]] holds everything people see and use: headings, text, images, links, forms.",
      {table:[
        ["Belongs in the head","Belongs in the body"],
        ["`<meta charset>` and other `<meta>`","Headings, paragraphs, lists"],
        ["`<title>`","Links and images"],
        ["`<link>` to stylesheets and icons","Tables and forms"],
        ["`<script>` (usually, with `defer`)","Landmarks such as `<header>` and `<main>`"]
      ]},
      "If you put visible content such as an `<h1>` in the head, the browser ends the head early and moves it into the body. It will show, but your structure is now different from what you wrote, which is the kind of surprise a validator catches."
    ]},
    {h:"Character set and viewport", body:[
      "`<meta charset=\"utf-8\">` tells the browser how the bytes in your file map to letters. UTF-8 is a character encoding that covers practically every writing system in use, plus symbols and emoji. If the browser guesses a different encoding, text gets garbled: “café” saved as UTF-8 but read as an old Western encoding shows as “cafÃ©”. Put the charset line first in the head, and save your files as UTF-8 (most editors do by default).",
      "The viewport line is for phones and tablets:",
      {code:'<meta name="viewport"\n  content="width=device-width, initial-scale=1">', lang:"html"},
      "Without it, mobile browsers assume the page was designed for a desktop. They lay it out as if the screen were about 980 pixels wide and then shrink the whole thing to fit, so text is tiny and people have to pinch and zoom. We tested this on an emulated phone 393 pixels wide: without the line, the page was laid out at 980 pixels; with it, at 393. `width=device-width` says “use the device’s real width”, and `initial-scale=1` says “start at normal zoom”.",
      {warn:"You may find code that adds `user-scalable=no` or `maximum-scale=1`. Don’t copy it: it stops people zooming in, which many people with low vision rely on. MDN’s viewport guide warns against it, and current iPhone Safari ignores it anyway."}
    ]},
    {h:"The title", body:[
      "The `<title>` is the page’s name. It appears on the browser tab, in bookmarks and history, as the headline in most search results, and it’s the first thing a screen reader announces when a page opens. It’s required: a page without one fails validation.",
      "A good title is short, specific and unique on your site. Put the specific part first, because tabs cut titles off:",
      {table:[
        ["Weak","Better"],
        ["Home","Riverside Café · Fresh bread in Hilltown"],
        ["Page 2","Opening hours · Riverside Café"],
        ["Untitled document","Quiz night, 14 March · Hilltop Library"]
      ]},
      "Giving each page a title that describes its topic or purpose is WCAG 2.2 success criterion 2.4.2, “Page Titled”. The title is different from the `<h1>`: the title names the page from the outside (tab, search results), the `<h1>` is the main heading inside it. They’re often similar, and that’s fine."
    ]},
    {h:"Linking CSS and JavaScript: a preview", body:[
      "Styles and scripts usually live in their own files, connected from the head. You’ll write these files in Units 3 and 4; for now, recognise the two lines:",
      {code:'<link rel="stylesheet" href="style.css">\n<script src="app.js" defer><\/script>', lang:"html"},
      {list:[
        "`<link>` is a void element. `rel=\"stylesheet\"` says what kind of link it is; `href` is the path to the CSS file.",
        "`<script>` always needs its closing tag, even when it loads a file. `defer` tells the browser to run the script only after the whole page has been read, so the script can find every element. MDN calls this the most reliable choice for modern browsers.",
        "Paths work like links (Lesson 4): `style.css` means “a file called style.css in the same folder as this page”."
      ]},
      {tip:"A small icon for the browser tab (a favicon) is another `<link>`: `<link rel=\"icon\" href=\"icon.png\">`. Unit 5 comes back to it when you publish a site."}
    ]},
    {h:"What if a piece is missing?", body:[
      "Browsers are forgiving, but each line in the skeleton is there for a reason. Here is what really happens without each one:",
      {table:[
        ["Missing","What happens"],
        ["`<!doctype html>`","Quirks mode: old, inconsistent layout rules"],
        ["`<html>`, `<head>`, `<body>` tags","Nothing visible. The browser creates the elements anyway (but keep `<html>` for its `lang`)"],
        ["`lang`","Screen readers use the listener’s default voice, which mispronounces the words if the page is in another language"],
        ["`<meta charset>`","The browser guesses the encoding; accents and symbols may turn into junk"],
        ["Viewport `<meta>`","On phones the page is laid out for a desktop and shrunk: tiny text"],
        ["`<title>`","The tab shows the file name or address; search results and bookmarks have no useful name; validation fails"]
      ]},
      {key:"Missing pieces rarely break a page outright. They make it worse for some people, on some devices, in ways you won’t notice on your own screen."}
    ]}
   ],
   try:[
    {id:"t2u2-l2-x1", type:"order", q:"Put the lines of a minimal page in the order they appear in the file.", items:[
      {t:"`<!doctype html>`", why:"The doctype always comes first, before any element."},
      {t:"`<html lang=\"en\">`", why:"The root element opens next and wraps everything else."},
      {t:"`<head>`", why:"The head is the first child of html."},
      {t:"`<meta charset=\"utf-8\">`", why:"The character set goes first in the head, so the browser knows the encoding before it reads any text."},
      {t:"`<title>Opening hours</title>`", why:"The title is inside the head, after the charset."},
      {t:"`</head>`", why:"The head closes before the body opens."},
      {t:"`<body>`", why:"The body comes second and holds the visible content."},
      {t:"`</html>`", why:"After `</body>`, the root closes last."}
    ]},
    {id:"t2u2-l2-x2", type:"sort", q:"Oluwaseun is building a page for a community garden. Head or body?", buckets:["In the head","In the body"], items:[
      {t:"`<meta charset=\"utf-8\">`", b:0, why:"Information about how to read the file, not content."},
      {t:"`<title>Hilltown Community Garden</title>`", b:0, why:"The title names the page for tabs and search results; it isn’t shown inside the page."},
      {t:"`<link rel=\"stylesheet\" href=\"garden.css\">`", b:0, why:"Connecting a stylesheet is information about the page."},
      {t:"The viewport `<meta>` line", b:0, why:"An instruction to mobile browsers, so it belongs with the other metadata."},
      {t:"`<h1>Hilltown Community Garden</h1>`", b:1, why:"The main heading is visible content."},
      {t:"A photo of the vegetable beds", b:1, why:"Images people see go in the body."},
      {t:"A list of volunteer days", b:1, why:"Lists are content."}
    ]},
    {id:"t2u2-l2-x3", type:"mcq", q:"Tomás opens his new page on his phone. The layout is correct but the text is tiny, and he has to pinch to read it. On his laptop it looks fine. What’s the most likely cause?", options:[
      {t:"The viewport meta line is missing", ok:true, why:"Without it, mobile browsers lay the page out at about 980 pixels wide and shrink it to fit the screen. Adding `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` fixes it."},
      {t:"The doctype is missing", why:"A missing doctype causes quirks mode on every device, not only phones, and it doesn’t usually shrink the whole page."},
      {t:"The character set is wrong", why:"A wrong encoding garbles accents and symbols; it doesn’t change text size."},
      {t:"The title is too long", why:"The title only affects the tab, bookmarks and search results, not the size of the page content."}
    ]},
    {id:"t2u2-l2-x4", type:"mcq", q:"Priya’s page should say “Crème brûlée, 4.50”, but a visitor sees “CrÃ¨me brÃ»lÃ©e, 4.50”. What should she check first?", options:[
      {t:"That the head starts with `<meta charset=\"utf-8\">` and the file is saved as UTF-8", ok:true, why:"Those odd pairs of letters are classic signs of UTF-8 bytes being read with another encoding. Declaring UTF-8 (and saving in it) makes the browser read them correctly."},
      {t:"That every accented letter is written as a character reference", why:"That would work around it, but it’s unnecessary: with UTF-8 declared you can type accents directly."},
      {t:"That the `lang` attribute says `fr`", why:"`lang` tells software which language the words are in; it doesn’t control how bytes become letters."},
      {t:"That the viewport line is present", why:"The viewport affects layout width on phones, not how characters are decoded."}
    ]},
    {id:"t2u2-l2-x5", type:"mcq", q:"Lucía’s bakery site is written entirely in Spanish, but her editor generated `<html lang=\"en\">`. Who is most affected?", options:[
      {t:"People using screen readers, who will hear the Spanish read with English pronunciation", ok:true, why:"Screen readers choose a voice from `lang`. The wrong code makes the text hard to understand. It can also confuse translation offers and search engines. The fix is `lang=\"es\"`."},
      {t:"No one: `lang` is only for search engines", why:"Search engines use it, but its most direct effect is on speech: screen readers pick their pronunciation from it."},
      {t:"Visitors on phones, whose screens will show English letters", why:"`lang` doesn’t change which characters are shown; the encoding does that."},
      {t:"Visitors outside Spain, who will be blocked from the page", why:"`lang` never blocks anyone. It describes the content’s language."}
    ]},
    {id:"t2u2-l2-x6", type:"match", q:"Match each missing piece with what actually happens.", pairs:[
      ["No `<!doctype html>`","The browser switches to quirks mode","Browsers use the doctype to choose between standards mode and quirks mode."],
      ["No `<title>`","The tab shows the file name or address","There’s no page name, so the browser falls back to the address. Validation fails too."],
      ["No `<body>` tags","Nothing visible changes","The browser creates the body element itself; the tags are optional."],
      ["No viewport `<meta>`","Phones show a shrunken desktop layout","Mobile browsers assume a wide desktop page and zoom out."],
      ["No `<meta charset>`","Accents may turn into junk characters","The browser has to guess the encoding, and can guess wrong."]
    ]},
    {id:"t2u2-l2-x7", type:"spot", q:"Fatima wrote this head for her library’s event page. Tap every line that is a mistake.", ask:"is a mistake", mono:true, parts:[
      {t:"<!doctype html>", flag:false, why:"The correct modern doctype, on the first line."}, "\n", {t:"<html lang=\"english\">", flag:true, why:"`lang` needs a language code, such as `en`, not the language’s name."}, "\n<head>\n  ", {t:"<meta charset=\"utf-8\">", flag:false, why:"Correct, and in the right place: first in the head."}, "\n  ", {t:"<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">", flag:true, why:"`user-scalable=no` stops people zooming in. Use `width=device-width, initial-scale=1` instead."}, "\n  ", {t:"<title>Quiz night · Hilltop Library</title>", flag:false, why:"A specific, descriptive title with the most specific part first."}, "\n  ", {t:"<h1>Quiz night</h1>", flag:true, why:"A heading is visible content and belongs in the body. The browser would end the head here and move it."}, "\n  ", {t:"<script src=\"quiz.js\" defer><\/script>", flag:false, why:"Correct: a script in the head with `defer` and its closing tag."}, "\n</head>"
    ]}
   ],
   apply:{intro:"Build a real page from the skeleton. The Web Lab works on any device; a computer with a code editor is optional.", tasks:[
     {t:"Type the skeleton from memory", how:["Open the Web Lab challenge “Your first page” (the **Try in Web Lab** button under the skeleton at the top of this lesson), or a new file called `index.html` in your editor.","Without copying, type the doctype, `<html lang=\"…\">` with your own language code, the head with charset, viewport and title, and an empty body.","Inside the body add an `<h1>` and a `<p>`. In the Web Lab challenge, its checker expects the heading **Green Corner Garden** and a paragraph of at least five words. In your own editor, write about something real: a club, a recipe, a small business, a hobby.","Compare with the skeleton in this lesson and fix anything missing."]},
     {t:"Break it on purpose", how:["If you’re using a file on a computer, remove the title and reload the page in a browser tab. What does the tab show instead? Put the title back. (The Web Lab shows your page inside the lesson app, so there’s no tab to look at; skip this step there.)","Type a word with an accent or another alphabet, such as `café`, `ñandú` or `日本`, and check it shows correctly. Then remove the charset line and save; in many setups it still works, because the editor saved UTF-8 and the browser guessed right. That’s luck, not design.","In a browser on a computer, press [[kbd:F12]] (or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]] on a Mac), open the **Console**, type `document.compatMode` and press [[kbd:Enter]]. Then delete the doctype, reload and try again."], write:"What did `document.compatMode` say with and without the doctype?"},
     {t:"Optional: see the viewport difference on your phone", how:{
       phone:["If you can publish or open a test page on your phone (Unit 5 shows how to publish), make two versions: one with the viewport line and one without.","Open both. On iPhone (Safari) and Android (Chrome or Samsung Internet) alike, the version without the line appears zoomed out with tiny text."],
       win:["In Chrome or Edge, open your page, press [[kbd:F12]], then press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] to turn on the device toolbar (phone view).","Choose a phone from the list at the top and reload. Compare the page with and without the viewport line."],
       mac:["In Chrome or Edge, press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]], then [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] for the device toolbar. In Safari, use **Develop → Enter Responsive Design Mode** (turn on the Develop menu first in **Settings → Advanced**).","Choose a phone size and reload. Compare the page with and without the viewport line."],
       chromeos:["In Chrome, press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]], then [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] for the device toolbar.","Choose a phone size and reload. Compare the page with and without the viewport line."]
     }}
   ], proof:"A complete page you typed yourself, with doctype, language, charset, viewport, a specific title and some content, plus a note of what changed when you removed each piece."},
   read:[
     {book:"mdn", where:"Structuring content with HTML → “Basic HTML syntax”, section “Anatomy of an HTML document”"},
     {book:"mdn", where:"Structuring content with HTML → “What’s in the head? Web page metadata” (listed in the module menu as “Web page metadata”)", note:"MDN’s page doesn’t cover the viewport line; this lesson does."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u2-l3", title:"Text that means something", minutes:50,
   hook:{q:"Kenji makes a line of text large and bold so it looks exactly like a heading, but it’s inside a `<p>`. A screen reader user asks for a list of the page’s headings. Is Kenji’s line in it?", options:["Yes: large bold text counts as a heading","Yes, if it’s on a line of its own","No: only real heading elements (`<h1>` to `<h6>`) are headings","Only if it ends without a full stop"], answer:2, reveal:"No. Software can’t see what text looks like; it reads the elements. Kenji’s line is a paragraph, so it’s missing from the headings list and nobody can jump to it. This lesson is about choosing elements for what text **is**: headings, paragraphs, lists, emphasis and quotations."},
   goals:[
     "Build a heading outline with one `<h1>` and no skipped levels",
     "Choose between `<p>` and `<br>`, and between `<ul>`, `<ol>` and nested lists",
     "Use `<em>` and `<strong>` for meaning, and know when `<i>` and `<b>` still fit",
     "Explain how structure helps screen reader users, search engines and anyone skimming"
   ],
   learn:[
    {h:"Meaning first, looks later", body:[
      {lead:"HTML elements carry meaning. Browsers give them default looks, but the meaning is the point."},
      "An `<h2>` looks big and bold because that’s the browser’s default style for headings. You can make it look like anything with CSS later. What CSS can’t do is turn a paragraph into a heading. Elements that describe what content **is** are called [[semantic-element|semantic elements]] (from the Greek for “meaning”).",
      "Meaning is what other software works from. A screen reader announces “heading level 2, Ingredients” and lets people jump between headings. Search engines treat heading text as a strong clue about the page’s topic. Reader modes, translation tools, voice assistants and your own CSS all rely on the same structure.",
      {key:"Choose the element that says what the content is. Never choose an element for how it looks by default."}
    ]},
    {h:"Headings: one outline for the whole page", body:[
      "HTML has six [[heading-element|heading elements]], `<h1>` to `<h6>`. Together they form the page’s outline, like the table of contents of a book chapter:",
      {list:[
        "`<h1>` is the main heading: what the whole page is about. MDN recommends **one** per page.",
        "`<h2>` headings divide the page into its main sections.",
        "`<h3>` headings divide an `<h2>` section, and so on down. Most pages never need `<h5>` or `<h6>`."
      ]},
      {code:'<h1>Lemon drizzle cake</h1>\n<h2>Ingredients</h2>\n<h2>Method</h2>\n<h3>Making the syrup</h3>\n<h3>Glazing the cake</h3>\n<h2>Storing</h2>', lang:"html", weblab:"wl-headings"},
      {fig:'<svg viewBox="0 0 340 290"><text x="8" y="18">A screen reader’s list of headings</text><rect class="d-gold" x="8" y="30" width="324" height="26" rx="5" stroke-width="2"/><text x="16" y="48" font-family="monospace">h1</text><text x="48" y="48">Lemon drizzle cake</text><rect class="d-lup" x="28" y="62" width="304" height="26" rx="5" stroke-width="1.5"/><text x="36" y="80" font-family="monospace">h2</text><text x="68" y="80">Ingredients</text><rect class="d-lup" x="28" y="94" width="304" height="26" rx="5" stroke-width="1.5"/><text x="36" y="112" font-family="monospace">h2</text><text x="68" y="112">Method</text><rect class="d-sage" x="48" y="126" width="284" height="26" rx="5" stroke-width="1.5"/><text x="56" y="144" font-family="monospace">h3</text><text x="88" y="144">Making the syrup</text><rect class="d-sage" x="48" y="158" width="284" height="26" rx="5" stroke-width="1.5"/><text x="56" y="176" font-family="monospace">h3</text><text x="88" y="176">Glazing the cake</text><rect class="d-lup" x="28" y="190" width="304" height="26" rx="5" stroke-width="1.5"/><text x="36" y="208" font-family="monospace">h2</text><text x="68" y="208">Storing</text><rect class="d-rose" x="8" y="230" width="324" height="52" rx="6" stroke-width="1.5" stroke-dasharray="5 4"/><text x="18" y="251" font-family="monospace">&lt;p&gt;&lt;b&gt;Serving ideas&lt;/b&gt;&lt;/p&gt;</text><text class="s" x="18" y="272">Looks like a heading but isn’t in the list.</text></svg>', alt:"A list of headings as a screen reader can show it, indented like a table of contents: h1 Lemon drizzle cake; h2 Ingredients; h2 Method; under Method, h3 Making the syrup and h3 Glazing the cake; then h2 Storing. Below, in a dashed rose box, a paragraph with bold text, Serving ideas, which looks like a heading but isn’t in the list.", cap:"Heading levels build an outline. Bold paragraphs don’t take part."},
      {h:"Two rules of thumb"},
      {list:[
        "**Don’t skip levels going down.** After an `<h2>`, the next level down is `<h3>`, not `<h4>`. A skipped level makes a screen reader user wonder whether they missed a section. (Going back **up** any number of levels is fine: an `<h4>` can be followed by an `<h2>`.)",
        "**Pick the level by position in the outline, never by size.** If an `<h2>` looks too big, change its size with CSS; don’t swap it for an `<h4>`."
      ]},
      "A validator won’t report a skipped level as an error, and WCAG doesn’t count one as a failure on its own. These two rules are best-practice guidance from the W3C’s accessibility tutorials and MDN, and they are what makes an outline usable.",
      {lab:"wl-headings", t:"Practise: build a page with heading levels in order"}
    ]},
    {h:"Paragraphs, line breaks and breaks between topics", body:[
      "`<p>` is a paragraph: a block of text about one idea. Browsers add space between paragraphs by default.",
      "`<br>` is a line break **inside** a piece of text, where the break is part of the content: lines of an address, a poem, song lyrics.",
      {code:'<p>Riverside Café<br>\n  12 Mill Lane<br>\n  Hilltown</p>', lang:"html"},
      "Don’t use `<br><br>` to separate paragraphs, and don’t use empty `<p></p>` elements to make gaps. Both create fake structure: a screen reader may announce “blank”, and the gaps are hard to control with CSS. If you want more space, that’s CSS’s job (Unit 3).",
      "`<hr>` marks a **thematic break**: a change of topic within a section, like the row of stars between scenes in a novel. It draws a line by default, but use it for the meaning, not the line."
    ]},
    {h:"Lists", body:[
      "When content is a set of items, use a list. Screen readers announce “list, 5 items”, which tells people what’s coming and how long it is.",
      {table:[
        ["Element","Use it when","Example"],
        ["`<ul>`","Order doesn’t matter","Ingredients, opening days, features"],
        ["`<ol>`","Order matters","Steps in a recipe, directions, a top 10"],
        ["`<li>`","Each item, inside either","One ingredient, one step"]
      ]},
      {code:'<ol>\n  <li>Heat the oven to 180 °C.</li>\n  <li>Mix the dry ingredients.</li>\n  <li>Add the eggs and milk.\n    <ul>\n      <li>For a dairy-free cake, use oat milk.</li>\n    </ul>\n  </li>\n</ol>', lang:"html", weblab:"wl-ol"},
      "Look at where the nested `<ul>` sits: **inside** the third `<li>`, after its text. A list’s only children can be `<li>` elements, so a sub-list always goes inside the item it belongs to.",
      "Ordered lists accept a few useful attributes: `start=\"4\"` to begin counting at 4, and `reversed` to count down (a boolean attribute, as in Lesson 1).",
      {tip:"There’s a third kind, the description list, for terms and their descriptions (a glossary, a list of questions and answers): `<dl>` wraps the list, `<dt>` holds each term and `<dd>` its description."},
      {lab:"wl-list", t:"Practise: mark up an unordered list"},
      {lab:"wl-ol", t:"Practise: mark up steps that must happen in order"}
    ]},
    {h:"Emphasis and importance", body:[
      "Two elements change the meaning of words in a sentence:",
      {list:[
        "`<em>` is **stress emphasis**: the words you’d stress when speaking, which can change the meaning. “I said *Tuesday*” (not another day) versus “*I* said Tuesday” (not someone else).",
        "`<strong>` is **strong importance**: seriousness or urgency, for example `<strong>Contains nuts.</strong>` or `<strong>Do not unplug during the update.</strong>`"
      ]},
      "Browsers show `<em>` in italics and `<strong>` in bold, but MDN is clear: don’t use them just to get italics or bold. MDN also notes that screen readers can be set to speak them in a different tone. Many people’s screen readers don’t announce them at all, though, so never let emphasis be the **only** way a warning stands out: put the important words first, in plain sight.",
      {h:"What about `<i>` and `<b>`?"},
      "These began as “italic” and “bold”, and HTML5 gave them narrower meanings. Use them only when no better element fits:",
      {table:[
        ["Element","Today it means","Example"],
        ["`<i>`","Text in a different voice: a foreign phrase, a scientific name, a technical term, a thought","*Citrus limon*; *joie de vivre*"],
        ["`<b>`","Drawing attention without extra importance: keywords, product names in a review","The **Lunch** menu starts at 12."],
        ["`<u>`","A mark shown by underlining, such as a misspelling","Use rarely: readers may mistake underlining for a link"]
      ]},
      "For a foreign phrase, add `lang` too: `<i lang=\"fr\">joie de vivre</i>`, so a screen reader pronounces it correctly. And if you only want italics for decoration, use CSS."
    ]},
    {h:"Quotations and other meanings", body:[
      "A few more text elements you’ll meet often:",
      {table:[
        ["Element","Meaning"],
        ["`<blockquote>`","A long quotation, as its own block. The `cite` attribute can hold the source’s address, but browsers don’t display it"],
        ["`<q>`","A short quotation inside a sentence; browsers add the quotation marks"],
        ["`<cite>`","The title of a work: a book, film, article or song"],
        ["`<abbr>`","An abbreviation. Spell it out in the text the first time it appears"],
        ["`<time>`","A date or time, with a machine-readable version in `datetime`"]
      ]},
      {code:'<blockquote>\n  <p>The best cake I’ve had all year.</p>\n</blockquote>\n<p>From <cite>Hilltown Weekly</cite>, on\n  <time datetime="2026-03-14">14 March</time>.</p>', lang:"html"},
      "`<time datetime=\"2026-03-14\">` lets software such as calendars and search engines read the date without guessing whether “03/04” means March or April."
    ]},
    {h:"Why structure matters", body:[
      "Picture Amara, who is blind and uses a screen reader, arriving at a long recipe page. She doesn’t listen from the top. She asks for the list of headings, hears “Ingredients, Method, Storing”, and jumps straight to Method. Then she moves through the numbered steps one item at a time. Every one of those moves depends on real `<h2>`, `<ol>` and `<li>` elements.",
      "The international accessibility guidelines put it formally. WCAG 2.2 success criterion 1.3.1, “Info and Relationships”, says structure that people can see (headings, lists, tables) must also be available in the code, so software can pass it on.",
      "Structure helps everyone else too:",
      {list:[
        "**Skimmers.** Many readers scan headings before deciding to read; clear headings help them find their part.",
        "**Search engines** use headings to understand what each part of a page is about.",
        "**Reader view and translation** keep the structure when they rebuild the page.",
        "**You.** CSS and JavaScript are far easier to write for well-structured HTML."
      ]},
      "You’ve seen the same idea in documents: in Digital Foundations Unit 8, {{styles-headings|heading styles}} in a word processor do this job for documents."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Headings are just big text.”** Size is a default style. The meaning is what screen readers and search engines use.",
        "**“I can pick heading levels by how big I want the text.”** Levels follow the outline. Size comes from CSS.",
        "**“`<b>` and `<i>` are banned.”** They have specific modern meanings. They’re fine when that meaning fits; `<strong>` and `<em>` are right more often.",
        "**“`<br>` is a quick way to make paragraphs.”** It makes one paragraph with line breaks. Use separate `<p>` elements.",
        "**“Any list can be a `<ul>`.”** If the order matters (steps, rankings), use `<ol>`, so the numbers are announced and stay correct when items move."
      ]}
    ]}
   ],
   try:[
    {id:"t2u2-l3-x1", type:"mcq", q:"Ana’s page has an `<h1>` (the club’s name) and an `<h2>` called “Events”. She wants a subheading “Summer picnic” inside the Events section. Which element?", options:[
      {t:"`<h3>`", ok:true, why:"A subsection of an `<h2>` section is one level down: `<h3>`. Its size can be adjusted later with CSS."},
      {t:"`<h2>`", why:"That would make “Summer picnic” a main section of the page, alongside Events, rather than part of it."},
      {t:"`<h5>`, because it’s a small heading", why:"Levels follow the outline, not size. Jumping from h2 to h5 skips levels."},
      {t:"`<p><strong>Summer picnic</strong></p>`", why:"It may look like a heading, but it isn’t one, so it won’t appear in a screen reader’s headings list."}
    ]},
    {id:"t2u2-l3-x2", type:"number", q:"How many items would a screen reader’s headings list show for this page?\n`<h1>Hilltown Garden</h1>`\n`<p><b>Latest news</b></p>`\n`<h2>Volunteer days</h2>`\n`<h3>Spring</h3>`\n`<p>Big, bold text styled with CSS</p>`\n`<h2>Allotment plots</h2>`", answer:4, tol:0, unit:"headings", why:"Only heading elements count: the `<h1>`, two `<h2>`s and one `<h3>`, so **4**. The bold paragraph and the styled paragraph are paragraphs, however they look.", wrongs:[
      {v:6, tol:0, why:"That counts every line. The two `<p>` lines aren’t headings, however they look."},
      {v:5, tol:0, why:"One of the paragraphs has slipped in. Bold or big text in a `<p>` is still a paragraph."},
      {v:3, tol:0, why:"You may have left out the `<h3>`. Every level, from `<h1>` to `<h6>`, appears in the list."}
    ]},
    {id:"t2u2-l3-x3", type:"spot", q:"Dmitri’s page outline is below. Tap each heading that breaks the guidance in this lesson.", ask:"breaks the guidance", mono:true, parts:[
      {t:"<h1>Dmitri’s Bike Repairs</h1>", flag:false, why:"One main heading for the page: good."}, "\n", {t:"<h2>Services</h2>", flag:false, why:"A main section, one level below the h1."}, "\n", {t:"<h4>Puncture repair</h4>", flag:true, why:"This skips from h2 to h4. A subsection of Services should be h3."}, "\n", {t:"<h2>Prices</h2>", flag:false, why:"Back up to a new main section: going up levels is fine."}, "\n", {t:"<h2>Find us</h2>", flag:false, why:"Another main section."}, "\n", {t:"<h6>© 2026 Dmitri’s Bike Repairs</h6>", flag:true, why:"A copyright line isn’t a heading. h6 was chosen for its small size. Use a paragraph (in the footer, Lesson 5) and CSS for size."}
    ]},
    {id:"t2u2-l3-x4", type:"sort", q:"Hana is marking up a recipe site. For each list, `<ul>` or `<ol>`?", buckets:["`<ul>`: order doesn’t matter","`<ol>`: order matters"], items:[
      {t:"Ingredients for a lentil soup", b:0, why:"You can gather ingredients in any order; the list is a set."},
      {t:"The steps to make the soup", b:1, why:"Steps happen in sequence, so the numbers carry meaning."},
      {t:"Allergens in the dish", b:0, why:"A set of facts with no sequence."},
      {t:"The five most popular recipes this month, most popular first", b:1, why:"A ranking: position 1 means something different from position 5."},
      {t:"Directions from the bus stop to a cooking class", b:1, why:"Directions only work in order."},
      {t:"Kitchen tools you’ll need", b:0, why:"Another set where order doesn’t matter."}
    ]},
    {id:"t2u2-l3-x5", type:"mcq", q:"Kenji wants “Add the eggs” to have two sub-points. Which markup is correct?", options:[
      {t:"`<ol><li>Add the eggs<ul><li>One at a time</li><li>Beat well</li></ul></li></ol>`", ok:true, why:"The sub-list sits inside the `<li>` it belongs to. A list’s only children are `<li>` elements, so this is the only valid place for it."},
      {t:"`<ol><li>Add the eggs</li><ul><li>One at a time</li><li>Beat well</li></ul></ol>`", why:"Here the `<ul>` is a direct child of the `<ol>`, which isn’t allowed. A validator reports it, and screen readers may announce the list oddly."},
      {t:"`<ol><li>Add the eggs<br>- One at a time<br>- Beat well</li></ol>`", why:"Dashes and line breaks only look like a list. Software sees one item of text, not two sub-points."},
      {t:"`<ol><li>Add the eggs</li><li>  One at a time</li><li>  Beat well</li></ol>`", why:"Extra spaces collapse, so these become ordinary steps 2 and 3, not sub-points of step 1."}
    ]},
    {id:"t2u2-l3-x6", type:"mcq", q:"Amara is writing a notice for her community hall: “Fire doors must be kept closed.” Which markup fits the meaning best?", options:[
      {t:"`<p><strong>Fire doors must be kept closed.</strong></p>`", ok:true, why:"This is a matter of seriousness and safety, which is exactly what `<strong>` means: strong importance."},
      {t:"`<p><em>Fire doors must be kept closed.</em></p>`", why:"`<em>` is stress emphasis, the way you’d stress a word to change a sentence’s meaning. Importance is `<strong>`."},
      {t:"`<p><b>Fire doors must be kept closed.</b></p>`", why:"`<b>` draws attention **without** adding importance. This sentence is genuinely important, so `<strong>` fits."},
      {t:"`<h1>Fire doors must be kept closed.</h1>`", why:"A heading names a section; it isn’t a way to make a sentence stand out. The page probably already has its own `<h1>`."}
    ]},
    {id:"t2u2-l3-x7", type:"match", q:"Match each piece of text on a library’s page with the element that fits its meaning.", pairs:[
      ["The scientific name *Quercus robur* in a nature article","<i lang=\"la\">","A different voice (a Latin name), with `lang` so it’s pronounced correctly."],
      ["A two-line quote from a reader, shown as its own block","<blockquote>","Block quotations get their own element, usually indented by the browser."],
      ["The title of a novel being reviewed","<cite>","`<cite>` is for the title of a creative work."],
      ["The opening date, 2026-09-01, for calendar tools","<time datetime>","`datetime` gives software an unambiguous date."],
      ["“WCAG” the second time it appears","<abbr>","An abbreviation; spell it out in full in the text the first time."]
    ]},
    {id:"t2u2-l3-x8", type:"mcq", q:"Sione’s club page uses bold paragraphs instead of headings and lines starting with “•” instead of lists. A member who uses a screen reader says the page is “one long block”. What’s the root cause?", options:[
      {t:"The structure is only visual, so the screen reader can’t offer headings or lists to jump through", ok:true, why:"Screen readers navigate by elements. Without `<h2>`s and `<ul>`s, there’s nothing to jump to, and the page is read as continuous paragraphs. WCAG 1.3.1 asks for visible structure to exist in the code."},
      {t:"The member’s screen reader is out of date", why:"No screen reader can find headings that aren’t marked up. The fix is in the HTML."},
      {t:"The text is too long, so it should be shortened", why:"Length isn’t the problem; long pages are easy to navigate when headings and lists are real elements."},
      {t:"The bold text should be made bigger", why:"Size and weight are invisible to a screen reader. Only the element type changes what it can do."}
    ]}
   ],
   apply:{intro:"Mark up some real text by meaning. A recipe, a club newsletter, a set of house rules or instructions for a hobby all work well. Everything here works in the Web Lab on a phone.", tasks:[
     {t:"Three quick Web Lab challenges", how:["Open the Web Lab challenge “Heading levels” and complete it.","Then do “A bulleted list” and “Numbered steps” (use the practise buttons in this lesson)."]},
     {t:"Mark up a real text by meaning", how:["Choose a text of about 200 words that you know well, such as a family recipe or the rules for a game.","Inside the body of your page from Lesson 2, mark it up: one `<h1>`, `<h2>`s for sections, `<p>` for paragraphs, `<ul>` or `<ol>` for lists, and `<strong>` or `<em>` only where the meaning calls for it.","Check your outline: read **only** your headings, top to bottom. Do they work as a table of contents? Is any level skipped?","Look for any `<br><br>` or empty `<p>` you used for spacing and replace them with real paragraphs."], write:"Paste your heading outline here."},
     {t:"Optional: hear your structure", how:{
       phone:["Both phones have a built-in screen reader: **VoiceOver** on iPhone (Settings → Accessibility → VoiceOver) and **TalkBack** on Android (Settings → Accessibility → TalkBack; on some phones it’s under **Installed apps** or **Installed services**).","Turning one on changes how touch works. Read its built-in tutorial first and learn how to turn it off before you start (on iPhone, you can set **Accessibility Shortcut** to triple-click the side button).","Both let you move from heading to heading: VoiceOver through its rotor, TalkBack through its reading controls. Try it on a long article on a news or encyclopedia site."],
       win:["Windows includes **Narrator**: press [[kbd:Win]] + [[kbd:Ctrl]] + [[kbd:Enter]] to turn it on and off.","Open a long article, then press [[kbd:H]] to jump between headings. This works in Narrator’s scan mode, which usually turns on by itself in a browser; if it doesn’t, press [[kbd:Caps Lock]] + [[kbd:Space]]."],
       mac:["macOS includes **VoiceOver**: press [[kbd:Cmd]] + [[kbd:F5]] to turn it on and off (on some keyboards, hold [[kbd:Fn]] too).","Open a long article in Safari and use the VoiceOver rotor ([[kbd:Control]] + [[kbd:Option]] + [[kbd:U]]) to see the list of headings."],
       chromeos:["ChromeOS includes **ChromeVox**: press [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:Z]] to turn it on and off.","Open a long article and press [[kbd:Search]] + [[kbd:H]] to jump to the next heading (ChromeVox’s built-in tutorial lists more keys)."]
     }}
   ], proof:"A short page marked up by meaning, with a heading outline that reads like a table of contents and lists of the right kind."},
   read:[
     {book:"mdn", where:"Structuring content with HTML → “Headings and paragraphs”, “Emphasis and importance” and “Lists”"},
     {book:"mdn", where:"Structuring content with HTML → “Advanced text features” (quotations, abbreviations, times and dates)", note:"Then try MDN’s short test, “Test: HTML text basics”."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u2-l4", title:"Links and images", minutes:55,
   hook:{q:"A page has five links that all say “click here”. Screen readers can list every link on a page so people can pick one. What does that list sound like?", options:["Each link’s destination is read out instead of its text","“Click here, click here, click here, click here, click here”","The screen reader skips links with vague text","It reads the sentence around each link"], answer:1, reveal:"It sounds like “click here” five times, with no way to tell them apart. A links list gives each link’s own text, out of context, and sighted people skim links the same way. This lesson shows how to write link text that makes sense alone, how to point links anywhere, and how to add images that everyone can understand."},
   goals:[
     "Write links with absolute, relative, fragment, `mailto:` and `tel:` addresses",
     "Write link text that makes sense out of context, and decide carefully about new tabs",
     "Add images with useful alt text, or an empty alt for decoration, plus width, height and captions",
     "Choose an image format and use only images you have the right to use"
   ],
   learn:[
    {h:"Anatomy of a link", body:[
      {lead:"Links are what make the web a web. One element does it: `<a>`."},
      "The [[anchor]] element, `<a>`, turns its content into a link. The [[href]] attribute (“hypertext reference”) says where the link goes:",
      {code:'<p>See our <a href="menu.html">full menu</a>\n  before you visit.</p>', lang:"html", weblab:"wl-link"},
      "Only “full menu” is clickable. The words inside `<a>` are the **link text**, the part people see, tap and hear read aloud. Without `href`, an `<a>` isn’t a link at all, just a placeholder.",
      "You can also put an image or a whole block inside a link (for example, a card with a heading and a picture). Everything inside becomes one clickable area, and its text becomes the link text."
    ]},
    {h:"Where a link can point", body:[
      "The value of `href` is an address. There are several kinds:",
      {list:[
        "`https://example.org/menu.html`: an **absolute URL**, the full address, on any site",
        "`menu.html`: a file in the same folder as this page",
        "`events/quiz.html`: a file inside the `events` folder",
        "`../index.html`: up one folder, then `index.html`",
        "`/about.html`: from the top (root) of this site",
        "`#opening-hours`: the element with `id=\"opening-hours\"` on this page",
        "`mailto:hello@example.org`: a new email to that address",
        "`tel:+442079460123`: offers to call that number"
      ]},
      "Addresses without `https://` are **relative**: they’re worked out from where the current page is, like directions from where you’re standing. Use relative links between pages of your own site, so the site keeps working if it moves to a new address. Unit 1’s {{file-paths-urls}} explains paths in full.",
      {fig:'<svg viewBox="0 0 340 340"><text x="8" y="18">One site folder, two starting points</text><text x="12" y="46" font-family="monospace">cafe-site/</text><path class="d-soft" d="M20,52 L20,172 M20,66 L34,66 M20,90 L34,90 M20,114 L34,114 M20,162 L34,162 M48,120 L48,140 M48,140 L62,140 M48,168 L48,188 M48,188 L62,188" stroke-width="1.5"/><rect class="d-gold" x="36" y="54" width="104" height="22" rx="4" stroke-width="1.5"/><text x="42" y="70" font-family="monospace">index.html</text><text x="42" y="94" font-family="monospace">menu.html</text><text x="42" y="118" font-family="monospace">images/</text><text x="68" y="144" font-family="monospace">lemon-cake.jpg</text><text x="42" y="166" font-family="monospace">events/</text><rect class="d-lup" x="64" y="176" width="92" height="22" rx="4" stroke-width="1.5"/><text x="70" y="192" font-family="monospace">quiz.html</text><rect class="d-gold" x="8" y="214" width="324" height="56" rx="6" stroke-width="1.5"/><text x="18" y="232">From index.html:</text><text x="18" y="256" font-family="monospace">menu.html · images/lemon-cake.jpg</text><rect class="d-lup" x="8" y="280" width="324" height="56" rx="6" stroke-width="1.5"/><text x="18" y="298">From events/quiz.html (one level down):</text><text x="18" y="322" font-family="monospace">../index.html · ../images/lemon-cake.jpg</text></svg>', alt:"A folder tree: cafe-site contains index.html, menu.html, an images folder holding lemon-cake.jpg, and an events folder holding quiz.html. index.html is highlighted in gold, quiz.html in lupine. From index.html, the paths are menu.html and images/lemon-cake.jpg. From events/quiz.html, one level down, they are ../index.html and ../images/lemon-cake.jpg.", cap:"The same files need different relative paths depending on where the linking page is. `..` means “up one folder”."},
      {h:"Jumping within a page"},
      "Any element with an `id` can be a link target. That’s how “Skip to opening hours” or a table of contents at the top of a long page works:",
      {code:'<a href="#hours">Opening hours</a>\n…\n<h2 id="hours">Opening hours</h2>', lang:"html"},
      "The part after `#` is a [[url-fragment|fragment]]. It works from other pages too: `about.html#hours`. Each `id` must be unique on its page.",
      {h:"Email and phone links"},
      "`mailto:` opens the visitor’s email app with the address filled in; `tel:` lets phones offer to call. Write phone numbers in international format, with `+` and the country code and no spaces, so they work from anywhere. Show a readable version as the link text: `<a href=\"tel:+442079460123\">+44 20 7946 0123</a>`.",
      {warn:"An email address in a `mailto:` link is visible in the page’s code, and automated tools collect addresses from web pages for spam. Many sites use a contact form or a shared address instead of a personal one."},
      {lab:"wl-link", t:"Practise: add a link with clear link text"}
    ]},
    {h:"Link text that makes sense on its own", body:[
      "People rarely read every word. Sighted visitors scan for links; screen reader users often call up a list of all the links on the page. Either way, each link is met **out of context**. MDN’s rule: the content inside a link should say where it goes, even out of context.",
      {list:[
        "**Weak:** “To see our menu, click here.” **Better:** “See our full menu.”",
        "**Weak:** “Read more” **Better:** “Read more about the spring quiz”",
        "**Weak:** a bare address such as example.org/rules-v3.pdf **Better:** “Club rules (PDF, 200 KB)”",
        "**Weak:** “Link to our opening hours” **Better:** “Opening hours”"
      ]},
      {list:[
        "Put the meaning in the link words themselves, not in the sentence around them.",
        "Don’t write “link” or “link to”: screen readers already announce “link”.",
        "Avoid bare addresses as link text: a screen reader may read them out character by character.",
        "Say when a link opens a file rather than a page, and give its type and size: “(PDF, 2 MB)”."
      ]},
      "WCAG 2.2 success criterion 2.4.4, “Link Purpose (In Context)”, asks that a link’s purpose be clear from its text or its surroundings. Clear text on its own is the friendliest way to meet it."
    ]},
    {h:"New tabs: think twice", body:[
      "Adding `target=\"_blank\"` makes a link open in a new tab. It’s tempting (“so people don’t leave my site”), but it has costs:",
      {list:[
        "The Back button no longer returns to your page, which confuses many people, especially on phones, where tabs are hidden.",
        "Screen reader users may not realise a new tab opened, and lose their place.",
        "It takes a choice away: anyone who wants a new tab can open one themselves (long-press on a phone, middle-click or [[kbd:Ctrl]]-click on a computer)."
      ]},
      "Good reasons do exist, such as a help page opened from the middle of a long form that would otherwise lose what someone typed. When you do it, say so in the link text, as MDN recommends:",
      {code:'<a href="https://example.org/help"\n   target="_blank">Form help (opens in new tab)</a>', lang:"html"},
      {tip:"You may see `rel=\"noopener\"` added to such links. It stops the new page from reaching back to yours (through `window.opener`), which a bad site could use to swap your page for a fake one. Current browsers already do this for every `target=\"_blank\"` link; writing it out does no harm and protects people on older browsers."}
    ]},
    {h:"Images: src and alt", body:[
      "The `<img>` element shows an image. It’s a void element; everything is in attributes:",
      {code:'<img src="images/lemon-cake.jpg"\n     alt="A slice of lemon cake with white icing"\n     width="1200" height="900">', lang:"html", weblab:"wl-image"},
      "[[src]] is the image file’s address, written exactly like an `href`. [[alt-attribute|alt]] is the text alternative: what a screen reader reads aloud, what search engines index, and what appears if the image fails to load.",
      {h:"Writing good alt text"},
      {list:[
        "**Say what the image contributes here.** The same photo might need “Our café’s front door, with a ramp to the left” on a page about access, and “Riverside Café” as a logo in the header.",
        "**Be brief:** usually a short sentence. Long detail belongs in the page text or a caption.",
        "**Skip “image of” or “picture of”:** screen readers already say it’s an image.",
        "**If the image contains text** (a poster, a sign), include that text.",
        "**If the image is a link,** describe where it goes: a logo linking home gets `alt=\"Riverside Café home\"`."
      ]},
      {h:"Decorative images: alt=\"\""},
      "Some images add nothing that the text doesn’t already say: a decorative swirl, a stock photo that only sets the mood, an icon next to a word that says the same thing. Give these a [[decorative-image|decorative]] empty alt, `alt=\"\"`, with no space between the quotes. Screen readers then skip them.",
      {warn:"Never leave `alt` out completely. With no alt at all, MDN notes that some screen readers announce the file name instead, which might be “IMG_20260314_0932.jpg”. Empty alt and missing alt mean different things."},
      "Digital Foundations Unit 8 covers alt text for documents in more depth: see {{alt-text}}.",
      {lab:"wl-image", t:"Practise: add an image with good alt text"}
    ]},
    {h:"Size, captions and layout shift", body:[
      "Give every image its real `width` and `height` in pixels. The browser reads them before the image downloads and reserves a space of the right shape, so the text below doesn’t jump down when the picture arrives. That jump is called **layout shift**; on a phone it makes people tap the wrong thing.",
      "With CSS you’ll usually make images scale to fit the screen (Unit 3), and the browser keeps the same proportions. A 1200 × 900 photo shown 400 pixels wide gets a 300-pixel-tall space, because 900 ÷ 1200 × 400 = 300.",
      {warn:"Don’t use `width` and `height` to shrink a huge photo. A 6000-pixel camera image still downloads in full, however small it’s shown. Resize the file first in a photo app; that can turn several megabytes into a couple of hundred kilobytes."},
      "When an image has a caption, use `<figure>` and `<figcaption>`, which tie them together in the code:",
      {code:'<figure>\n  <img src="images/garden.jpg"\n       alt="Raised vegetable beds with bean poles"\n       width="1200" height="800">\n  <figcaption>Volunteers built the beds in\n    April 2026.</figcaption>\n</figure>', lang:"html"},
      "The caption is visible to everyone; the alt is read instead of the image. They shouldn’t repeat each other: here the alt describes the picture and the caption adds the story."
    ]},
    {h:"Image formats", body:[
      "The format affects quality, file size and what the image can do. MDN’s image format guide recommends these choices:",
      {table:[
        ["Format","Good for","Notes"],
        ["JPEG (.jpg)","Photos","Lossy: small files, but it blurs sharp edges and text"],
        ["PNG (.png)","Screenshots, logos, line art","Lossless and supports transparency; large for photos"],
        ["SVG (.svg)","Logos, icons, diagrams","Drawn from shapes, so it stays sharp at any size"],
        ["WebP (.webp)","Photos and graphics","Lossy or lossless; usually smaller than JPEG or PNG"],
        ["AVIF (.avif)","Photos and graphics","Often smallest of all; supported by current major browsers"]
      ]},
      "For a beginner’s site, JPEG for photos, PNG for screenshots and SVG for logos and icons are safe choices that every browser shows. WebP and AVIF make pages lighter; MDN suggests keeping a JPEG or PNG fallback for AVIF, because older browsers don’t support it. Unit 2 of Digital Foundations explains lossy and lossless formats: {{file-formats}}."
    ]},
    {h:"Whose image is it?", body:[
      "Finding an image online doesn’t make it free to use. In most countries **copyright** applies automatically the moment a work is created, with no © symbol needed. MDN’s advice: if an image has no licence information, assume it’s protected, all rights reserved.",
      "Safe sources, from Digital Foundations Unit 5:",
      {list:[
        "**Your own photos and drawings** (and permission from anyone recognisable in them).",
        "**{{creative-commons|Creative Commons}} images**, for example from Wikimedia Commons or Openverse, used under the licence’s conditions.",
        "**Public domain and CC0 images**, which need no permission (crediting them is still kind)."
      ]},
      "Most Creative Commons licences require credit. The TASL pattern from Digital Foundations Unit 5 works well in a caption: Title, Author, Source (linked), Licence (linked). See also {{copyright-basics}}.",
      {warn:"Don’t point `src` at an image on someone else’s website without permission (“hotlinking”). You use their bandwidth, and they can change or remove the image at any time. Download it, if the licence allows, and serve your own copy."}
    ]}
   ],
   try:[
    {id:"t2u2-l4-x1", type:"mcq", q:"Kenji’s site has `index.html` at the top, and a folder `events` containing `quiz.html`. Which `href` in **index.html** links to the quiz page, both on Kenji’s computer and once the site is online?", options:[
      {t:"`events/quiz.html`", ok:true, why:"From index.html, go into the events folder, then to quiz.html. It’s relative, so it keeps working wherever the site folder is kept."},
      {t:"`../events/quiz.html`", why:"`..` goes **up** a folder. index.html is already at the top of the site, so on Kenji’s computer this looks outside the site folder and the link breaks. (A web server at the top of a domain quietly ignores the extra `..`, but don’t rely on that luck.)"},
      {t:"`quiz.html`", why:"That looks for quiz.html in the **same** folder as index.html, where it doesn’t exist."},
      {t:"`quiz/events.html`", why:"The folder and the file are the wrong way round: this looks for a folder called quiz containing a file called events.html. The folder comes first, then a forward slash, then the file."}
    ]},
    {id:"t2u2-l4-x2", type:"match", q:"Match each `href` with what happens when someone follows the link.", pairs:[
      ["`#opening-hours`","Jumps to the element with that id on this page","A fragment on its own stays on the current page."],
      ["`mailto:hello@example.org`","Opens a new email to that address","The `mailto:` scheme hands the address to the visitor’s email app."],
      ["`tel:+442079460123`","Offers to call the number","Phones (and some computer apps) handle the `tel:` scheme."],
      ["`../index.html`","Goes up one folder, to that folder’s index.html","`..` means the parent folder."],
      ["`https://example.org/menu.html`","Opens that exact address, from anywhere","An absolute URL doesn’t depend on where the linking page is."]
    ]},
    {id:"t2u2-l4-x3", type:"spot", q:"These are the link texts on Priya’s yoga studio page, as a screen reader’s links list would read them. Tap every one that doesn’t make sense out of context.", ask:"doesn’t make sense on its own", parts:[
      {t:"Class timetable", flag:false, why:"Clear on its own: it’s a link to the timetable."}, " · ", {t:"Click here", flag:true, why:"Out of context, this says nothing about where it goes. Use the destination’s name instead."}, " · ", {t:"Price list (PDF, 150 KB)", flag:false, why:"Says what it is and warns it’s a file, with its size."}, " · ", {t:"Read more", flag:true, why:"Read more about what? If several links say this, they’re impossible to tell apart. “Read more about beginners’ classes” works."}, " · ", {t:"https://example.org/tt-v2.html", flag:true, why:"A long address is hard to listen to (it may be read character by character) and doesn’t say what the page is."}, " · ", {t:"Directions to the studio (opens in new tab)", flag:false, why:"Clear destination, plus a warning about the new tab."}, " · ", {t:"Contact us", flag:false, why:"Short and clear."}
    ]},
    {id:"t2u2-l4-x4", type:"sort", q:"Fatima is adding images to her community choir’s site. Which images need descriptive alt text, and which are decorative (`alt=\"\"`)?", buckets:["Describe it in alt","Decorative: `alt=\"\"`"], items:[
      {t:"A photo of the choir performing, on the “About us” page", b:0, why:"It’s content: it shows who the choir is. Something like “The choir singing in the town hall, about thirty people in blue” works."},
      {t:"A curly divider line between sections", b:1, why:"Pure decoration; it carries no information."},
      {t:"A phone icon right next to the words “Phone: +44 20 7946 0000”", b:1, why:"The text already says “Phone”, so describing the icon would just repeat it."},
      {t:"A poster image announcing the concert date and venue", b:0, why:"The poster holds information. The alt must include its text: the date and the venue."},
      {t:"The choir’s logo, which is a link to the home page", b:0, why:"An image link needs alt that says where it goes, such as “Hilltown Choir home”. With empty alt, the link would have no name."},
      {t:"A soft background photo of sheet music, used only for mood", b:1, why:"It adds atmosphere, not information. Screen reader users lose nothing by skipping it."}
    ]},
    {id:"t2u2-l4-x5", type:"mcq", q:"Tomás’s event page reads: “Join our beach clean-up on Saturday.” Next to it is a photo of last year’s volunteers holding full rubbish bags on the beach. Which alt is best?", options:[
      {t:"`alt=\"Volunteers on the beach holding full rubbish bags at last year’s clean-up\"`", ok:true, why:"It says what the photo contributes in this context: what the event looks like and what was achieved. It’s brief and specific."},
      {t:"`alt=\"Image of people\"`", why:"“Image of” is redundant (screen readers say it’s an image), and “people” leaves out everything that matters here."},
      {t:"`alt=\"\"`", why:"Empty alt is for decoration. This photo shows what the event is like, which the text doesn’t say, so it’s content."},
      {t:"`alt=\"beach_cleanup_2025_final.jpg\"`", why:"A file name tells listeners nothing useful. That’s what some screen readers fall back to when alt is **missing**; don’t copy it on purpose."}
    ]},
    {id:"t2u2-l4-x6", type:"number", q:"Ana’s photo is 1200 pixels wide and 900 pixels tall, and her `<img>` has `width=\"1200\" height=\"900\"`. Her CSS shows it 400 pixels wide, keeping its shape. How tall, in pixels, is the space the browser reserves before the photo loads?", answer:300, tol:0, unit:"px", why:"The shape (aspect ratio) is 1200 : 900, so height = 900 ÷ 1200 × 400 = 0.75 × 400 = **300** pixels. Because width and height are in the HTML, the browser can work this out before the file arrives, so nothing jumps.", wrongs:[
      {v:900, tol:0, why:"That’s the photo’s full height. Shown 400 pixels wide, it’s scaled down in proportion."},
      {v:533, tol:1, why:"That divides the wrong way round (1200 ÷ 900 × 400). A landscape photo is shorter than it is wide."},
      {v:400, tol:0, why:"That would make it square. The photo is wider than it is tall."}
    ], hint2:"Height ÷ width stays the same: 900 ÷ 1200 = 0.75."},
    {id:"t2u2-l4-x7", type:"mcq", q:"Oluwaseun needs his bakery’s logo on the site: a simple shape with two colours and the bakery’s name. It should look sharp on a phone and on a huge screen. Which format suits it best?", options:[
      {t:"SVG", ok:true, why:"A logo made of shapes and text is ideal for SVG: it’s drawn from instructions, so it stays crisp at any size, and the file is usually tiny."},
      {t:"JPEG", why:"JPEG is for photos. Its lossy compression blurs sharp edges and text, and it can’t be scaled up without getting fuzzy."},
      {t:"A very large PNG, shrunk with width and height", why:"PNG keeps edges sharp, but a big file costs download time, and at bigger sizes it still eventually blurs. A vector format avoids both."},
      {t:"A photo of the printed logo", why:"A photo adds blur, shadows and background. Ask whoever designed it for the original vector file."}
    ]},
    {id:"t2u2-l4-x8", type:"mcq", q:"Mei finds a lovely photo of a mountain through an image search for her hiking club’s page. The page it came from shows no licence or © notice. What should she do?", options:[
      {t:"Assume it’s protected and use her own photo or one with a clear licence, such as Creative Commons, credited properly", ok:true, why:"Copyright applies automatically, notice or not. A Creative Commons image credited with Title, Author, Source and Licence, or her own photo, avoids the problem."},
      {t:"Use it, because with no © notice it’s public domain", why:"No notice is needed for copyright to apply. Missing information means “ask or assume all rights reserved”, not “free”."},
      {t:"Use it, but link `src` to the original site so she isn’t copying it", why:"That’s hotlinking: it still uses the work without permission, uses their bandwidth, and the image can change or vanish."},
      {t:"Use it, as long as the club’s site isn’t making money", why:"Non-commercial use doesn’t remove copyright. Some licences allow non-commercial use, but only if the owner has given that licence."}
    ]}
   ],
   apply:{intro:"Build two linked pages with an image. The Web Lab is enough for the first task on any device; for a real two-page site with folders, a computer with the editor from Unit 1 is easier.", tasks:[
     {t:"Two Web Lab challenges", how:["Open the Web Lab challenge “Make a link” and complete it with link text that makes sense out of context.","Then do “Add an image with alt text”."]},
     {t:"A tiny two-page site", how:{
       win:["In your site folder (Unit 1), create `index.html`, `about.html` and a folder called `images`.","Put a photo of your own into `images`. Use a lowercase file name without spaces, such as `garden.jpg`. To see its size in pixels, right-click it in File Explorer → **Properties** → **Details**.","In index.html, add a link to about.html and, on about.html, a link back. Add a `#` link from the top of one page to a heading further down (give that heading an `id`).","Add the image to about.html with `src=\"images/garden.jpg\"`, its real width and height, and alt text written for that page. Open index.html in your browser and test every link."],
       mac:["In your site folder (Unit 1), create `index.html`, `about.html` and a folder called `images`.","Put a photo of your own into `images`, with a lowercase file name without spaces. To see its size in pixels, select it in Finder and choose **File → Get Info** (look under **More Info**).","Link the two pages to each other, and add a `#` link to a heading with an `id`.","Add the image with `src=\"images/garden.jpg\"`, its real width and height, and alt text. Open index.html in your browser and test every link."],
       chromeos:["Use your editor from Unit 1 (or the Web Lab) to create `index.html`, `about.html` and an `images` folder in the Files app.","Add a photo of your own to `images`, named in lowercase without spaces. To see its size in pixels, drag it from the Files app onto a Chrome tab: the tab’s title shows the size, such as “garden.jpg (1200×900)”.","Link the pages to each other, add a `#` link to a heading with an `id`, and add the image with width, height and alt. Open index.html in Chrome and test every link."],
       phone:["The Web Lab shows one page at a time, so make the two pages there one after the other, or wait for Unit 5’s publishing lesson, which builds a real multi-page site.","In the Web Lab, practise a `#` link: add an `id` to a heading near the bottom and a link at the top that jumps to it.","For an image, use the photo named in the “Add an image with alt text” challenge and write alt text for two different pages it could appear on."]
     }},
     {t:"Alt text and attribution practice", how:["Pick three photos from your own camera roll. For each, write alt text for one specific page (for example, a club’s events page), in one short sentence.","Find one Creative Commons image on Wikimedia Commons or Openverse. Write a caption crediting it with TASL: Title, Author, Source (link), Licence (link)."], write:"Your three alt texts and your TASL credit"}
   ], proof:"Two pages that link to each other, a working `#` link, one image with real width, height and context-specific alt text, and a correctly credited Creative Commons image."},
   read:[
     {book:"mdn", where:"Structuring content with HTML → “Creating links” (especially “A quick primer on URLs and paths” and “Link best practices”)"},
     {book:"mdn", where:"Structuring content with HTML → “HTML images” (alternative text, width and height, licensing, figures and figure captions)", note:"Then try MDN’s short tests, “Test: Links” and “Test: Images”."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u2-l5", title:"Page structure, tables and forms", minutes:60,
   hook:{q:"A form has a checkbox with the words “Send me the newsletter” beside it, connected properly with a `<label>`. What happens when you tap the words, not the tiny box?", options:["Nothing: only the box itself responds","The checkbox ticks, just as if you’d tapped the box","The words get selected for copying","A help message pops up"], answer:1, reveal:"The checkbox ticks. A properly connected label becomes part of the control, so the whole phrase is a big, easy target, and screen readers read the label when the box is focused. That’s one small example of HTML doing real work when you use the right element. This lesson covers page landmarks, data tables and forms, and how to check your work."},
   goals:[
     "Divide a page into landmarks with `<header>`, `<nav>`, `<main>`, `<aside>` and `<footer>`, and choose between `<article>`, `<section>` and `<div>`",
     "Build a data table with a caption and header cells, and explain why tables aren’t for layout",
     "Build a simple form with labels, suitable input types, `required` and a button",
     "Check a page with the W3C validator and a short manual accessibility check"
   ],
   learn:[
    {h:"Landmarks: the regions of a page", body:[
      {lead:"Most pages share the same big regions: a top bar, navigation, the main content, perhaps a sidebar, and a footer. HTML has an element for each."},
      {code:'<body>\n  <header>\n    <p>Hilltown Community Garden</p>\n    <nav>\n      <a href="index.html">Home</a>\n      <a href="plots.html">Plots</a>\n    </nav>\n  </header>\n  <main>\n    <h1>Volunteer days</h1>\n    …\n  </main>\n  <footer>\n    <p>© 2026 Hilltown Community Garden</p>\n  </footer>\n</body>', lang:"html", weblab:"wl-semantic"},
      {fig:'<svg viewBox="0 0 340 352"><rect class="d-panel" x="8" y="8" width="324" height="336" rx="8" stroke-width="2"/><rect class="d-gold" x="16" y="16" width="308" height="72" rx="6" stroke-width="2"/><text x="24" y="36" font-family="monospace">&lt;header&gt;</text><text class="s" x="316" y="36" text-anchor="end">banner</text><rect class="d-lup" x="24" y="46" width="292" height="34" rx="5" stroke-width="1.5"/><text x="32" y="68" font-family="monospace">&lt;nav&gt;</text><text class="s" x="308" y="68" text-anchor="end">navigation</text><rect class="d-sage" x="16" y="98" width="308" height="178" rx="6" stroke-width="2"/><text x="24" y="118" font-family="monospace">&lt;main&gt;</text><text class="s" x="316" y="118" text-anchor="end">main</text><rect class="d-panel" x="24" y="128" width="176" height="140" rx="5" stroke-width="1.5"/><text x="32" y="148" font-family="monospace">&lt;article&gt;</text><text class="s" x="32" y="172">makes sense alone:</text><text class="s" x="32" y="188">a post, an event,</text><text class="s" x="32" y="204">a recipe</text><rect class="d-rose" x="208" y="128" width="108" height="140" rx="5" stroke-width="1.5"/><text x="216" y="148" font-family="monospace">&lt;aside&gt;</text><text class="s" x="216" y="172">complementary:</text><text class="s" x="216" y="188">related links,</text><text class="s" x="216" y="204">a short bio</text><rect class="d-gold" x="16" y="286" width="308" height="50" rx="6" stroke-width="2"/><text x="24" y="316" font-family="monospace">&lt;footer&gt;</text><text class="s" x="316" y="316" text-anchor="end">contentinfo</text></svg>', alt:"A page wireframe. At the top, a gold header box labelled banner contains a lupine nav box labelled navigation. Below, a sage main box labelled main holds an article box, for content that makes sense alone such as a post, an event or a recipe, and a rose aside box, labelled complementary, for related links or a short bio. At the bottom, a gold footer box labelled contentinfo.", cap:"Each region element becomes a landmark that assistive technology can list and jump to. The small labels are the landmark names screen readers use."},
      {table:[
        ["Element","Holds","Landmark"],
        ["`<header>`","Site name or logo, often the navigation","banner (when it’s not inside main, article, section, aside or nav)"],
        ["`<nav>`","The main sets of navigation links","navigation"],
        ["`<main>`","The content unique to this page. Only one visible per page","main"],
        ["`<aside>`","Related but separate content: a sidebar, related links","complementary"],
        ["`<footer>`","Copyright, contact details, small print","contentinfo (same condition as header)"]
      ]},
      "Screen readers can list a page’s [[landmark|landmarks]] and jump straight to one, much as they do with headings. That lets someone go straight to `<main>` without hearing the logo and menu that repeat on every page."
    ]},
    {h:"article, section and div", body:[
      "Inside `<main>`, three elements group content. They’re easy to confuse:",
      {list:[
        "`<article>`: a self-contained piece that would make sense on its own, even on another site: a blog post, a news story, an event listing, a product card, a comment.",
        "`<section>`: a themed part of something bigger, which normally begins with a heading. “Opening hours” and “Find us” on a café page are sections.",
        "`<div>`: no meaning at all. A box you use when you need a wrapper for styling or layout and no meaningful element fits. `<span>` is the same idea inside a line of text."
      ]},
      "A quick test: if you’d naturally give it a heading, it’s probably a `<section>` or an `<article>`. If it could be printed alone and still make sense, it’s an `<article>`. If neither, a `<div>` is honest. A page built only from `<div>` elements works, but it gives software nothing to work with, which some people call “div soup”.",
      {lab:"wl-semantic", t:"Practise: give a page a header, nav, main and footer"}
    ]},
    {h:"Data tables", body:[
      "Tables are for **data**: information that has rows and columns, where each cell is understood by its row and column headers. A timetable, a price comparison, sports results.",
      {code:'<table>\n  <caption>Café opening hours</caption>\n  <thead>\n    <tr>\n      <th scope="col">Day</th>\n      <th scope="col">Opens</th>\n      <th scope="col">Closes</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Monday</th>\n      <td>8:00</td>\n      <td>16:00</td>\n    </tr>\n    <tr>\n      <th scope="row">Saturday</th>\n      <td>9:00</td>\n      <td>14:00</td>\n    </tr>\n  </tbody>\n</table>', lang:"html", weblab:"wl-table"},
      {list:[
        "`<caption>` is the table’s title, placed first inside `<table>`. It tells everyone what the table is before they read it.",
        "`<tr>` is a table row. `<td>` is a data cell. `<th>` is a **header** cell.",
        "`scope=\"col\"` says “I’m the header for this column”, `scope=\"row\"` “for this row”. A screen reader can then announce “Saturday, Closes, 14:00” instead of a bare “14:00” (the exact wording varies between screen readers).",
        "`<thead>` and `<tbody>` group the header rows and the body rows. They help with styling and long tables."
      ]},
      {h:"Not for layout"},
      "Before CSS layout was reliable, people built whole page layouts out of invisible tables. Don’t. MDN gives three reasons: screen readers announce layout tables as data and become confusing, the markup is hard to maintain, and tables don’t adapt to small screens. CSS layout (Unit 3) does the job properly.",
      {lab:"wl-table", t:"Practise: build a table with header cells"}
    ]},
    {h:"Forms: labels first", body:[
      "Forms collect information: a sign-up, a search, a booking request. Each field is a [[form-control|form control]], and every control needs a [[label-element|label]]: the visible text that says what to enter.",
      {code:'<form>\n  <label for="email">Email address</label>\n  <input type="email" id="email"\n         name="email" required>\n\n  <input type="checkbox" id="news"\n         name="news">\n  <label for="news">Send me the newsletter</label>\n\n  <button>Sign up</button>\n</form>', lang:"html", weblab:"wl-form"},
      "The label’s `for` must match the input’s `id` exactly. That connection does three things: tapping the label focuses or ticks the control (the warm-up showed this), screen readers read the label when the control is focused, and voice-control users can say the label’s words to reach the field.",
      "`name` is the name the value is sent under when the form is submitted, like a column heading in the data you receive. `<button>` inside a form submits it by default.",
      {warn:"A `placeholder` (the grey hint inside an empty box) is **not** a label. It disappears as soon as someone types, often has low contrast, and isn’t reliably read by screen readers. MDN: don’t use it as a substitute for `<label>`. If you use one at all, use it for an example, like “e.g. 07700 900123”, alongside a real label."},
      "Giving every control a label meets WCAG 2.2 success criterion 3.3.2, “Labels or Instructions”.",
      {lab:"wl-form", t:"Practise: connect a label to an input"}
    ]},
    {h:"Input types and built-in checks", body:[
      "The `type` attribute changes what an `<input>` is, and on many phones, which keyboard appears:",
      {table:[
        ["type","For","What you get"],
        ["`text`","Names, short answers","A plain text box (the default)"],
        ["`email`","Email addresses","Checks for an @; phones often show an @ key"],
        ["`tel`","Phone numbers","A number keypad on phones; no format checking"],
        ["`url`","Web addresses","Checks it looks like a full address"],
        ["`number`","Quantities, such as tickets","Number entry; `min` and `max` limits"],
        ["`date`","Dates","A date picker, in the visitor’s own format"],
        ["`checkbox`","Yes/no choices, or pick several","A box to tick"],
        ["`radio`","Pick one from a few","Round buttons; give them all the same `name`"]
      ]},
      "Add `required` (a boolean attribute) and the browser won’t submit the form until the field is filled. With `type=\"email\"`, it also checks the format. We tested it: with “abc” typed in an email field, Chromium refused to submit and explained that the address was missing an @.",
      "Group radio buttons or related checkboxes in a `<fieldset>`, with a `<legend>` that asks the question, such as “Which session?”. Screen readers announce the legend when someone moves into the group, so each option is heard as an answer to that question.",
      {warn:"Browser checks help honest visitors; they don’t protect anything. Anyone can bypass them, so whatever receives the form must check the data again. MDN puts it simply: you need both. And collect only what you truly need: every extra field is personal data you have to look after (see {{data-protection-laws}})."},
      {tip:"Where does the data go? The form’s `action` attribute names the address that receives it, and something on that server must process it. Without a server, the form reloads the page. That’s fine for practising labels and checks. Actually receiving the data needs a server or a form-handling service, which is beyond this unit."}
    ]},
    {h:"Validating your HTML", body:[
      "Browsers repair mistakes silently (Lesson 1), so you need a tool that doesn’t. A [[validator]] reads your HTML against the rules of the standard and lists every problem. The best known is free: **The W3C Markup Validation Service** at [validator.w3.org](https://validator.w3.org/).",
      "It has three tabs: **Validate by URI** (a page that’s online), **Validate by File Upload** and **Validate by Direct Input** (paste the whole document, from the doctype to `</html>`). Direct Input works on a phone too.",
      "It catches the mistakes you can’t see:",
      {list:[
        "Wrongly nested or unclosed elements, and stray end tags",
        "A missing `<title>`, or an `<img>` without an `alt` attribute",
        "The same `id` used twice",
        "Elements in places they can’t go, such as a `<ul>` directly inside another `<ul>`",
        "Misspelled element or attribute names"
      ]},
      {tip:"Fix the **first** error first, then check again. One mistake, such as an unclosed tag, can cause a cascade of later messages that disappear once it’s fixed. MDN’s “Debugging HTML” page walks through this."},
      "Some messages are labelled **Warning** or **Info** rather than **Error**. Read them, but they don’t mean the page is broken."
    ]},
    {h:"Quick accessibility checks", body:[
      "A validator checks grammar, not sense. It can tell that an image has an `alt`; it can’t tell that `alt=\"photo\"` is useless, that link text says “click here”, or that headings skip levels. So after validating, spend five minutes on these checks:",
      {ol:[
        "**Title and language:** a specific `<title>` and the right `lang`.",
        "**Headings:** one `<h1>`, levels in order, and the headings alone work as a table of contents.",
        "**Images:** every `<img>` has alt; decorative ones have `alt=\"\"`; the rest say what matters.",
        "**Links:** every link’s text makes sense on its own.",
        "**Forms:** every control has a connected `<label>`; tap each label and check it reaches its field.",
        "**Keyboard (on a computer):** press [[kbd:Tab]] repeatedly. Can you reach every link and field, in a sensible order, and always see where you are?",
        "**Zoom:** zoom to 200%. Can you still read and use everything?"
      ]},
      "Automated checkers help too: free tools such as WAVE (from WebAIM) and the Lighthouse panel in Chrome’s developer tools flag many issues automatically. They can’t judge meaning, so they find only part of the problems. The checklist above, done by a person, catches what they miss.",
      {key:"Valid HTML is the floor, not the ceiling. Correct elements plus a few human checks make a page work for far more people."}
    ]}
   ],
   try:[
    {id:"t2u2-l5-x1", type:"match", q:"Match each element with what belongs in it.", pairs:[
      ["`<header>`","The site name or logo at the top","A top-level header becomes the banner landmark."],
      ["`<nav>`","The main menu of links to other pages","Navigation landmarks are for major sets of links, not every link."],
      ["`<main>`","The content unique to this page","There’s one visible main per page, and screen readers can jump straight to it."],
      ["`<aside>`","A box of related links beside an article","Related but separate content is complementary."],
      ["`<footer>`","Copyright and contact details","A top-level footer becomes the contentinfo landmark."]
    ]},
    {id:"t2u2-l5-x2", type:"mcq", q:"Hana’s recipe site shows several recipe cards on its home page. Each has a heading, a photo and a short description, and each could be shared on its own. Which element should wrap each card?", options:[
      {t:"`<article>`", ok:true, why:"Each card is self-contained and would make sense on its own, which is exactly what `<article>` means."},
      {t:"`<main>`", why:"There’s only one `<main>` per page, for the page’s whole main content. The cards sit inside it."},
      {t:"`<aside>`", why:"`<aside>` is for content that’s related but secondary. The recipes are the main content here."},
      {t:"`<nav>`", why:"Even if each card links somewhere, the cards are content, not the site’s navigation menu."}
    ]},
    {id:"t2u2-l5-x3", type:"sort", q:"Dmitri is deciding where to use an HTML table. Data table, or not a table?", buckets:["A data table","Not a table"], items:[
      {t:"Bus times: stops down the side, departure times across the top", b:0, why:"Each time is understood by its stop and its column: real rows and columns."},
      {t:"Comparing three phone plans by price, data and minutes", b:0, why:"A comparison grid is classic tabular data."},
      {t:"Putting a photo to the left of a paragraph", b:1, why:"That’s layout. Use CSS (Unit 3), not a table."},
      {t:"A two-column page with a sidebar", b:1, why:"Page layout is CSS’s job. Layout tables confuse screen readers and don’t adapt to phones."},
      {t:"League results: team, played, won, points", b:0, why:"Rows of teams with the same columns of figures: a data table."},
      {t:"A list of volunteers’ names", b:1, why:"One column of items is a list (`<ul>`), not a table."}
    ]},
    {id:"t2u2-l5-x4", type:"spot", q:"Ana built a price table for her bike repair stall. Tap the parts that should be fixed.", ask:"should be fixed", mono:true, parts:[
      "<table>\n  ", {t:"<caption>Repair prices</caption>", flag:false, why:"A caption first inside the table: exactly right."}, "\n  <tr>\n    ", {t:"<td>Repair</td>", flag:true, why:"This is a column header, so it should be `<th scope=\"col\">Repair</th>`. As a `<td>`, a screen reader treats it as ordinary data."}, "\n    ", {t:"<th scope=\"col\">Price</th>", flag:false, why:"A correct column header."}, "\n  </tr>\n  <tr>\n    ", {t:"<th scope=\"row\">Puncture</th>", flag:false, why:"A correct row header: it names what this row is about."}, "\n    ", {t:"<td>8.00</td>", flag:false, why:"An ordinary data cell."}, "\n  </tr>\n  <tr>\n    ", {t:"<td><b>Brakes</b></td>", flag:true, why:"Bold only makes it look like a header. It should be `<th scope=\"row\">Brakes</th>`, like Puncture above."}, "\n    <td>15.00</td>\n  </tr>\n</table>"
    ]},
    {id:"t2u2-l5-x5", type:"mcq", q:"Lucía’s sign-up form has `<label for=\"email\">Email</label>` and `<input type=\"email\" id=\"e-mail\" name=\"email\">`. What’s the effect?", options:[
      {t:"The label isn’t connected: tapping it does nothing, and screen readers may announce an unlabelled field", ok:true, why:"`for` must match the input’s `id` exactly. “email” and “e-mail” are different, so the connection is lost even though the label looks right."},
      {t:"It works, because the `name` matches the label’s `for`", why:"`for` connects to `id`, not `name`. `name` only labels the data when it’s sent."},
      {t:"It works, because the label is right next to the input", why:"Being next to each other on screen doesn’t connect them in the code."},
      {t:"The form can’t be submitted", why:"The form still submits; the problem is that the field has no programmatic label."}
    ]},
    {id:"t2u2-l5-x6", type:"match", q:"Sione is building a booking form for a community workshop. Match each piece of information with the best input type.", pairs:[
      ["Email address","type=\"email\"","The browser checks for an @, and many phones show an @ key."],
      ["Mobile phone number","type=\"tel\"","Phones show a number keypad. Formats differ by country, so the browser doesn’t check it."],
      ["Number of tickets (1 to 6)","type=\"number\"","With `min=\"1\" max=\"6\"`, the browser checks the range."],
      ["Workshop date","type=\"date\"","A date picker, shown in the visitor’s own date format."],
      ["“I agree to the hall rules”","type=\"checkbox\"","A yes/no choice is a checkbox. Add `required` if it must be ticked."]
    ]},
    {id:"t2u2-l5-x7", type:"mcq", q:"Kenji’s page passes the W3C validator with no errors. His friend says, “Great, so it’s accessible.” What’s the most accurate reply?", options:[
      {t:"Not necessarily: the validator checks that the HTML follows the rules, not whether alt text, link text or headings make sense", ok:true, why:"Valid code is a good foundation, but `alt=\"image\"` and “click here” are perfectly valid. Human checks are still needed."},
      {t:"Yes: valid HTML is accessible by definition", why:"Validity is about the code’s grammar. Meaningless alt text or a confusing heading order can be valid."},
      {t:"No: the validator only checks spelling", why:"It checks much more than spelling: nesting, required elements and attributes, duplicate ids and where elements may go."},
      {t:"It depends on the browser the friend uses", why:"Accessibility issues like vague link text affect people in every browser. It’s about the content, not the browser."}
    ]},
    {id:"t2u2-l5-x8", type:"order", q:"Put Priya’s steps for checking her finished page in a sensible order.", items:[
      {t:"Copy the whole document, from `<!doctype html>` to `</html>`", why:"The validator needs the complete page to check things like the title and doctype."},
      {t:"Paste it into **Validate by Direct Input** and press **Check**", why:"Direct Input works on any device without publishing the page."},
      {t:"Fix the first error in the list", why:"The first error can cause several later messages, so start at the top."},
      {t:"Check again, and repeat until there are no errors", why:"Re-checking shows which messages disappeared with each fix."},
      {t:"Do the manual checks: headings, alt text, link text, labels, keyboard", why:"Last, because the validator can’t judge meaning. These catch what it misses."}
    ]}
   ],
   apply:{intro:"Finish the unit by giving your page from Lessons 2 to 4 a proper structure, then check it. Everything works on a phone except the keyboard test.", tasks:[
     {t:"Three Web Lab challenges", how:["Do the Web Lab challenges “Page landmarks”, “A data table” and “A labelled form field” (use the practise buttons in this lesson)."]},
     {t:"Structure your own page", how:["Wrap your site name and a small menu in `<header>` and `<nav>`, your content in `<main>`, and a copyright line in `<footer>`.","Add a small data table that suits your topic (opening times, a training plan, prices), with a `<caption>` and `<th>` cells with `scope`.","Add a short form: a labelled email field with `required`, one checkbox with its label, and a button. Tap each label to check it’s connected."]},
     {t:"Validate it", how:["Open validator.w3.org in any browser and choose **Validate by Direct Input**.","Paste your whole page and press **Check**.","Fix the first error, check again, and repeat until it reports no errors. Read any warnings."], write:"Which errors did the validator find, and what caused them?"},
     {t:"Five-minute accessibility check", how:{
       win:["Read only your headings, top to bottom: do they make sense as a table of contents?","Read only your link texts: does each make sense alone?","Press [[kbd:Tab]] repeatedly from the top of the page: can you reach every link and field, and see where you are?","Press [[kbd:Ctrl]] + [[kbd:+]] until the browser shows 200%: is everything still readable?"],
       mac:["Read only your headings, then only your link texts: do they make sense alone?","Press [[kbd:Tab]] repeatedly: can you reach every link and field? (In Safari, links are skipped unless you turn on **Settings → Advanced → Press Tab to highlight each item on a webpage**, or use [[kbd:Option]] + [[kbd:Tab]].)","Press [[kbd:Cmd]] + [[kbd:+]] until the browser shows 200%: is everything still readable?"],
       chromeos:["Read only your headings, then only your link texts: do they make sense alone?","Press [[kbd:Tab]] repeatedly: can you reach every link and field, and see where you are?","Press [[kbd:Ctrl]] + [[kbd:+]] until Chrome shows 200%: is everything still readable?"],
       phone:["Read only your headings, then only your link texts: do they make sense alone?","Tap each form label and check that it focuses or ticks its control.","Pinch to zoom in: can you still read everything? (This only works because your viewport line doesn’t block zoom.)","The keyboard test needs a computer, or a Bluetooth keyboard connected to your phone or tablet."]
     }}
   ], proof:"Your page with header, nav, main and footer, a captioned data table with header cells, a labelled form, a “no errors” result from the W3C validator, and notes from your five-minute check."},
   read:[
     {book:"mdn", where:"Structuring content with HTML → “Structuring documents”"},
     {book:"mdn", where:"Structuring content with HTML → “HTML table basics” and “HTML table accessibility”"},
     {book:"mdn", where:"Structuring content with HTML → “Forms and buttons in HTML” and “Debugging HTML”", note:"Then try MDN’s challenges “Planet data table” and “Feedback form”."}
   ]
  }
  ],
  checkpoint:["t2u2-q02","t2u2-q05","t2u2-q08","t2u2-q12","t2u2-q15","t2u2-q20","t2u2-q23","t2u2-q28","t2u2-q31","t2u2-q37","t2u2-q40","t2u2-q44"],
  codex:[
   {id:"html-elements", title:"HTML elements, tags and attributes", aka:["element","tag","attribute","void element","nesting","character reference","HTML entity","comment","whitespace"], tags:["html","basics"],
    summary:"An element is an opening tag, content and a closing tag; attributes add information; elements nest like boxes; a few special characters need references.",
    levels:{
     starter:[
      "HTML labels the parts of your content so browsers, search engines and screen readers know what each part is. Each labelled part is an **element**.",
      {code:'<a href="menu.html">Our menu</a>', lang:"html"},
      {list:["`<a href=\"menu.html\">` is the **opening tag**. `href=\"menu.html\"` is an **attribute**: extra information, written as name=\"value\".","“Our menu” is the **content**.","`</a>` is the **closing tag**, with a slash.","All of it together is the **element**."]},
      "Elements go inside other elements (nesting), like boxes inside boxes. Close them in reverse order: last opened, first closed.",
      {key:"Tags are the markers; the element is the whole thing."},
      "A real page is many elements nested together: the body holds everything you see, a list holds its items, a paragraph can hold a link. There are many elements, but a couple of dozen cover most pages, and MDN’s element reference lists them all."
     ],
     builder:[
      "**Void elements** can’t have content, so they have no closing tag: `<br>`, `<img>`, `<input>`, `<meta>`, `<link>`, `<hr>`. Writing `<br />` is allowed but the slash does nothing; on non-void elements such as `<div />` it is ignored, and the element stays open.",
      "**Attributes:** always quote values. An unquoted value ends at the first space, so `alt=Our stall` becomes `alt=\"Our\"` plus junk. Single or double quotes both work; be consistent. **Boolean attributes** (`required`, `checked`, `disabled`, `reversed`) are on when present, whatever their value: `checked=\"false\"` is still checked.",
      "**Whitespace:** runs of spaces, tabs and line breaks collapse to a single space when shown (except inside `<pre>`). Indent for readability; use elements for structure.",
      "**Comments:** `<!-- … -->`. Hidden on the page, visible in the source, so never put secrets in them.",
      {table:[["Character","Reference"],["<","`&lt;`"],[">","`&gt;`"],["&","`&amp;`"],["\" (in a double-quoted attribute)","`&quot;`"],["' (in a single-quoted attribute)","`&apos;`"]]},
      "With UTF-8 declared, type accented letters, other scripts and emoji directly.",
      "Some attributes work on any element. `id` gives one element a unique name (for `#` links and scripts); `class` gives a group name for styling (Unit 3); `lang` sets the language; `hidden` hides an element. `title` adds a tooltip, but it only appears on mouse hover, so never put important information in it.",
      "Indent nested elements by two spaces per level. Most code editors indent and close tags for you, which prevents most nesting mistakes."
     ],
     pro:[
      "Browsers never reject a page. The WHATWG HTML standard defines exact error-recovery rules, so every browser builds the same tree (the DOM) from the same broken markup. Some repairs are harmless; others surprise you:",
      {list:["An unclosed formatting element such as `<strong>` is closed at the end of its paragraph and then **reopened** in following blocks, so bold spreads.","A block element such as `<ul>` or `<div>` inside a `<p>` closes the paragraph first; the stray `</p>` then creates an empty paragraph.","A missing closing quote in an attribute swallows everything up to the next matching quote; if there isn’t one, the rest of the file can vanish.","`<` followed by a letter starts a tag, so `a<b` in text becomes a broken `<b` element. `5<6` survives, because a digit can’t start a tag; use `&lt;` anyway."]},
      "Element and attribute names are case-insensitive in HTML (lowercase by convention); attribute **values** may be case-sensitive (file names in `src`, `id` values).",
      "Some end tags are optional by the standard (for example `</li>`, `</p>`, and the html, head and body tags). Writing them is still the clearer habit, and it keeps validators and colleagues happy.",
      "Inspect the repaired tree in the browser’s developer tools (Elements or Inspector), not with View Source, which shows the file as sent. See {{browser-devtools}} and {{view-source}} in Unit 1.",
      "Keep two layers apart: the HTML **source** (the text you write and the server sends) and the **DOM** (the tree of elements the browser builds from it). CSS and JavaScript work on the DOM, so a silent repair, such as a reopened `<strong>`, can change which elements your styles and scripts find."
     ]
    },
    related:["html-document-structure","html-validation","headings-paragraphs"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Basic HTML syntax”"}],
    sources:[{t:"MDN: Basic HTML syntax", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"},{t:"MDN: Debugging HTML", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"}], checked:"2026-11"},

   {id:"html-document-structure", title:"The HTML page skeleton", aka:["doctype","html lang","head","body","meta charset","viewport meta","title element","boilerplate"], tags:["html","basics"],
    summary:"Every page needs a doctype, an html element with lang, a head (charset, viewport, title) and a body; each line prevents a specific problem.",
    levels:{
     starter:[
      "Every web page starts from the same skeleton:",
      {code:'<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport"\n      content="width=device-width, initial-scale=1">\n    <title>Page name</title>\n  </head>\n  <body>\n    …what people see…\n  </body>\n</html>', lang:"html"},
      "The **head** holds information about the page (not shown in it). The **body** holds everything people see. Change `lang` to your page’s language and write a specific title, because the title appears on the tab, in bookmarks and in search results.",
      {list:["`<!doctype html>`: use modern rules.","`lang`: the language of the text.","`charset`: how to read the letters.","`viewport`: lay out at phone width on phones.","`<title>`: the page’s name on tabs and in search results."]},
      "Save the skeleton as a template and start every new page from it."
     ],
     builder:[
      {table:[["Line","Why it’s there","Without it"],["`<!doctype html>`","Standards mode","Quirks mode: old, inconsistent layout"],["`lang`","Pronunciation, translation, search","Screen readers may use the wrong voice"],["`<meta charset>`","Bytes read as the right letters","Accents can become junk such as “cafÃ©”"],["Viewport `<meta>`","Phone-width layout","Phones lay out about 980 px wide and shrink it"],["`<title>`","The page’s name","Tab shows the file name; validation fails"]]},
      "Head contents: `<meta>`, `<title>`, `<link>` (stylesheets, icons), `<script>` (with `defer`). Body contents: headings, text, links, images, tables, forms, landmarks.",
      {code:'<link rel="stylesheet" href="style.css">\n<script src="app.js" defer><\/script>', lang:"html"},
      "`<script>` always needs its closing tag. `defer` runs the script after the page has been read.",
      {warn:"Don’t add `user-scalable=no` or `maximum-scale=1` to the viewport: they block zooming that people with low vision need."},
      "Order inside the head: the charset first, then viewport and title, then stylesheets and scripts. Only the charset’s position really matters (it must come early), but a consistent order makes pages easy to compare.","The `<title>` and the `<h1>` do different jobs: the title names the page from outside (tabs, bookmarks, search results), and the `<h1>` is the main heading inside it. They’re often similar; the title usually adds the site’s name."
     ],
     pro:[
      "The doctype only selects a rendering mode. `document.compatMode` returns `CSS1Compat` (standards) or `BackCompat` (quirks). Put it first; only whitespace and comments may come before it.",
      "The html, head and body tags are optional in the standard: the parser creates those elements anyway. Keep the `<html>` start tag so it can carry `lang`. If visible content appears in the head, the parser closes the head and moves it into the body.",
      "The character-encoding declaration must be complete within the first 1024 bytes of the file, so put `<meta charset=\"utf-8\">` first in the head. HTTP headers from the server can also declare an encoding; the meta element is your safety net when a file is opened locally or a server says nothing.",
      "`lang` takes a BCP 47 language tag: a language subtag, optionally followed by a script or region (`zh-Hant`, `pt-BR`). Set it on parts in another language too (`<span lang=\"fr\">`). Relevant WCAG 2.2 criteria: 3.1.1 Language of Page, 3.1.2 Language of Parts, 2.4.2 Page Titled.",
      "Mobile browsers without a viewport meta use a virtual layout width (commonly 980 px) and scale down; media queries written for small screens then never apply. `initial-scale=1` is common but, per MDN, usually unnecessary; `width=device-width` is the essential part.",
      "A site’s home page is usually called `index.html`: when an address ends in a folder, most web servers send that folder’s index.html (see Unit 1)."
     ]
    },
    related:["html-elements","html-validation","how-a-page-loads"],
    read:[{book:"mdn", where:"Structuring content with HTML → “What’s in the head? Web page metadata”"}],
    sources:[{t:"MDN: What’s in the head? Web page metadata", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata"},{t:"MDN: Viewport meta element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element"},{t:"MDN: Quirks mode and standards mode", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode"}], checked:"2026-11"},

   {id:"headings-paragraphs", title:"Headings, paragraphs and text meaning", aka:["h1","h2","heading levels","p","br","em","strong","i","b","blockquote","semantic text"], tags:["html","accessibility"],
    summary:"Headings h1–h6 build the page outline; p, br and hr structure text; em, strong, i, b and quotation elements carry meaning, not just looks.",
    levels:{
     starter:[
      "Headings are the page’s table of contents. `<h1>` is the main heading (one per page), `<h2>` headings are the main sections, `<h3>` headings divide those, and so on to `<h6>`.",
      "Choose the level by **position in the outline**, never by size: CSS can make any heading any size. Text that only looks like a heading (big, bold) isn’t one to a screen reader or a search engine.",
      {list:["`<p>`: a paragraph.","`<br>`: a line break inside text, such as an address.","`<em>`: the words you’d stress when speaking.","`<strong>`: words that are important, serious or urgent."]},
      {key:"Pick elements for meaning; looks come later from CSS."},
      "Why it matters: screen reader users can list the headings and jump between them, search engines treat headings as clues to the topic, and many readers skim headings before deciding what to read."
     ],
     builder:[
      {list:["**Don’t skip levels going down** (h2 → h4). Going back up is fine.","**One `<h1>`** per page is MDN’s recommendation.","**Don’t fake structure:** no `<br><br>` between paragraphs, no empty `<p>` for spacing.","`<hr>` is a thematic break (a change of topic), not just a line."]},
      {table:[["Element","Use for"],["`<em>`","Stress emphasis that changes meaning"],["`<strong>`","Importance, seriousness, urgency"],["`<i>`","A different voice: foreign phrases, scientific names, technical terms"],["`<b>`","Attention without importance: keywords, product names"],["`<blockquote>`","A long, block quotation"],["`<q>`","A short inline quotation (quotes added)"],["`<cite>`","The title of a work"],["`<abbr>`","An abbreviation (expand it in text first)"],["`<time datetime>`","A machine-readable date or time"]]},
      "Add `lang` to foreign phrases: `<i lang=\"fr\">joie de vivre</i>`. Avoid `<u>` for decoration: people expect underlined text to be a link.",
      {code:'<h1>Hilltown Garden</h1>\n<h2>Volunteer days</h2>\n<h3>Spring</h3>\n<h3>Autumn</h3>\n<h2>Allotment plots</h2>', lang:"html"},
      "The outline test: read only the headings, top to bottom. If they work as a table of contents, the structure is right.",
      "Keep paragraphs short on the web: one idea per paragraph. People read on small screens, and short paragraphs with clear headings are easier to scan.",
      "Write headings that describe what follows (WCAG 2.2 2.4.6 asks for this): “Opening hours” tells people more than “Information”. Keep them short, put the key word first, and make each one different from its neighbours. A heading starts a section, so it should have content under it; a bold line on its own that introduces nothing is just emphasised text."
     ],
     pro:[
      "Screen readers expose headings as a navigable list and usually offer a single key to move to the next heading (H in the common Windows screen readers). That makes heading structure one of the most important accessibility features of a long page.",
      "WCAG 2.2 links: 1.3.1 Info and Relationships (structure shown visually must exist in the markup), 2.4.6 Headings and Labels (headings describe their topic), and the AAA criterion 2.4.10 Section Headings. Skipped levels aren’t a WCAG failure in themselves or a validator error; they’re strong guidance from the W3C’s accessibility tutorials and MDN.",
      "The HTML standard once described an “outline algorithm” based on nested `<section>` elements that would re-level headings automatically. Browsers and screen readers never implemented it and it was removed from the standard, so a `<h1>` inside a `<section>` is still a level-1 heading. Use explicit levels.",
      "MDN notes that `<em>` and `<strong>` can be configured to be spoken differently by screen readers; in practice many users don’t have that switched on, so emphasis must never be the only signal for critical information. `<mark>` highlights text relevant in the current context, such as search matches.",
      "Default styles (`<h1>` size, `<blockquote>` indent, `<cite>` italics) come from the browser’s built-in stylesheet and can all be changed with CSS."
     ]
    },
    related:["html-lists","semantic-html","html-accessibility","styles-headings"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Headings and paragraphs”, “Emphasis and importance”, “Advanced text features”"}],
    sources:[{t:"MDN: Headings and paragraphs", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"},{t:"MDN: Emphasis and importance", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance"},{t:"MDN: Advanced text features", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features"}], checked:"2026-11"},

   {id:"html-lists", title:"HTML lists", aka:["ul","ol","li","nested list","description list","dl","dt","dd"], tags:["html"],
    summary:"Use ul when order doesn’t matter, ol when it does, li for each item, nested lists inside an li, and dl for terms with descriptions.",
    levels:{
     starter:[
      "When content is a set of items, mark it up as a list. Screen readers then announce “list, 4 items”, which helps people know what’s coming.",
      {list:["`<ul>`: an unordered list, where order doesn’t matter (ingredients, features).","`<ol>`: an ordered list, where order matters (steps, directions, rankings).","`<li>`: each item, inside either kind."]},
      {code:'<ul>\n  <li>Flour</li>\n  <li>Lemons</li>\n</ul>', lang:"html"},
      "Don’t type bullet symbols or numbers yourself: the browser adds them, and keeps numbers right when items move.",
      "Bullets and numbers are only the default look. CSS can change them (other symbols, letters, no markers at all) without changing what the list means.",
      {key:"Order matters? `<ol>`. Order doesn’t matter? `<ul>`."}
     ],
     builder:[
      "A list’s only children are `<li>` elements, so a sub-list goes **inside** the item it belongs to, after that item’s text:",
      {code:'<ol>\n  <li>Add the eggs\n    <ul>\n      <li>One at a time</li>\n    </ul>\n  </li>\n</ol>', lang:"html"},
      "Useful `<ol>` attributes: `start=\"4\"` begins numbering at 4; `reversed` counts down; `type=\"a\"` or `type=\"i\"` uses letters or Roman numerals (where the numbering style is part of the meaning, as in legal documents; otherwise use CSS).",
      "Description lists pair terms with descriptions: `<dl>` wraps the list, `<dt>` holds a term, `<dd>` its description. A term can have several descriptions. Good for glossaries, FAQs and specification sheets.",
      {code:'<dl>\n  <dt>Sourdough</dt>\n  <dd>Bread raised with a fermented starter.</dd>\n</dl>', lang:"html"},
      "Don’t use a list just to indent text, and never put an `<li>` outside a list: both create structure that isn’t really there.",
      "Each item can hold more than text: links, images, even paragraphs. A list of events, for example, might have a link and a date inside each `<li>`. Screen readers still announce the number of items, so the reader knows how long the list is before starting.",
      "Keep items parallel: each one the same kind of thing, written the same way. “Flour, eggs, bake for 40 minutes” mixes ingredients with a step, which is a sign the content is really two lists (ingredients in a `<ul>`, steps in an `<ol>`).",
      "Choose by meaning, not looks. A ranking stays an `<ol>` even if your design hides the numbers, and a set of tags stays a `<ul>` even if CSS lays the items out in a row."
     ],
     pro:[
      "Navigation menus are commonly marked up as a `<ul>` of links inside `<nav>`, so screen readers announce how many items the menu has. It’s a convention, not a requirement: links directly inside `<nav>` are valid.",
      "Removing list bullets with CSS (`list-style: none`) can make Safari with VoiceOver stop announcing the element as a list. If list semantics matter there, a common fix is adding `role=\"list\"` to the `<ul>`. This is a known browser behaviour rather than part of the standard; test with real assistive technology when it matters.",
      "A `<ul>` or `<ol>` placed directly inside another list (rather than inside an `<li>`) is invalid; the validator reports it, and the browser keeps it where you wrote it, so screen readers may count items wrongly.",
      "`<li>` has a `value` attribute inside `<ol>` to set that item’s number, and numbering continues from it.",
      "Screen readers announce a list’s length and, for nested lists, its level (“list, 3 items”, “level 2”), so correct nesting tells listeners exactly where they are.","`start` also lets a numbered list carry on after an interruption, such as a photo between steps 3 and 4: the second list gets `start=\"4\"`.",
      "`<menu>` is a semantic alternative to `<ul>` for a toolbar of commands (buttons that act on the page); browsers display and expose it like a `<ul>`. For site navigation, `<nav>` with a `<ul>` remains the usual pattern."
     ]
    },
    related:["headings-paragraphs","semantic-html"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Lists”"}],
    sources:[{t:"MDN: Lists", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists"}], checked:"2026-11"},

   {id:"html-links", title:"Links and URLs in HTML", aka:["a element","anchor","href","relative URL","absolute URL","fragment","mailto","tel","target _blank","link text"], tags:["html","accessibility","web"],
    summary:"The a element with href makes a link; addresses can be absolute, relative, fragments, mailto: or tel:; link text must make sense on its own.",
    levels:{
     starter:[
      {code:'<a href="menu.html">See our full menu</a>', lang:"html"},
      "`<a>` makes a link; `href` says where it goes; the words inside are the link text people tap and hear.",
      {list:["`https://…`: a full address on any site.","`menu.html`: a page in the same folder.","`#hours`: a spot on the same page (an element with `id=\"hours\"`).","`mailto:` and `tel:`: start an email or a call."]},
      "Write link text that makes sense on its own, such as “See our full menu”, never “click here”: many people scan or list links out of context.",
      "Links between pages of your own site usually use short relative addresses such as `about.html`; links to other sites use the full address starting `https://`. If a link opens a file, say so: “Menu (PDF)”."
     ],
     builder:[
      {table:[["href","Meaning"],["`events/quiz.html`","Down into a folder"],["`../index.html`","Up one folder"],["`/about.html`","From the site’s root"],["`about.html#team`","Another page, at a fragment"]]},
      "Use relative links within your own site so it keeps working when it moves; use absolute URLs for other sites. Web addresses use forward slashes.",
      {list:["Say what a non-page link does: “Annual report (PDF, 2 MB)”.","Don’t include “link” in link text; screen readers announce it.","Avoid raw URLs as link text.","Write `tel:` numbers in international form: `tel:+442079460123`."]},
      "`target=\"_blank\"` opens a new tab. It breaks the Back button and can disorient screen reader users, so use it rarely, and say “(opens in new tab)” in the link text when you do.",
      {code:'<a href="#hours">Opening hours</a>\n<h2 id="hours">Opening hours</h2>\n<a href="mailto:hello@example.org">Email us</a>', lang:"html"},
      "Navigation menus are usually a `<nav>` containing a list of links. Keep menu link text short and identical to the destination page’s main heading where possible, so people know they arrived.",
      "Check links after moving or renaming files: a renamed file breaks every relative link that pointed to it. Unit 5 covers checking a whole site for broken links.",
      "A link to another site must include the scheme. `href=\"example.org/menu\"` without `https://` is read as a relative path on **your** site, so the browser looks for a folder called example.org and the link breaks. Copy addresses from the browser’s address bar to get them exactly right, including capital letters in the path."
     ],
     pro:[
      "MDN notes that in current browsers `target=\"_blank\"` implicitly behaves like `rel=\"noopener\"`, so the opened page can’t control the opener through `window.opener`. Adding `rel=\"noopener\"` explicitly is harmless and protects older browsers; `rel=\"noreferrer\"` also withholds the Referer header.",
      "The `download` attribute suggests that the browser save the file rather than open it, optionally with a file name: `<a href=\"report.pdf\" download>`. It only works for same-origin URLs (and `blob:`/`data:` URLs).",
      "WCAG 2.2: 2.4.4 Link Purpose (In Context) at level A; 2.4.9 Link Purpose (Link Only) at AAA. Identical text for different destinations fails users who list links. An image link’s accessible name comes from the image’s alt.",
      "Don’t use links as buttons: `<a href=\"#\">` with JavaScript, or `javascript:` URLs, are announced as links and don’t respond to the keys people expect. Use `<button>` for actions and `<a href>` for navigation.",
      "Fragments match an element’s `id` exactly (case-sensitive). Duplicate ids make the target unpredictable and are a validation error.",
      "Browsers style links (underlined, a different colour for visited ones) by default. CSS can change this, but links in a block of text must stay distinguishable by more than colour alone: WCAG 2.2 1.4.1 Use of Color. Keeping the underline is the simplest way."
     ]
    },
    related:["file-paths-urls","url-anatomy","html-images","html-accessibility"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Creating links”"}],
    sources:[{t:"MDN: Creating links", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links"},{t:"MDN: <a>: The Anchor element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"}], checked:"2026-11"},

   {id:"html-images", title:"Images in HTML: alt, size and formats", aka:["img","src","alt","decorative image","figure","figcaption","width height","layout shift","JPEG","PNG","SVG","WebP","AVIF","hotlinking"], tags:["html","accessibility","media"],
    summary:"img needs src and alt (empty for decoration), real width and height to prevent layout shift, a sensible format and images you have the right to use.",
    levels:{
     starter:[
      {code:'<img src="images/cake.jpg" alt="A slice of lemon cake"\n     width="1200" height="900">', lang:"html"},
      "`src` is the image file’s address. `alt` is the text alternative: read aloud by screen readers, shown if the image fails, used by search engines.",
      {list:["Describe what the image contributes on **this** page, briefly.","Don’t start with “image of”.","Purely decorative images get `alt=\"\"` (empty), so screen readers skip them.","Never leave alt out: some screen readers then read the file name."]},
      "Only use images you own or have permission to use, such as Creative Commons images, credited.",
      "Before adding an image, ask: does it add information, or only decoration? Information gets descriptive alt; decoration gets `alt=\"\"`. If you can’t think what the alt should say, ask what you’d lose if the image vanished."
     ],
     builder:[
      "**Width and height:** give the image’s real pixel size. The browser reserves a space of the right shape before the file arrives, preventing layout shift. CSS can then scale it; proportions are kept. Don’t use the attributes to shrink a huge file: resize the file itself.",
      "**Figures:** `<figure>` with `<figcaption>` ties an image to its caption. Caption and alt shouldn’t repeat each other.",
      {table:[["Format","Best for"],["JPEG","Photos (lossy)"],["PNG","Screenshots, line art, transparency (lossless)"],["SVG","Logos, icons, diagrams (vector, any size)"],["WebP","Photos and graphics, smaller files (lossy or lossless)"],["AVIF","Photos and graphics, often smallest; keep a fallback"]]},
      "**Image links:** the alt names the destination (“Riverside Café home”). **Text in images:** repeat it in the alt.",
      {table:[["Same photo: a café’s front door with a ramp","Alt text"],["On the “Getting here” page","The café entrance, with a ramp to the left of the steps"],["In a gallery of the street","Riverside Café’s blue front door"],["Beside a heading that already says “Our café”, purely as decoration","`alt=\"\"`"]]},
      "Resize photos before using them: phone and camera photos are often several thousand pixels wide, far more than a page needs."
     ],
     pro:[
      "Since 2019–2020, browsers map the width and height attributes to a default CSS `aspect-ratio`, which is why reserving space works even when CSS sets `width: 100%; height: auto`. MDN recommends explicit dimensions for all images and especially lazy-loaded ones (`loading=\"lazy\"`).",
      "Responsive images: `srcset` and `sizes` offer several resolutions of the same image, and `<picture>` with `<source type=\"image/avif\">` offers alternative formats with a JPEG or PNG fallback in the `<img>`.",
      "MDN’s format guide notes support details: AVIF arrived in Chrome 85, Firefox 93, Safari 16.1 and Edge 121; WebP is supported by current major browsers, though Safari on macOS needs macOS 11 or later. SVG files can contain scripts, so treat SVGs from untrusted sources with care.",
      "Alt and WCAG 2.2: 1.1.1 Non-text Content (level A). Complex images such as charts need a short alt plus a longer description nearby (in text, a table or a linked page). The `title` attribute is not a substitute for alt: it’s shown only on mouse hover and inconsistently announced.",
      "Copyright applies automatically; no notice is required. MDN calls pointing `src` at someone else’s server without permission “hotlinking”: it uses their bandwidth and leaves your page at their mercy. See {{copyright-basics}} and {{creative-commons}} (which covers TASL attribution).",
      "`loading=\"lazy\"` asks the browser to wait until the reader scrolls near an image before downloading it; avoid it for images at the top of the page, which should appear straight away."
     ]
    },
    related:["alt-text","html-links","file-formats","creative-commons","html-accessibility"],
    read:[{book:"mdn", where:"Structuring content with HTML → “HTML images”"}],
    sources:[{t:"MDN: HTML images", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images"},{t:"MDN: <img>: The Image Embed element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"},{t:"MDN: Image file type and format guide", url:"https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types"}], checked:"2026-11"},

   {id:"semantic-html", title:"Semantic HTML and landmarks", aka:["semantic elements","header","nav","main","article","section","aside","footer","div","span","landmarks","ARIA roles"], tags:["html","accessibility"],
    summary:"Elements that describe meaning (header, nav, main, article, section, aside, footer) give pages landmarks; div and span are meaning-free wrappers.",
    levels:{
     starter:[
      "Semantic elements say what content **is**. Most pages have the same regions, and HTML has an element for each:",
      {list:["`<header>`: the top: site name, logo, often the menu.","`<nav>`: the main navigation links.","`<main>`: the content unique to this page (one per page).","`<aside>`: related but separate content.","`<footer>`: copyright, contact details."]},
      "Screen readers can jump between these regions, called landmarks, so people can skip straight to the main content. A page made only of `<div>` elements gives them nothing to jump to.",
      "These elements barely change how a page looks; their value is in what they tell software. Appearance comes from CSS.",
      {key:"Use the element that names the region; keep `<div>` for when nothing else fits."}
     ],
     builder:[
      {table:[["Element","Use when","Landmark"],["`<article>`","Self-contained: a post, event, card, comment","(none by default)"],["`<section>`","A themed part with a heading","region, if it has an accessible name"],["`<div>`","Only a wrapper for styling or layout","none"],["`<span>`","A wrapper inside a line of text","none"]]},
      "Tests: would you give it a heading? Then `<section>` or `<article>`. Would it make sense on its own, even elsewhere? `<article>`. Neither? `<div>`.",
      "`<header>` and `<footer>` can also appear inside an `<article>` or `<section>` (for a post’s title and date, say). There they’re ordinary groupings, not page-level landmarks.",
      {code:'<main>\n  <article>\n    <header>\n      <h2>Seed swap on Saturday</h2>\n      <p><time datetime="2026-04-11">11 April</time></p>\n    </header>\n    <p>Bring seeds, take seeds.</p>\n  </article>\n</main>', lang:"html"},
      "Here the `<header>` belongs to the article (its title and date), so it isn’t the page’s banner. One article can have its own header and footer.",
      "Don’t wrap everything in `<section>` either. A section without a heading is usually a sign that a `<div>` (for styling) or no wrapper at all is the better choice.",
      "A habit worth building: before typing `<div>`, ask what the content is. A heading with its text is a section; a stand-alone item is an article; a group of links to other pages is a nav; an image with a caption is a `<figure>`; contact details for the page’s owner can go in `<address>`. Only when the honest answer is “a box for styling” is `<div>` the right element."
     ],
     pro:[
      {table:[["Element","Implicit ARIA role"],["`<header>` (top level)","banner"],["`<nav>`","navigation"],["`<main>`","main"],["`<aside>`","complementary"],["`<footer>` (top level)","contentinfo"],["`<section>` with a name","region"],["`<form>` with a name","form"],["`<search>`","search"]]},
      "Per MDN, `<header>` and `<footer>` are generic (not landmarks) when inside `<article>`, `<aside>`, `<main>`, `<nav>` or `<section>`. A `<section>` becomes a region landmark only with an accessible name, for example `aria-labelledby` pointing at its heading.",
      "When a page has several `<nav>` elements, give each an accessible name (`aria-label=\"Breadcrumb\"`) so they can be told apart in a landmarks list.",
      "Only one `<main>` may be visible at a time, and the standard limits where it can sit: its only ancestors may be `<html>`, `<body>`, `<div>`, a `<form>` without an accessible name, and custom elements. So it must not be inside `<article>`, `<aside>`, `<footer>`, `<header>`, `<nav>` or `<section>`.",
      "The first rule of ARIA is to prefer native HTML elements over adding `role` attributes: `<nav>` beats `<div role=\"navigation\">`. Native elements bring keyboard behaviour and semantics for free.",
      "Landmarks work best in moderation: a page with a dozen unnamed regions is nearly as hard to navigate as one with none. Check what you’ve built in the accessibility tree in your browser’s developer tools, or with a screen reader’s landmarks list.",
      "Screen readers announce landmarks by their role, such as “navigation” or “main”; the exact wording differs between screen readers. That’s another reason to name repeated landmarks, such as two `<nav>` elements."
     ]
    },
    related:["headings-paragraphs","html-accessibility","html-lists"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Structuring documents”"}],
    sources:[{t:"MDN: Structuring documents", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"},{t:"MDN: <header>: The Header element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/header"},{t:"MDN: <section>: The Generic Section element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section"}], checked:"2026-11"},

   {id:"html-tables", title:"HTML data tables", aka:["table","tr","td","th","caption","scope","thead","tbody","layout tables"], tags:["html","accessibility","data"],
    summary:"Tables are for data in rows and columns: give them a caption, header cells with scope, and never use them for page layout.",
    levels:{
     starter:[
      "Use a table when information has rows and columns and each cell is understood by its headers: a timetable, a price comparison, results.",
      {list:["`<table>` wraps it; `<caption>` names it (first inside the table).","`<tr>` is a row; `<td>` a data cell; `<th>` a header cell."]},
      "Header cells let a screen reader say “Saturday, Closes, 14:00” instead of just “14:00”.",
      {warn:"Never use a table to arrange a page (photo beside text, sidebars). That’s CSS’s job."},
      "A quick test: if the information would make sense in a spreadsheet, with headings across the top or down the side, it’s probably a data table. If you only want things side by side, it isn’t.",
      {key:"Caption, header cells, scope: the three things every data table needs."}
     ],
     builder:[
      {code:'<table>\n  <caption>Repair prices</caption>\n  <tr>\n    <th scope="col">Repair</th>\n    <th scope="col">Price</th>\n  </tr>\n  <tr>\n    <th scope="row">Puncture</th>\n    <td>8.00</td>\n  </tr>\n</table>', lang:"html"},
      "`scope=\"col\"` marks a column header, `scope=\"row\"` a row header. `<thead>`, `<tbody>` and `<tfoot>` group rows (in that order); they help styling and long tables but don’t add accessibility on their own. `<tbody>` is created automatically if you leave it out.",
      "Cells can span: `colspan=\"2\"` across two columns, `rowspan=\"2\"` down two rows. Keep tables simple where you can; split a complicated table into two.",
      "Keep cells simple: one value per cell, and don’t merge cells for looks. On phones, wide tables are hard to read, so keep the number of columns small; Unit 3 shows how CSS can let a table scroll inside its own box instead of making the whole page scroll.",
      "Write numbers consistently (the same decimal places and units) so columns compare easily, and put units in the header (“Price (€)”) rather than in every cell.",
      "Make the caption specific: “Bus times from Mill Lane, weekdays” tells people more than “Timetable”. It is the table’s name for everyone, and screen readers usually announce it as someone enters the table.",
      "A table can be read cell by cell, row by row or column by column with a screen reader, and the headers are announced as the reader moves. That only works when header cells are real `<th>` elements, not bold `<td>`s."
     ],
     pro:[
      "For headers spanning groups, use `scope=\"colgroup\"` or `scope=\"rowgroup\"`. For irregular tables where scope isn’t enough, give header cells `id`s and list them in each data cell’s `headers` attribute.",
      "MDN’s three reasons against layout tables: they confuse screen reader output, produce hard-to-maintain markup, and aren’t responsive (tables size to their content rather than their container).",
      "The old `summary` attribute is obsolete; use `<caption>` or a nearby paragraph. Don’t put block content you want read as a heading into a caption; captions should be short.",
      "On narrow screens, wide tables need care: CSS can let the table scroll inside its own container or reflow rows into stacked cards. WCAG 2.2 1.4.10 Reflow allows two-dimensional scrolling for content such as data tables that genuinely needs it.",
      "WCAG 2.2 1.3.1 Info and Relationships is the criterion behind header cells: relationships visible in a grid must be programmatically available.",
      "Sortable tables need JavaScript; mark the currently sorted column header with `aria-sort` so screen readers can announce the order.",
      "Avoid empty header cells where possible (the top-left corner is a common one); if one is needed, a `<td>` there is clearer than an empty `<th>`. Keep captions short; put longer explanations in a paragraph before the table."
     ]
    },
    related:["semantic-html","html-accessibility","tidy-data"],
    read:[{book:"mdn", where:"Structuring content with HTML → “HTML table basics” and “HTML table accessibility”"}],
    sources:[{t:"MDN: HTML table basics", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"},{t:"MDN: HTML table accessibility", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility"}], checked:"2026-11"},

   {id:"html-forms", title:"HTML forms and labels", aka:["form","input","label","button","input types","required","placeholder","fieldset","legend","form validation"], tags:["html","accessibility","forms"],
    summary:"Every form control needs a connected label; choose input types for the data, add required where needed, and remember browser checks aren’t security.",
    levels:{
     starter:[
      {code:'<label for="email">Email address</label>\n<input type="email" id="email" name="email"\n       required>\n<button>Sign up</button>', lang:"html"},
      "The label’s `for` matches the input’s `id`. Then tapping the label focuses the field, and screen readers read the label.",
      {list:["`type` sets the kind of field: email, tel, date, number, checkbox and more.","`name` is what the value is called when it’s sent.","`required` stops the form being sent while the field is empty."]},
      {warn:"Grey placeholder text inside a box is not a label: it disappears as you type."},
      "Labels do three jobs: they make a bigger tap target, give the field a name that screen readers and voice control use, and remind people what the field is for after they’ve typed."
     ],
     builder:[
      {table:[["type","Notes"],["`text`","Default; unknown types fall back to text"],["`email`","Format check; @ key on many phones"],["`tel`","Phone keypad; no format check"],["`url`","Format check"],["`number`","`min`, `max`, `step`"],["`date`","Native date picker"],["`checkbox`","Several choices; each its own name"],["`radio`","One choice; same name for the group"],["`password`","Hidden characters"]]},
      "Group related radios or checkboxes in `<fieldset>` with a `<legend>` asking the question. A `<button>` inside a form submits it by default; use `type=\"button\"` for buttons that run JavaScript instead.",
      "Labels can also wrap the control (`<label><input type=\"checkbox\"> Yes</label>`). MDN recommends the explicit `for`/`id` form because some assistive technologies handle it more reliably.",
      "Data goes to the address in `action`, using `method` (GET, the default, puts it in the URL; POST sends it in the request body). Something on that server must process it.",
      "Good labels are short, visible, and placed just above or beside the field. Write “(optional)” or “(required)” in the label text: an asterisk alone isn’t clear to everyone.",
      "Two more controls you’ll meet: `<textarea>` for longer text such as a message, and `<select>` with `<option>` elements for a drop-down list. Both are labelled exactly like an `<input>`, with `for` and `id`. A drop-down hides its choices, so for two to five options, radio buttons are often easier to use."
     ],
     pro:[
      "Built-in constraint validation: `required`, `minlength`, `maxlength`, `min`, `max`, `step`, `pattern` and type checks. The browser blocks submission and shows a message; CSS can style `:invalid` and `:user-invalid`. It improves the experience, but anyone can bypass it, so the server must validate everything again.",
      "The `autocomplete` attribute with standard tokens (`name`, `email`, `tel`, `street-address`) lets browsers fill fields; it’s also how forms meet WCAG 2.2 1.3.5 Identify Input Purpose. WCAG 3.3.2 requires labels or instructions; 3.3.1 requires errors to be identified in text; 3.3.7 Redundant Entry and 3.3.8 Accessible Authentication are new in 2.2.",
      "Never use placeholder as the only label (MDN: it isn’t accessible and vanishes). If a hint is needed, put it in visible text connected with `aria-describedby`.",
      "Privacy and security: collect the minimum data; serve forms over HTTPS; never ask for passwords or payment details on a page you’re only practising with. See {{data-protection-laws}}.",
      "When a check fails, say what’s wrong and how to fix it in text next to the field (“Enter an email address, like name@example.org”), not with colour alone. Keep what people typed, so they don’t have to start again.",
      "Ask for less: every field is extra effort and extra data to protect.",
      "For groups of radio buttons or checkboxes, `<fieldset>` and `<legend>` give the group a name (the question), and each control keeps its own label (the answer)."
     ]
    },
    related:["html-accessibility","semantic-html","html-validation"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Forms and buttons in HTML”"}],
    sources:[{t:"MDN: Forms and buttons in HTML", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms"},{t:"MDN: <input>: The HTML Input element", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input"}], checked:"2026-11"},

   {id:"html-accessibility", title:"Accessible HTML: quick checks", aka:["web accessibility","a11y","WCAG","screen reader","keyboard test","accessibility checklist"], tags:["html","accessibility"],
    summary:"Most accessibility comes from using the right HTML: title and lang, ordered headings, alt text, clear links, labels, keyboard access and zoom.",
    levels:{
     starter:[
      "Accessibility means people can use your page however they browse: with a screen reader, a keyboard, voice control, zoom, a small phone or a slow connection. Most of it comes free when you use the right HTML elements.",
      {ol:["A specific `<title>` and the right `lang`.","One `<h1>` and headings in order.","Alt text on every image (empty for decoration).","Link text that makes sense alone.","A label for every form field.","Everything reachable with the [[kbd:Tab]] key.","Still usable at 200% zoom."]},
      {key:"Right element, real text: the two habits behind most accessible pages."},
      "It helps far more people than you might expect: someone with a broken arm, someone in bright sunlight, someone on an old phone, someone getting older. Clear headings help skimmers, labels help on small screens, alt text helps when images fail to load."
     ],
     builder:[
      "How to check each point quickly: read only the headings (do they work as contents?); read only the link texts; tap each label (does it reach its field?); press [[kbd:Tab]] through the page on a computer and watch the focus outline; zoom to 200%.",
      "Free automated tools such as WAVE (WebAIM) or the Lighthouse panel in Chrome’s developer tools find many issues (missing alt, missing labels, low contrast) but can’t judge whether alt text or link text is meaningful. Treat a clean automated report as a start, not a finish.",
      "Trying a screen reader for a few minutes is eye-opening. All major systems include one: Narrator (Windows), VoiceOver (macOS and iPhone), TalkBack (Android), ChromeVox (ChromeOS). Learn how to turn it off before you start.",
      "See Digital Foundations’ {{document-accessibility}}: the same principles apply to documents.",
      "Contrast matters too: WCAG 2.2 asks for a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (level AA). Unit 3 shows how to check colours.",
      "Repeated menus are tiring to get past on every page. Landmarks and headings let screen reader users skip them; a “Skip to main content” link at the very top (`<a href=\"#main\">`, pointing at an `id` on `<main>`) helps sighted keyboard users too. WCAG 2.2 2.4.1, “Bypass Blocks”, asks for a way to skip blocks that repeat on many pages."
     ],
     pro:[
      "The standard is WCAG 2.2 (W3C, 2023), organised under four principles (perceivable, operable, understandable, robust), with levels A, AA and AAA. Many laws and policies reference level AA. Criteria this unit touches: 1.1.1 Non-text Content, 1.3.1 Info and Relationships, 2.4.2 Page Titled, 2.4.4 Link Purpose (In Context), 2.4.6 Headings and Labels, 3.1.1 Language of Page, 3.3.2 Labels or Instructions, 4.1.2 Name, Role, Value.",
      "WCAG 2.2 marked the old 4.1.1 Parsing criterion obsolete and removed it, because assistive technology no longer parses HTML itself: it reads the tree the browser builds. Validation still matters: broken nesting changes that tree, and so the structure assistive technology receives.",
      "Native elements carry their roles, names and keyboard behaviour into the accessibility tree that assistive technology reads. Chrome, Edge and Firefox developer tools can show this tree (an Accessibility pane or Accessibility Inspector), which is the fastest way to see what a screen reader will get.",
      "Rules of thumb (one `<h1>`, no skipped levels, short alt) are guidance, not WCAG requirements. Explain them as good practice.",
      "Checklists and tools catch common problems; testing with disabled people catches the rest. Where you can, ask real users of assistive technology to try key tasks, such as finding opening hours or sending a form.",
      "Accessibility is part of quality, not an extra step at the end: fixing structure while you write HTML costs minutes; retrofitting a finished site costs days."
     ]
    },
    related:["semantic-html","headings-paragraphs","html-images","html-forms","html-validation","alt-text"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Headings and paragraphs” (section “Why do we need semantics?”) and “Structuring documents”"}],
    sources:[{t:"MDN: Headings and paragraphs (Why do we need semantics?)", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"},{t:"MDN: <a> element, Accessibility section", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"},{t:"MDN: <img> element, Accessibility section", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"}], checked:"2026-11"},

   {id:"html-validation", title:"Validating HTML", aka:["W3C validator","Markup Validation Service","Nu Html Checker","HTML errors","debugging HTML"], tags:["html","tools"],
    summary:"A validator checks HTML against the standard and lists hidden mistakes; fix the first error first, then do the human checks it can’t.",
    levels:{
     starter:[
      "Browsers repair broken HTML without telling you. A validator doesn’t: it lists every place your code breaks the rules.",
      "The free W3C Markup Validation Service is at validator.w3.org. Choose **Validate by Direct Input**, paste your whole page, and press **Check**. It works in any browser, including on a phone.",
      "A green message saying there are no errors means your HTML follows the rules. It doesn’t mean the page is good: the validator can’t tell whether your alt text or link text makes sense.",
      "Running the validator often while you learn is a fast way to learn the rules: each message names the problem and the line it’s on."
     ],
     builder:[
      "Three ways in: **Validate by URI** (a published page), **File Upload**, **Direct Input** (paste the full document, not just the body).",
      "Typical errors: stray or missing end tags, misnested elements, a missing `<title>`, an `<img>` without `alt`, duplicate `id`s, a list inside a list without an `<li>`, unknown attributes, bad `lang` values.",
      {tip:"Fix the first error, then re-check. One unclosed element can produce many later messages that vanish once it’s fixed."},
      "Messages come as **Error**, **Warning** or **Info**. Errors break the rules; warnings and info notes are advice. Each message gives the line and column, and a snippet of your code.",
      "Each message says what’s wrong in words, gives the line number and highlights your code. For a published page, Validate by URI checks exactly what the server sends, which can differ from your local file.",
      "Validate early and often, not only at the end: a page with three errors is quick to fix; a page with forty, all caused by one early mistake, is discouraging. If a message makes no sense, search for its exact wording on MDN or a web search; many people have met it before."
     ],
     pro:[
      "The service at validator.w3.org links to the W3C’s newer non-DTD-based checker (the Nu Html Checker at validator.w3.org/nu/), which checks HTML against the current living standard. The Nu checker is open source and can be run locally or in build pipelines.",
      "MDN’s “Debugging HTML” explains why validation still matters even though HTML “doesn’t suffer from syntax errors”: the browser’s repairs follow fixed rules, which may not match your intent, and the result is what CSS, JavaScript and assistive technology work from.",
      "Code editors can lint HTML as you type (for example with extensions in VS Code), and browser developer tools show the repaired tree. Use all three: editor hints while writing, the validator before publishing, devtools when something looks wrong.",
      "WCAG 2.2 removed 4.1.1 Parsing as a requirement, but clean markup remains the foundation of 1.3.1 and 4.1.2.",
      "A validator checks one page at a time. On a larger site, check each template or page type. Treat the result as one tool among several: some errors display fine today and break later, and some valid pages are still hard to use.",
      "Validators know the rules of HTML, not your intentions. A `<div>` used as a button is valid; it just doesn’t work with a keyboard. Pair validation with the manual checks in {{html-accessibility}}."
     ]
    },
    related:["html-elements","html-accessibility","browser-devtools"],
    read:[{book:"mdn", where:"Structuring content with HTML → “Debugging HTML”"}],
    sources:[{t:"The W3C Markup Validation Service", url:"https://validator.w3.org/"},{t:"MDN: Debugging HTML", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"}], checked:"2026-11"}
  ],
  terms:[
   {id:"element", term:"Element", def:"One labelled piece of an HTML page: an opening tag, its content and a closing tag, such as `<p>Hello</p>`. Void elements have only the opening tag.", codex:"html-elements"},
   {id:"tag", term:"Tag", def:"The marker in angle brackets that starts or ends an element, such as `<p>` or `</p>`. Two tags plus the content between them make one element.", codex:"html-elements"},
   {id:"opening-tag", term:"Opening tag", def:"The tag that starts an element: its name in angle brackets, plus any attributes, such as `<a href=\"menu.html\">`.", codex:"html-elements"},
   {id:"closing-tag", term:"Closing tag", def:"The tag that ends an element: a slash and the element’s name, such as `</a>`.", codex:"html-elements"},
   {id:"attribute", term:"Attribute", def:"Extra information about an element, written inside its opening tag as name=\"value\", such as `href=\"menu.html\"` or `alt=\"A lemon cake\"`.", codex:"html-elements"},
   {id:"boolean-attribute", term:"Boolean attribute", def:"An attribute that works like a switch: present means on, absent means off, whatever value it’s given. Examples: `required`, `checked`, `disabled`.", codex:"html-elements"},
   {id:"void-element", term:"Void element", def:"An element that can’t have content, so it has no closing tag, such as `<br>`, `<img>`, `<input>` and `<meta>`.", codex:"html-elements"},
   {id:"nesting", term:"Nesting", def:"Putting elements inside other elements. Each element must close inside the one that contains it, like boxes inside boxes: last opened, first closed.", codex:"html-elements"},
   {id:"html-comment", term:"HTML comment", def:"A note in the code, written between `<!--` and `-->`. Browsers don’t show it on the page, but anyone can read it in the source.", codex:"html-elements"},
   {id:"character-reference", term:"Character reference", def:"A code starting with & and ending with ; that stands for one character, such as `&lt;` for < or `&amp;` for &. Used for characters that would otherwise be read as code.", codex:"html-elements"},
   {id:"doctype", term:"Doctype", def:"The line `<!doctype html>` at the very top of a page. It tells the browser to use modern standards mode instead of quirks mode.", codex:"html-document-structure"},
   {id:"quirks-mode", term:"Quirks mode", def:"A compatibility mode browsers use for pages without a doctype, imitating very old browsers’ layout behaviour so ancient pages still look as they did.", codex:"html-document-structure"},
   {id:"head-element", term:"Head (HTML)", def:"The `<head>` part of a page: information about the page, such as its title, character set and linked stylesheets. Nothing in it is shown in the page itself.", codex:"html-document-structure"},
   {id:"body-element", term:"Body (HTML)", def:"The `<body>` part of a page: everything people see and use, from headings and text to images, links and forms.", codex:"html-document-structure"},
   {id:"heading-element", term:"Heading element", def:"One of `<h1>` to `<h6>`, which mark headings and build the page’s outline. The number is the level in the outline, not the size.", codex:"headings-paragraphs"},
   {id:"semantic-element", term:"Semantic element", def:"An HTML element that says what its content means, such as `<h2>`, `<nav>` or `<strong>`, as opposed to `<div>` or `<span>`, which mean nothing.", codex:"semantic-html"},
   {id:"anchor", term:"Anchor element (a)", def:"The `<a>` element, which makes a link when it has an `href` attribute. Its content is the link text.", codex:"html-links"},
   {id:"href", term:"href", def:"The attribute on a link that holds its destination: a full address, a relative path, a #fragment, or a scheme such as `mailto:` or `tel:`.", codex:"html-links"},
   {id:"url-fragment", term:"Fragment (#)", def:"The part of an address after #, which points to the element with that id on the page, such as `#hours`.", codex:"html-links"},
   {id:"src", term:"src", def:"The attribute that gives the address of the file to load, as in `<img src=\"images/cake.jpg\">` or `<script src=\"app.js\">`.", codex:"html-images"},
   {id:"alt-attribute", term:"alt attribute", def:"The text alternative for an image, read by screen readers and shown if the image doesn’t load. Empty (`alt=\"\"`) marks an image as decorative.", codex:"html-images"},
   {id:"decorative-image", term:"Decorative image", def:"An image that adds nothing the text doesn’t already say, such as a divider or a mood photo. Give it `alt=\"\"` so screen readers skip it.", codex:"html-images"},
   {id:"landmark", term:"Landmark", def:"A major region of a page, such as the header, navigation, main content or footer, that assistive technology can list and jump to. Created by elements like `<nav>` and `<main>`.", codex:"semantic-html"},
   {id:"form-control", term:"Form control", def:"Any part of a form that people fill in or operate: text boxes, checkboxes, radio buttons, drop-down lists and buttons.", codex:"html-forms"},
   {id:"label-element", term:"Label (form)", def:"The `<label>` element: the visible name of a form control, connected to it by matching `for` and `id`. Tapping it focuses the control.", codex:"html-forms"},
   {id:"validator", term:"Validator", def:"A tool that checks code against the rules of its standard and lists every mistake, such as the W3C Markup Validation Service for HTML.", codex:"html-validation"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u2-q01", lesson:"t2u2-l1", level:1, q:"In `<a href=\"menu.html\">Our menu</a>`, what is `href=\"menu.html\"`?", options:[
     {t:"An attribute: a name and a value inside the opening tag", ok:true, why:"Attributes add information about an element; this one says where the link goes."},
     {t:"The element’s content", why:"The content is “Our menu”, the text between the tags."},
     {t:"The closing tag", why:"The closing tag is `</a>`, with a slash."},
     {t:"A separate element", why:"It has no tags of its own; it lives inside the `<a>` opening tag."}
   ]},
   {id:"t2u2-q02", lesson:"t2u2-l1", level:2, q:"Which line is correctly nested?", options:[
     {t:"`<p>Open <em>every</em> day</p>`", ok:true, why:"`<em>` opens and closes entirely inside the paragraph: last opened, first closed."},
     {t:"`<p>Open <em>every day</p></em>`", why:"The paragraph closes while `<em>` is still open: the tags overlap."},
     {t:"`<em><p>Open every day</em></p>`", why:"`<em>` opened first, so it must close last, after `</p>`. Here they cross."},
     {t:"`<p>Open <em>every day</p>`", why:"`<em>` is never closed, so the browser has to guess where the emphasis ends."}
   ]},
   {id:"t2u2-q03", lesson:"t2u2-l1", level:1, q:"Which of these is a void element (it has no closing tag)?", options:[
     {t:"`<img>`", ok:true, why:"An image is described entirely by attributes, so it has no content and no closing tag."},
     {t:"`<p>`", why:"A paragraph wraps text, so it has content and a closing tag."},
     {t:"`<title>`", why:"The title wraps text: `<title>Menu</title>`."},
     {t:"`<script>`", why:"`<script>` always needs `<\/script>`, even when it loads a file with `src`."}
   ]},
   {id:"t2u2-q04", lesson:"t2u2-l1", level:2, q:"What does the browser show for `<p>Fresh    bread,` followed by three blank lines and `daily.</p>`?", options:[
     {t:"Fresh bread, daily. (on one line, single spaces)", ok:true, why:"All runs of spaces, tabs and line breaks collapse into one space when shown."},
     {t:"The text with four spaces and three blank lines kept", why:"Spacing is only kept inside `<pre>`. Elsewhere it collapses."},
     {t:"Two paragraphs", why:"Only a new `<p>` element starts a new paragraph; blank lines in the file don’t."},
     {t:"An error message about spacing", why:"HTML never shows error messages on the page; and extra spacing isn’t an error anyway."}
   ]},
   {id:"t2u2-q05", lesson:"t2u2-l1", level:3, q:"Amara’s page about maths for children says `<p>Is 3<b or b<3?</p>`, and the text after “3” vanishes. What’s the fix?", options:[
     {t:"Write `&lt;` instead of `<`: `3&lt;b`", ok:true, why:"A `<` followed by a letter starts a tag, so `<b` was read as the start of a bold element. The reference `&lt;` shows the symbol safely."},
     {t:"Put the whole sentence in quotation marks", why:"Quotation marks are just text; the browser still reads `<b` as a tag."},
     {t:"Add more spaces around the `<`", why:"`3 < b` with spaces happens to survive, but it relies on a parsing detail and `3 <b` would still break. `&lt;` is reliable."},
     {t:"Use a capital B", why:"Element names aren’t case-sensitive, so `<B` would also start a bold element."}
   ]},
   {id:"t2u2-q06", lesson:"t2u2-l1", level:2, q:"Kenji wants an unticked checkbox and writes `<input type=\"checkbox\" checked=\"false\">`. What do visitors see?", options:[
     {t:"A ticked checkbox, because `checked` is a boolean attribute and is present", ok:true, why:"Boolean attributes are on whenever they’re present, whatever the value. Remove `checked` to leave the box unticked."},
     {t:"An unticked checkbox, because the value is false", why:"The value of a boolean attribute is ignored; only presence matters."},
     {t:"An error message", why:"Browsers don’t show error messages for HTML. A validator would flag the odd value, though."},
     {t:"No checkbox at all", why:"The input still appears; the attribute only affects whether it starts ticked."}
   ]},
   {id:"t2u2-q07", lesson:"t2u2-l1", level:1, q:"What is an HTML comment for?", options:[
     {t:"A note for people reading the code, which the browser doesn’t show", ok:true, why:"Comments, written `<!-- … -->`, are for explanations and reminders in the source."},
     {t:"Hiding passwords from visitors", why:"Comments are visible to anyone who views the source. Never put secrets in them."},
     {t:"Adding a speech bubble on the page", why:"Comments produce nothing on the page at all."},
     {t:"Making the browser load faster", why:"Comments don’t change speed in any useful way; they’re for humans."}
   ]},
   {id:"t2u2-q08", lesson:"t2u2-l1", level:3, q:"Priya’s paragraph reads `<p>Order online at <a href=\"https://example.org/order>our shop</a>. Delivery is free.</p>` Everything after “Order online at” disappears, including the next sentence. Why?", options:[
     {t:"The `href` value is missing its closing quote, so the rest of the file is swallowed into the attribute", ok:true, why:"Without the second `\"`, the browser keeps reading the attribute value until it finds one, taking the link and text with it. Adding the quote fixes it."},
     {t:"Links can’t appear inside paragraphs", why:"Links inside paragraphs are completely normal."},
     {t:"The word “Delivery” is reserved in HTML", why:"Ordinary words are never reserved; HTML only reacts to markup characters."},
     {t:"The address must be relative", why:"Absolute addresses are fine in `href`; the problem is the missing quote."}
   ]},
   {id:"t2u2-q09", lesson:"t2u2-l1", level:1, q:"Which is true about `<br>` and `<br />`?", options:[
     {t:"In HTML they mean exactly the same; the slash is optional and ignored", ok:true, why:"The slash on void elements is a leftover from XHTML. Both are valid; pick one style."},
     {t:"Only `<br />` is valid in modern HTML", why:"`<br>` is perfectly valid; it’s what MDN and the HTML standard use in most examples."},
     {t:"`<br />` makes two line breaks", why:"Both make a single line break."},
     {t:"`<br>` needs a closing `</br>`", why:"`<br>` is a void element: it never has a closing tag."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u2-q10", lesson:"t2u2-l2", level:1, q:"What must the first line of an HTML page be?", options:[
     {t:"`<!doctype html>`", ok:true, why:"The doctype comes first and keeps the browser in standards mode."},
     {t:"`<html>`", why:"The html element comes right after the doctype."},
     {t:"`<head>`", why:"The head is inside the html element, after the doctype and the html start tag."},
     {t:"`<title>`", why:"The title belongs inside the head."}
   ]},
   {id:"t2u2-q11", lesson:"t2u2-l2", level:1, q:"Which of these belongs in the `<head>`?", options:[
     {t:"`<meta charset=\"utf-8\">`", ok:true, why:"The character set is information about the page, so it goes in the head, first."},
     {t:"`<h1>Opening hours</h1>`", why:"Headings are visible content: they belong in the body."},
     {t:"`<img src=\"cafe.jpg\" alt=\"Our café\">`", why:"Images shown on the page go in the body."},
     {t:"`<p>Welcome!</p>`", why:"Paragraphs are visible content, so they belong in the body."}
   ]},
   {id:"t2u2-q12", lesson:"t2u2-l2", level:2, q:"What does `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` do?", options:[
     {t:"Tells mobile browsers to lay the page out at the device’s real width, at normal zoom", ok:true, why:"Without it, phones lay pages out for a desktop width (often 980 pixels) and shrink them."},
     {t:"Makes the page load faster on phones", why:"It doesn’t change download speed; it changes the layout width."},
     {t:"Stops people zooming in", why:"That’s what `user-scalable=no` does, and you shouldn’t use it. This line doesn’t block zoom."},
     {t:"Sets the page’s language", why:"Language is set with the `lang` attribute on `<html>`."}
   ]},
   {id:"t2u2-q13", lesson:"t2u2-l2", level:2, q:"Which is the most useful page title for a café’s page about opening hours?", options:[
     {t:"`<title>Opening hours · Riverside Café</title>`", ok:true, why:"Specific, with the most specific part first, so it’s still clear when a tab cuts it short."},
     {t:"`<title>Home</title>`", why:"“Home” doesn’t say what the page is, and many sites use it."},
     {t:"`<title>Page 2</title>`", why:"A number tells people nothing about the content."},
     {t:"`<title>Riverside Café Riverside Café Riverside Café</title>`", why:"Repeating the name adds nothing and hides what this particular page is about."}
   ]},
   {id:"t2u2-q14", lesson:"t2u2-l2", level:2, q:"Hana’s page is in Japanese. Which opening tag is right?", options:[
     {t:"`<html lang=\"ja\">`", ok:true, why:"`ja` is the language code for Japanese. Screen readers, translation tools and search engines use it."},
     {t:"`<html lang=\"japanese\">`", why:"`lang` takes a language code, not the language’s name."},
     {t:"`<html lang=\"jp\">`", why:"JP is the country code for Japan; the language code is `ja`."},
     {t:"`<html language=\"ja\">`", why:"The attribute is called `lang`."}
   ]},
   {id:"t2u2-q15", lesson:"t2u2-l2", level:3, q:"Dmitri removed the first line of his page, `<!doctype html>`, to “tidy up”. Now some sizes and spacing look slightly different. What happened?", options:[
     {t:"The browser switched to quirks mode, which uses old layout rules", ok:true, why:"Without a doctype, browsers imitate very old browsers. Putting the line back restores standards mode."},
     {t:"The browser couldn’t find the body", why:"The browser creates html, head and body whether or not the tags are there; the doctype is about mode, not structure."},
     {t:"The character encoding changed", why:"The encoding comes from the charset declaration, not the doctype."},
     {t:"Nothing changed; it’s a coincidence", why:"The doctype has one job, choosing standards mode, and removing it does change some layout rules."}
   ]},
   {id:"t2u2-q16", lesson:"t2u2-l2", level:3, q:"Sione’s page shows “PiÃ±a colada” instead of “Piña colada”. The file was saved as UTF-8. What is most likely missing?", options:[
     {t:"`<meta charset=\"utf-8\">` in the head", ok:true, why:"Without it, the browser may guess an older encoding and read UTF-8’s two-byte ñ as two separate characters."},
     {t:"`lang=\"es\"` on the html element", why:"`lang` affects pronunciation and translation, not how bytes become characters."},
     {t:"A character reference for every accented letter", why:"References would work around it, but with UTF-8 declared they’re unnecessary."},
     {t:"The viewport line", why:"The viewport controls layout width on phones, not characters."}
   ]},
   {id:"t2u2-q17", lesson:"t2u2-l2", level:1, q:"Which line correctly connects a stylesheet called style.css?", options:[
     {t:"`<link rel=\"stylesheet\" href=\"style.css\">`", ok:true, why:"`<link>` with `rel=\"stylesheet\"` and an `href` is the standard way, placed in the head."},
     {t:"`<style src=\"style.css\">`", why:"`<style>` holds CSS written directly in the page; it has no `src`."},
     {t:"`<link src=\"style.css\">`", why:"`<link>` uses `href`, and needs `rel` to say what kind of link it is."},
     {t:"`<css href=\"style.css\">`", why:"There’s no `<css>` element."}
   ]},
   {id:"t2u2-q18", lesson:"t2u2-l2", level:2, q:"Why is `defer` useful in `<script src=\"app.js\" defer><\/script>`?", options:[
     {t:"The script runs after the whole page has been read, so it can find every element", ok:true, why:"Without it, a script in the head runs before the body exists and can fail to find elements."},
     {t:"It stops the script from ever running", why:"Deferred scripts do run, just later."},
     {t:"It makes the script optional for old browsers", why:"`defer` is about timing, not optionality."},
     {t:"It lets you leave out the closing `<\/script>` tag", why:"`<script>` always needs its closing tag."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u2-q19", lesson:"t2u2-l3", level:1, q:"How should you choose between `<h2>` and `<h3>`?", options:[
     {t:"By the heading’s position in the page’s outline", ok:true, why:"Levels describe structure: an h3 is a subsection of the h2 above it. Size comes from CSS."},
     {t:"By how big you want the text", why:"Size is a default style that CSS can change; choosing by size breaks the outline."},
     {t:"Alternate them for variety", why:"Levels carry meaning; alternating would make nonsense of the outline."},
     {t:"Use `<h3>` for shorter headings", why:"Length doesn’t matter; position in the outline does."}
   ]},
   {id:"t2u2-q20", lesson:"t2u2-l3", level:2, q:"A page goes `<h1>`, `<h2>`, `<h4>`, `<h2>`. What’s the problem?", options:[
     {t:"It skips from h2 to h4; the h4 should be an h3", ok:true, why:"Going down, levels shouldn’t be skipped, or listeners may think they missed a section."},
     {t:"There must never be two h2s on a page", why:"Several h2s are normal: one per main section."},
     {t:"An h2 can’t follow an h4", why:"Going back up any number of levels is fine."},
     {t:"The h1 should come last", why:"The h1 is the main heading and normally comes first."}
   ]},
   {id:"t2u2-q21", lesson:"t2u2-l3", level:1, q:"Which list type fits the steps of a recipe?", options:[
     {t:"`<ol>`", ok:true, why:"Order matters in steps, so an ordered list is right, and its numbers stay correct when steps move."},
     {t:"`<ul>`", why:"Unordered lists are for sets where order doesn’t matter, such as ingredients."},
     {t:"Several `<p>` elements starting with “1.”, “2.”", why:"Typed numbers only look like a list; software sees separate paragraphs."},
     {t:"`<dl>`", why:"Description lists pair terms with descriptions; steps aren’t terms."}
   ]},
   {id:"t2u2-q22", lesson:"t2u2-l3", level:2, q:"Where does a nested list go?", options:[
     {t:"Inside the `<li>` it belongs to, after that item’s text", ok:true, why:"A list’s only children are `<li>` elements, so a sub-list sits inside an item."},
     {t:"Directly inside the outer `<ul>`, between two `<li>` elements", why:"That’s invalid: a `<ul>` can only contain `<li>` elements directly."},
     {t:"After the outer list has closed", why:"Then it isn’t nested; it’s a separate list."},
     {t:"In the head", why:"Lists are visible content, so they belong in the body."}
   ]},
   {id:"t2u2-q23", lesson:"t2u2-l3", level:3, q:"Lucía writes “Contains nuts” on her bakery’s product page and wants it to stand out for safety. Which is best?", options:[
     {t:"`<strong>Contains nuts.</strong>`, placed near the product name, not only in fine print", ok:true, why:"`<strong>` marks real importance, and placing the warning prominently means it works even when emphasis isn’t announced."},
     {t:"`<em>Contains nuts.</em>`", why:"`<em>` is stress emphasis in speech, not importance or urgency."},
     {t:"`<b>Contains nuts.</b>`", why:"`<b>` draws attention **without** adding importance, which is the opposite of what a safety warning needs."},
     {t:"Red text with no other change", why:"Colour alone doesn’t reach screen reader users or everyone with colour blindness, and adds no meaning."}
   ]},
   {id:"t2u2-q24", lesson:"t2u2-l3", level:2, q:"When is `<br>` the right choice?", options:[
     {t:"For line breaks that are part of the content, such as lines of an address or a poem", ok:true, why:"That’s exactly its purpose."},
     {t:"To separate paragraphs", why:"Separate paragraphs need separate `<p>` elements."},
     {t:"To add space above a heading", why:"Spacing is a job for CSS."},
     {t:"To start a new list item", why:"List items are `<li>` elements."}
   ]},
   {id:"t2u2-q25", lesson:"t2u2-l3", level:2, q:"Which element fits the title of a book mentioned in a review?", options:[
     {t:"`<cite>`", ok:true, why:"`<cite>` marks the title of a creative work: a book, film, song or article."},
     {t:"`<blockquote>`", why:"That’s for a long quotation, not a title."},
     {t:"`<abbr>`", why:"That’s for abbreviations."},
     {t:"`<h1>`", why:"A heading names a section of your page, not a work you mention."}
   ]},
   {id:"t2u2-q26", lesson:"t2u2-l3", level:3, q:"Oluwaseun’s club page looks well organised, but a member using a screen reader can’t jump between sections. The page uses `<p class=\"big\">` for every section title. What should he change?", options:[
     {t:"Turn the section titles into real heading elements (`<h2>`, `<h3>`) and style them with CSS", ok:true, why:"Screen readers navigate by heading elements. Styling a paragraph never makes it a heading."},
     {t:"Make the paragraph text even bigger", why:"Size is invisible to a screen reader; only the element type matters."},
     {t:"Add “Section:” at the start of each title", why:"The words help a little when read, but the reader still can’t jump to them."},
     {t:"Ask the member to change screen readers", why:"No screen reader can jump to headings that don’t exist in the code."}
   ]},
   {id:"t2u2-q27", lesson:"t2u2-l3", level:1, q:"What does WCAG 2.2 success criterion 1.3.1, “Info and Relationships”, ask for?", options:[
     {t:"Structure people can see, like headings, lists and tables, must also exist in the code", ok:true, why:"That way software, such as screen readers, can pass the structure on."},
     {t:"Every page must have exactly six heading levels", why:"Most pages use two or three levels; there’s no such rule."},
     {t:"Text must be at least 16 pixels", why:"WCAG has no fixed text-size rule; 1.3.1 is about structure."},
     {t:"Pages must load within a set time", why:"1.3.1 isn’t about speed."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u2-q28", lesson:"t2u2-l4", level:2, q:"From `events/quiz.html`, which `href` reaches `index.html` at the top of the site?", options:[
     {t:"`../index.html`", ok:true, why:"`..` goes up one folder, from events to the top, where index.html is."},
     {t:"`index.html`", why:"That looks in the events folder, where there’s no index.html."},
     {t:"`events/index.html`", why:"From inside events, this looks for events/events/index.html."},
     {t:"`.index.html`", why:"A single dot with no slash is part of a file name, not a path step."}
   ]},
   {id:"t2u2-q29", lesson:"t2u2-l4", level:1, q:"Which link text is best?", options:[
     {t:"“Download the club rules (PDF, 200 KB)”", ok:true, why:"It makes sense out of context, and warns that it’s a file with its size."},
     {t:"“Click here”", why:"Out of context, it says nothing about the destination."},
     {t:"“Link to the rules”", why:"Screen readers already say “link”; the word adds noise."},
     {t:"“https://example.org/rules-26.pdf”", why:"A raw address is long to listen to and doesn’t say what the file is."}
   ]},
   {id:"t2u2-q30", lesson:"t2u2-l4", level:1, q:"What does `<a href=\"#prices\">` link to?", options:[
     {t:"The element with `id=\"prices\"` on the same page", ok:true, why:"A fragment on its own points to an id on the current page."},
     {t:"A file called prices.html", why:"That would be `href=\"prices.html\"`."},
     {t:"A site called prices.com", why:"An external site needs a full address starting with https://."},
     {t:"Nothing: # links are broken", why:"Fragment links work whenever an element with the matching id exists."}
   ]},
   {id:"t2u2-q31", lesson:"t2u2-l4", level:2, q:"What’s the difference between `alt=\"\"` and no alt attribute at all?", options:[
     {t:"Empty alt marks the image as decorative so screen readers skip it; missing alt may make some read the file name", ok:true, why:"They send different messages. Empty alt is a deliberate choice; missing alt is an omission, and validators flag it."},
     {t:"There’s no difference", why:"MDN notes that with no alt, some screen readers announce the file name; empty alt tells them to skip."},
     {t:"Empty alt hides the image from sighted visitors", why:"The image still shows; alt only affects the text alternative."},
     {t:"Missing alt is better for search engines", why:"Search engines use alt text to understand images; leaving it out gives them nothing."}
   ]},
   {id:"t2u2-q32", lesson:"t2u2-l4", level:3, q:"Ana’s site logo is an image inside a link to the home page, with `alt=\"\"`. A screen reader user hears “link” with no name, or the web address read out. What’s the fix?", options:[
     {t:"Give the image alt text naming the destination, such as `alt=\"Riverside Café home\"`", ok:true, why:"For an image link, the alt becomes the link’s name. Empty alt leaves the link nameless."},
     {t:"Add `title=\"Home\"` to the image", why:"`title` is announced inconsistently and shown only on mouse hover; alt is the reliable fix."},
     {t:"Remove the alt attribute completely", why:"Then some screen readers read the file name, which is no better."},
     {t:"Make the logo bigger", why:"Size doesn’t give the link a name."}
   ]},
   {id:"t2u2-q33", lesson:"t2u2-l4", level:2, q:"Why give an image its real `width` and `height`?", options:[
     {t:"So the browser reserves the right space before the image loads and the page doesn’t jump", ok:true, why:"The browser uses the two numbers to work out the shape and keep space for it, preventing layout shift."},
     {t:"To make a large file download faster", why:"The full file still downloads. Resize the file itself to make it smaller."},
     {t:"Because the image won’t show without them", why:"Images show without them, but the page may jump as they load."},
     {t:"To stop people zooming in on the image", why:"They don’t affect zoom."}
   ]},
   {id:"t2u2-q34", lesson:"t2u2-l4", level:1, q:"Which format suits a photo of a market stall?", options:[
     {t:"JPEG, or WebP or AVIF for smaller files", ok:true, why:"Photos suit lossy formats, which keep files small with little visible loss."},
     {t:"SVG", why:"SVG draws shapes from instructions; it isn’t suited to photographs."},
     {t:"Plain text", why:"A photo needs an image format."},
     {t:"PNG, always", why:"PNG works but is lossless, so photos become much larger files than necessary."}
   ]},
   {id:"t2u2-q35", lesson:"t2u2-l4", level:3, q:"Tomás adds `target=\"_blank\"` to every link on his volunteer site “so people don’t leave”. Several older volunteers say the Back button “stopped working”. What’s the best advice?", options:[
     {t:"Let links open in the same tab by default; use new tabs only for good reasons, and say so in the link text", ok:true, why:"A new tab breaks the Back button and can disorient people. When it’s genuinely helpful, “(opens in new tab)” warns them."},
     {t:"Keep it, and tell volunteers to use the tab bar instead", why:"The problem is caused by the design, not the people. Taking away the Back button makes the site harder for everyone."},
     {t:"Add `rel=\"noopener\"` and the Back button will work", why:"`noopener` is about security; it doesn’t change the new tab’s missing history."},
     {t:"Use `mailto:` links instead", why:"`mailto:` starts an email; it’s for a different purpose entirely."}
   ]},
   {id:"t2u2-q36", lesson:"t2u2-l4", level:3, q:"Mei wants to use a Creative Commons BY photo from Wikimedia Commons on her hiking club’s site. What does the licence require?", options:[
     {t:"Credit: title, author, source and licence, for example in a caption", ok:true, why:"CC BY allows reuse with attribution. The TASL pattern covers what’s needed."},
     {t:"Nothing at all", why:"That’s CC0 or public domain. CC BY requires credit."},
     {t:"Paying a fee to the photographer", why:"Creative Commons licences are free to use under their conditions."},
     {t:"Linking `src` directly to the Wikimedia file instead of copying it", why:"Hotlinking doesn’t replace attribution and makes her page depend on another server."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u2-q37", lesson:"t2u2-l5", level:1, q:"How many visible `<main>` elements should a page have?", options:[
     {t:"One", ok:true, why:"`<main>` holds the content unique to the page; there’s one visible main per page."},
     {t:"One per section", why:"Sections go inside main; they don’t each get their own."},
     {t:"None: it’s optional decoration", why:"It’s optional to the browser, but it creates the main landmark people jump to."},
     {t:"As many as there are articles", why:"Articles sit inside the single main."}
   ]},
   {id:"t2u2-q38", lesson:"t2u2-l5", level:2, q:"A block of “related posts” links beside a blog post belongs in which element?", options:[
     {t:"`<aside>`", ok:true, why:"Related but separate content is complementary: `<aside>`."},
     {t:"`<main>`", why:"The post is the main content; the related links are secondary."},
     {t:"`<header>`", why:"The header is for introductory content such as the site name."},
     {t:"`<table>`", why:"Tables are for data in rows and columns, not a box of links."}
   ]},
   {id:"t2u2-q39", lesson:"t2u2-l5", level:1, q:"What does `<th scope=\"col\">Price</th>` tell a screen reader?", options:[
     {t:"“Price” is the header for the cells in its column", ok:true, why:"Then each price is announced with its column header."},
     {t:"“Price” is a normal data cell", why:"`<th>` marks a header; `<td>` is for data."},
     {t:"The column should be sorted by price", why:"`scope` describes relationships; it doesn’t sort."},
     {t:"Price is the table’s caption", why:"The caption goes in `<caption>`, first inside `<table>`."}
   ]},
   {id:"t2u2-q40", lesson:"t2u2-l5", level:3, q:"Dmitri lays out his whole page with an invisible table: logo in one cell, menu in another, text in a third. What’s the main problem?", options:[
     {t:"Screen readers may announce it as a data table, it’s hard to maintain, and it won’t adapt to phones", ok:true, why:"These are MDN’s three reasons against layout tables. CSS layout does the job properly."},
     {t:"Tables can’t contain images", why:"Table cells can contain images; the problem is using tables for layout at all."},
     {t:"Browsers no longer support tables", why:"Tables are fully supported, for data."},
     {t:"Nothing, as long as it has a caption", why:"A caption would make it worse: it would announce a layout as if it were data."}
   ]},
   {id:"t2u2-q41", lesson:"t2u2-l5", level:2, q:"What connects a `<label>` to an `<input>`?", options:[
     {t:"The label’s `for` matches the input’s `id`", ok:true, why:"Then tapping the label focuses the input, and screen readers announce the label. Wrapping the input inside the label also works."},
     {t:"The label’s `for` matches the input’s `name`", why:"`for` points to `id`; `name` is for the submitted data."},
     {t:"Placing them on the same line", why:"Visual position doesn’t create a connection in the code."},
     {t:"A `placeholder` with the same words", why:"A placeholder isn’t a label and disappears as people type."}
   ]},
   {id:"t2u2-q42", lesson:"t2u2-l5", level:2, q:"Which input type gives a phone keypad but does no format checking?", options:[
     {t:"`type=\"tel\"`", ok:true, why:"Phone formats differ so much by country that browsers don’t validate them."},
     {t:"`type=\"email\"`", why:"Email fields do check the format, for an @ and more."},
     {t:"`type=\"url\"`", why:"URL fields check that the value looks like a full address."},
     {t:"`type=\"date\"`", why:"Date fields give a date picker, not a keypad."}
   ]},
   {id:"t2u2-q43", lesson:"t2u2-l5", level:3, q:"Fatima added `required` and `type=\"email\"` to her sign-up form and says, “Now nobody can send bad data.” Is she right?", options:[
     {t:"No: browser checks help honest visitors but can be bypassed, so whatever receives the data must check it too", ok:true, why:"Client-side checks are for convenience. MDN: you need both client-side and server-side validation."},
     {t:"Yes: browsers always enforce `required`", why:"Anyone can send data without using the form, or edit the page in developer tools."},
     {t:"Yes, but only on phones", why:"There’s no difference by device; client checks are bypassable everywhere."},
     {t:"No: `required` only works in one browser", why:"`required` works in all current browsers; the issue is that it can be bypassed."}
   ]},
   {id:"t2u2-q44", lesson:"t2u2-l5", level:3, q:"Kenji pastes his page into the W3C validator and gets 14 errors. What should he do first?", options:[
     {t:"Fix the first error, then check again", ok:true, why:"One early mistake, such as an unclosed element, often causes many later messages that disappear once it’s fixed."},
     {t:"Start with the last error and work backwards", why:"Later errors may be side effects of earlier ones; start at the top."},
     {t:"Ignore them, since the page looks fine", why:"Browsers repair mistakes silently; the structure may still be wrong for screen readers, CSS and JavaScript."},
     {t:"Delete the doctype so there are fewer errors", why:"Removing the doctype adds problems (quirks mode) and an error of its own."}
   ]},
   {id:"t2u2-q45", lesson:"t2u2-l5", level:2, q:"Which check can a validator **not** do for you?", options:[
     {t:"Decide whether alt text and link text are meaningful", ok:true, why:"`alt=\"photo\"` and “click here” are valid HTML; judging meaning takes a person."},
     {t:"Find an `<img>` with no alt attribute", why:"Validators do report a missing alt attribute."},
     {t:"Find a missing `<title>`", why:"A missing title is an error the validator reports."},
     {t:"Find wrongly nested tags", why:"Misnesting is one of the main things validators catch."}
   ]}
  ]
});
