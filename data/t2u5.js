/* Track 2 · Unit 5 · Publishing your website */
ICA.addUnit({
  id:"t2u5", track:"t2", n:5, title:"Publishing your website", icon:"🚀",
  blurb:"Put your pages on the real web: what hosting is, how to publish free with GitHub Pages using only a browser (even on a phone), how to connect your own domain name safely, how to make a site fast, findable and accessible, and how to look after it once it’s live.",
  goals:[
    "Explain what hosting and deploying mean, tell static sites from dynamic ones, and choose a host by its real limits and costs",
    "Publish a site with GitHub Pages through the GitHub website, update it, and fix the common causes of 404s and missing styles",
    "Connect a domain name with the right DNS records, verify it against takeovers, and turn on HTTPS",
    "Make pages load fast, show good titles, descriptions and link previews, and pass a first accessibility check",
    "Keep a live site healthy: check links, keep backups, handle privacy and contact forms carefully, keep secrets out, and calmly fix it when it breaks"
  ],
  read:[
    {book:"mdn", where:"Getting started → Your first website → “Publishing your website”", note:"MDN’s overview of hosting options and costs, and its recommended route: GitHub Pages through the web interface."},
    {book:"ghdocs", where:"GitHub Pages → “What is GitHub Pages?”, “Creating a GitHub Pages site” and “GitHub Pages limits”", note:"The official articles. Lessons 2 and 3 name the exact troubleshooting and custom-domain articles."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u5-l1", title:"Where websites live", minutes:45,
   hook:{q:"Which of these could you host for free on GitHub Pages?", options:["A portfolio made of HTML, CSS and JavaScript files","An online shop that takes card payments","A blog that runs on PHP and a database","All three, as long as the repository is public"], answer:0,
     reveal:"Only the portfolio. GitHub Pages hosts **static** sites: ready-made files sent as they are. It doesn’t run server languages such as PHP, and its rules say it isn’t for online businesses or e-commerce. This lesson explains what static and dynamic mean, what hosting is, and how to choose a host."},
   goals:[
     "Explain hosting, servers and deploying with an everyday analogy and in precise terms",
     "Tell a static site from a dynamic one, and say what a static site can and can’t do",
     "Compare the free plans of GitHub Pages, Netlify and Cloudflare Pages by their real limits",
     "Estimate the real costs of a site, including domain renewals, and choose a host for a given project"
   ],
   learn:[
    {h:"From your device to everyone’s", body:[
      {lead:"A page on your own device is like a poster in your drawer. To let anyone see it, you need a wall in a public place that never closes."},
      "So far your pages have lived in the Web Lab or in files on your device. Only you can open them. For a page to have a web address that works for anyone, anywhere, at any time, its files have to sit on a [[web-server|web server]]: a computer that is always on, always connected, and ready to answer browsers’ requests.",
      "Very few people run their own server. Instead they use [[hosting]]: a company keeps servers in [[data-center|data centres]], with backup power and fast connections, and stores your files on them. You rent space (or get it free), and the host answers every visitor for you.",
      "When someone opens your address, the steps are the ones you met in Digital Foundations ({{how-the-web-works}}): the browser looks up the name with [[dns|DNS]], connects to the host’s server, asks for a file such as `index.html`, and gets it back. Then it asks for the style sheet, the images and the scripts the page mentions.",
      {key:"Hosting means renting space on an always-on computer that answers visitors for you. Publishing means putting your files there."}
    ]},
    {h:"Static and dynamic sites", body:[
      "Hosts fall into two big groups, because websites do too.",
      "A [[static-site|static site]] is, in MDN’s words, one that “returns the same hardcoded content from the server whenever a particular resource is requested”. The files are ready-made: the host just sends them. A [[dynamic-site|dynamic site]] “can generate and return content based on the specific request URL and data”: a program on the server builds each page, often from a database.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="u25a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="4" y="4" width="332" height="160" rx="8" stroke-width="1.5"/><text x="18" y="27">Static site</text><rect class="d-lup" x="18" y="40" width="100" height="44" rx="6" stroke-width="2"/><text x="68" y="67" text-anchor="middle">Browser</text><rect class="d-sage" x="222" y="40" width="100" height="44" rx="6" stroke-width="2"/><text x="272" y="67" text-anchor="middle">Host</text><path class="d-ink" d="M120 54L218 54" stroke-width="2" marker-end="url(#u25a1)"/><text class="s" x="170" y="49" text-anchor="middle">request</text><path class="d-ink" d="M220 72L124 72" stroke-width="2" marker-end="url(#u25a1)"/><text class="s" x="170" y="88" text-anchor="middle">same file</text><text class="s" x="272" y="108" text-anchor="middle">index.html</text><text class="s" x="272" y="124" text-anchor="middle">style.css</text><text class="s" x="272" y="140" text-anchor="middle">photo.jpg</text><text class="s" x="18" y="112">Every visitor gets the</text><text class="s" x="18" y="128">same ready-made files.</text><text class="s" x="18" y="144">JavaScript runs in the</text><text class="s" x="18" y="158">visitor’s browser.</text><rect class="d-panel" x="4" y="176" width="332" height="178" rx="8" stroke-width="1.5"/><text x="18" y="199">Dynamic site</text><rect class="d-lup" x="18" y="212" width="100" height="44" rx="6" stroke-width="2"/><text x="68" y="239" text-anchor="middle">Browser</text><rect class="d-rose" x="222" y="212" width="100" height="44" rx="6" stroke-width="2"/><text x="272" y="231" text-anchor="middle">Server</text><text x="272" y="248" text-anchor="middle">program</text><path class="d-ink" d="M120 226L218 226" stroke-width="2" marker-end="url(#u25a1)"/><text class="s" x="170" y="221" text-anchor="middle">request</text><path class="d-ink" d="M220 244L124 244" stroke-width="2" marker-end="url(#u25a1)"/><text class="s" x="170" y="260" text-anchor="middle">built page</text><rect class="d-gold" x="222" y="292" width="100" height="44" rx="6" stroke-width="2"/><text x="272" y="319" text-anchor="middle">Database</text><path class="d-ink" d="M262 258L262 288" stroke-width="2" marker-end="url(#u25a1)"/><path class="d-ink" d="M282 290L282 260" stroke-width="2" marker-end="url(#u25a1)"/><text class="s" x="18" y="290">A program builds each</text><text class="s" x="18" y="306">page for this request:</text><text class="s" x="18" y="322">logins, orders, comments.</text></svg>', alt:"Two panels. Static site: a browser sends a request to a host, which sends back the same ready-made files (index.html, style.css, photo.jpg) to every visitor; JavaScript runs in the visitor’s browser. Dynamic site: a browser sends a request to a server program, which reads and writes a database and sends back a page built for that request, such as for logins, orders and comments.", cap:"A static host sends files as they are; a dynamic server builds pages as people ask for them."},
      {table:[
        ["","Static site","Dynamic site"],
        ["What the server does","Sends stored files","Runs a program for each request"],
        ["Typical examples","Portfolio, café menu, club page, documentation","Online shop, social network, booking system, forum"],
        ["Can it remember what visitors send?","Not by itself","Yes, in a database"],
        ["Hosting","Often free; simple","Usually paid; needs updates and security care"]
      ]},
      "**A static site can still be interactive.** JavaScript runs in the visitor’s browser, not on the server, so a quiz, a dark-mode toggle or a photo slideshow all work on static hosting. What a static site can’t do on its own is **keep** what visitors send: messages from a contact form, accounts and logins, comments, orders. For those you need a server program, or a separate service that does that one job (Lesson 5 covers contact forms).",
      {tip:"Everything you’ve built in this track so far (HTML, CSS and JavaScript in the browser) is a static site. That’s good news: static sites are the cheapest, fastest and safest kind to run."}
    ]},
    {h:"What “deploy” means", body:[
      "To [[deploy]] a site is to copy its files to the host and make that version the live one. Every time you change something and want the world to see it, you deploy again.",
      {ol:[
        "**Change** files on your device or in an online editor.",
        "**Upload** them to the host (or to a store the host watches, such as a GitHub [[repository]]).",
        "**Build**, if needed: some tools turn templates or Markdown into HTML first. Plain HTML, CSS and JavaScript need no build.",
        "**Publish**: the host swaps the new version in. Visitors get it on their next visit, once any saved copies in their browser [[cache]] run out."
      ]},
      "With GitHub Pages, the upload and publish steps are joined: you save a change to the repository, and GitHub deploys it automatically, usually within a few minutes. You’ll do this in Lesson 2.",
      {warn:"Deploying replaces the live site. Get into the habit of checking the live address after every deploy, on a phone as well as a computer if you can."}
    ]},
    {h:"Three free static hosts", body:[
      "Many companies host static sites free. Three common ones, with their limits as written on their own pages in November 2026:",
      {table:[
        ["","How you publish","Free plan limits (main ones)"],
        ["GitHub Pages","From a GitHub repository, through the website or Git","Public repositories only on the free plan; site up to 1 GB; soft limit of 100 GB of traffic a month; deploys time out after 10 minutes"],
        ["Netlify","From a Git repository or by uploading files","300 “credits” a month shared by deploys, traffic, requests and form submissions; when they run out, the site pauses until next month"],
        ["Cloudflare Pages","From a Git repository or by Direct Upload","500 builds a month; up to 20,000 files, each up to 25 MiB; Cloudflare now suggests its Workers product for new projects"]
      ]},
      "All three give you a free web address on their own domain, HTTPS, and the option to add your own [[domain-name|domain name]].",
      "Read the rules as well as the numbers. GitHub’s rules say Pages “is not intended for or allowed to be used as a free web-hosting service to run your online business, e-commerce site, or any other website that is primarily directed at either facilitating commercial transactions or providing commercial software as a service”, and that Pages sites shouldn’t be used for sensitive transactions such as sending passwords or card numbers. A personal site, a portfolio, a club, a class or a project’s documentation is the intended use.",
      {warn:"Free plans change. Before you rely on one, open the provider’s own pricing or limits page and check the current numbers. Never trust a comparison (including this one) over the provider’s page."}
    ]},
    {h:"What it really costs", body:[
      "A static site can cost nothing at all: free hosting plus the free address the host gives you, such as `your-username.github.io`. Money comes in at three points.",
      {list:[
        "**A domain name of your own.** MDN puts typical prices at around $5–15 a year. The price depends on the ending (`.com`, `.org`, a country code and so on), and many sellers charge less for the first year than for renewals. You pay every year (Lesson 3).",
        "**Paid hosting.** MDN puts basic paid hosting at about $5–10 a month. You need it for dynamic sites, for commercial uses a free plan forbids, or for more traffic than a free plan allows.",
        "**Extras.** Email at your own domain, form services and analytics often have free tiers with paid upgrades."
      ]},
      {ex:"Ana wants a site for her community choir at its own domain. Hosting on GitHub Pages: $0. Domain: an offer of $3 for the first year, then $16 a year on renewal. Over three years she pays 3 + 16 + 16 = **$35**, not 3 × 3 = $9. The renewal price is the one to compare.", label:"Worked example"},
      "There is also a cost in time: a dynamic site needs software updates and security care for as long as it’s online. A static site needs very little, which is one reason many people choose it."
    ]},
    {h:"Choosing a host", body:[
      "Ask these questions in order:",
      {ol:[
        "**Is it static?** If every page can be a ready-made file, a free static host will do.",
        "**What must visitors be able to send?** A contact form can use a form service. Logins, payments, bookings or comments need a dynamic platform or a specialist service.",
        "**Is it commercial?** Check the host’s rules. A shop belongs on a paid host or a shop platform, not on GitHub Pages.",
        "**Who will look after it?** A host with a simple web interface suits a site that a club will pass between volunteers.",
        "**What happens if you move?** Static files are plain files: you can take them to another host at any time. With your own domain, the address moves with you."
      ]},
      {table:[
        ["Project","Good fit","Why"],
        ["Kenji’s portfolio of design work","GitHub Pages","Static, personal, free"],
        ["Fatima’s bakery taking online orders","A paid host or shop platform","Payments and orders need a server; e-commerce is outside GitHub Pages’ rules"],
        ["A neighbourhood garden club with a contact form","Any free static host plus a form service","Static pages; the form service keeps the messages"]
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“Static means boring.”** Static only describes how the server sends files. JavaScript, animation and layout all still work.",
        "**“Free hosting means I own nothing.”** You own your files. A static site moves to another host in minutes.",
        "**“Buying a domain gives me hosting.”** A domain is just a name. You still need somewhere for the files to live, and you link the two with DNS.",
        "**“My site is live as soon as I save.”** Deploys take a little time, and browsers may show a cached copy for a while."
      ]}
    ]}
   ],
   try:[
    {id:"t2u5-l1-x1", type:"sort", q:"Priya is planning features for a community library’s site. Which can run on a static host as plain files, and which need a server program or an outside service?", buckets:["Works as a static site","Needs a server or a service"], items:[
      {t:"Opening hours and a map image", b:0, why:"Ready-made text and an image: the host just sends the files."},
      {t:"A JavaScript quiz that shows your score straight away", b:0, why:"The quiz runs in the visitor’s browser. Nothing has to be stored on the server."},
      {t:"A dark-mode button that toggles a CSS class", b:0, why:"JavaScript in the browser changes the page. No server work is needed."},
      {t:"A members’ area where people log in", b:1, why:"Logins mean checking passwords and remembering who is signed in, which needs a server program and a database."},
      {t:"A form that stores book reviews for everyone to read", b:1, why:"Keeping what visitors send and showing it to others needs storage on a server (or a service that provides it)."},
      {t:"Paying a late fee by card", b:1, why:"Payments need a secure server-side payment service. Static files can’t process them, and GitHub says Pages sites shouldn’t be used for sensitive transactions."}
    ]},
    {id:"t2u5-l1-x2", type:"mcq", q:"Mei’s recipe site uses JavaScript to scale ingredient amounts when you change the number of servings. A friend says she’ll need a paid dynamic host for that. Is the friend right?", options:[
      {t:"No: the JavaScript runs in the visitor’s browser, so a free static host can serve it", ok:true, why:"The host only sends the .js file; the calculation happens on the visitor’s device. Static hosting is enough."},
      {t:"Yes: any JavaScript needs a dynamic host", why:"Server-side programs need a dynamic host. Browser JavaScript is just another file a static host sends."},
      {t:"Yes: the numbers change, so the site is dynamic", why:"“Dynamic site” means the server builds pages. Here the page changes in the browser after it arrives."},
      {t:"No, but only if she removes the JavaScript", why:"There’s no need to remove it. Static hosts serve JavaScript files like any other file."}
    ]},
    {id:"t2u5-l1-x3", type:"match", q:"Match each word with its meaning.", pairs:[
      ["Hosting","Renting space on an always-on server that answers visitors","Hosting is the service; the server is the computer it runs on."],
      ["Deploy","Copying your files to the host and making that version live","Each deploy replaces what visitors see."],
      ["Static site","The server sends the same ready-made files to everyone","Nothing is built per request, which keeps it fast and simple."],
      ["Dynamic site","A server program builds pages for each request","Shops, logins and social networks work this way."],
      ["Domain name","A name such as example.org that DNS links to a host","A name only: it doesn’t store any files itself."]
    ]},
    {id:"t2u5-l1-x4", type:"order", q:"Put the steps of updating a static site in order, from editing to the visitor seeing it.", items:[
      {t:"Change the files on your device or in an online editor", why:"Every update starts with a change to the files."},
      {t:"Upload the changed files to the host (or the repository it watches)", why:"The host can only publish what it has received."},
      {t:"The host publishes the new version", why:"Publishing swaps the new files in; with GitHub Pages this happens automatically after a save."},
      {t:"A visitor’s browser loads the page and gets the new version once its cached copy expires", why:"Browsers may reuse saved copies for a while, so the change can take a little longer to appear for people who visited recently."}
    ]},
    {id:"t2u5-l1-x5", type:"number", q:"Tomás finds a domain for $2 in the first year. The renewal price is $14 a year. What will he pay in total over **four** years?", answer:44, tol:0, unit:"$", why:"First year $2, then three renewals at $14: 2 + 14 + 14 + 14 = **$44**.", wrongs:[
      {v:8, tol:0, why:"That’s 4 × $2, as if the first-year price lasted. Renewals cost $14 each."},
      {v:56, tol:0, why:"That’s 4 × $14. The first year is only $2."},
      {v:16, tol:0, why:"That’s one year at $2 plus one at $14. The question asks for four years."}
    ]},
    {id:"t2u5-l1-x6", type:"mcq", q:"Oluwaseun wants to sell hand-made jewellery with a basket and card payments. Which hosting choice fits?", options:[
      {t:"A paid host or a shop platform that handles orders and payments", ok:true, why:"Orders and payments need server-side software, and a commercial shop is outside the free static hosts’ intended use."},
      {t:"GitHub Pages, because it’s free and supports custom domains", why:"GitHub’s rules say Pages isn’t for e-commerce or online businesses, and it can’t process payments."},
      {t:"Any static host, adding JavaScript to take card numbers", why:"Never collect card numbers in your own page script. Payments need a secure payment service, and GitHub says Pages sites shouldn’t be used for sensitive transactions such as sending card numbers."},
      {t:"A domain name only; the registrar will host the shop", why:"A domain is a name. It needs hosting and shop software behind it."}
    ]}
   ],
   apply:{intro:"Plan your first published site and get the account you’ll use in Lesson 2. Everything here works in a browser on a phone or a computer.", tasks:[
     {t:"Plan your site", how:[
       "Pick a real, small project: a portfolio, a page for a club or class, a recipe collection, a family history page, or the pages you built earlier in this track.",
       "List the pages it needs (for example: home, about, contact).",
       "For each feature, decide: static, or does it need a server or a service? Use the sort exercise as a guide.",
       "Check it’s an allowed use for a free static host: personal, educational, a club or project, not a shop."
     ], write:"Your site’s purpose, its pages, and any feature that needs more than static hosting."},
     {t:"Check the free plans yourself", how:[
       "Open GitHub Docs and search for “GitHub Pages limits”. Note the size and traffic limits.",
       "Open netlify.com/pricing and find what the Free plan includes and what happens when you reach its limit.",
       "Open Cloudflare’s developer docs and search for “Pages limits”. Note the build and file limits.",
       "Compare what you found with the table in this lesson. If anything has changed, trust the provider’s page."
     ], write:"One limit from each provider, and the date you checked."},
     {t:"Create a GitHub account (skip if you have one)", how:{
       win:["In any browser, go to github.com and choose **Sign up**.","Enter your email, a strong unique password (let your password manager create it) and a username. Your username becomes part of your free web address, so keep it short, and use only letters, numbers and single hyphens.","Follow the email verification step.","Turn on two-factor authentication: profile picture → **Settings** → **Password and authentication**. Save the recovery codes somewhere safe, such as your password manager."],
       mac:["In any browser, go to github.com and choose **Sign up**.","Enter your email, a strong unique password (let your password manager create it) and a username. Your username becomes part of your free web address, so keep it short, and use only letters, numbers and single hyphens.","Follow the email verification step.","Turn on two-factor authentication: profile picture → **Settings** → **Password and authentication**. Save the recovery codes somewhere safe."],
       chromeos:["In Chrome, go to github.com and choose **Sign up**.","Enter your email, a strong unique password (Google Password Manager can suggest one) and a short username of letters, numbers and single hyphens. It becomes part of your web address.","Follow the email verification step.","Turn on two-factor authentication: profile picture → **Settings** → **Password and authentication**. Save the recovery codes somewhere safe."],
       phone:["**iPhone or Android:** in Safari or Chrome, go to github.com and tap **Sign up**. (The GitHub mobile app is handy later, but Pages settings are on the website.)","Enter your email, a strong unique password (your phone’s password manager can suggest one) and a short username of letters, numbers and single hyphens.","Follow the email verification step.","Turn on two-factor authentication: tap your profile picture → **Settings** → **Password and authentication**. If a menu item seems missing on a small screen, use the browser’s **Request Desktop Website** (Safari: the page menu in the address bar, shown as **aA** on many iOS versions) or **Desktop site** (Chrome: **⋮** menu)."]
     }}
   ], proof:"A written plan for a small static site, notes on three hosts’ current free limits, and a GitHub account with two-factor authentication turned on."},
   read:[
     {book:"mdn", where:"Getting started → Your first website → “Publishing your website”", note:"The sections “What are the options?” and “Getting hosting and a domain name” match this lesson."},
     {book:"mdn", where:"Background reading: Extensions → Server-side websites → First steps → “Client-server overview” (sections “Static sites” and “Dynamic sites”)"},
     {book:"ghdocs", where:"GitHub Pages → “What is GitHub Pages?” and “GitHub Pages limits”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u5-l2", title:"Publishing with GitHub Pages", minutes:60,
   hook:{q:"Lucía uploads her finished site to GitHub Pages. The repository holds only her site’s files (no README), and her home page file is called `Index.html`, with a capital I. What do visitors see at her site’s address?", options:["Her home page, as normal","A “404 File not found” page","A list of her files to click on","A warning that the site isn’t secure"], answer:1,
     reveal:"A 404. GitHub Pages looks for a home page file named exactly `index.html` (or, failing that, `index.md` or `README.md`), and on web servers file names are case-sensitive: `Index.html` is a different name. This lesson walks through publishing step by step, then the handful of mistakes (like this one) behind most broken first sites."},
   goals:[
     "Explain what a repository, a commit and a branch are, enough to publish a site",
     "Name and arrange site files so they work on a web server",
     "Create a repository, upload files and turn on GitHub Pages using only the website, on a computer or a phone",
     "Update a published site and read its deploy status",
     "Diagnose 404s, missing styles and images, stale pages and failed deploys"
   ],
   learn:[
    {h:"Repositories, commits and branches, in one minute", body:[
      {lead:"GitHub is a website for storing projects with their full history. You only need three words from it today."},
      {list:[
        "A [[repository]] (repo) is a project folder on GitHub. It holds your site’s files and remembers every earlier version.",
        "A [[commit]] is one saved change, with a short message saying what changed (“Add opening hours”). Every upload or edit you make on the website creates a commit.",
        "A [[branch]] is a line of history. A new repository has one, called `main`. GitHub Pages publishes from a branch you choose."
      ]},
      "Developers usually send commits from their computer with Git on the command line. That comes in a later unit. Everything in this lesson works through the GitHub website, so you can do it on a phone.",
      {warn:"On GitHub’s free plan, a repository must be **public** to publish with Pages. Anyone can read every file in it, and every earlier version. Don’t upload anything you wouldn’t pin to a noticeboard (Lesson 5 says more)."}
    ]},
    {h:"Name and arrange your files", body:[
      "A web server finds files by their exact names, so a few habits save hours of puzzling:",
      {list:[
        "The home page is called `index.html`, all lower case, at the **top level** of what you publish. When someone visits a folder’s address, the server sends that folder’s `index.html`.",
        "Use lower-case names with hyphens instead of spaces: `about-us.html`, `images/summer-fair.jpg`.",
        "Make every link match the file name exactly, including capitals and the extension: `photo.JPG` and `photo.jpg` are different files on the server, even if your computer treats them as the same.",
        "Keep images in a folder such as `images/` and link to them with **relative** paths."
      ]},
      {ex:"garden-club/          ← the repository\n  index.html           ← home page, top level\n  about.html\n  style.css\n  images/\n    beds.jpg\n    logo.png", label:"A tidy site", mono:true},
      "Here is a small `index.html` for that site. Every path in it is relative, so it works wherever the site is published:",
      {code:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1">\n  <title>Riverside Garden Club</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Riverside Garden Club</h1>\n  <p>We meet every Saturday at 9:00.</p>\n  <img src="images/beds.jpg"\n    alt="Raised vegetable beds">\n  <p><a href="about.html">About us</a></p>\n</body>\n</html>', lang:"html", label:"index.html", weblab:"wl-first-page", cap:"`style.css`, `images/beds.jpg` and `about.html` are found relative to the page itself."},
      {warn:"A [[github-pages|GitHub Pages]] **project site** lives one folder down, at `your-username.github.io/garden-club/`. A path starting with a slash, such as `href=\"/style.css\"`, means “from the top of the whole domain”, so it points to `your-username.github.io/style.css`, which doesn’t exist. Leave out the leading slash."},
      {lab:"wl-first-page", t:"Practise: build a small home page with a heading and a paragraph, ready to publish"}
    ]},
    {h:"Create a repository and upload your files", body:[
      "On github.com, signed in:",
      {ol:[
        "Select **+** (top right), then **New repository**.",
        "Type a name. It becomes part of the address, so keep it short and lower case: `garden-club`. (For your main personal site you can instead name it exactly `your-username.github.io`, in lower case; see the table in the next section.)",
        "Choose **Public**, and turn on **Add README** so the repository isn’t empty. Select **Create repository**.",
        "On the repository’s main page, open the **Add file** menu and select **Upload files**. (On a narrow phone screen, these options may sit in the **⋯** menu beside **Code**.)",
        "Add your files. **On a computer**, open your site folder, select everything **inside** it, and drag it onto the page; folders such as `images/` keep their structure. **On a phone**, tap **choose your files** and pick several files at once from your files or photos.",
        "Under the files, write a commit message, such as “Add first version of site”, and select **Commit changes**."
      ]},
      "Limits for browser uploads: up to **100 files at a time**, and each file up to **25 MiB**. A web page’s files are almost always far smaller; if a photo is near that size, it’s too big for a web page anyway (Lesson 4).",
      {tip:"A phone can’t upload a folder. To put pictures in `images/`, first make the folder: **Add file → Create new file**, type `images/notes.txt` (typing the slash turns `images` into a folder), add a word or two and commit. Then open the `images` folder and use **Add file → Upload files** there: uploads go into the folder you’re looking at."},
      {warn:"The most common first-time mistake: dragging the **whole folder** onto the page instead of its contents. The site then sits at `my-site/index.html`, not at the top level, so the address shows a 404 (or, if the repository has a README, just the README’s text, because Pages falls back to `README.md` when there’s no top-level `index.html`). Fix it by uploading the folder’s contents at the top level, then opening the extra folder and choosing **⋯ → Delete directory**."}
    ]},
    {h:"Turn on GitHub Pages", body:[
      {ol:[
        "In the repository, select **Settings** (on a narrow screen it may be under the **⋯** menu).",
        "In the sidebar, in the “Code, planning, and automation” section, select **Pages**. (On a phone the sidebar may appear as a menu at the top of the settings page.)",
        "Under **Build and deployment**, set **Source** to **Deploy from a branch**.",
        "Set the branch to `main` and the folder to `/ (root)`, then select **Save**."
      ]},
      "That branch and folder are your site’s [[publishing-source|publishing source]]. The only other folder choice is `/docs`, used when a project keeps its website beside other code.",
      "GitHub now deploys the site. Its documentation says changes can take **up to 10 minutes** to publish. Return to **Settings → Pages**: when the site is live, it shows the address and a **Visit site** button.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="u25a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="60" y="8" width="220" height="70" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Your files</text><text class="s" x="170" y="52" text-anchor="middle">index.html · style.css</text><text class="s" x="170" y="68" text-anchor="middle">images/beds.jpg</text><path class="d-ink" d="M110 80L110 110" stroke-width="2" marker-end="url(#u25a2)"/><text class="s" x="122" y="100">Add file → Upload files</text><rect class="d-sage" x="60" y="114" width="220" height="70" rx="8" stroke-width="2"/><text x="170" y="138" text-anchor="middle">Repository: garden-club</text><text class="s" x="170" y="158" text-anchor="middle">branch main · folder / (root)</text><text class="s" x="170" y="174" text-anchor="middle">each save is a commit</text><path class="d-ink" d="M110 186L110 232" stroke-width="2" marker-end="url(#u25a2)"/><text class="s" x="122" y="204">Settings → Pages →</text><text class="s" x="122" y="220">Deploy from a branch</text><rect class="d-gold" x="60" y="236" width="220" height="62" rx="8" stroke-width="2"/><text x="170" y="260" text-anchor="middle">Deploy run (Actions tab)</text><text class="s" x="170" y="282" text-anchor="middle">green tick: live · red cross: failed</text><path class="d-ink" d="M110 300L110 336" stroke-width="2" marker-end="url(#u25a2)"/><text class="s" x="122" y="322">usually a few minutes</text><rect class="d-rose" x="10" y="340" width="320" height="56" rx="8" stroke-width="2"/><text x="170" y="363" text-anchor="middle">https://your-username.github.io</text><text x="170" y="384" text-anchor="middle">/garden-club/</text></svg>', alt:"A top-to-bottom flow. Your files (index.html, style.css, images/beds.jpg) go by Add file, Upload files into the repository garden-club, on branch main, folder root, where each save is a commit. Settings, Pages, Deploy from a branch leads to a deploy run in the Actions tab, where a green tick means live and a red cross means failed. After usually a few minutes the live site appears at https://your-username.github.io/garden-club/.", cap:"From files to a live address. Every later commit to `main` runs the deploy again."},
      {table:[
        ["Repository name","Kind of site","Address"],
        ["`your-username.github.io`","User site (one per account)","`https://your-username.github.io/`"],
        ["Any other name, such as `garden-club`","Project site (one per repository)","`https://your-username.github.io/garden-club/`"]
      ]}
    ]},
    {h:"Updating your site", body:[
      "Every commit to the publishing branch starts a new deploy. Two ways to change things through the website:",
      {list:[
        "**Edit a file:** open it, select the **pencil** (Edit) button, make the change, then **Commit changes** with a message. Good for text and code.",
        "**Replace a file:** upload a new file with exactly the same name and path. Good for images."
      ]},
      "To watch a deploy, open the repository’s **Actions** tab. Each deploy is a **workflow run** (when you deploy from a branch, it’s listed as “pages build and deployment”) with a status: a yellow dot while it runs, a green tick when it succeeded, a red cross when it failed. Open a run to read its log, which says which step went wrong.",
      {tip:"Write commit messages you’ll understand in a year: “Fix broken menu link” beats “update”. They are your site’s diary, and Lesson 5 uses them to undo mistakes."}
    ]},
    {h:"Troubleshooting: 404s, missing styles and stale pages", body:[
      "GitHub’s own troubleshooting article for 404s lists the usual causes. Work down this table:",
      {table:[
        ["What you see","Likely cause","What to do"],
        ["404 at the site address (or your README shows instead of your page)","No `index.html` at the top of the publishing source, or it’s named `Index.html` or `index.HTML`","Rename it to exactly `index.html` (pencil → edit the name), or move your files out of the extra folder"],
        ["404 on one page","The link and the file name differ: `About.html` vs `about.html`, or a missing `.html`","Make the link match the file name exactly"],
        ["Page shows, but no styles or images","Wrong path or capitals (`Images/Logo.PNG`), or a path starting with `/` on a project site","Use relative paths that match the names exactly"],
        ["Old version still showing","The deploy hasn’t finished, or your browser shows a cached copy","Check the Actions tab; then reload in a private window"],
        ["Red cross in Actions","The deploy failed or timed out","Open the run and read the log (see below)"],
        ["Nothing published at all","Source set to None, or the repository is private on a free plan","Check **Settings → Pages**"]
      ]},
      "**When a deploy fails on GitHub’s side.** Sometimes a run fails for reasons that aren’t yours: an internal error, a timeout (Pages deploys are stopped after 10 minutes), or an outage. First check [GitHub’s status page](https://www.githubstatus.com). Then try again: open the failed run in **Actions** and choose **Re-run jobs → Re-run failed jobs** (or **Re-run all jobs**), or simply commit a small change, which starts a fresh deploy. If it fails the same way twice, read the log for a message about your files.",
      "**Caching.** Browsers keep copies of pages, style sheets and images to save time. After a deploy, a reload may still show the old style sheet. Open the site in a private (incognito) window, which starts without the cache, or force a full reload: [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:R]] (or [[kbd:Ctrl]] + [[kbd:F5]]) in Chrome, Edge or Firefox on Windows, and on ChromeOS; [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:R]] in Chrome, Edge or Firefox on a Mac; [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:R]] in Safari on a Mac. On a phone, a private tab is the simplest way.",
      {key:"Most first-site problems are names and places: `index.html` exactly, at the top level, with links that match file names character for character."}
    ]}
   ],
   try:[
    {id:"t2u5-l2-x1", type:"mcq", q:"Amara’s GitHub username is shown here as `your-username` (it stands for her real one), and her repository is called `garden-club`. She publishes it with GitHub Pages from `main`, `/ (root)`. What is the site’s address?", options:[
      {t:"`https://your-username.github.io/garden-club/`", ok:true, why:"A project site lives at username.github.io followed by the repository name."},
      {t:"`https://garden-club.github.io/`", why:"The first part of the address is the account name, not the repository name."},
      {t:"`https://github.com/your-username/garden-club`", why:"That’s the repository page, where the files are listed. The published site is on github.io."},
      {t:"`https://your-username.github.io/`", why:"That address belongs to a user site, from a repository named `your-username.github.io`."}
    ]},
    {id:"t2u5-l2-x2", type:"spot", q:"Kenji’s project site is published at `your-username.github.io/bakery/`. Here are lines from his `index.html` and his file list. Tap every item that will cause a broken page, style or image.", ask:"will break", mono:true, parts:[
      "Files: ",{t:"index.html", flag:false, why:"Correct name and place: the home page."},", ",{t:"style.css", flag:false, why:"Fine, and it matches the link below."},", ",{t:"images/Bread.JPG", flag:true, why:"The page asks for `images/bread.jpg`. On the server, `Bread.JPG` is a different name, so the image won’t load. Rename one to match the other."},", ",{t:"Menu Page.html", flag:true, why:"A space in a file name becomes `%20` in the address and is easy to mistype. The link below asks for `menu.html`, which doesn’t exist. Rename it `menu.html`."},", ",{t:"logo.png", flag:false, why:"Fine: it’s at the top level of the project, so the page can load it as `logo.png`."},
      "\nIn index.html:\n",{t:"<link rel=\"stylesheet\" href=\"style.css\">", flag:false, why:"A relative path that matches the file: it loads `your-username.github.io/bakery/style.css`."},"\n",{t:"<img src=\"images/bread.jpg\" alt=\"Sourdough loaf\">", flag:false, why:"The path itself is fine; the problem is the file’s name (see Bread.JPG)."},"\n",{t:"<img src=\"/logo.png\" alt=\"Kenji’s Bakery\">", flag:true, why:"The leading slash means the top of the domain: `your-username.github.io/logo.png`, outside the project. Use `logo.png`."},"\n",{t:"<a href=\"menu.html\">Menu</a>", flag:false, why:"A good link: once the file is renamed `menu.html`, it works."}
    ]},
    {id:"t2u5-l2-x3", type:"order", q:"Put the steps for publishing a new site through the GitHub website in order.", items:[
      {t:"Create a public repository with a README", why:"Pages needs a repository to publish from; on the free plan it must be public."},
      {t:"Add file → Upload files, adding the files that are inside your site folder", why:"The files must be in the repository before there’s anything to publish."},
      {t:"Write a commit message and select Commit changes", why:"Nothing is saved to the repository until you commit."},
      {t:"With the files committed, open Settings → Pages → Deploy from a branch, choose main and / (root), Save", why:"This tells GitHub what to publish and starts a deploy of the files you just committed."},
      {t:"Wait for the deploy, then select Visit site", why:"Changes can take up to 10 minutes. The Actions tab shows progress."}
    ]},
    {id:"t2u5-l2-x4", type:"match", q:"Match each symptom with its most likely cause.", pairs:[
      ["404 at the main address of a brand-new site","The files are inside an extra folder, so `index.html` isn’t at the top level","Pages looks for `index.html` at the top of the publishing source."],
      ["Text appears but the layout has no styles","The style sheet link doesn’t match the file’s name or path","The page loaded, so the address is right; only the CSS request failed."],
      ["Your fix doesn’t appear, though the Actions run is green","The browser is showing a cached copy","A private window or a forced reload fetches fresh files."],
      ["A red cross on the latest run in Actions","The deploy failed or timed out","Read the log; if it’s a GitHub-side error, re-run it or commit again."]
    ]},
    {id:"t2u5-l2-x5", type:"mcq", q:"Tomás dragged his whole `cafe-site` folder onto the upload page. His repository now has `cafe-site/index.html`, `cafe-site/style.css` and so on, and the site shows a 404. What’s the most direct fix through the website?", options:[
      {t:"Upload the files that are inside `cafe-site` at the top level of the repository, then delete the `cafe-site` directory", ok:true, why:"That puts `index.html` at the top of the publishing source, which is where Pages looks. Deleting the extra folder keeps things tidy."},
      {t:"Change the publishing folder to `/cafe-site`", why:"Pages only offers `/ (root)` or `/docs` as the folder."},
      {t:"Rename `index.html` to `Index.html`", why:"File names are case-sensitive and Pages looks for `index.html` exactly; this would make things worse."},
      {t:"Wait 24 hours for the 404 to clear", why:"Waiting won’t help: the file really is in the wrong place."}
    ]},
    {id:"t2u5-l2-x6", type:"mcq", q:"Hana’s latest deploy shows a red cross. The log ends with a message that the deployment timed out, and her only change was one line of text. GitHub’s status page shows an incident affecting Pages. What should she do?", options:[
      {t:"Wait for the incident to clear, then re-run the failed job (or commit again)", ok:true, why:"The failure isn’t caused by her files. Re-running the job, or committing a small change, starts a fresh deploy once GitHub is healthy."},
      {t:"Delete the repository and start again", why:"The repository is fine; deleting it would lose its history and break the address for nothing."},
      {t:"Undo her one-line change, which must have broken the build", why:"A timeout during a GitHub incident points to GitHub, not to one changed line of text."},
      {t:"Switch the repository to private", why:"Visibility has nothing to do with this failure, and on the free plan a private repository can’t publish with Pages at all."}
    ]},
    {id:"t2u5-l2-x7", type:"sort", q:"Sione is about to upload his club’s site to a public repository. Which files are fine to upload, and which should stay off it?", buckets:["Fine to publish","Keep out of the repository"], items:[
      {t:"index.html and about.html", b:0, why:"These are the site itself; they’re meant to be public."},
      {t:"style.css", b:0, why:"Style sheets are public by nature: every visitor’s browser downloads them."},
      {t:"Photos the members agreed can go online", b:0, why:"With permission, these belong on the site."},
      {t:"members.xlsx with names and phone numbers", b:1, why:"A public repository shows every file to anyone, even files the site never links to. Personal data stays off it."},
      {t:"A text file with the club’s email password", b:1, why:"Passwords never go in a repository. Once committed, it stays in the history even if you delete the file later."},
      {t:"Draft notes about a member’s complaint", b:1, why:"Private notes aren’t for a public repository; anyone can read them there."}
    ]}
   ],
   apply:{intro:"Publish a real site. If you don’t have files ready, create `index.html` directly on GitHub with the example from this lesson (change the words to your own).", tasks:[
     {t:"Create the repository and your home page", how:[
       "On github.com select **+ → New repository**. Name it, for example, `my-first-site`, choose **Public**, turn on **Add README**, and select **Create repository**.",
       "Select **Add file → Create new file**. Name it `index.html` (all lower case).",
       "Paste the example `index.html` from this lesson, or your own page from the Web Lab, and change the text to your own.",
       "Select **Commit changes**, add a message such as “Add home page”, and confirm."
     ]},
     {t:"Upload a style sheet and an image", how:{
       win:["Put `style.css` and an `images` folder (with one small image) on your computer.","In the repository, select **Add file → Upload files**.","In File Explorer, select `style.css` and the `images` folder together and drag them onto the browser page. The folder keeps its structure.","Commit with a message such as “Add styles and photo”. Check the file list shows `images/` as a folder."],
       mac:["Put `style.css` and an `images` folder (with one small image) on your Mac.","In the repository, select **Add file → Upload files**.","In Finder, select `style.css` and the `images` folder together and drag them onto the browser page. The folder keeps its structure.","Commit with a message such as “Add styles and photo”. Check the file list shows `images/` as a folder."],
       chromeos:["Put `style.css` and an `images` folder (with one small image) in the Files app.","In the repository, select **Add file → Upload files**.","Select `style.css` and the `images` folder in Files and drag them onto the Chrome window. The folder keeps its structure.","Commit with a message such as “Add styles and photo”."],
       phone:["Create `style.css`: **Add file → Create new file**, name it `style.css`, type a rule such as `body { font-family: sans-serif; }`, and commit.","Create the folder: **Add file → Create new file**, type `images/notes.txt`, add a word, and commit.","Open the `images` folder, then **Add file → Upload files → choose your files**. **iPhone:** pick from Photos or Files. **Android:** pick from your gallery or Files app (names vary by phone maker).","Check the photo’s file name, including capitals and extension, and make the `src` in `index.html` match it exactly (pencil → edit → commit)."]
     }},
     {t:"Publish, then break it and fix it", how:[
       "**Settings → Pages**: Source **Deploy from a branch**, branch `main`, folder `/ (root)`, **Save**.",
       "Open the **Actions** tab and watch the run turn green. Then go back to **Settings → Pages** and select **Visit site**. Open it on a phone too, if you can.",
       "Now rename `index.html` to `Index.html` (open it, pencil, edit the name, commit). Wait for the deploy and reload: instead of your page you’ll see either a 404 or your README’s text (GitHub Pages falls back to `README.md` when it finds no `index.html`).",
       "Rename it back to `index.html`, wait, and reload in a private window. Your page returns."
     ], write:"Your site’s address, and what you saw in the Actions tab while it deployed."}
   ], proof:"A live site at your github.io address with a home page, a style sheet and an image that all load, and a note of the 404 you caused and fixed."},
   read:[
     {book:"ghdocs", where:"GitHub Pages → “Creating a GitHub Pages site” and “Configuring a publishing source for your GitHub Pages site”"},
     {book:"ghdocs", where:"GitHub Pages → “Troubleshooting 404 errors for GitHub Pages sites”"},
     {book:"ghdocs", where:"Repositories → Working with files → “Adding a file to a repository”", note:"The web upload steps and limits (100 files at once, 25 MiB per file)."},
     {book:"mdn", where:"Getting started → Your first website → “Publishing your website”, section “Using an online publishing tool”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u5-l3", title:"Your own domain name", minutes:55,
   hook:{q:"When you “buy” a domain name such as `example.com`, what do you actually get?", options:["The name, yours for ever after one payment","The right to use the name for a period you pay for, which you must renew","A small server that hosts your website","A copy of the name that other people can also buy"], answer:1,
     reveal:"You register the name for a period, typically one to ten years, and keep it only by renewing. If a registration lapses, the name can eventually be released for anyone to register. This lesson covers registering, pointing the name at your host with DNS, protecting it, and turning on HTTPS."},
   goals:[
     "Explain what a registrar does, what renewal means, and what happens when a domain expires",
     "Describe A, AAAA, CNAME and TXT records and choose the right one for an apex domain or a `www` subdomain",
     "Connect a domain to GitHub Pages in a safe order: verify, add it to the site, create DNS records",
     "Explain domain takeovers, and turn on HTTPS once the certificate is ready",
     "Explain why DNS changes take time, and check a domain’s records"
   ],
   learn:[
    {h:"Why have a domain of your own?", body:[
      {lead:"Your github.io address works and costs nothing. A domain of your own is like having your own street address instead of “c/o a friend”."},
      "A [[domain-name|domain name]] such as `riverside-garden.org` is shorter and easier to say than `your-username.github.io/garden-club/`. More importantly, **it’s portable**: if you move to another host, you point the name at the new place and every link, business card and bookmark keeps working. You can also use it for email at the same name (with an email provider).",
      "The trade-offs: it costs money every year, and you take on a small responsibility. If you forget to renew, or leave its settings pointing at a site you’ve deleted, things can go wrong (this lesson shows how to avoid both).",
      "If domain names, [[top-level-domain|top-level domains]] and subdomains feel hazy, revisit {{domains-urls}} and {{dns}} from Digital Foundations. This lesson builds on them."
    ]},
    {h:"Registering: registrars, prices and renewal", body:[
      "You register a domain through a [[registrar]]: a company accredited to sell registrations for top-level domains such as `.com`, `.org` or a country code. Many registrars exist; prices and extras vary, so compare a few.",
      {list:[
        "**It’s a registration for a period.** ICANN (which coordinates generic top-level domains) describes registering a name for the period you pay for, typically **one to ten years**. Renew to keep it.",
        "**Compare renewal prices**, not just first-year offers. MDN gives about $5–15 a year as typical, with variation by ending and by registrar.",
        "**Turn on auto-renew** and keep the account’s email address current. For generic domains, ICANN says registrars must send renewal reminders about **one month** and **one week** before expiry, and a notice within **five days after**. Those emails go to the address on file.",
        "**Protect the registrar account** with a strong password and two-step verification ({{mfa}}). Whoever controls it controls where your name points."
      ]},
      "**If it expires**, the website and any email at that domain stop working: sometimes straight away, and for generic domains, ICANN’s rules make registrars cut them off for at least the last days before deletion. Many registrars still let you renew for a while after expiry. Once the registrar deletes it, ICANN describes a **30-day Redemption Grace Period** during which the registrant can still redeem it (often for an extra fee), then 5 days of pending deletion; after that it’s released for anyone to register. Country-code domains (such as `.de` or `.jp`) set their own rules, and some require you to live in or have a link to the country.",
      {tip:"Put the renewal date in your calendar with a reminder two months before, even with auto-renew on. Cards expire, and a failed payment is the most common way people lose a domain they wanted."}
    ]},
    {h:"How DNS points a name at a host", body:[
      "Your domain’s [[dns-record|DNS records]] live with a **DNS provider**, usually your registrar unless you choose another. Each record answers one question about one name:",
      {table:[
        ["Record","Answers","Example value"],
        ["[[a-record|A]]","Which IPv4 address is this name at?","`185.199.108.153`"],
        ["AAAA","Which IPv6 address?","`2606:50c0:8000::153`"],
        ["[[cname|CNAME]]","This name is an alias: look up that other name instead","`your-username.github.io`"],
        ["[[txt-record|TXT]]","Any text, often used to prove you control the domain","a code from GitHub"]
      ]},
      "Record **names** are written relative to the domain. `@` means the domain itself, `example.com`, called the [[apex-domain|apex]] (or root, bare or naked domain). `www` means `www.example.com`.",
      "An apex domain can’t simply be a CNAME, because DNS doesn’t allow a CNAME beside the other records every domain has at its apex. So the apex usually gets **A** (and optionally **AAAA**) records with the host’s addresses. Some DNS providers offer an **ALIAS** or **ANAME** record that behaves like a CNAME at the apex. A subdomain such as `www` usually gets a **CNAME** pointing to the host’s name.",
      "Every record also has a [[ttl|TTL]] (time to live): how many seconds resolvers may cache the answer. A TTL of `3600` means an old answer can be reused for up to an hour.",
      {fig:'<svg viewBox="0 0 340 432"><defs><marker id="u25a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="40" y="8" width="260" height="66" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Registrar</text><text class="s" x="170" y="50" text-anchor="middle">you register example.com</text><text class="s" x="170" y="66" text-anchor="middle">for 1–10 years, then renew</text><path class="d-ink" d="M170 76L170 104" stroke-width="2" marker-end="url(#u25a3)"/><text class="s" x="180" y="94">uses a DNS provider</text><rect class="d-panel" x="8" y="108" width="324" height="132" rx="8" stroke-width="1.5"/><text x="170" y="130" text-anchor="middle">DNS records for example.com</text><text class="s" x="20" y="156">@</text><text class="s" x="76" y="156">A</text><text class="s" x="136" y="156">185.199.108.153 (+3)</text><text class="s" x="20" y="178">@</text><text class="s" x="76" y="178">AAAA</text><text class="s" x="136" y="178">2606:50c0:8000::153 (+3)</text><text class="s" x="20" y="200">www</text><text class="s" x="76" y="200">CNAME</text><text class="s" x="136" y="200">your-username.github.io</text><text class="s" x="20" y="226">plus a TXT record that proves it’s yours</text><path class="d-ink" d="M170 242L170 280" stroke-width="2" marker-end="url(#u25a3)"/><text class="s" x="180" y="265">browsers look it up</text><rect class="d-sage" x="40" y="284" width="260" height="62" rx="8" stroke-width="2"/><text x="170" y="308" text-anchor="middle">GitHub Pages servers</text><text class="s" x="170" y="328" text-anchor="middle">find your site by its domain</text><path class="d-ink" d="M170 348L170 378" stroke-width="2" marker-end="url(#u25a3)"/><text class="s" x="180" y="367">certificate: HTTPS</text><rect class="d-rose" x="40" y="382" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="409" text-anchor="middle">https://www.example.com</text></svg>', alt:"A top-to-bottom flow. A registrar, where you register example.com for one to ten years and renew, uses a DNS provider. The DNS records for example.com are: at @, A records to 185.199.108.153 and three more; at @, AAAA records to 2606:50c0:8000::153 and three more; at www, a CNAME to your-username.github.io; plus a TXT record that proves the domain is yours. Browsers look the name up and reach GitHub Pages servers, which find your site by its domain. With a certificate, the site is served at https://www.example.com.", cap:"The registrar holds the name, DNS records point it at the host, and the host serves your site over HTTPS."}
    ]},
    {h:"Connecting a domain to GitHub Pages", body:[
      "GitHub’s documentation recommends an order that keeps your domain safe at every step. Do the verification first (next section), then:",
      {ol:[
        "**Add the domain to your site.** In the repository: **Settings → Pages → Custom domain**, type it (for example `www.example.com`) and select **Save**. When you publish from a branch, this adds a commit with a file named `CNAME` containing the domain. Leave that file alone.",
        "**Create the DNS records** at your DNS provider, using the values below. If the provider created default records (for example for a “parked” page), remove them.",
        "**Wait** for the DNS check in **Settings → Pages** to pass. GitHub says DNS changes can take up to 24 hours.",
        "**Select Enforce HTTPS** once it’s available (see below)."
      ]},
      {table:[
        ["Type","Name","Value"],
        ["A","`@`","`185.199.108.153`\n`185.199.109.153`\n`185.199.110.153`\n`185.199.111.153`"],
        ["AAAA (optional)","`@`","`2606:50c0:8000::153`\n`2606:50c0:8001::153`\n`2606:50c0:8002::153`\n`2606:50c0:8003::153`"],
        ["CNAME","`www`","`your-username.github.io`"]
      ]},
      {list:[
        "The CNAME points to `your-username.github.io` only, **never** with the repository name: GitHub finds the right repository from the domain you saved in step 1.",
        "GitHub recommends setting up `www` even if you mainly use the apex. With both configured, it redirects one to the other automatically.",
        "If you add AAAA records for IPv6, keep the A records too.",
        "Don’t create a **wildcard** record such as `*.example.com`. GitHub warns it puts you at immediate risk of takeovers, even with a verified domain."
      ]},
      {tip:"These addresses are copied from GitHub’s documentation as checked in November 2026. Copy them from GitHub’s article “Managing a custom domain for your GitHub Pages site” when you do this for real, in case they ever change."}
    ]},
    {h:"Verifying your domain: stopping takeovers", body:[
      "Picture this: Sione points `www.example.com` at GitHub Pages, then later deletes the repository but forgets the DNS record. The record still sends visitors to GitHub, where no site claims the name. Another GitHub user could add `www.example.com` to **their** repository and publish anything at Sione’s address. That’s a [[domain-takeover|domain takeover]].",
      "[[domain-verification|Verifying]] the domain prevents it. Once verified for your account, only your repositories can publish to that domain and its immediate subdomains.",
      {ol:[
        "Select your profile picture → **Settings** (your **profile** settings, not the repository’s).",
        "In the “Code, planning, and automation” section of the sidebar, select **Pages**.",
        "Select **Add a domain**, type your domain and select **Add domain**.",
        "GitHub shows a TXT record to create, named like `_github-pages-challenge-your-username.example.com`, with a code as its value. Create it at your DNS provider.",
        "Wait for DNS to update (immediate or up to 24 hours), then come back and select **Verify**. If you left the page, use **⋯ → Continue verifying**.",
        "**Keep** the TXT record. Removing it can un-verify the domain."
      ]},
      {warn:"If you stop using GitHub Pages for a domain, remove its DNS records at the same time. A record pointing at a site that no longer exists is an open door."}
    ]},
    {h:"HTTPS and certificates", body:[
      "[[https|HTTPS]] encrypts the connection between visitors and your site and proves they reached the real server for that name. For this a server needs a [[tls-certificate|TLS certificate]]: a digital document, signed by a trusted certificate authority, saying “this server may speak for www.example.com”.",
      "Sites on `github.io` addresses get HTTPS automatically. For a custom domain, GitHub does the work: once its DNS check passes, it requests a certificate from **Let’s Encrypt** (a free certificate authority), installs it, and shows a check mark by your domain. It renews it for you.",
      {list:[
        "**Enforce HTTPS** then sends every `http://` visit to `https://`. GitHub notes it can take **up to 24 hours** for the option to become available.",
        "If the certificate hasn’t appeared several minutes after saving, GitHub suggests selecting **Remove** next to the domain, typing it again and selecting **Save**, which restarts the process.",
        "The whole domain must be **under 64 characters** for a certificate to be issued.",
        "If your DNS has **CAA** records (rules saying which authorities may issue certificates), one must allow `letsencrypt.org`."
      ]},
      "**[[mixed-content|Mixed content]].** If an HTTPS page loads an image, style sheet or script over `http://`, browsers block insecure scripts and style sheets, and for images they may try `https://` instead, block them or show a warning. Search your files for `http://` and change those addresses to `https://`, or use relative paths for your own files.",
      {key:"Order matters: verify the domain, add it in Settings → Pages, create the DNS records, wait for the check mark, then enforce HTTPS."}
    ]},
    {h:"Waiting for DNS, and checking it", body:[
      "DNS answers are cached by resolvers around the world for up to each record’s TTL, so after a change some people see the new answer at once and others see the old one for a while. GitHub says DNS changes can take **up to 24 hours** to spread.",
      "To check what the world sees, use an online DNS lookup tool: for example the one at `dns.google`. Enter your domain and choose the record type (`A`, `CNAME` or `TXT`). If the answer matches what you created, DNS is done, even if your own device still remembers the old answer. (Developers use a command called `dig`; the command line comes in a later unit.)",
      {table:[
        ["Message or symptom","What it usually means"],
        ["A message that the domain doesn’t resolve to the GitHub Pages server","Records missing, mistyped, or still spreading"],
        ["A message that the domain is already taken","Another repository uses it; verifying the domain releases it to you (unless someone else verified it first)"],
        ["Enforce HTTPS is greyed out","The certificate isn’t ready yet; wait, or remove and re-add the domain"],
        ["Site worked, now 404 at the domain","The `CNAME` file was deleted, or the domain was removed in Settings"],
        ["Some people see the old site","Cached DNS answers; wait for the TTL to pass"]
      ]}
    ]}
   ],
   try:[
    {id:"t2u5-l3-x1", type:"mcq", q:"Dmitri registered a domain two years ago for his photography portfolio. His card expired and he ignored the reminder emails. Last week the domain expired. What’s true now?", options:[
      {t:"His site and email at that domain have stopped working or soon will, but for a generic domain he can very likely still renew or redeem it if he acts now", ok:true, why:"Registrars cut off an expired domain at some point before deleting it. For generic domains there’s usually time to renew after expiry, and ICANN describes a 30-day Redemption Grace Period before it’s released."},
      {t:"Nothing changes; once registered, a domain is his for ever", why:"Registration lasts for the period paid for. Without renewal, it lapses."},
      {t:"The domain is immediately registered by someone else", why:"Generic domains go through grace periods first, so he still has time to act now."},
      {t:"Only the email stops; the website keeps working for good", why:"Both depend on the domain’s DNS. When the registrar cuts off the lapsed domain, both stop."}
    ]},
    {id:"t2u5-l3-x2", type:"match", q:"Match each DNS record type with what it does.", pairs:[
      ["A","Points a name to an IPv4 address","GitHub Pages gives four IPv4 addresses for an apex domain."],
      ["AAAA","Points a name to an IPv6 address","Optional, alongside A records."],
      ["CNAME","Makes a name an alias of another name","Used for `www` → `your-username.github.io`."],
      ["TXT","Holds text, for example to prove you control a domain","GitHub’s domain verification uses one."]
    ]},
    {id:"t2u5-l3-x3", type:"spot", q:"Priya is connecting `example.com` and `www.example.com` to her GitHub Pages user site (`your-username.github.io`). Here are her DNS records. Tap every record that is wrong or risky.", ask:"is wrong or risky", mono:true, parts:[
      {t:"@     A      185.199.108.153", flag:false, why:"One of GitHub Pages’ four IPv4 addresses for an apex domain."},"\n",
      {t:"@     A      185.199.109.153", flag:false, why:"Also correct; she should have all four."},"\n",
      {t:"@     A      192.0.2.44", flag:true, why:"Not a GitHub Pages address. It looks like a leftover default (“parked page”) record from the provider. Extra apex A records send some visitors to the wrong place and can block the HTTPS certificate."},"\n",
      {t:"www   CNAME  your-username.github.io/bakery", flag:true, why:"A CNAME holds a host name only: `your-username.github.io`. Never add the repository name or a path."},"\n",
      {t:"*     CNAME  your-username.github.io", flag:true, why:"A wildcard record. GitHub strongly recommends against it because it risks takeovers of subdomains, even with a verified domain."},"\n",
      {t:"_github-pages-challenge-your-username   TXT   a1b2c3…", flag:false, why:"The verification record. Keep it, so the domain stays verified."}
    ]},
    {id:"t2u5-l3-x4", type:"order", q:"Put the steps for safely connecting a new domain to a GitHub Pages site in order.", items:[
      {t:"Verify the domain in your profile’s Pages settings (with a TXT record)", why:"GitHub recommends verifying first, so no one else can claim the domain while you set things up."},
      {t:"Add the custom domain in the repository’s Settings → Pages and save", why:"GitHub warns that creating DNS records before this could let someone else host a site on your domain."},
      {t:"Create the A records for the apex and a CNAME for www at your DNS provider", why:"Now the name points to GitHub, which already knows which repository it belongs to."},
      {t:"Wait for the DNS check and certificate", why:"DNS can take up to 24 hours to spread; the certificate is requested after the check passes."},
      {t:"Select Enforce HTTPS", why:"This only becomes available once the certificate is ready."}
    ]},
    {id:"t2u5-l3-x5", type:"number", q:"A record has a TTL of 14400 seconds. After Lucía changes it, how many **hours** might a resolver keep giving out the old answer, at most?", answer:4, tol:0, unit:"hours", why:"14400 seconds ÷ 60 = 240 minutes; 240 ÷ 60 = **4 hours**. A resolver that cached the record just before the change may reuse it for that long.", wrongs:[
      {v:240, tol:0, why:"That’s the time in minutes. Divide by 60 again for hours."},
      {v:14400, tol:0, why:"That’s the TTL in seconds, not hours."},
      {v:24, tol:0, why:"24 hours is GitHub’s general warning for DNS changes. This record’s own TTL gives a shorter limit."}
    ]},
    {id:"t2u5-l3-x6", type:"mcq", q:"Sione moved his club’s site from GitHub Pages to another host and deleted the old repository. He hasn’t touched the DNS: `www` still has a CNAME to his GitHub Pages address (`your-username.github.io`, standing for his username), and he never verified the domain. What’s the risk, and what should he do?", options:[
      {t:"Someone else could claim the domain on GitHub and publish at his address; he should update the DNS records now (and verify domains in future)", ok:true, why:"A record pointing at GitHub with no site behind it is how takeovers happen. Updating the records for the new host closes the gap."},
      {t:"No risk: deleting the repository removed the domain everywhere", why:"Deleting the repository doesn’t change DNS. The record still sends visitors to GitHub."},
      {t:"The only risk is that the old site keeps showing", why:"The old site is gone; the danger is that a stranger’s site could appear at his address."},
      {t:"He should delete his GitHub account so the domain can’t be used", why:"That doesn’t touch the DNS record, which is the actual problem."}
    ]},
    {id:"t2u5-l3-x7", type:"mcq", q:"Fatima added `www.example.com` to her site ten minutes ago. The site loads, but **Enforce HTTPS** is greyed out. What’s the best next step?", options:[
      {t:"Wait: the certificate may not be ready yet (GitHub says up to 24 hours for the option); if it stays stuck, remove and re-add the domain", ok:true, why:"The certificate is requested after the DNS check passes and takes time. Removing and re-adding restarts a stuck process."},
      {t:"Buy a certificate and upload it to the repository", why:"GitHub Pages gets and renews a free Let’s Encrypt certificate itself; there’s nothing to upload."},
      {t:"Change every link on the site to `http://`", why:"That creates mixed content later. The fix is to wait for the certificate."},
      {t:"Delete the CNAME file in the repository", why:"That file tells Pages your domain. Deleting it breaks the domain setup."}
    ]}
   ],
   apply:{intro:"You don’t need to buy a domain for this lesson. The first two tasks work with any domain; the third is for when you own one.", tasks:[
     {t:"Look up real DNS records", how:[
       "In any browser, open an online DNS lookup tool, such as the one at dns.google.",
       "Look up your own `your-username.github.io` with type **A**. You should see GitHub Pages addresses beginning `185.199.`.",
       "Look up a site you use often with type **A**, then with type **AAAA**. Does it have IPv6 addresses too?",
       "Look up `www` in front of that site’s domain with type **CNAME**. Is `www` an alias for another name, or does it have its own A records?"
     ], write:"What each lookup returned, and one thing that surprised you."},
     {t:"Price a domain properly", how:[
       "Choose a name you might want for your site and check two different registrars.",
       "For each, note the first-year price, the **renewal** price, and whether privacy for your contact details is included.",
       "Work out the total for three years at each.",
       "Check the registrar offers two-step verification for your account."
     ], write:"The two three-year totals, and which you would choose and why."},
     {t:"If you own a domain: connect it to your site", how:[
       "Verify it: profile picture → **Settings → Pages → Add a domain**; create the TXT record shown; wait; select **Verify**.",
       "In your site’s repository: **Settings → Pages → Custom domain**, type `www.` plus your domain, select **Save**.",
       "At your DNS provider, remove any default parking records, then create the four A records for `@` and a CNAME for `www` pointing to `your-username.github.io`, using the values in GitHub’s article “Managing a custom domain for your GitHub Pages site”.",
       "Check with a DNS lookup tool. When the check mark appears in **Settings → Pages**, select **Enforce HTTPS**. Visit both `http://` and `https://` versions to see the redirect."
     ]}
   ], proof:"Notes from your DNS lookups, a three-year price comparison for a domain, and (if you own one) your site loading at your own domain over HTTPS."},
   read:[
     {book:"ghdocs", where:"GitHub Pages → Configuring a custom domain → “About custom domains and GitHub Pages” and “Managing a custom domain for your GitHub Pages site”"},
     {book:"ghdocs", where:"GitHub Pages → Configuring a custom domain → “Verifying your custom domain for GitHub Pages”"},
     {book:"ghdocs", where:"GitHub Pages → “Securing your GitHub Pages site with HTTPS”"},
     {book:"mdn", where:"Getting started → Your first website → “Publishing your website”, section “Getting hosting and a domain name”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u5-l4", title:"Fast, findable and accessible", minutes:60,
   hook:{q:"A phone photo straight from the camera is 4000 × 3000 pixels. On a web page it’s shown 800 × 600 pixels on screen. Roughly what share of the downloaded pixels does the visitor actually see?", options:["All of them","About half","About a quarter","About 4 in every 100"], answer:3,
     reveal:"About 4%. The shown image is a fifth as wide **and** a fifth as tall, so it uses 1/5 × 1/5 = 1/25 of the pixels. The other 96% are downloaded and thrown away, which is why images are the first thing to fix on a slow site. This lesson covers speed, then how your pages appear in search results and link previews, and a first accessibility check."},
   goals:[
     "Measure a page with PageSpeed Insights or Lighthouse and read the main results",
     "Resize, compress and choose formats for images, and add them with width, height, alt text and lazy loading where it helps",
     "Write a page title, meta description and Open Graph tags, and add a favicon",
     "Run a quick accessibility check with WAVE and a keyboard test, and fix common problems",
     "Add a helpful custom 404 page that works at any address"
   ],
   learn:[
    {h:"How fast is your site? Measure first", body:[
      {lead:"People leave slow pages, especially on phones and on slow or expensive mobile data. Before changing anything, measure."},
      "**PageSpeed Insights** (`pagespeed.web.dev`) is a free Google tool that works in any browser, including on a phone: paste your page’s address and select **Analyze**. It reports on mobile and desktop separately, and shows two kinds of results:",
      {list:[
        "**Lab data** from [[lighthouse|Lighthouse]], which loads your page in a simulated phone or computer and gives scores out of 100 for Performance, Accessibility, Best Practices and SEO. Google’s guide: **90 or above is good**, 50–89 needs improvement, below 50 is poor.",
        "**Field data** from real Chrome users over the previous 28 days. A small new site usually has none yet; that’s normal."
      ]},
      "Google’s [[core-web-vitals|Core Web Vitals]] are three field measures of real experience. For a good experience, web.dev gives these targets, met by at least 75% of page visits: **LCP** (Largest Contentful Paint, the main content appearing) within **2.5 seconds**; **INP** (Interaction to Next Paint, how quickly the page responds to taps and clicks) of **200 milliseconds** or less; **CLS** (Cumulative Layout Shift, things jumping around as the page loads) of **0.1** or less.",
      {tip:"Lighthouse scores vary a little from run to run because the test conditions vary. Don’t chase a number: read the list of suggestions under the score and fix the biggest ones."},
      "On a computer, Lighthouse is also built into Chrome and Edge: open DevTools ([[kbd:F12]], or [[kbd:Cmd]] + [[kbd:Option]] + [[kbd:I]] on a Mac), choose the **Lighthouse** panel and select **Analyze page load**."
    ]},
    {h:"Images: the usual culprit", body:[
      "An image has two sizes: its **dimensions** in pixels and its **file size** in bytes. A camera photo can be thousands of pixels wide and several megabytes. A web page rarely shows it wider than about 1,000–1,600 pixels.",
      {fig:'<svg viewBox="0 0 340 310"><text x="170" y="20" text-anchor="middle">From the camera: 4000 × 3000</text><rect class="d-soft" x="20" y="30" width="300" height="225" stroke-width="2"/><path class="d-soft" d="M80 30L80 255M140 30L140 255M200 30L200 255M260 30L260 255M20 75L320 75M20 120L320 120M20 165L320 165M20 210L320 210" stroke-width="1"/><rect class="d-rose" x="20" y="30" width="60" height="45" stroke-width="3"/><rect class="d-panel" x="84" y="44" width="116" height="20" stroke-width="0"/><text class="s" x="88" y="58">shown: 800 × 600</text><rect class="d-panel" x="132" y="134" width="136" height="24" stroke-width="0"/><text x="200" y="151" text-anchor="middle">12 million pixels</text><text x="20" y="280">On screen it fills 1 of these 25 boxes:</text><text x="20" y="300">0.48 million pixels, 4% of the photo.</text></svg>', alt:"A large rectangle representing a 4000 by 3000 pixel camera photo, 12 million pixels, divided into a 5 by 5 grid. One small box in the top-left corner, outlined in rose, is labelled shown: 800 by 600. Text below: on screen it fills 1 of these 25 boxes, 0.48 million pixels, 4% of the photo.", cap:"A fifth of the width times a fifth of the height is a twenty-fifth of the pixels."},
      {ol:[
        "**Resize** to about the largest size the page shows it. MDN notes that very few people can see any gain beyond twice the displayed size on sharp screens, so 2× is a sensible maximum.",
        "**Compress**: save at a sensible quality. MDN suggests a JPEG quality around 75% gives decent results. Free tools such as Squoosh (`squoosh.app`) work in the browser, even on a phone, and show before and after side by side.",
        "**Choose the format** for the content:"
      ]},
      {table:[
        ["Content","Good format","Why"],
        ["Photos","JPEG or WebP","Small files for smooth, detailed images; WebP is usually smaller"],
        ["Screenshots, flat colours, transparency","PNG or WebP","Keeps sharp edges and text crisp"],
        ["Logos, icons, diagrams","SVG","Drawn from shapes, so sharp at any size and tiny"]
      ]},
      "AVIF compresses even better and is supported by current versions of the major browsers; MDN’s compatibility tables show which versions. You can offer a modern format with a fallback using the `<picture>` element.",
      "Then add the image with its dimensions, so the browser reserves the right space before it arrives (no jumping layout, which helps CLS):",
      {code:'<img src="images/market-800.webp"\n  width="800" height="533"\n  alt="Fruit stalls at the Saturday market"\n  loading="lazy">', lang:"html", label:"HTML", weblab:"wl-image"},
      {code:'img {\n  max-width: 100%;\n  height: auto;\n}', lang:"css", label:"CSS", cap:"The image shrinks to fit narrow screens and keeps its shape; `width` and `height` still give the browser its proportions."},
      "`loading=\"lazy\"` tells the browser to wait until the visitor scrolls near the image. Use it for images further down the page, **not** for the main image at the top, which should load straight away.",
      {lab:"wl-image", t:"Practise: add an image with useful alt text"}
    ]},
    {h:"Titles and descriptions: how you look in search", body:[
      "Two lines in your page’s `<head>` decide how it’s introduced to the world:",
      {list:[
        "`<title>` names the page in the browser tab, in bookmarks and usually as the link in search results. Make it specific and different on each page: “Menu and opening times · Riverside Café”, not “Home”.",
        "The [[meta-description|meta description]] is a one- or two-sentence summary. Google says it **may** use it for the snippet under your link when it describes the page better than text taken from the page itself. Write a unique, accurate one for each important page."
      ]},
      "Google Search doesn’t use the old `keywords` meta tag, so skip it. There’s no trick that guarantees a place in results. Google’s starter guide suggests checking whether you’re included by searching for `site:` followed by your address (for example `site:your-username.github.io`), and notes that changes can take from a few hours to several months to show up. Optionally, **Google Search Console** shows how Google sees your pages.",
      "The basics that help people and search engines alike: a clear heading, words people would actually search for, descriptive link text, and descriptive file names such as `opening-times.html`."
    ]},
    {h:"Link previews and favicons", body:[
      "When someone shares your link in a chat or on social media, the app builds a preview card from [[open-graph|Open Graph]] tags: a protocol Facebook created that many apps now read. The protocol’s required tags are `og:title`, `og:type`, `og:image` and `og:url`; `og:description` and `og:image:alt` are worth adding.",
      {code:'<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1">\n  <title>Menu and opening times · Riverside Café</title>\n  <meta name="description"\n    content="Breakfast and lunch by the river. Open daily.">\n  <meta property="og:title" content="Riverside Café">\n  <meta property="og:type" content="website">\n  <meta property="og:url"\n    content="https://your-username.github.io/cafe/">\n  <meta property="og:image"\n    content="https://your-username.github.io/cafe/images/card.jpg">\n  <meta property="og:image:alt"\n    content="A table by the window with coffee and cake">\n  <meta property="og:description"\n    content="Breakfast and lunch by the river.">\n  <link rel="icon" href="favicon.png" type="image/png">\n</head>', lang:"html", label:"HTML head"},
      {list:[
        "Give `og:image` and `og:url` **full addresses** starting `https://`. A preview is built by another company’s computer, which doesn’t know where relative paths start.",
        "Apps cache previews. If you change the tags, an old preview may keep appearing for a while in apps where the link was shared before."
      ]},
      "A [[favicon]] is the small icon in the browser tab and bookmarks. Save a small square image (PNG works well; `.ico` and `.gif` also work) and link it with `<link rel=\"icon\">` as above. In a project site, keep the path relative (`favicon.png`): a path starting with `/` would look at the top of the whole github.io domain."
    ]},
    {h:"Accessibility: alt text, headings and language", body:[
      "An accessible site works for people who use [[screen-reader|screen readers]], keyboards, zoom or voice control. Most of it comes from good HTML, and it helps everyone, including search engines.",
      {list:[
        "**[[alt-text-web|Alt text]].** Every `<img>` needs an `alt` attribute. Describe what the image means in context (see {{alt-text}}). A purely decorative image gets an empty `alt=\"\"` so screen readers skip it. An image that is a link describes where the link goes: a logo linking home might be `alt=\"Riverside Café home\"`.",
        "**Headings in order.** One `<h1>` naming the page, then `<h2>` for sections, `<h3>` inside those. Screen reader users jump between headings like a table of contents.",
        "**Language.** `<html lang=\"en\">` (or your page’s language) lets screen readers pronounce it correctly.",
        "**Link text that makes sense alone:** “Read the menu”, not “click here”.",
        "**[[contrast|Contrast]].** WCAG asks for at least 4.5:1 between normal text and its background."
      ]},
      {lab:"wl-headings", t:"Practise: put headings in a sensible order"}
    ]},
    {h:"A ten-minute accessibility check", body:[
      {ol:[
        "**WAVE** (`wave.webaim.org`, free from WebAIM): enter your address. It marks the page with icons for errors (such as missing alt text or empty links), contrast problems and alerts. There are also WAVE extensions for Chrome, Firefox and Edge.",
        "**Keyboard test** (computer): click the address bar, then press [[kbd:Tab]] repeatedly. Can you see where you are each time? Do you reach every link and button in a sensible order? Does [[kbd:Enter]] follow a link? [[kbd:Shift]] + [[kbd:Tab]] goes back. You should never get stuck.",
        "**Zoom** to 200% ([[kbd:Ctrl]] + [[kbd:+]], or [[kbd:Cmd]] + [[kbd:+]] on a Mac; pinch on a phone). Is everything still readable?",
        "**Optional on a phone:** turn on VoiceOver (iPhone) or TalkBack (Android) and listen to your page’s headings and images."
      ]},
      {warn:"Tools find only some problems. W3C’s own quick-check guide says a page “could seem to pass these checks, yet still have significant accessibility barriers”. WAVE can tell you an image has alt text, but not whether the text is right. That takes a person."}
    ]},
    {h:"A custom 404 page", body:[
      "A [[404-page|404 page]] is what visitors see when an address doesn’t exist: a mistyped link, or a page you renamed. GitHub Pages shows a plain one by default. To make your own, create a file named `404.html` at the top of your publishing source (**Add file → Create new file**).",
      {code:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1">\n  <title>Page not found · Riverside Café</title>\n  <link rel="stylesheet" href="/cafe/style.css">\n</head>\n<body>\n  <h1>Sorry, that page isn’t here</h1>\n  <p>It may have moved. Try the\n    <a href="/cafe/">home page</a>\n    or the <a href="/cafe/menu.html">menu</a>.</p>\n</body>\n</html>', lang:"html", label:"404.html (project site called cafe)"},
      "Notice the paths **do** start with `/cafe/` here, unlike everywhere else. The 404 page is shown at whatever wrong address the visitor typed, such as `/cafe/old/menu`. A relative `style.css` would be looked for at `/cafe/old/style.css` and fail. Paths that include the repository name work from any address. (On a user site or a custom domain, use `/style.css` instead.)",
      {key:"Fast pages, honest titles and descriptions, alt text, ordered headings and a helpful 404 page: small habits that make a site feel professional."}
    ]}
   ],
   try:[
    {id:"t2u5-l4-x1", type:"number", q:"Mei’s gallery page has 12 photos straight from her phone, about 4 MB each. She resizes and compresses each to about 250 KB (0.25 MB). How many MB does a visitor no longer have to download?", answer:45, tol:0.1, unit:"MB", why:"Before: 12 × 4 = 48 MB. After: 12 × 0.25 = 3 MB. Saved: 48 − 3 = **45 MB**, on every visit to that page.", wrongs:[
      {v:3, tol:0.05, why:"That’s the new total size, not the saving."},
      {v:48, tol:0.05, why:"That’s the original total. The photos still have to be downloaded, just much smaller."},
      {v:3.75, tol:0.05, why:"That’s the saving for one photo (4 − 0.25). Multiply by 12."}
    ]},
    {id:"t2u5-l4-x2", type:"match", q:"Match each image with the format that suits it best.", pairs:[
      ["A photo of a sunset over hills","JPEG or WebP","Photos compress well in these formats."],
      ["A screenshot of a settings menu with small text","PNG","PNG keeps the sharp edges of text and flat colours."],
      ["The café’s logo, made of simple shapes","SVG","Drawn from shapes, so it stays sharp at any size and is tiny."],
      ["A photo where you want the smallest file current browsers support","AVIF, with a fallback","AVIF compresses better still; a `<picture>` fallback covers older browsers."]
    ]},
    {id:"t2u5-l4-x3", type:"spot", q:"Lucía’s café is a project site at `your-username.github.io/cafe/`. Here is part of her page’s head. Tap every line that **won’t work as intended**.", ask:"won’t work as intended", mono:true, parts:[
      {t:"<html lang=\"en\">", flag:false, why:"Correct: sets the language for screen readers and search engines."},"\n",
      {t:"<title>Home</title>", flag:true, why:"It works technically, but “Home” says nothing in a tab, a bookmark or a search result. Use something like “Riverside Café · Breakfast and lunch by the river”."},"\n",
      {t:"<meta name=\"description\" content=\"Breakfast and lunch by the river. Open daily 8:00–16:00.\">", flag:false, why:"A clear, specific summary: what Google may show as the snippet."},"\n",
      {t:"<meta property=\"og:image\" content=\"images/card.jpg\">", flag:true, why:"Preview builders run on other companies’ computers and need a full `https://` address for the image."},"\n",
      {t:"<link rel=\"icon\" href=\"/favicon.png\">", flag:true, why:"The leading slash points to `your-username.github.io/favicon.png`, outside the project. Use `favicon.png`."},"\n",
      {t:"<link rel=\"stylesheet\" href=\"style.css\">", flag:false, why:"A relative path inside the project: it works."}
    ]},
    {id:"t2u5-l4-x4", type:"mcq", q:"The café’s logo appears at the top of every page and is a link back to the home page. What should its alt text be?", options:[
      {t:"`alt=\"Riverside Café home\"`", ok:true, why:"When an image is the only content of a link, its alt text is the link’s name, so it should say where the link goes."},
      {t:"`alt=\"\"`", why:"Empty alt is for decorative images. Here it would leave the link with no name at all."},
      {t:"`alt=\"logo.png\"`", why:"A file name tells listeners nothing useful."},
      {t:"`alt=\"Image of a blue and white logo with a coffee cup\"`", why:"Screen readers already say it’s an image or link; what matters is the link’s purpose, not the drawing."}
    ]},
    {id:"t2u5-l4-x5", type:"sort", q:"Kenji ran WAVE on his site. Which problems can an automated checker reliably find, and which need a person to judge?", buckets:["A tool can find it","Needs human judgement"], items:[
      {t:"An image with no alt attribute at all", b:0, why:"The tool can see the attribute is missing."},
      {t:"Grey text on a white background below 4.5:1 contrast", b:0, why:"Contrast between solid colours is a calculation tools do well."},
      {t:"A link with no text inside it", b:0, why:"Empty links are easy to detect in the HTML."},
      {t:"Alt text that describes the wrong photo", b:1, why:"A tool can see alt text exists, but not whether it matches the image."},
      {t:"Keyboard focus that jumps around in a confusing order", b:1, why:"Whether the order makes sense needs someone to tab through and judge."},
      {t:"A page title that doesn’t describe the page", b:1, why:"A tool can see a title exists; only a person can tell if it’s meaningful."}
    ]},
    {id:"t2u5-l4-x6", type:"mcq", q:"Ana runs PageSpeed Insights twice in a row on the same page and gets a Performance score of 84, then 88. What should she conclude?", options:[
      {t:"Lab scores vary a little between runs; she should focus on the suggestions listed under the score", ok:true, why:"Simulated tests vary with conditions. The suggestions (such as oversized images) show what to fix."},
      {t:"Her site got faster between the two runs", why:"She changed nothing; the difference comes from test conditions."},
      {t:"The tool is broken and can’t be trusted", why:"Small variation is expected and documented. The tool is still useful."},
      {t:"She must reach 100 before publishing", why:"90 or above counts as good. Perfect scores aren’t needed, and real visitors’ experience matters most."}
    ]},
    {id:"t2u5-l4-x7", type:"mcq", q:"Tomás made a `404.html` for his project site `your-username.github.io/club/` with `<link rel=\"stylesheet\" href=\"style.css\">`. At `/club/missing` it looks fine, but at `/club/events/2025/old` it has no styles. Why?", options:[
      {t:"The relative path is worked out from the wrong address, so the browser asks for `/club/events/2025/style.css`", ok:true, why:"The 404 page is shown at whatever address was requested. Using `/club/style.css` works from anywhere."},
      {t:"GitHub Pages never applies CSS to 404 pages", why:"It serves your 404.html like any page; the CSS fails only because of the path."},
      {t:"The style sheet must be inside the 404 page", why:"An inline style sheet would work, but the real cause is the relative path. Fixing the path is simpler."},
      {t:"The browser cached an old version", why:"The difference depends on the address’s depth, which points to path resolution, not caching."}
    ]}
   ],
   apply:{intro:"Use your site from Lesson 2. Make each change through the GitHub website (pencil → edit → commit) and check the live site after each deploy.", tasks:[
     {t:"Measure your site", how:[
       "Open pagespeed.web.dev in any browser (it works on a phone) and paste your site’s address. Select **Analyze**.",
       "Note the **Mobile** Performance and Accessibility scores. Open **Desktop** too.",
       "Read the first three suggestions under Performance. Which mention images?"
     ], write:"Your scores and the top suggestions, before you change anything."},
     {t:"Shrink an image and add it properly", how:{
       win:["Open squoosh.app in your browser and drop in a large photo.","Under **Resize**, set the width to about twice the size your page shows it (for example 1600). Choose **WebP** or **MozJPEG** and a quality around 75. Compare the two halves of the preview.","Download it, rename it with lower case and hyphens (such as `market-1600.webp`), and upload it to your `images` folder on GitHub.","Edit your page: add `width`, `height` and good `alt` text, as in this lesson. Add `loading=\"lazy\"` only if the image is further down the page."],
       mac:["Open squoosh.app in your browser and drop in a large photo.","Under **Resize**, set the width to about twice the size your page shows it (for example 1600). Choose **WebP** or **MozJPEG** and a quality around 75. Compare the two halves of the preview.","Download it, rename it with lower case and hyphens, and upload it to your `images` folder on GitHub.","Edit your page: add `width`, `height` and good `alt` text. Add `loading=\"lazy\"` only if the image is further down the page."],
       chromeos:["Open squoosh.app in Chrome and drop in a large photo from the Files app.","Under **Resize**, set the width to about twice the size your page shows it. Choose **WebP** or **MozJPEG**, quality around 75.","Download it, rename it with lower case and hyphens, and upload it to your `images` folder on GitHub.","Edit your page: add `width`, `height` and good `alt` text."],
       phone:["Open squoosh.app in Safari (iPhone) or Chrome (Android) and tap to choose a photo.","Under **Resize**, set the width (for example 1600), then choose **WebP** or **MozJPEG**, quality around 75. Download the result.","**iPhone:** the download goes to the Files app (Downloads). **Android:** to your Downloads folder (names vary by phone maker).","On GitHub, open your `images` folder, **Add file → Upload files**, pick the new file, and commit. Then edit the page’s `<img>` to match the file name exactly, with `width`, `height` and `alt`."]
     }},
     {t:"Add a title, description, preview tags, a favicon and a 404 page", how:[
       "Edit `index.html`: give it a specific `<title>` and a `<meta name=\"description\">`. Add the Open Graph tags from this lesson with your own full addresses.",
       "Make a small square PNG icon, upload it as `favicon.png`, and add the `<link rel=\"icon\">` line.",
       "Create `404.html` at the top level using the lesson’s example, with paths that include your repository name.",
       "After the deploy, visit a made-up address on your site to see your 404 page. Send your site’s link to yourself in a messaging app to see the preview card (if it shows an old version, the app has cached it)."
     ]},
     {t:"Run an accessibility check", how:[
       "Open wave.webaim.org, enter your address, and look at the errors and contrast results. Fix what you can.",
       "On a computer, do the keyboard test: [[kbd:Tab]] through every link, watching where the focus goes.",
       "On a phone, zoom in and check everything stays readable. Optionally, try VoiceOver (iPhone: **Settings → Accessibility → VoiceOver**) or TalkBack (Android: **Settings → Accessibility → TalkBack**; the path varies by phone maker).",
       "Run PageSpeed Insights again and compare with your first scores."
     ], write:"What WAVE found, what you fixed, and your before-and-after scores."}
   ], proof:"Before-and-after PageSpeed scores, a resized image with width, height and alt text, a page with a specific title, description, preview tags and favicon, a working custom 404 page, and notes from your WAVE and keyboard checks."},
   read:[
     {book:"mdn", where:"Core → Structuring content with HTML → “What’s in the head? Web page metadata”"},
     {book:"mdn", where:"Extensions → Web performance → “Multimedia: Images”"},
     {book:"mdn", where:"Core → Accessibility → “Accessibility tooling and assistive technology”"},
     {book:"ghdocs", where:"GitHub Pages → “Creating a custom 404 page for your GitHub Pages site”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u5-l5", title:"Caring for a live site", minutes:50,
   hook:{q:"Your site has been online for three years and you haven’t touched it. Which of these is most likely to have stopped working?", options:["Your HTML, because browsers dropped support for it","Some of your links to other people’s websites","Your CSS, because the language changed","Your GitHub Pages site, deleted for being inactive"], answer:1,
     reveal:"Links to other sites. Browsers go to great lengths to keep old HTML and CSS working, but other people move, rename and delete pages all the time, so outside links slowly break. A live site needs light, regular care: checking links, keeping facts current, keeping backups, handling visitors’ data carefully and staying secure. This lesson gives you a routine for all of it."},
   goals:[
     "Find and fix broken links, including links to pages you’ve renamed",
     "Keep a site current with a simple maintenance routine",
     "Use the repository’s history as a backup, keep a second copy, and restore an earlier version of a file",
     "Describe what analytics, cookies and contact forms mean for visitors’ privacy, without assuming one country’s law",
     "Keep secrets and personal data out of a public repository, secure your accounts, and work through a calm checklist when the site breaks"
   ],
   learn:[
    {h:"A site is a garden, not a statue", body:[
      {lead:"Publishing is the start, not the end. A little care, regularly, keeps a site trustworthy."},
      "Opening hours change, events pass, people leave the club, and other websites move. A site with an out-of-date price or a dead link loses visitors’ trust quickly. The good news: a static site needs far less care than a dynamic one. There’s no server software of yours to update, no database to back up.",
      {table:[
        ["How often","What to do"],
        ["After every change","Open the live page on a phone and a computer; check the Actions run is green"],
        ["Monthly","Run a link check; read the home page as a newcomer would; update dates and events"],
        ["Every few months","Run PageSpeed Insights and WAVE again; download a backup copy"],
        ["Yearly","Check the domain’s renewal date and payment card; review who has access; reread your privacy note"]
      ]},
      {tip:"Put these in your calendar as repeating reminders now, while you remember. A five-minute check each month beats a weekend of repairs after two years."}
    ]},
    {h:"Broken links", body:[
      "A [[broken-link|broken link]] leads to an error, usually a 404. Links to your **own** pages break when you rename or move a file, or change capitals. Links to **other** sites break when those sites reorganise or disappear.",
      {list:[
        "**Small site:** click through every link yourself once a month.",
        "**Bigger site:** use a link checker. The W3C Link Checker (`validator.w3.org/checklink`) is free and checks a page’s links online; some browser extensions do the same.",
        "**Fix** by updating the address, linking to an archived copy, or removing the link if the content is gone for good."
      ]},
      "**Renaming your own page?** Other sites, search engines and people’s bookmarks may still use the old address. GitHub Pages doesn’t let you set up server redirects, so the kind solution is to leave a small page at the old name that points to the new one:",
      {code:'<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport"\n    content="width=device-width, initial-scale=1">\n  <title>This page has moved · Riverside Café</title>\n</head>\n<body>\n  <h1>This page has moved</h1>\n  <p>Our menu now lives at\n    <a href="food.html">the new menu page</a>.</p>\n</body>\n</html>', lang:"html", label:"menu.html (the old address)", weblab:"wl-link", cap:"Then update your own links to point straight to `food.html`."}
    ]},
    {h:"Keeping content and code current", body:[
      {list:[
        "**Facts first.** Dates, prices, times, names and contact details go stale fastest. A line such as “Last updated: March 2026” tells visitors how fresh the page is (and reminds you).",
        "**Small changes, checked.** Change one thing, commit with a clear message, check the live site. If something breaks, you know which change did it.",
        "**Outside code.** If your page loads scripts, fonts or widgets from other sites, each is something that can change or vanish. Use as few as you need, from sources you trust.",
        "**Test widely.** Look at your site in at least two browsers and on a phone after bigger changes."
      ]}
    ]},
    {h:"Backups: the repository remembers", body:[
      "Your repository is already a [[backup]] with full [[version-history|version history]]: every commit is kept. To see a file’s past, open it on GitHub and select **History**. Each entry shows what changed and when, with your commit message.",
      "**To restore an earlier version** of one file through the website: open the old version from History, copy its contents, then open the current file, select the pencil, paste, and commit with a message such as “Restore menu from 3 May”. The mistake stays in the history too, which is fine: history is a record, not a judgement.",
      "But one copy, in one account, isn’t a full backup plan ({{backup}}). An account lockout or a deleted repository could take it away. Every few months, on the repository’s main page, select **Code → Download ZIP** and keep that file somewhere else, such as cloud storage or an external drive.",
      {warn:"Some important things aren’t in the repository at all: your DNS records, the registrar login and renewal date, the Pages settings, and any form or analytics service you signed up for. Keep a short private note of them (not in the public repository), so you or a successor can rebuild the setup."}
    ]},
    {h:"Privacy: what your site collects", body:[
      "A plain static site of your own files sets no cookies and collects no form data. One thing does happen: GitHub states that when a Pages site is visited, the visitor’s IP address is logged and stored for security purposes. Other hosts keep similar logs; their privacy statements say what and for how long.",
      "Adding things changes the picture. [[web-analytics|Analytics]] scripts, embedded videos and maps, social media buttons and fonts loaded from other servers can set [[cookie|cookies]] or send visitors’ data (such as their IP address and the page they’re on) to other companies.",
      "**The law depends on where you and your visitors are, and it changes.** As one example, the EU’s official guidance for businesses says sites need visitors’ consent before setting cookies used for things like analytics or behavioural advertising, while cookies strictly necessary for a service the visitor asked for (such as a shopping basket) don’t need it. Other countries have different rules. This lesson isn’t legal advice; for a site with real visitors, read the guidance from the data-protection authority where you are ({{data-protection-laws}}).",
      {list:[
        "**Collect less.** The simplest privacy plan is not to collect data you don’t need. Many small sites need no analytics at all.",
        "**If you add analytics,** prefer a tool that counts visits without tracking people across sites, and read what it collects.",
        "**A [[cookie-banner|cookie banner]] isn’t magic.** Where consent is required, the cookies must not be set until the visitor agrees. The EU’s guidance also says withdrawing consent must be as easy as giving it, and many regulators expect refusing to be as easy as accepting.",
        "**Say what you do.** A short [[privacy-policy|privacy notice]] in plain words: what you collect, why, which services receive it, and how to contact you."
      ]}
    ]},
    {h:"Contact forms and spam", body:[
      "A static site can’t receive form submissions by itself: there’s no program on the server to store them. Your options:",
      {table:[
        ["Option","Good","Watch out"],
        ["Show an email address","Simple, no extra service","Spam: bots harvest addresses from pages"],
        ["Link to a hosted form (for example Google Forms or Microsoft Forms)","Free; replies collected for you","Visitors’ answers go to that company"],
        ["A form service your page sends to (for example Formspree, or Netlify Forms on Netlify)","Looks like part of your site","Free plans have limits; it stores visitors’ messages"]
      ]},
      "Whatever you choose, mention it in your privacy notice, because visitors’ names and messages are [[personal-data|personal data]]. Never put your home address or private phone number on a public site unless you truly need to.",
      "**Spam** finds every public form. Form services usually offer protections: a [[honeypot-field|honeypot field]] (a field hidden from people, so only bots fill it in and get rejected), a challenge such as a CAPTCHA, and limits on how often one sender can submit. Turn them on. Don’t try to block spam by obscuring an email address with tricks that also confuse screen readers."
    ]},
    {h:"Security basics for a static site", body:[
      {list:[
        "**No secrets in the repository.** A public repository shows every file and every past version. Never commit passwords, API keys or tokens (a [[secret-key|secret key]] is like a password for a service). GitHub may block an upload that contains a recognised secret (push protection), but don’t rely on that.",
        "**If a secret does get committed,** treat it as stolen: revoke it or change it at the service immediately. Deleting the file isn’t enough, because the old version stays in the history.",
        "**Secure your accounts.** Use a unique password and two-step verification on GitHub, your registrar and any form service. Whoever controls those controls your site. Keep GitHub’s recovery codes safe.",
        "**HTTPS always.** Keep **Enforce HTTPS** on, and use `https://` for anything you load from elsewhere.",
        "**Be choosy about outside scripts.** A script you load from another site runs with full power on your page. MDN’s advice for website security starts with never trusting data that comes from the browser; for a static site, the main lesson is to add only code you understand from sources you trust."
      ]}
    ]},
    {h:"When it breaks: a calm checklist", body:[
      "Something’s wrong and visitors are telling you. Breathe, then go from the outside in:",
      {fig:'<svg viewBox="0 0 340 452"><defs><marker id="u25a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="6" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">1. Is it just you?</text><text class="s" x="170" y="49" text-anchor="middle">private window, mobile data, other device</text><path class="d-ink" d="M170 62L170 78" stroke-width="2" marker-end="url(#u25a5)"/><rect class="d-lup" x="20" y="80" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="103" text-anchor="middle">2. Is GitHub having problems?</text><text class="s" x="170" y="123" text-anchor="middle">check githubstatus.com</text><path class="d-ink" d="M170 136L170 152" stroke-width="2" marker-end="url(#u25a5)"/><rect class="d-gold" x="20" y="154" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="177" text-anchor="middle">3. Did the last deploy fail?</text><text class="s" x="170" y="197" text-anchor="middle">Actions tab: read the log, re-run</text><path class="d-ink" d="M170 210L170 226" stroke-width="2" marker-end="url(#u25a5)"/><rect class="d-gold" x="20" y="228" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="251" text-anchor="middle">4. Did a recent change break it?</text><text class="s" x="170" y="271" text-anchor="middle">a file’s History: compare, restore</text><path class="d-ink" d="M170 284L170 300" stroke-width="2" marker-end="url(#u25a5)"/><rect class="d-sage" x="20" y="302" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="325" text-anchor="middle">5. Using your own domain?</text><text class="s" x="170" y="345" text-anchor="middle">renewal, DNS records, certificate</text><path class="d-ink" d="M170 358L170 374" stroke-width="2" marker-end="url(#u25a5)"/><rect class="d-rose" x="20" y="376" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="399" text-anchor="middle">6. Still stuck? Ask for help</text><text class="s" x="170" y="419" text-anchor="middle">GitHub Community: Pages category</text></svg>', alt:"A checklist of six boxes from top to bottom. 1, is it just you? Try a private window, mobile data or another device. 2, is GitHub having problems? Check githubstatus.com. 3, did the last deploy fail? Actions tab: read the log, re-run. 4, did a recent change break it? A file’s History: compare, restore. 5, using your own domain? Check renewal, DNS records and certificate. 6, still stuck? Ask for help in the GitHub Community Pages category.", cap:"Work from the outside in: the first checks are the quickest, and each one rules out a whole group of causes."},
      {list:[
        "**Just you?** If it works in a private window or on mobile data, it’s your cache or your network, not the site.",
        "**GitHub’s side?** The status page lists incidents. If there is one, wait, then re-run the deploy.",
        "**Failed deploy?** The log names the step that failed. GitHub-side errors and timeouts usually pass with a re-run or a fresh commit.",
        "**Your change?** Compare the last commit with the one before; restore the old version of the file if needed.",
        "**Domain?** An expired registration, a changed DNS record or a missing `CNAME` file all show up here (Lesson 3).",
        "**Asking for help:** say what you expected, what happened, the exact error text, your site’s address and what you’ve tried. GitHub’s own troubleshooting article points to the Pages category of GitHub Community discussions."
      ]},
      {key:"Regular small checks, a second backup copy, no secrets in the repository, and a calm outside-in checklist: that’s how a hobby site stays healthy for years."}
    ]}
   ],
   try:[
    {id:"t2u5-l5-x1", type:"mcq", q:"Hana renamed `menu.html` to `food.html` and updated her own links. A local newspaper’s article still links to `menu.html`. What’s the kindest fix on GitHub Pages?", options:[
      {t:"Keep a small `menu.html` that says the page has moved and links to `food.html`", ok:true, why:"GitHub Pages has no server redirects, so a small page at the old address keeps outside links and bookmarks working."},
      {t:"Ask everyone who ever linked to the page to change their link", why:"She can’t reach everyone, and bookmarks and search results would still break."},
      {t:"Do nothing: search engines will sort it out", why:"Search engines may update over time, but the newspaper’s link and people’s bookmarks will show a 404."},
      {t:"Rename `food.html` back and give up on the new name", why:"That works but isn’t necessary: a forwarding page keeps both."}
    ]},
    {id:"t2u5-l5-x2", type:"sort", q:"Oluwaseun is writing down how to rebuild his site from scratch. Which things are saved in the repository’s history, and which must he note separately (privately)?", buckets:["In the repository","Note it separately"], items:[
      {t:"index.html and the other pages", b:0, why:"Every committed file and its past versions are in the repository."},
      {t:"The images folder", b:0, why:"Uploaded images are committed files like any other."},
      {t:"The CNAME file with his domain", b:0, why:"Saving a custom domain (when publishing from a branch) commits this file."},
      {t:"The DNS records at his DNS provider", b:1, why:"DNS lives with the DNS provider, not in GitHub."},
      {t:"The registrar login and the renewal date", b:1, why:"These are with the registrar; a private note helps him (or a successor) find them."},
      {t:"The settings of his contact-form service", b:1, why:"The form service keeps its own settings and stored messages."}
    ]},
    {id:"t2u5-l5-x3", type:"mcq", q:"Dmitri committed a file containing an API key for a map service to his public repository. Ten minutes later he deleted the file in a new commit. Is he safe now?", options:[
      {t:"No: the key is still in the history, so he should revoke it at the map service and create a new one", ok:true, why:"Anyone can open the earlier commit. A leaked key must be treated as stolen and replaced."},
      {t:"Yes: deleting the file removes it from GitHub", why:"Deleting creates a new commit; the old version, with the key, is still in the history."},
      {t:"Yes, as long as the repository has few visitors", why:"Automated tools scan public repositories for keys constantly. Visitor numbers don’t matter."},
      {t:"He should make the repository private and keep the key", why:"On the free plan that would also stop Pages, and the key may already have been copied. Revoke it."}
    ]},
    {id:"t2u5-l5-x4", type:"mcq", q:"Ana wants to add a visitor-counting script to her choir’s site, which has visitors from several countries. Which statement is the most accurate?", options:[
      {t:"Whether she needs consent depends on what the script stores or sends and on the laws that apply; in the EU, for example, analytics cookies generally need consent first", ok:true, why:"Rules differ by place and by what the tool does. The EU’s guidance names analytics cookies among those that need consent before being set."},
      {t:"Every website everywhere must show a cookie banner", why:"Requirements depend on the law and on what the site does. A plain static site that sets no cookies may need no banner at all."},
      {t:"A cookie banner makes any tracking legal", why:"Where consent is required, cookies mustn’t be set until the visitor agrees, and withdrawing consent must be easy. A banner alone doesn’t do that."},
      {t:"Privacy laws only apply to big companies", why:"Many data-protection laws apply to any organisation or person running a site that handles personal data, with some exceptions that vary by country."}
    ]},
    {id:"t2u5-l5-x5", type:"spot", q:"Mei is about to make her club’s repository public. Here is its file list. Tap every file that shouldn’t be in a public repository.", ask:"shouldn’t be public", mono:true, parts:[
      {t:"index.html", flag:false, why:"The site’s home page: meant to be public."},"\n",
      {t:"style.css", flag:false, why:"Every visitor downloads it anyway."},"\n",
      {t:"config.js   (contains apiKey = \"sk_live_…\")", flag:true, why:"A live secret key. Remove it and revoke it at the service; keys must never be committed."},"\n",
      {t:"members.csv   (names, emails, phone numbers)", flag:true, why:"Personal data. A public repository shows it to anyone, even if no page links to it."},"\n",
      {t:"images/logo.svg", flag:false, why:"The club’s logo is part of the site."},"\n",
      {t:"404.html", flag:false, why:"The custom error page: meant to be public."},"\n",
      {t:"notes/committee-minutes-private.txt", flag:true, why:"Private notes don’t belong in a public repository."}
    ]},
    {id:"t2u5-l5-x6", type:"order", q:"Visitors say Sione’s site is down. Put his checks in the order of this lesson’s outside-in checklist.", items:[
      {t:"Open the site in a private window and on mobile data", why:"First rule out his own cache or network: it may not be down at all."},
      {t:"Check GitHub’s status page for incidents", why:"If GitHub has a problem, nothing in his repository will fix it."},
      {t:"Open the Actions tab and read the latest deploy’s log", why:"A failed deploy is the next most likely cause, and the log says why."},
      {t:"Look at his most recent commit and compare it with the one before", why:"If the deploy worked, his last change may have broken the page."},
      {t:"Ask in the GitHub Community Pages discussions, with details", why:"After the checks, a clear question with the error text gets the best help."}
    ]},
    {id:"t2u5-l5-x7", type:"match", q:"Match each maintenance problem with the best tool or place to check.", pairs:[
      ["Some links on the site lead to 404s","A link checker such as the W3C Link Checker","It follows each link and reports the broken ones."],
      ["Pages have become slow to load","PageSpeed Insights","It measures performance and lists what to fix, often images."],
      ["New images may be missing alt text","WAVE","It flags images without alt text and other errors."],
      ["The menu page looked better last month","The file’s History on GitHub","Every committed version is kept; you can restore one."],
      ["The site vanished the day after the domain’s renewal date","The registrar account","An expired registration stops the domain working."]
    ]}
   ],
   apply:{intro:"Set up the habits that keep your site healthy. All of this works through a browser; the backup step needs somewhere to keep a file.", tasks:[
     {t:"Check your links and make a maintenance calendar", how:[
       "Click every link on your site, or paste a page’s address into the W3C Link Checker (validator.w3.org/checklink). Fix anything broken.",
       "Add repeating reminders to your calendar: monthly (links, dates, events), every three months (PageSpeed, WAVE, backup), yearly (domain renewal, account access, privacy note).",
       "Add a “Last updated” line to your home page if your content changes often."
     ], write:"Broken links you found and fixed, and the reminders you set."},
     {t:"Make a backup and practise a restore", how:{
       win:["On your repository’s main page, select **Code → Download ZIP**. Move the ZIP into a cloud storage folder or onto an external drive.","Open a page file on GitHub and select **History**. Open an earlier version and compare it with the current one.","Practise restoring: copy an old version’s contents, edit the current file, paste, and commit with a message such as “Restore earlier home page text”. Then restore the latest version the same way."],
       mac:["On your repository’s main page, select **Code → Download ZIP**. Move the ZIP into a cloud storage folder or onto an external drive.","Open a page file on GitHub and select **History**. Open an earlier version and compare it with the current one.","Practise restoring: copy an old version’s contents, edit the current file, paste, and commit. Then restore the latest version the same way."],
       chromeos:["On your repository’s main page, select **Code → Download ZIP**. In the Files app, move the ZIP into Google Drive or onto an external drive.","Open a page file on GitHub and select **History**. Open an earlier version and compare it with the current one.","Practise restoring: copy an old version’s contents, edit the current file, paste, and commit. Then restore the latest version."],
       phone:["On the repository’s main page in your phone’s browser, tap **Code → Download ZIP** (if you don’t see it, use **Request Desktop Website** from Safari’s page menu in the address bar, or **Desktop site** in Chrome’s **⋮** menu).","**iPhone:** the ZIP goes to Files → Downloads; move it to iCloud Drive or another cloud service. **Android:** it goes to Downloads; move it to Google Drive or another cloud service (app names vary by phone maker).","Open a page file on GitHub and tap **History** to see its earlier versions. Practise restoring one through the pencil editor, then restore the latest."]
     }},
     {t:"Do a privacy and security check", how:[
       "Look through every file in your repository (and the README). Remove anything personal or secret; if you find a secret, revoke it at the service.",
       "Make sure two-step verification is on for GitHub, and for your registrar and any form service you use.",
       "List everything your site loads from other servers (fonts, scripts, videos, maps, analytics). Remove what you don’t need.",
       "Write a short privacy note for your site: what it collects (if anything), which outside services it uses, and how to contact you. Keep it honest and simple."
     ], write:"What you removed or changed, and your privacy note."}
   ], proof:"A link-checked site, maintenance reminders in your calendar, a downloaded ZIP backup stored in a second place, a practised restore from History, two-step verification on your accounts, and a short privacy note on your site."},
   read:[
     {book:"ghdocs", where:"GitHub Pages → “Troubleshooting custom domains and GitHub Pages” and “Troubleshooting 404 errors for GitHub Pages sites”"},
     {book:"ghdocs", where:"GitHub Actions → Manage workflow runs → “Re-running workflows and jobs”", note:"How to re-run a failed Pages deploy from the Actions tab."},
     {book:"mdn", where:"Background reading: Extensions → Server-side websites → First steps → “Website security”", note:"Written for server-side sites; the sections on HTTPS and on not trusting browser data apply to everyone."}
   ]
  }
  ],
  checkpoint:["t2u5-q02","t2u5-q05","t2u5-q11","t2u5-q14","t2u5-q17","t2u5-q20","t2u5-q23","t2u5-q26","t2u5-q30","t2u5-q33","t2u5-q38","t2u5-q42"],
  codex:[
   {id:"hosting-options", title:"Web hosting options", aka:["hosting","web host","free hosting","GitHub Pages","Netlify","Cloudflare Pages","shared hosting"], tags:["web","publishing"],
    summary:"Where a website’s files live: free static hosts, paid hosting for dynamic sites, and how to compare them by limits, rules and real costs.",
    levels:{
     starter:[
      "A website’s files have to live on a computer that is always on and connected, so anyone can visit at any time. Renting space on such a computer is called [[hosting]].",
      "Think of it like a market stall: you could build your own shop (run your own server), but most people rent a stall in a market that already has a roof, power and opening hours.",
      {list:[
        "**Free static hosts**, such as GitHub Pages, Netlify and Cloudflare Pages, serve ready-made HTML, CSS, JavaScript and image files. Perfect for portfolios, clubs, class projects and documentation.",
        "**Paid hosting** (MDN mentions around $5–10 a month for basic plans) runs programs and databases, for shops, logins and blogs that build pages on the server.",
        "**Website builders** let you make pages without code, usually with a monthly fee for your own domain."
      ]},
      {key:"Start with the simplest host that does the job. A static site can move to another host in minutes."}
     ],
     builder:[
      "Compare hosts on four things: what they can run, their limits, their rules, and their costs over time.",
      {table:[
        ["Host (free plan)","Publishing","Notable limits (as published, November 2026)"],
        ["GitHub Pages","From a repository; web upload or Git","Public repositories on GitHub Free; site up to 1 GB; soft 100 GB/month bandwidth; 10-minute deploy timeout"],
        ["Netlify","Git repository or file upload","300 credits a month covering deploys, bandwidth, requests and forms; site pauses when they run out"],
        ["Cloudflare Pages","Git repository or Direct Upload","500 builds a month; 20,000 files; 25 MiB per file"]
      ]},
      "**Rules matter as much as numbers.** GitHub Pages isn’t allowed as free hosting for an online business, e-commerce or commercial software as a service, and shouldn’t be used for sensitive transactions such as passwords or card numbers. Netlify’s free plan has hard monthly limits that can’t incur charges. Cloudflare’s Pages documentation now suggests starting new projects on its Workers product, which also serves static files.",
      "**Costs.** Free hosting plus a free subdomain costs nothing. A custom domain adds a yearly fee (MDN: typically $5–15; renewals are often higher than first-year offers). Paid hosting adds a monthly fee.",
      {tip:"Always check the provider’s own pricing or limits page before deciding: free plans change, and comparisons go out of date."}
     ],
     pro:[
      "**Kinds of hosting, from least to most control:** website builders (hosted editor, no server access); static hosting and edge platforms (files served from a [[cdn|CDN]], optional serverless functions); shared hosting (a slice of a server, often with PHP and a database, managed by the host); virtual private servers (your own virtual machine: you install and patch everything); dedicated servers. More control means more responsibility for updates and security.",
      "**Serverless functions** blur the static/dynamic line: Netlify and Cloudflare let a static site call small server-side functions on demand, billed by use. GitHub Pages has no server-side execution at all.",
      "**Usage limits are soft or hard.** GitHub describes its bandwidth and build limits as soft: exceeding them may lead to rate limiting (HTTP 429), an email suggesting a CDN, or a request to move. Netlify’s free plan pauses the site at the limit. Cloudflare Pages counts builds and files.",
      "**Portability.** Keep the site’s source in a repository you control and the domain at a registrar you control. Then changing host is a matter of deploying elsewhere and updating DNS. Avoid features that only one host supports (form handling, redirects syntax, functions) unless they’re worth the lock-in.",
      "**Privacy and logs.** Every host logs requests to some degree. GitHub states that it logs and stores visitors’ IP addresses for Pages sites, for security. Mention your host in your privacy notice if your visitors would expect it."
     ]
    },
    related:["static-vs-dynamic","github-pages","custom-domains","how-the-web-works"],
    read:[{book:"mdn", where:"Getting started → Your first website → “Publishing your website”"}],
    sources:[
     {t:"MDN: Publishing your website", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website"},
     {t:"Netlify: Pricing", url:"https://www.netlify.com/pricing/"},
     {t:"Cloudflare Pages docs: Limits", url:"https://developers.cloudflare.com/pages/platform/limits/"}
    ], checked:"2026-11"},

   {id:"static-vs-dynamic", title:"Static and dynamic websites", aka:["static site","dynamic site","server-side","static site generator","Jekyll"], tags:["web","publishing"],
    summary:"A static site sends the same ready-made files to everyone; a dynamic site runs a program to build each page, usually from a database.",
    levels:{
     starter:[
      "A [[static-site|static site]] is like a printed leaflet: everyone who picks one up gets the same copy. The host just hands over files that already exist.",
      "A [[dynamic-site|dynamic site]] is like a café that cooks each order: a program on the server builds a page for each visitor, often using a database. Online shops, social networks and banking sites work this way.",
      "Static doesn’t mean dull. JavaScript runs in the visitor’s browser, so quizzes, menus that open and close, and slideshows all work on a static site. What a static site can’t do by itself is **keep** what visitors send, such as messages, accounts or orders.",
      {key:"If every page can be a ready-made file, it can be a static site, and static sites are the cheapest, fastest and safest to run."}
     ],
     builder:[
      "MDN’s definitions: a static site “returns the same hardcoded content from the server whenever a particular resource is requested”; a dynamic site “can generate and return content based on the specific request URL and data”.",
      {table:[
        ["","Static","Dynamic"],
        ["Server work per visit","Send a file","Run code, query a database, build HTML"],
        ["Hosting","Often free","Usually paid"],
        ["Maintenance","Very little","Software and security updates for the life of the site"],
        ["Visitor input","Needs an outside service","Built in"]
      ]},
      "**Static site generators** are a middle path: tools such as Jekyll, Hugo or Eleventy build a whole static site from templates and Markdown **once**, at deploy time, instead of for every visit. GitHub Pages runs Jekyll automatically when you publish from a branch; plain HTML files pass through unchanged.",
      "**Adding dynamic bits to a static site:** form services for contact forms, embedded comment or booking tools, or (on some hosts) small serverless functions. Each brings its own privacy and reliability considerations.",
      {ex:"Mei’s recipe site: every recipe is a page she writes once, and a script scales the ingredient amounts in the visitor’s browser. Static. Her friend Tomás wants members to log in and save favourite recipes to their account. That needs accounts and storage, so either a dynamic platform or an outside login-and-database service.", label:"Worked example"}
     ],
     pro:[
      "**Where the work happens.** Server-side rendering builds HTML per request. Static generation builds it at deploy time. Client-side rendering ships a mostly empty HTML page plus JavaScript that builds the content in the browser; it can be hosted statically, but search engines and slow devices may struggle with it, so pre-built HTML is usually better for content sites.",
      "**Security surface.** A static host has no application code of yours handling input, so whole classes of attack (SQL injection, server-side request forgery) don’t apply. Risks remain in what you ship: third-party scripts, client-side code that writes untrusted text into the page (cross-site scripting), and leaked secrets in the repository.",
      "**Jekyll on GitHub Pages.** When publishing from a branch, Pages runs Jekyll by default. Files and folders starting with an underscore are treated specially and may not be published. To skip Jekyll entirely, add an empty file named `.nojekyll` at the top of the publishing source. For other generators, GitHub recommends a custom GitHub Actions workflow.",
      "**Server languages.** GitHub’s documentation states that Pages does not support server-side languages such as PHP, Ruby or Python. A `.php` file is served as a file, not run.",
      "**Choosing.** Start static unless a feature truly needs server-side code; you can add a service for that one feature later, without rebuilding everything."
     ]
    },
    related:["hosting-options","github-pages","how-the-web-works"],
    read:[{book:"mdn", where:"Extensions → Server-side websites → First steps → “Client-server overview”"}],
    sources:[
     {t:"MDN: Client-server overview", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"},
     {t:"GitHub Docs: Creating a GitHub Pages site", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site"}
    ], checked:"2026-11"},

   {id:"github-pages", title:"GitHub Pages", aka:["github.io","Pages","publishing source","deploy from a branch","project site","user site"], tags:["publishing","GitHub"],
    summary:"GitHub’s free static hosting: publish files from a repository at username.github.io, set up entirely through the website.",
    levels:{
     starter:[
      "[[github-pages|GitHub Pages]] turns a GitHub [[repository]] into a website. You put your HTML, CSS, JavaScript and images in the repository, switch Pages on, and GitHub publishes them at an address like `https://your-username.github.io/your-repo/`.",
      "It’s free for public repositories, and you can do everything through the GitHub website, even on a phone: create a repository, upload files, and turn Pages on in **Settings → Pages**.",
      "Each time you save a change (a [[commit]]), GitHub publishes the new version, usually within a few minutes.",
      "The free address has two forms: a **user site** at `your-username.github.io` (one per account) and **project sites** at `your-username.github.io/repository-name/` (one per repository). You can add your own domain name later.",
      {warn:"On the free plan the repository is public: anyone can read every file in it. Never upload passwords, keys or personal data."}
     ],
     builder:[
      {ol:[
        "Create a repository (**+ → New repository**), public, with a README.",
        "**Add file → Upload files** (drag files and folders on a computer; choose files on a phone), then **Commit changes**. Browser uploads: up to 100 files at once, 25 MiB each.",
        "**Settings → Pages → Build and deployment → Source: Deploy from a branch**; choose `main` and `/ (root)` (or `/docs`); **Save**.",
        "Wait (GitHub says up to 10 minutes), then **Visit site** in Settings → Pages."
      ]},
      {table:[
        ["Repository","Site address"],
        ["`your-username.github.io`","`https://your-username.github.io/` (one user site per account)"],
        ["`any-name`","`https://your-username.github.io/any-name/` (one project site per repository)"]
      ]},
      "GitHub looks for `index.html` (or `index.md` or `README.md`) at the top level of the publishing source. File names are case-sensitive. Each deploy is a workflow run in the **Actions** tab: green tick for success, red cross for failure, with a log.",
      "**Troubleshooting 404s** (GitHub’s checklist): check GitHub’s status page; the entry file’s exact name and place; that your files are at the top level; your custom domain’s DNS; and, for a private site, your browser cache.",
      "**Updating.** Edit a file with the pencil button, or upload a file with the same name to replace it, then commit. Each commit to the publishing branch triggers a new deploy. If a fix doesn’t seem to appear, check the run is green, then look in a private window, because browsers cache files."
     ],
     pro:[
      "**Limits** (GitHub Pages limits article): one user or organisation site per account; source repository recommended under 1 GB; published site no larger than 1 GB; deployments time out after 10 minutes; soft bandwidth limit of 100 GB a month; soft limit of 10 builds an hour when publishing from a branch. Rate limiting answers with HTTP 429.",
      "**Allowed use:** not as free hosting for an online business, e-commerce or commercial SaaS, and not for sensitive transactions. Educational copies of other sites need your own code, no data collection and a prominent disclaimer.",
      "**Publishing sources.** *Deploy from a branch* runs a GitHub-managed workflow that builds with Jekyll (unless `.nojekyll` is present) and deploys. *GitHub Actions* as the source lets you write your own workflow (checkout, build, `upload-pages-artifact`, `deploy-pages`), needed for other static site generators or for repositories with symbolic links.",
      "**Failed deploys.** Read the run’s log. For errors on GitHub’s side or timeouts, re-run the job (**Re-run jobs → Re-run failed jobs**) or push a new commit. Commits pushed by a workflow using `GITHUB_TOKEN` don’t trigger a Pages build. If a branch-published site never builds, make sure someone with admin rights and a verified email has pushed to it.",
      "**Paths.** Project sites live under `/repo-name/`, so root-relative paths (`/style.css`) point outside the project. Use relative paths, or include the repository name.",
      "**Visibility.** Pages sites are public on the internet even when the repository is private (on plans that allow that). Private publishing with access control exists only on GitHub Enterprise Cloud."
     ]
    },
    related:["hosting-options","custom-domains","website-maintenance","static-vs-dynamic"],
    read:[{book:"ghdocs", where:"GitHub Pages → “Creating a GitHub Pages site” and “GitHub Pages limits”"}],
    sources:[
     {t:"GitHub Docs: Creating a GitHub Pages site", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site"},
     {t:"GitHub Docs: GitHub Pages limits", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits"},
     {t:"GitHub Docs: Troubleshooting 404 errors for GitHub Pages sites", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites"}
    ], checked:"2026-11"},

   {id:"custom-domains", title:"Custom domains for your site", aka:["custom domain","registrar","domain registration","domain renewal","apex domain","www","domain verification","domain takeover"], tags:["publishing","domains"],
    summary:"Registering a domain, keeping it renewed, connecting it to a host, and protecting it against takeovers.",
    levels:{
     starter:[
      "A custom domain gives your site its own name, such as `riverside-garden.org`, instead of the host’s address. It’s easier to remember and it stays the same if you change host.",
      "You register a domain through a [[registrar]] for a period, typically one to ten years, and renew it to keep it. If it expires, the website and any email at that name stop working (straight away or after a short while), and eventually anyone can register it.",
      "Connecting it to your site has two halves: tell your host the domain (in GitHub Pages, **Settings → Pages → Custom domain**), and add DNS records at your DNS provider so the name points to the host.",
      {key:"Turn on auto-renew, keep the registrar’s contact email current, and protect the account with two-step verification."}
     ],
     builder:[
      {list:[
        "**Prices:** MDN gives about $5–15 a year as typical. Compare **renewal** prices; first years are often discounted.",
        "**Renewal reminders:** for generic domains, ICANN says registrars send reminders about one month and one week before expiry and a notice within five days after.",
        "**After expiry:** ICANN describes a 30-day Redemption Grace Period in which the registrant can still recover the name, then 5 days of pending deletion before release. Country-code domains set their own rules."
      ]},
      "**Safe order for GitHub Pages** (from GitHub’s docs):",
      {ol:[
        "Verify the domain in your **profile** Settings → Pages (a TXT record).",
        "Add it in the repository’s Settings → Pages → Custom domain. (Publishing from a branch, this commits a `CNAME` file.)",
        "Create DNS records: apex `A` records to GitHub’s four addresses, and a `www` `CNAME` to `your-username.github.io`.",
        "Wait for the check, then select **Enforce HTTPS**."
      ]},
      "GitHub recommends configuring `www` even if you use the apex; with both set, it redirects one to the other.",
      {ex:"Lucía registers `example.org` for her café. She verifies it on GitHub, saves `www.example.org` as the custom domain, adds four A records for `@` and a CNAME for `www` pointing to her `your-username.github.io` address (with her own username), waits for the check mark, and ticks Enforce HTTPS. Visitors who type `example.org` are redirected to `https://www.example.org`.", label:"Worked example"}
     ],
     pro:[
      "**Takeovers.** If DNS points at GitHub Pages but no repository claims the domain (the repository was deleted, Pages disabled, a plan downgraded), another user could add your domain to their repository. Verification restricts the domain and its immediate subdomains to your account or organisation. Wildcard records (`*.example.com`) remain risky even when verified, because deeper names such as `b.a.example.com` aren’t covered. If you stop using Pages, remove the DNS records.",
      "**Verifying a domain someone else is using** releases it from their Pages site immediately, unless they verified it first.",
      "**Supported setups:** `www` subdomain, custom subdomain (`blog.example.com`) or apex. Not supported: more than one apex, more than one `www`, or an apex plus a custom subdomain on one site. Internationalised domain names must be entered in Punycode.",
      "**Default domain for projects.** A custom domain on your user site also applies to your project sites (`www.example.com/project`) unless a project sets its own.",
      "**The CNAME file** must be upper-case, contain one domain only, and be unique across all Pages sites. Tools that force-push builds can delete it; when publishing with a custom Actions workflow, it’s ignored and the domain is set in Settings or via the API.",
      "**Registrar security.** Use two-step verification, keep recovery details current, and consider the registrar’s transfer lock where offered. Control of the registrar account is control of your site."
     ]
    },
    related:["dns-for-sites","https-certificates","github-pages","domains-urls"],
    read:[{book:"ghdocs", where:"GitHub Pages → “About custom domains and GitHub Pages” and “Verifying your custom domain for GitHub Pages”"}],
    sources:[
     {t:"GitHub Docs: About custom domains and GitHub Pages", url:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages"},
     {t:"GitHub Docs: Verifying your custom domain for GitHub Pages", url:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages"},
     {t:"ICANN: FAQs for Registrants: Domain Name Renewals and Expiration", url:"https://www.icann.org/resources/pages/domain-name-renewal-expiration-faqs-2018-12-07-en"}
    ], checked:"2026-11"},

   {id:"dns-for-sites", title:"DNS records for a website", aka:["A record","AAAA record","CNAME","TXT record","ALIAS","ANAME","TTL","DNS propagation"], tags:["domains","networks"],
    summary:"The A, AAAA, CNAME and TXT records that point a domain at a host and prove you own it, and why changes take time to spread.",
    levels:{
     starter:[
      "[[dns|DNS]] is the internet’s address book: it turns names like `example.com` into the addresses computers use (see {{dns}}). When you connect a domain to a host, you add entries to that address book called [[dns-record|DNS records]].",
      {list:[
        "An **A record** says “this name is at this IPv4 address”.",
        "An **AAAA record** does the same for an IPv6 address.",
        "A **CNAME record** says “this name is another name for that name”: `www.example.com` is really `your-username.github.io`.",
        "A **TXT record** holds text, often a code that proves you control the domain."
      ]},
      "You edit records on your DNS provider’s website, usually your registrar’s. Changes can take up to a day to reach everyone.",
      {tip:"Copy values carefully: one wrong digit in an address or a stray dot in a name is enough to send visitors nowhere."}
     ],
     builder:[
      "Records have a **name**, a **type**, a **value** and a [[ttl|TTL]]. Names are relative to the domain: `@` is the domain itself (the apex), `www` is `www.example.com`.",
      {table:[
        ["For GitHub Pages","Type","Value"],
        ["Apex (`@`)","A (four records)","`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`"],
        ["Apex (`@`), optional","AAAA (four records)","`2606:50c0:8000::153` to `2606:50c0:8003::153`"],
        ["`www`","CNAME","`your-username.github.io` (no repository name)"],
        ["Verification","TXT","The name and code GitHub shows you"]
      ]},
      "Remove default “parking” records your provider created, and don’t use wildcard records. Extra apex records can send visitors elsewhere and block the HTTPS certificate.",
      "**Checking:** an online lookup tool (such as the one at `dns.google`) shows what public resolvers return. Developers use `dig` on the command line; on Windows, PowerShell’s `Resolve-DnsName` does the same job.",
      "**How the pieces fit.** A visitor types `www.example.com`. Their resolver finds the CNAME and follows it to `your-username.github.io`, then to GitHub’s A records, and connects to GitHub Pages. GitHub sees which name was requested and serves the repository that claimed that domain in its settings. If no repository claims it, visitors get a 404 from GitHub, which is the gap a takeover exploits.",
      "**Before changing anything,** note the current records (a screenshot works), so you can put them back if something goes wrong."
     ],
     pro:[
      "**Why no CNAME at the apex.** A CNAME can’t coexist with other records for the same name, and the apex always has SOA and NS records. Hence A/AAAA records at the apex, or a provider’s **ALIAS/ANAME** record (sometimes called CNAME flattening), which the provider resolves to addresses behind the scenes. GitHub supports ALIAS/ANAME pointing at `your-username.github.io` as an alternative to the four A records.",
      "**Stability.** GitHub notes that `www` subdomains are the most stable kind of custom domain because a CNAME follows any change to GitHub’s server addresses; apex A records would need updating by hand if those addresses changed.",
      "**Propagation is caching.** Nothing is pushed around the world: resolvers keep answers for the TTL, then ask again. Lowering a record’s TTL a day before a planned change shortens the wait during the switch. GitHub’s guidance allows up to 24 hours.",
      "**IPv6.** If you add AAAA records, keep the A records: IPv6 isn’t available on every network.",
      "**CAA records** restrict which certificate authorities may issue for the domain. With GitHub Pages, one must permit `letsencrypt.org`.",
      "**Verification record name** for GitHub: `_github-pages-challenge-USERNAME.example.com` (or the organisation name). Keep it in place to stay verified.",
      "**Email records.** If you use email at your domain, its MX and TXT (SPF, DKIM, DMARC) records sit beside the website records. Change only the records you need to."
     ]
    },
    related:["dns","custom-domains","https-certificates","ip-addresses"],
    sources:[
     {t:"GitHub Docs: Managing a custom domain for your GitHub Pages site", url:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site"},
     {t:"GitHub Docs: Troubleshooting custom domains and GitHub Pages", url:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages"}
    ], checked:"2026-11"},

   {id:"https-certificates", title:"HTTPS and TLS certificates for your site", aka:["TLS certificate","SSL certificate","Let’s Encrypt","Enforce HTTPS","mixed content","certificate authority"], tags:["security","publishing"],
    summary:"How a site gets a certificate so it can use HTTPS, what Enforce HTTPS does, and how to fix certificate and mixed-content problems.",
    levels:{
     starter:[
      "[[https|HTTPS]] keeps the connection between a visitor and your site private and untampered, and shows the browser it reached the real server for that name. Browsers warn people away from sites without it.",
      "To use HTTPS, the server needs a [[tls-certificate|TLS certificate]]: a digital ID card for your domain, signed by a trusted certificate authority. Free authorities such as Let’s Encrypt issue them automatically.",
      "On GitHub Pages you don’t handle certificates at all: `github.io` addresses already use HTTPS, and for a custom domain GitHub gets and renews a certificate for you. Your job is to tick **Enforce HTTPS** once it’s available.",
      {key:"HTTPS protects visitors’ privacy and your pages’ integrity. On a modern host it’s free and automatic, so always turn it on."}
     ],
     builder:[
      "**On GitHub Pages with a custom domain:** when you save the domain, GitHub runs a DNS check. If it passes, GitHub requests a certificate from Let’s Encrypt, installs it, and shows a check mark by the domain. Then **Enforce HTTPS** redirects all `http://` requests to `https://`. GitHub notes the option can take up to 24 hours to appear, and that a site can take up to an hour to be available over HTTPS after configuring the domain.",
      {table:[
        ["Problem","Fix"],
        ["“Certificate not yet created” for a long time","Remove the domain, type it again and save, to restart"],
        ["Certificate never issues","Check for extra A/AAAA/ALIAS records at the apex or stray CNAMEs; a CAA record must allow `letsencrypt.org`"],
        ["Domain too long","The full domain must be under 64 characters"],
        ["Padlock warning on some pages","Mixed content: change `http://` addresses in your HTML to `https://`"]
      ]},
      "HTTPS proves the connection is to the named server; it doesn’t prove the site is honest (see {{public-wifi-https}}).",
      "**Check it yourself.** Visit `http://` plus your domain: with Enforce HTTPS on, the browser should land on the `https://` address. Selecting the padlock or site-information icon in the address bar shows the certificate’s issuer and expiry date. Try both the apex and `www` versions."
     ],
     pro:[
      "**TLS in brief.** During the handshake the server presents its certificate chain; the browser checks the signature leads to a trusted root, that the certificate covers the requested name, and that it’s within its validity dates. Keys are then agreed for encrypting the session.",
      "**Domain validation.** Let’s Encrypt issues domain-validated certificates: it checks control of the domain (for example by fetching a token over HTTP from the host the DNS points to). That’s why DNS must point at GitHub before a certificate can be issued, and why stray records break issuance.",
      "**Automation and lifetimes.** Certificates are short-lived and renewed automatically by the host; on GitHub Pages there’s nothing to renew by hand.",
      "**Mixed content.** Browsers block “active” mixed content (scripts, style sheets, iframes loaded over HTTP) on HTTPS pages and may upgrade or block images. Search your repository for `http://` and fix each reference.",
      "**HSTS** (HTTP Strict Transport Security) tells browsers to use HTTPS for a domain for a set time. MDN recommends HTTPS with HSTS for websites; on GitHub Pages you can’t set custom response headers, so Enforce HTTPS is your tool.",
      "**Certificate Transparency.** Publicly trusted certificates are logged in public logs, so a new subdomain’s name becomes visible soon after its certificate is issued. Don’t treat subdomain names as secret."
     ]
    },
    related:["custom-domains","dns-for-sites","public-wifi-https"],
    read:[{book:"ghdocs", where:"GitHub Pages → “Securing your GitHub Pages site with HTTPS”"}],
    sources:[
     {t:"GitHub Docs: Securing your GitHub Pages site with HTTPS", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https"},
     {t:"GitHub Docs: Troubleshooting custom domains and GitHub Pages", url:"https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages"},
     {t:"MDN: Website security", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"}
    ], checked:"2026-11"},

   {id:"site-performance", title:"Website speed and images", aka:["web performance","PageSpeed Insights","Lighthouse","Core Web Vitals","LCP","INP","CLS","image compression","lazy loading","WebP","AVIF"], tags:["web","performance"],
    summary:"Measuring a site’s speed with PageSpeed Insights and Lighthouse, the Core Web Vitals targets, and fixing the usual culprit: oversized images.",
    levels:{
     starter:[
      "Slow pages lose visitors, and they cost people on mobile data real money. The biggest cause on small sites is images that are far bigger than they need to be.",
      "A camera photo may be 4000 pixels wide and several megabytes. Shown 800 pixels wide, most of those pixels are thrown away after downloading. Resize photos to about the size they’re shown (twice that at most), and save them with sensible compression.",
      "To measure, paste your address into **PageSpeed Insights** (`pagespeed.web.dev`). It works on a phone, scores your page out of 100 (90 or above is good), and lists what to fix.",
      "On a computer, the same tests (Lighthouse) are built into Chrome and Edge DevTools.",
      {key:"Measure, fix the biggest problem (usually images), measure again."}
     ],
     builder:[
      "**Core Web Vitals** (web.dev), aiming for at least 75% of visits:",
      {table:[
        ["Measure","What it means","Good"],
        ["LCP","Main content appears","≤ 2.5 s"],
        ["INP","Page responds to taps and clicks","≤ 200 ms"],
        ["CLS","Layout doesn’t jump while loading","≤ 0.1"]
      ]},
      "PageSpeed Insights shows **field data** (real Chrome users over 28 days, when there’s enough) and **lab data** from [[lighthouse|Lighthouse]] (a simulated mid-range phone or a desktop). Lab scores vary between runs; use the suggestions.",
      {ex:"Kenji’s home page scores 48 on mobile. The first suggestion is “Properly size images”: a 5 MB banner photo shown 800 px wide. He resizes it to 1600 px, saves it as WebP at quality 75 (about 180 KB), adds width and height, and re-tests: 89. The second suggestion, a slow third-party font, is next.", label:"Worked example"},
      {list:[
        "Photos: JPEG or WebP; screenshots and flat graphics: PNG or WebP; logos and icons: SVG. AVIF is smaller still.",
        "Give every `<img>` `width` and `height` attributes so space is reserved (protects CLS), and CSS `max-width: 100%; height: auto;` so it fits small screens.",
        "Add `loading=\"lazy\"` to images further down the page, not to the main image at the top.",
        "Compress with a tool such as Squoosh; MDN suggests JPEG quality around 75%.",
        "Show a 16:9 photo at most about 1,000 px wide? A 2,000 px version covers sharp screens; anything bigger is waste."
      ]}
     ],
     pro:[
      "**Lab vs field.** Lighthouse can’t measure INP (no real user interacts), so it reports Total Blocking Time as a lab stand-in. web.dev stresses that only field data captures real experience; lab data is for diagnosis and catching regressions.",
      "**Responsive images.** `srcset` with width descriptors plus `sizes` lets the browser pick a file to suit the screen and pixel density; `<picture>` with `<source type>` offers modern formats with a fallback. MDN notes that beyond 2× density few people see a difference, and that high-density screens tolerate stronger compression.",
      "**Priority.** The LCP image should load early: never lazy-load it, and consider `fetchpriority=\"high\"`. Defer non-essential scripts. Each third-party script, font or embed adds requests and can block rendering.",
      "**Caching.** Static hosts set cache headers for you; on GitHub Pages you can’t change them. After a deploy, visitors with cached copies may see old files briefly; renaming changed files (for example `style-v2.css`) forces fresh downloads.",
      "**Field data availability.** PSI falls back to whole-site (origin) data when a page lacks samples, and shows none if the origin lacks them too: normal for a new personal site.",
      "**Fonts and video.** Web fonts block or swap text while loading; limit the number of weights and self-host where possible. Video should never autoplay large files on mobile data; use a poster image and let visitors choose."
     ]
    },
    related:["seo-basics","site-accessibility-check","bandwidth-latency"],
    read:[{book:"mdn", where:"Extensions → Web performance → “Multimedia: Images”"}],
    sources:[
     {t:"web.dev: Web Vitals", url:"https://web.dev/articles/vitals"},
     {t:"Google for Developers: About PageSpeed Insights", url:"https://developers.google.com/speed/docs/insights/v5/about"},
     {t:"MDN: Multimedia: Images", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Multimedia"}
    ], checked:"2026-11"},

   {id:"seo-basics", title:"Titles, descriptions, link previews and favicons", aka:["SEO","search engine optimisation","title element","meta description","Open Graph","og:image","favicon","Search Console"], tags:["web","publishing"],
    summary:"How a page introduces itself to search engines, chat apps and browser tabs: the title, meta description, Open Graph tags and favicon.",
    levels:{
     starter:[
      "Before anyone reads your page, they meet its introduction: the title in a browser tab or search result, a short description under it, a preview card when the link is shared, and a little icon in the tab.",
      {list:[
        "`<title>`: a specific name for each page, such as “Menu and opening times · Riverside Café”.",
        "[[meta-description|Meta description]]: one or two sentences summing up the page. Search engines may show it under your link.",
        "[[open-graph|Open Graph]] tags: the title, image and description chat and social apps use for preview cards.",
        "[[favicon|Favicon]]: the small icon in tabs and bookmarks."
      ]},
      "There’s no trick that guarantees a top search result. Clear, useful pages with honest titles are what search engines are built to find.",
      {key:"Every page gets its own specific title and description."}
     ],
     builder:[
      {code:'<title>Menu and opening times · Riverside Café</title>\n<meta name="description"\n  content="Breakfast and lunch by the river. Open daily.">\n<meta property="og:title" content="Riverside Café">\n<meta property="og:type" content="website">\n<meta property="og:url"\n  content="https://www.example.com/">\n<meta property="og:image"\n  content="https://www.example.com/images/card.jpg">\n<link rel="icon" href="favicon.png" type="image/png">', lang:"html", label:"In the head"},
      {list:[
        "Google says it may use the meta description when it describes the page more accurately than on-page text; there’s no length limit, but snippets are truncated to fit.",
        "Google Search doesn’t use the `keywords` meta tag.",
        "The Open Graph protocol’s required properties are `og:title`, `og:type`, `og:image` and `og:url`. Use full `https://` addresses.",
        "Favicons: `.ico`, `.png` or `.gif` (MDN); link with `<link rel=\"icon\">`. On a project site keep the path relative.",
        "To see whether Google has your site, search `site:` plus your address. Google’s guide notes changes can take hours to months to show."
      ]},
      "**Write for people first.** A good description reads like a sentence a friend would say about the page, mentioning what makes it useful (opening times, a price, a date). Keyword lists in descriptions are discouraged by Google. Titles and descriptions are also what people read when deciding whether to click, so they matter even where search engines rewrite them. Check your preview by sharing the link with yourself in a chat app; remember apps cache previews, so a changed preview may take time to update."
     ],
     pro:[
      "**Snippets.** Google builds snippets mainly from page content, choosing per query; a meta description is used when it’s the better summary. Descriptions should be unique per page; site-wide boilerplate belongs on the home page only. Programmatic descriptions are fine if they read naturally.",
      "**Title links** come mainly from `<title>`, but search engines may use headings or other text when a title is missing, generic or misleading. Keep titles unique, concise and descriptive.",
      "**Open Graph details.** `og:image:alt` describes the image (not a caption). Many platforms cache previews and offer their own debugging tools to refresh them. X (formerly Twitter) uses its own `twitter:` tags but falls back to Open Graph for most fields.",
      "**Discoverability fundamentals** in Google’s starter guide: descriptive URLs with words rather than random IDs, descriptive link text, alt text on images, and links from other relevant sites. A sitemap is optional for small sites.",
      "**Search Console**’s URL Inspection tool shows how Google sees a page and whether it’s indexed. Indexing is never guaranteed.",
      "**Language.** `<html lang>` helps search engines and screen readers alike.",
      "**Duplicates and addresses.** Keep one address per page: if the same content is reachable at several addresses (for example with and without `www`), redirect to one, as GitHub Pages does when both apex and `www` are configured. Short, readable, lower-case file names make good addresses."
     ]
    },
    related:["site-performance","site-accessibility-check","url-anatomy"],
    read:[{book:"mdn", where:"Core → Structuring content with HTML → “What’s in the head? Web page metadata”"}],
    sources:[
     {t:"Google Search Central: SEO Starter Guide", url:"https://developers.google.com/search/docs/fundamentals/seo-starter-guide"},
     {t:"Google Search Central: How to Write Meta Descriptions", url:"https://developers.google.com/search/docs/appearance/snippet"},
     {t:"The Open Graph protocol", url:"https://ogp.me/"}
    ], checked:"2026-11"},

   {id:"site-accessibility-check", title:"A first accessibility check for your site", aka:["WAVE","keyboard test","alt text on the web","accessibility audit","Easy Checks","screen reader test"], tags:["accessibility","web"],
    summary:"A quick, repeatable check of a live site: WAVE, a keyboard test, zoom, and the human judgement automated tools can’t give.",
    levels:{
     starter:[
      "Accessibility means people can use your site however they use the web: with a [[screen-reader|screen reader]], a keyboard instead of a mouse, magnified text, or voice control.",
      "A first check takes ten minutes:",
      {ol:[
        "Paste your address into **WAVE** (`wave.webaim.org`). It marks missing alt text, empty links, low contrast and more.",
        "Press [[kbd:Tab]] through the page on a computer. Can you always see where you are, and reach every link and button?",
        "Zoom to 200%. Is everything still readable?"
      ]},
      "Most fixes are in your HTML: [[alt-text-web|alt text]] on images, headings in order, a page language, link text that makes sense on its own, and good [[contrast|contrast]].",
      {key:"Tools find some problems. People find the rest."},
      "Accessibility isn’t a niche concern: it covers people with permanent disabilities, people with temporary injuries, older people, and anyone using a phone in bright sunlight."
     ],
     builder:[
      {table:[
        ["Check","How","Common fix"],
        ["Images","WAVE; read each alt text","Describe purpose; `alt=\"\"` for decoration; for linked images, say where the link goes"],
        ["Headings","WAVE’s outline; screen reader heading list","One `<h1>`, then `<h2>`, `<h3>` in order"],
        ["Keyboard","[[kbd:Tab]], [[kbd:Shift]] + [[kbd:Tab]], [[kbd:Enter]]","Use real links and buttons; keep a visible focus outline"],
        ["Contrast","WAVE contrast panel","At least 4.5:1 for normal text"],
        ["Zoom","200% zoom, or pinch on a phone","Flexible layouts, relative font sizes"]
      ]},
      "WAVE is available as a website and as extensions for Chrome, Firefox and Edge; Lighthouse (in PageSpeed Insights and Chrome DevTools) also runs accessibility audits. On phones, VoiceOver (iPhone) and TalkBack (Android) let you hear your pages.",
      "W3C’s **Easy Checks** guide covers page title, alt text, headings, contrast, keyboard focus, language, zoom, captions and form labels, and warns that a page “could seem to pass these checks, yet still have significant accessibility barriers”.",
      {ex:"Priya runs WAVE on her portfolio: two errors (an image with no alt, a link wrapping only an icon) and a contrast error on pale grey captions. She adds alt text, gives the icon link a text label, and darkens the captions. Then she tabs through the page and notices the focus outline has been removed in her CSS, which no tool flagged. She puts it back.", label:"Worked example"}
     ],
     pro:[
      "**What automation catches.** Tools reliably detect missing attributes, empty links and buttons, many contrast failures between solid colours, missing form labels, missing language and skipped heading levels. They can’t judge whether alt text is accurate, whether focus order makes sense, whether instructions rely on colour or shape alone, or whether content is understandable.",
      "**Standards.** WCAG 2.2 is the current W3C recommendation; its success criteria (for example 1.1.1 Non-text Content, 1.4.3 Contrast (Minimum), 2.1.1 Keyboard, 2.4.7 Focus Visible) are what accessibility laws in many places refer to. Rules of thumb are helpful, but the criteria are the standard.",
      "**Screen reader testing.** Learn a few commands: navigate by headings, by landmarks and by links. Listen for images announced by file name, links that all say “read more”, and form fields without names.",
      "**Process.** Check early and after every significant change. MDN’s accessibility module recommends combining tools, knowledge and testing with disabled users; no single tool is enough.",
      "**404 and error pages** need the same care: a clear heading, a way home, and readable text.",
      "**Motion and timing.** Avoid content that flashes, respect the `prefers-reduced-motion` setting for animations, and never rely on a visitor acting within a time limit without a way to extend it."
     ]
    },
    related:["alt-text","seo-basics","site-performance"],
    read:[{book:"mdn", where:"Core → Accessibility → “Accessibility tooling and assistive technology”"}],
    sources:[
     {t:"W3C WAI: Easy Checks – A First Review of Web Accessibility", url:"https://www.w3.org/WAI/test-evaluate/easy-checks/"},
     {t:"WebAIM: WAVE Web Accessibility Evaluation Tools", url:"https://wave.webaim.org/"},
     {t:"MDN: Accessibility tooling and assistive technology", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Tooling"}
    ], checked:"2026-11"},

   {id:"site-privacy-legal", title:"Privacy on your website: analytics, cookies and forms", aka:["cookie banner","analytics","privacy notice","contact form","consent","web analytics"], tags:["privacy","publishing"],
    summary:"What a small site collects (often more than you think), when cookies and analytics raise consent questions, and how to handle forms and a privacy notice. Not legal advice.",
    levels:{
     starter:[
      "A plain site of your own files collects very little. Your host may log visitors’ IP addresses (GitHub says it does, for security). Things you **add** can collect much more: [[web-analytics|analytics]] scripts, embedded videos and maps, social media buttons, outside fonts and contact forms.",
      "Rules about this depend on where you and your visitors are, and they change. In the EU, for example, sites need consent before setting cookies used for analytics or advertising; strictly necessary cookies (such as a shopping basket) don’t need it.",
      {list:[
        "Collect only what you need. Many small sites need no analytics.",
        "Tell visitors what you collect in a short, honest [[privacy-policy|privacy notice]].",
        "Contact forms collect [[personal-data|personal data]]: names, emails, messages. Choose the form service carefully and mention it."
      ]},
      {warn:"This entry is general information, not legal advice. Check the guidance of the data-protection authority where you live."}
     ],
     builder:[
      {table:[
        ["You add…","It may…","Consider"],
        ["Analytics script","Set cookies; send IP address and pages viewed to a company","A tool that doesn’t track across sites; consent where required"],
        ["Embedded video or map","Set the provider’s cookies when the page loads","Privacy-enhanced embed modes; a link instead"],
        ["Fonts from another server","Send visitors’ IP addresses to that server","Host the font files yourself"],
        ["Contact form service","Store names, emails and messages","Spam protection; retention; mention in your notice"]
      ]},
      "**The EU’s guidance** (Your Europe, for businesses): consent is needed before setting cookies such as tracking cookies for analytics or behavioural advertising; it should be specific to each purpose, and withdrawing must be as easy as giving it. Cookies strictly necessary for a service the user requested are exempt.",
      "A [[cookie-banner|cookie banner]] is only a way of asking. It doesn’t make anything lawful by itself: cookies that need consent must wait until the visitor agrees.",
      "Other places have different rules, and some cover any personal data, not just cookies. See {{data-protection-laws}}.",
      "**A privacy notice for a small site** can be a short page: who runs the site and how to contact them; what is collected (for example, messages sent through the contact form); which outside services receive data (the host, the form service, any analytics); how long you keep it; and how people can ask for their data to be deleted."
     ],
     pro:[
      "**Storage, not just cookies.** EU rules concern storing or reading information on the visitor’s device: cookies, localStorage and similar technologies alike. Server-side logging is governed by data-protection law (such as the GDPR) rather than cookie rules.",
      "**Lawful basis and minimisation.** Under the GDPR, processing personal data needs a lawful basis and should be limited to what’s necessary. IP addresses can be personal data. Purely personal or household activity is outside the GDPR’s scope, but a club, business or public-facing project usually isn’t purely personal.",
      "**Third parties.** Each embedded service is a separate organisation receiving data. Their terms and privacy statements matter; some offer data-processing agreements for organisations.",
      "**Forms.** Decide how long you keep messages and who can read them. Don’t ask for more than you need. Forms on GitHub Pages must post to an outside service: GitHub says Pages sites shouldn’t be used for sensitive transactions such as passwords or card numbers.",
      "**Change and jurisdiction.** Laws and official guidance change (several countries revised cookie rules in recent years). Re-check yearly, and for an organisation’s site, ask someone qualified.",
      "**Children and sensitive data.** Sites aimed at children, or that collect health, religious or similar sensitive information, face stricter rules in many places. Avoid collecting such data on a hobby site."
     ]
    },
    related:["data-protection-laws","cookies-cache","website-maintenance","hosting-options"],
    sources:[
     {t:"Your Europe: Online privacy: How to use cookies on your website", url:"https://europa.eu/youreurope/business/dealing-with-customers/data-protection/online-privacy/index_en.htm"},
     {t:"GitHub Docs: What is GitHub Pages? (Data collection)", url:"https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"}
    ], checked:"2026-11"},

   {id:"website-maintenance", title:"Looking after a live website", aka:["broken links","link rot","backups","restore","secrets in repositories","troubleshooting a site","re-run deploy"], tags:["publishing","maintenance"],
    summary:"A routine for a healthy site: link checks, current content, backups beyond the repository, no secrets, secure accounts, and an outside-in checklist when it breaks.",
    levels:{
     starter:[
      "A website needs light, regular care. Facts go stale, other sites move so your links break, and accounts need protecting.",
      {list:[
        "**Monthly:** click through your links (or use a link checker) and update dates, prices and events.",
        "**Every few months:** re-run PageSpeed Insights and WAVE; download a copy of the repository (**Code → Download ZIP**) and keep it somewhere else.",
        "**Yearly:** check the domain renewal date and payment card, and who has access."
      ]},
      "Your GitHub repository keeps every version of every file, so you can look back at a file’s **History** and restore an older version.",
      {key:"Small, regular checks prevent big repairs."},
      "And when something does break, work from the outside in: is it just you, is GitHub having problems, did the last deploy fail, did your last change cause it?"
     ],
     builder:[
      "**Broken links.** Renaming your own page breaks other people’s links to it. On GitHub Pages (no server redirects), leave a small page at the old address linking to the new one. Check outside links with a link checker such as W3C’s.",
      "**Backups.** The repository is one copy in one account. Keep a second copy elsewhere, and keep a private note of what isn’t in the repository: DNS records, registrar login and renewal date, Pages settings, form and analytics services.",
      "**Secrets.** Never commit passwords, API keys or tokens. A deleted file stays in the history, so a leaked secret must be revoked and replaced. GitHub may block some recognised secrets at upload (push protection); don’t rely on it.",
      "**When it breaks, outside in:**",
      {ol:[
        "Just you? Private window, mobile data, another device.",
        "GitHub incident? githubstatus.com.",
        "Failed deploy? Actions tab, read the log, re-run.",
        "Recent change? Compare commits; restore from History.",
        "Domain? Renewal, DNS records, `CNAME` file, certificate.",
        "Still stuck? GitHub Community discussions, Pages category, with details."
      ]},
      "**Content.** A “Last updated” line on pages with time-sensitive facts helps visitors judge freshness. Remove past events or move them to an archive page, so the home page always shows what’s current. Ask a friend to read the site once a year with fresh eyes."
     ],
     pro:[
      "**Re-running deploys.** From the run’s page: **Re-run jobs → Re-run failed jobs** or **Re-run all jobs**. Re-runs use the original commit and the original actor’s privileges; a run can be re-run up to 50 times, within 30 days. A new commit starts a fresh run instead.",
      "**Rewriting history.** Removing a secret from every past commit needs Git tooling (a later unit) and doesn’t help once the secret has been copied, so revocation comes first.",
      "**Account security.** Two-step verification on GitHub (which GitHub requires for many contributors), the registrar and DNS provider, and any form service. Store recovery codes in a password manager. Review collaborators and deploy keys on the repository yearly.",
      "**Dependencies.** Pin outside scripts to a specific version, prefer self-hosting small libraries, and consider Subresource Integrity (`integrity` attribute) for scripts from a CDN, so a changed file is refused.",
      "**Handover.** For club or community sites, document the setup and add a second trusted owner so the site survives a volunteer leaving. An organisation account on GitHub helps here.",
      "**Retiring a site.** Unpublish Pages, then remove DNS records (to prevent takeovers), let the domain lapse or transfer it deliberately, and leave a note where visitors might look.",
      "**Logs of change.** Clear commit messages turn history into documentation: future you can see why a change was made, not just what changed."
     ]
    },
    related:["github-pages","backup","site-privacy-legal","custom-domains"],
    sources:[
     {t:"GitHub Docs: Re-running workflows and jobs", url:"https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"},
     {t:"GitHub Docs: Deleting files in a repository", url:"https://docs.github.com/en/repositories/working-with-files/managing-files/deleting-files-in-a-repository"},
     {t:"MDN: Website security", url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"}
    ], checked:"2026-11"}
  ],
  terms:[
   {id:"hosting", term:"Hosting (web hosting)", def:"Renting space on an always-on server that stores your site’s files and answers visitors’ browsers for you. Some static hosting is free.", codex:"hosting-options"},
   {id:"static-site", term:"Static site", def:"A website whose server sends the same ready-made files to every visitor. JavaScript can still make it interactive in the browser.", codex:"static-vs-dynamic"},
   {id:"dynamic-site", term:"Dynamic site", def:"A website where a program on the server builds pages for each request, often from a database. Shops, logins and social networks work this way.", codex:"static-vs-dynamic"},
   {id:"deploy", term:"Deploy", def:"To copy a site’s files to its host and make that version the live one. Each new deploy replaces what visitors see.", codex:"hosting-options"},
   {id:"repository", term:"Repository (repo)", def:"A project folder that Git looks after: the files plus the history of every saved change. It can live on your computer, on a service such as GitHub, or both.", codex:"github-pages"},
   {id:"commit", term:"Commit", def:"A saved snapshot of the files in a repository, with a short message describing what changed. On GitHub Pages, each commit to the publishing branch starts a new deploy.", codex:"github-pages"},
   {id:"branch", term:"Branch", def:"A line of history in a repository. New repositories start with one called `main`; GitHub Pages publishes from the branch you choose.", codex:"github-pages"},
   {id:"publishing-source", term:"Publishing source", def:"The branch and folder (`/ (root)` or `/docs`) that GitHub Pages publishes, or a GitHub Actions workflow if you choose that instead.", codex:"github-pages"},
   {id:"github-pages", term:"GitHub Pages", def:"GitHub’s free static hosting: it publishes files from a repository at an address such as `your-username.github.io/repo-name/`.", codex:"github-pages"},
   {id:"registrar", term:"Registrar", def:"A company accredited to register domain names for you. You register a name for a period (often one to ten years) and renew it to keep it.", codex:"custom-domains"},
   {id:"apex-domain", term:"Apex domain", def:"A domain with nothing in front of it, such as `example.com` (not `www.example.com`). Also called the root, bare or naked domain. In DNS settings it’s written `@`.", codex:"dns-for-sites"},
   {id:"dns-record", term:"DNS record", def:"One entry in a domain’s DNS settings, with a name, a type (such as A, AAAA, CNAME or TXT), a value and a TTL.", codex:"dns-for-sites"},
   {id:"a-record", term:"A record", def:"A DNS record that points a name to an IPv4 address, such as `185.199.108.153`. An AAAA record does the same for an IPv6 address.", codex:"dns-for-sites"},
   {id:"cname", term:"CNAME record", def:"A DNS record that makes one name an alias for another, such as `www.example.com` → `your-username.github.io`. It holds a host name only, never a path.", codex:"dns-for-sites"},
   {id:"txt-record", term:"TXT record", def:"A DNS record that holds text. Services such as GitHub ask you to add one with a code to prove you control a domain.", codex:"dns-for-sites"},
   {id:"ttl", term:"TTL (time to live)", def:"How many seconds resolvers may cache a DNS answer before asking again. It’s why DNS changes take time to reach everyone.", codex:"dns-for-sites"},
   {id:"domain-verification", term:"Domain verification", def:"Proving to a service, usually with a TXT record, that you control a domain. On GitHub it stops other accounts publishing Pages sites at your domain.", codex:"custom-domains"},
   {id:"domain-takeover", term:"Domain takeover", def:"When someone else publishes at your domain because its DNS still points at a host where your site no longer exists. Verify domains and remove unused records.", codex:"custom-domains"},
   {id:"tls-certificate", term:"TLS certificate", def:"A digital ID for a domain, signed by a trusted certificate authority, that lets a server use HTTPS. Often still called an SSL certificate.", codex:"https-certificates"},
   {id:"mixed-content", term:"Mixed content", def:"An HTTPS page that loads images, styles or scripts over plain `http://`. Browsers block or warn about it; fix by using `https://` addresses.", codex:"https-certificates"},
   {id:"cdn", term:"CDN (content delivery network)", def:"Servers in many places that keep copies of a site’s files, so each visitor is served from somewhere nearby. Many static hosts use one.", codex:"hosting-options"},
   {id:"lighthouse", term:"Lighthouse", def:"Google’s free tool that tests a page in a simulated browser and scores performance, accessibility, best practices and SEO. Built into Chrome DevTools and PageSpeed Insights.", codex:"site-performance"},
   {id:"core-web-vitals", term:"Core Web Vitals", def:"Three measures of real visitors’ experience: LCP (loading, good within 2.5 s), INP (responsiveness, 200 ms or less) and CLS (layout stability, 0.1 or less).", codex:"site-performance"},
   {id:"meta-description", term:"Meta description", def:"A one- or two-sentence summary in a page’s head, `<meta name=\"description\">`. Search engines may show it under the link.", codex:"seo-basics"},
   {id:"open-graph", term:"Open Graph", def:"A set of `og:` meta tags (title, type, image, URL, description) that chat and social apps read to build link preview cards.", codex:"seo-basics"},
   {id:"favicon", term:"Favicon", def:"The small icon shown in browser tabs and bookmarks, linked from the page’s head with `<link rel=\"icon\">`.", codex:"seo-basics"},
   {id:"alt-text-web", term:"Alt text (on a web page)", def:"The `alt` attribute of an `<img>`: a text alternative read by screen readers and shown if the image fails. Empty (`alt=\"\"`) for decorative images.", codex:"site-accessibility-check"},
   {id:"404-page", term:"404 page", def:"The page a server shows when an address doesn’t exist (HTTP status 404, “Not Found”). On GitHub Pages you can make your own with a file named `404.html`.", codex:"github-pages"},
   {id:"broken-link", term:"Broken link", def:"A link that leads to an error, usually a 404, because the page was renamed, moved or deleted.", codex:"website-maintenance"},
   {id:"web-analytics", term:"Web analytics", def:"Tools that count and describe visits to a site. Some set cookies or send visitors’ data to another company, which can raise consent questions.", codex:"site-privacy-legal"},
   {id:"cookie-banner", term:"Cookie banner", def:"A notice asking visitors to accept or refuse cookies. Where consent is required, cookies that need it must not be set until the visitor agrees.", codex:"site-privacy-legal"},
   {id:"honeypot-field", term:"Honeypot field", def:"A form field hidden from people. Bots tend to fill in every field, so a form service can reject submissions where it isn’t empty.", codex:"site-privacy-legal"},
   {id:"secret-key", term:"Secret key (API key, token)", def:"A string that works like a password for a service. Never put one in a public repository; if it leaks, revoke it and make a new one.", codex:"website-maintenance"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u5-q01", lesson:"t2u5-l1", level:1, q:"What is web hosting?", options:[
     {t:"Renting space on an always-on server that stores your site and answers visitors", ok:true, why:"The host keeps your files on servers that are always connected and responds to every browser that asks."},
     {t:"Buying a domain name", why:"A domain is only a name; it doesn’t store any files."},
     {t:"Writing the HTML for a site", why:"That’s building the site. Hosting is where it lives once built."},
     {t:"Installing a web browser", why:"Browsers are what visitors use; hosting is on the other side of the connection."}
   ]},
   {id:"t2u5-q02", lesson:"t2u5-l1", level:2, q:"Which of these features can a purely static site provide without any outside service?", options:[
     {t:"A photo gallery that opens a larger image when you tap a thumbnail", ok:true, why:"JavaScript and CSS in the browser can do that; nothing needs storing on the server."},
     {t:"A guestbook where visitors’ messages appear for everyone", why:"Keeping and showing visitors’ messages needs storage on a server or a service."},
     {t:"Member logins", why:"Logins need a server to check passwords and remember sessions."},
     {t:"Taking card payments", why:"Payments need a secure server-side payment service."}
   ]},
   {id:"t2u5-q03", lesson:"t2u5-l1", level:1, q:"What does it mean to deploy a site?", options:[
     {t:"Copy its files to the host and make that version live", ok:true, why:"Deploying publishes a version; every new deploy replaces what visitors see."},
     {t:"Design it on paper first", why:"Planning comes before building; deploying is publishing."},
     {t:"Register its domain name", why:"Registering a name is separate from putting files online."},
     {t:"Delete the old version for ever", why:"A deploy replaces the live version, but a repository keeps the history."}
   ]},
   {id:"t2u5-q04", lesson:"t2u5-l1", level:1, q:"According to GitHub’s rules, which use of GitHub Pages is **not** allowed?", options:[
     {t:"Running an online shop that takes orders", ok:true, why:"GitHub says Pages isn’t for online businesses, e-commerce or commercial software as a service."},
     {t:"A personal portfolio", why:"Personal sites are an intended use."},
     {t:"A school club’s information page", why:"Clubs and projects are an intended use."},
     {t:"Documentation for an open-source project", why:"Project documentation is one of the most common uses."}
   ]},
   {id:"t2u5-q05", lesson:"t2u5-l1", level:3, q:"Kenji compares two domain offers: A costs $1 the first year and $20 a year after; B costs $12 every year. Which is cheaper over three years?", options:[
     {t:"B: $36, against $41 for A", ok:true, why:"A: 1 + 20 + 20 = $41. B: 12 × 3 = $36. The renewal price matters more than the first-year offer."},
     {t:"A: $3, against $36 for B", why:"That uses A’s first-year price for every year; renewals cost $20."},
     {t:"They cost the same", why:"Work it out: $41 against $36."},
     {t:"A, because the first year is almost free", why:"The first year is cheap, but two renewals at $20 cost more than B overall."}
   ]},
   {id:"t2u5-q06", lesson:"t2u5-l1", level:2, q:"Mei’s free host emails her: the site has used its monthly allowance and is paused until next month. Which host’s free plan works this way, according to its pricing page?", options:[
     {t:"Netlify", ok:true, why:"Netlify’s free plan has hard monthly limits; a site that reaches them is paused until the next billing cycle."},
     {t:"GitHub Pages", why:"GitHub’s bandwidth limit is described as soft; it may rate-limit or contact you rather than pause by a monthly credit count."},
     {t:"Every host works this way", why:"Hosts handle limits differently, which is why reading each one’s page matters."},
     {t:"No host would ever do this", why:"Netlify’s pricing page describes exactly this behaviour."}
   ]},
   {id:"t2u5-q07", lesson:"t2u5-l1", level:2, q:"Why do many people choose static hosting for a personal site?", options:[
     {t:"It’s often free, fast, and needs very little maintenance or security work", ok:true, why:"No server program of yours means less to update and less to attack."},
     {t:"Static sites can’t use JavaScript, so they’re simpler", why:"Static sites can use JavaScript; it runs in the browser."},
     {t:"Search engines only list static sites", why:"Search engines list both kinds."},
     {t:"Static hosts include a free domain name of your own", why:"They give you a free address on their domain; your own domain is usually a separate yearly cost."}
   ]},
   {id:"t2u5-q08", lesson:"t2u5-l1", level:3, q:"Amara’s community garden site is static and on GitHub Pages. The group now wants volunteers to sign up for watering shifts on the site. What’s the simplest sensible approach?", options:[
     {t:"Keep the static site and link to (or embed) a sign-up form from a form or scheduling service", ok:true, why:"A specialist service stores the sign-ups; the static site stays simple. Mention the service in a privacy note."},
     {t:"Rebuild the whole site on a paid dynamic host", why:"Possible, but far more work and cost for one form."},
     {t:"Add JavaScript that saves sign-ups in the HTML file", why:"Browser JavaScript can’t change files on the host; every visitor would see only their own change, briefly."},
     {t:"Ask volunteers to edit the repository", why:"That would require GitHub accounts and write access for everyone: impractical and risky."}
   ]},
   {id:"t2u5-q09", lesson:"t2u5-l1", level:2, q:"Why is it easy to move a static site to a different host?", options:[
     {t:"It’s just plain files, which any static host can serve", ok:true, why:"Upload the same files elsewhere and, with your own domain, update the DNS."},
     {t:"Hosts copy each other’s sites automatically", why:"They don’t; you deploy to the new host yourself."},
     {t:"The domain name stores the files", why:"Domains store no files; they point to a host."},
     {t:"It isn’t easy: static sites are locked to their host", why:"Static files aren’t tied to any host, which is one of their strengths."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u5-q10", lesson:"t2u5-l2", level:1, q:"What is a commit?", options:[
     {t:"One saved change in a repository, with a message", ok:true, why:"Every upload or edit on GitHub’s website creates a commit."},
     {t:"A copy of the whole repository", why:"That’s closer to a download or a clone; a commit is one change."},
     {t:"The live website", why:"The website is published from the commits on the publishing branch."},
     {t:"A GitHub account setting", why:"Commits belong to repositories, not account settings."}
   ]},
   {id:"t2u5-q11", lesson:"t2u5-l2", level:2, q:"Priya wants her main personal site at `https://your-username.github.io/`, where `your-username` stands for her GitHub username. What must her repository be called?", options:[
     {t:"`your-username.github.io`", ok:true, why:"A user site must come from a repository named exactly username.github.io, in lower case."},
     {t:"`website`", why:"That would publish at `your-username.github.io/website/`, a project site."},
     {t:"`index.html`", why:"That’s the home page’s file name, not a repository name."},
     {t:"`Your-Username.github.io`, with capitals to match her display name", why:"GitHub says that if a username contains capital letters, the user site repository name must use lower case."}
   ]},
   {id:"t2u5-q12", lesson:"t2u5-l2", level:1, q:"Where in a repository do you turn on GitHub Pages?", options:[
     {t:"Settings → Pages → Build and deployment", ok:true, why:"There you choose “Deploy from a branch”, the branch and the folder."},
     {t:"The Issues tab", why:"Issues are for tracking tasks and bugs."},
     {t:"Your profile picture → Settings → Emails", why:"Account email settings don’t publish sites. (Profile Settings → Pages is for verifying domains.)"},
     {t:"Add file → Create new file", why:"That adds files; it doesn’t switch publishing on."}
   ]},
   {id:"t2u5-q13", lesson:"t2u5-l2", level:2, q:"Which file name will GitHub Pages use as a site’s home page?", options:[
     {t:"`index.html`", ok:true, why:"Pages looks for exactly this name (or index.md or README.md) at the top of the publishing source."},
     {t:"`Index.html`, with a capital I", why:"File names are case-sensitive; GitHub’s docs say `Index.html` won’t work."},
     {t:"`home.html`", why:"Any name works for other pages, but the home page must be `index.html`."},
     {t:"`index.HTML`, with a capital extension", why:"GitHub’s docs say it must be `index.html`, not `index.HTML`."}
   ]},
   {id:"t2u5-q14", lesson:"t2u5-l2", level:3, q:"Tomás’s project site at `your-username.github.io/choir/` shows text but no styling. His page has `<link rel=\"stylesheet\" href=\"/style.css\">` and `style.css` is at the top of the repository. What’s wrong?", options:[
     {t:"The leading slash makes the browser look for `your-username.github.io/style.css`, outside the project", ok:true, why:"A path starting with `/` begins at the top of the domain. `href=\"style.css\"` would find it inside `/choir/`."},
     {t:"GitHub Pages doesn’t support CSS", why:"It serves CSS files like any other file."},
     {t:"Style sheets must be in a folder called css", why:"Any folder works if the path matches."},
     {t:"He must wait 24 hours for CSS to deploy", why:"CSS deploys with everything else; the path is the problem."}
   ]},
   {id:"t2u5-q15", lesson:"t2u5-l2", level:2, q:"On a phone, how can Hana put uploaded photos into an `images` folder through the GitHub website?", options:[
     {t:"Create a file such as `images/notes.txt` to make the folder, open the folder, then use Add file → Upload files there", ok:true, why:"Typing a slash in a new file’s name creates a folder; uploads go into the folder you’re viewing."},
     {t:"Drag the folder from the phone’s home screen", why:"Phones can’t drag folders into a browser page."},
     {t:"Rename each photo to start with `images-`", why:"That changes the name, but doesn’t put the file in a folder; links to `images/…` would fail."},
     {t:"It’s impossible without a computer", why:"It’s possible with the folder trick described in the lesson."}
   ]},
   {id:"t2u5-q16", lesson:"t2u5-l2", level:2, q:"Where can you watch a GitHub Pages deploy and read its log?", options:[
     {t:"The repository’s Actions tab", ok:true, why:"Each deploy is a workflow run there, with a status and a log."},
     {t:"The Insights tab’s traffic graph", why:"Traffic shows visitors, not deploys."},
     {t:"The README file", why:"The README is a file in the repository, not a log."},
     {t:"Your email inbox only", why:"GitHub may email about failures, but the full log is in Actions."}
   ]},
   {id:"t2u5-q17", lesson:"t2u5-l2", level:3, q:"Lucía fixed a typo, the Actions run is green, but her phone still shows the old text. What should she try first?", options:[
     {t:"Open the page in a private tab, or force a full reload, to skip the browser’s cached copy", ok:true, why:"A green run means the new version is live; the old text is almost certainly a cached copy."},
     {t:"Delete the repository and upload everything again", why:"Drastic and unnecessary: the deploy already worked."},
     {t:"Change the publishing source to `/docs`", why:"That would move the site’s source and probably cause a 404."},
     {t:"Wait a week", why:"Cached copies usually expire much sooner, and a private tab shows the new version at once."}
   ]},
   {id:"t2u5-q18", lesson:"t2u5-l2", level:1, q:"On GitHub’s free plan, what must be true of a repository to publish it with GitHub Pages?", options:[
     {t:"It must be public", ok:true, why:"Pages is available in public repositories on GitHub Free; private repositories need a paid plan."},
     {t:"It must be private", why:"Private repositories can’t publish with Pages on the free plan."},
     {t:"It must contain at least 100 files", why:"There’s no minimum; one `index.html` is enough."},
     {t:"It must be older than a week", why:"A new repository can publish straight away."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u5-q19", lesson:"t2u5-l3", level:1, q:"What does a registrar do?", options:[
     {t:"Registers domain names for you, for a period you pay for", ok:true, why:"You register through a registrar and renew to keep the name."},
     {t:"Hosts your website’s files", why:"Some registrars also sell hosting, but registering and hosting are different services."},
     {t:"Issues HTTPS certificates", why:"Certificate authorities, such as Let’s Encrypt, do that."},
     {t:"Builds your web pages", why:"That’s your job, or a site builder’s."}
   ]},
   {id:"t2u5-q20", lesson:"t2u5-l3", level:2, q:"Which DNS record should point `www.example.com` at a GitHub Pages user site?", options:[
     {t:"A CNAME record with the value `your-username.github.io`", ok:true, why:"A subdomain is set up as an alias of your github.io name."},
     {t:"A CNAME record with the value `your-username.github.io/my-repo`", why:"A CNAME holds a host name only; GitHub finds the repository from the domain you saved."},
     {t:"A TXT record with the value `www`", why:"TXT records hold text such as verification codes; they don’t direct visitors."},
     {t:"An A record with the value `your-username.github.io`", why:"A records hold IP addresses, not names."}
   ]},
   {id:"t2u5-q21", lesson:"t2u5-l3", level:1, q:"In DNS settings, what does `@` usually stand for?", options:[
     {t:"The domain itself (the apex), such as `example.com`", ok:true, why:"Record names are relative to the domain; `@` means the domain with nothing in front."},
     {t:"Every subdomain at once", why:"That would be a wildcard, written `*`, which GitHub advises against."},
     {t:"An email address", why:"Email uses MX records; `@` in DNS settings is shorthand for the apex."},
     {t:"The `www` subdomain", why:"`www` is written as `www`."}
   ]},
   {id:"t2u5-q22", lesson:"t2u5-l3", level:2, q:"Why does GitHub recommend verifying your custom domain?", options:[
     {t:"So other GitHub users can’t publish their own Pages site at your domain", ok:true, why:"Verification restricts the domain and its immediate subdomains to your account’s repositories."},
     {t:"So your site loads faster", why:"Verification is about ownership, not speed."},
     {t:"It’s required before you can buy the domain", why:"You buy the domain from a registrar; verification happens afterwards, on GitHub."},
     {t:"So the domain renews automatically", why:"Renewal is set at your registrar."}
   ]},
   {id:"t2u5-q23", lesson:"t2u5-l3", level:3, q:"Fatima deleted her old portfolio repository last year but left `www` pointing to her GitHub Pages address (`your-username.github.io`, standing for her username). Her domain was never verified. Today a stranger’s page appears at her address. What happened, and what should she do?", options:[
     {t:"A domain takeover: someone added her domain to their repository. She should verify the domain on GitHub (which releases it to her) and fix or remove the DNS record", ok:true, why:"The leftover record sent visitors to GitHub, where no site claimed the name. Verifying a domain that another account is using (but hasn’t verified) releases it at once, and fixing DNS closes the gap."},
     {t:"Her registrar sold the domain; she can’t do anything", why:"The domain is still hers; the problem is a dangling DNS record."},
     {t:"Her browser cache is showing someone else’s site", why:"Caches store your own earlier visits; they don’t invent other people’s pages."},
     {t:"GitHub moved her site to a new owner after a year", why:"GitHub doesn’t transfer sites; the record pointed at GitHub with nothing of hers behind it."}
   ]},
   {id:"t2u5-q24", lesson:"t2u5-l3", level:2, q:"Ana set up her DNS an hour ago. Some friends see her new site; others still see the registrar’s parking page. What’s the likely reason?", options:[
     {t:"Some resolvers still have the old answer cached for the record’s TTL", ok:true, why:"DNS changes reach people as cached answers expire; GitHub allows up to 24 hours."},
     {t:"Her site is only visible in some countries", why:"GitHub Pages doesn’t restrict visitors by country."},
     {t:"Her friends need to install a certificate", why:"Visitors never install certificates for a site."},
     {t:"She needs a separate site for each friend", why:"Everyone reaches the same site once DNS has updated."}
   ]},
   {id:"t2u5-q25", lesson:"t2u5-l3", level:1, q:"Who provides the HTTPS certificate for a custom domain on GitHub Pages?", options:[
     {t:"GitHub requests it automatically from Let’s Encrypt", ok:true, why:"After the DNS check passes, GitHub gets, installs and renews the certificate for you."},
     {t:"You must buy one and upload it", why:"There’s nothing to buy or upload on GitHub Pages."},
     {t:"Your registrar emails it to visitors", why:"Visitors never receive certificates by email; servers present them during the connection."},
     {t:"Nobody: custom domains can’t use HTTPS on GitHub Pages", why:"All Pages sites, including correctly configured custom domains, support HTTPS."}
   ]},
   {id:"t2u5-q26", lesson:"t2u5-l3", level:3, q:"Sione’s site at his custom domain works over HTTPS, but the browser shows a warning on one page that loads a photo from `http://images.example.net/band.jpg`. What’s the fix?", options:[
     {t:"Change the address to `https://` (or host the photo with the site)", ok:true, why:"An HTTP resource on an HTTPS page is mixed content; serving it over HTTPS removes the warning."},
     {t:"Turn off Enforce HTTPS", why:"That weakens the whole site and doesn’t fix the mixed content."},
     {t:"Remove the custom domain", why:"The domain isn’t the problem; the one insecure image address is."},
     {t:"Add another A record", why:"DNS records don’t affect which addresses a page loads."}
   ]},
   {id:"t2u5-q27", lesson:"t2u5-l3", level:2, q:"Kenji’s domain will expire next month. What happens if he doesn’t renew it?", options:[
     {t:"His website and email at that domain stop working, and after any grace periods the name can be released to others", ok:true, why:"Registration lasts only as long as it’s paid for. ICANN describes a 30-day Redemption Grace Period for generic domains before deletion."},
     {t:"Nothing: domains are permanent once bought", why:"Domains are registered for a period and must be renewed."},
     {t:"GitHub renews it for him", why:"GitHub doesn’t sell or renew domains; the registrar does."},
     {t:"Only the HTTPS padlock disappears", why:"Without the domain, the site can’t be reached by that name at all."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u5-q28", lesson:"t2u5-l4", level:1, q:"In PageSpeed Insights, what Performance score does Google describe as good?", options:[
     {t:"90 or above", ok:true, why:"90+ is good, 50–89 needs improvement, below 50 is poor."},
     {t:"50 or above", why:"50–89 is “needs improvement”."},
     {t:"Exactly 100", why:"Perfect scores aren’t needed; 90 or above is good."},
     {t:"Any score, as long as the site loads", why:"The scores have defined ranges."}
   ]},
   {id:"t2u5-q29", lesson:"t2u5-l4", level:2, q:"Which format suits a company logo made of a few flat shapes best?", options:[
     {t:"SVG", ok:true, why:"SVG draws shapes, so it’s sharp at every size and usually tiny."},
     {t:"A high-quality JPEG", why:"JPEG is for photos; it blurs sharp edges and can’t be transparent."},
     {t:"A 4000-pixel PNG", why:"Far bigger than needed; SVG scales without extra pixels."},
     {t:"A GIF animation", why:"Nothing needs animating; GIF files are also poorly compressed."}
   ]},
   {id:"t2u5-q30", lesson:"t2u5-l4", level:2, q:"Why give an `<img>` its `width` and `height` attributes?", options:[
     {t:"So the browser reserves the right space before the image arrives, preventing the layout from jumping", ok:true, why:"That protects CLS (layout stability). CSS such as `max-width: 100%; height: auto;` still lets it shrink on phones."},
     {t:"To make the file download faster", why:"The attributes don’t change the file; resizing and compressing it does."},
     {t:"Because images without them never display", why:"They display, but the page may jump as they load."},
     {t:"To stop search engines indexing the image", why:"These attributes have nothing to do with indexing."}
   ]},
   {id:"t2u5-q31", lesson:"t2u5-l4", level:2, q:"Where should `loading=\"lazy\"` be used?", options:[
     {t:"On images further down the page, not on the main image at the top", ok:true, why:"Lazy loading delays images until the visitor scrolls near them; the first big image should load immediately."},
     {t:"On every image, including the main one", why:"Delaying the main image slows the main content appearing (LCP)."},
     {t:"Only on SVG files", why:"It works on any image; position on the page is what matters."},
     {t:"Nowhere: browsers ignore it", why:"Current browsers support native lazy loading."}
   ]},
   {id:"t2u5-q32", lesson:"t2u5-l4", level:1, q:"What does a meta description do?", options:[
     {t:"Gives a short summary that search engines may show under your link", ok:true, why:"Google says it may use it when it describes the page better than text from the page."},
     {t:"Guarantees a higher place in search results", why:"There’s no such guarantee."},
     {t:"Sets the text in the browser tab", why:"The `<title>` does that."},
     {t:"Lists keywords for Google to rank", why:"Google doesn’t use the keywords meta tag at all."}
   ]},
   {id:"t2u5-q33", lesson:"t2u5-l4", level:3, q:"Oluwaseun shares his site in a group chat, but the preview shows no image. His head has `<meta property=\"og:image\" content=\"images/card.jpg\">`. What’s the most likely fix?", options:[
     {t:"Use the full address: `https://…/images/card.jpg`", ok:true, why:"Preview cards are built by the app’s servers, which need an absolute URL for the image."},
     {t:"Rename the image `og.jpg`", why:"The name doesn’t matter; the address must be complete."},
     {t:"Add more keywords to the page", why:"Keywords have nothing to do with link previews."},
     {t:"Move the tag into the body", why:"Meta tags belong in the head; moving it would make things worse."}
   ]},
   {id:"t2u5-q34", lesson:"t2u5-l4", level:2, q:"What alt text should a purely decorative swirl between sections have?", options:[
     {t:"`alt=\"\"` (empty), so screen readers skip it", ok:true, why:"Decorative images add nothing to the content; empty alt hides them from assistive technology."},
     {t:"No alt attribute at all", why:"Without the attribute, some screen readers read the file name instead."},
     {t:"`alt=\"swirl.png\"`", why:"File names are noise for listeners."},
     {t:"`alt=\"Decorative image of a beautiful blue swirl\"`", why:"It adds words to listen to with no information."}
   ]},
   {id:"t2u5-q35", lesson:"t2u5-l4", level:3, q:"Hana’s site passes WAVE with no errors. Is it accessible?", options:[
     {t:"Not necessarily: tools can’t judge things like whether alt text is accurate or focus order makes sense, so she should also test by hand", ok:true, why:"W3C warns a page could pass quick checks yet still have significant barriers."},
     {t:"Yes: no errors means fully accessible", why:"Automated tools find only some problems."},
     {t:"No: WAVE results are always wrong", why:"WAVE is useful; it just can’t judge everything."},
     {t:"Only if the Lighthouse score is also 100", why:"Lighthouse has the same limits as other automated tools."}
   ]},
   {id:"t2u5-q36", lesson:"t2u5-l4", level:2, q:"On a GitHub Pages project site called `club`, which link in `404.html` will load the style sheet from any wrong address?", options:[
     {t:"`<link rel=\"stylesheet\" href=\"/club/style.css\">`", ok:true, why:"The 404 page appears at whatever address was requested; a path from the top of the domain, including the repository name, works from anywhere."},
     {t:"`<link rel=\"stylesheet\" href=\"style.css\">`", why:"Relative paths are worked out from the wrong address, so they fail at deeper addresses."},
     {t:"`<link rel=\"stylesheet\" href=\"/style.css\">`", why:"On a project site this points outside the project, to the top of the github.io domain."},
     {t:"`<link rel=\"stylesheet\" href=\"../style.css\">`", why:"This depends on the depth of the requested address, so it fails at some addresses."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u5-q37", lesson:"t2u5-l5", level:1, q:"Why do links to other websites break over time?", options:[
     {t:"Other sites move, rename or delete their pages", ok:true, why:"You don’t control outside pages, so check those links regularly."},
     {t:"Browsers stop supporting old links", why:"A link is just an address; browsers don’t expire them."},
     {t:"GitHub removes outside links after a year", why:"GitHub doesn’t change your files."},
     {t:"HTML links only last until the next deploy", why:"Links last as long as the page they point to exists."}
   ]},
   {id:"t2u5-q38", lesson:"t2u5-l5", level:3, q:"Kenji accidentally committed his email password in a text file and deleted it in the next commit. What should he do now?", options:[
     {t:"Change the email password straight away (and turn on two-step verification)", ok:true, why:"The old commit still contains it, and public repositories are scanned constantly. A changed password makes the leaked one useless."},
     {t:"Nothing: the file is deleted", why:"Deleting creates a new commit; the password remains in the history."},
     {t:"Rename the repository", why:"Renaming doesn’t remove anything from the history."},
     {t:"Make the repository private and keep the password", why:"It may already have been copied, and on the free plan Pages would stop. Change it."}
   ]},
   {id:"t2u5-q39", lesson:"t2u5-l5", level:2, q:"Which of these is **not** kept in your GitHub repository’s history?", options:[
     {t:"Your domain’s DNS records", ok:true, why:"DNS records live at your DNS provider; keep a private note of them."},
     {t:"Earlier versions of index.html", why:"Every committed version is kept."},
     {t:"The images you uploaded", why:"Uploaded images are commits like any other file."},
     {t:"The CNAME file created when you saved a custom domain", why:"When publishing from a branch, saving the domain commits that file."}
   ]},
   {id:"t2u5-q40", lesson:"t2u5-l5", level:2, q:"Why keep a downloaded ZIP of your repository somewhere else, when GitHub keeps all the history?", options:[
     {t:"So you still have the site if you lose access to the account or the repository is deleted", ok:true, why:"One copy in one account is a single point of failure; a second copy elsewhere follows good backup practice."},
     {t:"Because GitHub deletes history after a year", why:"GitHub keeps history; the risk is losing access to it."},
     {t:"Because the ZIP makes the site load faster", why:"A local copy doesn’t affect the live site."},
     {t:"It’s required before every deploy", why:"It’s a backup habit, not a deploy step."}
   ]},
   {id:"t2u5-q41", lesson:"t2u5-l5", level:2, q:"What is a honeypot field in a contact form?", options:[
     {t:"A field hidden from people that bots tend to fill in, so those submissions can be rejected", ok:true, why:"Real visitors never see it, so a filled-in honeypot signals a bot."},
     {t:"A field that asks for the visitor’s password", why:"Contact forms should never ask for passwords."},
     {t:"A field that stores cookies", why:"Form fields don’t store cookies."},
     {t:"A box that offers visitors a prize", why:"It’s a spam trap, not a reward."}
   ]},
   {id:"t2u5-q42", lesson:"t2u5-l5", level:3, q:"Lucía’s café site (visitors mostly in the EU) uses no cookies. She wants to add an analytics script that sets cookies to track visits. What does the EU’s official guidance indicate?", options:[
     {t:"She needs visitors’ consent before those analytics cookies are set", ok:true, why:"The EU’s Your Europe guidance lists tracking cookies used for analytics among those needing consent first, and says withdrawing consent must be as easy as giving it."},
     {t:"Nothing changes, because analytics is always exempt", why:"Only strictly necessary cookies are exempt; tracking for analytics isn’t."},
     {t:"Adding a banner that only says “we use cookies” is enough", why:"Where consent is needed, the cookies must wait until the visitor agrees; a notice alone doesn’t do that."},
     {t:"Cookie rules only apply to sites that sell things", why:"They apply to storing information on visitors’ devices, whatever the site does."}
   ]},
   {id:"t2u5-q43", lesson:"t2u5-l5", level:1, q:"Why can’t a static site on GitHub Pages receive contact-form messages by itself?", options:[
     {t:"There’s no program on the server to receive and store them", ok:true, why:"Static hosting only sends files; a form must send to an outside service, or you use email."},
     {t:"HTML doesn’t have forms", why:"HTML has forms; the problem is what receives the data."},
     {t:"GitHub blocks all forms", why:"Forms display fine; they just need somewhere to send data."},
     {t:"Forms only work with a custom domain", why:"The domain doesn’t matter; a receiver does."}
   ]},
   {id:"t2u5-q44", lesson:"t2u5-l5", level:3, q:"Mei’s site is down for everyone. GitHub’s status page shows no incidents, and the latest Actions run has a red cross. What’s her next step?", options:[
     {t:"Open that run and read the log to see which step failed and why", ok:true, why:"The log says what went wrong; if it’s a temporary GitHub-side error, she can re-run it."},
     {t:"Buy a new domain", why:"Nothing points to the domain; the deploy failed."},
     {t:"Clear her browser cache", why:"It’s down for everyone, so it isn’t her cache."},
     {t:"Delete the Actions tab", why:"The Actions tab is where she’ll find the answer."}
   ]},
   {id:"t2u5-q45", lesson:"t2u5-l5", level:2, q:"Which habit best protects a club’s site when the volunteer who built it moves on?", options:[
     {t:"A second trusted owner, plus a private note of the domain, DNS and service logins and renewal dates", ok:true, why:"The site depends on accounts and settings outside the repository; sharing ownership and documenting them keeps it running."},
     {t:"Keeping all passwords in a file in the public repository", why:"Never put passwords in a repository, public or not."},
     {t:"Turning off two-step verification so others can log in", why:"That weakens security; add other owners instead of sharing one login."},
     {t:"Deleting the site so it can’t go out of date", why:"That throws away the club’s work rather than handing it over."}
   ]}
  ]
});
