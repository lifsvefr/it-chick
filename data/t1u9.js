/* Track 1 · Unit 9 · Spreadsheets from scratch */
ICA.addUnit({
  id:"t1u9", track:"t1", n:9, title:"Spreadsheets from scratch", icon:"📊",
  apps:{ms:"Excel", google:"Google Sheets", libre:"LibreOffice Calc", apple:"Numbers"},
  blurb:"How a spreadsheet really thinks: what a cell holds, how formulas and references work when you copy them, the functions people use every day, how to keep data tidy enough to sort and filter safely, and how to chart it and share it as CSV without losing anything.",
  goals:[
    "Tell numbers, text, dates and blanks apart, and keep codes such as phone numbers and postcodes from being changed",
    "Write formulas that respect the order of operations, and use relative, absolute and mixed references so copies stay correct",
    "Use SUM, AVERAGE, COUNT, COUNTA, MIN, MAX, ROUND, IF, COUNTIF, SUMIF, XLOOKUP and VLOOKUP, and read the error values they produce",
    "Organise data as a tidy table, then sort, filter, freeze headers and add data validation without scrambling rows",
    "Choose a chart that answers the question honestly, and export or import CSV files without losing zeros, accents or sheets"
  ],
  read:[
    {book:"wss", where:"Chapter 9, “Working with Spreadsheets”, Sections 9.1–9.8 (Excel in 9.1–9.4, Google Sheets in 9.5–9.8)", note:"The book’s basic spreadsheet chapter, with screenshots of both apps. Menus have moved a little since 2023; the lessons say where."},
    {book:"wss", where:"Chapter 10, “Advanced Excel Formulas, Functions, and Techniques”, Section 10.2 “More About Formulas”, Section 10.3 “Using Arithmetic, Statistical, and Logical Functions” and Section 10.5 “Auditing Formulas and Fixing Errors”", note:"References, order of operations, IF, COUNTIF and SUMIF, and the error values."},
    {book:"wss", where:"Chapter 11, “Advanced Excel Spreadsheets: Statistical and Data Analysis”, Section 11.1 “Understanding Data, Data Validation, and Data Tables” and Section 11.5 “Data Analysis Charts”", note:"Data validation, filtering, and choosing charts, including a short piece on misleading graphs."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t1u9-l1", title:"Cells, data and types", minutes:50,
   goals:[
     "Name the parts of a spreadsheet: workbook, worksheet, cell, cell reference and range",
     "Tell numbers, text, dates and blanks apart, and use alignment as a clue",
     "Explain why dates are stored as numbers and why number formats change only the look",
     "Keep leading zeros and long codes safe, and explain how automatic conversion damaged gene names in research"
   ],
   learn:[
    {h:"A grid that calculates", body:[
      {lead:"A spreadsheet is squared paper where every square can hold a value, or a small calculation that updates itself when the values change."},
      "A [[spreadsheet]] app (Microsoft Excel, Google Sheets, LibreOffice Calc and Apple Numbers are the common ones) stores information in a grid. People use spreadsheets for household budgets, class marks, a bakery’s price list, a sports club’s membership, research data and much more.",
      "The vocabulary is the same in every app:",
      {table:[
        ["Word","What it means"],
        ["[[workbook|Workbook]]","The whole file. In Google Sheets it’s called a spreadsheet; in Numbers, a spreadsheet document."],
        ["[[worksheet|Worksheet]] (sheet)","One page of the grid, shown as a tab at the bottom (or the top in Numbers). A workbook can hold many."],
        ["[[cell|Cell]]","One box of the grid, where a column meets a row."],
        ["[[cell-reference|Cell reference]]","A cell’s address: column letter then row number, such as `B2`."],
        ["[[range|Range]]","A rectangular block of cells, written first cell, colon, last cell: `A2:A4` or `B2:D10`."]
      ]},
      "Columns are lettered (A, B, … Z, then AA, AB …) and rows are numbered. The **name box** shows the address of the selected cell, and the [[formula-bar|formula bar]] shows what the cell really contains, which is not always what the cell displays. Keep an eye on the formula bar: it’s the single most useful habit in this unit.",
      {fig:'<svg viewBox="0 0 340 300"><rect class="d-panel" x="10" y="10" width="48" height="28" rx="4" stroke-width="1.5"/><text x="34" y="29" text-anchor="middle">B2</text><rect class="d-panel" x="64" y="10" width="266" height="28" rx="4" stroke-width="1.5"/><text x="74" y="29">2026-03-02</text><text class="s" x="34" y="54" text-anchor="middle">name box</text><text class="s" x="197" y="54" text-anchor="middle">formula bar: what the cell holds</text><rect class="d-panel" x="10" y="64" width="26" height="24" stroke-width="1"/><rect class="d-panel" x="36" y="64" width="90" height="24" stroke-width="1"/><rect class="d-panel" x="126" y="64" width="102" height="24" stroke-width="1"/><rect class="d-panel" x="228" y="64" width="102" height="24" stroke-width="1"/><text x="81" y="81" text-anchor="middle">A</text><text x="177" y="81" text-anchor="middle">B</text><text x="279" y="81" text-anchor="middle">C</text><rect class="d-panel" x="10" y="88" width="26" height="112" stroke-width="1"/><text x="23" y="107" text-anchor="middle">1</text><text x="23" y="135" text-anchor="middle">2</text><text x="23" y="163" text-anchor="middle">3</text><text x="23" y="191" text-anchor="middle">4</text><rect class="d-soft" x="36" y="88" width="294" height="112" stroke-width="1"/><path class="d-soft" d="M36,116 L330,116 M36,144 L330,144 M36,172 L330,172 M126,88 L126,200 M228,88 L228,200" stroke-width="1"/><rect class="d-lup" x="36" y="116" width="90" height="84" stroke-width="2"/><rect class="d-rose" x="126" y="116" width="102" height="28" stroke-width="2.5"/><text x="42" y="107">Book</text><text x="134" y="107">Borrowed</text><text x="236" y="107">Returned</text><text x="42" y="135">Atlas</text><text x="222" y="135" text-anchor="end">2026-03-02</text><text x="324" y="135" text-anchor="end">2026-03-23</text><text x="42" y="163">Poems</text><text x="222" y="163" text-anchor="end">2026-03-05</text><text x="324" y="163" text-anchor="end">2026-03-19</text><text x="42" y="191">Recipes</text><text x="222" y="191" text-anchor="end">2026-03-09</text><text x="324" y="191" text-anchor="end">2026-03-30</text><rect class="d-rose" x="10" y="214" width="16" height="14" stroke-width="2"/><text x="34" y="226">cell B2: column B, row 2</text><rect class="d-lup" x="10" y="238" width="16" height="14" stroke-width="2"/><text x="34" y="250">range A2:A4: a block of three cells</text><text class="s" x="10" y="274">Text lines up on the left;</text><text class="s" x="10" y="290">dates and numbers line up on the right.</text></svg>', alt:"A small spreadsheet. At the top, the name box shows B2 and the formula bar shows 2026-03-02. Below, a grid with column letters A, B, C and row numbers 1 to 4. Row 1 has the headings Book, Borrowed, Returned. Rows 2 to 4 list Atlas, Poems and Recipes with borrowed and returned dates. Cell B2 is outlined in rose; the range A2 to A4 is shaded lupine. A note says text lines up on the left and dates and numbers line up on the right.", cap:"Addresses in a library-loan sheet. How a date is displayed depends on the cell’s date format and your settings."},
      {tip:"Numbers works a little differently: each sheet can hold several separate tables floating on a canvas, and each table has its own A1. A reference to another table looks like `Table 2::B2`."}
    ]},
    {h:"What a cell can hold", body:[
      "Each cell holds one thing. When you type, the app decides what kind of thing it is. The kind matters, because it decides what calculations work.",
      {table:[
        ["Kind","Examples","What the app can do with it"],
        ["Number","`42`, `3.5`, `-12`, `25%`","Add, average, compare, chart"],
        ["Text","`Ana Souza`, `Paid`, `Room 4B`","Sort alphabetically, count, match"],
        ["Date or time","`2026-03-02`, `14:30`","Subtract to get days, sort by date, group by month"],
        ["Blank","an empty cell","Usually ignored by functions, but counts as 0 in arithmetic"],
        ["Formula","`=B2*C2`","Shows a result; recalculates when the inputs change"]
      ]},
      "There are also logical values, `TRUE` and `FALSE`, which formulas produce when they compare things. You’ll meet them with IF in Lesson 3.",
      "**The alignment clue.** Unless someone changed the alignment by hand, every app lines **text up on the left** (in left-to-right languages) and **numbers and dates up on the right**. So if a column of prices has one value sitting on the left, that value is probably text that only looks like a number, and calculations will treat it differently. Section 5 shows what goes wrong."
    ]},
    {h:"Dates are numbers in disguise", body:[
      "Here is the surprise that explains a lot of spreadsheet behaviour: **a date is stored as a number**, a count of days from a fixed starting day. That number is called a [[date-serial|date serial number]]. Times are fractions of a day, so 12:00 noon is 0.5.",
      "Microsoft’s own example: in Excel’s usual 1900 date system, **5 July 2011 is stored as 40729**. Google Sheets counts days since 30 December 1899, and LibreOffice Calc uses that same starting day by default, so for any date after March 1900 all three give the same number. Numbers treats dates as their own date-and-time type rather than showing you a serial number, but it still calculates with them.",
      "Because dates are numbers, you can do arithmetic with them:",
      {ex:"Sheet: library loans (from the diagram)\nB2  2026-03-02   (borrowed)\nC2  2026-03-23   (returned)\nD2  =C2-B2\n\nResult: 21 (days on loan)\nBehind the scenes: 46104 − 46083 = 21", label:"Worked example: days between two dates", mono:true},
      "If the answer appears as a strange date such as 21/01/1900, the app has guessed the wrong format for the result. The value is right (21); change the cell’s format to Number. (In Numbers, the result of subtracting two dates is a duration, which may be shown as something like 3w or 21d: the same length of time, written differently.)",
      {warn:"`03/04/2026` means 3 April in most of the world and March 4 in the United States. A spreadsheet reads typed dates using its locale (Lesson 2), so the same keystrokes can become different dates. Typing dates as year-month-day, such as `2026-04-03` (the ISO 8601 style from Unit 2), is unambiguous and recognised as a date by the major apps."},
      {lab:"fl-days", t:"Practise: subtract two dates to get the days between them"}
    ]},
    {h:"Formats change the look, not the value", body:[
      "A [[number-format|number format]] controls how a value is **displayed**: decimal places, a currency symbol, a percent sign, a date style. It does not change the value the cell holds.",
      {table:[
        ["The cell holds","Format","The cell shows"],
        ["`0.25`","Percent","25%"],
        ["`0.25`","Fraction","1/4"],
        ["`1234.5`","Currency, 2 decimals","$1,234.50 or 1.234,50 € (depends on locale)"],
        ["`46083`","Date","2026-03-02, 02/03/2026 or 3/2/2026"],
        ["`1.26`","Number, 1 decimal","1.3"]
      ]},
      "That last row can fool you. Suppose A1 and A2 both hold `1.26`, formatted to show one decimal place. They both display **1.3**. A3 holds `=A1+A2`, also showing one decimal. You might expect 2.6, but A3 shows **2.5**, because the real total is 2.52. Nothing is broken: the display is rounded, the values are not.",
      {key:"The cell shows the format. The formula bar shows the value. Calculations always use the value."},
      "Where the menus are: Excel uses the **Number Format** box on the Home tab (or [[kbd:Ctrl]] + [[kbd:1]] for all options). Google Sheets uses **Format → Number**. LibreOffice Calc uses **Format → Cells → Numbers**. Numbers uses the **Format** sidebar → **Cell** tab → **Data Format**. Lesson 3 shows when to use the ROUND function instead, which really does change the value.",
      {lab:"fl-add", t:"Practise: a first formula that adds cells by their addresses (Lesson 2 explains formulas fully)"}
    ]},
    {h:"Numbers stored as text", body:[
      "Sometimes a cell **looks** like a number but holds text. Common causes: data copied from a web page or PDF, a hidden space before or after the digits, a leading apostrophe, a column that was formatted as Text before the numbers were typed, or an imported file.",
      "It matters because most functions skip text. Priya records her bakery’s cake sales: `12`, `15` and `9`. But the `15` was pasted from an email and is text. `=SUM(B2:B4)` returns **21**, not 36, with no error message.",
      {list:[
        "**The clue:** the 15 sits on the left of its cell while 12 and 9 sit on the right.",
        "**Desktop Excel** puts a small green triangle in the corner of such cells. Select the cell, click the warning icon and choose **Convert to Number**.",
        "**LibreOffice Calc** has **View → Value Highlighting**, which shows text in black, numbers in blue and formulas in green until you turn it off.",
        "**Any app:** retype the value, or use `=VALUE(B3)` in a spare cell to turn the text into a number."
      ]},
      {tip:"After pasting data, select the column and glance at the alignment, or at a quick SUM in the status bar at the bottom of the window. A total that’s too small is often a number stored as text."}
    ]},
    {h:"Codes that look like numbers", body:[
      "Phone numbers, postcodes, product codes, student IDs and bank account numbers are made of digits, but they are **labels**, not quantities. Nobody adds two phone numbers together. Treating them as numbers causes two kinds of damage:",
      {list:[
        "**[[leading-zero|Leading zeros]] vanish.** Type the postcode `02134` or the phone number `0412555019` into a cell set to the usual automatic format, and the app stores 2134 and 412555019.",
        "**Long numbers lose digits.** Excel keeps at most 15 significant digits. Microsoft’s support article explains that digits after the 15th become zeros, so a 16-digit card or account number is silently changed."
      ]},
      {key:"If you’ll never do arithmetic on it, store it as text."},
      "Two ways to keep a code exactly as typed:",
      {ol:[
        "**Format the cells as Text before you type or paste.** Excel: Number Format box → Text. Google Sheets: Format → Number → Plain text. LibreOffice Calc: Format → Cells → Numbers → Text. Numbers: Format sidebar → Cell → Data Format → Text. Changing the format afterwards does not bring back zeros that are already gone.",
        "**Type an apostrophe first**, as in `'02134`. Excel, Google Sheets and LibreOffice Calc treat the entry as text and don’t show the apostrophe in the cell."
      ]}
    ]},
    {h:"A cautionary tale: genes that turned into dates", body:[
      "Human genes have short symbols, and some of them look like dates to a spreadsheet: `SEPT2` (a gene named Septin 2) or `MARCH1`. Excel, with its default settings, turns them into dates such as 2-Sep and 1-Mar. Long gene identifiers containing an E, such as `2310009E13`, can become numbers in scientific notation.",
      "In 2016, researchers Mark Ziemann, Yotam Eren and Assam El-Osta scanned the supplementary spreadsheet files of published genomics papers and found that **about one-fifth** of papers with gene lists in Excel files contained these errors. A follow-up study in 2021 found the problem had grown: errors in about **31%** of the articles it checked (3,436 of 11,117 published from 2014 to 2020).",
      "Two things changed afterwards:",
      {list:[
        "The HUGO Gene Nomenclature Committee, which names human genes, renamed the affected symbols (the change was widely reported in 2020): `SEPT1` became `SEPTIN1` and `MARCH1` became `MARCHF1`.",
        "Microsoft added **Automatic Data Conversion** settings to Excel for Microsoft 365 and Excel 2024. You can stop Excel removing leading zeros, shortening long numbers to 15 digits, turning digits around an E into scientific notation, and turning letters-plus-numbers such as `JAN1` into dates. On Windows they’re in **File → Options → Data**; on a Mac, **Excel → Preferences → Edit**. They also apply when you open a .csv file."
      ]},
      "The lesson isn’t “Excel is bad”. Every spreadsheet app guesses what you meant, and guesses can be wrong. Scientists with years of training lost data this way, so it’s nothing to be embarrassed about. The protective habits are the same everywhere: set codes to Text **before** entering them, and look at your data after any paste or import."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“What I see in the cell is what’s stored.”** The format may hide decimals or show a date for a number. Check the formula bar.",
        "**“Phone numbers are numbers.”** They’re codes. Store them as text so zeros and plus signs survive.",
        "**“A blank cell and 0 are the same.”** Often they behave the same in arithmetic, but many functions skip blanks (Lesson 3). A blank can mean “not recorded”, which is different from zero.",
        "**“If a total is wrong, the app made a mistake.”** Far more often, a value is text, a date was read the wrong way, or the display is rounded.",
        "**“Changing the format will fix a lost zero.”** Formats can’t restore digits that were removed when the value was stored."
      ]}
    ]}
   ],
   try:[
    {id:"t1u9-l1-x1", type:"sort", q:"Lucía is setting up a sheet for her community choir. For each column, should the values be stored as numbers or as text?", buckets:["Store as a number","Store as text"], items:[
      {t:"Phone numbers, such as 0412 555 019", b:1, why:"A phone number is a label. As a number it would lose its leading zero and its spaces, and adding phone numbers means nothing."},
      {t:"Age in years", b:0, why:"You might average ages or count members over 60, so this is a real quantity."},
      {t:"Postcodes, such as 02134", b:1, why:"A postcode is a code. As a number, 02134 becomes 2134, which is a different (or invalid) postcode."},
      {t:"Annual fee paid, such as 45.00", b:0, why:"You’ll add up fees and check who paid how much, so it must be a number. A currency format can show the symbol."},
      {t:"Membership card number with 16 digits", b:1, why:"Excel keeps only 15 significant digits, so the 16th would become 0. It’s a label anyway."},
      {t:"Number of concerts attended", b:0, why:"A count you might total or average: a real number."}
    ]},
    {id:"t1u9-l1-x2", type:"number", q:"A library-loan sheet has the borrowed date `2026-03-02` in B2 and the returned date `2026-03-23` in C2. D2 contains `=C2-B2` and is formatted as a Number. What does D2 show?", answer:21, tol:0, unit:"days", why:"Dates are stored as day counts (46083 and 46104 in Excel’s 1900 system), so the subtraction gives 46104 − 46083 = **21** days.", wrongs:[
      {v:22, tol:0, why:"That counts both the first and the last day. Subtracting dates gives the gap between them: from 2 March to 23 March is 21 days. If you need to count both days, add 1 yourself."},
      {v:20, tol:0, why:"That’s one too few. 23 − 2 = 21 days, and both dates are in March, so no month lengths are involved."}
    ], hint2:"Subtract the day numbers: both dates are in the same month."},
    {id:"t1u9-l1-x3", type:"mcq", q:"Kenji’s column of cake sales shows 12, 15 and 9, but `=SUM(B2:B4)` shows 21. He notices the 15 sits on the left of its cell. What is the most likely cause?", options:[
      {t:"The 15 is stored as text, so SUM skips it", ok:true, why:"Right. Text lines up on the left by default, and SUM ignores text. 12 + 9 = 21. Converting the 15 to a real number fixes the total."},
      {t:"SUM can’t add more than two cells", why:"SUM can add thousands of cells. The total is exactly 12 + 9, which points to the 15 being skipped."},
      {t:"The cells are formatted with no decimal places", why:"Formats change only how values look; they can’t drop a whole value from a total."},
      {t:"The spreadsheet needs to be restarted to recalculate", why:"Spreadsheets recalculate automatically. The alignment clue shows the 15 is a different kind of value."}
    ]},
    {id:"t1u9-l1-x4", type:"number", q:"A1 and A2 both contain `1.26`. A1, A2 and A3 are all formatted to show **one** decimal place, so A1 and A2 both display 1.3. A3 contains `=A1+A2`. What does A3 display?", answer:2.5, tol:0.001, unit:"", why:"The formula adds the stored values: 1.26 + 1.26 = 2.52. Shown with one decimal place, 2.52 displays as **2.5**. The display rounds the result; it doesn’t add the rounded displays.", wrongs:[
      {v:2.6, tol:0.001, why:"That adds what the cells **show** (1.3 + 1.3). Formulas use the stored values, 1.26 + 1.26 = 2.52, which displays as 2.5."},
      {v:2.52, tol:0.001, why:"2.52 is the value A3 holds, and the formula bar would show it. But A3 is formatted to one decimal place, so the cell displays 2.5."}
    ]},
    {id:"t1u9-l1-x5", type:"match", q:"Every one of these cells holds the same value, `0.25`. Match each number format with what the cell displays.", pairs:[
      ["Percent, no decimals","25%","Percent multiplies the displayed value by 100 and adds a % sign. The stored value is still 0.25."],
      ["Fraction","1/4","A fraction format shows 0.25 as a quarter."],
      ["Number, 0 decimal places","0","0.25 rounded to a whole number is 0 for display, but the cell still holds 0.25, so a formula using it gets 0.25."],
      ["Scientific, 2 decimals","2.50E-01","Scientific notation shows 2.50 × 10⁻¹, which is 0.25."],
      ["Number, 2 decimal places","0.25","Two decimal places show the value exactly."]
    ]},
    {id:"t1u9-l1-x6", type:"spot", q:"Tomás is about to paste this list into a new Excel sheet with default settings. Tap every entry that Excel is likely to change into something else.", ask:"Excel will probably change", mono:true, parts:[
      "Gene: ", {t:"SEPT2", flag:true, why:"Letters followed by a number that look like a month and day: Excel turns this into a date, 2-Sep. That’s exactly the gene-name problem."}, "\nPostcode: ", {t:"02134", flag:true, why:"In the automatic format the leading zero is removed and 2134 is stored."}, "\nName: ", {t:"Ana Souza", flag:false, why:"Ordinary text stays as typed."}, "\nAmount: ", {t:"12.50", flag:false, why:"A real number. It may show as 12.5, but the value is what Tomás meant."}, "\nAge band: ", {t:"1-2", flag:true, why:"Two numbers with a hyphen look like a day and month, so Excel stores a date (such as 2 January or 1 February, depending on locale)."}, "\nBatch code: ", {t:"3E5", flag:true, why:"Digits around an E are read as scientific notation: 3 × 10⁵, shown as 3.00E+05. Microsoft’s Automatic Data Conversion page lists this conversion."}, "\nCity: ", {t:"Lagos", flag:false, why:"Plain text; nothing to convert."}
    ]},
    {id:"t1u9-l1-x7", type:"mcq", q:"Hana types `03/04/2026` for a meeting on 3 April. Her colleague in another country opens the shared sheet and sees March 4. What’s the most reliable way to avoid this?", options:[
      {t:"Enter dates as year-month-day, such as 2026-04-03, and check the stored date in the formula bar", ok:true, why:"Year-month-day has only one reading, and the major apps recognise it as a date. Each person can then choose a display format they like; the stored date stays the same."},
      {t:"Make the text bold so people read it carefully", why:"Formatting the look doesn’t change which date was stored. The problem happened when 03/04 was read using one locale’s order."},
      {t:"Type the date as text so the app can’t change it", why:"The display would stay the same, but you could no longer sort by date or calculate days, and readers would still disagree about what 03/04 means."},
      {t:"Nothing can be done; the colleague’s app is wrong", why:"Neither app is wrong: they read day/month order differently. An unambiguous format solves it."}
    ]}
   ],
   apply:{intro:"Make a practice sheet and watch how the app treats different kinds of data. Any of the free options works: Excel for the web with a free Microsoft account, Google Sheets with a free Google account, LibreOffice Calc, or Numbers on an Apple device (or Numbers for iCloud in a browser).", tasks:[
     {t:"Make a sheet and see the alignment clue", app:{
       ms:["Go to office.com, sign in and open **Excel**, then choose **Blank workbook**. (Desktop Excel: **File → New → Blank workbook**.)","In A1 type `Ana`, in A2 `42`, in A3 `2026-03-02`, in A4 `15 ` (with a space after it; some apps keep this as text, others tidy it into a number), and press [[kbd:Enter]] after each.","Notice which entries sit on the left and which on the right. Click each cell and compare the cell with the formula bar.","Select A3, open the **Number Format** box on the **Home** tab and choose **Number**. The date becomes a serial number (46083, possibly with .00). Press [[kbd:Ctrl]] + [[kbd:Z]] to undo."],
       google:["Go to sheets.google.com and choose **Blank spreadsheet** (or type sheets.new in the address bar).","In A1 type `Ana`, in A2 `42`, in A3 `2026-03-02`, in A4 `15 ` (with a space after it; some apps keep this as text, others tidy it into a number).","Notice which entries sit on the left and which on the right. Click each cell and compare it with the formula bar.","Select A3 and choose **Format → Number → Number**. The date becomes 46083.00. Undo with [[kbd:Ctrl]] + [[kbd:Z]] ([[kbd:Cmd]] + [[kbd:Z]] on a Mac)."],
       libre:["Open LibreOffice and choose **Calc Spreadsheet** (or **File → New → Spreadsheet**).","In A1 type `Ana`, in A2 `42`, in A3 `2026-03-02`, in A4 `15 ` (with a space after it; some apps keep this as text, others tidy it into a number).","Choose **View → Value Highlighting**: text turns black, numbers blue. Which cells are text? Turn it off again from the same menu.","Select A3, choose **Format → Cells → Numbers**, pick the **Number** category and click **OK**. The date shows 46083. Undo."],
       apple:["Open **Numbers**, click **New Document** and choose **Blank**.","Click the first empty cell below the table’s header row, then type `Ana`, `42`, `2026-03-02` and `15 ` (with a space after it; some apps keep this as text, others tidy it into a number) in four cells down that column.","Notice which entries sit on the left and which on the right.","Select the date cell and open the **Format** sidebar (paintbrush button) → **Cell**. The **Data Format** menu shows Date & Time. Numbers keeps dates as their own type rather than showing a serial number, so there’s no serial number to look at here."]
     }},
     {t:"Keep a leading zero", app:{
       ms:["In B1 type `02134` and press [[kbd:Enter]]. The zero disappears.","In B2 type `'02134` (apostrophe first). The zero stays, and desktop Excel may show a small green triangle saying the number is stored as text. That’s what you want here.","Select C1:C5, set the **Number Format** box to **Text**, then type `0412555019` in C1. The zero stays.","Desktop Excel only: look at **File → Options → Data → Automatic Data Conversion** (on a Mac, **Excel → Preferences → Edit**). Read the options; you don’t need to change them."],
       google:["In B1 type `02134`. The zero disappears.","In B2 type `'02134`. The zero stays.","Select C1:C5, choose **Format → Number → Plain text**, then type `0412555019` in C1. The zero stays."],
       libre:["In B1 type `02134`. The zero disappears.","In B2 type `'02134`. The zero stays.","Select C1:C5, choose **Format → Cells → Numbers**, pick the **Text** category, click **OK**, then type `0412555019` in C1."],
       apple:["In an empty cell type `02134`. The zero disappears.","Select a few empty cells, open **Format → Cell → Data Format** and choose **Text**.","Type `02134` and `0412555019` into those cells. The zeros stay."]
     }},
     {t:"Watch display rounding", app:{
       all:["In two cells type `1.26`. In a third cell type `=` followed by the two cell references joined with `+`, for example `=D1+D2`.","Format all three cells to show one decimal place (Excel: **Decrease Decimal** on the Home tab; Google Sheets: the **.0←** button on the toolbar; LibreOffice: **Format → Cells → Numbers**, decimal places 1; Numbers: **Format → Cell → Data Format → Number**, decimals 1).","The cells show 1.3, 1.3 and 2.5. Click each one and read the real value in the formula bar."]
     }, write:"What surprised you? Which entries became text, numbers or dates?"}
   ], proof:"A practice sheet with a name, a number, a date and the “15 ” test (text or number, depending on your app); a code with its leading zero kept; and a note of the stored and displayed values in the rounding test."},
   read:[
     {book:"wss", where:"Chapter 9, Section 9.1 “Microsoft Excel Basics” and Section 9.2 “Text and Numbers in Microsoft Excel” (Table 9.1 lists the number formats)", note:"One slip in 9.2: its scientific-notation example says 644362623 “would be 6.44E+9”; it’s 6.44E+08 (about 644 million)."},
     {book:"wss", where:"Chapter 9, Section 9.6 “Text and Numbers in Google Sheets”"}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t1u9-l2", title:"Formulas and references", minutes:55,
   goals:[
     "Write formulas with =, arithmetic operators and parentheses, and predict their results using the order of operations",
     "Explain why formulas should point at cells instead of retyping numbers",
     "Predict what happens to relative, absolute and mixed references when a formula is copied or filled",
     "Recognise when a formula fails only because of the locale’s separators or function names"
   ],
   learn:[
    {h:"Every formula starts with =", body:[
      {lead:"A formula is an instruction you leave in a cell: “work this out, and keep it up to date.”"},
      "A [[formula]] begins with an equals sign. Without it, the app treats what you typed as plain text or a number. With it, the app calculates and shows the **result** in the cell, while the formula bar keeps showing the **instruction**.",
      "Formulas use [[operator|operators]], the symbols for each kind of operation:",
      {table:[
        ["Operator","Meaning","Example","Result"],
        ["`+`  `-`","add, subtract","`=10-4`","6"],
        ["`*`","multiply","`=3*2.5`","7.5"],
        ["`/`","divide","`=12/4`","3"],
        ["`^`","to the power of","`=2^3`","8"],
        ["`%`","percent (divides by 100)","`=200*10%`","20"],
        ["`&`","join text","`=\"Room \"&4`","Room 4"],
        ["`=` `<` `>` `<=` `>=` `<>`","compare (gives TRUE or FALSE)","`=5>3`","TRUE"]
      ]},
      "Note the multiplication sign is `*`, not × or x, and division is `/`, not ÷. Text inside a formula goes in straight double quotes: `\"Room \"`."
    ]},
    {h:"Order of operations", body:[
      "When a formula has several operators, the app doesn’t just work left to right. It follows an order of precedence, much like the one taught in school maths (often remembered as PEMDAS or BODMAS). Microsoft’s list for Excel, from first to last:",
      {ol:[
        "Anything in **parentheses** ( ), innermost first",
        "**Negation**, as in `-1`",
        "**Percent** `%`",
        "**Powers** `^`",
        "**Multiply and divide** `*` `/`, left to right",
        "**Add and subtract** `+` `-`, left to right",
        "**Join text** `&`",
        "**Comparisons** `=` `<` `>` and so on"
      ]},
      "Microsoft’s own example: `=5+2*3` is **11** (multiply first), but `=(5+2)*3` is **21**.",
      "The classic mistake is the average:",
      {ex:"Marks: A2 = 70, B2 = 80, C2 = 90\n\n=A2+B2+C2/3    →  70 + 80 + (90 ÷ 3) = 180\n=(A2+B2+C2)/3  →  240 ÷ 3 = 80", label:"Worked example: parentheses change the answer", mono:true},
      "The first formula divides only C2 by 3. Nothing warns you; 180 just looks like a big average. When you aren’t sure, add parentheses: they never hurt, and they make your intention clear to the next reader.",
      {tip:"Percent change follows the same rule: `=(B2-A2)/A2` gives the change from A2 to B2 as a fraction (format it as Percent). Without the parentheses, `=B2-A2/A2` is B2 minus 1."},
      {lab:"fl-order", t:"Practise: use brackets so the addition happens first"}
    ]},
    {h:"Point at cells, don’t retype numbers", body:[
      "You could write `=3*2.5`. But if you write `=B2*C2`, where B2 holds the quantity and C2 the price, the formula keeps working when the price changes. Pointing at cells is what makes a spreadsheet a model rather than a calculator receipt.",
      "To build a formula by pointing: type `=`, click the first cell, type the operator, click the next cell, press [[kbd:Enter]]. The app writes the [[cell-reference|references]] for you, and colours them so you can see which cell each part of the formula uses.",
      {key:"Put each input in its own cell once. Formulas refer to it; they don’t repeat it."},
      "Numbers typed inside formulas are called “hard-coded”. A hard-coded tax rate or exchange rate hidden in fifty formulas is a trap: when it changes, you have to find and fix all fifty. Put it in one labelled cell instead, and refer to that cell (the next sections show how to do that safely)."
    ]},
    {h:"Copying a formula: relative references", body:[
      "Here is the idea that makes spreadsheets powerful. Amara keeps a budget for her community garden. She types one formula in D2 and copies it down:",
      {fig:'<svg viewBox="0 0 340 246"><defs><marker id="m91" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-panel" x="10" y="10" width="22" height="22" stroke-width="1"/><rect class="d-panel" x="32" y="10" width="72" height="22" stroke-width="1"/><rect class="d-panel" x="104" y="10" width="42" height="22" stroke-width="1"/><rect class="d-panel" x="146" y="10" width="54" height="22" stroke-width="1"/><rect class="d-panel" x="200" y="10" width="126" height="22" stroke-width="1"/><text x="68" y="26" text-anchor="middle">A</text><text x="125" y="26" text-anchor="middle">B</text><text x="173" y="26" text-anchor="middle">C</text><text x="263" y="26" text-anchor="middle">D</text><rect class="d-panel" x="10" y="32" width="22" height="112" stroke-width="1"/><text x="21" y="51" text-anchor="middle">1</text><text x="21" y="79" text-anchor="middle">2</text><text x="21" y="107" text-anchor="middle">3</text><text x="21" y="135" text-anchor="middle">4</text><rect class="d-soft" x="32" y="32" width="294" height="112" stroke-width="1"/><path class="d-soft" d="M32,60 L326,60 M32,88 L326,88 M32,116 L326,116 M104,32 L104,144 M146,32 L146,144 M200,32 L200,144" stroke-width="1"/><rect class="d-rose" x="200" y="60" width="126" height="28" stroke-width="2"/><rect class="d-gold" x="200" y="88" width="126" height="56" stroke-width="2"/><path class="d-gold" d="M200,116 L326,116" stroke-width="1"/><text x="38" y="51">Item</text><text x="110" y="51">Qty</text><text x="152" y="51">Price</text><text x="206" y="51">Cost</text><text x="38" y="79">Seeds</text><text x="140" y="79" text-anchor="end">3</text><text x="194" y="79" text-anchor="end">2.50</text><text x="206" y="79">=B2*C2</text><text x="320" y="79" text-anchor="end">7.50</text><text x="38" y="107">Compost</text><text x="140" y="107" text-anchor="end">2</text><text x="194" y="107" text-anchor="end">6.00</text><text x="206" y="107">=B3*C3</text><text x="320" y="107" text-anchor="end">12.00</text><text x="38" y="135">Gloves</text><text x="140" y="135" text-anchor="end">4</text><text x="194" y="135" text-anchor="end">3.25</text><text x="206" y="135">=B4*C4</text><text x="320" y="135" text-anchor="end">13.00</text><rect class="d-inkf" x="322" y="84" width="8" height="8"/><path class="d-ink" d="M334,94 L334,140" stroke-width="2" marker-end="url(#m91)"/><text x="10" y="170">1. Type =B2*C2 in D2 (rose).</text><text x="10" y="192">2. Drag the fill handle (the small square)</text><text x="10" y="210">down to D4.</text><text x="10" y="232">3. Each copy (gold) uses its own row.</text></svg>', alt:"A grid with columns Item, Qty, Price and Cost. Row 2: Seeds, 3, 2.50, and D2 contains =B2*C2 showing 7.50, highlighted in rose. Rows 3 and 4, highlighted in gold, show Compost 2 times 6.00 with =B3*C3 giving 12.00, and Gloves 4 times 3.25 with =B4*C4 giving 13.00. A small square at the bottom-right corner of D2 has an arrow pointing down: the fill handle.", cap:"Filling a formula down. The app adjusts each copy so it uses the quantity and price in its own row."},
      "Why does D3 say `=B3*C3` and not `=B2*C2`? Because ordinary references are [[relative-reference|relative]]. The app doesn’t really remember “B2”; it remembers “the cell two columns to my left, in my row”. Copy the formula one row down and that description now points one row down.",
      "The [[fill-handle|fill handle]] is the quickest way to copy:",
      {list:[
        "**Excel, Google Sheets and LibreOffice Calc:** select the cell and drag the small square at its bottom-right corner. In Excel, double-clicking the square fills down as far as the data next to it goes.",
        "**Numbers:** select the cell, move the pointer over the selection’s border until a yellow dot appears, and drag the dot.",
        "**Any app:** copy ([[kbd:Ctrl]] + [[kbd:C]], [[kbd:Cmd]] + [[kbd:C]] on a Mac) and paste into the other cells. Copy and paste adjusts relative references in exactly the same way."
      ]},
      "The rule works in every direction. Copy `=B2*C2` from D2 to F5, which is two columns right and three rows down, and every reference shifts the same way: `=D5*E5`.",
      {lab:"fl-filldown", t:"Practise: write one formula and fill it down a column"}
    ]},
    {h:"Locking a reference with $", body:[
      "Sometimes a formula should keep pointing at one particular cell. Mei runs a small bakery and wants to raise every price by the percentage in D2:",
      {fig:'<svg viewBox="0 0 340 250"><rect class="d-panel" x="10" y="10" width="22" height="22" stroke-width="1"/><rect class="d-panel" x="32" y="10" width="64" height="22" stroke-width="1"/><rect class="d-panel" x="96" y="10" width="50" height="22" stroke-width="1"/><rect class="d-panel" x="146" y="10" width="138" height="22" stroke-width="1"/><rect class="d-panel" x="284" y="10" width="46" height="22" stroke-width="1"/><text x="64" y="26" text-anchor="middle">A</text><text x="121" y="26" text-anchor="middle">B</text><text x="215" y="26" text-anchor="middle">C</text><text x="307" y="26" text-anchor="middle">D</text><rect class="d-panel" x="10" y="32" width="22" height="112" stroke-width="1"/><text x="21" y="51" text-anchor="middle">1</text><text x="21" y="79" text-anchor="middle">2</text><text x="21" y="107" text-anchor="middle">3</text><text x="21" y="135" text-anchor="middle">4</text><rect class="d-soft" x="32" y="32" width="298" height="112" stroke-width="1"/><path class="d-soft" d="M32,60 L330,60 M32,88 L330,88 M32,116 L330,116 M96,32 L96,144 M146,32 L146,144 M284,32 L284,144" stroke-width="1"/><rect class="d-gold" x="284" y="60" width="46" height="28" stroke-width="2.5"/><text x="38" y="51">Item</text><text x="102" y="51">Price</text><text x="152" y="51">New price</text><text x="290" y="51">Rise</text><text x="38" y="79">Bread</text><text x="140" y="79" text-anchor="end">4.00</text><text class="s" x="152" y="79">=B2*(1+$D$2)</text><text x="278" y="79" text-anchor="end">4.60</text><text x="324" y="79" text-anchor="end">15%</text><text x="38" y="107">Rolls</text><text x="140" y="107" text-anchor="end">2.00</text><text class="s" x="152" y="107">=B3*(1+$D$2)</text><text x="278" y="107" text-anchor="end">2.30</text><text x="38" y="135">Buns</text><text x="140" y="135" text-anchor="end">1.80</text><text class="s" x="152" y="135">=B4*(1+$D$2)</text><text x="278" y="135" text-anchor="end">2.07</text><text x="10" y="170">$D$2 is locked: every copy still uses D2</text><text x="10" y="188">(gold), while B2 moves to B3 and B4.</text><rect class="d-rose" x="10" y="200" width="320" height="42" rx="6" stroke-width="1.5"/><text x="20" y="218">Without the $ signs, C3 would get</text><text x="20" y="235">=B3*(1+D3). D3 is empty: no rise, no error.</text></svg>', alt:"A grid with columns Item, Price, New price and Rise. D2 holds 15 percent, highlighted in gold. C2 contains =B2*(1+$D$2) giving 4.60 for Bread at 4.00; C3 contains =B3*(1+$D$2) giving 2.30 for Rolls at 2.00; C4 contains =B4*(1+$D$2) giving 2.07 for Buns at 1.80. A note says $D$2 is locked so every copy uses D2. A rose box warns that without the dollar signs C3 would get =B3*(1+D3), and D3 is empty, so there would be no rise and no error.", cap:"An absolute reference keeps pointing at the rate cell while the price reference moves."},
      "A dollar sign in front of a column letter or row number **locks** that part. `$D$2` is an [[absolute-reference|absolute reference]]: copied anywhere, it still means D2. Check the numbers: 4.00 × 1.15 = 4.60, 2.00 × 1.15 = 2.30, 1.80 × 1.15 = 2.07.",
      "Forgetting the `$` is one of the most common spreadsheet mistakes, and it’s dangerous because it often gives **no error**. The copied formula points at an empty cell, which counts as 0, so the prices simply don’t rise.",
      {table:[
        ["You write","Copied one row down and one column right, it becomes","Locked part"],
        ["`D2`","`E3`","nothing (relative)"],
        ["`$D$2`","`$D$2`","column and row (absolute)"],
        ["`$D2`","`$D3`","column only (mixed)"],
        ["`D$2`","`E$2`","row only (mixed)"]
      ]},
      "The last two are [[mixed-reference|mixed references]]. They’re useful in grids. For a price table with quantities 1, 2, 3 down column A (from A2) and item prices across row 1 (from B1), one formula in B2, `=$A2*B$1`, can be filled across and down to complete the whole table: every copy takes its quantity from column A and its price from row 1.",
      "You can type the `$` yourself in any app. Shortcuts also exist: put the cursor on a reference in the formula and press a key to cycle through the four types.",
      {list:[
        "**Excel:** [[kbd:F4]] on Windows; on a Mac, [[kbd:Cmd]] + [[kbd:T]] (or [[kbd:Fn]] + [[kbd:F4]]).",
        "**Google Sheets:** [[kbd:F4]] on Windows, [[kbd:Fn]] + [[kbd:F4]] on a Mac, [[kbd:Search]] + [[kbd:4]] on a Chromebook.",
        "**LibreOffice Calc:** [[kbd:F4]], or **Sheet → Cycle Cell Reference Types**.",
        "**Numbers:** click the small arrow on a reference in the formula editor and choose **Preserve Row** and/or **Preserve Column**."
      ]},
      {lab:"fl-abs", t:"Practise: lock a rate cell with $ so every copy uses it"},
      {lab:"fl-mixed", t:"Practise: fill a times table with one mixed-reference formula"}
    ]},
    {h:"Other things that change references", body:[
      {list:[
        "**Moving (cut and paste) is different from copying.** A moved formula keeps pointing at the same cells; only copies adjust.",
        "**Inserting rows or columns** shifts references automatically, so `=SUM(B2:B6)` becomes `=SUM(B2:B7)` if you insert a row inside the range.",
        "**Deleting a cell that a formula uses** breaks the formula. It shows `#REF!`, meaning the reference no longer exists (Lesson 3 covers error values).",
        "**Other sheets** are referenced with the sheet name: `Sheet2!B4` in Excel and Google Sheets, `$Sheet2.B4` in LibreOffice Calc’s usual style."
      ]},
      {tip:"To see every formula at once instead of results: Excel’s **Formulas → Show Formulas**; Google Sheets’ **View → Show → Formulas**; LibreOffice’s **View → Show Formula**. Turn it off the same way."}
    ]},
    {h:"Commas, semicolons and translated names", body:[
      "A formula copied from a website can fail on your computer for a reason that has nothing to do with you: the **[[locale]]**, the regional settings that decide how numbers and dates are written.",
      {list:[
        "In many countries the decimal mark is a comma: two and a half is `2,5`. A comma can’t then also separate a function’s inputs, so these locales use a **semicolon**: `=SUM(A1;B1)` instead of `=SUM(A1,B1)`.",
        "**Excel** follows your computer’s regional list separator. Desktop Excel in some languages also translates function names, so German Excel writes SUMME for SUM. Files still work across languages; only what you type and see differs.",
        "**Google Sheets** follows the spreadsheet’s locale, set in **File → Settings → Locale**, which also changes default date, number and currency formats. Function names stay in English unless your Google Account language is one of the languages Sheets supports and you untick **Always use English function names** in **File → Settings**.",
        "**LibreOffice Calc** lets you choose separators, and English function names, under **Tools → Options → LibreOffice Calc → Formula** (**LibreOffice → Preferences** on a Mac).",
        "**Numbers**: Apple’s help says that if your settings use a comma as the decimal separator, you separate arguments with semicolons."
      ]},
      {key:"If a correct-looking formula from a tutorial gives an error, try swapping commas for semicolons. This course writes formulas with commas."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Spreadsheets calculate left to right.”** They follow precedence: multiplication before addition, and so on. Use parentheses to be sure.",
        "**“A formula remembers exact cells.”** Ordinary references are relative directions. Copies adjust unless you lock them with $.",
        "**“No error message means the formula is right.”** A missing $ or missing parentheses usually gives a wrong number, not an error. Check one or two results by hand.",
        "**“Typing numbers into formulas is faster.”** It is, once. Inputs in their own cells are faster every time something changes.",
        "**“My app is broken because a formula from the web won’t work.”** It may just need semicolons, or a different function name, in your locale."
      ]}
    ]}
   ],
   try:[
    {id:"t1u9-l2-x1", type:"order", q:"Put the steps in the order a spreadsheet uses to calculate `=(10+2)*3-8/4`.", items:[
      {t:"Parentheses: 10 + 2 = 12", why:"Anything in parentheses is calculated first."},
      {t:"Multiply: 12 × 3 = 36", why:"Multiplication and division come next, working left to right, so 12 × 3 is done before 8 ÷ 4."},
      {t:"Divide: 8 ÷ 4 = 2", why:"Still at the multiply-and-divide level, next from the left."},
      {t:"Subtract: 36 − 2 = 34", why:"Addition and subtraction come last. The result is 34."}
    ]},
    {id:"t1u9-l2-x2", type:"number", q:"Fatima wants the average of three marks: A2 = 70, B2 = 80, C2 = 90. She types `=A2+B2+C2/3`. What does the cell actually show?", answer:180, tol:0, unit:"", why:"Division happens before addition, so only C2 is divided: 70 + 80 + 90 ÷ 3 = 70 + 80 + 30 = **180**. The formula she needs is `=(A2+B2+C2)/3`, which gives 80, or simply `=AVERAGE(A2:C2)`.", wrongs:[
      {v:80, tol:0, why:"80 is the real average, and what she meant. But without parentheses the app divides only C2 by 3, giving 70 + 80 + 30 = 180."},
      {v:240, tol:0, why:"240 is the sum of all three. The formula does divide something: C2 by 3, so the result is 70 + 80 + 30 = 180."},
      {v:50, tol:0, why:"That would be dividing the first two only. Precedence applies to the operator right next to the division: C2/3."}
    ], hint2:"Which part of the formula does the / apply to?"},
    {id:"t1u9-l2-x3", type:"number", q:"In Mei’s bakery sheet, B3 holds the price `2.00` and D2 holds the rise `15%`. D3 is empty. C2 contains `=B2*(1+D2)` **without** dollar signs, and she fills it down to C3. What does C3 show?", answer:2, tol:0.001, unit:"", why:"Filling down turns `=B2*(1+D2)` into `=B3*(1+D3)`. D3 is empty, which counts as 0, so C3 = 2.00 × (1 + 0) = **2.00**. No error appears, which is why this mistake is easy to miss. `=B2*(1+$D$2)` would give 2.30.", wrongs:[
      {v:2.3, tol:0.001, why:"2.30 is what Mei wanted, and what `$D$2` would give. Without the $ the copy points at D3, which is empty, so the price stays 2.00."},
      {v:0, tol:0.001, why:"An empty cell counts as 0 inside (1+D3), which makes the bracket 1, not 0. The result is 2.00 × 1 = 2.00."},
      {v:0.3, tol:0.001, why:"That’s just the size of the rise on 2.00. The formula multiplies the price by (1 + rate); with D3 empty the rate is 0."}
    ]},
    {id:"t1u9-l2-x4", type:"match", q:"Each formula below is in C1 and is copied to D2 (one column right, one row down). Match each reference with what it becomes.", pairs:[
      ["`A1`","`B2`","Fully relative: both the column and the row shift by one."],
      ["`$A$1`","`$A$1`","Fully absolute: the $ locks both parts, so it doesn’t change."],
      ["`$A1`","`$A2`","The column is locked, so only the row shifts."],
      ["`A$1`","`B$1`","The row is locked, so only the column shifts."]
    ]},
    {id:"t1u9-l2-x5", type:"spot", q:"Sione’s volunteer sheet should give each person’s total hours (B + C) in column D, their share of all hours in column E, and the grand total in D7. Tap every formula that is wrong.", ask:"is wrong", mono:true, parts:[
      "D2: ", {t:"=B2+C2", flag:false, why:"Correct: adds Saturday and Sunday hours for row 2."}, "\nD3: ", {t:"=B3+C3", flag:false, why:"Correct: the filled-down copy uses row 3."}, "\nD4: ", {t:"=B3+C4", flag:true, why:"Mixed-up rows: it adds Saturday from row 3 to Sunday from row 4. Probably a typed edit. Each row should use only its own row: =B4+C4."}, "\nD7: ", {t:"=SUM(D2:D6)", flag:false, why:"Correct: totals the five people in rows 2 to 6."}, "\nE2: ", {t:"=D2/$D$7", flag:false, why:"Correct: the total is locked with $ so copies keep dividing by D7."}, "\nE3: ", {t:"=D3/D8", flag:true, why:"The grand total isn’t locked here. This is what filling down an unlocked =D2/D7 produces: the copy divides by D8, which is empty, so it shows #DIV/0!. It should be =D3/$D$7, like E2 and E4."}, "\nE4: ", {t:"=D4/$D$7", flag:false, why:"Correct, locked total."}
    ]},
    {id:"t1u9-l2-x6", type:"mcq", q:"Oluwaseun is building a times-table grid: 1 to 10 down column A (from A2) and 1 to 10 across row 1 (from B1). B2 contains `=$A2*B$1`, filled across and down. What formula is in D5?", options:[
      {t:"`=$A5*D$1`", ok:true, why:"Column A is locked ($A) and row 1 is locked (B$1). Moving to D5, the row part of $A2 moves to row 5 and the column part of B$1 moves to D. So D5 multiplies A5 (4) by D1 (3): 12."},
      {t:"`=$A2*B$1`", why:"That would be true only if both references were fully absolute. Here each has one unlocked part, which moves."},
      {t:"`=$D5*A$1`", why:"The $ in $A locks the column to A, so it can’t become D. And B$1’s column moves from B to D, not to A."},
      {t:"`=A5*D1`", why:"The dollar signs stay in the copied formula; only the unlocked parts change."}
    ]},
    {id:"t1u9-l2-x7", type:"mcq", q:"Dmitri copies `=ROUND(B2,2)` from an English tutorial into a spreadsheet whose locale uses a comma as the decimal mark. The app says the formula has an error. What’s the most likely fix?", options:[
      {t:"Use a semicolon between the arguments: `=ROUND(B2;2)`", ok:true, why:"In locales where the comma is the decimal mark, it can’t also separate arguments, so apps expect semicolons there. The formula itself is fine."},
      {t:"Reinstall the spreadsheet app", why:"Nothing is broken. The app is following its locale’s rules for writing formulas."},
      {t:"Remove the parentheses: `=ROUND B2,2`", why:"Functions always need parentheses around their arguments. The separator is the problem."},
      {t:"Write the number of decimals as a word: `=ROUND(B2,two)`", why:"Arguments must be numbers or references; a word would cause a #NAME? error. The comma separator is what doesn’t fit this locale."}
    ]}
   ],
   apply:{intro:"Build a small budget that uses relative and absolute references, then break it on purpose to see what a missing $ does. Use any app; the steps are almost the same everywhere.", tasks:[
     {t:"Build a budget and fill a formula down", app:{
       ms:["In a blank workbook, type the headings `Item`, `Qty`, `Price`, `Cost` in A1:D1, and three items with quantities and prices in rows 2 to 4 (for example Seeds 3 2.50, Compost 2 6.00, Gloves 4 3.25).","In D2 type `=`, click B2, type `*`, click C2 and press [[kbd:Enter]].","Select D2 and drag the small square at its bottom-right corner down to D4 (or double-click the square in desktop Excel).","Click D3 and D4 and read their formulas in the formula bar. In B6 type `=SUM(D2:D4)`: 32.50 with the example values."],
       google:["In a blank spreadsheet, type the headings `Item`, `Qty`, `Price`, `Cost` in A1:D1, and three items with quantities and prices in rows 2 to 4.","In D2 type `=`, click B2, type `*`, click C2 and press [[kbd:Enter]].","Select D2 and drag the small blue square at its bottom-right corner down to D4. (Google Sheets may also offer to fill the column for you: an “Autofill” suggestion you can accept.)","Click D3 and D4 and read their formulas. In B6 type `=SUM(D2:D4)`."],
       libre:["In a new spreadsheet, type the headings `Item`, `Qty`, `Price`, `Cost` in A1:D1, and three items in rows 2 to 4.","In D2 type `=`, click B2, type `*`, click C2 and press [[kbd:Enter]].","Select D2 and drag the small square at its bottom-right corner down to D4, or select D2:D4 and choose **Sheet → Fill Cells → Fill Down**.","Click D3 and D4 and read their formulas in the formula bar. In B6 type `=SUM(D2:D4)`."],
       apple:["In a blank spreadsheet, type `Item`, `Qty`, `Price`, `Cost` in the header row, and three items in the rows below.","Click the first Cost cell, type `=`, click the Qty cell, type `*`, click the Price cell, and press [[kbd:Return]].","Select that cell, hover over its border until a yellow dot appears, and drag the dot down over the other Cost cells.","Click each Cost cell to see its formula. Numbers may show references by header name, such as Qty and Price, instead of letters."]
     }},
     {t:"Lock a rate with $, then break it on purpose", app:{
       ms:["In F1 type `Rise` and in F2 type `10%`.","In E1 type `New price`. In E2 type `=C2*(1+$F$2)` and fill it down to E4. Check: 2.50 becomes 2.75.","Now in G2 type `=C2*(1+F2)` (no $) and fill it down. G3 and G4 show the old prices, because their copies point at F3 and F4, which are empty.","Click inside the F2 reference in E2’s formula and press [[kbd:F4]] a few times to watch it cycle: $F$2, F$2, $F2, F2 (on a Mac: [[kbd:Cmd]] + [[kbd:T]], or [[kbd:Fn]] + [[kbd:F4]]). If the key does nothing in your browser, type the $ signs yourself."],
       google:["In F1 type `Rise` and in F2 type `10%`.","In E1 type `New price`. In E2 type `=C2*(1+$F$2)` and fill it down to E4. Check: 2.50 becomes 2.75.","In G2 type `=C2*(1+F2)` (no $) and fill it down. G3 and G4 show the old prices, because their copies point at empty cells.","Click inside the F2 reference in E2’s formula and press [[kbd:F4]] a few times to watch the $ signs cycle ([[kbd:Fn]] + [[kbd:F4]] on a Mac, [[kbd:Search]] + [[kbd:4]] on a Chromebook)."],
       libre:["In F1 type `Rise` and in F2 type `10%`.","In E1 type `New price`. In E2 type `=C2*(1+$F$2)` and fill it down to E4. Check: 2.50 becomes 2.75.","In G2 type `=C2*(1+F2)` (no $) and fill it down. G3 and G4 show the old prices.","Put the cursor inside a reference in the formula bar and press [[kbd:F4]] (or choose **Sheet → Cycle Cell Reference Types**) to watch the $ signs change."],
       apple:["Add a new column (or a small second table) with a cell holding `10%` as the rise.","In a New price cell type `=`, click the price cell, type `*(1+`, click the rise cell, type `)`.","Before pressing Return, click the small arrow on the rise reference token and choose **Preserve Row** and **Preserve Column**, then press [[kbd:Return]].","Autofill the formula down with the yellow dot and check each result. Then repeat without preserving and compare."]
     }, write:"Which cells showed the wrong price without the $? Why didn’t the app show an error?"}
   ], proof:"A budget sheet where one formula was filled down, a rate cell used through an absolute reference, and a short note on what happened without the $."},
   read:[
     {book:"wss", where:"Chapter 9, Section 9.3 “Calculations and Basic Formulas in Microsoft Excel” and Section 9.7 “Calculations and Basic Formulas in Google Sheets”"},
     {book:"wss", where:"Chapter 10, Section 10.2 “More About Formulas”: “Order of Operations” and “Cell References in Formulas” (relative, absolute and mixed)"}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t1u9-l3", title:"Functions you’ll actually use", minutes:60,
   goals:[
     "Read and write functions: name, parentheses and arguments",
     "Choose correctly between SUM, AVERAGE, COUNT, COUNTA, MIN and MAX, and know how each treats blanks and text",
     "Decide between ROUND and number formatting, and write IF, COUNTIF and SUMIF formulas",
     "Look values up with XLOOKUP or VLOOKUP using an exact match, and diagnose the common error values"
   ],
   learn:[
    {h:"What a function is", body:[
      {lead:"A function is a ready-made formula with a name. You hand it some inputs; it hands back an answer."},
      "Instead of `=B2+B3+B4+B5+B6+B7`, you can write `=SUM(B2:B7)`. Every [[function]] has the same shape: an equals sign (if it starts the formula), the function’s **name**, then its inputs in parentheses. The inputs are called [[argument|arguments]], separated by commas (or semicolons, in some locales: Lesson 2).",
      {ex:"=SUMIF(B2:B6, \"Food\", C2:C6)", label:"The parts of a function", mono:true},
      {list:["`SUMIF` is the function’s **name**.","`B2:B6` is the 1st argument: where to check the condition.","`\"Food\"` is the 2nd argument: the condition.","`C2:C6` is the 3rd argument: what to add up when the condition is met."]},
      "Some arguments are optional; help pages show them in square brackets, as in `VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`. When you start typing a function name, every app shows a list of matching functions and then a reminder of the arguments. Read that reminder: it prevents most mistakes.",
      "Function names aren’t case-sensitive (`=sum(b2:b7)` works), and spaces after commas are allowed. All four apps covered here share the functions in this lesson, with one exception, XLOOKUP, which is newer (see the last section)."
    ]},
    {h:"Totals and summaries", body:[
      "Sione’s community group records volunteer hours. One person was away and one cell was left empty:",
      {ex:"   A      B\n1  Name   Hours\n2  Ana    4\n3  Ben    6\n4  Chen   (blank)\n5  Dina   3\n6  Eli    away\n7  Fern   5", label:"The volunteer-hours table", mono:true},
      {table:[
        ["Formula","Result","Why"],
        ["`=SUM(B2:B7)`","18","Adds the numbers: 4 + 6 + 3 + 5. Text and blanks are skipped."],
        ["`=COUNT(B2:B7)`","4","Counts cells that hold **numbers** (dates count too, since they’re numbers)."],
        ["`=COUNTA(B2:B7)`","5","Counts cells that are **not empty**: the four numbers plus “away”."],
        ["`=AVERAGE(B2:B7)`","4.5","SUM ÷ COUNT: 18 ÷ 4. Blanks and text are left out."],
        ["`=MIN(B2:B7)`","3","Smallest number"],
        ["`=MAX(B2:B7)`","6","Largest number"]
      ]},
      "Notice what AVERAGE did with Chen’s blank: it ignored it. If Chen really did zero hours and someone types `0`, the average changes to 18 ÷ 5 = **3.6**. So a blank and a zero mean different things to a spreadsheet, and you should choose deliberately.",
      {key:"COUNT counts numbers. COUNTA counts anything that isn’t empty. When they differ, some cells hold text."},
      {tip:"COUNTA also counts a cell that only *looks* empty because a formula returned empty text `\"\"`, or because someone typed a space. If COUNTA seems one too high, look for those."},
      {lab:"fl-counta", t:"Practise: count who signed up with COUNTA, skipping an empty row"}
    ]},
    {h:"ROUND or format?", body:[
      "Lesson 1 showed that a number format only changes the display. The `ROUND` function changes the **value**: `=ROUND(number, digits)`.",
      {table:[
        ["Formula","Result"],
        ["`=ROUND(12.3456, 2)`","12.35"],
        ["`=ROUND(12.3456, 0)`","12"],
        ["`=ROUND(1234.5, -2)`","1200 (negative digits round to tens, hundreds…)"]
      ]},
      "Which should you use? **Format** when you only want a tidy display and later calculations should use full precision. **ROUND** when the rounded amount is the real-world amount, such as money that will actually be paid.",
      {ex:"Three friends split a bill.\nB2: 100\nC2, D2, E2: =$B$2/3\nEach holds 33.333…\nFormatted to 2 decimals: 33.33\nF2: =SUM(C2:E2) shows 100.00\n\nBut three payments of 33.33 = 99.99.\n\nWith =ROUND($B$2/3, 2) in C2:E2,\neach share really is 33.33 and F2\nhonestly shows 99.99: one person\nmust pay 0.01 more.", label:"Worked example: when the display hides a cent", mono:true}
    ]},
    {h:"Decisions with IF", body:[
      "`IF` chooses between two results depending on a condition: `=IF(condition, value_if_true, value_if_false)`. The condition is a comparison that is TRUE or FALSE.",
      {ex:"Bakery stock: C2 holds how many bags of flour are left.\n\n=IF(C2<10, \"Reorder\", \"OK\")\n\nC2 = 6   →  Reorder\nC2 = 14  →  OK\nC2 = 10  →  OK   (10 is not less than 10)", label:"Worked example: a reorder flag", mono:true},
      {list:[
        "Text results go in straight double quotes. Without them, `=IF(C2<10, Reorder, OK)` gives `#NAME?`, because the app looks for something called Reorder.",
        "Watch the boundary: `<` versus `<=`. Should exactly 10 bags trigger a reorder? Decide, then test that exact value.",
        "The results can be numbers or formulas too: `=IF(B2>=50, B2*0.1, 0)` gives a 10% bonus only from 50 upwards.",
        "You can put one IF inside another (nesting) for three or more outcomes, but more than two or three levels becomes hard to read and check."
      ]},
      {lab:"fl-if", t:"Practise: Pass or Try again with IF, and check the boundary"}
    ]},
    {h:"Counting and adding with conditions: COUNTIF and SUMIF", body:[
      "The Okafor family is sharing the costs of a reunion:",
      {ex:"   A      B          C\n1  Date   Category   Amount\n2  06-01  Food       120\n3  06-01  Venue      300\n4  06-02  Food       80\n5  06-02  Transport  45\n6  06-03  Food       60", label:"The reunion costs table", mono:true},
      {table:[
        ["Question","Formula","Result"],
        ["How many Food items?","`=COUNTIF(B2:B6, \"Food\")`","3"],
        ["How much on Food?","`=SUMIF(B2:B6, \"Food\", C2:C6)`","260"],
        ["How many amounts over 100?","`=COUNTIF(C2:C6, \">100\")`","2"],
        ["Total of amounts over 100?","`=SUMIF(C2:C6, \">100\")`","420"]
      ]},
      "`COUNTIF(range, criterion)` counts the cells in the range that meet the criterion. `SUMIF(range, criterion, [sum_range])` checks the condition in the first range and adds the matching rows from the sum range. If you leave the sum range out, it adds the checked cells themselves, as in the last row.",
      {list:[
        "Criteria with comparison signs go **inside** the quotes: `\">100\"`, `\"<>Food\"` (not Food).",
        "To use a value from a cell, join it on with &: `=COUNTIF(C2:C6, \">\"&E1)`.",
        "Text matching ignores capital letters, so `\"food\"` matches “Food”. But it doesn’t ignore stray spaces: “Food ” with a trailing space won’t match. Consistent entries (Lesson 4) matter.",
        "Need two conditions? COUNTIFS and SUMIFS take several range-and-criterion pairs."
      ]},
      {lab:"fl-sumif", t:"Practise: add up one person’s hours with SUMIF"}
    ]},
    {h:"Looking things up: XLOOKUP and VLOOKUP", body:[
      "A [[lookup]] finds a value in one column and returns the matching value from another column in the same row, like finding a name in a phone book and reading across to the number.",
      {fig:'<svg viewBox="0 0 340 292"><rect class="d-panel" x="10" y="10" width="320" height="32" rx="6" stroke-width="1.5"/><text x="170" y="31" text-anchor="middle">=XLOOKUP(F2, A2:A5, C2:C5)</text><text class="s" x="170" y="60" text-anchor="middle">F2 (the order form) holds the code to find: B03</text><rect class="d-panel" x="10" y="72" width="24" height="22" stroke-width="1"/><rect class="d-panel" x="34" y="72" width="70" height="22" stroke-width="1"/><rect class="d-panel" x="104" y="72" width="126" height="22" stroke-width="1"/><rect class="d-panel" x="230" y="72" width="100" height="22" stroke-width="1"/><text x="69" y="88" text-anchor="middle">A</text><text x="167" y="88" text-anchor="middle">B</text><text x="280" y="88" text-anchor="middle">C</text><rect class="d-panel" x="10" y="94" width="24" height="130" stroke-width="1"/><text x="22" y="111" text-anchor="middle">1</text><text x="22" y="137" text-anchor="middle">2</text><text x="22" y="163" text-anchor="middle">3</text><text x="22" y="189" text-anchor="middle">4</text><text x="22" y="215" text-anchor="middle">5</text><rect class="d-soft" x="34" y="94" width="296" height="130" stroke-width="1"/><path class="d-soft" d="M34,120 L330,120 M34,146 L330,146 M34,172 L330,172 M34,198 L330,198 M104,94 L104,224 M230,94 L230,224" stroke-width="1"/><rect class="d-lup" x="34" y="120" width="70" height="104" stroke-width="1.5"/><rect class="d-lup" x="34" y="172" width="70" height="26" stroke-width="3"/><rect class="d-sage" x="230" y="172" width="100" height="26" stroke-width="3"/><text x="40" y="111">Code</text><text x="110" y="111">Item</text><text x="236" y="111">Price</text><text x="40" y="137">B01</text><text x="110" y="137">Bread</text><text x="324" y="137" text-anchor="end">3.20</text><text x="40" y="163">B02</text><text x="110" y="163">Croissant</text><text x="324" y="163" text-anchor="end">1.80</text><text x="40" y="189">B03</text><text x="110" y="189">Muffin</text><text x="324" y="189" text-anchor="end">2.50</text><text x="40" y="215">B04</text><text x="110" y="215">Bagel</text><text x="324" y="215" text-anchor="end">1.50</text><rect class="d-lup" x="10" y="238" width="16" height="14" stroke-width="2"/><text x="34" y="250">1. Search A2:A5 for B03: found in row 4</text><rect class="d-sage" x="10" y="262" width="16" height="14" stroke-width="2"/><text x="34" y="274">2. Return C2:C5 from that row: 2.50</text></svg>', alt:"At the top, the formula =XLOOKUP(F2, A2:A5, C2:C5), with a note that F2 holds the code to find, B03. Below, a price list with columns Code, Item and Price: B01 Bread 3.20, B02 Croissant 1.80, B03 Muffin 2.50, B04 Bagel 1.50. The code column A2 to A5 is shaded lupine with B03 outlined; the price 2.50 in the same row is outlined in sage. Step 1: search A2:A5 for B03, found in row 4. Step 2: return the value from C2:C5 in that row, 2.50.", cap:"A lookup searches one column and returns the value from the same row of another column."},
      "With the code `B03` in F2, both of these return **2.50**:",
      {ex:"=XLOOKUP(F2, A2:A5, C2:C5)\n=VLOOKUP(F2, A2:C5, 3, FALSE)", label:"Two ways to look up a price", mono:true},
      {list:[
        "**XLOOKUP(what to find, where to look, what to return)** searches the lookup column and returns from the result column. It looks for an **exact match by default**, can look left or right, and lets you add a fourth argument for a friendlier message: `=XLOOKUP(F2, A2:A5, C2:C5, \"Not found\")`.",
        "**VLOOKUP(what to find, table, column number, FALSE)** searches the **leftmost** column of the table and returns the value from the column number you give, counting the leftmost as 1. Here, Price is column 3 of A2:C5.",
        "**Always end VLOOKUP with FALSE** (or 0). If you leave it out, all four apps do an **approximate** match, which expects the first column to be sorted and can silently return the wrong row.",
        "Filling a lookup down a column? Lock the table: `=XLOOKUP(F2, $A$2:$A$5, $C$2:$C$5)`."
      ]},
      {lab:"fl-vlookup", t:"Practise: VLOOKUP with an exact match (FALSE)"}
    ]},
    {h:"When formulas go wrong: error values", body:[
      "An [[error-value|error value]] is the app’s way of saying “I couldn’t calculate this”. It isn’t a judgement of you; it’s a clue. Each one points to a different cause:",
      {table:[
        ["You see","What it means","Typical cause and fix"],
        ["`#DIV/0!`","Division by zero","Dividing by an empty or 0 cell, often a missing $ (Lesson 2). Check the divisor."],
        ["`#NAME?`","A name it doesn’t recognise","A misspelled function (`=SUMM(…)`), text without quotes, a missing colon in a range, or a function your app or version doesn’t have."],
        ["`#VALUE!`","Wrong kind of value","Arithmetic on text, such as `=B2+C2` when C2 holds “n/a”. (SUM would skip the text instead.)"],
        ["`#REF!`","A reference that no longer exists","You deleted a row, column or sheet the formula used, or (in Excel and Google Sheets) VLOOKUP’s column number is larger than the table. Undo, or rewrite the reference."],
        ["`#N/A`","Not available: nothing found","A lookup found no match: a typo, an extra space, or a code stored as text in one place and a number in the other."],
        ["`####`","Not an error","In Excel and LibreOffice Calc: the column is too narrow to show the number or date. Widen it."]
      ]},
      "Apps differ a little. Google Sheets shows `#ERROR!` when it can’t understand the formula at all. LibreOffice Calc uses the same codes for these errors but shows others as numbered codes such as `Err:502` (an invalid argument), explained in its help. Numbers shows a small warning triangle in the cell instead of a code; click it to read the message.",
      {tip:"Click an error cell to see a hint: Excel shows a small warning icon with an explanation, and Google Sheets shows the message when you hover. `IFERROR(formula, \"message\")` can replace an error with your own text, but fix the cause first; hiding errors hides mistakes."}
    ]},
    {h:"Which app has which function?", body:[
      {table:[
        ["Function","Where it works","Watch out for"],
        ["SUM, AVERAGE, COUNT, COUNTA, MIN, MAX, ROUND","All four apps","Nothing special"],
        ["IF, COUNTIF, SUMIF, VLOOKUP","All four apps","VLOOKUP’s last argument defaults to approximate"],
        ["XLOOKUP","Excel for Microsoft 365, Excel 2021 and 2024, Excel for the web; Google Sheets; LibreOffice Calc 24.8 and later; current Numbers","Not in Excel 2019 or 2016, which show `#NAME?`. Use VLOOKUP if a file must work there."]
      ]},
      "Microsoft’s help page states that XLOOKUP isn’t available in Excel 2016 and Excel 2019. LibreOffice’s help says the function has been included since version 24.8. When you share a workbook, find out which app and version the other person uses."
    ]}
   ],
   try:[
    {id:"t1u9-l3-x1", type:"number", q:"Using the volunteer table (B2 = 4, B3 = 6, B4 blank, B5 = 3, B6 = “away”, B7 = 5), what does `=COUNTA(B2:B7)` return?", answer:5, tol:0, unit:"", why:"COUNTA counts every cell that isn’t empty: the four numbers (4, 6, 3, 5) plus the text “away” = **5**. Only B4 is skipped.", wrongs:[
      {v:4, tol:0, why:"4 is what COUNT gives, counting only numbers. COUNTA also counts text, so “away” is included: 5."},
      {v:6, tol:0, why:"There are six cells in B2:B7, but B4 is empty, and COUNTA skips empty cells: 5."},
      {v:18, tol:0, why:"18 is the SUM of the hours. COUNTA counts cells; it doesn’t add their values."}
    ]},
    {id:"t1u9-l3-x2", type:"number", q:"Same table. What does `=AVERAGE(B2:B7)` return?", answer:4.5, tol:0.001, unit:"hours", why:"AVERAGE adds the numbers and divides by how many numbers there are: (4 + 6 + 3 + 5) ÷ 4 = 18 ÷ 4 = **4.5**. The blank and the text are left out of both the total and the count.", wrongs:[
      {v:3.6, tol:0.001, why:"That treats the blank as 0 (18 ÷ 5). AVERAGE skips blank cells. It would be 3.6 only if someone typed 0 in B4."},
      {v:3, tol:0.001, why:"That divides by all six cells (18 ÷ 6). AVERAGE divides only by the number of cells holding numbers: 4."}
    ]},
    {id:"t1u9-l3-x3", type:"number", q:"Using the reunion table (Category in B2:B6: Food, Venue, Food, Transport, Food; Amount in C2:C6: 120, 300, 80, 45, 60), what does `=SUMIF(B2:B6, \"Food\", C2:C6)` return?", answer:260, tol:0, unit:"", why:"SUMIF checks B2:B6 for “Food” (rows 2, 4 and 6) and adds the matching amounts in C: 120 + 80 + 60 = **260**.", wrongs:[
      {v:605, tol:0, why:"605 is the total of every amount. SUMIF only adds the rows where the category is Food."},
      {v:3, tol:0, why:"3 is how many Food rows there are: that’s COUNTIF. SUMIF adds their amounts: 260."},
      {v:200, tol:0, why:"That adds only 120 and 80. The Food row on 06-03 (60) also matches: 260."}
    ]},
    {id:"t1u9-l3-x4", type:"match", q:"Match each error value with its most likely cause.", pairs:[
      ["`#DIV/0!`","The formula divides by an empty cell","Empty cells count as 0, and nothing can be divided by 0."],
      ["`#NAME?`","The function name is misspelled, as in =AVERGE(B2:B7)","The app doesn’t recognise AVERGE as a function or a name."],
      ["`#VALUE!`","=B2*C2 where C2 contains the word “none”","Arithmetic operators can’t multiply text."],
      ["`#REF!`","A column the formula used was deleted","The reference points at something that no longer exists."],
      ["`#N/A`","XLOOKUP can’t find the code in the list","N/A means not available: no matching value was found."]
    ]},
    {id:"t1u9-l3-x5", type:"spot", q:"Priya is checking formulas from three small sheets: a price list in A2:C5 (Code, Item, Price) with an order code in F2, quiz marks in B2:B7, and amounts in C2:C6. Tap every formula with a mistake.", ask:"has a mistake", mono:true, parts:[
      {t:"=XLOOKUP(F2, A2:A5, C2:C5)", flag:false, why:"Correct: exact match by default, returns the price."}, "\n", {t:"=VLOOKUP(F2, A2:C5, 3)", flag:true, why:"The last argument is missing, so VLOOKUP does an approximate match. It may happen to work on this sorted list, but on an unsorted list it can return the wrong price without an error, and a code that isn’t in the list can return a neighbouring row’s price instead of #N/A. Add FALSE: =VLOOKUP(F2, A2:C5, 3, FALSE)."}, "\n", {t:"=IF(B2>=50, Pass, \"Retake\")", flag:true, why:"Pass needs quotes. Without them the app looks for something named Pass and shows #NAME?. Write \"Pass\"."}, "\n", {t:"=COUNTIF(C2:C6, \">100\")", flag:false, why:"Correct: the comparison sign goes inside the quotes."}, "\n", {t:"=AVERAGE(B2:B7)", flag:false, why:"Correct: averages the numbers in B2:B7."}, "\n", {t:"=VLOOKUP(F2, A2:C5, 4, FALSE)", flag:true, why:"A2:C5 has only 3 columns, so asking for column 4 is an error: #REF! in Excel and Google Sheets, Err:502 in LibreOffice Calc. Price is column 3."}
    ]},
    {id:"t1u9-l3-x6", type:"mcq", q:"Ana splits a 100.00 bill between three people with `=B2/3` in three cells, formatted to two decimals. Each shows 33.33 and their SUM shows 100.00. Each person then pays exactly 33.33. What’s going on?", options:[
      {t:"The cells hold 33.333…; the format only hides the extra digits. Real payments of 33.33 add to 99.99", ok:true, why:"Right. Formatting changes the display, not the value, so the SUM adds the unrounded shares. If the rounded amount is what people actually pay, use =ROUND(B2/3, 2), and the SUM will honestly show 99.99."},
      {t:"Formatting to two decimals rounds the stored values, so the SUM is wrong", why:"Formatting doesn’t change stored values; that’s why the SUM still shows 100.00. ROUND is the function that changes values."},
      {t:"Spreadsheets can’t divide by 3 accurately", why:"The division is as accurate as it needs to be. The mismatch comes from rounding real payments while the sheet uses unrounded values."},
      {t:"The SUM function adds an extra cent to round totals", why:"SUM adds the stored values exactly. Three times 33.333… is 100."}
    ]},
    {id:"t1u9-l3-x7", type:"mcq", q:"Mei builds an order form with XLOOKUP in Google Sheets. A colleague opens the file in Excel 2019 and every lookup cell shows `#NAME?`. Why?", options:[
      {t:"Excel 2019 doesn’t have the XLOOKUP function, so it doesn’t recognise the name", ok:true, why:"Microsoft says XLOOKUP isn’t available in Excel 2016 or 2019. An unknown function name produces #NAME?. Options: the colleague uses Excel for the web or a newer version, or Mei uses VLOOKUP with FALSE."},
      {t:"Mei misspelled XLOOKUP", why:"It works in Google Sheets, so the spelling is fine. The problem is the colleague’s older version."},
      {t:"The codes being looked up aren’t in the list", why:"A missing code gives #N/A, not #NAME?. #NAME? means the app doesn’t recognise a name in the formula."},
      {t:"Google Sheets files can never be opened in Excel", why:"They can be downloaded as .xlsx and opened in Excel. Most functions carry over; newer ones need a version that has them."}
    ]}
   ],
   apply:{intro:"Practise the everyday functions on two small tables, then make each error value appear on purpose so you’ll recognise them later.", tasks:[
     {t:"Summarise the volunteer table", app:{
       all:["Type the volunteer table from this lesson: `Name` and `Hours` in A1:B1, then Ana 4, Ben 6, Chen (leave blank), Dina 3, Eli `away`, Fern 5 in rows 2 to 7.","In D2:D7 type the labels Sum, Count, CountA, Average, Min, Max. In E2:E7 type `=SUM(B2:B7)`, `=COUNT(B2:B7)`, `=COUNTA(B2:B7)`, `=AVERAGE(B2:B7)`, `=MIN(B2:B7)`, `=MAX(B2:B7)`.","Check your results: 18, 4, 5, 4.5, 3, 6.","Type `0` in B4 and watch which results change (Count becomes 5, CountA 6, Average 3.6 and Min 0). Then delete it again.","In Numbers, cells in a table may be referenced by header names in the formula editor; the results are the same."]
     }},
     {t:"Count, add and look up", app:{
       all:["Type the reunion table: Date, Category, Amount with the five rows from the lesson. Try `=COUNTIF(B2:B6, \"Food\")` (3), `=SUMIF(B2:B6, \"Food\", C2:C6)` (260) and `=COUNTIF(C2:C6, \">100\")` (2).","On the same or a new sheet, type the price list: Code, Item, Price in A1:C1 and B01 Bread 3.20, B02 Croissant 1.80, B03 Muffin 2.50, B04 Bagel 1.50 below.","In F2 type `B03`. In G2 type `=VLOOKUP(F2, A2:C5, 3, FALSE)`. You should see 2.50.","If your app has XLOOKUP (see the table in this lesson), type `=XLOOKUP(F2, A2:A5, C2:C5, \"Not found\")` in G3. Change F2 to `B09` and see both results."]
     }},
     {t:"Meet the error values", app:{
       all:["Make each error on purpose in empty cells: `=5/0` (#DIV/0!), `=SUMM(1,2)` (#NAME?), `=\"abc\"+1` (#VALUE!), and a VLOOKUP asking for column 4 of a 3-column table (#REF! in Excel and Google Sheets; LibreOffice Calc shows Err:502, an invalid argument).","Click each error cell and read the hint the app gives (Excel shows a warning icon to click; LibreOffice shows the message in the status bar at the bottom; Google Sheets shows it when you hover; Numbers shows a warning triangle to click).","Fix each one and note the fix."]
     }, write:"Which error did you find hardest to understand? Write its cause in your own words."}
   ], proof:"A sheet with the six summary results, a working COUNTIF, SUMIF and lookup, and a note of each error value with its cause and fix."},
   read:[
     {book:"wss", where:"Chapter 10, Section 10.3 “Using Arithmetic, Statistical, and Logical Functions” (AVERAGE, COUNT, MIN and MAX, then IF, COUNTIF and SUMIF under “Logical Functions”)"},
     {book:"wss", where:"Chapter 10, Section 10.5 “Auditing Formulas and Fixing Errors” (the table of error values)", note:"The book doesn’t cover VLOOKUP or XLOOKUP; this lesson and the Codex do."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t1u9-l4", title:"Organising data", minutes:55,
   goals:[
     "Lay data out as a tidy table: one row per record, one column per variable, one value per cell",
     "Spot layouts that break sorting, filtering and formulas, such as merged cells and totals in the middle",
     "Sort and filter without scrambling rows or losing data, and freeze the header row",
     "Use tables and data validation to keep entries consistent, and know what a pivot table is for"
   ],
   learn:[
    {h:"A sheet for reading, or a sheet for working?", body:[
      {lead:"Many spreadsheets are made to look nice when printed. The same choices that make them pretty often make them impossible to sort, filter or count."},
      "Look at this harvest record from a community garden. It’s easy for a person to read, but hard for a spreadsheet to work with:",
      {ex:"HARVEST 2026 (merged A1:C1)\n        June        July\nPlot 1  2kg tomato  3kg beans\nPlot 2  1.5kg       (yellow=sold)\nTOTAL   3.5kg       3kg\nPlot 3  4kg beans   n/a", label:"A sheet made for reading", mono:true},
      "The problems: a merged title row, months spread across columns, numbers and units and crop names squashed into one cell (“2kg tomato”), a colour that carries meaning, a total row in the middle of the data, and “n/a” where it isn’t clear whether nothing grew or nobody weighed it.",
      "None of this is “wrong” for a printout. But you can’t ask this sheet “how many kilograms of beans this year?” without retyping it. The fix is to keep **one sheet for the data**, laid out for the computer, and build any pretty summary separately from it."
    ]},
    {h:"Tidy data: three rules", body:[
      "Statisticians and data scientists use a simple standard, called [[tidy-data|tidy data]] (described by the statistician Hadley Wickham in a 2014 paper of that name):",
      {ol:[
        "**Each row is one record**: one observation, such as one harvest weighing, one sale or one volunteer shift.",
        "**Each column is one variable**: one kind of information, such as Plot, Month, Crop or Kg.",
        "**Each cell holds one value**: one number, one date or one piece of text, never “2 kg tomatoes”."
      ]},
      {ex:"Plot   Month  Crop      Kg\n1      June   Tomatoes  2\n1      July   Beans     3\n2      June   Tomatoes  1.5\n3      June   Beans     4", label:"The same harvest, tidy", mono:true},
      "It looks longer and plainer, and that’s the point. Now `=SUMIF(C2:C5, \"Beans\", D2:D5)` gives 7 kg of beans, a filter shows only June, and a sort puts the biggest harvests first. Units go in the header (“Kg”), not in every cell. “Sold” becomes its own column with Yes or No, instead of a colour.",
      {table:[
        ["Habit","Instead"],
        ["Colour means something (yellow = sold)","Add a column: Sold = Yes/No. Colour can then highlight it, as a bonus."],
        ["Units typed in cells (“5 kg”)","Put the unit in the header (Kg) and just the number in the cell."],
        ["Blank rows to separate groups","Add a column for the group, and use sorting or filters."],
        ["Totals mixed in with the data","Put totals above the table, on another sheet, or use a table’s total row."],
        ["“n/a”, “-”, “?”, 0 used interchangeably","Decide on one rule: leave unknown values blank, and use 0 only for a real zero."]
      ]},
      {lab:"fl-countif", t:"Practise: count matching entries in a tidy Status column"}
    ]},
    {h:"Headers, consistent entries, no merged cells", body:[
      "A tidy table has **one [[header-row|header row]]** with a short, unique name for each column, and nothing else above the data except perhaps a title separated by a blank row.",
      "**Consistent entries** matter more than people expect. To a spreadsheet, “Food”, “food ” (with a trailing space) and “Foods” are three different things in a filter, and COUNTIF won’t match the stray-space one. Lesson 1’s rule applies too: dates should be real dates, numbers real numbers, codes stored as text.",
      "Stray spaces at the start or end of an entry are invisible, so they’re easy to miss. The `TRIM` function removes them (and squeezes runs of spaces in the middle down to one): `=TRIM(A2)` gives a cleaned copy of A2. It also works inside another formula, such as a lookup: `=XLOOKUP(TRIM(E2), A2:A5, B2:B5)`.",
      {lab:"fx-trim", t:"Practise: fix a lookup that fails because of hidden spaces"},
      "**Avoid merged cells inside data.** Merging joins several cells into one big one. It’s fine for a title on a printout, but in a data range it breaks sorting, filtering and copying. Apple’s Numbers help says plainly that you can’t sort rows with merged cells, and filtering may be unavailable until you unmerge them. Other apps refuse or behave unpredictably too.",
      {tip:"Want a title centred over several columns without merging? Excel has **Center Across Selection**, a horizontal alignment option in the Format Cells dialog. In any app you can simply put the title in A1, left-aligned, with a blank row between it and the headers."}
    ]},
    {h:"Sorting without scrambling rows", body:[
      "To [[sort]] is to reorder rows by the values in one or more columns: A to Z, smallest to largest, oldest to newest. The rule that keeps you safe: **a whole row moves together**.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="m94" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="170" y="20" text-anchor="middle">Before</text><rect class="d-panel" x="95" y="30" width="150" height="24" stroke-width="1"/><text x="103" y="47">Name</text><text x="237" y="47" text-anchor="end">Hours</text><rect class="d-soft" x="95" y="54" width="150" height="72" stroke-width="1"/><path class="d-soft" d="M95,78 L245,78 M95,102 L245,102 M185,30 L185,126" stroke-width="1"/><text x="103" y="71">Ana</text><text x="237" y="71" text-anchor="end">4</text><text x="103" y="95">Ben</text><text x="237" y="95" text-anchor="end">6</text><text x="103" y="119">Chen</text><text x="237" y="119" text-anchor="end">3</text><path class="d-ink" d="M140,132 L90,156" stroke-width="2" marker-end="url(#m94)"/><path class="d-ink" d="M200,132 L250,156" stroke-width="2" marker-end="url(#m94)"/><text x="85" y="176" text-anchor="middle">Only the Hours</text><text x="85" y="193" text-anchor="middle">column sorted</text><text x="255" y="176" text-anchor="middle">Whole rows</text><text x="255" y="193" text-anchor="middle">sorted together</text><rect class="d-panel" x="10" y="204" width="150" height="24" stroke-width="1"/><text x="18" y="221">Name</text><text x="152" y="221" text-anchor="end">Hours</text><rect class="d-rose" x="10" y="228" width="150" height="72" stroke-width="1.5"/><path class="d-rose" d="M10,252 L160,252 M10,276 L160,276 M100,204 L100,300" stroke-width="1"/><text x="18" y="245">Ana</text><text x="152" y="245" text-anchor="end">3</text><text x="18" y="269">Ben</text><text x="152" y="269" text-anchor="end">4</text><text x="18" y="293">Chen</text><text x="152" y="293" text-anchor="end">6</text><rect class="d-panel" x="180" y="204" width="150" height="24" stroke-width="1"/><text x="188" y="221">Name</text><text x="322" y="221" text-anchor="end">Hours</text><rect class="d-sage" x="180" y="228" width="150" height="72" stroke-width="1.5"/><path class="d-sage" d="M180,252 L330,252 M180,276 L330,276 M270,204 L270,300" stroke-width="1"/><text x="188" y="245">Chen</text><text x="322" y="245" text-anchor="end">3</text><text x="188" y="269">Ana</text><text x="322" y="269" text-anchor="end">4</text><text x="188" y="293">Ben</text><text x="322" y="293" text-anchor="end">6</text><text class="s" x="85" y="320" text-anchor="middle">names no longer match</text><text class="s" x="255" y="320" text-anchor="middle">every row still true</text></svg>', alt:"At the top, a table labelled Before: Ana 4, Ben 6, Chen 3. Two arrows lead down. On the left, in rose, only the Hours column has been sorted: Ana 3, Ben 4, Chen 6, labelled names no longer match. On the right, in sage, whole rows have been sorted together: Chen 3, Ana 4, Ben 6, labelled every row still true.", cap:"Sorting one column on its own breaks the link between a name and its hours. Sorting whole rows keeps every record intact."},
      "The danger is selecting **only one column** and sorting it. The hours get reordered but the names don’t, and every row is now false. If many columns are involved, it may not be obvious until much later.",
      {ol:[
        "**Click a single cell inside the table** (or select the whole table, headers included). Don’t select just one column.",
        "Open the sort command: Excel **Data → Sort**; Google Sheets **Data → Sort range → Advanced range sorting options**; LibreOffice Calc **Data → Sort**; Numbers **Organize** sidebar → **Sort**.",
        "Tell the app the first row is headers (“My data has headers”, “Data has header row”, “Range contains column labels”), so the header stays on top.",
        "Choose the column and the order. Add a second level if needed (by Month, then by Kg).",
        "Check two or three rows against what you know is true."
      ]},
      "If desktop Excel sees you selected one column inside a larger table, it shows a **Sort Warning** asking whether to **Expand the selection**. Choose expand.",
      {tip:"Before a big sort, add a column called ID with 1, 2, 3 … down the rows (type 1 and 2, then fill down). Sorting by ID puts the original order back. And if a sort goes wrong, Undo immediately, or restore an earlier version ({{version-history}} in Unit 2)."}
    ]},
    {h:"Filters: hiding, not deleting", body:[
      "A [[filter]] shows only the rows that match what you choose, such as Category = Food or Amount over 100, and hides the rest. Nothing is deleted; clear the filter and every row comes back.",
      {list:[
        "Excel: click in the table, then **Data → Filter**. Arrow buttons appear in the header row.",
        "Google Sheets: select the range, then **Data → Create a filter**. **Data → Create filter view** makes a personal view that doesn’t change what other people see.",
        "LibreOffice Calc: **Data → AutoFilter**.",
        "Numbers: hover over a column letter, click the arrow and choose **Quick Filter**, or use the **Organize** sidebar → **Filter** → **Add a Filter**."
      ]},
      {warn:"A hidden row is still part of the data. `SUM` and most other functions still include rows a filter hides, so a total next to a filtered table usually covers everything, not just what you see. (Excel, Google Sheets and LibreOffice have SUBTOTAL for totals of visible rows only.) And in a shared sheet, an ordinary filter changes the view for everyone, which is why Google Sheets offers filter views."}
    ]},
    {h:"Freeze the header, and make it a table", body:[
      "In a long list, the header row scrolls out of sight. To [[freeze-panes|freeze]] it so it stays visible:",
      {list:[
        "Excel: **View → Freeze Panes → Freeze Top Row**.",
        "Google Sheets: **View → Freeze → 1 row**.",
        "LibreOffice Calc: **View → Freeze Cells → Freeze First Row**.",
        "Numbers: click the table, then **Format** sidebar → **Table** → the **Headers & Footer** menus → **Freeze Header Rows**."
      ]},
      "Several apps can also turn a range into a formal **table** with a header, banded rows, filter buttons and formulas that extend themselves as rows are added. In Excel, click in the data and choose **Insert → Table** ([[kbd:Ctrl]] + [[kbd:T]]). In Google Sheets, select the data and choose **Format → Convert to table**, then pick a type for each column (Number, Text, Date, Dropdown and so on); Sheets then warns about entries that don’t match. In Numbers, everything already lives in tables with header rows."
    ]},
    {h:"Data validation: stopping mistakes at the door", body:[
      "The best way to keep data consistent is to make inconsistent entries hard to type. [[data-validation|Data validation]] sets rules for what a cell may hold: a dropdown list of allowed values, whole numbers between 0 and 100, dates after a certain day.",
      {list:[
        "Excel: select the cells, then **Data → Data Validation**, and choose what to **Allow** (for a dropdown, choose List and type the options separated by commas).",
        "Google Sheets: **Insert → Dropdown**, or **Data → Data validation → Add rule**. By default, entries not on the list are rejected; **Advanced options** can change that to a warning.",
        "LibreOffice Calc: **Data → Validity**, then the **Criteria** tab (Allow: List, Whole Numbers, Date and more).",
        "Numbers has no general validation rules, but you can turn cells into a **Pop-Up Menu** (**Format** sidebar → **Cell** → **Data Format**), which limits entries to the choices you list."
      ]},
      "Validation guards new typing. It doesn’t fix data that was already there, and in some apps pasting over a cell can bring in values that break the rule, so it’s a seatbelt, not a guarantee."
    ]},
    {h:"A first look at pivot tables", body:[
      "Once data is tidy, a [[pivot-table|pivot table]] can summarise it in seconds: total kilograms by crop, sales by month, volunteers by team, without writing a single SUMIF. You choose which column becomes the rows, which the columns, and which values to add up or count. Excel (**Insert → PivotTable**), Google Sheets (**Insert → Pivot table**), LibreOffice Calc (**Insert → Pivot Table**) and Numbers (arranged in the **Organize** sidebar’s **Pivot Options** tab) all have them. The {{pivot-tables}} entry in the Codex explains more. They only work well on tidy data, which is one more reason to keep it that way."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“A tidy table is ugly, so it’s wrong.”** It’s for working; pretty summaries are built from it.",
        "**“Sorting one column is fine if it’s the only one I care about.”** Every row is a record; sort whole rows or the records become false.",
        "**“Filtering deletes the rows I don’t want.”** It only hides them, and most totals still count them.",
        "**“Merging cells makes things neat.”** In data it blocks sorting and filtering. Use alignment instead.",
        "**“Colour is a fine way to record information.”** Functions can’t count colours reliably; record it in a column."
      ]}
    ]}
   ],
   try:[
    {id:"t1u9-l4-x1", type:"sort", q:"Hana is cleaning up her running club’s attendance sheet. Does each feature follow the tidy-data rules, or break one?", buckets:["Follows the rules","Breaks a rule"], items:[
      {t:"One row for each person at each session", b:0, why:"Each row is one record: one person attending one session."},
      {t:"A cell saying “5 km, 31 min”", b:1, why:"Two values (distance and time) in one cell, with units. Split them into a Km column and a Minutes column."},
      {t:"A merged cell “MARCH” spanning the four March columns", b:1, why:"Merged cells block sorting and filtering, and months spread across columns break “one column per variable”. Use a Date column instead."},
      {t:"A Date column holding real dates", b:0, why:"One variable per column, stored as dates, so you can sort and filter by date."},
      {t:"Members who paid are shaded green", b:1, why:"Colour isn’t a value functions can count reliably. Add a Paid column with Yes or No."},
      {t:"A total row in the middle, after the March sessions", b:1, why:"A total isn’t a record. Sorting would move it among the data, and SUM of the column would count it twice."},
      {t:"A single header row with short names: Name, Date, Km, Minutes", b:0, why:"One header row with unique names is exactly what sorting, filters and tables expect."}
    ]},
    {id:"t1u9-l4-x2", type:"number", q:"A garden sheet has 5 plots as rows and 3 month columns (June, July, August) holding harvest weights. Tomás reshapes it into a tidy table with the columns Plot, Month and Kg. How many data rows (not counting the header) will the tidy table have?", answer:15, tol:0, unit:"rows", why:"Each plot-and-month combination becomes one record: 5 plots × 3 months = **15** rows, each holding one weight.", wrongs:[
      {v:5, tol:0, why:"That’s the number of rows in the original, wide layout. In tidy form each month becomes its own row too: 5 × 3 = 15."},
      {v:8, tol:0, why:"That adds plots and months (5 + 3). Each plot needs one row per month, so multiply: 15."},
      {v:3, tol:0, why:"That’s the number of month columns. Each of the 5 plots has a row for each of the 3 months: 15."}
    ]},
    {id:"t1u9-l4-x3", type:"mcq", q:"Amara selects only column B (Hours) of her volunteer table and sorts it largest to smallest. Excel shows a warning, and she chooses “Continue with the current selection”. What has happened?", options:[
      {t:"The hours were reordered but the names weren’t, so most names now have someone else’s hours", ok:true, why:"Right. Only the selected column moved, breaking every record. She should Undo straight away, then sort again with “Expand the selection” (or by clicking a single cell in the table first)."},
      {t:"The whole table was sorted, because Excel always keeps rows together", why:"Excel warned her because it would not keep rows together if she continued with only column B selected."},
      {t:"Nothing changed, because you can’t sort numbers", why:"Numbers sort largest to smallest perfectly well; that part worked. The problem is what it did to the records."},
      {t:"The hours were deleted and replaced with ranks", why:"Sorting never deletes or replaces values; it only moves them. Here it moved them without their names."}
    ]},
    {id:"t1u9-l4-x4", type:"order", q:"Put Kenji’s steps for safely sorting a 300-row sales table by Amount in a sensible order.", items:[
      {t:"Add an ID column numbered 1, 2, 3 … so the original order can be restored", why:"First, a way back. If anything goes wrong, sorting by ID restores the order."},
      {t:"Click a single cell inside the table (not one whole column)", why:"Next, tell the app which table to sort. A single cell lets it find the whole table; selecting one column risks sorting it alone."},
      {t:"Open the sort command (Data → Sort, or the app’s equivalent)", why:"Then open the sort options rather than a one-click sort, so you can set the header and the column."},
      {t:"Tick “has header row” and choose Amount, largest to smallest", why:"Marking the header keeps it on top; then choose the column and direction."},
      {t:"Check a few rows against the original receipts", why:"Finally, verify. A couple of known records tell you the rows stayed together."}
    ]},
    {id:"t1u9-l4-x5", type:"mcq", q:"Lucía filters her expense table to show only Category = Food. Below the table, a cell with `=SUM(C2:C40)` still shows the total of all categories. Why?", options:[
      {t:"A filter only hides rows; SUM still includes hidden rows", ok:true, why:"Right. Filters change the view, not the data. For a total of just the visible rows, Excel, Google Sheets and LibreOffice have SUBTOTAL (for example =SUBTOTAL(109, C2:C40) in Excel and Google Sheets). Or use SUMIF on the category."},
      {t:"The filter deleted the other rows, but SUM remembers old values", why:"Filters don’t delete anything; clear the filter and all rows return. SUM is simply adding rows that are hidden."},
      {t:"SUM is broken when a filter is on", why:"SUM is working as designed: it adds every cell in the range, visible or not."},
      {t:"She needs to press Enter to recalculate", why:"Spreadsheets recalculate automatically. The result is what SUM is supposed to give."}
    ]},
    {id:"t1u9-l4-x6", type:"match", q:"Match each problem with the feature that solves it.", pairs:[
      ["When you scroll down a long list, you can’t see which column is which","Freeze the header row","Freezing keeps the header visible while the rows scroll."],
      ["People type “Yes”, “yes ”, “Y” and “yep” in the Paid column","Data validation with a dropdown list","A dropdown limits entries to the allowed values, so they stay consistent."],
      ["You want to see only July’s rows for a moment","A filter","A filter hides non-matching rows without deleting them."],
      ["You want the biggest donations at the top","Sort, largest to smallest","Sorting reorders whole rows by a column’s values."],
      ["You want total sales for every month in a few clicks","A pivot table","A pivot table groups and summarises tidy data without writing formulas."]
    ]},
    {id:"t1u9-l4-x7", type:"spot", q:"Here is the top of a shared club sheet. Tap every feature that will cause trouble when sorting, filtering or counting.", ask:"will cause trouble", mono:true, parts:[
      "Row 1: ", {t:"CLUB MEMBERS 2026 (merged A1:E1)", flag:true, why:"A merged title directly on top of the data gets in the way of sorting and filtering. Put the title elsewhere or unmerge it and leave a blank row before the headers."}, "\nRow 2: ", {t:"Name | Joined | Fee | Paid | Team", flag:false, why:"A single header row with short, unique names: fine."}, "\nRow 3: ", {t:"Ana Souza | 2026-01-14 | 45 | Yes | Blue", flag:false, why:"One record, one value per cell, a real date: fine."}, "\nRow 4: ", {t:"Ben Ito | 14 Jan | 45 | yes  | blue", flag:true, why:"“yes ” has a trailing space and different capitals, and the date may be text in a different style. A dropdown and real dates would keep entries consistent."}, "\nRow 5: ", {t:"Chen Wu | 2026-02-03 | 45 EUR | Yes | Red", flag:true, why:"“45 EUR” is text, so SUM and AVERAGE will skip it. Put the currency in the header or its own column and just 45 in the cell."}, "\nRow 6: ", {t:"Dina Haddad | 2026-02-10 | 45 | No | Red", flag:false, why:"A clean record: fine."}
    ]}
   ],
   apply:{intro:"Tidy a small messy table, then sort, filter, freeze and validate it. Use the club example in this lesson or a small list of your own (a reading log, household expenses, a team roster).", tasks:[
     {t:"Tidy, then sort safely", app:{
       ms:["Type a small table with a header row and 6–10 records, using one value per cell (for example Name, Date, Category, Amount).","Add an **ID** column: type 1 and 2 in the first two rows, select both and fill down.","Click a single cell in the table and choose **Data → Sort**. Tick **My data has headers**, choose Amount, **Largest to Smallest**, and click **OK**.","Check two rows. Then sort by ID, **Smallest to Largest**, to restore the original order."],
       google:["Type a small table with a header row and 6–10 records, using one value per cell.","Add an **ID** column: type 1 and 2 in the first two rows, select both and drag the fill handle down.","Select the whole table, then **Data → Sort range → Advanced range sorting options**. Tick **Data has header row**, choose Amount and **Z → A**, and click **Sort**.","Check two rows, then sort by ID A → Z to restore the order."],
       libre:["Type a small table with a header row and 6–10 records, using one value per cell.","Add an **ID** column: type 1 and 2, select both and fill down.","Click a cell in the table and choose **Data → Sort**. On the **Options** tab check that **Range contains column labels** is ticked. Sort by Amount, **Descending**, and click **OK**.","Check two rows, then sort by ID ascending to restore the order."],
       apple:["Type a small table with one header row and 6–10 records, using one value per cell.","Add an **ID** column: type 1 and 2, select both and drag the yellow autofill dot down.","Click the table, open the **Organize** sidebar → **Sort**, choose **Sort Entire Table**, click **Add a Column**, choose Amount and **Descending**, then **Sort Now** if it appears.","Check two rows, then sort by ID ascending to restore the order."]
     }},
     {t:"Filter and freeze", app:{
       ms:["Click in the table and choose **Data → Filter**. Use the arrow on the Category header to show one category, then **Clear Filter**.","Choose **View → Freeze Panes → Freeze Top Row** and scroll down: the headers stay.","Optional: click in the data and press [[kbd:Ctrl]] + [[kbd:T]] to make it a table. Notice the filter buttons and banded rows."],
       google:["Select the table and choose **Data → Create a filter**. Use the filter icon on the Category header to show one category, then **Data → Remove filter**.","Choose **View → Freeze → 1 row** and scroll down.","Optional: select the data and choose **Format → Convert to table**, then look at the column-type options."],
       libre:["Click in the table and choose **Data → AutoFilter**. Use the arrow on the Category header to show one category, then turn AutoFilter off the same way.","Choose **View → Freeze Cells → Freeze First Row** and scroll down."],
       apple:["Hover over the Category column letter, click the arrow and choose **Quick Filter**. Untick some values, then tick them again (or remove the filter in the **Organize** sidebar → **Filter**).","Click the table, open **Format** → **Table**, and in the **Headers & Footer** menu choose **Freeze Header Rows**. Scroll down to check."]
     }},
     {t:"Add a dropdown list", app:{
       ms:["Select the Category cells below the header.","Choose **Data → Data Validation**. Under **Allow**, choose **List**; in **Source** type `Food,Transport,Venue,Other`. Click **OK**.","Click a cell: a dropdown arrow appears. Try typing a value that isn’t on the list and read the message."],
       google:["Select the Category cells below the header.","Choose **Insert → Dropdown**. Add the options Food, Transport, Venue, Other and click **Done**.","Try typing a value that isn’t on the list and see what happens."],
       libre:["Select the Category cells below the header.","Choose **Data → Validity**. On the **Criteria** tab, set **Allow** to **List** and type one entry per line: Food, Transport, Venue, Other. Click **OK**.","Try typing a value that isn’t on the list and read the message."],
       apple:["Select the Category cells below the header.","Open **Format** → **Cell**, set **Data Format** to **Pop-Up Menu**, and edit the list to Food, Transport, Venue, Other.","Click a cell and choose from the menu."]
     }, write:"Which messy habits did your original data have? What did you change?"}
   ], proof:"A tidy table with an ID column that you sorted and restored, a filter you applied and cleared, a frozen header, and a dropdown list on one column."},
   read:[
     {book:"wss", where:"Chapter 9, Section 9.4 “Formatting and Templates in Microsoft Excel”: “Merging Cells” and “Freezing Columns and Rows”"},
     {book:"wss", where:"Chapter 11, Section 11.1 “Understanding Data, Data Validation, and Data Tables” (data validation and the filter buttons on a table)", note:"In this book, “Data Table” in Section 10.1 means Excel’s What-If Analysis tool, which is different from the tidy tables in this lesson."},
     {book:"wss", where:"Background reading: Chapter 10, Section 10.4 “PivotTables”"}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t1u9-l5", title:"Charts and sharing data", minutes:55,
   goals:[
     "Choose a chart type that answers the question being asked",
     "Set axes and labels so a chart doesn’t exaggerate or hide differences",
     "Explain what a CSV file is, what it keeps and what it loses",
     "Export and import CSV files without garbling accented letters or losing leading zeros"
   ],
   learn:[
    {h:"Start with the question", body:[
      {lead:"A chart is an answer to a question. Pick the question first, and the chart type usually picks itself."},
      "A [[chart]] turns numbers into shapes we can compare at a glance: lengths, heights, positions, angles. Different shapes suit different questions:",
      {table:[
        ["The question","A good chart","Notes"],
        ["How do these categories compare?","Bar or column chart","Bars are compared by length, so the value axis starts at zero. Sorting bars by size helps."],
        ["How did this change over time?","Line chart","Time runs left to right. A few lines at most, each labelled."],
        ["How is one whole split into parts?","Pie chart (only a few parts) or a stacked bar","Angles are hard to compare; with more than a few parts, a sorted bar chart is usually clearer."],
        ["Do two measures move together?","Scatter chart","Each dot is one record. A pattern shows a relationship, not that one causes the other."],
        ["How are values spread out?","Histogram","Each bar counts how many values fall in a range (a “bin”)."]
      ]},
      "OpenStax’s section on data analysis charts matches each chart type to a kind of data, and notes several times that flat 2D versions are easier to read than 3D ones.",
      "Two examples: Priya wants to know which of her five cakes sells best. That’s a comparison of categories, so a bar chart sorted from best to worst seller. Kenji wants to know whether his electricity use is rising through the year. That’s change over time, so a line chart with months along the bottom.",
      {lab:"fl-share", t:"Practise: work out each part’s share of a whole (the numbers behind a pie chart; uses $ from Lesson 2)"}
    ]},
    {h:"Axes that tell the truth", body:[
      "Unit 6 showed how true numbers can give false impressions ({{misleading-numbers}}). Your own charts can do the same by accident. The biggest trap is the starting point of the value axis, called a **truncated axis** when it doesn’t start at zero.",
      {fig:'<svg viewBox="0 0 340 274"><text x="100" y="22" text-anchor="middle">Axis starts at 0</text><text x="265" y="22" text-anchor="middle">Axis starts at 45</text><path class="d-soft" d="M40,40 L160,40 M40,120 L160,120 M210,40 L330,40 M210,120 L330,120" stroke-width="1"/><path class="d-ink" d="M40,36 L40,200 L160,200 M210,36 L210,200 L330,200" stroke-width="1.5" fill="none"/><text class="s" x="34" y="204" text-anchor="end">0</text><text class="s" x="34" y="124" text-anchor="end">30</text><text class="s" x="34" y="44" text-anchor="end">60</text><text class="s" x="204" y="204" text-anchor="end">45</text><text class="s" x="204" y="124" text-anchor="end">50</text><text class="s" x="204" y="44" text-anchor="end">55</text><rect class="d-lup" x="55" y="61" width="40" height="139" stroke-width="1.5"/><rect class="d-gold" x="110" y="72" width="40" height="128" stroke-width="1.5"/><rect class="d-lup" x="225" y="88" width="40" height="112" stroke-width="1.5"/><rect class="d-gold" x="280" y="152" width="40" height="48" stroke-width="1.5"/><text x="75" y="55" text-anchor="middle">52</text><text x="130" y="66" text-anchor="middle">48</text><text x="245" y="82" text-anchor="middle">52</text><text x="300" y="146" text-anchor="middle">48</text><text x="75" y="218" text-anchor="middle">A</text><text x="130" y="218" text-anchor="middle">B</text><text x="245" y="218" text-anchor="middle">A</text><text x="300" y="218" text-anchor="middle">B</text><text x="10" y="246">Same numbers. On the right, A looks more</text><text x="10" y="264">than twice B; really it’s about 8% bigger.</text></svg>', alt:"Two bar charts of the same data: A is 52 and B is 48. In the left chart the axis starts at 0 and the bars are nearly the same height. In the right chart the axis starts at 45, so bar A is more than twice as tall as bar B. A caption says A is really only about 8 percent bigger.", cap:"The same two values with two different axis starting points."},
      {list:[
        "**Bar and column charts: start the value axis at zero.** We read bars by their length. The UK Office for National Statistics’ chart guidance says a bar chart’s axis should always start at zero, and suggests a different chart (such as a dot plot) if that won’t work.",
        "**Line charts can start above zero**, because we read the line’s position and slope, not a length. The same guidance allows cropping the axis for line and scatter charts when needed, and asks for a visible gap between the start of the axis and the first data point. If you crop, make the axis labels obvious.",
        "**When comparing charts side by side, use the same scale** on each. Apps choose each chart’s axis automatically, and two automatic axes can make a small change look as big as a large one.",
        "**Watch what the app chose for you.** Spreadsheet apps sometimes start the axis above zero automatically when all the values are large. Check the lowest number on the axis every time."
      ]},
      {key:"Before sharing a chart, read its axis: where does it start, and is the scale even?"}
    ]},
    {h:"Labels that let a chart stand on its own", body:[
      "Someone should understand your chart without you there to explain it. A short checklist:",
      {list:[
        "**A title that says what it shows**, such as “Cake sales by type, October 2026”, not just “Chart 1”.",
        "**Axis titles with units**: kg, minutes, euros, number of members, % of members.",
        "**Readable categories**: long names fit better on a horizontal bar chart than under columns.",
        "**A legend only when needed**: with one series, delete it; with a few lines, labelling each line directly is easier to read.",
        "**Colour that isn’t the only clue**: many people see some colours differently, and charts are often printed in black and white, so labels, positions or patterns should carry the meaning too.",
        "**The source and date of the data**, in a note under the chart."
      ]},
      "In every app the steps are similar: select the data **including the header row**, insert a chart, check the app put the right things on each axis, then edit the title and axes. Excel uses **Insert** (desktop Excel also has **Recommended Charts**); Google Sheets uses **Insert → Chart** and the **Chart editor** panel; LibreOffice Calc uses **Insert → Chart**; Numbers has a **Chart** button in the toolbar."
    ]},
    {h:"CSV: the plain-text table", body:[
      "When data moves between apps, websites and people, it very often travels as a [[csv|CSV]] file: comma-separated values. A CSV is a plain text file in which each line is one row and commas separate the cells:",
      {ex:"Name,Town,Amount\n\"Okafor, Ada\",Lagos,25.00\nKenji Sato,Osaka,40.50\nLin Mei,Taipei,12", label:"A CSV file opened in a text editor", mono:true},
      "Notice the quotes around “Okafor, Ada”: because the value contains a comma, it’s wrapped in double quotes so the comma isn’t read as a new column. Spreadsheet apps add these quotes for you when they save.",
      "CSV is popular because it’s simple: almost every program can read and write it, and it’s an open, text-based format (Unit 2’s {{file-formats}}). But simplicity has a price. A CSV keeps **only the values**:",
      {table:[
        ["Kept","Lost"],
        ["The values in each cell, written as text","Formulas (only their results are saved)"],
        ["The order of rows and columns","Number formats, fonts, colours, column widths"],
        ["Text with commas (inside quotes)","Every sheet except the one you’re on"],
        ["Accented letters and other scripts (if saved as UTF-8)","Charts, comments, filters, data validation, merged cells"]
      ]},
      "Excel’s help says each CSV format “saves only the active sheet”, and Excel for the web’s command is **Download this sheet as CSV**. Google Sheets downloads the current sheet. LibreOffice Calc saves the active sheet. Numbers asks whether to make one file per table or combine the tables.",
      {key:"Save your working copy in the app’s own format (.xlsx, .ods, .numbers or a Google Sheet). Export a CSV as a copy, for sharing."}
    ]},
    {h:"Encoding: why names turn into gibberish", body:[
      "A text file is stored as bytes, and a **text encoding** is the code that says which bytes mean which letters. Plain English letters are the same in almost every encoding, but accented letters and other scripts are not. The modern standard, used across the web, is [[utf-8|UTF-8]], which can store every script: é, ñ, ø, ü, Arabic, Chinese, Devanagari, emoji.",
      "If a file saved in UTF-8 is opened as if it were in an older encoding, names are garbled: “José” becomes “JosÃ©”, because the two bytes that make é in UTF-8 are read as two separate letters. The data isn’t lost; it’s being read with the wrong code.",
      {list:[
        "When saving, choose a UTF-8 option where you see one: desktop Excel lists **CSV UTF-8 (Comma delimited)** among its file types; LibreOffice Calc’s CSV export lets you pick **Unicode (UTF-8)** as the character set; Numbers has the text encoding under **Advanced Options** when you export.",
        "When importing, look for a character-set or encoding setting and choose UTF-8 (often called 65001: Unicode (UTF-8) in Excel’s import window)."
      ]}
    ]},
    {h:"Importing a CSV without losing zeros", body:[
      "Lesson 1’s problems come back on import. Double-clicking a CSV opens it in your spreadsheet app, which **guesses** each column’s type: postcodes and phone numbers lose their leading zeros, codes such as SEPT2 or 1-2 become dates, and long IDs are cut to 15 digits. Saving the file again then makes the damage permanent.",
      "The safer route is to **import** the file and tell the app which columns are text:",
      {list:[
        "**Excel:** **Data → From Text/CSV**, choose the file, then **Transform Data**. Select each code column and set **Data Type → Text** (choose **Replace current**), then **Close & Load**. Desktop Excel’s **Automatic Data Conversion** options (Lesson 1) also apply when you open CSV files.",
        "**Google Sheets:** **File → Import → Upload**, choose the file, an import location and the separator, then **Import**. If the dialog offers to convert text to numbers, dates and formulas, untick it to keep codes exactly as written.",
        "**LibreOffice Calc:** open the CSV and the **Text Import** dialog appears. Choose the character set (UTF-8) and separator, click a code column in the preview and set **Column type** to **Text**. Untick **Detect special numbers** if dates are being guessed.",
        "**Numbers:** open the CSV with **File → Open**, then check code columns straight away. If zeros are already gone, reformatting won’t bring them back; you’d need to fix the source or retype them."
      ]},
      "Separators vary too. In countries that use a decimal comma, many programs write CSV files with semicolons between values. Import dialogs let you choose the separator, and Google Sheets can detect it automatically.",
      {warn:"Never “fix” a CSV by opening and saving it repeatedly in a spreadsheet app. Each round trip can apply the same guesses again. Keep the original file untouched, and work on a copy."},
      {lab:"fx-trim", t:"Practise: imported and pasted values often carry hidden spaces; clean them with TRIM before a lookup"}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Any chart will do; the numbers are right.”** The chart type and axis decide what people see. Pick for the question, and check the axis.",
        "**“Bars can start wherever makes the difference visible.”** For bars, a non-zero start exaggerates differences. Use a dot plot or a line instead.",
        "**“CSV is a spreadsheet format.”** It’s plain text: values only, one sheet, no formulas or formatting.",
        "**“The file is corrupted: the names are gibberish.”** Usually it’s an encoding mismatch. Re-import as UTF-8.",
        "**“Opening a CSV is harmless.”** Opening it is when the app guesses types. Import with text columns for codes, and keep the original."
      ]}
    ]}
   ],
   try:[
    {id:"t1u9-l5-x1", type:"match", q:"Match each question with the chart that answers it best.", pairs:[
      ["Which of five cakes sold the most last month?","Bar chart, sorted by size","Comparing categories: bars sorted by length make the ranking obvious."],
      ["How has the club’s membership changed each month since 2023?","Line chart","Change over time: time along the bottom, one line."],
      ["Do people who sleep longer report less stress?","Scatter chart","A relationship between two measures: one dot per person."],
      ["How are the finishing times of 300 runners spread out?","Histogram","A distribution: bars count how many times fall in each range."],
      ["What share of a small budget goes to each of three costs?","Pie chart or stacked bar","Parts of one whole, with only a few parts, is where a pie can work."]
    ]},
    {id:"t1u9-l5-x2", type:"number", q:"A bar chart shows two values: A = 52 and B = 48. Its value axis starts at **45**. How many times taller does bar A **look** than bar B? (Round to two decimal places.)", answer:2.33, tol:0.02, unit:"times", why:"Each bar is drawn from 45 upwards: A is 52 − 45 = 7 units tall, B is 48 − 45 = 3 units tall. 7 ÷ 3 ≈ **2.33**, so A looks more than twice as big. In reality 52 ÷ 48 ≈ 1.08: A is only about 8% bigger.", wrongs:[
      {v:1.08, tol:0.02, why:"1.08 is the true ratio (52 ÷ 48). The question asks how it looks: drawn from 45, the bars are 7 and 3 units tall, so A looks 7 ÷ 3 ≈ 2.33 times taller."},
      {v:4, tol:0, why:"4 is the difference between the values (52 − 48), not a ratio. The visible bar heights are 7 and 3: 7 ÷ 3 ≈ 2.33."},
      {v:1.75, tol:0.02, why:"That divides 7 by 4. Bar B’s visible height is 48 − 45 = 3, so 7 ÷ 3 ≈ 2.33."}
    ], hint2:"Bars are drawn from the axis start, not from zero. How tall is each bar above 45?"},
    {id:"t1u9-l5-x3", type:"mcq", q:"Sione makes a column chart of donations: 1,020 this year and 980 last year. The app automatically starts the axis at 960, so this year’s column looks three times taller. What should he do?", options:[
      {t:"Set the value axis minimum to 0, or show the change as a number or a line chart", ok:true, why:"Column lengths should be honest, so the axis starts at zero. If the small change is the point, say it directly (“up 4%”) or use a line chart with a clearly labelled axis."},
      {t:"Keep it: the chart makes the growth easier to see", why:"It makes a 4% rise look like a tripling. That’s exactly the truncated-axis problem: true numbers, false impression."},
      {t:"Switch to a 3D column chart so the difference looks smaller", why:"3D effects make values harder to read, and don’t fix the misleading axis start."},
      {t:"Remove the axis labels so nobody can tell where it starts", why:"That hides the problem rather than fixing it, and makes the chart harder to read honestly."}
    ]},
    {id:"t1u9-l5-x4", type:"sort", q:"Tomás saves his club’s workbook (two sheets, formulas, bold headers, a chart) as a CSV. Which things survive in the CSV, and which are lost?", buckets:["Kept in the CSV","Lost"], items:[
      {t:"The values shown in the current sheet’s cells", b:0, why:"A CSV is exactly that: the values, as text, row by row."},
      {t:"The formula =SUM(C2:C40)", b:1, why:"Only the formula’s result is saved. Open the CSV and the cell holds a plain number."},
      {t:"The second sheet", b:1, why:"CSV holds one table. Excel’s help says each CSV format saves only the active sheet; export each sheet separately if you need them."},
      {t:"Bold headers and coloured cells", b:1, why:"A CSV is plain text, so it has no formatting."},
      {t:"A name containing a comma, such as “Okafor, Ada”", b:0, why:"Kept: the app wraps the value in double quotes so the comma stays inside one cell."},
      {t:"The chart", b:1, why:"Charts are objects in the workbook, not cell values, so they aren’t part of a CSV."}
    ]},
    {id:"t1u9-l5-x5", type:"spot", q:"Dmitri opened a CSV export in his spreadsheet app and copied some rows here. Tap every value that shows a problem caused by encoding or by type guessing.", ask:"shows a problem", mono:true, parts:[
      "Name: ", {t:"JosÃ© Ruiz", flag:true, why:"Mojibake: UTF-8 bytes for é read with the wrong encoding. Re-import the file as UTF-8."}, "\nPostcode: ", {t:"2134", flag:true, why:"The original was 02134; the leading zero was dropped when the column was guessed to be numbers. Import the column as Text."}, "\nTown: ", {t:"Osaka", flag:false, why:"Fine: plain text, unchanged."}, "\nGene: ", {t:"2-Sep", flag:true, why:"This was SEPT2, turned into a date by type guessing: the same problem that affected published research."}, "\nAmount: ", {t:"40.5", flag:false, why:"Fine: 40.50 and 40.5 are the same number; only the display differs."}, "\nName: ", {t:"Ana Souza", flag:false, why:"Fine: no special letters, nothing to garble."}
    ]},
    {id:"t1u9-l5-x6", type:"order", q:"Put Amara’s steps for importing a member list CSV into Excel, keeping the phone numbers’ leading zeros, in order.", items:[
      {t:"Keep the original CSV untouched and work with a copy", why:"First, protect the source. If anything goes wrong, you can start again."},
      {t:"In a blank workbook choose Data → From Text/CSV and pick the file", why:"Importing, rather than double-clicking, lets her control how columns are read."},
      {t:"Choose Transform Data to open the editor", why:"The editor shows each column and its detected type."},
      {t:"Select the Phone column and set its data type to Text (Replace current)", why:"Text keeps every character, including leading zeros."},
      {t:"Choose Close & Load, then check a few phone numbers", why:"Load the data into the sheet, then verify that zeros survived."}
    ]},
    {id:"t1u9-l5-x7", type:"mcq", q:"Fatima emails a CSV of her choir’s members. A colleague replies that names like “Zoë” and “Søren” look like “ZoÃ«” and “SÃ¸ren”. What’s the most likely explanation?", options:[
      {t:"The file is in UTF-8 but was opened with a different encoding; re-importing as UTF-8 should fix it", ok:true, why:"Right. Accented letters take two bytes in UTF-8. Read with an older encoding, each byte shows as a separate odd character. The data is intact; it was read with the wrong code."},
      {t:"The file is corrupted and must be recreated", why:"The pattern (Ã plus another character in place of each accented letter) is the signature of an encoding mismatch, not corruption."},
      {t:"CSV files can’t store accented letters", why:"They can: a CSV saved as UTF-8 can hold any script. The two programs just need to agree on the encoding."},
      {t:"The colleague’s spreadsheet has the wrong number format", why:"Number formats affect how numbers display, not how letters are decoded."}
    ]}
   ],
   apply:{intro:"Make an honest chart from a small table, then send the data round trip through CSV and see exactly what survives.", tasks:[
     {t:"Make a chart and check its axis", app:{
       ms:["Type a small table: five categories in A2:A6 (for example cake types) and values in B2:B6, with headers in row 1.","Select A1:B6 and choose **Insert**, then a **2-D Bar** or **Column** chart (desktop Excel: **Insert → Recommended Charts** is also available).","Click the chart title and type a clear one. Add axis titles from the **+** (Chart Elements) button on desktop, or the chart options in Excel for the web.","Check the value axis starts at 0. On desktop, right-click the axis → **Format Axis** → **Bounds**, **Minimum**."],
       google:["Type a small table: five categories in A2:A6 and values in B2:B6, with headers in row 1.","Select A1:B6 and choose **Insert → Chart**. In the **Chart editor**, **Setup** tab, choose **Bar chart** or **Column chart**.","On the **Customize** tab, edit **Chart & axis titles**.","Under **Customize → Vertical axis** (or **Horizontal axis** for a bar chart), check that **Min** is 0 or empty."],
       libre:["Type a small table: five categories in A2:A6 and values in B2:B6, with headers in row 1.","Select A1:B6 and choose **Insert → Chart**. Pick **Bar** or **Column** and click **Finish**.","With the chart in edit mode, use **Insert → Titles** to add a title and axis titles.","Right-click the value axis → **Format Axis** → **Scale**: the minimum should be 0 (or **Automatic** with 0 shown)."],
       apple:["Type a small table: five categories and their values, with a header row.","Select the cells and click **Chart** in the toolbar, then choose a 2D **Bar** or **Column** chart.","With the chart selected, use the **Format** sidebar → **Chart** to show and edit the title.","On the **Axis** tab, check the value axis scale starts at 0."]
     }},
     {t:"Export a CSV and look inside it", app:{
       ms:["Add a second sheet and a formula such as `=SUM(B2:B6)` in B7, and make the header bold.","Desktop Excel: **File → Save a Copy** (or **Save As**) and choose **CSV UTF-8 (Comma delimited) (*.csv)**. Excel for the web: **File → Export → Download this sheet as CSV**.","Open the CSV in a text editor (Notepad on Windows, TextEdit on a Mac, the Text app on a Chromebook).","Look for: the result of the SUM instead of the formula, no bold, and no second sheet."],
       google:["Add a second sheet and a formula such as `=SUM(B2:B6)` in B7, and make the header bold.","Choose **File → Download → Comma-separated values (.csv)**. Only the current sheet is downloaded.","Open the CSV in a text editor (Notepad on Windows, TextEdit on a Mac, the Text app on a Chromebook).","Look for: the result of the SUM instead of the formula, no bold, and no second sheet."],
       libre:["Add a second sheet and a formula such as `=SUM(B2:B6)` in B7, and make the header bold.","Choose **File → Save As**, set the file type to **Text CSV (.csv)** and tick **Edit filter settings**. When asked, keep the CSV format, then choose **Unicode (UTF-8)** as the character set and comma as the field delimiter.","Open the CSV in a text editor and look for: the SUM’s result, no bold, and only one sheet."],
       apple:["Add a second table and a formula such as a SUM in a footer row, and make the header bold.","Choose **File → Export To → CSV**. Choose whether to make one file per table, and open **Advanced Options** to see the text encoding.","Open the CSV in TextEdit (Format → Make Plain Text if needed) and look for: the SUM’s result and no formatting."]
     }},
     {t:"Import a CSV and keep its zeros", app:{
       ms:["In a text editor, make a file with two lines: `Name,Postcode` and `Ana,02134`. Save it as test.csv (in Notepad, choose **Save as type: All files** so it isn’t saved as .txt).","Double-click test.csv to open it in Excel: the postcode probably shows 2134. Close without saving.","In a blank workbook choose **Data → From Text/CSV**, pick the file, choose **Transform Data**, set the Postcode column’s **Data Type** to **Text** (**Replace current**), then **Close & Load**. The zero stays."],
       google:["In a text editor, make a file with two lines: `Name,Postcode` and `Ana,02134`, and save it as test.csv.","In Google Sheets choose **File → Import → Upload**, pick the file, choose **Create new spreadsheet** and **Import data**.","Check the postcode. If the zero is gone, import again and untick any option to convert text to numbers and dates, or set the column to **Plain text** first and import into the existing sheet."],
       libre:["In a text editor, make a file with two lines: `Name,Postcode` and `Ana,02134`, and save it as test.csv.","In LibreOffice choose **File → Open** and pick the file. The **Text Import** dialog appears.","Set the character set to UTF-8 and the separator to Comma. Click the Postcode column in the preview, set **Column type** to **Text**, and click **OK**. The zero stays."]
     }, appNote:"Numbers opens CSV files directly but doesn’t offer per-column import types like the other apps. Open test.csv in Numbers and see whether the zero survived, then try the same import in Google Sheets or LibreOffice Calc for comparison.", write:"What changed between your workbook and the CSV? Did the zero survive each way of opening?"}
   ], proof:"A chart with a clear title, labelled axes and a value axis starting at zero; a CSV you exported and read in a text editor; and a CSV imported with its leading zero intact."},
   read:[
     {book:"wss", where:"Chapter 11, Section 11.5 “Data Analysis Charts” (including “Misleading Graphs” and the advice on 2D charts)"},
     {book:"wss", where:"Chapter 9, Section 9.6 “Text and Numbers in Google Sheets” (copying and pasting, number and text formats, and basic graphs)"}
   ]
  }
  ],
  checkpoint:["t1u9-q02","t1u9-q05","t1u9-q08","t1u9-q11","t1u9-q14","t1u9-q19","t1u9-q22","t1u9-q25","t1u9-q30","t1u9-q34","t1u9-q39","t1u9-q43"],
  codex:[
   {id:"spreadsheet-basics", title:"Spreadsheet basics", aka:["workbook","worksheet","cell","range","Excel","Google Sheets","LibreOffice Calc","Numbers"], tags:["spreadsheets","basics"],
    summary:"A spreadsheet is a grid of cells that hold values and formulas; files are workbooks, pages are sheets, and every cell has an address.",
    levels:{
     starter:[
      "A spreadsheet is like squared paper where each square can hold a number, a word, a date, or a small calculation that keeps itself up to date. People use them for budgets, price lists, class marks, rotas and research data.",
      {list:["The whole file is a **workbook** (Google Sheets calls it a spreadsheet).","Each page is a **worksheet**, or sheet, with a tab of its own.","Each box is a **cell**. Its address is its column letter and row number: B2 is column B, row 2.","A **range** is a block of cells, written like `A2:A10` (from A2 to A10)."]},
      "The common apps are Microsoft Excel, Google Sheets, LibreOffice Calc and Apple Numbers. Free options exist for all of them: Excel for the web with a free Microsoft account, Google Sheets with a Google account, LibreOffice (free and open source) and Numbers on Apple devices.",
      {key:"The cell shows a result; the formula bar shows what the cell really holds."}
     ],
     builder:[
      "Every app has the same core parts. The **name box** shows the selected cell’s address, the **formula bar** shows its real contents, and the sheet tabs switch between worksheets.",
      {table:[["Idea","Written as","Example"],["One cell","column + row","`C4`"],["A range","first:last","`B2:D10`"],["A whole column or row","letter:letter, number:number","`B:B`, `3:3`"],["A cell on another sheet","sheet name + cell","`Sheet2!B4` (Excel, Google Sheets); `$Sheet2.B4` (LibreOffice’s usual style)"]]},
      "Apple Numbers is organised differently: a sheet is a canvas that can hold several separate tables, charts and text boxes. Each table has its own A1, header rows and footer rows, and a reference to another table looks like `Table 2::B2`. Numbers can also refer to cells by their header names.",
      "Spreadsheets recalculate automatically: change an input and every formula that depends on it updates. That’s what makes them useful for “what if?” questions: what if the price rises 10%, what if three more people come?",
      {tip:"Keep each input in one clearly labelled cell, and let formulas refer to it. Then a change is made once, in one place."},
      "**Undo is your friend.** [[kbd:Ctrl]] + [[kbd:Z]] ([[kbd:Cmd]] + [[kbd:Z]] on a Mac) reverses most actions, including sorts and deletions, as long as you notice soon. For older mistakes, use the file’s version history."
     ],
     pro:[
      "Sizes differ by app. Desktop Excel worksheets have 1,048,576 rows and 16,384 columns (to column XFD); Google Sheets and Numbers have their own limits on cells per spreadsheet or table, which are far below what a database can hold. For data in the millions of rows, a database or a data tool is the better home.",
      "File formats matter when sharing. Excel saves .xlsx, LibreOffice saves the open .ods format (OpenDocument), Numbers saves .numbers, and Google Sheets lives online but downloads as .xlsx, .ods, .pdf or .csv. Each app can open the others’ main formats, with some loss of features that only one app has. See Unit 2’s {{file-formats}} and this unit’s {{csv-files}}.",
      "Professional habits that prevent most problems:",
      {list:["**Separate inputs, calculations and outputs**, ideally on different sheets or clearly labelled areas.","**Never type a number into a formula if it might change**; reference a labelled input cell.","**Document assumptions** in a notes sheet: where the data came from, what each column means, units, date of last update.","**Check one or two results by hand.** Most spreadsheet errors give plausible-looking numbers, not error messages.","**Keep version history** (built into Microsoft 365, Google Sheets and iCloud) so a bad edit can be undone later."]},
      "OpenStax’s *Workplace Software and Skills* calls the habit of tracing and checking formulas “auditing” (Section 10.5), and includes “Excel horror stories” in Section 10.2: real costly mistakes made with spreadsheets."
     ]
    },
    related:["cell-data-types","formulas-operators","cell-references","tidy-data","csv-files","file-formats"],
    read:[{book:"wss", where:"Chapter 9, Section 9.1 “Microsoft Excel Basics” and Section 9.5 “Google Sheets Basics”"}],
    sources:[{t:"Apple Support: Numbers User Guide for Mac, Calculate values using data in table cells", url:"https://support.apple.com/guide/numbers/tan727173a8/mac"},{t:"LibreOffice Help: Formula Options (reference syntax and separators)", url:"https://help.libreoffice.org/latest/is/text/shared/optionen/01060900.html"}], checked:"2026-11"},

   {id:"cell-data-types", title:"What a cell holds: data types, dates and formats", aka:["data types","number stored as text","leading zeros","date serial number","number format","automatic data conversion","gene names"], tags:["spreadsheets","data"],
    summary:"Cells hold numbers, text, dates or formulas; dates are numbers underneath, formats change only the look, and codes with leading zeros belong in text.",
    levels:{
     starter:[
      "When you type into a cell, the app decides what kind of thing it is: a **number** you can calculate with, **text**, a **date**, or a **formula**. By default text lines up on the left and numbers and dates on the right, which is a handy clue.",
      "Three surprises to know:",
      {list:["**Dates are stored as numbers**: a count of days. That’s why you can subtract two dates to get the days between them.","**Formats only change the look.** A cell holding 0.25 can show 25%, 1/4 or 0.3; formulas still use 0.25.","**Codes aren’t numbers.** Phone numbers, postcodes and IDs lose leading zeros if stored as numbers. Format the cells as Text first, or type an apostrophe before the code."]},
      {warn:"Spreadsheets guess. Some gene names, such as SEPT2, have been turned into dates in thousands of research files. Check your data after pasting or importing."}
     ],
     builder:[
      "**Dates.** In Excel’s 1900 date system, Microsoft’s example is that 5 July 2011 is stored as 40729. Google Sheets counts days since 30 December 1899, and LibreOffice Calc uses that starting day by default, so modern dates get the same numbers. Times are fractions of a day (noon = 0.5). Numbers keeps dates as a separate date-and-time type. Type dates as year-month-day (`2026-04-03`) to avoid day/month confusion between locales.",
      "**Formats.** Excel: Home → Number Format (or [[kbd:Ctrl]] + [[kbd:1]]). Google Sheets: Format → Number. LibreOffice Calc: Format → Cells → Numbers. Numbers: Format sidebar → Cell → Data Format. Because formats only change the display, a column can look as if it adds up wrongly (1.3 + 1.3 showing 2.5, because the values are 1.26).",
      "**Numbers stored as text.** Signs: left alignment, a green triangle in desktop Excel (choose **Convert to Number**), or black instead of blue under LibreOffice’s **View → Value Highlighting**. SUM and AVERAGE skip them, so totals come out too small. Fix by converting, retyping, or `=VALUE(cell)`.",
      "**Codes.** Format as Text before typing (Excel: Text; Google Sheets: Plain text; LibreOffice: Text; Numbers: Text), or type `'02134`. Microsoft’s help notes Excel’s 15-digit precision: digits past the 15th become zeros, so 16-digit card or account numbers must be text."
     ],
     pro:[
      "**Automatic data conversion in Excel.** Excel for Microsoft 365 and Excel 2024 (Windows: File → Options → Data; Mac: Excel → Preferences → Edit) let you switch off four conversions: removing leading zeros from numeric text, keeping only the first 15 digits of long numbers and showing them in scientific notation, converting digits around an E to scientific notation (123E5 → 1.23E+07), and converting letters-plus-digits to dates (JAN1 → 1 January). Microsoft notes they apply when you add data to a workbook, such as by opening a .csv file, but don’t directly affect data imported with Power Query, which has its own column types.",
      "**The gene-name case.** Ziemann, Eren and El-Osta (2016) found that about one-fifth of genomics papers with supplementary Excel gene lists contained conversion errors. Abeysooriya and colleagues (2021) scanned PubMed Central supplements from 2014–2020 and found errors in about 31% of articles with Excel gene lists (3,436 of 11,117), including dates appearing as five-digit serial numbers. The HUGO Gene Nomenclature Committee changed the affected symbols (SEPT# to SEPTIN#, MARCH# to MARCHF#, DEC1 to DELEC1).",
      "**Date edge cases.** Older Excel for Mac versions defaulted to a 1904 date system; the two systems differ by 1,462 days, so dates copied between workbooks using different systems shift by about four years (File → Options → Advanced → “Use 1904 date system”). Excel also treats 1900 as a leap year, for compatibility with an older program, so serial numbers before 1 March 1900 differ from Google Sheets and LibreOffice.",
      "**Floating point.** Spreadsheets store numbers in binary, so some decimals can’t be stored exactly. A calculation that should give exactly 0 can sometimes give a tiny number such as −2.78E-17 instead. Apps quietly tidy some of these cases (LibreOffice Calc returns 0 for `=0.1+0.2-0.3`), but not all, so ROUND before comparing values that should be equal.",
      {tip:"For data that must survive exactly (identifiers, codes, lab results), keep an untouched copy of the original file and record every cleaning step."}
     ]
    },
    related:["spreadsheet-basics","csv-files","common-functions","tidy-data"],
    read:[{book:"wss", where:"Chapter 9, Section 9.2 “Text and Numbers in Microsoft Excel” (Table 9.1, number formats)"}],
    sources:[{t:"Microsoft Support: Date systems in Excel", url:"https://support.microsoft.com/en-us/Excel/date-systems-in-excel"},{t:"Microsoft Support: Set automatic data conversions", url:"https://support.microsoft.com/en-us/excel/set-automatic-data-conversions"},{t:"Microsoft Support: Keeping leading zeros and large numbers", url:"https://support.microsoft.com/en-US/Excel/keeping-leading-zeros-and-large-numbers"}], checked:"2026-11"},

   {id:"formulas-operators", title:"Formulas and operators", aka:["formula","operators","order of operations","precedence","PEMDAS","BODMAS","locale separators"], tags:["spreadsheets","formulas"],
    summary:"A formula starts with =, uses operators such as + − * / ^ & and comparisons, and follows a fixed order of operations.",
    levels:{
     starter:[
      "A formula is an instruction that starts with an equals sign, such as `=B2*C2`. The cell shows the answer; the formula bar shows the instruction. When B2 or C2 changes, the answer updates by itself.",
      {table:[["Symbol","Means"],["`+` `-`","add, subtract"],["`*`","multiply"],["`/`","divide"],["`^`","power (2^3 is 8)"],["`&`","join text"]]},
      "Spreadsheets do multiplication and division before addition and subtraction, just as in school maths. So `=5+2*3` is 11, while `=(5+2)*3` is 21. When in doubt, add parentheses.",
      {key:"Point formulas at cells (=B2*C2) rather than typing the numbers in (=3*2.5), so they keep working when the numbers change."},
      "Two habits help from the start. Build formulas by **clicking** cells rather than typing addresses: the app writes the references and colours them so you can see what the formula uses. And **check one result** with a quick mental estimate before trusting a whole column.", {tip:"If a formula copied from the internet doesn’t work, your region may use semicolons between the parts of a function: `=ROUND(B2;2)` instead of `=ROUND(B2,2)`."}
     ],
     builder:[
      "Microsoft’s order of precedence for Excel, from first to last: reference operators (`:` for ranges, `,` for unions, a space for intersections), negation (−1), percent (%), exponent (^), multiply and divide, add and subtract, join (&), then comparisons (= < > <= >= <>). Operators at the same level work left to right. Other apps follow the same everyday order.",
      {ex:"=A2+B2+C2/3     with 70, 80, 90 →  180\n=(A2+B2+C2)/3   →  80\n=(B2-A2)/A2     →  change as a fraction\n=200*10%        →  20\n=\"Total: \"&D7   →  Total: 32.5", label:"Common formulas", mono:true},
      "Comparisons produce TRUE or FALSE, which IF and other functions use (see {{if-function}}). Text inside formulas goes in straight double quotes.",
      "**Locales.** Where the decimal mark is a comma, formulas use semicolons between arguments: `=ROUND(B2;2)`. Excel follows the computer’s regional list separator, and desktop Excel translates function names in some languages. Google Sheets follows the spreadsheet’s locale (File → Settings); its function names stay in English unless your account uses one of its supported languages and you untick Always use English function names. LibreOffice Calc lets you choose separators and English function names in Tools → Options → LibreOffice Calc → Formula. Apple’s Numbers help says to use semicolons when your settings use a decimal comma.",
      "**Editing.** Double-click a cell (or click in the formula bar) to edit its formula; each reference is shown in a colour, and the same colour outlines the cell it points to. Press [[kbd:Esc]] to cancel an edit, [[kbd:Enter]] to accept it. Watch for a formula you meant to type being stored as text: if the cell shows `=B2*C2` instead of a result, the cell was probably formatted as Text before you typed. Set it to a number format and re-enter the formula."
     ],
     pro:[
      "**Negation binds tightly.** In Excel’s precedence, negation comes before exponentiation, so `=-3^2` returns 9, not −9 as a maths textbook would give (LibreOffice Calc also returns 9). Write `=-(3^2)` when you mean −9, and check your app before relying on either reading.",
      "**Percent is an operator.** `=50%` is 0.5, and `=B2*(1+10%)` adds 10%. A cell formatted as Percent that shows 10% holds 0.1.",
      "**Hard-coded constants** are the most common source of silent errors in shared models: a 0.15 tax rate typed into dozens of formulas becomes wrong in all of them when the rate changes. Professionals keep constants in labelled input cells (or named ranges) and refer to them with absolute references.",
      "**Text versus numbers in arithmetic.** In Excel, `=\"3\"+1` returns 4 because the text can be read as a number, but `=\"abc\"+1` returns #VALUE!. Functions such as SUM skip text in ranges instead of converting it. Relying on automatic conversion makes formulas fragile; store numbers as numbers.",
      "**Auditing.** To see every formula at once: Excel Formulas → Show Formulas; Google Sheets View → Show → Formulas; LibreOffice View → Show Formula. Desktop Excel’s Trace Precedents and Trace Dependents draw arrows between cells (OpenStax Section 10.5 walks through these).",
      {tip:"Write long formulas in steps across helper columns first, check each step, then combine them if you want to. Readable beats clever."}
     ]
    },
    related:["cell-references","common-functions","if-function","spreadsheet-errors"],
    read:[{book:"wss", where:"Chapter 10, Section 10.2 “More About Formulas”: “Order of Operations” and “Comparison Operators”"}],
    sources:[{t:"Microsoft Support: Calculation operators and precedence in Excel", url:"https://support.microsoft.com/en-us/excel/calculation-operators-and-precedence-in-excel"},{t:"Google Docs Editors Help: Set a spreadsheet’s location & calculation settings", url:"https://support.google.com/docs/answer/58515"},{t:"Apple Support: Formulas and Functions Help, Functions overview", url:"https://support.apple.com/en-kg/guide/functions/ffa083bef0c/web"}], checked:"2026-11"},

   {id:"cell-references", title:"Relative, absolute and mixed references", aka:["$","dollar sign","absolute reference","relative reference","mixed reference","fill handle","F4","Preserve Row","Preserve Column"], tags:["spreadsheets","formulas"],
    summary:"References adjust when a formula is copied unless you lock them with $: A1 moves, $A$1 stays, $A1 and A$1 lock one part.",
    levels:{
     starter:[
      "When you copy a formula, the app adjusts its cell references. Type `=B2*C2` in D2 and copy it down, and D3 gets `=B3*C3`. This is called a **relative reference**: it really means “the cells to my left, in my row”.",
      "Sometimes a formula should always use one particular cell, such as a tax rate or an exchange rate. Put dollar signs in the reference to lock it: `$F$1` is an **absolute reference** and stays the same wherever it’s copied.",
      {ex:"C2: =B2*(1+$D$2)   copied down →\nC3: =B3*(1+$D$2)\nC4: =B4*(1+$D$2)", label:"Locking the rate cell", mono:true},
      {warn:"Forget the $ and the copies point at the wrong, often empty, cells. You usually get a wrong number, not an error, so check a few results."}
     ],
     builder:[
      {table:[["Reference","Copied 1 row down, 1 column right","Type"],["`A1`","`B2`","relative"],["`$A$1`","`$A$1`","absolute"],["`$A1`","`$A2`","mixed: column locked"],["`A$1`","`B$1`","mixed: row locked"]]},
      "**Mixed references** fill grids: with quantities down column A and prices across row 1, `=$A2*B$1` in B2 can be filled across and down to complete the table.",
      "**Ways to copy:** drag the fill handle (a small square at the bottom-right of the selection in Excel, Google Sheets and LibreOffice Calc; a yellow dot on the selection border in Numbers), or copy and paste. Both adjust relative references. **Moving** (cut and paste, or dragging the cell border) keeps the formula pointing at the same cells.",
      "**Shortcuts for adding $** (with the cursor on the reference; each press cycles through the four types): Excel, [[kbd:F4]] on Windows and [[kbd:Cmd]] + [[kbd:T]] (or [[kbd:Fn]] + [[kbd:F4]]) on a Mac; Google Sheets, [[kbd:F4]] on Windows, [[kbd:Fn]] + [[kbd:F4]] on a Mac and [[kbd:Search]] + [[kbd:4]] on a Chromebook; LibreOffice Calc, [[kbd:F4]] or **Sheet → Cycle Cell Reference Types**; Numbers, click the arrow on the reference token and choose **Preserve Row** or **Preserve Column**. Typing the $ yourself works everywhere.",
      "Inserting rows or columns updates references automatically; deleting a cell a formula uses gives #REF!.",
      {ex:"D2: =B2*C2\nCopy to F5 (2 columns right, 3 rows down):\nF5: =D5*E5", label:"Every reference shifts by the same amount", mono:true},
      "Numbers adjusts references in the same way when you autofill, and Apple’s guide notes that autofilled cells aren’t linked afterwards, so each copy can be edited on its own."
     ],
     pro:[
      "**Why it works this way.** Internally, a relative reference is stored as an offset from the formula’s own cell (Excel’s R1C1 notation shows this: `=RC[-2]*RC[-1]` means “two columns left times one column left, same row”). Every copy of the formula is literally the same R1C1 formula, which is why consistent formulas are easy to audit: an inconsistent one stands out. Desktop Excel flags a formula that differs from its neighbours with a small green triangle (“Inconsistent formula”).",
      "**Absolute references and inserted rows.** `$D$2` is absolute with respect to copying, not to inserting: insert a row above row 2 and the reference becomes `$D$3`, still pointing at the same rate. That’s usually what you want.",
      "**Named ranges** are a readable alternative: name D2 “Rise” and write `=B2*(1+Rise)`. Names behave like absolute references and make formulas self-explaining. Excel (Formulas → Name Manager), Google Sheets (Data → Named ranges) and LibreOffice Calc (Sheet → Named Ranges and Expressions) support them.",
      "**Structured references.** In an Excel table, formulas can refer to columns by name, such as `=[@Qty]*[@Price]`, and fill themselves down as rows are added. Google Sheets tables also allow references by table and column name.",
      "**References across sheets and files** follow the same rules but break more easily when sheets are renamed, moved or deleted. Keep links within one workbook when you can.",
      {tip:"After filling a formula, click the last cell of the range and read its formula: if the references still point where you expect, the middle ones almost certainly do too."}
     ]
    },
    related:["formulas-operators","spreadsheet-errors","common-functions","lookup-functions"],
    read:[{book:"wss", where:"Chapter 10, Section 10.2 “More About Formulas”: “Cell References in Formulas”"}],
    sources:[{t:"Apple Support: Numbers User Guide for Mac, Autofill cells", url:"https://support.apple.com/guide/numbers/tan0e1129cf6/mac"},{t:"OpenStax Workplace Software and Skills, Section 10.2 More About Formulas", url:"https://openstax.org/books/workplace-software-skills/pages/10-2-more-about-formulas"}], checked:"2026-11"},

   {id:"common-functions", title:"Everyday functions: SUM to ROUND", aka:["SUM","AVERAGE","COUNT","COUNTA","MIN","MAX","ROUND","function","argument"], tags:["spreadsheets","functions"],
    summary:"SUM, AVERAGE, COUNT, COUNTA, MIN, MAX and ROUND, and how each treats blanks, text and the difference between rounding and formatting.",
    levels:{
     starter:[
      "A function is a named calculation: `=SUM(B2:B7)` adds everything in B2 to B7. The inputs inside the parentheses are called **arguments**.",
      {table:[["Function","What it gives"],["SUM","the total"],["AVERAGE","the mean (total ÷ how many numbers)"],["COUNT","how many cells hold numbers"],["COUNTA","how many cells aren’t empty"],["MIN / MAX","the smallest / largest number"],["ROUND","a number rounded to the decimals you choose"]]},
      "Blank cells and text are skipped by SUM, AVERAGE, COUNT, MIN and MAX. So a blank and a 0 give different averages: decide which you mean.",
      {key:"COUNT counts numbers; COUNTA counts anything that isn’t empty."},
      {tip:"For a quick total without writing a formula, select some cells and look at the bottom of the window: Excel and LibreOffice Calc show the sum (and more) in the status bar, Google Sheets shows a sum box at the bottom right, and Numbers shows sums and averages at the bottom of the window."}
     ],
     builder:[
      {ex:"B2:B7 = 4, 6, (blank), 3, away, 5\n=SUM(B2:B7)      18\n=COUNT(B2:B7)    4\n=COUNTA(B2:B7)   5\n=AVERAGE(B2:B7)  4.5   (18 ÷ 4)\n=MIN(B2:B7)      3\n=MAX(B2:B7)      6", label:"One table, six functions", mono:true},
      "If the blank becomes a typed 0, COUNT becomes 5, COUNTA 6, AVERAGE 3.6 (18 ÷ 5) and MIN 0.",
      "**ROUND versus formatting.** `=ROUND(number, digits)` changes the value: `=ROUND(12.3456, 2)` is 12.35, `=ROUND(1234.5, -2)` is 1200. A number format changes only the display. Use formatting for display; use ROUND when the rounded value is the real one, such as money that will be paid. Splitting 100.00 three ways: formatted shares show 33.33 but sum to 100.00; ROUNDed shares sum honestly to 99.99.",
      "Related functions worth knowing: ROUNDUP and ROUNDDOWN (always up or down), COUNTBLANK (empty cells), MEDIAN (the middle value, less affected by extremes than the mean), and SUMPRODUCT. All of these exist in Excel, Google Sheets, LibreOffice Calc and Numbers.",
      "Typing a function name shows a list of matches and then the argument names. Optional arguments appear in square brackets in help pages.",
      "**Writing ranges.** Drag across the cells while typing the formula, or type them (`B2:B7`). A whole column such as `B:B` includes rows added later, but also the header and anything else in that column, so a precise range or a formal table is usually safer."
     ],
     pro:[
      "**What counts.** COUNT counts numbers, including dates and times, because they’re numbers underneath. COUNTA counts any non-empty cell, including text, logical values, error values and empty text `\"\"` returned by a formula, which can make a column of formulas look full to COUNTA even when it shows nothing.",
      "**Text in ranges versus text as arguments.** Functions skip text found in a range, but text typed directly as an argument may be converted or cause #VALUE! (for example in Excel, `=SUM(\"3\",1)` returns 4, LibreOffice Calc returns #VALUE!, and in both `=SUM(B2:B3)` ignores a text “3” in B2). Clean data avoids depending on this.",
      "**Averages can mislead.** The mean is pulled by extreme values; MEDIAN shows the middle. Averaging averages is also a trap: the average of two class averages isn’t the average of all students unless the classes are the same size. OpenStax Section 10.3 has a short “Spotlight on Ethics” on this.",
      "**Rounding rules.** Excel, Google Sheets and LibreOffice round halves away from zero in ROUND (2.5 → 3, −2.5 → −3). Because of binary floating point, a value that displays as 2.345 may be stored as 2.34499999…, so rounding exactly at a half can surprise you occasionally. Some fields require other methods (such as banker’s rounding); check the rules for money or statistics you report.",
      "**Precision as displayed.** Desktop Excel has an option to permanently round stored values to their displayed format (File → Options → Advanced, “Set precision as displayed”). It changes data irreversibly, so most people should use ROUND in formulas instead."
     ]
    },
    related:["formulas-operators","if-function","countif-sumif","spreadsheet-errors","cell-data-types"],
    read:[{book:"wss", where:"Chapter 10, Section 10.3 “Using Arithmetic, Statistical, and Logical Functions”"}],
    sources:[{t:"Apple Support: Formulas and Functions Help, List of functions by category", url:"https://support.apple.com/guide/functions/list-of-functions-by-category-ffa148e9cd0/web"},{t:"OpenStax Workplace Software and Skills, Section 10.3", url:"https://openstax.org/books/workplace-software-skills/pages/10-3-using-arithmetic-statistical-and-logical-functions"}], checked:"2026-11"},

   {id:"if-function", title:"The IF function", aka:["IF","conditions","logical test","TRUE","FALSE","nested IF","IFERROR"], tags:["spreadsheets","functions"],
    summary:"IF returns one value when a condition is TRUE and another when it’s FALSE: =IF(C2<10, \"Reorder\", \"OK\").",
    levels:{
     starter:[
      "IF lets a cell make a decision. It has three parts: a test, what to show if the test is true, and what to show if it’s false.",
      {ex:"=IF(C2<10, \"Reorder\", \"OK\")\n\nC2 = 6   →  Reorder\nC2 = 14  →  OK", label:"A stock check", mono:true},
      "The test uses a comparison: `<` less than, `>` greater than, `<=` and `>=` for “or equal”, `=` equal, `<>` not equal. Words you want to show go in straight double quotes.",
      {tip:"Test the boundary: with `C2<10`, exactly 10 shows OK. If 10 should reorder, use `<=`."},
      "Another example: `=IF(B2>=50, \"Pass\", \"Retake\")` marks scores of 50 and above as Pass. IF works the same way in Excel, Google Sheets, LibreOffice Calc and Numbers.",
      "Comparisons can check text too: `=IF(D2=\"Yes\", 45, 0)` gives the 45 fee only for members marked Yes."
     ],
     builder:[
      "Syntax: `IF(logical_test, value_if_true, value_if_false)`. The results can be text, numbers, other cells or formulas.",
      {list:["`=IF(B2>=50, \"Pass\", \"Retake\")` text results","`=IF(B2>=50, B2*0.1, 0)` a 10% bonus from 50 upwards, else nothing","`=IF(D2=\"\", \"Missing\", \"OK\")` checks for an empty cell","`=IF(AND(B2>=50, C2=\"Yes\"), \"Eligible\", \"No\")` two conditions at once (OR is similar)"]},
      "**Common mistakes:** text without quotes (`Pass` gives #NAME?); typographic quotes “ ” pasted from a document instead of straight ones; comparing a number stored as text (the test may be FALSE unexpectedly); and the wrong boundary sign.",
      "**Nesting** puts an IF inside another for more outcomes: `=IF(B2>=80, \"A\", IF(B2>=65, \"B\", \"C\"))`. Order the tests from the most restrictive. Beyond two or three levels, consider a lookup table instead (see {{lookup-functions}}).",
      "**IF with dates.** `TODAY()` returns today’s date and updates every day, so `=IF(C2<TODAY(), \"Overdue\", \"\")` flags library books whose due date in C2 has passed and leaves the others blank.", "**Checking an IF.** Fill it down, then look at rows just either side of the boundary (49, 50 and 51 for a pass mark of 50). A filter on the result column makes this quick. Most IF mistakes are at the boundary or in the quotes, not in the idea."
     ],
     pro:[
      "**IFS and SWITCH.** Excel for Microsoft 365, Excel 2019 and later, Google Sheets and LibreOffice Calc have IFS (a list of test–result pairs) and SWITCH (match one value against several options). Numbers has IFS too. They avoid deep nesting but behave differently from IF when nothing matches: IFS returns #N/A, so end with a catch-all test such as `TRUE, \"Other\"`.",
      "**IFERROR** (`=IFERROR(formula, value_if_error)`) replaces any error with your value. It’s useful for display, such as showing “Not found” after a lookup, but it hides every error, including real mistakes like a misspelled range. IFNA, which only catches #N/A, is safer for lookups.",
      "**Lookup tables beat long IF chains** for grade bands, price tiers and tax brackets: put the thresholds in a small table and use an approximate-match lookup (XLOOKUP with match mode −1, or VLOOKUP with TRUE on a sorted table). The rules are then visible and easy to change.",
      "**TRUE and FALSE are values.** A comparison such as `=B2>=50` returns TRUE or FALSE on its own, and in arithmetic TRUE counts as 1 and FALSE as 0 in Excel, Google Sheets and LibreOffice, which is how some counting formulas work.",
      {tip:"When an IF gives an unexpected result, put the test alone in a spare cell (for example `=C2<10`) to see whether it’s TRUE or FALSE."}
     ]
    },
    related:["common-functions","countif-sumif","lookup-functions","spreadsheet-errors"],
    read:[{book:"wss", where:"Chapter 10, Section 10.3 “Using Arithmetic, Statistical, and Logical Functions”: “Logical Functions”"}],
    sources:[{t:"OpenStax Workplace Software and Skills, Section 10.3", url:"https://openstax.org/books/workplace-software-skills/pages/10-3-using-arithmetic-statistical-and-logical-functions"},{t:"Apple Support: Formulas and Functions Help, List of functions by category", url:"https://support.apple.com/guide/functions/list-of-functions-by-category-ffa148e9cd0/web"}], checked:"2026-11"},

   {id:"countif-sumif", title:"COUNTIF and SUMIF", aka:["COUNTIF","SUMIF","COUNTIFS","SUMIFS","AVERAGEIF","criteria","conditional sum"], tags:["spreadsheets","functions"],
    summary:"COUNTIF counts cells that meet a condition; SUMIF adds the matching values from another column.",
    levels:{
     starter:[
      "Often you want a total or a count for just some rows: how much was spent on food, how many members paid.",
      {ex:"B2:B6  Food, Venue, Food, Transport, Food\nC2:C6  120, 300, 80, 45, 60\n\n=COUNTIF(B2:B6, \"Food\")          3\n=SUMIF(B2:B6, \"Food\", C2:C6)     260", label:"Reunion costs", mono:true},
      "COUNTIF needs two things: where to look, and what to look for. SUMIF needs three: where to look, what to look for, and what to add up.",
      {key:"SUMIF checks one column and adds another, row by row."},
      "Text conditions go in straight double quotes. Capital letters don’t matter, but stray spaces do: “Food ” with a space after it won’t match “Food”. Another everyday example: `=COUNTIF(D2:D40, \"Yes\")` counts how many members have Yes in the Paid column."
     ],
     builder:[
      "Syntax: `COUNTIF(range, criterion)` and `SUMIF(range, criterion, [sum_range])`. Without the sum range, SUMIF adds the checked cells themselves.",
      {table:[["Criterion","Matches"],["`\"Food\"`","exactly Food (capitals ignored)"],["`\">100\"`","numbers over 100"],["`\"<>Food\"`","anything except Food"],["`\">=\"&E1`","at least the number in E1"],["`\"*bus*\"`","text containing “bus” (wildcards; see Pro)"]]},
      {ex:"=COUNTIF(C2:C6, \">100\")   2    (120 and 300)\n=SUMIF(C2:C6, \">100\")     420", label:"Number conditions", mono:true},
      "Comparison signs go inside the quotes. Text matching ignores capitals but not spaces, so “Food ” with a trailing space won’t match; consistent data entry (dropdown lists, {{tidy-data}}) avoids this.",
      "For two or more conditions use COUNTIFS and SUMIFS, which take pairs of range and criterion: `=SUMIFS(C2:C6, B2:B6, \"Food\", A2:A6, \">=\"&E1)`. Note that SUMIFS puts the sum range **first**, unlike SUMIF. AVERAGEIF and AVERAGEIFS work the same way. All exist in Excel, Google Sheets, LibreOffice Calc and Numbers.",
      {ex:"=AVERAGEIF(B2:B6, \"Food\", C2:C6)          86.67  (260 ÷ 3)\n=COUNTIFS(B2:B6, \"Food\", C2:C6, \">100\")  1      (only the 120)", label:"More conditional functions on the reunion table", mono:true},
      "**Checking completeness.** `COUNTBLANK(range)` counts empty cells, and in Excel and Google Sheets `=COUNTIF(range, \"<>\")` counts cells that aren’t empty. Comparing the two with the number of records quickly shows how many values are missing in a column."
     ],
     pro:[
      "**Wildcards.** In Excel and Google Sheets, `*` stands for any characters and `?` for one character in text criteria; `~*` means a literal asterisk. LibreOffice Calc supports wildcards (or, alternatively, regular expressions) depending on a setting in Tools → Options → LibreOffice Calc → Calculate. Apple’s help lists COUNTIF, SUMIF, COUNTIFS, SUMIFS and AVERAGEIF among the Numbers functions that accept wildcards in conditions, for example `=COUNTIF(B,\"a*\")`.",
      "**Ranges must line up.** In SUMIF and SUMIFS the check range and sum range should be the same size and shape. Mismatched ranges can give wrong totals without any error in some apps, so write them with the same rows.",
      "**Dates in criteria.** Join a comparison to a date cell rather than typing a date in text: `\">=\"&E1` where E1 holds a real date. Typed dates in criteria are read using the locale, with the usual day/month risk.",
      "**Numbers stored as text** don’t match numeric criteria such as `\">100\"`, and a code stored as a number won’t match the same code stored as text in another table. Clean the types first ({{cell-data-types}}).",
      "**When to move on.** If you find yourself writing many SUMIFS for a summary grid (each category by each month), a {{pivot-tables|pivot table}} does the same job in a few clicks and updates when refreshed.",
      {tip:"Check a SUMIF with a filter: filter the table to the same condition and compare with the status-bar sum of the visible cells."}
     ]
    },
    related:["common-functions","if-function","pivot-tables","tidy-data"],
    read:[{book:"wss", where:"Chapter 10, Section 10.3 “Using Arithmetic, Statistical, and Logical Functions” (COUNTIF and SUMIF under “Logical Functions”)"}],
    sources:[{t:"Apple Support: Formulas and Functions Help, Functions that accept conditions and wildcards as arguments", url:"https://support.apple.com/en-mz/guide/functions/ffac131919b/web"},{t:"OpenStax Workplace Software and Skills, Section 10.3", url:"https://openstax.org/books/workplace-software-skills/pages/10-3-using-arithmetic-statistical-and-logical-functions"}], checked:"2026-11"},

   {id:"lookup-functions", title:"Lookups: XLOOKUP and VLOOKUP", aka:["XLOOKUP","VLOOKUP","HLOOKUP","INDEX MATCH","lookup","exact match","approximate match"], tags:["spreadsheets","functions"],
    summary:"Find a value in one column and return the matching value from another: XLOOKUP matches exactly by default; VLOOKUP needs FALSE for an exact match.",
    levels:{
     starter:[
      "A lookup works like a phone book: find the name, then read across to the number. In a spreadsheet you give it the value to find (such as a product code), where to search, and which column to bring back.",
      {ex:"Price list: codes in A2:A5, prices in C2:C5\nF2 holds the code B03\n\n=XLOOKUP(F2, A2:A5, C2:C5)\n=VLOOKUP(F2, A2:C5, 3, FALSE)\n\nBoth give 2.50", label:"Looking up a price", mono:true},
      "XLOOKUP is newer and simpler. VLOOKUP works almost everywhere, including older versions of Excel, but always end it with **FALSE** so it only accepts an exact match.",
      {tip:"If a lookup shows #N/A, the value wasn’t found. Check for typos, extra spaces, or a code stored as text in one place and as a number in the other."}
     ],
     builder:[
      "**XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])**. The lookup and return ranges are separate, so the result can be left or right of the search column. Microsoft’s help says exact match is the default and #N/A is returned if nothing is found, unless you give an if_not_found value such as `\"Not found\"`.",
      "**VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])** searches the leftmost column of the table and returns from the column number you give (leftmost = 1). If range_lookup is omitted it does an **approximate** match in Excel, Google Sheets (where the argument is called is_sorted), LibreOffice Calc and Numbers (close-match). Approximate matching expects the first column sorted ascending; on unsorted data it can return the wrong row silently.",
      {table:[["","XLOOKUP","VLOOKUP"],["Default match","exact","approximate (add FALSE)"],["Return column left of search column?","yes","no"],["Breaks if a column is inserted in the table?","no","yes: the column number doesn’t update"],["Available in","Excel for Microsoft 365, 2021, 2024 and the web; Google Sheets; LibreOffice 24.8+; Numbers","all four apps and older Excel"]]},
      "When filling a lookup down a column, lock the ranges: `=XLOOKUP(F2, $A$2:$A$5, $C$2:$C$5)`.",
      "Lookups return the **first** match only. If the search column has duplicates (two rows for B03), later ones are ignored, so keep codes unique."
     ],
     pro:[
      "**Availability.** Microsoft’s XLOOKUP page states it isn’t available in Excel 2016 and Excel 2019; a workbook using it shows #NAME? there. LibreOffice’s help says XLOOKUP has been included since version 24.8, with match modes 0 (exact), −1 (exact or next smaller), 1 (exact or next larger), 2 (wildcard) and 3 (regular expression in Calc). Google Sheets’ XLOOKUP defaults to exact match with #N/A as the missing value. Numbers’ XLOOKUP also defaults to an exact match; Apple’s help says wildcards (and REGEX) work when match-type is 2, the wildcard mode.",
      "**INDEX and MATCH** is the classic portable alternative: `=INDEX(C2:C5, MATCH(F2, A2:A5, 0))`. MATCH with 0 finds the exact position; INDEX returns the item at that position. It works in every version of every app and, like XLOOKUP, can return from any column.",
      "**Deliberate approximate matches** are useful for bands such as tax brackets or grade boundaries: a sorted table of lower limits, and `=VLOOKUP(B2, $H$2:$I$6, 2, TRUE)` or `=XLOOKUP(B2, $H$2:$H$6, $I$2:$I$6, , -1)`. Sort the limits ascending and test values exactly on each boundary.",
      "**Why lookups fail.** Trailing spaces (fix with TRIM), different types (a code 731 as a number versus “0731” as text), non-breaking spaces from web pages, and duplicates (lookups return the first match only, so duplicates in the key column hide data). A lookup key column should be unique: check with COUNTIF(key_range, key) > 1.",
      "**Performance.** On very large sheets, thousands of exact-match lookups over whole columns can slow recalculation; restrict ranges to the data or use tables."
     ]
    },
    related:["cell-references","spreadsheet-errors","if-function","tidy-data"],
    sources:[{t:"Microsoft Support: XLOOKUP function", url:"https://support.microsoft.com/en-us/excel/get-started/xlookup-function"},{t:"Google Docs Editors Help: XLOOKUP function", url:"https://support.google.com/docs/answer/12405947/"},{t:"Apple Support: Formulas and Functions Help, VLOOKUP", url:"https://support.apple.com/en-au/guide/functions/ffa5997050/web"}], checked:"2026-11"},

   {id:"spreadsheet-errors", title:"Error values: #DIV/0!, #NAME?, #VALUE!, #REF!, #N/A", aka:["#DIV/0!","#NAME?","#VALUE!","#REF!","#N/A","####","#ERROR!","Err:502","IFERROR"], tags:["spreadsheets","troubleshooting"],
    summary:"Each error value names a different problem: dividing by zero, an unknown name, the wrong type of value, a missing reference, or nothing found.",
    levels:{
     starter:[
      "When a formula can’t produce an answer, the cell shows an error value instead. It’s a clue, not a telling-off.",
      {table:[["Error","Usually means"],["#DIV/0!","dividing by zero or an empty cell"],["#NAME?","a misspelled function, or text without quotes"],["#VALUE!","doing arithmetic on text"],["#REF!","a cell the formula used was deleted"],["#N/A","a lookup found nothing"],["####","not an error: widen the column"]]},
      "Click the cell: most apps show a hint about what went wrong. Fix the cause rather than hiding the message.",
      {key:"Errors you can see are the easy ones. The dangerous mistakes give normal-looking wrong numbers."},
      {tip:"If a whole column shows the same error, fix the first cell: the rest are usually copies of the same formula and will update."}
     ],
     builder:[
      {list:["**#DIV/0!** `=B2/C2` with C2 empty or 0. Common after filling a formula with a relative reference to a total (=D2/D7 copied down becomes =D3/D8). Fix the reference ($D$7), or guard: `=IF(C2=0, \"\", B2/C2)`.","**#NAME?** Misspelled function (`=SUMM`), text without quotes, missing colon in a range (`B2B6`), an undefined name, or a function the app or version doesn’t have (XLOOKUP in Excel 2019).","**#VALUE!** `=B2+C2` where C2 holds text such as “n/a”, or a date typed as text. SUM(B2:C2) would skip the text instead.","**#REF!** A deleted row, column or sheet that a formula used; VLOOKUP asking for a column beyond the table (in Excel and Google Sheets; LibreOffice Calc shows Err:502); pasting over cells a formula referenced.","**#N/A** A lookup value not found: typos, extra spaces, text-versus-number codes, or a missing FALSE in VLOOKUP on unsorted data (which may instead return a wrong value)."]},
      "Apps differ: Google Sheets shows #ERROR! for a formula it can’t parse at all. LibreOffice Calc shows #NAME?, #REF!, #DIV/0! and #VALUE! like the others, but many other problems appear as Err: followed by a number, such as Err:502 (invalid argument) or Err:522 (circular reference); its help lists them all. Numbers shows an error icon in the cell; click it to read the message.",
      "OpenStax Section 10.5 adds a good habit called tick and tie: check totals against an independent source."
     ],
     pro:[
      "**Circular references** happen when a formula refers to its own cell, directly or through other cells. Excel warns and may show 0; LibreOffice shows Err:522; Google Sheets shows #REF! with a circular-dependency message. Unless you deliberately use iterative calculation, find and break the loop.",
      "**Error propagation.** Errors spread: a SUM over a range containing #N/A is itself #N/A. That’s useful (problems can’t hide), but it means one bad cell can blank out a whole report. Fix at the source.",
      "**IFERROR and IFNA.** `=IFERROR(x, alt)` replaces any error; `=IFNA(x, alt)` replaces only #N/A. Wrap lookups in IFNA to show “Not found”, but avoid wrapping whole calculations in IFERROR, which also hides #REF! and #NAME? caused by genuine mistakes.",
      "**Tracing.** Desktop Excel’s Formulas tab has Trace Precedents, Trace Dependents, Error Checking and Evaluate Formula (step through a calculation). LibreOffice Calc has Tools → Detective. In Google Sheets and Numbers, clicking a formula highlights the cells it uses in colour.",
      "**Silent errors are the real risk.** Wrong ranges, missing $ signs, hard-coded numbers and wrong signs produce plausible numbers rather than error values, so nothing flags them. Build in checks: a total that should equal another total, a count that should equal the number of records, conditional formatting that highlights negatives where none should be."
     ]
    },
    related:["formulas-operators","cell-references","lookup-functions","common-functions"],
    read:[{book:"wss", where:"Chapter 10, Section 10.5 “Auditing Formulas and Fixing Errors”"}],
    sources:[{t:"Microsoft Support: How to correct a #NAME? error", url:"https://support.microsoft.com/en-us/excel/how-to-correct-a-name-error"},{t:"LibreOffice Help: Error Codes in LibreOffice Calc", url:"https://help.libreoffice.org/latest/eo/text/scalc/05/02140000.html"},{t:"OpenStax Workplace Software and Skills, Section 10.5", url:"https://openstax.org/books/workplace-software-skills/pages/10-5-auditing-formulas-and-fixing-errors"}], checked:"2026-11"},

   {id:"tidy-data", title:"Tidy data", aka:["tidy table","data layout","one row per record","long format","merged cells","data hygiene"], tags:["spreadsheets","data"],
    summary:"Lay data out with one row per record, one column per variable and one value per cell, so it can be sorted, filtered, counted and charted.",
    levels:{
     starter:[
      "A table that’s easy for people to read isn’t always easy for a spreadsheet to work with. **Tidy data** follows three rules:",
      {ol:["Each **row** is one record (one sale, one visit, one measurement).","Each **column** is one kind of information (Date, Name, Amount).","Each **cell** holds one value (not “5 kg, 2 bags”)."]},
      "Also: one header row, no merged cells in the data, no colours that carry meaning on their own, and no totals mixed in with the records.",
      {key:"Keep one tidy sheet as the data. Build pretty summaries from it, not instead of it."},
      {ex:"Date        Item     Amount\n2026-10-01  Flour    12.50\n2026-10-01  Sugar    4.20\n2026-10-03  Flour    12.50", label:"A tidy expense list", mono:true},
      "Tidy tables look plain, and that’s fine: they’re for working with, not for printing."
     ],
     builder:[
      "The name and the three rules come from the statistician Hadley Wickham’s 2014 paper “Tidy Data”. In spreadsheet terms:",
      {table:[["Untidy","Tidy"],["Months as columns (June, July, August)","A Month column and a value column"],["“2 kg tomatoes” in one cell","Kg = 2, Crop = Tomatoes"],["Yellow fill means paid","Paid = Yes / No"],["Units in cells (“5 kg”)","Unit in the header: Kg"],["Blank rows between groups","A Group column"],["Totals between the records","Totals elsewhere, or a table’s total row"]]},
      "Consistency matters as much as layout: the same spelling for each category (dropdown lists help), real dates, numbers stored as numbers, codes as text, and a clear rule for missing values (usually blank, never a mix of blank, 0, “n/a” and “-”).",
      "Tidy data is what sorting, filters, COUNTIF and SUMIF, pivot tables and charts all expect. A wide table of 5 plots × 3 months becomes 15 tidy rows, one per plot and month.",
      "**Reshaping.** To turn a wide table into a tidy one by hand, copy each month’s column under the previous one and fill in a Month column beside it. For large tables, desktop Excel’s Power Query has an **Unpivot Columns** command that does it in one step."
     ],
     pro:[
      "**Why merged cells hurt.** Apple’s Numbers help states that rows with merged cells can’t be sorted, and filtering may be unavailable until cells are unmerged; Excel refuses to sort ranges with differently sized merged cells. Use Center Across Selection in Excel, or simply left-align a title.",
      "**Wide versus long.** “Long” (tidy) layout suits analysis; “wide” layout (one column per month) suits reading and some charts. Pivot tables turn long data into wide summaries on demand, so store long and present wide.",
      "**A data dictionary.** On a separate sheet, list each column: name, meaning, unit, allowed values, and how missing values are recorded. It costs ten minutes and saves hours for the next person (often you).",
      "**Keep raw data raw.** Store the original import untouched; do cleaning in a copy or with formulas in new columns, and note each step. If a mistake is found later, you can redo the cleaning instead of guessing what changed.",
      "**Identifiers.** Give each record a unique ID that never changes. It lets you restore the original order, join tables reliably with lookups, and spot duplicates (COUNTIF(ID column, ID) > 1).",
      "Tidy spreadsheets move easily into statistics and data tools later, which is one reason research data guidance (for example from data-skills training programmes such as the Carpentries) teaches these habits first."
     ]
    },
    related:["sort-filter","pivot-tables","countif-sumif","cell-data-types","csv-files"],
    read:[{book:"wss", where:"Chapter 11, Section 11.1 “Understanding Data, Data Validation, and Data Tables”"}],
    sources:[{t:"Apple Support: Numbers User Guide for Mac, Sort data alphabetically or numerically in a table", url:"https://support.apple.com/guide/numbers/tanb46cee2b1/mac"},{t:"Google Docs Editors Help: Use tables in Google Sheets", url:"https://support.google.com/docs/answer/14239833?hl=en"}], checked:"2026-11"},

   {id:"sort-filter", title:"Sorting, filtering, freezing and validation", aka:["sort","filter","AutoFilter","filter view","freeze panes","freeze header rows","data validation","dropdown list","Format as Table"], tags:["spreadsheets","data"],
    summary:"Sort whole rows, filter to hide (not delete), freeze the header row, and use validation and tables to keep entries consistent.",
    levels:{
     starter:[
      "**Sort** puts rows in order (A to Z, smallest to largest). The rule: whole rows move together. Click one cell inside the table, not one whole column, before you sort, and tell the app the first row is a header.",
      "**Filter** shows only the rows you choose and hides the rest. Nothing is deleted.",
      "**Freeze** keeps the header row on screen while you scroll.",
      "**Data validation** limits what can be typed, for example a dropdown of allowed choices.",
      {warn:"Sorting a single selected column breaks every record: names stay put while their numbers move. Undo straight away if it happens."},
      "Numbers sort smallest to largest, text A to Z, dates oldest to newest. A column that mixes numbers and text sorts in an odd order, another reason to keep one kind of value per column."
     ],
     builder:[
      {table:[["Task","Excel","Google Sheets"],["Sort","Data → Sort (My data has headers)","Data → Sort range → Advanced range sorting options (Data has header row)"],["Filter","Data → Filter","Data → Create a filter; Data → Create filter view"],["Freeze header","View → Freeze Panes → Freeze Top Row","View → Freeze → 1 row"],["Validation","Data → Data Validation","Insert → Dropdown, or Data → Data validation"],["Table","Insert → Table (Ctrl+T)","Format → Convert to table"]]},
      {table:[["Task","LibreOffice Calc","Numbers"],["Sort","Data → Sort (Options: Range contains column labels)","Organize sidebar → Sort → Sort Entire Table"],["Filter","Data → AutoFilter","Column arrow → Quick Filter, or Organize → Filter"],["Freeze header","View → Freeze Cells → Freeze First Row","Format → Table → Headers & Footer → Freeze Header Rows"],["Validation","Data → Validity","Format → Cell → Data Format → Pop-Up Menu"]]},
      "Before a big sort, add an ID column (1, 2, 3 …) so you can restore the original order. Desktop Excel’s **Sort Warning** offers to **Expand the selection** when you’ve selected one column of a larger table: accept it.",
      "Filters hide rows but SUM still includes them; use SUBTOTAL (for example `=SUBTOTAL(109, C2:C40)` in Excel and Google Sheets) for a total of visible rows only.",
      "**Ties.** Add a second sort rule for rows with the same value (Excel: **Add Level**; Google Sheets: **Add another sort column**; LibreOffice Calc: **Sort Key 2**; Numbers: **Add a Column** in the Sort rules)."
     ],
     pro:[
      "**Shared files.** In Google Sheets an ordinary filter changes what every collaborator sees; filter views (Data → Create filter view) are personal and can be saved and named.",
      "**Multi-level and custom sorts.** Sort by more than one column (Team, then Surname), or by a custom order (Mon, Tue, Wed rather than alphabetical). Dates sort correctly only if they’re real dates; text dates sort alphabetically (“10 Jan” before “2 Jan”).",
      "**Validation is a seatbelt.** It checks new typing, not existing values; in some apps pasted values can bypass it. Excel can circle invalid data already present (Data → Data Validation → Circle Invalid Data on desktop). Google Sheets rejects entries not on a dropdown list by default, and can be set to show a warning instead.",
      "**Tables (Excel and Google Sheets).** A formal table extends formulas and formatting to new rows, keeps a header with filter buttons, and can be referred to by name in formulas. Google Sheets tables also give each column a type (Number, Text, Date, Dropdown, Checkbox and others) and flag entries that don’t match.",
      "**Merged cells and hidden rows.** Numbers can’t sort rows with merged cells, and Apple notes that hidden rows are still sorted with the rest. In every app, check for hidden rows and columns before trusting a sort or a copy.",
      {tip:"Sort a copy of an important sheet the first time you try a complicated sort, and compare a few records afterwards."}
     ]
    },
    related:["tidy-data","pivot-tables","countif-sumif","version-history"],
    read:[{book:"wss", where:"Chapter 9, Section 9.4 “Formatting and Templates in Microsoft Excel” (“Freezing Columns and Rows”) and Chapter 11, Section 11.1 (data validation)"}],
    sources:[{t:"Google Docs Editors Help: Sort & filter your data", url:"https://support.google.com/docs/answer/3540681"},{t:"Apple Support: Numbers User Guide for Mac, Filter data", url:"https://support.apple.com/guide/numbers/tan28bd63a8a/mac"},{t:"LibreOffice Help: Freeze Cells", url:"https://help.libreoffice.org/latest/is/text/scalc/01/07090100.html"}], checked:"2026-11"},

   {id:"pivot-tables", title:"Pivot tables", aka:["PivotTable","pivot","summary table","crosstab"], tags:["spreadsheets","data"],
    summary:"A pivot table summarises a tidy table in a few clicks: totals, counts or averages grouped by the categories you choose.",
    levels:{
     starter:[
      "Imagine a table of 500 sales, each with a date, a product and an amount. You want total sales for each product. You could write a SUMIF for every product, or you could make a **pivot table**: tell the app “products down the side, add up the amounts”, and it builds the summary for you.",
      "You choose:",
      {list:["**Rows**: the categories to list down the side (Product)","**Columns** (optional): categories across the top (Month)","**Values**: what to calculate (Sum of Amount, or Count of sales)","**Filters** (optional): only include some records (one shop)"]},
      "Pivot tables don’t change your data; they’re a separate summary you can rearrange freely.",
      {tip:"They only work well on tidy data: one header row, one record per row, no totals or blank rows inside."}
     ],
     builder:[
      "**Where to find them:** Excel, Insert → PivotTable; Google Sheets, Insert → Pivot table; LibreOffice Calc, Insert → Pivot Table; Numbers, pivot tables are built and arranged in the Organize sidebar’s Pivot Options (Apple’s guide has a Pivot Table Basics template under File → New → Basic).",
      {ex:"Data (tidy): Date | Category | Amount\n\nPivot: Rows = Category, Values = SUM of Amount\nFood        260\nTransport    45\nVenue       300\nGrand total 605", label:"The reunion costs as a pivot table", mono:true},
      "A pivot table is a snapshot: when the source data changes, **refresh** it (Excel: PivotTable Analyze → Refresh; LibreOffice: Data → Pivot Table → Refresh; Google Sheets updates automatically; in Numbers, use the refresh control in the Organize sidebar’s Pivot Options tab). New rows added below the source range may not be included unless the source is a table or a whole-column range.",
      "Values can be summarised as sum, count, average, minimum, maximum and more. Count is useful for “how many records per category”.",
      "**The steps in brief:** click inside the tidy table, insert a pivot table (usually on a new sheet), then add fields: Category to Rows and Amount to Values. Change the summary from Sum to Count or Average in the value settings, and add Month to Columns for a category-by-month grid."
     ],
     pro:[
      "**Honest limits.** A pivot table is only as good as its source. Inconsistent categories (“Food”, “food ”) appear as separate rows; text in a number column is counted but not summed; blank category cells form a “(blank)” group. Clean first.",
      "**Grouping dates.** Excel and LibreOffice can group a date field by month, quarter or year; Google Sheets offers date-group rules. This only works if the dates are real dates.",
      "**Calculated fields and percentages.** Values can be shown as percentage of a row, column or grand total, and Excel and Google Sheets allow calculated fields (OpenStax Section 11.4 shows Excel’s). Check the denominator: a percentage of the column total answers a different question from a percentage of the grand total.",
      "**Slicers and timelines** (Excel; slicers also in Google Sheets) add clickable filters, covered in OpenStax Section 11.4.",
      "**Reproducibility.** A pivot table’s layout is a set of clicks, which is hard to document. For a report you’ll repeat, note the settings (rows, columns, values, filters) next to it, or use formulas such as SUMIFS for the key figures so they can be checked.",
      "**Drill down to check.** In desktop Excel, double-clicking a value in a pivot table lists the records behind it on a new sheet: a quick way to check a surprising number before you report it."
     ]
    },
    related:["tidy-data","countif-sumif","sort-filter","choosing-charts"],
    read:[{book:"wss", where:"Chapter 10, Section 10.4 “PivotTables” and Chapter 11, Section 11.4 “PivotTables/Charts”"}],
    sources:[{t:"Apple Support: Numbers User Guide for Mac, Intro to pivot tables", url:"https://support.apple.com/guide/numbers/tan7ce76e776/mac"},{t:"OpenStax Workplace Software and Skills, Section 11.4 PivotTables/Charts", url:"https://openstax.org/books/workplace-software-skills/pages/11-4-pivottables-charts"}], checked:"2026-11"},

   {id:"choosing-charts", title:"Choosing and checking a chart", aka:["chart types","bar chart","line chart","pie chart","scatter chart","histogram","axis","truncated axis"], tags:["spreadsheets","charts","data"],
    summary:"Pick the chart for the question (compare, change over time, parts of a whole, relationship, spread), start bar axes at zero, and label everything.",
    levels:{
     starter:[
      "Decide what question the chart answers, then choose:",
      {list:["**Comparing categories:** bar or column chart","**Change over time:** line chart","**Parts of one whole:** pie chart with only a few parts, or a stacked bar","**Two measures together:** scatter chart","**How values are spread:** histogram"]},
      "Then check three things: the value axis of a bar chart starts at **zero**, the title says what the chart shows, and the axes have labels with units.",
      {key:"A chart is an answer to a question. Start with the question."},
      "Two examples: Priya wants to know which of her five cakes sells best, so a bar chart sorted from best to worst seller. Kenji wants to see whether his electricity use is rising through the year, so a line chart with months along the bottom.", {warn:"An axis that starts above zero can make 52 look twice the size of 48 in a bar chart. Check where the axis starts."}
     ],
     builder:[
      "**Axes.** The UK Office for National Statistics’ guidance says bar chart axes should always start at zero, because we compare bars by length; line and scatter charts may crop the axis if needed. A bar chart with an axis starting at 45 makes 52 versus 48 look like more than double (7 versus 3 units above the axis), when 52 is only about 8% bigger than 48. Unit 6 covers this and other tricks in {{misleading-numbers}}.",
      "**Making a chart.** Select the data with its header row, then: Excel, Insert → a chart type (desktop: Recommended Charts); Google Sheets, Insert → Chart, then the Chart editor’s Setup and Customize tabs; LibreOffice Calc, Insert → Chart; Numbers, the Chart button in the toolbar. Check the app put the categories and series the right way round, and switch rows and columns if not.",
      "**Labels.** A specific title, axis titles with units, direct labels instead of a legend where possible, a note of the source and date, and colours that aren’t the only way to tell series apart.",
      "**Avoid** 3D effects (OpenStax Section 11.5 notes they make charts harder to read), pie charts with many slices, and two different value axes on one chart unless you label them very clearly."
     ],
     pro:[
      "**Order and sorting.** Sort bar charts by value unless the categories have a natural order (age bands, months). The ONS bar chart guidance suggests ordering categories logically, typically largest to smallest.",
      "**Same scales for comparisons.** Small multiples (several small charts side by side) need identical axes, or readers will compare shapes that mean different things. Apps choose each axis automatically, so set them by hand.",
      "**Cropped line axes.** If a line chart’s axis doesn’t start at zero, ONS asks for a gap between the start of the axis and the first data point (around a quarter to a third of the chart’s space), so readers don’t mistake the bottom of the chart for zero.",
      "**Aggregation choices.** A chart of averages hides spread; a chart of totals rewards bigger groups. Consider showing counts alongside percentages, and say what each bar or point represents.",
      "**Accessibility.** Give charts a text alternative that states the main finding, not just “chart of sales”. Use more than colour to separate series, and check contrast. Keep the underlying table available for screen-reader users and for anyone who wants exact values.",
      "**Reproducibility.** Charts linked to tidy data update when the data changes, which is good, but also means a chart in a shared file can silently change. Export a dated image or PDF for reports that must stay fixed."
     ]
    },
    related:["misleading-numbers","pivot-tables","tidy-data","csv-files"],
    read:[{book:"wss", where:"Chapter 11, Section 11.5 “Data Analysis Charts”"}],
    sources:[{t:"ONS Service Manual: Axes and gridlines", url:"https://service-manual.ons.gov.uk/data-visualisation/guidance/axes-and-gridlines"},{t:"ONS Service Manual: Bar charts", url:"https://service-manual.ons.gov.uk/data-visualisation/chart-types/bar-charts"},{t:"OpenStax Workplace Software and Skills, Section 11.5 Data Analysis Charts", url:"https://openstax.org/books/workplace-software-skills/pages/11-5-data-analysis-charts"}], checked:"2026-11"},

   {id:"csv-files", title:"CSV files", aka:["comma-separated values",".csv","text import","UTF-8","encoding","semicolon CSV","mojibake"], tags:["spreadsheets","files","data"],
    summary:"CSV is plain text with one row per line and commas between values: it keeps values, loses formulas, formatting and extra sheets, and needs care with encoding and type guessing.",
    levels:{
     starter:[
      "A CSV file (comma-separated values) is a table written as plain text. Each line is a row; commas separate the cells. Almost every program can read it, which makes it the usual way to move data between apps and websites.",
      {ex:"Name,Town,Amount\n\"Okafor, Ada\",Lagos,25.00\nKenji Sato,Osaka,40.50", label:"A small CSV", mono:true},
      "It keeps only the **values** of **one sheet**. Formulas (only their results are saved), formatting, charts and other sheets are lost. So save your working file in the app’s own format, and export a CSV as a copy.",
      {warn:"Opening a CSV lets the app guess each column’s type: leading zeros can vanish and some codes become dates. Import with code columns set to Text."},
      "You can open a CSV in any text editor, such as Notepad or TextEdit, to see exactly what’s inside."
     ],
     builder:[
      "**Exporting.** Excel: File → Save As or Save a Copy → CSV UTF-8 (Comma delimited); Microsoft’s help says each CSV format saves only the active sheet. Excel for the web: File → Export → Download this sheet as CSV. Google Sheets: File → Download → Comma-separated values (current sheet). LibreOffice Calc: File → Save As → Text CSV, with Edit filter settings for character set and separator. Numbers: File → Export To → CSV, one file per table or combined, with text encoding under Advanced Options.",
      "**Importing.** Excel: Data → From Text/CSV, Transform Data, set code columns to Text. Google Sheets: File → Import, choosing the separator (or Detect automatically) and import location. LibreOffice Calc: the Text Import dialog, with character set, separator, a column type per column (Text keeps leading zeros) and the Detect special numbers option.",
      "**Encoding.** UTF-8 can store every script. A UTF-8 file read with an older encoding shows “JosÃ©” for “José”; re-import choosing UTF-8.",
      "**Separators.** Where the decimal mark is a comma, many programs write CSVs with semicolons. Import dialogs let you pick the separator.",
      "**Dates in CSVs** are just text, written in whatever format the exporting app used. The importing app has to guess the day/month order, so exporting dates as year-month-day (ISO 8601, such as 2026-11-05) avoids the guess."
     ],
     pro:[
      "**Quoting rules.** Values containing the separator, a double quote or a line break are wrapped in double quotes, and a quote inside a value is doubled: `\"Mei \"\"Mimi\"\" Lin\"`. Apps write this correctly; hand-edited CSVs often break it, shifting columns.",
      "**Excel’s guessing on open.** Microsoft states its Automatic Data Conversion options (leading zeros, 15-digit numbers, E notation, letters-plus-numbers as dates) apply when data is added to a workbook, such as by opening a .csv file, but don’t directly affect Power Query imports, where you set column types yourself. Either route can protect codes; double-clicking with defaults doesn’t.",
      "**Round trips.** Each open-edit-save cycle can apply type guessing again. Keep the original file read-only and treat the spreadsheet copy as derived data.",
      "**What CSV can’t say.** There’s no standard way to mark a column’s type, units or meaning inside a CSV, so share a short data dictionary with it (column names, units, codes for missing values, date format such as ISO 8601). There is also no single CSV standard followed by every program; RFC 4180 describes the common format but many tools differ in details such as line endings and encodings.",
      "**Large files.** CSVs can hold more rows than a spreadsheet sheet allows. Excel stops at 1,048,576 rows and warns that the rest wasn’t loaded; a data tool or database is better for bigger files.",
      {tip:"Open an unfamiliar CSV in a plain text editor first: you’ll see the separator, quoting, encoding problems and leading zeros exactly as stored."}
     ]
    },
    related:["cell-data-types","file-formats","tidy-data","spreadsheet-basics"],
    read:[{book:"wss", where:"Background reading: Chapter 13, Section 13.4 “Maintaining Records in a Database” (comma-delimited files)"}],
    sources:[{t:"Microsoft Support: Save a workbook to text format (.txt or .csv)", url:"https://support.microsoft.com/en-us/excel/save-a-workbook-to-text-format-txt-or-csv"},{t:"Google Docs Editors Help: Import data sets & spreadsheets", url:"https://support.google.com/docs/answer/40608?hl=en"},{t:"LibreOffice Help: Text Import", url:"https://help.libreoffice.org/latest/is/text/shared/00/00000208.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"spreadsheet", term:"Spreadsheet", def:"An app or file that stores information in a grid of cells and can calculate with it, such as Excel, Google Sheets, LibreOffice Calc or Numbers.", codex:"spreadsheet-basics"},
   {id:"workbook", term:"Workbook", def:"A whole spreadsheet file, which can contain several worksheets. Google Sheets calls it a spreadsheet.", codex:"spreadsheet-basics"},
   {id:"worksheet", term:"Worksheet", def:"One page of a workbook’s grid, shown as a tab. Also called a sheet.", codex:"spreadsheet-basics"},
   {id:"cell", term:"Cell", def:"One box in a spreadsheet grid, where a column meets a row. It holds one value or one formula.", codex:"spreadsheet-basics"},
   {id:"cell-reference", term:"Cell reference", def:"A cell’s address, written as its column letter and row number, such as B2. Formulas use references to point at cells.", codex:"cell-references"},
   {id:"range", term:"Range", def:"A rectangular block of cells, written as the first and last cell with a colon between them, such as A2:A10.", codex:"spreadsheet-basics"},
   {id:"formula-bar", term:"Formula bar", def:"The strip above the grid that shows what the selected cell really contains: the value or formula, not the formatted result.", codex:"spreadsheet-basics"},
   {id:"formula", term:"Formula", def:"An instruction in a cell that starts with = and calculates a result, such as =B2*C2. It updates when its inputs change.", codex:"formulas-operators"},
   {id:"function", term:"Function", def:"A named, ready-made calculation used in formulas, such as SUM or IF, with its inputs in parentheses.", codex:"common-functions"},
   {id:"argument", term:"Argument", def:"One of the inputs you give a function, separated by commas (or semicolons in some locales), as in ROUND(B2, 2).", codex:"common-functions"},
   {id:"operator", term:"Operator", def:"A symbol for an operation in a formula: + − * / ^ for arithmetic, & to join text, and = < > for comparisons.", codex:"formulas-operators"},
   {id:"relative-reference", term:"Relative reference", def:"An ordinary reference such as B2 that adjusts when the formula is copied, keeping the same position relative to the formula’s cell.", codex:"cell-references"},
   {id:"absolute-reference", term:"Absolute reference", def:"A reference locked with dollar signs, such as $D$2, that stays the same wherever the formula is copied.", codex:"cell-references"},
   {id:"mixed-reference", term:"Mixed reference", def:"A reference with only the column or only the row locked, such as $A2 or A$1, so one part changes when copied and the other doesn’t.", codex:"cell-references"},
   {id:"fill-handle", term:"Fill handle", def:"The small square (or, in Numbers, a yellow dot) on a selected cell that you drag to copy its contents or formula into neighbouring cells.", codex:"cell-references"},
   {id:"number-format", term:"Number format", def:"A setting that controls how a value is displayed (decimals, currency, percent, date style) without changing the value itself.", codex:"cell-data-types"},
   {id:"date-serial", term:"Date serial number", def:"The number a spreadsheet stores for a date: a count of days from a starting day. In Excel’s usual system, 5 July 2011 is 40729.", codex:"cell-data-types"},
   {id:"leading-zero", term:"Leading zero", def:"A zero at the start of a code, as in the postcode 02134. Spreadsheets drop it if the code is stored as a number, so store codes as text.", codex:"cell-data-types"},
   {id:"locale", term:"Locale", def:"Regional settings that decide how dates, numbers and currency are written, such as a decimal comma, and which separator formulas use.", codex:"formulas-operators"},
   {id:"error-value", term:"Error value", def:"A code such as #DIV/0!, #NAME?, #VALUE!, #REF! or #N/A that a formula shows when it can’t calculate a result. Each points to a different cause.", codex:"spreadsheet-errors"},
   {id:"lookup", term:"Lookup", def:"Finding a value in one column and returning the matching value from another column in the same row, as XLOOKUP and VLOOKUP do.", codex:"lookup-functions"},
   {id:"tidy-data", term:"Tidy data", def:"Data laid out with one row per record, one column per variable and one value per cell, so it can be sorted, filtered and counted.", codex:"tidy-data"},
   {id:"header-row", term:"Header row", def:"The first row of a data table, holding a short name for each column. Sorting and filters treat it differently from the data.", codex:"tidy-data"},
   {id:"sort", term:"Sort", def:"To reorder rows by the values in one or more columns, keeping each whole row together.", codex:"sort-filter"},
   {id:"filter", term:"Filter", def:"A tool that shows only the rows matching your choices and hides the others, without deleting anything.", codex:"sort-filter"},
   {id:"freeze-panes", term:"Freeze panes", def:"Keeping chosen rows or columns, usually the header row, on screen while the rest of the sheet scrolls.", codex:"sort-filter"},
   {id:"data-validation", term:"Data validation", def:"Rules that limit what can be typed in cells, such as a dropdown list of choices or numbers within a range.", codex:"sort-filter"},
   {id:"pivot-table", term:"Pivot table", def:"A summary table built from tidy data in a few clicks, grouping records by categories and calculating totals, counts or averages.", codex:"pivot-tables"},
   {id:"chart", term:"Chart", def:"A picture of data, such as a bar, line, pie or scatter chart, chosen to answer a particular question.", codex:"choosing-charts"},
   {id:"csv", term:"CSV", def:"Comma-separated values: a plain-text table with one row per line and commas between values. It keeps values only, for one sheet.", codex:"csv-files"},
   {id:"utf-8", term:"UTF-8", def:"The standard text encoding used across the web, able to store letters and symbols from every writing system. Choose it when saving or importing CSVs.", codex:"csv-files"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"t1u9-q01", lesson:"t1u9-l1", level:1, q:"What does the cell reference C4 mean?", options:[
     {t:"The cell in column C, row 4", ok:true, why:"References give the column letter first, then the row number."},
     {t:"The cell in row C, column 4", why:"Columns are lettered and rows are numbered, so C is the column and 4 the row."},
     {t:"The fourth sheet of workbook C", why:"Sheets are referred to by name, such as Sheet2!C4. C4 alone is a cell on the current sheet."},
     {t:"A range of four cells starting at C", why:"A range is written with a colon, such as C1:C4. C4 is a single cell."}
   ]},
   {id:"t1u9-q02", lesson:"t1u9-l1", level:1, q:"Which statement about number formats is true?", options:[
     {t:"They change how a value is displayed, not the value used in calculations", ok:true, why:"A cell holding 1.26 shown with one decimal displays 1.3, but formulas use 1.26."},
     {t:"They round the stored value to the decimals shown", why:"That’s what the ROUND function does. A format only changes the display."},
     {t:"They convert text into numbers", why:"Changing the format of text that looks like a number usually doesn’t convert it; you need to re-enter it or use VALUE."},
     {t:"They only work on dates", why:"Formats apply to numbers too: decimals, currency, percent, fractions, scientific notation."}
   ]},
   {id:"t1u9-q03", lesson:"t1u9-l1", level:1, q:"Why can you subtract one date from another in a spreadsheet?", options:[
     {t:"Dates are stored as numbers counting days from a starting day", ok:true, why:"Each date is a serial number, so subtracting gives the number of days between them."},
     {t:"Spreadsheets have a special subtract-dates button", why:"No special tool is needed: ordinary subtraction works because dates are numbers underneath."},
     {t:"Dates are stored as text and the app reads the words", why:"Text can’t be subtracted. Real dates are numbers; dates stored as text would give #VALUE!."},
     {t:"Only Excel can do this", why:"Google Sheets, LibreOffice Calc and Numbers all calculate with dates."}
   ]},
   {id:"t1u9-q04", lesson:"t1u9-l1", level:2, q:"Which entry should be stored as text rather than as a number?", options:[
     {t:"A staff ID such as 00731", ok:true, why:"It’s a label with a leading zero. As a number it becomes 731, and nobody does arithmetic on IDs."},
     {t:"The number of hours someone worked", why:"Hours are a quantity you’ll add or average, so a number is right."},
     {t:"A price of 4.50", why:"Prices are added and multiplied; store them as numbers with a currency format if you like."},
     {t:"A temperature reading of 21.5", why:"A measurement you might average or chart: a number."}
   ]},
   {id:"t1u9-q05", lesson:"t1u9-l1", level:2, q:"A column of amounts has one value sitting on the left edge of its cell while the others sit on the right. What does this most likely mean?", options:[
     {t:"That value is stored as text, so SUM and AVERAGE will skip it", ok:true, why:"By default text aligns left and numbers right. A number stored as text is a common cause of totals that are too small."},
     {t:"That value is negative", why:"Negative numbers still align right; they show a minus sign or brackets."},
     {t:"That value is the largest in the column", why:"Alignment doesn’t depend on size."},
     {t:"Nothing: alignment is random", why:"Default alignment follows the type of value, which is why it’s a useful clue."}
   ]},
   {id:"t1u9-q06", lesson:"t1u9-l1", level:3, q:"Amara pastes 200 customer phone numbers into a sheet. Later she notices they all lost their first 0. What would have prevented it?", options:[
     {t:"Formatting the column as Text before pasting", ok:true, why:"Text cells keep every character, including leading zeros. Changing the format afterwards can’t bring the zeros back."},
     {t:"Formatting the column as Currency", why:"Currency is a number format, so the zeros would still be dropped."},
     {t:"Making the column wider", why:"Width affects display only; the zero was removed when the value was stored as a number."},
     {t:"Sorting the column afterwards", why:"Sorting changes order, not values. The zeros were already gone."}
   ]},
   {id:"t1u9-q07", lesson:"t1u9-l1", level:3, q:"A researcher’s list of gene symbols includes SEPT2 and MARCH1. After pasting into Excel with default settings, some appear as 2-Sep and 1-Mar. What happened, and what’s a good habit?", options:[
     {t:"Excel guessed they were dates; set the column to Text before pasting and check data after importing", ok:true, why:"This automatic conversion affected about a fifth of genomics papers with Excel gene lists in a 2016 study. Text format, or Excel’s Automatic Data Conversion settings, prevents it."},
     {t:"The file was corrupted during copying", why:"The pattern (gene names becoming specific dates) is the app’s type guessing, not corruption."},
     {t:"Gene symbols can’t be stored in spreadsheets", why:"They can, as text. The problem is letting the app guess the type."},
     {t:"Bold formatting would have stopped the conversion", why:"Font formatting doesn’t affect how a value is interpreted."}
   ]},
   {id:"t1u9-q08", lesson:"t1u9-l1", level:2, q:"A1 and A2 both hold 3.14 and are formatted to show no decimals, so each shows 3. A3 holds =A1+A2, also with no decimals. What does A3 show?", options:[
     {t:"6", ok:true, why:"The formula adds the stored values: 3.14 + 3.14 = 6.28, displayed with no decimals as 6."},
     {t:"7", why:"The sum is 6.28, which rounds to 6 for display, not 7."},
     {t:"6.28", why:"That’s the stored value, visible in the formula bar, but the cell is formatted to show no decimals."},
     {t:"5", why:"Nothing here rounds down to 5; the sum is 6.28."}
   ]},
   {id:"t1u9-q09", lesson:"t1u9-l1", level:3, q:"Lucía’s 16-digit membership numbers end in 0 after she types them into Excel, even though many should end in other digits. Why?", options:[
     {t:"Excel keeps only 15 significant digits for numbers, so the 16th becomes 0; store them as text", ok:true, why:"Microsoft’s support article explains the 15-digit limit. Long codes must be text (format as Text first, or type an apostrophe)."},
     {t:"The column is too narrow", why:"A narrow column shows #### or scientific notation, but the stored value is changed by the 15-digit limit."},
     {t:"She typed them wrong", why:"The consistent 0 in the 16th place is the precision limit, not typing errors."},
     {t:"Excel rounds all numbers to the nearest 10", why:"Only digits beyond the 15th are affected."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"t1u9-q10", lesson:"t1u9-l2", level:1, q:"What must a formula start with?", options:[
     {t:"An equals sign =", ok:true, why:"Without =, the app treats the entry as text or a number."},
     {t:"A dollar sign $", why:"$ locks a reference inside a formula; it doesn’t start one."},
     {t:"An apostrophe '", why:"An apostrophe makes an entry text, the opposite of a formula."},
     {t:"Parentheses ( )", why:"Parentheses group parts of a formula, but the formula still starts with =."}
   ]},
   {id:"t1u9-q11", lesson:"t1u9-l2", level:2, q:"What does =10+6/2 return?", options:[
     {t:"13", ok:true, why:"Division comes before addition: 6 ÷ 2 = 3, then 10 + 3 = 13."},
     {t:"8", why:"That’s (10 + 6) ÷ 2, which needs parentheses: =(10+6)/2."},
     {t:"16", why:"That ignores the division altogether."},
     {t:"11", why:"6 ÷ 2 is 3, so the result is 13."}
   ]},
   {id:"t1u9-q12", lesson:"t1u9-l2", level:1, q:"D2 contains =B2*C2. You copy D2 to D5. What formula does D5 contain?", options:[
     {t:"=B5*C5", ok:true, why:"Relative references keep their position relative to the formula, so moving three rows down shifts each reference three rows down."},
     {t:"=B2*C2", why:"That would need absolute references ($B$2*$C$2). Ordinary references adjust when copied."},
     {t:"=E5*F5", why:"The columns don’t change, because D5 is in the same column as D2."},
     {t:"=B3*C3", why:"D5 is three rows below D2, so the references move three rows, to row 5."}
   ]},
   {id:"t1u9-q13", lesson:"t1u9-l2", level:1, q:"Which reference stays exactly the same wherever the formula is copied?", options:[
     {t:"$F$1", ok:true, why:"Dollar signs lock both the column and the row."},
     {t:"F1", why:"A relative reference adjusts when copied."},
     {t:"$F1", why:"Only the column is locked; the row changes when copied up or down."},
     {t:"F$1", why:"Only the row is locked; the column changes when copied sideways."}
   ]},
   {id:"t1u9-q14", lesson:"t1u9-l2", level:3, q:"Kenji puts an exchange rate in E1 and writes =B2*E1 in C2, then fills it down. C2 is right, but C3 onwards show 0. What’s wrong?", options:[
     {t:"The copies point at E2, E3 and so on, which are empty; he needs =B2*$E$1", ok:true, why:"Without $, E1 moves down with each copy. Empty cells count as 0, so the results are 0. Locking E1 fixes every copy."},
     {t:"The exchange rate is formatted as a percentage", why:"Formatting wouldn’t make some rows 0 and others right. The pattern (only the first row works) points to the reference moving."},
     {t:"Fill down only copies values, not formulas", why:"Filling copies formulas and adjusts their references, which is exactly what happened here."},
     {t:"The B column contains text", why:"Then C2 would be affected too. Only the copies are wrong, so the copied reference is the problem."}
   ]},
   {id:"t1u9-q15", lesson:"t1u9-l2", level:2, q:"B2 contains =$A2*B$1. It is copied to C3. What does C3 contain?", options:[
     {t:"=$A3*C$1", ok:true, why:"The locked column A stays, but its row moves to 3; the locked row 1 stays, but its column moves to C."},
     {t:"=$A2*B$1", why:"Each reference has one unlocked part, which changes when copied."},
     {t:"=$B3*C$2", why:"$A can’t become B, and $1 can’t become 2: those parts are locked."},
     {t:"=A3*C1", why:"Copying keeps the dollar signs; only the unlocked parts change."}
   ]},
   {id:"t1u9-q16", lesson:"t1u9-l2", level:3, q:"Fatima wants the percentage change from last year (A2 = 200) to this year (B2 = 250). Which formula, formatted as Percent, gives 25%?", options:[
     {t:"=(B2-A2)/A2", ok:true, why:"(250 − 200) ÷ 200 = 0.25, which shows as 25%."},
     {t:"=B2-A2/A2", why:"Division first: 250 − (200 ÷ 200) = 249, shown as 24900%."},
     {t:"=(B2-A2)/B2", why:"That divides by this year: 50 ÷ 250 = 20%. Change is measured against the starting value."},
     {t:"=B2/A2", why:"That gives 1.25 (125%), the ratio, not the change."}
   ]},
   {id:"t1u9-q17", lesson:"t1u9-l2", level:3, q:"Tomás copies =SUM(A1,B1) from an English tutorial into his spreadsheet, which uses a decimal comma, and gets an error. What should he try first?", options:[
     {t:"Replace the comma between the arguments with a semicolon: =SUM(A1;B1)", ok:true, why:"In decimal-comma locales, apps use semicolons to separate arguments. The function is fine."},
     {t:"Change his computer’s language to English permanently", why:"That’s drastic and unnecessary; the formula just needs the local separator."},
     {t:"Use =ADD(A1,B1) instead", why:"There’s no ADD function in these apps, so it would give #NAME?. The separator is the issue."},
     {t:"Type the formula without the =", why:"Without = it becomes text and won’t calculate at all."}
   ]},
   {id:"t1u9-q18", lesson:"t1u9-l2", level:2, q:"A formula refers to a cell, and you delete the whole row containing that cell. What does the formula show?", options:[
     {t:"#REF!", ok:true, why:"The cell it pointed to no longer exists, so the reference is broken."},
     {t:"0", why:"Deleting a referenced cell breaks the reference rather than making it 0. (An empty cell that still exists would count as 0.)"},
     {t:"The value the deleted cell used to have", why:"Formulas don’t remember old values; they recalculate from live references."},
     {t:"#N/A", why:"#N/A means a lookup found no match. A broken reference is #REF!."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"t1u9-q19", lesson:"t1u9-l3", level:1, q:"What is the difference between COUNT and COUNTA?", options:[
     {t:"COUNT counts cells with numbers; COUNTA counts all cells that aren’t empty", ok:true, why:"COUNTA includes text, so a column with words in it gives a bigger COUNTA than COUNT."},
     {t:"COUNT counts all cells; COUNTA counts only numbers", why:"It’s the other way round: the A is for “all non-empty”."},
     {t:"COUNTA adds the values; COUNT counts them", why:"Neither adds; SUM adds."},
     {t:"There’s no difference; COUNTA is the old name", why:"They give different results whenever cells hold text."}
   ]},
   {id:"t1u9-q20", lesson:"t1u9-l3", level:2, q:"B2:B5 hold 10, 20, (blank) and 30. What does =AVERAGE(B2:B5) return?", options:[
     {t:"20", ok:true, why:"AVERAGE skips the blank: (10 + 20 + 30) ÷ 3 = 20."},
     {t:"15", why:"That treats the blank as 0 (60 ÷ 4). AVERAGE ignores empty cells."},
     {t:"60", why:"60 is the SUM."},
     {t:"30", why:"30 is the MAX."}
   ]},
   {id:"t1u9-q21", lesson:"t1u9-l3", level:2, q:"Which formula shows “Late” when C2 is greater than 7, and “On time” otherwise?", options:[
     {t:"=IF(C2>7, \"Late\", \"On time\")", ok:true, why:"The test, then the result if true, then the result if false, with text in straight double quotes."},
     {t:"=IF(C2>7, Late, On time)", why:"Without quotes the app looks for names called Late and On time, giving #NAME?."},
     {t:"=IF(\"Late\", C2>7, \"On time\")", why:"The test must come first."},
     {t:"=IF(C2<7, \"Late\", \"On time\")", why:"That reverses the logic: values under 7 would be marked Late."}
   ]},
   {id:"t1u9-q22", lesson:"t1u9-l3", level:2, q:"Amounts in C2:C6 are 120, 300, 80, 45 and 60. What does =COUNTIF(C2:C6, \">100\") return?", options:[
     {t:"2", ok:true, why:"Only 120 and 300 are greater than 100."},
     {t:"420", why:"420 is the SUMIF of those values. COUNTIF counts them."},
     {t:"3", why:"80, 45 and 60 aren’t over 100; only two values are."},
     {t:"5", why:"5 is the number of cells, not the number meeting the condition."}
   ]},
   {id:"t1u9-q23", lesson:"t1u9-l3", level:1, q:"In =SUMIF(B2:B6, \"Food\", C2:C6), what does C2:C6 do?", options:[
     {t:"It’s the range of values to add up for the rows where B says Food", ok:true, why:"SUMIF checks the first range and adds the matching rows from the sum range."},
     {t:"It’s where the condition is checked", why:"The condition is checked in the first range, B2:B6."},
     {t:"It’s where the answer will be written", why:"The answer appears in the cell holding the formula."},
     {t:"It lists the allowed categories", why:"The criterion is the second argument, \"Food\"."}
   ]},
   {id:"t1u9-q24", lesson:"t1u9-l3", level:3, q:"Mei’s VLOOKUP, =VLOOKUP(F2, A2:C50, 3), sometimes returns a price for the wrong product, with no error. Why?", options:[
     {t:"Without FALSE at the end it does an approximate match, which needs a sorted first column", ok:true, why:"All four apps default to approximate matching. Add FALSE for an exact match, or use XLOOKUP, which is exact by default."},
     {t:"VLOOKUP can only search 10 rows", why:"It can search thousands of rows. The missing last argument is the problem."},
     {t:"Column 3 should be column 2", why:"If prices are in the third column of A2:C50, 3 is right. Wrong products come from approximate matching."},
     {t:"The prices are formatted as currency", why:"Formatting doesn’t change which row is matched."}
   ]},
   {id:"t1u9-q25", lesson:"t1u9-l3", level:2, q:"A cell shows #DIV/0!. What is the most likely cause?", options:[
     {t:"The formula divides by a cell that is empty or 0", ok:true, why:"Dividing by zero is undefined; empty cells count as 0."},
     {t:"A function name is misspelled", why:"That gives #NAME?."},
     {t:"A lookup didn’t find its value", why:"That gives #N/A."},
     {t:"The column is too narrow", why:"A narrow column shows ####, which isn’t an error."}
   ]},
   {id:"t1u9-q26", lesson:"t1u9-l3", level:3, q:"Sione’s =XLOOKUP(F2, A2:A40, C2:C40) shows #N/A for code 0731, but he can see 0731 in the list. What should he check?", options:[
     {t:"Whether one 0731 is text and the other a number (731), or one has an extra space", ok:true, why:"Lookups need an exact match, including type and spaces. A code typed into a General-format cell becomes the number 731, which doesn’t equal the text “0731”."},
     {t:"Whether XLOOKUP exists in his app", why:"If it didn’t, he’d see #NAME?, not #N/A."},
     {t:"Whether the list is sorted", why:"XLOOKUP matches exactly by default and doesn’t need sorted data."},
     {t:"Whether the result column is too narrow", why:"A narrow column shows ####, not #N/A."}
   ]},
   {id:"t1u9-q27", lesson:"t1u9-l3", level:3, q:"Oluwaseun’s club treasurer pays out 25.00 ÷ 3 to each of three helpers, using =B2/3 formatted to two decimals (8.33 each). The sheet’s total shows 25.00, but the bank says 24.99 was paid. Which change makes the sheet match reality?", options:[
     {t:"Use =ROUND(B2/3, 2) so each share really is 8.33", ok:true, why:"ROUND changes the stored value, so the total of the three shares becomes 24.99, matching what was paid."},
     {t:"Increase the decimals shown to four", why:"That shows 8.3333, but the sheet still totals 25.00 while the payments were 8.33."},
     {t:"Format the total as Currency", why:"Currency formatting changes the look of 25.00, not the mismatch."},
     {t:"Use COUNT instead of SUM for the total", why:"COUNT would give 3, the number of shares."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"t1u9-q28", lesson:"t1u9-l4", level:1, q:"Which is one of the three tidy-data rules?", options:[
     {t:"Each cell holds one value", ok:true, why:"The rules are one record per row, one variable per column and one value per cell."},
     {t:"Each sheet holds one row", why:"A sheet holds many records, one per row."},
     {t:"Use colour to show categories", why:"Colour isn’t a value functions can count reliably; categories belong in a column."},
     {t:"Merge cells to group related records", why:"Merged cells block sorting and filtering."}
   ]},
   {id:"t1u9-q29", lesson:"t1u9-l4", level:1, q:"What does a filter do to the rows that don’t match?", options:[
     {t:"Hides them; they come back when the filter is cleared", ok:true, why:"Filters change the view, not the data."},
     {t:"Deletes them permanently", why:"Nothing is deleted. Clear the filter and every row returns."},
     {t:"Moves them to another sheet", why:"They stay where they are, just hidden."},
     {t:"Sorts them to the bottom", why:"That would be sorting. Filtering hides."}
   ]},
   {id:"t1u9-q30", lesson:"t1u9-l4", level:2, q:"Before sorting a table of 500 orders, why add an ID column numbered 1, 2, 3 …?", options:[
     {t:"So you can restore the original order by sorting on ID", ok:true, why:"The original order is lost after a sort unless something records it."},
     {t:"Because sorting needs a numbered column to work", why:"Sorting works without one; the ID is a safety net."},
     {t:"To make the table look tidier", why:"Its purpose is practical: getting the original order back."},
     {t:"So the app knows where the header is", why:"You tell the app about the header with a “has header row” option."}
   ]},
   {id:"t1u9-q31", lesson:"t1u9-l4", level:2, q:"Which feature keeps the header row visible while you scroll down a long list?", options:[
     {t:"Freeze panes (Freeze Top Row, Freeze 1 row, Freeze First Row or Freeze Header Rows)", ok:true, why:"Freezing pins rows or columns in place on screen."},
     {t:"Data validation", why:"Validation limits what can be typed; it doesn’t affect scrolling."},
     {t:"A filter", why:"A filter hides rows; it doesn’t pin the header."},
     {t:"Merging the header cells", why:"Merging joins cells; it doesn’t keep them on screen, and it causes sorting problems."}
   ]},
   {id:"t1u9-q32", lesson:"t1u9-l4", level:3, q:"Ana’s team logs expenses with categories typed freely, and COUNTIF misses many entries. What’s the best long-term fix?", options:[
     {t:"Add a dropdown list (data validation) for the category column, then clean the existing entries", ok:true, why:"Validation stops new inconsistent entries; a one-off clean-up fixes the old ones (validation doesn’t fix existing data)."},
     {t:"Colour-code the categories", why:"Colours don’t make typed text consistent, and functions can’t reliably count colours."},
     {t:"Ask everyone to type more carefully", why:"Good intentions don’t stop stray spaces and spelling variants; a dropdown does."},
     {t:"Merge cells with the same category", why:"Merging breaks sorting and filtering and doesn’t fix spellings."}
   ]},
   {id:"t1u9-q33", lesson:"t1u9-l4", level:3, q:"Dmitri sorts a table and notices row 1, his header row, has moved into the middle of the data. What went wrong?", options:[
     {t:"The sort treated the header as data; he should tick the “has header row” option", ok:true, why:"Tell the app the first row holds headers (My data has headers, Data has header row, Range contains column labels) and it stays on top."},
     {t:"The header row was too long", why:"Length doesn’t matter; the app needs to know it’s a header."},
     {t:"Sorting always moves headers", why:"Only when the app thinks they’re data."},
     {t:"He should have merged the header cells", why:"Merging causes sorting problems rather than solving them."}
   ]},
   {id:"t1u9-q34", lesson:"t1u9-l4", level:3, q:"Which harvest record is laid out as tidy data?", options:[
     {t:"Columns Plot, Month, Crop, Kg, with one row for each plot-month-crop weighing", ok:true, why:"One record per row, one variable per column, one value per cell."},
     {t:"One row per plot, with columns June, July and August containing “2 kg tomatoes”", why:"Months as columns and several values in one cell break two rules."},
     {t:"One row per plot, with sold crops shaded yellow", why:"Colour carries information that should be a column."},
     {t:"A table with a TOTAL row after each month’s records", why:"Totals mixed with records break sorting and double-count in sums."}
   ]},
   {id:"t1u9-q35", lesson:"t1u9-l4", level:2, q:"Hana filters her sales table to show one month. Next to it, =SUM(C2:C200) still shows the whole year. Why?", options:[
     {t:"SUM includes rows hidden by a filter; SUBTOTAL can total visible rows only", ok:true, why:"Filtering hides rows without removing them, and SUM adds every cell in its range."},
     {t:"The filter didn’t work", why:"It did: the rows are hidden. SUM just doesn’t care whether rows are hidden."},
     {t:"SUM only updates when you save", why:"Spreadsheets recalculate automatically."},
     {t:"Her table has merged cells", why:"Merged cells cause other problems, but SUM including hidden rows is normal."}
   ]},
   {id:"t1u9-q36", lesson:"t1u9-l4", level:1, q:"What is a pivot table for?", options:[
     {t:"Summarising tidy data by categories, such as total sales per month, in a few clicks", ok:true, why:"You choose rows, columns and values, and the app builds the summary."},
     {t:"Rotating a chart by 90 degrees", why:"“Pivot” here means rearranging a summary, not rotating a picture."},
     {t:"Locking the header row", why:"That’s freezing panes."},
     {t:"Checking spelling in a column", why:"Pivot tables summarise; data validation and filters help with spelling problems."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"t1u9-q37", lesson:"t1u9-l5", level:1, q:"Which chart best shows how a value changed month by month over two years?", options:[
     {t:"A line chart", ok:true, why:"Line charts show change over time, with time along the horizontal axis."},
     {t:"A pie chart", why:"Pie charts show parts of one whole, not change over time."},
     {t:"A scatter chart", why:"Scatter charts show the relationship between two measures."},
     {t:"A histogram", why:"Histograms show how values are spread across ranges."}
   ]},
   {id:"t1u9-q38", lesson:"t1u9-l5", level:1, q:"Where should the value axis of a bar chart start?", options:[
     {t:"At zero", ok:true, why:"Bars are compared by length. ONS guidance says bar chart axes should always start at zero."},
     {t:"Just below the smallest value", why:"That exaggerates differences: small gaps look huge."},
     {t:"Wherever makes the chart look most dramatic", why:"Drama at the cost of accuracy misleads readers."},
     {t:"At the average value", why:"Bars would then grow from the average, which isn’t how readers interpret them."}
   ]},
   {id:"t1u9-q39", lesson:"t1u9-l5", level:3, q:"Priya’s bar chart compares 205 sales this month with 200 last month, and the axis starts at 195. This month’s bar looks twice as tall. What’s the honest fix?", options:[
     {t:"Start the axis at zero, or report the change directly (up 2.5%)", ok:true, why:"Above 195 the bars are 10 and 5 units tall, so one looks double. Starting at zero shows the real, small difference."},
     {t:"Keep it; the numbers on the axis are correct", why:"True numbers can still give a false impression when bar lengths don’t start at zero."},
     {t:"Switch to 3D bars", why:"3D makes values harder to read and doesn’t fix the axis."},
     {t:"Remove the axis so the start isn’t visible", why:"Hiding the axis makes the chart less honest, not more."}
   ]},
   {id:"t1u9-q40", lesson:"t1u9-l5", level:1, q:"What is a CSV file?", options:[
     {t:"A plain-text table: one row per line, with commas between the values", ok:true, why:"CSV stands for comma-separated values."},
     {t:"Excel’s own file format", why:"Excel’s own format is .xlsx. CSV is plain text that any app can read."},
     {t:"A compressed folder of spreadsheets", why:"That describes a .zip file, not CSV."},
     {t:"An image of a spreadsheet", why:"CSV is text, not an image."}
   ]},
   {id:"t1u9-q41", lesson:"t1u9-l5", level:2, q:"You save a workbook with three sheets, formulas and coloured headers as CSV. What does the CSV contain?", options:[
     {t:"The values of the current sheet only, as plain text", ok:true, why:"CSV keeps values for one sheet. Formulas become their results; formatting and other sheets are lost."},
     {t:"All three sheets, with formulas", why:"CSV holds a single table of values. Excel’s help says each CSV format saves only the active sheet."},
     {t:"Everything, including colours and charts", why:"CSV is plain text, so it has no formatting or charts."},
     {t:"Only the formulas, not their results", why:"It’s the other way round: results are saved, formulas are not."}
   ]},
   {id:"t1u9-q42", lesson:"t1u9-l5", level:2, q:"Why does “José” sometimes appear as “JosÃ©” after a CSV is opened?", options:[
     {t:"The file is UTF-8 but was read with a different text encoding", ok:true, why:"é takes two bytes in UTF-8; read with an older encoding, they show as two separate characters. Re-import as UTF-8."},
     {t:"CSV files can’t store accented letters", why:"They can, in UTF-8. The reader just has to use the same encoding."},
     {t:"The cell’s number format is wrong", why:"Number formats affect numbers and dates, not how letters are decoded."},
     {t:"Someone typed the name incorrectly", why:"The consistent pattern (Ã plus another character) is the signature of an encoding mismatch."}
   ]},
   {id:"t1u9-q43", lesson:"t1u9-l5", level:3, q:"Kenji receives a CSV of customer postcodes, several starting with 0. What’s the safest way to bring it into his spreadsheet?", options:[
     {t:"Import it (for example Data → From Text/CSV or a Text Import dialog) and set the postcode column to Text", ok:true, why:"Importing lets him choose column types, so leading zeros are kept. Double-clicking lets the app guess and drop them."},
     {t:"Double-click it, then format the column as Text", why:"By then the zeros are already gone; formatting afterwards can’t restore them."},
     {t:"Open and save it a few times so the app learns the format", why:"Each round trip can apply the same guessing again. Keep the original untouched."},
     {t:"Rename the file from .csv to .xlsx", why:"Renaming doesn’t convert the file and may stop it opening at all."}
   ]},
   {id:"t1u9-q44", lesson:"t1u9-l5", level:3, q:"Lucía downloads a CSV from a European website and every row appears in a single column, with semicolons between the values. What should she do?", options:[
     {t:"Import it again and choose semicolon as the separator", ok:true, why:"In decimal-comma countries, CSVs often use semicolons. Import dialogs let you choose the separator (Google Sheets can detect it automatically)."},
     {t:"Delete the semicolons by hand", why:"That would merge all the values together. The semicolons are the separators."},
     {t:"Assume the file is damaged and ask for a new one", why:"The file is fine; it just uses a different separator."},
     {t:"Change the column’s number format", why:"Number formats don’t split text into columns."}
   ]},
   {id:"t1u9-q45", lesson:"t1u9-l5", level:2, q:"Which title and labels make a chart understandable on its own?", options:[
     {t:"“Cake sales by type, October 2026”, with axis titles such as “Number sold” and the data source noted", ok:true, why:"A specific title, axis titles with units and a source let readers understand the chart without you."},
     {t:"“Chart 1”, with the default legend", why:"A generic title tells readers nothing about what they’re looking at."},
     {t:"No title, so the chart looks cleaner", why:"Without a title readers have to guess the question the chart answers."},
     {t:"A 3D effect to draw attention", why:"3D makes values harder to read and adds no information."}
   ]}
  ]
});
