/* Track 2 · Unit 6 · The command line */
ICA.addUnit({
  id:"t2u6", track:"t2", n:6, title:"The command line", icon:"⌨️",
  blurb:"Talk to your computer in typed commands. Learn what a shell is and how to open one on your device, find your way around folders, make, copy, move and delete files without accidents, search and count text with pipes, and get help and stay safe when a command comes from a website or an AI tool.",
  goals:[
    "Explain the difference between a terminal, a shell and the command line, open one on your device, and read a command as a program name, flags and arguments",
    "Find your way around the file system with `pwd`, `ls` and `cd`, using absolute and relative paths, `..`, `~`, Tab completion, history and quotes",
    "Make, copy, move, rename and delete files and folders in a practice folder, knowing that `rm` has no undo and checking wildcards before you delete",
    "Read and search text with `cat`, `less`, `head`, `tail`, `wc` and `grep`, join commands with pipes, and save output with `>` and `>>` without overwriting by accident",
    "Get help from `--help`, `man` and example-first pages, read the common error messages, and decide calmly whether a command from the internet or an AI tool is safe to run"
  ],
  read:[
    {book:"swc", where:"The Unix Shell: 1. Introducing the Shell; 2. Navigating Files and Directories; 3. Working With Files and Directories; 4. Pipes and Filters; 7. Finding Things", note:"A gentle, well-tested workshop lesson. Every command is shown with its output, so you can follow along by reading even without a computer. Episodes 5 and 6 (Loops, Shell Scripts) go further than this unit."},
    {book:"missing", where:"Lecture 1, “Course Overview + Introduction to the Shell”; Lecture 2, “Command-line Environment” (sections “Arguments”, “Streams” and “AI in the Shell”)", note:"Written for computer science students, so it moves fast. Read it after the lessons; skip anything that feels too far ahead."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t2u6-l1", title:"What a shell is, and your first commands", minutes:50,
   hook:{q:"In a terminal, Kenji types `echo Hello,    world` with four spaces between the two words, and presses Enter. What appears?", options:["Hello,    world (four spaces, exactly as typed)","Hello, world (one space)","An error: echo can’t handle extra spaces","Nothing, until he adds quotes"], answer:1, reveal:"It prints “Hello, world” with one space. Before `echo` runs, the shell splits the line into words wherever there are spaces, however many, and hands `echo` two words: `Hello,` and `world`. `echo` prints its words with one space between them. Put the text in quotes and the spaces survive. This lesson explains how the shell reads what you type."},
   goals:[
     "Explain what a shell is and why people still use one",
     "Tell apart the terminal, the shell and the command line, and name the usual shell on Windows, Mac, ChromeOS and Linux",
     "Open a terminal on your device and recognise the prompt",
     "Run your first commands (`echo`, `date`, `whoami`, `clear`) and read a command as a program, flags and arguments",
     "Stay calm: read a command before pressing Enter, stop a running command, and get out of the common “stuck” states"
   ],
   learn:[
    {h:"Talking to your computer in text", body:[
      {lead:"Most of the time you tell a computer what to do by pointing and tapping. A shell lets you tell it in typed sentences instead."},
      "Think of ordering in a café. You can point at pictures on a menu board, which is easy and needs no practice. Or you can say exactly what you want: “a large tea, no sugar, and two of those biscuits to take away”. Pointing is a **graphical interface** (windows, icons, buttons). Saying it precisely is a **[[command-line|command-line interface]]**: you type a line of text, press [[kbd:Enter]], and the computer replies with text.",
      "The program that reads your typed line and carries it out is called a **[[shell]]**. The name is old: it is the outer layer you touch, wrapped around the core of the system.",
      {h:"Why people still use it"},
      {list:[
        "**Precision.** A command says exactly what to do, and the same command does the same thing every time. You can copy it into notes or send it to a colleague.",
        "**Repetition.** Renaming 400 photos by hand takes an afternoon. In a shell it can be one line, and later a small script you run again next month.",
        "**Combining tools.** Small programs can be chained: find the lines that mention tomatoes, then count them. Lesson 4 shows how.",
        "**Reach.** Many programming tools (Git, Python’s installer, website builders) are used mainly by typing commands, and computers you control over the internet, such as web servers, often have no screen to click at all."
      ]},
      "None of this is hacking, and you don’t need to be a programmer. Scientists, librarians, data analysts and system administrators use shells every day for ordinary work. Software Carpentry’s shell lesson, written for researchers, is built around exactly this kind of everyday job."
    ]},
    {h:"Terminal, shell, command line: three words, three things", body:[
      "People use these words loosely, as if they meant the same thing. They’re related but different:",
      {table:[
        ["Word","What it is","Café version"],
        ["[[terminal|Terminal]]","The window app that shows text and passes your typing on","The counter you speak across"],
        ["[[shell|Shell]]","The program that reads each line and runs it","The person who takes your order and passes it to the kitchen"],
        ["[[command-line|Command line]]","The way of working: typed commands, text replies (also the line where you type)","Ordering by speaking rather than pointing"]
      ]},
      {fig:'<svg viewBox="0 0 340 312"><defs><marker id="t2u6a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="270" height="44" rx="8" stroke-width="1.5"/><text x="145" y="30" text-anchor="middle">You type: ls -l Documents</text><text class="s" x="145" y="46" text-anchor="middle">and press Enter</text><path class="d-ink" d="M145,54 L145,76" stroke-width="2" marker-end="url(#t2u6a1)"/><rect class="d-lup" x="10" y="80" width="270" height="48" rx="8" stroke-width="1.5"/><text x="145" y="100" text-anchor="middle">Terminal (the window)</text><text class="s" x="145" y="118" text-anchor="middle">shows text, passes your keys on</text><path class="d-ink" d="M145,128 L145,150" stroke-width="2" marker-end="url(#t2u6a1)"/><rect class="d-rose" x="10" y="154" width="270" height="48" rx="8" stroke-width="1.5"/><text x="145" y="174" text-anchor="middle">Shell: bash, zsh or PowerShell</text><text class="s" x="145" y="192" text-anchor="middle">splits the line into words, finds ls</text><path class="d-ink" d="M145,202 L145,224" stroke-width="2" marker-end="url(#t2u6a1)"/><rect class="d-sage" x="10" y="228" width="270" height="48" rx="8" stroke-width="1.5"/><text x="145" y="248" text-anchor="middle">The program ls runs</text><text class="s" x="145" y="266" text-anchor="middle">asks the system what’s in Documents</text><path class="d-ink" d="M300,252 L300,40" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#t2u6a1)"/><text class="s" x="322" y="150" text-anchor="middle" transform="rotate(-90 322 150)">output comes back</text><text class="s" x="10" y="300">The list appears in the terminal window.</text></svg>', alt:"A vertical flow. At the top, you type ls -l Documents and press Enter. An arrow leads to the terminal, the window that shows text and passes your keys on. Next is the shell, bash, zsh or PowerShell, which splits the line into words and finds the program ls. At the bottom, the program ls runs and asks the system what is in Documents. A dashed arrow on the right runs back up to the top, labelled output comes back: the list appears in the terminal window.", cap:"What happens when you press Enter. The terminal is the window; the shell reads your line and runs programs; their output comes back to the window."},
      "Several shells exist, and each device has a usual one:",
      {list:[
        "**[[bash]]**: the long-standing default on most Linux systems, including the Linux environment on Chromebooks.",
        "**[[zsh]]** (say “zee-shell” or “zed-shell”): the default on Macs since macOS 10.15 Catalina. It understands nearly everything bash does.",
        "**[[powershell|PowerShell]]**: Microsoft’s modern shell, built into Windows. It has its own command names (such as `Get-ChildItem`) but also short **aliases**, so `ls`, `cd` and `pwd` work too. The older Windows **Command Prompt** (`cmd`) still exists but is not used in this unit."
      ]},
      "This unit shows bash and zsh first, because the same commands work on Mac, Linux, ChromeOS and in most online guides. Where PowerShell differs, you’ll see the PowerShell version next to it. Lesson 5 ends with a side-by-side table."
    ]},
    {h:"Opening a terminal on your device", body:[
      {table:[
        ["Device","Where to find it","Shell you get"],
        ["Windows 11","Right-click **Start** and choose **Terminal**, or search for “Terminal”","PowerShell, in the Windows Terminal app"],
        ["Mac","**Finder → Applications → Utilities → Terminal**, or press [[kbd:Cmd]] + [[kbd:Space]] and type Terminal","zsh"],
        ["Chromebook","First turn on Linux: **Settings → About ChromeOS → Developers → Linux development environment → Set up**. Then open **Terminal** from the Launcher","bash, in a Debian Linux environment"],
        ["Linux","Search your apps for “Terminal”; many desktops also open one with [[kbd:Ctrl]] + [[kbd:Alt]] + [[kbd:T]]","Usually bash"],
        ["Phone or tablet","No terminal is built in. Optional apps exist (see Apply); you can learn this unit by reading and doing the exercises","Varies"]
      ]},
      "Turning on Linux on a Chromebook needs some free storage space and, according to Google’s help page, setup can take 10 minutes or more. On a school or work Chromebook the administrator may have switched it off; if so, read along and use the exercises.",
      {tip:"Windows can also run real bash. **Git Bash** comes with Git for Windows (Unit 7 installs it), and the **Windows Subsystem for Linux** (WSL) runs a full Linux system. Both are optional: everything in this unit can be done in PowerShell."}
    ]},
    {h:"The prompt: the shell is listening", body:[
      "When the window opens, you’ll see a short line of text ending in a symbol, with a blinking cursor after it. That’s the **[[prompt]]**: the shell’s way of saying “ready, type something”. It usually shows your user name, the computer’s name and the folder you are in. Some typical prompts:",
      {code:['amara@garden-laptop:~$','amara@Amaras-Mac ~ %','PS C:\\Users\\amara>'].join("\n"), lang:"txt", label:"Prompts in bash, zsh and PowerShell", cap:"bash usually ends in `$`, zsh in `%`, PowerShell in `>`. The `~` is short for your home folder (Lesson 2). A prompt ending in `#` means you are the all-powerful administrator account, called root: be extra careful there."},
      "Your prompt will look a little different, and that’s fine. What matters is the symbol at the end: it means the shell is waiting for you.",
      {key:"Never type the prompt itself. In guides, including this one, a line shown as `$ date` means: type `date` and press Enter. The `$` is just there to show which lines are typed and which are the computer’s reply."},
      "In this unit, code boxes labelled **Command line** contain only what you type, so the **Copy** button gives you something you can paste. Boxes that show a conversation (what you typed plus the reply) are labelled **What you see**, and there the typed lines start with `$`."
    ]},
    {h:"Your first commands", body:[
      "Try these four. Each is safe: none of them changes anything on your computer.",
      {code:['echo Hello from the shell','date','whoami','clear'].join("\n"), lang:"sh", label:"Command line", cap:"Type one line, press Enter, read the reply, then type the next."},
      {code:['$ echo Hello from the shell','Hello from the shell','$ date','Fri Nov  6 09:15:42 UTC 2026','$ whoami','amara'].join("\n"), lang:"txt", label:"What you see", cap:"Your date, time zone and user name will differ. On Windows, `whoami` shows the computer’s name too, like `garden-laptop\\amara`."},
      {list:[
        "`echo` repeats whatever words you give it. It sounds pointless, but it’s how scripts print messages, and it’s a safe way to see how the shell reads a line.",
        "`date` shows the current date and time. (In PowerShell on Windows, `date` runs `Get-Date`, which prints it in a longer format.)",
        "`whoami` (“who am I”) shows which user account the shell is running as. It matters later, because what you’re allowed to change depends on who you are.",
        "`clear` wipes the window so you can start fresh. Nothing is lost; earlier commands and files are untouched. [[kbd:Ctrl]] + [[kbd:L]] does the same in most shells."
      ]},
      "Each reply is called the command’s **[[standard-output|output]]**. After it, the prompt comes back: the shell has finished that command and is listening again. A command that succeeds often prints **nothing at all**: silence usually means success."
    ]},
    {h:"Commands, flags and arguments", body:[
      "Every command line follows the same grammar. The shell splits the line at spaces into **words**. The first word names the program to run; the rest are handed to that program.",
      {fig:'<svg viewBox="0 0 340 196"><rect class="d-rose" x="10" y="14" width="56" height="36" rx="6" stroke-width="2"/><text x="38" y="37" text-anchor="middle">ls</text><rect class="d-gold" x="84" y="14" width="56" height="36" rx="6" stroke-width="2"/><text x="112" y="37" text-anchor="middle">-l</text><rect class="d-sage" x="158" y="14" width="124" height="36" rx="6" stroke-width="2"/><text x="220" y="37" text-anchor="middle">Documents</text><text class="s" x="75" y="68" text-anchor="middle">space</text><text class="s" x="149" y="68" text-anchor="middle">space</text><text x="10" y="98">ls: the command</text><text class="s" x="10" y="114">which program to run</text><text x="10" y="140">-l: a flag (option)</text><text class="s" x="10" y="156">changes how it works: “long” list</text><text x="180" y="98">Documents:</text><text x="180" y="114">an argument</text><text class="s" x="180" y="130">what to work on</text><text class="s" x="10" y="186">Spaces separate the words; extra spaces don’t count.</text></svg>', alt:"The command ls -l Documents split into three boxes separated by spaces. ls is the command, which program to run. -l is a flag or option, which changes how it works: a long list. Documents is an argument, what to work on. A note says spaces separate the words and extra spaces don’t count.", cap:"Reading a command: program name, then flags, then arguments."},
      {list:[
        "The **command** is the program’s name: `ls` lists a folder’s contents.",
        "A **[[flag]]** (also called an **option** or **switch**) changes how the program behaves. Short flags are a dash and one letter, like `-l` (long format). Long flags use two dashes and a word, like `--all`. Several short flags can usually be squashed together: `ls -l -a` and `ls -la` mean the same.",
        "An **[[argument-shell|argument]]** says what to work on: here the folder `Documents`. Strictly, everything after the program’s name counts as an argument, flags included; in everyday speech “arguments” means the non-flag parts."
      ]},
      "Now the warm-up makes sense. In `echo Hello,    world` the shell splits at the spaces and hands `echo` two words. To keep spaces, put the text in quotes, which makes it one word:",
      {code:['$ echo Hello,    world','Hello, world','$ echo "Hello,    world"','Hello,    world'].join("\n"), lang:"txt", label:"What you see"},
      "Two habits follow from this grammar. **Spaces matter**: `ls-l` is one word, and there’s no program by that name. And in bash and zsh, **capitals matter**: `ls -a` and `ls -A` are different flags. PowerShell is more forgiving about capitals, but it’s wise to copy spelling exactly everywhere."
    ]},
    {h:"It’s okay to be nervous: read before you press Enter", body:[
      "Many people feel uneasy at a blank prompt: no buttons, no undo, and stories of one command deleting everything. The worry is reasonable, and the cure is a habit: **read the whole line before pressing Enter**. Ask: what program is this, what do the flags do, and what will it act on?",
      "Most commands only **look** (`ls`, `pwd`, `cat`, `date`). A few **change** things (`mv`, `cp`, `rm`, `mkdir`), and you’ll meet them in Lesson 3, practising in a throwaway folder. While you’re learning, nothing in this unit needs administrator power.",
      {h:"Getting unstuck"},
      {table:[
        ["What you see","What’s happening","What to do"],
        ["`bash: ech: command not found` (zsh: `command not found: ech`)","No program has that name: usually a typo","Check the spelling and try again. Nothing happened."],
        ["A `>` prompt instead of your usual one (zsh shows `dquote>` or `quote>`; PowerShell `>>`)","You opened a quote and didn’t close it; the shell is waiting for the rest","Press [[kbd:Ctrl]] + [[kbd:C]] and retype the line"],
        ["Nothing happens and no prompt returns","The program is still running, or waiting for you to type (for example `cat` with no file name)","Press [[kbd:Ctrl]] + [[kbd:C]] to stop it"],
        ["Pages of text fly past","A command printed more than fits","Scroll up, or use `less` (Lesson 4)"]
      ]},
      {key:"[[kbd:Ctrl]] + [[kbd:C]] is the shell’s “stop”. In a terminal it interrupts the running command rather than copying. To copy text in a terminal, use the menu or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]] on Linux and ChromeOS, [[kbd:Cmd]] + [[kbd:C]] on a Mac; Windows Terminal copies with [[kbd:Ctrl]] + [[kbd:C]] when text is selected."},
      "An error message is the shell telling you, in plain-ish words, what went wrong. It is not a sign you broke anything. Lesson 5 shows how to read the common ones."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The terminal is the shell.”** The terminal is the window; the shell is the program inside it that reads your commands. One terminal app can run different shells.",
        "**“The command line is only for programmers or hackers.”** It’s a general tool used by researchers, analysts, librarians and administrators for everyday jobs.",
        "**“I should type the `$`.”** The `$` (or `%`, or `PS …>`) is the prompt. Type only what comes after it.",
        "**“No output means it didn’t work.”** Many commands print nothing when they succeed. Errors are what get reported.",
        "**“One wrong command can wreck my computer.”** Most commands only look. The few that change things are covered carefully, and normal accounts can’t change system files without an administrator password."
      ]}
    ]}
   ],
   try:[
    {id:"t2u6-l1-x1", type:"sort", q:"Which are reasons people use a shell, and which are myths?", buckets:["A real reason","A myth"], items:[
      {t:"Running the same exact steps again next month", b:0, why:"Commands are text, so they can be saved, repeated and shared. That’s one of the main strengths."},
      {t:"Controlling a web server that has no screen", b:0, why:"Servers are usually managed over the network by typing commands; there may be no graphical desktop at all."},
      {t:"Chaining small tools, such as “find these lines, then count them”", b:0, why:"Pipes let one program’s output feed the next (Lesson 4)."},
      {t:"It’s mainly used for breaking into computers", b:1, why:"Films show it that way, but shells are ordinary work tools for researchers, analysts and administrators."},
      {t:"You must be a programmer to use one", b:1, why:"You need a handful of commands and some care, not programming knowledge. Software Carpentry teaches it to researchers from every field."},
      {t:"Renaming hundreds of files in one go", b:0, why:"Repetitive file jobs are where a shell saves hours."}
    ]},
    {id:"t2u6-l1-x2", type:"match", q:"Match each word with what it means.", pairs:[
      ["Terminal","The window app that shows text and passes your typing on","The terminal is just the window; it doesn’t understand commands itself."],
      ["Shell","The program that reads each line you type and runs it","bash, zsh and PowerShell are shells."],
      ["Prompt","The text the shell shows when it’s ready for a command","It often ends in `$`, `%` or `>`."],
      ["zsh","The default shell on current Macs","Apple switched the default from bash to zsh in macOS 10.15 Catalina."],
      ["PowerShell","Microsoft’s shell, built into Windows","It has its own command names but also aliases such as `ls` and `cd`."]
    ]},
    {id:"t2u6-l1-x3", type:"spot", q:"Mei is copying lines from a tutorial. Which parts should she **not** type?", ask:"not typed", mono:true, parts:[
      {t:"$", flag:true, why:"That’s the prompt, shown to mark a line you type. Typing it would make `$` part of the command."}, " ", {t:"echo \"Good morning\"", flag:false, why:"This is the command itself; type it exactly, quotes included."}, "\n", {t:"Good morning", flag:true, why:"This is the computer’s reply (output), not something to type."}, "\n", {t:"$", flag:true, why:"Another prompt marking the next typed line."}, " ", {t:"whoami", flag:false, why:"A command to type."}, "\n", {t:"mei", flag:true, why:"The output of `whoami`: the shell prints the user name."}
    ]},
    {id:"t2u6-l1-x4", type:"match", q:"In `ls -l Documents`, match each part with its role.", pairs:[
      ["`ls`","The command: which program runs","The first word is always the program’s name."],
      ["`-l`","A flag: changes how the program behaves","A dash and a letter; here it asks for the long, detailed format."],
      ["`Documents`","An argument: what to work on","The folder whose contents will be listed."]
    ]},
    {id:"t2u6-l1-x5", type:"mcq", q:"Hana types `echo \"Nice    to meet you\"` (four spaces after Nice, inside the quotes). What does she see?", options:[
      {t:"Nice    to meet you, with the four spaces kept", ok:true, why:"Right. Quotes make everything inside them one word, so the shell doesn’t split it and the spaces survive."},
      {t:"Nice to meet you, with single spaces", why:"That happens without quotes, when the shell splits the line into separate words. Quotes stop the splitting."},
      {t:"The quotes as well: \"Nice    to meet you\"", why:"The shell removes the quotes after using them to group the words; `echo` never sees them."},
      {t:"An error, because echo takes only one word", why:"`echo` happily takes any number of words. Here it gets exactly one."}
    ]},
    {id:"t2u6-l1-x6", type:"mcq", q:"Sione types `cat` and presses Enter. No prompt comes back and the cursor just sits there. What’s the best thing to do?", options:[
      {t:"Press Ctrl + C to stop the command, then check what it needs", ok:true, why:"Right. With no file name, `cat` waits for you to type text. Ctrl + C interrupts it and gives you the prompt back. Nothing is harmed."},
      {t:"Close the laptop lid and restart the computer", why:"Far more than needed. Ctrl + C stops the waiting command in a second."},
      {t:"Type `$` to get the prompt back", why:"The `$` is something the shell shows, not something you type. Typing it just sends more text to `cat`."},
      {t:"Wait: it’s downloading something", why:"`cat` doesn’t download anything. It’s waiting for input from the keyboard because no file was named."}
    ]}
   ],
   apply:{intro:"Open a real shell and say hello. If you’re on a phone, you can read along and still do the thinking parts.", tasks:[
     {t:"Open a terminal and find your prompt", how:{
       win:["Right-click the **Start** button and choose **Terminal** (on older versions of Windows this menu may say **Windows Terminal** or **Windows PowerShell** instead).","A window opens with a prompt like `PS C:\\Users\\yourname>`. That’s PowerShell.","Don’t choose **Terminal (Admin)**: you don’t need administrator power for anything in this unit."],
       mac:["Press [[kbd:Cmd]] + [[kbd:Space]], type `Terminal` and press [[kbd:Return]]. (Or open **Finder → Applications → Utilities → Terminal**.)","A window opens with a prompt ending in `%`. That’s zsh.","If you see a message about the default shell being zsh, your account still uses bash, which was the default on older Macs. Either is fine for this unit."],
       chromeos:["Select the time at the bottom right, then **Settings → About ChromeOS → Developers**.","Next to **Linux development environment**, select **Set up** and follow the steps. It can take 10 minutes or more.","When it finishes, a Terminal window opens with a prompt ending in `$`. Later, open it from the Launcher by searching for Terminal.","If the Developers option is missing or greyed out, your administrator may have turned Linux off. Use the phone steps."],
       phone:["Phones don’t include a terminal. You can still learn everything here by reading and doing the exercises.","Optional, Android: terminal apps such as Termux give you a small Linux-like shell where most commands in this unit work.","Optional, iPhone and iPad: apps such as a-Shell or iSH offer a Unix-like shell; some commands differ or are missing.","Install only from your phone’s official app store or the project’s own site, and give such apps no permissions they don’t need."]
     }, write:"What does your prompt look like? Which shell are you using?"},
     {t:"Run your first four commands", how:["Type `echo Hello from the shell` and press Enter.","Type `date`, then `whoami`. Compare the replies with the examples in the lesson.","Try `echo Hello,    world` with extra spaces, then the same with quotes around the text. Notice the difference.","Type `clear` (or press [[kbd:Ctrl]] + [[kbd:L]]) to tidy the window."], write:"Copy one command and its output. What did the quotes change?"},
     {t:"Get stuck on purpose, then get unstuck", how:["Type `ech hello` (a typo) and read the error. Nothing happened.","Type `echo \"unfinished` (no closing quote) and press Enter. See the different prompt? Press [[kbd:Ctrl]] + [[kbd:C]].","Type `cat` with nothing after it and press Enter. It waits. Press [[kbd:Ctrl]] + [[kbd:C]].","In PowerShell the typo message says the name “is not recognized”, and an open quote shows `>>`. The fix is the same."], write:"Write the error message from the typo in your own words."}
   ], proof:"A terminal open on your device (or, on a phone, notes from reading along); the output of `echo`, `date` and `whoami`; and a note of the error from a typo and how you got unstuck with Ctrl + C."},
   read:[
     {book:"swc", where:"The Unix Shell → 1. Introducing the Shell (sections “What is the Shell?”, “Why use the shell?” and “Command not found”)"},
     {book:"missing", where:"Course Overview + Introduction to the Shell → “What is the shell?” and “Why should you care about it?”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t2u6-l2", title:"Finding your way: pwd, ls and cd", minutes:50,
   hook:{q:"Amara’s shell is in the folder `/home/amara/Documents`. She types `cd ..` and presses Enter, then types `cd ..` again. Where is she now?", options:["/home/amara/Documents (cd .. does nothing)","/home","/ (the very top)","/home/amara/Documents/.."], answer:1, reveal:"She’s in `/home`. In a path, `..` means “the folder one level up”, the parent. The first `cd ..` moves from Documents up to `/home/amara`; the second moves up again to `/home`. This lesson draws the folder tree, shows how to ask where you are, and how to move around it by name."},
   goals:[
     "Picture the file system as a tree with a root, and find your home folder in it",
     "Use `pwd` to see where you are and `ls` (with `-l` and `-a`) to see what’s there",
     "Move around with `cd`, using absolute paths, relative paths, `..` and `~`",
     "Let the shell do the typing with Tab completion and the command history",
     "Handle names with spaces using quotes"
   ],
   learn:[
    {h:"Folders form a tree", body:[
      {lead:"Every file on your computer sits inside a folder, which sits inside another folder, all the way up to one folder at the top."},
      "Draw it and it looks like a family tree, or an upside-down tree with the trunk at the top. The top folder is called the **root**. In the shell world, folders are usually called **directories**; the two words mean the same thing.",
      "A **[[path]]** is the list of folders you pass through to reach something, written with a separator between the names. On Mac, Linux and ChromeOS the separator is `/`, and the root is written as just `/`. So `/home/amara/Documents` means: start at the root, go into `home`, then `amara`, then `Documents`.",
      {fig:'<svg viewBox="0 0 340 368"><rect class="d-panel" x="10" y="12" width="80" height="26" rx="6" stroke-width="1.5"/><text x="50" y="30" text-anchor="middle">/ (root)</text><path class="d-ink" d="M30,38 L30,65 L40,65" stroke-width="1.5" fill="none"/><rect class="d-panel" x="40" y="52" width="70" height="26" rx="6" stroke-width="1.5"/><text x="75" y="70" text-anchor="middle">home</text><text class="s" x="120" y="70">On a Mac: /Users</text><path class="d-ink" d="M60,78 L60,105 L70,105" stroke-width="1.5" fill="none"/><rect class="d-lup" x="70" y="92" width="110" height="26" rx="6" stroke-width="1.5"/><text x="125" y="110" text-anchor="middle">amara (~)</text><path class="d-ink" d="M90,118 L90,265 M90,145 L100,145 M90,225 L100,225 M90,265 L100,265" stroke-width="1.5" fill="none"/><rect class="d-gold" x="100" y="132" width="110" height="26" rx="6" stroke-width="2.5"/><text x="155" y="150" text-anchor="middle">Documents</text><text x="216" y="150">◀ you are here</text><path class="d-ink" d="M120,158 L120,185 L130,185" stroke-width="1.5" fill="none"/><rect class="d-panel" x="130" y="172" width="90" height="26" rx="6" stroke-width="1.5"/><text x="175" y="190" text-anchor="middle">recipes</text><rect class="d-panel" x="100" y="212" width="100" height="26" rx="6" stroke-width="1.5"/><text x="150" y="230" text-anchor="middle">Pictures</text><rect class="d-panel" x="100" y="252" width="110" height="26" rx="6" stroke-width="1.5"/><text x="155" y="270" text-anchor="middle">Downloads</text><text x="10" y="306">Absolute path, from the root:</text><text class="s" x="10" y="324">/home/amara/Documents/recipes</text><text x="10" y="346">Relative, from where you are:</text><text class="s" x="10" y="362">recipes · ../Pictures · .. (= amara)</text></svg>', alt:"A folder tree. At the top is the root, written as a slash. Inside it is home (on a Mac this is /Users). Inside home is amara, marked with a tilde as the home folder. Inside amara are Documents, Pictures and Downloads; Documents is highlighted with the label you are here, and it contains recipes. Below, the absolute path from the root is /home/amara/Documents/recipes, and relative paths from where you are include recipes, ../Pictures, and .. which means amara.", cap:"The file system as a tree. An absolute path starts at the root; a relative path starts where you are."},
      "Each person’s account has a **[[home-directory|home folder]]** for their own files: `/home/amara` on Linux and ChromeOS, `/Users/amara` on a Mac. The shell has a nickname for it, `~` (a tilde), so `~/Documents` means “Documents inside my home folder”, whoever you are.",
      "**Windows** works the same way with two differences: each drive has its own root, such as `C:\\`, and the separator is a backslash. Amara’s home folder there is `C:\\Users\\amara`. PowerShell accepts forward slashes too, and understands `~`.",
      "You already know this tree from your file manager (File Explorer, Finder or Files). The shell shows the same folders and files; it just shows them as text. Delete a file in one, and it’s gone from the other."
    ]},
    {h:"Where am I? pwd", body:[
      "A shell always has one folder it is “standing in”, called the **[[working-directory|working directory]]**, or current directory. Think of it as the room you’re in: when you say “the box on the table”, people know which table, because they know which room.",
      "`[[pwd]]` (print working directory) tells you which room:",
      {code:['$ pwd','/home/amara'].join("\n"), lang:"txt", label:"What you see (Linux or ChromeOS)", cap:"On a Mac you’d see `/Users/amara`. A new terminal usually starts in your home folder."},
      "PowerShell also understands `pwd`, but answers with a small table:",
      {code:['PS C:\\Users\\amara> pwd','','Path','----','C:\\Users\\amara'].join("\n"), lang:"txt", label:"What you see (PowerShell)"},
      {tip:"When you feel lost, type `pwd`. It changes nothing and always tells you where you are. Many prompts show the folder too, but often shortened (`~` for home)."}
    ]},
    {h:"What’s here? ls", body:[
      "`[[ls]]` (list) shows what’s in the working directory, or in a folder you name as an argument:",
      {code:['ls','ls Documents','ls -l Documents','ls -a'].join("\n"), lang:"sh", label:"Command line"},
      {code:['$ ls',' Documents   Downloads  \'Garden club\'   Pictures','$ ls Documents','notes.txt  recipes'].join("\n"), lang:"txt", label:"What you see", cap:"Linux puts quotes around names with spaces so you can see where each name ends (and nudges the other names over by a space to keep them lined up); a Mac shows the name without quotes. Many terminals also colour folders differently from files."},
      {h:"-l: the long format"},
      {code:['$ ls -l Documents','total 8','-rw-r--r-- 1 amara amara    2 Nov  6 15:43 notes.txt','drwxr-xr-x 2 amara amara 4096 Nov  6 15:43 recipes'].join("\n"), lang:"txt", label:"What you see"},
      "Each line is one item. The first character says what it is: `d` for a directory, `-` for an ordinary file. The next nine characters are **[[permissions]]**: who may read (`r`), write (`w`) or run (`x`) it. Then come the owner, the group, the size in bytes, the date it last changed, and the name. You don’t need to decode the permissions yet; noticing `d` versus `-` is already useful.",
      {h:"-a: show hidden files"},
      "On Mac and Linux, a name that starts with a dot, such as `.bashrc`, is a **[[hidden-file|hidden file]]**. It’s not secret; it’s just left out of normal listings, because these are usually settings files. `ls -a` (all) shows them, plus two special entries: `.` (this folder) and `..` (the folder above).",
      {code:['$ ls -a',' .   ..   .bashrc   Documents   Downloads  \'Garden club\'   Pictures'].join("\n"), lang:"txt", label:"What you see"},
      {warn:"In PowerShell, `ls` runs `Get-ChildItem`, which always shows a detailed table and uses different flags: `ls -l` and `ls -a` don’t mean “long” and “all” there. To include hidden items, use `ls -Force`."}
    ]},
    {h:"Moving around: cd", body:[
      "`[[cd]]` (change directory) moves you to another folder. When it works, it prints nothing; the prompt (or `pwd`) shows the new place.",
      {code:['cd Documents','pwd','cd recipes','cd ..','cd ../Pictures','cd ~'].join("\n"), lang:"sh", label:"Command line", cap:"Starting from `/home/amara`, `pwd` shows `/home/amara/Documents`. Then you go into recipes, back up to Documents, across to Pictures, and home."},
      "There are two ways to write where you want to go:",
      {table:[
        ["Kind","Starts from","Example"],
        ["**Absolute path**","The root (begins with `/`, or `C:\\` on Windows)","`cd /home/amara/Pictures` works from anywhere"],
        ["**[[relative-path|Relative path]]**","Where you are now","`cd Pictures` works only if Pictures is right here"]
      ]},
      "Four shortcuts appear in paths all the time:",
      {list:[
        "`..` means the **parent**, the folder one level up. `cd ..` goes up; `cd ../..` goes up two levels; `../Pictures` means “up one, then into Pictures”: across to a sibling folder.",
        "`.` means **this folder**. You rarely need it with `cd`, but you’ll see it in commands like `./script.sh` (run the script that’s here).",
        "`~` means **your home folder**, so `cd ~` always takes you home. In bash and zsh, `cd` on its own does too.",
        "`/` on its own means **the root**: `cd /` takes you to the very top."
      ]},
      {ex:"Amara is in /home/amara/Documents/recipes.\nEach line starts from there:\ncd ..             → /home/amara/Documents\ncd ../..          → /home/amara\ncd ../../Pictures → /home/amara/Pictures\ncd ~              → /home/amara", label:"Worked example", mono:true},
      {key:"Absolute paths work from anywhere but are long. Relative paths are short but depend on where you are. When a relative path fails, check `pwd` first."}
    ]},
    {h:"Let the shell do the typing: Tab and history", body:[
      "Typing long names exactly is tiring and error-prone. Shells help in two ways.",
      {h:"Tab completion"},
      "Type the start of a name and press [[kbd:Tab]]. If only one name fits, the shell fills in the rest. Type `cd Doc` and press [[kbd:Tab]], and it becomes `cd Documents/`. If several names fit (`Documents` and `Downloads` both start with `Do`), bash fills in what they share and waits; press [[kbd:Tab]] twice to see the choices. zsh shows the choices straight away, and PowerShell cycles through them each time you press [[kbd:Tab]].",
      "This is called **[[tab-completion|Tab completion]]**, and it does more than save keystrokes: if Tab completes a name, that name **really exists**, spelled correctly. If nothing happens, you’re probably in the wrong folder or have a typo.",
      {h:"History"},
      "The shell remembers what you typed. Press [[kbd:↑]] to bring back your previous command, and again to go further back; [[kbd:↓]] comes forward. You can edit the line with [[kbd:←]] and [[kbd:→]] before pressing Enter. `history` lists recent commands, and in bash and zsh [[kbd:Ctrl]] + [[kbd:R]] searches them as you type.",
      {tip:"History is great for fixing typos: press ↑, move to the mistake, correct it and press Enter. Don’t press Enter on an old command until you’ve read it again, especially one that deletes things."}
    ]},
    {h:"Spaces in names", body:[
      "Lesson 1 showed that the shell splits lines at spaces. So what happens with a folder called `Garden club`?",
      {code:['$ cd Garden club','bash: cd: too many arguments'].join("\n"), lang:"txt", label:"What you see"},
      "The shell handed `cd` two words, `Garden` and `club`, and `cd` can only go to one place. (zsh shows a different, more confusing message, `cd: string not in pwd: Garden`, for the same reason.) Two fixes:",
      {code:['cd "Garden club"','cd Garden\\ club'].join("\n"), lang:"sh", label:"Command line", cap:"Quotes keep the name together as one word. A backslash before a space means “this space is part of the name”. Tab completion adds the backslash for you."},
      "Quotes also protect other characters the shell treats specially, such as `&`, `(`, `)`, `;` and `'`. A file named `Lucía's notes (draft).txt` needs quotes, or Tab completion, every time.",
      {key:"For files you’ll handle in a shell, use names without spaces: `garden-club`, `garden_club` or `GardenClub`. Lowercase with hyphens is a common choice. It saves a lot of quoting."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“cd shows me the files.”** `cd` only moves you. Use `ls` to see what’s there.",
        "**“No message after cd means it failed.”** Silence means success. Errors are reported, such as `No such file or directory`.",
        "**“A relative path works from anywhere.”** It starts from your current folder, so the same command can work in one place and fail in another.",
        "**“Hidden files are secret or dangerous.”** They’re usually settings files, hidden only to keep listings tidy. Leave them alone unless you know what they are.",
        "**“The shell’s folders are separate from my normal ones.”** They are the same files that your file manager shows."
      ]}
    ]}
   ],
   try:[
    {id:"t2u6-l2-x1", type:"sort", q:"Which of these are absolute paths, and which are relative?", buckets:["Absolute","Relative"], items:[
      {t:"`/home/amara/Pictures`", b:0, why:"It starts with `/`, the root, so it means the same place from anywhere."},
      {t:"`Pictures`", b:1, why:"No leading `/`: it means “Pictures inside the folder I’m in now”."},
      {t:"`../Downloads`", b:1, why:"It starts from where you are, goes up one level, then into Downloads."},
      {t:"`/Users/kenji/Desktop`", b:0, why:"A Mac path starting at the root."},
      {t:"`C:\\Users\\priya\\Music`", b:0, why:"On Windows, a path starting with a drive letter like `C:\\` begins at that drive’s root."},
      {t:"`recipes/soup.txt`", b:1, why:"It starts with a folder name, so it’s relative to the current folder."}
    ]},
    {id:"t2u6-l2-x2", type:"number", q:"Tomás is in `/home/tomas/Documents/recipes`. How many times must he type `cd ..` to reach `/home`?", answer:3, tol:0, unit:"times", why:"Each `cd ..` climbs one level: recipes → Documents (1), Documents → tomas (2), tomas → home (3). So **3**. (He could also type `cd ../../..` once, or `cd /home`.)", wrongs:[
      {v:2, tol:0, why:"Two steps reach `/home/tomas`, his home folder, which is one level below `/home`."},
      {v:4, tol:0, why:"Four steps would go past `/home` up to the root `/`."},
      {v:1, tol:0, why:"`cd ..` goes up only one level each time, not straight to the top."}
    ]},
    {id:"t2u6-l2-x3", type:"mcq", q:"Priya is in `/home/priya/Documents`. She wants to go to `/home/priya/Pictures`. Which command does **not** get her there?", options:[
      {t:"`cd Pictures`", ok:true, why:"Right, this one fails. A relative path starts where she is, and there’s no Pictures inside Documents. She gets `No such file or directory`."},
      {t:"`cd ../Pictures`", why:"This works: up one to `/home/priya`, then into Pictures."},
      {t:"`cd ~/Pictures`", why:"This works from anywhere: `~` is her home folder, `/home/priya`."},
      {t:"`cd /home/priya/Pictures`", why:"This works: an absolute path means the same place from anywhere."}
    ]},
    {id:"t2u6-l2-x4", type:"match", q:"Match each symbol in a path with its meaning.", pairs:[
      ["`~`","Your home folder","`cd ~` takes you home from anywhere."],
      ["`..`","The folder one level up (the parent)","`cd ..` climbs one level."],
      ["`.`","The folder you’re in now","Used in commands like `./script.sh`."],
      ["`/` at the start","The root, the top of the tree","Paths starting with `/` are absolute."]
    ]},
    {id:"t2u6-l2-x5", type:"mcq", q:"Lucía runs `ls` in her home folder and sees `Documents  Music  notes.txt`. Her friend says there’s also a settings file called `.zshrc` there. Why didn’t `ls` show it?", options:[
      {t:"Names starting with a dot are hidden from normal listings; `ls -a` shows them", ok:true, why:"Right. Dot-files are usually settings, left out to keep listings tidy. `ls -a` lists everything."},
      {t:"It’s been deleted", why:"Hidden isn’t deleted. The file is there; `ls` just skips names starting with a dot unless you ask with `-a`."},
      {t:"`ls` only shows folders", why:"`ls` shows files too: `notes.txt` is a file."},
      {t:"She needs administrator power to see it", why:"It’s her own file in her own home folder. She only needs the `-a` flag."}
    ]},
    {id:"t2u6-l2-x6", type:"mcq", q:"Oluwaseun types `cd Family photos` and gets `bash: cd: too many arguments`. What’s the fix?", options:[
      {t:"`cd \"Family photos\"`", ok:true, why:"Right. Quotes keep the two words together as one argument, so `cd` receives one folder name. `cd Family\\ photos` or Tab completion also work."},
      {t:"`cd Family-photos`", why:"That names a different folder (with a hyphen), which doesn’t exist. Renaming the folder would work, but this command alone won’t."},
      {t:"`cd -a Family photos`", why:"A flag doesn’t fix the problem: the shell still splits the name into two words."},
      {t:"`cd Family` then `cd photos`", why:"There’s no folder called just `Family`. The space is part of a single name."}
    ]}
   ],
   apply:{intro:"Explore your own folders from the shell. Nothing here changes any files.", tasks:[
     {t:"Map your home folder", how:{
       win:["Open Terminal (PowerShell). Type `pwd`: you should see something like `C:\\Users\\yourname`.","Type `ls` to see your folders, then `ls -Force` to include hidden ones.","Type `cd Documents`, then `pwd`, then `ls`.","Type `cd ..` to go back, then `cd ~` from anywhere to go home."],
       mac:["Open Terminal. Type `pwd`: you should see `/Users/yourname`.","Type `ls`, then `ls -a` and `ls -l`. Spot which entries are folders (`d`).","Type `cd Documents`, then `pwd`, then `ls`. If macOS asks whether Terminal may access your Documents folder, that’s a normal privacy check: allow it if you’re happy to.","Type `cd ..`, then `cd ~`."],
       chromeos:["Open Terminal. Type `pwd`: you’ll see `/home/yourname`. This is your Linux home, shown as **Linux files** in the Files app.","Type `ls`, then `ls -a`. A new Linux home has few visible files but several hidden ones.","Make a folder in the Files app under **Linux files**, then run `ls` again in Terminal to see it appear.","Practise `cd` into it, `cd ..` and `cd ~`."],
       phone:["Without a terminal app: open your phone’s Files app and find a folder with a sub-folder inside it. Write down the path to it in shell style, like `Documents/recipes`.","Write what `cd ..` would do from there, and a relative path from one folder to a sibling (using `..`).","With Termux (Android) or a-Shell (iPhone and iPad): run `pwd`, `ls -a` and `cd ..` and compare with the lesson. Their home folders are inside the app, not your whole phone."]
     }, write:"What’s your home folder’s full path? Name one hidden file you found."},
     {t:"Practise Tab, history and quotes", how:["Type `cd Doc` and press [[kbd:Tab]]. Then go back with `cd ..`.","Type `ls D` and press [[kbd:Tab]] twice (once in zsh) to see every name starting with D.","Press [[kbd:↑]] a few times to see your previous commands. Type `history` (bash, zsh or PowerShell).","If you have a folder with a space in its name, try `cd` into it without quotes, read the error, then use quotes or Tab."], write:"Which shortcut will save you the most typing?"}
   ], proof:"The full path of your home folder, a listing that includes hidden files, and a short note of a `cd` route you took using `..` and `~` (or, on a phone, paths you wrote out by hand)."},
   read:[
     {book:"swc", where:"The Unix Shell → 2. Navigating Files and Directories (especially “Home Directory Variation”, “Slashes”, “Two More Shortcuts” and “Absolute vs Relative Paths”)"},
     {book:"missing", where:"Course Overview + Introduction to the Shell → “Navigating in the shell”"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t2u6-l3", title:"Making, copying, moving and deleting", minutes:55,
   hook:{q:"Dmitri deletes a file by mistake with `rm report.txt` in his terminal. Where can he get it back from?", options:["The Recycle Bin or Trash, like any deleted file","Press Ctrl + Z to undo","Only from a backup copy, if he has one","The shell keeps deleted files for 30 days"], answer:2, reveal:"Only from a backup. `rm` doesn’t use the Recycle Bin or Trash, and the shell has no undo. Specialist recovery tools sometimes find traces of a deleted file, but nobody should count on that. This lesson shows how to make, copy, move and delete files in a practice folder, with habits that make mistakes rare."},
   goals:[
     "Set up a throwaway practice folder and check where you are before changing anything",
     "Create folders and empty files with `mkdir` and `touch` (or `New-Item` in PowerShell)",
     "Copy with `cp`, move and rename with `mv`, and know that both can overwrite silently",
     "Delete with `rm` and `rmdir`, knowing there’s no undo, and use `-i` to confirm",
     "Preview what a wildcard matches before deleting with it"
   ],
   learn:[
    {h:"A safe place to practise", body:[
      {lead:"The commands in this lesson change things. So you’ll practise them where nothing matters."},
      "Make a folder just for practice, inside your home folder, and do everything there. If something goes wrong, you lose only practice files.",
      {code:['cd ~','mkdir shell-practice','cd shell-practice','pwd'].join("\n"), lang:"sh", label:"Command line", cap:"`pwd` should end in `/shell-practice` (or `\\shell-practice` on Windows). These four lines work the same in PowerShell."},
      {key:"Before any command that changes or deletes files, check where you are with `pwd`, and what’s there with `ls`. Most shell accidents happen in the wrong folder."},
      "Software Carpentry’s lesson does the same: it gives learners a folder of sample data to download and experiment with, so real work is never at risk."
    ]},
    {h:"Making folders and files: mkdir and touch", body:[
      "`[[mkdir]]` (make directory) creates a folder. You can create several at once, and `-p` (parents) creates a whole chain of folders in one go:",
      {code:['mkdir drafts','mkdir photos music','mkdir -p trip/2026/photos'].join("\n"), lang:"sh", label:"Command line", cap:"The last line creates `trip`, then `2026` inside it, then `photos` inside that. Without `-p`, it fails because `trip` doesn’t exist yet."},
      "If the folder already exists, `mkdir` refuses rather than replacing it: `mkdir: cannot create directory 'drafts': File exists`. That’s a safe kind of error.",
      "`[[touch]]` creates an empty file, or several:",
      {code:['touch notes.txt todo.txt','ls'].join("\n"), lang:"sh", label:"Command line"},
      "Its real job is to update a file’s “last modified” time (as if you had touched it). If the file doesn’t exist yet, it creates it empty. Touching an existing file doesn’t change what’s inside, so it’s harmless.",
      {h:"In PowerShell"},
      "PowerShell has `mkdir` (separate several names with commas: `mkdir photos, music`) but no `touch`. Use `New-Item` instead:",
      {code:['New-Item notes.txt -ItemType File'].join("\n"), lang:"sh", label:"PowerShell", cap:"Creates an empty file and prints a small table describing it. Unlike `touch`, it complains if the file already exists."},
      {tip:"For files you’ll work with in a shell, choose names without spaces: lowercase, with hyphens or underscores, and a file extension: `garden-plan.txt`, not `Garden Plan`."}
    ]},
    {h:"Copying: cp", body:[
      "`[[cp]]` (copy) takes a **source** and a **destination**, in that order: from, then to.",
      {code:['cp notes.txt notes-backup.txt','cp notes.txt drafts/','cp -r drafts drafts-copy'].join("\n"), lang:"sh", label:"Command line"},
      {list:[
        "Line 1 makes a copy with a new name, in the same folder.",
        "Line 2 copies `notes.txt` into the `drafts` folder, keeping its name. The trailing `/` makes it clear you mean a folder.",
        "Line 3 copies a whole folder and everything in it. Folders need `-r` (recursive: “and everything inside, all the way down”). Without it, `cp` skips the folder: `cp: -r not specified; omitting directory 'drafts'`."
      ]},
      {warn:"If the destination file already exists, `cp` **replaces it without asking**. Copying an empty `d.txt` onto your `plan.txt` leaves `plan.txt` empty, with no warning. Add `-i` (interactive) to be asked first: `cp -i d.txt plan.txt` replies `cp: overwrite 'plan.txt'?`, and you type `y` or `n`."},
      "In PowerShell, `cp` runs `Copy-Item`; copy folders with `Copy-Item drafts drafts-copy -Recurse`."
    ]},
    {h:"Moving and renaming: mv", body:[
      "`[[mv]]` (move) also takes a source and a destination. It does two jobs, which turn out to be the same job:",
      {code:['mv todo.txt drafts/','mv notes-backup.txt old-notes.txt'].join("\n"), lang:"sh", label:"Command line", cap:"Line 1 moves `todo.txt` into `drafts`. Line 2 **renames** the file: “moving” it to a new name in the same folder."},
      "There’s no separate rename command in bash; renaming is moving to a new name. (PowerShell has `Rename-Item` as well, and its `mv` runs `Move-Item`.) Unlike `cp`, `mv` works on folders without `-r`: `mv drafts old-drafts` renames a whole folder.",
      {h:"Two quiet surprises"},
      {ex:"$ echo first > a.txt\n$ echo second > b.txt\n$ mv a.txt b.txt\n$ cat b.txt\nfirst", label:"Worked example: mv overwrites", mono:true},
      "The text “second” is gone. Like `cp`, `mv` replaces an existing destination without asking. `mv -i` asks first.",
      "The second surprise: if you mean to move a file into a folder but mistype the folder’s name, `mv notes.txt drafst` doesn’t fail. It renames your file to `drafst`. Adding a slash (`mv notes.txt drafst/`) makes it fail safely instead: `Not a directory`. Tab completion avoids the typo altogether."
    ]},
    {h:"Deleting: rm and rmdir", body:[
      "`[[rm]]` (remove) deletes files. `rmdir` removes **empty** folders.",
      {code:['rm old-notes.txt','rmdir music','rm -r drafts-copy'].join("\n"), lang:"sh", label:"Command line"},
      {fig:'<svg viewBox="0 0 340 290"><defs><marker id="t2u6a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="87" y="20" text-anchor="middle">File manager</text><text x="253" y="20" text-anchor="middle">Shell</text><rect class="d-panel" x="10" y="32" width="155" height="44" rx="8" stroke-width="1.5"/><text x="87" y="52" text-anchor="middle">Delete</text><text class="s" x="87" y="68" text-anchor="middle">notes.txt</text><rect class="d-panel" x="175" y="32" width="155" height="44" rx="8" stroke-width="1.5"/><text x="253" y="52" text-anchor="middle">rm notes.txt</text><text class="s" x="253" y="68" text-anchor="middle">press Enter</text><path class="d-ink" d="M87,76 L87,100" stroke-width="2" marker-end="url(#t2u6a2)"/><path class="d-ink" d="M253,76 L253,100" stroke-width="2" marker-end="url(#t2u6a2)"/><rect class="d-sage" x="10" y="104" width="155" height="56" rx="8" stroke-width="2"/><text x="87" y="128" text-anchor="middle">Recycle Bin</text><text x="87" y="146" text-anchor="middle">or Trash</text><rect class="d-rose" x="175" y="104" width="155" height="56" rx="8" stroke-width="2"/><text x="253" y="128" text-anchor="middle">No bin:</text><text x="253" y="146" text-anchor="middle">removed now</text><path class="d-ink" d="M87,160 L87,184" stroke-width="2" marker-end="url(#t2u6a2)"/><path class="d-ink" d="M253,160 L253,184" stroke-width="2" marker-end="url(#t2u6a2)"/><rect class="d-sage" x="10" y="188" width="155" height="56" rx="8" stroke-width="1.5"/><text x="87" y="212" text-anchor="middle">Restore it</text><text class="s" x="87" y="230" text-anchor="middle">any time until emptied</text><rect class="d-rose" x="175" y="188" width="155" height="56" rx="8" stroke-width="1.5"/><text x="253" y="212" text-anchor="middle">Back only from</text><text class="s" x="253" y="230" text-anchor="middle">a backup you made</text><text class="s" x="170" y="276" text-anchor="middle">No Ctrl + Z in the shell. Check, then press Enter.</text></svg>', alt:"Two columns. On the left, deleting notes.txt in a file manager sends it to the Recycle Bin or Trash, from which you can restore it any time until the bin is emptied. On the right, rm notes.txt in the shell has no bin: the file is removed immediately, and it can come back only from a backup you made. A note at the bottom says there is no Ctrl + Z in the shell: check, then press Enter.", cap:"Deleting in the shell skips the safety net your file manager gives you."},
      "Three facts to keep in mind:",
      {list:[
        "**No undo, no bin.** `rm` removes the file straight away. PowerShell’s `rm` (`Remove-Item`) also bypasses the Recycle Bin. Specialist recovery tools can sometimes find traces of deleted data, which is also why `rm` isn’t a secure way to erase private files; but don’t count on getting anything back.",
        "**Folders need care.** `rm` on a folder fails (`Is a directory`), and `rmdir` on a folder that still has files fails (`Directory not empty`). These errors are protection. `rm -r` removes a folder **and everything inside it**, so read that line twice.",
        "**No questions by default.** `rm` doesn’t ask “are you sure?”. Add `-i` and it asks about each file: `rm: remove regular file 'b.txt'?`. Type `y` to delete, `n` (or just Enter) to keep. (A Mac’s wording is a little different.)"
      ]},
      {h:"rm -rf"},
      "You’ll see `rm -rf` in tutorials. `-r` means recursive and `-f` means **force**: don’t ask, don’t complain about missing files, just delete. It’s the “no safety catch” version. Never run it with a path you haven’t checked, never with `/` or `~` as the target, and never with `sudo` in front (Lesson 5).",
      "PowerShell has a useful extra: add `-WhatIf` to `Remove-Item` (and many other commands) and it only **describes** what it would delete, without doing it. `-Confirm` asks about each item."
    ]},
    {h:"Wildcards: check what they match before you delete", body:[
      "A **[[wildcard]]** is a pattern that matches many names. The two you’ll use most:",
      {table:[
        ["Pattern","Matches","Example"],
        ["`*`","Any number of characters (even none)","`*.txt` matches `notes.txt` and `a.txt`"],
        ["`?`","Exactly one character","`?.txt` matches `a.txt` but not `ab.txt`"]
      ]},
      "In bash and zsh, wildcards skip hidden names (those starting with a dot) unless the pattern itself starts with a dot. The example folder below holds two folders, `archive` and `photos`, and the files `c.txt`, `d.txt`, `keep.md` and `plan.txt`.",
      "The important detail: **the shell expands the pattern into a list of names before the command runs.** `rm *.txt` never sees `*.txt`; it receives `rm c.txt d.txt plan.txt`. So you can preview exactly what any command will receive by putting `echo` or `ls` in front:",
      {code:['$ echo rm *.txt','rm c.txt d.txt plan.txt','$ ls *.txt','c.txt  d.txt  plan.txt'].join("\n"), lang:"txt", label:"What you see: a dry run", cap:"Nothing is deleted: `echo` just prints the line as the shell would run it. If the list looks right, press ↑, remove `echo`, and run it."},
      {h:"One space, very different result"},
      "Compare `rm *.txt` with `rm * .txt`. The extra space splits the pattern into two words: `*`, which matches **every** file in the folder, and `.txt`. The second command tries to delete everything here. The dry run shows it at once:",
      {code:['$ echo rm * .txt','rm archive c.txt d.txt keep.md photos plan.txt .txt'].join("\n"), lang:"txt", label:"What you see"},
      {key:"Safe deletion routine: `pwd` to check the folder, `ls` with the same pattern to see the matches, then `rm -i` with that pattern, then `ls` again to confirm. And keep backups of anything that matters."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Deleted files go to the Trash.”** Not from the shell. `rm` has no bin and no undo.",
        "**“cp and mv will warn me before overwriting.”** By default they replace the destination silently. Use `-i`.",
        "**“Renaming needs a special command.”** In bash and zsh it’s `mv old-name new-name`.",
        "**“rm *.txt only deletes .txt files, so it’s always safe.”** It deletes every .txt file **in the current folder**, which might not be the folder you think. Check `pwd` and preview with `ls *.txt`.",
        "**“touch changes the file.”** It only updates the timestamp, or creates an empty file. The contents are untouched."
      ]}
    ]}
   ],
   try:[
    {id:"t2u6-l3-x1", type:"match", q:"Match each job with the command that does it.", pairs:[
      ["Make a new folder called `invoices`","`mkdir invoices`","`mkdir` makes directories."],
      ["Create an empty file `todo.txt`","`touch todo.txt`","`touch` creates an empty file if none exists (in PowerShell, `New-Item todo.txt -ItemType File`)."],
      ["Rename `draft.txt` to `final.txt`","`mv draft.txt final.txt`","Renaming is moving to a new name."],
      ["Copy a whole folder `photos` to `photos-backup`","`cp -r photos photos-backup`","Folders need `-r` to copy everything inside."],
      ["Remove an empty folder `old`","`rmdir old`","`rmdir` only removes empty folders, which makes it a safe choice."]
    ]},
    {id:"t2u6-l3-x2", type:"number", q:"In an empty practice folder, Fatima runs these lines in order. How many files are left?\n\n`touch a.txt b.txt c.txt`\n`cp a.txt d.txt`\n`mv b.txt c.txt`\n`rm a.txt`", answer:2, tol:0, unit:"files", why:"Start: a, b, c (3). `cp` adds d (4). `mv b.txt c.txt` renames b onto c, replacing the old c, so b is gone (3: a, c, d). `rm a.txt` removes a. Left: **c.txt and d.txt, 2 files**.", wrongs:[
      {v:3, tol:0, why:"That counts `mv` as if it kept both files. Moving b onto c replaces c, so one name disappears."},
      {v:4, tol:0, why:"That treats `mv` like `cp`. `mv` moves; it doesn’t leave the original behind."},
      {v:1, tol:0, why:"`cp a.txt d.txt` made d, and `rm` only removed a, so both c and d remain."}
    ]},
    {id:"t2u6-l3-x3", type:"mcq", q:"Hana wants to move `notes.txt` into her `drafts` folder but types `mv notes.txt drfats`. There’s no folder called `drfats`. What happens?", options:[
      {t:"The file is renamed to `drfats`, with no error", ok:true, why:"Right. When the destination isn’t an existing folder, `mv` treats it as a new name. Writing `drfats/` with a slash would make it fail safely instead, and Tab completion avoids the typo."},
      {t:"An error: no such folder", why:"That only happens with a trailing slash (`drfats/`). Without it, `mv` happily renames."},
      {t:"A new folder `drfats` is created and the file moved into it", why:"`mv` never creates folders. That would need `mkdir` first."},
      {t:"The file is deleted", why:"Nothing is deleted; the file now has the name `drfats`. `ls` will show it."}
    ]},
    {id:"t2u6-l3-x4", type:"order", q:"Kenji wants to delete every `.log` file in his practice folder, safely. Put the steps in order.", items:[
      {t:"`pwd`, to confirm he’s in the practice folder", why:"First make sure of the place: the same command in the wrong folder deletes the wrong files."},
      {t:"`ls *.log`, to see exactly which files match", why:"The shell expands the pattern the same way for `ls` as for `rm`, so this is a preview."},
      {t:"`rm -i *.log`, answering `y` for each file", why:"`-i` asks about each file, a last chance to keep one."},
      {t:"`ls`, to check what’s left", why:"Confirm the result: the .log files are gone and nothing else is."}
    ]},
    {id:"t2u6-l3-x5", type:"mcq", q:"Ana runs `echo rm * .txt` in a folder containing `budget.xlsx`, `notes.txt` and `photo.jpg`. What does it print, and what does that tell her?", options:[
      {t:"`rm budget.xlsx notes.txt photo.jpg .txt`: the real command would try to delete every file", ok:true, why:"Right. The space makes `*` a separate word, which matches every name in the folder. The dry run caught a disaster before it happened."},
      {t:"`rm notes.txt`: only the text file would be deleted", why:"That’s what `rm *.txt` (no space) would do. With the space, `*` stands alone and matches everything."},
      {t:"An error, because echo can’t take wildcards", why:"The shell expands wildcards before any command runs, `echo` included. That’s exactly why `echo` makes a good preview."},
      {t:"It deletes the files, then prints their names", why:"`echo` only prints. The `rm` here is just a word being printed, not a command being run."}
    ]},
    {id:"t2u6-l3-x6", type:"sort", q:"Sort these by whether you can get the deleted item back without a backup.", buckets:["Usually recoverable","Treat as gone"], items:[
      {t:"A file deleted in File Explorer, Finder or the Files app", b:0, why:"It goes to the Recycle Bin or Trash, where you can restore it until the bin is emptied."},
      {t:"A file removed with `rm` in bash or zsh", b:1, why:"No bin and no undo. Only a backup is a reliable way back."},
      {t:"A file removed with `Remove-Item` in PowerShell", b:1, why:"PowerShell’s delete also bypasses the Recycle Bin."},
      {t:"A folder removed with `rm -r`", b:1, why:"The folder and everything inside it is removed at once."},
      {t:"A file you overwrote with `cp` or `mv`", b:1, why:"The old contents were replaced. There’s no copy of them unless you had a backup."},
      {t:"A file moved into a folder with `mv`", b:0, why:"Moving isn’t deleting: it’s in the new folder, and `mv` can move it back."}
    ]}
   ],
   apply:{intro:"Practise every command in a throwaway folder, so mistakes cost nothing.", tasks:[
     {t:"Build and rearrange a practice folder", how:{
       win:["Open Terminal (PowerShell) and type `cd ~`, `mkdir shell-practice`, `cd shell-practice`, `pwd`.","Make folders: `mkdir drafts, photos`. Make files: `New-Item notes.txt, todo.txt -ItemType File`.","Copy and rename: `cp notes.txt notes-backup.txt`, then `mv notes-backup.txt old-notes.txt`.","Move: `mv todo.txt drafts`. Check with `ls` and `ls drafts`.","Open the folder in File Explorer (type `explorer .`) and see the same files."],
       mac:["Open Terminal: `cd ~`, `mkdir shell-practice`, `cd shell-practice`, `pwd`.","`mkdir drafts photos`, then `touch notes.txt todo.txt`.","`cp notes.txt notes-backup.txt`, then `mv notes-backup.txt old-notes.txt`.","`mv todo.txt drafts/`, then `ls` and `ls drafts`.","Type `open .` to see the same folder in Finder."],
       chromeos:["In Terminal: `cd ~`, `mkdir shell-practice`, `cd shell-practice`, `pwd`.","`mkdir drafts photos`, then `touch notes.txt todo.txt`.","`cp notes.txt notes-backup.txt`, then `mv notes-backup.txt old-notes.txt`.","`mv todo.txt drafts/`, then `ls` and `ls drafts`.","Open the Files app → **Linux files → shell-practice** to see the same files."],
       phone:["Without a terminal app: on paper, start with the folder from the lesson and write what `ls` would show after each command: `mkdir drafts`, `touch notes.txt todo.txt`, `cp notes.txt notes-backup.txt`, `mv todo.txt drafts/`.","With Termux (Android) or a-Shell (iPhone and iPad), you can run the Mac steps; skip `open .`."]
     }, write:"What did `ls` show at the end? Which command surprised you?"},
     {t:"Delete safely, with a dry run", how:["In your practice folder, make three files: `touch a.log b.log keep.txt` (PowerShell: `New-Item a.log, b.log, keep.txt -ItemType File`).","Preview: `ls *.log`. Only the two .log files should be listed.","bash or zsh: `rm -i *.log` and answer `y` to each. PowerShell: first `Remove-Item *.log -WhatIf` to see what would happen, then `Remove-Item *.log -Confirm`.","Run `ls` and check that `keep.txt` survived.","Try `echo rm * .log` (bash or zsh) to see what one stray space would have done. Don’t run it without `echo`."], write:"What did the preview show, and what did the stray-space version print?"}
   ], proof:"A practice folder containing `drafts`, `photos`, `notes.txt` and `old-notes.txt`, with `todo.txt` inside `drafts`; and notes from a dry run (`ls` or `-WhatIf`) before a deletion."},
   read:[
     {book:"swc", where:"The Unix Shell → 3. Working With Files and Directories (especially “Moving files and directories”, “Copying files and directories”, “Removing files and directories”, “Deleting Is Forever”, “Using rm Safely” and “Wildcards”)"},
     {book:"missing", where:"Command-line Environment → “Arguments” (how globs are expanded before a program runs)", note:"Background reading: it moves quickly into topics beyond this lesson."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t2u6-l4", title:"Reading and searching: grep, pipes and redirection", minutes:55,
   hook:{q:"Priya has a file `guests.txt` with 40 names in random order. She runs `sort guests.txt > guests.txt`, hoping to sort the file in place. What’s in `guests.txt` afterwards?", options:["The 40 names, sorted","The 40 names, unchanged","Nothing: the file is empty","An error message, and the file is untouched"], answer:2, reveal:"The file ends up empty. Before `sort` even starts, the shell sees `> guests.txt` and empties that file, ready to receive the output. Then `sort` reads the now-empty file and sorts nothing. No warning appears. This lesson shows how to look inside and search text files, join commands with pipes, and save output safely."},
   goals:[
     "Look inside text files with `cat`, `less`, `head` and `tail`, and count with `wc`",
     "Search with `grep`, using `-i` to ignore case and `-n` to show line numbers",
     "Use wildcards such as `*.txt` to work on many files at once",
     "Join commands with a pipe `|` so one command’s output becomes the next one’s input",
     "Save output with `>` and add to a file with `>>`, knowing that `>` overwrites without warning"
   ],
   learn:[
    {h:"A small file to work with", body:[
      {lead:"Many useful files are plain text: notes, lists, logs, and data saved as CSV. The shell is very good at reading and searching them."},
      "Picture a community garden that logs each day’s harvest in a text file: one line per pick, with the day, the crop, the kilograms and who picked it. Make that file in your practice folder:",
      {code:['cd ~/shell-practice','printf \'%s\\n\' \\','  "Mon tomatoes 3 Amara" \\','  "Mon beans 2 Kenji" \\','  "Tue Tomatoes 4 Hana" \\','  "Wed squash 1 Priya" \\','  "Wed tomatoes 2 Dmitri" \\','  "Thu beans 5 Mei" \\','  "Fri herbs 1 Sione" \\','  > harvest.txt'].join("\n"), lang:"sh", label:"bash or zsh", cap:"`printf` prints each quoted line followed by a new line. A backslash at the end of a line means “the command continues on the next line”. The `>` at the end sends everything into the file; it’s explained later in this lesson."},
      {code:['cd ~/shell-practice','Set-Content harvest.txt -Value @(','  "Mon tomatoes 3 Amara"','  "Mon beans 2 Kenji"','  "Tue Tomatoes 4 Hana"','  "Wed squash 1 Priya"','  "Wed tomatoes 2 Dmitri"','  "Thu beans 5 Mei"','  "Fri herbs 1 Sione"',')'].join("\n"), lang:"sh", label:"PowerShell", cap:"`Set-Content` writes each item of the list as one line of the file."},
      "You could also type the lines into any plain-text editor and save the file as `harvest.txt` in that folder. Notice that Hana wrote “Tomatoes” with a capital T; that will matter shortly."
    ]},
    {h:"Looking inside: cat, less, head and tail", body:[
      "`[[cat]]` prints a whole file. (The name comes from “concatenate”, joining: give it several files and it prints them one after another.)",
      {code:['$ cat harvest.txt','Mon tomatoes 3 Amara','Mon beans 2 Kenji','Tue Tomatoes 4 Hana','Wed squash 1 Priya','Wed tomatoes 2 Dmitri','Thu beans 5 Mei','Fri herbs 1 Sione'].join("\n"), lang:"txt", label:"What you see"},
      "For a long file, `cat` floods the screen. `less` shows it one screenful at a time and lets you move around:",
      {table:[
        ["Key in less","Does"],
        ["[[kbd:Space]] or [[kbd:↓]]","Next page, or next line"],
        ["[[kbd:B]] or [[kbd:↑]]","Back a page, or a line"],
        ["`/` then a word, then [[kbd:Enter]]","Search forward; [[kbd:N]] (without Shift) jumps to the next match"],
        ["[[kbd:Q]]","Quit and return to the prompt"]
      ]},
      "Often you only need the start or the end. `head` shows the first lines and `tail` the last; `-n` says how many (10 if you don’t say):",
      {code:['$ head -n 3 harvest.txt','Mon tomatoes 3 Amara','Mon beans 2 Kenji','Tue Tomatoes 4 Hana','$ tail -n 2 harvest.txt','Thu beans 5 Mei','Fri herbs 1 Sione'].join("\n"), lang:"txt", label:"What you see"},
      "`tail` is a favourite for **log files**, where the newest lines are at the bottom. `head` is handy for peeking at a big data file to see its column headings.",
      "In PowerShell, `cat` runs `Get-Content`. Use `Get-Content harvest.txt -Head 3` and `Get-Content harvest.txt -Tail 2`; for page-by-page reading, `more` works in both Windows shells."
    ]},
    {h:"Counting: wc", body:[
      "`wc` (word count) counts lines, words and bytes:",
      {code:['$ wc harvest.txt','  7  28 134 harvest.txt','$ wc -l harvest.txt','7 harvest.txt'].join("\n"), lang:"txt", label:"What you see", cap:"7 lines, 28 words, 134 bytes. With `-l` it counts lines only, which is what you’ll use most: one line per record means `wc -l` counts records."},
      "Counting sounds dull, but questions such as “how many orders today?” or “how many rows did the export give me?” come up all the time. In PowerShell: `Get-Content harvest.txt | Measure-Object -Line`."
    ]},
    {h:"Searching: grep", body:[
      "`[[grep]]` prints every line that contains a pattern. Give it the pattern first, then the file:",
      {code:['$ grep tomatoes harvest.txt','Mon tomatoes 3 Amara','Wed tomatoes 2 Dmitri'].join("\n"), lang:"txt", label:"What you see"},
      "Only two lines? Hana’s line says “Tomatoes”, and grep is **case-sensitive**: `T` and `t` are different letters to it. Flags fix that and add useful details:",
      {table:[
        ["Flag","Meaning","`grep … tomatoes harvest.txt` gives"],
        ["`-i`","Ignore case","3 lines, including Hana’s “Tomatoes”"],
        ["`-n`","Show line numbers","`1:Mon tomatoes 3 Amara` and `5:Wed tomatoes 2 Dmitri`"],
        ["`-c`","Count matching lines","`2` (with `-i` too: `3`)"],
        ["`-v`","Invert: lines that **don’t** match","With `-i`: the 4 lines about other crops"]
      ]},
      {code:['$ grep -in tomatoes harvest.txt','1:Mon tomatoes 3 Amara','3:Tue Tomatoes 4 Hana','5:Wed tomatoes 2 Dmitri'].join("\n"), lang:"txt", label:"What you see", cap:"Short flags combine: `-in` is `-i` plus `-n`."},
      "If nothing matches, grep prints **nothing** and the prompt returns. That’s not an error; it’s grep saying “no lines contain that”. Check your spelling and case before deciding the file lacks it.",
      "The name comes from an old editor command, `g/re/p`: **g**lobally search for a **r**egular **e**xpression and **p**rint. A regular expression is a pattern language that can describe things like “any line starting with Wed”; plain words are the simplest patterns.",
      {tip:"PowerShell’s version is `Select-String` (alias `sls`): `Select-String tomatoes harvest.txt`. Unlike grep, it **ignores case by default**, and it shows the file name and line number with each match. Add `-CaseSensitive` to behave like grep."}
    ]},
    {h:"Wildcards for reading many files", body:[
      "The wildcards from Lesson 3 are just as handy for reading. Here the folder also has a `tomatoes.txt` with 3 lines:",
      {code:['$ wc -l *.txt','  7 harvest.txt','  3 tomatoes.txt',' 10 total','$ grep -c -i tomatoes *.txt','harvest.txt:3','tomatoes.txt:3'].join("\n"), lang:"txt", label:"What you see", cap:"With several files, `wc` adds a total, and grep puts the file name in front of each result."},
      "If a pattern matches nothing, shells react differently. bash passes the pattern on unchanged, so the command complains: `ls: cannot access '*.jpg': No such file or directory`. zsh stops before running anything: `zsh: no matches found: *.jpg`. Either way, nothing happened."
    ]},
    {h:"Pipes: one command’s output into the next", body:[
      "Here’s where the shell becomes more than the sum of its commands. A **[[pipe]]**, written `|` (a vertical bar, usually [[kbd:Shift]] + [[kbd:\\]] on English keyboards; layouts vary), connects two commands: the output of the left one becomes the input of the right one, without going through a file.",
      {code:['$ grep -i tomatoes harvest.txt | wc -l','3'].join("\n"), lang:"txt", label:"What you see"},
      {fig:'<svg viewBox="0 0 340 338"><defs><marker id="t2u6a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="40" y="10" width="200" height="44" rx="8" stroke-width="1.5"/><text x="140" y="30" text-anchor="middle">harvest.txt</text><text class="s" x="140" y="46" text-anchor="middle">7 lines</text><path class="d-ink" d="M140,54 L140,78" stroke-width="2" marker-end="url(#t2u6a3)"/><rect class="d-rose" x="40" y="82" width="200" height="48" rx="8" stroke-width="2"/><text x="140" y="102" text-anchor="middle">grep -i tomatoes</text><text class="s" x="140" y="120" text-anchor="middle">keeps lines that match</text><rect class="d-soft" x="128" y="130" width="24" height="44" stroke-width="1.5"/><text x="140" y="157" text-anchor="middle">|</text><text x="164" y="150">pipe</text><text class="s" x="164" y="166">3 lines flow through</text><rect class="d-gold" x="40" y="174" width="200" height="48" rx="8" stroke-width="2"/><text x="140" y="194" text-anchor="middle">wc -l</text><text class="s" x="140" y="212" text-anchor="middle">counts the lines it receives</text><path class="d-ink" d="M140,222 L140,246" stroke-width="2" marker-end="url(#t2u6a3)"/><rect class="d-sage" x="40" y="250" width="200" height="40" rx="8" stroke-width="2"/><text x="140" y="275" text-anchor="middle">3, shown on screen</text><text class="s" x="10" y="314">Replace “| wc -l” with “> tomatoes.txt”</text><text class="s" x="10" y="330">and the 3 lines go into a file instead.</text></svg>', alt:"A vertical flow. The file harvest.txt, 7 lines, feeds grep -i tomatoes, which keeps the lines that match. A short pipe section marked with a vertical bar carries 3 lines down to wc -l, which counts the lines it receives. Its result, 3, is shown on the screen. A note says that replacing the pipe and wc -l with > tomatoes.txt sends the 3 lines into a file instead.", cap:"A pipe connects two programs. Each one does one small job; together they answer a question."},
      "Read a pipeline left to right, like a sentence: “find the lines mentioning tomatoes, in any case, **then** count them.” You can chain as many as you like:",
      {code:['sort harvest.txt | head -n 3','grep beans harvest.txt | sort -k3 -n -r'].join("\n"), lang:"sh", label:"Command line", cap:"The first shows the first three lines in alphabetical order (Fri, then the two Mon lines). The second keeps the bean lines, then sorts them by the 3rd word (`-k3`), as numbers (`-n`), largest first (`-r`): Mei’s 5 kg, then Kenji’s 2 kg."},
      "Programs that read input, change it and pass it on are called **filters**: `grep`, `sort`, `head`, `tail` and `wc` are all filters. Software Carpentry calls the ease of combining programs like this the shell’s most powerful feature: lots of simple tools that each do one job well, and that work well together.",
      {tip:"Build pipelines one step at a time. Run `grep -i tomatoes harvest.txt` first and look at the result; then press ↑ and add `| wc -l`. If the answer surprises you, you know which step to check."}
    ]},
    {h:"Redirection: saving output in a file", body:[
      "Normally output appears on the screen. **[[redirection|Redirection]]** sends it to a file instead:",
      {table:[
        ["Symbol","Meaning","If the file exists"],
        ["`>`","Write the output into this file","**Empties it first**, then writes. No warning."],
        ["`>>`","Add the output to the end of this file","Keeps what’s there and appends"]
      ]},
      {code:['grep -i tomatoes harvest.txt > tomatoes.txt','echo "Sat tomatoes 6 Ana" >> harvest.txt','tail -n 2 harvest.txt'].join("\n"), lang:"sh", label:"Command line", cap:"Line 1 creates `tomatoes.txt` with the 3 matching lines (nothing appears on screen; it all went into the file). Line 2 adds a new line to the end of the log. Line 3 shows `Fri herbs 1 Sione` and then `Sat tomatoes 6 Ana`."},
      {warn:"`>` overwrites without asking. `echo oops > tomatoes.txt` replaces the whole file with one word. And because the shell empties the file **before** the command runs, `sort harvest.txt > harvest.txt` leaves you with an empty file, as in the warm-up. Always write to a **new** name: `sort harvest.txt > sorted.txt`, check it, then rename it if you want."},
      "A good way to remember the two: one arrow pours the output in and replaces what was there; two arrows add to the end. When adding to a log or a list, double-check that you typed two.",
      "PowerShell uses the same `>` and `>>`. Two details differ: its pipes pass **objects** rather than plain text (Lesson 5), and Windows PowerShell 5.1 saves text with `>` in an encoding (UTF-16) that some other programs read badly. For files other programs will read, `Out-File -Encoding utf8` (or `Set-Content -Encoding utf8`) is safer there. PowerShell 7 saves UTF-8, which most programs read well."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“grep finds words in any case.”** It’s case-sensitive. Use `-i` to ignore case.",
        "**“No output from grep means an error.”** It means no line matched.",
        "**“`>` adds to a file.”** `>` replaces; `>>` adds.",
        "**“`sort file > file` sorts it in place.”** It empties the file. Write to a new file.",
        "**“A pipe saves a file somewhere.”** The data flows straight from one program to the next; nothing is saved unless you redirect it."
      ]}
    ]}
   ],
   try:[
    {id:"t2u6-l4-x1", type:"match", q:"Match each goal with the command for `harvest.txt`.", pairs:[
      ["See the last 5 lines","`tail -n 5 harvest.txt`","`tail` shows the end of a file; `-n` says how many lines."],
      ["Count how many lines it has","`wc -l harvest.txt`","`wc -l` counts lines."],
      ["Read it page by page","`less harvest.txt`","Space for the next page, Q to quit."],
      ["See every line mentioning beans","`grep beans harvest.txt`","grep prints the matching lines."],
      ["See the first 3 lines","`head -n 3 harvest.txt`","`head` shows the start of a file."]
    ]},
    {id:"t2u6-l4-x2", type:"mcq", q:"Amara runs `grep tomatoes harvest.txt` and gets 2 lines, but she knows 3 people picked tomatoes. What’s the most likely reason?", options:[
      {t:"One line spells it with a capital T, and grep is case-sensitive; `grep -i` finds all 3", ok:true, why:"Right. Hana wrote “Tomatoes”. `-i` ignores case."},
      {t:"grep only shows the first two matches", why:"grep shows every matching line, however many."},
      {t:"The file is too big for grep", why:"grep handles files of millions of lines. Seven lines are nothing."},
      {t:"She needs `-n` to see all the lines", why:"`-n` adds line numbers; it doesn’t find more lines."}
    ]},
    {id:"t2u6-l4-x3", type:"order", q:"Put the steps of `grep -i beans harvest.txt | wc -l` in the order they happen.", items:[
      {t:"The shell reads the line and sets up a pipe between `grep` and `wc`", why:"The shell organises everything before the programs do their work."},
      {t:"grep reads `harvest.txt`", why:"The file is grep’s argument, so grep opens it."},
      {t:"grep sends each matching line into the pipe instead of to the screen", why:"Its output goes to `wc`, not to you."},
      {t:"wc counts the lines arriving through the pipe", why:"wc reads its input from the pipe because no file was named."},
      {t:"The count appears on the screen", why:"wc is the last command, so its output comes to the terminal."}
    ]},
    {id:"t2u6-l4-x4", type:"number", q:"`notes.txt` has 5 lines. Kenji runs:\n\n`echo \"call Mei\" >> notes.txt`\n`echo \"buy seeds\" >> notes.txt`\n`echo \"water beans\" > notes.txt`\n\nHow many lines does `notes.txt` have now?", answer:1, tol:0, unit:"lines", why:"The two `>>` lines append: 5 → 6 → 7. Then the single `>` empties the file and writes one line. Result: **1 line**, “water beans”. The other seven are gone.", wrongs:[
      {v:8, tol:0, why:"That treats all three as appends. The last one uses a single `>`, which overwrites."},
      {v:7, tol:0, why:"That’s the count after the two appends, before the last line. `>` then replaces everything."},
      {v:6, tol:0, why:"Check each arrow: two `>>` appends make 7, and the final `>` leaves only 1."}
    ]},
    {id:"t2u6-l4-x5", type:"spot", q:"Tap each command that will leave a file **empty or with its old contents lost**.", ask:"loses data", mono:true, parts:[
      {t:"sort names.txt > names.txt", flag:true, why:"The shell empties `names.txt` before `sort` reads it. The result is an empty file."}, "\n", {t:"sort names.txt > sorted.txt", flag:false, why:"Safe: the output goes to a new file, and the original is untouched."}, "\n", {t:"echo \"Mei\" >> names.txt", flag:false, why:"Two arrows append: the old contents stay."}, "\n", {t:"echo \"Mei\" > names.txt", flag:true, why:"One arrow replaces the whole file with one line."}, "\n", {t:"grep -i mei names.txt | wc -l", flag:false, why:"This only reads and counts. Nothing is written."}, "\n", {t:"head -n 3 names.txt > top3.txt", flag:false, why:"Safe: it reads `names.txt` and writes a different file."}
    ]},
    {id:"t2u6-l4-x6", type:"mcq", q:"Tomás wants to know how many lines of `orders.txt` mention “refund”, in any capitalisation. Which command answers it in one go?", options:[
      {t:"`grep -i refund orders.txt | wc -l`", ok:true, why:"Right. grep finds the lines, ignoring case, and the pipe hands them to `wc -l` to count. (`grep -ic refund orders.txt` gives the same number.)"},
      {t:"`grep refund orders.txt > wc -l`", why:"`>` sends output to a **file**: this creates a file named `wc` and passes `-l` to grep. Use `|` to feed another command."},
      {t:"`wc -l orders.txt | grep -i refund`", why:"The order is backwards: this counts all lines first, then searches the count (just a number and a file name) for “refund”."},
      {t:"`grep refund orders.txt | wc -l`", why:"Close, but without `-i` it misses “Refund” and “REFUND”."}
    ]}
   ],
   apply:{intro:"Build the harvest log in your practice folder and answer questions about it with the shell.", tasks:[
     {t:"Make the file and look inside", how:{
       win:["In Terminal (PowerShell), go to your practice folder: `cd ~/shell-practice` (make it first with `mkdir ~/shell-practice` if needed).","Copy the PowerShell `Set-Content` block from the lesson, paste it and press Enter.","Try `cat harvest.txt`, `Get-Content harvest.txt -Head 3` and `Get-Content harvest.txt -Tail 2`.","Count lines with `Get-Content harvest.txt | Measure-Object -Line`."],
       mac:["In Terminal: `cd ~/shell-practice`.","Copy the bash-or-zsh `printf` block, paste it and press Return.","Try `cat harvest.txt`, `head -n 3 harvest.txt`, `tail -n 2 harvest.txt` and `wc -l harvest.txt`.","Open it page by page with `less harvest.txt`; press Q to leave."],
       chromeos:["In Terminal: `cd ~/shell-practice`.","To paste in the ChromeOS Terminal, press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:V]]. Paste the `printf` block and press Enter.","Try `cat`, `head -n 3`, `tail -n 2`, `wc -l` and `less` on `harvest.txt`."],
       phone:["Without a terminal app: copy the seven harvest lines onto paper or into a notes app. Work out by hand what `grep tomatoes`, `grep -i tomatoes` and `grep -i tomatoes … | wc -l` would print.","With Termux (Android) or a-Shell (iPhone and iPad): paste the `printf` block and run the Mac steps."]
     }, write:"What did `wc -l` (or Measure-Object) report?"},
     {t:"Ask questions with grep and pipes", how:["Find every tomato line, in any case: `grep -i tomatoes harvest.txt` (PowerShell: `Select-String tomatoes harvest.txt`).","Count them: `grep -i tomatoes harvest.txt | wc -l` (PowerShell: `(Select-String tomatoes harvest.txt).Count`).","Show line numbers for the beans: `grep -n beans harvest.txt`.","Make up your own question about the log and answer it with a pipeline."], write:"Write your own question and the command that answered it."},
     {t:"Redirect safely", how:["Save the tomato lines: `grep -i tomatoes harvest.txt > tomatoes.txt`, then `cat tomatoes.txt`.","Append a new harvest: `echo \"Sat tomatoes 6 Ana\" >> harvest.txt`, then check with `tail -n 2 harvest.txt`.","Make a sorted copy: `sort harvest.txt > sorted.txt` (PowerShell: `Get-Content harvest.txt | Sort-Object > sorted.txt`).","bash or zsh: make a throwaway copy, `cp harvest.txt test.txt`, then see the classic mistake: `sort test.txt > test.txt` and `wc -l test.txt`. (In PowerShell, `sort` is short for `Sort-Object`, which works differently, so just read along for this step.)"], write:"What happened to `test.txt`, and why?"}
   ], proof:"A `harvest.txt` file in your practice folder; the count of tomato lines from a pipeline; a `tomatoes.txt` made with `>`; a line appended with `>>`; and your note on what `sort test.txt > test.txt` did."},
   read:[
     {book:"swc", where:"The Unix Shell → 4. Pipes and Filters (especially “Capturing output from commands”, “Redirecting to the same file”, “What Does >> Mean?” and “Passing output to another command”)"},
     {book:"swc", where:"The Unix Shell → 7. Finding Things (the first part, on grep)", note:"The second part of this episode, on `find`, goes beyond this unit."},
     {book:"missing", where:"Course Overview + Introduction to the Shell → “The shell language (bash)”; and Command-line Environment → “Streams”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t2u6-l5", title:"Getting help and staying safe", minutes:50,
   hook:{q:"A forum reply says: “Getting ‘Permission denied’? Just put `sudo` in front of the command.” What does adding `sudo` actually do?", options:["Fixes a spelling mistake in the command","Runs the command with administrator (root) power, past the protection that just stopped it","Makes the command run faster","Asks the file’s owner for permission over the network"], answer:1, reveal:"`sudo` runs the command as the all-powerful administrator account, called root. “Permission denied” is often a protection doing its job, and `sudo` switches that protection off for one command, mistakes included. Sometimes that’s right; often it isn’t. This lesson covers where to get help, how to read error messages, and how to judge a command before you run it."},
   goals:[
     "Get help from `--help`, `man` and example-first pages, and read a usage line",
     "Read the common error messages and know what to check for each",
     "Explain what `sudo` and “Run as administrator” do, and why to be wary of them",
     "Judge a command copied from a website or an AI tool before running it, and recognise red flags",
     "Translate the everyday commands between bash or zsh and PowerShell"
   ],
   learn:[
    {h:"Nobody memorises it all: --help", body:[
      {lead:"Experienced people look things up constantly. The skill is knowing where to look and how to read what you find."},
      "Most commands print a short summary of their flags when you add `--help`:",
      {code:['$ ls --help','Usage: ls [OPTION]... [FILE]...','List information about the FILEs (the current directory by default).','…'].join("\n"), lang:"txt", label:"What you see (Linux, ChromeOS)", cap:"The list of options follows. Pipe it into `less` if it scrolls past: `ls --help | less`."},
      "The **usage line** is a compact grammar. Words in capitals are things you fill in. **Square brackets** mean optional. **Three dots** mean “you can give more than one”. So `ls [OPTION]... [FILE]...` says: `ls`, then any number of options, then any number of files, all optional.",
      {list:[
        "**Mac:** many of the Mac’s standard commands come from BSD rather than GNU, and some don’t understand `--help`; you get an error or a one-line usage message instead. Use `man` (below).",
        "**PowerShell:** use `Get-Help` with a command’s name, for example `Get-Help Copy-Item -Examples`, or add `-?` to a command. The first time, PowerShell may say its full help isn’t installed and suggest `Update-Help`; the online version on Microsoft’s site has the same text."
      ]}
    ]},
    {h:"The manual: man", body:[
      "On Mac, Linux and ChromeOS, `man` opens a command’s **[[man-page|manual page]]**, its full reference:",
      {code:['man ls','man grep'].join("\n"), lang:"sh", label:"Command line", cap:"The page opens in a viewer that works like `less`: Space for the next page, `/` to search, Q to quit."},
      "Manual pages follow the same layout: **NAME** (one line on what it does), **SYNOPSIS** (the usage line), **DESCRIPTION** (each flag explained), and often **EXAMPLES** near the end. Search for a flag by typing `/` then, say, `-i`. Missing Semester calls `man` the most important command when you’re starting out.",
      "Two catches. Commands built into the shell itself, such as `cd`, may not have their own page; in bash, `help cd` explains them. And some minimal Linux systems leave the manual out to save space. In both cases, `--help` and the manual pages published on the web (for example, the GNU manuals for Linux tools) cover the same ground.",
      {h:"Example-first help"},
      "Manual pages are complete but dense. The community **tldr pages** project (short for “too long; didn’t read”) offers the opposite: a few common examples per command, in plain words. Missing Semester recommends installing `tldr` alongside `man`; its pages can also be read on the project’s website. Software Carpentry’s lessons and this unit’s Codex entries work the same way: examples first, details after."
    ]},
    {h:"Reading error messages", body:[
      "Shell errors are short and follow a pattern. Read them in parts:",
      {fig:'<svg viewBox="0 0 340 272"><text x="10" y="20">cat: notes.txt: No such file or directory</text><rect class="d-rose" x="10" y="36" width="320" height="56" rx="8" stroke-width="1.5"/><text x="22" y="58">cat:</text><text class="s" x="22" y="78">Who is speaking: the program with the problem</text><rect class="d-gold" x="10" y="102" width="320" height="56" rx="8" stroke-width="1.5"/><text x="22" y="124">notes.txt:</text><text class="s" x="22" y="144">What it was working on when it failed</text><rect class="d-sage" x="10" y="168" width="320" height="56" rx="8" stroke-width="1.5"/><text x="22" y="190">No such file or directory</text><text class="s" x="22" y="210">What went wrong</text><text class="s" x="10" y="248">So check the name (ls, Tab) and the place (pwd).</text><text class="s" x="10" y="264">Nothing was changed: the command stopped.</text></svg>', alt:"The error message cat: notes.txt: No such file or directory, split into three parts. First, cat: who is speaking, the program that hit the problem. Second, notes.txt: what it was working on when it failed. Third, No such file or directory: what went wrong. A note says to check the name with ls or Tab, and the place with pwd; nothing was changed because the command stopped.", cap:"Most shell errors read as: program, then the thing it was working on, then the problem."},
      {table:[
        ["Message","Usually means","Check first"],
        ["`command not found`","No program by that name: a typo, or it isn’t installed","Spelling. Then whether the tool needs installing."],
        ["`No such file or directory`","The name or path doesn’t exist from where you are","`pwd`, `ls`, capitals, spaces; use Tab"],
        ["`Permission denied`","Your account isn’t allowed to do that here","Are you in the right place? Should you be changing this at all?"],
        ["`Not a directory` / `Is a directory`","You gave a file where a folder was expected, or the other way round","`ls -l` (`d` means folder)"],
        ["`File exists` / `Directory not empty`","A safety refusal from `mkdir` or `rmdir`","Usually good news: nothing was replaced"],
        ["`invalid option` / `missing operand`","A flag the command doesn’t know, or a missing argument","`--help` or `man` for the right form"]
      ]},
      "`Permission denied` deserves a closer look, because it tempts people to reach for `sudo`. It appears when you try to change something that belongs to the system or another account (`touch /etc/test-file`), or when you try to run a script file that isn’t marked as runnable (`./tidy.sh`). In the first case, the protection is usually right. In the second, `bash tidy.sh` runs it explicitly, but **only if you know what the script does**.",
      {tip:"In PowerShell, errors appear in red and are wordier, but the parts are the same: what you ran, the item it was working on (often after “Cannot find path”), and the reason."}
    ]},
    {h:"sudo and administrator power", body:[
      "Mac and Linux systems have one all-powerful account, **root**, which can change anything, including the files that keep the system running. Your everyday account can’t, which is what protects the system from accidents and from malicious programs you might run.",
      "**[[sudo]]** (“superuser do”) runs **one** command as root. It asks for **your** password (on systems that allow it). On most systems, **nothing appears** as you type the password, not even dots; a few newer ones (such as Ubuntu 26.04) show a `*` for each key. Either way that’s normal: type it and press Enter.",
      {code:['$ sudo apt update','[sudo] password for amara:'].join("\n"), lang:"txt", label:"What you see (Linux)", cap:"An example where `sudo` is genuinely needed: updating the system’s list of available software. Some systems are set up not to ask for a password. You don’t need to run this now."},
      "On **Windows**, the equivalent is **[[administrator|administrator]]** rights: choosing **Terminal (Admin)** or **Run as administrator**, which shows a User Account Control prompt. Windows 11 version 24H2 and later also includes an optional `sudo` command, off until someone turns on **Settings → System → Advanced → Enable sudo**; Microsoft’s own page warns about the risks of some of its settings.",
      {h:"Why to be wary"},
      {list:[
        "**It removes the safety net.** A typo in an ordinary `rm` can only delete your own files. The same typo with `sudo` can delete the system’s.",
        "**“Permission denied” is information, not an obstacle.** Ask why you were stopped before overriding it. Often you’re in the wrong folder, or the file belongs to the system for good reason.",
        "**Whatever runs, runs with full power.** If the command (or a script it downloads) is malicious, `sudo` hands it the whole computer.",
        "**Mistakes linger.** Files created with `sudo` belong to root, so later your normal account gets `Permission denied` on them."
      ]},
      {key:"Use `sudo` or administrator rights only when you know exactly what the command does, and why it needs that power. Nothing in this unit’s practice needs it."}
    ]},
    {h:"Commands from websites and AI tools", body:[
      "Much of what you’ll run will be copied from a tutorial, a forum or an AI assistant. That’s normal; professionals do it all the time. They also read before they run. Before pasting a command, ask:",
      {ol:[
        "**Do I know what each word does?** Look up any command or flag you don’t know with `--help`, `man` or a trusted page.",
        "**What will it change, and where?** Look for `rm`, `mv`, `>`, `sudo` and wildcards, and check which folder it acts on.",
        "**Is the source trustworthy and current?** Official documentation first. Forum answers can be old or written for another system.",
        "**Does it match my system?** bash and PowerShell commands differ, and Mac flags sometimes differ from Linux ones.",
        "**Can I try it safely first?** Use a practice folder, `echo` or `ls` to preview wildcards, `-i`, or PowerShell’s `-WhatIf`."
      ]},
      {h:"Red flags"},
      {table:[
        ["Pattern","Why to stop and check"],
        ["`curl … | sh`, `wget … | bash`, or PowerShell `irm … | iex`","Downloads a script and runs it at once, without you ever seeing it. Download it, read it, then decide."],
        ["`sudo`, Run as administrator","Full power for whatever follows"],
        ["`rm -rf`, `Remove-Item -Recurse -Force`","Deletes folders with no questions"],
        ["Long scrambled text, such as `-enc` followed by letters, or `base64 -d`","Hides what will really run"],
        ["`chmod -R 777`","Makes files changeable by every account; rarely the right fix"],
        ["A web page asking you to open a terminal or the Run box and paste something to “prove you’re human” or “fix an error”","A scam pattern. Legitimate sites don’t ask this. Close the page."]
      ]},
      "Running a **script** someone sent you is the same decision in bigger form: a script is a file full of commands, and it runs with all your permissions. On Windows, PowerShell’s **execution policy** may refuse to run script files, depending on how the computer is set up. Microsoft is clear that it isn’t a security boundary: it helps prevent accidents, but it won’t stop a determined attacker, and it’s no reason to trust a script.",
      "**AI tools** are good at suggesting commands and explaining them, and Missing Semester has a whole section on using them in the shell. They can also be confidently wrong: inventing flags, mixing up Mac and Linux versions, or suggesting software packages that don’t exist (attackers sometimes publish malicious packages under such made-up names; Unit 10 covers this). Ask the tool to explain each part, check unfamiliar pieces against `--help` or official documentation, and test in a practice folder.",
      {warn:"Never paste passwords, access keys or other secrets into a command you’re sharing, a forum post or an AI chat. Commands are saved in your history too."}
    ]},
    {h:"PowerShell and bash side by side", body:[
      "PowerShell borrows familiar names as aliases, but the commands behind them are its own, so flags often differ. Here are this unit’s everyday jobs in both:",
      {table:[
        ["Job","bash or zsh","PowerShell"],
        ["Where am I?","`pwd`","`pwd` (Get-Location)"],
        ["List, with hidden items","`ls -la`","`ls -Force` (Get-ChildItem)"],
        ["Change folder","`cd ..`","`cd ..` (Set-Location)"],
        ["New folder","`mkdir drafts`","`mkdir drafts`"],
        ["New empty file","`touch a.txt`","`New-Item a.txt -ItemType File`"],
        ["Copy a folder","`cp -r a b`","`Copy-Item a b -Recurse`"],
        ["Move or rename","`mv a b`","`mv a b` (Move-Item) or `Rename-Item`"],
        ["Delete, asking first","`rm -i a.txt`","`Remove-Item a.txt -Confirm`"],
        ["Show a file","`cat a.txt`","`cat a.txt` (Get-Content)"],
        ["First 5 lines","`head -n 5 a.txt`","`Get-Content a.txt -Head 5`"],
        ["Search, ignoring case","`grep -i word a.txt`","`Select-String word a.txt`"],
        ["Count lines","`wc -l a.txt`","`Get-Content a.txt | Measure-Object -Line`"],
        ["Help","`man ls`, `ls --help`","`Get-Help Get-ChildItem`"]
      ]},
      "Three differences matter beyond names:",
      {list:[
        "**Objects, not text.** In bash, a pipe passes lines of text. In PowerShell it passes **objects** with named properties (a file’s `Name`, `Length`, `LastWriteTime`), so you can write `ls | Sort-Object Length` without picking text apart.",
        "**Case.** PowerShell ignores capitals in command names, flags and (by default) in `Select-String` searches. bash and zsh, and `grep`, don’t.",
        "**Some aliases are Windows-only.** PowerShell can also run on Mac and Linux, and there names like `ls`, `cp`, `rm` and `cat` run the system’s own tools instead, so the same line can behave differently."
      ]},
      "Microsoft recommends using full names (`Get-ChildItem`, not `ls`) in scripts, and keeping aliases for typing at the prompt."
    ]}
   ],
   try:[
    {id:"t2u6-l5-x1", type:"mcq", q:"A simplified usage line for `cp` reads `cp [OPTION]... SOURCE DEST`. What does it tell you?", options:[
      {t:"Options are optional and can be repeated; a source and a destination are both required, in that order", ok:true, why:"Right. Square brackets mean optional, three dots mean “more than one allowed”, and capitalised words without brackets are things you must fill in."},
      {t:"You must give exactly one option", why:"The square brackets mean options are optional, and the dots allow several."},
      {t:"The destination comes first, then the source", why:"The usage line shows the order: SOURCE, then DEST. From, then to."},
      {t:"Words in capitals must be typed in capitals", why:"Capitals mark placeholders: replace SOURCE with your file’s name."}
    ]},
    {id:"t2u6-l5-x2", type:"match", q:"Match each error message with the most likely cause.", pairs:[
      ["`bash: gerp: command not found`","A typo in the program’s name","There’s no program called gerp; the user meant grep."],
      ["`cat: Notes.txt: No such file or directory`","The file is really called `notes.txt`, with a small n","Names are case-sensitive on Linux; check with `ls` or Tab."],
      ["`touch: cannot touch '/etc/test': Permission denied`","Trying to create a file in a system folder as an ordinary user","`/etc` belongs to the system; the protection is working."],
      ["`rmdir: failed to remove 'photos': Directory not empty`","The folder still has files in it","`rmdir` only removes empty folders: a safety refusal."],
      ["`cd: notes.txt: Not a directory`","Trying to `cd` into a file","You can only change into folders."]
    ]},
    {id:"t2u6-l5-x3", type:"mcq", q:"Sione runs `mkdir /opt/garden` and gets `Permission denied`. A friend says “just use `sudo mkdir /opt/garden`”. What’s the best response?", options:[
      {t:"First ask why: does this folder need to be in a system location? If not, make it in the home folder instead", ok:true, why:"Right. `/opt` is a system folder, and the error is a protection. For personal files, `mkdir ~/garden` needs no special power. Use `sudo` only when you know the system location is really needed."},
      {t:"Always add sudo when you see Permission denied", why:"That turns off a protection without knowing why it was there, and files made with `sudo` then belong to root."},
      {t:"Run the same command again until it works", why:"The answer won’t change: the account still lacks permission."},
      {t:"Restart the computer to reset permissions", why:"Permissions are settings on files and folders, not a temporary glitch."}
    ]},
    {id:"t2u6-l5-x4", type:"sort", q:"Sort these copied commands: fine to run in a practice folder after reading, or stop and investigate first?", buckets:["Fine after reading","Stop and investigate"], items:[
      {t:"`ls -la`", b:0, why:"Only lists files. It changes nothing."},
      {t:"`curl -fsSL https://example.com/setup.sh | sudo bash`", b:1, why:"Downloads a script and runs it immediately as root, unseen. Download it, read it, and check it’s from the official source first."},
      {t:"`grep -in error log.txt | wc -l`", b:0, why:"Reads and counts. Nothing is written."},
      {t:"`sudo rm -rf /var/lib/something`", b:1, why:"Deletes a system folder with full power and no questions."},
      {t:"`mkdir -p notes/2026`", b:0, why:"Creates folders, and refuses to replace anything."},
      {t:"`powershell -enc SQBFAFgA…`", b:1, why:"`-enc` runs an encoded command, so you can’t see what it does. A common way to hide malicious code."}
    ]},
    {id:"t2u6-l5-x5", type:"mcq", q:"An AI assistant gives Lucía this for her Windows laptop: `ls -la ~/Documents | grep -i invoice`. She’s using PowerShell. What should she expect?", options:[
      {t:"It probably won’t work as written: PowerShell’s `ls` uses different flags and Windows has no `grep`. She should ask for a PowerShell version and check it", ok:true, why:"Right. AI tools sometimes mix up shells. In PowerShell this would be something like `Get-ChildItem ~/Documents -Force | Where-Object Name -like \"*invoice*\"`. Checking which shell a command is written for is part of reading before running."},
      {t:"It will work, because PowerShell understands all bash commands", why:"Only some names are aliases, and the flags behind them differ. `grep` isn’t built into Windows."},
      {t:"It will delete her invoices", why:"Nothing here deletes anything; it lists and filters. The problem is that it’s for a different shell."},
      {t:"AI suggestions are always correct, so the laptop must be faulty", why:"AI tools can be confidently wrong, especially about which system a command is for. Always check."}
    ]},
    {id:"t2u6-l5-x6", type:"match", q:"Match each bash command with its PowerShell equivalent.", pairs:[
      ["`touch notes.txt`","`New-Item notes.txt -ItemType File`","PowerShell has no `touch`; `New-Item` creates the file."],
      ["`grep -i seeds list.txt`","`Select-String seeds list.txt`","Select-String ignores case by default, so it matches `grep -i`."],
      ["`head -n 5 list.txt`","`Get-Content list.txt -Head 5`","`-Head` (also called `-TotalCount`) limits the lines."],
      ["`rm -i old.txt`","`Remove-Item old.txt -Confirm`","Both ask before deleting."],
      ["`man ls`","`Get-Help Get-ChildItem`","PowerShell’s help is per command; `ls` is an alias for Get-ChildItem."]
    ]}
   ],
   apply:{intro:"Practise finding help and reading errors, then judge some commands you might meet online.", tasks:[
     {t:"Get help three ways", how:{
       win:["In PowerShell, type `Get-Help Get-ChildItem`. If it offers to update help, you can say no and read the summary, or use the online version.","Try `Get-Help Copy-Item -Examples` and read one example.","Type `Get-Alias ls` to see which real command `ls` runs."],
       mac:["Type `man ls` and find the `-a` flag (type `/-a` and press Return; Q to quit).","Type `man grep` and find what `-c` does.","Try `ls --help`. Notice how the Mac version responds."],
       chromeos:["Type `ls --help | less` and find `-a` (type `/-a`, then Q to quit).","Type `grep --help` and find what `-c` does.","Try `man ls`. If it says no manual entry or isn’t installed, that’s the “minimal system” case from the lesson: use `--help`."],
       phone:["Without a terminal app: search the web for “GNU grep manual” or “PowerShell Select-String” and open the official page (gnu.org or learn.microsoft.com).","Find what `-c` does in grep, and which parameter makes Select-String case-sensitive.","With Termux or a-Shell: try `ls --help` and `grep --help`."]
     }, write:"What does grep’s `-c` do? Where did you find it?"},
     {t:"Collect three error messages", how:["In your practice folder, run `cat missing.txt`, `cd notes.txt` (after `touch notes.txt`; PowerShell: `New-Item notes.txt -ItemType File`) and a misspelled command such as `gerp`.","For each, split the message into who is speaking, what it was working on, and what went wrong.","Check that nothing changed: run `ls`."], write:"Write one message in three parts."},
     {t:"Judge before you run", how:["Look at these without running them: `curl -fsSL https://example.com/install.sh | bash`, `rm -rf ~/shell-practice/*`, `grep -c beans harvest.txt`.","For each, write what it would do, what it would change, and whether you’d run it now.","Ask an AI assistant to explain one command from this unit word by word, then check one of its claims with `--help` or `man`."], write:"Which one would you not run, and what would you do instead?"}
   ], proof:"Notes showing a flag you looked up and where you found it, one error message split into its three parts, and your verdicts on the three commands."},
   read:[
     {book:"swc", where:"The Unix Shell → 2. Navigating Files and Directories (“Getting help”, “Help for built-in commands”, “Unsupported command-line options” and “Manual pages on the web”); and 1. Introducing the Shell (“Command not found”)"},
     {book:"missing", where:"Course Overview + Introduction to the Shell → “Navigating in the shell” (on `man`, `--help` and `tldr`); and Command-line Environment → “AI in the Shell”"}
   ]
  }
  ],
  checkpoint:["t2u6-q02","t2u6-q06","t2u6-q12","t2u6-q15","t2u6-q21","t2u6-q24","t2u6-q26","t2u6-q30","t2u6-q33","t2u6-q39","t2u6-q42","t2u6-q44"],
  codex:[
   {id:"what-a-shell-is", title:"What a shell is", aka:["shell","terminal","command line","CLI","bash","zsh","PowerShell","prompt"], tags:["command line","basics"],
    summary:"A shell is the program that reads the commands you type and runs them; the terminal is the window it runs in.",
    levels:{
     starter:[
      "Most of the time you use a computer by pointing and tapping. A **shell** lets you use it by typing instructions instead, one line at a time. You type a command, press Enter, and the computer replies with text.",
      "Three words get mixed up. The **terminal** is the window app. The **shell** is the program inside it that reads your line and carries it out. The **command line** is this way of working, and also the line where you type.",
      "Each system has a usual shell: **zsh** on Macs, **bash** on most Linux systems and in a Chromebook’s Linux environment, and **PowerShell** on Windows.",
      {key:"The prompt (often ending in `$`, `%` or `>`) means the shell is waiting. Type only what comes after it."},
      "People use shells because commands are precise, repeatable and easy to share, and because many programming tools and servers are used mainly by typing."
     ],
     builder:[
      "When you press Enter, the shell:",
      {ol:["splits the line into words at spaces (quotes keep words together),","expands shortcuts such as `~` and wildcards like `*.txt`,","takes the first word as the program’s name and finds it,","runs it, handing over the remaining words as **arguments**, and","shows the prompt again when it finishes."]},
      "So `ls -l Documents` runs the program `ls` with two arguments: the **flag** `-l` (long format) and the folder `Documents`. Short flags are one dash and a letter and can often be combined (`-la`); long flags use two dashes (`--all`).",
      {table:[["Shell","Where you’ll meet it","Prompt usually ends in"],["bash","Linux, ChromeOS Linux, Git Bash, WSL","`$`"],["zsh","macOS 10.15 Catalina and later","`%`"],["PowerShell","Windows (also available for Mac and Linux)","`>`"]]},
      "A prompt ending in `#` means you are the administrator account, root.",
      "Useful keys from the first day: [[kbd:Ctrl]] + [[kbd:C]] stops the running command; [[kbd:Ctrl]] + [[kbd:L]] or `clear` clears the window; [[kbd:↑]] brings back earlier commands. If you see a `>` continuation prompt (`dquote>` in zsh, `>>` in PowerShell), you probably left a quote open: press [[kbd:Ctrl]] + [[kbd:C]]."
     ],
     pro:[
      "Shells are ordinary programs, so one terminal can run several: type `bash` inside zsh and you’re in a bash session until you type `exit`. `echo $SHELL` shows your login shell (on Mac, Linux and ChromeOS).",
      "Some commands are **builtins**, part of the shell itself (`cd`, `echo`, `history`), while others are separate programs found by searching the folders listed in the `PATH` variable (`ls` is usually `/usr/bin/ls` or `/bin/ls`). `type ls` and `type cd` show which is which. `cd` must be a builtin: a separate program couldn’t change the shell’s own working directory.",
      "bash and zsh share most everyday syntax, so the commands in this unit behave the same, but details differ (zsh isn’t fully POSIX-compatible by default): zsh reports `no matches found` for a wildcard that matches nothing, while bash passes the pattern on unchanged; their start-up files are `~/.bashrc` and `~/.zshrc`. Apple switched the default to zsh in macOS 10.15; older accounts may still use bash.",
      "PowerShell is a different design: commands (cmdlets) are named Verb-Noun (`Get-ChildItem`), pipelines pass .NET objects rather than text, and aliases such as `ls` and `cd` exist for familiarity. Windows still includes the older Command Prompt (`cmd.exe`), with its own syntax (`dir`, `copy`, `del`).",
      "Missing Semester’s first lecture defines the shell as a text interface for running programs, giving them input and reading their output, and argues that its main power is combining programs in ways graphical tools can’t."
     ]
    },
    related:["shell-on-your-device","shell-navigation","shell-help-safety","powershell-vs-bash"],
    read:[{book:"swc", where:"The Unix Shell → 1. Introducing the Shell"},{book:"missing", where:"Course Overview + Introduction to the Shell → “What is the shell?”"}],
    sources:[{t:"Missing Semester 2026: Course Overview + Introduction to the Shell", url:"https://missing.csail.mit.edu/2026/course-shell/"},{t:"Apple Support: Use zsh as the default shell on Mac", url:"https://support.apple.com/en-us/102360"},{t:"Software Carpentry: The Unix Shell", url:"https://swcarpentry.github.io/shell-novice/"}], checked:"2026-11"},

   {id:"shell-on-your-device", title:"Opening a shell on your device", aka:["open terminal","Windows Terminal","Terminal app","Linux on Chromebook","Crostini","WSL","Termux"], tags:["command line","devices"],
    summary:"Where to find a terminal on Windows, Mac, ChromeOS, Linux and phones, and which shell each one gives you.",
    levels:{
     starter:[
      "Every computer system has a terminal, though some hide it.",
      {list:["**Windows 11:** right-click **Start** and choose **Terminal**. You get PowerShell.","**Mac:** press [[kbd:Cmd]] + [[kbd:Space]], type Terminal, press Return. You get zsh.","**Chromebook:** turn on Linux first (**Settings → About ChromeOS → Developers → Linux development environment → Set up**), then open the Terminal app. You get bash.","**Linux:** search your apps for Terminal. You usually get bash.","**Phones:** no terminal is built in. Optional apps exist, but you can learn the ideas by reading."]},
      {tip:"You don’t need the administrator version (“Terminal (Admin)”) for learning. The ordinary one is safer."},
      "On a school or work computer, an administrator may have switched the terminal or Linux off. That’s a policy choice, not a fault."
     ],
     builder:[
      {table:[["Device","Default shell","Notes"],["Windows 11","PowerShell in Windows Terminal","Also: Command Prompt (older); Git Bash with Git for Windows; WSL for full Linux"],["macOS","zsh (since 10.15)","Terminal is in Applications → Utilities"],["ChromeOS","bash (Debian Linux)","Setup can take 10 minutes or more; your Linux files appear as **Linux files** in Files"],["Linux","Usually bash","Many desktops open a terminal with Ctrl + Alt + T"]]},
      "**Windows choices.** PowerShell is enough for basic file work, and its aliases make `ls`, `cd`, `pwd`, `cp`, `mv` and `rm` work. When a course or tool expects bash, two options: **Git Bash** (installed with Git for Windows, a small bash with common tools) and the **Windows Subsystem for Linux** (WSL), which runs a real Linux distribution alongside Windows and needs administrator rights to install.",
      "**Phones and tablets.** Android apps such as Termux provide a Linux-like environment where most commands in this unit work. On iPhone and iPad, apps such as a-Shell or iSH offer a Unix-like shell with some differences. They are separate sandboxes: their files are inside the app, not your whole phone. Install only from official stores or the project’s own site.",
      "**Copy and paste** differ in terminals because [[kbd:Ctrl]] + [[kbd:C]] means “stop”: use [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:C]] / [[kbd:V]] on Linux and ChromeOS, [[kbd:Cmd]] + [[kbd:C]] / [[kbd:V]] on Mac; Windows Terminal copies with [[kbd:Ctrl]] + [[kbd:C]] when text is selected."
     ],
     pro:[
      "**ChromeOS** runs Linux in a container inside a lightweight virtual machine, so it can’t harm ChromeOS itself. Google’s help page notes that work and school Chromebooks may not allow it. Share Chromebook folders with Linux from the Files app (right-click → **Share with Linux**) when you need to reach them from the terminal.",
      "**macOS** inherits many command-line tools from BSD Unix, not GNU, so flags sometimes differ from Linux (`sed -i`, `date -d` and `--help` support are classic examples). Tutorials written for Linux may need small changes; `man` on the Mac describes the Mac version.",
      "**Windows** has two PowerShells: Windows PowerShell 5.1 (built in) and PowerShell 7 (`pwsh`, a separate install, cross-platform). Most commands in this unit behave the same in both; text encodings when saving files differ (5.1 writes UTF-16 with `>`; 7 writes UTF-8). Windows Terminal can host PowerShell, Command Prompt, Git Bash and WSL shells in tabs.",
      "**Remote shells.** Professionals often use a shell on another computer over the network with SSH (`ssh user@server`). The commands are the same; the files are on the other machine. Missing Semester’s “Command-line Environment” lecture covers SSH."
     ]
    },
    related:["what-a-shell-is","powershell-vs-bash"],
    read:[{book:"swc", where:"The Unix Shell → Setup (on the lesson’s home page)"}],
    sources:[{t:"Chromebook Help: Set up Linux on your Chromebook", url:"https://support.google.com/chromebook/answer/9145439"},{t:"Apple Support: Use zsh as the default shell on Mac", url:"https://support.apple.com/en-us/102360"},{t:"Missing Semester 2026: Command-line Environment", url:"https://missing.csail.mit.edu/2026/command-line-environment/"}], checked:"2026-11"},

   {id:"shell-navigation", title:"Finding your way: pwd, ls, cd and paths", aka:["pwd","ls","cd","absolute path","relative path","working directory","home directory","tab completion","history"], tags:["command line","files"],
    summary:"The shell always stands in one folder; pwd says which, ls shows what’s there, and cd moves you using absolute or relative paths.",
    levels:{
     starter:[
      "Folders are arranged like an upside-down tree. The top is the **root** (`/` on Mac and Linux, `C:\\` on Windows). Your own files live in your **home folder**, nicknamed `~`.",
      "The shell is always “standing in” one folder, the **working directory**. Three commands do most of the work:",
      {list:["`pwd`: where am I?","`ls`: what’s here? (`ls -l` for details, `ls -a` to include hidden files)","`cd folder`: go there. `cd ..` goes up one level; `cd ~` goes home."]},
      {key:"Lost? Type `pwd`. It changes nothing and always tells you where you are."},
      "Think of giving directions in a building. An **absolute path** is the full address, starting from the front door (the root): it works wherever the listener is standing. A **relative path** is “two doors down from here”: shorter, but it only works from the right spot.",
      "Press [[kbd:Tab]] to finish names for you, and [[kbd:↑]] to bring back earlier commands."
     ],
     builder:[
      {table:[["Path","Means"],["`/home/amara/Pictures`","Absolute: from the root, works anywhere"],["`Pictures`","Relative: inside the current folder"],["`..`","The parent folder"],["`.`","This folder"],["`~`","Your home folder"],["`../Pictures`","Up one, then into Pictures"]]},
      "`ls -l` shows one item per line: type and permissions (`d` = directory, `-` = file), links, owner, group, size in bytes, last-modified date, name. `ls -a` adds hidden names that start with a dot, plus `.` and `..`. Flags combine: `ls -la`.",
      "Names with spaces need quotes or backslashes: `cd \"Garden club\"` or `cd Garden\\ club`. Without them bash says `cd: too many arguments`. Tab completion inserts the backslashes for you.",
      "**History:** [[kbd:↑]] and [[kbd:↓]] step through previous commands; `history` lists them; [[kbd:Ctrl]] + [[kbd:R]] searches them in bash and zsh.",
      "**PowerShell:** `pwd`, `cd`, `cd ..` and `cd ~` work; `ls` shows a table and uses `-Force` for hidden items rather than `-a`; paths use `\\` but `/` is accepted. Absolute paths start with a drive letter, such as `C:\\Users\\amara`, and `pwd` answers with a small table headed Path.",
      {ex:"From /home/amara/Documents/recipes:\ncd ..             → /home/amara/Documents\ncd ../..          → /home/amara\ncd ../../Pictures → /home/amara/Pictures\ncd /              → / (the root)", label:"Worked example", mono:true}
     ],
     pro:[
      "`cd -` returns to the previous directory in bash and zsh (and in PowerShell 7). `pushd` and `popd` keep a stack of directories to jump back to. `cd` with no argument goes home in bash and zsh.",
      "A path is resolved component by component; `..` at the root stays at the root. Symbolic links can make `..` surprising: `pwd` shows the logical path you took, while `pwd -P` shows the physical one.",
      "Linux file systems treat `Documents` and `documents` as different names, but macOS’s default file system (APFS) is case-insensitive, so `cd documents` works on a Mac and fails on Linux. Write the exact case anyway: scripts move between systems.",
      "Hidden files are a naming convention, not a security feature: any program can read them. On Windows, hidden is a file attribute instead, shown by `Get-ChildItem -Force` or File Explorer’s **View → Show → Hidden items**.",
      "Tab completion is programmable: shells and tools ship completion scripts, so that typing `git ch` and pressing Tab can offer `checkout` and `cherry-pick`. zsh’s completion is especially rich, with menus you can move through using the arrow keys.",
      "Missing Semester’s first lecture explains that `cd` is built into the shell rather than being a separate program, and an exercise asks you to work out what the first ten characters of each `ls -l` line mean. Software Carpentry’s episode “Navigating Files and Directories” walks through absolute versus relative paths with exercises."
     ]
    },
    related:["shell-files","what-a-shell-is"],
    read:[{book:"swc", where:"The Unix Shell → 2. Navigating Files and Directories"},{book:"missing", where:"Course Overview + Introduction to the Shell → “Navigating in the shell”"}],
    sources:[{t:"Software Carpentry: Navigating Files and Directories", url:"https://swcarpentry.github.io/shell-novice/02-filedir.html"},{t:"Missing Semester 2026: Course Overview + Introduction to the Shell", url:"https://missing.csail.mit.edu/2026/course-shell/"}], checked:"2026-11"},

   {id:"shell-files", title:"Making, copying, moving and deleting files", aka:["mkdir","touch","cp","mv","rm","rmdir","rm -rf","New-Item","Remove-Item","wildcards"], tags:["command line","files","safety"],
    summary:"mkdir and touch create, cp copies, mv moves and renames, rm and rmdir delete; there is no undo, so check before you change.",
    levels:{
     starter:[
      {table:[["Command","Does"],["`mkdir drafts`","Make a folder"],["`touch notes.txt`","Make an empty file"],["`cp a.txt b.txt`","Copy (from, then to)"],["`mv a.txt b.txt`","Move or rename"],["`rm a.txt`","Delete a file"],["`rmdir drafts`","Delete an empty folder"]]},
      {warn:"`rm` has no undo and doesn’t use the Recycle Bin or Trash. Practise in a throwaway folder, and keep backups of anything that matters."},
      "Think of `cp` as a photocopier (the original stays) and `mv` as picking a sheet up and putting it somewhere else, or writing a new label on it. `rm` is the shredder.",
      "Before changing anything, check where you are (`pwd`) and what’s there (`ls`). Add `-i` to `rm`, `cp` or `mv` to be asked before anything is deleted or replaced. In PowerShell, `New-Item` replaces `touch`, and `Remove-Item` (alias `rm`) is the delete command."
     ],
     builder:[
      {list:[
        "`mkdir -p a/b/c` makes a whole chain of folders. `mkdir` refuses if the folder exists (`File exists`).",
        "`touch` updates a file’s modified time, creating it empty if it doesn’t exist. PowerShell: `New-Item name -ItemType File`.",
        "`cp -r` copies folders. Without `-r`: `cp: -r not specified; omitting directory`.",
        "`mv` works on files and folders alike. If the destination isn’t an existing folder, it’s treated as a new name, so a typo in a folder name renames your file. A trailing slash (`drafts/`) makes it fail safely instead.",
        "`cp` and `mv` **overwrite an existing destination silently**. `-i` asks first.",
        "`rm -r` deletes a folder and everything in it. `rm -f` (force) never asks and ignores missing files; `rm -rf` combines both and is the command most often behind shell disasters."
      ]},
      "**Wildcards** are expanded by the shell before the command runs: `*` matches any characters, `?` exactly one. Preview with `ls *.log` or `echo rm *.log`. Watch for stray spaces: `rm * .log` means “delete everything, and a file called .log”.",
      "A safe routine for any deletion: `pwd` to confirm the folder, `ls` with the same pattern to see the matches, `rm -i` with that pattern, then `ls` to check the result.",
      "**PowerShell:** `Remove-Item` (aliases `rm`, `del`) also bypasses the Recycle Bin. `-WhatIf` describes what would happen without doing it; `-Confirm` asks per item; `-Recurse` is needed for folders with contents."
     ],
     pro:[
      "GNU `rm` refuses to remove `.` or `..`, and by default refuses to operate recursively on `/` (`--preserve-root`). `rm -I` asks **once** before removing more than three files or recursing, a less tiring alternative to `-i`. On a Mac, `rm` is the BSD version; flags overlap but prompts and some options differ.",
      "Deleting removes the directory entry; the data blocks may remain until reused. The GNU manual notes that removed contents can often be recovered, so `rm` is not secure erasure. Equally, don’t rely on recovery: on SSDs, background trimming often makes it impossible.",
      "Moving within one file system is a rename (instant, whatever the size); moving to another drive is a copy then delete. `cp` gives the copy a new timestamp and doesn’t keep ownership unless asked (`cp -p`, or `-a` for archive mode on GNU).",
      "Scripts that delete should check their inputs. A classic bug is `rm -rf \"$DIR/\"*` with `DIR` empty, which expands to the root. Defensive habits: quote variables, test with `echo` first, prefer moving to a trash folder over deleting, and use a version-controlled or backed-up workspace.",
      "Software Carpentry’s episode “Working With Files and Directories” includes sections “Deleting Is Forever” and “Using rm Safely”, with exercises on wildcards."
     ]
    },
    related:["shell-navigation","shell-help-safety","pipes-redirection"],
    read:[{book:"swc", where:"The Unix Shell → 3. Working With Files and Directories"}],
    sources:[{t:"Software Carpentry: Working With Files and Directories", url:"https://swcarpentry.github.io/shell-novice/03-create.html"},{t:"GNU Coreutils manual: rm invocation", url:"https://www.gnu.org/software/coreutils/manual/html_node/rm-invocation.html"}], checked:"2026-11"},

   {id:"shell-reading-searching", title:"Reading and searching text: cat, less, head, tail, wc, grep", aka:["cat","less","head","tail","wc","grep","Select-String","Get-Content"], tags:["command line","text"],
    summary:"Small commands that show, count and search the lines of text files, from the whole file to just the lines that match.",
    levels:{
     starter:[
      {table:[["Command","Shows"],["`cat file`","The whole file"],["`less file`","Page by page (Space, B, `/` to search, Q to quit)"],["`head -n 5 file`","The first 5 lines"],["`tail -n 5 file`","The last 5 lines"],["`wc -l file`","How many lines"],["`grep word file`","Lines containing the word"]]},
      "grep is **case-sensitive**: add `-i` to ignore case, `-n` for line numbers. If grep prints nothing, nothing matched; that’s not an error.",
      "Imagine a long guest list. `head` reads the top of it, `tail` the bottom, `wc -l` counts the guests (one per line), and `grep Mei` points at every line with Mei in it.",
      "These commands only read, so they’re safe to experiment with. In PowerShell, use `Get-Content` (alias `cat`) to show a file, `Select-String` to search (it ignores case unless told otherwise) and `Measure-Object -Line` to count."
     ],
     builder:[
      {list:[
        "`cat a.txt b.txt` prints files one after another (concatenates). Running `cat` with no file waits for keyboard input: [[kbd:Ctrl]] + [[kbd:C]] to stop.",
        "`head` and `tail` default to 10 lines. `tail` suits log files, where new entries go at the end.",
        "`wc` prints lines, words and bytes. Accented letters take more than one byte in UTF-8, so bytes can exceed characters.",
        "grep flags: `-i` ignore case, `-n` line numbers, `-c` count matching lines, `-v` invert (non-matching lines), `-w` whole words only. With several files (`grep -n beans *.txt`) each result starts with the file name."
      ]},
      "**PowerShell:** `Get-Content` (alias `cat`) with `-Head`/`-Tail`; `Measure-Object -Line` to count; `Select-String` (alias `sls`) to search. Select-String **ignores case by default** (use `-CaseSensitive`) and shows file name and line number with each match.",
      {code:['$ grep -n beans harvest.txt','2:Mon beans 2 Kenji','6:Thu beans 5 Mei'].join("\n"), lang:"txt", label:"What you see"},
      "grep’s patterns are regular expressions: `^Wed` matches lines starting with Wed; `.` matches any character, so search for a literal dot with `-F` (fixed strings) or `\\.`."
     ],
     pro:[
      "grep’s exit status tells scripts what happened: 0 for a match, 1 for none, 2 for an error. That’s why `grep -q pattern file && echo found` works.",
      "`grep -E` enables extended regular expressions (`a|b`, `+`, `?` without backslashes); `grep -r pattern folder` searches recursively. Tools such as ripgrep (`rg`) are faster recursive searchers that respect `.gitignore`, popular in programming.",
      "`less` is also what `man` uses to display pages. `less +F file` follows a growing file like `tail -f`; `tail -f log.txt` keeps printing new lines until [[kbd:Ctrl]] + [[kbd:C]].",
      "GNU and BSD versions differ at the edges: `head -n -3` (all but the last 3) is GNU-only. `wc` pads its numbers with spaces differently on Mac and Linux, which matters when scripts parse its output; `wc -l < file` leaves out the file name on both (the Mac still pads the number with spaces).",
      "These tools see each line as plain text. A CSV file with commas inside quoted fields will fool a quick `cut` or `grep`; for real data work, use a CSV-aware tool such as a spreadsheet or Python’s `csv` module.",
      "Software Carpentry’s “Finding Things” episode covers grep in depth with `-w`, `-n`, `-i`, `-v`, `-r` and `-E`."
     ]
    },
    related:["pipes-redirection","shell-files","powershell-vs-bash"],
    read:[{book:"swc", where:"The Unix Shell → 4. Pipes and Filters; 7. Finding Things"}],
    sources:[{t:"Software Carpentry: Finding Things", url:"https://swcarpentry.github.io/shell-novice/07-find.html"},{t:"Microsoft Learn: Select-String", url:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string"}], checked:"2026-11"},

   {id:"pipes-redirection", title:"Pipes and redirection", aka:["pipe","|",">",">>","redirect","standard output","stdin","stdout","stderr","filters"], tags:["command line","text"],
    summary:"A pipe | feeds one command’s output into the next; > writes output to a file (replacing it) and >> appends.",
    levels:{
     starter:[
      "Commands normally print their results on the screen. Two symbols change where the results go:",
      {list:["`|` (a **pipe**) sends them into another command: `grep -i tomatoes harvest.txt | wc -l` finds the lines, then counts them.","`>` sends them into a file, **replacing** whatever the file held. `>>` adds them to the end instead."]},
      {warn:"`>` overwrites without asking. `sort list.txt > list.txt` leaves an empty file, because the shell empties it before `sort` reads it. Write to a new name instead."},
      "A pipe is like a conveyor belt between two workers: the first sorts out the lines you want, and passes them straight along to the second, which counts them. Nothing is stored in between.",
      "Build pipelines one step at a time, checking the output before adding the next command. PowerShell uses the same three symbols."
     ],
     builder:[
      "Every program has three standard **streams**: **standard input** (stdin, where it reads), **standard output** (stdout, its normal results) and **standard error** (stderr, its error messages). By default stdin is the keyboard and both outputs go to the terminal.",
      {table:[["Syntax","Effect"],["`a | b`","a’s stdout becomes b’s stdin"],["`cmd > file`","stdout into file (truncate first)"],["`cmd >> file`","stdout appended to file"],["`cmd < file`","stdin read from file"],["`cmd 2> errors.txt`","stderr into a file"]]},
      "Because errors use a separate stream, `ls missing.txt > out.txt` still shows the error on screen and leaves `out.txt` empty.",
      "Programs that read stdin and write stdout are **filters**: grep, sort, uniq, head, tail, wc, cut. Chaining filters answers questions: `cut -d' ' -f2 harvest.txt | sort | uniq -c` counts how many times each crop appears (sort first, because `uniq` only merges neighbouring duplicates). Hana’s “Tomatoes” is counted separately from “tomatoes”: these tools compare text exactly.",
      "`tee` copies what flows through a pipe into a file while passing it on: `grep -i tomatoes harvest.txt | tee tomatoes.txt | wc -l` saves the lines **and** counts them.",
      "**PowerShell** supports `|`, `>`, `>>` and `2>`, but its pipes carry objects; `>` in Windows PowerShell 5.1 writes UTF-16, so use `Out-File -Encoding utf8` (or `Set-Content -Encoding utf8`) for files other tools will read."
     ],
     pro:[
      "In a pipeline, all commands start at once and run concurrently, with data flowing as it’s produced; that’s why `yes | head -n 3` finishes. Missing Semester’s “Streams” section demonstrates this with a pipeline whose later commands start before the first one has produced anything.",
      "`2>&1` sends stderr wherever stdout currently goes, so order matters: `cmd > all.txt 2>&1` captures both; `cmd 2>&1 > out.txt` sends errors to the screen. bash also accepts `&>` for both.",
      "`set -o noclobber` makes `>` refuse to overwrite existing files in bash and zsh (`>|` forces it). Tools like `sponge` (from moreutils) soak up all input before writing, so `sort file | sponge file` really does sort in place.",
      "Redirection is set up by the shell, not by the command: `sort` never knows its output is going to a file. That’s why `sort file > file` fails: the shell truncates the file while preparing the redirection, before `sort` has read a single line.",
      "The exit status of a pipeline is that of its last command; `set -o pipefail` in bash makes any failing stage count, which scripts should usually enable.",
      "Software Carpentry calls this pipes-and-filters model the reason Unix has been so successful: lots of simple tools that each do one job well and work well together."
     ]
    },
    related:["shell-reading-searching","shell-files"],
    read:[{book:"swc", where:"The Unix Shell → 4. Pipes and Filters"},{book:"missing", where:"Command-line Environment → “Streams”"}],
    sources:[{t:"Software Carpentry: Pipes and Filters", url:"https://swcarpentry.github.io/shell-novice/04-pipefilter.html"},{t:"Missing Semester 2026: Command-line Environment", url:"https://missing.csail.mit.edu/2026/command-line-environment/"}], checked:"2026-11"},

   {id:"shell-help-safety", title:"Getting help and staying safe in the shell", aka:["--help","man","tldr","Get-Help","sudo","administrator","error messages","curl pipe sh","execution policy"], tags:["command line","safety","help"],
    summary:"Use --help, man and example pages to understand a command, read errors in parts, and treat sudo and copied commands with care.",
    levels:{
     starter:[
      "Nobody remembers every flag. To look things up: `command --help` for a quick summary, `man command` for the full manual (Q to quit), or an example-first site such as the tldr pages. In PowerShell: `Get-Help command -Examples`.",
      "Error messages usually read as **program: thing: problem**, as in `cat: notes.txt: No such file or directory`. Check the name and where you are.",
      {warn:"`sudo` (or Run as administrator) gives a command full control of the computer. Don’t add it just because you saw “Permission denied”, and never run a command from a website or AI tool that you don’t understand."},
      "A web page that tells you to open a terminal or the Run box and paste something to prove you’re human is a scam."
     ],
     builder:[
      "**Usage lines:** CAPITALS are placeholders, `[ ]` optional, `...` repeatable. `cp [OPTION]... SOURCE DEST` means options are optional and both names are required.",
      {table:[["Error","First check"],["command not found","Spelling; is the tool installed?"],["No such file or directory","`pwd`, `ls`, capitals, spaces"],["Permission denied","Right place? Should you be changing this?"],["Is a directory / Not a directory","Folder versus file"],["File exists / Directory not empty","Safety refusals: usually good news"]]},
      "**Before running a copied command:** know what each word does; find what it changes and where; prefer official sources; check it matches your shell and system; try it in a practice folder, with `echo`, `-i` or `-WhatIf` first.",
      "**Red flags:** `curl … | sh` or `irm … | iex` (download and run unseen), `sudo`, `rm -rf`, `chmod -R 777`, encoded commands (`-enc`, `base64 -d`), and edits to start-up files.",
      "On a Mac, many tools are BSD versions that may not accept `--help`; `man` is the reliable reference there. In bash, built-in commands such as `cd` are explained by `help cd`.",
      "**sudo** asks for your own password and usually shows nothing as you type (a few newer systems show `*`s). On Windows 11 24H2 and later, an optional `sudo` can be turned on in Settings → System → Advanced; otherwise use Run as administrator."
     ],
     pro:[
      "Every command returns an **exit status**: 0 for success, anything else for failure (`echo $?` in bash and zsh; in PowerShell, `$?` is simply True or False, and `$LASTEXITCODE` holds the number from the last outside program). Scripts chain on it with `&&` and `||`.",
      "`sudo` is configured in `/etc/sudoers` (edit only with `visudo`); it logs use and caches your credentials for a few minutes. Running editors or installers under `sudo` can leave root-owned files in your home folder that later cause Permission denied.",
      "Piping a download straight into a shell means a compromised server, a typo-squatted domain or an interrupted download all run as code. Safer: download, inspect, verify a checksum or signature if offered, then run; or use the system’s package manager.",
      "PowerShell’s execution policy (`Get-ExecutionPolicy`) controls whether script files run. Microsoft describes it as defence in depth, not a security boundary: it can be bypassed and doesn’t replace judging a script.",
      "AI assistants can produce plausible commands with invented flags or for the wrong platform, and can suggest packages that don’t exist, names that attackers may register; Unit 10 covers this. Ask for an explanation of each part and verify against documentation. Missing Semester’s “AI in the Shell” section discusses using these tools at the command line."
     ]
    },
    related:["shell-files","powershell-vs-bash","what-a-shell-is"],
    read:[{book:"swc", where:"The Unix Shell → 2. Navigating Files and Directories (“Getting help”)"},{book:"missing", where:"Command-line Environment → “AI in the Shell”"}],
    sources:[{t:"Microsoft Learn: Sudo for Windows", url:"https://learn.microsoft.com/en-us/windows/advanced-settings/sudo/"},{t:"Microsoft Learn: about_Execution_Policies", url:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies"},{t:"Missing Semester 2026: Course Overview + Introduction to the Shell", url:"https://missing.csail.mit.edu/2026/course-shell/"}], checked:"2026-11"},

   {id:"powershell-vs-bash", title:"PowerShell and bash compared", aka:["PowerShell","bash","aliases","cmdlets","Get-ChildItem","Windows shell"], tags:["command line","windows"],
    summary:"PowerShell offers familiar aliases such as ls and cd, but its commands, flags and pipelines work differently from bash and zsh.",
    levels:{
     starter:[
      "Windows’ shell, PowerShell, understands many familiar names (`ls`, `cd`, `pwd`, `cp`, `mv`, `rm`, `cat`), because they are **aliases**: short nicknames for PowerShell’s own commands. The names match; the flags often don’t.",
      {table:[["bash or zsh","PowerShell"],["`ls -a`","`ls -Force`"],["`touch a.txt`","`New-Item a.txt -ItemType File`"],["`grep -i word a.txt`","`Select-String word a.txt`"],["`head -n 5 a.txt`","`Get-Content a.txt -Head 5`"],["`man ls`","`Get-Help Get-ChildItem`"]]},
      "Windows also has an older shell, **Command Prompt** (`cmd`), with yet other names (`dir`, `copy`, `del`). New learners are better served by PowerShell.",
      "When a tutorial is written for bash, either translate it, or use Git Bash or WSL on Windows to get bash itself. When you ask an AI tool or search for help, say which shell you’re using."
     ],
     builder:[
      "PowerShell commands are **cmdlets** named Verb-Noun: `Get-ChildItem`, `Set-Location`, `Copy-Item`, `Move-Item`, `Remove-Item`, `Get-Content`. Microsoft’s compatibility aliases map Unix and Command Prompt names onto them: `ls`/`dir` → Get-ChildItem, `cd` → Set-Location, `cp`/`copy` → Copy-Item, `mv`/`move` → Move-Item, `rm`/`del` → Remove-Item, `cat`/`type` → Get-Content, `pwd` → Get-Location, `echo` → Write-Output.",
      "Parameters are words (`-Recurse`, `-Force`) and can be shortened while unambiguous; several values are separated by commas (`mkdir a, b`). Names and parameters ignore case.",
      "Useful extras with no direct bash twin: `-WhatIf` (describe without doing), `-Confirm` (ask per item), and `Get-Command`/`Get-Alias` to discover what a name really runs (`Get-Alias ls`).",
      "Discovering commands is built in: `Get-Command *-Item` lists the commands that work on items (New-Item, Copy-Item, Move-Item, Remove-Item…), and `Get-Help Copy-Item -Examples` shows worked examples. Tab completes command names and parameter names too: type `Get-ChildItem -` and press Tab repeatedly.",
      "Microsoft’s advice: aliases are for typing at the prompt; use full cmdlet names in scripts, which are clearer and don’t depend on settings."
     ],
     pro:[
      "The big difference is the pipeline. bash pipes bytes of text, so tools parse columns (`cut`, `awk`). PowerShell pipes .NET objects, so `Get-ChildItem | Sort-Object Length -Descending | Select-Object -First 3 Name, Length` sorts by a real property. Text tools still work on PowerShell output, but you lose structure.",
      "Microsoft notes that compatibility aliases are Windows-specific: on Mac and Linux, PowerShell leaves out names such as `ls` so the native commands run instead, and the same line can behave differently across systems.",
      "Quoting differs: PowerShell’s escape character is the backtick, not backslash, and single quotes are literal while double quotes expand `$variables` (similar to bash). Wildcards are expanded by each cmdlet, not by the shell, so `Remove-Item *.txt` receives the pattern itself.",
      "Chaining on success with `&&` and `||`, common in bash one-liners, works in PowerShell 7 but not in Windows PowerShell 5.1, where you’d use `;` or an `if` on `$?` instead.",
      "Encoding: Windows PowerShell 5.1’s `>` writes UTF-16LE; PowerShell 7 writes UTF-8 without a byte-order mark. Native programs called from PowerShell receive arguments with PowerShell’s quoting rules, a common source of surprises with complex commands."
     ]
    },
    related:["what-a-shell-is","shell-on-your-device","shell-help-safety"],
    sources:[{t:"Microsoft Learn: Using aliases (PowerShell)", url:"https://learn.microsoft.com/en-us/powershell/scripting/learn/shell/using-aliases"},{t:"Microsoft Learn: Select-String", url:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/select-string"}], checked:"2026-11"}
  ],
  terms:[
   {id:"shell", term:"Shell", def:"The program that reads the commands you type and runs them, such as bash, zsh or PowerShell.", codex:"what-a-shell-is"},
   {id:"terminal", term:"Terminal", def:"The window app that shows a shell’s text and passes your typing to it, such as Terminal on a Mac or Windows Terminal.", codex:"what-a-shell-is"},
   {id:"command-line", term:"Command line", def:"Working with a computer by typing commands and reading text replies, instead of pointing and clicking. Also the line where you type.", codex:"what-a-shell-is"},
   {id:"prompt", term:"Prompt", def:"The text a shell shows when it’s ready for a command, often ending in $, % or >. Don’t type it yourself.", codex:"what-a-shell-is"},
   {id:"bash", term:"bash", def:"A widely used shell, the usual default on Linux and in a Chromebook’s Linux environment.", codex:"what-a-shell-is"},
   {id:"zsh", term:"zsh", def:"The shell Macs use by default since macOS 10.15 Catalina. It runs almost all the same commands as bash.", codex:"what-a-shell-is"},
   {id:"powershell", term:"PowerShell", def:"Microsoft’s shell, built into Windows. Its commands have Verb-Noun names, with aliases such as ls and cd.", codex:"powershell-vs-bash"},
   {id:"flag", term:"Flag (option)", def:"A word starting with - or -- that changes how a command behaves, such as -l in ls -l.", codex:"what-a-shell-is"},
   {id:"argument-shell", term:"Argument (shell)", def:"A word given to a command after its name, such as the folder in ls Documents. Flags are technically arguments too.", codex:"what-a-shell-is"},
   {id:"standard-output", term:"Standard output", def:"Where a command sends its normal results: the terminal, unless you redirect it to a file or pipe it to another command.", codex:"pipes-redirection"},
   {id:"working-directory", term:"Working directory", def:"The folder the shell is currently “in”. Relative paths start from here; pwd shows it.", codex:"shell-navigation"},
   {id:"home-directory", term:"Home folder (home directory)", def:"Your own account’s folder, such as /home/amara, /Users/amara or C:\\Users\\amara. The shell writes it as ~.", codex:"shell-navigation"},
   {id:"hidden-file", term:"Hidden file", def:"On Mac and Linux, a file whose name starts with a dot, left out of normal listings; ls -a shows it. Usually a settings file.", codex:"shell-navigation"},
   {id:"pwd", term:"pwd", def:"“Print working directory”: shows which folder the shell is in. Changes nothing.", codex:"shell-navigation"},
   {id:"ls", term:"ls", def:"Lists the contents of a folder. -l gives details, -a includes hidden files. In PowerShell it runs Get-ChildItem.", codex:"shell-navigation"},
   {id:"cd", term:"cd", def:"“Change directory”: moves the shell to another folder. cd .. goes up one level, cd ~ goes home.", codex:"shell-navigation"},
   {id:"tab-completion", term:"Tab completion", def:"Pressing Tab to let the shell finish a command or file name you’ve started typing. If it completes, the name exists.", codex:"shell-navigation"},
   {id:"mkdir", term:"mkdir", def:"“Make directory”: creates a folder. mkdir -p creates a chain of folders at once.", codex:"shell-files"},
   {id:"touch", term:"touch", def:"Updates a file’s last-modified time, creating an empty file if it doesn’t exist. PowerShell uses New-Item instead.", codex:"shell-files"},
   {id:"cp", term:"cp", def:"Copies a file (from, then to). cp -r copies a folder. It replaces an existing destination without asking unless you add -i.", codex:"shell-files"},
   {id:"mv", term:"mv", def:"Moves or renames a file or folder. It replaces an existing destination without asking unless you add -i.", codex:"shell-files"},
   {id:"rm", term:"rm", def:"Removes (deletes) files; rm -r removes folders and their contents. No Recycle Bin and no undo.", codex:"shell-files"},
   {id:"wildcard", term:"Wildcard", def:"A pattern such as *.txt that the shell expands into all matching names before the command runs. * matches any characters, ? exactly one.", codex:"shell-files"},
   {id:"cat", term:"cat", def:"Prints a file’s whole contents, or several files one after another. In PowerShell it runs Get-Content.", codex:"shell-reading-searching"},
   {id:"grep", term:"grep", def:"Prints the lines of text that contain a pattern. Case-sensitive unless you add -i; -n shows line numbers.", codex:"shell-reading-searching"},
   {id:"pipe", term:"Pipe ( | )", def:"Connects two commands so the output of the first becomes the input of the second, as in grep beans log.txt | wc -l.", codex:"pipes-redirection"},
   {id:"redirection", term:"Redirection ( > and >> )", def:"Sending a command’s output into a file. > replaces the file’s contents without warning; >> adds to the end.", codex:"pipes-redirection"},
   {id:"man-page", term:"Manual page (man)", def:"A command’s full reference on Mac and Linux, opened with man followed by the command’s name. Press Q to quit.", codex:"shell-help-safety"},
   {id:"sudo", term:"sudo", def:"“Superuser do”: runs one command as the administrator account (root), with power to change anything. Use only when you understand the command.", codex:"shell-help-safety"},
   {id:"administrator", term:"Administrator (admin)", def:"An account or mode allowed to change system settings and files. On Windows, “Run as administrator”; on Mac and Linux, root via sudo.", codex:"shell-help-safety"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t2u6-q01", lesson:"t2u6-l1", level:1, q:"What is a shell?", options:[
     {t:"The program that reads the commands you type and runs them", ok:true, why:"bash, zsh and PowerShell are shells: they interpret each line and run programs."},
     {t:"The window that shows the text", why:"That’s the terminal. The shell runs inside it."},
     {t:"A protective case for a laptop", why:"Not in computing. Here, a shell is the command interpreter."},
     {t:"A program that only programmers can install", why:"Every common system already includes a shell."}
   ]},
   {id:"t2u6-q02", lesson:"t2u6-l1", level:1, q:"Which shell does a current Mac use by default?", options:[
     {t:"zsh", ok:true, why:"Apple made zsh the default in macOS 10.15 Catalina."},
     {t:"PowerShell", why:"PowerShell is Windows’ shell (it can be installed on a Mac, but it isn’t the default)."},
     {t:"Command Prompt", why:"Command Prompt (cmd) is an older Windows shell."},
     {t:"bash", why:"bash was the Mac default up to macOS 10.14; it’s still available, but zsh is now the default."}
   ]},
   {id:"t2u6-q03", lesson:"t2u6-l1", level:2, q:"A guide shows `$ whoami`. What should you type?", options:[
     {t:"`whoami`", ok:true, why:"The `$` is the prompt, shown to mark a typed line. Type what follows it."},
     {t:"`$ whoami`", why:"Typing the `$` makes it part of the command, which then fails."},
     {t:"`$`", why:"The `$` is printed by the shell, not typed."},
     {t:"Nothing: lines with `$` are output", why:"It’s the other way round: lines with `$` are typed; lines without it are output."}
   ]},
   {id:"t2u6-q04", lesson:"t2u6-l1", level:2, q:"In `grep -n beans harvest.txt`, what is `-n`?", options:[
     {t:"A flag that changes how grep behaves (here: show line numbers)", ok:true, why:"Words starting with `-` are flags (options)."},
     {t:"The program being run", why:"The first word, `grep`, is the program."},
     {t:"The file to search", why:"The file is `harvest.txt`."},
     {t:"The text being searched for", why:"The pattern is `beans`."}
   ]},
   {id:"t2u6-q05", lesson:"t2u6-l1", level:2, q:"What does `echo one     two` print in bash?", options:[
     {t:"one two (with a single space)", ok:true, why:"The shell splits the line at spaces into words, and echo prints its words separated by single spaces."},
     {t:"one     two (all the spaces kept)", why:"Spaces are kept only inside quotes."},
     {t:"An error", why:"echo accepts any number of words."},
     {t:"onetwo", why:"echo puts one space between its words."}
   ]},
   {id:"t2u6-q06", lesson:"t2u6-l1", level:3, q:"Mei types `echo \"Good morning` and presses Enter. Instead of her usual prompt, she sees `>`. What happened?", options:[
     {t:"She left a quote open, so the shell is waiting for the rest of the line", ok:true, why:"The `>` is a continuation prompt. Ctrl + C cancels; then retype with both quotes."},
     {t:"She switched to PowerShell by accident", why:"The shell didn’t change; it’s waiting for the closing quote."},
     {t:"She deleted a file", why:"echo only prints; nothing was changed."},
     {t:"She now has administrator power", why:"An administrator prompt ends in `#`, and nothing here grants power."}
   ]},
   {id:"t2u6-q07", lesson:"t2u6-l1", level:1, q:"What does Ctrl + C do in a terminal while a command is running?", options:[
     {t:"Stops (interrupts) the running command", ok:true, why:"It’s the shell’s “stop” key. Copying uses another shortcut in most terminals."},
     {t:"Copies the selected text, always", why:"In most terminals Ctrl + C interrupts; Windows Terminal copies only when text is selected."},
     {t:"Closes the computer", why:"It only stops the current command."},
     {t:"Clears the screen", why:"That’s `clear` or Ctrl + L."}
   ]},
   {id:"t2u6-q08", lesson:"t2u6-l1", level:3, q:"Kenji runs a command that copies a file. It prints nothing and the prompt returns. What does that most likely mean?", options:[
     {t:"It worked: many commands are silent on success", ok:true, why:"Shell tools usually report only problems. Check with `ls` if you want to see the result."},
     {t:"It failed silently", why:"Failures print an error message."},
     {t:"It’s still running in secret", why:"The prompt returned, so the command finished."},
     {t:"The terminal is broken", why:"Silence is normal behaviour for successful commands."}
   ]},
   {id:"t2u6-q09", lesson:"t2u6-l1", level:3, q:"Fatima uses a Chromebook from her school. She can’t find the Linux development environment in Settings. What’s the most likely reason?", options:[
     {t:"The school’s administrator has turned Linux off for managed Chromebooks", ok:true, why:"Google’s help notes that work and school Chromebooks may not allow Linux. She can still learn from the lessons and exercises."},
     {t:"Chromebooks can’t run a shell at all", why:"Most personal Chromebooks can turn on Linux and get a bash terminal."},
     {t:"She must install Windows first", why:"Linux runs inside ChromeOS; no other system is needed."},
     {t:"Linux is in the Chrome Web Store", why:"It’s turned on in Settings → About ChromeOS → Developers, not installed from the store."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t2u6-q10", lesson:"t2u6-l2", level:1, q:"What does `pwd` do?", options:[
     {t:"Shows the folder the shell is currently in", ok:true, why:"Print working directory. It changes nothing."},
     {t:"Changes your password", why:"That’s `passwd` on Linux, a different command."},
     {t:"Lists the files in the folder", why:"That’s `ls`."},
     {t:"Moves to your home folder", why:"That’s `cd ~`."}
   ]},
   {id:"t2u6-q11", lesson:"t2u6-l2", level:1, q:"In a path, what does `..` mean?", options:[
     {t:"The parent folder, one level up", ok:true, why:"`cd ..` climbs one level."},
     {t:"The current folder", why:"That’s a single dot, `.`."},
     {t:"Your home folder", why:"Your home folder is written `~`."},
     {t:"The root of the drive", why:"The root is `/` (or `C:\\`)."}
   ]},
   {id:"t2u6-q12", lesson:"t2u6-l2", level:2, q:"Ana is in `/home/ana/Music`. Which command takes her to `/home/ana/Documents`?", options:[
     {t:"`cd ../Documents`", ok:true, why:"Up one to `/home/ana`, then into Documents."},
     {t:"`cd Documents`", why:"That looks for Documents inside Music, which doesn’t exist."},
     {t:"`cd /Documents`", why:"That’s an absolute path to a Documents folder at the root, not in her home."},
     {t:"`cd ..Documents`", why:"Without the slash, `..Documents` is one name, which doesn’t exist."}
   ]},
   {id:"t2u6-q13", lesson:"t2u6-l2", level:2, q:"Which is an absolute path?", options:[
     {t:"`/Users/hana/Desktop`", ok:true, why:"It starts at the root `/`, so it works from anywhere."},
     {t:"`Desktop`", why:"Relative: it depends on the current folder."},
     {t:"`../Desktop`", why:"Relative: it starts from where you are."},
     {t:"`./Desktop`", why:"Relative: `.` means the current folder."}
   ]},
   {id:"t2u6-q14", lesson:"t2u6-l2", level:1, q:"Which `ls` flag also shows hidden files, whose names start with a dot?", options:[
     {t:"`-a`", ok:true, why:"`-a` means all, including dot-files and the `.` and `..` entries."},
     {t:"`-l`", why:"`-l` gives the long format but still skips hidden names."},
     {t:"`-h`", why:"With `-l`, `-h` shows sizes in human-readable units; it doesn’t reveal hidden files."},
     {t:"`-r`", why:"For ls, `-r` reverses the sort order."}
   ]},
   {id:"t2u6-q15", lesson:"t2u6-l2", level:3, q:"Dmitri types `cd My Projects` and gets `bash: cd: too many arguments`. Why?", options:[
     {t:"The space splits the name into two words; he needs quotes or a backslash", ok:true, why:"`cd \"My Projects\"` or `cd My\\ Projects` passes one name. Tab completion adds the backslash."},
     {t:"The folder doesn’t exist", why:"That would say `No such file or directory`. This error is about the number of words."},
     {t:"cd can’t enter folders with capitals", why:"Capitals are fine if they match the real name."},
     {t:"He needs administrator rights", why:"Permissions aren’t involved; it’s how the shell split the line."}
   ]},
   {id:"t2u6-q16", lesson:"t2u6-l2", level:2, q:"In `ls -l` output, a line begins with `d`. What is that item?", options:[
     {t:"A directory (folder)", ok:true, why:"The first character is the type: `d` for directory, `-` for a regular file."},
     {t:"A deleted file", why:"Deleted files don’t appear in listings."},
     {t:"A document", why:"The letter shows type, not content; documents are regular files (`-`)."},
     {t:"A file you’re not allowed to read", why:"Permissions are the next nine characters, not the first."}
   ]},
   {id:"t2u6-q17", lesson:"t2u6-l2", level:3, q:"Sione presses Tab after typing `cd Proj` and nothing happens. What does that suggest?", options:[
     {t:"No name starting with Proj exists in the current folder, or several do and he needs to press Tab again", ok:true, why:"Tab completes when exactly one name fits. Check `ls` and `pwd`, or press Tab twice to see choices."},
     {t:"Tab completion is broken", why:"Silence is Tab’s way of saying no single match."},
     {t:"He must type the whole path from the root", why:"Tab works with relative names too, if they exist where he is."},
     {t:"The folder is hidden", why:"Hidden names start with a dot, so a name starting with Proj can’t be hidden. Check spelling, case and the current folder instead."}
   ]},
   {id:"t2u6-q18", lesson:"t2u6-l2", level:2, q:"Which key brings back the command you typed last?", options:[
     {t:"The Up arrow", ok:true, why:"↑ steps back through the history; you can edit before pressing Enter."},
     {t:"Tab", why:"Tab completes names."},
     {t:"Esc", why:"Esc doesn’t recall history in a standard shell."},
     {t:"Ctrl + C", why:"That stops a running command."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t2u6-q19", lesson:"t2u6-l3", level:1, q:"Which command renames `draft.txt` to `final.txt` in bash?", options:[
     {t:"`mv draft.txt final.txt`", ok:true, why:"Renaming is moving to a new name."},
     {t:"`cp draft.txt final.txt`", why:"That makes a copy and keeps the original."},
     {t:"`rename draft.txt`", why:"That isn’t the standard way; `mv` is."},
     {t:"`rm draft.txt final.txt`", why:"That would delete both files."}
   ]},
   {id:"t2u6-q20", lesson:"t2u6-l3", level:1, q:"Where does a file go after `rm notes.txt`?", options:[
     {t:"It’s removed immediately; there’s no bin or undo", ok:true, why:"Only a backup is a reliable way back."},
     {t:"The Recycle Bin or Trash", why:"File managers use the bin; `rm` doesn’t."},
     {t:"A hidden folder called .trash", why:"rm keeps no copy anywhere."},
     {t:"Your Downloads folder", why:"It isn’t moved; it’s removed."}
   ]},
   {id:"t2u6-q21", lesson:"t2u6-l3", level:2, q:"Hana runs `cp photos photos-backup` and gets `cp: -r not specified; omitting directory 'photos'`. What should she run?", options:[
     {t:"`cp -r photos photos-backup`", ok:true, why:"Folders need `-r` (recursive) to copy everything inside them."},
     {t:"`mv photos photos-backup`", why:"That renames the folder; she’d have no original left."},
     {t:"`sudo cp photos photos-backup`", why:"The problem isn’t permission; it’s the missing `-r`."},
     {t:"`touch photos-backup`", why:"That makes an empty file, not a copy of the folder."}
   ]},
   {id:"t2u6-q22", lesson:"t2u6-l3", level:2, q:"`plan.txt` holds a week of notes. Priya runs `cp empty.txt plan.txt`. What happens?", options:[
     {t:"`plan.txt` is silently replaced by the empty file", ok:true, why:"cp overwrites an existing destination without asking. `cp -i` would have asked first."},
     {t:"cp refuses because plan.txt exists", why:"Only with `-i` (or `-n` on some systems) does it check."},
     {t:"The two files are merged", why:"cp replaces; it never merges."},
     {t:"A file plan(1).txt is created", why:"That’s a file-manager habit, not cp’s."}
   ]},
   {id:"t2u6-q23", lesson:"t2u6-l3", level:1, q:"What does the `-i` flag add to `rm`, `cp` and `mv`?", options:[
     {t:"It asks for confirmation before deleting or overwriting", ok:true, why:"Interactive mode: answer y or n each time."},
     {t:"It ignores errors", why:"That’s closer to `-f` (force)."},
     {t:"It includes hidden files", why:"For ls, hidden files need `-a`; `-i` here means interactive."},
     {t:"It makes the command faster", why:"It adds questions; it doesn’t change speed."}
   ]},
   {id:"t2u6-q24", lesson:"t2u6-l3", level:3, q:"Oluwaseun wants to delete only the `.tmp` files in a folder. What should he do before running `rm *.tmp`?", options:[
     {t:"Check the folder with `pwd`, then preview the matches with `ls *.tmp`", ok:true, why:"The shell expands the pattern the same way for ls as for rm, so ls shows exactly what rm would receive."},
     {t:"Add `-f` so it doesn’t ask questions", why:"That removes a safety check rather than adding one."},
     {t:"Run it with sudo to be sure", why:"sudo removes protections; it never makes a deletion safer."},
     {t:"Nothing: wildcards only match what you meant", why:"A wrong folder or a stray space can match far more than intended."}
   ]},
   {id:"t2u6-q25", lesson:"t2u6-l3", level:2, q:"Why is `rm * .txt` (with a space) dangerous?", options:[
     {t:"The lone `*` matches every file in the folder", ok:true, why:"The space makes two words: `*` (everything) and `.txt`."},
     {t:"It deletes only hidden .txt files", why:"The lone `*` matches all non-hidden names."},
     {t:"It deletes files in every folder on the computer", why:"`*` only matches names in the current folder. (Without `-r`, `rm` also skips any folders it matches.)"},
     {t:"It isn’t: the shell ignores the space", why:"Spaces separate words, which is the whole problem."}
   ]},
   {id:"t2u6-q26", lesson:"t2u6-l3", level:3, q:"Tomás types `mv report.txt Archvie` (a typo; his folder is `Archive`). There’s no error. What happened?", options:[
     {t:"His file was renamed to `Archvie` in the same folder", ok:true, why:"When the destination isn’t an existing folder, mv treats it as a new name. `Archvie/` with a slash would have failed safely."},
     {t:"It moved into Archive anyway, because mv corrects typos", why:"mv never guesses; it does exactly what you typed."},
     {t:"A new folder Archvie was made and the file moved inside", why:"mv doesn’t create folders."},
     {t:"The file was deleted", why:"It still exists, under the new name. `ls` will show it."}
   ]},
   {id:"t2u6-q27", lesson:"t2u6-l3", level:2, q:"In PowerShell, which option makes `Remove-Item` show what it would delete without deleting anything?", options:[
     {t:"`-WhatIf`", ok:true, why:"It describes the action and stops. Many PowerShell commands support it."},
     {t:"`-Force`", why:"`-Force` removes more (hidden and read-only items), the opposite of a preview."},
     {t:"`-Recurse`", why:"That includes everything inside folders."},
     {t:"`-Quiet`", why:"Remove-Item has no preview option by that name."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t2u6-q28", lesson:"t2u6-l4", level:1, q:"Which command shows the last 10 lines of `log.txt`?", options:[
     {t:"`tail log.txt`", ok:true, why:"tail shows the end of a file, 10 lines by default."},
     {t:"`head log.txt`", why:"head shows the start."},
     {t:"`wc log.txt`", why:"wc counts lines, words and bytes."},
     {t:"`less -10 log.txt`", why:"less pages through the whole file from the top."}
   ]},
   {id:"t2u6-q29", lesson:"t2u6-l4", level:1, q:"Which grep flag ignores the difference between capital and small letters?", options:[
     {t:"`-i`", ok:true, why:"`-i` means ignore case."},
     {t:"`-n`", why:"`-n` shows line numbers."},
     {t:"`-c`", why:"`-c` counts matching lines."},
     {t:"`-v`", why:"`-v` shows lines that don’t match."}
   ]},
   {id:"t2u6-q30", lesson:"t2u6-l4", level:2, q:"What does `grep -i error app.log | wc -l` print?", options:[
     {t:"The number of lines in app.log that contain “error” in any case", ok:true, why:"grep keeps the matching lines; the pipe hands them to `wc -l`, which counts them."},
     {t:"Every line containing “error”", why:"The lines go into wc, which prints only a count."},
     {t:"The number of lines in the whole file", why:"wc only sees the lines grep passed on."},
     {t:"A new file called wc", why:"A pipe sends output to a command, not a file."}
   ]},
   {id:"t2u6-q31", lesson:"t2u6-l4", level:1, q:"What’s the difference between `>` and `>>`?", options:[
     {t:"`>` replaces the file’s contents; `>>` adds to the end", ok:true, why:"One arrow overwrites, two arrows append."},
     {t:"`>>` replaces; `>` adds", why:"It’s the other way round."},
     {t:"They are the same", why:"The difference is exactly overwrite versus append."},
     {t:"`>>` sends output to two files", why:"It appends to one file."}
   ]},
   {id:"t2u6-q32", lesson:"t2u6-l4", level:2, q:"Kenji runs `grep potatoes harvest.txt` and the prompt returns with no output. What does that mean?", options:[
     {t:"No line contains “potatoes” exactly as typed", ok:true, why:"grep prints nothing when nothing matches. Try `-i` in case of capitals, and check spelling."},
     {t:"grep crashed", why:"A crash would print an error message."},
     {t:"The file is empty", why:"Possibly, but the general meaning is simply “no matches”."},
     {t:"grep needs sudo", why:"Reading your own file needs no special power."}
   ]},
   {id:"t2u6-q33", lesson:"t2u6-l4", level:3, q:"Lucía wants a sorted version of `members.txt`. Which is safest?", options:[
     {t:"`sort members.txt > members-sorted.txt`", ok:true, why:"Writing to a new name leaves the original untouched. Check it, then rename if you like."},
     {t:"`sort members.txt > members.txt`", why:"The shell empties members.txt before sort reads it, so it ends up empty."},
     {t:"`sort members.txt >> members.txt`", why:"That appends a sorted copy under the original, doubling the list."},
     {t:"`sort > members.txt`", why:"sort would wait for keyboard input, and members.txt would already be emptied."}
   ]},
   {id:"t2u6-q34", lesson:"t2u6-l4", level:2, q:"What does `wc -l *.csv` do in a folder with three CSV files?", options:[
     {t:"Shows the line count of each CSV file, plus a total", ok:true, why:"The shell expands `*.csv` into the three names; wc reports each and adds a total."},
     {t:"Counts the number of CSV files", why:"It counts lines inside them. `ls *.csv | wc -l` would count the files."},
     {t:"Merges the files", why:"wc only counts."},
     {t:"Fails, because wc takes one file", why:"wc accepts many files."}
   ]},
   {id:"t2u6-q35", lesson:"t2u6-l4", level:3, q:"Amara runs `Select-String tomatoes harvest.txt` in PowerShell and gets one more line than `grep tomatoes harvest.txt` gave on her Mac. Why?", options:[
     {t:"Select-String ignores case by default, so it also matched “Tomatoes”", ok:true, why:"grep is case-sensitive unless you add `-i`; Select-String is the opposite and needs `-CaseSensitive`."},
     {t:"PowerShell reads files twice", why:"It reads once; the difference is case handling."},
     {t:"The Mac’s grep is broken", why:"grep did exactly what it should: case-sensitive matching."},
     {t:"Select-String counts blank lines", why:"Blank lines don’t contain “tomatoes”."}
   ]},
   {id:"t2u6-q36", lesson:"t2u6-l4", level:1, q:"Which key quits `less`?", options:[
     {t:"Q", ok:true, why:"Q returns you to the prompt."},
     {t:"Space", why:"Space shows the next page."},
     {t:"Enter", why:"Enter moves down a line."},
     {t:"/", why:"/ starts a search."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t2u6-q37", lesson:"t2u6-l5", level:1, q:"Which is the quickest way to see a summary of a Linux command’s flags?", options:[
     {t:"`command --help`", ok:true, why:"Most GNU tools print their options with --help. `man` gives the full manual."},
     {t:"`help --command`", why:"That isn’t the convention."},
     {t:"`sudo command`", why:"sudo runs the command with full power; it doesn’t explain it."},
     {t:"`command > help.txt`", why:"That runs the command and saves its output."}
   ]},
   {id:"t2u6-q38", lesson:"t2u6-l5", level:1, q:"In a usage line such as `ls [OPTION]... [FILE]...`, what do square brackets mean?", options:[
     {t:"That part is optional", ok:true, why:"Brackets mark optional parts; the dots mean you can give several."},
     {t:"Type the brackets as shown", why:"They’re notation, not something to type."},
     {t:"That part is required", why:"Required parts appear without brackets."},
     {t:"That part needs administrator rights", why:"Brackets say nothing about permissions."}
   ]},
   {id:"t2u6-q39", lesson:"t2u6-l5", level:2, q:"Read this message: `mv: cannot stat 'budget.xlsx': No such file or directory`. What should you check first?", options:[
     {t:"That budget.xlsx exists in the current folder, with that exact spelling", ok:true, why:"mv is speaking, budget.xlsx is what it worked on, and it couldn’t find it. Check with `pwd` and `ls`, or use Tab."},
     {t:"Whether you need sudo", why:"The problem is a missing name, not permission."},
     {t:"Whether mv is installed", why:"mv ran: it printed the error."},
     {t:"Whether the destination folder is full", why:"The message is about the source file."}
   ]},
   {id:"t2u6-q40", lesson:"t2u6-l5", level:1, q:"What does `sudo` do?", options:[
     {t:"Runs one command as the administrator (root) account", ok:true, why:"“Superuser do”. Use it only when you understand the command."},
     {t:"Undoes the last command", why:"There’s no undo in the shell."},
     {t:"Shows help for a command", why:"That’s `--help` or `man`."},
     {t:"Makes a command run slower but more safely", why:"It makes a command more powerful, not safer."}
   ]},
   {id:"t2u6-q41", lesson:"t2u6-l5", level:2, q:"Hana types her password after `sudo` and nothing appears on screen. What’s going on?", options:[
     {t:"That’s normal: the password is accepted without showing any characters", ok:true, why:"Most systems show nothing at all while you type a password in the terminal (a few newer ones show a `*` per key). Type it and press Enter."},
     {t:"The keyboard has stopped working", why:"The keys are being read; they just aren’t shown."},
     {t:"She must click the window first", why:"The window already has the input."},
     {t:"Her account has no password", why:"Hidden typing is a deliberate privacy feature."}
   ]},
   {id:"t2u6-q42", lesson:"t2u6-l5", level:3, q:"A pop-up on a website says: “To verify you’re human, press Windows + R, paste this and press Enter.” What should Kenji do?", options:[
     {t:"Close the page without pasting anything: it’s a scam to run a command on his computer", ok:true, why:"Legitimate sites never ask this. The pasted text would run with his permissions."},
     {t:"Paste it, since CAPTCHAs are normal", why:"Real human checks happen in the browser, never in the Run box or a terminal."},
     {t:"Paste it into PowerShell instead of the Run box", why:"Same danger, different window."},
     {t:"Run it as administrator to make sure it works", why:"That would give the attacker full control."}
   ]},
   {id:"t2u6-q43", lesson:"t2u6-l5", level:2, q:"Why is `curl -fsSL https://example.com/install.sh | bash` worth pausing over?", options:[
     {t:"It downloads a script and runs it immediately, without you seeing what it does", ok:true, why:"Safer: download it, read it, check it’s from the official source, then run it."},
     {t:"curl can’t download scripts", why:"It can download any file."},
     {t:"The pipe saves the script to your desktop", why:"The pipe passes it straight to bash; nothing is saved."},
     {t:"It only works on Windows", why:"It’s a bash pipeline, typical on Mac and Linux."}
   ]},
   {id:"t2u6-q44", lesson:"t2u6-l5", level:3, q:"An AI assistant suggests `rm -rf build/ *` to “clean the build folder”. What should Amara notice?", options:[
     {t:"The space before `*` means it would also delete everything in the current folder", ok:true, why:"`build/` and `*` are separate arguments: the `*` matches every name here. Ask for an explanation and preview with `echo` first."},
     {t:"Nothing: AI suggestions are tested before they’re shown", why:"AI tools can produce plausible but harmful commands. Read before running."},
     {t:"`-rf` makes it ask before each file", why:"`-f` means force: no questions."},
     {t:"It only deletes empty folders", why:"`rm -r` deletes folders with all their contents."}
   ]},
   {id:"t2u6-q45", lesson:"t2u6-l5", level:2, q:"In PowerShell, which command is the equivalent of `head -n 5 notes.txt`?", options:[
     {t:"`Get-Content notes.txt -Head 5`", ok:true, why:"`-Head` (also called `-TotalCount` or `-First`) limits how many lines are read."},
     {t:"`head -n 5 notes.txt`", why:"PowerShell on Windows has no `head` command."},
     {t:"`Select-String notes.txt 5`", why:"Select-String searches for a pattern."},
     {t:"`ls -n 5 notes.txt`", why:"ls lists files; it doesn’t show contents."}
   ]}
  ]
});
