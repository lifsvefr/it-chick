/* Research Skills · Unit 3 · Reading academic papers */
ICA.addUnit({
  id:"t4u3", track:"t4", n:3, title:"Reading academic papers", icon:"📄",
  blurb:"Learn how papers are built and how experienced readers get through them in passes. Learn what the numbers in a results section really mean (effect sizes, confidence intervals, p-values) and how to judge a study fairly. Also learn how to take notes and use AI summaries without being misled.",
  goals:[
    "Find your way around a research paper: IMRaD and the other shapes papers take, including humanities articles",
    "Read a paper in passes, read its figures and tables, and keep notes you can trust months later",
    "Explain samples, effect sizes and confidence intervals correctly, including what sample size does",
    "Say what a p-value is and is not, and why statistical significance is not the same as importance",
    "Read descriptive tables, cross-tabs and regression tables. This includes reference categories, adjusted results and odds ratios",
    "Appraise a study critically and use AI reading tools as a starting point that you check against the paper"
  ],
  read:[
    {book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”, and Chapter 15, “Quantitative Analysis: Inferential Statistics” (section “Basic Concepts”)", note:"Published in 2012. A few sentences in Chapter 15 use older shorthand for p-values and confidence intervals; Lessons 3 and 4 explain the more careful wording statisticians recommend today."},
    {book:"owg", where:"Chapter 13, “Research Process: Accessing and Recording Information”, Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u3-l1", title:"Anatomy of a paper", minutes:50,
   hook:{q:"Most medical research articles today use the same four headings: Introduction, Methods, Results and Discussion. Since when has that been the norm in leading medical journals?", options:["Since the 1700s, when journals began","Since about 1900","Only since the 1970s and 1980s","Only since online journals, around 2000"], answer:2, reveal:"**Only since the 1970s and 1980s.** A survey of four leading medical journals found the format appearing in the 1940s. Most articles used it only from the 1970s, and by the 1980s it was the only pattern for original research. It feels timeless, but it’s a convention, and other fields use different shapes. This lesson maps both."},
   goals:[
     "Name the main kinds of academic paper and what each one gives you",
     "Use the front matter (title, abstract, DOI, dates) to decide quickly whether a paper is relevant",
     "Explain what each IMRaD section is for and where to find the aim, the method, the findings and the limitations",
     "Recognize how humanities and theoretical articles are organized differently",
     "Use the back matter: funding, competing interests, data availability and corrections"
   ],
   learn:[
    {h:"What a research paper is", body:[
      {lead:"A research paper is a formal report of a piece of research. It is written for other people who know the field, so they can understand it, check it and build on it."},
      "Think of a paper as a researcher’s case in a long public conversation. It says: here is the question, here is exactly what we did, here is what we found, and here is what we think it means. Most journals send papers to other experts before publishing them, a process called [[peer-review|peer review]] (see {{peer-review}}). That check helps, but it doesn’t guarantee a paper is right; Lesson 6 shows you how to judge it yourself.",
      "Not every paper reports a new study. Knowing the type tells you what you can take from it.",
      {table:[["Type","What it gives you"],["Original research (empirical) article","A new study: data someone collected or analyzed, with methods and results"],["Review article","A summary of many studies on one question; a good place to start a topic"],["Theoretical or conceptual paper","A new idea, model or argument, often with no new data"],["Methods paper","A new or improved way to measure or analyze something"],["Case report or case study","A detailed account of one person, organization, event or place"],["Commentary, editorial or letter","An expert opinion or a reply to another paper; useful, but not evidence on its own"]]},
      "You’ll also meet **conference papers** and **[[preprint|preprints]]**. In computing and engineering, conference papers can be as important as journal articles. Preprints are shared publicly before peer review. They can be excellent and fast, but nobody outside the team has checked them yet, so read them with extra care."
    ]},
    {h:"Before the first heading: the front matter", body:[
      "The first page tells you a lot before you read a single paragraph of argument.",
      {list:[
        "**Title.** Often states the question, the population and sometimes the design (“A randomized trial of…”, “Women’s letters in…”).",
        "**Authors and affiliations.** Who did the work and where. An affiliation with a company or campaign group isn’t a problem in itself, but note it.",
        "**Dates.** Many journals print when the paper was received, accepted and published. A long gap often means several rounds of revision.",
        "**Abstract.** A summary of 150–300 words. A *structured* abstract has labeled parts (Background, Methods, Results, Conclusions); an unstructured one is a single paragraph.",
        "**Keywords and DOI.** The **DOI** (Digital Object Identifier) is a permanent ID for the paper. Writing it as a link, like `https://doi.org/10.5555/abc123`, takes anyone straight to it."
      ]},
      {lab:"cl-doi", t:"Practice: write a DOI as a link"},
      {warn:"The abstract is the authors’ own summary, written to persuade busy readers. It’s the best way to decide whether to read on, but the worst place to stop. An abstract can sound more certain or more positive than the full results support, and it leaves out the detail you need to judge the evidence. Use it to decide, then check inside."}
    ]},
    {h:"IMRaD: the shape of most empirical papers", body:[
      "Most research articles in the sciences, health and social sciences follow a pattern called [[imrad|IMRaD]]: **I**ntroduction, **M**ethods, **R**esults **a**nd **D**iscussion. Each section answers one question, so once you know the pattern you can jump straight to the part you need.",
      {table:[["Section","Question it answers","Look for"],["Introduction","Why do this study?","What’s already known, the gap, and the aim or [[hypothesis]] (usually in the last paragraph)"],["Methods","What exactly did they do?","Who took part, the design, what was measured and how it was analyzed"],["Results","What did they find?","Numbers, tables, figures, quotes from participants"],["Discussion","What does it mean?","The main finding restated, comparison with other studies, limitations, implications"]]},
      {fig:'<svg viewBox="0 0 340 330"><path class="d-lup" d="M30 10 H310 L230 80 H110 Z" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Introduction</text><text class="s" x="170" y="58" text-anchor="middle">wide topic → narrow gap</text><rect class="d-soft" x="110" y="90" width="120" height="60" rx="6" stroke-width="2"/><text x="170" y="116" text-anchor="middle">Methods</text><text class="s" x="170" y="136" text-anchor="middle">what we did</text><rect class="d-soft" x="110" y="160" width="120" height="60" rx="6" stroke-width="2"/><text x="170" y="186" text-anchor="middle">Results</text><text class="s" x="170" y="206" text-anchor="middle">what we found</text><path class="d-sage" d="M110 230 H230 L310 300 H30 Z" stroke-width="2"/><text x="170" y="262" text-anchor="middle">Discussion</text><text class="s" x="170" y="282" text-anchor="middle">narrow finding → wide meaning</text><text class="s" x="170" y="322" text-anchor="middle">The “hourglass”: broad, narrow, broad</text></svg>', alt:"An hourglass shape. The Introduction narrows from a wide topic to a narrow gap; Methods and Results are narrow boxes; the Discussion widens from the narrow finding back out to its wider meaning.", cap:"IMRaD is often drawn as an hourglass: the paper narrows to one precise study, then widens again to say what it means."},
      "The pattern is younger than it looks. A survey of four leading medical journals (Sollaci and Pereira, 2004) found IMRaD first appearing in the 1940s. Most articles used it only from the 1970s, and by the 1980s it was the only pattern for original papers.",
      {h:"Common variations"},
      {list:[
        "Results and Discussion merged into one section, often in chemistry and short papers.",
        "Methods moved to the end of the article or into online supplementary material, which some high-profile journals do. The methods still matter; you just have to scroll.",
        "A separate **Conclusion** after the Discussion, or a **Related work** section in computing.",
        "In qualitative studies (interviews, observation), Results are usually themes illustrated with participants’ own words rather than numbers."
      ]}
    ]},
    {h:"Inside each section", body:[
      "**The Introduction** reviews earlier research and argues that something is missing. Its last paragraph usually states the aim, research question or hypothesis. If you remember one sentence from an introduction, make it that one.",
      "**The [[methods-section|Methods]]** section is the recipe. It should let another researcher repeat the study. Look for these things. Who was studied (the [[sample]]) and how they were chosen. The design, for example a survey, an [[experiment]], interviews or an analysis of existing records. What was measured and with which instruments. How the data were analyzed. Lessons 3 and 6 show what to look for here.",
      "**The [[results-section|Results]]** section reports what was found, ideally without interpretation. Figures and tables carry much of the weight; the text points to them. Lessons 2 and 5 show how to read them.",
      "**The [[discussion-section|Discussion]]** interprets. It usually opens by restating the main finding, compares it with other studies, admits the [[study-limitations|limitations]] and ends with implications and ideas for future research. This is where authors are most tempted to stretch, so compare its claims with the Results."
    ]},
    {h:"Other shapes: humanities, theory and more", body:[
      "Not all scholarship is a report of a study. In history, literature, philosophy, law, religious studies and the arts, an article is usually an **argued essay**. There is rarely a Methods section. Instead the author states a thesis (the main claim) early. Then the author builds a case section by section. The evidence can be archival documents, texts, artworks or legal cases, and the author discusses what other scholars have argued. Section headings are often descriptive or even poetic, and some articles have no abstract at all.",
      {ex:"An invented history article, “Ledgers and Longing: Shopkeepers’ Credit in a Port Town, 1890–1910”, opens with a scene from one shop’s account book. Its third paragraph states the thesis: credit records reveal social ties that official trade statistics miss. Four sections follow, each analyzing a different set of archival sources, and the conclusion returns to the opening scene. The ‘method’ is there, but woven into the argument and the footnotes.", label:"Worked example (invented)"},
      {table:[["Shape","Typical field","Where the main claim is"],["IMRaD report","Sciences, health, many social sciences","Aim at end of Introduction; answer at start of Discussion"],["Argued essay","Humanities, law, some social sciences","Thesis in the Introduction, defended throughout"],["Definition–theorem–proof","Mathematics, theoretical computing","The theorems, stated precisely, then proved"],["Review","Any field","The summary of what many studies show, often in a table"]]},
      {tip:"To find the thesis of a humanities article, read the first few paragraphs slowly and look for a sentence that takes a position someone could disagree with. Then read the conclusion: the thesis usually comes back there in different words."}
    ]},
    {h:"The back matter people skip", body:[
      "After the main text come short sections that are easy to ignore and often revealing:",
      {list:[
        "**References.** The conversation the paper joins. Unit 2 shows how to follow them to find more sources.",
        "**Funding.** Who paid for the work.",
        "**Competing interests** (also called conflicts of interest). Any financial or personal stake the authors declare. A declared interest doesn’t make a paper wrong; it’s a reason to read the methods carefully.",
        "**Data availability.** Whether the data and code are shared, and where.",
        "**Author contributions.** Who did what.",
        "**Supplementary material.** Extra tables, full questionnaires and detailed methods, often online only."
      ]},
      "Finally, check whether the paper has been **corrected or [[retraction|retracted]]**. Publishers add notices to the article page, and Unit 1 explains how to check a paper’s status (see {{retractions}}).",
      {key:"The abstract tells you what the authors claim. The Methods and Results tell you whether you should believe it."}
    ]}
   ],
   try:[
    {id:"t4u3-l1-x1", type:"match", q:"Match each part of an IMRaD paper to the question it answers.", pairs:[
      ["Introduction","Why was this study needed, and what did it aim to find out?","The introduction reviews earlier work, identifies a gap and ends with the aim."],
      ["Methods","Exactly who was studied, and how?","Methods is the recipe: sample, design, measures and analysis."],
      ["Results","What did the data show?","Results reports findings, ideally without interpretation."],
      ["Discussion","What does it mean, and what are its limits?","The discussion interprets the findings, compares them with other studies and admits limitations."]
    ]},
    {id:"t4u3-l1-x2", type:"sort", q:"These sentences come from an invented study of a community gardening program. Which section would each most likely appear in?", buckets:["Introduction","Methods","Results","Discussion"], items:[
      {t:"“Little is known about whether shared gardens reduce loneliness among older adults.”", b:0, why:"Pointing out a gap in what’s known is the job of the introduction."},
      {t:"“We recruited 86 residents aged 65 and over through three community centers.”", b:1, why:"Who took part and how they were found is a methods detail."},
      {t:"“Loneliness scores fell by an average of 3.1 points in the garden group.”", b:2, why:"A specific finding with a number belongs in the results."},
      {t:"“Because participants volunteered, they may have been more sociable to begin with.”", b:3, why:"Admitting a limitation and what it might mean is part of the discussion."},
      {t:"“Loneliness was measured with a validated 20-item questionnaire.”", b:1, why:"How a variable was measured is part of the methods."},
      {t:"“These findings are consistent with earlier studies of group volunteering.”", b:3, why:"Comparing your findings with other studies is interpretation, so it belongs in the discussion."},
      {t:"“This study asks whether a 12-week gardening program reduces loneliness.”", b:0, why:"Stating the aim or question usually closes the introduction."}
    ]},
    {id:"t4u3-l1-x3", type:"mcq", q:"Amara opens a philosophy journal article and finds no Methods or Results headings, just sections titled “I. The Puzzle”, “II. Two Replies”, “III. A Better Answer”. What should she conclude?", options:[
      {t:"It’s an argued essay; she should follow how each section supports the thesis", ok:true, why:"Humanities and philosophy articles usually argue a thesis through sections rather than reporting a study, so there’s no Methods heading to find. Look for the thesis early on."},
      {t:"It isn’t a scholarly article, because all scholarly articles use IMRaD headings", why:"IMRaD is common in the sciences and social sciences, but argued essays are the normal form of scholarship in the humanities."},
      {t:"The methods were left out, so the article can’t be trusted", why:"An argument-based article has no data-collection method to report. Its ‘method’ is the reasoning and the sources, which she can judge directly."},
      {t:"She should skip to the last section, because that’s where the results are", why:"There are no results in the IMRaD sense. The conclusion helps, but the thesis is normally stated early and defended throughout."}
    ]},
    {id:"t4u3-l1-x4", type:"order", q:"Put the parts of a typical IMRaD journal article in the order they appear.", items:[
      {t:"Title, authors and affiliations", why:"The very top of the first page."},
      {t:"Abstract", why:"The summary comes right after the title block."},
      {t:"Introduction", why:"The main text starts by explaining why the study was needed."},
      {t:"Methods", why:"Then what was done."},
      {t:"Results", why:"Then what was found."},
      {t:"Discussion", why:"Then what it means."},
      {t:"References", why:"The list of works cited comes after the main text (with funding and competing-interest statements nearby)."}
    ]},
    {id:"t4u3-l1-x5", type:"spot", q:"Here is part of the first page of an invented article. Which parts tell you who paid for the work or who might gain from it?", ask:"is about money or interests", parts:[
      {t:"“Daily step goals and blood pressure: a 6-month trial”", flag:false, why:"The title tells you the topic and design, not who funded it."},
      " · ",
      {t:"Department of Public Health, a university in Lagos", flag:false, why:"A university affiliation tells you where the authors work; on its own it says nothing about a financial stake."},
      " · ",
      {t:"Received 3 March 2025; accepted 9 September 2025", flag:false, why:"These dates describe the review process, not money."},
      " · ",
      {t:"Funding: this study was funded by the maker of the step-counting watch used in the trial.", flag:true, why:"The funder sells the device being tested, so it could gain from a positive result. That doesn’t make the study wrong, but note it."},
      " · ",
      {t:"Competing interests: two authors have received speaker fees from the same company.", flag:true, why:"A declared personal financial link between authors and an interested company. Again, not proof of bias, but a reason to read the methods closely."},
      " · ",
      {t:"Keywords: hypertension; physical activity; wearables", flag:false, why:"Keywords help databases index the paper; they say nothing about interests."}
    ]},
    {id:"t4u3-l1-x6", type:"mcq", q:"Which statements about abstracts are accurate? Choose all that apply.", options:[
      {t:"They help you decide quickly whether a paper is relevant to your question", ok:true, why:"That’s exactly what they’re for."},
      {t:"They are written by the authors, so they can present results more favorably than the full paper", ok:true, why:"Abstracts are the authors’ own summary and can overstate. Check the claims against the Results."},
      {t:"A structured abstract has labeled parts such as Background, Methods, Results and Conclusions", ok:true, why:"That’s what ‘structured’ means. Many health journals require them."},
      {t:"If you’ve read the abstract, you can safely cite the paper’s findings", why:"An abstract leaves out the detail you need to judge the evidence (sample, measures, uncertainty). Read at least the Methods and Results before relying on a finding."},
      {t:"Every scholarly article has an abstract", why:"Many humanities articles, book chapters and older papers have none."}
    ]},
    {id:"t4u3-l1-x7", type:"explain", q:"Why is the abstract the best place to decide whether to read a paper, but the worst place to stop?", size:"2–4 sentences", hint:"Who writes the abstract, and what does it leave out?", model:"The abstract is a short summary of the question, method, findings and conclusion, so in a minute it tells you whether the paper is relevant. But it’s the authors’ own summary, written to persuade busy readers, so it can sound more certain or positive than the full results support. It also leaves out the detail you need to judge the evidence, such as who was studied and how. The Methods and Results tell you whether to believe the claim.", points:["Says the abstract is quick and good for judging relevance", "Notes that the authors wrote it and it can overstate the results", "Says it leaves out detail needed to judge the evidence", "Points to the Methods and Results for checking"]}
   ],
   apply:{intro:"Find a real paper and take it apart. Everything here is free: you don’t need a university login (with one, you can open many more papers through your library).", tasks:[
     {t:"Find an open access research article on a topic you care about and label its parts.", how:["Search a free source of open access papers. Options are the Directory of Open Access Journals (doaj.org), PubMed Central (for health and life sciences) or a journal you know is open access.","Pick an article that reports a new study (look for Methods and Results headings).","For each IMRaD section, write one sentence saying what it tells you. Copy the aim (end of the Introduction) word for word, with its page or paragraph."], write:"Title and DOI, then one sentence each for Introduction (with the exact aim), Methods, Results and Discussion…"},
     {t:"Find a humanities article and locate its thesis.", how:["In the same kind of source, filter or search for a humanities subject such as history, literature or philosophy.","Read the first few paragraphs and find the sentence that takes a position someone could disagree with.","Read the conclusion and note how the thesis comes back."], write:"Title, the thesis sentence (quoted, with its location), and how the conclusion restates it…"},
     {t:"Check the back matter of your first article.", how:["Find the funding, competing-interests and data-availability statements. They may be near the references or on the article’s web page.","Note anything that could matter when you judge the paper."], write:"Funder, any declared interests, whether data are shared, and whether any of this changes how carefully you’ll read it…"}
   ], proof:"Notes on two real articles. One is an IMRaD paper, with each section summarized and its aim quoted. The other is a humanities article, with its thesis quoted. Also add what the back matter of the first one told you."},
   read:[{book:"owg", where:"Chapter 14, “Annotated Bibliography: Gathering, Evaluating, and Documenting Sources”, Section 14.1 “Compiling Sources for an Annotated Bibliography”", note:"Background reading: on choosing sources, reading abstracts and skimming before you commit to a full read."}]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u3-l2", title:"Reading in passes, and notes you can use later", minutes:55,
   hook:{q:"A computer scientist’s widely shared guide to reading papers suggests a first pass through a paper. How long does he say it should take?", options:["About 5 to 10 minutes","About an hour","About 4 or 5 hours","As long as it takes to read every word once"], answer:0, reveal:"**About 5 to 10 minutes.** In “How to Read a Paper” (2007), S. Keshav suggests three passes. First, a quick look to decide whether the paper matters. Second, a careful read of the main content. Third, only for papers you must master, a deep reconstruction. Most papers never need the third pass. This lesson shows each pass and how to keep notes you can trust later."},
   goals:[
     "Decide why you are reading before you start, and choose how deeply to read",
     "Use a first, second and third pass, and a sensible reading order for IMRaD and humanities papers",
     "Read figures and tables accurately, including what error bars show",
     "Annotate a paper and write literature notes that keep quotes, paraphrase and your own ideas apart"
   ],
   learn:[
    {h:"Start with why you are reading", body:[
      {lead:"Reading a paper from the first word to the last, at the same speed, is the slowest way to understand it."},
      "Experienced readers start by asking what they need from the paper. The answer changes how deeply they read.",
      {table:[["Your purpose","How deeply to read"],["Is this paper relevant to my question?","Title, abstract, figures, conclusion: a few minutes"],["What did they find, and roughly how?","Most of the paper, skipping technical detail"],["Can I rely on this finding or use this method?","Everything, including the methods, tables and supplementary material"],["What is this author arguing? (humanities)","The whole article, in order, because the argument builds"]]},
      "This isn’t cutting corners. You may meet dozens of papers on a topic and only a handful will deserve a deep read. Spending ten minutes on each to find those few is how researchers keep up."
    ]},
    {h:"Three passes", body:[
      "A widely used approach comes from computer scientist S. Keshav’s short guide “How to Read a Paper” (2007). He suggests reading in up to three passes.",
      {fig:'<svg viewBox="0 0 340 360"><defs><marker id="t4u3a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="20" y="10" width="300" height="78" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Pass 1 · 5–10 minutes</text><text class="s" x="170" y="54" text-anchor="middle">title, abstract, introduction, headings,</text><text class="s" x="170" y="72" text-anchor="middle">conclusion, glance at references</text><path class="d-ink" d="M170 88 V108" stroke-width="2" marker-end="url(#t4u3a2)"/><text class="s" x="182" y="104">relevant? if not, stop</text><rect class="d-gold" x="35" y="112" width="270" height="78" rx="8" stroke-width="2"/><text x="170" y="136" text-anchor="middle">Pass 2 · up to an hour</text><text class="s" x="170" y="156" text-anchor="middle">read with care; study figures and</text><text class="s" x="170" y="174" text-anchor="middle">tables; skip proofs and fine detail</text><path class="d-ink" d="M170 190 V210" stroke-width="2" marker-end="url(#t4u3a2)"/><text class="s" x="182" y="206">must you master it?</text><rect class="d-rose" x="50" y="214" width="240" height="78" rx="8" stroke-width="2"/><text x="170" y="238" text-anchor="middle">Pass 3 · hours</text><text class="s" x="170" y="258" text-anchor="middle">rebuild the work in your head;</text><text class="s" x="170" y="276" text-anchor="middle">question every assumption</text><text class="s" x="170" y="318" text-anchor="middle">Most papers stop after pass 1 or 2.</text><text class="s" x="170" y="338" text-anchor="middle">Timings from Keshav (2007).</text></svg>', alt:"Three stacked boxes. Pass 1 takes 5 to 10 minutes: title, abstract, introduction, headings, conclusion and a glance at the references; if the paper isn’t relevant, stop. Pass 2 takes up to an hour: read carefully and study the figures and tables. Pass 3 takes hours and is only for papers you must master.", cap:"Each pass is a decision point. Keshav’s timings are a rough guide; beginners usually need longer."},
      {list:[
        "**Pass 1 (about 5–10 minutes).** Read the title, abstract and introduction, the section headings and the conclusion. Glance at the references. Keshav says you should then be able to answer five questions, his ‘five Cs’: **Category** (what kind of paper is it?), **Context** (which other work and theories does it build on?), **Correctness** (do the assumptions look valid?), **Contributions** (what’s new?) and **Clarity** (is it well written?).",
        "**Pass 2 (up to an hour).** Read the paper with care but skip fine detail such as proofs. Look closely at figures and tables, and mark references you want to follow up. Afterwards you should be able to summarize the main thrust, with supporting evidence, to someone else.",
        "**Pass 3 (several hours for a beginner).** Try to rebuild the work in your head: if you had the same question, how would you have done it? Where does your version differ? This exposes hidden assumptions and weak spots."
      ]},
      {tip:"Keshav wrote for computer science. The same idea works in any field, but the speeds won’t: a dense economics paper or a paper in your second language can take several times longer. That’s normal, not a failing."}
    ]},
    {h:"A practical reading order", body:[
      "For an IMRaD paper, many researchers read in this order during the first two passes:",
      {ol:[
        "Title and abstract: what was asked and claimed?",
        "The last paragraph of the Introduction: the exact aim or hypothesis.",
        "Figures and tables, with their captions: the evidence itself.",
        "The first and last paragraphs of the Discussion, and its limitations paragraph.",
        "Methods: who, how many, what design, what measures.",
        "Results in full, checking each claim against its table or figure."
      ]},
      "For a humanities article, the order is gentler. Read the introduction to find the thesis. Skim the headings and the conclusion to see the shape of the argument. Then read it all in order. The argument builds, so jumping around loses the thread.",
      {tip:"Stuck on jargon? Read a recent review article on the topic first, or the paper’s own introduction, which often defines terms. Keep a personal glossary as you go. If you read in a second language, translation tools can help you understand. But check how key technical terms are translated. A word that is ‘significant’ in statistics means more than ‘important’."}
    ]},
    {h:"Reading figures and tables", body:[
      "Figures and tables are the evidence. Read them before the authors tell you what they mean.",
      {list:[
        "**Read the caption (legend) first.** It says what was measured, in whom, and what the symbols mean.",
        "**Check the axes and units.** Is the vertical axis cut off so it doesn’t start at zero (a [[truncated-axis|truncated axis]]), which can make small differences look large? Is it a logarithmic scale, where equal steps mean multiplying, not adding?",
        "**Find the number of people or cases (n).** A striking pattern from 12 people is less certain than one from 12,000.",
        "**Find out what the error bars show.** They can show the spread of individual values ([[standard-deviation|standard deviation]]), the uncertainty of an average (standard error) or a confidence interval. These are different sizes and mean different things, and only the caption tells you which.",
        "**In tables, read the footnotes.** They define abbreviations and what asterisks mean (often a p-value threshold, explained in Lesson 4). Lesson 5 works through whole results tables ({{results-tables}})."
      ]},
      {warn:"Two bars with error bars that overlap do not automatically mean ‘no difference’, and bars that don’t overlap don’t automatically mean a real difference. It depends on what the bars show and how the comparison was tested. Look for the comparison itself in the text or table."}
    ]},
    {h:"Annotating as you read", body:[
      "An [[annotation-research|annotation]] is a mark or note you add to a text while you read. Good annotation is a conversation with the paper, not coloring it in.",
      {list:[
        "**Highlight sparingly:** the aim, the key numbers, the main claim, the limitations. If everything is yellow, nothing stands out.",
        "**Write in the margin in your own words:** “small sample, all volunteers”, “compare with Table 2”, “is this causal?”.",
        "**Use a few consistent symbols,** such as `?` for unclear, `!` for important, `✗` for doubtful, `→` for a link to another paper.",
        "**Note questions as well as answers.** Your doubts are the start of critical reading (Lesson 6)."
      ]},
      "You can annotate on paper, in many PDF readers and in reference managers. Zotero is a free reference manager (Unit 4 shows how to use it). In Zotero, annotations made in the built-in PDF reader are saved in your Zotero library, not written into the PDF file. **Add Note from Annotations** gathers your highlights and comments into one note."
    ]},
    {h:"Literature notes you can use later", body:[
      "Annotations are on the paper. [[literature-notes|Literature notes]] are what you write afterwards, in a separate place, about one source: a short record you can understand and use months later without rereading the paper.",
      "The golden rule is to keep three things visibly apart:",
      {list:[
        "**Quotations:** the authors’ exact words, in quotation marks, with the page or section.",
        "**Paraphrase:** their ideas in your own words, with the page or section.",
        "**Your own thinking:** your reactions, doubts and links, clearly labeled (for example, starting with “ME:”)."
      ]},
      "Mixing them up is how people accidentally copy words they thought were their own, or credit authors with ideas they never had.",
      {ex:"Source: Okafor & Lindqvist (2025), invented, DOI 10.5555/garden.2025\nQuestion: Does a 12-week gardening group reduce loneliness in adults aged 65+?\nDesign and sample: before-and-after study, no control group; 86 volunteers from 3 community centers in one city.\nKey finding (p. 6, Table 2): loneliness fell 3.1 points on a 20–80 scale (95% CI 1.2 to 5.0).\nQuote (p. 9): “participants valued the routine as much as the plants.”\nAuthors’ limitations (p. 10): volunteers; no comparison group.\nME: Without a control group, the drop could be seasonal. Compare with the trial by …", label:"A literature note (invented study)", mono:true},
      {key:"Write notes your future self can trust: every number with its unit and page, every quote in quotation marks, every opinion of yours labeled as yours."}
    ]}
   ],
   try:[
    {id:"t4u3-l2-x1", type:"mcq", q:"Kenji has found 40 papers that might be relevant to a report due next week. What’s the most sensible plan?", options:[
      {t:"Give each a quick first pass, then read the most relevant few in depth", ok:true, why:"A first pass covers the title, abstract, headings and conclusion. A first pass is designed for exactly this: deciding which papers deserve more time."},
      {t:"Read all 40 in full, in the order he found them", why:"That spends the same effort on irrelevant papers as on key ones, and he’ll run out of time before reaching the best."},
      {t:"Read only the abstracts, then cite the ones that agree with his own view", why:"Abstracts alone can’t show whether a finding is trustworthy, and choosing only agreeing papers is [[confirmation-bias|confirmation bias]]."},
      {t:"Ask an AI tool to summarize all 40 and cite the summaries", why:"Summaries can help you sort papers, but they can be wrong, and you can only cite what you’ve checked in the paper itself (Lesson 6)."}
    ]},
    {id:"t4u3-l2-x2", type:"match", q:"Keshav’s ‘five Cs’ are questions to answer after a first pass. Match each C to its question.", pairs:[
      ["Category","What kind of paper is this?","For example, a measurement study, a new system or a review."],
      ["Context","Which other papers and theories does it build on?","Context places the paper in its conversation."],
      ["Correctness","Do the assumptions look valid?","A first impression of whether the foundations hold."],
      ["Contributions","What does it add that’s new?","The paper’s claimed advance."],
      ["Clarity","Is it well written?","Clarity affects how easily you can check it."]
    ]},
    {id:"t4u3-l2-x3", type:"mcq", q:"A figure shows average test scores for two groups, each with an error bar. Before deciding how uncertain the averages are, what must Lucía check?", options:[
      {t:"The caption, to see whether the bars show standard deviation, standard error or a confidence interval", ok:true, why:"These are different quantities of different sizes. Without knowing which, she can’t interpret the bars."},
      {t:"Whether the bars overlap: overlapping bars always mean no real difference", why:"Overlap rules depend on what the bars show, and even then they’re only rough. The comparison must be tested directly."},
      {t:"Nothing: error bars always show a 95% confidence interval", why:"There’s no such convention. Many figures show standard deviations or standard errors instead."},
      {t:"The color of the bars, which indicates statistical significance", why:"Color is a design choice. Significance, if reported, is in the text, table or caption."}
    ]},
    {id:"t4u3-l2-x4", type:"order", q:"Put this suggested first-and-second-pass reading order for an IMRaD paper in sequence.", items:[
      {t:"Title and abstract", why:"Start with what was asked and claimed."},
      {t:"Last paragraph of the Introduction (the aim)", why:"Next, pin down the exact question."},
      {t:"Figures and tables with their captions", why:"Then look at the evidence before reading the authors’ interpretation."},
      {t:"First and last paragraphs of the Discussion, plus limitations", why:"Then the authors’ main interpretation and the limits they admit."},
      {t:"Methods", why:"Then who, how many and how, so you can judge the evidence."},
      {t:"Results in full, checking each claim against its table or figure", why:"Finally the detailed read, now that you know what to look for."}
    ]},
    {id:"t4u3-l2-x5", type:"sort", q:"Hana is writing literature notes on an invented article. Sort each line by what it is, so she can label it correctly.", buckets:["Quotation","Paraphrase","Her own thinking"], items:[
      {t:"“Remote workers reported fewer interruptions but longer hours” (p. 4).", b:0, why:"Exact words in quotation marks with a page number: a quotation."},
      {t:"Working from home cut interruptions but stretched the working day (p. 4).", b:1, why:"The authors’ idea in different words, still credited with a page: a paraphrase."},
      {t:"I wonder if this holds for people with young children at home.", b:2, why:"A question Hana is raising herself. She should label it, for example with “ME:”."},
      {t:"Their survey reached 1,200 staff at four firms (Methods, p. 3).", b:1, why:"A factual detail restated in her words, credited to the paper."},
      {t:"This contradicts the 2023 study I read last week; check why.", b:2, why:"A link and a to-do that come from Hana, not the authors."},
      {t:"“Hours were self-reported and may be inflated” (p. 9).", b:0, why:"The authors’ exact words in quotation marks: a quotation."}
    ]},
    {id:"t4u3-l2-x6", type:"spot", q:"Here is a literature note an invented student wrote. Which parts will cause problems later?", ask:"will cause problems", parts:[
      {t:"Source: Ito & Mensah (2024), DOI 10.5555/sleep.2024", flag:false, why:"A full source with a DOI: exactly right."},
      " · ",
      {t:"Teens who used phones after 10 pm slept less.", flag:false, why:"A fair paraphrase of a finding. Ideally with a page number, but the meaning is clear."},
      " · ",
      {t:"Sleep fell by 40.", flag:true, why:"40 what? Minutes a night? Percent? A number without its unit and page is useless later."},
      " · ",
      {t:"Phones are the main cause of teen sleep problems", flag:true, why:"Written without quotation marks or a label, it’s unclear whether the authors said this or the student thinks it. It also makes a causal claim a survey may not support."},
      " · ",
      {t:"“Late-night use was associated with shorter sleep” (p. 7)", flag:false, why:"An exact quote with a page number: future-proof."},
      " · ",
      {t:"ME: survey only, so association, not proof of cause.", flag:false, why:"Clearly labeled as the student’s own thinking, and a good critical point."}
    ]},
    {id:"t4u3-l2-x7", type:"explain", q:"Why should your literature notes keep quotations, paraphrase and your own thinking visibly apart? Give an example of what can go wrong if they’re mixed.", size:"3–4 sentences", hint:"Think about reading your notes again six months later, while writing an essay.", model:"Months later you won’t remember which words were the authors’ and which were yours. If a quotation isn’t in quotation marks, you might copy it into your essay as your own writing, which is plagiarism even if accidental. If your own doubt (“the drop could be seasonal”) isn’t labeled, you might cite the authors for an idea they never had. Keeping quotes marked, paraphrase with page numbers and your own ideas labeled “ME:” makes notes you can trust.", points:["Says you won’t remember the source of words later", "Gives the risk of copying unmarked quotes as your own", "Gives the risk of crediting authors with your own ideas", "Describes a way to keep them apart (quotation marks, pages, a label)"]}
   ],
   apply:{intro:"Practice the passes and the notes on a real paper. Use the article you found in Lesson 1, or a new open access one.", tasks:[
     {t:"Do a timed first pass and answer the five Cs.", how:["Set a timer for 10 minutes.","Read only the title, abstract, introduction, headings and conclusion. Glance at the references and figures.","When the timer ends, answer the five Cs in a line each, then decide whether the paper deserves a second pass."], write:"Paper, then Category, Context, Correctness, Contributions, Clarity, and your decision (read on or stop, and why)…"},
     {t:"Read one figure or table in detail.", how:["Choose the figure or table that seems to carry the main result.","Write down what is measured, in whom, how many (n), the units, and what any error bars or asterisks mean (from the caption).","In one sentence, say what it shows, in your own words, before you read the authors’ description. Then compare."], write:"Figure/table number, what it measures, n, units, what the bars or symbols mean, your one-sentence reading, and whether the authors’ text matches it…"},
     {t:"Write a literature note using the three-way rule.", how:["Follow the template in the worked example: source, question, design and sample, key findings with numbers and pages, a short quote, and limitations.","Label your own thoughts with “ME:”.","Save it somewhere you’ll find again, with the full reference or DOI."], write:"Your literature note…"}
   ], proof:"A first-pass record with the five Cs and a decision. Also, a detailed reading of one figure or table, and one literature note that keeps quotations, paraphrase and your own thinking clearly apart."},
   read:[{book:"owg", where:"Chapter 13, “Research Process: Accessing and Recording Information”, Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"},{book:"zotero", where:"“Zotero PDF Reader and Note Editor” (zotero.org/support/pdf_reader)", note:"Optional: how annotations and notes from annotations work in Zotero."}]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u3-l3", title:"Samples, effect sizes and confidence intervals", minutes:60,
   hook:{q:"A study’s result comes with a range of uncertainty around it. If the researchers wanted that range to be half as wide, roughly how many participants would they need, compared with the original study?", options:["Twice as many","Four times as many","Ten times as many","About 50 more, whatever the starting size"], answer:1, reveal:"**About four times as many.** In typical studies, uncertainty shrinks with the square root of the sample size, so halving it means quadrupling the sample. That’s why precise studies are expensive, and why small studies often give very wide ranges. This lesson explains samples, the size of effects, and those ranges, called confidence intervals."},
   goals:[
     "Ask who was studied, how they were chosen and whom the findings can apply to",
     "Say what kinds of claims different designs can support",
     "Read an effect size in raw and standardized form, and tell absolute from relative differences",
     "Interpret a 95% confidence interval correctly and avoid the common wrong readings",
     "Explain how sample size affects precision and what can go wrong with very small or very large studies"
   ],
   learn:[
    {h:"Who was studied?", body:[
      {lead:"Before you look at a single result, find out who the results are about."},
      "Researchers almost never study everyone they are interested in. They study a [[sample]] and use it to learn about a wider [[population-research|population]]. A study of 300 nursing students in two cities is direct evidence about those 300 people; how far it applies to nursing students everywhere depends on how they were chosen.",
      {table:[["Ask","Why it matters"],["How were people chosen?","A [[random-sample|random sample]] gives everyone a known chance of selection. Volunteers, or whoever was easy to reach, may differ from the population in important ways"],["Who was included and excluded?","Results may not apply to groups that were left out (for example, older people or people with other illnesses)"],["How many took part, and how many dropped out?","Size affects precision (below); people who drop out are often different from those who stay"],["Where and when?","A finding from one country, school system or decade may not travel"]]},
      {warn:"A big sample doesn’t fix a biased one. An online poll with 50,000 self-selected responses can describe a population worse than a well-drawn random sample of 1,000, because the problem is who answered, not how many."}
    ]},
    {h:"The design limits the claims", body:[
      "The Methods section also tells you the design, and the design limits what the paper can claim. Unit 6 covers designs in depth (see {{research-designs}}); here is what a reader needs.",
      {list:[
        "**Descriptive** studies say what is there: how many, how often, what people say. They can’t explain why.",
        "**Observational** studies compare groups that already differ (people who exercise and people who don’t). They can show a [[correlation]], but other differences between the groups may explain it. Such a hidden factor is called a [[confounder]].",
        "**Experiments**, especially randomized ones, assign people to conditions by chance. So the groups differ only by chance, apart from the treatment. That is the strongest basis for a claim about [[causation|cause]] (see {{correlation-causation}}).",
        "**Qualitative** studies (interviews, observation) explore experiences and meanings in depth. They aren’t trying to estimate numbers for a population. Judge them by different standards (Lesson 6)."
      ]},
      {ex:"An invented observational study finds that people who drink more tea have fewer heart problems. Before concluding tea protects the heart, ask: do tea drinkers also differ in smoking, income or diet? Each of those could be a confounder. The authors may adjust for some of them statistically, but they can only adjust for what they measured.", label:"Worked example (invented)"}
    ]},
    {h:"Effect size: how big is the difference?", body:[
      "The most important number in most quantitative results is the [[effect-size|effect size]]: how big the difference or relationship is. It answers the question you actually care about, “how much?”, not just “is there anything?”.",
      "Effect sizes come in two main forms.",
      {list:[
        "**Raw (unstandardized):** in the study’s own units, such as “4 points higher on a 100-point test”, “2.5 kg lighter” or “11 minutes more sleep”. These are the easiest to judge if you know the scale.",
        "**Standardized:** converted to a common scale so different studies can be compared. A common one is **Cohen’s d**. It is the difference between two averages divided by the **[[standard-deviation|standard deviation]]** (the typical spread of individual scores around their average). Others include the **correlation coefficient r** (from −1 to +1, where 0 means no linear relationship) and **ratios** such as risk ratios or odds ratios (where 1 means no difference)."
      ]},
      {ex:"Invented study A: 240 students were randomly assigned to use a reading app or not for a term. App users averaged 64 on a 100-point reading test; the others averaged 60. The raw effect is 4 points. Scores in each group spread with a standard deviation of about 12 points, so d ≈ 4 ÷ 12 ≈ 0.33.", label:"Worked example (invented)"},
      "Jacob Cohen suggested d = 0.2, 0.5 and 0.8 as rough markers of ‘small’, ‘medium’ and ‘large’. They are ballpark labels, not rules: as Sullivan and Feinn (2012) put it, they should be informed by context. A ‘small’ effect on deaths can matter enormously; a ‘large’ effect on a trivial outcome may not."
    ]},
    {h:"Absolute and relative differences", body:[
      "Differences in risk can be reported in two ways, and both can be true at once.",
      {ex:"Invented trial: 4 in every 100 people given a placebo had a fall in a year, compared with 3 in every 100 given a balance program.\n\nAbsolute difference: 4% − 3% = 1 percentage point (1 fewer fall per 100 people).\nRelative difference: 1 ÷ 4 = 0.25, so the risk is 25% lower.", label:"Worked example (invented)"},
      "“Cuts falls by 25%” and “one fewer fall per 100 people” describe the same result. The relative figure sounds more impressive, which is why headlines and press releases prefer it. The [[absolute-risk|absolute]] figure tells you how much difference it makes in practice, and it depends on how common the outcome was to begin with. Note the [[percentage-point|percentage point]]: going from 4% to 3% is a drop of 1 percentage point but 25 percent.",
      {tip:"When a paper or a news story gives only a relative change, look in the results tables for the actual numbers in each group. Then work out the absolute difference yourself."}
    ]},
    {h:"Uncertainty and confidence intervals", body:[
      "Any sample gives an estimate. Draw a different sample and you’d get a slightly different one. The [[standard-error|standard error]] measures how much an estimate would typically vary from sample to sample. A [[confidence-interval|confidence interval]] (CI) turns that into a range around the estimate.",
      "Study A above reported its difference as **4 points (95% CI 1 to 7)**. Here is what that means.",
      {list:[
        "**Correct:** the interval was made by a method with this property. If the study were repeated many times and its assumptions held, about 95% of the intervals would contain the true difference. The 95% describes the method, not this particular interval.",
        "**Useful in practice:** values inside the interval (from a 1-point to a 7-point benefit) are reasonably compatible with the data, given the assumptions. Values far outside are much less so. A narrow interval means a precise estimate; a wide one means a lot of uncertainty.",
        "**Wrong:** “There is a 95% probability that the true difference is between 1 and 7.” In the usual (frequentist) statistics behind confidence intervals, this particular interval either contains the true value or it doesn’t. The 95% describes how often such intervals would contain it over many repetitions (Greenland and colleagues, 2016).",
        "**Also wrong:** “95% of students improved by between 1 and 7 points.” The interval is about the *average* difference, not about individuals, whose scores varied far more."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><line class="d-ink" x1="115" y1="20" x2="115" y2="240" stroke-width="2" stroke-dasharray="5 4"/><text class="s" x="119" y="34">no difference</text><text x="20" y="62">A</text><line class="d-ink" x1="126" y1="70" x2="191" y2="70" stroke-width="3"/><line class="d-ink" x1="126" y1="62" x2="126" y2="78" stroke-width="2"/><line class="d-ink" x1="191" y1="62" x2="191" y2="78" stroke-width="2"/><circle class="d-inkf" cx="158" cy="70" r="6"/><text class="s" x="200" y="74">4 (1 to 7)</text><text x="20" y="132">B</text><line class="d-ink" x1="117" y1="140" x2="124" y2="140" stroke-width="3"/><circle class="d-inkf" cx="120" cy="140" r="5"/><text class="s" x="134" y="144">0.5 (0.2 to 0.8)</text><text x="20" y="202">C</text><line class="d-ink" x1="61" y1="210" x2="299" y2="210" stroke-width="3"/><line class="d-ink" x1="61" y1="202" x2="61" y2="218" stroke-width="2"/><line class="d-ink" x1="299" y1="202" x2="299" y2="218" stroke-width="2"/><circle class="d-inkf" cx="180" cy="210" r="6"/><text class="s" x="190" y="196">6 (−5 to 17)</text><line class="d-ink" x1="50" y1="245" x2="310" y2="245" stroke-width="1.5"/><text class="s" x="61" y="264" text-anchor="middle">−5</text><text class="s" x="115" y="264" text-anchor="middle">0</text><text class="s" x="169" y="264" text-anchor="middle">5</text><text class="s" x="223" y="264" text-anchor="middle">10</text><text class="s" x="278" y="264" text-anchor="middle">15</text><text class="s" x="180" y="288" text-anchor="middle">difference in test points (higher = better)</text></svg>', alt:"Three invented results drawn as dots with horizontal interval lines against a dashed vertical line at zero meaning no difference. A: 4 points, interval 1 to 7, entirely above zero. B: 0.5 points, a very short interval from 0.2 to 0.8, just above zero. C: 6 points, a very wide interval from minus 5 to 17 that crosses zero.", cap:"Three invented studies. Dots are estimates, lines are 95% confidence intervals. B is very precise but tiny; C is large but very uncertain."},
      {warn:"Two confidence intervals that overlap don’t prove two groups are the same, and you can’t always judge a difference by eye. Greenland and colleagues (2016) note that intervals can overlap substantially while the difference between them is still statistically significant. Look for the interval for the difference itself."}
    ]},
    {h:"Sample size and precision", body:[
      "Look again at the figure. All three studies are invented, and they show why sample size matters.",
      {table:[["Study","Who","Result","What to make of it"],["A","240 students","4 points (1 to 7)","A moderate effect, estimated with reasonable precision"],["B","40,000 students","0.5 points (0.2 to 0.8)","Very precise, and almost certainly above zero, but tiny on a 100-point test"],["C","20 students","6 points (−5 to 17)","Could be a large benefit, nothing, or slight harm: too small to tell"]]},
      {list:[
        "**Precision grows slowly.** In typical designs, the width of a confidence interval shrinks with the square root of the sample size: four times the people, roughly half the width.",
        "**Small studies** give wide intervals and have low [[statistical-power|power]]. A real effect can easily go undetected. And when a small study does find a statistically significant effect, the estimate tends to be too big. In a small sample, only unusually large estimates reach significance.",
        "**Very large studies** can detect differences too small to matter. As Sullivan and Feinn (2012) observe, a statistically significant result sometimes means only that a huge sample was used."
      ]},
      {key:"Read every result as a size with a range: “about 4 points, plausibly anywhere from 1 to 7”. The size tells you whether it matters; the range tells you how sure to be."}
    ]}
   ],
   try:[
    {id:"t4u3-l3-x1", type:"mcq", q:"An invented study of 2,000 people who answered an online poll about sleep, posted on a fitness website, finds that 70% sleep at least 8 hours. What is the main problem with saying “70% of adults sleep at least 8 hours”?", options:[
      {t:"The respondents chose themselves on a fitness site, so they may differ from adults in general", ok:true, why:"A self-selected sample from one kind of website may be fitter, younger or more health-conscious than the population. The problem is who answered, not how many."},
      {t:"2,000 is too small a sample for any conclusion", why:"2,000 is a decent size. The issue is how people were selected, not the number."},
      {t:"Online polls can never produce any useful data", why:"Online data can be useful when the sampling is designed well. The problem here is self-selection from one website."},
      {t:"Sleep can’t be measured", why:"Sleep can be measured (imperfectly) by self-report or devices. That isn’t the main flaw in this claim."}
    ]},
    {id:"t4u3-l3-x2", type:"sort", q:"Each invented finding below comes from a particular design. Which claim does each design support best?", buckets:["Supports a claim about cause","Shows an association only"], items:[
      {t:"Randomly assigned students who used a reading app scored higher than those who didn’t.", b:0, why:"Random assignment makes the groups alike apart from the app, so it’s the best basis for a causal claim."},
      {t:"Children who own more books score higher on reading tests.", b:1, why:"Book-owning families may differ in many other ways (income, time, parents’ education). These are possible confounders."},
      {t:"Towns with more cycle lanes have lower obesity rates.", b:1, why:"Towns differ in many ways at once; this is an observational comparison."},
      {t:"Wards randomly assigned to use a new handover checklist had fewer medication errors than wards randomly assigned to carry on as before.", b:0, why:"Randomizing the wards to the checklist is an experiment, which supports a causal claim (within that setting)."},
      {t:"People who meditate report less stress in a survey.", b:1, why:"People who choose to meditate may already differ; a survey at one point in time shows association."}
    ]},
    {id:"t4u3-l3-x3", type:"number", q:"An invented trial reports that 5 in every 100 people in the comparison group got an infection, against 4 in every 100 in the treatment group. By what percentage was the risk reduced in relative terms?", answer:20, tol:0.5, unit:"%", why:"The absolute difference is 5% − 4% = 1 percentage point. Relative to the starting risk: 1 ÷ 5 = 0.20, a 20% relative reduction.", wrongs:[{v:1, tol:0.2, why:"1 is the absolute difference, in percentage points. The question asks for the relative reduction: divide that 1 by the starting risk of 5."},{v:25, tol:0.5, why:"25% is 1 ÷ 4, using the treatment group as the base. Relative reduction compares with the comparison (starting) group: 1 ÷ 5."},{v:80, tol:0.5, why:"80% is the risk ratio (4 ÷ 5 = 0.8): the treated group had 80% of the comparison group’s risk. The reduction is 100% − 80% = 20%."}], hint2:"Work out the absolute difference first, then divide it by the comparison group’s risk."},
    {id:"t4u3-l3-x4", type:"mcq", q:"A paper reports: “mean difference 4 points (95% CI 1 to 7)”. Which interpretation is correct?", options:[
      {t:"The CI method captures the true difference in about 95% of repeated studies", ok:true, why:"That’s the correct frequentist reading: the 95% is a property of the method, and the interval shows which values fit the data reasonably well. Here, values from 1 to 7 are reasonably compatible with the data."},
      {t:"There is a 95% probability that the true difference lies between 1 and 7", why:"This is the most common misreading. For a confidence interval, the 95% describes how often the method succeeds over many studies, not the chance that this one interval is right."},
      {t:"95% of participants improved by between 1 and 7 points", why:"The interval is about the average difference. It is not about individuals, whose scores spread much more widely."},
      {t:"If the study were repeated, 95% of new estimates would fall between 1 and 7", why:"Not quite. Repeats would give different intervals; it’s the intervals, not the estimates, that would contain the true value about 95% of the time."}
    ]},
    {id:"t4u3-l3-x5", type:"number", q:"An invented survey of 400 people estimates a percentage with a 95% confidence interval of ±6 percentage points. Roughly how wide (±) would the interval be with 1,600 people, using the same method?", answer:3, tol:0.3, unit:"± percentage points", why:"1,600 is four times 400. Interval width shrinks roughly with the square root of the sample size: √4 = 2, so ±6 becomes about ±3.", wrongs:[{v:1.5, tol:0.2, why:"That divides by 4, as if width shrank in direct proportion to sample size. It shrinks with the square root: √4 = 2."},{v:6, tol:0.3, why:"More people do make the estimate more precise. The width shrinks, roughly with the square root of the sample size."},{v:24, tol:0.5, why:"More people narrow the interval; they don’t widen it."}]},
    {id:"t4u3-l3-x6", type:"match", q:"Match each invented result to the best description.", pairs:[
      ["0.5 points (95% CI 0.2 to 0.8) on a 100-point test, 40,000 people","Precise but tiny","Very narrow interval, clearly above zero, but half a point barely matters."],
      ["6 points (95% CI −5 to 17), 20 people","Imprecise: could be benefit, nothing or harm","The interval spans zero and is very wide."],
      ["4 points (95% CI 1 to 7), 240 people","Moderate and reasonably precise","The whole interval is above zero and not too wide."],
      ["Risk ratio 1.00 (95% CI 0.97 to 1.03), 50,000 people","Precisely estimated as about no difference","A ratio of 1 means no difference, and the narrow interval rules out large effects either way."]
    ]},
    {id:"t4u3-l3-x7", type:"explain", q:"Two invented studies of a reading app report: B (40,000 students) 0.5 points, 95% CI 0.2 to 0.8; C (20 students) 6 points, 95% CI −5 to 17, on a 100-point test. Explain what each result tells you, and how sample size explains the difference.", size:"3–4 sentences", hint:"Read each one as a size with a range.", model:"Study B is very precise: the effect is almost certainly above zero, but half a point on a 100-point test is too small to matter. Study C’s best estimate is bigger, but its interval runs from slight harm to a large benefit, so it can’t tell us anything either way. The difference comes from sample size: bigger samples give narrower intervals. Huge studies can detect trivial effects, while tiny ones are too imprecise to answer the question.", points:["Says B is precise but the effect is too small to matter", "Says C’s wide interval crosses zero, so it is inconclusive", "Links larger samples to narrower intervals", "Separates the size of an effect from how sure we are about it"]}
   ],
   apply:{intro:"Read the numbers in a real paper. Choose a quantitative open access article (a trial, survey or observational study) in any field.", tasks:[
     {t:"Describe the sample and how far it can travel.", how:["In the Methods, find how participants were chosen, how many took part, and who was excluded.","Find how many dropped out (often in a flow diagram or the first results table).","Write one sentence on whom the findings most clearly apply to, and one on whom they may not."], write:"How chosen, n, exclusions, dropouts, who the findings apply to and who they may not…"},
     {t:"Find the main effect size and its confidence interval.", how:["In the Results or Abstract, find the main result with its interval.","Write it out in words: “about X, plausibly from Y to Z”.","Decide whether the size would matter in practice, and say why, using the units."], write:"The main result as reported, your plain-words version, and whether the size matters in practice…"},
     {t:"Convert one relative result to an absolute one (if your paper reports risks).", how:["Find the numbers of people with the outcome in each group.","Work out each group’s percentage, then the difference in percentage points, then the relative change.","If your paper has no risks, find a news story that gives only a relative figure (“cuts risk by half”) and note which extra numbers you’d need."], write:"Each group’s risk, the absolute difference, the relative difference…"}
   ], proof:"A short note on one real paper. Say who was studied and whom the results apply to. Write the main effect as a size with a range. Give an absolute and a relative version of a risk (or note what you would need to work them out)."},
   read:[{book:"bhatt", where:"Chapter 8, “Sampling”, and Chapter 15, “Quantitative Analysis: Inferential Statistics”, section “Basic Concepts”", note:"In Chapter 15, the book describes a 95% confidence interval as plus or minus two standard deviations of the mean estimate. The spread of an estimate (rather than of individual scores) is what most texts now call the standard error, and “about two” is a rounding of 1.96 for large samples. This lesson uses that current wording."}]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u3-l4", title:"p-values and statistical significance", minutes:60,
   hook:{q:"A study reports a result with p = 0.03. What is the probability that the finding is just a fluke?", options:["3%","97%","0.03%","You can’t tell from the p-value alone"], answer:3, reveal:"**You can’t tell from the p-value alone.** This surprises many people, including some researchers. A p-value is calculated by *assuming* there is no real effect, so it can’t also tell you the chance that there is none. The American Statistical Association published a statement in 2016 to correct this and similar misreadings; this lesson walks through it."},
   goals:[
     "Define a p-value correctly, in plain words, and say what a null hypothesis is",
     "Explain what ‘statistically significant’ means and where the 0.05 threshold comes from",
     "Summarize the six principles of the ASA’s 2016 statement on p-values",
     "Recognize and correct the classic misreadings of p-values",
     "Judge a result by its size and uncertainty, not by whether it crossed a threshold"
   ],
   learn:[
    {h:"The question a p-value answers", body:[
      {lead:"A p-value measures how surprising your data would be in an imaginary world where nothing interesting is going on."},
      "Most statistical tests start from a [[null-hypothesis|null hypothesis]]. This is usually the claim that there is no difference or no relationship (the app makes no difference to reading scores; the coin is fair). The researchers then ask a question. If the null hypothesis were true, and all the other assumptions of our statistical model held, how often would we see a result at least as extreme as the one we got?",
      "That probability is the [[p-value]]. The American Statistical Association (ASA) defines it as “the probability under a specified statistical model that a statistical summary of the data … would be equal to or more extreme than its observed value.”",
      {ex:"A friend tosses a coin 10 times and gets 9 heads. Is the coin fair?\n\nImagine it is fair (the null hypothesis). Of the 1,024 equally likely sequences of 10 tosses, 11 have 9 or more heads and 11 have 9 or more tails: 22 in all. So p = 22 ÷ 1,024 ≈ 0.02.\n\nReading: if the coin were fair, a result this lopsided (either way) would happen about 2% of the time.", label:"Worked example: a coin"},
      "Notice what that does *not* say. It doesn’t say there’s a 2% chance the coin is fair. To know that, you’d need to know how common trick coins are, how your friend got this one and so on. The p-value only says how well the data fit the ‘fair coin’ model.",
      {fig:'<svg viewBox="0 0 340 260"><path class="d-rose" d="M273 190 L273 185.6 L277 186.6 L281 187.4 L285 188.1 L289 188.6 L293 188.9 L297 189.2 L301 189.4 L305 189.6 L309 189.7 L313 189.8 L317 189.9 L320 190 Z" stroke-width="1"/><path class="d-rose" d="M20 190 L20 189.9 L24 189.8 L28 189.8 L32 189.7 L36 189.6 L40 189.4 L44 189.2 L48 188.9 L52 188.5 L56 187.9 L60 187.3 L64 186.4 L67 185.6 L67 190 Z" stroke-width="1"/><path class="d-ink" fill="none" d="M20 189.9 L26 189.8 L32 189.7 L38 189.5 L44 189.2 L50 188.7 L56 187.9 L62 186.9 L68 185.4 L74 183.3 L80 180.5 L86 176.8 L92 172.1 L98 166.3 L104 159.2 L110 151.0 L116 141.8 L122 131.6 L128 120.9 L134 110.0 L140 99.4 L146 89.8 L152 81.6 L158 75.3 L164 71.3 L170 70.0 L176 71.3 L182 75.3 L188 81.6 L194 89.8 L200 99.4 L206 110.0 L212 120.9 L218 131.6 L224 141.8 L230 151.0 L236 159.2 L242 166.3 L248 172.1 L254 176.8 L260 180.5 L266 183.3 L272 185.4 L278 186.9 L284 187.9 L290 188.7 L296 189.2 L302 189.5 L308 189.7 L314 189.8 L320 189.9" stroke-width="2"/><line class="d-ink" x1="20" y1="190" x2="320" y2="190" stroke-width="1.5"/><line class="d-ink" x1="273" y1="120" x2="273" y2="190" stroke-width="2" stroke-dasharray="4 3"/><line class="d-ink" x1="67" y1="120" x2="67" y2="190" stroke-width="2" stroke-dasharray="4 3"/><text x="170" y="22" text-anchor="middle">If there were no real effect…</text><text class="s" x="170" y="42" text-anchor="middle">differences we’d get by chance</text><text class="s" x="170" y="60" text-anchor="middle">pile up around zero</text><text class="s" x="290" y="108" text-anchor="middle">observed +4</text><text class="s" x="52" y="108" text-anchor="middle">−4</text><text class="s" x="170" y="208" text-anchor="middle">0</text><text class="s" x="170" y="232" text-anchor="middle">p = the shaded tails beyond ±4</text><text class="s" x="170" y="252" text-anchor="middle">(here about 0.01: very thin)</text></svg>', alt:"A bell-shaped curve centered on zero shows the differences that would occur by chance if there were no real effect. Dashed lines mark the observed difference of plus 4 and its mirror at minus 4. The very thin shaded areas beyond those lines are the p-value, about 0.01.", cap:"Invented study A from Lesson 3. If the app did nothing, chance differences would cluster around zero. The p-value is the share of that curve as far out as the observed result, or further, in either direction."}
    ]},
    {h:"Statistical significance and the 0.05 line", body:[
      "Before analyzing, researchers often choose a threshold called the significance level (α, ‘alpha’). It is most commonly 0.05. If p falls below it, the result is called [[statistical-significance|statistically significant]].",
      "Here is what α controls. Suppose the null hypothesis were true and the assumptions held. A test at α = 0.05 would then wrongly declare significance about 5% of the time in the long run. That is a false-alarm rate for the method. It is not a statement about any single result.",
      {list:[
        "**0.05 is a convention,** not a law of nature. Some fields use much stricter thresholds; many statisticians now advise against treating any single cut-off as decisive.",
        "**“Significant” in statistics doesn’t mean important.** It only means the p-value fell below the chosen line. The everyday meaning causes endless confusion, so read “statistically significant” as “p < 0.05”, nothing more.",
        "**p = 0.049 and p = 0.051 are practically the same evidence.** Treating one as a discovery and the other as a failure makes no sense."
      ]},
      {tip:"In tables, asterisks often mark significance levels (for example, one asterisk for p < 0.05 and two for p < 0.01). The table footnote says which. Exact p-values with effect sizes and confidence intervals are more informative than stars."}
    ]},
    {h:"What the ASA said in 2016", body:[
      "Many people were worried about widespread misuse of p-values. So the American Statistical Association published a formal statement (Wasserstein and Lazar, *The American Statistician*, 2016). It sets out six principles. They are quoted here with a plain-words gloss.",
      {ol:[
        "“P-values can indicate how incompatible the data are with a specified statistical model.” *The smaller p, the worse the data fit the null model, assuming the other assumptions hold.*",
        "“P-values do not measure the probability that the studied hypothesis is true, or the probability that the data were produced by random chance alone.” *Not the chance the null is true; not the chance it’s a fluke.*",
        "“Scientific conclusions and business or policy decisions should not be based only on whether a p-value passes a specific threshold.” *Don’t let 0.05 make the decision for you.*",
        "“Proper inference requires full reporting and transparency.” *If researchers ran many tests and reported only the significant ones, the p-values mislead.*",
        "“A p-value, or statistical significance, does not measure the size of an effect or the importance of a result.” *Look at the effect size and its interval.*",
        "“By itself, a p-value does not provide a good measure of evidence regarding a model or hypothesis.” *Combine it with design, other studies and context.*"
      ]}
    ]},
    {h:"The classic misreadings", body:[
      "These come up constantly, in news stories, student essays and sometimes in published papers. Each one is a well-documented misreading. Most are discussed in the ASA statement or in a guide to misinterpretations by Greenland and colleagues (2016).",
      {table:[["Misreading","Why it’s wrong"],["“p = 0.03, so there’s a 3% chance the null hypothesis is true.”","p is calculated assuming the null is true, so it can’t be the probability that the null is true."],["“p = 0.03, so there’s a 3% chance the result is due to chance.”","Same mistake in different words: p is the chance of data this extreme *given* chance alone, not the chance that chance alone produced them."],["“p > 0.05, so there is no effect.”","A non-significant result may come from a small or noisy study. Look at the interval: it may include large effects as well as zero."],["“p < 0.05, so the effect is important.”","Tiny effects can be significant in large studies. Significance says nothing about size."],["“Significant in women, not significant in men, so the effect differs by sex.”","To claim a difference between groups, test that difference directly. One p below 0.05 and one above don’t show the groups differ."]]},
      {warn:"Many tests, some ‘hits’. If researchers test 20 unrelated outcomes where no real effects exist, at α = 0.05 they should expect about one ‘significant’ result by chance alone. Check how many outcomes or comparisons were tested, and whether the main outcome was declared in advance (Unit 9 covers [[p-hacking]] and [[preregistration]])."}
    ]},
    {h:"Significance is not importance", body:[
      "Go back to the three invented studies from Lesson 3.",
      {table:[["Study","Result","p","Fair summary"],["A (240)","4 points (1 to 7)","0.01","A moderate benefit, estimated fairly precisely"],["B (40,000)","0.5 points (0.2 to 0.8)","0.001","Very likely above zero, but too small to matter"],["C (20)","6 points (−5 to 17)","about 0.3","Inconclusive: not evidence of ‘no effect’"]]},
      "Study B has the smallest p-value and the least important effect. Study C is ‘not significant’, yet its best estimate is the largest; it simply can’t tell. Judging them by p alone would get both wrong.",
      {ex:"A real example is described by Sullivan and Feinn (2012). A large trial of aspirin to prevent heart attacks had more than 22,000 participants, followed for about five years. It found that aspirin was linked to fewer heart attacks, and the result was highly significant (p < 0.00001). But the effect was very small. The risk difference was under 1 percentage point (Sullivan and Feinn give 0.77%). As a result, many people were advised to take aspirin who would not benefit, yet they were exposed to its side effects. Later studies found even smaller effects, and the recommendation was changed. (This is a lesson about statistics, not medical advice.)", label:"Worked example (real)"},
      {key:"A good results sentence gives three things: the size of the effect, its confidence interval, and the exact p-value. The size and interval do most of the work."}
    ]},
    {h:"Reading p-values in practice", body:[
      {ol:[
        "Find the effect size and its confidence interval first. Ask: how big, and how sure?",
        "Then read the p-value as one more clue about how well the data fit the null model, not as a verdict.",
        "Ask whether the main outcome was stated in advance, and how many tests were run.",
        "Treat ‘not significant’ as ‘not shown’, not ‘shown not to exist’, unless the interval is narrow around zero.",
        "Look for other studies. One p-value from one study is rarely the last word."
      ]},
      "You’ll also meet other approaches. For example, **Bayesian** statistics does give probabilities for hypotheses. But it needs a stated starting belief (a ‘prior’), and its intervals (credible intervals) mean something different from confidence intervals. When a paper uses them, its Methods section should say so."
    ]}
   ],
   try:[
    {id:"t4u3-l4-x1", type:"mcq", q:"Which statement correctly describes a p-value?", options:[
      {t:"The probability of a result at least this extreme if the null model were true", ok:true, why:"That is the definition: a probability about the data, calculated in an imagined world where the null model holds. The null model means the null hypothesis plus the model’s other assumptions."},
      {t:"The probability that the null hypothesis is true", why:"p is calculated by assuming the null is true, so it can’t measure the probability that it is (ASA principle 2)."},
      {t:"The probability that the observed result happened by chance alone, with no real effect", why:"This sounds similar but reverses the logic. p is the chance of data this extreme given chance alone, not the chance that chance alone explains the data."},
      {t:"The size of the effect", why:"p says nothing about size (ASA principle 5). A tiny effect in a huge study can have a tiny p."}
    ]},
    {id:"t4u3-l4-x2", type:"spot", q:"A student wrote this summary of an invented study. Which phrases misread the statistics?", ask:"misreads the statistics", parts:[
      "The trial found that the new schedule ",
      {t:"raised attendance by 2 percentage points (95% CI 0.5 to 3.5; p = 0.01)", flag:false, why:"A correct report: size, interval and exact p-value."},
      ". ",
      {t:"This means there is only a 1% chance the finding is a fluke", flag:true, why:"p = 0.01 is not the chance that the result is a fluke. It’s the chance of data this extreme if the schedule made no difference."},
      ". Because the result is ",
      {t:"statistically significant, the effect is clearly large and important", flag:true, why:"Significance doesn’t measure size or importance. Whether 2 percentage points matters is a judgment about the context."},
      ". For younger students the effect was ",
      {t:"not significant (p = 0.20), so the schedule has no effect on them", flag:true, why:"A non-significant result isn’t evidence of no effect; the subgroup may simply be too small to tell. Check its interval."},
      ". ",
      {t:"The researchers declared attendance as their main outcome before collecting data", flag:false, why:"Naming the main outcome in advance is good practice and a reason to trust the p-value more, not a misreading."},
      "."
    ]},
    {id:"t4u3-l4-x3", type:"number", q:"A researcher tests 40 different outcomes. Suppose none of them has any real effect and each test uses α = 0.05. On average, how many will come out ‘statistically significant’ by chance alone?", answer:2, tol:0, unit:"outcomes", why:"Each test has a 5% false-alarm rate when the null is true: 40 × 0.05 = 2. That’s why you should ask how many tests were run before getting excited about a few significant ones.", wrongs:[{v:0, tol:0, why:"If there are no real effects, false alarms still happen at the rate α. With 40 tests, you expect about 2."},{v:1, tol:0, why:"That would be the expectation for 20 tests (20 × 0.05). Here there are 40."},{v:38, tol:0, why:"38 is the expected number of non-significant results (40 × 0.95). The question asks for the significant ones."}]},
    {id:"t4u3-l4-x4", type:"sort", q:"Sort these statements into those the ASA’s 2016 statement supports and those it warns against.", buckets:["Consistent with the ASA statement","A misreading it warns against"], items:[
      {t:"A small p-value suggests the data fit poorly with the null model.", b:0, why:"Principle 1: p-values can show how incompatible the data are with a specified model."},
      {t:"p = 0.04 means the hypothesis has a 96% chance of being true.", b:1, why:"Principle 2: p-values don’t measure the probability that a hypothesis is true."},
      {t:"A policy should be adopted because its trial reached p < 0.05.", b:1, why:"Principle 3: decisions shouldn’t rest only on crossing a threshold."},
      {t:"Readers need to know every test the researchers ran, not just the significant ones.", b:0, why:"Principle 4: proper inference requires full reporting and transparency."},
      {t:"The smaller the p-value, the bigger the effect.", b:1, why:"Principle 5: a p-value doesn’t measure the size of an effect."},
      {t:"A p-value should be weighed together with the design, effect size and other evidence.", b:0, why:"Principle 6: by itself, a p-value isn’t a good measure of evidence."}
    ]},
    {id:"t4u3-l4-x5", type:"mcq", q:"Two invented studies test the same tutoring program. Study 1 (30 students) finds 5 points (95% CI −2 to 12), p = 0.16. Study 2 (3,000 students) finds 0.6 points (95% CI 0.1 to 1.1), p = 0.02. Which summary is fairest?", options:[
      {t:"Study 2 shows a small but fairly certain benefit; Study 1 is inconclusive", ok:true, why:"This reads both by size and interval, as the ASA and Lesson 3 recommend. Study 1 is compatible with anything from slight harm to a large benefit."},
      {t:"Study 2 found a big effect because it’s significant; Study 1 shows the program doesn’t work", why:"Two misreadings at once: significance isn’t size, and non-significance isn’t proof of no effect."},
      {t:"The studies contradict each other, so the program can’t be judged", why:"They don’t contradict: Study 1’s wide interval includes Study 2’s small effect. They just have very different precision."},
      {t:"Study 1 is better because its effect is bigger", why:"Its estimate is bigger but very uncertain; the interval even includes harm. Precision matters as much as the point estimate."}
    ]},
    {id:"t4u3-l4-x6", type:"order", q:"Put these steps for reading a reported result in a sensible order.", items:[
      {t:"Find the effect size: how big is the difference, in real units?", why:"Start with the question you care about: how much?"},
      {t:"Find its confidence interval: how precise is the estimate?", why:"Then how sure: the range of values compatible with the data."},
      {t:"Read the p-value as a measure of fit with the null model", why:"Then the p-value, as one clue among several."},
      {t:"Check whether the outcome was pre-specified and how many tests were run", why:"Then context that changes how much the p-value can be trusted."},
      {t:"Compare with other studies before drawing a conclusion", why:"Finally, place it among other evidence."}
    ]},
    {id:"t4u3-l4-x7", type:"explain", q:"A news report says: “The new exercise programme had no effect on blood pressure (p = 0.3, not statistically significant).” Explain why that conclusion doesn’t follow.", size:"3–4 sentences", hint:"What could a non-significant result come from, and where should you look instead?", model:"A p-value above 0.05 means the data aren’t surprising if there were no effect; it doesn’t show that there is no effect. A small or noisy study can easily miss a real effect. To judge, look at the effect size and its confidence interval: if the interval includes zero but also includes worthwhile drops in blood pressure, the result is inconclusive. “Not significant” means “not shown”, not “shown not to exist”, unless the interval is narrow around zero.", points:["Says a non-significant p doesn’t prove there is no effect", "Mentions that a small or noisy study can miss a real effect", "Says to check the effect size and confidence interval", "Puts it as “not shown” rather than “shown not to exist”"]}
   ],
   apply:{intro:"Practice on real reporting. Use the paper from Lesson 3 or another quantitative open access article.", tasks:[
     {t:"Rewrite a results sentence the careful way.", how:["Find a sentence in the Results or Abstract that reports a p-value.","Rewrite it in plain words with three parts: the size of the effect (with units), its confidence interval, and the exact p-value.","If the paper gives only a p-value or stars, note what’s missing."], write:"The original sentence, your rewrite, and anything missing…"},
     {t:"Hunt for the classic misreadings in the wild.", how:["Find a news story, press release or blog post that reports a study using words like “significant”, “proved” or “no link”.","Check it against the five misreadings in this lesson.","If you can, open the study itself and see whether the story matches the numbers."], write:"Where you found it, the sentence, which misreading (if any), and what the study actually reported…"},
     {t:"Count the tests.", how:["In your paper, count roughly how many outcomes or comparisons were tested (tables are the quickest place).","Check whether a primary outcome was named in advance (look for a trial registration number or a phrase such as ‘primary outcome’).","Note how this affects your trust in any single p-value."], write:"Roughly how many tests, whether a primary outcome was pre-specified, and what that means for you…"}
   ], proof:"A careful rewrite of one real results sentence. Also, one example of a p-value misreading from public reporting (or a note that you found none), and a count of how many tests a real paper ran."},
   read:[{book:"bhatt", where:"Chapter 15, “Quantitative Analysis: Inferential Statistics”, section “Basic Concepts”", note:"Read it for the logic of hypothesis testing. A few sentences there use older shorthand, such as describing p < 0.05 as a 5% chance of being wrong to reject the null hypothesis; the ASA statement and this lesson explain why statisticians now word this more carefully."}]
  },
  /* ===================== LESSON 5 (t4u3-l6, placed before t4u3-l5) ===================== */
  {id:"t4u3-l6", title:"Reading results tables", minutes:60,
   hook:{q:"In an invented study of adults aged 65 and over, dog owners walked 18 minutes a day more than non-owners. After the researchers took age, sex and health into account, the gap shrank to 12 minutes. What is the most likely reason?", options:["The researchers made a calculation error","Dog owners were younger and healthier, and that explained part of the gap","Adding variables always makes every number smaller","The dogs became less energetic during the study"], answer:1, reveal:"**Dog owners were younger and healthier.** Younger, healthier people walk more anyway, so part of the raw 18-minute gap went with age and health, not dogs. Comparing like with like left 12 minutes. Results tables show this as an unadjusted and an adjusted column side by side. This lesson shows how to read them, along with descriptive tables, cross-tabs, reference categories, stars and ratios."},
   goals:[
     "Read a table’s title, notes, units and N before its numbers",
     "Read a descriptive table and a cross-tab, and say which way the percentages run",
     "Interpret a regression coefficient with its standard error, confidence interval and stars, and the table’s N and R²",
     "Explain reference categories, controls, adjusted and unadjusted results, and odds ratios",
     "Avoid the common over-readings, and work through a table in a real paper"
   ],
   learn:[
    {h:"Read the frame before the numbers", body:[
      {lead:"A results table is a dense summary of a study. Read it like a map: the legend first."},
      "Lesson 2 gave the basics for figures and tables. Results tables are easier if you follow a fixed routine, because the same few kinds turn up again and again. They are a descriptive table of who was studied, cross-tabs, and tables of statistical models such as regression. Before you read any number, find:",
      {list:[
        "**The title:** what is shown, and in whom.",
        "**The outcome and its units:** minutes, points, a percentage, yes or no. In model tables the outcome is usually named in the title or at the top of each column.",
        "**The columns:** groups (owners and non-owners) or models (Model 1, Model 2).",
        "**N (or n):** how many people or cases each column rests on.",
        "**The notes:** what brackets contain, what stars mean, what was adjusted for, and abbreviations."
      ]},
      {tip:"Notes are where authors put the things that change the meaning: “standard errors in parentheses”, “adjusted for age and sex”, “weighted”. Skipping them is the most common way to misread a table."}
    ]},
    {h:"Descriptive tables: who was studied", body:[
      "Most quantitative papers open their results with a [[descriptive-table|descriptive table]], so often Table 1 that people call it that. It describes the sample, often split by the groups being compared. Here is an invented one, from a study of 850 adults aged 65 and over asking whether owning a dog goes with walking more:",
      {table:[
        ["Characteristic","Dog owners (n = 300)","Non-owners (n = 550)"],
        ["Age, mean (SD)","71.0 (5.1)","75.4 (6.3)"],
        ["Women, n (%)","168 (56.0)","319 (58.0)"],
        ["Health good, n (%)","194 (64.7)","280 (50.9)"],
        ["Health fair, n (%)","75 (25.0)","165 (30.0)"],
        ["Health poor, n (%)","21 (7.0)","77 (14.0)"],
        ["Health not reported, n (%)","10 (3.3)","28 (5.1)"],
        ["Minutes walked a day, median (IQR)","45 (20–75)","25 (10–50)"]
      ]},
      {list:[
        "**Check what each number is.** “Mean (SD)” gives the average and the [[standard-deviation|standard deviation]]. “Median (IQR)” gives the middle value and the interquartile range (the middle half of the values). It is used for skewed data. “n (%)” gives a count and its percentage of the column.",
        "**Compare the groups.** Here the dog owners are younger and healthier. Those are possible [[confounder|confounders]]: younger, healthier people walk more anyway. A good paper deals with them later.",
        "**In randomized trials, don’t look for p-values here.** Groups formed by chance differ only by chance, so the CONSORT 2025 reporting guideline says significance tests of baseline differences are not recommended. What matters is whether a chance imbalance is big enough to matter."
      ]},
      "Data Literacy Unit 5 covers means, medians, standard deviations and quartiles in more depth ({{centre-spread}})."
    ]},
    {h:"Cross-tabs: which way do the percentages run?", body:[
      "A [[crosstab|cross-tab]] shows one categorical variable broken down by another. The same study, counting who walked at least 30 minutes a day:",
      {table:[
        ["","Walks 30+ min","Doesn’t","Total"],
        ["Dog owners","180 (60.0%)","120 (40.0%)","300"],
        ["Non-owners","242 (44.0%)","308 (56.0%)","550"],
        ["Total","422 (49.6%)","428 (50.4%)","850"]
      ]},
      "These are **row percentages**: each row adds to 100%, so they compare owners with non-owners, 60% against 44%, a gap of 16 [[percentage-point|percentage points]]. **Column percentages** would answer a different question: of the 422 people who walk 30 minutes or more, 180 (42.7%) own a dog. That mostly reflects how many owners are in the sample.",
      "So for any cross-tab, ask whether the percentages add to 100% across rows, down columns or over the whole table. Research Skills Unit 8 shows how to build cross-tabs from your own survey ({{crosstabs}}). Data Literacy Unit 7, Lesson 4 shows how a chi-square test checks whether a pattern like this could be chance ({{chi-square-tests}})."
    ]},
    {h:"Regression tables: one row per variable", body:[
      "A regression model estimates how an outcome changes with several variables at once. Data Literacy Unit 7, Lesson 4 fits a line with one variable ({{linear-regression}}). Papers usually include several variables. Here is an invented table from the same study, with numbered parts:",
      {fig:'<svg viewBox="0 0 340 440"><circle class="d-gold" cx="18" cy="14" r="9" stroke-width="1.5"/><text class="s" x="18" y="18" text-anchor="middle">1</text><text x="36" y="18">Table 2. Minutes walked a day</text><text class="s" x="36" y="36">Linear regression, adults 65+</text><text x="200" y="62" text-anchor="middle">Model 1</text><text x="280" y="62" text-anchor="middle">Model 2</text><line class="d-ink" x1="10" y1="72" x2="330" y2="72" stroke-width="1.5"/><text x="36" y="92">Owns a dog</text><text x="200" y="92" text-anchor="middle">18.0***</text><text class="s" x="200" y="107" text-anchor="middle">(3.0)</text><text x="280" y="92" text-anchor="middle">12.0***</text><text class="s" x="280" y="107" text-anchor="middle">(3.2)</text><circle class="d-gold" cx="322" cy="88" r="9" stroke-width="1.5"/><text class="s" x="322" y="92" text-anchor="middle">2</text><circle class="d-gold" cx="240" cy="103" r="9" stroke-width="1.5"/><text class="s" x="240" y="107" text-anchor="middle">3</text><text x="36" y="130">Age (years)</text><text x="200" y="130" text-anchor="middle">–</text><text x="280" y="130" text-anchor="middle">−0.9***</text><text class="s" x="280" y="145" text-anchor="middle">(0.2)</text><text x="36" y="168">Woman</text><text x="200" y="168" text-anchor="middle">–</text><text x="280" y="168" text-anchor="middle">2.0</text><text class="s" x="280" y="183" text-anchor="middle">(2.9)</text><circle class="d-gold" cx="18" cy="202" r="9" stroke-width="1.5"/><text class="s" x="18" y="206" text-anchor="middle">5</text><text x="36" y="206">Health (ref. = good)</text><text x="48" y="228">Fair</text><text x="200" y="228" text-anchor="middle">–</text><text x="280" y="228" text-anchor="middle">−8.0*</text><text class="s" x="280" y="243" text-anchor="middle">(3.4)</text><text x="48" y="266">Poor</text><text x="200" y="266" text-anchor="middle">–</text><text x="280" y="266" text-anchor="middle">−21.0***</text><text class="s" x="280" y="281" text-anchor="middle">(4.6)</text><circle class="d-gold" cx="322" cy="262" r="9" stroke-width="1.5"/><text class="s" x="322" y="266" text-anchor="middle">4</text><text x="36" y="304">Constant</text><text x="200" y="304" text-anchor="middle">41.0***</text><text class="s" x="200" y="319" text-anchor="middle">(1.8)</text><text x="280" y="304" text-anchor="middle">113.0***</text><text class="s" x="280" y="319" text-anchor="middle">(17.7)</text><line class="d-ink" x1="10" y1="330" x2="330" y2="330" stroke-width="1"/><circle class="d-gold" cx="18" cy="356" r="9" stroke-width="1.5"/><text class="s" x="18" y="360" text-anchor="middle">6</text><text x="36" y="350">N</text><text x="200" y="350" text-anchor="middle">850</text><text x="280" y="350" text-anchor="middle">812</text><text x="36" y="372">R²</text><text x="200" y="372" text-anchor="middle">0.04</text><text x="280" y="372" text-anchor="middle">0.09</text><line class="d-ink" x1="10" y1="382" x2="330" y2="382" stroke-width="1.5"/><text class="s" x="10" y="400">Standard errors in brackets. Invented data.</text><text class="s" x="10" y="418">* p &lt; 0.05</text><text class="s" x="112" y="418">** p &lt; 0.01</text><text class="s" x="214" y="418">*** p &lt; 0.001</text></svg>', alt:"An invented regression table titled Table 2, minutes walked a day, linear regression, adults 65 and over, with two columns, Model 1 and Model 2, and numbered markers. Owns a dog: Model 1, 18.0 with three stars, standard error 3.0; Model 2, 12.0 with three stars, standard error 3.2 (marker 2 on the coefficient, marker 3 on the standard error). Age in years: Model 2 only, minus 0.9 with three stars, standard error 0.2. Woman: Model 2 only, 2.0, standard error 2.9, no stars. Health, reference category good (marker 5): fair, minus 8.0 with one star, standard error 3.4; poor, minus 21.0 with three stars, standard error 4.6 (marker 4 on the stars). Constant: 41.0 in Model 1, 113.0 in Model 2. N: 850 and 812; R squared: 0.04 and 0.09 (marker 6). Notes: standard errors in brackets; one star p less than 0.05, two stars p less than 0.01, three stars p less than 0.001. Marker 1 is on the title.", cap:"An invented regression table. Model 1 is unadjusted; Model 2 adjusts for age, sex and health."},
      {list:[
        "**① Outcome:** minutes walked a day. Every coefficient is in those units.",
        "**② [[regression-coefficient|Coefficient]]:** in Model 2, dog owners walked about **12 minutes a day more** than non-owners, on average, **holding the other variables constant**. This means compared with people of the same age, sex and health. For a numeric variable, the coefficient is per one unit: each extra year of age went with 0.9 fewer minutes.",
        "**③ [[standard-error|Standard error]] (in brackets):** how much the estimate would vary from sample to sample (Lesson 3). Some tables put t-statistics or intervals in brackets instead; the note says which.",
        "**④ Stars:** here `*` means p < 0.05, `**` p < 0.01 and `***` p < 0.001. Conventions vary, so read the note. Some journals, such as the *American Economic Review*, tell authors not to use stars at all and to report standard errors instead.",
        "**⑤ Reference category:** see the next section.",
        "**⑥ N and R²:** Model 2 used 812 people, not 850, because 38 had no health data. Always check why cases drop out: when models shown side by side use different people, part of any change between them can come from who was left out. [[r-squared|R²]] = 0.09 means the model accounts for about 9% of the variation in minutes walked in these data."
      ]},
      {ex:"Approximate 95% CI = coefficient ± 1.96 × SE\n\nOwns a dog, Model 2:\n12.0 ± 1.96 × 3.2 = 12.0 ± 6.3\n= 5.7 to 18.3 minutes a day\n\n12.0 ÷ 3.2 = 3.75 standard errors from zero,\nwhich is why it has three stars.", label:"Worked example: from standard error to interval", mono:true},
      "The **constant** (or intercept) is the predicted outcome when every variable is zero or at its reference category. In Model 2 that is a 0-year-old man in good health without a dog, so it is the line’s anchor, not a finding."
    ]},
    {h:"Categories, controls and adjusted results", body:[
      "**Reference categories.** A categorical variable such as health (good, fair, poor) enters the model as yes/no indicators. There is one fewer indicator than the number of categories. The category left out is the [[reference-category|reference category]]. It is shown as “ref.”, a dash, 0 or 1.00, or named in the row label. Each coefficient compares its category with the reference. “Poor −21.0” means people in poor health walked about 21 minutes a day less than people in **good** health of the same age, sex and dog ownership. It does not mean 21 minutes less than average. If you choose a different reference, the numbers change, but the model doesn’t.",
      "**Controls and adjustment.** Variables added so that comparisons are like with like are called controls or covariates ([[control-variable|control variables]]). Model 1 is **unadjusted**. Model 2 is [[adjusted-estimate|adjusted]] for age, sex and health. The dog coefficient fell from 18.0 to 12.0. About a third of the raw gap went with owners being younger and healthier. The STROBE reporting guideline for observational studies asks authors to give unadjusted and, where relevant, adjusted estimates with their precision. It also asks them to say which confounders they adjusted for and why.",
      {warn:"Adjustment only covers confounders that were measured, and measured well. Something unmeasured, such as a love of the outdoors, may still explain part of the 12 minutes."}
    ]},
    {h:"Ratios: odds ratios and their cousins", body:[
      "When the outcome is yes or no, papers often use **logistic regression**, and tables show [[odds-ratio|odds ratios]] (OR), sometimes headed “exp(B)”. Others show risk ratios (RR) or, for time until an event, hazard ratios (HR). All are ratios, so **1 means no difference**, and an interval that includes 1 is compatible with no difference.",
      {ex:"Odds of walking 30+ minutes:\n  owners      180 ÷ 120 = 1.50\n  non-owners  242 ÷ 308 = 0.786\nOdds ratio  1.50 ÷ 0.786 = 1.91\n\nRisk ratio  60.0% ÷ 44.0% = 1.36\n\nAdjusted OR from a logistic model\n(invented): 1.6 (95% CI 1.2 to 2.2)", label:"Worked example: the cross-tab as ratios", mono:true},
      "An odds ratio of 1.91 doesn’t mean owners were 1.9 times as likely to walk 30 minutes: the risk ratio says 1.36 times. When an outcome is common, as here, the odds ratio sits further from 1 than the risk ratio. Data Literacy Unit 1, Lesson 2 explains why ({{absolute-relative-risk}}).",
      {tip:"If a logistic table shows raw coefficients rather than odds ratios, they are on the log-odds scale, where 0 (not 1) means no difference. Check the column heading."}
    ]},
    {h:"What not to over-read", body:[
      {list:[
        "**Stars aren’t importance.** A tiny effect in a huge sample can get three stars (Lesson 4).",
        "**No stars isn’t no effect.** “Woman 2.0 (2.9)” has an interval of about −3.7 to 7.7 minutes: compatible with no difference, and with a modest one either way.",
        "**Control coefficients aren’t the findings.** The model was built to estimate the dog effect. The coefficients for age or health may themselves be confounded. They may also capture only part of their effect, because other variables in the model lie on the path to walking. Westreich and Greenland (2013) called reading them as effects the **[[table-2-fallacy|Table 2 fallacy]]**.",
        "**Coefficients on different scales don’t compare directly.** 12.0 for yes/no dog ownership and −0.9 per year of age can only be compared in real units. Ten years of age goes with about 9 minutes.",
        "**R² isn’t a grade.** A low R² is normal for human behavior and doesn’t make a coefficient wrong; a high one doesn’t show cause.",
        "**Association isn’t cause.** Unless the design supports it (Unit 6), a coefficient describes a pattern. Perhaps healthier people get dogs *and* walk more ({{correlation-causation}}).",
        "**Many rows, many tests.** A table with 30 coefficients will show a star or two by chance."
      ]}
    ]},
    {h:"Working through a table in a real paper", body:[
      "Choose an open access paper with a regression table. Journals such as *PLOS ONE* and *BMJ Open*, and many in the Directory of Open Access Journals, publish them in full. Then:",
      {ol:[
        "Read the table’s title and notes. Write down the outcome and its units.",
        "Find N for each column and compare it with the Methods. Note any drop.",
        "Find the row for the main variable in the research question: its coefficient or ratio, and its standard error or interval.",
        "Say it in one sentence: “On average, X was associated with a [size] [unit] difference in Y, holding [controls] constant (95% CI … to …).”",
        "Check the reference category of any categorical variable you mention.",
        "If both are given, compare unadjusted and adjusted results: what changed, and why might it have?",
        "Check that the abstract’s words match the table: size, uncertainty and any causal language (Lesson 6)."
      ]},
      {key:"Frame first, then the row that answers the question, then its size and uncertainty in words. Everything else in the table is supporting detail."},
      "To go further, Data Literacy Unit 7 shows how to fit and test regression lines yourself. Data Literacy Unit 8, Lesson 5 fits a first model in R ({{summary-stats-r}})."
    ]}
   ],
   try:[
    {id:"t4u3-l6-x1", type:"match", q:"Match each part of a regression table to what it tells you.", pairs:[
      ["`12.0***` in the “Owns a dog” row","The estimated difference in the outcome, in its units","A coefficient is the estimated difference in the outcome for that variable, holding the other variables in the model constant."],
      ["(3.2) under the coefficient","How much the estimate would vary from sample to sample","Brackets usually hold the standard error; the table note confirms it."],
      ["`***` after the coefficient","The p-value fell below the threshold in the note","Stars mark p-value thresholds, here p < 0.001. They say nothing about size."],
      ["N = 812","How many cases the model used","N can be smaller than the sample when some cases have missing data."],
      ["R² = 0.09","The share of variation in the outcome the model accounts for","R² describes fit in these data: about 9% here. It isn’t a measure of cause."]
    ]},
    {id:"t4u3-l6-x2", type:"sort", q:"The cross-tab shows walking 30+ minutes by dog ownership, in an invented study. Which percentages answer each question?", buckets:["Row percentages (within owners and within non-owners)","Column percentages (within walkers and within non-walkers)"], items:[
      {t:"Are dog owners more likely than non-owners to walk 30 minutes a day?", b:0, why:"To compare owners with non-owners, take percentages within each of those groups: 60% against 44%."},
      {t:"What share of non-owners walk 30 minutes a day?", b:0, why:"That is a percentage within the non-owner row: 242 of 550, 44%."},
      {t:"Of the people who walk 30 minutes a day, what share own a dog?", b:1, why:"That is a percentage within the walkers’ column: 180 of 422, 42.7%."},
      {t:"Of the people who don’t walk 30 minutes a day, what share are non-owners?", b:1, why:"Within the “doesn’t” column: 308 of 428, 72.0%."},
      {t:"How much more common is regular walking among owners than non-owners, in percentage points?", b:0, why:"Compare the row percentages: 60% − 44% = 16 percentage points."}
    ]},
    {id:"t4u3-l6-x3", type:"number", q:"In the invented table, “Health: fair” has a coefficient of −8.0 with a standard error of 3.4. Using coefficient ± 1.96 × SE, what is the **lower** limit of its approximate 95% confidence interval, in minutes?", answer:-14.66, tol:0.15, unit:"minutes", why:"1.96 × 3.4 = 6.664. Lower limit = −8.0 − 6.664 = −14.66; upper limit = −8.0 + 6.664 = −1.34. The whole interval is below zero, which fits its one star (p < 0.05). Using 2 instead of 1.96 gives −14.8, close enough for reading a table.", wrongs:[
      {v:-11.4, tol:0.1, why:"That is −8.0 − 3.4: you subtracted one standard error. A 95% interval needs about 1.96 standard errors on each side."},
      {v:-1.34, tol:0.1, why:"That is the upper limit (−8.0 + 6.664). With a negative coefficient, the lower limit is the more negative number."},
      {v:-4.6, tol:0.1, why:"That is −8.0 + 3.4: one standard error, in the wrong direction. Use 1.96 × 3.4 = 6.664 and subtract it."},
      {v:6.66, tol:0.1, why:"6.66 is 1.96 × 3.4, the half-width of the interval. Subtract it from the coefficient: −8.0 − 6.664."}
    ], hint2:"Multiply 3.4 by 1.96, then subtract the result from −8.0."},
    {id:"t4u3-l6-x4", type:"mcq", q:"The table shows “Health (ref. = good): Poor `−21.0***` (4.6)”. Which reading is correct?", options:[
      {t:"People in poor health walked about 21 minutes a day less than similar people in good health", ok:true, why:"Each category is compared with the reference category, good health. The other variables (age, sex, dog ownership) are held constant."},
      {t:"People in poor health walked about 21 minutes a day less than the average participant", why:"The comparison is with the reference category, good health, not with the average."},
      {t:"Poor health causes people to walk 21 minutes a day less than they otherwise would", why:"An observational coefficient shows an association. And as a control variable it is open to the Table 2 fallacy: it may be confounded."},
      {t:"21% of people in poor health walked less than people in good health did", why:"The coefficient is in the outcome’s units, minutes a day, not a percentage of people."}
    ]},
    {id:"t4u3-l6-x5", type:"spot", q:"Fatima summarized the invented Table 2 for a class. Tap each sentence that **over-reads** the table.", ask:"over-reads the table", parts:[
      {t:"After adjusting for age, sex and health, dog owners walked about 12 minutes a day more than non-owners (95% CI about 5.7 to 18.3).", flag:false, why:"A careful reading: size, units, adjustment and interval."},
      " ",
      {t:"So getting a dog makes older people walk 12 minutes more a day.", flag:true, why:"An observational coefficient shows an association. Healthier, more active people may be the ones who get dogs."},
      " ",
      {t:"Being a woman has no effect on walking, because that row has no stars.", flag:true, why:"No stars doesn’t mean no effect. The interval runs from about −3.7 to 7.7 minutes. This fits modest differences in either direction."},
      " ",
      {t:"Model 2 used 812 of the 850 participants, because 38 had no health data.", flag:false, why:"Correct, and important to note: those 38 may differ from the rest."},
      " ",
      {t:"Poor health is the strongest cause of walking less, since its coefficient is the biggest.", flag:true, why:"There are two over-readings. It’s a control coefficient (the Table 2 fallacy), and the model wasn’t designed to estimate the causes of walking in general."}
    ]},
    {id:"t4u3-l6-x6", type:"mcq", q:"The dog coefficient is 18.0 in Model 1 (dog ownership only) and 12.0 in Model 2 (adding age, sex and health). What does the change suggest?", options:[
      {t:"Part of the raw gap went with owners being younger and healthier", ok:true, why:"Adjusting compares owners and non-owners of the same age, sex and health. About a third of the 18 minutes went with those differences, as Table 1 hinted."},
      {t:"Model 1 was calculated wrongly and should be ignored", why:"Both are legitimate. The unadjusted estimate shows the raw difference; the adjusted one compares like with like. STROBE asks authors to report both."},
      {t:"Owning a dog has a bigger effect on older people than younger ones", why:"That would be a moderator (an interaction), which neither model tests."},
      {t:"The 12 minutes is now certain to be the causal effect of a dog", why:"Adjustment only covers confounders that were measured. Something unmeasured could still explain part of the 12 minutes."}
    ]},
    {id:"t4u3-l6-x7", type:"order", q:"Put these steps for reading a results table in a real paper in a sensible order.", items:[
      {t:"Read the title and notes; write down the outcome and its units", why:"The frame comes first: without it, no number can be read correctly."},
      {t:"Check N for each column against the Methods", why:"Next, how many cases each result rests on, and whether any dropped out."},
      {t:"Find the row for the variable in the research question", why:"Then go straight to the row that answers the question."},
      {t:"Write its size and interval as one plain sentence, naming the controls", why:"Turn the row into words: size, units, uncertainty and what was held constant."},
      {t:"Compare the abstract’s claims with what the table shows", why:"Last, check the authors’ words against the evidence."}
    ]},
    {id:"t4u3-l6-x8", type:"explain", q:"In the invented dog-walking study, the “owns a dog” coefficient fell from 18.0 minutes (unadjusted) to 12.0 minutes after adjusting for age, sex and health. Explain what this change tells you, and why the 12 minutes still may not all be caused by the dog.", size:"3–4 sentences", hint:"Who were the dog owners in Table 1, and what can adjustment not cover?", model:"Dog owners in the sample were younger and healthier, and younger, healthier people walk more anyway. Adjusting compares owners with non-owners of the same age, sex and health, and the gap shrank by about a third, so part of the raw difference came from those confounders. But adjustment only covers what was measured. Something unmeasured, such as a love of the outdoors, could still explain some of the 12 minutes, and the design is observational, so it shows an association, not cause.", points:["Says owners differed in age and health (confounders)", "Explains that adjustment compares like with like, so the gap shrank", "Notes adjustment only covers measured variables", "Says the coefficient shows association, not cause"]}
   ],
   apply:{intro:"Read the tables of a real paper. Use the quantitative open access paper from Lessons 3 and 4, or find one with a regression table.", tasks:[
     {t:"Read Table 1", how:["Find the descriptive table (often Table 1).","Note N for each group and how each variable is summarized (mean and SD, median and IQR, n and %).","Note any differences between groups that could be confounders, and whether the paper adjusts for them later."], write:"Groups and their N… How variables are summarized… Possible confounders… Adjusted later?…"},
     {t:"Decode the main model table", how:["Find the table with the main result. Write down the outcome, its units and the kind of model (linear, logistic or other).","Find the row for the main variable. Write its coefficient or ratio, its standard error or interval, and what the stars mean.","Name the reference category of any categorical variable, and list the controls.","If only a standard error is given, work out the approximate 95% interval with coefficient ± 1.96 × SE. For an odds ratio, use the interval the authors give."], write:"Outcome and units… Model… Main row… Interval… Reference categories… Controls…"},
     {t:"Check the words against the table", how:["Write the main result as one plain sentence, using the template in this lesson.","Compare it with the abstract’s claim: are size, uncertainty and adjustment the same? Any causal words the design can’t support?","Note one over-reading you could imagine a news story making from this table."], write:"My sentence… The abstract’s claim… Match or mismatch… A tempting over-reading…"}
   ], proof:"Notes on one real paper. Say what its descriptive table shows and which confounders it hints at. Decode the main model row (outcome, units, size, interval, reference categories, controls). Add a plain-words result and compare it with the abstract."},
   read:[
    {book:"openintro", where:"Chapter 9, “Multiple and logistic regression”: Section 9.1 “Introduction to multiple regression” (on indicator and categorical variables as predictors, and adjusted R²) and Section 9.5 “Introduction to logistic regression”", note:"Worked examples of reading multiple and logistic regression output, with the reference level explained."},
    {book:"bhatt", where:"Chapter 15, “Quantitative Analysis: Inferential Statistics”, section “General Linear Model”", note:"How dummy variables represent categories (its example uses two dummies for three industry sectors: always one fewer than the number of categories) and what coefficients mean. One sentence there swaps the names of the intercept (β0) and the slope (β1); the usual convention is the reverse."}
   ]
  },
  /* ===================== LESSON 6 (t4u3-l5) ===================== */
  {id:"t4u3-l5", title:"Reading critically, with and without AI", minutes:60,
   hook:{q:"A paper’s competing-interests statement says it was funded by a company that sells the product being tested. What does that tell you?", options:["The results are false","Nothing: peer review removes any bias","It’s a reason to read the methods and results especially carefully, not proof of bias","You should never cite it"], answer:2, reveal:"**A reason to read carefully, not proof of bias.** Industry-funded studies can be excellent, and independent ones can be flawed. A declared interest tells you where to look harder: the design, the choice of outcomes, and whether the conclusions match the numbers. That habit of fair, structured questioning is critical appraisal, and it applies to AI summaries too."},
   goals:[
     "Appraise a study with a structured set of questions about its question, design, sample, measures, results and conclusions",
     "Spot overclaiming (spin) by comparing the abstract and discussion with the results",
     "Use yardsticks that fit the kind of research: quantitative, qualitative, humanities and reviews",
     "Place one paper among other evidence, including corrections and retractions",
     "Use AI reading tools to get oriented, and check every claim they make against the paper"
   ],
   learn:[
    {h:"What critical appraisal is", body:[
      {lead:"Reading critically doesn’t mean looking for reasons to reject a paper. It means deciding, fairly and for stated reasons, how much to trust it and for what."},
      "[[critical-appraisal-term|Critical appraisal]] is a structured judgment of how far you can trust a study, what its results are, and how relevant it is. Compare it with a building survey before you buy a house. The surveyor doesn’t refuse every house with a crack. The surveyor notes which cracks matter, how much, and what they mean for you. Every study has limitations. The question is whether they’re serious enough to change the conclusion you would draw.",
      "Appraisal also depends on your purpose. A small, honest pilot study can be perfectly good for “is this worth investigating?” and useless for “should every hospital do this?”.",
      "Appraisal has two sides. One is internal: is the study sound on its own terms? The other is external: does it apply to your situation? A flawless trial in one country’s hospitals may not transfer to a very different health system. A modest study done in a setting like yours may tell you more than a perfect one done elsewhere."
    ]},
    {h:"The core questions", body:[
      "Different checklists word them differently, but most ask the same things, in roughly the order a paper presents them.",
      {fig:'<svg viewBox="0 0 340 400"><defs><marker id="t4u3a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 Z"/></marker></defs><rect class="d-lup" x="30" y="8" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="28" text-anchor="middle">1 · Question</text><text class="s" x="170" y="45" text-anchor="middle">clear and worth asking?</text><path class="d-ink" d="M170 52 V62" stroke-width="2" marker-end="url(#t4u3a5)"/><rect class="d-lup" x="30" y="66" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="86" text-anchor="middle">2 · Design</text><text class="s" x="170" y="103" text-anchor="middle">able to answer that question?</text><path class="d-ink" d="M170 110 V120" stroke-width="2" marker-end="url(#t4u3a5)"/><rect class="d-soft" x="30" y="124" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="144" text-anchor="middle">3 · Sample</text><text class="s" x="170" y="161" text-anchor="middle">who, how chosen, who dropped out?</text><path class="d-ink" d="M170 168 V178" stroke-width="2" marker-end="url(#t4u3a5)"/><rect class="d-soft" x="30" y="182" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="202" text-anchor="middle">4 · Measures</text><text class="s" x="170" y="219" text-anchor="middle">valid and reliable?</text><path class="d-ink" d="M170 226 V236" stroke-width="2" marker-end="url(#t4u3a5)"/><rect class="d-gold" x="30" y="240" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="260" text-anchor="middle">5 · Results</text><text class="s" x="170" y="277" text-anchor="middle">size, interval, all outcomes shown?</text><path class="d-ink" d="M170 284 V294" stroke-width="2" marker-end="url(#t4u3a5)"/><rect class="d-sage" x="30" y="298" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="318" text-anchor="middle">6 · Conclusions</text><text class="s" x="170" y="335" text-anchor="middle">do they match the results?</text><text class="s" x="170" y="370" text-anchor="middle">Throughout: funding, interests,</text><text class="s" x="170" y="390" text-anchor="middle">and what other studies show</text></svg>', alt:"Six stacked boxes joined by arrows: 1 Question, clear and worth asking? 2 Design, able to answer it? 3 Sample, who, how chosen, who dropped out? 4 Measures, valid and reliable? 5 Results, size, interval, all outcomes shown? 6 Conclusions, do they match the results? A note underneath says to consider funding, interests and other studies throughout.", cap:"A weakness early in the chain (a design that can’t answer the question) matters more than polish later on."},
      {table:[["Ask","Warning signs"],["Does the design fit the question?","Causal claims from a single survey; no comparison group"],["Who was studied?","Volunteers only; many dropouts; groups unlike the people you care about"],["Were the measures sound?","Questionnaires that were not validated. Outcomes that were self-reported when they could have been measured (see [[validity]] and [[reliability]])"],["Are the results complete?","Only significant outcomes reported; effect sizes without intervals"],["Do the conclusions follow?","Stronger words in the abstract than the results support"]]},
      "Finally, the Discussion should state the [[study-limitations|limitations]]. Honest, specific limitations are a good sign. If you can spot a serious problem the authors don’t mention, note it."
    ]},
    {h:"Spotting spin", body:[
      "[[spin-research|Spin]] is reporting that makes results look more favorable or certain than they are. It is usually subtle, and often unintentional.",
      {list:[
        "**Causal language from non-causal designs:** “X *improves* Y” when the study only found that X and Y go together.",
        "**Switching the spotlight:** the main outcome showed nothing, so the abstract leads with a secondary outcome that did.",
        "**Rescuing non-significant results:** phrases like “a trend toward significance” or “marginally significant”.",
        "**Over-generalizing:** a study of one city’s university students concluding about “young people”.",
        "**Relative figures only:** “halves the risk” with no absolute numbers (Lesson 3)."
      ]},
      {ex:"Invented abstract: “Our survey of 640 office workers shows that standing desks reduce back pain.”\nResults section: workers who had chosen standing desks reported slightly less back pain (difference 0.4 on a 10-point scale, 95% CI −0.1 to 0.9).\n\nProblems: a one-off survey can’t show that desks *reduce* pain (people with bad backs may avoid standing desks); the interval includes no difference; and 0.4 on a 10-point scale is small. A fair sentence: “Workers using standing desks reported slightly less back pain, but the difference was small and uncertain, and the design can’t show cause.”", label:"Worked example (invented)"}
    ]},
    {h:"Different research, different yardsticks", body:[
      "The questions above fit quantitative studies. Other kinds of research need other questions.",
      {list:[
        "**Qualitative studies** aren’t trying to measure how common something is. Ask instead: did the approach fit the question? Were participants and settings described richly? Is the analysis transparent, with quotes that support each theme? Do the researchers reflect on how their own position may have shaped what they found?",
        "**Humanities articles:** is the thesis clear? Is the evidence (archives, texts, artworks) well chosen and accurately used? Does the author deal fairly with other interpretations and counter-evidence? Do footnotes let you check the sources?",
        "**Reviews:** how were studies found and selected? A review that explains its search and selection can be checked; one that doesn’t may have picked studies to fit a view (Unit 5 covers reviews)."
      ]},
      "You don’t have to invent your questions. The free **CASP checklists** (Critical Appraisal Skills Programme) give short question lists for trials, qualitative studies, systematic reviews and more. [[reporting-guideline|Reporting guidelines]] list what a paper of each type should report. The EQUATOR Network collects them. Examples are CONSORT for randomized trials (updated in 2025), STROBE for observational studies and PRISMA for systematic reviews. If a key item is missing from a paper, note it."
    ]},
    {h:"One paper is one voice", body:[
      "Scholarship is a conversation. A single study, however good, is one contribution, and its result may not hold up when others try again.",
      {list:[
        "**Check the paper’s status:** has it been corrected, had an [[expression-of-concern|expression of concern]], or been [[retraction|retracted]]? Unit 1 shows how.",
        "**Look for reviews:** a [[systematic-review|systematic review]] or [[meta-analysis]] combines many studies. It usually deserves more weight than any one of them.",
        "**See who cites it:** later papers that cite it may confirm, extend or challenge it (Unit 2 shows how to follow citations forward).",
        "**Watch your own bias:** we all scrutinize papers we disagree with harder than those we like. Apply the same questions to both ([[confirmation-bias]])."
      ]}
    ]},
    {h:"AI reading tools: what they do", body:[
      "AI tools built on large language models ([[generative-ai]]) can now help with reading. They fall into a few broad kinds:",
      {table:[["Kind","Example (checked November 2026)","What it does"],["One-line summaries in a search engine","Semantic Scholar’s TLDRs","Short automatic summaries shown with search results"],["Ask questions of documents you upload","NotebookLM, and the file features of general chatbots","Answers from your sources, often citing the passage it used"],["Research assistants","Elicit, among others","Search for papers and summarize or compare findings"],["General chatbots","ChatGPT, Claude, Gemini, Copilot","Explain jargon, translate, summarize pasted text"]]},
      "Used well, they speed up the first pass: deciding what a paper is about, decoding unfamiliar terms, or getting a reading in your own language. Features, limits and prices change often, and many have free and paid tiers."
    ]},
    {h:"Using AI without being misled", body:[
      "AI summaries fail in predictable ways. They can [[hallucination|invent]] details or citations. They can mix up numbers from different tables, drop the limitations, or turn “associated with” into “causes”. They may summarize only the abstract, or describe a different paper with a similar title. Tools that cite passages are easier to check, but even a cited passage can be misread (see {{ai-chatbot-accuracy}}).",
      {ol:[
        "Use the AI output as a map, not a source: it tells you where to look.",
        "For every claim you might use, find the exact place in the paper (page, section, table) that supports it.",
        "Check every number against the table or figure it came from.",
        "Check that limitations, uncertainty and design caveats survived the summary.",
        "Cite the paper, never the summary, and only for what you’ve verified yourself."
      ]},
      "If an AI tool runs the statistics or draws the charts for you, Track 3, Unit 9, Lesson 6 shows how to check them ({{checking-ai-data-work}}).",
      {warn:"Think before you upload. A paper’s license, your institution’s rules and a tool’s privacy terms may limit what you can upload. Never upload confidential material, such as a manuscript you’ve been asked to peer-review or unpublished data about people. Policies on AI use in research differ between universities, publishers and funders, and change often; Unit 9 covers them."},
      {key:"An AI summary is a lead, not evidence. The paper is the evidence, and you are the reader responsible for what you take from it."}
    ]}
   ],
   try:[
    {id:"t4u3-l5-x1", type:"order", q:"Put the core appraisal questions in the order a paper usually lets you answer them.", items:[
      {t:"Is the research question clear?", why:"The introduction states the question first."},
      {t:"Can this design answer it?", why:"Next, the design in the Methods."},
      {t:"Who was studied, and how were they chosen?", why:"Then the sample, also in the Methods."},
      {t:"Were the measures valid and reliable?", why:"Then the instruments and outcomes."},
      {t:"Are the results complete, with sizes and intervals?", why:"Then the Results."},
      {t:"Do the conclusions match the results?", why:"Finally, the Discussion and Abstract, checked against everything above."}
    ]},
    {id:"t4u3-l5-x2", type:"sort", q:"These sentences come from invented abstracts. Which are fair to the design described, and which overclaim?", buckets:["Fair to the design","Overclaims"], items:[
      {t:"From a one-off survey: “Students who slept less reported lower grades.”", b:0, why:"Describes an association without claiming cause. Fair."},
      {t:"From a one-off survey: “Lack of sleep causes lower grades.”", b:1, why:"A survey at one point in time can’t establish cause; poor grades could disrupt sleep, or a third factor could affect both."},
      {t:"From a randomized trial in three hospitals: “The checklist reduced errors in these hospitals.”", b:0, why:"A randomized design supports a causal claim, and the sentence keeps to the setting studied."},
      {t:"From interviews with 15 teachers in one district: “Teachers nationwide distrust the new curriculum.”", b:1, why:"A small qualitative study explores experiences in depth. It can’t estimate what teachers nationwide think."},
      {t:"From a trial with p = 0.07: “The app showed a trend toward improved mood.”", b:1, why:"‘A trend toward significance’ is a common form of spin. The fair statement is that the result was inconclusive, with its interval."},
      {t:"From interviews with 15 teachers: “Participants described three sources of distrust.”", b:0, why:"Reports what these participants said, which is what an interview study can show."}
    ]},
    {id:"t4u3-l5-x3", type:"match", q:"Match each kind of study to a fitting appraisal tool or reporting guideline.", pairs:[
      ["Randomized controlled trial","CONSORT reporting guideline","CONSORT sets out what a trial report should include; its 2025 update is the current version."],
      ["Observational study (cohort, case-control, cross-sectional)","STROBE reporting guideline","STROBE covers observational studies in epidemiology."],
      ["Systematic review","PRISMA reporting guideline","PRISMA covers how reviews report their search, selection and results."],
      ["Interview study","A qualitative appraisal checklist (for example, CASP’s)","Qualitative research needs questions about fit, transparency and reflexivity (the researcher’s awareness of their own influence), not sample-size calculations."]
    ]},
    {id:"t4u3-l5-x4", type:"spot", q:"Mei asked an AI tool to summarize an invented paper. The paper says: a survey of 1,200 adults in two cities; people who cycled to work reported less stress (association only); difference 0.3 points on a 10-point scale, 95% CI 0.1 to 0.5; the authors note the sample was not representative. Which parts of the AI summary are wrong?", ask:"doesn’t match the paper", parts:[
      {t:"A survey of 1,200 adults in two cities", flag:false, why:"Matches the paper."},
      " found that ",
      {t:"cycling to work reduces stress", flag:true, why:"The paper reports an association from a survey. ‘Reduces’ is a causal claim the design can’t support."},
      " by ",
      {t:"3 points on a 10-point scale", flag:true, why:"The paper says 0.3 points. A slipped decimal point makes a tiny effect look large."},
      " (",
      {t:"95% CI 0.1 to 0.5", flag:false, why:"Matches the paper."},
      "). ",
      {t:"The findings apply to adults in general.", flag:true, why:"The authors say the sample was not representative. The summary dropped that limitation and over-generalized."}
    ]},
    {id:"t4u3-l5-x5", type:"mcq", q:"Tomás used a document-question tool on an open access paper. It answered: “The study found a 12% improvement (see Results).” What should he do before using this in his report?", options:[
      {t:"Check the 12% against the paper’s own passage and table, then cite the paper", ok:true, why:"Check what it’s 12% of, too. Checking the source passage and number is the only way to know the claim is right, and you cite the paper, not the summary."},
      {t:"Nothing: the tool pointed to the Results, so it’s accurate", why:"A pointer helps, but tools can misread or mix up numbers. He still needs to read the passage himself."},
      {t:"Cite the AI tool as the source of the finding", why:"The finding comes from the paper. If the tool’s use needs disclosing, that’s separate; the evidence is the paper."},
      {t:"Ask the tool the same question again and use the answer if it’s the same twice", why:"Repeating a question tests consistency, not accuracy. Only the paper can confirm the number."}
    ]},
    {id:"t4u3-l5-x6", type:"mcq", q:"Which of these is appropriate to upload to a general AI chatbot? Choose all that apply (assume the chatbot’s terms allow uploads).", options:[
      {t:"An open access paper published under a license that allows reuse", ok:true, why:"Openly licensed, published material is generally fine to process. You should still check your institution’s rules."},
      {t:"A manuscript a journal has sent you to peer-review", why:"Peer review is confidential. Uploading a manuscript under review shares someone else’s unpublished work."},
      {t:"Interview transcripts with participants’ names in them", why:"That’s personal data collected under promises of confidentiality. It needs protection. It should not be uploaded to a third-party tool."},
      {t:"Your own notes on a published paper, with no personal data", ok:true, why:"Your own notes about published work raise no confidentiality issue, though your course or employer may have its own rules."}
    ]},
    {id:"t4u3-l5-x7", type:"explain", q:"An abstract says: “Our survey of 900 students shows that eating breakfast improves exam results.” Explain why this is likely to be spin, and write a fairer version of the sentence.", size:"3–4 sentences", hint:"What can a one-off survey show, and what can’t it?", model:"A one-off survey can show that breakfast and exam results go together, but not that breakfast causes better results. Students who eat breakfast may differ in other ways, such as sleep, family income or study habits, which could explain the link. “Improves” is causal language the design can’t support. A fairer version: “Students who ate breakfast tended to have higher exam results; because this was a survey, we can’t say whether breakfast caused the difference.” I’d also check the size and interval in the results.", points:["Says a survey can show an association, not cause", "Names a possible confounder", "Identifies “improves” as causal language", "Gives a fairer rewrite that drops the causal claim"]}
   ],
   apply:{intro:"Appraise a real paper, then test an AI summary against it.", tasks:[
     {t:"Appraise one paper with the six core questions.", how:["Use a paper you’ve already read in this unit, or a new open access one.","For each of the six questions (question, design, sample, measures, results, conclusions), write one or two sentences.","End with a verdict: how much would you trust its main claim, for what purpose, and why?","Optional: download the free CASP checklist for that type of study from casp-uk.net and compare."], write:"Paper, then one or two sentences for each question, and your verdict…"},
     {t:"Compare the abstract with the results.", how:["Copy the main claim from the abstract.","Find the result that supports it in the Results section or a table.","Note any spin: causal words, a changed spotlight, stronger wording, missing uncertainty."], write:"Abstract claim, matching result, and any spin you found (or a note that it matched well)…"},
     {t:"Fact-check an AI summary of the same paper (optional, if you use an AI tool).", how:["Check the tool’s terms and the paper’s license first; use an open access paper.","Ask for a summary that includes the design, sample, main result with its interval, and limitations.","Check every claim against the paper, marking each as correct, wrong or missing. Note any limitations it left out."], write:"Tool used, claims checked (correct / wrong / missing), and what it left out…"}
   ], proof:"A short appraisal of one real paper with a reasoned verdict. Also, a comparison of its abstract with its results, and (if you used AI) a claim-by-claim check of an AI summary."},
   read:[{book:"bhatt", where:"Chapter 5, “Research Design”", note:"Background reading on what makes designs stronger or weaker for different kinds of claims."},{book:"acrl", where:"Frame “Scholarship as Conversation”", note:"Short and conceptual: why one paper is one voice in an ongoing conversation."}]
  }
  ],
  checkpoint:["t4u3-q02","t4u3-q06","t4u3-q11","t4u3-q15","t4u3-q20","t4u3-q22","t4u3-q25","t4u3-q29","t4u3-q31","t4u3-q34","t4u3-q39","t4u3-q43"],
  cpBank:[
   {id:"t4u3-cp01", lesson:"t4u3-l1", level:1, q:"Gabriel finds a paper titled **“Why some fishing cooperatives last: a review of 64 studies”**. What kind of paper is it most likely to be?", options:[
     {t:"An original research article reporting a new study", why:"An original article reports data that the authors collected or analyzed themselves. “A review of 64 studies” signals a summary of other people’s work."},
     {t:"A review article that summarizes many studies on one question", ok:true, why:"A review brings many studies together, which makes it a good place to start a topic."},
     {t:"A case study of one fishing cooperative", why:"A case study gives a detailed account of one organization or place. This title covers 64 studies."},
     {t:"A commentary giving one expert’s opinion", why:"A commentary is an opinion or reply, not a structured summary of many studies."}]},
   {id:"t4u3-cp02", lesson:"t4u3-l1", level:1, q:"Rosa wants to know whether the authors of a paper have shared their data and code. Which section should she look at?", options:[
     {t:"Funding", why:"The funding statement says who paid for the work, not whether the data are shared."},
     {t:"Competing interests", why:"This section declares financial or personal stakes. It doesn’t say where data are."},
     {t:"Author contributions", why:"This section says who did what in the project, not whether data and code are available."},
     {t:"Data availability", ok:true, why:"The data availability statement, in the back matter, says whether the data and code are shared, and where."}]},
   {id:"t4u3-cp03", lesson:"t4u3-l2", level:1, q:"Leilani highlights almost every sentence of a paper in yellow. Later she can’t find the key points. What would work better?", options:[
     {t:"Highlight only key points and add short notes in her own words", ok:true, why:"If everything is yellow, nothing stands out. A few highlights plus notes in her own words make the paper usable later."},
     {t:"Use a second color to highlight the sentences that are even more important", why:"More coloring doesn’t fix the problem. Good annotation is a conversation with the paper, not coloring it in."},
     {t:"Stop annotating and reread the whole paper each time she needs it", why:"Rereading is slow. Brief, selective annotations and notes save that time."},
     {t:"Copy every highlighted sentence into her notes without quotation marks", why:"Copying without quotation marks risks using the authors’ words as her own, and it adds no thinking."}]},
   {id:"t4u3-cp04", lesson:"t4u3-l3", level:2, q:"A headline says a hand-washing campaign **“cuts infections by a quarter”**. In the study, 8 in every 100 children got an infection without the campaign and 6 in every 100 with it. Which description is correct?", options:[
     {t:"25 percentage points lower in absolute terms; 2% lower in relative terms", why:"These are swapped. The absolute drop is 8% − 6% = 2 percentage points; the relative drop is 2 ÷ 8 = 25%."},
     {t:"2 percentage points lower in absolute terms; about 33% lower in relative terms", why:"33% comes from dividing by 6. The relative change compares with the starting risk: 2 ÷ 8 = 25%."},
     {t:"2 percentage points lower in absolute terms; 25% lower in relative terms", ok:true, why:"Both are true at once: 2 fewer infections per 100 children (absolute), which is a quarter of the starting risk (relative). The headline uses the relative figure."},
     {t:"The absolute and relative changes are the same: 2%", why:"They differ. The absolute change is 2 percentage points; the relative change is 25%, because it is measured against the starting risk of 8%."}]},
   {id:"t4u3-cp05", lesson:"t4u3-l3", level:2, q:"In an invented trial, one group averages 72 on a test and the other averages 66. Scores in each group spread with a standard deviation of about 15. What is Cohen’s d, roughly?", options:[
     {t:"6", why:"6 is the raw difference in test points. Cohen’s d divides that difference by the standard deviation."},
     {t:"0.4", ok:true, why:"d = difference ÷ standard deviation = 6 ÷ 15 = 0.4: between Cohen’s ballpark ‘small’ (0.2) and ‘medium’ (0.5), to be judged in context."},
     {t:"2.5", why:"This divides the standard deviation by the difference (15 ÷ 6), which is upside down."},
     {t:"0.08", why:"This divides the difference by one group’s average (6 ÷ 72). Cohen’s d uses the standard deviation, the typical spread of scores."}]},
   {id:"t4u3-cp06", lesson:"t4u3-l4", level:2, q:"A table cell reads `2.1**`. The footnote says: “`*` p < 0.05; `**` p < 0.01”. Which reading is correct?", options:[
     {t:"There is less than a 1% chance this result is due to chance", why:"This is the classic misreading. A p-value is the chance of data this extreme if the null were true, not the chance that chance produced the result."},
     {t:"The effect is about twice as large as a result with one asterisk", why:"Asterisks mark p-value thresholds, not effect sizes. They say nothing about how big the effect is."},
     {t:"An effect of 2.1 is large and important", why:"Significance doesn’t measure size or importance. Whether 2.1 matters depends on the scale and the context."},
     {t:"p < 0.01, which alone says nothing about size or importance", ok:true, why:"The footnote defines the stars: two means p < 0.01. To judge size and importance, look at the effect itself, its units and its confidence interval."}]},
   {id:"t4u3-cp07", lesson:"t4u3-l4", level:3, q:"Two labs test the same idea in the same way. Lab A finds a 3-point difference (95% CI 0 to 6), p = 0.049. Lab B finds 3 points (95% CI −0.1 to 6.1), p = 0.051. A blog says Lab A made a discovery and Lab B failed. What is the fairest reading?", options:[
     {t:"The blog is right: only Lab A crossed the 0.05 line", why:"0.05 is a convention, not a law of nature. Results either side of it can be practically the same evidence."},
     {t:"Lab B’s result disproves Lab A’s", why:"A non-significant result doesn’t show there’s no effect. Here both labs estimated the same size of effect."},
     {t:"Practically the same evidence: same effect, near-identical intervals", ok:true, why:"p = 0.049 and p = 0.051 are nearly identical, and the effect sizes and intervals agree. The size and interval do most of the work."},
     {t:"Neither result means anything, because both p-values are close to 0.05", why:"Both studies give useful estimates: about 3 points, plausibly from about 0 to 6. Being close to a threshold doesn’t make data worthless."}]},
   {id:"t4u3-cp08", lesson:"t4u3-l5", level:2, q:"A trial’s main outcome was students’ grades, which showed no difference. Attendance, a secondary outcome, improved. The abstract opens: “Mentoring boosts attendance.” Which kind of spin is this?", options:[
     {t:"Giving relative figures only", why:"This kind of spin gives a relative change without absolute numbers. The problem here is which outcome is highlighted."},
     {t:"Switching the spotlight to a secondary outcome", ok:true, why:"The main outcome showed nothing, so the abstract leads with a secondary outcome that did. Readers may never learn the main result."},
     {t:"Over-generalizing attendance results to all students", why:"Over-generalizing is about who the result applies to. Nothing here stretches the population."},
     {t:"No spin: reporting any positive outcome is fair", why:"Reporting the secondary result is fine, but leading with it while hiding a null main outcome makes the results look better than they are."}]},
   {id:"t4u3-cp09", lesson:"t4u3-l5", level:2, q:"Rhea is appraising a history article arguing that guild records show women ran many businesses in an 18th-century port. Which question fits this kind of article best?", options:[
     {t:"Was the sample chosen at random, and how many people dropped out?", why:"Sampling and dropout questions fit quantitative studies. A humanities article argues from sources such as archives."},
     {t:"Is the main p-value below 0.05, so the result is significant?", why:"An argued essay from archives usually has no statistical test. It is judged by its evidence and argument."},
     {t:"Was there a comparison group assigned by chance, as in a trial?", why:"Randomized comparison groups belong to experiments. They do not belong to historical arguments from records."},
     {t:"Are sources used well, and are rival readings handled fairly?", ok:true, why:"Humanities articles are argued essays. Appraise the thesis, the use of sources, the handling of counter-evidence, and whether footnotes let you check."}]},
   {id:"t4u3-cp10", lesson:"t4u3-l5", level:3, q:"A well-run trial in large city hospitals in Norway found a discharge program reduced readmissions. Amina runs a small rural clinic in Malawi. How should she appraise the trial for her purpose?", options:[
     {t:"Accept it fully: a sound trial gives results that apply everywhere", why:"Internal soundness isn’t the same as relevance. A result may not transfer to a very different setting."},
     {t:"It is sound, but ask whether it fits her setting and patients", ok:true, why:"Appraisal has two sides: is the study sound, and does it apply to your situation? A modest study in a setting like hers may tell her more."},
     {t:"Reject it, because a study from another country is never relevant", why:"That goes too far. It may still be useful evidence; she needs to judge how well it transfers."},
     {t:"Look only at its p-value to decide", why:"A p-value says nothing about whether the setting matches hers, or about the size of the effect."}]},
   {id:"t4u3-cp11", lesson:"t4u3-l2", level:3, q:"An abstract says tutoring “greatly improved math scores”. Table 2 (page 7) shows a difference of 1.5 points on a 100-point test (95% CI −0.5 to 3.5). What should Pablo write in his literature note?", options:[
     {t:"“Tutoring greatly improves math scores (Table 2).”", why:"This repeats the abstract’s claim as if it were his own summary, and the table doesn’t support “greatly”."},
     {t:"Nothing: the abstract is misleading, so the paper should be ignored", why:"The paper still contains useful data. He should record what it actually found."},
     {t:"“1.5 points (95% CI −0.5 to 3.5), Table 2, p. 7. ME: abstract overstates.”", ok:true, why:"The note records the actual size, interval and location, and labels his own judgment. The abstract is the authors’ claim; the Results show whether to believe it."},
     {t:"Copy the abstract’s sentence without quotation marks, since abstracts are summaries", why:"Unquoted copying mixes the authors’ words with his own, which risks plagiarism. And it records the claim, not the evidence."}]},
   {id:"t4u3-cp12", lesson:"t4u3-l3", level:3, q:"A pilot study with 16 people found a large, statistically significant effect (d = 1.2). A later trial with 900 people, same design, found d = 0.2. What is the most likely explanation?", options:[
     {t:"The later trial must have been done badly", why:"Nothing suggests that. Large trials give more precise estimates; the pattern fits the pilot’s small size."},
     {t:"Small studies are imprecise, and significant ones tend to overestimate", ok:true, why:"In a small sample only unusually large estimates reach significance, so they tend to overstate. The larger trial’s estimate is more precise."},
     {t:"Larger samples shrink effects, so neither result can be trusted", why:"Sample size doesn’t change the true effect. It changes how precisely the effect is estimated."},
     {t:"The effect must have faded because people got used to the treatment", why:"That’s a guess with no evidence here. The known pattern of small studies explains the difference without it."}]},
  ],
  codex:[
   {id:"paper-structure", title:"How academic papers are structured", aka:["IMRaD","anatomy of a paper","parts of a research article"], tags:["research","reading"],
    summary:"The IMRaD pattern of most empirical papers, the other shapes scholarship takes, and the parts around the main text.",
    levels:{
     starter:[
      "A research paper is a formal report of research, written so other experts can understand, check and build on it. Most papers in the sciences, health and social sciences follow the same four-part pattern, called [[imrad|IMRaD]]: Introduction (why the study was needed), Methods (what was done), Results (what was found) and Discussion (what it means).",
      "Knowing the pattern is like knowing the layout of a supermarket: you can go straight to the aisle you need. The aim is usually in the last paragraph of the Introduction; the main finding is restated at the start of the Discussion; the limitations come near the end of the Discussion.",
      "Not every paper looks like this. Humanities articles in history, literature or philosophy are usually argued essays: they state a thesis early and defend it section by section, often with no Methods heading at all. Reviews summarize many studies. Commentaries give opinions.",
      {key:"The abstract tells you what the authors claim; the Methods and Results tell you whether to believe it."},
      "Around the main text sit other useful parts: the abstract (a short summary at the top), the references (the works the authors used), and short statements about who funded the work and whether the authors have competing interests. Once you know where each part lives, you can judge a paper’s relevance in a minute and start judging its trustworthiness in an hour."
     ],
     builder:[
      {h:"Front, middle and back"},
      "The **front matter** (title, authors, affiliations, dates, abstract, keywords, DOI) lets you judge relevance in a minute. A structured abstract has labeled parts; an unstructured one is a single paragraph. Abstracts are the authors’ own summary and can sound more certain than the results.",
      "The **main text** in IMRaD papers narrows from a broad topic to one precise study and then widens again in the Discussion, often drawn as an hourglass. Common variations: Results and Discussion merged; Methods at the end or in supplementary files; a separate Conclusion; a Related Work section in computing. Qualitative papers present themes illustrated by quotations rather than statistics.",
      "The **back matter** includes references, funding, competing interests, data availability, author contributions and supplementary material. Check for corrections or a retraction notice on the article page.",
      {h:"Other shapes"},
      {table:[["Shape","Where the claim lives"],["Argued essay (humanities, law)","Thesis in the introduction, defended throughout"],["Definition–theorem–proof (mathematics)","The theorems"],["Review","Summary tables and the conclusions"]]},
      {h:"Using the structure to read faster"},
      "Because each section has one job, you can read out of order: the aim (end of the Introduction), the evidence (figures and tables), the main interpretation (start of the Discussion), the limitations (end of the Discussion), then the Methods to judge it all. When sections are merged, renamed or moved, the jobs still exist, so look for them under other names. In qualitative papers, “Findings” often replaces “Results”, and the Methods may include a passage on the researchers’ own position."
     ],
     pro:[
      "IMRaD is a twentieth-century convention. Sollaci and Pereira (2004) surveyed four leading general medical journals and found it first appearing in the 1940s, used by most original articles in the 1970s and the only pattern by the 1980s, with each journal adopting it fully at a different time. Other fields adopted it later or partly, and some never have.",
      "Journals impose their own variations through author guidelines, and reporting guidelines (such as CONSORT for trials or PRISMA for systematic reviews) shape what must appear where, for example a participant flow diagram or a registration number. When a section seems to be missing, check the supplementary material and the journal’s format before assuming it was left out.",
      "Humanities scholarship has its own conventions: extensive footnotes that carry both citations and side-arguments, engagement with previous interpretations (in history, the historiography), and descriptive or allusive headings. The ‘method’ is usually visible in the choice and handling of sources rather than in a separate section. Books (monographs) and edited volumes are often as important as journal articles in these fields.",
      "Professionals also read the paratext: received and accepted dates, the handling editor, whether peer review reports are published (some journals do this), and version history for preprints, where the current version may differ substantially from earlier ones.",
      "Some article types have their own conventions. Short communications and letters compress everything. [[registered-report|Registered reports]] are reviewed in two stages: the introduction and planned methods are reviewed, and can be accepted in principle, before the data are collected, which reduces the pressure to publish only positive findings."
     ]
    },
    related:["reading-strategies","critical-appraisal","scholarly-publishing"],
    read:[{book:"owg", where:"Section 14.1 “Compiling Sources for an Annotated Bibliography”"}],
    sources:[{t:"Sollaci & Pereira (2004), The IMRAD structure: a fifty-year survey, J Med Libr Assoc 92(3)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC442179/"},{t:"Nazarbayev University Library: Reading scholarly articles", url:"https://nu.kz.libguides.com/reading-scholarly-articles"}], checked:"2026-11"},

   {id:"reading-strategies", title:"Reading a paper in passes", aka:["three-pass method","how to read a paper"], tags:["research","reading"],
    summary:"Read with a purpose, in up to three passes, and read figures and tables before the authors’ interpretation.",
    levels:{
     starter:[
      "Reading a paper from the first word to the last at one steady speed is slow and tiring. Experienced readers decide first why they are reading, then read in layers.",
      "A popular method from computer scientist S. Keshav (2007) uses up to three passes. The **first pass** (about 5–10 minutes) covers the title, abstract, introduction, headings and conclusion, just enough to decide whether the paper matters to you. The **second pass** (up to an hour) is a careful read that skips the finest detail but studies the figures and tables. The **third pass**, for the few papers you must master, means rebuilding the work in your head and questioning every assumption.",
      "Most papers stop after the first or second pass. That’s not laziness: it’s how researchers find the handful of papers that deserve hours.",
      "Before you start, write your purpose in one line: “Is this relevant to my question?”, “What did they find?” or “Can I rely on this?”. That line tells you when you can stop. For humanities articles, find the thesis first, then read in order, because the argument builds from section to section."
     ],
     builder:[
      {h:"The five Cs"},
      "After a first pass, Keshav suggests you should be able to answer five questions: Category (what type of paper?), Context (what does it build on?), Correctness (do the assumptions look valid?), Contributions (what’s new?) and Clarity (is it well written?).",
      {h:"A practical order for IMRaD papers"},
      {ol:["Title and abstract","The aim, at the end of the Introduction","Figures and tables with captions","First and last paragraphs of the Discussion, and the limitations","Methods","Results in full, checked against tables and figures"]},
      "Humanities articles are better read in order once you’ve found the thesis, because the argument builds.",
      {h:"Figures and tables"},
      "Read the caption first; check axes, units and scales; find n; and find what the error bars show. Standard deviation (spread of individuals), standard error (uncertainty of an average) and confidence intervals are different sizes, and only the caption tells you which you’re looking at. Table footnotes define abbreviations and asterisks.",
      {h:"When you get stuck"},
      "Mark the passage, keep going and come back: later sections often explain earlier ones. Keep a personal glossary of terms. If a whole paper is beyond you for now, read a recent review on the topic first; it will define the vocabulary and show where this paper fits.",
      "For humanities articles, the equivalent of “reading the figures” is reading the footnotes: they show which sources carry the argument."
     ],
     pro:[
      "Keshav’s timings are for an experienced reader in computer science; he notes the third pass can take a beginner four or five hours. Dense mathematical, economic or legal papers, and papers in a second language, can take far longer. Budget accordingly and treat slowness as normal.",
      "Overlap rules for error bars are rough at best. Non-overlapping standard-error bars don’t imply p < 0.05, and overlapping 95% confidence intervals don’t imply p > 0.05 for the difference; Greenland and colleagues (2016) list the latter as a common misinterpretation. For paired or repeated-measures designs, bars on each group can be almost uninformative about the within-person difference. Find the test of the comparison itself.",
      "For a third pass on a quantitative paper, try re-deriving one key number from the tables (a percentage, a difference, a ratio). Discrepancies are common and occasionally important. For a humanities paper, check two or three footnotes against the sources they cite, and ask what evidence would count against the thesis.",
      "When jargon is the obstacle, a recent review article is often the fastest route into a field’s vocabulary and its key debates.",
      "Reading groups (often called journal clubs) are a well-established way to practice: one person presents a paper and the group appraises it together. They work in universities, workplaces and among friends meeting online."
     ]
    },
    related:["paper-structure","research-notes","reading-results"],
    read:[{book:"owg", where:"Section 14.1 “Compiling Sources for an Annotated Bibliography”"}],
    sources:[{t:"S. Keshav (2007), How to Read a Paper, ACM SIGCOMM Computer Communication Review 37(3)", url:"https://www.cs.princeton.edu/courses/archive/fall10/cos597B/papers/howtoread-keshav.pdf"},{t:"Greenland et al. (2016), Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations", url:"https://minerva-access.unimelb.edu.au/server/api/core/bitstreams/ef052cd6-1fb7-520e-9cef-c14da6a02ea7/content"}], checked:"2026-11"},

   {id:"research-notes", title:"Annotations and literature notes", aka:["note-taking for research","reading notes"], tags:["research","reading","notes"],
    summary:"Mark up papers as you read, then write separate notes that keep quotations, paraphrase and your own ideas apart.",
    levels:{
     starter:[
      "An [[annotation-research|annotation]] is a mark or comment you add to a paper as you read: a highlight, a question in the margin, a symbol. [[literature-notes|Literature notes]] are what you write afterwards, in your own words and in a separate place, so you can use the paper months later without rereading it.",
      "The single most useful habit is to keep three things visibly apart: the authors’ exact words (in quotation marks, with a page number), your paraphrase of their ideas (with a page number), and your own thoughts (labeled, for example, “ME:”). Mixing them is how people accidentally copy text or misremember who said what.",
      {tip:"Every number in your notes needs its unit and its page. “Fell by 40” is useless later; “fell by 40 minutes a night (p. 6, Table 2)” is not."},
      "A note written in ten minutes right after reading can save an hour when you come to write, and it protects you from misquoting."
     ],
     builder:[
      {h:"Annotating well"},
      {list:["Highlight sparingly: the aim, key numbers, main claim, limitations.","Write margin notes in your own words, including doubts and questions.","Use a few consistent symbols (? unclear, ! important, ✗ doubtful, → links elsewhere)."]},
      {h:"A literature note template"},
      {ex:"Source (full reference or DOI)\nQuestion / aim\nDesign and sample (who, how many, how chosen)\nKey findings (size, interval, page)\nShort quotation(s) with page\nLimitations (authors’ and yours)\nME: assessment and links to other sources", mono:true},
      "Store notes with the full reference so you can cite them later. Reference managers such as Zotero let you attach notes to each item; Zotero’s built-in reader stores annotations in its database rather than in the PDF, and can gather them into a note with **Add Note from Annotations**.",
      {h:"Where to keep them"},
      "Anywhere you’ll reliably find them again: a notebook, one document per topic, a spreadsheet with one row per paper, a note-taking app, or notes attached to each item in a reference manager. A spreadsheet with columns for question, design, sample, findings and limitations quickly becomes a comparison table across papers, which is a big help when you write a literature review.",
      "Write the note soon after reading, while the paper is fresh, and reread it once to check that every number has a unit and a page, and every quotation has quotation marks."
     ],
     pro:[
      "Notes become most useful when they’re written for reuse. Some researchers keep one note per source plus separate ‘idea’ notes that link several sources together, which makes later synthesis (Unit 5’s synthesis matrix, for example) much faster. Whatever system you use, consistency matters more than the tool.",
      "Record where a note came from at the level you’ll need to cite: page numbers for print and PDFs; section or paragraph for web articles without pages. If you read a translation, note that too.",
      "Be careful with copied text. If you paste a passage into your notes, put it in quotation marks immediately; later you may not remember it wasn’t yours. The same applies to text produced by AI tools: label it as such and verify it against the paper before relying on it.",
      "A research log (a dated record of searches, decisions and sources), as described in the OpenStax *Writing Guide*, complements per-source notes and makes your process reproducible.",
      "If you work in a team, agree a shared template and labels (for example “Q:” for quotation, “P:” for paraphrase and “ME:” for your own thoughts) so anyone can tell whose words and ideas are whose. Shared notes that include personal or unpublished data must follow your project’s data-protection rules."
     ]
    },
    related:["reading-strategies","ai-reading-tools"],
    read:[{book:"owg", where:"Section 13.5 “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"},{book:"zotero", where:"“Zotero PDF Reader and Note Editor”"}],
    sources:[{t:"Zotero Documentation: Zotero PDF Reader and Note Editor", url:"https://www.zotero.org/support/pdf_reader"},{t:"OpenStax Writing Guide with Handbook, Chapter 13 (LibreTexts mirror)", url:"https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/About_Writing_Guide_with_Handbook_-_A_textbook_for_English_Composition_(OpenStax)/13%3A_Research_Process-_Accessing_and_Recording_Information"}], checked:"2026-11"},

   {id:"reading-results", title:"Reading results: samples, effect sizes and confidence intervals", aka:["effect size","confidence interval","sample size"], tags:["research","statistics"],
    summary:"Read every result as a size with a range, and check who it is about.",
    levels:{
     starter:[
      "When you read a study’s results, ask three things. **Who is this about?** The people studied (the [[sample]]) and how they were chosen decide whom the result can apply to. **How big is it?** The [[effect-size|effect size]] tells you how large the difference or relationship is, for example 4 points on a 100-point test. **How sure can we be?** The [[confidence-interval|confidence interval]] gives a range of values that fit the data reasonably well, for example 1 to 7 points.",
      "Put together: “about 4 points, plausibly anywhere from 1 to 7, in students like these.” That sentence is far more useful than “the app worked”.",
      {warn:"A 95% confidence interval doesn’t mean there’s a 95% chance the true value is inside this particular range. The 95% describes how often the method would capture the true value if the study were repeated many times."}
     ],
     builder:[
      {h:"Effect sizes"},
      "Raw effects use the study’s units (points, kilograms, minutes). Standardized effects allow comparison: Cohen’s d (difference in means divided by the standard deviation), the correlation r, and ratios such as risk ratios or odds ratios, where 1 means no difference. Cohen’s rough labels (d of 0.2 small, 0.5 medium, 0.8 large) are ballpark guides to be informed by context.",
      {h:"Absolute and relative"},
      "A fall in risk from 4% to 3% is 1 percentage point in absolute terms and 25% in relative terms. Both are true; the relative figure sounds bigger. Ask for the absolute numbers.",
      {h:"Intervals and sample size"},
      "The [[standard-error|standard error]] measures how much an estimate would vary between samples; in large samples a 95% interval is roughly two standard errors either side of the estimate. Interval width shrinks roughly with the square root of the sample size, so halving it takes about four times as many participants. Small studies give wide intervals; very large ones can pin down effects too small to matter.",
      "A big sample doesn’t cure a biased one: self-selected samples can mislead however large they are.",
      {h:"Who is it about?"},
      "Check how participants were chosen, who was excluded, how many dropped out, and where and when the study took place. Findings apply most clearly to people like those studied; the further your situation is from theirs, the more cautious you should be."
     ],
     pro:[
      "The correct frequentist reading of a 95% confidence interval: the procedure, applied over many repetitions with all assumptions met, would produce intervals containing the true parameter about 95% of the time; any one computed interval either does or doesn’t (Greenland et al., 2016, item 19). A Bayesian credible interval does carry a direct probability statement, conditional on the prior and model. In practice, values inside a confidence interval are more compatible with the data than values outside, but compatibility shades off gradually rather than stopping at the edges.",
      "Intervals assume the model is right: random sampling or assignment, correct handling of clustering (students within schools, patients within hospitals), and no serious measurement or selection bias. Clustered designs analyzed as if individuals were independent produce intervals that are too narrow. Intervals say nothing about bias; a precise estimate can be precisely wrong.",
      "Small studies are often underpowered, and when they do reach significance, their estimates tend to exaggerate the true effect. Large observational datasets give narrow intervals around estimates that may still be confounded. Sullivan and Feinn (2012) note that with a big enough sample a test will almost always find a significant difference unless the true effect is exactly zero, which is why effect sizes must be reported and judged.",
      "For risks, the number needed to treat (1 ÷ absolute risk difference) converts a difference into people: a 1-percentage-point reduction means about 100 people treated for one fewer event."
     ]
    },
    related:["statistical-significance-basics","critical-appraisal","correlation-causation","sampling-methods","survey-sampling"],
    read:[{book:"bhatt", where:"Chapter 8 “Sampling”; Chapter 14 “Quantitative Analysis: Descriptive Statistics”"}],
    sources:[{t:"Sullivan & Feinn (2012), Using Effect Size—or Why the P Value Is Not Enough, J Grad Med Educ 4(3)", url:"https://www.medschool.lsuhsc.edu/medical_education/graduate/MEDS/docs/Using%20Effect%20Size%E2%80%94or%20Why%20the%20P%20Value%20Is%20Not%20Enough.pdf"},{t:"Greenland et al. (2016), Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations, Eur J Epidemiol 31", url:"https://minerva-access.unimelb.edu.au/server/api/core/bitstreams/ef052cd6-1fb7-520e-9cef-c14da6a02ea7/content"}], checked:"2026-11"},

   {id:"statistical-significance-basics", title:"p-values and statistical significance", aka:["p-value","significance testing","ASA statement on p-values"], tags:["research","statistics"],
    summary:"What a p-value measures, what ‘significant’ means, and the misreadings the ASA warned about in 2016.",
    levels:{
     starter:[
      "A [[p-value]] answers a narrow question: if there were really no effect (the [[null-hypothesis|null hypothesis]]) and the statistical model’s assumptions held, how often would we get a result at least as extreme as this one? A small p-value means the data would be surprising in that no-effect world.",
      "If p falls below a chosen threshold, usually 0.05, the result is called [[statistical-significance|statistically significant]]. That’s all it means. It doesn’t mean large, important or proven.",
      "Two misreadings to avoid: p = 0.03 does **not** mean a 3% chance the result is a fluke, and p > 0.05 does **not** mean there’s no effect.",
      {key:"Look first at how big the effect is and how precise; treat the p-value as one clue."},
      "Think of a smoke alarm set to sound when smoke passes a certain level. When it sounds, you know the level was passed, not how big the fire is, and now and then it sounds when there’s no fire at all. Statistical significance is similar: a threshold that triggers a label, with a known rate of false alarms when nothing is really there."
     ],
     builder:[
      "The American Statistical Association’s 2016 statement (Wasserstein and Lazar, *The American Statistician*) defines the p-value as “the probability under a specified statistical model that a statistical summary of the data … would be equal to or more extreme than its observed value”, and sets out six principles:",
      {ol:["P-values can indicate how incompatible the data are with a specified statistical model.","They do not measure the probability that the studied hypothesis is true, or the probability that the data were produced by random chance alone.","Conclusions and decisions should not be based only on whether a p-value passes a threshold.","Proper inference requires full reporting and transparency.","A p-value, or statistical significance, does not measure the size of an effect or the importance of a result.","By itself, a p-value is not a good measure of evidence about a model or hypothesis."]},
      "The significance level α is the long-run false-alarm rate of the procedure when the null is true. Test 20 true-null outcomes at α = 0.05 and you expect about one ‘significant’ result by chance; hence the importance of knowing every test that was run and which outcome was primary.",
      {h:"A worked example"},
      "A friend gets 9 heads in 10 tosses. If the coin were fair, 22 of the 1,024 equally likely sequences are at least this lopsided (9 or 10 heads, or 9 or 10 tails), so p ≈ 0.02. That says such a result would be unusual for a fair coin. It doesn’t say there’s a 2% chance the coin is fair."
     ],
     pro:[
      "Greenland and colleagues (2016) catalog misinterpretations, including: that p is the probability the test hypothesis is true; that p > 0.05 means no effect was observed or that the null should be accepted; that significance indicates a substantively important relation; and that overlapping confidence intervals imply a non-significant difference. They stress that p is computed assuming the whole model, not just the null, is correct, so a small p may reflect a violated assumption (bias, selective reporting, wrong model) rather than a real effect.",
      "A difference in significance is not a significant difference (Gelman and Stern, 2006, put it as “the difference between ‘significant’ and ‘not significant’ is not itself statistically significant”): if a subgroup shows p = 0.01 and another p = 0.20, the subgroup difference must be tested directly (an interaction test). Such post-hoc subgroup claims are a frequent source of false findings.",
      "The 0.05 convention is arbitrary; some fields use far stricter thresholds for discoveries, and the debate continues over lowering thresholds, abandoning ‘significance’ language, or relying more on estimation and Bayesian methods. Whatever the framework, transparent reporting of all analyses, pre-specified primary outcomes, effect sizes with intervals and exact p-values remain the common ground.",
      "Sullivan and Feinn (2012) describe a large aspirin trial (over 22,000 participants) with p < 0.00001 but a risk difference of under 1 percentage point (0.77% in their account): a clear illustration that a tiny p can accompany a small effect."
     ]
    },
    related:["reading-results","critical-appraisal","questionable-research-practices"],
    read:[{book:"bhatt", where:"Chapter 15 “Quantitative Analysis: Inferential Statistics”, section “Basic Concepts”"}],
    sources:[{t:"Wasserstein & Lazar (2016), The ASA Statement on p-Values: Context, Process, and Purpose, The American Statistician 70(2):129–133", url:"https://doi.org/10.1080/00031305.2016.1154108"},{t:"ScienceDaily (2016): American Statistical Association releases statement on statistical significance and p-values", url:"https://www.sciencedaily.com/releases/2016/03/160307092305.htm"},{t:"Greenland et al. (2016), a guide to misinterpretations", url:"https://minerva-access.unimelb.edu.au/server/api/core/bitstreams/ef052cd6-1fb7-520e-9cef-c14da6a02ea7/content"}], checked:"2026-11"},

   {id:"critical-appraisal", title:"Critical appraisal of a study", aka:["appraising research","evaluating a paper"], tags:["research","evaluation"],
    summary:"Fair, structured questions about a study’s design, sample, measures, results and conclusions, with yardsticks that fit the kind of research.",
    levels:{
     starter:[
      "[[critical-appraisal-term|Critical appraisal]] means judging how much to trust a study, and for what, using a fair set of questions. It isn’t fault-finding: every study has limitations, and the skill is deciding which ones change the conclusion.",
      "Six questions cover most studies: Is the question clear? Can the design answer it? Who was studied? Were the measures sound? Are the results complete, with sizes and ranges? Do the conclusions match the results?",
      "Watch for [[spin-research|spin]]: causal words from studies that can only show association, abstracts that lead with a minor result, and ‘trends toward significance’.",
      "Think of a building survey before buying a house: the surveyor doesn’t refuse every house with a crack, but says which cracks matter and how much. Appraisal also depends on your purpose: a small pilot study can be fine for deciding whether an idea is worth testing and far too weak to change a national policy.",
      "A declared funder or competing interest is a reason to look closely at the design and wording, not proof of bias."
     ],
     builder:[
      {table:[["Question","Look in","Warning signs"],["Design fits question?","Methods","Cause claimed from a survey"],["Sample?","Methods, first results table","Volunteers only; many dropouts"],["Measures?","Methods","Unvalidated instruments"],["Results?","Results, tables","Only significant outcomes; no intervals"],["Conclusions?","Abstract, Discussion","Stronger than the results support"]]},
      "Use yardsticks that fit the research. Qualitative studies are judged on fit, transparency, rich description and reflexivity. Humanities articles are judged on the clarity of the thesis, the handling of sources and engagement with counter-arguments. Reviews are judged on how studies were found and selected.",
      "Free checklists help: the CASP checklists cover trials, qualitative studies, systematic reviews and other designs. [[reporting-guideline|Reporting guidelines]] such as CONSORT (trials), STROBE (observational studies) and PRISMA (systematic reviews), collected by the EQUATOR Network, list what a good report should contain.",
      {h:"Spin to watch for"},
      {list:["Causal words (“improves”, “reduces”) from designs that can only show association", "An abstract that leads with a secondary outcome because the main one showed nothing", "“A trend toward significance” for an inconclusive result", "Conclusions about groups the study didn’t include", "Relative figures with no absolute numbers"]},
      {h:"One paper is one voice"},
      "Before relying on a study, check whether it has been corrected or retracted, look for systematic reviews that combine it with other studies, and see what later papers that cite it say.",
      "Apply the same questions to studies you agree with as to those you don’t: we all tend to scrutinize unwelcome findings harder."
     ],
     pro:[
      "Formal tools go further. [[risk-of-bias|Risk-of-bias]] tools assess specific domains; Cochrane’s RoB 2 tool for randomized trials, for example, covers the randomization process, deviations from intended interventions, missing outcome data, measurement of the outcome and selection of the reported result. Evidence-grading systems rate the certainty of a whole body of evidence. These are mostly used in systematic reviews (Unit 5).",
      "CONSORT was updated in 2025 (‘CONSORT 2025 Statement: updated guideline for reporting randomized trials’), published simultaneously in several journals; check the EQUATOR Network for the current version of any guideline, because they’re revised over time.",
      "Declared funding and competing interests are signals for scrutiny, not verdicts. Look at choices the funder could influence: the comparator, the outcomes, the length of follow-up, and how results are framed. Check for a trial registration or preregistration and compare the registered primary outcome with the reported one; unexplained switching is a red flag.",
      "Finally, appraise yourself: people tend to scrutinize unwelcome findings more than welcome ones. Applying the same questions to every paper is the practical defense.",
      "Qualitative appraisal has its own vocabulary: credibility, transferability, dependability and confirmability, proposed by Lincoln and Guba (1985), are often used in place of internal validity, generalizability, reliability and objectivity (Unit 7 covers these: see {{trustworthiness}}). Humanities critique works through argument: whether the evidence is representative of the archive or corpus, whether translations and editions are reliable, and whether rival readings are fairly addressed."
     ]
    },
    related:["reading-results","statistical-significance-basics","ai-reading-tools","evaluating-sources","retractions","systematic-reviews"],
    read:[{book:"bhatt", where:"Chapter 5 “Research Design”"},{book:"acrl", where:"Frame “Scholarship as Conversation”"}],
    sources:[{t:"CASP: Critical Appraisal Skills Programme checklists", url:"https://casp-uk.net/casp-tools-checklists/systematic-reviews-meta-analysis-rcts/"},{t:"EQUATOR Network: CONSORT 2025", url:"https://www.equator-network.org/reporting-guidelines/consort/"}], checked:"2026-11"},

   {id:"ai-reading-tools", title:"AI tools for reading papers", aka:["AI summaries","AI research assistants"], tags:["research","ai"],
    summary:"What AI summarizing and question-answering tools can do for a reader, how they fail, and how to check them.",
    levels:{
     starter:[
      "AI tools based on [[generative-ai|generative AI]] can summarize a paper, explain jargon, translate, or answer questions about a PDF you upload. They can save time on a first pass.",
      "They also make mistakes: inventing details ([[hallucination]]), mixing up numbers, dropping limitations, or turning “linked to” into “causes”. So treat an AI summary as a map that tells you where to look, never as the source.",
      {key:"Check every claim you use against the paper itself, and cite the paper."},
      "Some tools work like a search engine with short automatic summaries; some let you upload a PDF and ask questions about it; general chatbots can explain a confusing paragraph in plainer words or in another language. Used well, they help you decide which papers deserve a full read and get past jargon faster.",
      "Before uploading anything, check you’re allowed to: the paper’s license, your institution’s rules and the tool’s privacy terms all matter. Never upload confidential material, such as a manuscript you’re reviewing."
     ],
     builder:[
      {table:[["Kind","Examples (checked November 2026)"],["Automatic one-line summaries in search","Semantic Scholar’s TLDRs"],["Questions answered from documents you upload","NotebookLM; file features of general chatbots"],["Research assistants that search and summarize","Elicit, among others"],["General chatbots","ChatGPT, Claude, Gemini, Copilot"]]},
      "Tools that answer only from your uploaded sources and show the passage they used are easier to verify, but they can still misread a table or miss context elsewhere in the paper.",
      {h:"A checking routine"},
      {ol:["Find the exact passage, table or figure behind each claim.","Check numbers and units against the original.","Check that limitations and uncertainty survived.","Cite the paper, only for what you verified."]},
      "Before uploading, check the paper’s license, your institution’s rules and the tool’s privacy terms. Don’t upload confidential material such as manuscripts under review or identifiable research data.",
      {h:"Good uses and poor uses"},
      {table:[["Good uses", "Poor uses"], ["Deciding relevance on a first pass", "Citing a summary instead of the paper"], ["Explaining a term or statistic, then checking it in a textbook", "Trusting an AI list of “the evidence” without checking each paper exists and says that"], ["A rough translation to decide whether a paper is worth a proper one", "Uploading confidential or personal data"], ["Making a list of claims to verify", "Letting it decide what a study means"]]},
      "Free tiers, limits and features change often, so check what a tool can currently do (and whether it reads the full text or only the abstract) before relying on it."
     ],
     pro:[
      "Summaries compress, and compression drops qualifiers first: confidence intervals, subgroup caveats, design limitations and the authors’ own hedging. That systematically makes findings sound stronger and more general than they are, which is the opposite of what a critical reader needs. Asking a tool explicitly for the design, sample, main effect with its interval, and limitations helps, but doesn’t remove the need to check.",
      "Tools differ in what text they can see. Some work from abstracts or metadata only; some read full text of open access papers; some read what you upload. A summary of a paywalled paper made from its abstract can’t reflect the Methods or Results.",
      "Policies on AI use differ between universities, publishers and funders and change frequently; many require disclosure of how AI was used, and peer-review confidentiality rules generally prohibit uploading manuscripts under review. Unit 9 covers research-integrity policy. Features, free tiers and names of products also change; verify the current situation before relying on any tool.",
      "Semantic Scholar introduced its automatically generated TLDR summaries in 2020, starting with computer science papers, and has since extended them to further fields, including biology and medicine.",
      "When a tool lists papers, check that each one exists (search its title or DOI) and says what the tool claims. AI-generated reference lists can include citations that don’t exist; Unit 9 covers this under research integrity."
     ]
    },
    related:["critical-appraisal","research-notes","ai-chatbot-accuracy","ai-generated-content"],
    sources:[{t:"eWeek (June 2026): NotebookLM cheat sheet", url:"https://www.eweek.com/news/google-notebooklm-cheat-sheet-2026/"},{t:"Infodocket (2020): Semantic Scholar launches TLDR feature", url:"https://www.infodocket.com/2020/11/17/research-tools-semantic-scholar-launches-tldr-beta-feature-uses-nlp-to-place-single-sentence-automatically-generated-paper-summaries-on-search-results-pages/"}], checked:"2026-11"},

{id:"results-tables", title:"Reading results tables", aka:["Table 1","descriptive table","baseline table","cross-tab in a paper","table notes","reading tables in papers"], tags:["research","reading","statistics"],
    summary:"A routine for reading the tables in a paper’s results: the frame first, then descriptive tables, cross-tabs and model tables, with what each can and can’t show.",
    levels:{
     starter:[
      "Tables carry much of a paper’s evidence. Read them like a map: the legend first. Before any number, find the title, the outcome and its units, what the columns are (groups or models), how many people each column rests on (N), and the notes underneath.",
      "Three kinds of table turn up again and again:",
      {list:[
        "A **[[descriptive-table|descriptive table]]** (often Table 1) describes who was studied, usually split by group.",
        "A **[[crosstab|cross-tab]]** breaks one category down by another, such as walking by dog ownership.",
        "A **model table**, often a regression, shows how an outcome relates to several variables at once ({{regression-tables}})."
      ]},
      "The notes matter most. They say what the brackets hold, what the stars mean and what was adjusted for.",
      {key:"Frame first, numbers second, words last: read the table before you read what the authors say it means."}
     ],
     builder:[
      {h:"Descriptive tables"},
      "Look for how each variable is summarized: mean (SD) for roughly symmetric numbers, median (IQR) for skewed ones, n (%) for categories. Compare the groups: differences in age, health or income hint at [[confounder|confounders]] the paper should deal with later. In randomized trials, CONSORT 2025 says significance tests of baseline differences are not recommended, because chance alone formed the groups; judge whether any imbalance is large enough to matter.",
      {h:"Cross-tabs"},
      "Ask which way the percentages run: across rows, down columns or over the whole table. To compare groups, use percentages within each group. Column percentages answer a different question and partly reflect group sizes. Always look for the counts behind the percentages ({{crosstabs}}).",
      {h:"Model tables"},
      "Each row is a variable; each column is usually a model. Coefficients come with a standard error or interval, stars mark p-value thresholds, and the bottom rows give N and measures of fit. Compare unadjusted and adjusted columns when both are shown.",
      {tip:"If N changes between columns or is smaller than the sample in the Methods, find out why. Missing data can change who the results describe."}
     ],
     pro:[
      "Reporting guidelines describe what tables should contain. STROBE, for observational studies, asks for participants’ characteristics and information on exposures and potential confounders, and for unadjusted and, where relevant, confounder-adjusted estimates with their precision, saying which confounders were adjusted for and why. It also suggests translating relative risks into absolute risks where relevant. CONSORT 2025 asks trials for a table of baseline characteristics for each group.",
      "Style conventions vary. APA style puts significance notes under the table (for example `*p < .05. **p < .01.`) and can show estimates with standard errors and 95% confidence limits in separate columns. The *American Economic Review* tells authors not to use asterisks and to report standard errors in parentheses. Medical journals usually give estimates with 95% intervals. Read each table’s notes rather than assuming.",
      "Watch for weighted results (survey weights change percentages but not the unweighted counts shown), for percentages of valid answers rather than all respondents, and for small cells, where one or two people change a percentage a lot.",
      "Supplementary tables often hold the full models, sensitivity analyses and results for every outcome. When a main table shows only selected rows, check the supplement before concluding anything about the variables left out."
     ]
    },
    related:["regression-tables","crosstabs","reading-results","statistical-significance-basics","critical-appraisal","centre-spread"],
    read:[{book:"bhatt", where:"Chapter 14, “Quantitative Analysis: Descriptive Statistics”"}],
    sources:[{t:"EQUATOR Network: CONSORT 2025, item on baseline data", url:"https://resources.equator-network.org/reporting-guidelines/consort/items/baseline-data.html"},{t:"STROBE Statement: checklists", url:"https://www.strobe-statement.org/checklists/"},{t:"APA Style: sample tables", url:"https://apastyle.apa.org/style-grammar-guidelines/tables-figures/sample-tables"}], checked:"2026-11"},

   {id:"regression-tables", title:"Reading regression tables", aka:["regression coefficient","reference category","dummy variable","indicator variable","adjusted and unadjusted estimates","odds ratio table","significance stars","Table 2 fallacy","constant","intercept"], tags:["research","reading","statistics"],
    summary:"What the numbers in a regression table mean: coefficients, standard errors, intervals, stars, reference categories, controls, ratios, N and R², and what not to over-read.",
    levels:{
     starter:[
      "A regression table shows how an outcome, such as minutes walked a day, relates to several variables at once. Each row is a variable; each column is usually a model.",
      "The main number in each row is the [[regression-coefficient|coefficient]]: the estimated difference in the outcome that goes with that variable, holding the others in the model constant. “Owns a dog 12.0” means owners walked about 12 minutes more a day than non-owners of the same age, sex and health, on average.",
      "Underneath or beside it, usually in brackets, is the [[standard-error|standard error]], a measure of uncertainty. Stars mark p-value thresholds, defined in the note.",
      "For a category such as health (good, fair, poor), one group is the [[reference-category|reference category]], and each other group is compared with it.",
      {key:"Read the row that answers the research question, in the outcome’s units, with its uncertainty. A coefficient describes a pattern; whether it is a cause depends on the design."}
     ],
     builder:[
      {table:[["Part","How to read it"],["Coefficient","Difference in the outcome per one-unit difference in the variable (or for being in a category), others held constant"],["(SE)","Sample-to-sample variation; approximate 95% CI = coefficient ± 1.96 × SE in large samples"],["Stars","p-value thresholds from the note; not size or importance"],["Ref. category","The comparison group for a categorical variable"],["Constant","Prediction when every variable is zero or at its reference; often not meaningful"],["N","Cases used; may fall when data are missing"],["R²","Share of variation accounted for in these data; adjusted R² penalizes extra variables"]]},
      "**Unadjusted and [[adjusted-estimate|adjusted]] columns.** When a coefficient changes after controls are added, part of the raw difference went with those controls, as with confounders. Adjustment covers only what was measured.",
      "**Ratios.** Logistic regression usually reports [[odds-ratio|odds ratios]]; survival models report hazard ratios. For ratios, 1 means no difference, and an interval including 1 is compatible with none. Raw logistic coefficients are log odds, where 0 means no difference. For common outcomes, an odds ratio sits further from 1 than the risk ratio, so don’t read it as “times as likely” ({{absolute-relative-risk}}).",
      "**Interactions.** A row such as “dog × woman” tests whether a difference depends on another variable. When an interaction is present, the main rows describe the difference at the reference level of the other variable."
     ],
     pro:[
      "**The [[table-2-fallacy|Table 2 fallacy]].** Westreich and Greenland (*American Journal of Epidemiology*, 2013) warned that presenting every coefficient from one model invites readers to treat the control variables’ coefficients like the main estimate. A model chosen to estimate the effect of one exposure may leave the others’ coefficients confounded, and where a control lies on the path between another variable and the outcome, the coefficient shows only a direct part of that variable’s effect. Some authors now show only the main estimate, or fit separate models for each question.",
      "**Comparing coefficients.** Unstandardized coefficients on different scales don’t compare directly; standardized coefficients (often β) rescale to standard deviations but depend on the spread in the sample. Coefficients from different samples, or from logistic models with different controls, are not always comparable either.",
      "**Robustness.** Look for sensitivity analyses and alternative specifications; a result that appears in only one of many possible models is fragile. Running many specifications and reporting the most striking one inflates false positives ({{multiple-testing}}).",
      "**Clustered and repeated data.** When people are grouped (students in schools) or measured repeatedly, standard errors should account for it, for example with clustered standard errors or multilevel models; otherwise intervals are too narrow.",
      "The mechanics of fitting a line are in Data Literacy ({{linear-regression}}); the International Studies track discusses causal inference with regression ({{regression-causal-inference}})."
     ]
    },
    related:["results-tables","linear-regression","reading-results","absolute-relative-risk","correlation-causation","regression-causal-inference"],
    read:[{book:"openintro", where:"Chapter 9, “Multiple and logistic regression”, Sections 9.1 and 9.5"}],
    sources:[{t:"Westreich & Greenland (2013), The Table 2 fallacy, American Journal of Epidemiology (PMC)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC3626058/"},{t:"AER Style Guide (American Economic Association)", url:"https://www.aeaweb.org/journals/aer/style-guide"},{t:"OpenIntro Statistics 4e, Section 9.1 (LibreTexts)", url:"https://stats.libretexts.org/Bookshelves/Introductory_Statistics/Introduction_to_Statistics_4e_(Diez_et_al.)/09%3A_Multiple_and_Logistic_Regression/9.01%3A_Introduction_to_Multiple_Regression"}], checked:"2026-11"}
  ],
  terms:[
   {id:"imrad", term:"IMRaD", def:"The four-part structure of most empirical papers: **I**ntroduction, **M**ethods, **R**esults **a**nd **D**iscussion.", codex:"paper-structure"},
   {id:"methods-section", term:"Methods section", def:"The part of a paper that says exactly what was done: who was studied, the design, what was measured and how the data were analyzed.", codex:"paper-structure"},
   {id:"results-section", term:"Results section", def:"The part of a paper that reports what was found, usually with tables and figures and, ideally, without interpretation.", codex:"paper-structure"},
   {id:"discussion-section", term:"Discussion section", def:"The part of a paper that interprets the results, compares them with other studies, states limitations and suggests implications.", codex:"paper-structure"},
   {id:"study-limitations", term:"Limitations", def:"Weaknesses in a study’s design, sample, measures or analysis that limit what can be concluded. Good papers state them clearly in the Discussion.", codex:"critical-appraisal"},
   {id:"effect-size", term:"Effect size", def:"How big a difference or relationship is, either in real units (4 points, 2 kg) or on a standard scale (such as Cohen’s d or a risk ratio).", codex:"reading-results"},
   {id:"p-value", term:"p-value", def:"The probability of getting a result at least as extreme as the one observed, if the null hypothesis and the model’s other assumptions were true. It is not the probability that the result is a fluke.", codex:"statistical-significance-basics"},
   {id:"confidence-interval", term:"Confidence interval", def:"A range around an estimate showing the values reasonably compatible with the data. A 95% interval comes from a method that captures the true value in about 95% of repeated studies.", codex:"reading-results"},
   {id:"statistical-significance", term:"Statistical significance", def:"A label for a result whose p-value falls below a chosen threshold, usually 0.05. It doesn’t mean the effect is large or important.", codex:"statistical-significance-basics"},
   {id:"critical-appraisal-term", term:"Critical appraisal", def:"Judging a study’s trustworthiness, results and relevance using a fair, structured set of questions.", codex:"critical-appraisal"},
   {id:"annotation-research", term:"Annotation", def:"A highlight, mark or comment you add to a text while reading it.", codex:"research-notes"},
   {id:"literature-notes", term:"Literature notes", def:"Notes about one source, written in your own words after reading, that keep quotations, paraphrase and your own ideas clearly apart.", codex:"research-notes"},
   {id:"null-hypothesis", term:"Null hypothesis", def:"The starting assumption a statistical test checks the data against, usually that there is no difference or no relationship.", codex:"statistical-significance-basics"},
   {id:"statistical-power", term:"Statistical power", def:"The probability that a study will detect an effect of a given size if that effect really exists. Small studies usually have low power.", codex:"reading-results"},
   {id:"standard-error", term:"Standard error", def:"How much an estimate (such as an average) would typically vary from one sample to another. Confidence intervals are built from it.", codex:"reading-results"},
   {id:"absolute-risk", term:"Absolute and relative risk", def:"An absolute difference compares risks directly (4% vs 3% is 1 percentage point); a relative difference compares them as a proportion (25% lower). Both can describe the same result.", codex:"reading-results"},
   {id:"confounder", term:"Confounder", def:"A third factor linked to both the supposed cause and the outcome, which can create or hide an association between them.", codex:"reading-results"},
   {id:"reporting-guideline", term:"Reporting guideline", def:"A checklist of what a paper of a given type should report, such as CONSORT for randomized trials or PRISMA for systematic reviews.", codex:"critical-appraisal"},
   {id:"spin-research", term:"Spin (in research)", def:"Reporting that makes results look more favorable, certain or general than the data support, such as causal language from an observational study.", codex:"critical-appraisal"},
   {id:"descriptive-table", term:"Descriptive table (Table 1)", def:"A table, usually the first in a paper’s results, describing who was studied, often by group: means and SDs, medians and IQRs, counts and percentages.", codex:"results-tables"},
   {id:"regression-coefficient", term:"Regression coefficient", def:"The estimated difference in the outcome that goes with a one-unit difference in a variable (or with being in a category), holding the model’s other variables constant.", codex:"regression-tables"},
   {id:"reference-category", term:"Reference category", def:"The category a regression compares the others with, such as “good health”. It is often marked “ref.” and has no coefficient of its own.", codex:"regression-tables"},
   {id:"adjusted-estimate", term:"Adjusted estimate", def:"An estimate from a model that holds other measured variables constant, so the comparison is between otherwise similar cases. An unadjusted estimate is the raw difference.", codex:"regression-tables"},
   {id:"odds-ratio", term:"Odds ratio (OR)", def:"The odds of an outcome in one group divided by the odds in another. 1 means no difference. For common outcomes it is further from 1 than the risk ratio.", codex:"regression-tables"},
   {id:"table-2-fallacy", term:"Table 2 fallacy", def:"Reading the coefficients of control variables in a model as if they were effects as trustworthy as the main estimate. They may be confounded or show only part of an effect.", codex:"regression-tables"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t4u3-q01", lesson:"t4u3-l1", level:1, q:"What does IMRaD stand for?", options:[
     {t:"Introduction, Methods, Results and Discussion", ok:true, why:"The four main sections of most empirical papers."},
     {t:"Introduction, Materials, Review and Data", why:"These are not the standard sections. ‘Materials’ sometimes appears inside Methods, but there is no ‘Review’ or ‘Data’ section in the pattern."},
     {t:"Ideas, Methods, Reasons and Debate", why:"Not a real structure."},
     {t:"Introduction, Measures, Replication and Discussion", why:"Measures are part of Methods; replication isn’t a standard section."}]},
   {id:"t4u3-q02", lesson:"t4u3-l1", level:2, q:"Where in an IMRaD paper would you usually find the exact aim or hypothesis of the study?", options:[
     {t:"In the last paragraph of the Introduction", ok:true, why:"The introduction narrows from background to the gap, then states the aim."},
     {t:"In the reference list", why:"References list the works cited; they don’t state this study’s aim."},
     {t:"In the middle of the Results", why:"Results report findings; the aim is set out before the methods."},
     {t:"In the funding statement", why:"Funding statements say who paid, not what was asked."}]},
   {id:"t4u3-q03", lesson:"t4u3-l1", level:1, q:"Which kind of paper usually reports no new data but summarizes many studies on one question?", options:[
     {t:"A review article", ok:true, why:"Reviews bring together existing studies, which makes them a good starting point on a topic."},
     {t:"An original research article", why:"Original articles report a new study with its own data."},
     {t:"A case report", why:"A case report describes one case in detail."},
     {t:"A methods paper", why:"A methods paper presents a new way to measure or analyze something."}]},
   {id:"t4u3-q04", lesson:"t4u3-l1", level:2, q:"Sione reads an abstract that says a program “significantly improved wellbeing”. What should he do before quoting this finding?", options:[
     {t:"Read the Methods and Results to judge the evidence", ok:true, why:"Check how wellbeing was measured, how big the change was and how certain. The abstract is the authors’ summary; the evidence for judging the claim is in the Methods and Results."},
     {t:"Nothing: abstracts are peer-reviewed, so they’re accurate", why:"Peer review covers the whole paper and doesn’t guarantee the abstract is free of overstatement."},
     {t:"Check how many times the paper has been downloaded", why:"Popularity doesn’t tell you whether the claim is supported."},
     {t:"Look only at the title to confirm the topic", why:"The title can’t show whether the finding is well supported."}]},
   {id:"t4u3-q05", lesson:"t4u3-l1", level:2, q:"In a history journal, Priya can’t find a Methods section in an article. Which is the best explanation?", options:[
     {t:"It’s probably an argued essay; the method shows in how sources are used", ok:true, why:"History articles defend a thesis with evidence from sources rather than reporting an experiment. Look at how sources are chosen and used, often through the footnotes."},
     {t:"The article must be a popular magazine piece, not scholarship, if it has no Methods", why:"Many scholarly humanities articles have no Methods heading; that’s the norm in the field."},
     {t:"The methods were removed during peer review", why:"Reviewers don’t remove methods; this format simply doesn’t use a separate section."},
     {t:"The methods are always in the abstract instead", why:"Humanities articles sometimes have no abstract at all."}]},
   {id:"t4u3-q06", lesson:"t4u3-l1", level:3, q:"A paper on a new water filter declares that two authors own shares in the company that makes it. How should Oluwaseun treat this?", options:[
     {t:"As a reason to read the methods extra carefully, not as proof of bias", ok:true, why:"A declared interest is a signal to check design choices and framing closely. It doesn’t, by itself, show bias."},
     {t:"As proof the study is fraudulent", why:"Declaring an interest is honest practice; many industry-linked studies are sound."},
     {t:"As irrelevant, because the journal already checked for this before publishing it", why:"Publication doesn’t make interests irrelevant. They are declared so that readers can weigh them."},
     {t:"As a reason to rely only on the abstract", why:"If anything, an interest is a reason to read more of the paper, not less."}]},
   {id:"t4u3-q07", lesson:"t4u3-l1", level:1, q:"What is a DOI?", options:[
     {t:"A permanent identifier for a paper or other item", ok:true, why:"It can be written as a link starting https://doi.org/. DOI stands for Digital Object Identifier; it keeps working even if the publisher’s website changes."},
     {t:"The date of issue of a journal", why:"Dates are separate; a DOI is an identifier."},
     {t:"A number that measures how often a paper has been cited", why:"Citation counts are a different thing."},
     {t:"The name of the peer reviewer", why:"Reviewers are usually anonymous; a DOI identifies the item."}]},
   {id:"t4u3-q08", lesson:"t4u3-l1", level:2, q:"Which sentence would you most expect in a Discussion section?", options:[
     {t:"“Because our sample came from one city, the findings may not apply to rural areas.”", ok:true, why:"Stating limitations and what they mean is a job of the Discussion."},
     {t:"“We recruited 210 participants through local clinics.”", why:"Recruitment is a Methods detail."},
     {t:"“Mean waiting time was 34 minutes (SD 11).”", why:"A raw finding belongs in the Results."},
     {t:"“Little research has examined waiting times in rural clinics.”", why:"Identifying a gap is usually done in the Introduction."}]},
   {id:"t4u3-q09", lesson:"t4u3-l1", level:3, q:"Dmitri finds a preprint reporting a striking result on a new battery material. Which approach is most sensible?", options:[
     {t:"Treat it as promising but not yet peer-reviewed, and look for later versions", ok:true, why:"Preprints are shared before peer review and can change; careful reading and checking for updates is appropriate. Read the methods carefully too."},
     {t:"Ignore it completely: preprints are never useful", why:"Preprints can be excellent and are often the fastest way to see new work; they just need extra care."},
     {t:"Treat it exactly like a published, peer-reviewed article, since it’s on a research site", why:"No outside experts have checked it yet, so it deserves more caution."},
     {t:"Cite the abstract only, since the rest may change", why:"Citing an abstract without reading the paper is risky whatever the publication status."}]},
   /* Lesson 2 */
   {id:"t4u3-q10", lesson:"t4u3-l2", level:1, q:"In Keshav’s three-pass method, what is the first pass for?", options:[
     {t:"A quick look to grasp the gist and decide whether to read further", ok:true, why:"It takes about 5–10 minutes. The first pass covers title, abstract, introduction, headings and conclusion."},
     {t:"Checking every calculation in the paper", why:"That belongs to the third pass, for papers you must master."},
     {t:"Reading every word from start to finish", why:"The method exists to avoid reading every paper that way."},
     {t:"Writing the paper’s full reference in a citation style before reading it", why:"Useful, but not what the first pass is for."}]},
   {id:"t4u3-q11", lesson:"t4u3-l2", level:2, q:"A figure shows two group averages with error bars, and the caption says “bars show standard deviation”. What do the bars tell Ana?", options:[
     {t:"How spread out individual values were in each group", ok:true, why:"Standard deviation describes the spread of individual scores. It does not describe the uncertainty of the average."},
     {t:"The 95% confidence interval for each average", why:"A confidence interval is a different range around the average, and it is usually much narrower."},
     {t:"Whether the difference is statistically significant", why:"Error bars of any kind don’t directly show that; look for the test of the difference."},
     {t:"The range in which 95% of future studies’ averages will fall", why:"That’s not what standard deviation describes."}]},
   {id:"t4u3-q12", lesson:"t4u3-l2", level:2, q:"Which literature-note entry is written most usefully for later?", options:[
     {t:"Waiting times fell by 12 minutes on average (p. 5, Table 2).", ok:true, why:"It has the size, the unit and where to find it."},
     {t:"Waiting times fell a lot.", why:"‘A lot’ is vague and has no page, so you’d have to reread the paper."},
     {t:"Fell by 12.", why:"12 what? Without a unit and page, the number is useless later."},
     {t:"Great paper, agree completely.", why:"An opinion with no content; it won’t help you use the paper later."}]},
   {id:"t4u3-q13", lesson:"t4u3-l2", level:1, q:"What is the main reason to keep quotations, paraphrase and your own ideas clearly apart in notes?", options:[
     {t:"So you don’t copy authors’ words by accident or mix up whose ideas are whose", ok:true, why:"Mixed-up notes are a common cause of accidental plagiarism and misattribution."},
     {t:"Because journals require readers to submit their notes", why:"No journal asks for this; the habit protects you."},
     {t:"Because paraphrase is never allowed in academic writing, only direct quotation", why:"Paraphrase with citation is normal and useful."},
     {t:"To make notes longer", why:"Length isn’t the goal; clarity about whose words and ideas they are is."}]},
   {id:"t4u3-q14", lesson:"t4u3-l2", level:2, q:"Fatima is reading a philosophy article for a seminar. Which approach suits it best?", options:[
     {t:"Find the thesis, skim the headings and conclusion, then read it all in order", ok:true, why:"Humanities arguments build step by step, so after orienting yourself, a full linear read works best."},
     {t:"Jump straight to the Results section and read the main findings there first", why:"Philosophy articles rarely have one."},
     {t:"Read only the figures and tables, since they hold the key evidence", why:"There may be none; the argument is in the prose."},
     {t:"Read only the last page", why:"The conclusion helps, but she’d miss how the argument is built and defended."}]},
   {id:"t4u3-q15", lesson:"t4u3-l2", level:3, q:"Mei is writing a policy brief and needs to decide whether a trial’s result can be relied on. How deeply should she read the trial report?", options:[
     {t:"Fully, including the methods, tables and any supplementary material", ok:true, why:"Relying on a finding for a decision needs the deepest read; that’s where problems with the evidence show."},
     {t:"A 5-minute first pass is enough", why:"A first pass decides relevance; it can’t show whether the evidence is sound."},
     {t:"The abstract and conclusion are enough because they summarize everything", why:"Summaries leave out the details needed to judge reliability."},
     {t:"She should rely on a news article about it instead", why:"News coverage is further from the evidence and often simplifies or overstates."}]},
   {id:"t4u3-q16", lesson:"t4u3-l2", level:2, q:"In Zotero’s built-in PDF reader, where are annotations stored?", options:[
     {t:"In the Zotero database, not written into the PDF file", ok:true, why:"Zotero’s documentation says that annotations made in its reader are stored in the Zotero database."},
     {t:"Only on paper", why:"They’re digital annotations."},
     {t:"Inside the PDF file, changing it permanently", why:"Zotero stores them separately in its database."},
     {t:"On the journal’s website", why:"They’re in your own Zotero library."}]},
   {id:"t4u3-q17", lesson:"t4u3-l2", level:3, q:"Mariya, a student of English interpreting, reads in her second language and uses a translation tool. The tool renders a sentence as “the result was important (p = 0.04)”. What should she check?", options:[
     {t:"Whether the original says ‘statistically significant’, a technical term", ok:true, why:"Translation can blur technical terms; ‘significant’ in statistics only means p fell below a threshold."},
     {t:"Nothing: translation tools never change meaning", why:"They can mistranslate technical terms, especially words with everyday meanings."},
     {t:"Whether 0.04 means the result is 4% important", why:"A p-value isn’t a measure of importance at all."},
     {t:"Whether the paper is written in the right language for the course she is taking", why:"The issue is the technical term, not the paper’s language."}]},
   {id:"t4u3-q18", lesson:"t4u3-l2", level:1, q:"What should you read first when looking at a figure?", options:[
     {t:"The caption (legend)", ok:true, why:"It says what is shown and what the symbols mean. Without the caption you may misread axes, units or error bars."},
     {t:"The colors, which show significance", why:"Color is a design choice and has no standard meaning."},
     {t:"The authors’ conclusion in the Discussion", why:"It helps to read the evidence before the interpretation."},
     {t:"The references", why:"They don’t explain the figure."}]},
   /* Lesson 3 */
   {id:"t4u3-q19", lesson:"t4u3-l3", level:1, q:"What does an effect size tell you?", options:[
     {t:"How big a difference or relationship is", ok:true, why:"It answers “how much?”, in real units or on a standard scale."},
     {t:"Whether the result is statistically significant", why:"That’s what a p-value and threshold are used for; size is a separate question."},
     {t:"How many people took part", why:"That’s the sample size."},
     {t:"Whether the study was peer-reviewed", why:"Unrelated to effect size."}]},
   {id:"t4u3-q20", lesson:"t4u3-l3", level:2, q:"A study reports “difference 3 kg (95% CI 1 to 5)”. Which reading is correct?", options:[
     {t:"The CI method captures the true difference in about 95% of repeated studies", ok:true, why:"The 95% describes the method; the interval shows values (1 to 5 kg) that are reasonably compatible with the data."},
     {t:"There is a 95% probability that the true difference in the population is between 1 and 5 kg", why:"The common misreading: for a confidence interval, this particular range either contains the true value or not."},
     {t:"95% of participants lost between 1 and 5 kg", why:"The interval is about the average difference, not individuals."},
     {t:"The difference is exactly 3 kg in the population", why:"3 kg is the best estimate; the interval shows the uncertainty around it."}]},
   {id:"t4u3-q21", lesson:"t4u3-l3", level:2, q:"Risk of a side effect falls from 2% to 1%. Which pair of descriptions is correct?", options:[
     {t:"1 percentage point lower in absolute terms; 50% lower in relative terms", ok:true, why:"2 − 1 = 1 percentage point; 1 ÷ 2 = 50% relative reduction."},
     {t:"50 percentage points lower; 1% lower in relative terms", why:"That swaps the two measures."},
     {t:"1% lower in both absolute and relative terms", why:"The relative change is 50%, because the starting risk was only 2%."},
     {t:"2 percentage points lower; 100% lower in relative terms", why:"Risk fell from 2% to 1%, not to zero."}]},
   {id:"t4u3-q22", lesson:"t4u3-l3", level:3, q:"An online poll of 80,000 volunteers and a random sample of 1,500 people give different estimates of how many adults read books. Which is more likely to be accurate, and why?", options:[
     {t:"The random sample, because volunteers choose themselves", ok:true, why:"Volunteers may differ from adults in general. Size doesn’t fix selection bias. A well-drawn random sample gives everyone a known chance of inclusion."},
     {t:"The poll, because 80,000 is far larger", why:"A large biased sample gives a precise answer to the wrong question."},
     {t:"Neither can ever be useful", why:"The random sample is designed to represent the population."},
     {t:"They are equally accurate, because both of them are samples of adults", why:"How a sample is chosen matters as much as its size."}]},
   {id:"t4u3-q23", lesson:"t4u3-l3", level:2, q:"Roughly how does the width of a confidence interval change if a study uses four times as many participants (same design)?", options:[
     {t:"It roughly halves", ok:true, why:"Width shrinks with the square root of the sample size: √4 = 2."},
     {t:"It shrinks to a quarter", why:"That would be direct proportion; the relationship is with the square root."},
     {t:"It doubles", why:"More participants make estimates more precise, not less."},
     {t:"It stays the same", why:"Sample size is one of the main things that affects width."}]},
   {id:"t4u3-q24", lesson:"t4u3-l3", level:3, q:"An observational study finds that people who own dogs have lower blood pressure. Which is the best next question?", options:[
     {t:"Could something else, such as income, explain both?", ok:true, why:"Activity level or income, for example, could affect both dog ownership and blood pressure. That asks about confounders, the key weakness of observational comparisons."},
     {t:"How quickly can everyone with high blood pressure get a dog?", why:"That assumes cause, which an observational study can’t establish."},
     {t:"Was the p-value below 0.05?", why:"Significance doesn’t address whether the link is causal."},
     {t:"Which breed works best?", why:"Again, this assumes dogs cause the difference."}]},
   {id:"t4u3-q25", lesson:"t4u3-l3", level:2, q:"Study A (20 people) reports a 6-point improvement, 95% CI −5 to 17. What’s the fairest conclusion?", options:[
     {t:"Inconclusive: the data fit anything from slight harm to a large benefit", ok:true, why:"The wide interval crossing zero means the study is too small to tell."},
     {t:"The treatment clearly works, because 6 is a big effect", why:"The interval includes zero and harm, so it isn’t clear."},
     {t:"The treatment clearly doesn’t work", why:"The interval also includes large benefits; the study can’t tell."},
     {t:"Exactly 6 points of improvement is proven", why:"6 is just the best estimate, with large uncertainty."}]},
   {id:"t4u3-q26", lesson:"t4u3-l3", level:1, q:"What is a confounder?", options:[
     {t:"A third factor linked to both the supposed cause and the outcome", ok:true, why:"It can create a misleading association. Confounders are why observational associations can’t simply be read as causes."},
     {t:"A participant who drops out", why:"That’s attrition or dropout."},
     {t:"A statistical test", why:"A confounder is a variable, not a test."},
     {t:"A reviewer who disagrees with the authors about how to interpret the outcome", why:"Unrelated to the statistical term."}]},
   {id:"t4u3-q27", lesson:"t4u3-l3", level:3, q:"A study of 50,000 people finds an average difference of 0.2 points on a 100-point wellbeing scale (95% CI 0.1 to 0.3). What’s the best summary?", options:[
     {t:"Precisely estimated but probably too small to matter", ok:true, why:"The narrow interval shows precision; the size shows the effect is tiny."},
     {t:"A large effect, because the interval doesn’t include zero", why:"Excluding zero says the estimate is probably above zero, not that it’s large."},
     {t:"Inconclusive, because the interval is so narrow", why:"A narrow interval means the result is precise, not inconclusive."},
     {t:"Meaningless, because large studies always give wrong answers", why:"Large studies give precise estimates; the issue is only that this one is small."}]},
   /* Lesson 4 */
   {id:"t4u3-q28", lesson:"t4u3-l4", level:1, q:"A p-value is calculated assuming what?", options:[
     {t:"That the null hypothesis and the model’s other assumptions are true", ok:true, why:"It asks how surprising the data would be in that imagined no-effect world."},
     {t:"That the researchers’ hypothesis is true", why:"It assumes the null, not the research hypothesis."},
     {t:"That the sample size is at least 100", why:"p-values can be calculated for samples of any size."},
     {t:"That the effect is large", why:"It makes no assumption about size."}]},
   {id:"t4u3-q29", lesson:"t4u3-l4", level:2, q:"A news report says: “p = 0.02, so there’s only a 2% chance the result is a fluke.” What’s wrong?", options:[
     {t:"It’s the chance of data this extreme if there were no effect, not of a fluke", ok:true, why:"ASA principle 2: p doesn’t measure the probability that the data were produced by chance alone."},
     {t:"Nothing: that is exactly what a p-value means", why:"It’s the most common misreading of p-values."},
     {t:"The chance of a fluke is actually 98%", why:"p doesn’t give that either way; 1 − p isn’t meaningful as a probability of truth."},
     {t:"It should say there is a 2% chance that the effect is large, not that it is a fluke", why:"p says nothing about size."}]},
   {id:"t4u3-q30", lesson:"t4u3-l4", level:1, q:"What does ‘statistically significant’ mean?", options:[
     {t:"The p-value fell below a threshold chosen in advance, often 0.05", ok:true, why:"That’s the whole technical meaning."},
     {t:"The effect is large", why:"Size is shown by the effect size, not significance."},
     {t:"The result is important for practice", why:"Importance is a judgment about size and context."},
     {t:"The result has been proven true", why:"No single test proves a result."}]},
   {id:"t4u3-q31", lesson:"t4u3-l4", level:3, q:"A small trial finds p = 0.31 for a new physiotherapy routine. Lucía’s manager says this “proves it doesn’t work”. What’s the best reply?", options:[
     {t:"Non-significance isn’t proof of no effect; the trial may be too small to tell", ok:true, why:"The interval may include worthwhile benefits. Absence of significance isn’t evidence of absence, especially in small studies."},
     {t:"The manager is right: any p-value above 0.05 shows that the routine has no effect", why:"A classic misreading listed by Greenland and colleagues."},
     {t:"p = 0.31 means a 31% chance the routine works", why:"p isn’t the probability that a hypothesis is true."},
     {t:"p = 0.31 means a 69% chance it doesn’t work", why:"Neither p nor 1 − p is the probability of a hypothesis."}]},
   {id:"t4u3-q32", lesson:"t4u3-l4", level:2, q:"Which is one of the six principles in the ASA’s 2016 statement on p-values?", options:[
     {t:"A p-value does not measure the size of an effect or the importance of a result", ok:true, why:"That’s principle 5."},
     {t:"Results with p < 0.05 should always be used to guide policy and practice decisions", why:"Principle 3 says decisions shouldn’t rest only on crossing a threshold."},
     {t:"P-values measure the probability that the hypothesis is true", why:"Principle 2 says the opposite."},
     {t:"P-values should never be reported", why:"The statement warns against misuse; it doesn’t ban p-values."}]},
   {id:"t4u3-q33", lesson:"t4u3-l4", level:2, q:"An invented study tests 60 outcomes and reports 3 that are significant at 0.05. If none of the outcomes had a real effect, about how many significant results would you expect by chance?", options:[
     {t:"About 3", ok:true, why:"60 × 0.05 = 3, so this pattern is exactly what chance alone would produce."},
     {t:"None", why:"With α = 0.05, false alarms occur about 5% of the time when the null is true."},
     {t:"About 30", why:"That would be a 50% false-alarm rate."},
     {t:"About 57", why:"That’s the expected number of non-significant results."}]},
   {id:"t4u3-q34", lesson:"t4u3-l4", level:3, q:"A paper reports that a drug was “significant in adults over 60 (p = 0.01) but not in younger adults (p = 0.25), so it works only in older people”. What’s the flaw?", options:[
     {t:"The difference between the age groups must be tested directly", ok:true, why:"One p below and one above 0.05 don’t show that the effect differs by age. A difference in significance isn’t a significant difference."},
     {t:"There is no flaw: different p-values in two groups prove the effects are different", why:"The younger group may just be smaller or noisier."},
     {t:"The p-values should have been added together", why:"p-values aren’t added; the comparison needs its own test."},
     {t:"The study should have used p = 0.10 for younger adults", why:"Changing thresholds after seeing data makes things worse."}]},
   {id:"t4u3-q35", lesson:"t4u3-l4", level:2, q:"Which reported result gives the most useful information?", options:[
     {t:"“Difference 4 points (95% CI 1 to 7), p = 0.01”", ok:true, why:"It gives the size, the precision and the exact p-value."},
     {t:"“The difference was significant (p < 0.05)”", why:"No size, no interval, no exact p."},
     {t:"“p = 0.01”", why:"A p-value alone doesn’t tell you how big the effect is."},
     {t:"“A significant improvement was found” (marked with two stars)", why:"Stars and the word ‘significant’ leave out size and uncertainty."}]},
   {id:"t4u3-q36", lesson:"t4u3-l4", level:1, q:"In a coin test, 9 heads in 10 tosses gives p ≈ 0.02 (two-sided). What does that mean?", options:[
     {t:"If the coin were fair, a result this lopsided would happen about 2% of the time", ok:true, why:"That’s the p-value: the probability of data this extreme (either way) under the fair-coin model."},
     {t:"There is only a 2% chance that the coin is fair, so it is almost certainly biased", why:"p can’t give the probability of the hypothesis; that would need more information."},
     {t:"The coin lands heads 2% of the time", why:"It landed heads 90% of the time in this test."},
     {t:"There is a 98% chance the coin is biased", why:"1 − p isn’t the probability that the coin is biased."}]},
   /* Lesson 6 (t4u3-l5) */
   {id:"t4u3-q37", lesson:"t4u3-l5", level:1, q:"What is critical appraisal?", options:[
     {t:"Judging how far to trust a study, and for what, using a fair set of structured questions", ok:true, why:"It’s calibrated judgment, not fault-finding."},
     {t:"Finding reasons to reject every study", why:"Every study has limitations; appraisal decides which matter."},
     {t:"Checking a paper’s spelling and grammar", why:"Clarity matters, but appraisal is about the evidence."},
     {t:"Counting how often a paper is cited", why:"Citations show attention, not trustworthiness."}]},
   {id:"t4u3-q38", lesson:"t4u3-l5", level:2, q:"An abstract based on a one-off survey says screen time “causes anxiety in teenagers”. What’s the main problem?", options:[
     {t:"A single survey shows association, not cause", ok:true, why:"Anxious teenagers may use screens more, or other factors may affect both. Causal language from a non-causal design is a classic form of spin."},
     {t:"Surveys can never be published as research", why:"Surveys are widely and usefully published; the issue is the claim."},
     {t:"Anxiety can’t be measured by asking teenagers questions", why:"It can be measured with validated questionnaires."},
     {t:"Teenagers shouldn’t be studied", why:"With proper ethics they can be; the issue is the causal claim."}]},
   {id:"t4u3-q39", lesson:"t4u3-l5", level:3, q:"An AI tool summarizes a paper as “a large trial proving the diet causes weight loss in all adults”. The paper is a 12-week trial in 90 women aged 30–50, with an uncertain result. What has the summary done?", options:[
     {t:"Exaggerated the size and certainty and over-generalized beyond the sample", ok:true, why:"‘Large’, ‘proving’ and ‘all adults’ all go beyond what the paper reports. Check every claim against the paper."},
     {t:"Summarized it accurately, since AI tools read the whole paper before answering", why:"Tools can misread or overstate; this summary contradicts the paper."},
     {t:"Made only a harmless simplification", why:"Changing ‘uncertain’ to ‘proving’ and ‘90 women’ to ‘all adults’ changes the meaning."},
     {t:"Shown that the paper is wrong", why:"The summary is wrong, not necessarily the paper."}]},
   {id:"t4u3-q40", lesson:"t4u3-l5", level:2, q:"What is a reporting guideline such as CONSORT?", options:[
     {t:"A checklist of what a report of a particular type of study should include", ok:true, why:"For CONSORT, the type of study is a randomized trial. Reporting guidelines help authors report fully and readers check what’s missing."},
     {t:"A rule that journals use to decide whether a trial’s results are true or false", why:"It covers reporting, not truth."},
     {t:"A citation style", why:"Citation styles format references; reporting guidelines cover content."},
     {t:"A law that applies in every country", why:"It’s a professional standard, adopted by many journals."}]},
   {id:"t4u3-q41", lesson:"t4u3-l5", level:2, q:"Aoi, a master’s student in regional disaster and community studies, is appraising an interview study of 20 refugees’ experiences of finding work. Which question fits best?", options:[
     {t:"Is the analysis transparent, and do the researchers reflect on their own role?", ok:true, why:"Look for quotations that support each theme. Qualitative studies are judged on fit, transparency and reflexivity."},
     {t:"Is a sample of 20 people enough to estimate the national employment rate for refugees?", why:"Interview studies don’t aim to estimate population rates."},
     {t:"Was the p-value below 0.05?", why:"Qualitative studies don’t usually test hypotheses with p-values."},
     {t:"Were participants randomly assigned to conditions?", why:"There are no conditions to assign in an interview study."}]},
   {id:"t4u3-q42", lesson:"t4u3-l5", level:1, q:"When you use an AI summary of a paper, what should you cite?", options:[
     {t:"The paper itself, for claims you have checked in it", ok:true, why:"The paper is the evidence; the summary is only a guide."},
     {t:"The AI tool, as the source of the findings", why:"The findings come from the paper; disclosure of AI use, if required, is separate."},
     {t:"Nothing, if the summary was short", why:"Using a source’s findings always needs a citation."},
     {t:"The summary’s first sentence", why:"Summaries can be wrong; verify and cite the paper."}]},
   {id:"t4u3-q43", lesson:"t4u3-l5", level:3, q:"Ana has been asked to peer-review a manuscript for a journal and wonders whether to upload it to an AI chatbot for a summary. What should she do?", options:[
     {t:"Not upload it, because peer review is confidential", ok:true, why:"A manuscript under review is someone else’s unpublished work shared in confidence. She should also check the journal’s policy on AI use."},
     {t:"Upload it, since the chatbot is free", why:"Price doesn’t affect confidentiality."},
     {t:"Upload only the abstract and methods", why:"Those parts are also confidential."},
     {t:"Upload it, as long as she deletes the authors’ names first", why:"Removing names doesn’t make the unpublished work hers to share."}]},
   {id:"t4u3-q44", lesson:"t4u3-l5", level:2, q:"Which phrase in a results section is a common sign of spin?", options:[
     {t:"“A trend toward significance (p = 0.08)”", ok:true, why:"It presents an inconclusive result as if it were nearly positive."},
     {t:"“Difference 2.1 points (95% CI 0.4 to 3.8)”", why:"A plain report of size and uncertainty."},
     {t:"“The primary outcome did not differ between groups”", why:"An honest report of a null result."},
     {t:"“Our sample was drawn from one region, which limits generalizability”", why:"An honest limitation, the opposite of spin."}]},
   {id:"t4u3-q45", lesson:"t4u3-l5", level:3, q:"Amara finds one well-designed study supporting a claim she likes. What should she do before relying on it?", options:[
     {t:"Check for corrections, look for reviews and later studies, and appraise it strictly", ok:true, why:"She should also check whether it has been retracted. One paper is one voice; checking context and her own bias guards against overconfidence. She should appraise it as strictly as a study she disagrees with."},
     {t:"Rely on it, because one well-designed study is enough to settle the question for good", why:"Single studies often aren’t replicated; context matters."},
     {t:"Look only for studies that agree", why:"That’s confirmation bias."},
     {t:"Check its download count", why:"Popularity says nothing about whether it holds up."}]},
   /* Lesson t4u3-l6 (shown as Lesson 5) */
   {id:"t4u3-q46", lesson:"t4u3-l6", level:1, q:"In most regression tables, what does a number in brackets under a coefficient show?", options:[
     {t:"Usually its standard error; the table note says for sure", ok:true, why:"Brackets most often hold standard errors, but some tables put t-statistics or confidence intervals there. The note decides."},
     {t:"The number of people in that category of the variable", why:"Counts per category belong in the descriptive table; N for the whole model is usually at the bottom."},
     {t:"The p-value, written in brackets to keep the table compact", why:"p-values are usually shown by stars or in their own column, not in brackets under the coefficient."},
     {t:"The value of the coefficient before any controls were added", why:"Unadjusted estimates usually get their own column (such as Model 1), not brackets."}]},
   {id:"t4u3-q47", lesson:"t4u3-l6", level:2, q:"A table shows “Region (ref. = North): South 3.5 (1.2)”, with income in thousands as the outcome. What does 3.5 mean?", options:[
     {t:"People in the South earned about 3.5 thousand more than similar people in the North", ok:true, why:"Each category is compared with the reference category (North). The model’s other variables are held constant."},
     {t:"People in the South earned about 3.5 thousand more than the overall average", why:"The comparison is with the reference category, not with the average of everyone."},
     {t:"The South has 3.5 times as many people in the sample as the North", why:"Coefficients are differences in the outcome, not ratios of group sizes."},
     {t:"Living in the South causes people’s incomes to rise by 3.5 thousand", why:"An observational coefficient shows an association. Whether region causes the difference needs a design that supports it."}]},
   {id:"t4u3-q48", lesson:"t4u3-l6", level:2, q:"A coefficient is 6.0 with a standard error of 2.0. What is its approximate 95% confidence interval?", options:[
     {t:"About 2.1 to 9.9", ok:true, why:"6.0 ± 1.96 × 2.0 = 6.0 ± 3.92, so about 2.1 to 9.9."},
     {t:"About 4.0 to 8.0", why:"That is ± one standard error. A 95% interval needs about 1.96 standard errors each side."},
     {t:"About 5.9 to 6.1", why:"That treats the standard error as if it were tiny. Use 1.96 × 2.0 = 3.92."},
     {t:"About 0.0 to 12.0", why:"That uses three standard errors each side, which gives a wider interval than 95%."}]},
   {id:"t4u3-q49", lesson:"t4u3-l6", level:3, q:"Kenji’s summary of a paper says: “Age is the strongest cause of the outcome, since its coefficient has the most stars.” The paper’s question was about a training program; age was a control variable. What is wrong?", options:[
     {t:"Stars aren’t size, and control coefficients aren’t trustworthy effects", ok:true, why:"There are two errors. First, stars mark p-value thresholds, not importance. Second, reading a control variable’s coefficient as an effect is the Table 2 fallacy, because the model wasn’t built to estimate it."},
     {t:"Nothing: more stars always mean a stronger cause", why:"Stars depend on sample size and precision as well as size, and say nothing about cause."},
     {t:"Only that he should have said “correlate” instead of “cause”", why:"That fixes one problem but not the other: control coefficients may be confounded or show only part of an effect."},
     {t:"Age can never be included as a variable in regression models", why:"Age is a very common control. The issue is how its coefficient is read."}]},
   {id:"t4u3-q50", lesson:"t4u3-l6", level:1, q:"For an **odds ratio**, which value means no difference between groups?", options:[
     {t:"1", ok:true, why:"A ratio of 1 means the odds are the same in both groups. An interval that includes 1 is compatible with no difference."},
     {t:"0", why:"0 means no difference for differences and for raw logistic coefficients (log odds), not for ratios."},
     {t:"0.05", why:"0.05 is a common significance threshold for p-values, not a value of an odds ratio."},
     {t:"100", why:"Odds ratios aren’t percentages; 100 would mean the odds are a hundred times higher."}]},
   {id:"t4u3-q51", lesson:"t4u3-l6", level:3, q:"In an invented study, 50% of one group and 25% of another had a common outcome. A news story reports the odds ratio of 3.0 as “three times as likely”. What is the fairest correction?", options:[
     {t:"They were twice as likely: the risk ratio is 2.0", ok:true, why:"Risk ratio = 50% ÷ 25% = 2.0. Odds: 1.0 against 0.33, so OR = 3.0. For common outcomes the odds ratio sits further from 1, so “times as likely” fits the risk ratio."},
     {t:"Nothing: an odds ratio always means “times as likely”", why:"Only roughly, and only when the outcome is rare. Here the outcome is common and the two ratios differ."},
     {t:"They were 25% more likely, the gap in percentage points", why:"The gap is 25 percentage points, not “25% more likely”, which would be a relative change."},
     {t:"They were three times less likely, since odds ratios run backwards", why:"An odds ratio above 1 means higher odds in the first group, not lower."}]},
   {id:"t4u3-q52", lesson:"t4u3-l6", level:2, q:"In a randomized trial’s Table 1, the groups differ slightly in average age. Following CONSORT 2025, what should a reader do?", options:[
     {t:"Judge whether the imbalance is large enough to matter", ok:true, why:"With proper randomization, baseline differences are due to chance. So significance tests of them are not recommended. The useful question is whether an imbalance in an important variable could affect the result."},
     {t:"Look for a p-value showing whether the difference is real", why:"CONSORT 2025 says significance testing of baseline differences is not recommended and should not be reported."},
     {t:"Conclude that the randomization must have failed", why:"Chance alone produces small differences. That is expected, not a sign of failure."},
     {t:"Ignore the table, since trials don’t need one", why:"CONSORT asks trials for a baseline table for each group; it shows who was studied."}]},
   {id:"t4u3-q53", lesson:"t4u3-l6", level:2, q:"A cross-tab of 400 survey answers has age groups as rows and preferred class type (online or in person) as columns, and each **column** adds to 100%. Which question can those percentages answer directly?", options:[
     {t:"Of those who prefer online classes, what share are in each age group?", ok:true, why:"Each column is a preference, so its percentages describe the age mix of the people with that preference."},
     {t:"Which age group is most likely to prefer online classes, compared with the others?", why:"That needs percentages within each age group (rows here), not within each preference."},
     {t:"Whether age causes people to prefer online classes", why:"No percentages in a cross-tab can show cause on their own."},
     {t:"How many people in the whole country prefer online classes", why:"A cross-tab describes the sample. To generalize, you need a probability sample and a margin of error."}]},
   {id:"t4u3-q54", lesson:"t4u3-l6", level:3, q:"Model 1 reports N = 2,400 and Model 2, which adds household income, reports N = 1,650. What should you check first?", options:[
     {t:"Why 750 cases dropped out, and whether they differ", ok:true, why:"Many people may not have reported income. If they differ from the rest, Model 2 describes a different group, and the change between models may partly reflect who was left out."},
     {t:"Nothing: N always falls when variables are added", why:"N falls only when cases have missing data on the new variable. The drop needs explaining."},
     {t:"Whether R² rose, which would prove Model 2 is better", why:"R² is not a test of which model is right, and the two models used different people."},
     {t:"Whether the authors made a typing error in the table", why:"Possible, but a drop like this usually comes from missing data. Check the notes and Methods."}]}
  ]
});
