/* Track 3 · Unit 3 · Cleaning messy data */
ICA.addUnit({
  id:"t3u3", track:"t3", n:3, title:"Cleaning messy data", icon:"🧽",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"Real data arrives with stray spaces, five spellings of one town, numbers that are secretly text and people listed twice. Learn to spot the dirt, clean it with spreadsheet functions and with OpenRefine (facets, clustering, GREL, a replayable history), match near-duplicates without merging the wrong people, and keep a cleaning log so anyone can check what you did.",
  goals:[
    "Recognise the common kinds of dirty data and decide, for each problem, whether to fix it with a rule or flag it for checking",
    "Clean text in a spreadsheet with TRIM, CLEAN, SUBSTITUTE, UPPER, LOWER, PROPER, find and replace and split-to-columns, using helper columns so the raw data stays raw",
    "Install OpenRefine (or follow along without it), create a project, and explore a column with facets and filters",
    "Use clustering and short GREL expressions to standardise values, and explain why every merge needs a human decision",
    "Find exact and near duplicates, export clean data, reuse an operation history, and keep a cleaning log someone else could follow"
  ],
  read:[
    {book:"dcss", where:"OpenRefine for Social Science Data: episodes “Introduction”, “Working with OpenRefine”, “Filtering and Sorting with OpenRefine”, “Examining Numbers in OpenRefine”, “Using scripts” and “Exporting and Saving Data from OpenRefine”", note:"A hands-on lesson with a deliberately messed-up farm survey. A few button names have changed in OpenRefine 3.10; the lessons here say where."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u3-l1", title:"What dirty data looks like", minutes:45,
   hook:{q:"A volunteer list has a Town column. It contains “Port Ellis”, “port ellis”, “Port Ellis ” (with a space at the end) and “PORT ELLIS”. To a person that’s one town. How many different values does an exact, character-by-character comparison see?", options:["1","2","3","4"], answer:3, reveal:"**4.** An exact comparison checks every character: a capital P is a different character from a small p, and a space at the end is a character too. OpenRefine’s text facet and Python compare this way, so they count four values. Some spreadsheet functions, such as COUNTIF and lookups, ignore capitals, but they don’t ignore the hidden space, so even they see two values. This lesson is a field guide to that kind of dirt, and to the habits that let you clean it safely."},
   goals:[
     "Name the common kinds of dirty data: invisible characters, inconsistent spellings and case, several values in one cell, mixed formats, numbers stored as text, missing-value codes, duplicates, impossible values and broken encodings",
     "Explain what each problem does to counts, totals, lookups and charts",
     "Decide whether to fix a problem with a rule or flag it for checking, and why you never “fix” what you can’t justify",
     "Follow a cleaning workflow that keeps the raw data untouched and records every step"
   ],
   learn:[
    {h:"Same thing, many spellings", body:[
      {lead:"Data is typed by people, copied between systems and merged from different sources. Every step adds small inconsistencies that a human reads past and a computer doesn’t."},
      "Imagine a food bank that collected volunteer sign-ups on paper, on a web form and by phone. (The data in this unit is **invented** for teaching, but every problem in it is a real, common one.) Here is part of the Town column, and what an exact count of each value gives (for example, OpenRefine’s text facet, which compares every character):",
      {table:[["Value as stored","Count"],["Port Ellis","41"],["port ellis","6"],["Port Ellis␣ (space at the end)","3"],["PORT ELLIS","2"],["Pt. Ellis","4"],["Port Elis","1"],["Kerrow","22"],["Kerrow␣","2"]]},
      "There are really two towns here, but the exact count shows eight values. A chart built from those counts would show eight bars, and a list that keeps only rows written exactly “Port Ellis” would miss 16 people. Spreadsheet functions such as COUNTIF and lookups ignore capitals, so there `port ellis` and `PORT ELLIS` would join `Port Ellis`, but the trailing spaces, the abbreviation and the typo would still split the count. That is what “dirty data” means in practice: the values don’t say the same thing the same way, so tools give wrong answers without any error message.",
      "[[data-cleaning-term|Data cleaning]] is the work of finding and fixing these problems so the data means what it should: one spelling per town, one row per person, numbers that are numbers. It is not glamorous, and it often takes longer than the analysis, but every result built on the data depends on it.",
      {key:"Computers compare characters, not meanings. Cleaning makes things that mean the same thing look the same."}
    ]},
    {h:"A field guide to dirt", body:[
      "Most messy data has a handful of familiar problems. Learn to recognise them and you can clean almost anything.",
      {table:[["Problem","Looks like","What goes wrong"],
        ["Invisible characters","`Kerrow␣`, a line break inside a cell, a [[non-breaking-space|non-breaking space]] from a web page","Lookups fail, the same value is counted twice"],
        ["Inconsistent case and spelling","`port ellis`, `Pt. Ellis`, `Port Elis`","One category splits into several"],
        ["Several values in one cell","`Mon; Wed`, `5 km, 31 min`","You can’t count or filter by one of them"],
        ["Mixed formats","`03/04/2026` next to `2026-04-03`; `1.5 kg` next to `1500 g`","Sorting and maths go wrong"],
        ["Numbers stored as text","`1,250` typed with a comma, `€30`, `12 `","SUM and AVERAGE skip them"],
        ["Missing-value codes","blank, `n/a`, `-`, `999`, `0`","A code like 999 gets averaged as if it were real"],
        ["Duplicates","the same person on two rows","Totals are too high"],
        ["Impossible values","age 214, a date in 2062","Averages and charts are distorted"],
        ["Broken encoding","`cafÃ©` instead of `café`","Names become unreadable and won’t match"]]},
      "The first two rows of the table are about [[whitespace-trim|whitespace]] and spelling; they’re the commonest of all. The last row, [[encoding-mojibake|mojibake]], looks the scariest but usually has a simple fix (see the last section).",
      "Some problems are about **structure** rather than values: a cell holding two facts, or a table with a title row on top. Those are tidy-data questions ({{tidy-data}}), and Unit 2 of this track looks at them closely ({{tidy-data-principles}}). Cleaning and tidying go together: you usually tidy the structure first, then clean the values."
    ]},
    {h:"Why it matters: four ways dirt changes answers", body:[
      "Dirty data rarely causes an error message. It causes a **wrong answer that looks right**. Four examples from the food bank list:",
      {ol:[
        "**Counts split.** An exact count of volunteers per town shows 41 for Port Ellis instead of 57, because 16 people live in “other” spellings.",
        "**Totals skip values.** Hours volunteered are summed, but cells typed as `4 hrs` are text, so SUM ignores them and the total is too low ({{cell-data-types}}).",
        "**Lookups fail.** A lookup for `Kerrow` returns #N/A for the two entries with a hidden space ({{lookup-functions}}).",
        "**Duplicates inflate.** Fatima signed up on paper and online, so she is counted twice and gets two reminder calls."
      ]},
      {lab:"fx-trim", t:"Practise: fix a lookup that fails because of hidden spaces"},
      {ex:"Before cleaning: “57 volunteers in Port Ellis?” The count says 41.\nAfter trimming spaces and standardising case and spelling:\nPort Ellis 41 + 6 + 3 + 2 + 4 + 1 = 57\nKerrow 22 + 2 = 24\nSame data, same people. The only change is that each town is now written one way.", label:"Worked example: the count that was 16 short", mono:true},
      {tip:"Before you trust any count, look at the list of distinct values in the column. Five seconds of looking finds most spelling problems. A spreadsheet filter list, a pivot table or an OpenRefine text facet all show it."}
    ]},
    {h:"Fix, flag or leave: cleaning is not making things up", body:[
      "The Data Carpentry OpenRefine lesson uses a farm survey where one village name is recorded as `49`. That is obviously wrong, but you can’t fix it by guessing. In the lesson, learners sort by GPS position and interview date, find that the row sits among interviews from one village (only that village was interviewed on that date), and only then correct it. The evidence justified the change.",
      "That gives three honest choices for each problem:",
      {table:[["Choice","When","Example"],
        ["Fix with a rule","The right value is certain and the rule can be written down","Remove spaces at the ends; write every town in one agreed spelling"],
        ["Fix with evidence","Another source shows the true value","Village `49` corrected using GPS and interview date; a typo checked against the paper form"],
        ["Flag and leave","You can’t know the true value","Age 214: mark it as a problem, set it to missing in the clean copy, and note why"]]},
      "Never quietly delete awkward rows or change unusual values just because they are unusual. A volunteer aged 92 is unusual, not wrong. Removing real but surprising values is one way analyses end up telling people what they expected rather than what is true.",
      {warn:"“Cleaning” that changes meaning is not cleaning. If you aren’t sure two values mean the same thing (`Kerrow` and `Kerrow North` may be two different places), ask someone who knows, or keep them separate."}
    ]},
    {h:"Keep raw data raw, and write it down", body:[
      "Two habits make cleaning safe: never edit the original, and record every step.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="t3u3a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="10" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Raw file (never edited)</text><text class="s" x="170" y="54" text-anchor="middle">volunteers_raw.csv, kept read-only</text><path class="d-ink" d="M170 66V96" stroke-width="2" marker-end="url(#t3u3a1)"/><text class="s" x="180" y="86">copy</text><rect class="d-soft" x="20" y="100" width="300" height="150" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle">Working copy</text><rect class="d-panel" x="36" y="134" width="268" height="30" rx="6"/><text x="170" y="154" text-anchor="middle">1. Trim spaces</text><rect class="d-panel" x="36" y="170" width="268" height="30" rx="6"/><text x="170" y="190" text-anchor="middle">2. One spelling per town</text><rect class="d-panel" x="36" y="206" width="268" height="30" rx="6"/><text x="170" y="226" text-anchor="middle">3. Remove duplicate people</text><path class="d-ink" d="M170 250V280" stroke-width="2" marker-end="url(#t3u3a1)"/><text class="s" x="180" y="270">export</text><rect class="d-sage" x="20" y="284" width="140" height="56" rx="8" stroke-width="2"/><text x="90" y="308" text-anchor="middle">Clean file</text><text class="s" x="90" y="326" text-anchor="middle">for analysis</text><rect class="d-gold" x="180" y="284" width="140" height="56" rx="8" stroke-width="2"/><text x="250" y="308" text-anchor="middle">Cleaning log</text><text class="s" x="250" y="326" text-anchor="middle">what, why, how many</text><text class="s" x="170" y="366" text-anchor="middle">Raw + log can always rebuild the clean file</text></svg>', alt:"A raw file at the top is copied into a working copy where three cleaning steps happen in order: trim spaces, one spelling per town, remove duplicate people. The working copy is exported to a clean file, and a cleaning log records each step. Raw file plus log can rebuild the clean file.", cap:"The raw file is never touched. Cleaning happens in a copy, and the log records each step so the clean file can be rebuilt or checked."},
      "If you find a mistake in your cleaning next month, the raw file plus the log lets you redo it properly instead of guessing what changed. Unit 2 of this track explains the “keep [[raw-data|raw data]] raw” rule in detail ({{raw-data-raw}}); this unit shows the tools that make it easy: helper columns in spreadsheets (Lesson 2), and OpenRefine, which always works on a copy and records every step automatically (Lessons 3–5). Lesson 5 shows what a good [[cleaning-script|cleaning log]] contains."
    ]},
    {h:"Mojibake: when the letters themselves break", body:[
      "Sometimes names arrive like `SÃ£o TomÃ©` or `MÃ¼ller`. This is **mojibake**: text saved in one [[text-encoding|encoding]] (usually [[utf-8|UTF-8]]) and opened as if it were another (often Windows-1252). In UTF-8 an accented letter takes two bytes (some take three), and the wrong encoding shows each byte as a separate character.",
      {table:[["Should be","Shows as"],["café","cafÃ©"],["São Tomé","SÃ£o TomÃ©"],["Müller","MÃ¼ller"]]},
      "Don’t fix mojibake with find and replace, one letter at a time. Go back to the file and **import it again, telling the app it is UTF-8**: in OpenRefine, the Character encoding box on the import screen; in Excel, the File Origin list when you use Data → From Text/CSV; in LibreOffice, the Character set list in the import dialog ({{csv-files}}). The bytes were never damaged; only the reading was wrong.",
      "The opposite mistake, reading non-UTF-8 bytes as UTF-8, shows replacement marks such as `caf�`. Then the file really is in another encoding, and you choose that encoding on import instead."
    ]},
    {h:"A cleaning workflow", body:[
      "Cleaning goes best in a steady order, from structure to details, checking as you go:",
      {ol:[
        "**Look first.** Count rows. For each important column, look at the distinct values and their counts, the shortest and longest entries, and the blanks.",
        "**Make a copy** and keep the raw file untouched.",
        "**Fix the structure**: one value per cell, one row per record, one header row.",
        "**Fix whitespace and case**, the easy, rule-based problems.",
        "**Standardise spellings**, reviewing each change.",
        "**Fix types**: make numbers numbers and dates dates; decide what a [[missing-value]] looks like ({{missing-values}}).",
        "**Find duplicates** and decide which to merge or remove.",
        "**Check again**: row counts, distinct values, totals, compared with what you expected.",
        "**Record each step** as you go, not afterwards from memory."
      ]},
      "Whitespace comes before spelling because a trailing space makes `Kerrow␣` look like a separate value; trim first and many “spelling” problems vanish. Duplicates come late, because two rows only look identical once their values are written the same way.",
      {key:"Look, copy, clean in order, check, and write it down. The order matters because each step makes the next one easier."}
    ]}
   ],
   try:[
    {id:"t3u3-l1-x1", type:"mcq", q:"Amara opens an OpenRefine text facet, which compares values exactly, on a Fee status column. The column holds `Paid`, `paid`, `Paid ` (space at the end), `PAID` and `Unpaid`. How many distinct values does the facet list?", options:[
      {t:"5", ok:true, why:"Right. Each different string of characters is a different value: case and the trailing space count, so the four versions of “paid” plus “Unpaid” make five."},
      {t:"2", why:"That’s how many *meanings* there are. An exact comparison checks characters, so the case differences and the space make separate values until you clean them."},
      {t:"3", why:"That’s what you’d get if capitals were ignored (as COUNTIF does) but the trailing space still counted. A text facet compares exactly, so case counts too. Only cleaning (trimming and choosing one case) brings “paid” down to one value."},
      {t:"4", why:"“Paid ” with a trailing space is a different value from “Paid” in an exact comparison, even though it looks the same on screen."}]},
    {id:"t3u3-l1-x2", type:"match", q:"Match each symptom in Kenji’s club spreadsheet to its most likely cause.", pairs:[
      ["SUM of the Hours column is lower than it should be","Some hours are stored as text, like `4 hrs`","SUM skips text. Cells such as `4 hrs` look like numbers to a person but are text to the spreadsheet."],
      ["A name appears as `JosÃ©`","The file was opened with the wrong encoding","That pattern (Ã plus another character) is mojibake: UTF-8 bytes read as another encoding. Re-import as UTF-8."],
      ["A lookup for `Kerrow` shows #N/A, though `Kerrow` is clearly in the list","A hidden space at the end of one of the values","Invisible spaces make two values different. TRIM (or OpenRefine’s trim) fixes it."],
      ["The club appears to have 212 members, but the treasurer knows it has about 190","Some people are listed more than once","Duplicates inflate counts. Look for the same person on several rows."]]},
    {id:"t3u3-l1-x3", type:"sort", q:"Lucía is cleaning a survey. For each problem, should she fix it with a written rule, or flag it and check the source first?", buckets:["Fix with a rule","Flag and check first"], items:[
      {t:"`Kerrow ` with a space at the end", b:0, why:"Spaces at the ends never carry meaning in a town name. “Trim leading and trailing spaces” is a safe, written rule."},
      {t:"`PORT ELLIS` in capitals among `Port Ellis` entries", b:0, why:"Same letters, different case. Choosing one agreed form is a rule you can record."},
      {t:"An age of 214", b:1, why:"It’s impossible, but you can’t know the real age. Flag it, set it to missing in the clean copy, and note why; check the paper form if there is one."},
      {t:"`Kerrow North` next to `Kerrow`", b:1, why:"These might be two different places. Merging them could be wrong; ask someone who knows the area."},
      {t:"A blank, `n/a` and `-` all meaning “no phone number”", b:0, why:"Once you’ve confirmed they all mean “not given”, recording them one way (for example, an empty cell) is a clear rule."},
      {t:"Two rows for “Ana Silva” with different email addresses", b:1, why:"They could be one person with two emails or two different people. Check more fields before merging."}]},
    {id:"t3u3-l1-x4", type:"mcq", q:"A farm survey has a village column with the value `49` in one row. What is the best next step?", options:[
      {t:"Look for evidence in other columns, such as GPS position or interview date, before changing it", ok:true, why:"Right. This is what the Data Carpentry lesson does: the row sits among interviews from one village, so the correction is justified and can be recorded."},
      {t:"Change it to the most common village name", why:"That is a guess. The most common value is not evidence about this row."},
      {t:"Delete the row", why:"The rest of the row may be perfectly good data. Deleting it loses information and can bias results."},
      {t:"Leave it and say nothing", why:"Leaving it unexplained means anyone counting by village gets a fake village called 49. If you can’t fix it, at least flag it and note it in the log."}]},
    {id:"t3u3-l1-x5", type:"spot", q:"Mei received this sign-up list. Tap the entries that need cleaning before she can count volunteers by town or total their hours.", ask:"needs cleaning", mono:true, parts:[
      "Name | Town | Hours\n",{t:"Mei Tanaka | Port Ellis | 4", flag:false, why:"One value per cell, the town in the agreed spelling, a number for hours: fine."},"\n",{t:"Sione Fifita | port ellis | 3", flag:true, why:"Lowercase “port ellis” would count as a different town from “Port Ellis”."},"\n",{t:"Hana Kim | Kerrow | 2", flag:false, why:"Clean: agreed spelling, numeric hours."},"\n",{t:"Dmitri Orlov | Kerrow | 4 hrs", flag:true, why:"“4 hrs” is text, so SUM would skip it. Store 4 and put the unit in the column name."},"\n",{t:"Priya Nair | Pt. Ellis | 5", flag:true, why:"“Pt. Ellis” is another spelling of Port Ellis and would be counted separately."},"\n",{t:"Tomás Reyes | Kerrow | 1", flag:false, why:"Clean."}]},
    {id:"t3u3-l1-x6", type:"order", q:"Put Oluwaseun’s cleaning steps in a sensible order.", items:[
      {t:"Look at the distinct values and counts in each column", why:"Looking first shows what needs fixing and gives “before” numbers to compare with."},
      {t:"Make a working copy and keep the raw file untouched", why:"Before any change, protect the original."},
      {t:"Trim spaces and standardise case", why:"Easy rule-based fixes first; they make many “different” values identical."},
      {t:"Standardise spellings, reviewing each change", why:"Now the remaining variants are real spelling differences, which need judgement."},
      {t:"Find and resolve duplicate records", why:"Duplicates are easiest to see once values are written the same way."},
      {t:"Check counts against the “before” numbers and finish the log", why:"Checking last confirms nothing was lost by accident."}]},
    {id:"t3u3-l1-x7", type:"mcq", q:"A list of names shows `NgÃ´ Thá»‹` and `MÃ¼ller`. What’s the best fix?", options:[
      {t:"Import the original file again and choose UTF-8 as the encoding", ok:true, why:"Right. This is mojibake: the bytes are fine, they were just read with the wrong encoding. Re-reading them correctly fixes every name at once."},
      {t:"Use find and replace to change each `Ã¼` to `ü`", why:"That might fix some letters, but there are many patterns and it’s easy to miss or damage some. Fix the reading, not the symptoms."},
      {t:"Retype the names by hand", why:"Slow and error-prone, and unnecessary: the original file still holds the right bytes."},
      {t:"Remove the accents so everything is plain A–Z", why:"That changes people’s names. Accents are part of the correct spelling, and UTF-8 can store them."}]}
   ],
   apply:{intro:"Look at a real or invented dataset with fresh eyes. Any spreadsheet works: a club list, household expenses, a class register, or the volunteer list from this lesson typed into a sheet.", tasks:[
     {t:"List the distinct values in one text column", app:{
       ms:["Click a cell in your data and choose **Data → Filter**.","Click the arrow on a text column such as Town or Category. The list shows every distinct value once.","Count how many there are, and note any that look like the same thing written differently."],
       google:["Select your data and choose **Data → Create a filter**.","Click the filter icon on a text column. The list shows each distinct value.","Optional: **Data → Column stats** shows the most and least common values for a column."],
       libre:["Click a cell in your data and choose **Data → AutoFilter**.","Click the arrow on a text column to see each distinct value."],
       apple:["Hover over the column letter, click the arrow and choose **Quick Filter** to see the values in that column."]},
      write:"Which values look like the same thing written differently?"},
     {t:"Write a “fix, flag or leave” list", how:["For each problem you found, write one line: the problem, how many rows it affects, and whether you’d fix it with a rule, fix it with evidence, or flag it.","For each “fix with a rule”, write the rule in one sentence (for example, “Write every town with a capital first letter and no spaces at the ends”)."], write:"Your problem list and rules"}
   ], proof:"A short list of the problems in one dataset, each marked fix with a rule, fix with evidence, or flag, with the rule written out."},
   read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Introduction” (why record every step, and working on a copy), then “Working with OpenRefine” → “Using Facets” → “Finding (potential) errors”", note:"The `49` village example is in “Filtering and Sorting with OpenRefine”, in the exercise “Finding village 49”."}]
  },

  /* ===================== LESSON 2 ===================== */
  {id:"t3u3-l2", title:"Cleaning in a spreadsheet", minutes:55,
   hook:{q:"In Excel, cell A2 holds a town name copied from a web page. `=TRIM(A2)` still leaves a space at the end. Why?", options:["TRIM only removes spaces at the start","The space is a non-breaking space, a different character that TRIM doesn’t remove","TRIM only works on numbers","The cell needs to be formatted as text first"], answer:1, reveal:"**A non-breaking space.** Web pages often use a special space (character 160) that keeps words together. Excel’s TRIM was designed for the ordinary space (character 32), and Microsoft’s help says it doesn’t remove character 160. This lesson shows how to catch it, and the other everyday spreadsheet cleaning tools."},
   goals:[
     "Clean in helper columns with formulas, check, then paste values, so the raw column stays as it was",
     "Remove extra spaces and invisible characters with TRIM, CLEAN and SUBSTITUTE, including non-breaking spaces",
     "Standardise case with UPPER, LOWER and PROPER, and know when PROPER gets names wrong",
     "Use find and replace without damaging other values, and split one column into several",
     "Turn numbers stored as text into real numbers, and flag duplicates with COUNTIF"
   ],
   learn:[
    {h:"Helper columns: clean beside, not on top", body:[
      {lead:"In a spreadsheet the safest way to clean is to put a formula in a new column next to the messy one. The original stays, the cleaned version appears beside it, and you can compare them row by row."},
      "Say column A holds the Town values from Lesson 1. In B2 you type `=PROPER(TRIM(A2))` and fill it down. Column B now shows the cleaned town for every row; column A is unchanged. This new column is a [[helper-column]].",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="t3u3a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="90" y="22" text-anchor="middle">A: Town (raw)</text><text x="250" y="22" text-anchor="middle">B: Town (clean)</text><rect class="d-lup" x="20" y="32" width="140" height="30"/><text x="30" y="52">␣port ellis</text><rect class="d-lup" x="20" y="62" width="140" height="30"/><text x="30" y="82">PORT ELLIS␣</text><rect class="d-lup" x="20" y="92" width="140" height="30"/><text x="30" y="112">kerrow</text><rect class="d-sage" x="180" y="32" width="140" height="30"/><text x="190" y="52">Port Ellis</text><rect class="d-sage" x="180" y="62" width="140" height="30"/><text x="190" y="82">Port Ellis</text><rect class="d-sage" x="180" y="92" width="140" height="30"/><text x="190" y="112">Kerrow</text><text class="s" x="250" y="142" text-anchor="middle">B2: =PROPER(TRIM(A2))</text><path class="d-ink" d="M170 156V186" stroke-width="2" marker-end="url(#t3u3a2)"/><rect class="d-soft" x="20" y="190" width="300" height="56" rx="8" stroke-width="2"/><text x="170" y="214" text-anchor="middle">Check: compare A and B row by row</text><text class="s" x="170" y="234" text-anchor="middle">look at the distinct values in B</text><path class="d-ink" d="M170 246V276" stroke-width="2" marker-end="url(#t3u3a2)"/><rect class="d-gold" x="20" y="280" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="307" text-anchor="middle">Copy B, paste values only</text></svg>', alt:"Column A holds three raw town values with stray spaces and mixed case. Column B uses the formula =PROPER(TRIM(A2)) to show Port Ellis, Port Ellis and Kerrow. Arrows lead to checking the two columns, then copying column B and pasting values only.", cap:"Clean in a helper column, check, then paste values. The raw column (or a raw copy of the sheet) stays as evidence."},
      "When you’re happy, you can turn the formulas into plain values: copy column B and use **Paste special → Values only** (the name varies a little by app). Then the cleaned text no longer depends on column A. Keep column A, or a copy of the whole raw sheet, so you can always check what changed.",
      {tip:"Some apps also have one-click tools that clean in place, such as Google Sheets’ **Data → Data cleanup → Trim whitespace**. They are quick, but they overwrite the original. Use them on a copy, or straight after duplicating the sheet."}
    ]},
    {h:"Spaces and invisible characters: TRIM, CLEAN and SUBSTITUTE", body:[
      "[[whitespace-trim|TRIM]] removes spaces at the start and end of text and squeezes runs of spaces in the middle down to one. It exists in Excel, Google Sheets, LibreOffice Calc and Numbers.",
      {ex:"A2: ␣␣Port␣␣Ellis␣   (14 characters)\n=TRIM(A2)  →  Port Ellis   (10 characters)\n=LEN(A2)-LEN(TRIM(A2))  →  4 extra spaces", label:"Worked example: counting hidden spaces", mono:true},
      "Comparing `LEN(A2)` with `LEN(TRIM(A2))` is a quick test for hidden spaces: if the numbers differ, TRIM will change the value.",
      "**CLEAN** removes non-printing control characters. In Excel it removes the first 32 codes of the old ASCII set (0 to 31), which includes the line break (code 10) that appears when someone pressed a key combination to start a new line inside a cell. A common pairing is `=TRIM(CLEAN(A2))`.",
      "The trap is the **non-breaking space**, character 160, which web pages and some systems use to keep words together. It looks exactly like a space, but Microsoft’s help says Excel’s TRIM doesn’t remove it, and Google’s help says the **Trim whitespace** menu command doesn’t either. Replace it with an ordinary space first, then trim:",
      {ex:"=TRIM(SUBSTITUTE(A2, UNICHAR(160), \" \"))", label:"Catch non-breaking spaces (Excel, Google Sheets, LibreOffice Calc)", mono:true},
      "`SUBSTITUTE(text, old, new)` replaces every occurrence of `old` with `new` (an optional fourth argument picks just one occurrence). `UNICHAR(160)` produces the non-breaking space character. If `LEN` still shows extra characters after TRIM, a non-breaking space or another invisible character is the likely cause.",
      {lab:"fx-trim", t:"Practise: TRIM inside a lookup"}
    ]},
    {h:"Changing case: UPPER, LOWER and PROPER", body:[
      "Three functions change letter case: `UPPER(A2)` gives PORT ELLIS, `LOWER(A2)` gives port ellis, and `PROPER(A2)` gives Port Ellis (a capital at the start of each word, the rest small).",
      "For **categories** (towns, departments, yes/no answers), choosing one case is a safe rule. For **people’s names**, PROPER can make things worse. Microsoft documents that Excel’s PROPER capitalises the first letter and any letter that follows a character other than a letter:",
      {table:[["Typed","PROPER gives","Problem?"],["o'neill","O'Neill","Fine"],["ana-maría lópez","Ana-María López","Fine"],["mcdonald","Mcdonald","The family may write McDonald"],["van der berg","Van Der Berg","Many families write van der Berg"],["2nd street","2Nd Street","A capital after the digit"]]},
      "Names follow rules that a function can’t know. If names arrive in all capitals and you must fix them, PROPER gets most right, but check the result, and where possible ask people how they write their own names. Never “correct” a name someone typed carefully.",
      "LibreOffice Calc also has menu commands that change the text in the selected cells directly: **Format → Text → UPPERCASE**, **lowercase**, **Capitalize Every Word** and others. Like other in-place tools, use them on a copy."
    ]},
    {h:"Find and replace, carefully", body:[
      "**Find and replace** ([[kbd:Ctrl]] + [[kbd:H]] in most apps on Windows, ChromeOS and Linux; on a Mac the shortcut differs between apps, but the Edit menu always has it) is the fastest way to fix one spelling everywhere. It is also the easiest way to damage data, because it changes text **inside** other values too.",
      {ex:"Goal: change the abbreviation St to Street.\nReplace St → Street everywhere:\nHigh St       →  High Street      (wanted)\nStella Road   →  Streetella Road  (damage!)\nWest Lane     →  unchanged if Match case\n                 is on; WeStreet Lane if not", label:"Worked example: a replacement that goes too far", mono:true},
      "Three settings keep replacements safe:",
      {list:["**Search only the column you mean**: select it first. In LibreOffice Calc tick “Current selection only”; in Google Sheets set Search to “Specific range”.","**Match the whole cell** when you’re replacing a whole value. The option is called “Match entire cell contents” in Excel and Google Sheets, and “Entire cells” in LibreOffice Calc.","**Match case** when capitals matter."]},
      "For anything more than a one-off, a formula in a helper column is easier to check: `=SUBSTITUTE(A2, \"Pt. Ellis\", \"Port Ellis\")`. You can see every result before you commit.",
      {tip:"Before replacing, use Find (or a filter) to look at every cell that matches. If any of them shouldn’t change, refine the search first."}
    ]},
    {h:"Splitting one cell into several", body:[
      "When one cell holds two facts, such as `Kerrow, 4 hrs` or a full address, split it into columns so each fact can be sorted and counted ({{tidy-data}}).",
      {table:[["App","Menu","Formula"],["Excel (desktop and web)","**Data → Text to Columns**","`TEXTSPLIT(A2, \", \")` in Microsoft 365 and Excel for the web"],["Google Sheets","**Data → Split text to columns**","`SPLIT(A2, \",\")`"],["LibreOffice Calc","**Data → Text to Columns**","Use the menu"]]},
      "Each menu tool asks for the [[delimiter]] (the character between the parts: comma, semicolon, space) and overwrites the columns to the right of the one you split, so insert empty columns first.",
      {warn:"Google Sheets’ `SPLIT` treats each character of the delimiter as a separate separator by default. `SPLIT(A2, \", \")` splits at every comma **and** every space, so `Port Ellis, 4` becomes three cells. Use `\",\"` and then TRIM the parts, or set the third argument to FALSE: `SPLIT(A2, \", \", FALSE)`."},
      "Splitting also changes types: a split-off part like `0412` may turn into the number 412, losing the leading zero ({{cell-data-types}}). Set the destination columns to Text first (the Text to Columns dialogs let you choose a column type), or check afterwards.",
      "Be careful splitting names at spaces. `Ana María López` has three parts, and a family name may come first in many cultures. Store given and family names separately at data entry if you need them separately; don’t guess afterwards."
    ]},
    {h:"Numbers and dates stored as text", body:[
      "A number stored as text looks like a number but behaves like a word: SUM skips it, sorting puts `100` before `25`, and a lookup won’t match it. In most apps such text sits at the left of the cell by default, which is a useful clue.",
      {table:[["Typed","Why it’s text","Formula fix"],["`12␣`","Trailing space","`=VALUE(TRIM(A2))`"],["`€30`","Currency symbol typed","`=VALUE(SUBSTITUTE(A2, \"€\", \"\"))`"],["`4 hrs`","Unit typed","`=VALUE(SUBSTITUTE(A2, \" hrs\", \"\"))`"],["`1,250`","Thousands comma, in some settings","Depends on your [[locale]]"]]},
      "`VALUE` turns text that looks like a number into a number. The `1,250` row is a reminder that numbers depend on locale: in many countries the comma is the decimal mark, so `1,250` means one and a quarter. Know which convention your data uses before you remove commas, or you’ll multiply some values by a thousand.",
      "Dates typed as text have the same problem and more, because `03/04/2026` means 3 April in some places and March 4 in others. Unit 2 of this track covers dates in data, including unambiguous [[iso-date|ISO dates]] ({{dates-in-data}}); when cleaning, never convert ambiguous dates without knowing the convention used.",
      {key:"Clean the text, then convert the type, then check: a SUM or a count before and after tells you whether anything slipped through."}
    ]},
    {h:"A first look at duplicates in a sheet", body:[
      "To flag duplicates without deleting anything, add a helper column with `COUNTIF`: in C2, `=COUNTIF($B$2:$B$200, B2)>1` shows TRUE for every value that appears more than once in B2:B200. Filter on TRUE to look at them together. COUNTIF ignores capitals (`Kerrow` and `kerrow` count as the same) but not hidden spaces, so trim first.",
      {lab:"fl-countif", t:"Practise: count how often a value appears with COUNTIF"},
      "Excel and Google Sheets also have a **Remove duplicates** command, and LibreOffice Calc 25.2 and later has **Data → Duplicates…**. It deletes rows permanently, and Microsoft notes that Excel compares what is **displayed** in each cell, not the value stored. Lesson 5 covers duplicates properly, including the harder question: are two rows really the same person?",
      "Cleaning functions combine well. One helper column can do several steps: `=PROPER(TRIM(SUBSTITUTE(A2, UNICHAR(160), \" \")))` replaces non-breaking spaces, trims, and fixes case. Build such formulas from the inside out, one function at a time, checking each step."
    ]}
   ],
   try:[
    {id:"t3u3-l2-x1", type:"number", q:"Cell A2 contains `␣␣Port␣␣Ellis␣` (two spaces, Port, two spaces, Ellis, one space), which is 14 characters. How many characters does `=TRIM(A2)` remove?", answer:4, tol:0, unit:"characters", why:"TRIM removes the 2 leading spaces and the 1 trailing space, and squeezes the double space in the middle to a single one (removing 1 more): 2 + 1 + 1 = 4. The result, “Port Ellis”, has 10 characters.", wrongs:[{v:3, tol:0, why:"That counts only the spaces at the ends. TRIM also reduces runs of spaces between words to one, which removes one more."},{v:5, tol:0, why:"That would remove every space, including the one between Port and Ellis. TRIM keeps single spaces between words."},{v:10, tol:0, why:"10 is the length of the result, not the number removed: 14 − 10 = 4."}]},
    {id:"t3u3-l2-x2", type:"mcq", q:"Priya pasted product names from a supplier’s web page into Excel. `=LEN(A2)` is 12 and `=LEN(TRIM(A2))` is still 12, yet there seems to be a space at the end. What should she try?", options:[
      {t:"`=TRIM(SUBSTITUTE(A2, UNICHAR(160), \" \"))`", ok:true, why:"Right. Text from web pages often contains non-breaking spaces (character 160), which Excel’s TRIM doesn’t remove. Turning them into ordinary spaces first lets TRIM do its job."},
      {t:"`=CLEAN(A2)`", why:"CLEAN removes control characters (codes 0–31), such as line breaks. A non-breaking space is code 160, so CLEAN leaves it."},
      {t:"`=PROPER(A2)`", why:"PROPER only changes letter case; it doesn’t touch spaces."},
      {t:"Format the cell as Text", why:"Formatting changes how a value is displayed or entered, not the characters it already contains."}]},
    {id:"t3u3-l2-x3", type:"mcq", q:"Oluwaseun’s membership list has names typed in capitals, such as `MCKENZIE` and `VAN DER BERG`. He wants to apply `=PROPER(A2)` to every name. What’s the best advice?", options:[
      {t:"It will fix most names, but check the results: it gives “Mckenzie” and “Van Der Berg”, which may not be how those families write their names", ok:true, why:"Right. PROPER follows a simple rule (capital after any non-letter, small letters elsewhere), but names have their own conventions. Review the results, and ask people where it matters."},
      {t:"PROPER is always correct for names, so apply it everywhere", why:"PROPER can’t know that a family writes McKenzie or van der Berg; it makes those Mckenzie and Van Der Berg."},
      {t:"Use UPPER instead, because capitals are always correct", why:"Leaving names in capitals avoids errors but doesn’t solve the readability problem; and it’s a choice, not a correction."},
      {t:"PROPER will delete the spaces in VAN DER BERG", why:"PROPER doesn’t remove spaces; it only changes letter case."}]},
    {id:"t3u3-l2-x4", type:"spot", q:"Hana plans to replace every `Rd` with `Road` across her whole address sheet, with “Match case” off and “Match entire cell contents” off. Which of these cells would be changed wrongly?", ask:"would be damaged", mono:true, parts:[
      {t:"12 Mill Rd", flag:false, why:"This is the change Hana wants: “12 Mill Road”."},"\n",{t:"Ford Close", flag:true, why:"“Ford” contains “rd”. With case ignored it becomes “FoRoad Close”."},"\n",{t:"7 Hill Street", flag:false, why:"No “rd” anywhere in it, so it stays as it is."},"\n",{t:"Birdsong Lane", flag:true, why:"“Birdsong” contains “rd”, so it would become “BiRoadsong Lane”."},"\n",{t:"4 Station Rd", flag:false, why:"Wanted: “4 Station Road”."}]},
    {id:"t3u3-l2-x5", type:"mcq", q:"In Google Sheets, A2 holds `Kerrow, 4`. Tomás writes `=SPLIT(A2, \", \")`. What happens?", options:[
      {t:"It splits at the comma and at the space separately, which here still gives `Kerrow` and `4`, but would also split `Port Ellis, 4` into three cells", ok:true, why:"Right. By default SPLIT treats each character in the delimiter as its own separator. `Kerrow, 4` survives by luck; any value with a space in it gets cut up. Use `\",\"` plus TRIM, or set the third argument to FALSE."},
      {t:"It splits only where the exact two characters comma-space appear", why:"That’s what you might expect, but SPLIT’s third argument (split_by_each) is TRUE by default, so each character is a separator on its own."},
      {t:"It returns an error because SPLIT needs a single character", why:"SPLIT accepts longer delimiters; the catch is how it treats them."},
      {t:"It changes A2 itself into two cells", why:"A formula never changes its source cell. The results appear in the formula’s cell and the cells to its right."}]},
    {id:"t3u3-l2-x6", type:"sort", q:"Which tool fits each job best?", buckets:["TRIM","SUBSTITUTE","Split to columns","VALUE"], items:[
      {t:"Remove spaces before and after names typed on a form", b:0, why:"Spaces at the ends (and repeated spaces) are exactly what TRIM is for."},
      {t:"Change every “Pt. Ellis” to “Port Ellis” in a helper column", b:1, why:"SUBSTITUTE replaces one piece of text with another, and you can see every result before committing."},
      {t:"Turn “Kerrow; Mon” into a Town column and a Day column", b:2, why:"Two facts in one cell: split at the semicolon."},
      {t:"Turn the text “250” (left-aligned, ignored by SUM) into a number", b:3, why:"VALUE converts text that looks like a number into a real number."},
      {t:"Remove the “ hrs” from “4 hrs”", b:1, why:"SUBSTITUTE removes the unit text; wrap VALUE around it to get a number."}]}
   ],
   apply:{intro:"Clean a small messy list with helper columns. Type this invented list into column A of a new sheet (the ␣ marks a space; type a real space): `␣port ellis`, `PORT ELLIS␣`, `Kerrow`, `kerrow␣␣`, `Pt. Ellis`, `Port␣␣Ellis`. Put the heading **Town (raw)** in A1. On a phone, the Google Sheets or Excel app works for the formulas; the menu commands below are for the computer versions.", tasks:[
     {t:"Find the hidden spaces and clean them", app:{
       ms:["In B1 type **Spaces** and in B2 type `=LEN(A2)-LEN(TRIM(A2))`. Fill down. Any number above 0 means extra spaces.","In C1 type **Town (clean)** and in C2 type `=PROPER(TRIM(A2))`. Fill down.","Check column C against column A, row by row."],
       google:["In B2 type `=LEN(A2)-LEN(TRIM(A2))` and fill down.","In C2 type `=PROPER(TRIM(A2))` and fill down.","For comparison, duplicate the sheet (right-click its tab → **Duplicate**), select column A on the copy and choose **Data → Data cleanup → Trim whitespace**. It cleans in place."],
       libre:["In B2 type `=LEN(A2)-LEN(TRIM(A2))` and fill down.","In C2 type `=PROPER(TRIM(A2))` and fill down.","For comparison, copy column A to column E, select it and choose **Format → Text → Capitalize Every Word**. Notice it changes the cells themselves, and doesn’t trim."],
       apple:["In B2 type `=LEN(A2)-LEN(TRIM(A2))` and fill down.","In C2 type `=PROPER(TRIM(A2))` and fill down.","Check column C against column A."]},
      write:"How many cells had hidden spaces? What does column C still get wrong?"},
     {t:"Fix the remaining spelling and freeze the result", app:{
       ms:["In D2 type `=SUBSTITUTE(C2, \"Pt. Ellis\", \"Port Ellis\")` and fill down.","Copy column D, then **Home → Paste → Paste Values** onto column E. Column E now holds plain text, not formulas.","Turn on **Data → Filter** and check the values in column E: there should be two towns."],
       google:["In D2 type `=SUBSTITUTE(C2, \"Pt. Ellis\", \"Port Ellis\")` and fill down.","Copy column D, right-click column E and choose **Paste special → Values only**.","Optional: **Data → Data cleanup → Cleanup suggestions** to see what Sheets flags."],
       libre:["In D2 type `=SUBSTITUTE(C2, \"Pt. Ellis\", \"Port Ellis\")` and fill down.","Copy column D, click cell E1 and choose **Edit → Paste Special → Paste Only Text**.","Use **Data → AutoFilter** to check column E has two towns."],
       apple:["In D2 type `=SUBSTITUTE(C2, \"Pt. Ellis\", \"Port Ellis\")` and fill down.","Copy column D, select column E and choose **Edit → Paste Formula Results**.","Use **Quick Filter** on column E to check there are two towns."]},
      write:"Your final list of distinct towns"}
   ], proof:"A sheet with the raw column untouched, helper columns showing each step, and a final column of plain values with exactly two towns: Port Ellis and Kerrow."},
   read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Trim Leading and Trailing Whitespace”", note:"The same whitespace problem, met in OpenRefine; compare it with the spreadsheet approach here."}]
  },

  /* ===================== LESSON 3 ===================== */
  {id:"t3u3-l3", title:"OpenRefine: install, import and explore", minutes:55,
   hook:{q:"OpenRefine opens in your web browser, at an address like `http://127.0.0.1:3333`. Where is your data while you work on it?", options:["On OpenRefine’s servers on the internet","In your browser’s history","On your own computer: OpenRefine runs a small server there and the browser is just its screen","In a cloud spreadsheet linked to your account"], answer:2, reveal:"**On your own computer.** `127.0.0.1` (also called `localhost`) always means “this computer”. OpenRefine runs as a small web server on your machine, and your browser talks to it there. No internet connection is needed, and your data stays on your computer unless you use a feature that contacts a web service. This lesson explains how that works and how to get started."},
   goals:[
     "Explain what OpenRefine is for, and how it differs from a spreadsheet",
     "Describe how it runs: a local server on port 3333, used through a browser, with Java underneath",
     "Install and start OpenRefine on Windows, macOS, Linux or ChromeOS, or choose a phone alternative",
     "Create a project from a file or the clipboard, choosing sensible import options",
     "Explore columns with text, numeric and custom facets, and remember that facets limit what later operations and exports touch"
   ],
   learn:[
    {h:"A tool built for cleaning", body:[
      {lead:"[[openrefine|OpenRefine]] is a free, open-source program for exploring and cleaning messy tables. It looks a bit like a spreadsheet, but it’s built for a different job."},
      "In a spreadsheet you build calculations in cells. OpenRefine has no cell formulas at all. Instead it gives you tools that work on a **whole column at once**: see every distinct value and its count, find values that are probably the same thing spelled differently, transform thousands of cells with one short expression, and undo any step.",
      "Three features make it popular with researchers, librarians, journalists and anyone who cleans data more than once:",
      {list:["**It works on a copy.** Importing a file makes an OpenRefine project; your original file is never changed.","**It records every step.** Each change goes into an undo/redo history, which you can save and replay on another file (Lesson 5).","**It handles more than a screenful.** The Data Carpentry lesson describes it as working with “large-ish” datasets of around 100,000 rows, and more with extra memory."]},
      "OpenRefine began as Freebase Gridworks, became Google Refine in 2010, and has been a community project called OpenRefine since 2012. It is released under the BSD licence. The current stable series is **3.10** (version 3.10.0 came out in February 2026); check the download page for the latest version."
    ]},
    {h:"A server on your own computer", body:[
      "When you start OpenRefine, it starts a small **web server** on your computer and opens your browser at `http://127.0.0.1:3333/`. The browser is just the screen; the work happens in the program.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="t3u3a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="10" y="10" width="320" height="290" rx="12" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Your computer</text><rect class="d-lup" x="30" y="46" width="280" height="56" rx="8" stroke-width="2"/><text x="170" y="70" text-anchor="middle">Web browser tab</text><text class="s" x="170" y="90" text-anchor="middle">http://127.0.0.1:3333 (localhost)</text><path class="d-ink" d="M150 102V138" stroke-width="2" marker-end="url(#t3u3a3)"/><path class="d-ink" d="M190 138V102" stroke-width="2" marker-end="url(#t3u3a3)"/><text class="s" x="200" y="124">clicks, results</text><rect class="d-soft" x="30" y="142" width="280" height="56" rx="8" stroke-width="2"/><text x="170" y="166" text-anchor="middle">OpenRefine server</text><text class="s" x="170" y="186" text-anchor="middle">a Java program, port 3333</text><path class="d-ink" d="M170 198V230" stroke-width="2" marker-end="url(#t3u3a3)"/><rect class="d-gold" x="30" y="234" width="280" height="56" rx="8" stroke-width="2"/><text x="170" y="258" text-anchor="middle">Workspace folder</text><text class="s" x="170" y="278" text-anchor="middle">projects: data copy + history</text><path class="d-ink" d="M170 300V330" stroke-width="2" stroke-dasharray="5 4"/><text class="s" x="170" y="348" text-anchor="middle">Internet only if you choose (e.g. reconciling)</text></svg>', alt:"Inside your computer, a browser tab at http://127.0.0.1:3333 sends clicks to the OpenRefine server, a Java program on port 3333, and shows its results. The server stores projects, with a copy of the data and its history, in a workspace folder. A dashed line leaves the computer, labelled: internet only if you choose, for example reconciling.", cap:"The browser is only the screen. The program, and your data, stay on your computer."},
      "[[localhost]] (the address `127.0.0.1`) always means “this same computer”; `3333` is the [[port]] number OpenRefine listens on. OpenRefine’s manual says that, for security, it only accepts connections from your own computer unless you deliberately change that.",
      "OpenRefine is written in **Java**, so it needs a Java runtime. The Windows and Mac downloads include one; the Linux download needs Java installed separately (version 11 or later; the start script warns that versions above 21 aren’t tested).",
      {warn:"Most of OpenRefine works offline. A few features send data out on purpose: importing from a web address, fetching URLs, and reconciling values against online services such as Wikidata. Think twice before using those on confidential data."}
    ]},
    {h:"Installing and starting it", body:[
      "Get OpenRefine only from its official site, `openrefine.org/download`. The steps for your device are in Apply below. In outline:",
      {table:[["System","Download","Java"],["Windows","Installer (.exe) or a .zip to extract","Included"],["macOS","A .dmg: drag OpenRefine to Applications","Included"],["Linux","A .tar.gz: extract, then run `./refine`","Install Java 11+ yourself"],["ChromeOS","Use the Linux version in the Linux development environment","Install Java in Linux"]]},
      "Start-up can take a minute or more. On Windows and Linux a console window opens alongside the browser: leave it open, because closing it stops OpenRefine. To quit properly, close the browser tab, then press [[kbd:Ctrl]] + [[kbd:C]] in that console window (on a Mac, quit the OpenRefine app). OpenRefine saves projects automatically as you work.",
      "There is **no phone or tablet version**: OpenRefine needs a desktop operating system. On a phone, everything in these lessons can still be learned by reading and doing the exercises, and the spreadsheet functions from Lesson 2 cover the basic cleaning jobs in the Google Sheets or Excel app."
    ]},
    {h:"Creating a project", body:[
      "On the start screen, choose **Create project**, then pick where the data comes from under **Get data from**: **This Computer** (a file), **Web Addresses (URLs)**, **Clipboard** (paste text) or others. OpenRefine reads CSV and TSV, Excel and OpenDocument spreadsheets, JSON, XML and more. Click **Next »**.",
      "The preview screen shows how OpenRefine has understood the file. Check it carefully; several choices here save work later:",
      {table:[["Option","What to check"],["Character encoding","Accented letters look right. If you see `cafÃ©`, choose UTF-8."],["Columns are separated by","Comma, tab or another character, matching the file."],["Parse next … line(s) as column headers","Usually 1. Extra title rows above the headers can be skipped."],["Trim leading & trailing whitespace from strings","Ticked by default for CSV and pasted text: it removes spaces at the ends of every cell on import. Untick it if you want to see the spaces first."],["Attempt to parse cell text into numbers","Off: everything stays text, the safest start. On: numbers become numbers."],["Store blank cells as nulls","Keeps empty cells as true blanks."]]},
      "Give the project a meaningful name (the file name plus a date works well), then click **Create project »**. The data appears in a grid. Row numbers in the first column show the original order, even when you sort.",
      {tip:"Everything you do is saved automatically. If you go back to the start screen, **Open project** lists your projects. Don’t use the browser’s Back button inside a project: the manual warns it can close the project and lose your current facets."}
    ]},
    {h:"Facets: a summary that is also a filter", body:[
      "A [[facet]] is OpenRefine’s main exploring tool. Click the arrow at the top of a column and choose **Facet → Text facet**. A box appears in the left panel listing **every distinct value in the column with its count**, like the table in Lesson 1, but for any column, in seconds.",
      "Sort the facet **by name** to see spelling variants side by side (`Kerrow`, `kerrow`, `Kerrow North`), or **by count** to spot rare values, which are often typos. Hover over a value to:",
      {list:["**include** it: show only matching rows (click more values to include several);","**exclude** it: hide those rows;","**edit** it: retype the value, and OpenRefine changes every cell with that value at once."]},
      "Other facets answer other questions:",
      {table:[["Facet","Question it answers"],["Numeric facet","What range do the numbers cover? How many cells are non-numeric, blank or errors?"],["Timeline facet","How are the dates spread out?"],["Text length facet (Customized facets)","Are some values much shorter or longer than they should be? A 4-digit year column with length 5 hides a problem."],["Duplicates facet (Customized facets)","Which values appear in more than one row?"],["Facet by blank (Customized facets)","Which rows are missing this value?"],["Word facet (Customized facets)","Which words appear across the cells?"]]},
      "A **Text filter** (from the same column menu) is different: type `ellis` and only rows containing that text are shown. Facets give an overview of the selected rows; filters narrow the selection.",
      {warn:"Facets and filters don’t just change the view. Operations such as transforms apply only to the **rows currently matching**, and so do most exports. That’s useful for fixing a subset, but if you forget an active facet, an export can silently miss rows. The Data Carpentry lesson notes there is no warning. Check the row count at the top (“67 matching rows (180 total)”), and use **Remove all** in the Facet / Filter panel when you’re done."}
    ]},
    {h:"Quick fixes: Common transforms", body:[
      "Many everyday fixes are one click away under a column’s **Edit cells → Common transforms**:",
      {list:["**Trim leading and trailing whitespace** and **Collapse consecutive whitespace**: the spreadsheet TRIM, split in two.","**To titlecase**, **To uppercase**, **To lowercase**.","**To number**, **To date**, **To text**: change the data type; numbers turn green and line up on the right.","**To null** and **To empty string**: blank out the selected cells (useful with a facet selecting `n/a`)."]},
      "After each transform a yellow message says how many cells changed. If you converted a column of 180 cells **To number** and the message says 172, then 8 cells couldn’t be converted: a Numeric facet will show you which ones (it lists Numeric, Non-numeric, Blank and Error counts).",
      "One difference from spreadsheets is worth knowing: OpenRefine’s trim and collapse transforms treat the non-breaking space as whitespace too (in version 3.10 they use Unicode’s definition of whitespace), so the web-page spaces from Lesson 2 are caught.",
      {key:"Look with facets, fix in bulk, read the “cells changed” message, and look again."}
    ]}
   ],
   try:[
    {id:"t3u3-l3-x1", type:"mcq", q:"Sione starts OpenRefine and his browser opens `http://127.0.0.1:3333`. His internet connection then drops. What happens to his project?", options:[
      {t:"Nothing: OpenRefine runs on his own computer, and the browser is talking to it there", ok:true, why:"Right. 127.0.0.1 (localhost) means this computer. Only features that deliberately contact web services, such as reconciliation or fetching URLs, need the internet."},
      {t:"The project is lost because the server is unreachable", why:"The server is on his own computer, so the internet isn’t involved in reaching it."},
      {t:"It switches to a read-only copy stored in the browser", why:"There’s no such mode; the browser never held the data. The OpenRefine program keeps working as before."},
      {t:"He must reinstall OpenRefine", why:"Nothing has changed on his computer; he can carry on working."}]},
    {id:"t3u3-l3-x2", type:"order", q:"Put the steps for creating an OpenRefine project from a CSV file in order.", items:[
      {t:"Start OpenRefine and wait for the browser to open the start screen", why:"The program must be running first; start-up can take a while."},
      {t:"Choose Create project → This Computer, pick the file and click Next »", why:"You choose the source and upload it to your own OpenRefine."},
      {t:"Check the preview: encoding, separator, header rows and trim/parse options", why:"Fix import problems here, before the project exists."},
      {t:"Name the project and click Create project »", why:"OpenRefine now makes its own copy of the data. The original file is untouched."},
      {t:"Open a text facet on an important column to see its values", why:"With the project created, start by looking."}]},
    {id:"t3u3-l3-x3", type:"match", q:"Ana wants to answer these questions about a survey in OpenRefine. Match each question to the facet that answers it fastest.", pairs:[
      ["How many different spellings of each district are there?","Text facet","A text facet lists every distinct value with its count; sort by name to see variants together."],
      ["Which rows have no district at all?","Facet by blank","It splits rows into true (blank) and false, so the missing ones are one click away."],
      ["Are any postcodes too short or too long?","Text length facet","It shows how many characters each value has, so odd lengths stand out."],
      ["What range do the ages cover, and are some ages not numbers?","Numeric facet","It draws the range and counts numeric, non-numeric, blank and error cells."]]},
    {id:"t3u3-l3-x4", type:"mcq", q:"Dmitri included only `Kerrow` in a text facet to fix some rows, finished the fix, then exported a CSV for his colleague. The colleague says the file has only 24 rows instead of 180. What happened?", options:[
      {t:"The facet was still active, and the export only included matching rows", ok:true, why:"Right. Most exports use the current selection. OpenRefine doesn’t warn about active facets, so check the row count and Remove all facets before exporting everything."},
      {t:"OpenRefine always exports only the first 24 rows", why:"Export size depends on the selection, not a fixed number."},
      {t:"The fix deleted the other rows", why:"A transform changes cell values; it doesn’t delete rows. The other rows were just not selected."},
      {t:"CSV can’t hold more than 24 rows", why:"CSV files can hold millions of rows."}]},
    {id:"t3u3-l3-x5", type:"sort", q:"Which import option would Hana choose for each situation?", buckets:["Character encoding","Trim whitespace on import","Attempt to parse into numbers"], items:[
      {t:"The preview shows `MÃ¼ller` where the file should say Müller", b:0, why:"That’s mojibake: the file is UTF-8 but being read in another encoding. Pick UTF-8."},
      {t:"She knows the form system adds spaces after every answer", b:1, why:"Trimming on import removes spaces at both ends of every cell in one go."},
      {t:"She wants ages and counts to be numbers straight away, and has no codes like 007 to protect", b:2, why:"Parsing converts number-like text to numbers. Leave it off if leading zeros matter."},
      {t:"Accented place names show odd symbols in the preview", b:0, why:"Another encoding problem: change the encoding until the preview looks right."}]},
    {id:"t3u3-l3-x6", type:"mcq", q:"Mei runs **Edit cells → Common transforms → To number** on a column of 180 cells. The yellow message says 171 cells were changed. What should she do next?", options:[
      {t:"Open a Numeric facet on the column and look at the non-numeric cells", ok:true, why:"Right. Cells that couldn’t be converted keep their old (text) value. The Numeric facet counts and selects them, so she can see what’s wrong (a unit, a comma, a typo)."},
      {t:"Nothing: 171 out of 180 is close enough", why:"The other 9 cells are still text, so any calculation or numeric facet will skip or mis-handle them. Find out what they are."},
      {t:"Run To number again until it says 180", why:"Running it again gives the same result: the problem is in those cells’ contents."},
      {t:"Undo and give up on converting the column", why:"The conversion worked for 171 cells; she just needs to look at the 9 that didn’t convert."}]}
   ],
   apply:{intro:"Installing OpenRefine is optional and needs a computer. If you can’t install it (on a phone, a locked work computer or a shared device), read the steps, and do the second task as a paper exercise or in a spreadsheet.", tasks:[
     {t:"Install and start OpenRefine (optional, computer only)", how:{
       win:["In a browser, go to **openrefine.org/download** and download the Windows version (the installer, or the zip file with Java included).","Installer: run it and follow the steps. Zip: right-click it → **Extract All…**, and extract it to a folder of its own, such as `C:\\OpenRefine`.","Start **OpenRefine** (from the Start menu, or `openrefine.exe` in the extracted folder). A console window opens; leave it open.","Wait for the browser to open the start screen. If it doesn’t, go to `http://127.0.0.1:3333/` yourself.","To quit: close the browser tab, then click the console window and press [[kbd:Ctrl]] + [[kbd:C]]."],
       mac:["Go to **openrefine.org/download** and download the Mac version (a .dmg file; Java is included).","Open the .dmg and drag **OpenRefine** into **Applications**.","Open OpenRefine from Applications. The first time, macOS may ask whether you want to open an app downloaded from the internet: click **Open**. If instead it says the app can’t be opened or verified, go to **System Settings → Privacy & Security**, scroll down and click **Open Anyway** (on older macOS versions, Control-click the app and choose **Open**).","Wait for the browser to open; if it doesn’t, go to `http://127.0.0.1:3333/`.","To quit, close the tab and quit OpenRefine from the Dock."],
       chromeos:["Turn on Linux: **Settings → About ChromeOS → Developers → Linux development environment → Set up** (on some versions it’s under Settings → Advanced → Developers).","Open the **Terminal** app. Install Java: type `sudo apt update` then `sudo apt install default-jre`. (`sudo` runs a command with administrator rights inside the Linux container; only use it for commands you understand.)","Download the **Linux** version from **openrefine.org/download**, and move the .tar.gz file from Downloads into **Linux files** using the Files app.","In Terminal, extract and start it, changing 3.10.0 to the version you downloaded: `tar xzf openrefine-linux-3.10.0.tar.gz`, then `cd openrefine-3.10.0`, then `./refine`.","In Chrome, go to `http://localhost:3333`. ChromeOS forwards it from Linux automatically; if it doesn’t load, try `http://penguin.linux.test:3333`.","To quit, press [[kbd:Ctrl]] + [[kbd:C]] in the Terminal."],
       phone:["iPhone and Android: there is no OpenRefine app, and the desktop program won’t run on a phone or tablet.","Read through the steps for the computer you might use later, and do the next task on paper or in a spreadsheet app.","Some libraries, universities and workplaces have computers with OpenRefine installed; ask if you need it."]
     }},
     {t:"Create a project from the clipboard and explore it", how:["Copy these lines (an invented sign-up list) exactly, including the spaces:\n`name,town,hours`\n`Mei Tanaka,Port Ellis,4`\n`Sione Fifita,port ellis,3`\n`Hana Kim,Kerrow ,2`\n`Priya Nair,Pt. Ellis,5`\n`Tomás Reyes,Kerrow,1`\n`Ana Silva,PORT ELLIS,n/a`","In OpenRefine: **Create project → Clipboard**, paste, and click **Next »**. Check that the preview has three columns and one header row. **Untick** “Trim leading & trailing whitespace from strings” (it is ticked by default) so you can see the stray space, then **Create project »**.","On the **town** column choose **Facet → Text facet**. How many values does it show? Sort it by name.","On **hours**, choose **Edit cells → Common transforms → To number**, read the yellow message, then add **Facet → Numeric facet** and find the non-numeric cell.","No OpenRefine? Write the distinct town values and their counts on paper, as a text facet would show them."], write:"How many distinct towns did the facet show, and which cell wasn’t numeric?"}
   ], proof:"A project (or a paper table) showing the town values with their counts (six different values for two towns), and the one hours value that isn’t a number."},
   read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” (“Creating a new OpenRefine project”, “Using Facets”, “Other types of Facets”), then “Filtering and Sorting with OpenRefine” and “Examining Numbers in OpenRefine”", note:"The lesson’s setup page has install notes for each system; it predates the Windows installer."}]
  },

  /* ===================== LESSON 4 ===================== */
  {id:"t3u3-l4", title:"Clustering and GREL", minutes:55,
   hook:{q:"OpenRefine’s default clustering method turns each value into a “key” and groups values with the same key. Which pair does it group together?", options:["“Port Ellis” and “Port Elis”","“Okafor, Amara” and “amara okafor”","“Port Ellis” and “Port-Ellis”","“Kerrow” and “Kerow”"], answer:1, reveal:"**“Okafor, Amara” and “amara okafor”.** The fingerprint key lowercases, removes punctuation and sorts the words, so both become `amara okafor`. Typos change the letters, so they get different keys, and so does the hyphen in “Port-Ellis”: removing it glues the words into `portellis`. Looser methods catch typos, with more risk of wrong matches. This lesson shows how each method works and how to write small GREL expressions for the rest."},
   goals:[
     "Explain what clustering does in OpenRefine, and why every suggested merge needs a human decision",
     "Work out a fingerprint key by hand, and predict which values it will and won’t group",
     "Describe n-gram, phonetic and nearest-neighbour (Levenshtein) methods, and calculate a simple edit distance",
     "Write and read short GREL expressions using value, dot notation, trim, case, replace, split and if",
     "Recognise when clustering is the wrong tool"
   ],
   learn:[
    {h:"Clustering: finding values that might mean the same thing", body:[
      {lead:"In OpenRefine, [[clustering-text|clustering]] means “finding groups of different values that might be alternative representations of the same thing”. It is the fastest way to tidy up hundreds of spelling variants."},
      "Start it from a text facet (the **Cluster** button in the facet box) or from a column’s **Edit cells → Cluster and edit…**. A window opens with a **Method** and a **Keying function** at the top and a table of suggested clusters:",
      {table:[["Column","What it shows"],["Cluster size","How many different values are in the group"],["Values in cluster","Each variant and how many rows have it"],["Merge?","A tick box: you decide"],["New cell value","The value all variants will become; edit it if needed"]]},
      "Tick the clusters you agree with, check the **New cell value** (it suggests the most common variant), and click **Merge selected & re-cluster**. Then try the next method. OpenRefine changes only what you tick.",
      {key:"Clustering suggests; you decide. Values that look alike are not always the same thing."}
    ]},
    {h:"Key collision: the fingerprint method", body:[
      "The default method, **key collision** with the **fingerprint** keying function, turns each value into a simplified key and groups values whose keys collide. OpenRefine’s documentation lists the steps, in this order:",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="t3u3a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="90" y="18" text-anchor="middle">Value 1</text><text class="s" x="250" y="18" text-anchor="middle">Value 2</text><rect class="d-lup" x="10" y="26" width="160" height="32" rx="6" stroke-width="2"/><text x="90" y="47" text-anchor="middle">␣Okafor, Amara</text><rect class="d-lup" x="180" y="26" width="150" height="32" rx="6" stroke-width="2"/><text x="255" y="47" text-anchor="middle">AMARA  OKAFOR</text><text class="s" x="170" y="80" text-anchor="middle">1. trim spaces at the ends</text><text class="s" x="170" y="98" text-anchor="middle">2. lowercase</text><rect class="d-panel" x="10" y="106" width="160" height="30" rx="6"/><text x="90" y="126" text-anchor="middle">okafor, amara</text><rect class="d-panel" x="180" y="106" width="150" height="30" rx="6"/><text x="255" y="126" text-anchor="middle">amara  okafor</text><text class="s" x="170" y="158" text-anchor="middle">3. remove punctuation</text><text class="s" x="170" y="176" text-anchor="middle">4. accents to plain letters</text><rect class="d-panel" x="10" y="184" width="160" height="30" rx="6"/><text x="90" y="204" text-anchor="middle">okafor amara</text><rect class="d-panel" x="180" y="184" width="150" height="30" rx="6"/><text x="255" y="204" text-anchor="middle">amara  okafor</text><text class="s" x="170" y="236" text-anchor="middle">5. split into words</text><text class="s" x="170" y="254" text-anchor="middle">6. sort, drop repeats, join</text><rect class="d-sage" x="10" y="262" width="160" height="32" rx="6" stroke-width="2"/><text x="90" y="283" text-anchor="middle">amara okafor</text><rect class="d-sage" x="180" y="262" width="150" height="32" rx="6" stroke-width="2"/><text x="255" y="283" text-anchor="middle">amara okafor</text><path class="d-ink" d="M90 294V326" stroke-width="2" marker-end="url(#t3u3a4)"/><path class="d-ink" d="M255 294V326" stroke-width="2" marker-end="url(#t3u3a4)"/><rect class="d-gold" x="60" y="330" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="354" text-anchor="middle">Same key: one cluster</text><text class="s" x="170" y="374" text-anchor="middle">you choose the value to keep</text></svg>', alt:"Two values, space Okafor comma Amara, and AMARA OKAFOR with a double space, go through six steps: trim, lowercase, remove punctuation, turn accents into plain letters, split into words, then sort and join. Both become the key amara okafor, so they form one cluster and the user chooses which value to keep.", cap:"Two values, one key. Because the words are sorted, word order and commas stop mattering."},
      "So `Okafor, Amara`, `amara okafor` and `AMARA  OKAFOR` all get the key `amara okafor`. `Müller` and `Muller` both become `muller`. The manual calls fingerprint the method “least likely to produce false positives”, which is why it’s the default.",
      "Knowing the steps tells you what it **won’t** find, and where it can mislead:",
      {list:["**Typos** change letters, so `Port Elis` (key `elis port`) doesn’t join `Port Ellis` (`ellis port`).","**Joined or hyphenated words**: punctuation is removed without adding a space, so `Port-Ellis` becomes `portellis` and stays separate. The Data Carpentry survey has exactly this pair: `Ruaca-Nhamuenda` and `Ruaca - Nhamuenda`.","**Word order is ignored**, so `Lin Mei` and `Mei Lin` collide. That might be one person written family-name-first and given-name-first, or two different people.","**Accents are removed**, so two names that differ only by an accent collide even if they are different names."]}
    ]},
    {h:"Looser keys: n-grams and sounds", body:[
      "The other key-collision functions build looser keys, so they find more, including more wrong matches:",
      {table:[["Keying function","How it makes the key","Good for"],["n-Gram fingerprint (n = 2 by default)","Removes spaces and punctuation, lists every run of n characters, sorts them","Spacing errors like “lookout” and “look out”"],["n-Gram with n = 1","Just the sorted set of letters","Small typos, but watch for anagram-like false matches"],["Metaphone3","How the word sounds in English","Names spelled from hearing them"],["Cologne phonetic","How the word sounds in German","German names"],["Daitch-Mokotoff, Beider-Morse","Sound codes for surnames: Daitch-Mokotoff was designed for Slavic and Yiddish names; Beider-Morse is a stricter variant that also guesses the name’s language","Names in those traditions"]]},
      "With n = 1, `Port Ellis` and `Port Elis` both have the letters e, i, l, o, p, r, s, t, so they collide. But so would any other values using the same letters: the manual’s example is “Wellington” and “Elgin Town”.",
      "The manual recommends working **from the strictest method to the laxest**, merging what’s clearly right at each stage, because each looser method needs more human checking."
    ]},
    {h:"Nearest neighbour: counting edits", body:[
      "**Nearest neighbour** methods compare values in pairs and group those closer than a distance you set, the **Radius**. The usual distance is [[edit-distance|Levenshtein distance]]: the smallest number of single-character insertions, deletions or substitutions that turn one string into the other.",
      {ex:"port elis  →  port ellis     insert one l          = 1\nchirdozo   →  chirodzo       change d→o, o→d       = 2\nana silva  →  ana silvia     insert i              = 1\nnorth      →  south          change n→s, r→u       = 2", label:"Worked example: Levenshtein distances", mono:true},
      "Notice the third line: `Ana Silva` and `Ana Silvia` are one edit apart, but they could easily be two different people. Small distance doesn’t mean same meaning. And `Chirdozo`/`Chirodzo` (a typo from the Data Carpentry survey) has distance 2, because swapping two neighbouring letters counts as two substitutions in Levenshtein distance.",
      "The defaults are Radius 1.0 and **Block chars** 6. To save time OpenRefine only compares values that share a run of characters of the block length, so a value shorter than that is never compared at all: with the default 6, `Kerow` (5 letters) is never compared with `Kerrow`. The manual suggests a block value of at least 3, and OpenRefine’s technical notes warn that very small values make clustering much slower. Raising the radius finds more clusters and more wrong ones.",
      "The other distance, **PPM**, judges similarity by how well two values compress together. The manual calls it very lax, best used as a “last resort”."
    ]},
    {h:"GREL: small expressions for big changes", body:[
      "When the fix isn’t a merge, you write a short expression. Choose a column’s **Edit cells → Transform…**, type an expression, and OpenRefine shows a **preview** of the result for each row before you click OK. The language is [[grel|GREL]], the General Refine Expression Language.",
      "In an expression, `value` means “the current cell’s value”. Functions can be written two ways, which mean the same thing:",
      {code:['trim(value)','value.trim()','','toTitlecase(trim(value))','value.trim().toTitlecase()'].join("\n"), lang:"txt", label:"GREL: full form and dot form", cap:"The dot form reads left to right: take the value, trim it, then convert it to title case. For `␣␣PORT ELLIS` both give `Port Ellis`."},
      "Strings go in quotes. Use `+` to join text, not `&` as in spreadsheets: `value + \" (checked)\"`. To use another column of the same row, write `cells[\"Column name\"].value`.",
      "Below the expression box, **On error** is set to **keep original**: if a cell can’t be transformed (for example `trim()` on a number), it stays as it was instead of being wiped. Keep that setting while you learn."
    ]},
    {h:"GREL recipes", body:[
      "These are checked against the GREL documentation. Each shows an input and what the expression returns (␣ marks a space).",
      {code:['value.trim()','  "␣Kerrow␣␣"        →  "Kerrow"','','value.toLowercase().trim()','  "␣PORT ELLIS"      →  "port ellis"','','value.replace("Pt. ", "Port ")','  "Pt. Ellis"        →  "Port Ellis"','','value.replace(/\\s+/, " ")','  "Port␣␣␣Ellis"     →  "Port Ellis"'].join("\n"), lang:"txt", label:"Spaces, case and replacing", cap:"`replace` changes every match. A pattern between slashes is a [[regular-expression|regular expression]]: `\\s+` means “one or more whitespace characters”."},
      {code:['value.replace(/[^0-9]/, "")','  "(04) 5550-1932"   →  "0455501932"','','value.split(",")[0].trim()','  "Kerrow, Mon"      →  "Kerrow"','','value.toTitlecase(" -")','  "ana-maría lópez"  →  "Ana-María López"','','if(value == "n/a", null, value)','  "n/a"              →  (empty)'].join("\n"), lang:"txt", label:"Digits, splitting, names and missing codes", cap:"`[^0-9]` means “any character that isn’t a digit”, so only digits remain. `split` makes a list and `[0]` takes the first item. The text inside `toTitlecase(\" -\")` lists the characters that start a new word."},
      "`split` keeps spaces around the pieces, which is why the second recipe trims afterwards. Plain `toTitlecase()` only starts new words after spaces, tabs, line breaks and full stops, so `ana-maría` would become `Ana-maría`; and like PROPER it lowercases the rest, turning `McKenzie` into `Mckenzie`.",
      {warn:"Removing commas before converting to numbers (`value.replace(\",\", \"\").toNumber()`) is right only if commas separate thousands. In data that uses the comma as a decimal mark, it would turn 1,5 into 15. Check first."}
    ]},
    {h:"When clustering is the wrong tool", body:[
      "Clustering works on characters, not meanings. OpenRefine’s own technical notes say it is “by no means enough” for deciding what really refers to the same thing. Some cases need other approaches:",
      {list:["**Different things with similar names.** `Kerrow` and `Kerrow North`, or two people called `Ana Silva`. Keep them apart unless other evidence says otherwise.","**Abbreviations and nicknames.** `St.` versus `Saint`, `Bob` versus `Robert`: no method above links them reliably. Write a list of agreed replacements instead.","**Matching to an official list.** If there is an authoritative list (official place names, a product catalogue, a members list), match your values to it. OpenRefine’s reconciliation feature does this against online services such as Wikidata; Lesson 5 shows the idea with a simple similarity score."]},
      {tip:"After each round of merges, look at the text facet again. The list of values that remain is the best check of what clustering did."}
    ]}
   ],
   try:[
    {id:"t3u3-l4-x1", type:"order", q:"Put the fingerprint key steps in the order OpenRefine’s documentation lists them, for the value `␣Fernández, Lucía`.", items:[
      {t:"Trim spaces at the start and end", why:"First the outer whitespace goes: `Fernández, Lucía`."},
      {t:"Change all letters to lowercase", why:"`fernández, lucía`."},
      {t:"Remove punctuation", why:"The comma goes: `fernández lucía`."},
      {t:"Turn accented letters into plain ones", why:"`fernandez lucia`."},
      {t:"Split into words, sort them, remove repeats and join", why:"`fernandez lucia` (here already in alphabetical order), the final key."}]},
    {id:"t3u3-l4-x2", type:"mcq", q:"Which pair will the **fingerprint** method put in the same cluster?", options:[
      {t:"`Mei Lin` and `Lin Mei`", ok:true, why:"Right. Fingerprint sorts the words, so both get the key `lin mei`. Whether to merge is your call: it could be one person written in two name orders, or two people."},
      {t:"`Port-Ellis` and `Port Ellis`", why:"Removing the hyphen glues the words: `portellis` versus `ellis port`. Different keys."},
      {t:"`Kerow` and `Kerrow`", why:"The missing r changes the letters, so the keys are `kerow` and `kerrow`. n-Gram fingerprint with n = 1 would find this pair (both use the letters e, k, o, r, w)."},
      {t:"`Port Elis` and `Port Ellis`", why:"Different letters, so different keys. Try n-gram with n = 1, or Levenshtein with radius 1."}]},
    {id:"t3u3-l4-x3", type:"number", q:"What is the Levenshtein distance between `chirdozo` and `chirodzo`?", answer:2, tol:0, unit:"edits", why:"The strings differ only in positions 5 and 6: `do` versus `od`. Levenshtein distance counts insertions, deletions and substitutions, so the swap needs two substitutions (d→o and o→d): distance 2.", wrongs:[{v:1, tol:0, why:"Swapping two neighbouring letters counts as one edit in a different measure (Damerau-Levenshtein), but plain Levenshtein, which OpenRefine uses, has no swap operation: it takes two substitutions."},{v:4, tol:0, why:"Only two characters differ; the other six already match."}]},
    {id:"t3u3-l4-x4", type:"mcq", q:"Fatima’s cluster window suggests merging `Ana Silva` (12 rows) and `Ana Silvia` (3 rows) into `Ana Silva`. What should she do?", options:[
      {t:"Leave the box unticked until she has checked other details, such as email or date of birth", ok:true, why:"Right. Two people can have names one letter apart. A merge would quietly give one person’s records to another. Check other columns first."},
      {t:"Merge: the most common spelling is always right", why:"The count tells you which spelling is common, not whether these are the same person."},
      {t:"Merge, because a distance of 1 proves they’re the same", why:"Edit distance measures how similar the characters are, not whether they mean the same thing."},
      {t:"Delete the 3 `Ana Silvia` rows", why:"Deleting loses real records, and these may belong to a different person."}]},
    {id:"t3u3-l4-x5", type:"match", q:"Match each GREL expression to what it returns for the input shown.", pairs:[
      ["`\"␣Kerrow␣\".trim()`","`Kerrow`","trim removes whitespace at both ends."],
      ["`\"PORT ELLIS\".toTitlecase()`","`Port Ellis`","toTitlecase capitalises each word’s first letter and lowercases the rest."],
      ["`\"Kerrow, Mon\".split(\",\")[0]`","`Kerrow` (the first piece of the list)","split makes a list at each comma, and [0] takes the first item."],
      ["`\"(04) 5550\".replace(/[^0-9]/, \"\")`","`045550`","The pattern matches every non-digit, and each is replaced with nothing."]]},
    {id:"t3u3-l4-x6", type:"sort", q:"Kenji is clustering a column of town names. Which method is most likely to suggest each merge?", buckets:["Fingerprint","n-Gram (n = 1) or Levenshtein","Neither: needs a human list"], items:[
      {t:"`kerrow` and `KERROW`", b:0, why:"Only case differs; fingerprint lowercases, so the keys collide."},
      {t:"`Ellis, Port` and `Port Ellis`", b:0, why:"Fingerprint ignores punctuation and word order."},
      {t:"`Port Elis` and `Port Ellis`", b:1, why:"A one-letter typo: same letter set (n = 1) and distance 1."},
      {t:"`St. Ann’s` and `Saint Ann’s`", b:2, why:"An abbreviation. The characters differ too much; a list of agreed replacements works better."},
      {t:"`Kerow` and `Kerrow`", b:1, why:"A missing letter: the same set of letters (n = 1) and distance 1. For Levenshtein, lower Block chars below the default 6, because `Kerow` has only five letters."}]},
    {id:"t3u3-l4-x7", type:"mcq", q:"Tomás wants to turn `Pt. Ellis` into `Port Ellis` in the town column without touching anything else. Which expression does it?", options:[
      {t:"`value.replace(\"Pt. \", \"Port \")`", ok:true, why:"Right. It replaces the exact text `Pt. ` (with its space) wherever it appears; values without it stay the same."},
      {t:"`replace(\"Pt. \", \"Port \")`", why:"In full form the first argument must be the text to work on: `replace(value, \"Pt. \", \"Port \")`. Without `value` there’s nothing to replace in."},
      {t:"`value.replace(\"Pt\", \"Port\")`", why:"Without the full stop and space this would also change any other `Pt` inside a value, for example in `Ptarmigan Hill`."},
      {t:"`value + \"Port Ellis\"`", why:"`+` joins text: this would give `Pt. EllisPort Ellis`."}]}
   ],
   apply:{intro:"Use your OpenRefine project from Lesson 3, or the paper table if you’re working without OpenRefine.", tasks:[
     {t:"Cluster the towns", how:["In the **town** text facet, click **Cluster**. With **key collision** and **fingerprint**, note which values are grouped. Tick the cluster, check the New cell value, and click **Merge selected & re-cluster**.","Change the keying function to **n-Gram fingerprint** and set the n-Gram size to 1. Does any new cluster appear? Merge only what you agree with.","Switch the method to **nearest neighbor** with **levenshtein**. Does anything else appear?","Close the window and look at the text facet. Which variant is left, and why did none of the methods catch it?","Without OpenRefine: work out the fingerprint key of each town value on paper, and group the ones that match."], write:"Which values did each method group, and which needed a manual fix?"},
     {t:"Write two GREL transforms", how:["On **town**: **Edit cells → Transform…**, type `value.replace(\"Pt. \", \"Port \")`, look at the preview, then click OK.","On **name**: try `value.toUppercase()` in the preview only (click Cancel), to see what a transform would do before committing.","Open the **Undo / Redo** tab on the left and read the list of steps you’ve taken."], write:"The steps listed in your history"}
   ], proof:"A project (or paper working) where the town column has exactly two values, plus a note of which method caught which variant."},
   read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Using clustering to detect possible typing errors” and “Transforming data”"}]
  },

  /* ===================== LESSON 5 ===================== */
  {id:"t3u3-l5", title:"Duplicates, history and the cleaning log", minutes:55,
   hook:{q:"A list of 120 sign-ups has 14 rows whose email address also appears on another row. Those 14 rows hold just 5 different email addresses. If you keep one row per email, how many rows are left?", options:["106","111","115","120"], answer:1, reveal:"**111.** Each of the 5 repeated addresses keeps one row, so you remove 14 − 5 = 9 rows: 120 − 9 = 111. Removing all 14 would delete those five people completely. Deciding what counts as a duplicate, and which row to keep, is the first half of this lesson; the second half is about making all your cleaning repeatable and checkable."},
   goals:[
     "Tell exact duplicates, duplicate records and legitimate repeats apart, and choose the column(s) that identify a record",
     "Find and remove duplicates in spreadsheets and in OpenRefine, keeping the right row",
     "Explain fuzzy matching, similarity thresholds and the trade-off between wrong matches and missed ones",
     "Use OpenRefine’s Undo / Redo history, extract it as JSON and apply it to another file",
     "Export clean data and project archives, and keep a cleaning log that explains each decision"
   ],
   learn:[
    {h:"What counts as a duplicate?", body:[
      {lead:"“Remove duplicates” sounds simple until you ask: duplicate of what? The answer depends on what one row is supposed to be."},
      "There are three different situations, and only two of them are problems:",
      {table:[["Situation","Example","What to do"],["Exact duplicate rows","The same sign-up imported twice: every cell identical","Remove the extra copies"],["Duplicate records","Fatima signed up on paper and online: same person, slightly different details","Merge carefully, keeping the best details"],["Legitimate repeats","Fatima volunteered on three different days: three real shifts","Keep them all"]]},
      "A [[duplicate-record]] is two or more rows describing the same real thing. To find them you need a **key**: the column or columns that should be unique for each record. For a list of people that might be an email address or a member number; for shifts, the person plus the date. If the table has a unique [[primary-key-sheet|ID column]], use it (Unit 2 of this track explains why every table should have one).",
      "So before removing anything, write down: **one row = one what?** If one row is one person, a repeated email is a duplicate. If one row is one shift, it may not be."
    ]},
    {h:"Finding and removing duplicates", body:[
      "**Flag first, remove later.** In a spreadsheet, a helper column such as `=COUNTIF($C$2:$C$121, C2)>1` marks every row whose email appears more than once. Filter for TRUE and look at the groups together. Trim spaces first (Lesson 2): COUNTIF ignores capitals but not a trailing space, so `ana@example.org␣` and `ana@example.org` won’t be counted as the same.",
      "Then the one-click tools:",
      {table:[["App","Command","Notes"],["Excel","**Data → Remove Duplicates** (Data Tools group)","Compares what each cell displays and ignores capitals; deletes permanently"],["Google Sheets","**Data → Data cleanup → Remove duplicates**","Google’s help says values differing only in case or formatting count as duplicates"],["LibreOffice Calc","**Data → Duplicates…** (version 25.2 and later)","Can select or remove; compares exactly, so capitals matter. Older versions: Standard Filter with “No duplications” (also case-sensitive in our tests)"],["Numbers","No built-in command at the time of writing","Use a COUNTIF helper column, filter, then delete rows"]]},
      "These commands **keep the first row** of each group and delete the rest (Microsoft’s help says so for Excel; LibreOffice and OpenRefine work the same way, and so does Google Sheets in practice, though its help doesn’t say). So sort first, to put the row you want to keep (the most complete, or the most recent) at the top of each group.",
      "In OpenRefine:",
      {list:["**Facet → Customized facets → Duplicates facet** on the key column shows `true` for values that occur in more than one row. It is case-sensitive, so trim and fix case first.","**All → Edit rows → Remove duplicate rows** (added in version 3.9) asks which columns identify a duplicate and removes every row after the first with the same values. It respects active facets, and it is exact: `Kerrow` and `kerrow` are different.","To control which row is first, sort, then choose **Sort → Reorder rows permanently** before removing."]},
      {warn:"Copy the rows you’re about to delete to a separate sheet (or star them in OpenRefine) before removing them. If someone asks next month why a person disappeared, you can show them."}
    ]},
    {h:"Fuzzy matching: near, but how near?", body:[
      "Many duplicates aren’t exact: `Fatima Haddad` and `Fatima Hadad`, or a town typed as `Kerow`. [[fuzzy-matching|Fuzzy matching]] scores how similar two values are and treats pairs above a **threshold** as possible matches. Lesson 4’s edit distance is one score; another common one is a similarity ratio from 0 (nothing alike) to 1 (identical).",
      "A frequent job is matching messy values against an **official list**. This Python sketch uses the standard library’s `difflib`, so it runs anywhere Python does, including the Python Lab:",
      {code:['import difflib','','official = ["Port Ellis", "Kerrow", "Ashby Vale",','            "Millbrook"]','typed = ["port elis", "Kerow", "Ashby Vail",','         "Milbrook", "Northgate"]','','lookup = {o.lower(): o for o in official}','for t in typed:','    hits = difflib.get_close_matches(','        t.lower(), list(lookup), n=1, cutoff=0.8)','    match = lookup[hits[0]] if hits else "NO MATCH"','    print(f"{t!r:14} -> {match}")'].join("\n"), lang:"py", label:"match_towns.py", cap:"Prints `'port elis'    -> Port Ellis`, then Kerrow, Ashby Vale, Millbrook, and `'Northgate'    -> NO MATCH`. `cutoff=0.8` is the threshold: only scores of 0.8 or more count."},
      "The threshold is a trade-off. Set it **too low** and you get **false matches**: if the official list also had `Ashby Dale`, then `Ashby Vail` would score 0.8 against it too, just enough to pass. Set it **too high** and real matches are **missed**. There is no perfect setting; there is only a setting plus a human review of the borderline cases.",
      {key:"A similarity score finds candidates. Other evidence (email, date of birth, address) and a person decide."},
      "For people, compare several fields, not just names: two rows with similar names **and** the same email are very likely one person; similar names with different birth years probably aren’t. Large-scale versions of this are called **record linkage**."
    ]},
    {h:"Undo / Redo: the history is a recipe", body:[
      "Every change you make in OpenRefine is listed in the **Undo / Redo** tab, from step 0, “Create project”. Click any earlier step and the project goes back to that state; later steps turn grey and can be redone by clicking them.",
      {warn:"If you go back several steps and then do something new, the greyed-out steps are erased for good. OpenRefine asks you to confirm before it overwrites them."},
      "The history is also a **reusable recipe**. Click **Extract…**, tick the steps you want, and OpenRefine shows them as [[json|JSON]] text, a [[cleaning-script]]. Copy it into a plain text file. Next month, when a new file arrives with the same column names, create a project from it, click **Apply…**, paste or choose the JSON, and click **Run operations** (older versions and the Data Carpentry lesson call it “Perform operations”).",
      {fig:'<svg viewBox="0 0 340 390"><defs><marker id="t3u3a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="10" y="10" width="320" height="170" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Undo / Redo: October file</text><text class="s" x="24" y="56">0. Create project</text><text class="s" x="24" y="80">1. Text transform on 9 cells in column</text><text class="s" x="40" y="96">town: grel:value.trim()</text><text class="s" x="24" y="120">2. Mass edit 16 cells in column town</text><text class="s" x="24" y="144">3. Remove 9 rows (duplicates)</text><text class="s" x="24" y="168">4. Edit single cell, row 57 (can’t extract)</text><path class="d-ink" d="M170 180V212" stroke-width="2" marker-end="url(#t3u3a5)"/><text class="s" x="180" y="200">Extract… steps 1–3</text><rect class="d-gold" x="60" y="216" width="220" height="50" rx="8" stroke-width="2"/><text x="170" y="238" text-anchor="middle">clean_steps.json</text><text class="s" x="170" y="256" text-anchor="middle">saved as plain text</text><path class="d-ink" d="M170 266V298" stroke-width="2" marker-end="url(#t3u3a5)"/><text class="s" x="180" y="286">Apply… → Run operations</text><rect class="d-sage" x="10" y="302" width="320" height="70" rx="10" stroke-width="2"/><text x="170" y="326" text-anchor="middle">November file, same columns</text><text class="s" x="170" y="348" text-anchor="middle">steps 1–3 repeated automatically;</text><text class="s" x="170" y="364" text-anchor="middle">check the new values by hand</text></svg>', alt:"The Undo/Redo history of an October project lists step 0 Create project, step 1 a text transform trimming the town column, step 2 a mass edit of 16 cells from clustering, step 3 remove 9 rows (duplicates), and step 4 an edit of a single cell on row 57, which is not extractable. Steps 1 to 3 are extracted to a plain-text JSON file, which is applied to a November file with the same columns, repeating the steps automatically; new values still need checking by hand.", cap:"Extract the steps once, apply them to every similar file. Single-cell edits can’t be extracted, and new data may bring new problems."},
      "Two limits matter. The manual notes that **not every operation can be extracted**: edits to a single cell, for example, can’t be replicated. And a recipe repeats exactly what it was told: a merge from clustering replaces the specific values it saw, so next month’s new misspelling won’t be fixed. Always look at the facets again after applying.",
      {code:['[','  {','    "op": "core/text-transform",','    "engineConfig": {"facets": [], "mode": "row-based"},','    "columnName": "town",','    "expression": "grel:value.trim()",','    "onError": "keep-original",','    "description": "Text transform on cells in column town using expression grel:value.trim()"','  }',']'].join("\n"), lang:"txt", label:"One extracted step (shortened)", cap:"Each step records its operation, the column, the exact expression, the facets that were active and what to do on errors. Real extracts include a few more fields."}
    ]},
    {h:"Exporting your work", body:[
      "When the data is clean, get it out: click **Export** (top right) and choose a format. OpenRefine 3.10 offers:",
      {list:["**Tab-separated value** and **Comma-separated value**: the best choices for sharing and for R, Python or another spreadsheet ({{csv-files}}).","**HTML table**, **Excel (.xls)**, **Excel 2007+ (.xlsx)** and **ODF spreadsheet**.","**Custom tabular…**, **SQL…** and **Templating…** for choosing columns, building database statements or writing your own format such as JSON."]},
      "Remember the facet trap from Lesson 3: most exports include only the **rows currently matching**. Check the row count before exporting.",
      "To share the whole project, choose **Export → OpenRefine project archive to file**. You get a `.openrefine.tar.gz` file containing the data and its complete history; another person opens it with **Import project** on their start screen and sees every step you took.",
      {warn:"A project archive contains the **original raw data** as well as the clean result, because the history can be undone back to step 0. If you removed names or other personal details during cleaning, sharing the archive shares them again. Export a CSV for sharing, and see {{anonymisation}} for safer ways to share data about people."}
    ]},
    {h:"The cleaning log", body:[
      "OpenRefine’s history records **what** was done. It doesn’t record **why**: why `Kerrow North` was kept separate, why age 214 became blank, which source showed that village `49` was Chirodzo. A [[cleaning-script|cleaning log]] records the reasons. It can be a text file, a sheet in the workbook, or a section of a project’s notes, kept next to the data.",
      {ex:"File in:  volunteers_raw_2026-10.csv (180 rows)\nFile out: volunteers_clean_2026-10.csv (171 rows)\nTool:     OpenRefine 3.10.0; steps in clean_steps.json\n\n1. Trimmed spaces in all text columns (9 cells)\n2. Town: merged 6 spellings of Port Ellis\n   (fingerprint + 1-gram clusters, checked by hand)\n3. Kept Kerrow and Kerrow North separate:\n   different places (confirmed with the office)\n4. Hours: \"n/a\" (3 cells) set to blank = not recorded\n5. Age 214 (row 57) set to blank: impossible;\n   paper form not available\n6. Removed 9 duplicate rows, key = email,\n   kept most recent sign-up; removed rows\n   saved in volunteers_removed_2026-10.csv\nChecked: 2 towns; hours total 512 before\nand after step 4 (blanks add nothing)", label:"Example: a cleaning log (invented)", mono:true},
      "A good log has the file names and row counts in and out, the tool and version, each step with the rule used and how many cells or rows it changed, each judgement call with its reason, and the checks you ran. Write it **as you go**: from memory, you’ll forget the judgement calls, which are the most important part.",
      "With the raw file, the log and (if you used OpenRefine) the JSON steps, anyone can check or repeat your cleaning, including you, months later. That is what makes a result [[reproduce|reproducible]] and trustworthy. In a spreadsheet, version history ({{version-history}}) helps you recover earlier states, but only a log says why the changes were made.",
      {key:"History records what you did; the log records why. Keep both with the data."}
    ]}
   ],
   try:[
    {id:"t3u3-l5-x1", type:"sort", q:"In a food bank’s shift sheet, one row should be one shift. Which pairs of rows are problems to fix, and which are fine?", buckets:["Duplicate to resolve","Legitimate repeat: keep both"], items:[
      {t:"Two identical rows: Fatima, 3 Oct, morning, Kerrow (imported twice)", b:0, why:"Every cell is the same and one row is one shift: one of these is an accidental copy."},
      {t:"Fatima, 3 Oct, morning and Fatima, 10 Oct, morning", b:1, why:"Different dates: two real shifts."},
      {t:"Kenji, 3 Oct, morning and Kenji, 3 Oct, afternoon", b:1, why:"Different shifts on the same day are both real."},
      {t:"Ana Silva, 5 Oct, morning, email ana@example.org and ana silva␣, 5 Oct, morning, email ana@example.org", b:0, why:"Same person (same email), same shift: a duplicate record with messy typing."},
      {t:"Two different people called Mei Tanaka, both on 5 Oct, with different emails", b:1, why:"Same name, different people. Their different emails are the clue."}]},
    {id:"t3u3-l5-x2", type:"number", q:"A table has 240 rows. A Duplicates facet on the member ID column shows 18 rows as `true`, made up of 7 different IDs. After removing duplicate rows by member ID (keeping the first of each), how many rows remain?", answer:229, tol:0, unit:"rows", why:"The 7 repeated IDs each keep one row. The rows removed are 18 − 7 = 11, so 240 − 11 = 229.", wrongs:[{v:222, tol:0, why:"That removes all 18 flagged rows, deleting those 7 members completely. Each repeated ID keeps one row."},{v:233, tol:0, why:"That subtracts the 7 distinct IDs instead of the extra copies. The extra copies are 18 − 7 = 11."}]},
    {id:"t3u3-l5-x3", type:"mcq", q:"Priya matches typed town names to an official list with a similarity cutoff of 0.8. `Ashby Vail` matches both `Ashby Vale` (0.9) and `Ashby Dale` (0.8). What does this show?", options:[
      {t:"A threshold finds candidates, but borderline matches need checking with other evidence", ok:true, why:"Right. Both scores pass the cutoff, yet only one place can be meant. A person, or another field such as the postcode, has to decide."},
      {t:"The cutoff should be 0, so nothing is missed", why:"A cutoff of 0 would match every value to something, producing many wrong matches."},
      {t:"Fuzzy matching doesn’t work and should never be used", why:"It works well for finding candidates. The lesson is that its output needs review."},
      {t:"The higher score is always the right match", why:"Usually a good guess, but not a guarantee: the person could have meant Ashby Dale and mistyped it."}]},
    {id:"t3u3-l5-x4", type:"mcq", q:"In OpenRefine, Dmitri clicks back to step 3 of 8 in Undo / Redo, then trims a column. What happens to steps 4–8?", options:[
      {t:"They are erased and can’t be redone, after OpenRefine asks him to confirm", ok:true, why:"Right. A new operation after going back replaces everything that came after that point. To keep them, he could first extract them as JSON."},
      {t:"They move after the new step automatically", why:"OpenRefine doesn’t reorder history; the greyed-out steps are discarded."},
      {t:"They stay grey and can be redone later", why:"They stay redoable only as long as he doesn’t make a new change."},
      {t:"Nothing: history is only a log and doesn’t affect the data", why:"The history is the project’s state; clicking a step really undoes the later changes."}]},
    {id:"t3u3-l5-x5", type:"order", q:"Put Hana’s monthly routine for a new file with the same columns as last month’s in order.", items:[
      {t:"Create a new OpenRefine project from the new raw file", why:"The raw file stays untouched; the project is a copy."},
      {t:"Undo / Redo → Apply…, paste last month’s JSON, Run operations", why:"Replays the saved steps."},
      {t:"Look at the facets for new problems the recipe didn’t cover", why:"A recipe repeats what it knew; new misspellings need new decisions."},
      {t:"Fix the new problems and add them to the cleaning log", why:"Record each new step and its reason."},
      {t:"Remove all facets, check the row count, and export a CSV", why:"Exports use the current selection, so clear facets first."}]},
    {id:"t3u3-l5-x6", type:"mcq", q:"Oluwaseun removed participants’ names from a survey during cleaning in OpenRefine. A colleague asks for “the project, so I can see what you did”. What should he share?", options:[
      {t:"The cleaning log and the extracted JSON steps, plus the cleaned CSV, but not the project archive", ok:true, why:"Right. The archive contains the original data, names included, because history can be undone. The log and JSON show exactly what he did without the personal data."},
      {t:"The project archive: the names were removed, so it’s safe", why:"The archive keeps the full history back to step 0, and the raw data with it. Undoing the removal step would bring the names back."},
      {t:"A screenshot of the final grid", why:"That shows the result, not the steps, and can’t be checked or repeated."},
      {t:"Nothing: cleaning steps should stay private", why:"Sharing the steps is what makes the work checkable; the question is how to share them safely."}]},
    {id:"t3u3-l5-x7", type:"spot", q:"Here is Lucía’s cleaning log. Tap the entries that don’t give enough information for someone else to check or repeat the step.", ask:"too vague", parts:[
      {t:"1. Trimmed spaces in all text columns (14 cells).", flag:false, why:"Clear rule and a count: fine."},"\n",{t:"2. Fixed the towns.", flag:true, why:"Fixed how? Which values became which, using which method, and how many cells? Nobody could repeat this."},"\n",{t:"3. Set 3 ages above 120 to blank: impossible values; forms checked, unreadable.", flag:false, why:"Rule, count, reason and evidence: fine."},"\n",{t:"4. Removed duplicates.", flag:true, why:"Which column was the key, which row was kept, and how many rows were removed? This matters a lot for later counts."},"\n",{t:"5. Kept Kerrow and Kerrow North separate (different places, confirmed with the office).", flag:false, why:"A judgement call with its reason recorded: exactly what a log is for."}]}
   ],
   apply:{intro:"Finish your cleaning of the sign-up list from Lessons 3 and 4 (or use a spreadsheet copy of it), then make it repeatable and documented.", tasks:[
     {t:"Find and remove duplicates safely", app:{
       ms:["Add some duplicates: copy two rows and paste them at the bottom.","In a new column, type `=COUNTIF($A$2:$A$20, A2)>1` (using the name column) and fill down. Filter for TRUE.","Copy the flagged rows to a new sheet named **Removed**.","Select the data and choose **Data → Remove Duplicates**, tick only the name column, check **My data has headers**, and click **OK**. Read how many were removed."],
       google:["Add two duplicate rows at the bottom.","Add `=COUNTIF($A$2:$A$20, A2)>1` in a new column, fill down and filter for TRUE.","Copy the flagged rows to a new sheet named **Removed**.","Select the data and choose **Data → Data cleanup → Remove duplicates**. Tick **Data has header row**, choose only the name column, and click **Remove duplicates**."],
       libre:["Add two duplicate rows at the bottom.","Add `=COUNTIF($A$2:$A$20; A2)>1` in a new column (LibreOffice may show `;` between arguments) and fill down.","Copy the flagged rows to a new sheet named **Removed**.","Select the data and choose **Data → Duplicates…**: compare rows, tick the header option, compare by the name column, and choose to remove. If your version has no Duplicates… item, use **Data → More Filters → Standard Filter** with **Options → No duplications** and copy the results elsewhere."],
       apple:["Add two duplicate rows at the bottom.","Add `=COUNTIF($A$2:$A$20, A2)>1` in a new column and fill down.","Copy the flagged rows to a new sheet named **Removed**.","Numbers has no Remove Duplicates command: sort by the name column so duplicates sit together, then delete the extra rows by hand (select the row, Control-click, **Delete Row**)."]},
      write:"How many rows were removed, and which copy of each did the app keep?"},
     {t:"Save the recipe and write the log", how:["In OpenRefine: **Undo / Redo → Extract…**, tick your cleaning steps, copy the JSON and save it in a plain text file named `clean_steps.json`.","Optional: create a second project from the original raw text, then **Apply…** that JSON and **Run operations**. Compare the result with your first project.","**Export → Comma-separated value** for the clean data (with all facets removed).","In any app, write a cleaning log like the example in this lesson: files and row counts in and out, each step with its rule and count, each judgement call with its reason, and your final checks.","No OpenRefine? Write the log for your spreadsheet cleaning from Lesson 2 and this lesson."], write:"Your cleaning log"}
   ], proof:"A clean file, a sheet or file of the removed rows, and a cleaning log that someone else could follow (plus `clean_steps.json` if you used OpenRefine)."},
   read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Using undo and redo”, then “Using scripts” and “Exporting and Saving Data from OpenRefine”", note:"In OpenRefine 3.10 the Apply button is called “Run operations” rather than “Perform operations”."}]
  }
  ],
  checkpoint:["t3u3-q02","t3u3-q05","t3u3-q09","t3u3-q12","t3u3-q15","t3u3-q20","t3u3-q23","t3u3-q27","t3u3-q30","t3u3-q34","t3u3-q38","t3u3-q42"],

  codex:[
   {id:"data-cleaning", title:"Data cleaning", aka:["data cleansing","dirty data","messy data","data wrangling"], tags:["data","cleaning"],
    summary:"Finding and fixing the inconsistencies in data (spaces, spellings, types, duplicates, codes) so it means what it should, without changing what it says.",
    levels:{
     starter:[
      "Data cleaning is tidying up the small inconsistencies people and systems leave in data, so that things which mean the same are written the same way.",
      "Computers compare characters. To an exact comparison, “Port Ellis”, “port ellis” and “Port Ellis ” (with a space at the end) are three different towns. (Some spreadsheet functions ignore capitals, but none of them ignores the hidden space.) A count, a chart or a lookup then gives a wrong answer, usually without any error message.",
      {list:["Extra and invisible spaces","Different spellings and capitals","Numbers stored as text (“4 hrs”)","Codes for missing values (n/a, 999)","The same person on two rows","Impossible values (age 214)","Garbled accents (cafÃ© instead of café)"]},
      {key:"Clean on a copy, fix only what you can justify, and write down every step."},
      "Cleaning is not about making data look neat. It’s about making sure that a count of volunteers per town, a total of hours or a list of members gives the true answer. A tidy-looking table with one person listed twice is still wrong."
     ],
     builder:[
      "A reliable workflow runs from structure to detail: look at the data (row counts, distinct values per column, blanks); make a working copy; fix the structure (one value per cell, one row per record); trim whitespace and standardise case; standardise spellings with review; fix types; resolve duplicates; check the counts again; and log each step.",
      "Order matters. Trimming first turns many apparent spelling variants into identical values, and duplicates are easiest to spot once values are consistent.",
      "Each problem gets one of three treatments:",
      {table:[["Treatment","Use when"],["Fix with a rule","The correct value is certain and the rule can be written (trim; agreed spelling)"],["Fix with evidence","Another source shows the true value (a form, GPS position, an official list)"],["Flag and leave","The true value can’t be known: mark it, set it to missing in the clean copy, record why"]]},
      "Tools: spreadsheet functions in helper columns (TRIM, CLEAN, SUBSTITUTE, PROPER, VALUE) for small jobs; OpenRefine for column-wide exploring, clustering and replayable steps; R or Python scripts when cleaning must be fully automated.",
      "Look before and after. The quickest checks are: the number of rows; the list of distinct values (and their counts) in each category column; the smallest and largest values in each number column; and the number of blanks. Write these down at the start, and compare them at the end. If a total changes when you only meant to fix spelling, something went wrong.",
      "Fix problems at their source when you can. If a web form lets people type their town freely, a dropdown list prevents next month’s misspellings; if an export uses the wrong encoding, change the export setting. Cleaning the same mistakes every month is a sign the data entry needs attention."
     ],
     pro:[
      "Cleaning decisions are analysis decisions. Setting an implausible value to missing, merging two categories or dropping duplicates changes counts and estimates, so they belong in the methods record, not only in your head. Data Carpentry’s OpenRefine lesson motivates recording every step partly because journals and funders increasingly ask for documentation of data processing.",
      "Separate **validity** (is the value possible? an age of 214 isn’t) from **plausibility** (is it likely? an age of 92 is unusual but real). Removing plausible-but-surprising values to tidy a distribution is a form of bias.",
      "Distinguish problems of reading from problems of content. Mojibake (`cafÃ©`), merged header rows and wrong separators are usually import errors: re-import with the right settings rather than patching values. Number formats depend on locale: `1,250` is one thousand two hundred and fifty in some conventions and one and a quarter in others.",
      "Keep three artefacts together: the untouched raw file, the cleaning steps in executable form (an OpenRefine operation history or a script), and a log explaining judgement calls. Together they make the clean data reproducible and auditable; any one alone does not.",
      "Missing-value codes ({{missing-values}}) deserve special care. A `999` or `-1` meaning “not asked” will be averaged as a real number unless it is converted to a true blank, and a blank can mean “not asked”, “refused” or “zero” depending on the form. Decide the meaning of each code, convert consistently, and record the mapping.",
      "Validation at entry (dropdowns, required formats) prevents much of this work ({{data-validation-rules}}); Unit 2 of this track covers tidy data and data entry, building on {{tidy-data}}."
     ]},
    related:["cleaning-log","openrefine-basics","deduplication","tidy-data","csv-files","tidy-data-principles","raw-data-raw","missing-values","data-validation-rules"],
    read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Introduction”"}],
    sources:[{t:"Data Carpentry: OpenRefine for Social Science Data", url:"https://datacarpentry.org/openrefine-socialsci/"},{t:"OpenRefine manual: Cell editing", url:"https://openrefine.org/docs/manual/cellediting"}], checked:"2026-11"},

   {id:"openrefine-basics", title:"OpenRefine basics", aka:["OpenRefine","Google Refine","Freebase Gridworks","installing OpenRefine","localhost:3333"], tags:["tools","cleaning","OpenRefine"],
    summary:"A free, open-source cleaning tool that runs as a local server on your computer and is used through a browser; it works on a copy of your data and records every step.",
    levels:{
     starter:[
      "OpenRefine is a free program for exploring and cleaning tables. It looks like a spreadsheet but has no cell formulas; instead it works on whole columns at once.",
      "You start it like any program, and it opens in your web browser at `http://127.0.0.1:3333`. That address means “this computer”: the program runs on your own machine and the browser is just its screen. Your data stays on your computer.",
      "It never changes your original file. Importing makes a **project**, a copy, and every change you make is listed in a history you can undo.",
      "There is no phone or tablet version. Downloads for Windows, Mac and Linux are at openrefine.org/download (the Windows and Mac versions include Java; Linux needs Java installed).",
      "Think of it as a workshop for tables: you bring a copy of the data in, use its tools on whole columns at a time, and take a clean copy out, with a full list of everything you did."
     ],
     builder:[
      {table:[["Task","Where"],["Start a project","Create project → This Computer / Clipboard / Web Addresses (URLs)"],["Import options","Character encoding, separator, header lines, trim whitespace, parse numbers, store blanks as nulls"],["Explore a column","Column arrow → Facet → Text facet (or Numeric, Timeline, Customized facets)"],["Bulk fixes","Edit cells → Common transforms, Transform…, Cluster and edit…, Replace…"],["Undo anything","Undo / Redo tab on the left"],["Get data out","Export (top right)"]]},
      "Projects save automatically; **Open project** on the start screen lists them, and **Browse workspace directory** shows where they’re stored. Quit by closing the tab and pressing Ctrl + C in the console window (Windows, Linux) or quitting the app (Mac).",
      "Facets and filters select rows, and later operations and most exports apply only to the selected rows. Check the “matching rows” count before exporting.",
      "Install notes: on Windows, use the installer or extract the zip to a folder of its own; on a Mac, if the first launch is blocked, use System Settings → Privacy & Security → Open Anyway (Control-click → Open on older macOS); on ChromeOS, use the Linux version inside the Linux development environment and open localhost:3333 in Chrome.",
      "Start-up can take a minute or more, especially the first time; if no browser tab opens, go to `http://127.0.0.1:3333/` yourself. OpenRefine works best in Chromium-based browsers (Chrome, Edge, Opera) and Safari; the manual mentions minor issues in Firefox and no support for Internet Explorer.",
      "Imported columns are text unless you choose to parse numbers on import or convert later with Common transforms. Numbers show in green, aligned right."
     ],
     pro:[
      "OpenRefine is a Java web application (BSD licence) that grew out of Freebase Gridworks (Metaweb), became Google Refine in 2010 and OpenRefine in 2012. The stable series in late 2026 is 3.10 (3.10.0 released February 2026); a 4.0 architecture is in development but not released as stable.",
      "By default the server listens only on 127.0.0.1, port 3333. The manual explains how to bind other interfaces to share an instance, warns against doing so on a machine exposed to the internet, and notes there is no multi-user security.",
      "Memory: the default is about 1 GB (1024 MB in `openrefine.l4j.ini`; the `refine.ini` used by the start scripts in 3.10 sets 1400 MB); the manual suggests more for projects over roughly a million cells or 50 MB files, set in `openrefine.l4j.ini` (Windows exe), `refine.ini` or the `-m` option (Linux). Turning off “parse cell text into numbers” on import saves memory.",
      "Privacy: core features run offline. Importing from URLs, fetching URLs into columns and reconciliation send data to outside services, which matters for confidential data. Extensions can add functions, importers and exporters; check their stated version compatibility.",
      "Java: the Linux start script requires Java 11 or later and warns that versions above 21 are untested.",
      "Projects live in the workspace directory (on Windows typically under AppData, on a Mac in `~/Library/Application Support/OpenRefine/`, on Linux in `~/.local/share/openrefine/`). Back that folder up, or export project archives, before upgrading; the manual recommends this and warns that extensions may not be compatible with new versions."
     ]},
    related:["facets-clustering","grel-transformations","cleaning-log","data-cleaning"],
    read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Creating a new OpenRefine project”"}],
    sources:[{t:"OpenRefine manual: Installing OpenRefine", url:"https://openrefine.org/docs/manual/installing"},{t:"OpenRefine manual: Running OpenRefine", url:"https://openrefine.org/docs/manual/running"},{t:"OpenRefine download page", url:"https://openrefine.org/download"}], checked:"2026-11"},

   {id:"facets-clustering", title:"Facets and clustering", aka:["text facet","numeric facet","duplicates facet","cluster and edit","fingerprint","key collision","nearest neighbour","Levenshtein","n-gram"], tags:["OpenRefine","cleaning"],
    summary:"Facets list each distinct value with its count and let you select rows; clustering suggests groups of different values that might mean the same thing, for you to approve.",
    levels:{
     starter:[
      "A **facet** is a summary that is also a filter. Pick a column and choose Facet → Text facet: OpenRefine lists every distinct value with how many rows have it. Click a value to show only those rows, or edit it to change all of them at once.",
      "**Clustering** goes further: it looks for values that are probably the same thing written differently (“Port Ellis”, “port ellis”, “Ellis, Port”) and suggests merging them. You tick the groups you agree with and choose the spelling to keep.",
      {key:"Clustering only suggests. Two values that look alike might be two different things, so every merge is your decision."},
      "A typical session: open a text facet on a messy column, sort it by name to see the variants, click Cluster, merge the groups you’re sure about, then look at the facet again. Values that are left over can be fixed one by one with the facet’s edit link."
     ],
     builder:[
      {table:[["Facet","Shows"],["Text","Distinct values and counts"],["Numeric","Range, plus numeric / non-numeric / blank / error counts"],["Timeline","Spread of dates"],["Text length","Number of characters per value"],["Duplicates","true for values in more than one row (case-sensitive)"],["Facet by blank","Rows with no value"]]},
      "Clustering methods, from strict to lax (the manual’s recommended order):",
      {list:["**Key collision → fingerprint**: trim, lowercase, remove punctuation, strip accents, sort the words. Catches case, spacing, punctuation and word-order differences.","**Key collision → n-Gram fingerprint**: keys from runs of n characters (default 2). n = 1 catches small typos but also anagram-like false matches.","**Key collision → phonetic** (Metaphone3 for English, Cologne for German, Daitch-Mokotoff for Slavic and Yiddish names, and Beider-Morse, a stricter variant of it): similar sounds.","**Nearest neighbour → Levenshtein**: pairs within an edit distance (Radius, default 1.0; Block chars, default 6).","**Nearest neighbour → PPM**: compression-based, very lax, a last resort."]},
      "Click **Merge selected & re-cluster** after each round, try the next method, and check the text facet at the end.",
      "Facet tips: include and exclude values to select a subset; combine facets on several columns (each narrows the selection further); use the Numeric facet’s non-numeric and blank boxes to find cells that didn’t convert. Facets and filters are not saved when you close a project; the Permalink keeps the current view. And remember that operations and most exports apply only to the matching rows.",
      "In the cluster window, the histograms on the right let you focus on clusters with many rows or on long or short values, and **Export clusters** saves the suggestions as JSON for review."
     ],
     pro:[
      "Fingerprint’s steps have consequences. Punctuation is removed without inserting a space, so `Port-Ellis` keys as `portellis` and won’t join `Port Ellis`. Tokens are sorted and de-duplicated, so `Mei Lin` and `Lin Mei` collide, which may join two people. Accent folding makes `godél` and `gödel` collide; the technical notes warn this can be a false positive where accents distinguish names.",
      "Levenshtein distance counts single-character insertions, deletions and substitutions; a swap of neighbours costs 2 (Damerau-Levenshtein would count 1). Only the blocking step simplifies the values (trim, remove punctuation, collapse whitespace, lowercase); the distance itself is measured on the values as they are, so case differences count (the manual’s example: `New York` and `newyork` are 3 apart). It isn’t normalised for length: the manual shows a custom distance `levenshteinDistance(value1, value2) / (max(length(value1), length(value2)) + 1)` for columns with very different lengths.",
      "Blocking speeds nearest-neighbour clustering by comparing only values sharing a substring of the block length (values shorter than the block are never compared); smaller blocks find more but, according to the technical notes, run much slower, and the manual suggests not going below 3.",
      "Custom keying and distance functions can be written in GREL, Jython or Clojure (Manage clustering functions). Clustering is syntactic only; for meaning-aware matching against authorities, OpenRefine offers reconciliation with services such as Wikidata.",
      "Key collision is fast (the manual says it can process millions of cells in seconds) because each value is keyed once; nearest-neighbour methods compare pairs, which is why blocking is needed."
     ]},
    related:["openrefine-basics","grel-transformations","deduplication"],
    read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Using Facets” and “Using clustering to detect possible typing errors”"}],
    sources:[{t:"OpenRefine manual: Facets", url:"https://openrefine.org/docs/manual/facets"},{t:"OpenRefine manual: Cell editing (Cluster and edit)", url:"https://openrefine.org/docs/manual/cellediting"},{t:"OpenRefine: Clustering methods in-depth", url:"https://openrefine.org/docs/technical-reference/clustering-in-depth"}], checked:"2026-11"},

   {id:"grel-transformations", title:"GREL transformations", aka:["GREL","General Refine Expression Language","Transform…","value.trim()","OpenRefine expressions"], tags:["OpenRefine","cleaning","expressions"],
    summary:"GREL is OpenRefine’s small expression language: `value` is the current cell, functions chain with dots, and Transform… applies an expression to every selected cell with a preview.",
    levels:{
     starter:[
      "When a fix is a rule (“remove spaces”, “change Pt. to Port”), you can write it once as a short expression and OpenRefine applies it to every cell in the column.",
      "Choose a column’s **Edit cells → Transform…**, type the expression, and look at the preview before clicking OK. The word `value` means “what’s in this cell now”.",
      {ex:"value.trim()              remove spaces at the ends\nvalue.toTitlecase()       Port Ellis style capitals\nvalue.replace(\"Pt. \", \"Port \")   change one piece of text", label:"Three everyday expressions", mono:true},
      "If you make a mistake, the Undo / Redo tab takes you back.",
      "Many common fixes don’t need typing at all: **Edit cells → Common transforms** has trim, collapse whitespace, case changes and type conversions ready-made. GREL is for everything else: replacing particular text, keeping only digits, taking part of a value, or turning a code like `n/a` into a true blank."
     ],
     builder:[
      "Functions can be written `trim(value)` or `value.trim()`; the dot form chains left to right: `value.trim().toLowercase()`. Strings use quotes; `+` joins text (not `&`). Other columns: `cells[\"Column name\"].value`. Patterns between slashes are regular expressions.",
      {table:[["Expression","Result"],["`value.trim()`","Removes leading and trailing whitespace"],["`value.replace(/\\s+/, \" \")`","Collapses runs of whitespace to one space"],["`value.replace(/[^0-9]/, \"\")`","Keeps only digits"],["`value.split(\",\")[0].trim()`","First comma-separated part, trimmed"],["`value.toTitlecase(\" -\")`","Capitals after spaces and hyphens"],["`if(value == \"n/a\", null, value)`","Turns a code into a true blank"],["`value.fingerprint()`","The clustering key"],["`value.length()`","Number of characters"]]},
      "**On error → keep original** (the default) leaves a cell unchanged if the expression fails on it, for example `trim()` on a number. Try a new expression with a facet selecting a few rows first.",
      "Build expressions step by step: start with `value`, add one function, look at the preview, then add the next. The Transform window’s **History** tab lists expressions you’ve used in this project, so you can reuse them on another column.",
      "GREL can also power custom facets: **Facet → Custom text facet…** with `value.trim().toLowercase()` shows how the column *would* group after cleaning, without changing anything. And **Edit column → Add column based on this column…** writes the result into a new column instead of overwriting, much like a spreadsheet helper column."
     ],
     pro:[
      "`replace` with a plain string or a regex replaces every match. `replace` can’t match nulls (null isn’t a string); use `if(value == null, \"…\", value)` or a blank facet. `split` keeps surrounding spaces and drops the separator; `smartSplit` handles quoted CSV-style fields.",
      "`toTitlecase()` uses space, tab, line breaks and full stop as default word boundaries and lowercases the remaining letters (it uses Apache Commons’ `capitalizeFully`), so `McKenzie` becomes `Mckenzie` and `o'neill` becomes `O'neill`; pass delimiters such as `\" -'\"` to change the boundaries.",
      "In 3.10, `trim()` uses Guava’s Unicode whitespace definition, which includes the non-breaking space (U+00A0); the Collapse consecutive whitespace transform uses `[\\p{Zs}\\s]+`. Excel’s TRIM doesn’t remove U+00A0 (Microsoft’s help says so), nor does LibreOffice Calc’s (tested), nor Google Sheets’ Trim whitespace command.",
      "`toNumber()` expects a plain machine-readable number; commas and currency symbols must be removed first, and locale matters (a decimal comma would be misread). Common transforms To number and To date keep the original value where conversion fails and report how many cells changed.",
      "Every transform is stored in the history with its exact expression (for example `grel:value.trim()`), so expressions become part of the reusable operation JSON. Jython and Clojure are available as alternatives to GREL.",
      "Data types matter in expressions. `value + 1` adds 1 to a number but appends the text “1” to a string, so `\"12\" + 1` gives `121`. Use `value.toNumber()` first when a column is still text, and check the result with a Numeric facet. Comparisons use `==`, and `value.type()` tells you whether a cell holds a string, number, date or null."
     ]},
    related:["facets-clustering","openrefine-basics","cleaning-log","py-strings"],
    read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Working with OpenRefine” → “Transforming data”"}],
    sources:[{t:"OpenRefine manual: General Refine Expression Language", url:"https://openrefine.org/docs/manual/grel"},{t:"OpenRefine manual: GREL functions", url:"https://openrefine.org/docs/manual/grelfunctions"}], checked:"2026-11"},

   {id:"deduplication", title:"Deduplication and fuzzy matching", aka:["remove duplicates","duplicate rows","duplicate records","fuzzy matching","record linkage","similarity score"], tags:["data","cleaning","spreadsheets","OpenRefine"],
    summary:"Deciding what one row represents, finding exact and near duplicates, keeping the right row, and treating similarity scores as candidates for human review.",
    levels:{
     starter:[
      "Duplicates are rows that describe the same thing more than once, like a person who signed up twice. They make counts and totals too high.",
      "But not every repeat is a duplicate. If each row is one shift, the same volunteer appearing on three dates is three real shifts. Always ask first: **one row = one what?**",
      "Flag before you delete: a helper column with `=COUNTIF($C$2:$C$200, C2)>1` marks values that appear more than once. Look at them, then remove the extra copies, keeping a copy of what you removed.",
      {key:"Duplicate of what? Decide the key (email, member number), then remove only the extra copies."},
      "Near duplicates are harder: “Fatima Haddad” and “Fatima Hadad” may be one person with a typo, or two people. A similarity score can find such pairs, but a person checks them, ideally with another detail such as an email address."
     ],
     builder:[
      {table:[["App","Command"],["Excel","Data → Remove Duplicates"],["Google Sheets","Data → Data cleanup → Remove duplicates"],["LibreOffice Calc","Data → Duplicates… (25.2 and later); Standard Filter → No duplications (older)"],["Numbers","No built-in command: COUNTIF helper, sort, delete"],["OpenRefine","Duplicates facet; All → Edit rows → Remove duplicate rows (3.9+)"]]},
      "These keep the first row of each group, so sort first to put the best row on top (in OpenRefine, make the sort permanent with Reorder rows permanently). Clean whitespace and case before comparing.",
      "**Fuzzy matching** catches near duplicates (`Fatima Haddad` / `Fatima Hadad`) with a similarity score and a threshold. Too low a threshold merges different things; too high misses real matches. Review the borderline cases and confirm with other fields.",
      "Tools for each step: COUNTIF helper columns or OpenRefine’s Duplicates facet to **find**; sorting to choose which row **survives**; the remove commands to **delete**; and a separate sheet or OpenRefine’s star flags to **keep evidence** of what was removed.",
      "Counting check: if a duplicates flag marks 14 rows made up of 5 distinct keys, removing duplicates should remove 14 − 5 = 9 rows. Compare that with the number the app reports.",
      "Merging duplicate records is more than deleting: the kept row may need details from the removed one (a newer phone number, a missing email). Decide which value wins for each column, and keep the removed rows in a separate sheet or file so the decision can be checked."
     ],
     pro:[
      "App behaviour differs in details that change results. Microsoft states Excel’s Remove Duplicates compares displayed values, not stored ones (the same date in two formats counts as different). Google states Sheets treats values differing only in case, formatting or formulas as duplicates. LibreOffice’s Data → Duplicates… (25.2+) compares values exactly, and its Standard Filter “No duplications” was case-sensitive in our tests (LibreOffice 24.2). Excel’s Remove Duplicates ignores capitals. OpenRefine’s Remove duplicate rows compares the chosen columns’ values exactly and only within rows matching current facets.",
      "Similarity measures: Levenshtein distance (edits), normalised versions dividing by length, and ratio scores such as Python’s `difflib.SequenceMatcher` (0–1). With a 0.8 cutoff, `ashby vail` scores 0.9 against `ashby vale` and 0.8 against `ashby dale`: both pass, so a rule picking the top score would usually but not always be right.",
      "For people, combine evidence: exact match on a strong identifier (email, ID), or fuzzy names plus agreement on other fields (birth year, postcode). This is record linkage; errors are false matches (merging different people, often the worse error) and missed matches (counting someone twice). Where records are about people, merging mistakes can have real consequences, so document the rule and keep removed rows.",
      "Keep a stable unique ID per record so duplicates can be detected and decisions traced.",
      "Normalise before comparing: trim, fold case, and standardise punctuation and accents (OpenRefine’s fingerprint does this), but compare on the normalised copy and keep the original spelling in the data."
     ]},
    related:["data-cleaning","facets-clustering","cleaning-log","countif-sumif","lookup-functions"],
    sources:[{t:"Microsoft Support: Filter for unique values or remove duplicate values", url:"https://support.microsoft.com/en-us/office/filter-for-unique-values-or-remove-duplicate-values-ccf664b0-81d6-449b-bbe1-8daaec1e83c2"},{t:"Google Docs Editors Help: Split text, remove duplicates, or trim whitespace", url:"https://support.google.com/docs/answer/6325535"},{t:"Python documentation: difflib", url:"https://docs.python.org/3/library/difflib.html"}], checked:"2026-11"},

   {id:"cleaning-log", title:"Cleaning logs and operation histories", aka:["cleaning log","data cleaning record","operation history","Extract","Apply","JSON recipe","project archive"], tags:["cleaning","reproducibility","OpenRefine"],
    summary:"Record what you did (an operation history or script) and why (a log of decisions), next to the untouched raw data, so cleaning can be checked and repeated.",
    levels:{
     starter:[
      "A cleaning log is a short record of every change you made to a dataset and why. It turns “I tidied it up” into steps someone else can check.",
      "Write down: the file you started with and how many rows it had, each step (what rule, how many cells or rows changed), each judgement call and its reason, and the file you ended with.",
      "OpenRefine keeps an automatic list of steps in its **Undo / Redo** tab. That records **what** you did. Only you can record **why**.",
      {key:"Raw file + steps + reasons = cleaning anyone can repeat."},
      "Keep the log next to the data: a text file in the same folder, or a sheet in the same workbook. Write it as you go. Afterwards, from memory, the judgement calls are the first things you forget, and they are the most important."
     ],
     builder:[
      "In OpenRefine, **Undo / Redo → Extract…** turns ticked steps into JSON text; save it in a plain text file. On a new file with the same column names, **Apply…** the JSON and click **Run operations** (“Perform operations” in older versions).",
      "Limits: single-cell edits can’t be extracted; cluster merges repeat only the specific values they saw; going back in history and then doing something new erases the later steps.",
      "**Export → OpenRefine project archive to file** saves a `.openrefine.tar.gz` with the data and full history; **Import project** opens it elsewhere. It contains the raw data too, so don’t share it if cleaning removed personal details.",
      {table:[["Log field","Example"],["Files in/out","raw_2026-10.csv (180 rows) → clean (171)"],["Tool and version","OpenRefine 3.10.0, steps in clean_steps.json"],["Step + rule + count","Trimmed all text columns (9 cells)"],["Decision + reason","Kerrow North kept separate: different place"],["Checks","2 towns; total hours unchanged"]]},
      "Apply operations only to files with the same column names; a step that refers to a missing column fails or does nothing. Afterwards, look at the facets again: new data often brings new variants that last month’s recipe doesn’t cover. Add the new steps to both the JSON and the log.",
      "Name files so their role is obvious: `…_raw`, `…_clean`, `…_removed`, `clean_steps.json`, `cleaning_log.txt`, with dates in [[iso-date|ISO order]] (2026-10) so they sort correctly."
     ],
     pro:[
      "Each extracted operation records its type (for example `core/text-transform` or `core/mass-edit`), column, expression with language prefix (`grel:…`), on-error behaviour and the engine configuration, including active facets. Applying it with a facet configuration that no longer matches the new data can change a different set of rows than you expect, so review the JSON, not just the step titles.",
      "The JSON is not a full script: it can’t express “check the paper form” or “ask the office”. That’s why the log of decisions remains essential. For fully automated pipelines, the manual lists third-party tools that run OpenRefine operation files from the command line, and many teams move to R or Python scripts under version control ({{why-version-control}}).",
      "Spreadsheets have version history ({{version-history}}) but no reusable recipe; there, a log plus helper-column formulas (kept, not pasted over) does the same job. Keep the raw file read-only and store log, recipe and outputs together, ideally alongside a [[data-dictionary|data dictionary]] (Unit 2 of this track).",
      "A log is also part of honest reporting: when results are published, the number of records excluded and why (duplicates, impossible values, missing data) should be stated, and the log is where those numbers come from.",
      "Teams that clean shared data often review each other’s logs, just as they would review code: a second reader spots merges that look wrong and rules that are too broad, before the data is used."
     ]},
    related:["data-cleaning","openrefine-basics","grel-transformations","why-version-control","version-history"],
    read:[{book:"dcss", where:"OpenRefine for Social Science Data → “Using scripts” and “Exporting and Saving Data from OpenRefine”"}],
    sources:[{t:"OpenRefine manual: Running OpenRefine (History, reusing operations)", url:"https://openrefine.org/docs/manual/running"},{t:"OpenRefine manual: Exporting your work", url:"https://openrefine.org/docs/manual/exporting"}], checked:"2026-11"}
  ],
  terms:[
   {id:"data-cleaning-term", term:"Data cleaning", def:"Finding and fixing inconsistencies in data, such as stray spaces, different spellings, wrong types and duplicates, so that things which mean the same are written the same way.", codex:"data-cleaning"},
   {id:"openrefine", term:"OpenRefine", def:"A free, open-source tool for exploring and cleaning tables. It runs on your own computer and is used through a web browser.", codex:"openrefine-basics"},
   {id:"facet", term:"Facet", def:"In OpenRefine, a panel that lists the values in a column with their counts and lets you select the matching rows.", codex:"facets-clustering"},
   {id:"clustering-text", term:"Clustering (of text values)", def:"Finding groups of different values that might be different ways of writing the same thing, such as “port ellis” and “Port Ellis”, for a person to approve or reject.", codex:"facets-clustering"},
   {id:"grel", term:"GREL", def:"General Refine Expression Language: OpenRefine’s short expressions, such as `value.trim()`, for transforming every cell in a column.", codex:"grel-transformations"},
   {id:"whitespace-trim", term:"Whitespace / trimming", def:"Whitespace is spaces, tabs and line breaks. Trimming removes it from the start and end of a value (and, with spreadsheet TRIM, squeezes repeated spaces to one).", codex:"data-cleaning"},
   {id:"duplicate-record", term:"Duplicate record", def:"Two or more rows that describe the same real thing, such as one person who signed up twice, even if some details differ.", codex:"deduplication"},
   {id:"fuzzy-matching", term:"Fuzzy matching", def:"Matching values that are similar rather than identical, using a similarity score and a threshold; the results need human checking.", codex:"deduplication"},
   {id:"cleaning-script", term:"Cleaning log / script", def:"A record of every cleaning step: as a list of reasons and counts (a log), or as steps a program can replay, such as OpenRefine’s operation JSON (a script).", codex:"cleaning-log"},
   {id:"encoding-mojibake", term:"Mojibake", def:"Garbled text, such as “cafÃ©” for “café”, caused by reading text with a different encoding from the one it was saved in. Fix it by re-importing with the right encoding.", codex:"data-cleaning"},
   {id:"non-breaking-space", term:"Non-breaking space", def:"A space character (code 160) that stops a line break between two words. It looks like a normal space, but Excel’s and LibreOffice’s TRIM and Google Sheets’ Trim whitespace command don’t remove it.", codex:"data-cleaning"},
   {id:"helper-column", term:"Helper column", def:"An extra column with a formula that shows a cleaned or calculated version of another column, leaving the original unchanged."},
   {id:"delimiter", term:"Delimiter", def:"The character that separates parts of a text, such as the comma in “Kerrow, Mon” or in a CSV file."},
   {id:"localhost", term:"localhost (127.0.0.1)", def:"The address that always means “this computer”. Programs like OpenRefine run a small server you reach at localhost in your browser.", codex:"openrefine-basics"},
   {id:"edit-distance", term:"Edit distance (Levenshtein)", def:"The smallest number of single-character insertions, deletions or substitutions needed to turn one text into another. “Kerow” to “Kerrow” is 1.", codex:"facets-clustering"},
   {id:"regular-expression", term:"Regular expression", def:"A pattern that describes text, such as `[^0-9]` for “any character that isn’t a digit”, used for powerful find and replace.", codex:"grel-transformations"}
  ],

  bank:[
   /* Lesson 1 */
   {id:"t3u3-q01", lesson:"t3u3-l1", level:1, q:"Why does a computer count “Kerrow” and “Kerrow ” (with a space at the end) as two different values?", options:[
     {t:"It compares characters exactly, and the space is a character", ok:true, why:"Right. To a computer a value is a sequence of characters; an extra space makes a different sequence."},
     {t:"Because the second one is stored as a number", why:"Neither is a number; both are text that differ by one space."},
     {t:"Because of the cell’s formatting", why:"Formatting changes how a value looks, not which characters it contains."},
     {t:"It doesn’t: computers ignore spaces at the end", why:"They don’t. That’s why trimming is one of the first cleaning steps."}]},
   {id:"t3u3-q02", lesson:"t3u3-l1", level:2, q:"Amara’s volunteer counts show 41 for “Port Ellis”, plus 6 for “port ellis”, 3 for “Port Ellis ” and 4 for “Pt. Ellis”. After cleaning, how many volunteers does Port Ellis have (assuming all are the same town)?", options:[
     {t:"54", ok:true, why:"Right: 41 + 6 + 3 + 4 = 54. The variants were always the same people; cleaning only writes the town one way."},
     {t:"41", why:"That’s only the rows already spelled the agreed way; it leaves out 13 people."},
     {t:"4", why:"That’s the number of spellings, not the number of volunteers."},
     {t:"50", why:"Recheck the sum: 41 + 6 + 3 + 4 = 54."}]},
   {id:"t3u3-q03", lesson:"t3u3-l1", level:1, q:"Which of these is an example of a number stored as text?", options:[
     {t:"A cell containing `4 hrs`", ok:true, why:"Right. The letters make the whole cell text, so SUM and AVERAGE skip it."},
     {t:"A cell containing 4, formatted to show two decimals", why:"Formatting doesn’t change the type; 4.00 is still the number 4."},
     {t:"A cell containing the formula `=2+2`", why:"The formula produces the number 4."},
     {t:"An empty cell", why:"An empty cell holds nothing, not text."}]},
   {id:"t3u3-q04", lesson:"t3u3-l1", level:3, q:"Kenji finds an age of 214 in a survey of adults and has no paper forms. What is the most honest treatment?", options:[
     {t:"Set it to missing in the clean copy, keep the raw value, and record why in the log", ok:true, why:"Right. The value is impossible, but the true age can’t be known. Missing plus a note is honest and checkable."},
     {t:"Change it to 21, the most likely intended value", why:"That is a guess presented as data. It might be 41, or 24."},
     {t:"Replace it with the average age", why:"That invents a value and also makes the data look less varied than it is."},
     {t:"Delete the whole row", why:"The other answers in that row may be fine. Deleting loses them and can bias results."}]},
   {id:"t3u3-q05", lesson:"t3u3-l1", level:2, q:"A file shows `SÃ£o TomÃ©` instead of `São Tomé`. What most likely happened?", options:[
     {t:"UTF-8 text was opened as if it were another encoding, such as Windows-1252", ok:true, why:"Right. That Ã-pattern is classic mojibake. Re-importing as UTF-8 fixes it."},
     {t:"Someone typed the name wrongly", why:"Typos don’t produce this regular Ã pattern on every accented letter."},
     {t:"The file is damaged beyond repair", why:"The bytes are usually fine; only the way they were read is wrong."},
     {t:"The spreadsheet removed the accents", why:"The accents aren’t removed; they’re shown as two wrong characters each."}]},
   {id:"t3u3-q06", lesson:"t3u3-l1", level:1, q:"Why should you keep the raw data file untouched while cleaning?", options:[
     {t:"So you can redo or check the cleaning later if a mistake is found", ok:true, why:"Right. With the raw file and a log, any step can be repeated or corrected."},
     {t:"Because spreadsheets can’t edit raw files", why:"They can; that’s exactly the risk."},
     {t:"Because raw files are always correct", why:"Raw files are often messy. They are kept as evidence, not because they’re right."},
     {t:"To save storage space", why:"Keeping a copy uses more space, not less; it’s worth it."}]},
   {id:"t3u3-q07", lesson:"t3u3-l1", level:2, q:"Why is trimming whitespace usually done before standardising spellings?", options:[
     {t:"Trimming makes many apparent variants identical, leaving fewer real spelling differences to review", ok:true, why:"Right. “Kerrow ” and “Kerrow” look like two values until the space is gone."},
     {t:"Spelling tools only work on numbers", why:"Spelling fixes are about text; this isn’t the reason."},
     {t:"Trimming deletes duplicate rows", why:"Trimming changes values, not rows."},
     {t:"It doesn’t matter which comes first", why:"It does: trimming first reduces the work and the chance of errors in the spelling step."}]},
   {id:"t3u3-q08", lesson:"t3u3-l1", level:3, q:"In a farm survey, Lucía sees both `Kerrow` and `Kerrow North` in the village column. What should she do?", options:[
     {t:"Keep them separate unless someone who knows the area confirms they are the same place", ok:true, why:"Right. They may be two places. Merging them would change the meaning of the data."},
     {t:"Merge them, because they share a word", why:"Sharing a word isn’t evidence of being the same place."},
     {t:"Delete the `Kerrow North` rows as errors", why:"There’s no evidence they’re errors; they may be real interviews from another village."},
     {t:"Merge them only if `Kerrow North` is rare", why:"How common a value is doesn’t tell you what it means."}]},
   {id:"t3u3-q09", lesson:"t3u3-l1", level:2, q:"Which column problem is about structure rather than individual values?", options:[
     {t:"One cell holding both a town and a day, like `Kerrow; Mon`", ok:true, why:"Right. Two facts in one cell is a structure (tidy-data) problem; split it into two columns."},
     {t:"A town typed in capitals", why:"That’s a value problem: the letters need standardising."},
     {t:"A trailing space after a name", why:"That’s a value problem: trimming fixes it."},
     {t:"An impossible age", why:"That’s a value problem: one wrong value."}]},
   /* Lesson 2 */
   {id:"t3u3-q10", lesson:"t3u3-l2", level:1, q:"What does `=TRIM(\"␣␣Port␣␣Ellis␣\")` return (␣ is a space)?", options:[
     {t:"`Port Ellis`", ok:true, why:"Right. TRIM removes spaces at both ends and reduces the double space between the words to one."},
     {t:"`Port␣␣Ellis`", why:"TRIM also squeezes repeated spaces between words down to one."},
     {t:"`PortEllis`", why:"TRIM keeps single spaces between words."},
     {t:"`PORT ELLIS`, in capitals", why:"TRIM doesn’t change letter case; UPPER does."}]},
   {id:"t3u3-q11", lesson:"t3u3-l2", level:2, q:"Text pasted from a web page still has a space at the end after `=TRIM(A2)` in Excel. Which formula should fix it?", options:[
     {t:"`=TRIM(SUBSTITUTE(A2, UNICHAR(160), \" \"))`", ok:true, why:"Right. Web pages often use non-breaking spaces (code 160), which TRIM leaves. Replace them with ordinary spaces, then trim."},
     {t:"`=CLEAN(A2)`", why:"CLEAN removes control characters 0–31, not character 160."},
     {t:"`=UPPER(TRIM(A2))`", why:"UPPER changes case; the non-breaking space would still be there."},
     {t:"`=VALUE(A2)`", why:"VALUE converts number-like text to numbers; it doesn’t remove spaces from words."}]},
   {id:"t3u3-q12", lesson:"t3u3-l2", level:2, q:"What does Excel’s `=PROPER(\"mckenzie\")` return?", options:[
     {t:"`Mckenzie` (only the first letter a capital)", ok:true, why:"Right. PROPER capitalises the first letter (and letters after non-letters) and lowercases the rest, so it can’t know the family writes McKenzie."},
     {t:"`McKenzie`, as the family writes it", why:"PROPER has no knowledge of name conventions; it only capitalises after spaces and other non-letters."},
     {t:"`MCKENZIE`, all capitals", why:"That’s what UPPER would return."},
     {t:"`mckenzie`, unchanged", why:"PROPER does change the first letter to a capital."}]},
   {id:"t3u3-q13", lesson:"t3u3-l2", level:3, q:"Hana replaces every `Rd` with `Road` in her whole sheet, with match case and match entire cell both off. What is the risk?", options:[
     {t:"Words containing “rd”, like Ford or Birdsong, are changed too", ok:true, why:"Right. Replacing inside other words is the classic find-and-replace accident. Limit it to the column, match case, or use a checked helper formula."},
     {t:"Nothing: find and replace only changes whole words", why:"Unless you choose “Match entire cell contents”, it changes the text wherever it appears, including inside words."},
     {t:"It deletes the rows that contain Rd", why:"Replace changes text; it doesn’t delete rows."},
     {t:"It only works on the first match", why:"Replace All changes every match, which is the risk here."}]},
   {id:"t3u3-q14", lesson:"t3u3-l2", level:2, q:"In Google Sheets, `=SPLIT(\"Port Ellis, 4\", \", \")` gives three cells: Port, Ellis and 4. Why?", options:[
     {t:"By default SPLIT treats each character of the delimiter, the comma and the space, as a separate separator", ok:true, why:"Right. Set the third argument to FALSE (`SPLIT(A2, \", \", FALSE)`) or split on the comma only and TRIM."},
     {t:"SPLIT always splits at spaces", why:"It splits at the delimiter you give; the issue is that each character of it counts separately by default."},
     {t:"The value contains a non-breaking space", why:"An ordinary space is enough to cause this with the default settings."},
     {t:"Because 4 is a number", why:"The number has nothing to do with it; the space in “Port Ellis” is what splits."}]},
   {id:"t3u3-q15", lesson:"t3u3-l2", level:1, q:"Why clean in a helper column instead of typing over the original values?", options:[
     {t:"You can compare raw and clean side by side, and the original stays as evidence", ok:true, why:"Right. Mistakes are visible and reversible; paste values only when you’re sure."},
     {t:"Helper columns make the file smaller", why:"They add a column, so the file is slightly larger."},
     {t:"Formulas can’t change other cells, so it’s the only way", why:"There are in-place tools too (Trim whitespace, Find and replace); helper columns are the safer choice, not the only one."},
     {t:"Helper columns are required for sorting", why:"Sorting doesn’t need helper columns."}]},
   {id:"t3u3-q16", lesson:"t3u3-l2", level:2, q:"Cell A2 contains the text `€30`. Which formula gives the number 30?", options:[
     {t:"`=VALUE(SUBSTITUTE(A2, \"€\", \"\"))`", ok:true, why:"Right. Remove the symbol, then VALUE converts the remaining text to a number."},
     {t:"`=TRIM(A2)`", why:"TRIM only removes spaces; the € stays and the result is still text."},
     {t:"`=CLEAN(A2)`", why:"CLEAN removes control characters such as line breaks; the € stays, so the result is still text."},
     {t:"`=PROPER(A2)`", why:"PROPER changes letter case, which doesn’t help here."}]},
   {id:"t3u3-q17", lesson:"t3u3-l2", level:3, q:"Ana’s data comes from a country where the comma is the decimal mark. She plans to remove all commas from an Amount column before converting it to numbers. What happens to `1,5`?", options:[
     {t:"It becomes 15 instead of one and a half", ok:true, why:"Right. Removing a decimal comma multiplies the value by ten (or more). Know the locale convention before changing separators."},
     {t:"It becomes 1.5 automatically", why:"Removing the comma leaves “15”; nothing puts a decimal point back."},
     {t:"It stays 1,5", why:"The plan removes commas, so it changes."},
     {t:"It becomes an error", why:"“15” is a perfectly valid number, which is why the mistake is easy to miss."}]},
   {id:"t3u3-q18", lesson:"t3u3-l2", level:2, q:"Which helper formula flags rows whose email in column C appears more than once in C2:C200?", options:[
     {t:"`=COUNTIF($C$2:$C$200, C2)>1`", ok:true, why:"Right. COUNTIF counts how often this row’s email occurs; more than 1 means a repeat."},
     {t:"`=COUNTIF(C2:C200, C2)=1`", why:"That flags the unique emails, and without $ the range shifts as you fill down."},
     {t:"`=TRIM(C2)>1`", why:"TRIM returns text; comparing it with 1 doesn’t count anything."},
     {t:"`=LEN(C2)>1`", why:"That tests whether the email is longer than one character."}]},
   /* Lesson 3 */
   {id:"t3u3-q19", lesson:"t3u3-l3", level:1, q:"What does `http://127.0.0.1:3333` refer to when OpenRefine is running?", options:[
     {t:"The OpenRefine program running on your own computer, on port 3333", ok:true, why:"Right. 127.0.0.1 (localhost) always means this computer."},
     {t:"OpenRefine’s website", why:"The website is openrefine.org; this address never leaves your machine."},
     {t:"A file on your desktop", why:"It’s a server address, not a file."},
     {t:"Your internet router", why:"Routers have other addresses; 127.0.0.1 is always the computer itself."}]},
   {id:"t3u3-q20", lesson:"t3u3-l3", level:2, q:"Priya wants to use OpenRefine on her Android phone. What is accurate?", options:[
     {t:"There is no phone version; she can learn by reading and use spreadsheet functions on the phone, and run OpenRefine on a computer later", ok:true, why:"Right. OpenRefine needs Windows, macOS or Linux (including ChromeOS’s Linux environment)."},
     {t:"She can install it from the Play Store", why:"There is no official OpenRefine app for phones."},
     {t:"She can open openrefine.org and use it online", why:"The website offers downloads and documentation, not a hosted cleaning tool."},
     {t:"It works on phones if Java is installed", why:"Java isn’t the issue: OpenRefine is a desktop program."}]},
   {id:"t3u3-q21", lesson:"t3u3-l3", level:1, q:"Which download needs Java to be installed separately?", options:[
     {t:"Linux", ok:true, why:"Right. The Windows and Mac downloads include Java; on Linux (and ChromeOS’s Linux) you install Java 11 or later yourself."},
     {t:"Windows", why:"The Windows installer and zip on the download page include Java."},
     {t:"macOS", why:"The Mac .dmg includes Java."},
     {t:"All of them", why:"Only the Linux package needs a separate Java install."}]},
   {id:"t3u3-q22", lesson:"t3u3-l3", level:2, q:"When OpenRefine imports a CSV file, what happens to the original file?", options:[
     {t:"Nothing: OpenRefine works on its own copy in a project", ok:true, why:"Right. Your file stays as it was; you export a new file when you’re done."},
     {t:"It is overwritten each time you save", why:"OpenRefine never writes back to the imported file."},
     {t:"It is moved into the workspace folder", why:"A copy of the data goes into the project; the original stays where it was."},
     {t:"It is deleted after import", why:"OpenRefine doesn’t delete your files."}]},
   {id:"t3u3-q23", lesson:"t3u3-l3", level:3, q:"Fatima has an active text facet including only “Kerrow”. She runs Common transforms → To uppercase on the town column. What changes?", options:[
     {t:"Only the Kerrow rows that match the facet", ok:true, why:"Right. Operations apply to the rows currently selected by facets and filters."},
     {t:"Every row in the project", why:"Facets limit operations to matching rows; remove the facet to change all rows."},
     {t:"Nothing, because facets block editing", why:"Facets select rows; editing still works on the selection."},
     {t:"Only the first row", why:"Transforms apply to all selected rows, not just one."}]},
   {id:"t3u3-q24", lesson:"t3u3-l3", level:1, q:"What does a text facet show?", options:[
     {t:"Each distinct value in the column with the number of rows that have it", ok:true, why:"Right. It’s a summary you can also click to select rows."},
     {t:"The average of the column", why:"Averages aren’t part of a text facet."},
     {t:"Only the first 10 rows", why:"It summarises the whole column (or the current selection)."},
     {t:"A chart of dates", why:"That’s the timeline facet."}]},
   {id:"t3u3-q25", lesson:"t3u3-l3", level:2, q:"The import preview shows `cafÃ©` in a column of café names. Which import option should Tomás change?", options:[
     {t:"Character encoding, to UTF-8", ok:true, why:"Right. The file is UTF-8 being read with another encoding; correcting the encoding fixes every accented letter."},
     {t:"Columns are separated by", why:"The separator affects how columns are split, not how letters are read."},
     {t:"Trim leading & trailing whitespace", why:"Trimming removes spaces; it won’t repair letters."},
     {t:"Attempt to parse cell text into numbers", why:"Number parsing has nothing to do with accented text."}]},
   {id:"t3u3-q26", lesson:"t3u3-l3", level:2, q:"A postcode column should always have 5 characters. Which facet finds the ones that don’t, fastest?", options:[
     {t:"Text length facet", ok:true, why:"Right. It shows how many values have each length, so 4s and 6s stand out."},
     {t:"Timeline facet", why:"That’s for dates."},
     {t:"Duplicates facet", why:"That finds repeated values, not wrong lengths."},
     {t:"Facet by star", why:"That shows rows you starred, not value lengths."}]},
   {id:"t3u3-q27", lesson:"t3u3-l3", level:3, q:"Sione runs To number on 180 cells and the message says 176 were changed. A Numeric facet shows 4 non-numeric cells: `12 `, `n/a`, `1,5` and `seven`. Which statement is right?", options:[
     {t:"Each needs its own decision: trim, treat n/a as missing, check the decimal convention, and replace `seven` with 7 only if that’s clearly meant", ok:true, why:"Right. They fail for different reasons, and some (like `1,5`) depend on the data’s conventions."},
     {t:"Delete the 4 rows so the column is fully numeric", why:"That throws away 4 records over problems that are mostly fixable."},
     {t:"Run To number again until all 180 convert", why:"The contents prevent conversion; repeating it changes nothing."},
     {t:"Set all 4 to 0", why:"0 is a real value; it would distort totals and averages."}]},
   /* Lesson 4 */
   {id:"t3u3-q28", lesson:"t3u3-l4", level:1, q:"In OpenRefine, what does clustering do?", options:[
     {t:"Suggests groups of different values that might mean the same thing, for you to approve", ok:true, why:"Right. It changes only the clusters you tick."},
     {t:"Automatically merges all similar values", why:"Nothing is merged until you tick Merge? and confirm."},
     {t:"Groups rows into charts", why:"Clustering works on text values, not charts."},
     {t:"Deletes duplicate rows", why:"Removing rows is a different command."}]},
   {id:"t3u3-q29", lesson:"t3u3-l4", level:2, q:"What is the fingerprint key of `␣Fernández, Lucía`?", options:[
     {t:"`fernandez lucia`", ok:true, why:"Right: trim, lowercase, remove the comma, remove accents, then sort the words (already in order here)."},
     {t:"`Fernández, Lucía`", why:"The key is simplified: lowercase, no punctuation, no accents."},
     {t:"`lucía fernández`", why:"Accents are removed, and the sorted order is fernandez before lucia."},
     {t:"`fernandezlucia`", why:"The words stay separated by a space; only punctuation is removed."}]},
   {id:"t3u3-q30", lesson:"t3u3-l4", level:2, q:"Why does fingerprint clustering not group `Port-Ellis` with `Port Ellis`?", options:[
     {t:"Removing the hyphen joins the words into `portellis`, which differs from `ellis port`", ok:true, why:"Right. Punctuation is removed without adding a space, so the keys differ. n-Gram fingerprint or a manual edit will catch it."},
     {t:"Fingerprint is case-sensitive", why:"Fingerprint lowercases everything first."},
     {t:"Fingerprint ignores hyphens and spaces both", why:"It keeps spaces as word separators; that’s why the keys differ."},
     {t:"The values are too short to cluster", why:"Length isn’t the issue; the keys are simply different."}]},
   {id:"t3u3-q31", lesson:"t3u3-l4", level:1, q:"What is the Levenshtein distance between `Kerow` and `Kerrow`?", options:[
     {t:"1", ok:true, why:"Right. One insertion (an r) turns Kerow into Kerrow."},
     {t:"0", why:"0 would mean identical; they differ by a letter."},
     {t:"2", why:"Only one character needs to be added."},
     {t:"6", why:"That’s the length of Kerrow, not the number of edits."}]},
   {id:"t3u3-q32", lesson:"t3u3-l4", level:3, q:"Nearest-neighbour clustering with radius 1 suggests merging `Ana Silva` and `Ana Silvia`. What should Mei do?", options:[
     {t:"Check other details (email, birth year) before deciding; they may be two people", ok:true, why:"Right. A small edit distance shows similar characters, not the same person."},
     {t:"Merge, because distance 1 proves they’re the same", why:"Edit distance can’t prove identity; plenty of different names are one letter apart."},
     {t:"Increase the radius to find more merges", why:"That finds more candidates, including more wrong ones; it doesn’t answer this question."},
     {t:"Merge into whichever spelling is shorter", why:"Length isn’t evidence."}]},
   {id:"t3u3-q33", lesson:"t3u3-l4", level:2, q:"In GREL, what does `\"  PORT ELLIS\".trim().toTitlecase()` return?", options:[
     {t:"`Port Ellis`", ok:true, why:"Right. trim removes the leading spaces, then toTitlecase capitalises each word’s first letter and lowercases the rest."},
     {t:"`␣␣Port Ellis`, spaces kept", why:"trim runs first and removes the leading spaces."},
     {t:"`PORT ELLIS`, unchanged", why:"toTitlecase lowercases letters after the first of each word."},
     {t:"`Port ellis` (only the first word capitalised)", why:"toTitlecase capitalises every word, not just the first."}]},
   {id:"t3u3-q34", lesson:"t3u3-l4", level:2, q:"Which GREL expression keeps only the digits of a phone number?", options:[
     {t:"`value.replace(/[^0-9]/, \"\")`", ok:true, why:"Right. The regular expression matches any non-digit, and each match is replaced with nothing."},
     {t:"`value.replace(\"0-9\", \"\")`", why:"Without slashes it’s plain text: it would remove only the exact text “0-9”."},
     {t:"`value.trim()`", why:"trim removes whitespace at the ends only."},
     {t:"`value.toNumber()`", why:"Brackets, spaces and dashes make it fail, and a number would also lose a leading zero."}]},
   {id:"t3u3-q35", lesson:"t3u3-l4", level:1, q:"In a GREL transform, what does `value` stand for?", options:[
     {t:"The current cell’s value, for each row in turn", ok:true, why:"Right. The expression runs once per selected cell, with value set to that cell’s contents."},
     {t:"The column’s name", why:"The column name is available another way; value is the cell’s contents."},
     {t:"The number of rows", why:"value refers to one cell, not a count."},
     {t:"The value of the first row only", why:"It changes for every row the transform visits."}]},
   {id:"t3u3-q36", lesson:"t3u3-l4", level:3, q:"Kenji’s column has `St. Ann’s` and `Saint Ann’s`. No clustering method groups them. What’s the best approach?", options:[
     {t:"Agree the preferred form and replace it explicitly (for example with `value.replace(\"St. \", \"Saint \")`), then log it", ok:true, why:"Right. Abbreviations differ by too many characters for clustering; a written rule is clear and repeatable."},
     {t:"Raise the radius until they cluster", why:"A radius large enough would also merge many unrelated values."},
     {t:"Use PPM, which will find everything", why:"PPM is very lax and produces many false matches; a rule is better here."},
     {t:"Leave both, since clustering found nothing", why:"They mean the same thing, so counts would split. A rule fixes it safely."}]},
   /* Lesson 5 */
   {id:"t3u3-q37", lesson:"t3u3-l5", level:1, q:"What is a duplicate record?", options:[
     {t:"Two or more rows describing the same real thing, even if some details differ", ok:true, why:"Right. Fatima on paper and online is one person in two rows."},
     {t:"Any two rows with the same value in some column", why:"Two shifts by the same volunteer share a name but are different records."},
     {t:"A row with a blank cell", why:"That’s missing data, not duplication."},
     {t:"A copy of the whole file", why:"That’s a backup."}]},
   {id:"t3u3-q38", lesson:"t3u3-l5", level:2, q:"A sheet of 300 rows has 20 rows whose member ID appears more than once, covering 8 IDs. After removing duplicates by ID, keeping one row per ID, how many rows remain?", options:[
     {t:"288", ok:true, why:"Right. 20 − 8 = 12 extra copies removed; 300 − 12 = 288."},
     {t:"280", why:"That removes all 20 flagged rows, losing those 8 members entirely."},
     {t:"292", why:"That subtracts the 8 IDs instead of the 12 extra copies."},
     {t:"300", why:"Removing duplicates does remove rows: the 12 extra copies."}]},
   {id:"t3u3-q39", lesson:"t3u3-l5", level:2, q:"Remove Duplicates keeps the first row of each group. How can you make sure it keeps the most recent sign-up?", options:[
     {t:"Sort by sign-up date, newest first, before removing", ok:true, why:"Right. Then the newest row of each group is first and survives. In OpenRefine, make the sort permanent first (Reorder rows permanently)."},
     {t:"Remove duplicates twice", why:"The second run finds nothing to remove; the first run already decided which row stayed."},
     {t:"Format the date column as a date", why:"Formatting doesn’t change which row comes first."},
     {t:"There is no way to control it", why:"Row order controls it, so sorting first does."}]},
   {id:"t3u3-q40", lesson:"t3u3-l5", level:3, q:"Priya fuzzy-matches typed town names to an official list. Lowering the similarity cutoff from 0.9 to 0.6 will most likely…", options:[
     {t:"find more real matches but also more wrong ones", ok:true, why:"Right. A lower threshold accepts less similar pairs, so it catches more typos and more unrelated names."},
     {t:"find fewer matches overall", why:"A lower cutoff lets more pairs through, not fewer."},
     {t:"make every match correct", why:"No threshold guarantees correct matches; review is still needed."},
     {t:"have no effect", why:"The cutoff decides which pairs count as matches; changing it changes the results."}]},
   {id:"t3u3-q41", lesson:"t3u3-l5", level:1, q:"In OpenRefine, how do you save your cleaning steps to reuse on another file?", options:[
     {t:"Undo / Redo → Extract…, tick the steps, and save the JSON", ok:true, why:"Right. Later, Apply… pastes that JSON into another project and Run operations replays it."},
     {t:"Export → Comma-separated value", why:"That exports the data, not the steps."},
     {t:"Copy the text facet", why:"Facets are views; they aren’t a record of changes."},
     {t:"Take a screenshot of the grid", why:"A picture can’t be replayed."}]},
   {id:"t3u3-q42", lesson:"t3u3-l5", level:2, q:"Which kind of change can’t be extracted from OpenRefine’s history and replayed?", options:[
     {t:"An edit to a single cell", ok:true, why:"Right. The manual notes single-cell edits can’t be replicated; use a transform or a facet edit if you want it repeatable."},
     {t:"A Trim leading and trailing whitespace transform", why:"Transforms are recorded with their expression and can be extracted."},
     {t:"A cluster merge", why:"Merges are recorded as mass edits and can be extracted (though they only cover the values they saw)."},
     {t:"Removing duplicate rows", why:"This is a recorded operation that can be extracted."}]},
   {id:"t3u3-q43", lesson:"t3u3-l5", level:3, q:"Dmitri exports a CSV while a facet still includes only one town. What does the file contain?", options:[
     {t:"Only the rows from that town", ok:true, why:"Right. Most exports use the current selection, and OpenRefine doesn’t warn you. Remove all facets first to export everything."},
     {t:"All rows, because exports ignore facets", why:"Most exports follow the facets; only some exporters offer an option to ignore them."},
     {t:"An empty file", why:"The matching rows are exported."},
     {t:"Only the facet’s summary counts", why:"The rows themselves are exported, not the facet summary."}]},
   {id:"t3u3-q44", lesson:"t3u3-l5", level:2, q:"Why might sharing an OpenRefine project archive be a privacy problem even after you removed names?", options:[
     {t:"It contains the full history, back to the original raw data", ok:true, why:"Right. Anyone can undo back to step 0 and see the names. Share a cleaned export and the steps instead."},
     {t:"It uploads the data to OpenRefine’s servers", why:"Exporting saves a file on your computer; nothing is uploaded."},
     {t:"It includes your passwords", why:"Project archives hold data and history, not passwords."},
     {t:"It can’t be opened by anyone else", why:"It can: that’s the point of the archive, and the reason for care."}]},
   {id:"t3u3-q45", lesson:"t3u3-l5", level:2, q:"Which entry belongs in a cleaning log but is not recorded by OpenRefine’s history?", options:[
     {t:"Why Kerrow and Kerrow North were kept separate", ok:true, why:"Right. History records what was done; only you can record the reasons and evidence."},
     {t:"The expression used to trim the town column", why:"The history records each transform with its exact expression."},
     {t:"How many cells a mass edit changed", why:"History entries say how many cells were changed."},
     {t:"The order of the operations", why:"The history is an ordered list of operations."}]}
  ]
});
