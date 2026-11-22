/* IT CHICK Academy · capstone projects (Pass 25): one per track, shown at the end of the track in Quests.
   Fields: id "<track>-capstone", track, title, icon, hours ("10–15"), blurb (one line), after [unit ids it draws on],
   brief [paragraphs, markdown], deliver (what the learner ends with), stages [{t, units:[ids], how:[steps], write}],
   rubric [{c: criterion, d: what "Yes" looks like}], share (how to get feedback). See CAPSTONE_BRIEF.md.    Written as dev/capstones/<track>.js and joined by tools/build_capstones.py: edit the parts, not this file. */
/* Track 1 · Capstone · Digital life audit and plan */
ICA.addCapstone({
  id:"t1-capstone", track:"t1", title:"A digital life audit and plan", icon:"🧭", hours:"12–18",
  blurb:"Check one real digital setup for security, privacy, backups, accessibility and AI use, then write a short report and a setup guide someone else could follow.",
  after:["t1u2", "t1u3", "t1u5", "t1u7", "t1u8", "t1u12"],
  brief:[
    "In this project you look carefully at one real digital setup and make it safer and easier to live with. You check five areas: **security** (passwords, two-step verification, updates, locks), **privacy** (checkups, location, permissions, ads), **files and backups** (where things live, what’s backed up, whether a restore works), **accessibility** (whether the devices and shared files work for the people who use them) and **AI use** (which AI features are on, what they can see, how their answers get checked). You end with a short report and a **setup guide**: a few written routines that someone could follow without you.",
    "Choose whose setup you audit. **Your own** works for everyone. **A household**, such as a parent’s phone or a shared family computer, works if every person agrees and sits with you while you look at their things. **A small group**, such as a club, a community garden or a two-person business, works with the permission of the person responsible. Choose a reader too: the person whose setup it is, someone who might take over one day (a partner, an adult child, the next club secretary), or simply you in a year’s time.",
    "This matters because most problems people meet are ordinary: a reused password, a phone with no backup, recovery codes nobody can find, a shared link open to anyone, an AI feature that sees more than anyone meant. The habits from this track stop most of them, but only once someone checks what is really switched on and writes it down.",
    "Stay within these limits. You **look and record**; you change nothing on another person’s device or account unless they are with you and agree. Use only free tools you already have: the built-in settings and checkups, a free password manager, and a free document app (Google Docs, Word for the web, LibreOffice Writer or Pages). Don’t pay for anything, factory reset anything, or change a router you don’t look after. Optionally, add a sixth area of your choice: your home network (Unit 4) or digital wellbeing (Unit 5, Lesson 5).",
    "**The one rule that never bends:** no passwords, PINs, recovery codes, account numbers, full email addresses, IP addresses, Wi-Fi names or home addresses go into your report, your guide or the notes on this page. Name accounts by their role (“main email”, “bank app”, “photo cloud”) and write what you checked, not the secret itself. The notes here are saved on this device and printed in your capstone record, so treat them like the report."
  ],
  deliver:"A 3–5 page audit report as a PDF (scope, findings in all five areas, and a dated action plan) plus a 1–2 page setup guide of step-by-step routines that another person has tested, with no secrets in either.",
  stages:[
    {t:"Set the scope and the ground rules", units:["t1u1", "t1u3"],
     how:[
      "Write one sentence on whose setup you’re auditing, who agreed to it and today’s date (written as 2026-11-20, so it sorts).",
      "List the devices in scope with each one’s model and system version (Unit 1, Lesson 1). Leave out serial numbers.",
      "List the important accounts **by role only**, as in Unit 3, Lesson 1: main email first (it can reset the others), then money, messaging, photos and work or study.",
      "Name your reader and what they need: the whole picture, or only the routines?",
      "Start a document with real headings (Unit 8, Lesson 1): Summary, Scope, Findings, Action plan, Setup guide. Save it in a project folder named with the date, as in Unit 2, Lesson 3."
     ],
     write:"Whose setup, who agreed, the devices (model and version) and the accounts by role. No passwords or addresses."},
    {t:"Audit security and privacy", units:["t1u3", "t1u5", "t1u1"],
     how:[
      "For each account on your list, check and record: password unique and kept in a password manager? Two-step verification or a passkey on? Recovery codes reachable without the phone? (Unit 3, Lessons 2 and 3.)",
      "Run each main account’s security checkup and privacy checkup (Unit 3, Lesson 1; Unit 5, Lesson 2). Note anything unfamiliar, such as an old device or a recovery number that isn’t yours.",
      "For each device, check: automatic updates, built-in protection, screen lock and encryption (Unit 3, Lesson 5).",
      "Review location access, app permissions and ad personalization on the main phone (Unit 1, Lesson 4; Unit 5, Lesson 2).",
      "Record each check in a table with a header row: the item, what you looked at, the result (OK, Gap or Not applicable) and the date. Use words, not just colors, so the result survives printing and screen readers."
     ],
     write:"Your findings table in short form: item, result, date. Count your Gaps."},
    {t:"Audit files, backups and recovery", units:["t1u2", "t1u7"],
     how:[
      "Map where the important files live: on the device, synced to a cloud, or online-only (Unit 2, Lesson 4). Name the folders, not their contents.",
      "Count the copies of the most precious files against the {{rule-321|3-2-1 rule}} (Unit 2, Lesson 5). Remember that sync is not a backup: a deletion syncs too.",
      "Do a {{restore-test|restore test}}: bring back one file from a backup, open it, and write down the date and how long it took.",
      "Review who can open two shared files or folders, and narrow any “anyone with the link” share that doesn’t need it (Unit 2, Lesson 4).",
      "Check how full the device and the cloud account are (Unit 1, Lesson 5), and run the factory-reset readiness check from Unit 7, Lesson 5 (don’t reset)."
     ],
     write:"Copies of the precious files (where, how many), your restore-test date and result, and any share you narrowed."},
    {t:"Audit accessibility and AI use", units:["t1u8", "t1u10", "t1u12", "t1u6"],
     how:[
      "Ask each person who uses the setup what is hard for them: small text, hearing calls, reading long pages. Open **Settings → Accessibility** (Windows 11, ChromeOS, iPhone, Android; **Ease of Access** on Windows 10; names vary a little by maker) or **System Settings → Accessibility** (Mac) together, and note one setting that would help, such as larger text or live captions (Unit 10, Lesson 4; live captions don’t yet work in every language).",
      "Take one document or form the group shares often. Run its accessibility checker and do the hand checks from Unit 8, Lesson 5. Note what fails.",
      "List the AI features switched on across the devices and apps, and where their privacy settings are (Unit 12, Lesson 4).",
      "Write down what goes into them. Do people paste in other people’s details, health or money information, or work files? Check each tool’s setting on whether chats are saved or used for training.",
      "Test one AI answer or summary the group relies on against its source, as in Unit 6, Lesson 5 and Unit 12, Lesson 4, and note how many points held up."
     ],
     write:"One accessibility setting that helps someone, the checker results for the shared file, the AI features found and one setting decided."},
    {t:"Draft the report and the setup guide", units:["t1u8", "t1u3", "t1u2"],
     how:[
      "Write the **Findings** section area by area. For each Gap, say what could go wrong in plain words (“if this phone is lost, the photos since March are gone”).",
      "Turn the Gaps into an **Action plan** of 5–10 actions, ranked by harm and effort: the main email account first, quick fixes next, bigger jobs last. Give each action an owner and a target date.",
      "Fix the three most urgent actions now, with the owner present, and mark them done with the date.",
      "Write the **Setup guide**: 3–4 routines as numbered steps that name the real device and menus. Good choices: a monthly 15-minute check, the backup and restore test, the {{incident-response|first-hour plan}} after a hack, and setting up a new phone.",
      "Write the **Summary** last: four or five sentences a busy reader could stop after. Use styles, real lists and a table with a header row (Unit 8, Lessons 1 and 3)."
     ],
     write:"Your top three actions and their dates, and the names of the routines in your guide."},
    {t:"Test, check and revise", units:["t1u8", "t1u12", "t1u7"],
     how:[
      "Ask someone to follow one routine from the guide on their own device while you watch without helping. If no one is available, follow it yourself a week later on a different device. Note every place they hesitated.",
      "Do a **secrets sweep**: search the document for `@`, `password`, `code`, `PIN`, long runs of numbers and your Wi-Fi name. Remove anything that could help a stranger.",
      "Check every menu name in the guide against the device on the day, and add “Checked on [date] with [system version]” to each routine.",
      "If an AI tool helped you draft or summarize, check every sentence it produced against your findings. Never paste the findings themselves into an AI tool: a list of Gaps is exactly what an attacker would want (see {{ai-privacy-disclosure|what you share with AI tools}}).",
      "Run the accessibility checker on your own report and fix what it finds (Unit 8, Lesson 5). Then revise the steps where your tester hesitated."
     ],
     write:"Where your tester hesitated and what you changed, and what the secrets sweep found."},
    {t:"Package and hand over", units:["t1u8", "t1u2", "t1u11"],
     how:[
      "Add a short note at the end: the date of the audit, the tools you used, and whether and how AI helped.",
      "Export the report and guide as a PDF and test it: the text can be searched and the headings show as bookmarks where your app adds them (Unit 8, Lesson 5).",
      "Name the file with the date first, for example `2026-11-20 digital audit.pdf`, and save it in your project folder, which your backup covers.",
      "Give the reader their copy safely: in person, printed, or as a shared file set to view only for that one person (Unit 11, Lesson 4). Don’t post it publicly.",
      "Add a calendar reminder to repeat the audit in six months and to run the monthly check (Unit 11, Lesson 3). Then score yourself with the rubric below."
     ],
     write:"Where the final PDF lives, who received it and how, and the date of the next audit."}
  ],
  rubric:[
    {c:"Scope and reader", d:"The first page says whose setup was audited, who agreed, the date, the devices and accounts (by role) and who the report is for."},
    {c:"Findings based on evidence", d:"All five areas have at least three checked items each, with what you looked at, the result and the date. Nothing is guessed or copied from a general checklist."},
    {c:"A ranked, realistic plan", d:"The action plan puts the main email account and other high-harm Gaps first, every action has an owner and a date, and at least three are already marked done."},
    {c:"A setup someone else can follow", d:"Another person (or you on another device, a week later) followed at least one routine without asking a question, and the backup routine includes a restore test that worked, with its date."},
    {c:"Accurate and dated", d:"Every step names the real menus for the device and system version it was checked on, and each routine says when it was checked."},
    {c:"Clear and accessible for the reader", d:"A short summary comes first, the headings show in the document’s map, lists and tables are real ones, the checker passes, and the PDF’s text can be searched."},
    {c:"Safe and honest", d:"The report, guide and notes contain no passwords, codes, account numbers, addresses or network details; other people’s settings were checked only with them present; any AI help is named and its output was checked."}
  ],
  share:"The best test is a person following your guide. Ask a friend, a family member or a study partner to try one routine and to tell you where they got stuck; you don’t need to show them the whole report. If you study in a group, swap setup guides (not reports) and score each other with the rubric. If you want an outside opinion on a routine, ask a general question in a help forum or a library’s digital help session (“Is this a sensible backup routine for one phone and one laptop?”) without saying what’s missing in your own setup: a public list of gaps helps attackers more than it helps you. Share the full report only with the people it’s about."
});
/* Track 2 · Capstone · A published site and a Python project */
ICA.addCapstone({
  id:"t2-capstone", track:"t2", title:"A published site and a Python project", icon:"🚀", hours:"18–25",
  blurb:"Build and publish a small website with one JavaScript feature, and a tested Python program in a public repository with a README, on a theme you choose.",
  after:["t2u3", "t2u4", "t2u5", "t2u7", "t2u9", "t2u10"],
  brief:[
    "In this project you make two linked things on one theme. The first is a **small website** of two to four pages: HTML and CSS that work on a phone and a wide screen, plus one JavaScript feature, published at a public address. The second is a **small Python program** in a public GitHub repository, with tests and a README a stranger can follow. The website introduces the project and links to the repository, so together they work as a first portfolio piece.",
    "Choose the option that suits you, or adapt one:\n**A. Club or community group:** an events page with a button that shows or hides events by type, and a Python script that totals an invented sign-up CSV per event and writes `summary.csv`.\n**B. Small shop or café:** a menu page with an order calculator that rejects impossible quantities, and a Python script that totals a week of invented sales per item and lists the best sellers with `sorted()`.\n**C. Language or subject learner:** a vocabulary page with cards that reveal their answers, and a Python quiz that reads a word list from CSV or JSON, asks in random order and keeps a score.\n**D. Tidy-up helper:** a personal page about what you’ve learned, and a Python organizer that sorts a practice folder by file type, with a dry run first and safe to run twice.\n**E. Numbers and puzzles:** a page that explains linear and binary search, with a tool that uses a `while` loop to show how many checks each needs for a list size you type, and a Python program that times both searches or simulates dice.",
    "Write for a real reader: a club member who will use the page, someone looking at your portfolio for a course or a job, or a stranger on GitHub who wants to run your script. Both the home page and the README should tell that person, in the first two sentences, what this is and who it’s for.",
    "Keep it small and use only what this track taught. The site is **static**: no server, no database, no logins, and no form that sends anyone’s data anywhere. The Python uses the standard library (`csv`, `json`, `pathlib`, `random`, `time`) plus `pytest` for tests, in roughly 50–200 lines. All data is invented by you or openly licensed and credited: never real people’s names, emails or sign-ups. No keys, passwords or tokens in either repository. AI coding tools are allowed as a reviewer (Unit 11, Lesson 4), as long as you can explain every line you keep and say how you used them.",
    "A computer makes this easier, but you can do it on a phone. Build and test the pages in the Web Lab and the Python in the Python Lab, then create the files on GitHub’s website, as in Unit 5, Lesson 2. The Python Lab can’t open files saved on your phone, so while you test there, let the program first write a few lines of sample data to a file (or keep them in a string). On a phone, write your tests as plain `assert` checks inside test functions, and call them at the end of the program: `pytest` can run the same functions later on any computer. GitHub Pages is free for public repositories (checked November 2026); another free static host from Unit 5, such as Netlify or Cloudflare Pages, is fine for the site."
  ],
  deliver:"A live website of 2–4 pages with one JavaScript feature, linked to a public GitHub repository holding a tested Python program with a README, a license and a `.gitignore`, plus a short written reflection.",
  stages:[
    {t:"Choose an option and plan both halves", units:["t2u11", "t2u5", "t2u1"],
     how:[
      "Pick an option (A–E) or adapt one, and write one paragraph: what the site and program do, who the reader is, and what they’ll be able to do.",
      "Sketch each page on paper at phone width and at wide width: headings, navigation, the JavaScript feature, and the link to the repository (Unit 1, Lesson 3).",
      "Decompose the program into input → steps → output, and write the main steps as pseudocode (Unit 9, Lesson 1). Write two edge cases now, such as an empty file or a word where a number should be.",
      "Split your list into **must have** and **nice to have**. Build only the must-haves first.",
      "Create two folders with safe names, such as `garden-club-site` and `garden-club-tally`, with sub-folders for images and styles (Unit 1, Lesson 3)."
     ],
     write:"Your option, your reader, your must-have list, and the program’s input → steps → output."},
    {t:"Build the website", units:["t2u2", "t2u3", "t2u4"],
     how:[
      "Write each page’s skeleton (doctype, `lang`, charset, viewport, a specific title) and structure it with `header`, `nav`, `main` and `footer`, headings in order, and alt text on every image (Unit 2).",
      "Style it from one linked stylesheet: colors as custom properties that pass WCAG contrast (note the ratios), `rem` sizes, flexbox or grid, and a mobile-first media query (Unit 3).",
      "Add the JavaScript feature with a `defer` script: find elements, read inputs with `Number()`, change text with `textContent` or toggle a class, and show a kind message for empty or impossible input (Unit 4, Lesson 5).",
      "Turn the folder into a Git repository and commit after each working step, with messages that say what and why (Unit 7, Lesson 2). On a phone, save your Web Lab code in a notes app as you go.",
      "Check each page with the W3C validator and fix every error (Unit 2, Lesson 5)."
     ],
     write:"Your pages, your contrast ratios, and what the JavaScript feature does with good and bad input."},
    {t:"Build the Python program", units:["t2u8", "t2u9", "t2u6"],
     how:[
      "Make a small, invented sample data file (or practice folder for option D) and keep it in the repository so others can try the program.",
      "Write the program as small functions with clear names and docstrings: one to read, one to calculate, one to write or print (Unit 8, Lesson 5; Unit 11, Lesson 1).",
      "Read files with `pathlib` and `encoding=\"utf-8\"`, use `csv` or `json` (Unit 10, Lessons 1–2), and write results to a **new** file so the input is never overwritten.",
      "Handle bad input calmly: skip or report a line that isn’t a number instead of crashing. If the program moves or renames files, add a dry run that prints the plan first (Unit 10, Lesson 3).",
      "Run it from the command line (`python3 tally.py`; on Windows `py tally.py` or `python tally.py`) or in the Python Lab, and commit each working step (Unit 6, Unit 7)."
     ],
     write:"What your program reads and writes, and the command that runs it."},
    {t:"Test and debug", units:["t2u10", "t2u9", "t2u5"],
     how:[
      "Write at least five tests in `test_*.py` files, including your two edge cases, and run them with `python3 -m pytest` (`py -m pytest` on Windows; Unit 11, Lesson 2). On a phone, run the same `assert` checks in the Python Lab.",
      "Break your program on purpose once, watch a test catch it, and fix it. Read any traceback from the bottom up (Unit 10, Lesson 4).",
      "On a computer, run `ruff format` and `ruff check` and fix what they find (Unit 11, Lesson 1).",
      "Test the site at 360 px wide (no sideways scrolling), with the keyboard only, with WAVE and with PageSpeed Insights, and fix the main problems (Unit 5, Lesson 4).",
      "Keep a short bug log: symptom, cause, fix. You’ll need one bug for your reflection."
     ],
     write:"Your test names and results, and one bug from your log: symptom, cause, fix."},
    {t:"Publish and document", units:["t2u7", "t2u5", "t2u10"],
     how:[
      "Check that Git uses your private noreply email (Unit 7, Lesson 1), that `.gitignore` keeps out `.venv`, `__pycache__` and `.env`, and that no key, password or real personal data is in any file or old commit (Unit 7, Lesson 5).",
      "Push both repositories to GitHub as public repositories (Unit 7, Lesson 4), and publish the site with {{github-pages}} or another free static host (Unit 5, Lesson 2).",
      "Add a title, description, preview tags, a favicon and a custom 404 page to the site (Unit 5, Lesson 4), and link the site to the Python repository.",
      "Write the README (Unit 11, Lesson 3): what it does and for whom, how to set it up and run it, an example of input and output, how to run the tests, where the sample data came from, the license, and a line on how you used AI tools (or that you didn’t).",
      "Add a LICENSE file and a `requirements.txt` that lists `pytest`. Then open both repositories in a private window, as a stranger would see them."
     ],
     write:"The address of your site and your repositories, and anything the private-window check made you change."},
    {t:"Get a review and revise", units:["t2u7", "t2u10", "t2u9"],
     how:[
      "Ask someone to follow your README on their own computer, or follow it yourself in a new folder after cloning or downloading the ZIP. Watch where they get stuck without helping.",
      "Ask a second person (or yourself, two days later) to use the site on a phone and say what confused them.",
      "Turn each problem into a GitHub issue, fix it on a branch, and merge it through a pull request that closes the issue (Unit 7, Lesson 5).",
      "Optionally ask an AI assistant to review one function using the review loop from Unit 11, Lesson 4. Don’t paste anything private. Keep only changes you understand and have tested, and note what you accepted and rejected.",
      "Re-run the tests, the validator and the link check after the last change (Unit 5, Lesson 5)."
     ],
     write:"What your testers got stuck on, the issues you opened, and what you changed."},
    {t:"Reflect and package", units:["t2u10", "t2u5"],
     how:[
      "Write a reflection of 200–300 words in your own words: what the project does and for whom, how one part of your code works, one bug you found and fixed, and what you’d add next.",
      "Put the reflection on an “About this project” page of the site or at the end of the README.",
      "Make a backup: download each repository as a ZIP and keep it in a second place (Unit 5, Lesson 5).",
      "Add calendar reminders to check links and dates every month and to re-run the tests and checks every three months (Unit 5, Lesson 5). Then score yourself with the rubric below."
     ],
     write:"Your reflection, or where it lives, and the date you finished."}
  ],
  rubric:[
    {c:"Purpose and reader", d:"The home page and the README each say in their first two sentences what the project does and who it’s for, and every must-have from your plan works."},
    {c:"A live site that works everywhere", d:"The site loads over HTTPS on a phone and a computer with no broken links or missing styles and no sideways scrolling at 360 px, and its JavaScript feature handles good input and rejects bad input kindly."},
    {c:"Python that runs and is tested", d:"A stranger can run the program by following the README alone; it never overwrites its input; and at least five tests pass, including two edge cases."},
    {c:"Readable code and a clear history", d:"Names and docstrings explain the code, the formatter and linter (on a computer) are clean, and the Git history shows at least ten commits with useful messages and at least one merged pull request."},
    {c:"Valid and accessible", d:"The validator shows no errors, text contrast is at least 4.5:1 (3:1 for large text), images have suitable alt text, headings are in order, and everything works with the keyboard alone."},
    {c:"Safe and honest", d:"No secrets or real people’s data in either repository, a private commit email, a license, sample data credited or invented, and a README line saying how AI tools were used, with every kept line one you can explain."},
    {c:"Reflection", d:"In your own words, you explain how one part of your code works, one bug you found and fixed, and what you’d change next."}
  ],
  share:"Your repository is already public, which makes feedback easy. Ask a friend or study partner to follow the README and open a GitHub issue for anything unclear; that is exactly how open-source projects get feedback. If you study with others, swap projects and score each other with this rubric. For a specific Python question, the **Python Help** category of the official forum at discuss.python.org welcomes beginners (checked November 2026): ask about one small, clear problem with a minimal example, as in Unit 10, Lesson 5. Stay safe while you do it: share links to your repository rather than files, never share tokens or passwords, don’t give anyone access to your account, and don’t run code a stranger sends you until you understand it (Unit 6, Lesson 5)."
});
/* Track 3 · Capstone · A reproducible report on open data */
ICA.addCapstone({
  id:"t3-capstone", track:"t3", title:"Your open-data report", icon:"📊", hours:"15–25",
  blurb:"Ask one clear question of a real open dataset, and answer it in a short, honest report that anyone could rebuild from your files.",
  after:["t3u3","t3u4","t3u5","t3u6","t3u8","t3u10"],
  brief:[
    "You’ll make a short report that answers **one question** with **one open dataset**. It has a clear question, the data’s source with its license and citation, a {{cleaning-log|cleaning log}}, summary statistics, one honest chart (up to three if you really need them), a plain statement of how sure you can be, and the limits of the data. Next to the report sits a folder that rebuilds every number from the untouched download. This is the investigation that ends most statistics and data courses: question → data → analysis → report.",
    "Write for one real or realistic reader who is **not** a data person: a club committee deciding on opening hours, a local councillor, a head teacher, an editor checking a story, a neighbor group. They should be able to read it in about ten minutes, say the answer back in their own words, know how sure to be, and trust it because they could check it.",
    "**Keep it small.** One question; one dataset (or two joined by a shared key, such as year or region); one main comparison, trend or relationship; about 1,500–2,500 words. Use data that is already published and open, preferably counts or rates for places, years or groups. Don’t collect new data from people, and don’t use any file with names, contact details or other information that could identify someone. A question that describes or compares (“How much…?”, “Did it change…?”, “Do these groups differ…?”) is easier to answer honestly than “What caused…?”.",
    "**Choose your path.** On a computer or in Posit Cloud, write the report in [[quarto|Quarto]] (or R Markdown, if that is what you have), so the text and the numbers come from the same file. If you skipped R, or you work only on a phone or tablet, use the **spreadsheet path**: Google Sheets, LibreOffice Calc or Excel for the data, with the raw sheet untouched and every result made by a formula, and any word processor for the write-up. Both paths can get “Yes” on every rubric point.",
    "**Choose your topic.** Any open dataset you can read and reuse will work: a table from your national statistics office, a city portal (cycle counts, library loans, air quality readings), an international source such as the World Bank, the OECD or Our World in Data, or a dataset with a DOI on Zenodo or Dataverse. Pick something you or your reader care about: the questions you ask will be sharper."
  ],
  deliver:"A 4–6 page report (HTML or PDF) that answers one question with one open dataset, plus a folder that rebuilds it: the raw download, a README with the data’s license and citation, a data dictionary, the cleaning log, and the code (`.qmd`) or the formula workbook.",
  stages:[
    { t:"Choose a question, a reader and a dataset", units:["t3u10","t3u1"],
      how:[
        "Write three possible questions. Each one names what is measured, for whom or where, and when (for example, “Did weekday cycle counts at the city’s counters return to their 2019 level by 2025?”). Pick the one your reader most needs answered.",
        "Find a dataset that can answer it, and fill in the six-question report card from the open-data unit (who and why, how collected, definitions, coverage and gaps, updates and version, license). Note anything in the definitions that doesn’t quite match your question.",
        "Read the license (for example CC0, CC BY, ODbL or an open government license). Check that it lets you reuse the data and share what you make, then write your attribution line and a full citation with version or retrieval date (see {{citing-data|citing data}}).",
        "Privacy check: the rows should be places, years or groups, or an official public-use file that has already been anonymized. If you could pick out a person, choose different data. Never try to identify anyone.",
        "Write a one-paragraph plan: reader, question, dataset, “one row = one what?”, and the single number, comparison or trend that would answer the question."
      ],
      write:"My reader and what they need to decide… My question… Dataset (title, publisher, link or DOI, version or date I downloaded it)… License and what it asks of me… Attribution line… One row = one… Privacy check… The number or comparison that would answer it…" },
    { t:"Set up a project that rebuilds itself", units:["t3u2","t3u7","t3u8"],
      how:[
        "Make one folder for the project, with a `data-raw` folder for the download (never edit it), a `data` folder for clean files, and a `README` text file. Write the download date and link in the README now.",
        "R path: make an RStudio project (**File → New Project**) or a Posit Cloud project (its free plan has a monthly limit on hours; see posit.cloud/plans). Create `report.qmd` with a YAML title and `format: html`, add a first chunk that reads the raw file, and click **Render** once to prove it works.",
        "Spreadsheet path: make a workbook with sheets named `raw` (paste the download here once and protect it), `clean` (built by formulas that point at `raw`, or by steps you log), `summary`, `log` and `dictionary`. Google Sheets keeps a version history automatically (**File → Version history**); in other apps, save dated copies.",
        "Check the import: count the rows and columns, the type of each column (numbers stored as text?), how missing values are coded, and whether dates came in as dates. Compare the row count with what the publisher says.",
        "Write a {{data-dictionaries|data dictionary}} for the columns you’ll use: name, meaning, type, units, codes and how missing values appear."
      ],
      write:"My folder layout… Rows × columns on import (and what the publisher says)… Column types I had to fix… How missing values are coded… Dictionary done for these columns…" },
    { t:"Clean the data and keep the log", units:["t3u3","t3u2","t3u8"],
      how:[
        "List every problem you find, and give each one a rule: fix it by a rule, fix it with evidence, or flag it and leave it (the cleaning unit’s “fix, flag or leave”).",
        "**Before you calculate the answer**, write your rules for missing values, outliers and any rows you will leave out. Rules set in advance can’t be steered by the result you hope for.",
        "Do the cleaning in code (`filter()`, `mutate()` and friends, or the base R versions) or in helper columns with formulas (TRIM, find and replace, splitting columns). OpenRefine is a good option on a computer; extract its history as `clean_steps.json`.",
        "Keep the log as you go: files and row counts in and out, each step with its rule and how many cells or rows it changed, each judgment call with its reason, and your final checks.",
        "Rebuild from raw: render again (R), or paste the raw data into a fresh copy of the workbook and follow your log (spreadsheet). The clean row count and two or three totals should match exactly."
      ],
      write:"My cleaning log: rows in… each step (rule and count)… judgment calls and why… rules for missing values and outliers, written before analysis… rows out… did the rebuild match?" },
    { t:"Describe, chart and say how sure you are", units:["t3u5","t3u4","t3u6"],
      how:[
        "Look at the shape first (a histogram or dot plot), then report n, missing values, a center and a spread that suit that shape (median and IQR for skewed data, mean and SD for roughly symmetric data), by group if you are comparing. Use rates or per-person figures when the groups differ in size.",
        "Choose the chart type that fits your question. Give it a title that states the finding, labeled axes with units, an honest baseline and scale, colors that survive a greyscale test, a source note with the license, and alt text.",
        "Estimate how sure you can be. If your data are a **sample**, give a 95% {{standard-error-ci|confidence interval}} for your main number or difference (CONFIDENCE.T or T.TEST in a spreadsheet, `t.test()` in R, or for a proportion p ± 1.96 × √(p(1 − p) ÷ n), the standard error from Unit 7). If they are a **full count** (all records, a census), say so: sampling error doesn’t apply in the usual way, but measurement, coverage, changing definitions and year-to-year ups and downs still do.",
        "If you run more than one test, count them and say so in the report, and consider a correction (see {{multiple-testing|multiple testing}}). Report the size of a difference, not just whether it is “significant”.",
        "Write your uncertainty statement twice: once as numbers (“a difference of 4.2 points, 95% CI 1.1 to 7.3”) and once in plain words your reader would use."
      ],
      write:"Key statistics (n, missing, center, spread)… Main chart: the question it answers and its title… Sample or full count?… My interval or other uncertainty… Tests run (how many)… Uncertainty in plain words…" },
    { t:"Draft the report", units:["t3u8","t3u1","t3u4"],
      how:[
        "Use this outline: title that states the finding; a three-sentence summary (question, answer, how sure); data (source, license, citation, what one row is); method (cleaning in brief, with a pointer to the log); results (a small table and your chart); uncertainty and limits; what it means for your reader; references; AI-use statement.",
        "Make every number traceable. R path: compute numbers in the text with inline R code, so they update when the data do. Spreadsheet path: copy each number from a labeled cell, and keep a “numbers used” table in the workbook (sentence, sheet, cell).",
        "Put numbers in context for your reader: rates instead of raw counts where groups differ in size, absolute and relative change together, units every time, real (inflation-adjusted) money for prices over time.",
        "Name at least two limits: who or what the data leave out, definitions that don’t match your question, and why your result shows a pattern rather than a cause. Cite R and any packages (`citation()` in R) or the app you used.",
        "If you used an AI tool for code, wording or a chart, rerun and check every line, number and label it gave you, and say in one short statement which tool you used, when, for what, and how you checked. Never paste data about people into an AI tool."
      ],
      write:"Title… Three-sentence summary… Words so far… Every number traced to code or a cell? … My two main limits… AI-use statement (or “No AI tools were used”)…" },
    { t:"Check against the rubric, and revise", units:["t3u4","t3u5","t3u10"],
      how:[
        "Rebuild test: copy the folder to a new place (or a new Posit Cloud project, or a fresh copy of the workbook) and rebuild from the raw file using only your README. Fix anything you had to remember rather than read.",
        "Recheck two or three key numbers a second way: a pivot table, a calculator, a different function, or `summary()`.",
        "Audit your chart with the field guide to chart tricks (baseline, scale, color, labels, uncertainty), and view it in greyscale and at phone size.",
        "Score yourself on the rubric below, honestly. Then ask one reader to read only the title, the summary and the chart, and tell you the finding and how sure it is in their own words (see “Show it to someone”).",
        "Revise wherever their words differ from what you meant, and keep a short list of what you changed and why."
      ],
      write:"Rebuild test: what broke and how I fixed it… Numbers I double-checked, and how… Chart audit… My reader’s version of the finding… What I changed…" },
    { t:"Package it and share it safely", units:["t3u10","t3u8"],
      how:[
        "Finish the README: the question, how to rebuild (software and version: `sessionInfo()` in R, or the app and date), the folder contents, the dataset citation and license, and a license for your own report and code if you share them (for example CC BY 4.0 for text).",
        "Render the final report. Quarto HTML works everywhere; for a PDF, use `format: typst` (built into Quarto), `format: pdf` (needs a LaTeX install such as TinyTeX), or print the HTML to PDF from your browser. Spreadsheet path: download the document as PDF, and keep the workbook alongside it.",
        "Include the raw data only if its license allows redistribution; otherwise give the link, the version and the date you downloaded it. Remove anything personal from the files and their properties (author fields, file paths).",
        "Keep a copy in two places, with the raw data still untouched. If you want it public, a GitHub repository or Posit Connect Cloud can host it (Connect Cloud’s free plan shares documents publicly; Quarto Pub stops taking new work at the end of 2026; checked November 2026). Only share what the license allows.",
        "Add it to your portfolio with a two-line description: the question, the data, and what you found."
      ],
      write:"Files in my final folder… Where it lives (and the backup)… License for my own work… Two-line portfolio description…" }
  ],
  rubric:[
    { c:"Question and scope", d:"The report opens with one answerable question that names what is measured, for whom or where, and when, and the summary answers that question, not a different one." },
    { c:"Data, license and integrity", d:"The dataset is cited with creator, year, title, version or retrieval date, publisher and link or DOI, and its license conditions are met (an attribution line sits under the chart). Software is cited, any AI use is disclosed with how you checked it, and no one can be identified from your files." },
    { c:"Reproducible cleaning", d:"Someone with your folder and README can rebuild every number from the untouched raw file, and the cleaning log shows row counts in and out, each rule with its count, and the reason for each judgment call." },
    { c:"Accurate statistics", d:"The number of cases (n) and missing values are reported, the center and spread suit the data’s shape, groups of different sizes are compared as rates or shares, and every number in the text matches the code or cell it came from." },
    { c:"An honest chart", d:"The main chart answers the question and has a title that states the finding, labeled axes with units, an honest baseline and scale, colors readable in greyscale, a source note and alt text." },
    { c:"Uncertainty and limits", d:"The main result comes with a range (such as a 95% confidence interval) or a clear reason sampling error doesn’t apply and what uncertainty remains. At least two limits are named, and nothing claims a cause the data can’t show." },
    { c:"Clear for your reader", d:"A reader without data training can say the finding and how sure it is in their own words after the title, summary and chart. Terms are explained, units and context are given, and the report stays within about 2,500 words." }
  ],
  share:"Ask one person who is like your reader (a friend, colleague, family member or club member) to read only the title, the three-sentence summary and the chart, then tell you what you found and how sure you are. Write down their words before you explain anything: the gap between their version and yours is your most useful feedback.\n\nFor the technical side, swap folders with a study partner and each try to rebuild the other’s report from the README alone. You can also ask for feedback in the Community Showcase category of the Posit Community forum (forum.posit.co), or post your chart and code with the #TidyTuesday hashtag if you used one of its weekly datasets.\n\nBefore you post anywhere public, check that the data license allows it, share only open data and your own code, and leave out personal details you’d rather keep private (your report doesn’t need your full name). Feedback is on the work, not on you: thank people, then decide for yourself which changes to make."
});
/* Track 4 · Capstone · A research proposal with a mini literature review */
ICA.addCapstone({
  id:"t4-capstone", track:"t4", title:"Your research proposal", icon:"📝", hours:"20–30",
  blurb:"Plan a small study you could really carry out, built on a mini literature review of 8–12 sources, the way a pre-master’s research methods module asks.",
  after:["t4u2","t4u3","t4u4","t4u5","t4u6","t4u9"],
  brief:[
    "You’ll write a **research proposal** of about 1,500–2,000 words (not counting references and appendices) for a small study. At its heart is a **mini literature review** of 8–12 sources, built from a {{synthesis-matrix|synthesis matrix}}, cited properly with a reference manager, and ending in the gap your question fills. Around it sit your question and aims, a design that fits, an ethics and data plan, and a realistic timeline. This is the kind of coursework a pre-master’s or first-year research methods module asks for, and the kind of document a graduate application, a small grant or a workplace evaluation starts with.",
    "Write for one reader who will decide something: a possible supervisor or admissions panel, a manager approving a small evaluation at work, a community group or charity, a small-grants committee, a teacher. Name them in your notes and keep them in mind. They should finish your proposal knowing what you’ll find out, how, why it matters, and that you can really do it.",
    "**You plan the study; you don’t carry it out.** This capstone collects no data from people. The most you may do is ask a friend or family member who agrees to read your survey questions or interview guide and tell you what they understand, with nothing recorded and no answers kept. The study itself should be one you could do alone in three to six months with free tools, or, if you are applying for a master’s or doctorate, one that fits the length of that program.",
    "**Choose your topic and design.** Any field works: a question from your job, your community, a subject you want to study, or a debate you keep reading about. Any design that fits the question works too: a short survey, a few interviews, observation in public places, an analysis of documents or media, a secondary analysis of an open dataset, or a small experiment. Use the citation style your field or target program uses (APA 7th, MLA 9th, Chicago 18th or another). If you have a real template, such as a university’s proposal guidance, follow its headings and word limit instead of the outline here.",
    "You can do almost all of this on a phone (searching, reading, a spreadsheet matrix, writing in Google Docs), but a computer makes the reference manager much easier. Zotero’s desktop app, its browser Connector and its word processor plugins are free; on a phone, use the Zotero web library or app, or ZoteroBib (zbib.org, free, no account), and check every entry it makes."
  ],
  deliver:"A 1,500–2,000-word research proposal (PDF) with a mini literature review of 8–12 sources and a checked reference list, plus appendices: your search log with screening counts, your synthesis matrix, a one-page ethics and data plan, and a timeline.",
  stages:[
    { t:"Choose a topic, a reader and a question", units:["t4u6","t4u1"],
      how:[
        "Write your topic, your reader and what they need to decide. Note what you already have access to (a workplace, a community, public documents, an open dataset): access often decides which question is doable.",
        "Narrow the topic step by step into one research question, as in Unit 6. Name its type (descriptive, comparative, relational or exploratory) and, for health or intervention questions, its PICO parts.",
        "Check it against [[finer-criteria|FINER]]: feasible, interesting, novel, ethical, relevant. Rewrite it until “feasible” is honestly yes.",
        "Write one aim and two or three objectives that together would answer the question.",
        "Treat the question as a draft: the literature may change it. Keep a short change log from now on."
      ],
      write:"My reader and what they decide… What I have access to… Topic → narrower → my question… Question type (and PICO, if it fits)… FINER check… Aim… Objectives…" },
    { t:"Search systematically, and log it", units:["t4u2","t4u5","t4u1"],
      how:[
        "Build a concept table (each concept with synonyms and related terms) and combine it into one search string with Boolean operators, phrases and truncation.",
        "Run it in at least two places: one broad engine (Google Scholar or Semantic Scholar) and one subject database or open index (for example PubMed, ERIC, OpenAlex, BASE or CORE). Log the date, tool, exact string, filters and number of hits for each.",
        "Write your [[inclusion-criteria|inclusion criteria]] before you screen: years, languages, kinds of study, settings and populations. Then screen titles and abstracts, keeping counts at each step (found, screened, read in full, included) and the reasons you excluded full texts, like a small {{prisma|PRISMA}} flow.",
        "Chase citations from your two best papers: three backward (their references) and three forward (later papers citing them). Set one search alert.",
        "Get full texts legally: open access copies, Unpaywall, institutional repositories, your library or interlibrary loan, or a polite email to the author. Shadow libraries infringe copyright: don’t use them."
      ],
      write:"Search string… Tool 1: date, filters, hits… Tool 2: date, filters, hits… Inclusion criteria… Counts: found → screened → full text → included… Exclusion reasons… Papers found by citation chasing…" },
    { t:"Collect, check and annotate in Zotero", units:["t4u4","t4u3","t4u1"],
      how:[
        "Make a Zotero collection for the project. Add each source with the Connector, or by DOI or ISBN with **Add Item(s) by Identifier**, and attach the legal PDF or link.",
        "Check every item’s data against the source: item type, authors, sentence-case title, date, journal, volume, issue, pages and DOI. Fix the item, not the bibliography.",
        "Check trust: is it peer reviewed, is the journal sound (not predatory), and has it been retracted or corrected? Zotero flags retracted items that have a DOI or PubMed ID; the Retraction Watch Database checks the rest.",
        "For each source, add a child note in Zotero that keeps three things apart: quotations (with page numbers), your paraphrase, and your own thinking. Read at least the methods and results, not only the abstract.",
        "Tag items by theme or method so you can find them when you write. No desktop? Use the Zotero web library or app, or keep the details in a spreadsheet and build the list in ZoteroBib."
      ],
      write:"Items in my collection (8–12)… Metadata fixes I made… Trust checks: anything dropped or flagged, and why… Tags I’m using…" },
    { t:"Build the matrix and draft the mini review", units:["t4u5","t4u3"],
      how:[
        "In any spreadsheet, make one row per source and these columns: Reference, Setting and participants, Design and method, Key findings (with sizes and ranges where the paper gives them), Limitations, then two to four theme columns of your own.",
        "Read down each theme column and write one sentence on what most sources show and who differs. For each disagreement, look across at the method, setting and date columns for a likely reason.",
        "Write a gap statement that stays within what you searched (“In the sources I found, none…”), and name the kind of gap: population, setting, method, time or theory.",
        "Outline the review by theme (or by method or time, if that fits better) with headings that make claims. Then draft 600–900 words: each paragraph opens with your claim, groups the sources that agree, explains a difference, and links back to your question.",
        "Cite as you write with the Zotero plugin for Word, LibreOffice Writer or Google Docs, so the reference list builds itself."
      ],
      write:"Theme columns… One sentence per theme… A disagreement and its likely reason… My gap statement (and its kind)… Review structure and why… Review word count…" },
    { t:"Design the study, its ethics and its plan", units:["t4u6","t4u7","t4u8","t4u9"],
      how:[
        "Choose a design and say why it beats two alternatives for this question. Define your key concepts and how you’ll observe them: indicators and questions for a survey, topics and probes for interviews, a coding frame for documents.",
        "Write the sampling plan (population, frame, method, size and why that size) and the analysis plan (for example frequencies and a cross-tab, a comparison of groups, or thematic analysis with a codebook). Name the two biggest threats to validity or trustworthiness and what you’ll do about each.",
        "Write the ethics section: how people will agree (information sheet and consent), risks and how you’ll reduce them, any vulnerable groups, and which ethics review would apply where you are (names differ: IRB, REC, HREC and others). If your design involves no people, say why.",
        "Write a one-page {{data-management-plan|data management plan}}: what data, where they’re stored (encrypted), who can access them, how you’ll pseudonymize or anonymize, how long you’ll keep them, and what you could share. Name the data protection law that applies to you (for example the GDPR in the EU), and say you would check local rules.",
        "Make a timeline (weeks or months, task, output) and list resources and risks: costs, skills, access, and a plan B for the most likely problem. Optional: ask one consenting friend to read your questions aloud and tell you what they think each means; change any they misread."
      ],
      write:"Design and why (vs two alternatives)… Concepts and measures… Sample… Analysis… Two threats and my responses… Ethics… Data plan… Timeline… Biggest risk and plan B…" },
    { t:"Draft, get feedback and revise", units:["t4u10","t4u4","t4u6"],
      how:[
        "Assemble the proposal: title; summary (about 150 words); background and literature review; question, aim and objectives (and hypotheses if you test any); theory or key concepts; design and methods; ethics and data management; limitations; timeline and resources; references.",
        "Check alignment: underline the question, then check that the review leads to it and that the design, sample, data and analysis all serve it. Reverse-outline the draft (one line per paragraph) and fix gaps, repeats and paragraphs with two points.",
        "Check the references: every in-text citation has an entry and every entry is cited; compare three entries with the official style rules; open every DOI link to check it works.",
        "Score yourself on the rubric below. Then send the draft to one reader with three questions: “What will I find out, and how?”, “Where did you get lost?”, “Which part seems least doable?” Write down their answers before you reply.",
        "Revise, read it aloud to catch clumsy sentences, check the word count, and log what you changed and why."
      ],
      write:"Word count… My reader’s answer to “What will I find out, and how?”… Where they got lost… Reference problems found… What I changed and why…" },
    { t:"Package your proposal", units:["t4u9","t4u10"],
      how:[
        "Add an AI-use statement: the tool, dates, what you used it for, and how you checked the output (or “No AI tools were used”). Check every reference an AI tool suggested in a database before you keep it, and never paste anyone else’s unpublished work or personal data into one.",
        "Add the appendices: search log with screening counts, synthesis matrix (as a table or an attached spreadsheet), ethics and data plan, and timeline.",
        "Check nothing in the proposal or appendices identifies a real person (a colleague, a participant, a workplace) without their agreement, and remove personal details from the file properties.",
        "Export the proposal as a PDF. Back up your Zotero library (sync it to a free account, or export the collection) and keep the matrix and log with the PDF.",
        "Add it to your portfolio with a two-line description: the question, and what the review found. If you later carry out the study, consider preregistering it (for example on OSF) first."
      ],
      write:"Files in my package… My AI-use statement… Where it’s saved (and the backup)… Two-line portfolio description…" }
  ],
  rubric:[
    { c:"Question and design fit", d:"One focused question with an aim and objectives, and a design, sample, data and analysis that clearly serve it. A reader can see why this design was chosen over at least one alternative." },
    { c:"Search and sources", d:"The search log shows the string, at least two tools, dates, inclusion criteria and screening counts. The 8–12 included sources are relevant and mostly scholarly, you have read beyond each abstract, and none is from a predatory journal or retracted without that being noted." },
    { c:"Synthesis, not summary", d:"The review is organized by themes (or method or time), each paragraph makes a claim supported by several sources together, at least one disagreement is explained, and the review ends with a gap that leads to your question." },
    { c:"Citation and integrity", d:"Every in-text citation matches a reference-list entry in one named style and edition, quotations have page numbers, and DOIs are working links. Paraphrases are in your own words, and any AI use is disclosed with how you checked it." },
    { c:"Ethics and data", d:"Consent, risks, the relevant ethics review and a data plan (storage, access, anonymization, retention, sharing) are covered for your setting and its laws, and nothing in the proposal identifies a real person without their agreement." },
    { c:"A realistic plan", d:"The timeline, resources and risks fit the time and access you really have, the main threats to validity or trustworthiness are named with responses, and there is a plan B for the most likely problem." },
    { c:"Clear for your reader", d:"A reader outside your field can say what you will find out and how after reading the summary. Claims are hedged to match the evidence, terms are explained, and the proposal stays within its word limit." }
  ],
  share:"Swap proposals with a study partner (a classmate, a colleague, someone from an online course forum or study group) and use this rubric for each other: for each criterion, give one strength, one question and one suggestion.\n\nAlso ask one person like your intended reader, who needs no research training, to read the summary and say what you’ll find out and how. If you have access to a university or college writing center or a librarian, they can comment on structure and searching. Online writing groups, such as Shut Up & Write! sessions on Meetup, are good for steady writing time, not for detailed feedback.\n\nShare a PDF without your contact details, and only with people you choose. If you plan to use the proposal in a real application, check its rules on outside help first. Optional AI feedback against the rubric can point out unclear passages, but treat it as advice, check what it says against the lessons, follow your institution’s policy, and disclose it."
});
/* Academic Language (e1) · capstone */
ICA.addCapstone({
  id:"e1-capstone", track:"e1", title:"A source-based essay and a short talk", icon:"🖋️", hours:"18–28",
  blurb:"Write a 1,500-word academic essay from real sources, with a plan, two drafts and a revision log, then give a recorded 5-minute talk on it (or a Japanese report or 発表 instead).",
  after:["e1u1", "e1u2", "e1u3", "e1u4"],
  brief:[
    "You will write one **academic essay of about 1,500 words in English** that answers a question you choose, using five to eight real sources. You build it in visible steps: a plan, a source log, a first draft, a checked second draft and a **revision log** that records what you changed and why. Then you turn the essay into a **recorded talk of about five minutes** for listeners who have not read it. Together, the two pieces use everything this elective practices: reading sources, writing in an [[academic-register|academic register]], using sources in your own sentences, listening to yourself, and speaking so that people can follow you.",
    "Write for a realistic reader. For the essay, imagine a lecturer marking a first-year or foundation-year essay, or an educated reader from outside your field: someone who knows how arguments and citations work but not your topic. For the talk, imagine a seminar group of classmates from different countries and subjects. If you plan to apply for a degree, a pre-sessional course or a job that needs English, the finished essay can also become a writing sample.",
    "Pre-sessional and foundation courses usually assess students through extended writing from sources and through speaking, not only through tests. The writing tasks in the lessons were short (the longest English one was about 300 words). This capstone is the long version. Nobody marks it in the app, so you check it yourself against the rubric and get honest feedback from at least one reader. The checklists, phrase banks and personal error list you made in the units are your tools.",
    "**Scope.** The essay is 1,350–1,650 words, not counting the reference list. You use sources others have published: open-access articles, open textbooks and reports from recognized organizations. You do **not** collect data from people (no surveys or interviews), so you need no ethics approval. Choose a topic you know a little about and can read about for free. The talk lasts 4½–5½ minutes. Audio alone is fine, and slides are optional.",
    "**Choose your route.** Any field works: public health, engineering, music education, small businesses, language policy, climate adaptation, a question from your job. Any essay type from Unit 3 works too: argumentative, compare–contrast, cause–effect or problem–solution. **Japanese strand:** if you have done Academic Japanese (Units 5–8), you can replace the English talk with a piece in Japanese on the same topic. Choose either a short [[repooto|レポート]] of 1,600–2,000 [字]{じ} in the である style, or a five-minute [[happyou|発表]] with a one-page [[rejume|レジュメ]]. The English essay stays the same on both routes."
  ],
  deliver:"A 1,350–1,650-word essay in English as a PDF, with its reference list, plan, source log and revision log, plus a recorded 4½–5½-minute talk on the same topic. On the Japanese strand, a 1,600–2,000字 レポート or a recorded five-minute 発表 with its レジュメ takes the place of the talk.",
  stages:[
    { t:"Choose a question, a reader and a plan", units:["e1u1", "e1u3"],
      how:[
        "Write down three topics you know a little about and could read about for free. For each one, write one possible essay question. Decode each question as in Unit 3, Lesson 1: underline the task word, circle the topic words, box the limits. Then choose the question you could answer well in 1,500 words. A narrow question (one country, one group, one decade) is easier to answer well than a wide one.",
        "Name your essay type, and write a working [[thesis-statement]] in one sentence. Give it a [[hedging|hedge]] if your evidence will be limited (“is likely to”, “may help to explain”). It will change as you read. That is normal.",
        "Write two sentences about your reader: what they already know, and what they need from you (definitions, background, a clear answer).",
        "Make a paragraph plan with a word budget. For example: introduction 200 words (context, problem or gap, thesis, map of the essay); three body paragraphs of about 250 words, each with its topic sentence written out in full; one [[counterargument]] and [[rebuttal]] paragraph of 200 words; conclusion 150 words.",
        "Set up your workspace. Create one folder for the project, a document with your chosen spelling variety set (Unit 1, Lesson 1), and a second document called “Revision log”. Plan three to five weeks of short sittings, and put them in your calendar."
      ],
      write:"Three questions… The one I chose, and why… Essay type… Working thesis… My reader… Paragraph plan with word budget… My weekly sittings…" },
    { t:"Find, read and log your sources", units:["e1u1"],
      how:[
        "Search for free sources: {{google-scholar|Google Scholar}}, CORE (core.ac.uk) and the Directory of Open Access Journals (doaj.org) for articles; OpenStax and other open textbooks for background; reports from UN agencies, governments or research institutes. {{full-text-access}} explains legal ways to reach paywalled papers. Keep five to eight sources, at least three of them scholarly (journal articles or academic books).",
        "Skim each candidate for five minutes, as in Unit 1, Lesson 2: title, abstract, headings, the end of the introduction, the conclusion. Keep it only if it helps answer your question.",
        "Keep a **source log**, with one entry per source: the full reference; the [[genre-academic|genre]]; its main claim in one sentence of your own; how sure the writer is ([[stance]]: hedges, boosters, [[reporting-verb|reporting verbs]]); the pages of the key points; and how you will use it (background, evidence, counterargument).",
        "Make notes in your own words (Cornell or outline notes, Unit 1, Lesson 5). Put anything you copy in quotation marks with its page number, so that you can never mix your words with the source’s by accident. A reference manager such as Zotero is free ({{zotero-basics}}); a simple table also works. Choose one citation style (APA, Harvard or the one your course uses) and keep to it.",
        "While you read, collect useful language from your sources: ten [[collocation|collocations]] and five reporting verbs that writers in this field really use."
      ],
      write:"Source 1: reference… genre… main claim (my words)… stance… key pages… how I’ll use it… Source 2… (5–8 sources) Collocations and reporting verbs I collected…" },
    { t:"Write the first draft", units:["e1u2", "e1u3"],
      how:[
        "Start with the body paragraphs, not the introduction. Give each one a [[topic-sentence]] that makes a claim, then evidence from your sources and a sentence of reasoning (claim, evidence, reasoning: Unit 3, Lesson 2). End with a sentence that links to the next idea.",
        "Bring sources in with both [[integral-citation|integral]] and [[non-integral-citation|non-integral]] citations, and choose reporting verbs for their exact meaning (“argues”, “found”, “suggests”, “claims”). Write each [[paraphrase]] from your notes, with the source closed, never by changing words in the original sentence.",
        "Write the counterargument paragraph: state the strongest objection fairly, then refute it, limit it or outweigh it. Use the concession patterns from Unit 3 (“Although…”, “While it is true that…”).",
        "Now write the introduction in moves (context, problem or gap, thesis, map) and a conclusion that answers the question, states one limitation and suggests what follows. Keep claims in the conclusion no stronger than the evidence in the body.",
        "Write quickly and don’t polish yet. Mark anything you need to check with [CHECK]. Aim for 1,600–1,800 words, because revision usually cuts. Save the file as “Draft 1” with the date. The words are yours: don’t ask an AI tool to write paragraphs for you (Unit 3, Lesson 5)."
      ],
      write:"Draft 1 saved on… Word count… One line per paragraph, as written… Places marked [CHECK]…" },
    { t:"Check, get feedback and revise", units:["e1u2", "e1u3"],
      how:[
        "Leave the draft for at least a day. Then make a [[reverse-outline]]: write one sentence for what each paragraph actually says. Does every paragraph support the thesis? Is anything in the wrong order, or repeated? Move, merge or cut first, before you fix any sentences.",
        "Check the language one problem at a time, never all at once: register (Unit 2, Lesson 1); [[comma-splice|comma splices]] and fragments (Lesson 2); articles, countable nouns and tense (Lesson 3); [[cohesion]] and transition signals (Lesson 4); hedges and [[booster|boosters]] against your evidence, and [[concision]] (Lesson 5). Then hunt for the five errors on your personal error list (Unit 3, Lesson 5).",
        "Check every source: each borrowed idea has a citation; each quotation is exact, with a page number; each paraphrase, compared with the original, shows no [[patchwriting]]; every in-text citation is in the reference list, and the reference list has nothing extra.",
        "Read the whole essay aloud, or use read-aloud in your word processor or browser, and mark every place where you hesitated. Cut to 1,350–1,650 words.",
        "Ask one reader for feedback (see **Show it to someone** below), with two or three specific questions, such as “Where did you get lost?” or “Which claim felt too strong?”. If you also try an AI tool for feedback, follow your course’s rules, ask for comments rather than rewrites, and decide every change yourself ({{ai-language-tools}}).",
        "Record each change in your revision log: what you changed and why. Save “Draft 2”, check it once more, and save the final version."
      ],
      write:"Reverse outline: what each paragraph says… Problems found in each language pass… Source check… Feedback I got and what I did with it… Revision log (at least eight changes, each with its reason)… Final word count…" },
    { t:"Turn the essay into a five-minute talk", units:["e1u4"],
      how:[
        "A talk is not the essay read aloud. Choose the two or three points that matter most for listeners who have not read the essay, and leave the rest out.",
        "Script the signposts first, as in Unit 4, Lesson 3: opening, why the topic matters, outline, a transition into each point, conclusion, and an invitation to ask questions. Rewrite your key sentences for the ear: one idea per sentence, subject and verb early, key terms repeated, numbers rounded.",
        "Slides are optional. If you use them, make four to six with few words, describe any chart aloud (what it shows, the main trend, one exact figure), and list your sources on the last slide. Google Slides, LibreOffice Impress and PowerPoint for the web are free.",
        "Mark pauses (/ and //) and the main stress in each chunk on your first minute ([[thought-group|thought groups]] and [[sentence-stress]], Unit 4, Lesson 4). Rehearse three times from short notes, not a full script, and time each run.",
        "Record privately. For audio: Voice Memos on iPhone and Mac, a recorder app on Android (names vary by maker), or Sound Recorder on Windows. With slides: Snipping Tool’s Record option on Windows 11 (turn the microphone on), or Shift-Command-5 on a Mac (choose your microphone in Options). Aim for 4½–5½ minutes.",
        "Listen back twice: once for time and structure (can you hear the outline and each transition?), and once for [[intelligibility]] (stress, pauses, pace). Re-record once. Then write three questions a listener might ask, the first sentence of each answer, and the phrase you will use if you don’t know."
      ],
      write:"My two or three points… Signpost script… Take 1: time… what I noticed… Take 2: time… what changed… Three questions and the first sentence of each answer… My “I don’t know” phrase…" },
    { t:"Japanese strand (instead of the talk): a レポート or a 発表", units:["e1u5", "e1u6", "e1u7", "e1u8"],
      how:[
        "Skip this stage if you gave the English talk. Otherwise choose one: a **レポート** of 1,600–2,000字 in the である style, or a five-minute **発表** in です・ます with a one-page レジュメ. Use the same topic, narrowed if that helps a Japanese reader. Don’t translate your English essay, with a tool or sentence by sentence by hand: plan again in Japanese from your outline, starting from a [[shuchou|主張]] that answers a 問い (Unit 7, Lesson 1).",
        "Find two or three Japanese sources in CiNii Research or J-STAGE ({{finding-japanese-research}}). For each one, read the [[youshi|要旨]] and the [[kousatsu|考察]] with a reading tool, note its 主張 and [[konkyo|根拠]], and write a two- or three-sentence summary in the である style (Unit 6, Lesson 5).",
        "**レポート:** write an outline (はじめに, 本論, おわりに, [参考文献]{さんこうぶんけん}), a はじめに with four moves (背景, 問い, 目的, 構成の[予告]{よこく}), and paragraphs that each open with a [[chuushinbun|中心文]]. Report sources with ～によると or ～と[指摘]{してき}している, and write the reference list in one format, with Japanese sources in [五十音順]{ごじゅうおんじゅん} (Unit 7, Lessons 2–4).",
        "**発表:** make a one-page レジュメ with numbered headings, one or two 論点 and a reference list (Unit 8, Lesson 1). Script the stock phrases for each stage, from 「本日は～について発表いたします」 to 「以上で発表を終わります」. Prepare three likely questions with answers, one of them an honest 「[勉強不足]{べんきょうぶそく}で申し訳ありませんが…」 with an offer to check later (Unit 8, Lesson 2).",
        "Check before you finish. For a レポート: read only the sentence endings, to catch any mixed style; search for spoken forms (でも, けど, なので, てる, じゃ); change each ～と思う to an ending that matches your evidence; keep the punctuation pair and the digits consistent; and check the 字数 in your word processor (Unit 7, Lesson 5 checklist). For a 発表: record it privately, then listen once for time and once for 話し言葉 slips (えっと, なんか); in your answers, check every verb for direction (尊敬語 for others’ actions, 謙譲語 for yours)."
      ],
      write:"Option chosen… 問い… 主張… Japanese sources and their 主張… 字数 or time… Problems the check found, and how I fixed them…" },
    { t:"Package, check against the rubric and look back", units:["e1u3", "e1u4"],
      how:[
        "Make the final files: the essay as a PDF (in Google Docs, File → Download → PDF; in LibreOffice, File → Export as PDF; in Word, File → Save As, then choose PDF as the file type), with a title, your word count and the reference list; the talk recording, or your Japanese piece; and your plan, source log and revision log.",
        "Add a short **tools statement** at the end of the essay: which tools you used and for what (a spelling checker, a dictionary, a reference manager, any AI feedback), and a sentence confirming that the words and ideas not cited are your own.",
        "Name the files with the date (for example “2026-12-essay-final.pdf”), keep them in one folder, and keep a second copy somewhere else. Before you share anything, remove other people’s names from your feedback notes. Your recordings are private unless you choose to share them.",
        "Go through the rubric below honestly. Compare the final essay with your first can-do self-check (Unit 1, Lesson 1) and your personal error list: which errors have gone, and which remain? Then print your capstone record from the Printer if you want a copy.",
        "Write a short reflection: what improved most, what you will practice next, and how. If you did the English talk and have time later, the Japanese strand is a good next project, and so is the reverse."
      ],
      write:"Files in my folder… My tools statement… Rubric: my ratings and the evidence for each… Errors that have gone, and errors that remain… What I’ll practice next, and when…" }
  ],
  rubric:[
    { c:"Question and argument", d:"The essay answers one clear question. The thesis is in the introduction, every body paragraph’s topic sentence supports it, and the conclusion answers the question that was asked." },
    { c:"Evidence and sources", d:"Five to eight sources, at least three of them scholarly, support the main claims. A counterargument is stated fairly and answered. Every borrowed idea is cited in the text and in a reference list in one consistent style." },
    { c:"Academic language", d:"The register is formal throughout. Hedges and boosters match the evidence (no unhedged interpretations, no stacked hedges), and reporting verbs and transition signals are accurate. The errors on your personal top-five list are absent or rare." },
    { c:"Organization and cohesion", d:"A reader can follow the essay from the topic sentences alone. Each paragraph has one main idea, and sentences link from given to new information. The length is 1,350–1,650 words." },
    { c:"The talk, or the Japanese piece", d:"A listener who has not read the essay can name your main points: they heard an outline, clear transitions and a summary in 4½–5½ minutes, with key words stressed. On the Japanese strand: a レポート in consistent である style and 書き言葉 within 1,600–2,000字, or a 発表 that uses the stock phrases, a レジュメ and correct keigo direction." },
    { c:"Process", d:"Your folder shows a plan, a source log, two dated drafts and a revision log with at least eight changes, each with a reason, including at least one change made because of a reader’s feedback." },
    { c:"Integrity and privacy", d:"Quotations are exact and paraphrases are your own (checked against the originals). A tools statement says how you used any tools, within your course’s rules. No AI-written or machine-translated text is presented as yours. Nobody else’s personal details appear, and your feedback givers agreed to be asked." }
  ],
  share:"**Essay:** send it, with the rubric and two or three specific questions, to one person you trust: a classmate, a colleague who writes in English at work, or a study partner doing the same kind of course. If you are a student, your university’s writing center or language support often gives free appointments to its own students. If you plan to submit this essay to a course later, don’t post it publicly: a similarity checker could then match your own text. **Talk:** play it to a friend or a study group, or swap recordings with another learner, and ask: “What were my main points?” If they can name them, your structure worked. Share recordings by private link or in person, not on public sites, unless you choose to. **Japanese strand:** ask a Japanese-speaking friend, a language-exchange partner or a university Japanese writing center to read the レポート or watch the 発表. **AI feedback** is optional and only advice, not a grade: paste only your own text, follow your course’s policy, and check every suggestion against what the units taught you."
});
/* Social Science Primers (e2) · capstone */
ICA.addCapstone({
  id:"e2-capstone", track:"e2", title:"A small study of your own community", icon:"🏘️", hours:"15–25",
  blurb:"Pick one everyday thing where you live, study it ethically, and explain it through two lenses in a 2,000-word report.",
  after:["e2u1", "e2u2", "e2u3", "e2u4", "e2u12"],
  brief:[
    "You will make a short research report, about **2,000 words**, on one ordinary thing in your own community: who uses the benches in a square at different times of day, why a weekly market is shrinking, how a neighborhood chat group talks about garbage collection, what the shop signs on one street say about migration and [[transnationalism|transnational]] ties, or how a local library has changed. The task is the one C. Wright Mills set: use the [[sociological-imagination]] to show the [[public-issue]] behind something people usually treat as a [[personal-trouble]]. You explain what you found through **two lenses** from this track, and say what each one shows and what it misses.",
    "Write for a real or realistic reader: a neighbor who runs a community group, a librarian, a local councillor, or a tutor on a first-year sociology course. Imagine someone curious and busy who has never studied sociology. If you plan to apply for a foundation year or a degree, the finished report also makes a good writing sample.",
    "Introductory sociology courses usually give a large part of the grade to a written paper, and this capstone is that paper. So far you have recognized concepts in exercises. Here you produce something yourself: a question, evidence you gathered, an argument and a reference list.",
    "**Keep it small and safe.** You are not working under a university ethics committee, so choose low-risk methods only. You can observe public places (without recording or photographing people), read public documents and media, use [[secondary-data]] from official sources, and have three to five short conversations with adults who agree. Leave out children, people in vulnerable situations (patients, people in shelters, detention or insecure immigration situations, anyone who depends on you), illegal activity and anything that could embarrass or endanger someone. Never ask anyone about legal status, health, money troubles or beliefs. Topics like these are important, but they need a supervisor and [[ethics-committee|ethics review]], so leave them for later or study them through published data only.",
    "**Choose your route.** Your “community” can be a neighborhood, a village, a building, a club, a workplace or an online community you already belong to. You need **at least two kinds of evidence**, so that one can check the other ([[triangulation]]). Pick from observation, documents and media, consented conversations, and secondary data. If you can’t get out much, or if you don’t want to talk to anyone, a documents-plus-data study is complete and fully acceptable."
  ],
  deliver:"A report of 1,800–2,200 words (not counting references and appendix) as a PDF or shared document, with a 100-word summary at the top, a reference list, and an appendix holding your one-page ethics plan and your anonymized coding table.",
  stages:[
    { t:"Choose a topic, a question and two lenses", units:["e2u1", "e2u2"],
      how:[
        "List five everyday things you have noticed where you live or in a group you belong to: a line, who sits where, which shops close, how people greet, what gets argued about in a local chat group.",
        "For each one, write a personal trouble (“I can never get a seat on the 8 o’clock bus”) and the possible public issue behind it (transport funding, shift patterns, where housing is built). Pick the one you can study safely within the limits in the brief.",
        "Write one research question tied to a place and a time span, which you can answer in about two weeks. For example: “How do different groups use the central square on weekdays and weekends, and why?” Avoid questions about the whole country, or ones that need you to ask people about private matters.",
        "Write your hunch, and what result would surprise you. This is your [[hypothesis]] in informal form.",
        "Choose **two lenses**. At least one should be a main perspective: [[structural-functionalism|functionalism]], [[conflict-theory]], [[symbolic-interactionism]] or [[feminist-theory]] (with [[intersectionality]]). The second can be another perspective, or a concept-lens from the track: [[dramaturgy]], [[social-construction]], [[mcdonaldization]], [[stratification]] and [[cultural-capital]], [[gentrification]], the [[digital-divide]], [[framing]], [[levels-of-analysis]], [[push-pull]] or [[integration]] models.",
        "For each lens, write the one question it would ask about your topic. A conflict lens might ask “who gains and who loses?”, and symbolic interactionism “what do people take these actions to mean?”"
      ],
      write:"My five noticings… The one I chose, and why it is safe to study… Trouble → issue… My research question (place and time)… My hunch, and what would surprise me… Lens 1 and its question… Lens 2 and its question…" },
    { t:"Write your ethics plan before you collect anything", units:["e2u1", "e2u12"],
      how:[
        "Write a one-page plan with two lists: what you **will** collect and what you **will never** collect. The second list should include names, faces, voices (unless agreed), addresses, phone numbers, car plates, workplaces, and anyone’s health, legal status, religion or politics.",
        "Run a risk check. Who could be harmed, embarrassed or put at risk by this study, even by accident? If the answer includes children, people in vulnerable situations, people who depend on you (your students, staff or patients) or anyone doing something illegal, change your topic or method now. Read again the meaning of [[vulnerable-participants|vulnerability]] (often it comes from a situation, not from the person).",
        "Write your [[informed-consent]] script for conversations. Say what the study is for, that taking part is voluntary, that people can skip any question or stop at any time, that you won’t use their name, that you’ll take notes rather than record unless they agree, and the date until which they can ask you to remove what they said.",
        "Set your observation rules. Observe in public places only, don’t follow or single out anyone, and take no photos of people. In a private place (a shop, café or place of worship), ask the person in charge first, and leave if anyone asks you to. For an online group, use public posts only. Paraphrase instead of quoting, because quotes can be searched, and never record usernames.",
        "Plan data care, guided by [[anonymity]] and [[confidentiality]]. Use labels such as “Stallholder A” from the first note. Keep notes on your own device with a screen lock, and decide the date you will delete raw notes.",
        "Write three or four sentences on your [[positionality]]: how you are placed in this community, what that helps you see, and what it might hide. Then ask a study partner to check your plan against the ethics rules in Unit 1 (see {{research-ethics}})."
      ],
      write:"What I will collect… What I will never collect… Risk check: who could be harmed, and how I prevent it… My consent script… Observation rules… Where notes are kept, and my deletion date… My positionality… Who checked the plan, and what they said…" },
    { t:"Collect evidence by two routes", units:["e2u1", "e2u4"],
      how:[
        "**Observation:** do two or three sessions of 30–45 minutes at different times or on different days. Keep [[fieldnotes-term|fieldnotes]] in two columns: what you saw (time, place, actions, counts) and, separately, what you think it means.",
        "**Documents and media:** collect 10–20 public items, such as council minutes, notices, local news stories, adverts or public posts. Write your coding rules *before* you start counting, as in the [[content-analysis]] task in Unit 1.",
        "**Conversations:** talk with three to five adults who agreed, for 15–20 minutes each, using five or six open questions. Read your consent script at the start, take brief notes, and write them up the same day, using labels instead of names.",
        "**Secondary data:** find one or two tables about your area from your national statistics office, a local government open-data page or World Bank Open Data. Note the source, the year, what was measured and how (census, survey or register).",
        "Keep a dated log of everything you did. If a session feels uncomfortable, or someone seems unhappy to be observed, stop, leave and note it. Never use an AI tool to invent, “fill in” or tidy up your data: every observation must be one you made."
      ],
      write:"Routes I used, and why… Observation log (dates, times, places, counts)… Documents and my coding rules… Conversations (labels, dates, consent noted)… Secondary data (source, year, how measured)… Anything that went wrong or surprised me…" },
    { t:"Find patterns, then look through both lenses", units:["e2u1", "e2u2", "e2u3"],
      how:[
        "Read all your notes twice. On the second reading, label anything that recurs with a short code, such as “waiting”, “regulars”, “price talk” or “who is told to move”. This is [[inductive-coding]].",
        "Group the codes into three or four themes. Give each theme at least two pieces of evidence, from two different routes if you can. A simple spreadsheet works well: one row per note, one column per code.",
        "Look for one piece of evidence that **doesn’t fit** your themes and keep it. Saying what doesn’t fit makes a report stronger, not weaker.",
        "Apply each lens to each theme. Write what it explains, what it misses, and where your two lenses agree or disagree.",
        "Check your claims. Is anything a [[correlation]] that you are tempted to read as a cause? Are you generalizing beyond your place, time and small sample? Ask a friend to code five of your anonymized notes with your rules, and compare the results to see how [[reliability|reliable]] your coding is."
      ],
      write:"My codes… Themes, each with its evidence… The evidence that doesn’t fit… Lens 1: explains / misses… Lens 2: explains / misses… Where the lenses disagree… What I can claim, and what I can’t…" },
    { t:"Draft the report", units:["e2u1", "e2u12"],
      how:[
        "Use this outline (word counts are a guide): **Introduction** about 250 words (the trouble, the public issue, your question, why it matters). **Two lenses** about 300 (each in your own words, cited). **Method and ethics** about 300 (what, where, when and how many; consent, anonymity and limits; your positionality).",
        "Continue with **Findings** of about 700 words (three or four themes, each with evidence and the case that doesn’t fit), then a **Discussion** of about 350 (the lenses compared, plus one link to the wider society, such as a national statistic, with its source and year). End with a **Conclusion** of about 100–150 words.",
        "Describe before you judge. Use current, respectful terms for every group, add no stereotypes, and hedge where your evidence is thin (“in these three sessions…”, “this suggests…”).",
        "Cite the ideas you use: the textbook (OpenStax *Introduction to Sociology 3e*), any other author and every data table, in one style such as APA or Harvard (see {{citation-styles}}). The reference list doesn’t count toward your 2,000 words.",
        "If you use an AI tool (for grammar, or for feedback on your outline), add a one-line [[ai-disclosure|AI disclosure]] saying which tool and what for. AI must not write your findings or supply sources: check that every reference exists and says what you claim."
      ],
      write:"Working title… Words per section… The one sentence that states my main finding… Where each lens does real work… My AI disclosure line (or “No AI tools used”)…" },
    { t:"Check it, get a reader, revise", units:["e2u1"],
      how:[
        "Leave the draft for at least a day. Then score it yourself against every rubric point on this page, and be honest.",
        "Make a reverse outline: write one sentence for what each paragraph does. Mark any paragraph with no evidence, any repeated paragraph, and any lens that is named but never used.",
        "**Anonymity sweep:** search the draft for names, street names, workplaces, ages and job titles. A combination like “the retired nurse on the corner” can identify someone even without a name, so make details general until no one could be recognized.",
        "Check the facts: every number has a source and a year, and every quotation or paraphrase has a citation.",
        "Give the draft to one reader (see “Show it to someone” below). Ask where they got lost, and which claim they doubted.",
        "Make your three biggest revisions, check that the length is between 1,800 and 2,200 words, and score yourself again."
      ],
      write:"Rubric scores before… Reverse-outline problems… What the anonymity sweep changed… What my reader said… My three biggest revisions… Rubric scores after…" },
    { t:"Package it and close the study", units:["e2u12"],
      how:[
        "Make the final file: a title, the date and the word count, a 100-word summary at the top, the report, the references, and an appendix with your ethics plan and anonymized coding table. Export it as a PDF from your word processor (Google Docs, LibreOffice Writer or Microsoft Word for the web are all free).",
        "Follow your data plan. Delete raw notes on the date you set, or keep only the anonymized versions.",
        "If anyone you talked to asked to see the results, send them the summary. Sharing findings back is part of ethical research.",
        "Write a reflection of about 150 words: what you would do differently, and what a larger study would need (a proper sample, a supervisor, ethics review).",
        "Save the PDF, and print your capstone record from the Printer, so both sit in your portfolio."
      ],
      write:"File name and date… My 100-word summary… What I deleted or kept, and where… Who I shared findings with… My reflection: what I’d change, and what a bigger study would need…" }
  ],
  rubric:[
    { c:"Question and scope", d:"The report asks one clear question about a specific place and time, and shows the public issue behind a personal trouble. It claims no more than a small study can support." },
    { c:"Two lenses, really used", d:"Both lenses are explained in your own words and applied to the findings. The report says what each explains, what each misses, and where they disagree." },
    { c:"Evidence and method", d:"The study uses at least two routes, every theme rests on at least two pieces of evidence (from both routes where possible), the method section says what, where, when and how many, and at least one piece of evidence that doesn’t fit is discussed." },
    { c:"Ethics and privacy", d:"The ethics plan was written before any data was collected, consent is described for every conversation (or the report says there were none), no child or person in a vulnerable situation took part, and nobody could be recognized from the report." },
    { c:"Accuracy and sources", d:"Every statistic gives its source and year, every borrowed idea is cited and listed in the references, and no correlation is presented as a cause." },
    { c:"Clear for the reader", d:"A neighbor who never studied sociology could follow it: 1,800–2,200 words, a summary at the top, headings, terms explained, and respectful wording for every group." },
    { c:"Integrity and reflection", d:"All the data is real and your own, AI use (or no use) is stated in one line, and the reflection names the study’s main limits." }
  ],
  share:"Swap reports with a study partner or a friend who reads carefully, and ask three questions: Where did you get lost? Which claim did you doubt? Could you work out who anyone is? Before you share, run the anonymity sweep again, and share only the finished report, never your raw notes. In a public space, such as a study forum or a social-science group online, share your question, method and a short extract rather than the whole report, and remove the name of your town or street. A careful reader will usually spot what you missed, and you can do the same for them."
});
/* Japanese Foundations (e3) · capstone */
ICA.addCapstone({
  id:"e3-capstone", track:"e3", title:"My Japanese portfolio: speak, write, read", icon:"🗾", hours:"12–20",
  blurb:"Record a self-introduction and a short talk, write an email, a form and a diary entry, keep a reading log, and build your own mini reading test, all at your level (N5, N4 or N3).",
  after:["e3u4", "e3u8", "e3u12"],
  brief:[
    "You will make a small **portfolio of your own Japanese**: a recorded self-introduction and short talk; three practical pieces of writing (a polite email, a filled-in form and a diary entry); a **reading log** of [[graded-reader|graded readers]] and other easy texts; and a **mini reading test** that you build yourself in the [[jlpt|JLPT]]’s item formats, then take or give to a study partner. Everything is done at your level, so it shows what you can really do now.",
    "**Choose your level.** Do the capstone at the end of the level you have reached: **N5** after Units 1–4, **N4** after Units 5–8, or **N3** after Units 9–12. That is why the page lists Units 4, 8 and 12. Each stage below says what to aim for at each level. Many learners do it twice: once at N5 or N4, and again a few months later at the next level. Then they compare the two recordings.",
    "Think of real readers and listeners: the teacher of a new Japanese class who asks you to introduce yourself, a neighbor or host, a language-exchange partner, a colleague, the office of a community center that needs your form. And think of yourself in six months: your recordings and writing today are the starting line you will measure progress against.",
    "Most practice in this track is choosing and recognizing: you tap the right particle or reading. Real life needs the other half, **producing** Japanese: saying who you are, writing a message someone will act on, reading a whole book. The JLPT doesn’t test speaking or writing, but daily life does. This capstone is where you produce Japanese and check it yourself.",
    "**Scope and safety.** Use the grammar and words of your level, and a dictionary for a few new words. Don’t aim for perfect, aim for clear. Use **made-up details** on the form and in anything you share (no real address, phone number, workplace or ID numbers). Keep your recordings private unless you choose to share them. On a phone, everything here can be done with a notes app, the voice recorder and a browser."
  ],
  deliver:"A dated portfolio folder: your self-introduction and talk as recordings with their scripts (first take and final take), an email, a filled-in form and a diary entry in Japanese with a note of what you corrected, a reading log of at least ten sessions, and a mini reading test with its answer key and your result.",
  stages:[
    { t:"Choose your level, take a baseline and make a plan", units:["e3u4", "e3u8", "e3u12"],
      how:[
        "Choose N5, N4 or N3: the level whose units you have finished. If you are between levels, choose the lower one. An easy, finished portfolio teaches more than a hard, half-done one.",
        "Take a baseline. On jlpt.jp, open “Let’s Try Sample Questions!”, choose your level, and do the vocabulary and reading samples with a timer running ({{jlpt-overview}}). Note which item types felt easy or hard, and how long the reading items took you.",
        "Make one folder for the project, with a dated name. Check that your Japanese keyboard works (Unit 1, Lesson 1) and that your phone or computer can record sound.",
        "Plan two to four weeks. The reading log (Stage 5) runs alongside everything else: about 15 minutes a day. Put the other stages into two or three longer sittings a week, and keep your daily Kanji Lab review going."
      ],
      write:"My level… Sample questions: easy item types… hard item types… time taken… My plan: weeks, days, times…" },
    { t:"Record a self-introduction and a short talk", units:["e3u2", "e3u5", "e3u7", "e3u12"],
      how:[
        "Reread the models in the units: Yến’s self-introduction (Unit 2, Lesson 1), Cheska’s (Unit 4, Lesson 3) and Yến’s one-line polite introduction with keigo (Unit 7, Lesson 5). Then write your own. Borrow their shape, not their sentences.",
        "**N5:** five or six sentences. For example: 「はじめまして。〇〇です。〇〇から[来]{き}ました。[今]{いま}、〇〇に[住]{す}んでいます。[料理]{りょうり}が[好]{す}きです。どうぞよろしくおねがいします。」 **N4:** add a reason and a plan, such as 「[日本]{にほん}のアニメが[好]{す}きなので、[日本語]{にほんご}を[勉強]{べんきょう}しています。」 and 「いつか[日本]{にほん}で[働]{はたら}こうと[思]{おも}っています。」 **N3:** add how your Japanese has changed, such as 「[仕事]{しごと}で[使]{つか}うために、[日本語]{にほんご}を[始]{はじ}めました。」 and 「[最近]{さいきん}、やさしいニュースが[読]{よ}めるようになりました。」 For a formal setting, use 「〇〇と[申]{もう}します。」 ({{keigo-in-practice}}).",
        "Then write a short talk. **N5:** about one minute on わたしの[町]{まち}, わたしの[一日]{いちにち} or [週末]{しゅうまつ}, in です・ます. **N4:** about two minutes on something you have done or plan to do, using ～たことがある, ～たり～たり or つもり. **N3:** about three minutes of opinion in the [尾括型]{びかつがた} shape from Unit 12, Lesson 1: a common view, your experience, a concession with たしかに or もちろん, then しかし and your point at the end.",
        "Check every sentence before you record: verb forms against the unit tables, particles, and one style throughout. Say difficult words slowly, counting the beats ([[mora|morae]]), long vowels and small っ (Unit 1, Lessons 3 and 5). Shadow one model sentence first to warm up.",
        "Record privately (Voice Memos on iPhone, a recorder app on Android, Sound Recorder on Windows, Voice Memos on a Mac). Keep this first take. Listen back once for rhythm and once for mistakes, fix the script, and record a final take. Speak from the script if you need to, but look up at the end of each sentence, as if someone were listening."
      ],
      write:"Self-introduction script… Talk script… First take: length, what I noticed… What I fixed… Final take: length…" },
    { t:"Write an email, fill in a form and keep a diary", units:["e3u3", "e3u4", "e3u5", "e3u8", "e3u12"],
      how:[
        "**Email.** Use the shape from the units: subject ([件名]{けんめい}), the person’s name, a greeting that says who you are, the message, a closing phrase, your name. **N5:** invite a friend (Unit 4, Lesson 5), such as 「[土曜日]{どようび}にいっしょに[映画]{えいが}を[見]{み}ませんか。[午後]{ごご}[二時]{にじ}に[駅]{えき}の[前]{まえ}で[会]{あ}いましょう。」 **N4:** tell a teacher you will miss a class, as in Aoi’s email (Unit 8, Lesson 5): 「…[病院]{びょういん}に[行]{い}くので、クラスを[休]{やす}みます。[申]{もう}し[訳]{わけ}ありません。[宿題]{しゅくだい}はメールで[送]{おく}ってもいいですか。」 **N3:** reply to a notice or a request, like the training email in Unit 12, Lesson 2: answer exactly what was asked, by the deadline, and close with よろしくお[願]{ねが}いいたします.",
        "**Form.** Find a real application form: for a Japanese class, a library card, a sports center or a local event. Many city international associations ([国際交流協会]{こくさいこうりゅうきょうかい}) and volunteer Japanese classes post them as PDFs. Or copy these fields onto paper: [氏名]{しめい} (family name first), フリガナ (the reading in katakana; if the form says ふりがな, use hiragana), [生年月日]{せいねんがっぴ} (a Western year or an era year: 2026 is [令和]{れいわ}8[年]{ねん}, see {{time-and-dates}}), [国籍]{こくせき}, [住所]{じゅうしょ} (from the biggest unit to the smallest: postal code, prefecture, city, then street and building), [電話番号]{でんわばんごう}, [職業]{しょくぎょう}, [希望]{きぼう}する[曜日]{ようび} and [備考]{びこう} (anything else). If the form has a [記入例]{きにゅうれい} (filled-in example), copy its style.",
        "Fill in the form with **made-up details** (an invented address, 000 for the numbers). Write your name in katakana carefully (Unit 1, Lesson 4), and write numbers and dates the way the form asks. Note every word you had to look up.",
        "**Diary.** Write one entry a day for three days, by hand if you can, with kanji you have learned. **N5,** in です・ます: 「[今日]{きょう}は[雨]{あめ}でした。[午後]{ごご}、[図書館]{としょかん}で[日本語]{にほんご}を[勉強]{べんきょう}しました。」 **N4,** in the [[plain-form|plain style]] (Unit 5, Lesson 1): 「[今日]{きょう}は[寒]{さむ}かった。[駅]{えき}の[近]{ちか}くで[新]{あたら}しいパン[屋]{や}を[見]{み}つけた。[明日]{あした}、[行]{い}ってみようと[思]{おも}う。」 **N3,** in the plain style, with a decision or a change: 「[今日]{きょう}から、[毎朝]{まいあさ}[駅]{えき}まで[歩]{ある}くことにした。」 「[前]{まえ}より[早]{はや}く[起]{お}きられるようになった。」",
        "Type one of the three pieces, so that you practice choosing the right kanji when your keyboard offers several (Unit 8, Lesson 4)."
      ],
      write:"Email (subject, name, message, closing)… Form: fields I filled in, words I looked up… Diary day 1… day 2… day 3…" },
    { t:"Check, get feedback and revise", units:["e3u2", "e3u3", "e3u5", "e3u6"],
      how:[
        "Leave your scripts and writing for a day. Then check them one point at a time, not all at once: (1) one style throughout (です・ます or plain), (2) particles, especially は and が, に and で, (3) every verb form against the unit tables, (4) kana slips (シ and ツ, ソ and ン, long vowels, small っ and ゃ), (5) kanji you have learned used where they belong.",
        "Read everything aloud. If you stumble, the sentence may be too long or too far above your level: split it, or use a pattern you know.",
        "Ask a reader. A Japanese speaker, a teacher or a language-exchange partner can tell you whether your sentences sound natural. Ask two specific questions (“Is the email polite enough for a teacher?”, “Does any sentence sound strange?”) rather than “Is it OK?”.",
        "If you also try an AI tool or a grammar checker, paste only your own text with made-up details. Ask it to mark the errors and explain them, not to rewrite your text. Then check its advice against the units, because tools can be wrong about what sounds natural and about what fits your level.",
        "Fix what you found, keeping the first version for comparison. Re-record the talk if the script changed. Then list your **top five error types**, with one example each, to watch for next time."
      ],
      write:"Errors I found, by type, with fixes… Feedback I got, and from whom (no names needed)… What I changed after the feedback… My top five error types…" },
    { t:"Keep a reading log for two to three weeks", units:["e3u4", "e3u8", "e3u12"],
      how:[
        "Choose easy texts. Free options: the graded readers of NPO多言語多読 (Tadoku, tadoku.org), which you can read online or download, from the starter level upward; the short texts in the Japan Foundation’s free IRODORI coursebooks; NHKやさしいことばニュース (NEWS WEB EASY, see [[news-easy]]), which since NHK ONE began in October 2025 first shows a notice about NHK’s reception contract: read it and decide for yourself (Unit 12, Lesson 6); and the Kamome House episodes for the units you have finished. Re-reading an episode counts.",
        "Follow the rules of [[extensive-reading]]: choose texts where you know almost every word, don’t look up every word, skip what you don’t understand, and stop a book that bores you. If you need a dictionary on every line, go down a level.",
        "Read for about 15 minutes a session, on at least **ten** days over two or three weeks. N3 learners: add one longer text a week, such as an easy news article or a short story.",
        "Log every session: date, title, level, minutes, pages or articles, how easy it felt (1–5), and **one sentence about it in Japanese**, at your level.",
        "At the end, add up your minutes and books, and compare how easy your first and last sessions felt. Mark one or two texts you could use in your mini test (Stage 6)."
      ],
      write:"Date – title – level – minutes – easy 1–5 – one Japanese sentence… (at least ten sessions) Totals… What got easier…" },
    { t:"Build your own mini reading test, then take it", units:["e3u4", "e3u8", "e3u12"],
      how:[
        "Copy the reading item types of your level from the official guide (the lengths are approximate): **N5:** a short passage (about 80 characters), a mid-size passage (about 250) and an information-retrieval notice (about 250). **N4:** short (100–200), mid-size (about 450) and information retrieval (about 400). **N3:** short (150–200), mid-size (about 350), long (about 550) and information retrieval (about 600).",
        "Find or write the texts. The safest choice is to **write your own**: a notice for a club or building, an email, a short essay. Your corrected writing from Stage 3 can become a text. You can also use a passage from a graded reader for private practice; check the notice in that book before you share it with anyone.",
        "Write one or two questions per text, each with four options and **exactly one** defensible answer ([[comprehension-question|comprehension questions]], Unit 12). Build the wrong options from real traps: a word that appears in the text but answers a different question, a nearby time, date or price, a negative, or a condition in a note under a table. N5 example stem: 「〇〇さんは[何曜日]{なんようび}に[図書館]{としょかん}へ[行]{い}きますか。」",
        "Write an answer key that names the line in the text proving each answer, and says which trap each wrong option uses.",
        "Take the test. Best: swap tests with a study partner at your level. Otherwise, put yours away for at least a week, then take it under a time limit no longer than your baseline time on the official samples. Then redo the official samples and compare with Stage 1.",
        "Review: for every mistake, which trap caught you (or your partner)? If a question turned out to have two possible answers, rewrite it. That is exactly the judgment test writers make."
      ],
      write:"Item types and text lengths… Questions, answer key and the line that proves each answer… Result and time… Traps that worked… Questions I rewrote… Official samples: before and after…" },
    { t:"Package your portfolio and look back", units:["e3u12"],
      how:[
        "Put everything in the dated folder: both takes of each recording, the scripts, the email, a photo or scan of the form, the diary, the reading log, the test with its key and your result, and your notes on the official samples.",
        "Before you share anything, check it for real personal details and take them out. Recordings stay private unless you decide otherwise.",
        "Go through the rubric below honestly, then print your capstone record from the Printer if you want a copy.",
        "Listen to your first and final takes one after the other. Then write five sentences about what you can now do in Japanese, as in Unit 12, Lesson 6, and choose your next goal: the next JLPT level, Academic Japanese ({{from-n3-onward}}), work, travel or reading for pleasure. Put a date in your calendar to repeat this capstone at the next level."
      ],
      write:"What is in my folder… Rubric: my ratings and evidence… Five things I can do now… My next goal and the date I’ll repeat the capstone…" }
  ],
  rubric:[
    { c:"Speaking", d:"Your final recording is about the length your level asks for (N5 one minute, N4 two, N3 three, plus the self-introduction). A listener can follow it: beats, long vowels and small っ are clear, and the style stays the same from start to end." },
    { c:"Accuracy at your level", d:"In your scripts and writing, verb forms and particles match the unit tables. The mistakes that remain are in patterns above your level, not in your top-five list." },
    { c:"Fit for the reader", d:"The email has a subject, a name, a greeting, a message, a closing phrase and your name, and asks or answers exactly one clear thing. The form has every field filled in, in the right script (フリガナ in katakana). The diary reads like a real day." },
    { c:"Reading volume", d:"Your log shows at least ten sessions of about 15 minutes, mostly in easy texts, each with a one-sentence note in Japanese." },
    { c:"Your mini test", d:"Each text matches an item type and length for your level. Each question has exactly one answer, proved by a line named in the key, and the wrong options use real traps. The test was taken under a time limit or by a partner, and any unclear question was rewritten." },
    { c:"Integrity and privacy", d:"The Japanese is yours: any tool use (dictionary, checker, AI) is noted, and nothing was machine-translated and kept as your own. The form and anything you shared use made-up details. Graded-reader texts were used within their notices, and no one else’s personal data appears." }
  ],
  share:"**For speaking and writing,** the most useful reader is a Japanese speaker: a friend, a teacher, or a partner from a language exchange. Many towns in Japan have volunteer-run Japanese classes ([日本語教室]{にほんごきょうしつ}), often free or low-cost, and many cities abroad have Japanese clubs or cultural centers. Show them your scripts and writing with two specific questions. If you meet a language-exchange partner you only know online, meet in a public place, and share your written work before you share your voice. **For your mini test,** swap tests with another learner at your level and mark each other’s answers using your keys. You learn as much from their traps as from your own. **In online learner communities,** post only a short piece with made-up details, never your form, and ask for corrections with explanations. **AI feedback** is optional and only advice: paste only your own text, ask for explanations rather than rewrites, and check them against the units."
});
/* International Studies (e4) · capstone */
ICA.addCapstone({
  id:"e4-capstone", track:"e4", title:"A policy brief for a decision-maker", icon:"📑", hours:"15–22",
  blurb:"Advise a real office on one international decision: official evidence, fairly attributed positions, options with trade-offs, a recommendation and a one-page summary.",
  after:["e4u3", "e4u8", "e4u11", "e4u13", "e4u17", "e4u23"],
  brief:[
    "You will write a [[policy-brief|policy brief]] of **1,500–2,000 words** for one named, realistic decision-maker facing one international decision. You will also write a **one-page summary** that the reader could act on in two minutes. The brief sets out the problem and why it matters now. It presents evidence from official data and primary documents, gives each main actor’s position fairly and with attribution, compares at least three options with their trade-offs, and ends with one specific recommendation.",
    "Your reader is an **office, not a person**: for example a foreign ministry’s regional department, a ministry of finance, a labor ministry’s overseas-workers office, a city’s international affairs office, a parliamentary foreign affairs committee, a regional organization’s secretariat, a UN agency country office or an NGO board. Address the role (“To: the Director, Pacific Division”), because people change. You write as an **independent analyst**, so never present the brief as coming from that office, and never use its logo or letterhead.",
    "Graduate programs and the international organizations, ministries and think tanks that hire their graduates use the policy brief all the time. It tests the track’s core skill in one piece: turning seminar knowledge into usable, neutral, evidence-based advice. Unit 8 taught the structure and Unit 18 the development version. Here you produce a full brief to that standard.",
    "**Scope.** Choose one decision that is within your reader’s power, can be made in the next year, and has a moment attached, such as a summit, a budget round, a vote or a treaty review. Some examples: a Pacific island state choosing its priority for the next UN climate conference; a labor-sending country’s ministry deciding how to cut the cost of sending money home toward the SDG target of under 3%; a culture ministry rebalancing its overseas budget; a city deciding whether to join an international city network; a finance ministry weighing whether to seek debt treatment. Any region and any cluster of the track is fine.",
    "**Contested topics** (a territorial dispute, an active conflict, a status question) are allowed but harder. If you choose one, your options must be about what *your reader* can do (how to vote, what to fund, which talks to join), not about which side is right. Every position must be attributed and dated “as of [month year]”, as in Unit 11 and the Japan and East Asia units. For a first brief, a less contested issue is the wiser choice."
  ],
  deliver:"A brief of 1,500–2,000 words plus a one-page summary, as one PDF: the summary page first, then the brief, a source list and an appendix with your source log and data table. It is marked “Student policy brief, not commissioned by or sent to the named office. Facts as of [date].”",
  stages:[
    { t:"Pick the reader, the decision and the moment", units:["e4u3", "e4u13"],
      how:[
        "Pick an issue you have studied in this track, then find the office that actually decides on it. Check the office’s own website to make sure it exists, see what it is responsible for, and note its current stated priorities, with the date you checked.",
        "Write the decision as a question your reader can answer: “Should [office] do A, B or C by [date or event]?” If the honest answer is “that isn’t their decision”, change the reader or the question.",
        "Name the moment that makes it urgent (a summit, a budget, a vote, a review), and check its date on an official page.",
        "Profile your reader in three lines. What do they already know? What do they care about most (cost, legality, reputation, voters, partners)? How much time will they give you?",
        "Write one sentence on why this is a real puzzle with a real trade-off and not an obvious choice, using the puzzle-versus-topic test from Unit 3."
      ],
      write:"Issue… The office, and how I know it decides this (checked on …)… The decision question… The moment and its date… Reader profile… Why it’s a real trade-off…" },
    { t:"Gather official evidence and primary documents", units:["e4u3", "e4u23"],
      how:[
        "Build a source log in a free spreadsheet (Google Sheets or LibreOffice Calc), aiming for 8–15 sources. For each, record the title, publisher, year, link, the date you accessed it and what it shows.",
        "Include at least **three official data series**, from bodies such as World Bank DataBank (World Development Indicators), the IMF World Economic Outlook database, UN DESA, UNHCR’s refugee statistics database, SIPRI, UCDP, the OECD, the WHO, or a national statistics office. Read each series’ definition or codebook before you use the numbers.",
        "Include **primary documents**: the treaty, resolution, communiqué, strategy or ministry statement at the center of the decision (the UN Digital Library and the UN Treaty Collection are free). Add at least **two analyses** from different perspectives, such as journal articles or think-tank reports. Note who funds each [[think-tank]].",
        "For every number, record its value, unit, year, source and edition or update date, as in Unit 14. Note when a figure is a projection or an estimate.",
        "Grade each key piece of evidence as strong, moderate or weak, and say whether a finding from one country is likely to transfer to your reader’s context ([[external-validity]]).",
        "Use AI tools only to find leads. Open and read every source yourself, and delete any reference you cannot find ([[hallucinated-citation]])."
      ],
      write:"Source log (title, publisher, year, what it shows)… Key numbers with unit, year, source and edition… Evidence grades… What the data can’t tell me…" },
    { t:"Map the positions fairly", units:["e4u2", "e4u11"],
      how:[
        "List the three to six actors who matter most to the decision: states, international organizations, businesses, civil society, affected communities.",
        "For each actor, state its position in its own words, from its own dated primary source (a statement, vote explanation, submission or report), plus the reason it gives. Use neutral reporting verbs: argues, states, proposes, rejects.",
        "Note the interests and the lens behind each position (security, economic gain, institutions and rules, identity and norms, justice). Keep these clearly separate from what each actor says it wants.",
        "Run the fairness test from Unit 11: would someone from each side accept your description of their position? Rewrite any sentence that fails.",
        "Note where the actors **agree**. Shared ground often makes the most feasible option."
      ],
      write:"Actor | position in its own words | source and date | reason it gives… Interests and lens behind each… Where they agree… Sentences I rewrote after the fairness test…" },
    { t:"Build options and weigh the trade-offs", units:["e4u8", "e4u17"],
      how:[
        "Write at least **three options**, one of which is the status quo (keep doing what the office does now). Each must be something the reader can actually do.",
        "For each option, note what it involves, a rough cost (sourced where possible), its benefits, its risks, **who gains and who loses** (by place, income, gender or group), and its feasibility: who must carry it out, who could block it, and any legal limits.",
        "Choose four or five criteria and **state them openly**, for example effectiveness, cost, feasibility, legality and legitimacy, fairness and speed. These are value choices, and a reader who weighs them differently should still be able to use your analysis.",
        "Pick your recommendation. Write the strongest objection to it, and your reply.",
        "Add a short [[theory-of-change|theory of change]] for the recommendation: two or three indicators that would show it is working, and a review date."
      ],
      write:"Option 1 (status quo)… Option 2… Option 3… Costs, benefits, risks, who gains and loses, feasibility for each… My criteria and why… Recommendation… Strongest objection and my reply… Indicators and review date…" },
    { t:"Draft the brief and the one-page summary", units:["e4u8", "e4u17"],
      how:[
        "Draft the brief in this order: a **title** that states your main message, then three to five **key messages**. Then come **the problem and why now** (about 300 words), the **evidence** (about 500), the **positions** (about 300), the **options and trade-offs** (about 450, with a small table if it helps), the **recommendation** with its indicators (about 250) and the **sources**.",
        "Keep the total at 1,500–2,000 words, not counting sources and appendix. Real briefs are often shorter: the advice cited in Unit 8 is about two pages or 1,500 words. Yours is a little longer to show your evidence, and the summary page does the short version’s job.",
        "Include one chart or table that you made yourself from official data in your spreadsheet, with a title that states its message, the units, the years and the source under it.",
        "Write the **one-page summary last**, in 300–400 words. It should give the decision, the key messages, each option in one line, the recommendation and the next step.",
        "Follow the style rules from Unit 8: plain words, short paragraphs, headings that tell the story, every number with its source and date, honest [[hedging]], and evidence kept visibly separate from recommendation. Date every changeable fact “as of [month year]”.",
        "If you used AI tools, add a one-line [[ai-disclosure|AI disclosure]] saying which tool and what for."
      ],
      write:"Title… Key messages… Words per section… My chart or table and its source… What goes on the summary page… My AI disclosure line (or “No AI tools used”)…" },
    { t:"Test, check and revise", units:["e4u11", "e4u13"],
      how:[
        "**Cold-reader test:** give the summary page to someone who doesn’t know the issue and allow two minutes. Can they tell you the decision and your recommendation? If not, rewrite the key messages.",
        "**Fact check:** compare every number against its source again. Make sure every “as of” date is still true, and update anything that changed while you were writing.",
        "**Neutrality check:** highlight every adjective and verb in your positions section. Replace loaded words (“admits”, “exposes”, “reckless”) and make sure each position has a source and a date.",
        "**Red team:** ask a study partner to argue for an option you rejected. Strengthen your reply, or change your recommendation if their argument wins.",
        "Score yourself against the rubric, make your three biggest revisions, check the word count, and score yourself again."
      ],
      write:"What the cold reader said back… Numbers or dates I corrected… Loaded words I replaced… The red-team argument and my response… My three biggest revisions… Rubric scores before and after…" },
    { t:"Package it for your portfolio", units:["e4u8"],
      how:[
        "Assemble one PDF: the summary page, the brief, the sources, and an appendix with your source log and the data behind your chart.",
        "Put this line at the top: “Student policy brief, written for practice; not commissioned by or sent to [office]. Facts as of [date].” Use no official logos, seals or letterhead.",
        "Save your spreadsheet and the PDF together with a dated file name, so you could update the brief later.",
        "Write a reflection of about 150 words. What would you need to make this a real brief (access, interviews, costings)? Where did staying neutral and making a recommendation pull against each other, and how did you handle it?",
        "Print your capstone record from the Printer to keep with the brief."
      ],
      write:"File name and date… The disclaimer line as written… What’s in the appendix… My reflection…" }
  ],
  rubric:[
    { c:"Decision and reader", d:"The brief names a realistic office, one decision within that office’s power, and a dated moment that makes it urgent." },
    { c:"Evidence", d:"Key claims rest on official data and primary documents. Every number has its unit, year, source and edition, and the brief says how strong the evidence is and where it stops." },
    { c:"Positions fairly attributed", d:"Each main actor’s position appears in its own terms with a dated source and neutral verbs, and someone from that side would accept the description." },
    { c:"Options and trade-offs", d:"There are at least three options, including the status quo. Each shows costs, benefits, risks, who gains and loses, and feasibility, judged against criteria stated openly." },
    { c:"A usable recommendation", d:"One specific, feasible recommendation follows from the evidence and the criteria, answers the strongest objection, and names indicators and a review date." },
    { c:"Written for a busy reader", d:"A cold reader can state the decision and the recommendation from the summary page in two minutes. The brief is 1,500–2,000 words, with headings that tell the story and plain language." },
    { c:"Integrity", d:"All sources are listed and real, AI use is disclosed, changeable facts are dated, and the brief is marked as student work with no official branding." }
  ],
  share:"Ask a study partner to read your summary page cold, then the whole brief, and to argue for the option you rejected. Their best point is your most useful feedback. You could also form a small brief-swap group online (a forum or chat group for international relations students) and rate one another’s briefs against this rubric. Keep the disclaimer line on every copy you share. If you publish the brief (for example on a personal blog or in a public repository), make sure every source is cited and leave out anything you were told privately. Do not send it to the office named in it as if it had been requested."
});
