/* Track 1 · Unit 2 · Files, folders, cloud and backups */
ICA.addUnit({
  id:"t1u2", track:"t1", n:2, title:"Files, folders, cloud and backups", icon:"🗂️",
  blurb:"Learn what a file really is, how to find and organize your work, how cloud storage and sync behave, and how to build backups you have actually tested.",
  goals:[
    "Explain what a file is and read its extension to know what it is and what opens it",
    "Navigate the folder tree, read a path, and move, copy and recover files on purpose",
    "Name and organize files so you and others can find the right version years later",
    "Use cloud storage and sharing links safely, with the right permissions",
    "Set up backups that survive deletion, theft and ransomware, and prove they work"
  ],
  read:[
    {book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders”", note:"The whole section matches this unit: folders, file types, compressing, recovering, best practices and cloud storage."},
    {book:"wss", where:"Chapter 2, Section 2.6 “Collaboration”", note:"See “File Sharing and Transferring” and “Sharing a Document” for permissions and links."},
    {book:"ics", where:"Chapter 6, Section 6.5 “File Systems”", note:"A deeper, computer-science view of files, directories and file systems."}
  ],
  lessons:[
  /* ───────────────────────── LESSON 1 ───────────────────────── */
  {id:"t1u2-l1", title:"Files and file types", minutes:50,
   goals:["Describe a file as data plus a name plus metadata","Show file extensions on your own device and read them","Pick the right format to send, and know why renaming doesn’t convert","Zip and unzip files, and know when zipping helps"],
   learn:[
    {h:"What a file really is", body:[
      {lead:"Everything you keep on a computer or phone — a photo, a letter, a song, a spreadsheet — is stored as a **file**."},
      "Think of a file as a sealed envelope in a filing cabinet. Inside the envelope is the content. On the outside is a label with its name, and a few notes stamped on by the post office: when it was made, when it was last changed, how heavy it is. You can read the outside without opening the envelope.",
      "The precise version: a [[file]] is a named collection of data kept on [[storage]] (an [[ssd]], hard drive, memory card or USB stick). It has three parts:",
      {list:[
        "**The data** — the content itself, stored as bytes (the ones and zeros explained in {{bits-bytes}}). A 3 MB photo is about 3 million bytes of colour information.",
        "**The name** — what people see in a folder, such as `garden-club-minutes.docx`. The last part after the final dot is the **extension**.",
        "**The [[metadata]]** — data *about* the data: size, date created, date modified, who owns it, and often more. A phone photo usually also records the camera model and sometimes the location where it was taken."
      ]},
      {fig:'<svg viewBox="0 0 340 312"><rect class="d-panel" x="5.7" y="6" width="328.7" height="298" rx="12" stroke-width="2"/><text x="170" y="30" text-anchor="middle">One file = name + data + metadata</text><rect class="d-lup" x="37.8" y="44" width="188.9" height="40" rx="8" stroke-width="2"/><text x="132.2" y="69" text-anchor="middle">holiday-beach</text><rect class="d-gold" x="226.7" y="44" width="75.6" height="40" rx="8" stroke-width="2"/><text x="264.4" y="69" text-anchor="middle">.jpg</text><text class="s" x="132.2" y="102" text-anchor="middle">name you choose</text><text class="s" x="264.4" y="102" text-anchor="middle">extension = type</text><rect class="d-sage" x="20.8" y="116" width="298.4" height="56" rx="8" stroke-width="2"/><text x="170" y="140" text-anchor="middle">Data: about 3 million bytes</text><text class="s" x="170" y="160" text-anchor="middle">the picture itself, as numbers</text><rect class="d-rose" x="20.8" y="184" width="298.4" height="106" rx="8" stroke-width="2"/><text x="170" y="206" text-anchor="middle">Metadata</text><text class="s" x="35.9" y="230">Size: 3 MB</text><text class="s" x="35.9" y="252">Created: 2026-07-14</text><text class="s" x="35.9" y="274">Modified: 2026-07-15</text><text class="s" x="188.9" y="230">Camera: phone</text><text class="s" x="188.9" y="252">Location: maybe!</text></svg>', alt:"A file drawn as three parts: a name made of “holiday-beach” plus the extension “.jpg”; the data, about 3 million bytes of picture; and metadata listing size, created and modified dates, camera and possibly location.", cap:"The name and metadata travel with the data. Metadata can reveal more than you expect, such as where a photo was taken."},
      {warn:"Photo metadata can include the GPS location where it was taken. Many social sites remove it when you post, but sending the original file by email or chat may keep it. Phones let you turn location off for the camera or remove it when sharing; the menu differs by phone."},
      {key:"A file is not “the picture” or “the document” — it is data with a name and some labels. Understanding those three parts explains almost everything else in this unit."}
    ]},
    {h:"The extension: a label that says what’s inside", body:[
      "The [[file-extension]] is the short code after the last dot: `.docx`, `.pdf`, `.jpg`. Your [[operating-system]] reads it to decide which app opens the file and which icon to show. Double-click `budget.xlsx` and Windows or macOS sees “.xlsx” and starts a spreadsheet app.",
      "Here’s the surprise for many people: **Windows and macOS hide most extensions by default.** You see “budget” with a spreadsheet icon, not “budget.xlsx”. That is tidy, but it hides useful information — and it helps criminals.",
      {ex:"invoice_2026-03.pdf.exe", label:"Worked example: the double extension trick", mono:true},
      "With extensions hidden, the file above appears as `invoice_2026-03.pdf`. It looks like a harmless PDF. But the **real** extension is only the part after the *last* dot: `.exe`, a Windows program. Opening it would run whatever the program does, which is how some {{malware}} spreads. With extensions shown, the trick is obvious.",
      "So the first practical skill in this unit is to **turn extensions on** and leave them on:",
      {list:[
        "**Windows 11** — in [[file-explorer|File Explorer]], choose **View → Show → File name extensions**.",
        "**macOS** — in [[finder|Finder]], choose **Finder → Settings → Advanced**, then tick **Show all filename extensions**.",
        "**ChromeOS** — the Files app shows the full file name, extension included, so there is nothing to switch on.",
        "**Phones** — the Files app on iPhone and the file apps on Android vary; tapping a file’s info (often an “i” or “Details”) shows its type."
      ]},
      {tip:"Once extensions are visible, be careful when renaming: change only the part before the dot. Windows and macOS warn you if you try to change the extension itself — and that warning is worth listening to (see below)."}
    ]},
    {h:"Common formats and what opens them", body:[
      "A [[file-format]] is the agreed way data is arranged inside a file. The extension is just the label on the outside; the format is the actual arrangement. These are the ones you’ll meet most:",
      {table:[
        ["Extension","What it is","What usually opens it"],
        [".docx","A word-processing document","Microsoft Word, LibreOffice Writer, Google Docs, Apple Pages"],
        [".xlsx","A spreadsheet","Microsoft Excel, LibreOffice Calc, Google Sheets, Apple Numbers"],
        [".pptx","A slide presentation","PowerPoint, LibreOffice Impress, Google Slides, Keynote"],
        [".pdf","A fixed-layout document that looks the same everywhere","Any web browser, Preview (Mac), Adobe Acrobat Reader and many others"],
        [".txt","Plain text, no formatting at all","Notepad, TextEdit, any text editor"],
        [".csv","Comma-separated values: a table stored as plain text","Any spreadsheet app or text editor"],
        [".jpg / .jpeg","A photo, compressed to be small (some quality is thrown away)","Every device and browser"],
        [".png","An image that keeps every pixel exactly; good for screenshots and logos","Every device and browser"],
        [".heic","Apple’s space-saving photo format (HEIF), the iPhone default","Apple devices; recent Windows and Android with support added; many websites convert it"],
        [".mp4","A video","Every phone, computer and browser"],
        [".zip","A container holding one or more files, usually compressed","Built into Windows, macOS, ChromeOS and most phones"]
      ]},
      "Notice the right-hand column: **a format is not owned by one app**. A `.docx` can be opened by several programs. That matters when someone says “I don’t have Word” — they may not need it.",
      {tip:"Older Microsoft formats end without the x: `.doc`, `.xls`, `.ppt`. The newer x-formats arrived in 2007. Both still open in modern apps."},
      "Two that confuse people: `.csv` and `.txt` contain **only text**. A CSV opened in a spreadsheet looks like a spreadsheet, but colours, formulas and multiple sheets are not saved in it. If you build a budget with formulas and save it as `.csv`, the formulas are lost. Save as `.xlsx` (or `.ods`) to keep them."
    ]},
    {h:"Open and proprietary formats", body:[
      "Formats differ in who controls the rules.",
      {list:[
        "An [[open-format]] has a published specification anyone may read and build software for, without asking permission. Plain text, CSV, PNG, the OpenDocument formats (`.odt`, `.ods`) and PDF (an international standard, ISO 32000) are examples.",
        "A [[proprietary-format]] is controlled by one company, which may not publish full details. Files made by some single-company apps, such as Apple Pages’ `.pages` files, are hard to open properly anywhere else."
      ]},
      "Reality is more mixed than two boxes. The `.docx`, `.xlsx` and `.pptx` formats were created by Microsoft, but they have been published as an international standard (ISO/IEC 29500) since 2008, which is why other apps can open them. Even so, complex layouts can look slightly different in different programs.",
      {key:"For anything you want to open in 10 or 20 years, or share with people whose software you don’t know, prefer widely supported, openly documented formats: PDF for finished documents, CSV or plain text for simple data, PNG or JPEG for images."},
      "That is why research archives and libraries ask for non-proprietary formats: the file must stay readable after the app that made it is gone."
    ]},
    {h:"PDF or editable file? Choosing what to send", body:[
      "A [[pdf]] is like a printed page in digital form: it looks the same on every device, fonts and layout included, and it is awkward to change. An editable file (`.docx`, `.xlsx`, `.pptx`, or a shared online document) is like handing over your working draft.",
      {table:[
        ["Situation","Send","Why"],
        ["A finished CV, invoice, form or flyer","PDF","Layout stays fixed; the reader can’t accidentally change it"],
        ["A draft for a colleague to edit","Editable file or a shared online document","They need to change it, and tracked changes or comments work"],
        ["A budget others will reuse","Spreadsheet (.xlsx/.ods)","Formulas survive; a PDF would freeze them as plain numbers"],
        ["Something to print at a shop","PDF","Printers see exactly what you see"],
        ["A table of data for analysis","CSV plus a short note on what the columns mean","Opens anywhere, in any program"]
      ]},
      {warn:"A PDF is **not** secure just because it’s hard to edit. Text can be copied, and many apps can edit PDFs. Covering text with a black box in an editor may leave the text underneath readable. Remove sensitive content from the original before making the PDF."},
      "Most apps make a PDF with **File → Save As** or **File → Export** (choose PDF), or **Print → Save as PDF**."
    ]},
    {h:"Why renaming an extension doesn’t convert a file", body:[
      "A very common belief: “The website only accepts JPG, so I’ll rename `photo.heic` to `photo.jpg`.” The name changes. The data inside does not. It is still HEIC data with a JPG label, like pouring orange juice into a milk carton. Apps that trust the label may refuse to open it or show an error.",
      {ex:"Wrong: rename  photo.heic  →  photo.jpg   (label changed, data unchanged)\nRight: open photo.heic in Photos/Preview → Export or Save As → JPEG  →  photo.jpg (new data)", label:"Worked example", mono:true},
      "**Converting** means an app reads the data and writes it out again in the new arrangement. Ways to do that:",
      {list:[
        "**Export / Save As** inside an app (Preview on Mac, Photos or Paint on Windows, Word’s Save As PDF).",
        "**Download as** in online apps (Google Docs: File → Download → choose a format).",
        "**Phone settings** that avoid the problem: on iPhone, **Settings → Camera → Formats → Most Compatible** saves new photos as JPEG instead of HEIC. Sharing to a computer or email often converts automatically too."
      ]},
      {tip:"If you do rename an extension by accident, rename it back. Nothing inside was harmed."}
    ]},
    {h:"Zipping and unzipping", body:[
      "A [[zip]] file is a parcel: one file that holds many files and folders, usually squeezed smaller. Zipping is handy for sending a folder of 30 documents as one attachment, or for downloading a set of files in one go.",
      "The squeezing is called [[compression]]. Zip uses **lossless** compression: it finds repetition in the data and writes it more briefly, then rebuilds every byte exactly when unzipped. Nothing is lost. That is different from JPEG or MP4 compression, which throws away detail you are unlikely to notice.",
      {key:"Zipping text, documents and spreadsheets often makes them much smaller. Zipping photos, videos and PDFs barely helps, because they are already compressed — you can’t squeeze the same sponge twice."},
      {table:[
        ["Task","Windows 11","macOS","ChromeOS"],
        ["Zip","Select files, right-click → **Compress to → ZIP File** (older versions: **Compress to ZIP file**)","Control-click → **Compress**","Select files, right-click → **Zip**"],
        ["Unzip","Right-click the .zip → **Extract All**","Double-click the .zip","Double-click to look inside, or right-click → **Extract all**"]
      ]},
      {warn:"Windows lets you double-click into a zip and open files from inside it. That works for reading, but changes you save may land in a temporary folder and seem to vanish. **Extract first, then work on the extracted copy.**"},
      "On phones, the iPhone Files app opens a zip when you tap it; on Android, apps such as Files by Google offer **Extract**. And treat zips from strangers with care: a zip can hide a program inside, just like a double extension."
    ]}
   ],
   try:[
    {id:"t1u2-l1-x1", type:"match", q:"Match each extension to what the file is.", pairs:[
      [".xlsx","A spreadsheet that can keep formulas","The x-formats are Microsoft’s current Office formats; .xlsx is the spreadsheet one, and it stores formulas, not just numbers."],
      [".csv","A table stored as plain text","CSV means comma-separated values: rows of text with commas between columns. No formulas or colours are saved."],
      [".pdf","A fixed-layout document that looks the same everywhere","PDF keeps fonts and layout fixed, which is why it’s used for finished documents."],
      [".heic","An iPhone photo in a space-saving format","HEIC is Apple’s default photo format (HEIF). It saves space but some older software can’t open it."],
      [".png","An image that keeps every pixel exactly","PNG is lossless: good for screenshots and logos where sharp edges matter."]
    ]},
    {id:"t1u2-l1-x2", type:"mcq", q:"A job website accepts only JPG images. Tomás renames `profile.heic` to `profile.jpg` and uploads it. What has he actually done?", options:[
      {t:"Changed only the label; the data is still HEIC, so the upload may fail or show a broken image", ok:true, why:"Right. The extension is a label. Converting needs an app to rewrite the data as JPEG, for example with Export or Save As."},
      {t:"Converted the photo to JPG, because the extension controls the format", why:"This is the core misconception. The extension describes the format; changing the description doesn’t change the contents."},
      {t:"Damaged the photo so it can never be opened again", why:"Renaming doesn’t touch the data. Renaming it back to .heic restores it fully."},
      {t:"Made the photo smaller, because JPG files are smaller", why:"Nothing about the data changed, so the size is identical. (In fact HEIC is usually the smaller format.)"}
    ]},
    {id:"t1u2-l1-x3", type:"spot", q:"Ana gets an email attachment. Her computer shows extensions. Which parts of the file name should worry her?", ask:"is a warning sign", mono:true, parts:[
      {t:"invoice", flag:false, why:"An ordinary word. Names can say anything, so it neither proves nor disproves anything."},
      "_",
      {t:"2026-03", flag:false, why:"A normal date. Not suspicious on its own."},
      {t:".pdf", flag:true, why:"This is a decoy. It is not the extension; it’s part of the name, placed there so that with extensions hidden the file looks like a PDF."},
      {t:".exe", flag:true, why:"The real extension is always after the last dot. .exe is a Windows program. An invoice should never be a program."}
    ]},
    {id:"t1u2-l1-x4", type:"sort", q:"Send as a PDF, or as an editable file?", buckets:["PDF","Editable file"], items:[
      {t:"Oluwaseun’s finished CV for a job application", b:0, why:"Finished and must look identical on the employer’s screen. PDF keeps the layout fixed."},
      {t:"A draft report Mei wants her colleague to correct", b:1, why:"The colleague needs to change text and leave tracked changes or comments. A PDF makes that awkward."},
      {t:"A household budget with formulas the family will keep updating", b:1, why:"A PDF freezes formulas into plain numbers. A spreadsheet file keeps them working."},
      {t:"A flyer going to a print shop", b:0, why:"Print shops want PDF so fonts and layout print exactly as designed."},
      {t:"A signed invoice for a customer", b:0, why:"A finished record that shouldn’t change. PDF is the usual choice."},
      {t:"A slide deck that three volunteers will each add slides to", b:1, why:"Several people need to edit, so send the editable .pptx or share an online version."}
    ]},
    {id:"t1u2-l1-x5", type:"mcq", q:"Which of these are metadata about a photo file (not the picture itself)? Choose all that apply.", options:[
      {t:"The date and time it was taken", ok:true, why:"Stored alongside the picture data; you can see it in the file’s info without opening the image."},
      {t:"The location where it was taken, if the camera recorded it", ok:true, why:"GPS location is a common piece of photo metadata, and a privacy concern worth knowing about."},
      {t:"The file size", ok:true, why:"Size is metadata the file system keeps about every file."},
      {t:"The colours of the pixels in the sunset", why:"That is the data — the content of the picture itself."}
    ]},
    {id:"t1u2-l1-x6", type:"mcq", q:"Kenji zips a folder of 200 holiday JPEG photos (900 MB) to email it. The zip is still about 890 MB. Why?", options:[
      {t:"JPEG photos are already compressed, so zip finds little left to squeeze", ok:true, why:"Correct. JPEG has already removed redundancy. Zip works best on text and documents. For big photo sets, a cloud sharing link is better than email."},
      {t:"He zipped it wrong; a correct zip always halves the size", why:"There is no fixed ratio. How much zip saves depends entirely on how repetitive the data is."},
      {t:"Zip only works on Windows", why:"Zip is built into Windows, macOS, ChromeOS and phones. The platform isn’t the issue."},
      {t:"Zipping removed photos, so it can’t be smaller", why:"Zip is lossless and keeps every file. The size barely changed because the photos were already compressed."}
    ]},
    {id:"t1u2-l1-x7", type:"mcq", q:"Priya saves her club’s membership spreadsheet, full of formulas, as `members.csv` and closes it. What happens to the formulas?", options:[
      {t:"They are lost; CSV stores only the values as plain text", ok:true, why:"Right. CSV has no place for formulas, colours or extra sheets. Keep a .xlsx or .ods master copy and export CSV only when someone needs the raw data."},
      {t:"They are kept, because CSV is a spreadsheet format", why:"CSV opens in spreadsheet apps but is plain text. Most apps warn you that some features will be lost."},
      {t:"They are converted into a PDF inside the CSV", why:"A CSV is just text with commas. It can’t contain a PDF or anything else."},
      {t:"They are kept only if the file is zipped", why:"Zipping wraps a file without changing what’s in it. Lost formulas stay lost."}
    ]}
   ],
   apply:{intro:"Make your device show you the truth about your files.", tasks:[
    {t:"Turn on file name extensions", how:{
      win:["Open **File Explorer** (the folder icon on the taskbar, or [[kbd:Win]] + [[kbd:E]]).","Select **View** in the toolbar, point to **Show**, and select **File name extensions** so it has a tick."],
      mac:["Click the **Finder** icon in the Dock.","In the menu bar choose **Finder → Settings** (called **Preferences** on macOS versions before Ventura).","Click **Advanced** and tick **Show all filename extensions**."],
      chromeos:["Open the **Files** app from the Launcher.","Look at any file: ChromeOS already shows the full name with its extension. Nothing to change."],
      phone:["iPhone: open **Files**, touch and hold a file, choose **Get Info** to see its kind and size.","Android: open your file app (**Files by Google**, or **My Files** on Samsung phones), tap the three dots on a file and choose **File info** or **Details**. Names vary by maker."]}},
    {t:"Find three different file types on your device", how:["Open your Documents and Downloads folders.","Find one document, one image and one other type (PDF, zip, video…).","For each, note the extension and which app opens it when you double-click or tap it."]},
    {t:"Zip a folder and unzip it again", how:{
      win:["Make a test folder with two or three small files.","Right-click the folder → **Compress to → ZIP File** (or **Compress to ZIP file**).","Right-click the new .zip → **Extract All** → **Extract**. Compare the extracted folder with the original."],
      mac:["Make a test folder with two or three small files.","Control-click it → **Compress**. An “Archive” or folder-named .zip appears.","Move the original folder aside, then double-click the .zip to unzip it."],
      chromeos:["In **Files**, select your test files (hold [[kbd:Ctrl]] to pick several).","Right-click → **Zip**.","Right-click the .zip → **Extract all**."],
      phone:["iPhone: in **Files**, touch and hold a folder → **Compress**; tap the .zip to expand it.","Android: in **Files by Google**, tap a .zip → **Extract**. Creating zips may need another app depending on the phone."]}}
   ], proof:"Extensions are visible on your computer, you can name the type of three of your files, and you have a test folder you zipped and unzipped yourself."},
   read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — subsections “File Types” and “Compressing and Extracting Files”"},{book:"ics", where:"Chapter 6, Section 6.5 “File Systems” — “Files, File Systems, Directories, and File Management”", note:"Optional deeper reading on how an operating system stores files."}]
  },
  /* ───────────────────────── LESSON 2 ───────────────────────── */
  {id:"t1u2-l2", title:"Folders and paths", minutes:50,
   goals:["Picture your storage as a folder tree and find your home folder","Read and copy a path on Windows, macOS and ChromeOS","Move or copy on purpose, including between drives","Find lost files with search and recover them from the Recycle Bin or Trash"],
   learn:[
    {h:"The folder tree", body:[
      {lead:"If files are envelopes, a [[folder]] is a drawer or a labelled box you put envelopes in. Boxes can sit inside other boxes."},
      "Your computer starts with one top-level container for each drive. On Windows that is `C:` (and `D:`, `E:` and so on for other drives). On macOS, Linux and ChromeOS there is a single top called the **root**, written `/`. Everything else branches out from there, like an upside-down tree: a few big branches near the top, then smaller and smaller ones, with files as the leaves.",
      "Computer scientists call folders **directories**; the words mean the same thing. A folder inside another is a **subfolder**, and the folder that contains it is its **parent**.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="t1u2-l2-mk" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="3.5" markerHeight="3.5" orient="auto"><path class="d-inkf" d="M0,0 L8,4 L0,8 z"/></marker></defs><path class="d-ink" d="M24.6,98 V326 H45.3 M24.6,60 H45.3" stroke-width="2" fill="none"/><path class="d-ink" d="M24.6,36 V98 H43.4" stroke-width="3" fill="none" marker-end="url(#t1u2-l2-mk)"/><path class="d-ink" d="M62.3,112 V136 H81.2" stroke-width="3" fill="none" marker-end="url(#t1u2-l2-mk)"/><path class="d-ink" d="M100.1,212 V288 H120.9 M100.1,174 H120.9" stroke-width="2" fill="none"/><path class="d-ink" d="M100.1,150 V212 H119" stroke-width="3" fill="none" marker-end="url(#t1u2-l2-mk)"/><path class="d-ink" d="M137.9,226 V250 H156.8" stroke-width="3" fill="none" marker-end="url(#t1u2-l2-mk)"/><rect class="d-soft" x="9.4" y="8" width="56.7" height="28" rx="8" stroke-width="2"/><text x="37.8" y="27" text-anchor="middle">C:\\</text><rect class="d-soft" x="47.2" y="46" width="117.1" height="28" rx="8" stroke-width="2"/><text x="105.8" y="65" text-anchor="middle">Program Files</text><rect class="d-gold" x="47.2" y="84" width="75.6" height="28" rx="8" stroke-width="3"/><text x="85" y="103" text-anchor="middle">Users</text><rect class="d-gold" x="85" y="122" width="79.3" height="28" rx="8" stroke-width="3"/><text x="124.7" y="141" text-anchor="middle">Amara</text><rect class="d-soft" x="122.8" y="160" width="94.4" height="28" rx="8" stroke-width="2"/><text x="170" y="179" text-anchor="middle">Desktop</text><rect class="d-gold" x="122.8" y="198" width="103.9" height="28" rx="8" stroke-width="3"/><text x="174.7" y="217" text-anchor="middle">Documents</text><rect class="d-lup" x="160.6" y="236" width="122.8" height="28" rx="8" stroke-width="3"/><text x="221.9" y="255" text-anchor="middle">minutes.docx</text><rect class="d-soft" x="122.8" y="274" width="103.9" height="28" rx="8" stroke-width="2"/><text x="174.7" y="293" text-anchor="middle">Downloads</text><rect class="d-soft" x="47.2" y="312" width="90.7" height="28" rx="8" stroke-width="2"/><text x="92.6" y="331" text-anchor="middle">Windows</text><text class="s" x="170" y="366" text-anchor="middle">Path: C:\\Users\\Amara\\Documents\\minutes.docx</text></svg>', alt:"A folder tree drawn like a file explorer, each level indented under the one above. C: contains Program Files, Users and Windows. Users contains Amara, which contains Desktop, Documents and Downloads. A highlighted route runs C:, Users, Amara, Documents, to the file minutes.docx.", cap:"A path is the route from the top of the tree to one file. The highlighted route is the path written underneath."}
    ]},
    {h:"Your home folder and the standard folders", body:[
      "Each person who signs in to a computer gets their own [[home-folder]], named after their [[user-account]]. Your personal files live inside it, separate from other users and from the system’s own files.",
      {table:[
        ["Folder","Meant for","Watch out for"],
        ["Desktop","A few things you’re working on today","Turns into a cluttered pile; on Windows it may be synced to OneDrive"],
        ["Documents","Your documents, best organized into subfolders","Some apps also dump their own files here"],
        ["Downloads","Where browsers and email save files by default","Everything lands here and is rarely sorted"],
        ["Pictures / Movies or Videos / Music","Media; photo apps often keep their libraries here","Big; check these are included in your backups"]
      ]},
      "On **Windows 11**, File Explorer’s **Home** view shows recent and favourite files, and the standard folders are pinned under **Quick access**. On **macOS**, Finder’s sidebar lists Desktop, Documents and Downloads, and your home folder has a house icon. On **ChromeOS**, the Files app shows **My files** (with **Downloads** inside it) for files kept on the Chromebook, and **Google Drive** for files kept online.",
      {tip:"On Windows, if OneDrive “backup” is turned on, your Desktop, Documents and Pictures may physically live in a OneDrive folder. Lesson 4 explains what that means."}
    ]},
    {h:"Reading and writing a path", body:[
      "A [[path]] is the full address of a file: every folder from the top down to the file, in order, with a separator between each. It’s like a postal address from country down to flat number.",
      {table:[
        ["System","Example path","Separator"],
        ["Windows","`C:\\Users\\Amara\\Documents\\minutes.docx`","Backslash `\\`"],
        ["macOS","`/Users/amara/Documents/minutes.docx`","Forward slash `/`"],
        ["Linux","`/home/amara/Documents/minutes.docx`","Forward slash `/`"],
        ["ChromeOS (as Files shows it)","My files › Downloads › minutes.docx","Shown as a breadcrumb trail"]
      ]},
      "Notice three things. Windows starts with a drive letter; the others start at `/`. Windows uses backslashes; everything else, including web addresses, uses forward slashes. And because slashes separate folders, you can’t use them inside a file name. Windows also refuses `: * ? \" < > |` in names.",
      {ex:"Path: `/Users/kenji/Documents/Shop/2026/invoices/2026-03-04_invoice_0147.pdf`\nRead it as: start at the top → Users → kenji’s home → Documents → Shop → 2026 → invoices → the file.", label:"Worked example: reading a path"},
      "Why bother with paths? Because sometimes you must tell another person, or a program, exactly where something is: “it’s in Documents” is vague if there are three Documents folders (one on the computer, one in OneDrive, one on a USB stick).",
      {list:[
        "**Windows:** right-click a file → **Copy as path**. The address bar also shows the path when you click into it.",
        "**macOS:** in Finder choose **View → Show Path Bar** to see the route along the bottom. To copy it, Control-click the file, hold [[kbd:Option]], and choose **Copy … as Pathname**.",
        "**ChromeOS:** the breadcrumb at the top of the Files app shows where you are; click any part to jump up."
      ]}
    ]},
    {h:"The Downloads and Desktop traps", body:[
      "Two folders cause more lost files than any others.",
      "**Downloads** collects everything you save from the web or open from email. Open an attachment, edit it, click Save — and the edited copy may be sitting in Downloads (or a temporary folder) with a name like `Report (3).docx`. Weeks later you can’t tell which of five copies is the real one. On a Chromebook, everything in **My files** (Downloads included) is kept on that device only; it isn’t in Google Drive unless you move it there.",
      "**Desktop** is tempting because it’s always visible. It becomes a heap of icons where nothing has a place.",
      {key:"Treat Downloads like a doormat: things land there, then you move them where they belong (or delete them). Treat the Desktop like the top of your actual desk: only today’s work."},
      {tip:"When you open an email attachment, use **Save As** or **Save a copy** and choose a proper folder *before* you start editing. That way your changes go into the copy you will find later."}
    ]},
    {h:"Moving vs copying (and the drag surprise)", body:[
      "**Copying** makes a second, independent file; the original stays where it was. **Moving** changes a file’s location; afterwards there is only one, somewhere new. Both are useful, but mixing them up causes confusion: edit one copy and the other doesn’t change.",
      "Keyboard methods are the clearest:",
      {table:[
        ["Action","Windows / ChromeOS","macOS"],
        ["Copy","[[kbd:Ctrl]] + [[kbd:C]], then [[kbd:Ctrl]] + [[kbd:V]] at the destination","[[kbd:Cmd]] + [[kbd:C]], then [[kbd:Cmd]] + [[kbd:V]]"],
        ["Move","[[kbd:Ctrl]] + [[kbd:X]] (cut), then [[kbd:Ctrl]] + [[kbd:V]]","[[kbd:Cmd]] + [[kbd:C]], then [[kbd:Option]] + [[kbd:Cmd]] + [[kbd:V]]"]
      ]},
      "**Dragging** is where people get surprised, because the result depends on where you drop the file:",
      {list:[
        "Drag to another folder **on the same drive** → the file is **moved**.",
        "Drag to a **different drive** (a USB stick, external drive, memory card) → the file is **copied**; the original stays put.",
        "On Windows, hold [[kbd:Ctrl]] while dragging to force a copy, or [[kbd:Shift]] to force a move. On a Mac, hold [[kbd:Option]] to force a copy, or [[kbd:Cmd]] to move to another drive."
      ]},
      "The little label next to the pointer while you drag (“Move to Documents” or “Copy to USB drive”, or a green plus sign on a Mac) tells you which will happen before you let go.",
      {warn:"Copying files to a USB stick and then deleting them from the computer leaves only one copy, on the stick — the most easily lost object you own. Copying is not the same as backing up unless at least two copies remain (Lesson 5)."}
    ]},
    {h:"Shortcuts and aliases", body:[
      "A [[shortcut]] (Windows and ChromeOS term) or **alias** (Mac term) is a small pointer file that opens something stored elsewhere — like a sign saying “the cups are in the kitchen”, not the cups themselves.",
      {list:[
        "Deleting the shortcut leaves the real file untouched.",
        "Deleting or moving the real file can break the shortcut. (Mac aliases often follow a moved file; Windows shortcuts may not.)",
        "Copying a shortcut to a USB stick copies only the sign. The actual file is not on the stick."
      ]},
      "To make one on Windows 11: right-click the file → **Show more options** → **Create shortcut** (or hold [[kbd:Alt]] while dragging). On a Mac: select it and choose **File → Make Alias**. Shortcut icons on Windows show a small curved arrow; Mac aliases show one too."
    ]},
    {h:"Finding files with search", body:[
      "You don’t have to remember where everything is. Every system indexes your files so search is fast:",
      {list:[
        "**Windows:** type in the search box at the top right of File Explorer (it searches the current folder and below), or press [[kbd:Win]] and start typing.",
        "**macOS:** press [[kbd:Cmd]] + [[kbd:Space]] for Spotlight, or use the search box in a Finder window.",
        "**ChromeOS:** press the Launcher (Everything) key and type, or use the search icon in the Files app.",
        "**Phones:** the Files app on iPhone and file apps on Android each have a search bar."
      ]},
      "Search works on names, and usually on words inside documents too. Good file names (Lesson 3) make search far more reliable. To find something you just downloaded, sort the Downloads folder by **Date modified** with the newest at the top."
    ]},
    {h:"The Recycle Bin and the Trash: your undo for deleting", body:[
      "When you delete a file normally, it isn’t destroyed at once. It moves to the [[recycle-bin]] (Windows) or **Trash** (macOS, ChromeOS), so you can get it back.",
      {table:[
        ["Where","How to get it back","When it’s gone for good"],
        ["Windows Recycle Bin","Open Recycle Bin, right-click the file → **Restore**","When you empty the bin, when it fills up, or after a period if Storage Sense is set to clean it"],
        ["macOS Trash","Open Trash in the Dock, select the file → **File → Put Back**","When you empty Trash, or after 30 days if you turned on that option"],
        ["ChromeOS Trash","Files app → **Trash**, select → **Restore from trash**","After 30 days"]
      ]},
      {warn:"Some deletions skip the bin. On Windows, files deleted from many USB sticks and network drives, and anything deleted with [[kbd:Shift]] + [[kbd:Delete]], are removed immediately. On a Mac, **Delete Immediately** does the same. Cloud services have their own separate bins (Lesson 5)."},
      {key:"The bin is a safety net for mistakes in the last few days, not a storage place. It doesn’t protect against a lost, stolen or broken device."}
    ]}
   ],
   try:[
    {id:"t1u2-l2-x1", type:"order", q:"Put the parts of this Windows path in order, from the top of the tree down to the file.", items:[
      {t:"C:\\", why:"The drive letter is the root on Windows: every path on that drive starts here."},
      {t:"Users", why:"The folder that holds every person’s home folder."},
      {t:"Priya", why:"Priya’s home folder, named after her user account."},
      {t:"Documents", why:"A standard folder inside her home folder."},
      {t:"Garden club", why:"A subfolder she made inside Documents."},
      {t:"minutes.docx", why:"The file itself comes last: it’s the leaf at the end of the route."}
    ]},
    {id:"t1u2-l2-x2", type:"mcq", q:"Hana drags `thesis.docx` from her laptop’s Documents folder onto her USB stick. What is now true?", options:[
      {t:"There are two copies: one on the laptop and one on the stick", ok:true, why:"Dragging to a different drive copies by default. The original stays in Documents."},
      {t:"The file has moved; it’s now only on the stick", why:"That’s what happens when you drag within the same drive. Between drives, the default is to copy."},
      {t:"Only a shortcut was put on the stick", why:"Dragging copies the actual file. A shortcut is only made if you ask for one (for example, holding Alt on Windows)."},
      {t:"The stick now syncs with the laptop automatically", why:"Copying is a one-time action. If Hana edits the laptop copy, the stick copy won’t change."}
    ]},
    {id:"t1u2-l2-x3", type:"sort", q:"Does each action move the file (one copy, new place) or copy it (original stays)?", buckets:["Moves","Copies"], items:[
      {t:"Dragging a file into another folder on the same drive", b:0, why:"Same drive, so the default is move."},
      {t:"Dragging a file onto an external drive", b:1, why:"Different drive, so the default is copy."},
      {t:"Ctrl + X, then Ctrl + V on Windows", b:0, why:"X is cut: the file leaves its old place when you paste."},
      {t:"Ctrl + C, then Ctrl + V", b:1, why:"C is copy: the original stays."},
      {t:"Holding Option while dragging in Finder on a Mac", b:1, why:"Option forces a copy, even within the same drive. A green plus sign appears."},
      {t:"Cmd + C, then Option + Cmd + V on a Mac", b:0, why:"Adding Option at paste time turns the copy into a move."}
    ]},
    {id:"t1u2-l2-x4", type:"mcq", q:"Which of these is a correctly written macOS path?", options:[
      {t:"`/Users/sione/Pictures/2026/fale.jpg`", ok:true, why:"Starts at the root `/`, uses forward slashes, and runs from Users to the home folder to the file."},
      {t:"`C:\\Users\\sione\\Pictures\\fale.jpg`", why:"That’s a Windows path: drive letter and backslashes."},
      {t:"Users > sione > Pictures > fale.jpg", why:"That’s a breadcrumb, the way some apps display a location, not a path a program can use."},
      {t:"`sione/Pictures:fale.jpg`", why:"It doesn’t start at the root and mixes in a colon, which isn’t a folder separator."}
    ]},
    {id:"t1u2-l2-x5", type:"mcq", q:"Dmitri has a shortcut on his desktop to `Budget 2026.xlsx`, which lives in Documents. He deletes the shortcut. What happens to the spreadsheet?", options:[
      {t:"Nothing; deleting a shortcut only removes the pointer", ok:true, why:"A shortcut is a signpost, not the file. The spreadsheet is still in Documents."},
      {t:"The spreadsheet goes to the Recycle Bin too", why:"Only the shortcut file goes to the bin. The real file is separate."},
      {t:"The spreadsheet is deleted permanently", why:"Deleting a shortcut never deletes its target."},
      {t:"The spreadsheet moves to the desktop", why:"Nothing moves; the shortcut just pointed at it."}
    ]},
    {id:"t1u2-l2-x6", type:"match", q:"Match each place to what it’s best used for.", pairs:[
      ["Downloads","A landing spot to sort out regularly","Browsers save here by default; move things on to where they belong."],
      ["Documents","Organized subfolders for lasting work","The standard home for your own files."],
      ["Desktop","Today’s work only","Visible all the time, so it quickly becomes cluttered."],
      ["Recycle Bin / Trash","Undoing a recent deletion","Deleted files wait here until emptied, so you can restore them."],
      ["Home folder","The folder that holds all your personal folders","Named after your user account; Documents, Desktop and Downloads live inside it."]
    ]},
    {id:"t1u2-l2-x7", type:"mcq", q:"Lucía deletes a folder of photos from a USB stick on her Windows laptop, then realizes she needed them. She opens the Recycle Bin. What will she most likely find?", options:[
      {t:"The photos aren’t there; deletions from many USB sticks skip the Recycle Bin", ok:true, why:"Windows usually deletes removable-drive files immediately. Her best hope is another copy elsewhere, which is why backups matter."},
      {t:"The photos, ready to restore", why:"That’s true for the laptop’s own drive, but files on most USB sticks bypass the bin on Windows."},
      {t:"A shortcut to the photos", why:"The Recycle Bin holds deleted files, not shortcuts to them."},
      {t:"The photos, but only for 24 hours", why:"There’s no 24-hour rule here; they never went to the bin at all."}
    ]}
   ],
   apply:{intro:"Find your way around your own folders.", tasks:[
    {t:"Find your home folder and copy one file’s path", how:{
      win:["Open **File Explorer**. Click in the address bar and type `%USERPROFILE%`, then press [[kbd:Enter]] to open your home folder.","Open **Documents**, right-click any file and choose **Copy as path**.","Paste it into a note ([[kbd:Ctrl]] + [[kbd:V]]) and read it from left to right."],
      mac:["Open **Finder** and press [[kbd:Shift]] + [[kbd:Cmd]] + [[kbd:H]] to open your home folder.","Choose **View → Show Path Bar** to see the route at the bottom.","Control-click a file, hold [[kbd:Option]], choose **Copy … as Pathname**, and paste it into a note."],
      chromeos:["Open **Files**. Click **My files**, then **Downloads**.","Open any subfolder and look at the breadcrumb trail at the top.","Write the route down as a path, for example My files › Downloads › …"],
      phone:["iPhone: open **Files → Browse** and tap through **On My iPhone** or **iCloud Drive**; the folder names at the top show where you are.","Android: open **Files by Google** (or your maker’s file app, such as **My Files**) and browse **Internal storage**; the path appears at the top on most phones."]}},
    {t:"Clear out your Downloads folder", how:["Open Downloads and sort by **Date modified**, newest first.","For each file: move it to a proper folder, or delete it if you no longer need it.","Leave anything you’re unsure about in a new folder called `to-sort` and come back to it this week."]},
    {t:"Delete and restore a test file", how:{
      win:["Make a test file, then delete it.","Open **Recycle Bin** on the desktop, right-click the file and choose **Restore**."],
      mac:["Make a test file and drag it to the **Trash**.","Click **Trash** in the Dock, select the file and choose **File → Put Back**."],
      chromeos:["Make a test file in **My files** and delete it.","In **Files**, open **Trash**, select the file and choose **Restore from trash**."],
      phone:["iPhone: delete a test file in **Files**, then go to **Browse → Recently Deleted** and tap **Recover**.","Android: in **Files by Google**, deleted items go to **Trash** (open the menu to find it) on many phones; names vary by maker."]}}
   ], proof:"You can say the path to one of your files, your Downloads folder is sorted, and you have restored a deleted file yourself."},
   read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Using and Organizing Folders and Files” (What Is a Folder?, Moving and Deleting a File, Recovering a File)"},{book:"ics", where:"Chapter 6, Section 6.5 “File Systems”", note:"Explains directories and how an operating system looks up a file by its path."}]
  },
  /* ───────────────────────── LESSON 3 ───────────────────────── */
  {id:"t1u2-l3", title:"Naming and organizing", minutes:50,
   goals:["Name files so they sort in date and version order and make sense to others","Use ISO 8601 dates and zero-padded version numbers","Set up a simple folder structure for a project, a household or a small business","Decide when tags help more than folders"],
   learn:[
    {h:"Why names matter more than you think", body:[
      {lead:"Picture a folder holding `report.docx`, `report final.docx`, `report final FINAL.docx`, `report final FINAL (2).docx` and `Copy of report final v2 USE THIS.docx`."},
      "Which one went to the funder? Nobody knows, including the person who made them. This mess has a name among librarians and researchers — the “final_FINAL problem” — and it costs real time: re-sending the wrong version, redoing work, losing track of what was agreed.",
      "Good names fix most of it, and they cost nothing. Research data managers at universities have worked out a set of habits that apply just as well to a family’s tax papers or a café’s invoices. This lesson teaches those habits. They come from guidance such as The Turing Way (a community handbook for research), Data Carpentry and Library Carpentry lessons, and university library research-data guides (for example at Boston University and the University of British Columbia).",
      {key:"A good file name answers three questions without opening the file: **what is it, when is it from, and which version is it?**"}
    ]},
    {h:"Three qualities of a good name", body:[
      "The guidance boils down to three qualities.",
      {list:[
        "**Readable by people.** The name says what the file contains, in words you’ll still understand next year: `garden-club_budget` beats `gcb` or `stuff`.",
        "**Readable by machines.** No spaces, no special characters, no accents, and a consistent separator, so every app, website and operating system handles the name without errors. (Spaces become `%20` in web links; some characters are banned on Windows.)",
        "**Sorts in a useful order.** Files listed alphabetically by name should land in date or version order automatically. That’s achieved by putting dates in the right format at the start, and by padding numbers with zeros."
      ]},
      "None of these require special software. They are habits — and the more people in a team share them, the more they help."
    ]},
    {h:"Dates: write them as YYYY-MM-DD", body:[
      "Is `03-04-2026` the 3rd of April or the 4th of March? It depends which country you’re in. The international standard [[iso-8601]] removes the doubt: **year, then month, then day, with leading zeros**: `2026-04-03`. Many research guides also accept the compact form `20260403`; pick one and stick to it.",
      "ISO dates have a second, magical property: when sorted as plain text, they also sort **in time order**, because the biggest unit comes first.",
      {table:[
        ["Names written day-month-year","…sorted by name","Names written ISO 8601","…sorted by name"],
        ["15-01-2026_minutes","02-03-2026_minutes","2026-01-15_minutes","2025-11-30_minutes"],
        ["02-03-2026_minutes","15-01-2026_minutes","2026-03-02_minutes","2026-01-15_minutes"],
        ["30-11-2025_minutes","30-11-2025_minutes","2025-11-30_minutes","2026-03-02_minutes"]
      ]},
      "On the left, sorting jumbles the years. On the right, the order is the timeline.",
      {tip:"Put the date at the **start** of the name when time order matters most (meeting notes, invoices, photos of an event). Put the topic first when you mostly browse by subject, and the date later."}
    ]},
    {h:"Versions: numbers with leading zeros, not “final”", body:[
      "“Final” is a promise the future rarely keeps. Instead, number your versions: `v01`, `v02`, `v03`. When something truly is the agreed version, record that somewhere sturdier than the name — a note in the document, a folder called `submitted`, or a dated copy such as `2026-05-30_grant-application_v07_submitted.pdf`.",
      "Why the leading zero? Many programs sort names **character by character**, like a dictionary. They compare `v1` and `v10` one character at a time: `v`, then `1`, then `0` versus nothing. So the list comes out as `v1, v10, v11, v2, v3`. With zero-padding — `v01, v02 … v10, v11` — every program sorts correctly.",
      {ex:"Character-by-character sort:   plan_v1  plan_v10  plan_v11  plan_v2  plan_v3\nWith leading zeros:             plan_v01  plan_v02  plan_v03  plan_v10  plan_v11", label:"Worked example", mono:true},
      "To be precise: Windows File Explorer and macOS Finder are clever and sort numbers inside names by value, so `v2` appears before `v10` there. But websites, cloud upload lists, scripts, zip listings and many other tools don’t. Pad with zeros and the order is right everywhere.",
      "How many zeros? Enough digits for the biggest number you expect. Up to 99 versions needs two digits (`v01`–`v99`); up to 999 needs three (`v001`).",
      {tip:"Cloud services and Office apps keep **version history** automatically (Lesson 5). Version numbers in names are still useful when you send a file to someone else, because the history doesn’t travel with an attachment."}
    ]},
    {h:"Characters to avoid, and what to use instead", body:[
      {table:[
        ["Avoid","Why","Use instead"],
        ["Spaces","Break some links, scripts and older apps; web links turn them into %20","Hyphens `-` or underscores `_`"],
        ["`/ \\ : * ? \" < > |`","Banned on Windows or used as separators; can cause errors or lost files","Remove them"],
        ["`& $ # % ! @ ( ) [ ] { }` and similar","Have special meanings in web addresses and software","Remove them"],
        ["Accented and non-Latin letters (é, ñ, ü…)","Usually fine on modern systems but can garble when moving between systems","Plain letters, if the files will be shared widely"],
        ["Very long names","Paths have length limits on some systems; long names get cut off on screen","Keep names short but meaningful, around 25–40 characters"]
      ]},
      "A common convention: use **underscores to separate the parts** of a name (date, project, description, version) and **hyphens to join words within a part**: `2026-03-04_food-bank_volunteer-rota_v02.xlsx`. Some people prefer CamelCase (`VolunteerRota`). What matters most is consistency.",
      {fig:'<svg viewBox="0 0 340 228"><text x="170" y="22" text-anchor="middle">Anatomy of a well-made file name</text><rect class="d-gold" x="36.8" y="38" width="103.9" height="40" rx="8" stroke-width="2"/><text x="88.8" y="63" text-anchor="middle">2026-03-04</text><text x="147.3" y="63" text-anchor="middle">_</text><rect class="d-lup" x="153.9" y="38" width="94.4" height="40" rx="8" stroke-width="2"/><text x="201.2" y="63" text-anchor="middle">food-bank</text><text x="255" y="63" text-anchor="middle">_</text><text class="s" x="88.8" y="96" text-anchor="middle">when (ISO 8601)</text><text class="s" x="201.2" y="96" text-anchor="middle">project</text><rect class="d-sage" x="36.8" y="110" width="132.2" height="40" rx="8" stroke-width="2"/><text x="102.9" y="135" text-anchor="middle">volunteer-rota</text><text x="175.7" y="135" text-anchor="middle">_</text><rect class="d-rose" x="182.3" y="110" width="51" height="40" rx="8" stroke-width="2"/><text x="207.8" y="135" text-anchor="middle">v02</text><rect class="d-soft" x="237.1" y="110" width="66.1" height="40" rx="8" stroke-width="2"/><text x="270.1" y="135" text-anchor="middle">.xlsx</text><text class="s" x="102.9" y="168" text-anchor="middle">what it is</text><text class="s" x="207.8" y="168" text-anchor="middle">version</text><text class="s" x="270.1" y="168" text-anchor="middle">format</text><text class="s" x="170" y="196" text-anchor="middle">underscores between parts</text><text class="s" x="170" y="214" text-anchor="middle">hyphens inside a part · no spaces</text></svg>', alt:"The name 2026-03-04_food-bank_volunteer-rota_v02.xlsx split over two rows into five labelled boxes: the date in ISO 8601 format, the project, a description, the version number with a leading zero, and the extension showing the format.", cap:"Each part answers a question. Underscores separate the parts; hyphens join words inside a part."}
    ]},
    {h:"A simple folder structure", body:[
      "Names do most of the work, but folders give everything a home. A good structure is **shallow** (three or four levels at most), **predictable** (the same pattern for every project or year) and **boring**. Here is a pattern used widely in research projects, which works just as well for a community event or a client job:",
      {ex:"2026_food-bank-survey/\n  00_README.txt          ← what this project is, what codes in names mean\n  01_admin/              ← plans, emails saved as PDF, budgets\n  02_raw-data/           ← original data, never edited\n  03_working/            ← drafts and analysis in progress\n  04_outputs/            ← finished reports, slides, figures\n  99_archive/            ← old versions you might need one day", label:"Worked example: one project", mono:true},
      "The numbers at the front keep the folders in a sensible order instead of alphabetical. The `README` file is a short plain-text note explaining the project and any abbreviations — the single most useful thing you can leave for a colleague or your future self.",
      {ex:"Home/\n  Household/\n    2026_bills/   2026_tax/   insurance/   medical/\n  Photos/\n    2025/\n      2025-08-12_lake-trip/\n      2025-12-25_family-dinner/\n    2026/", label:"Worked example: at home", mono:true},
      "Photos sort neatly by year, then by dated event. A small business might use `Clients/<client-name>/<YYYY>_<job>/`, with invoices named `2026-03-04_invoice_0147.pdf` so the numbers stay in order.",
      {tip:"Don’t reorganize everything at once. Start new work in the new structure, and move old files over only when you touch them."}
    ]},
    {h:"Tags vs folders", body:[
      "A folder puts a file in **one** place. Life isn’t always that tidy: a photo of grandmother at the beach belongs in both “Grandma” and “Beach 2025”. Copying it into two folders creates two files that drift apart (crop one, and the other stays uncropped).",
      "**Tags** (also called labels or keywords) solve this: a file stays in one folder but carries several tags, and you can list everything with a given tag. Examples: Finder tags on a Mac, labels in Gmail, albums and people in photo apps, and tags in note-taking apps. A [[shortcut]] or alias is another way to make one file appear in two places.",
      {table:[
        ["","Folders","Tags"],
        ["A file can be in…","One place","Many groups at once"],
        ["Works everywhere?","Yes, every system and every copy","Often only inside one app or system; may be lost when files are copied elsewhere"],
        ["Best for","The main structure: by project, year or client","Cross-cutting themes: people, status (“to review”), topics"]
      ]},
      {key:"Use folders for the skeleton and names for the detail. Add tags for themes that cut across folders — but don’t rely on tags alone if the files will be moved, shared or backed up somewhere else."}
    ]}
   ],
   try:[
    {id:"t1u2-l3-x1", type:"spot", q:"This is a shared folder on a community project. Tap the parts of the file names that break good naming practice.", ask:"breaks good naming practice", mono:true, parts:[
      {t:"2026-03-04", flag:false, why:"An ISO 8601 date: unambiguous and sorts in time order."},
      "_survey-results_",
      {t:"v03", flag:false, why:"A version number with a leading zero sorts correctly everywhere."},
      ".csv\n",
      "report ",
      {t:"final FINAL (2)", flag:true, why:"The final_FINAL problem: nobody can tell which version is which. Use version numbers and record the agreed one separately. It also has spaces and brackets."},
      ".docx\n",
      "minutes ",
      {t:"03-04-26", flag:true, why:"Ambiguous date: 3 April or 4 March? Two-digit years add more doubt. Use 2026-04-03 (or whichever is meant) in ISO 8601 form."},
      ".docx\n",
      {t:"Copy of ", flag:true, why:"An automatic name that says nothing about why the copy exists. Rename it to say what it is, or delete it."},
      "budget.xlsx\n",
      {t:"what-do-you-think?", flag:true, why:"The question mark is banned in Windows file names and has a special meaning in web addresses. The name also doesn’t say what the file is."},
      ".docx\n",
      "2026-02-11_",
      {t:"food-bank", flag:false, why:"A clear project name, with a hyphen joining the words: readable by people and machines."},
      "_rota_v01.xlsx"
    ]},
    {id:"t1u2-l3-x2", type:"mcq", q:"Kenji saved 12 drafts named `plan_v1.docx` to `plan_v12.docx`. He uploads them to a website that sorts names character by character. What appears directly after `plan_v1.docx`?", options:[
      {t:"plan_v10.docx", ok:true, why:"Character by character, “v1” followed by “0” comes before “v2”. Naming them v01–v12 would fix it."},
      {t:"plan_v2.docx", why:"That’s numeric order, which Windows File Explorer and macOS Finder use — but this site compares one character at a time, so v10, v11 and v12 come first."},
      {t:"plan_v12.docx", why:"After “plan_v1” the next character decides. “0” comes before “1” and “2”, so v10 is first."},
      {t:"plan_v11.docx", why:"v10 comes before v11, because “0” sorts before “1”."}
    ]},
    {id:"t1u2-l3-x3", type:"number", q:"A lab will save up to 250 numbered samples, named like `sample_001`. What is the smallest number of digits that keeps every number the same length?", answer:3, tol:0, unit:"digits", why:"The largest number, 250, has three digits, so every number needs three: 001 to 250. Then character-by-character sorting matches numeric order.", wrongs:[
      {v:2, tol:0, why:"Two digits only reach 99. Sample 100 would have three digits and sort between 10 and 11."},
      {v:4, tol:0, why:"Four digits (0001) work, but they aren’t the smallest that does. Three are enough for up to 999."},
      {v:250, tol:0, why:"250 is the number of samples, not the number of digits. Count the digits in 250."}
    ], hint2:"Count the digits in the biggest number you’ll need."},
    {id:"t1u2-l3-x4", type:"mcq", q:"Fatima needs to name the minutes of the residents’ association meeting held on 9 February 2026, second draft. Which name follows the guidance best?", options:[
      {t:"`2026-02-09_residents-assoc_minutes_v02.docx`", ok:true, why:"ISO date first, clear project and content, padded version number, no spaces or special characters."},
      {t:"Minutes 9 Feb (draft 2).docx", why:"Spaces and brackets, a date that won’t sort, and “draft 2” without a leading zero."},
      {t:"`09-02-2026_minutes_v2.docx`", why:"Day-month-year is ambiguous internationally and doesn’t sort in time order; v2 needs a leading zero."},
      {t:"`residents_association_minutes_final.docx`", why:"No date at all, and “final” will stop being true the moment someone suggests a change."}
    ]},
    {id:"t1u2-l3-x5", type:"sort", q:"Sort these files into the project folders from the lesson.", buckets:["01_admin","02_raw-data","03_working","04_outputs"], items:[
      {t:"The funding agreement, saved as PDF", b:0, why:"Agreements, plans and budgets are admin."},
      {t:"The survey responses exactly as downloaded", b:1, why:"Original data goes in raw-data and is never edited, so you can always start again."},
      {t:"A spreadsheet where you are cleaning the survey data", b:2, why:"Work in progress belongs in working, separate from the untouched original."},
      {t:"The final report sent to the community board", b:3, why:"Finished, shared products go in outputs."},
      {t:"A draft chart you’re still adjusting", b:2, why:"Still changing, so it’s working material. Once final, a copy goes to outputs."},
      {t:"The project budget", b:0, why:"Budgets are admin."}
    ]},
    {id:"t1u2-l3-x6", type:"order", q:"Build a name following the recipe in this lesson. Put the parts in the recommended order.", items:[
      {t:"2026-05-30", why:"The ISO 8601 date goes first, so files sort into time order."},
      {t:"grant-application", why:"Next, the project or subject."},
      {t:"budget", why:"Then what this particular file is."},
      {t:"v07", why:"The padded version number goes near the end, so versions of the same file sit together."},
      {t:".xlsx", why:"The extension always comes last; it’s added by the app when you save."}
    ]},
    {id:"t1u2-l3-x7", type:"mcq", q:"Lucía has a photo of her grandmother at the beach. She wants to find it when browsing “Grandma” and when browsing “Beach 2025”. What’s the best approach?", options:[
      {t:"Keep it in one folder and give it two tags (or put it in two albums in her photo app)", ok:true, why:"One file, many groups. Edits show up everywhere, and there’s no duplicate to drift apart."},
      {t:"Copy it into both folders", why:"Two separate files: crop or rotate one and the other stays unchanged, and backups store it twice."},
      {t:"Rename it to “Grandma Beach 2025” so search finds it", why:"A good name helps search, but it doesn’t put the photo in two browsing groups. Spaces in the name also break naming practice."},
      {t:"Put the Beach 2025 folder inside the Grandma folder", why:"Then every beach photo, even of other people, is filed under Grandma. Folders can’t express “belongs to both”."}
    ]}
   ],
   apply:{intro:"Put the naming rules to work on something real.", tasks:[
    {t:"Rename five of your own files using the recipe", how:{
      win:["In **File Explorer**, select a file and press [[kbd:F2]].","Type a new name such as `2026-03-04_topic_description_v01`. Change only the part before the dot."],
      mac:["In **Finder**, select a file and press [[kbd:Return]].","Type the new name, leaving the extension as it is."],
      chromeos:["In **Files**, select a file and press [[kbd:Ctrl]] + [[kbd:Enter]].","Type the new name and press [[kbd:Enter]]."],
      phone:["iPhone: in **Files**, touch and hold the file → **Rename**.","Android: in **Files by Google** (or **My Files**), tap the three dots on the file → **Rename**."]}},
    {t:"Set up one project or household folder structure", how:["Choose one real area: a project, a year of household papers, a club, or a client.","Create a top folder and three to five numbered subfolders (for example `01_admin`, `02_working`, `03_final`).","Add a `00_README.txt` with two or three sentences on what goes where.","Move the files that belong there into it."]},
    {t:"Try a tag (optional)", how:{
      mac:["In **Finder**, Control-click a file → choose a coloured tag, or **Tags…** to type one.","Click the tag in the Finder sidebar to see everything with it."],
      win:["Windows lets you add **Tags** to some file types (such as photos and Office files): right-click → **Properties** → **Details** → **Tags**.","Search for `tags:yourword` in File Explorer to find them."],
      chromeos:["ChromeOS Files doesn’t have tags. Use albums in Google Photos, or labels in other apps, instead."],
      phone:["Use albums in your photo app (Photos on iPhone, Google Photos or your maker’s gallery on Android) to group pictures without copying them."]}}
   ], proof:"Five files follow the naming recipe, and one area of your life has a simple numbered folder structure with a README."},
   read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Best Practices in Using and Organizing Folders and Files” and “Tips for Organizing and Maintaining Files”"}]
  },
  /* ───────────────────────── LESSON 4 ───────────────────────── */
  {id:"t1u2-l4", title:"The cloud and sync", minutes:55,
   goals:["Explain what cloud storage physically is and how sync keeps copies identical","Tell online-only files from files stored on your device","Share with the right people and the right permission level","Recognize and resolve a sync conflict, and keep an eye on your storage limit"],
   learn:[
    {h:"What “the cloud” physically is", body:[
      {lead:"“The cloud” sounds weightless. It isn’t. It is buildings full of computers."},
      "When you save a file to [[cloud-storage]] such as Google Drive, iCloud Drive, OneDrive or Dropbox, it travels over the internet to a company’s **data centres**: large warehouses of servers with their own power supplies, cooling and security guards. The provider usually keeps several copies across different machines, and often different buildings, so one broken disk doesn’t lose your file.",
      "A fair short definition: the [[cloud]] is **someone else’s computers, which you rent or borrow through the internet**. That brings real benefits and real trade-offs:",
      {table:[
        ["Benefit","Trade-off"],
        ["Reach your files from any device, anywhere with internet","No internet (or a service outage) can mean no access to files that aren’t also on your device"],
        ["A lost or broken laptop doesn’t take your files with it","You depend on your account: lose the password and recovery options, and you may lose the files"],
        ["Easy sharing with other people","Sharing mistakes can expose files to the wrong people"],
        ["The provider handles hardware failures","You agree to the provider’s terms, prices and storage limits, which can change"]
      ]},
      {key:"Cloud storage is a convenient, well-protected place for files. It is still just *one* place, controlled by *one* account. Lesson 5 shows why that matters."}
    ]},
    {h:"How sync works", body:[
      "Most people use cloud storage through **[[sync]]**: an app on each device keeps a local folder and the cloud copy identical. Change a file on your laptop and the app uploads the change; your phone and other computers then download it. It’s like a team of assistants who watch every copy and update the others whenever one changes.",
      {fig:'<svg viewBox="0 0 340 322"><defs><marker id="t1u2-l4-mk" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path class="d-inkf" d="M0,0 L8,4 L0,8 z"/></marker></defs><rect class="d-lup" x="89.7" y="10" width="160.6" height="70" rx="30" stroke-width="2"/><text x="170" y="40" text-anchor="middle">Cloud copy</text><text class="s" x="170" y="60" text-anchor="middle">provider’s data centre</text><rect class="d-sage" x="9.4" y="170" width="132.2" height="60" rx="8" stroke-width="2"/><text x="75.6" y="196" text-anchor="middle">Laptop</text><text class="s" x="75.6" y="215" text-anchor="middle">local copy</text><rect class="d-sage" x="198.3" y="170" width="132.2" height="60" rx="8" stroke-width="2"/><text x="264.4" y="196" text-anchor="middle">Phone</text><text class="s" x="264.4" y="215" text-anchor="middle">local copy</text><path class="d-ink" d="M85,167 L120.9,86" stroke-width="2" fill="none" marker-end="url(#t1u2-l4-mk)"/><text class="s" x="90.7" y="122" text-anchor="end">1 upload</text><text class="s" x="90.7" y="138" text-anchor="end">change</text><path class="d-ink" d="M219.1,84 L255,165" stroke-width="2" fill="none" marker-end="url(#t1u2-l4-mk)"/><text class="s" x="249.3" y="122">2 download</text><text class="s" x="249.3" y="138">change</text><rect class="d-rose" x="28.3" y="246" width="283.3" height="66" rx="8" stroke-width="2"/><text x="170" y="270" text-anchor="middle">Edits, renames and deletions</text><text class="s" x="170" y="292" text-anchor="middle">all travel the same way</text></svg>', alt:"A laptop and a phone each hold a local copy. A change on the laptop is uploaded to the cloud copy (step 1), then downloaded to the phone (step 2). A note says edits, renames and deletions all travel the same way.", cap:"Sync copies every change — including mistakes and deletions — to every device."},
      "Three consequences follow from this design:",
      {list:[
        "**Changes appear everywhere** — which is the point.",
        "**Deletions appear everywhere too.** Delete a file on your phone and it disappears from your laptop. If [[ransomware]] scrambles the files on your laptop, sync can upload the scrambled versions.",
        "**Sync needs the app to be running and the device to be online.** A laptop that has been off for a week will catch up when it next connects; until then, the copies differ."
      ]},
      "Your cloud app shows sync status with small icons: a cloud, a tick, circling arrows for “syncing now”, or a red cross or warning for “something’s wrong”. Learning your app’s icons is worth five minutes."
    ]},
    {h:"Online-only files: when the file isn’t really there", body:[
      "To save space on your device, modern sync apps can keep some files **only in the cloud**, showing a placeholder that looks like the file. Open it and it downloads on the spot. This is often called [[files-on-demand]]. Each service names it differently:",
      {table:[
        ["Service","Online-only","Always on this device"],
        ["OneDrive (Windows)","Blue cloud icon; right-click → **Free up space**","Green circle with white tick; right-click → **Always keep on this device**"],
        ["iCloud Drive (Mac)","With **Optimize Mac Storage** on, older files stay in iCloud; Control-click → **Remove Download**","Control-click → **Keep Downloaded** (macOS Sequoia and later), or **Download Now** for a one-off"],
        ["Google Drive for desktop","**Stream files** setting: files mostly in the cloud","**Mirror files** setting: a full copy on your computer"],
        ["ChromeOS Files (Google Drive)","Default for Drive files","Select a file → turn on **Available offline**"]
      ]},
      {warn:"Deleting an online-only placeholder doesn’t just free space — Microsoft’s documentation is explicit that it deletes the file **from your cloud and all your devices**. To free space safely, use **Free up space** or **Remove Download**, never Delete."},
      {tip:"Before a flight or a trip with poor internet, mark the folders you need as always available offline. Online-only files can’t be opened without a connection."}
    ]},
    {h:"Sharing: inviting people vs sharing a link", body:[
      "Cloud storage makes sharing easy, so it’s worth being deliberate. There are two basic methods.",
      {list:[
        "**Invite specific people.** You type their email addresses. Only they can open the file, usually after signing in, and you can see exactly who has access.",
        "**Share a link.** You copy a [[sharing-link]] and send it. Who can use it depends on the link setting. Google Drive’s main choices are **Restricted** (only people already given access) or **Anyone with the link**. OneDrive offers **Anyone**, **People in your organization**, **People with existing access** or **Specific people** (organization options appear in work and school accounts)."
      ]},
      {key:"An “Anyone with the link” link works like a house key: whoever holds it can get in, without signing in and without you knowing who they are."}
    ]},
    {h:"Permissions: view, comment, edit", body:[
      "[[permissions]] say what each person may do. The names differ slightly between services, but the levels are the same idea:",
      {table:[
        ["Level","Can do","Good for"],
        ["Viewer (can view)","Open and read; often download, print and copy unless you turn that off","Final versions, information to read"],
        ["Commenter (or review mode)","Read and add comments or suggestions, but not change the content","Getting feedback while you keep control"],
        ["Editor (can edit)","Change, delete content and usually reshare with others","Real co-authors"]
      ]},
      "Give the **lowest level that does the job**. In Google Drive, editors can also share the file and change permissions by default, so “edit” hands over more than people expect. Google’s help notes that the file owner can turn off reshare and downloads.",
      {ex:"Sione’s sports club budget needs feedback from five committee members, but only the treasurer should change it.\n→ Invite the five by email as Commenters; invite the treasurer as Editor.\n→ Don’t post an “Anyone with the link can edit” link in the club’s group chat.", label:"Worked example"}
    ]},
    {h:"The risks of “anyone with the link”", body:[
      "Link sharing is convenient and fine for things that aren’t sensitive: a flyer, a public reading list, holiday photos for friends. For anything personal, it carries risks people underestimate:",
      {list:[
        "**Links get forwarded.** A message is passed on, pasted into a group chat, or posted publicly. The link still works for whoever ends up with it.",
        "**There’s no sign-in.** Google notes that people who aren’t signed in appear anonymously, so you can’t tell who opened it.",
        "**Your name shows.** Google warns that anyone who opens a link you shared can see your name and email as the owner.",
        "**Links last.** A link shared years ago may still work today unless you removed it.",
        "**Folder links include everything.** Sharing a folder shares every file you later add to it."
      ]},
      {tip:"Some services let you add an **expiry date** or **password** to a link (on OneDrive, for Microsoft 365 subscribers). Use them when available. To stop sharing, open the file’s sharing settings or **Manage access**, and remove the link or the person."},
      {warn:"Never share passport scans, medical records, tax files or anything with ID numbers through an “anyone” link. Invite specific people instead."}
    ]},
    {h:"Sync conflicts", body:[
      "A [[sync-conflict]] happens when the same file is changed in two places before sync can compare them — for example, Amara edits the shopping list on her laptop on a train with no signal, while her partner edits it on the home computer. When the laptop reconnects, which version wins?",
      "Sync apps don’t guess. They usually **keep both**, renaming one copy — often by adding the device’s name or the word “conflict” — so no work is lost. You then have to compare and merge them by hand.",
      {ol:["Open both copies side by side.","Copy anything missing from one into the other.","Keep the merged one with the proper name.","Delete the extra copy once you’re sure."]},
      {tip:"Online editors such as Google Docs, Microsoft 365 on the web and iWork for iCloud let several people edit **one** copy at the same time, which avoids most conflicts. Working offline on shared files is where conflicts come from."}
    ]},
    {h:"Storage limits", body:[
      "Every cloud account has a [[storage-quota]]. Free tiers at the time of writing: Google gives **15 GB** per account, **shared** across Gmail, Google Drive and Google Photos; Apple gives **5 GB** of iCloud storage, which also holds iPhone backups and iCloud Photos; Microsoft gives **5 GB** of OneDrive storage. Paid plans offer more. Check your provider’s current plans; they change.",
      "When you hit the limit, new files stop uploading or syncing, and with Google your email can be affected too because it shares the same space. You’ll see warnings first. Your options: delete large files you don’t need (videos are usually the biggest), empty the cloud bin (deleted files often still count), move old material to an external drive, or pay for more.",
      {tip:"Look at what uses your space before paying: Google One storage, iPhone **Settings → [your name] → iCloud**, and OneDrive’s storage page each show a breakdown."}
    ]}
   ],
   try:[
    {id:"t1u2-l4-x1", type:"mcq", q:"Which description of cloud storage is most accurate?", options:[
      {t:"Your files stored on a company’s servers in data centres, reached over the internet", ok:true, why:"The cloud is physical: buildings of computers run by a provider."},
      {t:"Files stored in the air between devices, using Wi-Fi", why:"Wi-Fi only carries data to the internet; the files have to live on some computer’s storage."},
      {t:"A part of your own hard drive set aside for sharing", why:"A sync app keeps a local copy on your drive, but the cloud copy itself is on the provider’s servers."},
      {t:"A backup that can never be lost", why:"Providers protect against hardware failure, but you can still lose files by deleting them, through sync mistakes, or by losing account access."}
    ]},
    {id:"t1u2-l4-x2", type:"sort", q:"Could Mei open each file on her laptop with no internet connection?", buckets:["Yes, works offline","No, needs internet"], items:[
      {t:"A OneDrive file showing a blue cloud icon", b:1, why:"The blue cloud means online-only: only a placeholder is on the laptop."},
      {t:"A OneDrive file she marked “Always keep on this device”", b:0, why:"Pinned files are kept on the device, shown with a solid green circle and white tick."},
      {t:"Her Google Drive files with “Mirror files” turned on", b:0, why:"Mirroring keeps a full copy on the computer."},
      {t:"A Google Drive file she has never opened, with “Stream files” on", b:1, why:"Streamed files are mostly in the cloud until opened or made available offline."},
      {t:"An iCloud Drive file after she chose “Remove Download”", b:1, why:"Remove Download keeps it in iCloud only, freeing space on the Mac."},
      {t:"A file saved in her Documents folder that isn’t synced anywhere", b:0, why:"It’s only on the laptop, so it works offline (but has no cloud copy at all)."}
    ]},
    {id:"t1u2-l4-x3", type:"mcq", q:"Tomás’s laptop is nearly full. He deletes a big OneDrive folder that shows blue cloud icons, thinking it will just free space. What happens?", options:[
      {t:"The folder is deleted from OneDrive and every synced device, not just the laptop", ok:true, why:"Deleting a synced item deletes it everywhere. He should restore it from the OneDrive recycle bin quickly, and use “Free up space” next time."},
      {t:"Nothing useful: online-only files take no space, so deleting them only removes placeholders", why:"Deleting a placeholder isn’t a local-only action. Microsoft states it deletes the file from OneDrive on all devices and online."},
      {t:"The files move to the cloud permanently and disappear from the laptop only", why:"That’s what “Free up space” does. Delete is different."},
      {t:"OneDrive refuses to delete online-only files", why:"It allows it; the deletion syncs like any other."}
    ]},
    {id:"t1u2-l4-x4", type:"match", q:"Match each sharing need to the right permission.", pairs:[
      ["The final school newsletter for every family","Viewer","They need to read it, not change it."],
      ["Feedback on a draft from five committee members","Commenter","They can suggest and comment while you keep control of the text."],
      ["A co-author writing half the report","Editor","They need to change the document itself."],
      ["A passport scan for one travel agent","Invite that one person only, never an “anyone” link","Sensitive documents go only to named people, with the lowest permission they need."]
    ]},
    {id:"t1u2-l4-x5", type:"mcq", q:"Ana shares her family’s medical-insurance folder with “Anyone with the link can view” and sends the link to her sister. What is the main risk?", options:[
      {t:"Anyone who gets the link — through forwarding or a screenshot of the chat — can open the files without signing in", ok:true, why:"An anyone-link is like a house key. Inviting her sister by email would limit access to her sister’s account."},
      {t:"Her sister can delete the files", why:"With view permission, nobody using the link can delete or edit. The risk is who can read them."},
      {t:"The files will be converted to PDF", why:"Sharing doesn’t change files’ formats."},
      {t:"There’s no risk because the link is long and random", why:"Long links are hard to guess, but they’re easy to forward. Most leaks happen through forwarding and posting, not guessing."}
    ]},
    {id:"t1u2-l4-x6", type:"number", q:"Oluwaseun has a free Google Account with 15 GB of storage. Gmail uses 3.2 GB and Google Photos uses 9.5 GB. How much is left for Google Drive files?", answer:2.3, tol:0.05, unit:"GB", why:"The 15 GB is shared across Gmail, Drive and Photos: 15 − 3.2 − 9.5 = 2.3 GB.", wrongs:[
      {v:11.8, tol:0.05, why:"That subtracts only Gmail. Photos uses the same 15 GB too."},
      {v:5.5, tol:0.05, why:"That subtracts only Photos. Gmail also counts against the same shared space."},
      {v:15, tol:0.05, why:"Drive doesn’t get its own 15 GB; the allowance is shared across three services."},
      {v:12.7, tol:0.05, why:"That’s how much is used (3.2 + 9.5). Subtract it from 15 to find what’s left."}
    ]},
    {id:"t1u2-l4-x7", type:"mcq", q:"Hana edits `shopping-list.docx` on her laptop on a train with no signal, while her flatmate edits the same file at home. When the laptop reconnects, Hana sees two files, one with her laptop’s name added. What happened and what should she do?", options:[
      {t:"A sync conflict; the app kept both versions. She should compare them, merge the changes into one, then delete the extra", ok:true, why:"Sync apps keep both rather than silently throwing one away. Merging by hand is the fix; editing online together avoids it."},
      {t:"A virus copied the file; she should delete both", why:"Duplicates with a device name added are the normal sign of a sync conflict, not malware. Deleting both would lose both people’s work."},
      {t:"The cloud is broken; she should stop using sync", why:"This is the expected, safe behaviour when two edits happen apart."},
      {t:"Her version automatically replaced her flatmate’s; she can ignore the extra file", why:"Nothing was merged. Each file holds only one person’s changes, so ignoring the extra one loses work."}
    ]}
   ],
   apply:{intro:"Look at how your own cloud storage behaves.", tasks:[
    {t:"Find your sync status and offline settings", how:{
      win:["Click the **OneDrive** cloud icon in the taskbar’s notification area to see whether files are up to date. (If you use Google Drive for desktop or another app, open its icon instead.)","In File Explorer, open your OneDrive folder and look at the **Status** column: blue cloud, green tick or green circle.","Right-click a folder you need on trips → **Always keep on this device**."],
      mac:["In Finder, select **iCloud Drive** in the sidebar and look for status icons next to items.","Control-click a file → **Keep Downloaded** (macOS Sequoia and later) or **Download Now** for things you need offline.","Optional: open **System Settings → [your name] → iCloud** and look for **Optimize Mac Storage** (on some macOS versions it is inside the **iCloud Drive** or **Drive** settings)."],
      chromeos:["Open **Files** → **Google Drive**.","Select a file or folder you need offline and turn on **Available offline** at the top.","If the option is missing, first tick **Offline** in Google Drive’s settings on the web (drive.google.com, Settings)."],
      phone:["iPhone: open **Files → Browse → iCloud Drive**; a cloud-with-arrow icon means it isn’t downloaded yet.","Android: open **Google Drive**, tap the three dots on a file → **Make available offline**."]}},
    {t:"Check who can see one of your shared files", how:["Open your cloud storage on the web (drive.google.com, onedrive.live.com, or icloud.com).","Find **Shared** (or look for the people icon on files).","Open the sharing settings of one item. Check whether it’s shared with named people or with an “anyone” link.","Remove any “anyone” link that’s no longer needed, and lower permissions that are higher than necessary."]},
    {t:"Check your storage use", how:["Google: visit **one.google.com/storage** while signed in.","iPhone: **Settings → [your name] → iCloud** shows the bar and biggest users.","OneDrive: on the web, select the storage bar in the left pane, or open **Settings** (gear icon) and look for **Storage** or **Manage storage**; the layout changes from time to time.","Note your total, what’s used, and the biggest category."]}
   ], proof:"You know which of your files are online-only, you have reviewed one shared item’s permissions, and you know how full your cloud storage is."},
   read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Google Drive, SharePoint, and OneDrive”"},{book:"wss", where:"Chapter 2, Section 2.6 “Collaboration” — “File Sharing and Transferring” and “Sharing a Document”"},{book:"ics", where:"Background reading: Chapter 6, Section 6.5 “File Systems” — “Distributed File Systems”", note:"How a file system can spread files across many networked computers, the idea underneath cloud storage."}]
  },
  /* ───────────────────────── LESSON 5 ───────────────────────── */
  {id:"t1u2-l5", title:"Backups that actually work", minutes:60,
   goals:["Explain why sync, recycle bins and version history are not complete backups","Apply the 3-2-1 rule to your own situation","Turn on a built-in backup for your computer and phone","Test a restore so you know your backup works"],
   learn:[
    {h:"What a backup is (and what it isn’t)", body:[
      {lead:"The UK’s National Cyber Security Centre defines a [[backup]] as a copy of your important data that’s stored in a separate, safe location. Every word matters: a **copy**, kept **separate**, somewhere **safe**."},
      "Ask yourself: if this laptop or phone were stolen tonight, or dropped in water, or locked by ransomware, what would I lose? Whatever comes to mind — photos of children growing up, a thesis, a business’s invoices, the only copy of a parent’s recipes — needs a backup. The NCSC’s advice is simply to back up anything you value.",
      "Several things *feel* like backups but don’t meet the definition:",
      {table:[
        ["It feels like a backup…","…but","What it’s good for"],
        ["A synced cloud folder","Deletions and damage sync too, within minutes","Reaching files on every device"],
        ["A second copy in another folder on the same drive","One drive failure, theft or spill destroys both","Nothing, as protection"],
        ["The Recycle Bin or Trash","Lives on the same device; emptied after a while","Undoing a recent deletion"],
        ["Version history","Kept for a limited time and within the same account","Undoing a bad edit"],
        ["A USB stick you moved files onto","If you then deleted the originals, there is still only one copy","Carrying files"]
      ]},
      {key:"**Sync is not a backup.** Sync makes copies *identical*, including mistakes. A backup is a copy that *doesn’t* change when the original does, so you can go back."}
    ]},
    {h:"Version history and cloud bins: helpful, but limited", body:[
      "Cloud services do give you two safety nets, and you should know how long each lasts. These were checked against each provider’s help pages in October 2026; **limits vary by plan and can change, so check your own plan**.",
      {table:[
        ["Service","Deleted files (bin)","Earlier versions of a file"],
        ["OneDrive","Personal accounts: 30 days. Work or school: 93 days by default (your administrator can change it)","Version history kept for 30 days; Microsoft 365 subscribers can also roll back the whole OneDrive to any point in the last 30 days"],
        ["Google Drive","Trash is emptied automatically after 30 days","Docs, Sheets and Slides have their own version history; for uploaded files, an old version may be deleted after 30 days or once there are 100 newer versions, unless you choose **Keep forever**"],
        ["iCloud Drive","Recently Deleted keeps files for 30 days; icloud.com also has a Data Recovery page to **Restore Files**","Apps such as Pages and Numbers keep versions; there is no general version history for every file"]
      ]},
      "[[version-history]] is excellent for “I overwrote the good paragraph yesterday.” It is weak against things you notice late (“this photo was deleted four months ago”), against losing access to the account, and against anything that happens to the whole account at once.",
      {tip:"Deleted something from the cloud? Act quickly. Check the cloud bin on the website, not just the bin on your computer: they are separate."}
    ]},
    {h:"The 3-2-1 rule", body:[
      "Backup professionals use a simple test, which the US Cybersecurity and Infrastructure Security Agency (CISA) calls “a trusted guideline”: the [[rule-321]].",
      {list:[
        "**3 copies** of important files — the original plus two backups.",
        "**2 different types of storage** — for example, an [[external-drive]] and the cloud. One kind of failure (a power surge, a provider problem) is unlikely to hit both.",
        "**1 copy off-site** — in a different place from the others, so a fire, flood or burglary can’t take everything. This is an [[offsite-copy]]."
      ]},
      {fig:'<svg viewBox="0 0 340 372"><text x="170" y="22" text-anchor="middle">3 copies · 2 kinds of storage · 1 off-site</text><rect class="d-panel" x="9.4" y="36" width="321.1" height="220" rx="12" stroke-width="2"/><text class="s" x="170" y="56" text-anchor="middle">At home or the office</text><rect class="d-sage" x="20.8" y="68" width="141.7" height="70" rx="8" stroke-width="2"/><text x="91.6" y="98" text-anchor="middle">1 · Original</text><text class="s" x="91.6" y="120" text-anchor="middle">laptop drive</text><rect class="d-gold" x="177.6" y="68" width="141.7" height="70" rx="8" stroke-width="2"/><text x="248.4" y="98" text-anchor="middle">2 · Backup</text><text class="s" x="248.4" y="120" text-anchor="middle">external drive</text><text class="s" x="248.4" y="156" text-anchor="middle">storage type A</text><text class="s" x="248.4" y="172" text-anchor="middle">unplugged when</text><text class="s" x="248.4" y="188" text-anchor="middle">not in use</text><rect class="d-rose" x="20.8" y="204" width="298.4" height="40" rx="6" stroke-width="2"/><text class="s" x="170" y="220" text-anchor="middle">a fire here destroys copies 1 and 2…</text><text class="s" x="170" y="236" text-anchor="middle">but not 3</text><rect class="d-lup" x="89.7" y="270" width="160.6" height="70" rx="30" stroke-width="2"/><text x="170" y="300" text-anchor="middle">3 · Backup</text><text class="s" x="170" y="322" text-anchor="middle">cloud backup</text><text class="s" x="170" y="360" text-anchor="middle">storage type B · off-site</text></svg>', alt:"Three copies: the original on a laptop and a backup on an external drive, both at home; a third copy in a cloud backup, off-site. The external drive and the cloud are two different kinds of storage. A note says a fire at home would destroy copies 1 and 2 but not copy 3.", cap:"The 3-2-1 rule protects against one disaster taking every copy at once."},
      "It scales to any life:",
      {list:[
        "**A family:** photos on the phone (1), iCloud or Google Photos (2, off-site), and a yearly copy onto an external drive kept at a relative’s house or in a drawer at work (3).",
        "**A student:** thesis on the laptop (1), in a university cloud account (2, off-site), and Time Machine or File History to an external drive (3).",
        "**A small business:** the office computer (1), a nightly backup to an external drive that rotates home with the owner (2, off-site on alternate weeks), and a cloud backup service (3)."
      ]},
      "Notice that each example includes a drive or backup tool, not just a synced cloud service. A synced copy such as iCloud Photos or a cloud folder deletes along with the original, so it only protects you fully when an independent copy also exists.",
      {warn:"Many people find that their only “backup” is the cloud copy that sync creates. That’s two copies at best, and they are linked: a deletion on one becomes a deletion on both."}
    ]},
    {h:"The backup tools already on your devices", body:[
      "You don’t need to buy software to start. Each system has built-in tools:",
      {table:[
        ["Device","Tool","What it does"],
        ["Windows 11","**Windows Backup** app (Start → type “backup”, or Settings → Accounts → Windows backup)","Syncs Desktop, Documents, Pictures, Videos and Music to OneDrive and saves settings and app lists. Remember: that’s sync with version history, not a separate copy"],
        ["Windows 11","[[file-history|File History]] (Control Panel → System and Security → File History)","Saves copies of your files to an external drive or network location, keeping older versions you can restore"],
        ["macOS","[[time-machine|Time Machine]] (System Settings → General → Time Machine)","Backs up to an external drive: hourly backups for the past 24 hours, daily for the past month, weekly for older months; the oldest are deleted when the drive is full"],
        ["iPhone","**iCloud Backup** (Settings → [your name] → iCloud → iCloud Backup)","Backs up automatically when the phone is charging, on Wi-Fi and locked; needs enough iCloud space"],
        ["Android","**Google backup** (Settings → Google → All services → Backup, on many phones)","Backs up apps, call history, contacts, settings and texts; photos and videos are backed up by Google Photos or your maker’s gallery, if switched on"],
        ["ChromeOS","Google Drive","Files saved in Google Drive are kept online. Files in **My files** (including Downloads) are only on the Chromebook unless you move or copy them"]
      ]},
      "Notice the pattern: **cloud tools** give you an off-site copy without effort, and **external-drive tools** (File History, Time Machine) give you a second kind of storage with long version history that isn’t tied to an account. Together they make 3-2-1.",
      {tip:"Phones can also be backed up to a computer (iPhone with Finder on a Mac or the Apple Devices app on Windows; Android by copying files over USB), and that backup then copied to an external drive, as the NCSC suggests."}
    ]},
    {h:"External drives, done right", body:[
      "An [[external-drive]] is a hard drive or SSD in a small case that plugs into a [[usb]] port. It is affordable and works without the internet. Use it well:",
      {list:[
        "**Unplug it when the backup is finished.** The NCSC warns that ransomware and other malware can spread to attached drives automatically. A drive that isn’t connected can’t be infected.",
        "**Eject before unplugging** (Windows: the Safely Remove Hardware icon or right-click → **Eject**; Mac: the eject button next to the drive in Finder; ChromeOS: **Eject** in Files) so nothing is half-written.",
        "**Encrypt it if it holds personal data.** Time Machine and many drives offer [[encryption]]. A lost unencrypted drive is a lost copy of your life.",
        "**Label it and note the date.** Drives fail with age; replace them every few years and check them now and then."
      ]},
      {warn:"A drive that sits next to the computer all the time protects against a failed laptop, but not against a fire, flood, theft or ransomware that reaches the drive. That’s why 3-2-1 asks for a copy somewhere else."}
    ]},
    {h:"Ransomware: why separate copies matter", body:[
      "{{ransomware}} is malicious software that scrambles (encrypts) your files and demands payment to unscramble them. It hits families, schools, hospitals and businesses of every size. From a backup point of view, it is a perfect test:",
      {list:[
        "The original files are scrambled.",
        "Sync uploads the scrambled versions to the cloud.",
        "Any drive that’s plugged in may be scrambled too.",
        "What survives: an **unplugged** drive, a backup service or version history that keeps older versions the ransomware can’t reach, and an off-site copy."
      ]},
      "CISA advises keeping offline copies and testing that you can restore data both fully and partly. With a good backup, you can wipe the device and restore — without paying anyone."
    ]},
    {h:"Test a restore — the step most people skip", body:[
      "A backup you have never restored from is a hope, not a plan. Drives fail quietly, settings get switched off after updates, accounts fill up, and backups sometimes leave out the folder you care about. The only proof is to [[restore]] something.",
      {ol:[
        "Pick one or two files you care about and know well (a photo, a document).",
        "Check the date of your last backup in the tool (Time Machine, File History, iCloud Backup, etc.). Is it recent?",
        "Restore the files to a **different** location, such as a new folder called `restore-test`, so nothing current is overwritten.",
        "Open each restored file. Does it open? Is it the right version?",
        "Write down the date of the test and what you checked, then delete the test folder.",
        "Repeat every few months, and after any big change (new computer, new phone, new cloud plan)."
      ]},
      {ex:"Mei’s calendar note, every three months:\n☐ Time Machine last backup: date ______\n☐ Restored 2 files to Desktop/restore-test — both opened\n☐ Google Photos shows this month’s photos on the web\n☐ External drive unplugged and back in the drawer", label:"Worked example: a restore-test checklist"},
      {key:"Three copies, two kinds of storage, one off-site — and **one restore test** to prove it works."}
    ]}
   ],
   try:[
    {id:"t1u2-l5-x1", type:"sort", q:"Is each one a backup on its own?", buckets:["A backup","Not a backup on its own"], items:[
      {t:"Time Machine copying a Mac to an external drive", b:0, why:"A separate copy, on separate storage, with older versions kept."},
      {t:"A Documents folder synced to cloud storage, with no other copies", b:1, why:"Sync mirrors deletions and damage. Version history and bins help for a while, but it’s one linked set of copies in one account."},
      {t:"A second copy of a file in another folder on the same laptop", b:1, why:"Same drive, same device: one theft or failure takes both."},
      {t:"An iPhone’s iCloud Backup", b:0, why:"A separate copy of the phone’s data, stored off the device, that you can restore to a new phone."},
      {t:"The Recycle Bin", b:1, why:"It’s on the same device and gets emptied. It undoes recent deletions; it doesn’t protect against losing the device."},
      {t:"File History saving to an external drive", b:0, why:"A separate copy on separate storage, with versions you can restore."}
    ]},
    {id:"t1u2-l5-x2", type:"order", q:"Put the steps of a restore test in a sensible order.", items:[
      {t:"Choose one or two files you know well", why:"You need files you can recognize, to judge whether the restore is right."},
      {t:"Find those files in the backup tool and check how recent the newest backup is", why:"You can only look them up once you’ve chosen them. If the newest backup is weeks old, you’ve already found a problem before restoring anything."},
      {t:"Restore them to a new, separate folder", why:"Restoring to a separate place avoids overwriting the current files."},
      {t:"Open each restored file and check it’s the right version", why:"A file that exists but won’t open, or is an old version, means the backup isn’t doing its job."},
      {t:"Note the date and result, then delete the test folder", why:"A record tells you when to test again; deleting the test copy avoids confusion with the real files."}
    ]},
    {id:"t1u2-l5-x3", type:"mcq", q:"Dmitri keeps his photo collection on his laptop and backs it up weekly to an external drive kept on the same desk. Which part of 3-2-1 is he missing?", options:[
      {t:"An off-site copy, plus a third copy overall", ok:true, why:"He has two copies, both in one place. A fire or burglary could take both. Adding a cloud backup (or a drive kept elsewhere) fixes both gaps at once."},
      {t:"A copy on a separate device from the laptop", why:"He already has one: the external drive is a separate device. What’s missing is a third copy, kept somewhere else."},
      {t:"Nothing; two copies is enough", why:"3-2-1 asks for three copies with one off-site. His setup fails against any disaster at his home."},
      {t:"A faster external drive", why:"Speed doesn’t matter to the rule. Location and number of copies do."}
    ]},
    {id:"t1u2-l5-x4", type:"number", q:"Fatima deleted a file from Google Drive 26 days ago. Google empties the Drive Trash automatically after 30 days. How many days does she have left to restore it?", answer:4, tol:0, unit:"days", why:"30 − 26 = 4 days. After that it’s gone from Drive for good, so she should restore it today.", wrongs:[
      {v:26, tol:0, why:"26 is how long ago she deleted it. Subtract it from the 30-day limit."},
      {v:30, tol:0, why:"The 30 days started when she deleted it, not today."},
      {v:56, tol:0, why:"That adds the numbers. The time left is the limit minus the time already passed."}
    ]},
    {id:"t1u2-l5-x5", type:"mcq", q:"Ransomware scrambles every file on Kenji’s shop computer, including the OneDrive folder, which syncs. Which copy is most likely to be safe?", options:[
      {t:"A backup on an external drive that was unplugged and in a drawer", ok:true, why:"Malware can’t reach a disconnected drive. This is why the NCSC says to unplug backup drives when not in use."},
      {t:"The OneDrive copy, because it’s in the cloud", why:"Sync uploads the scrambled files. Version history may help roll back, but the synced copy itself is scrambled."},
      {t:"An external drive that’s always plugged in", why:"Ransomware can spread to attached drives automatically."},
      {t:"The Recycle Bin", why:"It holds deleted files, not clean copies of scrambled ones, and is on the infected computer."}
    ]},
    {id:"t1u2-l5-x6", type:"match", q:"Match each built-in tool to what it does.", pairs:[
      ["Time Machine","Backs up a Mac to an external drive, with hourly, daily and weekly versions","Apple’s built-in Mac backup."],
      ["File History","Copies a Windows PC’s files to an external or network drive, keeping versions","Found in Control Panel → System and Security."],
      ["Windows Backup","Syncs main Windows folders and settings to OneDrive","Convenient off-site copy, but it works by sync."],
      ["iCloud Backup","Backs up an iPhone when charging, on Wi-Fi and locked","Needs enough iCloud storage."],
      ["Google backup on Android","Backs up apps, contacts, call history, settings and texts","Photos are handled separately by a photo app."]
    ]},
    {id:"t1u2-l5-x7", type:"mcq", q:"Amara has Time Machine set up. Which of these are good evidence that her backup is working? Choose all that apply.", options:[
      {t:"She restored two files to a separate folder and opened them", ok:true, why:"Opening restored files is the real proof."},
      {t:"Time Machine shows a backup from earlier today", ok:true, why:"A recent date shows backups are running. (Combine it with a restore to be sure.)"},
      {t:"She checked the restored version was the one she expected", ok:true, why:"Restoring the wrong version is a common surprise; checking catches it."},
      {t:"The external drive’s light comes on when plugged in", why:"Power doesn’t mean the backup is complete, recent, or readable."}
    ]}
   ],
   apply:{intro:"Build a backup you’ve proved. This is the most valuable hour in the unit.", tasks:[
    {t:"Turn on a backup for your computer", how:{
      win:["For a separate copy: connect an external drive, open **Control Panel → System and Security → File History**, and select **Turn on** (use **Select drive** if needed).","For an off-site copy: press Start, type `backup`, open **Windows Backup**, and choose which folders to back up to OneDrive (needs enough OneDrive space)."],
      mac:["Connect an external drive.","Open **Apple menu → System Settings → General → Time Machine** and click **Add Backup Disk** (or the **+** button).","Choose the drive, turn on encryption if offered, and let the first backup finish."],
      chromeos:["Make sure files you care about are in **Google Drive**, not only in **My files**.","For a second copy, plug in an external drive and copy important folders to it in **Files**, then **Eject** it."]}},
    {t:"Turn on your phone’s backup", how:{phone:[
      "iPhone: **Settings → [your name] → iCloud → iCloud Backup**, turn on **Back Up This iPhone**, then tap **Back Up Now** on Wi-Fi. Check the date of the last backup.",
      "Android: **Settings → Google → All services → Backup**, make sure backup is on, then tap **Back up now**. Menu names vary by maker and Android version.",
      "Both: check your photo app (iCloud Photos, Google Photos or your maker’s gallery) is set to back up photos."]}},
    {t:"Do a restore test", how:{
      win:["Open File Explorer, right-click a folder that File History backs up → **Restore previous versions**.","Pick a version, expand **Restore** → **Restore to…** and choose a new `restore-test` folder. Open the files."],
      mac:["Open the folder in Finder, then open **Time Machine** from the menu bar icon or the Applications folder.","Pick a backup, select a file, and click **Restore**; Time Machine asks before replacing anything. Open the restored file."],
      chromeos:["Open a file from your external drive or from Google Drive on another device (a phone or a different computer), and check it opens."],
      phone:["Open your photo backup on the web (icloud.com/photos or photos.google.com) and check recent photos are there.","Check the last backup date in your phone’s backup settings."]}}
   ], proof:"You have at least one backup running beyond simple sync, your phone backs up, and you’ve successfully opened a restored file — with the date written down."},
   read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Recovering a File” and “Tips for Organizing and Maintaining Files”"},{book:"ncsc", where:"“Backing up your data”", note:"Short official advice from the UK’s National Cyber Security Centre."},{book:"ics", where:"Background reading: Chapter 6, Section 6.6 “Reliability and Security” — “Recovery”", note:"How operating systems recover a file system after a crash; it doesn’t cover personal backups."}]
  }
  ],
  checkpoint:["t1u2-q02","t1u2-q06","t1u2-q11","t1u2-q14","t1u2-q20","t1u2-q23","t1u2-q28","t1u2-q31","t1u2-q34","t1u2-q38","t1u2-q41","t1u2-q44"],
  codex:[
   {id:"files", title:"Files", aka:["document","data file"], tags:["files","basics"], summary:"A file is a named collection of data on storage, with metadata describing it.",
    levels:{
     starter:[
      "A **file** is one item you keep on a device: a photo, a letter, a song, a spreadsheet. Think of it as a sealed envelope. Inside is the content. On the outside is a label with its name, plus a few notes stamped on automatically — when it was made, when it was last changed, how big it is.",
      "Those outside notes are called [[metadata]]. You can see them without opening the file: right-click it and choose **Properties** (Windows) or **Get Info** (Mac).",
      "Files live on [[storage]] — the drive inside your computer or phone, a USB stick, or a company’s servers in the cloud. They stay there when the power is off, which is what makes them different from the work you have open in an app but haven’t saved yet.",
      {key:"File = data + a name + metadata."},
      "Why it matters: once you see files as data plus a name plus labels, everyday puzzles make sense. Renaming changes only the name. Copying makes a second, separate envelope. Deleting removes the envelope from its drawer. And sending a file sends its labels too, which is why a photo can reveal where it was taken."
     ],
     builder:[
      "Precisely, a [[file]] is a sequence of bytes stored by the [[operating-system]] under a name, inside a [[folder]]. The OS keeps a record (in the **file system**) of where on the drive those bytes are, so it can find them again.",
      {list:[
        "**Data** — the content, as bytes. A plain-text file with the word `hello` is 5 bytes; a phone photo is a few million.",
        "**Name** — chosen by you or the app, ending in an [[file-extension|extension]] that hints at the format.",
        "**Metadata** — size, created and modified dates, owner and permissions; often format-specific details too. Photos can carry camera settings and GPS location; documents can carry the author’s name."
      ]},
      "Where to see metadata: Windows File Explorer’s **Details** view or right-click → **Properties** → **Details**; Mac Finder’s **Get Info** ([[kbd:Cmd]] + [[kbd:I]]); the info or details view in phone file and photo apps.",
      {warn:"Metadata can reveal more than you intend: a photo’s location, or the previous author of a document you reuse. Many apps have an option to remove personal information before sharing (for example Word’s Document Inspector, or turning off location when sharing a photo on a phone)."},
      "A useful habit: before you share an important file, look at its properties. Check the size (will it fit as an attachment?), the modified date (is this really the latest version?) and, for photos, whether location is included. Thirty seconds of checking prevents the two most common sharing mistakes: sending an old version and sending more information than you meant to."
     ],
     pro:[
      "File systems store a file’s metadata separately from its content. Unix-like systems use an **inode** per file holding size, timestamps, owner, permissions and pointers to data blocks; the file’s name is just a directory entry pointing at that inode. That’s why a single file can have several names (hard links) on such systems, and why renaming within one drive is instant: only the directory entry changes, not the data. Windows NTFS uses a similar Master File Table.",
      "Timestamps vary: most systems keep **modified** (content changed) and **accessed**; “created” is kept by NTFS and APFS but semantics differ, and copying a file often resets the created date while keeping the modified date. Don’t rely on file-system dates as evidence of when a document was written; embedded metadata (EXIF in photos, document properties) can be more informative but is also editable.",
      "Format-level metadata lives *inside* the data: EXIF/XMP in JPEG and HEIC, document properties in Office files, info dictionaries and XMP in PDF. Stripping file-system metadata doesn’t touch it, and vice versa.",
      "Size on screen vs size on disk differ: storage is allocated in blocks (commonly 4 KiB), so a 1-byte file still occupies a block. See {{file-size-units}} for how sizes are counted.",
      "Practical consequence for backups and sync: tools decide what to copy by comparing metadata (size and modified time) and sometimes content hashes. If a program changes a file without updating its modified time, or two machines’ clocks disagree, incremental backups and sync can miss or misjudge changes. When something “didn’t back up”, timestamps are one of the first things professionals inspect."
     ]},
    related:["file-extensions","file-formats","folders-paths"], read:[{book:"ics", where:"Chapter 6, Section 6.5 “File Systems”"}],
    sources:[{t:"OpenStax, Introduction to Computer Science, 6.5 File Systems", url:"https://openstax.org/books/introduction-computer-science/pages/6-5-file-systems"},{t:"OpenStax, Workplace Software and Skills, 2.2 Files and Folders", url:"https://openstax.org/books/workplace-software-skills/pages/2-2-files-and-folders"}], checked:"2026-10"},

   {id:"file-extensions", title:"File extensions", aka:["file name extension","file suffix"], tags:["files","safety"], summary:"The letters after the last dot in a file name, which tell the system what kind of file it is.",
    levels:{
     starter:[
      "A [[file-extension]] is the short code at the end of a file name, after the last dot: `.docx`, `.jpg`, `.pdf`. It’s like the label on a jar: it tells your computer what’s inside, so it can pick the right app and icon.",
      "Windows and Mac **hide** most extensions unless you switch them on. That looks tidy, but it hides useful clues. Criminals use this: a file called `invoice.pdf.exe` shows up as `invoice.pdf` when extensions are hidden, but it is really a program.",
      {tip:"Turn extensions on. Windows 11: File Explorer → **View → Show → File name extensions**. Mac: Finder → **Settings → Advanced → Show all filename extensions**. ChromeOS already shows them."},
      "Remember the one rule: the real extension is whatever comes after the **last** dot. Everything before it is just name. And changing an extension doesn’t change what’s inside — it’s like relabelling a jar of jam as honey. The jam is still jam."
     ],
     builder:[
      "The operating system keeps a list linking each extension to a default app. That’s why double-clicking `notes.txt` opens a text editor while `notes.docx` opens a word processor. You can change the default: Windows **Settings → Apps → Default apps**, or right-click → **Open with → Choose another app**; Mac **Get Info → Open with → Change All**.",
      {h:"Reading names correctly"},
      {list:[
        "Only the part after the **last** dot is the extension. `2026.03.report.pdf` is a PDF; `photo.jpg.zip` is a zip.",
        "Extensions aren’t case-sensitive on Windows or by default on Mac: `.JPG` and `.jpg` are the same.",
        "Some files have no extension (common on Mac and Linux for programs and system files)."
      ]},
      {h:"Renaming is not converting"},
      "Changing `.heic` to `.jpg` changes only the label; the data stays HEIC, and apps that trust the label may fail. Convert with an app instead: **Export** or **Save As** and choose the new format. Your computer warns before you change an extension — if you didn’t mean to, cancel.",
      {warn:"Be wary of attachments ending in `.exe`, `.msi`, `.bat`, `.cmd`, `.js`, `.vbs`, `.scr` (Windows), `.app`, `.pkg`, `.dmg` (Mac) or `.apk` (Android). These run or install programs. An invoice, CV or photo should never be one."},
      "Common pairs worth recognizing: `.docx` (Word), `.xlsx` (Excel), `.pptx` (PowerPoint), `.pdf`, `.txt`, `.csv`, `.jpg`/`.jpeg`, `.png`, `.heic`, `.mp4`, `.mov`, `.mp3`, `.zip`. If a file has an extension you don’t recognize, search the extension on a reputable site before opening it, and don’t install software just because a stranger’s file needs it."
     ],
     pro:[
      "Extensions are a convention, not a guarantee. Systems also identify files by content: many formats begin with a **magic number** (PDF starts with `%PDF`, PNG with the bytes `89 50 4E 47`, ZIP-based formats with `PK`). That’s why `.docx`, `.xlsx`, `.pptx`, `.odt` and `.epub` files are all zip containers inside — rename a `.docx` to `.zip` and you can browse its XML parts (do it on a copy).",
      "macOS also tracks types with Uniform Type Identifiers and can hide an extension per file (Get Info → **Hide extension**), so two files can look identical while one shows its real extension and one doesn’t. The Finder-wide **Show all filename extensions** overrides this.",
      "Security tooling inspects content, not just the extension, but users remain the last line: the double-extension trick, Unicode right-to-left override characters (an invisible character that reverses the text after it, so a name really ending in `.exe` can appear to end in `.pdf`), and icons copied from document apps are all used to disguise executables. Showing extensions everywhere and checking a file’s **Type** column in Details view are cheap, effective habits.",
      "Web servers send a MIME type (`application/pdf`, `image/png`) that browsers use instead of the extension; mismatches explain some “downloaded file won’t open” cases.",
      "Default-app associations can be changed by software you install, which is why a PDF might suddenly open in a different app after an update. In managed workplaces, administrators set these associations centrally. On phones, the share sheet and “Open in” menus play the same role, routing a file to apps that declare they handle its type."
     ]},
    related:["files","file-formats","compression-zip"],
    sources:[{t:"Microsoft Support: File Explorer in Windows", url:"https://support.microsoft.com/en-gb/windows/file-explorer-in-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1"},{t:"Apple Support: Show or hide filename extensions on Mac", url:"https://support.apple.com/guide/mac-help/mchlp2304"}], checked:"2026-10"},

   {id:"file-formats", title:"File formats", aka:["file types","open formats","proprietary formats"], tags:["files","formats"], summary:"How data is arranged inside a file, and why open, widely supported formats last longer.",
    levels:{
     starter:[
      "A [[file-format]] is the agreed way the data inside a file is arranged, like the grammar of a language. The extension is the label on the outside; the format is what’s really inside.",
      "Everyday formats: `.docx` (documents), `.xlsx` (spreadsheets), `.pptx` (slides), `.pdf` (fixed-layout documents), `.txt` and `.csv` (plain text and simple tables), `.jpg`, `.png` and `.heic` (images), `.mp4` (video), `.zip` (a bundle of files).",
      "Some formats are **open** — anyone may read the rules and make software for them. Others are **proprietary** — owned by one company. Open, widely used formats are safer for things you want to read in 20 years or share with anyone.",
      {tip:"Send finished things as PDF; send things others must edit in the editable format."},
      "A quick test before you send: will the other person be able to open this, and do they need to change it? If they only need to read it, a PDF is safest. If they need to edit it, send the editable file, or share an online document. If you don’t know what software they have, choose a widely supported format."
     ],
     builder:[
      {table:[
        ["Format","Best for","Keep in mind"],
        ["PDF","Finished documents, forms, print","Layout fixed; not truly secure; editing is awkward"],
        ["DOCX / ODT","Documents to edit","Complex layouts can shift between apps"],
        ["XLSX / ODS","Spreadsheets with formulas","CSV loses formulas, formatting and extra sheets"],
        ["CSV / TXT","Simple data and notes","Opens anywhere; no formatting"],
        ["JPEG","Photos","Lossy: re-saving many times loses quality"],
        ["PNG","Screenshots, logos, diagrams","Lossless; large for photos"],
        ["HEIC","iPhone photos (space-saving)","Not every app or website accepts it"]
      ]},
      "An [[open-format]] has a published specification anyone may implement: plain text, CSV, PNG, OpenDocument (`.odt`, `.ods`) and [[pdf|PDF]] (ISO 32000). A [[proprietary-format]] is controlled by one vendor and may not be fully documented, such as Apple Pages’ `.pages` files; they open well only in the vendor’s apps.",
      "Office’s `.docx`, `.xlsx` and `.pptx` sit in between: created by Microsoft, but published as the international standard ISO/IEC 29500, which the US Library of Congress lists as an open standard. That’s why LibreOffice, Google Docs and Apple’s apps open them.",
      {h:"Converting properly"},
      "Use **Save As**, **Export** or **Download as** to rewrite the data in a new format. On iPhone, **Settings → Camera → Formats → Most Compatible** captures JPEG instead of HEIC; Apple notes that photos are often converted to JPEG automatically when shared with or imported to devices that don’t support HEIF.",
      "When a file won’t open, the cause is usually one of three things: the app doesn’t support that format (try another app or an online viewer), the file was renamed with the wrong extension, or the download didn’t finish (check the size against what you expected)."
     ],
     pro:[
      "For long-term keeping, archives assess formats on **disclosure** (is the spec public?), **adoption**, **transparency** (can it be read with basic tools?), **self-documentation**, **external dependencies** (fonts, codecs) and **patents**. The Library of Congress’s Sustainability of Digital Formats site documents these factors format by format.",
      "Preservation-oriented variants exist: **PDF/A** (ISO 19005) forbids features that depend on the outside world, such as external fonts and some active content, so a document renders the same decades later. Research repositories often prefer CSV with a data dictionary over XLSX, and TIFF or PNG over proprietary camera formats, for the same reason.",
      "Lossy vs lossless matters in workflows: JPEG re-encoding accumulates artefacts, so edit from a lossless master and export JPEG at the end. HEIF is a container standard (ISO/IEC 23008-12); Apple’s HEIC uses HEVC-coded images, whose patent licensing is one reason support is patchy outside Apple.",
      "CSV has no single strict standard (RFC 4180 describes common practice); delimiters, quoting, text encoding (use UTF-8) and decimal separators vary by locale. Document them in a README when sharing data.",
      "When choosing formats for a team or project, write the choice down: master copies in an editable, well-supported format; exchange copies in PDF or CSV; archive copies in preservation formats such as PDF/A. This avoids a slow drift into dozens of formats that only one person’s software can open."
     ]},
    related:["file-extensions","files","compression-zip"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “File Types”"}],
    sources:[{t:"Library of Congress: DOCX Transitional (Office Open XML), ISO 29500", url:"https://loc.gov/preservation/digital/formats/fdd/fdd000397.shtml"},{t:"Library of Congress: PDF/A-2, use of ISO 32000-1", url:"https://loc.gov/preservation/digital/formats/fdd/fdd000319.shtml"},{t:"Apple Support: Using HEIF or HEVC media on Apple devices", url:"https://support.apple.com/en-us/116944"}], checked:"2026-10"},

   {id:"compression-zip", title:"Compression and zip files", aka:["zipping","archives","extract"], tags:["files","compression"], summary:"Zip bundles files into one and shrinks them without losing anything; already-compressed files barely shrink.",
    levels:{
     starter:[
      "A [[zip]] file is a parcel: one file that holds many files and folders. It’s handy for emailing a folder as a single attachment or downloading many files at once.",
      "Zipping usually also squeezes the contents smaller. That squeezing is [[compression]]. Zip compression is **lossless**: when you unzip, you get back every file exactly as it was.",
      "Documents and text often shrink a lot. Photos, videos and PDFs hardly shrink, because they are already compressed.",
      {tip:"Unzip (extract) before you work on the files. Editing a file while it’s still inside the zip can make your changes seem to vanish."},
      "Zip is also how many websites deliver several files at once: “Download all” often gives you a single .zip. Remember to extract it before using the files, then delete the zip if you don’t need it, so you don’t end up with two copies of everything taking up space."
     ],
     builder:[
      {table:[
        ["System","Zip","Unzip"],
        ["Windows 11","Right-click → **Compress to → ZIP File** (older: **Compress to ZIP file**)","Right-click → **Extract All**"],
        ["macOS","Control-click → **Compress**","Double-click the .zip"],
        ["ChromeOS","Select, right-click → **Zip**","Double-click to open; right-click → **Extract all**"],
        ["iPhone (Files)","Touch and hold → **Compress**","Tap the .zip"],
        ["Android","Depends on the app; Files by Google can **Extract**","Tap the .zip → **Extract**"]
      ]},
      "How it works, roughly: lossless compression finds repetition (the same words, runs of identical pixels) and writes it once with a note saying “repeat here”. Unzipping follows the notes to rebuild every byte. **Lossy** compression (JPEG, MP3, MP4) instead throws away detail people are unlikely to notice; it can’t be undone, and running zip on it finds little repetition left.",
      {warn:"A zip can hide a program inside. Treat zips from unexpected senders like any suspicious attachment, and look at the extensions of the files inside before opening anything."},
      "Recent Windows 11 versions can also create 7z and TAR archives, and open several other archive formats such as RAR. Other free tools (such as 7-Zip on Windows or The Unarchiver on Mac) handle more.",
      "Good uses for zip: sending a folder of documents as one attachment; keeping a finished project as a single archive file; and getting under an email size limit when the files are text-heavy. Poor uses: trying to shrink photos or videos (use a cloud sharing link instead) and “protecting” files, which zip doesn’t do on its own."
     ],
     pro:[
      "ZIP stores each file compressed independently (usually with DEFLATE) plus a central directory at the end of the archive, which is why you can list or extract one file without decompressing the rest — and why a truncated download often fails to open at all. Formats like `.tar.gz` instead compress the whole stream, often achieving better ratios on many small similar files but requiring sequential reading.",
      "Compression ratio depends on entropy. Text and CSV commonly compress to a fraction of their size; JPEG, MP4, PDF (which usually compresses internally), and Office x-files (already zip containers) barely change. Encrypted data is incompressible by design, so compress *before* encrypting.",
      "ZIP’s legacy “ZipCrypto” password protection is weak; AES-256 zip encryption (supported by 7-Zip and others) is far stronger, but the standard Compress options in File Explorer and Finder don’t create password-protected zips. For sensitive sharing, a cloud link limited to named people is often more practical than a password-protected zip sent by email.",
      "Watch for path problems when unzipping archives made on another system: long paths, characters illegal on Windows, and macOS’s `__MACOSX` metadata folders are common annoyances.",
      "Archives can be spanned or split into parts (`.z01`, `.001`) for size limits; all parts must be present to extract. Self-extracting archives (`.exe`) are programs and deserve the same caution as any executable. Integrity is checked with CRC-32 per file in ZIP, which detects accidental corruption but not deliberate tampering; for that, compare a published cryptographic hash such as SHA-256."
     ]},
    related:["file-formats","file-extensions","files"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Compressing and Extracting Files”"}],
    sources:[{t:"Google Chromebook Help: Open, save, or delete files on your Chromebook", url:"https://support.google.com/chromebook/answer/1700055?hl=en"},{t:"OpenStax, Workplace Software and Skills, 2.2 Files and Folders", url:"https://openstax.org/books/workplace-software-skills/pages/2-2-files-and-folders"}], checked:"2026-10"},

   {id:"folders-paths", title:"Folders and paths", aka:["directories","file path","home folder"], tags:["files","navigation"], summary:"Folders form a tree; a path is the route from the top of the tree to one file.",
    levels:{
     starter:[
      "A [[folder]] (also called a directory) is a container for files and other folders, like a drawer holding labelled boxes. Folders inside folders form a tree, from one top level down to every file.",
      "Each person who signs in has a [[home-folder]] holding their Desktop, Documents, Downloads and Pictures.",
      "A [[path]] is a file’s full address: every folder from the top down to the file. On Windows it looks like `C:\\Users\\Amara\\Documents\\minutes.docx`; on a Mac, `/Users/amara/Documents/minutes.docx`.",
      {tip:"Use Downloads as a doormat, not a filing cabinet: move files on to where they belong."},
      "Think of a path as directions: “start at the top, go into Users, then Amara, then Documents, and the file is there.” When someone asks where a file is, a path is the precise answer.",
      "Moving and copying are different. Copying leaves the original and makes a second one; moving takes it from one place to another. Dragging to a USB stick copies; dragging within the same drive moves."
     ],
     builder:[
      {table:[
        ["","Windows","macOS / Linux"],
        ["Top of tree","A drive letter, such as `C:\\`","The root `/`"],
        ["Separator","Backslash `\\`","Forward slash `/`"],
        ["Home folder","`C:\\Users\\name`","`/Users/name` (Mac), `/home/name` (Linux)"],
        ["Copy a path","Right-click → **Copy as path**","Control-click, hold Option → **Copy … as Pathname**"]
      ]},
      "ChromeOS’s Files app shows locations as a breadcrumb (My files › Downloads) rather than a typed path. Files in **My files** live only on the Chromebook; **Google Drive** is online.",
      {h:"Moving vs copying"},
      "Dragging within the same drive **moves**; dragging to another drive **copies**. Force a copy with [[kbd:Ctrl]] (Windows) or [[kbd:Option]] (Mac) while dragging; force a move with [[kbd:Shift]] (Windows) or [[kbd:Cmd]] (Mac). Keyboard: copy with Ctrl/Cmd + C then V; move with Ctrl + X then V on Windows, or Cmd + C then Option + Cmd + V on a Mac.",
      {h:"Shortcuts"},
      "A [[shortcut]] (Mac: alias) points to a file elsewhere. Deleting it doesn’t delete the file; copying it to a USB stick copies only the pointer.",
      "Windows forbids `\\ / : * ? \" < > |` in names. Mac Finder forbids the colon. Keep names free of these everywhere for safety.",
      "Searching beats remembering: File Explorer’s search box, Spotlight on a Mac ([[kbd:Cmd]] + [[kbd:Space]]) and the Launcher on ChromeOS find files by name and often by words inside them. Sorting a folder by **Date modified** finds what you worked on recently."
     ],
     pro:[
      "**Absolute** paths start at the root (`/Users/amara/…`, `C:\\Users\\…`); **relative** paths start from the current folder (`../data/raw.csv`, where `..` means the parent). Relative paths make project folders portable, which is why research projects keep code and data under one top folder.",
      "Windows also uses UNC paths for network shares (`\\\\server\\share\\folder`) and environment variables such as `%USERPROFILE%`; macOS and Linux use `~` for the home folder in terminals. Windows paths historically had a 260-character limit (MAX_PATH); newer Windows can lift it, but some apps still fail on long paths, especially deep cloud-synced folders.",
      "Case sensitivity differs: Windows (NTFS) and macOS (APFS default) are case-insensitive but case-preserving; Linux is case-sensitive, so `Report.pdf` and `report.pdf` can coexist there and collide when synced to a Mac or PC.",
      "Moves within one volume are a metadata update (instant, permissions kept); moves across volumes are copy-then-delete (slow, and can fail midway). Windows known folders (Desktop, Documents, Pictures) can be **redirected** — OneDrive’s folder backup does exactly this — so the path may become `C:\\Users\\name\\OneDrive\\Documents`. Check the address bar when a file seems to have ‘moved’.",
      "Search indexes are a separate database the OS maintains; files in excluded or unindexed locations (some external drives, network shares, online-only placeholders) may not appear, and rebuilding the index fixes many “search can’t find it” problems. On macOS, Spotlight can be limited per volume in Settings; on Windows, indexing options live in Settings → Privacy & security → Searching Windows."
     ]},
    related:["files","file-naming","recycle-bin"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “What Is a Folder?”"},{book:"ics", where:"Chapter 6, Section 6.5 “File Systems”"}],
    sources:[{t:"Microsoft Support: File Explorer in Windows", url:"https://support.microsoft.com/en-gb/windows/file-explorer-in-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1"},{t:"Google Chromebook Help: Open, save, or delete files", url:"https://support.google.com/chromebook/answer/1700055?hl=en"}], checked:"2026-10"},

   {id:"recycle-bin", title:"Recycle Bin and Trash", aka:["Trash","Recently Deleted","deleted items"], tags:["files","recovery"], summary:"Where deleted files wait before being removed for good, and the cases that skip it.",
    levels:{
     starter:[
      "When you delete a file, it usually goes to the [[recycle-bin]] (Windows) or Trash (Mac, ChromeOS), not straight into oblivion. It waits there so you can restore it if you change your mind.",
      {list:["Windows: open **Recycle Bin** → right-click the file → **Restore**.","Mac: open **Trash** in the Dock → select → **File → Put Back**.","ChromeOS: **Files → Trash** → **Restore from trash**.","iPhone: **Files → Browse → Recently Deleted** → **Recover**."]},
      "The bin is for quick “oops” moments. It isn’t a backup: if the device is lost or broken, the bin goes with it.",
      "Good habits: check the bin before you empty it, empty it only when you’re sure, and remember that a cloud service has its **own** bin on its website, separate from the one on your computer. If something vanished from a synced folder, look there too."
     ],
     builder:[
      {table:[
        ["Bin","How long items stay"],
        ["Windows Recycle Bin","Until emptied, until it reaches its size limit (oldest go first), or as set in Storage Sense"],
        ["macOS Trash","Until emptied, or 30 days if **Remove items from the Trash after 30 days** is on (Finder Settings → Advanced)"],
        ["ChromeOS Trash","30 days"],
        ["OneDrive (cloud)","30 days for personal accounts; 93 days by default for work or school"],
        ["Google Drive (cloud)","30 days"],
        ["iCloud Drive Recently Deleted","30 days"]
      ]},
      {warn:"Deletions that skip the bin: on Windows, [[kbd:Shift]] + [[kbd:Delete]], and files deleted from many USB sticks, memory cards and network drives; on a Mac, **Delete Immediately**. Deleting on one synced device also deletes the cloud copy — check the **cloud** bin on the website."},
      "Cloud bins usually count against your storage quota until emptied.",
      "Restoring from a bin puts the file back in its original folder. If that folder no longer exists, the system usually recreates it. If you can’t find a restored file, search for its name or sort its original folder by **Date modified**.",
      "Tip: the Windows Recycle Bin has a maximum size per drive (right-click → **Properties**). If you often delete big files, the oldest deleted items are removed sooner than you might expect."
     ],
     pro:[
      "Deleting usually removes only the file system’s pointer; the data blocks stay until overwritten. On hard drives this is why recovery tools sometimes work after the bin is emptied. On SSDs, the TRIM command lets the drive erase freed blocks in the background, so emptied-bin recovery is much less likely — don’t count on it.",
      "Conversely, “deleted” doesn’t mean “gone” for privacy: before selling or giving away a device, use the system’s full reset (which on modern encrypted devices discards the encryption key) rather than just emptying the bin.",
      "Organizations often add their own retention: Microsoft 365 administrators can change OneDrive’s retention, and some cloud services have a second-stage bin that administrators can restore from after the user’s bin is emptied. Apple suggests checking iCloud.com’s **Data Recovery** page (**Restore Files**) if a file isn’t in iCloud Drive’s Recently Deleted.",
      "Cleaning tools (Storage Sense on Windows, “empty Trash automatically” on Mac) quietly shorten your safety window. Know whether they’re on.",
      "Bins are per-volume on most systems: an external hard drive usually keeps its own hidden bin (`$RECYCLE.BIN` on Windows, `.Trashes` on Mac; many USB sticks on Windows have none, which is why deletions there skip the bin), so deleted files there still use the drive’s space until emptied, and plugging the drive into another computer may show or hide them differently. That’s also why “I deleted everything but the USB drive is still full” happens."
     ]},
    related:["version-history","backup","folders-paths"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Recovering a File”"}],
    sources:[{t:"Apple Support: Delete files and folders on Mac", url:"https://support.apple.com/en-al/guide/mac-help/mchlp1093/26/mac"},{t:"Microsoft Support: Restore deleted files or folders in OneDrive", url:"https://support.microsoft.com/en-us/office/restore-deleted-files-or-folders-in-onedrive-949ada80-0026-4db3-a953-c99083e6a84f"},{t:"Apple Support: If you’re missing files in iCloud Drive", url:"https://support.apple.com/en-au/111763"}], checked:"2026-10"},

   {id:"file-naming", title:"File naming conventions", aka:["naming files","ISO 8601 dates","version numbers"], tags:["organizing","research data"], summary:"Names that people and computers can read, that sort by date and version, and that avoid troublesome characters.",
    levels:{
     starter:[
      "A good file name tells you what a file is, when it’s from, and which version it is — without opening it.",
      {list:[
        "Dates as **YYYY-MM-DD** ([[iso-8601]]): `2026-04-03`. No confusion between countries, and files sort in time order.",
        "Versions with leading zeros: `v01`, `v02` … `v10`.",
        "No spaces or special characters: use hyphens and underscores.",
        "Short but meaningful words, not codes only you understand."
      ]},
      {ex:"2026-04-03_food-bank_volunteer-rota_v02.xlsx", label:"Example", mono:true},
      "Avoid “final”. It’s never final.",
      "Why bother? Because in a year you won’t remember what `doc3_new.docx` was, and a colleague never knew. A name like the example above tells anyone what the file is, when it’s from and which version it is, and it lines up neatly in date order when the folder is sorted by name.",
      "Start small: use the pattern for new files from today, and rename old ones only when you touch them."
     ],
     builder:[
      "Research data-management guides (The Turing Way; university libraries such as Boston University, UC Davis and the University of British Columbia) agree on three qualities: names should be **readable by people**, **readable by machines**, and **sort in a useful order**.",
      {table:[
        ["Rule","Why"],
        ["ISO 8601 dates (YYYY-MM-DD or YYYYMMDD)","Unambiguous internationally; sorts chronologically as text"],
        ["Zero-padded numbers (001, 002…)","Character-by-character sorting puts v10 before v2 otherwise"],
        ["Underscores between parts, hyphens within","Easy to read and to split into parts by software"],
        ["No spaces, `/ \\ : * ? \" < > | & $ # %` or accents","Avoids errors on Windows, in web links and in scripts"],
        ["Short (about 25–40 characters), consistent order","Readable on screen; fits within path-length limits"]
      ]},
      "Windows File Explorer and macOS Finder sort numbers by value, so `v2` appears before `v10` there — but websites, cloud listings and scripts often don’t. Padding makes order correct everywhere.",
      "Put the date first when time order matters (minutes, invoices, events); put the topic first when you browse by subject. Write your convention in a `README` so others follow it.",
      "Worked example for different lives: a family might name scans `2026-01-15_electricity-bill.pdf`; a café, `2026-03-04_invoice_0147.pdf`; a student, `2026-05-02_thesis_chapter-03_v05.docx`; a researcher, `20260710_site-A_survey-results_v01.csv`. The same rules work across all of them, which is exactly why research guides recommend them."
     ],
     pro:[
      "Design names to be **parseable**: if every name is `date_project_content_version.ext`, a script (or a spreadsheet formula) can split on underscores into columns. That’s why guides reserve underscores as field separators and use hyphens inside fields. Keep fields in a fixed order and define controlled vocabularies (site codes, sample types) in the README.",
      "Separate **identity** from **status**: a name should say what a file is, not whether it’s approved. Track status through folders (`working/`, `submitted/`), version history, or a log. For collaborative work, a version-control system (such as Git, for code and text) or the version history in cloud editors records who changed what, which file names never can.",
      "Edge cases: avoid leading dots (hidden on Mac/Linux), trailing spaces or dots (Windows strips them), reserved Windows names (`CON`, `PRN`, `AUX`, `NUL`, `COM1`…) and names differing only by case (collide on Windows and Mac). Non-ASCII characters can be stored in different Unicode normalization forms on different systems, so `café` may not match `café` after syncing between Mac and Linux.",
      "For photos and scanned records, camera names (`IMG_4821`) are unique-ish but meaningless; batch-rename tools (built into Finder, PowerToys on Windows, photo managers) can prefix ISO dates taken from metadata.",
      "For large collections, consider a short code list in the README (site codes, people’s initials, sample types) and validate names automatically: a simple pattern such as `^\\d{4}-\\d{2}-\\d{2}_[a-z0-9-]+_[a-z0-9-]+_v\\d{2}\\.[a-z]+$` can flag names that break the convention before they spread."
     ]},
    related:["folders-paths","version-history","files"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Best Practices in Using and Organizing Folders and Files”"}],
    sources:[{t:"The Turing Way: Naming files, folders and other things", url:"https://book.the-turing-way.org/project-design/filenaming"},{t:"UBC Library Research Data Management: Organize", url:"https://researchdata.library.ubc.ca/plan/organize-your-data"},{t:"Boston University Libraries: Research Data Management, Naming Conventions", url:"https://library.bu.edu/data_management/naming"}], checked:"2026-10"},

   {id:"cloud-storage", title:"Cloud storage", aka:["the cloud","online storage","Google Drive, OneDrive, iCloud Drive, Dropbox"], tags:["cloud","storage"], summary:"Keeping files on a provider’s servers, reached through the internet, with sync, sharing and limits.",
    levels:{
     starter:[
      "[[cloud-storage]] means keeping your files on a company’s computers in data centres, reached over the internet. Examples include Google Drive, iCloud Drive, OneDrive and Dropbox.",
      "The [[cloud]] is not in the sky: it is buildings full of servers. The benefit is that your files survive a lost laptop and can be opened from any device. The trade-offs: you need internet for files not stored on your device, you depend on your account, and free space is limited.",
      {tip:"Protect the account that holds your cloud files with a strong password and two-step sign-in. Losing the account can mean losing the files."},
      "Cloud storage is most useful for three things: reaching files from any device, sharing with other people, and keeping a copy away from your home or office. It’s less good when you have poor internet, when the files are very sensitive and you don’t trust the provider, or when it’s your only copy.",
      "Before relying on it, check how much free space you have and what happens when it fills up."
     ],
     builder:[
      "Most people use cloud storage through a **sync app**, which keeps a local folder and the cloud copy identical (see {{sync}}). You can also use it just through a website or phone app.",
      {table:[
        ["Free tier (checked Oct 2026)","Shared with"],
        ["Google: 15 GB","Gmail, Google Drive and Google Photos together"],
        ["Apple iCloud: 5 GB","iPhone/iPad backups, iCloud Photos, iCloud Drive, other app data"],
        ["Microsoft OneDrive: 5 GB","OneDrive files; check Microsoft’s current terms for what else counts"]
      ]},
      "Plans and prices change, so check your provider. When an account is full, uploads and syncing stop; with Google, Gmail can stop receiving mail. Look at what uses your space before paying: videos and old phone backups are common culprits, and cloud bins often still count.",
      "Cloud storage makes sharing easy ({{sharing-permissions}}) and gives you an off-site copy — but synced storage alone is not a full backup ({{backup}}).",
      "Choosing a service: the one built into your devices is usually simplest (iCloud on Apple devices, Google Drive on Android and Chromebooks, OneDrive on Windows), but they all work across platforms through apps and websites. Consider: free space and price, how sharing works for the people you work with, whether your school or employer provides one, and how you would export your files if you leave."
     ],
     pro:[
      "Providers achieve durability by replicating or erasure-coding data across disks, servers and often sites; that protects against hardware failure, not against user actions that the system is designed to faithfully replicate (deletion, overwrite, ransomware encryption).",
      "Consider: **jurisdiction and data residency** (where data is stored and which laws apply), **encryption** (most services encrypt in transit and at rest but hold the keys; options such as Apple’s Advanced Data Protection provide end-to-end encryption where the provider can’t read most data, at the cost of harder recovery), **account recovery** (recovery codes and trusted contacts), **organizational policies** (work accounts are controlled by administrators and may be removed when you leave), and **exit** (Google Takeout and similar tools export your data).",
      "Shared storage pools (Google’s 15 GB across services) and family plans complicate quotas: one member’s videos can fill shared space. Business and education plans often have different retention, sharing restrictions and administrator recovery options than personal ones.",
      "Availability is not the same as durability: providers publish service-level targets for uptime, and outages, while rare, happen. If you must reach certain files during an outage or with no connectivity (travel, emergencies), keep them pinned offline or on local storage as well.",
      "Finally, read what a provider does with inactive accounts: some delete content from accounts unused for a long period, which matters for archives you rarely open."
     ]},
    related:["sync","files-on-demand","sharing-permissions"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Google Drive, SharePoint, and OneDrive”"}],
    sources:[{t:"Google One Help: How your storage works", url:"https://support.google.com/googleone/answer/9312312?hl=en"},{t:"Apple Support: Manage your iCloud storage", url:"https://support.apple.com/en-us/108922"},{t:"Microsoft Support: Back up and restore with Windows Backup", url:"https://support.microsoft.com/en-us/windows/back-up-and-restore-with-windows-backup-87a81f8a-78fa-456e-b521-ac0560e32338"}], checked:"2026-10"},

   {id:"sync", title:"Sync", aka:["synchronization","syncing","sync conflict"], tags:["cloud"], summary:"Keeping copies on several devices identical — including deletions and mistakes.",
    levels:{
     starter:[
      "[[sync]] (short for synchronize) keeps the same files identical on all your devices. Change a file on your laptop, and the change appears on your phone and in the cloud.",
      "It’s like several assistants who watch every copy of your notebook and update the others whenever one changes.",
      {warn:"Sync copies **everything**, including deletions and mistakes. Delete a photo on one device and it disappears from all of them. That’s why sync is not a backup."},
      "Sync is wonderful when it works: write a shopping list on the laptop, see it on the phone at the shop. Just remember what it is — a mirror, not a safe. A mirror shows every change, good or bad.",
      "Keep the sync app running, and check its icon now and then for warnings."
     ],
     builder:[
      "A sync app runs on each device, watches a folder, uploads changes to the provider and downloads changes made elsewhere. It needs to be running and online; a device that’s been off catches up later.",
      "Status icons tell you what’s happening — typically a tick (up to date), circling arrows (syncing), a cloud (online-only) and a red cross or warning (problem). Check them before shutting the laptop when you’ve saved something important.",
      {h:"Sync conflicts"},
      "A [[sync-conflict]] happens when the same file is changed in two places before sync can compare them (for example, offline on a train). Services avoid data loss by **keeping both copies**, renaming one (often adding the device name or “conflict”). Compare, merge into one, then delete the extra. Online co-editing (Google Docs, Microsoft 365 on the web, iWork for iCloud) avoids most conflicts by having everyone edit one copy.",
      {tip:"When switching a computer from one sync setting to another, Google’s advice is to make sure everything has finished syncing first, so nothing is lost."},
      "Common sync problems and fixes: a file won’t sync because it’s open in another app (close it); the name has characters another system doesn’t allow (rename it); the account is full (free space or upgrade); or the computer was offline (connect and wait). Most sync apps have a status panel listing items that failed and why — open it before assuming files are lost."
     ],
     pro:[
      "Sync engines compare state (timestamps, hashes, change journals) between client and server; most use a “last writer wins with conflict copy” policy for binary files, because they can’t merge their contents. Real-time editors use operational transformation or CRDT-style algorithms to merge edits character by character, which is why online documents rarely conflict.",
      "Failure modes worth knowing: clock skew and offline edits produce conflicts; long paths, illegal characters or files open in another app can block sync silently; very large folders slow initial scans; and moving a synced folder outside the sync root looks like a mass deletion to the server.",
      "Sync propagates destructive events by design. Ransomware that encrypts local files triggers uploads of the encrypted versions; mass deletions propagate likewise. Providers mitigate with version history, bulk-restore features (for example OneDrive’s whole-OneDrive restore for Microsoft 365 subscribers) and mass-deletion prompts, but these are time-limited. Pair sync with independent backups.",
      "Selective sync (choosing which folders download to a device) and files-on-demand change what “the local copy” means: some folders may not exist locally at all. Scripts or apps that expect a full local tree can fail or trigger mass downloads. In shared team folders, one person’s accidental move can appear to everyone as a mass deletion, which is why many services warn or let administrators restore in bulk."
     ]},
    related:["cloud-storage","files-on-demand","backup"],
    sources:[{t:"Microsoft Support: Save disk space with OneDrive Files On-Demand", url:"https://support.microsoft.com/en-us/office/0e6860d3-d9f3-4971-b321-7092438fb38e"},{t:"Google Drive Help: Stream & mirror files with Drive for desktop", url:"https://support.google.com/drive/answer/13401938?hl=en"}], checked:"2026-10"},

   {id:"files-on-demand", title:"Online-only files (files on demand)", aka:["Files On-Demand","Optimize Mac Storage","Stream files","Available offline"], tags:["cloud","storage"], summary:"Placeholders that look like files but download only when opened, and the safe way to free space.",
    levels:{
     starter:[
      "To save space, cloud apps can keep some files **only online** and show a placeholder on your device. It looks like the file, but it downloads only when you open it. This is called [[files-on-demand]].",
      "That’s great for space, but online-only files won’t open without internet. Before a trip, mark the files you need as available offline.",
      {warn:"To free space, use the app’s **Free up space** or **Remove Download** option — never delete. Deleting a placeholder deletes the file everywhere."},
      "How to tell: look for a little cloud icon next to the file. A tick or a solid circle usually means it’s on your device. Opening an online-only file downloads it, which can take a while for large files on slow connections.",
      "Online-only files still count toward your cloud storage, even though they take no space on your device."
     ],
     builder:[
      {table:[
        ["Service","Online-only","Kept on device"],
        ["OneDrive (Windows)","Blue cloud icon; **Free up space**","Green tick (downloaded) or solid green circle (**Always keep on this device**)"],
        ["iCloud Drive (Mac)","Cloud icon; **Remove Download**; **Optimize Mac Storage** moves older files to iCloud when space is needed","**Download Now**, or **Keep Downloaded** to pin (macOS Sequoia and later)"],
        ["Google Drive for desktop","**Stream files** (default for My Drive; shared drives are always streamed)","**Mirror files**: full local copy"],
        ["ChromeOS Files","Google Drive items by default","Turn on **Available offline**"],
        ["Phones","Cloud-with-arrow icon in Files (iPhone)","**Make available offline** in the Google Drive app"]
      ]},
      "Microsoft’s documentation states plainly that deleting an online-only file from your device deletes it from OneDrive on all devices and online. Google notes that streamed files still count toward your Google storage, while mirrored files use local disk space too.",
      "Before travelling, mark the folders you need as always available, let them download fully (watch the icons), and then check one opens with Wi-Fi turned off. On a Chromebook, also make sure offline access is switched on in Google Drive’s web settings first, or the **Available offline** switch may not appear.",
      "Phones behave the same way: the iPhone Files app shows a cloud icon on items in iCloud Drive that aren’t downloaded yet, and the Google Drive app keeps files online unless you mark them for offline use."
     ],
     pro:[
      "Under the hood these use OS-level placeholder frameworks: Windows Cloud Files API (cfapi) and macOS File Provider. Placeholders carry metadata (size, dates) so apps and search can see them; reading the data triggers a **hydration** download. Some apps (backup tools, antivirus, indexers) can trigger mass hydration unintentionally, filling the disk.",
      "Backup implications: a local backup tool (File History, Time Machine) can only back up what’s physically present. Time Machine and others may skip online-only files or back up only placeholders, so files that exist only in the cloud are protected only by the cloud provider. If you rely on local backups for 3-2-1, pin important folders as always available and check that your backup tool really includes them, since some tools exclude cloud-sync folders entirely.",
      "Streaming modes also depend on the sync app running; Google notes streamed files are only accessible while Drive for desktop is running. Enterprise admins can enforce files-on-demand or set storage-sense policies that dehydrate files not opened for a set number of days.",
      "When migrating to a new computer, remember that online-only files aren’t on the old machine’s disk: copying the old disk won’t carry them, but they don’t need carrying — signing in to the sync app on the new machine restores the placeholders. Conversely, files outside the sync root are not in the cloud and must be moved deliberately.",
      "If disk space suddenly fills after installing a new tool, check whether it read every file in a synced folder and so downloaded them all."
     ]},
    related:["sync","cloud-storage","backup"],
    sources:[{t:"Microsoft Support: Save disk space with OneDrive Files On-Demand", url:"https://support.microsoft.com/en-us/office/0e6860d3-d9f3-4971-b321-7092438fb38e"},{t:"Apple Support: Work with folders and files in iCloud Drive on Mac", url:"https://support.apple.com/en-au/guide/mac-help/-mchl1a02d711/mac"},{t:"Google Chromebook Help: Use Google Drive files offline", url:"https://support.google.com/chromebook/answer/2809731?hl=en"}], checked:"2026-10"},

   {id:"sharing-permissions", title:"Sharing links and permissions", aka:["share","anyone with the link","viewer, commenter, editor"], tags:["cloud","privacy","collaboration"], summary:"Invite named people or share a link, and give the lowest permission that does the job.",
    levels:{
     starter:[
      "There are two ways to share a cloud file:",
      {list:["**Invite people** by email. Only they get in.","**Share a [[sharing-link]].** Depending on settings, anyone who has the link may get in."]},
      "Then choose [[permissions]]: **view** (read only), **comment** (suggest, but not change) or **edit** (change everything).",
      {key:"An “anyone with the link” link is like a house key: whoever holds it can open the door, and links get forwarded."},
      "Give the lowest level that works, and never use an “anyone” link for ID documents, medical or money matters.",
      "A quick checklist before you share: Who exactly needs this? What do they need to do — read, comment or change? Is there anything sensitive inside? Then pick named people and the lowest permission that works. For a public flyer, an anyone-link is fine; for a passport, never."
     ],
     builder:[
      {table:[
        ["Service","Link options","Roles"],
        ["Google Drive","**Restricted** (only people added) or **Anyone with the link**; some files can be **Public** on the web","Viewer, Commenter, Editor"],
        ["OneDrive","**Anyone**, **People in your organization** (work/school), **People with existing access**, **Specific people**","Allow editing on/off; Word documents can open in review mode only"]
      ]},
      "Things people don’t expect: Google Drive editors can reshare and change permissions by default (the owner can turn this off); viewers and commenters can download unless you turn that off; anyone who opens a link you shared can see your name and email as owner; and people who open an anyone-link without signing in appear anonymously.",
      "On OneDrive, **expiry dates** and **passwords** on links are available to Microsoft 365 subscribers. To stop sharing: OneDrive → select the item → details pane → **Manage access** → remove the link or person. Google Drive → **Share** → change General access to **Restricted** or remove people.",
      {tip:"Review your **Shared** list a few times a year and remove links you no longer need."},
      "Teaching example: a parents’ group sharing a fundraising spreadsheet. The treasurer gets **Editor**; committee members get **Commenter**; everyone else gets a separate PDF summary, or **Viewer**. When the fundraiser ends, the owner removes access or changes the link to **Restricted**, so the list of families and payments doesn’t stay open indefinitely."
     ],
     pro:[
      "Apply **least privilege** and **need to know**. Prefer named-user sharing for anything personal: it leaves an audit trail (who opened, in many business plans), can be revoked per person, and requires authentication. Anyone-links are bearer tokens: security rests entirely on the link staying private, and they leak through forwarding, chat previews, browser history, shared screens and public posts.",
      "Folder sharing is inherited: files later added to a shared folder are shared too, and in Google Drive an anyone-link on a file isn’t restricted by the folder’s own settings. Moving a file into a shared folder may widen access; moving it out may not remove access granted directly.",
      "In organizations, administrators can disable external or anonymous links, force expiry, and apply sensitivity labels; personal accounts lack these controls. When a collaborator leaves, remove them explicitly — and when *you* leave an organization, files you own in a work account may be deleted or transferred, breaking links others rely on.",
      "Ownership matters as much as access: in many services the owner’s storage holds the file and the owner’s account deletion removes it. For shared team resources, use shared drives or team sites owned by the organization rather than an individual’s personal folder, so work survives people leaving."
     ]},
    related:["cloud-storage","sync","files"], read:[{book:"wss", where:"Chapter 2, Section 2.6 “Collaboration” — “Sharing a Document”"}],
    sources:[{t:"Google Drive Help: Share files from Google Drive", url:"https://support.google.com/drive/answer/2494822?hl=en"},{t:"Microsoft Support: Share files and folders in Microsoft OneDrive", url:"https://support.microsoft.com/en-us/office/share-files-and-folders-in-microsoft-onedrive-9fcc2f7d-de0c-4cec-93b0-a82024800c07"}], checked:"2026-10"},

   {id:"version-history", title:"Version history", aka:["previous versions","revision history","Keep forever"], tags:["cloud","recovery"], summary:"Earlier versions of a file that you can view and restore, for a limited time.",
    levels:{
     starter:[
      "[[version-history]] is a list of earlier versions of a file, saved automatically, so you can go back to how it was yesterday or last week. It’s like being able to rewind a document.",
      "It’s perfect for “I deleted the good paragraph by mistake” or “someone overwrote my spreadsheet”.",
      "But old versions are kept only for a limited time, and they live in the same account as the file. It’s an undo button, not a backup.",
      "How it helps in real life: Hana’s colleague accidentally typed over a whole column of a shared budget. Instead of rebuilding it, Hana opened the version history, found yesterday’s version and restored it in a minute.",
      "Think of version history as a time-limited rewind. Your backups are the long-term safety net."
     ],
     builder:[
      {table:[
        ["Where","How to open it","How long (check your plan)"],
        ["OneDrive","Right-click the file (on the web or in File Explorer) → **Version history**","Kept for 30 days"],
        ["Google Docs, Sheets, Slides","**File → Version history**","Their own history; you can name versions"],
        ["Google Drive (uploaded files)","Right-click or **More** (⋮) → **Manage versions** (in some layouts under **File information**)","A version may be deleted after 30 days or once 100 newer ones exist, unless you choose **Keep forever**"],
        ["Windows File History","Right-click a folder → **Restore previous versions**","As long as the external drive keeps them"],
        ["Mac Time Machine; Mac apps","Time Machine, or **File → Revert To → Browse All Versions** in many apps","Until the backup drive is full"]
      ]},
      "Restoring an older version usually makes it the current version; the one you replaced becomes another entry in the history. To be safe, download or copy the old version instead of restoring over the current one when unsure.",
      "Naming versions: Google Docs, Sheets and Slides let you name a version (File → Version history → Name current version), such as “sent to funder 2026-05-30”. Named versions are easier to find later and are a cleaner way to mark milestones than adding “final” to the file name. Many Microsoft 365 apps show versions through **File → Info → Version History**."
     ],
     pro:[
      "Version history in a cloud service is retained **within the same account and system** as the live file. It does not protect against account loss, provider-side policy changes, retention expiry, or an attacker with account access who can purge versions. Business plans often allow longer, admin-configured retention (and legal holds); personal plans typically don’t.",
      "Version history also has privacy implications: removed text, earlier figures or a deleted photo in a document may remain visible to anyone with edit access via the history. Before sharing a document with outsiders, consider making a fresh copy (which typically starts a new history) or exporting a PDF.",
      "Local versioning (File History, Time Machine, APFS snapshots) complements cloud history because it’s independent of the account. Ransomware recovery commonly combines a bulk restore of cloud history to a point before the attack with local, disconnected backups.",
      "Storage accounting differs: some services count stored versions against your quota and some don’t; business plans often let admins set the number of versions kept. For large binary files edited often (videos, databases), version history can consume significant space or be capped quickly, so don’t assume long histories for those.",
      "Treat version history as one layer among several, never the only way back."
     ]},
    related:["backup","recycle-bin","sync"],
    sources:[{t:"Microsoft Support: Restore a previous version of a file stored in OneDrive", url:"https://support.microsoft.com/office/159cad6d-d76e-4981-88ef-de6e96c93893"},{t:"Google Drive Help: Check activity & file versions", url:"https://support.google.com/drive/answer/2409045?hl=en"},{t:"Microsoft Support: Backup and restore with File History", url:"https://support.microsoft.com/en-us/windows/backup-and-restore-with-file-history-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc"}], checked:"2026-10"},

   {id:"backup", title:"Backups", aka:["back up","Time Machine","File History","iCloud Backup"], tags:["backup","security"], summary:"A separate copy of your important data in a separate, safe place — and the tools that make one.",
    levels:{
     starter:[
      "A [[backup]] is a copy of your important data kept in a separate, safe place. If your device is lost, stolen, broken or hit by [[ransomware]], you can get your files back.",
      "Things that *aren’t* backups on their own: a synced folder (deletions sync too), the Recycle Bin, a second copy on the same drive.",
      {list:["Mac: **Time Machine** to an external drive.","Windows: **File History** to an external drive, and **Windows Backup** to OneDrive.","iPhone: **iCloud Backup**.","Android: **Google backup**, plus a photo backup app."]},
      {key:"Back up anything you’d miss — and unplug the backup drive when it’s done."},
      "Where to start if you have nothing: turn on your phone’s backup and photo backup today, then set up Time Machine or File History with an inexpensive external drive this week. Those two steps alone cover most of what people lose: photos, documents and contacts."
     ],
     builder:[
      {table:[
        ["Tool","Where to find it","Notes"],
        ["Time Machine (Mac)","System Settings → General → Time Machine","Hourly for 24 hours, daily for a month, weekly before that; deletes the oldest when full"],
        ["File History (Windows)","Control Panel → System and Security → File History","External or network drive; restore via **Restore previous versions**"],
        ["Windows Backup","Start → type “backup”, or Settings → Accounts → Windows backup","Desktop, Documents, Pictures, Videos, Music to OneDrive, plus settings"],
        ["iCloud Backup (iPhone)","Settings → [your name] → iCloud → iCloud Backup","Runs when charging, on Wi-Fi and locked"],
        ["Google backup (Android)","Settings → Google → All services → Backup (varies)","Apps, contacts, call history, settings, SMS; photos via Google Photos"]
      ]},
      "Chromebooks keep most things in Google’s cloud, but files in **My files** are local only: move important ones to Google Drive or copy them to an external drive.",
      "The NCSC’s practical points: back up anything you value; use the cloud or removable media; set backups to run automatically; and **disconnect removable backups when not in use**, because malware can spread to attached drives.",
      "Then follow {{rule-321}} and test with {{restore-test}}.",
      "How often? Ask how much work you could bear to redo. Most built-in tools back up automatically (Time Machine hourly while the drive is connected; phones daily when charging on Wi-Fi). If your external drive only gets plugged in on Sundays, then up to a week of work is at risk until then — which may be fine for family photos, but not for a business’s invoices."
     ],
     pro:[
      "Distinguish **sync** (replicates current state), **versioned backup** (keeps point-in-time copies), and **archive** (long-term, rarely changing copies). A robust personal setup has at least one versioned backup independent of the primary account, plus an offline or immutable copy.",
      "Define what you can tolerate: how much recent work can you afford to lose (sets backup frequency) and how fast must you recover (sets method: a full-disk image restores a whole machine quickly; file-level backups are slower to rebuild a system but simpler).",
      "Security: encrypt backups (Time Machine offers encryption; phone backups to iCloud are encrypted, with end-to-end options); protect cloud-backup accounts with multi-factor sign-in; keep at least one copy offline, since ransomware actively seeks network shares and attached drives. CISA advises offline copies, encryption, and testing that data can be restored fully and partially.",
      "Watch for silent gaps: online-only cloud files, app libraries stored outside backed-up folders, excluded folders, full backup drives, and backups that stopped after an OS update or password change. Monitoring the last-backup date is as important as setting it up.",
      "Don’t forget data that isn’t in ordinary files: email stored only in a desktop app, password-manager vaults, two-factor authenticator apps (save recovery codes), messaging histories (each app has its own backup setting), and website or social-media content you created. Each needs its own export or backup plan."
     ]},
    related:["rule-321","restore-test","version-history","sync"], read:[{book:"wss", where:"Chapter 2, Section 2.2 “Files and Folders” — “Tips for Organizing and Maintaining Files”"},{book:"ncsc", where:"“Backing up your data”"}],
    sources:[{t:"NCSC: Backing up your data", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data"},{t:"Apple Support: Back up your Mac with Time Machine", url:"https://support.apple.com/en-us/104984"},{t:"Android Help: Back up or restore data on your Android device", url:"https://support.google.com/android/answer/2819582?hl=en"}], checked:"2026-10"},

   {id:"rule-321", title:"The 3-2-1 backup rule", aka:["3-2-1 rule","three copies two media one off-site"], tags:["backup"], summary:"Three copies of important files, on two kinds of storage, with one copy off-site.",
    levels:{
     starter:[
      "The [[rule-321]] is a simple test for your backups:",
      {list:["**3** copies of important files (the original and two backups)","**2** different kinds of storage (for example, an external drive and the cloud)","**1** copy off-site, away from where you live or work"]},
      "Why? So that no single disaster — a broken laptop, a burglary, a fire, a cloud account problem — can take every copy at once. The US agency CISA calls it “a trusted guideline”.",
      {ex:"Photos on your phone (1) · backed up to a cloud photo service (2, off-site) · copied once a year to an external drive kept in a drawer (3)", label:"Example"},
      "The point is to spread risk. Any one place can fail: a laptop gets dropped, a drive dies, a house floods, an account gets locked. With three copies in different places, it takes several unlucky events at once to lose everything.",
      "You don’t need to reach 3-2-1 on day one. Two good copies is far better than one; add the third when you can."
     ],
     builder:[
      "Check each part honestly:",
      {list:[
        "**Three copies?** A synced cloud folder and the laptop folder are linked; a deletion removes both. Count only copies that keep their contents when the original changes.",
        "**Two kinds of storage?** Two partitions on one drive are one kind (and one drive). An internal drive plus an external drive count as two physical devices; the cloud counts as another kind.",
        "**One off-site?** Cloud backup qualifies. So does an [[external-drive]] kept at a relative’s house or at work, swapped regularly — an [[offsite-copy]]."
      ]},
      {table:[
        ["Situation","Copy 1","Copy 2","Copy 3 (off-site)"],
        ["Student","Laptop","Time Machine / File History drive","University or personal cloud backup"],
        ["Family","Phone and computer","External drive at home","Cloud photo service, or a drive at a relative’s"],
        ["Small business","Office PC","Nightly external-drive backup","Cloud backup service or a rotated drive taken home"]
      ]},
      "Keep the local backup drive unplugged when not in use, as the NCSC advises, and test restores.",
      "Cost-conscious ways to get there: use the cloud storage you already have for the off-site copy of your most important files; buy one external drive for Time Machine or File History; and for the irreplaceable items (photos, scans of key documents), make a once-a-year copy to a second drive kept at a trusted relative’s or friend’s home."
     ],
     pro:[
      "3-2-1 was popularized in digital-photography and IT practice and is now standard guidance; some backup vendors extend it to **3-2-1-1-0**: add one **offline, air-gapped or immutable** copy (which ransomware can’t alter) and **zero** errors on verified restore tests.",
      "Immutable options include write-once object storage with retention locks, backup services with deletion delays, and drives physically disconnected. Rotation schemes (for example, two drives alternating weekly, one always off-site) give both off-site and offline copies cheaply.",
      "Count copies by **failure domain**, not by file count: same account, same device, same building, same credentials and same ransomware reach are each domains. A cloud backup tied to the same compromised account as your sync service may share a failure domain. CISA’s guidance adds: encrypt and physically secure backups, keep offline copies, and ensure you can roll back at least seven days and restore both fully and partially.",
      "For small organizations, document the scheme: what is backed up, by which tool, how often, where each copy lives, who checks it and when restores were last tested. Auditors, insurers and incident responders will ask, and the document is what lets someone else restore the business if the usual person is unavailable.",
      "Review the scheme whenever equipment, staff or providers change."
     ]},
    related:["backup","restore-test","cloud-storage"], read:[{book:"ncsc", where:"“Backing up your data”"}],
    sources:[{t:"CISA: Back Up Government Data", url:"https://www.cisa.gov/back-government-data"},{t:"NCSC: Backing up your data", url:"https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/always-back-up-your-most-important-data"}], checked:"2026-10"},

   {id:"restore-test", title:"Testing a restore", aka:["restore","backup test","recovery drill"], tags:["backup"], summary:"Prove your backup works by actually getting files back, regularly.",
    levels:{
     starter:[
      "A backup you’ve never restored from is a hope, not a plan. To [[restore]] means getting files back from a backup.",
      {ol:["Pick a file or two you know well.","Check the date of the last backup.","Restore them to a new folder, so nothing current is replaced.","Open them. Are they right?","Write down the date. Repeat every few months."]},
      {tip:"Do a test right after setting up a backup, and again after any big change such as a new computer or phone."},
      "Why bother if the backup app says “completed”? Because “completed” only means the app finished copying what it was told to copy. It doesn’t prove the right folders were included, that the drive is readable, or that you remember how to get files back. A five-minute test answers all three.",
      "Put a reminder in your calendar every three months."
     ],
     builder:[
      {table:[
        ["Tool","How to restore a file"],
        ["File History (Windows)","Right-click the folder → **Restore previous versions** → pick a version → **Restore → Restore to…** a new location"],
        ["Time Machine (Mac)","Open the folder, enter Time Machine, pick a date, select the file → **Restore**"],
        ["OneDrive","Website → **Recycle bin** for deleted items; right-click a file → **Version history** for older versions"],
        ["Google Drive","**Trash** → **Restore**; for uploaded files, **Manage versions**"],
        ["iCloud Drive","**Recently Deleted** → **Recover**, or icloud.com/recovery → **Restore Files**"],
        ["Phones","A full restore happens when setting up a phone; check backup dates and that photos appear on the web"]
      ]},
      "Microsoft notes that File History’s Restore replaces the current file and can’t be undone — so use **Restore to…** a separate folder when testing.",
      "Also check what *isn’t* covered: are your photo library, email archive and that one folder on the Desktop included? Restore tests reveal gaps that settings screens hide.",
      "What a failed test usually reveals: a folder that was never included (often the Desktop or a photo library), a backup drive that stopped being plugged in months ago, a phone backup that failed because cloud storage was full, or a forgotten encryption password. Each is easy to fix once found — and painful to discover during a real emergency."
     ],
     pro:[
      "Test at three levels: **file** (single item, frequently), **folder or app** (a project or photo library, occasionally) and **full system** (a whole device onto spare hardware or a virtual machine, rarely but realistically). CISA advises being able to restore both fully and partially, and to roll back at least seven days.",
      "Measure what matters: time taken, data loss window (age of the newest restorable version), and whether you could do it without the original device — e.g., do you know the encryption password for the backup drive and the cloud account’s recovery codes if your phone (the second factor) is the thing that’s lost?",
      "Keep a restore runbook: where backups are, credentials stored safely (a password manager plus an offline copy), steps for each tool, and contacts. For small organizations, schedule tests and record results; an untested backup should be treated as failed.",
      "For phones, a realistic test is restoring a backup onto a spare or reset device, or at least confirming in the provider’s web interface that backups are recent and include the expected data types. Because phone restores are usually all-or-nothing, rehearse the sign-in and two-factor steps you would need on a new phone, including where your recovery codes are."
     ]},
    related:["backup","rule-321","version-history"],
    sources:[{t:"Microsoft Support: Backup and restore with File History", url:"https://support.microsoft.com/en-us/windows/backup-and-restore-with-file-history-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc"},{t:"CISA: Back Up Government Data", url:"https://www.cisa.gov/back-government-data"},{t:"Apple Support: If you’re missing files in iCloud Drive", url:"https://support.apple.com/en-au/111763"}], checked:"2026-10"}
  ],
  terms:[
   {id:"file", term:"File", def:"A named collection of data kept on storage, such as a photo, document or song. It has data, a name and metadata.", codex:"files"},
   {id:"folder", term:"Folder", def:"A container for files and other folders, also called a directory. Folders inside folders form a tree.", codex:"folders-paths"},
   {id:"file-extension", term:"File extension", def:"The letters after the last dot in a file name, such as `.pdf` or `.jpg`. They tell the system what kind of file it is and which app should open it.", codex:"file-extensions"},
   {id:"file-format", term:"File format", def:"The agreed way data is arranged inside a file. The extension is the label; the format is the actual arrangement.", codex:"file-formats"},
   {id:"pdf", term:"PDF", def:"Portable Document Format: a fixed-layout document that looks the same on every device. An international standard (ISO 32000).", codex:"file-formats"},
   {id:"path", term:"Path", def:"The full address of a file: every folder from the top of the tree down to the file, such as `/Users/amara/Documents/minutes.docx`.", codex:"folders-paths"},
   {id:"file-explorer", term:"File Explorer", def:"The Windows app for browsing, opening, moving and organizing files and folders.", codex:"folders-paths"},
   {id:"finder", term:"Finder", def:"The Mac app for browsing, opening, moving and organizing files and folders.", codex:"folders-paths"},
   {id:"zip", term:"Zip file", def:"One file that bundles many files and folders, usually compressed. Unzipping (extracting) gives back the originals exactly.", codex:"compression-zip"},
   {id:"compression", term:"Compression", def:"Storing data in fewer bytes. Lossless compression (zip) rebuilds every byte; lossy compression (JPEG, MP4) throws some detail away.", codex:"compression-zip"},
   {id:"cloud", term:"The cloud", def:"Computers in a provider’s data centres that you use over the internet, instead of your own device.", codex:"cloud-storage"},
   {id:"cloud-storage", term:"Cloud storage", def:"Keeping files on a provider’s servers, reached over the internet, such as Google Drive, iCloud Drive, OneDrive or Dropbox.", codex:"cloud-storage"},
   {id:"sync", term:"Sync", def:"Short for synchronize: keeping copies on several devices identical, so a change (or deletion) on one appears on all.", codex:"sync"},
   {id:"sharing-link", term:"Sharing link", def:"A web link that opens a cloud file or folder. Depending on its setting, it works only for named people or for anyone who has it.", codex:"sharing-permissions"},
   {id:"permissions", term:"Permissions", def:"Rules about what each person may do with a file or folder, such as view, comment or edit.", codex:"sharing-permissions"},
   {id:"version-history", term:"Version history", def:"Earlier versions of a file, saved automatically for a limited time, that you can view and restore.", codex:"version-history"},
   {id:"backup", term:"Backup", def:"A copy of your important data kept in a separate, safe place, so you can get it back if the original is lost or damaged.", codex:"backup"},
   {id:"restore", term:"Restore", def:"Getting files back from a backup, a bin or version history.", codex:"restore-test"},
   {id:"rule-321", term:"3-2-1 rule", def:"Keep 3 copies of important data, on 2 different kinds of storage, with 1 copy off-site.", codex:"rule-321"},
   {id:"external-drive", term:"External drive", def:"A hard drive or SSD in a small case that plugs into a computer, often by USB. Commonly used for backups.", codex:"backup"},
   {id:"iso-8601", term:"ISO 8601", def:"The international standard for writing dates as year-month-day, such as 2026-04-03. Unambiguous, and sorts in time order.", codex:"file-naming"},
   {id:"metadata", term:"Metadata", def:"Data about data: a file’s size, dates, owner, and for photos sometimes the camera and location.", codex:"files"},
   {id:"open-format", term:"Open format", def:"A file format whose specification is published so anyone may build software to read and write it, such as CSV, PNG or PDF.", codex:"file-formats"},
   {id:"proprietary-format", term:"Proprietary format", def:"A file format controlled by one company, which may not publish full details, so it opens well mainly in that company’s apps.", codex:"file-formats"},
   {id:"home-folder", term:"Home folder", def:"Your personal folder on a computer, named after your user account, holding Desktop, Documents, Downloads and more.", codex:"folders-paths"},
   {id:"shortcut", term:"Shortcut (alias)", def:"A small pointer file that opens a file or folder stored elsewhere. Called an alias on a Mac. Deleting it doesn’t delete the original.", codex:"folders-paths"},
   {id:"recycle-bin", term:"Recycle Bin / Trash", def:"Where deleted files wait before being removed for good, so you can restore them. Some deletions skip it.", codex:"recycle-bin"},
   {id:"files-on-demand", term:"Online-only files", def:"Placeholders that look like files on your device but download only when opened, saving space. Called Files On-Demand in OneDrive.", codex:"files-on-demand"},
   {id:"sync-conflict", term:"Sync conflict", def:"When the same file is changed in two places before sync can compare them. Apps usually keep both copies for you to merge.", codex:"sync"},
   {id:"storage-quota", term:"Storage quota", def:"The amount of space your cloud account allows. When it’s full, new files stop uploading or syncing.", codex:"cloud-storage"},
   {id:"offsite-copy", term:"Off-site copy", def:"A backup kept in a different place from the original, so one fire, flood or theft can’t destroy every copy.", codex:"rule-321"},
   {id:"file-history", term:"File History", def:"A Windows tool that copies your files to an external or network drive and keeps earlier versions you can restore.", codex:"backup"},
   {id:"time-machine", term:"Time Machine", def:"The Mac’s built-in backup tool. It backs up to an external drive and keeps hourly, daily and weekly versions.", codex:"backup"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t1u2-q01", lesson:"t1u2-l1", level:1, q:"Which three parts make up a file?", options:[
     {t:"Data, a name and metadata", ok:true, why:"The content (data), what it’s called (name, including the extension), and information about it (metadata)."},
     {t:"A folder, a path and an app", why:"Those describe where a file lives and what opens it, not the file itself."},
     {t:"Text, pictures and sound", why:"Those are kinds of content. Any file, whatever its content, has data, a name and metadata."},
     {t:"An icon, a size and a colour", why:"The icon is chosen by the system from the extension; size is one piece of metadata; files don’t have colours."}]},
   {id:"t1u2-q02", lesson:"t1u2-l1", level:2, q:"In the file name `2026.03.trip.photos.zip`, what is the extension?", options:[
     {t:".zip", ok:true, why:"The extension is only the part after the last dot. This is a zip archive."},
     {t:".2026", why:"Dots earlier in the name are just part of the name."},
     {t:".photos", why:"That’s part of the name. Only the text after the final dot counts."},
     {t:".03.trip.photos.zip", why:"The extension is a single part after the last dot, not everything after the first."}]},
   {id:"t1u2-q03", lesson:"t1u2-l1", level:3, q:"Sione receives `delivery_note.pdf.exe` by email from an unknown sender. With extensions hidden it showed as `delivery_note.pdf`. What should he do?", options:[
     {t:"Not open it: it’s a Windows program pretending to be a PDF", ok:true, why:"The real extension (.exe) is after the last dot. A delivery note should never be a program. Delete it or report it."},
     {t:"Open it, because it says .pdf", why:"The .pdf is part of the name, put there to fool people with extensions hidden."},
     {t:"Rename it to .pdf and then open it", why:"Renaming changes the label, not the content. It’s still a program inside."},
     {t:"Zip it before opening to make it safe", why:"Zipping wraps the file; it doesn’t remove what it does when run."}]},
   {id:"t1u2-q04", lesson:"t1u2-l1", level:1, q:"What does a PDF do best?", options:[
     {t:"Keep a document looking the same on every device", ok:true, why:"PDF fixes fonts and layout, which is why it’s used for finished documents and printing."},
     {t:"Make a document impossible to copy or edit", why:"Text in PDFs can often be copied, and many apps can edit PDFs. It isn’t a security tool."},
     {t:"Store spreadsheets with working formulas", why:"A PDF freezes a spreadsheet into a picture of numbers. Use .xlsx or .ods for formulas."},
     {t:"Shrink photos to the smallest size", why:"That’s a job for image formats such as JPEG or HEIC."}]},
   {id:"t1u2-q05", lesson:"t1u2-l1", level:2, q:"Which file is the best example of an open format to keep a simple table readable for decades?", options:[
     {t:"inventory.csv", ok:true, why:"CSV is plain text with a widely documented layout; almost any software, now or later, can read it."},
     {t:"inventory.pages", why:"A single-company format that opens properly mainly in Apple’s apps."},
     {t:"inventory.exe", why:"That’s a program, not a data format at all."},
     {t:"inventory.zip with no information about what’s inside", why:"A zip is just a container. What matters for the long term is the format of the files inside it."}]},
   {id:"t1u2-q06", lesson:"t1u2-l1", level:3, q:"Priya’s iPhone photos are .heic, and a council website rejects them. What’s the most reliable fix?", options:[
     {t:"Export or share them as JPEG, or set Camera → Formats → Most Compatible for future photos", ok:true, why:"Converting rewrites the data as JPEG. Most Compatible makes the iPhone capture JPEG from now on."},
     {t:"Rename each file from .heic to .jpg", why:"That changes only the label; the data stays HEIC, so the site may still fail."},
     {t:"Zip the photos and upload the zip", why:"The site wants JPEG images, not a zip. The photos inside would still be HEIC."},
     {t:"Take screenshots of the photos and upload those", why:"It can work, but it lowers quality and loses detail. Exporting as JPEG is the proper way."}]},
   {id:"t1u2-q07", lesson:"t1u2-l1", level:1, q:"What kind of compression does zip use?", options:[
     {t:"Lossless: unzipping gives back every byte exactly", ok:true, why:"Zip finds repetition and rebuilds it perfectly. Nothing is lost."},
     {t:"Lossy: it removes detail you won’t notice", why:"That’s how JPEG and MP4 work. Zip never throws data away."},
     {t:"Encryption: it hides the contents with a password", why:"Compression and encryption are different. Built-in zip tools don’t encrypt."},
     {t:"Conversion: it changes files into a smaller format", why:"Zip doesn’t change the files’ formats; it wraps them."}]},
   {id:"t1u2-q08", lesson:"t1u2-l1", level:2, q:"Mei double-clicks a zip on Windows, opens a document inside it, edits it and saves. Later her changes seem to be missing. What’s the most likely reason?", options:[
     {t:"She edited a temporary copy; she should have extracted the zip first", ok:true, why:"Files opened from inside a zip are often opened from a temporary location. Extract, then edit the extracted copy."},
     {t:"Zip files delete any changes on purpose", why:"Zip doesn’t delete changes; the edited copy simply wasn’t saved back into the zip."},
     {t:"Her document turned into a PDF", why:"Nothing converts the format. The issue is where the saved copy went."},
     {t:"Windows can’t open documents inside zips at all", why:"It can open them for reading; saving is where the trouble starts."}]},
   {id:"t1u2-q09", lesson:"t1u2-l1", level:3, q:"Tomás must send a volunteer rota that three coordinators will keep updating, and a finished poster for a printer. What should he send?", options:[
     {t:"The rota as an editable spreadsheet or shared online file; the poster as a PDF", ok:true, why:"Editable for things others will change; PDF for finished things that must look exact."},
     {t:"Both as PDFs, so nobody can change them", why:"The coordinators need to change the rota, which PDFs make awkward."},
     {t:"Both as editable files", why:"A printer needs fixed layout and fonts; an editable file may shift or lack fonts."},
     {t:"Both as .txt files", why:"Plain text loses the poster’s design and the rota’s layout."}]},
   /* Lesson 2 */
   {id:"t1u2-q10", lesson:"t1u2-l2", level:1, q:"What is a path?", options:[
     {t:"The full address of a file, from the top folder down to the file", ok:true, why:"For example `C:\\Users\\Amara\\Documents\\minutes.docx`."},
     {t:"The app that opens a file", why:"That’s the default app, chosen from the extension."},
     {t:"A shortcut on the desktop", why:"A shortcut points to a path, but it’s a separate small file."},
     {t:"The size of a file in bytes", why:"Size is metadata, not location."}]},
   {id:"t1u2-q11", lesson:"t1u2-l2", level:2, q:"Which is a Windows path?", options:[
     {t:"`C:\\Users\\Kenji\\Documents\\shop\\prices.xlsx`", ok:true, why:"Drive letter at the start, backslashes between folders: Windows style."},
     {t:"`/Users/kenji/Documents/shop/prices.xlsx`", why:"Starts at / with forward slashes: macOS style."},
     {t:"`/home/kenji/Documents/shop/prices.xlsx`", why:"That’s the Linux style, with home folders under /home."},
     {t:"`https://kenji/Documents/prices.xlsx`", why:"That’s shaped like a web address, not a file path on a computer."}]},
   {id:"t1u2-q12", lesson:"t1u2-l2", level:1, q:"By default, what happens when you drag a file to another folder on the same drive?", options:[
     {t:"It moves", ok:true, why:"Same drive: the file changes location and there’s still only one."},
     {t:"It copies", why:"Copying is the default when dragging to a different drive."},
     {t:"A shortcut is made", why:"Shortcuts are only made if you ask (for example, holding Alt on Windows)."},
     {t:"It’s deleted", why:"Dragging never deletes a file unless you drop it on the bin."}]},
   {id:"t1u2-q13", lesson:"t1u2-l2", level:3, q:"Ana copies a shortcut to her `Tax 2025` folder onto a USB stick and takes it to her accountant. What will the accountant find?", options:[
     {t:"A shortcut that doesn’t open anything, because the real folder is still on Ana’s computer", ok:true, why:"A shortcut is just a pointer. The files themselves weren’t copied."},
     {t:"All her tax files", why:"Only the pointer was copied, not the folder it points to."},
     {t:"A zip of the folder", why:"Copying a shortcut doesn’t create a zip."},
     {t:"An empty folder with the same name", why:"It’s a shortcut file, not a folder, and it doesn’t contain anything."}]},
   {id:"t1u2-q14", lesson:"t1u2-l2", level:3, q:"Oluwaseun opened an emailed form, filled it in and clicked Save. Now he can’t find it. Where should he look first?", options:[
     {t:"The Downloads folder, sorted by Date modified", ok:true, why:"Attachments are usually saved to Downloads (or a temporary folder). Sorting by date shows the newest first."},
     {t:"The Recycle Bin", why:"Saving doesn’t delete anything, so the bin is unlikely to have it."},
     {t:"The Windows or System folder", why:"Apps don’t save personal files there."},
     {t:"Nowhere — saved attachments are always lost", why:"They’re rarely lost, just saved somewhere unexpected. Next time, use Save As to choose the folder."}]},
   {id:"t1u2-q15", lesson:"t1u2-l2", level:1, q:"Which character can’t be used in a Windows file name?", options:[
     {t:"?", ok:true, why:"Windows forbids \\ / : * ? \" < > | in names."},
     {t:"-", why:"Hyphens are fine and recommended to join words."},
     {t:"_", why:"Underscores are fine and often used to separate parts of a name."},
     {t:"7", why:"Digits are fine anywhere in a name."}]},
   {id:"t1u2-q16", lesson:"t1u2-l2", level:2, q:"On a Mac, how do you restore a file from the Trash to where it was?", options:[
     {t:"Open Trash, select the file, choose File → Put Back", ok:true, why:"Put Back returns it to its original folder."},
     {t:"Empty the Trash", why:"Emptying deletes everything in it permanently."},
     {t:"Restart the Mac", why:"Restarting doesn’t restore deleted files."},
     {t:"Open Time Machine settings and turn it off", why:"That would stop backups. The Trash is the place to restore from."}]},
   {id:"t1u2-q17", lesson:"t1u2-l2", level:3, q:"Dmitri moved his photo folder to a USB stick to free space, then deleted it from the laptop. What’s the problem?", options:[
     {t:"The stick now holds the only copy, and sticks are easily lost or damaged", ok:true, why:"Moving isn’t backing up. He has one copy in a fragile place. He needs at least one more copy elsewhere."},
     {t:"USB sticks can’t store photos", why:"They can store any files; the issue is having only one copy."},
     {t:"The photos were converted to a different format", why:"Copying or moving doesn’t change formats."},
     {t:"No problem: the Recycle Bin keeps a copy forever", why:"The bin isn’t permanent and may be emptied; and it’s not a backup."}]},
   {id:"t1u2-q18", lesson:"t1u2-l2", level:2, q:"Which keyboard method moves (not copies) a file on Windows?", options:[
     {t:"Ctrl + X, then Ctrl + V", ok:true, why:"X cuts the file; pasting puts it in the new place and removes it from the old."},
     {t:"Ctrl + C, then Ctrl + V", why:"That copies; the original stays."},
     {t:"Ctrl + Z", why:"That undoes the last action."},
     {t:"Ctrl + S", why:"That saves an open document."}]},
   /* Lesson 3 */
   {id:"t1u2-q19", lesson:"t1u2-l3", level:1, q:"How is 3 April 2026 written in ISO 8601?", options:[
     {t:"2026-04-03", ok:true, why:"Year, month, day, each with leading zeros."},
     {t:"03-04-2026", why:"Day-month-year: ambiguous between countries, and doesn’t sort in time order."},
     {t:"04-03-2026", why:"Month-day-year: also ambiguous and doesn’t sort correctly."},
     {t:"2026-4-3", why:"ISO 8601 uses two digits for month and day: 04 and 03."}]},
   {id:"t1u2-q20", lesson:"t1u2-l3", level:2, q:"Why do research data guides recommend `v01`, `v02` … instead of `v1`, `v2`?", options:[
     {t:"So versions sort in the right order in programs that compare names character by character", ok:true, why:"Without padding, those programs list v1, v10, v11, v2. With padding, the order is right everywhere."},
     {t:"Because computers can’t read single digits", why:"Single digits are fine; the issue is sorting order."},
     {t:"To make files smaller", why:"File names don’t affect file size."},
     {t:"Because Windows forbids single-digit numbers", why:"Windows allows any digits in names."}]},
   {id:"t1u2-q21", lesson:"t1u2-l3", level:1, q:"Which file name follows the naming guidance best?", options:[
     {t:"`2026-02-11_choir_concert-programme_v03.pdf`", ok:true, why:"ISO date, project, content, padded version, no spaces or special characters."},
     {t:"Choir programme FINAL!!.pdf", why:"Spaces, exclamation marks, no date, and “final”."},
     {t:"cp3.pdf", why:"Machine-friendly but meaningless to people."},
     {t:"11/02/2026 choir.pdf", why:"Slashes aren’t allowed in names and the date format is ambiguous."}]},
   {id:"t1u2-q22", lesson:"t1u2-l3", level:3, q:"Fatima’s folder has `notes final.docx`, `notes final2.docx` and `notes FINAL use this.docx`. What change would stop this happening again?", options:[
     {t:"Number versions (v01, v02…) and record which one was sent, instead of using “final”", ok:true, why:"Version numbers always move forward; status like “sent” belongs in a note, a folder or the version history."},
     {t:"Use capital letters for the newest version", why:"Capitals carry no reliable meaning and some systems ignore case."},
     {t:"Put all the versions in a zip", why:"Zipping hides the mess but doesn’t say which is current."},
     {t:"Save every version to the Desktop", why:"Location doesn’t fix ambiguous names; the Desktop just gets cluttered."}]},
   {id:"t1u2-q23", lesson:"t1u2-l3", level:3, q:"Hana names monthly reports `report_03-2026`, `report_11-2025` and `report_01-2026`. Sorted by name, which comes first?", options:[
     {t:"report_01-2026", ok:true, why:"The month comes first in her names, so sorting compares months before years: 01, then 03, then 11. Year-first (2025-11, 2026-01, 2026-03) would sort in time order."},
     {t:"report_11-2025", why:"That’s the oldest report, but sorting looks at 11 before 2025, so it lands last."},
     {t:"report_03-2026", why:"03 comes after 01 when sorting."},
     {t:"They sort in time order automatically", why:"Only year-first dates sort in time order."}]},
   {id:"t1u2-q24", lesson:"t1u2-l3", level:2, q:"Why do many guides recommend avoiding spaces in file names?", options:[
     {t:"Some software, scripts and web links handle spaces badly", ok:true, why:"Spaces can break commands and become %20 in links. Hyphens or underscores avoid that."},
     {t:"Spaces make files much larger", why:"A name’s characters don’t change the file’s size meaningfully."},
     {t:"Windows and macOS forbid spaces", why:"Both allow spaces; the problems come from other tools."},
     {t:"Spaces delete the extension", why:"They don’t affect the extension."}]},
   {id:"t1u2-q25", lesson:"t1u2-l3", level:1, q:"In a project folder, what is a README file for?", options:[
     {t:"Explaining the project, what goes where and what codes in names mean", ok:true, why:"It’s a short note for colleagues and your future self."},
     {t:"Storing a backup of every file", why:"A README is a text note, not a backup."},
     {t:"Making the folder load faster", why:"It has no effect on speed."},
     {t:"Locking the folder from edits", why:"It doesn’t change permissions."}]},
   {id:"t1u2-q26", lesson:"t1u2-l3", level:2, q:"When are tags more useful than folders?", options:[
     {t:"When one file belongs to several groups at once", ok:true, why:"A file lives in one folder but can carry many tags."},
     {t:"When files must keep their grouping on any system they’re copied to", why:"Tags are often app- or system-specific and can be lost when copied; folders travel everywhere."},
     {t:"When you want a backup", why:"Tags organize; they don’t copy anything."},
     {t:"When you need to shrink files", why:"Tags don’t affect size."}]},
   {id:"t1u2-q27", lesson:"t1u2-l3", level:3, q:"Lucía runs a cleaning business and keeps invoices named `invoice1.pdf` to `invoice240.pdf` in one folder. What naming change helps most?", options:[
     {t:"Add an ISO date and zero-padded number: `2026-03-04_invoice_0147.pdf`", ok:true, why:"Dates sort in time order; four-digit padding keeps numbers in order everywhere and leaves room to grow."},
     {t:"Rename them invoiceA, invoiceB…", why:"Letters run out at 26 and say nothing about the date."},
     {t:"Add the customer’s full address to each name", why:"Very long names are hard to read and can hit path limits; put details inside the file."},
     {t:"Keep the names and add the word FINAL", why:"“Final” adds no information and invites confusion."}]},
   /* Lesson 4 */
   {id:"t1u2-q28", lesson:"t1u2-l4", level:1, q:"Physically, where are files in “the cloud” stored?", options:[
     {t:"On servers in a provider’s data centres", ok:true, why:"Cloud storage is other people’s computers, reached through the internet."},
     {t:"In your Wi-Fi router", why:"The router passes data along; it doesn’t store your cloud files."},
     {t:"In satellites", why:"Cloud data centres are buildings on the ground."},
     {t:"Nowhere; they exist only while you are online", why:"They’re stored on disks in data centres, whether or not you’re online."}]},
   {id:"t1u2-q29", lesson:"t1u2-l4", level:2, q:"Kenji deletes a photo from his synced cloud folder on his phone. What happens on his laptop?", options:[
     {t:"The photo is deleted there too, once sync runs", ok:true, why:"Sync copies deletions as faithfully as edits. It may still be in the cloud bin for a while."},
     {t:"Nothing; the laptop keeps its copy", why:"That’s how a backup behaves. Sync makes the copies identical."},
     {t:"The laptop asks whether to keep it", why:"Normal deletions sync without asking (some apps warn only for very large deletions)."},
     {t:"The photo moves to the laptop’s Desktop", why:"Sync doesn’t move files to other folders."}]},
   {id:"t1u2-q30", lesson:"t1u2-l4", level:2, q:"In OneDrive on Windows, what does a blue cloud icon next to a file mean?", options:[
     {t:"It’s online-only: it takes no local space and needs internet to open", ok:true, why:"Microsoft uses the blue cloud for online-only files."},
     {t:"It’s backed up to an external drive", why:"The icon describes OneDrive status, not external backups."},
     {t:"It’s shared with everyone", why:"Sharing has its own indicator; the cloud means online-only."},
     {t:"It has a virus", why:"Status icons show sync state, not malware."}]},
   {id:"t1u2-q31", lesson:"t1u2-l4", level:3, q:"Amara needs space on her laptop. Which action frees space without losing her OneDrive files?", options:[
     {t:"Right-click the folder → Free up space", ok:true, why:"This turns files into online-only placeholders; they stay safe in OneDrive."},
     {t:"Delete the folder from File Explorer", why:"Deleting synced files deletes them from OneDrive and every device."},
     {t:"Turn off the internet and delete the folder", why:"The deletion will sync as soon as she reconnects."},
     {t:"Rename the folder", why:"Renaming doesn’t free any space."}]},
   {id:"t1u2-q32", lesson:"t1u2-l4", level:1, q:"Which permission lets someone add comments but not change the content?", options:[
     {t:"Commenter", ok:true, why:"Commenters can read and comment or suggest, but can’t edit the content."},
     {t:"Viewer", why:"Viewers can read but not comment."},
     {t:"Editor", why:"Editors can change everything and, in Google Drive, usually reshare."},
     {t:"Owner", why:"Owners have full control, more than needed for commenting."}]},
   {id:"t1u2-q33", lesson:"t1u2-l4", level:3, q:"A school club posts a Google Drive folder link set to “Anyone with the link can edit” in a public group chat. What’s the biggest risk?", options:[
     {t:"Anyone who sees the link can change or delete files, without being invited", ok:true, why:"An anyone-edit link gives full editing to whoever gets it. Invite named members instead, or at least set it to view."},
     {t:"The folder will use more storage", why:"Sharing doesn’t change storage use."},
     {t:"The files will become PDFs", why:"Sharing doesn’t change formats."},
     {t:"Only the club leader can open it", why:"An anyone-link is the opposite of restricted."}]},
   {id:"t1u2-q34", lesson:"t1u2-l4", level:2, q:"Tomás has a free Google Account. His Google Photos backups have filled it. What else may stop working?", options:[
     {t:"Gmail and Google Drive, because all three share the same 15 GB", ok:true, why:"Google’s free storage is shared across Gmail, Drive and Photos."},
     {t:"Nothing else; each Google service has its own 15 GB", why:"It’s one shared allowance."},
     {t:"His phone’s camera", why:"The camera keeps working; only cloud uploads stop."},
     {t:"His Wi-Fi", why:"Cloud storage limits don’t affect your internet connection."}]},
   {id:"t1u2-q35", lesson:"t1u2-l4", level:3, q:"Mei edits a shared spreadsheet offline on a plane while a colleague edits it at the office. Afterwards there are two copies, one with her laptop’s name added. What should she do?", options:[
     {t:"Compare the two, merge the changes into one, then delete the extra copy", ok:true, why:"That’s a sync conflict: both versions were kept so no work is lost. Merging by hand completes it."},
     {t:"Delete the one with her laptop’s name", why:"That throws away her own changes."},
     {t:"Delete both and start again", why:"That loses everyone’s work."},
     {t:"Ignore it; sync will merge them later", why:"Sync apps can’t merge most file contents; the duplicate stays until someone resolves it."}]},
   {id:"t1u2-q36", lesson:"t1u2-l4", level:1, q:"What is the difference between inviting someone and sending an “anyone with the link” link?", options:[
     {t:"An invite works only for that person’s account; an anyone-link works for whoever has it", ok:true, why:"Invites are tied to identity; anyone-links work like a key that can be passed on."},
     {t:"There’s no difference", why:"The difference in who can get in is the whole point."},
     {t:"Anyone-links always allow editing", why:"You choose view, comment or edit for links too."},
     {t:"Invites make the file public on search engines", why:"Invites are the most restricted way to share."}]},
   /* Lesson 5 */
   {id:"t1u2-q37", lesson:"t1u2-l5", level:1, q:"Why isn’t sync a backup?", options:[
     {t:"It copies deletions and damage to every copy", ok:true, why:"Sync makes copies identical, including mistakes. A backup keeps a copy that doesn’t change when the original does."},
     {t:"It’s too slow", why:"Speed isn’t the issue; what it copies is."},
     {t:"It only works on phones", why:"Sync works on computers and phones alike."},
     {t:"It deletes files after 30 days", why:"Sync doesn’t delete files on a timer; bins do."}]},
   {id:"t1u2-q38", lesson:"t1u2-l5", level:1, q:"What does the 3-2-1 rule ask for?", options:[
     {t:"3 copies, on 2 kinds of storage, with 1 off-site", ok:true, why:"That’s how CISA describes it."},
     {t:"3 passwords, 2 devices, 1 account", why:"That mixes up account security with backups."},
     {t:"Back up 3 times a day, 2 days a week, 1 week a month", why:"The numbers count copies, storage types and off-site copies, not schedules."},
     {t:"3 external drives, all kept next to the computer", why:"Three drives in one place fail the off-site part."}]},
   {id:"t1u2-q39", lesson:"t1u2-l5", level:2, q:"Which built-in tool backs up a Mac to an external drive?", options:[
     {t:"Time Machine", ok:true, why:"Found in System Settings → General → Time Machine."},
     {t:"File History", why:"That’s the Windows tool."},
     {t:"iCloud Backup", why:"That backs up iPhones and iPads to iCloud."},
     {t:"Finder", why:"Finder browses files; it doesn’t schedule backups."}]},
   {id:"t1u2-q40", lesson:"t1u2-l5", level:2, q:"On a personal OneDrive account, how long can you usually restore a deleted file from the recycle bin?", options:[
     {t:"30 days", ok:true, why:"Microsoft states 30 days for personal accounts (93 days by default for work or school). Check your plan."},
     {t:"Forever", why:"Bins are emptied automatically after a set time."},
     {t:"24 hours", why:"Much longer than that, but not unlimited."},
     {t:"One year", why:"Personal accounts keep deleted items for 30 days."}]},
   {id:"t1u2-q41", lesson:"t1u2-l5", level:3, q:"Ransomware scrambles a shop’s computer and its always-connected external backup drive. Which other copy is most likely to survive?", options:[
     {t:"A second backup drive that was unplugged and kept at the owner’s home", ok:true, why:"Offline and off-site: ransomware can’t reach a disconnected drive, and it’s safe from local disasters too."},
     {t:"The synced cloud folder", why:"Sync uploads the scrambled files. Version history may help for a while, but the synced copy itself is scrambled."},
     {t:"The Recycle Bin on the same computer", why:"It’s on the infected computer and doesn’t hold clean copies."},
     {t:"A copy in another folder on the same computer", why:"Same machine, so it’s scrambled too."}]},
   {id:"t1u2-q42", lesson:"t1u2-l5", level:3, q:"Sione’s only copies of his family photos are on his phone and in a cloud photo service that syncs with it. He accidentally deletes an album and doesn’t notice for three months. Why might the photos be gone?", options:[
     {t:"The deletion synced and the cloud’s recently-deleted window (typically 30 to 60 days) has passed", ok:true, why:"Sync removed them everywhere, and bins only keep items for a limited time. An independent backup would still have them."},
     {t:"Cloud services delete photos older than three months", why:"They don’t delete photos on their own; the deletion came from him and synced."},
     {t:"The phone converted them to a different format", why:"Format changes don’t delete albums."},
     {t:"They aren’t gone; synced photos can never be deleted", why:"Synced deletions are real deletions everywhere."}]},
   {id:"t1u2-q43", lesson:"t1u2-l5", level:2, q:"When should you unplug an external backup drive?", options:[
     {t:"After each backup finishes, ejecting it first", ok:true, why:"The NCSC advises disconnecting backup media so malware can’t reach it; ejecting first avoids half-written data."},
     {t:"Never; it should stay plugged in", why:"A permanently attached drive can be hit by the same ransomware or power surge as the computer."},
     {t:"Only when it’s full", why:"Connection, not space, decides whether malware can reach it."},
     {t:"While a backup is running, to make it faster", why:"That interrupts the backup and can corrupt it."}]},
   {id:"t1u2-q44", lesson:"t1u2-l5", level:3, q:"Priya set up File History a year ago and never checked it. What’s the best way to know it works?", options:[
     {t:"Restore a couple of files to a new folder and open them, and check the last backup date", ok:true, why:"Only a real restore proves the backup is complete, recent and readable."},
     {t:"Look at the drive’s light when it’s plugged in", why:"Power tells you nothing about whether backups run or are readable."},
     {t:"Assume it works because there were no error messages", why:"Backups often fail silently — after updates, when drives fill or when settings change."},
     {t:"Buy a bigger drive", why:"Size doesn’t prove anything about whether backups work."}]},
   {id:"t1u2-q45", lesson:"t1u2-l5", level:2, q:"When restoring with File History during a test, why choose “Restore to…” a new folder?", options:[
     {t:"So the restored files don’t replace the current ones", ok:true, why:"Microsoft notes a normal restore replaces the current version and can’t be undone."},
     {t:"Because restoring to the original folder is impossible", why:"It’s possible; it just overwrites."},
     {t:"To make the files smaller", why:"Restoring doesn’t change size."},
     {t:"So they upload to OneDrive automatically", why:"Where you restore doesn’t decide that; it depends on whether the folder syncs."}]}
  ]
});
