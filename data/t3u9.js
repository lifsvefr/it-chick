/* Track 3 · Unit 9 · Databases and SQL */
ICA.addUnit({
  id:"t3u9", track:"t3", n:9, title:"Databases and SQL", icon:"🗄️",
  blurb:"Store data as linked tables and ask it questions in SQL: choose, filter, sort, count, group and join, on a small invented community-garden database you can query in your browser. Then set up SQLite on a computer, import a CSV and design tables that stay correct.",
  goals:[
    "Explain tables, rows, columns, primary keys and foreign keys, and when a database beats a spreadsheet",
    "Write SELECT queries with WHERE, ORDER BY and LIMIT, and predict their results",
    "Summarise data with COUNT, SUM and AVG, GROUP BY and HAVING, and handle NULL correctly",
    "Combine tables with inner and left joins, and check that a join hasn’t lost or doubled rows",
    "Use DB Browser for SQLite, import a CSV, design normalised tables, spot SQL dialect differences and explain how programs avoid SQL injection"
  ],
  read:[
    {book:"dcss", where:"Data Management with SQL for Social Scientists (an “alpha” lesson, still being developed): episodes “What is a relational database?”, “Using DB Browser for SQLite”, “The Select Statement”, “Missing Data”, “Aggregations”, “Creating tables and views” and “Joins”", note:"The lesson’s source is at github.com/datacarpentry/sql-socialsci. It uses a real (simplified) farm survey in DB Browser for SQLite."},
    {book:"swc", where:"Software Carpentry’s lesson “Databases and SQL” (swcarpentry.github.io/sql-novice-survey): episodes “Selecting Data” to “Data Hygiene”", note:"A stable Carpentries lesson on SQLite, using an invented polar survey database. "}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u9-l1", title:"What a database is", minutes:50,
   hook:{q:"Which of these almost certainly has an SQL database engine running inside it?", options:["A smartphone","A web browser such as Chrome, Firefox or Safari","Both of them","Neither: databases only live on big servers"], answer:2, reveal:"**Both.** SQLite, a small database engine, is built into every Android phone and iPhone and into the Chrome, Firefox and Safari browsers, according to SQLite’s own documentation. Apps use it to keep messages, settings and history. Databases aren’t only giant systems in data centres. This lesson explains what a database is, how its tables link together, and when it beats one big spreadsheet."},
   goals:[
     "Say what a database, a table, a row and a column are",
     "Explain primary keys and foreign keys, and draw how tables link",
     "Read the garden database’s structure and say which table answers which question",
     "Decide when a database is a better home than a spreadsheet, and when it isn’t",
     "Name common database systems and say what makes SQLite different"
   ],
   learn:[
    {h:"The garden club’s problem", body:[
      {lead:"A community garden starts with one spreadsheet. It works well, until it doesn’t."},
      "Picture an invented community garden. Members rent plots in three beds (North, South and East) and log every harvest. At first one sheet holds everything: who picked it, the year they joined, their bed and plot size, the crop, the weight and the month.",
      {ex:"member | joined | bed   | crop     | kg\nAma    | 2021   | North | beans    | 2.5\nAma    | 2021   | North | tomatoes | 4\nBilal  | 2024   | North | beans    | 1\nChen   | 2019   | South | kale     | 3.5", mono:true, label:"One big sheet (invented)"},
      "After a season the cracks show. Ama’s joining year and bed are typed again on every harvest she logs. One typo (“Amma”) quietly creates a second Ama. If Ama moves to the South bed, every one of her rows must change, and missing one makes the sheet disagree with itself. And where do you record a new member who hasn’t harvested anything yet? There’s no row for them unless you invent a fake harvest.",
      "A database fixes this by giving each kind of thing its own table: one for members, one for plots, one for harvests. Each fact is stored once, and the tables are linked by ID numbers. This is Unit 2’s advice to split data into tables joined by a [[primary-key-sheet|key column]], taken all the way.",
      {key:"A database stores each fact once, in the table where it belongs, and links tables with keys. A query puts the pieces back together when you ask a question."}
    ]},
    {h:"Tables, rows and columns", body:[
      "A [[database]] is an organised collection of data that a program can search, change and combine. The databases in this unit are **relational**: the data lives in tables that relate to each other.",
      {list:[
        "A [[table-db|table]] holds one kind of thing: members, or plots, or harvests.",
        "Each [[row-record|row]] (also called a record) is one of those things: one member, one harvest.",
        "Each [[column-field|column]] (also called a field) is one property, with the same kind of value in every row: every member’s joining year, every harvest’s weight."
      ]},
      "If that sounds like [[tidy-data]] from Unit 2 of this track, it is: one row per observation, one column per variable. The difference is that a database knows its tables’ structure before any data arrives. The column names, their types and their rules are written down as the [[schema-db|schema]]. In SQL, the language this unit teaches, a schema is written with `CREATE TABLE`:",
      {code:"CREATE TABLE members (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  joined INTEGER,\n  plot_id INTEGER\n);", lang:"sql", cap:"The Data Lab creates its members table with this statement (written there on one line). Each line inside the brackets names a column and its type."},
      "The types say what kind of value belongs in each column. SQLite, the database system used in this unit, stores five kinds of value: `INTEGER` (whole numbers), `REAL` (decimals), `TEXT`, `BLOB` (raw bytes, such as an image) and `NULL` (no value; Lesson 3).",
      {warn:"SQLite is unusually forgiving about types. In a test for this unit, it stored the text `'soon'` in the INTEGER column `joined` without complaint; PostgreSQL refused the same row (“invalid input syntax for type integer”). SQLite’s documentation calls this **flexible typing**. Since version 3.37.0 (2021) you can add the word `STRICT` after a table’s definition to make SQLite refuse wrong types too."}
    ]},
    {h:"Keys: how tables point at each other", body:[
      "Every table needs a column that names each row uniquely and never changes: its [[primary-key]]. In the garden database every table has an `id` column for this. Declaring `id INTEGER PRIMARY KEY` makes SQLite enforce it: when we tried to add a second member with id 3, it refused with “UNIQUE constraint failed: members.id”.",
      "Why not use the name? Two members can share a name (there may well be two Anas one day), and people change names. A plain number that means nothing else is the safest key.",
      "A [[foreign-key]] is a column that holds another table’s primary key. `members.plot_id` holds the id of the member’s plot in `plots`. `harvests.member_id` holds the id of the member in `members` who picked it. The number is a pointer: “this harvest belongs to member 3”.",
      {fig:'<svg viewBox="0 0 340 410"><defs><marker id="t3u9k" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-lup" x="70" y="12" width="200" height="26" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">plots</text><rect class="d-gold" x="74" y="42" width="192" height="18" rx="4"/><text x="84" y="55" class="mono">id</text><text x="260" y="55" text-anchor="end" class="s">PK</text><text x="84" y="73" class="mono">bed</text><text x="84" y="91" class="mono">size_m2</text><rect class="d-ink" x="70" y="12" width="200" height="90" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle" class="s">each member’s plot_id points at a plot</text><rect class="d-lup" x="70" y="132" width="200" height="26" rx="8" stroke-width="2"/><text x="170" y="150" text-anchor="middle">members</text><rect class="d-gold" x="74" y="162" width="192" height="18" rx="4"/><text x="84" y="175" class="mono">id</text><text x="260" y="175" text-anchor="end" class="s">PK</text><text x="84" y="193" class="mono">name</text><text x="84" y="211" class="mono">joined</text><rect class="d-sage" x="74" y="216" width="192" height="18" rx="4"/><text x="84" y="229" class="mono">plot_id</text><text x="260" y="229" text-anchor="end" class="s">FK</text><rect class="d-ink" x="70" y="132" width="200" height="108" rx="8" stroke-width="2"/><text x="170" y="261" text-anchor="middle" class="s">each harvest’s member_id points at a member</text><rect class="d-lup" x="70" y="272" width="200" height="26" rx="8" stroke-width="2"/><text x="170" y="290" text-anchor="middle">harvests</text><rect class="d-gold" x="74" y="302" width="192" height="18" rx="4"/><text x="84" y="315" class="mono">id</text><text x="260" y="315" text-anchor="end" class="s">PK</text><rect class="d-sage" x="74" y="320" width="192" height="18" rx="4"/><text x="84" y="333" class="mono">member_id</text><text x="260" y="333" text-anchor="end" class="s">FK</text><text x="84" y="351" class="mono">crop</text><text x="84" y="369" class="mono">kg</text><text x="84" y="387" class="mono">month</text><rect class="d-ink" x="70" y="272" width="200" height="126" rx="8" stroke-width="2"/><path class="d-ink" d="M270,225 H312 V51 H276" stroke-width="2" marker-end="url(#t3u9k)"/><path class="d-ink" d="M70,329 H28 V171 H64" stroke-width="2" marker-end="url(#t3u9k)"/></svg>', alt:"Three tables stacked. plots has id (primary key), bed and size_m2. members has id (primary key), name, joined and plot_id (foreign key), with an arrow from plot_id to plots.id. harvests has id (primary key), member_id (foreign key), crop, kg and month, with an arrow from member_id to members.id.", cap:"The garden database’s schema. PK marks each primary key; FK marks a foreign key, and the arrows show which primary key it points at."},
      "Links come in a few shapes, called relationships:",
      {table:[["Relationship","Garden example","How it’s stored"],["One-to-many","One member, many harvests","The “many” table (harvests) holds the “one” table’s key (member_id)"],["Many-to-many","Members and work days: each member comes to many, each day has many members","A third, linking table with both keys (Lesson 5)"],["One-to-one","A member and a private emergency-contact record","Either table holds the other’s key; rare in practice"]]}
    ]},
    {h:"Meet the garden database", body:[
      "Every example in this unit, and every SQL challenge in the app’s **Data Lab**, uses the same small, invented database. Here it is in full. (In the Data Lab, each SQL challenge lists the three tables; tap a table’s name to look inside.)",
      {table:[["id","name","joined","plot_id"],["1","Ama","2021","1"],["2","Bilal","2024","2"],["3","Chen","2019","3"],["4","Dana","2023","4"],["5","Eitan","2020","NULL"],["6","Fatou","2025","5"]]},
      {table:[["id","bed","size_m2"],["1","North","6"],["2","North","4"],["3","South","8"],["4","South","5"],["5","East","10"]]},
      {ex:"id member_id crop     kg   month\n 1     1     beans    2.5  2026-06\n 2     1     tomatoes 4    2026-07\n 3     2     beans    1    2026-06\n 4     3     kale     3.5  2026-05\n 5     3     tomatoes 8    2026-08\n 6     4     beans    3    2026-07\n 7     5     squash   10.5 2026-08\n 8     2     kale     1.5  2026-06\n 9     6     tomatoes 5.5  2026-07\n10     4     squash   6.5  2026-09", mono:true, label:"The harvests table (10 rows)"},
      "The first table is `members`, the second `plots`. Read a row through its keys: harvest 7 has `member_id` 5, so it belongs to Eitan. Eitan’s `plot_id` is NULL: he has no plot yet (perhaps he helps on a friend’s plot). That one missing value will matter in Lessons 3 and 4.",
      "Different questions need different tables:",
      {list:[
        "“Who joined first?” needs only `members`.",
        "“How many kilograms of squash?” needs only `harvests`.",
        "“Who grew the most tomatoes?” needs `harvests` for the weights and `members` for the names: a **join** (Lesson 4).",
        "“Which bed produced the most per square metre?” needs all three."
      ]}
    ]},
    {h:"Why not just a spreadsheet?", body:[
      "Spreadsheets are wonderful, and “Spreadsheets from scratch” (Digital Foundations, Unit 9) showed how far they go. A database is a different tool with different strengths:",
      {table:[["Aspect","Spreadsheet","Database"],["Rules","Mostly in people’s heads, plus optional validation","In the schema: types, keys and required columns, checked on every row"],["Size","Excel stops at 1,048,576 rows per sheet","Millions of rows are routine; one SQLite file can grow to terabytes"],["Many users","Fine for a few people editing a shared sheet","Server databases serve many people and programs writing at once"],["Questions","Formulas mixed in with the data","Queries kept as text, separate from the data, and re-run any time"],["Seeing the data","Everything on screen, easy to edit by hand","You look through queries or a browsing tool"]]},
      "A spreadsheet is still the right tool for a small table that one person keeps, a quick calculation or a chart. Many projects use both: the records live in a database, and a query’s result goes into a spreadsheet for a chart or a report. [[csv|CSV]] files are the usual bridge.",
      {tip:"A common misconception is that a database is “just a big spreadsheet”. Its real differences are the structure (several linked tables), the rules it enforces, and the query language that asks questions without touching the data."}
    ]},
    {h:"Database systems, and where SQLite fits", body:[
      "The software that stores a database and answers queries is a [[dbms|database management system]]. Almost all relational systems speak [[sql|SQL]] (Structured Query Language; people say “S-Q-L” or “sequel”). The core of SQL is the same everywhere, so what you learn here carries over.",
      "Most systems are **client–server**: a server program runs on a computer, often in a data centre, and many users and programs connect to it over a network. PostgreSQL, MySQL and its offshoot MariaDB, Microsoft SQL Server and Oracle Database work this way.",
      "[[sqlite|SQLite]] is different. There is no server: it’s a small library built into the app that uses it, and the whole database is one ordinary file you can copy, email or back up. That’s why it fits inside phones, browsers and desktop apps, and SQLite’s documentation lists it in every Android device, iPhone, Mac and Windows 10 machine, and in the Firefox, Chrome and Safari browsers.",
      "SQLite has limits. Its documentation says it allows many readers at once but only one writer at a time. A busy website where many people change data at the same moment needs a client–server system.",
      "The Data Lab runs SQLite inside your browser using **sql.js**, a version of SQLite compiled to [[webassembly|WebAssembly]]. Your queries run on your device and nothing is sent anywhere.",
      {tip:"You may also hear of “NoSQL” databases. They store data in other shapes: as JSON-like documents (see [[json]]), as key–value pairs or as graphs. They suit some jobs well, but tables and SQL remain the common language of data work, and they’re what this unit teaches."}
    ]}
   ],
   try:[
    {id:"t3u9-l1-x1", type:"sort", q:"In the garden database, is each of these a whole table, one row, or one column?", buckets:["A table","A row","A column"], items:[
      {t:"All the harvests", b:0, why:"Every harvest together is the `harvests` table."},
      {t:"Chen’s 8 kg of tomatoes in August", b:1, why:"One harvest is one row (harvest 5)."},
      {t:"kg: the weight of every harvest", b:2, why:"One property, across every row, is a column."},
      {t:"The list of plots, with their beds and sizes", b:0, why:"That’s the whole `plots` table."},
      {t:"Member 5: Eitan, joined 2020, no plot", b:1, why:"One member, with all their values, is one row of `members`."},
      {t:"joined: the year each member joined", b:2, why:"One property of every member is a column."}
    ]},
    {id:"t3u9-l1-x2", type:"mcq", q:"Which column makes the best primary key for the members table?", options:[
      {t:"`id`", ok:true, why:"Right. A plain number that’s unique for each member and never changes is the ideal key."},
      {t:"`name`", why:"Names aren’t unique (two members could both be called Ana) and people sometimes change them, which would break every link to them."},
      {t:"`joined`", why:"Several members can join in the same year, so it doesn’t identify one row."},
      {t:"`plot_id`", why:"It’s a foreign key pointing at plots. It can be empty (Eitan has none) and could repeat if two members shared a plot."}
    ]},
    {id:"t3u9-l1-x3", type:"match", q:"Match each column to its role.", pairs:[
      ["members.id","The primary key of members","It uniquely identifies each member."],
      ["harvests.member_id","A foreign key pointing at members","It holds a member’s id, linking each harvest to its grower."],
      ["members.plot_id","A foreign key pointing at plots","It holds a plot’s id, linking each member to their plot."],
      ["plots.size_m2","An ordinary measurement column","It describes the plot; nothing points at it and it isn’t a key."]
    ]},
    {id:"t3u9-l1-x4", type:"spot", q:"A member logs this harvest row in the old one-big-sheet design. Which values would cause trouble once the data moves into a database table?", ask:"would cause trouble", mono:true, parts:[
      {t:"Ama", flag:false, why:"A plain name is fine here (in the database it becomes a member_id)."}," | ",
      {t:"North", flag:false, why:"A single bed name: one value in one cell."}," | ",
      {t:"beans, kale", flag:true, why:"Two crops in one cell. You can’t count or total beans and kale separately. Log two rows, one per crop."}," | ",
      {t:"2.5 kg", flag:true, why:"The unit turns the number into text, so SUM and AVG can’t use it. Put the unit in the column name (kg) and store just 2.5."}," | ",
      {t:"2026-06", flag:false, why:"An ISO-style year and month: clear, and it sorts correctly as text."}
    ]},
    {id:"t3u9-l1-x5", type:"mcq", q:"Why can SQLite live inside a phone app, while PostgreSQL usually runs on a separate server?", options:[
      {t:"SQLite is a library inside the app that keeps the whole database in one file, with no server program", ok:true, why:"Right. Being “serverless” is exactly what lets it ship inside phones, browsers and desktop apps."},
      {t:"SQLite doesn’t use SQL, so it’s simpler", why:"It does use SQL; the name says so. You’ll write SQL for SQLite throughout this unit."},
      {t:"SQLite can only store text", why:"It stores whole numbers, decimals, text, binary data and NULL."},
      {t:"PostgreSQL is too expensive for phones", why:"PostgreSQL is free, open-source software. The difference is design: it runs as a server that many clients connect to."}
    ]},
    {id:"t3u9-l1-x6", type:"mcq", q:"Which of these jobs suit a database better than a single spreadsheet? Choose all that apply.", options:[
      {t:"A clinic’s appointments, used by several staff and an online booking page at the same time", ok:true, why:"Many people and programs writing at once, with rules that must hold (no double bookings): a database’s strength."},
      {t:"Ten years of sensor readings: about 30 million rows", ok:true, why:"Far beyond a spreadsheet’s row limit (Excel stops at 1,048,576 rows per sheet)."},
      {t:"A club’s members, payments and events, which all refer to each other", ok:true, why:"Several linked kinds of thing is exactly what related tables and keys are for."},
      {t:"A one-off list of 20 party guests", why:"Small, simple and kept by one person: a spreadsheet (or a piece of paper) is the better tool."},
      {t:"A quick chart of this month’s spending", why:"A spreadsheet does this in a minute. A database would be more work for no gain."}
    ]}
   ],
   apply:{intro:"No installs needed: the Data Lab works in any current browser, on a phone or a computer.", tasks:[
     {t:"Look inside the garden database", how:["Open **Labs → Data Lab** and choose the first SQL challenge, **SELECT two columns**.","Under the task, tap **members**, **plots** and **harvests** to see each table’s rows.","For each table, note its primary key, and any column that points at another table (a foreign key).","Find the row where `plot_id` shows NULL. What do you think it means for that member?"]},
     {t:"Design linked tables for something you know", how:["Pick a real situation: a book club’s loans, a family’s recipes and their ingredients, a sports team’s matches, a small shop’s orders.","On paper or in a notes app, write each table’s name and its columns. Give every table an `id` column.","Draw an arrow from each foreign key to the primary key it points at.","Check: is any fact (a name, an address, a price) written in more than one place? If so, move it into a table of its own and point at it."], write:"My tables, their columns and their keys…"}
   ], proof:"Your notes on the garden database (primary keys: members.id, plots.id, harvests.id; foreign keys: members.plot_id → plots.id and harvests.member_id → members.id; Eitan has no plot yet), and a sketch of your own linked tables with their keys."},
   read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “What is a relational database?”", note:"Tables, data types (including SQLite’s short list), primary and foreign keys, and NULL."}]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u9-l2", title:"Asking questions: SELECT, WHERE, ORDER BY, LIMIT", minutes:55,
   hook:{q:"You run `SELECT crop, kg FROM harvests LIMIT 3;` on the garden database. Which three harvests are you guaranteed to get?", options:["The three heaviest","The three lightest","The first three that were typed in","None in particular: without ORDER BY the order isn’t guaranteed"], answer:3, reveal:"**None in particular.** `LIMIT 3` keeps the first three rows of the result, but without `ORDER BY` a database may return rows in any order. SQLite’s documentation says the order is “undefined”. On this small table you’ll probably see the first three rows typed in, but nothing promises that. This lesson builds queries piece by piece: choose columns, filter rows, sort, then cut to the top few."},
   goals:[
     "Write SELECT … FROM … to choose columns, and read the result table",
     "Filter rows with WHERE, using comparisons, AND, OR, IN, BETWEEN and LIKE",
     "Quote text correctly and recognise the errors that wrong quotes cause",
     "Sort with ORDER BY (ASC, DESC, several columns) and know where NULLs go",
     "Use LIMIT for “top n” questions, and know that other databases write it differently"
   ],
   learn:[
    {h:"Your first query", body:[
      {lead:"A query is a question written in SQL. The simplest one names the columns you want and the table they live in."},
      {code:"SELECT crop, kg FROM harvests;", lang:"sql"},
      "`SELECT` lists the columns, separated by commas. `FROM` names the table. The semicolon ends the statement. The answer is a new table, the **result**, with one row per harvest:",
      {table:[["crop","kg"],["beans","2.5"],["tomatoes","4"],["beans","1"],["kale","3.5"],["tomatoes","8"],["beans","3"],["squash","10.5"],["kale","1.5"],["tomatoes","5.5"],["squash","6.5"]]},
      "A [[select-query|SELECT query]] only reads. It never changes the stored data, so you can experiment freely. `SELECT *` means “every column”, handy for a first look at a table.",
      {list:[
        "SQL keywords aren’t case-sensitive: `select` works as well as `SELECT`. Writing keywords in capitals and names in lower case is a common habit that makes queries easier to read.",
        "SQLite also ignores case in table and column names: `select Crop, KG from Harvests` gave the same result in our test.",
        "Spaces and line breaks don’t matter, so long queries are usually written one clause per line.",
        "Two hyphens start a comment: `-- everything after this on the line is ignored`."
      ]},
      {warn:"Leave out a comma and SQL may not complain. `SELECT crop kg FROM harvests` runs, but returns **one** column called kg, full of crop names: SQL read `kg` as a new name for `crop`. A comma just before FROM (`SELECT crop, kg, FROM`) gives “syntax error” instead."},
      {lab:"dl-sql-select", t:"Practise: SELECT two columns"}
    ]},
    {h:"The order you write, and the order it runs", body:[
      "A query has clauses that must be written in a fixed order. The database doesn’t carry them out in that order, though. Knowing the real order explains many rules in this unit.",
      {fig:'<svg viewBox="0 0 340 262"><defs><marker id="t3u9o" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="80" y="20" text-anchor="middle">You write</text><text x="260" y="20" text-anchor="middle">It runs</text><rect class="d-panel" x="10" y="32" width="140" height="34" rx="8" stroke-width="1.5"/><text x="20" y="54" class="mono">SELECT crop, kg</text><rect class="d-panel" x="10" y="78" width="140" height="34" rx="8" stroke-width="1.5"/><text x="20" y="100" class="mono">FROM harvests</text><rect class="d-panel" x="10" y="124" width="140" height="34" rx="8" stroke-width="1.5"/><text x="20" y="146" class="mono">WHERE kg > 3</text><rect class="d-panel" x="10" y="170" width="140" height="34" rx="8" stroke-width="1.5"/><text x="20" y="192" class="mono">ORDER BY kg</text><rect class="d-panel" x="10" y="216" width="140" height="34" rx="8" stroke-width="1.5"/><text x="20" y="238" class="mono">LIMIT 3</text><rect class="d-lup" x="190" y="32" width="140" height="34" rx="8" stroke-width="1.5"/><text x="200" y="54">1 FROM: table</text><rect class="d-lup" x="190" y="78" width="140" height="34" rx="8" stroke-width="1.5"/><text x="200" y="100">2 WHERE: rows</text><rect class="d-gold" x="190" y="124" width="140" height="34" rx="8" stroke-width="1.5"/><text x="200" y="146">3 SELECT: columns</text><rect class="d-sage" x="190" y="170" width="140" height="34" rx="8" stroke-width="1.5"/><text x="200" y="192">4 ORDER BY: sort</text><rect class="d-sage" x="190" y="216" width="140" height="34" rx="8" stroke-width="1.5"/><text x="200" y="238">5 LIMIT: cut</text><path class="d-soft" d="M150,49 L190,141" stroke-width="1.5" marker-end="url(#t3u9o)"/><path class="d-soft" d="M150,95 L190,49" stroke-width="1.5" marker-end="url(#t3u9o)"/><path class="d-soft" d="M150,141 L190,95" stroke-width="1.5" marker-end="url(#t3u9o)"/><path class="d-soft" d="M150,187 L190,187" stroke-width="1.5" marker-end="url(#t3u9o)"/><path class="d-soft" d="M150,233 L190,233" stroke-width="1.5" marker-end="url(#t3u9o)"/></svg>', alt:"Left column, the order you write: SELECT, FROM, WHERE, ORDER BY, LIMIT. Right column, the order it runs: 1 FROM picks the table, 2 WHERE keeps rows, 3 SELECT chooses columns, 4 ORDER BY sorts, 5 LIMIT cuts. Lines connect each written clause to its step; SELECT moves from first to third.", cap:"Written order on the left, logical order on the right. SELECT is written first but works third. LIMIT is written last and works last."},
      "So the database first finds the table, then throws away rows that fail the `WHERE` test, then keeps the chosen columns, then sorts, and only then cuts the result to the first few rows. That’s why `LIMIT` must come after `ORDER BY` (SQLite reports a syntax error if you swap them), and why a top-3 list only makes sense once the rows are sorted. Lesson 3 adds two more steps to this picture."
    ]},
    {h:"WHERE: keep only the rows you want", body:[
      "A [[where-clause|WHERE clause]] keeps only the rows for which a condition is true:",
      {code:"SELECT * FROM harvests WHERE crop = 'beans';", lang:"sql"},
      {ex:"id member_id crop  kg  month\n 1     1     beans 2.5 2026-06\n 3     2     beans 1   2026-06\n 6     4     beans 3   2026-07", mono:true, label:"Result (3 rows)"},
      {table:[["Operator","Means","Example"],["=","equal to","crop = 'kale'"],["!= or <>","not equal to","crop <> 'beans'"],["<, >","less than, more than","kg > 3"],["<=, >=","at most, at least","joined >= 2023"]]},
      "Numbers are written as they are. **Text goes in single quotes**: `'beans'`. Without quotes, SQL thinks `beans` is a column name, and SQLite answers “no such column: beans”.",
      "In SQLite, `=` compares text exactly, capitals included. `WHERE crop = 'Beans'` finds nothing, because the data says `beans`. PostgreSQL behaves the same way. Some other systems, such as MySQL and SQL Server with their usual settings, ignore case when comparing text; it depends on a setting called the collation. Unit 2’s advice to keep categories consistently spelt pays off here.",
      {lab:"dl-sql-where", t:"Practise: WHERE, only the beans"}
    ]},
    {h:"Combining conditions", body:[
      "`AND` needs both conditions to be true; `OR` needs at least one; `NOT` flips a condition.",
      {code:"SELECT crop, kg, month\nFROM harvests\nWHERE crop = 'tomatoes' AND kg >= 5;", lang:"sql"},
      {table:[["crop","kg","month"],["tomatoes","8","2026-08"],["tomatoes","5.5","2026-07"]]},
      "Watch out when you mix them: `AND` is worked out before `OR`, just as multiplication comes before addition. Asking for “beans or kale, over 2 kg” like this goes wrong:",
      {code:"SELECT crop, kg FROM harvests\nWHERE crop = 'beans' OR crop = 'kale' AND kg > 2;", lang:"sql", cap:"Read as: beans (any weight), or kale over 2 kg. It returns 4 rows, including the 1 kg beans."},
      "Brackets fix it: `WHERE (crop = 'beans' OR crop = 'kale') AND kg > 2` returns the 3 rows you meant (beans 2.5, kale 3.5, beans 3). Three shortcuts help:",
      {list:[
        "`crop IN ('beans', 'kale')` means “crop is any value in the list”, the same as the bracketed OR.",
        "`kg BETWEEN 3 AND 6.5` includes **both** ends: it found 5 harvests (4, 3.5, 3, 5.5 and 6.5 kg).",
        "`LIKE` matches patterns: `%` stands for any run of characters and `_` for exactly one. `name LIKE '%a'` found Ama and Dana; `crop LIKE 'to%'` finds tomatoes."
      ]},
      "Text in ISO form (`2026-08`) sorts in date order, so `month >= '2026-08'` finds the August and September harvests. This is one more reason for Unit 2’s ISO dates.",
      {warn:"In SQLite, `LIKE` ignores the difference between capital and small letters, but only for the English alphabet’s 26 letters: `'a' LIKE 'A'` is true, `'æ' LIKE 'Æ'` is false. PostgreSQL’s `LIKE` is case-sensitive, and it offers `ILIKE` when you want case ignored. We checked both."}
    ]},
    {h:"Quotes: small marks, big errors", body:[
      "Standard SQL uses two kinds of quote, for two different jobs:",
      {list:[
        "**'Single quotes'** mark text values: `'beans'`.",
        "**\"Double quotes\"** mark names of tables or columns, needed only for awkward names (with spaces, say): `\"plot size\"`."
      ]},
      "SQLite bends this rule. If text in double quotes doesn’t match any column, SQLite treats it as text, so `WHERE crop = \"beans\"` works in SQLite and in the Data Lab. PostgreSQL gave the error “column \"beans\" does not exist” for the same query. Worse, a misspelt column in double quotes doesn’t fail in SQLite: `SELECT \"crops\" FROM harvests` returned the word crops on every row instead of an error. SQLite’s own documentation calls this a “misfeature”, and its command-line program has switched it off by default since version 3.41.0 (2023). Use single quotes for text, always.",
      "Two more traps:",
      {list:[
        "**Curly quotes.** Word processors and some phone keyboards turn `'` into ‘ or ’. SQL doesn’t recognise them: SQLite read `‘beans’` as a column name. If your keyboard does this, use the Data Lab’s `'` button, or turn off “smart punctuation”.",
        "**Apostrophes inside text.** To write O’Neill as SQL text, double the apostrophe: `'O''Neill'`. An unmatched quote gives “unrecognized token”."
      ]}
    ]},
    {h:"ORDER BY: sorting the result", body:[
      {code:"SELECT name, joined\nFROM members\nORDER BY joined DESC;", lang:"sql"},
      {table:[["name","joined"],["Fatou","2025"],["Bilal","2024"],["Dana","2023"],["Ama","2021"],["Eitan","2020"],["Chen","2019"]]},
      "`ORDER BY` sorts by one or more columns. `ASC` (smallest first, A to Z) is the default; `DESC` reverses it. With several columns, later ones break ties: `ORDER BY crop, kg DESC` puts the crops in A–Z order and, within each crop, the heaviest harvest first.",
      {key:"Without ORDER BY, row order is not part of the answer. SQLite’s documentation says it’s “undefined”. If order matters, sort."},
      "Where do missing values go? SQLite treats NULL as smaller than any value, so `ORDER BY plot_id` put Eitan (NULL) first. PostgreSQL does the opposite and puts NULLs last in ascending order; we checked. Both accept `NULLS FIRST` or `NULLS LAST` when you want to choose.",
      {lab:"dl-sql-order", t:"Practise: ORDER BY, newest members first"}
    ]},
    {h:"LIMIT: the top few, and two extras", body:[
      {code:"SELECT crop, kg\nFROM harvests\nORDER BY kg DESC\nLIMIT 3;", lang:"sql"},
      {table:[["crop","kg"],["squash","10.5"],["tomatoes","8"],["squash","6.5"]]},
      "`LIMIT 3` keeps the first three rows **of the sorted result**. `LIMIT 3 OFFSET 3` skips three and shows the next three (tomatoes 5.5, tomatoes 4, kale 3.5): the way websites show “page 2”. If two rows tie at the cut-off, which one makes the list is undefined, so add a second sort column when ties are possible.",
      "This is a good moment to meet SQL **dialects**. `LIMIT` works in SQLite, PostgreSQL and MySQL. SQL Server writes `SELECT TOP 3 …`, and the SQL standard’s form is `FETCH FIRST 3 ROWS ONLY`, which PostgreSQL accepts but SQLite doesn’t. Lesson 5 collects these differences.",
      "Two small extras that you’ll use constantly:",
      {list:[
        "`SELECT DISTINCT crop FROM harvests` removes repeated rows: it lists each crop once (beans, kale, squash, tomatoes).",
        "`AS` gives a result column a name, and SELECT can calculate: `SELECT crop, kg * 1000 AS grams FROM harvests WHERE crop = 'kale'` gives kale 3500 and kale 1500."
      ]},
      {lab:"dl-sql-limit", t:"Practise: the three biggest harvests"}
    ]}
   ],
   try:[
    {id:"t3u9-l2-x1", type:"mcq", q:"What does `SELECT crop kg FROM harvests;` return? (Notice the missing comma.)", options:[
      {t:"One column, named kg, containing the crop names", ok:true, why:"Right. Without the comma, SQL reads `kg` as a new name (an alias) for `crop`. It runs without an error, which is why it’s a sneaky mistake."},
      {t:"Two columns, crop and kg", why:"That needs a comma between them: `SELECT crop, kg`."},
      {t:"A syntax error", why:"It would be easier if it did. A name after a column is legal SQL: it renames the column."},
      {t:"One column of weights, named crop", why:"The first name is the column that’s read (crop); the second is only its new label."}
    ]},
    {id:"t3u9-l2-x2", type:"number", q:"How many rows does this query return on the garden database? `SELECT * FROM harvests WHERE kg >= 3 AND kg <= 6.5;` (The weights are 2.5, 4, 1, 3.5, 8, 3, 10.5, 1.5, 5.5 and 6.5.)", answer:5, tol:0, unit:"rows", why:"Keep weights from 3 up to 6.5, including both ends: 4, 3.5, 3, 5.5 and 6.5. That’s 5 rows. `kg BETWEEN 3 AND 6.5` means exactly the same.", wrongs:[
      {v:3, tol:0, why:"That’s the count with `>` and `<`, which leaves out the 3 kg and 6.5 kg harvests. `>=` and `<=` include the end values."},
      {v:7, tol:0, why:"That counts every harvest of at least 3 kg. The `AND kg <= 6.5` part also removes the 8 kg and 10.5 kg harvests."},
      {v:10, tol:0, why:"That’s every harvest. WHERE removes the rows that fail the test."}
    ]},
    {id:"t3u9-l2-x3", type:"spot", q:"This query should list members on plot 3, newest first, but it fails. Tap the mistakes.", ask:"is a mistake", mono:true, parts:[
      {t:"SELECT name,", flag:false, why:"Fine: the first column, followed by a comma before the next one."}," ",
      {t:"joined,", flag:true, why:"A comma right before FROM. SQLite reports a syntax error near FROM. Remove the last comma."}," FROM ",
      {t:"member", flag:true, why:"The table is called `members`. SQLite would say “no such table: member”."}," WHERE ",
      {t:"plot_id = 3", flag:false, why:"Fine: a number needs no quotes."}," ",
      {t:"ORDER BY joined DESC", flag:false, why:"Fine: newest (largest year) first."},";"
    ]},
    {id:"t3u9-l2-x4", type:"order", q:"Put these clauses in the order you must **write** them in a query.", items:[
      {t:"SELECT crop, kg", why:"A query starts with SELECT and the columns."},
      {t:"FROM harvests", why:"Then the table."},
      {t:"WHERE month = '2026-07'", why:"Then the row filter."},
      {t:"ORDER BY kg DESC", why:"Then the sorting."},
      {t:"LIMIT 2", why:"LIMIT is written last (and also runs last)."}
    ]},
    {id:"t3u9-l2-x5", type:"mcq", q:"Fatou wanted beans and kale harvests over 2 kg. Her query `WHERE crop = 'beans' OR crop = 'kale' AND kg > 2` returned 4 rows, including a 1 kg harvest of beans. Why?", options:[
      {t:"AND is worked out before OR, so it means “beans of any weight, or kale over 2 kg”", ok:true, why:"Right. Brackets fix it: `(crop = 'beans' OR crop = 'kale') AND kg > 2`, or use `crop IN ('beans', 'kale') AND kg > 2`."},
      {t:"OR is worked out first, so the weight rule applies to beans only", why:"It’s the other way round: AND binds more tightly than OR, so the weight test sticks to the kale part."},
      {t:"SQLite ignores the second condition when there are three", why:"SQLite applies every condition; the issue is how they group."},
      {t:"The text needs double quotes", why:"Single quotes are right for text. Quotes have nothing to do with the extra row."}
    ]},
    {id:"t3u9-l2-x6", type:"match", q:"Match each condition to what it keeps.", pairs:[
      ["crop <> 'beans'","Every crop except beans","`<>` (or `!=`) means “not equal to”. On the garden data it keeps 7 rows."],
      ["crop LIKE 'to%'","Crops whose name starts with “to”","`%` stands for any run of characters after “to”, so it matches tomatoes."],
      ["kg BETWEEN 3 AND 5","Weights from 3 to 5, both ends included","BETWEEN is inclusive at both ends."],
      ["crop IN ('kale', 'squash')","Kale or squash","IN checks whether the value is any of the listed ones."]
    ]},
    {id:"t3u9-l2-x7", type:"mcq", q:"In SQLite, `SELECT name, plot_id FROM members ORDER BY plot_id;` puts Eitan (whose plot_id is NULL) where?", options:[
      {t:"First", ok:true, why:"Right. SQLite treats NULL as smaller than every value, so NULLs come first in ascending order. PostgreSQL puts them last; write `NULLS LAST` or `NULLS FIRST` to choose."},
      {t:"Last", why:"That’s PostgreSQL’s default. SQLite sorts NULL as the smallest value, so it comes first in ascending order."},
      {t:"He’s left out of the result", why:"ORDER BY only sorts; it never removes rows. All six members appear."},
      {t:"The query fails because of the NULL", why:"Sorting a column with NULLs is fine; the NULLs just have to go somewhere."}
    ]}
   ],
   apply:{intro:"All of this works in the Data Lab on a phone or a computer. Press ▶ **Run** to see any query’s result before you press **Check**. The result shows the first 50 rows with a row count underneath; a query that matches nothing shows its column headings and “0 rows.”; a wide result scrolls sideways inside its box. Every Run starts from a fresh copy of the garden database, so nothing you try can break it. The row of symbol buttons under the editor saves hunting for `*`, `'` and `%` on a phone keyboard.", tasks:[
     {t:"Solve the first four SQL challenges", how:["Open **Labs → Data Lab** and do **SELECT two columns**, **WHERE: only the beans**, **ORDER BY: newest members first** and **The three biggest harvests**, in that order.","Before pressing Check, predict the result in your head, then press ▶ Run and compare.","Read the explanation that appears when you pass. If you’re stuck, the Hint button gives a nudge before the full answer."]},
     {t:"Ask your own questions", how:["In any SQL challenge’s editor you can type any query and press ▶ Run (Check only marks the challenge’s own task).","Write a query for each: (a) members who joined before 2022, oldest first; (b) the crop and kg of every June harvest (`month = '2026-06'`); (c) members who joined in 2023 or later, newest first.","Then break one on purpose: remove a quote, misspell a column, or put LIMIT before ORDER BY. Read what “SQLite says”, and fix it."], write:"My three queries and their results…"}
   ], proof:"Four solved challenges, and your own queries with results: (a) Chen 2019, Eitan 2020, Ama 2021; (b) beans 2.5, beans 1, kale 1.5; (c) Fatou 2025, Bilal 2024, Dana 2023."},
   read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “The Select Statement” (sections “Simple SQL queries using the Select statement”, “The WHERE clause”, “Using more complex logical expressions in the WHERE clause” and “Sorting results”)"},{book:"swc", where:"Databases and SQL → “Selecting Data”, “Sorting and Removing Duplicates” and “Filtering”", note:"Software Carpentry’s SQL lesson, at swcarpentry.github.io/sql-novice-survey."}]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u9-l3", title:"Counting and summarising: GROUP BY, HAVING and NULL", minutes:55,
   hook:{q:"The garden has six members. One of them, Eitan, has no plot, so his plot_id is NULL. What does `SELECT COUNT(plot_id) FROM members;` return?", options:["6","5","1","An error, because of the NULL"], answer:1, reveal:"**5.** `COUNT(*)` counts rows (6), but `COUNT(plot_id)` counts only the rows where plot_id has a value, and NULL means “no value”. Missing values quietly change counts and averages unless you know the rules. This lesson covers summaries (count, total, average), summaries per group, filtering groups, and how NULL behaves."},
   goals:[
     "Summarise a whole table with COUNT, SUM, AVG, MIN and MAX",
     "Use GROUP BY to get one summary row per group, following the SELECT rule",
     "Choose WHERE or HAVING correctly, and read the “misuse of aggregate” error",
     "Explain what NULL means, test for it with IS NULL, and avoid the != trap",
     "Predict how NULLs change COUNT, AVG and SUM"
   ],
   learn:[
    {h:"Aggregates: many rows in, one row out", body:[
      {lead:"So far every query returned one result row per stored row. Aggregate functions do the opposite: they squeeze many rows into one answer."},
      {code:"SELECT COUNT(*), SUM(kg), AVG(kg), MIN(kg), MAX(kg)\nFROM harvests;", lang:"sql"},
      {ex:"COUNT(*)  SUM(kg)  AVG(kg)  MIN(kg)  MAX(kg)\n10        46       4.6      1        10.5", mono:true, label:"Result (1 row)"},
      "An [[aggregate-function]] takes a whole column and returns one value. `COUNT(*)` counts rows; `SUM` adds; `AVG` gives the mean; `MIN` and `MAX` give the smallest and largest. Ten harvests weighed 46 kg in total, 4.6 kg on average.",
      "Add `AS` to give results readable names, and `ROUND(value, digits)` to tidy decimals: `SELECT COUNT(*) AS harvests, ROUND(AVG(kg), 2) AS avg_kg FROM harvests;`",
      "Aggregates work on whatever is left after `WHERE`. How many harvests weighed more than 3 kg?",
      {code:"SELECT COUNT(*) FROM harvests WHERE kg > 3;", lang:"sql", cap:"Result: 6. With `kg >= 3` it would be 7, because one harvest of beans weighed exactly 3 kg."},
      {lab:"dl-sql-count", t:"Practise: COUNT, how many big harvests?"}
    ]},
    {h:"GROUP BY: one answer per group", body:[
      "Usually you want a summary **per something**: per crop, per bed, per month. [[group-by-sql|GROUP BY]] splits the rows into groups that share a value, and each aggregate then runs once per group.",
      {fig:'<svg viewBox="0 0 340 404"><defs><marker id="t3u9g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><text x="12" y="20" class="s">1. ten rows from harvests</text><rect class="d-sage" x="12" y="30" width="150" height="22" rx="5"/><text x="22" y="46">beans 2.5</text><rect class="d-rose" x="178" y="30" width="150" height="22" rx="5"/><text x="188" y="46">tomatoes 4</text><rect class="d-sage" x="12" y="56" width="150" height="22" rx="5"/><text x="22" y="72">beans 1</text><rect class="d-lup" x="178" y="56" width="150" height="22" rx="5"/><text x="188" y="72">kale 3.5</text><rect class="d-rose" x="12" y="82" width="150" height="22" rx="5"/><text x="22" y="98">tomatoes 8</text><rect class="d-sage" x="178" y="82" width="150" height="22" rx="5"/><text x="188" y="98">beans 3</text><rect class="d-gold" x="12" y="108" width="150" height="22" rx="5"/><text x="22" y="124">squash 10.5</text><rect class="d-lup" x="178" y="108" width="150" height="22" rx="5"/><text x="188" y="124">kale 1.5</text><rect class="d-rose" x="12" y="134" width="150" height="22" rx="5"/><text x="22" y="150">tomatoes 5.5</text><rect class="d-gold" x="178" y="134" width="150" height="22" rx="5"/><text x="188" y="150">squash 6.5</text><path class="d-ink" d="M170,162 V184" stroke-width="2" marker-end="url(#t3u9g)"/><text x="12" y="202" class="s">2. GROUP BY crop: one pile per crop</text><rect class="d-sage" x="12" y="210" width="154" height="40" rx="6" stroke-width="1.5"/><text x="22" y="226">beans</text><text x="22" y="243" class="s">2.5 · 1 · 3</text><rect class="d-lup" x="174" y="210" width="154" height="40" rx="6" stroke-width="1.5"/><text x="184" y="226">kale</text><text x="184" y="243" class="s">3.5 · 1.5</text><rect class="d-gold" x="12" y="256" width="154" height="40" rx="6" stroke-width="1.5"/><text x="22" y="272">squash</text><text x="22" y="289" class="s">10.5 · 6.5</text><rect class="d-rose" x="174" y="256" width="154" height="40" rx="6" stroke-width="1.5"/><text x="184" y="272">tomatoes</text><text x="184" y="289" class="s">4 · 8 · 5.5</text><path class="d-ink" d="M170,302 V324" stroke-width="2" marker-end="url(#t3u9g)"/><text x="12" y="340" class="s">3. SUM(kg) for each pile: one row each</text><rect class="d-sage" x="12" y="348" width="154" height="24" rx="5" stroke-width="2"/><text x="22" y="365">beans 6.5</text><rect class="d-lup" x="174" y="348" width="154" height="24" rx="5" stroke-width="2"/><text x="184" y="365">kale 5</text><rect class="d-gold" x="12" y="376" width="154" height="24" rx="5" stroke-width="2"/><text x="22" y="393">squash 17</text><rect class="d-rose" x="174" y="376" width="154" height="24" rx="5" stroke-width="2"/><text x="184" y="393">tomatoes 17.5</text></svg>', alt:"Ten harvest rows, coloured by crop, are sorted into four piles (beans 2.5, 1 and 3; kale 3.5 and 1.5; squash 10.5 and 6.5; tomatoes 4, 8 and 5.5). SUM then turns each pile into one row: beans 6.5, kale 5, squash 17, tomatoes 17.5.", cap:"GROUP BY in three steps: split the rows into groups, run the aggregate on each group, combine the answers into a result with one row per group."},
      {code:"SELECT crop, COUNT(*) AS n, SUM(kg) AS total_kg\nFROM harvests\nGROUP BY crop\nORDER BY total_kg DESC;", lang:"sql"},
      {table:[["crop","n","total_kg"],["tomatoes","3","17.5"],["squash","2","17"],["beans","3","6.5"],["kale","2","5"]]},
      {key:"The GROUP BY rule: every column in SELECT must either be listed in GROUP BY or sit inside an aggregate. Each result row stands for a whole group, so a plain column needs one value per group."},
      "SQLite doesn’t enforce the rule. `SELECT crop, month, SUM(kg) FROM harvests GROUP BY crop` runs, and shows one month per crop picked from a single row: it showed beans with 2026-06, although beans were also harvested in July. PostgreSQL refuses the same query: “column \"harvests.month\" must appear in the GROUP BY clause or be used in an aggregate function”. Treat SQLite’s leniency as a bug in your query, not a feature.",
      "Our test happened to return the groups in A–Z order, but that’s a side effect. Add `ORDER BY` whenever order matters.",
      {ex:"Question: how many plots, and how much area, does each bed have?\n\nSELECT bed, COUNT(*) AS plots, SUM(size_m2) AS area\nFROM plots\nGROUP BY bed;\n\nbed    plots  area\nEast   1      10\nNorth  2      10\nSouth  2      13", mono:true, label:"Worked example"},
      "Read it group by group: the North bed holds plots 1 and 2 (6 + 4 = 10 m²), the South bed plots 3 and 4 (8 + 5 = 13 m²), and the East bed only plot 5 (10 m²). Notice that North and East have the same area but different numbers of plots. One query, two summaries, and each row of the result stands for a whole bed. You can group by more than one column, too: `GROUP BY crop, month` gives one row for each crop in each month.",
      {lab:"dl-sql-groupby", t:"Practise: GROUP BY, total per crop"}
    ]},
    {h:"WHERE or HAVING?", body:[
      "Which crops totalled more than 10 kg? The obvious attempt fails:",
      {code:"SELECT crop, SUM(kg) FROM harvests\nWHERE SUM(kg) > 10\nGROUP BY crop;", lang:"sql", cap:"SQLite says: misuse of aggregate: SUM(). PostgreSQL says: aggregate functions are not allowed in WHERE."},
      "Remember the running order. `WHERE` looks at single rows **before** the groups exist, so there’s no total for it to test. [[having-sql|HAVING]] is the filter that runs **after** grouping:",
      {code:"SELECT crop, SUM(kg)\nFROM harvests\nGROUP BY crop\nHAVING SUM(kg) > 10;", lang:"sql"},
      {table:[["crop","SUM(kg)"],["squash","17"],["tomatoes","17.5"]]},
      "The full running order is now: **FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT**. You can use both filters in one query. Which crops had at least two harvests heavier than 3 kg?",
      {code:"SELECT crop, COUNT(*) AS big\nFROM harvests\nWHERE kg > 3\nGROUP BY crop\nHAVING COUNT(*) >= 2;", lang:"sql", cap:"WHERE first drops the light harvests; GROUP BY piles up the rest; HAVING keeps piles of 2 or more. Result: squash 2, tomatoes 3."},
      {tip:"SQLite also lets HAVING use a name made in SELECT: `SUM(kg) AS total … HAVING total > 10` works, and the Data Carpentry lesson uses this style. PostgreSQL rejects it (“column \"total\" does not exist”): its documentation says output-column names can be used in ORDER BY and GROUP BY, but not in WHERE or HAVING. Repeating `SUM(kg)` works everywhere."},
      {lab:"dl-sql-having", t:"Practise: HAVING, crops over 10 kg"}
    ]},
    {h:"NULL: the value that isn’t there", body:[
      "[[null-sql|NULL]] is SQL’s marker for a missing value: unknown, not recorded, or not applicable. Eitan’s plot_id is NULL because he has no plot. NULL isn’t zero, isn’t empty text and isn’t the word “NULL”; it’s the absence of a value. (Unit 2 recommended NULL as the way to mark [[missing-value|missing values]] in data headed for SQL.)",
      "The key rule: **any comparison with NULL gives NULL, meaning “unknown”**, and `WHERE` keeps only rows where the condition is definitely true.",
      {ex:"SELECT NULL = NULL, NULL + 1, NULL IS NULL;\n\nNULL = NULL   NULL + 1   NULL IS NULL\nNULL          NULL       1", mono:true, label:"Tested in SQLite (1 means true)"},
      "So `WHERE plot_id = NULL` never finds anything: in the Data Lab it runs, but the result is just the column heading (name) and “0 rows.”. To test for missing values, use `IS NULL` and `IS NOT NULL`:",
      {code:"SELECT name FROM members WHERE plot_id IS NULL;", lang:"sql", cap:"Result: Eitan."},
      {warn:"NULL also hides from “not equal” tests. Chen has plot 3, so you might expect `WHERE plot_id != 3` to return the other five members. It returned four: Ama, Bilal, Dana and Fatou. Eitan’s NULL isn’t “not 3”; it’s unknown, so his row is dropped. If you mean “anyone not on plot 3”, write `WHERE plot_id != 3 OR plot_id IS NULL`. `NOT IN (1, 2)` drops NULLs in the same way."},
      {lab:"dl-sql-null", t:"Practise: NULL, members without a plot"}
    ]},
    {h:"NULL inside summaries", body:[
      {code:"SELECT COUNT(*), COUNT(plot_id), COUNT(DISTINCT plot_id)\nFROM members;", lang:"sql", cap:"Result: 6, 5, 5."},
      {list:[
        "`COUNT(*)` counts rows: 6 members.",
        "`COUNT(column)` counts only non-NULL values: 5 members have a plot.",
        "`AVG` skips NULLs too: the average of 4, 6 and NULL is 5, not 10 ÷ 3. Usually that’s what you want, but say so when you report it (“average of the 5 members with a plot”).",
        "`SUM` of no rows at all (say, `WHERE crop = 'peas'`) is NULL, not 0. SQLite has an extra function, `TOTAL()`, that gives 0 instead; it doesn’t exist in PostgreSQL."
      ]},
      "`COALESCE(a, b)` returns the first value that isn’t NULL, which is handy for display: `SELECT name, COALESCE(plot_id, 'none yet') FROM members` shows “none yet” for Eitan.",
      {warn:"Only real NULLs follow these rules. If a dataset marks missing values with `-999`, `0` or the text `NA`, SQL treats them as ordinary values, and `-999` gets averaged in. When you import data (Lesson 5), check how missing values arrive."}
    ]},
    {h:"Reading error messages", body:[
      "When a query fails, SQLite names the problem. The Data Lab shows the message after “SQLite says:”, with a plain-language note. The common ones:",
      {table:[["SQLite says","Usual cause"],["no such column: beans","Text without quotes, or a misspelt column name"],["no such table: harvest","A misspelt table name"],["near \"FROM\": syntax error","Something wrong just before FROM, often a stray comma"],["unrecognized token","A quote that was opened but never closed"],["misuse of aggregate: COUNT()","An aggregate in WHERE; use HAVING after GROUP BY"],["ambiguous column name: id","Two joined tables share a column name (Lesson 4)"]]},
      "Read the message, look just before the word it quotes, and change one thing at a time.",
      {lab:"dl-sql-fix", t:"Practise: fix the query"}
    ]}
   ],
   try:[
    {id:"t3u9-l3-x1", type:"number", q:"`SELECT COUNT(*) FROM harvests WHERE kg > 3;` What does it return on the garden database? (Weights: 2.5, 4, 1, 3.5, 8, 3, 10.5, 1.5, 5.5, 6.5.)", answer:6, tol:0, unit:"harvests", why:"More than 3 means 3 itself doesn’t count: 4, 3.5, 8, 10.5, 5.5 and 6.5. That’s 6.", wrongs:[
      {v:7, tol:0, why:"That includes the 3 kg beans. `>` means strictly more than; `>=` would give 7."},
      {v:10, tol:0, why:"That’s COUNT(*) of the whole table. WHERE removes the rows of 3 kg or less first."},
      {v:4, tol:0, why:"Check the list again: 4, 3.5, 8, 10.5, 5.5 and 6.5 are all over 3."}
    ]},
    {id:"t3u9-l3-x2", type:"mcq", q:"Which query gives each bed’s total plot area?", options:[
      {t:"`SELECT bed, SUM(size_m2) FROM plots GROUP BY bed;`", ok:true, why:"Right: one row per bed, with the sizes added up inside each. It gives East 10, North 10, South 13."},
      {t:"`SELECT bed, SUM(size_m2) FROM plots;`", why:"Without GROUP BY you get one row for the whole table (33). SQLite then shows one bed name taken from some row, which is misleading."},
      {t:"`SELECT bed, size_m2 FROM plots GROUP BY bed;`", why:"`size_m2` isn’t in GROUP BY or an aggregate, so SQLite shows one plot’s size per bed, not the total."},
      {t:"`SELECT bed, COUNT(size_m2) FROM plots GROUP BY bed;`", why:"COUNT counts plots per bed (1, 2, 2); it doesn’t add their areas."}
    ]},
    {id:"t3u9-l3-x3", type:"sort", q:"WHERE or HAVING? Which clause should hold each condition?", buckets:["WHERE (rows, before grouping)","HAVING (groups, after grouping)"], items:[
      {t:"Only harvests from July", b:0, why:"A test on each row’s month: WHERE month = '2026-07'."},
      {t:"Crops whose total is over 10 kg", b:1, why:"A total only exists after grouping: HAVING SUM(kg) > 10."},
      {t:"Beds with at least 2 plots", b:1, why:"Counting plots per bed needs the groups: HAVING COUNT(*) >= 2."},
      {t:"Harvests heavier than 3 kg", b:0, why:"A test on each row’s own kg value."},
      {t:"Members who joined after 2022", b:0, why:"Each row has its own joined year."},
      {t:"Crops harvested more than twice", b:1, why:"The number of harvests per crop is an aggregate: HAVING COUNT(*) > 2."}
    ]},
    {id:"t3u9-l3-x4", type:"mcq", q:"Priya runs `SELECT name FROM members WHERE plot_id != 3;` expecting five names (everyone except Chen). She gets four. Who is missing, and why?", options:[
      {t:"Eitan, because comparing his NULL plot_id with 3 gives “unknown”, and WHERE drops unknowns", ok:true, why:"Right. Add `OR plot_id IS NULL` if members without a plot should be included."},
      {t:"Chen, because he’s on plot 3", why:"Chen is meant to be left out; that’s why she expected five, not six. The surprise is the sixth member."},
      {t:"Fatou, because `!=` doesn’t work in SQLite", why:"`!=` works in SQLite (as does `<>`), and Fatou (plot 5) is in the result."},
      {t:"Nobody; the database has a bug", why:"It’s standard SQL behaviour: comparisons with NULL are neither true nor false."}
    ]},
    {id:"t3u9-l3-x5", type:"number", q:"What does `SELECT COUNT(plot_id) FROM members;` return? (Six members; Eitan’s plot_id is NULL.)", answer:5, tol:0, unit:"members", why:"COUNT(column) counts only the values that aren’t NULL: five members have a plot.", wrongs:[
      {v:6, tol:0, why:"That’s COUNT(*), which counts rows. COUNT(plot_id) skips the NULL."},
      {v:1, tol:0, why:"That would count the NULLs. To count members without a plot, use `COUNT(*) … WHERE plot_id IS NULL`."}
    ]},
    {id:"t3u9-l3-x6", type:"order", q:"Put the parts of a query in the order the database actually **carries them out**.", items:[
      {t:"FROM: find the table", why:"Everything starts with the rows of the table."},
      {t:"WHERE: drop rows that fail the test", why:"Single rows are filtered before any grouping."},
      {t:"GROUP BY: form the groups", why:"The remaining rows are piled into groups."},
      {t:"HAVING: drop groups that fail the test", why:"Now totals exist, so groups can be filtered."},
      {t:"SELECT: work out the result columns", why:"The columns and aggregates are calculated for what’s left."},
      {t:"ORDER BY: sort the result", why:"Sorting happens on the finished rows."},
      {t:"LIMIT: keep the first few", why:"Cutting comes last, so it acts on the sorted result."}
    ]},
    {id:"t3u9-l3-x7", type:"match", q:"Match each query on the harvests table to its result.", pairs:[
      ["SELECT COUNT(*) FROM harvests","10","There are ten harvest rows."],
      ["SELECT SUM(kg) FROM harvests","46","All the weights added up."],
      ["SELECT AVG(kg) FROM harvests","4.6","46 kg ÷ 10 harvests."],
      ["SELECT MAX(kg) FROM harvests","10.5","Eitan’s squash is the heaviest harvest."],
      ["SELECT MIN(kg) FROM harvests","1","Bilal’s 1 kg of beans is the lightest."]
    ]}
   ],
   apply:{intro:"Use the Data Lab on any device. Try each challenge before opening a hint.", tasks:[
     {t:"Solve the summary challenges", how:["In **Labs → Data Lab**, do **COUNT: how many big harvests?**, **GROUP BY: total per crop**, **HAVING: crops over 10 kg**, **NULL: members without a plot** and **Fix the query**.","For **Fix the query**, press ▶ Run first and read the error before you change anything.","After each pass, read the explanation: some mention a rule from this lesson that SQLite doesn’t enforce."]},
     {t:"Write two summaries of your own", how:["In any SQL challenge’s editor, write a query that counts harvests per month, in month order.","Write a second that shows each crop’s average harvest, rounded to 2 decimal places, highest first (use `ROUND(AVG(kg), 2)`).","Change the first query so it only shows months with more than two harvests. Which clause did you add?"], write:"My two queries, their results, and the clause I added…"}
   ], proof:"Five solved challenges, and your results: harvests per month 2026-05: 1, 2026-06: 3, 2026-07: 3, 2026-08: 2, 2026-09: 1; average per crop squash 8.5, tomatoes 5.83, kale 2.5, beans 2.17; and HAVING COUNT(*) > 2 keeps June and July."},
   read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Aggregations” (sections “Using built-in statistical functions”, “The GROUP BY clause to summarise data” and “Using the HAVING clause”) and “Missing Data”", note:"Its HAVING example uses a column alias, which SQLite allows and some other databases don’t."},{book:"swc", where:"Databases and SQL → “Missing Data” and “Aggregation”"}]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u9-l4", title:"Joining tables", minutes:55,
   hook:{q:"The members table has 6 rows and the harvests table has 10. If you combine them with `SELECT * FROM members, harvests;` and don’t say which rows belong together, how many rows come back?", options:["10","16","60","6"], answer:2, reveal:"**60.** Without a rule for matching, SQL pairs every member with every harvest: 6 × 10. Only 10 of those pairs are real (each harvest with its own grower). A join is how you tell the database which pairs to keep. This lesson covers inner joins, left joins that keep unmatched rows, and the checks that stop a join from quietly losing or doubling data."},
   goals:[
     "Write an inner JOIN … ON that matches a foreign key to a primary key",
     "Explain a join as “pair every row, keep the matches”, and spot a missing or wrong ON",
     "Use LEFT JOIN to keep unmatched rows, and find them with IS NULL",
     "Join and then summarise, checking totals for lost or doubled rows",
     "Declare keys in SQL and switch on foreign-key checks in SQLite"
   ],
   learn:[
    {h:"Why join?", body:[
      {lead:"The garden database stores each fact once. The price is that answers are spread across tables."},
      "The harvests table knows that harvest 5 was 8 kg of tomatoes from member 3. It doesn’t know member 3’s name; that lives in members. To answer “who grew what?”, you have to put matching rows from the two tables side by side. That’s a [[join]].",
      "In a spreadsheet you’d use a [[lookup]] (XLOOKUP or VLOOKUP) to pull each name across. A join does the same job for whole tables at once, and it’s written as part of the query rather than copied into the data."
    ]},
    {h:"An inner join, step by step", body:[
      {code:"SELECT members.name, harvests.crop, harvests.kg\nFROM harvests\nJOIN members ON harvests.member_id = members.id;", lang:"sql"},
      {table:[["name","crop","kg"],["Ama","beans","2.5"],["Ama","tomatoes","4"],["Bilal","beans","1"],["Chen","kale","3.5"],["Chen","tomatoes","8"],["Dana","beans","3"],["Eitan","squash","10.5"],["Bilal","kale","1.5"],["Fatou","tomatoes","5.5"],["Dana","squash","6.5"]]},
      {list:[
        "`FROM harvests JOIN members` names the two tables.",
        "`ON harvests.member_id = members.id` is the matching rule: a harvest goes with the member whose id equals its member_id. It nearly always matches a **foreign key** to the **primary key** it points at.",
        "`table.column` says which table a column comes from. It’s required when both tables have a column of that name (both have `id`), and it makes every join easier to read.",
        "`JOIN` on its own means `INNER JOIN`: only pairs that match are kept."
      ]},
      "Long table names get tiring, so joins usually give each table a short **alias** with `AS`. This version also sorts and keeps the top three:",
      {code:"SELECT m.name, h.crop, h.kg\nFROM harvests AS h\nJOIN members AS m ON h.member_id = m.id\nORDER BY h.kg DESC\nLIMIT 3;", lang:"sql", cap:"Result: Eitan squash 10.5, Chen tomatoes 8, Dana squash 6.5. Everything from Lesson 2 works on a joined result."},
      {lab:"dl-sql-join", t:"Practise: JOIN, who grew what"}
    ]},
    {h:"What a join really does", body:[
      "Here’s a model that’s exactly right, even though databases use faster methods behind the scenes: **pair every row of the first table with every row of the second, then keep the pairs where ON is true.**",
      "With no ON at all (`FROM members, harvests`), nothing is thrown away, and you get all 60 pairings. Mathematicians call this a Cartesian product; in practice it’s nearly always a mistake. Every name appears next to harvests that aren’t theirs.",
      "A wrong ON is sneakier, because it runs without any error:",
      {code:"SELECT members.name, harvests.crop\nFROM harvests\nJOIN members ON harvests.id = members.id;", lang:"sql", cap:"This matches harvest 1 with member 1, harvest 2 with member 2, and so on: 6 rows of nonsense (Bilal “grew” Ama’s tomatoes)."},
      "If both tables have a column of the same name and you don’t say which one you mean, SQLite stops: `ON member_id = id` gives “ambiguous column name: id”. Write `members.id`.",
      {key:"Check the size of every join result. Each harvest belongs to exactly one member, so harvests joined to members should have exactly as many rows as harvests: 10. A different number means the ON is wrong or the keys aren’t what you think."}
    ]},
    {h:"LEFT JOIN: keep everyone", body:[
      "Which bed is each member on? Join members to plots:",
      {code:"SELECT m.name, p.bed\nFROM members AS m\nJOIN plots AS p ON m.plot_id = p.id;", lang:"sql", cap:"5 rows: Ama North, Bilal North, Chen South, Dana South, Fatou East."},
      "Eitan has vanished. His plot_id is NULL, which matches no plot, and an inner join keeps only matches. Often that’s exactly what you want. When it isn’t, use a [[left-join|LEFT JOIN]], which keeps **every row of the first (left) table** and fills the other table’s columns with NULL where nothing matches:",
      {code:"SELECT m.name, p.bed\nFROM members AS m\nLEFT JOIN plots AS p ON m.plot_id = p.id;", lang:"sql"},
      {table:[["name","bed"],["Ama","North"],["Bilal","North"],["Chen","South"],["Dana","South"],["Eitan","NULL"],["Fatou","East"]]},
      {fig:'<svg viewBox="0 0 340 350"><text x="72" y="26" text-anchor="middle" class="s">members (plot_id)</text><text x="268" y="26" text-anchor="middle" class="s">plots (id, bed)</text><rect class="d-panel" x="12" y="38" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="55">Ama · 1</text><rect class="d-panel" x="12" y="68" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="85">Bilal · 2</text><rect class="d-panel" x="12" y="98" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="115">Chen · 3</text><rect class="d-panel" x="12" y="128" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="145">Dana · 4</text><rect class="d-rose" x="12" y="158" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="175">Eitan · NULL</text><rect class="d-panel" x="12" y="188" width="120" height="24" rx="6" stroke-width="1.5"/><text x="22" y="205">Fatou · 5</text><rect class="d-panel" x="208" y="38" width="120" height="24" rx="6" stroke-width="1.5"/><text x="218" y="55">1 North</text><rect class="d-panel" x="208" y="68" width="120" height="24" rx="6" stroke-width="1.5"/><text x="218" y="85">2 North</text><rect class="d-panel" x="208" y="98" width="120" height="24" rx="6" stroke-width="1.5"/><text x="218" y="115">3 South</text><rect class="d-panel" x="208" y="128" width="120" height="24" rx="6" stroke-width="1.5"/><text x="218" y="145">4 South</text><rect class="d-panel" x="208" y="188" width="120" height="24" rx="6" stroke-width="1.5"/><text x="218" y="205">5 East</text><path class="d-ink" d="M132,50 H208 M132,80 H208 M132,110 H208 M132,140 H208 M132,200 H208" stroke-width="2"/><text x="170" y="175" text-anchor="middle" class="s">no match</text><rect class="d-sage" x="12" y="234" width="316" height="48" rx="8" stroke-width="1.5"/><text x="22" y="254">JOIN: 5 rows</text><text x="22" y="272" class="s">only matched pairs; Eitan is dropped</text><rect class="d-gold" x="12" y="292" width="316" height="48" rx="8" stroke-width="1.5"/><text x="22" y="312">LEFT JOIN: 6 rows</text><text x="22" y="330" class="s">every member kept; Eitan’s bed is NULL</text></svg>', alt:"Members on the left, plots on the right, with lines joining Ama to plot 1, Bilal to 2, Chen to 3, Dana to 4 and Fatou to 5. Eitan, with plot_id NULL, has no line. Below: JOIN gives 5 rows and drops Eitan; LEFT JOIN gives 6 rows and shows Eitan’s bed as NULL.", cap:"The same ON rule, two kinds of join. An inner join keeps matched pairs only; a left join also keeps unmatched rows from the left table."},
      "The NULLs a left join adds are useful: they let you **find what’s missing**. `… LEFT JOIN plots AS p ON m.plot_id = p.id WHERE p.id IS NULL` returns just Eitan, the members without a plot. The same pattern finds customers with no orders or survey households with no follow-up visit.",
      {warn:"The order of tables matters for a LEFT JOIN: the left one is kept whole. And a condition on the right-hand table belongs in ON, not WHERE. Adding `WHERE p.bed = 'North'` to the left join above returns only Ama and Bilal, because Eitan’s NULL bed fails the test. SQLite’s documentation explains this difference between ON and WHERE for left joins."},
      "There are also `RIGHT JOIN` (keep every row of the right table) and `FULL OUTER JOIN` (keep unmatched rows from both). SQLite added both in version 3.39.0 (2022), so older SQLite tools may not have them. A right join is just a left join with the tables swapped."
    ]},
    {h:"Join, then summarise", body:[
      "Joins and GROUP BY work together. How much did each bed produce? Harvests know the member, members know the plot, plots know the bed, so it takes two joins:",
      {code:"SELECT p.bed, SUM(h.kg) AS kg\nFROM harvests AS h\nJOIN members AS m ON h.member_id = m.id\nJOIN plots AS p ON m.plot_id = p.id\nGROUP BY p.bed\nORDER BY kg DESC;", lang:"sql"},
      {table:[["bed","kg"],["South","21"],["North","9"],["East","5.5"]]},
      "That adds up to 35.5 kg, but the garden harvested 46 kg (`SELECT SUM(kg) FROM harvests`). Eitan’s 10.5 kg of squash disappeared, because the second inner join found no plot for him. Make that join a `LEFT JOIN` and a fourth row appears: bed NULL, 10.5 kg. Whether to show it is your decision, but it should be a decision, not an accident.",
      "Per-member summaries use the same idea. This one keeps every member, even anyone with no harvests yet:",
      {code:"SELECT m.name, COUNT(h.id) AS harvests, TOTAL(h.kg) AS kg\nFROM members AS m\nLEFT JOIN harvests AS h ON h.member_id = m.id\nGROUP BY m.id, m.name\nORDER BY kg DESC;", lang:"sql", cap:"Chen leads with 11.5 kg from 2 harvests. COUNT(h.id) counts real harvests, so a member with none would show 0; COUNT(*) would show 1 for the NULL-filled row."},
      "Grouping by `m.id` as well as `m.name` keeps two members who share a name apart. (On the garden data every member has at least one harvest; the Data Lab’s second test database includes one who doesn’t, which is why its JOIN challenge catches a left join from members.)"
    ]},
    {h:"Keys keep joins honest", body:[
      "Joins go wrong when a table has more matches than you expect. Try totalling the plot area after joining plots to harvests:",
      {code:"SELECT SUM(p.size_m2)\nFROM plots AS p\nJOIN members AS m ON m.plot_id = p.id\nJOIN harvests AS h ON h.member_id = m.id;", lang:"sql", cap:"Result: 56. But the plots cover only 33 m² (SELECT SUM(size_m2) FROM plots)."},
      "Each plot row is repeated once per harvest from it, so plots with two harvests are counted twice. This **fan-out** is the most common way joined numbers go wrong. Summarise each table at its own level (plots by plot, harvests by harvest), or check counts before and after each join.",
      "You can write the links into the schema so the database guards them:",
      {code:"CREATE TABLE members (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  joined INTEGER,\n  plot_id INTEGER REFERENCES plots(id)\n);", lang:"sql"},
      "`REFERENCES plots(id)` declares plot_id a foreign key; `NOT NULL` makes a name required. In SQLite, foreign keys are **not checked unless you switch checking on** for each connection with `PRAGMA foreign_keys = ON;`. SQLite’s documentation explains this is for compatibility with old databases. With it on, our test refused a member with plot_id 99 (“FOREIGN KEY constraint failed”) but still accepted a NULL plot_id. DB Browser for SQLite (Lesson 5) switches checking on for you by default; the Data Lab, like most programs, leaves it off. The Data Lab’s tables don’t declare foreign keys at all: the links exist only because the queries use them consistently."
    ]}
   ],
   try:[
    {id:"t3u9-l4-x1", type:"number", q:"`SELECT * FROM members, harvests;` has no ON or WHERE. With 6 members and 10 harvests, how many rows does it return?", answer:60, tol:0, unit:"rows", why:"With no matching rule, every member is paired with every harvest: 6 × 10 = 60. Only 10 of those pairs are real.", wrongs:[
      {v:16, tol:0, why:"That adds the tables (6 + 10). Pairing multiplies: each of the 6 members is paired with each of the 10 harvests."},
      {v:10, tol:0, why:"That’s what a correct join returns. Without ON, nothing is thrown away."},
      {v:6, tol:0, why:"That’s the number of members. Each one appears with all 10 harvests."}
    ]},
    {id:"t3u9-l4-x2", type:"mcq", q:"Mei wants each harvest’s crop next to the name of the member who grew it. Which ON is right?", options:[
      {t:"`ON harvests.member_id = members.id`", ok:true, why:"Right: the foreign key in harvests matched to the primary key it points at."},
      {t:"`ON harvests.id = members.id`", why:"This runs, but it pairs harvest 1 with member 1, harvest 2 with member 2 and so on, which is meaningless. Ids of different tables aren’t related."},
      {t:"`ON members.plot_id = harvests.id`", why:"A plot number has nothing to do with a harvest number, so these pairs are nonsense."},
      {t:"No ON is needed; SQLite matches the tables automatically", why:"Without ON (or a matching WHERE), every member is paired with every harvest: 60 rows."}
    ]},
    {id:"t3u9-l4-x3", type:"sort", q:"Does Eitan (who has harvests, but no plot: plot_id NULL) appear in the result of each query?", buckets:["Eitan appears","Eitan doesn’t appear"], items:[
      {t:"members JOIN plots ON m.plot_id = p.id", b:1, why:"An inner join keeps only matches, and NULL matches no plot."},
      {t:"members LEFT JOIN plots ON m.plot_id = p.id", b:0, why:"A left join keeps every member; Eitan’s bed shows NULL."},
      {t:"the LEFT JOIN above, plus WHERE p.bed = 'North'", b:1, why:"Eitan’s NULL bed fails the WHERE test, so the filter removes him again."},
      {t:"the LEFT JOIN above, plus WHERE p.id IS NULL", b:0, why:"This keeps only unmatched members: just Eitan."},
      {t:"harvests JOIN members ON h.member_id = m.id", b:0, why:"Eitan has a harvest (10.5 kg of squash), and it matches his member row."},
      {t:"plots LEFT JOIN members ON m.plot_id = p.id", b:1, why:"Here plots is the left table, so every plot is kept. Eitan isn’t on any plot, so he never matches."}
    ]},
    {id:"t3u9-l4-x4", type:"mcq", q:"Kenji joins harvests → members → plots with two inner joins and totals kg by bed: South 21, North 9, East 5.5. That’s 35.5 kg, but the garden harvested 46 kg. What happened?", options:[
      {t:"Eitan has no plot, so the inner join to plots dropped his 10.5 kg", ok:true, why:"Right. A LEFT JOIN to plots keeps his harvest, in a group whose bed is NULL."},
      {t:"SUM ignores decimals", why:"SUM adds decimals correctly; 21 + 9 + 5.5 is exactly 35.5."},
      {t:"GROUP BY loses one row from each bed", why:"Grouping never loses rows; every row lands in some group. The rows were lost earlier, at the join."},
      {t:"The harvests table has duplicate rows", why:"Duplicates would make the total bigger, not smaller."}
    ]},
    {id:"t3u9-l4-x5", type:"spot", q:"SQLite refuses this query with “ambiguous column name”. Tap the part that causes it.", ask:"causes the error", mono:true, parts:["SELECT ",
      {t:"name", flag:false, why:"Only members has a name column, so this is clear (writing m.name would still be clearer)."},", ",
      {t:"crop", flag:false, why:"Only harvests has crop, so SQLite knows which table you mean."}," FROM ",
      {t:"harvests", flag:false, why:"A valid table name."}," JOIN members ON ",
      {t:"member_id", flag:false, why:"Only harvests has member_id, so this is unambiguous."}," = ",
      {t:"id", flag:true, why:"Both tables have an id column, so SQLite can’t tell which you mean. Write members.id."},";"
    ]},
    {id:"t3u9-l4-x6", type:"match", q:"Match each way of combining two tables to what it returns.", pairs:[
      ["INNER JOIN … ON","Only the pairs that match","Rows without a partner in the other table are dropped."],
      ["LEFT JOIN … ON","Every row of the first table, with NULLs where nothing matches","The left table is kept whole."],
      ["A comma with no ON or WHERE","Every row paired with every row","The Cartesian product: 6 × 10 = 60 rows for members and harvests."],
      ["FULL OUTER JOIN … ON","Matches, plus unmatched rows from both sides","It’s a left join and a right join together (in SQLite since 3.39.0)."]
    ]},
    {id:"t3u9-l4-x7", type:"mcq", q:"Joining plots → members → harvests and running `SUM(p.size_m2)` gives 56 m², but the plots cover 33 m². Why?", options:[
      {t:"Each plot row is repeated once per harvest from it, so its size is added several times", ok:true, why:"Right: fan-out. Total plot area from the plots table on its own, or summarise harvests first and join afterwards."},
      {t:"The join dropped some plots", why:"Dropping plots would make the total smaller than 33, not bigger."},
      {t:"SQLite rounds REAL numbers up", why:"No rounding happens; the extra area comes from repeated rows."},
      {t:"size_m2 is stored as text", why:"Text would cause odd sorting, not a larger sum. The values are numbers."}
    ]}
   ],
   apply:{intro:"Use the Data Lab on any device. After each join, check the number of rows against what you expect: the Data Lab prints the count under each result (it shows the first 50 rows, then “…and 10 more rows.” for a 60-row result).", tasks:[
     {t:"Solve the JOIN challenge, then explore", how:["In **Labs → Data Lab**, do **JOIN: who grew what**.","In the same editor, write the inner join of members and plots, press ▶ Run, and count the rows. Then change JOIN to LEFT JOIN and run it again. Who appears?","Add `WHERE p.id IS NULL` to the left join. What question does the result answer?"]},
     {t:"Answer a three-table question", how:["Write a query for each member’s kilograms per square metre: join members to plots and to harvests, group by member, and calculate `ROUND(SUM(h.kg) / p.size_m2, 2)` (put `p.size_m2` in GROUP BY too).","Sort it highest first. Who uses their plot most intensively?","Explain in one sentence why Eitan isn’t in your result, and whether that’s right for this question."], write:"My query, the top member, and my sentence about Eitan…"}
   ], proof:"The JOIN challenge solved; 5 rows from the inner join and 6 from the left join (Eitan with a NULL bed); and kilograms per square metre: Dana 1.9, Chen 1.44, Ama 1.08, Bilal 0.63, Fatou 0.55 (Eitan has no plot, so no area to divide by)."},
   read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Joins” (sections “About table joins”, “Different join types” and “Using different join types in analysing your data”)"},{book:"swc", where:"Databases and SQL → “Combining Data”"}]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u9-l5", title:"Tools and good table design", minutes:60,
   hook:{q:"A garden app asks for a member’s name, then pastes whatever is typed straight into an SQL query between single quotes. A new member types her name, `Siobhán O'Neill`, with an ordinary straight apostrophe. What happens?", options:["The search works normally","The query breaks: the apostrophe ends the text early","The app removes the apostrophe and finds her","The database deletes her record"], answer:1, reveal:"**The query breaks.** Pasted into `WHERE name = '…'`, the apostrophe in `O'Neill` closes the text early and the rest becomes broken SQL; in our test SQLite reported a syntax error. An innocent name exposes a real security hole: if typed text can change a query’s shape, someone can type text on purpose to change what it does. That’s **SQL injection**, and the cure (placeholders) is at the end of this lesson, after tools, importing a CSV and designing good tables."},
   goals:[
     "Install and use DB Browser for SQLite, and know when changes are saved",
     "Import a CSV into a table, check the column types, and join it to existing data",
     "Apply the rules of good table design (normalisation) in plain terms, including linking tables",
     "Recognise common SQL dialect differences between SQLite, PostgreSQL, MySQL and SQL Server",
     "Explain SQL injection and why programs use placeholders instead of pasting text into SQL"
   ],
   learn:[
    {h:"SQLite on your own computer", body:[
      {lead:"An SQLite database is a single file, often ending in .sqlite, .sqlite3 or .db. You can copy it, email it and back it up like any other file."},
      "To open one, you need a program that includes SQLite. Some common choices:",
      {list:[
        "**DB Browser for SQLite**: a free, open-source desktop app for Windows, macOS and Linux. It shows tables like a spreadsheet and has a tab for running SQL. The Data Carpentry SQL lesson uses it. Its latest stable release when this unit was checked was 3.13.1 (October 2024).",
        "**The sqlite3 command-line program**, for people comfortable in a [[terminal]].",
        "**Programming languages**: Python includes a `sqlite3` module in its standard library, and [[r-language|R]] reaches SQLite through the DBI and RSQLite [[r-package|packages]].",
        "**On a phone**: DB Browser has no phone version. The Data Lab runs the same SQLite engine in your browser."
      ]},
      "DB Browser’s window has four tabs: **Database Structure** (tables and their columns), **Browse Data** (rows, with filters), **Edit Pragmas** (settings you can usually leave alone) and **Execute SQL** (type queries and press ▶ to run them; [[kbd:Ctrl]] + [[kbd:Enter]] also runs them, or [[kbd:Cmd]] + [[kbd:Return]] on a Mac).",
      {warn:"Changes such as creating a table or importing data aren’t saved to the file until you click **Write Changes** ([[kbd:Ctrl]] + [[kbd:S]]). **Revert Changes** goes back to the last saved state. Once written, there is no undo, so keep a copy of the file before big changes. Plain SELECT queries never change anything."},
      "To rebuild the Data Lab’s garden database on your computer, create a new database, paste this into **Execute SQL**, run it, and click Write Changes:",
      {code:"CREATE TABLE members (\n  id INTEGER PRIMARY KEY,\n  name TEXT,\n  joined INTEGER,\n  plot_id INTEGER\n);\nCREATE TABLE plots (\n  id INTEGER PRIMARY KEY,\n  bed TEXT,\n  size_m2 REAL\n);\nCREATE TABLE harvests (\n  id INTEGER PRIMARY KEY,\n  member_id INTEGER,\n  crop TEXT,\n  kg REAL,\n  month TEXT\n);\nINSERT INTO members VALUES\n  (1, 'Ama', 2021, 1), (2, 'Bilal', 2024, 2),\n  (3, 'Chen', 2019, 3), (4, 'Dana', 2023, 4),\n  (5, 'Eitan', 2020, NULL), (6, 'Fatou', 2025, 5);\nINSERT INTO plots VALUES\n  (1, 'North', 6), (2, 'North', 4), (3, 'South', 8),\n  (4, 'South', 5), (5, 'East', 10);\nINSERT INTO harvests VALUES\n  (1, 1, 'beans', 2.5, '2026-06'),\n  (2, 1, 'tomatoes', 4, '2026-07'),\n  (3, 2, 'beans', 1, '2026-06'),\n  (4, 3, 'kale', 3.5, '2026-05'),\n  (5, 3, 'tomatoes', 8, '2026-08'),\n  (6, 4, 'beans', 3, '2026-07'),\n  (7, 5, 'squash', 10.5, '2026-08'),\n  (8, 2, 'kale', 1.5, '2026-06'),\n  (9, 6, 'tomatoes', 5.5, '2026-07'),\n  (10, 4, 'squash', 6.5, '2026-09');", lang:"sql", cap:"The same tables and rows as the Data Lab (we checked that the result is identical). `INSERT INTO … VALUES` adds rows; each bracket is one row, in column order."}
    ]},
    {h:"Importing a CSV", body:[
      "Real data usually arrives as a file, most often a [[csv|CSV]]. DB Browser turns a CSV into a table with **File → Import → Table from CSV file…**. Suppose a member kept the garden’s monthly rainfall in a spreadsheet and exported it (invented numbers):",
      {code:"month,rain_mm\n2026-05,62\n2026-06,48\n2026-07,21\n2026-08,35\n2026-09,70", lang:"txt", label:"rainfall.csv"},
      "The import window shows a preview and a few settings. Check them before clicking OK:",
      {list:[
        "**Table name**: it suggests the file name (rainfall).",
        "**Column names in first line**: tick it when the first row holds headings, as here.",
        "**Field separator**: a comma here; a semicolon or Tab for other files ([[tsv|TSV]]).",
        "**Encoding**: UTF-8 for nearly all modern files (see [[utf-8]]); wrong encoding turns accents into nonsense."
      ]},
      "DB Browser then guesses each column’s type (INTEGER, REAL or TEXT) from its values, and empty cells become NULL in the new table. Always check the result in **Database Structure**: a column of numbers with one stray word, or even a blank cell, can arrive as TEXT. Fix a type with **Modify Table…**. Once the types are right, click Write Changes.",
      {warn:"Types matter. With rain_mm stored as TEXT and a row for October with 9 mm added, `ORDER BY rain_mm DESC` put 9 first, then 70, 62, 48: text is sorted character by character, and “9” comes after “7”. This is the same “numbers stored as text” problem spreadsheets have."},
      "Now the CSV can be joined to the garden’s own data by month:",
      {code:"SELECT h.month, SUM(h.kg) AS kg, r.rain_mm\nFROM harvests AS h\nJOIN rainfall AS r ON r.month = h.month\nGROUP BY h.month, r.rain_mm\nORDER BY h.month;", lang:"sql"},
      {table:[["month","kg","rain_mm"],["2026-05","3.5","62"],["2026-06","5","48"],["2026-07","12.5","21"],["2026-08","18.5","35"],["2026-09","6.5","70"]]},
      "Going the other way, **File → Export → Table(s) as CSV file…** writes a table out, and the results of any query can be saved as CSV from the Execute SQL tab. DB Browser can also export JSON ([[json]]), the format Python read in “Automating and debugging” (Making with Code, Unit 9)."
    ]},
    {h:"Good table design, in plain words", body:[
      "Designing tables so that each fact is stored once, in the one place it belongs, is called [[normalisation]]. Software Carpentry’s “Data Hygiene” episode boils it down to four rules:",
      {ol:[
        "**Every value is atomic**: one value per cell, not “beans, kale” or “Ama Sato, 2021”. Store parts you might use separately in separate columns.",
        "**Every record has a primary key**, a value or combination of values that is unique to it.",
        "**No redundant information**: don’t copy a member’s joining year onto every harvest. Store it once and point at it.",
        "**Units are stored explicitly**: a column called `kg`, or a separate units column, never “2.5 kg” typed into the values."
      ]},
      {fig:'<svg viewBox="0 0 340 316"><defs><marker id="t3u9n" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0,0 L10,5 L0,10 z"/></marker></defs><rect class="d-rose" x="10" y="10" width="320" height="92" rx="8" stroke-width="2"/><text x="20" y="32">One big sheet</text><text x="20" y="52" class="s">member · joined · bed · size_m2 ·</text><text x="20" y="69" class="s">crop · kg · month</text><text x="20" y="90" class="s">Ama, 2021, North, 6 repeated on every row</text><path class="d-ink" d="M170,108 V130" stroke-width="2" marker-end="url(#t3u9n)"/><text x="182" y="124" class="s">split by kind of thing</text><rect class="d-lup" x="6" y="140" width="104" height="100" rx="8" stroke-width="2"/><text x="58" y="160" text-anchor="middle">members</text><text x="14" y="180" class="mono">id</text><text x="14" y="197" class="mono">name</text><text x="14" y="214" class="mono">joined</text><text x="14" y="231" class="mono">plot_id</text><rect class="d-gold" x="118" y="140" width="104" height="83" rx="8" stroke-width="2"/><text x="170" y="160" text-anchor="middle">plots</text><text x="126" y="180" class="mono">id</text><text x="126" y="197" class="mono">bed</text><text x="126" y="214" class="mono">size_m2</text><rect class="d-sage" x="230" y="140" width="104" height="117" rx="8" stroke-width="2"/><text x="282" y="160" text-anchor="middle">harvests</text><text x="238" y="180" class="mono">id</text><text x="238" y="197" class="mono">member_id</text><text x="238" y="214" class="mono">crop</text><text x="238" y="231" class="mono">kg</text><text x="238" y="248" class="mono">month</text><text x="170" y="284" text-anchor="middle" class="s">Each fact is stored once: to move Ama</text><text x="170" y="302" text-anchor="middle" class="s">to another plot, change one value.</text></svg>', alt:"A pink box labelled One big sheet, with columns member, joined, bed, size_m2, crop, kg and month, notes that Ama, 2021, North, 6 is repeated on every row. An arrow labelled split by kind of thing leads to three tables: members (id, name, joined, plot_id), plots (id, bed, size_m2) and harvests (id, member_id, crop, kg, month).", cap:"Normalising the garden’s first spreadsheet. Each kind of thing gets its own table, and keys link them."},
      "Database textbooks name the first steps of normalisation **normal forms**. You don’t need the theory to use them:",
      {table:[["Normal form","In plain words","Garden example of breaking it"],["First (1NF)","One value per cell; no repeating columns such as crop1, crop2","“beans, kale” in one crop cell"],["Second (2NF)","If the key has two parts, every other column depends on both parts","A member’s name stored in a table keyed by member and work day"],["Third (3NF)","Every other column depends only on the key, not on another non-key column","Storing bed in members: bed belongs to the plot, not the member"]]},
      "A **many-to-many** link needs a table of its own. Members come to many work days, and each work day has many members, so a linking table records each attendance, with a two-column primary key so that nobody is counted twice:",
      {code:"CREATE TABLE attendance (\n  member_id INTEGER,\n  workday_id INTEGER,\n  PRIMARY KEY (member_id, workday_id)\n);", lang:"sql", cap:"Adding the same pair twice fails with “UNIQUE constraint failed”. Two joins (to members and to a workdays table) turn the pairs back into names and dates."},
      "Normalised tables are for **storing** data. For analysis or a chart you often want one wide table again, and a query makes it on demand. `CREATE VIEW` saves a query under a name, so `SELECT * FROM harvest_log` can always give the joined, readable version without storing anything twice. Use clear, lower-case column names with underscores (Unit 2’s advice); spaces in names force you to quote them in every query."
    ]},
    {h:"SQL dialects: same language, different accents", body:[
      "Each database system adds to SQL and bends a few rules: its [[sql-dialect|dialect]]. The core you’ve learnt (SELECT, WHERE, GROUP BY, JOIN) works everywhere. These are the differences that surprise people most; the SQLite and PostgreSQL columns were tested for this unit, and the last column describes MySQL and SQL Server with their usual default settings.",
      {table:[["Task","SQLite","PostgreSQL","MySQL / SQL Server"],["First 3 rows","LIMIT 3","LIMIT 3, or FETCH FIRST 3 ROWS ONLY","MySQL: LIMIT 3. SQL Server: SELECT TOP 3"],["Is 'Beans' = 'beans'?","No","No","Usually yes (it depends on the collation)"],["LIKE and capitals","Ignores case (English letters only)","Case-sensitive; ILIKE ignores case","Follows the collation"],["\"double quotes\"","Text, if no column has that name","Always a name","MySQL: text. SQL Server: a name"],["NULLs, sorting ascending","First","Last","First"],["Alias used in HAVING","Allowed","Error","MySQL allows it; SQL Server doesn’t"],["Column not in GROUP BY","Allowed (value from one row)","Error","Error"],["Wrong type, such as text in an INTEGER column","Stored anyway (unless STRICT)","Error","Usually an error"]]},
      {tip:"When a query from a website or a colleague fails, check which system it was written for. “Top 5” questions, date functions and joining text (`||` in SQLite and PostgreSQL, `+` in SQL Server, which added `||` only in SQL Server 2025, and `CONCAT()` in most) are where dialects differ most."}
    ]},
    {h:"SQL injection, and why programs use placeholders", body:[
      "Websites and apps that use databases build SQL inside their code. If a program glues text that someone typed straight into a query, that text can change the query itself. That’s [[sql-injection|SQL injection]], a long-known and serious security flaw: OWASP, the open web-security foundation, says it can expose or change a database’s contents, and sometimes worse. The fix is simple and standard: a [[parameterised-query|parameterised query]] (also called a prepared statement) sends the SQL with a placeholder, and sends the typed value separately, so the value is always treated as data, never as SQL. OWASP lists this as the first, primary defence, and calls hand-made “escaping” of quotes strongly discouraged.",
      {code:"import sqlite3\n\ncon = sqlite3.connect(\"garden.sqlite\")\nname = input(\"Member name: \")\nrows = con.execute(\n    \"SELECT id, joined FROM members WHERE name = ?\",\n    (name,),\n).fetchall()\nprint(rows)", lang:"py", label:"Python", cap:"The `?` is the placeholder; `(name,)` supplies its value. We tested it with `Siobhán O'Neill` (found her, apostrophe and all) and with deliberately tricky input (no rows, and no change to the query)."},
      "You won’t write programs like this in the Data Lab, but it’s worth knowing for any app you build, and for judging tools you rely on. If you ever find a form that breaks when you type an apostrophe, report it to whoever runs the site."
    ]}
   ],
   try:[
    {id:"t3u9-l5-x1", type:"mcq", q:"Ana imports a CSV into a new table in DB Browser, runs a few SELECT queries, and closes the program. What happens to the imported table?", options:[
      {t:"DB Browser asks whether to save; if she says no, the table isn’t in the file", ok:true, why:"Right. Imports and other changes stay pending until Write Changes ([[kbd:Ctrl]] + [[kbd:S]]). DB Browser asks about unsaved changes when you close it."},
      {t:"It was saved automatically when the import finished", why:"DB Browser keeps changes pending until you click Write Changes, so you can still Revert."},
      {t:"The SELECT queries deleted it", why:"SELECT only reads; it never changes or removes data."},
      {t:"It’s saved inside the CSV file", why:"The CSV is only read. The new table lives in the database file, once written."}
    ]},
    {id:"t3u9-l5-x2", type:"sort", q:"Good table design, or a problem?", buckets:["Good design","A problem"], items:[
      {t:"A harvests table that stores member_id rather than the member’s name", b:0, why:"The name is stored once, in members; harvests just point at it."},
      {t:"A crop column holding “beans, kale”", b:1, why:"Not atomic: two values in one cell. Use one row per crop."},
      {t:"The member’s joining year copied onto every harvest row", b:1, why:"Redundant: it belongs in members, stored once."},
      {t:"A weight column with values like “2.5 kg”", b:1, why:"The unit turns numbers into text. Name the column kg and store just the number."},
      {t:"An attendance table with member_id and workday_id as a two-part key", b:0, why:"The standard way to store a many-to-many link."},
      {t:"A bed column in members as well as in plots", b:1, why:"The bed belongs to the plot (third normal form). Two copies can disagree."}
    ]},
    {id:"t3u9-l5-x3", type:"match", q:"Match each way of writing a query to the system it’s written for.", pairs:[
      ["SELECT TOP 3 crop FROM harvests","SQL Server","TOP is SQL Server’s way; SQLite and PostgreSQL reject it with a syntax error."],
      ["… ORDER BY kg DESC LIMIT 3","SQLite, PostgreSQL and MySQL","LIMIT is widely supported, though it isn’t the official standard form."],
      ["… FETCH FIRST 3 ROWS ONLY","The SQL standard (accepted by PostgreSQL)","The standard spelling. SQLite doesn’t accept it."],
      ["WHERE crop ILIKE 'beans'","PostgreSQL","ILIKE is PostgreSQL’s case-insensitive LIKE. SQLite’s LIKE already ignores case for English letters."]
    ]},
    {id:"t3u9-l5-x4", type:"mcq", q:"Why do programs use placeholders (such as `?`) for values typed by users?", options:[
      {t:"The typed value is sent separately from the SQL, so it’s always treated as data and can’t change the query", ok:true, why:"Right. That’s why placeholders stop SQL injection, and also why names with apostrophes (O’Neill) just work."},
      {t:"They make queries run faster for long names", why:"Speed isn’t the point; safety and correctness are."},
      {t:"They delete apostrophes and other risky characters", why:"Nothing is deleted: O’Neill is stored and found with the apostrophe intact."},
      {t:"They encrypt the database file", why:"Placeholders don’t touch the file. Encryption is a separate thing."}
    ]},
    {id:"t3u9-l5-x5", type:"number", q:"A rain_mm column was imported as TEXT, holding 9, 21, 35, 48, 62 and 70. What value does `SELECT rain_mm FROM rainfall ORDER BY rain_mm DESC LIMIT 1;` return?", answer:9, tol:0, unit:"mm", why:"Text is sorted character by character, and “9” comes after “7”, “6”, “4”, “3” and “2”. So 9 is the “largest” text. Change the column to INTEGER and it correctly gives 70.", wrongs:[
      {v:70, tol:0, why:"That’s the answer for numbers. Stored as text, “70” starts with 7, which sorts before 9."},
      {v:21, tol:0, why:"21 is the smallest number, so it can’t come first in a descending sort, as text or as a number. As text, the value that sorts last (and so comes first with DESC) is “9”."}
    ]},
    {id:"t3u9-l5-x6", type:"order", q:"Put the steps of importing a CSV into DB Browser for SQLite in order.", items:[
      {t:"Open or create the database file", why:"An import adds a table to an open database."},
      {t:"Choose File → Import → Table from CSV file… and pick the file", why:"This opens the import window with a preview."},
      {t:"Check the table name, “Column names in first line” and the separator", why:"Wrong settings give one squashed column or a heading row as data."},
      {t:"Click OK", why:"DB Browser creates the table and adds the rows."},
      {t:"Check the column types in Database Structure, fixing them with Modify Table if needed", why:"Numbers imported as text sort and compare wrongly."},
      {t:"Click Write Changes", why:"Only now is the new table saved in the file."}
    ]},
    {id:"t3u9-l5-x7", type:"mcq", q:"Hana copies a query from a forum: `SELECT crop, SUM(kg) AS total FROM harvests GROUP BY crop HAVING total > 10;`. It works in the Data Lab but fails on her workplace’s PostgreSQL server. What’s the likely fix?", options:[
      {t:"Repeat the expression: `HAVING SUM(kg) > 10`", ok:true, why:"Right. PostgreSQL doesn’t let HAVING use a name made in SELECT (“column \"total\" does not exist”). Repeating the aggregate works in every system."},
      {t:"Put the condition in WHERE instead", why:"WHERE runs before grouping, so it can’t test a total in any system."},
      {t:"Write the keywords in lower case", why:"Keyword case doesn’t matter in any of these systems."},
      {t:"Change SUM to TOTAL", why:"TOTAL() exists only in SQLite; PostgreSQL would then fail for a second reason."}
    ]}
   ],
   apply:{intro:"Installing DB Browser is optional and needs a computer. On a phone or a locked computer, read the steps and use the Data Lab for the queries.", tasks:[
     {t:"Install DB Browser for SQLite (optional, computer only)", how:{
       win:["Go to **sqlitebrowser.org/dl** and download **DB Browser for SQLite - Standard installer for 64-bit Windows** (an .msi file). On a Windows computer with an Arm processor, choose the ARM64 installer instead.","Run it and follow the steps. (If you use the winget package manager, the project’s README gives `winget install -e --id DBBrowserForSQLite.DBBrowserForSQLite` instead.)","If there’s no desktop icon, open the Start menu and type **DB Browser** to find it."],
       mac:["Go to **sqlitebrowser.org/dl** and download the macOS version (a .dmg file).","Open the .dmg and drag **DB Browser for SQLite** into **Applications**.","Open it from Applications. The first time, macOS asks whether you’re sure you want to open an app downloaded from the internet: click **Open**. (The project has the app checked by Apple. If macOS instead says it can’t be opened or verified, go to **System Settings → Privacy & Security**, scroll down and click **Open Anyway**.)","If you use Homebrew, the README gives `brew install --cask db-browser-for-sqlite` instead. (The project lists the macOS versions it has tested; newer versions usually work.)"],
       chromeos:["Turn on Linux: **Settings → About ChromeOS → Developers → Linux development environment → Set up** (on some versions it’s under Settings → Advanced → Developers). If the option is missing, your administrator may have turned Linux off; use the phone steps.","Open the **Terminal** app and type `sudo apt update`, then `sudo apt install sqlitebrowser`. (`sudo` runs a command with administrator rights inside the Linux container; only use it for commands you understand.)","Debian’s package can be an older version than the website’s; that’s fine for this unit. Open **DB Browser for SQLite** from the Launcher’s Linux apps folder."],
       phone:["iPhone and Android: DB Browser for SQLite has no phone version.","Use the Data Lab for every query in this unit: it runs the same SQLite engine in your browser.","Read the computer steps so you know what to expect later, and follow the next task by reading along."]
     }},
     {t:"Build the garden database and import a CSV", how:["In DB Browser, click **New Database** and save the file as `garden.sqlite`. If a window for defining a table opens, click **Cancel**.","Open the **Execute SQL** tab, paste the garden script from this lesson and press ▶ to run it. Click **Write Changes**.","Make `rainfall.csv`: type the five lines from this lesson into a plain-text editor (Notepad on Windows; TextEdit on a Mac after **Format → Make Plain Text**), or export them from a spreadsheet as CSV.","Choose **File → Import → Table from CSV file…**, pick the file, check that **Column names in first line** is ticked and the separator is a comma, and click **OK**.","In **Database Structure**, expand the rainfall table and check that rain_mm is INTEGER. Then click **Write Changes**.","In **Execute SQL**, run the month join from this lesson and compare your result with the table shown. (DB Browser may show whole numbers stored as REAL with a decimal point, such as 5.0.) Optional: **File → Export → Table(s) as CSV file…** to export a table."], write:"What I checked, and anything that surprised me…"}
   ], proof:"A garden.sqlite file with four tables (members, plots, harvests and rainfall), and the month join’s result: 2026-07 had 12.5 kg with 21 mm of rain, 2026-08 had 18.5 kg with 35 mm. (On a phone: your notes on each step, and the same month totals worked out in the Data Lab with GROUP BY month.)"},
   read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Using DB Browser for SQLite” and “Creating tables and views” (section “Using the DB Browser application to create tables”)"},{book:"swc", where:"Databases and SQL → “Data Hygiene”", note:"The four rules of good table design used in this lesson."}]
  }
  ],
  checkpoint:["t3u9-q02","t3u9-q05","t3u9-q11","t3u9-q13","t3u9-q19","t3u9-q22","t3u9-q24","t3u9-q30","t3u9-q32","t3u9-q35","t3u9-q39","t3u9-q41"],
  codex:[
   {id:"relational-databases", title:"Relational databases", aka:["database","RDBMS","DBMS"], tags:["data","sql","databases"], summary:"Data kept as linked tables, each fact stored once, with keys connecting them and SQL to ask questions.",
    levels:{
     starter:[
      "A relational database stores information as several **tables** that link together. Think of a garden club: one table lists members, one lists plots, one lists harvests. Each table holds one kind of thing; each row is one of those things; each column is one property of them.",
      "Tables link through **keys**. Every row has an ID that names it uniquely (its primary key). A harvest row doesn’t repeat the member’s name and joining year; it just stores the member’s ID, a pointer (a foreign key). The name lives in one place, so a correction happens once.",
      "You ask questions in **SQL**: “total kilograms per crop”, “who has no plot yet?”. The answer comes back as a new table, and the stored data is untouched.",
      "A database isn’t just a big spreadsheet. It enforces rules (types, unique keys, required values), copes with millions of rows, and keeps its questions as re-runnable text. For a small list one person keeps, a spreadsheet is still the better tool."
     ],
     builder:[
      "**The parts.** A database management system (DBMS) is the software. A **schema** describes the tables: column names, types, keys and rules, written in SQL with `CREATE TABLE`. Rows are also called records; columns are fields or attributes.",
      "**Relationships.** One-to-many is the common shape: one member, many harvests, so harvests holds `member_id`. Many-to-many (members and work days) needs a linking table holding both keys. One-to-one is rare.",
      "**Kinds of system.** Client–server systems (PostgreSQL, MySQL and MariaDB, Microsoft SQL Server, Oracle Database) run a server program that many users connect to over a network. **SQLite** is embedded: a library inside the app, with the whole database in one file. SQLite’s documentation lists it in every Android device, iPhone, Mac and Windows 10 machine and in the Firefox, Chrome and Safari browsers.",
      "**Choosing.** SQLite suits apps, single-user analysis, data files to share and teaching. Its documentation notes that it allows many readers but only one writer at a time, so a website where many people change data at once needs a client–server system.",
      "**Moving data.** CSV is the usual bridge to and from spreadsheets; query results can go back into a sheet for charts.",
      "“NoSQL” systems (document, key–value and graph stores) organise data differently and suit some jobs, but relational tables and SQL remain the common language of data work."
     ],
     pro:[
      "**Types differ by system.** SQLite stores five storage classes (NULL, INTEGER, REAL, TEXT, BLOB) and uses **flexible typing**: a column’s declared type is a preference, so text can be stored in an INTEGER column. Its documentation calls this a feature, while acknowledging it confuses people moving to rigidly typed systems. `STRICT` tables (SQLite 3.37.0, 2021) enforce declared types. PostgreSQL rejects wrong types at insert time.",
      "**SQLite has no separate BOOLEAN or DATETIME type.** TRUE and FALSE are the integers 1 and 0; dates are stored as ISO-8601 text, Unix-time integers or Julian-day reals, and the date functions understand all three. ISO text (`2026-08`) is the friendliest choice because it sorts correctly.",
      "**Primary key edge cases.** In SQLite an `INTEGER PRIMARY KEY` must be a non-NULL integer, but, through a historical bug kept for compatibility, other PRIMARY KEY columns can hold NULL unless you add NOT NULL.",
      "**Limits.** SQLite’s documented maximum database size is about 281 terabytes at the largest page size (about 17.5 TB at the default 4,096-byte page size), far beyond spreadsheet limits (Excel’s 1,048,576 rows per sheet). Concurrency, not size, is usually what pushes a project to a server database.",
      "**Embedded in the browser.** sql.js compiles SQLite to WebAssembly, which is how this app’s Data Lab runs SQL on your device without a server. The same SQL works, almost unchanged, in DB Browser for SQLite, Python’s sqlite3 module or R’s RSQLite."
     ]},
    related:["sql-select","database-design","sqlite-tools","tidy-data-principles"], read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “What is a relational database?”"}],
    sources:[{t:"Data Carpentry: Data Management with SQL for Social Scientists (lesson source on GitHub)", url:"https://github.com/datacarpentry/sql-socialsci"},{t:"SQLite: Most Widely Deployed and Used Database Engine", url:"https://www.sqlite.org/mostdeployed.html"},{t:"SQLite: Appropriate Uses For SQLite", url:"https://www.sqlite.org/whentouse.html"}], checked:"2026-11"},

   {id:"sql-select", title:"SELECT queries", aka:["SQL query","SELECT statement"], tags:["sql","databases"], summary:"SELECT chooses columns FROM a table and returns a new result table, without changing the data.",
    levels:{
     starter:[
      "A **query** is a question written in SQL. The basic shape is `SELECT columns FROM table;`: `SELECT crop, kg FROM harvests;` returns the crop and weight of every harvest. `SELECT *` means every column.",
      "The answer is a fresh table called the result. A SELECT query only reads, so nothing you type can damage the stored data, which makes it safe to experiment.",
      "Keywords aren’t case-sensitive, but writing them in capitals (SELECT, FROM) makes queries easier to read. Spaces and line breaks don’t matter, so long queries are written one clause per line. Commas separate columns; a semicolon ends the statement; `--` starts a comment.",
      "Text values go in single quotes (`'beans'`). Without quotes, SQL thinks you mean a column name."
     ],
     builder:[
      "**Clause order.** Written: `SELECT … FROM … WHERE … GROUP BY … HAVING … ORDER BY … LIMIT …`. Carried out: FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY, LIMIT. This explains several rules: WHERE can’t test totals (they don’t exist yet), and LIMIT only means “top n” after ORDER BY.",
      "**Calculations and names.** SELECT can compute: `kg * 1000 AS grams`. `AS` names a result column (or a table, in joins). `DISTINCT` removes repeated result rows: `SELECT DISTINCT crop` lists each crop once.",
      "**A sneaky mistake.** Leaving out a comma doesn’t always cause an error: `SELECT crop kg FROM harvests` returns one column, named kg, holding the crop names, because a name after a column is read as an alias.",
      "**Case of names.** SQLite (and PostgreSQL, for unquoted names) ignores the case of table and column names, so `select Crop from Harvests` works. Values are another matter: `'Beans'` and `'beans'` are different text in SQLite.",
      "**Reading a result.** Check three things every time: the column headings (are they the ones you asked for?), the number of rows (does it match what you expect?) and a few values you can verify by eye. Most mistakes show up in one of the three before they reach a report.",
      "**Practise** in the Data Lab: run any query with ▶ Run before you check it."
     ],
     pro:[
      "**Quoting identifiers.** Standard SQL uses double quotes for names (`\"plot size\"`) and single quotes for text. SQLite also accepts a double-quoted string as text when no column of that name exists, a compatibility “misfeature” in its own words. A misspelt double-quoted column then silently becomes text (`SELECT \"crops\" FROM harvests` returns the word crops on every row). The sqlite3 command-line program disables this by default since 3.41.0; the library, sql.js and many tools still allow it. PostgreSQL always treats double quotes as names.",
      "**Literals.** Double an apostrophe inside text: `'O''Neill'`. SQLite distinguishes integer and text literals (`3` vs `'3'`), and its flexible typing can make mixed-type comparisons surprising, which is one more reason to store numbers as numbers.",
      "**Reading is safe; writing isn’t.** INSERT, UPDATE and DELETE change data. In DB Browser such changes stay pending until Write Changes; in a program they happen inside transactions. Practise them on a copy.",
      "**Keyword names.** SQLite lets many keywords be used as column names when the meaning is clear; other systems don’t. Avoid names like `order`, `group` or `select` for portability.",
      "**SELECT * in saved work.** It’s ideal for a first look, but name the columns in queries you keep: if someone adds or reorders columns later, a `SELECT *` query silently changes shape, and anything that reads its result by position breaks."
     ]},
    related:["sql-filter-sort","sql-aggregates","relational-databases"], read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “The Select Statement”"}],
    sources:[{t:"SQLite: The SELECT statement", url:"https://www.sqlite.org/lang_select.html"},{t:"SQLite: Quirks, Caveats, and Gotchas In SQLite", url:"https://www.sqlite.org/quirks.html"},{t:"Software Carpentry: Databases and SQL (lesson source on GitHub)", url:"https://github.com/swcarpentry/sql-novice-survey"}], checked:"2026-11"},

   {id:"sql-filter-sort", title:"Filtering and sorting: WHERE, ORDER BY, LIMIT", aka:["WHERE clause","ORDER BY","LIMIT"], tags:["sql","databases"], summary:"WHERE keeps the rows that meet a condition; ORDER BY sorts; LIMIT keeps the first few rows of the sorted result.",
    levels:{
     starter:[
      "**WHERE** keeps only rows that meet a condition: `WHERE crop = 'beans'`, `WHERE kg > 3`. Combine conditions with AND (both true) and OR (either true).",
      "**ORDER BY** sorts the result: `ORDER BY joined DESC` puts the newest members first. ASC (smallest first) is the default.",
      "**LIMIT** keeps the first rows: `ORDER BY kg DESC LIMIT 3` gives the three heaviest harvests.",
      "Two habits prevent most surprises. Put text in single quotes. And always sort when order matters: without ORDER BY, a database may return rows in any order, so “the first three” means nothing.",
      "The database carries these out in a fixed order, whatever order the question is asked in: first it filters (WHERE), then it sorts (ORDER BY), and last it cuts (LIMIT). That’s why LIMIT is written last."
     ],
     builder:[
      "**Comparisons:** `=`, `!=` or `<>`, `<`, `>`, `<=`, `>=`. `IN ('beans', 'kale')` tests a list; `BETWEEN 3 AND 6.5` includes both ends; `LIKE` matches patterns, with `%` for any run of characters and `_` for one character.",
      "**AND before OR.** `crop = 'beans' OR crop = 'kale' AND kg > 2` means beans of any weight, or heavy kale. Use brackets, or IN.",
      "**Case.** In SQLite, `=` on text is exact, so `'Beans'` doesn’t match `beans`; `LIKE` ignores case for the English alphabet’s letters. Store categories consistently and you rarely need tricks.",
      "**Dates as text.** ISO strings (`2026-08`) compare and sort in date order, so `month >= '2026-08'` works.",
      "**Several sort keys:** `ORDER BY crop, kg DESC` sorts by crop, then by weight within each crop. Add a tie-breaker before LIMIT if ties are possible: which tied row makes the cut is otherwise undefined.",
      "**Paging:** `LIMIT 10 OFFSET 20` gives rows 21–30.",
      "**Quotes.** Single quotes for text (`'beans'`); an apostrophe inside text is doubled (`'O''Neill'`). Curly quotes from word processors or phone keyboards aren’t quotes to SQL, so retype them. Double quotes are for names in standard SQL, even though SQLite also accepts them around text.",
      "**Worked example.** “Tomato harvests of at least 5 kg, newest first”: `SELECT kg, month FROM harvests WHERE crop = 'tomatoes' AND kg >= 5 ORDER BY month DESC;` gives 8 kg in 2026-08, then 5.5 kg in 2026-07."
     ],
     pro:[
      "**NULL in filters.** Comparisons with NULL give NULL, and WHERE keeps only true rows. So `plot_id != 3` and `plot_id NOT IN (1, 2)` both drop rows whose plot_id is NULL. Add `OR plot_id IS NULL` when those rows belong in the answer.",
      "**NULL in sorting.** SQLite sorts NULL as smaller than every value (first in ASC, last in DESC); PostgreSQL does the opposite. Both accept `NULLS FIRST` / `NULLS LAST`.",
      "**LIKE in detail.** SQLite’s LIKE folds case only for ASCII letters (`'æ' LIKE 'Æ'` is false) unless built with ICU; `PRAGMA case_sensitive_like` makes it case-sensitive; `GLOB` is a case-sensitive alternative with Unix-style wildcards. PostgreSQL’s LIKE is case-sensitive and adds `ILIKE`.",
      "**Row-limiting dialects.** `LIMIT n` (SQLite, PostgreSQL, MySQL); `SELECT TOP n` (SQL Server); `FETCH FIRST n ROWS ONLY` (the SQL standard; PostgreSQL yes, SQLite no).",
      "**Collations.** Whether text comparison ignores case depends on the collation. SQLite’s default (BINARY) is exact; `COLLATE NOCASE` ignores case for ASCII letters, per column or per comparison. MySQL and SQL Server usually default to case-insensitive collations.",
      "**Undefined order is real.** SQLite’s documentation states that without ORDER BY the order of rows is undefined, and that rows equal on every ORDER BY expression come back in an undefined order. Query plans can change with indexes or versions, so never rely on the order you happened to see."
     ]},
    related:["sql-select","sql-aggregates"], read:[{book:"swc", where:"Databases and SQL → “Sorting and Removing Duplicates” and “Filtering”"}],
    sources:[{t:"SQLite: SQL Language Expressions (LIKE, IS, NULL handling)", url:"https://www.sqlite.org/lang_expr.html"},{t:"SQLite: The SELECT statement (ORDER BY and LIMIT)", url:"https://www.sqlite.org/lang_select.html"},{t:"PostgreSQL documentation: SELECT", url:"https://www.postgresql.org/docs/current/sql-select.html"}], checked:"2026-11"},

   {id:"sql-aggregates", title:"Aggregates, GROUP BY, HAVING and NULL", aka:["GROUP BY","HAVING","COUNT","aggregate functions"], tags:["sql","databases","statistics"], summary:"COUNT, SUM, AVG, MIN and MAX turn many rows into one value; GROUP BY gives one per group; HAVING filters groups; NULLs are skipped.",
    levels:{
     starter:[
      "Aggregate functions summarise many rows: `COUNT(*)` counts rows, `SUM` adds, `AVG` averages, `MIN` and `MAX` find the extremes. `SELECT COUNT(*), SUM(kg) FROM harvests` gives one row: 10 harvests, 46 kg.",
      "**GROUP BY** gives one summary per group: `SELECT crop, SUM(kg) FROM harvests GROUP BY crop` totals each crop. It’s the SQL version of a pivot table.",
      "**HAVING** filters the groups: `HAVING SUM(kg) > 10` keeps crops with big totals. WHERE filters single rows before grouping; HAVING filters groups after.",
      "**NULL** means a value is missing. Aggregates skip it, so `COUNT(plot_id)` counts only members who have a plot. Test for it with `IS NULL`, never `= NULL`.",
      "A good habit: when you report a summary, say what was counted. “4.6 kg per harvest, over 10 harvests” is clearer than “4.6 kg”."
     ],
     builder:[
      "**The GROUP BY rule.** Every SELECT column must be in GROUP BY or inside an aggregate. SQLite doesn’t enforce this and picks a value from one row of each group, which is rarely meaningful. PostgreSQL refuses such queries. Treat SQLite’s leniency as a warning sign.",
      "**WHERE and HAVING together.** `WHERE kg > 3 GROUP BY crop HAVING COUNT(*) >= 2` drops light harvests first, then keeps crops with at least two heavy ones. An aggregate in WHERE fails: SQLite says “misuse of aggregate”.",
      "**NULL rules.** Any comparison with NULL is NULL (unknown), and `NULL + 1` is NULL. `COUNT(*)` counts rows; `COUNT(col)` counts non-NULL values; `COUNT(DISTINCT col)` counts different non-NULL values. AVG divides by the number of non-NULL values: the average of 4, 6 and NULL is 5.",
      "**Empty input.** `SUM` over no rows is NULL; SQLite’s extra `TOTAL()` gives 0. `COALESCE(x, fallback)` replaces NULL for display.",
      "**Rounding:** `ROUND(AVG(kg), 2)` gives 2 decimal places; round only for display, not before further calculation.",
      "**Worked example.** “Months with more than two harvests”: `SELECT month, COUNT(*) FROM harvests GROUP BY month HAVING COUNT(*) > 2;` returns 2026-06 and 2026-07 (3 each). Grouping by two columns (`GROUP BY crop, month`) gives one row per combination.",
      "**Missing-value codes.** Only real NULLs follow these rules. `-999` or `'NA'` are ordinary values to SQL and will be counted or averaged."
     ],
     pro:[
      "**Aliases in HAVING.** SQLite and MySQL allow `HAVING total > 10` after `SUM(kg) AS total`. PostgreSQL rejects it: its documentation says output-column names can be used in ORDER BY and GROUP BY but not in WHERE or HAVING. SQL Server rejects it too. Repeating the aggregate is portable.",
      "**SQLite’s bare-column trick.** With a single MIN() or MAX() aggregate, SQLite fills the other (bare) columns from the row that holds the minimum or maximum, so `SELECT MAX(kg), crop FROM harvests` names the heaviest crop. It’s documented, but no other system we know of guarantees it; use ORDER BY … LIMIT 1 or a join for portable code.",
      "**Types of results.** In SQLite AVG always returns a floating-point value; SUM of integers stays an integer; TOTAL is always floating point. Dividing two integers truncates (`10 / 3` is 3 in SQLite and PostgreSQL), so multiply by 1.0 when you need a fraction.",
      "**Three-valued logic.** NULL makes `NOT IN` dangerous: if the list (or a subquery) contains NULL, `x NOT IN (…)` can never be true. `IS` and `IS NOT` in SQLite (`IS NOT DISTINCT FROM` in standard SQL) compare with NULL safely.",
      "**Report denominators.** “Average of the 40 people who answered” is honest; “average score” over a column with 10 NULLs isn’t."
     ]},
    related:["sql-filter-sort","sql-joins","missing-values","pivot-tables","grouped-summaries"], read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Aggregations” and “Missing Data”"}],
    sources:[{t:"SQLite: Built-in Aggregate Functions", url:"https://www.sqlite.org/lang_aggfunc.html"},{t:"SQLite: The SELECT statement (aggregate queries and bare columns)", url:"https://www.sqlite.org/lang_select.html"},{t:"PostgreSQL documentation: SELECT (GROUP BY and HAVING)", url:"https://www.postgresql.org/docs/current/sql-select.html"}], checked:"2026-11"},

   {id:"sql-joins", title:"Joins", aka:["JOIN","INNER JOIN","LEFT JOIN","outer join"], tags:["sql","databases"], summary:"A join pairs rows from two tables that belong together, usually by matching a foreign key to a primary key.",
    levels:{
     starter:[
      "Related tables store pointers, not copies: a harvest stores `member_id`, not the member’s name. A **join** puts matching rows side by side so you can see both.",
      "`FROM harvests JOIN members ON harvests.member_id = members.id` pairs each harvest with its member. The `ON` part is the matching rule.",
      "An ordinary (inner) join keeps only rows that find a partner. A **LEFT JOIN** keeps every row of the first table, and fills in NULL where nothing matches, which is how you find members with no plot.",
      "It’s the database version of a spreadsheet lookup, but it works on whole tables at once and is written in the query, not pasted into the data.",
      "Always count the rows a join returns. If it’s more or fewer than you expected, the matching rule needs a second look."
     ],
     builder:[
      "**The model.** Pair every row of table A with every row of table B, then keep the pairs where ON is true. With no ON you get every pairing (a Cartesian product: 6 members × 10 harvests = 60 rows).",
      "**Table prefixes and aliases.** `m.name` and `h.kg` say which table a column comes from; `FROM harvests AS h` sets the alias. Prefixes are required when both tables share a name (both have `id`), or SQLite reports “ambiguous column name”.",
      "**Check row counts.** Harvests joined to members should have as many rows as harvests. A wrong ON (say `harvests.id = members.id`) runs without error but pairs unrelated rows.",
      "**LEFT JOIN details.** Table order matters: the left table is kept whole. `WHERE right.id IS NULL` keeps only the unmatched rows. A condition on the right table in WHERE removes the NULL rows again; put it in ON if unmatched rows should stay.",
      "**Several joins.** harvests → members → plots needs two joins. An inner join at any step can drop rows (a member with no plot), so compare totals with the unjoined table: on the garden data, bed totals from inner joins add up to 35.5 kg, against 46 kg harvested, because Eitan’s 10.5 kg has no bed.",
      "**Join, then group.** Group by the key as well as the label (`GROUP BY m.id, m.name`) so two people with the same name stay separate."
     ],
     pro:[
      "**Fan-out.** When the “many” side repeats, values from the “one” side repeat with it: summing plot area after joining plots to harvests counts each plot once per harvest (56 m² instead of 33). Aggregate each table at its own level, or aggregate first and join afterwards.",
      "**COUNT after a left join.** `COUNT(*)` counts the NULL-filled row as 1; `COUNT(right.id)` counts real matches (0 for none).",
      "**Other join forms.** `RIGHT JOIN` and `FULL OUTER JOIN` arrived in SQLite 3.39.0 (2022). `NATURAL JOIN` matches every column with the same name, which in schemas where every table has `id` means matching the wrong columns: avoid it. `USING (col)` is a shorthand when the key has the same name in both tables.",
      "**Comma joins.** `FROM a, b WHERE a.x = b.y` is an older spelling of an inner join; SQLite treats `,`, `JOIN` and `INNER JOIN` identically. Explicit JOIN … ON keeps matching rules separate from filters.",
      "**Joins in other tools.** The same ideas appear as merges in R (`merge()`, or [[dplyr]]’s `left_join()`) and in Python’s pandas (`merge`), and as relationships in spreadsheet data models. Inner versus left, and fan-out, work identically there.",
      "**Keys make joins trustworthy.** Declared foreign keys (`REFERENCES`) stop orphans, but SQLite only checks them after `PRAGMA foreign_keys = ON` on each connection."
     ]},
    related:["sql-aggregates","database-design","lookup-functions"], read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Joins”"}],
    sources:[{t:"SQLite: The SELECT statement (join processing, LEFT JOIN and ON vs WHERE)", url:"https://www.sqlite.org/lang_select.html"},{t:"Data Carpentry: Data Management with SQL for Social Scientists, episode “Joins” (lesson source on GitHub)", url:"https://github.com/datacarpentry/sql-socialsci"},{t:"Software Carpentry: Databases and SQL, episode “Combining Data” (lesson source on GitHub)", url:"https://github.com/swcarpentry/sql-novice-survey"}], checked:"2026-11"},

   {id:"sqlite-tools", title:"SQLite and DB Browser for SQLite", aka:["DB Browser","DB4S","sqlitebrowser","SQL injection"], tags:["sql","databases","tools","security"], summary:"SQLite keeps a whole database in one file; DB Browser for SQLite is a free desktop app to browse it, run SQL and import CSVs. Programs must use placeholders.",
    levels:{
     starter:[
      "**SQLite** is a free database engine that keeps a whole database in a single file (often .sqlite or .db). There’s no server to install; the engine is built into the app that uses it, which is why it’s inside phones and web browsers.",
      "**DB Browser for SQLite** is a free, open-source app for Windows, macOS and Linux. It shows tables like a spreadsheet, runs SQL in its **Execute SQL** tab, and imports and exports CSV files. Changes are saved only when you click **Write Changes**.",
      "On a phone, use this app’s **Data Lab**, which runs SQLite in the browser.",
      "Programs that use databases must never paste typed text straight into SQL. They use **placeholders**, so a name like O’Neill (or a malicious input) can’t break or change the query."
     ],
     builder:[
      "**Installing DB Browser.** Windows: the installer from sqlitebrowser.org/dl (or winget). macOS: the .dmg from the same page (or Homebrew). Linux: the distribution’s own package (`sqlitebrowser` in Debian, Ubuntu, Fedora and others; often an older version), the Snap or the AppImage, all listed on the download page. ChromeOS: turn on the Linux development environment, then `sudo apt install sqlitebrowser`. The latest stable release when checked was 3.13.1 (October 2024).",
      "**Its tabs.** Database Structure (tables and columns), Browse Data (rows and filters), Edit Pragmas (settings), Execute SQL (run queries with ▶, or [[kbd:Ctrl]] + [[kbd:Enter]]). Write Changes saves; Revert Changes goes back to the last save.",
      "**Importing a CSV.** File → Import → Table from CSV file…; set the table name, “Column names in first line”, the separator and the encoding. DB Browser guesses INTEGER, REAL or TEXT for each column, and empty cells become NULL in a new table. Check the types in Database Structure and fix them with Modify Table…; numbers stored as text sort wrongly (9 after 70).",
      "**Exporting.** File → Export → Table(s) as CSV file… (JSON and SQL dumps are also offered), or save a query’s results from Execute SQL.",
      "**Other routes.** The sqlite3 command-line program; Python’s built-in sqlite3 module; R’s DBI and RSQLite packages.",
      "**Habits.** Keep a copy of the database file before big changes, keep useful queries in a text file (Execute SQL can save and open .sql files), and write down where imported data came from."
     ],
     pro:[
      "**SQL injection.** If a program builds SQL by joining strings with user input, crafted input can change the query’s structure. OWASP’s SQL Injection Prevention Cheat Sheet names parameterised queries (prepared statements) as the first primary defence, adds least privilege for the database account, and strongly discourages relying on hand-made escaping. In Python’s sqlite3: `con.execute(\"SELECT id FROM members WHERE name = ?\", (name,))`. Placeholders bind values only; table or column names that vary must come from a fixed list the program controls.",
      "**Foreign keys** are off by default in SQLite itself; in code you run `PRAGMA foreign_keys = ON;` per connection (it has no effect inside an open transaction). DB Browser for SQLite opens databases with foreign keys enabled by default (a Preferences setting), so the same file can refuse a row in DB Browser that another program accepts.",
      "**Double-quoted strings.** Library builds of SQLite (including sql.js) still accept `\"text\"` as a string when no column matches; the sqlite3 CLI has disabled this by default since 3.41.0. Write single quotes so your SQL behaves the same everywhere.",
      "**Files and safety.** An SQLite file is easy to copy, which makes backups simple and leaks easy too: a database of members’ details is personal data, so store and share it accordingly.",
      "**Versions.** Features such as RIGHT/FULL JOIN (3.39.0), STRICT tables (3.37.0) and concat() (3.44.0) depend on the SQLite version built into each tool."
     ]},
    related:["relational-databases","database-design","csv-files"], read:[{book:"dcss", where:"Data Management with SQL for Social Scientists → “Using DB Browser for SQLite” and “Creating tables and views”"}],
    sources:[{t:"DB Browser for SQLite (project source and install notes on GitHub)", url:"https://github.com/sqlitebrowser/sqlitebrowser"},{t:"OWASP Cheat Sheet Series: SQL Injection Prevention Cheat Sheet", url:"https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"},{t:"SQLite: Foreign Key Support", url:"https://www.sqlite.org/foreignkeys.html"}], checked:"2026-11"},

   {id:"database-design", title:"Good table design (normalisation)", aka:["normalisation","normalization","normal forms","schema design"], tags:["data","databases","data management"], summary:"Store each fact once, in the table where it belongs: atomic values, a key for every row, no redundant copies, explicit units.",
    levels:{
     starter:[
      "Good table design means **each fact is stored once, in the one place it belongs**. This is called normalisation.",
      "A single spreadsheet of harvests that repeats each member’s joining year and bed on every row seems convenient, but a change must be made on every row, and a missed row makes the data contradict itself. Splitting it into members, plots and harvests, linked by IDs, means a correction happens in one place.",
      "Four practical rules from Software Carpentry: keep values **atomic** (one value per cell); give every record a **primary key**; store **no redundant information**; and store **units explicitly** (a column called `kg`, not “2.5 kg” in the cells).",
      "When you need one wide table for a chart, build it with a query instead of storing it twice."
     ],
     builder:[
      "**Design steps.** List the kinds of thing (members, plots, harvests, work days). Give each a table with an `id`. Put each property in the table of the thing it describes: bed belongs to the plot, not the member. Link one-to-many relationships with a foreign key on the “many” side.",
      "**Many-to-many** relationships (members and work days) need a linking table, such as `attendance(member_id, workday_id)` with a two-column primary key so that no pair is stored twice.",
      "**Normal forms in plain words.** First: one value per cell, no repeating groups (crop1, crop2). Second: in a table with a two-part key, every other column depends on the whole key. Third: every other column depends only on the key, not on another non-key column (bed depends on the plot, so it doesn’t belong in members).",
      "**Rules in the schema.** Types, `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `CHECK` and `REFERENCES` let the database refuse bad rows. In SQLite, add `STRICT` for type checks and turn on foreign keys.",
      "**Names.** Lower case with underscores (`size_m2`), no spaces, no reserved words; record meanings and units in a data dictionary.",
      "**A quick test.** For each column, ask “what is this a fact about?”. If the answer isn’t the thing the table’s rows stand for (a member’s joining year in a harvests table), the column belongs in another table. And ask whether any change would have to be made in more than one row; if so, a fact is stored twice."
     ],
     pro:[
      "**Normalise for storage, reshape for analysis.** Analysis tools often want one wide (or long) table. A `VIEW` stores the joining query, not the data, so it never goes stale. Data Carpentry’s lesson suggests naming views so they’re recognisable (for example a v prefix).",
      "**When to break the rules.** Data warehouses and published datasets are often deliberately denormalised for speed or convenience; that’s fine when the copy is generated from a normalised source and never edited by hand.",
      "**Keys.** Surrogate keys (meaningless integers) survive name changes; natural keys (a national ID, an ISBN) can change, repeat (two copies of one book share an ISBN) or be sensitive personal data. Composite keys suit linking tables.",
      "**Constraints as documentation.** `CHECK (kg > 0)` or `CHECK (bed IN ('North', 'South', 'East'))` both prevents bad rows and tells the next person what the data may contain. Like validation in a spreadsheet, it’s cheapest to add before data arrives.",
      "**History.** If values change over time (a member moves plot), decide whether you need the history. Overwriting loses it; a table of plot assignments with start and end dates keeps it.",
      "**Missing data.** Use NULL for unknown values rather than codes like -999, and decide per column whether NULL is allowed (`NOT NULL`). Units, codes and NULL meanings belong in documentation, as Unit 2’s data dictionaries showed."
     ]},
    related:["relational-databases","sql-joins","tidy-data-principles","data-dictionaries"], read:[{book:"swc", where:"Databases and SQL → “Data Hygiene”"}],
    sources:[{t:"Software Carpentry: Databases and SQL, episode “Data Hygiene” (lesson source on GitHub)", url:"https://github.com/swcarpentry/sql-novice-survey"},{t:"Data Carpentry: Data Management with SQL for Social Scientists, episode “Creating tables and views” (lesson source on GitHub)", url:"https://github.com/datacarpentry/sql-socialsci"},{t:"SQLite: STRICT Tables", url:"https://www.sqlite.org/stricttables.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"database", term:"Database", def:"An organised collection of data that a program can search, change and combine. In this unit, a set of related tables.", codex:"relational-databases"},
   {id:"table-db", term:"Table (database)", def:"A named set of rows that all have the same columns, holding one kind of thing, such as members or harvests.", codex:"relational-databases"},
   {id:"row-record", term:"Row (record)", def:"One entry in a table, such as one member or one harvest. Also called a record.", codex:"relational-databases"},
   {id:"column-field", term:"Column (field)", def:"One named property in a table, with the same kind of value in every row, such as kg. Also called a field.", codex:"relational-databases"},
   {id:"primary-key", term:"Primary key", def:"A column (or set of columns) whose value is unique for every row and identifies it, such as members.id. The spreadsheet version is a key column.", codex:"relational-databases"},
   {id:"foreign-key", term:"Foreign key", def:"A column holding another table’s primary key, which links the two tables, such as harvests.member_id pointing at members.id.", codex:"sql-joins"},
   {id:"sql", term:"SQL", def:"Structured Query Language: the standard language for asking relational databases questions and changing their data.", codex:"sql-select"},
   {id:"select-query", term:"SELECT query", def:"An SQL statement that reads data and returns a result table, without changing anything stored.", codex:"sql-select"},
   {id:"where-clause", term:"WHERE clause", def:"The part of a query that keeps only rows meeting a condition, such as WHERE kg > 3.", codex:"sql-filter-sort"},
   {id:"group-by-sql", term:"GROUP BY", def:"An SQL clause that sorts rows into groups sharing a value, so aggregates such as SUM give one result per group.", codex:"sql-aggregates"},
   {id:"join", term:"Join", def:"Combining rows from two tables that belong together, matched by a rule such as harvests.member_id = members.id.", codex:"sql-joins"},
   {id:"sqlite", term:"SQLite", def:"A small, free database engine that keeps a whole database in one file and runs inside the app using it. It’s built into phones and web browsers.", codex:"sqlite-tools"},
   {id:"null-sql", term:"NULL", def:"SQL’s marker for a missing or unknown value. It isn’t zero or empty text; nothing equals NULL, so you test for it with IS NULL.", codex:"sql-aggregates"},
   {id:"dbms", term:"Database management system (DBMS)", def:"The software that stores databases and runs queries on them, such as SQLite, PostgreSQL, MySQL or SQL Server.", codex:"relational-databases"},
   {id:"schema-db", term:"Schema", def:"The description of a database’s structure: its tables, their columns and types, keys and rules, written in SQL with CREATE TABLE.", codex:"database-design"},
   {id:"aggregate-function", term:"Aggregate function", def:"A function that turns many rows into one value: COUNT, SUM, AVG, MIN or MAX.", codex:"sql-aggregates"},
   {id:"having-sql", term:"HAVING", def:"An SQL clause that filters groups after GROUP BY, such as HAVING SUM(kg) > 10. WHERE filters single rows before grouping.", codex:"sql-aggregates"},
   {id:"left-join", term:"LEFT JOIN", def:"A join that keeps every row of the first (left) table, filling the other table’s columns with NULL where nothing matches.", codex:"sql-joins"},
   {id:"normalisation", term:"Normalisation", def:"Designing tables so each fact is stored once, in the table where it belongs, with keys linking the tables. Also spelt normalization.", codex:"database-design"},
   {id:"sql-dialect", term:"SQL dialect", def:"One database system’s version of SQL. The core is shared, but details differ, such as LIMIT in SQLite and TOP in SQL Server.", codex:"sql-filter-sort"},
   {id:"sql-injection", term:"SQL injection", def:"An attack on a program that pastes typed text straight into SQL, where crafted text changes what the query does.", codex:"sqlite-tools"},
   {id:"parameterised-query", term:"Parameterised query", def:"A query written with placeholders (such as ?) whose values are sent separately, so typed text is always treated as data, never as SQL. Also called a prepared statement.", codex:"sqlite-tools"}
  ],
  bank:[
   /* ---------- Lesson 1 ---------- */
   {id:"t3u9-q01", lesson:"t3u9-l1", level:1, q:"What is a foreign key?", options:[
     {t:"A column that holds another table’s primary key, linking the two tables", ok:true, why:"Yes. harvests.member_id holds members.id values, so each harvest points at its member."},
     {t:"A column that must be unique in its own table", why:"That describes a primary key. A foreign key usually repeats (many harvests point at the same member)."},
     {t:"A password that protects the database", why:"Keys in databases are columns, not passwords."},
     {t:"A column copied from a spreadsheet in another language", why:"“Foreign” means it refers to another table, not another language."}]},
   {id:"t3u9-q02", lesson:"t3u9-l1", level:1, q:"In the garden database, what does one row of the harvests table stand for?", options:[
     {t:"One harvest: one crop picked by one member in one month", ok:true, why:"Each row is one record of the thing the table holds."},
     {t:"One member and all their harvests", why:"Members are in their own table; each of their harvests is a separate row."},
     {t:"One crop, with its total weight", why:"Totals are calculated by queries (GROUP BY), not stored as rows."},
     {t:"One column of weights", why:"A column runs down the table; a row runs across it."}]},
   {id:"t3u9-q03", lesson:"t3u9-l1", level:2, q:"Kenji’s book club keeps one spreadsheet of loans, with the borrower’s name and phone number typed on every loan row. What’s the main problem a database design would fix?", options:[
     {t:"Each borrower’s details are repeated, so a changed phone number must be fixed on many rows, and missed rows will disagree", ok:true, why:"Redundancy invites contradictions. A members table stores each phone number once; loans store a member_id."},
     {t:"Spreadsheets can’t store phone numbers", why:"They can (as text, to keep leading zeros). The problem is the repetition."},
     {t:"The sheet will soon pass a million rows", why:"A book club is nowhere near the limit; the problem is consistency, not size."},
     {t:"Names can’t be sorted in a spreadsheet", why:"They can. Sorting isn’t the issue."}]},
   {id:"t3u9-q04", lesson:"t3u9-l1", level:3, q:"Lucía designs a database for her café: a customers table (id, name, email) and an orders table. How should each order record which customer placed it?", options:[
     {t:"An orders.customer_id column holding the customer’s id", ok:true, why:"A foreign key on the “many” side (orders) pointing at the primary key of customers."},
     {t:"Copy the customer’s name and email into every order", why:"That repeats facts. If an email changes, old orders would show the old one, or need fixing one by one."},
     {t:"A customers.order_id column", why:"A customer can place many orders, and one column can’t hold many ids. The link goes on the orders side."},
     {t:"Give the order the same id as the customer", why:"Then each customer could only ever have one order, and ids would collide."}]},
   {id:"t3u9-q05", lesson:"t3u9-l1", level:2, q:"What is the main design difference between SQLite and PostgreSQL?", options:[
     {t:"SQLite runs inside the app and keeps the database in one file; PostgreSQL runs as a server that clients connect to", ok:true, why:"That’s why SQLite fits in phones and browsers, and why busy multi-user systems usually pick a server database."},
     {t:"SQLite doesn’t understand SQL", why:"It does; you use SQL with it throughout this unit."},
     {t:"PostgreSQL is a spreadsheet program", why:"PostgreSQL is a relational database system."},
     {t:"SQLite can only hold one table", why:"An SQLite file can hold many tables, as the garden database does."}]},
   {id:"t3u9-q06", lesson:"t3u9-l1", level:3, q:"A library’s table lists its physical copies of books; it owns three copies of some titles. Which makes the best primary key?", options:[
     {t:"A copy id number given to each physical copy", ok:true, why:"It’s unique per row and never changes. Title, author and ISBN repeat across copies."},
     {t:"The ISBN", why:"Copies of the same edition share an ISBN, so it isn’t unique in a table of copies (it fits a table of titles instead)."},
     {t:"The title", why:"Titles repeat across copies and editions, and different books can share a title."},
     {t:"The author’s name", why:"Most authors have more than one book, and many copies."}]},
   {id:"t3u9-q07", lesson:"t3u9-l1", level:3, q:"Tomás keeps a 60-row list of his workshop’s tools in a spreadsheet that only he uses. A friend says he must move it into a database. What’s the most sensible advice?", options:[
     {t:"A spreadsheet is fine for a small single table that one person keeps", ok:true, why:"Databases pay off with linked tables, many users, rules that must hold or large data. None applies here."},
     {t:"Move it: spreadsheets can’t hold more than 50 rows", why:"Spreadsheets hold far more than that (Excel allows 1,048,576 rows per sheet)."},
     {t:"Move it: databases are always better", why:"They’re better for some jobs. For a small personal list a spreadsheet is quicker and simpler."},
     {t:"Move it, because spreadsheets can’t be backed up", why:"Spreadsheet files can be backed up like any other file."}]},
   {id:"t3u9-q08", lesson:"t3u9-l1", level:2, q:"In SQLite, inserting the text 'soon' into an INTEGER column worked without an error. Why?", options:[
     {t:"SQLite uses flexible typing: declared types are preferences unless the table is STRICT", ok:true, why:"Right. Most other systems, such as PostgreSQL, reject it; STRICT tables make SQLite reject it too."},
     {t:"SQLite turned 'soon' into the number 0", why:"In our test it stored the text 'soon' itself, unchanged."},
     {t:"INTEGER means text in SQLite", why:"INTEGER means whole numbers. SQLite just doesn’t force it on ordinary tables."},
     {t:"The insert silently failed", why:"The row was stored; selecting it showed 'soon' with type text."}]},
   {id:"t3u9-q09", lesson:"t3u9-l1", level:1, q:"What is a database’s schema?", options:[
     {t:"The description of its tables: names, columns, types, keys and rules", ok:true, why:"It’s written in SQL with CREATE TABLE, and the database checks rows against it."},
     {t:"A diagram of the computer it runs on", why:"The schema describes the data’s structure, not the hardware."},
     {t:"A backup copy of the data", why:"A backup copies data; a schema describes its structure."},
     {t:"The list of people allowed to use it", why:"That’s about permissions, not the structure of the tables."}]},

   /* ---------- Lesson 2 ---------- */
   {id:"t3u9-q10", lesson:"t3u9-l2", level:1, q:"In `SELECT crop, kg FROM harvests;`, what does FROM do?", options:[
     {t:"Names the table to read from", ok:true, why:"FROM chooses the table; SELECT chooses the columns."},
     {t:"Chooses which rows to keep", why:"That’s WHERE."},
     {t:"Sorts the result", why:"That’s ORDER BY."},
     {t:"Copies the data into a new table", why:"A SELECT only reads and returns a result; nothing is copied or stored."}]},
   {id:"t3u9-q11", lesson:"t3u9-l2", level:2, q:"`SELECT * FROM harvests WHERE crop = 'Beans';` returns no rows, although there are beans harvests. Why?", options:[
     {t:"In SQLite, = compares text exactly, and the data says beans with a small b", ok:true, why:"Write 'beans'. (LIKE would ignore the case of English letters, but matching the stored spelling is the clean fix.)"},
     {t:"Text must be in double quotes", why:"Single quotes are correct for text in SQL."},
     {t:"WHERE only works with numbers", why:"WHERE works with text too: crop = 'beans' finds three rows."},
     {t:"The table name should be capitalised", why:"SQLite ignores the case of table names; the issue is the value."}]},
   {id:"t3u9-q12", lesson:"t3u9-l2", level:2, q:"What does `SELECT name FROM members WHERE joined >= 2023 ORDER BY joined;` return on the garden database?", options:[
     {t:"Dana, Bilal, Fatou", ok:true, why:"Dana 2023, Bilal 2024 and Fatou 2025 joined in 2023 or later; ascending order puts the earliest first."},
     {t:"Fatou, Bilal, Dana", why:"That’s descending order (DESC). Without DESC, ORDER BY sorts smallest first."},
     {t:"Bilal, Fatou", why:">= includes 2023, so Dana belongs in the result."},
     {t:"Chen, Eitan, Ama", why:"Those members joined before 2023."}]},
   {id:"t3u9-q13", lesson:"t3u9-l2", level:3, q:"Oluwaseun wants the five most recent sign-ups and writes `SELECT * FROM signups LIMIT 5;`. What’s wrong?", options:[
     {t:"Without ORDER BY signup_date DESC, the five rows are in no guaranteed order", ok:true, why:"LIMIT cuts whatever order the rows arrive in. Sort first: ORDER BY signup_date DESC LIMIT 5."},
     {t:"LIMIT doesn’t exist in SQL", why:"LIMIT works in SQLite, PostgreSQL and MySQL. (SQL Server uses TOP.)"},
     {t:"LIMIT must come before FROM", why:"LIMIT is written last."},
     {t:"Nothing: LIMIT always returns the newest rows", why:"Nothing makes the newest rows come first unless you sort."}]},
   {id:"t3u9-q14", lesson:"t3u9-l2", level:2, q:"SQLite says “no such column: beans” for `SELECT * FROM harvests WHERE crop = beans;`. What’s the fix?", options:[
     {t:"Put the text in single quotes: crop = 'beans'", ok:true, why:"Without quotes, SQL reads beans as a column name."},
     {t:"Add a column called beans", why:"That would hide the mistake. beans is a value, not a column."},
     {t:"Use == instead of =", why:"SQLite accepts == as well, but the missing quotes are the problem."},
     {t:"Write BEANS in capitals", why:"Unquoted, it’s still read as a column name, and the stored value is lower case."}]},
   {id:"t3u9-q15", lesson:"t3u9-l2", level:3, q:"Mei copies a query from a word-processor document and gets “no such column: ‘kale’”. The query looks right. What’s the most likely cause?", options:[
     {t:"The quotes are curly (‘ ’), which SQL doesn’t accept; retype them as straight ' quotes", ok:true, why:"Word processors and some keyboards convert quotes. SQL only recognises the straight apostrophe."},
     {t:"There is no kale in the table", why:"Then the query would run and return no rows, not report a missing column."},
     {t:"kale must be in capitals", why:"Case would change which rows match, not cause a column error."},
     {t:"The query needs a semicolon at the start", why:"Semicolons end statements; they don’t cause this error."}]},
   {id:"t3u9-q16", lesson:"t3u9-l2", level:1, q:"Which weights does `WHERE kg BETWEEN 3 AND 5` keep?", options:[
     {t:"From 3 to 5, including 3 and 5", ok:true, why:"BETWEEN is inclusive at both ends: the same as kg >= 3 AND kg <= 5."},
     {t:"More than 3 and less than 5", why:"That would exclude the end values; BETWEEN includes them."},
     {t:"Only exactly 3 and exactly 5", why:"That would be kg IN (3, 5)."},
     {t:"Anything except 3 to 5", why:"That would be NOT BETWEEN."}]},
   {id:"t3u9-q17", lesson:"t3u9-l2", level:2, q:"How many rows does `SELECT DISTINCT crop FROM harvests;` return on the garden database?", options:[
     {t:"4", ok:true, why:"Beans, kale, squash and tomatoes: each different value once."},
     {t:"10", why:"That’s without DISTINCT, one row per harvest."},
     {t:"1", why:"DISTINCT keeps one row per different value, not one row in total."},
     {t:"3", why:"There are four different crops; count them in the harvests table."}]},
   {id:"t3u9-q18", lesson:"t3u9-l2", level:3, q:"Dmitri’s query `SELECT * FROM members WHERE name = \"Ama\";` works in SQLite but fails on PostgreSQL with “column \"Ama\" does not exist”. Why?", options:[
     {t:"Double quotes mean a name in standard SQL; SQLite only treats them as text when no column matches", ok:true, why:"Use single quotes for text ('Ama'); that works everywhere."},
     {t:"PostgreSQL has no WHERE clause", why:"It does. The quotes are the problem."},
     {t:"Names must be in capitals in PostgreSQL", why:"Case isn’t the issue; the double quotes are."},
     {t:"PostgreSQL doesn’t allow text comparisons", why:"It does, with single-quoted text."}]},

   /* ---------- Lesson 3 ---------- */
   {id:"t3u9-q19", lesson:"t3u9-l3", level:1, q:"What’s the difference between COUNT(*) and COUNT(plot_id)?", options:[
     {t:"COUNT(*) counts rows; COUNT(plot_id) counts rows where plot_id isn’t NULL", ok:true, why:"On the garden members table they give 6 and 5."},
     {t:"There is no difference", why:"They differ whenever the column has NULLs."},
     {t:"COUNT(plot_id) adds up the plot numbers", why:"Adding is SUM. COUNT counts values."},
     {t:"COUNT(*) counts only the first column", why:"COUNT(*) counts whole rows, whatever is in them."}]},
   {id:"t3u9-q20", lesson:"t3u9-l3", level:2, q:"In the result of `SELECT crop, SUM(kg) FROM harvests GROUP BY crop;`, what is squash’s total? (Squash harvests: 10.5 kg and 6.5 kg.)", options:[
     {t:"17", ok:true, why:"10.5 + 6.5 = 17, in one row for the squash group."},
     {t:"8.5", why:"That’s the average (AVG), not the total."},
     {t:"2", why:"That’s the number of squash harvests (COUNT)."},
     {t:"46", why:"That’s the total of all crops, without grouping."}]},
   {id:"t3u9-q21", lesson:"t3u9-l3", level:2, q:"Which query lists beds that have more than one plot?", options:[
     {t:"`SELECT bed, COUNT(*) FROM plots GROUP BY bed HAVING COUNT(*) > 1;`", ok:true, why:"Group by bed, count, then filter the groups with HAVING. It returns North 2 and South 2."},
     {t:"`SELECT bed, COUNT(*) FROM plots WHERE COUNT(*) > 1 GROUP BY bed;`", why:"An aggregate can’t go in WHERE: SQLite says “misuse of aggregate”."},
     {t:"`SELECT bed FROM plots WHERE id > 1;`", why:"That tests plot numbers, not how many plots each bed has."},
     {t:"`SELECT bed, COUNT(*) FROM plots HAVING COUNT(*) > 1 GROUP BY bed;`", why:"HAVING must come after GROUP BY."}]},
   {id:"t3u9-q22", lesson:"t3u9-l3", level:3, q:"Amara’s survey table has 50 people; 10 left the score question blank, stored as NULL. What does `SELECT AVG(score) FROM survey;` give?", options:[
     {t:"The average of the 40 scores that were given", ok:true, why:"AVG skips NULLs. Report it as “average of the 40 people who answered”."},
     {t:"The total of the 40 scores divided by 50", why:"That would treat blanks as zeros. AVG divides by the number of non-NULL values."},
     {t:"NULL, because some values are NULL", why:"AVG ignores NULLs; it’s only NULL if every value is NULL."},
     {t:"An error", why:"NULLs are normal; AVG handles them by skipping them."}]},
   {id:"t3u9-q23", lesson:"t3u9-l3", level:1, q:"Which condition finds members whose plot_id is missing?", options:[
     {t:"WHERE plot_id IS NULL", ok:true, why:"IS NULL is the test for a missing value."},
     {t:"WHERE plot_id = NULL", why:"Comparing with NULL gives “unknown”, so no row ever matches."},
     {t:"WHERE plot_id = 'NULL'", why:"That looks for the text NULL, which is a different thing from a missing value."},
     {t:"WHERE plot_id = 0", why:"Zero is a value; NULL means there is no value."}]},
   {id:"t3u9-q24", lesson:"t3u9-l3", level:3, q:"Sione writes `SELECT crop, SUM(kg) FROM harvests WHERE SUM(kg) > 10 GROUP BY crop;` and SQLite says “misuse of aggregate: SUM()”. What should he change?", options:[
     {t:"Move the condition after GROUP BY as HAVING SUM(kg) > 10", ok:true, why:"WHERE runs before groups exist, so it can’t test totals. HAVING filters groups."},
     {t:"Use AVG instead of SUM", why:"Any aggregate in WHERE gives the same error."},
     {t:"Put 10 in quotes", why:"10 is a number; quoting it doesn’t fix where the condition is."},
     {t:"Remove GROUP BY", why:"Then there would be no per-crop totals at all."}]},
   {id:"t3u9-q25", lesson:"t3u9-l3", level:2, q:"What does `SELECT SUM(kg) FROM harvests WHERE crop = 'peas';` return, given there are no peas?", options:[
     {t:"NULL", ok:true, why:"SUM of no rows is NULL in standard SQL. SQLite’s TOTAL() would give 0."},
     {t:"0", why:"That’s what SQLite’s TOTAL() or COALESCE(SUM(kg), 0) would give; plain SUM gives NULL."},
     {t:"An error", why:"An empty result is normal; the query runs."},
     {t:"No row at all", why:"An aggregate without GROUP BY always returns one row, here holding NULL."}]},
   {id:"t3u9-q26", lesson:"t3u9-l3", level:3, q:"A dataset imported from another system marks missing ages as -999. Fatima runs `SELECT AVG(age) FROM people;`. What’s the risk?", options:[
     {t:"SQL treats -999 as a real age, so it drags the average down", ok:true, why:"Only NULL is skipped. Convert the code to NULL first, or exclude it with WHERE age <> -999."},
     {t:"None: AVG skips -999 automatically", why:"AVG skips only NULL. -999 is an ordinary number to SQL."},
     {t:"The query fails", why:"It runs and gives a wrong answer, which is worse."},
     {t:"AVG treats -999 as zero", why:"It uses the value -999 itself."}]},
   {id:"t3u9-q27", lesson:"t3u9-l3", level:2, q:"In SQLite, `SELECT crop, month, SUM(kg) FROM harvests GROUP BY crop;` runs. What does the month column show?", options:[
     {t:"One month per crop, taken from a single row of that group", ok:true, why:"month isn’t grouped or aggregated, so SQLite picks one row’s value. PostgreSQL would refuse the query."},
     {t:"Every month for that crop", why:"Each group gives one row, so there’s room for only one month."},
     {t:"The latest month for each crop", why:"Only MAX(month) would guarantee that."},
     {t:"An error message", why:"Many databases would give an error; SQLite doesn’t."}]},

   /* ---------- Lesson 4 ---------- */
   {id:"t3u9-q28", lesson:"t3u9-l4", level:1, q:"What does an inner JOIN … ON keep?", options:[
     {t:"Only pairs of rows that meet the ON condition", ok:true, why:"Rows without a partner in the other table are dropped."},
     {t:"Every row of both tables", why:"That’s a full outer join (with NULLs filled in)."},
     {t:"Every row of the first table, with NULLs where nothing matches", why:"That’s a LEFT JOIN."},
     {t:"Every possible pairing", why:"That’s what you get with no ON at all."}]},
   {id:"t3u9-q29", lesson:"t3u9-l4", level:2, q:"How many rows does `SELECT m.name, p.bed FROM members AS m LEFT JOIN plots AS p ON m.plot_id = p.id;` return on the garden database?", options:[
     {t:"6", ok:true, why:"Every member is kept; Eitan’s bed is NULL."},
     {t:"5", why:"That’s the inner join, which drops Eitan."},
     {t:"30", why:"That would be every pairing of 6 members and 5 plots, with no ON."},
     {t:"11", why:"Joins don’t add the tables’ row counts together."}]},
   {id:"t3u9-q30", lesson:"t3u9-l4", level:3, q:"Fatima runs a bakery database. She writes `SELECT c.name FROM customers AS c LEFT JOIN orders AS o ON o.customer_id = c.id WHERE o.id IS NULL;`. What does it list?", options:[
     {t:"Customers who have never placed an order", ok:true, why:"The left join keeps every customer; WHERE o.id IS NULL keeps only those with no matching order."},
     {t:"Orders with no customer", why:"customers is the left table, so the unmatched rows are customers."},
     {t:"Every customer, once per order", why:"The WHERE filter removes everyone who has an order."},
     {t:"Nothing, because IS NULL never matches after a join", why:"A left join creates NULLs exactly where there’s no match, so IS NULL finds them."}]},
   {id:"t3u9-q31", lesson:"t3u9-l4", level:2, q:"SQLite reports “ambiguous column name: id” for a join of harvests and members. What’s the fix?", options:[
     {t:"Say which table: members.id (or m.id with an alias)", ok:true, why:"Both tables have an id column, so SQLite needs the table name."},
     {t:"Rename the id columns to ID", why:"SQLite ignores the case of names, so it would still be ambiguous; and renaming isn’t needed."},
     {t:"Use LEFT JOIN instead", why:"The join type doesn’t change which id you mean."},
     {t:"Remove the ON condition", why:"Then every row would pair with every row."}]},
   {id:"t3u9-q32", lesson:"t3u9-l4", level:3, q:"Priya joins orders (one row per order, with a delivery fee) to order_items (one row per item) and sums the delivery fees. The total is far higher than the fees really charged. Why?", options:[
     {t:"Each order’s fee is repeated once per item, so it’s added several times", ok:true, why:"Fan-out. Sum fees from the orders table on its own, or summarise items first and join afterwards."},
     {t:"SUM doesn’t work after a join", why:"SUM works; it adds the repeated rows the join produced."},
     {t:"The join dropped some orders", why:"Dropping rows would make the total smaller, not larger."},
     {t:"Fees must be stored as text", why:"Text would make sums wrong in other ways; numbers are right. The repetition is the problem."}]},
   {id:"t3u9-q33", lesson:"t3u9-l4", level:1, q:"In `FROM harvests AS h JOIN members AS m ON h.member_id = m.id`, what are h and m?", options:[
     {t:"Short names (aliases) for the two tables, used as prefixes", ok:true, why:"h.kg means the kg column of harvests; m.name the name column of members."},
     {t:"New tables created by the query", why:"Aliases are just names within the query; nothing is created."},
     {t:"Column names", why:"They name tables; columns come after the dot."},
     {t:"Required SQL keywords", why:"They’re names you choose; any short name works."}]},
   {id:"t3u9-q34", lesson:"t3u9-l4", level:2, q:"A members table declares `plot_id INTEGER REFERENCES plots(id)`, but SQLite still accepts plot_id 99, which doesn’t exist. Why?", options:[
     {t:"SQLite only checks foreign keys after PRAGMA foreign_keys = ON on that connection", ok:true, why:"Enforcement is off by default for compatibility with old databases. With it on, SQLite refuses: “FOREIGN KEY constraint failed”."},
     {t:"REFERENCES isn’t valid SQL", why:"It’s standard SQL; SQLite parses it but doesn’t enforce it by default."},
     {t:"Foreign keys only work on text columns", why:"They work on any type."},
     {t:"99 is too large for SQLite", why:"SQLite integers go far higher than 99."}]},
   {id:"t3u9-q35", lesson:"t3u9-l4", level:3, q:"Hana joins students to grades with an inner join to print a class list with each student’s grade. Two students with no grade yet are missing from the list. What should she use?", options:[
     {t:"students LEFT JOIN grades, so every student appears, with NULL where there’s no grade", ok:true, why:"The left table (students) is kept whole."},
     {t:"grades LEFT JOIN students", why:"That keeps every grade, not every student; students with no grade still wouldn’t appear."},
     {t:"Remove the ON condition", why:"That pairs every student with every grade."},
     {t:"Add WHERE grade IS NOT NULL", why:"That removes students without grades, the opposite of what she wants."}]},
   {id:"t3u9-q36", lesson:"t3u9-l4", level:2, q:"A query joining 6 members and 10 harvests returns 60 rows. What’s the most likely mistake?", options:[
     {t:"The ON condition is missing, so every member was paired with every harvest", ok:true, why:"6 × 10 = 60. The right join returns 10 rows."},
     {t:"A LEFT JOIN was used instead of an inner join", why:"A left join from harvests would still return 10 rows here."},
     {t:"The tables have duplicate rows", why:"The numbers 6 × 10 point to every-pairing, not duplicates."},
     {t:"LIMIT was left out", why:"LIMIT would hide the problem, not fix it."}]},

   /* ---------- Lesson 5 ---------- */
   {id:"t3u9-q37", lesson:"t3u9-l5", level:1, q:"In DB Browser for SQLite, when are new tables and imported data saved to the database file?", options:[
     {t:"When you click Write Changes", ok:true, why:"Until then changes are pending, and Revert Changes can undo them."},
     {t:"Immediately, as you make them", why:"DB Browser keeps changes pending until Write Changes."},
     {t:"When you run a SELECT query", why:"SELECT only reads; it doesn’t save anything."},
     {t:"Only when you export a CSV", why:"Exporting writes a separate file; it doesn’t save the database."}]},
   {id:"t3u9-q38", lesson:"t3u9-l5", level:2, q:"After importing a CSV, `ORDER BY amount DESC` puts 9 above 70 and 120. What does this tell you?", options:[
     {t:"The amount column was imported as TEXT, so it sorts character by character", ok:true, why:"Change its type to INTEGER or REAL (Modify Table) and check it again."},
     {t:"DESC sorts smallest first", why:"DESC sorts largest first; the problem is the type."},
     {t:"The CSV had a header row", why:"A header row would appear as data if the box were unticked, but it wouldn’t cause this order."},
     {t:"SQLite can’t sort numbers", why:"It sorts numbers correctly when they’re stored as numbers."}]},
   {id:"t3u9-q39", lesson:"t3u9-l5", level:3, q:"Priya’s community-centre booking app builds its query by gluing the typed name into the SQL text. Names with apostrophes break it. What’s the right fix?", options:[
     {t:"Use a parameterised query with a placeholder, so the name is sent separately as data", ok:true, why:"It fixes the apostrophe bug and closes the SQL injection hole at the same time."},
     {t:"Ask users not to type apostrophes", why:"Real names contain apostrophes, and attackers won’t follow instructions."},
     {t:"Delete apostrophes from names before searching", why:"That corrupts real names and doesn’t stop other crafted input."},
     {t:"Switch to double quotes in the SQL", why:"Then names with double quotes would break it instead, and the injection hole remains."}]},
   {id:"t3u9-q40", lesson:"t3u9-l5", level:1, q:"Which column breaks the rule that values should be atomic?", options:[
     {t:"phones, holding “555-0101, 555-0199”", ok:true, why:"Two values in one cell. Use a separate phone-numbers table, one row per number."},
     {t:"joined, holding 2021", why:"One value in one cell."},
     {t:"kg, holding 2.5", why:"One number, with the unit in the column name: good design."},
     {t:"member_id, holding 3", why:"A single foreign-key value."}]},
   {id:"t3u9-q41", lesson:"t3u9-l5", level:2, q:"A school database has students and courses. Each student takes many courses and each course has many students. How should enrolment be stored?", options:[
     {t:"A linking table, enrolments(student_id, course_id), with both columns as its primary key", ok:true, why:"Many-to-many links need their own table; the two-part key prevents duplicate enrolments."},
     {t:"A course_id column in students", why:"One column can hold only one course per student."},
     {t:"A list of student names in one cell of courses", why:"Not atomic, and names repeat across tables."},
     {t:"A separate table for each course", why:"Tables per course multiply with every new course, and every query has to change."}]},
   {id:"t3u9-q42", lesson:"t3u9-l5", level:3, q:"Lucía copies `SELECT TOP 5 name FROM customers;` from a forum and SQLite says there’s a syntax error. What should she write?", options:[
     {t:"`SELECT name FROM customers ORDER BY … LIMIT 5;`", ok:true, why:"TOP is SQL Server’s dialect; SQLite uses LIMIT, and needs ORDER BY for “top” to mean anything."},
     {t:"`SELECT FIRST 5 name FROM customers;`", why:"That isn’t SQLite syntax either."},
     {t:"`SELECT name FROM customers FETCH FIRST 5 ROWS ONLY;`", why:"That’s standard SQL and works in PostgreSQL, but SQLite rejects it."},
     {t:"`SELECT TOP(5) name FROM customers;`", why:"Brackets don’t help: SQLite has no TOP."}]},
   {id:"t3u9-q43", lesson:"t3u9-l5", level:2, q:"Why is storing bed in the members table (as well as in plots) poor design?", options:[
     {t:"The bed describes the plot, so the two copies can drift apart", ok:true, why:"Third normal form: a column should depend only on its table’s key. Look the bed up through plot_id."},
     {t:"Text columns aren’t allowed in members", why:"Any table can have text columns; the issue is the duplicate fact."},
     {t:"Members can’t have more than four columns", why:"There’s no such limit."},
     {t:"It makes joins impossible", why:"Joins still work; the problem is inconsistent copies."}]},
   {id:"t3u9-q44", lesson:"t3u9-l5", level:1, q:"What is DB Browser for SQLite?", options:[
     {t:"A free, open-source desktop app for viewing and editing SQLite databases and running SQL", ok:true, why:"It runs on Windows, macOS and Linux; there’s no phone version."},
     {t:"A web browser made by the SQLite developers", why:"Despite the name, it isn’t a web browser."},
     {t:"A paid database server", why:"It’s free, and SQLite has no server."},
     {t:"A phone app for browsing databases", why:"It’s a desktop program; on a phone, use the Data Lab."}]},
   {id:"t3u9-q45", lesson:"t3u9-l5", level:3, q:"Ana’s teammate wants one wide table (member, bed, crop, kg) for a chart, and suggests storing it instead of the three tables. What’s the better approach?", options:[
     {t:"Keep the normalised tables and create the wide table with a query or a VIEW when needed", ok:true, why:"A view always reflects the current data; a stored copy goes stale and invites contradictions."},
     {t:"Replace the three tables with the wide one", why:"That brings back the repetition and update problems normalisation solved."},
     {t:"Keep both and edit them separately", why:"Two editable copies will eventually disagree."},
     {t:"Charts can’t use SQL results", why:"Query results export to CSV or feed charts directly."}]}
  ]
});
