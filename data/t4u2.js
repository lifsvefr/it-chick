/* Track 4 · Unit 2 · Searching like a researcher */
ICA.addUnit({
  id:"t4u2", track:"t4", n:2, title:"Searching like a researcher", icon:"🔎",
  blurb:"Turn a topic into search terms, combine them with Boolean logic, choose the right places to search, follow citation trails, set up alerts, and get the full text legally.",
  goals:[
    "Turn a topic into a question, its concepts and a table of search terms, and judge a search by precision and recall",
    "Write search strings with AND, OR, NOT, brackets, phrases, truncation and field searches, and adapt them to how each tool works",
    "Choose between library catalogues, discovery search, subject databases, Google Scholar and open indexes for a given need",
    "Find more research by following citations backwards and forwards, and set up alerts so new work comes to you",
    "Get the full text of a paper legally: open copies, libraries, interlibrary loan and authors, and know which version you have"
  ],
  read:[
    {book:"acrl", where:"Frame: “Searching as Strategic Exploration”", note:"Short and written for teachers; read it after Lessons 1–3. The frames “Scholarship as Conversation” and “Information Has Value” fit Lessons 4 and 5."},
    {book:"wlsf", where:"Chapter 24 “Finding High Quality Secondary Sources”, Chapter 35 “Citation Rates” and Chapter 42 “Avoiding Confirmation Bias in Searches”", note:"Written in 2017 for fact-checking, so some screenshots are dated; the search habits still apply."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u2-l1", title:"From topic to search terms", minutes:50,
   hook:{q:"Kenji searches a research database for `teenagers sleep phones` and finds only a handful of papers. Which change is most likely to find many more relevant ones?", options:["Add more words, such as `effects` and `health`","Also search other words for the same ideas, such as `adolescents` and `smartphones`","Type the full question: `do phones affect how teenagers sleep`","Search only in the titles of papers"], answer:1, reveal:"**Other words for the same ideas.** Many researchers write “adolescents”, not “teenagers”, and “smartphone use” or “screen time”, not “phones”. Adding words with a plain search usually *narrows* results, and title-only searching narrows them further. This lesson shows how to turn a topic into concepts and collect the many words authors use for each."},
   goals:[
     "Turn a broad topic into a question and pick out its two to four concepts",
     "Build a concept table of synonyms, spelling variants, technical terms and broader or narrower words",
     "Find the vocabulary experts use, and use AI tools for words but not for references",
     "Explain precision and recall, calculate them, and choose which matters more for a task",
     "Keep a search log you could use to repeat or report your search"
   ],
   learn:[
    {h:"A different kind of search", body:[
      {lead:"A web search looks for a page that answers you. A research search looks for the body of work on a question, and has to think about what it might have missed."},
      "In Track 1 you learned to search the web well ({{search-skills|search skills and operators}}) and to judge what you find ({{evaluating-sources|evaluating sources}}). Searching for research builds on both, but the goal changes. You’re no longer after one good page. You’re trying to find the important studies, reviews and books on a question, using tools built for the job, in a way you could repeat and explain to someone else.",
      "That changes how you work:",
      {list:[
        "**Several searches, not one.** You try some words, see what comes back, learn better words from the results, and search again.",
        "**Several places, not one.** No single tool covers everything. Lesson 3 maps the options.",
        "**Written down.** You keep a record of what you searched, where and when, so you or a reader can check it or run it again."
      ]},
      "The Association of College and Research Libraries (ACRL) calls this “Searching as Strategic Exploration”. Its point is that searching is rarely a straight line: you go back and forth, and you change direction as your understanding grows. Changing course is the method working, not failing.",
      {key:"A research search is a cycle: plan your words, search, learn from the results, adjust, and record what you did."}
    ]},
    {h:"From topic to question to concepts", body:[
      "Most searches start with a topic that’s too broad: “phones and sleep”, “school meals”, “flood insurance”. Turning the topic into a question tells you what to look for.",
      {ex:"Topic: phones and sleep\nQuestion: Does using a phone at bedtime affect how teenagers sleep?\nConcepts: (1) phone use at bedtime  (2) sleep  (3) teenagers\nLeft out: does, using, affect, how", label:"Worked example"},
      "The **concepts** are the main ideas every relevant paper must involve. Most questions have two to four. Everything else stays out of the search: question words, linking words, and words for the relationship you’re asking about, such as *affect*, *improve* or *reduce*.",
      "Why leave out *reduce* or *affect*? Because papers don’t reliably use them. A study that found **no** effect, or that measured “sleep duration” against “screen exposure”, may never say “affect”. Searching for the word would quietly drop relevant work, and studies that disagree with what you expect are exactly the ones you need to see.",
      "If you met [[variable|variables]] in the sociology primer, concepts often line up with them: the thing that might cause a change, the thing that might change, and the people it happens to.",
      {tip:"Decide whether each part of the question is a concept to search or something to filter later. “Teenagers” is a concept here. “Published in the last ten years” or “in English” is better handled with the tool’s filters."}
    ]},
    {h:"Many words for one idea", body:[
      "Each concept can be written many ways, and different authors choose different words. A good list of [[search-term-research|search terms]] covers the main ones:",
      {list:[
        "**Synonyms**: teenagers, adolescents, youth, young people.",
        "**Spelling variants**: behaviour and behavior; paediatric and pediatric; organisation and organization.",
        "**Singular and plural**: child and children; woman and women.",
        "**Abbreviations and full forms**: ADHD and attention deficit hyperactivity disorder; SMEs and small and medium-sized enterprises.",
        "**Everyday and technical words**: heart attack and myocardial infarction; bedwetting and enuresis.",
        "**Broader and narrower terms**: mobile devices (broader) and smartphones (narrower).",
        "**Older terms**, if you need older literature, and **other languages** you can read."
      ]},
      "Put them in a **concept table** (also called a keyword grid): one column per concept, with the words for that concept going down the column.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">One question, three concepts</text><rect class="d-lup" x="4" y="30" width="96" height="34" rx="6" stroke-width="2"/><text x="52" y="52" text-anchor="middle">Phone use</text><rect class="d-lup" x="122" y="30" width="96" height="34" rx="6" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Sleep</text><rect class="d-lup" x="240" y="30" width="96" height="34" rx="6" stroke-width="2"/><text x="288" y="52" text-anchor="middle">Teenagers</text><rect class="d-panel" x="4" y="72" width="96" height="116" rx="6" stroke-width="2"/><rect class="d-panel" x="122" y="72" width="96" height="116" rx="6" stroke-width="2"/><rect class="d-panel" x="240" y="72" width="96" height="116" rx="6" stroke-width="2"/><text class="s" x="52" y="96" text-anchor="middle">smartphone</text><text class="s" x="52" y="120" text-anchor="middle">mobile phone</text><text class="s" x="52" y="144" text-anchor="middle">screen time</text><text class="s" x="52" y="168" text-anchor="middle">media use</text><text class="s" x="170" y="96" text-anchor="middle">sleep</text><text class="s" x="170" y="120" text-anchor="middle">insomnia</text><text class="s" x="170" y="144" text-anchor="middle">sleep quality</text><text class="s" x="170" y="168" text-anchor="middle">bedtime</text><text class="s" x="288" y="96" text-anchor="middle">teenagers</text><text class="s" x="288" y="120" text-anchor="middle">adolescents</text><text class="s" x="288" y="144" text-anchor="middle">youth</text><text class="s" x="288" y="168" text-anchor="middle">young people</text><text class="s" x="111" y="134" text-anchor="middle">AND</text><text class="s" x="229" y="134" text-anchor="middle">AND</text><text x="170" y="214" text-anchor="middle">Down a column: OR (any word will do)</text><text x="170" y="236" text-anchor="middle">Across columns: AND (every concept)</text><rect class="d-gold" x="20" y="250" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="268" text-anchor="middle">Result: papers with at least one</text><text x="170" y="286" text-anchor="middle">word from every column</text></svg>', alt:"A concept table with three columns: Phone use (smartphone, mobile phone, screen time, media use), Sleep (sleep, insomnia, sleep quality, bedtime) and Teenagers (teenagers, adolescents, youth, young people). Words in a column are joined with OR; the columns are joined with AND, so results contain at least one word from every column.", cap:"A concept table is the plan for a search: OR within a column, AND between columns."},
      "The table is the plan for your [[search-string|search string]]. In Lesson 2 you’ll join the words in each column with OR (any of them will do) and join the columns with AND (every concept must appear)."
    ]},
    {h:"Where to find the words experts use", body:[
      "You can’t list synonyms you’ve never met. Good places to find the vocabulary of a field:",
      {list:[
        "**Background sources**: an encyclopedia article, a textbook chapter, an overview from a reputable organisation. {{using-wikipedia|Wikipedia}} is fine for this; you’re collecting words, not citing it.",
        "**Titles, abstracts and keywords of good papers.** Once you find one relevant paper, notice how it names your concepts and add its words to your table. Google Scholar’s own help page makes the same suggestion: if you’re new to a subject, pick up the terminology from secondary sources.",
        "**A database’s thesaurus.** Many databases tag every record with a fixed set of [[subject-heading|subject headings]] (a [[controlled-vocabulary|controlled vocabulary]]). Lesson 3 shows how to use them.",
        "**Librarians, teachers and colleagues.** Finding the right words is part of a librarian’s training, and many public and university libraries answer questions by chat or email.",
        "**AI chatbots**, for brainstorming synonyms, spelling variants and related terms. Not for lists of papers: chatbots can produce references that look real but don’t exist (a [[hallucination]])."
      ]},
      {warn:"Use AI tools for words, then search real databases for the papers. If a chatbot names a paper, check that it exists in a real index before you write it down."}
    ]},
    {h:"Precision and recall", body:[
      "Two ideas describe how well a search worked ([[precision-recall|precision and recall]]):",
      {list:[
        "**Precision**: of the results you got, what share is relevant? High precision means little junk to wade through.",
        "**Recall**: of all the relevant items in the tool, what share did your search find? High recall means little missed."
      ]},
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="16" text-anchor="middle">Everything in the database</text><rect class="d-panel" x="4" y="26" width="332" height="160" rx="10" stroke-width="2"/><circle class="d-lup" cx="125" cy="105" r="70" stroke-width="2"/><circle class="d-gold" cx="215" cy="105" r="70" stroke-width="2"/><path class="d-sage" d="M170,51.38 A70,70 0 0,1 170,158.62 A70,70 0 0,1 170,51.38 Z" stroke-width="2"/><circle class="d-ink" cx="125" cy="105" r="70" stroke-width="2"/><circle class="d-ink" cx="215" cy="105" r="70" stroke-width="2"/><text x="96" y="101" text-anchor="middle">All</text><text x="96" y="118" text-anchor="middle">relevant</text><text x="246" y="101" text-anchor="middle">Your</text><text x="246" y="118" text-anchor="middle">results</text><text x="170" y="110" text-anchor="middle">both</text><text x="170" y="212" text-anchor="middle">Precision = both ÷ your results</text><text x="170" y="236" text-anchor="middle">Recall = both ÷ all relevant</text></svg>', alt:"Inside a box labelled everything in the database, two overlapping circles: all relevant items, and your results. The overlap is labelled both. Precision equals the overlap divided by your results; recall equals the overlap divided by all relevant items.", cap:"Precision asks how clean your results are; recall asks how complete they are."},
      {ex:"Mei’s search returns 200 results. She checks them: 40 are relevant.\nLater she learns the database holds 80 relevant papers.\nPrecision = 40 ÷ 200 = 20%\nRecall = 40 ÷ 80 = 50%", label:"Worked example"},
      "The two usually pull against each other. More synonyms with OR, and truncation, raise recall but let in more noise. More concepts with AND, exact phrases and title-only searching raise precision but risk missing things. Which matters more depends on the job:",
      {table:[
        ["Your task","Lean towards","Why"],
        ["A few strong sources for an essay or a quick evidence check","Precision","You need some good sources fast"],
        ["A literature review for a thesis","A balance, tilted to recall","Missing a key study weakens the review"],
        ["A [[systematic-review|systematic review]]","Recall","The method aims to find every eligible study (Unit 5)"]
      ]},
      "You rarely know how many relevant papers really exist. A practical check: list three to five **known items**, papers you already know belong in your results. If your search misses one, look at how that paper describes your concepts and add its words."
    ]},
    {h:"Keep a search log", body:[
      "A **search log** records every search that mattered. It saves you redoing work, lets you rerun a search months later, and lets you describe your method honestly. Theses and reviews often require one.",
      {ex:"2026-03-14 · PubMed\n(adolescen* OR teenager*) AND sleep AND smartphone*\nFilters: last 10 years\n312 results · about 30 look relevant\nNext: add \"screen time\" and \"mobile phone*\"", label:"One entry in a search log", mono:true},
      "Note for each search:",
      {list:[
        "the date and the tool (results change over time, and differ between tools);",
        "the exact search string, copied and pasted;",
        "any filters (years, language, document type);",
        "the number of results, and roughly how many looked relevant;",
        "what you’ll change next, and why."
      ]},
      {tip:"A spreadsheet, a notes app or a paper notebook all work. Copy and paste search strings instead of retyping them: one missing bracket changes the results."}
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Type in your whole question.”** Web search engines cope with questions fairly well. Many research databases match your words much more literally, so filler words and relationship words can hide relevant work.",
        "**“More words give better results.”** In most tools each extra word or concept is another condition every result must meet. Add too many and good papers drop out.",
        "**“No results means no research exists.”** It usually means your words don’t match how authors describe the topic, or the tool doesn’t cover that field. Change the words and the tool first.",
        "**“A good search works first time.”** Experienced researchers rewrite searches many times. Each round teaches you vocabulary.",
        "**“The top results are the best research.”** Ranking guesses at relevance; it isn’t a quality judgement. Look beyond the first page, and judge each source yourself."
      ]}
    ]}
   ],
   try:[
    {id:"t4u2-l1-x1", type:"sort", q:"Hana’s question: “Does mindfulness training reduce stress among nurses?” Sort each word: is it a concept to search, or should it stay out of the search?", buckets:["Concept to search","Leave out"], items:[
      {t:"mindfulness", b:0, why:"A main idea every relevant paper must involve (the intervention)."},
      {t:"stress", b:0, why:"The outcome being studied: a core concept."},
      {t:"nurses", b:0, why:"The group the question is about: a core concept."},
      {t:"reduce", b:1, why:"A relationship word. Studies that found no change, or that measured “burnout scores”, may never say “reduce”. Searching for it would drop relevant work."},
      {t:"does", b:1, why:"A question word with no meaning for the search."},
      {t:"among", b:1, why:"A linking word. It adds nothing a database can match usefully."}
    ]},
    {id:"t4u2-l1-x2", type:"match", q:"Match each concept to a set of words authors might use for it.", pairs:[
      ["teenagers","adolescents, youth, young people","These are the common synonyms; “adolescents” is especially common in health and psychology research."],
      ["heart attack","myocardial infarction, MI","The technical term medical researchers use for a heart attack, and its abbreviation."],
      ["small businesses","SMEs, small and medium-sized enterprises","Economics and business research often uses the abbreviation SMEs."],
      ["older adults","elderly, seniors, aged","Different eras and fields use different words for older people; searching only one misses work using the others."]
    ]},
    {id:"t4u2-l1-x3", type:"mcq", q:"Lucía searches a database for `community gardens improve mental health in cities` and gets two results. What’s the best next step?", options:[
      {t:"Cut it to the concepts (community gardens, mental health, urban) and add synonyms such as “allotments”, “urban gardening”, “wellbeing” and “psychological”", ok:true, why:"Right. Dropping relationship and filler words (“improve”, “in”) and adding synonyms raises recall; there is plenty of research on this under other words."},
      {t:"Conclude that almost no research exists on the topic", why:"Two results usually means the words don’t match how authors describe the topic, not that the research doesn’t exist."},
      {t:"Add more words, such as `benefits` and `evidence`", why:"In most databases each added word is another condition every result must meet, so this would find even fewer."},
      {t:"Put the whole sentence in quotation marks", why:"Quotation marks demand that exact phrase. Almost no paper contains that sentence word for word, so this finds fewer, not more."}
    ]},
    {id:"t4u2-l1-x4", type:"number", q:"Tomás runs a search that returns 250 results. He checks them all and finds 50 relevant ones. What is the search’s **precision**, as a percentage?", answer:20, tol:0, unit:"%", why:"Precision = relevant results ÷ all results = 50 ÷ 250 = 0.2 = 20%.", wrongs:[
      {v:50, tol:0, why:"50 is the number of relevant results, not the share. Divide it by the 250 results."},
      {v:500, tol:0, why:"That’s 250 ÷ 50 × 100, the division the wrong way round. Precision puts relevant results on top: 50 ÷ 250."},
      {v:80, tol:0, why:"80% is the share that was **not** relevant (200 of 250). Precision is the relevant share: 50 ÷ 250."}
    ]},
    {id:"t4u2-l1-x5", type:"number", q:"Amara knows of 40 key studies on her topic from a published review. Her new search finds 30 of them. Estimate her search’s **recall** as a percentage.", answer:75, tol:0, unit:"%", why:"Recall = relevant items found ÷ all relevant items = 30 ÷ 40 = 0.75 = 75%. Using known items like this is a practical way to estimate recall.", wrongs:[
      {v:30, tol:0, why:"30 is the number found, not the share. Divide by the 40 that exist."},
      {v:133, tol:1, why:"That’s 40 ÷ 30, the division the wrong way round. Recall is found ÷ all relevant: 30 ÷ 40."},
      {v:25, tol:0, why:"25% is the share she **missed** (10 of 40). Recall is the share found."}
    ]},
    {id:"t4u2-l1-x6", type:"order", q:"Put the start of a research search in a sensible order.", items:[
      {t:"Turn the topic into a question", why:"A question tells you what you’re actually looking for."},
      {t:"Pick out the two to four concepts", why:"Concepts come from the question; filler and relationship words stay out."},
      {t:"Read background sources to collect the words experts use", why:"You need the field’s vocabulary before you can list good synonyms."},
      {t:"Add those words to a concept table of synonyms and variants", why:"The table turns concepts and vocabulary into a plan for the search string."},
      {t:"Run a first search and note it in your log", why:"Only now is there something to run, and recording it lets you compare later versions."},
      {t:"Read the best results and add their words to the table", why:"Results teach you vocabulary; this is where the cycle starts again."}
    ]},
    {id:"t4u2-l1-x7", type:"mcq", q:"Which of these belong in a useful search log entry? Choose all that apply.", options:[
      {t:"The exact search string, copied and pasted", ok:true, why:"Without the exact string you can’t rerun or report the search; small changes alter results."},
      {t:"The tool and the date", ok:true, why:"Results differ between tools and change over time as new records are added."},
      {t:"The filters used and the number of results", ok:true, why:"Filters change what you see, and the count lets you compare versions of a search."},
      {t:"Only the titles of the papers you liked, without the search", why:"You need those too, but on their own they don’t let you repeat or explain how you found them."},
      {t:"A copy of every result page as a screenshot", why:"Not needed and hard to use. The string, tool, date, filters and count let you rerun the search."}
    ]}
   ],
   apply:{intro:"Start a real search project on a question you care about: from work, study, health, your community or plain curiosity. Keep these notes; Lessons 2–5 build on them.", tasks:[
     {t:"Build a concept table for your own question", how:["Write your topic, then turn it into a question.","Underline the two to four concepts. Cross out question words, linking words and relationship words such as “affect” or “improve”.","Make one column per concept and list at least four words for each: synonyms, spelling variants, abbreviations, technical and everyday terms."], write:"Topic… Question… Concept 1 words… Concept 2 words… Concept 3 words…"},
     {t:"Collect the experts’ vocabulary", how:["Read one background source on your topic (an encyclopedia article, a textbook section or an overview from a reputable organisation).","Find two relevant research papers in any free tool (for example Google Scholar or Semantic Scholar) and read their titles, abstracts and keywords.","Add at least five new words to your concept table, and note where each came from."], write:"New word → where I found it…"},
     {t:"Start your search log", how:["Create a log in a spreadsheet, notes app or notebook with columns: date, tool, exact string, filters, results, notes.","List three to five known items: papers you already know should turn up. You’ll use them to check recall later."], write:"Log columns… Known items…"}
   ], proof:"A question with its concepts underlined, a concept table with at least four words per concept (five of them found in real sources), and a search log ready for Lesson 2."},
   read:[
     {book:"acrl", where:"Frame: “Searching as Strategic Exploration”", note:"Read the short description and the list of knowledge practices; most of them appear in this unit."},
     {book:"wlsf", where:"Chapter 42 “Avoiding Confirmation Bias in Searches”", note:"Why neutral search terms matter, from a fact-checker’s point of view."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u2-l2", title:"Boolean, phrases and truncation", minutes:55,
   hook:{q:"In a research database, which search finds more results: `cats AND dogs` or `cats OR dogs`?", options:["`cats AND dogs`, because it asks for more","`cats OR dogs`","They find exactly the same number","It depends on which word comes first"], answer:1, reveal:"**`cats OR dogs`.** OR accepts a record with either word, so it can only find the same or more. AND demands both words in the same record, so it finds fewer. In everyday speech “cats and dogs” sounds like more, which is why this trips people up. This lesson turns the three Boolean words, plus phrases and truncation, into precise searches."},
   goals:[
     "Predict what AND, OR and NOT do to a set of results",
     "Turn a concept table into a bracketed search string",
     "Use phrase searching, truncation and field searching, and know their pitfalls",
     "Adapt one search to Google Scholar, PubMed, OpenAlex and Semantic Scholar, which support different syntax"
   ],
   learn:[
    {h:"AND, OR and NOT", body:[
      {lead:"Three small words do most of the work in a research search."},
      "They’re called [[boolean-operator|Boolean operators]], after the 19th-century mathematician George Boole, whose algebra of true and false underlies them. A database treats each word you search for as a set of records; the operators combine the sets.",
      {table:[
        ["Operator","Finds records with…","Effect"],
        ["`AND`","all the words","Fewer results: narrows"],
        ["`OR`","any of the words","More results: broadens"],
        ["`NOT`","the first word but not the second","Fewer results: removes some"]
      ]},
      {fig:'<svg viewBox="0 0 340 340"><circle class="d-panel" cx="230" cy="55" r="36" stroke-width="0"/><circle class="d-panel" cx="278" cy="55" r="36" stroke-width="0"/><path class="d-gold" d="M254,28.17 A36,36 0 0,1 254,81.83 A36,36 0 0,1 254,28.17 Z" stroke-width="0"/><circle class="d-ink" cx="230" cy="55" r="36" stroke-width="2"/><circle class="d-ink" cx="278" cy="55" r="36" stroke-width="2"/><text x="212" y="60" text-anchor="middle">cats</text><text x="296" y="60" text-anchor="middle">dogs</text><text x="8" y="42" font-family="monospace">cats AND dogs</text><text class="s" x="8" y="62">records with both words</text><text class="s" x="8" y="80">fewest results</text><circle class="d-gold" cx="230" cy="170" r="36" stroke-width="0"/><circle class="d-gold" cx="278" cy="170" r="36" stroke-width="0"/><circle class="d-ink" cx="230" cy="170" r="36" stroke-width="2"/><circle class="d-ink" cx="278" cy="170" r="36" stroke-width="2"/><text x="212" y="175" text-anchor="middle">cats</text><text x="296" y="175" text-anchor="middle">dogs</text><text x="8" y="157" font-family="monospace">cats OR dogs</text><text class="s" x="8" y="177">records with either word</text><text class="s" x="8" y="195">most results</text><circle class="d-panel" cx="278" cy="285" r="36" stroke-width="0"/><path class="d-gold" d="M254,258.17 A36,36 0 1,0 254,311.83 A36,36 0 0,1 254,258.17 Z" stroke-width="0"/><circle class="d-ink" cx="230" cy="285" r="36" stroke-width="2"/><circle class="d-ink" cx="278" cy="285" r="36" stroke-width="2"/><text x="212" y="290" text-anchor="middle">cats</text><text x="296" y="290" text-anchor="middle">dogs</text><text x="8" y="272" font-family="monospace">cats NOT dogs</text><text class="s" x="8" y="292">cats, minus any record</text><text class="s" x="8" y="310">that mentions dogs</text></svg>', alt:"Three pairs of overlapping circles labelled cats and dogs. For cats AND dogs only the overlap is shaded. For cats OR dogs both whole circles are shaded. For cats NOT dogs the cats circle is shaded except the overlap.", cap:"Shaded areas are the records each search returns."},
      "Use them where they fit:",
      {list:[
        "**OR** joins the synonyms inside one concept: `adolescents OR teenagers OR youth`.",
        "**AND** joins different concepts: sleep **and** teenagers **and** phone use.",
        "**NOT** removes a meaning you don’t want, such as `mercury NOT planet` when you mean the metal. Use it sparingly (see the warning below)."
      ]},
      {warn:"NOT is a blunt tool. `adolescents NOT children` also removes every study that mentions both groups, including the large studies of “children and adolescents” you probably wanted. Prefer adding a concept with AND, or a filter, over removing one with NOT."}
    ]},
    {h:"Brackets: building the full string", body:[
      "With more than one operator, the tool has to decide what to combine first. **Brackets** (parentheses) make that explicit, just as in arithmetic. Turn your concept table into a string like this: OR inside each bracket, AND between brackets.",
      {ex:"(teenager* OR adolescen* OR youth)\nAND (smartphone* OR \"mobile phone*\" OR \"screen time\")\nAND sleep*", label:"A concept table as a search string", mono:true},
      "Why bother? Because tools don’t all read operators in the same order. PubMed’s help says it processes a search **left to right**. So in PubMed, `allergy AND cats OR dogs` means `(allergy AND cats) OR dogs`: every paper about dogs comes back, allergy or not. Other tools may give AND priority over OR. Brackets remove the guesswork everywhere they’re supported.",
      {tip:"Count your brackets: every `(` needs a `)`. Build the string in a notes app, one concept per line, then paste it into the search box."}
    ]},
    {h:"Phrases", body:[
      "A [[phrase-search|phrase search]] puts words in quotation marks so they must appear together, in that order: `\"screen time\"` rather than screen and time anywhere in the record. Phrases raise precision, and work in Google Scholar, PubMed, OpenAlex and Semantic Scholar.",
      "Two cautions:",
      {list:[
        "**A phrase can be too strict.** `\"effects of screen time on sleep\"` will miss papers that say “screen time and sleep”. Quote the short, fixed terms (`\"screen time\"`, `\"climate change\"`, `\"small business\"`) and leave the rest as separate concepts.",
        "**Tools handle phrases differently.** PubMed checks quoted phrases against its own phrase index; if your phrase isn’t in that index, its help page says the quotes are ignored and the words are searched separately. PubMed’s **Search Details** feature shows how your search was actually translated."
      ]}
    ]},
    {h:"Truncation and wildcards", body:[
      "[[truncation|Truncation]] searches for every ending of a word stem. In many databases the symbol is an asterisk: `adolescen*` finds adolescent, adolescents and adolescence. It raises recall cheaply, and saves typing plurals.",
      "Choose the stem carefully. Cut too short and you get noise: `cat*` finds cat, cats, category, catalogue and cattle. `educat*` finds education, educational and educator, but also educated guesses.",
      "A **wildcard** stands for one or more letters *inside* a word, so `organi?ation` can find both organisation and organization in tools that support it. The symbols differ between tools, and some tools have none:",
      {list:[
        "**PubMed**: `*` for any number of characters, with at least four letters before it (`colo*` works, `co*` doesn’t). Truncation also switches off PubMed’s automatic mapping of your words to related terms, so it can sometimes find *less*.",
        "**OpenAlex** has no truncation symbol: its documentation says `*`, `?` and `~` are removed from searches. Instead it automatically matches simple word endings (a search for *possums* also finds *possum*).",
        "**Google Scholar** has no truncation. It automatically matches some word forms (for example *diet* also finds *dietary*), and you can’t turn that off.",
        "**Semantic Scholar**: its FAQ says wildcards aren’t supported."
      ]},
      {warn:"Never assume a symbol works because it worked elsewhere. In a tool without truncation, `adolescen*` may be ignored or treated as an odd word. Check the tool’s help page, or compare result counts with and without the symbol."}
    ]},
    {h:"Searching in specific fields", body:[
      "A database record is split into **fields**: title, abstract, authors, journal, year, subject headings and more. Searching one field is a strong precision tool: a paper with your words in its **title** is very likely to be about them.",
      {list:[
        "**PubMed** uses field tags in square brackets: `sleep[ti]` (title), `sleep[tiab]` (title or abstract), `brody[au]` (author), `sleep[mh]` (MeSH subject heading). Like truncation, tags switch off automatic term mapping.",
        "**Google Scholar** offers `author:` (for example `author:\"d knuth\"`) and `intitle:`, and its **Advanced search** (in the side menu) searches the author, title and publication fields and limits by date.",
        "**Most library databases** have an Advanced search with drop-down menus for each field. You don’t need to learn any codes to use them."
      ]},
      {tip:"Title searches are good for a quick, precise first look. For a thorough search, title-and-abstract is the usual compromise: abstracts mention concepts that titles leave out."}
    ]},
    {h:"Same idea, different syntax", body:[
      "Here is how four free tools handle the same ideas, from their help pages and documentation (checked November 2026; Google Scholar’s `OR` and minus sign are documented in university library guides rather than Scholar’s own help). The ideas carry over; the details don’t.",
      {table:[
        ["Tool","Combining words","Phrases","Truncation"],
        ["Google Scholar","Spaces act as AND; `OR` works; a minus sign excludes. Brackets aren’t documented.","Quotation marks","None (some word forms matched automatically)"],
        ["PubMed","`AND`, `OR`, `NOT` in capitals, with brackets; read left to right","Quotation marks, checked against a phrase index","`*` after at least 4 letters"],
        ["OpenAlex","`AND`, `OR`, `NOT` in capitals, with brackets","Quotation marks","None (word endings matched automatically)"],
        ["Semantic Scholar","No Boolean operators","Quotation marks","None"]
      ]},
      "Many subscription databases, such as those on the EBSCOhost, ProQuest or Ovid platforms, use the words AND, OR and NOT and an asterisk for truncation, and add **proximity operators** (find two words near each other). Proximity syntax varies by provider, so look it up each time.",
      {ex:"PubMed (full string):\n(teenager* OR adolescen* OR youth) AND (smartphone* OR \"mobile phone*\" OR \"screen time\") AND sleep*\n\nGoogle Scholar (several short searches):\n\"screen time\" sleep adolescents\nsmartphone bedtime sleep teenagers\n\nSemantic Scholar (keywords and a phrase):\n\"screen time\" adolescent sleep", label:"One question, adapted to three tools", mono:true},
      "In tools without full Boolean support, run **several short searches** instead of one long one, each with a different combination of your synonyms, and log each one."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“AND gives more because it includes more words.”** It’s the opposite: AND demands every word, so it narrows.",
        "**“NOT is a safe way to tidy results.”** It removes every record that mentions the word, including relevant ones.",
        "**“Lowercase and works the same.”** PubMed and OpenAlex expect operators in capitals. In some tools a lowercase “and” is just another word, or is ignored.",
        "**“The asterisk works everywhere.”** It doesn’t: Google Scholar, Semantic Scholar and OpenAlex don’t support truncation, and PubMed needs at least four letters before it.",
        "**“A longer string is a better search.”** A long string with a misplaced bracket can be worse than a short one. Test each part, and check that your known items appear."
      ]}
    ]}
   ],
   try:[
    {id:"t4u2-l2-x1", type:"sort", q:"Starting from `sleep AND adolescents`, will each change usually give more results or fewer?", buckets:["More results","Fewer results"], items:[
      {t:"Add `OR teenagers` inside a bracket with adolescents", b:0, why:"OR accepts records with either word, so it broadens the set."},
      {t:"Add `AND smartphone*`", b:1, why:"AND adds a condition every record must meet, so it narrows."},
      {t:"Change `adolescents` to `adolescen*` (in a tool that supports truncation)", b:0, why:"Truncation also finds adolescent and adolescence, so it broadens."},
      {t:"Put `\"sleep quality\"` in quotation marks instead of `sleep`", b:1, why:"A phrase is stricter than a single word: records must contain both words together."},
      {t:"Add `NOT children`", b:1, why:"NOT removes every record mentioning children, so it narrows (often too much)."},
      {t:"Search the words only in titles", b:1, why:"Titles contain far fewer words than full records, so fewer records match."}
    ]},
    {id:"t4u2-l2-x2", type:"mcq", q:"Priya’s concept table has three columns: (nurses, midwives), (burnout, “emotional exhaustion”), (rural). Which string matches the table?", options:[
      {t:"`(nurses OR midwives) AND (burnout OR \"emotional exhaustion\") AND rural`", ok:true, why:"OR joins words inside each concept and AND joins the concepts, with brackets making the grouping clear."},
      {t:"`(nurses AND midwives) OR (burnout AND \"emotional exhaustion\") OR rural`", why:"The operators are swapped. This demands both job titles together and accepts any record that just says “rural”."},
      {t:"`nurses OR midwives AND burnout OR \"emotional exhaustion\" AND rural`", why:"Without brackets the tool decides the grouping. PubMed, for example, reads left to right, which gives a very different set from the one intended."},
      {t:"`\"nurses midwives burnout emotional exhaustion rural\"`", why:"That demands the whole string as one exact phrase, which almost no record contains."}
    ]},
    {id:"t4u2-l2-x3", type:"spot", q:"Ana wants to run this search in PubMed. Tap the parts that break the rules in PubMed’s help.", ask:"breaks a PubMed rule", mono:true, parts:[
      "(", {t:"teen*", flag:false, why:"“teen” has four letters before the asterisk, which meets PubMed’s minimum of four."},
      " OR ", {t:"adolescen*", flag:false, why:"A well-chosen stem: finds adolescent, adolescents and adolescence."},
      ") ", {t:"and", flag:true, why:"PubMed’s help says to type Boolean operators in capitals: `AND`."},
      " (", {t:"\"screen time\"", flag:false, why:"A correctly quoted phrase."},
      " OR ", {t:"smartphone*", flag:false, why:"A valid truncation with a long stem."},
      ") AND ", {t:"sl*", flag:true, why:"Only two letters before the asterisk. PubMed requires at least four (`sleep*` would work)."}
    ]},
    {id:"t4u2-l2-x4", type:"match", q:"Match each tool to a fact about how its search works.", pairs:[
      ["Semantic Scholar","Quoted phrases work, but Boolean operators and wildcards don’t","Its FAQ says exactly this, so run several short keyword searches there."],
      ["PubMed","Truncation needs at least four letters before the asterisk","PubMed’s help gives `colo*` as the example."],
      ["Google Scholar","`author:` finds papers by a named author","Its help page shows `author:\"d knuth\"` as an example."],
      ["OpenAlex","Boolean operators must be typed in capitals","AND, OR and NOT in uppercase combine terms in its search."]
    ]},
    {id:"t4u2-l2-x5", type:"mcq", q:"Tomás is studying teenagers and wants to avoid studies of young children, so he searches `adolescents NOT children`. What’s the main problem?", options:[
      {t:"It also removes every study of “children and adolescents”, which may be exactly the evidence he needs", ok:true, why:"NOT removes any record that mentions the word at all, even studies that include his group alongside another."},
      {t:"NOT isn’t a real Boolean operator", why:"NOT is one of the three standard Boolean operators; the problem is how bluntly it works."},
      {t:"It will return more results than `adolescents` alone", why:"NOT can only remove records, never add them."},
      {t:"Nothing: NOT is the best way to focus on a group", why:"An age filter, or adding a concept with AND, focuses a search without throwing away mixed-age studies."}
    ]},
    {id:"t4u2-l2-x6", type:"number", q:"In a small database, 120 records mention “anxiety”, 80 mention “depression”, and 30 mention both. How many records does `anxiety OR depression` find?", answer:170, tol:0, unit:"records", why:"OR finds records with either word. Add the two sets and subtract the overlap, which would otherwise be counted twice: 120 + 80 − 30 = 170.", wrongs:[
      {v:200, tol:0, why:"120 + 80 counts the 30 records that mention both words twice. Subtract the overlap once."},
      {v:30, tol:0, why:"30 is the answer for `anxiety AND depression`: records with both words."},
      {v:90, tol:0, why:"90 is `anxiety NOT depression` (120 − 30). OR includes the depression-only records too."}
    ]},
    {id:"t4u2-l2-x7", type:"mcq", q:"In PubMed, which processes searches left to right, what does `allergy AND cats OR dogs` find?", options:[
      {t:"Records about allergy and cats, plus every record about dogs, allergy or not", ok:true, why:"Read left to right it becomes `(allergy AND cats) OR dogs`. Writing `allergy AND (cats OR dogs)` gives what was probably meant."},
      {t:"Records about allergy and either cats or dogs", why:"That needs brackets: `allergy AND (cats OR dogs)`. Without them PubMed combines allergy with cats first."},
      {t:"Only records mentioning all three words", why:"That would be `allergy AND cats AND dogs`. The OR accepts dog records on their own."},
      {t:"An error, because operators can’t be mixed", why:"Mixing operators is normal; brackets just make the grouping clear."}
    ]}
   ],
   apply:{intro:"Turn last lesson’s concept table into real searches. Free tools only: PubMed (pubmed.ncbi.nlm.nih.gov) suits health and life sciences; OpenAlex (openalex.org) covers all fields; Google Scholar and Semantic Scholar work for anything.", tasks:[
     {t:"Write and run your search string", how:["Turn your concept table into a string: OR inside brackets, AND between them, phrases in quotes, truncation where the tool supports it.","Run it in PubMed or OpenAlex. Note the number of results and whether your known items appear.","Make a short version without brackets or truncation and run it in Google Scholar or Semantic Scholar. Note the results too.","Log both searches."], write:"Full string… Tool and results… Short version… Tool and results… Known items found?"},
     {t:"Change one thing at a time", how:["Starting from your full string, make one change and rerun: add a synonym with OR; then add truncation; then quote a phrase; then limit one concept to titles.","After each change, write down the result count and what happened to relevance.","Decide which version gives the best balance for your task."], write:"Change → results → more or less relevant?…"}
   ], proof:"A bracketed search string, a short version adapted to a tool without Boolean support, and a log showing how result counts changed as you adjusted one element at a time."},
   read:[
     {book:"acrl", where:"Frame: “Searching as Strategic Exploration”", note:"Look for the practice of matching search language and strategies to the tool you’re using."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u2-l3", title:"Where to search", minutes:55,
   hook:{q:"Microsoft Academic was once one of the biggest free tools for finding research papers. What happened to it?", options:["It’s still running and is the largest free index","Microsoft retired it at the end of 2021, and a free index called OpenAlex was built to replace its data","Google bought it and merged it into Google Scholar","It became a paid service for universities"], answer:1, reveal:"**Retired at the end of 2021.** Microsoft stopped updating its academic database (the Microsoft Academic Graph) on 31 December 2021. The nonprofit OurResearch launched OpenAlex in January 2022 as a free successor. Tools come and go, so this lesson teaches the **kinds** of search tool, with today’s examples, so you can recognise a good replacement when one appears."},
   goals:[
     "Tell apart library catalogues, discovery search, subject databases, academic search engines and open indexes",
     "Use WorldCat to find which libraries hold a book, and know what a library card or university login adds",
     "Use subject headings (such as MeSH or the ERIC Thesaurus) alongside keywords",
     "Use Google Scholar well while knowing its limits",
     "Choose at least two suitable places to search for a given question"
   ],
   learn:[
    {h:"Five kinds of search tool", body:[
      {lead:"Where you search decides what you can find. Each kind of tool sees a different slice of the world’s research."},
      {fig:'<svg viewBox="0 0 340 392"><text x="170" y="18" text-anchor="middle">Five kinds of search tool</text><rect class="d-panel" x="10" y="30" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="52">Library catalogue</text><text class="s" x="22" y="70">What one library owns or licenses</text><text class="s" x="22" y="86">e.g. a library’s catalogue; WorldCat</text><rect class="d-lup" x="10" y="102" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="124">Discovery search</text><text class="s" x="22" y="142">Catalogue + licensed articles, one box</text><text class="s" x="22" y="158">e.g. WorldCat Discovery, Primo</text><rect class="d-sage" x="10" y="174" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="196">Subject databases</text><text class="s" x="22" y="214">Chosen sources, subject headings</text><text class="s" x="22" y="230">e.g. PubMed, ERIC, PsycInfo</text><rect class="d-gold" x="10" y="246" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="268">Academic search engines</text><text class="s" x="22" y="286">Crawl the web widely; simple search</text><text class="s" x="22" y="302">e.g. Google Scholar, Semantic Scholar</text><rect class="d-rose" x="10" y="318" width="320" height="64" rx="8" stroke-width="2"/><text x="22" y="340">Open indexes</text><text class="s" x="22" y="358">Free, open records of works and links</text><text class="s" x="22" y="374">e.g. OpenAlex, BASE, CORE, DOAJ</text></svg>', alt:"Five stacked boxes: library catalogue (what one library owns or licenses, for example WorldCat); discovery search (catalogue plus licensed articles in one box, for example WorldCat Discovery or Primo); subject databases (chosen sources with subject headings, for example PubMed, ERIC, PsycInfo); academic search engines (crawl the web widely, for example Google Scholar and Semantic Scholar); open indexes (free open records, for example OpenAlex, BASE, CORE and DOAJ).", cap:"The lines between these blur, but each kind has typical strengths."},
      "No tool covers everything, and the overlaps are messy. A paper may be in one database and missing from another, or appear in an open index without its abstract. That’s why researchers search **at least two places**, usually one broad tool and one built for their field."
    ]},
    {h:"Library catalogues, WorldCat and discovery search", body:[
      "A [[library-catalogue|library catalogue]] lists what one library (or a group of libraries) owns or licenses: printed and electronic books, journals, theses, films, maps. It usually lists journal **titles**, not the individual articles inside them.",
      "**WorldCat**, run by the library cooperative OCLC, combines the catalogues of libraries around the world. OCLC calls it “the world’s most comprehensive database of information about library collections.” On WorldCat.org you can:",
      {list:[
        "search for a book or other item and see which libraries hold it, sorted by distance from your approximate location (which you can change);",
        "follow a **Borrow** link to that library’s own catalogue to request it, where you may be asked to sign in or pay a fee;",
        "find the exact edition you need before asking your own library to get it."
      ]},
      "Most university libraries, and some public ones, also offer [[discovery-search|discovery search]]: one search box that covers the library’s catalogue **and** articles from the databases it subscribes to, plus open content. On the library’s website it’s often just labelled “Search”. Products include WorldCat Discovery, Primo and EBSCO Discovery Service, but you don’t need to know which one your library uses.",
      {h:"What a library card or university login adds"},
      {list:[
        "**Full text** of articles and e-books the library pays for (with a university login, often from home too).",
        "**Subscription databases** such as PsycInfo, Scopus or Web of Science.",
        "**Interlibrary loan**: getting items your library doesn’t hold (Lesson 5).",
        "**Help from librarians**, often by chat or email."
      ]},
      {tip:"Public libraries are worth checking even if you’re not a student. Many give cardholders online access to some databases, newspaper archives and e-books. What’s included varies a lot, so look at your library’s “online resources” page or ask."}
    ]},
    {h:"Subject databases and subject headings", body:[
      "A subject [[database-academic|database]] is built for one field. Its producers choose which journals and other sources to include, and describe every record the same way. Two important ones are free to everyone:",
      {list:[
        "**PubMed**, from the US National Library of Medicine: biomedical and life sciences literature. It holds citations and abstracts, with links to full text; its **Free full text** filter limits results to articles free on the web, including PubMed Central (PMC), a free full-text archive.",
        "**ERIC**, sponsored by the Institute of Education Sciences of the US Department of Education: education research and reports. It has filters for **Peer reviewed only** and **Full text available on ERIC**."
      ]},
      "Many others need a subscription, usually through a library: for example PsycInfo (psychology), CINAHL (nursing), and Scopus and Web of Science (large databases covering many fields, with citation data).",
      "Their big advantage is [[subject-heading|subject headings]]. Trained indexers tag each record with standard terms from a fixed list, a [[controlled-vocabulary|controlled vocabulary]] or thesaurus. One heading then gathers papers on a concept **whatever words their authors used**.",
      {table:[
        ["Vocabulary","Used in","Example"],
        ["MeSH (Medical Subject Headings)","PubMed and other health databases","`Adolescent` covers teenagers, adolescents, youth"],
        ["ERIC Thesaurus descriptors","ERIC","Browse the Thesaurus from the search page"],
        ["Library of Congress Subject Headings","Many library catalogues worldwide","Shown as “Subjects” on a book’s record"]
      ]},
      "How to use them: find one relevant record, look at its subject headings, and search with the useful ones. Then **combine headings and keywords with OR**. Headings catch papers that use unusual words; keywords catch records that haven’t been indexed yet or never will be. In PubMed, for example, the newest records and some journals’ records don’t carry MeSH headings.",
      {ex:"(\"Adolescent\"[mh] OR adolescen*[tiab] OR teenager*[tiab])\nAND (\"Sleep\"[mh] OR sleep*[tiab])", label:"PubMed: headings and keywords together", mono:true},
      {tip:"PubMed also maps plain words to MeSH automatically (“automatic term mapping”). Its Search Details feature shows what it added. Quotation marks, truncation and field tags switch that mapping off, which is why mixing both, as above, is safer."}
    ]},
    {h:"Google Scholar: broad, easy and hard to see inside", body:[
      "Google Scholar searches scholarly material across the web: journal articles, books, theses, preprints, conference papers and more. It’s free, fast and very broad, and it’s often the best place to **start**. According to its help page it offers:",
      {list:[
        "**Since year** and **Sort by date** to see recent work (on small screens, under a Year menu);",
        "**Advanced search** (in the side menu) for author, title, publication and date;",
        "**Cited by**, **Related articles** and **All versions** under each result (Lesson 4 and 5);",
        "**[PDF]** and library links beside results when a full text is available to you;",
        "**Save**, **Cite** (exporting to BibTeX, EndNote, RefMan or RefWorks) and **email alerts**."
      ]},
      "Its limits matter for serious research:",
      {list:[
        "It doesn’t publish a full list of the sources it covers, so you can’t tell what’s missing.",
        "Search syntax is limited: no truncation, no documented brackets, and no subject headings.",
        "Results mix peer-reviewed articles with theses, preprints, slides and course material, without labelling which is which. Judge each one ({{evaluating-sources|as in Track 1}}).",
        "The ranking method isn’t public, and results can change over time, so record the date of every search."
      ]},
      {key:"Google Scholar is an excellent first stop and a poor only stop. Pair it with a subject database or an open index."}
    ]},
    {h:"Open indexes", body:[
      "A newer group of free tools publish open records of research that anyone can search and reuse:",
      {table:[
        ["Tool","Run by","Good for"],
        ["OpenAlex","OurResearch, a nonprofit (since January 2022)","All fields; filters by year, type and open access; data for analysing research"],
        ["BASE","Bielefeld University Library, Germany","What repositories hold: theses, reports, author manuscripts"],
        ["CORE","Began at the Open University, UK","Open access papers from repositories and journals, many with full text"],
        ["Semantic Scholar","Ai2 (Allen Institute for AI)","All sciences, mostly English; AI summaries (TLDRs) for some fields; alerts"],
        ["DOAJ","An independent, donation-funded organisation","Open access journals and their articles; checking a journal is listed"]
      ]},
      "Strengths: they’re free, and some are more inclusive of other languages and regions than the big commercial databases. Limits: records are often less complete (missing abstracts, uneven subject data), and you judge quality yourself, as with Google Scholar.",
      "Repository-focused tools such as BASE and CORE are especially good for **[[grey-literature-term|grey literature]]**: theses, working papers and reports that never appear in journals but can hold important evidence."
    ]},
    {h:"Choosing where to search", body:[
      {table:[
        ["You need…","Good places to start"],
        ["A book, or which libraries hold it","Your library catalogue; WorldCat"],
        ["Health or life sciences research","PubMed (free); CINAHL or others through a library"],
        ["Education research","ERIC (free)"],
        ["Any field, a quick start","Google Scholar, Semantic Scholar, OpenAlex"],
        ["Theses, reports, repository copies","BASE, CORE"],
        ["Open access journals","DOAJ"]
      ]},
      "A simple rule: **one broad tool plus one subject tool**, logged. If you have a library, add its discovery search. If you’re stuck, ask a librarian which databases fit your field; it’s exactly what they’re there for.",
      {h:"Common misconceptions"},
      {list:[
        "**“Google Scholar has everything.”** It’s broad, but it doesn’t say what it covers, and it misses things subject databases index carefully.",
        "**“Free tools are low quality.”** PubMed and ERIC are free and carefully indexed. Quality depends on how a tool is built, not on its price.",
        "**“A database is just a website with articles.”** Most databases hold descriptions (records) of articles and link to the full text elsewhere.",
        "**“If my library doesn’t have it, I can’t get it.”** Interlibrary loan and open copies often solve that (Lesson 5)."
      ]}
    ]}
   ],
   try:[
    {id:"t4u2-l3-x1", type:"match", q:"Match each need to a good free place to start.", pairs:[
      ["Which libraries near you hold a particular book","WorldCat","WorldCat combines library catalogues worldwide and shows which libraries hold an item."],
      ["Biomedical studies, searched with MeSH headings","PubMed","PubMed is the National Library of Medicine’s free database, indexed with MeSH."],
      ["Education research, filtered to peer-reviewed work","ERIC","ERIC covers education and has a “Peer reviewed only” filter."],
      ["Whether a journal is a listed open access journal","DOAJ","DOAJ is an index of open access journals; checking a journal’s listing is a common use."],
      ["Theses and reports held in university repositories","BASE","BASE, run by Bielefeld University Library, searches what repositories hold."]
    ]},
    {id:"t4u2-l3-x2", type:"mcq", q:"Amara types `(stress OR anxiety) AND nurses` into Semantic Scholar and the results look odd. What’s the most likely reason?", options:[
      {t:"Semantic Scholar doesn’t support Boolean operators, so it doesn’t treat AND, OR and the brackets as instructions", ok:true, why:"Its FAQ says Boolean operators and wildcards aren’t supported (quoted phrases are). Run short keyword searches there instead."},
      {t:"The operators must be in lowercase in Semantic Scholar", why:"Case isn’t the issue; Semantic Scholar doesn’t support Boolean operators at all."},
      {t:"Semantic Scholar only covers computer science", why:"It covers all fields of science, though mostly English-language work."},
      {t:"There is no research on stress in nurses", why:"There’s plenty. The search syntax, not the topic, is the problem."}
    ]},
    {id:"t4u2-l3-x3", type:"sort", q:"Sort each feature: is it typical of a subject database (such as PubMed or ERIC) or of a broad academic search engine (such as Google Scholar)?", buckets:["Subject database","Broad academic search engine"], items:[
      {t:"Records tagged with standard subject headings by indexers", b:0, why:"Controlled vocabularies such as MeSH or the ERIC Thesaurus are a hallmark of subject databases."},
      {t:"Covers a defined set of sources chosen by its producers", b:0, why:"Subject databases select what they index; you can usually see the list."},
      {t:"Finds theses, preprints and course material from across the web", b:1, why:"Broad engines crawl widely, which is why their results mix many document types."},
      {t:"Detailed field searching with tags or drop-down menus", b:0, why:"Field-level searching (title, abstract, subject, author) is a core database feature."},
      {t:"Doesn’t publish a list of what it covers", b:1, why:"Google Scholar gives no full coverage list, so you can’t tell what’s missing."},
      {t:"Groups copies of a paper from different sites as “All versions”", b:1, why:"Gathering versions from across the web is a Google Scholar feature."}
    ]},
    {id:"t4u2-l3-x4", type:"mcq", q:"Fatima’s keyword search in a health database misses several papers she knows are relevant, because their authors used unusual terms. What’s the best fix?", options:[
      {t:"Find the subject heading indexers use for her concept and search it, combined with her keywords using OR", ok:true, why:"Headings gather papers whatever words authors used, and keywords still catch records that haven’t been indexed. Together they raise recall."},
      {t:"Replace all her keywords with the subject heading", why:"Headings alone miss the newest records and any that are never indexed. Combine them with keywords."},
      {t:"Switch to Google Scholar only", why:"Google Scholar has no subject headings, so it doesn’t solve the vocabulary problem, and it has its own coverage gaps."},
      {t:"Add NOT for the unusual terms", why:"NOT removes records, which is the opposite of what she needs."}
    ]},
    {id:"t4u2-l3-x5", type:"mcq", q:"What can a university login or public library card typically add to your searching? Choose all that apply.", options:[
      {t:"Full text of articles and e-books the library pays for", ok:true, why:"Libraries license content their users can read, often from home with a login."},
      {t:"Access to subscription databases", ok:true, why:"Databases such as PsycInfo or Scopus are usually reached through a library."},
      {t:"Interlibrary loan for items the library doesn’t hold", ok:true, why:"Libraries can borrow from or request copies from other libraries (Lesson 5)."},
      {t:"Permission to share your login with friends", why:"Library logins are personal; sharing them breaks the library’s licence terms and puts your account at risk."},
      {t:"Every paper ever published, free", why:"No library licenses everything, which is why open copies and interlibrary loan matter."}
    ]},
    {id:"t4u2-l3-x6", type:"mcq", q:"Kenji searches PubMed using only the MeSH heading for his topic. Why might he miss some of the newest papers?", options:[
      {t:"The newest records may not have been given MeSH headings yet", ok:true, why:"Indexing takes time, and some records are never indexed with MeSH. Adding keywords with OR catches them."},
      {t:"MeSH headings only exist for papers published before 2000", why:"MeSH is used for current indexing and updated regularly."},
      {t:"PubMed hides new papers for a year", why:"PubMed adds new records continually; the gap is in indexing, not in visibility."},
      {t:"MeSH can’t be searched; it’s only for display", why:"MeSH headings can be searched directly, for example with the [mh] tag."}
    ]},
    {id:"t4u2-l3-x7", type:"mcq", q:"Oluwaseun has no university access and wants a free tool to explore research across all fields, including work from many countries and languages. What’s a fair summary of OpenAlex for this?", options:[
      {t:"Free and broad, but its records are often less complete than curated subscription databases, so he should check details and judge quality himself", ok:true, why:"That matches how librarians describe it: inclusive and free, with gaps such as missing abstracts."},
      {t:"A paid database he can only use through a university", why:"OpenAlex is free to use."},
      {t:"Complete and fully checked, so he never needs another tool", why:"No tool is complete; OpenAlex’s records can be patchy, and quality judgements are up to the user."},
      {t:"Only useful for computer science", why:"OpenAlex covers all fields."}
    ]}
   ],
   apply:{intro:"Compare tools on your own question. Everything here is free; a library login, if you have one, adds more.", tasks:[
     {t:"Find a book in libraries near you", how:["Open WorldCat.org in any browser, on a phone or a computer.","Search for a book on your topic (or a classic in your field). Open its record.","Look at the list of libraries that hold it and their distance; change your location if it’s wrong.","Note the nearest library that holds it, and whether you could borrow it or ask your own library to get it."], write:"Book… Nearest library holding it… How I could get it…"},
     {t:"Run the same search in two different kinds of tool", how:["Choose one subject database (PubMed or ERIC, if they fit) or an open index (OpenAlex, BASE or CORE), plus one broad engine (Google Scholar or Semantic Scholar).","Adapt your string from Lesson 2 to each tool’s syntax and run it.","Compare the first ten results: how many appear in both? Which tool found your known items?","Log both searches."], write:"Tool 1, string, results… Tool 2, string, results… Overlap in top ten… Known items found where…"},
     {t:"Find out what your local library offers online", how:["Visit your public library’s website (or a university library’s, if you’re a student or staff member).","Find the page for online resources, databases or e-resources, and note which ones would help your question.","Check whether it offers interlibrary loan and what it costs."], write:"Library… Useful resources… Interlibrary loan: yes/no, cost…"}
   ], proof:"A book located in WorldCat, two logged searches with a comparison of their results, and a note of what your local library offers."},
   read:[
     {book:"wlsf", where:"Chapter 24 “Finding High Quality Secondary Sources”", note:"Caulfield on finding good secondary sources quickly; written for fact-checkers, and useful for any first search."},
     {book:"acrl", where:"Frame: “Searching as Strategic Exploration”", note:"Look for the practice of matching information needs to the right search tools."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u2-l4", title:"Following the trail: citations and alerts", minutes:50,
   hook:{q:"You find one perfect paper, published in 2015. Which route leads to relevant research published **after** it?", options:["Its reference list","Its “Cited by” list","Its keywords","Its abstract"], answer:1, reveal:"**Its “Cited by” list.** A reference list can only point backwards, to work that existed when the paper was written. “Cited by” points forwards, to later papers that cite it. Following both directions from one good paper is called citation chasing, and it often finds studies that keyword searches miss. This lesson shows how, and how to set up alerts so new work finds you."},
   goals:[
     "Use one good paper to find others by backward and forward citation chasing",
     "Use Cited by, Related articles and Similar articles features in several tools",
     "Explain why citation counts differ between tools and aren’t quality scores",
     "Set up search and citation alerts, and decide when you’ve searched enough"
   ],
   learn:[
    {h:"Research is a conversation", body:[
      {lead:"Every research paper answers earlier papers and is answered by later ones. Citations are the threads between them."},
      "The ACRL calls this idea “Scholarship as Conversation”. In practice it means one relevant paper, a **seed paper**, can lead you to many others. You follow its citations in two directions:",
      {fig:'<svg viewBox="0 0 340 340"><defs><marker id="t4u2l4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="16" text-anchor="middle">Older work it cites</text><rect class="d-panel" x="20" y="28" width="86" height="36" rx="6" stroke-width="2"/><text x="63" y="51" text-anchor="middle">2004</text><rect class="d-panel" x="127" y="28" width="86" height="36" rx="6" stroke-width="2"/><text x="170" y="51" text-anchor="middle">2009</text><rect class="d-panel" x="234" y="28" width="86" height="36" rx="6" stroke-width="2"/><text x="277" y="51" text-anchor="middle">2012</text><path class="d-ink" d="M140 146 L70 68" stroke-width="2" marker-end="url(#t4u2l4a)"/><path class="d-ink" d="M170 146 L170 68" stroke-width="2" marker-end="url(#t4u2l4a)"/><path class="d-ink" d="M200 146 L270 68" stroke-width="2" marker-end="url(#t4u2l4a)"/><text class="s" x="8" y="108">Backward:</text><text class="s" x="8" y="124">its references</text><rect class="d-gold" x="95" y="148" width="150" height="46" rx="8" stroke-width="2"/><text x="170" y="168" text-anchor="middle">Seed paper</text><text class="s" x="170" y="185" text-anchor="middle">2015</text><path class="d-ink" d="M70 272 L140 198" stroke-width="2" marker-end="url(#t4u2l4a)"/><path class="d-ink" d="M170 272 L170 198" stroke-width="2" marker-end="url(#t4u2l4a)"/><path class="d-ink" d="M270 272 L200 198" stroke-width="2" marker-end="url(#t4u2l4a)"/><text class="s" x="252" y="226">Forward:</text><text class="s" x="252" y="242">Cited by</text><rect class="d-lup" x="20" y="274" width="86" height="36" rx="6" stroke-width="2"/><text x="63" y="297" text-anchor="middle">2018</text><rect class="d-lup" x="127" y="274" width="86" height="36" rx="6" stroke-width="2"/><text x="170" y="297" text-anchor="middle">2021</text><rect class="d-lup" x="234" y="274" width="86" height="36" rx="6" stroke-width="2"/><text x="277" y="297" text-anchor="middle">2024</text><text x="170" y="332" text-anchor="middle">Newer work citing it</text></svg>', alt:"A seed paper from 2015 in the middle. Arrows go from it up to three older papers it cites (2004, 2009, 2012), labelled backward: its references. Arrows go from three newer papers (2018, 2021, 2024) up to the seed paper, labelled forward: cited by.", cap:"Arrows point from the citing paper to the cited one. Backward chasing follows the seed’s references; forward chasing finds papers that cite the seed."},
      {list:[
        "[[backward-citation|Backward]]: the works the seed paper cites, in its reference list. Always older.",
        "[[forward-citation|Forward]]: the later works that cite the seed paper. Always newer."
      ]},
      "Citation chasing (also called snowballing) finds papers that keyword searches miss, because it follows what researchers actually read and used, not the words in titles. It’s also one of the quickest ways into an unfamiliar field."
    ]},
    {h:"Backward chasing: mining the reference list", body:[
      "Start with the seed paper’s **introduction** or literature review section, not just the list at the end. That’s where the authors explain which earlier work matters and why, so you can tell a key study from a passing mention.",
      {list:[
        "**Look for repeats.** Works cited by several of your good papers are probably central to the field.",
        "**Look up each reference in a database** rather than trusting the list’s details. Reference lists contain typos, and a database record gives you the abstract, links and its own “Cited by”.",
        "**Note what’s missing.** If every reference is from one country, one decade or one research group, search deliberately for the others."
      ]},
      "Backward chasing has limits: it only goes back in time, and authors cite selectively, favouring work that supports their argument, work in their own language, and work that’s already well known."
    ]},
    {h:"Forward chasing: who cited this?", body:[
      "Forward chasing needs a tool that records citations:",
      {list:[
        "**Google Scholar**: click **Cited by** under a result to see newer papers that cite it. You can search within those results too.",
        "**Semantic Scholar**: each paper page lists citing papers, and a machine-learning model flags **highly influential citations**, where the cited paper significantly shaped the citing one. Its FAQ notes that this depends on access to full texts.",
        "**PubMed**: an abstract page can show **Cited by**, but PubMed’s help warns the list may not be complete.",
        "**OpenAlex**, and subscription databases such as **Scopus** and **Web of Science**, also record which works cite which."
      ]},
      {tip:"A seed paper cited hundreds of times gives too many results to read. Sort or filter the citing papers (by date, or by searching within them for one of your concepts), and start with recent reviews."},
      {ex:"Seed: a 2016 review of school garden programmes\nGoogle Scholar → Cited by → search within the citing articles for “nutrition”\n38 results; 9 look relevant from titles and abstracts\nLog: date, seed, tool, words searched within, 38 found, 9 kept", label:"Worked example"},
      "You’ll notice that the **same paper has different citation counts** in different tools. Each tool counts only the citations it can see, from the documents it covers. Google Scholar, which also counts theses, preprints and other web documents, often shows higher numbers than curated databases."
    ]},
    {h:"Citation counts are not quality scores", body:[
      "It’s tempting to treat the most-cited paper as the best. Counts tell you how much attention a paper got, which is useful, but they’re shaped by things other than quality:",
      {list:[
        "**Age**: older papers have had more time to collect citations.",
        "**Field**: some fields publish and cite far more than others.",
        "**Criticism**: papers are cited to disagree with them, too.",
        "**Errors**: even retracted papers keep being cited, sometimes by authors unaware of the retraction ({{retractions|Unit 1 covers retractions}}).",
        "**Visibility**: freely available and English-language papers are easier to find, and therefore to cite."
      ]},
      {key:"Use citation counts to find what a field is talking about, then judge each paper on its own methods and evidence ([[critical-appraisal-term|critical appraisal]], Unit 3)."}
    ]},
    {h:"Similar papers and author trails", body:[
      "Two more ways to grow your list from good papers:",
      {list:[
        "**Similar-paper features.** Google Scholar’s **Related articles** finds documents similar to a result. PubMed’s **Similar articles** compares words in titles, abstracts and MeSH headings using a weighted formula. Semantic Scholar’s **Research Feeds** recommends papers once you rate some as relevant or not.",
        "**Author trails.** Researchers often publish several papers on one question. Click an author’s name, or open their public Google Scholar or Semantic Scholar profile, to see their other work, including newer follow-ups."
      ]},
      "Some newer tools draw maps of citation networks or use AI to suggest related papers. They can be helpful for exploring, but check that each suggested paper is real and relevant, as with any AI output ({{ai-chatbot-accuracy|AI accuracy}})."
    ]},
    {h:"Alerts: let new research come to you", body:[
      "A [[search-alert|search alert]] reruns your search automatically and emails you when something new appears. For a long project, it keeps your search up to date without you redoing it. Free options, from each tool’s help pages:",
      {table:[
        ["Tool","Kind of alert","How"],
        ["Google Scholar","New results for a search","Run the search, click the envelope icon in the sidebar, enter your email, then **Create alert**"],
        ["Google Scholar","New citations to your own papers","Create a public profile, click **Follow** next to your name and choose **New citations to my articles**"],
        ["PubMed","New results for a search","Click **Create alert** below the search box; needs a free My NCBI account"],
        ["Semantic Scholar","New papers or citations for an author, paper or topic","Click **Create Alert** on the author, paper or topic page"]
      ]},
      "Many journals also offer **table-of-contents alerts** (an email or feed when a new issue comes out), usually on the journal’s website.",
      {tip:"Alerts multiply. Give each one a clear name, review them every few months, and consider an email filter that files them in one folder ({{email-rules-filters|email rules and filters}})."}
    ]},
    {h:"Knowing when to stop", body:[
      "Searching could go on forever. Signs you’ve searched enough for most projects:",
      {list:[
        "New searches and citation chasing keep returning papers you already have (sometimes called **saturation**).",
        "Your known items all turn up, and so do the papers that key reviews cite.",
        "You’ve covered at least two kinds of tool, and your search log shows what you did."
      ]},
      "Stopping isn’t the same as finishing. Before you write up, rerun your main searches to catch anything published since, and check whether any key paper has been corrected or retracted.",
      "Systematic reviews follow stricter rules, set out in advance in a protocol (Unit 5). For everything else, set a time limit, keep your alerts running, and treat the search as something you can update."
    ]}
   ],
   try:[
    {id:"t4u2-l4-x1", type:"sort", q:"Sort each action: backward or forward citation chasing?", buckets:["Backward","Forward"], items:[
      {t:"Reading a 2019 paper’s reference list", b:0, why:"A reference list points to earlier work the paper cites."},
      {t:"Clicking “Cited by” under a result in Google Scholar", b:1, why:"Cited by lists newer papers that cite this one."},
      {t:"Looking up a classic study mentioned in a paper’s introduction", b:0, why:"The introduction discusses earlier work: following it goes back in time."},
      {t:"Finding newer studies that tried to repeat a famous experiment", b:1, why:"Later replication attempts cite the original, so you find them by going forward."},
      {t:"Getting an email when a new paper cites one you rely on", b:1, why:"A citation alert is automated forward chasing."},
      {t:"Checking which sources a review article used", b:0, why:"The review’s sources are in its reference list: backward."}
    ]},
    {id:"t4u2-l4-x2", type:"mcq", q:"Mei sees a paper with 412 citations in Google Scholar and 268 in another database. What’s the most likely explanation?", options:[
      {t:"Each tool counts only citations from the documents it covers, and Google Scholar covers more kinds of documents", ok:true, why:"Google Scholar also counts theses, preprints and other web documents, so its counts are often higher."},
      {t:"One of the tools has made an error and should be ignored", why:"Different counts are normal; both can be accurate for what each tool covers."},
      {t:"The paper lost citations after a retraction", why:"Citations don’t disappear when a paper is retracted, and a retraction wouldn’t explain a gap between two tools."},
      {t:"Citation counts are random", why:"They follow from each tool’s coverage, which is why they differ in predictable ways."}
    ]},
    {id:"t4u2-l4-x3", type:"mcq", q:"Paper A (published 1998) has 900 citations. Paper B (published last year) has 12. Both study the same question. What can Sione conclude?", options:[
      {t:"Not much about quality: A has had far longer to collect citations, and counts reflect attention, not soundness", ok:true, why:"Age, field size, criticism and visibility all affect counts. He needs to read both and judge their methods."},
      {t:"Paper A is more reliable", why:"High counts can include criticism, and older papers simply had more time. Counts aren’t quality scores."},
      {t:"Paper B is probably wrong", why:"A new paper’s low count says nothing about whether it’s right."},
      {t:"He should only read Paper A", why:"Newer work may update or overturn older findings. Read both."}
    ]},
    {id:"t4u2-l4-x4", type:"order", q:"Put a round of citation chasing in a sensible order.", items:[
      {t:"Choose a highly relevant seed paper", why:"Chasing works only as well as the paper you start from."},
      {t:"Read its introduction and note the key works it cites", why:"Backward first: the introduction explains which earlier work matters."},
      {t:"Look those works up in a database to get full details", why:"Check the details and get abstracts and links rather than trusting the reference list."},
      {t:"Open “Cited by” for the seed paper and filter the citing papers", why:"Then go forward to newer work, narrowing a long list."},
      {t:"Add the new relevant papers to your list and log what you did", why:"Record the round so you know what’s covered."},
      {t:"Repeat with the best new papers as seeds", why:"The snowball grows from each new good paper until you mostly see papers you already have."}
    ]},
    {id:"t4u2-l4-x5", type:"match", q:"Match each feature to what it does.", pairs:[
      ["Cited by (Google Scholar)","Lists newer papers that cite this one","Google Scholar’s help: click Cited by to see newer papers that referenced it."],
      ["Related articles (Google Scholar)","Finds documents similar to this result","Its help suggests Related articles for exploring similar papers."],
      ["All versions (Google Scholar)","Shows other copies of the same paper on different sites","Useful for finding a freely available copy (Lesson 5)."],
      ["Similar articles (PubMed)","Compares words in titles, abstracts and MeSH headings to suggest papers","PubMed computes these with a word-weighted algorithm."],
      ["Create Alert (Semantic Scholar)","Emails you about new papers or citations for an author, paper or topic","Its FAQ describes alerts on author, paper and topic pages."]
    ]},
    {id:"t4u2-l4-x6", type:"mcq", q:"Lucía wants PubMed to email her every week when new papers match her search. What does she need?", options:[
      {t:"A free My NCBI account, then Create alert below the search box", ok:true, why:"PubMed’s help says you must sign in to My NCBI to use email alerts. The account is free."},
      {t:"A university subscription to PubMed", why:"PubMed is free; alerts need only a free My NCBI account."},
      {t:"Nothing: she can save it to the Clipboard and it updates itself", why:"The Clipboard holds items temporarily (it expires after 8 hours of inactivity) and doesn’t send alerts."},
      {t:"A paid reference manager", why:"Not needed. Alerts are built into PubMed with a free account."}
    ]},
    {id:"t4u2-l4-x7", type:"spot", q:"Dmitri wrote these notes after a workshop. Tap the statements that are wrong.", ask:"is wrong", parts:[
      {t:"“Cited by” shows newer papers that cite the one I’m reading.", flag:false, why:"Correct: that’s forward chasing."},
      " ",
      {t:"The paper with the most citations is the most reliable one.", flag:true, why:"Counts reflect attention and age, and include criticism. They aren’t quality scores."},
      " ",
      {t:"A reference list can only lead to older work.", flag:false, why:"Correct: a paper can only cite what already existed."},
      " ",
      {t:"Citation counts are the same in every tool.", flag:true, why:"Each tool counts citations from what it covers, so counts differ."},
      " ",
      {t:"Once a paper is retracted, nobody cites it any more.", flag:true, why:"Retracted papers often keep being cited, sometimes by authors unaware of the retraction."},
      " ",
      {t:"Alerts can bring new matching papers to my inbox.", flag:false, why:"Correct: Google Scholar, PubMed and Semantic Scholar all offer them."}
    ]}
   ],
   apply:{intro:"Grow your list from one good paper, then set things up so new work comes to you.", tasks:[
     {t:"Chase citations from a seed paper", how:["Pick the most relevant paper you’ve found so far.","Backward: read its introduction, pick three key works it cites, and look each one up in Google Scholar, Semantic Scholar or OpenAlex.","Forward: open its “Cited by” list in Google Scholar or the citations on its Semantic Scholar page. Note how many there are, then filter or search within them and pick three relevant newer papers.","Compare the citation counts the tools show for the seed paper."], write:"Seed paper… Backward finds… Forward finds… Citation counts in each tool…"},
     {t:"Set up an alert for your search", how:{win:["Google Scholar: run your search, click the envelope icon (**Create alert**) in the left sidebar, enter your email and confirm.","Or PubMed: sign in with a free My NCBI account, run your search and click **Create alert** below the search box."], mac:["Google Scholar: run your search, click the envelope icon (**Create alert**) in the left sidebar, enter your email and confirm.","Or PubMed: sign in with a free My NCBI account, run your search and click **Create alert** below the search box."], chromeos:["Google Scholar: run your search, click the envelope icon (**Create alert**) in the left sidebar, enter your email and confirm.","Or PubMed: sign in with a free My NCBI account, run your search and click **Create alert** below the search box."], phone:["Google Scholar rearranges its sidebar on small screens (for example, the year options move into a **Year** menu below the search box). If you can’t find the envelope icon or **Create alert**, load the desktop version of the page:","iPhone (Safari): tap the page menu button by the address bar (its icon varies with the iOS version, for example **aA**, a page icon or **⋯**) → **Request Desktop Website**. Android (Chrome): tap **⋮** → tick **Desktop site**. Other browsers have a similar option.","PubMed’s **Create alert** link appears below the search box after you sign in to My NCBI.","Semantic Scholar: open a paper, author or topic page and tap **Create Alert** (you may be asked to sign in or create a free account)."]}},
     {t:"Decide how you’ll manage alerts", how:["Name each alert clearly.","Optionally make an email filter that moves alert emails into one folder.","Put a reminder in your calendar to review alerts in three months."], write:"Alerts I set up… How I’ll manage them…"}
   ], proof:"Six new papers found by chasing citations from one seed (three backward, three forward), a note on how citation counts differed between tools, and at least one working alert."},
   read:[
     {book:"wlsf", where:"Chapter 35 “Citation Rates”", note:"A short look at what citation counts can and can’t tell you."},
     {book:"acrl", where:"Frame: “Scholarship as Conversation”", note:"Why research builds on, and argues with, earlier research."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u2-l5", title:"Getting the full text legally", minutes:50,
   hook:{q:"Which of these is a legal way to read a paywalled article without paying?", options:["Ask the author for a copy","Download it from a site that copies papers without permission","Borrow a friend’s university login","None: if it’s paywalled, you must pay"], answer:0, reveal:"**Ask the author.** Many researchers are glad to send their work to an interested reader, within what their publishing agreement allows. And asking is only one route: free legal copies often exist in repositories, libraries can get papers for you, and interlibrary loan reaches other libraries’ collections. This lesson gives you a checklist, and explains why the shortcuts in the other options are a bad idea."},
   goals:[
     "Explain why papers sit behind paywalls and why legal free versions often exist",
     "Tell a preprint, an accepted manuscript and the version of record apart",
     "Find legal free copies with Google Scholar, Unpaywall, CORE and repositories",
     "Use libraries and interlibrary loan, and write a good request to an author",
     "Explain why shadow libraries and shared logins aren’t acceptable routes"
   ],
   learn:[
    {h:"Paywalls, and why free copies exist", body:[
      {lead:"Finding a paper and being able to read it are two different problems."},
      "Many journals are paid for by subscriptions, so their articles sit behind a paywall: a library pays, or you pay per article. [[open-access-term|Open access]] journals make articles free to read instead ({{open-access|Unit 1 explains the models}}). Between the two lies a large middle ground of **legal free copies**, because one paper usually exists in more than one version:",
      {fig:'<svg viewBox="0 0 340 352"><defs><marker id="t4u2l5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-panel" x="20" y="8" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">1. Preprint</text><text class="s" x="170" y="48" text-anchor="middle">The authors’ version before peer review</text><text class="s" x="170" y="66" text-anchor="middle">Found on preprint servers</text><path class="d-ink" d="M170 80 L170 108" stroke-width="2" marker-end="url(#t4u2l5a)"/><text class="s" x="180" y="98">peer review, revisions</text><rect class="d-sage" x="20" y="112" width="300" height="88" rx="8" stroke-width="2"/><text x="170" y="134" text-anchor="middle">2. Accepted manuscript</text><text class="s" x="170" y="152" text-anchor="middle">Content after peer review, in the</text><text class="s" x="170" y="168" text-anchor="middle">authors’ own layout</text><text class="s" x="170" y="186" text-anchor="middle">Repositories, PMC; often after an embargo</text><path class="d-ink" d="M170 202 L170 230" stroke-width="2" marker-end="url(#t4u2l5a)"/><text class="s" x="180" y="220">copyediting, layout</text><rect class="d-gold" x="20" y="234" width="300" height="88" rx="8" stroke-width="2"/><text x="170" y="256" text-anchor="middle">3. Version of record</text><text class="s" x="170" y="274" text-anchor="middle">The publisher’s final, formatted</text><text class="s" x="170" y="290" text-anchor="middle">version with page numbers</text><text class="s" x="170" y="308" text-anchor="middle">Journal website: paywalled or open</text><text x="170" y="344" text-anchor="middle">Same research, three versions</text></svg>', alt:"Three stacked boxes joined by arrows. 1, Preprint: the authors’ version before peer review, found on preprint servers. After peer review and revisions, 2, Accepted manuscript: content after peer review in the authors’ own layout, in repositories and PMC, often after an embargo. After copyediting and layout, 3, Version of record: the publisher’s final formatted version with page numbers, on the journal website, paywalled or open.", cap:"Only the version of record is the publisher’s final text, but the accepted manuscript has the same peer-reviewed content."},
      {list:[
        "A [[preprint]] is shared before peer review, on servers such as arXiv (physics, mathematics, computer science and more), bioRxiv and medRxiv (biology and health) or SSRN (social sciences, law, economics).",
        "An [[author-manuscript|accepted manuscript]] (sometimes called a postprint) is the authors’ final text after peer review. Many authors may, or must, deposit it in an [[institutional-repository|institutional repository]] or a subject archive such as PubMed Central, sometimes only after an **embargo** period set by the publisher. This route is often called “green” open access.",
        "The **[[version-of-record|version of record]]** is the publisher’s final, formatted version."
      ]}
    ]},
    {h:"Step 1: look for a legal free copy", body:[
      "Start here; it takes a minute and often works.",
      {list:[
        "**Google Scholar**: look for a **[PDF]** link to the right of a result, and click **All versions** under it. Scholar groups copies from publishers, repositories and authors’ pages, and one of them may be free.",
        "**Unpaywall** is a free [[browser-extension|browser extension]] for Chrome and Firefox from the nonprofit OurResearch. On an article’s page, it looks for a free legal copy (using the article’s identifier, its [[doi|DOI]]). A **green** tab means it found one; click to open it. A **grey** tab means it found none in its index.",
        "**CORE Discovery** does a similar job, drawing on CORE’s collection of open access papers. It’s available for Chrome (and other Chromium browsers), Firefox and Opera.",
        "**Search the title** in CORE, BASE or OpenAlex. OpenAlex shows whether a work is open access, using data from Unpaywall and DOAJ.",
        "**Subject archives**: PubMed Central for health and life sciences (PubMed’s **Free full text** filter finds these), and the preprint servers above."
      ]},
      {tip:"A grey Unpaywall tab doesn’t prove no free copy exists, only that its index didn’t find one. Try Google Scholar’s All versions and a title search in CORE before giving up."}
    ]},
    {h:"Step 2: use a library", body:[
      "If there’s no free copy, a library is the next stop.",
      {list:[
        "**University libraries** license thousands of journals. With a login you can usually read them from anywhere, through the library’s website, its discovery search, or Google Scholar’s library links. (Scholar’s help explains that off-campus links work by remembering your library’s subscriptions from when you were on the campus network, for 30 days.)",
        "**Public libraries** often provide some databases and e-journals to cardholders, sometimes from home.",
        "**Visiting**: many university libraries let members of the public use some resources on site. Rules differ a lot, so check the library’s visitor page first."
      ]},
      "If your library doesn’t have the item, ask for [[interlibrary-loan|interlibrary loan]] (ILL): your library borrows a book, or obtains a copy of an article, from another library that holds it. Public and university libraries both offer it in many countries. It can take from a day to a few weeks, and some libraries charge a fee. WorldCat (Lesson 3) shows which libraries hold an item, which helps you and your library ask in the right place."
    ]},
    {h:"Step 3: ask the author", body:[
      "Researchers generally want their work read. The **corresponding author’s** email address is usually on the article’s web page or first page. Many authors are glad to send a copy; what they may share depends on their agreement with the publisher, so don’t take it personally if one can’t.",
      {ex:"Subject: Request for a copy of your 2024 article on rural clinic wait times\n\nDear Dr Okafor,\n\nI’m researching access to rural health care and couldn’t get your article “[full title]” ([journal, year, DOI]) through my library. If you’re able to share a copy for my private study, I’d be very grateful.\n\nThank you for your work on this topic.\n\nBest wishes,\nAna Ruiz", label:"A short, polite request (the author and article are invented)", mono:true},
      "Some researchers also post papers on academic networking sites such as ResearchGate or Academia.edu. These are commercial sites, and not every upload there is permitted by the publisher. A copy in the author’s university repository is the safer choice when there’s one."
    ]},
    {h:"What not to do", body:[
      "A [[shadow-library|shadow library]] is a website that distributes copyrighted papers or books without permission from the rights holders; Sci-Hub and Library Genesis are well-known examples. Using them to get paywalled papers **infringes copyright**. People turn to them for understandable reasons: paywalls are expensive, and many readers have no library access. But courts in several countries (for example the United States, France and India) have ruled against such sites or ordered internet providers to block them, and many universities warn against using them.",
      "Other shortcuts break rules too:",
      {list:[
        "**Sharing or borrowing a library login** breaks the library’s licence terms, can get the account blocked, and hands someone else access to your personal account.",
        "**Posting a paywalled PDF publicly** (on a blog or shared drive) is redistribution that the copyright holder hasn’t allowed."
      ]},
      "The ACRL’s frame “Information Has Value” makes the wider point: information is produced and paid for in different ways, and creators have rights. You can believe the current system should change, as many researchers do, and still use the legal routes, which succeed more often than people expect.",
      {key:"Free copy → library → interlibrary loan → author. Legal routes first, every time."}
    ]},
    {h:"Which version do you have?", body:[
      "Once you have a copy, check which version it is. Look for a cover sheet or a note on the first page (“accepted manuscript”, “preprint”, “not peer reviewed”), the journal’s layout and page numbers, or a repository’s label.",
      {list:[
        "**A preprint** hasn’t been peer reviewed. Look for a published version: Google Scholar’s All versions, or a link on the preprint page. Results can change between preprint and publication, and some preprints are never published.",
        "**An accepted manuscript** has the peer-reviewed content but not the publisher’s page numbers. For exact quotations, check the version of record if you can, or say which version you used (Unit 4 covers citing).",
        "**Whatever the version**, check whether the paper has been corrected or retracted ({{retractions|Unit 1}})."
      ]}
    ]},
    {h:"A full-text checklist", body:[
      {ol:[
        "Google Scholar: [PDF] link, then **All versions**.",
        "An open-copy finder (Unpaywall or CORE Discovery), or a title search in CORE, BASE or OpenAlex.",
        "Subject archives and preprint servers (for example PubMed Central, arXiv).",
        "Your library: university login or public library card.",
        "Interlibrary loan through your library.",
        "Email the corresponding author.",
        "Still nothing? Use what you can read (the abstract, other papers citing it), and be honest: never cite a paper as though you’d read it in full when you’ve only seen the abstract."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“If it’s paywalled, there’s no legal free copy.”** Accepted manuscripts and preprints of paywalled papers are often free in repositories.",
        "**“Free means pirated.”** Repository copies, open access journals and author-shared copies are legal.",
        "**“Shadow libraries are fine because everyone uses them.”** Popularity doesn’t change copyright law, and courts in several countries have ruled against these sites.",
        "**“Interlibrary loan is only for university students.”** Many public libraries offer it too."
      ]}
    ]}
   ],
   try:[
    {id:"t4u2-l5-x1", type:"sort", q:"Sort each way of getting a paywalled article.", buckets:["Legal route","Not acceptable"], items:[
      {t:"Opening a repository copy that Unpaywall’s green tab finds", b:0, why:"Unpaywall points to free copies in legal sources such as repositories and open journals."},
      {t:"Emailing the corresponding author to ask for a copy", b:0, why:"Asking is legal; the author decides what their agreement lets them share."},
      {t:"Requesting it through a public library’s interlibrary loan", b:0, why:"ILL is a standard library service for getting items from other libraries."},
      {t:"Downloading it from a shadow library", b:1, why:"Shadow libraries distribute copyrighted papers without permission; using them infringes copyright."},
      {t:"Using a friend’s university login", b:1, why:"It breaks the library’s licence terms and puts your friend’s account at risk."},
      {t:"Reading the author’s accepted manuscript in their university repository", b:0, why:"Depositing accepted manuscripts in repositories is the “green” open access route."}
    ]},
    {id:"t4u2-l5-x2", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Preprint","The authors’ version shared before peer review","Preprints are posted on servers such as arXiv or medRxiv before (or without) peer review."],
      ["Accepted manuscript","The authors’ final text after peer review, without the publisher’s layout","Also called a postprint; often deposited in repositories."],
      ["Version of record","The publisher’s final formatted version","The one with the journal’s layout and page numbers."],
      ["Embargo","A delay before a repository copy can be made public","Publishers may set a period after publication before the accepted manuscript can be free."]
    ]},
    {id:"t4u2-l5-x3", type:"order", q:"Put Kenji’s full-text hunt in a sensible order, quickest and easiest first.", items:[
      {t:"Check Google Scholar for a [PDF] link and All versions", why:"Fast and free; it often finds a repository or author copy."},
      {t:"Try an open-copy finder or a title search in CORE or BASE", why:"These search open sources that Scholar may have missed."},
      {t:"Look in his public library’s online databases", why:"If no free copy exists, a library may license it."},
      {t:"Ask the library for an interlibrary loan", why:"If his library doesn’t have it, it can request it from another library."},
      {t:"Email the corresponding author", why:"Also worth doing in parallel; authors can often share a copy."}
    ]},
    {id:"t4u2-l5-x4", type:"mcq", q:"Priya installs Unpaywall. On one article page the tab is grey. What does that mean?", options:[
      {t:"Unpaywall didn’t find a free legal copy in its index; one might still exist elsewhere", ok:true, why:"Grey means none found by Unpaywall. Try Google Scholar’s All versions, CORE, the library or the author."},
      {t:"The article has been retracted", why:"The tab’s colour is about free copies, not about corrections or retractions."},
      {t:"No free copy exists anywhere", why:"Unpaywall’s index is large but not complete, so grey isn’t proof."},
      {t:"The extension is broken", why:"Grey is a normal result meaning no free copy was found."}
    ]},
    {id:"t4u2-l5-x5", type:"mcq", q:"Hana found a free accepted manuscript of a paper. She wants to quote one sentence with a page number. What’s the best approach?", options:[
      {t:"Use the version of record for the page number if she can reach it; otherwise quote from the manuscript and say that’s the version she used", ok:true, why:"The accepted manuscript has the peer-reviewed text but not the journal’s page numbers. Being clear about the version keeps the citation honest."},
      {t:"Use the page number from the manuscript as if it were the journal’s", why:"The manuscript’s pages don’t match the published version, so a reader couldn’t find the quote."},
      {t:"Don’t use the manuscript at all, because it isn’t peer reviewed", why:"An accepted manuscript has been through peer review; it’s the preprint that hasn’t."},
      {t:"Quote it without any page number or citation", why:"Quotations always need a citation, and usually a page or location (Unit 4)."}
    ]},
    {id:"t4u2-l5-x6", type:"spot", q:"Tomás drafted this email to an author. Tap the parts that could cause problems.", ask:"could cause a problem", parts:[
      {t:"Dear Professor Nakamura,", flag:false, why:"A polite, normal greeting."},
      " ",
      {t:"I couldn’t access your 2023 article on coastal erosion through my library.", flag:false, why:"Explains the situation briefly and identifies the article."},
      " ",
      {t:"Could you send me a copy for my own study?", flag:false, why:"A clear request for private study, which authors can often help with."},
      " ",
      {t:"I’ll also post it on my public blog so everyone can read it.", flag:true, why:"Public reposting is redistribution the author may not be allowed to approve; it can put them in breach of their agreement."},
      " ",
      {t:"If that’s difficult, could you send me your university login instead?", flag:true, why:"Logins are personal; sharing one breaks licence terms and risks the account."},
      " ",
      {t:"Thank you for your work on this topic.", flag:false, why:"A courteous close."}
    ]},
    {id:"t4u2-l5-x7", type:"mcq", q:"Fatima needs a 1990s book chapter. Her public library doesn’t hold the book, and no free copy exists. What’s the best next step?", options:[
      {t:"Ask her public library for an interlibrary loan, using WorldCat to show which libraries hold the book", ok:true, why:"ILL is designed for this, and many public libraries offer it, sometimes for a small fee."},
      {t:"Give up: if her library doesn’t have it, she can’t get it", why:"Interlibrary loan exists exactly for items a library doesn’t hold."},
      {t:"Download it from a shadow library", why:"That infringes copyright; ILL is a legal route."},
      {t:"Cite it anyway based on its title", why:"Citing what you haven’t read misrepresents your research."}
    ]}
   ],
   apply:{intro:"Practise the legal routes on real papers. Everything here works without a university login; with one, add your library’s links.", tasks:[
     {t:"Install an open-copy finder (optional)", how:{win:["In Chrome or Firefox, open the browser’s extension store (Chrome Web Store or Firefox Add-ons) and search for **Unpaywall** or **CORE Discovery**.","Check the publisher is OurResearch/Impactstory (Unpaywall) or the CORE team (CORE Discovery), then add it.","Microsoft Edge can also install extensions from the Chrome Web Store once you allow extensions from other stores.","Extensions change: if the store no longer lists one of them for your browser, use the other, or skip to the next task."], mac:["In Chrome or Firefox, open the extension store and search for **Unpaywall** or **CORE Discovery**; check the publisher, then add it.","Safari isn’t supported by either extension, so use Chrome or Firefox for this, or skip to the next task."], chromeos:["In Chrome, open the Chrome Web Store, search for **Unpaywall** or **CORE Discovery**, check the publisher and click **Add to Chrome**."], phone:["Android: Firefox for Android lists the Unpaywall add-on (menu → **Extensions** or **Add-ons**). Most other mobile browsers don’t run these extensions.","iPhone: neither extension is available. Use Google Scholar’s **All versions** and a title search on core.ac.uk instead."]}},
     {t:"Hunt for full texts", how:["Pick three papers from your search log that you haven’t been able to read.","Work through the checklist for each: Google Scholar [PDF] and All versions; an open-copy finder or a CORE/BASE title search; your library.","For each, note the route that worked and which version you found (preprint, accepted manuscript or version of record)."], write:"Paper 1: route… version… Paper 2: … Paper 3: …"},
     {t:"Draft a request to an author", how:["Choose one paper you still can’t read and find the corresponding author’s email on its page.","Write a short, polite request: who you are, why you’re interested, the full reference, and that it’s for private study.","Send it only if you genuinely want the paper."], write:"Dear…"}
   ], proof:"Notes on three full-text hunts (route and version for each), and a polite draft request to an author."},
   read:[
     {book:"acrl", where:"Frame: “Information Has Value”", note:"Why access, cost and creators’ rights are part of information literacy."}
   ]
  }
  ],
  checkpoint:["t4u2-q02","t4u2-q05","t4u2-q10","t4u2-q12","t4u2-q14","t4u2-q19","t4u2-q21","t4u2-q26","t4u2-q28","t4u2-q31","t4u2-q35","t4u2-q38"],
  codex:[
   {id:"search-strategy", title:"Planning a research search", aka:["search strategy","concept table","keyword grid","search log","precision and recall"], tags:["research","search"],
    summary:"Turning a topic into a question, concepts and search terms; balancing precision and recall; and logging searches so they can be repeated.",
    levels:{
     starter:[
      "A research search isn’t one query; it’s a plan you improve as you go.",
      {ol:[
        "Turn your topic into a question: “Does using a phone at bedtime affect how teenagers sleep?”",
        "Pick out the two to four **concepts**: phone use, sleep, teenagers. Leave out question words and relationship words like “affect”.",
        "List several words for each concept: teenagers, adolescents, youth, young people.",
        "Search, read the best results, borrow their words, and search again."
      ]},
      "Two ideas tell you how well a search worked. **Precision**: how much of what you found is relevant. **Recall**: how much of what’s relevant you found. Adding synonyms improves recall; adding concepts and phrases improves precision.",
      {key:"Write down every search that matters: the date, the tool, the exact words, filters and the number of results."}
     ],
     builder:[
      "**Concept tables.** One column per concept; synonyms, spelling variants (behaviour/behavior), singular and plural, abbreviations (ADHD), technical and everyday terms (myocardial infarction/heart attack), broader and narrower terms, and older terms. Words in a column are later joined with OR, columns with AND ({{boolean-search}}).",
      "**Where words come from.** Encyclopedias and textbooks, the titles, abstracts and keywords of relevant papers, a database’s thesaurus ({{subject-headings}}), librarians, and AI chatbots for brainstorming synonyms only (they can invent references).",
      "**Calculating precision and recall.** If a search returns 200 results of which 40 are relevant, precision is 40 ÷ 200 = 20%. If the database holds 80 relevant items, recall is 40 ÷ 80 = 50%. You rarely know the true total, so estimate recall with **known items**: papers you already know are relevant. If your search misses one, study how it describes your concepts.",
      {table:[
        ["Task","Priority"],
        ["Quick evidence check or short essay","Precision"],
        ["Thesis literature review","Balance, tilted to recall"],
        ["Systematic review","Recall"]
      ]},
      "**Search logs.** Date, tool, exact string (pasted), filters, result count, notes on what to change. Results change over time and differ between tools, so a log is the only way to repeat or report a search honestly."
     ],
     pro:[
      "Professional searchers (often health or academic librarians) treat a search as an auditable method, not a private activity:",
      {list:[
        "**Test against a benchmark set.** Collect known relevant papers before finalising the search (from experts, key reviews or citation chasing) and check the strategy retrieves them. Missing items reveal missing vocabulary.",
        "**Separate concepts from limits.** Population, intervention and outcome are concepts; year, language and publication type are limits, applied with filters and reported separately. Language limits in particular can bias a review toward English-language findings.",
        "**Avoid outcome and direction words.** Searching for “reduce” or “improve” biases results toward positive findings.",
        "**Translate, don’t copy.** A strategy written for one database must be rewritten for each other one, because syntax, field tags and subject headings differ. Log every version.",
        "**Peer review the search.** For systematic reviews, a second searcher often checks the strategy before it’s run; Unit 5 covers reporting standards such as {{prisma|PRISMA}}."
      ]},
      "The ACRL Framework’s frame “Searching as Strategic Exploration” describes the same habits for any learner: searching is iterative, needs flexibility, and depends on matching your language and tools to the question.",
      "Precision and recall come from information retrieval research, where they’re measured against a full set of relevance judgements. In everyday research you only ever estimate them, so treat any percentage as a rough guide."
     ]
    },
    related:["boolean-search","subject-headings","academic-databases","search-skills"],
    read:[{book:"acrl", where:"Frame: “Searching as Strategic Exploration”"}],
    sources:[{t:"University of York Library: Advanced searching", url:"https://subjectguides.york.ac.uk/searching/advanced"},{t:"Google Scholar Help", url:"https://scholar.google.com/intl/en/scholar/help.html"}], checked:"2026-11"},

   {id:"boolean-search", title:"Boolean, phrase and truncation searching", aka:["Boolean operators","AND OR NOT","truncation","wildcards","phrase searching","field searching"], tags:["research","search"],
    summary:"Combining search terms with AND, OR, NOT and brackets; quoting phrases; truncating word stems; and how Google Scholar, PubMed, OpenAlex and Semantic Scholar differ.",
    levels:{
     starter:[
      "Three words control most research searches:",
      {list:[
        "`AND`: every word must appear. Fewer results.",
        "`OR`: any of the words may appear. More results. Use it for synonyms.",
        "`NOT`: drop records with a word. Fewer results, and use it carefully: it removes every record that mentions the word."
      ]},
      "Brackets group words, as in arithmetic: `(teenagers OR adolescents) AND sleep`.",
      "Quotation marks keep words together as a phrase: `\"screen time\"`. An asterisk often finds every ending of a word: `adolescen*` finds adolescent, adolescents and adolescence.",
      {warn:"Not every tool supports every symbol. Google Scholar, Semantic Scholar and OpenAlex have no truncation, and Semantic Scholar ignores Boolean operators."},
      "Think of each word as a set of records. AND keeps only the overlap, OR merges the sets, and NOT cuts one set out of another. Sketching two overlapping circles is the quickest way to check what a search will do."
     ],
     builder:[
      "**From concept table to string**: OR inside each concept’s bracket, AND between brackets, quotation marks for fixed phrases, truncation where supported.",
      {ex:"(teenager* OR adolescen* OR youth)\nAND (smartphone* OR \"mobile phone*\" OR \"screen time\")\nAND sleep*", mono:true},
      "**What each tool documents** (checked November 2026):",
      {table:[
        ["Tool","Operators","Truncation"],
        ["Google Scholar","Spaces act as AND; `OR`; minus excludes; `author:`, `intitle:`; quotes","None; some word forms matched automatically"],
        ["PubMed","`AND` `OR` `NOT` in capitals; brackets; left to right; quotes; field tags such as `[tiab]`","`*` after at least 4 letters"],
        ["OpenAlex","`AND` `OR` `NOT` in capitals; brackets; quotes","None (`*` and `?` are removed); word endings matched automatically"],
        ["Semantic Scholar","Quotes only; no Boolean operators","None"]
      ]},
      "**Order of operations** differs: PubMed processes left to right, so `allergy AND cats OR dogs` means `(allergy AND cats) OR dogs`. Brackets make your meaning explicit.",
      "**Field searching** limits words to the title, abstract, author or subject fields: PubMed’s `[ti]`, `[tiab]`, `[au]`, `[mh]`; Google Scholar’s `author:` and Advanced search; drop-down menus in most library databases.",
      "**Check your work** by comparing result counts as you add each part, and by confirming that papers you already know are relevant still appear."
     ],
     pro:[
      "Details that catch experienced searchers:",
      {list:[
        "**PubMed phrases** are checked against a phrase index. If a quoted phrase isn’t in it, the quotes are ignored and the terms go through automatic term mapping. Quotes, truncation and field tags all switch automatic term mapping off. The Search Details feature shows the translation.",
        "**PubMed phrase truncation** is possible: `\"breast feed*\"`, `breast feed*[tiab]` or `breast-feed*`.",
        "**Proximity**: PubMed supports `\"search terms\"[tiab:~N]`, where N is the maximum number of words between the terms, in the title, title/abstract and affiliation fields. Subscription platforms (EBSCOhost, ProQuest, Ovid and others) have their own proximity syntax, which varies by provider.",
        "**Wildcards inside words** (`organi?ation`) exist in some tools; symbols differ and some tools have none.",
        "**Truncation stems** that are too short bring noise (`cat*`), and in PubMed truncation can reduce results by switching off term mapping.",
        "**Google Scholar** doesn’t document brackets, has no truncation, and expands some word forms automatically. Run several short searches rather than one long one. Some library guides list `~` for synonyms; it isn’t in Google Scholar’s own help, so don’t rely on it."
      ]},
      "Always check: do your known items appear, and does the count change sensibly when you add or remove one element? A string that silently fails (an unmatched bracket, lowercase operators, an unsupported symbol) can look like a normal search."
     ]
    },
    related:["search-strategy","subject-headings","google-scholar","search-skills"],
    sources:[{t:"PubMed User Guide (Help)", url:"https://pubmed.ncbi.nlm.nih.gov/help/"},{t:"Semantic Scholar FAQ: Does Semantic Scholar support Boolean search terms?", url:"https://www.semanticscholar.org/faq/boolean-queries"},{t:"University of Pittsburgh Library System: Google Scholar search tips", url:"https://pitt.libguides.com/googlescholar/searchtips"}], checked:"2026-11"},

   {id:"academic-databases", title:"Academic databases and open indexes", aka:["research databases","bibliographic databases","PubMed","ERIC","OpenAlex","BASE","CORE","Semantic Scholar","DOAJ","Microsoft Academic"], tags:["research","search"],
    summary:"Subject databases, broad academic search engines and free open indexes: what each kind covers, today’s main free examples, and their limits.",
    levels:{
     starter:[
      "An academic [[database-academic|database]] is a searchable collection of **records** describing research: title, authors, journal, year, abstract, subjects and links. Many hold descriptions and link to the full text elsewhere.",
      "Free ones anyone can use:",
      {list:[
        "**PubMed**: health and life sciences, from the US National Library of Medicine.",
        "**ERIC**: education research, sponsored by the US Department of Education.",
        "**OpenAlex**: all fields, run by a nonprofit.",
        "**BASE** and **CORE**: research held in university repositories, including theses and reports.",
        "**Semantic Scholar**: all sciences, with AI-generated short summaries for some papers.",
        "**DOAJ**: open access journals and their articles."
      ]},
      "Others, such as PsycInfo, Scopus or Web of Science, usually need a library subscription.",
      {tip:"Search at least two places: one broad tool and one built for your field."}
     ],
     builder:[
      {table:[
        ["Tool","Run by","Notes"],
        ["PubMed","US National Library of Medicine","MeSH subject headings; Free full text filter; links to PubMed Central"],
        ["ERIC","Institute of Education Sciences (US)","Thesaurus descriptors; Peer reviewed only and Full text available on ERIC filters"],
        ["OpenAlex","OurResearch (nonprofit), since January 2022","All fields; filters; open data; records can lack abstracts"],
        ["BASE","Bielefeld University Library, Germany","Harvests repository records; good for grey literature"],
        ["CORE","Began at the Open University, UK","Open access papers from repositories and journals, many with full text"],
        ["Semantic Scholar","Ai2 (Allen Institute for AI)","Quotes but no Boolean; TLDRs for computer science and biomedicine; alerts"],
        ["DOAJ","Independent, donation-funded","Index of open access journals"]
      ]},
      "**Subject databases** select their sources and describe records consistently, often with subject headings ({{subject-headings}}). **Broad engines** such as {{google-scholar|Google Scholar}} crawl widely and mix document types. **Open indexes** publish their data openly; librarians describe them as more inclusive of other languages and regions than the big commercial databases, but with less complete records, so quality checks are up to you.",
      "**Tools change.** Microsoft Academic, once a major free index, stopped updating its data (the Microsoft Academic Graph) on 31 December 2021. OpenAlex launched in January 2022 as a free successor built from that data plus other sources. When a tool disappears, look for one that fills the same role."
     ],
     pro:[
      "Choosing and combining tools well:",
      {list:[
        "**Coverage differs by design.** Curated databases list the journals they index; Google Scholar doesn’t publish a full list. Open indexes depend on what publishers, repositories and other sources expose, so metadata quality varies by publisher and region.",
        "**Citation data differs too.** Counts in Google Scholar, Semantic Scholar, OpenAlex, Scopus and Web of Science disagree because each counts citations only from what it covers ({{citation-chasing}}).",
        "**Records are not full text.** PubMed describes articles; PubMed Central holds free full text, some of it released after a publisher’s embargo. ERIC hosts full text only for part of its collection.",
        "**Platform versus database.** The same database (for example ERIC) can be searched free on its own site or through paid platforms such as EBSCOhost or ProQuest, each with different syntax and features.",
        "**Data reuse.** OpenAlex makes its data available through an API and downloads for analysing research at scale, with usage limits on the free service.",
        "**AI features** (summaries, “research feeds”, semantic search) help exploration, but check each suggested paper and summary against the paper itself."
      ]},
      "For systematic work, librarians usually recommend several databases plus citation chasing and grey-literature searching, because no single source has adequate recall."
     ]
    },
    related:["library-catalogues","google-scholar","subject-headings","full-text-access"],
    sources:[{t:"Semantic Scholar FAQ", url:"https://www.semanticscholar.org/faq"},{t:"PubMed Central: PMC User Guide", url:"https://pmc.ncbi.nlm.nih.gov/about/userguide/"},{t:"OpenAlex blog: We’re building a replacement for Microsoft Academic Graph (2021)", url:"https://blog.openalex.org/?p=1768"}], checked:"2026-11"},

   {id:"library-catalogues", title:"Library catalogues, WorldCat and discovery search", aka:["library catalog","OPAC","WorldCat","discovery service","discovery layer"], tags:["research","libraries"],
    summary:"What a library catalogue lists, how WorldCat finds libraries holding an item, what discovery search adds, and what a library card or university login gives you.",
    levels:{
     starter:[
      "A [[library-catalogue|library catalogue]] is the searchable list of what a library owns or licenses: books and e-books, journals, theses, films and more. It usually lists journals by title, not their individual articles.",
      "**WorldCat**, from the library cooperative OCLC, combines catalogues from libraries around the world. You can search it free at WorldCat.org and see which libraries hold an item, sorted by distance from you.",
      "Many libraries also offer **discovery search**: one search box covering the catalogue plus articles from the databases the library pays for.",
      {key:"Your library card or university login is a key: it unlocks paid content, databases, interlibrary loan and expert help."},
      "If your library doesn’t hold something, it can often get it from another library for you (interlibrary loan). WorldCat helps you see who has it."
     ],
     builder:[
      "**Catalogue searching.** Search by title, author, subject or identifier (such as an ISBN). Use the record’s **subject** links to find similar books; many libraries use Library of Congress Subject Headings or a national equivalent.",
      "**WorldCat.org.** OCLC describes WorldCat as “the world’s most comprehensive database of information about library collections”. It estimates your location from your internet address (you can change it), lists holding libraries by distance, and a **Borrow** link takes you to a library’s own catalogue to request the item, where you may need to sign in or pay a fee. It’s also a reliable way to find the exact edition before asking for an interlibrary loan.",
      "**Discovery search** (products include WorldCat Discovery, Primo and EBSCO Discovery Service) searches the library’s physical and electronic collections, licensed article databases and open content in one box, and shows what you can access. It’s broad, but less precise than searching a subject database directly, so use both.",
      "**What access adds**: licensed full text and e-books, subscription databases, interlibrary loan and librarians’ help. Public libraries often provide some databases and e-resources to cardholders; contents vary widely.",
      "**Ask a librarian.** Most libraries offer help by chat, email or appointment, often for members of the public as well as students; they can point you to catalogue features and databases that fit your question."
     ],
     pro:[
      {list:[
        "**Catalogue versus index.** A catalogue describes items a library holds; an article index describes articles. Discovery systems merge both, so results depend on which indexes the library has switched on and licensed.",
        "**Access links.** Library access often works through a proxy (you sign in once and the library’s address is added to links) or through a link resolver that checks your library’s holdings. Google Scholar’s library links use these: on campus they appear automatically; off campus they rely on subscriptions recorded while you were on the campus network, which expire after 30 days.",
        "**Holdings are not access.** A record in WorldCat shows a library holds an item; whether you can borrow it, visit, or get a copy depends on that library’s policies.",
        "**Licences.** Licensed e-resources are usually for registered users only; walk-in access for visitors is sometimes allowed on site. Sharing logins breaks those licences.",
        "**Beyond books.** Catalogues are good for theses, government reports, conference proceedings and older material that broad web tools cover poorly."
      ]},
      "Librarians are the expert users of these systems. A short consultation can save hours, especially for finding a field’s key databases and its subject vocabulary.",
      "**Records can be thin.** Older items may have brief records with few subjects, so search title words and author names as well as subject headings."
     ]
    },
    related:["academic-databases","full-text-access","subject-headings"],
    sources:[{t:"OCLC Support: About WorldCat.org", url:"https://help.oclc.org/Discovery_and_Reference/WorldCat-org/Get_started_with_WorldCat-org/About_WorldCat-org"},{t:"OCLC Support: Find an item at a nearby library", url:"https://help.oclc.org/Discovery_and_Reference/WorldCat-org/Find_an_item/10Find_an_item_at_a_nearby_library"},{t:"OCLC: WorldCat Discovery", url:"https://www.oclc.org/en/worldcat-discovery.html"}], checked:"2026-11"},

   {id:"google-scholar", title:"Google Scholar", aka:["Scholar","Cited by","Related articles","All versions","library links"], tags:["research","search"],
    summary:"A free, broad search engine for scholarly literature: its documented features, its operators, and its limits for serious research.",
    levels:{
     starter:[
      "Google Scholar (scholar.google.com) searches scholarly material across the web: articles, books, theses, preprints and more. It’s free and easy, and a good place to start.",
      "Under each result you’ll find:",
      {list:[
        "**Cited by**: newer papers that cite it.",
        "**Related articles**: similar papers.",
        "**All versions**: copies on other sites, where one may be free to read.",
        "**Cite**: the reference in common styles, or for export."
      ]},
      "A **[PDF]** link on the right means a copy is available to open.",
      {warn:"Scholar mixes peer-reviewed articles with theses, preprints and course material, and doesn’t label which is which. Judge each result yourself."},
      "Use it to get started and to follow citations, then also search a database built for your field, because Scholar’s coverage and search features are limited."
     ],
     builder:[
      "Features its help page documents (checked November 2026):",
      {list:[
        "**Search**: quotation marks for phrases and titles; `author:\"d knuth\"` for authors; **Advanced search** (side menu) for author, title, publication and dates.",
        "**Time**: **Since year** and **Sort by date** (on small screens these sit in a Year menu).",
        "**Full text**: [PDF] links, library links, and **All versions** for alternatives.",
        "**Library links**: on a campus network they include your library’s subscriptions automatically; off-campus links work by remembering subscriptions from your last campus visit for 30 days, and can be turned off in Settings.",
        "**Save** to My library; **Cite** exports to BibTeX, EndNote, RefMan and RefWorks.",
        "**Alerts**: click the envelope icon, enter your email, **Create alert**. A public profile lets Scholar email you about new citations to your own papers."
      ]},
      "Library guides also document `OR`, the minus sign, and `intitle:`. Scholar has no truncation; it matches some word forms (diet/dietary) automatically and that can’t be turned off.",
      "**A good routine**: start with a short search and a quoted phrase; use **Since year** for recent work; open **Cited by** on the best results; check **All versions** when a result is paywalled; create an alert once the search works well. Log each search with the date, because results change. With a library login, library links show you copies your library pays for."
     ],
     pro:[
      "Limits to plan around:",
      {list:[
        "**Opaque coverage.** There is no full list of sources, so you can’t judge recall or report coverage. Pair it with at least one curated database.",
        "**Limited syntax.** No documented brackets, no truncation, no subject headings, no field for abstracts. Long Boolean strings behave unpredictably; run several short searches.",
        "**Mixed quality.** Material from predatory journals, unreviewed uploads and course pages can appear alongside top journals.",
        "**Unstable results.** The index and ranking change; record the date, and don’t expect a search to return the same list later.",
        "**Citation counts** include citations from theses, preprints and other web documents, so they’re usually higher than in curated databases, and can include duplicates or errors."
      ]},
      "Strengths are real: very wide coverage including grey literature and non-journal formats, version grouping that often finds legal free copies, and fast forward citation chasing. Systematic reviews sometimes use Scholar as a supplementary source rather than a main database, because of the limits above (Unit 5).",
      "**Profiles** are set up and maintained by authors themselves, so they can be incomplete or include papers that aren’t theirs. Treat them as a lead and check publication lists against other sources, such as an author’s [[orcid-id|ORCID]] record or institutional page (Unit 10)."
     ]
    },
    related:["academic-databases","citation-chasing","search-alerts","full-text-access"],
    sources:[{t:"Google Scholar Help", url:"https://scholar.google.com/intl/en/scholar/help.html"},{t:"University of Pittsburgh Library System: Google Scholar search tips", url:"https://pitt.libguides.com/googlescholar/searchtips"}], checked:"2026-11"},

   {id:"subject-headings", title:"Subject headings and controlled vocabularies", aka:["MeSH","Medical Subject Headings","ERIC Thesaurus","descriptors","Library of Congress Subject Headings","thesaurus"], tags:["research","search"],
    summary:"Standard terms indexers assign to records (MeSH, ERIC descriptors, LCSH), and how to combine them with keywords.",
    levels:{
     starter:[
      "Authors use different words for the same idea: teenagers, adolescents, youth. Many databases solve this by tagging every record with standard terms chosen from a fixed list. These are [[subject-heading|subject headings]], and the list is a [[controlled-vocabulary|controlled vocabulary]] (or thesaurus).",
      "Searching one heading finds records on that idea **whatever words the authors used**.",
      {list:[
        "PubMed uses **MeSH** (Medical Subject Headings).",
        "ERIC uses its own **Thesaurus** of descriptors.",
        "Many library catalogues use **Library of Congress Subject Headings**."
      ]},
      {tip:"Easy way in: open one relevant record, look at its subject headings, and search with the useful ones."},
      "Think of subject headings as the labels on library shelves: every book on one topic sits under the same label, whatever its title says."
     ],
     builder:[
      "**Why combine headings and keywords.** Headings give consistency; keywords catch what headings miss: the newest records (not yet indexed), records never indexed with that vocabulary, and very new concepts without a heading yet. Join them with OR inside each concept.",
      {ex:"(\"Adolescent\"[mh] OR adolescen*[tiab] OR teenager*[tiab])\nAND (\"Sleep\"[mh] OR sleep*[tiab])", label:"PubMed", mono:true},
      "**PubMed** maps your plain words to MeSH automatically (automatic term mapping) and may add British/American spellings and plurals; Search Details shows what it did. Quotes, truncation and field tags switch this off, so add MeSH explicitly with `[mh]` when you use them.",
      "**ERIC** offers a Thesaurus (browse it from the search page) with options to include synonyms and older (“dead”) terms.",
      "**Library catalogues** show headings as “Subjects” on a record; clicking one lists other items with the same heading.",
      "**Finding the right heading**: browse the vocabulary (NCBI has a MeSH database; ERIC has its Thesaurus), or work backwards from a relevant record. Read each heading’s definition (often called a scope note) to check it means what you think, and note narrower and related headings that might fit too."
     ],
     pro:[
      {list:[
        "**Hierarchies.** Vocabularies such as MeSH are arranged as trees from broad to narrow. Searching a heading in PubMed normally includes the narrower headings beneath it (“explosion”); you can turn this off when you want only the broad term.",
        "**Major topic.** Indexers can mark a heading as a major topic of the article. Restricting to major topics raises precision and lowers recall.",
        "**Vocabularies change.** Headings are added, renamed and retired. Older records keep older headings, so for long time spans, check a heading’s history and add older keywords.",
        "**One vocabulary per database.** MeSH works in MEDLINE-based databases; other databases (for example CINAHL or PsycInfo) have their own thesauri. Translate headings when you move a search.",
        "**Indexing is human (and increasingly automated) judgement.** It can be inconsistent, which is another reason never to rely on headings alone."
      ]},
      "Subject headings are one of the main advantages a curated database has over Google Scholar and most open indexes. For a thorough search, use them wherever they exist.",
      "**A practical test**: run the heading-only search, the keyword-only search and the combined search, then compare counts and known items. The combined search should find everything the other two do."
     ]
    },
    related:["boolean-search","academic-databases","library-catalogues","search-strategy"],
    sources:[{t:"PubMed User Guide (Help)", url:"https://pubmed.ncbi.nlm.nih.gov/help/"},{t:"ERIC: Institute of Education Sciences", url:"https://eric.ed.gov/"}], checked:"2026-11"},

   {id:"citation-chasing", title:"Citation chasing (snowballing)", aka:["backward citation searching","forward citation searching","snowballing","pearl growing","cited by"], tags:["research","search"],
    summary:"Finding more research by following a good paper’s references (backward) and the papers that cite it (forward), and reading citation counts sensibly.",
    levels:{
     starter:[
      "Every research paper cites earlier work and is cited by later work. You can follow those links from one good paper (a **seed**):",
      {list:[
        "[[backward-citation|Backward]]: read its reference list to find older work it relied on.",
        "[[forward-citation|Forward]]: use a **Cited by** link (in Google Scholar, Semantic Scholar and others) to find newer work that cites it."
      ]},
      "This finds papers that keyword searches miss, because it follows what researchers actually read.",
      {key:"A high citation count shows attention, not quality. Old papers, popular fields and criticised papers all collect citations."},
      "Pick your seed carefully. A recent, relevant review article makes an especially good one: it cites much of the important earlier work, and newer studies cite it. Repeat the process with the best papers you find."
     ],
     builder:[
      "**Backward**: start with the introduction or literature review, where authors explain which earlier work matters; look for works cited by several of your papers; look each one up in a database rather than trusting the reference list’s details.",
      "**Forward**: Google Scholar’s **Cited by**; Semantic Scholar’s citation lists with **highly influential citations** flagged by a machine-learning model (it depends on access to full text); PubMed’s **Cited by**, which its help says may be incomplete; OpenAlex, Scopus and Web of Science also record citations.",
      "**Why counts differ**: each tool counts only citations from documents it covers. Google Scholar, which includes theses and web documents, is usually highest.",
      "**Taming long lists**: sort by date, search within citing papers for one of your concepts, and start with recent reviews.",
      "**Repeat**: use the best new papers as seeds until you mostly see papers you already have.",
      "**Keep track.** Add each paper you keep to your list or reference manager, note which seed it came from, and record each round in your search log so you can describe how you found it. Watch for duplicates: one study can appear as a preprint, a conference paper and a journal article.",
      "**Similar-paper features** complement chasing: Google Scholar’s Related articles, PubMed’s Similar articles and Semantic Scholar’s Research Feeds suggest papers that share words or readers with your seed, even when neither cites the other."
     ],
     pro:[
      {list:[
        "**Citation bias.** Authors cite selectively, favouring supportive, well-known or same-language work; chasing inherits that bias. Balance it with database searching.",
        "**Retracted and corrected papers** continue to be cited. Check the status of influential seeds (Unit 1).",
        "**Field normalisation.** Citation rates differ across fields and years, so raw counts can’t compare papers from different fields or ages. Bibliometric indicators try to adjust for this; treat them with care.",
        "**Coverage-dependent features.** “Influential” or “background/method/result” citation labels depend on full-text access and automated classification, and can be wrong.",
        "**Reporting.** Systematic reviews report citation chasing as a separate search method, including which seeds and tools were used (Unit 5).",
        "**Visual tools** that map citation networks can speed exploration; check every suggested paper exists and is relevant."
      ]},
      "**Two directions, different dependencies.** Backward chasing needs only the paper; forward chasing depends on a citation index, so results vary by tool. For thorough work, chase forward in at least two tools and remove duplicates. **Timing**: very recent seeds have few citing papers yet, so set a citation alert on them instead.",
      "**Citation context.** Some tools show the sentence in which a paper is cited. Reading a few of those quickly tells you whether later work builds on the seed, uses its method, or disputes it, which is more informative than the count."
     ]
    },
    related:["search-alerts","google-scholar","academic-databases","search-strategy"],
    read:[{book:"wlsf", where:"Chapter 35 “Citation Rates”"},{book:"acrl", where:"Frame: “Scholarship as Conversation”"}],
    sources:[{t:"Google Scholar Help", url:"https://scholar.google.com/intl/en/scholar/help.html"},{t:"Semantic Scholar FAQ", url:"https://www.semanticscholar.org/faq"},{t:"PubMed User Guide (Help)", url:"https://pubmed.ncbi.nlm.nih.gov/help/"}], checked:"2026-11"},

   {id:"search-alerts", title:"Search and citation alerts", aka:["email alerts","saved searches","My NCBI","table of contents alerts","research feeds"], tags:["research","search"],
    summary:"Getting new research sent to you: alerts in Google Scholar, PubMed and Semantic Scholar, journal alerts, and keeping them manageable.",
    levels:{
     starter:[
      "A [[search-alert|search alert]] reruns a search for you and sends an email when something new matches. It keeps a project up to date without repeating the search by hand.",
      {list:[
        "**Google Scholar**: run a search, click the envelope icon, enter your email, **Create alert**.",
        "**PubMed**: needs a free My NCBI account; then **Create alert** for a search.",
        "**Semantic Scholar**: **Create Alert** on an author, paper or topic page.",
        "**Journals**: many offer table-of-contents emails or feeds for new issues."
      ]},
      {tip:"Name each alert clearly and review them every few months."},
      "Alerts work best once your search is good. If a search brings lots of irrelevant results today, its alert will fill your inbox with more of them, so refine first, then save."
     ],
     builder:[
      "**Google Scholar** sends alerts soon after new papers are added to its index, usually several times a week (its help page). Alerts can follow a search, and a public Scholar profile brings emails about new citations to your own papers.",
      "**PubMed** keeps saved searches and email alerts in My NCBI, which requires signing in; you choose how often they’re sent. The Clipboard, by contrast, needs no account but expires after 8 hours of inactivity.",
      "**Semantic Scholar** offers alerts for an author (new papers or new citations), for a paper, and for a topic. Its Research Feeds recommend papers based on ones you rate; its FAQ suggests rating about five relevant and three not-relevant papers to start.",
      "**Keeping them useful**: alerts inherit the precision of the search behind them, so refine the search first. Use an email filter to file alerts in one folder ({{email-rules-filters|email rules and filters}}), and log each alert alongside your searches.",
      "**Citation alerts** are worth setting on the two or three papers most central to your work: if someone builds on, replicates or challenges them, you’ll hear about it.",
      "**Which tool for which alert**: use a database alert (such as PubMed’s) for your main topic search, Google Scholar for broad coverage including theses and preprints, and a citation alert for key papers. Two or three well-chosen alerts beat a dozen vague ones."
     ],
     pro:[
      {list:[
        "**Updating reviews.** For long projects, rerun the full search strategy before writing up rather than relying only on alerts, and log the rerun date.",
        "**Citation alerts as quality control.** Alerts on key papers show new replications, critiques, corrections or retractions.",
        "**Feeds.** Many journals and some databases offer RSS or Atom feeds, which a feed reader can collect in one place without filling your inbox.",
        "**Privacy.** Alerts tie your interests to an account and email address. Use an address you’re comfortable using for the purpose, and remove alerts you no longer need.",
        "**Recommendation feeds** are personalised and can narrow what you see, much like any recommendation system; keep a few plain keyword alerts too."
      ]},
      "**Overlap and clean-up.** The same new paper may arrive from several alerts; if one alert never brings anything the others miss, delete it. When a project ends, switch its alerts off, or they’ll keep arriving for years. In a team, let one person own each alert and share relevant finds rather than everyone setting up the same ones.",
      "**Alerts are not a search method on their own.** For reporting, describe the searches behind them and when you last ran them in full; an inbox of alerts is not a record of what you searched."
     ]
    },
    related:["citation-chasing","google-scholar","search-strategy"],
    sources:[{t:"Google Scholar Help", url:"https://scholar.google.com/intl/en/scholar/help.html"},{t:"Semantic Scholar FAQ: Managing alerts", url:"https://www.semanticscholar.org/faq/manage-alerts"},{t:"PubMed User Guide (Help)", url:"https://pubmed.ncbi.nlm.nih.gov/help/"}], checked:"2026-11"},

   {id:"full-text-access", title:"Getting the full text legally", aka:["paywalls","Unpaywall","CORE Discovery","interlibrary loan","green open access","author manuscripts","Sci-Hub"], tags:["research","libraries","copyright"],
    summary:"Legal routes to a paper’s full text (open copies, libraries, interlibrary loan, authors), the versions of a paper, and why shadow libraries aren’t one of them.",
    levels:{
     starter:[
      "When a paper is behind a paywall, try these legal routes in order:",
      {ol:[
        "Google Scholar: a [PDF] link or **All versions**.",
        "A free tool such as the Unpaywall or CORE Discovery browser extension.",
        "Your library (university login or public library card).",
        "[[interlibrary-loan|Interlibrary loan]] from another library.",
        "Email the author and ask for a copy."
      ]},
      "Free legal copies exist because authors often post their accepted manuscripts in repositories, and many papers have preprints.",
      {warn:"A [[shadow-library|shadow library]] (such as Sci-Hub) distributes copyrighted papers without permission. Using one infringes copyright. Stick to the legal routes."},
      "If nothing works, you can still read the abstract and papers that cite it, but don’t cite the paper as if you’d read all of it."
     ],
     builder:[
      {table:[
        ["Version","What it is","Where"],
        ["Preprint","Before peer review","Preprint servers (arXiv, bioRxiv, medRxiv, SSRN…)"],
        ["Accepted manuscript","After peer review, authors’ layout","Repositories, PMC; often after an embargo"],
        ["Version of record","Publisher’s final version","Journal site"]
      ]},
      "**Unpaywall** (from the nonprofit OurResearch) is a Chrome and Firefox extension: a green tab on an article page links to a free legal copy; a grey one means none was found in its index. The Firefox add-on also installs on Firefox for Android. **CORE Discovery** does a similar job for Chrome and other Chromium browsers, Firefox and Opera.",
      "**Libraries**: university logins work off campus; public libraries often offer some e-resources; interlibrary loan obtains items from other libraries, sometimes for a fee and over days or weeks.",
      "**Authors**: the corresponding author’s email is on the article page. What they may share depends on their publishing agreement.",
      "**Check the version** before quoting: page numbers belong to the version of record.",
      "**Repositories worth knowing**: university and national repositories (searchable through BASE or CORE), PubMed Central for health research, and subject preprint servers. Search a paper’s exact title in quotation marks to find copies."
     ],
     pro:[
      {list:[
        "**Green open access** depends on publisher and funder policies that set which version may be shared, where, and after what embargo. Some funders require deposit (for example, PMC holds peer-reviewed author manuscripts of funded research).",
        "**Licences matter for reuse.** Free to read isn’t always free to reuse; check the licence (for example a Creative Commons licence) before redistributing or adapting.",
        "**Academic networking sites** (ResearchGate, Academia.edu) are commercial; uploads there aren’t always permitted by publishers, and copies may be removed. Prefer repository copies.",
        "**Shadow libraries** have faced court rulings and blocking orders in several countries. Beyond the legal issue, institutions may treat their use as a breach of IT or library rules.",
        "**Preprint to publication.** Many preprints later appear in journals, sometimes with changed results; some never do. Check for a published version before relying on one.",
        "**Access programmes** exist for some groups (for example, schemes giving institutions in lower-income countries reduced-cost access), usually through an institution rather than individuals; ask a librarian what applies to you."
      ]},
      "**Check the copy you found.** A file on an unfamiliar site may be an older draft, incomplete, or not what it claims. Compare its title, authors and abstract with the publisher’s record, and prefer copies from repositories, publishers or authors’ institutional pages."
     ]
    },
    related:["library-catalogues","academic-databases","google-scholar","copyright-basics"],
    read:[{book:"acrl", where:"Frame: “Information Has Value”"}],
    sources:[{t:"Unpaywall on Firefox Browser Add-ons", url:"https://addons.mozilla.org/firefox/addon/unpaywall/"},{t:"CORE Discovery", url:"https://core.ac.uk/services/discovery/"},{t:"University of Amsterdam Library: Library research hack: Unpaywall (2024)", url:"https://uba.uva.nl/en/content/news/2024/10/library-research-hack-unpaywall.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"search-term-research", term:"Search term", def:"A word or phrase you type into a search tool to stand for one of your concepts. Each concept usually needs several search terms (synonyms, spellings, technical words).", codex:"search-strategy"},
   {id:"search-string", term:"Search string", def:"The full search you type or paste into a tool: search terms joined with operators, brackets, quotation marks and symbols, such as `(teenager* OR adolescen*) AND sleep`.", codex:"boolean-search"},
   {id:"precision-recall", term:"Precision and recall", def:"Precision is the share of your results that are relevant; recall is the share of all relevant items your search found. Raising one usually lowers the other.", codex:"search-strategy"},
   {id:"boolean-operator", term:"Boolean operator", def:"AND, OR or NOT, used to combine search terms. AND narrows (all terms), OR broadens (any term), NOT excludes a term.", codex:"boolean-search"},
   {id:"phrase-search", term:"Phrase search", def:"Putting words in quotation marks so a tool looks for them together, in that order, such as `\"screen time\"`.", codex:"boolean-search"},
   {id:"truncation", term:"Truncation", def:"Searching for every ending of a word stem, usually with an asterisk: `adolescen*` finds adolescent, adolescents, adolescence. Not every tool supports it.", codex:"boolean-search"},
   {id:"database-academic", term:"Academic database", def:"A searchable collection of records describing research (title, authors, abstract, subjects, links), usually built for a field, such as PubMed for health or ERIC for education.", codex:"academic-databases"},
   {id:"library-catalogue", term:"Library catalogue", def:"The searchable list of what a library owns or licenses: books, e-books, journals, theses and more. It usually lists journals by title, not their articles.", codex:"library-catalogues"},
   {id:"discovery-search", term:"Discovery search", def:"A library’s single search box covering its catalogue plus articles from the databases it subscribes to and open content. Products include WorldCat Discovery and Primo.", codex:"library-catalogues"},
   {id:"subject-heading", term:"Subject heading", def:"A standard term an indexer assigns to a record to say what it’s about, such as a MeSH heading in PubMed. It gathers records whatever words the authors used.", codex:"subject-headings"},
   {id:"controlled-vocabulary", term:"Controlled vocabulary", def:"A fixed, managed list of terms (a thesaurus) used to describe records consistently, such as MeSH, the ERIC Thesaurus or Library of Congress Subject Headings.", codex:"subject-headings"},
   {id:"backward-citation", term:"Backward citation chasing", def:"Finding earlier work by following the references a paper cites.", codex:"citation-chasing"},
   {id:"forward-citation", term:"Forward citation chasing", def:"Finding later work by looking up the papers that cite a paper, for example with a “Cited by” link.", codex:"citation-chasing"},
   {id:"search-alert", term:"Search alert", def:"A saved search that a tool reruns automatically, emailing you when new matching records (or new citations) appear.", codex:"search-alerts"},
   {id:"interlibrary-loan", term:"Interlibrary loan (ILL)", def:"A library service that borrows a book, or obtains a copy of an article, from another library for you. Some libraries charge a fee.", codex:"full-text-access"},
   {id:"author-manuscript", term:"Accepted manuscript", def:"The authors’ final text of a paper after peer review, without the publisher’s formatting. Also called an author manuscript or postprint; often free in repositories.", codex:"full-text-access"},
   {id:"institutional-repository", term:"Institutional repository", def:"An online archive where a university or research organisation makes its researchers’ papers, theses and data available, often free to read.", codex:"full-text-access"},
   {id:"shadow-library", term:"Shadow library", def:"A website that distributes copyrighted papers or books without the rights holders’ permission, such as Sci-Hub. Using one infringes copyright.", codex:"full-text-access"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t4u2-q01", lesson:"t4u2-l1", level:1, q:"What is a “concept” when planning a research search?", options:[
     {t:"One of the two to four main ideas every relevant paper must involve", ok:true, why:"Concepts come from the question, such as phone use, sleep and teenagers."},
     {t:"Any word that appears in your question", why:"Question words, linking words and relationship words usually stay out of the search."},
     {t:"The name of the database you search", why:"The tool is where you search, not what you search for."},
     {t:"A filter such as year or language", why:"Years and languages are better handled as filters, separate from concepts."}
   ]},
   {id:"t4u2-q02", lesson:"t4u2-l1", level:2, q:"Ana’s question is “Do school breakfast programmes improve attendance in primary schools?” Which set of concepts is best to search?", options:[
     {t:"school breakfast programmes; attendance; primary schools", ok:true, why:"These are the main ideas. “Do” and “improve” stay out: studies finding no effect may never say “improve”."},
     {t:"do; improve; attendance", why:"“Do” is a question word and “improve” is a relationship word; including it drops studies that found no change."},
     {t:"breakfast programmes improve attendance", why:"Searching the claim as a phrase would only find papers using those exact words, and biases results toward positive findings."},
     {t:"education", why:"Far too broad: it would return a huge, mostly irrelevant set."}
   ]},
   {id:"t4u2-q03", lesson:"t4u2-l1", level:1, q:"Which pair shows a spelling variant you should include in a concept table?", options:[
     {t:"behaviour and behavior", ok:true, why:"British and American spellings differ; tools may not match both automatically."},
     {t:"behaviour and attitude", why:"These are different concepts, not spellings of one word."},
     {t:"behaviour and psychology", why:"Psychology is a broader field, not a spelling variant."},
     {t:"behaviour and AND", why:"AND is an operator, not a variant of a search term."}
   ]},
   {id:"t4u2-q04", lesson:"t4u2-l1", level:2, q:"A search returns 300 results, of which 60 are relevant. What is its precision?", options:[
     {t:"20%", ok:true, why:"Precision = relevant ÷ results = 60 ÷ 300 = 20%."},
     {t:"60%", why:"60 is the count of relevant results, not a percentage of the 300."},
     {t:"80%", why:"80% is the share that isn’t relevant."},
     {t:"500%", why:"That’s 300 ÷ 60 × 100, the division the wrong way round."}
   ]},
   {id:"t4u2-q05", lesson:"t4u2-l1", level:3, q:"Dmitri is starting a systematic review, where missing an eligible study is a serious flaw. Which should his search favour?", options:[
     {t:"Recall, accepting that he’ll have many irrelevant results to screen", ok:true, why:"Systematic reviews aim to find every eligible study, so completeness matters more than a clean result list."},
     {t:"Precision, so he only has a few results to read", why:"A highly precise search risks missing eligible studies, which undermines a systematic review."},
     {t:"Neither: one quick search is enough", why:"Systematic reviews need thorough, documented searches across several sources."},
     {t:"Whatever gives the fewest results", why:"Few results usually means low recall, the opposite of what he needs."}
   ]},
   {id:"t4u2-q06", lesson:"t4u2-l1", level:2, q:"Mei asks an AI chatbot for help with her search. Which use is safest?", options:[
     {t:"Brainstorming synonyms and spelling variants for her concepts", ok:true, why:"Words are easy to test in a real database. Lists of papers are risky because chatbots can invent references."},
     {t:"Copying the list of papers it suggests straight into her reference list", why:"Chatbots can produce references that look real but don’t exist. Every paper must be checked in a real index."},
     {t:"Asking it how many studies exist on her topic", why:"It can’t reliably count; only searching the databases tells you."},
     {t:"Letting it decide which papers are relevant without reading them", why:"Relevance judgements need the papers themselves; summaries can be wrong."}
   ]},
   {id:"t4u2-q07", lesson:"t4u2-l1", level:1, q:"Why record the exact search string in a search log?", options:[
     {t:"So you can rerun and report the search; small changes alter the results", ok:true, why:"A missing bracket or different word changes what you get, so only the exact string lets you repeat it."},
     {t:"Because databases delete searches after one use", why:"Some tools keep a history, but your log is what makes searches repeatable and reportable."},
     {t:"So the database charges you less", why:"Logging has nothing to do with cost."},
     {t:"It isn’t useful; titles of good papers are enough", why:"Titles show what you found, not how, so you can’t repeat or explain the search."}
   ]},
   {id:"t4u2-q08", lesson:"t4u2-l1", level:3, q:"Sione’s search finds 400 results, but two papers he knows are central to his topic aren’t among them. What should he do first?", options:[
     {t:"Look at how those two papers describe his concepts and add their words to his search", ok:true, why:"Missing known items reveal missing vocabulary; adding their terms raises recall."},
     {t:"Ignore it, since 400 results is plenty", why:"A large number doesn’t mean good recall; missing key papers shows the search has gaps."},
     {t:"Add NOT for words in his irrelevant results", why:"NOT removes records; it won’t bring the missing papers in."},
     {t:"Search only in titles", why:"That narrows the search further, making it even less likely to find them."}
   ]},
   /* Lesson 2 */
   {id:"t4u2-q09", lesson:"t4u2-l2", level:1, q:"Which operator would you use to join synonyms for the same concept?", options:[
     {t:"OR", ok:true, why:"OR accepts any of the words, which is what you want for synonyms."},
     {t:"AND", why:"AND would demand every synonym in the same record, finding very few."},
     {t:"NOT", why:"NOT removes records containing a word."},
     {t:"Quotation marks", why:"Quotes make a phrase; they don’t combine alternatives."}
   ]},
   {id:"t4u2-q10", lesson:"t4u2-l2", level:2, q:"Which string correctly searches for nurses or midwives, and burnout?", options:[
     {t:"`(nurses OR midwives) AND burnout`", ok:true, why:"The bracket groups the synonyms, and AND adds the second concept."},
     {t:"`nurses AND midwives AND burnout`", why:"This demands both job titles in every record, missing studies of only one group."},
     {t:"`nurses OR midwives OR burnout`", why:"This returns any record about nurses, any about midwives and any about burnout, mostly irrelevant."},
     {t:"`(nurses AND midwives) OR burnout`", why:"This accepts every record about burnout in any group."}
   ]},
   {id:"t4u2-q11", lesson:"t4u2-l2", level:1, q:"What does `educat*` find in a tool that supports truncation?", options:[
     {t:"Words starting with “educat”, such as education, educational and educator", ok:true, why:"The asterisk stands for any ending."},
     {t:"Only the exact word “educat”", why:"The asterisk is the instruction to include all endings."},
     {t:"Records that don’t mention education", why:"That would be a NOT search."},
     {t:"Words that end in “educat”", why:"Truncation varies the end of the word, not the beginning."}
   ]},
   {id:"t4u2-q12", lesson:"t4u2-l2", level:3, q:"Kenji pastes `(climat* OR \"global warming\") AND farm*` into Semantic Scholar and Google Scholar. What should he expect?", options:[
     {t:"Neither tool supports truncation, and Semantic Scholar ignores Boolean operators, so he should run short keyword searches with a quoted phrase instead", ok:true, why:"Both support quoted phrases, but not the asterisk, and Semantic Scholar doesn’t support Boolean operators at all."},
     {t:"Both tools will run it exactly as written", why:"Neither supports truncation, and Semantic Scholar doesn’t support Boolean operators."},
     {t:"Only the quotation marks will be ignored", why:"Quoted phrases are one of the few things both tools do support."},
     {t:"Both tools will report a syntax error and refuse to search", why:"They usually run the search anyway, which is why unsupported syntax can quietly give odd results."}
   ]},
   {id:"t4u2-q13", lesson:"t4u2-l2", level:2, q:"PubMed processes searches left to right. What does `diabetes AND diet OR exercise` find there?", options:[
     {t:"Records on diabetes and diet, plus every record about exercise", ok:true, why:"Left to right it becomes `(diabetes AND diet) OR exercise`. Use `diabetes AND (diet OR exercise)` for the likely meaning."},
     {t:"Records on diabetes with either diet or exercise", why:"That needs brackets around `diet OR exercise`."},
     {t:"Only records mentioning all three words", why:"OR lets exercise records in on their own."},
     {t:"Nothing, because AND and OR can’t be mixed", why:"Mixing operators is allowed; brackets control the grouping."}
   ]},
   {id:"t4u2-q14", lesson:"t4u2-l2", level:3, q:"Lucía searches `depression NOT anxiety` to focus on depression. Why might this be a poor choice?", options:[
     {t:"It removes every study that mentions anxiety, including many depression studies that also measured anxiety", ok:true, why:"Depression and anxiety are often studied together; NOT throws all of those away."},
     {t:"NOT only works in Google, not in databases", why:"Most databases support NOT; the issue is what it removes."},
     {t:"It will find more results than `depression` alone", why:"NOT can only remove records."},
     {t:"There’s nothing wrong with it", why:"NOT is blunt; it often discards relevant work."}
   ]},
   {id:"t4u2-q15", lesson:"t4u2-l2", level:2, q:"Why does `sl*` fail as a truncation in PubMed?", options:[
     {t:"PubMed requires at least four characters before the asterisk", ok:true, why:"Its help gives `colo*` as an example; `sleep*` would work."},
     {t:"PubMed doesn’t support truncation", why:"It does, with an asterisk after at least four letters."},
     {t:"The asterisk must come before the word", why:"Truncation goes at the end of the stem."},
     {t:"Truncation only works inside quotation marks", why:"Quotes are optional; PubMed truncates unquoted words too."}
   ]},
   {id:"t4u2-q16", lesson:"t4u2-l2", level:1, q:"Which is a field search?", options:[
     {t:"`sleep[ti]` in PubMed, which looks for sleep in titles only", ok:true, why:"Field tags limit words to one part of the record, here the title."},
     {t:"`sleep OR insomnia`", why:"That combines terms; it doesn’t restrict where they appear."},
     {t:"`\"sleep quality\"`", why:"That’s a phrase search."},
     {t:"`sleep*`", why:"That’s truncation."}
   ]},
   /* Lesson 3 */
   {id:"t4u2-q17", lesson:"t4u2-l3", level:1, q:"What does a library catalogue usually list?", options:[
     {t:"What the library owns or licenses, such as books, e-books, journal titles and theses", ok:true, why:"Catalogues describe the library’s holdings; they usually list journals by title, not each article."},
     {t:"Every article ever published", why:"No catalogue does that; article indexes and databases cover articles."},
     {t:"Only the books currently on loan", why:"It lists the whole collection, with availability."},
     {t:"Websites the librarians recommend", why:"Some libraries keep such guides, but that isn’t the catalogue."}
   ]},
   {id:"t4u2-q18", lesson:"t4u2-l3", level:2, q:"Fatima wants to know which libraries near her hold a specific out-of-print book. Which free tool fits best?", options:[
     {t:"WorldCat", ok:true, why:"WorldCat combines library catalogues worldwide and lists holding libraries by distance."},
     {t:"PubMed", why:"PubMed indexes biomedical literature, not library holdings."},
     {t:"Semantic Scholar", why:"It indexes papers, not which libraries hold books."},
     {t:"DOAJ", why:"DOAJ indexes open access journals."}
   ]},
   {id:"t4u2-q19", lesson:"t4u2-l3", level:2, q:"What do subject headings such as MeSH add to a search?", options:[
     {t:"They gather records on a concept whatever words the authors used", ok:true, why:"Indexers assign the same heading to papers on a topic, so differences in wording don’t matter."},
     {t:"They give access to full text", why:"Headings describe content; they don’t provide access."},
     {t:"They rank papers by quality", why:"Headings say what a record is about, not how good it is."},
     {t:"They replace the need for keywords entirely", why:"New and unindexed records lack headings, so combine headings with keywords."}
   ]},
   {id:"t4u2-q20", lesson:"t4u2-l3", level:1, q:"What happened to Microsoft Academic?", options:[
     {t:"Microsoft stopped it at the end of 2021; the free index OpenAlex launched in January 2022 as a successor", ok:true, why:"The Microsoft Academic Graph stopped updating on 31 December 2021, and the nonprofit OurResearch built OpenAlex to replace it."},
     {t:"It merged into Google Scholar", why:"Google Scholar is a separate service; Microsoft Academic was retired."},
     {t:"It’s still the main free index", why:"It no longer exists."},
     {t:"It became PubMed", why:"PubMed is run by the US National Library of Medicine and long predates it."}
   ]},
   {id:"t4u2-q21", lesson:"t4u2-l3", level:3, q:"Priya, a teacher, wants peer-reviewed education research and has no university access. Which plan is strongest?", options:[
     {t:"Search ERIC with its Peer reviewed only filter and Thesaurus descriptors, plus Google Scholar or OpenAlex, logging both", ok:true, why:"ERIC is free and built for education, with a peer-review filter; a broad tool adds coverage."},
     {t:"Search Google Scholar only, because it has everything", why:"Scholar doesn’t publish its coverage and lacks subject headings and a peer-review filter."},
     {t:"Use PubMed, because it’s the biggest free database", why:"PubMed covers biomedicine; ERIC fits education."},
     {t:"Search DOAJ only", why:"DOAJ covers only open access journals, a small part of education research."}
   ]},
   {id:"t4u2-q22", lesson:"t4u2-l3", level:2, q:"Which statement about Google Scholar is accurate?", options:[
     {t:"Its results mix peer-reviewed articles with theses, preprints and other material, without labelling which is which", ok:true, why:"That’s why each result needs judging; it’s part of Scholar’s breadth."},
     {t:"It only includes peer-reviewed journal articles", why:"It covers many document types."},
     {t:"It supports truncation with an asterisk", why:"It has no truncation; it matches some word forms automatically."},
     {t:"It publishes a full list of the journals it covers", why:"It doesn’t, so you can’t tell exactly what’s missing."}
   ]},
   {id:"t4u2-q23", lesson:"t4u2-l3", level:3, q:"Oluwaseun’s PubMed search uses only the MeSH heading for his topic. A colleague mentions a relevant paper from last month that his search missed. What’s the likely reason and fix?", options:[
     {t:"New records may not have MeSH headings yet; add keywords with OR alongside the heading", ok:true, why:"Indexing lags behind publication, and keywords catch unindexed records."},
     {t:"PubMed doesn’t include recent papers; wait a year", why:"PubMed adds records continually; the gap is in MeSH indexing."},
     {t:"MeSH headings only cover older topics; stop using them", why:"MeSH is current and valuable; just don’t rely on it alone."},
     {t:"He needs a paid subscription to see recent records", why:"PubMed is free."}
   ]},
   {id:"t4u2-q24", lesson:"t4u2-l3", level:1, q:"What is discovery search?", options:[
     {t:"A library’s single search box covering its catalogue plus articles from its licensed databases", ok:true, why:"It searches many of the library’s resources at once."},
     {t:"A search engine that finds new species", why:"That’s a joke reading of the name; it’s a library search tool."},
     {t:"Any Google search", why:"Discovery search is a library service."},
     {t:"An AI that writes literature reviews", why:"Discovery systems search and link; they don’t write reviews."}
   ]},
   /* Lesson 4 */
   {id:"t4u2-q25", lesson:"t4u2-l4", level:1, q:"What is forward citation chasing?", options:[
     {t:"Finding later papers that cite a paper you already have", ok:true, why:"For example, using a “Cited by” link."},
     {t:"Reading a paper’s reference list", why:"That’s backward chasing."},
     {t:"Searching for the next issue of a journal", why:"That’s a table-of-contents alert, not citation chasing."},
     {t:"Sorting results by date", why:"Sorting doesn’t follow citations."}
   ]},
   {id:"t4u2-q26", lesson:"t4u2-l4", level:2, q:"Hana has a 2016 seed paper and wants to see whether later studies confirmed its findings. Where should she look?", options:[
     {t:"The seed paper’s “Cited by” list, filtered for her concepts", ok:true, why:"Later studies testing the findings would cite the seed paper."},
     {t:"The seed paper’s reference list", why:"References are older than the paper, so they can’t include later studies."},
     {t:"The seed paper’s keywords only", why:"Keywords help searching but don’t point to studies that tested this one."},
     {t:"The journal’s homepage", why:"A homepage won’t show later work from other journals."}
   ]},
   {id:"t4u2-q27", lesson:"t4u2-l4", level:1, q:"Which part of a seed paper is the best place to start backward chasing?", options:[
     {t:"The introduction or literature review, where authors explain which earlier work matters", ok:true, why:"It shows which references are central rather than passing mentions."},
     {t:"The acknowledgements", why:"Acknowledgements thank people and funders; they don’t discuss earlier research."},
     {t:"The author biographies", why:"Biographies describe the authors, not the research they built on."},
     {t:"The figures", why:"Figures show results, not the earlier work."}
   ]},
   {id:"t4u2-q28", lesson:"t4u2-l4", level:3, q:"A paper shows 512 citations in Google Scholar and 301 in Scopus. Ana concludes one tool must be wrong. What should you tell her?", options:[
     {t:"Both can be right: each counts citations only from the documents it covers, and Google Scholar covers more document types", ok:true, why:"Different coverage, not error, explains most of the gap."},
     {t:"Google Scholar is always right", why:"It isn’t always right, but the difference here is mainly about coverage."},
     {t:"Scopus is always right", why:"Its count reflects its own coverage; neither is “the” true count."},
     {t:"The paper must have been retracted", why:"Retraction doesn’t remove citations or explain a gap between tools."}
   ]},
   {id:"t4u2-q29", lesson:"t4u2-l4", level:2, q:"What does Semantic Scholar mean by a “highly influential citation”?", options:[
     {t:"A citation its model judges to have significantly shaped the citing paper", ok:true, why:"A machine-learning model flags these; its FAQ notes it depends on full-text access."},
     {t:"A citation from a famous researcher", why:"It’s about the role of the citation in the paper, not the citer’s fame."},
     {t:"Any citation in a top journal", why:"The journal doesn’t decide it."},
     {t:"A citation that has been peer reviewed twice", why:"Citations aren’t peer reviewed separately."}
   ]},
   {id:"t4u2-q30", lesson:"t4u2-l4", level:2, q:"What does PubMed need before it will email you alerts for a saved search?", options:[
     {t:"A free My NCBI account", ok:true, why:"PubMed’s help says you must sign in to My NCBI to use email alerts."},
     {t:"A university subscription", why:"PubMed and My NCBI are free."},
     {t:"Nothing; the Clipboard sends alerts", why:"The Clipboard is temporary and sends nothing."},
     {t:"A reference manager", why:"Not needed for alerts."}
   ]},
   {id:"t4u2-q31", lesson:"t4u2-l4", level:3, q:"Tomás has done four rounds of citation chasing and several database searches. Almost every new result is a paper he already has. What does that suggest?", options:[
     {t:"He’s probably near saturation for a normal project, so he can stop searching widely, keep alerts on and log what he did", ok:true, why:"Repeated results are a sign he has covered the field; alerts keep it up to date."},
     {t:"His searches are broken", why:"Repeats are expected once coverage is good."},
     {t:"He should switch topics", why:"Nothing suggests the topic is wrong."},
     {t:"He must keep going until there are zero new results anywhere", why:"That point may never come; for most projects, saturation plus alerts is enough."}
   ]},
   {id:"t4u2-q32", lesson:"t4u2-l4", level:1, q:"Which is a reason a high citation count doesn’t prove a paper is good?", options:[
     {t:"Papers are also cited to criticise them, and older papers have had longer to collect citations", ok:true, why:"Counts reflect attention and age, not soundness."},
     {t:"Citation counts are invented by publishers", why:"They’re counted from reference lists, but they measure attention, not quality."},
     {t:"Only bad papers get cited", why:"Good and bad papers are both cited."},
     {t:"Counts are always identical across tools", why:"They differ by tool, and that isn’t the reason they can’t prove quality."}
   ]},
   /* Lesson 5 */
   {id:"t4u2-q33", lesson:"t4u2-l5", level:1, q:"What is an accepted manuscript?", options:[
     {t:"The authors’ final text after peer review, without the publisher’s formatting", ok:true, why:"It has the peer-reviewed content but not the journal’s layout or page numbers."},
     {t:"The version shared before peer review", why:"That’s a preprint."},
     {t:"The publisher’s final formatted version", why:"That’s the version of record."},
     {t:"A rejected paper", why:"“Accepted” means the journal accepted it."}
   ]},
   {id:"t4u2-q34", lesson:"t4u2-l5", level:2, q:"Unpaywall shows a green tab on an article page. What does that mean?", options:[
     {t:"It found a free legal copy, which you can open by clicking the tab", ok:true, why:"Green means a free copy was found in its index of legal open sources."},
     {t:"The article is retracted", why:"The tab is about free copies, not retraction status."},
     {t:"You must pay to read it", why:"Grey would mean no free copy found; green means one was."},
     {t:"The article isn’t peer reviewed", why:"The tab doesn’t judge peer review."}
   ]},
   {id:"t4u2-q35", lesson:"t4u2-l5", level:3, q:"Mei can’t get a paper: no free copy, and her library doesn’t subscribe. A classmate suggests a shadow library. What’s the best response?", options:[
     {t:"Decline; ask the library for an interlibrary loan and email the author instead", ok:true, why:"Shadow libraries infringe copyright; ILL and author requests are legal and often work."},
     {t:"Use it, since everyone does", why:"Popularity doesn’t change copyright law, and courts in several countries have ruled against these sites."},
     {t:"Use it, but don’t cite the paper", why:"Not citing a source you used is a separate problem, and the download still infringes copyright."},
     {t:"Borrow a friend’s login instead", why:"That breaks library licence terms and risks the friend’s account."}
   ]},
   {id:"t4u2-q36", lesson:"t4u2-l5", level:1, q:"What is interlibrary loan?", options:[
     {t:"A service where your library gets a book or article copy for you from another library", ok:true, why:"It extends your library’s collection; some libraries charge a fee."},
     {t:"Borrowing money from a library", why:"It’s about items, not money."},
     {t:"Downloading from a shadow library", why:"Shadow libraries are unauthorised; ILL is a legal library service."},
     {t:"Lending your library card to someone", why:"Library cards are personal."}
   ]},
   {id:"t4u2-q37", lesson:"t4u2-l5", level:2, q:"Why might a free copy of a paper in a university repository appear only months after the journal published it?", options:[
     {t:"The publisher set an embargo before the accepted manuscript could be made public", ok:true, why:"Embargo periods are common for repository copies."},
     {t:"Repositories only update once a year", why:"Timing usually follows publisher policy, not a fixed schedule."},
     {t:"The paper had to be peer reviewed again", why:"Repository copies aren’t re-reviewed."},
     {t:"Free copies are always illegal until a court approves them", why:"Repository copies are legal when they follow the publisher’s policy."}
   ]},
   {id:"t4u2-q38", lesson:"t4u2-l5", level:3, q:"Kenji found a preprint that exactly matches his argument, posted two years ago. What should he check before relying on it?", options:[
     {t:"Whether a peer-reviewed version has since been published, and whether its results changed", ok:true, why:"Preprints aren’t peer reviewed, results can change before publication, and some are never published."},
     {t:"Nothing; preprints are final", why:"Preprints come before peer review and can change."},
     {t:"Only the number of downloads", why:"Popularity doesn’t show whether it passed peer review."},
     {t:"Whether it’s in PDF format", why:"The file format says nothing about its status."}
   ]},
   {id:"t4u2-q39", lesson:"t4u2-l5", level:2, q:"Which is the most sensible first step when you hit a paywall?", options:[
     {t:"Check Google Scholar’s [PDF] link and All versions for a free legal copy", ok:true, why:"It’s quick, free, and often finds a repository or author copy."},
     {t:"Pay for the article immediately", why:"Free legal routes often work; try them first."},
     {t:"Give up on the paper", why:"Several legal routes remain: open copies, libraries, ILL and the author."},
     {t:"Search a shadow library", why:"That infringes copyright and isn’t an acceptable route."}
   ]},
   {id:"t4u2-q40", lesson:"t4u2-l5", level:3, q:"Amara has an accepted manuscript of a paper and wants to post it on her public blog so others can read it. What should she know?", options:[
     {t:"Reposting it may not be allowed; it’s better to link to the legal copy in the repository", ok:true, why:"Whether a version may be shared, and where, depends on the publisher’s policy; linking avoids redistributing it."},
     {t:"Anything free to read is free to repost", why:"Free to read isn’t the same as free to redistribute; licences and policies differ."},
     {t:"Accepted manuscripts aren’t covered by copyright", why:"They’re covered by copyright like any other version."},
     {t:"She must convert it to a different file format first", why:"The file format doesn’t change the rights."}
   ]}
  ]
});
