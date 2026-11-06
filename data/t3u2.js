/* Track 3 · Unit 2 · Tidy data in spreadsheets */
ICA.addUnit({
  id:"t3u2", track:"t3", n:2, title:"Tidy data in spreadsheets", icon:"🧹",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"Set up spreadsheets that people and programs can both trust: what counts as a variable and an observation, long and wide layouts, consistent entries and names, missing values, data dictionaries, dates that don’t shift, raw data kept raw, validation rules, and CSV files that say exactly what you meant.",
  goals:[
    "Decide what the variables, observations and identifiers are in a real dataset, and lay it out as one or more linked rectangles",
    "Recognise long and wide layouts, say which one suits a task, and reshape between them",
    "Enter data with consistent codes and names, and keep units, notes and formatting out of the values",
    "Record zeros, blanks and missing values so every program reads them the same way, and document each column in a data dictionary",
    "Store dates so they survive different apps, countries and date systems, and protect identifiers from automatic conversion",
    "Keep raw data untouched, enforce the dictionary with validation rules, and export CSV files with the right separator, encoding and precision"
  ],
  read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists: “Introduction”, “Formatting Data Tables in Spreadsheets”, “Metadata”, “Dates as Data”, “Quality Assurance” and “Exporting Data”", note:"The workshop lesson this unit follows. It uses Excel and LibreOffice Calc with real (simplified) interview data from farmers in Mozambique and Tanzania, the SAFI dataset."},
    {book:"wss", where:"Chapter 11, “Advanced Excel Spreadsheets: Statistical and Data Analysis”, Section 11.1 “Understanding Data, Data Validation, and Data Tables”", note:"Background reading on data validation in Excel, with screenshots."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u2-l1", title:"Variables, observations and one rectangle", minutes:55,
   hook:{q:"A researcher summarised 13 audits of real-world spreadsheets. On average, what share of the audited spreadsheets contained errors?", options:["About 8%","About 28%","About 58%","About 88%"], answer:3, reveal:"**About 88%**, in Raymond Panko’s 2008 summary, as reported by Karl Broman and Kara Woo in their paper on organising spreadsheet data. Spreadsheets aren’t bad tools, but they make some mistakes very easy. This unit is about the layout and habits that make mistakes harder, starting with the most basic question: what goes in a row, and what goes in a column?"},
   goals:[
     "Explain Data Carpentry’s tidy-data principles and why they make data machine-readable",
     "Decide what the variables and observations are, even when the answer isn’t obvious",
     "Split data that describes different things into separate tables linked by an identifier",
     "Recognise long and wide layouts and reshape between them",
     "Check that an identifier column really is unique"
   ],
   learn:[
    {h:"Beyond the three rules", body:[
      {lead:"A spreadsheet can be read by people, who use context, colour and position, and by programs, which read only values in cells. Good data organisation serves both."},
      "Track 1 introduced [[tidy-data|tidy data]]: one row per record, one column per variable, one value per cell ({{tidy-data}}). This unit goes deeper, following the Data Carpentry lesson *Data Organization in Spreadsheets for Social Scientists* and the paper “Data Organization in Spreadsheets” by Karl Broman and Kara Woo (*The American Statistician*, 2018). Data Carpentry lists five principles:",
      {ol:[
        "Put all your variables in columns: the things you measure, such as weight or number of household members.",
        "Put each observation in its own row.",
        "Don’t combine several pieces of information in one cell.",
        "Leave the raw data raw: don’t change the original.",
        "Export the cleaned data to a text-based format such as CSV, so anyone can use it."
      ]},
      "Broman and Woo add a point of view worth keeping: spreadsheets are best for **entering and storing** data. Analysis and charts are safer in a separate copy, or in another program, so the original can’t be damaged by accident.",
      "Our running example is invented, but shaped like the interview data Data Carpentry uses: researchers visit farming households and record who lives there, what they own and what they grow.",
      {tip:"The best layout for **typing** data and the best layout for **analysing** it can differ. Data Carpentry’s advice: know both, and convert from one to the other in a repeatable way rather than retyping."}
    ]},
    {h:"What counts as a variable?", body:[
      "A [[variable-column|variable]] is one property you record for every unit you study: a household’s village, its number of members, the material of its walls. The entries in that column are its **values**. Every value in a column should be the same kind of thing, in the same unit.",
      "The trap is a cell that holds a whole sentence of information. Data Carpentry’s example records livestock as `3, (oxen , cows)`: a count and two types squashed together. You can’t average it, filter it or count the cows. Split it into one column per piece of information:",
      {ex:"Before:  hh_id  livestock\n         H07    3, (oxen , cows)\n\nAfter:   hh_id  oxen  cows  goats\n         H07    1     2     0", label:"One cell, three facts → one fact per cell", mono:true},
      "(The 1 and 2 are invented to make the example concrete: the original note never said how many of each there were, which is exactly the problem.)",
      "Two quick tests tell you whether something deserves its own column:",
      {list:[
        "**Would you ever sort, filter, count or average by it?** If yes, it needs its own column. “Village” passes; so does “number of goats”.",
        "**Does it hold more than one fact?** A cell such as `13-A01` (plate 13, well A01) or `45 g` (a number and a unit) holds two. Broman and Woo suggest separate `plate` and `well` columns, and the number on its own with the unit in the column name or the data dictionary."
      ]},
      {key:"If you would ever want to use a piece of information on its own, give it its own column."}
    ]},
    {h:"What counts as an observation?", body:[
      "An [[observation-row|observation]] is one unit you studied, at one time: one household interview, one plot, one blood sample, one shop sale. The question to ask is “**one row = one what?**” and to write the answer down.",
      "Real projects often record things at two levels. A household has one village and one number of members, but it may farm several plots, each with its own crop and area. If you force both into one table, you either repeat household facts on every plot row or spread plots across columns (plot1_crop, plot2_crop …). Broman and Woo’s answer is a **set of rectangles**: one table per kind of observation, linked by an identifier.",
      {fig:'<svg viewBox="0 0 340 318"><defs><marker id="m321" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="20">households: one row = one household</text><rect class="d-panel" x="10" y="30" width="320" height="24" stroke-width="1"/><rect class="d-soft" x="10" y="54" width="320" height="48" stroke-width="1"/><rect class="d-gold" x="10" y="30" width="90" height="72" stroke-width="2"/><path class="d-soft" d="M10,78 L330,78 M210,30 L210,102" stroke-width="1"/><text x="18" y="47">hh_id</text><text x="108" y="47">village</text><text x="218" y="47">members</text><text x="18" y="71">H01</text><text x="108" y="71">Kibo</text><text x="322" y="71" text-anchor="end">7</text><text x="18" y="95">H02</text><text x="108" y="95">Mto</text><text x="322" y="95" text-anchor="end">4</text><path class="d-ink" d="M55,108 C55,140 135,135 135,166" stroke-width="2" fill="none" marker-end="url(#m321)"/><text x="160" y="140">the same ID links them</text><text x="10" y="186">plots: one row = one plot</text><rect class="d-panel" x="10" y="196" width="320" height="24" stroke-width="1"/><rect class="d-soft" x="10" y="220" width="320" height="72" stroke-width="1"/><rect class="d-gold" x="90" y="196" width="80" height="96" stroke-width="2"/><path class="d-soft" d="M10,244 L330,244 M10,268 L330,268 M250,196 L250,292" stroke-width="1"/><text x="18" y="213">plot_id</text><text x="98" y="213">hh_id</text><text x="178" y="213">crop</text><text x="258" y="213">area_ha</text><text x="18" y="237">P1</text><text x="98" y="237">H01</text><text x="178" y="237">maize</text><text x="322" y="237" text-anchor="end">0.5</text><text x="18" y="261">P2</text><text x="98" y="261">H01</text><text x="178" y="261">beans</text><text x="322" y="261" text-anchor="end">0.2</text><text x="18" y="285">P3</text><text x="98" y="285">H02</text><text x="178" y="285">maize</text><text x="322" y="285" text-anchor="end">0.8</text><text class="s" x="10" y="312">hh_id is unique in households, repeated in plots</text></svg>', alt:"Two small tables. The top table, households, has one row per household with columns hh_id, village and members: H01 Kibo 7, H02 Mto 4. The bottom table, plots, has one row per plot with columns plot_id, hh_id, crop and area in hectares: P1 H01 maize 0.5, P2 H01 beans 0.2, P3 H02 maize 0.8. The hh_id column is highlighted in both tables and an arrow joins them, labelled the same ID links them. A note says hh_id is unique in households and repeated in plots.", cap:"Two kinds of observation, two rectangles. Each household fact is written once; each plot fact is written once."},
      "Now nothing is typed twice, and every question has a home: average household size uses the first table; total maize area uses the second; “maize area per village” joins the two by `hh_id` (with a lookup in a spreadsheet, or a join in a database, as Unit 9 shows).",
      {tip:"Keep each rectangle on its own sheet (or in its own file, which Broman and Woo prefer because each exports neatly to one CSV). Add a separate notes sheet if you like: Data Carpentry recommends a tab for notes about cleaning steps."}
    ]},
    {h:"One rectangle per sheet", body:[
      "A computer reads every row of a sheet as one observation, across all its columns. So several layouts that look sensible to people mislead programs:",
      {table:[
        ["Layout","Why it causes trouble","Instead"],
        ["Two tables side by side on one sheet","Row 24 seems to be one observation, but holds two unrelated records","One table per sheet"],
        ["A new tab for each day, site or interviewer","Each tab drifts out of step, and you must combine them before analysis","One table with a Date, Site or Interviewer column"],
        ["The header row repeated every 30 rows","Repeated headers get mixed into the data as if they were records","Freeze the header row instead"],
        ["Two header rows (“week 4” above date, weight, glucose)","Programs expect one row of names; the top row is usually a merged cell","One header row: `date_4`, `weight_4` … or a long layout with a week column"]
      ]},
      "The first three come from Data Carpentry’s list of common spreadsheet errors; the two-header-row problem comes from Broman and Woo, who also note that a sheet should be a **single rectangle** with variable names in the first row. A title, a total or a stray note in a corner breaks the rectangle too."
    ]},
    {h:"Long and wide", body:[
      "The same measurements can be laid out in two shapes. Here are monthly rainfall readings from three weather stations:",
      {ex:"WIDE (one row per station)\nstation  jan_mm  feb_mm  mar_mm\nA        80      62      95\nB        41      30      58\nC        12      9       20\n\nLONG (one row per station per month)\nstation  month  rain_mm\nA        jan    80\nA        feb    62\nA        mar    95\nB        jan    41\n…        …      …   (9 rows in all)", label:"Wide and long: the same nine numbers", mono:true},
      "In [[wide-format|wide format]], each repeated measurement gets its own column. In [[long-format|long format]], the thing that varies (month) becomes a column of its own, and each measurement gets its own row. The long table has stations × months = 3 × 3 = 9 rows.",
      "Which one is tidy? It depends on what one observation is. If an observation is “one station’s reading in one month”, the long table is tidy and month is a variable. If you only ever compare stations, and the months are fixed and few, the wide table is readable and many people store it that way. Data Carpentry’s livestock example (columns for oxen, cows, goats) is wide too, and reasonable for counts that every household is asked about.",
      {table:[
        ["","Long","Wide"],
        ["Good for","Filtering, grouping, pivot tables, charts in most tools, adding new months without new columns","Reading by eye, typing a few fixed measurements, side-by-side comparison"],
        ["Grows by","Adding rows","Adding columns"],
        ["Watch out for","Many repeated labels","Column names that hide a variable (jan_mm holds both a month and a unit)"]
      ]},
      {key:"Store long when in doubt; present wide when people need to read it."}
    ]},
    {h:"Reshaping between them", body:[
      "**Long to wide** is easy in every spreadsheet: a [[pivot-table|pivot table]] with station as rows, month as columns and the sum of rain_mm as values produces the wide table on demand ({{pivot-tables}}). The long data stays untouched underneath.",
      "**Wide to long** takes more work in a spreadsheet:",
      {list:[
        "**By hand (any app, fine for small tables):** make a new sheet with the headers `station`, `month`, `rain_mm`. Copy the station names into the station column once for each month column, stacked under each other; fill the month column (jan for the first block, feb for the second …); then copy each month’s values into rain_mm in the same order. Check a few rows against the wide table.",
        "**Desktop Excel:** Power Query can do it in one step. Select the table, choose **Data → From Table/Range**, select the station column, then **Transform → Unpivot Other Columns**. The new columns are called Attribute and Value by default; rename them and choose **Close & Load**."
      ]},
      "Copying by hand is where mistakes creep in, which is why Broman and Woo advise against rearranging existing data by copy and paste when you can avoid it. In Unit 8 you’ll reshape with one line of R ({{reshaping-data}}), which also leaves a record of exactly what was done.",
      {lab:"fl-sumif", t:"Practise: total one person’s hours from a long table with SUMIF"}
    ]},
    {h:"Identifiers hold it all together", body:[
      "Every table needs a column that names each row uniquely: a [[primary-key-sheet|key column]] such as `hh_id`, `plot_id` or `sample_id`. It lets you restore the original order after sorting, link tables, find duplicates and talk about a record without describing it (“H07 has a typo”).",
      {list:[
        "**Unique** within its table, and never reused, even if a record is deleted.",
        "**Stable:** don’t build it from things that change, such as a surname or a row number.",
        "**Stored as text** when it has leading zeros or letters (`0071`, `H07`), so the app can’t change it.",
        "**Consistent:** Broman and Woo’s warning is about IDs written as `153`, `mouse153` and `mouse-153F` for the same subject."
      ]},
      "To check uniqueness, add a [[helper-column|helper column]] next to the IDs. In row 2, `=COUNTIF($A$2:$A$500, A2)` counts how many times that row’s ID appears in the whole column; fill it down. Any result above 1 is a duplicate. Filter or sort that helper column to find them, then delete the helper column.",
      {ex:"A (hh_id)   B  =COUNTIF($A$2:$A$6, A2)\nH01         1\nH02         2   ← appears twice\nH03         1\nH02         2   ← appears twice\nH05         1", label:"Worked example: finding a duplicate ID", mono:true},
      {lab:"fl-countifcell", t:"Practise: COUNTIF with a criterion taken from a cell"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Tidy means long, always.”** Tidy means each variable has a column and each observation a row. Whether that’s long or wide depends on what an observation is.",
        "**“More tabs make a workbook more organised.”** For data, one table with an extra column is usually better than a tab per day or per site. Tabs are fine for notes, lists and separate kinds of observation.",
        "**“Repeating the household’s village on every plot row is harmless.”** It invites typos (the same household in two villages). Store household facts once and link by ID.",
        "**“Row numbers are good enough as IDs.”** They change whenever you sort or delete. Use a real ID column.",
        "**“A dataset that doesn’t fit one rectangle can’t go in a spreadsheet.”** It may fit a set of rectangles. If it fits none, a spreadsheet may not be the right tool."
      ]}
    ]}
   ],
   try:[
    {id:"t3u2-l1-x1", type:"sort", q:"Kenji is designing a sheet for a community bike-repair café. For each item, does it deserve its own column, or should it be split into several columns?", buckets:["Fine as one column","Split it into several columns"], items:[
      {t:"Visit date", b:0, why:"One fact per row: the date of that repair visit."},
      {t:"“Flat tyre, fixed in 20 min”", b:1, why:"Two facts: the problem (flat tyre) and the time taken (20). Use a `problem` column and a `minutes` column."},
      {t:"“45 kg”", b:1, why:"A number and a unit. Put `45` in the cell and the unit in the column name (`weight_kg`) or in the data dictionary."},
      {t:"Bike type, chosen from city, mountain, cargo or child", b:0, why:"One categorical value per row. A dropdown (Lesson 5) keeps the spelling consistent."},
      {t:"“Ana Souza, 0412 555 019”", b:1, why:"A name and a phone number are two facts. Separate columns, with the phone stored as text."},
      {t:"Number of volunteers on shift", b:0, why:"A single count per visit: a number you could average."}
    ]},
    {id:"t3u2-l1-x2", type:"mcq", q:"A school club records each student’s name, year group and three test scores, plus every lunchtime session each student attended. What is the best structure?", options:[
      {t:"Two tables: students (one row per student, with an ID) and attendance (one row per student per session, using the same ID)", ok:true, why:"Right. Student facts and attendance facts are different kinds of observation. Each table is a rectangle, and the student ID links them without repeating names and year groups on every attendance row."},
      {t:"One table with a column for every session date (session_1, session_2 …) added as the term goes on", why:"That table grows sideways without limit, and “session date” is a variable hidden in the column names. Attendance is easier to count and filter as rows."},
      {t:"A tab for each student, holding their scores and attendance", why:"Dozens of tabs drift apart, and you’d have to combine them all before answering any question about the club. Data Carpentry advises against a tab per unit."},
      {t:"One table with one row per session, listing all attending students’ names in one cell", why:"Many names in one cell breaks “one value per cell”: you can’t count a student’s attendance without splitting the text."}
    ]},
    {id:"t3u2-l1-x3", type:"spot", q:"Here is the top of a sheet Lucía inherited. Tap every feature that stops it being one clean rectangle that a program can read.", ask:"breaks the rectangle", mono:true, parts:[
      "Row 1: ", {t:"Survey 2026 (title in A1)", flag:true, why:"A title above the headers means the first row isn’t variable names. Put titles and notes in a separate sheet or file."}, "\nRow 2: ", {t:"hh_id | village | members", flag:false, why:"One header row with short, unique names: what programs expect."}, "\nRow 3: ", {t:"H01 | Kibo | 7", flag:false, why:"A clean record."}, "\nRow 4: ", {t:"H02 | Mto | 4      Plot table: P1 maize 0.5", flag:true, why:"A second table sitting beside the first. A program reads row 4 as one observation mixing household H02 with plot P1."}, "\nRow 5: ", {t:"H03 | Kibo | 5", flag:false, why:"A clean record."}, "\nRow 6: ", {t:"hh_id | village | members", flag:true, why:"A repeated header row becomes a fake record. Freeze the real header instead."}, "\nRow 7: ", {t:"Total members: 16", flag:true, why:"A total isn’t an observation. Calculate it somewhere else, from the data."}
    ]},
    {id:"t3u2-l1-x4", type:"number", q:"A wide sheet has one row for each of **40** households and a column for each of **4** kinds of livestock (oxen, cows, goats, chickens), plus the `hh_id` column. Amara reshapes it into a long table with the columns `hh_id`, `animal` and `count`. How many data rows (not counting the header) will the long table have?", answer:160, tol:0, unit:"rows", why:"Each household-and-animal combination becomes one row: 40 households × 4 kinds of livestock = **160** rows. The hh_id column doesn’t multiply anything; it’s repeated on each of the 160 rows.", wrongs:[
      {v:40, tol:0, why:"40 is the number of rows in the wide table. In the long table each household needs one row per kind of animal: 40 × 4 = 160."},
      {v:200, tol:0, why:"That multiplies by 5, counting hh_id as if it were a kind of livestock. Only the 4 livestock columns turn into rows: 40 × 4 = 160."},
      {v:44, tol:0, why:"That adds households and animal types. Each household gets a row for each animal: multiply, 40 × 4 = 160."}
    ], hint2:"Count the combinations: every household paired with every kind of animal."},
    {id:"t3u2-l1-x5", type:"match", q:"Match each layout with the best description of it.", pairs:[
      ["station | jan_mm | feb_mm | mar_mm","Wide: months are spread across columns","Each month has its own column, so the month is hidden in the column names."],
      ["station | month | rain_mm","Long: month is a variable with its own column","Each reading has its own row; adding April means adding rows, not columns."],
      ["A pivot table with stations as rows and months as columns","A wide summary built from long data","Pivot tables turn long data into wide summaries without changing the source."],
      ["hh_id | village | members, and separately plot_id | hh_id | crop","Two linked rectangles for two kinds of observation","Households and plots are different units, joined by hh_id."]
    ]},
    {id:"t3u2-l1-x6", type:"mcq", q:"Hana adds a helper column next to her sample IDs with `=COUNTIF($A$2:$A$300, A2)` filled down. Four rows show **2**. What does that tell her?", options:[
      {t:"Some IDs appear twice, so they aren’t unique; she should find out which record each copy belongs to before fixing them", ok:true, why:"Right. A count above 1 means that ID appears more than once. Both copies of a repeated ID show 2, so four rows of 2 means two IDs are each used twice. She should check which sample each row really is before changing anything."},
      {t:"All four rows are second copies of samples entered earlier, so she can safely delete them", why:"COUNTIF shows 2 on **both** copies of a duplicated ID, not just the second. And a duplicate ID may be two different samples given the same label by mistake, so deleting could lose real data."},
      {t:"The formula is wrong: COUNTIF can’t count text", why:"COUNTIF counts text matches perfectly well; that’s what it’s doing here."},
      {t:"Those IDs are stored as numbers instead of text", why:"Storage type affects leading zeros, not how many times an ID appears. A count of 2 means a repeat."}
    ]}
   ],
   apply:{intro:"Practise restructuring and checking a small dataset. Everything works in any of the free spreadsheet apps, including Google Sheets on a phone (typing on a phone is slower, so keep the tables small).", tasks:[
     {t:"Split one messy table into two rectangles", app:{
       all:["Start a new spreadsheet. On a sheet called `messy`, type this table (invented data): `hh_id, village, members, plots` with the rows `H01, Kibo, 7, “P1 maize 0.5ha; P2 beans 0.2ha”` and `H02, Mto, 4, “P3 maize 0.8ha”`.","Decide: what is one observation in each part? (A household; a plot.)","Make a sheet called `households` with the columns hh_id, village, members and one row per household.","Make a sheet called `plots` with the columns plot_id, hh_id, crop, area_ha and one row per plot (three rows). Type numbers without units.","Freeze the header row on both sheets (Excel: **View → Freeze Panes → Freeze Top Row**; Google Sheets: **View → Freeze → 1 row**; LibreOffice: **View → Freeze Cells → Freeze First Row**; Numbers: **Format** sidebar → **Table** → the **Headers & Footer** pop-up menus → **Freeze Header Rows**).","Leave the messy sheet as it is: it’s your raw data."]
     }, write:"What is “one row = one what?” for each of your two sheets?"},
     {t:"Check an ID column for duplicates", app:{
       ms:["On the plots sheet, add a fourth plot with the ID `P2` again (a deliberate duplicate).","In the first empty column, row 2, type `=COUNTIF($A$2:$A$5, A2)` and press [[kbd:Enter]]. Fill it down to row 5.","Both P2 rows show 2. Sort or filter the helper column to see them, fix the second ID (make it P4), then delete the helper column."],
       google:["On the plots sheet, add a fourth plot with the ID `P2` again (a deliberate duplicate).","In the first empty column, row 2, type `=COUNTIF($A$2:$A$5, A2)` and fill it down to row 5 (on a phone, copy the cell and paste it into the cells below).","Both P2 rows show 2. Fix the second ID (make it P4), then delete the helper column."],
       libre:["On the plots sheet, add a fourth plot with the ID `P2` again (a deliberate duplicate).","In the first empty column, row 2, type `=COUNTIF($A$2:$A$5; A2)` and fill it down to row 5. (LibreOffice accepts semicolons between arguments; in some language settings it shows commas.)","Both P2 rows show 2. Fix the second ID (make it P4), then delete the helper column."],
       apple:["In the plots table, add a fourth plot with the ID `P2` again (a deliberate duplicate).","Add a column. In its first body cell type `=COUNTIF($A$2:$A$5,A2)` and press [[kbd:Return]] (Numbers shows the references as coloured tokens). Fill it down by dragging the yellow dot.","Both P2 rows show 2. Fix the second ID (make it P4), then delete the helper column."]
     }},
     {t:"Optional: rebuild a wide summary from long data with a pivot table", app:{
       ms:["Make a long table `station, month, rain_mm` with the nine rows from the lesson.","Click inside it and choose **Insert → PivotTable** → **OK**. Drag **station** to Rows, **month** to Columns and **rain_mm** to Values (Sum).","You now have the wide table, built from the long one. (Months appear in alphabetical order unless you sort them yourself.)"],
       google:["Make a long table `station, month, rain_mm` with the nine rows from the lesson.","Select it and choose **Insert → Pivot table** → **Create**. In the editor, add **station** under Rows, **month** under Columns and **rain_mm** under Values (SUM).","You now have the wide table, built from the long one."],
       libre:["Make a long table `station, month, rain_mm` with the nine rows from the lesson.","Click inside it and choose **Insert → Pivot Table** → **Current selection** → **OK**. Drag **station** to Row Fields, **month** to Column Fields and **rain_mm** to Data Fields (Sum), then **OK**.","You now have the wide table, built from the long one."],
       apple:["Make a long table `station, month, rain_mm` with the nine rows from the lesson.","Select the table and choose **Organize → Create Pivot Table → On New Sheet** (or use the **Organize** sidebar).","In the **Pivot Options** tab, add station to **Rows**, month to **Columns** and rain_mm to **Values** (Sum)."]
     }}
   ], proof:"A workbook with your untouched messy sheet, a households sheet and a plots sheet linked by hh_id, an ID check that found and fixed a duplicate, and (optionally) a pivot table that turns long rainfall data into a wide summary."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets” (sections “Tidy data in spreadsheets”, “Using multiple tables” and “Using multiple tabs”)"},
    {book:"dcss", where:"Background reading: Data Organization in Spreadsheets for Social Scientists → “Introduction” (“Problems with Spreadsheets”)"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u2-l2", title:"Entering data consistently", minutes:50,
   hook:{q:"A column holds four entries: `male`, `Male`, `MALE` and ` male` (with a space in front). What does `=COUNTIF(A1:A4, \"male\")` return in Excel, Google Sheets or LibreOffice Calc?", options:["1","2","3","4"], answer:2, reveal:"**3.** COUNTIF ignores capital letters, so male, Male and MALE all match, but the leading space makes ` male` a different value. Programs such as R and Python are stricter still: to them these are four different categories. A spreadsheet can hide inconsistencies that later tools expose, so this lesson is about entering data the same way every time."},
   goals:[
     "Use one code for each category, one form for each identifier and one style for column names",
     "Choose column names that work in analysis software",
     "Keep units, comments and notes out of the value cells",
     "Replace colour and other formatting that carries meaning with real columns",
     "Avoid invisible characters and stray formatting when pasting text"
   ],
   learn:[
    {h:"The first rule: be consistent", body:[
      {lead:"Broman and Woo call consistency the first rule of data organisation: whatever you do, do it the same way every time."},
      "Consistency is cheap at the moment of typing and expensive to fix later. Their list, with everyday examples:",
      {list:[
        "**Categories:** one code for each. Not `M`, `male` and `Male`, but one of them, always.",
        "**Identifiers:** one form. Not `153`, `mouse153` and `mouse-153F` for the same subject.",
        "**Column names across files:** if the first batch calls it `glucose_10wk`, the second batch shouldn’t call it `gluc_10weeks`.",
        "**Layout across files:** the same columns in the same order, so files can be combined automatically.",
        "**File names:** a pattern such as `serum_batch1_2026-01-30.csv`, `serum_batch2_2026-05-29.csv` ({{file-naming}}).",
        "**Dates:** one format, preferably year-month-day (Lesson 4).",
        "**Notes:** the same phrase for the same situation, not `dead` one day and `Dead` the next."
      ]},
      "The hook showed why “close enough” isn’t enough. Spreadsheet functions such as COUNTIF ignore capitals, and so do the filter lists and pivot tables of Excel and LibreOffice Calc, which can make a messy column look fine. But analysis programs such as R and Python treat `Male` and `male` as different, and every app treats ` male` (with a space) as different.",
      {warn:"Spaces at the start or end of an entry are invisible. In Excel, Google Sheets and LibreOffice Calc, `=TRIM(A2)` gives a cleaned copy. In Excel, TRIM doesn’t remove the **[[non-breaking-space|non-breaking space]]** that web pages often contain (Microsoft’s help says so; LibreOffice’s TRIM doesn’t either): `=TRIM(SUBSTITUTE(A2, CHAR(160), \" \"))` swaps it for an ordinary space first."},
      {lab:"fx-trim", t:"Practise: fix a lookup that fails because of hidden spaces"}
    ]},
    {h:"Column names that travel well", body:[
      "Column names (Data Carpentry calls them field names) are read by people and by programs. Programs are fussy: a space can split one name into two, a symbol can mean something in a programming language, and a name starting with a digit isn’t allowed as a plain name in R or Python.",
      {table:[
        ["Good","Also fine","Avoid"],
        ["`wall_type`","`WallType`","`wall type` (space)"],
        ["`longitude`","`gps_longitude`","`gps:Longitude` (symbol)"],
        ["`informant_01`","`first_informant`","`1st Inf` (starts with a digit)"],
        ["`weight_kg`","`weight` (unit in dictionary)","`Weight (kg)` (brackets, space)"],
        ["`sex`","`sex`","`M/F` (a slash, and it’s values, not a name)"]
      ]},
      "The table is adapted from Data Carpentry’s examples. The guidance behind it:",
      {list:[
        "**Short, but meaningful.** `precmm` is too short to understand in six months; `mean_growth_per_year_in_centimetres` is too long to type.",
        "**No spaces:** use underscores (`wall_type`) or capitals (`WallType`). Broman and Woo suggest picking underscores or hyphens and never mixing them.",
        "**No special characters** other than underscores (and hyphens, if you choose them): avoid `$ @ % # & * ( ) ! /`.",
        "**Don’t start with a number:** `age_18`, not `18years`.",
        "**Units in the name or in the data dictionary:** `weight_kg` tells everyone the unit."
      ]},
      {tip:"Lowercase names with underscores (sometimes called snake_case) are a common choice because R, Python and SQL all handle them without fuss. Whatever style you choose, write it in the data dictionary (Lesson 3) and stick to it."}
    ]},
    {h:"Units, comments and notes have their own place", body:[
      "A value cell should hold just the value. Three common habits break this:",
      {table:[
        ["Habit","Problem","Instead"],
        ["`45 g`","Text, so SUM and AVERAGE skip it","`45` in a column named `weight_g`"],
        ["`0 (below threshold)`","Text, and the note is lost to calculations","`0`, plus a `note` column"],
        ["A comment or note attached to the cell","Most analysis software can’t see cell comments","A `note` column with consistent phrases"]
      ]},
      "The `0 (below threshold)` example comes from Broman and Woo; the point about comments comes from Data Carpentry, which notes that most analysis software can’t see Excel or LibreOffice comments.",
      "**Keep one unit per column.** If measurements arrive in different units (some in pounds, some in kilograms), either convert them on entry, or keep the number in one column and the unit in a `weight_unit` column next to it, and convert later with a formula. Never mix units silently.",
      {ex:"weight  weight_unit  note\n45      g\n0       g            below threshold\n1.2     kg           scale B", label:"Values, units and notes in separate columns", mono:true}
    ]},
    {h:"Formatting is not data", body:[
      "Highlighting a suspicious value in yellow, colouring rows by group or making excluded rows grey feels natural, but colour is invisible to formulas, lost when you save as CSV, and can’t be seen by everyone. Broman and Woo’s advice: add an **[[indicator-column|indicator column]]** instead.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="m322" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="10" y="20">Meaning stored as colour</text><rect class="d-panel" x="10" y="30" width="220" height="24" stroke-width="1"/><text x="18" y="47">hh_id</text><text x="118" y="47">members</text><rect class="d-soft" x="10" y="54" width="220" height="72" stroke-width="1"/><rect class="d-gold" x="10" y="78" width="220" height="24" stroke-width="2"/><path class="d-soft" d="M110,30 L110,126 M10,78 L230,78 M10,102 L230,102" stroke-width="1"/><text x="18" y="71">H01</text><text x="222" y="71" text-anchor="end">7</text><text x="18" y="95">H02</text><text x="222" y="95" text-anchor="end">90</text><text x="18" y="119">H03</text><text x="222" y="119" text-anchor="end">5</text><text class="s" x="240" y="88">yellow =</text><text class="s" x="240" y="103">“check this”</text><path class="d-ink" d="M120,134 L120,166" stroke-width="2" marker-end="url(#m322)"/><text x="132" y="155">make it a column</text><text x="10" y="190">Meaning stored as data</text><rect class="d-panel" x="10" y="200" width="320" height="24" stroke-width="1"/><text x="18" y="217">hh_id</text><text x="118" y="217">members</text><text x="238" y="217">flag</text><rect class="d-soft" x="10" y="224" width="320" height="72" stroke-width="1"/><path class="d-soft" d="M110,200 L110,296 M230,200 L230,296 M10,248 L330,248 M10,272 L330,272" stroke-width="1"/><text x="18" y="241">H01</text><text x="222" y="241" text-anchor="end">7</text><text x="238" y="241">ok</text><text x="18" y="265">H02</text><text x="222" y="265" text-anchor="end">90</text><rect class="d-rose" x="234" y="252" width="90" height="16" rx="3" stroke-width="1.5"/><text x="238" y="265">check</text><text x="18" y="289">H03</text><text x="222" y="289" text-anchor="end">5</text><text x="238" y="289">ok</text></svg>', alt:"Top: a small table of household IDs and member counts in which the row for H02, with 90 members, is shaded yellow, and a note says yellow means check this. An arrow labelled make it a column points down to a second table with an extra column called flag, holding ok, check and ok. The word check is highlighted.", cap:"Colour can be lost or misread; a flag column can be filtered, counted and exported."},
      "Now you can filter the rows to check, count them with COUNTIF, and the information survives export. Colour can still help people, as long as it’s **derived from the data**: conditional formatting that shades every row where `flag` is “check” is fine, because the meaning lives in the column and the colour just displays it.",
      {table:[
        ["Formatting used as data","Column instead"],
        ["Grey rows = exclude from analysis","`exclude` = TRUE / FALSE (and an `exclude_reason`)"],
        ["Blue text = interviewed by Priya","`interviewer` = Priya"],
        ["Bold = estimated, not measured","`estimated` = yes / no"],
        ["Merged cell spanning a group of rows","A `group` column filled in on every row"]
      ]},
      "Merged cells are the formatting habit that does the most damage to data. Broman and Woo point out they also break their “no empty cells” rule: the value belongs to the whole group, but it is stored in only one cell (unmerge, and the other cells are empty)."
    ]},
    {h:"Fill in every row", body:[
      "People typing data often write a value once and leave the cells below empty to mean “same as above”. It reads well, but it isn’t data: a program sees blanks. Worse, Broman and Woo note that once the rows are sorted, there may be no way to recover which value each blank belonged to.",
      {ex:"Typed like this:         Should be:\ndate        sample       date        sample\n2026-03-02  S01          2026-03-02  S01\n            S02          2026-03-02  S02\n            S03          2026-03-02  S03\n2026-03-09  S04          2026-03-09  S04", label:"Blanks that mean “same as above”", mono:true},
      "Fill the value down instead (drag the fill handle, or copy and paste). The same goes for zeros: Data Carpentry stresses that a count of zero should be typed as `0`, because a blank tells the computer “not recorded”, not “none”. Lesson 3 is all about that difference."
    ]},
    {h:"Invisible characters and pasted text", body:[
      "Data Carpentry warns against treating a spreadsheet like a word processor. Text copied from documents, web pages and emails can bring along characters you can’t see, which cause trouble once the data reaches other programs:",
      {list:[
        "**Line breaks inside a cell** (typed with [[kbd:Alt]] + [[kbd:Enter]] in Excel on Windows): in a CSV, a careless program can read one record as two.",
        "**Tabs:** in a tab-separated file, a tab inside a value shifts every column after it.",
        "**Curly quotes and dashes** from word processors (“ ” ‘ ’ –): fine as text, but they don’t match the straight `\"` and `-` you type when searching or filtering, and they can turn into gibberish if a file’s encoding is misread.",
        "**Non-breaking spaces** from web pages: they look like spaces but don’t match them."
      ]},
      "Data Carpentry’s rule of thumb: treat a text cell like a simple web form that can contain only text and spaces. When you paste, paste the **values only**, without formatting:",
      {list:[
        "Excel: **Home → Paste → Paste Values** (in Excel for Microsoft 365 on Windows, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:V]] pastes values when you copy within Excel, and matches the sheet’s formatting when you copy from another app).",
        "Google Sheets: **Edit → Paste special → Values only**, or [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:V]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:V]] on a Mac).",
        "LibreOffice Calc: **Edit → Paste Special → Paste Unformatted Text**.",
        "Numbers: **Edit → Paste and Match Style**."
      ]}
    ]},
    {h:"Spot inconsistencies before they spread", body:[
      "You don’t have to read every row to find odd entries. Three quick checks work in every app:",
      {ol:[
        "**Open a column’s filter list.** The filter shows each distinct value once, so `Kibo`, `kibo` and `Kibo ` (with a space) stand out. (Some apps group entries that differ only in capitals; the trailing space still shows.)",
        "**Sort the column.** Odd values collect at the top or bottom: numbers stored as text, dates mixed with text, typos. Abeysooriya and colleagues recommend sorting gene columns for exactly this reason (Lesson 4).",
        "**Count the categories.** A small pivot table, or COUNTIF next to a list of the allowed values, shows whether the counts add up to the number of rows. If they don’t, something is spelled differently."
      ]},
      "Lesson 5 shows how to stop most of these problems at the door with dropdown lists. Track 3’s Unit 3 shows how to clean data that is already messy, with tools such as [[openrefine|OpenRefine]] that can cluster near-identical spellings ({{data-cleaning}}, {{facets-clustering}}).",
      {lab:"fl-countif", t:"Practise: count entries in a category with COUNTIF"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The computer will know that Male and male are the same.”** Some spreadsheet functions ignore capitals; most analysis programs don’t. Pick one spelling.",
        "**“Spaces in column names are fine; the app shows them.”** The app does; R, Python and SQL make you quote such names every time. Use underscores.",
        "**“A note in the cell keeps the explanation close to the value.”** It turns the value into text that calculations skip. Put notes in their own column.",
        "**“Highlighting is a quick way to record a decision.”** It’s quick to make and easy to lose. Record the decision in a column; let colour display it.",
        "**“Leaving repeated values blank saves typing.”** It saves seconds and can cost the data. Fill every row."
      ]}
    ]}
   ],
   try:[
    {id:"t3u2-l2-x1", type:"mcq", q:"Mei’s Team column contains `Blue`, `blue`, `Blue ` (with a trailing space) and `BLUE`. In Google Sheets, `=COUNTIF(C2:C200, \"Blue\")` gives 47, and she has 50 Blue team rows. What is the most likely cause?", options:[
      {t:"Some entries have extra spaces (or other invisible characters), so they don’t match even though COUNTIF ignores capitals", ok:true, why:"Right. COUNTIF treats Blue, blue and BLUE as the same, so capitals aren’t the problem. A trailing space makes a different value. TRIM the column (or use a dropdown) so every entry is exactly `Blue`."},
      {t:"COUNTIF is case-sensitive, so it missed `blue` and `BLUE`", why:"COUNTIF ignores capitals in Excel, Google Sheets and LibreOffice Calc. The difference must come from something else, such as spaces."},
      {t:"COUNTIF can only count up to 47 cells in a range", why:"There is no such limit; COUNTIF can search millions of cells."},
      {t:"The range C2:C200 is too small", why:"If her 50 rows are inside C2:C200, the range is fine. The mismatch comes from the values, not the range."}
    ]},
    {id:"t3u2-l2-x2", type:"sort", q:"Sione is choosing column names for a volunteer survey that will later be analysed in R. Which names work well, and which should he change?", buckets:["Good name","Change it"], items:[
      {t:"`hours_per_week`", b:0, why:"Lowercase, underscores, meaningful: works everywhere."},
      {t:"`Hours / week`", b:1, why:"Spaces and a slash. In R he’d need backticks around it every time; `hours_per_week` is easier."},
      {t:"`2nd_language`", b:1, why:"Names starting with a digit aren’t allowed as plain names in R or Python. Try `second_language` or `language_2`."},
      {t:"`age_years`", b:0, why:"Meaningful, and the unit is in the name."},
      {t:"`Q7`", b:1, why:"Too short to understand later. If it must match a survey question number, keep it and explain it in the data dictionary, or use `q7_transport_mode`."},
      {t:"`postcode`", b:0, why:"Short and clear. (Store the values as text.)"}
    ]},
    {id:"t3u2-l2-x3", type:"spot", q:"Tomás typed these rows into a food-bank donations sheet. Tap every cell that should be changed so a program can use the data.", ask:"should be changed", mono:true, parts:[
      "Columns: date | donor_id | weight_kg | note\nRow 1: ", {t:"2026-05-04", flag:false, why:"A real date in year-month-day form: fine."}, " | ", {t:"D-017", flag:false, why:"A consistent text ID: fine."}, " | ", {t:"12.5", flag:false, why:"Just the number; the unit is in the header."}, " | mixed tins\nRow 2: ", {t:"(blank: same date as above)", flag:true, why:"A blank meaning “same as above” is read as missing, and is lost if rows are sorted. Fill in 2026-05-04."}, " | ", {t:"D-021", flag:false, why:"Consistent ID: fine."}, " | ", {t:"8 kg", flag:true, why:"The unit makes this text, so SUM skips it. Type 8; the header already says kg."}, " | ", {t:"tins only", flag:false, why:"A note in the note column: fine."}, "\nRow 3: 2026-05-11 | ", {t:"d17", flag:true, why:"The same donor as D-017 written differently. Use exactly `D-017` so counts per donor work."}, " | ", {t:"20 (approx.)", flag:true, why:"A number with a note is text. Type 20, and add “approximate” to the note column (or use an `estimated` column)."}, " | rice"
    ]},
    {id:"t3u2-l2-x4", type:"match", q:"Match each habit with the better way to record the same information.", pairs:[
      ["Rows for excluded samples shaded grey","An `exclude` column (TRUE / FALSE) and an `exclude_reason`","Columns can be filtered and counted, and survive export to CSV; shading doesn’t."],
      ["`0 (below threshold)` in a value cell","`0` in the value cell and “below threshold” in a note column","The value stays a number; the note is kept where people and programs can read it."],
      ["A merged “Site A” cell beside ten rows","A `site` column with “Site A” on each of the ten rows","Every row then carries its own site, and sorting can’t separate rows from their site."],
      ["A cell comment saying “scale B used”","A `scale` column","Most analysis software can’t see cell comments."]
    ]},
    {id:"t3u2-l2-x5", type:"mcq", q:"Ana copies a list of town names from a web page into her sheet. `=XLOOKUP(\"Lagos\", A2:A40, B2:B40)` returns #N/A even though Lagos is clearly in the list. `=TRIM()` around the lookup value doesn’t help. In Excel, what’s the most likely culprit?", options:[
      {t:"A non-breaking space from the web page, which Excel’s TRIM doesn’t remove", ok:true, why:"Right. Microsoft’s help says TRIM removes the ordinary space (character 32) but not the non-breaking space (character 160) common on web pages. `=TRIM(SUBSTITUTE(A2, CHAR(160), \" \"))` in a helper column cleans it; pasting as values only helps next time."},
      {t:"XLOOKUP can’t search text", why:"XLOOKUP looks up text all the time. The town names themselves contain something extra."},
      {t:"Lagos is in a merged cell", why:"Merged cells cause sorting and copying problems, but nothing in the scenario points to them. The data came from a web page, which suggests invisible characters."},
      {t:"The town names are formatted in bold", why:"Formatting doesn’t change a cell’s value, so it can’t stop a match."}
    ]},
    {id:"t3u2-l2-x6", type:"order", q:"Put Priya’s quick consistency check of a new Category column in a sensible order.", items:[
      {t:"Work on a copy of the sheet (or a new tab), not the original", why:"First, protect the raw data so any mistake can be undone."},
      {t:"Open the column’s filter list and read the distinct values", why:"The filter shows each distinct entry once, so variants stand out quickly."},
      {t:"Sort the column to group odd entries at the top or bottom", why:"Sorting brings blanks, numbers and near-duplicates together so you can see them."},
      {t:"Fix the variants to one spelling and note what you changed", why:"Fix, and record the change so others know what happened (and you remember)."},
      {t:"Add a dropdown list so new entries stay consistent", why:"Finally, prevent the problem from coming back (Lesson 5)."}
    ]}
   ],
   apply:{intro:"Practise the habits on a small sheet of your own, such as a reading log, a club’s attendance or household expenses, or use the food-bank example. Google Sheets on a phone works for everything here.", tasks:[
     {t:"Find inconsistent entries with a filter", app:{
       ms:["Type a column called `category` with about 12 entries, deliberately including `Food`, `food`, `Food ` (trailing space) and `Foods`.","Click in the data and choose **Data → Filter**. Open the arrow on the category header and read the list of values.","Note which variants appear separately. (Excel’s filter list treats different capitals as the same value, but the trailing space and the extra letter still show.)"],
       google:["Type a column called `category` with about 12 entries, deliberately including `Food`, `food`, `Food ` (trailing space) and `Foods`.","Select the data and choose **Data → Create a filter** (on a phone: tap the column, then the three-dot menu → **Create a filter**). Tap the filter icon on the header and read the list of values.","Note which variants appear separately."],
       libre:["Type a column called `category` with about 12 entries, deliberately including `Food`, `food`, `Food ` (trailing space) and `Foods`.","Click in the data and choose **Data → AutoFilter**. Open the arrow on the category header and read the list of values.","Note which variants appear separately."],
       apple:["Type a column called `category` with about 12 entries, deliberately including `Food`, `food`, `Food ` (trailing space) and `Foods`.","Hover over the column letter, click the arrow and choose **Quick Filter** to see the values listed.","Note which variants appear separately."]
     }, write:"Which variants did the filter list show? Which ones would a program treat as different?"},
     {t:"Replace formatting and notes with columns", app:{
       all:["Shade one or two rows yellow to mean “check this”, and type one value with a unit (`8 kg`) and one with a note (`20 (approx.)`).","Now fix them: add a `flag` column (ok / check) and a `note` column. Remove the shading, and change the values to plain numbers with the notes moved across.","Rename the headers to short names without spaces, such as `weight_kg`, `flag`, `note`.","Optional: add conditional formatting that shades rows where flag is “check” (Excel: **Home → Conditional Formatting**; Google Sheets: **Format → Conditional formatting**; LibreOffice: **Format → Conditional → Condition**; Numbers: **Format** sidebar → **Cell** → **Conditional Highlighting**)."]
     }},
     {t:"Paste text as values only", app:{
       ms:["Copy a sentence with formatting (bold or a link) from a web page or document.","Click a cell and choose **Home → Paste → Paste Values** (the clipboard icon with 123).","Compare with an ordinary paste in another cell."],
       google:["Copy a sentence with formatting (bold or a link) from a web page or document.","Click a cell and choose **Edit → Paste special → Values only** (on a phone: tap the cell, tap **Paste special** → **Paste values only** if your app shows it).","Compare with an ordinary paste in another cell."],
       libre:["Copy a sentence with formatting from a web page or document.","Click a cell and choose **Edit → Paste Special → Paste Unformatted Text**.","Compare with an ordinary paste in another cell."],
       apple:["Copy a sentence with formatting from a web page or document.","Click a cell and choose **Edit → Paste and Match Style**.","Compare with an ordinary paste in another cell."]
     }}
   ], proof:"A small sheet whose category column has one spelling per category, short column names without spaces, flag and note columns instead of colour and in-cell notes, and a note of which variants your filter revealed."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”, section “Common Spreadsheet Errors” (formatting, comments and units, more than one piece of information in a cell, problematic field names, special characters)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u2-l3", title:"Missing values and data dictionaries", minutes:55,
   hook:{q:"Five people’s ages: 34, 41, (not recorded), 29 and 36. The average of the four known ages is 35. Someone fills the gap with the code −999 to mean “missing”, and `=AVERAGE()` includes it. What does the average become?", options:["35","About 28","About −172","An error"], answer:2, reveal:"**About −172** (exactly −171.8). The spreadsheet can’t know that −999 means “missing”, so it averages it like any other number: (34 + 41 − 999 + 29 + 36) ÷ 5. Missing-value codes only work if every program reading the data knows them. This lesson shows which codes are safe, how different programs treat blanks and codes, and how a data dictionary records the decision."},
   goals:[
     "Tell a true zero, an unrecorded value and a value that doesn’t apply apart, and record each correctly",
     "Predict how spreadsheet functions and analysis programs treat blanks, NA, text codes and −999",
     "Choose one missing-value code, knowing where the main guides agree and disagree",
     "Write a data dictionary for a dataset, and a short README for the project"
   ],
   learn:[
    {h:"Zero, blank and missing are different", body:[
      {lead:"A zero is a measurement. A blank is the absence of one. Mixing them up changes your results without any error message."},
      "Data Carpentry’s example: in a region where most farmers keep goats, the cows column is mostly zeros, and it’s tempting to leave those cells empty. But a computer reads an empty cell as a [[missing-value|missing value]]: “we don’t know”. Recording zeros as zeros keeps “none” and “unknown” apart.",
      "Here is what the choice does to a simple average of five households’ cow counts, where household 3 really has none:",
      {ex:"Counts: 2, 1, [household 3], 4, 3\n\nIf household 3 is typed 0:\n  =AVERAGE() = (2 + 1 + 0 + 4 + 3) ÷ 5 = 10 ÷ 5 = 2\n\nIf household 3 is left blank:\n  =AVERAGE() = (2 + 1 + 4 + 3) ÷ 4 = 10 ÷ 4 = 2.5", label:"Worked example: zero or blank?", mono:true},
      "The blank version overstates the average, because the household with no cows quietly drops out. The opposite mistake is just as bad: typing 0 for a value nobody measured pulls the average down. Neither gives an error.",
      {key:"Type 0 only for a real zero. Use your missing-value code only when the value is genuinely unknown."}
    ]},
    {h:"How programs treat blanks and codes", body:[
      "Spreadsheet functions follow consistent rules about blanks and text. Take the ages 34, 41, ?, 29, 36, with the third cell recorded in four different ways (results checked in LibreOffice Calc; Excel and Google Sheets give the same):",
      {fig:'<svg viewBox="0 0 340 262"><rect class="d-sage" x="10" y="10" width="155" height="112" rx="8" stroke-width="2"/><text x="87" y="32" text-anchor="middle">left blank</text><text class="s" x="87" y="52" text-anchor="middle">34, 41, _, 29, 36</text><text class="s" x="87" y="74" text-anchor="middle">AVERAGE skips it</text><text x="87" y="102" text-anchor="middle">35</text><rect class="d-sage" x="175" y="10" width="155" height="112" rx="8" stroke-width="2"/><text x="252" y="32" text-anchor="middle">typed NA</text><text class="s" x="252" y="52" text-anchor="middle">34, 41, NA, 29, 36</text><text class="s" x="252" y="74" text-anchor="middle">text: AVERAGE skips it</text><text x="252" y="102" text-anchor="middle">35</text><rect class="d-gold" x="10" y="132" width="155" height="112" rx="8" stroke-width="2"/><text x="87" y="154" text-anchor="middle">typed 0</text><text class="s" x="87" y="174" text-anchor="middle">34, 41, 0, 29, 36</text><text class="s" x="87" y="196" text-anchor="middle">a real number</text><text x="87" y="224" text-anchor="middle">28</text><rect class="d-rose" x="175" y="132" width="155" height="112" rx="8" stroke-width="2"/><text x="252" y="154" text-anchor="middle">typed −999</text><text class="s" x="252" y="174" text-anchor="middle">34, 41, −999, 29, 36</text><text class="s" x="252" y="196" text-anchor="middle">a real number</text><text x="252" y="224" text-anchor="middle">−171.8</text><text class="s" x="170" y="258" text-anchor="middle">=AVERAGE of the five cells</text></svg>', alt:"Four boxes show the same five ages with the third value recorded differently. Left blank: AVERAGE skips it, result 35. Typed NA: it is text, AVERAGE skips it, result 35. Typed 0: a real number, result 28. Typed minus 999: a real number, result minus 171.8.", cap:"Only blanks and text codes are left out of AVERAGE. A numeric code is averaged like any measurement."},
      {table:[
        ["Third cell holds","COUNT / COUNTA","`=A2+A4` style arithmetic"],
        ["Blank","4 / 4","Treated as 0, no warning"],
        ["`NA` (text)","4 / 5","#VALUE! error"],
        ["`0`","5 / 5","0, as it should"],
        ["`-999`","5 / 5","−999, silently"]
      ]},
      "Two things stand out. A blank is skipped by AVERAGE but counts as 0 in direct arithmetic, so a formula like `=B4-B3` can give a confident wrong answer. And a text code such as NA is at least loud: arithmetic on it fails visibly.",
      "**Outside spreadsheets the rules change.** In R, `mean()` of values that include NA returns NA unless you ask it to remove them (`na.rm = TRUE`), so R makes you decide. R’s `read.csv()` treats `NA` as missing by default, along with empty cells in number columns. Python’s pandas library recognises a longer list, including blank cells, `NA`, `N/A`, `n/a`, `NULL` and `None`. But in a test for this lesson, pandas kept `na` and `-` as text, which turned the whole age column into text.",
      {lab:"fl-count", t:"Practise: COUNT numbers in a column where blank means “not yet”"}
    ]},
    {h:"Choosing a missing-value code", body:[
      "Data Carpentry’s table of common codes (adapted, with its recommendations):",
      {table:[
        ["Code","Problem","Data Carpentry says"],
        ["`0`","Can’t be told apart from a real zero","Never use"],
        ["Blank","Hard to tell missing from overlooked; a space looks blank","Best option"],
        ["`NA`","Can also mean something (Namibia’s country code, North America); makes a number column text in a spreadsheet","Good option (R reads it)"],
        ["`-999`, `999`","Not recognised as missing; ends up in calculations","Avoid"],
        ["`N/A`, `None`, `missing`, `-`, `.`","Uncommon in some tools, or turns numbers into text","Avoid"],
        ["`NULL`","Can cause problems with data types","Good option for SQL"]
      ]},
      "**Where the experts disagree.** Data Carpentry, following White and colleagues’ 2013 paper “Nine simple ways to make it easier to (re)use your data”, prefers blanks. Broman and Woo prefer to fill **every** cell, using [[na-value|NA]] (or a hyphen) for missing data, so a missing value is visibly a decision and not an accident. Both positions are reasonable; both guides insist on the same three things:",
      {ol:[
        "**One code, used consistently** in the whole dataset.",
        "**Never a number** such as 0, −999 or 999.",
        "**Written down** in the data dictionary, so whoever reads the data knows."
      ]},
      {warn:"If you use `NA`, check that it can’t be a real value in any column. A list of countries with ISO codes includes Namibia as `NA`; pandas (and R’s `read.csv`) would read it as missing unless told otherwise."}
    ]},
    {h:"Why a value is missing matters", body:[
      "Missing isn’t one thing. In a survey, a blank income could mean the person refused, didn’t know, wasn’t asked (skipped by design), or the answer sheet was lost. These have different consequences: “not asked because they have no job” is an answer; “refused” is information about the survey (Track 4’s survey unit covers why this matters, {{survey-design}}).",
      "Broman and Woo’s advice: don’t write the explanation **in** the value cell. Keep the value cell for the value (or the missing code) and add a column for the reason:",
      {ex:"hh_id  income  income_missing_reason\nH01    1200\nH02    NA      refused\nH03    NA      not asked (no paid work)\nH04    850", label:"A value column and a reason column", mono:true},
      "Large surveys often use numbered reason codes instead (for example 1 = refused, 2 = don’t know). That’s fine in a **separate** column described in the dictionary; it’s the habit of putting those numbers in the income column itself that causes −999-style accidents."
    ]},
    {h:"The data dictionary", body:[
      "Data Carpentry calls documentation about your data [[metadata]]: “data about data”. You may know your dataset intimately now, but in six months you won’t remember the exact wording of the question behind the `water_use` column, and nobody else ever knew it.",
      "A [[data-dictionary|data dictionary]] describes each column. Broman and Woo suggest making it a rectangle itself, so a program can read it too: one row per variable.",
      {table:[
        ["variable","description","type and unit","allowed values / missing"],
        ["`hh_id`","Household identifier, assigned at first visit","text","H01–H99; never missing"],
        ["`members`","People who slept in the house the night before the interview","whole number","1–30; blank = not asked"],
        ["`wall_type`","Main material of the outer walls (interviewer’s observation)","category","grass, muddaub, burntbricks, sunbricks, cement"],
        ["`interview_date`","Date of the interview","date, YYYY-MM-DD","2026-01-05 to 2026-03-31"]
      ]},
      "Useful columns to include, drawn from Broman and Woo and Data Carpentry: the exact variable name, a readable label for charts, a description (for survey data, the **exact question wording**), the type, the unit, the allowed range or list of categories with their definitions (what counts as “burntbricks”?), and how missing values are recorded.",
      {tip:"Notice how the dictionary feeds everything else: the allowed values become your validation rules (Lesson 5), the units explain the numbers, and the missing-value rule tells R or Python what to treat as NA."}
    ]},
    {h:"Where documentation lives", body:[
      "Data Carpentry recommends keeping metadata **out of the data file itself**: legends, notes and explanations in the data sheet confuse programs. Store it next to the data instead:",
      {list:[
        "**The data dictionary**: a separate sheet in the workbook while you work, and a separate file (such as `households_dictionary.csv`) when you share.",
        "**A [[readme|README]] file**: a plain-text file in the project folder that says who collected the data, when, where and how; what each file contains and how the files relate; which version is current; and any licence or conditions.",
        "**Codebooks and standards**: large surveys publish detailed codebooks (Data Carpentry points to the General Social Survey’s online codebook as an example), and the Data Documentation Initiative (DDI) is a standard for describing social-science data."
      ]},
      {ex:"README.txt\n\nHousehold survey, two villages, January–March 2026.\nCollected by: field team of the community water project.\nFiles:\n  households.csv            one row per household\n  plots.csv                 one row per plot (hh_id links)\n  households_dictionary.csv the columns, units and codes\nMissing values: blank cells (see dictionary).\nDates: YYYY-MM-DD. Encoding: UTF-8.\nVersion: 2026-04-02 (replaces 2026-03-20).", label:"A short README (invented project)", mono:true},
      "This is also where Track 4’s data management plans ({{data-management-plan}}) and Unit 10’s FAIR principles ({{fair-data}}) start: data that is described is data that can be found, trusted and reused."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Blank and zero mean the same.”** A zero is a measurement; a blank says “unknown”. They give different averages.",
        "**“−999 is safe because nobody is −999 years old.”** People know that; programs don’t. It gets averaged.",
        "**“NA is understood everywhere.”** R and pandas read it as missing; a spreadsheet sees text; a country list may contain Namibia (NA).",
        "**“There’s one correct missing code.”** Respected guides disagree (blank or NA). Consistency and documentation matter more than the choice.",
        "**“The column names explain themselves.”** To you, today. A data dictionary explains them to everyone, later."
      ]}
    ]}
   ],
   try:[
    {id:"t3u2-l3-x1", type:"sort", q:"Oluwaseun records bird counts at a garden feeder each morning. For each situation, what should go in the count cell?", buckets:["Type 0","Use the missing-value code"], items:[
      {t:"She watched for the full 15 minutes and no robins came", b:0, why:"She observed, and the count was zero. That’s data."},
      {t:"She was away and nobody watched that morning", b:1, why:"Nothing was observed, so the count is unknown, not zero."},
      {t:"She watched for only 2 minutes before rain stopped her, seeing no sparrows", b:1, why:"A 2-minute watch isn’t comparable to the 15-minute method, so the 15-minute count is unknown. Note the reason in a separate column."},
      {t:"She watched the full time and saw no blue tits, which are rare there", b:0, why:"Rare or not, she looked and counted zero. Leaving it blank would hide a real observation."},
      {t:"The page with Tuesday’s counts got wet and can’t be read", b:1, why:"The count existed but is lost: unknown. Record the reason (“sheet damaged”) in the notes column."}
    ]},
    {id:"t3u2-l3-x2", type:"number", q:"A column of wait times (minutes) holds 12, 8, −999, 15 and 10, where −999 means “not recorded”. What does `=AVERAGE()` of the five cells return?", answer:-190.8, tol:0.05, unit:"minutes", why:"AVERAGE treats −999 as a number: (12 + 8 − 999 + 15 + 10) ÷ 5 = −954 ÷ 5 = **−190.8**. A negative average wait is impossible, which is the clue that a code got into the calculation. Without it, the average of the four real times is 45 ÷ 4 = 11.25.", wrongs:[
      {v:11.25, tol:0.01, why:"11.25 is what you’d get if the −999 were blank or text (45 ÷ 4). But −999 is a number, so AVERAGE includes it."},
      {v:9, tol:0.01, why:"9 treats −999 as 0 (45 ÷ 5). The cell holds −999, not 0, so the total is −954."},
      {v:-238.5, tol:0.05, why:"That divides −954 by 4. AVERAGE counts every number in the range, including −999, so it divides by 5."}
    ], hint2:"Add all five numbers, including −999, then divide by how many numbers there are."},
    {id:"t3u2-l3-x3", type:"match", q:"Each cell is in a range that AVERAGE, COUNT and COUNTA look at. Match what the cell holds with how the functions treat it.", pairs:[
      ["An empty cell","Skipped by AVERAGE, COUNT and COUNTA","Blank cells are ignored by all three (but count as 0 in direct arithmetic such as =A2+A3)."],
      ["The text `NA`","Skipped by AVERAGE and COUNT, counted by COUNTA","Text isn’t a number, so AVERAGE and COUNT leave it out; COUNTA counts anything that isn’t empty."],
      ["The number `0`","Included in all three","Zero is a real number: it lowers an average and is counted."],
      ["The number `-999`","Included in all three, distorting the average","A numeric code looks like any other number to a function."]
    ]},
    {id:"t3u2-l3-x4", type:"mcq", q:"Dmitri shares a CSV of countries with a column `iso2` (two-letter country codes) and uses `NA` for missing values elsewhere. A colleague loads it with pandas and finds Namibia’s code missing. Why?", options:[
      {t:"Namibia’s code is `NA`, which pandas treats as a missing value by default", ok:true, why:"Right. pandas (and R’s read.csv) read the text NA as missing unless told otherwise. The colleague can switch that off for the iso2 column, or Dmitri can choose a different missing code and write it in the dictionary."},
      {t:"pandas can’t read two-letter codes", why:"It reads text of any length. The problem is the specific text `NA`, which is also a common missing-value code."},
      {t:"The CSV was saved in the wrong encoding", why:"Encoding problems garble accented letters; they don’t make a plain two-letter code vanish."},
      {t:"Namibia was deleted when the file was sorted", why:"Sorting moves whole rows; it doesn’t delete values. The row is there with its code read as missing."}
    ]},
    {id:"t3u2-l3-x5", type:"spot", q:"Fatima drafted this data dictionary row for her library’s visitor survey. Tap every part that is missing or unclear enough to cause problems later.", ask:"needs fixing", parts:[
      "Variable: ", {t:"visits", flag:false, why:"A short, clear variable name: fine."}, "\nDescription: ", {t:"How often they come", flag:true, why:"Too vague: per week, per month, in the last year? Use the exact survey question wording, such as “How many times did you visit in the last 30 days?”."}, "\nType: ", {t:"whole number", flag:false, why:"Clear: a count."}, "\nUnit: ", {t:"(left empty)", flag:true, why:"A count of visits over what period? The unit (visits in the last 30 days) is what makes the numbers comparable."}, "\nAllowed values: ", {t:"0–60", flag:false, why:"A sensible range that can become a validation rule."}, "\nMissing: ", {t:"sometimes blank, sometimes 99", flag:true, why:"Two codes, and one is a number that will be averaged as 99 visits. Pick one code (blank or NA) and say so."}
    ]},
    {id:"t3u2-l3-x6", type:"mcq", q:"Kenji and Lucía are setting up a shared survey sheet. Kenji wants missing answers left blank; Lucía wants `NA` typed in every missing cell. Which statement is most accurate?", options:[
      {t:"Either can work; what matters is choosing one, never using a number like −999, and writing the choice in the data dictionary", ok:true, why:"Right. Data Carpentry (and White et al.) prefer blanks; Broman and Woo prefer NA so missing values are visibly intentional. They agree on consistency, no numeric codes and documentation."},
      {t:"Blank is always wrong because programs can’t read empty cells", why:"Most programs read empty cells as missing; Data Carpentry calls blanks the best option. The risk is only that a blank can’t show whether it was intended."},
      {t:"NA is always wrong because spreadsheets treat it as text", why:"It is text in a spreadsheet, but that makes arithmetic fail loudly rather than silently, and R reads it as missing. Broman and Woo recommend it."},
      {t:"They should use −999 so the column stays numeric", why:"Both guides say to avoid numeric codes: they get included in calculations, as the hook showed."}
    ]}
   ],
   apply:{intro:"Run the missing-value experiment yourself, then document a small dataset. Any free app works, including Google Sheets on a phone.", tasks:[
     {t:"See how functions treat blanks and codes", app:{
       all:["In column A type the ages 34, 41, (leave the third cell empty), 29, 36. Copy them to columns B, C and D.","Change the third value: type `NA` in column B, `0` in column C and `-999` in column D.","Under each column, type `=AVERAGE(` the five cells `)`, then `=COUNT(…)` and `=COUNTA(…)` for the same cells.","Compare: the averages should be 35, 35, 28 and −171.8; COUNT gives 4, 4, 5, 5; COUNTA gives 4, 5, 5, 5.","Finally, in a spare cell, add the second and third cells of column A (`=A2+A3` if your ages start in A1), then do the same for column B (`=B2+B3`). One gives a number with no warning; the other gives #VALUE!."]
     }, write:"Which way of recording the missing value would you choose for your own data, and why?"},
     {t:"Write a data dictionary and a README", app:{
       all:["Pick a small dataset: your households and plots sheets from Lesson 1, or a list of your own (books read, plants watered, expenses).","Add a sheet called `dictionary` with the headers `variable`, `description`, `type`, `unit`, `allowed_values`, `missing_code`.","Fill in one row per column of your data. For descriptions, write what a stranger would need: the exact question, what counts, and what doesn’t.","In a plain-text editor (Notepad, TextEdit set to plain text, or a notes app on a phone), write a short README: what the data is, who collected it and when, what each sheet or file holds, the missing-value code, the date format and the version date."]
     }}
   ], proof:"A sheet showing the four averages and counts side by side, and a dictionary sheet plus a README for a small dataset of your own."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”, sections “Not filling in zeros” and “Using problematic null values”"},
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Metadata”"}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u2-l4", title:"Dates as data", minutes:55,
   hook:{q:"Older versions of Excel for Mac counted days from a different starting date than Excel for Windows. If a date is copied from one system to the other as a plain number, with no conversion, how far does it move?", options:["One day","About a month","About four years","About a century"], answer:2, reveal:"**About four years**: exactly 1,462 days, which Microsoft describes as four years and one day. Each workbook uses either the 1900 or the 1904 date system, and the same serial number means different dates in each. Dates are among the most fragile data in a spreadsheet; this lesson shows where they break and three ways to record them safely."},
   goals:[
     "Explain how spreadsheets store dates, and what the 1900 and 1904 date systems are",
     "Predict how a typed or imported date is read in a day-first or month-first locale",
     "Record dates safely as ISO dates, as separate year, month and day columns, or as text, and know the trade-offs",
     "Protect identifiers and codes from being turned into dates, and check a column for damage"
   ],
   learn:[
    {h:"A date is a count of days", body:[
      {lead:"Track 1 showed that a spreadsheet stores a date as a [[date-serial|serial number]]: a count of days from a starting day. Data Carpentry calls this the first thing to know about dates."},
      "Data Carpentry’s example: in Excel, 2 July 2014 is stored as **41822**. Add 90 to it, and you get 41912, which Excel shows as 30 September 2014. Months of different lengths and the change of year are handled for you, because underneath it’s just counting.",
      {ex:"B2   2014-07-02      (stored as 41822)\nC2   =B2+90          → 41912 → 2014-09-30\nD2   =C2+90          → 42002 → 2014-12-29", label:"Worked example: a follow-up interview every 90 days", mono:true},
      "Because the display is only a format ({{cell-data-types}}), the same stored date can appear as 02/07/2014, 7/2/2014, 2-Jul or Wednesday, 2 July 2014. That flexibility is helpful on screen and dangerous when data moves between people, apps and countries, which is the rest of this lesson.",
      {lab:"fl-days", t:"Practise: subtract two dates to get the number of days between them"}
    ]},
    {h:"Day first or month first?", body:[
      "Data Carpentry’s example: type `7/12/88`. Someone in the UK reads 7 December 1988; someone in the US reads 12 July 1988. Your spreadsheet decides using its [[locale]], the regional settings of your computer or file (Google Sheets: **File → Settings → Locale**; LibreOffice Calc: **Tools → Options → Language Settings → Languages → Locale setting**; Numbers: **File → Advanced → Language & Region** for each spreadsheet; Excel follows your computer’s region settings).",
      "The worst case isn’t that every date is wrong. It’s a column that is **half wrong, silently**. Suppose day-first dates are typed into a sheet whose locale reads month first:",
      {table:[
        ["Typed (meant as day/month)","What a month-first sheet stores","Alignment"],
        ["`12/07/2026` (12 July)","7 December 2026: a real date, but the wrong one","Right"],
        ["`13/07/2026` (13 July)","Text: there’s no month 13","Left"],
        ["`01/01/2026` (1 January)","1 January 2026: correct, by luck","Right"],
        ["`2026-07-14`","14 July 2026: correct","Right"]
      ]},
      "Days 13 to 31 stay as text, and days 1 to 12 become different real dates (unless the day and month happen to be the same). Sorting, charts and date arithmetic then mix wrong dates with text, without any error message. The same thing happens when a CSV is opened: the importing app reads dates with its own locale unless you tell it otherwise.",
      {tip:"When importing, say what order the dates are in. LibreOffice’s Text Import dialog lets you set a column’s type to **Date (DMY)**, **Date (MDY)** or **Date (YMD)**. In desktop Excel’s Power Query editor, right-click a column → **Change Type → Using Locale** and pick the date format and the country it came from."}
    ]},
    {h:"Two date systems in Excel", body:[
      "Excel has two [[date-system|date systems]], two ways of counting, and each workbook uses one of them. Microsoft’s help explains:",
      {fig:'<svg viewBox="0 0 340 300"><path class="d-ink" d="M40,30 L40,250" stroke-width="2"/><circle class="d-sage" cx="40" cy="40" r="7" stroke-width="2"/><text x="58" y="38">1899-12-30</text><text class="s" x="58" y="56">day 0 in Google Sheets and LibreOffice</text><circle class="d-lup" cx="40" cy="92" r="7" stroke-width="2"/><text x="58" y="90">1900-01-01</text><text class="s" x="58" y="108">day 1 in Excel’s 1900 system</text><circle class="d-gold" cx="40" cy="144" r="7" stroke-width="2"/><text x="58" y="142">1904-01-01</text><text class="s" x="58" y="160">day 0 in Excel’s 1904 system</text><circle class="d-rose" cx="40" cy="226" r="7" stroke-width="2"/><text x="58" y="210">2026-04-03 is stored as</text><text x="58" y="228">46115 in the 1900 system</text><text x="58" y="246">44653 in the 1904 system</text><text class="s" x="10" y="280">The two serial numbers differ by 1,462 days.</text></svg>', alt:"A vertical timeline. 30 December 1899 is day 0 in Google Sheets and LibreOffice. 1 January 1900 is day 1 in Excel’s 1900 system. 1 January 1904 is day 0 in Excel’s 1904 system. 3 April 2026 is stored as 46115 in the 1900 system and 44653 in the 1904 system. A note says the two serial numbers differ by 1,462 days.", cap:"For modern dates, Excel’s 1900 system, Google Sheets and LibreOffice give the same serial numbers. The 1904 system’s numbers are 1,462 smaller."},
      {list:[
        "**The 1900 system** is the default in Excel for Windows and in Excel for Mac since Excel for Mac 2011. Microsoft says all newer versions use it.",
        "**The 1904 system** was the default in earlier versions of Excel for Mac, so old workbooks may still use it.",
        "**The difference is 1,462 days.** If a serial number from a 1904 workbook is read as a 1900 date, 3 April 2026 (44653) becomes 2 April 2022; the other way round, 46115 becomes 4 April 2030."
      ]},
      "Excel converts dates automatically when you copy them between workbooks with different systems (Microsoft notes a setting that can turn this off, and that dates in copied charts can’t be converted). The risk is in data that travels as plain numbers: serial numbers exported to a CSV, pasted as values, or combined from many files. Data Carpentry warns that such shifts may not be caught by ordinary checks if the date ranges overlap.",
      "Where the settings are: Excel for Windows, **File → Options → Advanced** → “When calculating this workbook” → **Use 1904 date system**. LibreOffice Calc, **Tools → Options → LibreOffice Calc → Calculate** → Date, with day zero 1899-12-30 (the default), 1900-01-01 or 1904-01-01. Google Sheets counts days since 30 December 1899 and has no setting. Numbers stores dates as its own date-and-time type.",
      {warn:"One more quirk: for compatibility with an older program, Excel treats 1900 as a leap year, though it wasn’t. LibreOffice’s help notes that dates before 1 March 1900 are therefore calculated differently in Excel and Calc."}
    ]},
    {h:"Old dates and dates without a year", body:[
      "**Dates before 1900.** Excel’s 1900 system starts on 1 January 1900. Data Carpentry warns that Excel leaves earlier dates untouched, as text, so a historical column that mixes 1890s and 1900s dates ends up half dates, half text. LibreOffice Calc and Google Sheets can store earlier dates (as negative serial numbers, counting back from 30 December 1899), but if the file will ever pass through Excel, record historical dates as separate year, month and day numbers (below). Rebuild them with care: in Excel and Google Sheets, `DATE()` treats a year from 0 to 1899 as a number of years after 1900, so `=DATE(1880, 5, 1)` gives a date in 3780. LibreOffice’s DATE gives 1 May 1880.",
      "**Dates without a year.** Type `17/11` (or `11/17` in a month-first locale) and the app quietly adds the **current year**. Data Carpentry’s exercise makes the point: that’s wrong for historical data, and wrong for last year’s records typed this year.",
      "**Partial dates.** Sometimes you know only the year, or the year and month (“born 1952”, “arrived spring 2019”). A full date with an invented day (1952-01-01) pretends to know more than you do. Separate columns let the day stay blank, with the reason in the dictionary."
    ]},
    {h:"Three safe ways to record dates", body:[
      "Broman and Woo strongly recommend writing dates as [[iso-date|YYYY-MM-DD]], the international [[iso-8601|ISO 8601]] order, and above all writing them consistently. Data Carpentry recommends splitting dates into year, month and day columns. Each approach has a place:",
      {table:[
        ["Method","Strengths","Watch out for"],
        ["A real date, displayed as yyyy-mm-dd","Sorts and subtracts; unambiguous on screen and in CSV exports","The app may display your local format until you set the format; imports can still misread it"],
        ["Separate `year`, `month`, `day` columns","Ordinary numbers that no app or locale changes; partial dates are easy","Rebuild a date with `=DATE(year, month, day)` before calculating"],
        ["Text, such as `'2026-04-03` or the number `20260403`","The app leaves it exactly as typed","No date arithmetic until converted; needs perfect consistency"]
      ]},
      "To split a real date in B2 into parts, use `=YEAR(B2)`, `=MONTH(B2)` and `=DAY(B2)` in three new columns, fill them down, and format the results as plain numbers (otherwise the app may show 2026 as a date in 1905). These functions exist in Excel, Google Sheets, LibreOffice Calc and Numbers. `=DATE(C2, D2, E2)` puts the parts back together.",
      "To **display** real dates as year-month-day:",
      {list:[
        "Excel: select the cells, press [[kbd:Ctrl]] + [[kbd:1]] (Mac: [[kbd:Cmd]] + [[kbd:1]]), choose **Custom** and type `yyyy-mm-dd`.",
        "Google Sheets: **Format → Number → Custom date and time**, and arrange the parts as year, month, day with hyphens.",
        "LibreOffice Calc: **Format → Cells → Numbers**, category **Date**, and choose the 1999-12-31 style (ISO 8601) or type the format code `YYYY-MM-DD`.",
        "Numbers: **Format** sidebar → **Cell** → **Data Format** → **Create Custom Format**, type Date & Time, and build year-month-day."
      ]},
      {warn:"Broman and Woo point out a trap: if you format a column that **already** holds dates as Text, Excel shows their serial numbers (such as 46115) instead. Set a column to Text **before** typing text dates into it."}
    ]},
    {h:"When things that aren’t dates become dates", body:[
      "Track 1 told the story of gene symbols such as SEPT2 and MARCH1 turning into dates ({{cell-data-types}}). The details matter for anyone who handles codes:",
      {list:[
        "In 2021, Mandhri Abeysooriya and colleagues found gene-name errors in **30.9%** of the published articles they checked that had Excel gene lists (3,436 of 11,117, from 2014 to 2020), up from about one-fifth in the 2016 study. They also found dates stored as five-digit serial numbers in place of gene names.",
        "They tested four apps by opening a CSV, pasting and typing. **Excel and Google Sheets converted gene names to dates in all three ways.** LibreOffice Calc (version 6.4) and Gnumeric did not, in their tests. Formatting the cells as text first prevented conversion in Excel and Google Sheets.",
        "It isn’t only genes. Age bands (`1-2`), product codes (`DEC1`, `MAR-3`), room numbers (`4/5`) and scores (`3-1`) can all look like dates."
      ]},
      "**Excel’s Automatic Data Conversion settings.** After years of complaints, Microsoft added options to switch off specific conversions. In July 2022, Windows test users (Microsoft 365 Insiders) got three: removing leading zeros, cutting long numbers to 15 digits, and turning digits around an E into scientific notation. In October 2023 Microsoft announced an improved set for Windows (version 2309 or later) and, for the first time, Mac (version 16.77 or later), including an option to stop “continuous letters and numbers” such as `JAN1` becoming dates. Microsoft lists them for Excel for Microsoft 365 and Excel 2024 (Windows: **File → Options → Data**; Mac: **Excel → Preferences → Edit**). The conversions are still **on by default**, and Microsoft notes the settings don’t directly affect data imported with Power Query.",
      {key:"Protect codes before they enter: set the column to Text, or import with column types. Then check: sort the column, and look for dates or numbers where only codes should be."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“The date looks right, so it is right.”** In a month-first sheet, 12/07 can display as a perfectly normal date that is five months off. Check the alignment and a few values in the formula bar.",
        "**“All spreadsheets count from the same day.”** Excel’s 1904 system is 1,462 days different, and Excel and LibreOffice disagree before March 1900.",
        "**“ISO dates can’t be misread.”** People can’t misread them; an import can still be told the wrong type. Say the date format in the data dictionary.",
        "**“Turning off Automatic Data Conversion protects everyone.”** It protects that copy of Excel. Collaborators, other apps and older versions still convert.",
        "**“A date with no year is still a date.”** The app adds the current year, which may be wrong."
      ]}
    ]}
   ],
   try:[
    {id:"t3u2-l4-x1", type:"mcq", q:"In B2 Amara has the date 2026-03-02, stored as 46083. C2 contains `=B2+30`. What happens?", options:[
      {t:"C2 holds 46113, which shows as 2026-04-01: the app counts the days into the next month", ok:true, why:"Right. Dates are day counts, so adding 30 adds 30 days. March has 31 days, so 2 March + 30 days = 1 April. The app handles month lengths and year changes for you."},
      {t:"C2 shows 2026-03-32, because the day number goes up by 30", why:"There is no 32 March. The app adds days to the serial number, then displays the real date that number stands for: 1 April."},
      {t:"C2 shows #VALUE!, because you can’t add a number to a date", why:"You can: a date is a number underneath, so adding 30 works. #VALUE! would appear if B2 held text that only looked like a date."},
      {t:"C2 adds 30 months, giving a date in 2028", why:"Adding a plain number adds days. Adding months needs a function such as EDATE."}
    ]},
    {id:"t3u2-l4-x2", type:"spot", q:"Kenji types these dates, all meant **day first**, into a sheet whose locale reads dates **month first** (as in the United States). Tap every entry that ends up stored wrongly, either as a different date or as text.", ask:"is stored wrongly", mono:true, parts:[
      "", {t:"12/07/2026", flag:true, why:"Read as month 12, day 7: stored as 7 December, not 12 July. A real date, but the wrong one, and it looks normal."}, "\n", {t:"13/07/2026", flag:true, why:"There’s no month 13, so the sheet keeps it as text: it won’t sort or subtract with the dates."}, "\n", {t:"01/01/2026", flag:false, why:"Day and month are the same, so either reading gives 1 January. Correct, by luck."}, "\n", {t:"2026-07-14", flag:false, why:"Year-month-day has one reading: stored correctly as 14 July."}, "\n", {t:"07/08/2026", flag:true, why:"Meant as 7 August; read month first as 8 July."}, "\n", {t:"25/07/2026", flag:true, why:"No month 25, so it stays as text."}
    ]},
    {id:"t3u2-l4-x3", type:"number", q:"Tomás pastes dates **as plain numbers** from an old workbook that uses the 1904 date system into a workbook that uses the 1900 system. No conversion happens. By how many days does every date move?", answer:1462, tol:0, unit:"days", why:"The two systems differ by **1,462 days** (four years and one day, including one leap day). The same serial number means a date 1,462 days earlier in the 1900 system, so every pasted date appears four years and one day too early.", wrongs:[
      {v:1461, tol:0, why:"Four years of 365.25 days is 1,461, but the serial numbers differ by 1,462, the figure Microsoft gives. The 1900 system numbers 1 January 1900 as day 1, the 1904 system numbers 1 January 1904 as day 0, and Excel also counts a 29 February 1900 that never existed."},
      {v:4, tol:0, why:"That’s the difference in years. The question asks for days: 1,462."},
      {v:1460, tol:0, why:"1,460 is the real number of days from 1 January 1900 to 1 January 1904 (1900 wasn’t a leap year). The serial numbers of the two systems differ by 1,462, because of how each system numbers its first day and Excel’s extra 29 February 1900."}
    ]},
    {id:"t3u2-l4-x4", type:"match", q:"Match each way of recording a date with its main drawback.", pairs:[
      ["A real date shown in your local style (03/04/2026)","Readers and imports in other countries may read day and month the other way round","The stored value is fine, but the displayed and exported text is ambiguous."],
      ["Separate year, month and day columns","You need DATE() to rebuild a date before calculating with it","The parts are safe numbers, but date arithmetic needs them recombined."],
      ["Text typed with an apostrophe ('2026-04-03)","No date arithmetic or date sorting until it’s converted","The app keeps it exactly, because it treats it as text."],
      ["A real date shown as yyyy-mm-dd","An import into another app may still guess its type","It’s unambiguous to people; say the format in the dictionary so programs read it right too."]
    ]},
    {id:"t3u2-l4-x5", type:"mcq", q:"Priya’s lab sends gene lists to collaborators who use Excel, Google Sheets and LibreOffice Calc. According to the 2021 study by Abeysooriya and colleagues, which statement is accurate?", options:[
      {t:"Excel and Google Sheets converted gene names to dates whether the data was opened, pasted or typed; formatting cells as text first prevented it", ok:true, why:"Right. In their tests, Excel and Google Sheets converted in all three modes, LibreOffice 6.4 and Gnumeric didn’t, and text formatting prevented conversion in Excel and Google Sheets."},
      {t:"Only Excel converts gene names; Google Sheets never does", why:"The study found Google Sheets converted them too, in all three ways of entering data."},
      {t:"The problem was solved in 2020 when the genes were renamed, so it no longer matters", why:"Renaming fixed many human symbols (SEPT1 became SEPTIN1), but the study notes that gene names of many other species hadn’t been changed, and other codes can still look like dates."},
      {t:"Turning on bold formatting for the column prevents conversion", why:"Font formatting has no effect on how values are interpreted. Text format (set before entry) does."}
    ]},
    {id:"t3u2-l4-x6", type:"order", q:"Put Hana’s steps for splitting an interview_date column (real dates in column B) into year, month and day columns in a sensible order.", items:[
      {t:"Make a copy of the sheet, so the original dates stay untouched", why:"First, keep the raw data raw."},
      {t:"Check that the dates are real dates: right-aligned, and a number appears if you format one cell as Number", why:"YEAR, MONTH and DAY need real dates; text dates would give errors or wrong results."},
      {t:"Add three columns headed year, month and day", why:"Give each part its own variable, with a clear header."},
      {t:"In row 2 type =YEAR(B2), =MONTH(B2) and =DAY(B2), then fill them down", why:"One formula per part, copied to every row."},
      {t:"Format the three new columns as plain numbers and spot-check a few rows", why:"Otherwise an app may display 2026 as a date; then confirm a couple of rows by eye."}
    ]},
    {id:"t3u2-l4-x7", type:"mcq", q:"Sione is typing up handwritten records from a 1987 community festival. The sheets give dates such as “17 Nov” with no year, so he types `17/11`. What will his spreadsheet store?", options:[
      {t:"17 November of the current year, which is wrong for these records", ok:true, why:"Right. Data Carpentry’s exercise shows that apps fill in the current year when none is typed. He should type the full date (1987-11-17) or put year, month and day in separate columns."},
      {t:"17 November 1987, because the app can tell the records are old", why:"The app has no way to know; it uses the current year."},
      {t:"An error, because a date needs a year", why:"Apps accept day and month alone and quietly add the current year, which is why the mistake is easy to miss."},
      {t:"The text “17/11”, left exactly as typed", why:"Most apps recognise 17/11 as a date in a day-first locale and add a year. (In a month-first locale it might stay as text, which is a different problem.)"}
    ]}
   ],
   apply:{intro:"Look at how your own app handles dates. Google Sheets on a phone works for the first two tasks; the date-system setting is only in desktop Excel and LibreOffice.", tasks:[
     {t:"Find your date settings", app:{
       ms:["Open a blank workbook. Type `7/12/88` in A1 and press [[kbd:Enter]]. Format it as a long date (**Home → Number Format → Long Date**) to see which date Excel chose.","Desktop Excel for Windows: open **File → Options → Advanced** and scroll to **When calculating this workbook**. Check whether **Use 1904 date system** is ticked (it normally isn’t).","Desktop Excel: look at **File → Options → Data → Automatic Data Conversion** (Mac: **Excel → Preferences → Edit**) and read what each option does."],
       google:["Open a blank spreadsheet. Type `7/12/88` in A1. Choose **Format → Number → Custom date and time** and pick a style that writes the month as a word, to see which date Sheets chose.","Open **File → Settings** and look at **Locale**. Changing it changes how dates are read and shown in this spreadsheet.","On a phone: if your Sheets app doesn’t show the locale setting, open the spreadsheet in a computer or tablet browser to see it. The setting belongs to the spreadsheet, so the app uses it too."],
       libre:["Open a new spreadsheet. Type `7/12/88` in A1. Use **Format → Cells → Numbers**, category **Date**, and pick a long style to see which date Calc chose.","Open **Tools → Options → Language Settings → Languages** (on a Mac, **LibreOffice → Preferences**) and look at **Locale setting**.","Open **Tools → Options → LibreOffice Calc → Calculate** and look at the **Date** options: 1899-12-30 is the default."],
       apple:["Open a blank spreadsheet. Type `7/12/88` in a cell. Open the **Format** sidebar → **Cell** → **Data Format** → **Date & Time**, and choose a date style that writes the month as a word.","New spreadsheets follow your Mac’s region settings (**System Settings → General → Language & Region**); one spreadsheet’s own setting is under **File → Advanced → Language & Region**. On an iPhone or iPad, **Settings → General → Language & Region**."]
     }, write:"Which date did 7/12/88 become in your app: 7 December or 12 July?"},
     {t:"Record dates safely, two ways", app:{
       all:["In A1 type `interview_date`, then type three dates in year-month-day form: `2026-01-05`, `2026-02-17`, `2026-03-31`.","Check they’re real dates: they line up on the right, and the formula bar shows a date.","Set their display to year-month-day if your app changed it (Excel: [[kbd:Ctrl]] + [[kbd:1]] → **Custom** → `yyyy-mm-dd`; Google Sheets: **Format → Number → Custom date and time**; LibreOffice: **Format → Cells → Numbers → Date**, the 1999-12-31 style; Numbers: **Format → Cell → Data Format → Create Custom Format**).","In B1, C1 and D1 type `year`, `month`, `day`. In B2 type `=YEAR(A2)`, in C2 `=MONTH(A2)`, in D2 `=DAY(A2)`, and fill all three down.","If a result looks like a date, format that column as a plain number. Then in E2 type `=DATE(B2, C2, D2)-A2`: it should give 0 for every row."]
     }},
     {t:"See a half-wrong date column", app:{
       google:["In a new spreadsheet, open **File → Settings** and set **Locale** to **United States**.","In a column, type `12/07/2026`, `13/07/2026` and `25/07/2026` (meant as day first).","Look at the alignment: one sits on the right (a real date, but 7 December) and two on the left (text). Set the locale back afterwards."]
     }, appNote:"This experiment is easiest in Google Sheets, where each spreadsheet has its own locale setting and the steps work on a computer. In Excel and LibreOffice, changing the locale changes your computer’s or app’s settings, so just read the table in the lesson instead.", write:"Which entries became text, and which became the wrong date?"}
   ], proof:"A note of how your app read 7/12/88 and where its date settings are, a small date column shown as yyyy-mm-dd with year, month and day columns that rebuild to the same dates, and (in Google Sheets) a half-wrong column you created and explained."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Dates as Data” (“Dates stored as integers”, “Regional date formatting” and the exercises “Separating dates into components” and “Default year”)"},
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Exporting Data” (the paragraph on how Excel’s date defaults differ between versions)"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u2-l5", title:"Raw data, validation and export", minutes:60,
   hook:{q:"A cell holds 1.26 but is formatted to show one decimal place, so it displays 1.3. You save the sheet as a CSV in LibreOffice Calc with the default export settings. What number is written in the CSV file?", options:["1.26","1.3","1","Both, separated by a space"], answer:1, reveal:"**1.3.** LibreOffice’s CSV export has an option, “Save cell content as shown”, that is on by default, so it writes what the cell displays, not the full value. Excel’s CSV export also writes values as they are displayed. The precision you hid is gone from the file. This lesson covers how to protect the original data, how to stop bad values at entry, and how to export a CSV that contains exactly what you mean."},
   goals:[
     "Keep a raw copy that is never edited, and record every change made to the working copy",
     "Turn a data dictionary into validation rules: ranges, dates, lists, lengths and unique IDs",
     "Find invalid values that validation didn’t stop",
     "Export CSV or TSV files with the right precision, date format, separator and encoding, and check them in a text editor"
   ],
   learn:[
    {h:"Keep raw data raw", body:[
      {lead:"Data Carpentry’s fourth principle is short: leave the raw data raw. Don’t change it. Work on a copy."},
      "[[raw-data|Raw data]] is the data as it was first recorded: the typed-up interview sheets, the instrument’s export, the form responses. Everything else (cleaned, reshaped, summarised) is **derived** from it. If you clean the only copy and later find a mistake in the cleaning, you can’t tell what the original said.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m325" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-gold" x="40" y="10" width="260" height="62" rx="10" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Raw: households_raw.xlsx</text><text class="s" x="170" y="56" text-anchor="middle">read-only, backed up, never edited</text><path class="d-ink" d="M170,72 L170,104" stroke-width="2" marker-end="url(#m325)"/><text class="s" x="180" y="93">copy</text><rect class="d-lup" x="40" y="108" width="260" height="78" rx="10" stroke-width="2"/><text x="170" y="134" text-anchor="middle">Working copy</text><text class="s" x="170" y="154" text-anchor="middle">clean, check, validate</text><text class="s" x="170" y="172" text-anchor="middle">+ a notes tab listing each step</text><path class="d-ink" d="M170,186 L170,218" stroke-width="2" marker-end="url(#m325)"/><text class="s" x="180" y="207">export</text><rect class="d-sage" x="40" y="222" width="260" height="62" rx="10" stroke-width="2"/><text x="170" y="248" text-anchor="middle">households.csv</text><text class="s" x="170" y="268" text-anchor="middle">+ dictionary + README</text><text class="s" x="170" y="306" text-anchor="middle">Found a mistake? Go back to the raw</text><text class="s" x="170" y="322" text-anchor="middle">file and redo the steps from your notes.</text></svg>', alt:"A flow from top to bottom. A gold box labelled Raw, households_raw.xlsx, read-only, backed up, never edited. An arrow labelled copy leads to a lupine box, Working copy: clean, check, validate, plus a notes tab listing each step. An arrow labelled export leads to a sage box, households.csv plus dictionary plus README. A note says: found a mistake? Go back to the raw file and redo the steps from your notes.", cap:"Raw data flows one way. Every derived file can be rebuilt from the raw file and the notes."},
      "The habits, from Data Carpentry and Broman and Woo:",
      {list:[
        "**Make the raw file read-only.** On Windows, right-click the file → **Properties** → tick **Read-only**. On a Mac, select it in Finder → **File → Get Info** → tick **Locked**. In a shared Google Sheet, **Data → Protect sheets and ranges** can lock the raw tab.",
        "**Back it up**, in more than one place ({{backup}}). Keep numbered versions (`survey_v01.xlsx`, `survey_v02.xlsx`) rather than one file you keep overwriting ({{version-history}}).",
        "**No calculations or charts in the raw file.** Broman and Woo’s reason: if you keep opening it to type formulas, sooner or later something gets typed into the data by accident.",
        "**Record every step** you take in the working copy: in a notes tab, or a plain-text log. Track 3’s Unit 3 turns this into a full cleaning log ({{cleaning-log}})."
      ]},
      {tip:"Broman and Woo also advise against rearranging existing data by copy and paste: it’s easy to introduce errors and leaves no record. For big rearrangements, a short script in R or Python (Units 7 and 8) is repeatable and documents itself."}
    ]},
    {h:"Validation rules from the dictionary", body:[
      "Your data dictionary (Lesson 3) already says what each column may hold. [[data-validation|Data validation]] makes the spreadsheet enforce it while people type. Data Carpentry’s two examples: household members must be a **whole number from 1 to 30** (a typed 90 is probably a slipped 9), and wall type must come **from a list** (grass, muddaub, burntbricks, sunbricks, cement), so nobody has to remember the spelling.",
      {table:[
        ["Dictionary says","Rule","Excel / LibreOffice “Allow”"],
        ["members: whole number, 1–30","Whole number between 1 and 30","Whole number / Whole Numbers"],
        ["interview_date: 2026-01-05 to 2026-03-31","Date between those dates","Date"],
        ["wall_type: one of five","List taken from a range on a `lists` sheet","List (Excel) / Cell range (LibreOffice)"],
        ["hh_id: H + two digits","Text length equal to 3","Text length"],
        ["hh_id: unique","Custom formula: `=COUNTIF($A$2:$A$500, A2)=1`","Custom"]
      ]},
      "**Keep long lists on their own sheet.** Data Carpentry suggests storing the allowed values as a small table on a separate tab and pointing the rule at it. Then adding a category means editing one list, and every cell that uses it updates.",
      "**Choose how strict to be.** Excel’s error alert has three styles: **Stop** refuses the entry, **Warning** asks whether to continue, and **Information** just tells you. LibreOffice’s **Error Alert** tab offers the same actions (Stop, Warning, Information, plus Macro). Google Sheets either **rejects the input** (the default for dropdowns) or **shows a warning** and marks the cell. Use Stop for things that are always wrong (31 February, a member count of 0); use Warning for things that are merely unusual (a household of 25).",
      "**Explain the rule.** An input message (Excel’s **Input Message** tab, LibreOffice’s **Input Help**) appears when someone selects the cell: “Whole number from 1 to 30: people who slept in the house last night.” It doubles as a reminder of the dictionary.",
      "Numbers has no general validation rules, but its cell controls limit entries: a **pop-up menu** for lists, and a **stepper** or **slider** with a minimum, maximum and increment (**Format** sidebar → **Cell** → **Data Format**)."
    ]},
    {h:"Validation has gaps", body:[
      "Microsoft’s help is clear about what validation does: it shows messages and prevents invalid entries **only when data is typed** into a cell. It doesn’t stop values that arrive by **copying or filling**, values produced by **formulas**, or values a **macro** enters. And, as Data Carpentry notes, a rule added later doesn’t check data that is **already** in the cells.",
      "So after setting rules on existing data, or after any paste, look for what slipped through:",
      {list:[
        "**Excel (desktop):** **Data → Data Validation** arrow → **Circle Invalid Data** draws red circles round every cell that breaks its rule. Microsoft notes it may not be available in Excel for the web.",
        "**LibreOffice Calc:** **Tools → Detective → Mark Invalid Data**.",
        "**Google Sheets:** cells that break a rule set to “show a warning” are marked in the corner; hover over one to read why.",
        "**Any app:** a check column. For members in C, `=AND(ISNUMBER(C2), C2>=1, C2<=30)` in row 2, filled down, gives FALSE for every row to look at, including blanks and text. (Excel, Google Sheets and LibreOffice Calc all have these functions.)"
      ]},
      {lab:"fl-countifnum", t:"Practise: count values above a limit with COUNTIF and a comparison"},
      {key:"Validation is a seatbelt, not a guarantee. Set rules before entry, and check after every paste or import."}
    ]},
    {h:"Why export to plain text", body:[
      "Data Carpentry’s fifth principle is to export cleaned data to a text-based format. Its reasons: other programs may not open a spreadsheet app’s own format, or may read it differently; different versions of an app can handle the same file differently (date systems are one example); and many data repositories, journals and funders ask for open formats. A plain-text file can be opened with any text editor today and in decades to come ({{file-formats}}).",
      {table:[
        ["Format","Separator","Good to know"],
        ["[[csv|CSV]]","Comma (or semicolon in some regions)","The most widely read; values with commas are wrapped in double quotes"],
        ["[[tsv|TSV]]","Tab","Broman and Woo note many people prefer it, especially where the comma is the decimal mark"]
      ]},
      "Both hold one table, values only: no formulas, formatting, comments, validation or extra sheets ({{csv-files}}). That’s exactly why your dictionary and README travel with them."
    ]},
    {h:"What your CSV actually contains", body:[
      "A CSV holds **text**. When an app writes it, it has to turn each value into characters, and the usual choice is the text the cell **displays**. LibreOffice Calc documents this as an export option, **Save cell content as shown**, which is on by default. Excel’s CSV export also writes values as they are displayed. So the format you chose for the screen becomes the data:",
      {ex:"Cell holds    Displayed as    CSV contains (as shown)\n1.26          1.3             1.3\n2026-04-03    03/04/2026      03/04/2026\n2026-04-03    2026-04-03      2026-04-03\n0412555019    0412555019      0412555019 (stored as text)", label:"Tested in LibreOffice Calc 24.2", mono:true},
      "Before exporting:",
      {ol:[
        "**Show full precision** in number columns (or as many decimals as were measured).",
        "**Format date columns as yyyy-mm-dd**, so the file holds unambiguous ISO dates (Lesson 4).",
        "**Keep codes as text** so leading zeros are written out.",
        "**Export one sheet per file**: CSV holds only the active sheet."
      ]},
      {warn:"The reverse also bites: opening the CSV in a spreadsheet app makes it guess types again (Lesson 4, and Track 1’s CSV lesson). Check a CSV in a text editor, and import it with column types rather than double-clicking."}
    ]},
    {h:"Separators, decimal commas and encodings", body:[
      "In much of the world the decimal mark is a comma (`62,5`), which clashes with a comma separator. Programs handle this differently:",
      {list:[
        "**Excel for Windows** uses the list separator from Windows’ regional settings. Microsoft’s help explains that where the decimal separator is a comma, Excel uses a semicolon as the list separator, so its “CSV” files have semicolons between values. A comma-separated file opened on such a computer may land entirely in column A.",
        "**LibreOffice Calc** asks: tick **Edit filter settings** when saving as Text CSV, then choose the **[[delimiter|field delimiter]]** (comma, semicolon, tab) and the **character set**.",
        "**Google Sheets** offers **File → Download → Comma Separated Values (.csv)** and **Tab Separated Values (.tsv)**."
      ]},
      "When importing, every app lets you choose the separator, so a semicolon file isn’t broken, just different. What matters is that the file says (in the README) which separator and decimal mark it uses.",
      "**Encoding** is the code that turns letters into bytes ([[text-encoding]]). Choose [[utf-8|UTF-8]], which can store every script: desktop Excel’s **CSV UTF-8 (Comma delimited)**, LibreOffice’s **Unicode (UTF-8)** character set, or the text-encoding choice under **Advanced Options** in Numbers’ CSV export. Excel’s older **CSV (Comma delimited)** option uses an older, region-specific encoding, so names in other scripts can be damaged.",
      {tip:"Excel’s CSV UTF-8 starts the file with an invisible marker called a [[byte-order-mark|byte-order mark]]. Most programs ignore it; if your first column name arrives as `ï»¿hh_id` or with a strange symbol in front, that marker is the reason, and choosing UTF-8 (or “UTF-8 with BOM”) when importing fixes it."}
    ]},
    {h:"Before you share: a checklist", body:[
      "Open the exported file in a plain-text editor (Notepad, TextEdit in plain-text mode, or the Text app on a Chromebook) and check:",
      {ol:[
        "One header row of short names without spaces, then one row per observation.",
        "The separator you intended, and quotes only around values that contain it.",
        "Numbers with the decimals you meant; dates as YYYY-MM-DD; codes with their leading zeros.",
        "One missing-value code, as written in the dictionary.",
        "Accented letters and other scripts readable (no `Ã©`-style gibberish, called [[encoding-mojibake|mojibake]]).",
        "The dictionary and README alongside, saying the separator, decimal mark, encoding, date format and missing code."
      ]},
      "That’s the end of the journey this unit started: a rectangle of consistent values, documented, protected, and saved in a form that any person or program can read correctly."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“I’ll remember what I changed.”** Write it down as you go; in six months you won’t.",
        "**“Validation means my data is clean.”** It checks typing only. Pasted, filled and earlier values need checking.",
        "**“A CSV stores the real value, whatever the cell shows.”** Spreadsheet exports usually write what is displayed. Set formats before exporting.",
        "**“A semicolon CSV is broken.”** It’s the normal output where the decimal mark is a comma. Import it with the right separator.",
        "**“Saving as .xlsx is the safest way to share data.”** It’s fine for working. For sharing and archiving, plain text plus a dictionary is readable by everyone."
      ]}
    ]}
   ],
   try:[
    {id:"t3u2-l5-x1", type:"mcq", q:"Fatima has cleaned her survey data directly in the original file over two weeks. Her supervisor now asks how many responses she changed from “Prefer not to say” to blank. What is the main problem?", options:[
      {t:"With no untouched raw copy and no record of steps, she can’t compare before and after or show exactly what changed", ok:true, why:"Right. Keeping the raw file untouched and noting each step is what makes cleaning checkable and repeatable. She may be able to recover an earlier version from version history, which is worth trying now."},
      {t:"Nothing: blank is the right code for missing values, so the change is fine", why:"The choice of code may be fine; the problem is that nobody, including her, can now see what the original data said or how many cells changed."},
      {t:"She should have used −999 instead of blank", why:"A numeric code would make things worse: it gets averaged. The issue is the missing raw copy and record, not the code."},
      {t:"Spreadsheets can’t store “Prefer not to say”", why:"They can store any text. The question is about tracking changes, not storage."}
    ]},
    {id:"t3u2-l5-x2", type:"match", q:"Match each line of a data dictionary with the validation rule that enforces it.", pairs:[
      ["`rooms`: whole number, 1 to 20","Whole number between 1 and 20","A range rule rejects 0, 1.5, −3 and a slipped 100."],
      ["`visit_date`: during fieldwork, 2026-06-01 to 2026-08-31","Date between 2026-06-01 and 2026-08-31","A date rule catches typos in the year and dates outside the study."],
      ["`roof`: thatch, metal, tile or concrete","List from a range on a lists sheet","A dropdown limits entries to the four spellings."],
      ["`site_code`: exactly 4 characters","Text length equal to 4","A length rule catches missing or extra characters."],
      ["`sample_id`: unique","Custom formula with COUNTIF(…)=1","COUNTIF counts how often the ID appears; exactly 1 means unique."]
    ]},
    {id:"t3u2-l5-x3", type:"mcq", q:"Tomás set a rule in Excel allowing whole numbers from 1 to 30 in the members column. A week later he finds 45 and 0 in the column. How could they have got in?", options:[
      {t:"They were pasted or filled in, or were already there before the rule was set; validation only checks values as they are typed", ok:true, why:"Right. Microsoft’s help says validation doesn’t stop data entered by copying or filling, and Data Carpentry notes rules don’t check existing data. Circle Invalid Data (desktop Excel) will show them."},
      {t:"Excel’s validation only works on text, not numbers", why:"Whole number and decimal rules are standard validation types. The rule works for typing; the values arrived another way."},
      {t:"The rule must have been deleted", why:"Possible, but not needed to explain it: pasted values and earlier values bypass a rule that is still in place."},
      {t:"Someone chose “Yes” on a Stop alert", why:"A Stop alert has no option to accept the entry. (A Warning alert does, which is another possible route if he had chosen that style.)"}
    ]},
    {id:"t3u2-l5-x4", type:"sort", q:"Mei is about to export her cleaned sheet to CSV for a colleague using R. Which steps are worth doing first, and which make no difference to the CSV?", buckets:["Do it before exporting","Makes no difference to the CSV"], items:[
      {t:"Format the date columns as yyyy-mm-dd", b:0, why:"The CSV gets what cells display, so this writes unambiguous ISO dates."},
      {t:"Show all the decimals that were measured", b:0, why:"Values are written as shown; a one-decimal format would round the file’s numbers."},
      {t:"Make the header row bold and centred", b:1, why:"CSV keeps no formatting, so this is lost anyway (harmless, but pointless)."},
      {t:"Choose the UTF-8 CSV option", b:0, why:"Keeps accented names and other scripts intact."},
      {t:"Delete the chart on the sheet", b:1, why:"Charts aren’t written to a CSV, so deleting it changes nothing in the file. (Keep it in your working copy if it’s useful.)"},
      {t:"Make sure the active sheet is the one with the data", b:0, why:"A CSV holds only the active sheet."}
    ]},
    {id:"t3u2-l5-x5", type:"spot", q:"Dmitri opened his exported CSV in a text editor. The dictionary says: comma separator, dot decimal mark, dates YYYY-MM-DD, missing = NA, UTF-8. Tap every value that doesn’t match it.", ask:"doesn’t match the dictionary", mono:true, parts:[
      "hh_id,name,weight_kg,interview_date\n", {t:"H01", flag:false, why:"A text ID, as expected."}, ",", {t:"Zoë", flag:false, why:"Correct UTF-8 text: the ë is intact."}, ",", {t:"\"62,5\"", flag:true, why:"A decimal comma. The quotes keep it in one column, but a program expecting a dot will read it as text. The dictionary says dot decimals: 62.5."}, ",", {t:"03/04/2026", flag:true, why:"Not YYYY-MM-DD, and ambiguous (3 April or 4 March?). Format the column as yyyy-mm-dd before exporting."}, "\n", {t:"H02", flag:false, why:"A text ID, as expected."}, ",", {t:"SÃ¸ren", flag:true, why:"Mojibake: UTF-8 bytes read with another encoding at some point (Søren). Re-import the source as UTF-8 before exporting."}, ",", {t:"NA", flag:false, why:"The documented missing-value code: fine."}, ",", {t:"2026-04-05", flag:false, why:"An ISO date, as the dictionary says."}
    ]},
    {id:"t3u2-l5-x6", type:"number", q:"Three cells hold 1.26, 2.34 and 3.48, each formatted to show one decimal place (1.3, 2.3 and 3.5). The sheet is exported to CSV with values written as shown. A colleague adds up the three numbers in the CSV. What total do they get?", answer:7.1, tol:0.001, unit:"", why:"The CSV holds the displayed values, 1.3 + 2.3 + 3.5 = **7.1**. The true total of the stored values is 1.26 + 2.34 + 3.48 = 7.08. A small difference here, but rounded values in thousands of rows, or in a ratio, can change results.", wrongs:[
      {v:7.08, tol:0.001, why:"7.08 is the total of the values stored in the spreadsheet. The CSV was written as shown, so the colleague sees 1.3, 2.3 and 3.5: 7.1."},
      {v:7, tol:0.001, why:"That rounds the total itself. The colleague adds the three one-decimal values in the file: 1.3 + 2.3 + 3.5 = 7.1."}
    ]},
    {id:"t3u2-l5-x7", type:"order", q:"Put Ana’s steps for sharing her cleaned survey data in a sensible order.", items:[
      {t:"Confirm the raw file is untouched and backed up", why:"Before anything else, make sure the original is safe."},
      {t:"In the working copy, set date columns to yyyy-mm-dd and show full decimals", why:"Formats decide what the CSV contains, so fix them before exporting."},
      {t:"Export the data sheet as CSV UTF-8", why:"Export once the displayed values are what you want in the file."},
      {t:"Open the CSV in a text editor and run through the checklist", why:"See exactly what was written: separator, decimals, dates, codes, accents."},
      {t:"Send it with the data dictionary and README", why:"The documentation tells the reader the codes, units, separator and encoding."}
    ]}
   ],
   apply:{intro:"Protect, validate and export a small dataset: your households sheet from Lesson 1, or your own. Validation rules are easiest to create on a computer or tablet; the phone apps can use them once they exist.", tasks:[
     {t:"Protect your raw data", how:{
       win:["Save your original workbook in a folder called `raw`.","In File Explorer, right-click the file → **Properties** → tick **Read-only** → **OK**.","Make a copy in a folder called `working` and do all further work there."],
       mac:["Save your original workbook in a folder called `raw`.","Select it in Finder, choose **File → Get Info**, and tick **Locked**.","Duplicate it into a folder called `working` (**File → Duplicate**, then move the copy) and do all further work there."],
       chromeos:["If your data is in Google Sheets, open it and choose **File → Make a copy**; name the copy `working`.","In the original, choose **Data → Protect sheets and ranges**, add the raw sheet, and set **Restrict who can edit this range** (or **Show a warning when editing this range**).","Do all further work in the copy."],
       phone:["In the Google Sheets app, open the spreadsheet’s menu (three dots) and choose **Share & export → Make a copy**; name the copy `working`.","Protection settings (**Data → Protect sheets and ranges**) are easiest in a browser; until then, simply never edit the original.","Do all further work in the copy."]
     }},
     {t:"Turn your dictionary into validation rules", app:{
       ms:["Add a sheet called `lists` with the allowed wall types in A2:A6.","On the data sheet, select the members cells (C2:C200). Choose **Data → Data Validation**. **Allow: Whole number**, **Data: between**, Minimum 1, Maximum 30.","On the **Input Message** tab, type a short help message. On the **Error Alert** tab, choose **Stop** and write a clear message. Click **OK**.","Select the wall-type cells. **Data → Data Validation** → **Allow: List**, **Source:** `=lists!$A$2:$A$6`.","Select the ID cells (A2:A200, starting from A2). **Allow: Custom**, **Formula:** `=COUNTIF($A$2:$A$200, A2)=1`. Try typing a duplicate ID."],
       google:["Add a sheet called `lists` with the allowed wall types in A2:A6.","On the data sheet, select C2:C200 and choose **Data → Data validation → Add rule**. Under **Criteria**, choose **Is between** and enter 1 and 30. Under **Advanced options**, choose **Reject the input**, then **Done**. (Sheets has no whole-number criterion; **Custom formula is** `=AND(C2>=1, C2<=30, C2=INT(C2))` adds that.)","Select the wall-type cells, **Add rule**, choose **Dropdown (from a range)** and enter `lists!A2:A6`.","Select A2:A200, **Add rule**, choose **Custom formula is** and enter `=COUNTIF($A$2:$A$200, A2)=1`. Try typing a duplicate ID."],
       libre:["Add a sheet called `lists` with the allowed wall types in A2:A6.","On the data sheet, select C2:C200 and choose **Data → Validity**. On **Criteria**: **Allow: Whole Numbers**, **Data: valid range**, Minimum 1, Maximum 30.","On **Input Help**, add a title and message. On **Error Alert**, tick **Show error message when invalid values are entered**, set **Action: Stop** and write a message. Click **OK**.","Select the wall-type cells. **Data → Validity** → **Allow: Cell range**, **Source:** `$lists.$A$2:$A$6`."],
       apple:["Select the wall-type cells. In the **Format** sidebar → **Cell**, set **Data Format** to **Pop-Up Menu** and enter the five wall types.","Select the members cells and set **Data Format** to **Stepper**, with **Minimum** 1, **Maximum** 30 and **Increment** 1.","Numbers has no rule for unique IDs; add a COUNTIF check column instead (Lesson 1)."]
     }, write:"Which rules did you add, and which dictionary lines do they enforce?"},
     {t:"Find what validation missed", app:{
       ms:["Type 45 somewhere else, copy it, and paste it into a members cell. No error appears.","Desktop Excel: choose **Data → Data Validation** (click the small arrow) → **Circle Invalid Data**. The pasted 45 gets a red circle.","Fix it, then choose **Clear Validation Circles**."],
       google:["Copy a cell containing 45 and paste it into a members cell. Depending on your rule, Sheets may reject it or mark it as invalid.","For a rule set to **Show a warning**, look for the marker in the cell’s corner and hover over it.","As a check that works for any rule, add a column with `=AND(ISNUMBER(C2), C2>=1, C2<=30)` filled down, and filter for FALSE."],
       libre:["Type 45 elsewhere, copy it, and paste it into a members cell.","Choose **Tools → Detective → Mark Invalid Data**. Invalid cells are circled.","Fix them, then choose **Tools → Detective → Remove All Traces**."],
       apple:["Add a check column with a formula such as `=IF(AND(C2>=1, C2<=30), \"ok\", \"check\")`, filled down.","Use the **Organize** sidebar → **Filter** (or the column’s **Quick Filter**) to show only “check” rows."]
     }},
     {t:"Export a CSV that says what you mean", app:{
       ms:["In the working copy, format dates as `yyyy-mm-dd` ([[kbd:Ctrl]] + [[kbd:1]] → **Custom**) and show full decimals.","Desktop: **File → Save a Copy** (or **Save As**) → **CSV UTF-8 (Comma delimited)**. Excel for the web: **File → Export → Download this sheet as CSV**.","Open the file in a text editor and run through the lesson’s checklist."],
       google:["Format dates with **Format → Number → Custom date and time** as year-month-day, and show full decimals.","Choose **File → Download → Comma Separated Values (.csv)** (or **Tab Separated Values (.tsv)**).","Open the file in a text editor and run through the lesson’s checklist."],
       libre:["Format dates with **Format → Cells → Numbers → Date** (ISO 8601 style) and show full decimals.","**File → Save As**, choose **Text CSV (.csv)** and tick **Edit filter settings**. Keep the format, then choose **Unicode (UTF-8)**, the field delimiter, and notice **Save cell content as shown**.","Open the file in a text editor and run through the lesson’s checklist."],
       apple:["Format dates with a custom year-month-day format and show full decimals.","**File → Export To → CSV**, open **Advanced Options** and choose UTF-8 as the text encoding.","Open the file in TextEdit (**Format → Make Plain Text** if needed) and run through the lesson’s checklist."]
     }}
   ], proof:"A read-only raw file and a working copy; validation rules for a range, a list and (where your app allows) unique IDs; an invalid pasted value found with your app’s checker; and a CSV, checked in a text editor, with ISO dates, full decimals and UTF-8 text."},
   read:[
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Quality Assurance” (“Validating data on input”, “Restricting data to a numeric range”, “Restricting data to entries from a list”)"},
    {book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Exporting Data”"},
    {book:"wss", where:"Chapter 11, Section 11.1 “Understanding Data, Data Validation, and Data Tables”"}
   ]
  }
  ],
  checkpoint:["t3u2-q02","t3u2-q06","t3u2-q09","t3u2-q12","t3u2-q16","t3u2-q21","t3u2-q25","t3u2-q30","t3u2-q34","t3u2-q39","t3u2-q43","t3u2-q45"],
  codex:[
   {id:"tidy-data-principles", title:"Tidy data principles in depth", aka:["variables in columns","observations in rows","one rectangle","long format","wide format","unpivot","observational unit","Data Carpentry spreadsheet rules"], tags:["data","spreadsheets"],
    summary:"Decide what one row is, give every variable its own column and every fact its own cell, use one rectangle per kind of observation, and store long when in doubt.",
    levels:{
     starter:[
      "A spreadsheet is read by two kinds of reader: people, who understand context, colour and position, and programs, which see only the values in cells. Tidy data works for both.",
      "Data Carpentry’s spreadsheet lesson lists five principles:",
      {ol:["Variables in columns.","Each observation in its own row.","One piece of information per cell.","Leave the raw data raw.","Export the cleaned data to a text format such as CSV."]},
      "The question that unlocks most layouts is **“one row = one what?”**: one household, one plot, one sale, one reading. If a sheet mixes two answers, it probably needs to be two tables, linked by an ID column.",
      {key:"If you would ever want to sort, filter or count by a piece of information, give it its own column."},
      "Track 1’s {{tidy-data}} entry covers the everyday rules (headers, no merged cells, no totals in the data)."
     ],
     builder:[
      "**Variables and values.** A variable is a property recorded for every unit (village, members, wall type); its column holds values of one kind, in one unit. A cell such as `3, (oxen , cows)` or `13-A01` holds several facts and should be split.",
      "**Observations.** An observation is one unit at one time. When data exists at two levels (households, and the plots each household farms), Broman and Woo recommend a set of rectangles: one table per kind of observation, each with an ID, linked by that ID. Household facts are written once, not on every plot row.",
      "**One rectangle per sheet.** Avoid tables side by side (a program reads each row as one observation), a tab per day or site (add a column instead), repeated header rows (freeze the header), and two header rows (use names such as `weight_4`, or a long layout).",
      {table:[["Layout","Holds","Grows by"],["Wide","One column per repeated measurement (jan_mm, feb_mm)","Adding columns"],["Long","A column for what varies (month) and one for the value","Adding rows"]]},
      "**Which is tidy?** It depends on the observation. Long suits filtering, grouping, pivot tables and most charting and analysis tools; wide suits reading and typing a few fixed measurements. Store long when in doubt; a pivot table makes a wide summary on demand ({{pivot-tables}}).",
      "**Rows after reshaping:** wide to long gives units × measured columns rows (40 households × 4 livestock columns = 160 rows)."
     ],
     pro:[
      "**Wickham’s framing.** Hadley Wickham’s 2014 paper “Tidy Data” defines tidy data as each variable a column, each observation a row and each type of observational unit a table. Data Carpentry’s spreadsheet rules are the practical version; its lesson cites Wickham, the Lowndes and Horst illustrations, and Broman and Woo (2018).",
      "**Entry layout versus analysis layout.** Data Carpentry notes the best layouts for entering and analysing data may differ, and recommends automating the conversion. A wide form can be quicker to type; convert it to long with a repeatable method.",
      "**Reshaping tools.** Long to wide: pivot tables in every major app. Wide to long: desktop Excel’s Power Query (**Data → From Table/Range**, select the ID column, **Transform → Unpivot Other Columns**; the new columns are named Attribute and Value by default), or code: `pivot_longer()` in R’s tidyr ({{reshaping-data}}), `melt()` in Python’s pandas. Broman and Woo advise against hand copy-and-paste rearrangement of existing data where possible, because it introduces errors and leaves no record.",
      "**Keys.** Each table needs a key column whose values are unique and stable. Check with a helper column `=COUNTIF($A$2:$A$500, A2)` (values above 1 are duplicates) or enforce it with a custom validation rule `=COUNTIF($A$2:$A$500, A2)=1`. Store keys with leading zeros or letters as text. In a database the same idea is a primary key, and the linking column in the second table is a foreign key (Unit 9).",
      "**When it doesn’t fit.** Broman and Woo: some data fit no set of rectangles, and then a spreadsheet may not be the right tool. Nested or hierarchical records may belong in a database or a format such as JSON."
     ]
    },
    related:["tidy-data","spreadsheet-data-entry","raw-data-raw","pivot-tables","reshaping-data","data-dictionaries"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”"}],
    sources:[{t:"Data Carpentry: Data Organization in Spreadsheets for Social Scientists (lesson source on GitHub)", url:"https://github.com/datacarpentry/spreadsheets-socialsci"},{t:"Broman & Woo (2018), Data Organization in Spreadsheets, The American Statistician 72:2–10 (manuscript source on GitHub)", url:"https://github.com/kbroman/Paper_DataOrg"},{t:"Microsoft Support: Unpivot columns (Power Query)", url:"https://support.microsoft.com/en-us/office/unpivot-columns-power-query-0f7bad4b-9ea1-49c1-9d95-f588221c7098"}], checked:"2026-11"},

   {id:"spreadsheet-data-entry", title:"Entering data consistently", aka:["consistency","column names","field names","units in cells","comments in cells","formatting as data","highlighting","special characters","non-breaking space","paste values"], tags:["data","spreadsheets"],
    summary:"One code per category, one form per ID, names without spaces, units and notes in their own columns, meaning in columns rather than colour, and no invisible characters.",
    levels:{
     starter:[
      "Broman and Woo call it the first rule of data organisation: **be consistent**. Whatever you do, do it the same way every time.",
      {list:["One spelling for each category: not `M`, `male` and `Male`.","One form for each ID: not `153` and `mouse153`.","Short column names without spaces: `wall_type`, not `wall type`.","Just the value in a cell: `45` in a column called `weight_g`, not `45 g`.","A column, not a colour, for anything that matters: `flag = check`, not a yellow cell."]},
      "Spreadsheets can hide inconsistencies: COUNTIF ignores capital letters, so `Male` and `male` look the same to it, but a leading or trailing space makes a different value, and analysis programs such as R treat every variant as a separate category.",
      {tip:"Open a column’s filter list: it shows each distinct value once, so variants stand out."}
     ],
     builder:[
      "**Column names.** Data Carpentry: descriptive, but no spaces, numbers at the start, or special characters; underscores are a good alternative to spaces. Broman and Woo: short but meaningful, pick underscores or hyphens and don’t mix them, avoid `$ @ % # & * ( ) ! /`. Put units in the name (`weight_kg`) or the data dictionary.",
      "**Values with extras.** `0 (below threshold)` should be `0` plus a note column; `20 (approx.)` should be `20` plus an `estimated` column. Data Carpentry notes most analysis software can’t see cell comments, so notes belong in a column.",
      "**Formatting as data.** Highlighting excluded rows, colouring groups or bolding estimates stores meaning where formulas and CSV files can’t reach it. Add an indicator column (`exclude` TRUE/FALSE) instead; conditional formatting can then colour rows *from* the column.",
      "**Fill every row.** Leaving a cell blank to mean “same as above” turns it into a missing value, and once sorted the link may be lost. Record zeros as zeros.",
      "**Pasting.** Paste values only: Excel **Paste Values**, Google Sheets **Paste special → Values only**, LibreOffice **Paste Unformatted Text**, Numbers **Paste and Match Style**.",
      "**Finding variants.** Open the column’s filter list (each distinct value appears once), sort the column so odd entries collect at one end, or count each allowed value with COUNTIF and check the counts add up to the number of rows."
     ],
     pro:[
      "**Invisible characters.** Line breaks inside cells, tabs, curly quotes, dashes and non-breaking spaces copied from documents and web pages cause trouble downstream: records split in two, columns shift in a TSV, searches for a straight quote miss curly ones. Data Carpentry’s rule of thumb is to treat a text cell like a simple web form containing only text and spaces.",
      "**TRIM’s limits.** Excel’s TRIM removes the ordinary space (character 32) at the ends and squeezes repeated spaces, but Microsoft’s help says it doesn’t remove the non-breaking space (character 160). `=TRIM(SUBSTITUTE(A2, CHAR(160), \" \"))` handles both. Other apps’ TRIM functions may differ; test on your data.",
      "**Case sensitivity differs by tool.** COUNTIF, SUMIF and lookups in Excel, Google Sheets and LibreOffice Calc ignore case; `EXACT()` compares exactly. R and Python compare text case-sensitively, and so do many databases (it depends on the database and its settings), so inconsistencies a spreadsheet tolerated reappear as extra categories later.",
      "**Detecting variants at scale.** Filter lists, sorting, a pivot table of counts, or a COUNTIF against a list of allowed values reveal variants. For large messy columns, OpenRefine’s clustering finds near-identical spellings ({{facets-clustering}}).",
      "**Prevention beats cleaning.** Dropdown lists (validation) remove most spelling variation at entry; a data dictionary fixes the allowed values and the naming style for everyone ({{data-validation-rules}}).",
      "**Consistency across files.** Same column names, same order, same codes and a file-naming pattern (`serum_batch1_2026-01-30.csv`) let batches be combined automatically ({{file-naming}})."
     ]
    },
    related:["tidy-data-principles","data-dictionaries","data-validation-rules","tidy-data","file-naming","data-cleaning","facets-clustering"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”, section “Common Spreadsheet Errors”"}],
    sources:[{t:"Data Carpentry: Data Organization in Spreadsheets for Social Scientists (lesson source on GitHub)", url:"https://github.com/datacarpentry/spreadsheets-socialsci"},{t:"Broman & Woo (2018), Data Organization in Spreadsheets (manuscript source on GitHub)", url:"https://github.com/kbroman/Paper_DataOrg"},{t:"Microsoft Support: TRIM function", url:"https://support.microsoft.com/en-us/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9"}], checked:"2026-11"},

   {id:"missing-values", title:"Missing values: zeros, blanks and codes", aka:["null values","NA","blank cells","-999","missing data codes","N/A","na.rm","not applicable","refused"], tags:["data","spreadsheets","statistics"],
    summary:"Type 0 only for a real zero, use one non-numeric missing code (blank or NA) consistently, record why a value is missing in another column, and document the code.",
    levels:{
     starter:[
      "A **zero** is a measurement: you counted and found none. A **missing value** means you don’t know. Mixing them up changes results with no error message.",
      {ex:"Cow counts 2, 1, ?, 4, 3 (household 3 has none)\nTyped 0:     average = 10 ÷ 5 = 2\nLeft blank:  average = 10 ÷ 4 = 2.5", label:"Zero or blank?", mono:true},
      "Never use a number such as −999 for “missing”: spreadsheets average it like any other number. The ages 34, 41, −999, 29, 36 average to −171.8.",
      "Choose **one** code, use it everywhere, and write it in your data dictionary. Data Carpentry recommends leaving the cell blank; Broman and Woo prefer typing NA. Both work if you’re consistent.",
      {key:"Zero is data. Missing is the absence of data. Record them differently."}
     ],
     builder:[
      {table:[["Cell holds","AVERAGE","COUNT / COUNTA","=A2+A3 arithmetic"],["Blank","Skipped","Not counted / not counted","Treated as 0"],["`NA` (text)","Skipped","Not counted / counted","#VALUE!"],["`0`","Included","Counted / counted","0"],["`-999`","Included","Counted / counted","−999"]]},
      "(Tested in LibreOffice Calc; Excel and Google Sheets follow the same rules.)",
      "**Data Carpentry’s verdicts:** 0, never use; blank, best option; NA, good option (R); −999 or 999, avoid; N/A, None, “missing”, “No data”, `-`, `+`, `.`, avoid; NULL, good option for SQL. It follows White and colleagues’ 2013 advice on null values.",
      "**Broman and Woo’s view:** fill every cell, using NA or a hyphen, so a missing value is visibly intended rather than possibly forgotten.",
      "**Why it’s missing.** Refused, don’t know, not asked, lost: these mean different things. Keep the value cell for the value or the missing code, and put the reason in its own column (`income_missing_reason`), as Broman and Woo recommend for notes.",
      "**Watch for silent blanks.** A blank is skipped by AVERAGE and COUNT, but direct arithmetic such as `=B4-B3` treats it as 0, so a difference calculated from a missing value looks like a real result. Text codes such as NA fail loudly instead (#VALUE!), which is one argument for them.",
      "**Check before analysing.** `=COUNTBLANK(range)` counts empty cells, and comparing COUNT with COUNTA shows how many entries in a number column are text. A quick filter on the column shows which codes are actually in use; anything not in the dictionary needs fixing."
     ],
     pro:[
      "**What analysis tools assume.** R: `mean()` returns NA if any value is NA, unless `na.rm = TRUE`; `read.csv()` treats `\"NA\"` as missing by default (`na.strings`), and blank fields in number columns too; readr’s `read_csv()` treats `\"\"` and `\"NA\"` as missing. Python’s pandas treats a default list as missing, including blank, `NA`, `N/A`, `n/a`, `NULL`, `null`, `None`, `NaN` and `#N/A`; in a test for this unit, `na` and `-` were kept as text, which turned a whole number column into text. SQL’s AVG ignores NULLs, much like a spreadsheet ignores blanks.",
      "So Data Carpentry’s remark that an average including a null is always null is true of R’s `mean()` by default, but not of spreadsheet AVERAGE, pandas’ `mean()` (which skips missing values by default) or SQL AVG. Know your destination.",
      "**Collisions.** `NA` is also Namibia’s ISO country code and an abbreviation for North America; a missing-value code must never be a legitimate value in any column. Override the reader’s defaults for such columns, or choose another code and document it.",
      "**Survey codes.** Large surveys often use numeric reason codes (for example 1 = refused). Keep them in a separate reason column, or make sure every user converts them to missing before analysis; numeric codes inside a value column are how −999-style errors happen.",
      "**Missingness is information.** Whether values are missing at random or for a reason (people with high incomes refusing, say) affects what conclusions are safe; Track 4’s survey material and later statistics units return to this ({{survey-design}}).",
      {tip:"Write the missing-value rule in three places: the dictionary, the README, and the code that reads the data."}
     ]
    },
    related:["data-dictionaries","spreadsheet-data-entry","tidy-data-principles","descriptive-statistics","common-functions"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”, sections “Not filling in zeros” and “Using problematic null values”"}],
    sources:[{t:"Data Carpentry: Data Organization in Spreadsheets for Social Scientists (lesson source on GitHub)", url:"https://github.com/datacarpentry/spreadsheets-socialsci"},{t:"Broman & Woo (2018), Data Organization in Spreadsheets (manuscript source on GitHub)", url:"https://github.com/kbroman/Paper_DataOrg"}], checked:"2026-11"},

   {id:"data-dictionaries", title:"Data dictionaries and README files", aka:["metadata","codebook","variable list","data documentation","README","DDI"], tags:["data","documentation"],
    summary:"A data dictionary describes every column (name, meaning, type, unit, allowed values, missing code); a README describes the project and files. Keep both next to the data, not inside it.",
    levels:{
     starter:[
      "Data Carpentry calls documentation about your data **metadata**: data about data. You know your dataset well while you’re working on it, but in six months you won’t remember exactly what question produced the `water_use` column, and nobody else ever knew.",
      "A **data dictionary** has one row per column of your data, with:",
      {list:["the exact column name","what it means (for a survey, the exact question)","its type and unit","the allowed values or range","how missing values are recorded"]},
      "A **README** is a short plain-text file for the whole project: who collected the data, when, where and how, what each file holds, and which version is current.",
      "Keep both **next to** the data, not inside it: a separate sheet while you work, and separate files when you share.",
      {tip:"Write the dictionary while you design the sheet, not at the end. It becomes your validation rules too."}
     ],
     builder:[
      "**Make it a rectangle.** Broman and Woo suggest laying the dictionary out like data (one row per variable), so programs can use it: for example to label charts or check ranges. Their suggested columns: the variable name as in the file, a readable version for charts, a longer explanation, the units, and expected minimum and maximum values. Allowed values help find entry errors.",
      {ex:"variable,description,type,unit,allowed,missing\nhh_id,Household identifier,text,,H01-H99,never\nmembers,People who slept in the house last night,integer,people,1-30,blank\nwall_type,Main outer wall material,category,,grass;muddaub;burntbricks;sunbricks;cement,blank", label:"A dictionary as a CSV", mono:true},
      "**Keep it separate.** Data Carpentry: metadata should not be in the data file, because legends and notes disrupt how programs read it. Store it as a separate file in the same folder, with a name that ties it to the data (`households_dictionary.csv`).",
      "**What to define.** Data Carpentry’s exercise list: exact question wording, the type of data allowed in each column (range, list, whole or decimal), definitions of categories (what counts as “burntbricks”?), and definitions of units of observation (what counts as a “room” or a “plot”?).",
      "**The README** describes the files and how they relate, formats (separator, decimal mark, date format, encoding), the missing-value code, the version date, and any licence. Data Carpentry calls a folder-level readme.txt the classic way to account for all the files and folders in a project."
     ],
     pro:[
      "**Codebooks and standards.** Survey datasets usually ship with codebooks describing how each variable was constructed, the prompt behind it and the meaning of each value; Data Carpentry points to the General Social Survey’s online codebook. For social, behavioural and health data, the Data Documentation Initiative (DDI) is a widely used metadata standard; research librarians can help choose one. (Note that in qualitative research, a “codebook” means something different: a list of themes used to code text.)",
      "**Project-level metadata.** A folder-level README accounts for every file, says which files supersede others, and records provenance (how the data was produced). Data repositories add their own metadata, such as a title, creators, dates, a licence and a persistent identifier (Unit 10, {{fair-data}}).",
      "**Using the dictionary.** The allowed values become validation rules ({{data-validation-rules}}); the missing code becomes the `na` argument when reading the data in R or Python; the readable labels become chart axis titles. A dictionary that is a CSV can be checked against the data automatically: every column documented, every value allowed.",
      "**Keep it current.** Add a row when you add a column, and note changes in the README with dates. An out-of-date dictionary misleads more than a missing one.",
      "**Sensitive details.** Documentation should explain how data was collected and anonymised without revealing what it protects (Track 4’s {{anonymisation}})."
     ]
    },
    related:["missing-values","tidy-data-principles","data-validation-rules","raw-data-raw","data-management-plan","fair-data"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Metadata”"}],
    sources:[{t:"Data Carpentry: Data Organization in Spreadsheets for Social Scientists, episode “Metadata” (lesson source on GitHub)", url:"https://github.com/datacarpentry/spreadsheets-socialsci"},{t:"Broman & Woo (2018), Data Organization in Spreadsheets (manuscript source on GitHub)", url:"https://github.com/kbroman/Paper_DataOrg"}], checked:"2026-11"},

   {id:"dates-in-data", title:"Dates in data: systems, locales and safe formats", aka:["1900 date system","1904 date system","ISO 8601","YYYY-MM-DD","date serial number","day-month order","automatic data conversion","gene names to dates","YEAR MONTH DAY"], tags:["data","spreadsheets","dates"],
    summary:"Dates are day counts whose starting day differs between systems; typed and imported dates are read using a locale; record them as ISO dates, as separate year, month and day columns, or as text, and protect codes from becoming dates.",
    levels:{
     starter:[
      "Spreadsheets store a date as a count of days: in Excel, 2 July 2014 is 41822. That’s why adding 90 to it gives 30 September 2014.",
      "Three things go wrong:",
      {list:["**Day or month first?** `7/12/88` is 7 December in the UK and 12 July in the US. Your app decides using its regional settings.","**Different counting systems.** Old Excel for Mac workbooks may count from 1904; the same number then means a date four years away.","**Things that aren’t dates become dates.** Codes like SEPT2, 1-2 or DEC1 can be converted automatically."]},
      "Safe habits: type dates as year-month-day (`2026-04-03`), or put year, month and day in three columns; set code columns to Text **before** typing; check after any paste or import.",
      {key:"Write dates YYYY-MM-DD, and say so in the data dictionary."}
     ],
     builder:[
      "**Date systems.** Microsoft: the 1900 system is the default in Excel for Windows and in Excel for Mac 2011 and later; earlier Excel for Mac versions defaulted to 1904. The systems differ by 1,462 days (3 April 2026 is 46115 in one, 44653 in the other). Each workbook has its own setting (Windows: File → Options → Advanced → Use 1904 date system). Google Sheets counts days since 30 December 1899; LibreOffice Calc uses 1899-12-30 as day zero by default (Tools → Options → LibreOffice Calc → Calculate), so modern dates match Excel’s 1900 system.",
      "**Locales.** A month-first sheet turns day-first `12/07/2026` into 7 December and leaves `13/07/2026` as text: a half-wrong column with no error. When importing, set the date order (LibreOffice: column type Date (DMY), (MDY) or (YMD); Excel Power Query: Change Type → Using Locale).",
      {table:[["Method","Strength","Cost"],["Real date shown as yyyy-mm-dd","Sorts and calculates; unambiguous","Imports may still guess"],["Year, month, day columns","Plain numbers nothing changes; partial dates easy","DATE() to recombine"],["Text ('2026-04-03 or 20260403)","Kept exactly","No arithmetic until converted"]]},
      "`=YEAR(B2)`, `=MONTH(B2)`, `=DAY(B2)` split a date; `=DATE(y, m, d)` rebuilds it. Format the parts as numbers.",
      "**Missing years.** Typing `17/11` adds the current year (Data Carpentry’s “Default year” exercise). **Partial dates** (only a year, or a year and month) fit naturally into separate columns, with the unknown parts left blank and explained in the dictionary, rather than an invented first of the month."
     ],
     pro:[
      "**Edge cases.** Excel treats 1900 as a leap year for compatibility, so serial numbers before 1 March 1900 differ from LibreOffice and Google Sheets. Excel’s 1900 system starts on 1 January 1900, and Data Carpentry notes Excel leaves earlier dates as text, so historical columns can become mixed; Excel’s and Google Sheets’ DATE() also read a year from 0 to 1899 as years after 1900. Copying between workbooks with different systems is converted automatically by Excel unless that is turned off (a Mac option under Preferences → Edit → Date Options), and Microsoft notes dates in copied charts aren’t converted; serial numbers in exported or combined files are not protected at all.",
      "**Formatting existing dates as Text** shows their serial numbers (Broman and Woo). Set the format before typing text dates.",
      "**Automatic conversion of identifiers.** Abeysooriya and colleagues (2021) found gene-name errors in 30.9% of 11,117 articles with Excel gene lists (2014–2020). In their tests Excel and Google Sheets converted gene names to dates whether data was opened from a file, pasted or typed; LibreOffice Calc 6.4 and Gnumeric did not; text formatting prevented it. They recommend importing with columns set as text, sharing flat text files, and sorting gene columns to expose dates and numbers.",
      "**Excel’s Automatic Data Conversion.** A first version, with three options, reached Windows Insiders in July 2022; Microsoft’s October 2023 update (Windows version 2309, Mac 16.77 or later) brought them to Mac and added letters-plus-numbers to dates, so the options cover leading zeros, 15-digit truncation, E notation and letters-plus-numbers. Microsoft lists them for Excel for Microsoft 365 and Excel 2024 (File → Options → Data; Mac: Excel → Preferences → Edit). Conversions stay on by default, and the settings don’t directly affect Power Query imports. They protect only that copy of Excel.",
      {tip:"In CSV exports, dates are written as displayed. Format them yyyy-mm-dd before exporting."}
     ]
    },
    related:["cell-data-types","csv-files","missing-values","spreadsheet-data-entry","raw-data-raw"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Dates as Data”"}],
    sources:[{t:"Microsoft Support: Date systems in Excel", url:"https://support.microsoft.com/en-us/office/date-systems-in-excel-e7fe7167-48a9-4b96-bb53-5612a800b487"},{t:"LibreOffice Help: Calculate (date settings)", url:"https://help.libreoffice.org/latest/en-US/text/shared/optionen/01060500.html"},{t:"Abeysooriya et al. (2021), Gene name errors: lessons not learned, PLOS Computational Biology", url:"https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008984"}], checked:"2026-11"},

   {id:"raw-data-raw", title:"Keeping raw data raw", aka:["raw data","original data","read-only","write-protect","working copy","cleaning notes","derived data","backups"], tags:["data","research"],
    summary:"Keep an untouched, backed-up, read-only copy of the original data; do all cleaning in a copy, record every step, and export the result as plain text.",
    levels:{
     starter:[
      "**Raw data** is the data as it was first recorded. Data Carpentry’s advice is short: leave the raw data raw. Don’t change it. Make a copy and work on that.",
      "Why? If you clean the only copy and later find a mistake (yours or the data’s), you can’t see what the original said. With the raw file safe, you can always start again.",
      {ol:["Save the original and make it read-only.","Back it up, in more than one place.","Make a working copy and do everything there.","Write down each step you take (a notes tab is enough)."]},
      "This applies to data you receive, too: a file sent by a colleague, downloaded from a website or exported from a form is raw data for you. Save it untouched before you start.",
      {key:"Raw data flows one way: raw → working copy → exported file. Never edit backwards."}
     ],
     builder:[
      "**Write-protect.** Windows: right-click the file → Properties → Read-only. Mac: Finder → File → Get Info → Locked. Google Sheets: **Data → Protect sheets and ranges** for the raw tab, or keep the raw file in a folder only you can edit.",
      "**No calculations in raw files.** Broman and Woo: the primary data file should hold just the data, with no calculations or graphs. If you keep opening it to type formulas, sooner or later something gets typed into the data by accident. Do analysis in a copy.",
      "**Versions.** Keep numbered versions (`file_v1.xlsx`, `file_v2.xlsx`) and back them up in several places ({{backup}}); cloud version history helps but isn’t a substitute ({{version-history}}).",
      "**Record steps.** Data Carpentry: create a new file or tab for cleaned data, and keep track of the steps you took, as you would any step of an experiment, in a text file or a notes tab so notes and data stay together.",
      "**Export.** Save the cleaned result as CSV or TSV, with the dictionary and README alongside.",
      "**A simple folder layout** makes the flow obvious to everyone: `raw/` for originals, `working/` for copies being cleaned, `output/` for exported files, plus the README at the top. Track 1’s file-organisation unit shows naming patterns that sort well ({{file-naming}})."
     ],
     pro:[
      "**Reproducibility.** A cleaning process that exists only as edits in a spreadsheet can’t be checked or repeated. Data Carpentry’s introduction notes that the drag-and-drop nature of spreadsheets makes steps very hard to replicate; Broman and Woo advise doing rearrangement with code so “you never lose the record of what you did to the data”. Track 3’s Units 3, 7 and 8 build that up: a cleaning log, OpenRefine’s operation history, and R scripts ({{cleaning-log}}).",
      "**Derived files are disposable.** If every derived file can be rebuilt from the raw data plus documented steps, mistakes are cheap: fix the step and rebuild. This is the same idea as version control for code.",
      "**Inherited data.** Data Carpentry notes we often receive spreadsheets built by others; treat what you receive as raw, save it untouched, and record its source and date in the README.",
      "**Sensitive raw data.** Raw files may contain names or contact details that later versions remove. Store them under stricter access, and follow the data management plan and ethics approval ({{data-management-plan}}, {{anonymisation}}).",
      "**What counts as raw.** For typed paper forms, the typed file is the first digital raw copy; keep the paper too, if the plan allows, so typing errors can be checked. For data from instruments or online forms, the first export is the raw copy: save it before any app opens and re-saves it, since opening a CSV in a spreadsheet can already change codes and dates."
     ]
    },
    related:["data-dictionaries","tidy-data-principles","data-validation-rules","backup","version-history","cleaning-log"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Formatting Data Tables in Spreadsheets”, section “Keeping track of your analyses”"}],
    sources:[{t:"Data Carpentry: Data Organization in Spreadsheets for Social Scientists (lesson source on GitHub)", url:"https://github.com/datacarpentry/spreadsheets-socialsci"},{t:"Broman & Woo (2018), Data Organization in Spreadsheets (manuscript source on GitHub)", url:"https://github.com/kbroman/Paper_DataOrg"}], checked:"2026-11"},

   {id:"data-validation-rules", title:"Validation rules in practice", aka:["data validation","Validity","input message","error alert","Stop Warning Information","Circle Invalid Data","Mark Invalid Data","dropdown from a range","custom formula validation","stepper","pop-up menu"], tags:["spreadsheets","data"],
    summary:"Turn the data dictionary into rules (ranges, dates, lists, lengths, unique IDs), choose how strict each is, explain it with an input message, and check afterwards for values that bypassed it.",
    levels:{
     starter:[
      "Data validation makes a spreadsheet check entries as they are typed. Data Carpentry’s examples: household members must be a whole number from 1 to 30, and wall type must come from a list. Track 1 showed the basics ({{sort-filter}}).",
      "Good rules come straight from your data dictionary:",
      {list:["a **range** for numbers (1–30)","a **date window** for dates (during the fieldwork)","a **list** for categories (a dropdown)","a **length** for codes (exactly 3 characters)"]},
      "Each rule can show a short **input message** when someone clicks the cell, and an **error alert** when they type something outside the rule. Some apps let you choose whether a bad entry is refused or just warned about.",
      "A **dropdown list** also makes typing faster: people pick “burntbricks” instead of remembering how to spell it, which is one of Data Carpentry’s arguments for lists.",
      {warn:"Validation only checks what is **typed**. Pasted values, filled values, formula results and data already in the cells get through. Check afterwards."}
     ],
     builder:[
      {table:[["App","Where","Strictness"],["Excel","Data → Data Validation (Settings, Input Message, Error Alert)","Stop, Warning or Information"],["Google Sheets","Data → Data validation → Add rule","Reject the input, or Show a warning"],["LibreOffice Calc","Data → Validity (Criteria, Input Help, Error Alert)","Stop, Warning, Information or Macro"]]},
      "Excel’s **Allow** options: Whole Number, Decimal, List, Date, Time, Text Length and Custom. LibreOffice has the same ideas (Whole Numbers, Decimal, Date, Time, Cell range, List, Text length, Custom). Google Sheets offers criteria such as dropdowns (typed or from a range), number and date comparisons, text tests and custom formulas.",
      "**Lists from a range.** Keep allowed values on a `lists` sheet and point the rule at it (Excel `=lists!$A$2:$A$6`; LibreOffice Cell range `$lists.$A$2:$A$6`; Google Sheets Dropdown from a range). Editing the list updates every rule.",
      "**Unique IDs.** Custom formula `=COUNTIF($A$2:$A$500, A2)=1` (select the range starting at A2 first, so the relative A2 adjusts for each row). Google Sheets accepts the same formula under **Custom formula is**.",
      "**Set rules before entry.** Data Carpentry recommends setting validation for every column when you set up the sheet, before any data goes in, because rules added later don’t check what is already there.",
      "**Numbers** has no general rules, but **Format → Cell → Data Format** offers a pop-up menu (up to 250 items), a checkbox, a star rating, and a stepper or slider with minimum, maximum and increment."
     ],
     pro:[
      "**Known gaps.** Microsoft states validation displays messages and prevents invalid entries only when data is typed; copying, filling, formulas and macros can put invalid data in. Data Carpentry adds that rules aren’t applied to data already present.",
      "**Finding invalid data.** Desktop Excel: **Data → Data Validation → Circle Invalid Data** (red circles, cleared with Clear Validation Circles; Microsoft says it may not be available on the web). LibreOffice: **Tools → Detective → Mark Invalid Data**. Google Sheets marks cells that break a warning-style rule. Everywhere: a check column such as `=AND(ISNUMBER(C2), C2>=1, C2<=30)` filtered for FALSE.",
      "**Choosing strictness.** Stop (or reject) for impossible values; Warning for unusual ones, so real [[outlier|outliers]] can still be recorded and flagged. Too strict a rule pushes people to type a wrong-but-allowed value instead.",
      "**Messages.** Data Carpentry recommends informative error alerts and input messages (“Please enter a whole number between 1 and 30”). They put the dictionary in front of the person typing.",
      "**Type protection is separate.** Validation doesn’t stop automatic type conversion of codes; set code columns to Text before entry, or turn off Excel’s automatic conversions where available ({{dates-in-data}}).",
      "**Forms.** For many people entering data, a form tool (such as Google Forms, Microsoft Forms or survey software) can validate each answer before it reaches the sheet ({{online-survey-tools}})."
     ]
    },
    related:["data-dictionaries","spreadsheet-data-entry","raw-data-raw","sort-filter","dates-in-data"],
    read:[{book:"dcss", where:"Data Organization in Spreadsheets for Social Scientists → “Quality Assurance”"},{book:"wss", where:"Chapter 11, Section 11.1 “Understanding Data, Data Validation, and Data Tables”"}],
    sources:[{t:"Microsoft Support: Apply data validation to cells", url:"https://support.microsoft.com/en-us/office/apply-data-validation-to-cells-29fecbcc-d1b9-42c1-9d76-eff3ce5f7249"},{t:"Microsoft Support: Display or hide circles around invalid data", url:"https://support.microsoft.com/en-us/office/display-or-hide-circles-around-invalid-data-69144e43-fc71-48e0-8d4f-0b9f1ea96c03"},{t:"Apple Support: Numbers User Guide for Mac, Add checkboxes and other controls to cells", url:"https://support.apple.com/guide/numbers/add-checkboxes-and-other-controls-to-cells-tan2a2aa073d/mac"}], checked:"2026-11"}
  ],
  terms:[
   {id:"observation-row", term:"Observation", def:"One unit you studied at one time, such as one household interview, one plot or one sale. In a tidy table, each observation has its own row.", codex:"tidy-data-principles"},
   {id:"variable-column", term:"Variable", def:"One property recorded for every observation, such as village, age or wall type. In a tidy table, each variable has its own column, holding values of one kind.", codex:"tidy-data-principles"},
   {id:"long-format", term:"Long format", def:"A layout where the thing that varies (such as month or test) has its own column and each measurement gets its own row. It grows by adding rows.", codex:"tidy-data-principles"},
   {id:"wide-format", term:"Wide format", def:"A layout where each repeated measurement has its own column (jan_mm, feb_mm …), giving one row per unit. Easy to read; grows by adding columns.", codex:"tidy-data-principles"},
   {id:"primary-key-sheet", term:"Key column (ID)", def:"A column whose value is unique for every row and never changes, such as hh_id, used to identify records and link tables. Databases call it a primary key.", codex:"tidy-data-principles"},
   {id:"indicator-column", term:"Indicator column", def:"A column that records a yes/no fact about each row, such as exclude = TRUE or flag = check, instead of using colour or formatting.", codex:"spreadsheet-data-entry"},
   {id:"missing-value", term:"Missing value", def:"A value that is unknown: not recorded, refused, lost or not asked. Different from zero, which is a real measurement.", codex:"missing-values"},
   {id:"na-value", term:"NA", def:"A common code for a missing value, short for “not available”. R and pandas read it as missing; a spreadsheet sees it as text.", codex:"missing-values"},
   {id:"data-dictionary", term:"Data dictionary", def:"A table describing each column of a dataset: its name, meaning, type, unit, allowed values and how missing values are recorded.", codex:"data-dictionaries"},
   {id:"iso-date", term:"ISO date", def:"A date written year-month-day with hyphens, such as 2026-04-03, following ISO 8601. Unambiguous, and sorts in time order even as text.", codex:"dates-in-data"},
   {id:"date-system", term:"Date system", def:"The starting day a spreadsheet counts dates from. Excel workbooks use the 1900 or the 1904 system, whose serial numbers differ by 1,462 days.", codex:"dates-in-data"},
   {id:"raw-data", term:"Raw data", def:"Data as it was first recorded, before any cleaning or rearranging. Keep it untouched and work on a copy.", codex:"raw-data-raw"},
   {id:"tsv", term:"TSV", def:"Tab-separated values: a plain-text table like a CSV, but with tabs between values. Useful where the comma is the decimal mark.", codex:"csv-files"},
   {id:"byte-order-mark", term:"Byte-order mark (BOM)", def:"An invisible marker some programs put at the start of a UTF-8 text file. Excel’s CSV UTF-8 adds one; a program that doesn’t expect it may show ï»¿ before the first column name.", codex:"csv-files"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t3u2-q01", lesson:"t3u2-l1", level:1, q:"Which is one of Data Carpentry’s tidy-data principles for spreadsheets?", options:[
     {t:"Leave the raw data raw: don’t change the original", ok:true, why:"It’s the fourth of the five principles: work on a copy so you always know where you started."},
     {t:"Use a separate tab for each day of data collection", why:"Data Carpentry advises against a tab per day; add a date column to one table instead."},
     {t:"Combine related facts in one cell to keep the sheet compact", why:"The third principle is the opposite: don’t combine several pieces of information in one cell."},
     {t:"Save analysis-ready data in the spreadsheet’s own format", why:"The fifth principle is to export cleaned data to a text-based format such as CSV."}
   ]},
   {id:"t3u2-q02", lesson:"t3u2-l1", level:2, q:"A cell in a livestock survey reads `3, (oxen , cows)`. What is the best fix?", options:[
     {t:"Give each kind of livestock its own count column (oxen, cows, goats …)", ok:true, why:"One fact per cell: each count becomes a number you can sum, average and filter, and the total is just the sum of the row."},
     {t:"Keep it, but use a semicolon instead of a comma", why:"Changing the punctuation still leaves three facts in one text cell that no function can use."},
     {t:"Move the text into a cell comment", why:"Analysis software can’t see cell comments, and the counts still wouldn’t be numbers."},
     {t:"Colour the cell to show it contains cows", why:"Colour isn’t data that formulas or CSV files can use."}
   ]},
   {id:"t3u2-q03", lesson:"t3u2-l1", level:1, q:"In a tidy table, what is an observation?", options:[
     {t:"One unit studied at one time, such as one household interview, stored as one row", ok:true, why:"Each observation gets its own row, and you should be able to say “one row = one what?”."},
     {t:"One property recorded for every unit, stored as a column", why:"That’s a variable. Variables are columns; observations are rows."},
     {t:"A note an interviewer writes about a household", why:"Notes may be recorded, in their own column, but an observation is the whole row about one unit."},
     {t:"A summary statistic such as a total", why:"Totals are calculated from observations and don’t belong among them."}
   ]},
   {id:"t3u2-q04", lesson:"t3u2-l1", level:3, q:"Priya records each café visit (date, table, number of customers) and, separately, each item ordered on that visit. She currently types all ordered items into one cell per visit. What structure do Broman and Woo’s ideas suggest?", options:[
     {t:"A visits table with a visit_id, and an orders table with one row per item, using the same visit_id", ok:true, why:"Two kinds of observation, two rectangles, linked by an ID. Visit facts are written once; each item is its own row."},
     {t:"One row per visit with columns item_1, item_2 … up to item_20", why:"That spreads one variable (item) across many columns and leaves most cells blank. One row per item is easier to count and filter."},
     {t:"Keep the items in one cell but separate them with line breaks", why:"Line breaks inside cells cause trouble in CSV files, and the items still can’t be counted."},
     {t:"A new tab for every day’s visits", why:"Tabs per day make combining and analysing harder; a date column does the job."}
   ]},
   {id:"t3u2-q05", lesson:"t3u2-l1", level:2, q:"A wide table has 25 students as rows and 6 quiz columns, plus a student_id column. Reshaped to long (student_id, quiz, score), how many data rows will it have?", options:[
     {t:"150", ok:true, why:"Each student-and-quiz pair becomes a row: 25 × 6 = 150."},
     {t:"25", why:"That’s the wide table’s row count. In long form each student has 6 rows."},
     {t:"31", why:"That adds 25 and 6. Each student gets a row for every quiz: multiply."},
     {t:"175", why:"That multiplies by 7, counting student_id as a quiz. Only the 6 quiz columns become rows."}
   ]},
   {id:"t3u2-q06", lesson:"t3u2-l1", level:2, q:"Which statement about long and wide formats is accurate?", options:[
     {t:"Either can be tidy, depending on what one observation is; long is usually easier for filtering, grouping and pivot tables", ok:true, why:"Tidiness depends on the observation. Long layouts suit most analysis tools, and pivot tables can make a wide summary from them."},
     {t:"Wide is always untidy and should never be used", why:"Wide layouts are fine for reading and for a few fixed measurements per unit, such as counts of each livestock type."},
     {t:"Long is only for databases, not spreadsheets", why:"Pivot tables, filters and SUMIF work best on long spreadsheet data."},
     {t:"Converting long to wide permanently loses data", why:"A pivot table builds a wide summary while the long data stays untouched underneath."}
   ]},
   {id:"t3u2-q07", lesson:"t3u2-l1", level:3, q:"Tomás inherits a sheet where the header row is repeated every 40 rows so it stays visible when printed. He’ll analyse the data in R. What should he do?", options:[
     {t:"Delete the repeated headers from the data and freeze the top row instead (print titles can repeat headers on paper)", ok:true, why:"Repeated headers become fake records for any program. Freezing panes, and the print setting that repeats title rows, keep headers visible without putting them in the data."},
     {t:"Leave them; R will skip any row that looks like a header", why:"R will read them as data rows, often turning number columns into text."},
     {t:"Colour the repeated headers grey so R ignores them", why:"Colour is invisible to R. The rows are still in the data."},
     {t:"Merge each repeated header across the columns", why:"Merging makes things worse: it breaks the rectangle and sorting."}
   ]},
   {id:"t3u2-q08", lesson:"t3u2-l1", level:1, q:"What makes a good key (ID) column?", options:[
     {t:"Unique for every row, never reused, stable over time, and stored as text if it has leading zeros or letters", ok:true, why:"These properties let the ID identify records, link tables and survive sorting and export."},
     {t:"The row number, because it’s always unique", why:"Row numbers change whenever rows are sorted, inserted or deleted."},
     {t:"The person’s surname, because it’s meaningful", why:"Surnames repeat and change; an ID should be unique and stable."},
     {t:"Any column, as long as it’s the first one", why:"Position doesn’t matter; uniqueness and stability do."}
   ]},
   {id:"t3u2-q09", lesson:"t3u2-l1", level:3, q:"Kenji’s helper column `=COUNTIF($A$2:$A$800, A2)` shows 1 on every row except two, which show 2. Both rows have the ID S-114 but different dates and sites. What should he conclude?", options:[
     {t:"Two different samples were given the same ID by mistake; he needs to check the source records and give one a new ID", ok:true, why:"Different dates and sites suggest two real samples, not a duplicate entry. Deleting one would lose data; check the paper records or the person who labelled them."},
     {t:"One row is a duplicate, so he can delete either one", why:"Different dates and sites mean the rows describe different things. Deleting would lose a real sample."},
     {t:"COUNTIF made a mistake because the IDs contain a hyphen", why:"COUNTIF matches text with hyphens perfectly well."},
     {t:"Nothing: an ID that appears twice is normal in a key column", why:"In a table where each row is one sample, the key must be unique. (It can repeat in a linked table, such as one listing several tests per sample.)"}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t3u2-q10", lesson:"t3u2-l2", level:1, q:"According to Broman and Woo, what is the first rule of data organisation?", options:[
     {t:"Be consistent", ok:true, why:"Whatever you do, do it the same way: codes, IDs, names, layouts, dates and notes."},
     {t:"Use as many tabs as you need", why:"That isn’t their rule, and Data Carpentry warns against spreading data across tabs."},
     {t:"Colour-code everything", why:"They advise against using colour or highlighting as data."},
     {t:"Always use Excel", why:"Their advice applies to any spreadsheet program."}
   ]},
   {id:"t3u2-q11", lesson:"t3u2-l2", level:1, q:"Which column name follows Data Carpentry’s and Broman and Woo’s advice best?", options:[
     {t:"`max_temp_c`", ok:true, why:"Short, meaningful, no spaces or symbols, and the unit is in the name."},
     {t:"`Maximum Temp (°C)`", why:"Spaces, brackets and a symbol make it awkward in R, Python and SQL."},
     {t:"`1st_temp`", why:"Names starting with a digit cause problems in many programs."},
     {t:"`mt`", why:"Too short to understand later. Short, but not too short."}
   ]},
   {id:"t3u2-q12", lesson:"t3u2-l2", level:2, q:"In Excel, Google Sheets and LibreOffice Calc, a column holds `Yes`, `yes`, `YES` and `yes ` (with a trailing space). What does `=COUNTIF(B2:B5, \"yes\")` return?", options:[
     {t:"3", ok:true, why:"COUNTIF ignores capitals, so Yes, yes and YES match. The trailing space makes `yes ` a different value."},
     {t:"4", why:"The trailing space makes one entry different; COUNTIF doesn’t trim spaces."},
     {t:"1", why:"COUNTIF isn’t case-sensitive, so it matches all three capitalisations."},
     {t:"0", why:"There are exact and case-variant matches; only the spaced one is missed."}
   ]},
   {id:"t3u2-q13", lesson:"t3u2-l2", level:2, q:"Where should the note “below detection limit” go for a measurement recorded as 0?", options:[
     {t:"In a separate note column, with 0 in the value cell", ok:true, why:"The value stays a number and the note is kept where people and programs can read it (Broman and Woo’s advice)."},
     {t:"In the value cell: `0 (below detection limit)`", why:"That turns the value into text, which calculations skip."},
     {t:"In a cell comment", why:"Most analysis software can’t see cell comments."},
     {t:"As red text colour on the 0", why:"Colour is lost in CSV files and invisible to formulas."}
   ]},
   {id:"t3u2-q14", lesson:"t3u2-l2", level:3, q:"Hana’s supervisor highlighted suspicious rows in yellow. Hana needs to exclude them in R. What should she do in the spreadsheet first?", options:[
     {t:"Add a column such as `suspect` with TRUE for the highlighted rows and FALSE for the rest", ok:true, why:"R can filter on a column; it can’t see highlighting. A conditional format can then keep the yellow for people."},
     {t:"Save as CSV; the colour will be kept as a code", why:"CSV keeps no formatting, so the information would be lost."},
     {t:"Nothing; R reads cell colours automatically", why:"Standard ways of reading data in R don’t read cell colours."},
     {t:"Delete the yellow rows from the original file", why:"That loses data and changes the raw file. Flag them in a column and decide in the analysis."}
   ]},
   {id:"t3u2-q15", lesson:"t3u2-l2", level:2, q:"Why is leaving cells blank to mean “same as the row above” risky?", options:[
     {t:"Programs read the blanks as missing values, and after sorting there may be no way to tell which value each blank meant", ok:true, why:"Broman and Woo point out exactly this. Fill the value in every row."},
     {t:"Blank cells make the file much larger", why:"Blanks take almost no space; the problem is meaning, not size."},
     {t:"Spreadsheets refuse to sort columns with blanks", why:"They sort them fine, which is what separates the blanks from the rows they belonged with."},
     {t:"Blanks are converted to zeros when saved", why:"Blanks stay blank in a saved file; the issue is that they read as missing."}
   ]},
   {id:"t3u2-q16", lesson:"t3u2-l2", level:3, q:"Dmitri pastes a column of city names from a web page into Excel. `=TRIM(A2)=\"Lima\"` gives FALSE although the cell shows Lima. What should he try?", options:[
     {t:"Replace non-breaking spaces first: `=TRIM(SUBSTITUTE(A2, CHAR(160), \" \"))`", ok:true, why:"Web pages often contain non-breaking spaces (character 160), which Excel’s TRIM doesn’t remove, according to Microsoft’s help."},
     {t:"Make the column wider", why:"Width changes only the display; the cell still contains an extra character."},
     {t:"Format the column as Text", why:"The values are already text; the hidden character is still there."},
     {t:"Use a bigger font", why:"Fonts don’t change cell contents."}
   ]},
   {id:"t3u2-q17", lesson:"t3u2-l2", level:1, q:"Which is the best way to paste text from a word processor into a data sheet?", options:[
     {t:"Paste values only (Paste Values, Values only, Paste Unformatted Text, or Paste and Match Style)", ok:true, why:"It brings in the text without fonts, colours and other formatting."},
     {t:"An ordinary paste, then delete the formatting cell by cell", why:"Slow and easy to miss something; paste values only does it at once."},
     {t:"Take a screenshot and insert it", why:"An image isn’t data; nothing in it can be sorted or calculated."},
     {t:"Paste into a cell comment", why:"Comments aren’t data that analysis software can read."}
   ]},
   {id:"t3u2-q18", lesson:"t3u2-l2", level:3, q:"Lucía’s team uses the codes `S01`, `s1`, `Site 1` and `site-01` for the same site across four monthly files. What will happen when the files are combined for analysis?", options:[
     {t:"The site will appear as four different categories until someone harmonises the codes", ok:true, why:"Programs treat each spelling as a separate value. Broman and Woo’s point: consistent identifiers and layouts across files save this work."},
     {t:"Analysis software will recognise they’re the same site", why:"Programs compare characters exactly (R and Python even distinguish capitals); they can’t know these mean the same."},
     {t:"Only the first file’s code will be kept", why:"Combining files keeps every value as written."},
     {t:"Nothing, as long as the files are CSV", why:"File format doesn’t change the values; the inconsistency travels with them."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t3u2-q19", lesson:"t3u2-l3", level:1, q:"What is the difference between a 0 and a blank in a count column?", options:[
     {t:"0 means you counted and found none; a blank means the value is unknown", ok:true, why:"Data Carpentry: a zero is data, a blank is read as missing. Record zeros as zeros."},
     {t:"There is no difference; both mean none", why:"Programs treat them differently: AVERAGE skips a blank but includes a 0."},
     {t:"A blank means zero, and 0 means unknown", why:"It’s the other way round."},
     {t:"Blanks are for text columns and zeros for number columns", why:"Both kinds of column can have missing values; zero is only for real zeros."}
   ]},
   {id:"t3u2-q20", lesson:"t3u2-l3", level:2, q:"Five scores are 6, 8, (blank), 7, 9. What does `=AVERAGE()` of the five cells return?", options:[
     {t:"7.5", ok:true, why:"AVERAGE skips the blank: (6 + 8 + 7 + 9) ÷ 4 = 30 ÷ 4 = 7.5."},
     {t:"6", why:"That divides 30 by 5, treating the blank as 0. AVERAGE leaves blanks out."},
     {t:"30", why:"30 is the total of the four scores. AVERAGE divides it by the number of values, 4."},
     {t:"#VALUE!", why:"AVERAGE simply skips blanks; it doesn’t give an error."}
   ]},
   {id:"t3u2-q21", lesson:"t3u2-l3", level:2, q:"Which missing-value code do both Data Carpentry and Broman and Woo say to avoid?", options:[
     {t:"−999", ok:true, why:"Numeric codes aren’t recognised as missing and get included in calculations."},
     {t:"A blank cell", why:"Data Carpentry calls blanks the best option; Broman and Woo prefer NA but don’t ban blanks."},
     {t:"NA", why:"Data Carpentry calls NA a good option (for R), and Broman and Woo prefer it."},
     {t:"Any code at all, as long as it’s written in the dictionary", why:"Documentation matters, but a numeric code is still risky because programs average it."}
   ]},
   {id:"t3u2-q22", lesson:"t3u2-l3", level:1, q:"In a spreadsheet, what does `=A2+A3` give if A2 is 10 and A3 contains the text NA?", options:[
     {t:"#VALUE!", ok:true, why:"Arithmetic on text fails visibly, which is one advantage of a text missing code."},
     {t:"10", why:"That’s what you’d get if A3 were blank: blanks count as 0 in arithmetic."},
     {t:"NA", why:"Spreadsheets don’t pass the text through; they report an error."},
     {t:"0", why:"The calculation can’t be done, so it gives an error rather than a number."}
   ]},
   {id:"t3u2-q23", lesson:"t3u2-l3", level:3, q:"Sione’s survey has an income column. Some people refused, some weren’t asked because they have no paid work. How should he record this?", options:[
     {t:"The missing-value code in the income column, and the reason (refused / not asked) in a separate column", ok:true, why:"The value cell holds the value or the code; the reason is information of its own, kept in its own column."},
     {t:"Type “refused” or “not asked” in the income column", why:"That makes the column text and mixes values with notes. Broman and Woo advise a separate notes column."},
     {t:"Type 0 for both", why:"Zero would claim these people have no income, which isn’t what was recorded."},
     {t:"Leave both blank and explain nothing", why:"The reasons mean different things and would be lost."}
   ]},
   {id:"t3u2-q24", lesson:"t3u2-l3", level:2, q:"Ana’s CSV uses `-` for missing ages. Her colleague loads it with Python’s pandas library using the default settings. What is likely to happen?", options:[
     {t:"The `-` isn’t recognised as missing, so the age column is read as text instead of numbers", ok:true, why:"pandas recognises codes such as blank, NA and N/A by default, but not a lone hyphen; one unrecognised code turns the whole column into text."},
     {t:"pandas replaces each `-` with 0", why:"pandas doesn’t invent zeros; it keeps the hyphen as text."},
     {t:"pandas deletes the rows with `-`", why:"Rows are kept; the column’s type is what changes."},
     {t:"Nothing: every program treats `-` as missing", why:"Data Carpentry lists `-` among codes to avoid because many programs don’t."}
   ]},
   {id:"t3u2-q25", lesson:"t3u2-l3", level:1, q:"What does a data dictionary describe?", options:[
     {t:"Each column: its name, meaning, type, unit, allowed values and missing-value code", ok:true, why:"It’s documentation about the variables, so others (and future you) can interpret and check the data."},
     {t:"The definitions of everyday words used in the survey questions", why:"A data dictionary is about the dataset’s columns, not a language dictionary."},
     {t:"Every row of the data, with a comment", why:"It describes columns, not individual rows."},
     {t:"The formulas used in the workbook", why:"Formulas may be noted in cleaning notes; a dictionary describes the variables."}
   ]},
   {id:"t3u2-q26", lesson:"t3u2-l3", level:2, q:"Where does Data Carpentry recommend keeping metadata such as column explanations?", options:[
     {t:"In a separate file, such as plain text, next to the data file", ok:true, why:"Metadata in the data file can disrupt how programs read it; a separate, clearly named file keeps both usable."},
     {t:"In the first few rows of the data sheet, above the headers", why:"Notes above the headers break the rectangle that programs expect."},
     {t:"In cell comments on each header", why:"Comments aren’t visible to most analysis software and are lost in CSV."},
     {t:"Nowhere: tidy data explains itself", why:"Even tidy columns need definitions, units and codes explained."}
   ]},
   {id:"t3u2-q27", lesson:"t3u2-l3", level:3, q:"Fatima’s country list uses ISO two-letter codes, and her team types NA for missing values. A collaborator says Namibia vanished in R. What is the best fix?", options:[
     {t:"Tell R not to treat NA as missing for the country-code column (or use a different missing code), and document the choice", ok:true, why:"NA is Namibia’s code and R’s default missing value. Overriding the default for that column, or changing the code, and writing it down fixes it."},
     {t:"Delete Namibia from the dataset", why:"That loses real data to work around a coding clash."},
     {t:"Switch to −999 for missing values", why:"That creates a worse problem: numeric codes get included in calculations."},
     {t:"Convert the file to .xlsx", why:"The clash is between a value and a code, whatever the file format."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t3u2-q28", lesson:"t3u2-l4", level:1, q:"In Data Carpentry’s example, 2 July 2014 is stored in Excel as 41822. What does `=B2+90` give if B2 holds that date?", options:[
     {t:"41912, shown as 30 September 2014", ok:true, why:"Dates are day counts, so adding 90 adds 90 days; the app handles month lengths."},
     {t:"2 October 2014, because 90 days is three months", why:"Three months from 2 July is 2 October, but 90 days is 30 September."},
     {t:"An error, because you can’t add to a date", why:"You can: underneath, the date is a number."},
     {t:"2 July 2104, because 90 is added to the year", why:"Adding a number adds days, not years."}
   ]},
   {id:"t3u2-q29", lesson:"t3u2-l4", level:1, q:"How far apart are Excel’s 1900 and 1904 date systems?", options:[
     {t:"1,462 days", ok:true, why:"Microsoft gives 1,462 days: four years and one day, including one leap day."},
     {t:"365 days", why:"That’s one year; the systems differ by about four."},
     {t:"4 days", why:"The difference is about four years, not four days."},
     {t:"1,904 days", why:"1904 is the year the second system starts from, not the difference."}
   ]},
   {id:"t3u2-q30", lesson:"t3u2-l4", level:3, q:"Kenji’s spreadsheet reads dates month first. A colleague in a day-first country types 03/05/2026 (3 May), 14/05/2026 and 28/05/2026. What does the column end up holding?", options:[
     {t:"5 March 2026 as a real date, and the other two as text", ok:true, why:"03/05 is a valid month-first date (March 5), so it becomes the wrong date; 14 and 28 aren’t months, so those stay as text. A half-wrong column with no error."},
     {t:"Three correct dates in May", why:"The sheet reads month first, so 03/05 becomes 5 March, and the others can’t be read as dates."},
     {t:"Three errors", why:"Spreadsheets don’t show errors here; they quietly store a date or text."},
     {t:"Three text entries", why:"03/05/2026 is a valid month-first date, so it becomes a (wrong) real date."}
   ]},
   {id:"t3u2-q31", lesson:"t3u2-l4", level:2, q:"Which format do Broman and Woo strongly recommend for dates?", options:[
     {t:"YYYY-MM-DD, the ISO 8601 standard", ok:true, why:"It has only one reading and sorts in time order."},
     {t:"DD/MM/YYYY", why:"Day-first dates are misread in month-first locales."},
     {t:"MM/DD/YY", why:"Two-digit years and month-first order add ambiguity."},
     {t:"Whatever your computer shows by default", why:"Defaults differ between computers, which is exactly the problem."}
   ]},
   {id:"t3u2-q32", lesson:"t3u2-l4", level:2, q:"Data Carpentry suggests splitting dates into separate year, month and day columns. What is the main advantage?", options:[
     {t:"The parts are plain numbers that no app or locale reinterprets, and partial dates are easy", ok:true, why:"Separate numbers avoid day/month confusion and date-system differences; a missing day can simply be blank."},
     {t:"It makes date arithmetic easier", why:"You need DATE() to rebuild a date before subtracting, so arithmetic is slightly harder."},
     {t:"It saves space in the file", why:"Three columns take more space, not less; the benefit is safety."},
     {t:"Spreadsheets can’t store dates in one column", why:"They can; the issue is how reliably dates survive moves between apps and countries."}
   ]},
   {id:"t3u2-q33", lesson:"t3u2-l4", level:3, q:"Amara types a list of age bands (`1-2`, `3-5`, `6-12`) into a new Excel sheet with default settings. What is likely, and how can she prevent it?", options:[
     {t:"Some become dates (such as 1 February or 2 January); she should format the column as Text before typing", ok:true, why:"Number-dash-number looks like a date. Text format set beforehand keeps each band as typed."},
     {t:"They become subtraction results (−1, −2, −6); she should add an equals sign", why:"Without an equals sign, nothing is calculated; the risk is date conversion."},
     {t:"Nothing changes; Excel never converts entries with hyphens", why:"Entries such as 1-2 are typical date conversions."},
     {t:"They become text automatically, so no action is needed", why:"With the default General format, Excel guesses, and 1-2 looks like a date."}
   ]},
   {id:"t3u2-q34", lesson:"t3u2-l4", level:2, q:"What did Abeysooriya and colleagues (2021) find when they tested how apps handle gene names?", options:[
     {t:"Excel and Google Sheets converted them to dates whether the data was opened, pasted or typed; LibreOffice and Gnumeric didn’t in their tests", ok:true, why:"That’s their result; formatting cells as text first prevented conversion in Excel and Google Sheets."},
     {t:"Only very old versions of Excel convert gene names", why:"They tested Excel 365, which converted them with default settings."},
     {t:"All four apps converted them in every case", why:"LibreOffice and Gnumeric did not convert them in their tests."},
     {t:"No app converts gene names when pasting", why:"Excel and Google Sheets converted them when pasting too."}
   ]},
   {id:"t3u2-q35", lesson:"t3u2-l4", level:2, q:"Which is true of Excel’s Automatic Data Conversion settings?", options:[
     {t:"They let you switch off conversions such as dropping leading zeros or turning JAN1 into a date, but they’re on by default and only affect that copy of Excel", ok:true, why:"Microsoft lists them for Excel for Microsoft 365 and Excel 2024; collaborators’ apps still convert unless they change their own settings."},
     {t:"They are off by default, so Excel no longer converts anything", why:"The conversions remain on by default; you have to switch them off."},
     {t:"They stop every app that opens your file from converting data", why:"They’re a setting of your Excel only, not of the file."},
     {t:"They are only available in Excel for the web", why:"Microsoft describes them for desktop Excel on Windows (File → Options → Data) and Mac (Excel → Preferences → Edit)."}
   ]},
   {id:"t3u2-q36", lesson:"t3u2-l4", level:3, q:"Mei is transcribing a family history with dates from 1871 to 1950 into Excel. What does Data Carpentry warn about, and what is a safe approach?", options:[
     {t:"Excel can’t store dates before 1900 as real dates and leaves them as text, so the column will be mixed; record year, month and day in separate columns", ok:true, why:"Excel’s 1900 system starts on 1 January 1900. Separate number columns treat every year the same way in every app."},
     {t:"Excel converts all dates before 1900 into the year 1900", why:"It leaves them as text rather than changing them, which makes a mixed column."},
     {t:"There is no problem; Excel handles any date in history", why:"Excel’s date system starts in 1900, so earlier dates aren’t real dates there."},
     {t:"She should type only the years and invent 1 January for every date", why:"Inventing days records more than she knows; separate columns let the day and month be blank when unknown."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t3u2-q37", lesson:"t3u2-l5", level:1, q:"What does “keep raw data raw” mean in practice?", options:[
     {t:"Keep the original file untouched (ideally read-only and backed up) and do all cleaning in a copy, noting each step", ok:true, why:"Then any mistake in cleaning can be found and redone from the original."},
     {t:"Never clean data at all", why:"Cleaning is fine and often necessary; it just happens in a copy."},
     {t:"Store data only on paper", why:"Raw data can be digital; the point is not editing the original."},
     {t:"Delete the original once the clean version is ready", why:"That removes the only way to check or redo the cleaning."}
   ]},
   {id:"t3u2-q38", lesson:"t3u2-l5", level:2, q:"Why do Broman and Woo advise against calculations and charts in the primary data file?", options:[
     {t:"Opening the file often to work on it risks typing into the data by accident", ok:true, why:"Their reasoning: the primary file should be a pristine store of data; analysis happens in a copy."},
     {t:"Spreadsheets can’t calculate and store data in the same file", why:"They can; the concern is protecting the raw data."},
     {t:"Charts make the file too large to open", why:"Size isn’t their argument; accidental changes are."},
     {t:"Formulas are not allowed in CSV files", why:"True that CSV keeps only results, but their point is about the raw file, whatever its format."}
   ]},
   {id:"t3u2-q39", lesson:"t3u2-l5", level:2, q:"In desktop Excel, which data validation error style refuses an invalid entry outright?", options:[
     {t:"Stop", ok:true, why:"Stop doesn’t allow the entry; Warning asks whether to continue; Information only informs."},
     {t:"Warning", why:"Warning lets the person choose to keep the value."},
     {t:"Information", why:"Information shows a message but accepts the value."},
     {t:"Input Message", why:"An input message is the help shown when a cell is selected, not an error style."}
   ]},
   {id:"t3u2-q40", lesson:"t3u2-l5", level:3, q:"Oluwaseun added a 1–30 rule to the members column after the data was entered. How can he find values that already break the rule?", options:[
     {t:"Use Circle Invalid Data (desktop Excel) or Mark Invalid Data (LibreOffice), or a check column filtered for FALSE", ok:true, why:"Rules don’t check existing data; these tools mark every cell that breaks the rule."},
     {t:"Nothing is needed: new rules automatically fix old values", why:"Rules never change existing values, and they don’t check them either."},
     {t:"Delete and retype the whole column", why:"Slow and error-prone; marking invalid cells finds just the ones to check."},
     {t:"Sort by colour", why:"Invalid values aren’t coloured unless you use a marking tool or a check."}
   ]},
   {id:"t3u2-q41", lesson:"t3u2-l5", level:2, q:"Which values can get past Excel’s data validation, according to Microsoft?", options:[
     {t:"Values that are copied or filled in, results of formulas, and values entered by macros", ok:true, why:"Validation acts only on typing; these routes bypass it."},
     {t:"Only values typed in capital letters", why:"Capital letters have nothing to do with it."},
     {t:"Values typed on a Mac", why:"Validation works the same on Windows and Mac."},
     {t:"Nothing can get past it", why:"Microsoft is explicit that copying, filling, formulas and macros can."}
   ]},
   {id:"t3u2-q42", lesson:"t3u2-l5", level:2, q:"A cell holds 0.123456 formatted to show two decimals. You export the sheet to CSV in LibreOffice Calc with default settings. What does the CSV contain for that cell?", options:[
     {t:"0.12", ok:true, why:"“Save cell content as shown” is on by default, so the displayed value is written."},
     {t:"0.123456", why:"That would require unticking “Save cell content as shown”."},
     {t:"12%", why:"Only if the cell were formatted as a percentage."},
     {t:"Nothing: formatted cells are skipped", why:"Every cell’s value is written, as displayed."}
   ]},
   {id:"t3u2-q43", lesson:"t3u2-l5", level:3, q:"Lucía in Spain sends a “CSV” from Excel for Windows. Her colleague’s app puts each whole line into column A. What’s the likely cause and fix?", options:[
     {t:"Her Excel used semicolons as separators (because her region uses a decimal comma); import it choosing semicolon as the separator", ok:true, why:"Microsoft explains that with a comma decimal separator, Excel uses a semicolon list separator. Import dialogs let you choose it."},
     {t:"The file is corrupted and must be recreated", why:"The data is fine; it’s separated by a different character."},
     {t:"CSV files can’t be opened in other countries", why:"They can, once the separator is set correctly."},
     {t:"The colleague needs a newer computer", why:"The issue is the separator setting, not the hardware."}
   ]},
   {id:"t3u2-q44", lesson:"t3u2-l5", level:1, q:"Which encoding should you choose when exporting a CSV that contains names in several languages?", options:[
     {t:"UTF-8", ok:true, why:"UTF-8 can store every writing system and is the web’s standard."},
     {t:"Whatever the oldest option in the list is", why:"Older region-specific encodings can’t store many scripts."},
     {t:"ASCII", why:"ASCII has no accented letters or non-Latin scripts."},
     {t:"Encoding doesn’t matter for CSV", why:"A CSV is text, so its encoding decides whether names survive."}
   ]},
   {id:"t3u2-q45", lesson:"t3u2-l5", level:3, q:"Priya will share a cleaned dataset with a partner organisation. Which package best follows this unit’s advice?", options:[
     {t:"A UTF-8 CSV with ISO dates and one missing code, plus a data dictionary and a README, with the raw file kept safely at her end", ok:true, why:"Plain text that any program reads, documented codes and formats, and an untouched original."},
     {t:"Her working .xlsx file with colour-coded rows and a notes tab", why:"Colour isn’t data, and the partner may read the file differently; a CSV plus documentation is clearer."},
     {t:"A CSV only, since tidy data explains itself", why:"Without a dictionary and README, the partner can’t know units, codes, separator or date format."},
     {t:"Screenshots of the spreadsheet in a PDF", why:"Nobody can analyse data from screenshots."}
   ]}
  ]
});
