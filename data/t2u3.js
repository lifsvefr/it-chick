/* Track 2 · Unit 3 · Styling with CSS */
ICA.addUnit({
  id:"t2u3", track:"t2", n:3, title:"Styling with CSS", icon:"🎨",
  blurb:"How CSS turns plain HTML into a designed page: rules and selectors, why one style wins over another, colour and type that everyone can read, the box every element sits in, and layouts with flexbox and grid that fit a phone and a wide screen alike.",
  goals:[
    "Write CSS rules with type, class, id, descendant and grouped selectors, and link a stylesheet the recommended way",
    "Work out which rule wins a conflict using source order, specificity and inheritance, and check it in DevTools",
    "Choose colours that meet WCAG contrast minimums, set up a font stack, and size text in rem so it respects the reader’s settings",
    "Predict an element’s size from its content, padding, border and margin, and centre a block on the page",
    "Lay out rows with flexbox and grids with grid, and make a page responsive with the viewport tag, relative units and mobile-first media queries"
  ],
  read:[
    {book:"mdn", where:"Core modules → “CSS styling basics” (What is CSS?, Getting started with CSS, Basic CSS selectors, Combinators, The box model, Handling conflicts, CSS values and units, Debugging CSS)", note:"MDN’s own beginner pathway, with small “Test your skills” exercises along the way that you can do in the browser."},
    {book:"mdn", where:"Core modules → “CSS text styling” (Fundamental text and font styling, Web fonts)"},
    {book:"mdn", where:"Core modules → “CSS layout” (Flexbox, CSS grid layout, Responsive web design, Media query fundamentals)", note:"The Floats and Positioning pages in the same module are worth a look later; floats are no longer the main way to lay out pages."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u3-l1", title:"How CSS works: rules and selectors", minutes:55,
   goals:[
     "Read and write a CSS rule, naming its selector, declarations, properties and values",
     "Choose type, class, id, descendant and grouped selectors, and predict which elements each one styles",
     "Connect CSS to a page with a linked stylesheet, a style element or a style attribute, and explain why a linked file is preferred",
     "Write CSS comments, and predict what the browser does with a typo or a missing semicolon"
   ],
   hook:{q:"Nadia’s stylesheet has five declarations for her headings. One of them has a typo: `colr: navy;`. What does the browser do?", options:["Shows an error message and stops loading the page","Ignores the whole stylesheet","Skips that one declaration and applies the other four","Guesses she meant `color` and makes the headings navy"], answer:2, reveal:"The browser quietly skips the declaration it can’t understand and carries on with the rest. That’s forgiving, but it also means nothing warns you: the headings simply aren’t navy. This lesson shows how CSS rules are built, so you can spot mistakes like this yourself."},
   learn:[
    {h:"What CSS is for", body:[
      {lead:"HTML says what each part of a page is. CSS says how it should look."},
      "In Unit 2 you wrote HTML: headings, paragraphs, lists, links. Even without any styling, the page has a look: headings are big and bold, links are blue and underlined, and everything runs down the left side in one font. That look comes from the browser’s own built-in stylesheet, which every browser applies to every page.",
      "**CSS** (Cascading Style Sheets) is the language you use to change that look: colours, fonts, spacing, borders, and where boxes sit on the screen. Think of a recipe card. The HTML is the recipe itself: the title, the ingredient list, the steps. The CSS is the house style for the café’s menus: which font, which colours, how much space around each part. You can change the house style without rewriting a single recipe.",
      "That separation is the point. One stylesheet can style a hundred pages, so a community garden group can change its whole site’s colours by editing one file. And the HTML stays clean and meaningful, which helps screen readers, search engines and anyone who has to edit it later.",
      {key:"HTML for meaning and structure; CSS for presentation. Keep them in separate files whenever you can."}
    ]},
    {h:"The anatomy of a rule", body:[
      "A stylesheet is a list of [[rule|rules]]. Here is one:",
      {code:"h1 {\n  color: teal;\n  font-size: 2.5rem;\n}", lang:"css", cap:"Makes every `<h1>` on the page teal and 2.5 times the root text size."},
      "Every rule has the same parts:",
      {list:[
        "The [[selector]] (`h1`) picks **which elements** the rule applies to.",
        "The curly braces `{ }` hold the **declaration block**.",
        "Inside are [[declaration|declarations]], each one a [[property]] and a [[css-value|value]] joined by a colon: `color: teal`.",
        "A semicolon ends each declaration. It’s optional after the very last one, but always writing it saves trouble when you add a line later."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><rect class="d-rose" x="10" y="14" width="112" height="32" rx="6" stroke-width="2"/><text x="66" y="35" text-anchor="middle">.menu-price</text><text x="132" y="35">{</text><text class="s" x="160" y="27">selector: which</text><text class="s" x="160" y="42">elements to style</text><rect class="d-ink" x="22" y="62" width="160" height="72" rx="8" stroke-width="1.5" stroke-dasharray="5 4"/><rect class="d-lup" x="30" y="70" width="58" height="32" rx="6" stroke-width="2"/><text x="59" y="91" text-anchor="middle">color</text><text x="94" y="91">:</text><rect class="d-sage" x="104" y="70" width="56" height="32" rx="6" stroke-width="2"/><text x="132" y="91" text-anchor="middle">teal</text><text x="166" y="91">;</text><text class="s" x="59" y="122" text-anchor="middle">property</text><text class="s" x="132" y="122" text-anchor="middle">value</text><text x="194" y="90">one declaration</text><text class="s" x="194" y="106">property: value;</text><rect class="d-panel" x="30" y="148" width="152" height="32" rx="6" stroke-width="1.5"/><text x="106" y="169" text-anchor="middle">font-weight: bold;</text><text x="194" y="162">another</text><text x="194" y="177">declaration</text><text x="10" y="210">}</text><text class="s" x="10" y="240">Everything between { and } is the</text><text class="s" x="10" y="256">declaration block. Selector + block = a rule.</text><text class="s" x="10" y="280">A colon joins property and value;</text><text class="s" x="10" y="296">a semicolon ends each declaration.</text></svg>', alt:"A CSS rule taken apart. The selector .menu-price, outlined in rose, is followed by an opening brace. Inside, a dashed outline surrounds one declaration: the property color in a lupine box, a colon, the value teal in a sage box, and a semicolon. Below it is another declaration, font-weight: bold;, then the closing brace. Notes say everything between the braces is the declaration block, and a selector plus its block is a rule.", cap:"The parts of a rule. `.menu-price` selects every element with `class=\"menu-price\"`."},
      "Spaces and line breaks between the parts don’t matter to the browser: `h1{color:teal}` works. But one declaration per line, indented by two spaces, is far easier to read and to fix, so that’s the style used throughout this track.",
      "Property names and values must be spelled exactly as CSS defines them, and CSS uses American spelling: `color`, not `colour`; `center`, not `centre`."
    ]},
    {h:"Selectors: choosing what to style", body:[
      "Selectors are how you point at parts of your page. Five kinds cover most everyday work. Here’s a small café page to aim at:",
      {code:'<h1 id="top">Sunrise Café</h1>\n<p class="intro">Baked fresh daily.</p>\n<ul class="menu">\n  <li>Toast <span class="price">3.50</span></li>\n  <li>Soup <span class="price special">5.00</span></li>\n</ul>\n<p>Open daily from 7.</p>', lang:"html", label:"HTML"},
      {code:'/* type: every <p> */\np {\n  line-height: 1.5;\n}\n\n/* class: every .price element */\n.price {\n  font-weight: bold;\n}\n\n/* id: the element with id="top" */\n#top {\n  color: darkgreen;\n}\n\n/* descendant: li inside .menu */\n.menu li {\n  margin-bottom: 0.5rem;\n}\n\n/* group: both h1 and h2 */\nh1,\nh2 {\n  font-family: Georgia, serif;\n}', lang:"css", weblab:"wl-class", cap:"Both prices turn bold, both paragraphs get roomier lines, and only the heading turns dark green."},
      {table:[
        ["Selector","Written as","Selects"],
        ["Type","`p`","Every element of that type"],
        ["Class","`.price`","Every element whose [[class-attribute|class]] list includes `price`"],
        ["ID","`#top`","The one element with `id=\"top\"`"],
        ["Descendant","`.menu li`","`li` elements anywhere inside `.menu`"],
        ["Group","`h1, h2`","Each selector in the list"]
      ]},
      "A few details that trip people up:",
      {list:[
        "**An element can have several classes**, separated by spaces: `class=\"price special\"` matches both `.price` and `.special`. That’s why classes are the everyday workhorse: you can reuse them on as many elements as you like and combine them.",
        "**An [[id-attribute|id]] must be unique** on the page. Ids are useful as link targets (`href=\"#top\"`), but for styling, a class is usually the better choice. Lesson 2 shows why.",
        "**The space matters.** `.menu li` (with a space) means “an `li` inside `.menu`”. `li.special` (no space) means “an `li` that itself has the class `special`”. `h1, h2` (a comma) means “`h1` and also `h2`”.",
        "**Class names are case-sensitive.** `.price` doesn’t match `class=\"Price\"`. Pick a style, such as lowercase words joined with hyphens (`menu-price`), and stick to it."
      ]},
      {lab:"wl-class", t:"Practise: give an element a class and style it"}
    ]},
    {h:"Where CSS goes", body:[
      "There are three places to put CSS. All three work; one is the professional default.",
      {h:"1. A separate file, linked from the page (preferred)"},
      "Save your rules in a plain-text file ending in `.css`, such as `styles.css`, and connect it with a `<link>` element inside the page’s `<head>`:",
      {code:'<head>\n  <meta charset="utf-8">\n  <title>Sunrise Café</title>\n  <link rel="stylesheet" href="styles.css">\n</head>', lang:"html", cap:"`rel=\"stylesheet\"` says what the file is; `href` says where it is, here in the same folder as the page."},
      "The `href` is a path, just like a link’s. If the file is in a folder called `css`, write `href=\"css/styles.css\"`. A wrong path is the most common reason a whole stylesheet seems to do nothing.",
      {h:"2. A `<style>` element in the head"},
      {code:"<style>\n  p {\n    color: darkslategray;\n  }\n</style>", lang:"html", cap:"Rules inside `<style>` apply only to this one page."},
      "Handy for a quick experiment or a single-page project, but every page needs its own copy, so a site-wide change means editing every page.",
      {h:"3. A style attribute on one element (inline)"},
      {code:'<p style="color: crimson; font-weight: bold;">\n  Closed on Monday\n</p>', lang:"html", cap:"An inline style has no selector and no braces: just declarations."},
      "Inline styles affect one element only, mix presentation into your HTML, and are very hard to override from a stylesheet (Lesson 2 explains why). MDN calls them bad practice for everyday use. You’ll still meet them in HTML emails and in styles that JavaScript sets.",
      {table:[
        ["Where","Reaches","Best for"],
        ["Linked `.css` file","Every page that links it","Real sites: the default"],
        ["`<style>` element","One page","Quick tests, one-page demos"],
        ["`style` attribute","One element","Rare cases; avoid"]
      ]},
      {tip:"A linked stylesheet also loads faster on later pages: the browser keeps a copy in its cache and reuses it instead of downloading it again."}
    ]},
    {h:"Comments: notes for people", body:[
      "A comment is text the browser ignores. In CSS it starts with `/*` and ends with `*/`, and it can span several lines:",
      {code:"/* Brand colours: change them here */\nh1 {\n  color: teal; /* matches the logo */\n}", lang:"css"},
      "Use comments to label sections of a long stylesheet, to explain a choice that isn’t obvious, or to switch a declaration off while you test something.",
      {warn:"`//` is **not** a comment in CSS (it is in JavaScript). The browser treats it as broken CSS, and it swallows whatever comes next: inside a rule it eats the following declaration, and before a rule it breaks that whole rule. Only `/* … */` is safe."}
    ]},
    {h:"When there’s a typo", body:[
      "CSS is forgiving: when the browser meets something it doesn’t understand, it skips it and carries on. There’s no error message on the page. The style just doesn’t appear, which can be puzzling until you know the rules for what gets skipped.",
      {code:".notice {\n  colr: navy;\n  background-color: lightyellow;\n  padding: 1rem;\n}", lang:"css", cap:"`colr` isn’t a property, so only that line is skipped. The notice still gets its yellow background and padding; its text keeps the default colour."},
      {table:[
        ["Mistake","What the browser skips"],
        ["Misspelled property (`colr`, `colour`)","That one declaration"],
        ["Invalid value (`text-align: centre`, `18 px` with a space)","That one declaration"],
        ["Missing semicolon","That declaration **and the next one**, which run together into one invalid value"],
        ["`//` used as a comment","The declaration or rule that follows it"],
        ["One invalid selector in a group (`h1, p:hovr`)","The **whole rule**, for every selector in the group"]
      ]},
      "The missing semicolon is the sneakiest, because the line that looks broken isn’t the only one affected:",
      {code:"h1 {\n  color: navy\n  font-size: 3rem;\n  text-align: center;\n}", lang:"css", weblab:"wl-fix-css", cap:"Without the semicolon after `navy`, the browser reads `color: navy font-size: 3rem`, which is nonsense, so both declarations are skipped. Only `text-align: center` works."},
      "If a closing brace `}` is missing, the browser reads the rules that follow as if they were still inside the unfinished block, so they stop working the way you meant. Missing braces are worth checking first when several rules in a row fail at once.",
      {ex:"1. Is the stylesheet linked, with the right path?\n2. Does the selector match? (dot for class,\n   hash for id, same spelling and case)\n3. Are the property and value spelled right?\n4. Is there a semicolon after each declaration\n   and a } after each rule?", label:"Worked example: a style isn’t showing up", mono:true},
      "Lesson 2 adds the next question (“is another rule winning?”) and shows how your browser’s developer tools point straight at skipped declarations.",
      {lab:"wl-fix-css", t:"Practise: find and fix the typos and missing semicolons"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A typo breaks the whole page.”** Usually only the declaration with the typo is skipped. The exceptions are missing semicolons and braces, and invalid selectors in a group.",
        "**“`#id` and `.class` are interchangeable.”** An id is for one unique element; a class can be reused anywhere and combined. Prefer classes for styling.",
        "**“`.menu li` and `.menu, li` are the same.”** The space means “inside”; the comma means “and also”. `.menu, li` styles the menu itself **and** every list item on the page.",
        "**“British spellings work too.”** CSS only understands `color`, `center`, `gray` (and also `grey` in colour names, which is a special case).",
        "**“Inline styles are simpler, so they’re better for beginners.”** They’re quicker for one element and much harder to manage for a whole site."
      ]}
    ]}
   ],
   try:[
    {id:"t2u3-l1-x1", type:"match", q:"Here’s a rule from a bakery’s stylesheet: `.menu-price { color: teal; }`. Match each piece to its name.", pairs:[
      [".menu-price","Selector","It comes before the braces and picks which elements the rule applies to: here, everything with the class `menu-price`."],
      ["color","Property","The property names what you’re changing. It comes before the colon."],
      ["teal","Value","The value is what you set the property to. It comes after the colon."],
      ["color: teal;","Declaration","A property, a colon, a value and a semicolon together make one declaration."]
    ]},
    {id:"t2u3-l1-x2", type:"spot", q:"Tomás’s stylesheet has the rule `.price { font-weight: bold; }`. Tap every element in his page (which starts with `<!doctype html>`) that the rule makes bold.", ask:"the rule styles", mono:true, parts:[
      {t:"<p class=\"price\">4.00</p>", flag:true, why:"Its class list is exactly `price`, so `.price` matches."},
      "\n",
      {t:"<p class=\"Price\">2.50</p>", flag:false, why:"Class names are case-sensitive: `Price` with a capital P isn’t `price`."},
      "\n",
      {t:"<span class=\"sale price\">1.99</span>", flag:true, why:"An element can have several classes separated by spaces. `price` is one of them, so it matches."},
      "\n",
      {t:"<p id=\"price\">3.00</p>", flag:false, why:"This is an id, not a class. It would need the selector `#price`."},
      "\n",
      {t:"<div class=\"prices\">…</div>", flag:false, why:"`prices` is a different class name. A class selector matches whole class names only, not part of one."}
    ]},
    {id:"t2u3-l1-x3", type:"mcq", q:"Mei wants to style only the links inside her site’s `<nav>`, not the links in the rest of the page. Which selector does that?", options:[
      {t:"`nav a`", ok:true, why:"The space makes it a descendant selector: any `a` that sits somewhere inside a `nav`."},
      {t:"`nav, a`", why:"The comma makes a group: it styles the `nav` itself **and** every link on the whole page."},
      {t:"`nav.a`", why:"With no space, this means a `nav` element that has the class `a`. It doesn’t select any links."},
      {t:"`a nav`", why:"This is reversed: it means a `nav` inside a link, which isn’t what she has."}
    ]},
    {id:"t2u3-l1-x4", type:"mcq", q:"Oluwaseun’s community garden site has 12 pages. He wants all the headings in the same dark green, and next year he’ll probably change the colour again. Where should the CSS go?", options:[
      {t:"In one `styles.css` file linked from every page with `<link rel=\"stylesheet\">`", ok:true, why:"One rule in one file reaches all 12 pages, so next year’s change is a single edit. The browser also caches the file between pages."},
      {t:"In a `<style>` element at the top of each page", why:"It works, but there would be 12 copies to keep identical, and next year he’d have to edit all 12."},
      {t:"In a `style` attribute on every heading", why:"That’s one copy per heading, possibly dozens, mixed into the HTML. It’s the hardest of the three to change."},
      {t:"It doesn’t matter, all three are equally easy to maintain", why:"They all display the same, but they differ hugely in how many places you must edit for one change."}
    ]},
    {id:"t2u3-l1-x5", type:"spot", q:"Priya’s rule isn’t working as she expected. Tap every declaration the browser will **skip**.", ask:"the browser skips", mono:true, parts:[
      ".notice {\n  ",
      {t:"colour: navy;", flag:true, why:"CSS uses the American spelling `color`. `colour` isn’t a property, so this declaration is skipped."},
      "\n  ",
      {t:"font-size: 18 px;", flag:true, why:"A number and its unit must touch: `18px`. With a space, the value is invalid and skipped."},
      "\n  ",
      {t:"margin: 0 auto;", flag:false, why:"Valid: top and bottom margins of 0, left and right `auto`. The space here separates two values, which is correct."},
      "\n  ",
      {t:"text-align: centre;", flag:true, why:"The keyword is `center`. `centre` is an invalid value, so the declaration is skipped."},
      "\n  ",
      {t:"background-color: lightyellow;", flag:false, why:"A valid property and a valid named colour."},
      "\n  ",
      {t:"padding: 1rem", flag:false, why:"Valid. The semicolon after the last declaration is optional, because the closing brace ends it."},
      "\n}"
    ]},
    {id:"t2u3-l1-x6", type:"mcq", q:"Kenji’s heading rule is below. Which declarations does the browser actually apply?\n`h1 {`\n`  color: navy`\n`  font-size: 3rem;`\n`  text-align: center;`\n`}`", options:[
      {t:"Only `text-align: center`", ok:true, why:"With no semicolon after `navy`, the browser reads `color: navy font-size: 3rem` as one declaration with a nonsense value and skips it. Parsing restarts after that semicolon, so `text-align` works."},
      {t:"All three; the browser adds the missing semicolon", why:"Browsers don’t repair missing semicolons. They read on until the next semicolon, which joins two lines into one invalid declaration."},
      {t:"`font-size` and `text-align`, but not `color`", why:"It looks as if only the first line is broken, but the missing semicolon pulls the next line into the same invalid declaration, so `font-size` is lost too."},
      {t:"None of them; the whole rule is skipped", why:"Problems inside a declaration block only affect the declarations involved. Whole rules are dropped for things like an invalid selector."}
    ]},
    {id:"t2u3-l1-x7", type:"sort", q:"Sort these into valid CSS comments and things that are not CSS comments.", buckets:["A CSS comment","Not a CSS comment"], items:[
      {t:"`/* header styles */`", b:0, why:"Starts with `/*` and ends with `*/`: the only comment syntax CSS has."},
      {t:"`// header styles`", b:1, why:"That’s JavaScript’s line comment. In CSS it’s broken syntax that swallows the next declaration or rule."},
      {t:"A comment that opens with `/*` on one line and closes with `*/` two lines later", b:0, why:"CSS comments can span several lines, as long as they end with `*/`."},
      {t:"`<!-- header styles -->`", b:1, why:"That’s an HTML comment. It works in HTML files, not inside a stylesheet."},
      {t:"`/* logo colour */` at the end of a line, after `color: teal;`", b:0, why:"A comment can sit at the end of a line, after the declaration it explains."}
    ]}
   ],
   apply:{intro:"You can do every task here on a phone, in the Web Lab. The computer steps are an optional extra that shows how real sites are organised.", tasks:[
     {t:"Style a page with three kinds of selector", how:["Open the Web Lab class challenge linked in this lesson, or any blank Web Lab page.","In the HTML, write an `<h1>`, two paragraphs, and give one paragraph `class=\"intro\"`.","In the CSS, add a type rule for `p`, a class rule for `.intro`, and a rule for `h1`. Change a colour or a font size in each.","Change `.intro` to `.Intro` in the CSS and watch the style disappear. Change it back."], write:"Which selector did you use for each change, and what happened when you changed the case?"},
     {t:"Make a page with a linked stylesheet (optional, on a computer)", how:{
       win:["Make a folder called `cafe`. In your code editor (from Unit 1), create `index.html` inside it with a basic page, and add `<link rel=\"stylesheet\" href=\"styles.css\">` inside `<head>`.","Create `styles.css` in the same folder with one rule, such as `h1 { color: teal; }`. If you use Notepad, choose **Save as type: All files** so it doesn’t become `styles.css.txt`.","Double-click `index.html` to open it in your browser. Edit the CSS, save, then press [[kbd:F5]] in the browser to reload."],
       mac:["Make a folder called `cafe`. In your code editor (from Unit 1), create `index.html` with a basic page, and add `<link rel=\"stylesheet\" href=\"styles.css\">` inside `<head>`.","Create `styles.css` in the same folder with one rule, such as `h1 { color: teal; }`. If you use TextEdit, first choose **Format → Make Plain Text**, otherwise it saves formatted text that browsers can’t read as CSS.","Double-click `index.html` to open it in your browser. Edit the CSS, save, then press [[kbd:Cmd]] + [[kbd:R]] in the browser to reload."],
       chromeos:["Open a browser-based code editor that can open local folders, such as vscode.dev in Chrome, and open (or create) a folder called `cafe` in **My files**.","Create `index.html` with a basic page and `<link rel=\"stylesheet\" href=\"styles.css\">` inside `<head>`, and `styles.css` with `h1 { color: teal; }`.","Open **Files**, double-click `index.html` to view it in Chrome, and press [[kbd:Ctrl]] + [[kbd:R]] to reload after each change."],
       phone:["Phones don’t make it easy to keep two linked files side by side. Use the Web Lab instead: its separate HTML and CSS boxes work like a page and its linked stylesheet."]
     }},
     {t:"Break it on purpose", how:["In your Web Lab page or your `styles.css`, remove one semicolon in the middle of a rule. Which declarations stop working?","Put it back, then misspell a property (`colr`). What still works?","Finally, write `// test` on a line just above a rule. What happens to that rule? Replace it with `/* test */` and check again."], write:"Write down what each mistake broke. Did any result surprise you?"}
   ], proof:"A styled page (in the Web Lab or on your computer) that uses a type, a class and a grouped or descendant selector, plus your notes on what a missing semicolon, a misspelled property and a `//` comment each broke."},
   read:[
     {book:"mdn", where:"CSS styling basics → “What is CSS?” and “Getting started with CSS”", note:"“Getting started with CSS” walks through linking a stylesheet, internal and inline styles, and comments."},
     {book:"mdn", where:"CSS styling basics → “Basic CSS selectors” and “Combinators” (the descendant combinator)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u3-l2", title:"Why isn’t my style working? The cascade", minutes:55,
   goals:[
     "Explain how the cascade picks one winning value for each property when rules conflict",
     "Count specificity in three columns (ID, class, type) and compare two selectors",
     "Predict which properties are inherited, and why a direct rule always beats an inherited value",
     "Explain what `!important` does and why it causes more problems than it solves",
     "Use the browser’s developer tools to see which declaration won and which were crossed out"
   ],
   hook:{q:"A page has `<p class=\"note\">Bring gloves</p>`. The stylesheet says `.note { color: green; }` first, and then, further down, `p { color: purple; }`. What colour is the text?", options:["Green","Purple","A mix of the two","The browser’s default black, because the rules conflict"], answer:0, reveal:"Green. You might expect the later rule to win, and order does matter, but only between equally specific selectors. A class selector is more specific than a type selector, so `.note` wins wherever it appears. This lesson shows exactly how the browser decides."},
   learn:[
    {h:"Conflicts are normal", body:[
      {lead:"On a real page, several rules often want to style the same element. The browser needs one answer for every property."},
      "Say your stylesheet makes all paragraphs grey, but one paragraph also has the class `note`, which makes text dark red. Both rules match that paragraph. Which colour does it get?",
      "The process that settles this is called the [[cascade]], and it’s the “cascading” in Cascading Style Sheets. It works **one property at a time**, not rule against rule:",
      {code:"p {\n  color: dimgray;\n  font-size: 1.125rem;\n}\n\n.note {\n  color: darkred;\n}", lang:"css", cap:"For `<p class=\"note\">`, the colour comes from `.note` (dark red), and the font size still comes from `p` (18 px), because nothing else sets it."},
      "So a “losing” rule doesn’t vanish. Only its conflicting declarations lose; everything else it sets still applies. Keep that in mind when you read the rest of this lesson.",
      "The browser asks its questions in this order, strongest first:",
      {ol:[
        "Is one of the declarations marked `!important`? (Rare; see below.)",
        "Is one of them in an inline `style` attribute?",
        "Which selector is more **specific**?",
        "If they’re equally specific, which comes **later** in the CSS?"
      ]},
      "Two background facts sit underneath all of this: any rule you write beats the browser’s built-in styles, and a value inherited from a parent element is weaker than any rule that targets the element directly."
    ]},
    {h:"Order: the last one wins (when it’s a tie)", body:[
      "When two selectors are equally specific, the declaration that comes later wins:",
      {code:".button {\n  background-color: steelblue;\n}\n\n.button {\n  background-color: seagreen;\n}", lang:"css", cap:"Buttons are sea green: the second rule comes later."},
      "“Later” covers the order of files too. If a page links `base.css` and then `theme.css`, the rules in `theme.css` count as coming after the ones in `base.css`. A `<style>` element placed after the `<link>` comes later again.",
      {tip:"This is why you’ll often see a site link a general stylesheet first and a more specific one after it. The later file can adjust the earlier one without fighting it."}
    ]},
    {h:"Specificity: counting the selector", body:[
      "[[specificity|Specificity]] measures how precisely a selector points at an element. An id points at one element; a class at a group; a type at every element of its kind. The more precise selector wins, wherever it sits in the file.",
      "You can work it out by counting the pieces of a selector into three columns:",
      {table:[
        ["Column","Counts one for each…"],
        ["ID","id selector, such as `#top`"],
        ["Class","class (`.note`), attribute selector (`[type=\"email\"]`) or pseudo-class (`:hover`)"],
        ["Type","type selector (`p`, `li`) or pseudo-element (`::before`)"]
      ]},
      "Write the counts as three numbers, ID-CLASS-TYPE. The universal selector `*` and the spaces, commas and other combinators between selectors count nothing.",
      {table:[
        ["Selector","ID-CLASS-TYPE"],
        ["`p`","0-0-1"],
        ["`article p`","0-0-2"],
        ["`.note`","0-1-0"],
        ["`p.note`","0-1-1"],
        ["`nav a:hover`","0-1-2"],
        ["`#intro`","1-0-0"],
        ["`#intro .note`","1-1-0"]
      ]},
      "To compare two selectors, look at the ID column first. If one has more, it wins, full stop. Only if they tie do you move to the Class column, and only if that ties too do you look at Type. It works like a medal table: one gold medal ranks above any number of silvers. So `#intro` (1-0-0) beats `.page .main .content .note` (0-4-0).",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="t2u3ar1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><path class="d-ink" d="M16,252 L16,26" stroke-width="2" marker-end="url(#t2u3ar1)"/><text class="s" x="26" y="30">stronger</text><rect class="d-rose" x="106" y="20" width="224" height="32" rx="6" stroke-width="2"/><text x="116" y="41">!important</text><text class="s" x="320" y="41" text-anchor="end">beats all; avoid</text><rect class="d-rose" x="90" y="60" width="240" height="32" rx="6" stroke-width="1.5"/><text x="100" y="81">inline style</text><text class="s" x="320" y="81" text-anchor="end">attribute</text><rect class="d-gold" x="74" y="100" width="256" height="32" rx="6" stroke-width="2"/><text x="84" y="121">#top</text><text x="320" y="121" text-anchor="end">1-0-0</text><rect class="d-lup" x="58" y="140" width="272" height="32" rx="6" stroke-width="2"/><text x="68" y="161">.price   :hover</text><text x="320" y="161" text-anchor="end">0-1-0</text><rect class="d-sage" x="42" y="180" width="288" height="32" rx="6" stroke-width="2"/><text x="52" y="201">p   h1   ::before</text><text x="320" y="201" text-anchor="end">0-0-1</text><rect class="d-panel" x="26" y="220" width="304" height="32" rx="6" stroke-width="1.5"/><text x="36" y="241">*</text><text x="320" y="241" text-anchor="end">0-0-0</text><rect class="d-panel" x="10" y="260" width="320" height="32" rx="6" stroke-width="1.5" stroke-dasharray="5 4"/><text x="20" y="281">inherited from a parent</text><text class="s" x="320" y="281" text-anchor="end">weakest</text><text class="s" x="10" y="316">Compare ID, then class, then type.</text></svg>', alt:"A staircase of selector strengths, strongest at the top. From the top: !important, which beats all and is best avoided; inline style attributes; an id selector #top scoring 1-0-0; class and pseudo-class selectors such as .price and :hover scoring 0-1-0; type selectors such as p, h1 and the ::before pseudo-element scoring 0-0-1; the universal selector * scoring 0-0-0; and at the bottom, a value inherited from a parent, the weakest of all.", cap:"The specificity ladder. Scores are compared column by column, never added up."},
      {warn:"Don’t turn the scores into a single number such as “11 points”. Eleven classes (0-11-0) still lose to one id (1-0-0)."},
      {tip:"Because ids are so strong, a rule written with an id is hard to override later without another id. That’s a big reason to style with classes and keep selectors short: low, similar specificity keeps your options open."}
    ]},
    {h:"Inline styles and !important", body:[
      "An inline `style` attribute isn’t a selector at all, and it beats any selector in a stylesheet. That’s the main reason Lesson 1 steered you away from inline styles: once a colour is set inline, no class or id rule can change it.",
      "Adding `!important` after a value lifts that one declaration above all normal declarations, including inline styles:",
      {code:".price {\n  color: firebrick !important;\n}", lang:"css", cap:"Every `.price` is now firebrick red, even ones with an inline colour or a more specific rule."},
      "It’s tempting when a style “won’t work”, but it’s a trap. Within your stylesheets, the only way to beat an `!important` declaration is another `!important` one that is more specific, or equally specific and later, so each use invites the next, and soon nobody can tell why anything looks the way it does. MDN’s advice is to never use it unless you absolutely have to.",
      "The better fix is usually to find out why your rule is losing (the tools below show you) and then either move it later or make its selector a little more specific:",
      {code:"/* instead of !important */\n.menu .price {\n  color: firebrick;\n}", lang:"css", cap:"0-2-0 beats a plain `.price` (0-1-0) without breaking the cascade."},
      {tip:"There are fair uses of `!important`, such as a small set of helper classes in a large design system, or overriding styles you can’t edit in a content-management system. They’re exceptions you’ll recognise later."}
    ]},
    {h:"Inheritance: what passes down", body:[
      "Some properties are passed from a parent element to everything inside it. This is [[inheritance]]. Set a colour and a font on `<body>`, and every heading, paragraph and list item inherits them unless something else sets its own:",
      {code:"body {\n  color: #333333;\n  font-family: Verdana, sans-serif;\n  border: 2px solid gray;\n}", lang:"css", cap:"Paragraphs inside the body get the colour and the font. They don’t each get a border: borders aren’t inherited."},
      {table:[
        ["Usually inherited (text)","Not inherited (boxes)"],
        ["`color`","`margin`, `padding`"],
        ["`font-family`, `font-size`, `font-weight`","`border`"],
        ["`line-height`, `text-align`","`width`, `height`"],
        ["`letter-spacing`, `visibility`","`background-color`, `display`"]
      ]},
      "A rough guide: properties about **text** inherit; properties about **boxes** don’t. Every property’s MDN page says which it is.",
      "Now the rule that explains a lot of confusion: **an inherited value is weaker than any rule that targets the element directly**, however specific the parent’s rule was.",
      {code:"#main {\n  color: navy;\n}\n\np {\n  color: dimgray;\n}", lang:"css", cap:"Paragraphs inside `<div id=\"main\">` are dim grey. The `p` rule targets them directly; `#main`’s navy only reaches them by inheritance."},
      "Specificity only compares rules that match the **same** element. The `#main` rule matches the div, not the paragraph, so its 1-0-0 doesn’t enter the contest for the paragraph at all.",
      "That’s also why links stay blue when you change the body’s colour: the browser’s own stylesheet has a rule aimed straight at `a` elements, which beats inheritance. To make links follow their surroundings, ask for inheritance on purpose:",
      {code:"a {\n  color: inherit;\n}", lang:"css", cap:"`inherit` works with any property: it means “use my parent’s value”."},
      {warn:"If you make links the same colour as the text around them, keep the underline (or another visible cue that isn’t colour alone), so people can still tell what’s a link."}
    ]},
    {h:"See the winner: developer tools", body:[
      "You don’t have to work out the cascade in your head. Every desktop browser has built-in developer tools that show, for any element, which rules match it and which declarations won.",
      {ol:[
        "Right-click the element on the page and choose **Inspect** (Safari: **Inspect Element**, after turning on Safari’s developer features). Or press [[kbd:F12]] or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]]; on a Mac, [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]].",
        "The element is highlighted in the HTML. Beside it, the **Styles** pane (Firefox calls it **Rules**) lists every rule that matches, with the winning rules at the top and the file and line it came from.",
        "A declaration with a **line through it** lost to another declaration. A line through it **plus a warning icon** means the browser didn’t understand it: a misspelled property or an invalid value.",
        "Values under a heading such as **Inherited from body** came down from an ancestor.",
        "The **Computed** tab shows the final value of every property. Expand one to see which rule set it.",
        "You can tick declarations off and on, and click any value to edit it. Changes are temporary: reload the page and they’re gone."
      ]},
      "If your rule isn’t listed at all, the problem is earlier: the selector doesn’t match this element, or the stylesheet isn’t loading.",
      {tip:"Phone browsers don’t include developer tools. On a phone, the Web Lab is your testing ground: change one thing, run it, and look. (Phones can be inspected from a desktop browser over a cable, which is useful later.)"}
    ]},
    {h:"A debugging routine", body:[
      "When a style doesn’t show up, work through the questions in order. The first two catch most problems:",
      {ol:[
        "**Is the CSS loading?** Check the `<link>` path. A quick test: add `body { background-color: yellow; }`. If nothing turns yellow, the file isn’t reaching the page.",
        "**Does the selector match?** Dot for a class, hash for an id, same spelling and case as the HTML. In DevTools, your rule should appear in the Styles pane.",
        "**Is the declaration valid?** Look for a warning icon. Check semicolons and braces.",
        "**Is something else winning?** Look for the line through your declaration, then find the rule above it that isn’t crossed out.",
        "**Is the value only inherited?** If a parent sets it, a direct rule on the element (even the browser’s own) beats it."
      ]},
      "Then fix the cause rather than piling on `!important`: move the rule, adjust the selector, or remove the competing rule.",
      {tip:"Edited your CSS file but the page looks the same? The browser may be showing a copy from its cache. Reload: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] (Mac: [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]]) reloads without the cached copy in most browsers."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The last rule always wins.”** Only between equally specific selectors. A class beats a type selector wherever they are.",
        "**“Specificity is a single number.”** It’s three columns compared from the left. One id beats any number of classes.",
        "**“A more specific parent rule beats the child’s rule.”** Specificity compares rules that match the same element. Inherited values always lose to direct rules.",
        "**“The losing rule is ignored completely.”** Only its conflicting declarations lose. Its other declarations still apply.",
        "**“`!important` is the fix.”** It hides the cause and makes the next change harder. Find out why the rule is losing instead."
      ]}
    ]}
   ],
   try:[
    {id:"t2u3-l2-x1", type:"mcq", q:"Amara’s stylesheet contains `.button { background-color: steelblue; }` near the top and `.button { background-color: seagreen; }` near the bottom. What colour are her buttons?", options:[
      {t:"Sea green", ok:true, why:"Both selectors are `.button`, so they’re equally specific (0-1-0). On a tie, the later declaration wins."},
      {t:"Steel blue", why:"The first rule would only win if it were more specific or marked `!important`. With identical selectors, order decides, and seagreen comes later."},
      {t:"Neither; the conflict cancels both", why:"Conflicts never cancel. The cascade always picks exactly one winning value."},
      {t:"It depends on the browser", why:"The cascade is defined by the CSS standard, and every current browser follows it. Equal specificity means the later declaration wins."}
    ]},
    {id:"t2u3-l2-x2", type:"order", q:"Put these selectors in order of specificity, from **least** specific to **most** specific.", items:[
      {t:"`p`", why:"One type selector: 0-0-1."},
      {t:"`article p`", why:"Two type selectors: 0-0-2. More types, but still no class."},
      {t:"`.note`", why:"One class: 0-1-0. Any class beats any number of type selectors."},
      {t:"`p.note`", why:"A class plus a type: 0-1-1. Ties `.note` on classes, then wins on types."},
      {t:"`#intro`", why:"One id: 1-0-0. Beats every selector without an id."},
      {t:"`#intro .note`", why:"An id plus a class: 1-1-0. Ties `#intro` on ids, then wins on classes."}
    ]},
    {id:"t2u3-l2-x3", type:"mcq", q:"What is the specificity of `nav ul li.active a:hover`, written as ID-CLASS-TYPE?", options:[
      {t:"0-2-4", ok:true, why:"No ids. Classes column: `.active` and the pseudo-class `:hover` make 2. Type column: `nav`, `ul`, `li` and `a` make 4."},
      {t:"0-1-5", why:"`:hover` is a pseudo-class, and pseudo-classes count in the class column, not the type column."},
      {t:"0-2-3", why:"Count the type selectors again: `nav`, `ul`, `li` and `a` are four."},
      {t:"1-2-4", why:"There’s no `#` in the selector, so the ID column is 0. A class named `active` isn’t an id."}
    ]},
    {id:"t2u3-l2-x4", type:"mcq", q:"Lucía’s page has `<div id=\"main\"><p>Opening hours</p></div>`. Her CSS is `#main { color: navy; }` and, further up, `p { color: dimgray; }`. What colour is the paragraph?", options:[
      {t:"Dim grey", ok:true, why:"The `p` rule targets the paragraph directly. Navy would only reach the paragraph by inheritance from the div, and an inherited value always loses to a direct rule, regardless of the parent rule’s specificity."},
      {t:"Navy, because `#main` is more specific", why:"Specificity only compares rules that match the same element. `#main` matches the div, not the paragraph, so it isn’t in that contest."},
      {t:"Navy, because `#main` comes later", why:"Order only breaks ties between rules that match the same element. Here only the `p` rule matches the paragraph."},
      {t:"Black, because the rules conflict", why:"The rules don’t conflict on the paragraph: only one of them targets it."}
    ]},
    {id:"t2u3-l2-x5", type:"sort", q:"Hana sets each of these properties on a `<section>`. Which ones do the paragraphs inside the section inherit?", buckets:["Inherited by the paragraphs","Not inherited"], items:[
      {t:"`color: darkslategray`", b:0, why:"Text colour is inherited, which is why setting it on `body` colours the whole page."},
      {t:"`font-family: Georgia, serif`", b:0, why:"Font properties inherit, so one declaration on a container sets the font for everything inside."},
      {t:"`line-height: 1.6`", b:0, why:"Line height is a text property and inherits."},
      {t:"`padding: 2rem`", b:1, why:"Padding belongs to the section’s own box. If it were inherited, every nested element would get its own padding too."},
      {t:"`border: 1px solid gray`", b:1, why:"Borders aren’t inherited; otherwise every paragraph would get its own border."},
      {t:"`background-color: ivory`", b:1, why:"Not inherited, even though the paragraphs **look** ivory. Their own background is transparent, so the section’s background shows through them."}
    ]},
    {id:"t2u3-l2-x6", type:"mcq", q:"Dmitri’s `.price` colour wasn’t showing, so a teammate added `!important`, and it worked. Now Dmitri wants sale prices (`.price.sale`) in a different colour, and his new rule does nothing. What’s the best way forward?", options:[
      {t:"Remove `!important`, find the rule that was beating `.price` in DevTools, and fix it by order or a slightly more specific selector", ok:true, why:"That fixes the real cause and keeps the cascade predictable, so his `.price.sale` rule (0-2-0) can work normally."},
      {t:"Add `!important` to the sale rule as well", why:"It would work this time, but each `!important` forces the next one. The stylesheet becomes a contest nobody can follow."},
      {t:"Use an inline style on every sale price", why:"Even inline styles lose to `!important`, so this wouldn’t work, and it would scatter styling through the HTML."},
      {t:"Give every price an id and style the ids", why:"Ids can’t beat `!important` either, and styling with ids makes future overrides even harder."}
    ]},
    {id:"t2u3-l2-x7", type:"match", q:"Match what you see in the browser’s developer tools (Styles or Rules pane) with what it tells you.", pairs:[
      ["A declaration with a line through it","Another declaration beat it in the cascade","Overridden declarations are struck through, and the winning one is shown without a line."],
      ["A line through it and a warning icon","The browser didn’t understand the property or value","Invalid declarations are skipped, and the tools flag them so you can spot typos."],
      ["Values under “Inherited from body”","They came down from an ancestor element","These values reach the element only by inheritance, so any direct rule would beat them."],
      ["Your rule isn’t listed at all","Its selector doesn’t match, or the file isn’t loading","The pane lists every rule that matches the element. A missing rule points to the selector or the link."],
      ["The Computed tab","The final value the browser actually uses","It shows the result of the whole cascade for each property, and which rule it came from."]
    ]}
   ],
   apply:{intro:"Make the cascade visible. The first task works on any device in the Web Lab; the second needs a desktop browser.", tasks:[
     {t:"Predict, then test", how:["In a Web Lab page, write `<p class=\"note\" id=\"first\">Bring gloves</p>`.","Add `p { color: purple; }` and `.note { color: green; }`. Predict the colour, then run it.","Swap the order of the two rules. Did the colour change? Why not?","Add `#first { color: navy; }` at the very top of the CSS. Predict, then run.","Finally, add `style=\"color: orange\"` to the paragraph. Predict, then run."], write:"Write each prediction and result. Which ones surprised you?"},
     {t:"Inspect a real page with developer tools", how:{
       win:["Open any website in Chrome, Edge or Firefox. Right-click a heading and choose **Inspect** (or press [[kbd:F12]]).","In the **Styles** pane (Firefox: **Rules**), find a declaration with a line through it. Which rule beat it?","Tick a declaration’s checkbox off, then on again, and watch the page.","Click a colour value, type a new one such as `crimson`, and press [[kbd:Enter]].","Open the **Computed** tab, type `color` in its filter box and expand the result to see which rule set it. Reload the page to undo your changes."],
       mac:["Chrome, Edge or Firefox: right-click a heading and choose **Inspect** (or press [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]]). Safari: first choose **Safari → Settings → Advanced** and turn on **Show features for web developers**, then right-click and choose **Inspect Element**.","In the **Styles** pane (Firefox: **Rules**), find a declaration with a line through it. Which rule beat it?","Tick a declaration off and on, then click a colour value and type `crimson`.","Open the **Computed** tab and find `color`. Reload the page to undo your changes."],
       chromeos:["Open any website in Chrome. Right-click (two-finger tap) a heading and choose **Inspect**, or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]].","In the **Styles** pane, find a declaration with a line through it. Which rule beat it?","Tick a declaration off and on, then click a colour value and type `crimson`.","Open the **Computed** tab, filter for `color` and expand it. Reload the page to undo."],
       phone:["Phone browsers have no built-in developer tools. Do the first task in the Web Lab, and change one rule at a time to see the cascade at work.","Optional, with a computer: Chrome on Android can be inspected from desktop Chrome over USB (visit `chrome://inspect` on the computer), and an iPhone’s Safari from Safari on a Mac after turning on **Web Inspector** in the iPhone’s Safari settings (under **Advanced**)."]
     }},
     {t:"Work out three specificities", how:["In the Styles pane of a site you inspected, or in any stylesheet in this unit, pick three selectors.","Write each one’s specificity as ID-CLASS-TYPE.","Predict which of the three would win if they all set the same property on the same element."], write:"Your three selectors, their scores and your prediction."}
   ], proof:"Your predictions and results from the conflict test, a note of one crossed-out declaration you found in developer tools (or in the Web Lab on a phone) and why it lost, and three selectors with their specificity scores."},
   read:[
     {book:"mdn", where:"CSS styling basics → “Handling conflicts” (cascade, specificity, inheritance and !important)"},
     {book:"mdn", where:"CSS styling basics → “Debugging CSS”", note:"Uses Firefox’s tools in its screenshots; Chrome, Edge and Safari have the same ideas under similar names."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u3-l3", title:"Colour, type and units", minutes:60,
   goals:[
     "Write the same colour as a name, a hex code, `rgb()` and `hsl()`, and reuse colours with custom properties",
     "Check text and background colours against the WCAG 2.2 contrast minimums (4.5:1, and 3:1 for large text and interface parts)",
     "Write a font stack that ends in a generic family, and weigh up web fonts, including their privacy cost",
     "Choose between `px`, `rem`, `em` and `%` for sizes, and predict the size `em` produces when it compounds",
     "Set a comfortable line height and line length for reading"
   ],
   hook:{q:"Light grey text, `#999999`, on a white background is a popular “subtle” look. Does it meet the WCAG minimum contrast for ordinary body text?", options:["Yes, easily","Yes, just barely","No: it’s about 2.85:1, well under the 4.5:1 minimum","Contrast rules only cover images, not text"], answer:2, reveal:"No. `#999999` on white has a contrast ratio of about 2.85:1, and WCAG asks for at least 4.5:1 for normal-size text. It may look fine to you on a bright screen, but for many people (low vision, older eyes, sunlight on a phone) it’s hard to read. This lesson shows how to pick colours that work for everyone, and how to size text so readers stay in control."},
   learn:[
    {h:"Four ways to write a colour", body:[
      {lead:"CSS has several notations for colour. They’re different ways of writing the same thing, like “twelve”, “12” and “XII”."},
      "Two properties do most colour work: `color` sets the text colour and `background-color` sets the background. Borders and outlines take colours too. Here is one colour, a purple called `rebeccapurple`, written four ways:",
      {table:[
        ["Notation","Example","How it works"],
        ["Named","`rebeccapurple`","One of more than 140 keywords, from `black` to `papayawhip`"],
        ["Hex","`#663399`","Red, green, blue as two-digit hexadecimal numbers"],
        ["`rgb()`","`rgb(102 51 153)`","Red, green, blue, each 0–255"],
        ["`hsl()`","`hsl(270 50% 40%)`","Hue, saturation, lightness"]
      ]},
      {code:"h1 {\n  color: #663399;\n}\n\n.notice {\n  background-color:\n    rgb(102 51 153 / 0.15);\n}", lang:"css", weblab:"wl-color", cap:"The heading is purple; the notice gets a very pale purple tint, because a fourth value after the slash sets opacity (0 is invisible, 1 is solid)."},
      "**Hex codes** are the notation you’ll meet most. After the `#` come three pairs: red, green, blue. Each pair is a number from `00` to `ff` in [[hex-color|hexadecimal]], base 16, where the digits run 0–9 then a–f. So `ff` is 255 (full), `00` is 0 (none) and `66` is 102. `#ffffff` is white, `#000000` black, `#ff0000` pure red. When each pair is a repeated digit, there’s a three-digit shorthand: `#639` means `#663399`. Upper or lower case both work.",
      "**`rgb()`** gives the same three numbers in everyday decimal. You’ll also see an older style with commas, `rgb(102, 51, 153)`, which still works everywhere.",
      {lab:"wl-color", t:"Practise: set text and background colours"}
    ]},
    {h:"HSL, and naming your colours once", body:[
      "`hsl()` describes colour the way people tend to think about it:",
      {list:[
        "**Hue**: an angle around the colour wheel, 0 to 360. 0 is red, 120 green, 240 blue, and 270 is the purple above.",
        "**Saturation**: 0% is grey, 100% is the most vivid version of the hue.",
        "**Lightness**: 0% is black, 100% white, 50% the pure colour."
      ]},
      "That makes HSL handy for a set of related colours: keep the hue and saturation, change only the lightness. `hsl(270 50% 40%)` is the purple; `hsl(270 50% 90%)` is a pale lilac background to go with it; `hsl(270 50% 25%)` a deep shade for hover states.",
      "Once you have a palette, store each colour once in a [[custom-property|custom property]] (often called a CSS variable) and use it everywhere:",
      {code:":root {\n  --brand: #663399;\n  --tint: hsl(270 50% 90%);\n}\n\nh1 {\n  color: var(--brand);\n}\n\n.notice {\n  background-color: var(--tint);\n}", lang:"css", cap:"`:root` selects the `<html>` element, so every element can use these. Names start with two hyphens; `var()` reads them."},
      "Change `--brand` in one place and every heading, button and border that uses it changes too. Custom properties are inherited like text properties, and they work in all current browsers."
    ]},
    {h:"Contrast: can everyone read it?", body:[
      "**Contrast** is the difference in brightness between text and its background, measured as a ratio from 1:1 (identical colours, invisible) to 21:1 (black on white). The Web Content Accessibility Guidelines, WCAG 2.2, set minimums at level AA, the level most laws and organisations ask for:",
      {table:[
        ["What","Minimum ratio","WCAG 2.2"],
        ["Normal text","4.5:1","1.4.3 Contrast (Minimum)"],
        ["Large text: 18 pt (about 24 px), or 14 pt (about 18.7 px) bold","3:1","1.4.3"],
        ["Parts of buttons, inputs and icons needed to see and use them; meaningful parts of graphics","3:1 against what’s next to them","1.4.11 Non-text Contrast"]
      ]},
      "Real examples, all on a white background:",
      {table:[
        ["Text colour","Ratio","Normal text?"],
        ["`#000000` black","21:1","Passes"],
        ["`#595959` dark grey","7.0:1","Passes"],
        ["`#767676` mid grey","4.54:1","Passes, just"],
        ["`#777777` mid grey","4.48:1","Fails (passes for large text)"],
        ["`#1e90ff` `dodgerblue`","3.24:1","Fails (passes for large text)"],
        ["`#999999` light grey","2.85:1","Fails, even for large text"]
      ]},
      "The thresholds are exact: WCAG says not to round, so 4.48:1 fails. Your eyes are a poor judge, because the screen, the room and your own vision all differ from your readers’. Use a checker: the WebAIM Contrast Checker website, or the colour picker in Chrome’s and Edge’s developer tools, which shows a contrast ratio for text colours.",
      {warn:"Placeholder text in form fields and text that appears on hover must meet the same minimums. And never use colour alone to carry meaning (“required fields are in red”): add a word, a symbol or an underline as well, for people who can’t tell the colours apart."}
    ]},
    {h:"Fonts and font stacks", body:[
      "`font-family` takes a list of fonts, called a [[font-stack|font stack]]. The browser uses the first one it has, so the list goes from the font you’d like best to a safe fallback:",
      {code:'body {\n  font-family:\n    "Atkinson Hyperlegible",\n    Verdana, sans-serif;\n}', lang:"css", cap:"If the reader’s device has neither Atkinson Hyperlegible nor Verdana, the browser uses its default sans-serif font."},
      "Always end with a [[generic-font-family|generic family]], a keyword that means “whatever font of this kind you have”: `serif`, `sans-serif`, `monospace`, `cursive` or `fantasy`, plus newer ones such as `system-ui` (the device’s own interface font). Write generic names **without** quotes; `\"sans-serif\"` in quotes would mean a font literally named sans-serif. It’s good practice to quote real font names that contain spaces.",
      "A few fonts are installed on nearly every desktop system: Arial, Verdana, Georgia, Times New Roman, Courier New. Phones have different sets, which is exactly why the generic fallback matters.",
      {h:"Web fonts"},
      "To use a font your readers may not have, the browser can download it: a [[web-font|web font]]. You either host the font file with your site and describe it with an `@font-face` rule, or link to a font service such as Google Fonts or Adobe Fonts, which gives you a `<link>` to paste into your `<head>`.",
      {code:'@font-face {\n  font-family: "Garden Sans";\n  src: url("fonts/garden-sans.woff2")\n    format("woff2");\n  font-display: swap;\n}\n\nbody {\n  font-family: "Garden Sans",\n    Verdana, sans-serif;\n}', lang:"css", cap:"Self-hosting: the font file sits in your site’s `fonts` folder. WOFF2 is the compressed format every current browser supports. `font-display: swap` shows text in a fallback font until the download finishes, instead of hiding it."},
      "Web fonts have costs. Each style (regular, bold, italic) is another download, so use as few as you can. Fonts are licensed: check that yours allows web use. And there’s **privacy**: when a page loads fonts from a third-party service, every visitor’s browser contacts that service, which learns their IP address and which site they’re on. In one case in January 2022, a regional court in Munich, Germany, ruled that a website had broken EU data-protection law (the GDPR) by loading Google Fonts this way without the visitor’s consent. That’s a single court’s decision, not a rule that applies everywhere, but it’s one reason many sites now host fonts themselves. Hosting the font files yourself avoids sending visitors’ addresses to the font service; fonts from Google Fonts are released under open licences that allow it."
    ]},
    {h:"Sizes and units", body:[
      "CSS lengths always have a unit, written straight after the number: `16px`, `1.5rem`. (Zero is the one length that can go without.) These four cover most needs:",
      {table:[
        ["Unit","Relative to","Typical use"],
        ["`px`","A fixed CSS pixel (not a screen dot)","Borders, small fixed details"],
        ["[[rem]]","The root (`<html>`) font size: 16 px unless the reader has changed it","Font sizes, spacing"],
        ["[[em-unit|em]]","For `font-size`: the parent’s font size. For other properties: the element’s own font size","Padding that grows with the text"],
        ["`%`","The parent’s value (for `width`, the containing box’s width)","Widths of boxes"]
      ]},
      "Why prefer `rem` for text? Browsers let people choose a larger default text size in their settings, and many do. With `1.25rem`, a heading grows with that choice. A heading set to `20px` ignores it. (Page zoom enlarges both.) With the usual 16 px default, `1rem` is 16 px, `1.5rem` is 24 px and `0.875rem` is 14 px.",
      "`em` is useful, but it **compounds**: each nested element multiplies its parent’s size again.",
      {code:"li {\n  font-size: 0.8em;\n}", lang:"css", cap:"In a list inside a list, the outer items are 0.8 × 16 = 12.8 px, and the inner items 0.8 × 12.8 = 10.24 px. With `0.8rem`, both levels would be 12.8 px."},
      {fig:'<svg viewBox="0 0 340 280"><text x="87" y="20" text-anchor="middle">em compounds</text><text x="253" y="20" text-anchor="middle">rem stays put</text><rect class="d-panel" x="10" y="32" width="155" height="198" rx="8" stroke-width="1.5"/><text x="20" y="54">body: 16px</text><rect class="d-lup" x="20" y="66" width="135" height="154" rx="8" stroke-width="2"/><text x="30" y="88">li 0.8em</text><text class="s" x="30" y="104">= 0.8 × 16 = 12.8px</text><rect class="d-rose" x="30" y="120" width="115" height="90" rx="8" stroke-width="2"/><text x="40" y="142">li 0.8em</text><text class="s" x="40" y="160">= 0.8 × 12.8</text><text class="s" x="40" y="176">= 10.24px</text><rect class="d-panel" x="175" y="32" width="155" height="198" rx="8" stroke-width="1.5"/><text x="185" y="54">body: 16px</text><rect class="d-sage" x="185" y="66" width="135" height="154" rx="8" stroke-width="2"/><text x="195" y="88">li 0.8rem</text><text class="s" x="195" y="104">= 0.8 × 16 = 12.8px</text><rect class="d-sage" x="195" y="120" width="115" height="90" rx="8" stroke-width="2"/><text x="205" y="142">li 0.8rem</text><text class="s" x="205" y="160">= 0.8 × 16</text><text class="s" x="205" y="176">= 12.8px</text><text class="s" x="10" y="254">em: a share of the parent’s font size</text><text class="s" x="10" y="272">rem: a share of the root (html) font size</text></svg>', alt:"Two columns comparing nested list items. Left, em compounds: body text is 16 px; a list item at 0.8em is 12.8 px; a list item nested inside it at 0.8em is 0.8 times 12.8, which is 10.24 px. Right, rem stays put: the same nesting with 0.8rem gives 12.8 px at both levels, because rem always refers to the root font size.", cap:"Nested list items with `0.8em` shrink at every level; with `0.8rem` they stay the same size."},
      "Two more you’ll meet: `ch` is the width of the digit 0 in the current font, handy for line lengths; `vw` and `vh` are 1% of the browser window’s width and height."
    ]},
    {h:"Comfortable reading: line height and line length", body:[
      "Two settings make the biggest difference to how easy a page is to read.",
      "**Line height** is the distance from one line of text to the next. Browsers default to about 1.2 times the font size, which feels cramped for paragraphs. Around 1.5 is far easier to follow, and WCAG success criterion 1.4.8 (level AAA) asks for at least that within paragraphs. Write it **without a unit**: `line-height: 1.5` means 1.5 times each element’s own font size, so headings and small print all get a fitting gap.",
      "**Line length** is how many characters fit on one line. On a wide monitor, a paragraph can stretch to 150 characters or more, and the eye loses its place jumping back to the start of the next line. WCAG 1.4.8 suggests lines no wider than 80 characters. A `max-width` measured in `ch` keeps lines readable on big screens, and on a phone the text simply uses the narrower width:",
      {code:":root {\n  --ink: #1f2933;\n  --paper: #fffaf0;\n  --accent: #663399;\n}\n\nbody {\n  color: var(--ink);\n  background-color: var(--paper);\n  font-family: Verdana, sans-serif;\n  line-height: 1.5;\n}\n\nmain {\n  max-width: 60ch;\n}\n\nh1 {\n  color: var(--accent);\n  font-size: 2rem;\n  line-height: 1.2;\n}", lang:"css", weblab:"wl-font", cap:"A calm starting point for a club or café page. Text is 14.2:1 against the background; the purple headings 8.1:1. Most letters are narrower than a 0, so a `60ch` column holds a few more than 60 characters per line."},
      {lab:"wl-font", t:"Practise: set a font stack and a readable size"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“If I can read it, the contrast is fine.”** Check the ratio. Readers have different eyes and screens, and the rules are exact thresholds.",
        "**“`px` is a dot on the screen.”** A CSS pixel is a reference size. On a high-resolution phone, one CSS pixel may be drawn with two or three physical dots.",
        "**“`em` and `rem` are the same.”** `rem` always looks at the root; `em` looks at the parent (for font size) and compounds when nested.",
        "**“Setting text in `px` stops it being resized.”** Zoom still works. But `px` text ignores the reader’s default text-size setting, which `rem` respects.",
        "**“A font stack is optional when I use a web font.”** Downloads fail, are blocked, or are slow. The fallbacks are what many people actually see."
      ]}
    ]}
   ],
   try:[
    {id:"t2u3-l3-x1", type:"number", q:"In the hex colour `#1e90ff`, what is the **green** value as an ordinary decimal number (0–255)?", answer:144, tol:0, unit:"", why:"The pairs are red `1e`, green `90`, blue `ff`. In hexadecimal, `90` is 9 sixteens plus 0: 9 × 16 = **144**.", wrongs:[
      {v:90, tol:0, why:"That reads `90` as a decimal number. Hex pairs are base 16: `90` means 9 × 16 + 0 = 144."},
      {v:30, tol:0, why:"30 is the decimal value of `1e`, which is the **red** pair (1 × 16 + 14). Green is the middle pair, `90`."},
      {v:255, tol:0, why:"255 is `ff`, the **blue** pair, the last two digits. Green is the middle pair."}
    ], hint2:"Split it into three pairs: red, green, blue. Then the first digit of the pair counts sixteens."},
    {id:"t2u3-l3-x2", type:"mcq", q:"Fatima sees the colour `#3a7` in a stylesheet. Which six-digit hex code means exactly the same colour?", options:[
      {t:"`#33aa77`", ok:true, why:"Three-digit hex doubles each digit: 3 → 33, a → aa, 7 → 77."},
      {t:"`#3a7000`", why:"Short hex isn’t padded with zeros at the end. Each of the three digits is doubled in place."},
      {t:"`#03a007`", why:"Short hex isn’t padded with zeros in front of each digit either. `3` becomes `33`."},
      {t:"`#3a73a7`", why:"The whole code isn’t repeated; each digit is doubled: `33`, `aa`, `77`."}
    ]},
    {id:"t2u3-l3-x3", type:"mcq", q:"Ana’s buttons are `hsl(270 50% 40%)`. She wants a pale background of the **same** hue that’s much lighter. Which colour should she use?", options:[
      {t:"`hsl(270 50% 90%)`", ok:true, why:"Same hue (270) and saturation; only the lightness rises from 40% to 90%, giving a pale lilac."},
      {t:"`hsl(270 90% 40%)`", why:"This raises the **saturation**, making the purple more vivid, not lighter. Lightness is the third value."},
      {t:"`hsl(300 50% 40%)`", why:"Changing the first value moves round the colour wheel, so this is a different hue (towards magenta), not a lighter purple."},
      {t:"`hsl(270 50% 20%)`", why:"Lower lightness makes it **darker**. 0% is black; 100% is white."}
    ]},
    {id:"t2u3-l3-x4", type:"sort", q:"Sort these colour pairs by whether they meet WCAG 2.2 level AA.", buckets:["Meets AA","Fails AA"], items:[
      {t:"Ratio 4.6:1, paragraph text at 16 px", b:0, why:"Normal text needs at least 4.5:1, and 4.6 is above it."},
      {t:"Ratio 4.48:1, paragraph text at 16 px", b:1, why:"The threshold is exact: WCAG says not to round, so 4.48:1 is below 4.5:1 and fails."},
      {t:"Ratio 3.2:1, heading text at 32 px", b:0, why:"32 px is large text (18 pt is about 24 px), which needs only 3:1."},
      {t:"Ratio 3.2:1, paragraph text at 16 px", b:1, why:"16 px regular text is normal-size, so it needs 4.5:1."},
      {t:"Ratio 2.5:1, the outline that shows where a text box is", b:1, why:"Parts of a control that people need to see it need at least 3:1 against what’s next to them (1.4.11 Non-text Contrast)."},
      {t:"Ratio 21:1, black text on white", b:0, why:"The highest possible contrast."}
    ]},
    {id:"t2u3-l3-x5", type:"number", q:"Kenji sets `h2 { font-size: 1.5rem; }`. The reader hasn’t changed their browser’s default text size, and nothing in the stylesheet changes the root font size. How many pixels tall is the h2’s font size?", answer:24, tol:0, unit:"px", why:"`rem` is relative to the root font size, which is 16 px by default. 1.5 × 16 = **24 px**.", wrongs:[
      {v:15, tol:0, why:"That assumes 1rem is 10 px. The default root font size is 16 px, so 1.5rem is 24 px."},
      {v:1.5, tol:0, why:"The question asks for pixels. 1.5rem means 1.5 times the root size of 16 px."},
      {v:36, tol:0, why:"That multiplies 1.5 by an h2’s default size (24 px). `rem` ignores the element’s own default and always uses the root size."}
    ]},
    {id:"t2u3-l3-x6", type:"number", q:"Mei’s stylesheet has `li { font-size: 0.8em; }`. Her page’s body text is 16 px, and she has a list inside a list item. What font size, in px, do the items of the **inner** list get?", answer:10.24, tol:0.01, unit:"px", why:"`em` is relative to the parent’s font size. Outer items: 0.8 × 16 = 12.8 px. Inner items sit inside an outer item, so 0.8 × 12.8 = **10.24 px**.", wrongs:[
      {v:12.8, tol:0.01, why:"That’s the outer items’ size. The inner items multiply again by 0.8, because `em` compounds: 0.8 × 12.8 = 10.24."},
      {v:9.6, tol:0.01, why:"That subtracts 0.2 × 16 twice (16 − 3.2 − 3.2). `em` multiplies the parent’s size each time: 0.8 × 0.8 × 16 = 10.24."}
    ], hint2:"Work out the outer items first, then use their size as the parent for the inner ones."},
    {id:"t2u3-l3-x7", type:"mcq", q:"Sione’s CSS says `font-family: \"Atkinson Hyperlegible\", Verdana, sans-serif;`. A visitor’s phone has neither Atkinson Hyperlegible nor Verdana installed, and no web font is loaded. What happens?", options:[
      {t:"The browser uses its default sans-serif font", ok:true, why:"The browser tries each font in order and falls back to the generic family at the end, which always exists."},
      {t:"The text is invisible", why:"Missing fonts never hide text. That’s what the generic family at the end of the stack guarantees."},
      {t:"The browser downloads Atkinson Hyperlegible automatically", why:"Browsers only download fonts you’ve told them about with `@font-face` or a font service link."},
      {t:"The browser uses its default serif font, such as Times", why:"The stack ends in `sans-serif`, so the fallback is a sans-serif font. The browser’s own default font (often a serif such as Times New Roman) is used only when no `font-family` is set at all."}
    ]},
    {id:"t2u3-l3-x8", type:"mcq", q:"On a wide monitor, the paragraphs on Tomás’s recipe blog stretch to about 160 characters per line and readers lose their place. Which change fixes this best?", options:[
      {t:"Give the main content area `max-width: 60ch`", ok:true, why:"It caps lines at a comfortable length on big screens and changes nothing on narrow ones, where the text is already shorter."},
      {t:"Make the font size smaller", why:"Smaller text fits **more** characters on each line, making the problem worse and the text harder to read."},
      {t:"Use `text-align: justify`", why:"Justifying spreads words to fill the line but doesn’t shorten it, and the uneven gaps can make reading harder. WCAG 1.4.8 lists unjustified text as an aid to reading."},
      {t:"Set `line-height: 3`", why:"More space between lines helps a little, but triple spacing looks broken and the lines are still far too long."}
    ]}
   ],
   apply:{intro:"Choose colours and type for a small page, such as a sports club or a café, and check them properly. Everything works in the Web Lab on a phone.", tasks:[
     {t:"Pick a palette that passes contrast", how:["Choose a text colour, a background colour and an accent colour for headings.","Check each text/background pair in a contrast checker, such as the WebAIM Contrast Checker website (it works on phones), or, on a computer, the colour picker in Chrome’s or Edge’s developer tools.","Adjust until body text reaches at least 4.5:1, and headings at least 3:1 (4.5:1 if they’re smaller than about 24 px, or smaller than about 18.7 px when bold).","Write the colours as custom properties in `:root`, and use `var()` in your rules."], write:"Your three colours and their contrast ratios."},
     {t:"See why rem respects the reader", how:{
       win:["In the Web Lab, write two paragraphs. Give one `font-size: 20px` and the other `font-size: 1.25rem`. They look the same size.","Now open Chrome’s **Settings → Appearance → Font size** and choose **Very large**. (Edge: **Settings → Appearance → Fonts**; Firefox: **Settings**, then the **Fonts** section, under **General** or, in newer versions, **Accessibility**.) Run the Web Lab page again: the rem paragraph grows, the px one doesn’t.","Set the font size back to **Medium** (the recommended default)."],
       mac:["In the Web Lab, write two paragraphs. Give one `font-size: 20px` and the other `font-size: 1.25rem`.","In Chrome choose **Settings → Appearance → Font size → Very large** (Firefox: **Settings**, then the **Fonts** section, under **General** or, in newer versions, **Accessibility**). Run the page again: only the rem paragraph grows.","Set it back to **Medium** afterwards."],
       chromeos:["In the Web Lab, write two paragraphs. Give one `font-size: 20px` and the other `font-size: 1.25rem`.","In Chrome choose **Settings → Appearance → Font size → Very large**. Run the page again: only the rem paragraph grows.","Set it back to **Medium** afterwards."],
       phone:["In the Web Lab, write two paragraphs. Give one `font-size: 20px` and the other `font-size: 1.25rem`.","Mobile browsers handle text-size settings differently, so simulate a reader’s choice instead: add `html { font-size: 125%; }` to the CSS. The rem paragraph grows to 25 px; the px one stays at 20 px."]
     }, write:"What changed, and what didn’t?"},
     {t:"Set comfortable type", how:["Give `body` a font stack ending in a generic family and `line-height: 1.5`.","Give your main content a `max-width` in `ch`.","Size headings in `rem`, and add a nested list with `font-size` in `em` to see it compound. Then switch it to `rem`."]}
   ], proof:"A small page whose colours are stored as custom properties and pass the contrast minimums (with the ratios noted), a font stack ending in a generic family, line height around 1.5, a line length limit in `ch`, and your notes on how `px` and `rem` text behaved."},
   read:[
     {book:"mdn", where:"CSS styling basics → “CSS values and units” (lengths, percentages, colours)"},
     {book:"mdn", where:"CSS text styling → “Fundamental text and font styling” and “Web fonts”", note:"“Web fonts” doesn’t cover privacy; this lesson’s note on third-party font services fills that gap."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u3-l4", title:"The box model", minutes:55,
   goals:[
     "Name the four layers of every element’s box (content, padding, border, margin) and set each one",
     "Calculate how wide a box appears, with and without `box-sizing: border-box`",
     "Tell block, inline and inline-block boxes apart, and change them with `display`",
     "Predict the gap between two blocks when their margins collapse",
     "Centre a block on the page with a maximum width and automatic margins"
   ],
   hook:{q:"A box has `width: 200px; padding: 20px; border: 5px solid;` and no other styles. How wide is it on screen, from the outside of one border to the outside of the other?", options:["200 px","225 px","245 px","250 px"], answer:3, reveal:"250 px. By default, `width` sets only the content area. Padding (20 px on each side) and border (5 px on each side) are added outside it: 200 + 40 + 10 = 250. It surprises nearly everyone, and it’s behind a lot of “why is my layout too wide?” moments. This lesson shows the model, and the one-line setting most developers use to make it simpler."},
   learn:[
    {h:"Every element is a box", body:[
      {lead:"To the browser, every element on the page is a rectangle. Even a single word in a link has a box around it."},
      "The [[box-model|box model]] describes four layers, from the inside out. Think of a framed picture on a wall:",
      {list:[
        "**Content**: the picture itself. The text or image, sized by `width` and `height` (or by what’s inside it).",
        "**[[padding|Padding]]**: the mount around the picture. Space **inside** the border. The box’s background colour fills it.",
        "**[[border-css|Border]]**: the frame. A line around the padding, with a width, a style and a colour.",
        "**[[margin-css|Margin]]**: the gap between this frame and the next one on the wall. Space **outside** the border. It’s always transparent."
      ]},
      {fig:'<svg viewBox="0 0 340 270"><rect class="d-soft" x="10" y="10" width="320" height="226" rx="4" stroke-width="1.5" stroke-dasharray="6 4"/><text class="s" x="20" y="31">margin: outside, transparent</text><rect class="d-lup" x="44" y="44" width="252" height="158" stroke-width="0"/><rect class="d-ink" x="44" y="44" width="252" height="158" stroke-width="7"/><text x="58" y="70">padding</text><text class="s" x="58" y="86">inside the border</text><rect class="d-sage" x="96" y="98" width="148" height="70" rx="2" stroke-width="2"/><text x="170" y="128" text-anchor="middle">content</text><text class="s" x="170" y="146" text-anchor="middle">width × height</text><text class="s" x="20" y="226">border: the frame line</text><path class="d-ink" d="M148,218 L182,207" stroke-width="1.5"/><text class="s" x="10" y="258">Background colour fills content + padding.</text></svg>', alt:"A box drawn as nested layers. The innermost sage rectangle is the content, sized by width and height. Around it is a lupine-tinted padding area inside a thick dark border line. Outside the border, a dashed outline marks the transparent margin. A note says the background colour fills the content and padding.", cap:"The four layers of the box model, from the content outwards."},
      "Every element has all four layers, even if some are zero. Many elements start with margins from the browser’s built-in styles: paragraphs and headings have top and bottom margins, and `body` has an 8 px margin all round, which is why your content never quite touches the edge of the window."
    ]},
    {h:"Setting padding, borders and margins", body:[
      "Padding and margin can be set one side at a time (`padding-top`, `margin-left` and so on) or all at once with a shorthand. The shorthand takes one to four values:",
      {table:[
        ["You write","Top","Right","Bottom / Left"],
        ["`padding: 10px`","10","10","10 / 10"],
        ["`padding: 10px 20px`","10","20","10 / 20"],
        ["`padding: 10px 20px 30px`","10","20","30 / 20"],
        ["`padding: 10px 20px 30px 40px`","10","20","30 / 40"]
      ]},
      "With four values, they go clockwise from the top: top, right, bottom, left. With two, the first is top and bottom, the second left and right. With three, the missing left copies the right. `margin` works the same way.",
      "A border needs a **style**, or there is nothing to see. The shorthand takes a width, a style and a colour, in any order:",
      {code:".card {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid teal;\n  margin: 16px;\n}", lang:"css", weblab:"wl-box", cap:"Content 200 px wide, 20 px of padding inside a 5 px teal frame, and 16 px of space around the outside."},
      "Common styles are `solid`, `dashed`, `dotted` and `double`. The default style is `none`, so `border: 5px teal` (no style) draws nothing at all. `border-radius` rounds the corners; it works even without a border, on the background.",
      {lab:"wl-box", t:"Practise: give a box padding, a border and a margin"}
    ]},
    {h:"How wide is the box?", body:[
      "Here is the surprise from the warm-up. By default, `width` and `height` set the size of the **content** only. Padding and border are added on the outside:",
      {ex:"Visible width = width + padding (left + right)\n               + border (left + right)\n\n.card: 200 + 20 + 20 + 5 + 5 = 250 px\n\nMargin is outside the visible box: it adds\nspace around it, but isn’t part of its width.", label:"Worked example: the default (content-box)", mono:true},
      "That default is called `box-sizing: content-box`. It makes simple sums awkward: if you want a 200 px card with padding, you have to subtract the padding and border yourself. So most developers switch every element to the other model with one rule at the top of their stylesheet:",
      {code:"*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}", lang:"css", cap:"With `border-box`, `width` includes the padding and border. The `.card` above becomes exactly 200 px wide, and its content shrinks to 150 px to make room."},
      {fig:'<svg viewBox="0 0 340 236"><text x="10" y="20">content-box (the default)</text><text class="s" x="10" y="38">width: 200px → 250 px on screen</text><rect class="d-inkf" x="20" y="48" width="6" height="40"/><rect class="d-lup" x="26" y="48" width="24" height="40" stroke-width="1"/><rect class="d-sage" x="50" y="48" width="240" height="40" stroke-width="1.5"/><rect class="d-lup" x="290" y="48" width="24" height="40" stroke-width="1"/><rect class="d-inkf" x="314" y="48" width="6" height="40"/><text x="170" y="73" text-anchor="middle">content 200</text><text class="s" x="38" y="104" text-anchor="middle">20</text><text class="s" x="302" y="104" text-anchor="middle">20</text><text x="10" y="138">border-box</text><text class="s" x="10" y="156">width: 200px → 200 px on screen</text><rect class="d-inkf" x="20" y="166" width="6" height="40"/><rect class="d-lup" x="26" y="166" width="24" height="40" stroke-width="1"/><rect class="d-sage" x="50" y="166" width="180" height="40" stroke-width="1.5"/><rect class="d-lup" x="230" y="166" width="24" height="40" stroke-width="1"/><rect class="d-inkf" x="254" y="166" width="6" height="40"/><text x="140" y="191" text-anchor="middle">content 150</text><text class="s" x="38" y="222" text-anchor="middle">20</text><text class="s" x="242" y="222" text-anchor="middle">20</text></svg>', alt:"Two bars drawn to scale. Top, content-box, the default: 5 px border, 20 px padding, 200 px content, 20 px padding, 5 px border, so width 200px shows as 250 px on screen. Bottom, border-box: the same border and padding, but the content shrinks to 150 px so the whole box is exactly 200 px.", cap:"Same CSS, two box-sizing models: `width: 200px; padding: 20px; border: 5px solid`. Dark ends are the border."},
      "The same thing explains a classic bug: an input box set to `width: 100%` with some padding pokes out past the edge of its container, and on a phone the page starts to scroll sideways. With `border-box`, `width: 100%` means the whole box fits exactly."
    ]},
    {h:"Block, inline and inline-block", body:[
      "Boxes don’t all behave the same way. The `display` property decides, and HTML elements come with a default:",
      {table:[
        ["","Block","Inline"],
        ["Examples","`p`, `h1`–`h6`, `div`, `section`, `ul`, `li`","`a`, `span`, `strong`, `em`, `code`"],
        ["Starts a new line?","Yes","No: flows within the text"],
        ["Width if you don’t set one","Fills its container","Only as wide as its content"],
        ["`width` and `height`","Respected","Ignored"],
        ["Top and bottom margin","Pushes other boxes away","Ignored; top and bottom padding overlaps nearby lines"]
      ]},
      "`display: inline-block` is the middle ground: the box sits in a line of text like an inline element, but respects width, height, padding and margin like a block. It’s handy for buttons and tags. For example, to make menu links into comfortable tap targets:",
      {code:".menu a {\n  display: inline-block;\n  padding: 8px 12px;\n}", lang:"css", cap:"The links stay side by side, and their padding now pushes neighbouring lines away instead of overlapping them."},
      {tip:"`display` changes only how an element is drawn, not what it means. A link styled as a block is still a link to screen readers and keyboards. Choose HTML elements for their meaning (Unit 2), then use CSS for the look."},
      "Setting `display: none` removes an element from the page entirely, as if it weren’t there. Lesson 5 adds two more values, `flex` and `grid`, which lay out an element’s children."
    ]},
    {h:"When margins collapse", body:[
      "One quirk to know about. When two block boxes sit one above the other, their vertical margins don’t add up. They overlap, and the gap is the **larger** of the two. This is called margin collapsing:",
      {code:"h2 {\n  margin-bottom: 24px;\n}\n\np {\n  margin-top: 16px;\n}", lang:"css", cap:"The gap between the heading and the paragraph below it is 24 px, not 40 px."},
      "It was designed for text: a heading’s space below and a paragraph’s space above shouldn’t double up. A few things to know:",
      {list:[
        "It only happens to **vertical** margins (top and bottom), never left and right.",
        "It doesn’t happen between items in a flex or grid layout (Lesson 5).",
        "A child’s top margin can collapse through its parent and appear above the parent instead, if the parent has no border or padding on that side. A little padding on the parent stops it."
      ]}
    ]},
    {h:"Centring a block", body:[
      "A block fills its container’s width, so there’s nothing to centre until you limit its width. Then set the left and right margins to `auto`, and the browser shares the leftover space equally between them:",
      {code:".page {\n  max-width: 40rem;\n  margin: 0 auto;\n}", lang:"css", weblab:"wl-center", cap:"On a wide screen, the content is a centred 40rem column. On a phone narrower than 40rem, it simply fills the width, with nothing to scroll sideways."},
      "`max-width` is better than `width` here: `width: 40rem` would force a column wider than a phone’s screen. You’ll also see `margin-inline: auto`, which sets just the left and right margins (more precisely, the start and end of a line, which also suits right-to-left languages).",
      {table:[
        ["To centre…","Use"],
        ["Text and inline content inside a box","`text-align: center` on the box"],
        ["A block, horizontally","A `max-width` (or `width`) plus `margin: 0 auto`"],
        ["Anything, in both directions","Flexbox or grid on the parent (Lesson 5)"]
      ]},
      {lab:"wl-center", t:"Practise: centre a box on the page"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`width` is the width you see.”** Only with `border-box`. By default, padding and border are added to it.",
        "**“Margin is part of the box’s size.”** Margin is space outside the border. It affects layout but not the box’s own width or background.",
        "**“Two margins of 24 px and 16 px make a 40 px gap.”** Vertical margins between blocks collapse to the larger, 24 px.",
        "**“`text-align: center` centres the box.”** It centres the content inside the box. To centre the box itself, use automatic margins or the parent’s layout.",
        "**“`border: 2px red` should work.”** Without a style such as `solid`, the border style is `none` and nothing is drawn."
      ]}
    ]}
   ],
   try:[
    {id:"t2u3-l4-x1", type:"order", q:"Put the four layers of the box model in order, from the **innermost** to the **outermost**.", items:[
      {t:"Content", why:"The text or image itself, at the centre."},
      {t:"Padding", why:"Space inside the border, around the content. The background shows through it."},
      {t:"Border", why:"The frame line around the padding."},
      {t:"Margin", why:"Transparent space outside the border, separating this box from others."}
    ]},
    {id:"t2u3-l4-x2", type:"number", q:"Priya’s card has `width: 300px; padding: 16px; border: 2px solid gray; margin: 16px;` and uses the default `box-sizing`. How wide is the card on screen, from the outer edge of one border to the other?", answer:336, tol:0, unit:"px", why:"With the default `content-box`, width is the content only. Add padding and border on both sides: 300 + 16 + 16 + 2 + 2 = **336 px**. The margin is outside the border, so it isn’t part of the visible width.", wrongs:[
      {v:300, tol:0, why:"That’s the content width. By default, padding and border are added outside it."},
      {v:318, tol:0, why:"That adds the padding and border on one side only. Both left and right count: 300 + 32 + 4."},
      {v:332, tol:0, why:"That adds the padding but forgets the 2 px border on each side."},
      {v:368, tol:0, why:"That includes the margin as well. Margin is space outside the border, not part of the card’s visible width."}
    ]},
    {id:"t2u3-l4-x3", type:"number", q:"Now Priya adds `box-sizing: border-box` to the same card (`width: 300px; padding: 16px; border: 2px solid gray;`). How wide is the **content area** inside the padding?", answer:264, tol:0, unit:"px", why:"With `border-box`, the 300 px includes padding and border, so the content gets what’s left: 300 − 16 − 16 − 2 − 2 = **264 px**.", wrongs:[
      {v:300, tol:0, why:"With `border-box`, 300 px is the whole box including padding and border. The content area is smaller."},
      {v:268, tol:0, why:"That subtracts the padding but forgets the 2 px border on each side."},
      {v:282, tol:0, why:"That subtracts padding and border from one side only. Both sides count: 300 − 32 − 4."}
    ]},
    {id:"t2u3-l4-x4", type:"sort", q:"Without any CSS of your own, which of these elements are block boxes and which are inline?", buckets:["Block","Inline"], items:[
      {t:"`<p>`", b:0, why:"Paragraphs start on a new line and fill the width of their container."},
      {t:"`<h2>`", b:0, why:"All headings are block boxes."},
      {t:"`<section>`", b:0, why:"Sectioning elements are blocks that group content."},
      {t:"`<li>`", b:0, why:"List items display as `list-item`, which is a block box with a marker (the bullet or number)."},
      {t:"`<a>`", b:1, why:"Links sit inside a line of text. That’s why setting their width does nothing unless you change `display`."},
      {t:"`<span>`", b:1, why:"A span is a meaning-free inline wrapper, made for marking part of a line."},
      {t:"`<strong>`", b:1, why:"Strong importance is marked inline, within a sentence."},
      {t:"`<em>`", b:1, why:"Emphasis is inline, within a sentence."}
    ]},
    {id:"t2u3-l4-x5", type:"mcq", q:"Lucía writes `.notice { border: 3px teal; }` but no border appears. Why?", options:[
      {t:"There’s no border style, and the default style is `none`", ok:true, why:"A border needs a style such as `solid` to be drawn. `border: 3px solid teal` works."},
      {t:"`teal` isn’t a valid CSS colour", why:"`teal` is one of the named colours. The problem is the missing style."},
      {t:"Borders need `border-width`, `border-style` and `border-color` written separately", why:"The `border` shorthand is fine; it just needs a style among its values."},
      {t:"3 px is too thin to see", why:"A 3 px solid border is clearly visible. With no style, though, its width is treated as 0."}
    ]},
    {id:"t2u3-l4-x6", type:"number", q:"A heading has `margin-bottom: 32px`. The paragraph straight after it has `margin-top: 20px`. Both are ordinary blocks in normal page flow (not flex or grid). How big is the gap between them?", answer:32, tol:0, unit:"px", why:"Vertical margins between adjacent blocks collapse: they overlap, and the gap is the larger of the two, **32 px**.", wrongs:[
      {v:52, tol:0, why:"That adds the two margins. Vertical margins between blocks collapse to the larger one instead."},
      {v:20, tol:0, why:"The gap is the **larger** margin, not the smaller."},
      {v:26, tol:0, why:"Margins aren’t averaged. The larger one, 32 px, wins."}
    ]},
    {id:"t2u3-l4-x7", type:"mcq", q:"Hana wants her `.card` to sit in the middle of the page, horizontally, as a box about 20rem wide. Which CSS does that?", options:[
      {t:"`.card { max-width: 20rem; margin: 0 auto; }`", ok:true, why:"Limiting the width leaves spare space, and `auto` left and right margins share it equally, centring the box."},
      {t:"`.card { text-align: center; }`", why:"That centres the text **inside** the card. The card itself still fills the full width."},
      {t:"`.card { margin: 0 auto; }`", why:"Without a width limit, a block already fills its container, so there’s no spare space for the auto margins to share."},
      {t:"`.card { max-width: 20rem; padding: 0 auto; }`", why:"Padding can’t be `auto`, so that declaration is invalid and skipped. Only margins share out spare space."}
    ]},
    {id:"t2u3-l4-x8", type:"mcq", q:"Oluwaseun writes `padding: 10px 20px 30px;`. How much padding does the **left** side get?", options:[
      {t:"20px", ok:true, why:"With three values, they mean top, left-and-right, bottom. So the left copies the right: 20px."},
      {t:"30px", why:"30px is the bottom. With three values the order is top, then left and right together, then bottom."},
      {t:"0, because no fourth value was given", why:"A missing fourth value isn’t zero: the left side copies the right side’s value."},
      {t:"10px", why:"10px is the top. The left side copies the right side’s value, 20px."}
    ]}
   ],
   apply:{intro:"Build and measure boxes until the sums feel natural. The first and third tasks work on any device in the Web Lab.", tasks:[
     {t:"Build a card and predict its size", how:["In the Web Lab, write a `<div class=\"card\">` with a short paragraph inside.","Give `.card` a width, padding, a border and a margin. Before running, write down how wide you expect it to be on screen.","Add a background colour so you can see where the padding ends. Then add `box-sizing: border-box` and predict again."], write:"Your two predictions and what you saw."},
     {t:"See the box model in developer tools (optional, on a computer)", how:{
       win:["On any page, right-click a paragraph and choose **Inspect**.","In Chrome or Edge, open the **Computed** tab: a diagram at the top shows the element’s margin, border, padding and content sizes. Firefox shows the same diagram in its **Layout** tab.","Hover over elements in the HTML panel: the page highlights content, padding and margin in different colours. Find a heading and a paragraph and look at how their margins meet."],
       mac:["On any page, right-click a paragraph and choose **Inspect** (Safari: **Inspect Element**).","Chrome and Edge show a box-model diagram in the **Computed** tab; Firefox in its **Layout** tab; Safari in its **Computed** or **Layout** section.","Hover over elements in the HTML panel and watch the coloured highlights for padding and margin."],
       chromeos:["On any page, right-click (two-finger tap) a paragraph and choose **Inspect**.","Open the **Computed** tab and look at the box-model diagram at the top.","Hover over elements in the HTML panel and watch the coloured highlights for padding and margin."],
       phone:["Without developer tools, give elements temporary backgrounds and borders in the Web Lab (for example `* { outline: 1px solid red; }`) to see where each box ends. Outlines don’t take up space, so they don’t change the layout."]
     }},
     {t:"Centre a reading column", how:["In the Web Lab, wrap a few paragraphs in `<main class=\"page\">`.","Give `.page` a `max-width` in `rem` and `margin: 0 auto`, plus some padding.","Make the preview wider and narrower (turn your phone sideways, or resize the window) and check the column stays centred and never needs sideways scrolling."]}
   ], proof:"A card whose on-screen width you predicted correctly under both box-sizing models, and a centred column that fits a phone screen without sideways scrolling."},
   read:[
     {book:"mdn", where:"CSS styling basics → “The box model”", note:"Covers block and inline boxes, the two box models, margin collapsing and inline-block, with live examples."},
     {book:"mdn", where:"CSS styling basics → “Sizing items in CSS” (min- and max- sizes, percentages, viewport units)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u3-l5", title:"Layout: flexbox, grid and responsive design", minutes:65,
   goals:[
     "Line items up in a row with flexbox, and control spacing and alignment with `gap`, `justify-content`, `align-items` and `flex-wrap`",
     "Build a grid of columns with `grid-template-columns`, the `fr` unit, `repeat()` and `gap`",
     "Choose between flexbox and grid for a layout",
     "Make a page responsive: the viewport tag, flexible widths, images that shrink, and mobile-first media queries"
   ],
   hook:{q:"A page has no viewport `<meta>` tag. How wide do many phone browsers, including Safari on iPhone, pretend the screen is when they lay it out?", options:["Exactly as wide as the phone","About 360 px","About 980 px","1920 px, a full desktop screen"], answer:2, reveal:"About 980 px. Without the tag, phone browsers assume the page was designed for a desktop, lay it out about 980 px wide and shrink the whole thing to fit, so text becomes tiny. One line in the `<head>` fixes it, and it’s the first step of responsive design, which this lesson ends with."},
   learn:[
    {h:"From stacked boxes to layouts", body:[
      {lead:"Left alone, block boxes stack down the page and inline boxes flow along lines of text. That’s called normal flow."},
      "Normal flow is a good default: it’s readable on any screen. But real pages also need things side by side: a row of links, a header with a logo on the left and a menu on the right, a gallery of photos in columns.",
      "Modern CSS has two layout systems built for this, and every current browser supports both:",
      {list:[
        "**[[flexbox|Flexbox]]** lays items out in **one direction**: a row, or a column. Great for navigation bars, toolbars, a row of buttons, a card’s contents.",
        "**[[grid-layout|Grid]]** lays items out in **two directions**: rows and columns at once. Great for galleries, card grids and whole-page layouts."
      ]},
      "Both work the same way: you set `display` on the **parent** (the container), and its direct children are laid out. You may see older sites using floats or HTML tables for layout. Those methods are outdated for this job; floats are still used for wrapping text around an image."
    ]},
    {h:"Flexbox: a row of items", body:[
      "Here’s a café’s navigation, three links in a `<nav>`:",
      {code:'<nav class="links">\n  <a href="#menu">Menu</a>\n  <a href="#hours">Hours</a>\n  <a href="#find">Find us</a>\n</nav>', lang:"html", label:"HTML"},
      {code:".links {\n  display: flex;\n  gap: 1rem;\n}", lang:"css", weblab:"wl-flex-row", cap:"The links sit in a row, with exactly 1rem between neighbours and no extra space at the ends."},
      "`display: flex` makes `.links` a **flex container** and each child a **flex item**. Items line up along the **main axis**, which is a row by default (`flex-direction: row`). The other direction, across the row, is the **cross axis**.",
      "`gap` sets the space **between** items, which is cleaner than putting margins on each item: there’s no extra space before the first item or after the last.",
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="t2u3ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="40" y="30" width="290" height="116" rx="6" stroke-width="2"/><text class="s" x="48" y="24">.links { display: flex; }</text><rect class="d-lup" x="47" y="58" width="76" height="76" rx="6" stroke-width="2"/><text x="85" y="101" text-anchor="middle">item 1</text><rect class="d-lup" x="147" y="58" width="76" height="76" rx="6" stroke-width="2"/><text x="185" y="101" text-anchor="middle">item 2</text><rect class="d-lup" x="247" y="58" width="76" height="76" rx="6" stroke-width="2"/><text x="285" y="101" text-anchor="middle">item 3</text><path class="d-rose" d="M123,46 L147,46 M123,40 L123,52 M147,40 L147,52" stroke-width="2"/><text class="s" x="155" y="50">gap</text><path class="d-ink" d="M40,166 L328,166" stroke-width="2" marker-end="url(#t2u3ar2)"/><path class="d-ink" d="M20,30 L20,144" stroke-width="2" marker-end="url(#t2u3ar2)"/><text x="10" y="194">→ main axis (the row):</text><text class="s" x="26" y="210">justify-content spreads items along it</text><text x="10" y="232">↓ cross axis: align-items</text><text class="s" x="26" y="248">lines items up across the row</text></svg>', alt:"A flex container drawn as a wide panel holding three equal items side by side, with a small bracket marking the gap between items 1 and 2. A horizontal arrow under the container is the main axis, controlled by justify-content. A vertical arrow beside it is the cross axis, controlled by align-items.", cap:"A flex container and its two axes. `justify-content` works along the row; `align-items` works across it."},
      {lab:"wl-flex-row", t:"Practise: put items in a row with flexbox"}
    ]},
    {h:"Spacing and alignment in flexbox", body:[
      "Two properties on the container control where items sit:",
      {table:[
        ["Property","Works along","Common values"],
        ["`justify-content`","The main axis (the row)","`flex-start` (how the default behaves), `center`, `flex-end`, `space-between`, `space-evenly`"],
        ["`align-items`","The cross axis","`stretch` (default: items as tall as the row), `center`, `flex-start`, `flex-end`"]
      ]},
      "A header with a site name on the left and links on the right, centred vertically against each other:",
      {code:".header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}", lang:"css", cap:"`space-between` pushes the first item to the start and the last to the end, sharing the leftover space between them. `align-items: center` lines up their middles."},
      "When there isn’t enough room, flex items squeeze onto one line by default. For a set of tags or buttons, let them wrap onto new lines instead:",
      {code:".tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}", lang:"css", cap:"On a phone the tags flow onto two or three lines, with 0.5rem between them in both directions."},
      "To make items share the space equally, give each one `flex: 1`. Three `.column` items with `flex: 1` in a flex container each take a third of the width (minus the gaps). And `flex-direction: column` turns the main axis downwards, which is handy for stacking things inside a card.",
      {tip:"Easy way to remember: `justify-content` follows the direction items flow (the main axis); `align-items` works across it. In a row, `align-items: center` is how you centre vertically."}
    ]},
    {h:"Grid: rows and columns", body:[
      "Grid is for layouts where columns matter. You describe the columns on the container, and the children fill the cells in order, starting a new row when one is full:",
      {code:".gallery {\n  display: grid;\n  grid-template-columns:\n    repeat(3, 1fr);\n  gap: 1rem;\n}", lang:"css", weblab:"wl-grid", cap:"Three equal columns, 1rem apart. A fourth item starts the second row."},
      "Three new ideas in one rule:",
      {list:[
        "**`fr`** means a fraction of the free space: what’s left after gaps and fixed sizes. `1fr 2fr` makes two columns, the second twice as wide as the first.",
        "**`repeat(3, 1fr)`** is shorthand for `1fr 1fr 1fr`.",
        "**`gap`** works just as in flexbox: space between rows and columns, never around the outside."
      ]},
      {ex:"Container: 620 px wide\ngrid-template-columns: 1fr 2fr;\ngap: 20px;\n\nFree space: 620 − 20 = 600 px\n3 fractions: 600 ÷ 3 = 200 px each\nColumns: 200 px and 400 px", label:"Worked example: sharing out fr", mono:true},
      "One pattern does a lot of responsive work on its own. It fits as many columns as there’s room for, each at least 12rem wide:",
      {code:".gallery {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit, minmax(12rem, 1fr)\n  );\n  gap: 1rem;\n}", lang:"css", cap:"`minmax(12rem, 1fr)`: never narrower than 12rem, and sharing any extra space. On a phone that’s one column; on a laptop, three or four."},
      {table:[
        ["Choose","When"],
        ["Flexbox","Items in one line that wraps: menus, toolbars, tags, the inside of a card"],
        ["Grid","You care about rows and columns lining up: galleries, card grids, page layout"]
      ]},
      "They combine well: a grid of cards, where each card uses flexbox inside.",
      {lab:"wl-grid", t:"Practise: lay out a grid with fr columns"}
    ]},
    {h:"Responsive design: one page, every screen", body:[
      "[[responsive|Responsive design]] means one page that adapts to any screen, from a small phone to a wide monitor, instead of a separate mobile site. It rests on a few habits.",
      "**1. The viewport tag.** This line belongs in every page’s `<head>`:",
      {code:'<meta name="viewport"\n  content="width=device-width, initial-scale=1">', lang:"html", cap:"It tells phone browsers to use the device’s real width as the [[viewport]] width, instead of pretending to be about 980 px wide."},
      "**2. Flexible widths.** Use `max-width`, percentages, `fr` and `rem` instead of fixed pixel widths for big boxes. A box set to `width: 800px` makes a 360 px phone scroll sideways; `max-width: 50rem` never does.",
      "**3. Images that shrink.** By default an image shows at its natural size, and a 2000 px photo pokes far out of a phone screen. This rule makes images shrink to fit their container, but never grow past their natural size:",
      {code:"img {\n  max-width: 100%;\n  height: auto;\n}", lang:"css", cap:"`height: auto` keeps the proportions when the width shrinks, even if the HTML gives the image `width` and `height` attributes."},
      "**4. Media queries where the layout needs to change.** Flexbox, grid and relative units already adapt a lot. When something should change at a certain width, such as going from one column to three, a [[media-query|media query]] applies rules only when a condition is true."
    ]},
    {h:"Mobile-first media queries", body:[
      "The usual approach is **mobile-first**: write the simple, single-column layout for narrow screens as your base CSS, then add media queries that adjust things when there’s more room. Here a community garden page shows its plots in one column on phones and three on wider screens:",
      {code:"/* Base: every screen */\n.plots {\n  display: grid;\n  gap: 1rem;\n}\n\n/* 40rem (640 px) and up */\n@media (min-width: 40rem) {\n  .plots {\n    grid-template-columns:\n      repeat(3, 1fr);\n  }\n}", lang:"css", weblab:"wl-responsive", cap:"At 360 px the plots stack; from 640 px they sit in three columns. The rules inside the braces only apply while the condition is true."},
      {fig:'<svg viewBox="0 0 340 260"><defs><marker id="t2u3ar3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="16" width="90" height="196" rx="10" stroke-width="2"/><rect class="d-sage" x="20" y="30" width="70" height="50" rx="4" stroke-width="1.5"/><rect class="d-sage" x="20" y="90" width="70" height="50" rx="4" stroke-width="1.5"/><rect class="d-sage" x="20" y="150" width="70" height="50" rx="4" stroke-width="1.5"/><text x="10" y="234">base CSS:</text><text class="s" x="10" y="250">one column</text><path class="d-ink" d="M108,114 L136,114" stroke-width="2" marker-end="url(#t2u3ar3)"/><rect class="d-panel" x="144" y="16" width="186" height="120" rx="8" stroke-width="2"/><rect class="d-lup" x="154" y="30" width="50" height="92" rx="4" stroke-width="1.5"/><rect class="d-lup" x="212" y="30" width="50" height="92" rx="4" stroke-width="1.5"/><rect class="d-lup" x="270" y="30" width="50" height="92" rx="4" stroke-width="1.5"/><text x="144" y="160">@media (min-width: 40rem)</text><text class="s" x="144" y="178">adds three columns when the</text><text class="s" x="144" y="194">screen is 640 px or wider</text></svg>', alt:"On the left, a tall narrow phone screen with three boxes stacked in one column, labelled base CSS, one column. An arrow points right to a wide screen with the same three boxes side by side in three columns, labelled at-media min-width 40rem, which adds three columns when the screen is 640 px or wider.", cap:"Mobile-first: the base CSS is the phone layout; the media query adds columns when there’s room."},
      "How to read `@media (min-width: 40rem)`: “when the viewport is at least 40rem wide”. In media queries, `rem` means the browser’s default font size (normally 16 px), so 40rem is 640 px, including exactly 640. Current browsers also accept the newer range form, `@media (width >= 40rem)`, which means the same thing.",
      "Why mobile-first? The base CSS stays simple, phones (which are often slower) don’t have to apply wide-screen rules only to undo them, and you’re pushed to decide what really matters on a small screen.",
      "Choose **breakpoints** (the widths where your layout changes) by looking at your content: make the window wider until the design starts to look stretched or empty, and add a query there. Don’t chase the sizes of particular phone models; there are far too many.",
      "You’ll also meet the opposite, `max-width`, which means “at most”. `@media (max-width: 600px)` applies at 600 px and narrower, including exactly 600. That’s the desktop-first way round, and it’s what the Web Lab challenge below asks for: two columns that stack on screens 600 px wide or narrower. (The mobile-first version starts stacked and uses `@media (min-width: 601px)` to go side by side.)",
      {lab:"wl-responsive", t:"Practise: stack two columns on screens 600 px or narrower"},
      {tip:"Test by changing the width. On a computer, drag the browser window narrower, or use the device toolbar in developer tools ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] in Chrome and Edge with the tools open; [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] on a Mac). Firefox calls it Responsive Design Mode: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]], or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:M]] on a Mac. On a phone, turn it sideways. Look for anything that makes the page scroll sideways."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`display: flex` goes on the items.”** It goes on the parent. The children become flex items automatically.",
        "**“`justify-content` centres vertically.”** In a row, it works horizontally (the main axis). `align-items` works across.",
        "**“Responsive means a separate mobile site.”** It means one page whose layout adapts to the space it has.",
        "**“I need a media query for every phone model.”** Flexible layouts adapt on their own; add breakpoints only where your content needs them.",
        "**“Without the viewport tag, my media queries will still work on phones.”** The phone pretends to be about 980 px wide, so your narrow-screen rules never apply."
      ]}
    ]}
   ],
   try:[
    {id:"t2u3-l5-x1", type:"mcq", q:"Kenji wants the four `<li>` items of his `<ul class=\"steps\">` side by side in a row. Where does `display: flex` go?", options:[
      {t:"On the `ul`: `.steps { display: flex; }`", ok:true, why:"Flexbox is set on the container. Its direct children, the four `li` elements, become flex items and line up in a row."},
      {t:"On each `li`: `.steps li { display: flex; }`", why:"That makes each `li` a flex container for its own contents. The `li` elements themselves still stack, because their parent isn’t a flex container."},
      {t:"On the `body`", why:"Only direct children of a flex container become flex items. The `li` elements are inside the `ul`, so a flex `body` would lay out the `ul` and its siblings, not the list items."},
      {t:"On the `ul` and on every `li`, or it won’t work", why:"Only the container needs it. Adding it to the items too changes how each item’s own contents are arranged."}
    ]},
    {id:"t2u3-l5-x2", type:"match", q:"A flex container in its default row direction has three items and plenty of spare space. Match each `justify-content` value with what you’d see.", pairs:[
      ["flex-start","All three items bunched at the start of the row","It’s what the default does: items start at the beginning of the main axis, and the spare space is left at the end."],
      ["center","The items bunched together in the middle","The spare space is split equally before the first item and after the last."],
      ["flex-end","The items bunched at the end of the row","The spare space goes before the first item."],
      ["space-between","First item at the start, last at the end, equal gaps between the items","The spare space is shared out equally between the items, with none at the two ends."]
    ]},
    {id:"t2u3-l5-x3", type:"mcq", q:"Amara’s header is a flex row containing a small logo and a taller block of links. She wants their **vertical** centres lined up. Which declaration on the header does that?", options:[
      {t:"`align-items: center`", ok:true, why:"In a row, the cross axis runs vertically, and `align-items` positions items along the cross axis."},
      {t:"`justify-content: center`", why:"In a row, `justify-content` works horizontally, along the main axis. It would move both items to the middle of the row instead."},
      {t:"`text-align: center`", why:"That centres lines of text inside each box. It doesn’t align flex items with each other."},
      {t:"`vertical-align: middle`", why:"`vertical-align` applies to inline boxes and table cells, not to flex items."}
    ]},
    {id:"t2u3-l5-x4", type:"number", q:"A grid container is exactly 620 px wide (no padding or border) with `grid-template-columns: 1fr 2fr;` and `gap: 20px;`. How wide is the **second** column?", answer:400, tol:0.5, unit:"px", why:"First take the gap out: 620 − 20 = 600 px of free space. There are 3 fractions (1 + 2), so 1fr = 200 px and the second column, 2fr, is **400 px**.", wrongs:[
      {v:413.33, tol:0.5, why:"That shares out all 620 px without taking the 20 px gap out first. `fr` divides the space left **after** gaps."},
      {v:310, tol:0.5, why:"That splits the width in half. `1fr 2fr` gives the second column twice the share of the first, not an equal share."},
      {v:200, tol:0.5, why:"200 px is one fraction, the width of the **first** column. The second column is 2fr: 400 px."}
    ], hint2:"Subtract the gap, then divide by the total number of fractions."},
    {id:"t2u3-l5-x5", type:"mcq", q:"Which of these means exactly the same as `grid-template-columns: repeat(3, 1fr);`?", options:[
      {t:"`grid-template-columns: 1fr 1fr 1fr;`", ok:true, why:"`repeat(3, 1fr)` writes `1fr` three times: three equal columns."},
      {t:"`grid-template-columns: 3fr;`", why:"That’s a single column taking all the free space. The number of values is the number of columns."},
      {t:"`grid-template-columns: 33%;`", why:"That’s one column a third wide, with nothing for the other two. Percentages also ignore the gap, so three 33% columns plus gaps could overflow."},
      {t:"`grid-template-rows: 1fr 1fr 1fr;`", why:"That defines three rows, not three columns."}
    ]},
    {id:"t2u3-l5-x6", type:"sort", q:"Ana’s stylesheet has `@media (min-width: 40rem) { … }`. The browsers use the usual default font size of 16 px. At which viewport widths do the rules inside apply?", buckets:["Rules apply","Rules don’t apply"], items:[
      {t:"360 px (a phone held upright)", b:1, why:"360 is less than 640 (40 × 16), so the condition is false and the base styles are used."},
      {t:"639 px", b:1, why:"Just short: the viewport has to be at least 640 px."},
      {t:"640 px", b:0, why:"`min-width` means “at least”, so exactly 640 px counts."},
      {t:"800 px (a phone held sideways, or a small tablet)", b:0, why:"800 is at least 640."},
      {t:"1280 px (a laptop)", b:0, why:"Any width of 640 or more matches."},
      {t:"412 px", b:1, why:"Below 640, so the rules don’t apply."}
    ]},
    {id:"t2u3-l5-x7", type:"mcq", q:"Fatima’s layout switches to one column below 640 px, and it works when she narrows her laptop’s browser window. On her phone, though, she sees a tiny three-column page. What’s the most likely cause?", options:[
      {t:"The page is missing `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`", ok:true, why:"Without it, the phone lays the page out as if it were about 980 px wide and shrinks it, so the narrow-screen rules never apply."},
      {t:"Phones don’t support media queries", why:"Every current phone browser supports media queries. They’re just measuring a pretend 980 px width here."},
      {t:"She needs a separate stylesheet for phones", why:"One stylesheet with media queries is enough. The phone just needs to report its real width."},
      {t:"Her breakpoint should use px instead of rem", why:"Either unit works in media queries. The real issue is the width the phone reports."}
    ]},
    {id:"t2u3-l5-x8", type:"mcq", q:"Tomás’s 1600 px wide photo makes his page scroll sideways on phones. The HTML gives it `width=\"1600\" height=\"900\"`. Which CSS fixes it without distorting the photo?", options:[
      {t:"`img { max-width: 100%; height: auto; }`", ok:true, why:"The image can shrink to its container’s width but never grows past its natural size, and `height: auto` keeps its proportions."},
      {t:"`img { width: 100%; height: 100%; }`", why:"`width: 100%` would stretch small images too, and `height: 100%` doesn’t keep the proportions, so photos can be squashed."},
      {t:"`img { max-width: 100%; }` on its own", why:"The width shrinks, but the `height=\"900\"` attribute still sets the height to 900 px, so the photo is squashed. `height: auto` is needed too."},
      {t:"`body { overflow: hidden; }`", why:"That hides the overflow instead of fixing it: the right part of the photo (and anything else wide) is cut off and can’t be reached."}
    ]}
   ],
   apply:{intro:"Build a small responsive page, such as a club’s event page or a portfolio. All three tasks work in the Web Lab on a phone; turning the phone sideways is a handy way to test.", tasks:[
     {t:"Make a navigation row with flexbox", how:["In the Web Lab, write a `<nav>` with four links.","Make it a flex row with a `gap`. Then try each `justify-content` value from this lesson and watch the links move.","Add `flex-wrap: wrap` and make the preview narrow. Do the links wrap neatly?"]},
     {t:"Build a photo or card grid", how:["Add six cards (or images with alt text) inside a `<div class=\"gallery\">`.","Give the gallery `display: grid`, `gap: 1rem` and `grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr))`.","Add `img { max-width: 100%; height: auto; }`. Change the preview width and count the columns at different sizes."], write:"How many columns did you see at your narrowest and widest sizes?"},
     {t:"Go mobile-first with a media query", how:{
       win:["Write a one-column base layout, then add `@media (min-width: 40rem)` that switches a section to two or three columns.","Test it: open the page in Chrome or Edge, press [[kbd:F12]], then [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] for the device toolbar, and drag the width across 640 px. (Firefox: Responsive Design Mode, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]].)","At 360 px wide, check that nothing makes the page scroll sideways."],
       mac:["Write a one-column base layout, then add `@media (min-width: 40rem)` that switches a section to two or three columns.","Test it: in Chrome or Edge, open the developer tools ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]]), then press [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] for the device toolbar. In Safari, choose **Develop → Enter Responsive Design Mode**. Drag the width across 640 px.","At 360 px wide, check that nothing makes the page scroll sideways."],
       chromeos:["Write a one-column base layout, then add `@media (min-width: 40rem)` that switches a section to two or three columns.","Open the developer tools ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]]), then press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] for the device toolbar. Drag the width across 640 px.","At 360 px wide, check that nothing makes the page scroll sideways."],
       phone:["Write a one-column base layout in the Web Lab, then add `@media (min-width: 40rem)` that switches a section to two or three columns.","Run it with the phone upright (usually under 640 px wide), then turn it sideways. Many phones are wider than 640 px sideways; if yours isn’t, try `30rem` (480 px) for this test.","Upright, check that nothing makes the page scroll sideways."]
     }, write:"At what width did your layout change, and did anything overflow?"}
   ], proof:"A page with a flexbox navigation row, a grid of cards or images that shrink to fit, and a mobile-first media query that changes the layout, with no sideways scrolling at 360 px."},
   read:[
     {book:"mdn", where:"CSS layout → “Flexbox” and “CSS grid layout”"},
     {book:"mdn", where:"CSS layout → “Responsive web design” and “Media query fundamentals”", note:"Then try the module’s “Challenge: mobile-first”."}
   ]
  }
  ],
  checkpoint:["t2u3-q02","t2u3-q05","t2u3-q07","t2u3-q11","t2u3-q14","t2u3-q17","t2u3-q20","t2u3-q24","t2u3-q30","t2u3-q34","t2u3-q39","t2u3-q43"],
  codex:[
   {id:"css-rules", title:"CSS rules and where CSS goes", aka:["CSS syntax","declaration","property","value","stylesheet","link rel stylesheet","style element","inline style","CSS comments"], tags:["css","basics"],
    summary:"A CSS rule is a selector plus a block of property: value declarations; rules live best in a linked .css file.",
    levels:{
     starter:[
      "CSS (Cascading Style Sheets) is the language that controls how a web page looks: colours, fonts, spacing and layout. HTML says what things **are**; CSS says how they **look**.",
      "A stylesheet is a list of rules. Each rule names some elements and says how to style them:",
      {code:"h1 {\n  color: teal;\n  font-size: 2.5rem;\n}", lang:"css"},
      {list:["`h1` is the **selector**: which elements to style.","Inside the braces are **declarations**, each a **property** (`color`), a colon, a **value** (`teal`) and a semicolon."]},
      "Put your CSS in its own file, such as `styles.css`, and link it from each page’s `<head>` with `<link rel=\"stylesheet\" href=\"styles.css\">`. Then one file styles the whole site.",
      {key:"Selector, braces, property: value; — that’s every CSS rule."},
      "Browsers are forgiving with CSS: if you misspell something, they skip just that piece and carry on, without showing any error on the page. That’s kind, but it means a typo can go unnoticed, so check your spelling (CSS uses `color`, not `colour`) and your semicolons."
     ],
     builder:[
      "**Three places for CSS.** A linked file (`<link rel=\"stylesheet\" href=\"…\">` in the `<head>`) reaches every page that links it and is cached by the browser. A `<style>` element in the `<head>` affects one page. A `style` attribute affects one element and is the hardest to override or maintain; MDN calls it bad practice except where unavoidable (HTML email, styles set by JavaScript, some content-management systems).",
      "**Syntax details.** Spaces and line breaks between parts don’t matter. Property names and keywords use American spelling (`color`, `center`). The last semicolon in a block is optional, but writing it prevents mistakes later. Lengths need a unit touching the number (`16px`, not `16 px`), except zero.",
      "**Comments** are written `/* like this */` and can span lines. `//` is not a CSS comment: the parser treats it as invalid content, which swallows the next declaration (inside a block) or the next rule (outside one).",
      "**Errors.** Browsers skip what they can’t parse and carry on. An unknown property or invalid value loses just that declaration. A missing semicolon joins two declarations into one invalid one, so both are lost. One invalid selector in a comma-separated list drops the whole rule. Developer tools mark invalid declarations with a warning icon.",
      {tip:"If a whole stylesheet seems to do nothing, check the `href` path first, then look for an unclosed brace or comment near the top."}
     ],
     pro:[
      "**Error recovery is specified.** The CSS Syntax specification defines how parsers recover: a declaration is consumed up to the next `;` at the same nesting level (or the end of the block), and the whole thing is dropped if it doesn’t match the property’s grammar. That’s why `color: navy` followed by a newline and `font-size: 3rem;` drops both. An unclosed block, string or comment is auto-closed at the end of the stylesheet, so a missing `}` makes later rules part of the open block.",
      "**Nesting changes what a missing brace does.** Current browsers support CSS nesting, so rules accidentally left inside an unclosed block are now read as nested rules (matching only inside the outer selector) rather than as garbage. Either way, they stop applying as intended.",
      "**Selector lists.** `h1, p:hovr { … }` is dropped entirely because `:hovr` is invalid. The forgiving lists inside `:is()` and `:where()` are the exception: there, an invalid selector simply matches nothing. Use that only deliberately.",
      "**At-rules** start with `@`: `@media` (Lesson 5), `@font-face` (web fonts), `@import` (load another stylesheet; it must come before other rules and delays loading, so a second `<link>` is usually better), `@layer` (cascade layers), `@supports` (apply rules only if the browser supports a feature).",
      "**Shorthands** such as `margin`, `padding`, `border`, `font` and `background` set several longhands at once, and reset any longhand you leave out to its initial value. `background: teal` after `background-image: url(…)` removes the image.",
      "**Performance.** A linked stylesheet blocks rendering until it loads, so keep CSS lean and served from your own site. Inline styles don’t, but they can’t be cached across pages."
     ]
    },
    related:["css-selectors","cascade-specificity","css-debugging"],
    read:[{book:"mdn", where:"CSS styling basics → “What is CSS?” and “Getting started with CSS”"}],
    sources:[{t:"MDN: Getting started with CSS", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started"},{t:"MDN: CSS error handling", url:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_syntax/Error_handling"}], checked:"2026-11"},

   {id:"css-selectors", title:"CSS selectors", aka:["type selector","class selector","id selector","descendant combinator","selector list","grouping","combinators","universal selector"], tags:["css","selectors"],
    summary:"Selectors choose which elements a rule styles: by type, class, id, position inside other elements, or several at once.",
    levels:{
     starter:[
      "A selector is the part of a CSS rule that points at elements. The five you’ll use most:",
      {table:[["Selector","Example","Styles"],["Type","`p`","every paragraph"],["Class","`.price`","everything with `class=\"price\"`"],["ID","`#top`","the one element with `id=\"top\"`"],["Descendant","`nav a`","links inside a nav"],["Group","`h1, h2`","both h1 and h2"]]},
      "Classes are the everyday choice: you can put the same class on many elements, and an element can have several classes (`class=\"price special\"`).",
      {tip:"Class names are case-sensitive and must match exactly. `.price` won’t style `class=\"Price\"`."},
      "Ids are marked with `#` and must be unique on a page; classes are marked with `.` and can be reused as often as you like. Selectors can also be combined: `.menu li` (a space) means list items inside the menu, while `h1, h2` (a comma) applies one rule to both kinds of heading.",
      {key:"Dot for a class, hash for an id, space for “inside”, comma for “and also”."}
     ],
     builder:[
      "**Spaces, commas and no space.** These three look alike and mean very different things:",
      {table:[["Written","Means"],["`li.special`","an `li` that has the class `special`"],["`li .special`","something with class `special` inside an `li`"],["`li, .special`","every `li`, and also everything with class `special`"]]},
      "**More combinators.** Besides the descendant space, `>` selects direct children only (`ul > li`), `+` the next sibling (`h2 + p`, the paragraph straight after a heading) and `~` any later sibling.",
      "**Attribute selectors** match by attributes: `[type=\"email\"]`, `a[href^=\"https\"]` (starts with). **Pseudo-classes** match states and positions: `:hover`, `:focus-visible`, `:first-child`, `:nth-child(odd)`, `:checked`. **Pseudo-elements** style a part of an element: `::first-line`, `::before`, `::marker`.",
      "**The universal selector** `*` matches every element. It’s common in resets such as `*, *::before, *::after { box-sizing: border-box; }`.",
      "**Ids versus classes.** An id must be unique on its page, and it has much higher specificity than a class (see {{cascade-specificity}}). Use ids for link targets and form labels; use classes for styling.",
      "**Combining type and class.** `p.intro` matches only paragraphs with the class `intro`, while `.intro` matches any element with it. Adding the type makes the selector more specific and more limited, so only do it when you need to: a plain class is easier to reuse on another element later."
     ],
     pro:[
      "**Matching runs right to left.** Browsers evaluate selectors starting from the rightmost part (the key selector), then check ancestors. Modern engines are fast enough that selector performance rarely matters, but very broad key selectors combined with deep descendant chains are still the slowest kind.",
      "**Case.** In standards mode (pages starting with `<!doctype html>`), class and id names are case-sensitive; in quirks mode they aren’t. Type selectors are case-insensitive for HTML elements. Attribute values can be matched case-insensitively with an `i` flag: `[type=\"email\" i]`.",
      "**Functional pseudo-classes.** `:is(a, b)` and `:where(a, b)` match any selector in their list; `:is()` takes the specificity of its most specific argument, `:where()` always has zero specificity, which makes it ideal for default styles that are easy to override. `:not(…)` excludes, and `:has(…)` selects an element by what it contains, such as `form:has(:invalid)`. All are in current browsers.",
      "**Naming conventions.** Larger projects use naming schemes such as BEM (`card__title--large`) or utility classes to keep specificity flat and names predictable. Whatever you choose, keep selectors as short as they can be while still being clear: long chains tie your CSS to the HTML structure, so a small HTML change breaks the styling.",
      "**Testing selectors.** In developer tools, `document.querySelectorAll(\"nav a\")` in the console returns exactly the elements a selector matches, which is a quick way to check one."
     ]
    },
    related:["css-rules","cascade-specificity"],
    read:[{book:"mdn", where:"CSS styling basics → “Basic CSS selectors”, “Attribute selectors”, “Pseudo-classes and pseudo-elements” and “Combinators”"}],
    sources:[{t:"MDN: Basic CSS selectors", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors"},{t:"MDN: Combinators", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators"}], checked:"2026-11"},

   {id:"cascade-specificity", title:"The cascade, specificity and inheritance", aka:["cascade","specificity","inheritance","!important","source order","inherit","cascade layers"], tags:["css","cascade"],
    summary:"When rules conflict, the browser picks a winner per property: importance, then inline styles, then specificity, then source order; inherited values are weakest.",
    levels:{
     starter:[
      "Often more than one rule styles the same element. The browser settles each property separately:",
      {ol:["`!important` declarations win (avoid them).","Inline `style` attributes beat stylesheet rules.","The more **specific** selector wins: an id beats a class, a class beats a type selector.","If it’s still a tie, the rule that comes **later** wins."]},
      "Some properties, mostly text ones like `color` and `font-family`, are **inherited**: children take their parent’s value unless a rule sets their own. Box properties like `margin`, `padding` and `border` aren’t inherited.",
      {key:"Specificity first, order second. And any direct rule beats an inherited value."},
      "So `.note { color: green; }` beats `p { color: purple; }` on `<p class=\"note\">`, even if the `p` rule comes later, because a class is more specific than a type selector."
     ],
     builder:[
      "**Counting specificity.** Count three columns, written ID-CLASS-TYPE: ids; classes, attribute selectors and pseudo-classes; type selectors and pseudo-elements. `*` and combinators count nothing. Compare columns from the left, like a medal table: `#nav a` (1-0-1) beats `.menu .item a` (0-2-1), because one id outranks any number of classes.",
      {table:[["Selector","Score"],["`li`","0-0-1"],["`ul li`","0-0-2"],["`.item`","0-1-0"],["`li.item:hover`","0-2-1"],["`#nav .item`","1-1-0"]]},
      "**Inheritance is weakest.** Specificity only compares rules matching the same element. `#main { color: navy }` reaches a paragraph inside only by inheritance, so `p { color: dimgray }` wins on the paragraph. That’s also why links ignore the body’s colour: the browser’s own stylesheet targets `a` directly. Use `color: inherit` to opt in.",
      "**`!important`** raises one declaration above all normal ones. In a stylesheet, only a more specific `!important`, or an equally specific later one, can beat it, so it tends to spread. Fix the cause instead: reorder rules or raise specificity slightly.",
      "**Keywords.** Every property accepts `inherit` (use the parent’s value), `initial` (the property’s default from the specification), `unset` (inherit if the property normally inherits, otherwise initial) and `revert` (back to the browser’s own style).",
      "**Only conflicting declarations lose.** If the losing rule also sets a property nobody else sets, that declaration still applies."
     ],
     pro:[
      "**The full cascade order.** The CSS Cascading and Inheritance specification sorts declarations by: origin and importance; context (for example, shadow DOM); whether they’re attached to the element (inline styles); cascade layers; specificity; and finally order of appearance. Origins run user-agent (the browser), user, author (you). For normal declarations, author beats user beats user-agent; for `!important` ones the order reverses, so a reader’s own important accessibility styles beat yours.",
      "**Cascade layers.** `@layer reset, base, components;` declares named layers; rules in later layers beat earlier ones regardless of specificity, and unlayered styles beat all layers. Layers let a team (or a third-party library) keep specificity contests contained. Important declarations reverse layer order too.",
      "**Specificity edge cases.** `:is()`, `:not()` and `:has()` take the specificity of their most specific argument; `:where()` contributes zero. `:nth-child()` counts as a pseudo-class. The inline `style` attribute isn’t a selector; it’s handled earlier in the cascade, which is why no selector can beat it.",
      "**Computed versus used values.** Inheritance passes the **computed** value. That’s why `line-height: 1.5` (a number) inherits as a ratio and adapts to each child’s font size, while `line-height: 1.5em` inherits as a fixed length computed on the parent, which can make headings’ lines overlap.",
      {tip:"Some developer tools, including Chrome’s and Firefox’s, show a selector’s specificity as three numbers when you hover over it in the Styles or Rules pane."}
     ]
    },
    related:["css-selectors","css-debugging","css-rules"],
    read:[{book:"mdn", where:"CSS styling basics → “Handling conflicts”, and the additional tutorial “Cascade layers”"}],
    sources:[{t:"MDN: Handling conflicts", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts"}], checked:"2026-11"},

   {id:"css-colors", title:"Colours in CSS and contrast", aka:["color","hex colour","rgb","hsl","named colours","alpha","opacity","contrast ratio","WCAG contrast","custom properties","CSS variables"], tags:["css","colour","accessibility"],
    summary:"Write colours as names, hex, rgb() or hsl(); store them in custom properties; and keep text at 4.5:1 contrast (3:1 for large text and interface parts).",
    levels:{
     starter:[
      "`color` sets text colour; `background-color` sets the background. The same purple can be written four ways: `rebeccapurple`, `#663399`, `rgb(102 51 153)` or `hsl(270 50% 40%)`.",
      "Hex codes are the most common: `#` then two digits each for red, green and blue, from `00` (none) to `ff` (full). `#ffffff` is white and `#000000` black.",
      "Whatever colours you choose, text must stand out clearly from its background. The international accessibility guidelines (WCAG 2.2, level AA) ask for a **contrast ratio** of at least **4.5:1** for normal text and **3:1** for large text. Light grey `#999999` on white is only about 2.85:1, so it fails.",
      {tip:"Check colour pairs with a contrast checker rather than by eye."},
      "Store your main colours once as custom properties, such as `--brand: #663399;`, so a change is made in one place."
     ],
     builder:[
      {table:[["Notation","Notes"],["Named","More than 140 keywords; easy to read, limited choice"],["Hex","`#rrggbb`; `#rgb` shorthand doubles each digit; 8 digits add opacity"],["`rgb()`","0–255 per channel; `/ 0.5` adds opacity; old comma form still works"],["`hsl()`","Hue angle, saturation %, lightness %; easy to make lighter and darker shades"]]},
      "**Custom properties** hold a value once and reuse it: declare `--brand: #663399;` in a `:root` rule and use `color: var(--brand);`. They inherit, can be changed inside any selector (a `.dark` section can redefine them), and take a fallback: `var(--brand, purple)`.",
      "**Contrast minimums (WCAG 2.2, AA):**",
      {list:["1.4.3: text 4.5:1; large text 3:1 (at least 18 pt, about 24 px, or 14 pt bold, about 18.7 px). Logos and purely decorative text are exempt; placeholder text isn’t.","1.4.11: visual parts needed to identify controls and their states (an input’s border, a checkbox outline, an icon button), and graphics needed to understand content, 3:1 against adjacent colours.","1.4.1 (level A): colour must not be the only way information is shown."]},
      "Thresholds aren’t rounded: `#777777` on white is 4.48:1 and fails; `#767676` is 4.54:1 and passes. Check with the WebAIM Contrast Checker or the colour picker in Chrome or Edge developer tools.",
      "Choose a palette with contrast in mind from the start; adjusting colours after a design is finished is much harder."
     ],
     pro:[
      "**How the ratio is calculated.** Each colour’s relative luminance L is computed from linearised sRGB channels (L = 0.2126 R + 0.7152 G + 0.0722 B). The ratio is (L1 + 0.05) / (L2 + 0.05), with the lighter colour on top, giving 1 to 21. Green dominates luminance, which is why yellow on white fails badly while blue on white often passes.",
      "**Opacity.** `rgb(… / 0.5)` makes only that colour translucent; the `opacity` property fades the whole element including its text and children. Contrast for translucent colours must be measured on the colour actually shown, after blending with what’s behind.",
      "**Modern colour.** CSS Color Level 4 adds `oklch()` and `oklab()` (perceptually even lightness, so palettes made by changing lightness look evenly spaced), `color()` for wide-gamut spaces such as Display P3, and `color-mix()`. Current browsers support them; keep an sRGB fallback earlier in the rule if you need older ones.",
      "**Dark mode.** `@media (prefers-color-scheme: dark)` lets you redefine your custom properties for readers who chose a dark theme, and `color-scheme: light dark` tells the browser to adapt form controls and scrollbars. Check contrast in both themes.",
      "**Beyond WCAG 2.** The draft WCAG 3 work has explored a different contrast method (APCA) that accounts for font size and weight. It isn’t a standard; WCAG 2.2’s ratios remain what laws and audits use."
     ]
    },
    related:["css-typography","css-units"],
    read:[{book:"mdn", where:"CSS styling basics → “CSS values and units”, section “Color”"}],
    sources:[{t:"W3C WAI: Understanding Success Criterion 1.4.3 Contrast (Minimum)", url:"https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"},{t:"W3C WAI: Understanding Success Criterion 1.4.11 Non-text Contrast", url:"https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"},{t:"MDN: CSS values and units", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units"}], checked:"2026-11"},

   {id:"css-units", title:"CSS units: px, rem, em, % and more", aka:["units","rem","em","px","percentage","ch","vw","vh","CSS pixel"], tags:["css","units"],
    summary:"Lengths need units: px for fixed details, rem for text and spacing that respect the reader’s settings, em for sizes that follow the local text, % and fr for shares of space.",
    levels:{
     starter:[
      "Most sizes in CSS are a number with a unit, written together: `16px`, `1.5rem`, `50%`.",
      {list:["`px`: a fixed size. Good for thin borders.","`rem`: a multiple of the page’s base text size, normally 16 px. `1.5rem` = 24 px.","`em`: a multiple of the nearby text size.","`%`: a share of the parent, such as `width: 50%`."]},
      "Use `rem` for font sizes. Many people set a bigger default text size in their browser, and `rem` sizes grow with it; `px` font sizes don’t.",
      {key:"rem looks at the root; em looks at the parent."},
      "Some values have no unit at all: `line-height: 1.5` means one and a half times the font size, and `0` can be written without a unit because zero is zero in any unit. A space between number and unit (`16 px`) makes the value invalid, and the browser skips it."
     ],
     builder:[
      {table:[["Unit","Relative to"],["`px`","A reference pixel: 1/96 of an inch at arm’s length; often 2–3 physical dots on phones"],["`rem`","The root element’s font size"],["`em`","For `font-size`, the parent’s font size; for other properties, the element’s own font size"],["`%`","Depends on the property: parent’s font size, containing block’s width…"],["`ch`","Width of the digit 0 in the current font"],["`vw` / `vh`","1% of the viewport’s width / height"]]},
      "**em compounds.** `li { font-size: 0.8em; }` makes nested list items shrink at every level: 12.8 px, then 10.24 px. `rem` avoids that.",
      "**em for padding** is handy on buttons: `padding: 0.5em 1em` grows with the button’s own text size.",
      "**Percentages of what?** For `width` and also for `padding` and `margin` (even top and bottom), a percentage is of the containing block’s **width**. For `height`, it’s of the container’s height, which only works if that height is set.",
      "**Unitless numbers** are not lengths: `line-height: 1.5` and `flex: 1` take plain numbers. Zero lengths need no unit.",
      "**px is not a screen dot.** A CSS pixel is defined so that things look about the same size on different screens. A high-resolution phone may use two or three physical dots for each CSS pixel, which is why `1px` borders still look thin and crisp there."
     ],
     pro:[
      "**Reader settings.** Browser text-size settings change the initial font size that `rem` (and `em` at the root) are based on. Avoid `html { font-size: 10px }`; if you want convenient maths, a percentage such as `62.5%` at least keeps scaling, but it makes every unset size small, so most teams simply work in rem with the 16 px default.",
      "**Media queries** resolve `em` and `rem` against the browser’s **initial** font size, not your `html` rule. A breakpoint of `40rem` is 640 px at the default setting and moves wider when the reader enlarges text, which keeps line lengths comfortable.",
      "**Viewport units.** On phones, `100vh` can be taller than the visible area when browser toolbars show. Newer units fix this: `svh` (small viewport, toolbars shown), `lvh` (large) and `dvh` (dynamic). Never size text in `vw` alone: it can’t be enlarged by text-size settings; combine it, as in `calc(1rem + 1vw)` or `clamp(1.25rem, 1rem + 2vw, 2.5rem)`.",
      "**Other units.** `lh` and `rlh` (line heights), `cap` and `ex` (font metrics), and container query units `cqw`/`cqi` (a share of a container’s size) are all available in current browsers. Absolute physical units (`cm`, `in`, `pt`) are mainly for print stylesheets.",
      "**`calc()`, `min()`, `max()` and `clamp()`** mix units: `width: min(100%, 40rem)` is a one-line responsive column."
     ]
    },
    related:["css-typography","responsive-design","box-model"],
    read:[{book:"mdn", where:"CSS styling basics → “CSS values and units” and “Sizing items in CSS”"}],
    sources:[{t:"MDN: CSS values and units", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units"},{t:"MDN: Fundamental text and font styling", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals"}], checked:"2026-11"},

   {id:"css-typography", title:"Typography: fonts, web fonts and readable text", aka:["font-family","font stack","generic family","web fonts","@font-face","Google Fonts","line-height","line length","measure"], tags:["css","typography"],
    summary:"A font stack ending in a generic family, text sized in rem, line height around 1.5 and lines under about 80 characters make text readable everywhere.",
    levels:{
     starter:[
      "`font-family` takes a list of fonts. The browser uses the first one available and falls back along the list, so always end with a generic family such as `sans-serif`:",
      {code:"body {\n  font-family: Verdana, sans-serif;\n  line-height: 1.5;\n}", lang:"css"},
      "Three settings matter most for comfortable reading: a clear font at a decent size (the default 16 px is a good minimum for body text), line height around 1.5, and lines that aren’t too long. WCAG suggests no more than 80 characters per line.",
      {tip:"`max-width: 60ch` on your main text column keeps lines comfortable on wide screens."},
      "Size body text in `rem` (1rem is 16 px by default) so it grows when readers choose a bigger text size in their browser settings. And give every font stack a fallback: web fonts can fail to load, and many phones don’t have the fonts a desktop has."
     ],
     builder:[
      "**Generic families:** `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, plus `system-ui` (the device’s interface font). Never quote them. Quote family names that contain spaces.",
      "**Web fonts.** Either self-host with `@font-face` (a WOFF2 file in your site, described by `font-family`, `src` and usually `font-display: swap`), or link a font service. Every weight and style is another file, so load only what you use, and check the licence allows web use.",
      "**Privacy.** Fonts loaded from a third-party server reveal each visitor’s IP address to that server. On 20 January 2022 the Munich Regional Court (Landgericht München I) ruled that a site breached the GDPR by passing visitors’ IP addresses to Google through embedded Google Fonts without consent, granted an injunction and awarded the visitor who sued €100 in damages. It is one regional court’s decision in one case, not a general rule (and not legal advice), but it is widely cited. Self-hosting the same files (Google Fonts are openly licensed) avoids the transfer.",
      "**Line height** should be unitless (`1.5`), so each element multiplies its own font size. Headings look better tighter (about 1.1–1.3).",
      "**Other text properties:** `font-weight` (100–900; `bold` is 700), `font-style: italic`, `text-align`, `letter-spacing`, `text-transform`, `text-decoration`. Avoid `text-align: justify` for body text: uneven word gaps hurt readability, and WCAG 1.4.8 lists unjustified text as an aid.",
      "**Vertical rhythm.** Consistent spacing helps readers: a margin below paragraphs of about `1em`, and more space above headings than below them, so each heading sits with the text it introduces."
     ],
     pro:[
      "**WCAG text guidance.** 1.4.4 Resize Text (AA): text can be enlarged to 200% without loss of content. 1.4.12 Text Spacing (AA): nothing breaks when readers override line height to 1.5, paragraph spacing to 2× the font size, letter spacing to 0.12 em and word spacing to 0.16 em, so avoid fixed heights on text boxes. 1.4.8 Visual Presentation (AAA): lines no wider than 80 characters (40 for Chinese, Japanese and Korean), no justification, line spacing at least 1.5.",
      "**Loading behaviour.** `font-display: swap` shows fallback text immediately and swaps when the font arrives; `optional` uses the web font only if it loads almost instantly, avoiding layout shifts. `size-adjust`, `ascent-override` and related descriptors in a fallback `@font-face` can make the fallback take the same space as the web font, reducing jumps. Preload the most important file with `<link rel=\"preload\" as=\"font\" type=\"font/woff2\" crossorigin>`.",
      "**Variable fonts** pack many weights (and sometimes widths or slants) into one file, controlled by `font-weight: 350` or `font-variation-settings`. One variable file can replace several static ones.",
      "**Subsetting** removes characters you don’t need, but be careful with multilingual sites: a Latin-only subset leaves names such as Łukasz or Nguyễn in a fallback font. `unicode-range` in `@font-face` lets the browser download a subset only when a page uses those characters.",
      "**System font stacks** (`font-family: system-ui, sans-serif`) cost nothing to load and look native, though the font differs between devices."
     ]
    },
    related:["css-units","css-colors"],
    read:[{book:"mdn", where:"CSS text styling → “Fundamental text and font styling” and “Web fonts”"}],
    sources:[{t:"MDN: Web fonts", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts"},{t:"W3C WAI: Understanding Success Criterion 1.4.8 Visual Presentation", url:"https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html"},{t:"Bayern.Recht: LG München I, judgment of 20 January 2022, 3 O 17493/20 (in German)", url:"https://www.gesetze-bayern.de/Content/Document/Y-300-Z-GRURRS-B-2022-N-612"}], checked:"2026-11"},

   {id:"box-model", title:"The box model", aka:["content box","padding","border","margin","box-sizing","border-box","content-box","display","block","inline","inline-block","margin collapsing","centring"], tags:["css","layout"],
    summary:"Every element is a box of content, padding, border and margin; box-sizing decides whether width includes padding and border.",
    levels:{
     starter:[
      "Every element on a page is a rectangle with four layers: the **content**, then **padding** (space inside the border), the **border** (a line), and **margin** (space outside, between this box and others).",
      {code:".card {\n  padding: 1rem;\n  border: 2px solid gray;\n  margin-bottom: 1.5rem;\n}", lang:"css"},
      "By default, `width` sets only the content, so padding and border make the box wider than you asked. Most sites add `box-sizing: border-box` to every element, so `width` means the whole visible box.",
      {key:"Padding is inside the border; margin is outside."},
      "Think of a framed picture: the picture is the content, the mount around it is the padding, the frame is the border, and the gap to the next frame on the wall is the margin. The background colour fills the content and padding, but never the margin, which is always transparent.",
      {tip:"To centre a block on the page, give it a `max-width` and `margin: 0 auto`."}
     ],
     builder:[
      "**Widths.** Default (`content-box`): visible width = width + left and right padding + left and right border. With `border-box`: visible width = width, and the content shrinks to fit. Margin is never part of the visible width.",
      "**Shorthand order.** One value: all sides. Two: top/bottom, left/right. Three: top, left/right, bottom. Four: top, right, bottom, left (clockwise).",
      "**Borders** need a style (`solid`, `dashed`…); the default style `none` draws nothing, whatever the width.",
      "**Display types.** Block boxes (`p`, `div`, `h1`, `li`) start on a new line and fill their container’s width. Inline boxes (`a`, `span`, `em`) flow in text; `width`, `height` and vertical margins don’t apply. `inline-block` flows like inline but sizes like a block.",
      "**Margin collapsing.** Adjacent vertical margins between blocks in normal flow combine into the larger one (24 px and 16 px give 24 px). Not horizontal margins, and not between flex or grid items.",
      "**Centring a block:** give it a `max-width` and `margin: 0 auto` (or `margin-inline: auto`).",
      "**Width: 100% and phones.** An element with `width: 100%` plus padding is wider than its container under the default model, a common cause of sideways scrolling on phones. `border-box` fixes it.",
      "**Centring.** `text-align: center` centres inline content inside a box; it doesn’t move the box. Automatic margins centre a block that has a width limit; flexbox or grid on the parent centre in both directions."
     ],
     pro:[
      "**The reset.** MDN shows `html { box-sizing: border-box; } *, *::before, *::after { box-sizing: inherit; }`, which lets a component opt back into `content-box` for its whole subtree; the simpler `*, *::before, *::after { box-sizing: border-box; }` is just as common.",
      "**Collapsing details.** Margins also collapse between a parent and its first or last child when no border, padding, inline content or new formatting context separates them, and through empty blocks. Negative margins combine as: largest positive plus most negative. Any of `display: flow-root`, `overflow: hidden` or `auto` (but not `clip`), or flex or grid layout on the parent prevents parent-child collapsing.",
      "**Logical properties.** `margin-inline`, `padding-block`, `inline-size` and friends describe sides by writing direction instead of physical left and right, so layouts adapt automatically to right-to-left languages such as Arabic and Hebrew, and to vertical text.",
      "**Overflow.** When content is bigger than its box, `overflow: auto` adds scrollbars only when needed; `overflow-wrap: anywhere` lets long words and URLs break instead of pushing the page wider than a phone screen.",
      "**`display` has two parts.** Modern CSS describes an outer type (how the box behaves among its siblings: block or inline) and an inner type (how it lays out its children: flow, flex, grid). `display: inline flex` is an inline-level flex container. Note that `display: contents` and `display: none` can affect how assistive technology reads an element in some cases, so test with a screen reader if you use them on meaningful elements."
     ]
    },
    related:["css-units","flexbox","css-debugging"],
    read:[{book:"mdn", where:"CSS styling basics → “The box model” and “Sizing items in CSS”"}],
    sources:[{t:"MDN: The box model", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"}], checked:"2026-11"},

   {id:"flexbox", title:"Flexbox", aka:["flex","display flex","justify-content","align-items","flex-wrap","flex-direction","gap","main axis","cross axis"], tags:["css","layout"],
    summary:"Flexbox lays a container’s children out in one direction, with gap for spacing and justify-content and align-items for alignment.",
    levels:{
     starter:[
      "Flexbox lines things up in a row (or a column). Put `display: flex` on the **parent**, and its children sit side by side:",
      {code:".links {\n  display: flex;\n  gap: 1rem;\n}", lang:"css"},
      "`gap` puts space between the items. `justify-content` spreads them along the row (`center`, `space-between`…) and `align-items` lines them up across it (`center` centres them vertically in a row).",
      {tip:"Flexbox is ideal for navigation bars, rows of buttons and tags, and arranging the inside of a card."},
      "Only the **direct children** of the flex container become flex items. Their own contents carry on as normal, unless you make them flex containers too.",
      "By default the items stay on one line and squeeze to fit. Add `flex-wrap: wrap` and they move onto new lines when there isn’t room, which is usually what you want on a phone.",
      {key:"Container gets `display: flex`; `justify-content` along the row, `align-items` across it."}
     ],
     builder:[
      {table:[["Property (on the container)","What it does"],["`flex-direction`","`row` (default) or `column`: the main axis"],["`justify-content`","Distributes items along the main axis"],["`align-items`","Aligns items on the cross axis; the default stretches them"],["`flex-wrap`","`wrap` lets items move to new lines instead of squeezing"],["`gap`","Space between items (and between wrapped lines)"]]},
      "**On the items**, `flex: 1` makes items share the free space equally; `flex: 2` on one item gives it twice the share. `align-self` overrides `align-items` for one item. `margin-left: auto` on one item pushes it, and everything after it, to the far end, a common trick for a menu with one link on the right.",
      "**Centring anything** in both directions: `display: flex; justify-content: center; align-items: center;` on the parent (give the parent a height if it needs one).",
      "**Accessibility.** The `order` property and `flex-direction: row-reverse` change the visual order but not the order screen readers and the Tab key follow. Keep the HTML in a sensible order instead.",
      "**Column direction.** With `flex-direction: column`, the main axis runs downwards, so `justify-content` works vertically and `align-items` horizontally. The names follow the axes, not the screen.",
      "**Wrapping and gaps.** With `flex-wrap: wrap`, `gap` also spaces the wrapped lines. That makes a set of tags or buttons that reflows neatly on any screen width without media queries."
     ],
     pro:[
      "**How sizes are worked out.** Each item starts at its `flex-basis` (by default its content or `width`), then free space is shared by `flex-grow`, or overflow is taken away by `flex-shrink` weighted by size. `flex: 1` is shorthand for `1 1 0%`: grow, shrink, start from zero, which is why items become equal widths regardless of content.",
      "**The min-width trap.** Flex items default to `min-width: auto`, so a long word or wide image can stop an item shrinking and overflow the container. `min-width: 0` on the item (or `overflow-wrap: anywhere` on its text) fixes it.",
      "**Defaults precisely.** `justify-content` and `align-items` both start as `normal`, which behaves as `flex-start`/`start` and `stretch` respectively in flex layout. With `flex-wrap: wrap`, `align-content` distributes the lines themselves.",
      "**Writing modes.** The main axis follows the text direction: in a right-to-left page, `row` runs right to left and `flex-start` is the right edge. That’s usually what you want.",
      "**`gap` in flexbox** is supported in all current browsers (it was grid-only until around 2021); older tutorials use margins instead.",
      "**Flex or grid inside?** Flexbox sizes items from their content outwards, so rows of different-length items look natural but don’t line up from row to row. When columns must align across rows, switch to grid."
     ]
    },
    related:["css-grid","responsive-design","box-model"],
    read:[{book:"mdn", where:"CSS layout → “Flexbox”"}],
    sources:[{t:"MDN: Flexbox", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox"}], checked:"2026-11"},

   {id:"css-grid", title:"CSS grid layout", aka:["grid","display grid","grid-template-columns","fr unit","repeat","minmax","auto-fit","gap"], tags:["css","layout"],
    summary:"Grid lays children out in rows and columns; fr shares out free space, repeat() saves typing, and auto-fit with minmax() makes responsive galleries.",
    levels:{
     starter:[
      "Grid arranges a container’s children in rows and columns. Describe the columns on the parent, and the children fill the cells in order:",
      {code:".gallery {\n  display: grid;\n  grid-template-columns:\n    repeat(3, 1fr);\n  gap: 1rem;\n}", lang:"css"},
      "`1fr` means one share of the free space, so `repeat(3, 1fr)` makes three equal columns. `gap` sets the space between them.",
      {tip:"Use grid when rows and columns should line up, as in galleries and card layouts; use flexbox for a single row of things."},
      "You can mix sizes: `grid-template-columns: 2fr 1fr` gives a wide main column and a narrower side column, and `15rem 1fr` gives a fixed-width sidebar next to a flexible area.",
      "Only the **direct children** of the grid container become grid items. Each item fills the next empty cell, row by row, and new rows are created as needed.",
      {key:"Columns on the parent; `fr` shares out the free space; `gap` spaces the cells."}
     ],
     builder:[
      "**fr maths.** Gaps and fixed-size tracks are taken out first; the rest is divided by the total number of fractions. 620 px with a 20 px gap and `1fr 2fr` gives 200 px and 400 px.",
      "**Mixing units.** `grid-template-columns: 15rem 1fr` gives a fixed sidebar and a flexible main column.",
      "**Auto-responsive columns.** `repeat(auto-fit, minmax(12rem, 1fr))` creates as many columns of at least 12rem as fit, and shares out the leftover space. No media query needed. `auto-fill` is similar but keeps empty column slots when there are few items.",
      "**Placing items.** `grid-column: 1 / -1` makes an item span from the first line to the last (full width). `grid-column: span 2` spans two columns. `grid-template-areas` lets you name regions (`\"header header\" \"nav main\"`) and place items with `grid-area`.",
      "**Rows.** Rows are created automatically as items fill the columns; `grid-auto-rows: minmax(8rem, auto)` gives them a minimum height.",
      "**Gaps.** `gap: 1rem` sets both row and column gaps; `gap: 2rem 1rem` sets rows then columns; `row-gap` and `column-gap` set one each. Gaps never appear around the outside edge of the grid.",
      "**Grid or flexbox?** Grid is for two-dimensional layouts where things should line up both ways; flexbox is for one row or column of items. They combine well: a grid of cards whose insides use flexbox."
     ],
     pro:[
      "**`1fr` has a hidden minimum.** `1fr` means `minmax(auto, 1fr)`, so a column won’t shrink below its content’s minimum size; a long URL can blow a column wider than its share. `minmax(0, 1fr)` allows it to shrink (then handle the overflow inside).",
      "**`min()` in tracks.** `repeat(auto-fit, minmax(min(12rem, 100%), 1fr))` stops the 12rem minimum overflowing containers narrower than 12rem, such as on very small phones or in a sidebar.",
      "**Subgrid.** `grid-template-columns: subgrid` lets a nested grid use its parent’s tracks, so headings and footers in a row of cards line up with each other. It’s supported in all current browsers.",
      "**Source order.** Like flexbox, grid placement can move items visually away from their HTML order. Screen readers and keyboard focus follow the HTML, so keep the reading order meaningful.",
      "**Container queries.** `container-type: inline-size` on a parent plus `@container (min-width: 30rem) { … }` lets a component change its grid based on its own width rather than the viewport’s, which suits reusable components.",
      "**Implicit grid.** When items outnumber the cells you defined, grid creates extra rows (or columns, with `grid-auto-flow: column`) automatically; `grid-auto-rows` and `grid-auto-columns` size them. `grid-auto-flow: dense` backfills gaps left by large items, at the cost of the visual order no longer matching the HTML."
     ]
    },
    related:["flexbox","responsive-design","media-queries"],
    read:[{book:"mdn", where:"CSS layout → “CSS grid layout”"}],
    sources:[{t:"MDN: CSS grid layout", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids"}], checked:"2026-11"},

   {id:"responsive-design", title:"Responsive design", aka:["responsive web design","RWD","viewport meta tag","mobile-first","fluid layout","responsive images","sideways scrolling"], tags:["css","layout","mobile"],
    summary:"One page that adapts to every screen: the viewport tag, flexible widths, images that shrink, and media queries where the layout must change.",
    levels:{
     starter:[
      "A responsive page works on a small phone and a wide monitor alike, without a separate mobile site. Four habits get you most of the way:",
      {ol:["Add `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` to every page’s `<head>`.","Use flexible widths (`max-width`, `%`, `fr`, `rem`) instead of fixed pixel widths.","Make images shrink: `img { max-width: 100%; height: auto; }`.","Start with the phone layout, then add media queries for wider screens (mobile-first)."]},
      {key:"If anything makes the page scroll sideways on a phone, something has a fixed width that’s too big."},
      "Test as you build: make your browser window narrow, or turn your phone sideways, and look for text that’s too small, boxes that overflow, or anything that makes you scroll sideways. Then try it with a larger text size, too."
     ],
     builder:[
      "**Why the viewport tag?** Without it, phone browsers lay pages out at a pretend width of about 980 px and shrink them, so text is tiny and narrow-screen media queries never apply.",
      "**Mobile-first CSS.** Base styles are the single-column layout; `@media (min-width: …)` blocks add columns and larger type as space allows. Pick breakpoints where your content starts to look stretched, not at particular device sizes.",
      "**Layouts that adapt without queries.** `repeat(auto-fit, minmax(12rem, 1fr))` grids, flexbox with `flex-wrap: wrap`, and `max-width` columns all adjust continuously.",
      "**Common causes of sideways scrolling:** fixed widths (`width: 800px`), `width: 100%` plus padding without `border-box`, wide tables, long unbroken URLs (fix with `overflow-wrap: anywhere`), and images or embedded videos without `max-width: 100%`.",
      "**Testing.** Developer tools have a device toolbar or responsive mode for trying widths. Test on real phones too, upright and sideways, and with a larger text size.",
      "**Mobile-first in practice.** Write the base CSS for a narrow screen with no media queries: one column, comfortable text, full-width images. Then widen the window and add a `min-width` media query only where the layout starts to look stretched. Most pages need just one to three breakpoints.",
      "**Relative units help.** Sizing text and spacing in `rem` and breakpoints in `rem` or `em` keeps the design in proportion when readers enlarge their text."
     ],
     pro:[
      "**Responsive images properly.** `srcset` with width descriptors and `sizes` lets the browser download a smaller file on small screens: `<img src=\"plot-800.jpg\" srcset=\"plot-400.jpg 400w, plot-800.jpg 800w\" sizes=\"(min-width: 40rem) 33vw, 100vw\" alt=\"…\">`. `<picture>` with `<source media=…>` switches crops (art direction). Always give `width` and `height` attributes so the browser reserves space and the page doesn’t jump.",
      "**Fluid type.** `font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem)` scales headings smoothly between limits. Including a rem part keeps text-size settings working; text sized only in `vw` can’t be enlarged by them, which WCAG 1.4.4 would flag.",
      "**WCAG 1.4.10 Reflow (AA).** Content must work at a width of 320 CSS pixels without scrolling in two directions (except things like maps, data tables and diagrams that need two dimensions). That is the same as a 1280 px wide window zoomed to 400%, so a good mobile layout also serves people who zoom.",
      "**Container queries** (`@container`) respond to a component’s own width rather than the viewport, which fits reusable components better than page-level breakpoints.",
      "**Input, not just size.** `@media (hover: hover)` and `(pointer: coarse)` detect touch versus mouse, and `prefers-reduced-motion` and `prefers-color-scheme` respect reader preferences.",
      "**Performance is part of it.** Phones are often on slower connections; serving appropriately sized images, few web fonts and lean CSS matters as much as the layout itself."
     ]
    },
    related:["media-queries","css-grid","flexbox","css-units"],
    read:[{book:"mdn", where:"CSS layout → “Responsive web design”"}],
    sources:[{t:"MDN: Responsive web design", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"}], checked:"2026-11"},

   {id:"media-queries", title:"Media queries", aka:["@media","breakpoints","min-width","max-width","range syntax","mobile-first","prefers-color-scheme"], tags:["css","layout","mobile"],
    summary:"@media blocks apply CSS only when a condition is true, usually a minimum viewport width in mobile-first design.",
    levels:{
     starter:[
      "A media query wraps rules that should only apply in certain conditions, most often when the screen is at least a certain width:",
      {code:"@media (min-width: 40rem) {\n  .plots {\n    grid-template-columns:\n      repeat(3, 1fr);\n  }\n}", lang:"css"},
      "Read it as “when the viewport is at least 40rem (640 px) wide, use three columns”. Below that width the rules inside are ignored.",
      {tip:"Write the phone layout first, then add `min-width` queries for bigger screens. That’s called mobile-first."},
      "Media queries are the main tool for **breakpoints**, the widths where a layout changes. The base CSS outside any query applies everywhere; the rules inside a query are extra rules that take part in the cascade only while the condition is true.",
      "Without the viewport meta tag, phones pretend to be about 980 px wide, so width-based media queries won’t behave as you expect there.",
      {key:"Base CSS for small screens; `@media (min-width: …)` to add to it."}
     ],
     builder:[
      "**Inclusive limits.** `min-width: 40rem` matches at exactly 640 px and wider; `max-width: 40rem` matches at 640 px and narrower. If you combine both kinds, avoid ranges that overlap or leave a gap at the boundary.",
      "**Range syntax.** Current browsers accept `@media (width >= 40rem)`, `(width < 40rem)` and `(30rem <= width <= 60rem)`, which are easier to read than min- and max-.",
      "**Units.** `em` and `rem` in media queries are based on the browser’s default font size (usually 16 px), so breakpoints move when readers enlarge text, keeping line lengths sensible. `px` works too.",
      "**Other conditions:** `orientation: landscape`, `prefers-color-scheme: dark`, `prefers-reduced-motion: reduce`, `hover: hover`, and the `print` media type (`@media print { nav { display: none; } }`).",
      "**Do you need one?** Often not: flexible grids and flexbox wrapping adapt by themselves. Add a query where the content genuinely needs a different arrangement.",
      "**Desktop-first** (the opposite approach) writes wide layouts first and uses `max-width` queries to undo them on small screens. It works, but tends to need more overriding CSS. Choose one approach per project so queries don’t fight each other.",
      "**Combining conditions.** `and` joins conditions (`(min-width: 40rem) and (orientation: landscape)`), a comma means “or” between whole queries, and `not` reverses a whole query."
     ],
     pro:[
      "**Specificity and order.** A media query adds no specificity. Its rules compete normally, so in mobile-first CSS the queries must come **after** the base rules they adjust, or the base rules will win on order.",
      "**Media types.** `screen`, `print` and `all` are the useful ones; old types like `handheld` and `tv` are deprecated and match nothing in current browsers.",
      "**Linking by condition.** `<link rel=\"stylesheet\" href=\"print.css\" media=\"print\">` applies a file only for printing; the browser still downloads it but at low priority, without blocking rendering.",
      "**Reduced motion.** Wrap large animations in `@media (prefers-reduced-motion: no-preference)` so they only run for people who haven’t asked their system to reduce motion. This supports WCAG 2.3.3 Animation from Interactions (AAA) and avoids discomfort for people with vestibular conditions.",
      "**Container queries** (`@container`) use similar syntax but test a parent container’s size, set up with `container-type: inline-size`.",
      "**Breakpoints by content.** Device widths change every year, so breakpoints tied to particular phones age badly. Widen the page until the content looks wrong (lines too long, a gallery too sparse) and add a breakpoint there; name them with custom properties or comments so the team uses the same few.",
      "**Testing.** Developer tools’ device toolbars emulate widths and touch, but test on at least one real phone too: browser toolbars, on-screen keyboards and text-size settings all affect the space you actually get."
     ]
    },
    related:["responsive-design","css-grid","css-units"],
    read:[{book:"mdn", where:"CSS layout → “Media query fundamentals”"}],
    sources:[{t:"MDN: Media query fundamentals", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries"}], checked:"2026-11"},

   {id:"css-debugging", title:"Debugging CSS", aka:["CSS not working","developer tools styles pane","computed styles","crossed out","invalid property value","hard reload","reduced test case"], tags:["css","debugging"],
    summary:"When a style doesn’t apply: check the file loads, the selector matches, the declaration is valid, and nothing else wins, using the browser’s developer tools.",
    levels:{
     starter:[
      "When a style doesn’t show up, ask in order:",
      {ol:["Is the CSS file loading? (Check the `<link>` path.)","Does the selector match the HTML exactly?","Is the property and value spelled right, with semicolons?","Is another rule winning?"]},
      "Desktop browsers have developer tools that answer all four. Right-click the element and choose **Inspect**: the Styles pane lists every matching rule, crosses out declarations that lost, and flags invalid ones with a warning icon.",
      {tip:"Phone browsers don’t have developer tools. Test in the Web Lab, changing one thing at a time."},
      "Most problems are one of a few things: a wrong file path, a selector that doesn’t match (a missing dot or a different capital letter), a typo or missing semicolon, or a more specific rule winning. Check them in that order and you’ll find most bugs in minutes."
     ],
     builder:[
      "**Reading the Styles pane** (Firefox calls it Rules): rules are listed with the strongest at the top, each with the file and line it came from. A line through a declaration means it was overridden; a line plus a warning icon means it’s invalid. Sections such as “Inherited from body” show inherited values. The **Computed** tab shows the final value of each property and which rule set it, and a box-model diagram.",
      "**Experiment live.** Untick declarations, edit values, add a property by clicking inside a rule, or add a class with the `.cls` button (Chrome and Edge). Changes vanish on reload, so copy the fix into your file.",
      "**Caching.** If an edited CSS file seems to have no effect, the browser may be using a cached copy: reload with [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]] on a Mac in Chrome, Edge and Firefox).",
      "**Quick visual checks.** `outline: 2px solid red` on a suspect element shows its box without changing layout (outlines take no space). A bright `background-color` on `body` confirms the stylesheet loads.",
      "**Work in small steps.** Change one thing, reload, look. If you change several things at once and it works (or breaks), you won’t know which change did it."
     ],
     pro:[
      "**Reduced test cases.** MDN’s advice: copy the problem into a minimal page (or an online editor), remove everything unrelated until it still fails, and the cause is usually obvious. If it isn’t, that minimal case is exactly what to share when asking for help.",
      "**Support problems.** A property or value can be valid CSS but not supported in a particular browser; developer tools may mark it differently from a typo. Check MDN’s browser compatibility table at the bottom of each property page, and use `@supports (display: grid) { … }` to apply rules only where supported.",
      "**Layout debugging.** Chrome, Edge and Firefox have flexbox and grid overlays (a badge next to the element in the HTML panel) that draw tracks, gaps and line numbers. Firefox’s Inspector also explains why some declarations have no effect, for example `width` on an inline element.",
      "**Validation.** The W3C CSS Validation Service checks syntax across a whole file, catching things that are easy to miss by eye. Code editors with CSS support underline many errors as you type.",
      "**Remote inspection.** Chrome on Android can be inspected from desktop Chrome via `chrome://inspect` over USB with USB debugging on; Safari on iPhone and iPad from Safari on a Mac after enabling Web Inspector in the device’s Safari settings."
     ]
    },
    related:["cascade-specificity","css-rules","box-model"],
    read:[{book:"mdn", where:"CSS styling basics → “Debugging CSS”"}],
    sources:[{t:"MDN: Debugging CSS", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS"},{t:"Chrome for Developers: View and change CSS", url:"https://developer.chrome.com/docs/devtools/css"}], checked:"2026-11"}
  ],
  terms:[
   {id:"rule", term:"Rule (CSS)", def:"One instruction in a stylesheet: a selector followed by a block of declarations in curly braces, such as h1 { color: teal; }.", codex:"css-rules"},
   {id:"selector", term:"Selector", def:"The part of a CSS rule that chooses which elements to style, such as p, .price or #top.", codex:"css-selectors"},
   {id:"declaration", term:"Declaration", def:"One property and its value inside a CSS rule, joined by a colon and ended with a semicolon, as in color: teal;.", codex:"css-rules"},
   {id:"property", term:"Property (CSS)", def:"The name of the thing a declaration changes, such as color, font-size or margin. It comes before the colon.", codex:"css-rules"},
   {id:"css-value", term:"Value (CSS)", def:"What a declaration sets its property to, such as teal, 1.5rem or center. It comes after the colon.", codex:"css-rules"},
   {id:"stylesheet", term:"Stylesheet", def:"A set of CSS rules, usually saved as a .css file and linked from web pages with a link element.", codex:"css-rules"},
   {id:"class-attribute", term:"Class (attribute)", def:"An HTML attribute that gives an element one or more reusable names, separated by spaces, for CSS to select with a dot, as in .price.", codex:"css-selectors"},
   {id:"id-attribute", term:"Id (attribute)", def:"An HTML attribute that gives one element a name unique on its page. CSS selects it with a hash, as in #top, and links can jump to it.", codex:"css-selectors"},
   {id:"cascade", term:"Cascade", def:"The process a browser uses to choose one value for each property when several rules apply: importance, inline styles, specificity, then order.", codex:"cascade-specificity"},
   {id:"specificity", term:"Specificity", def:"How precisely a selector targets an element, counted as ids, then classes, then types. The more specific selector wins a conflict.", codex:"cascade-specificity"},
   {id:"inheritance", term:"Inheritance (CSS)", def:"Some properties, mostly text ones like color and font-family, pass from a parent element to the elements inside it unless they’re set directly.", codex:"cascade-specificity"},
   {id:"hex-color", term:"Hex colour", def:"A colour written as # and hexadecimal digits for red, green and blue, from 00 to ff each, such as #663399. #639 is shorthand for the same colour.", codex:"css-colors"},
   {id:"custom-property", term:"Custom property", def:"A value you name and reuse in CSS, often called a CSS variable: declared as --brand: #663399; and used as var(--brand).", codex:"css-colors"},
   {id:"font-stack", term:"Font stack", def:"The list of fonts in a font-family declaration. The browser uses the first one available, so the list ends with a generic family as a fallback.", codex:"css-typography"},
   {id:"generic-font-family", term:"Generic font family", def:"A keyword such as serif, sans-serif or monospace that means “any font of this kind”, used unquoted at the end of a font stack.", codex:"css-typography"},
   {id:"web-font", term:"Web font", def:"A font file the browser downloads to show a page, either from the site itself (with @font-face) or from a font service.", codex:"css-typography"},
   {id:"rem", term:"rem", def:"A CSS unit equal to the root (html) element’s font size, 16 px by default. 1.5rem is 24 px unless the reader changes their text size.", codex:"css-units"},
   {id:"em-unit", term:"em (unit)", def:"A CSS unit relative to font size: for font-size, the parent’s size; for other properties, the element’s own. Nested em sizes multiply.", codex:"css-units"},
   {id:"box-model", term:"Box model", def:"The idea that every element is a rectangle made of content, padding, border and margin, from the inside out.", codex:"box-model"},
   {id:"padding", term:"Padding", def:"Space inside an element’s border, between the border and the content. The element’s background shows through it.", codex:"box-model"},
   {id:"border-css", term:"Border (CSS)", def:"The line around an element’s padding, set with a width, a style such as solid, and a colour. Without a style, no border is drawn.", codex:"box-model"},
   {id:"margin-css", term:"Margin (CSS)", def:"Transparent space outside an element’s border that separates it from other boxes. Vertical margins between blocks can collapse into one.", codex:"box-model"},
   {id:"box-sizing", term:"box-sizing", def:"The property that decides what width means: content-box (the default, content only) or border-box (content plus padding and border).", codex:"box-model"},
   {id:"flexbox", term:"Flexbox", def:"A CSS layout mode, switched on with display: flex on a parent, that lines its children up in a row or a column.", codex:"flexbox"},
   {id:"grid-layout", term:"Grid layout", def:"A CSS layout mode, switched on with display: grid on a parent, that places its children in rows and columns.", codex:"css-grid"},
   {id:"fr-unit", term:"fr (unit)", def:"A grid unit meaning one fraction of the free space left after gaps and fixed sizes. 1fr 2fr gives a third and two thirds.", codex:"css-grid"},
   {id:"viewport", term:"Viewport", def:"The area of the browser window where the page is shown. On phones, the viewport meta tag makes it match the screen’s real width.", codex:"responsive-design"},
   {id:"responsive", term:"Responsive design", def:"Building one web page that adapts its layout to any screen size, from a small phone to a wide monitor.", codex:"responsive-design"},
   {id:"media-query", term:"Media query", def:"A condition in CSS, written with @media, such as (min-width: 40rem), that applies the rules inside only when it’s true.", codex:"media-queries"},
   {id:"breakpoint", term:"Breakpoint", def:"A width at which a responsive layout changes, set with a media query, such as 40rem. Best chosen where the content needs it.", codex:"media-queries"},
   {id:"mobile-first", term:"Mobile-first", def:"Writing the small-screen layout as the base CSS, then adding media queries that adjust it for wider screens.", codex:"media-queries"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u3-q01", lesson:"t2u3-l1", level:1, q:"In the rule `p { color: navy; }`, what is `color`?", options:[
     {t:"A property", ok:true, why:"The property comes before the colon and names what you’re changing."},
     {t:"A selector", why:"The selector is `p`, before the braces. It chooses which elements to style."},
     {t:"A value", why:"The value is `navy`, after the colon."},
     {t:"A class", why:"A class selector starts with a dot, like `.note`. There’s no class here."}
   ]},
   {id:"t2u3-q02", lesson:"t2u3-l1", level:1, q:"Which is the recommended way to apply one set of styles to every page of a website?", options:[
     {t:"A separate `.css` file linked from each page with `<link rel=\"stylesheet\">`", ok:true, why:"One file reaches every page, is cached by the browser, and a change is made in one place."},
     {t:"A `<style>` element copied into every page", why:"Every page would hold its own copy, so a change means editing every page."},
     {t:"A `style` attribute on each element", why:"That repeats the styling on every element and is the hardest approach to maintain or override."},
     {t:"A `<script>` that sets the styles", why:"JavaScript can set styles, but it’s the wrong tool for a site’s basic look and fails if scripts don’t run."}
   ]},
   {id:"t2u3-q03", lesson:"t2u3-l1", level:1, q:"Which of these is a valid CSS comment?", options:[
     {t:"`/* main colours */`", ok:true, why:"CSS comments open with `/*` and close with `*/`."},
     {t:"`// main colours`", why:"That’s a JavaScript comment. In CSS it’s invalid and swallows what follows it."},
     {t:"`<!-- main colours -->`", why:"That’s an HTML comment; it doesn’t work inside a stylesheet."},
     {t:"`# main colours`", why:"`#` starts an id selector in CSS, not a comment."}
   ]},
   {id:"t2u3-q04", lesson:"t2u3-l1", level:2, q:"Which selector matches `<p class=\"note warning\">` but **not** a plain `<p>`?", options:[
     {t:"`.warning`", ok:true, why:"The element’s class list includes `warning`, and a plain `<p>` has no classes."},
     {t:"`p`", why:"A type selector matches every paragraph, including plain ones."},
     {t:"`#note`", why:"`#` selects an id. This element has classes, not an id."},
     {t:"`.note-warning`", why:"That’s a single class name, `note-warning`. The element has two separate classes, `note` and `warning`."}
   ]},
   {id:"t2u3-q05", lesson:"t2u3-l1", level:2, q:"What does the selector `.menu li` select?", options:[
     {t:"Every `li` that is somewhere inside an element with the class `menu`", ok:true, why:"The space is the descendant combinator: the right-hand part must be inside the left-hand part."},
     {t:"Every element with the class `menu`, and every `li` on the page", why:"That would be `.menu, li`, with a comma. A space means “inside”."},
     {t:"Only `li` elements that have the class `menu` themselves", why:"That would be `li.menu`, with no space."},
     {t:"The first `li` inside `.menu` only", why:"Descendant selectors match all matching elements inside, not just the first."}
   ]},
   {id:"t2u3-q06", lesson:"t2u3-l1", level:3, q:"Ana’s rule is `.banner { colour: white; background-color: teal; padding: 1rem; }`. What will she see?", options:[
     {t:"A teal banner with padding, but text in the default colour", ok:true, why:"`colour` isn’t a CSS property (CSS uses `color`), so only that declaration is skipped. The other two apply."},
     {t:"Nothing styled at all, because the rule has an error", why:"An unknown property only loses its own declaration. The rest of the rule still works."},
     {t:"White text on teal with padding; browsers accept both spellings", why:"Browsers only accept the American spelling `color`."},
     {t:"An error message in the page telling her about the typo", why:"Browsers never show CSS errors on the page. Developer tools would flag it with a warning icon."}
   ]},
   {id:"t2u3-q07", lesson:"t2u3-l1", level:3, q:"Kenji’s rule has `color: navy` with no semicolon, followed on the next line by `font-size: 3rem;` and then `margin: 0;`. Which declarations apply?", options:[
     {t:"Only `margin: 0`", ok:true, why:"The missing semicolon joins the first two lines into one declaration with an invalid value, so both are lost. Parsing restarts after the next semicolon."},
     {t:"All three", why:"Browsers don’t insert missing semicolons. They read on to the next one."},
     {t:"`font-size` and `margin`", why:"The `font-size` line is pulled into the broken `color` declaration, so it’s lost too."},
     {t:"None; the whole rule is dropped", why:"Errors inside a declaration block only affect the declarations involved."}
   ]},
   {id:"t2u3-q08", lesson:"t2u3-l1", level:3, q:"Mei’s page has `<link rel=\"stylesheet\" href=\"style.css\">`, but her file is saved as `css/style.css`. None of her styles appear. What’s the fix?", options:[
     {t:"Change the link to `href=\"css/style.css\"`", ok:true, why:"The `href` is a path relative to the page. The browser looked for `style.css` next to the page and found nothing."},
     {t:"Add `!important` to every declaration", why:"The file isn’t loading at all, so nothing inside it can apply, important or not."},
     {t:"Change `rel=\"stylesheet\"` to `rel=\"css\"`", why:"`stylesheet` is the correct value. The problem is the path."},
     {t:"Move the `<link>` to the end of the `<body>`", why:"The position isn’t the problem; the path points at a file that doesn’t exist."}
   ]},
   {id:"t2u3-q09", lesson:"t2u3-l1", level:2, q:"Why are classes usually preferred over ids for styling?", options:[
     {t:"A class can be reused on many elements, and an element can have several", ok:true, why:"Classes are made for sharing styles. An id must be unique, and its high specificity makes it hard to override later (Lesson 2)."},
     {t:"Ids don’t work in CSS", why:"Ids work fine with `#name`; they’re just less flexible for styling."},
     {t:"Class selectors load faster than id selectors", why:"The difference in speed is negligible. The reasons are reuse and specificity."},
     {t:"Ids can only be used in JavaScript", why:"Ids are used by CSS, JavaScript and links (`href=\"#top\"`) alike."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u3-q10", lesson:"t2u3-l2", level:1, q:"Two rules with exactly the same selector set different colours for the same element. Which one wins?", options:[
     {t:"The one that comes later in the CSS", ok:true, why:"Equal specificity means order decides, and the later declaration wins."},
     {t:"The one that comes first", why:"Earlier rules are overridden by later ones of the same specificity."},
     {t:"The darker colour", why:"The cascade never looks at what the values are, only at importance, specificity and order."},
     {t:"Neither; the element uses the browser’s default", why:"The cascade always picks a winner when rules match."}
   ]},
   {id:"t2u3-q11", lesson:"t2u3-l2", level:1, q:"What is the specificity of `.card .title`, as ID-CLASS-TYPE?", options:[
     {t:"0-2-0", ok:true, why:"Two class selectors, no ids, no type selectors. The space between them counts nothing."},
     {t:"0-1-1", why:"`.title` is a class, not a type selector. Type selectors are element names like `p`."},
     {t:"0-0-2", why:"Both parts start with a dot, so both count in the class column."},
     {t:"2-0-0", why:"The first column counts ids (`#`). There are none here."}
   ]},
   {id:"t2u3-q12", lesson:"t2u3-l2", level:2, q:"Which selector wins: `#sidebar a` or `.nav .list .item a`?", options:[
     {t:"`#sidebar a`, because 1-0-1 beats 0-3-1", ok:true, why:"Compare from the left: one id beats zero ids, however many classes the other has."},
     {t:"`.nav .list .item a`, because it has more parts", why:"The number of parts doesn’t matter. The ID column is compared first."},
     {t:"`.nav .list .item a`, because 3 classes add up to more than 1 id", why:"Columns are never added together. One id outranks any number of classes."},
     {t:"Whichever comes later", why:"Order only matters when specificity is equal, and here it isn’t."}
   ]},
   {id:"t2u3-q13", lesson:"t2u3-l2", level:2, q:"Which of these properties is inherited by default?", options:[
     {t:"`font-family`", ok:true, why:"Text properties such as `font-family` and `color` inherit, so setting them on `body` styles the whole page."},
     {t:"`border`", why:"Borders aren’t inherited; otherwise every nested element would get its own border."},
     {t:"`padding`", why:"Padding belongs to one box and isn’t passed down."},
     {t:"`margin`", why:"Margins aren’t inherited."}
   ]},
   {id:"t2u3-q14", lesson:"t2u3-l2", level:3, q:"Lucía sets `body { color: #333333; }`, but her links stay blue. Why?", options:[
     {t:"The browser’s built-in stylesheet has a rule targeting links directly, which beats inheritance", ok:true, why:"Inherited values lose to any rule that targets the element itself, including the browser’s own `a` rule. `a { color: inherit; }` makes links follow the text colour."},
     {t:"Links can’t be recoloured with CSS", why:"They can: any rule targeting `a` can set its colour."},
     {t:"Her `body` rule has too low a specificity; it needs an id", why:"Specificity doesn’t help here: the body rule matches the body, not the links, so it never competes with the link rule."},
     {t:"`color` isn’t an inherited property", why:"`color` is inherited, which is why her paragraphs turned dark grey. Links are different because something targets them directly."}
   ]},
   {id:"t2u3-q15", lesson:"t2u3-l2", level:3, q:"Priya’s `.alert { color: darkred; }` doesn’t work on `<p class=\"alert\" style=\"color: gray\">`. What’s happening?", options:[
     {t:"The inline style attribute beats any selector in the stylesheet", ok:true, why:"Inline styles outrank all normal stylesheet rules, whatever their specificity. Removing the inline style is the clean fix."},
     {t:"Class selectors can’t set colours", why:"They can. The inline style is simply stronger."},
     {t:"The `.alert` rule needs to come before the HTML", why:"Where the stylesheet sits doesn’t matter here; inline styles beat stylesheet rules wherever they are."},
     {t:"`darkred` isn’t a valid colour", why:"`darkred` is a named colour. The problem is the inline style."}
   ]},
   {id:"t2u3-q16", lesson:"t2u3-l2", level:2, q:"In the browser’s developer tools, a declaration in the Styles pane has a line through it but no warning icon. What does that mean?", options:[
     {t:"Another declaration overrode it in the cascade", ok:true, why:"Struck-through declarations lost; look higher in the pane for the winning one."},
     {t:"It has a typo", why:"Invalid declarations are struck through **and** flagged with a warning icon."},
     {t:"Its stylesheet failed to load", why:"If the file hadn’t loaded, its rules wouldn’t be listed at all."},
     {t:"It’s been deleted from the file", why:"The tools show what the browser loaded; deleted code wouldn’t appear."}
   ]},
   {id:"t2u3-q17", lesson:"t2u3-l2", level:3, q:"Tomás’s teammate wants to fix a style that won’t apply by adding `!important`. What’s the best reply?", options:[
     {t:"Find out which rule is winning in developer tools, then fix the order or specificity instead", ok:true, why:"That solves the cause. `!important` can only be beaten by another `!important`, so it makes every later change harder."},
     {t:"Fine, `!important` is the normal way to make styles work", why:"It’s a last resort. MDN advises never using it unless you absolutely have to."},
     {t:"Use an inline style instead; it’s stronger than `!important`", why:"An `!important` declaration in a stylesheet beats a normal inline style, and inline styles create their own maintenance problems."},
     {t:"Give the element an id and style that", why:"An id raises specificity, but piling on ids makes future overrides harder too. Understand the conflict first."}
   ]},
   {id:"t2u3-q18", lesson:"t2u3-l2", level:3, q:"Oluwaseun’s CSS has `#content { color: navy; }` and `p { color: black; }`. What colour is a paragraph inside `<main id=\"content\">`?", options:[
     {t:"Black", ok:true, why:"The `p` rule targets the paragraph directly. Navy only reaches it by inheritance, which always loses to a direct rule."},
     {t:"Navy, because 1-0-0 beats 0-0-1", why:"Specificity compares rules that match the same element. `#content` matches the main element, not the paragraph."},
     {t:"Navy, because it’s the parent", why:"Being the parent only matters when nothing targets the paragraph directly."},
     {t:"It depends on which rule is first", why:"Order isn’t needed: only one rule matches the paragraph."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u3-q19", lesson:"t2u3-l3", level:1, q:"What colour is `#000000`?", options:[
     {t:"Black", ok:true, why:"All three channels (red, green, blue) are at zero: no light."},
     {t:"White", why:"White is `#ffffff`, every channel at full."},
     {t:"Transparent", why:"Six-digit hex codes are fully opaque. Only an eight-digit code (two extra digits for opacity) or a keyword like `transparent` can be see-through."},
     {t:"Mid grey", why:"A mid grey has equal middle values, such as `#808080`."}
   ]},
   {id:"t2u3-q20", lesson:"t2u3-l3", level:1, q:"Under WCAG 2.2 level AA, what is the minimum contrast ratio for normal-size body text?", options:[
     {t:"4.5:1", ok:true, why:"Success criterion 1.4.3 sets 4.5:1 for normal text."},
     {t:"3:1", why:"3:1 applies to large text (about 24 px, or about 18.7 px bold) and to interface parts, not to normal body text."},
     {t:"7:1", why:"7:1 is the stricter AAA level (1.4.6), not the AA minimum."},
     {t:"21:1", why:"21:1 is the maximum possible (black on white), not a minimum."}
   ]},
   {id:"t2u3-q21", lesson:"t2u3-l3", level:1, q:"Which `font-family` value is written correctly?", options:[
     {t:"`\"Open Sans\", Arial, sans-serif`", ok:true, why:"A quoted name with spaces, a common fallback, and an unquoted generic family at the end."},
     {t:"`\"Open Sans\", Arial, \"sans-serif\"`", why:"Quoting `sans-serif` makes it a font literally named “sans-serif”, not the generic family, so there’s no reliable fallback."},
     {t:"`Open Sans; Arial; sans-serif`", why:"Fonts in a stack are separated by commas. Semicolons end the whole declaration."},
     {t:"`sans-serif, \"Open Sans\", Arial`", why:"The browser uses the first available font, and a generic family is always available, so Open Sans and Arial would never be used."}
   ]},
   {id:"t2u3-q22", lesson:"t2u3-l3", level:2, q:"With the default root font size, how big is `0.875rem`?", options:[
     {t:"14 px", ok:true, why:"1rem is 16 px by default, and 0.875 × 16 = 14."},
     {t:"8.75 px", why:"That assumes 1rem is 10 px. The default root size is 16 px."},
     {t:"12 px", why:"0.75rem would be 12 px. 0.875 × 16 = 14."},
     {t:"It depends on the parent’s font size", why:"That’s true of `em`. `rem` always uses the root font size."}
   ]},
   {id:"t2u3-q23", lesson:"t2u3-l3", level:2, q:"Why is `rem` better than `px` for font sizes?", options:[
     {t:"`rem` sizes follow the reader’s browser text-size setting; `px` font sizes ignore it", ok:true, why:"People who need larger text often set a bigger default. Text in rem grows with it."},
     {t:"`px` can’t be used for fonts", why:"It can; it just ignores the reader’s default text-size preference."},
     {t:"`rem` text is sharper on high-resolution screens", why:"Both are drawn equally sharply. The difference is how they respond to settings."},
     {t:"Zoom doesn’t work on `px` text", why:"Page zoom enlarges `px` text too. The difference is the default text-size setting."}
   ]},
   {id:"t2u3-q24", lesson:"t2u3-l3", level:3, q:"Fatima’s design uses mid-grey text `#777777` on white for body copy. A checker says 4.48:1. Her colleague says “that rounds to 4.5, it passes”. Who’s right?", options:[
     {t:"The checker: WCAG thresholds aren’t rounded, so 4.48:1 fails; `#767676` (4.54:1) or darker would pass", ok:true, why:"The WAI guidance says the ratios are exact thresholds. A slightly darker grey solves it with no visible change in style."},
     {t:"The colleague: ratios are rounded to one decimal place", why:"WCAG explicitly says not to round; 4.499:1 fails."},
     {t:"It passes because grey is a neutral colour", why:"Contrast depends only on brightness difference, not on which colour is used."},
     {t:"It doesn’t matter; contrast rules only apply to headings", why:"1.4.3 covers all text, and body text most of all."}
   ]},
   {id:"t2u3-q25", lesson:"t2u3-l3", level:2, q:"A `<section>` has `font-size: 20px`. A paragraph inside it has `font-size: 1.5em`. How big is the paragraph’s text?", options:[
     {t:"30 px", ok:true, why:"`em` for `font-size` is relative to the parent’s size: 1.5 × 20 = 30."},
     {t:"24 px", why:"That uses the root size (1.5 × 16), which is what `rem` would do."},
     {t:"21.5 px", why:"`em` multiplies; it doesn’t add 1.5 px."},
     {t:"20 px", why:"The paragraph sets its own size, 1.5 times its parent’s, so it’s larger."}
   ]},
   {id:"t2u3-q26", lesson:"t2u3-l3", level:3, q:"Hana’s club site loads its font from a third-party font service. A member in the EU asks whether that shares their data. What’s accurate?", options:[
     {t:"Their browser contacts the font service, which receives their IP address; hosting the font files on the club’s own site avoids that", ok:true, why:"Any file loaded from another server reveals the visitor’s IP address to it. In 2022 one German regional court ruled that doing this with Google Fonts without consent breached the GDPR."},
     {t:"Fonts are just files, so no data is shared", why:"Downloading any file means connecting to the server that sends it, which sees the visitor’s IP address."},
     {t:"Only visitors who click on text share data", why:"The font loads when the page loads, without any clicks."},
     {t:"Nothing can be done except removing all custom fonts", why:"Self-hosting the same font files keeps the custom look without contacting a third party."}
   ]},
   {id:"t2u3-q27", lesson:"t2u3-l3", level:2, q:"What does `line-height: 1.5` (with no unit) mean?", options:[
     {t:"Lines are spaced at 1.5 times each element’s own font size", ok:true, why:"A unitless value is a multiplier, and it’s inherited as a ratio, so every element gets spacing that fits its own text."},
     {t:"Lines are 1.5 px apart", why:"Unitless numbers here aren’t pixels; they multiply the font size."},
     {t:"There are 1.5 blank lines between paragraphs", why:"`line-height` sets the spacing between lines within text, not between paragraphs."},
     {t:"It’s invalid because lengths need a unit", why:"`line-height` accepts plain numbers, and they’re the recommended form."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u3-q28", lesson:"t2u3-l4", level:1, q:"Which layer of the box model is between the content and the border?", options:[
     {t:"Padding", ok:true, why:"Padding is the space inside the border, around the content."},
     {t:"Margin", why:"Margin is outside the border."},
     {t:"Outline", why:"An outline is drawn outside the border and takes up no space. It isn’t one of the four layers."},
     {t:"Gap", why:"`gap` is space between flex or grid items, not a layer of a single box."}
   ]},
   {id:"t2u3-q29", lesson:"t2u3-l4", level:1, q:"What does `box-sizing: border-box` change?", options:[
     {t:"`width` and `height` include the padding and border", ok:true, why:"The box stays exactly the size you set, and the content area shrinks to make room."},
     {t:"It adds a border to every box", why:"It doesn’t draw anything; it changes how widths are calculated."},
     {t:"`width` includes the margin too", why:"Margin is never included in an element’s width."},
     {t:"It makes inline elements behave like blocks", why:"That’s `display: block` or `inline-block`."}
   ]},
   {id:"t2u3-q30", lesson:"t2u3-l4", level:2, q:"A box has `width: 250px; padding: 10px; border: 1px solid black;` and the default box-sizing. How wide is it on screen?", options:[
     {t:"272 px", ok:true, why:"250 + 10 + 10 + 1 + 1 = 272. By default padding and border are added to the width."},
     {t:"250 px", why:"That would be true with `border-box`. By default, `width` is only the content."},
     {t:"261 px", why:"That adds padding and border on one side only. Both sides count."},
     {t:"270 px", why:"That adds the padding but forgets the 1 px border on each side."}
   ]},
   {id:"t2u3-q31", lesson:"t2u3-l4", level:2, q:"Which element is an inline box by default?", options:[
     {t:"`<a>`", ok:true, why:"Links flow inside lines of text, so their default display is inline."},
     {t:"`<p>`", why:"Paragraphs are block boxes: they start on a new line."},
     {t:"`<section>`", why:"Sections are block boxes."},
     {t:"`<h3>`", why:"Headings are block boxes."}
   ]},
   {id:"t2u3-q32", lesson:"t2u3-l4", level:3, q:"Sione sets `width: 120px; height: 40px;` on a `<span>` but nothing changes. What’s the fix?", options:[
     {t:"Give it `display: inline-block` (or `block`), because width and height don’t apply to inline boxes", ok:true, why:"Spans are inline by default, and inline boxes ignore width and height. Inline-block keeps it in the line but respects the sizes."},
     {t:"Use `!important` on the width and height", why:"The declarations aren’t losing a conflict; they simply don’t apply to inline boxes."},
     {t:"Use `rem` instead of `px`", why:"The unit isn’t the problem. Inline boxes ignore width and height in any unit."},
     {t:"Add a border so the size can be seen", why:"A border would show the span’s actual size, which still follows its text, not 120 × 40."}
   ]},
   {id:"t2u3-q33", lesson:"t2u3-l4", level:2, q:"Two paragraphs in normal flow: the first has `margin-bottom: 20px`, the second `margin-top: 30px`. What’s the gap between them?", options:[
     {t:"30 px", ok:true, why:"Adjacent vertical margins collapse to the larger one."},
     {t:"50 px", why:"Vertical margins between blocks don’t add; they collapse."},
     {t:"20 px", why:"It’s the larger margin that wins, not the smaller."},
     {t:"25 px", why:"Collapsed margins aren’t averaged."}
   ]},
   {id:"t2u3-q34", lesson:"t2u3-l4", level:3, q:"Dmitri’s search box has `width: 100%; padding: 12px;` and makes his page scroll sideways on phones. Which single change fixes it?", options:[
     {t:"Add `box-sizing: border-box` so the padding fits inside the 100%", ok:true, why:"With the default model, the box is 100% plus 24 px of padding (and any border), which is wider than its container."},
     {t:"Change `width: 100%` to `width: 110%`", why:"That makes it even wider."},
     {t:"Remove the `<meta name=\"viewport\">` tag", why:"That would make the whole page tiny on phones, hiding the problem rather than fixing it."},
     {t:"Add `margin: 0 auto`", why:"Automatic margins centre a box that’s narrower than its container. This one is too wide."}
   ]},
   {id:"t2u3-q35", lesson:"t2u3-l4", level:3, q:"Amara’s article column is `.page { width: 45rem; margin: 0 auto; }`. It’s centred on her laptop but too wide for phones. What should she change?", options:[
     {t:"`width: 45rem` to `max-width: 45rem`", ok:true, why:"`max-width` caps the column on wide screens but lets it shrink to fit a phone; the auto margins still centre it."},
     {t:"`margin: 0 auto` to `margin: 0`", why:"That stops the centring on wide screens and doesn’t make the column any narrower on phones."},
     {t:"Add `text-align: center`", why:"That centres the text inside the column, not the column’s width."},
     {t:"Change `45rem` to `720px`", why:"720 px is still wider than a phone; it just ignores the reader’s text size as well."}
   ]},
   {id:"t2u3-q36", lesson:"t2u3-l4", level:1, q:"In `margin: 5px 10px 15px 20px;`, which side gets 20px?", options:[
     {t:"Left", ok:true, why:"Four values go clockwise from the top: top 5px, right 10px, bottom 15px, left 20px."},
     {t:"Top", why:"The first value is the top: 5px."},
     {t:"Right", why:"The second value is the right: 10px."},
     {t:"Bottom", why:"The third value is the bottom: 15px."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u3-q37", lesson:"t2u3-l5", level:1, q:"Where do you put `display: flex` to line up a set of items in a row?", options:[
     {t:"On their parent element, the container", ok:true, why:"The container becomes a flex container and its direct children become flex items."},
     {t:"On each item", why:"That makes each item a flex container for its own contents; the items themselves don’t line up."},
     {t:"On the `<html>` element", why:"Only the direct children of a flex container are laid out by it."},
     {t:"In a media query", why:"Media queries can contain any rules, but flexbox doesn’t need one to work."}
   ]},
   {id:"t2u3-q38", lesson:"t2u3-l5", level:1, q:"What does `gap: 1rem` do in a flex or grid container?", options:[
     {t:"Adds 1rem of space between items, but not around the outside", ok:true, why:"`gap` only goes between items (and between rows or lines)."},
     {t:"Adds 1rem of margin around every item", why:"Margins would also add space at the outer edges. `gap` doesn’t."},
     {t:"Adds 1rem of padding inside the container", why:"Padding is set with `padding`. `gap` is only between items."},
     {t:"Sets each item 1rem wide", why:"`gap` sets spacing, not item size."}
   ]},
   {id:"t2u3-q39", lesson:"t2u3-l5", level:2, q:"In a flex row, which declaration pushes the first item to the start, the last to the end, and shares the space between them?", options:[
     {t:"`justify-content: space-between`", ok:true, why:"It distributes items along the main axis with no space at the ends."},
     {t:"`align-items: space-between`", why:"`align-items` works across the row and doesn’t take `space-between`."},
     {t:"`justify-content: center`", why:"That groups the items in the middle."},
     {t:"`flex-wrap: wrap`", why:"That lets items move onto new lines; it doesn’t spread them out."}
   ]},
   {id:"t2u3-q40", lesson:"t2u3-l5", level:2, q:"A grid has `grid-template-columns: 1fr 1fr 2fr;`, no gap, and is 800 px wide. How wide is the last column?", options:[
     {t:"400 px", ok:true, why:"There are 4 fractions in total (1 + 1 + 2), so 1fr is 200 px and 2fr is 400 px."},
     {t:"266.67 px", why:"That divides by 3 columns. `fr` divides by the number of fractions, which is 4."},
     {t:"533.33 px", why:"That gives 2fr two thirds of the space. The total is 4 fractions, so 2fr is half."},
     {t:"200 px", why:"200 px is one fraction. The last column is two fractions."}
   ]},
   {id:"t2u3-q41", lesson:"t2u3-l5", level:1, q:"What does this line in a page’s `<head>` do: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`?", options:[
     {t:"Tells phone browsers to lay the page out at the device’s real width", ok:true, why:"Without it, many phone browsers assume about 980 px and shrink the page, so mobile layouts never apply."},
     {t:"Makes the page responsive by itself", why:"It’s needed, but you still need flexible CSS. It only sets the width the browser lays the page out at."},
     {t:"Stops readers zooming in", why:"`initial-scale=1` sets the starting zoom. It doesn’t block zooming, and you shouldn’t block it."},
     {t:"Sets the page’s width to 1 px", why:"`initial-scale=1` means a starting zoom level of 100%, not a width."}
   ]},
   {id:"t2u3-q42", lesson:"t2u3-l5", level:2, q:"In mobile-first CSS, which media query adds a layout for wider screens?", options:[
     {t:"`@media (min-width: 40rem) { … }`", ok:true, why:"Base styles serve phones; this block adds rules once the viewport is at least 40rem wide."},
     {t:"`@media (max-width: 40rem) { … }`", why:"`max-width` targets narrow screens, which is the desktop-first approach: wide styles first, then fixes for small screens."},
     {t:"`@media (width: 40rem) { … }`", why:"That matches only at exactly 40rem wide."},
     {t:"`@media mobile { … }`", why:"There’s no `mobile` media type. Media queries test features such as width."}
   ]},
   {id:"t2u3-q43", lesson:"t2u3-l5", level:3, q:"Mei’s gallery uses `grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));`. On a 360 px wide phone (with 16 px default text), how many columns does it show?", options:[
     {t:"One", ok:true, why:"Each column needs at least 12rem (192 px). Two would need at least 384 px plus the gap, more than the space available, so one column fills the width."},
     {t:"Two", why:"Two columns of at least 192 px need over 384 px, wider than a 360 px screen."},
     {t:"Three", why:"Three columns would need at least 576 px."},
     {t:"It depends on how many photos there are", why:"With `auto-fit`, the column count depends on the available width, not on the number of items (unless there are fewer items than columns that fit)."}
   ]},
   {id:"t2u3-q44", lesson:"t2u3-l5", level:3, q:"Kenji’s page scrolls sideways on phones. He finds `.banner { width: 900px; }`. What’s the best fix?", options:[
     {t:"`.banner { max-width: 900px; }` (or a rem equivalent), so it can shrink on narrow screens", ok:true, why:"A fixed width wider than the screen forces sideways scrolling; `max-width` keeps the limit on wide screens and lets it shrink on phones."},
     {t:"Add a media query that sets `width: 900px` only on phones", why:"That keeps the problem exactly where it’s causing trouble."},
     {t:"`body { overflow-x: hidden; }`", why:"That hides the overflow, cutting off part of the banner, instead of fixing its size."},
     {t:"Remove the viewport meta tag", why:"Without it the whole page shrinks to fit a pretend 980 px width; text becomes tiny instead."}
   ]},
   {id:"t2u3-q45", lesson:"t2u3-l5", level:2, q:"Which layout tool fits a photo gallery where columns and rows should line up?", options:[
     {t:"Grid", ok:true, why:"Grid controls rows and columns together, so cells line up in both directions."},
     {t:"A table element", why:"HTML tables are for tabular data. Using them for layout is outdated and confuses screen readers."},
     {t:"Floats", why:"Floats were once used for layout but are outdated for it; they’re for wrapping text around an image."},
     {t:"Inline styles", why:"Inline styles are a place to put CSS, not a layout method."}
   ]}
  ]
});
