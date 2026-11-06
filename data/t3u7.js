/* Track 3 · Unit 7 · R basics */
ICA.addUnit({
  id:"t3u7", track:"t3", n:7, title:"R basics", icon:"🧮",
  blurb:"R is a free language made for working with data. Learn the ways to run it (including right here in the Data Lab), store values in objects and vectors, call functions, build data frames, read a CSV file, pick rows and count, then summarise, compare groups, draw base-R charts and fit a first straight-line model.",
  goals:[
    "Say what R, RStudio, Posit Cloud and webR are, and run R code in the Data Lab, on a computer, or in a browser",
    "Calculate, store values in objects with `<-`, build vectors with `c()`, call functions with named arguments, and read R’s most common error messages",
    "Build a data frame, inspect it with `str()`, `head()` and `summary()`, and pick columns with `$` and rows and columns with `[ , ]`",
    "Read a CSV file with `read.csv()`, check what arrived, pick rows with a condition, count with `table()`, `sum()` and `mean()`, and handle `NA`",
    "Summarise and compare groups with `tapply()` and `aggregate()`, draw histograms, boxplots, scatterplots and bar charts, and use `cor()` and `lm()` with care"
  ],
  read:[
    {book:"r4ds", where:"Introduction (“Prerequisites” and “Running R code”); Chapter 2, “Workflow: basics”; Chapter 6, “Workflow: scripts and projects”; Chapter 27, “A field guide to base R”", note:"The main R text. Most of the book teaches the tidyverse packages (this track’s Unit 8); the chapters listed here are about R itself and base R."},
    {book:"dcss", where:"R for Social Scientists: “Before we Start”, “Introduction to R” and “Starting with Data”", note:"Hands-on, gentle and built around a real (simplified) survey. Its “Starting with Data” episode reads the file with readr’s `read_csv()`; this unit uses base R’s `read.csv()`, which works the same way for a simple file."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u7-l1", title:"Meet R, and where to run it", minutes:50,
   hook:{q:"You type `2 + 3` into R and press Enter. What does R show?", options:["5","[1] 5","2 + 3 = 5","Nothing until you save the file"], answer:1, reveal:"R shows `[1] 5`. The answer is 5; the `[1]` in front is R saying “this line starts with item number 1”. R treats almost every result as a sequence of values (even a single number), and those bracketed numbers help you find your place when an answer runs over several lines. This lesson starts there: what R is, and the different places you can type R code, including this app’s Data Lab."},
   goals:[
     "Say what R is, what “base R” and packages are, and why people analyse data with code",
     "Tell apart R itself, RStudio, Posit Cloud and webR, and say where your code runs with each",
     "Find your way around RStudio’s four panes, and know what the `>` and `+` prompts mean",
     "Run R code in the Data Lab and use its ▶ Run, Check, Hint, Show an answer and Start again buttons"
   ],
   learn:[
    {h:"What R is", body:[
      {lead:"R is a free programming language, and the program that runs it, built especially for statistics, data and charts."},
      "A **programming language** is a precise way of writing instructions for a computer. Most languages are general-purpose; [[r-language|R]] was designed by statisticians for working with data. Its everyday words are things like `mean()`, `table()`, `hist()` and `lm()`, so a short line of R often does what would take many clicks in a spreadsheet.",
      "The name means two things at once: the **language** you write, and the **software** that reads it and carries it out. R was created by Ross Ihaka and Robert Gentleman at the University of Auckland, New Zealand, building on an older statistics language called S. Version 1.0.0 came out in February 2000. Today a volunteer group, the **R Core Team**, looks after it, and it is free and open-source software (licensed under the GNU GPL): anyone can download it, use it for any purpose, and read its source code.",
      "When people say **[[base-r|base R]]** they mean R as it arrives when you install it, with a set of standard packages already included (for statistics, charts and reading files). Everything in this unit is base R. Thousands of extra **[[r-package|packages]]**, made by people all over the world, add more functions. They live on **[[cran|CRAN]]**, the Comprehensive R Archive Network, the same place you download R itself. Unit 8 uses one famous family of packages, the **[[tidyverse-term|tidyverse]]**.",
      {table:[
        ["Word","What it means"],
        ["R","The language and the program that runs it"],
        ["Base R","R plus the standard packages that come with it"],
        ["Package","An add-on: extra functions, data and help pages"],
        ["CRAN","The official archive where R and most packages are downloaded"]
      ]},
      {key:"R is a language and a program for data. Base R already does a lot; packages add more."}
    ]},
    {h:"Why use code instead of clicking?", body:[
      "If you have used a spreadsheet (Track 1, Unit 9), you already know you can sort, filter and chart data by pointing and clicking. So why type code?",
      "The big reason is **repeatability**. In a spreadsheet, the steps you took (which column you sorted, which rows you deleted) usually leave no record. In R, the steps *are* the record. Save them in a file called a **[[r-script|script]]**, and you, a colleague or a reviewer can run the whole analysis again, read every step, and spot mistakes. Data Carpentry’s R lesson makes this point first: if you collect more data next month, you don’t have to remember which buttons you clicked, you just run the script again.",
      {table:[
        ["","Spreadsheet","R script"],
        ["Steps you took","Mostly invisible","Written down, line by line"],
        ["Redo it with new data","Repeat by hand","Run the script again"],
        ["Raw data","Easy to overwrite by accident","Read in, never changed"],
        ["Large files","Capped (Excel: 1,048,576 rows per sheet)","Limited mainly by your computer’s memory"]
      ]},
      "R also brings a huge toolbox of statistical methods and charts, all free. It is used in universities, public health, government statistics offices, newsrooms and businesses.",
      "To be fair, there is a learning curve. Typing `mean(walks$minutes)` takes more effort the first time than clicking a button, and R is fussy about spelling and capitals. This unit goes slowly, and every error message you meet is explained."
    ]},
    {h:"Four ways to run R", body:[
      "R code always needs R itself to run it. What changes is the window you type into, and **which computer** does the work.",
      {table:[
        ["Way","Where the code runs","Good for"],
        ["**R** on its own","Your computer","A quick calculation; it’s plain but complete"],
        ["**RStudio Desktop** (with R)","Your computer","Everyday work: scripts, files, charts and help in one window"],
        ["**Posit Cloud**","Posit’s servers, through your browser","No installing; school computers and Chromebooks"],
        ["**webR**, in this app’s **Data Lab**","Inside your browser, on your device","Phones and tablets; practice with a checker"]
      ]},
      "**[[rstudio|RStudio]]** is an **[[ide|IDE]]** (integrated development environment): a program that wraps R in a friendlier window, with an editor for scripts, a list of your objects, a file browser, a chart viewer and help pages. It is free, made by a company called **Posit** (which was itself called RStudio until 2022). RStudio needs R: you install R first, then RStudio, and RStudio starts R for you in the background.",
      "**[[posit-cloud|Posit Cloud]]** runs RStudio on Posit’s computers. You sign in with a web browser and get the same RStudio window, with nothing to install.",
      "**[[webr|webR]]** is a version of R rebuilt in **[[webassembly|WebAssembly]]**, a format that lets programs run inside a web page. The R code runs on your own device, inside the browser, without a server. This app’s **Data Lab** uses webR to run base R 4.6.",
      {fig:'<svg viewBox="0 0 340 480"><defs><marker id="t3u7a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="20">1. RStudio Desktop</text><rect class="d-panel" x="10" y="30" width="320" height="104" rx="10" stroke-width="1.5"/><text class="s" x="22" y="50">your computer</text><rect class="d-lup" x="24" y="60" width="130" height="58" rx="8" stroke-width="2"/><text x="89" y="86" text-anchor="middle">RStudio</text><text class="s" x="89" y="104" text-anchor="middle">the window</text><rect class="d-gold" x="190" y="60" width="124" height="58" rx="8" stroke-width="2"/><text x="252" y="86" text-anchor="middle">R</text><text class="s" x="252" y="104" text-anchor="middle">runs the code</text><path class="d-ink" d="M156,89 L186,89" stroke-width="2" marker-end="url(#t3u7a1)"/><text x="10" y="168">2. Posit Cloud</text><rect class="d-panel" x="10" y="178" width="120" height="104" rx="10" stroke-width="1.5"/><text class="s" x="20" y="198">your device</text><rect class="d-lup" x="22" y="210" width="96" height="58" rx="8" stroke-width="2"/><text x="70" y="236" text-anchor="middle">browser</text><text class="s" x="70" y="254" text-anchor="middle">shows RStudio</text><rect class="d-panel" x="170" y="178" width="160" height="104" rx="10" stroke-width="1.5"/><text class="s" x="180" y="198">Posit’s servers</text><rect class="d-gold" x="182" y="210" width="136" height="58" rx="8" stroke-width="2"/><text x="250" y="236" text-anchor="middle">RStudio + R</text><text class="s" x="250" y="254" text-anchor="middle">run the code</text><path class="d-ink" d="M120,228 L178,228" stroke-width="2" marker-end="url(#t3u7a1)"/><path class="d-ink" d="M180,252 L122,252" stroke-width="2" marker-end="url(#t3u7a1)"/><text class="s" x="150" y="220" text-anchor="middle">internet</text><text x="10" y="316">3. Data Lab (webR)</text><rect class="d-panel" x="10" y="326" width="320" height="104" rx="10" stroke-width="1.5"/><text class="s" x="22" y="346">your device, inside one web page</text><rect class="d-lup" x="24" y="356" width="130" height="58" rx="8" stroke-width="2"/><text x="89" y="382" text-anchor="middle">editor</text><text class="s" x="89" y="400" text-anchor="middle">you type here</text><rect class="d-sage" x="190" y="356" width="124" height="58" rx="8" stroke-width="2"/><text x="252" y="382" text-anchor="middle">webR</text><text class="s" x="252" y="400" text-anchor="middle">R in WebAssembly</text><path class="d-ink" d="M156,385 L186,385" stroke-width="2" marker-end="url(#t3u7a1)"/><text class="s" x="170" y="452" text-anchor="middle">Same R language in all three;</text><text class="s" x="170" y="468" text-anchor="middle">only the place it runs changes.</text></svg>', alt:"Three panels. RStudio Desktop: on your computer, RStudio sends code to R. Posit Cloud: your browser shows RStudio, which runs with R on Posit’s servers, over the internet. Data Lab: inside one web page on your device, the editor sends code to webR.", cap:"The same R code can run on your computer, on Posit’s servers, or inside your browser."},
      {key:"You always write the same R language. The choice is about convenience: what you can install, which device you’re on, and where your data is allowed to go."}
    ]},
    {h:"A tour of RStudio", body:[
      "When you open RStudio, you see up to four **panes** (you can rearrange them under **Tools → Global Options → Pane Layout**). Data Carpentry describes the default layout like this:",
      {table:[
        ["Pane","Where","What it’s for"],
        ["**Source**","Top left","Your scripts: files of R code you save and rerun"],
        ["**Console**","Bottom left","Where R runs. Type a line, press Enter, see the result"],
        ["**Environment / History**","Top right","The objects you have made, and past commands"],
        ["**Files / Plots / Packages / Help**","Bottom right","Your folder, your charts, add-ons and help pages"]
      ]},
      "The Source pane only appears once you open a script (**File → New File → R Script**). Until then the Console fills the left side.",
      "**The console and its prompts.** The **[[r-console|console]]** shows a `>` sign, called the **prompt**: R is ready. Type `2 + 3`, press [[kbd:Enter]], and R answers `[1] 5`, then shows `>` again. If you see `+` instead, R thinks your command isn’t finished, usually because a bracket or a quote hasn’t been closed. Finish the line, or press [[kbd:Esc]] to cancel it and start again.",
      "**Scripts.** Lines typed in the console are gone when you close RStudio. For anything you want to keep, type in a script and save it with a name ending in `.R`, such as `walks.R`. To run the line your cursor is on (or the lines you’ve selected), press [[kbd:Ctrl]] + [[kbd:Enter]] (on a Mac, [[kbd:Cmd]] + [[kbd:Return]]). The line is sent to the console and runs there.",
      {tip:"RStudio has a shortcut for R’s arrow `<-`, which you’ll use constantly from the next lesson: [[kbd:Alt]] + [[kbd:-]] (Option + minus on a Mac). It even adds the spaces around it."},
      "Later in the unit you will meet **RStudio projects**, which keep a piece of work’s data, scripts and charts together in one folder."
    ]},
    {h:"Posit Cloud: RStudio in a browser", body:[
      "[[posit-cloud|Posit Cloud]] gives you RStudio in a web page. It’s useful when you can’t install software (a school or library computer, many Chromebooks) or when you want to share a project with a class.",
      {ol:[
        "Go to **posit.cloud** and choose **Sign Up** to make a free account (or **Log In**).",
        "Open **Your Workspace** from the menu on the left (tap the menu icon if it’s hidden).",
        "Choose **New Project → New RStudio Project**. After a short wait, the familiar RStudio window opens.",
        "Give the project a name: open its **Settings** (the gear icon at the top of the project) and edit the name under **Info**."
      ]},
      "**The free plan has limits.** Posit Cloud counts **compute hours**. Its documentation gives the formula: (GB of memory + number of processors) ÷ 2 × hours. A new project gets 1 GB of memory and 1 processor by default, so one hour with a project open uses about one compute hour. A project you leave idle is suspended after 15 minutes, and those idle minutes still count. The free plan includes a limited number of compute hours each month, plus other limits; the exact numbers are on **posit.cloud/plans**, and they have changed over the years, so check there.",
      {warn:"With Posit Cloud, your files are stored on Posit’s servers. That’s fine for practice data and open data. Don’t upload personal or confidential data (health records, people’s names and addresses) unless your organisation has agreed it can go there. Track 4, Unit 9 covers {{anonymisation|anonymising data}}."},
      "Posit Cloud opens in a phone’s browser, but RStudio was designed for bigger screens and a keyboard. On a phone it is cramped; on a tablet with a keyboard it works much better."
    ]},
    {h:"The Data Lab: R in this app", body:[
      "The **Data Lab** (in **Labs**) runs base R inside the page with webR, so it works on a phone, a tablet or a computer with nothing to install, and nothing you type leaves your device. The first time you open an R challenge, it downloads R (up to 46 MB, saved for next time), which can take a while on a slow connection. A line under the buttons says when R is ready.",
      "Each R challenge gives you a task, an editor and a row of buttons:",
      {table:[
        ["Button","What it does"],
        ["**▶ Run**","Runs your code and shows what it prints under **Output**; any chart appears under the output"],
        ["**Check**","Runs your code and tests the objects it makes. In most challenges that read a data file, it then runs your code again on a second version of the file with different numbers, so typed-in answers don’t pass"],
        ["**Hint**","Shows the next hint, one at a time"],
        ["**Show an answer**","Shows one correct answer and why it works"],
        ["**Start again**","Puts back the challenge’s starting code"]
      ]},
      "Above the editor, some challenges list **Files in R’s folder**, such as `survey.csv`: tap one to look inside before you read it with R. A row of symbol keys (`<-`, `$`, `\"`, brackets, `|>` and more) saves hunting on a phone keyboard. On a computer, [[kbd:Ctrl]] + [[kbd:Enter]] runs the code too.",
      {warn:"The Data Lab has **base R only**. Packages such as [[dplyr|dplyr]] and [[ggplot2|ggplot2]] (Unit 8) can’t be installed there; use R on a computer or Posit Cloud for those. (webR itself can load many packages, but this lab includes only base R.)"},
      "**Which version?** A new version of R (4.4, 4.5, 4.6…) comes out once a year, usually in spring, with two or three bug-fix releases in between, such as 4.6.1 and 4.6.2. Type `R.version.string` to see yours. Anything from R 4.1 onwards runs every example in this unit."
    ]}
   ],
   try:[
    {id:"t3u7-l1-x1", type:"mcq", q:"R answers `[1] 5` to `2 + 3`. What does the `[1]` mean?", options:[
      {t:"The first value on this line is item number 1 of the result", ok:true, why:"R treats results as a sequence of values. `[1]` labels the position of the first value shown on that line; long results get `[13]`, `[25]` and so on at the start of later lines."},
      {t:"It’s the first answer R has given since it started", why:"R doesn’t number its answers. Every result starts with `[1]`, however many you’ve asked for."},
      {t:"The answer has one decimal place", why:"The brackets have nothing to do with rounding; they count positions."},
      {t:"R is warning that the answer might be wrong", why:"Warnings in R start with the word “Warning”. `[1]` is a normal part of the output."}
    ]},
    {id:"t3u7-l1-x2", type:"sort", q:"Where does the R code actually run?", buckets:["On your own device","On someone else’s computer (a server)"], items:[
      {t:"R and RStudio Desktop installed on a laptop", b:0, why:"Both programs are on the laptop, so the laptop does the work."},
      {t:"An RStudio project in Posit Cloud", b:1, why:"Your browser only shows the RStudio window; R runs on Posit’s servers."},
      {t:"A challenge in this app’s Data Lab", b:0, why:"webR runs R inside the browser on your device. No server runs your code."},
      {t:"R started by typing `R` in a Chromebook’s Linux Terminal", b:0, why:"The Linux development environment is on the Chromebook itself."},
      {t:"A university’s RStudio Server that you sign in to", b:1, why:"RStudio Server runs on the university’s computer; you see it in a browser."}
    ]},
    {id:"t3u7-l1-x3", type:"match", q:"Match each RStudio pane to its job.", pairs:[
      ["Console","Runs commands as you type them and shows the results","The console is R itself, waiting at the `>` prompt."],
      ["Source","Holds scripts you save and rerun","The Source pane is the editor for `.R` files."],
      ["Environment","Lists the objects you have created","Each object you store appears here with a preview of its value."],
      ["Plots","Shows the charts your code draws","Charts appear in the bottom-right pane’s Plots tab, where you can also export them."]
    ]},
    {id:"t3u7-l1-x4", type:"mcq", q:"Kenji types `mean(c(4, 8, 6)` into the console and presses Enter. Instead of an answer, the console shows `+`. What’s going on?", options:[
      {t:"R is waiting for the rest of the command, because a bracket isn’t closed", ok:true, why:"There are two `(` but only one `)`. The `+` prompt means “carry on”. Type `)` and press Enter, or press Esc to cancel and retype."},
      {t:"R is adding the numbers together", why:"`+` here is a prompt, not the plus operator. R hasn’t run anything yet."},
      {t:"R has crashed and needs restarting", why:"Nothing has gone wrong with R; it just needs a complete command."},
      {t:"The answer is positive", why:"R shows results after `[1]`. A `+` at the start of the line is a prompt."}
    ]},
    {id:"t3u7-l1-x5", type:"order", q:"Put the steps for setting up R and RStudio on a computer in order.", items:[
      {t:"Download and install R from CRAN", why:"RStudio needs R to be there first, so R comes first."},
      {t:"Download and install RStudio Desktop from Posit", why:"Once R is installed, RStudio can find it."},
      {t:"Open RStudio (not R)", why:"RStudio starts R for you in the background, so this is the one to open from now on."},
      {t:"Check the console shows the R version, then type `2 + 3`", why:"The welcome message names the R version; a quick sum shows everything works."}
    ]},
    {id:"t3u7-l1-x6", type:"mcq", q:"Which of these can you do in this app’s Data Lab? Choose all that apply.", options:[
      {t:"Calculate a mean with `mean()`", ok:true, why:"`mean()` is part of base R, which the lab has."},
      {t:"Read the lab’s `survey.csv` with `read.csv()`", ok:true, why:"`read.csv()` is base R, and challenges list their files above the editor."},
      {t:"Draw a histogram with `hist()`", ok:true, why:"Base R charts work; they appear under the output."},
      {t:"Load ggplot2 with `library(ggplot2)`", why:"ggplot2 is a package that isn’t in the lab, which has base R only. Use R on a computer or Posit Cloud for it (Unit 8)."},
      {t:"Use dplyr’s `filter()`", why:"dplyr isn’t available in the lab either. Its base-R cousin `subset()` is, and Lesson 4 teaches it."}
    ]}
   ],
   apply:{intro:"Run your first R code, then (optionally) set R up on a computer or in Posit Cloud. Everything in this unit can be done in the Data Lab on a phone.", tasks:[
    {t:"Run R in the Data Lab", how:[
      "Open **Labs → Data Lab** and choose the R challenge **Store and calculate**. Wait until the line under the buttons says R is ready (the first time, R downloads up to 46 MB).",
      "Delete the starting code (or add below it), type `2 + 3` and press **▶ Run**. You should see `[1] 5` under **Output**.",
      "Try `R.version.string`, then `10 / 4`, then `2 ^ 10`. Each answer appears under the one before.",
      "Now do the challenge itself if you like (Lesson 2 teaches it), or press **Start again** to put the starting code back."
    ], write:"My R version… What `2 ^ 10` gave…"},
    {t:"Optional: install R and RStudio on a computer", how:{
      win:["Go to **cloud.r-project.org** (CRAN). Choose **Download R for Windows**, then **base**, then the download link for the current version (R 4.6.x).","Open the downloaded `.exe` file and accept the default choices.","Go to **posit.co/download/rstudio-desktop** and download RStudio Desktop for Windows. Open the installer and accept the defaults.","Open **RStudio** from the Start menu. The Console’s first line names your R version. Type `2 + 3` and press Enter."],
      mac:["Go to **cloud.r-project.org** (CRAN) and choose **Download R for macOS**.","Pick the installer that matches your Mac: the **arm64** `.pkg` for Apple silicon (M-series chips) or the **x86_64** one for Intel. To check, open the Apple menu → **About This Mac** and look for **Chip** or **Processor**. The CRAN page also lists the macOS versions each installer needs.","Open the `.pkg` and follow the installer.","Go to **posit.co/download/rstudio-desktop**, download RStudio for macOS, open the `.dmg` and drag RStudio into **Applications**.","Open **RStudio** from Applications. The Console names your R version. Type `2 + 3` and press Return."],
      chromeos:["Turn on Linux: select the time at the bottom right, then **Settings → About ChromeOS → Developers**, and next to **Linux development environment** select **Set up**. (On a school or work Chromebook this may be blocked; use Posit Cloud or the Data Lab instead.)","Open the **Terminal** app and type `sudo apt update`, then `sudo apt install r-base`. `sudo` runs a command with administrator rights, which installing software needs (Track 2, Unit 6 explains it). Type `y` if asked.","Type `R` to start R in the Terminal. Try `2 + 3`. To leave, type `q()` and answer `n` to “Save workspace image?”. This R comes from Debian and may be older than CRAN’s latest; anything from R 4.1 onwards works for this unit.","Optional: RStudio Desktop has a Linux installer (a `.deb` file) at **posit.co/download/rstudio-desktop**, which you can double-click in the Files app to install. It is built only for Intel/AMD (x86_64) processors and for particular Debian and Ubuntu versions, so on many Chromebooks (including those with ARM processors) it won’t install; then keep using R in the Terminal, Posit Cloud or the Data Lab."],
      phone:["There’s no official R app for iPhone or Android, and you don’t need one: use the **Data Lab** in this app.","iPhone and Android: you can also open **posit.cloud** in your browser (Safari, Chrome or another) and sign up. It works, but RStudio is cramped on a phone screen; a tablet with a keyboard is much easier."]
     }, write:"Where I set up R… The version it showed…"},
    {t:"Optional: make a Posit Cloud project", how:[
      "Go to **posit.cloud**, choose **Sign Up** and make a free account.",
      "Open **Your Workspace**, then **New Project → New RStudio Project**.",
      "Name it `r-basics` (gear icon → **Info**).",
      "In the Console, type `2 + 3`. Then look at the four panes and find the Environment and Files tabs.",
      "When you finish, close the browser tab. The project is suspended after 15 idle minutes; those minutes still count toward your monthly compute hours."
    ]}
   ], proof:"R has answered `[1] 5` for you somewhere (the Data Lab, RStudio, Posit Cloud or a Terminal), and you know which version of R you used."},
   read:[
     {book:"r4ds", where:"Introduction, sections “Prerequisites” and “Running R code”", note:"How to get R and RStudio, and how the book shows code and output."},
     {book:"dcss", where:"R for Social Scientists, “Before we Start”", note:"Why learn R, a tour of RStudio’s panes, scripts and the console’s `>` and `+` prompts."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u7-l2", title:"Values, objects, vectors and functions", minutes:55,
   hook:{q:"In R, you type `x <- c(2, 4, 6)` and then `x * 10`. What does R show?", options:["[1] 60","[1] 20 40 60","An error: you can’t multiply a list","[1] 2 4 6 10"], answer:1, reveal:"R shows `[1] 20 40 60`. `c()` combines values into a **vector**, and arithmetic on a vector happens to every value at once, with no loop needed. That one idea makes R feel very different from a spreadsheet, where you would fill a formula down a column. This lesson builds it up from single values."},
   goals:[
     "Use R as a calculator with `+ - * / ^`, `%/%` and `%%`, and predict the order things are worked out in",
     "Store values in objects with `<-`, choose good names, and know that objects don’t update themselves",
     "Tell numbers, text and TRUE/FALSE apart, and build and index vectors with `c()` and `[ ]`",
     "Call functions with positional and named arguments, deal with `NA` using `na.rm = TRUE`, and read the four most common error messages"
   ],
   learn:[
    {h:"R as a calculator", body:[
      {lead:"The quickest way to start is to give R some sums."},
      {code:['12.5 * 4','(59 + 73 + 2) / 3','2 ^ 10','17 %/% 5','17 %% 5'].join("\n"), lang:"r"},
      {ex:"[1] 50\n[1] 44.66667\n[1] 1024\n[1] 3\n[1] 2", label:"R prints", mono:true},
      {table:[
        ["Symbol","Means","Example → result"],
        ["`+` `-`","Add, subtract","`7 - 2` → 5"],
        ["`*` `/`","Multiply, divide","`10 / 4` → 2.5"],
        ["`^`","Power","`2 ^ 3` → 8"],
        ["`%/%`","Whole-number division","`17 %/% 5` → 3"],
        ["`%%`","Remainder","`17 %% 5` → 2"]
      ]},
      "R follows the usual order of operations: brackets first, then powers, then `*` and `/`, then `+` and `-`. So `2 + 3 * 4` is 14, and `(2 + 3) * 4` is 20. When in doubt, add brackets: they never hurt.",
      "Two habits to know. R always uses a **full stop** for decimals (`12.5`), whatever your computer’s language settings; a comma separates things, so `12,5` is an error. And R *shows* about 7 significant digits (`44.66667`) but *keeps* many more, so later sums stay accurate."
    ]},
    {h:"Objects: giving a value a name", body:[
      "Typing numbers again and again gets old. Instead, store a value under a name. The result is an **[[r-object|object]]**, and the arrow `<-` is the **[[assignment-r|assignment]]** operator.",
      {code:['price <- 12.5','qty <- 4','total <- price * qty','total'].join("\n"), lang:"r"},
      {ex:"[1] 50", label:"R prints", mono:true},
      "Read `price <- 12.5` as “price **gets** 12.5”. Storing prints nothing; to see an object, type its name on its own line (as the last line does). In RStudio the new objects also appear in the Environment pane.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="t3u7a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="20">An object is a name attached to a value</text><rect class="d-gold" x="20" y="36" width="96" height="40" rx="20" stroke-width="2"/><text class="mono" x="68" y="61" text-anchor="middle">price</text><rect class="d-lup" x="200" y="36" width="110" height="40" rx="6" stroke-width="2"/><text class="mono" x="255" y="61" text-anchor="middle">12.5</text><path class="d-ink" d="M118,56 L196,56" stroke-width="2" marker-end="url(#t3u7a2)"/><rect class="d-gold" x="20" y="90" width="96" height="40" rx="20" stroke-width="2"/><text class="mono" x="68" y="115" text-anchor="middle">qty</text><rect class="d-lup" x="200" y="90" width="110" height="40" rx="6" stroke-width="2"/><text class="mono" x="255" y="115" text-anchor="middle">4</text><path class="d-ink" d="M118,110 L196,110" stroke-width="2" marker-end="url(#t3u7a2)"/><rect class="d-gold" x="20" y="144" width="96" height="40" rx="20" stroke-width="2"/><text class="mono" x="68" y="169" text-anchor="middle">total</text><rect class="d-lup" x="200" y="144" width="110" height="40" rx="6" stroke-width="2"/><text class="mono" x="255" y="169" text-anchor="middle">50</text><path class="d-ink" d="M118,164 L196,164" stroke-width="2" marker-end="url(#t3u7a2)"/><text class="s" x="10" y="212">total holds the number 50, not the recipe</text><text class="s" x="10" y="230">“price × qty”. Change qty to 6 and total</text><text class="s" x="10" y="248">stays 50 until you run</text><text class="mono" x="10" y="272">total &lt;- price * qty</text><text class="s" x="10" y="292">again (then it becomes 75).</text></svg>', alt:"Three name tags, price, qty and total, each with an arrow to a value box: 12.5, 4 and 50. A note says total holds the number 50, not the recipe price times qty; changing qty to 6 leaves total at 50 until total <- price * qty is run again, making it 75.", cap:"Objects store values, not formulas."},
      "That last point surprises spreadsheet users. A spreadsheet formula updates when its inputs change. An R object doesn’t:",
      {code:['qty <- 6','total','total <- price * qty','total'].join("\n"), lang:"r"},
      {ex:"[1] 50\n[1] 75", label:"R prints", mono:true},
      "**Naming rules.** Names start with a letter and can contain letters, numbers, `_` and `.`. No spaces. Capitals count: `total`, `Total` and `TOTAL` are three different names. R for Data Science recommends **snake_case**, lower-case words joined by `_`, like `price_per_kg`. Pick names that say what’s inside: `avg_score` beats `x2`.",
      "**Overwriting is silent.** Assigning to an existing name replaces the old value without a warning. `ls()` lists the objects you have; `rm(total)` removes one.",
      {tip:"You’ll also see `=` used for assignment (`price = 12.5`). It works at the start of a line, but most R guides use `<-` and keep `=` for naming a function’s arguments, which you’ll meet below. This unit does the same."},
      {lab:"dl-r-calc", t:"Practise: store a price and a quantity, and calculate a total"}
    ]},
    {h:"Numbers, text and TRUE/FALSE", body:[
      "Every value has a **type**. Three matter most at the start:",
      {table:[
        ["Type (what `class()` says)","Looks like","Used for"],
        ["`\"numeric\"`","`12.5`, `4`, `-3`","Measurements, counts, money"],
        ["`\"character\"`","`\"Rain\"`, `\"12.5\"`","Text: names, categories, codes"],
        ["`\"logical\"`","`TRUE`, `FALSE`","Answers to yes/no questions"]
      ]},
      "Text always goes in quotes, double `\"…\"` or single `'…'`. The quotes matter: `12.5` is a number, but `\"12.5\"` is text that happens to contain digits, and you can’t do maths with text.",
      {code:['class(12.5)','class("12.5")','class(TRUE)','"12.5" * 4'].join("\n"), lang:"r"},
      {ex:"[1] \"numeric\"\n[1] \"character\"\n[1] \"logical\"\nError: non-numeric argument to binary operator", label:"R prints", mono:true},
      "A **binary operator** is just a symbol with a value on each side, like `*`. The message means “one side isn’t a number”. To turn text digits into a number, use `as.numeric(\"12.5\")`.",
      "Logical values come from questions. `5 > 3` gives `TRUE`; `\"Rain\" == \"rain\"` gives `FALSE` (text comparisons are case-sensitive). Note the **double** equals `==` for “is equal to”: a single `=` assigns. The others are `!=` (not equal), `<`, `<=`, `>` and `>=`.",
      "There is one more special value: `NA`, which means **missing** (“not available”). An empty cell in a data file becomes `NA` in R, and Lesson 4 deals with it."
    ]},
    {h:"Vectors: many values in one object", body:[
      "A **[[r-vector|vector]]** is an ordered set of values of the same type, and it’s R’s basic building block. Make one with `c()`, for **c**ombine. Here are Mei’s step counts for one week:",
      {code:['steps <- c(4200, 8100, 6550, 12030, 3900, 7400, 9800)','length(steps)','steps / 1000','mean(steps)'].join("\n"), lang:"r"},
      {ex:"[1] 7\n[1]  4.20  8.10  6.55 12.03  3.90  7.40  9.80\n[1] 7425.714", label:"R prints", mono:true},
      "`steps / 1000` divides **every** value: arithmetic and comparisons are **vectorised**, done element by element. Most functions take a whole vector too: `mean(steps)` needs no loop and no range like `A2:A8`.",
      {h:"Picking values with square brackets"},
      "Positions in R start at **1**. Put positions, or a TRUE/FALSE question, inside `[ ]`:",
      {code:['steps[1]','steps[c(1, 7)]','steps[-1]','steps > 7000','steps[steps > 7000]','sum(steps > 7000)'].join("\n"), lang:"r"},
      {ex:"[1] 4200\n[1] 4200 9800\n[1]  8100  6550 12030  3900  7400  9800\n[1] FALSE  TRUE FALSE  TRUE FALSE  TRUE  TRUE\n[1]  8100 12030  7400  9800\n[1] 4", label:"R prints", mono:true},
      {fig:'<svg viewBox="0 0 340 300"><text x="10" y="20">steps &gt; 7000 asks a question of every value</text><text class="s" x="10" y="44">position</text><text class="s" x="10" y="78">steps</text><text class="s" x="10" y="132">&gt; 7000?</text><text class="s" x="10" y="186">kept by</text><text class="s" x="10" y="202">steps[…]</text><g class="mono"><text class="s" x="104" y="44" text-anchor="middle">1</text><text class="s" x="137" y="44" text-anchor="middle">2</text><text class="s" x="170" y="44" text-anchor="middle">3</text><text class="s" x="203" y="44" text-anchor="middle">4</text><text class="s" x="236" y="44" text-anchor="middle">5</text><text class="s" x="269" y="44" text-anchor="middle">6</text><text class="s" x="302" y="44" text-anchor="middle">7</text></g><rect class="d-panel" x="88" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="121" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="154" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="187" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="220" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="253" y="56" width="32" height="34" stroke-width="1.5"/><rect class="d-panel" x="286" y="56" width="32" height="34" stroke-width="1.5"/><text class="s" x="104" y="78" text-anchor="middle">4.2k</text><text class="s" x="137" y="78" text-anchor="middle">8.1k</text><text class="s" x="170" y="78" text-anchor="middle">6.6k</text><text class="s" x="203" y="78" text-anchor="middle">12k</text><text class="s" x="236" y="78" text-anchor="middle">3.9k</text><text class="s" x="269" y="78" text-anchor="middle">7.4k</text><text class="s" x="302" y="78" text-anchor="middle">9.8k</text><rect class="d-rose" x="88" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="121" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-rose" x="154" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="187" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-rose" x="220" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="253" y="110" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="286" y="110" width="32" height="34" stroke-width="1.5"/><text x="104" y="132" text-anchor="middle">F</text><text x="137" y="132" text-anchor="middle">T</text><text x="170" y="132" text-anchor="middle">F</text><text x="203" y="132" text-anchor="middle">T</text><text x="236" y="132" text-anchor="middle">F</text><text x="269" y="132" text-anchor="middle">T</text><text x="302" y="132" text-anchor="middle">T</text><rect class="d-sage" x="121" y="174" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="187" y="174" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="253" y="174" width="32" height="34" stroke-width="1.5"/><rect class="d-sage" x="286" y="174" width="32" height="34" stroke-width="1.5"/><text class="s" x="137" y="196" text-anchor="middle">8.1k</text><text class="s" x="203" y="196" text-anchor="middle">12k</text><text class="s" x="269" y="196" text-anchor="middle">7.4k</text><text class="s" x="302" y="196" text-anchor="middle">9.8k</text><text class="s" x="10" y="240">TRUE keeps a value, FALSE drops it.</text><text class="s" x="10" y="258">sum() counts the TRUEs (TRUE = 1, FALSE = 0),</text><text class="s" x="10" y="276">so sum(steps &gt; 7000) is 4.</text></svg>', alt:"A row of seven step counts numbered 1 to 7. Below, the question greater than 7000 gives F, T, F, T, F, T, T. Below that, only the four values marked T are kept: 8.1k, 12k, 7.4k and 9.8k. A note says TRUE keeps, FALSE drops, and sum counts the TRUEs, giving 4.", cap:"A TRUE/FALSE vector inside [ ] keeps the TRUE positions."},
      "`steps[-1]` means “everything **except** position 1”. And because TRUE counts as 1 and FALSE as 0, `sum(steps > 7000)` counts how many days were over 7,000. You’ll use that trick all the time.",
      "A vector holds **one type**. Mix types and R quietly converts everything to the most flexible one: `c(1, \"two\", 3)` becomes the text `\"1\" \"two\" \"3\"`. That’s why a single stray word in a column of numbers can turn the whole column into text."
    ]},
    {h:"Functions: name, brackets, arguments", body:[
      "You’ve already used several **[[r-function|functions]]**: `c()`, `mean()`, `length()`, `class()`. Every call has the same shape: the function’s name, round brackets, and inside them the **arguments**, separated by commas.",
      {code:['round(7425.714)','round(7425.714, 1)','round(x = 3.14159, digits = 2)','round(digits = 2, x = 3.14159)'].join("\n"), lang:"r"},
      {ex:"[1] 7426\n[1] 7425.7\n[1] 3.14\n[1] 3.14", label:"R prints", mono:true},
      "`round()` has two arguments: `x` (the number) and `digits`, which has a **default** of 0. You can give arguments by **position** (first, second…) or by **name** with `=`. Named arguments can come in any order, and they make code easier to read, so name anything beyond the first one or two.",
      "To see a function’s arguments and examples, type `?round` (or `help(round)`) on a computer or in Posit Cloud: the help page opens in RStudio’s Help tab.",
      {table:[
        ["Function","Gives","For Mei’s steps"],
        ["`sum()`","The total","51980"],
        ["`mean()` / `median()`","The average / middle value","7425.714 / 7400"],
        ["`min()` / `max()`","Smallest / largest","3900 / 12030"],
        ["`length()`","How many values","7"],
        ["`sort()`","The values in order","3900 4200 … 12030"]
      ]},
      {h:"Missing values and na.rm"},
      "If any value is `NA`, most summaries answer `NA`, because R can’t know the total of something it can’t see. Tell the function to skip missing values with `na.rm = TRUE` (“NA remove”):",
      {code:['temps <- c(18.5, 21.0, NA, 19.5)','mean(temps)','mean(temps, na.rm = TRUE)'].join("\n"), lang:"r"},
      {ex:"[1] NA\n[1] 19.66667", label:"R prints", mono:true},
      {h:"Functions inside functions, and the pipe"},
      "You can put one call inside another; R works from the inside out. `round(mean(steps))` first takes the mean, then rounds it to 7426. Since R 4.1 there’s also the **[[pipe-operator|pipe]]** `|>`, which passes a value along from left to right. `steps |> mean() |> round()` reads “take steps, then mean, then round” and gives the same 7426. Unit 8 uses the pipe a lot ({{pipes-r}}).",
      {lab:"dl-r-vector", t:"Practise: the mean, median and length of a vector"}
    ]},
    {h:"Reading R’s error messages", body:[
      "Everyone who writes R sees error messages every day. They look stern, but most mean one of four things, and R usually says which line it was reading.",
      {table:[
        ["R says","What it usually means","Fix"],
        ["`object 'Total' not found`","A name is misspelt, has the wrong capitals, or was never created","Check spelling and case; run the line that creates it"],
        ["`could not find function \"Mean\"`","A function name is misspelt (or its package isn’t loaded)","`mean`, not `Mean`"],
        ["`non-numeric argument to binary operator`","Maths on text, often a number in quotes","Remove the quotes, or use `as.numeric()`"],
        ["`unexpected symbol` / `unexpected ','`","Something is missing between two pieces, or a comma is out of place","Look just before the spot R names"]
      ]},
      "`price <- 12,5` gives `unexpected ','`, because R reads the comma as a separator, not a decimal mark. `price <- 12.5 qty <- 4` on one line gives `unexpected symbol`: R expected the line to end after `12.5`. Put each command on its own line (or separate them with `;`).",
      "If a bracket or quote isn’t closed, the console shows the `+` prompt and waits. In a script or the Data Lab you get `unexpected end of input`: count your brackets.",
      "**Errors and warnings are different.** An **error** stops R. A **warning** lets the code finish but tells you something looks wrong. `as.numeric(c(\"3\", \"four\"))` gives `3` and `NA` with the warning `NAs introduced by coercion`: R couldn’t turn “four” into a number. Read warnings; they often point at messy data.",
      {key:"Read the message, look at the line it names, and check spelling, capitals, quotes, commas and brackets, in that order."},
      "The fix-the-errors challenge below reads a data file and picks rows with a line you’ll meet properly in Lesson 4. You only need to read the two error messages and fix the code they point to; come back to it after Lesson 4 if you prefer.",
      {lab:"dl-r-fix", t:"Practise: read two error messages and fix the code"}
    ]}
   ],
   try:[
    {id:"t3u7-l2-x1", type:"number", q:"What does R give for `2 + 3 * 4 ^ 2`?", answer:50, tol:0, unit:"", why:"Powers first: 4 ^ 2 = 16. Then multiplication: 3 × 16 = 48. Then addition: 2 + 48 = 50.", wrongs:[
      {v:400, tol:0, why:"That works left to right ((2 + 3) × 4 = 20, then 20² = 400). R, like maths, does powers, then multiplication, then addition."},
      {v:196, tol:0, why:"That does the multiplication before the power ((2 + 3 × 4)² = 14²). Powers come first."},
      {v:146, tol:0, why:"That squares 3 × 4 = 12 to get 144 and adds 2. The power applies only to the 4 next to it."}
    ], hint2:"Do `4 ^ 2` first."},
    {id:"t3u7-l2-x2", type:"mcq", q:"Amara runs `rate <- 20`, then `pay <- rate * 3`, then `rate <- 25`. What does `pay` hold now?", options:[
      {t:"60", ok:true, why:"`pay` stored the number 60 when its line ran. Changing `rate` afterwards doesn’t change `pay` until `pay <- rate * 3` runs again."},
      {t:"75", why:"That’s what a spreadsheet formula would show, because formulas update. An R object holds a value, not a formula."},
      {t:"An error, because `rate` changed", why:"Reassigning an object is allowed and silent; nothing breaks."},
      {t:"`rate * 3`", why:"R works out the right-hand side before storing it, so `pay` holds a number, not the expression."}
    ]},
    {id:"t3u7-l2-x3", type:"sort", q:"What type would each value be in R?", buckets:["numeric","character (text)","logical"], items:[
      {t:"`42.5`", b:0, why:"A number without quotes is numeric."},
      {t:"`\"42.5\"`", b:1, why:"Quotes make it text, even though it’s made of digits."},
      {t:"`TRUE`", b:2, why:"TRUE and FALSE, without quotes, are logical values."},
      {t:"`\"TRUE\"`", b:1, why:"In quotes, TRUE is just four letters of text."},
      {t:"`7 > 3`", b:2, why:"A comparison answers a yes/no question, so the result is logical (TRUE)."},
      {t:"`c(1, \"two\", 3)`", b:1, why:"A vector holds one type; mixing in text turns every value into text."}
    ]},
    {id:"t3u7-l2-x4", type:"mcq", q:"`prices <- c(3.5, 2.0, 4.25, 1.75)`. What does `prices[prices > 2]` give?", options:[
      {t:"[1] 3.50 4.25", ok:true, why:"`prices > 2` is TRUE, FALSE, TRUE, FALSE. Inside `[ ]` the TRUE positions are kept: 3.5 and 4.25. (2.0 isn’t greater than 2.)"},
      {t:"[1] 3.50 2.00 4.25", why:"2.0 isn’t *greater than* 2; that would need `>=`."},
      {t:"[1] TRUE FALSE TRUE FALSE", why:"That’s `prices > 2` on its own. Putting it inside `prices[ ]` uses those answers to pick the values."},
      {t:"[1] 2", why:"That’s `sum(prices > 2)`, the count of TRUEs, not the values themselves."}
    ]},
    {id:"t3u7-l2-x5", type:"match", q:"Match each line of R to what it gives, for `v <- c(10, 20, 30, 40)`.", pairs:[
      ["`v[2]`","20","Positions start at 1, so position 2 is 20."],
      ["`v[-2]`","10 30 40","A negative position drops that element."],
      ["`length(v)`","4","There are four values."],
      ["`v * 2`","20 40 60 80","Arithmetic is applied to every element."],
      ["`sum(v >= 30)`","2","30 and 40 pass the test, and sum() counts the TRUEs."]
    ]},
    {id:"t3u7-l2-x6", type:"mcq", q:"Sione’s rainfall vector has one missing day: `rain <- c(4, 0, NA, 12, 6)`. `mean(rain)` gives `NA`. What should Sione type to get the mean of the days that were recorded?", options:[
      {t:"`mean(rain, na.rm = TRUE)`", ok:true, why:"`na.rm = TRUE` tells mean() to drop missing values first, giving (4 + 0 + 12 + 6) ÷ 4 = 5.5."},
      {t:"`mean(rain, na = FALSE)`", why:"R reads the short name `na` as `na.rm` (it matches the start of an argument name), so this means `na.rm = FALSE`: missing values are kept and the answer is still NA. Write the full name, `na.rm = TRUE`."},
      {t:"`mean(rain[rain != NA])`", why:"Comparing with NA gives NA, never TRUE, so this doesn’t pick anything useful. Use `na.rm = TRUE` (or `is.na()`, in Lesson 4)."},
      {t:"`mean(rain) - NA`", why:"Any arithmetic with NA gives NA."}
    ]},
    {id:"t3u7-l2-x7", type:"spot", q:"Lucía’s code should print the mean of her scores. Tap the parts that are wrong.", ask:"is wrong", mono:true, parts:[
      {t:"scores <- c(72, 88, 95)", flag:false, why:"This line is fine: it stores a vector of three numbers."},
      "\n",
      {t:"avg <- Mean(scores)", flag:true, why:"R’s function is `mean`, all lower case. `Mean` gives `could not find function \"Mean\"`."},
      "\n",
      {t:"label <- \"Average\"", flag:false, why:"Text in quotes stored in an object: fine."},
      "\n",
      {t:"Avg", flag:true, why:"The object was named `avg`. Capitals count, so `Avg` gives `object 'Avg' not found`."},
      "\n",
      {t:"round(avg, digits = 1)", flag:false, why:"A correct call with a named argument. (It only fails here because the `Mean` line didn’t create `avg`; fix that line and this one works.)"}
    ]}
   ],
   apply:{intro:"Work in the Data Lab (open any R challenge, type below or instead of its code, and press ▶ Run; Check will say “not quite”, which is fine for free practice), or in RStudio or Posit Cloud.", tasks:[
    {t:"A week in numbers", how:[
      "Make a vector of something you count each day for a week: steps, cups of tea, minutes reading, money spent. For example `cups <- c(2, 3, 1, 4, 2, 0, 3)`.",
      "Find its `sum()`, `mean()`, `median()`, `min()` and `max()`.",
      "Use a condition to count the days over a threshold you choose, such as `sum(cups > 2)`, and to show those values, `cups[cups > 2]`.",
      "Change one value to `NA` and run `mean()` again. Then fix it with `na.rm = TRUE`."
    ], write:"My vector… Its mean and median… Days over my threshold…"},
    {t:"Make three errors on purpose", how:[
      "Type a name with the wrong capitals (for example `Cups` instead of `cups`) and run it. Note the message.",
      "Put a number in quotes and multiply it: `\"3\" * 2`. Note the message.",
      "Leave a bracket open: `mean(c(1, 2, 3)`. Note what happens (a `+` prompt in the console, or `unexpected end of input` in a script or the lab).",
      "Fix each one. Write down each message in your own words."
    ], write:"Message 1 means… Message 2 means… Message 3 means…"},
    {t:"Do the Data Lab challenges", how:["In **Labs → Data Lab**, do **Store and calculate** and **A vector of scores**. Use **Hint** if you’re stuck, and press **Check** to test your answer.","Optional: do **Fix the errors** now, or after Lesson 4."]}
   ], proof:"A vector of your own with its total, mean and a count over a threshold, three error messages explained in your words, and the first two R challenges solved."},
   read:[
     {book:"r4ds", where:"Chapter 2, “Workflow: basics” (sections “Coding basics”, “Comments”, “What’s in a name?” and “Calling functions”)"},
     {book:"dcss", where:"R for Social Scientists, “Introduction to R” (creating objects, vectors and data types, subsetting vectors, missing data)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u7-l3", title:"Data frames: R’s tables", minutes:50,
   hook:{q:"A data frame called `bakery` has 5 rows (one per item) and 4 columns (item, price, sold, vegan). What does `length(bakery)` give?", options:["5","4","20","An error: length() only works on vectors"], answer:1, reveal:"It gives 4, the number of **columns**. A data frame is a set of column vectors standing side by side, so its “length” is how many columns it has. To count rows, use `nrow()`. Mixing these up is one of the most common slips in R, and this lesson shows why it happens."},
   goals:[
     "Explain what a data frame is: equal-length column vectors, one type per column, one row per observation",
     "Build a data frame with `data.frame()` and inspect it with `str()`, `dim()`, `head()` and `summary()`",
     "Pick a column with `$` or `[[ ]]`, and rows and columns with `[rows, columns]`",
     "Add and change columns, sort rows with `order()`, and know when a factor is useful"
   ],
   learn:[
    {h:"What a data frame is", body:[
      {lead:"A data frame is R’s table: the shape most data comes in."},
      "Picture a tidy spreadsheet (Track 1, Unit 9, and Track 3, Unit 2): one **[[observation-row|row per observation]]** (a person, a sale, a walk) and one **[[variable-column|column per variable]]** (age, price, minutes). A **[[data-frame|data frame]]** is exactly that, built from the vectors you met in Lesson 2.",
      "Each column **is a vector**, so each column has one type: a numeric column, a text column, a TRUE/FALSE column. Different columns can have different types. And every column has the **same length**, which is the number of rows.",
      {fig:'<svg viewBox="0 0 340 330"><text x="10" y="20">A data frame is column vectors, side by side</text><text class="mono" x="52" y="50" text-anchor="middle">item</text><text class="mono" x="132" y="50" text-anchor="middle">price</text><text class="mono" x="206" y="50" text-anchor="middle">sold</text><text class="mono" x="282" y="50" text-anchor="middle">vegan</text><rect class="d-lup" x="14" y="60" width="76" height="160" rx="6" stroke-width="2"/><rect class="d-gold" x="98" y="60" width="68" height="160" rx="6" stroke-width="2"/><rect class="d-gold" x="174" y="60" width="64" height="160" rx="6" stroke-width="2"/><rect class="d-sage" x="246" y="60" width="72" height="160" rx="6" stroke-width="2"/><rect class="d-rose" x="10" y="130" width="320" height="22" rx="4" stroke-width="1.5"/><g class="mono"><text x="52" y="84" text-anchor="middle">Bread</text><text x="52" y="114" text-anchor="middle">Scone</text><text x="52" y="144" text-anchor="middle">Muffin</text><text x="52" y="174" text-anchor="middle">Roll</text><text x="52" y="204" text-anchor="middle">Bun</text><text x="132" y="84" text-anchor="middle">3.2</text><text x="132" y="114" text-anchor="middle">1.8</text><text x="132" y="144" text-anchor="middle">2.5</text><text x="132" y="174" text-anchor="middle">0.9</text><text x="132" y="204" text-anchor="middle">1.5</text><text x="206" y="84" text-anchor="middle">40</text><text x="206" y="114" text-anchor="middle">25</text><text x="206" y="144" text-anchor="middle">32</text><text x="206" y="174" text-anchor="middle">60</text><text x="206" y="204" text-anchor="middle">18</text><text x="282" y="84" text-anchor="middle">TRUE</text><text x="282" y="114" text-anchor="middle">FALSE</text><text x="282" y="144" text-anchor="middle">FALSE</text><text x="282" y="174" text-anchor="middle">TRUE</text><text x="282" y="204" text-anchor="middle">TRUE</text></g><text class="s" x="52" y="240" text-anchor="middle">text</text><text class="s" x="132" y="240" text-anchor="middle">numeric</text><text class="s" x="206" y="240" text-anchor="middle">numeric</text><text class="s" x="282" y="240" text-anchor="middle">logical</text><text class="s" x="10" y="272">Rose row = one observation (row 3, the muffin).</text><text class="s" x="10" y="290">One column = one vector with one type.</text><text class="s" x="10" y="308">Every column has 5 values, so there are 5 rows;</text><text class="s" x="10" y="326">length() counts the 4 columns, nrow() the 5 rows.</text></svg>', alt:"Four coloured columns side by side: item (text) Bread, Scone, Muffin, Roll, Bun; price (numeric) 3.2, 1.8, 2.5, 0.9, 1.5; sold (numeric) 40, 25, 32, 60, 18; vegan (logical) TRUE, FALSE, FALSE, TRUE, TRUE. Row 3, the muffin, is highlighted as one observation. Notes say each column is one vector with one type, every column has 5 values, length counts the 4 columns and nrow the 5 rows.", cap:"Each column is a vector; a row cuts across them."},
      {key:"A data frame is a list of equal-length vectors (the columns). Rows are observations, columns are variables."}
    ]},
    {h:"Making a data frame", body:[
      "Most data frames come from files (next lesson), but building a small one by hand shows how they work. `data.frame()` takes one argument per column, `name = vector`:",
      {code:['bakery <- data.frame(','  item = c("Bread", "Scone", "Muffin", "Roll", "Bun"),','  price = c(3.2, 1.8, 2.5, 0.9, 1.5),','  sold = c(40, 25, 32, 60, 18),','  vegan = c(TRUE, FALSE, FALSE, TRUE, TRUE)',')','bakery'].join("\n"), lang:"r"},
      {ex:"    item price sold vegan\n1  Bread   3.2   40  TRUE\n2  Scone   1.8   25 FALSE\n3 Muffin   2.5   32 FALSE\n4   Roll   0.9   60  TRUE\n5    Bun   1.5   18  TRUE", label:"R prints", mono:true},
      "A command can run over several lines: R keeps reading until the brackets close. The numbers on the left are **row names**; here they’re just 1 to 5.",
      "Every column must have the same length. Give one column four values and the others five, and R stops:",
      {code:'data.frame(item = c("Bread", "Scone"), price = c(3.2, 1.8, 2.5))', lang:"r"},
      {ex:"Error: arguments imply differing number of rows: 2, 3", label:"R prints", mono:true}
    ]},
    {h:"Looking at a data frame", body:[
      "Before doing anything with data, look at it. These functions work on any data frame, however big:",
      {code:['str(bakery)','dim(bakery)','names(bakery)'].join("\n"), lang:"r"},
      {ex:"'data.frame':\t5 obs. of  4 variables:\n $ item : chr  \"Bread\" \"Scone\" \"Muffin\" \"Roll\" ...\n $ price: num  3.2 1.8 2.5 0.9 1.5\n $ sold : num  40 25 32 60 18\n $ vegan: logi  TRUE FALSE FALSE TRUE TRUE\n[1] 5 4\n[1] \"item\"  \"price\" \"sold\"  \"vegan\"", label:"R prints", mono:true},
      "`str()` (**str**ucture) is the single most useful first look. It says how many observations (rows) and variables (columns) there are, and for each column its **type** and first few values: `chr` is character (text), `num` numeric, `int` integer (whole numbers, common when reading files), `logi` logical.",
      {table:[
        ["Function","Tells you"],
        ["`str(d)`","Rows, columns, each column’s type and first values"],
        ["`dim(d)`, `nrow(d)`, `ncol(d)`","Rows and columns; rows; columns"],
        ["`names(d)`","The column names"],
        ["`head(d)` / `tail(d)`","The first / last 6 rows (`head(d, 3)` for 3)"],
        ["`summary(d)`","A summary of every column"],
        ["`View(d)`","RStudio only: a spreadsheet-like viewer"]
      ]},
      {code:'summary(bakery[, c("price", "sold")])', lang:"r"},
      {ex:"     price           sold     \n Min.   :0.90   Min.   :18   \n 1st Qu.:1.50   1st Qu.:25   \n Median :1.80   Median :32   \n Mean   :1.98   Mean   :35   \n 3rd Qu.:2.50   3rd Qu.:40   \n Max.   :3.20   Max.   :60   ", label:"R prints", mono:true},
      "For numeric columns, `summary()` gives the minimum, quartiles, median, mean and maximum (Unit 5’s {{centre-spread|centre and spread}}). Lesson 5 returns to it."
    ]},
    {h:"Getting one column", body:[
      "`$` picks a column by name and gives you back a plain vector, so everything from Lesson 2 works on it:",
      {code:['bakery$price','mean(bakery$price)','sum(bakery$sold)','bakery$item[bakery$vegan]'].join("\n"), lang:"r"},
      {ex:"[1] 3.2 1.8 2.5 0.9 1.5\n[1] 1.98\n[1] 175\n[1] \"Bread\" \"Roll\"  \"Bun\"  ", label:"R prints", mono:true},
      "The last line uses one column (`vegan`, which is TRUE/FALSE) to pick from another (`item`): the names of the vegan items.",
      "`bakery[[\"price\"]]` does the same as `bakery$price`, and is handy when the column name is stored in an object. Single brackets, `bakery[\"price\"]`, are different: they give back a **data frame** with one column, not a vector.",
      {warn:"A misspelt column after `$` doesn’t cause an error. `bakery$prices` (with an extra s) quietly gives `NULL`, meaning “nothing”, and `mean(bakery$prices)` then gives `NA` with the warning `argument is not numeric or logical: returning NA`. If a result is unexpectedly `NULL` or `NA`, check the column name with `names()`."},
      {lab:"dl-r-df", t:"Practise: make a data frame and take the mean of a column"}
    ]},
    {h:"Rows and columns with [rows, columns]", body:[
      "Square brackets with a **comma** pick from both directions at once: `d[rows, columns]`. Leave a side empty to mean “all of them”.",
      {code:['bakery[2, ]','bakery[, "price"]','bakery[2, "price"]','bakery[1:2, c("item", "sold")]'].join("\n"), lang:"r"},
      {ex:"   item price sold vegan\n2 Scone   1.8   25 FALSE\n[1] 3.2 1.8 2.5 0.9 1.5\n[1] 1.8\n   item sold\n1 Bread   40\n2 Scone   25", label:"R prints", mono:true},
      {table:[
        ["You write","You get"],
        ["`bakery[2, ]`","Row 2, all columns (a data frame)"],
        ["`bakery[, \"price\"]`","All rows of one column (a vector)"],
        ["`bakery[2, \"price\"]`","One value"],
        ["`bakery[1:2, c(\"item\", \"sold\")]`","Rows 1 and 2, two columns"]
      ]},
      "`1:2` is a shortcut for the vector `c(1, 2)`; `1:5` is 1, 2, 3, 4, 5.",
      "The rows part can also be a TRUE/FALSE question, just like with vectors. `bakery[bakery$sold > 30, ]` keeps the rows where more than 30 were sold. Lesson 4 builds on this with real files. The comma matters: without it, R treats your question as picking **columns**, and you get an error such as `undefined columns selected`."
    ]},
    {h:"Adding and changing columns, and sorting", body:[
      "Assign to a new name after `$` to add a column. Because columns are vectors, the calculation happens row by row:",
      {code:['bakery$takings <- bakery$price * bakery$sold','bakery','sum(bakery$takings)'].join("\n"), lang:"r"},
      {ex:"    item price sold vegan takings\n1  Bread   3.2   40  TRUE     128\n2  Scone   1.8   25 FALSE      45\n3 Muffin   2.5   32 FALSE      80\n4   Roll   0.9   60  TRUE      54\n5    Bun   1.5   18  TRUE      27\n[1] 334", label:"R prints", mono:true},
      "To change one value, pick it and assign: `bakery$price[4] <- 1.0` changes the roll’s price. (This changes the copy in R, not any file it came from; that’s a good thing, as Unit 2 explained about {{raw-data-raw|keeping raw data raw}}.)",
      "**Sorting rows.** `order()` gives the row positions in sorted order, which you then use as the rows part:",
      {code:'bakery[order(bakery$takings, decreasing = TRUE), c("item", "takings")]', lang:"r"},
      {ex:"    item takings\n1  Bread     128\n3 Muffin      80\n4   Roll      54\n2  Scone      45\n5    Bun      27", label:"R prints", mono:true},
      "Notice the row names travel with their rows (1, 3, 4, 2, 5), which helps you see where each row came from.",
      {h:"Factors: categories with a fixed order"},
      "Text columns such as `item` are plain character vectors. When a column holds a small set of categories (sizes, survey answers, regions), you can turn it into a **[[r-factor|factor]]**, which stores the allowed categories (its **levels**) in an order you choose. Tables and charts then follow that order instead of the alphabet:",
      {code:['size <- c("small", "large", "small", "medium")','table(size)','size <- factor(size, levels = c("small", "medium", "large"))','table(size)'].join("\n"), lang:"r"},
      {ex:"size\n large medium  small \n     1      1      2 \nsize\n small medium  large \n     2      1      1 ", label:"R prints", mono:true},
      "Older R (before version 4.0) turned text into factors automatically when making data frames; R 4.0 and later keep text as text unless you ask, which avoids many surprises. Unit 8’s tidyverse prints data frames as **[[tibble|tibbles]]**, a modern take on the same idea."
    ]}
   ],
   try:[
    {id:"t3u7-l3-x1", type:"mcq", q:"Why can’t one column of a data frame hold both `12` and `\"twelve\"` as different types?", options:[
      {t:"Each column is a vector, and a vector holds values of one type", ok:true, why:"A data frame is equal-length vectors side by side. If you mix them, R converts the whole column to text, so `12` becomes `\"12\"`."},
      {t:"Data frames can only hold numbers", why:"Data frames can hold text, numbers and TRUE/FALSE, just one type per column."},
      {t:"R doesn’t allow text in data frames made by hand", why:"The `bakery` example has a text column (`item`)."},
      {t:"It can; each cell has its own type", why:"That’s closer to a spreadsheet. In R the type belongs to the whole column."}
    ]},
    {id:"t3u7-l3-x2", type:"match", q:"`str(people)` shows these lines. Match each column to what its type tells you.", pairs:[
      ["`$ name : chr`","Text values","`chr` means character: text."],
      ["`$ age  : int`","Whole numbers","`int` means integer, common when R reads whole numbers from a file."],
      ["`$ height: num`","Numbers that can have decimals","`num` means numeric (double)."],
      ["`$ member: logi`","TRUE/FALSE values","`logi` means logical."]
    ]},
    {id:"t3u7-l3-x3", type:"mcq", q:"Tomás has a data frame `trips` with 8 rows and 3 columns. Which line gives the number of trips?", options:[
      {t:"`nrow(trips)`", ok:true, why:"One row per trip, so the number of rows is the number of trips: 8."},
      {t:"`length(trips)`", why:"length() of a data frame counts its columns, giving 3."},
      {t:"`ncol(trips)`", why:"That’s the number of columns, 3."},
      {t:"`dim(trips)`", why:"dim() gives both numbers, 8 and 3. It contains the answer, but it isn’t one number."}
    ]},
    {id:"t3u7-l3-x4", type:"sort", q:"For the `bakery` data frame, does each line give back a single vector or a data frame?", buckets:["A vector","A data frame"], items:[
      {t:"`bakery$price`", b:0, why:"`$` pulls out one column as a plain vector."},
      {t:"`bakery[[\"price\"]]`", b:0, why:"Double brackets also pull out the column itself."},
      {t:"`bakery[\"price\"]`", b:1, why:"Single brackets without a comma keep the data-frame wrapper: a one-column data frame."},
      {t:"`bakery[2, ]`", b:1, why:"One row still has four columns of different types, so it stays a data frame."},
      {t:"`bakery[, \"price\"]`", b:0, why:"Picking a single column with `[ , ]` simplifies it to a vector."},
      {t:"`bakery[1:2, c(\"item\", \"sold\")]`", b:1, why:"Several rows and columns make a smaller data frame."}
    ]},
    {id:"t3u7-l3-x5", type:"mcq", q:"Fatima types `mean(bakery$Price)` and gets `NA` with a warning. What went wrong?", options:[
      {t:"The column is called `price`, so `bakery$Price` is `NULL`", ok:true, why:"Capitals count. A column name that doesn’t exist gives `NULL` after `$`, with no error, and mean(NULL) returns NA with a warning. `names(bakery)` shows the real spelling."},
      {t:"The price column contains a missing value", why:"There are no missing prices here, and missing values would give NA *without* that warning. The column name is the problem."},
      {t:"mean() can’t be used on data frame columns", why:"It can: `mean(bakery$price)` gives 1.98."},
      {t:"She needs `na.rm = TRUE`", why:"That only helps when the column exists and has NAs in it. Here R found no column at all."}
    ]},
    {id:"t3u7-l3-x6", type:"order", q:"Put these steps in a sensible order for a new data frame `d` you were just sent.", items:[
      {t:"Run `str(d)` to see the rows, columns and types", why:"Always look at the structure first, so you know what you’re dealing with."},
      {t:"Run `head(d)` to see a few complete rows", why:"Real rows show what values actually look like."},
      {t:"Run `summary(d)` to spot odd minimums, maximums and NAs", why:"Summaries reveal impossible values (a negative age) and missing data before you analyse."},
      {t:"Calculate what you need, such as `mean(d$minutes)`", why:"Only once you trust the data do you start calculating."}
    ]}
   ],
   apply:{intro:"Use the Data Lab (any R challenge’s editor and ▶ Run), RStudio or Posit Cloud.", tasks:[
    {t:"Build a data frame about something you know", how:[
      "Choose 4 to 6 things with 3 or 4 facts each: books you’ve read (title, pages, rating), plants (name, height_cm, needs_sun), or meals (dish, minutes, cost).",
      "Make it with `data.frame()`, one `name = c(…)` per column. Include one text column, one numeric column and one TRUE/FALSE column.",
      "Run `str()` and `summary()` on it, and check the types are what you expected.",
      "Add a calculated column with `$`, then sort the rows by it with `order()`."
    ], write:"My data frame’s columns and types… My new column… The top row after sorting…"},
    {t:"Do the Data Lab challenge", how:["In **Labs → Data Lab**, do **Make a data frame**. If Check says a column is wrong, read which one and compare with the task’s spelling and capitals."]}
   ], proof:"A small data frame of your own with three column types, a calculated column, its rows sorted, and the “Make a data frame” challenge solved."},
   read:[
     {book:"dcss", where:"R for Social Scientists, “Starting with Data” (sections “What are data frames?”, “Inspecting data frames”, “Subsetting data frames” and “Factors”)", note:"It reads data with the tidyverse and so prints tibbles; the ideas are the same."},
     {book:"r4ds", where:"Chapter 27, “A field guide to base R”, sections “Selecting multiple elements with [” and “Selecting a single element with $ and [[”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u7-l4", title:"Reading a CSV, picking rows and counting", minutes:55,
   hook:{q:"What does R give for `mean(c(TRUE, FALSE, TRUE, TRUE))`?", options:["An error: you can’t average TRUE and FALSE","0.75","TRUE, because most values are TRUE","3"], answer:1, reveal:"It gives 0.75. In arithmetic, R counts TRUE as 1 and FALSE as 0, so the mean of a TRUE/FALSE vector is the **proportion** of TRUEs (3 out of 4), and the sum is the **count** (3). Combine that with a question like `walks$km >= 4` and you can count and take shares of anything in one short line. This lesson shows how, after reading a real CSV file."},
   goals:[
     "Explain the working directory, and give `read.csv()` a path that R can find",
     "Read a CSV file and check what arrived with `str()`, `summary()` and `is.na()`",
     "Pick rows with conditions using `d[condition, ]` and `subset()`, combining tests with `&`, `|` and `%in%`",
     "Count and take proportions with `sum()`, `mean()`, `table()` and `prop.table()`, and know how `NA` affects each"
   ],
   learn:[
    {h:"Where R looks for files", body:[
      {lead:"To read a file, R needs to find it, and it starts looking in one folder: the working directory."},
      "The **[[working-directory-r|working directory]]** is R’s current folder. A file name on its own, like `\"walks.csv\"`, means “walks.csv in the working directory”. A **relative path** like `\"data/walks.csv\"` means “in the data folder inside the working directory”. `getwd()` (get working directory) shows where that is.",
      {fig:'<svg viewBox="0 0 340 300"><text x="10" y="20">R looks inside its working directory</text><rect class="d-gold" x="14" y="36" width="190" height="36" rx="8" stroke-width="2"/><text x="26" y="59">📁 walking-club</text><text class="s" x="214" y="52">working directory</text><text class="s" x="214" y="68">(getwd() shows it)</text><path class="d-soft" d="M30,72 L30,236" stroke-width="2"/><path class="d-soft" d="M30,104 L48,104" stroke-width="2"/><rect class="d-lup" x="50" y="88" width="170" height="32" rx="6" stroke-width="2"/><text x="60" y="109">📄 analysis.R</text><path class="d-soft" d="M30,152 L48,152" stroke-width="2"/><rect class="d-panel" x="50" y="136" width="170" height="32" rx="6" stroke-width="1.5"/><text x="60" y="157">📁 data</text><path class="d-soft" d="M66,168 L66,196 L84,196" stroke-width="2"/><rect class="d-sage" x="86" y="180" width="160" height="32" rx="6" stroke-width="2"/><text x="96" y="201">📄 walks.csv</text><path class="d-soft" d="M30,236 L48,236" stroke-width="2"/><rect class="d-panel" x="50" y="220" width="170" height="32" rx="6" stroke-width="1.5"/><text x="60" y="241">📁 figures</text><text class="mono" x="10" y="280">read.csv("data/walks.csv")</text><text class="s" x="10" y="296">a relative path: from the working directory down</text></svg>', alt:"A folder tree. The walking-club folder is the working directory. Inside it: analysis.R, a data folder containing walks.csv, and a figures folder. Below, the code read.csv(\"data/walks.csv\") is labelled as a relative path from the working directory down.", cap:"A project folder, with the data in a subfolder."},
      "Where the working directory is depends on how you run R:",
      {list:[
        "**RStudio with a project.** **File → New Project → New Directory** makes a folder and an `.Rproj` file. Opening the project (double-click the `.Rproj` file) sets the working directory to that folder, so `\"data/walks.csv\"` just works, on any computer you copy the folder to. This is what R for Data Science and Data Carpentry recommend.",
        "**Posit Cloud.** Each project has its own folder; use **Upload** in the Files pane to put a file there.",
        "**Data Lab.** The challenge’s files are listed above the editor under **Files in R’s folder**, and that folder is R’s working directory, so `read.csv(\"survey.csv\")` finds the file directly."
      ]},
      {tip:"`setwd(\"C:/Users/…\")` changes the working directory, but a script that starts with your own folder path breaks on everyone else’s computer. Prefer projects and relative paths. (R accepts forward slashes `/` in paths on Windows too.)"}
    ]},
    {h:"Reading a CSV with read.csv()", body:[
      "A **[[csv|CSV]]** file is plain text: one line per row, values separated by commas, the first line giving the column names (Track 1, Unit 9). Here is `walks.csv`, an invented record of a walking club’s outings. Walk 13 has an empty `minutes` value: someone forgot to time it.",
      {ex:"id,route,km,minutes,weather\n1,River,4.2,52,Sunny\n2,Hill,3.5,61,Cloudy\n3,Park,2.0,27,Sunny\n4,River,5.1,66,Rain\n5,Hill,4.8,83,Sunny\n6,Park,2.5,31,Cloudy\n7,River,3.8,47,Cloudy\n8,Hill,2.9,49,Rain\n9,Park,1.8,25,Rain\n10,River,6.0,74,Sunny\n11,Hill,4.1,70,Cloudy\n12,Park,3.0,38,Sunny\n13,River,4.5,,Rain", label:"walks.csv", mono:true},
      {code:['walks <- read.csv("walks.csv")','str(walks)'].join("\n"), lang:"r"},
      {ex:"'data.frame':\t13 obs. of  5 variables:\n $ id     : int  1 2 3 4 5 6 7 8 9 10 ...\n $ route  : chr  \"River\" \"Hill\" \"Park\" \"River\" ...\n $ km     : num  4.2 3.5 2 5.1 4.8 2.5 3.8 2.9 1.8 6 ...\n $ minutes: int  52 61 27 66 83 31 47 49 25 74 ...\n $ weather: chr  \"Sunny\" \"Cloudy\" \"Sunny\" \"Rain\" ...", label:"R prints", mono:true},
      "`read.csv()` took the first line as column names, split each line at the commas, and guessed each column’s type: whole numbers became `int`, decimals `num`, words `chr`. The empty `minutes` value became `NA`.",
      "**No file handy, or on a phone?** `read.csv()` can also read text you give it with `text =`. Copy this block into any Data Lab editor (or RStudio) and press ▶ Run, and you have the same `walks` data frame without a file:",
      {code:['walks <- read.csv(text = "id,route,km,minutes,weather','1,River,4.2,52,Sunny','2,Hill,3.5,61,Cloudy','3,Park,2.0,27,Sunny','4,River,5.1,66,Rain','5,Hill,4.8,83,Sunny','6,Park,2.5,31,Cloudy','7,River,3.8,47,Cloudy','8,Hill,2.9,49,Rain','9,Park,1.8,25,Rain','10,River,6.0,74,Sunny','11,Hill,4.1,70,Cloudy','12,Park,3.0,38,Sunny','13,River,4.5,,Rain")','nrow(walks)'].join("\n"), lang:"r", label:"R (no file needed)", cap:"Prints `[1] 13`. Everything between the quotes is read exactly like the file, line by line."},
      "Not every “CSV” uses commas. In countries that write decimals with a comma, files often use **semicolons** between values: read those with `read.csv2()`, which expects `;` and decimal commas. Tab-separated files ([[tsv|TSV]]) use `read.delim()`. If you see one column with everything squashed into it, the separator is wrong.",
      "If R can’t find the file, it stops with `cannot open the connection` and warns `cannot open file 'Walks.csv': No such file or directory`. Check the spelling and the working directory. On Linux, in Posit Cloud and in the Data Lab, capitals count (`Walks.csv` isn’t `walks.csv`); Windows and macOS usually ignore them, but matching the name exactly keeps your script working everywhere.",
      {lab:"dl-r-csv", t:"Practise: read survey.csv, count its rows and take a mean"}
    ]},
    {h:"Check what arrived", body:[
      "Never trust a file until you’ve looked. After `str()`, run `summary()` and count missing values:",
      {code:['summary(walks[, c("km", "minutes")])','colSums(is.na(walks))'].join("\n"), lang:"r"},
      {ex:"       km           minutes     \n Min.   :1.800   Min.   :25.00  \n 1st Qu.:2.900   1st Qu.:36.25  \n Median :3.800   Median :50.50  \n Mean   :3.708   Mean   :51.92  \n 3rd Qu.:4.500   3rd Qu.:67.00  \n Max.   :6.000   Max.   :83.00  \n                 NAs    :1      \n     id   route      km minutes weather \n      0       0       0       1       0 ", label:"R prints", mono:true},
      "`summary()` reports `NAs :1` for minutes (R before version 4.6 writes `NA's`). `is.na(walks)` asks “is this missing?” of every cell, and `colSums()` adds up the TRUEs in each column. One missing value in 13 is worth noting; hundreds would change your plans.",
      "Look for warning signs:",
      {list:[
        "**A column of numbers that arrived as `chr`.** Some cell contains text: a unit (`\"52 min\"`), a note (`\"n/a\"`), or a decimal comma. Fix it in the reading step, for example `read.csv(\"walks.csv\", na.strings = c(\"\", \"NA\", \"n/a\"))` tells R which codes mean missing.",
        "**Impossible values.** A negative distance or an age of 999 in `summary()` usually means a typo or a code for “unknown” (Unit 2, {{missing-values}}).",
        "**The wrong number of rows.** Compare `nrow(walks)` with what you expected."
      ]}
    ]},
    {h:"Picking rows with a condition", body:[
      "You met `d[rows, columns]` in Lesson 3. Put a TRUE/FALSE question in the rows part to keep only the rows that answer TRUE:",
      {code:'walks[walks$km >= 5, ]', lang:"r"},
      {ex:"   id route  km minutes weather\n4   4 River 5.1      66    Rain\n10 10 River 6.0      74   Sunny", label:"R prints", mono:true},
      "`walks$km >= 5` makes 13 TRUEs and FALSEs, one per row; the comma and the empty columns part mean “all columns”. `subset()` does the same job and lets you use the column names directly, which reads more easily:",
      {code:['subset(walks, route == "Hill" & minutes > 60)','subset(walks, weather %in% c("Rain", "Cloudy") & km > 4)'].join("\n"), lang:"r"},
      {ex:"   id route  km minutes weather\n2   2  Hill 3.5      61  Cloudy\n5   5  Hill 4.8      83   Sunny\n11 11  Hill 4.1      70  Cloudy\n   id route  km minutes weather\n4   4 River 5.1      66    Rain\n11 11  Hill 4.1      70  Cloudy\n13 13 River 4.5      NA    Rain", label:"R prints", mono:true},
      {table:[
        ["Write","Means"],
        ["`a & b`","Both must be TRUE (and)"],
        ["`a | b`","At least one is TRUE (or)"],
        ["`!a`","Not: flips TRUE and FALSE"],
        ["`x %in% c(\"Rain\", \"Cloudy\")`","x is any one of these values"],
        ["`route == \"Hill\"`","Exactly equal (two = signs; capitals count)"]
      ]},
      {warn:"**Missing values and [ ].** `walks[walks$minutes > 70, ]` shows the two walks over 70 minutes **plus a row of NAs**, because R can’t say whether walk 13’s missing time was over 70, so the answer for that row is NA. `subset(walks, minutes > 70)` keeps only the rows that are definitely TRUE, and so does `walks[which(walks$minutes > 70), ]`. If you see a row of NAs you didn’t expect, that’s the cause."},
      "Keep the rows you pick in a new object, such as `long <- subset(walks, km >= 4)`, and the original `walks` stays as it was.",
      {lab:"dl-r-subset", t:"Practise: keep only the people aged 30 or over"},
      "Now you know `d[condition, ]`, the fix-the-errors challenge from Lesson 2 should read easily: one of its two bugs is a missing comma.",
      {lab:"dl-r-fix", t:"Practise: read two error messages and fix the code"}
    ]},
    {h:"Counting: sum(), mean() and table()", body:[
      "Because TRUE counts as 1, `sum()` of a condition is a **count** and `mean()` is a **proportion**:",
      {code:['sum(walks$km >= 4)','mean(walks$km >= 4)','mean(walks$weather == "Rain")'].join("\n"), lang:"r"},
      {ex:"[1] 6\n[1] 0.4615385\n[1] 0.3076923", label:"R prints", mono:true},
      "So 6 of the 13 walks were 4 km or more (about 46%), and 4 of 13 were in the rain (about 31%). A proportion is between 0 and 1; multiply by 100 only when you want to show a percentage.",
      "`table()` counts **every** value of a column at once, a **frequency table**. Give it two columns for a cross-table:",
      {code:['table(walks$weather)','table(walks$route, walks$weather)','round(prop.table(table(walks$weather)), 2)'].join("\n"), lang:"r"},
      {ex:"\nCloudy   Rain  Sunny \n     4      4      5 \n       \n        Cloudy Rain Sunny\n  Hill       2    1     1\n  Park       1    1     2\n  River      1    2     2\n\nCloudy   Rain  Sunny \n  0.31   0.31   0.38 ", label:"R prints", mono:true},
      "`prop.table()` turns counts into proportions of the total. `sort(table(walks$weather), decreasing = TRUE)` puts the most common value first.",
      {h:"How NA affects counting"},
      "`sum(walks$minutes > 60)` gives `NA`, because one comparison is unknown. Add `na.rm = TRUE` to count only the known ones (5 here), and say in your report that one walk had no time. `table()` leaves NAs out unless you add `useNA = \"ifany\"`, which is a good habit when you need to know how many are missing.",
      {warn:"Text comparisons are exact. `walks$weather == \"rain\"` finds nothing, because the file says `Rain`. If a count is surprisingly 0, check the spelling and capitals with `table()` first: it shows the exact values present."},
      {lab:"dl-r-table", t:"Practise: count each answer and find the share of Yes"}
    ]}
   ],
   try:[
    {id:"t3u7-l4-x1", type:"mcq", q:"Hana’s project folder (the working directory) contains `report.R` and a folder `raw`, and inside `raw` is `prices.csv`. Which line reads the file?", options:[
      {t:"`read.csv(\"raw/prices.csv\")`", ok:true, why:"A relative path from the working directory: into `raw`, then the file. It works wherever the project folder is copied."},
      {t:"`read.csv(\"prices.csv\")`", why:"That looks for prices.csv directly in the working directory, but it’s one folder down, in `raw`."},
      {t:"`read.csv(raw/prices.csv)`", why:"Without quotes, R reads `raw/prices.csv` as a calculation (an object called raw divided by…). File paths are text and go in quotes."},
      {t:"`read.csv(\"raw/prices\")`", why:"The file is called `prices.csv`: the `.csv` ending is part of its name, so R won’t find `prices` without it."}
    ]},
    {id:"t3u7-l4-x2", type:"mcq", q:"Dmitri reads a file and `str()` shows `$ weight: chr \"61.5\" \"70.2\" \"n/a\" …`. What’s the most likely reason the weight column isn’t numeric?", options:[
      {t:"At least one cell holds text, such as `n/a`, so R kept the whole column as text", ok:true, why:"A column has one type. One non-number makes R keep the column as character. `read.csv(…, na.strings = c(\"\", \"NA\", \"n/a\"))` reads `n/a` as missing, and the column becomes numeric."},
      {t:"read.csv() always reads decimals as text", why:"It reads decimals with a full stop as numbers (`num`). Something in this column isn’t a number."},
      {t:"The column name is wrong", why:"The name doesn’t affect the type; the values do."},
      {t:"R can’t store weights over 60", why:"There’s no such limit; numbers can be any size."}
    ]},
    {id:"t3u7-l4-x3", type:"match", q:"Match each condition to what it keeps from `walks`.", pairs:[
      ["`route == \"Park\"`","Only Park walks","`==` tests for an exact match."],
      ["`km > 3 & km < 5`","Walks between 3 and 5 km","`&` needs both conditions to be TRUE."],
      ["`weather == \"Rain\" | weather == \"Cloudy\"`","Walks in rain or cloud","`|` needs at least one condition to be TRUE."],
      ["`!(route %in% c(\"Hill\", \"Park\"))`","Only River walks","`!` flips the answer: not Hill and not Park leaves River."]
    ]},
    {id:"t3u7-l4-x4", type:"spot", q:"This code should keep the walks of 4 km or more and count them. Tap the parts that are wrong.", ask:"is wrong", mono:true, parts:[
      {t:"walks <- read.csv(\"walks.csv\")", flag:false, why:"Reads the file into a data frame: fine."},
      "\n",
      "long <- ",
      {t:"walks[walks$km => 4]", flag:true, why:"Two problems: R’s “greater than or equal” is `>=` (`=>` is a syntax error), and without the comma R would try to pick columns. Write `walks[walks$km >= 4, ]`."},
      "\n",
      "n_long <- ",
      {t:"nrow(long)", flag:false, why:"nrow() counts the rows of a data frame: right."},
      "\n",
      {t:"mean(walks$km >= 4)", flag:false, why:"A correct way to get the proportion of long walks (about 0.46)."}
    ]},
    {id:"t3u7-l4-x5", type:"number", q:"A survey data frame has 40 rows. `sum(d$answer == \"Yes\")` gives 14. What will `mean(d$answer == \"Yes\")` give?", answer:0.35, tol:0.001, unit:"", why:"mean() of a TRUE/FALSE vector is the proportion of TRUEs: 14 ÷ 40 = 0.35.", wrongs:[
      {v:35, tol:0.01, why:"That’s the percentage. mean() gives the proportion, between 0 and 1; multiply by 100 yourself for a percentage."},
      {v:14, tol:0, why:"That’s the count, which sum() gives. mean() divides it by the number of rows."},
      {v:0.14, tol:0.001, why:"That divides by 100 instead of by the 40 rows."}
    ]},
    {id:"t3u7-l4-x6", type:"mcq", q:"`walks[walks$minutes > 70, ]` shows walks 5 and 10, plus a row full of `NA`. Why the extra row?", options:[
      {t:"Walk 13’s minutes is missing, so “is it over 70?” is NA, and [ ] turns an NA answer into a row of NAs", ok:true, why:"R can’t answer TRUE or FALSE for a missing value. `subset(walks, minutes > 70)` or `walks[which(walks$minutes > 70), ]` keep only the definite TRUEs."},
      {t:"There’s a blank line at the end of the file", why:"A blank last line doesn’t create an NA row in read.csv(). The NA comes from the comparison."},
      {t:"R adds a totals row", why:"Picking rows never adds a summary row."},
      {t:"The comma in `[ , ]` adds an empty row", why:"The comma means “all columns”; it doesn’t add rows."}
    ]},
    {id:"t3u7-l4-x7", type:"mcq", q:"Priya runs `table(d$colour)` and gets `blue 12  Blue 3  red 9`. What does that tell her?", options:[
      {t:"The data has inconsistent capitals: “blue” and “Blue” are counted separately", ok:true, why:"table() counts exact values, and capitals count. It’s a quick way to spot spelling variants before analysing; tidy them (for example with `tolower()`) and count again."},
      {t:"There are 3 shades of blue in the data", why:"R isn’t judging colours; it’s counting two different spellings."},
      {t:"table() has made a mistake", why:"table() is exact. The data really contains both spellings."},
      {t:"She should use sum() instead", why:"sum() would count one value at a time and hide the variants that table() just revealed."}
    ]}
   ],
   apply:{intro:"Work on walks.csv (copy the text above), or on a small CSV of your own. In the Data Lab, use `read.csv(text = \"…\")`; on a computer, save the file into your project folder.", tasks:[
    {t:"Read and check a CSV", how:{
      win:["In RStudio, choose **File → New Project → New Directory → New Project**, name it `walking-club`, and create it.","Make a file: **File → New File → Text File**, paste the walks.csv text, and save it as `walks.csv` in the project folder.","In the console: `walks <- read.csv(\"walks.csv\")`, then `str(walks)`, `summary(walks)` and `colSums(is.na(walks))`.","Check: 13 observations of 5 variables, and one NA in minutes."],
      mac:["In RStudio, choose **File → New Project → New Directory → New Project**, name it `walking-club`, and create it.","Make a file: **File → New File → Text File**, paste the walks.csv text, and save it as `walks.csv` in the project folder.","In the console: `walks <- read.csv(\"walks.csv\")`, then `str(walks)`, `summary(walks)` and `colSums(is.na(walks))`.","Check: 13 observations of 5 variables, and one NA in minutes."],
      chromeos:["In Posit Cloud (or RStudio, if you installed it), make a new project.","Choose **File → New File → Text File**, paste the walks.csv text, and save it as `walks.csv`. (In Posit Cloud you can also **Upload** a file in the Files pane.)","In the console: `walks <- read.csv(\"walks.csv\")`, then `str(walks)`, `summary(walks)` and `colSums(is.na(walks))`.","Check: 13 observations of 5 variables, and one NA in minutes."],
      phone:["Open **Labs → Data Lab** and any R challenge (for example **Read a CSV**).","In this lesson, tap **Copy** on the block labelled **R (no file needed)** and paste it into the editor, replacing the starting code. (Or use `survey.csv`, which the challenge already provides: `d <- read.csv(\"survey.csv\")`.)","Add `str(walks)`, `summary(walks)` and `colSums(is.na(walks))` on new lines and press **▶ Run**. (Check will say “not quite”: this is free practice.)","Check: 13 observations of 5 variables, and one NA in minutes."]
     }, write:"Rows and columns… Each column’s type… Missing values…"},
    {t:"Pick and count", how:[
      "Make `long <- subset(walks, km >= 4)` and count its rows.",
      "Find the proportion of walks in the sun with `mean(walks$weather == \"Sunny\")`.",
      "Make `table(walks$route, walks$weather)` and write one sentence about it.",
      "Try `walks[walks$minutes > 70, ]` and `subset(walks, minutes > 70)` and explain the difference."
    ], write:"Long walks… Share in the sun… My sentence about the table… Why the two lines differ…"},
    {t:"Do the Data Lab challenges", how:["In **Labs → Data Lab**, do **Read a CSV**, **Pick rows** and **Count answers** (and **Fix the errors** if you skipped it). Tap `survey.csv` above the editor to see the data first."]}
   ], proof:"Your notes from checking walks.csv (13 rows, 5 columns, 1 NA), counts and a proportion you worked out, the NA-row difference explained, and three or four R challenges solved."},
   read:[
     {book:"r4ds", where:"Chapter 6, “Workflow: scripts and projects” (section “Projects”: the working directory and RStudio projects)", note:"Chapter 7, “Data import”, reads files with readr’s `read_csv()` from the tidyverse; the ideas match `read.csv()`."},
     {book:"dcss", where:"R for Social Scientists, “Before we Start” (sections “Getting set up” and “The working directory”) and “Introduction to R” (section “Missing data”)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u7-l5", title:"Summaries, groups, charts and a first model", minutes:60,
   hook:{q:"For the walking club, `cor(km, minutes)` is 0.89. What does that tell you?", options:["Each extra km adds 0.89 minutes","The points on a scatterplot lie fairly close to a rising straight line","Walking further causes walks to take longer, 89% of the time","89% of walks were long ones"], answer:1, reveal:"It says the points lie fairly close to a rising straight line: longer walks tended to take longer. Pearson’s r measures how tightly points hug a straight line, from −1 to 1; it isn’t a rate per km, a percentage of walks, or proof of cause (Unit 5 explained why). The minutes per extra km come from a different tool, a straight-line model, which this lesson fits with `lm()` after summaries, group comparisons and charts."},
   goals:[
     "Calculate summaries with `mean()`, `median()`, `sd()`, `quantile()`, `IQR()` and `summary()`, handling `NA`",
     "Compare groups with `tapply()` and `aggregate()`, and choose a fair measure to compare",
     "Draw and label base-R charts: `hist()`, `boxplot()`, `plot()` and `barplot()`",
     "Calculate a correlation with `cor()`, fit a straight line with `lm()`, read its slope, and say what neither proves"
   ],
   learn:[
    {h:"Summary statistics in one line each", body:[
      {lead:"Unit 5 built centre and spread by hand. In R, each is one function."},
      {code:['walks <- read.csv("walks.csv")','mean(walks$minutes, na.rm = TRUE)','median(walks$minutes, na.rm = TRUE)','sd(walks$minutes, na.rm = TRUE)','quantile(walks$minutes, na.rm = TRUE)','IQR(walks$minutes, na.rm = TRUE)'].join("\n"), lang:"r"},
      {ex:"[1] 51.91667\n[1] 50.5\n[1] 19.23755\n   0%   25%   50%   75%  100% \n25.00 36.25 50.50 67.00 83.00 \n[1] 30.75", label:"R prints", mono:true},
      "Walk 13 has no time, so each call needs `na.rm = TRUE`. The 12 timed walks took 51.9 minutes on average (median 50.5), with a standard deviation of about 19 minutes; the middle half took between 36.25 and 67 minutes, an interquartile range of 30.75.",
      {table:[
        ["Function","Gives","Note"],
        ["`mean()`, `median()`","Centre","The median resists extreme values"],
        ["`sd()`, `var()`","Standard deviation, variance","Sample versions (divide by n − 1), like a spreadsheet’s STDEV.S"],
        ["`quantile()`","Quartiles (or any percentile)","`quantile(x, 0.9)` for the 90th"],
        ["`IQR()`, `range()`","Spread of the middle half; min and max",""],
        ["`summary()`","Min, quartiles, median, mean, max, NA count","Works on whole data frames too"]
      ]},
      "**Quartiles differ between programs.** R’s default (`type = 7`) matches Excel’s QUARTILE.INC and PERCENTILE.INC; other programs and textbooks sometimes use other rules, so small differences are normal (Unit 5, {{percentiles-quartiles}}). `quantile()` has nine `type` options if you need to match a particular one."
    ]},
    {h:"Comparing groups", body:[
      "Which route is slowest? `tapply()` splits one column by another and applies a function to each piece: values first, then groups, then the function.",
      {code:['tapply(walks$minutes, walks$route, mean, na.rm = TRUE)','aggregate(minutes ~ route, data = walks, FUN = mean)'].join("\n"), lang:"r"},
      {ex:" Hill  Park River \n65.75 30.25 59.75 \n  route minutes\n1  Hill   65.75\n2  Park   30.25\n3 River   59.75", label:"R prints", mono:true},
      "`aggregate()` gives the same means as a data frame, which is handy for saving or charting. Its first argument is a **[[r-formula|formula]]**: `minutes ~ route` reads “minutes, grouped by route”. (`aggregate()` with a formula drops rows with missing values by itself.) Extra arguments after the function name, like `na.rm = TRUE` in `tapply()`, are passed on to that function.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="t3u7a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="20">tapply(): split, apply, combine</text><text class="s" x="10" y="44">1. split minutes by route</text><rect class="d-rose" x="10" y="54" width="100" height="62" rx="8" stroke-width="2"/><text x="60" y="74" text-anchor="middle">Hill</text><text class="s" x="60" y="92" text-anchor="middle">61 83 49 70</text><rect class="d-sage" x="120" y="54" width="100" height="62" rx="8" stroke-width="2"/><text x="170" y="74" text-anchor="middle">Park</text><text class="s" x="170" y="92" text-anchor="middle">27 31 25 38</text><rect class="d-lup" x="230" y="54" width="100" height="62" rx="8" stroke-width="2"/><text x="280" y="74" text-anchor="middle">River</text><text class="s" x="280" y="92" text-anchor="middle">52 66 47 74</text><text class="s" x="280" y="108" text-anchor="middle">(and NA)</text><path class="d-ink" d="M60,118 L60,160" stroke-width="2" marker-end="url(#t3u7a5)"/><path class="d-ink" d="M170,118 L170,160" stroke-width="2" marker-end="url(#t3u7a5)"/><path class="d-ink" d="M280,118 L280,160" stroke-width="2" marker-end="url(#t3u7a5)"/><text class="s" x="10" y="146">2. mean()</text><text class="s" x="10" y="160">of each</text><rect class="d-panel" x="20" y="166" width="80" height="34" rx="6" stroke-width="1.5"/><text x="60" y="188" text-anchor="middle">65.75</text><rect class="d-panel" x="130" y="166" width="80" height="34" rx="6" stroke-width="1.5"/><text x="170" y="188" text-anchor="middle">30.25</text><rect class="d-panel" x="240" y="166" width="80" height="34" rx="6" stroke-width="1.5"/><text x="280" y="188" text-anchor="middle">59.75</text><path class="d-ink" d="M60,202 L150,240" stroke-width="2" marker-end="url(#t3u7a5)"/><path class="d-ink" d="M170,202 L170,240" stroke-width="2" marker-end="url(#t3u7a5)"/><path class="d-ink" d="M280,202 L190,240" stroke-width="2" marker-end="url(#t3u7a5)"/><text class="s" x="10" y="232">3. combine</text><rect class="d-gold" x="40" y="246" width="260" height="56" rx="8" stroke-width="2"/><text class="mono" x="170" y="268" text-anchor="middle"> Hill  Park River</text><text class="mono" x="170" y="290" text-anchor="middle">65.75 30.25 59.75</text><text class="s" x="170" y="322" text-anchor="middle">one value per group, with the group names</text></svg>', alt:"Three boxes split the minutes by route: Hill 61, 83, 49, 70; Park 27, 31, 25, 38; River 52, 66, 47, 74 and NA. Arrows lead to the mean of each: 65.75, 30.25, 59.75. These combine into one named result: Hill 65.75, Park 30.25, River 59.75.", cap:"tapply() splits the values by group, applies the function to each piece, and combines the answers."},
      {h:"Compare like with like"},
      "Park walks look quickest, but they are also the shortest (`tapply(walks$km, walks$route, mean)` gives Hill 3.825, Park 2.325, River 4.72 km). A fairer measure is **pace**, minutes per km:",
      {code:['walks$pace <- walks$minutes / walks$km','round(tapply(walks$pace, walks$route, mean, na.rm = TRUE), 1)'].join("\n"), lang:"r"},
      {ex:" Hill  Park River \n 17.2  13.1  12.5 ", label:"R prints", mono:true},
      "Now the story is clearer: hill walks take about 17 minutes per km, the flat routes about 12 to 13. Totals and averages answer different questions; before comparing groups, ask whether they differ in size or exposure (Unit 1’s {{percentages-rates|rates}}). And with only four or five walks per route, these are descriptions of this club’s walks, not firm facts about routes in general (Unit 6 covers {{standard-error-ci|uncertainty}}).",
      {lab:"dl-r-groups", t:"Practise: the mean score for each group"}
    ]},
    {h:"Base R charts", body:[
      "Base R draws a chart with one function call. Each takes the data, then labelling arguments. In RStudio and Posit Cloud the chart appears in the **Plots** tab (use **Export** to save it); in the Data Lab it appears under the output.",
      {code:'hist(walks$minutes, main = "How long the walks took", xlab = "Minutes")', lang:"r"},
      {fig:'<svg viewBox="0 0 340 336"><text x="170" y="24" text-anchor="middle">How long the walks took</text><text class="s" x="232" y="44">← main =</text><path class="d-ink" d="M50,250 L320,250" stroke-width="1.5"/><path class="d-ink" d="M50,250 L50,70" stroke-width="1.5"/><rect class="d-lup" x="56" y="170" width="36" height="80" stroke-width="1.5"/><rect class="d-lup" x="92" y="170" width="36" height="80" stroke-width="1.5"/><rect class="d-lup" x="128" y="170" width="36" height="80" stroke-width="1.5"/><rect class="d-lup" x="164" y="210" width="36" height="40" stroke-width="1.5"/><rect class="d-lup" x="200" y="130" width="36" height="120" stroke-width="1.5"/><rect class="d-lup" x="236" y="210" width="36" height="40" stroke-width="1.5"/><rect class="d-lup" x="272" y="210" width="36" height="40" stroke-width="1.5"/><text class="s" x="56" y="268" text-anchor="middle">20</text><text class="s" x="128" y="268" text-anchor="middle">40</text><text class="s" x="200" y="268" text-anchor="middle">60</text><text class="s" x="272" y="268" text-anchor="middle">80</text><text class="s" x="44" y="254" text-anchor="end">0</text><text class="s" x="44" y="174" text-anchor="end">2</text><text class="s" x="44" y="94" text-anchor="end">4</text><text class="s" x="22" y="130" text-anchor="middle">Fre-</text><text class="s" x="22" y="146" text-anchor="middle">quency</text><text x="180" y="292" text-anchor="middle">Minutes</text><text class="s" x="232" y="292">← xlab =</text><text class="s" x="10" y="312">Bins 10 wide (R chose them): 20–30 has</text><text class="s" x="10" y="328">2 walks, 60–70 has 3.</text></svg>', alt:"A histogram titled How long the walks took, labelled as set by main. The x-axis, labelled Minutes as set by xlab, runs from 20 to 90 in bins of 10. Bar heights: 2, 2, 2, 1, 3, 1, 1. The y-axis is Frequency.", cap:"`main` sets the title and `xlab` the x-axis label; R picks the bins unless you set `breaks`."},
      "R chose bins 10 minutes wide. Try `breaks = 4` or `breaks = 12` to ask for fewer or more ({{distributions|bin width}} changes how a histogram looks). Without `main` and `xlab`, R labels the chart with the code, “Histogram of walks$minutes”, which nobody else wants to read.",
      {code:['boxplot(pace ~ route, data = walks,','  main = "Pace by route", ylab = "Minutes per km")','plot(walks$km, walks$minutes, main = "Longer walks take longer",','  xlab = "Distance (km)", ylab = "Minutes", pch = 19)','barplot(table(walks$weather), main = "Weather on walks",','  ylab = "Number of walks")'].join("\n"), lang:"r"},
      {table:[
        ["Chart","Base R","Shows"],
        ["[[histogram-chart|Histogram]]","`hist(x)`","The shape of one numeric variable"],
        ["[[boxplot|Boxplot]]","`boxplot(y ~ group, data = d)`","A numeric variable compared across groups"],
        ["[[scatterplot|Scatterplot]]","`plot(x, y)`","Two numeric variables together"],
        ["Bar chart","`barplot(table(x))`","Counts of each category"]
      ]},
      "Useful arguments: `main` (title), `xlab` and `ylab` (axis labels: include units), `col` (fill colour, such as `col = \"grey\"`), `pch = 19` (solid dots) and `breaks` (histogram bins). In the boxplot, the Hill box sits far above the other two; with only four or five walks per route, though, each box is drawn from very few points, so say so. Unit 4’s {{chart-types}} helps you choose.",
      {tip:"To save a chart as a file from a script, wrap it: `png(\"pace.png\", width = 800, height = 600)`, then the chart code, then `dev.off()`. The image lands in the working directory."},
      {lab:"dl-r-hist", t:"Practise: a labelled histogram"}
    ]},
    {h:"Correlation with cor()", body:[
      "`cor(x, y)` gives [[pearson-r|Pearson’s r]] (Unit 5, {{correlation-coefficient}}). With a missing value, it needs telling which rows to use:",
      {code:['cor(walks$km, walks$minutes)','cor(walks$km, walks$minutes, use = "complete.obs")'].join("\n"), lang:"r"},
      {ex:"[1] NA\n[1] 0.8891209", label:"R prints", mono:true},
      "`use = \"complete.obs\"` means “use only the rows where both values are present”. The result, r ≈ 0.89, says the points lie fairly close to a rising straight line. Two cautions from Unit 5 apply in R just as on paper:",
      {list:[
        "**Plot first.** A single r can hide a curve, clusters or an outlier. The scatterplot above takes one line; always draw it.",
        "**Correlation isn’t causation.** Here the link is obvious, but r alone never shows that one thing causes another."
      ]},
      "`cor()` also offers `method = \"spearman\"`, a rank-based correlation that’s less affected by outliers and works for any steadily rising or falling pattern (0.90 here). Say which one you report.",
      {lab:"dl-r-cor", t:"Practise: the correlation between hours and score"}
    ]},
    {h:"A first straight-line model with lm()", body:[
      "A correlation says how tight the pattern is. A **linear model** puts a line through it, so you can say *how much* one variable changes with the other. `lm()` stands for linear model:",
      {code:['fit <- lm(minutes ~ km, data = walks)','fit'].join("\n"), lang:"r"},
      {ex:"\nCall:\nlm(formula = minutes ~ km, data = walks)\n\nCoefficients:\n(Intercept)           km  \n      3.154       13.390  ", label:"R prints", mono:true},
      "Read the formula `minutes ~ km` as “minutes, predicted from km”: the **outcome** goes on the left of `~`, the **predictor** on the right. The fitted line is about minutes = 3.15 + 13.39 × km.",
      {list:[
        "The **[[slope]]**, 13.39, is the key number: each extra kilometre went with about 13.4 more minutes, on average, in these walks.",
        "The **[[intercept]]**, 3.15, is the line’s value at 0 km. Nobody walks 0 km, so here it’s just where the line starts, not something to interpret.",
        "`coef(fit)` gives both numbers; `coef(fit)[2]` the slope alone. `predict(fit, data.frame(km = 5))` gives the line’s value at 5 km, about 70 minutes."
      ]},
      "Add the line to the scatterplot with `abline(fit)` after `plot()`. Then look at which points sit above it: all four Hill walks do. The line ignores the route, so it under-predicts hill walks. The gaps between points and line are the **[[residual|residuals]]**, and patterns in them point to something the model is missing.",
      "`lm()` quietly left out walk 13, which has no time (`nobs(fit)` is 12). `summary(fit)` shows much more: standard errors, p-values and [[r-squared|R²]] (0.79 here). Unit 6 of this track explains those ({{linear-regression}}). For now, the slope and the causation warning are enough: a slope describes a pattern in these data; on its own it doesn’t prove that one thing causes the other.",
      {lab:"dl-r-lm", t:"Practise: fit lm() and store the slope"}
    ]},
    {h:"Putting it together in a script", body:[
      "Here is the whole analysis as one script, the kind of file you would save as `walks.R`. Comments, after `#`, explain *why*, as R for Data Science advises:",
      {code:['# Walking club: how long do walks take, and why?','walks <- read.csv("walks.csv")','str(walks)                 # 13 walks, 5 columns','colSums(is.na(walks))      # walk 13 has no time','','# Pace is fairer than total minutes: routes differ in length','walks$pace <- walks$minutes / walks$km','round(tapply(walks$pace, walks$route, mean, na.rm = TRUE), 1)','','boxplot(pace ~ route, data = walks,','  main = "Pace by route", ylab = "Minutes per km")','','fit <- lm(minutes ~ km, data = walks)','coef(fit)'].join("\n"), lang:"r", label:"walks.R"},
      "Run it from top to bottom. In RStudio, R for Data Science recommends restarting R (**Session → Restart R**) and rerunning the whole script now and then: if it still works from a clean start, your script, not your memory, holds the analysis.",
      {key:"Read, check, summarise, compare fairly, chart, and only then model. Write each step in a script so anyone can rerun it."},
      "Unit 8 does the same jobs with the tidyverse: dplyr’s `group_by()` and `summarise()` instead of `tapply()` ({{grouped-summaries}}), and ggplot2 for charts. Knowing base R first means you’ll understand what those tools do for you, and you can still work in the Data Lab, which has base R only."
    ]}
   ],
   try:[
    {id:"t3u7-l5-x1", type:"mcq", q:"`x <- c(12, 15, NA, 18)`. What does `sd(x)` give?", options:[
      {t:"NA", ok:true, why:"Like mean(), sd() returns NA if any value is missing. Use `sd(x, na.rm = TRUE)` for the standard deviation of the three known values (3)."},
      {t:"3", why:"That’s `sd(x, na.rm = TRUE)`. Without na.rm, the missing value makes the answer NA."},
      {t:"An error", why:"sd() doesn’t stop with an error on NA; it returns NA."},
      {t:"0", why:"A missing value isn’t treated as zero, and the spread wouldn’t be 0 anyway."}
    ]},
    {id:"t3u7-l5-x2", type:"order", q:"Put the arguments of `tapply()` in the right order to get the mean score for each group of a data frame `d`.", items:[
      {t:"`d$score`: the values to summarise", why:"tapply() takes the values first."},
      {t:"`d$group`: what to split them by", why:"Second come the groups."},
      {t:"`mean`: the function to apply to each group", why:"Third, the function, written without brackets: tapply() calls it for you."},
      {t:"`na.rm = TRUE`: passed on to mean()", why:"Any extra arguments come last and are handed to the function."}
    ]},
    {id:"t3u7-l5-x3", type:"mcq", q:"Two cafés: Café A served 900 customers in 30 days, Café B 600 in 15 days. `tapply(d$customers, d$cafe, sum)` gives A 900, B 600. What’s the fairer comparison?", options:[
      {t:"Customers per day: A 30, B 40", ok:true, why:"The cafés were observed for different lengths of time, so totals mislead. Per day, B was busier. Like pace for walks, a rate compares like with like."},
      {t:"Total customers: A is busier", why:"A was open twice as many days; the total mostly reflects that."},
      {t:"The median of the totals", why:"There are only two totals; summarising them doesn’t fix the unequal time periods."},
      {t:"They can’t be compared", why:"They can, once you divide by the number of days."}
    ]},
    {id:"t3u7-l5-x4", type:"match", q:"Match each question to the base R chart that answers it.", pairs:[
      ["What’s the shape of the waiting times?","`hist(d$wait)`","A histogram shows the distribution of one numeric variable."],
      ["Do waiting times differ between clinics?","`boxplot(wait ~ clinic, data = d)`","A boxplot per group compares centres and spreads."],
      ["Do longer queues mean longer waits?","`plot(d$queue, d$wait)`","A scatterplot shows how two numeric variables move together."],
      ["How many visits came from each clinic?","`barplot(table(d$clinic))`","A bar chart of counts compares categories."]
    ]},
    {id:"t3u7-l5-x5", type:"spot", q:"Oluwaseun wants a histogram of `d$age` with the title “Ages” and the x-axis label “Age (years)”. Tap the parts that are wrong.", ask:"is wrong", mono:true, parts:[
      {t:"hist(", flag:false, why:"hist() is the right function for a histogram."},
      {t:"d$age", flag:false, why:"The numeric column to draw: fine."},
      ", ",
      {t:"title = \"Ages\"", flag:true, why:"The title argument is `main`, not `title`. Write `main = \"Ages\"`."},
      ", ",
      {t:"xlab = \"Age (years)\"", flag:false, why:"xlab sets the x-axis label, with units: right."},
      {t:")", flag:false, why:"The bracket closes the call: fine."}
    ]},
    {id:"t3u7-l5-x6", type:"number", q:"A model `lm(price ~ size, data = flats)` has intercept 20 and slope 3, with price in thousands and size in square metres. What price does the line give for a 50 m² flat (in thousands)?", answer:170, tol:0, unit:"thousand", why:"The line is price = 20 + 3 × size. For 50 m²: 20 + 3 × 50 = 20 + 150 = 170 thousand.", wrongs:[
      {v:150, tol:0, why:"That’s just slope × size. Add the intercept, 20."},
      {v:1150, tol:0, why:"That multiplies both numbers by 50 ((20 + 3) × 50). Only the slope multiplies the size; the intercept is added once."},
      {v:73, tol:0, why:"That adds the three numbers (20 + 3 + 50). The slope multiplies the size."}
    ]},
    {id:"t3u7-l5-x7", type:"mcq", q:"Ana fits `lm(score ~ hours, data = d)` and gets a slope of 5.6. Which statement is justified?", options:[
      {t:"In these data, each extra hour went with about 5.6 more points, on average", ok:true, why:"That describes the fitted line: the change in predicted score per extra hour, for these data."},
      {t:"Studying one more hour will raise any student’s score by 5.6 points", why:"A slope from observational data doesn’t prove cause, and it describes an average pattern, not what happens to each person."},
      {t:"5.6% of the variation in score is explained by hours", why:"That’s a misreading. The share of variation explained is R², shown by summary(fit), and it’s a different number."},
      {t:"The correlation between hours and score is 5.6", why:"A correlation is always between −1 and 1. The slope is in score points per hour."}
    ]}
   ],
   apply:{intro:"Use walks.csv (from Lesson 4) in the Data Lab, RStudio or Posit Cloud, or the Data Lab’s `survey.csv`.", tasks:[
    {t:"Summarise and compare", how:[
      "Read the data and run `summary()` on it.",
      "Calculate the mean and median of one numeric column, with `na.rm = TRUE` where needed.",
      "Compare a numeric column across groups with `tapply()` and with `aggregate()`.",
      "Ask whether the groups differ in size or exposure, and if so make a fairer column (a rate such as pace) and compare that."
    ], write:"Overall centre and spread… Group means… A fairer comparison, and what changed…"},
    {t:"Chart it", how:[
      "Draw a histogram of one numeric column with a title (`main`) and an axis label with units (`xlab`).",
      "Draw a boxplot of that column by group.",
      "Draw a scatterplot of two numeric columns with `plot(x, y)`, with both axes labelled.",
      "On a computer, export one chart (RStudio: **Plots → Export → Save as Image**). In the Data Lab, the charts appear under the output; take a screenshot if you want to keep one."
    ], write:"What the histogram’s shape shows… What the boxplot shows… What the scatterplot shows…"},
    {t:"Correlate and fit a line", how:[
      "Calculate `cor(x, y)` for your two numeric columns (with `use = \"complete.obs\"` if there are NAs).",
      "Fit `fit <- lm(y ~ x, data = d)` and print `coef(fit)`.",
      "Redraw the scatterplot and add `abline(fit)`. Which points sit far from the line? Is there a group they share?",
      "Write one sentence about the slope that a careful reader would accept, with no claim of cause."
    ], write:"r = … The slope means… Points far from the line… My careful sentence…"},
    {t:"Do the Data Lab challenges", how:["In **Labs → Data Lab**, do **Compare groups**, **A histogram**, **Correlation** and **A straight-line model**."]}
   ], proof:"A short script (or notes) with summaries, a fair group comparison, three labelled charts, r and a slope with a careful one-sentence interpretation, and four R challenges solved."},
   read:[
     {book:"r4ds", where:"Chapter 27, “A field guide to base R”, sections “Apply family” and “Plots”; Chapter 6, “Workflow: scripts and projects”, section “Scripts”", note:"Short, and it shows how base R and the tidyverse relate."},
     {book:"ostat", where:"Chapter 12, Section 12.3 “The Regression Equation”", note:"The slope and intercept of a straight line, calculated by hand, to set beside `lm()`."}
   ]
  }
  ],
  checkpoint:["t3u7-q02","t3u7-q06","t3u7-q11","t3u7-q14","t3u7-q17","t3u7-q22","t3u7-q25","t3u7-q30","t3u7-q34","t3u7-q37","t3u7-q41","t3u7-q45"],
  codex:[
   {id:"r-intro", title:"R and base R", aka:["R","R language","R programming","base R","CRAN","R packages","install.packages","library()","R versions"], tags:["data","coding","statistics"],
    summary:"What R is, where it comes from, what base R and packages are, how to install and load a package, and how R versions work.",
    levels:{
     starter:[
      "[[r-language|R]] is a free programming language, and the program that runs it, made for statistics, data and charts. Instead of clicking through menus, you write short instructions such as `mean(walks$minutes)`, and R carries them out.",
      "Think of R as a well-equipped kitchen. **Base R** is the kitchen as delivered: ovens, knives and pans, enough to cook almost anything. **Packages** are extra gadgets you can add for special jobs, and **[[cran|CRAN]]** is the shop where you get both the kitchen and the gadgets, all free.",
      "Why write code? Because the code is a record. Save it in a script, and anyone can rerun your analysis on new data, check each step, or find a mistake. That is much harder with a series of clicks.",
      "You can run R on a computer (usually with RStudio), in a browser with Posit Cloud, or in this app’s Data Lab, which runs base R inside the page.",
      {key:"R = a language for data. Base R does a lot; packages add more; CRAN is where both come from."}
     ],
     builder:[
      "**Where R comes from.** R was created by Ross Ihaka and Robert Gentleman at the University of Auckland, based on the S language developed at Bell Labs. Version 1.0.0 was released in February 2000. The R Core Team maintains it, and it’s free and open-source software under the GNU GPL.",
      "**Base R** is what you get when you install R: the `base` package plus standard ones such as `stats` (models and tests), `graphics` (charts) and `utils` (including `read.csv()`). They load automatically.",
      "**Packages** add functions, data and documentation. Install once, load each session:",
      {code:['install.packages("palmerpenguins")   # once, needs internet','library(palmerpenguins)             # each session'].join("\n"), lang:"r"},
      "`install.packages()` downloads from CRAN (names go in quotes); `library()` makes the package’s functions available (quotes optional). An error such as `there is no package called ‘palmerpenguins’` means it isn’t installed yet. R for Data Science installs the tidyverse with `install.packages(\"tidyverse\")`; this track’s Unit 8 uses it.",
      "**Versions.** R for Data Science notes that a new “major” version comes out once a year with two or three smaller releases in between. In practice the second number changes each spring (4.4, 4.5, 4.6) and the third marks bug-fix releases (4.6.1, 4.6.2). `R.version.string` shows yours. After a yearly upgrade you usually need to reinstall your packages.",
      "**Which version for this unit?** The native pipe `|>` arrived in R 4.1.0, so anything from 4.1 onwards runs every example. The Data Lab runs R 4.6."
     ],
     pro:[
      "**Help.** `?mean` or `help(mean)` opens a function’s help page; `??\"linear model\"` searches all installed help. Help pages end with runnable examples (`example(mean)`). `vignette(package = \"stats\")` lists longer guides where a package has them.",
      "**Calling without loading.** `pkg::fun()` calls a function from an installed package without `library()`, for example `utils::head(x)`. R for Data Science uses this notation to show where a function comes from. If two loaded packages have functions with the same name, the one loaded last wins (it **masks** the other); `pkg::` removes the doubt.",
      "**Reproducibility.** `sessionInfo()` prints your R version, operating system and loaded package versions; include it when you report a problem or archive an analysis. Packages such as renv record a project’s exact package versions so the code still runs years later (Data Carpentry mentions renv for this).",
      "**Trusting packages.** CRAN runs automated checks on every package, but it doesn’t review whether a package’s statistics are right. Prefer well-documented, widely used packages, check their documentation, and be wary of package names suggested by AI tools: as Track 2, Unit 10 warns, a suggested package may not exist, or may be an impostor ({{ai-code-licensing-security}}).",
      "**Version changes that matter.** R 4.0.0 changed `data.frame()` and `read.csv()` to keep text as text (`stringsAsFactors = FALSE`); older code and tutorials may assume factors. R 4.1.0 added `|>` and the short function syntax `\\(x) x + 1`. R 4.2.0 made UTF-8 the native text encoding on recent Windows systems. When old code behaves strangely, check which R it was written for.",
      "**Base R or tidyverse?** Both are R. R for Data Science teaches the tidyverse for consistency, and its base-R chapter says plainly that mixing approaches is fine. Base R matters because it is always there (including in the Data Lab and on locked-down machines), and because tidyverse functions are built on it."
     ]},
    related:["rstudio-posit","r-objects-vectors","r-errors","tidyverse"],
    read:[{book:"r4ds", where:"Introduction, “Prerequisites” (R, RStudio, the tidyverse and other packages)"},{book:"dcss", where:"R for Social Scientists, “Before we Start” (“What is R? What is RStudio?”, “Why learn R?” and installing packages)"}],
    sources:[{t:"R for Data Science (2e) source: Introduction (intro.qmd)", url:"https://github.com/hadley/r4ds/blob/main/intro.qmd"},{t:"Data Carpentry, R for Social Scientists source: Before we Start", url:"https://github.com/datacarpentry/r-socialsci/blob/main/episodes/00-intro.Rmd"},{t:"R NEWS (changes in each R release), r-source mirror", url:"https://github.com/wch/r-source/blob/trunk/doc/NEWS.Rd"}],
    checked:"2026-11"},

   {id:"rstudio-posit", title:"RStudio, Posit Cloud and webR", aka:["RStudio","RStudio Desktop","IDE","Posit","Posit Cloud","RStudio Cloud","webR","R in the browser","Data Lab","RStudio projects","console","script"], tags:["data","coding","tools"],
    summary:"The main ways to run R: R on its own, RStudio Desktop, Posit Cloud in a browser, and webR (used by this app’s Data Lab), with RStudio’s panes, scripts and projects.",
    levels:{
     starter:[
      "R itself is the engine. You also need somewhere to type. The usual choice is [[rstudio|RStudio]], a free program that wraps R in a friendly window with space for scripts, results, charts and help.",
      {list:[
        "**RStudio Desktop**: install R, then RStudio, on your computer.",
        "**[[posit-cloud|Posit Cloud]]**: RStudio in your web browser, running on Posit’s computers. Free account; no installing.",
        "**[[webr|webR]]**: R rebuilt to run inside a web page. This app’s **Data Lab** uses it, so R works on a phone."
      ]},
      "Whichever you choose, the R code is the same. Pick by convenience: what you can install, which device you have, and whether your data may leave your computer.",
      {key:"Same R everywhere; only the window and the place it runs change."}
     ],
     builder:[
      "**RStudio’s four panes** (default layout): **Source** (scripts, top left), **Console** (where R runs, bottom left), **Environment/History** (your objects, top right) and **Files/Plots/Packages/Help** (bottom right). Rearrange them in **Tools → Global Options → Pane Layout**.",
      "**Console prompts.** `>` means R is ready. `+` means R is waiting for the rest of a command, usually an unclosed bracket or quote: finish it or press [[kbd:Esc]].",
      "**Scripts.** **File → New File → R Script** opens an editor; save as `something.R`. [[kbd:Ctrl]] + [[kbd:Enter]] ([[kbd:Cmd]] + [[kbd:Return]] on a Mac) runs the current line or selection. [[kbd:Alt]] + [[kbd:-]] types `<-` with spaces.",
      "**Projects.** **File → New Project** makes a folder with an `.Rproj` file. Opening the project sets the working directory to that folder, so relative paths such as `\"data/walks.csv\"` work on any computer.",
      "**Posit Cloud.** Sign up at posit.cloud, open **Your Workspace**, choose **New Project → New RStudio Project**. Upload files in the Files pane. Usage is counted in **compute hours**: (GB of memory + processors) ÷ 2 × hours; a default project (1 GB, 1 processor) uses about one compute hour per hour. Idle projects are suspended after 15 minutes, and that idle time counts. The free plan has a monthly compute-hour allowance and a project cap: see posit.cloud/plans for current figures.",
      "**webR and the Data Lab.** The lab runs base R 4.6. The first R challenge downloads up to 46 MB (saved afterwards). ▶ Run shows output and charts; Check tests your objects, and in most challenges that read a file it repeats the test on a second version of the file with different numbers; Hint, Show an answer and Start again help when stuck. Files are listed above the editor."
     ],
     pro:[
      "**Clean slate.** R for Data Science recommends telling RStudio not to save and restore your workspace (**Tools → Global Options → General**: untick restoring `.RData`, and set saving to Never), then regularly restarting R (**Session → Restart R**) and rerunning your script. If it works from scratch, the script holds the truth, not your memory. The book notes that on RStudio Server closing the browser tab doesn’t end the R session, which makes restarting more important; Posit Cloud also runs RStudio on a server, so the same habit helps there.",
      "**Where data goes.** Desktop R keeps data on your machine. Posit Cloud stores files on Posit’s servers (each project has up to 20 GB, and a single upload can be up to 500 MB, per its documentation): check your organisation’s rules before uploading personal or confidential data. webR runs in your browser, so the Data Lab’s data never leaves your device.",
      "**webR’s limits.** webR is R compiled to WebAssembly with Emscripten, maintained by the r-wasm project. It can load many packages built for it, but not every CRAN package (some need system libraries that don’t exist in a browser), and it is slower than desktop R for heavy work. The Data Lab deliberately offers base R only. The webR project’s own online console is at webr.sh.",
      "**Other front ends.** R also has a plain console (RGui on Windows, R.app on macOS, `R` in a terminal), runs scripts without a window via `Rscript analysis.R`, and works in other editors such as VS Code (with an R extension), Positron (Posit’s newer editor for data science) and Jupyter notebooks. RStudio remains the most common choice in teaching materials, including both of this unit’s main sources.",
      "**ChromeOS.** In the Linux development environment, `sudo apt install r-base` installs Debian’s R, often older than CRAN’s latest; CRAN also publishes newer Debian builds. RStudio Desktop’s Linux `.deb` installer is built for x86_64 (Intel/AMD) processors and targets particular Ubuntu and Debian releases, so it won’t install on ARM Chromebooks and may not on an older Debian; check the download page against your Chromebook."
     ]},
    related:["r-intro","reading-csv-r","r-errors","shell-on-your-device"],
    read:[{book:"dcss", where:"R for Social Scientists, “Before we Start” (“Knowing your way around RStudio”, “Getting set up”, “Interacting with R”)"},{book:"r4ds", where:"Chapter 6, “Workflow: scripts and projects”"}],
    sources:[{t:"Posit Cloud documentation: Compute Hours and the Background Execution Limit", url:"https://docs.posit.co/cloud/guide/articles/compute-hours.html"},{t:"Posit Cloud documentation: Projects", url:"https://docs.posit.co/cloud/guide/projects.html"},{t:"webR: R in the browser (r-wasm project, GitHub)", url:"https://github.com/r-wasm/webr"}],
    checked:"2026-11"},

   {id:"r-objects-vectors", title:"Objects, vectors and types in R", aka:["object","variable","assignment","<-","vector","c()","indexing","subsetting a vector","numeric","character","logical","integer","NA","NULL","vectorised","recycling","coercion"], tags:["coding","data"],
    summary:"Storing values with `<-`, naming objects, R’s basic types, building and indexing vectors, vectorised arithmetic, coercion, and the special values NA and NULL.",
    levels:{
     starter:[
      "An **[[r-object|object]]** is a value with a name. `price <- 12.5` stores 12.5 under the name `price` (read it as “price gets 12.5”). Type `price` to see it.",
      "A **[[r-vector|vector]]** is a row of values of the same kind, made with `c()`: `steps <- c(4200, 8100, 6550)`. R works on the whole row at once: `steps / 1000` divides every value.",
      "Three kinds (types) of value matter most: **numbers** (`12.5`), **text** in quotes (`\"Rain\"`) and **TRUE/FALSE**. Quotes change everything: `\"12.5\"` is text, and you can’t do sums with it.",
      "Pick values with square brackets. Positions start at 1: `steps[2]` is 8100. A TRUE/FALSE question works too: `steps[steps > 5000]` keeps the big ones.",
      {key:"Objects hold values, not formulas: change `qty` and `total` stays the same until you recalculate it."}
     ],
     builder:[
      "**Names** start with a letter and contain letters, digits, `_` and `.`; capitals count. snake_case (`price_per_kg`) is the common style. Assigning to an existing name overwrites it silently. `ls()` lists objects; `rm(x)` removes one.",
      "**Types.** `class()` reports `\"numeric\"`, `\"character\"`, `\"logical\"` (and `\"integer\"` for whole numbers such as `5L` or `1:3`, and for whole-number columns read from files). Convert with `as.numeric()`, `as.character()`, `as.logical()`. A failed conversion gives NA with the warning `NAs introduced by coercion`.",
      "**Coercion.** A vector holds one type, so mixing converts everything to the most flexible type: logical → numeric → character. `c(1, TRUE)` is `1 1`; `c(1, \"a\")` is `\"1\" \"a\"`.",
      "**Indexing.** `x[2]`, `x[c(1, 3)]`, `x[-1]` (all but the first), `x[x > 5]` (by condition). `x[10]` on a shorter vector gives NA, not an error.",
      "**Vectorised operations.** Arithmetic and comparisons work element by element, so `price * qty` multiplies matching pairs. `sum(x > 5)` counts and `mean(x > 5)` gives the proportion, because TRUE = 1 and FALSE = 0.",
      "**Missing values.** `NA` means unknown. Anything calculated from NA is NA: `NA > 1` is NA, and even `NA == NA` is NA. Test with `is.na(x)`, and use `na.rm = TRUE` in summaries.",
      {code:['x <- c(3, NA, 7)','is.na(x)','sum(x, na.rm = TRUE)'].join("\n"), lang:"r"},
      {ex:"[1] FALSE  TRUE FALSE\n[1] 10", label:"R prints", mono:true}
     ],
     pro:[
      "**Numeric means double.** `typeof(5)` is `\"double\"`: R stores most numbers as 64-bit floating point, like spreadsheets do, so `0.1 + 0.2 == 0.3` is FALSE. Compare decimals with `isTRUE(all.equal(a, b))` or round first. Integers (`5L`) are exact but rarely needed in analysis.",
      "**Rounding.** `round()` follows the IEC 60559 standard’s “round half to even” for exactly representable halves, so `round(2.5)` is 2 and `round(0.5)` is 0. And many decimals aren’t stored exactly: 0.15 is really a little less than 0.15, so `round(0.15, 1)` gives 0.1 (R’s help page for `round` gives this example). Don’t round until you present results.",
      "**Recycling.** When two vectors differ in length, R repeats the shorter one: `c(1, 2, 3, 4) + c(10, 20)` gives 11 22 13 24. If the longer length isn’t a multiple, you get the warning `longer object length is not a multiple of shorter object length`. Recycling a single value (`x * 2`) is the everyday case; anything else is usually a mistake.",
      "**NA, NULL, NaN and Inf.** `NA` is a missing value of some type (it has a place in the vector). `NULL` is “no object at all”: `length(NULL)` is 0, and a misspelt column after `$` gives NULL. `NaN` (“not a number”) comes from undefined maths like `0 / 0`; `Inf` from `1 / 0`. `is.na()` is TRUE for both NA and NaN.",
      "**Assignment forms.** `<-` is standard; `=` also assigns at the top level; `->` assigns rightwards. Inside a function call, `=` names an argument (`round(x, digits = 2)`), which is why style guides keep `=` for arguments and `<-` for assignment.",
      "**Lists.** A vector has one type; a **list**, made with `list()`, can hold anything, including other lists. Data frames are lists of equal-length vectors, and model results from `lm()` are lists too, which is why `fit$coefficients` works."
     ]},
    related:["r-intro","data-frames-r","summary-stats-r","r-errors","py-values-types"],
    read:[{book:"r4ds", where:"Chapter 2, “Workflow: basics”"},{book:"dcss", where:"R for Social Scientists, “Introduction to R” (“Creating objects in R”, “Vectors and data types”, “Subsetting vectors”, “Missing data”)"}],
    sources:[{t:"R for Data Science (2e) source: Workflow: basics (workflow-basics.qmd)", url:"https://github.com/hadley/r4ds/blob/main/workflow-basics.qmd"},{t:"Data Carpentry, R for Social Scientists source: Introduction to R", url:"https://github.com/datacarpentry/r-socialsci/blob/main/episodes/01-intro-to-r.Rmd"}],
    checked:"2026-11"},

   {id:"data-frames-r", title:"Data frames in R", aka:["data frame","data.frame()","str()","head()","summary()","$","[[ ]]","[rows, columns]","factor","tibble","nrow","ncol"], tags:["data","coding"],
    summary:"R’s table: equal-length column vectors. Making, inspecting, selecting, adding columns, sorting, factors, and how tibbles relate.",
    levels:{
     starter:[
      "A **[[data-frame|data frame]]** is R’s version of a tidy table: one row per observation, one column per variable. Each column is a vector, so each column has one type (numbers, text or TRUE/FALSE), and all columns are the same length.",
      "You usually get a data frame by reading a file with `read.csv()`. You can also build one: `data.frame(item = c(\"Bread\", \"Scone\"), price = c(3.2, 1.8))`.",
      "First, look at it: `str(d)` shows each column’s type, `head(d)` the first rows, `summary(d)` a summary of every column. Then pick a column with `$`: `d$price` is a vector you can take the `mean()` of.",
      {key:"`nrow(d)` counts rows; `length(d)` counts columns, because a data frame is a set of columns."}
     ],
     builder:[
      {table:[
        ["Code","Gives"],
        ["`d$price`, `d[[\"price\"]]`","One column, as a vector"],
        ["`d[\"price\"]`","One column, as a data frame"],
        ["`d[2, ]`","Row 2 (a data frame)"],
        ["`d[, c(\"item\", \"price\")]`","Two columns"],
        ["`d[d$price > 2, ]`","Rows meeting a condition"],
        ["`subset(d, price > 2, select = c(item, price))`","The same, more readably"]
      ]},
      "**Adding and changing.** `d$total <- d$price * d$sold` adds a column, calculated row by row. `d$price[4] <- 1.0` changes one value. `d$total <- NULL` removes a column. These change the copy in R, never the file you read.",
      "**Sorting.** `d[order(d$total, decreasing = TRUE), ]` sorts rows; `order(d$a, d$b)` breaks ties by a second column. `head(d[order(d$total, decreasing = TRUE), ], 3)` gives the top three, a pattern you’ll use often.",
      "**Inspecting.** `str(d)` for types, `head(d)` for a few rows, `summary(d)` for ranges and missing values, `nrow(d)` and `ncol(d)` for size, `names(d)` for exact column names. Run them every time you read or change data.",
      "**Factors.** A factor stores categories with a fixed set of levels in a chosen order, which tables, charts and models follow: `factor(size, levels = c(\"small\", \"medium\", \"large\"))`. Since R 4.0, `data.frame()` and `read.csv()` keep text as character unless you ask (`stringsAsFactors = TRUE`).",
      "**Common slips.** Columns of different lengths give `arguments imply differing number of rows`. A misspelt name after `$` gives `NULL` (no error). Forgetting the comma, `d[d$price > 2]`, makes R pick columns and fail with `undefined columns selected`."
     ],
     pro:[
      "**What a data frame really is.** A list of equal-length vectors with a `names` attribute (column names), `row.names`, and class `\"data.frame\"`. That’s why `length(d)` is the number of columns and why `lapply(d, class)` (or `sapply`) applies a function to each column.",
      "**Simplification.** `d[, \"price\"]` drops to a vector because `[` has `drop = TRUE` by default when one column is selected; `d[, \"price\", drop = FALSE]` keeps a data frame. Selecting rows keeps a data frame too, except from a data frame with only one column, which also drops to a vector unless you add `drop = FALSE`. Tibbles (tidyverse) never drop, which is one of their deliberate differences.",
      "**Partial matching.** `$` on a data frame partially matches names: `d$pri` can quietly return the `price` column (R only warns if you set `options(warnPartialMatchDollar = TRUE)`). `d[[\"pri\"]]` doesn’t match partially. Write full names. Tibbles don’t partially match either.",
      "**Row names.** Base data frames carry row names (by default 1, 2, 3…). After subsetting or sorting they keep the originals, which helps trace rows; `rownames(d) <- NULL` resets them. Tibbles drop row names, and `write.csv()` writes them as an extra first column unless you add `row.names = FALSE`.",
      "**Tibbles.** The tidyverse’s `tibble` is a data frame with stricter, friendlier behaviour: it prints only what fits with column types shown, never converts strings, and doesn’t partially match. Most base functions accept tibbles; occasionally old code relying on `drop` behaves differently. Data Carpentry’s R lesson reads data with readr and so works with tibbles throughout.",
      "**Factor pitfalls.** `as.numeric()` on a factor returns the level codes (1, 2, 3…), not the numbers in the labels: use `as.numeric(as.character(f))`. Levels not present still show up in `table()` with count 0, which is useful for survey answers nobody chose; `droplevels()` removes them."
     ]},
    related:["r-objects-vectors","reading-csv-r","summary-stats-r","tidy-data-principles","tidyverse"],
    read:[{book:"dcss", where:"R for Social Scientists, “Starting with Data”"},{book:"r4ds", where:"Chapter 27, “A field guide to base R”"}],
    sources:[{t:"Data Carpentry, R for Social Scientists source: Starting with Data", url:"https://github.com/datacarpentry/r-socialsci/blob/main/episodes/02-starting-with-data.Rmd"},{t:"R for Data Science (2e) source: A field guide to base R (base-R.qmd)", url:"https://github.com/hadley/r4ds/blob/main/base-R.qmd"}],
    checked:"2026-11"},

   {id:"reading-csv-r", title:"Reading data files into R", aka:["read.csv","read.csv2","read.delim","write.csv","working directory","getwd","setwd","relative path","na.strings","fileEncoding","import data in R"], tags:["data","coding","files"],
    summary:"The working directory and relative paths, reading CSV and similar files with `read.csv()` and friends, checking what arrived, and writing results back out.",
    levels:{
     starter:[
      "To read a file, R must find it. It looks in one folder, the **[[working-directory-r|working directory]]**. `getwd()` shows which folder that is. A name like `\"walks.csv\"` means “in that folder”; `\"data/walks.csv\"` means “in its data subfolder”.",
      "`walks <- read.csv(\"walks.csv\")` reads a [[csv|CSV]] file into a data frame. The first line becomes the column names; each column gets a type; empty cells become `NA`.",
      "Then check: `str(walks)` (types), `summary(walks)` (odd values and NAs), `nrow(walks)` (did all the rows arrive?).",
      "In RStudio, an **RStudio project** sets the working directory for you. In the Data Lab, the challenge’s files are already in R’s folder. No file at all? `read.csv(text = \"…\")` reads data written straight into your code, handy on a phone.",
      "Reading a file never changes it: R works on a copy in memory, so your raw data stays safe.",
      {key:"Read with a relative path, then check before you calculate."}
     ],
     builder:[
      {table:[
        ["Function","For"],
        ["`read.csv(f)`","Commas between values, full-stop decimals"],
        ["`read.csv2(f)`","Semicolons between values, comma decimals (common in much of Europe and Latin America)"],
        ["`read.delim(f)`","Tab-separated (TSV) files"],
        ["`read.csv(text = \"…\")`","Data typed or pasted straight into the code"]
      ]},
      "**Useful arguments.** `na.strings = c(\"\", \"NA\", \"n/a\", \"-99\")` lists the codes that mean missing. `header = FALSE` if there’s no header row. `skip = 2` skips lines at the top (titles, notes). `fileEncoding = \"UTF-8\"` (or `\"UTF-8-BOM\"`, for a file with a byte-order mark) helps with accented letters.",
      "**Signs of trouble.** A numeric column read as `chr` contains some text (units, notes, decimal commas). One giant column means the wrong separator. An odd first column name such as `X...id` or `ï..id` points to a byte-order mark ([[byte-order-mark|BOM]], Unit 2) that R didn’t recognise; add `fileEncoding = \"UTF-8-BOM\"`. (R in a UTF-8 setting, as on macOS, Linux and Windows since R 4.2, skips a BOM by itself.) `cannot open the connection` with the warning `No such file or directory` means a wrong name or working directory.",
      "**A checking routine.** After every read: `str()` (are the types right?), `nrow()` (all rows there?), `summary()` (impossible values, NA counts) and `head()` (do the values look like the file?). Two minutes here saves hours later.",
      "**Writing out.** `write.csv(results, \"results.csv\", row.names = FALSE)` saves a data frame. Without `row.names = FALSE`, R adds the row numbers as an extra unnamed first column. Write results to a separate file (or an output folder), never over the raw data."
     ],
     pro:[
      "**Type guessing.** `read.csv()` reads columns as text and then converts each with `type.convert()`: logical, integer, double, or character if anything doesn’t fit. Force types with `colClasses`, for example `colClasses = c(postcode = \"character\")` to keep leading zeros in codes such as `02139`, which would otherwise become the number 2139.",
      "**Dates** arrive as text. Convert with `as.Date(x)` for ISO dates (`2026-06-30`) or give a format: `as.Date(\"30/06/2026\", format = \"%d/%m/%Y\")`. Unit 2 explains why {{dates-in-data|ISO dates}} save trouble.",
      "**Paths.** Use `/` in paths on every system (R accepts it on Windows). `file.path(\"data\", \"walks.csv\")` builds a path portably. `list.files()` shows what R can see in the working directory, a quick check when a file “isn’t there”. Avoid `setwd()` with an absolute path in shared scripts; R for Data Science and Data Carpentry both recommend projects instead. The here package builds paths from the project root, as Data Carpentry uses.",
      "**Case sensitivity.** Linux (including Posit Cloud and Chromebooks’ Linux) and webR treat `Walks.csv` and `walks.csv` as different files; Windows and macOS usually don’t. Match names exactly so scripts move between systems.",
      "**Other formats and tools.** readr’s `read_csv()` (tidyverse) is faster, reports the column types it chose, and returns a tibble; readxl reads Excel files; haven reads SPSS, Stata and SAS; jsonlite reads JSON. For very large files, `data.table::fread()` or arrow are common. R for Data Science’s Chapter 7 covers readr, and its later chapters cover spreadsheets, databases and arrow.",
      "**Encodings.** Since R 4.2, R on recent Windows uses UTF-8 as its native encoding, which removed many old problems with accented text. Files saved in an older legacy encoding may still need `fileEncoding = \"latin1\"` or similar."
     ]},
    related:["csv-files","data-frames-r","missing-values","rstudio-posit","csv-python"],
    read:[{book:"r4ds", where:"Chapter 6, “Workflow: scripts and projects”, and Chapter 7, “Data import”"},{book:"dcss", where:"R for Social Scientists, “Before we Start” (“The working directory”) and “Starting with Data” (“Importing data”)"}],
    sources:[{t:"R for Data Science (2e) source: Workflow: scripts and projects (workflow-scripts.qmd)", url:"https://github.com/hadley/r4ds/blob/main/workflow-scripts.qmd"},{t:"R for Data Science (2e) source: Data import (data-import.qmd)", url:"https://github.com/hadley/r4ds/blob/main/data-import.qmd"},{t:"Data Carpentry, R for Social Scientists source: Before we Start", url:"https://github.com/datacarpentry/r-socialsci/blob/main/episodes/00-intro.Rmd"}],
    checked:"2026-11"},

   {id:"summary-stats-r", title:"Summaries, groups, correlation and lm() in base R", aka:["mean","median","sd","quantile","IQR","summary()","table()","prop.table","tapply","aggregate","cor()","lm()","coef","group means"], tags:["statistics","data","coding"],
    summary:"Base R’s summary functions, counting with `table()`, comparing groups with `tapply()` and `aggregate()`, correlation with `cor()`, and a straight-line model with `lm()`, with the NA rules for each.",
    levels:{
     starter:[
      "Each summary from Unit 5 is one function in R: `mean()`, `median()`, `sd()`, `min()`, `max()`, `quantile()`, `IQR()`. `summary()` gives several at once.",
      "If a column has missing values, add `na.rm = TRUE`: `mean(walks$minutes, na.rm = TRUE)`.",
      "Counting: `table(d$answer)` counts each value. `sum(d$age >= 30)` counts rows that pass a test, and `mean(d$answer == \"Yes\")` gives the share (TRUE counts as 1).",
      "Groups: `tapply(d$score, d$group, mean)` gives the mean for each group. Values first, then groups, then the function.",
      "Two variables: `cor(x, y)` gives Pearson’s r; `lm(y ~ x, data = d)` fits a straight line, and its slope says how much y changes per unit of x, on average.",
      {key:"Compare like with like (rates, not totals), and never read a correlation or slope as proof of cause."}
     ],
     builder:[
      {table:[
        ["Task","Base R"],
        ["Centre","`mean(x)`, `median(x)`"],
        ["Spread","`sd(x)`, `var(x)`, `IQR(x)`, `range(x)`"],
        ["Percentiles","`quantile(x, c(0.1, 0.9))`"],
        ["Counts / shares","`table(x)`, `prop.table(table(x))`"],
        ["Cross-table","`table(d$a, d$b)`"],
        ["Group summary","`tapply(d$y, d$g, mean)`, `aggregate(y ~ g, data = d, FUN = mean)`"],
        ["Correlation","`cor(x, y)`, `cor(x, y, method = \"spearman\")`"],
        ["Straight line","`fit <- lm(y ~ x, data = d)`, `coef(fit)`"]
      ]},
      "**NA rules.** `mean`, `median`, `sd`, `sum`, `min`, `max`, `quantile` and `IQR` take `na.rm = TRUE`. `cor()` uses `use = \"complete.obs\"` instead. `table()` drops NA unless `useNA = \"ifany\"`. `aggregate()` with a formula and `lm()` drop incomplete rows automatically, which is convenient but easy to miss: report how many rows were used (`nobs(fit)`).",
      "**sd is the sample version**, dividing by n − 1 (like STDEV.S in spreadsheets). **Quartiles**: `quantile()` defaults to type 7, the same rule as Excel’s QUARTILE.INC and PERCENTILE.INC; textbooks and other programs may differ slightly (Unit 5).",
      "**Compare like with like.** Before comparing group means, check group sizes (`table(d$g)`) and whether groups differ in exposure, such as distance or time. A rate (minutes per km, visits per day) is often fairer than a total, as the hill-route example in this unit shows.",
      "**Reading lm().** `lm(minutes ~ km, data = walks)` gives an intercept and a slope. The slope is the average change in the outcome per one-unit change in the predictor, within the range of the data. `predict(fit, data.frame(km = 5))` gives the line’s value. `abline(fit)` draws it on a scatterplot."
     ],
     pro:[
      "**summary(fit)** adds standard errors, t values, p-values, the residual standard error and R². Unit 6 of this track explains them ({{linear-regression}}). Check residuals before trusting any of it: `plot(fit)` draws four diagnostic plots; patterns in residuals (curves, groups above or below the line) mean the straight line is missing something, like the hill route in this unit’s example.",
      "**More than one predictor.** `lm(minutes ~ km + route, data = walks)` fits separate intercepts for each route (R turns the text column into indicator variables, with the first level as the baseline). Interpreting such models needs care, and is beyond this unit.",
      "**Formula notation.** `y ~ x` appears across R: `lm()`, `aggregate()`, `boxplot()`, `t.test(y ~ g, data = d)`. The left side is the outcome, the right the predictors or groups; `.` means “all other columns”.",
      "**Several summaries per group.** `aggregate(cbind(minutes, km) ~ route, data = walks, FUN = mean)` summarises several columns at once. `split(d$y, d$g)` returns a list of pieces for anything more complex, and `sapply(split(d$y, d$g), median)` applies a function to each. In the tidyverse, `group_by()` and `summarise()` do this job ({{grouped-summaries}}).",
      "**Weighted and robust choices.** `weighted.mean(x, w)` for weighted averages (Unit 1’s {{averages-misleading}}); `mean(x, trim = 0.1)` for a trimmed mean; `mad()` for a robust spread. Choose the measure for the question, then say which you used.",
      "**Correlation caveats.** Pearson’s r measures straight-line association only and is sensitive to outliers; Spearman’s works on ranks. `cor.test(x, y)` adds a confidence interval and p-value. Neither tells you about cause, and a small sample gives an unstable r."
     ]},
    related:["centre-spread","comparing-groups","correlation-coefficient","base-plots-r","linear-regression","grouped-summaries"],
    read:[{book:"r4ds", where:"Chapter 27, “A field guide to base R”, section “Apply family”"},{book:"ostat", where:"Chapter 12, Section 12.3 “The Regression Equation”"}],
    sources:[{t:"R for Data Science (2e) source: A field guide to base R (base-R.qmd)", url:"https://github.com/hadley/r4ds/blob/main/base-R.qmd"},{t:"OpenStax Introductory Statistics 2e, 12.3 The Regression Equation", url:"https://openstax.org/books/introductory-statistics-2e/pages/12-3-the-regression-equation"}],
    checked:"2026-11"},

   {id:"base-plots-r", title:"Base R charts", aka:["hist()","boxplot()","plot()","barplot()","abline()","base graphics","main","xlab","ylab","png()","dev.off()","saving a chart in R"], tags:["charts","data","coding"],
    summary:"Drawing histograms, boxplots, scatterplots and bar charts with base R, labelling them properly, and saving them as image files.",
    levels:{
     starter:[
      "Base R draws a chart with one line:",
      {list:[
        "`hist(d$minutes)`: a [[histogram-chart|histogram]] of one numeric column.",
        "`boxplot(minutes ~ route, data = d)`: a [[boxplot]] per group.",
        "`plot(d$km, d$minutes)`: a [[scatterplot]] of two numeric columns.",
        "`barplot(table(d$weather))`: a bar chart of counts."
      ]},
      "Always add a title and axis labels with units: `main = \"Walk times\"`, `xlab = \"Minutes\"`, `ylab = \"Number of walks\"`. Without them, R labels the chart with your code.",
      "Charts appear in RStudio’s **Plots** tab (**Export** saves them) and under the output in the Data Lab.",
      "Base charts are quick sketches for looking at data as you work: one line, an instant picture. Draw one before you calculate anything, because a picture shows odd values, gaps and shapes that a single number hides.",
      {key:"Base charts take vectors, so pull columns out with `$`, then label everything."}
     ],
     builder:[
      {table:[
        ["Argument","Does"],
        ["`main`, `xlab`, `ylab`","Title and axis labels"],
        ["`col`, `border`","Fill and outline colours, e.g. `col = \"grey\"`"],
        ["`breaks`","Histogram bins: a number (a suggestion) or exact cut points"],
        ["`pch`, `cex`","Point symbol (19 = solid dot) and size in plot()"],
        ["`xlim`, `ylim`","Axis ranges, e.g. `ylim = c(0, 100)`"],
        ["`horiz = TRUE`, `las = 1`","Horizontal bars; horizontal axis labels"]
      ]},
      "**Adding to a chart.** After `plot()`, functions add layers: `abline(fit)` (a model line), `abline(h = 50, lty = 2)` (a dashed reference line), `points()`, `lines()`, `text()`, `legend()`.",
      "**Saving from code.** Open a file device, draw, close it:",
      {code:['png("pace.png", width = 800, height = 600)','boxplot(pace ~ route, data = walks,','  main = "Pace by route", ylab = "Minutes per km")','dev.off()'].join("\n"), lang:"r"},
      "`pdf()` and `svg()` work the same way and give sharp vector images for reports. The file lands in the working directory.",
      "**Formula style.** `boxplot()` and `plot()` also accept a formula and a data frame, which saves typing `$`: `plot(minutes ~ km, data = walks)` draws the same scatterplot as `plot(walks$km, walks$minutes)` (outcome on the left, as in `lm()`).",
      "**Choosing.** A histogram for one distribution’s shape; boxplots to compare groups (say how many values each box summarises); a scatterplot for two numeric variables; bars for counts. Unit 4’s {{chart-types}} has the full guide."
     ],
     pro:[
      "**Several charts at once.** `par(mfrow = c(1, 2))` puts the next two charts side by side; `par(mfrow = c(1, 1))` returns to one. `par()` controls margins (`mar`), text size and more; it lasts until changed or the device closes.",
      "**Histogram bins.** `breaks = 10` is only a suggestion (R picks “pretty” cut points near it); give exact cut points with `breaks = seq(20, 90, by = 10)`. R’s bins include the right end by default (`right = TRUE`: 20 < x ≤ 30). `hist(x, plot = FALSE)` returns the breaks and counts without drawing, handy for checking.",
      "**Small groups in boxplots.** With fewer than about ten values, a boxplot hides how few points there are. Add them: `stripchart(pace ~ route, data = walks, vertical = TRUE, add = TRUE, pch = 19)`, or use `stripchart()` alone. Show the data where you can.",
      "**Colour and accessibility.** `palette.colors()` (R 4.0 and later) gives the Okabe–Ito palette, designed to be distinguishable with common colour-vision deficiencies; `hcl.colors(5, \"viridis\")` gives a sequential palette. Don’t rely on colour alone, and give every published chart alt text and a short data table or summary (Unit 4, {{colour-in-charts}}).",
      "**Base graphics vs ggplot2.** R for Data Science notes many people use ggplot2 for its defaults, automatic legends and layered grammar, while base plots stay useful because they’re so concise for quick looks. Base graphics draw immediately and can’t be changed afterwards except by redrawing; ggplot2 builds a plot object you can modify and save ({{ggplot2-basics}}, Unit 8)."
     ]},
    related:["chart-types","distributions","boxplots","correlation-coefficient","summary-stats-r","ggplot2-basics"],
    read:[{book:"r4ds", where:"Chapter 27, “A field guide to base R”, section “Plots”"},{book:"wilke", where:"Chapter 5, “Directory of visualizations”", note:"For choosing a chart; it uses ggplot2, but the advice applies to any tool."}],
    sources:[{t:"R for Data Science (2e) source: A field guide to base R (base-R.qmd), section Plots", url:"https://github.com/hadley/r4ds/blob/main/base-R.qmd"},{t:"R NEWS (palette.colors() added in R 4.0.0), r-source mirror", url:"https://github.com/wch/r-source/blob/trunk/doc/NEWS.Rd"}],
    checked:"2026-11"},

   {id:"r-errors", title:"Reading R errors and warnings", aka:["R error messages","object not found","could not find function","non-numeric argument to binary operator","unexpected symbol","unexpected end of input","warning message","NAs introduced by coercion","debugging R","getting help with R"], tags:["coding","troubleshooting"],
    summary:"What R’s most common error and warning messages mean, how to find the line at fault, and how to ask for help well.",
    levels:{
     starter:[
      "An **error** stops your code; a **warning** lets it finish but says something looks wrong. Both are R being precise, not R being cross.",
      {table:[
        ["Message","Usually means"],
        ["`object 'x' not found`","A misspelt name, wrong capitals, or a line not run yet"],
        ["`could not find function \"f\"`","A misspelt function, or a package not loaded"],
        ["`non-numeric argument to binary operator`","Maths on text"],
        ["`unexpected symbol` / `','` / `')'`","A missing operator or comma, or a stray one"],
        ["`unexpected end of input`","An unclosed bracket or quote"]
      ]},
      "Read the message, look at the line it names, then check spelling, capitals, quotes, commas and brackets. Most errors are one of those.",
      {key:"Capitals count in R: `mean`, not `Mean`; `walks`, not `Walks`."}
     ],
     builder:[
      "**Where to look.** On a computer, R names the function that failed: `Error in Mean(scores) : could not find function \"Mean\"`. In a script, parse errors give a line and column, like `2:12: unexpected ','`, and the Data Lab names the line for you. Look at that spot and just before it.",
      "**Warnings worth reading.**",
      {list:[
        "`NAs introduced by coercion`: `as.numeric()` met text it couldn’t convert. Find it with `x[is.na(as.numeric(x))]`.",
        "`argument is not numeric or logical: returning NA`: `mean()` got text or `NULL`, often a misspelt column after `$`.",
        "`longer object length is not a multiple of shorter object length`: two vectors of mismatched lengths were combined.",
        "`cannot open file '…': No such file or directory` (with the error `cannot open the connection`): wrong file name or working directory."
      ]},
      "**Silent problems** are worse than errors: a misspelt column gives `NULL`; `walks[walks$minutes > 70, ]` adds a row of NAs when a value is missing; a column of numbers read as text. Check results against what you expect (`str()`, `nrow()`, a quick plot).",
      "**Work in small steps.** Run one line at a time and look at each result. When something breaks, you know which line did it.",
      "**Search well.** Copy the message’s fixed part (leave out your own object names) into a search engine, and look for answers that explain *why*, not just code to paste. Help pages (`?read.csv`) list every argument and end with examples you can run."
     ],
     pro:[
      "**Tracing.** After an error inside nested function calls, `traceback()` shows the chain of calls that led to it. `options(warn = 2)` turns warnings into errors so you can find where one starts. RStudio’s debugger and `browser()` let you pause inside a function and inspect objects.",
      "**Error messages from packages** follow the same pattern but often add hints (tidyverse functions explain which argument was wrong and why). Read the whole message, including lines starting with `ℹ` or `✖`.",
      "**Asking for help well.** Make a **minimal reproducible example** (a “reprex”): the smallest code and data that still show the problem, with `library()` calls and a small data frame built in the code (`dput(head(d))` prints code that recreates your data). Include the exact message and `sessionInfo()`. Often, making the example reveals the bug. Track 2, Unit 9’s {{asking-for-help}} applies to R as well.",
      "**AI assistants** can explain an error message well, but check what they suggest: they may invent functions or arguments that don’t exist, or packages that aren’t on CRAN. Run the suggestion, read the help page (`?function`), and test the result on data where you know the answer.",
      "**The Data Lab’s help.** The lab adds plain-language explanations to common errors (including “did you mean” suggestions for misspelt names) and, when you press Check, says which test failed and why. On a computer you get R’s own message only, so learning to read it pays off."
     ]},
    related:["r-objects-vectors","data-frames-r","reading-tracebacks","asking-for-help","py-errors-tracebacks"],
    read:[{book:"r4ds", where:"Chapter 2, “Workflow: basics”, section “What’s in a name?”, and Chapter 8, “Workflow: getting help”"}],
    sources:[{t:"R for Data Science (2e) source: Workflow: basics (workflow-basics.qmd)", url:"https://github.com/hadley/r4ds/blob/main/workflow-basics.qmd"},{t:"R for Data Science (2e) source: Workflow: getting help (workflow-help.qmd)", url:"https://github.com/hadley/r4ds/blob/main/workflow-help.qmd"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"r-language", term:"R", def:"A free, open-source programming language, and the program that runs it, designed for statistics, data analysis and charts.", codex:"r-intro"},
   {id:"cran", term:"CRAN", def:"The Comprehensive R Archive Network: the official network of websites where you download R and most R packages.", codex:"r-intro"},
   {id:"r-package", term:"R package", def:"An add-on for R that bundles extra functions, data and help pages. Install it once with `install.packages()`, then load it each session with `library()`.", codex:"r-intro"},
   {id:"ide", term:"IDE", def:"Integrated development environment: a program that combines a code editor, a place to run code, and tools such as file browsers and help in one window. RStudio is an IDE for R.", codex:"rstudio-posit"},
   {id:"rstudio", term:"RStudio", def:"A free IDE for R, made by Posit. It needs R installed, and shows scripts, the console, your objects, files, charts and help in one window.", codex:"rstudio-posit"},
   {id:"posit-cloud", term:"Posit Cloud", def:"A website that runs RStudio on Posit’s servers, so you can use R in a web browser without installing anything. The free plan has a monthly limit on compute hours.", codex:"rstudio-posit"},
   {id:"webr", term:"webR", def:"A version of R rebuilt in WebAssembly so it runs inside a web page, on your own device. This app’s Data Lab uses it.", codex:"rstudio-posit"},
   {id:"webassembly", term:"WebAssembly", def:"A compact format that lets programs written in languages such as C run inside web browsers at close to normal speed. Often shortened to Wasm.", codex:"rstudio-posit"},
   {id:"r-console", term:"Console (R)", def:"The place where R runs commands as you type them. `>` means R is ready; `+` means it’s waiting for you to finish a command.", codex:"rstudio-posit"},
   {id:"r-script", term:"R script", def:"A plain-text file of R code, with a name ending in `.R`, that you save and can run again from top to bottom. It is the record of your analysis.", codex:"rstudio-posit"},
   {id:"r-object", term:"Object (R)", def:"A value stored under a name, such as `price <- 12.5`. Objects hold values, not formulas: they don’t update when other objects change.", codex:"r-objects-vectors"},
   {id:"assignment-r", term:"Assignment (<-)", def:"Storing a value under a name with the arrow `<-`, read as “gets”: `total <- price * qty`. `=` also works at the start of a line.", codex:"r-objects-vectors"},
   {id:"r-vector", term:"Vector (R)", def:"An ordered set of values of one type, made with `c()`, such as `c(4, 8, 6)`. Arithmetic and comparisons work on every element at once.", codex:"r-objects-vectors"},
   {id:"r-function", term:"Function (R)", def:"A named action you call with brackets, like `mean(x)` or `round(x, digits = 2)`. The values inside the brackets are its arguments.", codex:"r-objects-vectors"},
   {id:"data-frame", term:"Data frame", def:"R’s table: equal-length column vectors side by side, one row per observation and one column per variable. Each column has one type.", codex:"data-frames-r"},
   {id:"r-factor", term:"Factor", def:"A column or vector of categories with a fixed set of allowed values (levels) in a chosen order, which tables, charts and models follow.", codex:"data-frames-r"},
   {id:"working-directory-r", term:"Working directory (R)", def:"The folder where R looks for files and saves them. `getwd()` shows it; an RStudio project sets it to the project’s folder.", codex:"reading-csv-r"},
   {id:"r-formula", term:"Formula (R)", def:"An expression with a tilde, such as `minutes ~ km`: the outcome on the left, predictors or groups on the right. Used by `lm()`, `aggregate()` and `boxplot()`.", codex:"summary-stats-r"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u7-q01", lesson:"t3u7-l1", level:1, q:"What is “base R”?", options:[
     {t:"R as it comes when installed, with its standard packages", ok:true, why:"Base R includes the core language plus packages such as stats, graphics and utils, which load automatically."},
     {t:"An older, simpler version of R for beginners", why:"Base R is current R; it isn’t a cut-down edition."},
     {t:"The tidyverse family of packages", why:"The tidyverse is a set of add-on packages you install separately."},
     {t:"The R code that runs on Posit’s servers", why:"Where R runs doesn’t change what base R is."}]},
   {id:"t3u7-q02", lesson:"t3u7-l1", level:2, q:"Amara has a school laptop where she can’t install software, and she needs RStudio with the tidyverse. Which option fits best?", options:[
     {t:"Posit Cloud in her browser", ok:true, why:"Posit Cloud runs RStudio on Posit’s servers, needs no installing, and can install packages such as the tidyverse."},
     {t:"The Data Lab", why:"The Data Lab has base R only; it can’t load the tidyverse."},
     {t:"Install RStudio without R", why:"RStudio needs R, and she can’t install either."},
     {t:"Open the `.R` file in a word processor", why:"A word processor can show code but can’t run it."}]},
   {id:"t3u7-q03", lesson:"t3u7-l1", level:1, q:"Why must R be installed before RStudio?", options:[
     {t:"RStudio is a window around R and runs R in the background", ok:true, why:"RStudio is an IDE; R itself does the calculating, so RStudio needs to find it."},
     {t:"RStudio replaces R once it’s installed", why:"RStudio never replaces R; it depends on it."},
     {t:"R installs RStudio’s fonts", why:"There’s no such dependency; RStudio needs the R program."},
     {t:"It doesn’t matter: RStudio includes R", why:"RStudio Desktop doesn’t include R; you install R from CRAN separately."}]},
   {id:"t3u7-q04", lesson:"t3u7-l1", level:2, q:"Kenji types `sum(c(2, 4)` and the console shows `+`. What should he do?", options:[
     {t:"Type the missing `)` and press Enter, or press Esc and retype", ok:true, why:"`+` means R is waiting for the rest of the command; the bracket of `sum(` isn’t closed."},
     {t:"Restart RStudio", why:"Nothing is broken; R only needs the end of the command."},
     {t:"Type `+ 6` to add a number", why:"`+` here is a prompt, not addition. Adding more text keeps the command unfinished."},
     {t:"Wait: R is still calculating", why:"R hasn’t started; it’s waiting for a complete command."}]},
   {id:"t3u7-q05", lesson:"t3u7-l1", level:1, q:"In the Data Lab, what does **Check** do that **▶ Run** doesn’t?", options:[
     {t:"Tests the objects your code makes against what the task asks", ok:true, why:"Check runs your code and tests its results. In most challenges with a data file, it also repeats the test on a second version of the file with different numbers, so typed-in answers don’t pass."},
     {t:"Shows what your code prints", why:"That’s what ▶ Run does (Check shows output too, but its job is testing)."},
     {t:"Shows one correct answer", why:"That’s Show an answer."},
     {t:"Puts the starting code back", why:"That’s Start again."}]},
   {id:"t3u7-q06", lesson:"t3u7-l1", level:3, q:"Lucía works with patient records at a clinic and wants to practise R on them. Which choice keeps the data on her own computer?", options:[
     {t:"R and RStudio Desktop installed on her work computer (if her organisation allows it)", ok:true, why:"With desktop R the data stays on the machine. Clinic data is sensitive, so she should also follow her organisation’s rules."},
     {t:"Uploading the records to Posit Cloud", why:"Posit Cloud stores files on Posit’s servers, so the data leaves her computer; only do that if her organisation has agreed."},
     {t:"Emailing the file to herself to use on her phone", why:"Email sends the data through other servers; it doesn’t keep it on her computer."},
     {t:"Any option: R data is always encrypted", why:"R doesn’t encrypt your data; where it’s stored depends on how you run R."}]},
   {id:"t3u7-q07", lesson:"t3u7-l1", level:1, q:"What is CRAN?", options:[
     {t:"The official archive where you download R and most packages", ok:true, why:"CRAN, the Comprehensive R Archive Network, hosts R and thousands of packages."},
     {t:"The company that makes RStudio", why:"That’s Posit."},
     {t:"R’s chart-drawing package", why:"Base R’s charts are in the graphics package."},
     {t:"A file type for R scripts", why:"R scripts end in `.R`."}]},
   {id:"t3u7-q08", lesson:"t3u7-l1", level:2, q:"Which reason for using an R script instead of clicking in a spreadsheet is strongest?", options:[
     {t:"The script records every step, so the analysis can be rerun and checked", ok:true, why:"Repeatability is the main reason: new data, a reviewer or your future self can rerun and inspect each step."},
     {t:"R can’t make mistakes", why:"R does exactly what you write, including mistakes; the script makes them findable."},
     {t:"Scripts don’t need the data file", why:"A script still reads the data; it records what is done with it."},
     {t:"Spreadsheets can’t calculate means", why:"They can; the difference is the record of steps."}]},
   {id:"t3u7-q09", lesson:"t3u7-l1", level:3, q:"Tomás opens a Data Lab R challenge on a train with a weak signal, and it seems stuck on “Starting R…”. What is the likeliest explanation?", options:[
     {t:"The first time, the lab downloads R (up to 46 MB), which takes a while on a slow connection", ok:true, why:"webR has to download once; after that it’s saved, and the lab starts quickly."},
     {t:"The Data Lab only works on computers", why:"It runs in the browser on phones and tablets too."},
     {t:"His code has an error", why:"He hasn’t run anything yet; R is still starting."},
     {t:"He needs to sign in to Posit Cloud first", why:"The Data Lab doesn’t use Posit Cloud or any account."}]},
   /* ---- Lesson 2 ---- */
   {id:"t3u7-q10", lesson:"t3u7-l2", level:1, q:"What does `x <- 7` do?", options:[
     {t:"Stores 7 in an object called x, without printing anything", ok:true, why:"`<-` assigns. To see the value, type `x` on its own."},
     {t:"Checks whether x is less than minus 7", why:"With spaces as `x < -7` that would be a comparison; `<-` together is assignment. (Spaces around `<-` make code clearer.)"},
     {t:"Prints 7", why:"Assignment is silent."},
     {t:"Makes x always equal to 7, even if reassigned", why:"A later `x <- …` replaces it."}]},
   {id:"t3u7-q11", lesson:"t3u7-l2", level:2, q:"`v <- c(5, 10, 15, 20)`. What does `v[v > 10]` give?", options:[
     {t:"15 20", ok:true, why:"`v > 10` is FALSE FALSE TRUE TRUE; the TRUE positions are kept."},
     {t:"10 15 20", why:"10 isn’t greater than 10; that would need `>=`."},
     {t:"2", why:"That’s `sum(v > 10)`, the count."},
     {t:"FALSE FALSE TRUE TRUE", why:"That’s `v > 10` on its own; inside `v[ ]` it picks values."}]},
   {id:"t3u7-q12", lesson:"t3u7-l2", level:1, q:"What type is `\"3.5\"` in R?", options:[
     {t:"Character (text)", ok:true, why:"The quotes make it text, even though it contains digits."},
     {t:"Numeric", why:"Without quotes, 3.5 would be numeric."},
     {t:"Logical", why:"Logical values are TRUE and FALSE."},
     {t:"Integer", why:"Integers are whole numbers without quotes, such as `4L`."}]},
   {id:"t3u7-q13", lesson:"t3u7-l2", level:2, q:"What does `round(mean(c(2, 3, 5)), 1)` give?", options:[
     {t:"3.3", ok:true, why:"Inside first: the mean is 10 ÷ 3 = 3.333…; rounded to 1 decimal place, 3.3."},
     {t:"3.333333", why:"That’s the mean before rounding; the outer round() takes it to 1 decimal place."},
     {t:"3", why:"That would be `round(…)` with the default digits = 0."},
     {t:"10", why:"That’s the sum, not the mean."}]},
   {id:"t3u7-q14", lesson:"t3u7-l2", level:3, q:"Mei writes `hours <- c(2, 3, NA, 4)` then `total <- sum(hours)`. `total` is NA. What’s the best fix if the missing day should simply be left out?", options:[
     {t:"`total <- sum(hours, na.rm = TRUE)`", ok:true, why:"na.rm = TRUE drops missing values first, giving 9; she should mention that one day is missing."},
     {t:"Replace NA with 0 by typing it in", why:"That claims she worked 0 hours that day, which may be false. Leaving it out and saying so is honest."},
     {t:"`total <- sum(hours) - NA`", why:"Arithmetic with NA gives NA."},
     {t:"`total <- sum(\"hours\")`", why:"That passes the text “hours”, not the vector, and gives an error."}]},
   {id:"t3u7-q15", lesson:"t3u7-l2", level:2, q:"`a <- 3`, `b <- a * 2`, then `a <- 10`. What is `b`?", options:[
     {t:"6", ok:true, why:"b was calculated when its line ran. Objects hold values, not formulas."},
     {t:"20", why:"That’s spreadsheet thinking: b doesn’t recalculate unless you run its line again."},
     {t:"An error", why:"Reassigning a is allowed."},
     {t:"`a * 2`", why:"R stores the result, not the expression."}]},
   {id:"t3u7-q16", lesson:"t3u7-l2", level:1, q:"Which line causes `could not find function \"Sum\"`?", options:[
     {t:"`Sum(c(1, 2))`", ok:true, why:"R’s function is `sum`, lower case. Capitals count."},
     {t:"`sum(1, 2)`", why:"That’s correct and gives 3: sum() adds all its arguments."},
     {t:"`Sum <- 3`", why:"That creates an object called Sum; no function is called."},
     {t:"`sum(Sum)`", why:"That would complain about an object `Sum` not found (if it doesn’t exist), not a function."}]},
   {id:"t3u7-q17", lesson:"t3u7-l2", level:3, q:"Dmitri writes `cost <- 4,50` (the way prices are written in his country). What happens, and how should he write it?", options:[
     {t:"An error (`unexpected ','`); write `cost <- 4.50`", ok:true, why:"R always uses a full stop for decimals; a comma separates things, whatever the computer’s language settings."},
     {t:"R stores 4.5 because it follows the computer’s settings", why:"R’s code doesn’t follow regional decimal settings."},
     {t:"R stores 450", why:"R doesn’t treat commas as thousands separators either; it’s an error."},
     {t:"R stores two values, 4 and 50", why:"That would need `c(4, 50)`."}]},
   {id:"t3u7-q18", lesson:"t3u7-l2", level:2, q:"`as.numeric(c(\"12\", \"7\", \"n/a\"))` gives `12 7 NA` with a warning. What does the warning tell you?", options:[
     {t:"One value couldn’t be turned into a number, so it became NA", ok:true, why:"`NAs introduced by coercion` means R met text (“n/a”) that isn’t a number. Check the data."},
     {t:"The code stopped without a result", why:"A warning lets the code finish; an error stops it."},
     {t:"12 and 7 were changed", why:"They converted correctly."},
     {t:"Nothing important; warnings can be ignored", why:"Warnings often point at messy data and are worth reading."}]},
   /* ---- Lesson 3 ---- */
   {id:"t3u7-q19", lesson:"t3u7-l3", level:1, q:"Which describes a data frame?", options:[
     {t:"Equal-length column vectors side by side, each column with one type", ok:true, why:"That’s the structure: columns are vectors; rows are observations."},
     {t:"A grid where each cell can have its own type", why:"In R the type belongs to the whole column."},
     {t:"A single long vector", why:"A data frame has several columns."},
     {t:"A chart of a table", why:"It’s the table itself, not a picture of it."}]},
   {id:"t3u7-q20", lesson:"t3u7-l3", level:2, q:"`d` has 120 rows and 6 columns. What does `dim(d)` give?", options:[
     {t:"120 6", ok:true, why:"dim() gives rows, then columns."},
     {t:"6 120", why:"Rows come first."},
     {t:"720", why:"dim() doesn’t multiply; it gives both sizes."},
     {t:"6", why:"That’s ncol(d) or length(d)."}]},
   {id:"t3u7-q21", lesson:"t3u7-l3", level:2, q:"Which line gives the mean of the `price` column of `shop` as one number?", options:[
     {t:"`mean(shop$price)`", ok:true, why:"`$` gives the column as a vector, and mean() averages it."},
     {t:"`mean(shop)`", why:"mean() needs a numeric vector, not a whole data frame; it returns NA with a warning."},
     {t:"`mean(price)`", why:"There’s no object called price on its own; the column lives inside shop."},
     {t:"`shop$mean(price)`", why:"`$` picks columns, not functions."}]},
   {id:"t3u7-q22", lesson:"t3u7-l3", level:3, q:"Oluwaseun’s `mean(club$Age)` returns NA with the warning “argument is not numeric or logical”. `names(club)` shows `\"name\" \"age\" \"town\"`. What’s wrong?", options:[
     {t:"The column is `age`, so `club$Age` gave NULL", ok:true, why:"Capitals count, and a missing column name after `$` gives NULL with no error; mean(NULL) then warns and returns NA."},
     {t:"Some ages are missing", why:"Missing values give NA without that warning; and the column name is wrong."},
     {t:"Ages are stored as text", why:"Possible in general, but here names() shows the real problem: the capital A."},
     {t:"mean() doesn’t work on data frame columns", why:"It does, once the column name is right."}]},
   {id:"t3u7-q23", lesson:"t3u7-l3", level:1, q:"What does `d[3, ]` give?", options:[
     {t:"Row 3, with all columns", ok:true, why:"The part before the comma picks rows; empty after it means all columns."},
     {t:"Column 3, with all rows", why:"That would be `d[, 3]`."},
     {t:"The first 3 rows", why:"That would be `d[1:3, ]` or `head(d, 3)`."},
     {t:"An error, because the columns part is empty", why:"An empty part means “all”."}]},
   {id:"t3u7-q24", lesson:"t3u7-l3", level:2, q:"How do you add a column `total` equal to `price` times `qty` in data frame `d`?", options:[
     {t:"`d$total <- d$price * d$qty`", ok:true, why:"Assigning to a new name after `$` adds the column, calculated row by row."},
     {t:"`total <- price * qty`", why:"price and qty aren’t objects on their own, and this wouldn’t put anything in d."},
     {t:"`d$total = SUM(price, qty)`", why:"R has no SUM function (it’s lower-case sum), and you want a product per row."},
     {t:"`d[total] <- d$price * d$qty`", why:"The column name needs quotes inside brackets: `d[\"total\"]`; `$` is simpler."}]},
   {id:"t3u7-q25", lesson:"t3u7-l3", level:3, q:"Hana’s survey has answers “Never”, “Sometimes”, “Often”. `table()` lists them alphabetically: Never, Often, Sometimes. How can she show them in their natural order?", options:[
     {t:"Make the column a factor with `levels = c(\"Never\", \"Sometimes\", \"Often\")`", ok:true, why:"A factor’s levels set the order that tables and charts follow."},
     {t:"Sort the rows with order()", why:"Sorting rows doesn’t change the order table() lists categories in."},
     {t:"Rename them “1 Never”, “2 Sometimes”, “3 Often”", why:"That works as a hack but changes the data; a factor keeps the real labels."},
     {t:"Use `as.numeric()` on the column", why:"Text that isn’t digits becomes NA."}]},
   {id:"t3u7-q26", lesson:"t3u7-l3", level:2, q:"Why does `data.frame(a = c(1, 2, 3), b = c(\"x\", \"y\"))` fail?", options:[
     {t:"The columns have different lengths (3 and 2)", ok:true, why:"Every column must have one value per row; R says the arguments imply differing numbers of rows."},
     {t:"A data frame can’t mix numbers and text", why:"It can, one type per column."},
     {t:"Column names must be longer than one letter", why:"Short names like a and b are allowed."},
     {t:"Text needs single quotes", why:"Double and single quotes both work."}]},
   {id:"t3u7-q27", lesson:"t3u7-l3", level:1, q:"Which is the most useful first look at a new data frame’s columns and their types?", options:[
     {t:"`str(d)`", ok:true, why:"str() lists rows, columns, each column’s type and first values."},
     {t:"`mean(d)`", why:"That doesn’t work on a whole data frame."},
     {t:"`length(d)`", why:"That only counts columns."},
     {t:"`d[1]`", why:"That shows only the first column."}]},
   /* ---- Lesson 4 ---- */
   {id:"t3u7-q28", lesson:"t3u7-l4", level:1, q:"What is R’s working directory?", options:[
     {t:"The folder where R looks for files and saves them", ok:true, why:"A file name without a folder means “in the working directory”; getwd() shows it."},
     {t:"The folder where R is installed", why:"That’s a different place; you rarely need it."},
     {t:"The list of objects you’ve created", why:"That’s the environment."},
     {t:"Your Downloads folder, always", why:"It’s wherever R was started or the project is; you can check with getwd()."}]},
   {id:"t3u7-q29", lesson:"t3u7-l4", level:2, q:"`read.csv(\"sales.csv\")` stops with “cannot open the connection” and a warning “No such file or directory”. What should you check first?", options:[
     {t:"The file’s exact name and whether it’s in the working directory", ok:true, why:"R couldn’t find the file: check spelling (and capitals on Linux, Posit Cloud and the Data Lab) and run getwd() or list.files()."},
     {t:"Whether the CSV has a header row", why:"R didn’t get as far as reading the contents."},
     {t:"Whether R needs updating", why:"read.csv() works in every R version; the file wasn’t found."},
     {t:"Whether the numbers use full stops", why:"That matters once the file is read; here it wasn’t opened at all."}]},
   {id:"t3u7-q30", lesson:"t3u7-l4", level:3, q:"Ana reads a CSV from a colleague in Germany. `str()` shows one column called `name.age.score` with values like `\"Jo;31;4,5\"`. What happened, and what’s the fix?", options:[
     {t:"The file uses semicolons and decimal commas; read it with `read.csv2()`", ok:true, why:"read.csv() split at commas that weren’t there; read.csv2() expects `;` between values and `,` for decimals."},
     {t:"The file is damaged; ask for it again", why:"It’s a common, valid format; only the separator differs."},
     {t:"Add `header = FALSE`", why:"The header isn’t the problem; the separator is."},
     {t:"Use `as.numeric()` on the column", why:"The values are still glued together; read the file with the right separator first."}]},
   {id:"t3u7-q31", lesson:"t3u7-l4", level:2, q:"Which line keeps the rows of `d` where `country` is \"Chile\" or \"Peru\"?", options:[
     {t:"`subset(d, country %in% c(\"Chile\", \"Peru\"))`", ok:true, why:"%in% tests whether each value is one of the listed ones."},
     {t:"`subset(d, country == \"Chile\" & country == \"Peru\")`", why:"One value can’t be both at once, so this keeps no rows. You want “or” (`|`) or %in%."},
     {t:"`d[country %in% c(\"Chile\", \"Peru\"), ]`", why:"Inside `d[ ]` you need `d$country`; country on its own isn’t found."},
     {t:"`d[d$country == c(\"Chile\", \"Peru\")]`", why:"`==` with two values compares pairwise (recycling), and the missing comma picks columns."}]},
   {id:"t3u7-q32", lesson:"t3u7-l4", level:1, q:"What does `table(d$answer)` give?", options:[
     {t:"How many times each different answer appears", ok:true, why:"table() makes a frequency table of the values."},
     {t:"The answers sorted alphabetically", why:"It lists the distinct values with their counts, not every answer."},
     {t:"The mean answer", why:"Answers are categories; table() counts them."},
     {t:"A chart of the answers", why:"barplot(table(…)) would draw one."}]},
   {id:"t3u7-q33", lesson:"t3u7-l4", level:2, q:"A data frame has 50 rows; `mean(d$late)` gives 0.12, where `late` is TRUE/FALSE. How many rows are TRUE?", options:[
     {t:"6", ok:true, why:"mean() of TRUE/FALSE is the proportion: 0.12 × 50 = 6."},
     {t:"12", why:"12 would be the percentage, not the count."},
     {t:"0.12", why:"That’s the proportion, not the number of rows."},
     {t:"44", why:"That’s the number of FALSE rows."}]},
   {id:"t3u7-q34", lesson:"t3u7-l4", level:3, q:"Priya counts with `sum(d$income > 30000)` and gets NA. The data has a few missing incomes. What should she do?", options:[
     {t:"Use `sum(d$income > 30000, na.rm = TRUE)` and report how many incomes were missing", ok:true, why:"Missing values make some comparisons NA; na.rm = TRUE counts the known ones, and reporting the missing count keeps it honest."},
     {t:"Delete the column", why:"That throws away all the information."},
     {t:"Use `mean()` instead", why:"mean() would also give NA, and gives a proportion rather than a count."},
     {t:"Assume missing incomes are 0", why:"That invents data and biases the count."}]},
   {id:"t3u7-q35", lesson:"t3u7-l4", level:2, q:"Why might `d[d$score > 80, ]` show an extra row full of NA?", options:[
     {t:"Some score is missing, so the condition is NA for that row", ok:true, why:"Square brackets turn an NA answer into a row of NAs; subset() or which() keep only definite TRUEs."},
     {t:"The CSV has a blank line at the end", why:"read.csv() skips blank lines."},
     {t:"80 itself is included", why:"`>` excludes 80, and including it wouldn’t create an NA row."},
     {t:"The comma adds a row", why:"The comma separates the rows and columns parts."}]},
   {id:"t3u7-q36", lesson:"t3u7-l4", level:3, q:"Sione shares a script that starts with `setwd(\"C:/Users/Sione/Desktop/project\")`. Fatima, on a Mac, can’t run it. What’s the better habit?", options:[
     {t:"Use an RStudio project and relative paths such as `\"data/file.csv\"`", ok:true, why:"A project sets the working directory to its folder on any computer, so relative paths work everywhere."},
     {t:"Fatima should create the same Windows folders on her Mac", why:"That’s fragile and won’t work on every system."},
     {t:"Use backslashes in the path", why:"Backslashes don’t help other computers find Sione’s Desktop (and need doubling in R strings)."},
     {t:"Email the data inside the script", why:"Possible for tiny data, but it doesn’t fix the path habit."}]},
   /* ---- Lesson 5 ---- */
   {id:"t3u7-q37", lesson:"t3u7-l5", level:2, q:"Which line gives the median `wait` for each `clinic` in data frame `d`?", options:[
     {t:"`tapply(d$wait, d$clinic, median)`", ok:true, why:"tapply(values, groups, function): the waits, split by clinic, with median applied to each."},
     {t:"`tapply(d$clinic, d$wait, median)`", why:"Values come first, then groups; this tries to take medians of clinic names."},
     {t:"`median(d$wait, d$clinic)`", why:"median() takes one vector; the second argument isn’t a grouping."},
     {t:"`table(d$wait, d$clinic)`", why:"That counts combinations; it doesn’t give medians."}]},
   {id:"t3u7-q38", lesson:"t3u7-l5", level:1, q:"In `hist(x, main = \"Ages\", xlab = \"Years\")`, what does `main` set?", options:[
     {t:"The chart’s title", ok:true, why:"main is the title; xlab and ylab label the axes."},
     {t:"The x-axis label", why:"That’s xlab."},
     {t:"The number of bars", why:"That’s breaks."},
     {t:"The colour of the bars", why:"Colour is set with the col argument."}]},
   {id:"t3u7-q39", lesson:"t3u7-l5", level:2, q:"Which base R chart best compares the spread of test scores across three classes?", options:[
     {t:"`boxplot(score ~ class, data = d)`", ok:true, why:"One box per class shows each group’s median, quartiles and range side by side."},
     {t:"`hist(d$score)`", why:"One histogram mixes all classes together."},
     {t:"`barplot(table(d$class))`", why:"That counts students per class; it doesn’t show scores."},
     {t:"`plot(d$score)`", why:"That plots scores against row number, not by class."}]},
   {id:"t3u7-q40", lesson:"t3u7-l5", level:1, q:"`cor(x, y)` returns NA. What’s the most likely cause?", options:[
     {t:"x or y contains a missing value; add `use = \"complete.obs\"`", ok:true, why:"cor() returns NA when values are missing, unless you tell it which rows to use."},
     {t:"There’s no relationship", why:"No relationship gives r near 0, not NA."},
     {t:"x and y must be in the same data frame", why:"cor() takes any two numeric vectors of the same length."},
     {t:"cor() needs `na.rm = TRUE`", why:"cor() has no na.rm argument; it uses `use =` instead."}]},
   {id:"t3u7-q41", lesson:"t3u7-l5", level:3, q:"A study club finds `cor(hours_online, grade)` is −0.4. A member says “being online lowers grades”. What’s the best reply?", options:[
     {t:"The correlation shows a moderate downward pattern, not that one causes the other; other factors could explain it", ok:true, why:"Correlation describes association. Cause would need a design such as an experiment, or careful study of other factors."},
     {t:"Right: a negative r proves a harmful effect", why:"No correlation, however strong, proves cause on its own."},
     {t:"Wrong: −0.4 means there’s no relationship", why:"−0.4 is a moderate negative association."},
     {t:"It means grades fall by 0.4 points per hour online", why:"That’s a slope, from lm(); r isn’t in grade points per hour."}]},
   {id:"t3u7-q42", lesson:"t3u7-l5", level:2, q:"In `lm(weight ~ height, data = d)`, which is the outcome?", options:[
     {t:"weight", ok:true, why:"The outcome goes on the left of `~`; the predictor on the right."},
     {t:"height", why:"height is the predictor."},
     {t:"d", why:"d is the data frame the columns come from."},
     {t:"Both equally", why:"A formula has a definite left (outcome) and right (predictor) side."}]},
   {id:"t3u7-q43", lesson:"t3u7-l5", level:2, q:"`coef(fit)` gives `(Intercept) 40.0` and `hours 5.0` for `lm(score ~ hours)`. What score does the line predict for 6 hours?", options:[
     {t:"70", ok:true, why:"40 + 5 × 6 = 70."},
     {t:"30", why:"That’s only the slope part (5 × 6); add the intercept."},
     {t:"51", why:"That adds all three numbers; the slope multiplies the hours."},
     {t:"270", why:"That multiplies the intercept too ((40 + 5) × 6)."}]},
   {id:"t3u7-q44", lesson:"t3u7-l5", level:3, q:"Kenji compares two bus routes: route 1’s trips total 900 minutes over 30 trips, route 2’s 700 minutes over 20 trips. He says route 1 is slower. What should he compare instead?", options:[
     {t:"Mean minutes per trip: route 1 is 30, route 2 is 35, so route 2 is slower per trip", ok:true, why:"Totals depend on how many trips there were. Per trip, route 2 takes longer: compare like with like."},
     {t:"The totals are fine because both are in minutes", why:"Same units, but different numbers of trips."},
     {t:"Only the longest trip on each route", why:"One extreme trip says little about the typical trip."},
     {t:"The correlation between routes", why:"Correlation is for two numeric variables, not a comparison of two group averages."}]},
   {id:"t3u7-q45", lesson:"t3u7-l5", level:3, q:"After `plot(d$km, d$minutes)` and `abline(fit)`, Mei sees that all the hill walks sit above the line. What does that suggest?", options:[
     {t:"The straight line misses something about hills; route matters as well as distance", ok:true, why:"A group of residuals all on one side means the model leaves out a factor; hill walks take longer than distance alone predicts."},
     {t:"The hill data are wrong and should be deleted", why:"Nothing suggests errors; the pattern is real information about the walks."},
     {t:"The correlation must be negative", why:"The line rises; the hill points are above it, which doesn’t make r negative."},
     {t:"The model is perfect for hill walks", why:"Points consistently above the line mean the line under-predicts them."}]}
  ]
});
