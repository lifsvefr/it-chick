/* Track 3 · Unit 9 · R for wrangling and charts */
ICA.addUnit({
  id:"t3u8", track:"t3", n:9, title:"R for wrangling and charts", icon:"🛠️",
  blurb:"Use the tidyverse to pick, change, group, summarize and reshape data with readable pipelines, draw clear charts with ggplot2, and turn the whole analysis into a report that rebuilds itself. Every idea comes with its base R twin, so you can practice in the Data Lab on any device.",
  goals:[
    "Install and load tidyverse packages, and choose where to run them: R on a computer, Posit Cloud, or base R in the Data Lab",
    "Pick rows and columns, sort, and add new columns with filter(), select(), arrange() and mutate(), and write the same steps in base R",
    "Chain steps into readable pipelines with |> and %>%, and know how the two pipes differ",
    "Summarise by group with group_by() + summarize() and count(), and reshape tables with pivot_longer() and pivot_wider()",
    "Build charts with ggplot2’s grammar (aesthetics, geoms, facets, labels, themes) and save them with ggsave()",
    "Outline a reproducible report in Quarto, where text, code and results stay in step",
    "Check AI-written code, statistics and charts on a known case, and record and disclose how you used AI"
  ],
  read:[
    {book:"r4ds", where:"Chapter 3, “Data transformation”, and Chapter 5, “Data tidying”", note:"The main reading for Lessons 1–3: dplyr’s verbs, the pipe, groups, and pivoting."},
    {book:"r4ds", where:"Chapter 1, “Data visualization”, Chapter 9, “Layers”, and Chapter 11, “Communication”", note:"ggplot2 from first plot to polished chart (Lessons 4–5)."},
    {book:"r4ds", where:"Chapter 28, “Quarto”", note:"Reproducible reports (Lesson 5)."},
    {book:"dcss", where:"R for Social Scientists: “Data Wrangling with dplyr”, “Data Wrangling with tidyr” and “Data Visualisation with ggplot2”", note:"The same skills on a real (simplified) survey, with exercises and solutions."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t3u8-l1", title:"The tidyverse: picking rows and columns", minutes:55,
   hook:{q:"On her laptop, Ana reads `survey.csv` and types `filter(survey, age >= 30)`. R replies: `object 'age' not found`, even though the file has an `age` column. What’s the most likely cause?", options:["The age column is spelled differently in the file","She hasn’t loaded dplyr, so R used a different, built-in filter() function","filter() only works on data typed in by hand","Column names must be in quotes: \"age\""], answer:1, reveal:"**She hasn’t loaded the package yet.** Base R already has a function called `filter()` (in the stats package, for smoothing time series) that knows nothing about columns. Until you run `library(dplyr)` or `library(tidyverse)`, R uses that one, and it can’t find `age`. This lesson starts with what packages are, how to install and load them, and then teaches dplyr’s first three verbs."},
   goals:[
     "Explain what the tidyverse is and how its packages work together",
     "Install a package once and load it in every session, and read the start-up messages",
     "Choose where to run code: R on a computer, Posit Cloud, or the Data Lab (base R only)",
     "Keep rows with filter(), columns with select(), and sort with arrange()",
     "Write the same steps in base R with subset(), [ ] and order()"
   ],
   learn:[
    {h:"What the tidyverse is", body:[
      {lead:"The tidyverse is a family of R packages built to work together, like a set of kitchen tools from one maker that all share the same handle."},
      "R on its own (called [[base-r|base R]]) can already do almost anything with data. Over the years people have added thousands of [[r-package|packages]]: bundles of extra functions that anyone can install. The [[tidyverse-term|tidyverse]] is one well-known collection of them, designed by Hadley Wickham and others at Posit, the company behind RStudio.",
      "What makes it a family is a shared design:",
      {list:[
        "**Data lives in tidy data frames**: one variable per column, one observation per row, one value per cell, the same rules you met for spreadsheets in {{tidy-data-principles|Unit 2}}.",
        "**Functions are named like verbs**: `filter()`, `select()`, `arrange()`, `mutate()`, `summarize()`. You can often read code aloud as a sentence.",
        "**The data comes first**: the first argument of each function is a data frame, and the result is a new data frame. That’s what lets you chain steps together (Lesson 2)."
      ]},
      "Loading the `tidyverse` package attaches nine core packages at once. You’ll use four of them in this unit:",
      {table:[["Package","Its job"],["**readr**","Read files such as CSV (`read_csv()`)"],["**dplyr**","Pick, change, group and summarize data"],["**tidyr**","Reshape tables (`pivot_longer()`, `pivot_wider()`)"],["**ggplot2**","Draw charts with a grammar of layers"],["tibble, purrr, stringr, forcats, lubridate","Data frames, repeating tasks, text, categories, dates"]]},
      "You don’t *have* to use the tidyverse. Base R is just as real, and you’ll see its version of every step in this unit. Many people mix both. The tidyverse’s strength is that long chains of steps stay readable."
    ]},
    {h:"Installing once, loading every time", body:[
      "A package arrives in two steps. **Installing** downloads it from CRAN (R’s official package archive) onto your computer. **Loading** makes its functions available in the R session you’re using now. Think of buying a cookbook (once) and taking it off the shelf (each time you cook).",
      {code:"install.packages(\"tidyverse\")   # once per computer\nlibrary(tidyverse)              # every new R session", lang:"r", label:"R · computer or Posit Cloud"},
      "Installing the whole tidyverse can take a few minutes, because it brings other packages it depends on. You only repeat it to update or on a new computer. Every time you restart R, you run `library()` again, usually as the first line of your [[r-script|script]].",
      "When it loads, the tidyverse prints a short report. The part to understand is **Conflicts**:",
      {code:"✖ dplyr::filter() masks stats::filter()\n✖ dplyr::lag()    masks stats::lag()", lang:"txt", label:"What R prints (part)"},
      "Two packages can contain functions with the same name. `dplyr::filter()` means “the `filter()` from dplyr”. After loading, plain `filter()` means dplyr’s version, which is what you want. Before loading, it means the stats version, which is why Ana’s code in the warm-up failed. You can always write `dplyr::filter()` in full to be certain.",
      {warn:"Install packages only by their exact names, from CRAN or a source you trust. AI assistants sometimes invent package names that don’t exist, and a look-alike name could be someone else’s code. Check the name on CRAN or in the package’s documentation first."}
    ]},
    {h:"Where to run it: computer, Posit Cloud or the Data Lab", body:[
      "Unit 8 showed three ways to run R. They differ in one way that matters for this unit: **only two of them can run the tidyverse**.",
      {table:[["Where","Tidyverse?","Good for"],["R + RStudio on your computer","Yes, after `install.packages()`","Regular work; Windows, macOS, Linux"],["Posit Cloud (RStudio in a web browser)","Yes, install it inside each project","Chromebooks, tablets, shared computers"],["This app’s **Data Lab** (webR)","No: base R only","Practicing on any device, including phones"]]},
      "**[[posit-cloud|Posit Cloud]]** runs RStudio on Posit’s servers, so all you need is a browser and a free account. The free plan limits how much computing time you can use (counted in “compute hours”), and a project that’s idle (not running code) is suspended after about 15 minutes. Check posit.cloud’s plans page for the current limits before relying on it for a course. It works on a phone’s browser too, but the screen is cramped; a tablet with a keyboard or a Chromebook is much easier.",
      "The **Data Lab** runs real R (version 4.6) inside your browser, but it can’t install packages. So each code block in this unit is labeled:",
      {list:["**R · computer or Posit Cloud**: needs the tidyverse.","**R · base R, runs in the Data Lab**: works anywhere, including the lab. To try one, open an R challenge that uses `survey.csv` (such as “Pick rows”), paste the code into its editor and press **Run**."]},
      {tip:"Learning on a phone? Read the tidyverse code to understand the idea, then run its base R twin in the Data Lab. The thinking (which rows? which columns? what order?) is the same."}
    ]},
    {h:"A first look at the data", body:[
      "This unit uses the same small, invented survey as the Data Lab: 12 people, their `group` (A or B), `age`, weekly study `hours`, a test `score`, and an `answer` (Yes, No or Unsure). On a computer, you can make the file yourself with base R:",
      {code:"lines <- c(\n  \"id,group,age,hours,score,answer\",\n  \"1,A,24,3,61,Yes\",    \"2,A,31,5,70,Yes\",\n  \"3,B,45,2,55,No\",     \"4,B,29,6,78,Yes\",\n  \"5,A,38,4,66,Unsure\", \"6,B,52,1,49,No\",\n  \"7,A,27,7,83,Yes\",    \"8,B,33,5,72,Unsure\",\n  \"9,A,41,3,60,No\",     \"10,B,36,8,88,Yes\",\n  \"11,A,22,2,52,No\",    \"12,B,30,6,75,Yes\"\n)\nwriteLines(lines, \"survey.csv\")", lang:"r", label:"R · base R, runs anywhere"},
      "Now read it with readr’s `read_csv()` (with an underscore; base R’s `read.csv()` uses a dot):",
      {code:"library(tidyverse)\nsurvey <- read_csv(\"survey.csv\")\nsurvey", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 12 × 6\n      id group   age hours score answer\n   <dbl> <chr> <dbl> <dbl> <dbl> <chr> \n 1     1 A        24     3    61 Yes   \n 2     2 A        31     5    70 Yes   \n 3     3 B        45     2    55 No    \n…", lang:"txt", label:"What R prints (first rows)"},
      "The result is a [[tibble]]: a tidyverse data frame. It prints its size (12 × 6) and each column’s type under its name: `<dbl>` for numbers (“double”), `<chr>` for text (“character”). It shows only the first rows instead of flooding the screen. In every other way a tibble *is* a [[data-frame|data frame]], so base R functions work on it too."
    ]},
    {h:"filter(): keep the rows you want", body:[
      "`filter()` keeps the rows where a condition is TRUE. The first argument is the data; the rest are conditions written with column names:",
      {code:"filter(survey, age >= 30)", lang:"r", label:"R · computer or Posit Cloud"},
      "This returns the 8 people aged 30 or over. Note `>=` for “at least”; `>` would drop the 30-year-old.",
      {code:"filter(survey, group == \"A\", hours >= 4)\nfilter(survey, group == \"A\" | hours >= 7)\nfilter(survey, answer %in% c(\"Yes\", \"Unsure\"))", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "A **comma** between conditions means *and*: group A **and** at least 4 hours (3 people).",
        "`|` means *or*: in group A, **or** 7 or more hours (7 people).",
        "`%in%` means “is one of”: answer is Yes or Unsure (8 people)."
      ]},
      "Two mistakes catch almost everyone. First, `=` instead of `==`. One `=` gives a name; two ask “is equal?”. dplyr spots it:",
      {code:"filter(survey, group = \"A\")", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"Error in `filter()`:\n! We detected a named input.\nℹ This usually means that you've used `=` instead of `==`.\nℹ Did you mean `group == \"A\"`?", lang:"txt", label:"What R prints"},
      "Second, writing “or” as in English: `answer == \"Yes\" | \"Unsure\"`. R compares only the first part and then tries to treat `\"Unsure\"` on its own as TRUE or FALSE, which fails. Repeat the column (`answer == \"Yes\" | answer == \"Unsure\"`) or use `%in%`.",
      {h:"The base R way"},
      {code:"d <- read.csv(\"survey.csv\")\nsubset(d, age >= 30)\nd[d$age >= 30, ]\nsubset(d, group == \"A\" & hours >= 4)", lang:"r", label:"R · base R, runs in the Data Lab"},
      "`subset()` reads much like `filter()`. The square-bracket form `d[rows, columns]` is the most basic: the condition picks rows, and the empty space after the comma means “all columns”. Forgetting that comma is one of the most common R errors.",
      {warn:"Missing values behave differently. If a value is `NA` (missing), `d[d$age > 30, ]` gives you a row full of NA, because R can’t say whether a missing age is over 30. `filter()` and `subset()` quietly drop those rows instead."},
      {code:"df <- data.frame(\n  name = c(\"Ana\", \"Tomás\", \"Mei\"),\n  age = c(34, NA, 27)\n)\ndf[df$age > 30, ]\nsubset(df, age > 30)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"   name age\n1   Ana  34\nNA <NA>  NA\n  name age\n1  Ana  34", lang:"txt", label:"What R prints"},
      {lab:"dl-r-subset", t:"Practice: pick the rows of people aged 30 or over with subset() or [ ]"}
    ]},
    {h:"select(): keep the columns you want", body:[
      "`filter()` works on rows; `select()` works on columns. List the columns to keep, or use a minus sign to drop one, or a colon for a range of neighbors:",
      {code:"select(survey, id, age, score)\nselect(survey, -answer)\nselect(survey, age:score)", lang:"r", label:"R · computer or Posit Cloud"},
      "The first keeps `id`, `age` and `score`; the second keeps everything except `answer`; the third keeps `age`, `hours` and `score` (every column from `age` to `score`). Helpers such as `starts_with(\"week\")` pick columns by their names, which you’ll use in Lesson 3.",
      {code:"d[, c(\"id\", \"age\", \"score\")]\nsubset(d, select = -answer)\nsubset(d, select = age:score)", lang:"r", label:"R · base R, runs in the Data Lab"},
      "In base R the column names go in quotes inside `c()`, after the comma. `subset()` also has a `select` argument that accepts bare names, minus signs and ranges.",
      {fig:'<svg viewBox="0 0 340 394"><defs><marker id="u8a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="10" y="22" text-anchor="start">filter(age &gt;= 30): keeps some rows</text><rect class="d-panel" x="10" y="32" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="45" text-anchor="middle">id</text><rect class="d-panel" x="44" y="32" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="45" text-anchor="middle">age</text><rect class="d-panel" x="10" y="50" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="63" text-anchor="middle">1</text><rect class="d-panel" x="44" y="50" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="63" text-anchor="middle">24</text><rect class="d-lup" x="10" y="68" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="81" text-anchor="middle">2</text><rect class="d-lup" x="44" y="68" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="81" text-anchor="middle">31</text><rect class="d-lup" x="10" y="86" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="99" text-anchor="middle">3</text><rect class="d-lup" x="44" y="86" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="99" text-anchor="middle">45</text><rect class="d-panel" x="10" y="104" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="117" text-anchor="middle">11</text><rect class="d-panel" x="44" y="104" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="117" text-anchor="middle">22</text><path class="d-ink" d="M92 77 L196 77" stroke-width="2" marker-end="url(#u8a1)"/><rect class="d-panel" x="206" y="32" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="45" text-anchor="middle">id</text><rect class="d-panel" x="240" y="32" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="45" text-anchor="middle">age</text><rect class="d-panel" x="206" y="50" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="63" text-anchor="middle">2</text><rect class="d-panel" x="240" y="50" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="63" text-anchor="middle">31</text><rect class="d-panel" x="206" y="68" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="81" text-anchor="middle">3</text><rect class="d-panel" x="240" y="68" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="81" text-anchor="middle">45</text><text x="10" y="152" text-anchor="start">select(id, score): keeps some columns</text><rect class="d-panel" x="10" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="175" text-anchor="middle">id</text><rect class="d-panel" x="44" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="175" text-anchor="middle">grp</text><rect class="d-panel" x="78" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="95" y="175" text-anchor="middle">age</text><rect class="d-panel" x="112" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="129" y="175" text-anchor="middle">sc</text><rect class="d-lup" x="10" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="193" text-anchor="middle">1</text><rect class="d-panel" x="44" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="193" text-anchor="middle">A</text><rect class="d-panel" x="78" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="95" y="193" text-anchor="middle">24</text><rect class="d-lup" x="112" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="129" y="193" text-anchor="middle">61</text><rect class="d-lup" x="10" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="211" text-anchor="middle">2</text><rect class="d-panel" x="44" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="211" text-anchor="middle">A</text><rect class="d-panel" x="78" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="95" y="211" text-anchor="middle">31</text><rect class="d-lup" x="112" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="129" y="211" text-anchor="middle">70</text><rect class="d-lup" x="10" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="229" text-anchor="middle">3</text><rect class="d-panel" x="44" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="229" text-anchor="middle">B</text><rect class="d-panel" x="78" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="95" y="229" text-anchor="middle">45</text><rect class="d-lup" x="112" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="129" y="229" text-anchor="middle">55</text><path class="d-ink" d="M160 207 L196 207" stroke-width="2" marker-end="url(#u8a1)"/><rect class="d-panel" x="206" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="175" text-anchor="middle">id</text><rect class="d-panel" x="240" y="162" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="175" text-anchor="middle">sc</text><rect class="d-panel" x="206" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="193" text-anchor="middle">1</text><rect class="d-panel" x="240" y="180" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="193" text-anchor="middle">61</text><rect class="d-panel" x="206" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="211" text-anchor="middle">2</text><rect class="d-panel" x="240" y="198" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="211" text-anchor="middle">70</text><rect class="d-panel" x="206" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="229" text-anchor="middle">3</text><rect class="d-panel" x="240" y="216" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="229" text-anchor="middle">55</text><text x="10" y="264" text-anchor="start">arrange(score): reorders the rows</text><rect class="d-panel" x="10" y="274" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="287" text-anchor="middle">id</text><rect class="d-panel" x="44" y="274" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="287" text-anchor="middle">sc</text><rect class="d-panel" x="10" y="292" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="305" text-anchor="middle">1</text><rect class="d-panel" x="44" y="292" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="305" text-anchor="middle">61</text><rect class="d-panel" x="10" y="310" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="323" text-anchor="middle">2</text><rect class="d-panel" x="44" y="310" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="323" text-anchor="middle">70</text><rect class="d-panel" x="10" y="328" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="341" text-anchor="middle">3</text><rect class="d-panel" x="44" y="328" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="341" text-anchor="middle">55</text><rect class="d-panel" x="10" y="346" width="34" height="18" stroke-width="1"/><text class="s" x="27" y="359" text-anchor="middle">6</text><rect class="d-panel" x="44" y="346" width="34" height="18" stroke-width="1"/><text class="s" x="61" y="359" text-anchor="middle">49</text><path class="d-ink" d="M92 319 L196 319" stroke-width="2" marker-end="url(#u8a1)"/><rect class="d-panel" x="206" y="274" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="287" text-anchor="middle">id</text><rect class="d-panel" x="240" y="274" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="287" text-anchor="middle">sc</text><rect class="d-panel" x="206" y="292" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="305" text-anchor="middle">6</text><rect class="d-panel" x="240" y="292" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="305" text-anchor="middle">49</text><rect class="d-panel" x="206" y="310" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="323" text-anchor="middle">3</text><rect class="d-panel" x="240" y="310" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="323" text-anchor="middle">55</text><rect class="d-panel" x="206" y="328" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="341" text-anchor="middle">1</text><rect class="d-panel" x="240" y="328" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="341" text-anchor="middle">61</text><rect class="d-panel" x="206" y="346" width="34" height="18" stroke-width="1"/><text class="s" x="223" y="359" text-anchor="middle">2</text><rect class="d-panel" x="240" y="346" width="34" height="18" stroke-width="1"/><text class="s" x="257" y="359" text-anchor="middle">70</text><text class="s" x="170" y="386" text-anchor="middle">grp = group, sc = score</text></svg>', alt:"Three small before-and-after tables. filter(age >= 30) keeps two of four rows. select(id, score) keeps two of four columns. arrange(score) keeps all rows but puts them in order 49, 55, 61, 70.", cap:"filter() chooses rows, select() chooses columns, arrange() changes the order of rows."}
    ]},
    {h:"arrange(): sort the rows", body:[
      "`arrange()` reorders rows by one or more columns, smallest first. Wrap a column in `desc()` for largest first. Extra columns break ties:",
      {code:"arrange(survey, score)\narrange(survey, desc(score))\narrange(survey, group, desc(score))", lang:"r", label:"R · computer or Posit Cloud"},
      "The last line sorts by group (A before B), and within each group by score, highest first. Here is the base R version: `order()` returns the row positions in sorted order, and the brackets put the rows in that order. A minus sign reverses a numeric column:",
      {code:"d[order(d$score), ]\nd[order(-d$score), ]\nd[order(d$group, -d$score), ]", lang:"r", label:"R · base R, runs in the Data Lab"},
      {tip:"The minus trick works only for numbers. To sort text from Z to A in base R, use `order(d$answer, decreasing = TRUE)`."},
      {key:"dplyr verbs never change your data in place. `arrange(survey, score)` shows a sorted copy; `survey` is untouched. To keep a result, store it with `<-`."},
      "So a three-step job, “people aged 30+, showing id, age and score, highest score first”, looks like this so far:",
      {code:"older <- filter(survey, age >= 30)\nolder <- select(older, id, age, score)\narrange(older, desc(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"older <- subset(d, age >= 30, select = c(id, age, score))\nolder[order(-older$score), ]", lang:"r", label:"R · base R, runs in the Data Lab"},
      "Both give the same 8 rows, starting with person 10 (score 88). Overwriting `older` again and again works, but it’s clumsy. Lesson 2 shows the pipe, which removes the need for it.",
      {lab:"dl-r-fix", t:"Practice: fix two classic errors, a missing comma in d[rows, ] and a capital letter"}
    ]}
   ],
   try:[
    {id:"t3u8-l1-x1", type:"mcq", q:"Kaito, a first-year information engineering student, installed the tidyverse on his laptop yesterday. Today he opens R again and `mutate(survey, x = 1)` gives `could not find function \"mutate\"`. What should he do?", options:[
      {t:"Run `library(tidyverse)` at the start of the session", ok:true, why:"Right. (`library(dplyr)` also works.) Installing puts the package on the computer once; loading makes its functions available in each new session. A restart forgets what was loaded."},
      {t:"Run `install.packages(\"tidyverse\")` again to reinstall it", why:"It’s already installed, so reinstalling doesn’t help: he’d still need `library()` afterwards. The missing step is loading, not installing."},
      {t:"Use `Mutate()` with a capital M", why:"R names are case-sensitive, and the function is `mutate()` in lower case. The problem is that dplyr isn’t loaded."},
      {t:"Convert survey to a tibble first", why:"`mutate()` works on ordinary data frames too. R can’t find the function at all, which means the package isn’t loaded."}
    ]},
    {id:"t3u8-l1-x2", type:"sort", q:"Which code can run in the Data Lab (base R only), and which needs R with the tidyverse (a computer or Posit Cloud)?", buckets:["Runs in the Data Lab","Needs the tidyverse"], items:[
      {t:"`subset(d, age >= 30)`", b:0, why:"`subset()` is part of base R."},
      {t:"`filter(survey, age >= 30)`", b:1, why:"This `filter()` comes from dplyr. (Base R’s own `filter()` does something else entirely.)"},
      {t:"`d[order(-d$score), ]`", b:0, why:"Square brackets and `order()` are base R."},
      {t:"`read_csv(\"survey.csv\")`", b:1, why:"`read_csv()` with an underscore is from readr. Base R’s is `read.csv()` with a dot."},
      {t:"`arrange(survey, desc(score))`", b:1, why:"`arrange()` and `desc()` are dplyr functions."},
      {t:"`d[, c(\"id\", \"score\")]`", b:0, why:"Picking columns by name in brackets is base R."}
    ]},
    {id:"t3u8-l1-x3", type:"number", q:"Group A’s six people have these weekly hours (id: hours): 1: 3, 2: 5, 5: 4, 7: 7, 9: 3, 11: 2. How many rows does `filter(survey, group == \"A\", hours >= 4)` return?", answer:3, tol:0, unit:"rows", why:"The comma means *and*: the row must be in group A **and** have at least 4 hours. That’s ids 2 (5 h), 5 (4 h) and 7 (7 h): 3 rows.", wrongs:[{v:2, tol:0, why:"That’s the count for `hours > 4`. `>=` includes exactly 4, so person 5 counts."},{v:6, tol:0, why:"That’s every row in group A. The second condition also has to be TRUE."},{v:7, tol:0, why:"That’s how many people *in the whole survey* have 4 or more hours, as if the group condition were ignored. (Reading the comma as “or” would give 10: all 6 in group A plus 4 more from B.)"}]},
    {id:"t3u8-l1-x4", type:"match", q:"Match each dplyr call to the base R code that gives the same rows and columns (for data without missing values).", pairs:[
      ["`filter(d, score > 70)`","`subset(d, score > 70)`","Both keep the rows where the condition is TRUE, with all columns."],
      ["`select(d, id, score)`","`d[, c(\"id\", \"score\")]`","The space before the comma means all rows; the names pick the columns."],
      ["`arrange(d, score)`","`d[order(d$score), ]`","`order()` gives row positions from smallest to largest score."],
      ["`arrange(d, desc(score))`","`d[order(-d$score), ]`","The minus sign reverses the order of a number column: largest first."]
    ]},
    {id:"t3u8-l1-x5", type:"spot", q:"Mei wants group A people who answered Yes or Unsure. Tap the parts of her code that are mistakes.", ask:"is a mistake", mono:true, parts:["filter(",{t:"survey", flag:false, why:"The data frame goes first. That’s correct."},", ",{t:"group = \"A\"", flag:true, why:"One `=` names an argument; it doesn’t compare. Use `group == \"A\"`."},", ",{t:"answer == \"Yes\" | \"Unsure\"", flag:true, why:"`| \"Unsure\"` doesn’t compare anything. Write `answer == \"Yes\" | answer == \"Unsure\"`, or `answer %in% c(\"Yes\", \"Unsure\")`."},", ",{t:"hours >= 0", flag:false, why:"Pointless (everyone has 0 or more hours) but not a mistake: it keeps every row."},")"]},
    {id:"t3u8-l1-x6", type:"mcq", q:"Tomás’s data has a missing age (NA) for one person. In base R he writes `d[d$age > 30, ]` and sees an extra row full of NA. Why?", options:[
      {t:"The missing age makes the condition NA", ok:true, why:"Exactly. R can’t tell whether a missing age is over 30, and brackets turn an NA condition into a row of NAs. `filter()` and `subset()` treat NA as “don’t keep”; plain brackets don’t. `which(d$age > 30)` or `subset()` avoids the surprise."},
      {t:"The file is corrupted and needs to be read again", why:"Nothing is wrong with the file; this is how bracket subsetting treats missing values."},
      {t:"He forgot the comma inside the brackets", why:"The comma is there: `d[d$age > 30, ]`. Without it he’d get an error about columns, not an NA row."},
      {t:"`>` can’t be used with ages; he needs `>=`", why:"`>` works fine with numbers. The extra row comes from the missing value."}
    ]},
    {id:"t3u8-l1-x7", type:"explain", q:"Compare `filter()` and `select()`: what does each one act on, and how would you get just the `id` and `score` of people aged 30 or over?", model:"`filter()` works on **rows**: it keeps the rows where a condition is TRUE, such as `age >= 30`, and leaves all the columns. `select()` works on **columns**: it keeps the columns you name, such as `id` and `score`, and leaves all the rows. To get both, filter first and then select: `select(filter(survey, age >= 30), id, score)`. In base R, `subset(d, age >= 30, select = c(id, score))` does both at once. Neither changes `survey`; store the result with `<-` to keep it.", points:["Says `filter()` keeps rows that meet a condition", "Says `select()` keeps named columns", "Combines them to answer the question", "Notes the result must be stored, or gives the base R version"]}
   ],
   apply:{intro:"Set up somewhere to run tidyverse code, then practice the base R versions in the Data Lab. If you only have a phone, do task 3 and read the others.", tasks:[
     {t:"Install R and the tidyverse (optional, on a computer)", how:{
       win:["Install R and RStudio Desktop if you haven’t yet (Unit 8 has the steps: R from **cran.r-project.org**, then RStudio Desktop from **posit.co**)","Open **RStudio**. In the **Console** pane, type `install.packages(\"tidyverse\")` and press [[kbd:Enter]]","Wait until the `>` prompt comes back (a few minutes), then type `library(tidyverse)`","Check you see “Attaching core tidyverse packages” with checks, and the Conflicts list"],
       mac:["Install R (choose the installer for your Mac’s chip: Apple silicon or Intel) and RStudio Desktop, as in Unit 8","Open **RStudio**. In the **Console**, type `install.packages(\"tidyverse\")` and press [[kbd:Return]]","When the `>` prompt returns, type `library(tidyverse)`","Check for the list of attached packages and the Conflicts section"],
       chromeos:["Open Chrome and go to **posit.cloud**; sign up for the free plan","Choose **New Project → New RStudio Project** and wait for it to open","In the **Console**, run `install.packages(\"tidyverse\")` (each new project needs its own install), then `library(tidyverse)`","(Alternative: if you use ChromeOS’s Linux development environment, you can install R there as on Linux)"],
       phone:["Installing R isn’t possible on iPhone or Android; use the Data Lab instead (task 3)","You *can* open **posit.cloud** in Safari (iPhone) or Chrome (Android) and follow the ChromeOS steps, but the screen is small. Turn the phone sideways and zoom out if you try it"]}},
     {t:"Run the first three verbs on survey.csv (computer or Posit Cloud)", how:["Paste the “make the file” code from this lesson into the Console and run it","Run `survey <- read_csv(\"survey.csv\")` and look at the column types under the names","Run `filter(survey, group == \"B\", score > 70)`: how many rows? (You should get 4: ids 4, 8, 10 and 12.)","Run `arrange(survey, desc(hours))` and note who studies most"]},
     {t:"Do the same in base R in the Data Lab (any device)", how:["Open the Data Lab’s **Pick rows** challenge and solve it with `subset()`","In the same editor, press **Run** on `subset(d, group == \"B\" & score > 70)` and check you get the same 4 people","Try `d[order(-d$hours), ]` and compare with the tidyverse result"]}
   ], proof:"Either a screenshot or note of `library(tidyverse)` loading with its Conflicts list, or the Data Lab’s “Pick rows” challenge marked as passed, plus the 4 ids from task 2 or 3."},
   read:[{book:"r4ds", where:"Chapter 3, “Data transformation”: Sections 3.1 “Introduction” to 3.3 “Columns”"},{book:"r4ds", where:"Chapter 27, “A field guide to base R”: Section 27.2, “Selecting multiple elements with [”, including “dplyr equivalents”"},{book:"dcss", where:"R for Social Scientists: “Data Wrangling with dplyr” (sections “What is an R package?” and “Selecting columns and filtering rows”)"}]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t3u8-l2", title:"New columns and the pipe", minutes:55,
   hook:{q:"In R, `x <- c(4, 9, 16)`. What does `sqrt(x) |> sum()` give?", options:["29","9","An error","3"], answer:1, reveal:"**9.** The pipe `|>` takes what’s on its left and passes it as the first argument of the function on its right, so `sqrt(x) |> sum()` is `sum(sqrt(x))`: 2 + 3 + 4 = 9. (29 would be `sum(x)`.) This lesson adds new columns with `mutate()`, then shows how the pipe turns a pile of nested brackets into a readable recipe."},
   goals:[
     "Add and change columns with mutate(), including if_else() and case_when()",
     "Do the same in base R with $, transform(), ifelse() and cut()",
     "Rewrite nested code as a pipeline with |>, and read a pipeline aloud",
     "Explain the differences between the native pipe |> and magrittr’s %>%",
     "Lay out pipelines so others (and future you) can read them"
   ],
   learn:[
    {h:"mutate(): add or change columns", body:[
      {lead:"`mutate()` is the spreadsheet move of adding a new column with a formula and filling it down, done in one line, for every row at once."},
      "Give each new column a name, `=`, and a calculation using existing columns. The new columns are added at the right-hand end:",
      {code:"mutate(survey,\n  hours_year = hours * 52,\n  age_band = if_else(age >= 40, \"40+\", \"under 40\")\n)", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 12 × 8\n      id group   age hours score answer hours_year age_band\n   <dbl> <chr> <dbl> <dbl> <dbl> <chr>       <dbl> <chr>   \n 1     1 A        24     3    61 Yes           156 under 40\n 2     2 A        31     5    70 Yes           260 under 40\n 3     3 B        45     2    55 No            104 40+     \n…", lang:"txt", label:"What R prints (first rows)"},
      "`hours_year` multiplies each person’s weekly hours by 52. `if_else(condition, yes, no)` gives one value when the condition is TRUE and another when it’s FALSE. Like every verb, `mutate()` returns a new tibble; store it with `<-` if you want to keep the columns.",
      "Two handy behaviors:",
      {list:[
        "Inside one `mutate()`, a later column can use an earlier one: `mutate(survey, hours_year = hours * 52, hours_day = hours_year / 365)` works.",
        "Reusing an existing name **replaces** that column: `mutate(survey, hours = hours * 60)` turns hours into minutes, with no warning. Choose a new name unless you mean it."
      ]},
      {h:"The base R way"},
      {code:"d$hours_year <- d$hours * 52\nd$age_band <- ifelse(d$age >= 40, \"40+\", \"under 40\")\nhead(d, 3)", lang:"r", label:"R · base R, runs in the Data Lab"},
      "`d$new <- …` adds (or overwrites) a column in place. Base R’s `ifelse()` (no underscore) does the same job as `if_else()`; dplyr’s version is stricter, giving an error if the yes and no values are different types (a number and text), which catches mistakes early.",
      "`transform()` is the closest base R relative of `mutate()`, but it can’t use a column it is creating in the same call:",
      {code:"transform(d,\n  hours_year = hours * 52,\n  hours_day = hours_year / 365\n)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"Error in eval(substitute(list(...)), `_data`, parent.frame()) :\n  object 'hours_year' not found", lang:"txt", label:"What R prints"}
    ]},
    {h:"More than two cases: case_when()", body:[
      "For three or more bands, `case_when()` takes a list of `condition ~ value` pairs. R checks them **from top to bottom** and uses the first one that’s TRUE; `.default` covers everything left:",
      {code:"survey |>\n  mutate(\n    band = case_when(\n      age < 30 ~ \"under 30\",\n      age < 45 ~ \"30 to 44\",\n      .default = \"45 and over\"\n    )\n  ) |>\n  count(band)", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 3 × 2\n  band            n\n  <chr>       <int>\n1 30 to 44        6\n2 45 and over     2\n3 under 30        4", lang:"txt", label:"What R prints"},
      "Because the conditions are checked in order, `age < 45` only ever sees people who weren’t already under 30, so it really means 30 to 44. Swap the first two lines and nobody would ever land in “under 30”.",
      "Notice the order of the result: text is sorted alphabetically, so “under 30” comes last. To keep a meaningful order, turn the column into a [[r-factor|factor]] (a category with an order) using forcats, or name bands so they sort well (\"1: under 30\").",
      "In base R, `cut()` is the usual tool for number bands. `right = FALSE` makes each band include its lower edge (30 goes in “30 to 44”), matching the dplyr code:",
      {code:"d$band <- cut(d$age,\n  breaks = c(-Inf, 30, 45, Inf),\n  labels = c(\"under 30\", \"30 to 44\", \"45 and over\"),\n  right = FALSE\n)\ntable(d$band)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"   under 30    30 to 44 45 and over \n          4           6           2 ", lang:"txt", label:"What R prints"}
    ]},
    {h:"Why a pipe? Three ways to write the same thing", body:[
      "Suppose you want group B, just `id`, `hours` and `score`, highest score first. You can **nest** the calls, inside out:",
      {code:"arrange(\n  select(\n    filter(survey, group == \"B\"),\n    id, hours, score\n  ),\n  desc(score)\n)", lang:"r", label:"R · computer or Posit Cloud"},
      "It works, but you read it from the middle outwards, and the arguments of `arrange()` end up far from its name. Or you can save **each step** under a name:",
      {code:"b <- filter(survey, group == \"B\")\nb <- select(b, id, hours, score)\narrange(b, desc(score))", lang:"r", label:"R · computer or Posit Cloud"},
      "Clearer, but full of throwaway names. The **pipe** lets you write the steps in the order they happen:",
      {code:"survey |>\n  filter(group == \"B\") |>\n  select(id, hours, score) |>\n  arrange(desc(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"     id hours score\n1    10     8    88\n2     4     6    78\n3    12     6    75\n4     8     5    72\n5     3     2    55\n6     6     1    49", lang:"txt", label:"What R prints (tibble header left out)"},
      "Read `|>` aloud as **“then”**: take survey, *then* keep group B, *then* keep three columns, *then* sort. All three versions give exactly the same result.",
      {fig:'<svg viewBox="0 0 340 374"><defs><marker id="u8a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="20" y="8" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="28" text-anchor="middle">survey</text><text class="s" x="170" y="45" text-anchor="middle">12 rows × 6 columns</text><path class="d-ink" d="M170 56 L170 88" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="77" text-anchor="start">|&gt;</text><text class="s" x="206" y="77" text-anchor="start">then</text><rect class="d-lup" x="20" y="92" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="112" text-anchor="middle">filter(group == "B")</text><text class="s" x="170" y="129" text-anchor="middle">6 rows × 6 columns</text><path class="d-ink" d="M170 140 L170 172" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="161" text-anchor="start">|&gt;</text><text class="s" x="206" y="161" text-anchor="start">then</text><rect class="d-lup" x="20" y="176" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="196" text-anchor="middle">select(id, hours, score)</text><text class="s" x="170" y="213" text-anchor="middle">6 rows × 3 columns</text><path class="d-ink" d="M170 224 L170 256" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="245" text-anchor="start">|&gt;</text><text class="s" x="206" y="245" text-anchor="start">then</text><rect class="d-lup" x="20" y="260" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="280" text-anchor="middle">arrange(desc(score))</text><text class="s" x="170" y="297" text-anchor="middle">same 6 rows, highest first</text><text class="s" x="170" y="348" text-anchor="middle">Each |&gt; hands the result on as the first</text><text class="s" x="170" y="364" text-anchor="middle">argument of the next function.</text></svg>', alt:"Four boxes stacked vertically, joined by arrows labeled |> then: survey (12 rows by 6 columns), filter(group == \"B\") (6 rows by 6 columns), select(id, hours, score) (6 rows by 3 columns), arrange(desc(score)) (same 6 rows, highest first).", cap:"A pipeline: each step’s result becomes the first argument of the next step."}
    ]},
    {h:"The native pipe |>", body:[
      "The [[pipe-operator|pipe]] `|>` has been built into R since version 4.1.0 (2021), so it needs no package. R rewrites `x |> f(y)` as `f(x, y)` before running anything: the left side becomes the **first argument**. That’s why tidyverse functions, which all take the data first, chain so neatly.",
      "Because it’s base R, the pipe works in the Data Lab with base functions:",
      {code:"d |>\n  subset(group == \"B\", select = c(id, hours, score)) |>\n  nrow()", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] 6", lang:"txt", label:"What R prints"},
      "One rule trips people up: the right side must be a function **call**, with brackets, even when there’s nothing inside them.",
      {code:"x <- c(4, 9, 16)\nx |> sum", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"Error: The pipe operator requires a function call as RHS", lang:"txt", label:"What R prints"},
      "(RHS means “right-hand side”.) Write `x |> sum()`.",
      {lab:"dl-r-subset", t:"Practice: solve “Pick rows”, then try writing your answer as d |> subset(age >= 30)"}
    ]},
    {h:"The magrittr pipe %>%, and how they differ", body:[
      "Before R had its own pipe, the magrittr package (2014) introduced `%>%`. It’s loaded with the tidyverse, and you’ll meet it in older books, course notes and answers online. For everyday chains the two behave identically. The differences, in outline:",
      {table:[["","|> (native)","%>% (magrittr)"],["Needs a package?","No, R 4.1.0 or later","Yes: magrittr (comes with the tidyverse)"],["Brackets on the right","Required: `x |> sum()`","Optional: `x %>% sum` also works"],["Placeholder for a different argument","`_`, only as a named argument (R 4.2.0+), or to start an extraction such as `_$coef` (R 4.3.0+)","`.`, can go almost anywhere"],["Design","Simpler and slightly faster","More features, most rarely needed"]]},
      "The placeholder matters when the data isn’t the first argument. `lm()` (Unit 8 and Unit 7) expects a formula first and the data later:",
      {code:"survey %>% lm(score ~ hours, data = .)\nsurvey |> lm(score ~ hours, data = _)", lang:"r", label:"R · computer or Posit Cloud"},
      "Both fit the same straight line (slope 5.646 points per hour). With `|>`, the `_` must be given to a named argument such as `data = _`; plain `nrow(_)` is an error.",
      "Which should you use? *R for Data Science* (2nd edition) recommends `|>` for new code, because it’s always available and simpler. This unit follows that. Recognise `%>%` when you see it; mixing them in one script works, but pick one for consistency.",
      {tip:"In RStudio, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] on a Mac) types a pipe. It types `%>%` unless you check **Use native pipe operator, |>** in **Tools → Global Options → Code**."}
    ]},
    {h:"Pipelines people can read", body:[
      "A few style habits, from the tidyverse style guide used in *R for Data Science*, make pipelines easy to read:",
      {list:[
        "Put a space before `|>` and make it the **last thing on the line**; start each new step on a new line.",
        "Indent every step after the first by two spaces.",
        "Keep a pipeline to one job. If it grows past 10–15 lines, stop at a sensible point and give that result a good name.",
        "Start with the data and a verb on each line, so a reader can skim the verbs: filter, select, arrange."
      ]},
      {key:"A pipeline is a recipe written in the order you’d do it. If you can read it aloud with “then” between the steps and it makes sense, it’s probably well written."}
    ]}
   ],
   try:[
    {id:"t3u8-l2-x1", type:"mcq", q:"Priya runs `survey2 <- mutate(survey, hours = hours * 60)`. What does `survey2` contain?", options:[
      {t:"The same columns, but `hours` now holds minutes (hours × 60)", ok:true, why:"Right. Reusing an existing column name replaces that column. No new column is added and no warning is given."},
      {t:"A new seventh column called `hours` next to the old one", why:"A data frame can’t hold two columns with the same name this way; mutate() overwrites the existing one."},
      {t:"An error, because hours already exists", why:"No error: replacing a column is allowed, which is why it’s worth choosing a new name unless you mean to overwrite."},
      {t:"The original survey is changed too", why:"mutate() returns a new tibble; `survey` itself stays the same. Only `survey2` has the change."}
    ]},
    {id:"t3u8-l2-x2", type:"number", q:"Person 7 studies 7 hours a week. In `mutate(survey, hours_year = hours * 52, hours_day = hours_year / 365)`, what is their `hours_day`? (Two decimal places.)", answer:1.00, tol:0.006, unit:"hours per day", why:"hours_year = 7 × 52 = 364. hours_day = 364 ÷ 365 = 0.997…, which is 1.00 to two decimal places. Inside one mutate(), the second column can use the first.", wrongs:[{v:364, tol:0.5, why:"That’s hours_year, the first new column. hours_day divides it by 365."},{v:0.02, tol:0.006, why:"That’s 7 ÷ 365: weekly hours divided by days in a year, skipping the × 52 step."},{v:7, tol:0.01, why:"That’s the weekly hours you started with."}]},
    {id:"t3u8-l2-x3", type:"order", q:"Put the steps in order to make a pipeline that gives exactly the same result as `arrange(select(filter(survey, answer == \"Yes\"), id, score), desc(score))`.", items:[
      {t:"`survey |>`", why:"Nested code is read from the inside out, and the innermost thing is the data."},
      {t:"`filter(answer == \"Yes\") |>`", why:"filter() is the innermost function, so it runs first."},
      {t:"`select(id, score) |>`", why:"select() wraps the filter() result, so it runs second."},
      {t:"`arrange(desc(score))`", why:"arrange() is outermost: it runs last, and needs no pipe after it."}
    ]},
    {id:"t3u8-l2-x4", type:"sort", q:"Which pipe does each statement describe? (Some are true of both.)", buckets:["Only |>","Only %>%","Both"], items:[
      {t:"Works in R 4.1+ without loading any package", b:0, why:"`|>` is part of base R; `%>%` needs magrittr (loaded with the tidyverse)."},
      {t:"`x ... sum` without brackets is allowed", b:1, why:"magrittr accepts a bare function name. The native pipe requires a call: `x |> sum()`."},
      {t:"Uses `.` as the placeholder", b:1, why:"magrittr’s placeholder is a dot; the native pipe’s is `_`."},
      {t:"Uses `_`, which must be a named argument", b:0, why:"Since R 4.2.0, `|>` accepts `_` as in `data = _`."},
      {t:"Passes the left side as the first argument", b:2, why:"That’s the core job of both pipes."},
      {t:"Works in the Data Lab", b:0, why:"The lab is base R, so `|>` works there; magrittr isn’t available."}
    ]},
    {id:"t3u8-l2-x5", type:"mcq", q:"Sione writes `case_when(age < 45 ~ \"30 to 44\", age < 30 ~ \"under 30\", .default = \"45 and over\")`. What happens to a 24-year-old?", options:[
      {t:"They’re labeled “30 to 44”: the first TRUE condition wins", ok:true, why:"Right. 24 < 45 is TRUE, and case_when() checks conditions top to bottom and stops at the first TRUE. Put the narrower condition (`age < 30`) first."},
      {t:"They’re labeled “under 30”, because R picks the most specific condition", why:"R doesn’t judge which condition is more specific; it uses order. The first TRUE condition wins."},
      {t:"They get both labels", why:"Each row gets exactly one value: the one from the first matching condition."},
      {t:"They get “45 and over”, the default", why:"The default is only used when no condition is TRUE. Here `age < 45` is TRUE."}
    ]},
    {id:"t3u8-l2-x6", type:"spot", q:"Fatima’s pipeline (R with the tidyverse) should add hours per day and show the five highest. Tap the parts that are errors.", ask:"is an error", mono:true, parts:["survey |> ",{t:"mutate(hours_day = hours_year / 365, hours_year = hours * 52)", flag:true, why:"hours_day uses hours_year before it has been created. Inside mutate(), columns are made left to right: put hours_year first."}," |> ",{t:"arrange(desc(hours_day))", flag:false, why:"Correct: sorts largest first."}," |> ",{t:"head", flag:true, why:"The native pipe needs a function call: `head()`, or `head(5)`. A bare `head` is an error with |>."}]},
    {id:"t3u8-l2-x7", type:"explain", q:"Explain what the native pipe `|>` does, using `survey |> filter(group == \"B\") |> select(id, score)` as the example, and why it is easier to read than nesting the calls.", model:"R rewrites `x |> f(y)` as `f(x, y)`: the value on the left becomes the first argument of the function on the right. So the example means `select(filter(survey, group == \"B\"), id, score)`. Nested, you read from the middle outwards and each function’s arguments end up far from its name. With the pipe, the steps are written in the order they happen, and you can read `|>` aloud as “then”: take survey, then keep group B, then keep id and score. It chains neatly because tidyverse verbs take the data first.", points:["Says the left side becomes the first argument of the next function", "Rewrites the example as nested calls", "Says the pipe lists steps in the order they happen (“then”)", "Mentions that it works because tidyverse functions take the data first"]}
   ],
   apply:{intro:"Build the same pipeline both ways. Use a computer or Posit Cloud for the tidyverse, and the Data Lab for base R.", tasks:[
     {t:"Write a tidyverse pipeline (computer or Posit Cloud)", how:["Start from `survey`, keep people who answered **Yes**, add `hours_year = hours * 52`, keep `id`, `hours_year` and `score`, and sort by `hours_year`, largest first","Read it aloud with “then” between steps; does it say what you meant?","Check: the first row should be id 10 (416 hours a year)"]},
     {t:"Write the same steps in base R with |> (Data Lab, any device)", how:["Open any R challenge that uses survey.csv in the Data Lab","Type: `d$hours_year <- d$hours * 52` on one line, then `d |> subset(answer == \"Yes\", select = c(id, hours_year, score)) |> head()`","Press **Run**. Then sort: wrap the subset in brackets and `order()`, or store it as `y` and run `y[order(-y$hours_year), ]`"]},
     {t:"Make bands", how:["Add an age band with `case_when()` (computer) or `cut()` (Data Lab), with your own cut points","Count people per band and check the counts add up to 12"]}
   ], proof:"Your two versions of the pipeline (screenshot or copied text) showing id 10 at the top, and a band count that adds up to 12."},
   read:[{book:"r4ds", where:"Chapter 3, “Data transformation”: Section 3.3.1 “mutate()” and Section 3.4 “The pipe” (with its magrittr note)"},{book:"r4ds", where:"Chapter 4, “Workflow: code style”: Section 4.3 “Pipes”"},{book:"dcss", where:"R for Social Scientists: “Data Wrangling with dplyr” (sections “Pipes” and “Mutate”)"}]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t3u8-l3", title:"Groups, counts and reshaping", minutes:60,
   hook:{q:"A wide table has 3 people and three week columns (week1, week2, week3) of distances walked. You make it long with one row per person per week. How many rows does the long table have?", options:["3","6","9","12"], answer:2, reveal:"**9 rows**: 3 people × 3 weeks. Every number in the week columns becomes its own row, labeled with whose it is and which week. Nothing is added or lost; the same 9 numbers are just arranged differently. This lesson first summarizes data by group, then reshapes tables between wide and long."},
   goals:[
     "Collapse data to summaries with summarize(), and per group with group_by()",
     "Count categories with count(), and turn counts into shares",
     "Handle missing values in summaries and keep group sizes visible",
     "Do the same with tapply(), aggregate() and table() in base R",
     "Reshape tables with pivot_longer() and pivot_wider(), and know base R’s reshape()"
   ],
   learn:[
    {h:"summarize(): many rows into one", body:[
      {lead:"`summarize()` boils a whole column down to one number per result: a mean, a median, a count."},
      {code:"survey |>\n  summarize(n = n(), mean_score = mean(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 1 × 2\n      n mean_score\n  <int>      <dbl>\n1    12       67.4", lang:"txt", label:"What R prints"},
      "Each argument names a result and gives a summary function. `n()` counts rows; you can also use `median()`, `sd()`, `min()`, `max()` and others from Unit 5. (`summarize()` with a z is the same function.) One summary of everyone is useful, but the real power comes with groups."
    ]},
    {h:"group_by() + summarize(): split, apply, combine", body:[
      "[[group-by|group_by()]] marks rows as belonging to groups. On its own it changes nothing you can see except a label: printing a grouped tibble shows `# Groups:   group [2]`. But every verb after it works **group by group**:",
      {code:"survey |>\n  group_by(group) |>\n  summarize(\n    n = n(),\n    mean_score = mean(score),\n    median_hours = median(hours)\n  )", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 2 × 4\n  group     n mean_score median_hours\n  <chr> <int>      <dbl>        <dbl>\n1 A         6       65.3          3.5\n2 B         6       69.5          5.5", lang:"txt", label:"What R prints"},
      "This pattern is called **split–apply–combine**: split the rows into groups, apply a summary to each, and combine the answers into a new table with one row per group. It’s what a spreadsheet [[pivot-table]] does too.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="u8a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="18" text-anchor="middle">1. Start: 12 rows, groups mixed</text><rect class="d-lup" x="14" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="26" y="42" text-anchor="middle">A</text><text class="s" x="26" y="57" text-anchor="middle">61</text><rect class="d-lup" x="40" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="52" y="42" text-anchor="middle">A</text><text class="s" x="52" y="57" text-anchor="middle">70</text><rect class="d-gold" x="66" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="78" y="42" text-anchor="middle">B</text><text class="s" x="78" y="57" text-anchor="middle">55</text><rect class="d-gold" x="92" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="104" y="42" text-anchor="middle">B</text><text class="s" x="104" y="57" text-anchor="middle">78</text><rect class="d-lup" x="118" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="130" y="42" text-anchor="middle">A</text><text class="s" x="130" y="57" text-anchor="middle">66</text><rect class="d-gold" x="144" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="156" y="42" text-anchor="middle">B</text><text class="s" x="156" y="57" text-anchor="middle">49</text><rect class="d-lup" x="170" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="182" y="42" text-anchor="middle">A</text><text class="s" x="182" y="57" text-anchor="middle">83</text><rect class="d-gold" x="196" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="208" y="42" text-anchor="middle">B</text><text class="s" x="208" y="57" text-anchor="middle">72</text><rect class="d-lup" x="222" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="234" y="42" text-anchor="middle">A</text><text class="s" x="234" y="57" text-anchor="middle">60</text><rect class="d-gold" x="248" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="260" y="42" text-anchor="middle">B</text><text class="s" x="260" y="57" text-anchor="middle">88</text><rect class="d-lup" x="274" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="286" y="42" text-anchor="middle">A</text><text class="s" x="286" y="57" text-anchor="middle">52</text><rect class="d-gold" x="300" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="312" y="42" text-anchor="middle">B</text><text class="s" x="312" y="57" text-anchor="middle">75</text><path class="d-ink" d="M170 68 L170 92" stroke-width="2" marker-end="url(#u8a3)"/><text class="s" x="178" y="84" text-anchor="start">group_by(group)</text><text x="170" y="110" text-anchor="middle">2. Split into groups</text><rect class="d-lup" x="14" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="25.5" y="138" text-anchor="middle">61</text><rect class="d-lup" x="39" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="50.5" y="138" text-anchor="middle">70</text><rect class="d-lup" x="64" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="75.5" y="138" text-anchor="middle">66</text><rect class="d-lup" x="89" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="100.5" y="138" text-anchor="middle">83</text><rect class="d-lup" x="114" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="125.5" y="138" text-anchor="middle">60</text><rect class="d-lup" x="139" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="150.5" y="138" text-anchor="middle">52</text><text class="s" x="88" y="162" text-anchor="middle">group A</text><rect class="d-gold" x="180" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="191.5" y="138" text-anchor="middle">55</text><rect class="d-gold" x="205" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="216.5" y="138" text-anchor="middle">78</text><rect class="d-gold" x="230" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="241.5" y="138" text-anchor="middle">49</text><rect class="d-gold" x="255" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="266.5" y="138" text-anchor="middle">72</text><rect class="d-gold" x="280" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="291.5" y="138" text-anchor="middle">88</text><rect class="d-gold" x="305" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="316.5" y="138" text-anchor="middle">75</text><text class="s" x="254" y="162" text-anchor="middle">group B</text><path class="d-ink" d="M88 168 L88 196" stroke-width="2" marker-end="url(#u8a3)"/><path class="d-ink" d="M254 168 L254 196" stroke-width="2" marker-end="url(#u8a3)"/><text class="s" x="170" y="186" text-anchor="middle">mean(score)</text><text x="170" y="214" text-anchor="middle">3. Apply a summary to each group</text><rect class="d-lup" x="44" y="222" width="90" height="28" rx="6" stroke-width="1.5"/><text x="89" y="241" text-anchor="middle">65.3</text><rect class="d-gold" x="210" y="222" width="90" height="28" rx="6" stroke-width="1.5"/><text x="255" y="241" text-anchor="middle">69.5</text><path class="d-ink" d="M89 254 L150 284" stroke-width="2" marker-end="url(#u8a3)"/><path class="d-ink" d="M255 254 L192 284" stroke-width="2" marker-end="url(#u8a3)"/><text x="170" y="304" text-anchor="middle">4. Combine: one row per group</text><rect class="d-panel" x="95" y="312" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="327" text-anchor="middle">group</text><rect class="d-panel" x="170" y="312" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="327" text-anchor="middle">mean_score</text><rect class="d-panel" x="95" y="332" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="347" text-anchor="middle">A</text><rect class="d-panel" x="170" y="332" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="347" text-anchor="middle">65.3</text><rect class="d-panel" x="95" y="352" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="367" text-anchor="middle">B</text><rect class="d-panel" x="170" y="352" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="367" text-anchor="middle">69.5</text></svg>', alt:"Twelve scores in mixed groups A and B are split into group A (61, 70, 66, 83, 60, 52) and group B (55, 78, 49, 72, 88, 75). The mean of each is 65.3 and 69.5, combined into a two-row table of group and mean_score.", cap:"Split–apply–combine with group_by(group) and summarize(mean_score = mean(score))."},
      {tip:"Always include `n = n()` in a grouped summary. A group mean of 80 means a lot more from 200 people than from 2. *R for Data Science* gives a whole case study to this: small groups produce the most extreme averages."},
      "Grouping by two columns gives one row per combination. dplyr then drops the **last** grouping level and tells you so:",
      {code:"survey |>\n  group_by(group, answer) |>\n  summarize(mean_score = mean(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"`summarize()` has regrouped the output.\nℹ Summaries were computed grouped by group and answer.\nℹ Output is grouped by group.\nℹ Use `summarize(.groups = \"drop_last\")` to silence this message.\nℹ Use `summarize(.by = c(group, answer))` for per-operation grouping\n  (`?dplyr::dplyr_by`) instead.", lang:"txt", label:"What R prints (message, dplyr 1.2 or later)"},
      "Older versions (dplyr 1.1 and earlier) say the same thing more briefly: “`summarize()` has grouped output by 'group'. You can override using the `.groups` argument.”",
      "The result (6 rows) is still grouped by `group`, so any later verb would work within groups. Add `|> ungroup()` when you’re done, or skip grouping by using the `.by` argument for a one-off grouped summary, which never leaves groups behind: `summarize(survey, mean_score = mean(score), .by = group)`.",
      "Grouping works with `mutate()` too. Then the summary is computed per group but every row is kept: `survey |> group_by(group) |> mutate(vs_group = score - mean(score)) |> ungroup()` shows how far each person is above or below their own group’s mean (person 1: 61 − 65.3 = −4.33)."
    ]},
    {h:"count(), shares and missing values", body:[
      "Counting is so common that dplyr has a shortcut: `count(x)` is `group_by(x) |> summarize(n = n())`.",
      {code:"survey |> count(answer)\nsurvey |> count(answer, sort = TRUE)\nsurvey |> count(group, answer)", lang:"r", label:"R · computer or Posit Cloud"},
      "The first gives No 4, Unsure 2, Yes 6 (alphabetical order); `sort = TRUE` puts the biggest first; two columns count every combination (6 rows here). Turn counts into **shares** by dividing by the total:",
      {code:"survey |>\n  count(answer) |>\n  mutate(share = n / sum(n))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 3 × 3\n  answer     n share\n  <chr>  <int> <dbl>\n1 No         4 0.333\n2 Unsure     2 0.167\n3 Yes        6 0.5  ", lang:"txt", label:"What R prints"},
      "**Missing values** spread through summaries. If any score is `NA`, `mean(score)` is NA, because R won’t guess the missing number:",
      {code:"x <- c(61, NA, 70)\nmean(x)\nmean(x, na.rm = TRUE)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] NA\n[1] 65.5", lang:"txt", label:"What R prints"},
      "`na.rm = TRUE` (“remove NAs”) computes the mean of the values you have. That’s often right, but say so in your write-up, and remember `n()` still counts the rows with missing scores. `sum(!is.na(score))` counts the values actually used. Unit 2 covers why values go missing and how to record them ([[na-value|NA]])."
    ]},
    {h:"The base R way to summarize", body:[
      {code:"tapply(d$score, d$group, mean)\naggregate(score ~ group, data = d, FUN = mean)\naggregate(cbind(score, hours) ~ group, data = d, FUN = mean)\ntable(d$answer)\nprop.table(table(d$answer))", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"       A        B \n65.33333 69.50000 \n  group    score\n1     A 65.33333\n2     B 69.50000\n  group    score    hours\n1     A 65.33333 4.000000\n2     B 69.50000 4.666667\n\n    No Unsure    Yes \n     4      2      6 \n\n       No    Unsure       Yes \n0.3333333 0.1666667 0.5000000 ", lang:"txt", label:"What R prints"},
      {table:[["Job","dplyr","Base R"],["Mean per group","`group_by(g) |> summarize(m = mean(x))`","`tapply(d$x, d$g, mean)` or `aggregate(x ~ g, data = d, FUN = mean)`"],["Count each category","`count(answer)`","`table(d$answer)`"],["Shares","`mutate(share = n / sum(n))`","`prop.table(table(d$answer))`"],["Per-row group mean","`group_by(g) |> mutate(m = mean(x))`","`ave(d$x, d$g)`"]]},
      "The base results come in different shapes: `tapply()` and `table()` return labeled lists of numbers (strictly, arrays; handy to print), while `aggregate()` returns a data frame (handy to keep working with). dplyr always returns a tibble, which is one reason long pipelines are easier there.",
      {lab:"dl-r-groups", t:"Practice: the mean score for each group with tapply() or aggregate()"},
      {lab:"dl-r-table", t:"Practice: count the answers with table() and work out the share of Yes"}
    ]},
    {h:"Reshaping: the same data, longer or wider", body:[
      "Unit 2 showed that one table can come in a [[wide-format|wide]] shape (one row per person, a column for each week) or a [[long-format|long]] shape (one row per person per week). Wide is easy for people to read; long is what dplyr and ggplot2 want, because “week” is a variable and belongs in a column, not hidden in column names. tidyr moves between them.",
      "Here’s an invented walking club’s distances, in km, typed straight in as a tibble:",
      {code:"library(tidyverse)\nwalks <- tibble(\n  name  = c(\"Amara\", \"Kenji\", \"Lucía\"),\n  week1 = c(12, 8, 15),\n  week2 = c(10, 11, 14),\n  week3 = c(14, 9, 16)\n)\nlong <- walks |>\n  pivot_longer(\n    cols = week1:week3,\n    names_to = \"week\",\n    values_to = \"km\"\n  )\nlong", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 9 × 3\n  name  week     km\n  <chr> <chr> <dbl>\n1 Amara week1    12\n2 Amara week2    10\n3 Amara week3    14\n4 Kenji week1     8\n…", lang:"txt", label:"What R prints (first rows)"},
      "[[pivot-longer|pivot_longer()]] needs three things: `cols`, the columns to stack; `names_to`, a name for the new column that will hold the old column **names**; and `values_to`, a name for the column that will hold the **values**. Each cell becomes a row, and `name` is repeated to say whose it is.",
      {fig:'<svg viewBox="0 0 340 342"><defs><marker id="u8a4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="16" text-anchor="middle">Wide: one row per person</text><rect class="d-panel" x="30" y="24" width="70" height="20" stroke-width="1"/><text class="s" x="65" y="39" text-anchor="middle">name</text><rect class="d-panel" x="100" y="24" width="70" height="20" stroke-width="1"/><text class="s" x="135" y="39" text-anchor="middle">week1</text><rect class="d-panel" x="170" y="24" width="70" height="20" stroke-width="1"/><text class="s" x="205" y="39" text-anchor="middle">week2</text><rect class="d-panel" x="240" y="24" width="70" height="20" stroke-width="1"/><text class="s" x="275" y="39" text-anchor="middle">week3</text><rect class="d-lup" x="30" y="44" width="70" height="20" stroke-width="1"/><text class="s" x="65" y="59" text-anchor="middle">Amara</text><rect class="d-lup" x="100" y="44" width="70" height="20" stroke-width="1"/><text class="s" x="135" y="59" text-anchor="middle">12</text><rect class="d-lup" x="170" y="44" width="70" height="20" stroke-width="1"/><text class="s" x="205" y="59" text-anchor="middle">10</text><rect class="d-lup" x="240" y="44" width="70" height="20" stroke-width="1"/><text class="s" x="275" y="59" text-anchor="middle">14</text><rect class="d-panel" x="30" y="64" width="70" height="20" stroke-width="1"/><text class="s" x="65" y="79" text-anchor="middle">Kenji</text><rect class="d-panel" x="100" y="64" width="70" height="20" stroke-width="1"/><text class="s" x="135" y="79" text-anchor="middle">8</text><rect class="d-panel" x="170" y="64" width="70" height="20" stroke-width="1"/><text class="s" x="205" y="79" text-anchor="middle">11</text><rect class="d-panel" x="240" y="64" width="70" height="20" stroke-width="1"/><text class="s" x="275" y="79" text-anchor="middle">9</text><rect class="d-panel" x="30" y="84" width="70" height="20" stroke-width="1"/><text class="s" x="65" y="99" text-anchor="middle">Lucía</text><rect class="d-panel" x="100" y="84" width="70" height="20" stroke-width="1"/><text class="s" x="135" y="99" text-anchor="middle">15</text><rect class="d-panel" x="170" y="84" width="70" height="20" stroke-width="1"/><text class="s" x="205" y="99" text-anchor="middle">14</text><rect class="d-panel" x="240" y="84" width="70" height="20" stroke-width="1"/><text class="s" x="275" y="99" text-anchor="middle">16</text><path class="d-ink" d="M24 108 L24 150" stroke-width="2" marker-end="url(#u8a4)"/><path class="d-ink" d="M316 150 L316 108" stroke-width="2" marker-end="url(#u8a4)"/><text class="s" x="170" y="124" text-anchor="middle">pivot_longer(): wide to long ↓</text><text class="s" x="170" y="142" text-anchor="middle">↑ pivot_wider(): long to wide</text><text x="170" y="166" text-anchor="middle">Long: one row per person per week</text><rect class="d-panel" x="65" y="174" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="189" text-anchor="middle">name</text><rect class="d-panel" x="135" y="174" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="189" text-anchor="middle">week</text><rect class="d-panel" x="205" y="174" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="189" text-anchor="middle">km</text><rect class="d-lup" x="65" y="194" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="209" text-anchor="middle">Amara</text><rect class="d-lup" x="135" y="194" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="209" text-anchor="middle">week1</text><rect class="d-lup" x="205" y="194" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="209" text-anchor="middle">12</text><rect class="d-lup" x="65" y="214" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="229" text-anchor="middle">Amara</text><rect class="d-lup" x="135" y="214" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="229" text-anchor="middle">week2</text><rect class="d-lup" x="205" y="214" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="229" text-anchor="middle">10</text><rect class="d-lup" x="65" y="234" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="249" text-anchor="middle">Amara</text><rect class="d-lup" x="135" y="234" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="249" text-anchor="middle">week3</text><rect class="d-lup" x="205" y="234" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="249" text-anchor="middle">14</text><rect class="d-panel" x="65" y="254" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="269" text-anchor="middle">Kenji</text><rect class="d-panel" x="135" y="254" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="269" text-anchor="middle">week1</text><rect class="d-panel" x="205" y="254" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="269" text-anchor="middle">8</text><rect class="d-panel" x="65" y="274" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="289" text-anchor="middle">…</text><rect class="d-panel" x="135" y="274" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="289" text-anchor="middle">…</text><rect class="d-panel" x="205" y="274" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="289" text-anchor="middle">…</text><rect class="d-panel" x="65" y="294" width="70" height="20" stroke-width="1"/><text class="s" x="100" y="309" text-anchor="middle">Lucía</text><rect class="d-panel" x="135" y="294" width="70" height="20" stroke-width="1"/><text class="s" x="170" y="309" text-anchor="middle">week3</text><rect class="d-panel" x="205" y="294" width="70" height="20" stroke-width="1"/><text class="s" x="240" y="309" text-anchor="middle">16</text><text class="s" x="170" y="332" text-anchor="middle">3 people × 3 weeks = 9 rows (… = rows not shown)</text></svg>', alt:"A wide table with columns name, week1, week2, week3 and rows Amara, Kenji, Lucía. pivot_longer turns it into a long table with columns name, week, km where Amara’s three values become three rows. pivot_wider goes back.", cap:"pivot_longer() stacks the week columns into rows; pivot_wider() spreads them back out."},
      "The new `week` column holds text like \"week1\". Two extra arguments clean it while pivoting: `names_prefix = \"week\"` strips the prefix and `names_transform = as.integer` makes it a number, so weeks sort and plot properly:",
      {code:"library(tidyverse)\nwalks <- tibble(\n  name  = c(\"Amara\", \"Kenji\", \"Lucía\"),\n  week1 = c(12, 8, 15),\n  week2 = c(10, 11, 14),\n  week3 = c(14, 9, 16)\n)\nwalks |>\n  pivot_longer(\n    cols = starts_with(\"week\"),\n    names_to = \"week\",\n    names_prefix = \"week\",\n    names_transform = as.integer,\n    values_to = \"km\"\n  )", lang:"r", label:"R · computer or Posit Cloud"},
      "Once data is long, the other verbs just work: `long |> group_by(name) |> summarize(total_km = sum(km))` gives Amara 36, Kenji 28, Lucía 45."
    ]},
    {h:"pivot_wider(), and reshaping in base R", body:[
      "[[pivot-wider|pivot_wider()]] is the reverse. `names_from` says which column supplies the new column names, `values_from` which supplies the cells: `long |> pivot_wider(names_from = week, values_from = km)` rebuilds the original wide table.",
      "A useful everyday case is turning a long count into a cross-table, like a pivot table:",
      {code:"survey |>\n  count(group, answer) |>\n  pivot_wider(\n    names_from = answer,\n    values_from = n,\n    values_fill = 0\n  )", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 2 × 4\n  group    No Unsure   Yes\n  <chr> <int>  <int> <int>\n1 A         2      1     3\n2 B         2      1     3", lang:"txt", label:"What R prints"},
      "If a combination never occurs (say nobody in group A answered Unsure), its cell would be `NA`. `values_fill = 0` fills those gaps with 0, which is right for counts but would be wrong for, say, a missing measurement.",
      "Base R has one function for both directions, `reshape()`. It works, but its arguments are famously hard to remember, and it labels rows with names like `Amara.1`:",
      {code:"walks <- data.frame(\n  name  = c(\"Amara\", \"Kenji\", \"Lucía\"),\n  week1 = c(12, 8, 15),\n  week2 = c(10, 11, 14),\n  week3 = c(14, 9, 16)\n)\nlong <- reshape(walks,\n  direction = \"long\",\n  varying = c(\"week1\", \"week2\", \"week3\"),\n  v.names = \"km\",\n  timevar = \"week\",\n  times = 1:3,\n  idvar = \"name\"\n)\nlong\nreshape(long, direction = \"wide\",\n  idvar = \"name\", timevar = \"week\")", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"         name week km\nAmara.1 Amara    1 12\nKenji.1 Kenji    1  8\nLucía.1 Lucía    1 15\nAmara.2 Amara    2 10\n…\n         name km.1 km.2 km.3\nAmara.1 Amara   12   10   14\nKenji.1 Kenji    8   11    9\nLucía.1 Lucía   15   14   16", lang:"txt", label:"What R prints (shortened)"},
      "For counts, base R’s `table(d$group, d$answer)` already gives the wide cross-table directly.",
      {key:"Reshaping never changes the numbers, only where they sit. If your row count after pivot_longer() isn’t (rows × columns stacked), something unexpected is going on."}
    ]}
   ],
   try:[
    {id:"t3u8-l3-x1", type:"number", q:"Group B’s scores are 55, 78, 49, 72, 88 and 75. What is `mean_score` for B in `survey |> group_by(group) |> summarize(mean_score = mean(score))`?", answer:69.5, tol:0.05, unit:"points", why:"55 + 78 + 49 + 72 + 88 + 75 = 417, and 417 ÷ 6 = 69.5. group_by() makes summarize() compute this separately for each group.", wrongs:[{v:67.4, tol:0.1, why:"67.4 is the mean of all 12 people, as if group_by() were missing."},{v:73.5, tol:0.05, why:"73.5 is the median of group B (the middle of 72 and 75). The code asks for mean()."},{v:417, tol:0, why:"That’s the total. The mean divides by the 6 people."}]},
    {id:"t3u8-l3-x2", type:"match", q:"Match each question to the code that answers it.", pairs:[
      ["How many people gave each answer?","`count(survey, answer)`","count() is group_by() + summarize(n = n()) in one step."],
      ["What’s the mean score of everyone?","`summarize(survey, m = mean(score))`","No grouping, so one row for the whole table."],
      ["What’s the mean score in each group?","`survey |> group_by(group) |> summarize(m = mean(score))`","Grouping first gives one row per group."],
      ["How far is each person from their group’s mean?","`survey |> group_by(group) |> mutate(d = score - mean(score))`","A grouped mutate() keeps every row and uses each group’s own mean."]
    ]},
    {id:"t3u8-l3-x3", type:"mcq", q:"Hana groups by `group` and `answer` (2 groups × 3 answers, every combination present) and summarizes the mean score. How many rows, and how is the result grouped?", options:[
      {t:"6 rows, still grouped by `group`", ok:true, why:"One row per combination (2 × 3 = 6). summarize() peels off the last grouping level (answer) and keeps the rest, which is what its message says. Use ungroup() or .groups to change that."},
      {t:"6 rows, no grouping left", why:"summarize() drops only the last grouping level by default; the result is still grouped by group."},
      {t:"2 rows, one per group", why:"With two grouping columns you get one row per combination of both."},
      {t:"12 rows, one per person", why:"That would be a grouped mutate(). summarize() collapses each group to one row."}
    ]},
    {id:"t3u8-l3-x4", type:"mcq", q:"Dmitri’s summary says the mean score is `NA`. He checks: one person’s score is missing. What’s the best next step?", options:[
      {t:"Use `na.rm = TRUE` and report how many values it uses", ok:true, why:"`mean(score, na.rm = TRUE)` averages the values you have; reporting the count (for example with `sum(!is.na(score))`) keeps readers informed that one value is missing."},
      {t:"Replace the missing score with 0 and recompute", why:"0 is a real score, not “unknown”. It would pull the mean down and misrepresent that person."},
      {t:"Delete the whole column", why:"That throws away 11 good scores to hide one missing one."},
      {t:"Nothing: an NA mean means the scores average to exactly zero", why:"NA means R can’t compute the answer because a value is unknown. It doesn’t mean zero."}
    ]},
    {id:"t3u8-l3-x5", type:"sort", q:"Each call is run on a 3-person, 3-week table. Does it make the table **longer** (more rows) or **wider** (more columns)?", buckets:["Longer","Wider"], items:[
      {t:"`pivot_longer(walks, week1:week3, names_to = \"week\", values_to = \"km\")`", b:0, why:"Stacks 3 columns into rows: 3 rows become 9."},
      {t:"`pivot_wider(long, names_from = week, values_from = km)`", b:1, why:"Spreads the week values into columns: 9 rows become 3."},
      {t:"`count(survey, group, answer) |> pivot_wider(names_from = answer, values_from = n)`", b:1, why:"Each answer becomes a column: a cross-table."},
      {t:"`reshape(walks, direction = \"long\", …)`", b:0, why:"Base R’s reshape with direction = \"long\" stacks columns into rows."}
    ]},
    {id:"t3u8-l3-x6", type:"number", q:"A wide table records 5 bus routes (rows), with a `route` column and 7 columns of passenger counts, one per day of the week. After `pivot_longer()` on the 7 day columns, how many rows does it have?", answer:35, tol:0, unit:"rows", why:"Each route contributes one row per stacked column: 5 routes × 7 days = 35 rows (with columns route, day and passengers).", wrongs:[{v:12, tol:0, why:"That adds 5 + 7. Each of the 5 rows is repeated 7 times, so multiply."},{v:40, tol:0, why:"That counts 8 columns per route (including route itself). Only the 7 day columns are stacked."},{v:7, tol:0, why:"That’s the number of day columns. Each one becomes a row for every route."}]},
    {id:"t3u8-l3-x7", type:"explain", q:"Explain what `survey |> group_by(group) |> summarize(n = n(), mean_score = mean(score))` does, and why including `n = n()` is a good habit.", model:"`group_by()` marks which group each row belongs to, and `summarize()` then works group by group. The rows are split into groups A and B, each group’s rows are boiled down to a count and a mean, and the answers are combined into a new table with one row per group: here 6 people with mean 65.3 in A and 6 with mean 69.5 in B. This is split–apply–combine, like a pivot table. `n = n()` shows how many rows each mean rests on, and small groups give the most extreme averages.", points:["Says `group_by()` marks groups and later verbs work within them", "Describes split–apply–combine, giving one row per group", "Says `n()` counts the rows in each group", "Explains that small groups give less reliable, more extreme means"]}
   ],
   apply:{intro:"Summarise and reshape the survey. Use the Data Lab for base R; the tidyverse parts need a computer or Posit Cloud.", tasks:[
     {t:"Compare groups in base R (Data Lab, any device)", how:["Solve the Data Lab’s **Compare groups** and **Count answers** challenges","In the same editor, press **Run** on `aggregate(cbind(score, hours) ~ group, data = d, FUN = mean)` and `table(d$group, d$answer)`","Write one sentence comparing A and B, including how many people are in each group"]},
     {t:"Do it with dplyr (computer or Posit Cloud)", how:["Run `survey |> group_by(group) |> summarize(n = n(), mean_score = mean(score), mean_hours = mean(hours))`","Run `survey |> count(group, answer) |> pivot_wider(names_from = answer, values_from = n, values_fill = 0)`","Check both against your base R results"]},
     {t:"Reshape a table of your own", how:["Write down a small wide table from your life (3–4 rows, 3 measurement columns: weekly spending, monthly bills, practice minutes…)","Type it in as a tibble and make it long with pivot_longer(); predict the number of rows first","Summarise the long table by row with group_by() + summarize()"]}
   ], proof:"Your group comparison sentence (with group sizes), plus the predicted and actual row count of your own long table."},
   read:[{book:"r4ds", where:"Chapter 3, “Data transformation”: Section 3.5 “Groups” and Section 3.6 “Case study: aggregates and sample size”"},{book:"r4ds", where:"Chapter 5, “Data tidying”: Sections 5.2 “Tidy data”, 5.3 “Lengthening data” and 5.4 “Widening data”"},{book:"dcss", where:"R for Social Scientists: “Data Wrangling with dplyr” (section “Split-apply-combine data analysis and the summarize() function”) and “Data Wrangling with tidyr”"}]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u8-l4", title:"The grammar of ggplot2", minutes:55,
   hook:{q:"In R, this code runs without an error: `ggplot(survey, aes(x = hours, y = score, color = \"blue\")) + geom_point()`. What color are the points?", options:["Blue","A reddish pink, with a legend that says “blue”","Black","Every point a different color"], answer:1, reveal:"**Reddish pink, with a legend labeled “blue”.** Anything inside `aes()` is treated as data to be *mapped*: ggplot2 sees a column whose every value is the word \"blue\", gives that one category its first default color (a salmon pink), and adds a legend for it. To simply *set* a color, put it outside `aes()`: `geom_point(color = \"blue\")`. This lesson explains that difference and the rest of ggplot2’s grammar."},
   goals:[
     "Describe a chart as data + aesthetic mappings + geoms, the grammar behind ggplot2",
     "Build scatterplots, histograms, boxplots, bar charts and line charts",
     "Tell mapping (inside aes()) from setting (outside), and use more than color to show groups",
     "Split a chart into small multiples with facet_wrap()",
     "Fix the two most common ggplot2 errors, and draw the same charts in base R"
   ],
   learn:[
    {h:"A grammar for charts", body:[
      {lead:"Most chart tools ask “which chart type?”. ggplot2 asks “which data, shown how?”, and builds the chart from parts."},
      "[[ggplot2]] is based on the **grammar of graphics**: the idea that every chart is made of the same components, as every sentence is made of nouns and verbs. The ones you need first:",
      {list:[
        "**Data**: a tidy data frame.",
        "**[[aesthetic-mapping|Aesthetic mappings]]**: which column drives which visual property: x position, y position, color, shape, size.",
        "**[[geom|Geoms]]**: the marks that draw the data: points, bars, lines, boxes.",
        "Optional extras: **facets** (small multiples), **scales** (how values become colors or axis checks), **labels** and a **theme**."
      ]},
      "You add them together with `+`, one layer at a time. Because the parts are independent, swapping `geom_point()` for `geom_line()` changes the chart type without touching anything else. That’s also why ggplot2 wants **long** data (Lesson 3): each aesthetic needs one column to map.",
      {fig:'<svg viewBox="0 0 340 498"><defs><marker id="u8a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="14" y="8" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="28" text-anchor="start">Data</text><text class="s" x="26" y="46" text-anchor="start">ggplot(survey, …)</text><text x="170" y="74" text-anchor="middle">+</text><rect class="d-lup" x="14" y="80" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="100" text-anchor="start">Aesthetic mappings</text><text class="s" x="26" y="118" text-anchor="start">aes(x = hours, y = score, color = group)</text><text x="170" y="146" text-anchor="middle">+</text><rect class="d-sage" x="14" y="152" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="172" text-anchor="start">Geom: the marks</text><text class="s" x="26" y="190" text-anchor="start">geom_point()</text><text x="170" y="218" text-anchor="middle">+</text><rect class="d-rose" x="14" y="224" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="244" text-anchor="start">Facets (optional)</text><text class="s" x="26" y="262" text-anchor="start">facet_wrap(~ group)</text><text x="170" y="290" text-anchor="middle">+</text><rect class="d-panel" x="14" y="296" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="316" text-anchor="start">Labels, scales, theme</text><text class="s" x="26" y="334" text-anchor="start">labs(…) + theme_minimal()</text><text class="s" x="170" y="372" text-anchor="middle">Result: one chart, built layer by layer</text><path class="d-ink" d="M40 382 L40 472 L300 472" stroke-width="1.5"/><circle class="d-lup" cx="130" cy="441.6" r="5" stroke-width="2"/><circle class="d-lup" cx="190" cy="424.5" r="5" stroke-width="2"/><rect class="d-gold" x="95.5" y="448.5" width="9" height="9" stroke-width="2"/><rect class="d-gold" x="215.5" y="404.8" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="160" cy="432.1" r="5" stroke-width="2"/><rect class="d-gold" x="65.5" y="459.9" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="250" cy="399.8" r="5" stroke-width="2"/><rect class="d-gold" x="185.5" y="416.2" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="130" cy="443.5" r="5" stroke-width="2"/><rect class="d-gold" x="275.5" y="385.8" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="100" cy="458.7" r="5" stroke-width="2"/><rect class="d-gold" x="215.5" y="410.5" width="9" height="9" stroke-width="2"/><text class="s" x="170" y="488" text-anchor="middle">hours →</text><text class="s" x="36" y="390" text-anchor="end">score</text><circle class="d-lup" cx="250" cy="484" r="5" stroke-width="2"/><text class="s" x="260" y="488" text-anchor="start">A</text><rect class="d-gold" x="281.5" y="479.5" width="9" height="9" stroke-width="2"/><text class="s" x="296" y="488" text-anchor="start">B</text></svg>', alt:"Five stacked layers joined by plus signs: Data ggplot(survey); Aesthetic mappings aes(x = hours, y = score, color = group); Geom geom_point(); Facets facet_wrap(~ group), optional; Labels, scales, theme. Below, a small scatterplot of score against hours with circles for group A and squares for group B.", cap:"A ggplot2 chart is built from layers added with +."}
    ]},
    {h:"Your first ggplot", body:[
      {code:"ggplot(survey, aes(x = hours, y = score)) +\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      "Read it in two parts. `ggplot(survey, aes(x = hours, y = score))` sets up the data and the mappings: an empty canvas with hours along the bottom and score up the side. `+ geom_point()` adds a layer of points, one per row. The result is a [[scatterplot]] where scores clearly rise with study hours.",
      "Now map a third column. Adding `color = group` inside `aes()` colors points by group and adds a legend automatically. Mapping **shape** too means the groups stay distinguishable in greyscale and for people with color vision deficiency (Unit 4’s advice: never rely on color alone):",
      {code:"ggplot(survey,\n  aes(x = hours, y = score, color = group, shape = group)) +\n  geom_point(size = 3)", lang:"r", label:"R · computer or Posit Cloud"},
      "A second geom adds a second layer on the same mappings. `geom_smooth(method = \"lm\")` draws the straight line of best fit with a gray band showing its uncertainty; R also prints a short message saying which formula it used (`y ~ x`, a straight line):",
      {code:"ggplot(survey, aes(x = hours, y = score)) +\n  geom_point() +\n  geom_smooth(method = \"lm\")", lang:"r", label:"R · computer or Posit Cloud"}
    ]},
    {h:"Mapping or setting?", body:[
      "This is the single most important distinction in ggplot2, and the trick behind the warm-up:",
      {table:[["","Mapping","Setting"],["Where","Inside `aes()`","Outside `aes()`, in the geom"],["Value comes from","A column of the data","A fixed value you type"],["Example","`aes(color = group)`","`geom_point(color = \"steelblue\")`"],["Legend?","Yes, explains the mapping","No, nothing to explain"]]},
      {code:"# mapping: color comes from the data\nggplot(survey, aes(x = hours, y = score)) +\n  geom_point(aes(color = group))\n\n# setting: every point is the same color\nggplot(survey, aes(x = hours, y = score)) +\n  geom_point(color = \"steelblue\", size = 3)", lang:"r", label:"R · computer or Posit Cloud"},
      "The first chart’s colors change with group. The second chart’s points are all steel blue and size 3. Put `color = \"blue\"` inside `aes()` instead, and ggplot2 treats \"blue\" as a data value, picks its first default color for it and adds a pointless legend.",
      "Common aesthetics: `x`, `y`, `color` (outline or point color), `fill` (inside of bars and boxes), `shape`, `size`, `linewidth` (thickness of lines) and `alpha` (transparency from 0 to 1, useful when points overlap)."
    ]},
    {h:"Choosing a geom for the question", body:[
      "Unit 4 matched questions to chart types. Here are the ggplot2 geoms for them:",
      {table:[["Question","Geom","Mappings"],["How is one number spread out?","`geom_histogram()`","x only"],["How do groups compare?","`geom_boxplot()`","x = group, y = number"],["How many in each category?","`geom_bar()`","x only (it counts rows)"],["Already have the counts?","`geom_col()`","x = category, y = count"],["Do two numbers move together?","`geom_point()`","x and y"],["How does it change over time?","`geom_line()`","x = time, y = value"]]},
      {code:"ggplot(survey, aes(x = hours)) +\n  geom_histogram(binwidth = 2)\n\nggplot(survey, aes(x = group, y = score)) +\n  geom_boxplot()\n\nggplot(survey, aes(x = answer)) +\n  geom_bar()", lang:"r", label:"R · computer or Posit Cloud"},
      "`geom_histogram()` draws a [[histogram-chart|histogram]], sorting values into bins; always choose `binwidth` yourself, since the default (30 bins) rarely suits your data and the shape can change with it ([[bin-width]], Unit 5). `geom_boxplot()` draws the median, quartiles and outliers ([[boxplot]]). `geom_bar()` counts rows for you: the Yes bar is 6 high, No 4, Unsure 2.",
      "If you’ve already counted, use `geom_col()`, which draws the y values you give it:",
      {code:"answers <- count(survey, answer)\nggplot(answers, aes(x = answer, y = n)) +\n  geom_col()", lang:"r", label:"R · computer or Posit Cloud"},
      "Lines need long data with a time column. Using the walking club from Lesson 3, with `week` as a number:",
      {code:"library(tidyverse)\nwalks <- tibble(\n  name  = c(\"Amara\", \"Kenji\", \"Lucía\"),\n  week1 = c(12, 8, 15),\n  week2 = c(10, 11, 14),\n  week3 = c(14, 9, 16)\n)\nlong <- walks |>\n  pivot_longer(starts_with(\"week\"), names_to = \"week\",\n    names_prefix = \"week\", names_transform = as.integer,\n    values_to = \"km\")\nggplot(long, aes(x = week, y = km, color = name)) +\n  geom_line(linewidth = 1) +\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      "Mapping `color = name` also tells ggplot2 to draw one line per person. Without a grouping it would try to join all nine points into one zig-zag."
    ]},
    {h:"Facets: small multiples", body:[
      "When one chart gets crowded, split it into a panel per group with the same axes, Unit 4’s [[small-multiples]]. In ggplot2 that’s one more layer, a [[facet-ggplot|facet]]:",
      {code:"ggplot(survey, aes(x = hours, y = score)) +\n  geom_point() +\n  facet_wrap(~ group)", lang:"r", label:"R · computer or Posit Cloud"},
      "`facet_wrap(~ group)` makes one panel for A and one for B, wrapping onto new rows if there are many. Read `~ group` as “by group”. All panels share the same scales by default, so you can compare them fairly; `scales = \"free_y\"` lets each have its own y-axis, which helps when groups differ hugely in size but makes comparisons harder. `facet_grid(rows ~ cols)` crosses two variables into a grid.",
      {warn:"Don’t confuse these with OpenRefine’s facets (Unit 3), which are filters for exploring a column. Here a facet is a panel of a chart."}
    ]},
    {h:"Two common errors", body:[
      "**`+` must end the line, not start it.** R runs a line as soon as it is complete. In the code below the first line is a complete plot, so R draws an empty canvas, then meets `+ geom_point()` on its own:",
      {code:"ggplot(survey, aes(x = hours, y = score))\n+ geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"Error:\n! Cannot use `+` with a single argument.\nℹ Did you accidentally put `+` on a new line?", lang:"txt", label:"What R prints"},
      "**Layers join with `+`, not a pipe.** ggplot2 was written before the pipe became popular, so its layers use `+`. Using `|>` between layers gives:",
      {code:"survey |>\n  ggplot(aes(x = hours, y = score)) |>\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"Error in `geom_point()`:\n! `mapping` must be created by `aes()`.\n✖ You\'ve supplied a <ggplot2::ggplot> object.\nℹ Did you use `%>%` or `|>` instead of `+`?", lang:"txt", label:"What R prints (ggplot2 4.x)"},
      "It’s fine to pipe data **into** `ggplot()`, then switch to `+`. The style rule is the same for both: put the `|>` or `+` at the end of the line.",
      {code:"survey |>\n  filter(group == \"B\") |>\n  ggplot(aes(x = hours, y = score)) +\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      {tip:"The package is **ggplot2** (load it with `library(ggplot2)` or the tidyverse); the function is **ggplot()**, without the 2."}
    ]},
    {h:"The base R way to chart", body:[
      "Base R’s graphics work differently: each function draws immediately, like a pen on paper, rather than building an object from layers. They’re quick for a first look, and they run in the Data Lab:",
      {code:"plot(d$hours, d$score)\nhist(d$hours)\nboxplot(score ~ group, data = d)\nbarplot(table(d$answer))", lang:"r", label:"R · base R, runs in the Data Lab"},
      "`plot()` makes a scatterplot, `hist()` a histogram, `boxplot(score ~ group)` one box per group, and `barplot(table(…))` a bar chart of counts. Coloring by group means building the colors and the legend yourself:",
      {code:"plot(score ~ hours, data = d, pch = 19,\n  col = ifelse(d$group == \"A\", \"darkorange\", \"steelblue\"))\nlegend(\"topleft\", legend = c(\"A\", \"B\"), pch = 19,\n  col = c(\"darkorange\", \"steelblue\"))", lang:"r", label:"R · base R, runs in the Data Lab"},
      "That manual work is the main reason people move to ggplot2: the mapping, legend and facets come from the grammar. Unit 8 covers base plots in more detail ({{base-plots-r}}).",
      {lab:"dl-r-hist", t:"Practice: a histogram of hours with a title and axis label, in base R"},
      {lab:"dl-r-cor", t:"Practice: plot(d$hours, d$score), then measure the pattern with cor()"}
    ]}
   ],
   try:[
    {id:"t3u8-l4-x1", type:"sort", q:"For each instruction, does the code go inside `aes()` (mapping) or outside it, in the geom (setting)?", buckets:["Inside aes()","Outside aes()"], items:[
      {t:"Color each point by its group", b:0, why:"The color depends on a column, so it’s a mapping."},
      {t:"Make every point size 3", b:1, why:"A fixed value for all points is a setting: `geom_point(size = 3)`."},
      {t:"Put hours on the x-axis", b:0, why:"Position comes from a column: `aes(x = hours)`."},
      {t:"Make all bars gray", b:1, why:"One color for everything: `geom_bar(fill = \"gray\")`."},
      {t:"Use a different shape for each answer", b:0, why:"Shape depends on the answer column: `aes(shape = answer)`."},
      {t:"Make every point half transparent", b:1, why:"A fixed transparency: `geom_point(alpha = 0.5)`."}
    ]},
    {id:"t3u8-l4-x2", type:"match", q:"Match each question to the geom that answers it best.", pairs:[
      ["How are study hours spread out?","`geom_histogram()`","One number’s distribution: bins along x, counts up y."],
      ["Do scores differ between groups A and B?","`geom_boxplot()`","Compares medians, spread and outliers across groups."],
      ["How many people gave each answer?","`geom_bar()`","Counts the rows in each category for you."],
      ["Do more hours go with higher scores?","`geom_point()`","Two numbers, one point per person: a scatterplot."],
      ["How did each walker’s distance change week by week?","`geom_line()`","Change over time, one line per person."]
    ]},
    {id:"t3u8-l4-x3", type:"number", q:"`ggplot(survey, aes(x = answer)) + geom_bar()` on the 12-person survey (6 Yes, 4 No, 2 Unsure). How tall is the tallest bar?", answer:6, tol:0, unit:"people", why:"geom_bar() counts the rows in each category. Yes has 6 rows, so its bar reaches 6.", wrongs:[{v:12, tol:0, why:"12 is the total. geom_bar() draws one bar per answer, each with that answer’s count."},{v:0.5, tol:0, why:"0.5 is Yes’s share. geom_bar() shows counts unless you ask for proportions."}]},
    {id:"t3u8-l4-x4", type:"spot", q:"Oluwaseun’s chart code gives an error. Tap the parts that are wrong.", ask:"is wrong", mono:true, parts:["survey |> ",{t:"ggplot(aes(x = hours, y = score))", flag:false, why:"Piping data into ggplot() is fine; the data becomes its first argument."},{t:" |> ", flag:true, why:"Between layers ggplot2 needs `+`, not a pipe. R even suggests this in its error message."},{t:"geom_point(color = \"darkgreen\")", flag:false, why:"Setting one color outside aes() is correct."},{t:" + ", flag:false, why:"Correct: + joins layers."},{t:"facet_wrap(~ group)", flag:false, why:"Correct: one panel per group."}]},
    {id:"t3u8-l4-x5", type:"mcq", q:"Lucía has a table `answers` with columns `answer` and `n` (already counted). Which code draws a bar chart of those counts?", options:[
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_col()`", ok:true, why:"geom_col() draws the y values it’s given, which are her counts."},
      {t:"`ggplot(answers, aes(x = answer)) + geom_bar()`", why:"geom_bar() counts rows. Each answer has one row in `answers`, so every bar would be 1 high."},
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_histogram()`", why:"Histograms bin a numeric x; they’re for distributions, not counts of categories."},
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_line()`", why:"A line joins points in order, suggesting change over time, which categories don’t have."}
    ]},
    {id:"t3u8-l4-x6", type:"mcq", q:"Ana wants separate panels for groups A and B, with the same axes so they’re easy to compare. Which layer does that?", options:[
      {t:"`facet_wrap(~ group)`", ok:true, why:"Facets split the chart into small multiples, one per group, sharing scales by default."},
      {t:"`aes(color = group)`", why:"That colors the groups within a single panel; it doesn’t split the chart."},
      {t:"`geom_boxplot()`", why:"A boxplot compares groups in one panel; it doesn’t make panels, and it summarizes rather than showing points."},
      {t:"`group_by(group)`", why:"group_by() is dplyr; it affects later dplyr verbs, not the chart layout."}
    ]},
    {id:"t3u8-l4-x7", type:"explain", q:"Explain the difference between `aes(color = group)` and `geom_point(color = \"steelblue\")` in ggplot2, and what goes wrong with `aes(color = \"blue\")`.", model:"Inside `aes()`, color is a **mapping**: its value comes from a column, so each group gets its own color and ggplot2 adds a legend to explain it. Outside `aes()`, in the geom, color is a **setting**: one fixed value for every point, with no legend because nothing varies with the data. `aes(color = \"blue\")` mixes them up: ggplot2 treats “blue” as a data value, a single constant category, colors every point with its first default color (not blue) and adds a pointless legend.", points:["Says inside `aes()` is a mapping from a column of data", "Says outside `aes()` is a fixed setting", "Mentions that mappings get a legend and settings don’t", "Explains that `\"blue\"` inside `aes()` is treated as a data value"]}
   ],
   apply:{intro:"Draw the same charts twice: base R in the Data Lab, and ggplot2 on a computer or Posit Cloud.", tasks:[
     {t:"Base R charts (Data Lab, any device)", how:["Solve the **A histogram** challenge","In any survey.csv challenge, press **Run** on `boxplot(score ~ group, data = d)` and `barplot(table(d$answer))`","Note what each chart suggests in one sentence"]},
     {t:"ggplot2 charts (computer or Posit Cloud)", how:["Make the scatterplot of score against hours, colored and shaped by group","Add `geom_smooth(method = \"lm\")`, then try `facet_wrap(~ group)` instead of color","Make a histogram with binwidth 1, then 3: does the story change?"]},
     {t:"Break it on purpose", how:["Put `color = \"blue\"` inside aes() and look at the legend","Move a `+` to the start of a line and read the error","Fix both, and write down what each error taught you"]}
   ], proof:"Your base R histogram (passed in the Data Lab) and, if you have a computer, a ggplot2 scatterplot colored by group, with one sentence about what it shows."},
   read:[{book:"r4ds", where:"Chapter 1, “Data visualization”: Sections 1.2 “First steps” to 1.5 “Visualizing relationships”"},{book:"r4ds", where:"Chapter 9, “Layers”: Sections 9.2 “Aesthetic mappings”, 9.3 “Geometric objects” and 9.4 “Facets”"},{book:"dcss", where:"R for Social Scientists: “Data Visualisation with ggplot2” (sections “Plotting with ggplot2” to “Faceting”)"}]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u8-l5", title:"Polished charts and reproducible reports", minutes:55,
   hook:{q:"Sione’s report quotes a mean score of 67.4, typed in by hand, along with a pasted chart. Then two late survey responses arrive. With a Quarto report, what does updating the numbers and chart take?", options:["Retyping every number and re-pasting every chart","Rendering the report again: the code recomputes every number and redraws every chart","Nothing: Quarto watches the file and edits the old PDF","Rewriting the analysis code from scratch"], answer:1, reveal:"**Render again.** In a Quarto report the numbers and charts aren’t pasted; they’re produced by code inside the document each time it is rendered. New data in, render, and every figure updates, with no copying mistakes. This lesson first polishes charts (labels, colors, themes, saving), then outlines how a Quarto report works."},
   goals:[
     "Give a chart a title that states the point, clear axis labels, a source caption and alt text with labs()",
     "Choose color-blind-safe scales and adjust a theme",
     "Save a chart at a chosen size and resolution with ggsave()",
     "Describe the parts of a Quarto document: YAML header, text, code chunks, chunk options and inline code",
     "Explain what makes an analysis reproducible, and what a Quarto render does"
   ],
   learn:[
    {h:"Labels that say the point", body:[
      {lead:"A chart that’s correct but unlabelled makes readers do the work. labs() does most of the polishing in one place."},
      {code:"p <- ggplot(survey,\n  aes(x = hours, y = score, color = group)) +\n  geom_point(size = 3) +\n  labs(\n    title = \"More study, higher scores\",\n    subtitle = \"12 people, invented survey data\",\n    x = \"Hours of study per week\",\n    y = \"Test score\",\n    color = \"Group\",\n    caption = \"Data: survey.csv (invented)\",\n    alt = \"Scatterplot: score rises with study hours\"\n  )\np", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "`title` states the finding (“More study, higher scores”), not just the topic, as Unit 4 recommends ({{annotation-charts|annotation and titles}}).",
        "`subtitle` gives context: who, how many, when.",
        "`x` and `y` replace column names with words and units.",
        "`color = \"Group\"` renames the legend: each mapped aesthetic gets its own label (`fill`, `shape`, `size`…).",
        "`caption` credits the data source.",
        "`alt` stores [[alt-text|alt text]] inside the chart object (`get_alt_text(p)` reads it back). Whether a tool attaches it to the image automatically varies, so in a Quarto report also set the chunk option `fig-alt` (see the Quarto sections below)."
      ]},
      "Storing the chart as `p` means you can print it, change it (`p + theme_minimal()`) or save it later."
    ]},
    {h:"Scales: colors and axes", body:[
      "**Scales** control how data values become visual values. Each aesthetic has scale functions named `scale_<aesthetic>_<type>()`. The default colors for categories are evenly spaced hues, not designed for color vision deficiency. Two good built-in choices:",
      {code:"p <- ggplot(survey,\n  aes(x = hours, y = score, color = group)) +\n  geom_point(size = 3)\np + scale_color_brewer(palette = \"Dark2\")\np + scale_color_viridis_d(end = 0.8)\nggplot(survey, aes(x = answer)) +\n  geom_bar() +\n  scale_y_continuous(limits = c(0, NA))", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "`scale_color_brewer(palette = \"Dark2\")` uses a ColorBrewer qualitative palette for categories.",
        "`scale_color_viridis_d()` uses viridis colors (`_d` for discrete categories, `_c` for continuous numbers), designed to read in greyscale and for common kinds of color blindness. `end = 0.8` avoids its palest yellow, which is hard to see on white.",
        "`scale_y_continuous(limits = c(0, NA))` makes the y-axis start at 0 and lets ggplot2 choose the top (NA). Bar charts already start at zero; for other charts, choose the baseline deliberately ({{axes-baselines|Unit 4}})."
      ]},
      {tip:"`fill` has its own scales: `scale_fill_brewer()`, `scale_fill_viridis_d()`. Use the one that matches the aesthetic you mapped."}
    ]},
    {h:"Themes: everything that isn’t data", body:[
      "A [[ggplot-theme|theme]] controls the non-data parts: background, grid lines, fonts, legend position. Complete themes change everything at once; `theme()` adjusts single elements:",
      {code:"p <- ggplot(survey, aes(x = hours, y = score, color = group)) +\n  geom_point(size = 3)\np + theme_minimal()\np + theme_bw(base_size = 14)\np +\n  theme_minimal() +\n  theme(legend.position = \"bottom\")", lang:"r", label:"R · computer or Posit Cloud"},
      {table:[["Theme","Look"],["`theme_gray()`","The default: gray panel, white grid"],["`theme_bw()`","White panel with a border and grid"],["`theme_minimal()`","No border or background; light grid"],["`theme_classic()`","Axis lines, no grid, like many journals"]]},
      "`base_size = 14` enlarges all text, a quick win for slides and phone screens. `theme(legend.position = \"bottom\")` moves the legend under the chart, which suits narrow screens. Add `theme()` **after** a complete theme, or the complete theme will undo your change."
    ]},
    {h:"Saving charts with ggsave()", body:[
      "`ggsave()` writes a chart to a file. The file extension picks the format:",
      {code:"p <- ggplot(survey, aes(x = hours, y = score)) +\n  geom_point()\nggsave(\"scores.png\", plot = p,\n  width = 16, height = 10, units = \"cm\", dpi = 300)\nggsave(\"scores.pdf\", plot = p, width = 16, height = 10,\n  units = \"cm\")", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "**PNG** is a pixel image for web pages, slides and documents. Its pixel size is width × dpi: 16 cm is 6.3 inches, × 300 dpi ≈ 1,890 pixels wide.",
        "**PDF** and **SVG** are vector formats that stay sharp at any size; good for print. (SVG needs the svglite package installed.)",
        "Without `plot =`, ggsave() saves the last chart you displayed. Naming the plot is safer in scripts.",
        "Without `width` and `height`, the size comes from your current plot window, so it changes from session to session. Set them for repeatable results."
      ]},
      {warn:"Avoid saving charts by screenshot or copy-paste for anything you’ll update. ggsave() in a script makes the same file every time from the same data: that’s the first step toward reproducibility."}
    ]},
    {h:"What a reproducible report is", body:[
      "An analysis is **reproducible** when someone else (or you, next year) can take the same data and code and get exactly the same results. The usual way it breaks: numbers are copied by hand from R into a document, charts are pasted, and after one change to the data nobody is sure which numbers are current.",
      "[[quarto|Quarto]] solves this by putting text, code and results in one file. It’s a free, open-source publishing system from Posit that works with R, Python and Julia, and it comes built into recent versions of RStudio (2022.07 and later). It succeeds R Markdown, which works the same way and which you’ll still see in older material, including Data Carpentry’s lesson.",
      "A Quarto document is a plain text file ending `.qmd`. It has three kinds of content:",
      {ol:["A **[[yaml-header|YAML header]]** between `---` lines: title, author, output format.","**Text** written in Markdown: `## Heading`, `**bold**`, lists.","**[[code-chunk|Code chunks]]**: R code between an opening line of three backticks followed by `{r}`, and a closing line of three backticks. They run when the document is rendered."]}
    ]},
    {h:"A Quarto report, in outline", body:[
      {code:"---\ntitle: \"Study hours and scores\"\nauthor: \"Priya Nair\"\ndate: today\nformat: html\n---\n\n## Data\n\n```{r}\n#| label: setup\n#| message: false\nlibrary(tidyverse)\nsurvey <- read_csv(\"survey.csv\")\n```\n\nWe asked `r nrow(survey)` people how many hours\nthey study each week.\n\n## Results\n\n```{r}\n#| label: fig-scores\n#| fig-cap: \"Score against weekly study hours.\"\n#| fig-alt: \"Scatterplot: scores rise with study hours.\"\n#| echo: false\nggplot(survey, aes(x = hours, y = score)) +\n  geom_point()\n```\n\nThe mean score was `r round(mean(survey$score), 1)`.", lang:"txt", label:"Quarto file (report.qmd)"},
      {list:[
        "`format: html` makes a web page. `docx` makes a Word file; `pdf` makes a PDF via LaTeX, which you install separately (Quarto suggests TinyTeX: `quarto install tinytex`), while `typst` makes a PDF with the Typst engine bundled in Quarto, with nothing extra to install.",
        "Lines starting `#|` inside a chunk are **chunk options**: `label` names the chunk; `message: false` hides messages such as the tidyverse start-up list; `echo: false` hides the code but shows its result; `eval: false` shows code without running it; `include: false` runs it but shows nothing.",
        "`fig-cap` captions a figure, `fig-alt` gives it alt text for screen readers, and a label starting `fig-` makes it a numbered figure you can refer to.",
        "Inline code, written as `r nrow(survey)` between single backticks, puts a computed value into a sentence. Here it becomes “We asked 12 people”, and the mean sentence becomes 67.4. Add two responses and render: both update."
      ]},
      "In RStudio, click **Render** (or press [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]]; [[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:K]] on a Mac). Quarto hands the file to **knitr**, which runs every R chunk from top to bottom in a fresh session and writes a Markdown file with the results. Then **Pandoc** converts that into HTML, Word or PDF.",
      {fig:'<svg viewBox="0 0 340 396"><defs><marker id="u8a6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="60" y="8" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="28" text-anchor="middle">report.qmd</text><text class="s" x="170" y="45" text-anchor="middle">text + code chunks + YAML</text><path class="d-ink" d="M170 56 L170 82" stroke-width="2" marker-end="url(#u8a6)"/><rect class="d-lup" x="60" y="84" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="104" text-anchor="middle">knitr</text><text class="s" x="170" y="121" text-anchor="middle">runs every R chunk</text><path class="d-ink" d="M170 132 L170 158" stroke-width="2" marker-end="url(#u8a6)"/><rect class="d-sage" x="60" y="160" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="180" text-anchor="middle">report.md</text><text class="s" x="170" y="197" text-anchor="middle">text + code + results</text><path class="d-ink" d="M170 208 L170 234" stroke-width="2" marker-end="url(#u8a6)"/><rect class="d-lup" x="60" y="236" width="220" height="46" rx="8" stroke-width="2"/><text x="170" y="256" text-anchor="middle">Pandoc</text><text class="s" x="170" y="273" text-anchor="middle">converts the document</text><path class="d-ink" d="M170 284 L170 310" stroke-width="2" marker-end="url(#u8a6)"/><rect class="d-rose" x="20" y="312" width="92" height="36" rx="8" stroke-width="2"/><text x="66" y="335" text-anchor="middle">HTML</text><rect class="d-rose" x="124" y="312" width="92" height="36" rx="8" stroke-width="2"/><text x="170" y="335" text-anchor="middle">PDF</text><rect class="d-rose" x="228" y="312" width="92" height="36" rx="8" stroke-width="2"/><text x="274" y="335" text-anchor="middle">Word</text><text class="s" x="170" y="370" text-anchor="middle">Press Render (or run quarto render)</text><text class="s" x="170" y="386" text-anchor="middle">and the whole chain runs again</text></svg>', alt:"Vertical flow: report.qmd (text, code chunks and YAML) to knitr (runs every R chunk) to report.md (text, code and results) to Pandoc (converts the document), which produces HTML, PDF or Word.", cap:"What happens when you render a Quarto document."},
      "Because rendering starts from a fresh session, a report only works if the file itself loads its packages and reads its data. That’s a feature: if it renders, the code really does produce the results."
    ]},
    {h:"Habits that keep work reproducible", body:[
      {list:[
        "**Keep raw data raw** (Unit 2): read the original file and do every cleaning step in code, never by hand in the data.",
        "**Load packages at the top** of each script or report, so it runs from a fresh start.",
        "**Use relative paths** like `\"survey.csv\"` or `\"data/survey.csv\"` inside a project folder, not `C:/Users/…` paths that exist only on your computer. (RStudio Projects and Posit Cloud projects give you a folder to work in.)",
        "**Set a seed** with `set.seed()` before anything random, so simulations give the same result each time (Unit 7).",
        "**Record versions**: `sessionInfo()` prints your R and package versions. Results can change slightly when packages update.",
        "**Track changes** with Git (Track 2) if the project matters."
      ]},
      {key:"Reproducible doesn’t mean correct: a report can rebuild the same mistake perfectly. But it makes mistakes findable and fixable, because every number can be traced back to the line of code that made it."},
      {tip:"No computer? You can still write the outline of a report on paper or in a notes app: the question, the data source, each step as a verb (filter, mutate, summarize), the chart you’d draw and the sentence it supports. That’s the skeleton of every Quarto report."}
    ]}
   ],
   try:[
    {id:"t3u8-l5-x1", type:"mcq", q:"Kenji’s chart maps `color = group`. The legend title says “group” and he wants “Study group”. Which addition does that?", options:[
      {t:"`labs(color = \"Study group\")`", ok:true, why:"Each mapped aesthetic’s legend is labeled through labs(), using the aesthetic’s name: color here."},
      {t:"`labs(legend = \"Study group\")`", why:"There’s no `legend` label; legends are named after the aesthetic they explain (color, fill, shape…)."},
      {t:"`labs(title = \"Study group\")`", why:"That sets the chart’s title, not the legend’s."},
      {t:"`theme(legend.position = \"Study group\")`", why:"legend.position moves the legend (\"bottom\", \"none\"…); it doesn’t set its text."}
    ]},
    {id:"t3u8-l5-x2", type:"number", q:"`ggsave(\"chart.png\", width = 16, height = 10, units = \"cm\", dpi = 300)`. About how many pixels wide is the PNG? (1 inch = 2.54 cm.)", answer:1890, tol:3, unit:"pixels", why:"16 cm ÷ 2.54 = 6.30 inches; 6.30 × 300 dots per inch ≈ 1,890 pixels. (The file ggsave made in testing was 1,889 pixels wide, because it rounds down.)", wrongs:[{v:4800, tol:5, why:"That’s 16 × 300: it treats centimeters as inches. Convert to inches first (÷ 2.54)."},{v:189, tol:2, why:"That would be at 30 dpi. Check the multiplication: 6.3 × 300."},{v:16, tol:0, why:"16 is the width in centimeters, not pixels."}]},
    {id:"t3u8-l5-x3", type:"sort", q:"In a Quarto `.qmd` file, where does each line belong?", buckets:["YAML header","Code chunk","Markdown text"], items:[
      {t:"`title: \"Study hours and scores\"`", b:0, why:"Document settings like the title go in the YAML header between --- lines."},
      {t:"`format: html`", b:0, why:"The output format is a YAML setting."},
      {t:"`#| echo: false`", b:1, why:"Lines starting #| are chunk options, at the top of a code chunk."},
      {t:"`survey <- read_csv(\"survey.csv\")`", b:1, why:"R code to run goes in a chunk."},
      {t:"`## Results`", b:2, why:"A Markdown heading in the text."},
      {t:"`The mean score was **67.4**.`", b:2, why:"Ordinary prose with Markdown bold. (Better still, compute the number with inline code.)"}
    ]},
    {id:"t3u8-l5-x4", type:"order", q:"Put the steps of rendering a Quarto report in order.", items:[
      {t:"You write report.qmd: YAML, text and R chunks", why:"Everything starts from the plain-text source file."},
      {t:"You click Render (or run quarto render)", why:"Rendering is what triggers the rest."},
      {t:"knitr runs every R chunk, top to bottom, in a fresh session", why:"The code runs first, so results are current."},
      {t:"knitr writes a Markdown (.md) file with text, code and results", why:"The results are woven into the text."},
      {t:"Pandoc converts it into HTML, Word or PDF", why:"Pandoc does the final conversion into the format in the YAML."}
    ]},
    {id:"t3u8-l5-x5", type:"match", q:"Match each chunk option to what you’ll see in the rendered report.", pairs:[
      ["`echo: false`","The result, but not the code","Hides the code; the chunk still runs and shows output."],
      ["`eval: false`","The code, but it isn’t run","Useful for showing an example without running it."],
      ["`include: false`","Nothing, though the code runs","Good for setup chunks whose objects are used later."],
      ["`message: false`","Output without R’s messages","Hides notes such as the tidyverse start-up list."]
    ]},
    {id:"t3u8-l5-x6", type:"mcq", q:"Yến, a master’s student in information engineering, has a Quarto report that renders on her laptop but fails on a colleague’s with `could not find function \"read_csv\"`. In RStudio’s Console she had run `library(tidyverse)` before rendering, and the report has no library line. What’s the fix?", options:[
      {t:"Add `library(tidyverse)` in a chunk at the top of the report", ok:true, why:"Rendering starts a fresh R session that doesn’t see what was loaded in the Console. A report must load its own packages (and the colleague needs them installed)."},
      {t:"Ask the colleague to restart their computer", why:"A restart doesn’t load packages. The report itself needs the library() line."},
      {t:"Switch the format from html to pdf", why:"The format only affects the final conversion; the R code fails before that."},
      {t:"Replace the code chunk with the numbers typed by hand", why:"That would “work” but loses reproducibility, which is the point of the report."}
    ]},
    {id:"t3u8-l5-x7", type:"explain", q:"Explain why writing a report in Quarto, with inline code such as `r nrow(survey)`, is more reproducible than copying numbers and charts from R into a word-processor document.", model:"When numbers and charts are copied by hand, one change to the data leaves nobody sure which figures are current. In Quarto, text, code and results live in one `.qmd` file. Rendering runs every chunk from top to bottom in a fresh session, so the file must load its own packages and read its own data, and inline code puts computed values straight into sentences. Change the data and render again, and every number and chart updates. Reproducible doesn’t mean correct, but every number can be traced to its code.", points:["Says copied numbers can go out of date without anyone noticing", "Says Quarto keeps text, code and results in one file", "Explains that rendering reruns everything from a fresh session", "Says inline code and charts update automatically when the data change"]}
   ],
   apply:{intro:"Polish one chart and outline a report. The ggplot2 and Quarto steps need a computer or Posit Cloud; the planning task works on any device.", tasks:[
     {t:"Polish and save a chart (computer or Posit Cloud)", how:["Take your scatterplot from Lesson 4 and add labs() with a title that states the point, axis labels with units, a caption and alt text","Add `scale_color_viridis_d(end = 0.8)` and `theme_minimal(base_size = 14)`","Save it with `ggsave(\"scores.png\", plot = p, width = 16, height = 10, units = \"cm\", dpi = 300)` and open the file"]},
     {t:"Render a Quarto report (computer or Posit Cloud)", how:{
       win:["In RStudio: **File → New File → Quarto Document…**, give it a title, choose HTML, click **Create**","Replace the content with this lesson’s report outline (and make survey.csv in the same folder)","Save as report.qmd and click **Render** ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]])","Change one score in survey.csv, render again, and check that the mean sentence changes"],
       mac:["In RStudio: **File → New File → Quarto Document…**, choose HTML, click **Create**","Paste the report outline, save as report.qmd next to survey.csv","Click **Render** ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:K]])","Change one score in survey.csv, render again, and watch the numbers update"],
       chromeos:["In a Posit Cloud RStudio project, use **File → New File → Quarto Document…**","If RStudio offers to install packages it needs (such as rmarkdown), accept","Paste the outline, save as report.qmd in the project folder with survey.csv, and click **Render**","The HTML report opens in the Viewer or a new browser tab"],
       phone:["Rendering needs R; on a phone, do task 3 instead","If you use Posit Cloud on a phone browser, the ChromeOS steps work, but expect a cramped screen"]}},
     {t:"Plan a reproducible report (any device)", how:["Pick a question about data you care about (club attendance, household spending, a class survey)","Write the YAML title, then one heading per section","Under each, write the steps as verbs (read, filter, mutate, group_by + summarize, ggplot) and the sentence each result will support, marking every number that should come from inline code"]}
   ], proof:"A saved PNG of your polished chart, a rendered report whose numbers changed after you edited the data, or (on a phone) your written report plan with each number marked as computed."},
   read:[{book:"r4ds", where:"Chapter 11, “Communication”: Sections 11.2 “Labels”, 11.4 “Scales” and 11.5 “Themes”; and Chapter 1, Section 1.6 “Saving your plots”"},{book:"r4ds", where:"Chapter 28, “Quarto”: Sections 28.2 “Quarto basics”, 28.5 “Code chunks” and 28.10 “YAML header”; and Chapter 29, “Quarto formats”"},{book:"dcss", where:"R for Social Scientists: “Getting started with R Markdown (Optional)”, the older format Quarto replaces, which works the same way"}]
  },
  /* ===================== LESSON 6 ===================== */
  {id:"t3u8-l6", title:"Checking AI-made statistics, code and charts", minutes:60,
   hook:{q:"Priya pastes her 12-person survey into an AI chatbot that has no tool for running code, and asks for the mean score. It replies: “The mean score is 68.2.” Where did that number come from?", options:["It added the 12 scores and divided by 12, as a calculator would","It wrote a likely-looking answer; without running code, no calculation is guaranteed","It found the survey online and copied a published mean","It rounded the true mean, so 68.2 is right to one decimal place"], answer:1, reveal:"**It wrote a likely-looking answer.** A chat model produces text one piece at a time. It may get small sums right, but unless it runs code, nothing guarantees the number, and here it’s wrong: 809 ÷ 12 ≈ 67.4. Some assistants can run code and show it, and then you can check that code. This lesson shows how to check AI-written R and Python, AI statistics and AI charts, and how to record what you did."},
   goals:[
     "Say what AI assistants do well and badly in data work, and why",
     "Test AI-written R (and a little Python) on a small known case, and check rows, missing values and every line",
     "Catch made-up numbers, wrong tests, misread p-values and invented citations",
     "Find wrong summaries, cut axes and poor color choices in AI-made charts",
     "Keep an AI log, record versions, and write a short disclosure statement"
   ],
   learn:[
    {h:"What AI assistants do well, and badly, with data", body:[
      {lead:"AI assistants are fast, fluent helpers for data work. They’re also confident when they’re wrong, and they never see your data the way you do."},
      "Chatbots and coding assistants run on [[large-language-model|large language models]] (Track 1, Unit 6 explains how in {{ai-chatbot-accuracy}}). Some only write text. Others can also **run code** in a sandbox and show you the code and its output. Either way, what comes back is a draft to check, not a result to quote.",
      {table:[["Usually helpful","Check every time"],["Explaining an error message or a function","Any number stated without code behind it"],["Drafting code that you then read and test","Code that runs but answers a different question"],["Translating between R, Python and SQL","Missing values, odd codes and repeated rows"],["Suggesting chart types and labels","Which statistical test fits your design"],["Writing comments and documentation","References, quotes and “studies show” claims"]]},
      "The pattern: an assistant knows what code *usually* looks like, not what *your* file contains. It doesn’t know that 99 means “no answer”, that one person has three rows, or that before and after scores come from the same people. It can also invent functions and arguments (Track 2, Unit 11 covers AI code in general: {{ai-code-review}}).",
      {warn:"Think before you paste. Data about people (names, health, grades) may not be yours to upload to an outside service. Follow your organization’s rules, give the assistant column names or invented sample rows, and run the code on the real data yourself ({{ai-privacy-disclosure}})."},
      {key:"The assistant drafts; you verify. Responsibility for every number stays with you."}
    ]},
    {h:"Test the code on a small known case", body:[
      {lead:"The fastest way to catch wrong code is to run it on data so small that you already know the answer."},
      "Amara asks an assistant for base R that shows, for each group, the share of people giving each answer. It replies:",
      {code:"d <- read.csv(\"survey.csv\")\ntab <- table(d$group, d$answer)\nprop.table(tab)", lang:"r", label:"R · AI-written, runs in the Data Lab"},
      {code:"            No     Unsure        Yes\n  A 0.16666667 0.08333333 0.25000000\n  B 0.16666667 0.08333333 0.25000000", lang:"txt", label:"What R prints"},
      "It runs, and “a quarter of group A said Yes” sounds believable. Before trusting it, Amara makes a [[known-case-test|known case]]: four rows where she knows the answer. Group A has one Yes and one No (50% Yes); group B has two Yes (100%).",
      {code:"test <- data.frame(\n  group  = c(\"A\", \"A\", \"B\", \"B\"),\n  answer = c(\"Yes\", \"No\", \"Yes\", \"Yes\")\n)\nprop.table(table(test$group, test$answer))", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"      No  Yes\n  A 0.25 0.25\n  B 0.00 0.50", lang:"txt", label:"What R prints"},
      "The code says group B is 50% Yes; she knows it’s 100%. `prop.table()` divided every count by the **whole table’s** total (4), not by each group’s total. Adding `margin = 1` divides each row by its own total:",
      {code:"prop.table(tab, margin = 1)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"           No    Unsure       Yes\n  A 0.3333333 0.1666667 0.5000000\n  B 0.3333333 0.1666667 0.5000000", lang:"txt", label:"What R prints"},
      "Now half of each group said Yes, matching a count by hand (3 of 6). A [[sanity-check|sanity check]] would also have caught it: each group’s shares must add up to 1, and `rowSums()` shows the first version’s rows add up to 0.5.",
      {tip:"Build the known case to catch likely mistakes: unequal group sizes, a missing value, a value exactly on a boundary. The Data Lab works the same way: every challenge is checked again on a second, hidden file."},
      {lab:"dl-r-table", t:"Practice: count the answers and compute the share of Yes, then check it by hand"}
    ]},
    {h:"Check rows, missing values and every line", body:[
      "Code can pass a tidy test and still fail on real data, often as a [[silent-failure|silent failure]]: no error, wrong answer. After each step, check rows (`nrow()`), missing values (`colSums(is.na(d))`) and ranges (`range()`). Suppose person 5 left their score blank. (Nobody did in the Data Lab’s file, so the second line below makes that blank.)",
      {code:"d <- read.csv(\"survey.csv\")\nd$score[d$id == 5] <- NA   # person 5’s score is blank\nnrow(d)\ncolSums(is.na(d))\nmean(d$score)\nmean(d$score, na.omit = TRUE)\nmean(d$score, na.rm = TRUE)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] 12\n    id  group    age  hours  score answer \n     0      0      0      0      1      0 \n[1] NA\n[1] NA\n[1] 67.54545", lang:"txt", label:"What R prints"},
      "In a real file, `read.csv()` turns a blank number into `NA`, and `mean()` honestly returns NA. But `na.omit = TRUE`, a plausible argument an assistant might write, is **silently ignored**: `mean()` accepts extra arguments without complaint. Only `na.rm = TRUE` drops missing values, and then the mean is of 11 people, not 12. Say so in your report.",
      "Joins are the other big trap. Kenji asks for each person’s age next to their visits, then the mean age:",
      {code:"people <- data.frame(id = 1:4, age = c(24, 31, 45, 29))\nvisits <- data.frame(id = c(1, 1, 2, 3, 3, 3),\n  minutes = c(20, 35, 50, 15, 25, 40))\nm <- merge(people, visits, by = \"id\")\nnrow(m)\nmean(m$age)\nmean(people$age)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] 6\n[1] 35.66667\n[1] 32.25", lang:"txt", label:"What R prints"},
      "Four people became six rows, because person 1 has two visits and person 3 has three. Person 4, with no visits, vanished: by default `merge()` keeps only matching rows (an inner join, as in {{sql-joins|Unit 10}}; `all.x = TRUE` keeps everyone). The “mean age” of 35.7 counts person 1 twice and person 3 three times, and leaves out person 4. The true mean, 32.25, comes from `people`.",
      "Then **read every line** and say what it does. Look up anything you can’t explain with `?function`. Be suspicious of lines you didn’t ask for: an extra filter, a number typed in (`n <- 12`), `suppressWarnings()`, or `na.rm = TRUE` added quietly.",
      {h:"The same checks in Python"},
      "Assistants often translate code between languages, and defaults differ. In pandas, a widely used Python package for tables, `mean()` **skips** missing values unless told otherwise. So R code and its Python translation can disagree with no error at all:",
      {code:"import pandas as pd\ndf = pd.read_csv(\"survey.csv\")   # person 5’s score blank\nprint(len(df), df[\"score\"].isna().sum())\nprint(df[\"score\"].mean())\nprint(df[\"score\"].mean(skipna=False))\nprint(df.groupby(\"group\")[\"score\"]\n        .agg([\"mean\", \"count\", \"size\"]))", lang:"py", label:"Python with pandas · computer"},
      {code:"12 1\n67.54545454545455\nnan\n       mean  count  size\ngroup                   \nA      65.2      5     6\nB      69.5      6     6", lang:"txt", label:"What Python prints"},
      "`count` is the number of non-missing values and `size` the number of rows. When they differ, a group’s mean rests on fewer people than the table suggests."
    ]},
    {h:"AI-made statistics: four ways they go wrong", body:[
      {lead:"When an assistant reports a statistic, ask where the number came from, whether the method fits, and what the words claim."},
      "**1. Made-up or miscalculated numbers.** A number with no code behind it is a guess until you recompute it. Ask for the code, run it yourself, and check that numbers agree: shares that add to 100%, counts that match the rows, a mean inside the data’s range.",
      "**2. The wrong test.** Assistants match tests to words in your prompt; they can’t see how the data were collected. Six people took a 25-point quiz before and after a workshop, and an assistant wrote `t.test(after, before)`, which treats the columns as unrelated groups. Each pair is the same person, so the test should be [[paired-t-test|paired]] ({{t-tests}}):",
      {code:"before <- c(12, 15, 9, 20, 14, 11)\nafter  <- c(14, 16, 11, 23, 15, 13)\nt.test(after, before)$p.value\nt.test(after, before, paired = TRUE)$p.value", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] 0.4441919\n[1] 0.001894247", lang:"txt", label:"What R prints"},
      "Every person improved, by 1 to 3 points, yet the unpaired test gives p ≈ 0.44, because differences *between* people swamp the change. Another classic is `chisq.test()` on percentages: with 20 people per group, 6 versus 12 saying Yes gives p ≈ 0.11 from the counts, but 30% versus 60% typed in as if they were counts gives p ≈ 0.00004. Chi-square needs real counts ({{chi-square-tests}}).",
      "**3. Misread p-values.** AI explanations can repeat the misreadings the American Statistical Association warned about in 2016 ({{statistical-significance-basics}}):",
      {table:[["The AI says","What’s true"],["“p = 0.03, so there’s a 97% chance the effect is real”","A p-value isn’t the probability that a hypothesis is true"],["“p = 0.44 proves the workshop does nothing”","Data compatible with no effect don’t prove there is none"],["“Highly significant, so the effect is big”","p doesn’t measure size or importance; look at the effect and its interval"]]},
      "**4. Invented citations.** In a 2023 study in *Scientific Reports*, 55% of the references GPT-3.5 gave in short literature reviews were fabricated, and 18% of GPT-4’s. Tools have changed since, but a real-looking reference, or even a real link, may not say what the answer claims ([[hallucinated-citation]]). Find each source outside the chatbot, open it and read the relevant part (Track 4, Unit 3 shows how: {{ai-reading-tools}})."
    ]},
    {h:"AI-made charts", body:[
      {lead:"Chart code can run perfectly and still mislead. Check what each bar or point stands for before you look at the shape."},
      "Asked for “a bar chart of the mean score in each group”, an assistant wrote:",
      {code:"ggplot(survey, aes(x = group, y = score)) +\n  geom_col()", lang:"r", label:"R · computer or Posit Cloud"},
      "`geom_col()` draws values as they are, and when several rows share an x position it **stacks** them. Each bar is six scores piled up: 392 for A and 417 for B, on a test out of 100. The axis shows the problem, if you read it. Summarise first, then draw:",
      {code:"survey |>\n  summarize(mean_score = mean(score), .by = group) |>\n  ggplot(aes(x = group, y = mean_score)) +\n  geom_col()", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"d <- read.csv(\"survey.csv\")\ntapply(d$score, d$group, sum)    # stacked bars\ntapply(d$score, d$group, mean)   # what was asked\nbarplot(tapply(d$score, d$group, mean), ylim = c(0, 100))", lang:"r", label:"R · base R, runs in the Data Lab"},
      {fig:'<svg viewBox="0 0 340 516"><text x="10" y="16">1. AI’s chart: geom_col() on raw rows</text><text class="s" x="10" y="33">Each bar is 6 scores stacked: totals</text><path class="d-ink" d="M64 44 L64 138 L300 138" fill="none" stroke-width="1.5"/><path class="d-soft" d="M60 138.0 L64 138.0" stroke-width="1.5"/><text class="s" x="56" y="142.0" text-anchor="end">0</text><path class="d-soft" d="M60 98.0 L64 98.0" stroke-width="1.5"/><text class="s" x="56" y="102.0" text-anchor="end">200</text><path class="d-soft" d="M60 58.0 L64 58.0" stroke-width="1.5"/><text class="s" x="56" y="62.0" text-anchor="end">400</text><rect class="d-rose" x="110" y="59.6" width="60" height="78.4" stroke-width="1.5"/><path class="d-ink" d="M110 125.8 L170 125.8" stroke-width="1"/><path class="d-ink" d="M110 111.8 L170 111.8" stroke-width="1"/><path class="d-ink" d="M110 98.6 L170 98.6" stroke-width="1"/><path class="d-ink" d="M110 82.0 L170 82.0" stroke-width="1"/><path class="d-ink" d="M110 70.0 L170 70.0" stroke-width="1"/><text x="140" y="53.6" text-anchor="middle">392</text><text x="140" y="155" text-anchor="middle">A</text><rect class="d-rose" x="210" y="54.6" width="60" height="83.4" stroke-width="1.5"/><path class="d-ink" d="M210 127.0 L270 127.0" stroke-width="1"/><path class="d-ink" d="M210 111.4 L270 111.4" stroke-width="1"/><path class="d-ink" d="M210 101.6 L270 101.6" stroke-width="1"/><path class="d-ink" d="M210 87.2 L270 87.2" stroke-width="1"/><path class="d-ink" d="M210 69.6 L270 69.6" stroke-width="1"/><text x="240" y="48.6" text-anchor="middle">417</text><text x="240" y="155" text-anchor="middle">B</text><text x="10" y="188">2. What was asked: mean score</text><text class="s" x="10" y="205">Axis from 0: means 65.3 and 69.5</text><path class="d-ink" d="M64 216 L64 310 L300 310" fill="none" stroke-width="1.5"/><path class="d-soft" d="M60 310.0 L64 310.0" stroke-width="1.5"/><text class="s" x="56" y="314.0" text-anchor="end">0</text><path class="d-soft" d="M60 265.0 L64 265.0" stroke-width="1.5"/><text class="s" x="56" y="269.0" text-anchor="end">50</text><path class="d-soft" d="M60 220.0 L64 220.0" stroke-width="1.5"/><text class="s" x="56" y="224.0" text-anchor="end">100</text><rect class="d-lup" x="110" y="251.2" width="60" height="58.8" stroke-width="1.5"/><text x="140" y="245.2" text-anchor="middle">65.3</text><text x="140" y="327" text-anchor="middle">A</text><rect class="d-lup" x="210" y="247.4" width="60" height="62.6" stroke-width="1.5"/><text x="240" y="241.4" text-anchor="middle">69.5</text><text x="240" y="327" text-anchor="middle">B</text><text x="10" y="360">3. Same means, axis cut at 60</text><text class="s" x="10" y="377">B looks 1.8× as tall; it’s only 1.06×</text><path class="d-ink" d="M64 388 L64 482 L300 482" fill="none" stroke-width="1.5"/><path class="d-soft" d="M60 482.0 L64 482.0" stroke-width="1.5"/><text class="s" x="56" y="486.0" text-anchor="end">60</text><path class="d-soft" d="M60 437.0 L64 437.0" stroke-width="1.5"/><text class="s" x="56" y="441.0" text-anchor="end">66</text><path class="d-soft" d="M60 392.0 L64 392.0" stroke-width="1.5"/><text class="s" x="56" y="396.0" text-anchor="end">72</text><rect class="d-rose" x="110" y="442.0" width="60" height="40.0" stroke-width="1.5"/><text x="140" y="436.0" text-anchor="middle">65.3</text><text x="140" y="499" text-anchor="middle">A</text><rect class="d-rose" x="210" y="410.8" width="60" height="71.2" stroke-width="1.5"/><text x="240" y="404.8" text-anchor="middle">69.5</text><text x="240" y="499" text-anchor="middle">B</text></svg>', alt:"Three small bar charts of groups A and B. 1: the AI’s chart stacks six scores per bar, giving totals of 392 and 417 on an axis marked 0, 200 and 400. 2: the means, 65.3 and 69.5, on an axis from 0 to 100; the bars look almost equal. 3: the same means on an axis from 60 to 72, where B’s bar looks 1.8 times as tall as A’s although the means differ by only 6%.", cap:"Check what each bar shows (total or mean) and where the axis starts."},
      {list:[
        "**Axes.** Bars need an axis that starts at zero ({{axes-baselines}}). Asked to “make the difference clearer”, an assistant may cut the axis at 60, so B looks 1.8 times as tall as A when the means differ by 6% ([[truncated-axis]]).",
        "**Summaries.** Does each mark show a sum, mean, median or count? When groups differ in size, the mean of the group means can differ from the overall mean.",
        "**Color.** Defaults aren’t always color-blind-safe, and red versus green alone fails many readers. Match the palette to the data ({{colour-in-charts}}): qualitative for groups, sequential for amounts, diverging around a meaningful middle."
      ]},
      {lab:"dl-r-groups", t:"Practice: compute each group’s mean score, the numbers a bar chart of means should show"}
    ]},
    {h:"A routine and a checklist", body:[
      "Put the checks in an order you can repeat. It takes minutes, whoever wrote the code: an assistant, a colleague or you last month.",
      {fig:'<svg viewBox="0 0 340 372"><defs><marker id="u8l6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="44" y="8" width="270" height="46" rx="8" stroke-width="2"/><text x="179" y="28" text-anchor="middle">1. Read every line</text><text class="s" x="179" y="45" text-anchor="middle">Can you say what each line does?</text><path class="d-ink" d="M179 56 L179 72" stroke-width="2" marker-end="url(#u8l6a)"/><rect class="d-lup" x="44" y="74" width="270" height="46" rx="8" stroke-width="2"/><text x="179" y="94" text-anchor="middle">2. Run a tiny known case</text><text class="s" x="179" y="111" text-anchor="middle">Answer worked out by hand first</text><path class="d-ink" d="M179 122 L179 138" stroke-width="2" marker-end="url(#u8l6a)"/><rect class="d-lup" x="44" y="140" width="270" height="46" rx="8" stroke-width="2"/><text x="179" y="160" text-anchor="middle">3. Run on the real data</text><text class="s" x="179" y="177" text-anchor="middle">Rows, NAs and ranges as expected?</text><path class="d-ink" d="M179 188 L179 204" stroke-width="2" marker-end="url(#u8l6a)"/><rect class="d-lup" x="44" y="206" width="270" height="46" rx="8" stroke-width="2"/><text x="179" y="226" text-anchor="middle">4. Cross-check another way</text><text class="s" x="179" y="243" text-anchor="middle">Second method, tool or person</text><path class="d-ink" d="M179 254 L179 270" stroke-width="2" marker-end="url(#u8l6a)"/><rect class="d-sage" x="44" y="272" width="270" height="46" rx="8" stroke-width="2"/><text x="179" y="292" text-anchor="middle">5. Record and disclose</text><text class="s" x="179" y="309" text-anchor="middle">Prompt, code, versions, date</text><path class="d-ink" d="M44 97 L20 97" fill="none" stroke-width="2"/><path class="d-ink" d="M44 163 L20 163" fill="none" stroke-width="2"/><path class="d-ink" d="M44 229 L20 229 L20 31 L42 31" fill="none" stroke-width="2" marker-end="url(#u8l6a)"/><text class="s" x="170" y="342" text-anchor="middle">A check fails? Fix the code or the prompt,</text><text class="s" x="170" y="359" text-anchor="middle">then go round again from step 1.</text></svg>', alt:"Five steps in a column: 1 read every line, 2 run a tiny known case, 3 run on the real data and check rows, NAs and ranges, 4 cross-check another way, 5 record and disclose. Lines from steps 2, 3 and 4 loop back to step 1: if a check fails, fix the code or the prompt and start again.", cap:"A routine for any AI-written analysis code."},
      "Then, before you share any AI-assisted result, check off this list:",
      {list:[
        "Every number comes from code I ran, and I can point to the line that made it.",
        "Row counts and missing values are reported (“11 of 12 people answered”).",
        "The test fits how the data were collected (paired? counts?).",
        "The words match the numbers: no “proves”, no “causes” from a correlation, p-values read correctly.",
        "Each chart shows the summary I meant, bars start at zero, colors are readable.",
        "I opened every source, and it says what I claim.",
        "No personal data went into a tool that wasn’t approved for it."
      ]}
    ]},
    {h:"Disclosure and reproducibility", body:[
      {lead:"If someone asks “how did you get this?”, you should be able to show them, including what the AI did."},
      "AI output isn’t reproducible on its own. The same prompt can give a different answer each time you ask, and providers update their models, so a prompt from March may give different code in June. What *is* reproducible is the code you checked and ran. So keep an [[ai-log|AI log]]:",
      {list:[
        "**Prompts and replies**, saved as text in the project folder.",
        "**The tool, the model or version it shows, and the date.**",
        "**The final code**, in a script or Quarto report ({{reproducible-reports|Lesson 5}}), with a comment saying what you changed and how you tested it.",
        "**Software versions**: `sessionInfo()` in R; `sys.version` and `pd.__version__` in Python."
      ]},
      {ex:"2026-11-20 · AI assistant (model name as shown in the app)\nAsked: base R for the share of each answer per group\nGot: prop.table(tab), which divides by the whole table\nTested: 4-row known case; fixed with margin = 1\nChecked: each row sums to 1; A matches a hand count (3/6)\nVersions: R 4.6.0 (Data Lab)", label:"An AI log entry", mono:true},
      "Then **disclose**. Many journals, universities and courses now have rules on saying how you used AI tools, and some workplaces do too. The ICMJE, whose recommendations many medical journals follow, says journals should ask authors at submission whether and how they used AI, that a chatbot can’t be an author, and that the humans are responsible for checking its output. Rules vary, so check yours ({{ai-research-policies}}, [[ai-disclosure]]). One plain sentence is often enough: “An AI assistant (name and version) drafted the R code for Table 1; we tested it on a known case, corrected one error and checked every result.”",
      {key:"Keep the trail: prompt → code → test → result. Then anyone, including you next year, can check the work."}
    ]}
   ],
   try:[
    {id:"t3u8-l6-x1", type:"mcq", q:"Oluwaseun pastes 300 delivery times into a chatbot that can’t run code and asks for the median. It answers “41.5 minutes”. What should he do before using it?", options:[
      {t:"Recompute it himself with `median()` in R or a spreadsheet", ok:true, why:"Right. Without code, nothing guarantees the number was calculated. One line of R (or MEDIAN() in a spreadsheet) gives the real median, and then the chatbot’s answer doesn’t matter."},
      {t:"Ask “Are you sure?” and use it if the chatbot says yes", why:"A chatbot can confidently confirm its own mistake. Checks have to happen outside the tool."},
      {t:"Use it as given, because medians are too simple to get wrong", why:"Simple for a calculator, but a chat model writes likely-looking text; with 300 values, nothing guarantees it sorted them and found the middle."},
      {t:"Round it to 42 minutes to allow for small errors", why:"Rounding doesn’t fix a number that may be wrong by any amount. Recompute it."}
    ]},
    {id:"t3u8-l6-x2", type:"number", q:"Amara’s known case: group A has one Yes and one No; group B has two Yes. What share of group B answered Yes? (Give a proportion between 0 and 1.)", answer:1, tol:0, unit:"", why:"Both people in group B said Yes: 2 ÷ 2 = 1 (100%). That’s the answer `prop.table(tab, margin = 1)` gives, and the one the AI’s code had to match.", wrongs:[{v:0.5, tol:0, why:"0.5 is what the AI’s `prop.table(tab)` printed: 2 Yes divided by all 4 people in the table. A group’s share divides by that group’s size, 2."},{v:0.75, tol:0, why:"That’s the share of all four people who said Yes (3 of 4). The question asks about group B only."},{v:2, tol:0, why:"2 is the count of Yes answers. A share divides the count by the group’s size: 2 ÷ 2."}]},
    {id:"t3u8-l6-x3", type:"spot", q:"Ravi asked an assistant for the mean score of group A, from a file where one score is blank. Tap the lines that are problems.", ask:"is a problem", mono:true, parts:[
      {t:"d <- read.csv(\"survey.csv\")", flag:false, why:"Reads the file; the blank score becomes NA. Fine."},
      "\n",
      {t:"d <- d[d$score > 50, ]", flag:true, why:"Nobody asked for this filter. It quietly drops everyone scoring 50 or less, and the blank score’s NA condition adds a row of NAs."},
      "\n",
      "a <- ",
      {t:"d[d$group == \"A\", ]", flag:false, why:"Keeps group A’s rows with all columns: what was asked."},
      "\n",
      "m <- ",
      {t:"mean(a$score, na.omit = TRUE)", flag:true, why:"`na.omit` isn’t an argument of mean(), so R silently ignores it and m stays NA. The argument is `na.rm = TRUE`; then report how many scores the mean uses."},
      "\n",
      {t:"n <- 6", flag:true, why:"A number typed in, not counted. With a blank score or new data it’s wrong. Count it: `sum(!is.na(a$score))`."},
      "\n",
      {t:"round(m, 1)", flag:false, why:"Rounding at the end, only for display: fine."}
    ]},
    {id:"t3u8-l6-x4", type:"match", q:"Match each problem in AI-made work to the check that catches it best.", pairs:[
      ["`merge()` turns 4 people into 6 rows","Compare `nrow()` before and after","Repeated keys multiply rows, and unmatched ones vanish; the row count shows both."],
      ["A mean comes out as NA","Count missing values with `colSums(is.na(d))`","One missing value makes mean() return NA; counting NAs shows where and how many."],
      ["Shares that may use the wrong denominator","Run it on a 4-row case worked out by hand","On a case you know, a wrong denominator gives an obviously wrong share."],
      ["A bar of 417 for a test scored out of 100","Ask whether the value is even possible","A mean can’t exceed the maximum score; an impossible value means the wrong summary."],
      ["A reference to a 2021 journal article","Find it outside the chatbot and open it","Invented references look real; only the source itself can confirm it."]
    ]},
    {id:"t3u8-l6-x5", type:"mcq", q:"An AI summary says: “The groups differed significantly (p = 0.03), so there’s a 97% chance the new schedule works.” Which correction is right?", options:[
      {t:"p = 0.03 is about the data, assuming no difference; it isn’t the chance the schedule works", ok:true, why:"Right. A p-value is about the data, assuming no real difference. It isn’t the probability of any hypothesis, as the ASA’s 2016 statement stresses."},
      {t:"It should say there’s a 3% chance the schedule works", why:"That misreads p the other way. p isn’t the probability that the schedule works or doesn’t."},
      {t:"It’s correct: 1 − p is the chance the effect is real", why:"This is the classic misreading. The chance that an effect is real depends on much more than one p-value."},
      {t:"It should say the effect is large, since p is below 0.05", why:"p doesn’t measure size. A tiny effect can be significant in a big sample; look at the effect and its interval."}
    ]},
    {id:"t3u8-l6-x6", type:"sort", q:"An assistant made these chart choices. Which need fixing, and which are fine?", buckets:["Needs fixing","Fine as it is"], items:[
      {t:"`geom_col()` on the raw rows, for a chart of each group’s mean", b:0, why:"geom_col() stacks the rows, so each bar shows a total. Summarise to means first."},
      {t:"A bar chart of two means with the y-axis from 60 to 72", b:0, why:"Bars are judged by length, so the axis must start at 0. Here a 6% difference looks like nearly 80%."},
      {t:"A line chart of daily temperatures with the y-axis from 10 to 25 °C", b:1, why:"Line charts show change by position, not length, so an axis that fits the data is fine (Unit 4)."},
      {t:"`scale_color_viridis_d()` to tell two groups apart", b:1, why:"viridis is designed to read for common color vision deficiencies and in greyscale."},
      {t:"Only red and green to tell two groups apart", b:0, why:"Many people can’t tell red from green. Use a color-blind-safe palette, or add shapes or labels."},
      {t:"Means calculated first, then `geom_col()`, with the axis from 0", b:1, why:"Each bar shows the intended summary on an honest baseline."}
    ]},
    {id:"t3u8-l6-x7", type:"order", q:"Put the routine for checking AI-written analysis code in order.", items:[
      {t:"Read every line and say what it does", why:"Reading first catches invented functions, unwanted filters and typed-in numbers before anything runs."},
      {t:"Run it on a tiny known case worked out by hand", why:"You can only judge the output if you already know the right answer."},
      {t:"Run it on the real data and check rows, NAs and ranges", why:"Real data brings missing values, repeats and odd codes the tiny case may not have."},
      {t:"Cross-check the key numbers another way", why:"A second method, tool or person catches what one route can hide."},
      {t:"Record the prompt, code and versions, and disclose", why:"Last, keep the trail so others can check the work, and say how AI was used."}
    ]},
    {id:"t3u8-l6-x8", type:"explain", q:"An AI assistant gives you R code to calculate the share of each answer within each group, and its output looks believable. Explain how a tiny known case can reveal a bug the real output hides.", model:"On real data, a wrong formula can produce numbers that look plausible. A known case is a few rows where you already know the answer: say group A with one Yes and one No (50% Yes) and group B with two Yes (100%). Running the code on it, `prop.table(table(...))` reports group B as 50% Yes, exposing that it divided by the whole table’s total instead of each group’s; `margin = 1` fixes it. A sanity check helps too: each group’s shares must add up to 1.", points:["Says plausible-looking output can still be wrong", "Describes building a tiny dataset with a known answer", "Compares the code’s output with the known answer to find the bug", "Mentions a sanity check, such as shares adding to 1 per group"]}
   ],
   apply:{intro:"Check some AI-written code yourself. Task 1 works on any device in the Data Lab; task 2 needs R with the tidyverse (a computer or Posit Cloud); task 3 is a note you can write anywhere. If you don’t use AI tools, use the AI-written code from this lesson instead.", tasks:[
     {t:"Test AI-written base R in the Data Lab (any device)", how:["Open the Data Lab’s **Compare groups** challenge (mean score for each group) and copy its task text","Paste the task into an AI assistant you’re allowed to use, adding: “base R only, the data frame is d with columns id, group, age, hours, score, answer”. Share no personal data","Before running it, write one line per line of code saying what it does. Mark anything you can’t explain and look it up","Make a known case in the editor, such as `test <- data.frame(group = c(\"A\", \"A\", \"B\"), score = c(50, 70, 90))` (A’s mean is 60, B’s is 90). Run the AI’s code on it, with `d <- test` in place of its read.csv() line","Then put the read.csv() line back, run it on survey.csv and press **Check**: the lab tests it again on a second, hidden file. Note anything you had to fix"]},
     {t:"Check an AI-made chart and test (computer or Posit Cloud)", how:["Ask an assistant for “a ggplot2 bar chart of mean score by group” and “a test of whether groups A and B differ in score” for survey.csv","Run the chart code. Check what each bar shows (compare with `tapply(survey$score, survey$group, mean)`), where the axis starts, and whether the colors are color-blind-safe","Read the test code: which test is it, and does it fit 12 different people in two groups? (A paired test would not.) Check how the assistant describes the p-value against this lesson’s table","On a phone instead: in the Data Lab, after `d <- read.csv(\"survey.csv\")`, run `barplot(tapply(d$score, d$group, sum))` and `barplot(tapply(d$score, d$group, mean))` and explain the difference"]},
     {t:"Start an AI log and write a disclosure (any device)", how:["Make a note or text file called AI-log in your project folder or notes app","For task 1 or 2, record: the date, the tool and the model name it shows, your prompt, what came back, how you tested it, what you fixed, and the R version (`R.version.string` in the Data Lab)","Write one disclosure sentence you could put in a report: what the AI did, and how you checked it"]}
   ], proof:"An AI log entry with your prompt, the code you got, the known case you tested it on and its result, any fix, the R version, and a one-sentence disclosure, plus the Data Lab’s “Compare groups” challenge marked as passed (or, without AI, the same checks on this lesson’s code)."},
   read:[{book:"r4ds", where:"Chapter 8, “Workflow: getting help”: section “Making a reprex” (small, self-contained examples that reproduce a problem)"},{book:"ostat", where:"Chapter 10, Section 10.4 “Matched or Paired Samples”"},{book:"wilke", where:"Chapter 17, “The principle of proportional ink”, and Chapter 19, “Common pitfalls of color use”"},{book:"missing", where:"“Agentic Coding” → What to watch out for"}]
  }
  ],
  checkpoint:[
 "t3u8-q02",
 "t3u8-q05",
 "t3u8-q08",
 "t3u8-q11",
 "t3u8-q14",
 "t3u8-q17",
 "t3u8-q21",
 "t3u8-q24",
 "t3u8-q29",
 "t3u8-q32",
 "t3u8-q38",
 "t3u8-q42"
],
  cpBank:[
   {id:"t3u8-cp01", lesson:"t3u8-l1", level:1, q:"The survey tibble has the columns id, group, age, hours, score and answer, in that order. Which columns does `select(survey, group:hours)` keep?", options:[
     {t:"group and hours only", why:"The colon means a range of neighboring columns, so everything between them is kept too."},
     {t:"group, age and hours", ok:true, why:"`group:hours` keeps every column from group to hours: group, age and hours."},
     {t:"id, group, age and hours", why:"The range starts at group, so id (before it) is not included."},
     {t:"Every column except group and hours", why:"Dropping columns needs a minus sign, such as `-group`. The colon picks a range to keep."}]},
   {id:"t3u8-cp02", lesson:"t3u8-l1", level:2, q:"In the 12-person survey, the people under 30 are ids 1, 4, 7 and 11, and the people who scored over 80 are ids 7 and 10. How many rows does `filter(survey, age < 30 | score > 80)` return?", options:[
     {t:"1", why:"That is the count for *and* (a comma or `&`): only id 7 is both. `|` means or."},
     {t:"6", why:"That counts id 7 twice. A row is kept once if either condition is TRUE."},
     {t:"5", ok:true, why:"`|` keeps rows where at least one condition is TRUE: ids 1, 4, 7, 10 and 11."},
     {t:"2", why:"2 is just the number who scored over 80. Rows meeting the age condition are kept too."}]},
   {id:"t3u8-cp03", lesson:"t3u8-l2", level:1, q:"R rewrites code that uses the native pipe before running it. Which line means exactly the same as `survey |> filter(age > 40)`?", options:[
     {t:"`filter(age > 40, survey)`", why:"The pipe puts the left side in as the **first** argument, not the last."},
     {t:"`survey(filter(age > 40))`", why:"`survey` is data, not a function. The pipe passes survey into filter()."},
     {t:"`filter(survey) > 40`", why:"The condition stays inside filter(). The pipe only adds survey as the first argument."},
     {t:"`filter(survey, age > 40)`", ok:true, why:"`x |> f(y)` becomes `f(x, y)`: the left side becomes the first argument."}]},
   {id:"t3u8-cp04", lesson:"t3u8-l2", level:2, q:"Survey scores are 61, 70, 55, 78, 66, 49, 83, 72, 60, 88, 52 and 75. After `mutate(band = case_when(score >= 80 ~ \"high\", score >= 60 ~ \"mid\", .default = \"low\"))`, `count(band)` shows how many in \"mid\"?", options:[
     {t:"9", why:"That puts 83 and 88 in “mid” too. case_when uses the first TRUE condition, so they are already “high”."},
     {t:"7", ok:true, why:"Conditions are checked top to bottom. 83 and 88 are high; 61, 70, 78, 66, 72, 60 and 75 are mid (7); 55, 49 and 52 are low."},
     {t:"5", why:"Check each score against 60: seven scores are from 60 to 79."},
     {t:"10", why:"That counts every score of 50 or more. The `.default` covers scores below 60, which are “low”."}]},
   {id:"t3u8-cp05", lesson:"t3u8-l2", level:3, q:"Group B’s scores are 55, 78, 49, 72, 88 and 75. In `survey |> group_by(group) |> mutate(vs_group = score - mean(score)) |> ungroup()`, what is `vs_group` for person 10 (group B, score 88)?", options:[
     {t:"About 20.6", why:"That uses the mean of all 12 people (67.4). After group_by(), mean(score) is computed within each group."},
     {t:"0, because mutate() after group_by() returns one row per group", why:"That is what summarize() does. Grouped mutate() keeps every row and adds the group’s value to each."},
     {t:"88, because the mean is subtracted only in summarize()", why:"mutate() does the calculation for every row. Here it subtracts B’s mean from each B score."},
     {t:"18.5", ok:true, why:"B’s mean is 417 ÷ 6 = 69.5. Grouped mutate() keeps every row: 88 − 69.5 = 18.5."}]},
   {id:"t3u8-cp06", lesson:"t3u8-l3", level:1, q:"In the survey, `answer` is Yes, No or Unsure. How many rows does `summarize(survey, m = mean(score), .by = answer)` return?", options:[
     {t:"1", why:"Without `.by`, summarize() gives one row. With `.by = answer`, it gives one row per answer."},
     {t:"12", why:"summarize() boils rows down; it doesn’t keep one row per person. That would be mutate()."},
     {t:"3", ok:true, why:"`.by` groups for this one summary: one row each for Yes, No and Unsure."},
     {t:"6", why:"6 would be the combinations of group and answer. Here the grouping is by answer alone."}]},
   {id:"t3u8-cp07", lesson:"t3u8-l3", level:2, q:"The four people who answered No scored 55, 49, 60 and 52. In `survey |> group_by(answer) |> summarize(mean_score = mean(score))`, what is `mean_score` for No?", options:[
     {t:"54", ok:true, why:"(55 + 49 + 60 + 52) ÷ 4 = 216 ÷ 4 = 54. Each answer gets its own mean."},
     {t:"67.4", why:"That is the mean of all 12 scores. group_by(answer) makes summarize() work within each answer."},
     {t:"53.5", why:"That is the median of the four scores (52 and 55 averaged). mean() adds them and divides by 4."},
     {t:"216", why:"That is the sum. mean() divides it by the 4 people."}]},
   {id:"t3u8-cp08", lesson:"t3u8-l3", level:3, q:"A wide table has 6 rows (classrooms) and the columns `room`, `floor` and `temp_mon` to `temp_fri`. After `pivot_longer(cols = starts_with(\"temp_\"), names_to = \"day\", values_to = \"temp\")`, how many rows does `summarize(m = mean(temp), .by = day)` return?", options:[
     {t:"6, one per classroom", why:"That would need `.by = room`. Here the grouping column is day, which holds 5 values (temp_mon to temp_fri)."},
     {t:"30, one for each room and day", why:"30 (6 × 5) is the size of the long table. summarize() boils each group down to one row."},
     {t:"5, one per day", ok:true, why:"pivot_longer() makes 6 × 5 = 30 rows, with a day column holding 5 different values. Grouping by day gives one summary row for each."},
     {t:"1, the mean of all readings", why:"Without `.by`, summarize() would give one row. `.by = day` gives one row per day."}]},
   {id:"t3u8-cp09", lesson:"t3u8-l4", level:2, q:"Which line makes each point’s size depend on study hours, with a legend explaining it?", options:[
     {t:"`geom_point(aes(size = hours))`", ok:true, why:"Inside `aes()` is a mapping: size comes from the hours column, and ggplot2 adds a legend."},
     {t:"`geom_point(size = hours)`", why:"Outside `aes()` is a setting, which expects a fixed value. R looks for an object called hours and doesn’t find one."},
     {t:"`geom_point(size = 3)`", why:"That sets every point to size 3. Nothing depends on the data, so there is no legend."},
     {t:"`geom_point(aes(size = \"hours\"))`", why:"In quotes, “hours” is one fixed value, so every point gets the same size and the legend is pointless."}]},
   {id:"t3u8-cp10", lesson:"t3u8-l4", level:3, q:"In group B, two people answered No, three Yes and one Unsure. How tall is the tallest bar in `survey |> filter(group == \"B\") |> ggplot(aes(x = answer)) + geom_bar()`?", options:[
     {t:"6, the number of rows in group B", why:"geom_bar() draws one bar per answer, each counting its own rows. The six rows are split into 2, 3 and 1."},
     {t:"3, the Yes bar", ok:true, why:"filter() keeps group B’s 6 rows; geom_bar() counts rows for each answer. Yes has 3."},
     {t:"6, the Yes bar for the whole survey", why:"The pipe passes only group B into ggplot(). Across all 12 people Yes is 6, but here it is 3."},
     {t:"An error, because a pipe can’t lead into ggplot()", why:"Piping data into ggplot() is fine. Only the layers after it must be joined with `+`."}]},
   {id:"t3u8-cp11", lesson:"t3u8-l5", level:2, q:"A Quarto report says “The mean score was `r round(mean(survey$score), 1)`.” The 12 scores add up to 809. Two new responses, scoring 90 and 58, are added and the report is rendered again. What does the sentence say now?", options:[
     {t:"67.4, because inline values are fixed once written", why:"Inline code is rerun at every render. That’s what keeps the sentence in step with the data."},
     {t:"74.0, the mean of the two new scores", why:"mean() uses every score in the data, old and new: 14 in all."},
     {t:"68.4", ok:true, why:"(809 + 90 + 58) ÷ 14 = 957 ÷ 14 ≈ 68.36, which rounds to 68.4. The render recomputes it."},
     {t:"79.8, because the new total is divided by 12", why:"There are now 14 responses, so the total is divided by 14."}]},
   {id:"t3u8-cp12", lesson:"t3u8-l5", level:3, q:"Ravi’s bar chart maps `fill = group`. He adds `scale_color_viridis_d()`, but the bars keep their default colors. Why, and what is the fix?", options:[
     {t:"viridis only works on scatterplots; use a Brewer palette instead", why:"viridis scales work with any geom. The problem is which aesthetic the scale is for."},
     {t:"The scale must come before `geom_col()`; move it up", why:"Layer order doesn’t matter for scales. The scale has to match the aesthetic that was mapped."},
     {t:"The bars use fill, not color; use `scale_fill_viridis_d()`", ok:true, why:"Each scale controls one aesthetic. A color scale changes outlines and points; a fill scale changes bar insides."},
     {t:"`_d` is for numbers; use `scale_color_viridis_c()`", why:"`_d` is for discrete categories, which group is. The fix is a fill scale, not a continuous one."}]},
  ],
  codex:[
 {
  "id": "tidyverse",
  "title": "The tidyverse",
  "aka": [
   "tidyverse packages",
   "library(tidyverse)"
  ],
  "tags": [
   "r",
   "data",
   "tools"
  ],
  "summary": "A family of R packages (dplyr, tidyr, ggplot2, readr and more) that share one design for working with tidy data.",
  "levels": {
   "starter": [
    "R comes with many functions built in, often called **base R**. People also write **packages**: bundles of extra functions anyone can install. The **tidyverse** is a popular collection of packages that were designed together, so they feel like one toolkit.",
    "Think of a set of kitchen tools from one maker: the handles fit the same hand, and they stack in the same drawer. In the tidyverse, every function takes a table of data first and gives back a table, and the function names are verbs: filter, select, arrange, mutate, summarize.",
    "You install it once on a computer with `install.packages(\"tidyverse\")`, then load it at the start of each session with `library(tidyverse)`. It runs in R on your computer or in Posit Cloud (RStudio in a browser). This app’s Data Lab runs base R only, so there you use base R versions of the same ideas.",
    "You don’t need the tidyverse to use R well, but it makes long chains of data steps much easier to read."
   ],
   "builder": [
    "Loading `tidyverse` attaches nine core packages: **ggplot2** (charts), **dplyr** (manipulating data), **tidyr** (reshaping), **readr** (reading files), **tibble** (data frames), **purrr** (repeating tasks), **stringr** (text), **forcats** (categories) and **lubridate** (dates). Installing it also brings related packages such as readxl (Excel files) that you load separately.",
    "The shared ideas:",
    {
     "list": [
      "**Tidy data**: one variable per column, one observation per row, one value per cell.",
      "**Data first**: the first argument is the data frame, so steps chain with the pipe `|>`.",
      "**Verbs**: each function does one clear job and returns a new data frame without changing the original.",
      "**Tibbles**: data frames that print neatly, showing size and column types."
     ]
    },
    "When it loads, the tidyverse lists **conflicts**, such as `dplyr::filter() masks stats::filter()`. This means two packages have a function with the same name, and the most recently loaded one wins. Write `package::function()` to choose explicitly.",
    {
     "table": [
      [
       "Where",
       "Can run the tidyverse?"
      ],
      [
       "R + RStudio Desktop",
       "Yes, after installing"
      ],
      [
       "Posit Cloud",
       "Yes, installed per project"
      ],
      [
       "Data Lab (webR)",
       "No: base R only"
      ]
     ]
    },
    "Where to start learning: *R for Data Science* (2nd edition), free online, teaches R through the tidyverse from the first chapter; Data Carpentry’s *R for Social Scientists* does the same with a survey of households. If a tutorial uses `library(tidyverse)`, you need it installed; if it uses only base functions such as `subset()` and `aggregate()`, it will also run in the Data Lab. When code fails with “could not find function”, the usual cause is a package that isn’t loaded in this session."
   ],
   "pro": [
    "Packages come from CRAN, R’s official archive, which checks that each package installs and passes its own checks on several platforms. `install.packages()` also installs dependencies; on Linux, packages may be compiled from source, which is slower and may need system libraries. `update.packages()` updates installed packages, and results can change slightly when they do, so record versions with `sessionInfo()` for reproducible work (the renv package can lock versions per project).",
    "The tidyverse uses **tidy evaluation**: inside verbs you write bare column names (`filter(d, age > 30)`) rather than `d$age`. That’s convenient interactively but needs care when writing your own functions (look up “embracing” with `{{ }}` in dplyr’s programming vignette).",
    "Version notes as of 2026: the `tidyverse` meta-package is at 2.0.0, and current dplyr and tidyr releases need R 4.1 or later. dplyr 1.2.0 made the `.by` argument and `reframe()` stable, added `filter_out()` for dropping rows, and soft-deprecated `case_match()` in favor of `recode_values()`. ggplot2 4.0.0 moved to a new internal object system (S7) and no longer translates `size` to `linewidth` for the outlines of `geom_bar()` and `geom_col()`; for lines, `size` has been deprecated since 3.4.0 in favor of `linewidth`. Code in this unit avoids those edge cases, but older tutorials may use them.",
    "Base R and the tidyverse mix freely: a tibble is a data frame, and base functions such as `nrow()`, `table()` and `lm()` work on it. *R for Data Science* (2e) has a chapter, “A field guide to base R”, mapping dplyr verbs to base equivalents."
   ]
  },
  "related": [
   "dplyr-verbs",
   "pipes-r",
   "ggplot2-basics",
   "rstudio-posit",
   "tidy-data-principles"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "“Introduction” (Prerequisites: the tidyverse) and Chapter 27, “A field guide to base R”"
   }
  ],
  "sources": [
   {
    "t": "tidyverse: R packages for data science",
    "url": "https://www.tidyverse.org/"
   },
   {
    "t": "R for Data Science (2e): Introduction",
    "url": "https://r4ds.hadley.nz/intro.html"
   },
   {
    "t": "Posit Cloud documentation: Compute hours and the background execution limit",
    "url": "https://docs.posit.co/cloud/guide/articles/compute-hours.html"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "dplyr-verbs",
  "title": "dplyr verbs: filter, select, arrange, mutate",
  "aka": [
   "dplyr",
   "filter()",
   "select()",
   "arrange()",
   "mutate()"
  ],
  "tags": [
   "r",
   "data",
   "wrangling"
  ],
  "summary": "Four dplyr functions that keep rows, keep columns, sort rows and add columns, each with a base R equivalent.",
  "levels": {
   "starter": [
    "**dplyr** is the tidyverse package for changing tables. Its functions are named like instructions you’d give a helper:",
    {
     "list": [
      "`filter()`: keep only the rows that match a rule (people aged 30 or over).",
      "`select()`: keep only some columns.",
      "`arrange()`: sort the rows.",
      "`mutate()`: add a new column calculated from others."
     ]
    },
    "Each takes the table first, then the details, and gives back a new table, leaving the original unchanged. To keep the result, give it a name with `<-`.",
    "These are the same jobs you might do in a spreadsheet with a filter, hiding columns, sort, and a formula filled down. The difference is that the steps are written down, so you can rerun them on new data in a second.",
    "Most real questions use several verbs in a row: keep group B, keep three columns, sort by score. Lesson 2’s pipe joins them into one readable recipe."
   ],
   "builder": [
    {
     "table": [
      [
       "dplyr",
       "Base R equivalent"
      ],
      [
       "`filter(d, age >= 30)`",
       "`subset(d, age >= 30)` or `d[d$age >= 30, ]`"
      ],
      [
       "`select(d, id, score)`",
       "`d[, c(\"id\", \"score\")]`"
      ],
      [
       "`arrange(d, desc(score))`",
       "`d[order(-d$score), ]`"
      ],
      [
       "`mutate(d, y = hours * 52)`",
       "`d$y <- d$hours * 52` or `transform(d, y = hours * 52)`"
      ]
     ]
    },
    "Conditions in `filter()`: `==` equals (one `=` is an error dplyr detects), `!=` not equal, `>`, `>=`, `<`, `<=`; a comma or `&` means and; `|` means or; `%in%` means “is one of”. A common mistake is `x == \"a\" | \"b\"`, which doesn’t compare x with \"b\"; write `x %in% c(\"a\", \"b\")`.",
    "`select()` accepts names, ranges (`age:score`), minus signs (`-answer`) and helpers (`starts_with()`, `ends_with()`, `contains()`). `arrange()` sorts smallest first; `desc()` reverses; extra columns break ties. `mutate()` can use a column created earlier in the same call, and reusing a name overwrites that column. For two outcomes use `if_else()`; for several, `case_when()`, whose conditions are checked in order (first TRUE wins).",
    "Other verbs worth knowing: `distinct()` (unique rows), `rename()`, `relocate()`, `slice_max()` / `slice_min()` (rows with the largest or smallest values) and `count()`.",
    "Every verb returns a **new** data frame and leaves the input unchanged, so `arrange(d, score)` on its own only prints a sorted copy. Store results with `<-`, either under a new name (`older <- filter(d, age >= 30)`) or, once you’re sure, over the old one. In a script, keeping the raw data under its own name and building new objects from it makes every step easy to rerun and check. Because the data is always the first argument, the verbs chain naturally with the pipe: `d |> filter(age >= 30) |> arrange(desc(score))`."
   ],
   "pro": [
    "**Missing values.** `filter()` keeps only rows where the condition is TRUE, so NA rows are dropped. Base bracket subsetting `d[cond, ]` returns a row of NAs for each NA in `cond`; `subset()` and `d[which(cond), ]` drop them. `arrange()` always puts NA last, even with `desc()`.",
    "**Types.** `if_else()` errors if the true and false values have different types, where base `ifelse()` silently coerces (and drops attributes such as dates). `case_when()` gained `.default` in dplyr 1.1.0; dplyr 1.2.0 added `.unmatched = \"error\"` for when you believe every case is covered, plus `replace_when()`, `recode_values()` and `replace_values()`, and `filter_out()` for stating which rows to drop (it also keeps NA rows, avoiding the classic `x != 0 | is.na(x)`).",
    "**Base R details.** `-d$x` only reverses numeric columns; for text use `order(x, decreasing = TRUE)` or `-rank(x)`. `transform()` evaluates all its arguments against the original data, so it can’t refer to a column it is creating. `subset()` is handy, but its help page warns it’s intended for interactive use: inside functions, use `[` to avoid surprises with how it finds names.",
    "**Order matters.** Filtering before mutating does less work on large data; selecting early can drop a column a later step needs. In a pipeline, think about which columns each step requires."
   ]
  },
  "related": [
   "tidyverse",
   "pipes-r",
   "grouped-summaries",
   "sort-filter",
   "data-frames-r"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 3, “Data transformation”, Sections 3.2 “Rows” and 3.3 “Columns”"
   },
   {
    "book": "dcss",
    "where": "R for Social Scientists: “Data Wrangling with dplyr”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Data transformation",
    "url": "https://r4ds.hadley.nz/data-transform.html"
   },
   {
    "t": "R for Data Science (2e): A field guide to base R",
    "url": "https://r4ds.hadley.nz/base-R.html"
   },
   {
    "t": "dplyr documentation",
    "url": "https://dplyr.tidyverse.org/"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "pipes-r",
  "title": "The pipe in R: |> and %>%",
  "aka": [
   "native pipe",
   "magrittr pipe",
   "|>",
   "%>%"
  ],
  "tags": [
   "r",
   "code"
  ],
  "summary": "Operators that pass the result on the left into the function on the right, so steps read in order.",
  "levels": {
   "starter": [
    "A **pipe** joins steps into a chain. `x |> f()` means “take x, *then* do f to it”. Instead of wrapping functions inside each other, you write them in the order they happen, one per line:",
    {
     "ex": "survey |>\n  filter(group == \"B\") |>\n  arrange(desc(score))",
     "label": "Read it as: take survey, then keep group B, then sort by score",
     "mono": true
    },
    "R has two pipes. `|>` is built into R (since version 4.1.0) and works anywhere, including this app’s Data Lab. `%>%` is older and comes from the magrittr package, loaded with the tidyverse. For everyday chains they do the same thing.",
    "It’s like a factory line: each station does one job and passes the product to the next.",
    "You’ll often see the shortcut Ctrl + Shift + M (Cmd + Shift + M on a Mac) in RStudio, which types a pipe for you."
   ],
   "builder": [
    "The pipe passes its left side as the **first argument** of the call on its right: `x |> f(y)` is `f(x, y)`. That’s why tidyverse verbs, which all take data first, chain neatly.",
    {
     "table": [
      [
       "",
       "|>",
       "%>%"
      ],
      [
       "Comes from",
       "Base R 4.1.0+",
       "magrittr (tidyverse)"
      ],
      [
       "`x ... f` without brackets",
       "Error: needs `f()`",
       "Allowed"
      ],
      [
       "Placeholder",
       "`_` (R 4.2.0+), named argument only",
       "`.`, almost anywhere"
      ]
     ]
    },
    "The placeholder is for functions that want the data somewhere else: `survey |> lm(score ~ hours, data = _)` or `survey %>% lm(score ~ hours, data = .)`.",
    "Style (tidyverse style guide): a space before the pipe, the pipe at the end of the line, each step on its own line indented two spaces, and break very long pipelines (over about 10–15 lines) into named pieces. In RStudio, Ctrl/Cmd + Shift + M types a pipe; check “Use native pipe operator” in Tools → Global Options → Code to get `|>`.",
    "*R for Data Science* (2e) recommends `|>` for new code. You’ll still see `%>%` widely in older material.",
    "Without a pipe you either nest calls, read from the inside out (`arrange(filter(d, g == \"B\"), x)`), or create a throwaway object for every step. The pipe version reads top to bottom in the order the steps happen, which is why most modern R material uses it. Because `|>` is base R, it also works with base functions, including in the Data Lab: `d |> subset(age >= 30) |> nrow()`. To check a pipeline, run it one step at a time and look at each intermediate result."
   ],
   "pro": [
    "The native pipe is a **syntax transformation**: the parser rewrites `x |> f(y)` into `f(x, y)` before evaluation (`quote(x |> f(y))` prints `f(x, y)`). So it adds no function-call overhead and leaves nothing in tracebacks. magrittr’s `%>%` is an ordinary function (rewritten in C for magrittr 2.0), which allows extra features: bare function names, the dot placeholder used several times or nested (`x %>% f(y = nrow(.))`), and the special pipes `%<>%` (assignment), `%T>%` (tee) and `%$%` (exposition).",
    "Native pipe rules: the right-hand side must be a call; `_` must be used once, as a **named** argument (since R 4.2.0), and since R 4.3.0 it may also start an extraction chain such as `x |> lm(y ~ z, data = _) |> _$coef`. To pipe into an anonymous function, call it: `x |> (\\(v) v + 1)()`.",
    "Precedence: pipes bind more tightly than `+`, so `d |> filter(…) |> ggplot(aes(…)) + geom_point()` works: the pipeline produces the plot, then `+` adds the layer.",
    "Debugging: a long pipeline is easiest to debug by running it one step at a time (highlight up to, but not including, a pipe and run), or by assigning intermediate results."
   ]
  },
  "related": [
   "dplyr-verbs",
   "tidyverse",
   "pipes-redirection"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 3, “Data transformation”, Section 3.4 “The pipe”, and Chapter 4, “Workflow: code style”, Section 4.3 “Pipes”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Data transformation (The pipe)",
    "url": "https://r4ds.hadley.nz/data-transform.html"
   },
   {
    "t": "R for Data Science (2e): Workflow: code style",
    "url": "https://r4ds.hadley.nz/workflow-style.html"
   },
   {
    "t": "magrittr documentation",
    "url": "https://magrittr.tidyverse.org/"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "grouped-summaries",
  "title": "Grouped summaries: group_by(), summarize() and count()",
  "aka": [
   "split-apply-combine",
   "summarize",
   "aggregate",
   "tapply"
  ],
  "tags": [
   "r",
   "data",
   "statistics"
  ],
  "summary": "Split rows into groups, compute a summary for each, and combine the results into one row per group.",
  "levels": {
   "starter": [
    "Often the question isn’t about one person but about groups: “What’s the average score in each class?” or “How many people answered Yes?”",
    "dplyr answers these in two steps. `group_by(group)` sorts the rows into piles, one per group. `summarize(mean_score = mean(score))` then works out the average of each pile and puts the answers in a small new table, one row per group.",
    "This is called **split–apply–combine**: split into groups, apply a calculation, combine the results. It’s the same idea as a spreadsheet pivot table.",
    "For counting there’s a shortcut: `count(answer)` gives the number of rows for each answer.",
    "In base R (and in the Data Lab), `tapply(d$score, d$group, mean)` and `table(d$answer)` do the same jobs.",
    "Always look at how many rows are in each group as well as the summary itself: an average of two people tells you much less than an average of two hundred."
   ],
   "builder": [
    {
     "ex": "survey |>\n  group_by(group) |>\n  summarize(n = n(), mean_score = mean(score))",
     "label": "One row per group, with its size",
     "mono": true
    },
    "Useful summary functions: `n()` (rows), `mean()`, `median()`, `sd()`, `min()`, `max()`, `sum()`, `n_distinct()` and `quantile(x, 0.25)`. Always include `n()`: a mean from 3 people is far less stable than one from 300, and extreme group averages often come from the smallest groups.",
    "`count(x)` equals `group_by(x) |> summarize(n = n())`; `sort = TRUE` puts the largest first; several columns count combinations. Divide by the total for shares: `mutate(share = n / sum(n))`.",
    "Missing values: one NA makes `mean()` NA. Add `na.rm = TRUE`, and report how many values were used (`sum(!is.na(x))`).",
    {
     "table": [
      [
       "dplyr",
       "Base R"
      ],
      [
       "`group_by(g) |> summarize(m = mean(x))`",
       "`tapply(d$x, d$g, mean)`, `aggregate(x ~ g, data = d, FUN = mean)`"
      ],
      [
       "`count(g)`",
       "`table(d$g)`"
      ],
      [
       "`group_by(g) |> mutate(m = mean(x))`",
       "`ave(d$x, d$g)`"
      ]
     ]
    },
    "Keep the grouping columns few and meaningful: grouping by two columns gives one row per combination, so 5 regions × 4 age bands gives up to 20 rows, some possibly tiny. To compare groups fairly, report a measure of spread (such as `sd()` or the IQR) as well as the center, and remember that a grouped `mutate()` keeps every row, which is the way to compare each person with their own group (`score - mean(score)`). In base R, `aggregate(cbind(score, hours) ~ group, data = d, FUN = mean)` summarizes several columns at once."
   ],
   "pro": [
    "**Grouping that lingers.** After `summarize()` with several grouping columns, dplyr drops the last level and keeps the rest, printing a message about `.groups`. Later verbs then act within groups, which can surprise you (a later `mutate(share = n / sum(n))` would compute shares within each remaining group). Use `.groups = \"drop\"`, `ungroup()`, or the per-operation `.by` argument (`summarize(d, m = mean(x), .by = g)`), stable since dplyr 1.2.0, which never leaves grouping behind and keeps groups in order of first appearance rather than sorting them.",
    "`summarize()` should return one row per group; for summaries that return several values (like `quantile(x, c(0.25, 0.75))`) use `reframe()`.",
    "**Base R shapes.** `tapply()` returns an array (a named vector for one factor, a matrix for two); `aggregate()` returns a data frame and by default drops rows with NA in the formula variables (its `na.action`). `table()` excludes NA unless `useNA = \"ifany\"`; `count()` keeps NA as its own group. These differences can make base and dplyr counts disagree on messy data, so check NA handling when comparing.",
    "**Statistics.** A grouped mean describes the groups in this data. Whether a difference between groups is larger than chance would produce is a question for inference (standard errors, confidence intervals and tests), and whether it’s causal is a question of study design."
   ]
  },
  "related": [
   "dplyr-verbs",
   "comparing-groups",
   "pivot-tables",
   "reshaping-data",
   "summary-stats-r"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 3, “Data transformation”, Sections 3.5 “Groups” and 3.6 “Case study: aggregates and sample size”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Data transformation (Groups)",
    "url": "https://r4ds.hadley.nz/data-transform.html"
   },
   {
    "t": "dplyr reference: summarize()",
    "url": "https://dplyr.tidyverse.org/reference/summarise.html"
   },
   {
    "t": "dplyr reference: count()",
    "url": "https://dplyr.tidyverse.org/reference/count.html"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "reshaping-data",
  "title": "Reshaping data: pivot_longer() and pivot_wider()",
  "aka": [
   "pivoting",
   "long and wide",
   "reshape()",
   "melt and cast"
  ],
  "tags": [
   "r",
   "data",
   "tidy data"
  ],
  "summary": "Move a table between wide (a column per time or category) and long (a row per measurement) without changing any values.",
  "levels": {
   "starter": [
    "The same numbers can sit in a table two ways. **Wide**: one row per person, with a column for each week. **Long**: one row per person per week, with a `week` column and a `km` column.",
    "Wide is easy to read at a glance. Long is what analysis and chart tools want, because “week” is a variable and belongs in its own column.",
    "In R, the tidyr package moves between them. `pivot_longer()` stacks several columns into rows; `pivot_wider()` spreads rows back out into columns. Nothing is added or lost: 3 people × 3 weeks is 9 numbers either way, in 3 wide rows or 9 long ones.",
    "Base R has `reshape()` for the same job, which also works in the Data Lab, but its arguments are harder to remember."
   ],
   "builder": [
    {
     "ex": "walks |>\n  pivot_longer(\n    cols = week1:week3,\n    names_to = \"week\",\n    values_to = \"km\"\n  )",
     "label": "Wide to long",
     "mono": true
    },
    "`cols` chooses the columns to stack (names, ranges or helpers like `starts_with(\"week\")`); `names_to` names the new column holding the old column names; `values_to` names the column holding the values. Clean names as you go: `names_prefix = \"week\"` strips a prefix and `names_transform = as.integer` converts the result to numbers.",
    "`pivot_wider(names_from = week, values_from = km)` goes back. It’s also how you make a cross-table from counts: `count(d, group, answer) |> pivot_wider(names_from = answer, values_from = n, values_fill = 0)`. `values_fill = 0` is right for counts, where a missing combination really means zero, but wrong for measurements, where it means unknown.",
    "Check yourself: rows after pivot_longer() = original rows × number of stacked columns.",
    "Which shape is “tidy” depends on what you count as a variable. If “week” is something you want to group, filter or plot by, it belongs in a column, so the long shape is tidy. Wide shapes are still useful for presenting a table to people, for the input to some statistical functions, and for data entry. A common workflow is: read wide data, `pivot_longer()` it, do the analysis with dplyr and ggplot2, and `pivot_wider()` only the final summary table for display."
   ],
   "pro": [
    "**Several variables in column names.** Names like `bp_morning`, `bp_evening`, `hr_morning` hold two variables. Use `names_to = c(\"measure\", \"time\"), names_sep = \"_\"` (or `names_pattern` with a regular expression). The special name `\".value\"` in `names_to` keeps part of the name as an output column: `names_to = c(\".value\", \"time\")` gives columns `bp` and `hr`.",
    "**Missing cells.** `values_drop_na = TRUE` in pivot_longer() drops rows whose value is NA, useful when wide data had empty cells by design. In pivot_wider(), absent combinations become NA unless you set `values_fill`.",
    "**Duplicate keys.** If pivot_wider() finds several values for the same row and column, it warns and produces list-columns. Usually that means the identifying columns don’t uniquely identify a row; fix the data, or summarize with `values_fn = mean` (or `length` to count).",
    "**Base R.** `reshape(d, direction = \"long\", varying, v.names, timevar, times, idvar)` and `direction = \"wide\"` mirror the two pivots; the long result has row names like `Amara.1` and wide names like `km.1` (set `sep`). `stack()` stacks columns into `values` and `ind` but drops identifier columns. For counts, `table()` and `xtabs()` give cross-tables directly. Older tidyverse code used `gather()` and `spread()`, which are superseded by the pivots."
   ]
  },
  "related": [
   "tidy-data-principles",
   "grouped-summaries",
   "ggplot2-basics",
   "pivot-tables"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 5, “Data tidying”"
   },
   {
    "book": "dcss",
    "where": "R for Social Scientists: “Data Wrangling with tidyr”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Data tidying",
    "url": "https://r4ds.hadley.nz/data-tidy.html"
   },
   {
    "t": "tidyr: Pivoting (vignette)",
    "url": "https://tidyr.tidyverse.org/articles/pivot.html"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "ggplot2-basics",
  "title": "ggplot2: the grammar of graphics",
  "aka": [
   "ggplot",
   "aes()",
   "geoms",
   "facets",
   "ggsave()"
  ],
  "tags": [
   "r",
   "charts",
   "visualization"
  ],
  "summary": "Build charts from data, aesthetic mappings and geoms, add facets, labels, scales and themes with +, and save them with ggsave().",
  "levels": {
   "starter": [
    "**ggplot2** is the tidyverse package for charts. Instead of choosing a chart type from a menu, you describe the chart in parts:",
    {
     "list": [
      "the **data** (a table),",
      "the **mappings**: which column goes on the x-axis, which on the y-axis, which decides color,",
      "the **geom**: what shape marks to draw (points, bars, lines, boxes)."
     ]
    },
    "You join the parts with `+`: `ggplot(survey, aes(x = hours, y = score)) + geom_point()` draws one dot per person. Swap `geom_point()` for another geom and you get a different chart from the same data.",
    "Extra layers add polish: `facet_wrap()` splits the chart into small panels, `labs()` adds a title and axis labels, and a theme changes the look. `ggsave()` saves the chart as an image or PDF.",
    "ggplot2 needs R on a computer or Posit Cloud. In the Data Lab, base R’s `plot()`, `hist()`, `boxplot()` and `barplot()` draw similar charts."
   ],
   "builder": [
    {
     "table": [
      [
       "Question",
       "Geom"
      ],
      [
       "Distribution of one number",
       "`geom_histogram(binwidth = …)`"
      ],
      [
       "Groups compared",
       "`geom_boxplot()`"
      ],
      [
       "Counts of categories",
       "`geom_bar()` (counts rows); `geom_col()` (uses your y)"
      ],
      [
       "Two numbers",
       "`geom_point()`, plus `geom_smooth(method = \"lm\")`"
      ],
      [
       "Change over time",
       "`geom_line()` (long data)"
      ]
     ]
    },
    "**Mapping vs setting.** Inside `aes()`, a value comes from a column and gets a legend: `aes(color = group)`. Outside, in the geom, it’s fixed for every mark: `geom_point(color = \"steelblue\", size = 3)`. Putting a constant inside aes() (`aes(color = \"blue\")`) creates a fake category with default colors and a legend.",
    "Map shape or linetype as well as color so groups stay distinguishable without color. `facet_wrap(~ group)` makes small multiples with shared scales.",
    "Polish: `labs(title, subtitle, x, y, color, caption, alt)`; color-blind-safe scales such as `scale_color_viridis_d()` or `scale_color_brewer(palette = \"Dark2\")`; themes such as `theme_minimal(base_size = 14)`, then `theme(legend.position = \"bottom\")`.",
    "Two errors: `+` must end a line (starting a line with it fails), and layers are joined with `+`, not `|>`.",
    "To save, store the plot (`p <- ggplot(...) + ...`) and call `ggsave(\"chart.png\", plot = p, width = 16, height = 10, units = \"cm\", dpi = 300)`. The extension picks the format: PNG for screens and documents, PDF or SVG for print. In the Data Lab, base R’s `plot()`, `hist()`, `boxplot(score ~ group, data = d)` and `barplot(table(d$answer))` draw similar charts, though colors and legends have to be added by hand."
   ],
   "pro": [
    "The **layered grammar** has seven parts: data, mappings, geoms, statistical transformations (stats: `geom_bar()` uses `stat_count()`, `geom_histogram()` uses `stat_bin()`), position adjustments (`position = \"dodge\"`, `\"fill\"`, `\"jitter\"`), coordinate systems (`coord_flip()`, `coord_cartesian()`) and facets. Any chart can be described as a combination of these.",
    "**Zooming vs limits.** `scale_y_continuous(limits = …)` removes data outside the limits *before* computing stats (with a warning about removed rows), which can change boxplots and smooths; `coord_cartesian(ylim = …)` only zooms. Use the second to zoom without changing the data.",
    "**Saving.** `ggsave(filename, plot, width, height, units = c(\"in\", \"cm\", \"mm\", \"px\"), dpi = 300)` picks the device from the extension (png, pdf, svg via svglite, jpeg, tiff). Without `plot`, it saves the last plot displayed; without size, it uses the current device’s size, so always set it in scripts. PNG pixels = inches × dpi (16 cm at 300 dpi ≈ 1,890 px). Text sizes are in points, so a chart saved small looks to have larger text than one saved large.",
    "**Accessibility.** `labs(alt = …)` stores alt text in the plot object (`get_alt_text()`); in Quarto, set `fig-alt` on the chunk, which is attached to the image. ggplot2 4.0.0 (2025) moved to the S7 object system. `size` for line thickness has been deprecated since 3.4.0 (it still works for lines, with a warning, but 4.0.0 no longer translates it for bar outlines); use `linewidth`."
   ]
  },
  "related": [
   "chart-types",
   "colour-in-charts",
   "base-plots-r",
   "reshaping-data",
   "reproducible-reports"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 1, “Data visualization”, Chapter 9, “Layers”, and Chapter 11, “Communication”"
   },
   {
    "book": "dcss",
    "where": "R for Social Scientists: “Data Visualisation with ggplot2”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Layers",
    "url": "https://r4ds.hadley.nz/layers.html"
   },
   {
    "t": "R for Data Science (2e): Communication",
    "url": "https://r4ds.hadley.nz/communication.html"
   },
   {
    "t": "ggplot2 documentation",
    "url": "https://ggplot2.tidyverse.org/"
   }
  ],
  "checked": "2026-11"
 },
 {
  "id": "reproducible-reports",
  "title": "Reproducible reports with Quarto",
  "aka": [
   "Quarto",
   ".qmd",
   "R Markdown",
   "literate programming"
  ],
  "tags": [
   "r",
   "reports",
   "reproducibility"
  ],
  "summary": "Write text, code and results in one file that rebuilds every number and chart from the data each time it is rendered.",
  "levels": {
   "starter": [
    "A report is **reproducible** when anyone with the same data and code gets exactly the same results. The usual way reports break: numbers copied by hand, charts pasted in, and after the data changes nobody knows which figures are current.",
    "**Quarto** fixes this by keeping everything in one plain-text file ending `.qmd`: your writing, the R code, and settings such as the title. When you press **Render**, Quarto runs the code and builds a finished web page, Word document or PDF with the results in place.",
    "If new data arrives, you render again and every number and chart updates. A number in a sentence can be computed too, so it can never fall out of step with the data.",
    "Quarto is free and comes built into recent versions of RStudio. It replaces R Markdown, which works in a similar way."
   ],
   "builder": [
    "A `.qmd` file has three parts:",
    {
     "list": [
      "A **YAML header** between `---` lines: `title`, `author`, `date`, `format` (html, docx, pdf, typst…).",
      "**Markdown text**: `## headings`, `**bold**`, lists, links.",
      "**Code chunks**: R code fenced by three backticks and `{r}`, with options on `#|` lines."
     ]
    },
    {
     "table": [
      [
       "Chunk option",
       "Effect"
      ],
      [
       "`echo: false`",
       "Show results, hide code"
      ],
      [
       "`eval: false`",
       "Show code, don’t run it"
      ],
      [
       "`include: false`",
       "Run, show nothing"
      ],
      [
       "`message: false` / `warning: false`",
       "Hide messages / warnings"
      ],
      [
       "`fig-cap`, `fig-alt`",
       "Figure caption and alt text"
      ]
     ]
    },
    "Inline code, such as `r nrow(survey)` between single backticks, puts a computed value into a sentence.",
    "Rendering: Quarto sends the file to **knitr**, which runs every R chunk in a fresh session and writes Markdown with the results; **Pandoc** converts it to the output format. Because the session is fresh, the document must load its own packages and read its own data.",
    "PDF output via `format: pdf` needs a LaTeX installation (Quarto suggests TinyTeX: `quarto install tinytex`); `format: typst` makes PDFs with the Typst engine bundled in Quarto.",
    "In RStudio, **File → New File → Quarto Document…** creates a starter file, and **Render** (Ctrl/Cmd + Shift + K) builds it. RStudio offers a Visual editor (a word-processor view) and a Source editor (the plain text); both edit the same file. Older projects use R Markdown (`.Rmd` files, rendered with the rmarkdown package), which has the same three parts and mostly the same chunk options; Quarto can render most `.Rmd` files unchanged."
   ],
   "pro": [
    "Quarto is a command-line program (`quarto render report.qmd`, `quarto preview`), not an R package, so its help lives at quarto.org rather than in `?`. RStudio 2022.07 and later bundle it; the `quarto` R package can call it from R (`quarto::quarto_render()`). It also supports Python and Julia (via Jupyter) and projects such as websites and books (*R for Data Science* itself is a Quarto book).",
    "Reproducibility habits beyond the document: keep raw data unchanged and read it with relative paths inside a project folder; set seeds for randomness; record versions (`sessionInfo()`, or renv to lock package versions); keep the project under version control; and render from a clean session before sharing. `cache: true` speeds up slow chunks but can hide stale results when upstream data changes, so clear the cache before a final render.",
    "**Parameters** in the YAML (`params:`) let one report render for different inputs (a region, a year). Cross-references (`@fig-scores` for a chunk labeled `fig-scores`) and citations (a `bibliography:` file and `[@key]`) work across formats.",
    "Reproducible is not the same as correct, or as *replicable* (getting consistent results from new data). It’s the floor: it makes errors traceable and lets others check your work."
   ]
  },
  "related": [
   "ggplot2-basics",
   "tidyverse",
   "raw-data-raw",
   "git-basics"
  ],
  "read": [
   {
    "book": "r4ds",
    "where": "Chapter 28, “Quarto”, and Chapter 29, “Quarto formats”"
   }
  ],
  "sources": [
   {
    "t": "R for Data Science (2e): Quarto",
    "url": "https://r4ds.hadley.nz/quarto.html"
   },
   {
    "t": "Quarto: Using R",
    "url": "https://quarto.org/docs/computations/r.html"
   },
   {
    "t": "Quarto: Typst basics",
    "url": "https://quarto.org/docs/output-formats/typst.html"
   }
  ],
  "checked": "2026-11"
 },
 {id:"checking-ai-data-work", title:"Checking AI-assisted data analysis", aka:["AI-written code","AI statistics","AI-made charts","verifying AI output","LLM data analysis","AI log"], tags:["ai","r","statistics","charts","reproducibility"],
  summary:"Where AI assistants help and where they go wrong in data work, and a routine for checking their code, statistics, charts and sources before you use or share them.",
  levels:{
   starter:[
    "AI chatbots and coding assistants can explain an error, draft R or Python, suggest a chart or translate code between languages in seconds. That makes them useful helpers for data work. But they write what *usually* comes next, not what is true of *your* data.",
    "A chat model that doesn’t run code may give a number that was never calculated. Code it writes may run perfectly and answer a different question: dividing by the wrong total, dropping people with missing values, or counting some people twice after a join. Its explanation of a p-value may be the classic misreading, and its references may not exist.",
    "So treat AI output as a draft. Run the code yourself, first on a tiny example where you know the answer, then on the real data, checking how many rows and missing values you have. Open every source. Keep a short log of what you asked, what you got and how you checked it, and say in your work how you used AI.",
    {key:"The assistant drafts; you verify. You stay responsible for every number."}
   ],
   builder:[
    {h:"A routine for AI-written code"},
    {ol:["**Read every line** and say what it does. Look up anything you can’t explain; question lines you didn’t ask for (an extra filter, a typed-in number, `suppressWarnings()`).","**Run a known case**: a few rows whose answer you worked out by hand, including a missing value and unequal groups.","**Run the real data** and check `nrow()`, `colSums(is.na(d))` and `range()` after each step.","**Cross-check** key numbers another way (a second function, a pivot table, a hand count).","**Record and disclose**: prompt, reply, final code, tool and software versions, date."]},
    {h:"Statistics"},
    {list:["**Numbers with no code** are guesses until recomputed. Check that shares add up, counts match rows, and means sit inside the data’s range.","**Tests**: the assistant can’t see the design. Paired data need a paired test; chi-square needs counts, not percentages; groups of different sizes need care.","**p-values**: p is not the chance a hypothesis is true, a large p doesn’t prove “no effect”, and significance isn’t size.","**Citations**: find and open every source outside the chatbot."]},
    {h:"Charts"},
    "Check what each mark shows (`geom_col()` on raw rows stacks them into totals), where a bar chart’s axis starts (zero), and whether colors suit the data and readers with color vision deficiency."
   ],
   pro:[
    "**Why the errors are silent.** Many failures produce no error: R’s `mean()` passes unknown arguments to `...`, so `na.omit = TRUE` is ignored; `prop.table()` without `margin` divides by the grand total; `merge()` defaults to an inner join and multiplies rows when keys repeat; pandas’ `mean()` skips NaN by default while R’s returns NA, so a faithful-looking translation changes the result. Defaults are where translations and AI drafts most often go wrong.",
    "**Evidence on references.** Walters and Wilder (2023, *Scientific Reports*) checked 636 references in 84 short literature reviews written by ChatGPT: 55% of GPT-3.5’s and 18% of GPT-4’s were fabricated, and many real ones contained substantive errors. Tools have changed since, so treat the figures as a snapshot, not a current rate; the check (open the source) is the same.",
    "**Reproducibility.** Model output varies between runs and versions, so the prompt is not the method: the checked code is. Keep the code in a script or Quarto report, record `sessionInfo()` (or `sys.version` and package versions), and keep the AI log beside it.",
    "**Disclosure and responsibility.** The ICMJE says journals should require authors to disclose at submission whether they used AI-assisted technologies, and to describe how (in the cover letter and, where relevant, the manuscript); it says chatbots should not be listed as authors because they can’t take responsibility, and holds humans accountable for checking AI output; COPE takes the same line. Institutions and courses set their own rules. Don’t upload personal or confidential data to tools that aren’t approved for it."
   ]
  },
  related:["known-case-testing","ai-code-review","ai-chatbot-accuracy","statistical-significance-basics","misleading-charts","ai-research-policies","reproducible-reports"],
  read:[{book:"r4ds", where:"Chapter 8, “Workflow: getting help”"},{book:"missing", where:"“Agentic Coding” → What to watch out for"}],
  sources:[{t:"Walters & Wilder (2023), Fabrication and errors in the bibliographic citations generated by ChatGPT, Scientific Reports", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10484980/"},{t:"ICMJE: AI use by authors", url:"https://www.icmje.org/recommendations/browse/artificial-intelligence/ai-use-by-authors.html"},{t:"Wasserstein & Lazar (2016), The ASA Statement on p-Values: Context, Process, and Purpose", url:"https://doi.org/10.1080/00031305.2016.1154108"}],
  checked:"2026-11"
 },
 {id:"known-case-testing", title:"Testing analysis code on a known case", aka:["known-answer test","toy data","test data","sanity checks","row-count checks","silent failure"], tags:["r","python","testing","data"],
  summary:"Check analysis code by running it on tiny data whose answer you worked out by hand, then checking rows, missing values and ranges on the real data.",
  levels:{
   starter:[
    "How do you know a piece of analysis code is right? Running without an error isn’t enough: code can run perfectly and still give the wrong answer.",
    "The simplest test borrows from the kitchen: before cooking for twenty, make one portion and taste it. Make a tiny table, three or four rows, where you can work out the answer in your head. Group A: scores 50 and 70, so the mean is 60. Run the code on it. If it doesn’t say 60, the code is wrong, and you found out before it mattered.",
    "Then, on the real data, do quick **sanity checks**: is the number of rows what you expect? Are any values missing? Is every result possible (a share between 0 and 1, a mean inside the data’s range)? These checks catch most mistakes, whoever wrote the code: you, a colleague or an AI assistant."
   ],
   builder:[
    {h:"Building a good known case"},
    {list:["Make it small enough to check by hand (3–8 rows).","Include the traps: unequal group sizes, a missing value, a tie, a value exactly on a boundary (30 when the rule is “30 or over”), a repeated id.","Write the expected answer down **before** running the code."]},
    {code:"test <- data.frame(group = c(\"A\", \"A\", \"B\"),\n  score = c(50, NA, 90))\ntapply(test$score, test$group, mean, na.rm = TRUE)\n# expected: A 50, B 90", lang:"r", label:"R · base R, runs in the Data Lab"},
    {h:"Checks on the real data"},
    {table:[["Check","Base R","pandas"],["Rows","`nrow(d)`","`len(df)`"],["Missing values","`colSums(is.na(d))`","`df.isna().sum()`"],["Ranges","`range(d$x)`, `summary(d)`","`df.describe()`"],["Repeated keys","`anyDuplicated(d$id)`","`df[\"id\"].duplicated().sum()`"]]},
    "Run them after every step that can change rows: reading, filtering, joining, reshaping."
   ],
   pro:[
    "**Silent failures to know.** In R, unknown arguments to `mean()` disappear into `...`; `d[d$x > 30, ]` adds NA rows when `x` has NAs; `prop.table()` without `margin` uses the grand total; `merge()` is an inner join by default (`all.x = TRUE` keeps unmatched rows) and gives one row per match, so rows multiply when keys repeat. In pandas, `mean()` and `groupby` skip NaN by default, and `value_counts()` drops NaN unless `dropna=False`; `groupby().agg([\"count\", \"size\"])` shows non-missing values beside rows.",
    "**From checks to tests.** A known case you keep is a test. In R, `stopifnot(nrow(m) == nrow(people))` stops a script when an assumption breaks; the testthat package formalizes tests for functions. In Python, `assert` and pytest do the same (Track 2, Unit 11).",
    "**Minimal examples.** The same small data make a reproducible example (“reprex”) when you ask for help: `dput(head(d))` prints code that rebuilds your data, and the reprex package formats code and output for sharing (R for Data Science, “Workflow: getting help”)."
   ]
  },
  related:["checking-ai-data-work","r-errors","missing-values","sql-joins","testing-basics","reproducible-reports"],
  read:[{book:"r4ds", where:"Chapter 8, “Workflow: getting help”: section “Making a reprex”"}],
  sources:[{t:"R documentation: mean (Arithmetic Mean)", url:"https://stat.ethz.ch/R-manual/R-devel/library/base/html/mean.html"},{t:"R documentation: merge (Merge Two Data Frames)", url:"https://stat.ethz.ch/R-manual/R-devel/library/base/html/merge.html"},{t:"pandas documentation: DataFrame.mean", url:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.mean.html"}],
  checked:"2026-11"
 }
],
  terms:[
 {
  "id": "tidyverse-term",
  "term": "tidyverse",
  "def": "A collection of R packages (dplyr, tidyr, ggplot2, readr and others) designed to work together on tidy data. Load it with `library(tidyverse)`.",
  "codex": "tidyverse"
 },
 {
  "id": "base-r",
  "term": "base R",
  "def": "The functions that come with R itself, without installing extra packages, such as `subset()`, `table()` and `plot()`. The Data Lab runs base R only.",
  "codex": "tidyverse"
 },
 {
  "id": "tibble",
  "term": "tibble",
  "def": "The tidyverse’s version of a data frame. It prints its size and column types and shows only the first rows; base R functions still work on it.",
  "codex": "tidyverse"
 },
 {
  "id": "dplyr",
  "term": "dplyr",
  "def": "The tidyverse package for manipulating data frames with verbs such as `filter()`, `select()`, `mutate()` and `summarize()`.",
  "codex": "dplyr-verbs"
 },
 {
  "id": "filter-verb",
  "term": "filter()",
  "def": "The dplyr verb that keeps the rows where a condition is TRUE, for example `filter(survey, age >= 30)`. Base R: `subset()`.",
  "codex": "dplyr-verbs"
 },
 {
  "id": "select-verb",
  "term": "select()",
  "def": "The dplyr verb that keeps (or drops, with a minus sign) columns by name.",
  "codex": "dplyr-verbs"
 },
 {
  "id": "arrange-verb",
  "term": "arrange()",
  "def": "The dplyr verb that sorts rows by one or more columns, smallest first; `desc()` reverses. Base R: `d[order(d$x), ]`.",
  "codex": "dplyr-verbs"
 },
 {
  "id": "mutate-verb",
  "term": "mutate()",
  "def": "The dplyr verb that adds new columns, or replaces existing ones, using calculations on other columns.",
  "codex": "dplyr-verbs"
 },
 {
  "id": "pipe-operator",
  "term": "pipe (|> or %>%)",
  "def": "An operator that passes the result on its left as the first argument of the function on its right, so `x |> f()` means `f(x)`. Read it as “then”.",
  "codex": "pipes-r"
 },
 {
  "id": "group-by",
  "term": "group_by()",
  "def": "The dplyr verb that marks rows as belonging to groups, so that later verbs such as `summarize()` work group by group.",
  "codex": "grouped-summaries"
 },
 {
  "id": "summarise-verb",
  "term": "summarize()",
  "def": "The dplyr verb that collapses rows into summary values, such as a mean or a count; one row per group after `group_by()`. Also spelled `summarize()`.",
  "codex": "grouped-summaries"
 },
 {
  "id": "count-verb",
  "term": "count()",
  "def": "A dplyr shortcut that counts the rows for each value (or combination of values), giving a column `n`. Base R: `table()`.",
  "codex": "grouped-summaries"
 },
 {
  "id": "pivot-longer",
  "term": "pivot_longer()",
  "def": "The tidyr function that makes a table longer by stacking several columns into rows: their names go into one new column and their values into another.",
  "codex": "reshaping-data"
 },
 {
  "id": "pivot-wider",
  "term": "pivot_wider()",
  "def": "The tidyr function that makes a table wider by spreading the values of one column out into several new columns.",
  "codex": "reshaping-data"
 },
 {
  "id": "ggplot2",
  "term": "ggplot2",
  "def": "The tidyverse package for charts, built on the grammar of graphics: data, aesthetic mappings and geoms, added together in layers with `+`.",
  "codex": "ggplot2-basics"
 },
 {
  "id": "aesthetic-mapping",
  "term": "aesthetic mapping",
  "def": "In ggplot2, a link from a column of data to a visual property such as x position, color or shape, written inside `aes()`.",
  "codex": "ggplot2-basics"
 },
 {
  "id": "geom",
  "term": "geom",
  "def": "In ggplot2, the kind of mark that draws the data: `geom_point()`, `geom_bar()`, `geom_line()`, `geom_boxplot()` and others.",
  "codex": "ggplot2-basics"
 },
 {
  "id": "facet-ggplot",
  "term": "facet (in ggplot2)",
  "def": "A panel of a chart showing one subset of the data; `facet_wrap(~ group)` makes one panel per group with shared axes (small multiples).",
  "codex": "ggplot2-basics"
 },
 {
  "id": "ggplot-theme",
  "term": "theme (in ggplot2)",
  "def": "The settings for a chart’s non-data parts: background, grid lines, fonts and legend position, such as `theme_minimal()`.",
  "codex": "ggplot2-basics"
 },
 {
  "id": "quarto",
  "term": "Quarto",
  "def": "A free, open-source publishing system that turns a `.qmd` file of text and code into HTML, Word or PDF, running the code each time so results stay current.",
  "codex": "reproducible-reports"
 },
 {
  "id": "yaml-header",
  "term": "YAML header",
  "def": "The settings block at the top of a Quarto (or R Markdown) file, between two `---` lines: title, author, output format.",
  "codex": "reproducible-reports"
 },
 {
  "id": "code-chunk",
  "term": "code chunk",
  "def": "A block of code inside a Quarto document, fenced by three backticks and `{r}`, which runs when the document is rendered; `#|` lines set its options.",
  "codex": "reproducible-reports"
 },
 {id:"known-case-test", term:"known-case test", def:"Running code on a tiny dataset whose correct answer you worked out by hand first, to see whether the code gets it right.", codex:"known-case-testing"},
 {id:"sanity-check", term:"sanity check", def:"A quick test of whether a result is even possible: shares that add up to 1, a mean inside the data’s range, a row count you expected.", codex:"known-case-testing"},
 {id:"silent-failure", term:"silent failure", def:"Code that runs with no error or warning but gives a wrong result, such as `mean(x, na.omit = TRUE)`, where R quietly ignores the wrong argument name.", codex:"known-case-testing"},
 {id:"ai-log", term:"AI log", def:"A dated record of how you used an AI tool in a piece of work: the tool and version, your prompts, its replies, what you changed and how you checked it.", codex:"checking-ai-data-work"}
],
  bank:[
 {
  "id": "t3u8-q01",
  "lesson": "t3u8-l1",
  "level": 1,
  "q": "What is the tidyverse?",
  "options": [
   {
    "t": "A collection of R packages that work together on tidy data",
    "ok": true,
    "why": "dplyr, tidyr, ggplot2, readr and others share one design: data first, verbs, tidy tables."
   },
   {
    "t": "A separate programming language that replaces R for data work",
    "why": "It’s a set of R packages; you still write R."
   },
   {
    "t": "The built-in part of R that needs no installing",
    "why": "That’s base R. The tidyverse is installed with install.packages()."
   },
   {
    "t": "A website for sharing data sets",
    "why": "It’s software (packages), not a data site."
   }
  ]
 },
 {
  "id": "t3u8-q02",
  "lesson": "t3u8-l1",
  "level": 1,
  "q": "How often do you need to run `install.packages(\"tidyverse\")` and `library(tidyverse)`?",
  "options": [
   {
    "t": "Install once per computer (or to update); load in every new R session",
    "ok": true,
    "why": "Installing puts the files on the computer; loading makes the functions available in the current session."
   },
   {
    "t": "Both every time you open R",
    "why": "Reinstalling each time is unnecessary and slow; only loading is needed per session."
   },
   {
    "t": "Both only once, ever",
    "why": "A new session forgets loaded packages, so library() is needed each time."
   },
   {
    "t": "Load once per computer; install every session",
    "why": "It’s the other way round."
   }
  ]
 },
 {
  "id": "t3u8-q03",
  "lesson": "t3u8-l1",
  "level": 2,
  "q": "After `library(tidyverse)`, R prints `dplyr::filter() masks stats::filter()`. What does that mean?",
  "options": [
   {
    "t": "Plain `filter()` now means dplyr’s version",
    "ok": true,
    "why": "stats’ version is still reachable as `stats::filter()`. Two packages have a function with that name; the one loaded last wins. `package::function()` chooses explicitly."
   },
   {
    "t": "An error: the tidyverse didn’t load",
    "why": "It’s an informational note; loading succeeded."
   },
   {
    "t": "stats::filter() has been deleted from your computer",
    "why": "Nothing is deleted; it’s only hidden behind the newer name."
   },
   {
    "t": "You must uninstall the stats package",
    "why": "stats is part of R and shouldn’t be removed; the note is normal."
   }
  ]
 },
 {
  "id": "t3u8-q04",
  "lesson": "t3u8-l1",
  "level": 2,
  "q": "Which code runs in the app’s Data Lab?",
  "options": [
   {
    "t": "`subset(d, group == \"B\")`",
    "ok": true,
    "why": "subset() is base R, which is all the lab has."
   },
   {
    "t": "`filter(d, group == \"B\")`",
    "why": "dplyr isn’t available in the lab; base R’s own filter() is a different function and fails here."
   },
   {
    "t": "`library(dplyr)`",
    "why": "The lab can’t install or load packages."
   },
   {
    "t": "`read_csv(\"survey.csv\")`",
    "why": "read_csv() is from readr; the lab has base R’s read.csv()."
   }
  ]
 },
 {
  "id": "t3u8-q05",
  "lesson": "t3u8-l1",
  "level": 2,
  "q": "Which call keeps the rows where answer is Yes **or** Unsure?",
  "options": [
   {
    "t": "`filter(survey, answer %in% c(\"Yes\", \"Unsure\"))`",
    "ok": true,
    "why": "%in% tests whether each value is one of the listed values."
   },
   {
    "t": "`filter(survey, answer == \"Yes\" | \"Unsure\")`",
    "why": "The part after | doesn’t compare anything with answer; it’s an error."
   },
   {
    "t": "`filter(survey, answer == \"Yes\", answer == \"Unsure\")`",
    "why": "A comma means and: no answer can be both, so no rows."
   },
   {
    "t": "`filter(survey, answer = c(\"Yes\", \"Unsure\"))`",
    "why": "One = is a naming mistake, and dplyr stops with an error."
   }
  ]
 },
 {
  "id": "t3u8-q06",
  "lesson": "t3u8-l1",
  "level": 2,
  "q": "Which base R code gives the same result as `arrange(d, desc(score))` for a numeric score?",
  "options": [
   {
    "t": "`d[order(-d$score), ]`",
    "ok": true,
    "why": "order() of the negated scores lists rows from largest to smallest score."
   },
   {
    "t": "`d[order(d$score), ]`",
    "why": "That sorts smallest first, like arrange(d, score)."
   },
   {
    "t": "`sort(d$score, decreasing = TRUE)`",
    "why": "That sorts only the score values, not whole rows."
   },
   {
    "t": "`d[-order(d$score), ]`",
    "why": "A minus in front of positions *drops* those rows; here it drops them all."
   }
  ]
 },
 {
  "id": "t3u8-q07",
  "lesson": "t3u8-l1",
  "level": 3,
  "q": "Ama runs `arrange(survey, score)` and sees a sorted table. Later, `head(survey)` shows the original order. Why?",
  "options": [
   {
    "t": "dplyr verbs return a new table, and she didn’t store it",
    "ok": true,
    "why": "So survey is unchanged. To keep the sorted version: `survey_sorted <- arrange(survey, score)`."
   },
   {
    "t": "arrange() only sorts temporarily, for about five minutes",
    "why": "There’s no timer; the sorted result was simply never stored."
   },
   {
    "t": "head() always unsorts data",
    "why": "head() shows the first rows in their current order."
   },
   {
    "t": "She needed `sort = TRUE`",
    "why": "arrange() has no sort argument; the sorting worked, it just wasn’t saved."
   }
  ]
 },
 {
  "id": "t3u8-q08",
  "lesson": "t3u8-l1",
  "level": 3,
  "q": "Chen’s teaching laptop can’t install software, and his students use Chromebooks. They need dplyr and ggplot2. What’s the most practical option?",
  "options": [
   {
    "t": "Posit Cloud, which runs RStudio in the browser",
    "ok": true,
    "why": "Each project can install the tidyverse, and it needs only a browser and account. Check the free plan’s compute-hour limit before relying on it for a whole class."
   },
   {
    "t": "The app’s Data Lab",
    "why": "The lab runs base R only; it can’t load dplyr or ggplot2."
   },
   {
    "t": "Type the code into a spreadsheet",
    "why": "Spreadsheets don’t run R code."
   },
   {
    "t": "There’s no way to do it without installing R locally",
    "why": "Posit Cloud runs R on a server, so nothing is installed on the Chromebook."
   }
  ]
 },
 {
  "id": "t3u8-q09",
  "lesson": "t3u8-l1",
  "level": 3,
  "q": "Some ages in Mei’s data are NA. `nrow(d[d$age > 40, ])` gives 7, but `nrow(subset(d, age > 40))` gives 5. What explains the difference?",
  "options": [
   {
    "t": "Brackets return an all-NA row for each missing age; subset() drops them, so 2 ages are probably missing",
    "ok": true,
    "why": "An NA condition can’t be TRUE or FALSE; brackets keep a placeholder row, subset() and filter() drop it."
   },
   {
    "t": "subset() has a bug",
    "why": "It’s deliberate: subset() keeps only rows where the condition is TRUE."
   },
   {
    "t": "Brackets count the header row",
    "why": "nrow() never counts the header; the extra rows are NA rows."
   },
   {
    "t": "`>` behaves differently in brackets",
    "why": "The comparison is the same; the difference is how NA results are treated."
   }
  ]
 },
 {
  "id": "t3u8-q10",
  "lesson": "t3u8-l2",
  "level": 1,
  "q": "What does `mutate()` do?",
  "options": [
   {
    "t": "Adds new columns (or replaces existing ones) calculated from other columns",
    "ok": true,
    "why": "Every row gets the calculation, like filling a formula down a spreadsheet column."
   },
   {
    "t": "Removes rows that don’t match a condition",
    "why": "That’s filter()."
   },
   {
    "t": "Changes the order of rows",
    "why": "That’s arrange()."
   },
   {
    "t": "Randomly changes values",
    "why": "Despite the name, nothing random happens."
   }
  ]
 },
 {
  "id": "t3u8-q11",
  "lesson": "t3u8-l2",
  "level": 2,
  "q": "`x <- c(1, 4, 9)`. What does `x |> sqrt() |> sum()` return?",
  "options": [
   {
    "t": "6",
    "ok": true,
    "why": "sqrt gives 1, 2, 3, and their sum is 6: the pipe makes it sum(sqrt(x))."
   },
   {
    "t": "14",
    "why": "That’s sum(x) without the square roots."
   },
   {
    "t": "3.74",
    "why": "That’s sqrt(sum(x)), the steps in the wrong order."
   },
   {
    "t": "An error",
    "why": "Both functions have brackets, so the native pipe is happy."
   }
  ]
 },
 {
  "id": "t3u8-q12",
  "lesson": "t3u8-l2",
  "level": 1,
  "q": "Since which R version is the native pipe `|>` built in?",
  "options": [
   {
    "t": "4.1.0",
    "ok": true,
    "why": "It arrived in R 4.1.0 (2021); the `_` placeholder followed in 4.2.0."
   },
   {
    "t": "3.0.0",
    "why": "Much too early; R users then relied on magrittr’s %>%."
   },
   {
    "t": "It isn’t built in; it needs magrittr",
    "why": "That’s %>%. |> is part of base R."
   },
   {
    "t": "4.6.0",
    "why": "It has existed since well before the Data Lab’s R 4.6."
   }
  ]
 },
 {
  "id": "t3u8-q13",
  "lesson": "t3u8-l2",
  "level": 2,
  "q": "Which is valid with the native pipe?",
  "options": [
   {
    "t": "`survey |> lm(score ~ hours, data = _)`",
    "ok": true,
    "why": "`_` used once as a named argument is allowed (R 4.2.0+)."
   },
   {
    "t": "`survey |> nrow`",
    "why": "The right side must be a call: `nrow()`."
   },
   {
    "t": "`survey |> lm(score ~ hours, data = .)`",
    "why": "The dot is magrittr’s placeholder; with |> it’s just an unknown object named `.`."
   },
   {
    "t": "`survey |> nrow(_)`",
    "why": "`_` must be a named argument, so this is an error."
   }
  ]
 },
 {
  "id": "t3u8-q14",
  "lesson": "t3u8-l2",
  "level": 2,
  "q": "`case_when(score >= 50 ~ \"pass\", score >= 80 ~ \"distinction\", .default = \"resit\")`. What label does a score of 85 get?",
  "options": [
   {
    "t": "pass",
    "ok": true,
    "why": "Conditions are checked top to bottom; 85 >= 50 is TRUE first. Put the stricter condition (>= 80) first."
   },
   {
    "t": "distinction",
    "why": "It would be, if that line came first. Order decides."
   },
   {
    "t": "resit",
    "why": "The default applies only when no condition matches."
   },
   {
    "t": "An error, because two conditions match",
    "why": "Overlaps are allowed; the first TRUE one wins."
   }
  ]
 },
 {
  "id": "t3u8-q15",
  "lesson": "t3u8-l2",
  "level": 2,
  "q": "In base R, `transform(d, a = hours * 52, b = a / 365)` fails with `object 'a' not found`. Which fixes it while keeping base R?",
  "options": [
   {
    "t": "Create `a` first, then `b` in a second step (for example `d$a <- d$hours * 52; d$b <- d$a / 365`)",
    "ok": true,
    "why": "transform() evaluates against the original data, so a column it creates isn’t visible to its other arguments."
   },
   {
    "t": "Swap the order: `b` first, then `a`",
    "why": "b would still need a, which doesn’t exist yet."
   },
   {
    "t": "Use `==` instead of `=`",
    "why": "`=` is right for naming new columns; `==` compares."
   },
   {
    "t": "Wrap it in `library(dplyr)`",
    "why": "That isn’t base R (and can’t load in the Data Lab). In dplyr, mutate() would allow it."
   }
  ]
 },
 {
  "id": "t3u8-q16",
  "lesson": "t3u8-l2",
  "level": 3,
  "q": "Lucía finds tutorial code using `%>%`. She uses `|>` in her own scripts. What’s good advice?",
  "options": [
   {
    "t": "Recognise both, and use one consistently in new code",
    "ok": true,
    "why": "Either works: for everyday chains they behave the same; R for Data Science recommends |> for new code."
   },
   {
    "t": "%>% code is broken and must be rewritten",
    "why": "It runs fine whenever magrittr (or the tidyverse) is loaded."
   },
   {
    "t": "|> only works on tibbles",
    "why": "|> works with any function call, including base R functions on data frames."
   },
   {
    "t": "Mixing the two pipes in one script causes wrong answers",
    "why": "Mixing works; it’s just less tidy."
   }
  ]
 },
 {
  "id": "t3u8-q17",
  "lesson": "t3u8-l2",
  "level": 3,
  "q": "Oluwaseun’s pipeline is 25 lines long and hard to debug. What does the tidyverse style guide suggest?",
  "options": [
   {
    "t": "Break it up and give the intermediate result a good name",
    "ok": true,
    "why": "Pipelines over about 10–15 lines get hard to follow; named pieces can be checked one at a time."
   },
   {
    "t": "Put it all on one line",
    "why": "That makes it harder to read, not easier."
   },
   {
    "t": "Switch from |> to %>%",
    "why": "The pipe type doesn’t change the length or readability."
   },
   {
    "t": "Nest every function inside the next one instead of piping",
    "why": "Nesting is harder to read than a pipeline."
   }
  ]
 },
 {
  "id": "t3u8-q18",
  "lesson": "t3u8-l2",
  "level": 3,
  "q": "Hana has a single number column `rain_mm` and wants a column `wet` that’s \"yes\" when rain_mm is over 1 and \"no\" otherwise, in base R in the Data Lab. Which works?",
  "options": [
   {
    "t": "`d$wet <- ifelse(d$rain_mm > 1, \"yes\", \"no\")`",
    "ok": true,
    "why": "Base ifelse() needs no package and gives one value per row."
   },
   {
    "t": "`d <- mutate(d, wet = if_else(rain_mm > 1, \"yes\", \"no\"))`",
    "why": "mutate() and if_else() are dplyr; the lab can’t load it."
   },
   {
    "t": "`d$wet <- if (d$rain_mm > 1) \"yes\" else \"no\"`",
    "why": "`if` needs one TRUE or FALSE, not a whole column; R 4.2+ gives an error."
   },
   {
    "t": "`d$wet == ifelse(d$rain_mm > 1, \"yes\", \"no\")`",
    "why": "`==` compares; it doesn’t store a new column."
   }
  ]
 },
 {
  "id": "t3u8-q19",
  "lesson": "t3u8-l3",
  "level": 1,
  "q": "What does `group_by(group)` on its own do to a table?",
  "options": [
   {
    "t": "Marks the groups for later verbs; the rows don’t change",
    "ok": true,
    "why": "Printing shows `# Groups: group [2]`; the effect appears with summarize() or mutate()."
   },
   {
    "t": "Sorts the rows by group",
    "why": "It doesn’t reorder rows; use arrange() for that."
   },
   {
    "t": "Collapses the table to one row per group, like a summary",
    "why": "That’s summarize() after group_by()."
   },
   {
    "t": "Deletes the group column",
    "why": "Nothing is deleted."
   }
  ]
 },
 {
  "id": "t3u8-q20",
  "lesson": "t3u8-l3",
  "level": 2,
  "q": "Group A’s weekly hours are 3, 5, 4, 7, 3 and 2. What’s `median(hours)` for group A?",
  "options": [
   {
    "t": "3.5",
    "ok": true,
    "why": "Sorted: 2, 3, 3, 4, 5, 7. The median is halfway between the 3rd and 4th values: (3 + 4) ÷ 2 = 3.5."
   },
   {
    "t": "4",
    "why": "4 is the mean (24 ÷ 6). The median is the middle of the sorted values."
   },
   {
    "t": "3",
    "why": "3 is the most common value (the mode)."
   },
   {
    "t": "7",
    "why": "7 is the maximum."
   }
  ]
 },
 {
  "id": "t3u8-q21",
  "lesson": "t3u8-l3",
  "level": 2,
  "q": "Which base R line matches `survey |> group_by(group) |> summarize(m = mean(score))`?",
  "options": [
   {
    "t": "`tapply(d$score, d$group, mean)`",
    "ok": true,
    "why": "tapply(values, groups, function): the mean score for each group."
   },
   {
    "t": "`tapply(d$group, d$score, mean)`",
    "why": "Values and groups are swapped; R would try to average the group letters."
   },
   {
    "t": "`mean(d$score)`",
    "why": "That’s one mean for everyone, without groups."
   },
   {
    "t": "`table(d$group)`",
    "why": "That counts people per group; it doesn’t average scores."
   }
  ]
 },
 {
  "id": "t3u8-q22",
  "lesson": "t3u8-l3",
  "level": 2,
  "q": "`count(survey, answer)` gives No 4, Unsure 2, Yes 6. Adding `|> mutate(share = n / sum(n))` gives what share for No?",
  "options": [
   {
    "t": "0.333",
    "ok": true,
    "why": "4 ÷ 12 = 0.333: a third of the people."
   },
   {
    "t": "4",
    "why": "That’s the count, n."
   },
   {
    "t": "0.4",
    "why": "That’s 4 ÷ 10; the total is 4 + 2 + 6 = 12."
   },
   {
    "t": "33",
    "why": "That’s a percentage. The code gives a proportion between 0 and 1."
   }
  ]
 },
 {
  "id": "t3u8-q23",
  "lesson": "t3u8-l3",
  "level": 3,
  "q": "Tomás reports “Group C has the highest mean satisfaction: 9.5”. His summary shows group C has n = 2, while others have n = 150 or more. What’s the best response?",
  "options": [
   {
    "t": "Report the group sizes; a mean from 2 people is unstable",
    "ok": true,
    "why": "It shouldn’t be headlined: small groups produce extreme averages by chance; always show n alongside a grouped mean."
   },
   {
    "t": "Delete group C from the data",
    "why": "Hiding data isn’t honest; report it with its size and a caution."
   },
   {
    "t": "Multiply group C’s mean by 75 so it matches the larger groups",
    "why": "That makes no statistical sense."
   },
   {
    "t": "Nothing: a mean is a mean",
    "why": "The same mean is far less trustworthy from 2 people than from 150."
   }
  ]
 },
 {
  "id": "t3u8-q24",
  "lesson": "t3u8-l3",
  "level": 2,
  "q": "A wide table has 4 rows (one per shop) and columns `shop`, `jan`, `feb`, `mar`. After `pivot_longer(cols = jan:mar, names_to = \"month\", values_to = \"sales\")`, what are its dimensions?",
  "options": [
   {
    "t": "12 rows, 3 columns (shop, month, sales)",
    "ok": true,
    "why": "4 shops × 3 months = 12 rows; the three month columns become one name column and one value column."
   },
   {
    "t": "4 rows, 3 columns",
    "why": "The row count grows: each shop gets one row per month."
   },
   {
    "t": "12 rows, 4 columns",
    "why": "jan, feb and mar disappear into month and sales, leaving 3 columns."
   },
   {
    "t": "3 rows, 4 columns",
    "why": "That’s more like the wide shape turned sideways."
   }
  ]
 },
 {
  "id": "t3u8-q25",
  "lesson": "t3u8-l3",
  "level": 2,
  "q": "In `pivot_wider(names_from = answer, values_from = n, values_fill = 0)`, what does `values_fill = 0` do?",
  "options": [
   {
    "t": "Puts 0 where a combination doesn’t occur",
    "ok": true,
    "why": "Without it, those cells would be NA. For counts, an absent combination really is zero."
   },
   {
    "t": "Replaces every value in the table with 0",
    "why": "Only the missing cells are filled."
   },
   {
    "t": "Removes any columns that contain a 0",
    "why": "It adds zeros; it doesn’t remove columns."
   },
   {
    "t": "Starts the counts from 0 instead of 1",
    "why": "Counts are unchanged; only gaps are filled."
   }
  ]
 },
 {
  "id": "t3u8-q26",
  "lesson": "t3u8-l3",
  "level": 3,
  "q": "Sione has blood-pressure readings in a wide table and uses `values_fill = 0` when widening, so missing readings become 0. What’s wrong?",
  "options": [
   {
    "t": "A missing reading is unknown, not zero",
    "ok": true,
    "why": "0 would wrongly pull averages down. values_fill = 0 suits counts, where absence means none, not measurements, where absence means unknown. Leave them NA."
   },
   {
    "t": "Nothing; 0 is the standard code for missing",
    "why": "0 is a real value; NA is R’s code for missing."
   },
   {
    "t": "values_fill only accepts text",
    "why": "It accepts numbers; the problem is the meaning."
   },
   {
    "t": "pivot_wider() can’t be used on measurements",
    "why": "It can; just don’t invent zeros."
   }
  ]
 },
 {
  "id": "t3u8-q27",
  "lesson": "t3u8-l3",
  "level": 3,
  "q": "Kenji wants to chart each walker’s distance over the weeks with ggplot2, but his data has columns `name, week1, week2, week3`. What should he do first?",
  "options": [
   {
    "t": "pivot_longer() the week columns into `week` and `km`",
    "ok": true,
    "why": "Then each aesthetic has one column to map. ggplot2 maps columns to x, y and color; the week variable must be in a column, not spread across names."
   },
   {
    "t": "pivot_wider() the table",
    "why": "It’s already wide; it needs to get longer."
   },
   {
    "t": "Delete two of the week columns",
    "why": "That throws away data instead of reshaping it."
   },
   {
    "t": "Nothing; ggplot2 reads the column names as the x values",
    "why": "ggplot2 maps columns, not column names, to aesthetics."
   }
  ]
 },
 {
  "id": "t3u8-q28",
  "lesson": "t3u8-l4",
  "level": 1,
  "q": "In ggplot2, what does `aes()` do?",
  "options": [
   {
    "t": "Maps data columns to visual properties such as x and y",
    "ok": true,
    "why": "aes() is short for aesthetic mappings, such as x, y and color."
   },
   {
    "t": "Adds a title",
    "why": "That’s labs(title = …)."
   },
   {
    "t": "Saves the chart",
    "why": "That’s ggsave()."
   },
   {
    "t": "Chooses the type of mark to draw, such as points or bars",
    "why": "That’s the geom."
   }
  ]
 },
 {
  "id": "t3u8-q29",
  "lesson": "t3u8-l4",
  "level": 2,
  "q": "Which code draws every point dark green?",
  "options": [
   {
    "t": "`ggplot(d, aes(hours, score)) + geom_point(color = \"darkgreen\")`",
    "ok": true,
    "why": "Setting a fixed color goes outside aes(), in the geom."
   },
   {
    "t": "`ggplot(d, aes(hours, score, color = \"darkgreen\")) + geom_point()`",
    "why": "Inside aes(), \"darkgreen\" is treated as a data value: default color and a legend saying darkgreen."
   },
   {
    "t": "`ggplot(d, aes(hours, score)) + geom_point(aes(color = group))`",
    "why": "That colors by group."
   },
   {
    "t": "`ggplot(d, aes(hours, score)) + labs(color = \"darkgreen\")`",
    "why": "labs() sets legend titles, not colors."
   }
  ]
 },
 {
  "id": "t3u8-q30",
  "lesson": "t3u8-l4",
  "level": 2,
  "q": "Which geom should you use for the distribution of one numeric column, such as weekly hours?",
  "options": [
   {
    "t": "`geom_histogram()` with a chosen binwidth",
    "ok": true,
    "why": "A histogram bins the values to show their shape."
   },
   {
    "t": "`geom_line()`",
    "why": "Lines suggest change over an ordered variable such as time."
   },
   {
    "t": "`geom_col()`",
    "why": "geom_col() needs a y value you supply, like precomputed counts."
   },
   {
    "t": "`facet_wrap()`",
    "why": "That’s not a geom; it splits a chart into panels."
   }
  ]
 },
 {
  "id": "t3u8-q31",
  "lesson": "t3u8-l4",
  "level": 2,
  "q": "What’s the difference between `geom_bar()` and `geom_col()`?",
  "options": [
   {
    "t": "geom_bar() counts rows; geom_col() draws the y values given",
    "ok": true,
    "why": "Use geom_col() when the counts (or other values) are already in a column."
   },
   {
    "t": "geom_bar() draws horizontal bars and geom_col() draws vertical ones",
    "why": "Both draw vertical bars by default; orientation is changed by mapping."
   },
   {
    "t": "geom_col() is only for colors",
    "why": "The “col” is short for column (as in bar), not color."
   },
   {
    "t": "They’re identical",
    "why": "They differ in where the bar heights come from."
   }
  ]
 },
 {
  "id": "t3u8-q32",
  "lesson": "t3u8-l4",
  "level": 3,
  "q": "Fatima’s code is `ggplot(d, aes(hours, score))` on one line and `+ geom_point()` on the next. R draws an empty chart and gives an error. Why?",
  "options": [
   {
    "t": "The `+` must go at the end of the first line",
    "ok": true,
    "why": "R ran the first line as complete. A line ending with + tells R more is coming. A line starting with + is a new command."
   },
   {
    "t": "geom_point() needs its own aes() inside the brackets",
    "why": "It inherits the mappings from ggplot(); the problem is the line break."
   },
   {
    "t": "hours and score need quotes",
    "why": "aes() uses bare column names."
   },
   {
    "t": "She must use |> instead of +",
    "why": "Layers are joined with +, never |>."
   }
  ]
 },
 {
  "id": "t3u8-q33",
  "lesson": "t3u8-l4",
  "level": 3,
  "q": "Priya’s scatterplot colors two groups red and green. A colleague with red–green color blindness can’t tell them apart. Which change helps most?",
  "options": [
   {
    "t": "Map shape to group too, and use a safer palette",
    "ok": true,
    "why": "Use `aes(color = group, shape = group)` and a color-blind-safe palette. A second channel (shape) doesn’t rely on color at all, and palettes such as viridis or Dark2 are designed to stay distinguishable."
   },
   {
    "t": "Make the points bigger so the colors are easier to see",
    "why": "Size alone doesn’t separate the two colors."
   },
   {
    "t": "Add a title",
    "why": "Useful, but it doesn’t help tell the groups apart."
   },
   {
    "t": "Use theme_dark() so the colors stand out more",
    "why": "A dark background doesn’t solve the red–green confusion."
   }
  ]
 },
 {
  "id": "t3u8-q34",
  "lesson": "t3u8-l4",
  "level": 2,
  "q": "Which base R code, runnable in the Data Lab, draws one box per group of score?",
  "options": [
   {
    "t": "`boxplot(score ~ group, data = d)`",
    "ok": true,
    "why": "The formula score ~ group means score split by group."
   },
   {
    "t": "`ggplot(d, aes(group, score)) + geom_boxplot()`",
    "why": "Correct ggplot2, but the lab can’t load ggplot2."
   },
   {
    "t": "`hist(d$score)`",
    "why": "That’s one histogram of all scores."
   },
   {
    "t": "`barplot(d$score)`",
    "why": "That draws one bar per person’s score."
   }
  ]
 },
 {
  "id": "t3u8-q35",
  "lesson": "t3u8-l4",
  "level": 3,
  "q": "Ana makes `facet_wrap(~ region)` with 6 regions. One region has 10 times as many people as the others, and its points crowd the panel. She sets `scales = \"free_y\"`. What’s the trade-off?",
  "options": [
   {
    "t": "Easier to read each panel, harder to compare across panels",
    "ok": true,
    "why": "Each panel fits its own y-axis, so heights are no longer comparable. Shared scales allow fair comparison; free scales help reading within a panel. Say so in a note if you use them."
   },
   {
    "t": "No trade-off; free scales are always better than shared ones",
    "why": "They make cross-panel comparison misleading if readers assume shared axes."
   },
   {
    "t": "It removes the large region",
    "why": "No data is removed."
   },
   {
    "t": "It changes the data values",
    "why": "Only the axis ranges change."
   }
  ]
 },
 {
  "id": "t3u8-q45",
  "lesson": "t3u8-l4",
  "level": 2,
  "q": "Which code draws one line per walker from long data with columns name, week (a number) and km?",
  "options": [
   {
    "t": "`ggplot(long, aes(x = week, y = km, color = name)) + geom_line()`",
    "ok": true,
    "why": "Mapping color to name also groups the points, so each walker gets their own line."
   },
   {
    "t": "`ggplot(long, aes(x = week, y = km)) + geom_line()`",
    "why": "Without a grouping, ggplot2 joins all nine points into one zig-zag line."
   },
   {
    "t": "`ggplot(long, aes(x = name, y = km)) + geom_line()`",
    "why": "That puts names on the x-axis; lines should follow time (week)."
   },
   {
    "t": "`ggplot(walks, aes(x = week1, y = week2)) + geom_line()`",
    "why": "That plots week 1 against week 2 from the wide table, not change over time."
   }
  ]
 },
 {
  "id": "t3u8-q36",
  "lesson": "t3u8-l5",
  "level": 1,
  "q": "Which ggplot2 function sets the title, axis labels and caption?",
  "options": [
   {
    "t": "`labs()`",
    "ok": true,
    "why": "labs(title, subtitle, x, y, caption, color…, alt) covers the text labels."
   },
   {
    "t": "`theme()`",
    "why": "theme() controls appearance (fonts, grid, legend position), not the label text."
   },
   {
    "t": "`aes()`",
    "why": "aes() maps data to visual properties."
   },
   {
    "t": "`ggsave()`",
    "why": "ggsave() writes the chart to a file."
   }
  ]
 },
 {
  "id": "t3u8-q37",
  "lesson": "t3u8-l5",
  "level": 2,
  "q": "Dmitri writes `p + theme(legend.position = \"bottom\") + theme_minimal()` and the legend is still on the right. Why?",
  "options": [
   {
    "t": "The complete theme added afterwards resets it",
    "ok": true,
    "why": "Put theme() after theme_minimal(). Later layers override earlier ones; a complete theme replaces all theme settings."
   },
   {
    "t": "legend.position doesn’t accept \"bottom\" as a value",
    "why": "\"bottom\" is a valid value."
   },
   {
    "t": "theme_minimal() has no legend",
    "why": "It does; the legend just moved back to its default."
   },
   {
    "t": "He must save the plot first",
    "why": "Saving doesn’t affect theme order."
   }
  ]
 },
 {
  "id": "t3u8-q38",
  "lesson": "t3u8-l5",
  "level": 2,
  "q": "Which `ggsave()` call gives a repeatable, print-quality PNG of chart `p`?",
  "options": [
   {
    "t": "`ggsave(\"p.png\", plot = p, width = 16, height = 10, units = \"cm\", dpi = 300)`",
    "ok": true,
    "why": "Naming the plot and fixing size and resolution makes the same file every time."
   },
   {
    "t": "`ggsave(\"p.png\")`",
    "why": "It saves the last plot shown at the current window size, which changes between sessions."
   },
   {
    "t": "A screenshot of the plot window",
    "why": "Size and resolution depend on the screen, and it can’t be rerun from code."
   },
   {
    "t": "`ggsave(p)`",
    "why": "The first argument is the file name; this fails."
   }
  ]
 },
 {
  "id": "t3u8-q39",
  "lesson": "t3u8-l5",
  "level": 1,
  "q": "What are the three kinds of content in a Quarto `.qmd` file?",
  "options": [
   {
    "t": "A YAML header, Markdown text and code chunks",
    "ok": true,
    "why": "Settings at the top, prose, and code that runs when rendered."
   },
   {
    "t": "Slides, tables and charts",
    "why": "Those can be outputs; the source is header, text and chunks."
   },
   {
    "t": "HTML, CSS and JavaScript",
    "why": "Those may be produced in HTML output, but you don’t write them."
   },
   {
    "t": "Only R code",
    "why": "The point is mixing text and code in one file."
   }
  ]
 },
 {
  "id": "t3u8-q40",
  "lesson": "t3u8-l5",
  "level": 2,
  "q": "A chunk has `#| echo: false`. What appears in the rendered report?",
  "options": [
   {
    "t": "The chunk’s results (such as a chart), without its code",
    "ok": true,
    "why": "echo: false hides the code; the chunk still runs."
   },
   {
    "t": "The code, without results",
    "why": "That’s eval: false."
   },
   {
    "t": "Nothing at all, but the code runs",
    "why": "That’s include: false."
   },
   {
    "t": "An error",
    "why": "It’s a normal option."
   }
  ]
 },
 {
  "id": "t3u8-q41",
  "lesson": "t3u8-l5",
  "level": 2,
  "q": "What does inline code like `r nrow(survey)` (between backticks) in a Quarto sentence do?",
  "options": [
   {
    "t": "Inserts the computed value into the sentence",
    "ok": true,
    "why": "The sentence updates when the data changes. It becomes “12” today and a new number after new data, with no retyping."
   },
   {
    "t": "Shows the code in gray, without running it",
    "why": "It’s run and replaced by its result."
   },
   {
    "t": "Creates a new chunk",
    "why": "Inline code lives inside the sentence."
   },
   {
    "t": "Only works when the report is rendered to PDF",
    "why": "It works in every format."
   }
  ]
 },
 {
  "id": "t3u8-q42",
  "lesson": "t3u8-l5",
  "level": 3,
  "q": "Mei wants a PDF from Quarto but can’t install LaTeX on a work computer. What can she try?",
  "options": [
   {
    "t": "`format: typst`, which needs no LaTeX",
    "ok": true,
    "why": "It uses the Typst engine bundled with Quarto. Typst makes PDFs without a separate TeX installation; `format: pdf` needs LaTeX (for example TinyTeX)."
   },
   {
    "t": "`format: html` and rename the file to .pdf",
    "why": "Renaming doesn’t convert the file."
   },
   {
    "t": "There’s no way to make PDFs without LaTeX",
    "why": "Typst is a bundled alternative."
   },
   {
    "t": "`format: docx`, then retype it",
    "why": "Word output works, but retyping loses reproducibility."
   }
  ]
 },
 {
  "id": "t3u8-q43",
  "lesson": "t3u8-l5",
  "level": 3,
  "q": "Amara’s report renders on her computer but a colleague gets `cannot open file 'C:/Users/amara/Desktop/survey.csv'`. What’s the best fix?",
  "options": [
   {
    "t": "Keep the file in the project and use a relative path",
    "ok": true,
    "why": "Put survey.csv in the project folder and read it with `read_csv(\"survey.csv\")`. Relative paths work wherever the project folder is copied."
   },
   {
    "t": "Ask the colleague to create a folder called amara on their C drive",
    "why": "A workaround that breaks again on the next computer."
   },
   {
    "t": "Paste the data values into the text",
    "why": "Then the analysis can’t be rerun on updated data."
   },
   {
    "t": "Render to PDF instead of HTML",
    "why": "The format doesn’t change where R looks for the file."
   }
  ]
 },
 {
  "id": "t3u8-q44",
  "lesson": "t3u8-l5",
  "level": 3,
  "q": "Which statement about reproducible reports is accurate?",
  "options": [
   {
    "t": "Every number traces to code, but a mistake repeats exactly",
    "ok": true,
    "why": "Reproducibility makes errors findable and fixable; it doesn’t guarantee correctness."
   },
   {
    "t": "A reproducible report is guaranteed to give correct results",
    "why": "Wrong code gives the same wrong answer every time."
   },
   {
    "t": "Reproducible means new data will give the same results",
    "why": "That’s closer to replicable. Reproducible means same data + same code = same results."
   },
   {
    "t": "They need paid software",
    "why": "R, RStudio Desktop and Quarto are free and open source."
   }
  ]
 },
 {id:"t3u8-q46", lesson:"t3u8-l6", level:2, q:"Kenji’s AI-written code gives each group’s share of Yes answers as 0.25 and 0.25, on data where he knows half of each group said Yes. What is the most likely bug?", options:[
   {t:"`table()` silently dropped every No and Unsure answer", why:"table() counts every value it sees, so No and Unsure are still there. The shares are too small, which points to the wrong denominator."},
   {t:"`read.csv()` mixed up the group and answer columns", why:"Mixed-up columns would give odd labels, not neat quarters. The numbers are exactly half of the right ones: the whole-table total was used."},
   {t:"`prop.table()` divided by the whole table’s total", ok:true, why:"Without `margin = 1`, prop.table() divides every count by the grand total, so with two equal groups each share comes out at half its true value."},
   {t:"`prop.table()` rounds each share down to a quarter", why:"prop.table() doesn’t round. The values are exact; they’re just divided by the wrong total."}]},
 {id:"t3u8-q47", lesson:"t3u8-l6", level:1, q:"What does `mean(x, na.omit = TRUE)` return in R when x contains an NA?", options:[
   {t:"The mean of the values that aren’t missing", why:"That needs `na.rm = TRUE`. `na.omit` isn’t an argument of mean(), so it changes nothing."},
   {t:"An error saying na.omit is not an argument", why:"mean() passes unknown arguments to `...` without complaint, so there’s no error. That’s what makes it a silent failure."},
   {t:"NA: the unknown argument is ignored", ok:true, why:"R quietly ignores `na.omit = TRUE`, and one missing value makes the mean NA. The right argument is `na.rm = TRUE`."},
   {t:"Zero, because missing values count as 0", why:"R never treats NA as 0. A missing value makes the plain mean NA."}]},
 {id:"t3u8-q48", lesson:"t3u8-l6", level:3, q:"After an AI-written `merge(people, visits, by = \"id\")`, Lucía’s 50 people have become 140 rows, and 6 people are missing. What explains both?", options:[
   {t:"merge() sorts the rows and copies the last one", why:"merge() doesn’t copy rows at random. The extra rows come from people with several visits."},
   {t:"Repeated visits repeat people; no visits drops them", ok:true, why:"merge() gives one row per match, so someone with three visits appears three times, and by default (an inner join) people with no visits are left out. `all.x = TRUE` keeps them."},
   {t:"The id column was read as text, so ids were mixed up", why:"Text ids still match exactly when they’re written the same way. The row changes come from the join itself."},
   {t:"merge() adds NA rows for every missing match", why:"By default merge() drops unmatched people; only `all.x = TRUE` keeps them, with NAs. Neither explains the extra rows, which come from repeated visits."}]},
 {id:"t3u8-q49", lesson:"t3u8-l6", level:3, q:"An assistant translates `mean(d$score)` from R into pandas as `df[\"score\"].mean()`. The score column has one missing value. What changes?", options:[
   {t:"Nothing: both return NA until missing values are removed", why:"pandas’ mean() has `skipna=True` by default, so it skips the missing value and returns a number."},
   {t:"Nothing: both skip the missing value and average the rest", why:"R’s mean() doesn’t skip NAs unless you add `na.rm = TRUE`; it returns NA."},
   {t:"R returns NA; pandas skips the NA and returns a number", ok:true, why:"The defaults differ: R’s mean() returns NA, pandas skips missing values (`skipna=True`). A translation can change the result without any error."},
   {t:"pandas stops with an error that names the missing row", why:"pandas raises no error here; it quietly skips the missing value. That’s why you check with `df.isna().sum()`."}]},
 {id:"t3u8-q50", lesson:"t3u8-l6", level:2, q:"Fatima has quiz scores for the same 20 students before and after a workshop. An assistant runs `t.test(after, before)`. What should she change?", options:[
   {t:"Add `paired = TRUE`, because each pair is one student", ok:true, why:"Each before score and after score belong to the same student. A paired test looks at each student’s change, which the unpaired test ignores."},
   {t:"Nothing: R’s default t-test suits every comparison", why:"R’s default is a Welch test for two independent groups. These scores aren’t independent: they come in pairs."},
   {t:"Use `chisq.test()`, because these are quiz scores", why:"Chi-square tests compare counts in categories, not mean scores."},
   {t:"Add `var.equal = TRUE`, so the two groups are pooled", why:"That switches to the pooled two-sample test, which still treats the two columns as unrelated groups."}]},
 {id:"t3u8-q51", lesson:"t3u8-l6", level:2, q:"In 20 people per group, 6 versus 12 said Yes. An assistant runs `chisq.test()` on the percentages (30% and 60%) instead of the counts. Why is that wrong?", options:[
   {t:"It needs counts; percentages act like 100 people", ok:true, why:"Chi-square treats the numbers as counts, so 30 and 60 out of 100 look like five times as much data. Here p falls from about 0.11 to about 0.00004."},
   {t:"Chi-square tests compare means, not proportions", why:"Chi-square tests do compare counts in categories (and so proportions). The mistake is giving it percentages instead of counts."},
   {t:"The percentages should be rounded to whole tens first", why:"30% and 60% are already whole tens. Rounding doesn’t turn percentages into counts."},
   {t:"Nothing: the test gives the same p for both", why:"It doesn’t: p ≈ 0.11 from the counts and p ≈ 0.00004 from the percentages."}]},
 {id:"t3u8-q52", lesson:"t3u8-l6", level:1, q:"An AI summary reports p = 0.03. Which reading is correct?", options:[
   {t:"There is a 97% chance that the effect is real", why:"A p-value isn’t the probability that a hypothesis is true or false."},
   {t:"There’s a 3% chance the results are due to chance alone", why:"The ASA’s 2016 statement warns against exactly this reading. p assumes no effect; it doesn’t give the chance that chance alone was at work."},
   {t:"Data this extreme would be unusual if there were no effect", ok:true, why:"p is the probability of results at least this extreme if there were no real effect (and the model holds)."},
   {t:"The effect is large enough to matter in practice", why:"p doesn’t measure size or importance. Look at the effect and its confidence interval."}]},
 {id:"t3u8-q53", lesson:"t3u8-l6", level:3, q:"An assistant’s summary cites “Okafor & Lin (2021), *Journal of Data Habits* 14(2)” with a DOI. What’s the best check before Hana cites it?", options:[
   {t:"Ask the assistant to confirm that the paper is real", why:"A chatbot can confidently confirm a reference it invented. The check has to happen outside the tool."},
   {t:"Check that the reference follows APA style exactly", why:"Invented references are often perfectly formatted. Style says nothing about whether the paper exists."},
   {t:"Open it via the DOI or a library search and read it", ok:true, why:"Only the source itself shows that it exists and says what the summary claims."},
   {t:"Keep it if the journal and authors sound plausible", why:"Fabricated references are built to sound plausible. Look the source up and read it."}]},
 {id:"t3u8-q54", lesson:"t3u8-l6", level:3, q:"An AI-made bar chart of the mean score per group shows bars of 392 and 417, for a test scored out of 100. What happened?", options:[
   {t:"`geom_col()` stacked every row’s score into a total", ok:true, why:"geom_col() draws values as they are and stacks rows that share an x position, so each bar is six scores added up. Summarise to means first."},
   {t:"The axis was truncated, which makes the gap look far bigger", why:"A truncated axis changes how big the gap looks, not the values on the bars. Values of 392 and 417 are impossible as mean scores out of 100."},
   {t:"The color palette isn’t color-blind-safe", why:"Color can make a chart hard to read, but it can’t change bar heights."},
   {t:"R turned the scores into percentages", why:"Percentages of a score out of 100 would still be at most 100. These bars are totals."}]},
 {id:"t3u8-q55", lesson:"t3u8-l6", level:2, q:"Mei used an AI assistant to draft the R code in her report. Which record lets someone check her work a year later?", options:[
   {t:"Prompts, final tested code, versions and the date", ok:true, why:"The checked code is what reproduces the results; prompts, tool and software versions and the date show how it was made."},
   {t:"A screenshot of each chart and the final numbers", why:"Screenshots show results but not how they were made, so nobody can rerun or check the analysis."},
   {t:"The tool’s name, since asking again regenerates the code", why:"Asking again can give different code: outputs vary and models are updated. Keep the code itself."},
   {t:"Nothing: the same prompt always gives the same code", why:"The same prompt can give different answers each time, and models change over time."}]}
]
});
