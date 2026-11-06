/* Track 2 · Unit 7 · Git and GitHub */
ICA.addUnit({
  id:"t2u7", track:"t2", n:7, title:"Git and GitHub", icon:"🌿",
  blurb:"Git keeps the whole history of a project on your own computer, so you can save meaningful snapshots, try ideas on branches and undo mistakes calmly. GitHub is one place to share that history with others. Learn both, from your first commit to your first pull request, without ever losing work.",
  goals:[
    "Explain what version control is, how Git (a program on your computer) differs from GitHub (a hosting website), and set Git up with a private commit email",
    "Make commits with `git add` and `git commit`, read history with `git log` and `git diff`, and undo mistakes with the safe tool for each situation",
    "Create branches, merge them, and resolve a merge conflict calmly",
    "Connect a repository to GitHub, sign in safely, and clone, push and pull, including updating a GitHub Pages site",
    "Contribute through forks, pull requests, reviews and issues, keep secrets and clutter out with `.gitignore`, and know what to do if a secret leaks"
  ],
  read:[
    {book:"progit", where:"Chapter 1, “Getting Started”; Chapter 2, “Git Basics”; Chapter 3, “Git Branching” (3.1–3.3); Chapter 6, “GitHub” (6.1–6.2)", note:"The official Git book, free online. Chapters 1–3 are the core of this unit."},
    {book:"swc", where:"Version Control with Git: episodes 1–9, “Automated Version Control” to “Conflicts”, then 11, “Licensing”", note:"A hands-on workshop that follows two researchers through the same steps as this unit."},
    {book:"missing", where:"2026 lecture “Version Control and Git”", note:"Faster and deeper: it explains Git’s data model (snapshots, trees, commits) that sits underneath every command."},
    {book:"ghdocs", where:"Get started → Git basics (Set up Git, About remote repositories, Ignoring files); Pull requests; Issues"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u7-l1", title:"Why version control, and setting up Git", minutes:55,
   hook:{q:"You’re on a long train ride with no internet. You have Git installed on your laptop and a project you keep on GitHub. What can you do with Git until you’re back online?", options:["Nothing: Git needs a connection to GitHub to work","Only read the history; saving new versions needs GitHub","Almost everything: save new versions, read the whole history, make branches. Only sending to or fetching from GitHub waits","Edit files, but Git can’t record anything until you reconnect"], answer:2, reveal:"Almost everything. Git is a program that runs on your own computer, and your copy of the project holds its complete history. GitHub is a separate website where you can keep another copy and share it. Only the steps that copy commits to or from GitHub need a connection. This lesson untangles Git from GitHub, shows what a commit really is, and gets Git installed and set up."},
   goals:[
     "Explain what version control solves, and what a repository and a commit are",
     "Tell Git (a program on your computer) apart from GitHub and other hosting services",
     "Install Git on your computer and check that it works",
     "Set your name and a private commit email, and choose `main` as the default branch name",
     "Know the no-command-line options: GitHub Desktop, editors with Git built in, and the GitHub website"
   ],
   learn:[
    {h:"The “final_v2_REAL.docx” problem", body:[
      {lead:"Most of us have a folder that looks like this: `report.docx`, `report_final.docx`, `report_final_v2.docx`, `report_final_v2_REAL.docx`."},
      "Each copy was a way of saying “keep this version, just in case”. It works, sort of, until you need answers to real questions. Which copy did the printer get? What changed between v2 and REAL? Who removed the paragraph about the budget, and why? Was the good version of the chart in `final` or in `v2`? The file names can’t tell you.",
      "**[[version-control|Version control]]** is a system that answers those questions for you. Instead of many copies with hopeful names, you keep **one** set of files, and the system records a history of meaningful versions: what changed, when, who changed it, and a short note saying why. Any earlier version can be looked at or brought back.",
      "You may already have met a simple kind: the [[version-history|version history]] in online documents and cloud storage, which saves versions automatically every few minutes. That is good for one document. Programmers need more:",
      {list:[
        "**Whole projects at once.** A website is many files (HTML, CSS, images) that must match each other. A useful version records all of them together.",
        "**Versions you choose, with reasons.** “Fix broken menu link” is more useful than 300 automatic saves.",
        "**Several lines of work at the same time.** Try a new design without breaking the working site, then combine the two.",
        "**Many people, many computers.** Combine everyone’s changes, see who did what, and work offline."
      ]},
      "That is what **[[git|Git]]** does. It is the most widely used version control system for code, it is free and open source, and it works for any project made of text files: websites, programs, notes written in Markdown, data in CSV files, even a thesis written in LaTeX.",
      {key:"Version control replaces “many copies with hopeful names” with one set of files plus a history of meaningful snapshots, each with a note saying what changed and why."}
    ]},
    {h:"Git is not GitHub", body:[
      "These two names cause more confusion than anything else in this unit, so let’s separate them now.",
      {list:[
        "**Git** is a **program**. You install it on your computer. It keeps the history of your project in a hidden folder inside the project. It needs no account and no internet connection. Linus Torvalds created it in 2005 to manage the Linux kernel, and a large community of contributors has developed it ever since.",
        "**[[github|GitHub]]** is a **website**, run by a company, where you can store a copy of a Git project online, share it, and work on it with other people. It adds things Git doesn’t have: a web page for every project, discussions, reviews, and hosting such as GitHub Pages."
      ]},
      "An analogy: Git is like your camera, and GitHub is like a photo-sharing website. The camera works perfectly well on its own; the website is where you put copies to share them. And there is more than one such website:",
      {table:[
        ["Service","Run by","Notes"],
        ["GitHub","GitHub, a Microsoft company","The largest; free public and private repositories; GitHub Pages"],
        ["GitLab","GitLab Inc.","Also offers the software to run your own server"],
        ["Codeberg","Codeberg e.V., a German non-profit","Community-run, for free and open-source projects"],
        ["Bitbucket","Atlassian","Common in companies that use Atlassian’s other tools"]
      ]},
      "All of them store ordinary Git repositories, so the Git commands in this unit work with any of them. This unit uses GitHub because you already published a site there in Unit 5.",
      {tip:"When you uploaded files on GitHub’s website in Unit 5, GitHub ran Git for you behind the scenes: each upload became a [[commit-git|commit]]. Now you’ll run Git yourself."}
    ]},
    {h:"Repositories and commits", body:[
      "A **repository** (or **repo**) is a project folder that Git is looking after. It looks like any other folder, with one addition: a [[hidden-file|hidden folder]] called `.git` inside it. That is where Git stores the history. Delete `.git` and the folder becomes an ordinary folder again, with only the current files and no history.",
      "A **[[commit-git|commit]]** is one saved version of the **whole project**: a snapshot of every file Git is tracking, as they were at that moment. Each commit also records:",
      {list:[
        "**A message** you write, such as “Add opening hours to home page”.",
        "**The author**: a name and email address, and the date and time.",
        "**Its parent**: the commit that came just before it. That link is what turns separate snapshots into a history.",
        "**A unique ID**, called a [[commit-hash|hash]]: 40 characters (digits and the letters a to f) worked out from the commit’s contents, such as `1413f5f17ea0275bfe57638074728046c373573f`. People usually use the first seven, `1413f5f`."
      ]},
      {fig:'<svg viewBox="0 0 340 314"><defs><marker id="t2u7a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><circle class="d-lup" cx="20" cy="30" r="9" stroke-width="2"/><text class="mono" x="40" y="26">1413f5f</text><text x="110" y="26">Add About page</text><rect class="d-sage" x="40" y="36" width="92" height="26" rx="5" stroke-width="1.5"/><text x="86" y="54" text-anchor="middle">index.html</text><rect class="d-panel" x="140" y="36" width="92" height="26" rx="5" stroke-width="1.5"/><text x="186" y="54" text-anchor="middle">style.css</text><rect class="d-sage" x="240" y="36" width="92" height="26" rx="5" stroke-width="1.5"/><text x="286" y="54" text-anchor="middle">about.html</text><path class="d-ink" d="M20,41 L20,113" stroke-width="2" marker-end="url(#t2u7a1)"/><circle class="d-lup" cx="20" cy="126" r="9" stroke-width="2"/><text class="mono" x="40" y="122">76afb61</text><text x="110" y="122">Change meeting time</text><rect class="d-sage" x="40" y="132" width="92" height="26" rx="5" stroke-width="1.5"/><text x="86" y="150" text-anchor="middle">index.html</text><rect class="d-panel" x="140" y="132" width="92" height="26" rx="5" stroke-width="1.5"/><text x="186" y="150" text-anchor="middle">style.css</text><path class="d-ink" d="M20,137 L20,209" stroke-width="2" marker-end="url(#t2u7a1)"/><circle class="d-lup" cx="20" cy="222" r="9" stroke-width="2"/><text class="mono" x="40" y="218">d9fdeb4</text><text x="110" y="218">Add home page</text><rect class="d-sage" x="40" y="228" width="92" height="26" rx="5" stroke-width="1.5"/><text x="86" y="246" text-anchor="middle">index.html</text><rect class="d-sage" x="140" y="228" width="92" height="26" rx="5" stroke-width="1.5"/><text x="186" y="246" text-anchor="middle">style.css</text><rect class="d-sage" x="10" y="274" width="18" height="14" rx="3" stroke-width="1.5"/><text class="s" x="36" y="286">new or changed: Git stores this version</text><rect class="d-panel" x="10" y="294" width="18" height="14" rx="3" stroke-width="1.5"/><text class="s" x="36" y="306">unchanged: Git reuses the copy it has</text></svg>', alt:"Three commits, newest at the top, each pointing down to its parent. The oldest, d9fdeb4, Add home page, has index.html and style.css, both new. The next, 76afb61, Change meeting time, has a changed index.html and an unchanged style.css. The newest, 1413f5f, Add About page, has a changed index.html, an unchanged style.css and a new about.html. A key says new or changed files are stored, and unchanged files reuse the copy Git already has.", cap:"Each commit is a snapshot of the whole project and points to its parent. Unchanged files aren’t stored again, so snapshots are cheap."},
      "“A snapshot of everything” sounds wasteful, but it isn’t. If a file didn’t change, the new commit simply points to the copy Git already stored. Git also compresses what it keeps, so a small website’s complete history is often smaller than a single phone photo.",
      "Because commits link to their parents, Git can show you the history (newest first), the exact differences between any two commits, and any file as it was at any point. You’ll do all of that in Lesson 2.",
      {warn:"Git is built for **text** files, where it can show line-by-line changes. It can store images and Word or PDF files too, but it can’t show what changed inside them, and large ones make the repository big. For those, cloud storage with version history is often the better tool."}
    ]},
    {h:"Installing Git", body:[
      "Git runs in a **[[terminal|terminal]]**: a window where you type commands instead of clicking. Unit 6 introduced the [[command-line|command line]]; you’ll only need a few basics here: `cd` to move into a folder, and typing a command then pressing [[kbd:Enter]].",
      {table:[
        ["Device","How to get Git"],
        ["Windows","Install **Git for Windows** from git-scm.com. It adds Git to PowerShell and also gives you **Git Bash**, a bash terminal. It includes Git Credential Manager, which signs you in to GitHub (Lesson 4)."],
        ["Mac","Open **Terminal** and type `git --version`. If Git isn’t there, macOS offers to install Apple’s **command line developer tools**, which include Git. If you already use Homebrew, `brew install git` gives a newer version."],
        ["Chromebook","Turn on the **Linux development environment** (Settings → About ChromeOS → Developers), open the Terminal app, check for Git, and install it with Debian’s package manager if it’s missing (steps in Apply). Some school and work Chromebooks don’t allow Linux."],
        ["Linux","Use your package manager, for example `sudo apt install git` on Debian or Ubuntu, `sudo dnf install git` on Fedora."],
        ["Phone or tablet","Git itself doesn’t come with phones. Use GitHub’s website or app (this lesson’s last section); every exercise in this unit works without a computer."]
      ]},
      "Then check that it worked:",
      {code:"git --version", lang:"sh", label:"Command line"},
      {code:"$ git --version\ngit version 2.43.0", lang:"txt", label:"Output", cap:"Your version number will probably be different. Any recent version is fine for this unit."},
      {warn:"[[sudo|`sudo`]] (used on Linux and ChromeOS) runs one command with administrator rights, after asking for your password. It’s right for installing software from your system’s own package manager. Don’t put `sudo` in front of Git commands, or in front of anything a stranger tells you to paste."},
      {tip:"On Windows, the commands in this unit work the same in **PowerShell** and **Git Bash**. Where the two differ (copying files, for example), the lessons say so."}
    ]},
    {h:"First-time setup: who are you?", body:[
      "Every commit records an author. Before your first commit, tell Git your name and email. You do this **once per computer**; `--global` means “for every repository on this computer”.",
      {code:['git config --global user.name "Amara Mensah"','git config --global user.email "you@example.com"','git config --global init.defaultBranch main'].join("\n"), lang:"sh", label:"Command line", cap:"Put your own name and email inside the quotes."},
      "What each line does:",
      {list:[
        "`user.name` is the name shown on your commits. It doesn’t have to match your GitHub username; most people use their real name or the name they’re known by.",
        "`user.email` is the email shown on your commits. GitHub uses it to link commits to your account.",
        "`init.defaultBranch main` names the first branch in new repositories `main`, the same as GitHub uses. Without it, many versions of Git call it `master` and print a hint about it. (Lesson 3 explains branches.)"
      ]},
      {h:"Keep your email private"},
      "Here is something many people learn too late: **the email in your commits is public** once you share them. Anyone can read it in the history of a public repository, and spammers collect them. GitHub gives every account a private **[[noreply-email|noreply address]]** for exactly this reason.",
      {ol:[
        "On github.com, open your profile picture menu, then **Settings**.",
        "In the “Access” section of the sidebar, select **Emails**.",
        "Tick **Keep my email addresses private**. Below it, GitHub shows your noreply address. For accounts created since July 2017 it looks like `12345678+your-username@users.noreply.github.com`.",
        "Copy it and use it in `git config --global user.email \"…\"`."
      ]},
      "Check your settings at any time:",
      {code:"git config --global --list", lang:"sh", label:"Command line"},
      {code:"$ git config --global --list\nuser.name=Amara Mensah\nuser.email=12345678+amara-m@users.noreply.github.com\ninit.defaultbranch=main", lang:"txt", label:"Output", cap:"Git shows setting names in lower case, so `init.defaultBranch` appears as `init.defaultbranch`. It’s the same setting."},
      {tip:"Changing the email later only affects **future** commits. Commits already made keep the address they were made with, so set this up before you share anything."}
    ]},
    {h:"If you’d rather not type commands", body:[
      "The command line is worth learning, because it works the same everywhere and every guide uses it. But you don’t need it to use Git:",
      {list:[
        "**GitHub Desktop** is GitHub’s free app for **Windows and macOS** (not Linux or ChromeOS). It shows changed files, lets you tick what goes into a commit, write a message, and push, all with buttons. It works with GitHub repositories and with others.",
        "**Code editors** such as VS Code have Git built in: a **Source Control** panel lists changes and makes commits, using the Git you installed.",
        "**GitHub’s website** can edit files, make commits and branches, and handle pull requests in any browser, including a phone’s. The **GitHub Mobile** app (iPhone and Android) is mainly for following and reviewing work: notifications, issues, pull requests, and editing files within a pull request."
      ]},
      "All of these do the same things underneath: staging, commits, branches, pushes. This unit teaches the ideas with commands, because once you understand them, every app’s buttons make sense."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Git and GitHub are the same thing.”** Git is a program on your computer; GitHub is one website for sharing Git repositories. You can use Git with no account at all.",
        "**“Git saves my work automatically.”** It doesn’t. Git records a version only when you make a commit. Your editor saves files; Git saves snapshots you choose.",
        "**“Git is only for programmers.”** It suits anything made of text files: websites, notes, data, writing in Markdown or LaTeX.",
        "**“My commit email is private.”** It’s public in any shared history. Use your noreply address.",
        "**“Every commit stores a full copy of every file, so history gets huge.”** Unchanged files are reused, and everything is compressed."
      ]}
    ]}
   ],
   try:[
    {id:"t2u7-l1-x1", type:"mcq", q:"Fatima keeps `budget.xlsx`, `budget_old.xlsx`, `budget_final.xlsx` and `budget_final_fixed.xlsx`. Which question is version control specifically designed to answer that her file names can’t?", options:[
      {t:"What exactly changed between two versions, who changed it and why", ok:true, why:"Right. Each commit records the changes, the author, the date and a message, so the history explains itself."},
      {t:"How to make the spreadsheet calculate faster", why:"Version control records versions; it has nothing to do with how fast a spreadsheet calculates."},
      {t:"How to stop anyone else from opening the file", why:"That’s about permissions and sharing, not version history."},
      {t:"How to make the file smaller", why:"Git compresses its own storage, but making a file smaller isn’t its purpose."}
    ]},
    {id:"t2u7-l1-x2", type:"sort", q:"Git or GitHub? Sort each statement.", buckets:["Git (the program)","GitHub (the website)"], items:[
      {t:"Installed on your computer and works without internet", b:0, why:"Git is a program that runs locally; it needs no connection."},
      {t:"Has a web page for each project, with discussions and reviews", b:1, why:"Project pages, discussions and reviews are features of the hosting website."},
      {t:"Keeps the project’s history in a hidden `.git` folder", b:0, why:"The `.git` folder is how Git stores history on your computer."},
      {t:"Can publish a website with Pages", b:1, why:"GitHub Pages is a GitHub service, not part of Git."},
      {t:"Created in 2005 to manage the Linux kernel", b:0, why:"Git was created in 2005 by Linus Torvalds."},
      {t:"Needs an account before you can store your own projects there", b:1, why:"Git needs no account. GitHub, like GitLab or Codeberg, is a service you sign up for and sign in to."}
    ]},
    {id:"t2u7-l1-x3", type:"match", q:"Match each part of a commit with what it’s for.", pairs:[
      ["The message","Says in words what changed and why","You write it, and it’s what you’ll read when you look back through the history."],
      ["The hash, such as `1413f5f`","A unique ID for referring to exactly this commit","Worked out from the commit’s contents, so no two commits share one. Commands use it to point at a commit."],
      ["The parent","Links the commit to the one before it, forming the history","Without parent links, commits would be unrelated snapshots rather than a history."],
      ["The author","Records who made the change, with a name and email","Taken from your `user.name` and `user.email` settings."]
    ]},
    {id:"t2u7-l1-x4", type:"mcq", q:"Kenji’s project has 40 files. He changes one line in one file and makes a commit. What does Git store for the 39 files he didn’t touch?", options:[
      {t:"Nothing new: the commit points to the copies Git already has", ok:true, why:"Right. A commit is a snapshot of the whole project, but unchanged files are reused rather than stored again."},
      {t:"A full new copy of each, which is why Git repositories grow quickly", why:"Git reuses unchanged content and compresses what it stores, so history stays small."},
      {t:"Nothing at all: the commit only knows about the one changed file", why:"The commit does include all 40 files in its snapshot; it just reuses stored copies for the unchanged ones."},
      {t:"A list of differences, so the old files must be rebuilt step by step", why:"Git’s model is snapshots, not chains of differences: every commit describes the complete project. Git can show differences, and it compresses its storage behind the scenes, but that never changes what a commit is."}
    ]},
    {id:"t2u7-l1-x5", type:"order", q:"Lucía has already copied her GitHub noreply address. Put the rest of her first-time setup on a new laptop in order.", items:[
      {t:"Install Git (or turn on Linux on a Chromebook, then install it)", why:"Nothing else works until Git is installed."},
      {t:"Run `git --version` to check it’s installed", why:"A quick check before using Git for anything."},
      {t:"Set `user.name`, and `user.email` to her noreply address, with `git config --global`", why:"Every commit records these, so they must be set before her first commit."},
      {t:"Check the result with `git config --global --list`", why:"Confirms the settings are stored as she meant, before anything is recorded with them."},
      {t:"Run `git init` in her project folder and make her first commit", why:"Last: the commit will now carry her name and private email."}
    ]},
    {id:"t2u7-l1-x6", type:"mcq", q:"Lucía set `user.email` to her personal address and has made commits. She’s about to share the repository publicly. What should she know?", options:[
      {t:"Her personal address will be visible in those commits; she should switch to her noreply address now, which affects future commits", ok:true, why:"Right. The email is stored in each commit. Changing the setting only affects commits made afterwards."},
      {t:"GitHub hides the author email in public repositories automatically", why:"Commit authors, including email addresses, can be read by anyone who looks at or downloads the history."},
      {t:"Changing the setting now will update the email in all her old commits", why:"Settings apply to new commits only. Existing commits keep the email they were made with."},
      {t:"The email doesn’t matter because Git never uses it", why:"Git records it in every commit, and GitHub uses it to link commits to accounts."}
    ]},
    {id:"t2u7-l1-x7", type:"mcq", q:"Sione wants to use Git but is nervous about the command line. He uses a Windows laptop. Which statement is accurate?", options:[
      {t:"GitHub Desktop (Windows and macOS) can stage, commit and push with buttons, and it uses the same ideas as the commands", ok:true, why:"Right. It’s a free GitHub app for Windows and macOS. Understanding the commands still helps, because the buttons do the same things."},
      {t:"Git can only ever be used by typing commands", why:"GitHub Desktop, code editors such as VS Code, and GitHub’s website all offer point-and-click Git."},
      {t:"GitHub Desktop replaces Git with a different system", why:"It’s a front end for Git: the repository it makes is an ordinary Git repository."},
      {t:"He must install Linux first", why:"Git for Windows and GitHub Desktop both run on Windows directly."}
    ]}
   ],
   apply:{intro:"Install Git, introduce yourself to it, and make your commit email private. On a phone, set up the GitHub side and explore a real project’s history; you can follow every later lesson by reading and doing the exercises.", tasks:[
     {t:"Install Git and check it works", how:{
       win:["Go to **git-scm.com**, open the **Windows** download page, and download the 64-bit **Git for Windows** installer. (Alternatively, if you use winget: `winget install --id Git.Git -e --source winget`.)","Run the installer. The default choices are fine. On the screen about the default branch name, you may choose **Override the default branch name for new repositories** and type `main`. (The `git config` step in the next task does the same.)","Open **PowerShell** (search for it in Start) or **Git Bash**.","Type `git --version` and press [[kbd:Enter]]. You should see `git version` and a number."],
       mac:["Open **Terminal** (Applications → Utilities, or search with [[kbd:Cmd]] + [[kbd:Space]]).","Type `git --version` and press [[kbd:Return]].","If a window offers to install the **command line developer tools**, select **Install** and wait for it to finish (it can take several minutes), then run `git --version` again.","If you already use Homebrew, `brew install git` is an alternative that gives a newer version."],
       chromeos:["Open **Settings → About ChromeOS → Developers** and, next to **Linux development environment**, select **Set up**. Follow the steps (the defaults are fine). If the option is missing or greyed out, your administrator has turned it off; use the phone steps.","Open the **Terminal** app. If it shows a list, choose **penguin** (the usual name of the Linux container).","Type `git --version`. If it says the command is not found, type `sudo apt update`, press [[kbd:Enter]], then `sudo apt install git` and answer `Y`. (`sudo` installs software for the whole Linux container.)","Run `git --version` again to check."],
       phone:["Git itself doesn’t come with iPhones or Android phones, so set up the GitHub side today.","If you don’t have a GitHub account yet, create one at github.com in your browser. Turn on two-factor authentication when it asks.","Optional: install the **GitHub** app from the App Store (iPhone) or Google Play (Android) and sign in."]
     }, write:"Which version of Git do you have (or which device will you use for Git)?"},
     {t:"Introduce yourself to Git, privately", how:{
       win:["On github.com, open your profile picture menu → **Settings** → **Emails** (in the Access section) and tick **Keep my email addresses private**. Copy the noreply address shown.","In PowerShell or Git Bash, run `git config --global user.name \"Your Name\"`.","Run `git config --global user.email \"…\"` with your noreply address inside the quotes.","Run `git config --global init.defaultBranch main`, then `git config --global --list` to check all three."],
       mac:["On github.com, open your profile picture menu → **Settings** → **Emails** and tick **Keep my email addresses private**. Copy the noreply address.","In Terminal, run `git config --global user.name \"Your Name\"`, then `git config --global user.email \"…\"` with your noreply address.","Run `git config --global init.defaultBranch main`.","Run `git config --global --list` and check the three lines."],
       chromeos:["On github.com in Chrome, open your profile picture menu → **Settings** → **Emails** and tick **Keep my email addresses private**. Copy the noreply address.","In the Linux Terminal, run `git config --global user.name \"Your Name\"` and `git config --global user.email \"…\"` with your noreply address.","Run `git config --global init.defaultBranch main`, then `git config --global --list`.","To paste into the Linux Terminal, use [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:V]]."],
       phone:["In your phone’s browser, sign in at github.com, open your profile picture menu → **Settings** → **Emails**. (If the menu is hard to reach, use **Request Desktop Website** in Safari’s page menu, or **Desktop site** in Chrome’s **⋮** menu.)","Tick **Keep my email addresses private** and note your noreply address for when you use a computer.","This also protects your email in commits you make on the website."]
     }, write:"Write your noreply address here so it’s handy later."},
     {t:"Read a real project’s history", how:["In a browser (phone or computer), open one of your own repositories from Unit 5, or any public project on GitHub.","Find the clock icon with a number of **commits** near the top of the file list, and open it.","Pick three commits. For each, read the message, the author, the date and the short hash. Open one and look at the green (added) and red (removed) lines.","Decide which of the three messages would be most useful to someone in a year’s time, and why."], write:"Copy one good commit message and one unclear one. What makes the difference?"}
   ], proof:"`git --version` working on your computer (or a GitHub account ready on your phone), your name and noreply email set in Git, and notes on three real commits you read."},
   read:[
     {book:"progit", where:"Chapter 1, “Getting Started”: 1.1 About Version Control, 1.3 What is Git?, 1.5 Installing Git, 1.6 First-Time Git Setup"},
     {book:"swc", where:"Version Control with Git → “Automated Version Control” and “Setting Up Git”"},
     {book:"missing", where:"“Version Control and Git” → “Git’s data model” (“Snapshots” and “Modeling history: relating snapshots”)", note:"Goes deeper into how snapshots, trees and commits fit together."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u7-l2", title:"Your first commits", minutes:60,
   hook:{q:"Amara edits `index.html` and runs `git add index.html`. Then she edits the same file again, and runs `git commit -m \"Update home page\"` without adding again. What goes into the commit?", options:["Both edits","Only the first edit: the file as it was when she ran `git add`","Only the second edit","Nothing: Git refuses to commit a file that changed after `git add`"], answer:1, reveal:"Only the first edit. `git add` doesn’t mean “include this file from now on”; it copies the file **as it is right now** into a waiting area called the staging area. The commit takes what’s waiting there. Her second edit is still in her folder, uncommitted, and `git status` would show it. This lesson explains the three places your work lives and the everyday commands that move it between them."},
   goals:[
     "Describe the working tree, the staging area and the repository, and which commands move work between them",
     "Start a repository with `git init`, read `git status`, stage with `git add` and commit with `git commit -m`",
     "Write clear commit messages",
     "Read history with `git log` and changes with `git diff`",
     "Undo safely: discard edits with `git restore`, unstage with `git restore --staged`, undo a commit with `git revert`, and know why `git reset --hard` is dangerous"
   ],
   learn:[
    {h:"Three places your work lives", body:[
      {lead:"Making a commit is like posting a parcel: you choose what goes in the box, close it, and label it."},
      "Git keeps your work in three places:",
      {list:[
        "The **[[working-tree|working tree]]** is your project folder as you see it: the files you open and edit. Saving a file in your editor changes the working tree, and nothing else.",
        "The **[[staging-area|staging area]]** (also called the **index**) is the open parcel: the exact contents of the **next** commit, which you fill with [[git-add|`git add`]].",
        "The **repository** is the `.git` folder, holding every commit ever made. `git commit` closes the parcel, labels it with your message, and adds it to the history."
      ]},
      {fig:'<svg viewBox="0 0 340 410"><defs><marker id="t2u7a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="10" y="10" width="320" height="74" rx="8" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Working tree</text><text class="s" x="170" y="56" text-anchor="middle">the files in your folder</text><text class="s" x="170" y="73" text-anchor="middle">what you see and edit</text><path class="d-ink" d="M60,88 L60,148" stroke-width="2" marker-end="url(#t2u7a2)"/><text class="mono" x="70" y="122">git add</text><path class="d-ink" d="M210,148 L210,88" stroke-width="2" marker-end="url(#t2u7a2)"/><text class="mono" x="220" y="114">git</text><text class="mono" x="220" y="132">restore</text><rect class="d-gold" x="10" y="152" width="320" height="74" rx="8" stroke-width="2"/><text x="170" y="178" text-anchor="middle">Staging area</text><text class="s" x="170" y="198" text-anchor="middle">the next commit, being packed</text><text class="s" x="170" y="215" text-anchor="middle">(also called the index)</text><path class="d-ink" d="M60,230 L60,290" stroke-width="2" marker-end="url(#t2u7a2)"/><text class="mono" x="70" y="256">git</text><text class="mono" x="70" y="274">commit</text><path class="d-ink" d="M210,290 L210,230" stroke-width="2" marker-end="url(#t2u7a2)"/><text class="mono" x="220" y="256">git restore</text><text class="mono" x="220" y="274">--staged</text><rect class="d-sage" x="10" y="294" width="320" height="74" rx="8" stroke-width="2"/><text x="170" y="320" text-anchor="middle">Repository (.git)</text><text class="s" x="170" y="340" text-anchor="middle">every commit, kept safely</text><text class="s" x="170" y="357" text-anchor="middle">git log lists them</text><text class="s" x="10" y="388">git diff: working tree vs staging</text><text class="s" x="10" y="405">git diff --staged: staging vs last commit</text></svg>', alt:"Three stacked boxes. Top: the working tree, the files in your folder. Middle: the staging area, the next commit being packed, also called the index. Bottom: the repository, the .git folder, where every commit is kept. On the left, arrows point down: git add from working tree to staging, git commit from staging to the repository. On the right, arrows point up: git restore --staged copies the last commit’s version back into staging, and git restore copies the staged version back into the working tree. Notes: git diff compares the working tree with staging; git diff --staged compares staging with the last commit.", cap:"`git add` and `git commit` move work down; the two `git restore` commands copy versions back up."},
      "Why have a staging area at all? Because it lets you **choose**. Suppose you fixed a typo in the menu and, in the same hour, started a half-finished new page. You can stage just the typo fix and commit it with a clear message, leaving the unfinished page out until it’s ready. Each commit then holds one sensible change."
    ]},
    {h:"Start a repository", body:[
      "Here Amara starts a repository for her garden club’s website. First she makes a folder and moves into it, then she runs [[git-init|`git init`]]:",
      {code:["mkdir garden-club","cd garden-club","git init"].join("\n"), lang:"sh", label:"Command line", cap:"These three commands work the same in bash, zsh and PowerShell."},
      {code:"$ git init\nInitialized empty Git repository in /home/amara/garden-club/.git/", lang:"txt", label:"Output"},
      "`git init` creates the hidden `.git` folder. That’s all: your files aren’t touched, and nothing is tracked yet. Now she creates `index.html` and `style.css` in her editor and asks Git what it sees. **[[git-status|`git status`]] is the command you’ll run most**: it’s always safe, it changes nothing, and it usually tells you what to do next.",
      {code:"$ git status\nOn branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tindex.html\n\tstyle.css\n\nnothing added to commit but untracked files present (use \"git add\" to track)", lang:"txt", label:"Output"},
      "**Untracked** means Git can see the files but isn’t keeping history for them yet.",
      {warn:"Run `git init` once, in the project’s own folder. Don’t run it in your [[home-directory|home folder]] or Documents folder: Git would then treat everything inside as one giant project. If you do it by mistake, delete the `.git` folder it made (and only that folder)."}
    ]},
    {h:"Stage, then commit", body:[
      "Stage one file and look again:",
      {code:"git add index.html\ngit status", lang:"sh", label:"Command line"},
      {code:"$ git status\nOn branch main\n\nNo commits yet\n\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n\tnew file:   index.html\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\tstyle.css", lang:"txt", label:"Output", cap:"`index.html` is staged (“to be committed”); `style.css` is still untracked."},
      "Stage the other file, then commit with a message after `-m`:",
      {code:'git add style.css\ngit commit -m "Add home page and basic styles"', lang:"sh", label:"Command line"},
      {code:"$ git commit -m \"Add home page and basic styles\"\n[main (root-commit) d9fdeb4] Add home page and basic styles\n 2 files changed, 14 insertions(+)\n create mode 100644 index.html\n create mode 100644 style.css", lang:"txt", label:"Output", cap:"`root-commit` means the very first commit. `d9fdeb4` is its short hash; yours will differ."},
      "Now `git status` says `nothing to commit, working tree clean`: everything in the folder matches the last commit. From here the rhythm is always the same:",
      {ol:["Edit files and save them.","`git status` to see what changed.","`git add` the files that belong in this change.","`git commit -m \"…\"` with a clear message."]},
      "Two shortcuts, with care:",
      {list:[
        "`git add .` stages **every** change in the current folder and below, including new files. Run `git status` first so nothing unexpected slips in.",
        "`git commit -am \"…\"` stages and commits changes to files Git **already tracks**, in one step. New files are skipped: they still need `git add`."
      ]},
      {tip:"If you forget `-m`, Git opens a text editor for the message. If it’s **Vim** (a screen full of `~` lines), type your message after pressing [[kbd:I]], then press [[kbd:Esc]], type `:wq` and press [[kbd:Enter]]. To leave without committing, press [[kbd:Esc]], type `:q!` and press [[kbd:Enter]]."}
    ]},
    {h:"Writing good commit messages", body:[
      "A [[commit-message|commit message]] is a note to your future self and to everyone else on the project. In a year, `git log` will be how you find out why something is the way it is. Widely used conventions, also described in Pro Git:",
      {list:[
        "**A short summary line**, about 50 characters or fewer, that completes the sentence “If applied, this commit will…”: “Add opening hours”, not “Added opening hours” or “opening hours stuff”.",
        "**Say what and why**, not how. The changes themselves show how.",
        "**One logical change per commit.** “Fix menu link” and “Add events page” are two commits, so either can be undone alone.",
        "**For more detail**, leave a blank line after the summary and write a paragraph. (Use a second `-m`: `git commit -m \"Summary\" -m \"Details…\"`.)"
      ]},
      {table:[
        ["Unclear","Clear"],
        ["`update`","`Change meeting time to 8:30`"],
        ["`fixed stuff`","`Fix broken link to About page`"],
        ["`more changes`","`Add alt text to garden photos`"],
        ["`final version!!`","`Add seed swap to events page`"]
      ]},
      {key:"Commit small, commit often, and describe each commit so that someone else could understand it without looking at the code."}
    ]},
    {h:"Looking back: log and diff", body:[
      "[[git-log|`git log`]] lists commits, newest first. `--oneline` gives one short line each:",
      {code:"$ git log --oneline\n5d4ad43 Make headings green\n1413f5f Add About page and link to it\n76afb61 Change meeting time to 8:30\nd9fdeb4 Add home page and basic styles", lang:"txt", label:"Output", cap:"Plain `git log` shows the full hash, author, date and message for each. If the list is long, Git shows it a page at a time: press [[kbd:Space]] for more and [[kbd:Q]] to quit."},
      "Useful variations: `git log --oneline -- about.html` shows only commits that changed that file, and `git show 1413f5f` shows one commit in full, with its changes.",
      "**[[git-diff-term|`git diff`]]** shows what you’ve changed but not yet staged. Here Amara changed the meeting time:",
      {code:"$ git diff\ndiff --git a/index.html b/index.html\nindex 6edb4e0..53114e5 100644\n--- a/index.html\n+++ b/index.html\n@@ -6,6 +6,6 @@\n </head>\n <body>\n   <h1>Riverside Garden Club</h1>\n-  <p>We meet every Saturday at 9:00.</p>\n+  <p>We meet every Saturday at 8:30.</p>\n </body>\n </html>", lang:"txt", label:"Output"},
      "How to read it:",
      {list:[
        "`--- a/index.html` and `+++ b/index.html`: the old version (a) and the new version (b) of the same file.",
        "`@@ -6,6 +6,6 @@`: this piece of the file starts at line 6 and is 6 lines long, before and after.",
        "Lines starting with `-` were removed, lines starting with `+` were added. Git sees a changed line as one removed and one added. Lines starting with a space are unchanged context."
      ]},
      "Once she runs `git add index.html`, plain `git diff` shows nothing, because the working tree now matches the staging area. To see what’s staged, use `git diff --staged`. Checking it just before every commit is a great habit."
    ]},
    {h:"Undoing things safely", body:[
      "Git makes most mistakes fixable, but the right tool depends on **where** the mistake is. Find your situation:",
      {table:[
        ["Situation","Command","What it does"],
        ["Edited a file (not staged) and want the committed version back","`git restore file`","Throws away the unstaged edits in that file"],
        ["Staged something by mistake","`git restore --staged file`","Unstages it; your edits stay in the file"],
        ["Want one file as it was in an old commit","`git restore --source 1413f5f file`","Puts that version in your working tree; commit it if you want to keep it"],
        ["A commit was a mistake (even if shared)","`git revert <hash>`","Makes a **new** commit that undoes it; history is kept"],
        ["Last commit not yet shared, want to redo it","`git reset --soft HEAD~1`","Removes the commit; its changes stay staged"]
      ]},
      {warn:"[[git-restore|`git restore file`]] is one of the few Git commands that can lose work: edits that were never staged or committed are thrown away, with no undo. Run `git diff file` first and be sure."},
      "**[[git-revert|Revert]]** is the safe way to undo a commit. Amara decided the green headings were a mistake:",
      {code:"$ git revert --no-edit HEAD\n[main d0e8bd0] Revert \"Make headings green\"\n Date: Sat Mar 14 10:15:02 2026 +0100\n 1 file changed, 3 deletions(-)\n$ git log --oneline\nd0e8bd0 Revert \"Make headings green\"\n5d4ad43 Make headings green\n1413f5f Add About page and link to it\n…", lang:"txt", label:"Output", cap:"`HEAD` means “the commit I’m on now”. `--no-edit` accepts Git’s suggested message instead of opening an editor. Your hashes and date will differ."},
      "The mistake is still in the history, followed by a commit that undoes it. That’s a feature: nothing is hidden, and anyone who already has the old commits isn’t confused.",
      {h:"The dangerous one: `git reset --hard`"},
      "You will see `git reset --hard` in online answers. It moves your branch and **makes your working tree and staging area match a commit, throwing away every uncommitted change to the files Git tracks**. In a test, it silently threw away both a staged change and an unstaged edit:",
      {code:"$ git reset --hard HEAD\nHEAD is now at d0e8bd0 Revert \"Make headings green\"", lang:"txt", label:"Output", cap:"No warning, no question, no undo for the uncommitted work."},
      {key:"Prefer the gentle tools: `git restore` for files, `git revert` for commits. Use `reset` only on commits you haven’t shared, and treat `--hard` as “delete my uncommitted work”."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“`git add` means ‘track this file from now on’.”** It stages the file’s **current** contents. Edit again, and you must add again.",
        "**“Saving in my editor saves to Git.”** Only a commit records a version.",
        "**“`git diff` shows nothing, so I have no changes.”** Your changes may be staged: try `git diff --staged`, or just `git status`.",
        "**“Undoing a commit means deleting it.”** `git revert` undoes it by adding a new commit, which is safer.",
        "**“A messy history means I’m doing it wrong.”** Everyone commits typos and reverts. Clear messages matter more than perfection."
      ]}
    ]}
   ],
   try:[
    {id:"t2u7-l2-x1", type:"match", q:"Match each command with where it moves your work.", pairs:[
      ["`git add file`","From the working tree into the staging area","It copies the file’s current contents into the next commit."],
      ["`git commit -m \"…\"`","From the staging area into the repository, as a new commit","It records exactly what’s staged, with your message."],
      ["`git restore --staged file`","From the last commit back into the staging area (unstaging)","Your edits stay in the working tree; only the staged copy goes back."],
      ["`git restore file`","From the staging area back into the working tree, discarding edits","Unstaged edits in that file are thrown away."]
    ]},
    {id:"t2u7-l2-x2", type:"mcq", q:"Priya runs `git status` and sees `index.html` under **Changes to be committed** and also under **Changes not staged for commit**. What does that mean?", options:[
      {t:"She staged the file, then edited it again: the staged version and the newer edits are different", ok:true, why:"Right. Staging copies the file at that moment. The second listing is the newer edits. `git add index.html` again would stage those too."},
      {t:"Git is confused and the repository is damaged", why:"This is a normal state, and `git status` is describing it accurately."},
      {t:"There are two different files called `index.html`", why:"It’s one file, in two states: the staged copy and the working tree copy."},
      {t:"The commit will include both versions", why:"A commit takes only what’s staged. The later edits stay out until she adds them."}
    ]},
    {id:"t2u7-l2-x3", type:"order", q:"Kenji wants to commit a new `menu.html` page. Put his steps in order.", items:[
      {t:"Create and save `menu.html` in his editor", why:"The file must exist in the working tree first."},
      {t:"Run `git status` and see `menu.html` listed as untracked", why:"A quick look confirms what Git sees before staging."},
      {t:"Run `git add menu.html`", why:"Stages the file for the next commit."},
      {t:"Run `git diff --staged` to check what will be committed", why:"A habit that catches surprises before they’re recorded."},
      {t:"Run `git commit -m \"Add menu page\"`", why:"Records the staged snapshot with a clear message."}
    ]},
    {id:"t2u7-l2-x4", type:"sort", q:"Which commit messages follow good practice?", buckets:["Clear","Needs work"], items:[
      {t:"Fix broken link to About page", b:0, why:"Short, says what changed, and reads as “this commit will fix…”."},
      {t:"update", b:1, why:"Every commit is an update; this tells a future reader nothing."},
      {t:"Add alt text to garden photos", b:0, why:"A clear, single change in the imperative mood."},
      {t:"Changed lots of things in the CSS and also the menu and fixed a typo", b:1, why:"Several unrelated changes in one commit, and too long for a summary line. Split it into separate commits."},
      {t:"asdf", b:1, why:"Meaningless. In a year nobody will know what this commit was for."},
      {t:"Move meetings to Sunday", b:0, why:"Says exactly what changed, in under 50 characters."}
    ]},
    {id:"t2u7-l2-x5", type:"spot", q:"Here is part of a `git diff`. Tap every line that shows a change (something added or removed).", ask:"a change", mono:true, parts:[
      {t:"@@ -8,5 +8,5 @@", flag:false, why:"A hunk header: it says where in the file the change is, but it isn’t a change itself."}, "\n",
      {t:"   <h1>Riverside Garden Club</h1>", flag:false, why:"Starts with a space: unchanged context, shown so you know where you are."}, "\n",
      {t:"-  <p>Open 9:00 to 12:00.</p>", flag:true, why:"Starts with `-`: this line was removed (it’s the old version)."}, "\n",
      {t:"+  <p>Open 8:30 to 12:00.</p>", flag:true, why:"Starts with `+`: this line was added (the new version). Together with the `-` line, it shows one changed line."}, "\n",
      {t:"   <p><a href=\"about.html\">About</a></p>", flag:false, why:"Unchanged context after the change."}
    ]},
    {id:"t2u7-l2-x6", type:"mcq", q:"Mei committed “Add price list” an hour ago and already pushed it to a shared repository. The prices were wrong. What’s the safest way to undo that commit?", options:[
      {t:"`git revert` with that commit’s hash, which adds a new commit undoing it", ok:true, why:"Right. Revert keeps the history intact, so it’s safe even after others have the commit."},
      {t:"`git reset --hard HEAD~1`", why:"That removes the commit from her branch and throws away uncommitted work. Rewriting shared history causes problems for everyone who already has it."},
      {t:"Delete the `.git` folder and start again", why:"That deletes the entire history, not just one commit."},
      {t:"`git restore price-list.html`", why:"`git restore` only discards uncommitted edits in the working tree. It doesn’t undo a commit."}
    ]},
    {id:"t2u7-l2-x7", type:"mcq", q:"Tomás edited `style.css`, didn’t stage it, and now wants the version from his last commit back. He runs `git diff style.css` and sees the edits he no longer wants. What should he run?", options:[
      {t:"`git restore style.css`", ok:true, why:"Right. It replaces the file in the working tree with the staged version, which here is the last commit’s. The unwanted edits are discarded, so checking with `git diff` first was wise."},
      {t:"`git restore --staged style.css`", why:"That only unstages. His edits aren’t staged, so nothing would change."},
      {t:"`git revert HEAD`", why:"That undoes the last **commit**, which isn’t the problem. His unwanted changes aren’t committed."},
      {t:"`git commit -m \"Undo\"`", why:"Nothing is staged, so there’s nothing to commit. And committing the edits would keep them, not remove them."}
    ]}
   ],
   apply:{intro:"Build a small repository with real history, read it, and practise every undo on purpose, so you know what each does before you ever need it.", tasks:[
     {t:"Make a repository with three commits", how:{
       win:["In PowerShell or Git Bash, run `mkdir garden-club`, then `cd garden-club`, then `git init`.","Open the folder in an editor (for example VS Code: `code .`, or File → Open Folder) and create `index.html` with a heading and a paragraph. Save.","Run `git status`, then `git add index.html`, then `git commit -m \"Add home page\"`.","Make two more small changes (a `style.css`, then a change to the paragraph), committing each with a clear message. Then run `git log --oneline`."],
       mac:["In Terminal, run `mkdir garden-club`, then `cd garden-club`, then `git init`.","Create `index.html` in a code editor such as VS Code (TextEdit only after **Format → Make Plain Text**). Save it in the `garden-club` folder.","Run `git status`, `git add index.html`, `git commit -m \"Add home page\"`.","Make two more small changes, committing each with a clear message, then run `git log --oneline`."],
       chromeos:["In the Linux Terminal, run `mkdir garden-club`, then `cd garden-club`, then `git init`.","Create the file with a Linux editor: `nano index.html` opens a simple editor in the terminal ([[kbd:Ctrl]] + [[kbd:O]] saves, [[kbd:Ctrl]] + [[kbd:X]] exits). If you installed VS Code in Linux, use that instead.","Run `git status`, `git add index.html`, `git commit -m \"Add home page\"`.","Make two more small changes, committing each, then run `git log --oneline`."],
       phone:["Open one of your repositories on github.com in your phone’s browser (create a new one with a README if you need to).","Open the README, tap the **pencil** (Edit), change a line, then tap **Commit changes…**. Write a clear message and commit.","Repeat twice with different small changes.","Open the commit list (the clock icon with the number of commits) and find your three commits."]
     }, write:"Paste your `git log --oneline` (or list your three commit messages)."},
     {t:"Read your changes", how:{
       win:["Change one line in `index.html` and save. Run `git diff` and find the `-` and `+` lines.","Run `git add index.html`, then `git diff` (empty) and `git diff --staged` (your change).","Commit it, then run `git show` to see the commit you just made."],
       mac:["Change one line in `index.html` and save. Run `git diff` and find the `-` and `+` lines.","Run `git add index.html`, then `git diff` (empty) and `git diff --staged` (your change).","Commit it, then run `git show`. If the output fills the screen, press [[kbd:Q]] to quit."],
       chromeos:["Change one line in `index.html` with your editor and save. Run `git diff`.","Run `git add index.html`, then `git diff` and `git diff --staged`, and compare.","Commit it, then run `git show` ([[kbd:Q]] quits the viewer)."],
       phone:["In your repository’s commit list, open your latest commit.","Find the red (removed) and green (added) lines. On GitHub’s website, this view is the same diff you’d see with `git show`.","Compare it with an older commit: what was the first version of that line?"]
     }, write:"Describe one change in diff terms: which line was removed and which was added?"},
     {t:"Practise undoing, on purpose", how:["Add a silly line to `index.html` and save. Run `git status`, then `git restore index.html`. Check the line is gone.","Add the line again, run `git add index.html`, then `git restore --staged index.html`. Run `git status`: the change is now unstaged but still in the file. Restore it away.","Commit a deliberate mistake (for example, delete your heading and commit with the message “Remove heading”). Then run `git revert --no-edit HEAD` and look at `git log --oneline`.","On a phone, practise the idea instead: edit a file on GitHub, commit, then edit it back and commit with the message “Revert …”. GitHub’s website has no revert button for single commits outside pull requests."], write:"Which undo command would you use for each of the three situations, in your own words?"}
   ], proof:"A repository with at least four commits with clear messages (one of them a revert), a diff you can explain line by line, and notes on when to use `restore`, `restore --staged` and `revert`."},
   read:[
     {book:"progit", where:"Chapter 2, “Git Basics”: 2.1 Getting a Git Repository, 2.2 Recording Changes to the Repository, 2.3 Viewing the Commit History, 2.4 Undoing Things"},
     {book:"swc", where:"Version Control with Git → “Creating a Repository”, “Tracking Changes” and “Exploring History”"},
     {book:"missing", where:"“Version Control and Git” → “Staging area” and “Git command-line interface” (Basics, Undo)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u7-l3", title:"Branches and merging", minutes:55,
   hook:{q:"Hana’s project has 2,000 files. She runs `git branch new-design` to start a branch. Roughly how much extra disk space does the new branch take?", options:["About the same as the whole project: Git copies every file","About half, because only some files are copied","A few dozen bytes: one tiny file that holds a commit’s ID","Nothing until she switches to it, then a full copy"], answer:2, reveal:"A few dozen bytes. In a test, the new branch was a single file of 41 bytes: a commit’s 40-character hash plus a line ending. A branch isn’t a copy of your files; it’s a movable label pointing at a commit. That’s why branching is instant and why Git users make branches for even small experiments. This lesson shows how to create them, switch between them, merge them back, and calmly sort out the occasional conflict."},
   goals:[
     "Explain what a branch is (a movable label on a commit) and what `HEAD` means",
     "Create and switch branches with `git switch -c` and `git switch`, and list them with `git branch`",
     "Merge a branch, and tell a fast-forward merge from a merge commit",
     "Read conflict markers and resolve a merge conflict step by step, or back out with `git merge --abort`",
     "Work in ways that keep conflicts small"
   ],
   learn:[
    {h:"Why branches?", body:[
      {lead:"A branch lets you try something without putting the working version at risk."},
      "Picture the garden club’s live website. It publishes from the `main` branch (that’s how GitHub Pages works, as in Unit 5). Amara wants to build an events page, which will take a few evenings. Meanwhile someone reports a typo on the home page that should be fixed today. If she does everything on `main`, a half-built events page could go live with the typo fix.",
      "With branches she keeps the two apart:",
      {list:[
        "`main` always holds the working, publishable site. The typo fix is committed there and goes live.",
        "`events-page` holds the unfinished work. When it’s ready, she **merges** it into `main`."
      ]},
      "A **[[branch-git|branch]]** is a separate line of commits. Under the hood it’s very simple: **a branch is a label that points at one commit**. When you commit on a branch, the label moves forward to the new commit automatically. Creating a branch just makes a new label, which is why it’s instant and takes almost no space.",
      "Git also keeps a special pointer called **[[head-git|`HEAD`]]**, which means “where you are now”. Normally `HEAD` points at a branch, such as `main`, and that branch points at a commit. When you see `HEAD` in a command, read it as “the commit I’m on”.",
      {key:"A branch is a movable label on a commit. `HEAD` tells Git which branch you’re on."}
    ]},
    {h:"Creating and switching branches", body:[
      "`git branch` lists branches; the star marks the one you’re on. `git switch -c name` creates a branch and switches to it in one step:",
      {code:"git branch\ngit switch -c events-page", lang:"sh", label:"Command line"},
      {code:"$ git branch\n* main\n$ git switch -c events-page\nSwitched to a new branch 'events-page'", lang:"txt", label:"Output"},
      "Amara creates `events.html`, then adds and commits it as usual. The commit belongs to `events-page`. Watch what happens to her folder when she switches back:",
      {code:"$ ls\nabout.html  events.html  index.html  style.css\n$ git switch main\nSwitched to branch 'main'\n$ ls\nabout.html  index.html  style.css", lang:"txt", label:"Output", cap:"`ls` lists the folder’s files (in PowerShell, `ls` works too, with a different layout)."},
      "`events.html` disappeared! It isn’t lost: switching branches makes your working tree match the commit that branch points at, and `events.html` only exists on `events-page`. `git switch events-page` brings it back.",
      {h:"When Git refuses to switch"},
      "If you have uncommitted changes that switching would overwrite, Git stops rather than lose them:",
      {code:"$ git switch events-page\nerror: Your local changes to the following files would be overwritten by checkout:\n\tindex.html\nPlease commit your changes or stash them before you switch branches.\nAborting", lang:"txt", label:"Output"},
      "Commit the changes (on the branch they belong to), or undo them with `git restore`, then switch. If switching **wouldn’t** overwrite anything, Git doesn’t stop you: uncommitted edits belong to no branch yet, so they simply come with you to the other branch. Run `git status` after switching so that doesn’t surprise you.",
      "If you need to put changes aside without committing them, `git stash` does that; it’s in Pro Git section 7.3 if you want it later.",
      {h:"Branch commands at a glance"},
      {table:[
        ["Task","Command"],
        ["List branches","`git branch`"],
        ["Create and switch","`git switch -c name`"],
        ["Switch to an existing branch","`git switch name`"],
        ["Delete a merged branch","`git branch -d name`"],
        ["Older equivalent you’ll see online","`git checkout -b name` / `git checkout name`"]
      ]},
      {tip:"Name branches after what they’re for, in lower case with hyphens: `events-page`, `fix-menu-link`, `winter-hours`."}
    ]},
    {h:"Merging: fast-forward or merge commit", body:[
      "To bring a branch’s work into `main`, switch to **the branch that should receive the work**, then merge the other one into it:",
      {code:"git switch main\ngit merge events-page", lang:"sh", label:"Command line"},
      {code:"$ git merge events-page\nUpdating d0e8bd0..d1dce3d\nFast-forward\n events.html | 11 +++++++++++\n 1 file changed, 11 insertions(+)\n create mode 100644 events.html", lang:"txt", label:"Output"},
      "Git chooses one of two kinds of [[merge|merge]], depending on the history:",
      {fig:'<svg viewBox="0 0 340 378"><defs><marker id="t2u7a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="18">1. Fast-forward</text><path class="d-ink" d="M54,62 L106,62 M134,62 L186,62" stroke-width="2"/><circle class="d-lup" cx="40" cy="62" r="14" stroke-width="2"/><text x="40" y="67" text-anchor="middle">A</text><circle class="d-lup" cx="120" cy="62" r="14" stroke-width="2"/><text x="120" y="67" text-anchor="middle">B</text><circle class="d-lup" cx="200" cy="62" r="14" stroke-width="2"/><text x="200" y="67" text-anchor="middle">C</text><rect class="d-gold" x="150" y="18" width="100" height="22" rx="5" stroke-width="1.5"/><text x="200" y="34" text-anchor="middle">events-page</text><rect class="d-sage" x="95" y="86" width="50" height="22" rx="5" stroke-width="1.5"/><text x="120" y="102" text-anchor="middle">main</text><path class="d-ink" d="M147,97 L170,97" stroke-width="2" marker-end="url(#t2u7a3)"/><rect class="d-sage" x="175" y="86" width="50" height="22" rx="5" stroke-width="1.5" stroke-dasharray="4 3"/><text x="200" y="102" text-anchor="middle">main</text><text class="s" x="10" y="134">main had no new commits, so its label just</text><text class="s" x="10" y="150">moves forward to C. No new commit is made.</text><text x="10" y="186">2. Merge commit</text><rect class="d-gold" x="132" y="194" width="96" height="22" rx="5" stroke-width="1.5"/><text x="180" y="210" text-anchor="middle">new-colours</text><path class="d-ink" d="M54,286 L96,286 M124,286 L166,286 M194,286 L256,286 M121,277 L169,241 M191,241 L259,277" stroke-width="2"/><circle class="d-lup" cx="40" cy="286" r="14" stroke-width="2"/><text x="40" y="291" text-anchor="middle">A</text><circle class="d-lup" cx="110" cy="286" r="14" stroke-width="2"/><text x="110" y="291" text-anchor="middle">B</text><circle class="d-lup" cx="180" cy="232" r="14" stroke-width="2"/><text x="180" y="237" text-anchor="middle">C</text><circle class="d-lup" cx="180" cy="286" r="14" stroke-width="2"/><text x="180" y="291" text-anchor="middle">D</text><circle class="d-gold" cx="270" cy="286" r="14" stroke-width="2"/><text x="270" y="291" text-anchor="middle">M</text><rect class="d-sage" x="245" y="310" width="50" height="22" rx="5" stroke-width="1.5"/><text x="270" y="326" text-anchor="middle">main</text><text class="s" x="10" y="356">Both branches moved on, so Git makes a new</text><text class="s" x="10" y="372">merge commit, M, with two parents: C and D.</text></svg>', alt:"Two pictures. First, fast-forward: commits A, B and C in a row. The events-page label is on C and the main label is on B. An arrow shows main moving forward to C; no new commit is made, because main had no new commits. Second, merge commit: commits A and B, then the history splits. Commit C is on the new-colours branch and commit D is on main. A new merge commit M joins them and has two parents, C and D. The main label is on M.", cap:"Fast-forward when only one side moved; a merge commit when both did."},
      {list:[
        "**[[fast-forward|Fast-forward]].** If `main` hasn’t changed since the branch started, Git simply moves the `main` label forward to the branch’s latest commit. No new commit is needed. That’s what happened above.",
        "**Merge commit.** If both branches have new commits, Git combines them and records a **merge commit** with two parents. Git writes the message “Merge branch 'new-colours'” for you and, without `--no-edit`, opens your editor so you can change it."
      ]},
      {code:"$ git merge --no-edit new-colours\nMerge made by the 'ort' strategy.\n style.css | 3 +++\n 1 file changed, 3 insertions(+)\n$ git log --oneline --graph\n*   b315618 Merge branch 'new-colours'\n|\\  \n| * d94a366 Make headings dark green\n* | b54fb95 Add harvest supper to events\n|/  \n* d1dce3d Add events page", lang:"txt", label:"Output", cap:"`--graph` draws the branches as lines of text. “ort” is the name of Git’s default merging method; you don’t need to do anything with it."},
      "When a branch is merged, delete its label with `git branch -d new-colours`. The commits stay in the history; only the label goes. Git refuses `-d` if the branch has commits that aren’t merged anywhere, which protects you from deleting unfinished work."
    ]},
    {h:"Merge conflicts", body:[
      "Usually Git merges on its own, even when both branches changed the same file, as long as they changed **different parts** of it. A **[[merge-conflict|merge conflict]]** happens only when both branches changed **the same lines**, or lines right next to each other (or one changed a file the other deleted). Git can’t know which version you want, so it stops and asks you.",
      "Here, `main` moved meetings to Sunday, while the `winter-hours` branch changed the same sentence to a winter time:",
      {code:"$ git merge winter-hours\nAuto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result.\n$ git status\nOn branch main\nYou have unmerged paths.\n  (fix conflicts and run \"git commit\")\n  (use \"git merge --abort\" to abort the merge)\n\nUnmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n\tboth modified:   index.html", lang:"txt", label:"Output"},
      "Nothing is broken. Git has merged everything it could and marked the one spot it needs help with. Open `index.html`:",
      {code:"<body>\n  <h1>Riverside Garden Club</h1>\n<<<<<<< HEAD\n  <p>We meet every Sunday at 8:30.</p>\n=======\n  <p>We meet every Saturday at 10:00 in winter.</p>\n>>>>>>> winter-hours\n  <p><a href=\"about.html\">About us</a></p>\n</body>", lang:"txt", label:"index.html, mid-merge"},
      {fig:'<svg viewBox="0 0 340 286"><defs><marker id="t2u7a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-rose" x="10" y="10" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="29">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</text><text class="s" x="322" y="29" text-anchor="end">start: your side</text><rect class="d-lup" x="10" y="40" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="59">Sunday at 8:30.</text><text class="s" x="322" y="59" text-anchor="end">main (where you are)</text><rect class="d-rose" x="10" y="70" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="89">=======</text><text class="s" x="322" y="89" text-anchor="end">divider</text><rect class="d-gold" x="10" y="100" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="119">Saturday at 10:00</text><text class="s" x="322" y="119" text-anchor="end">winter-hours</text><rect class="d-rose" x="10" y="130" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="149">&gt;&gt;&gt;&gt;&gt;&gt;&gt; winter-hours</text><text class="s" x="322" y="149" text-anchor="end">end of conflict</text><path class="d-ink" d="M170,164 L170,194" stroke-width="2" marker-end="url(#t2u7a4)"/><text class="s" x="182" y="184">you decide</text><rect class="d-sage" x="10" y="200" width="320" height="28" rx="4" stroke-width="1.5"/><text class="mono" x="18" y="219">Sunday at 8:30 (10:00 in winter).</text><text class="s" x="10" y="256">Delete the three marker lines, keep what’s right,</text><text class="s" x="10" y="274">then git add the file and git commit.</text></svg>', alt:"The parts of a conflict, top to bottom. A marker line of seven less-than signs and the word HEAD starts the conflict: your side. Then your branch’s version, main, Sunday at 8:30. A line of seven equals signs is the divider. Then the other branch’s version, winter-hours, Saturday at 10:00. A line of seven greater-than signs and the branch name ends the conflict. An arrow labelled you decide leads to the resolved line: Sunday at 8:30, 10:00 in winter. Note: delete the three marker lines, keep what is right, then git add the file and git commit.", cap:"Conflict markers fence off the two versions. The result can be one side, the other, or a mix."},
      {h:"Resolve it calmly"},
      {ol:[
        "Run `git status` to see which files have conflicts (“both modified”).",
        "Open each file and search for `<<<<<<<`. Everything between it and `=======` is **your** side (the branch you’re on, `HEAD`); everything between `=======` and `>>>>>>>` is the **incoming** branch.",
        "Edit the text so it says what it should. Keep one side, the other, or combine them, and **delete all three marker lines**. Talk to whoever made the other change if you’re not sure.",
        "Save, then `git add index.html` to mark it resolved.",
        "When every file is resolved, run `git commit` (or `git commit --no-edit` to keep Git’s message). The merge is done."
      ]},
      {code:"$ git add index.html\n$ git commit --no-edit\n[main c900a7e] Merge branch 'winter-hours'", lang:"txt", label:"Output"},
      {tip:"Changed your mind halfway? `git merge --abort` puts everything back exactly as it was before the merge started. Many editors, including VS Code, also highlight conflicts and offer one-click choices such as **Accept Current Change**, **Accept Incoming Change** and **Accept Both Changes**."},
      {warn:"Don’t commit a file that still contains `<<<<<<<`, `=======` or `>>>>>>>` lines. Git won’t stop you, and in a web page those lines show up as text on the live site. Search for `<<<<<<<` before you commit."}
    ]},
    {h:"Keeping conflicts small", body:[
      "Conflicts are normal, not a sign of a mistake. You can make them rarer and smaller:",
      {list:[
        "**Keep branches short-lived.** A branch that lives for a day conflicts far less than one that lives for a month.",
        "**Merge `main` into your branch now and then** (`git switch events-page`, then `git merge main`) so you meet small conflicts early, on your own branch.",
        "**Avoid needless changes.** Reformatting a whole file, or changing line endings, touches every line and can conflict with everyone.",
        "**Talk.** If two people need to change the same page, agree who does which part."
      ]},
      {h:"Branches on GitHub’s website"},
      "On a repository’s page, the branch menu (it shows `main`) lets you switch branches, or type a new name and choose **Create branch** from the current one. When you edit a file on the website, the commit dialog can also start a new branch for you. GitHub merges branches through **pull requests**, which Lesson 5 covers; for simple conflicts it offers a **Resolve conflicts** editor showing the same markers you’ve just learned."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A branch is a copy of my files.”** It’s a label pointing at a commit. Files only change when you switch.",
        "**“Switching branches deleted my file.”** It’s safe in the other branch’s commits. Switch back and it returns.",
        "**“`git merge events-page` merges main into events-page.”** It merges the named branch **into the branch you’re on**. Switch to the receiving branch first.",
        "**“A conflict means Git failed or I broke something.”** It means two changes touched the same (or neighbouring) lines and a person has to choose. Git has done the rest.",
        "**“Deleting a merged branch deletes its work.”** The commits stay in the history; only the label goes."
      ]}
    ]}
   ],
   try:[
    {id:"t2u7-l3-x1", type:"mcq", q:"Which description of a Git branch is accurate?", options:[
      {t:"A movable label that points at a commit and moves forward when you commit on it", ok:true, why:"Right. That’s why branches are instant to create and take almost no space."},
      {t:"A full copy of the project in a separate folder", why:"Git doesn’t copy files to make a branch. Your one folder changes to match whichever branch you switch to."},
      {t:"A backup of the repository on GitHub", why:"Branches exist locally too, with or without GitHub. A backup copy elsewhere is a remote or a clone."},
      {t:"A list of files that someone else is allowed to edit", why:"Branches aren’t about permissions; they’re separate lines of commits."}
    ]},
    {id:"t2u7-l3-x2", type:"order", q:"Ana wants to build a gallery page on a branch and then bring it into `main`. Put her commands in order.", items:[
      {t:"`git switch -c gallery`", why:"Creates the branch and moves onto it, so new commits go there."},
      {t:"`git add gallery.html`", why:"Stages the new page on the gallery branch."},
      {t:"`git commit -m \"Add photo gallery page\"`", why:"Records the work on the gallery branch."},
      {t:"`git switch main`", why:"You merge **into** the branch you’re on, so switch to the receiving branch first."},
      {t:"`git merge gallery`", why:"Brings the gallery commits into main."},
      {t:"`git branch -d gallery`", why:"The work is merged, so the label can go. The commits stay in main’s history."}
    ]},
    {id:"t2u7-l3-x3", type:"mcq", q:"Dmitri makes a branch, commits twice on it, and nobody commits to `main` meanwhile. He switches to `main` and merges. What does Git do?", options:[
      {t:"A fast-forward: it moves the `main` label to the branch’s latest commit, without a new commit", ok:true, why:"Right. With no new commits on `main`, there’s nothing to combine, so `main` just catches up."},
      {t:"It creates a merge commit with two parents", why:"That happens when both branches have new commits. Here only one side moved."},
      {t:"It reports a merge conflict", why:"Conflicts need both sides to have changed the same lines. `main` didn’t change at all."},
      {t:"It copies the files and deletes the branch", why:"Merging doesn’t delete branches; you do that yourself with `git branch -d`."}
    ]},
    {id:"t2u7-l3-x4", type:"spot", q:"This file is in the middle of a merge conflict. Tap every line that must be **deleted** before you commit.", ask:"must be deleted", mono:true, parts:[
      {t:"<h2>Opening hours</h2>", flag:false, why:"Outside the conflict: both branches agree on this line, so keep it."}, "\n",
      {t:"<<<<<<< HEAD", flag:true, why:"A conflict marker. All three markers must go."}, "\n",
      {t:"<p>Monday to Friday, 9:00–17:00</p>", flag:false, why:"One side’s version. It might be kept, combined or deleted, depending on what’s right; it isn’t automatically wrong."}, "\n",
      {t:"=======", flag:true, why:"The divider between the two versions: a marker, so delete it."}, "\n",
      {t:"<p>Monday to Saturday, 9:00–17:00</p>", flag:false, why:"The other side’s version. You decide what to keep; it isn’t automatically wrong either."}, "\n",
      {t:">>>>>>> new-hours", flag:true, why:"The end marker, with the incoming branch’s name. Delete it."}
    ]},
    {id:"t2u7-l3-x5", type:"sort", q:"Will these merges conflict? Both branches started from the same commit.", buckets:["Merges automatically","Merge conflict"], items:[
      {t:"One branch edits `about.html`, the other edits `style.css`", b:0, why:"Different files: Git combines them without asking."},
      {t:"Both edit `index.html`: one changes the heading, the other changes the footer, far apart", b:0, why:"Same file but different lines. Git merges different parts of a file automatically."},
      {t:"Both change the same sentence in `index.html` in different ways", b:1, why:"Same lines changed differently: Git can’t choose, so it asks you."},
      {t:"One branch adds `events.html`; the other changes `index.html`", b:0, why:"A new file and an unrelated edit don’t clash."},
      {t:"One branch deletes `menu.html`; the other edits `menu.html`", b:1, why:"Git can’t know whether you want the file deleted or kept with the edit: a modify/delete conflict."}
    ]},
    {id:"t2u7-l3-x6", type:"mcq", q:"Halfway through resolving three conflicted files, Oluwaseun realises she merged the wrong branch. What’s the cleanest way out?", options:[
      {t:"`git merge --abort`, which returns everything to how it was before the merge", ok:true, why:"Right. Git suggests this in `git status` during a merge. Then she can merge the right branch."},
      {t:"Delete the `.git` folder", why:"That destroys the entire history. Far too drastic: the merge can simply be aborted."},
      {t:"Commit the files with the markers still in, then fix them later", why:"That records a broken merge with marker lines in the files. Abort instead."},
      {t:"`git branch -d main`", why:"Deleting `main` isn’t possible while you’re on it, and wouldn’t undo the merge anyway."}
    ]},
    {id:"t2u7-l3-x7", type:"mcq", q:"Lucía runs `git switch fix-menu` and gets “Your local changes to the following files would be overwritten by checkout”. What does it mean?", options:[
      {t:"She has uncommitted edits that switching would overwrite, so Git stopped to protect them", ok:true, why:"Right. Commit them on the current branch, or undo them with `git restore`, then switch."},
      {t:"The branch `fix-menu` doesn’t exist", why:"Then Git would say it can’t find that branch. This message is about uncommitted changes."},
      {t:"Her repository is damaged", why:"Nothing is damaged. Git refused the switch precisely so nothing is lost."},
      {t:"Git has already overwritten her changes", why:"No: “Aborting” means the switch didn’t happen, and her edits are untouched."}
    ]}
   ],
   apply:{intro:"Make a branch, merge it both ways, then cause a conflict on purpose and resolve it, so the first real one feels familiar.", tasks:[
     {t:"Branch and fast-forward merge", how:{
       win:["In your `garden-club` repository (from Lesson 2), run `git switch -c events-page`.","Create `events.html`, then `git add events.html` and `git commit -m \"Add events page\"`.","Run `git switch main` and check the folder in File Explorer: `events.html` is gone. Run `git switch events-page`: it’s back.","Run `git switch main`, then `git merge events-page` (look for “Fast-forward”), then `git branch -d events-page`."],
       mac:["In your `garden-club` repository, run `git switch -c events-page`.","Create `events.html`, then add and commit it.","Run `git switch main` and look in Finder or with `ls`: `events.html` is gone. Switch back to see it return.","Switch to `main`, run `git merge events-page` (look for “Fast-forward”), then `git branch -d events-page`."],
       chromeos:["In the Linux Terminal, `cd garden-club`, then `git switch -c events-page`.","Create `events.html` (for example with `nano events.html`), then add and commit it.","Run `git switch main` and `ls`: the file is gone. Switch back to see it.","Switch to `main`, run `git merge events-page`, then `git branch -d events-page`."],
       phone:["On github.com in your phone’s browser, open your repository and tap the branch menu (it shows `main`).","Type `events-page` and tap the **Create branch** option that appears (it names `events-page` and says it will start from `main`).","With `events-page` selected, use **Add file → Create new file**, name it `events.html`, add a line, and commit to `events-page`.","Switch the branch menu back to `main`: `events.html` isn’t listed there. (You’ll merge it through a pull request in Lesson 5.)"]
     }, write:"What did Git print when you merged? Was it a fast-forward?"},
     {t:"Cause and resolve a conflict", how:["Run `git switch -c winter-hours`. Change the meeting time sentence in `index.html` and commit.","Run `git switch main`. Change **the same sentence** differently and commit.","Run `git merge winter-hours`. Read the CONFLICT message and run `git status`.","Open `index.html`, find `<<<<<<<`, write the sentence you want, delete all three marker lines, and save.","Run `git add index.html` and `git commit --no-edit`, then `git log --oneline --graph`.","On a phone, read along instead: do Try exercises 4 and 5 again and explain each marker in your own words."], write:"Copy the conflict as Git showed it, then the line you chose."},
     {t:"Practise backing out", how:["Make another conflict the same way (two branches, same line).","Start the merge, see the conflict, then run `git merge --abort`.","Run `git status`: it should say the working tree is clean, as if nothing happened."], write:"When might `git merge --abort` be the right choice?"}
   ], proof:"A `git log --oneline --graph` showing a merge commit, notes on a conflict you resolved (the markers and your choice), and a successful `git merge --abort`."},
   read:[
     {book:"progit", where:"Chapter 3, “Git Branching”: 3.1 Branches in a Nutshell, 3.2 Basic Branching and Merging (including “Basic Merge Conflicts”), 3.3 Branch Management", note:"Pro Git uses `git checkout -b`; `git switch -c` does the same job."},
     {book:"swc", where:"Version Control with Git → “Conflicts”"},
     {book:"missing", where:"“Version Control and Git” → “Git command-line interface” → “Branching and merging”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u7-l4", title:"Working with GitHub: clone, push and pull", minutes:60,
   hook:{q:"Kenji runs `git push` for the first time. Git asks for his GitHub username and then a password. He types his GitHub account password. What happens?", options:["It works: that’s what the prompt is for","It fails: GitHub no longer accepts account passwords for Git on the command line; it needs a token or another sign-in method","It works, but only for public repositories","GitHub locks his account for a day"], answer:1, reveal:"It fails. GitHub removed password sign-in for Git operations in 2021, so the “password” Git asks for must be a personal access token, or, more simply, a credential helper or the GitHub CLI signs you in through the browser and Git never asks. This lesson connects your local repository to GitHub, signs you in safely, and teaches the everyday clone, pull and push loop, including updating your Pages site from your own computer."},
   goals:[
     "Explain what a remote is, and what `clone`, `push`, `pull` and `fetch` each copy",
     "Sign in to GitHub from Git safely, using a credential manager, the GitHub CLI, a token or SSH, and never your password",
     "Put an existing local repository on GitHub, and clone an existing one",
     "Follow the daily pull, commit, push loop, and read a rejected push without panic",
     "Edit on GitHub without installing anything (the web editor, github.dev) and update a GitHub Pages site by pushing"
   ],
   learn:[
    {h:"Remotes: the same repository, somewhere else", body:[
      {lead:"So far your repository has lived only on your computer. A remote is another copy of it, usually on a hosting service, that you can send commits to and get commits from."},
      "A **[[remote|remote]]** is a named address of another copy of the repository. The usual name for the main one is **`origin`**. It isn’t special; it’s just the name Git gives the place you cloned from, and the name most guides use.",
      {fig:'<svg viewBox="0 0 340 346"><defs><marker id="t2u7a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-gold" x="30" y="10" width="280" height="72" rx="8" stroke-width="2"/><text x="170" y="38" text-anchor="middle">GitHub: garden-club</text><text class="s" x="170" y="58" text-anchor="middle">the remote, called origin</text><text class="s" x="170" y="74" text-anchor="middle">commits + history, online</text><path class="d-ink" d="M55,200 L55,90" stroke-width="2" marker-end="url(#t2u7a5)"/><text class="mono" x="62" y="140">push</text><path class="d-ink" d="M115,88 L115,198" stroke-width="2" marker-end="url(#t2u7a5)"/><text class="mono" x="122" y="160">pull</text><path class="d-ink" d="M225,200 L225,90" stroke-width="2" marker-end="url(#t2u7a5)"/><text class="mono" x="232" y="140">push</text><path class="d-ink" d="M285,88 L285,198" stroke-width="2" marker-end="url(#t2u7a5)"/><text class="mono" x="292" y="160">pull</text><rect class="d-lup" x="10" y="204" width="150" height="72" rx="8" stroke-width="2"/><text x="85" y="232" text-anchor="middle">Amara’s laptop</text><text class="s" x="85" y="252" text-anchor="middle">full copy</text><text class="s" x="85" y="268" text-anchor="middle">+ all history</text><rect class="d-lup" x="180" y="204" width="150" height="72" rx="8" stroke-width="2"/><text x="255" y="232" text-anchor="middle">Kenji’s laptop</text><text class="s" x="255" y="252" text-anchor="middle">full copy</text><text class="s" x="255" y="268" text-anchor="middle">+ all history</text><text class="s" x="10" y="306">push sends commits the remote doesn’t have;</text><text class="s" x="10" y="322">pull gets commits you don’t have and merges them.</text><text class="s" x="10" y="338">git clone makes the first copy, with origin set.</text></svg>', alt:"A GitHub repository called garden-club, the remote named origin, at the top. Below it, Amara’s laptop and Kenji’s laptop, each with a full copy and all history. From each laptop, an arrow labelled push goes up to GitHub and an arrow labelled pull comes down. Notes: push sends commits the remote doesn’t have; pull gets commits you don’t have and merges them; git clone makes the first copy, with origin set.", cap:"Everyone has a complete repository. GitHub is the shared meeting point, not the only copy."},
      {table:[
        ["Command","What it copies"],
        ["`git clone URL`","Downloads a whole repository, with its history, into a new folder, and sets `origin` to that URL"],
        ["`git push`","Sends your new commits on the current branch to the remote"],
        ["`git fetch`","Downloads the remote’s new commits without changing your files"],
        ["`git pull`","A fetch followed by a merge into your current branch"]
      ]},
      {key:"Nothing moves between your computer and GitHub until you [[push|push]] or [[pull|pull]]. Commits made on your laptop stay on your laptop until you push them."}
    ]},
    {h:"Proving it’s you, safely", body:[
      "Anyone can download a public repository, but only people with permission can push to it, so Git must sign you in. **Your GitHub password doesn’t work for this**: GitHub stopped accepting account passwords for Git in 2021. Use one of these instead:",
      {table:[
        ["Method","How it works","Good for"],
        ["Git Credential Manager","Opens a browser window to sign in once, then stores a credential securely. Included with Git for Windows; installable on Mac and Linux","Most beginners on Windows"],
        ["GitHub CLI: `gh auth login`","GitHub’s own command-line tool signs you in through the browser and can set Git up to use it","Mac, Linux and ChromeOS; anyone who likes `gh`"],
        ["Personal access token","A long random string you create on GitHub and paste when Git asks for a “password”","When the others aren’t available"],
        ["SSH key","A key pair: the private half stays on your computer, the public half goes in your GitHub settings. Uses `git@github.com:` addresses","People comfortable with keys; also used by Software Carpentry"]
      ]},
      {warn:"Treat [[personal-access-token|tokens]] and private [[ssh-key|SSH keys]] like passwords. Never paste them into a repository, a chat, a forum post or an AI tool. If a token might have leaked, delete it on GitHub (Settings → Developer settings → Personal access tokens) and make a new one. Give tokens an expiry date and only the access they need; GitHub recommends **fine-grained** tokens where possible."},
      "The GitHub CLI route looks like this. Install `gh` from cli.github.com (or your package manager), then:",
      {code:"gh auth login", lang:"sh", label:"Command line", cap:"Answer its questions: **GitHub.com**, **HTTPS**, yes to authenticating Git with your GitHub credentials, and **Login with a web browser** (the order can vary between versions). It shows a one-time code to type into the page it opens."},
      "If you prefer SSH, GitHub’s guide creates a key with:",
      {code:'ssh-keygen -t ed25519 -C "you@example.com"', lang:"sh", label:"Command line", cap:"The text after `-C` is just a label for the key; GitHub’s guide uses your email (your noreply address is fine). Press Enter to accept the default file, and choose a passphrase. Then add the **public** key (the file ending in `.pub`) under GitHub Settings → SSH and GPG keys. Never share the file without `.pub`."},
      {tip:"The phishing advice from Digital Foundations, Unit 3 (“Staying safe”) applies here too: only type your GitHub details into github.com itself, and be suspicious of any message asking you for a token."}
    ]},
    {h:"Put your local repository on GitHub", body:[
      "Amara has been committing locally. To put `garden-club` on GitHub:",
      {ol:[
        "On github.com, select **+** → **New repository**. Name it `garden-club`. **Don’t** add a README, licence or `.gitignore` this time: the repository must be empty, because the history is coming from her computer.",
        "Select **Create repository**. GitHub shows a page of commands under “…or push an existing repository from the command line”, with her own address filled in.",
        "In her `garden-club` folder, she runs them:"
      ]},
      {code:"git remote add origin https://github.com/amara-m/garden-club.git\ngit branch -M main\ngit push -u origin main", lang:"sh", label:"Command line", cap:"Use the address GitHub shows you. `amara-m` is a made-up username."},
      {list:[
        "`git remote add origin URL` records the address under the name `origin`. `git remote -v` lists your remotes.",
        "`git branch -M main` renames the current branch to `main` (harmless if it already is).",
        "`git push -u origin main` sends `main` and, with `-u`, remembers that this branch goes with `origin/main`. After this, plain `git push` and `git pull` are enough."
      ]},
      {code:"$ git push -u origin main\n…\nTo https://github.com/amara-m/garden-club.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'.", lang:"txt", label:"Output", cap:"Abridged: Git also prints progress lines (counting and writing objects), which vary."},
      "Reload the repository page on GitHub: her files and every commit, with her messages, are there."
    ]},
    {h:"Clone, then the daily loop", body:[
      "Kenji joins the project. On the repository page he selects the green **Code** button, copies the HTTPS address, and [[clone|clones]] the repository:",
      {code:"git clone https://github.com/amara-m/garden-club.git\ncd garden-club", lang:"sh", label:"Command line", cap:"Clone into a normal folder, not inside another repository."},
      {code:"$ git clone https://github.com/amara-m/garden-club.git\nCloning into 'garden-club'...\n…", lang:"txt", label:"Output"},
      "He now has the full history. From here, every working session follows the same loop:",
      {ol:[
        "**`git pull`** first, to get everyone else’s commits.",
        "Edit, `git add`, `git commit`, as in Lesson 2. Commit as often as you like; it’s all local.",
        "**`git push`** to share your commits."
      ]},
      {h:"When a push is rejected"},
      "Sooner or later you’ll see this. Kenji pushed a commit; Amara, who hadn’t pulled, tried to push hers:",
      {code:"$ git push\nTo https://github.com/amara-m/garden-club.git\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'https://github.com/amara-m/garden-club.git'\nhint: Updates were rejected because the remote contains work that you do not\nhint: have locally. This is usually caused by another repository pushing to\nhint: the same ref. If you want to integrate the remote changes, use\nhint: 'git pull' before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.", lang:"txt", label:"Output", cap:"Tested with a local stand-in for GitHub; the address has been replaced. The exact hint wording varies a little between Git versions."},
      "Nothing is wrong. GitHub refuses to let her push overwrite Kenji’s commit. The fix is in the hint: `git pull`, then `git push`.",
      "On a fresh Git setup, that pull may stop with “You have divergent branches and need to specify how to reconcile them”. Both of them committed, so Git asks how you want to combine the histories. The simplest choice for beginners is to merge, as in Lesson 3. Set it once:",
      {code:"git config --global pull.rebase false", lang:"sh", label:"Command line"},
      {code:"$ git pull\nMerge made by the 'ort' strategy.\n about.html | 1 +\n 1 file changed, 1 insertion(+)\n$ git push\n   1694fc8..0b4b579  main -> main", lang:"txt", label:"Output", cap:"Abridged. If both changed the same lines, the pull stops with a merge conflict, and you resolve it exactly as in Lesson 3."},
      {tip:"Because this pull makes a merge commit, Git may open your text editor with a ready-made message such as “Merge branch 'main' of …”. Just save and close it to finish. If it’s Vim, press [[kbd:Esc]], type `:wq` and press [[kbd:Enter]]."},
      {warn:"Online answers sometimes suggest `git push --force` to get past a rejection. **Don’t**, on any branch other people use: it replaces the remote’s history with yours and **deletes their commits from it**. Pull and merge instead."},
      "`git status` tells you how your branch compares with the remote, as of your last fetch or pull: “Your branch is ahead of 'origin/main' by 2 commits” means you have two commits to push."
    ]},
    {h:"Editing without installing anything", body:[
      "GitHub offers two editors in the browser, both of which make real commits:",
      {list:[
        "**The file editor.** Open a file, select the **pencil**, edit, then **Commit changes…**. The dialog lets you commit directly to the current branch or create a new branch for the commit. It works in a phone’s browser.",
        "**github.dev**, a version of the VS Code editor that runs in the browser. On a repository page, press the [[kbd:.]] key, or change `github.com` to `github.dev` in the address. You can edit several files and commit them together from its **Source Control** view. It needs a keyboard and a large screen, so it suits a computer or tablet better than a phone. Your work is held in the browser until you commit, so commit regularly."
      ]},
      "Neither runs Git commands for you to type, and neither can run your site’s code; for that you still need a computer. On a phone, the **GitHub Mobile** app is best for notifications, issues and reviewing pull requests (Lesson 5), and the website in the browser for editing files.",
      {tip:"**GitHub Desktop** (Windows and macOS) does clone, pull and push with buttons: **File → Clone Repository**, then the button in the top bar that changes between **Fetch origin**, **Pull origin** and **Push origin** depending on what’s needed."}
    ]},
    {h:"Pushing to GitHub Pages", body:[
      "Your Unit 5 site already lives in a repository. Now you can work on it from your own computer:",
      {ol:[
        "`git clone` the site’s repository.",
        "Open `index.html` in a browser straight from the folder to preview your changes before anyone else sees them.",
        "Commit, then `git push`.",
        "[[github-pages|GitHub Pages]] notices the new commit on the publishing branch and deploys it, just like an upload on the website. Watch the **Actions** tab for the green tick."
      ]},
      "This is the real advantage: you can make ten commits, preview each, and push only when the site is right. And if a push breaks something, `git revert` the bad commit and push again; Pages publishes the fixed version.",
      {key:"With Git, publishing is “commit, push, wait for the green tick”. The live site always matches the latest commit on the publishing branch."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Committing puts my work on GitHub.”** Commits stay on your computer until you push.",
        "**“`origin` is a special GitHub word.”** It’s just the usual name for the main remote.",
        "**“Git wants my GitHub password.”** It needs a token or a sign-in through a credential manager, the GitHub CLI or SSH.",
        "**“A rejected push means I broke something.”** It means someone else pushed first. Pull, then push.",
        "**“`--force` fixes rejected pushes.”** It can delete other people’s work from the shared branch."
      ]}
    ]}
   ],
   try:[
    {id:"t2u7-l4-x1", type:"match", q:"Match each command with what it does.", pairs:[
      ["`git clone URL`","Copies a whole repository and its history into a new folder","It also sets up `origin` to point at the URL."],
      ["`git push`","Sends your new local commits to the remote","Only commits the remote doesn’t have yet are sent."],
      ["`git fetch`","Downloads new commits from the remote without changing your files","Safe at any time; your branch and working tree stay as they are."],
      ["`git pull`","Downloads new commits and merges them into your current branch","A fetch plus a merge."]
    ]},
    {id:"t2u7-l4-x2", type:"mcq", q:"Fatima makes three commits on her laptop at a café with no Wi-Fi. Her colleague checks the GitHub repository. What does the colleague see?", options:[
      {t:"None of the three commits: they exist only on Fatima’s laptop until she pushes", ok:true, why:"Right. Committing is local. Pushing is the step that sends commits to GitHub."},
      {t:"All three, because Git syncs automatically", why:"Git never syncs on its own. Nothing moves until a push or a pull."},
      {t:"The commits, but not their messages", why:"Nothing has reached GitHub yet, messages or otherwise."},
      {t:"An error saying Fatima is offline", why:"GitHub doesn’t know about her local repository at all until she pushes."}
    ]},
    {id:"t2u7-l4-x3", type:"sort", q:"Safe ways to let Git sign in to GitHub, or not?", buckets:["Safe","Not safe"], items:[
      {t:"`gh auth login` and sign in through the browser", b:0, why:"GitHub’s own CLI signs you in on github.com and stores the credential securely."},
      {t:"Git Credential Manager’s browser sign-in", b:0, why:"Included with Git for Windows; you sign in on GitHub itself and it stores the credential securely."},
      {t:"Paste a token into a file in the repository so you don’t forget it", b:1, why:"Anything committed can end up public, and the history keeps it. Tokens must never go in a repository."},
      {t:"An SSH key whose public half is added to your GitHub settings", b:0, why:"Only the public key is shared; the private key stays on your computer."},
      {t:"Send your token to a friend in a chat so they can push for you", b:1, why:"A token acts as you. Add the friend as a collaborator on the repository instead."},
      {t:"A fine-grained token with an expiry date, kept in a password manager", b:0, why:"Limited access, expiring, and stored safely: GitHub’s recommended kind of token."}
    ]},
    {id:"t2u7-l4-x4", type:"order", q:"Put the steps to publish an existing local repository on GitHub in order.", items:[
      {t:"Create an empty repository on GitHub (no README)", why:"The history is coming from your computer, so the GitHub side should start empty."},
      {t:"Copy the repository’s address from the page GitHub shows next", why:"The address only exists once the repository has been created."},
      {t:"`git remote add origin https://github.com/…/garden-club.git`", why:"Tells your local repository where the remote is, using the address you copied."},
      {t:"`git push -u origin main`", why:"Needs `origin` to exist. Sends the commits and links `main` to `origin/main` for future pushes and pulls."},
      {t:"Reload the repository page and check the commits arrived", why:"Confirms the push worked."}
    ]},
    {id:"t2u7-l4-x5", type:"number", q:"Kenji’s `main` matched GitHub this morning. Since then he has made 4 commits and pushed after the first 2. He hasn’t pulled, and nobody else has pushed. `git status` says his branch is ahead of `origin/main` by how many commits?", answer:2, tol:0, unit:"commits", why:"He pushed after 2 commits, so GitHub has those. The 2 commits made after the push exist only on his laptop: ahead by 4 − 2 = 2.", wrongs:[
      {v:4, why:"That counts every commit today, but the first 2 were already pushed, so GitHub has them."},
      {v:0, why:"Only true if he had pushed after his last commit. The last 2 commits haven’t been pushed yet."},
      {v:6, why:"Pushing doesn’t add commits; it copies the existing ones to GitHub. He made 4 in total."}
    ]},
    {id:"t2u7-l4-x6", type:"mcq", q:"Priya’s `git push` is rejected: “Updates were rejected because the remote contains work that you do not have locally.” What should she do?", options:[
      {t:"`git pull`, resolve any conflicts, then `git push` again", ok:true, why:"Right. Someone pushed first. Pulling brings their commits in and merges them with hers; then her push goes through."},
      {t:"`git push --force`", why:"That would replace the remote branch with her history and delete the other person’s commits from it."},
      {t:"Delete her local folder and clone again", why:"She’d lose her unpushed commits. Pulling keeps everyone’s work."},
      {t:"Wait an hour and push again", why:"The rejection isn’t temporary. Until she has the other commits locally, it will keep happening."}
    ]},
    {id:"t2u7-l4-x7", type:"mcq", q:"Tomás pushes a commit to his GitHub Pages repository’s `main` branch, which is the publishing source. What happens next?", options:[
      {t:"Pages starts a new deploy; when the run in the Actions tab gets a green tick, the live site shows the new version", ok:true, why:"Right. A push is a new commit on the publishing branch, exactly like a commit made on the website."},
      {t:"Nothing until he presses Publish in Settings → Pages", why:"Once Pages is set up, every new commit on the publishing branch deploys automatically."},
      {t:"The site updates instantly, with no deploy", why:"There is a deploy run, which usually takes a few minutes."},
      {t:"Only files edited on the website are published; pushed files are ignored", why:"Pages doesn’t care how a commit was made. Pushed commits deploy the same way."}
    ]}
   ],
   apply:{intro:"Sign Git in to GitHub safely, publish your practice repository, then work on your real Unit 5 site from your own computer.", tasks:[
     {t:"Sign Git in to GitHub", how:{
       win:["If you installed Git for Windows, Git Credential Manager is already there: the first `git push` will open a browser window to sign in. Nothing to do now.","Optional: install the GitHub CLI (from cli.github.com, or `winget install --id GitHub.cli --source winget`), then run `gh auth login` and follow the prompts.","Also run `git config --global pull.rebase false` so pulls merge."],
       mac:["Install the GitHub CLI: from cli.github.com, or `brew install gh` if you use Homebrew.","Run `gh auth login`. Choose **GitHub.com**, **HTTPS**, say yes to authenticating Git with your GitHub credentials, and **Login with a web browser** (the questions may come in a different order).","Copy the one-time code it shows, press [[kbd:Return]], and paste the code into the page that opens.","Run `gh auth status` to check, and `git config --global pull.rebase false`."],
       chromeos:["In the Linux Terminal, install the GitHub CLI by following the Debian instructions linked from cli.github.com (they add GitHub’s package source, then `sudo apt install gh`).","Run `gh auth login`. Choose **GitHub.com**, **HTTPS**, yes to authenticating Git, and **Login with a web browser**.","Copy the one-time code. If the browser doesn’t open by itself, open the address it shows in Chrome and paste the code.","Run `git config --global pull.rebase false`."],
       phone:["On the phone you don’t need to sign Git in: the website and the GitHub app use your normal sign-in.","Open github.com → profile picture menu → **Settings** → **Password and authentication**, and check two-factor authentication is on.","Read Lesson 4’s warning box again: if you ever make a token, keep it in a password manager."]
     }, write:"Which sign-in method did you choose, and why?"},
     {t:"Publish your practice repository", how:["On github.com, create a new **empty** repository called `garden-club` (no README, no licence, no `.gitignore`).","In your local `garden-club` folder, run the three commands GitHub shows under “push an existing repository”: `git remote add origin …`, `git branch -M main`, `git push -u origin main`.","Sign in if asked (a browser window, or your token as the “password”).","Reload the page on GitHub and open the commit list: your commit messages are there.","On a phone: open the repository page in GitHub Mobile or the browser and read the commit history you pushed (or, if you have no computer, the history of your Unit 5 site)."], write:"Paste the last lines of your push output."},
     {t:"Update your Pages site from your computer", how:{
       win:["On your Unit 5 site’s repository page, select **Code**, copy the HTTPS address, then run `git clone` with it in a folder such as Documents.","Run `cd` into the new folder. Change something small in `index.html` and open the file in your browser to preview it.","Commit with a clear message, then `git push`.","Open the repository’s **Actions** tab, wait for the green tick, then reload your live site."],
       mac:["Copy your Unit 5 site’s HTTPS address from the **Code** button and run `git clone` with it.","`cd` into the folder, make a small change, and preview it by double-clicking `index.html` in Finder.","Commit, then `git push`.","Watch the **Actions** tab for the green tick, then reload your site."],
       chromeos:["Copy your Unit 5 site’s HTTPS address from the **Code** button and run `git clone` with it in the Linux Terminal.","`cd` into the folder and edit `index.html`. To preview, open the Files app, find it under **Linux files**, and open it with Chrome.","Commit, then `git push`.","Watch the **Actions** tab for the green tick."],
       phone:["Open your Unit 5 site’s repository in the browser and open `index.html`.","Tap the **pencil**, make a small change, then **Commit changes…** with a clear message, committing directly to `main`.","Open the **Actions** tab and wait for the green tick, then reload your live site.","This is the same commit-then-deploy cycle a push triggers from a computer."]
     }, write:"What did you change, and how long did the deploy take?"}
   ], proof:"Git signed in to GitHub without your password, a practice repository pushed with its history visible on GitHub, and your Pages site updated by a commit you made (pushed from a computer, or made on the website on a phone)."},
   read:[
     {book:"progit", where:"Chapter 2, “Git Basics”: 2.5 Working with Remotes; Chapter 3: 3.5 Remote Branches; Chapter 6, “GitHub”: 6.1 Account Setup and Configuration"},
     {book:"swc", where:"Version Control with Git → “Remotes in GitHub” and “Collaborating”", note:"This lesson uses SSH keys for sign-in; HTTPS with a credential manager or `gh` is an equally good choice."},
     {book:"ghdocs", where:"Get started → Git basics → About remote repositories; Caching your GitHub credentials in Git"},
     {book:"missing", where:"“Version Control and Git” → “Git command-line interface” → “Remotes”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u7-l5", title:"Working with others: pull requests, issues and secrets", minutes:60,
   hook:{q:"Ana accidentally commits a file containing a password for her email newsletter service and pushes it to a public repository. Two minutes later she deletes the file, commits and pushes again. What should she do now?", options:["Nothing: the file is deleted, so the password is safe","Change the password at the service straight away; it’s still in the history and may already have been copied","Make the repository private; that removes the password from view","Delete the last commit; that erases the password everywhere"], answer:1, reveal:"Change the password straight away. Deleting the file only removes it from the latest commit: the earlier commit, with the password, is still in the history, and automated tools scan public repositories for secrets within minutes. GitHub’s own guidance says to revoke or rotate a leaked secret first; cleaning the history is optional and harder. This lesson covers how people work together on GitHub (forks, pull requests, reviews, issues) and how to keep secrets and clutter out of a repository."},
   goals:[
     "Explain forks, and how a pull request proposes changes from a branch or a fork",
     "Open, review and merge a pull request, and write helpful review comments",
     "Use issues to report bugs and plan work, and link them to pull requests",
     "Keep files out of Git with `.gitignore`, and never commit secrets; respond correctly if one leaks",
     "Add a licence and a README, and follow good everyday habits"
   ],
   learn:[
    {h:"Forks: your own copy of someone else’s project", body:[
      {lead:"You can push to your own repositories and to ones where the owner has made you a collaborator. For everything else, there’s a fork."},
      "A **[[fork|fork]]** is your own copy of another person’s repository, made on GitHub, under your account. You can push to your fork freely. When you have something to offer the original project, you propose it with a **pull request**.",
      {table:[
        ["Term","Where it lives","Used for"],
        ["Branch","Inside one repository","Separate lines of work by people who can push there"],
        ["Clone","On your computer","Working locally on any repository you can read"],
        ["Fork","On GitHub, under your account","Contributing to a project you can’t push to"]
      ]},
      {fig:'<svg viewBox="0 0 340 392"><defs><marker id="t2u7a6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-gold" x="10" y="10" width="200" height="64" rx="8" stroke-width="2"/><text x="110" y="36" text-anchor="middle">Original repository</text><text class="s" x="110" y="58" text-anchor="middle">garden-club/recipes</text><path class="d-ink" d="M60,78 L60,146" stroke-width="2" marker-end="url(#t2u7a6)"/><text x="70" y="108">Fork</text><text class="s" x="70" y="126">on GitHub</text><rect class="d-sage" x="10" y="150" width="200" height="64" rx="8" stroke-width="2"/><text x="110" y="176" text-anchor="middle">Your fork</text><text class="s" x="110" y="198" text-anchor="middle">your-name/recipes</text><path class="d-ink" d="M60,218 L60,286" stroke-width="2" marker-end="url(#t2u7a6)"/><text class="mono" x="70" y="256">git clone</text><rect class="d-lup" x="10" y="290" width="200" height="64" rx="8" stroke-width="2"/><text x="110" y="316" text-anchor="middle">Your computer</text><text class="s" x="110" y="338" text-anchor="middle">branch, edit, commit</text><path class="d-ink" d="M228,320 L228,186 L214,186" stroke-width="2" marker-end="url(#t2u7a6)"/><text class="mono" x="236" y="258">git push</text><path class="d-ink" d="M228,180 L228,42 L214,42" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#t2u7a6)"/><text x="236" y="106">pull</text><text x="236" y="124">request</text><text class="s" x="10" y="380">The owner reviews, then merges into the original.</text></svg>', alt:"A flow. The original repository, garden-club/recipes, is forked on GitHub to make your fork, your-name/recipes. Your fork is cloned with git clone to your computer, where you branch, edit and commit. An arrow labelled git push goes from your computer back up to your fork. From your fork, an arrow labelled pull request goes up to the original repository. Note: the owner reviews, then merges into the original.", cap:"Fork on GitHub, clone, commit on a branch, push to your fork, then open a pull request to the original."},
      "On GitHub, select **Fork** at the top of a repository page, then **Create fork**. You don’t always have to do it yourself: if you select the pencil on a file in a repository you can’t push to, GitHub offers to fork it for you and turns your edit into a pull request."
    ]},
    {h:"Pull requests", body:[
      "A **[[pull-request|pull request]]** (PR) is a proposal: “please merge the commits on this branch into that branch”. It’s a page on GitHub where the changes can be seen, discussed, improved and finally merged. Despite the name, you don’t pull anything; you ask the owner to pull your work in. (GitLab calls the same thing a merge request.)",
      "Pull requests aren’t only for strangers. Many teams, and careful people working alone, make every change on a branch and merge it through a PR, so each change gets a second look and a record of why it was made.",
      {h:"Opening one"},
      {ol:[
        "Push your branch: `git push -u origin fix-menu-link` (to your fork, or to the shared repository if you have access).",
        "On GitHub, a banner offers **Compare & pull request**. (Or open the **Pull requests** tab → **New pull request** and choose the branches.)",
        "Check the **base** (where it should go, usually `main`) and **compare** (your branch).",
        "Write a clear title and description: what changed, why, and how to check it. If it fixes an issue, write `Fixes #12`; merging the PR into the default branch (usually `main`) will then close issue 12.",
        "Select **Create pull request**, or **Create draft pull request** if it isn’t ready for review yet."
      ]},
      "The PR page has tabs: **Conversation** (description and comments), **Commits**, and **Files changed** (the diff). New commits pushed to the same branch appear in the PR automatically, so you fix review comments by simply committing and pushing again.",
      {h:"Merging one"},
      "When it’s approved, someone with write access selects **Merge pull request**. GitHub offers three ways, which the repository’s owner can limit:",
      {list:[
        "**Create a merge commit**: keeps every commit and adds a merge commit (like Lesson 3).",
        "**Squash and merge**: combines the PR’s commits into one commit on `main`.",
        "**Rebase and merge**: replays the commits onto `main` without a merge commit."
      ]},
      "Afterwards GitHub offers **Delete branch**. Then, on your computer, `git switch main` and `git pull` to get the merged result."
    ]},
    {h:"Reviews: kind and useful", body:[
      "On the **Files changed** tab, a reviewer can comment on any line, then finish the review (the button is **Submit review**, or **Review changes** on some versions of the page) with one of three choices: **Comment** (general feedback), **Approve**, or **Request changes**. Reviewers can even suggest an exact replacement line that the author applies with one click.",
      "Good reviews are specific and kind. Compare:",
      {table:[
        ["Unhelpful","Helpful"],
        ["“This is wrong.”","“This link goes to `About.html`, but the file is `about.html`, so it will 404 on Pages.”"],
        ["“Why would you do it like this??”","“Could we use a list here? It would read better with a screen reader.”"],
        ["(silence, then merge)","“Looks good. I checked it on my phone too. Approving.”"]
      ]},
      "When you receive a review, remember it’s about the change, not about you. Reply to each comment, push fixes, and say thank you.",
      {tip:"GitHub Mobile is genuinely useful here: you can read pull requests, comment, and review from a phone."}
    ]},
    {h:"Issues: bugs, ideas and plans", body:[
      "An **[[github-issue|issue]]** is a numbered discussion for one problem or idea: a bug report, a feature request, or a task. Open the **Issues** tab and select **New issue**. Each gets a number (`#12`) that you can mention anywhere on GitHub, and issues can be assigned to people and labelled (`bug`, `good first issue`).",
      "A useful bug report says:",
      {list:["What you did (steps someone else can follow).","What you expected to happen.","What happened instead, with the exact error message or a screenshot.","Your device and browser, if it might matter."]},
      {ex:"Title: Events page link gives 404 on phones\n\nSteps: open the home page on a phone, tap “Events”.\nExpected: the events page.\nActual: “404 File not found”.\nNotes: the link is href=\"Events.html\" but the file\nis events.html.", label:"A clear issue", mono:true},
      "Before opening an issue on someone else’s project, search the existing issues and read the project’s `CONTRIBUTING` file if it has one."
    ]},
    {h:"Keeping things out: .gitignore", body:[
      "Some files should never be committed: operating-system clutter (`.DS_Store` on Mac, `Thumbs.db` on Windows), drafts, large exports, and above all **secrets**. A **[[gitignore|`.gitignore`]]** file at the top of the repository lists patterns for Git to ignore:",
      {code:"# Operating system clutter\n.DS_Store\nThumbs.db\n\n# Secrets: never commit these\n.env\n\n# Work in progress\ndrafts/", lang:"txt", label:".gitignore", cap:"`#` starts a comment. A name matches that file anywhere; a trailing `/` means a folder; `*.log` would match every file ending in `.log`."},
      "Before and after creating it, in a folder containing all those files:",
      {code:"$ git status --short\n?? .DS_Store\n?? .env\n?? Thumbs.db\n?? drafts/\n$ git status --short\n?? .gitignore", lang:"txt", label:"Output", cap:"`??` means untracked. After adding `.gitignore`, only `.gitignore` itself shows; commit it like any other file."},
      "To check why a file is ignored, run `git check-ignore -v .env`; it prints the line of `.gitignore` responsible.",
      {warn:"`.gitignore` only affects files Git isn’t already tracking. If you committed a file before ignoring it, Git keeps tracking it. Stop tracking it (without deleting your copy) with `git rm --cached config.txt`, then commit. Its old versions stay in the history."},
      {tip:"When you create a repository on GitHub, you can pick a ready-made `.gitignore` template for your language or tools."}
    ]},
    {h:"Secrets: never commit them, and what to do if you did", body:[
      "A **[[secret-key|secret]]** is anything that works like a password: passwords, API keys, access tokens, private SSH keys, database connection strings. In a public repository, **anyone** can read it, including bots that scan new commits for exactly this. Even in a private repository, everyone with access, and every clone, has it.",
      {list:[
        "Keep secrets out of code. Put them in a file such as `.env`, list it in `.gitignore`, and commit an example file (`.env.example`) with placeholder values instead.",
        "Run `git status` and `git diff --staged` before every commit, and read what you’re about to commit.",
        "A static site such as a GitHub Pages site can’t keep any secret: everything it sends to the browser is public. If a service gives you a secret key, it doesn’t belong in a Pages site at all."
      ]},
      "GitHub may block a push that contains a recognised kind of secret (**push protection**). It’s a helpful safety net, not a guarantee: it only knows certain formats.",
      {h:"If a secret was committed"},
      {ol:[
        "**Revoke or rotate it first, immediately**: change the password, or delete the key or token at the service and make a new one. GitHub’s documentation is clear that this comes first, and that it may be all you need to do.",
        "Check the service for any use you don’t recognise.",
        "Remove it from your files and commit. If it was in its own file, such as `.env`, run `git rm --cached .env`, add the file to `.gitignore`, and commit (the old commits still contain it, which is why step 1 comes first).",
        "Only if needed, clean the history with a tool such as `git-filter-repo`, following GitHub’s guide “Removing sensitive data from a repository”. It rewrites history, needs a force push (one of the rare justified ones, done with everyone’s agreement) and everyone to re-clone, and copies in forks or clones made meanwhile aren’t affected."
      ]},
      {key:"Once a secret has been pushed, assume it’s been seen. Changing it is the fix; deleting it from the files is just tidying up."}
    ]},
    {h:"Licences, READMEs and good habits", body:[
      "**Licences, briefly.** A public repository on GitHub can be viewed and forked by anyone, but without a **[[software-licence|licence]]**, normal copyright applies: others may not reuse your code. If you want people to reuse it, add a `LICENSE` file. choosealicense.com (made by GitHub) explains common choices: **MIT** (very permissive), **Apache 2.0** (permissive, with patent terms), **GPL 3.0** (anyone who shares copies or changed versions must share them under the GPL too). For writing and images, Creative Commons licences are common. On GitHub, **Add file → Create new file**, type `LICENSE`, and a **Choose a license template** button appears. This isn’t legal advice; projects for an employer or school may have their own rules.",
      "**A README** (`README.md`) is the front page of a repository: what the project is, how to use it, and how to help. GitHub shows it below the file list.",
      {h:"Good habits"},
      {list:[
        "`git status` before and after everything. It’s free, and it explains itself.",
        "Pull before you start; commit small, focused changes with clear messages; push when a piece of work is done.",
        "Make a branch for anything you’re not sure about. Keep `main` working.",
        "Read your diff before committing. Never commit secrets.",
        "Prefer `git revert` to rewriting shared history. Never `push --force` to a shared branch.",
        "Turn on two-factor authentication on GitHub, and keep tokens in a password manager.",
        "Your computer and GitHub are two copies, but not a full backup plan: keep other copies of anything precious (Unit 5, Lesson 5)."
      ]}
    ]}
   ],
   try:[
    {id:"t2u7-l5-x1", type:"mcq", q:"Sione wants to fix a typo in a community recipe project on GitHub. He isn’t a collaborator. What’s the usual route?", options:[
      {t:"Fork it, commit the fix on a branch in his fork, then open a pull request to the original", ok:true, why:"Right. A fork gives him a copy he can push to, and the pull request asks the owners to merge his change."},
      {t:"Clone it and `git push` directly to the original", why:"Without write access his push would be rejected. That’s exactly what forks and pull requests are for."},
      {t:"Email the owners his password so they can add him", why:"Never share passwords. Owners can invite collaborators by username if they want to."},
      {t:"Open an issue containing the whole corrected file", why:"An issue can report the typo, but a pull request is how a change is proposed and merged."}
    ]},
    {id:"t2u7-l5-x2", type:"order", q:"Put the life of a pull request in order.", items:[
      {t:"Create a branch and commit the change", why:"The work happens on its own branch so `main` stays untouched."},
      {t:"Push the branch to GitHub", why:"GitHub can only show a pull request for commits it has."},
      {t:"Open a pull request with a clear title and description", why:"This is the proposal that reviewers will read."},
      {t:"A reviewer requests changes; push more commits to the same branch", why:"New commits on the branch appear in the PR automatically."},
      {t:"The reviewer approves and the PR is merged", why:"Merging brings the branch’s commits into `main`."},
      {t:"Delete the branch, then `git switch main` and `git pull` locally", why:"Tidy up, and get the merged result onto your computer."}
    ]},
    {id:"t2u7-l5-x3", type:"sort", q:"Should it be committed, or listed in `.gitignore`?", buckets:["Commit it","Ignore it"], items:[
      {t:"`index.html`", b:0, why:"Your site’s content: exactly what the repository is for."},
      {t:"`.env` holding an API key", b:1, why:"Secrets never go in a repository. Ignore it, and commit a `.env.example` with placeholders instead."},
      {t:"`.DS_Store` (made by macOS Finder)", b:1, why:"Operating-system clutter that changes constantly and means nothing to the project."},
      {t:"`.gitignore` itself", b:0, why:"Commit it, so everyone working on the project ignores the same files."},
      {t:"`README.md`", b:0, why:"The repository’s front page. Definitely commit it."},
      {t:"`debug.log`, rewritten by a tool every time it runs", b:1, why:"Generated output that changes on every run and can be recreated at any time. Ignore it (a `*.log` pattern covers every log file)."}
    ]},
    {id:"t2u7-l5-x4", type:"spot", q:"Mei is about to commit these files. Tap each one that should **not** be committed.", ask:"should not be committed", mono:true, parts:[
      {t:"index.html", flag:false, why:"The home page: this belongs in the repository."}, "\n",
      {t:"style.css", flag:false, why:"The stylesheet: part of the site."}, "\n",
      {t:"config.js  (contains apiKey = \"sk_live_…\")", flag:true, why:"A live secret key. Remove it, keep it out of the repository, and if it was ever pushed, revoke it at the service."}, "\n",
      {t:"images/logo.png", flag:false, why:"A site image: commit it."}, "\n",
      {t:"Thumbs.db", flag:true, why:"Windows thumbnail clutter. Add it to `.gitignore`."}, "\n",
      {t:"id_ed25519  (from ~/.ssh)", flag:true, why:"A **private** SSH key. It must never leave your computer. (The `.pub` file is the shareable half.)"}, "\n",
      {t:".gitignore", flag:false, why:"Commit it so the ignore rules are shared."}
    ]},
    {id:"t2u7-l5-x5", type:"mcq", q:"Kenji realises a database password he pushed to a public repository last week is still in the history. What should he do **first**?", options:[
      {t:"Change the password at the database (revoke or rotate it)", ok:true, why:"Right. GitHub’s guidance puts this first: once changed, the leaked one is useless. Cleaning the history is optional and comes after."},
      {t:"Rewrite the history with `git-filter-repo`", why:"It may help later, but it doesn’t stop anyone who already copied the password, and forks and clones keep it."},
      {t:"Make the repository private", why:"Anyone who saw or cloned it in the past week still has it. The password itself must change."},
      {t:"Add the file to `.gitignore`", why:"That only affects untracked files in the future. It does nothing about the copy already pushed."}
    ]},
    {id:"t2u7-l5-x6", type:"match", q:"Match each GitHub feature with its job.", pairs:[
      ["Issue","Reports a bug or proposes an idea, as a numbered discussion","Issues are for describing problems and plans; they don’t contain code changes."],
      ["Pull request","Proposes merging the commits on a branch, with review","The PR shows the diff and collects comments before merging."],
      ["Fork","Your own copy of someone else’s repository, under your account","You can push to your fork, then open a PR to the original."],
      ["`Fixes #12` in a PR description","Closes issue 12 automatically when the PR is merged","A closing keyword links the change to the problem it solves."]
    ]},
    {id:"t2u7-l5-x7", type:"mcq", q:"Hana publishes a small JavaScript game in a public GitHub repository with no LICENSE file. Lucía wants to copy the code into her own project. What’s the position?", options:[
      {t:"Lucía can view and fork it on GitHub, but without a licence, normal copyright applies and she has no permission to reuse the code", ok:true, why:"Right. GitHub’s terms let people view and fork public repositories, but reuse needs a licence. Hana can add one, such as MIT, if she wants to allow it."},
      {t:"Public means anyone can reuse it for anything", why:"Public means visible. Without a licence, copyright still applies."},
      {t:"No one, including Lucía, can even view it without a licence", why:"Viewing and forking on GitHub are allowed for public repositories. The licence is about reuse."},
      {t:"Lucía may reuse it if she makes her copy private", why:"Making a copy private doesn’t create permission to reuse someone else’s code."}
    ]}
   ],
   apply:{intro:"Work through a full pull request, protect your repositories from clutter and secrets, and give a project a licence and an issue.", tasks:[
     {t:"Your first pull request (in your own repository)", how:{
       win:["In your `garden-club` repository, run `git switch -c add-contact`, add a contact line to `index.html`, and commit.","Run `git push -u origin add-contact`.","On GitHub, select **Compare & pull request**, write a title and description, and create the PR.","Open **Files changed**, leave yourself a comment on a line, then **Merge pull request** and **Delete branch**.","Locally: `git switch main`, then `git pull`."],
       mac:["Run `git switch -c add-contact`, add a contact line to `index.html`, and commit.","Run `git push -u origin add-contact`.","On GitHub, select **Compare & pull request**, describe the change, and create the PR.","Comment on a line under **Files changed**, then merge and delete the branch.","Locally: `git switch main`, then `git pull`."],
       chromeos:["In the Linux Terminal: `git switch -c add-contact`, edit `index.html`, commit.","Run `git push -u origin add-contact`.","On GitHub in Chrome, select **Compare & pull request**, describe the change, and create the PR.","Comment on a line under **Files changed**, then merge and delete the branch.","Locally: `git switch main`, then `git pull`."],
       phone:["Open the `events-page` branch you made in Lesson 3 (or make a new branch from the branch menu and edit a file on it).","A banner should offer **Compare & pull request**; otherwise open **Pull requests → New pull request** and choose `main` ← your branch.","Write a title and description and create the PR.","Open **Files changed** to see the diff. In the GitHub app you can also review and comment. Then select **Merge pull request** (on the website) and **Delete branch**."]
     }, write:"Paste your pull request’s title and description."},
     {t:"Add a .gitignore and check for secrets", how:["Create `.gitignore` at the top of your repository with at least `.DS_Store`, `Thumbs.db` and `.env` (on a phone: **Add file → Create new file**, name it `.gitignore`).","On a computer, create an empty `.env` file and run `git status`: it shouldn’t appear. Run `git check-ignore -v .env` to see why.","Commit and push `.gitignore`.","Look through every file in your repositories for passwords, keys or personal details. If you find a real secret, change it at the service first, then remove it."], write:"What’s in your .gitignore, and did you find anything that shouldn’t be there?"},
     {t:"Licence, README and an issue", how:["On GitHub, **Add file → Create new file**, type `LICENSE`, select **Choose a license template**, pick one after reading choosealicense.com (MIT is a common choice for small projects), select **Review and submit**, and commit.","Make sure there’s a `README.md` that says what the project is and who it’s for.","Open the **Issues** tab and create an issue describing a small improvement, using the bug-report pattern from the lesson.","Fix it in a pull request whose description says `Fixes #` followed by the issue’s number, and check the issue closes when you merge."], write:"Which licence did you choose, and why?"}
   ], proof:"A merged pull request with a description, a committed `.gitignore` that keeps `.env` out, a LICENSE and README, and an issue closed by a pull request."},
   read:[
     {book:"progit", where:"Chapter 6, “GitHub”: 6.2 Contributing to a Project; Chapter 5, “Distributed Git”: 5.2 Contributing to a Project (commit guidelines)"},
     {book:"swc", where:"Version Control with Git → “Ignoring Things”, “Collaborating” and “Licensing”"},
     {book:"ghdocs", where:"Pull requests → About pull requests; Fork a repo; Issues → Creating an issue; Get started → Ignoring files; Removing sensitive data from a repository"}
   ]
  }
  ],
  checkpoint:["t2u7-q02","t2u7-q05","t2u7-q12","t2u7-q16","t2u7-q19","t2u7-q23","t2u7-q27","t2u7-q32","t2u7-q35","t2u7-q38","t2u7-q44","t2u7-q47"],
  codex:[
   {id:"why-version-control", title:"Version control, and why Git", aka:["version control","VCS","source control","revision control","Git vs GitHub","GitLab","Codeberg"], tags:["git","basics"],
    summary:"Version control records a history of meaningful snapshots of a project; Git is the most widely used system, and GitHub is one website for sharing Git repositories.",
    levels:{
     starter:[
      "If you’ve ever had `report_final.docx` and `report_final_v2_REAL.docx` side by side, you’ve met the problem version control solves. Instead of many copies with hopeful names, you keep **one** set of files, and a version control system keeps the history: every saved version, what changed, who changed it, when, and a note saying why.",
      "**Git** is the most widely used version control system for code. It’s a free program you install on your computer, and it works without an internet connection or an account.",
      "**GitHub** is a website where you can put a copy of a Git project to share it and work on it with others. GitLab, Codeberg and Bitbucket do the same job. Think of Git as a camera and GitHub as a photo-sharing site.",
      {key:"Git is the program; GitHub is one place to share what Git records."}
     ],
     builder:[
      "Version control is worth it whenever a project is made of **text files** that change over time: websites, programs, data in CSV, notes or books written in Markdown or LaTeX. It gives you:",
      {list:["**History**: every version, with messages explaining why.","**Undo**: bring back any file, or reverse any change.","**Branches**: try ideas without breaking the working version.","**Collaboration**: combine several people’s work, and see who did what.","**Backup**: every clone holds the full history."]},
      "Cloud **version history** (as in online documents) is simpler: automatic, per file, with no messages. Git is deliberate: you choose when a set of changes is worth recording, across the whole project at once.",
      {table:[["Service","Run by"],["GitHub","GitHub, a Microsoft company"],["GitLab","GitLab Inc.; also self-hostable"],["Codeberg","Codeberg e.V., a non-profit"],["Bitbucket","Atlassian"]]},
      "Because they all host ordinary Git repositories, you can move a project between them by pushing it to a new remote.",
      "A useful habit from the start: one repository per project, kept in its own folder, with commits at natural stopping points (“the menu page works”, “fixed the broken link”). That way the history reads like a diary of the project, and any step can be undone on its own.",
      "Git doesn’t replace backups. A repository on your laptop and a copy on a hosting service are two copies, but a deleted account or a mistaken force-push can still lose one of them."
     ],
     pro:[
      "Git is a **distributed** version control system: every clone is a complete repository with the full history, not a working copy checked out from a central server (as in older systems such as Subversion). That is why almost every operation is local and fast, and why work continues offline. Hosting services are a convention for coordination, not a technical requirement.",
      "Linus Torvalds wrote Git in 2005 for Linux kernel development, after the project lost free use of its previous proprietary tool, BitKeeper. Its design goals included speed, strong support for non-linear development (thousands of parallel branches) and data integrity.",
      "Integrity comes from **content addressing**: every object is named by a hash of its contents (SHA-1 by default; newer Git versions can create SHA-256 repositories). Changing any file, message or parent in history changes every later hash, so tampering is detectable.",
      "Git is weak at large binary files: it can’t show meaningful diffs, and every version of a large file stays in every clone. Projects with large media use Git LFS (Large File Storage) or keep such files elsewhere.",
      "MIT’s Missing Semester lecture argues that Git is best learned from its data model upward; once snapshots, commits and references make sense, the commands follow.",
      "Git also underlies many other tools: package managers fetch code from Git repositories, website hosts deploy on every push, and editors show changed lines using Git’s data."
     ]
    },
    related:["git-basics","commits-history","github-remotes"],
    read:[{book:"progit", where:"1.1 About Version Control, 1.2 A Short History of Git, 1.3 What is Git?"},{book:"missing", where:"“Version Control and Git” → “Git’s data model”"}],
    sources:[{t:"Pro Git, 1.1 About Version Control", url:"https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"},{t:"MIT Missing Semester (2026): Version Control and Git", url:"https://missing.csail.mit.edu/2026/version-control/"}], checked:"2026-11"},

   {id:"git-basics", title:"Installing and setting up Git", aka:["install Git","git config","user.name","user.email","noreply email","init.defaultBranch","Git for Windows","GitHub Desktop"], tags:["git","setup"],
    summary:"Install Git, check it with `git --version`, then set your name, a private commit email and `main` as the default branch name.",
    levels:{
     starter:[
      "Git is a program, so you install it once per computer:",
      {list:["**Windows**: Git for Windows, from git-scm.com.","**Mac**: type `git --version` in Terminal; macOS offers to install Apple’s command line developer tools, which include Git.","**Chromebook**: turn on the Linux development environment, then install Git in its Terminal.","**Linux**: your package manager."]},
      "Then tell Git who you are, because every commit records an author:",
      {code:'git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"', lang:"sh"},
      "The email is public in any history you share. GitHub gives you a private **noreply** address for this: Settings → Emails → **Keep my email addresses private**.",
      "Prefer buttons? **GitHub Desktop** (Windows and macOS) does the same things without typing.",
      "Check it worked with `git --version`, and check your settings with `git config --global --list`."
     ],
     builder:[
      "A sensible first setup:",
      {code:'git config --global user.name "Amara Mensah"\ngit config --global user.email "you@example.com"\ngit config --global init.defaultBranch main\ngit config --global pull.rebase false\ngit config --global --list', lang:"sh", cap:"Use your own name, and your GitHub noreply address in place of you@example.com."},
      {list:[
        "`--global` stores settings for every repository on this computer (in `~/.gitconfig`). Leave it out, inside a repository, to override a setting there only.",
        "`init.defaultBranch main` makes new repositories start on `main`, matching GitHub; without it, many Git versions use `master` and print a hint.",
        "`pull.rebase false` makes `git pull` merge when histories have diverged, instead of stopping to ask.",
        "Git shows setting names in lower case (`init.defaultbranch`); they’re case-insensitive."
      ]},
      "GitHub’s noreply address looks like `ID+username@users.noreply.github.com` for accounts created after 18 July 2017. Changing your email only affects new commits.",
      "If a commit opens Vim unexpectedly: press [[kbd:Esc]], type `:wq` and press [[kbd:Enter]] to save, or `:q!` to abandon. You can set another editor with `core.editor`.",
      "On Windows, the commands are the same in PowerShell and in Git Bash, the bash terminal that comes with Git for Windows. On ChromeOS, the Linux container is Debian, so `sudo apt install git` installs it; `sudo` asks for administrator rights for that one command."
     ],
     pro:[
      "Config has three levels: `--system` (all users), `--global` (you) and `--local` (one repository), with later levels overriding earlier ones. `git config --list --show-origin` shows each setting and the file it came from.",
      "On Windows, the Git for Windows installer asks about line endings (`core.autocrlf`). Its default converts Windows CRLF to LF in the repository and back on checkout, which avoids whole-file diffs when people on different systems edit the same files. A `.gitattributes` file can set this per project.",
      "Identity is not authentication: `user.email` is just text written into commits, and anyone can type any email. GitHub links commits to accounts by email; to prove authorship, sign commits (SSH or GPG signing) so GitHub shows them as **Verified**.",
      "GitHub can block pushes that would expose your private email (Settings → Emails, “Block command line pushes that expose my email”).",
      "GitHub Desktop runs on Windows (64-bit) and macOS. On Linux and ChromeOS, the command line or an editor’s built-in Git panel (such as VS Code’s Source Control) fills the same role.",
      "Package-manager versions of Git can lag behind the latest release; Homebrew on macOS and the Git for Windows installer track recent versions closely. This unit’s `git switch` and `git restore` need Git 2.23 (2019) or later, and `init.defaultBranch` needs Git 2.28 (2020) or later. Git’s developers plan to make `main` the built-in default in Git 3.0, but until then the setting is still worth making."
     ]
    },
    related:["why-version-control","commits-history","github-remotes"],
    read:[{book:"progit", where:"1.5 Installing Git; 1.6 First-Time Git Setup"},{book:"swc", where:"Version Control with Git → “Setting Up Git”"}],
    sources:[{t:"Pro Git, 1.6 First-Time Git Setup", url:"https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup"},{t:"GitHub Docs: Setting your commit email address", url:"https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address"},{t:"GitHub Docs: Installing GitHub Desktop", url:"https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop"}], checked:"2026-11"},

   {id:"commits-history", title:"Commits, staging and undoing", aka:["git init","git status","git add","git commit","staging area","index","git log","git restore","git revert","git reset","commit message","HEAD"], tags:["git","commits"],
    summary:"Stage changes with `git add`, record them with `git commit`, read history with `git log`, and undo with `restore` (files) or `revert` (commits).",
    levels:{
     starter:[
      "Your work lives in three places: the **working tree** (your folder), the **staging area** (what the next commit will contain) and the **repository** (every commit, in `.git`).",
      {code:'git init\ngit status\ngit add index.html\ngit commit -m "Add home page"\ngit log --oneline', lang:"sh"},
      "`git init` starts a repository. `git status` says what’s changed and is always safe. `git add` puts a file’s **current** contents in the staging area. `git commit` records what’s staged, with your message. `git log --oneline` lists commits, newest first.",
      "Good messages are short and specific, like “Fix broken link to About page”.",
      "`git diff` shows exactly what you changed before you commit, and `git log` lets you look back at every commit with its message, author and date. Nothing is recorded until you commit."
     ],
     builder:[
      "Everyday undo, by situation:",
      {table:[
        ["Situation","Command"],
        ["Discard unstaged edits to a file","`git restore file`"],
        ["Unstage a file, keeping the edits","`git restore --staged file`"],
        ["Get a file as it was in an old commit","`git restore --source <hash> file`"],
        ["Undo a commit, even a shared one","`git revert <hash>`"],
        ["Redo your last unshared commit","`git reset --soft HEAD~1`"]
      ]},
      "`git restore file` throws away edits with no undo; check with `git diff file` first. `git revert` adds a new commit that reverses an old one, so history stays honest and others aren’t affected.",
      "Message conventions (Pro Git, 5.2): a summary of about 50 characters in the imperative (“Add”, “Fix”), a blank line, then a body explaining why. One logical change per commit.",
      "`git add .` stages everything in the folder; `git commit -am` stages and commits changes to already-tracked files only. Run `git status` first.",
      "`git log --oneline -- file` lists only commits that changed one file; `git show <hash>` shows one commit in full. Plain `git log` opens a pager when the list is long: [[kbd:Space]] for more, [[kbd:Q]] to quit."
     ],
     pro:[
      "`HEAD` is a reference to the current branch (`.git/HEAD` contains `ref: refs/heads/main`). `HEAD~1` is its parent, `HEAD~2` the grandparent; `HEAD^2` is a merge’s second parent.",
      "`git reset` moves the current branch to another commit and then, depending on the mode, updates the staging area (`--mixed`, the default) or the staging area and working tree too (`--hard`). `--soft` moves only the branch. `--hard` discards uncommitted work irrecoverably; committed work it moves away from can usually be found again for a while with `git reflog`.",
      "Rewriting commits others already have (reset, `commit --amend`, rebase) forces them to reconcile diverged histories. Keep it to unpushed work.",
      "`git restore` and `git switch` (Git 2.23, 2019) split the many jobs of the older `git checkout`, which you’ll still see in older guides: `git checkout -- file` is `git restore file`.",
      "Commits are immutable objects. A commit stores a tree (a snapshot of the folder), parent hashes, author and committer (each with a timestamp) and the message; its hash covers all of that.",
      "`git commit --amend` replaces the last commit with a new one (new hash), useful to fix a typo in a message before pushing. Like reset, it rewrites history, so don’t amend commits others already have."
     ]
    },
    related:["git-diff","branches-merging","git-good-habits"],
    read:[{book:"progit", where:"2.2 Recording Changes to the Repository; 2.3 Viewing the Commit History; 2.4 Undoing Things; 7.7 Reset Demystified"},{book:"swc", where:"Version Control with Git → “Tracking Changes”, “Exploring History”"}],
    sources:[{t:"Pro Git, 2.2 Recording Changes to the Repository", url:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"},{t:"Pro Git, 2.4 Undoing Things", url:"https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things"}], checked:"2026-11"},

   {id:"git-diff", title:"Reading a diff", aka:["git diff","git diff --staged","git show","unified diff","hunk"], tags:["git","commits"],
    summary:"`git diff` shows line-by-line changes: `-` lines were removed, `+` lines were added; `--staged` compares what’s staged with the last commit.",
    levels:{
     starter:[
      "A **diff** shows exactly what changed between two versions of a file. Lines that start with `-` were removed; lines that start with `+` were added; a changed line appears as one of each.",
      {code:"-  <p>We meet every Saturday at 9:00.</p>\n+  <p>We meet every Saturday at 8:30.</p>", lang:"txt"},
      "`git diff` shows changes you haven’t staged yet. `git diff --staged` shows what will go into your next commit. On GitHub, the same thing is shown with red and green lines whenever you open a commit or a pull request’s **Files changed** tab.",
      "Reading the diff before every commit is one of the best habits in Git.",
      "A diff never changes anything: it’s just a way of looking. Run it as often as you like."
     ],
     builder:[
      "A full diff has a header and one or more **hunks**:",
      {code:"diff --git a/index.html b/index.html\nindex 6edb4e0..53114e5 100644\n--- a/index.html\n+++ b/index.html\n@@ -6,6 +6,6 @@", lang:"txt"},
      {list:["`a/` is the old version, `b/` the new one.","`@@ -6,6 +6,6 @@` means: from line 6, 6 lines in the old version; from line 6, 6 lines in the new.","Lines starting with a space are unchanged context (3 lines either side by default)."]},
      {table:[["Command","Compares"],["`git diff`","Working tree with staging area"],["`git diff --staged`","Staging area with last commit"],["`git diff HEAD`","Working tree with last commit"],["`git diff abc123 def456`","Two commits"],["`git show abc123`","One commit with its parent"]]},
      "Add `--stat` for a summary (files and counts) instead of every line.",
      "On GitHub, any commit page and a pull request’s **Files changed** tab show the same information with colour: red for removed lines, green for added ones. You can switch between unified and split (side-by-side) views, which is easier on a wide screen.",
      "`git diff --stat` and `git show --stat` list files with counts of added and removed lines, a quick way to check that a commit touches only what you expect."
     ],
     pro:[
      "Git doesn’t store diffs; it computes them on demand from snapshots, using the Myers algorithm by default (`--diff-algorithm=histogram` or `patience` can give more readable results for moved code).",
      "`git diff --word-diff` shows changes within lines, which helps for prose. `-w` ignores whitespace changes, useful when someone reindented a file.",
      "Line endings (CRLF vs LF) or a changed file mode can make whole files appear changed; the `old mode`/`new mode` header or `^M` characters are the clue.",
      "Binary files show only “Binary files differ”. A `.gitattributes` entry with a `textconv` driver can make some formats diffable (for example converting documents to text first).",
      "The same unified format is used by `git format-patch` and `git apply`, so a diff can be emailed and applied elsewhere, which is how the Linux kernel still accepts contributions.",
      "`git diff A..B` and `git diff A B` are the same for commits; `git diff A...B` (three dots) compares B with the merge base of A and B, which is what a pull request shows: the changes the branch introduced, ignoring what happened on `main` meanwhile.",
      "`git log -p` shows each commit’s diff in the history, and `git log -S text` (the “pickaxe”) finds commits that added or removed a given string, which is powerful for answering “when did this line appear?”"
     ]
    },
    related:["commits-history","merge-conflicts"],
    read:[{book:"progit", where:"2.2 Recording Changes to the Repository → “Viewing Your Staged and Unstaged Changes”"}],
    sources:[{t:"Pro Git, 2.2 Recording Changes to the Repository", url:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository"},{t:"Git reference: git-diff", url:"https://git-scm.com/docs/git-diff"}], checked:"2026-11"},

   {id:"branches-merging", title:"Branches and merging", aka:["git branch","git switch","git checkout","git merge","fast-forward","merge commit","HEAD"], tags:["git","branches"],
    summary:"A branch is a movable label on a commit; switch with `git switch`, combine with `git merge` (fast-forward or merge commit).",
    levels:{
     starter:[
      "A **branch** lets you work on something new without disturbing the working version. `main` holds the version that works; a branch such as `events-page` holds an experiment.",
      {code:"git switch -c events-page\n# …edit, add, commit…\ngit switch main\ngit merge events-page", lang:"sh"},
      "Switching branches changes the files in your folder to match that branch. Merging brings one branch’s commits into the branch you’re on.",
      "Creating a branch is instant: it’s just a label pointing at a commit, not a copy of your files.",
      "`git branch` lists branches (a star marks yours). When a branch has been merged, delete its label with `git branch -d name`; its commits stay in the history."
     ],
     builder:[
      "Two kinds of merge:",
      {list:["**Fast-forward**: the receiving branch has no new commits, so its label simply moves forward. No new commit.","**Merge commit**: both branches have new commits, so Git combines them in a new commit with two parents."]},
      {table:[["Task","Command"],["List branches","`git branch`"],["Create and switch","`git switch -c name`"],["Switch","`git switch name`"],["Merge into current","`git merge name`"],["Delete merged branch","`git branch -d name`"],["See the shape","`git log --oneline --graph --all`"]]},
      "Git refuses to switch if uncommitted changes would be overwritten, and refuses `-d` on a branch that isn’t merged (use `-D` only if you really mean to drop its commits).",
      "Old guides use `git checkout -b name` and `git checkout name`; they do the same job.",
      "Name branches by purpose, in lower case with hyphens (`fix-menu-link`, `events-page`). On GitHub, the branch menu on a repository page creates and switches branches, and pull requests do the merging (see the pull requests entry). GitHub Pages publishes from one branch, so keeping `main` working means the live site keeps working.",
      "`git log --oneline --graph` draws the history as lines: a `*` is a commit, and `|\\` and `|/` show where branches split and join. It’s the quickest way to see whether a merge was a fast-forward."
     ],
     pro:[
      "Internally a branch is just a name and a commit hash: in the long-standing “files” format, a small file under `.git/refs/heads/` (or a line in `.git/packed-refs`); newer “reftable” repositories keep the same information in a compact table; `HEAD` normally contains `ref: refs/heads/<branch>`. Checking out a commit directly gives a **detached HEAD**: commits made there belong to no branch until you create one (`git switch -c name`).",
      "A non-fast-forward merge finds the **merge base** (the best common ancestor) and does a three-way merge of base, ours and theirs. Git’s default strategy is now `ort`. `git merge --no-ff` forces a merge commit even when a fast-forward is possible, which some teams prefer so each feature shows as a unit.",
      "The alternative to merging is **rebasing**, which replays your commits on top of another branch for a linear history. It rewrites commits, so it should only be used on commits others don’t have.",
      "Hosting services add protections: GitHub can protect a branch (require pull requests, reviews or passing checks before merging, and block force pushes).",
      "Branches are cheap enough that many teams use **trunk-based development**: very short-lived branches merged into `main` within a day or two, with automated checks. Others use longer-lived release branches. Pro Git 3.4 describes common workflows.",
      "`git branch -v` shows each branch’s latest commit, and `git branch --merged` lists branches already merged into the current one, which are safe to delete."
     ]
    },
    related:["merge-conflicts","pull-requests","commits-history"],
    read:[{book:"progit", where:"3.1 Branches in a Nutshell; 3.2 Basic Branching and Merging; 3.3 Branch Management; 3.6 Rebasing"},{book:"missing", where:"“Version Control and Git” → “Branching and merging”"}],
    sources:[{t:"Pro Git, 3.1 Branches in a Nutshell", url:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"},{t:"Pro Git, 3.2 Basic Branching and Merging", url:"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"}], checked:"2026-11"},

   {id:"merge-conflicts", title:"Merge conflicts", aka:["conflict markers","<<<<<<<","merge --abort","resolve conflicts","both modified"], tags:["git","branches"],
    summary:"A conflict happens when two branches change the same lines; edit the file between the markers, delete the markers, `git add`, then `git commit`.",
    levels:{
     starter:[
      "Git merges most changes by itself. When two branches change **the same lines** (or lines right next to each other) differently, it stops and asks you to choose. That’s a **merge conflict**, and it’s normal.",
      "Git marks the spot in the file:",
      {code:"<<<<<<< HEAD\n  <p>We meet every Sunday at 8:30.</p>\n=======\n  <p>We meet every Saturday at 10:00 in winter.</p>\n>>>>>>> winter-hours", lang:"txt"},
      "The top part is your branch; the bottom part is the branch you’re merging in. Write what the text should say, delete the three marker lines, save, then `git add` the file and `git commit`. If you’d rather stop, `git merge --abort` puts everything back.",
      "Conflicts are normal and fixable. Nothing is lost: both versions are right there in the file for you to choose from."
     ],
     builder:[
      "A calm routine:",
      {ol:["`git status`: files listed as “both modified” have conflicts.","In each, search for `<<<<<<<`. Between it and `=======` is `HEAD` (yours); between `=======` and `>>>>>>> name` is theirs.","Edit to the correct result (one side, the other, or a combination) and remove all markers.","`git add file` for each resolved file.","`git commit` (Git suggests a message). Then test the result."]},
      "Other kinds: a **modify/delete** conflict (one side deleted a file the other edited) asks you to `git add` the file to keep it or `git rm` it to delete it.",
      "Editors help: VS Code highlights conflicts with **Accept Current Change**, **Accept Incoming Change** and **Accept Both Changes**. GitHub’s **Resolve conflicts** button handles simple text conflicts in a pull request.",
      "Prevention: short-lived branches, merging `main` into your branch often, no mass reformatting, and talking to each other.",
      "Leftover markers are the classic mistake: Git doesn’t check for them, so a web page can go live with `=======` on it. Search for `<<<<<<<` before committing.",
      "After resolving, check the result works: preview the page or run the code. A merge without conflicts can still combine two changes that don’t work together."
     ],
     pro:[
      "`git config --global merge.conflictStyle zdiff3` (or `diff3`) adds a third section showing the **base** version, between `|||||||` and `=======`. Seeing what both sides started from often makes the right answer obvious.",
      "During a conflict, `git diff` shows a combined diff, and `git checkout --ours file` / `--theirs file` take one side wholesale (note that during a rebase, “ours” and “theirs” are swapped from what you might expect).",
      "`git log --merge` lists the commits that touched the conflicted files; `git mergetool` launches a configured graphical tool.",
      "`git rerere` (“reuse recorded resolution”) remembers how you resolved a conflict and repeats it if the same conflict reappears, which helps with long-running branches.",
      "A conflict-free merge can still be wrong: Git only checks text, not meaning. Two compatible-looking edits can break a page together, so preview or test after every merge.",
      "Conflicts in the middle of a `git pull` are ordinary merge conflicts and are resolved the same way. If the pull was a rebase (`pull.rebase true`), you resolve per replayed commit and continue with `git rebase --continue`, or back out with `git rebase --abort`.",
      "Binary files (images, PDFs) can’t be merged line by line; Git keeps your version in the working tree and reports a conflict, and you choose one side with `git checkout --ours` or `--theirs` and add it."
     ]
    },
    related:["branches-merging","git-diff"],
    read:[{book:"progit", where:"3.2 Basic Branching and Merging → “Basic Merge Conflicts”"},{book:"swc", where:"Version Control with Git → “Conflicts”"}],
    sources:[{t:"Pro Git, 3.2 Basic Branching and Merging", url:"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"},{t:"GitHub Docs: Resolving a merge conflict using the command line", url:"https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line"}], checked:"2026-11"},

   {id:"github-remotes", title:"Remotes: clone, push and pull", aka:["remote","origin","git clone","git push","git pull","git fetch","personal access token","SSH key","gh auth login","Git Credential Manager","github.dev"], tags:["git","github"],
    summary:"A remote is another copy of the repository; clone to copy it, pull to get new commits, push to send yours, and sign in with a token, credential manager, `gh` or SSH, never your password.",
    levels:{
     starter:[
      "A **remote** is another copy of your repository, usually on GitHub. Its usual name is `origin`.",
      {list:["`git clone URL` downloads a repository with all its history.","`git pull` gets other people’s new commits.","`git push` sends your new commits."]},
      "Nothing moves until you push or pull: commits stay on your computer until you push them.",
      "To push, Git must sign you in to GitHub. Your GitHub password won’t work; use a sign-in through the browser (Git Credential Manager, included with Git for Windows, or the GitHub CLI’s `gh auth login`), or a personal access token or an SSH key. Never share tokens or private keys.",
      "Every copy is complete: if GitHub were unavailable for a day, everyone could keep committing and push later."
     ],
     builder:[
      "Publishing an existing local repository: create an **empty** repository on GitHub, then:",
      {code:"git remote add origin https://github.com/USER/REPO.git\ngit branch -M main\ngit push -u origin main", lang:"sh"},
      "The daily loop is **pull, work and commit, push**. If a push is rejected because “the remote contains work that you do not have locally”, someone pushed first: `git pull` (resolving any conflicts), then push. Set `git config --global pull.rebase false` so pulls merge rather than stopping on diverged histories.",
      {table:[["Sign-in","Notes"],["Git Credential Manager","Browser sign-in; bundled with Git for Windows"],["`gh auth login`","GitHub CLI; can configure Git for you"],["Personal access token","Paste as the “password”; prefer fine-grained, with expiry"],["SSH key","`ssh-keygen -t ed25519`; add the `.pub` half to GitHub"]]},
      "Without installing anything: GitHub’s pencil editor, or **github.dev** (press [[kbd:.]] on a repository), which commits from the browser.",
      "`git remote -v` lists remotes and their addresses. If a push or pull says “Authentication failed”, the stored credential is usually wrong or expired: sign in again with your credential manager or `gh auth login`, or replace the token.",
      "`git clone` creates a new folder named after the repository; run `cd` into it before using other Git commands. Don’t clone inside another repository’s folder."
     ],
     pro:[
      "`git fetch` updates **remote-tracking branches** such as `origin/main`, your local record of where the remote’s branches were at the last fetch. `git status` compares against those, so “up to date” can be stale until you fetch. `git pull` = fetch + merge (or rebase, with `pull.rebase true`, or fast-forward only with `pull.ff only`).",
      "`-u` (`--set-upstream`) records the upstream in config (`branch.main.remote`, `branch.main.merge`), so plain push and pull know where to go.",
      "`git push --force` overwrites the remote branch; `--force-with-lease` refuses if the remote moved since your last fetch, which is safer when you must rewrite your own branch. Never force-push shared branches.",
      "HTTPS works through most firewalls and proxies; SSH uses port 22 (GitHub also offers SSH over port 443). Fine-grained tokens can be limited to specific repositories and permissions, and organisations can require approval for them.",
      "github.dev runs in the browser’s sandbox without cloning, keeping work in browser storage until you commit; it can’t run a terminal or build steps (Codespaces can, as a paid-per-use service with a free monthly allowance).",
      "Git Credential Manager stores credentials in the operating system’s secure store (Windows Credential Manager, macOS Keychain, or libsecret on Linux) and handles OAuth sign-in and two-factor authentication through the browser, so no long-lived token is typed by hand."
     ]
    },
    related:["pull-requests","branches-merging","gitignore-secrets","github-pages"],
    read:[{book:"progit", where:"2.5 Working with Remotes; 3.5 Remote Branches; 6.1 Account Setup and Configuration"},{book:"swc", where:"Version Control with Git → “Remotes in GitHub”"}],
    sources:[{t:"GitHub Docs: About remote repositories", url:"https://docs.github.com/en/get-started/git-basics/about-remote-repositories"},{t:"GitHub Docs: Caching your GitHub credentials in Git", url:"https://docs.github.com/en/get-started/git-basics/caching-your-github-credentials-in-git"},{t:"GitHub Docs: Using VS Code for the Web from GitHub", url:"https://docs.github.com/en/codespaces/the-githubdev-web-based-editor"}], checked:"2026-11"},

   {id:"pull-requests", title:"Forks, pull requests, reviews and issues", aka:["pull request","PR","merge request","fork","code review","issue","Fixes #","draft pull request","squash and merge"], tags:["github","collaboration"],
    summary:"Propose changes from a branch (or a fork) with a pull request, review them kindly, track problems in issues, and link the two with `Fixes #n`.",
    levels:{
     starter:[
      "A **pull request** (PR) is a request to merge the commits on one branch into another, on a GitHub page where people can see the changes, comment and approve before anything is merged.",
      "If you can’t push to a project, **fork** it (your own copy on GitHub), make your change there, and open a pull request to the original.",
      "An **issue** is a numbered discussion for a bug or an idea. Write what you did, what you expected and what happened. A PR whose description says `Fixes #12` closes issue 12 when it’s merged.",
      "Reviews should be specific and kind: point to the line, say why, suggest a fix.",
      "Even in your own repository, a pull request is a good way to check a change before it reaches `main`, and it leaves a record of why the change was made."
     ],
     builder:[
      {ol:["Branch, commit, `git push -u origin branch`.","**Compare & pull request**; check base (`main`) and compare (your branch).","Describe what and why; mark it **draft** if not ready.","Reviewers comment on lines and finish with **Comment**, **Approve** or **Request changes**; reviewers can suggest exact replacement lines.","Push more commits to update the PR.","Merge (merge commit, squash, or rebase), delete the branch, then `git pull` locally."]},
      "Keep PRs small and focused: one change, easy to review. Link related issues. Run or preview the change before asking for review.",
      "GitHub Mobile lets you read, review and comment on PRs and issues from a phone.",
      "Before contributing to someone else’s project, read its README and `CONTRIBUTING` file, search existing issues, and follow its code of conduct.",
      "A good PR description says what changed, why, and how to check it, with screenshots for visual changes. A good review comments on specific lines, explains the reason, and suggests a fix; GitHub’s **suggestion** feature lets the author apply a proposed line with one click.",
      "Issues use the same numbering as PRs in a repository, so `#12` could be either. Mentioning `@username` notifies that person; use it only when you mean to."
     ],
     pro:[
      "Merge methods: **merge commit** preserves every commit plus a merge; **squash** makes one commit (tidy history, but individual commits are lost from `main`); **rebase and merge** replays commits linearly. Owners can allow or disallow each.",
      "Keep a fork current by adding the original as a second remote, conventionally `upstream`: `git remote add upstream URL`, then `git fetch upstream` and merge `upstream/main`. GitHub’s **Sync fork** button does the same on the website.",
      "Protected branches can require approvals, passing status checks (GitHub Actions) and up-to-date branches before merging. A `CODEOWNERS` file requests reviews from owners of particular paths automatically.",
      "Closing keywords (`close`, `fixes`, `resolves` and variants) only close issues when the PR is merged into the repository’s default branch.",
      "Issue templates and forms (in `.github/ISSUE_TEMPLATE/`) guide reporters to include the details maintainers need; labels such as `good first issue` help newcomers find a start.",
      "Draft PRs signal work in progress and can’t be merged until marked **Ready for review**. Reviews can be required by branch protection, and stale approvals can be dismissed automatically when new commits arrive.",
      "GitLab calls the same feature a merge request; the workflow (branch, push, propose, review, merge) is the same on every major hosting service."
     ]
    },
    related:["github-remotes","branches-merging","git-good-habits"],
    read:[{book:"progit", where:"6.2 Contributing to a Project; 6.3 Maintaining a Project"},{book:"swc", where:"Version Control with Git → “Collaborating”"}],
    sources:[{t:"GitHub Docs: About pull requests", url:"https://docs.github.com/en/pull-requests/get-started/about-pull-requests"},{t:"GitHub Docs: Fork a repository", url:"https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo"},{t:"GitHub Docs: Creating an issue", url:"https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue"}], checked:"2026-11"},

   {id:"gitignore-secrets", title:".gitignore and keeping secrets out", aka:[".gitignore","git rm --cached","secrets","API key","token","push protection",".env","leaked secret","git-filter-repo"], tags:["git","security"],
    summary:"List files Git should ignore in `.gitignore`; never commit secrets, and if one leaks, revoke or rotate it first.",
    levels:{
     starter:[
      "A `.gitignore` file lists files Git should leave alone, such as `.DS_Store`, `Thumbs.db`, drafts and secret files like `.env`. Commit the `.gitignore` itself so everyone shares it.",
      "**Never commit secrets**: passwords, API keys, tokens, private keys. A public repository can be read by anyone, including bots that search for secrets.",
      "If you commit one by mistake, **change it at the service immediately**. Deleting the file isn’t enough, because the old version is still in the history.",
      {key:"Leaked secret? Revoke or rotate first; tidy up second."},
      "Commit the `.gitignore` file itself, so everyone on the project ignores the same things. GitHub offers ready-made templates when you create a repository.",
      "`git status` stops listing ignored files, so the list you see is the list that matters."
     ],
     builder:[
      {code:"# comments start with #\n.DS_Store\nThumbs.db\n*.log\n.env\ndrafts/\n!keep.log", lang:"txt"},
      {list:["A plain name matches anywhere in the tree; a leading `/` anchors it to the repository’s top.","A trailing `/` matches only folders.","`*` matches anything except `/`; a double asterisk matches across folders.","`!` re-includes something a previous pattern excluded."]},
      "Ignoring doesn’t affect files already tracked. `git rm --cached file` stops tracking a file but leaves it on disk; commit that, and the earlier versions remain in history. `git check-ignore -v file` tells you which rule matches.",
      "Keep secrets in an ignored `.env` and commit a `.env.example` with placeholders. A static site can’t hold secrets at all, because everything it serves is public.",
      "GitHub **push protection** can block pushes containing recognised secret formats; treat it as a safety net.",
      "Before every commit, `git status` and `git diff --staged` are your best defence: read what is about to be recorded. If something sensitive is staged, `git restore --staged file` unstages it.",
      "GitHub’s **gitignore** templates (offered when you create a repository) and the `github/gitignore` collection give sensible starting lists for many languages and tools."
     ],
     pro:[
      "GitHub’s guidance on sensitive data: revoke or rotate the secret first; that may be sufficient. Rewriting history (with `git-filter-repo`) has heavy side effects: every later commit hash changes, collaborators must re-clone or carefully clean up, closed PR diffs can break, and copies in forks and existing clones aren’t affected. GitHub Support can remove cached views only where rotating the credential can’t mitigate the risk.",
      "Other ignore levels: `.git/info/exclude` (this clone only, not shared) and a global file set with `core.excludesFile` for your own editor and OS clutter.",
      "Secret scanning tools (GitHub secret scanning, gitleaks, trufflehog) can run in CI or as pre-commit hooks to catch secrets before they leave your computer.",
      "Private repositories reduce exposure but don’t make committing secrets safe: every collaborator, clone, backup and integration with read access gets a copy.",
      "Personal data counts too: email addresses, phone numbers and addresses in files or commit metadata persist in history in the same way.",
      "Removing a file in a new commit is not removal: every earlier commit still contains it, and `git log --all -- file` finds them.",
      "A pattern with a slash in the middle (`docs/drafts`) is relative to the `.gitignore` file’s folder; `.gitignore` files in subfolders apply to that subfolder."
     ]
    },
    related:["git-good-habits","github-remotes"],
    read:[{book:"swc", where:"Version Control with Git → “Ignoring Things”"},{book:"progit", where:"2.2 Recording Changes to the Repository → “Ignoring Files”"}],
    sources:[{t:"GitHub Docs: Ignoring files", url:"https://docs.github.com/en/get-started/git-basics/ignoring-files"},{t:"GitHub Docs: Removing sensitive data from a repository", url:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository"}], checked:"2026-11"},

   {id:"git-good-habits", title:"Good Git habits, READMEs and licences", aka:["best practices","commit often","README","LICENSE","choosealicense","MIT licence","GPL","open source licence"], tags:["git","github","habits"],
    summary:"Check status often, commit small with clear messages, branch for experiments, never force-push shared work or commit secrets, and add a README and a licence.",
    levels:{
     starter:[
      {list:["Run `git status` often; it’s always safe.","Pull before you start, push when you finish.","Commit small changes with clear messages.","Use a branch for anything uncertain; keep `main` working.","Read your diff before committing.","Never commit passwords or keys."]},
      "Give every repository a `README.md` that says what it is and how to use it.",
      "If you want others to reuse your work, add a **licence**. Without one, normal copyright applies, even in a public repository. choosealicense.com explains the common ones.",
      "Prefer `git revert` to undo shared work, and never force-push a branch other people use.",
      "Turn on two-factor authentication for your GitHub account.",
      "Keep tokens and passwords out of every repository, and use your GitHub noreply address for commits."
     ],
     builder:[
      "Habits that prevent most trouble:",
      {list:[
        "**Small, focused commits**: easy to review, revert and understand.",
        "**Messages in the imperative**, about 50 characters, with a body for the why.",
        "**Short-lived branches**, merged often, to keep conflicts small.",
        "**Revert, don’t rewrite** shared history; never `git push --force` to a shared branch.",
        "**Pull requests** even for your own projects, for a second look and a record.",
        "**Two-factor authentication** on GitHub; tokens in a password manager."
      ]},
      {table:[["Licence","In short"],["MIT","Do almost anything; keep the copyright notice"],["Apache 2.0","Permissive, with explicit patent terms"],["GPL 3.0","Shared changed versions must stay GPL"],["CC BY 4.0","For writing and media: reuse with credit"]]},
      "On GitHub: **Add file → Create new file**, name it `LICENSE`, then **Choose a license template**. This is general information, not legal advice.",
      "A README usually covers: what the project is, how to run or view it, how to contribute, and the licence. GitHub renders `README.md` as formatted text below the file list.",
      "Before you start each session, `git pull`; when you finish, `git push`. Check `git status` in between whenever you’re unsure what state things are in."
     ],
     pro:[
      "Without a licence, GitHub’s Terms of Service still let other users view and fork public repositories on GitHub, but grant no right to reuse the code elsewhere. Licences are identified by SPDX identifiers (`MIT`, `Apache-2.0`, `GPL-3.0-only`), which tools read to check compatibility.",
      "Copyleft licences (GPL, AGPL) require derived works to carry the same licence when distributed (AGPL also when offered over a network); permissive ones (MIT, BSD, Apache) don’t. Mixing licences has compatibility rules, which is why organisations often have policies.",
      "A repository is not a backup plan on its own: a deleted GitHub account or a force-push can lose the hosted copy. Keep at least one other copy, and remember `git bundle` can pack a whole repository into one file.",
      "Mature projects add `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, issue templates, branch protection and automated checks. Signed commits and tags let others verify authorship.",
      "Many communities document conventions such as **Conventional Commits** (`fix:`, `feat:` prefixes) to automate changelogs; follow a project’s own rules when contributing.",
      "Git hooks (scripts in `.git/hooks`, or tools that manage them) can run formatters, tests or secret scanners automatically before each commit or push."
     ]
    },
    related:["commits-history","pull-requests","gitignore-secrets"],
    read:[{book:"progit", where:"5.2 Contributing to a Project → “Commit Guidelines”"},{book:"swc", where:"Version Control with Git → “Licensing” and “Open Science”"}],
    sources:[{t:"GitHub Docs: Licensing a repository", url:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"},{t:"Choose an open source license", url:"https://choosealicense.com/"},{t:"Pro Git, 5.2 Contributing to a Project", url:"https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project"}], checked:"2026-11"}
  ],
  terms:[
   {id:"version-control", term:"Version control", def:"A system that records a history of a project’s files: what changed, when, by whom and why, so any earlier version can be seen or restored.", codex:"why-version-control"},
   {id:"git", term:"Git", def:"A free, open-source version control program that runs on your own computer and keeps a project’s full history in a hidden .git folder. It needs no account or internet connection.", codex:"why-version-control"},
   {id:"github", term:"GitHub", def:"A website run by a company where people store copies of Git repositories online, share them and work on them together. GitLab, Codeberg and Bitbucket are similar services.", codex:"why-version-control"},
   {id:"commit-git", term:"Commit (Git)", def:"A saved snapshot of the whole project, with a message, an author, a date, a link to the previous commit, and a unique ID (hash).", codex:"commits-history"},
   {id:"commit-hash", term:"Commit hash", def:"A commit’s unique ID: 40 characters (digits and the letters a to f) worked out from its contents, such as 1413f5f17ea0…. Usually shortened to the first seven.", codex:"commits-history"},
   {id:"working-tree", term:"Working tree", def:"Your project folder as you see it: the files you open and edit. Git compares it with the staging area and the last commit.", codex:"commits-history"},
   {id:"staging-area", term:"Staging area (index)", def:"Git’s waiting area for the next commit. git add copies a file’s current contents there; git commit records what it holds.", codex:"commits-history"},
   {id:"git-init", term:"git init", def:"The command that turns the current folder into a Git repository by creating the hidden .git folder. Run it once, in the project’s own folder.", codex:"commits-history"},
   {id:"git-status", term:"git status", def:"Shows which files are changed, staged or untracked, and which branch you’re on. It changes nothing, so it’s always safe to run.", codex:"commits-history"},
   {id:"git-add", term:"git add", def:"Copies a file’s current contents into the staging area, ready for the next commit. Edit the file again and you must add it again.", codex:"commits-history"},
   {id:"git-log", term:"git log", def:"Lists commits, newest first. git log --oneline shows one short line per commit; --graph draws branches.", codex:"commits-history"},
   {id:"git-diff-term", term:"git diff", def:"Shows line-by-line changes: lines starting with - were removed and + were added. --staged shows what the next commit will contain.", codex:"git-diff"},
   {id:"commit-message", term:"Commit message", def:"The note recorded with a commit. A good one is a short summary in the imperative, such as “Fix broken link to About page”, plus why if needed.", codex:"commits-history"},
   {id:"git-restore", term:"git restore", def:"Puts back an earlier version of a file. git restore file discards unstaged edits (no undo); git restore --staged file unstages it.", codex:"commits-history"},
   {id:"git-revert", term:"git revert", def:"Undoes a commit by making a new commit that reverses its changes. History is kept, so it’s safe even for commits others already have.", codex:"commits-history"},
   {id:"head-git", term:"HEAD", def:"Git’s pointer to where you are now: usually the current branch, and through it the latest commit on that branch. HEAD~1 is the commit before.", codex:"branches-merging"},
   {id:"branch-git", term:"Branch (Git)", def:"A movable label pointing at a commit, which moves forward as you commit. Branches let separate lines of work grow side by side.", codex:"branches-merging"},
   {id:"merge", term:"Merge", def:"Combining another branch’s commits into the branch you’re on, with git merge. Either a fast-forward or a new merge commit.", codex:"branches-merging"},
   {id:"fast-forward", term:"Fast-forward merge", def:"A merge where the receiving branch has no new commits, so Git just moves its label forward. No merge commit is made.", codex:"branches-merging"},
   {id:"merge-conflict", term:"Merge conflict", def:"When two branches changed the same (or neighbouring) lines differently, Git marks the spot with <<<<<<<, ======= and >>>>>>> and asks you to choose.", codex:"merge-conflicts"},
   {id:"remote", term:"Remote", def:"A named address of another copy of the repository, usually on a hosting service. The main one is usually called origin.", codex:"github-remotes"},
   {id:"clone", term:"Clone", def:"To download a complete copy of a repository, with its whole history, using git clone. The copy remembers where it came from as origin.", codex:"github-remotes"},
   {id:"push", term:"Push", def:"Sending your new local commits to a remote with git push. Nothing reaches GitHub until you push.", codex:"github-remotes"},
   {id:"pull", term:"Pull", def:"Getting new commits from a remote and merging them into your current branch with git pull: a fetch followed by a merge.", codex:"github-remotes"},
   {id:"personal-access-token", term:"Personal access token", def:"A long random string you create on GitHub to use instead of a password when Git asks. Treat it like a password: keep it secret, limit it, let it expire.", codex:"github-remotes"},
   {id:"ssh-key", term:"SSH key", def:"A pair of keys for signing in without a password. The public half (.pub) goes in your GitHub settings; the private half never leaves your computer.", codex:"github-remotes"},
   {id:"noreply-email", term:"Noreply email (GitHub)", def:"A private address GitHub gives your account, such as 12345678+name@users.noreply.github.com, to use in commits instead of your real email.", codex:"git-basics"},
   {id:"fork", term:"Fork", def:"Your own copy of someone else’s repository, made on GitHub under your account, so you can change it and propose changes back with a pull request.", codex:"pull-requests"},
   {id:"pull-request", term:"Pull request (PR)", def:"A request, on GitHub, to merge the commits on one branch into another, with a page for viewing the changes, discussing and reviewing them.", codex:"pull-requests"},
   {id:"github-issue", term:"Issue (GitHub)", def:"A numbered discussion in a repository for a bug, an idea or a task. A pull request saying “Fixes #12” closes issue 12 when merged.", codex:"pull-requests"},
   {id:"gitignore", term:".gitignore", def:"A file listing names and patterns Git should ignore, such as .DS_Store or .env. It doesn’t affect files Git is already tracking.", codex:"gitignore-secrets"},
   {id:"software-licence", term:"Licence (software)", def:"A file, usually LICENSE, saying what others may do with your work. Without one, normal copyright applies, even in a public repository.", codex:"git-good-habits"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u7-q01", lesson:"t2u7-l1", level:1, q:"What is the main difference between Git and GitHub?", options:[
     {t:"Git is a program that keeps history on your computer; GitHub is a website for sharing Git repositories", ok:true, why:"Git works locally without an account; GitHub is one hosting service among several."},
     {t:"They are two names for the same thing", why:"They’re separate: you can use Git with no GitHub account at all."},
     {t:"GitHub is the newer version of Git", why:"GitHub isn’t a version of Git; it’s a website that stores Git repositories."},
     {t:"Git is for websites and GitHub is for apps", why:"Both can hold any project made of files; the difference is program versus hosting service."}
   ]},
   {id:"t2u7-q02", lesson:"t2u7-l1", level:1, q:"What does a Git commit record?", options:[
     {t:"A snapshot of the whole project, with a message, author, date, a link to its parent and a unique hash", ok:true, why:"That’s the full picture: a commit is a snapshot plus the information that makes it part of a history."},
     {t:"Only the one file you changed most recently", why:"A commit covers every tracked file; unchanged ones just reuse stored copies."},
     {t:"An automatic save every few minutes", why:"Git never saves automatically. You choose when to commit."},
     {t:"A backup copy on GitHub", why:"Commits are made on your computer. Nothing goes to GitHub until you push."}
   ]},
   {id:"t2u7-q03", lesson:"t2u7-l1", level:1, q:"Where does Git keep a repository’s history?", options:[
     {t:"In a hidden `.git` folder inside the project folder", ok:true, why:"Delete `.git` and the folder becomes an ordinary folder with no history."},
     {t:"Only on GitHub’s servers", why:"Git stores history locally. GitHub can hold another copy, but it isn’t required."},
     {t:"In a separate file next to each file you edit", why:"Git keeps everything together in one `.git` folder, not file by file."},
     {t:"In your computer’s recycle bin or trash", why:"The trash holds deleted files, not version history."}
   ]},
   {id:"t2u7-q04", lesson:"t2u7-l1", level:2, q:"Which command checks that Git is installed?", options:[
     {t:"`git --version`", ok:true, why:"It prints the installed version, or an error if Git isn’t found. On a Mac it also offers to install the developer tools."},
     {t:"`git install`", why:"There’s no such Git command; Git is installed with an installer or a package manager."},
     {t:"`git status`", why:"That describes a repository. Outside one it just reports that this isn’t a repository."},
     {t:"`github --check`", why:"Not a real command. GitHub is a website, not something you check from the terminal."}
   ]},
   {id:"t2u7-q05", lesson:"t2u7-l1", level:3, q:"Oluwaseun is about to make his first commits for a public project. He wants to keep his personal email private. What should he do before committing?", options:[
     {t:"Turn on “Keep my email addresses private” on GitHub and set his noreply address as `user.email`", ok:true, why:"Commits store the email publicly. The noreply address links commits to his account without exposing his real one."},
     {t:"Nothing: GitHub hides commit emails automatically", why:"The email recorded in a commit is visible to anyone who reads the history."},
     {t:"Leave `user.email` empty", why:"Git normally refuses to commit without an email (or guesses one from the computer’s name), and neither gives him a private address that links commits to his account."},
     {t:"Set it later; Git will update old commits", why:"Changing the setting affects only new commits. Old ones keep the address they were made with."}
   ]},
   {id:"t2u7-q06", lesson:"t2u7-l1", level:2, q:"What does `git config --global init.defaultBranch main` do?", options:[
     {t:"Makes new repositories start with a branch called `main`, matching GitHub", ok:true, why:"Without it, many Git versions name the first branch `master` and print a hint."},
     {t:"Renames every branch on GitHub to `main`", why:"It’s a local setting for new repositories only; it doesn’t touch GitHub."},
     {t:"Prevents anyone from creating other branches", why:"It only names the first branch; you can still create any branches you like."},
     {t:"Deletes the `master` branch in existing repositories", why:"It affects only repositories created afterwards with `git init`."}
   ]},
   {id:"t2u7-q07", lesson:"t2u7-l1", level:3, q:"Mei uses a school Chromebook. The Linux development environment option is greyed out. What’s the realistic plan?", options:[
     {t:"Her administrator has turned Linux off; she can follow the unit on GitHub’s website and with the exercises, and use Git on another computer when she can", ok:true, why:"Managed Chromebooks often block Linux. Everything in the unit can be learned by reading and through the website."},
     {t:"Use `sudo` in Chrome’s address bar to force it on", why:"`sudo` is a Linux command; it doesn’t exist in the browser and can’t override administrator policy."},
     {t:"Install Git for Windows on the Chromebook", why:"Windows installers don’t run on ChromeOS."},
     {t:"Git can’t be learned without installing it", why:"The concepts, the website and the exercises all work without a local Git."}
   ]},
   {id:"t2u7-q08", lesson:"t2u7-l1", level:2, q:"Which of these projects suits Git best?", options:[
     {t:"A website made of HTML, CSS and a few images", ok:true, why:"Text files are where Git shines: it can show exactly which lines changed."},
     {t:"A folder of 400 GB of holiday videos", why:"Git struggles with large binary files: it can’t show what changed, and every version stays in every copy."},
     {t:"A single photo you edit once a year", why:"Git can store it, but can’t show changes inside it; ordinary backups or cloud version history suit it better."},
     {t:"A video game save file that changes every second", why:"Constant binary changes are a poor fit for deliberate, message-based commits."}
   ]},
   {id:"t2u7-q09", lesson:"t2u7-l1", level:3, q:"Tomás says: “If every commit is a snapshot of the whole project, my repository will be 100 times bigger after 100 commits.” What’s the accurate reply?", options:[
     {t:"Not so: unchanged files are reused rather than stored again, and Git compresses what it stores", ok:true, why:"Snapshots only store new content; small projects’ whole histories are usually tiny."},
     {t:"He’s right, which is why you should commit rarely", why:"The premise is wrong; frequent small commits are good practice."},
     {t:"Git only stores the first and last versions", why:"Git keeps every commit; it just avoids storing identical content twice."},
     {t:"GitHub deletes old commits to save space", why:"Hosting services keep the full history you push."}
   ]},
   {id:"t2u7-q10", lesson:"t2u7-l1", level:1, q:"Which is a free GitHub app for Windows and macOS that does commits and pushes with buttons?", options:[
     {t:"GitHub Desktop", ok:true, why:"It’s GitHub’s own app for Windows and macOS, using ordinary Git repositories."},
     {t:"Git Bash", why:"Git Bash is a terminal that comes with Git for Windows; you type commands in it."},
     {t:"GitHub Pages", why:"Pages publishes websites from a repository; it isn’t a Git app."},
     {t:"Codeberg", why:"Codeberg is a hosting service like GitHub, not a desktop app."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u7-q11", lesson:"t2u7-l2", level:1, q:"What does `git add index.html` do?", options:[
     {t:"Copies the file’s current contents into the staging area for the next commit", ok:true, why:"It stages a snapshot of the file as it is now."},
     {t:"Makes a commit of `index.html`", why:"Only `git commit` makes a commit; `git add` prepares it."},
     {t:"Uploads `index.html` to GitHub", why:"Nothing goes to GitHub until you push."},
     {t:"Tells Git to save the file automatically from now on", why:"Git never saves automatically. If you edit again, you add again."}
   ]},
   {id:"t2u7-q12", lesson:"t2u7-l2", level:3, q:"Kenji stages `menu.html`, then edits it again, then runs `git commit -m \"Update menu\"`. What does the commit contain?", options:[
     {t:"The version of `menu.html` from when he ran `git add`", ok:true, why:"The commit takes what’s staged. The later edit stays uncommitted in the working tree."},
     {t:"The latest version, including the second edit", why:"The second edit was never staged, so it isn’t in the commit."},
     {t:"Nothing: the commit fails because the file changed", why:"Git commits the staged version without complaint and shows the newer edit as unstaged."},
     {t:"Both versions as separate files", why:"A commit holds one version of each file: the staged one."}
   ]},
   {id:"t2u7-q13", lesson:"t2u7-l2", level:2, q:"In a diff, what does a line starting with `+` mean?", options:[
     {t:"The line was added in the newer version", ok:true, why:"`+` lines are additions; `-` lines are removals; a changed line shows as one of each."},
     {t:"The line is important", why:"Diffs don’t rate importance; `+` only means added."},
     {t:"The line contains a number", why:"`+` is a marker at the start of the line, not about its content."},
     {t:"The line is unchanged context", why:"Unchanged context lines start with a space."}
   ]},
   {id:"t2u7-q14", lesson:"t2u7-l2", level:2, q:"Hana runs `git diff` and sees nothing, but she knows she changed `style.css`. What’s the most likely reason?", options:[
     {t:"She already staged the change; `git diff --staged` will show it", ok:true, why:"Plain `git diff` compares the working tree with the staging area, so staged changes don’t appear."},
     {t:"Git lost her change", why:"Git doesn’t lose changes; `git status` would show the file under “Changes to be committed”."},
     {t:"CSS files can’t be diffed", why:"CSS is text; Git diffs it like any other text file."},
     {t:"She needs to push first", why:"Diffs are local and have nothing to do with pushing."}
   ]},
   {id:"t2u7-q15", lesson:"t2u7-l2", level:1, q:"Which commit message is clearest?", options:[
     {t:"Add opening hours to home page", ok:true, why:"Short, specific, imperative: it completes “If applied, this commit will…”."},
     {t:"update", why:"Says nothing about what changed."},
     {t:"I changed some stuff in a few files today", why:"Vague, and in the past tense; the reader still doesn’t know what changed."},
     {t:"aaaaa", why:"Meaningless to anyone, including you in a month."}
   ]},
   {id:"t2u7-q16", lesson:"t2u7-l2", level:3, q:"Priya accidentally staged `notes.txt` along with her real changes. She wants to keep the file and its contents but leave it out of this commit. What should she run?", options:[
     {t:"`git restore --staged notes.txt`", ok:true, why:"It unstages the file and leaves its contents untouched in the working tree."},
     {t:"`git restore notes.txt`", why:"That discards unstaged edits in the working tree, not what she wants, and leaves the staged copy in place."},
     {t:"`git revert notes.txt`", why:"`git revert` undoes commits, not staging, and takes a commit, not a file name."},
     {t:"Delete `notes.txt` from her folder", why:"She wants to keep the file. Unstaging is enough."}
   ]},
   {id:"t2u7-q17", lesson:"t2u7-l2", level:2, q:"Why is `git revert` safer than `git reset --hard` for undoing a commit that others already have?", options:[
     {t:"Revert adds a new commit that reverses the change, keeping history intact; reset rewrites history and discards uncommitted work", ok:true, why:"Others’ copies stay consistent with a revert, and nothing uncommitted is thrown away."},
     {t:"Revert is faster", why:"Speed isn’t the point; the difference is what happens to history and your work."},
     {t:"Reset only works on GitHub", why:"Reset is a local Git command."},
     {t:"Revert deletes the commit completely so nobody can see it", why:"The opposite: the original commit stays in history, followed by the revert."}
   ]},
   {id:"t2u7-q18", lesson:"t2u7-l2", level:3, q:"Amara has an hour of unstaged, uncommitted edits across five files. A forum answer tells her to run `git reset --hard` to fix an unrelated problem. What will happen to her edits?", options:[
     {t:"They will be thrown away, with no undo", ok:true, why:"`--hard` makes the working tree and staging area match a commit; uncommitted work is lost. Commit or copy it first, or use a gentler command."},
     {t:"They’ll be kept, because reset only affects commits", why:"`--hard` specifically resets the working tree and staging area too."},
     {t:"Git will ask before deleting anything", why:"It doesn’t ask. That’s why it’s dangerous."},
     {t:"They’ll be moved into a new branch", why:"Nothing is moved; uncommitted changes are discarded."}
   ]},
   {id:"t2u7-q19", lesson:"t2u7-l2", level:2, q:"Which command shows commits one per line, newest first?", options:[
     {t:"`git log --oneline`", ok:true, why:"Each line shows a short hash and the message summary."},
     {t:"`git status --short`", why:"That lists changed files briefly, not commits."},
     {t:"`git diff --staged`", why:"That shows staged changes, not history."},
     {t:"`git show --all`", why:"`git show` displays one object in detail; it doesn’t list history one per line."}
   ]},
   {id:"t2u7-q20", lesson:"t2u7-l2", level:3, q:"Dmitri runs `git init` in his home folder by mistake, and now `git status` lists thousands of untracked files. What’s the right fix?", options:[
     {t:"Delete the `.git` folder that `git init` created in his home folder, and only that", ok:true, why:"Removing `.git` turns the folder back into an ordinary one; his files are untouched. Then run `git init` in the project folder."},
     {t:"Run `git add .` to tidy them up", why:"That would stage his entire home folder, the opposite of what he wants."},
     {t:"Delete all the untracked files", why:"Those are his real files. The problem is the misplaced `.git` folder, not the files."},
     {t:"Run `git reset --hard`", why:"There are no commits yet, and reset would not remove the repository anyway."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u7-q21", lesson:"t2u7-l3", level:1, q:"What is a branch in Git, under the hood?", options:[
     {t:"A movable label that points at a commit", ok:true, why:"A branch is tiny: a pointer that moves forward as you commit."},
     {t:"A full copy of the project folder", why:"No files are copied; your folder just changes to match when you switch."},
     {t:"A separate repository on GitHub", why:"Branches live inside a repository, locally as well as on GitHub."},
     {t:"A list of people allowed to edit", why:"Branches aren’t about permissions."}
   ]},
   {id:"t2u7-q22", lesson:"t2u7-l3", level:1, q:"Which command creates a branch called `gallery` and switches to it?", options:[
     {t:"`git switch -c gallery`", ok:true, why:"`-c` creates the branch, and `switch` moves you onto it. (`git checkout -b gallery` is the older equivalent.)"},
     {t:"`git branch -d gallery`", why:"`-d` deletes a branch."},
     {t:"`git merge gallery`", why:"That merges an existing branch into the current one."},
     {t:"`git init gallery`", why:"That would create a new repository in a folder called `gallery`."}
   ]},
   {id:"t2u7-q23", lesson:"t2u7-l3", level:3, q:"Ana is on `main` and runs `git merge events`. Which way does the work flow?", options:[
     {t:"From `events` into `main`, the branch she’s on", ok:true, why:"`git merge name` brings the named branch into the current branch."},
     {t:"From `main` into `events`", why:"It’s the other way round: you merge into the branch you’re on."},
     {t:"Both branches are deleted and a new one is made", why:"Merging doesn’t delete or create branches."},
     {t:"Only the file names are merged, not the contents", why:"A merge combines the actual changes in the commits."}
   ]},
   {id:"t2u7-q24", lesson:"t2u7-l3", level:2, q:"When does Git make a fast-forward merge?", options:[
     {t:"When the receiving branch has no new commits since the other branch started", ok:true, why:"Then Git can just move the label forward; no merge commit is needed."},
     {t:"When both branches have new commits", why:"That needs a merge commit with two parents."},
     {t:"When there’s a conflict", why:"Conflicts stop the merge until you resolve them; they’re unrelated to fast-forwarding."},
     {t:"Only on GitHub, never on your computer", why:"Fast-forwards happen locally whenever the history allows."}
   ]},
   {id:"t2u7-q25", lesson:"t2u7-l3", level:2, q:"In a conflicted file, what is between `<<<<<<< HEAD` and `=======`?", options:[
     {t:"Your current branch’s version of those lines", ok:true, why:"`HEAD` is where you are. The incoming branch’s version comes after `=======`."},
     {t:"The incoming branch’s version", why:"That’s between `=======` and `>>>>>>>`."},
     {t:"Git’s recommended answer", why:"Git doesn’t recommend; it shows both versions and leaves the choice to you."},
     {t:"Lines that are safe to delete", why:"They may be exactly what you want to keep. Only the marker lines must go."}
   ]},
   {id:"t2u7-q26", lesson:"t2u7-l3", level:3, q:"Lucía resolved a conflict, saved the file and ran `git commit`, but forgot to delete the `=======` line. Her page is published from `main`. What will visitors see?", options:[
     {t:"A line of equals signs appearing as text on the page", ok:true, why:"Git doesn’t check for leftover markers. Search for `<<<<<<<` and `=======` before committing."},
     {t:"Nothing: browsers hide conflict markers", why:"To a browser, the markers are ordinary text."},
     {t:"Git blocked the commit, so nothing changed", why:"Git doesn’t stop you committing files that contain markers."},
     {t:"An error page instead of her site", why:"HTML is forgiving; the page loads with the stray text in it."}
   ]},
   {id:"t2u7-q27", lesson:"t2u7-l3", level:3, q:"Kenji and Hana both edit `index.html` on separate branches: Kenji changes the heading, Hana changes the footer, 40 lines apart. What happens when the branches are merged?", options:[
     {t:"Git merges both changes automatically, because they touch different lines", ok:true, why:"Conflicts only arise when the same (or directly neighbouring) lines changed. Lines 40 apart are combined without asking."},
     {t:"A merge conflict, because they edited the same file", why:"Same file isn’t enough; Git merges different parts of a file without asking."},
     {t:"Only the later change survives", why:"Git keeps both changes."},
     {t:"Git refuses to merge files edited on two branches", why:"Merging changes from both branches is exactly what Git does."}
   ]},
   {id:"t2u7-q28", lesson:"t2u7-l3", level:2, q:"Which command cancels a merge that has stopped with conflicts, returning to the state before it began?", options:[
     {t:"`git merge --abort`", ok:true, why:"Git suggests it in `git status` during a conflicted merge."},
     {t:"`git branch -d main`", why:"Deleting a branch doesn’t cancel a merge, and you can’t delete the branch you’re on."},
     {t:"`git restore --staged .`", why:"That unstages files but leaves Git mid-merge."},
     {t:"`git push --force`", why:"That changes the remote and has nothing to do with cancelling a local merge."}
   ]},
   {id:"t2u7-q29", lesson:"t2u7-l3", level:3, q:"Sione switches from `new-design` to `main` and `design.css` disappears from his folder. What happened?", options:[
     {t:"The file exists only in `new-design`’s commits; switching back will bring it back", ok:true, why:"Switching makes the folder match the branch’s latest commit."},
     {t:"Git deleted the file permanently", why:"It’s safely stored in the branch’s commits."},
     {t:"The file moved to the trash", why:"Git doesn’t use the trash; the file is in the repository’s history."},
     {t:"He must restore it from GitHub", why:"It’s in his local repository; `git switch new-design` is enough."}
   ]},
   {id:"t2u7-q30", lesson:"t2u7-l3", level:2, q:"Which habit makes merge conflicts smaller and rarer?", options:[
     {t:"Keeping branches short-lived and merging `main` into them often", ok:true, why:"Small, frequent merges meet small conflicts early."},
     {t:"Reformatting every file before each commit", why:"Mass reformatting touches every line and causes conflicts with everyone."},
     {t:"Working on one long branch for months", why:"The longer branches drift apart, the bigger the conflicts."},
     {t:"Never telling teammates which files you’re editing", why:"Talking about who edits what prevents many conflicts."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u7-q31", lesson:"t2u7-l4", level:1, q:"What is `origin` in Git?", options:[
     {t:"The usual name for the main remote, often the repository you cloned from", ok:true, why:"It’s a conventional name, set automatically by `git clone`."},
     {t:"The first commit in a repository", why:"That’s the root commit; `origin` names a remote."},
     {t:"A special GitHub-only command", why:"It’s an ordinary remote name; any hosting service works."},
     {t:"The original author of the project", why:"`origin` refers to a location, not a person."}
   ]},
   {id:"t2u7-q32", lesson:"t2u7-l4", level:2, q:"What’s the difference between `git fetch` and `git pull`?", options:[
     {t:"`fetch` downloads new commits without changing your files; `pull` downloads them and merges them into your branch", ok:true, why:"`pull` is a fetch followed by a merge."},
     {t:"They are identical", why:"`fetch` never changes your branch or files; `pull` does."},
     {t:"`fetch` uploads and `pull` downloads", why:"Uploading is `push`. Both `fetch` and `pull` download."},
     {t:"`pull` only works on GitHub Desktop", why:"`git pull` is a standard Git command."}
   ]},
   {id:"t2u7-q33", lesson:"t2u7-l4", level:3, q:"Git asks Fatima for a password when she pushes over HTTPS. She has no credential manager set up. What should she type?", options:[
     {t:"A personal access token she created on GitHub", ok:true, why:"GitHub no longer accepts account passwords for Git; a token goes where the password prompt asks."},
     {t:"Her GitHub account password", why:"Password sign-in for Git was removed; it will fail."},
     {t:"Her email password", why:"Never type another service’s password there; it wouldn’t work and would expose it."},
     {t:"Nothing: press Enter to skip", why:"The push would fail without credentials."}
   ]},
   {id:"t2u7-q34", lesson:"t2u7-l4", level:2, q:"Which part of an SSH key pair do you add to your GitHub settings?", options:[
     {t:"The public key, in the file ending `.pub`", ok:true, why:"The public half can be shared; GitHub uses it to recognise your private key."},
     {t:"The private key", why:"The private key must never leave your computer."},
     {t:"Both halves", why:"Only the public half goes to GitHub."},
     {t:"Your passphrase", why:"The passphrase protects the private key on your computer; you never give it to GitHub."}
   ]},
   {id:"t2u7-q35", lesson:"t2u7-l4", level:3, q:"Amara’s push is rejected with “the remote contains work that you do not have locally”. A colleague says “just use `--force`”. What’s the right response?", options:[
     {t:"Pull first (resolving any conflicts), then push; `--force` would delete the other person’s commits from the shared branch", ok:true, why:"The rejection protects someone else’s work. Pulling combines it with hers."},
     {t:"Use `--force`; it’s the standard fix", why:"Force-pushing a shared branch replaces its history and removes others’ commits from it."},
     {t:"Delete the repository on GitHub and push again", why:"That destroys everyone’s shared history and settings."},
     {t:"Make a new repository for her changes", why:"Unnecessary; a pull then push solves it."}
   ]},
   {id:"t2u7-q36", lesson:"t2u7-l4", level:2, q:"Before pushing an existing local repository to a new GitHub repository, why should the GitHub repository be created empty (no README)?", options:[
     {t:"Otherwise GitHub has a commit your local history lacks, and the first push is rejected until you combine the two histories", ok:true, why:"An empty remote can simply receive your history."},
     {t:"READMEs aren’t allowed on repositories that receive pushes", why:"You can add a README later; it just shouldn’t exist before the first push from a separate history."},
     {t:"Empty repositories are faster", why:"Speed isn’t the issue; matching histories is."},
     {t:"GitHub deletes the README when you push", why:"GitHub doesn’t delete it; the push is refused instead."}
   ]},
   {id:"t2u7-q37", lesson:"t2u7-l4", level:1, q:"How do you open github.dev for a repository?", options:[
     {t:"Press the full stop (.) key on the repository page, or change `github.com` to `github.dev` in the address", ok:true, why:"Both open the browser version of the VS Code editor."},
     {t:"Install it from an app store", why:"It runs in the browser; there’s nothing to install."},
     {t:"Run `git dev` in a terminal", why:"There’s no such command."},
     {t:"It only opens from GitHub Desktop", why:"It’s opened from the website."}
   ]},
   {id:"t2u7-q38", lesson:"t2u7-l4", level:3, q:"Tomás made 5 commits to his Pages site on his laptop, previewing each locally, but the live site hasn’t changed. What did he most likely forget?", options:[
     {t:"`git push`: commits stay on his laptop until he pushes them", ok:true, why:"Pages only sees commits that reach the publishing branch on GitHub."},
     {t:"To turn Pages off and on again", why:"Pages is set up; it just hasn’t received any new commits."},
     {t:"To delete the old site first", why:"Each deploy replaces the site; nothing needs deleting."},
     {t:"To make the commits on GitHub’s website instead", why:"Pushed commits deploy exactly like website commits."}
   ]},
   {id:"t2u7-q39", lesson:"t2u7-l4", level:2, q:"Which is the safest way to handle a personal access token?", options:[
     {t:"Give it only the access it needs and an expiry date, and keep it in a password manager", ok:true, why:"Limited, expiring tokens kept securely reduce the damage if one leaks."},
     {t:"Save it in a text file in the repository so it’s always handy", why:"Anything in a repository can become public, and history keeps it."},
     {t:"Share it with teammates so they can push", why:"A token acts as you. Add teammates as collaborators instead."},
     {t:"Use one token with full access forever", why:"Unlimited, permanent tokens are the most dangerous if leaked."}
   ]},
   {id:"t2u7-q40", lesson:"t2u7-l4", level:3, q:"Kenji’s `git pull` stops with “You have divergent branches and need to specify how to reconcile them.” What’s going on, and what’s a simple fix?", options:[
     {t:"Both he and the remote have new commits; setting `git config --global pull.rebase false` makes pulls merge them", ok:true, why:"Git wants to know how to combine diverged histories. Merging is the beginner-friendly choice."},
     {t:"His repository is corrupted and must be cloned again", why:"Nothing is broken; Git is asking a question."},
     {t:"He must `git push --force` first", why:"That would overwrite the remote’s commits."},
     {t:"His internet connection dropped", why:"The fetch worked; the message is about combining histories."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u7-q41", lesson:"t2u7-l5", level:1, q:"What is a pull request?", options:[
     {t:"A request, on GitHub, to merge the commits on one branch into another, with a page for discussion and review", ok:true, why:"It proposes a merge and gives people a place to review it first."},
     {t:"The `git pull` command run on GitHub", why:"Despite the name, a PR isn’t a pull; it asks the owner to merge your work."},
     {t:"A request to download a repository", why:"That’s cloning."},
     {t:"A bug report", why:"That’s an issue. A PR contains changes."}
   ]},
   {id:"t2u7-q42", lesson:"t2u7-l5", level:2, q:"When do you need a fork rather than just a branch?", options:[
     {t:"When you want to contribute to a repository you don’t have permission to push to", ok:true, why:"Your fork is a copy you can push to; you then open a pull request to the original."},
     {t:"Whenever you start any new feature", why:"In a repository you can push to, a branch is enough."},
     {t:"When you want to work offline", why:"A clone handles offline work; forks live on GitHub."},
     {t:"When you want to delete a repository", why:"Forking has nothing to do with deleting."}
   ]},
   {id:"t2u7-q43", lesson:"t2u7-l5", level:2, q:"A PR description says `Fixes #8`. What happens when the PR is merged into the default branch?", options:[
     {t:"Issue 8 is closed automatically", ok:true, why:"Closing keywords link the PR to the issue and close it on merge."},
     {t:"Commit number 8 is reverted", why:"`#8` refers to issue or PR number 8, not a commit."},
     {t:"Eight files are fixed", why:"It’s a reference to issue 8, not a count."},
     {t:"Nothing; it’s just a comment", why:"GitHub recognises closing keywords such as “Fixes”."}
   ]},
   {id:"t2u7-q44", lesson:"t2u7-l5", level:3, q:"Ana committed `.env` with an API key last month, and only now adds `.env` to `.gitignore`. Is the key now protected?", options:[
     {t:"No: `.gitignore` doesn’t affect already-tracked files, and the key is in the history. She must revoke the key, then `git rm --cached .env` and commit", ok:true, why:"Revocation stops misuse; untracking stops future commits of the file."},
     {t:"Yes: ignoring the file removes it from history", why:"Ignoring never changes history, and doesn’t even stop tracking an already-tracked file."},
     {t:"Yes, as long as the repository is private", why:"Anyone with access, and any clone, still has the key. It should be changed."},
     {t:"No, but deleting the repository’s README fixes it", why:"The README is unrelated."}
   ]},
   {id:"t2u7-q45", lesson:"t2u7-l5", level:2, q:"Which `.gitignore` line ignores a whole folder called `drafts`?", options:[
     {t:"`drafts/`", ok:true, why:"A trailing slash matches a folder (and everything in it)."},
     {t:"`#drafts`", why:"`#` starts a comment, so this line does nothing."},
     {t:"`!drafts`", why:"`!` re-includes a path that an earlier pattern excluded; it doesn’t ignore it."},
     {t:"`drafts.txt`", why:"That matches a file named `drafts.txt`, not the folder."}
   ]},
   {id:"t2u7-q46", lesson:"t2u7-l5", level:3, q:"A reviewer writes on Priya’s PR: “This is wrong.” Which rewrite would be most helpful?", options:[
     {t:"“The link points to `Events.html`, but the file is `events.html`, so it will 404 on Pages. Could you change the capital E?”", ok:true, why:"Specific, explains the consequence, and suggests a fix, kindly."},
     {t:"“This is very wrong.”", why:"Stronger, but no more useful: it still doesn’t say what or why."},
     {t:"“Did you even test this?”", why:"Unkind and unspecific. Reviews are about the change, not the person."},
     {t:"Approving without comment", why:"The problem would go live; a review should point it out."}
   ]},
   {id:"t2u7-q47", lesson:"t2u7-l5", level:3, q:"Dmitri finds an access token committed to his public repository three months ago. What should he do first?", options:[
     {t:"Revoke the token on GitHub (or the service that issued it) and create a new one", ok:true, why:"Revoking or rotating comes first: a revoked token is useless to anyone who copied it."},
     {t:"Rewrite history to remove it, then carry on using the token", why:"After three months in public, assume it has been copied. Removing it from history doesn’t stop someone who already has it."},
     {t:"Make the repository private and keep the token", why:"Anyone who saw or cloned it still has it."},
     {t:"Add a comment asking people not to use it", why:"A request doesn’t stop misuse; revocation does."}
   ]},
   {id:"t2u7-q48", lesson:"t2u7-l5", level:2, q:"A public GitHub repository has no LICENSE file. What may other people do with its code?", options:[
     {t:"View and fork it on GitHub, but not reuse it elsewhere, because normal copyright applies", ok:true, why:"GitHub’s terms allow viewing and forking; reuse needs a licence."},
     {t:"Anything, because it’s public", why:"Public means visible, not licensed for reuse."},
     {t:"Nothing at all, not even view it", why:"Public repositories can be viewed and forked on GitHub."},
     {t:"Reuse it only if they credit the author", why:"Attribution conditions come from a licence; without one, there’s no permission to reuse."}
   ]},
   {id:"t2u7-q49", lesson:"t2u7-l5", level:1, q:"Which item is NOT usually needed in a good bug report (issue)?", options:[
     {t:"Your GitHub password, so the maintainer can check your account", ok:true, why:"Never share passwords. Everything else listed is useful in a report."},
     {t:"Steps to reproduce the problem", why:"Useful: steps let someone else see the bug for themselves."},
     {t:"What you expected and what actually happened", why:"Useful: the gap between the two is the bug."},
     {t:"The exact error message or a screenshot", why:"Useful: exact messages save a lot of guessing."}
   ]},
   {id:"t2u7-q50", lesson:"t2u7-l5", level:2, q:"Which file is best listed in `.gitignore`?", options:[
     {t:"`Thumbs.db`, made automatically by Windows", ok:true, why:"Operating-system clutter means nothing to the project and changes constantly."},
     {t:"`index.html`", why:"Your site’s home page belongs in the repository."},
     {t:"`.gitignore`", why:"Commit it, so everyone shares the same ignore rules."},
     {t:"`LICENSE`", why:"The licence should be committed so everyone can read it."}
   ]}
  ]
});
