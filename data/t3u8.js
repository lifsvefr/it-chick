/* Track 3 · Unit 8 · R for wrangling and charts */
ICA.addUnit({
  id:"t3u8", track:"t3", n:8, title:"R for wrangling and charts", icon:"🛠️",
  blurb:"Use the tidyverse to pick, change, group, summarise and reshape data with readable pipelines, draw clear charts with ggplot2, and turn the whole analysis into a report that rebuilds itself. Every idea comes with its base R twin, so you can practise in the Data Lab on any device.",
  goals:[
    "Install and load tidyverse packages, and choose where to run them: R on a computer, Posit Cloud, or base R in the Data Lab",
    "Pick rows and columns, sort, and add new columns with filter(), select(), arrange() and mutate(), and write the same steps in base R",
    "Chain steps into readable pipelines with |> and %>%, and know how the two pipes differ",
    "Summarise by group with group_by() + summarise() and count(), and reshape tables with pivot_longer() and pivot_wider()",
    "Build charts with ggplot2’s grammar (aesthetics, geoms, facets, labels, themes) and save them with ggsave()",
    "Outline a reproducible report in Quarto, where text, code and results stay in step"
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
   hook:{q:"On her laptop, Ana reads `survey.csv` and types `filter(survey, age >= 30)`. R replies: `object 'age' not found`, even though the file has an `age` column. What’s the most likely cause?", options:["The age column is spelt differently in the file","She hasn’t loaded dplyr, so R used a different, built-in filter() function","filter() only works on data typed in by hand","Column names must be in quotes: \"age\""], answer:1, reveal:"**She hasn’t loaded the package yet.** Base R already has a function called `filter()` (in the stats package, for smoothing time series) that knows nothing about columns. Until you run `library(dplyr)` or `library(tidyverse)`, R uses that one, and it can’t find `age`. This lesson starts with what packages are, how to install and load them, and then teaches dplyr’s first three verbs."},
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
        "**Functions are named like verbs**: `filter()`, `select()`, `arrange()`, `mutate()`, `summarise()`. You can often read code aloud as a sentence.",
        "**The data comes first**: the first argument of each function is a data frame, and the result is a new data frame. That’s what lets you chain steps together (Lesson 2)."
      ]},
      "Loading the `tidyverse` package attaches nine core packages at once. You’ll use four of them in this unit:",
      {table:[["Package","Its job"],["**readr**","Read files such as CSV (`read_csv()`)"],["**dplyr**","Pick, change, group and summarise data"],["**tidyr**","Reshape tables (`pivot_longer()`, `pivot_wider()`)"],["**ggplot2**","Draw charts with a grammar of layers"],["tibble, purrr, stringr, forcats, lubridate","Data frames, repeating tasks, text, categories, dates"]]},
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
      "Unit 7 showed three ways to run R. They differ in one way that matters for this unit: **only two of them can run the tidyverse**.",
      {table:[["Where","Tidyverse?","Good for"],["R + RStudio on your computer","Yes, after `install.packages()`","Regular work; Windows, macOS, Linux"],["Posit Cloud (RStudio in a web browser)","Yes, install it inside each project","Chromebooks, tablets, shared computers"],["This app’s **Data Lab** (webR)","No: base R only","Practising on any device, including phones"]]},
      "**[[posit-cloud|Posit Cloud]]** runs RStudio on Posit’s servers, so all you need is a browser and a free account. The free plan limits how much computing time you can use (counted in “compute hours”), and a project that’s idle (not running code) is suspended after about 15 minutes. Check posit.cloud’s plans page for the current limits before relying on it for a course. It works on a phone’s browser too, but the screen is cramped; a tablet with a keyboard or a Chromebook is much easier.",
      "The **Data Lab** runs real R (version 4.6) inside your browser, but it can’t install packages. So each code block in this unit is labelled:",
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
      {lab:"dl-r-subset", t:"Practise: pick the rows of people aged 30 or over with subset() or [ ]"}
    ]},
    {h:"select(): keep the columns you want", body:[
      "`filter()` works on rows; `select()` works on columns. List the columns to keep, or use a minus sign to drop one, or a colon for a range of neighbours:",
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
      {lab:"dl-r-fix", t:"Practise: fix two classic errors, a missing comma in d[rows, ] and a capital letter"}
    ]}
   ],
   try:[
    {id:"t3u8-l1-x1", type:"mcq", q:"Kenji installed the tidyverse on his laptop yesterday. Today he opens R again and `mutate(survey, x = 1)` gives `could not find function \"mutate\"`. What should he do?", options:[
      {t:"Run `library(tidyverse)` (or `library(dplyr)`) at the start of the session", ok:true, why:"Right. Installing puts the package on the computer once; loading makes its functions available in each new session. A restart forgets what was loaded."},
      {t:"Run `install.packages(\"tidyverse\")` again", why:"It’s already installed, so reinstalling doesn’t help: he’d still need `library()` afterwards. The missing step is loading, not installing."},
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
      {t:"R can’t tell whether a missing age is over 30, so the condition is NA, and brackets turn an NA condition into a row of NAs", ok:true, why:"Exactly. `filter()` and `subset()` treat NA as “don’t keep”; plain brackets don’t. `which(d$age > 30)` or `subset()` avoids the surprise."},
      {t:"The file is corrupted and needs to be read again", why:"Nothing is wrong with the file; this is how bracket subsetting treats missing values."},
      {t:"He forgot the comma inside the brackets", why:"The comma is there: `d[d$age > 30, ]`. Without it he’d get an error about columns, not an NA row."},
      {t:"`>` can’t be used with ages; he needs `>=`", why:"`>` works fine with numbers. The extra row comes from the missing value."}
    ]}
   ],
   apply:{intro:"Set up somewhere to run tidyverse code, then practise the base R versions in the Data Lab. If you only have a phone, do task 3 and read the others.", tasks:[
     {t:"Install R and the tidyverse (optional, on a computer)", how:{
       win:["Install R and RStudio Desktop if you haven’t yet (Unit 7 has the steps: R from **cran.r-project.org**, then RStudio Desktop from **posit.co**)","Open **RStudio**. In the **Console** pane, type `install.packages(\"tidyverse\")` and press [[kbd:Enter]]","Wait until the `>` prompt comes back (a few minutes), then type `library(tidyverse)`","Check you see “Attaching core tidyverse packages” with ticks, and the Conflicts list"],
       mac:["Install R (choose the installer for your Mac’s chip: Apple silicon or Intel) and RStudio Desktop, as in Unit 7","Open **RStudio**. In the **Console**, type `install.packages(\"tidyverse\")` and press [[kbd:Return]]","When the `>` prompt returns, type `library(tidyverse)`","Check for the list of attached packages and the Conflicts section"],
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
      "Two handy behaviours:",
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
      {fig:'<svg viewBox="0 0 340 374"><defs><marker id="u8a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="20" y="8" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="28" text-anchor="middle">survey</text><text class="s" x="170" y="45" text-anchor="middle">12 rows × 6 columns</text><path class="d-ink" d="M170 56 L170 88" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="77" text-anchor="start">|&gt;</text><text class="s" x="206" y="77" text-anchor="start">then</text><rect class="d-lup" x="20" y="92" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="112" text-anchor="middle">filter(group == "B")</text><text class="s" x="170" y="129" text-anchor="middle">6 rows × 6 columns</text><path class="d-ink" d="M170 140 L170 172" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="161" text-anchor="start">|&gt;</text><text class="s" x="206" y="161" text-anchor="start">then</text><rect class="d-lup" x="20" y="176" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="196" text-anchor="middle">select(id, hours, score)</text><text class="s" x="170" y="213" text-anchor="middle">6 rows × 3 columns</text><path class="d-ink" d="M170 224 L170 256" stroke-width="2" marker-end="url(#u8a2)"/><text x="186" y="245" text-anchor="start">|&gt;</text><text class="s" x="206" y="245" text-anchor="start">then</text><rect class="d-lup" x="20" y="260" width="300" height="46" rx="8" stroke-width="2"/><text x="170" y="280" text-anchor="middle">arrange(desc(score))</text><text class="s" x="170" y="297" text-anchor="middle">same 6 rows, highest first</text><text class="s" x="170" y="348" text-anchor="middle">Each |&gt; hands the result on as the first</text><text class="s" x="170" y="364" text-anchor="middle">argument of the next function.</text></svg>', alt:"Four boxes stacked vertically, joined by arrows labelled |> then: survey (12 rows by 6 columns), filter(group == \"B\") (6 rows by 6 columns), select(id, hours, score) (6 rows by 3 columns), arrange(desc(score)) (same 6 rows, highest first).", cap:"A pipeline: each step’s result becomes the first argument of the next step."}
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
      {lab:"dl-r-subset", t:"Practise: solve “Pick rows”, then try writing your answer as d |> subset(age >= 30)"}
    ]},
    {h:"The magrittr pipe %>%, and how they differ", body:[
      "Before R had its own pipe, the magrittr package (2014) introduced `%>%`. It’s loaded with the tidyverse, and you’ll meet it in older books, course notes and answers online. For everyday chains the two behave identically. The differences, in outline:",
      {table:[["","|> (native)","%>% (magrittr)"],["Needs a package?","No, R 4.1.0 or later","Yes: magrittr (comes with the tidyverse)"],["Brackets on the right","Required: `x |> sum()`","Optional: `x %>% sum` also works"],["Placeholder for a different argument","`_`, only as a named argument (R 4.2.0+), or to start an extraction such as `_$coef` (R 4.3.0+)","`.`, can go almost anywhere"],["Design","Simpler and slightly faster","More features, most rarely needed"]]},
      "The placeholder matters when the data isn’t the first argument. `lm()` (Unit 7 and Unit 6) expects a formula first and the data later:",
      {code:"survey %>% lm(score ~ hours, data = .)\nsurvey |> lm(score ~ hours, data = _)", lang:"r", label:"R · computer or Posit Cloud"},
      "Both fit the same straight line (slope 5.646 points per hour). With `|>`, the `_` must be given to a named argument such as `data = _`; plain `nrow(_)` is an error.",
      "Which should you use? *R for Data Science* (2nd edition) recommends `|>` for new code, because it’s always available and simpler. This unit follows that. Recognise `%>%` when you see it; mixing them in one script works, but pick one for consistency.",
      {tip:"In RStudio, [[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:M]] ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:M]] on a Mac) types a pipe. It types `%>%` unless you tick **Use native pipe operator, |>** in **Tools → Global Options → Code**."}
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
      {t:"They’re labelled “30 to 44”, because the first TRUE condition wins and 24 < 45", ok:true, why:"Right. case_when() checks conditions top to bottom and stops at the first TRUE. Put the narrower condition (`age < 30`) first."},
      {t:"They’re labelled “under 30”, because R picks the most specific condition", why:"R doesn’t judge which condition is more specific; it uses order. The first TRUE condition wins."},
      {t:"They get both labels", why:"Each row gets exactly one value: the one from the first matching condition."},
      {t:"They get “45 and over”, the default", why:"The default is only used when no condition is TRUE. Here `age < 45` is TRUE."}
    ]},
    {id:"t3u8-l2-x6", type:"spot", q:"Fatima’s pipeline (R with the tidyverse) should add hours per day and show the five highest. Tap the parts that are errors.", ask:"is an error", mono:true, parts:["survey |> ",{t:"mutate(hours_day = hours_year / 365, hours_year = hours * 52)", flag:true, why:"hours_day uses hours_year before it has been created. Inside mutate(), columns are made left to right: put hours_year first."}," |> ",{t:"arrange(desc(hours_day))", flag:false, why:"Correct: sorts largest first."}," |> ",{t:"head", flag:true, why:"The native pipe needs a function call: `head()`, or `head(5)`. A bare `head` is an error with |>."}]}
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
   hook:{q:"A wide table has 3 people and three week columns (week1, week2, week3) of distances walked. You make it long with one row per person per week. How many rows does the long table have?", options:["3","6","9","12"], answer:2, reveal:"**9 rows**: 3 people × 3 weeks. Every number in the week columns becomes its own row, labelled with whose it is and which week. Nothing is added or lost; the same 9 numbers are just arranged differently. This lesson first summarises data by group, then reshapes tables between wide and long."},
   goals:[
     "Collapse data to summaries with summarise(), and per group with group_by()",
     "Count categories with count(), and turn counts into shares",
     "Handle missing values in summaries and keep group sizes visible",
     "Do the same with tapply(), aggregate() and table() in base R",
     "Reshape tables with pivot_longer() and pivot_wider(), and know base R’s reshape()"
   ],
   learn:[
    {h:"summarise(): many rows into one", body:[
      {lead:"`summarise()` boils a whole column down to one number per result: a mean, a median, a count."},
      {code:"survey |>\n  summarise(n = n(), mean_score = mean(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 1 × 2\n      n mean_score\n  <int>      <dbl>\n1    12       67.4", lang:"txt", label:"What R prints"},
      "Each argument names a result and gives a summary function. `n()` counts rows; you can also use `median()`, `sd()`, `min()`, `max()` and others from Unit 5. (`summarize()` with a z is the same function.) One summary of everyone is useful, but the real power comes with groups."
    ]},
    {h:"group_by() + summarise(): split, apply, combine", body:[
      "[[group-by|group_by()]] marks rows as belonging to groups. On its own it changes nothing you can see except a label: printing a grouped tibble shows `# Groups:   group [2]`. But every verb after it works **group by group**:",
      {code:"survey |>\n  group_by(group) |>\n  summarise(\n    n = n(),\n    mean_score = mean(score),\n    median_hours = median(hours)\n  )", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 2 × 4\n  group     n mean_score median_hours\n  <chr> <int>      <dbl>        <dbl>\n1 A         6       65.3          3.5\n2 B         6       69.5          5.5", lang:"txt", label:"What R prints"},
      "This pattern is called **split–apply–combine**: split the rows into groups, apply a summary to each, and combine the answers into a new table with one row per group. It’s what a spreadsheet [[pivot-table]] does too.",
      {fig:'<svg viewBox="0 0 340 380"><defs><marker id="u8a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><text x="170" y="18" text-anchor="middle">1. Start: 12 rows, groups mixed</text><rect class="d-lup" x="14" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="26" y="42" text-anchor="middle">A</text><text class="s" x="26" y="57" text-anchor="middle">61</text><rect class="d-lup" x="40" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="52" y="42" text-anchor="middle">A</text><text class="s" x="52" y="57" text-anchor="middle">70</text><rect class="d-gold" x="66" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="78" y="42" text-anchor="middle">B</text><text class="s" x="78" y="57" text-anchor="middle">55</text><rect class="d-gold" x="92" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="104" y="42" text-anchor="middle">B</text><text class="s" x="104" y="57" text-anchor="middle">78</text><rect class="d-lup" x="118" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="130" y="42" text-anchor="middle">A</text><text class="s" x="130" y="57" text-anchor="middle">66</text><rect class="d-gold" x="144" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="156" y="42" text-anchor="middle">B</text><text class="s" x="156" y="57" text-anchor="middle">49</text><rect class="d-lup" x="170" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="182" y="42" text-anchor="middle">A</text><text class="s" x="182" y="57" text-anchor="middle">83</text><rect class="d-gold" x="196" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="208" y="42" text-anchor="middle">B</text><text class="s" x="208" y="57" text-anchor="middle">72</text><rect class="d-lup" x="222" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="234" y="42" text-anchor="middle">A</text><text class="s" x="234" y="57" text-anchor="middle">60</text><rect class="d-gold" x="248" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="260" y="42" text-anchor="middle">B</text><text class="s" x="260" y="57" text-anchor="middle">88</text><rect class="d-lup" x="274" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="286" y="42" text-anchor="middle">A</text><text class="s" x="286" y="57" text-anchor="middle">52</text><rect class="d-gold" x="300" y="28" width="24" height="34" rx="3" stroke-width="1"/><text class="s" x="312" y="42" text-anchor="middle">B</text><text class="s" x="312" y="57" text-anchor="middle">75</text><path class="d-ink" d="M170 68 L170 92" stroke-width="2" marker-end="url(#u8a3)"/><text class="s" x="178" y="84" text-anchor="start">group_by(group)</text><text x="170" y="110" text-anchor="middle">2. Split into groups</text><rect class="d-lup" x="14" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="25.5" y="138" text-anchor="middle">61</text><rect class="d-lup" x="39" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="50.5" y="138" text-anchor="middle">70</text><rect class="d-lup" x="64" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="75.5" y="138" text-anchor="middle">66</text><rect class="d-lup" x="89" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="100.5" y="138" text-anchor="middle">83</text><rect class="d-lup" x="114" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="125.5" y="138" text-anchor="middle">60</text><rect class="d-lup" x="139" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="150.5" y="138" text-anchor="middle">52</text><text class="s" x="88" y="162" text-anchor="middle">group A</text><rect class="d-gold" x="180" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="191.5" y="138" text-anchor="middle">55</text><rect class="d-gold" x="205" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="216.5" y="138" text-anchor="middle">78</text><rect class="d-gold" x="230" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="241.5" y="138" text-anchor="middle">49</text><rect class="d-gold" x="255" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="266.5" y="138" text-anchor="middle">72</text><rect class="d-gold" x="280" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="291.5" y="138" text-anchor="middle">88</text><rect class="d-gold" x="305" y="120" width="23" height="26" rx="3" stroke-width="1"/><text class="s" x="316.5" y="138" text-anchor="middle">75</text><text class="s" x="254" y="162" text-anchor="middle">group B</text><path class="d-ink" d="M88 168 L88 196" stroke-width="2" marker-end="url(#u8a3)"/><path class="d-ink" d="M254 168 L254 196" stroke-width="2" marker-end="url(#u8a3)"/><text class="s" x="170" y="186" text-anchor="middle">mean(score)</text><text x="170" y="214" text-anchor="middle">3. Apply a summary to each group</text><rect class="d-lup" x="44" y="222" width="90" height="28" rx="6" stroke-width="1.5"/><text x="89" y="241" text-anchor="middle">65.3</text><rect class="d-gold" x="210" y="222" width="90" height="28" rx="6" stroke-width="1.5"/><text x="255" y="241" text-anchor="middle">69.5</text><path class="d-ink" d="M89 254 L150 284" stroke-width="2" marker-end="url(#u8a3)"/><path class="d-ink" d="M255 254 L192 284" stroke-width="2" marker-end="url(#u8a3)"/><text x="170" y="304" text-anchor="middle">4. Combine: one row per group</text><rect class="d-panel" x="95" y="312" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="327" text-anchor="middle">group</text><rect class="d-panel" x="170" y="312" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="327" text-anchor="middle">mean_score</text><rect class="d-panel" x="95" y="332" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="347" text-anchor="middle">A</text><rect class="d-panel" x="170" y="332" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="347" text-anchor="middle">65.3</text><rect class="d-panel" x="95" y="352" width="75" height="20" stroke-width="1"/><text class="s" x="132.5" y="367" text-anchor="middle">B</text><rect class="d-panel" x="170" y="352" width="75" height="20" stroke-width="1"/><text class="s" x="207.5" y="367" text-anchor="middle">69.5</text></svg>', alt:"Twelve scores in mixed groups A and B are split into group A (61, 70, 66, 83, 60, 52) and group B (55, 78, 49, 72, 88, 75). The mean of each is 65.3 and 69.5, combined into a two-row table of group and mean_score.", cap:"Split–apply–combine with group_by(group) and summarise(mean_score = mean(score))."},
      {tip:"Always include `n = n()` in a grouped summary. A group mean of 80 means a lot more from 200 people than from 2. *R for Data Science* gives a whole case study to this: small groups produce the most extreme averages."},
      "Grouping by two columns gives one row per combination. dplyr then drops the **last** grouping level and tells you so:",
      {code:"survey |>\n  group_by(group, answer) |>\n  summarise(mean_score = mean(score))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"`summarise()` has regrouped the output.\nℹ Summaries were computed grouped by group and answer.\nℹ Output is grouped by group.\nℹ Use `summarise(.groups = \"drop_last\")` to silence this message.\nℹ Use `summarise(.by = c(group, answer))` for per-operation grouping\n  (`?dplyr::dplyr_by`) instead.", lang:"txt", label:"What R prints (message, dplyr 1.2 or later)"},
      "Older versions (dplyr 1.1 and earlier) say the same thing more briefly: “`summarise()` has grouped output by 'group'. You can override using the `.groups` argument.”",
      "The result (6 rows) is still grouped by `group`, so any later verb would work within groups. Add `|> ungroup()` when you’re done, or skip grouping by using the `.by` argument for a one-off grouped summary, which never leaves groups behind: `summarise(survey, mean_score = mean(score), .by = group)`.",
      "Grouping works with `mutate()` too. Then the summary is computed per group but every row is kept: `survey |> group_by(group) |> mutate(vs_group = score - mean(score)) |> ungroup()` shows how far each person is above or below their own group’s mean (person 1: 61 − 65.3 = −4.33)."
    ]},
    {h:"count(), shares and missing values", body:[
      "Counting is so common that dplyr has a shortcut: `count(x)` is `group_by(x) |> summarise(n = n())`.",
      {code:"survey |> count(answer)\nsurvey |> count(answer, sort = TRUE)\nsurvey |> count(group, answer)", lang:"r", label:"R · computer or Posit Cloud"},
      "The first gives No 4, Unsure 2, Yes 6 (alphabetical order); `sort = TRUE` puts the biggest first; two columns count every combination (6 rows here). Turn counts into **shares** by dividing by the total:",
      {code:"survey |>\n  count(answer) |>\n  mutate(share = n / sum(n))", lang:"r", label:"R · computer or Posit Cloud"},
      {code:"# A tibble: 3 × 3\n  answer     n share\n  <chr>  <int> <dbl>\n1 No         4 0.333\n2 Unsure     2 0.167\n3 Yes        6 0.5  ", lang:"txt", label:"What R prints"},
      "**Missing values** spread through summaries. If any score is `NA`, `mean(score)` is NA, because R won’t guess the missing number:",
      {code:"x <- c(61, NA, 70)\nmean(x)\nmean(x, na.rm = TRUE)", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"[1] NA\n[1] 65.5", lang:"txt", label:"What R prints"},
      "`na.rm = TRUE` (“remove NAs”) computes the mean of the values you have. That’s often right, but say so in your write-up, and remember `n()` still counts the rows with missing scores. `sum(!is.na(score))` counts the values actually used. Unit 2 covers why values go missing and how to record them ([[na-value|NA]])."
    ]},
    {h:"The base R way to summarise", body:[
      {code:"tapply(d$score, d$group, mean)\naggregate(score ~ group, data = d, FUN = mean)\naggregate(cbind(score, hours) ~ group, data = d, FUN = mean)\ntable(d$answer)\nprop.table(table(d$answer))", lang:"r", label:"R · base R, runs in the Data Lab"},
      {code:"       A        B \n65.33333 69.50000 \n  group    score\n1     A 65.33333\n2     B 69.50000\n  group    score    hours\n1     A 65.33333 4.000000\n2     B 69.50000 4.666667\n\n    No Unsure    Yes \n     4      2      6 \n\n       No    Unsure       Yes \n0.3333333 0.1666667 0.5000000 ", lang:"txt", label:"What R prints"},
      {table:[["Job","dplyr","Base R"],["Mean per group","`group_by(g) |> summarise(m = mean(x))`","`tapply(d$x, d$g, mean)` or `aggregate(x ~ g, data = d, FUN = mean)`"],["Count each category","`count(answer)`","`table(d$answer)`"],["Shares","`mutate(share = n / sum(n))`","`prop.table(table(d$answer))`"],["Per-row group mean","`group_by(g) |> mutate(m = mean(x))`","`ave(d$x, d$g)`"]]},
      "The base results come in different shapes: `tapply()` and `table()` return labelled lists of numbers (strictly, arrays; handy to print), while `aggregate()` returns a data frame (handy to keep working with). dplyr always returns a tibble, which is one reason long pipelines are easier there.",
      {lab:"dl-r-groups", t:"Practise: the mean score for each group with tapply() or aggregate()"},
      {lab:"dl-r-table", t:"Practise: count the answers with table() and work out the share of Yes"}
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
      "Once data is long, the other verbs just work: `long |> group_by(name) |> summarise(total_km = sum(km))` gives Amara 36, Kenji 28, Lucía 45."
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
    {id:"t3u8-l3-x1", type:"number", q:"Group B’s scores are 55, 78, 49, 72, 88 and 75. What is `mean_score` for B in `survey |> group_by(group) |> summarise(mean_score = mean(score))`?", answer:69.5, tol:0.05, unit:"points", why:"55 + 78 + 49 + 72 + 88 + 75 = 417, and 417 ÷ 6 = 69.5. group_by() makes summarise() compute this separately for each group.", wrongs:[{v:67.4, tol:0.1, why:"67.4 is the mean of all 12 people, as if group_by() were missing."},{v:73.5, tol:0.05, why:"73.5 is the median of group B (the middle of 72 and 75). The code asks for mean()."},{v:417, tol:0, why:"That’s the total. The mean divides by the 6 people."}]},
    {id:"t3u8-l3-x2", type:"match", q:"Match each question to the code that answers it.", pairs:[
      ["How many people gave each answer?","`count(survey, answer)`","count() is group_by() + summarise(n = n()) in one step."],
      ["What’s the mean score of everyone?","`summarise(survey, m = mean(score))`","No grouping, so one row for the whole table."],
      ["What’s the mean score in each group?","`survey |> group_by(group) |> summarise(m = mean(score))`","Grouping first gives one row per group."],
      ["How far is each person from their group’s mean?","`survey |> group_by(group) |> mutate(d = score - mean(score))`","A grouped mutate() keeps every row and uses each group’s own mean."]
    ]},
    {id:"t3u8-l3-x3", type:"mcq", q:"Hana groups by `group` and `answer` (2 groups × 3 answers, every combination present) and summarises the mean score. How many rows, and how is the result grouped?", options:[
      {t:"6 rows, still grouped by `group`", ok:true, why:"One row per combination (2 × 3 = 6). summarise() peels off the last grouping level (answer) and keeps the rest, which is what its message says. Use ungroup() or .groups to change that."},
      {t:"6 rows, no grouping left", why:"summarise() drops only the last grouping level by default; the result is still grouped by group."},
      {t:"2 rows, one per group", why:"With two grouping columns you get one row per combination of both."},
      {t:"12 rows, one per person", why:"That would be a grouped mutate(). summarise() collapses each group to one row."}
    ]},
    {id:"t3u8-l3-x4", type:"mcq", q:"Dmitri’s summary says the mean score is `NA`. He checks: one person’s score is missing. What’s the best next step?", options:[
      {t:"Use `mean(score, na.rm = TRUE)` and report how many values the mean is based on", ok:true, why:"na.rm = TRUE averages the values you have; reporting the count (for example with `sum(!is.na(score))`) keeps readers informed that one value is missing."},
      {t:"Replace the missing score with 0 and recompute", why:"0 is a real score, not “unknown”. It would pull the mean down and misrepresent that person."},
      {t:"Delete the whole column", why:"That throws away 11 good scores to hide one missing one."},
      {t:"Nothing: an NA mean means the scores average to zero", why:"NA means R can’t compute the answer because a value is unknown. It doesn’t mean zero."}
    ]},
    {id:"t3u8-l3-x5", type:"sort", q:"Each call is run on a 3-person, 3-week table. Does it make the table **longer** (more rows) or **wider** (more columns)?", buckets:["Longer","Wider"], items:[
      {t:"`pivot_longer(walks, week1:week3, names_to = \"week\", values_to = \"km\")`", b:0, why:"Stacks 3 columns into rows: 3 rows become 9."},
      {t:"`pivot_wider(long, names_from = week, values_from = km)`", b:1, why:"Spreads the week values into columns: 9 rows become 3."},
      {t:"`count(survey, group, answer) |> pivot_wider(names_from = answer, values_from = n)`", b:1, why:"Each answer becomes a column: a cross-table."},
      {t:"`reshape(walks, direction = \"long\", …)`", b:0, why:"Base R’s reshape with direction = \"long\" stacks columns into rows."}
    ]},
    {id:"t3u8-l3-x6", type:"number", q:"A wide table records 5 bus routes (rows), with a `route` column and 7 columns of passenger counts, one per day of the week. After `pivot_longer()` on the 7 day columns, how many rows does it have?", answer:35, tol:0, unit:"rows", why:"Each route contributes one row per stacked column: 5 routes × 7 days = 35 rows (with columns route, day and passengers).", wrongs:[{v:12, tol:0, why:"That adds 5 + 7. Each of the 5 rows is repeated 7 times, so multiply."},{v:40, tol:0, why:"That counts 8 columns per route (including route itself). Only the 7 day columns are stacked."},{v:7, tol:0, why:"That’s the number of day columns. Each one becomes a row for every route."}]}
   ],
   apply:{intro:"Summarise and reshape the survey. Use the Data Lab for base R; the tidyverse parts need a computer or Posit Cloud.", tasks:[
     {t:"Compare groups in base R (Data Lab, any device)", how:["Solve the Data Lab’s **Compare groups** and **Count answers** challenges","In the same editor, press **Run** on `aggregate(cbind(score, hours) ~ group, data = d, FUN = mean)` and `table(d$group, d$answer)`","Write one sentence comparing A and B, including how many people are in each group"]},
     {t:"Do it with dplyr (computer or Posit Cloud)", how:["Run `survey |> group_by(group) |> summarise(n = n(), mean_score = mean(score), mean_hours = mean(hours))`","Run `survey |> count(group, answer) |> pivot_wider(names_from = answer, values_from = n, values_fill = 0)`","Check both against your base R results"]},
     {t:"Reshape a table of your own", how:["Write down a small wide table from your life (3–4 rows, 3 measurement columns: weekly spending, monthly bills, practice minutes…)","Type it in as a tibble and make it long with pivot_longer(); predict the number of rows first","Summarise the long table by row with group_by() + summarise()"]}
   ], proof:"Your group comparison sentence (with group sizes), plus the predicted and actual row count of your own long table."},
   read:[{book:"r4ds", where:"Chapter 3, “Data transformation”: Section 3.5 “Groups” and Section 3.6 “Case study: aggregates and sample size”"},{book:"r4ds", where:"Chapter 5, “Data tidying”: Sections 5.2 “Tidy data”, 5.3 “Lengthening data” and 5.4 “Widening data”"},{book:"dcss", where:"R for Social Scientists: “Data Wrangling with dplyr” (section “Split-apply-combine data analysis and the summarize() function”) and “Data Wrangling with tidyr”"}]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t3u8-l4", title:"The grammar of ggplot2", minutes:55,
   hook:{q:"In R, this code runs without an error: `ggplot(survey, aes(x = hours, y = score, colour = \"blue\")) + geom_point()`. What colour are the points?", options:["Blue","A reddish pink, with a legend that says “blue”","Black","Every point a different colour"], answer:1, reveal:"**Reddish pink, with a legend labelled “blue”.** Anything inside `aes()` is treated as data to be *mapped*: ggplot2 sees a column whose every value is the word \"blue\", gives that one category its first default colour (a salmon pink), and adds a legend for it. To simply *set* a colour, put it outside `aes()`: `geom_point(colour = \"blue\")`. This lesson explains that difference and the rest of ggplot2’s grammar."},
   goals:[
     "Describe a chart as data + aesthetic mappings + geoms, the grammar behind ggplot2",
     "Build scatterplots, histograms, boxplots, bar charts and line charts",
     "Tell mapping (inside aes()) from setting (outside), and use more than colour to show groups",
     "Split a chart into small multiples with facet_wrap()",
     "Fix the two most common ggplot2 errors, and draw the same charts in base R"
   ],
   learn:[
    {h:"A grammar for charts", body:[
      {lead:"Most chart tools ask “which chart type?”. ggplot2 asks “which data, shown how?”, and builds the chart from parts."},
      "[[ggplot2]] is based on the **grammar of graphics**: the idea that every chart is made of the same components, as every sentence is made of nouns and verbs. The ones you need first:",
      {list:[
        "**Data**: a tidy data frame.",
        "**[[aesthetic-mapping|Aesthetic mappings]]**: which column drives which visual property: x position, y position, colour, shape, size.",
        "**[[geom|Geoms]]**: the marks that draw the data: points, bars, lines, boxes.",
        "Optional extras: **facets** (small multiples), **scales** (how values become colours or axis ticks), **labels** and a **theme**."
      ]},
      "You add them together with `+`, one layer at a time. Because the parts are independent, swapping `geom_point()` for `geom_line()` changes the chart type without touching anything else. That’s also why ggplot2 wants **long** data (Lesson 3): each aesthetic needs one column to map.",
      {fig:'<svg viewBox="0 0 340 498"><defs><marker id="u8a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-gold" x="14" y="8" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="28" text-anchor="start">Data</text><text class="s" x="26" y="46" text-anchor="start">ggplot(survey, …)</text><text x="170" y="74" text-anchor="middle">+</text><rect class="d-lup" x="14" y="80" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="100" text-anchor="start">Aesthetic mappings</text><text class="s" x="26" y="118" text-anchor="start">aes(x = hours, y = score, colour = group)</text><text x="170" y="146" text-anchor="middle">+</text><rect class="d-sage" x="14" y="152" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="172" text-anchor="start">Geom: the marks</text><text class="s" x="26" y="190" text-anchor="start">geom_point()</text><text x="170" y="218" text-anchor="middle">+</text><rect class="d-rose" x="14" y="224" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="244" text-anchor="start">Facets (optional)</text><text class="s" x="26" y="262" text-anchor="start">facet_wrap(~ group)</text><text x="170" y="290" text-anchor="middle">+</text><rect class="d-panel" x="14" y="296" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="316" text-anchor="start">Labels, scales, theme</text><text class="s" x="26" y="334" text-anchor="start">labs(…) + theme_minimal()</text><text class="s" x="170" y="372" text-anchor="middle">Result: one chart, built layer by layer</text><path class="d-ink" d="M40 382 L40 472 L300 472" stroke-width="1.5"/><circle class="d-lup" cx="130" cy="441.6" r="5" stroke-width="2"/><circle class="d-lup" cx="190" cy="424.5" r="5" stroke-width="2"/><rect class="d-gold" x="95.5" y="448.5" width="9" height="9" stroke-width="2"/><rect class="d-gold" x="215.5" y="404.8" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="160" cy="432.1" r="5" stroke-width="2"/><rect class="d-gold" x="65.5" y="459.9" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="250" cy="399.8" r="5" stroke-width="2"/><rect class="d-gold" x="185.5" y="416.2" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="130" cy="443.5" r="5" stroke-width="2"/><rect class="d-gold" x="275.5" y="385.8" width="9" height="9" stroke-width="2"/><circle class="d-lup" cx="100" cy="458.7" r="5" stroke-width="2"/><rect class="d-gold" x="215.5" y="410.5" width="9" height="9" stroke-width="2"/><text class="s" x="170" y="488" text-anchor="middle">hours →</text><text class="s" x="36" y="390" text-anchor="end">score</text><circle class="d-lup" cx="250" cy="484" r="5" stroke-width="2"/><text class="s" x="260" y="488" text-anchor="start">A</text><rect class="d-gold" x="281.5" y="479.5" width="9" height="9" stroke-width="2"/><text class="s" x="296" y="488" text-anchor="start">B</text></svg>', alt:"Five stacked layers joined by plus signs: Data ggplot(survey); Aesthetic mappings aes(x = hours, y = score, colour = group); Geom geom_point(); Facets facet_wrap(~ group), optional; Labels, scales, theme. Below, a small scatterplot of score against hours with circles for group A and squares for group B.", cap:"A ggplot2 chart is built from layers added with +."}
    ]},
    {h:"Your first ggplot", body:[
      {code:"ggplot(survey, aes(x = hours, y = score)) +\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      "Read it in two parts. `ggplot(survey, aes(x = hours, y = score))` sets up the data and the mappings: an empty canvas with hours along the bottom and score up the side. `+ geom_point()` adds a layer of points, one per row. The result is a [[scatterplot]] where scores clearly rise with study hours.",
      "Now map a third column. Adding `colour = group` inside `aes()` colours points by group and adds a legend automatically. Mapping **shape** too means the groups stay distinguishable in greyscale and for people with colour vision deficiency (Unit 4’s advice: never rely on colour alone):",
      {code:"ggplot(survey,\n  aes(x = hours, y = score, colour = group, shape = group)) +\n  geom_point(size = 3)", lang:"r", label:"R · computer or Posit Cloud"},
      "A second geom adds a second layer on the same mappings. `geom_smooth(method = \"lm\")` draws the straight line of best fit with a grey band showing its uncertainty; R also prints a short message saying which formula it used (`y ~ x`, a straight line):",
      {code:"ggplot(survey, aes(x = hours, y = score)) +\n  geom_point() +\n  geom_smooth(method = \"lm\")", lang:"r", label:"R · computer or Posit Cloud"}
    ]},
    {h:"Mapping or setting?", body:[
      "This is the single most important distinction in ggplot2, and the trick behind the warm-up:",
      {table:[["","Mapping","Setting"],["Where","Inside `aes()`","Outside `aes()`, in the geom"],["Value comes from","A column of the data","A fixed value you type"],["Example","`aes(colour = group)`","`geom_point(colour = \"steelblue\")`"],["Legend?","Yes, explains the mapping","No, nothing to explain"]]},
      {code:"# mapping: colour comes from the data\nggplot(survey, aes(x = hours, y = score)) +\n  geom_point(aes(colour = group))\n\n# setting: every point is the same colour\nggplot(survey, aes(x = hours, y = score)) +\n  geom_point(colour = \"steelblue\", size = 3)", lang:"r", label:"R · computer or Posit Cloud"},
      "The first chart’s colours change with group. The second chart’s points are all steel blue and size 3. Put `colour = \"blue\"` inside `aes()` instead, and ggplot2 treats \"blue\" as a data value, picks its first default colour for it and adds a pointless legend.",
      "Common aesthetics: `x`, `y`, `colour` (outline or point colour), `fill` (inside of bars and boxes), `shape`, `size`, `linewidth` (thickness of lines) and `alpha` (transparency from 0 to 1, useful when points overlap)."
    ]},
    {h:"Choosing a geom for the question", body:[
      "Unit 4 matched questions to chart types. Here are the ggplot2 geoms for them:",
      {table:[["Question","Geom","Mappings"],["How is one number spread out?","`geom_histogram()`","x only"],["How do groups compare?","`geom_boxplot()`","x = group, y = number"],["How many in each category?","`geom_bar()`","x only (it counts rows)"],["Already have the counts?","`geom_col()`","x = category, y = count"],["Do two numbers move together?","`geom_point()`","x and y"],["How does it change over time?","`geom_line()`","x = time, y = value"]]},
      {code:"ggplot(survey, aes(x = hours)) +\n  geom_histogram(binwidth = 2)\n\nggplot(survey, aes(x = group, y = score)) +\n  geom_boxplot()\n\nggplot(survey, aes(x = answer)) +\n  geom_bar()", lang:"r", label:"R · computer or Posit Cloud"},
      "`geom_histogram()` draws a [[histogram-chart|histogram]], sorting values into bins; always choose `binwidth` yourself, since the default (30 bins) rarely suits your data and the shape can change with it ([[bin-width]], Unit 5). `geom_boxplot()` draws the median, quartiles and outliers ([[boxplot]]). `geom_bar()` counts rows for you: the Yes bar is 6 high, No 4, Unsure 2.",
      "If you’ve already counted, use `geom_col()`, which draws the y values you give it:",
      {code:"answers <- count(survey, answer)\nggplot(answers, aes(x = answer, y = n)) +\n  geom_col()", lang:"r", label:"R · computer or Posit Cloud"},
      "Lines need long data with a time column. Using the walking club from Lesson 3, with `week` as a number:",
      {code:"library(tidyverse)\nwalks <- tibble(\n  name  = c(\"Amara\", \"Kenji\", \"Lucía\"),\n  week1 = c(12, 8, 15),\n  week2 = c(10, 11, 14),\n  week3 = c(14, 9, 16)\n)\nlong <- walks |>\n  pivot_longer(starts_with(\"week\"), names_to = \"week\",\n    names_prefix = \"week\", names_transform = as.integer,\n    values_to = \"km\")\nggplot(long, aes(x = week, y = km, colour = name)) +\n  geom_line(linewidth = 1) +\n  geom_point()", lang:"r", label:"R · computer or Posit Cloud"},
      "Mapping `colour = name` also tells ggplot2 to draw one line per person. Without a grouping it would try to join all nine points into one zig-zag."
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
      "`plot()` makes a scatterplot, `hist()` a histogram, `boxplot(score ~ group)` one box per group, and `barplot(table(…))` a bar chart of counts. Colouring by group means building the colours and the legend yourself:",
      {code:"plot(score ~ hours, data = d, pch = 19,\n  col = ifelse(d$group == \"A\", \"darkorange\", \"steelblue\"))\nlegend(\"topleft\", legend = c(\"A\", \"B\"), pch = 19,\n  col = c(\"darkorange\", \"steelblue\"))", lang:"r", label:"R · base R, runs in the Data Lab"},
      "That manual work is the main reason people move to ggplot2: the mapping, legend and facets come from the grammar. Unit 7 covers base plots in more detail ({{base-plots-r}}).",
      {lab:"dl-r-hist", t:"Practise: a histogram of hours with a title and axis label, in base R"},
      {lab:"dl-r-cor", t:"Practise: plot(d$hours, d$score), then measure the pattern with cor()"}
    ]}
   ],
   try:[
    {id:"t3u8-l4-x1", type:"sort", q:"For each instruction, does the code go inside `aes()` (mapping) or outside it, in the geom (setting)?", buckets:["Inside aes()","Outside aes()"], items:[
      {t:"Colour each point by its group", b:0, why:"The colour depends on a column, so it’s a mapping."},
      {t:"Make every point size 3", b:1, why:"A fixed value for all points is a setting: `geom_point(size = 3)`."},
      {t:"Put hours on the x-axis", b:0, why:"Position comes from a column: `aes(x = hours)`."},
      {t:"Make all bars grey", b:1, why:"One colour for everything: `geom_bar(fill = \"grey\")`."},
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
    {id:"t3u8-l4-x4", type:"spot", q:"Oluwaseun’s chart code gives an error. Tap the parts that are wrong.", ask:"is wrong", mono:true, parts:["survey |> ",{t:"ggplot(aes(x = hours, y = score))", flag:false, why:"Piping data into ggplot() is fine; the data becomes its first argument."},{t:" |> ", flag:true, why:"Between layers ggplot2 needs `+`, not a pipe. R even suggests this in its error message."},{t:"geom_point(colour = \"darkgreen\")", flag:false, why:"Setting one colour outside aes() is correct."},{t:" + ", flag:false, why:"Correct: + joins layers."},{t:"facet_wrap(~ group)", flag:false, why:"Correct: one panel per group."}]},
    {id:"t3u8-l4-x5", type:"mcq", q:"Lucía has a table `answers` with columns `answer` and `n` (already counted). Which code draws a bar chart of those counts?", options:[
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_col()`", ok:true, why:"geom_col() draws the y values it’s given, which are her counts."},
      {t:"`ggplot(answers, aes(x = answer)) + geom_bar()`", why:"geom_bar() counts rows. Each answer has one row in `answers`, so every bar would be 1 high."},
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_histogram()`", why:"Histograms bin a numeric x; they’re for distributions, not counts of categories."},
      {t:"`ggplot(answers, aes(x = answer, y = n)) + geom_line()`", why:"A line joins points in order, suggesting change over time, which categories don’t have."}
    ]},
    {id:"t3u8-l4-x6", type:"mcq", q:"Ana wants separate panels for groups A and B, with the same axes so they’re easy to compare. Which layer does that?", options:[
      {t:"`facet_wrap(~ group)`", ok:true, why:"Facets split the chart into small multiples, one per group, sharing scales by default."},
      {t:"`aes(colour = group)`", why:"That colours the groups within a single panel; it doesn’t split the chart."},
      {t:"`geom_boxplot()`", why:"A boxplot compares groups in one panel; it doesn’t make panels, and it summarises rather than showing points."},
      {t:"`group_by(group)`", why:"group_by() is dplyr; it affects later dplyr verbs, not the chart layout."}
    ]}
   ],
   apply:{intro:"Draw the same charts twice: base R in the Data Lab, and ggplot2 on a computer or Posit Cloud.", tasks:[
     {t:"Base R charts (Data Lab, any device)", how:["Solve the **A histogram** challenge","In any survey.csv challenge, press **Run** on `boxplot(score ~ group, data = d)` and `barplot(table(d$answer))`","Note what each chart suggests in one sentence"]},
     {t:"ggplot2 charts (computer or Posit Cloud)", how:["Make the scatterplot of score against hours, coloured and shaped by group","Add `geom_smooth(method = \"lm\")`, then try `facet_wrap(~ group)` instead of colour","Make a histogram with binwidth 1, then 3: does the story change?"]},
     {t:"Break it on purpose", how:["Put `colour = \"blue\"` inside aes() and look at the legend","Move a `+` to the start of a line and read the error","Fix both, and write down what each error taught you"]}
   ], proof:"Your base R histogram (passed in the Data Lab) and, if you have a computer, a ggplot2 scatterplot coloured by group, with one sentence about what it shows."},
   read:[{book:"r4ds", where:"Chapter 1, “Data visualization”: Sections 1.2 “First steps” to 1.5 “Visualizing relationships”"},{book:"r4ds", where:"Chapter 9, “Layers”: Sections 9.2 “Aesthetic mappings”, 9.3 “Geometric objects” and 9.4 “Facets”"},{book:"dcss", where:"R for Social Scientists: “Data Visualisation with ggplot2” (sections “Plotting with ggplot2” to “Faceting”)"}]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t3u8-l5", title:"Polished charts and reproducible reports", minutes:55,
   hook:{q:"Sione’s report quotes a mean score of 67.4, typed in by hand, along with a pasted chart. Then two late survey responses arrive. With a Quarto report, what does updating the numbers and chart take?", options:["Retyping every number and re-pasting every chart","Rendering the report again: the code recomputes every number and redraws every chart","Nothing: Quarto watches the file and edits the old PDF","Rewriting the analysis code from scratch"], answer:1, reveal:"**Render again.** In a Quarto report the numbers and charts aren’t pasted; they’re produced by code inside the document each time it is rendered. New data in, render, and every figure updates, with no copying mistakes. This lesson first polishes charts (labels, colours, themes, saving), then outlines how a Quarto report works."},
   goals:[
     "Give a chart a title that states the point, clear axis labels, a source caption and alt text with labs()",
     "Choose colour-blind-safe scales and adjust a theme",
     "Save a chart at a chosen size and resolution with ggsave()",
     "Describe the parts of a Quarto document: YAML header, text, code chunks, chunk options and inline code",
     "Explain what makes an analysis reproducible, and what a Quarto render does"
   ],
   learn:[
    {h:"Labels that say the point", body:[
      {lead:"A chart that’s correct but unlabelled makes readers do the work. labs() does most of the polishing in one place."},
      {code:"p <- ggplot(survey,\n  aes(x = hours, y = score, colour = group)) +\n  geom_point(size = 3) +\n  labs(\n    title = \"More study, higher scores\",\n    subtitle = \"12 people, invented survey data\",\n    x = \"Hours of study per week\",\n    y = \"Test score\",\n    colour = \"Group\",\n    caption = \"Data: survey.csv (invented)\",\n    alt = \"Scatterplot: score rises with study hours\"\n  )\np", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "`title` states the finding (“More study, higher scores”), not just the topic, as Unit 4 recommends ({{annotation-charts|annotation and titles}}).",
        "`subtitle` gives context: who, how many, when.",
        "`x` and `y` replace column names with words and units.",
        "`colour = \"Group\"` renames the legend: each mapped aesthetic gets its own label (`fill`, `shape`, `size`…).",
        "`caption` credits the data source.",
        "`alt` stores [[alt-text|alt text]] inside the chart object (`get_alt_text(p)` reads it back). Whether a tool attaches it to the image automatically varies, so in a Quarto report also set the chunk option `fig-alt` (see the Quarto sections below)."
      ]},
      "Storing the chart as `p` means you can print it, change it (`p + theme_minimal()`) or save it later."
    ]},
    {h:"Scales: colours and axes", body:[
      "**Scales** control how data values become visual values. Each aesthetic has scale functions named `scale_<aesthetic>_<type>()`. The default colours for categories are evenly spaced hues, not designed for colour vision deficiency. Two good built-in choices:",
      {code:"p <- ggplot(survey,\n  aes(x = hours, y = score, colour = group)) +\n  geom_point(size = 3)\np + scale_colour_brewer(palette = \"Dark2\")\np + scale_colour_viridis_d(end = 0.8)\nggplot(survey, aes(x = answer)) +\n  geom_bar() +\n  scale_y_continuous(limits = c(0, NA))", lang:"r", label:"R · computer or Posit Cloud"},
      {list:[
        "`scale_colour_brewer(palette = \"Dark2\")` uses a ColorBrewer qualitative palette for categories.",
        "`scale_colour_viridis_d()` uses viridis colours (`_d` for discrete categories, `_c` for continuous numbers), designed to read in greyscale and for common kinds of colour blindness. `end = 0.8` avoids its palest yellow, which is hard to see on white.",
        "`scale_y_continuous(limits = c(0, NA))` makes the y-axis start at 0 and lets ggplot2 choose the top (NA). Bar charts already start at zero; for other charts, choose the baseline deliberately ({{axes-baselines|Unit 4}})."
      ]},
      {tip:"`fill` has its own scales: `scale_fill_brewer()`, `scale_fill_viridis_d()`. Use the one that matches the aesthetic you mapped."}
    ]},
    {h:"Themes: everything that isn’t data", body:[
      "A [[ggplot-theme|theme]] controls the non-data parts: background, grid lines, fonts, legend position. Complete themes change everything at once; `theme()` adjusts single elements:",
      {code:"p <- ggplot(survey, aes(x = hours, y = score, colour = group)) +\n  geom_point(size = 3)\np + theme_minimal()\np + theme_bw(base_size = 14)\np +\n  theme_minimal() +\n  theme(legend.position = \"bottom\")", lang:"r", label:"R · computer or Posit Cloud"},
      {table:[["Theme","Look"],["`theme_grey()`","The default: grey panel, white grid"],["`theme_bw()`","White panel with a border and grid"],["`theme_minimal()`","No border or background; light grid"],["`theme_classic()`","Axis lines, no grid, like many journals"]]},
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
      {warn:"Avoid saving charts by screenshot or copy-paste for anything you’ll update. ggsave() in a script makes the same file every time from the same data: that’s the first step towards reproducibility."}
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
        "**Set a seed** with `set.seed()` before anything random, so simulations give the same result each time (Unit 6).",
        "**Record versions**: `sessionInfo()` prints your R and package versions. Results can change slightly when packages update.",
        "**Track changes** with Git (Track 2) if the project matters."
      ]},
      {key:"Reproducible doesn’t mean correct: a report can rebuild the same mistake perfectly. But it makes mistakes findable and fixable, because every number can be traced back to the line of code that made it."},
      {tip:"No computer? You can still write the outline of a report on paper or in a notes app: the question, the data source, each step as a verb (filter, mutate, summarise), the chart you’d draw and the sentence it supports. That’s the skeleton of every Quarto report."}
    ]}
   ],
   try:[
    {id:"t3u8-l5-x1", type:"mcq", q:"Kenji’s chart maps `colour = group`. The legend title says “group” and he wants “Study group”. Which addition does that?", options:[
      {t:"`labs(colour = \"Study group\")`", ok:true, why:"Each mapped aesthetic’s legend is labelled through labs(), using the aesthetic’s name: colour here."},
      {t:"`labs(legend = \"Study group\")`", why:"There’s no `legend` label; legends are named after the aesthetic they explain (colour, fill, shape…)."},
      {t:"`labs(title = \"Study group\")`", why:"That sets the chart’s title, not the legend’s."},
      {t:"`theme(legend.position = \"Study group\")`", why:"legend.position moves the legend (\"bottom\", \"none\"…); it doesn’t set its text."}
    ]},
    {id:"t3u8-l5-x2", type:"number", q:"`ggsave(\"chart.png\", width = 16, height = 10, units = \"cm\", dpi = 300)`. About how many pixels wide is the PNG? (1 inch = 2.54 cm.)", answer:1890, tol:3, unit:"pixels", why:"16 cm ÷ 2.54 = 6.30 inches; 6.30 × 300 dots per inch ≈ 1,890 pixels. (The file ggsave made in testing was 1,889 pixels wide, because it rounds down.)", wrongs:[{v:4800, tol:5, why:"That’s 16 × 300: it treats centimetres as inches. Convert to inches first (÷ 2.54)."},{v:189, tol:2, why:"That would be at 30 dpi. Check the multiplication: 6.3 × 300."},{v:16, tol:0, why:"16 is the width in centimetres, not pixels."}]},
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
    {id:"t3u8-l5-x6", type:"mcq", q:"Amara’s Quarto report renders on her laptop but fails on a colleague’s with `could not find function \"read_csv\"`. In RStudio’s Console she had run `library(tidyverse)` before rendering, and the report has no library line. What’s the fix?", options:[
      {t:"Add `library(tidyverse)` in a chunk at the top of the report", ok:true, why:"Rendering starts a fresh R session that doesn’t see what was loaded in the Console. A report must load its own packages (and the colleague needs them installed)."},
      {t:"Ask the colleague to restart their computer", why:"A restart doesn’t load packages. The report itself needs the library() line."},
      {t:"Switch the format from html to pdf", why:"The format only affects the final conversion; the R code fails before that."},
      {t:"Replace the code chunk with the numbers typed by hand", why:"That would “work” but loses reproducibility, which is the point of the report."}
    ]}
   ],
   apply:{intro:"Polish one chart and outline a report. The ggplot2 and Quarto steps need a computer or Posit Cloud; the planning task works on any device.", tasks:[
     {t:"Polish and save a chart (computer or Posit Cloud)", how:["Take your scatterplot from Lesson 4 and add labs() with a title that states the point, axis labels with units, a caption and alt text","Add `scale_colour_viridis_d(end = 0.8)` and `theme_minimal(base_size = 14)`","Save it with `ggsave(\"scores.png\", plot = p, width = 16, height = 10, units = \"cm\", dpi = 300)` and open the file"]},
     {t:"Render a Quarto report (computer or Posit Cloud)", how:{
       win:["In RStudio: **File → New File → Quarto Document…**, give it a title, choose HTML, click **Create**","Replace the content with this lesson’s report outline (and make survey.csv in the same folder)","Save as report.qmd and click **Render** ([[kbd:Ctrl]] + [[kbd:Shift]] + [[kbd:K]])","Change one score in survey.csv, render again, and check that the mean sentence changes"],
       mac:["In RStudio: **File → New File → Quarto Document…**, choose HTML, click **Create**","Paste the report outline, save as report.qmd next to survey.csv","Click **Render** ([[kbd:Cmd]] + [[kbd:Shift]] + [[kbd:K]])","Change one score in survey.csv, render again, and watch the numbers update"],
       chromeos:["In a Posit Cloud RStudio project, use **File → New File → Quarto Document…**","If RStudio offers to install packages it needs (such as rmarkdown), accept","Paste the outline, save as report.qmd in the project folder with survey.csv, and click **Render**","The HTML report opens in the Viewer or a new browser tab"],
       phone:["Rendering needs R; on a phone, do task 3 instead","If you use Posit Cloud on a phone browser, the ChromeOS steps work, but expect a cramped screen"]}},
     {t:"Plan a reproducible report (any device)", how:["Pick a question about data you care about (club attendance, household spending, a class survey)","Write the YAML title, then one heading per section","Under each, write the steps as verbs (read, filter, mutate, group_by + summarise, ggplot) and the sentence each result will support, marking every number that should come from inline code"]}
   ], proof:"A saved PNG of your polished chart, a rendered report whose numbers changed after you edited the data, or (on a phone) your written report plan with each number marked as computed."},
   read:[{book:"r4ds", where:"Chapter 11, “Communication”: Sections 11.2 “Labels”, 11.4 “Scales” and 11.5 “Themes”; and Chapter 1, Section 1.6 “Saving your plots”"},{book:"r4ds", where:"Chapter 28, “Quarto”: Sections 28.2 “Quarto basics”, 28.5 “Code chunks” and 28.10 “YAML header”; and Chapter 29, “Quarto formats”"},{book:"dcss", where:"R for Social Scientists: “Getting started with R Markdown (Optional)”, the older format Quarto replaces, which works the same way"}]
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
    "Think of a set of kitchen tools from one maker: the handles fit the same hand, and they stack in the same drawer. In the tidyverse, every function takes a table of data first and gives back a table, and the function names are verbs: filter, select, arrange, mutate, summarise.",
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
    "Version notes as of 2026: the `tidyverse` meta-package is at 2.0.0, and current dplyr and tidyr releases need R 4.1 or later. dplyr 1.2.0 made the `.by` argument and `reframe()` stable, added `filter_out()` for dropping rows, and soft-deprecated `case_match()` in favour of `recode_values()`. ggplot2 4.0.0 moved to a new internal object system (S7) and no longer translates `size` to `linewidth` for the outlines of `geom_bar()` and `geom_col()`; for lines, `size` has been deprecated since 3.4.0 in favour of `linewidth`. Code in this unit avoids those edge cases, but older tutorials may use them.",
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
    "Style (tidyverse style guide): a space before the pipe, the pipe at the end of the line, each step on its own line indented two spaces, and break very long pipelines (over about 10–15 lines) into named pieces. In RStudio, Ctrl/Cmd + Shift + M types a pipe; tick “Use native pipe operator” in Tools → Global Options → Code to get `|>`.",
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
  "title": "Grouped summaries: group_by(), summarise() and count()",
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
    "dplyr answers these in two steps. `group_by(group)` sorts the rows into piles, one per group. `summarise(mean_score = mean(score))` then works out the average of each pile and puts the answers in a small new table, one row per group.",
    "This is called **split–apply–combine**: split into groups, apply a calculation, combine the results. It’s the same idea as a spreadsheet pivot table.",
    "For counting there’s a shortcut: `count(answer)` gives the number of rows for each answer.",
    "In base R (and in the Data Lab), `tapply(d$score, d$group, mean)` and `table(d$answer)` do the same jobs.",
    "Always look at how many rows are in each group as well as the summary itself: an average of two people tells you much less than an average of two hundred."
   ],
   "builder": [
    {
     "ex": "survey |>\n  group_by(group) |>\n  summarise(n = n(), mean_score = mean(score))",
     "label": "One row per group, with its size",
     "mono": true
    },
    "Useful summary functions: `n()` (rows), `mean()`, `median()`, `sd()`, `min()`, `max()`, `sum()`, `n_distinct()` and `quantile(x, 0.25)`. Always include `n()`: a mean from 3 people is far less stable than one from 300, and extreme group averages often come from the smallest groups.",
    "`count(x)` equals `group_by(x) |> summarise(n = n())`; `sort = TRUE` puts the largest first; several columns count combinations. Divide by the total for shares: `mutate(share = n / sum(n))`.",
    "Missing values: one NA makes `mean()` NA. Add `na.rm = TRUE`, and report how many values were used (`sum(!is.na(x))`).",
    {
     "table": [
      [
       "dplyr",
       "Base R"
      ],
      [
       "`group_by(g) |> summarise(m = mean(x))`",
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
    "Keep the grouping columns few and meaningful: grouping by two columns gives one row per combination, so 5 regions × 4 age bands gives up to 20 rows, some possibly tiny. To compare groups fairly, report a measure of spread (such as `sd()` or the IQR) as well as the centre, and remember that a grouped `mutate()` keeps every row, which is the way to compare each person with their own group (`score - mean(score)`). In base R, `aggregate(cbind(score, hours) ~ group, data = d, FUN = mean)` summarises several columns at once."
   ],
   "pro": [
    "**Grouping that lingers.** After `summarise()` with several grouping columns, dplyr drops the last level and keeps the rest, printing a message about `.groups`. Later verbs then act within groups, which can surprise you (a later `mutate(share = n / sum(n))` would compute shares within each remaining group). Use `.groups = \"drop\"`, `ungroup()`, or the per-operation `.by` argument (`summarise(d, m = mean(x), .by = g)`), stable since dplyr 1.2.0, which never leaves grouping behind and keeps groups in order of first appearance rather than sorting them.",
    "`summarise()` should return one row per group; for summaries that return several values (like `quantile(x, c(0.25, 0.75))`) use `reframe()`.",
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
    "t": "dplyr reference: summarise()",
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
    "**Duplicate keys.** If pivot_wider() finds several values for the same row and column, it warns and produces list-columns. Usually that means the identifying columns don’t uniquely identify a row; fix the data, or summarise with `values_fn = mean` (or `length` to count).",
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
   "visualisation"
  ],
  "summary": "Build charts from data, aesthetic mappings and geoms, add facets, labels, scales and themes with +, and save them with ggsave().",
  "levels": {
   "starter": [
    "**ggplot2** is the tidyverse package for charts. Instead of choosing a chart type from a menu, you describe the chart in parts:",
    {
     "list": [
      "the **data** (a table),",
      "the **mappings**: which column goes on the x-axis, which on the y-axis, which decides colour,",
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
    "**Mapping vs setting.** Inside `aes()`, a value comes from a column and gets a legend: `aes(colour = group)`. Outside, in the geom, it’s fixed for every mark: `geom_point(colour = \"steelblue\", size = 3)`. Putting a constant inside aes() (`aes(colour = \"blue\")`) creates a fake category with default colours and a legend.",
    "Map shape or linetype as well as colour so groups stay distinguishable without colour. `facet_wrap(~ group)` makes small multiples with shared scales.",
    "Polish: `labs(title, subtitle, x, y, colour, caption, alt)`; colour-blind-safe scales such as `scale_colour_viridis_d()` or `scale_colour_brewer(palette = \"Dark2\")`; themes such as `theme_minimal(base_size = 14)`, then `theme(legend.position = \"bottom\")`.",
    "Two errors: `+` must end a line (starting a line with it fails), and layers are joined with `+`, not `|>`.",
    "To save, store the plot (`p <- ggplot(...) + ...`) and call `ggsave(\"chart.png\", plot = p, width = 16, height = 10, units = \"cm\", dpi = 300)`. The extension picks the format: PNG for screens and documents, PDF or SVG for print. In the Data Lab, base R’s `plot()`, `hist()`, `boxplot(score ~ group, data = d)` and `barplot(table(d$answer))` draw similar charts, though colours and legends have to be added by hand."
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
    "**Parameters** in the YAML (`params:`) let one report render for different inputs (a region, a year). Cross-references (`@fig-scores` for a chunk labelled `fig-scores`) and citations (a `bibliography:` file and `[@key]`) work across formats.",
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
  "def": "The tidyverse package for manipulating data frames with verbs such as `filter()`, `select()`, `mutate()` and `summarise()`.",
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
  "def": "The dplyr verb that marks rows as belonging to groups, so that later verbs such as `summarise()` work group by group.",
  "codex": "grouped-summaries"
 },
 {
  "id": "summarise-verb",
  "term": "summarise()",
  "def": "The dplyr verb that collapses rows into summary values, such as a mean or a count; one row per group after `group_by()`. Also spelt `summarize()`.",
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
  "def": "In ggplot2, a link from a column of data to a visual property such as x position, colour or shape, written inside `aes()`.",
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
 }
],
  bank:[
 {
  "id": "t3u8-q01",
  "lesson": "t3u8-l1",
  "level": 1,
  "q": "What is the tidyverse?",
  "options": [
   {
    "t": "A collection of R packages designed to work together on tidy data",
    "ok": true,
    "why": "dplyr, tidyr, ggplot2, readr and others share one design: data first, verbs, tidy tables."
   },
   {
    "t": "A separate programming language that replaces R",
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
    "t": "Plain `filter()` now means dplyr’s version; stats’ version is still reachable as `stats::filter()`",
    "ok": true,
    "why": "Two packages have a function with that name; the one loaded last wins. `package::function()` chooses explicitly."
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
    "t": "dplyr verbs return a new table; she didn’t store it, so survey is unchanged",
    "ok": true,
    "why": "To keep the sorted version: `survey_sorted <- arrange(survey, score)`."
   },
   {
    "t": "arrange() only sorts temporarily for 5 minutes",
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
    "t": "Posit Cloud: RStudio in the browser, where each project can install the tidyverse",
    "ok": true,
    "why": "It needs only a browser and account. Check the free plan’s compute-hour limit before relying on it for a whole class."
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
    "t": "There’s no way without installing R locally",
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
    "t": "Either works for simple chains; recognise both, and use one consistently in new code",
    "ok": true,
    "why": "For everyday chains they behave the same; R for Data Science recommends |> for new code."
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
    "t": "Mixing them in one script causes wrong answers",
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
    "t": "Break it at a sensible point and give that intermediate result a good name",
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
    "t": "Nest every function instead",
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
    "t": "Marks the groups, so later verbs work group by group; the rows themselves don’t change",
    "ok": true,
    "why": "Printing shows `# Groups: group [2]`; the effect appears with summarise() or mutate()."
   },
   {
    "t": "Sorts the rows by group",
    "why": "It doesn’t reorder rows; use arrange() for that."
   },
   {
    "t": "Collapses the table to one row per group",
    "why": "That’s summarise() after group_by()."
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
  "q": "Which base R line matches `survey |> group_by(group) |> summarise(m = mean(score))`?",
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
    "t": "Report the group sizes; a mean from 2 people is very unstable and shouldn’t be headlined",
    "ok": true,
    "why": "Small groups produce extreme averages by chance; always show n alongside a grouped mean."
   },
   {
    "t": "Delete group C from the data",
    "why": "Hiding data isn’t honest; report it with its size and a caution."
   },
   {
    "t": "Multiply group C’s mean by 75 to match the others",
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
    "t": "Puts 0 where a combination doesn’t occur, instead of NA",
    "ok": true,
    "why": "For counts, an absent combination really is zero."
   },
   {
    "t": "Replaces every value with 0",
    "why": "Only the missing cells are filled."
   },
   {
    "t": "Removes columns that contain 0",
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
    "t": "A missing reading is unknown, not zero; 0 would wrongly pull averages down",
    "ok": true,
    "why": "values_fill = 0 suits counts, where absence means none, not measurements, where absence means unknown. Leave them NA."
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
    "t": "pivot_longer() the week columns into `week` and `km`, so each aesthetic has one column to map",
    "ok": true,
    "why": "ggplot2 maps columns to x, y and colour; the week variable must be in a column, not spread across names."
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
    "t": "Nothing; ggplot2 reads column names as x values",
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
    "t": "Maps columns of the data to visual properties such as x, y and colour",
    "ok": true,
    "why": "aes() is short for aesthetic mappings."
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
    "t": "Chooses the type of mark (points, bars)",
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
    "t": "`ggplot(d, aes(hours, score)) + geom_point(colour = \"darkgreen\")`",
    "ok": true,
    "why": "Setting a fixed colour goes outside aes(), in the geom."
   },
   {
    "t": "`ggplot(d, aes(hours, score, colour = \"darkgreen\")) + geom_point()`",
    "why": "Inside aes(), \"darkgreen\" is treated as a data value: default colour and a legend saying darkgreen."
   },
   {
    "t": "`ggplot(d, aes(hours, score)) + geom_point(aes(colour = group))`",
    "why": "That colours by group."
   },
   {
    "t": "`ggplot(d, aes(hours, score)) + labs(colour = \"darkgreen\")`",
    "why": "labs() sets legend titles, not colours."
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
    "t": "geom_bar() counts rows for each x; geom_col() draws the y values you give it",
    "ok": true,
    "why": "Use geom_col() when the counts (or other values) are already in a column."
   },
   {
    "t": "geom_bar() is horizontal and geom_col() vertical",
    "why": "Both draw vertical bars by default; orientation is changed by mapping."
   },
   {
    "t": "geom_col() is only for colours",
    "why": "The “col” is short for column (as in bar), not colour."
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
    "t": "R ran the first line as complete; `+` must go at the end of the line to continue",
    "ok": true,
    "why": "A line ending with + tells R more is coming. A line starting with + is a new command."
   },
   {
    "t": "geom_point() needs aes() inside it",
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
  "q": "Priya’s scatterplot colours two groups red and green. A colleague with red–green colour blindness can’t tell them apart. Which change helps most?",
  "options": [
   {
    "t": "Also map shape to group (`aes(colour = group, shape = group)`), and use a colour-blind-safe palette",
    "ok": true,
    "why": "A second channel (shape) doesn’t rely on colour at all, and palettes such as viridis or Dark2 are designed to stay distinguishable."
   },
   {
    "t": "Make the points bigger",
    "why": "Size alone doesn’t separate the two colours."
   },
   {
    "t": "Add a title",
    "why": "Useful, but it doesn’t help tell the groups apart."
   },
   {
    "t": "Use theme_dark()",
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
    "t": "Each panel fits its own y-axis, so patterns are visible, but heights are no longer comparable across panels",
    "ok": true,
    "why": "Shared scales allow fair comparison; free scales help reading within a panel. Say so in a note if you use them."
   },
   {
    "t": "No trade-off; free scales are always better",
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
    "t": "`ggplot(long, aes(x = week, y = km, colour = name)) + geom_line()`",
    "ok": true,
    "why": "Mapping colour to name also groups the points, so each walker gets their own line."
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
    "why": "labs(title, subtitle, x, y, caption, colour…, alt) covers the text labels."
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
    "t": "The complete theme added afterwards resets the legend position; put theme() after theme_minimal()",
    "ok": true,
    "why": "Later layers override earlier ones; a complete theme replaces all theme settings."
   },
   {
    "t": "legend.position doesn’t accept \"bottom\"",
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
    "t": "Inserts the computed value, so the sentence updates when the data changes",
    "ok": true,
    "why": "It becomes “12” today and a new number after new data, with no retyping."
   },
   {
    "t": "Shows the code in grey",
    "why": "It’s run and replaced by its result."
   },
   {
    "t": "Creates a new chunk",
    "why": "Inline code lives inside the sentence."
   },
   {
    "t": "Only works in PDF output",
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
    "t": "`format: typst`, which uses the Typst engine bundled with Quarto",
    "ok": true,
    "why": "Typst makes PDFs without a separate TeX installation; `format: pdf` needs LaTeX (for example TinyTeX)."
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
    "t": "Keep survey.csv in the project folder and read it with a relative path, `read_csv(\"survey.csv\")`",
    "ok": true,
    "why": "Relative paths work wherever the project folder is copied."
   },
   {
    "t": "Ask the colleague to create a folder called amara",
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
    "t": "They make every number traceable to code, but can still reproduce a mistake perfectly",
    "ok": true,
    "why": "Reproducibility makes errors findable and fixable; it doesn’t guarantee correctness."
   },
   {
    "t": "A reproducible report is guaranteed to be correct",
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
 }
]
});
