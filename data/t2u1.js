/* Track 2 · Unit 1 · How websites work */
ICA.addUnit({
  id:"t2u1", track:"t2", n:1, title:"How websites work", icon:"🌐",
  blurb:"What really happens between pressing Enter and seeing a page, seen by someone who is about to build one: the files a server sends, the three languages browsers understand, how folders and paths hold a site together, which tools to write code in, and how to look under the hood of any page.",
  goals:[
    "Describe, step by step, how a browser requests the files of a page and turns them into what you see",
    "Explain the separate jobs of HTML, CSS and JavaScript, and predict what happens when one is missing or has a mistake",
    "Set up a tidy project folder with safe file names, and write relative paths that keep links and images working",
    "Choose a suitable editor on a computer, a Chromebook or a phone, and avoid the hidden changes word processors make to code",
    "Use view source, the Inspector, the Console and the Network panel to understand and fix pages, and know what’s possible on a phone"
  ],
  read:[
    {book:"mdn", where:"Getting started modules → Web standards: “How the web works”, “The web standards model” and “How browsers load websites”", note:"The background to Lessons 1 and 2, written by the people who document the browsers."},
    {book:"mdn", where:"Getting started modules → Environment setup: “Installing basic software”, “Code editors” and “Dealing with files”", note:"Lessons 3 and 4. MDN assumes a computer; the lessons here add phone and Chromebook routes."},
    {book:"mdn", where:"How to solve common problems → Tools and setup: “What are browser developer tools?”", note:"Lesson 5."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u1-l1", title:"From address to page", minutes:50,
   hook:{q:"You type a web address and press Enter. What does the web server usually send back first?", options:["A finished picture of the page","A text file of HTML code","Every file of the website at once","A small app that installs itself"], answer:1, reveal:"**A text file of HTML code.** The server doesn’t send a picture of the page: it sends instructions, and your browser builds the page itself. While reading that HTML, the browser discovers it needs more files (a style sheet, scripts, images) and asks for each one. This lesson follows that whole journey, from the side of someone who will make those files."},
   goals:[
     "Describe the steps between entering an address and seeing a page, from a maker’s point of view",
     "Explain clients and servers, requests and responses, and the status codes you’ll meet when building",
     "Name the kinds of files a page is made of and say how the browser finds each one",
     "Describe how the browser turns HTML, CSS and JavaScript into the pixels on screen"
   ],
   learn:[
    {h:"You make files; the browser makes the page", body:[
      {lead:"When you build a website, you aren’t making a picture. You’re writing instructions that someone else’s browser will fetch and follow."},
      "In Unit 4 of Digital Foundations you saw the web from a visitor’s side: a [[browser]] asks, a [[web-server|web server]] answers (see {{how-the-web-works}}). This unit looks at the same conversation from the other side, as the person who writes what the server sends.",
      "Think of a recipe sent by post. The server sends the recipe and the ingredients; the cake is baked in the visitor’s own kitchen. A web page works the same way. The server sends text files of code plus images and other files, and the visitor’s browser assembles them into the page.",
      "That explains things that puzzle beginners. The same page can look different on a phone and a laptop, because each browser lays it out for its own screen. A slow old phone shows a page later than a new laptop, because it does more of the work. And a mistake in your code shows up only when a browser tries to follow it.",
      {table:[
        ["Word","In this unit it means"],
        ["[[client|Client]]","The device and app that asks: usually a browser on a phone or computer"],
        ["Server","The computer that stores the site’s files and answers requests"],
        ["[[request|Request]]","A message from the browser asking for one file"],
        ["[[response|Response]]","The server’s reply: a status code, some details, and usually the file"]
      ]},
      {key:"A web page isn’t sent as a page. It’s sent as files, and the browser builds the page from them."}
    ]},
    {h:"The journey, step by step", body:[
      "Here is what happens when Amara types `https://cafe-luna.example/menu/` and presses Enter. The first three steps were covered in Digital Foundations, so follow the links if they’re hazy.",
      {ol:[
        "**Read the address.** The browser splits the URL into its parts: the scheme `https`, the domain `cafe-luna.example` and the path `/menu/` (see {{url-anatomy}}).",
        "**Find the server.** It looks up the domain’s IP address with DNS, unless it remembers it already (see {{dns}}).",
        "**Connect securely.** It opens an encrypted HTTPS connection to that server (see {{public-wifi-https}}).",
        "**Request the page.** It sends a request: “GET /menu/, please”, plus details such as which languages Amara prefers.",
        "**Receive the HTML.** The server replies with a status code, some headers and the page’s HTML file.",
        "**Discover more files.** While reading the HTML, the browser finds references to a style sheet, a script and photos, and requests each one.",
        "**Build and draw.** As the files arrive, the browser builds the page and paints it on screen. Scripts may then change it."
      ]},
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="t2u1a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="6" y="6" width="112" height="46" rx="8" stroke-width="2"/><text x="62" y="26" text-anchor="middle">Browser</text><text class="s" x="62" y="44" text-anchor="middle">the client</text><rect class="d-sage" x="222" y="6" width="112" height="46" rx="8" stroke-width="2"/><text x="278" y="26" text-anchor="middle">Web server</text><text class="s" x="278" y="44" text-anchor="middle">cafe-luna.example</text><path class="d-ink" d="M62 52 L62 334" stroke-width="1" stroke-dasharray="4 4"/><path class="d-ink" d="M278 52 L278 334" stroke-width="1" stroke-dasharray="4 4"/><text x="170" y="76" text-anchor="middle">1. GET /menu/</text><path class="d-ink" d="M64 86 L274 86" stroke-width="2" marker-end="url(#t2u1a1)"/><text class="s" x="170" y="102" text-anchor="middle">“please send the menu page”</text><text x="170" y="130" text-anchor="middle">2. 200 OK + index.html</text><path class="d-ink" d="M276 140 L66 140" stroke-width="2" marker-end="url(#t2u1a1)"/><text class="s" x="170" y="156" text-anchor="middle">a text file of HTML code</text><text class="s" x="170" y="182" text-anchor="middle">The browser reads it and finds</text><text class="s" x="170" y="198" text-anchor="middle">three more files it needs.</text><text x="170" y="226" text-anchor="middle">3. GET each of those files</text><path class="d-ink" d="M64 236 L274 236" stroke-width="2" marker-end="url(#t2u1a1)"/><text class="s" x="170" y="252" text-anchor="middle">style.css, menu.js, cake.jpg, side by side</text><text x="170" y="280" text-anchor="middle">4. 200 OK + each file</text><path class="d-ink" d="M276 290 L66 290" stroke-width="2" marker-end="url(#t2u1a1)"/><text class="s" x="170" y="306" text-anchor="middle">each labelled with its type</text><rect class="d-gold" x="6" y="344" width="328" height="66" rx="8" stroke-width="2"/><text x="170" y="368" text-anchor="middle">5. The browser builds the page</text><text class="s" x="170" y="388" text-anchor="middle">HTML gives the structure, CSS the look,</text><text class="s" x="170" y="403" text-anchor="middle">JavaScript the behaviour</text></svg>', alt:"A browser on the left and a web server on the right exchange messages. 1: the browser sends GET /menu/. 2: the server replies 200 OK with index.html, a text file of HTML code. The browser reads it and finds three more files it needs. 3: it requests style.css, menu.js and cake.jpg side by side. 4: the server sends each file, labelled with its type. 5: the browser builds the page: HTML gives the structure, CSS the look, JavaScript the behaviour.", cap:"One page, several round trips. The HTML arrives first and tells the browser what else to fetch."},
      "Stripped down, the first request and response look like this. Real ones carry more headers, and with HTTP/2 and HTTP/3 the browser’s tools show them as a list of named fields rather than lines of text, but the parts are the same.",
      {code:'GET /menu/ HTTP/1.1\nHost: cafe-luna.example\nAccept-Language: es, en\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nContent-Length: 1532\n\n<!doctype html>\n<html lang="en">\n…', lang:"txt", label:"A request, then its response", cap:"Above the blank line: the request. Below: the response, with its status line, two headers, a blank line, then the start of the HTML file itself."}
    ]},
    {h:"What a simple server actually does", body:[
      "For a simple site, a web server is mostly a very fast file finder. You give it a folder of files, and it maps each address onto a file in that folder.",
      {ex:"Site folder on the server:  cafe-luna/\n\nhttps://cafe-luna.example/about.html\n  → cafe-luna/about.html\n\nhttps://cafe-luna.example/images/cake.jpg\n  → cafe-luna/images/cake.jpg\n\nhttps://cafe-luna.example/menu/\n  → cafe-luna/menu/index.html", label:"Worked example: addresses become file paths", mono:true},
      "Look at the last line. When an address ends in a folder name, most servers send the file called [[index-html|index.html]] inside that folder. That’s why every site’s home page is a file called `index.html`, and Lesson 3 builds on it.",
      "The server also labels each file with a **content type** (also called a [[mime-type|media type]] or MIME type), sent in the `Content-Type` header: `text/html` for HTML, `text/css` for CSS, `text/javascript` for JavaScript, `image/jpeg` for a JPEG photo. The browser trusts this label to decide what to do with the file. Hosting services set it for you from the file’s extension, which is one more reason to keep extensions correct.",
      "Sites that only hand out files like this are called **static** sites. Sites where a program on the server builds each page on request (an online shop showing your basket, say) are **dynamic**. To the browser, both look the same: requests go out, files come back. Unit 5 returns to this when you publish your own site."
    ]},
    {h:"Status codes a maker meets", body:[
      "Every response starts with a three-digit [[http-status|status code]]. Visitors mostly see them as error pages. As a maker, you’ll see them in your browser’s tools (Lesson 5) next to every file your page asked for.",
      {table:[
        ["Code","Meaning","What it usually means for you"],
        ["`200 OK`","Here’s the file","Working as intended"],
        ["`304 Not Modified`","Your saved copy is still current","The browser used its cache (see {{cookies-cache}}); not an error"],
        ["`301 Moved Permanently`","It lives at a new address now","The browser follows automatically; update your link if it’s yours"],
        ["`404 Not Found`","No file at that address","A wrong path, a misspelt or wrongly capitalised name, or a file you forgot to upload"],
        ["`500 Internal Server Error`","Something broke on the server","A server program failed; on a simple static site this is rare"]
      ]},
      "The codes come in families: 2xx means success, 3xx a redirect, 4xx a problem with the request (often the address), and 5xx a problem on the server. When you build sites, **404 is the one you’ll meet most**: almost always it means the address in your code doesn’t match a real file. Lesson 3 is all about preventing it.",
      {tip:"A 404 on your own page isn’t a disaster or a sign you’ve been hacked. It’s the server saying, precisely, “I looked where you told me and found nothing.” Compare the address it was asked for with the real file name, letter by letter."}
    ]},
    {h:"One page, many files", body:[
      "MDN sorts the files of a website into two groups. **Code** is what the browser reads and follows: HTML, CSS and JavaScript. **Assets** are everything else it displays or offers: images, fonts, video, audio, PDFs. Each one is a separate file, so each needs its own request.",
      "Here is a small home page for a community garden. Look for the lines that name another file: that’s how the browser discovers what else to fetch.",
      {code:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Community garden</title>\n  <link rel="stylesheet"\n        href="styles/style.css">\n  <script defer\n          src="scripts/main.js"><\/script>\n</head>\n<body>\n  <h1>Community garden</h1>\n  <img src="images/tomatoes.jpg"\n       alt="Ripe tomatoes on the vine">\n</body>\n</html>', lang:"html", label:"index.html", cap:"Three elements ask for more files: `link` for the style sheet, `script` for the JavaScript and `img` for the photo."},
      {list:[
        "`<link rel=\"stylesheet\" href=\"styles/style.css\">` tells the browser: “fetch this CSS file and use it to style the page.”",
        "`<script defer src=\"scripts/main.js\"><\/script>` says: “fetch this JavaScript and run it once the HTML has been read.” Lesson 2 explains `defer`.",
        "`<img src=\"images/tomatoes.jpg\" alt=\"…\">` says: “fetch this photo and show it here; if it can’t be seen, use this description.”"
      ]},
      "So this page needs at least four requests: the HTML, then the three files it names. A CSS file can name more files in turn, such as fonts or background images. Real news and shopping pages often need dozens, and the browser’s Network panel (Lesson 5) lists every one.",
      {lab:"wl-first-page", t:"Practise: write a first page with a heading and a paragraph"}
    ]},
    {h:"From code to pixels: rendering", body:[
      "Turning code into a page is called [[rendering]]. Browsers differ in the details, but MDN’s *How browsers load websites* describes the same main stages:",
      {ol:[
        "**Read the HTML into a tree.** The browser turns the HTML into a tree of parts in memory: the page contains a body, the body contains a heading and a photo, and so on. This tree is called the DOM (Document Object Model); Unit 4 shows how JavaScript works with it.",
        "**Match the CSS to the tree.** It reads the CSS rules and works out which ones apply to each part: this heading is dark green, that paragraph uses a larger font.",
        "**Lay out.** It calculates the size and position of every part. This depends on the screen, which is why the same page lays out differently on a phone and a laptop.",
        "**Paint.** It draws the result as pixels.",
        "**Run the JavaScript.** Scripts can change the tree or the styles at any moment, for example when someone taps a button. The browser then redoes the layout and painting that were affected."
      ]},
      {fig:'<svg viewBox="0 0 340 420"><defs><marker id="t2u1a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="40" y="8" width="136" height="40" rx="8" stroke-width="2"/><text x="108" y="33" text-anchor="middle">HTML file</text><rect class="d-sage" x="196" y="8" width="136" height="40" rx="8" stroke-width="2"/><text x="264" y="33" text-anchor="middle">CSS file</text><path class="d-ink" d="M108 48 L108 74" stroke-width="2" marker-end="url(#t2u1a2)"/><path class="d-ink" d="M264 48 L264 74" stroke-width="2" marker-end="url(#t2u1a2)"/><rect class="d-panel" x="40" y="78" width="136" height="44" rx="8" stroke-width="1.5"/><text x="108" y="97" text-anchor="middle">DOM tree</text><text class="s" x="108" y="114" text-anchor="middle">the page’s parts</text><rect class="d-panel" x="196" y="78" width="136" height="44" rx="8" stroke-width="1.5"/><text x="264" y="97" text-anchor="middle">Style rules</text><text class="s" x="264" y="114" text-anchor="middle">how parts look</text><path class="d-ink" d="M108 122 L160 150" stroke-width="2" marker-end="url(#t2u1a2)"/><path class="d-ink" d="M264 122 L212 150" stroke-width="2" marker-end="url(#t2u1a2)"/><rect class="d-gold" x="40" y="154" width="292" height="40" rx="8" stroke-width="2"/><text x="186" y="179" text-anchor="middle">1. Style: match rules to parts</text><path class="d-ink" d="M186 194 L186 214" stroke-width="2" marker-end="url(#t2u1a2)"/><rect class="d-gold" x="40" y="218" width="292" height="48" rx="8" stroke-width="2"/><text x="186" y="238" text-anchor="middle">2. Layout: sizes and positions</text><text class="s" x="186" y="256" text-anchor="middle">depends on the screen width</text><path class="d-ink" d="M186 266 L186 286" stroke-width="2" marker-end="url(#t2u1a2)"/><rect class="d-gold" x="40" y="290" width="292" height="40" rx="8" stroke-width="2"/><text x="186" y="315" text-anchor="middle">3. Paint: draw the pixels</text><rect class="d-rose" x="40" y="352" width="292" height="56" rx="8" stroke-width="2"/><text x="186" y="374" text-anchor="middle">JavaScript runs and can change</text><text class="s" x="186" y="394" text-anchor="middle">the tree or styles, so steps 1–3 repeat</text><path class="d-ink" d="M40 380 L18 380 L18 100 L36 100" stroke-width="2" fill="none" marker-end="url(#t2u1a2)"/></svg>', alt:"A flow diagram. The HTML file becomes the DOM tree, the page’s parts. The CSS file becomes style rules. Both feed step 1, Style: match rules to parts. Then step 2, Layout: sizes and positions, which depends on the screen width. Then step 3, Paint: draw the pixels. At the bottom, a box says JavaScript runs and can change the tree or styles, so steps 1 to 3 repeat; an arrow leads from it back up to the DOM tree.", cap:"Rendering, simplified. Real browsers overlap these steps to show something as early as possible."},
      "Browsers also build an **accessibility tree** from the DOM, which screen readers use to announce headings, links and buttons. That’s one reason the structure you write in HTML matters even when nobody sees it."
    ]},
    {h:"Opening a page from your own computer", body:[
      "While you build, you’ll often open your page straight from your own drive by double-clicking `index.html`. The address bar then shows something like `file:///C:/Users/hana/garden/index.html` or `file:///Users/hana/garden/index.html`. That’s a [[file-url|file URL]]: no web server is involved; the browser reads the files directly from your drive.",
      "For the simple pages in this unit, that works almost exactly like a real site. A few things behave differently, and it helps to know them early:",
      {list:[
        "**Paths that start with `/`** mean “the top of the drive” rather than “the top of my site”, so they break (Lesson 3).",
        "**Some JavaScript features**, such as loading one script file from another as a module, are blocked from file URLs for security reasons. Later units show how to run a small test server when you need one.",
        "**Nobody else can see it.** A `file:///` address points into your own computer. Send it to a friend and it leads nowhere on their device. Publishing (Unit 5) puts the files on a server with a real address."
      ]},
      {tip:"On a phone, opening an HTML file from storage is awkward or impossible in many browsers. That’s fine: the Web Lab in this app runs your HTML, CSS and JavaScript directly, and Lesson 4 lists online editors that do the same."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The server sends a finished page.”** It sends files; the visitor’s browser builds the page from them.",
        "**“A page is one file.”** Even a tiny page is usually an HTML file plus a style sheet, a script and images, each requested separately.",
        "**“404 means the website is broken.”** It means one address didn’t match a file. On your own site, it usually points straight at a typo or a wrong folder.",
        "**“If it works on my computer, it works online.”** A `file:///` address, a path to your own drive or a difference in capital letters can work for you and fail on a server (Lesson 3).",
        "**“The page looks the same everywhere.”** Each browser lays it out for its own screen, fonts and settings. Good pages are written to adapt."
      ]}
    ]}
   ],
   try:[
    {id:"t2u1-l1-x1", type:"order", q:"Put these steps in the order they happen when Kenji opens `https://garden.example/events/` for the first time.", items:[
      {t:"The browser looks up the IP address of garden.example", why:"Before it can send anything, the browser needs the server’s address; DNS turns the name into one."},
      {t:"The browser sends GET /events/ to the server", why:"With a secure connection open, it asks for the page at that path."},
      {t:"The server replies 200 OK with the HTML of events/index.html", why:"The address ends in a folder, so the server sends that folder’s index.html."},
      {t:"The browser reads the HTML and requests the style sheet and photos it names", why:"Only after reading the HTML does the browser know which other files the page needs."},
      {t:"The browser lays out and paints the page", why:"Layout needs the HTML and the CSS, so drawing comes after they’ve arrived (browsers start as early as they can, but this is the final step)."}
    ]},
    {id:"t2u1-l1-x2", type:"mcq", q:"Lucía’s café page shows the menu in two columns on her laptop and one column on her phone. She didn’t make two versions. What explains it?", options:[
      {t:"Each browser lays out the same files for its own screen width", ok:true, why:"Right. The server sends the same HTML and CSS to both devices. Layout happens in each browser, so the CSS can adapt to the space available (Unit 3 shows how)."},
      {t:"The server sends a different picture of the page to each device", why:"Servers send files of code and assets, not pictures of pages. Both devices got the same files."},
      {t:"Her phone is showing an old copy from its cache", why:"A cached copy would be the same files, laid out the same way for the same screen. The difference comes from the screen width."},
      {t:"Phones can’t display two columns", why:"Phones can show columns perfectly well. The page’s CSS chose one column because the screen is narrow."}
    ]},
    {id:"t2u1-l1-x3", type:"match", q:"Priya opens her browser’s tools and sees these status codes next to files from her own site. Match each code to what it most likely means.", pairs:[
      ["`200`","The file was found and sent","200 OK is the normal, successful answer."],
      ["`304`","The browser’s cached copy is still current","304 Not Modified tells the browser to reuse its saved copy. Not an error."],
      ["`404`","Her code points to a file that isn’t there","Not Found: the address in her HTML or CSS doesn’t match a real file name or folder."],
      ["`301`","The file has moved to a new address","Moved Permanently: the browser follows automatically, but she should update her link."],
      ["`500`","A program on the server failed","5xx codes are server-side problems, not mistakes in a path."]
    ]},
    {id:"t2u1-l1-x4", type:"sort", q:"MDN divides a website’s files into code, which the browser reads and follows, and assets, which it displays or offers. Sort these files.", buckets:["Code","Asset"], items:[
      {t:"index.html", b:0, why:"HTML is code: the browser reads it to build the page’s structure."},
      {t:"style.css", b:0, why:"CSS is code: the browser follows its rules to decide how things look."},
      {t:"menu.js", b:0, why:"JavaScript is code: the browser runs it."},
      {t:"cake.jpg", b:1, why:"A photo is an asset: shown on the page, not followed as instructions."},
      {t:"opening-hours.pdf", b:1, why:"A PDF is an asset that the page links to or shows."},
      {t:"title-font.woff2", b:1, why:"A font file is an asset. CSS (code) tells the browser to fetch and use it."}
    ]},
    {id:"t2u1-l1-x5", type:"number", q:"A page’s HTML links one style sheet and two script files, and contains five images. The style sheet asks for two font files. On a first visit with nothing cached, how many files does the browser request in total? (Ignore the small site icon many browsers ask for automatically.)", answer:11, tol:0, unit:"files", why:"1 HTML file + 1 style sheet + 2 scripts + 5 images + 2 fonts = **11**. Every file is a separate request, including the HTML itself and files named inside other files.", wrongs:[
      {v:10, tol:0, why:"That misses one file, most likely the HTML page itself. It’s the first request of all."},
      {v:9, tol:0, why:"That leaves out the two fonts. Files named inside the CSS need their own requests too."},
      {v:8, tol:0, why:"That counts only the files named in the HTML (1 + 2 + 5). Add the HTML itself and the two fonts the CSS asks for."}
    ], hint2:"Count the HTML too, and the files that the CSS file asks for."},
    {id:"t2u1-l1-x6", type:"mcq", q:"Tomás publishes his site’s folder as it is on his laptop. Which file does a simple web server send for `https://tomas-art.example/gallery/`?", options:[
      {t:"gallery/index.html", ok:true, why:"Right. An address ending in a folder makes most servers send that folder’s index.html."},
      {t:"gallery.html at the top of the site", why:"That file would have the address /gallery.html. The trailing slash points into a folder called gallery."},
      {t:"A list of every file in the gallery folder", why:"Some servers can show folder listings, but they normally send index.html when it exists, and many hosts never show listings."},
      {t:"The site’s home page, index.html at the top", why:"The home page is the index.html at the top. /gallery/ asks for the one inside the gallery folder."}
    ]}
   ],
   apply:{intro:"Watch the file-by-file nature of the web on a page you already use, then write your own first page. All of it works on a phone.", tasks:[
     {t:"Read three addresses like a maker", how:["Open three different pages you use: a news article, a page of a shop or club, and a home page.","For each, tap or click the address bar and copy the full address into your notes.","Mark the scheme (`https`), the domain, and the path after the first single `/`.","Guess which file on the server each path points to. For a path ending in `/`, the answer is usually an index.html in that folder; many big sites build pages with programs, so treat it as a guess."], write:"The three addresses and your guess at the file behind each"},
     {t:"See that an image is its own file", how:{
       win:["In Chrome, Edge or Firefox, right-click any photo on a web page and choose **Open image in new tab** (Firefox: **Open Image in New Tab**).","Look at the new tab’s address: the photo has an address of its own, usually ending in .jpg, .png, .webp or similar.","Some images are drawn by CSS or protected by the site, so if the option is missing, try another photo."],
       mac:["In Safari, Chrome or Firefox, Control-click (or two-finger click) a photo and choose **Open Image in New Tab**.","Look at the new tab’s address: the photo has its own address, usually ending in .jpg, .png, .webp or similar.","If the option is missing, the image may be drawn by CSS; try another."],
       chromeos:["In Chrome, right-click (Alt + click, or a two-finger tap on the touchpad) a photo and choose **Open image in new tab**.","Look at the new tab’s address: the photo has its own address."],
       phone:["**Android (Chrome):** touch and hold a photo and choose **Open image in new tab**, then switch to that tab and read its address.","**iPhone (Safari):** touch and hold a photo. The menu usually offers options such as saving, copying or sharing the image rather than opening it in a tab of its own, so this step may not be possible; try it on a computer or Android device, or skip it.","Menus differ between browsers and versions; look for a similar option if the words aren’t the same."]
     }},
     {t:"Write a first page in the Web Lab", how:["Open the Web Lab challenge **Your first page** (the Practise link in this lesson, or Labs on the desk → Web Lab).","Type the main heading it asks for, **Green Corner Garden**, and under it a paragraph of at least five words about the garden.","Watch the preview update, then run the checker. Read any message slowly: each one says which line to look at.","Once it passes, change the words to something you like (a recipe, a team, a place) and watch the preview. The checker expects the garden heading, so it will now say so; that’s fine."], write:true}
   ], proof:"Three annotated addresses, the separate address of one image (or a note that your browser didn’t offer it), and a first page that passes the Web Lab checker."},
   read:[
     {book:"mdn", where:"Getting started modules → Web standards → “How the web works”", note:"The client–server picture, DNS, packets and status codes, with MDN’s house-and-shop analogy."},
     {book:"mdn", where:"Getting started modules → Web standards → “How browsers load websites”", note:"The rendering stages from this lesson, with a worked example."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u1-l2", title:"The three languages of the web", minutes:55,
   hook:{q:"A page’s style sheet (its CSS file) fails to load. What do visitors see?", options:["A blank white screen","An error message instead of the page","The content, in the browser’s plain default styles","Nothing, until they refresh"], answer:2, reveal:"**The content, in plain default styles:** black text in a basic font, big bold headings, blue underlined links. HTML carries the content and CSS only the look, so losing CSS makes a page plain, not empty. This lesson shows what each of the three languages does, and what happens when one goes missing."},
   goals:[
     "Explain the separate jobs of HTML, CSS and JavaScript",
     "Read and write a tiny working example of each, and connect CSS and JavaScript files to an HTML page",
     "Predict what a page looks like and does when one layer is missing",
     "Explain how each language reacts to a mistake: HTML guesses, CSS skips, JavaScript stops"
   ],
   learn:[
    {h:"Three languages, three jobs", body:[
      {lead:"Every web page you’ve ever seen was built from the same three languages, each with its own job."},
      "Picture a café. There’s **what** it offers (the menu, the opening hours), **how** it looks (paint, signs, lighting) and **what happens** when you interact (you order, a bell rings, coffee appears). A web page splits the same way:",
      {table:[
        ["Language","Its job","File ends in"],
        ["[[html|HTML]]","Content and structure: what each part **is**","`.html`"],
        ["[[css|CSS]]","Presentation: how each part **looks**","`.css`"],
        ["[[javascript|JavaScript]]","Behaviour: what **happens** when people interact","`.js`"]
      ]},
      "HTML stands for HyperText Markup Language. It isn’t a programming language: it can’t calculate or decide anything. It **marks up** content, saying “this is a heading, this is a paragraph, this is a button.” CSS (Cascading Style Sheets) is a list of rules about appearance. JavaScript **is** a programming language: it can calculate, make decisions, remember things and change the page while it’s open.",
      "All three are [[web-standard|web standards]], open specifications that every browser follows, which is why one page works in all of them (see {{web-standards}}). MDN calls keeping the three in separate files “an ideal to aim for where possible, rather than an absolute”. It pays off: one CSS file can style every page of a site, and fixing a colour means changing one line.",
      {tip:"Despite the name, JavaScript has nothing to do with Java. They’re different languages that happen to share part of a name."}
    ]},
    {h:"HTML: say what each part is", body:[
      "Here is a complete, tiny page for Café Luna. Type it into any editor from Lesson 4, save it as `index.html`, and it works. (The **Try in Web Lab** button under it opens a related challenge, **Your first page**.)",
      {code:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n        content="width=device-width, initial-scale=1">\n  <title>Café Luna</title>\n</head>\n<body>\n  <h1>Café Luna</h1>\n  <p>Fresh bread every morning.</p>\n  <button type="button">\n    Show today’s special\n  </button>\n  <p id="special"></p>\n</body>\n</html>', lang:"html", label:"index.html", weblab:"wl-first-page"},
      "The words in angle brackets are **tags**. Most come in pairs that wrap content: `<h1>` opens the main heading and `</h1>` closes it. Line by line:",
      {list:[
        "`<!doctype html>` tells the browser this is a modern HTML page.",
        "`<html lang=\"en\">` wraps everything and says the page is in English, so screen readers pronounce it correctly.",
        "`<head>` holds information **about** the page: the text encoding (`utf-8`, which covers every writing system), a line that makes phones use their real screen width, and the `<title>` shown on the browser tab.",
        "`<body>` holds what visitors see: a main heading `<h1>`, a paragraph `<p>`, a button, and an empty paragraph with the name `special`, waiting for JavaScript to fill it."
      ]},
      "Notice that nothing here says “big” or “brown”. `<h1>` means **the most important heading**, not “large text”. Browsers, search engines and screen readers all rely on that meaning. Unit 2 teaches HTML properly; for now, recognise its shape.",
      {lab:"wl-headings", t:"Practise: use heading levels to give a page structure"}
    ]},
    {h:"CSS: decide how it looks", body:[
      "Now the look. This file is called `style.css`:",
      {code:'body {\n  font-family: system-ui, sans-serif;\n  max-width: 40rem;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\nh1 {\n  color: #8a3b12;\n}\n\nbutton {\n  font: inherit;\n  padding: 0.5rem 1rem;\n  border: 0;\n  border-radius: 0.5rem;\n  background: #8a3b12;\n  color: white;\n}', lang:"css", label:"style.css", weblab:"wl-color"},
      "CSS is a list of **rules**. Each rule starts with a **selector** that says which parts it applies to (`body`, `h1`, `button`), then a block in curly braces holding **declarations**. Each declaration is a property, a colon, a value and a semicolon: `color: #8a3b12;` sets the text colour to a dark brown.",
      {list:[
        "The `body` rule picks a clean font from the device, stops lines growing too long on wide screens (`max-width`), centres the content (`margin: 0 auto`) and adds a little space around it.",
        "The `h1` rule colours the heading brown. `#8a3b12` is a colour written in hexadecimal; Unit 3 explains colour codes.",
        "The `button` rule gives the button the page’s font, space inside, rounded corners, and white text on brown. That pair has a contrast ratio of about 7.7 to 1, comfortably above the 4.5 to 1 that WCAG asks for normal-sized text."
      ]},
      {lab:"wl-color", t:"Practise: colour a heading with a CSS rule"}
    ]},
    {h:"JavaScript: make it respond", body:[
      "Finally, the behaviour. This file is called `script.js`:",
      {code:'const button = document.querySelector("button");\nconst special = document.querySelector("#special");\n\nbutton.addEventListener("click", () => {\n  special.textContent = "Today: lemon cake";\n});', lang:"js", label:"script.js", weblab:"wl-js-hello"},
      {list:[
        "Line 1 finds the first `button` on the page and keeps it under the name `button`. `const` creates a name that won’t be pointed at anything else.",
        "Line 2 finds the element whose `id` is `special` (the `#` means “id”).",
        "Lines 4 to 6 say: whenever the button is clicked (or tapped, or pressed with the keyboard), put the words “Today: lemon cake” inside that paragraph."
      ]},
      "That’s the basic pattern of most JavaScript on web pages: **find** something on the page, **wait** for something to happen, then **change** something. Unit 4 teaches the language step by step.",
      {lab:"wl-js-hello", t:"Practise: make a click change some text"}
    ]},
    {h:"Putting the three together", body:[
      "Three files sit side by side in one folder: `index.html`, `style.css` and `script.js`. Two lines in the HTML’s `<head>` connect them:",
      {code:'<link rel="stylesheet" href="style.css">\n<script src="script.js" defer><\/script>', lang:"html", label:"Add inside <head>", cap:"Put these two lines just before `</head>` in the page from section 2."},
      "`<link rel=\"stylesheet\">` loads the CSS. `<script src>` loads the JavaScript, and the word `defer` matters: it tells the browser to download the script straight away but **run it only after the whole HTML has been read**. Without it, a script in the `<head>` runs before the button exists, and line 1 finds nothing.",
      "You may also see CSS written inside a `<style>` element and JavaScript inside a `<script>` element, right in the HTML file. That works, and it’s how the Web Lab combines its three boxes. For a real site, separate files are easier to reuse across pages, and the browser can keep them in its cache.",
      {fig:'<svg viewBox="0 0 340 458"><text class="s" x="10" y="18">1. HTML only</text><rect class="d-panel" x="10" y="26" width="320" height="104" rx="6" stroke-width="1.5"/><text x="22" y="56" font-weight="700">Café Luna</text><text x="22" y="82">Fresh bread every morning.</text><rect class="d-soft" x="22" y="96" width="172" height="24" rx="3" stroke-width="1.5"/><text x="108" y="113" text-anchor="middle">Show today’s special</text><text class="s" x="10" y="158">2. HTML + CSS</text><rect class="d-panel" x="10" y="166" width="320" height="112" rx="6" stroke-width="1.5"/><rect class="d-rose" x="10" y="166" width="320" height="36" rx="6" stroke-width="1.5"/><text x="26" y="190" font-weight="700">Café Luna</text><text x="26" y="226">Fresh bread every morning.</text><rect class="d-lup" x="26" y="238" width="180" height="30" rx="12" stroke-width="2"/><text x="116" y="258" text-anchor="middle">Show today’s special</text><text class="s" x="10" y="306">3. HTML + CSS + JavaScript, after a tap</text><rect class="d-panel" x="10" y="314" width="320" height="136" rx="6" stroke-width="1.5"/><rect class="d-rose" x="10" y="314" width="320" height="36" rx="6" stroke-width="1.5"/><text x="26" y="338" font-weight="700">Café Luna</text><text x="26" y="374">Fresh bread every morning.</text><rect class="d-lup" x="26" y="386" width="180" height="30" rx="12" stroke-width="2"/><text x="116" y="406" text-anchor="middle">Show today’s special</text><rect class="d-gold" x="20" y="422" width="140" height="20" rx="4" stroke-width="1"/><text x="26" y="437">Today: lemon cake</text></svg>', alt:"The same café page three times. 1, HTML only: a bold heading Café Luna, the line Fresh bread every morning, and a plain grey button saying Show today’s special. 2, HTML plus CSS: the heading sits in a coloured band, and the button is rounded and coloured. 3, HTML plus CSS plus JavaScript after a tap: the same styled page, with a new line under the button reading Today: lemon cake, highlighted.", cap:"Each layer adds something; none of them replaces the others."}
    ]},
    {h:"When a layer is missing", body:[
      "Files fail to load more often than you’d think: a wrong path, a slow connection, a blocked script, a typo in a file name. Because the three layers are separate, a page usually **degrades** rather than disappears.",
      {table:[
        ["If this is missing…","Visitors get…"],
        ["CSS","All the content in the browser’s default styles: a basic font (often a serif one such as Times New Roman), large bold headings, blue underlined links, everything in one long column"],
        ["JavaScript","All the content and the styling, but nothing responds: the button in our example does nothing"],
        ["HTML","Nothing at all. The HTML is the page; CSS and JavaScript are attached to it"]
      ]},
      "This is why makers put **essential content in the HTML**, not only in JavaScript. MDN calls the idea [[progressive-enhancement|progressive enhancement]]: give everyone a working basic page, then layer improvements on top for browsers that can use them. A café’s opening hours written in HTML reach every visitor; hours that appear only after a script runs don’t reach anyone whose script failed.",
      {key:"HTML is the page. CSS and JavaScript improve it. Make sure the page still makes sense without them."}
    ]},
    {h:"HTML guesses, CSS skips, JavaScript stops", body:[
      "The three languages react to mistakes in completely different ways, and knowing this saves hours of confusion.",
      "**HTML guesses.** Browsers never refuse to show a page because of an HTML mistake. They follow detailed repair rules in the HTML standard and carry on, but their guess may not be what you meant. Here the closing `</h1>` is missing:",
      {code:'<h1>Café Luna\n<p>Fresh bread every <b>morning</p>\n<p>Open 7 to 3</p>', lang:"html", label:"Broken on purpose", cap:"The browser puts both paragraphs **inside** the heading, so everything turns large and bold, and the bold from `<b>` carries on into the second paragraph."},
      "**CSS skips.** When the browser meets a declaration it can’t understand, it ignores that declaration and carries on with the next. A single missing semicolon can make it skip two:",
      {code:'h1 {\n  color: #8a3b12\n  font-size: 2.5rem;\n}\np {\n  line-height: 1.5;\n}', lang:"css", label:"Broken on purpose", cap:"Without the semicolon after `#8a3b12`, the browser reads `color: #8a3b12 font-size: 2.5rem` as one invalid value and drops it, so neither the colour nor the size applies. The `p` rule still works.", weblab:"wl-fix-css"},
      "**JavaScript stops.** If a script has a **syntax** mistake (a missing bracket or quote), the browser can’t understand the file at all, so **none of that script runs**, not even the lines above the mistake:",
      {code:'const special = document.querySelector("#special");\nspecial.textContent = "Today: lemon cake";\nconsole.log("Done"', lang:"js", label:"Broken on purpose", cap:"The closing `)` is missing on line 3, so lines 1 and 2 never run either. The Console (Lesson 5) reports a syntax error that points to it.", weblab:"wl-js-fix"},
      "A different kind of JavaScript error happens while the code runs. Load the script from section 4 in the `<head>` **without** `defer`, and Chrome’s Console shows `Cannot read properties of null (reading 'addEventListener')`: the script looked for the button before the browser had read that far, found nothing (`null`), and stopped. Other browsers word it differently: Firefox, for example, says `can't access property \"addEventListener\", button is null`. Adding `defer` fixes it.",
      {table:[
        ["Language","On a mistake it…","So you notice…"],
        ["HTML","Guesses and carries on","Odd layout or nesting, never an error message"],
        ["CSS","Skips what it can’t read","A style that silently doesn’t apply"],
        ["JavaScript","Stops that script","Nothing happens; an error in the Console"]
      ]},
      {lab:"wl-fix-css", t:"Practise: find and fix typos and missing semicolons in CSS"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“HTML decides how big things are.”** HTML says what things are. Browsers have default sizes, and CSS changes them. Choose `<h1>` because it’s the main heading, not because it’s big.",
        "**“A page without CSS is broken.”** It’s plain, but if the HTML is well structured it still works, and it’s still readable with a screen reader.",
        "**“If there’s no error message, the code is right.”** HTML and CSS almost never show errors; they guess or skip. Look at the result, and use the tools in Lesson 5.",
        "**“JavaScript and Java are the same.”** Different languages with different uses.",
        "**“Every page needs JavaScript.”** Many good pages have none. Add it when you need behaviour, and keep content in the HTML."
      ]}
    ]}
   ],
   try:[
    {id:"t2u1-l2-x1", type:"sort", q:"Ana is building a page for her community choir. Which language does each job?", buckets:["HTML","CSS","JavaScript"], items:[
      {t:"Mark “Spring concert” as the main heading", b:0, why:"Saying what a piece of content **is** (the main heading) is HTML’s job: `<h1>`."},
      {t:"Make every heading dark green", b:1, why:"Colour is presentation, so it belongs in a CSS rule."},
      {t:"Show the list of rehearsal dates as a list", b:0, why:"Structure (this is a list, these are its items) is HTML."},
      {t:"Use a larger font on wide screens", b:1, why:"Appearance that adapts to screen size is done with CSS."},
      {t:"Show “Thanks!” when someone taps the Join button", b:2, why:"Reacting to a tap by changing the page is behaviour: JavaScript."},
      {t:"Count how many tickets are in the basket and show the total", b:2, why:"Calculating and updating is programming, which only JavaScript of the three can do."}
    ]},
    {id:"t2u1-l2-x2", type:"match", q:"Match each line of code to what it does.", pairs:[
      ["`<h1>Café Luna</h1>`","Marks the page’s main heading","HTML tags say what content is; `h1` is the top-level heading."],
      ["`h1 { color: teal; }`","Colours main headings teal","A CSS rule: the selector `h1`, then a declaration setting `color`."],
      ["`<link rel=\"stylesheet\" href=\"style.css\">`","Connects a CSS file to the page","The `link` element in the head loads a style sheet."],
      ["`<script src=\"script.js\" defer><\/script>`","Loads JavaScript and runs it after the HTML is read","`src` names the file; `defer` waits until the HTML has been read."],
      ["`button.addEventListener(\"click\", …)`","Runs code whenever the button is clicked","JavaScript: wait for an event, then react."]
    ]},
    {id:"t2u1-l2-x3", type:"mcq", q:"Tomás opens his page and sees a plain serif font, blue underlined links and none of his colours, though the text is all there. What’s the most likely cause?", options:[
      {t:"The browser didn’t load his CSS file, perhaps because of a wrong path or file name", ok:true, why:"Right. All content present but default styles is the signature of missing CSS. Check the `href` in the `<link>` against the real file name and folder."},
      {t:"His JavaScript has a syntax error", why:"A broken script stops behaviour, but it doesn’t remove CSS. The colours would still show."},
      {t:"His HTML file is missing", why:"Without HTML there would be no text at all. The content is there, so the HTML loaded."},
      {t:"His internet connection is too slow for colours", why:"Colours aren’t separate downloads; they’re in the CSS. If the CSS arrived, they’d appear."}
    ]},
    {id:"t2u1-l2-x4", type:"spot", q:"Mei’s heading is neither brown nor the size she set, but her paragraphs do have the right line spacing. Tap every declaration that the browser ignores.", ask:"ignored by the browser", mono:true, parts:[
      {t:"h1 {", flag:false, why:"The selector is fine: it targets the main heading."}, "\n  ", {t:"color: #8a3b12", flag:true, why:"There’s no semicolon after the colour, so the browser reads it together with the next line as one invalid value, and drops it."}, "\n  ", {t:"font-size: 2.5rem;", flag:true, why:"This line is correct on its own, but it was swallowed into the broken `color` value above, so it’s ignored too."}, "\n}\n", {t:"p {", flag:false, why:"A valid selector for paragraphs."}, "\n  ", {t:"line-height: 1.5;", flag:false, why:"Valid and in its own rule, so it applies. That’s why the paragraphs look right."}, "\n}"
    ]},
    {id:"t2u1-l2-x5", type:"mcq", q:"Kenji puts `<script src=\"script.js\"><\/script>` in his page’s `<head>`. Chrome’s Console says: `Cannot read properties of null (reading 'addEventListener')`. What happened?", options:[
      {t:"The script ran before the browser had read the button, so it found nothing", ok:true, why:"Right. Without `defer`, a script in the head runs as soon as it arrives, before the body is read. `querySelector` returned `null`. Add `defer`, or move the script to the end of the body."},
      {t:"The file script.js doesn’t exist", why:"If the file were missing, nothing would run and there’d be a 404, not an error from inside the script. This error came from code that did run."},
      {t:"Buttons can’t be used with JavaScript", why:"They can; this error is about timing, not about buttons."},
      {t:"There’s a missing semicolon in the CSS", why:"CSS mistakes never produce JavaScript errors; the browser skips them silently."}
    ]},
    {id:"t2u1-l2-x6", type:"mcq", q:"Line 5 of a 20-line script is missing a closing bracket. Which lines run?", options:[
      {t:"None of them: a syntax error stops the whole script from running", ok:true, why:"Right. The browser must understand the whole file before running any of it. A syntax error means it can’t, so nothing in that script runs. Other, separate scripts on the page still run."},
      {t:"Lines 1 to 4, then it stops", why:"That’s how an error **while running** behaves. A syntax error is found before running starts, so even lines 1 to 4 don’t run."},
      {t:"All except line 5", why:"JavaScript doesn’t skip a bad line the way CSS skips a bad declaration."},
      {t:"All of them; the browser repairs the bracket", why:"Browsers repair broken HTML, but not broken JavaScript."}
    ]}
   ],
   apply:{intro:"Build the Café Luna page from this lesson (or one for your own idea), then break it on purpose so you’ll recognise each kind of failure later. The Web Lab works on any phone or computer.", tasks:[
     {t:"Build the three layers", how:["Each Web Lab challenge lets you edit one layer while the others are given, so you’ll use three challenges (all under Labs on the desk → Web Lab, or the **Try in Web Lab** buttons in this lesson).","**HTML:** open **Your first page** (the button under the HTML in section 2). Write the heading and paragraph it asks for, and run the checker.","**CSS:** open **Colour a heading** (the button under the CSS in section 3). The café page is given; write the rule it asks for and run the checker.","**JavaScript:** open **Change text on click** (the button under the JavaScript in section 4). Write the click code, using the names in its given HTML (`#btn` and `#msg`) rather than the café’s. Tap the preview’s button, check the text changes, and run the checker."]},
     {t:"Break it, three ways", how:["In **Colour a heading**, add a second declaration under the colour, such as `font-size: 3rem;`. Then delete the semicolon after the colour. Which styles stop working? Put it back.","In **Your first page**, delete the closing `</h1>`. What happens to the paragraph after it? Put it back.","In **Change text on click**, delete a closing `)`. Does anything still happen when you tap the button? Read the Web Lab’s message, then fix it."], write:"For each break: what you changed, what you saw, and which rule it shows (guesses, skips or stops)"},
     {t:"Optional, on a computer: switch off a real page’s CSS", how:{
       win:["In Firefox, open any article page. Press [[kbd:Alt]] to show the menu bar, then choose **View → Page Style → No Style**.","Scroll through. Is the content in a sensible order? Are the headings still headings?","Choose **View → Page Style → Basic Page Style** to switch styles back on (or reload)."],
       mac:["In Firefox, open any article page and choose **View → Page Style → No Style** from the menu bar.","Scroll through: is the content still in a sensible order?","Choose **View → Page Style → Basic Page Style**, or reload, to switch styles back on."],
       chromeos:["ChromeOS’s Chrome has no simple switch for this. Read on to Lesson 5, where the Inspector lets you untick CSS declarations one by one, or try it on another computer with Firefox."],
       phone:["Phone browsers don’t offer this. Instead, in the Web Lab’s **Colour a heading** challenge, write a rule or two, then cut everything out of the CSS box, look at the preview, and paste it back."]
     }}
   ], proof:"A working three-layer page in the Web Lab, plus your notes on how HTML, CSS and JavaScript each reacted to a deliberate mistake."},
   read:[
     {book:"mdn", where:"Getting started modules → Your first website: “Creating the content”, “Styling the content” and “Adding interactivity”", note:"MDN builds a small site with the same three layers."},
     {book:"mdn", where:"Getting started modules → Web standards → “The web standards model”, section “Overview of modern web technologies”", note:"HTML, CSS and JavaScript, and why they’re kept separate."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u1-l3", title:"Files, folders and paths", minutes:55,
   hook:{q:"On Sione’s laptop, his page shows the club logo. After he uploads the site, the logo is a broken image. The file is called `logo.png`; his HTML says `images/Logo.png`. Why does it work on one and not the other?", options:["The host doesn’t support PNG images","His laptop ignores capital letters in file names, but most web servers don’t","The image is too large to upload","Uploading renamed the file"], answer:1, reveal:"**Capital letters.** Windows and macOS normally treat `Logo.png` and `logo.png` as the same name, so the page works at home. Most web servers treat them as two different names, so online the browser asks for a file that doesn’t exist and gets a 404. This lesson gives you naming and path habits that make that kind of bug impossible."},
   goals:[
     "Set up a project folder with index.html and sensible sub-folders",
     "Name files and folders so they work everywhere: lowercase, hyphens, no spaces, the right extension",
     "Write relative paths to files in the same folder, a sub-folder and a parent folder",
     "Tell relative paths, root-relative paths and absolute URLs apart, and choose the right one",
     "Diagnose and fix broken links and images"
   ],
   learn:[
    {h:"A website is a folder", body:[
      {lead:"Before it’s published, a website is nothing more mysterious than a folder of files on your computer."},
      "MDN’s advice is to keep **all the files for one site in one folder**, and all your site folders inside one central folder, such as `web-projects` in your Documents. Inside each site folder, most projects have the same few things:",
      {code:'garden-club/\n├── index.html\n├── about.html\n├── images/\n│   ├── logo.png\n│   └── tomatoes.jpg\n├── styles/\n│   └── style.css\n├── scripts/\n│   └── main.js\n└── events/\n    ├── spring.html\n    └── photos/\n        └── stall.jpg', lang:"txt", label:"A project folder", cap:"Folders end in `/`. The lines show what’s inside what."},
      {list:[
        "`index.html` is the home page.",
        "`images/` holds pictures, `styles/` the CSS and `scripts/` the JavaScript.",
        "Other pages sit next to `index.html`, or in their own folders once there are many (here, `events/`)."
      ]},
      "When the site is published, this folder becomes the top of the website, so `about.html` becomes `https://garden-club.example/about.html`. Every folder and file name ends up in an address. That’s why naming matters so much more here than in your everyday documents (Unit 2 of Digital Foundations introduced {{folders-paths}} and {{file-naming}}).",
      {tip:"Keep project folders somewhere ordinary, like Documents, not on the desktop clutter or inside system folders. If your Documents folder syncs to a cloud service, that also gives you a backup."}
    ]},
    {h:"Why index.html is special", body:[
      "You met this in Lesson 1: when an address ends in a folder, most web servers send the [[index-html|index.html]] file in that folder. So:",
      {ex:"https://garden-club.example/          → index.html\nhttps://garden-club.example/events/   → events/index.html\nhttps://garden-club.example/about.html → about.html", label:"Worked example: folder addresses", mono:true},
      "Two practical consequences:",
      {list:[
        "**Your home page must be called exactly `index.html`**, in lowercase, at the top of the site folder. Name it `Home.html` or `index.HTML` and visitors to your bare domain may get an error instead.",
        "**You can make tidy addresses** by giving a page its own folder: put the events page at `events/index.html` and people can visit `/events/` instead of `/events.html`."
      ]},
      "On your own computer there’s no server, so double-clicking a folder won’t open its index.html in a browser. Open the `index.html` file itself."
    ]},
    {h:"Naming files so they never break", body:[
      "MDN’s rule of thumb: write folder and file names **in lowercase, with no spaces, and with words separated by hyphens**. Here’s why each part matters:",
      {table:[
        ["Instead of","Use","Why"],
        ["`Logo.PNG`","`logo.png`","Most web servers are case-sensitive, so the capitals in your code must match exactly. All-lowercase means there’s nothing to match"],
        ["`spring fair.html`","`spring-fair.html`","A space becomes `%20` in an address, which is easy to get wrong and ugly to share"],
        ["`menu final (2).html`","`menu.html`","Spaces and brackets again. Keep versions in version history, not in names"],
        ["`café.html`","`cafe.html`","Accented letters are encoded in addresses (`caf%C3%A9.html`) and can be stored differently by different systems"],
        ["`q&a.html`, `notes#2.html`","`faq.html`, `notes-2.html`","`&`, `?`, `#` and `%` have special meanings inside URLs"],
        ["`about`","`about.html`","Hosts use the extension to choose the content type. Without it, the browser may download the file instead of showing it"]
      ]},
      "That `#` row is a real trap. In a URL, `#` starts a **fragment**, a jump to a place within a page. A link to `notes#2.html` asks the server for `notes` and then looks for a spot named `2.html` inside it. The file `notes#2.html` is never requested.",
      {warn:"Watch for **hidden double extensions**. Windows hides extensions for known file types by default, so a text file you renamed to `index.html` in File Explorer (or saved from an editor that adds `.txt`) may really be `index.html.txt`. It looks right in File Explorer, but the browser shows your code as plain text. Turn extensions on: in Windows 11 File Explorer, **View → Show → File name extensions**; on a Mac, **Finder → Settings → Advanced → Show all filename extensions**. See also {{file-extensions}}."},
      {key:"lowercase-words-with-hyphens.html: boring names never break."}
    ]},
    {h:"Paths: directions from one file to another", body:[
      "When one file mentions another, as in `<img src=\"…\">` or `<a href=\"…\">`, it gives a [[file-path|path]]: directions from where the current file sits to where the other one is. Like real directions, they only make sense from a starting point. “Second door on the left” is right from the front door and wrong from the kitchen.",
      "MDN’s rules for [[relative-path|relative paths]]:",
      {list:[
        "**Same folder:** just the file name. `about.html`",
        "**Down into a sub-folder:** folder name, a forward slash, then the file. `images/logo.png`",
        "**Up to the folder above:** two dots and a slash. `../index.html`",
        "**Combine them:** `../images/logo.png` means “go up one folder, then into images, then logo.png”."
      ]},
      {fig:'<svg viewBox="0 0 340 312"><path class="d-soft" d="M19 40 L19 186 L34 186 M19 76 L34 76 M19 126 L34 126 M39 136 L39 156 L54 156 M39 196 L39 246 L54 246 M39 216 L54 216 M59 256 L59 276 L74 276" stroke-width="1.5" fill="none"/><rect class="d-gold" x="12" y="20" width="14" height="10" rx="2" stroke-width="1.5"/><text x="32" y="30">garden-club/</text><rect class="d-panel" x="37" y="66" width="10" height="13" rx="1" stroke-width="1.5"/><text x="54" y="78">index.html</text><rect class="d-gold" x="32" y="116" width="14" height="10" rx="2" stroke-width="1.5"/><text x="52" y="126">images/</text><rect class="d-panel" x="57" y="146" width="10" height="13" rx="1" stroke-width="1.5"/><text x="74" y="158">logo.png</text><rect class="d-gold" x="32" y="176" width="14" height="10" rx="2" stroke-width="1.5"/><text x="52" y="186">events/</text><rect class="d-lup" x="54" y="200" width="104" height="24" rx="4" stroke-width="2"/><rect class="d-panel" x="58" y="206" width="10" height="13" rx="1" stroke-width="1.5"/><text x="74" y="218">spring.html</text><rect class="d-gold" x="52" y="236" width="14" height="10" rx="2" stroke-width="1.5"/><text x="72" y="246">photos/</text><rect class="d-panel" x="77" y="266" width="10" height="13" rx="1" stroke-width="1.5"/><text x="94" y="278">stall.jpg</text><rect class="d-sage" x="180" y="62" width="150" height="24" rx="12" stroke-width="1.5"/><text x="255" y="79" text-anchor="middle">../index.html</text><rect class="d-sage" x="180" y="142" width="150" height="24" rx="12" stroke-width="1.5"/><text x="255" y="159" text-anchor="middle">../images/logo.png</text><rect class="d-lup" x="180" y="200" width="150" height="24" rx="12" stroke-width="2"/><text x="255" y="217" text-anchor="middle">you are here</text><rect class="d-sage" x="180" y="262" width="150" height="24" rx="12" stroke-width="1.5"/><text x="255" y="279" text-anchor="middle">photos/stall.jpg</text><text class="s" x="10" y="304">Paths written inside events/spring.html</text></svg>', alt:"A folder tree. garden-club contains index.html, an images folder with logo.png, and an events folder with spring.html and a photos folder holding stall.jpg. spring.html is highlighted as ‘you are here’. Labels show the paths written inside spring.html: ../index.html for the home page, ../images/logo.png for the logo, and photos/stall.jpg for the photo.", cap:"From `events/spring.html`, `../` climbs to `garden-club/`; a folder name with no dots goes down."},
      "Here are those paths in the HTML of `events/spring.html`:",
      {code:'<link rel="stylesheet"\n      href="../styles/style.css">\n<img src="../images/logo.png"\n     alt="Garden club logo">\n<img src="photos/stall.jpg"\n     alt="Our stall at the spring fair">\n<a href="../index.html">Home</a>\n<a href="https://example.org/seeds">\n  Seed guide\n</a>', lang:"html", label:"Inside events/spring.html"},
      "Always use **forward slashes** `/` in web paths, even on Windows, where File Explorer shows backslashes such as `C:\\Users`. Many browsers quietly turn a backslash into a forward slash, but other tools and servers don’t, so a backslash is a bug waiting to happen.",
      {lab:"wl-image", t:"Practise: add an image with a path and a good description"}
    ]},
    {h:"Relative, root-relative and absolute", body:[
      "There are three ways to write an address in your code, and each starts from a different place:",
      {table:[
        ["Kind","Example","Starts from"],
        ["[[relative-path|Relative path]]","`images/logo.png`, `../index.html`","The folder of the file it’s written in"],
        ["[[root-relative-path|Root-relative path]]","`/images/logo.png`","The top of the domain (or, for a file URL, the top of your drive)"],
        ["[[absolute-url|Absolute URL]]","`https://example.org/seeds`","Nothing: it’s a complete address"]
      ]},
      {list:[
        "**Use relative paths for your own files.** The whole folder can move (to a USB stick, to a host, into a sub-folder) and every link still works, because the files keep the same positions relative to each other.",
        "**Use absolute URLs for other websites.** `href=\"example.org\"` without `https://` is treated as a relative path: the browser looks for a file called example.org in your own folder.",
        "**Be careful with root-relative paths.** `/images/logo.png` breaks when you open the page from your drive, because `/` then means the top of the whole drive. It also breaks when a site lives in a sub-folder of a domain, as GitHub Pages project sites do (`username.github.io/project/`): `/images/` points to `username.github.io/images/`, outside your project."
      ]},
      {warn:"Never put a path to your own computer in a page, such as `C:\\Users\\amara\\Pictures\\cake.jpg` or `file:///Users/amara/cake.jpg`. It works while you test on that computer and fails for everyone else, because their browsers look on **their** devices. Copy the image into your project’s `images/` folder and use a relative path."}
    ]},
    {h:"Why links and images break", body:[
      "A broken image or a link that leads to “Not Found” almost always has one of a few causes. When something breaks, run down this list:",
      {ol:[
        "**Spelling, letter by letter.** Is it `logo.png` or `logos.png`? `image/` or `images/`?",
        "**Capitals.** Does the case match exactly? (Easiest fix: everything lowercase.)",
        "**Folder level.** Count the `../`: does the path start from the folder of the file it’s written in?",
        "**Extension.** `.jpg` or `.jpeg`? Is there a hidden `.txt` on the end?",
        "**Spaces and special characters** in the name.",
        "**Upload.** Is the file actually on the server, in the right folder?",
        "**Your own computer.** Does the path point to `C:\\`, `/Users/` or `file:///`?"
      ]},
      {ex:"Fatima’s recipe page at recipes/soup.html shows a broken image.\nHer code: <img src=\"images/soup.jpg\" alt=\"…\">\nHer files: recipes/soup.html and images/soup.jpg\n\nThe path starts from recipes/, so the browser asks for recipes/images/soup.jpg, which doesn’t exist.\nFix: go up first: src=\"../images/soup.jpg\"", label:"Worked example: one folder too deep", mono:true},
      "Lesson 5 shows a faster way to find the culprit: the browser’s Network panel lists every file the page asked for, with the failing one marked 404 and its full address next to it.",
      {lab:"wl-link", t:"Practise: write a working link with a good link text"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Capital letters don’t matter in file names.”** They don’t on most laptops, and they do on most web servers. Lowercase avoids the question.",
        "**“If it works on my computer, the paths are right.”** A path to your own drive or a capital-letter mismatch can work locally and fail online.",
        "**“Paths should start with `/`.”** For beginners, relative paths are safer; a leading `/` changes the starting point to the top of the domain.",
        "**“`../` means the home page.”** It means one folder up from the current file’s folder, whatever is there.",
        "**“A link to another site can leave out https://.”** Without it, the browser treats the address as a file in your own site."
      ]}
    ]}
   ],
   try:[
    {id:"t2u1-l3-x1", type:"sort", q:"Hana is tidying her portfolio folder before publishing. Which names are safe as they are, and which should she rename?", buckets:["Safe as it is","Rename it"], items:[
      {t:"index.html", b:0, why:"The standard home-page name, lowercase, with its extension."},
      {t:"Team Photo.JPG", b:1, why:"A space and capital letters: rename to something like `team-photo.jpg`."},
      {t:"contact-us.html", b:0, why:"Lowercase, words joined by a hyphen, correct extension."},
      {t:"café-menu.html", b:1, why:"The accented é is encoded in addresses and can be stored differently by different systems. `cafe-menu.html` is safer."},
      {t:"spring-fair-2026.jpg", b:0, why:"Lowercase letters, digits and hyphens are all safe in addresses."},
      {t:"q&a.html", b:1, why:"`&` has a special meaning in URLs. Use `faq.html`."},
      {t:"about", b:1, why:"No extension, so a host may not know it’s HTML. Name it `about.html`."}
    ]},
    {id:"t2u1-l3-x2", type:"match", q:"The garden club’s page `events/spring.html` needs to point at each of these files. Match each target to the path written in spring.html.", pairs:[
      ["The home page, `index.html` at the top of the site","`../index.html`","Up one folder from events/ to the top, then the file."],
      ["The logo, in `images/` at the top","`../images/logo.png`","Up one folder, then down into images."],
      ["A photo in `events/photos/`","`photos/stall.jpg`","photos/ is inside events/, where spring.html already is, so go straight down."],
      ["Another page in `events/`","`autumn.html`","Same folder: just the file name."],
      ["A seed guide on another website","`https://example.org/seeds`","Other sites need a complete, absolute URL."]
    ]},
    {id:"t2u1-l3-x3", type:"number", q:"A page is at `site/events/2026/spring/index.html`. Its link to the home page `site/index.html` must start with `../` repeated how many times?", answer:3, tol:0, unit:"times", why:"Start in the page’s own folder, spring/. One `../` reaches 2026/, two reach events/, three reach site/. So the link is `../../../index.html`.", wrongs:[
      {v:4, tol:0, why:"That counts the file’s own name as a level. Paths start from the folder the file is in (spring/), so three steps reach site/."},
      {v:2, tol:0, why:"Two steps up from spring/ only reach events/. One more is needed to reach site/."}
    ], hint2:"Count folders, starting from spring/: spring → 2026 → events → site."},
    {id:"t2u1-l3-x4", type:"spot", q:"This code is in `index.html` at the top of Amara’s site folder. Her folder holds `about.html`, `images/logo.png` and `images/cake.jpg`. Tap every path that will be broken once the site is online.", ask:"broken online", mono:true, parts:[
      "<a href=\"", {t:"about.html", flag:false, why:"about.html sits in the same folder as index.html, so the bare file name is right."}, "\">About</a>\n<img src=\"", {t:"images/Logo.PNG", flag:true, why:"The real file is `logo.png`. Most servers are case-sensitive, so `Logo.PNG` is a different name and gives a 404."}, "\" alt=\"Logo\">\n<img src=\"", {t:"file:///C:/Users/amara/site/images/cake.jpg", flag:true, why:"A file URL points into Amara’s own computer. Visitors’ browsers look on their own devices and find nothing. Use `images/cake.jpg`."}, "\" alt=\"A cake\">\n<a href=\"", {t:"https://example.org/recipes", flag:false, why:"A complete absolute URL to another site: correct."}, "\">Recipes</a>\n<img src=\"", {t:"image/cake.jpg", flag:true, why:"The folder is called `images`, not `image`. One missing letter, one 404."}, "\" alt=\"A cake\">"
    ]},
    {id:"t2u1-l3-x5", type:"mcq", q:"Kenji links his style sheet as `href=\"/styles/style.css\"`. It works on his test server, but on his GitHub Pages project site at `kenji.github.io/recipes/` the page has no styles. Why?", options:[
      {t:"The leading `/` points to kenji.github.io/styles/, outside the recipes project", ok:true, why:"Right. A root-relative path starts at the top of the domain. His site lives in /recipes/, so the browser asks for a file that isn’t there. `styles/style.css` (relative) works in both places."},
      {t:"GitHub Pages doesn’t allow CSS files", why:"GitHub Pages serves CSS like any other host. The path pointed to the wrong place."},
      {t:"The file must be called index.css", why:"Style sheets can have any sensible name; only the home page has to be index.html."},
      {t:"The browser cached an old version", why:"A cache problem would show old styles, not none at all. A missing style sheet points at the path."}
    ]},
    {id:"t2u1-l3-x6", type:"mcq", q:"Oluwaseun right-clicked in File Explorer, chose **New → Text Document**, renamed it `index.html` and typed his page into it with Notepad. File Explorer shows `index.html`, but when he opens it, the browser shows his tags as plain text instead of a page. What’s the most likely cause?", options:[
      {t:"The file is really index.html.txt, with the .txt hidden", ok:true, why:"Right. Windows hides known extensions by default, so renaming “New Text Document.txt” only changed the part before the hidden .txt. The browser sees .txt and shows plain text. Turn on file name extensions and rename it to index.html (or save from Notepad with Save as type set to All files)."},
      {t:"Notepad can’t write HTML", why:"Notepad saves plain text, which is exactly what HTML is. The problem is the hidden extension."},
      {t:"He needs to upload it before it works", why:"HTML files open fine from your own computer. This is about the file’s real name."},
      {t:"The browser doesn’t support HTML files from Windows", why:"Every browser opens local HTML files; it’s treating this one as text because of its extension."}
    ]},
    {id:"t2u1-l3-x7", type:"order", q:"Lucía’s page `recipes/soup.html` shows a broken image. Put the steps of her fix in order.", items:[
      {t:"Read the img’s src in soup.html: it says images/soup.jpg", why:"Everything starts from the path actually written in the code."},
      {t:"Work out where that leads from the recipes folder: an images folder inside recipes", why:"A relative path starts from the folder of the file it’s written in (recipes/), so the browser looks for recipes/images/soup.jpg."},
      {t:"Compare that with where the photo really is: in images/ at the top of the site", why:"Only once she knows where the path leads can she see that it’s one folder too deep."},
      {t:"Add ../ to the start of the src, to go up one folder first", why:"`../images/soup.jpg` climbs from recipes/ to the top of the site, then goes into the real images folder."},
      {t:"Save, reload the page and check that the photo appears", why:"Testing comes last, after the fix, to confirm it worked."}
    ]}
   ],
   apply:{intro:"Set up the project folder you’ll use through the rest of this track, then practise paths. If you only have a phone, do the folder task in your Files app if you like, and the path tasks in the Web Lab.", tasks:[
     {t:"Make a project folder and show extensions", how:{
       win:["Open **File Explorer** and go to **Documents**. Choose **New → Folder** and name it `web-projects`.","Inside it, make a folder called `my-first-site`, and inside that, three folders: `images`, `styles` and `scripts`.","Turn on extensions: **View → Show → File name extensions**. Leave this on for good."],
       mac:["Open **Finder** and go to **Documents**. Choose **File → New Folder** (or press [[kbd:Shift]] + [[kbd:Cmd]] + [[kbd:N]]) and name it `web-projects`.","Inside it, make `my-first-site`, and inside that, `images`, `styles` and `scripts`.","Turn on extensions: **Finder → Settings → Advanced → Show all filename extensions**."],
       chromeos:["Open the **Files** app and go to **My files** (or a Google Drive folder if you prefer it backed up).","Right-click (or two-finger tap) an empty area and choose **New folder**, or press [[kbd:Ctrl]] + [[kbd:E]]. Name it `web-projects`.","Inside it, make `my-first-site`, then `images`, `styles` and `scripts` inside that."],
       phone:["**iPhone:** open the **Files** app → **Browse** → **On My iPhone** (or iCloud Drive). Tap the **More** button (three dots), choose **New Folder**, and make `web-projects`, then `my-first-site` with `images`, `styles` and `scripts` inside.","**Android:** open your files app (its name varies: Files by Google, My Files on Samsung, and others). Look for a **+** or **New folder** option in your internal storage or Documents, and make the same folders.","Phone browsers often can’t open HTML files from storage, so for now this folder is practice in organising; you’ll write the pages in the Web Lab or an online editor."]
     }},
     {t:"Write paths for a site you design", how:["Sketch a small site of your own on paper or in your notes: a home page, an about page, an events folder with one page, and an images folder with two pictures.","Write the folder tree in the style of section 1.","Pick one page inside the events folder. Write the path from it to the home page, to each image, and to the about page.","Check each path by counting folders, as in the number exercise."], write:"Your folder tree and the paths from your events page"},
     {t:"Make a working link and image in the Web Lab", how:["Open the Web Lab challenge **Make a link** (the **Practise: write a working link** item in this lesson). Turn the words it names into a link to the full address it gives. Notice that the link text says where it goes, rather than “click here”.","Open **Add an image with alt text** and add the photo with a short, useful `alt` description. (The lab has no real photo file, so the alt text shows in its place, which is exactly what alt text is for.)","Change one letter of the image’s `src` to a capital and run the checker: it flags the mismatch, just as a case-sensitive server would. Then change it back."]}
   ], proof:"A project folder with images, styles and scripts sub-folders (on a computer, with file extensions now visible), a written folder tree with correct relative paths, and a working link and image in the Web Lab."},
   read:[
     {book:"mdn", where:"Getting started modules → Environment setup → “Dealing with files”", note:"Folder structure, file naming and the rules for file paths, with VS Code steps."},
     {book:"mdn", where:"How to solve common problems → Web mechanics → “What is a URL?”", note:"Absolute and relative URLs in more detail."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u1-l4", title:"Your tools: where to write code", minutes:50,
   hook:{q:"Which of these is the right **kind** of app for writing a web page’s code?", options:["Microsoft Word","Google Docs","Windows Notepad","None of them: you need expensive software"], answer:2, reveal:"**Notepad.** The plainest app wins, because it saves exactly the characters you type and nothing else. Word processors add hidden formatting and quietly swap straight quotes for curly ones, which breaks code. You don’t need to pay for anything: the best-known code editor is free, and so is the Web Lab in this app. This lesson helps you choose."},
   goals:[
     "Explain what plain text is, and why word processors and some phone keyboards break code",
     "Recognise smart quotes and other hidden changes, and fix them",
     "Choose an editor that suits your computer, Chromebook or phone",
     "Save code files with the right name, extension and encoding"
   ],
   learn:[
    {h:"Code is plain text", body:[
      {lead:"An HTML, CSS or JavaScript file is just a sequence of characters: letters, digits, spaces, symbols and line breaks. Nothing else."},
      "That’s called [[plain-text|plain text]]. Any plain-text file can be opened by any text editor on any device and will show exactly the same characters. The file extension (`.html`, `.css`, `.js`, `.txt`) tells programs what the characters are **for**, but inside, they’re all the same kind of file.",
      "A word processor document is a different animal. A `.docx` file (see {{document-file-formats}}) is a zipped package of several files that describe the text **and** its fonts, sizes, colours, page layout, comments and settings. Google Docs stores your document on Google’s servers in its own format. Both are built for documents people read, not instructions browsers follow.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="t2u1a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="70" y="8" width="200" height="44" rx="8" stroke-width="1.5"/><text class="s" x="170" y="26" text-anchor="middle">You type:</text><text x="170" y="44" text-anchor="middle">&lt;a href="menu.html"&gt;</text><path class="d-ink" d="M120 52 L88 76" stroke-width="2" marker-end="url(#t2u1a4)"/><path class="d-ink" d="M220 52 L252 76" stroke-width="2" marker-end="url(#t2u1a4)"/><rect class="d-rose" x="8" y="80" width="158" height="240" rx="8" stroke-width="2"/><rect class="d-sage" x="174" y="80" width="158" height="240" rx="8" stroke-width="2"/><text x="87" y="104" text-anchor="middle">Word processor</text><text x="253" y="104" text-anchor="middle">Code editor</text><text class="s" x="87" y="128" text-anchor="middle">adds hidden formatting</text><text class="s" x="87" y="144" text-anchor="middle">and curls the quotes</text><text class="s" x="253" y="128" text-anchor="middle">saves only the</text><text class="s" x="253" y="144" text-anchor="middle">characters you typed</text><rect class="d-panel" x="16" y="160" width="142" height="30" rx="4" stroke-width="1"/><text x="87" y="180" text-anchor="middle">href=“menu.html”</text><rect class="d-panel" x="182" y="160" width="142" height="30" rx="4" stroke-width="1"/><text x="253" y="180" text-anchor="middle">href="menu.html"</text><text class="s" x="87" y="214" text-anchor="middle">saved as a .docx</text><text class="s" x="87" y="230" text-anchor="middle">package, not .html</text><text class="s" x="253" y="214" text-anchor="middle">saved as plain text</text><text class="s" x="253" y="230" text-anchor="middle">in a .html file</text><text x="87" y="270" text-anchor="middle">Browser:</text><text x="87" y="292" text-anchor="middle">link broken ✗</text><text x="253" y="270" text-anchor="middle">Browser:</text><text x="253" y="292" text-anchor="middle">link works ✓</text></svg>', alt:"At the top, the code a href equals menu.html in straight quotes, labelled You type. Two arrows lead to two columns. Left, Word processor: adds hidden formatting and curls the quotes, so it becomes href with curly quotes, saved as a .docx package, not .html; the browser’s link is broken. Right, Code editor: saves only the characters you typed, href with straight quotes, saved as plain text in a .html file; the link works.", cap:"Same keystrokes, two very different files."},
      {key:"Write code in a text editor or a code editor, never in a word processor."}
    ]},
    {h:"Smart quotes and other hidden changes", body:[
      "Word processors are helpful in ways that wreck code. The worst is **smart quotes**: as you type, Word, Google Docs, Apple’s TextEdit (in its rich-text mode) and the iPhone keyboard replace straight quotes `\"` and `'` with curly typographic ones “ ” and ‘ ’. Those are [[smart-quote|smart quotes]]. They look nicer in an essay, but to a browser they’re completely different characters.",
      "Here is what really happens when curly quotes reach a browser. This HTML was pasted from a document:",
      {code:'<a href=“menu.html”>Menu</a>\n<img src=“cake.jpg” alt=“A lemon cake”>', lang:"html", label:"Broken: curly quotes", cap:"The browser doesn’t see quotes at all. The link goes to an address that literally includes the curly characters, so it fails, and the image’s description is cut to “A, with `lemon` and `cake”` read as two meaningless extra attributes."},
      "In JavaScript it’s even more abrupt. This line stops the whole script with a syntax error (Chrome reports `Invalid or unexpected token`):",
      {code:'console.log(“Hello”);', lang:"js", label:"Broken: curly quotes"},
      "Other automatic changes that break code:",
      {list:[
        "**Dashes:** two hyphens `--` become a dash —, which is a different character.",
        "**Capitals:** the first letter of a line becomes a capital, so `const` turns into `Const`, which JavaScript doesn’t recognise.",
        "**Hidden formatting and characters:** text copied from a document, a PDF, a slide or a chat app can carry invisible characters such as non-breaking spaces. The code looks perfect and still fails.",
        "**Wrong file type:** saving from Word gives a `.docx` package; even its **Save as Web Page** option writes HTML stuffed with Word-specific extras."
      ]},
      {tip:"If code you copied doesn’t work and you can’t see why, retype the quotes. In a code editor, text after a curly quote isn’t coloured as a string the way it is after a straight one, which makes the problem easier to spot."}
    ]},
    {h:"Plain-text editors you already have", body:[
      "Every computer comes with a basic [[text-editor|text editor]] that saves plain text. They have no colours or helpers, but they’re enough for your first pages:",
      {table:[
        ["Device","Built-in editor","Watch out for"],
        ["Windows","Notepad","When saving, set **Save as type** to **All files** and type the full name, such as `index.html`, so the name is saved exactly as typed"],
        ["Mac","TextEdit","It starts in rich-text mode. Choose **Format → Make Plain Text** before typing code, and in **TextEdit → Settings → Open and Save**, tick **Display HTML files as HTML code instead of formatted text**"],
        ["Chromebook","The Text app, where installed","Not every Chromebook has it; vscode.dev (section 5) works on all of them"]
      ]},
      "The TextEdit setting matters more than it sounds. If you type `<h1>Hello</h1>` in rich-text mode and save it as a web page, TextEdit faithfully saves a page that **displays** the characters `<h1>Hello</h1>` as text, because it thinks you wanted to show them. Plain-text mode saves your code as code.",
      "Save code files as **UTF-8**, the standard text encoding of the web, which covers every writing system. It’s the default in current versions of Notepad, TextEdit’s plain-text mode and every code editor; just don’t change it."
    ]},
    {h:"Code editors", body:[
      "A [[code-editor|code editor]] is a text editor built for code. It still saves plain text, but it understands what you’re writing, and helps:",
      {list:[
        "**[[syntax-highlighting|Syntax highlighting]]:** tags, properties, text and numbers in different colours, so mistakes such as an unclosed quote stand out.",
        "**Completion:** type `<h` and it offers `<h1>`; type a CSS property and it suggests values.",
        "**Error hints:** squiggly underlines under code it can tell is wrong.",
        "**A folder view:** your whole project in a sidebar, which makes paths easier to get right.",
        "**Extensions:** add-ons for formatting, checking and live previews."
      ]},
      "MDN recommends **Visual Studio Code** (VS Code), which is free and runs on Windows, macOS and Linux, and it’s what most tutorials show. There are good alternatives:",
      {table:[
        ["Editor","Runs on","Cost"],
        ["Visual Studio Code","Windows, macOS, Linux; on Chromebooks through Linux","Free"],
        ["VSCodium","Windows, macOS, Linux","Free; a community build of VS Code’s open-source code"],
        ["Notepad++","Windows","Free"],
        ["Sublime Text","Windows, macOS, Linux","Paid licence"]
      ]},
      {warn:"Many code editors now include AI assistants that suggest whole blocks of code. While you’re learning, write the code yourself first, and treat any suggestion as a draft to check: it can be wrong, outdated or inaccessible. Never accept code you don’t understand."}
    ]},
    {h:"Editors in the browser, and the Web Lab", body:[
      "You don’t have to install anything. Several editors run in a web browser:",
      {list:[
        "**The Web Lab in this app** (Labs on the desk, or any **Try in Web Lab** button): boxes for HTML, CSS and JavaScript, a live preview, and a checker that explains problems with line numbers. It’s built to work on a phone.",
        "**vscode.dev**: VS Code itself, running in your browser, free, with no installation. Microsoft’s documentation says it supports the latest Chrome, Edge, Firefox and Safari; opening a whole **folder** from your device works in Chrome and Edge, while other browsers can open single files. It has no terminal and only some extensions.",
        "**MDN Playground**: boxes for HTML, CSS and JavaScript with a live preview, from the makers of MDN.",
        "**Other online code playgrounds**, such as CodePen or JSFiddle, which add accounts and sharing."
      ]},
      {warn:"Some online editors make saved work public by default. Never paste passwords, keys, personal data or anything private into one."},
      {lab:"wl-fix-nesting", t:"Practise: fix wrongly nested tags (a good way to get used to the Web Lab’s editor)"}
    ]},
    {h:"Coding on a phone or tablet", body:[
      "You can learn everything in this track on a phone. It’s slower than a keyboard, but it works, and a few settings make it much easier:",
      {list:[
        "**Turn off smart quotes on iPhone and iPad:** **Settings → General → Keyboard → Smart Punctuation**. Switch it back on when you’re done if you like it for messages.",
        "**Android keyboards** usually type straight quotes. If yours curls them, or adds a capital at the start of every line, look in its text-correction settings.",
        "**Find the symbols:** `< > { } / = ;` live on the keyboard’s symbol pages, usually behind a **?123** or **123** key and then a second **#+=** or **=\\<** key.",
        "**Turn the phone sideways** for wider lines, and consider a cheap Bluetooth keyboard if you’ll code often.",
        "**Use the Web Lab or vscode.dev.** Code-editor apps exist for both iPhone and Android, but their quality and price vary a lot, and many phones can’t open a local HTML file in the browser."
      ]}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Real coders need expensive software.”** The most widely recommended editor is free, and a plain text editor is enough to start.",
        "**“Word can make web pages, so it’s fine for HTML.”** Its web-page export is bloated, and its smart quotes and autocorrect break hand-written code.",
        "**“Code that looks right is right.”** Curly quotes and invisible characters look almost identical to the real thing. Retype when in doubt.",
        "**“You can’t code on a phone.”** You can learn and build small pages on one; a computer is faster for big projects.",
        "**“An AI assistant means I don’t need to understand the code.”** You need to understand it more, to catch its mistakes."
      ]}
    ]}
   ],
   try:[
    {id:"t2u1-l4-x1", type:"sort", q:"Which of these files are plain text that you could open and read in any text editor?", buckets:["Plain text","Not plain text"], items:[
      {t:"index.html", b:0, why:"HTML is plain text with a .html extension."},
      {t:"style.css", b:0, why:"CSS files are plain text."},
      {t:"members.csv", b:0, why:"A CSV is a plain-text table (Unit 9 of Digital Foundations)."},
      {t:"report.docx", b:1, why:"A .docx is a zipped package of files describing text and formatting. A text editor shows gibberish."},
      {t:"logo.png", b:1, why:"An image is binary data: numbers for pixels, not characters."},
      {t:"notes.txt", b:0, why:".txt is the classic plain-text file."}
    ]},
    {id:"t2u1-l4-x2", type:"spot", q:"Mei copied this code from a shared document. Tap every part that will break because of a character change.", ask:"will break", mono:true, parts:[
      "<p class=", {t:"\"intro\"", flag:false, why:"Straight double quotes: fine."}, ">Hi</p>\n<a href=", {t:"“menu.html”", flag:true, why:"Curly quotes. The browser treats them as part of the address, so the link goes nowhere."}, ">Menu</a>\n<script>\n", {t:"const name = ‘Amara’;", flag:true, why:"Curly single quotes aren’t string quotes in JavaScript: a syntax error that stops the whole script."}, "\n", {t:"console.log(\"Hi \" + name);", flag:false, why:"Straight quotes and correct brackets: fine (if the line above were fixed)."}, "\n<\/script>"
    ]},
    {id:"t2u1-l4-x3", type:"mcq", q:"Lucía typed her first page in TextEdit on her Mac, saved it as index.html, and opened it in a browser. The page shows her tags, like `<h1>`, as visible text. What went wrong?", options:[
      {t:"TextEdit was in rich-text mode, so it saved a page that displays her code as text", ok:true, why:"Right. In rich-text mode TextEdit treats what you type as words to display. Choose **Format → Make Plain Text** first, then save."},
      {t:"Macs can’t create HTML files", why:"They can: TextEdit in plain-text mode, or any code editor, saves perfectly good HTML."},
      {t:"She needed to upload the file before the tags would work", why:"Local HTML files render fine. The file itself contains code that displays the tags."},
      {t:"Her browser doesn’t support the h1 tag", why:"Every browser supports h1. The tags are being shown because they were saved as text, not as code."}
    ]},
    {id:"t2u1-l4-x4", type:"match", q:"Match each code-editor feature to how it helps.", pairs:[
      ["Syntax highlighting","Colours tags, properties and text differently so an unclosed quote stands out","Colour by meaning makes mistakes visible."],
      ["Completion","Offers `<h1>` after you type `<h`","Saves typing and spelling mistakes."],
      ["Error hints","Underlines code it can tell is wrong","Catches problems before you open the browser."],
      ["Folder view","Shows the whole project in a sidebar","Helps you see structure and get paths right."],
      ["Extensions","Add formatting, checking or live previews","Add-ons extend what the editor can do."]
    ]},
    {id:"t2u1-l4-x5", type:"mcq", q:"Dmitri’s school Chromebook is managed, and the Linux development environment is switched off. He wants to edit HTML files with a proper code editor. What can he do?", options:[
      {t:"Use an editor that runs in the browser, such as vscode.dev, or the Web Lab", ok:true, why:"Right. Both run in Chrome with nothing to install, so they work even when Linux apps are blocked. vscode.dev can open folders in Chrome."},
      {t:"Write the code in Google Docs and download it as .html", why:"Docs curls quotes and adds its own formatting; it’s the wrong kind of tool for code."},
      {t:"Nothing: Chromebooks can’t be used for coding", why:"They can, through browser editors, or through Linux where it’s allowed."},
      {t:"Ask a friend to email him a copy of VS Code’s Windows installer", why:"Windows programs don’t run on ChromeOS, and installing unknown files on a school device is against most policies anyway."}
    ]},
    {id:"t2u1-l4-x6", type:"mcq", q:"Sione is practising JavaScript in the Web Lab on his iPhone. Every string he types fails with a syntax error, although his code looks the same as the lesson’s. What’s the likeliest fix?", options:[
      {t:"Turn off Smart Punctuation in Settings → General → Keyboard", ok:true, why:"Right. Smart Punctuation turns his straight quotes into curly ones as he types. With it off, the keyboard types the quotes JavaScript expects."},
      {t:"Switch to a different browser", why:"The browser runs code the same way; the problem is the characters the keyboard produces."},
      {t:"Add semicolons to every line", why:"Missing semicolons rarely cause errors in JavaScript, and they wouldn’t explain every string failing."},
      {t:"Use single quotes instead of double quotes", why:"The keyboard would curl single quotes too."}
    ]}
   ],
   apply:{intro:"Set up somewhere to write code on the device you’ll use most, then see smart quotes break code with your own eyes.", tasks:[
     {t:"Set up your editor", how:{
       win:["**Quick start:** open **Notepad** (Start → type Notepad). Type a line of HTML, choose **File → Save as**, go to your `my-first-site` folder, set **Save as type** to **All files (*.*)**, and name it `index.html`. Check the encoding shows **UTF-8**.","**Optional, recommended:** download VS Code from code.visualstudio.com (the official site; avoid look-alike download sites), install it, then choose **File → Open Folder** and open `my-first-site`."],
       mac:["**Quick start:** open **TextEdit**. In **TextEdit → Settings**, under **New Document**, choose **Plain text**, and under **Open and Save**, tick **Display HTML files as HTML code instead of formatted text**. (Unticking **Smart quotes** under New Document helps too.)","Create a new document, type a line of HTML, and save it in `my-first-site` as `index.html`. If TextEdit asks which extension to use, choose **.html**.","**Optional, recommended:** download VS Code from code.visualstudio.com, drag it into **Applications**, open it, then choose **File → Open Folder** and open `my-first-site`."],
       chromeos:["**Quick start:** go to vscode.dev in Chrome. Choose **Open Folder** and pick `my-first-site` in your Files; allow access when Chrome asks.","**Optional:** if your Chromebook allows Linux, turn it on in **Settings → About ChromeOS → Developers → Linux development environment → Set up**, then install the Linux .deb version of VS Code from code.visualstudio.com (choose the ARM64 build if your Chromebook has an ARM chip). Managed school or work Chromebooks may not allow this."],
       phone:["**iPhone/iPad:** turn off **Settings → General → Keyboard → Smart Punctuation** while you code.","**Android:** open your keyboard’s settings and check that it doesn’t curl quotes or capitalise every line; switch those off if it does.","Use the Web Lab for this track. For files of your own, try vscode.dev in your browser; it works on phones, with less space."]
     }},
     {t:"Watch smart quotes break code", how:["In a word processor or notes app with smart quotes on (Word, Google Docs, Pages, or Notes on iPhone), type: `console.log(\"Hello\");`","Copy it and paste it into the JavaScript box of the Web Lab challenge **Change text on click** (the **Try in Web Lab** button under the café script in Lesson 2), or any JavaScript challenge.","Read the error. Then type the same line straight into the Web Lab and compare. (On an iPhone or iPad, switch Smart Punctuation off first, or the keyboard will curl these quotes too.)","Look closely at the two sets of quotes. Can you see the difference?"], write:"What error did the curly-quote version give, and how do the quotes look different?"}
   ], proof:"An editor set up on your main device (a saved `index.html` in your project folder, or vscode.dev or the Web Lab ready on a phone or Chromebook), and a note of the error that curly quotes caused."},
   read:[
     {book:"mdn", where:"Getting started modules → Environment setup → “Code editors”", note:"Why word processors aren’t suitable, what code editors add, and a VS Code walkthrough with the Prettier extension."},
     {book:"mdn", where:"Getting started modules → Environment setup → “Installing basic software”", note:"Editors, browsers from more than one engine, and a simple local server."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u1-l5", title:"Looking under the hood", minutes:55,
   hook:{q:"Can you read the HTML, CSS and JavaScript of any public web page you visit?", options:["No, it’s kept secret by the website","Only if you own the website","Yes: your browser had to receive it, so it can show it to you","Only with special hacking software"], answer:2, reveal:"**Yes.** To show you a page, your browser must download its HTML, CSS and JavaScript, so every browser on a computer can show you that code, and change your copy of it, with tools that are built in. What stays private is what never leaves the server: its programs, databases and passwords. This lesson tours those built-in tools: view source, the Inspector, the Console and the Network panel."},
   goals:[
     "View the source of a page in each major browser, and explain what it does and doesn’t show",
     "Use the Inspector to see the HTML and CSS of any part of a page, and change your copy temporarily",
     "Read errors in the Console and run a line of JavaScript there safely",
     "Use the Network panel to list every file a page loads and find the one that failed",
     "Know what’s possible on a phone, and the alternatives when it isn’t"
   ],
   learn:[
    {h:"Every page is open to read", body:[
      {lead:"The quickest way to learn how the web is built is to look at how real pages are built. Browsers make that easy on purpose."},
      "Everything that runs in your browser arrives as [[source-code|source code]]: HTML, CSS and JavaScript (Lesson 1). Your browser can show you all of it. What you **can’t** see is anything that stays on the server: the programs that build pages, the databases behind a shop, other people’s data, passwords. Reading a page’s code is normal, legal and how many web developers learned.",
      "Reading isn’t copying, though. A site’s text, images and design are covered by copyright like any other creative work (see {{copyright-basics}}). Learn techniques from what you see; don’t lift whole pages, designs or articles. Small code samples that are clearly offered for reuse, such as MDN’s, are a different matter: MDN releases its code samples under CC0, a public-domain dedication, so you may reuse them freely.",
      "Browsers give you two ways in. **View source** shows the HTML file exactly as the server sent it. The [[devtools|developer tools]] (DevTools) show the page as it is **now**, with panels for its HTML and CSS, its JavaScript, and every file it loaded. All the main desktop browsers have both, built in and free."
    ]},
    {h:"View source: the HTML as it arrived", body:[
      "[[view-source|View source]] opens the raw HTML of the current page in a new tab, with line numbers.",
      {table:[
        ["Browser","How to view source"],
        ["Chrome, Edge or Firefox on Windows; Chrome on ChromeOS","Right-click an empty part of the page → **View page source**, or press [[kbd:Ctrl]] + [[kbd:U]]"],
        ["Chrome on a Mac","**View → Developer → View Source**, or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:U]]"],
        ["Firefox on a Mac","Control-click the page → **View Page Source**, or [[kbd:Cmd]] + [[kbd:U]]"],
        ["Safari on a Mac","First turn on **Safari → Settings → Advanced → Show features for web developers**. Then **Develop → Show Page Source**"],
        ["Chrome on Android","Type `view-source:` in front of the address, as in `view-source:https://example.org`"],
        ["Safari on iPhone and iPad","Not available on the device itself (see section 7)"]
      ]},
      "Try it on a simple page first, such as `https://example.org`, which is just a few lines. On big sites you’ll find very long lines with no spaces: the code has been **minified** (squashed) to download faster. Some pages’ source looks nearly empty, perhaps a single `<div id=\"app\"></div>` and some scripts, because JavaScript builds the visible content after loading. To see that content, you need the Inspector."
    ]},
    {h:"DevTools and the Inspector", body:[
      "Open the developer tools with [[kbd:F12]] or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]] on Windows and ChromeOS (Chromebook keyboards have no F12 key, so use the second), or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]] on a Mac. Or right-click any part of a page and choose **Inspect** (in Safari, **Inspect Element**, once developer features are on). A panel opens beside or below the page.",
      {fig:'<svg viewBox="0 0 340 452"><rect class="d-panel" x="8" y="8" width="324" height="406" rx="8" stroke-width="1.5"/><rect class="d-soft" x="20" y="18" width="300" height="22" rx="11" stroke-width="1"/><text class="s" x="34" y="34">garden-club.example</text><rect class="d-lup" x="26" y="58" width="180" height="32" rx="3" stroke-width="2" stroke-dasharray="5 3"/><text x="34" y="80" font-weight="700">Garden club</text><text class="s" x="34" y="110">Plots free this spring.</text><rect class="d-sage" x="34" y="122" width="80" height="40" rx="3" stroke-width="1.5"/><text class="s" x="74" y="146" text-anchor="middle">photo</text><path class="d-ink" d="M8 178 L332 178" stroke-width="2"/><rect class="d-gold" x="14" y="186" width="74" height="24" rx="4" stroke-width="1.5"/><text class="s" x="51" y="202" text-anchor="middle">Elements</text><text class="s" x="128" y="202" text-anchor="middle">Console</text><text class="s" x="200" y="202" text-anchor="middle">Sources</text><text class="s" x="274" y="202" text-anchor="middle">Network</text><path class="d-soft" d="M8 216 L332 216 M170 216 L170 414" stroke-width="1"/><text class="s" x="16" y="238">&lt;body&gt;</text><rect class="d-lup" x="20" y="248" width="146" height="22" rx="3" stroke-width="1.5"/><text class="s" x="26" y="264">&lt;h1&gt;Garden club&lt;/h1&gt;</text><text class="s" x="26" y="290">&lt;p&gt;Plots free…&lt;/p&gt;</text><text class="s" x="26" y="314">&lt;img src="…"&gt;</text><text class="s" x="16" y="338">&lt;/body&gt;</text><text class="s" x="178" y="238">h1 {</text><text class="s" x="190" y="260">color: darkgreen;</text><text class="s" x="190" y="282">font-family: serif;</text><text class="s" x="178" y="304">}</text><circle class="d-rose" cx="318" cy="198" r="9" stroke-width="1.5"/><text class="s" x="318" y="202" text-anchor="middle">1</text><circle class="d-rose" cx="92" cy="380" r="9" stroke-width="1.5"/><text class="s" x="92" y="384" text-anchor="middle">2</text><circle class="d-rose" cx="252" cy="380" r="9" stroke-width="1.5"/><text class="s" x="252" y="384" text-anchor="middle">3</text><text class="s" x="10" y="434">1 Tabs for each tool  2 The page’s HTML now</text><text class="s" x="10" y="450">3 CSS rules for the selected element</text></svg>', alt:"A browser window. At the top, the page shows a heading Garden club, a line Plots free this spring and a photo; the heading has a dashed highlight. Below, DevTools has tabs Elements (selected), Console, Sources and Network, marked 1. On the left, marked 2, the page’s HTML as a tree with the h1 line highlighted. On the right, marked 3, the CSS rule for h1: color darkgreen, font-family serif.", cap:"The Inspector: selecting a line of HTML highlights that part of the page, and shows the CSS rules that style it."},
      "The [[inspector|Inspector]] is called **Elements** in Chrome, Edge and Safari, and **Inspector** in Firefox. On one side is the page’s HTML as a tree you can fold and unfold; hover over a line and that part of the page lights up. On the other side are the CSS rules that apply to whatever you’ve selected, with the file and line each comes from.",
      "You can **change things**: double-click text in the HTML to edit it, untick a CSS declaration to switch it off, or type a new value such as a different colour. The page updates instantly. It’s the fastest way to answer “why is this heading purple?” or “what happens if I make this wider?”",
      {key:"Inspector changes affect only your own copy of the page, in your browser, until you reload. The real website doesn’t change, and nobody else sees it."},
      {warn:"Because anyone can make a page **show** anything this way, a screenshot of a web page proves nothing. Scammers edit bank balances, order confirmations and “payment sent” pages in exactly this way (see {{social-engineering}})."}
    ]},
    {h:"View source versus the Inspector", body:[
      "They look similar, but they show different things:",
      {table:[
        ["","View source","Inspector"],
        ["Shows","The HTML file as it arrived from the server","The page as it is now, the DOM tree from Lesson 1"],
        ["Includes changes by JavaScript","No","Yes"],
        ["Includes the browser’s repairs","No: you see the original mistakes","Yes: missing closing tags appear, filled in"],
        ["Can you edit it?","No","Yes, temporarily"],
        ["Best for","What did the server send?","What is the browser actually showing, and why?"]
      ]},
      "Remember the broken heading from Lesson 2, where `</h1>` was missing? View source shows the HTML exactly as written. The Inspector shows the paragraphs nested **inside** the `<h1>` and closing tags the browser added, which explains at a glance why everything turned big and bold."
    ]},
    {h:"The Console: where JavaScript talks back", body:[
      "The [[console|Console]] tab does two jobs. It **reports problems**: JavaScript errors appear in red, with the file name and line number, and clicking the link jumps to the line. Failed file loads and warnings appear here too. And it lets you **run JavaScript** on the current page, one line at a time.",
      "Open it directly with [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:J]] in Chrome and Edge, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]] in Firefox (on a Mac, [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:J]] or [[kbd:K]]), or **Develop → Show JavaScript Console** in Safari. Then type these lines one at a time, pressing [[kbd:Enter]] after each:",
      {code:'2 + 2\ndocument.title\ndocument.images.length\nlet h = document.querySelector("h1")\nh.textContent = "Hello!"', lang:"js", label:"Type in the Console, one line at a time", cap:"The Console shows each result: 4, the page’s title, and how many images it has. The fourth line finds the page’s main heading and names it `h`; the fifth changes its text on screen. On a page with no `h1`, the last line gives an error instead; that’s fine."},
      "The last line changed the page, just like the Inspector, and just as temporarily: reload and it’s gone.",
      {warn:"**Never paste code someone sends you into the Console.** Scammers use messages like “paste this to unlock free credits” to make people run code that takes over their accounts on that site. Chrome now stops a first-time paste and asks you to type `allow pasting` first. If anyone asks you to do that, stop: it’s a scam."},
      "Don’t worry if you see red errors in the Console of big websites you didn’t make. Many sites log errors that visitors never notice. They’re the site’s problem, not your device’s.",
      {lab:"wl-js-fix", t:"Practise: read an error message and fix the JavaScript"}
    ]},
    {h:"The Network panel: every file, one row each", body:[
      "The [[network-panel|Network panel]] lists every request the page makes. Open it, then **reload** the page, because it only records while open. Each file gets a row with its **name**, **status** code, **type** (document, stylesheet, script, image, font), **size** and **time**, plus a **waterfall** showing when each one started and finished.",
      "For a maker, three uses matter most:",
      {list:[
        "**Find what failed.** A file that didn’t load shows `404` in the Status column, usually highlighted in red. Select it to see the full address the browser asked for.",
        "**See what’s heavy.** Sort by Size: a 5 MB photo used as a small thumbnail stands out at once, and it’s a common reason pages are slow on phones.",
        "**Test fresh visits.** Ticking **Disable cache** makes the browser download everything again while DevTools is open, so you see what a first-time visitor gets. A throttling menu can slow the connection down to mimic a weak mobile signal."
      ]},
      {ex:"Oluwaseun’s club page has a broken logo.\n1. He opens DevTools, chooses Network, and reloads.\n2. One row is red: Logo.png, status 404.\n3. He selects it. Requested address:\n   …/images/Logo.png\n4. His folder contains images/logo.png.\n5. He changes the HTML to images/logo.png, saves and reloads. Status 200.", label:"Worked example: finding a 404", mono:true}
    ]},
    {h:"Phones, tablets and device mode", body:[
      "Mobile browsers don’t include DevTools, and Safari on iPhone and iPad has no view source. You still have options:",
      {list:[
        "**The Web Lab** shows your page live and explains errors with line numbers, so on a phone it plays the part of the Console for your own code.",
        "**Chrome on Android** shows source with the `view-source:` prefix.",
        "**With a computer and a cable**, you can open full DevTools for a page on your phone. Android: turn on **Developer options** and **USB debugging**, connect the phone, and open `chrome://inspect` in Chrome on the computer. iPhone or iPad: turn on **Settings → Apps → Safari → Advanced → Web Inspector** (on older versions, **Settings → Safari → Advanced**), connect to a Mac, and choose the device from Safari’s **Develop** menu."
      ]},
      "Going the other way, a computer can **pretend to be a phone**. Chrome and Edge have a device toolbar in DevTools (the phone-and-tablet button, or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]]; [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] on a Mac). Firefox has **Responsive Design Mode**, and Safari has **Develop → Enter Responsive Design Mode**. They resize the page to phone widths so you can check your layout. They’re very good, but not perfect: test on a real phone before you publish.",
      {tip:"Browsers move menus around between versions. If a button isn’t where these steps say, search the browser’s own help for “developer tools”; Chrome, Firefox, Edge and Safari all document theirs."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Editing a page in the Inspector changes the website.”** Only your copy, until you reload.",
        "**“View source shows everything about a site.”** It shows the HTML the server sent; server programs, databases and passwords stay on the server.",
        "**“View source and the Inspector show the same thing.”** Source is the original file; the Inspector shows the live page after repairs and JavaScript.",
        "**“Red errors in the Console of a big website mean my device is broken.”** They’re the site’s own errors, and usually harmless to you.",
        "**“The Network panel shows nothing, so nothing loaded.”** It records only while open. Open it first, then reload."
      ]}
    ]}
   ],
   try:[
    {id:"t2u1-l5-x1", type:"match", q:"Match each question a maker might ask with the best tool to answer it.", pairs:[
      ["What HTML did the server actually send?","View source","Source shows the file exactly as it arrived, before JavaScript or repairs."],
      ["Why is this heading purple?","The Inspector’s styles pane","Select the heading and read the CSS rules applied to it, with the file each comes from."],
      ["Why does my button do nothing?","The Console","JavaScript errors appear there with a file name and line number."],
      ["Which image failed to load?","The Network panel","It lists every request; the failed one shows status 404."],
      ["How does my page look on a narrow screen?","Device mode or Responsive Design Mode","These resize the page to phone widths on a computer."]
    ]},
    {id:"t2u1-l5-x2", type:"mcq", q:"Hana uses the Inspector to change a shop’s price from 40 to 1, then takes a screenshot. What has she changed?", options:[
      {t:"Only the copy of the page in her own browser, until she reloads", ok:true, why:"Right. The shop’s server and every other visitor see the real price. It also shows why a screenshot of a web page proves nothing."},
      {t:"The price for everyone who visits the shop", why:"The Inspector edits the page your browser is showing, not the files on the server."},
      {t:"The price for her own account, so she can buy at 1", why:"Prices are set on the shop’s server, which never sees her edit. Checkout uses the real price."},
      {t:"Nothing: you can’t edit pages in DevTools", why:"You can edit your local copy; that’s a feature for testing. It just doesn’t reach the server."}
    ]},
    {id:"t2u1-l5-x3", type:"mcq", q:"Tomás views the source of a busy news site and sees almost nothing: `<div id=\"app\"></div>` and a few script tags. The page itself is full of articles. Why?", options:[
      {t:"JavaScript builds the content after the page loads; the Inspector would show it", ok:true, why:"Right. View source shows the HTML file as sent. Here the scripts fetch and add the articles afterwards, so they appear only in the live DOM, which the Inspector shows."},
      {t:"The site is hiding its code to keep it secret", why:"Everything the browser runs can be read. The content is added later by scripts, which are visible too."},
      {t:"View source is broken in his browser", why:"It’s working: it shows exactly what the server sent, which is a small file that relies on JavaScript."},
      {t:"News sites are made with images, not HTML", why:"The articles are HTML; they’re just added by JavaScript after loading."}
    ]},
    {id:"t2u1-l5-x4", type:"spot", q:"Priya’s gallery page looks wrong. She opens the Network panel and reloads. Tap the rows that point to a problem she should fix.", ask:"a problem to fix", mono:true, parts:[
      "Name          Status  Type\n", {t:"gallery.html  200     document", flag:false, why:"The page itself loaded fine."}, "\n", {t:"style.css     200     stylesheet", flag:false, why:"The style sheet arrived: 200 OK."}, "\n", {t:"Photo-1.JPG   404     image", flag:true, why:"Not found. Probably a capital-letter or extension mismatch: is the real file photo-1.jpg?"}, "\n", {t:"photo-2.jpg   304     image", flag:false, why:"304 Not Modified: the browser reused its cached copy. Not an error."}, "\n", {t:"gallery.js    404     script", flag:true, why:"Not found, so none of the gallery’s behaviour will work. Check the script’s path and that the file was uploaded."}, "\n", {t:"font.woff2    200     font", flag:false, why:"Loaded fine."}
    ]},
    {id:"t2u1-l5-x5", type:"mcq", q:"In a gaming chat, someone says: “Open the Console on the game’s website, type allow pasting, then paste this code to get free coins.” What should Kenji do?", options:[
      {t:"Refuse: running unknown code on a site where he’s signed in can hand over his account", ok:true, why:"Right. Code run in the Console acts as him on that site. This is a well-known scam, and the “allow pasting” step exists precisely to make people stop and think."},
      {t:"Try it in a private window to be safe", why:"If he signs in there, the code still runs with his account. The danger is the code, not the window."},
      {t:"Paste it, but only once", why:"Once is enough to steal an account or session."},
      {t:"Paste it into the Inspector instead of the Console", why:"Any way of running unknown code on the site carries the same risk."}
    ]},
    {id:"t2u1-l5-x6", type:"order", q:"Amara’s page is missing its photo. Put her DevTools steps in order.", items:[
      {t:"Open DevTools and choose the Network panel", why:"The Network panel records requests, so open it first."},
      {t:"Reload the page", why:"It records only while open, so reload to capture every request."},
      {t:"Find the row with status 404", why:"The failed file stands out by its status, often in red."},
      {t:"Read the full address the browser requested", why:"This shows exactly which name and folder the browser looked for."},
      {t:"Compare it with the real file name and folder, fix the path, and reload", why:"Matching the path to the real file, letter by letter, fixes the 404."}
    ]},
    {id:"t2u1-l5-x7", type:"sort", q:"Sione has only an iPhone today; Ana has an Android phone and a laptop with a cable. Which of these can be done on a phone alone, and which need a computer as well?", buckets:["A phone alone","Needs a computer too"], items:[
      {t:"See a page’s source in Chrome on Android with view-source:", b:0, why:"Chrome on Android supports the view-source: prefix in the address bar."},
      {t:"Run HTML, CSS and JavaScript and read error messages in the Web Lab", b:0, why:"The Web Lab runs in any phone browser."},
      {t:"Open full DevTools for a page on an iPhone", b:1, why:"Safari’s Web Inspector for an iPhone runs on a Mac, connected to the phone."},
      {t:"Inspect a page on an Android phone with chrome://inspect", b:1, why:"chrome://inspect runs in Chrome on a computer, with the phone connected by USB."},
      {t:"Edit a file in vscode.dev", b:0, why:"vscode.dev runs in a phone’s browser too, with less screen space."}
    ]}
   ],
   apply:{intro:"Take a real page apart. A small, simple page works best at first, such as `https://example.org`, a personal blog or a local club’s site; then try one you use every day.", tasks:[
     {t:"View the source and inspect a heading", how:{
       win:["In Chrome, Edge or Firefox, open the page and press [[kbd:Ctrl]] + [[kbd:U]]. Find the `<title>` and the first heading.","Close the source tab. Right-click the page’s main heading and choose **Inspect**.","In the styles pane, find the rule that sets the heading’s colour or size. Untick it, or double-click its value and type a new one. Watch the page.","Double-click the heading’s text in the HTML tree and change it. Then reload: everything comes back."],
       mac:["In Chrome: **View → Developer → View Source**. In Firefox: [[kbd:Cmd]] + [[kbd:U]]. In Safari: turn on **Safari → Settings → Advanced → Show features for web developers**, then **Develop → Show Page Source**. Find the `<title>` and the first heading.","Control-click the main heading and choose **Inspect** (Safari: **Inspect Element**).","In the styles pane, find the rule for the heading’s colour or size. Untick it or change the value, and watch the page.","Double-click the heading’s text in the HTML tree and change it. Reload: it comes back."],
       chromeos:["In Chrome, open the page and press [[kbd:Ctrl]] + [[kbd:U]]. Find the `<title>` and the first heading.","Close the source tab. Right-click (Alt + click) the main heading and choose **Inspect**.","In the **Styles** pane, untick the rule for the heading’s colour or size, or change its value.","Double-click the heading’s text in the HTML tree and change it. Reload: it comes back."],
       phone:["**Android (Chrome):** tap the address bar, move to the start of the address, type `view-source:` and press Go. Find the `<title>`.","**iPhone or iPad:** view source isn’t available. Instead, open the Web Lab, make a small page, and change it while watching the preview, which is the same idea as the Inspector.","If you have a computer and cable, section 7 shows how to inspect your phone’s pages from it."]
     }},
     {t:"Count the files with the Network panel (computer)", how:{
       win:["Open DevTools ([[kbd:F12]] or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]]) and choose **Network**.","Tick **Disable cache**, then reload the page ([[kbd:F5]] or [[kbd:Ctrl]] + [[kbd:R]]).","Read the request count at the bottom of the panel. Click the **Size** column heading to sort, and find the largest file.","Look for any status of 404 or 500."],
       mac:["Open DevTools ([[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]]) and choose **Network**.","Tick **Disable cache** (Safari: use **Develop → Empty Caches** instead), then reload with [[kbd:Cmd]] + [[kbd:R]].","Read the number of requests at the bottom of the panel. Sort by **Size** and find the largest file.","Look for any status of 404 or 500."],
       chromeos:["Open DevTools ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:I]]) and choose **Network**.","Tick **Disable cache**, then reload with [[kbd:Ctrl]] + [[kbd:R]].","Read the request count at the bottom of the panel, sort by **Size**, and find the largest file.","Look for any status of 404 or 500."],
       phone:["Not possible on a phone alone. If you have no computer, skip this task; Unit 5 returns to page weight."]
     }, write:"The page you tested, how many requests it made, its largest file, and any errors you saw"},
     {t:"Talk to a page in the Console", how:["On a computer, open the Console (section 5 lists the shortcuts) on any page.","Type `2 + 2` and press Enter, then `document.title`, then `document.images.length`.","Type `let h = document.querySelector(\"h1\")`, press Enter, then `h.textContent = \"Hello!\"` and watch the heading. Reload to undo.","No computer? Open the Web Lab challenge **Fix it: the button does nothing** and read how it reports the problem."]}
   ], proof:"Notes on one real page: what its source showed, a style you switched off in the Inspector, how many files it loaded and which was largest (or a note that you did the phone alternatives), and a Console line that changed the page."},
   read:[
     {book:"mdn", where:"How to solve common problems → Tools and setup → “What are browser developer tools?”", note:"Opening DevTools in each browser, and the Inspector, Console, debugger and Network inspector."}
   ]
  }
  ],
  checkpoint:["t2u1-q02","t2u1-q06","t2u1-q11","t2u1-q14","t2u1-q17","t2u1-q21","t2u1-q24","t2u1-q30","t2u1-q33","t2u1-q37","t2u1-q40","t2u1-q43"],
  codex:[
   {id:"how-a-page-loads", title:"How a web page loads", aka:["rendering","page load","critical rendering path","DOM","render tree","layout","paint"], tags:["web","making"],
    summary:"The browser requests the HTML, discovers and fetches the other files it names, then builds a tree, matches CSS, lays out, paints, and lets JavaScript change it.",
    levels:{
     starter:[
      "When you open a web page, the server doesn’t send a finished picture. It sends **files**: first an HTML file, then whatever that file asks for, such as a style sheet, scripts, photos and fonts. Your browser puts them together, like a cook following a recipe that arrived by post with a box of ingredients.",
      {ol:["The browser asks for the page’s address.","The server sends the HTML.","The browser reads it and asks for every other file it mentions.","It builds the page from the pieces and draws it on your screen.","Scripts may change the page afterwards, for example when you tap a button."]},
      "Because each browser builds the page itself, the same page can look different on a phone and a laptop, and a missing file affects only its own part: a missing style sheet makes a page plain, a missing photo leaves a gap.",
      {key:"Pages travel as files; the browser assembles them."}
     ],
     builder:[
      "**Requests.** The first response is the HTML. While reading it, the browser finds `<link rel=\"stylesheet\">`, `<script src>`, `<img src>` and similar references, and requests each file. CSS files can request more (fonts, background images). Each file is a separate request with its own status code, visible in the Network panel of the browser’s developer tools.",
      "**Rendering**, as MDN’s *How browsers load websites* describes it:",
      {table:[["Stage","What happens"],["Parse HTML","The HTML becomes the DOM, a tree of nodes for every element and piece of text"],["Parse CSS","Rules are matched to the nodes they target"],["Layout","The size and position of every box is worked out for this screen"],["Paint","Pixels are drawn"],["JavaScript","Scripts run and may change the DOM or styles, so affected layout and painting are redone"]]},
      "The browser also builds an **accessibility tree** from the DOM, which assistive technologies such as screen readers use.",
      "**Scripts and timing.** A plain `<script>` in the `<head>` pauses HTML parsing while it downloads and runs, and can’t see elements that haven’t been parsed yet. Adding `defer` downloads the script in parallel and runs it after parsing finishes, in order. That’s the beginner-friendly default for scripts that work with the page.",
      {tip:"Put essential content in HTML. If CSS or JavaScript fails, visitors still get the content."}
     ],
     pro:[
      "MDN’s performance guide, *Populating the page: how browsers work*, adds the detail professionals use:",
      {list:[
        "**Preload scanner.** While the main parser is busy, a secondary scanner looks ahead in the HTML and starts downloading high-priority resources such as CSS, scripts and fonts.",
        "**Parser-blocking scripts.** Scripts without `async` or `defer` pause HTML parsing. `async` runs a script as soon as it arrives, in any order; `defer` runs scripts after parsing, in document order. Module scripts (`type=\"module\"`) are deferred by default.",
        "**CSS and JavaScript.** Waiting for CSS doesn’t block HTML parsing, but it does hold up JavaScript, because scripts may ask about styles. Browsers also generally hold off the first paint until style sheets in the head have loaded, to avoid a flash of unstyled content.",
        "**Layout and reflow.** The first calculation of sizes and positions is layout; later recalculations are reflows. Changing geometry from JavaScript in a loop can force many reflows.",
        "**Frames.** For smooth scrolling and animation at 60 frames per second, the work for each frame (styles, layout, paint) must fit in about 16.67 ms.",
        "**First bytes.** MDN notes that the first chunk of a response is usually about 14 KB, so getting the HTML and critical CSS for the top of the page into that chunk helps the first paint."
      ]},
      "Events mark milestones: `DOMContentLoaded` fires when the HTML has been parsed and deferred scripts have run; `load` fires when images, style sheets and other subresources have finished too. Caching (see {{cookies-cache}}) changes the picture on repeat visits: unchanged files may be reused outright or confirmed with a `304 Not Modified` response."
     ]
    },
    related:["client-server","web-files-folders","browser-devtools","how-the-web-works","cookies-cache"],
    read:[{book:"mdn", where:"Getting started modules → Web standards → “How browsers load websites”"}],
    sources:[{t:"MDN: How browsers load websites", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites"},{t:"MDN: Populating the page: how browsers work", url:"https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work"}], checked:"2026-11"},

   {id:"client-server", title:"Clients, servers, requests and responses", aka:["client-server model","HTTP request","HTTP response","status code","headers","Content-Type"], tags:["web","making"],
    summary:"A client (usually a browser) sends a request; a server sends back a response with a status code, headers and usually a file.",
    levels:{
     starter:[
      "The web runs on a simple pattern: one computer **asks**, another **answers**.",
      {list:["The **client** asks. Usually it’s a web browser on your phone or computer.","The **server** answers. It’s a computer, often in a data centre, that stores a website’s files and is always connected.","The question is a **request**: “please send me the file at this address.”","The answer is a **response**: a short status (such as “OK” or “Not Found”) plus, usually, the file."]},
      "MDN compares it to shopping: your house is the client, the shop is the server, the road is your internet connection, and HTTP is the language you use to place your order.",
      "A page with ten images needs at least eleven requests: one for the page and one for each picture. That happens in a fraction of a second on a good connection.",
      {key:"Browsers ask; servers answer. Every file is its own question and answer."}
     ],
     builder:[
      "Requests and responses follow the rules of **HTTP** (and its encrypted form HTTPS). MDN’s *Overview of HTTP* lists their parts:",
      {table:[["Request","Response"],["A method, such as `GET` (fetch) or `POST` (send data, as a form does)","The protocol version"],["The path of the resource, such as `/menu/`","A status code and short message, such as `200 OK`"],["The protocol version","Headers, such as `Content-Type: text/html`"],["Headers, such as the preferred language","Usually a body: the file itself"]]},
      "Status codes come in five families: 1xx informational, 2xx success, 3xx redirection, 4xx client errors (such as `404 Not Found` and `403 Forbidden`), and 5xx server errors (such as `500` and `503`). For a site maker, `404` nearly always means an address in the code doesn’t match a real file, and `304 Not Modified` means the browser’s cached copy is still good.",
      "Browsers send several requests at once, so a page’s files arrive side by side rather than one after another. The `Content-Type` header tells the browser what kind of file it’s getting: `text/html`, `text/css`, `text/javascript`, `image/jpeg`, `image/png`, `image/svg+xml`, `font/woff2`. Hosting services set it from the file extension, so correct extensions matter.",
      {tip:"You can watch every request and response in the Network panel of your browser’s developer tools (see {{browser-devtools}})."}
     ],
     pro:[
      "**HTTP is stateless**: each request stands alone, and the server doesn’t remember previous ones. Cookies and similar mechanisms layer sessions on top (see {{cookies-cache}}). MDN also stresses that the client always starts the exchange; servers don’t send pages unasked, though newer mechanisms can simulate it.",
      "**Versions.** HTTP/1.1 sends readable text messages, one request at a time per connection. HTTP/2 and HTTP/3 carry the same methods, headers and status codes in a binary format, many requests at once on one connection, so DevTools displays them as fields rather than raw text. HTTP/3 runs over QUIC rather than TCP.",
      "**Static and dynamic.** MDN’s *What is a web server?* distinguishes a static server, which sends hosted files as they are, from a dynamic one, which adds an application server and usually a database to build responses on demand. Both use the same request–response pattern; so do the APIs behind most phone apps, which typically return data such as JSON rather than HTML.",
      "**Your own machine as a server.** A small test server on your computer is reached at `http://localhost` (the address 127.0.0.1). Some features, such as JavaScript modules and many browser APIs, are blocked or limited when a page is opened from a `file://` URL, which is why tutorials eventually ask you to run one.",
      "**Status codes in practice.** Browsers follow `301`, `302`, `307` and `308` redirects automatically. A `404` can also be deliberate: MDN notes that servers may send it instead of `403` to hide that a resource exists. Custom 404 pages are still sent with status 404, so search engines don’t index them as real pages."
     ]
    },
    related:["how-a-page-loads","how-the-web-works","web-files-folders","dns"],
    read:[{book:"mdn", where:"Getting started modules → Web standards → “How the web works”"}],
    sources:[{t:"MDN: Overview of HTTP", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"},{t:"MDN: HTTP response status codes", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"},{t:"MDN: How the web works", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"}], checked:"2026-11"},

   {id:"web-files-folders", title:"Website files and folders", aka:["project folder","index.html","file naming for the web","site structure","default document"], tags:["web","making","files"],
    summary:"A website is a folder: index.html at the top, images, styles and scripts in sub-folders, and every name lowercase with hyphens and the right extension.",
    levels:{
     starter:[
      "Before it’s published, a website is an ordinary folder on your computer. MDN suggests the same simple shape for every project:",
      {list:["`index.html`: the home page.","`images/`: pictures.","`styles/`: CSS files.","`scripts/`: JavaScript files."]},
      "Keep one folder per site, and all your site folders in one place, such as `Documents/web-projects`. When you publish, the site folder becomes the top of your website: `about.html` in the folder becomes `https://your-site.example/about.html`, and `images/logo.png` becomes `https://your-site.example/images/logo.png`. So every name you choose ends up in a web address.",
      "Name everything in **lowercase, with hyphens instead of spaces**, and keep the extension: `spring-fair.html`, `team-photo.jpg`. File names become part of web addresses, and most web servers treat `Photo.jpg` and `photo.jpg` as different files.",
      {key:"Boring names never break: lowercase-words-with-hyphens.ext"}
     ],
     builder:[
      "**Why `index.html`?** When an address ends in a folder, such as `https://example.org/events/`, most servers and hosts send that folder’s `index.html`. So the home page must be `index.html` at the top of the site, and you can give any page a tidy address by putting it in its own folder as `index.html`.",
      "**Naming rules and their reasons** (from MDN’s *Dealing with files*, plus URL rules):",
      {table:[["Rule","Reason"],["Lowercase","Most web servers are case-sensitive; laptops usually aren’t, so mismatches hide until you publish"],["Hyphens, not spaces","Spaces become `%20` in addresses and need quoting on the command line"],["No `# ? & %`","They have special meanings in URLs: `#` starts a fragment, `?` a query"],["Plain letters and digits","Accented letters are percent-encoded and can be stored differently by different systems"],["Keep the extension","Hosts choose the content type from it"]]},
      "**Show extensions.** Windows hides extensions for known file types by default, which hides mistakes such as `index.html.txt`. Turn them on in File Explorer (**View → Show → File name extensions**) or on a Mac (**Finder → Settings → Advanced → Show all filename extensions**).",
      "See also Digital Foundations’ {{file-naming}} and {{folders-paths}}, and {{file-paths-urls}} for how pages point to each other."
     ],
     pro:[
      "**Default documents are configuration.** `index.html` is a convention that servers implement through settings (for example Apache’s `DirectoryIndex` or nginx’s `index` directive), and hosts preconfigure it. Some also accept `index.htm` or other names; don’t rely on that. Many servers redirect `/events` to `/events/` when `events` is a folder, which matters because relative paths resolve differently with and without the trailing slash.",
      "**Case and Unicode.** Windows (NTFS) and macOS (APFS) are case-insensitive by default but preserve case; Linux file systems, which most servers use, are case-sensitive. Accented names add another trap: the same visible letter can be stored as one precomposed character or as a letter plus a combining accent (Unicode normalization forms NFC and NFD), so names can fail to match after moving between systems.",
      "**Content types.** MDN’s *Common media types* lists the standard types: `text/html`, `text/css`, `text/javascript`, `image/png`, `image/jpeg`, `image/svg+xml`, `font/woff2`, `application/json`. Unknown types are usually served as `application/octet-stream`, which browsers download rather than display. Servers can send `X-Content-Type-Options: nosniff` to stop browsers guessing.",
      "**What not to publish.** Everything in the folder you upload becomes public, including drafts, backups, notes and files beginning with a dot that your system hides. Keep private material out of the site folder. Keep source images separately and publish copies resized for the web: a phone photo of several megabytes shown as a thumbnail wastes visitors’ data."
     ]
    },
    related:["file-paths-urls","text-editors","folders-paths","file-naming","file-extensions"],
    read:[{book:"mdn", where:"Getting started modules → Environment setup → “Dealing with files”"}],
    sources:[{t:"MDN: Dealing with files", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"},{t:"MDN: What is a web server?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"},{t:"MDN: Common media types", url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types/Common_types"}], checked:"2026-11"},

   {id:"text-editors", title:"Text editors and code editors", aka:["plain text","VS Code","Visual Studio Code","Notepad","TextEdit","smart quotes","vscode.dev","online editor"], tags:["making","tools"],
    summary:"Code is plain text, so write it in a text or code editor, never a word processor; code editors add colour, completion and error hints.",
    levels:{
     starter:[
      "Web code is **plain text**: just characters, with no fonts, sizes or colours stored in the file. So you need an app that saves exactly what you type and nothing more.",
      {list:["**Text editors** come with every computer: Notepad on Windows, TextEdit on a Mac (switched to plain-text mode).","**Code editors** are text editors built for code. Visual Studio Code is free and widely used.","**Online editors** run in a browser, including on phones: vscode.dev, MDN Playground, and the Web Lab in this app."]},
      "**Word processors** such as Word, Google Docs and Pages are the wrong tool. They save formatting along with your text, and they turn straight quotes `\"` into curly ones “ ”, which browsers don’t accept as quotes in code.",
      {key:"If code from a document doesn’t work, check the quotes."}
     ],
     builder:[
      "**What code editors add**, in MDN’s summary: syntax highlighting, code completion, error hints, search and replace across files, and extensions. They also show your project folder in a sidebar.",
      {table:[["Editor","Platforms","Cost"],["Visual Studio Code","Windows, macOS, Linux (Chromebooks through Linux)","Free"],["vscode.dev","Any current browser","Free"],["VSCodium","Windows, macOS, Linux","Free"],["Notepad++","Windows","Free"],["Sublime Text","Windows, macOS, Linux","Paid licence"]]},
      "**vscode.dev** is VS Code in the browser with nothing to install. Microsoft’s documentation says it supports the latest Chrome, Edge, Firefox and Safari; opening a local **folder** needs the File System Access API, which Chrome and Edge support, while other browsers can open individual files. It has no terminal or debugger, and only some extensions run. It also works on tablets and phones, with less room.",
      "**Settings that prevent trouble:**",
      {list:["Word: **File → Options → Proofing → AutoCorrect Options → AutoFormat As You Type**, untick “Straight quotes” with “smart quotes” (if you must type code there at all).","TextEdit: **Format → Make Plain Text**; in **Settings → Open and Save**, tick **Display HTML files as HTML code instead of formatted text**.","iPhone and iPad: **Settings → General → Keyboard → Smart Punctuation** off while coding.","Notepad: when saving, set **Save as type** to **All files**."]}
     ],
     pro:[
      "**The characters behind the trouble.** Straight quotes are U+0022 `\"` and U+0027 `'`. Smart quotes are U+201C “, U+201D ”, U+2018 ‘ and U+2019 ’. In HTML, curly quotes around an attribute value become part of an unquoted value, so `href=“menu.html”` links to an address containing those characters. In JavaScript they’re not string delimiters at all, so the script fails to parse. Other invisible culprits: the no-break space U+00A0 and the zero-width space U+200B, often carried in from web pages, PDFs and chat apps. Many editors can highlight them; by default VS Code marks invisible characters, and characters easily mistaken for ordinary ones, with a box.",
      "**Encoding.** Save as UTF-8 and declare it with `<meta charset=\"utf-8\">` early in the head. UTF-8 without a byte order mark (BOM) is the usual choice for web files; VS Code’s default.",
      "**Line endings.** Windows traditionally ends lines with CR LF, macOS and Linux with LF. Browsers don’t care, but version control tools can show every line as changed when they differ. Editors show and convert the setting; Git can normalise it.",
      "**Formatters and linters.** A formatter such as Prettier rewrites code into a consistent layout on save. A linter flags likely mistakes. Both are extensions in most editors, and they make it far easier to read your own code a month later.",
      "**AI assistants.** Built-in code suggestions can speed up experienced developers and mislead beginners: they can produce outdated, inaccessible or insecure code that looks plausible. Treat suggestions as drafts to understand and test, and never paste secrets such as passwords or API keys into prompts or online editors."
     ]
    },
    related:["web-files-folders","browser-devtools","document-file-formats"],
    read:[{book:"mdn", where:"Getting started modules → Environment setup → “Code editors”"}],
    sources:[{t:"MDN: Code editors", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors"},{t:"Visual Studio Code docs: VS Code for the Web", url:"https://code.visualstudio.com/docs/setup/vscode-web"},{t:"Microsoft Support: Smart quotes in Word", url:"https://support.microsoft.com/en-us/office/smart-quotes-in-word-702fc92e-b723-4e3d-b2cc-71dedaf2f343"}], checked:"2026-11"},

   {id:"browser-devtools", title:"Browser developer tools", aka:["DevTools","Inspector","Elements panel","Console","Network panel","Web Inspector","inspect element","device mode","responsive design mode"], tags:["making","tools","web"],
    summary:"Built-in browser panels for seeing and temporarily changing a page’s HTML and CSS, running JavaScript, and listing every file it loads.",
    levels:{
     starter:[
      "Every desktop browser includes free **developer tools** (DevTools) that let you look inside any page.",
      {list:["**Open them** with F12 or Ctrl + Shift + I (Windows, ChromeOS), Cmd + Option + I (Mac), or right-click part of a page and choose **Inspect**. Safari needs **Settings → Advanced → Show features for web developers** first.","**Inspector / Elements:** the page’s HTML and the CSS styling each part. You can change your copy and see the result at once.","**Console:** error messages, and a place to type JavaScript.","**Network:** every file the page loaded, with its status code and size."]},
      "Changes you make stay in your browser only, and disappear when you reload. The website itself is untouched, which also means a screenshot of a page proves nothing.",
      {warn:"Never paste code a stranger sends you into the Console. It runs as you on that website."}
     ],
     builder:[
      {table:[["Tool","Chrome, Edge","Firefox","Safari"],["HTML and CSS","Elements","Inspector","Elements"],["Errors and JavaScript","Console","Console","Console"],["Files and requests","Network","Network","Network"],["Step through scripts","Sources","Debugger","Sources"]]},
      "Direct shortcuts (Windows and ChromeOS; Mac in brackets): Chrome and Edge open the Console with Ctrl + Shift + J (Cmd + Option + J); Firefox with Ctrl + Shift + K (Cmd + Option + K) and the Network panel with Ctrl + Shift + E (Cmd + Option + E). Ctrl + Shift + C (Cmd + Option + C in Chrome) starts picking an element on the page.",
      "**Habits that save time:**",
      {list:["Open the Network panel **before** reloading; it only records while open. Tick **Disable cache** to see a first-time visit.","Read the first Console error first; later ones are often knock-on effects.","In the styles pane, crossed-out declarations were overridden by another rule, and declarations with a warning icon weren’t understood.","Use device mode (Chrome, Edge) or Responsive Design Mode (Firefox, Safari) to try phone widths, then confirm on a real phone."]},
      "Mobile browsers have no built-in DevTools. Android pages can be inspected from Chrome on a computer at `chrome://inspect` with USB debugging on; iPhone and iPad pages from Safari on a Mac after turning on **Settings → Apps → Safari → Advanced → Web Inspector**."
     ],
     pro:[
      "**Beyond the four basics:**",
      {list:["**Sources / Debugger:** set breakpoints, pause scripts, step line by line and inspect variables.","**Performance:** record a page load or interaction to see where time goes in scripting, layout and paint.","**Application / Storage:** cookies, local storage and caches for the current site, which you can clear one item at a time.","**Accessibility:** Chrome, Firefox and Safari can show the accessibility tree, each element’s computed name and role, and contrast information.","**Lighthouse** (Chrome, Edge): automated audits of performance, accessibility, best practices and SEO. Helpful, but a pass is not proof of accessibility."]},
      "**Self-XSS protection.** Chrome stops a paste into the Console (and the Sources panel) when the profile has fewer than five Console history entries, and asks the user to type `allow pasting` first. Treat any instruction to do that as a red flag.",
      "**Remote debugging details.** For Android, enable Developer options and USB debugging, connect directly (hubs can fail), accept the prompt on the phone, then use **Inspect** at `chrome://inspect#devices`. For iOS and iPadOS, enable Web Inspector, connect by cable, trust the Mac, and choose the page from the device’s submenu in Safari’s **Develop** menu; after a first wired connection, **Connect via Network** allows wireless inspection. Simulators in Xcode are always inspectable."
     ]
    },
    related:["view-source","how-a-page-loads","client-server","text-editors"],
    read:[{book:"mdn", where:"How to solve common problems → Tools and setup → “What are browser developer tools?”"}],
    sources:[{t:"MDN: What are browser developer tools?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"},{t:"Chrome for Developers: Open Chrome DevTools", url:"https://developer.chrome.com/docs/devtools/open"},{t:"Apple Developer: Inspecting iOS and iPadOS", url:"https://developer.apple.com/documentation/safari-developer-tools/inspecting-ios"}], checked:"2026-11"},

   {id:"view-source", title:"View source", aka:["view page source","page source","view-source:","source code of a web page"], tags:["making","tools","web"],
    summary:"View source shows the HTML file exactly as the server sent it, before JavaScript or the browser’s repairs change the page.",
    levels:{
     starter:[
      "**View source** shows the raw HTML of the page you’re looking at, in a new tab with line numbers. It’s the oldest way to learn how web pages are made.",
      {list:["Chrome, Edge or Firefox on Windows, or Chrome on ChromeOS: right-click the page → **View page source**, or Ctrl + U.","Chrome on a Mac: **View → Developer → View Source** (Cmd + Option + U). Firefox on a Mac: Cmd + U.","Safari on a Mac: turn on developer features in **Settings → Advanced**, then **Develop → Show Page Source**.","Chrome on Android: type `view-source:` before the address. Safari on iPhone and iPad doesn’t offer it."]},
      "You see only what the browser received: HTML, and links to the CSS and JavaScript files. Server programs, databases and passwords never leave the server.",
      {tip:"Start with small pages. Big sites squash their code onto a few enormous lines."}
     ],
     builder:[
      "**Source isn’t the live page.** View source shows the original file. The Inspector in the developer tools shows the DOM as it is now:",
      {table:[["","View source","Inspector"],["Changes made by JavaScript","Not shown","Shown"],["Tags the browser added while repairing HTML","Not shown","Shown"],["Editable","No","Yes, temporarily"]]},
      "So when the source of a modern site looks nearly empty, perhaps just `<div id=\"app\"></div>` and some scripts, the content is being built by JavaScript after loading. Use the Inspector to see it.",
      "**Reading source well:** use the browser’s Find (Ctrl + F or Cmd + F) to jump to `<title>`, `<h1>`, `<link` or `<script`. Click the links to style sheets and scripts to open those files too. Look for the `lang` attribute, the `charset`, and the viewport line; you’ll write all three yourself.",
      "**When source looks odd:** a page that redirects you, or a sign-in page, may show the source of a different address from the one you expected; check the address at the top of the source tab. And pages that differ per visitor may show slightly different source each time you open it.",
      "**Copying.** Reading code to learn techniques is normal; the text, images and design of a site are protected by copyright like any creative work (see {{copyright-basics}})."
     ],
     pro:[
      "**Minification and source maps.** Production sites usually minify HTML, CSS and JavaScript (removing whitespace and shortening names) and bundle many files into few. Developers ship **source maps** alongside so that DevTools can show the original, readable files; when a site publishes them, the Sources or Debugger panel lists the original file tree.",
      "**Linking to lines.** Firefox supports addresses such as `view-source:https://www.mozilla.org/#line100` to open source at a given line. Chrome, Edge and Firefox accept the `view-source:` prefix typed into the address bar; browsers generally don’t let web pages navigate to `view-source:` URLs themselves.",
      "**What source can mislead you about.** The source you see may be fetched again or taken from the cache, so on pages that differ per visit (signed-in pages, personalised content, A/B tests), it may not match exactly what was first rendered. Server-side rendering frameworks may send full HTML and then “hydrate” it with JavaScript; client-side rendering sends a near-empty shell. Both look the same in the Inspector once loaded.",
      "**Security reading.** Source is a good place to check where a form really submits (`<form action=\"…\">`) and which third-party scripts a page loads, which matters when judging whether a page is what it claims to be (see {{phishing}})."
     ]
    },
    related:["browser-devtools","how-a-page-loads","web-standards"],
    read:[{book:"mdn", where:"How to solve common problems → Tools and setup → “What are browser developer tools?”"}],
    sources:[{t:"Firefox Source Docs: View Source", url:"https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html"},{t:"Apple Developer: Develop menu", url:"https://developer.apple.com/documentation/safari-developer-tools/develop-menu"}], checked:"2026-11"},

   {id:"file-paths-urls", title:"File paths and URLs in web pages", aka:["relative path","absolute URL","root-relative path","../","dot dot slash","broken link","broken image"], tags:["making","web","files"],
    summary:"Relative paths start from the current file’s folder, root-relative paths from the top of the domain, and absolute URLs are complete addresses.",
    levels:{
     starter:[
      "When a page shows an image or links to another page, it needs directions to that file. The directions are a **path**.",
      {list:["Same folder: just the name. `about.html`","Into a folder: folder, slash, name. `images/logo.png`","Up one folder: two dots and a slash. `../index.html`","Another website: the whole address. `https://example.org/`"]},
      "Paths are like directions given from where you’re standing: they always start from the folder of the file they’re written in. The same picture needs a different path from a page at the top of the site than from a page inside a folder.",
      "Always use forward slashes `/`, even on Windows. And never use a path to your own computer, like `C:\\Users\\…` or `file:///…`: it works for you and nobody else.",
      {key:"Relative paths for your own files; full https:// addresses for other sites."}
     ],
     builder:[
      {table:[["Kind","Example","Resolved from"],["Relative","`images/logo.png`, `../index.html`, `./notes.html`","The current file’s folder"],["Root-relative","`/images/logo.png`","The top of the domain"],["Absolute","`https://example.org/seeds`","Nothing: it’s complete"]]},
      "**Worked example.** The page `https://garden.example/events/spring.html` contains these paths:",
      {ex:"photo.jpg            → /events/photo.jpg\n../images/logo.png   → /images/logo.png\n/images/logo.png     → /images/logo.png\n../../x.png          → /x.png (can’t go above the top)\nexample.org          → /events/example.org  (oops)", label:"How the browser resolves paths", mono:true},
      "**Which to choose:** relative paths for every file in your own project, because the whole folder can then move to a USB stick, a host or a sub-folder without a single link breaking; absolute URLs for anything on another site; root-relative paths only when you know your site will always sit at the top of its domain.",
      "**Root-relative paths** are convenient on a site that lives at the top of its domain, but they break when you open pages from your drive (`/` becomes the top of the drive) and when a site lives in a sub-folder, as GitHub Pages project sites do (`username.github.io/project/`).",
      "**Diagnosing a broken link or image:** compare the path with the real name letter by letter (case matters on most servers), count the `../`, check the extension, check for spaces or special characters, and check the file was uploaded. The Network panel in DevTools shows the exact address that failed (see {{browser-devtools}})."
     ],
     pro:[
      "Browsers resolve relative references against a **base URL**, by the rules in the WHATWG URL Standard. Normally the base is the document’s own address; a `<base href>` element in the head changes it for every relative URL on the page, which is powerful and easy to forget.",
      {list:[
        "**Trailing slashes matter.** From `https://x.example/events/`, `photo.jpg` resolves to `/events/photo.jpg`; from `https://x.example/events` (no slash) it resolves to `/photo.jpg`. Servers that redirect folder addresses to the slashed form avoid this.",
        "**Scheme-relative** URLs such as `//cdn.example/x.js` reuse the current scheme. They date from the era of mixed HTTP and HTTPS; today, write `https://` explicitly.",
        "**Query and fragment.** `?a=1` is sent to the server; `#section` is not, it’s handled by the browser. So `notes#2.html` requests `notes`.",
        "**Percent-encoding.** Characters outside the URL-safe set are encoded as UTF-8 bytes: a space becomes `%20`, `é` becomes `%C3%A9`.",
        "**Backslashes.** For http and https URLs, the URL Standard treats `\\` like `/` (and flags it as a validation error), so many browsers tolerate it. Servers, validators and other tools may not; always write `/`.",
        "**`file://` URLs** have their own quirks: `/` means the root of the drive, and browsers block many requests between local files for security."
      ]}
     ]
    },
    related:["web-files-folders","url-anatomy","domains-urls","folders-paths"],
    read:[{book:"mdn", where:"How to solve common problems → Web mechanics → “What is a URL?”"}],
    sources:[{t:"MDN: What is a URL?", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL"},{t:"MDN: Dealing with files", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"}], checked:"2026-11"},

   {id:"web-standards", title:"Web standards", aka:["WHATWG","W3C","HTML Living Standard","ECMAScript","TC39","browser engines","Baseline","progressive enhancement"], tags:["web","making"],
    summary:"Open, royalty-free specifications written by bodies such as WHATWG, W3C and Ecma, so that every browser builds the same page from the same code.",
    levels:{
     starter:[
      "Your page will be opened in browsers made by different companies on different devices. It works because they all follow the same published rules, called **web standards**.",
      {list:["**HTML** is defined by the HTML Living Standard, kept by the WHATWG.","**CSS** is defined by specifications from the W3C’s CSS Working Group.","**JavaScript** is defined by the ECMAScript standard, from Ecma International’s TC39 committee.","**Accessibility guidelines** (WCAG) come from the W3C too."]},
      "Standards are open: anyone can read them, and anyone can build a browser or a website without paying a licence. That’s why a page written today can be read in any browser, and why pages from the 1990s still open.",
      {key:"Write to the standards, test in more than one browser."}
     ],
     builder:[
      "MDN’s *The web standards model* lists three principles:",
      {list:["**Open:** free to contribute to and use, not encumbered by patents or licensing.","**Accessible and interoperable:** browsers should give the same result for the same code, and people with disabilities must be able to use the web.","**Don’t break the web:** new features must be backwards compatible, so existing sites keep working."]},
      "**Browser engines.** Browsers share a handful of engines that turn code into pages: Blink (Chrome, Edge, Opera, Samsung Internet and others), Gecko (Firefox) and WebKit (Safari). MDN advises testing in browsers from at least two different engines. On iPhone and iPad, other browsers have historically had to use WebKit too.",
      "**Is a feature safe to use?** Check MDN’s browser compatibility table at the bottom of each reference page, or the **Baseline** label: a feature is “Newly available” when all the core browsers (Chrome, Edge, Firefox and Safari, on desktop and mobile) support it, and “Widely available” 30 months after that.",
      "**Validating** your HTML with the W3C’s free checker catches mistakes that browsers would otherwise repair silently, in ways that may differ from what you meant.",
      "**Progressive enhancement** follows from all this: give everyone a working core in HTML, then add CSS and JavaScript improvements for browsers that support them."
     ],
     pro:[
      "**Who maintains what:**",
      {table:[["Technology","Standard","Body"],["HTML and many web APIs","HTML Living Standard (continuously updated)","WHATWG"],["CSS","Many separate modules, each on its own timetable; a regular “CSS Snapshot” lists the stable ones","W3C CSS Working Group"],["JavaScript","ECMA-262 (ECMAScript), a new edition each year since 2015","Ecma TC39"],["HTTP","RFC 9110 and related RFCs","IETF"],["Accessibility","WCAG 2.2 (2023)","W3C WAI"]]},
      "A feature being written into a specification doesn’t mean you can use it yet: engines ship features at different times, and some drafts change or are dropped. That’s why compatibility data matters more day to day than the specifications themselves.",
      "There’s no “HTML6” or “CSS4”: HTML is a living standard, CSS evolves module by module, and ECMAScript names editions by year (ES2024, ES2025). Older labels such as “HTML5” and “CSS3” survive mainly as marketing terms.",
      "**Interoperability work.** Browser makers jointly run cross-browser test suites (web-platform-tests) and the yearly Interop project to fix the areas where engines disagree most. Baseline is defined by the W3C WebDX Community Group from the same compatibility data MDN uses.",
      "**Practical consequences for makers:** validate HTML (the W3C’s Nu Html Checker) to catch the mistakes browsers silently repair; prefer standard features over browser-specific prefixes; use feature detection rather than guessing the browser from its user-agent string; and don’t teach yourself from old tutorials that use `<font>`, `<center>` or table layouts, which modern standards have dropped or discourage."
     ]
    },
    related:["how-a-page-loads","view-source","browser-devtools"],
    read:[{book:"mdn", where:"Getting started modules → Web standards → “The web standards model”"}],
    sources:[{t:"MDN: The web standards model", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model"},{t:"web.dev: Baseline", url:"https://web.dev/baseline"},{t:"MDN: Installing basic software (browsers and engines)", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"}], checked:"2026-11"}
  ],
  terms:[
   {id:"browser", term:"Browser", def:"The app that requests web pages and builds them from their HTML, CSS, JavaScript and other files, such as Chrome, Edge, Firefox, Safari or Samsung Internet.", codex:"how-a-page-loads"},
   {id:"client", term:"Client", def:"The device and app that asks for something over a network. On the web it’s usually a browser; the computer that answers is the server.", codex:"client-server"},
   {id:"request", term:"Request", def:"A message from a client asking a server for one thing, such as GET /menu/. Every file of a page needs its own request.", codex:"client-server"},
   {id:"response", term:"Response", def:"A server’s reply to a request: a status code, headers with details such as the content type, and usually the file itself.", codex:"client-server"},
   {id:"http-status", term:"HTTP status code", def:"The three-digit result at the start of every response: 2xx success, 3xx redirect, 4xx a problem with the request (such as 404 Not Found), 5xx a server problem.", codex:"client-server"},
   {id:"mime-type", term:"Content type (MIME type)", def:"A label such as text/html, text/css or image/jpeg that a server sends with a file so the browser knows what kind of file it is. Hosts set it from the file extension.", codex:"web-files-folders"},
   {id:"rendering", term:"Rendering", def:"How a browser turns code into a visible page: building a tree from the HTML, matching CSS, working out layout and painting pixels.", codex:"how-a-page-loads"},
   {id:"file-url", term:"File URL", def:"An address starting file:/// that opens a file straight from your own drive, with no web server. Only you can open it.", codex:"file-paths-urls"},
   {id:"html", term:"HTML", def:"HyperText Markup Language: the language that gives a web page its content and structure, marking each part as a heading, paragraph, link, image and so on.", codex:"web-standards"},
   {id:"css", term:"CSS", def:"Cascading Style Sheets: the language of rules that decide how HTML content looks, such as colours, fonts, spacing and layout.", codex:"web-standards"},
   {id:"javascript", term:"JavaScript", def:"The programming language that runs in browsers and gives pages behaviour: reacting to clicks, changing content, checking input. Unrelated to Java.", codex:"web-standards"},
   {id:"progressive-enhancement", term:"Progressive enhancement", def:"Building a working basic page in HTML first, then adding CSS and JavaScript improvements on top for browsers that can use them.", codex:"web-standards"},
   {id:"web-standard", term:"Web standard", def:"An open, published specification that browsers follow, such as the HTML Living Standard (WHATWG), CSS specifications (W3C) and ECMAScript (Ecma TC39).", codex:"web-standards"},
   {id:"browser-engine", term:"Browser engine", def:"The part of a browser that turns code into pages. The main ones are Blink (Chrome, Edge and others), Gecko (Firefox) and WebKit (Safari).", codex:"web-standards"},
   {id:"index-html", term:"index.html", def:"The file name a web server sends when an address ends in a folder, so it’s used for every site’s home page and for tidy folder addresses.", codex:"web-files-folders"},
   {id:"file-path", term:"File path (in a web page)", def:"Directions in your code from the current file to another one, such as images/logo.png or ../index.html.", codex:"file-paths-urls"},
   {id:"relative-path", term:"Relative path", def:"A path that starts from the folder of the file it’s written in, such as photo.jpg, images/logo.png or ../index.html. Best for your own site’s files.", codex:"file-paths-urls"},
   {id:"root-relative-path", term:"Root-relative path", def:"A path that starts with /, meaning the top of the domain, such as /images/logo.png. It breaks for pages opened from your drive and for sites in a sub-folder.", codex:"file-paths-urls"},
   {id:"absolute-url", term:"Absolute URL", def:"A complete address including the scheme, such as https://example.org/seeds. Needed for links to other websites.", codex:"file-paths-urls"},
   {id:"plain-text", term:"Plain text", def:"A file that holds only characters, with no fonts or formatting stored in it. HTML, CSS and JavaScript files are plain text.", codex:"text-editors"},
   {id:"smart-quote", term:"Smart quotes", def:"Curly quotation marks (“ ” ‘ ’) that word processors and some keyboards put in place of straight ones (\" '). They look nicer in prose but break code.", codex:"text-editors"},
   {id:"text-editor", term:"Text editor", def:"An app that edits plain text and saves exactly the characters you type, such as Notepad, or TextEdit in plain-text mode.", codex:"text-editors"},
   {id:"code-editor", term:"Code editor", def:"A text editor built for code, adding colours, completion, error hints and a project view. Visual Studio Code is a free, widely used example.", codex:"text-editors"},
   {id:"syntax-highlighting", term:"Syntax highlighting", def:"Showing different parts of code, such as tags, properties and text, in different colours so the structure and mistakes are easier to see.", codex:"text-editors"},
   {id:"source-code", term:"Source code", def:"The human-readable code that a program or web page is made from. For a web page, it’s the HTML, CSS and JavaScript the browser receives.", codex:"view-source"},
   {id:"view-source", term:"View source", def:"A browser feature that shows a page’s HTML exactly as the server sent it, before JavaScript changes it.", codex:"view-source"},
   {id:"devtools", term:"Developer tools (DevTools)", def:"Panels built into desktop browsers for inspecting and temporarily changing a page’s HTML and CSS, reading errors, running JavaScript and watching network requests.", codex:"browser-devtools"},
   {id:"inspector", term:"Inspector", def:"The DevTools panel that shows a page’s live HTML as a tree and the CSS applied to each part. Called Elements in Chrome, Edge and Safari.", codex:"browser-devtools"},
   {id:"console", term:"Console", def:"The DevTools panel that shows errors and messages from a page, and where you can type JavaScript to run on it.", codex:"browser-devtools"},
   {id:"network-panel", term:"Network panel", def:"The DevTools panel that lists every file a page requests, with its status code, type, size and timing.", codex:"browser-devtools"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u1-q01", lesson:"t2u1-l1", level:1, q:"What does a web server usually send first when a browser asks for a page?", options:[
     {t:"The page’s HTML file", ok:true, why:"The HTML comes first; reading it tells the browser which other files to fetch."},
     {t:"A finished image of the page", why:"Servers send code and files, not pictures of pages. The browser builds the page."},
     {t:"All of the site’s files at once", why:"The browser asks for each file separately, only the ones this page needs."},
     {t:"The site’s style sheet", why:"The browser doesn’t know which style sheet to fetch until it has read the HTML that names it."}
   ]},
   {id:"t2u1-q02", lesson:"t2u1-l1", level:2, q:"A page’s HTML names one CSS file, one JavaScript file and three images. Nothing is cached. How many requests does the browser make, at minimum?", options:[
     {t:"6", ok:true, why:"1 for the HTML, then 1 + 1 + 3 for the files it names."},
     {t:"5", why:"That forgets the request for the HTML page itself."},
     {t:"1", why:"Each file is fetched separately; one request brings only the HTML."},
     {t:"3", why:"Images are only part of it: the CSS, the JavaScript and the HTML each need a request too."}
   ]},
   {id:"t2u1-q03", lesson:"t2u1-l1", level:1, q:"Which status code means “there’s no file at that address”?", options:[
     {t:"404", ok:true, why:"404 Not Found: the server looked and found nothing at that path."},
     {t:"200", why:"200 OK means success: the file was found and sent."},
     {t:"304", why:"304 Not Modified means the browser’s cached copy is still current."},
     {t:"500", why:"500 is a server error: something broke on the server, not a missing file."}
   ]},
   {id:"t2u1-q04", lesson:"t2u1-l1", level:1, q:"What does the `Content-Type` header in a response do?", options:[
     {t:"Tells the browser what kind of file it’s receiving, such as text/html or image/png", ok:true, why:"The browser uses this label to decide how to handle the file. Hosts usually set it from the extension."},
     {t:"Lists the words that appear on the page", why:"Headers describe the response; the content itself is in the body."},
     {t:"Sets the page’s font", why:"Fonts are set in CSS, not in response headers."},
     {t:"Tells the server which browser is asking", why:"That information travels in the request, not the response."}
   ]},
   {id:"t2u1-q05", lesson:"t2u1-l1", level:2, q:"Which file does a simple web server send for `https://garden.example/events/`?", options:[
     {t:"events/index.html", ok:true, why:"An address ending in a folder makes most servers send that folder’s index.html."},
     {t:"events.html at the top of the site", why:"That file would be at /events.html. The slash at the end points into the events folder."},
     {t:"The site’s home page", why:"The home page is the top-level index.html; /events/ asks for the one inside events."},
     {t:"Every file in the events folder", why:"A request returns one file; the server picks index.html as the default."}
   ]},
   {id:"t2u1-q06", lesson:"t2u1-l1", level:3, q:"Mei opens her page by double-clicking index.html. The address bar shows `file:///Users/mei/site/index.html`. She sends this address to a friend. What happens when the friend opens it?", options:[
     {t:"It doesn’t work: a file URL points to Mei’s own computer", ok:true, why:"file:/// addresses read straight from the local drive. The friend’s browser looks on the friend’s device and finds nothing. Mei needs to publish the site to share it."},
     {t:"The friend sees the page, because it’s a valid address", why:"It’s a valid address only on Mei’s computer. No server is involved."},
     {t:"The friend sees it after Mei’s computer uploads it automatically", why:"Nothing is uploaded; a file URL never involves a server."},
     {t:"It works if they use the same browser", why:"The browser doesn’t matter; the file isn’t on the friend’s device."}
   ]},
   {id:"t2u1-q07", lesson:"t2u1-l1", level:2, q:"Put simply, what’s the order of the browser’s main rendering steps after the files arrive?", options:[
     {t:"Build the tree from HTML, match CSS, lay out, paint", ok:true, why:"Structure first, then styles, then sizes and positions, then pixels. JavaScript can change things afterwards, repeating the affected steps."},
     {t:"Paint, lay out, match CSS, build the tree", why:"That’s backwards: the browser can’t paint what it hasn’t laid out, or lay out what it hasn’t built."},
     {t:"Run JavaScript, then download the HTML", why:"The HTML comes first; it’s what names the JavaScript."},
     {t:"Match CSS, then download the HTML", why:"The browser can’t know which CSS to use until it has read the HTML."}
   ]},
   {id:"t2u1-q08", lesson:"t2u1-l1", level:3, q:"Kenji’s page lays out in two columns on his laptop and one on his phone. His friend says the server must be sending different pages. What’s the better explanation?", options:[
     {t:"The same files arrive at both; each browser lays them out for its own screen", ok:true, why:"Layout happens in the browser, using the screen width, so one set of HTML and CSS can adapt."},
     {t:"The phone is showing a cached copy from yesterday", why:"A cached copy would lay out the same way on the same screen. The width explains it."},
     {t:"Phones can’t show columns", why:"They can; the CSS chose one column for a narrow screen."},
     {t:"The phone downloaded a different style sheet automatically", why:"The browser fetches the style sheet the HTML names, the same one on both devices."}
   ]},
   {id:"t2u1-q09", lesson:"t2u1-l1", level:3, q:"Priya sees `304` next to her logo in her browser’s tools after reloading. What should she do?", options:[
     {t:"Nothing: the browser confirmed its cached copy is current and reused it", ok:true, why:"304 Not Modified is normal caching, not an error."},
     {t:"Re-upload the logo, because it’s broken", why:"A broken logo would show 404. 304 means the server confirmed the saved copy is still good."},
     {t:"Rename the logo file", why:"Nothing is wrong with the name; the file was found."},
     {t:"Contact her host about a server failure", why:"Server failures are 5xx codes. 304 is part of normal operation."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u1-q10", lesson:"t2u1-l2", level:1, q:"Which language gives a web page its content and structure?", options:[
     {t:"HTML", ok:true, why:"HTML marks up content: this is a heading, this is a paragraph, this is a link."},
     {t:"CSS", why:"CSS describes how content looks, not what it is."},
     {t:"JavaScript", why:"JavaScript adds behaviour; the content and structure come from HTML."},
     {t:"Java", why:"Java is a different programming language that browsers don’t use for pages."}
   ]},
   {id:"t2u1-q11", lesson:"t2u1-l2", level:2, q:"Lucía wants her café’s prices shown in bold red. Which language should she change?", options:[
     {t:"CSS", ok:true, why:"Colour and weight are presentation, which CSS controls."},
     {t:"HTML", why:"HTML says what the content is (a price in a list, say); how it looks belongs in CSS."},
     {t:"JavaScript", why:"JavaScript could do it, but appearance belongs in CSS; it’s simpler and still works when scripts fail."},
     {t:"The server’s settings", why:"Appearance is decided by the page’s CSS in the browser, not by the server."}
   ]},
   {id:"t2u1-q12", lesson:"t2u1-l2", level:1, q:"In the CSS rule `h1 { color: teal; }`, what is `h1`?", options:[
     {t:"The selector: it says which elements the rule applies to", ok:true, why:"Selectors pick the parts of the page; declarations in the braces say what to do to them."},
     {t:"A property", why:"The property is `color`; `h1` picks the elements."},
     {t:"A value", why:"The value is `teal`."},
     {t:"A JavaScript variable", why:"This is CSS; `h1` targets every main heading."}
   ]},
   {id:"t2u1-q13", lesson:"t2u1-l2", level:1, q:"What does `defer` do in `<script src=\"script.js\" defer><\/script>`?", options:[
     {t:"Runs the script only after the browser has read all of the HTML", ok:true, why:"The script downloads straight away but waits to run, so it can find every element on the page."},
     {t:"Stops the script from running at all", why:"Deferred scripts do run, just later."},
     {t:"Makes the script run before the HTML is read", why:"That’s the opposite: a plain script in the head runs before the body is read; defer delays it."},
     {t:"Hides the script’s code from visitors", why:"Nothing hides code that runs in a browser; defer only changes timing."}
   ]},
   {id:"t2u1-q14", lesson:"t2u1-l2", level:3, q:"Ana’s page loads, but its style sheet has a typo in its address, so it 404s. What do visitors see?", options:[
     {t:"All the content, in the browser’s plain default styles", ok:true, why:"Without CSS, the HTML still shows: default fonts, big bold headings, blue underlined links."},
     {t:"A blank page", why:"The content is in the HTML, which loaded. Only the styling is missing."},
     {t:"An error message instead of the page", why:"Browsers don’t replace a page with an error because a style sheet is missing."},
     {t:"The page with styles but no JavaScript", why:"The CSS is what failed, so the styles are what’s missing."}
   ]},
   {id:"t2u1-q15", lesson:"t2u1-l2", level:2, q:"What happens when a CSS declaration contains a value the browser doesn’t understand?", options:[
     {t:"The browser ignores that declaration and carries on with the rest", ok:true, why:"CSS skips what it can’t read, which is why a typo silently fails to apply."},
     {t:"The whole style sheet stops working", why:"Only the bad declaration (and anything swallowed into it, such as after a missing semicolon) is skipped."},
     {t:"The page shows an error message", why:"CSS mistakes never show messages to visitors."},
     {t:"The browser guesses the nearest valid value", why:"Browsers repair broken HTML, but invalid CSS values are dropped, not guessed."}
   ]},
   {id:"t2u1-q16", lesson:"t2u1-l2", level:3, q:"Tomás forgets the closing `</h1>` after his heading. What does the browser do?", options:[
     {t:"Shows the page anyway, guessing where the heading ends, often by putting the following content inside it", ok:true, why:"HTML never stops on errors. The browser follows repair rules, and here the following paragraphs end up inside the heading, so they turn big and bold."},
     {t:"Refuses to show the page", why:"Browsers always show HTML pages, repairing mistakes as they go."},
     {t:"Shows an error in place of the heading", why:"HTML mistakes don’t produce visible errors; you see odd results instead."},
     {t:"Removes the heading entirely", why:"The heading stays; the problem is where it ends."}
   ]},
   {id:"t2u1-q17", lesson:"t2u1-l2", level:3, q:"Fatima’s script has a missing quote on line 12 of 30. Her button does nothing, even though the code for it is on line 3. Why?", options:[
     {t:"A syntax error stops the whole script from running, including line 3", ok:true, why:"The browser must be able to read the whole script before running any of it. Fix line 12 and line 3 will work."},
     {t:"Only lines after 12 are skipped, so line 3 must have its own bug", why:"That’s how an error while running behaves. A syntax error stops the whole file before it starts."},
     {t:"Buttons need the code on the last line", why:"Position in the file doesn’t matter; the syntax error does."},
     {t:"The browser repaired the quote, but in the wrong place", why:"Browsers don’t repair JavaScript; they report a syntax error."}
   ]},
   {id:"t2u1-q18", lesson:"t2u1-l2", level:2, q:"Why should a café put its opening hours in the HTML rather than adding them only with JavaScript?", options:[
     {t:"Content in the HTML still reaches visitors if a script fails or is blocked", ok:true, why:"That’s progressive enhancement: the essential content works for everyone; scripts add extras."},
     {t:"JavaScript can’t show text", why:"It can; the point is reliability, not ability."},
     {t:"HTML loads more slowly, so it should hold less", why:"HTML arrives first. Putting essentials there makes them appear sooner, not later."},
     {t:"Search engines refuse to read JavaScript sites", why:"Many can run JavaScript; HTML is still the most reliable home for content."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u1-q19", lesson:"t2u1-l3", level:1, q:"Which file name is safest for a web page?", options:[
     {t:"spring-fair.html", ok:true, why:"Lowercase, words joined by a hyphen, and the right extension."},
     {t:"Spring Fair.html", why:"A space becomes %20 in addresses, and the capitals must then be matched exactly."},
     {t:"spring fair final (2).html", why:"Spaces and brackets cause trouble in addresses; versions belong in version history."},
     {t:"spring-fair", why:"Without an extension, a host may not send it as HTML."}
   ]},
   {id:"t2u1-q20", lesson:"t2u1-l3", level:1, q:"In a path, what does `../` mean?", options:[
     {t:"Go up one folder from the folder this file is in", ok:true, why:"Two dots mean the parent folder."},
     {t:"Go to the home page", why:"It goes up one folder, whatever is there; that’s only the home folder if you were one level down."},
     {t:"Go to the top of the domain", why:"That’s what a leading `/` does."},
     {t:"Stay in the same folder", why:"That’s `./`, or just the file name on its own."}
   ]},
   {id:"t2u1-q21", lesson:"t2u1-l3", level:2, q:"`about/team.html` needs to show `images/group.jpg`, where both `about` and `images` are at the top of the site. Which `src` works?", options:[
     {t:"../images/group.jpg", ok:true, why:"Up one folder from about/ to the top, then into images."},
     {t:"images/group.jpg", why:"That looks for about/images/group.jpg, which doesn’t exist."},
     {t:"group.jpg", why:"That looks for about/group.jpg."},
     {t:"C:/site/images/group.jpg", why:"A path on your own drive fails for every visitor."}
   ]},
   {id:"t2u1-q22", lesson:"t2u1-l3", level:3, q:"Sione’s logo shows on his Windows laptop but is broken online. His HTML says `images/Logo.png`; the file is `images/logo.png`. What’s the cause?", options:[
     {t:"His laptop ignores letter case in names, but the web server doesn’t", ok:true, why:"Windows and macOS are usually case-insensitive; most web servers aren’t, so Logo.png and logo.png are different files online."},
     {t:"The server doesn’t support PNG images", why:"PNG works everywhere. The name doesn’t match."},
     {t:"The image is too big", why:"A large image would load slowly, not give a 404."},
     {t:"Windows changed the file while uploading", why:"The file is fine; the reference in the HTML has a capital L."}
   ]},
   {id:"t2u1-q23", lesson:"t2u1-l3", level:2, q:"Which link correctly points to another website?", options:[
     {t:"href=\"https://example.org/seeds\"", ok:true, why:"Other sites need a complete, absolute URL including https://."},
     {t:"href=\"example.org/seeds\"", why:"Without the scheme, the browser treats it as a relative path: a folder called example.org in your own site."},
     {t:"href=\"/example.org/seeds\"", why:"A leading slash means the top of your own domain, so this stays on your site."},
     {t:"href=\"../example.org/seeds\"", why:"That’s a relative path inside your own site."}
   ]},
   {id:"t2u1-q24", lesson:"t2u1-l3", level:3, q:"Ana’s site will be published at `ana.github.io/portfolio/`. Her pages use `/images/me.jpg`. What will happen?", options:[
     {t:"The images break, because / points to ana.github.io/images/, outside her project", ok:true, why:"Root-relative paths start at the top of the domain. Relative paths such as images/me.jpg work wherever the folder lives."},
     {t:"They work, because / always means the top of the project", why:"/ means the top of the domain, not of the project folder."},
     {t:"They work online but not on her computer", why:"On her computer they break (/ is the top of the drive), and online they point outside her project too."},
     {t:"GitHub fixes the paths automatically", why:"Hosts serve files at the addresses requested; they don’t rewrite your paths."}
   ]},
   {id:"t2u1-q25", lesson:"t2u1-l3", level:2, q:"Why is `notes#2.html` a bad file name?", options:[
     {t:"In a URL, # starts a fragment, so the browser requests `notes` and never the real file", ok:true, why:"Everything after # is treated as a place within a page and isn’t sent to the server."},
     {t:"Numbers aren’t allowed in file names", why:"Digits are fine; the # is the problem."},
     {t:"It’s too short", why:"Length isn’t the issue; the special character is."},
     {t:"It has no extension", why:"It ends in .html, but the # cuts the address off before it."}
   ]},
   {id:"t2u1-q26", lesson:"t2u1-l3", level:1, q:"Why is the home page of a site always called `index.html`?", options:[
     {t:"Servers send index.html when an address ends in a folder, such as the bare domain", ok:true, why:"It’s the default file name servers look for, so the top-level index.html is what visitors to the domain get."},
     {t:"Browsers can only open files called index.html", why:"Browsers open any HTML file; index.html matters to servers."},
     {t:"It loads faster than other names", why:"The name doesn’t affect speed."},
     {t:"Search engines require it", why:"It’s a server convention, not a search-engine rule."}
   ]},
   {id:"t2u1-q27", lesson:"t2u1-l3", level:3, q:"Kenji’s page has `<img src=\"C:\\Users\\kenji\\Pictures\\cat.jpg\" alt=\"Our cat\">`. It works for him. What should he do before publishing?", options:[
     {t:"Copy the photo into the project’s images folder and use src=\"images/cat.jpg\"", ok:true, why:"A path to his own drive works only on his computer. Inside the project with a relative path, it travels with the site."},
     {t:"Nothing, since it works", why:"It works only because the file is on his computer; visitors’ browsers look on their own devices."},
     {t:"Change the backslashes to forward slashes", why:"The slashes aren’t the main problem: the path still points to his own drive."},
     {t:"Add file:/// in front", why:"A file URL still points to his own computer."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u1-q28", lesson:"t2u1-l4", level:1, q:"Why is a word processor the wrong tool for writing HTML?", options:[
     {t:"It adds formatting and changes characters, such as straight quotes into curly ones", ok:true, why:"Code must be saved as exactly the characters you type; word processors are designed to change and decorate them."},
     {t:"It can’t type angle brackets", why:"It can type them; the trouble is what else it changes and how it saves."},
     {t:"It’s too slow", why:"Speed isn’t the issue; the file it saves is."},
     {t:"HTML must be written in capital letters", why:"HTML is usually written in lowercase, and any editor can type either."}
   ]},
   {id:"t2u1-q29", lesson:"t2u1-l4", level:1, q:"What does “plain text” mean?", options:[
     {t:"A file that holds only characters, with no fonts or formatting stored in it", ok:true, why:"That’s exactly what HTML, CSS and JavaScript files are."},
     {t:"Text without any punctuation", why:"Plain text can include any characters; it just stores no formatting."},
     {t:"Text in a simple font such as Arial", why:"A plain-text file stores no font at all; the app showing it chooses one."},
     {t:"A file that only contains English", why:"Plain text in UTF-8 can hold every writing system."}
   ]},
   {id:"t2u1-q30", lesson:"t2u1-l4", level:3, q:"Mei pastes a line of JavaScript from a shared document into her editor: `console.log(“Hi”);`. It fails with “Invalid or unexpected token”. What’s wrong?", options:[
     {t:"The quotes are curly smart quotes, which JavaScript doesn’t accept", ok:true, why:"JavaScript strings need straight quotes. Retype them in the code editor."},
     {t:"console.log can’t print short words", why:"It prints anything; the characters around the word are the problem."},
     {t:"The line needs to be in capitals", why:"JavaScript is case-sensitive and `console.log` must be lowercase."},
     {t:"Her browser is out of date", why:"No browser accepts curly quotes as string delimiters."}
   ]},
   {id:"t2u1-q31", lesson:"t2u1-l4", level:2, q:"What does syntax highlighting do?", options:[
     {t:"Shows different parts of code in different colours, making mistakes easier to spot", ok:true, why:"Tags, properties, strings and numbers get their own colours, so an unclosed quote shows up as a run of the wrong colour."},
     {t:"Fixes errors automatically", why:"It points at structure; it doesn’t change your code."},
     {t:"Makes the website colourful", why:"The colours are only in the editor, not on the page."},
     {t:"Translates code into another language", why:"It only colours code."}
   ]},
   {id:"t2u1-q32", lesson:"t2u1-l4", level:2, q:"Which statement about vscode.dev is accurate?", options:[
     {t:"It runs VS Code in a browser with no installation, though some features, like the terminal, are missing", ok:true, why:"Microsoft describes it as a zero-install VS Code in the browser for lightweight editing, without a terminal or debugger."},
     {t:"It only works on Windows", why:"It runs in current Chrome, Edge, Firefox and Safari, including on Chromebooks and tablets."},
     {t:"It’s a paid service", why:"It’s free to use; no payment or subscription is needed."},
     {t:"It can open local folders in every browser", why:"Opening folders needs the File System Access API, which Chrome and Edge support; other browsers can open single files."}
   ]},
   {id:"t2u1-q33", lesson:"t2u1-l4", level:3, q:"Oluwaseun’s file shows as `index.html` in File Explorer, but File Explorer’s Type column says “Text Document”, and the browser shows his code as text. What’s the likely problem and fix?", options:[
     {t:"It’s really index.html.txt with the .txt hidden; show extensions and rename it", ok:true, why:"Windows hides known extensions by default. Turn on View → Show → File name extensions, rename the file to index.html, and in Notepad choose Save as type: All files in future."},
     {t:"Notepad can’t save HTML; he must buy a code editor", why:"Notepad saves plain text, which is what HTML is. The extension is the issue."},
     {t:"His HTML needs a closing tag", why:"A missing tag wouldn’t make the browser show all the code as text; a .txt extension would."},
     {t:"He must upload the file before it works", why:"Local HTML files open fine when they have the right extension."}
   ]},
   {id:"t2u1-q34", lesson:"t2u1-l4", level:2, q:"Where do you turn off Smart Punctuation on an iPhone?", options:[
     {t:"Settings → General → Keyboard → Smart Punctuation", ok:true, why:"That keyboard setting controls curly quotes and dashes in every app."},
     {t:"Settings → Safari → Advanced", why:"That’s where developer features live, not keyboard behaviour."},
     {t:"In each app’s Share menu", why:"Smart Punctuation is a system keyboard setting."},
     {t:"It can’t be turned off", why:"It can, in the Keyboard settings."}
   ]},
   {id:"t2u1-q35", lesson:"t2u1-l4", level:3, q:"Priya wants to try an online code playground to share a demo. Which habit is most important?", options:[
     {t:"Never paste passwords, keys or private data, because saved work may be public", ok:true, why:"Some playgrounds make saved work public by default. Treat anything you paste as potentially visible."},
     {t:"Always use the playground’s AI to write the code", why:"Writing it yourself is how you learn; AI suggestions need checking either way."},
     {t:"Turn off HTTPS so the editor runs faster", why:"HTTPS protects your connection; never turn it off."},
     {t:"Only use playgrounds on a phone", why:"Playgrounds work on any device; the device isn’t the risk."}
   ]},
   {id:"t2u1-q45", lesson:"t2u1-l4", level:3, q:"Tomás copies the line `color: teal;` from a PDF into his CSS. It looks perfect, but the colour doesn’t apply. When he retypes the line by hand, it works. What was most likely in the copied text?", options:[
     {t:"An invisible character, such as a non-breaking space, that looks like an ordinary space", ok:true, why:"Text copied from PDFs, documents and chat apps can carry characters that look like spaces but aren’t. CSS doesn’t treat a non-breaking space as a space, so the value is invalid and the declaration is skipped. Retyping replaces it."},
     {t:"The PDF’s font, which CSS can’t read", why:"Pasting into a code editor keeps only characters, never fonts. The trouble is a character that looks normal but isn’t."},
     {t:"Too many ordinary spaces between the words", why:"CSS ignores extra ordinary spaces and line breaks, so they couldn’t stop the rule working."},
     {t:"A lock from the PDF that makes the text read-only", why:"Once pasted, the text is ordinary characters in his file; nothing from the PDF locks it."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u1-q36", lesson:"t2u1-l5", level:1, q:"What does view source show?", options:[
     {t:"The HTML file as the server sent it", ok:true, why:"It’s the original file, before JavaScript or the browser’s repairs change the page."},
     {t:"The website’s server programs and database", why:"Those never leave the server; the browser receives only HTML, CSS, JavaScript and assets."},
     {t:"The live page after JavaScript has changed it", why:"That’s the Inspector."},
     {t:"The site’s passwords", why:"Passwords stay on the server; they’re never part of a page’s code."}
   ]},
   {id:"t2u1-q37", lesson:"t2u1-l5", level:2, q:"Which keyboard shortcut opens developer tools in Chrome, Edge or Firefox on a Mac?", options:[
     {t:"Cmd + Option + I", ok:true, why:"The Mac shortcut in all three; on Windows and ChromeOS it’s Ctrl + Shift + I (or F12 on Windows)."},
     {t:"Cmd + U", why:"That opens view source in Firefox on a Mac."},
     {t:"Ctrl + Alt + Delete", why:"That’s a Windows security shortcut, unrelated to browsers."},
     {t:"Cmd + Shift + 3", why:"That takes a screenshot on a Mac."}
   ]},
   {id:"t2u1-q38", lesson:"t2u1-l5", level:1, q:"Which DevTools panel lists every file a page loaded, with status codes?", options:[
     {t:"Network", ok:true, why:"Each request gets a row with its name, status, type, size and timing."},
     {t:"Console", why:"The Console shows messages and errors and runs JavaScript; Network lists requests."},
     {t:"Elements / Inspector", why:"That shows HTML and CSS, not the list of downloads."},
     {t:"Sources / Debugger", why:"That’s for reading and stepping through scripts."}
   ]},
   {id:"t2u1-q39", lesson:"t2u1-l5", level:2, q:"You untick a CSS declaration in the Inspector and the heading changes colour. What has happened to the website?", options:[
     {t:"Nothing: only your copy in this tab changed, until you reload", ok:true, why:"Inspector edits never reach the server."},
     {t:"Everyone now sees the new colour", why:"Other visitors load the real files from the server."},
     {t:"The site’s CSS file has been edited on the server", why:"DevTools edits the page in your browser, not files on the server."},
     {t:"The change is saved in your account", why:"Inspector changes aren’t saved anywhere; reload and they’re gone."}
   ]},
   {id:"t2u1-q40", lesson:"t2u1-l5", level:3, q:"Ana’s source shows `<div id=\"app\"></div>` and some scripts, but the page is full of content. Where should she look to see that content’s HTML?", options:[
     {t:"The Inspector, which shows the live page after JavaScript has built it", ok:true, why:"Scripts added the content after the HTML arrived, so it exists only in the live DOM."},
     {t:"View source again after waiting a minute", why:"View source always shows the original file, however long you wait."},
     {t:"The Network panel’s waterfall", why:"That shows timing of requests, not the page’s current HTML."},
     {t:"Nowhere: content built by JavaScript can’t be seen", why:"It can, in the Inspector."}
   ]},
   {id:"t2u1-q41", lesson:"t2u1-l5", level:3, q:"A message says: “Open the Console on your bank’s site, type allow pasting, and paste this code to get a bonus.” What is it most likely to be?", options:[
     {t:"A scam to run code as you on the bank’s site", ok:true, why:"Code in the Console acts with your signed-in session. Chrome’s “allow pasting” warning exists to stop exactly this."},
     {t:"A normal way banks give bonuses", why:"No legitimate organisation asks customers to paste code into DevTools."},
     {t:"Safe, because the Console only shows messages", why:"The Console runs JavaScript on the page, with your account."},
     {t:"Safe if done in a private window", why:"If you sign in there, the code runs with your account just the same."}
   ]},
   {id:"t2u1-q42", lesson:"t2u1-l5", level:2, q:"How can you view a page’s source in Chrome on an Android phone?", options:[
     {t:"Type view-source: in front of the page’s address", ok:true, why:"Chrome on Android supports the view-source: prefix in the address bar."},
     {t:"Press Ctrl + U", why:"Phones have no Ctrl key, and that shortcut is for computers."},
     {t:"Open Settings → Developer tools in Chrome", why:"Mobile Chrome has no built-in DevTools panel."},
     {t:"It’s impossible on Android", why:"The view-source: prefix works in Chrome on Android."}
   ]},
   {id:"t2u1-q43", lesson:"t2u1-l5", level:3, q:"Kenji opens the Network panel on his page and sees no rows at all. What should he do?", options:[
     {t:"Reload the page with the panel open; it only records while open", ok:true, why:"Requests made before the panel was opened aren’t listed."},
     {t:"Conclude that his page loaded no files", why:"It must have loaded at least its HTML; the panel just wasn’t recording."},
     {t:"Reinstall the browser", why:"Nothing is broken; the panel needs a reload."},
     {t:"Switch to the Console to see the files", why:"The Console shows messages; the list of files is in Network, after a reload."}
   ]},
   {id:"t2u1-q44", lesson:"t2u1-l5", level:2, q:"Sione has only an iPhone. Which is the best way for him to practise reading errors in his own HTML, CSS and JavaScript today?", options:[
     {t:"Use the Web Lab, which shows a live preview and explains errors with line numbers", ok:true, why:"Safari on iPhone has no DevTools or view source on the device; the Web Lab gives him a preview and error messages."},
     {t:"Open Safari’s Console on the iPhone", why:"Safari on iPhone has no built-in Console; Web Inspector needs a connected Mac."},
     {t:"Use view-source: in Safari", why:"Safari on iPhone doesn’t support view source."},
     {t:"Wait until he buys a computer", why:"He can learn and practise now in the Web Lab."}
   ]}
  ]
});
