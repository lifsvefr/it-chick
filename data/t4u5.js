/* Track 4 · Unit 5 · Literature reviews */
ICA.addUnit({
  id:"t4u5", track:"t4", n:5, title:"Literature reviews", icon:"🧭",
  blurb:"Turn a pile of sources into a map of what is known: the kinds of review, how systematic reviews and PRISMA work, the synthesis matrix, themes, debates and gaps, and writing that connects sources instead of listing them.",
  goals:[
    "Explain what a literature review is for and how it differs from an annotated bibliography",
    "Tell narrative, scoping, systematic, rapid and umbrella reviews and meta-analyses apart, and choose one that fits a question",
    "Read and draw a PRISMA flow diagram, and outline a review protocol and where to register it",
    "Build a synthesis matrix and use it to find themes, debates and gaps",
    "Write paragraphs that synthesise several sources, organised by theme, time or method"
  ],
  read:[
    {book:"bhatt", where:"Chapter 3, “The Research Process”, section “Overview of the Research Process” (the literature review step)", note:"Short and clear on why reviews matter. Written in 2012, before PRISMA 2020 and the scoping-review reporting guideline (PRISMA-ScR, 2018); the lessons cover those."},
    {book:"owg", where:"Section 13.5, “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”", note:"Good on notes that lead to synthesis."},
    {book:"owg", where:"Chapter 14, “Annotated Bibliography: Gathering, Evaluating, and Documenting Sources”", note:"Shows the annotated bibliography, which Lesson 1 compares with a review."}
  ],
  lessons:[
  /* ───────────── LESSON 1 ───────────── */
  {id:"t4u5-l1", title:"What a literature review is for", minutes:45,
   hook:{q:"Kenji has a paragraph of notes on each of 25 articles, in the order he read them. His supervisor says: “Good work, but this isn’t a literature review yet.” What is most likely missing?", options:["More articles: 25 is too few","Connections: what the articles show together, where they disagree and what’s missing","Longer quotations from each article","A more formal tone"], answer:1,
     reveal:"**Connections.** Kenji has a list of summaries, closer to an annotated bibliography. A literature review groups sources by idea, compares them, weighs how strong the evidence is and shows what’s still unknown. The number of sources and the tone matter much less. This lesson shows what a review is for and how it’s built."},
   goals:["Explain what a literature review does and why researchers write one","Tell a literature review apart from an annotated bibliography","Recognise the usual shape of a review and common misconceptions about it"],
   learn:[
    {h:"Joining a conversation", body:[
      {lead:"Imagine arriving late to a long dinner-table discussion. Before you speak, you listen: who has said what, where people agree, where they argue, and what nobody has mentioned yet."},
      "Research works the same way. Every published study answers earlier work and invites later work. A [[literature-review-term|literature review]] is your account of that conversation on one topic: what has been studied, what was found, how strong the evidence is, where researchers disagree, and what is still unknown.",
      "Here “literature” doesn’t mean novels. It means the body of written work on a topic: journal articles, books, reports, theses, conference papers and, often, [[grey-literature-term|grey literature]] such as government or charity reports.",
      {key:"A literature review is an argument about the state of knowledge, built from sources. It is not a list of what you read."},
      "The precise version: a literature review identifies, evaluates and **synthesises** relevant research on a defined topic or question, so that readers understand what is known and how a new piece of work fits. [[synthesis|Synthesis]] means combining sources to say something none of them says alone."
    ]},
    {h:"The jobs a review does", body:[
      "The textbook for this track (Bhattacherjee, Chapter 3) gives a review three purposes: to survey the current state of knowledge, to identify key authors, articles, theories and findings, and to identify gaps in knowledge. In practice, a good review does a little more:",
      {ol:[
        "**Maps the field.** What questions have been asked, where, with whom and with which methods.",
        "**Weighs the evidence.** Which findings are well supported by several strong studies, and which rest on one small study.",
        "**Shows the debates.** Where results conflict, and possible reasons (different methods, places, definitions).",
        "**Finds the gaps.** What hasn’t been studied, or not well, or not for some groups. These are [[research-gap-term|research gaps]].",
        "**Positions your work.** Explains why your question matters and why your method is a sensible choice, given what others did."
      ]},
      "That last job is why reviews appear at the start of so much research. It stops people repeating studies that already exist, and it lets readers judge whether a new study adds something.",
      {tip:"Even outside academia, people do this. A nurse checking guidance, a policy officer writing a briefing or a teacher choosing a reading programme all ask: “What does the evidence say, and how sure are we?”"}
    ]},
    {h:"Where you meet literature reviews", body:[
      "Reviews come in different sizes and settings. The core moves (map, weigh, compare, find gaps) are the same.",
      {table:[
        ["Setting","What the review does there"],
        ["Introduction of a journal article","A few paragraphs that lead to the study’s question"],
        ["Thesis or dissertation chapter","A full chapter that sets up the whole project"],
        ["[[review-article|Review article]]","A whole published paper whose findings are the review itself"],
        ["Grant or research proposal","Shows the gap and why the project is worth funding"],
        ["Policy or practice brief","Summarises evidence for a decision, often in plain language"],
        ["Course assignment","Practises finding, judging and connecting sources"]
      ]},
      "Some reviews follow strict, pre-planned methods (Lesson 2 covers these kinds); others are written more freely by experts. Both are “literature reviews” in the broad sense."
    ]},
    {h:"Annotated bibliography or literature review?", body:[
      "These two are often confused, and many courses ask for an annotated bibliography first, as a step towards a review.",
      "An [[annotated-bibliography|annotated bibliography]] is a list of sources, each with its full reference followed by a short note (an annotation) that usually summarises the source and often evaluates it or says how you might use it. Each entry stands alone.",
      "A literature review is organised by **ideas**, not by source. One paragraph may draw on five sources; one source may appear in three different paragraphs.",
      {table:[
        ["","Annotated bibliography","Literature review"],
        ["Organised by","Source (often alphabetical)","Theme, time or method"],
        ["Each unit of text is about","One source","One idea, across sources"],
        ["Main move","Summarise and evaluate","Compare, connect, judge"],
        ["Ends with","The last entry","What’s known, the gaps, and why it matters"]
      ]},
      {fig:'<svg viewBox="0 0 340 440" role="img"><defs><marker id="u5a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Annotated bibliography</text><rect class="d-soft" x="10" y="32" width="100" height="70" rx="8" stroke-width="1.5"/><rect class="d-soft" x="120" y="32" width="100" height="70" rx="8" stroke-width="1.5"/><rect class="d-soft" x="230" y="32" width="100" height="70" rx="8" stroke-width="1.5"/><text x="60" y="56" text-anchor="middle">Source A</text><text x="170" y="56" text-anchor="middle">Source B</text><text x="280" y="56" text-anchor="middle">Source C</text><text class="s" x="60" y="76" text-anchor="middle">summary +</text><text class="s" x="170" y="76" text-anchor="middle">summary +</text><text class="s" x="280" y="76" text-anchor="middle">summary +</text><text class="s" x="60" y="92" text-anchor="middle">evaluation</text><text class="s" x="170" y="92" text-anchor="middle">evaluation</text><text class="s" x="280" y="92" text-anchor="middle">evaluation</text><text class="s" x="170" y="124" text-anchor="middle">Each entry stands alone</text><path class="d-ink" d="M10 140H330" stroke-width="1" stroke-dasharray="4 4"/><text x="170" y="166" text-anchor="middle">Literature review</text><circle class="d-lup" cx="50" cy="196" r="17" stroke-width="1.5"/><circle class="d-lup" cx="130" cy="196" r="17" stroke-width="1.5"/><circle class="d-lup" cx="210" cy="196" r="17" stroke-width="1.5"/><circle class="d-lup" cx="290" cy="196" r="17" stroke-width="1.5"/><text x="50" y="201" text-anchor="middle">A</text><text x="130" y="201" text-anchor="middle">B</text><text x="210" y="201" text-anchor="middle">C</text><text x="290" y="201" text-anchor="middle">D</text><path class="d-ink" d="M55 213L80 242" stroke-width="1.5" marker-end="url(#u5a1)"/><path class="d-ink" d="M126 213L105 242" stroke-width="1.5" marker-end="url(#u5a1)"/><path class="d-ink" d="M138 212L225 242" stroke-width="1.5" marker-end="url(#u5a1)"/><path class="d-ink" d="M212 213L240 242" stroke-width="1.5" marker-end="url(#u5a1)"/><path class="d-ink" d="M285 213L270 242" stroke-width="1.5" marker-end="url(#u5a1)"/><rect class="d-sage" x="20" y="246" width="140" height="48" rx="8" stroke-width="1.5"/><rect class="d-sage" x="180" y="246" width="140" height="48" rx="8" stroke-width="1.5"/><text x="90" y="266" text-anchor="middle">Theme 1:</text><text class="s" x="90" y="284" text-anchor="middle">where they agree</text><text x="250" y="266" text-anchor="middle">Theme 2:</text><text class="s" x="250" y="284" text-anchor="middle">where they disagree</text><path class="d-ink" d="M90 294L130 320" stroke-width="1.5" marker-end="url(#u5a1)"/><path class="d-ink" d="M250 294L210 320" stroke-width="1.5" marker-end="url(#u5a1)"/><rect class="d-gold" x="40" y="324" width="260" height="48" rx="8" stroke-width="1.5"/><text x="170" y="344" text-anchor="middle">What we know, how well,</text><text x="170" y="362" text-anchor="middle">and what’s missing (the gap)</text><path class="d-ink" d="M170 372V394" stroke-width="1.5" marker-end="url(#u5a1)"/><rect class="d-rose" x="70" y="398" width="200" height="36" rx="8" stroke-width="1.5"/><text x="170" y="421" text-anchor="middle">Your question or project</text></svg>', alt:"Top: three separate boxes, Source A, B and C, each with its own summary and evaluation. Bottom: four sources, A to D, with arrows into two theme boxes (where they agree, where they disagree); source B feeds both themes. The themes lead to a box saying what we know, how well, and what is missing, which leads to your question.", cap:"An annotated bibliography is a set of separate notes. A review sorts sources into ideas, and the ideas build towards a gap and a question."}
    ]},
    {h:"The shape of a review", body:[
      "Most reviews, long or short, follow a funnel: wide at the start, narrowing to your question.",
      {list:[
        "**Introduction.** The topic, why it matters, the scope (which years, places, kinds of study) and, in more formal reviews, how sources were found.",
        "**Body.** Sections organised by theme, by period or by method (Lesson 5). Each section compares sources and judges the evidence.",
        "**Conclusion.** What is well established, what is contested, what is missing, and how that leads to the question or decision at hand."
      ]},
      {ex:"Topic: teaching young children to read in their home language.\n\nIntro: why early reading matters; scope = primary schools, studies from 2000 onwards, any country.\n\nTheme 1: reading gains in the first years (most studies agree).\nTheme 2: effects on learning the second language later (findings conflict; studies measure at different ages).\nTheme 3: what teachers and families think (few studies, mostly from two regions).\n\nConclusion: strong evidence for early reading gains; mixed evidence on later effects; little on families’ views outside two regions → a gap a new study could fill.", label:"Worked example: an outline (all studies invented)"},
      "Notice that the outline already argues something. A reader learns not just “what was published” but “how sure we can be, and where to look next”."
    ]},
    {h:"How much is enough?", body:[
      "People often ask how many sources a review needs. There is no single number. It depends on the purpose, the size of the field and any instructions from a course, supervisor, journal or funder, so check those first.",
      "Two better questions than “how many?”:",
      {list:[
        "**Have I covered the main strands?** Each important finding, method, region and point of view on your question should be represented, including work that disagrees.",
        "**Am I still learning something new?** Early on, every source adds something. Later, new sources mostly repeat what you know, and their reference lists point to studies you already have. That repetition is a sign your coverage is good for this scope."
      ]},
      "Depth also matters more than count. Ten studies you understand well, weigh carefully and connect to each other make a stronger review than fifty you have only skimmed.",
      "Keep your scope honest. If you narrow it (say, to studies from one region or the last ten years), say so and give a reason, so readers know what the review does and doesn’t cover."
    ]},
    {h:"Common misconceptions", body:[
      {list:[
        "**“Include everything ever written.”** A review covers the work that is *relevant to a defined scope*. Saying what you included and why is what makes it trustworthy.",
        "**“It should be neutral, so no opinions.”** A review should be fair, but it makes judgements: which evidence is stronger, which explanation fits better. Those judgements must be backed by reasons.",
        "**“Only cite sources that agree with me.”** Leaving out conflicting work is a form of [[confirmation-bias|confirmation bias]], and reviewers and examiners notice.",
        "**“Newest is always best.”** Recent work matters, but classic studies that shaped the field often belong, especially to explain where ideas came from.",
        "**“You write it once, at the start.”** In real projects, the review is revised as you read more and as your question sharpens.",
        "**“Any source is as good as any other.”** A review weighs sources: a large, careful study counts for more than an opinion piece."
      ]},
      {warn:"AI tools can produce text that looks like a literature review, complete with references. Some of those references may not exist, and the summaries may misstate findings. Never cite anything you haven’t found and checked yourself."}
    ]}
   ],
   try:[
    {id:"t4u5-l1-x1", type:"mcq", q:"Which statement best describes the main purpose of a literature review?", options:[
      {t:"To show what is known about a topic, how strong the evidence is, and what is still unknown", ok:true, why:"Right. Mapping, weighing and finding gaps are the core jobs; they also set up any new study."},
      {t:"To prove that the writer has read a large number of sources", why:"Quantity isn’t the goal. A focused review of 15 well-chosen studies can be better than a list of 80."},
      {t:"To summarise each source in the order it was published", why:"That’s a summary list (or an annotated bibliography). A review organises by idea and compares sources."},
      {t:"To present only the evidence that supports the writer’s view", why:"Leaving out conflicting work makes a review biased and less trustworthy. Debates belong in the review."}
    ]},
    {id:"t4u5-l1-x2", type:"sort", q:"Sort each feature: is it typical of an annotated bibliography or of a literature review?", buckets:["Annotated bibliography","Literature review"], items:[
      {t:"Entries listed alphabetically by author", b:0, why:"Annotated bibliographies are usually ordered like a reference list."},
      {t:"A paragraph that cites four sources to make one point", b:1, why:"Combining several sources around one idea is synthesis, the heart of a review."},
      {t:"Each note summarises one source and says how useful it is", b:0, why:"That’s an annotation: summary plus evaluation, one source at a time."},
      {t:"Ends by explaining what is still unknown", b:1, why:"Reviews end with what’s established, what’s contested and the gaps."},
      {t:"Sections named after themes, such as “Effects on older adults”", b:1, why:"Reviews are organised by ideas, not by source."},
      {t:"The same source appears in three different sections", b:1, why:"In a review, one study can support several points. In an annotated bibliography each source appears once."}
    ]},
    {id:"t4u5-l1-x3", type:"match", q:"Match each setting to what a literature review mainly does there.", pairs:[
      ["Introduction of a journal article","A few paragraphs leading to this study’s question","Article introductions are short reviews that set up the study."],
      ["Grant proposal","Shows the gap and why the project deserves funding","Funders want to know the work is needed and not already done."],
      ["Policy brief for a city council","Summarises what the evidence says for a decision","Decision-makers need the bottom line and how sure it is."],
      ["Review article in a journal","The review’s findings are the paper’s main contribution","A review article doesn’t report a new study; the synthesis is the result."]
    ]},
    {id:"t4u5-l1-x4", type:"mcq", q:"Amara is preparing a short evidence summary on school breakfast programmes for a community group. She finds eight studies: six report better attendance, two find no difference. What should her review do with the two studies?", options:[
      {t:"Include them, and look for reasons the results differ, such as different ages, places or measures", ok:true, why:"Yes. Conflicting results are part of the evidence; explaining them is one of a review’s most useful jobs."},
      {t:"Leave them out, because most studies agree", why:"Dropping inconvenient results biases the summary and may hide real limits on when programmes work."},
      {t:"Leave them out unless they are newer than the others", why:"Publication date alone doesn’t decide relevance. Quality and fit to the question do."},
      {t:"Mention them in a footnote without discussing them", why:"Hiding disagreement in a footnote still misleads readers about how settled the evidence is."}
    ]},
    {id:"t4u5-l1-x5", type:"spot", q:"Here is the start of a student’s “literature review”. Tap the parts that show it is really a list of summaries rather than a review.", ask:"shows it’s a list, not a review", parts:[
      {t:"Research on remote work and productivity has grown quickly, and findings vary by type of job.", flag:false, why:"A good opening: it states the topic and hints at a pattern across studies."},
      " ",
      {t:"Source 1: Moreau (2020) surveyed office staff.", flag:true, why:"Labelling paragraphs “Source 1, Source 2…” organises the text by source, not by idea."},
      " ",
      {t:"Source 2: Adeyemi (2021) interviewed managers.", flag:true, why:"Again one source per unit, with no link to Moreau. A review would compare what the two found."},
      " ",
      {t:"Studies that measured output directly reported smaller effects than those that asked workers to rate themselves (Adeyemi, 2021; Moreau, 2020).", flag:false, why:"This is synthesis: one idea, two sources, and a possible reason for the difference."},
      " ",
      {t:"Source 3: Park (2022) is also about remote work.", flag:true, why:"Says nothing about what Park found or how it relates to the others. Pure listing."}
    ]},
    {id:"t4u5-l1-x6", type:"order", q:"Put the parts of a typical review in order, from first to last.", items:[
      {t:"Introduce the topic and why it matters", why:"Readers need to know what the review is about and why they should care."},
      {t:"State the scope and how sources were found", why:"Scope (years, places, kinds of study) tells readers what is and isn’t covered."},
      {t:"Discuss the evidence theme by theme, comparing sources", why:"The body is where synthesis happens."},
      {t:"Say what is established, contested and missing", why:"The conclusion draws the threads together, including the gaps."},
      {t:"Link the gap to the question or decision at hand", why:"The funnel ends at your question: why this study or decision is needed now."}
    ]}
   ],
   apply:{intro:"Look at real reviews and start your own small practice review. You can use any free search tool, such as Google Scholar, CORE, BASE or DOAJ. A library card or university login may unlock more full texts, but you don’t need one here.", tasks:[
     {t:"Dissect a published review", how:["Search for your topic plus the word “review” (for example: urban trees heat review). Open a review article whose full text is free.","Read only the introduction, the section headings and the conclusion.","Note how the body is organised (themes? time? methods?), how the authors say they found sources, and what gap they end on."], write:"Review title and link… How the body is organised… How sources were found… The gap they end with…"},
     {t:"Choose a practice topic for this unit", how:["Pick a topic you care about and that has some research: something from your work, studies, community or health.","Write it as a question, for example “Do school gardens change what children eat?”","Note two or three words people might use for it, so you can search later."], write:"My topic… My question… Other words for it…"},
     {t:"Turn three notes into one connection", how:["Find three short sources on your topic (abstracts are enough for now).","Write one line about each, as in an annotated bibliography.","Then write one or two sentences that say something about all three together: do they agree? use different methods? study different places?"], write:"Source 1… Source 2… Source 3… What they show together…"}
   ], proof:"Notes on how one real review is organised, a practice topic written as a question, and one or two sentences that connect three sources instead of listing them."},
   read:[
     {book:"bhatt", where:"Chapter 3, “The Research Process”, section “Overview of the Research Process” (the paragraph on the literature review)"},
     {book:"owg", where:"Section 14.1, “Compiling Sources for an Annotated Bibliography”"}
   ]
  },
  /* ───────────── LESSON 2 ───────────── */
  {id:"t4u5-l2", title:"Kinds of review", minutes:50,
   hook:{q:"What mainly makes a review “systematic”?", options:["It is very long","It includes only randomised controlled trials","It follows explicit, pre-planned methods that someone else could repeat","It is published in a medical journal"], answer:2,
     reveal:"**Explicit, pre-planned, repeatable methods.** A systematic review sets its question and eligibility criteria in advance, searches thoroughly, appraises the studies and reports every step. Length, field and study design don’t define it: there are systematic reviews in education, ecology and criminology, and of qualitative studies too. This lesson sorts out the main kinds of review."},
   goals:["Define narrative, scoping, systematic, rapid and umbrella reviews and meta-analysis accurately","Explain what each kind can and can’t tell you","Choose a kind of review that fits a question and the time available"],
   learn:[
    {h:"Many kinds, one family", body:[
      {lead:"“Literature review” is a family name. Its members differ in how broad the question is and how explicit and pre-planned the methods are."},
      "Think of maps. A sketch map from a local expert is quick and insightful but shows what that person thinks matters. A surveyed map follows rules so that anyone repeating the survey would draw nearly the same thing. Both are useful; they answer different needs.",
      "Researchers have counted many review types: one well-known typology (Grant and Booth, 2009) described fourteen. Names are also used loosely, so a paper called a “systematic review” may not meet the standard. Always check the **methods**, not just the title.",
      "This lesson covers six you will meet most often: narrative, systematic, meta-analysis, scoping, rapid and umbrella."
    ]},
    {h:"Narrative reviews", body:[
      "A [[narrative-review|narrative review]] (sometimes called a traditional review) is written by authors who select and discuss literature using their expertise, usually without a pre-published plan or a fully reported search.",
      {list:[
        "**Good for:** broad overviews, the history of an idea, comparing theories, introducing a field to newcomers, and the review chapter of many theses.",
        "**Limits:** because selection isn’t fully explained, readers can’t tell what was left out or why. The authors’ views may shape which studies appear, a risk of [[confirmation-bias|confirmation bias]].",
        "**Making one stronger:** state your scope, say roughly how you searched, include conflicting work, and judge the quality of what you cite."
      ]},
      "Narrative doesn’t mean careless. Many excellent, influential reviews are narrative. But a narrative review is a weak basis for claims like “the evidence shows this treatment works”."
    ]},
    {h:"Systematic reviews", body:[
      "A [[systematic-review|systematic review]] tries to collect all the studies that meet criteria set in advance, in order to answer a specific question, using explicit methods chosen to reduce bias. The Cochrane Handbook lists its key features:",
      {ol:[
        "a clearly stated set of objectives with pre-defined eligibility criteria for studies;",
        "an explicit, reproducible methodology;",
        "a systematic search that attempts to identify all studies that would meet the criteria;",
        "an assessment of the validity of the findings of the included studies (for example, [[risk-of-bias|risk of bias]]);",
        "a systematic presentation and synthesis of the included studies."
      ]},
      "The plan is written in a [[review-protocol|protocol]] before the work starts, and often registered publicly (Lesson 3). Systematic reviews are slow and need a team; they commonly take many months.",
      "They began in health care (Cochrane is the best-known producer) but now cover many fields: the Campbell Collaboration publishes reviews in areas such as education, social welfare and crime and justice, and the Collaboration for Environmental Evidence does the same for environmental management."
    ]},
    {h:"Meta-analysis", body:[
      "A [[meta-analysis]] is a statistical method: it combines the numerical results of two or more separate studies to estimate an overall (“pooled”) effect. Larger, more precise studies get more weight. Results are often shown in a [[forest-plot|forest plot]]: one line per study and a diamond for the combined result.",
      "Meta-analysis is usually **one step inside** a systematic review, and an optional one. Cochrane’s guidance stresses that it only makes sense when studies are similar enough to combine: combining very different studies (“apples and oranges”) can produce a meaningless average, and a meta-analysis is only as good as the studies in it.",
      {table:[
        ["","Systematic review","Meta-analysis"],
        ["What it is","A whole review method","A statistical technique"],
        ["Needs numbers?","No; can include qualitative studies","Yes; comparable numeric results"],
        ["Can exist without the other?","Yes (synthesis in words and tables)","Possible, but best done within a systematic review"]
      ]},
      {warn:"A pooled result can still be biased if the studies are. One known problem is [[publication-bias|publication bias]]: studies with striking or positive results are more likely to be published, so an average of published studies can overstate an effect."}
    ]},
    {h:"Scoping reviews", body:[
      "A [[scoping-review|scoping review]] systematically identifies and **maps** the breadth of evidence on a topic. It asks “what is out there?” rather than “does this work?”.",
      {list:[
        "**Typical aims:** see how much research exists and of what kinds, clarify key concepts and definitions, find gaps, and decide whether a full systematic review is possible or worthwhile.",
        "**Question format:** JBI (an international evidence-synthesis organisation) recommends **PCC**: Population, Concept, Context. Example: older adults (P), use of video calls to keep in touch (C), in rural areas (C).",
        "**Methods:** a protocol, a thorough search, set criteria and a charting form, like a systematic review. Assessing the quality of each study is optional and often not done.",
        "**Output:** tables and charts of what has been studied, plus a narrative summary. Scoping reviews do not usually make recommendations for practice."
      ]},
      "The method grew from a framework by Arksey and O’Malley (2005) and was later developed by JBI. It has its own reporting checklist, **PRISMA-ScR** (2018).",
      {tip:"“Scoping” is not “quick and easy”. JBI’s guidance stresses that scoping reviews should be just as rigorous as systematic reviews; they answer a different kind of question."}
    ]},
    {h:"Rapid and umbrella reviews", body:[
      "A [[rapid-review|rapid review]] is, in one widely used definition, “a form of knowledge synthesis that accelerates the process of conducting a traditional systematic review through streamlining or omitting a variety of methods to produce evidence in a resource-efficient manner” (Hamel and colleagues, 2021). Shortcuts might include searching fewer databases, limiting languages or dates, or having one person screen while a second checks a sample. Rapid reviews suit urgent decisions (for example, early in a disease outbreak) but must report their shortcuts honestly, because each one can miss evidence.",
      "An [[umbrella-review|umbrella review]] is a review of existing systematic reviews (Cochrane calls these “overviews of reviews”). It’s useful when many reviews exist on related questions, for example several reviews of different exercise programmes for back pain. One known trap: the same original study can appear in several reviews and get counted twice."
    ]},
    {h:"Choosing a kind of review", body:[
      "The question and the resources decide. Start from what you need to know.",
      {fig:'<svg viewBox="0 0 340 500" role="img"><defs><marker id="u5a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="104" y="20" text-anchor="middle">If you need…</text><text x="277" y="20" text-anchor="middle">consider…</text><g><rect class="d-soft" x="6" y="32" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="56" text-anchor="middle">a broad map of what has</text><text class="s" x="104" y="74" text-anchor="middle">been studied, and how</text><path class="d-ink" d="M204 61H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-sage" x="222" y="32" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="56" text-anchor="middle">Scoping</text><text x="278" y="74" text-anchor="middle">review</text></g><g><rect class="d-soft" x="6" y="104" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="128" text-anchor="middle">a focused question answered</text><text class="s" x="104" y="146" text-anchor="middle">with all eligible studies</text><path class="d-ink" d="M204 133H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-lup" x="222" y="104" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="128" text-anchor="middle">Systematic</text><text x="278" y="146" text-anchor="middle">review</text></g><g><rect class="d-soft" x="6" y="176" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="200" text-anchor="middle">…and the studies report</text><text class="s" x="104" y="218" text-anchor="middle">similar, comparable numbers</text><path class="d-ink" d="M204 205H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-lup" x="222" y="176" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="200" text-anchor="middle">+ meta-</text><text x="278" y="218" text-anchor="middle">analysis</text></g><g><rect class="d-soft" x="6" y="248" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="272" text-anchor="middle">evidence for a decision</text><text class="s" x="104" y="290" text-anchor="middle">in weeks, not months</text><path class="d-ink" d="M204 277H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-gold" x="222" y="248" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="272" text-anchor="middle">Rapid</text><text x="278" y="290" text-anchor="middle">review</text></g><g><rect class="d-soft" x="6" y="320" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="344" text-anchor="middle">to combine several existing</text><text class="s" x="104" y="362" text-anchor="middle">systematic reviews</text><path class="d-ink" d="M204 349H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-gold" x="222" y="320" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="344" text-anchor="middle">Umbrella</text><text x="278" y="362" text-anchor="middle">review</text></g><g><rect class="d-soft" x="6" y="392" width="196" height="58" rx="8" stroke-width="1.5"/><text class="s" x="104" y="416" text-anchor="middle">an expert overview, history</text><text class="s" x="104" y="434" text-anchor="middle">of an idea, or theory</text><path class="d-ink" d="M204 421H218" stroke-width="1.5" marker-end="url(#u5a2)"/><rect class="d-rose" x="222" y="392" width="112" height="58" rx="8" stroke-width="1.5"/><text x="278" y="416" text-anchor="middle">Narrative</text><text x="278" y="434" text-anchor="middle">review</text></g><text class="s" x="170" y="478" text-anchor="middle">Check the methods section, not just the title.</text></svg>', alt:"A guide with six rows. A broad map of what has been studied points to a scoping review. A focused question answered with all eligible studies points to a systematic review. If studies also report similar, comparable numbers, add a meta-analysis. Evidence for a decision in weeks points to a rapid review. Combining several existing systematic reviews points to an umbrella review. An expert overview, history of an idea or theory points to a narrative review.", cap:"A starting guide, not a rule: real projects sometimes combine approaches."},
      {table:[
        ["Kind","Question","Appraises study quality?"],
        ["Narrative","Broad, flexible","Sometimes, informally"],
        ["Scoping","Broad: what exists?","Optional; often not"],
        ["Systematic","Focused, set in advance","Yes"],
        ["Rapid","Focused, urgent","Usually, in a simplified way"],
        ["Umbrella","Across existing reviews","Yes, of the reviews"]
      ]},
      "For a course assignment or a thesis chapter you will usually write a narrative review, but you can borrow systematic habits: a stated scope, a recorded search and clear reasons for including sources. Lesson 3 shows how."
    ]},
    {h:"Reading someone else’s review", body:[
      "Published reviews are excellent shortcuts into a topic: one good review can point you to dozens of studies. Read them with the same care as any source.",
      {list:[
        "**When was the search run?** A review is a snapshot up to its search date, which may be a year or more before publication. Look for newer studies.",
        "**What exactly was the question?** A review of adults in hospitals may not apply to children at home.",
        "**What kind of review is it, really?** Check the methods section, not the title.",
        "**Were the included studies appraised?** If not, strong and weak studies may be treated as equal.",
        "**Who wrote and funded it?** Look for declared conflicts of interest.",
        "**Is there a newer or larger review?** Searching your topic plus “review” often reveals several; compare their conclusions."
      ]},
      "When two reviews on the same question disagree, the same reasoning applies as for studies: check their questions, criteria, search dates and methods before deciding which to trust."
    ]}
   ],
   try:[
    {id:"t4u5-l2-x1", type:"match", q:"Match each kind of review to its description.", pairs:[
      ["Narrative review","Experts select and discuss literature without a fully reported, pre-planned method","Its strength is insight and breadth; its weakness is that selection can’t be checked."],
      ["Scoping review","Systematically maps what research exists on a broad topic","Scoping reviews ask “what is out there?” and often skip quality appraisal."],
      ["Systematic review","Pre-planned, reproducible search and appraisal to answer a focused question","Explicit methods set in advance are the defining feature."],
      ["Meta-analysis","Statistically combines results from several studies","It is a statistical technique, usually inside a systematic review."],
      ["Umbrella review","Reviews existing systematic reviews","Its “studies” are reviews, not original research."]
    ]},
    {id:"t4u5-l2-x2", type:"mcq", q:"Dmitri reads: “This systematic review found 14 studies, but they used very different outcome measures, so no meta-analysis was done.” What should he conclude?", options:[
      {t:"That’s normal: a systematic review can synthesise studies in words and tables when pooling numbers wouldn’t make sense", ok:true, why:"Right. Meta-analysis is optional; forcing very different studies into one average can be misleading."},
      {t:"It isn’t a real systematic review, because every systematic review includes a meta-analysis", why:"A common mix-up. Systematic review is the method; meta-analysis is an optional statistical step within it."},
      {t:"The authors made an error and should have averaged the results anyway", why:"Combining incompatible measures can produce a meaningless number. Declining to pool is often the careful choice."},
      {t:"The review is a scoping review instead", why:"Scoping reviews map breadth. Having no meta-analysis doesn’t turn a focused systematic review into a scoping review."}
    ]},
    {id:"t4u5-l2-x3", type:"sort", q:"For each question, which kind of review fits best?", buckets:["Scoping review","Systematic review (maybe with meta-analysis)"], items:[
      {t:"What kinds of research exist on how small farmers use mobile phones for market prices?", b:0, why:"A broad “what exists?” question: a mapping job."},
      {t:"Does a specific reading programme raise test scores for 7-year-olds compared with usual teaching?", b:1, why:"A focused effectiveness question with a defined comparison."},
      {t:"How have researchers defined “digital literacy” in studies of adult learners?", b:0, why:"Clarifying concepts and definitions is a classic scoping aim."},
      {t:"Do text-message reminders reduce missed clinic appointments?", b:1, why:"Focused question about an intervention and an outcome; studies may allow pooling."},
      {t:"Is there enough research on community fridges to make a systematic review worthwhile?", b:0, why:"Checking whether a systematic review is feasible is a stated purpose of scoping reviews."},
      {t:"How accurate is a rapid test for a disease compared with the lab standard?", b:1, why:"Diagnostic accuracy is a focused question, a common type of systematic review."}
    ]},
    {id:"t4u5-l2-x4", type:"mcq", q:"A ministry needs evidence on school mask policies within three weeks. A team searches two databases, limits to English and the last five years, and has one person screen with a second checking a sample. What kind of review is this, and what must they do?", options:[
      {t:"A rapid review; they should report every shortcut so readers know what might be missed", ok:true, why:"Yes. Streamlined methods are what make it rapid; transparency about them is what keeps it trustworthy."},
      {t:"A full systematic review; no extra reporting is needed", why:"The shortcuts (two databases, one screener, language limits) mean it isn’t a full systematic review."},
      {t:"A narrative review, because it was quick", why:"It follows a planned, explicit method, just streamlined. That’s a rapid review, not a narrative one."},
      {t:"An umbrella review, because a ministry asked for it", why:"Umbrella reviews combine existing systematic reviews. Who asks doesn’t decide the type."}
    ]},
    {id:"t4u5-l2-x5", type:"spot", q:"A paper’s methods section says it is a “systematic review”. Tap the parts that suggest it doesn’t meet that standard.", ask:"doesn’t meet the standard", parts:[
      {t:"We registered our protocol before searching.", flag:false, why:"A pre-registered plan is exactly what a systematic review should have."},
      " ",
      {t:"We searched three databases using the strategy in Appendix 1.", flag:false, why:"Several sources and a reported strategy are good signs."},
      " ",
      {t:"We also included studies we already knew that supported our hypothesis.", flag:true, why:"Hand-picking supportive studies outside the planned method introduces bias, the very thing systematic methods try to prevent."},
      " ",
      {t:"Inclusion criteria were decided after reading the results of the studies.", flag:true, why:"Criteria should be set in advance. Choosing them after seeing results lets the findings steer the review."},
      " ",
      {t:"Two reviewers screened all records independently.", flag:false, why:"Independent double screening is standard good practice."},
      " ",
      {t:"We did not assess the quality of included studies.", flag:true, why:"Appraising the validity of included studies is one of the defining features of a systematic review."}
    ]},
    {id:"t4u5-l2-x6", type:"mcq", q:"Which statements about scoping reviews are accurate? Choose all that apply.", options:[
      {t:"They map the breadth of evidence and can clarify how key concepts are defined", ok:true, why:"These are core scoping-review purposes in JBI guidance."},
      {t:"JBI recommends framing the question with Population, Concept and Context (PCC)", ok:true, why:"PCC is JBI’s recommended framework for scoping reviews."},
      {t:"They have their own reporting checklist, PRISMA-ScR", ok:true, why:"PRISMA-ScR (2018) is the PRISMA extension for scoping reviews."},
      {t:"They are a quick, informal alternative that needs no protocol", why:"Scoping reviews use a protocol and systematic methods; they are not meant to be less rigorous."},
      {t:"They usually end with firm recommendations for practice", why:"Scoping reviews map evidence; they generally don’t make practice recommendations."}
    ]}
   ],
   apply:{intro:"Look at how real reviews describe themselves, and choose the right kind for your own question. All the tools named here are free.", tasks:[
     {t:"Compare two kinds of review on your topic", how:["Search a free tool (Google Scholar, CORE, BASE or PubMed for health topics) for your topic plus “scoping review”, then for your topic plus “systematic review”.","Open one of each (free full text, or just the abstract).","Compare: how broad is the question? Did they assess study quality? Is there a meta-analysis?"], write:"Scoping review: question… quality assessed?… Systematic review: question… quality assessed?… meta-analysis?…"},
     {t:"Check whether a review is already planned", how:["Open PROSPERO (crd.york.ac.uk/prospero) for health-related topics, or OSF Registries (osf.io/registries) for any field.","Search two or three keywords from your topic.","Note any registered review protocols: their question, status and date."], write:"Registry searched… Keywords… Protocols found (question, status)…"},
     {t:"Match three questions to review types", how:["Write three different questions about your topic: one broad (“what exists?”), one focused (“does X affect Y?”), one urgent or practical.","For each, decide which kind of review fits, and why."], write:"Broad question → … because… Focused question → … because… Urgent question → … because…"}
   ], proof:"A comparison of a real scoping review and a real systematic review, a note on any registered protocols on your topic, and three questions each matched to a suitable kind of review."},
   read:[
     {book:"bhatt", where:"Background reading: Chapter 3, “The Research Process”, section “Overview of the Research Process”", note:"The book predates PRISMA 2020 and PRISMA-ScR and doesn’t cover scoping or rapid reviews; use this lesson’s Codex sources for those."}
   ]
  },
  /* ───────────── LESSON 3 ───────────── */
  {id:"t4u5-l3", title:"Systematic methods and PRISMA", minutes:55,
   hook:{q:"A review team’s searches find 1,240 records. After screening, they include 16 studies. Does that suggest the search was badly done?", options:["Yes: almost all the results were wasted","No: searching widely and then screening most records out is normal","Yes: they should have searched just one database","It depends only on how many databases they used"], answer:1,
     reveal:"**No, this is normal.** Systematic searches are designed to be sensitive: they cast a wide net so that relevant studies aren’t missed, and then most records are excluded at screening. The PRISMA flow diagram exists so readers can see exactly where each record went. This lesson walks through it, with invented numbers that add up."},
   goals:["Describe what a review protocol contains and where it can be registered","Write simple inclusion and exclusion criteria","Read and draw a PRISMA 2020 flow diagram and check that its numbers add up"],
   learn:[
    {h:"Plan first: the protocol", body:[
      {lead:"A systematic review starts with a written plan, the protocol, before any searching."},
      "Think of a recipe written before cooking, so nobody can later claim the dish was meant to taste the way it turned out. A [[review-protocol|review protocol]] sets out in advance:",
      {list:[
        "the question and why it matters;",
        "the [[inclusion-criteria|eligibility (inclusion and exclusion) criteria]];",
        "where you will search and the draft search strategy;",
        "how studies will be screened and by whom;",
        "what information will be extracted from each study;",
        "how study quality ([[risk-of-bias|risk of bias]]) will be judged;",
        "how results will be synthesised (for example, meta-analysis if studies are similar enough)."
      ]},
      "Why bother? Deciding methods after seeing results lets the results steer the review, even unintentionally. A protocol also shows others that the review is under way, which reduces wasted duplicate work. Plans can change; when they do, the final review reports what changed and why."
    ]},
    {h:"Registering a protocol", body:[
      "Registering means publishing the protocol (or a summary) on a public, time-stamped register. Two common, free options:",
      {table:[
        ["Register","What it accepts"],
        ["PROSPERO (run by the Centre for Reviews and Dissemination, University of York; funded by the UK’s NIHR)","Systematic reviews with an outcome relevant to human health (it also has a section for animal studies). It does not accept scoping reviews. It asks you to register before data extraction starts."],
        ["OSF Registries (Center for Open Science)","Any field and any type of review, including scoping reviews. It offers a general systematic review registration template."]
      ]},
      "Some teams also publish their protocol as a journal article. Registration rules change, so check the register’s current guidance before you submit.",
      {tip:"Registration is the review version of what is called preregistration for new studies, covered in the ethics and integrity unit of this track."}
    ]},
    {h:"Eligibility criteria", body:[
      "Eligibility criteria decide which studies belong. They follow from the question. Health reviews often use **PICO** (Population, Intervention, Comparison, Outcome); scoping reviews often use **PCC** (Population, Concept, Context). Add practical limits such as study design, dates and languages, and give a reason for each.",
      {ex:"Question: Do school vegetable gardens change how many vegetables children eat?\n\nInclude:\n• Population: children aged 5–12 in primary school, any country\n• Intervention: a school garden programme children take part in\n• Comparison: schools without a garden programme\n• Outcome: vegetable intake, measured in any way\n• Design: studies with a comparison group\n\nExclude:\n• Gardens used only as decoration, with no child participation\n• Opinion pieces and news stories (no data)\n• Outcomes about knowledge only, with no measure of eating", label:"Worked example: criteria for an invented review"},
      "Good criteria are specific enough that two people applying them independently would mostly agree. Vague criteria (“good-quality studies about gardens”) produce inconsistent screening.",
      {warn:"Limiting to one language is common, but it can miss important studies and tilt the evidence towards some regions. If you do it, say so as a limitation."}
    ]},
    {h:"Searching and screening", body:[
      "Systematic searches use several databases, plus other routes such as reports from organisations, trial or study registers, and following references backwards and citations forwards (the searching unit of this track covers these skills). Every search is recorded so it can be repeated.",
      "Three words matter here, and PRISMA uses them precisely:",
      {list:[
        "A **record** is a title and abstract found by a search. The same paper found in two databases gives two records (a duplicate).",
        "A **report** is a document about a study: a journal article, thesis, conference abstract, dataset.",
        "A **study** is the piece of research itself. One study can have several reports (say, early results in one article and later results in another)."
      ]},
      "Screening happens in two stages. First, titles and abstracts are screened against the criteria, and clearly irrelevant records are removed. Then the full texts of the remaining reports are read and judged; at this stage, the reason for each exclusion is recorded. Good practice is for two people to screen independently and resolve disagreements by discussion or with a third person.",
      "For a small review, a spreadsheet with one row per record and a column for the decision works. Larger teams use dedicated screening software (free and paid tools exist).",
      "Before screening everything, teams usually **pilot** the criteria: two people screen the same small batch, compare decisions and sharpen any criterion they read differently.",
      {ex:"Date: 12 March\nWhere: ERIC (education database)\nSearch: (\"school garden*\" OR \"garden-based learning\") AND (vegetable* OR \"fruit and vegetable\") AND child*\nLimits: 2010 onwards\nResults: 214 records, exported to my reference manager", label:"Worked example: one entry in a search log (invented)", mono:true},
      "A log like this is what lets someone else repeat your search, and what lets you write an accurate methods paragraph later."
    ]},
    {h:"The PRISMA flow diagram", body:[
      "[[prisma-term|PRISMA]] (Preferred Reporting Items for Systematic reviews and Meta-Analyses) is a **[[reporting-guideline|reporting guideline]]**. The current version, PRISMA 2020, has a 27-item checklist of what a systematic review report should include, plus a flow diagram showing how records moved from search to inclusion. PRISMA tells you what to report; it isn’t a step-by-step guide to doing a review, nor a score of review quality.",
      {fig:'<svg viewBox="0 0 340 520" role="img"><defs><marker id="u5a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="8" y="18">Identification</text><rect class="d-lup" x="8" y="26" width="196" height="66" rx="6" stroke-width="1.5"/><text x="106" y="46" text-anchor="middle">Records identified</text><text class="s" x="106" y="64" text-anchor="middle">databases: n = 1,186</text><text class="s" x="106" y="81" text-anchor="middle">registers: n = 54</text><rect class="d-soft" x="216" y="26" width="118" height="66" rx="6" stroke-width="1.5"/><text class="s" x="275" y="44" text-anchor="middle">Removed before</text><text class="s" x="275" y="59" text-anchor="middle">screening:</text><text class="s" x="275" y="74" text-anchor="middle">duplicates</text><text class="s" x="275" y="88" text-anchor="middle">n = 312</text><path class="d-ink" d="M204 59H213" stroke-width="1.5" marker-end="url(#u5a3)"/><path class="d-ink" d="M106 92V120" stroke-width="1.5" marker-end="url(#u5a3)"/><text class="s" x="8" y="112">Screening</text><rect class="d-lup" x="8" y="124" width="196" height="44" rx="6" stroke-width="1.5"/><text x="106" y="143" text-anchor="middle">Records screened</text><text class="s" x="106" y="160" text-anchor="middle">n = 928</text><rect class="d-soft" x="216" y="124" width="118" height="44" rx="6" stroke-width="1.5"/><text class="s" x="275" y="142" text-anchor="middle">Records excluded</text><text class="s" x="275" y="159" text-anchor="middle">n = 841</text><path class="d-ink" d="M204 146H213" stroke-width="1.5" marker-end="url(#u5a3)"/><path class="d-ink" d="M106 168V186" stroke-width="1.5" marker-end="url(#u5a3)"/><rect class="d-lup" x="8" y="190" width="196" height="44" rx="6" stroke-width="1.5"/><text x="106" y="209" text-anchor="middle">Reports sought</text><text class="s" x="106" y="226" text-anchor="middle">for retrieval: n = 87</text><rect class="d-soft" x="216" y="190" width="118" height="44" rx="6" stroke-width="1.5"/><text class="s" x="275" y="208" text-anchor="middle">Not retrieved</text><text class="s" x="275" y="225" text-anchor="middle">n = 5</text><path class="d-ink" d="M204 212H213" stroke-width="1.5" marker-end="url(#u5a3)"/><path class="d-ink" d="M106 234V252" stroke-width="1.5" marker-end="url(#u5a3)"/><rect class="d-lup" x="8" y="256" width="196" height="44" rx="6" stroke-width="1.5"/><text x="106" y="275" text-anchor="middle">Reports assessed</text><text class="s" x="106" y="292" text-anchor="middle">for eligibility: n = 82</text><rect class="d-soft" x="216" y="256" width="118" height="96" rx="6" stroke-width="1.5"/><text class="s" x="275" y="274" text-anchor="middle">Reports excluded</text><text class="s" x="275" y="290" text-anchor="middle">n = 63:</text><text class="s" x="275" y="306" text-anchor="middle">population 24</text><text class="s" x="275" y="322" text-anchor="middle">outcome 21</text><text class="s" x="275" y="338" text-anchor="middle">not a study 18</text><path class="d-ink" d="M204 278H213" stroke-width="1.5" marker-end="url(#u5a3)"/><text class="s" x="8" y="350">Included</text><path class="d-ink" d="M106 300V364" stroke-width="1.5" marker-end="url(#u5a3)"/><rect class="d-sage" x="8" y="368" width="196" height="64" rx="6" stroke-width="1.5"/><text x="106" y="390" text-anchor="middle">Studies included: 16</text><text class="s" x="106" y="408" text-anchor="middle">Reports of included</text><text class="s" x="106" y="424" text-anchor="middle">studies: 19</text><text class="s" x="170" y="460" text-anchor="middle">1,186 + 54 = 1,240; 1,240 − 312 = 928</text><text class="s" x="170" y="478" text-anchor="middle">928 − 841 = 87; 87 − 5 = 82</text><text class="s" x="170" y="496" text-anchor="middle">82 − 63 = 19 reports (of 16 studies)</text></svg>', alt:"A PRISMA 2020 style flow diagram with invented numbers. Identification: 1,186 records from databases and 54 from registers; 312 duplicates removed before screening. Screening: 928 records screened, 841 excluded; 87 reports sought for retrieval, 5 not retrieved; 82 reports assessed for eligibility, 63 excluded (24 wrong population, 21 wrong outcome, 18 not a study). Included: 16 studies, reported in 19 reports. The sums are shown at the bottom.", cap:"A simplified PRISMA 2020 flow diagram for a new review (all numbers invented). Every box can be checked with simple arithmetic."},
      "Read it top to bottom. The main column shows what goes forward; the side boxes show what was removed at each stage and, at full-text stage, why. The last box separates **studies** from **reports**: here, 19 reports describe 16 studies, because three studies each have two reports.",
      "The official PRISMA 2020 template has a few more boxes (for example, records removed by automation tools, and a second column for records found by other methods, such as websites, organisations or citation searching). Templates are free on the PRISMA website.",
      {tip:"Scoping reviews report with PRISMA-ScR (2018), which has 20 essential items and 2 optional ones and uses a similar flow diagram."}
    ]},
    {h:"Extraction, appraisal and synthesis", body:[
      "After screening, the team uses a form to extract the same details from every included study: setting, participants, design, outcomes, results. This is a structured version of the synthesis matrix in Lesson 4.",
      "Next comes [[critical-appraisal-term|critical appraisal]] (see {{critical-appraisal}}): how far can each study’s results be trusted? Published tools guide this, for example Cochrane’s RoB 2 for randomised trials, and checklists from JBI and from CASP for many study designs. Appraisal asks about the study’s design and conduct, not whether you like its findings.",
      "Finally, synthesis. If studies are similar enough, a meta-analysis may pool the numbers. If not, results are grouped and compared in words and tables; a reporting guideline called SWiM (Synthesis Without Meta-analysis) helps describe how that was done."
    ]},
    {h:"Borrowing the habits for smaller projects", body:[
      "Most learners won’t run a full systematic review alone; it is a team effort. But its habits make any review more trustworthy:",
      {ol:[
        "Write your question and criteria down **before** searching.",
        "Keep a search log: where, when, the exact search string and the number of results.",
        "Record why you excluded the sources you read in full.",
        "Count as you go, so you could draw a small flow diagram.",
        "Describe your method in a sentence or two in your introduction."
      ]},
      {ex:"“I searched Google Scholar, CORE and ERIC in March for studies from 2010 onwards on school gardens and children’s eating, and checked the reference lists of included studies. Of 46 full texts read, 12 met my criteria (primary-school children, a comparison group, a measure of eating).”", label:"Worked example: a methods sentence for a course review (invented numbers)"}
    ]}
   ],
   try:[
    {id:"t4u5-l3-x1", type:"order", q:"Put these steps of a systematic review in order.", items:[
      {t:"Write and register the protocol", why:"The plan comes first, so results can’t steer the methods."},
      {t:"Run the searches and remove duplicates", why:"Searching follows the protocol’s strategy; duplicates are removed before screening."},
      {t:"Screen titles and abstracts", why:"The first, quick pass removes clearly irrelevant records."},
      {t:"Read full texts and record reasons for exclusion", why:"The second pass applies the criteria carefully to each full report."},
      {t:"Extract data and appraise risk of bias", why:"Only included studies are extracted and appraised."},
      {t:"Synthesise and report, using PRISMA", why:"Synthesis and reporting come last, describing everything above."}
    ]},
    {id:"t4u5-l3-x2", type:"number", q:"A review’s searches found 2,050 records in databases and 150 in registers. 600 duplicates were removed before screening. How many records were screened?", answer:1600, tol:0, unit:"records", why:"Add both sources, then remove duplicates: 2,050 + 150 = 2,200; 2,200 − 600 = 1,600 records screened.", wrongs:[
      {v:1450, tol:0, why:"That’s 2,050 − 600: you left out the 150 register records. Records from every source go into screening."},
      {v:2200, tol:0, why:"That’s the total found. Duplicates are removed before screening, so subtract the 600."},
      {v:2800, tol:0, why:"Duplicates are subtracted, not added."}
    ], hint2:"First add databases and registers, then subtract duplicates."},
    {id:"t4u5-l3-x3", type:"number", q:"In the same review, 1,480 records were excluded at title and abstract screening, and 9 reports could not be retrieved. Full-text assessment excluded 85 reports. How many reports were included?", answer:26, tol:0, unit:"reports", why:"1,600 screened − 1,480 excluded = 120 reports sought. 120 − 9 not retrieved = 111 assessed. 111 − 85 excluded = 26 reports included.", wrongs:[
      {v:35, tol:0, why:"That’s 120 − 85: you forgot to remove the 9 reports that couldn’t be retrieved. They can’t be assessed."},
      {v:111, tol:0, why:"That’s the number assessed for eligibility. Subtract the 85 excluded at full text."},
      {v:120, tol:0, why:"That’s the number sought for retrieval. Two more stages follow."}
    ], hint2:"Work down the diagram: screened → sought → assessed → included."},
    {id:"t4u5-l3-x4", type:"mcq", q:"The last box of a PRISMA diagram says “Studies included: 16; reports of included studies: 19”. Why are the numbers different?", options:[
      {t:"Some studies were described in more than one report, such as an early and a follow-up article", ok:true, why:"Right. A study is the research; a report is a document about it. One study can have several reports."},
      {t:"Three reports were duplicates that should have been removed", why:"Duplicates are copies of the same record and are removed before screening. These are different documents about the same study."},
      {t:"Three studies were excluded after all", why:"Excluded reports appear in the “reports excluded” box, not in the included box."},
      {t:"It’s a mistake: the two numbers must always match", why:"PRISMA 2020 deliberately separates studies and reports because they often differ."}
    ]},
    {id:"t4u5-l3-x5", type:"sort", q:"Criteria for an invented review: adults aged 65+, living at home, any programme using video calls to reduce loneliness, with a measure of loneliness. Include or exclude each study?", buckets:["Include","Exclude"], items:[
      {t:"Weekly video calls with volunteers for adults aged 70–90 living at home; loneliness scale before and after", b:0, why:"Matches population, setting, intervention and outcome."},
      {t:"Video calls for adults aged 65+ in care homes", b:1, why:"Setting doesn’t match: the criteria say living at home."},
      {t:"A blog post by a charity describing its video-call service, with no data", b:1, why:"No data on loneliness: it isn’t a study."},
      {t:"Video-call programme for people aged 65+ at home; measured loneliness and mood", b:0, why:"Extra outcomes are fine as long as loneliness is measured."},
      {t:"Phone (voice-only) calls for adults 65+ at home", b:1, why:"The intervention must use video calls."},
      {t:"Video calls for students aged 18–25 living alone", b:1, why:"Population doesn’t match: the review is about adults aged 65+."}
    ]},
    {id:"t4u5-l3-x6", type:"mcq", q:"Hana is planning a scoping review on how music is used in community mental health projects. Where could she register her protocol?", options:[
      {t:"OSF Registries, which accepts any review type in any field", ok:true, why:"Right. OSF Registries accepts scoping reviews; PROSPERO does not."},
      {t:"PROSPERO, because her topic is about health", why:"PROSPERO does not accept scoping reviews, even on health topics."},
      {t:"Nowhere: scoping reviews don’t use protocols", why:"Scoping reviews should have a protocol written in advance, just like systematic reviews."},
      {t:"Only in a paid journal", why:"Free registers exist; publishing a protocol as an article is optional."}
    ]},
    {id:"t4u5-l3-x7", type:"mcq", q:"Which statement about PRISMA 2020 is accurate?", options:[
      {t:"It is a reporting guideline: a 27-item checklist and a flow diagram showing what a review report should include", ok:true, why:"Yes. PRISMA says what to report so readers can judge the review."},
      {t:"It is a score: reviews with more PRISMA items are higher quality", why:"Reporting something clearly isn’t the same as doing it well. PRISMA isn’t a quality score."},
      {t:"It is a database where systematic reviews are registered", why:"That’s a register such as PROSPERO or OSF Registries."},
      {t:"It applies only to meta-analyses of drug trials", why:"PRISMA 2020 covers systematic reviews in general, with or without meta-analysis, and is used in many fields."}
    ]}
   ],
   apply:{intro:"Practise the systematic habits on your own topic. Everything here works with free tools; keep it small.", tasks:[
     {t:"Write a mini-protocol", how:["Write your question in one sentence.","Write the elements: PICO (for effects of something) or PCC (for mapping a topic).","List three inclusion criteria and three exclusion criteria, each with a reason.","Name two places you will search, and the search string you will use."], write:"Question… PICO or PCC… Include (and why)… Exclude (and why)… Where I’ll search… Search string…"},
     {t:"Screen and count", how:["Run your search in one free tool and look at the first 30 results.","Screen each title and abstract against your criteria: include, exclude or unsure.","Count each group. For 3 included or unsure results, open the full text if free and decide; note a reason for each exclusion."], write:"Results checked: 30… Excluded at title/abstract… Full texts read… Excluded with reasons… Included…"},
     {t:"Check a real flow diagram", how:["Find a published systematic review with free full text (for example, search your topic plus “systematic review PRISMA”).","Find its flow diagram and check that each box adds up.","Note whether it separates studies from reports, and the main reasons for exclusion."], write:"Review… Do the numbers add up?… Studies vs reports… Main exclusion reasons…"}
   ], proof:"A one-page mini-protocol, screening counts for 30 search results with reasons for exclusions, and a check of a real PRISMA diagram."},
   read:[
     {book:"bhatt", where:"Background reading: Chapter 3, “The Research Process”, section “Overview of the Research Process”", note:"Says reviews should be reasonably complete and not limited to a few journals. For PRISMA 2020 itself, use the Codex entry’s sources."},
     {book:"owg", where:"Section 13.5, “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”", note:"The research log described there is a good way to keep a search log."}
   ]
  },
  /* ───────────── LESSON 4 ───────────── */
  {id:"t4u5-l4", title:"The synthesis matrix: themes, debates and gaps", minutes:55,
   hook:{q:"Lucía has read 12 studies on her topic and has notes on each. What is the most useful next step before she starts writing?", options:["Write a paragraph summarising each study","Put the key points into a table: one row per study, one column per question she’s asking","Keep only the three studies she found most convincing","Ask an AI chatbot to write the review from the titles"], answer:1,
     reveal:"**A table: one row per study, one column per question.** This is a synthesis matrix. Reading down a column shows how all the studies answer the same question, which is exactly what a review needs. Paragraph summaries keep her stuck one source at a time, dropping studies loses evidence, and AI text built from titles can misstate findings. This lesson builds a matrix and uses it to find themes, debates and gaps."},
   goals:["Build a synthesis matrix with useful columns","Use the matrix to find themes and explain disagreements","Identify different kinds of research gaps and state them carefully"],
   learn:[
    {h:"From notes to a matrix", body:[
      {lead:"Notes on separate sources are like separate interviews. A synthesis matrix lines up everyone’s answers to the same questions, side by side."},
      "A [[synthesis-matrix-term|synthesis matrix]] is a table in which each **row** is a source and each **column** is a question or theme you care about. Each cell holds a short note: what that source says about that question, with a page number if you might quote it.",
      "You can make one in any spreadsheet (LibreOffice Calc, Google Sheets, Excel, Numbers) or as a table in a document. On a phone, a spreadsheet app works; keep cells short.",
      "The idea is old and goes by several names (some guides call it the matrix method, a literature matrix or a review table). Bhattacherjee notes that reviewed articles “may be summarized in the form of tables”.",
      {tip:"The studies in this lesson’s examples are invented to show the method. Their authors, places and findings are not real."}
    ]},
    {h:"Choosing the columns", body:[
      "Start with columns that suit almost any review, then add columns for your own question.",
      {table:[
        ["Column","What goes in it"],
        ["Reference","Author, year (and a link or DOI)"],
        ["Setting and participants","Where, when, who, how many"],
        ["Design and methods","Survey, experiment, interviews, model…"],
        ["Key findings","In your own words, briefly"],
        ["Limitations","The authors’ own, plus yours"],
        ["Your question’s themes","One column for each idea you’re tracking"]
      ]},
      "Keep cells to a phrase or two. If a cell needs a paragraph, you are summarising again. Mark direct quotations with quotation marks and a page number so you don’t accidentally copy wording later.",
      "Expect to add columns as you read. When the fourth study raises something new (say, results differ at night), add a column and go back to check the earlier studies."
    ]},
    {h:"Reading down the columns", body:[
      "Here is a small matrix for an invented review question: *Do street trees make city streets cooler for people?*",
      {fig:'<svg viewBox="0 0 340 320" role="img"><rect class="d-gold" x="176" y="10" width="76" height="214" stroke-width="2"/><rect class="d-rose" x="4" y="50" width="324" height="34" stroke-width="2"/><rect class="d-ink" x="4" y="10" width="324" height="214" stroke-width="1"/><path class="d-ink" d="M4 50H328M4 84H328M4 118H328M4 152H328M4 186H328M100 10V224M176 10V224M252 10V224" stroke-width="1"/><text class="s" x="52" y="35" text-anchor="middle">Study</text><text class="s" x="138" y="35" text-anchor="middle">Cooler?</text><text class="s" x="214" y="35" text-anchor="middle">Measured</text><text class="s" x="289" y="35" text-anchor="middle">Where</text><text class="s" x="52" y="72" text-anchor="middle">Okafor 2019</text><text class="s" x="138" y="72" text-anchor="middle">yes, small</text><text class="s" x="214" y="72" text-anchor="middle">air sensors</text><text class="s" x="289" y="72" text-anchor="middle">Lagos</text><text class="s" x="52" y="106" text-anchor="middle">Lindqvist 2021</text><text class="s" x="138" y="106" text-anchor="middle">yes, large</text><text class="s" x="214" y="106" text-anchor="middle">satellite</text><text class="s" x="289" y="106" text-anchor="middle">Stockholm</text><text class="s" x="52" y="140" text-anchor="middle">Tanaka 2020</text><text class="s" x="138" y="140" text-anchor="middle">felt cooler</text><text class="s" x="214" y="140" text-anchor="middle">survey</text><text class="s" x="289" y="140" text-anchor="middle">Osaka</text><text class="s" x="52" y="174" text-anchor="middle">Haddad 2022</text><text class="s" x="138" y="174" text-anchor="middle">if watered</text><text class="s" x="214" y="174" text-anchor="middle">model</text><text class="s" x="289" y="174" text-anchor="middle">Amman</text><text class="s" x="52" y="208" text-anchor="middle">Mendes 2023</text><text class="s" x="138" y="208" text-anchor="middle">yes, small</text><text class="s" x="214" y="208" text-anchor="middle">air sensors</text><text class="s" x="289" y="208" text-anchor="middle">São Paulo</text><rect class="d-rose" x="8" y="246" width="16" height="16" stroke-width="1.5"/><text class="s" x="32" y="259">Across a row: one study (summary)</text><rect class="d-gold" x="8" y="274" width="16" height="16" stroke-width="1.5"/><text class="s" x="32" y="287">Down a column: one question across</text><text class="s" x="32" y="305">all studies (synthesis)</text></svg>', alt:"A table with columns Study, Cooler?, Measured and Where, and five invented studies: Okafor 2019, yes small, air sensors, Lagos; Lindqvist 2021, yes large, satellite, Stockholm; Tanaka 2020, felt cooler, survey, Osaka; Haddad 2022, if watered, model, Amman; Mendes 2023, yes small, air sensors, São Paulo. The Okafor row is highlighted as one study, the summary view. The Measured column is highlighted as one question across all studies, the synthesis view.", cap:"Reading across a row gives you one study. Reading down a column shows how all the studies handle one question. (All studies invented.)"},
      "Read down **Cooler?** and a pattern appears: every study points the same way, but the size varies. Now read down **Measured**: the one large difference comes from satellite data, and the small ones from sensors measuring air at street level.",
      "That’s a real insight none of the five studies states by itself: *how big the cooling looks may depend on what is measured*. (In reality, satellites estimate the temperature of surfaces seen from above, such as roofs, roads and treetops, and this can differ a lot from the air temperature people feel, so the pattern is plausible. With only one satellite study, though, it is a lead to check, not a firm conclusion.) That sentence is synthesis, and the matrix made it visible."
    ]},
    {h:"Finding themes", body:[
      "A **theme** is a pattern of meaning across several sources: a finding, an explanation, a problem or a disagreement that keeps coming up. It’s different from a topic label.",
      {table:[
        ["Topic label (too thin)","Theme (says something)"],
        ["Measurement","How much cooling is found depends on whether surface or air temperature is measured"],
        ["Water","Trees cool less where they can’t get enough water"],
        ["People","Very few studies ask how comfortable people actually feel"]
      ]},
      "Ways to find themes in your matrix:",
      {list:[
        "Highlight cells that say similar things in the same colour.",
        "Look for words that recur in findings or limitations.",
        "Ask each column: what do most sources say? Who says something different?",
        "Notice which columns are mostly empty. Empty cells are often gaps."
      ]},
      "One source can belong to several themes. Okafor’s study, for instance, supports “trees cool streets” and is also one of the sensor studies in the measurement theme.",
      "Give each theme a working sentence, not just a name. “Measurement” tells you where to look; “how much cooling is found depends on what is measured” tells you what to argue. Those sentences become your section headings and topic sentences in Lesson 5."
    ]},
    {h:"Debates: when sources disagree", body:[
      "Disagreement is not a problem to hide; explaining it is one of the most valuable things a review does. Before deciding who is right, check whether the studies actually differ in:",
      {list:[
        "**What they measured** (surface vs air temperature; test scores vs attendance).",
        "**Who or where** (different ages, countries, climates, income levels).",
        "**How** (a [[case-study|case study]] vs a survey vs an [[experiment]]; small vs large [[sample|samples]]).",
        "**When** (before or after a policy change; one season vs a whole year).",
        "**Definitions** (what counts as “remote work” or “a garden programme”).",
        "**Quality** (a study with serious flaws shouldn’t outweigh several careful ones)."
      ]},
      "Often the disagreement turns out to be conditional: X helps under some conditions but not others. Say that clearly. If you can’t explain a conflict, say that too: “the reasons for these different results are unclear” is honest and points to a gap.",
      {ex:"Matrix observation: Haddad (2022) found little cooling in a drought scenario; the sensor studies were in places with regular rain or watering.\n\nPossible explanation: trees cool through shade and through releasing water from their leaves; without enough water, the second effect may shrink.\n\nHow to write it: “The one study modelling drought conditions found much smaller cooling (Haddad, 2022), suggesting that water availability may limit the benefit; no field study has tested this.”", label:"Worked example: from a matrix pattern to a careful sentence (studies invented)"},
      "Notice the steps: a pattern in the matrix, a reason grounded in the studies, and wording (“suggesting”, “may”) that matches how strong the evidence is."
    ]},
    {h:"Gaps: what is missing", body:[
      "A [[research-gap-term|research gap]] is something important that existing research hasn’t answered, or hasn’t answered well. Common kinds:",
      {table:[
        ["Kind of gap","Example from the tree review"],
        ["Knowledge gap: little or no research on the question","Almost no studies of night-time temperatures"],
        ["Population or context gap: studied for some groups or places, not others","All studies are in big cities; none in small towns"],
        ["Methodological gap: every study uses similar or weak methods","No study follows the same streets over several years"],
        ["Conflicting findings: results disagree for unclear reasons","Two sensor studies disagree and nobody knows why"],
        ["Theoretical gap: findings without an explanation","Why does watering matter so much? No tested explanation"],
        ["Practice gap: what research shows vs what is done","Planting guides ignore water needs"]
      ]},
      "Names for these vary between guides (some use “evidence gap” for missing research, others for conflicting results), so what matters is being specific. Look for gaps in empty matrix columns, in authors’ own limitations and “future research” sections, and in the conclusions of earlier reviews.",
      {warn:"Be careful with “no one has studied this”. You can only claim what your search covered: “I found no studies of… in the databases I searched.” And a gap must matter: an unstudied question isn’t worth filling just because it’s empty."}
    ]},
    {h:"Tools, and where AI fits", body:[
      "A reference manager such as Zotero (covered in the citing unit of this track) stores the sources; the matrix is where you think about them. Keep a column linking each row to its entry so you can cite accurately.",
      "AI tools can help you draft cell notes from a paper you have open, or suggest columns. Treat every AI note as a draft: check it against the paper, especially numbers, populations and whether a finding was statistically meaningful. Never add a row for a source you haven’t seen yourself; AI tools sometimes describe papers that don’t exist."
    ]}
   ],
   try:[
    {id:"t4u5-l4-x1", type:"mcq", q:"In a synthesis matrix, why is reading down a column more useful for writing a review than reading across a row?", options:[
      {t:"A column shows how every source handles the same question, so you can compare them", ok:true, why:"Right. Comparing across sources is synthesis; a row is one source’s summary."},
      {t:"Rows are only for the reference details", why:"Rows hold everything about one source: setting, method, findings, limitations."},
      {t:"Columns contain direct quotations, which reviews need most", why:"Cells should mostly be brief notes in your own words; reviews rely on comparison, not quotation."},
      {t:"Reading across rows is against the rules", why:"There’s no rule against it; rows are useful for checking one study. They just don’t show patterns across studies."}
    ]},
    {id:"t4u5-l4-x2", type:"mcq", q:"Which columns would be useful in a matrix for a review on “Does mother-tongue teaching in the first school years improve reading?” Choose all that apply.", options:[
      {t:"Age or school year of the children", ok:true, why:"Effects may differ by age; this lets you compare like with like."},
      {t:"How reading was measured", ok:true, why:"Different measures can explain different results."},
      {t:"Country and languages involved", ok:true, why:"Context matters a lot for language-of-instruction research."},
      {t:"Whether you enjoyed reading the paper", why:"Personal enjoyment says nothing about the evidence. Note quality and limitations instead."},
      {t:"The journal’s cover colour", why:"Irrelevant to the findings or their quality."}
    ]},
    {id:"t4u5-l4-x3", type:"sort", q:"Is each item a theme or just a topic label?", buckets:["Theme (says something)","Topic label (too thin)"], items:[
      {t:"“Sample size”", b:1, why:"Names an area but makes no claim. What about sample size?"},
      {t:"“Programmes with trained mentors showed larger gains than those using volunteers”", b:0, why:"States a pattern across sources that can be supported or challenged."},
      {t:"“Parents”", b:1, why:"A heading, not a finding."},
      {t:"“Most studies measured outcomes only in the first month, so long-term effects are unknown”", b:0, why:"A pattern across studies that also points to a gap."},
      {t:"“Rural areas”", b:1, why:"A label for a setting; it doesn’t say what the studies show there."},
      {t:"“Studies disagree on cost savings, partly because they count costs differently”", b:0, why:"Describes a debate and a likely reason for it."}
    ]},
    {id:"t4u5-l4-x4", type:"mcq", q:"Two invented studies of a peer-tutoring programme disagree: one found clear gains in maths, the other none. The first measured after a full school year, the second after six weeks. What is the best way to report this?", options:[
      {t:"Note that the studies measured at different times, so effects may take longer than six weeks to appear, and that this needs testing", ok:true, why:"Yes. A difference in timing is a plausible reason for the conflict; saying it needs testing keeps the claim honest."},
      {t:"Report only the study with the positive result", why:"Leaving out the conflicting study biases the review."},
      {t:"Conclude that peer tutoring doesn’t work, because one study found no effect", why:"One null result doesn’t outweigh the other, and the timing difference may explain it."},
      {t:"Average the two results and report the midpoint", why:"Averaging studies that measured at very different times hides the most interesting point."}
    ]},
    {id:"t4u5-l4-x5", type:"match", q:"Match each gap statement to the kind of gap.", pairs:[
      ["All studies of the app were in high-income countries","Population or context gap","The question has been studied, but not for other places or groups."],
      ["Every study relied on people rating their own sleep","Methodological gap","The methods are all similar and have a shared weakness."],
      ["Results conflict and no study explains why","Conflicting findings","Disagreement with no explanation is a gap in itself."],
      ["Guidelines still recommend a practice the evidence doesn’t support","Practice gap","The gap is between research and what is done."],
      ["I found no studies at all on this question in the databases I searched","Knowledge gap","No (or almost no) research exists on the question, within what was searched."]
    ]},
    {id:"t4u5-l4-x6", type:"spot", q:"Tap the problems in this gap statement from a student’s review.", ask:"is a problem", parts:[
      {t:"No one in the world has ever studied", flag:true, why:"An absolute claim you can’t prove. Say what your search covered: “I found no studies in…”."},
      " how school gardens affect teenagers’ eating, ",
      {t:"which proves that gardens don’t work for teenagers.", flag:true, why:"A lack of studies isn’t evidence of no effect. Absence of evidence isn’t evidence of absence."},
      " ",
      {t:"The twelve studies I found all involved children aged 5–11,", flag:false, why:"A specific, checkable description of what the evidence covers. Good."},
      " ",
      {t:"and most measured eating only at school lunch.", flag:false, why:"Another precise observation from the matrix: a methodological limit worth noting."}
    ]}
   ],
   apply:{intro:"Build a small synthesis matrix for your own topic. Any free spreadsheet works, on a computer or a phone.", tasks:[
     {t:"Set up your matrix", how:{
       win:["Open a spreadsheet app: LibreOffice Calc (free), Excel, or Google Sheets in your browser.","In row 1, type headings: Reference, Setting and participants, Design, Key findings, Limitations, then 2–3 columns for your own themes.","Turn on text wrapping for the whole sheet so long notes stay readable."],
       mac:["Open Numbers, LibreOffice Calc (free), Excel, or Google Sheets in your browser.","In row 1, type headings: Reference, Setting and participants, Design, Key findings, Limitations, then 2–3 columns for your own themes.","Turn on text wrapping so long notes stay readable."],
       chromeos:["Open Google Sheets in your browser (or another spreadsheet you have).","In row 1, type headings: Reference, Setting and participants, Design, Key findings, Limitations, then 2–3 columns for your own themes.","Turn on text wrapping (Format → Wrapping → Wrap in Google Sheets)."],
       phone:["iPhone: use Numbers or the Google Sheets app. Android: use the Google Sheets app or another spreadsheet app you have.","Add the same headings in row 1. Keep each cell to a short phrase; phones make long cells hard to read.","Turning the phone sideways shows more columns."]
     }},
     {t:"Fill in 4–6 sources", how:["Use sources from earlier tasks or a new search. Abstracts are enough to start; full texts are better.","Fill one row per source, in your own words. Put quotation marks and a page number on anything copied.","Leave a cell empty if the source doesn’t address that column; empty cells are information."], write:"Which sources I added… Columns I added while reading…"},
     {t:"Read down the columns", how:["For each theme column, write one sentence saying what most sources show, and who differs.","For any disagreement, check the method, setting and timing columns for a possible reason.","Write one gap statement, say which kind of gap it is, and limit it to what you searched."], write:"Theme 1: most sources… Theme 2… A disagreement and possible reason… My gap statement (and kind)…"}
   ], proof:"A synthesis matrix with 4–6 sources, a sentence for each theme column, one explained disagreement and one carefully worded gap statement."},
   read:[
     {book:"owg", where:"Section 13.5, “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”", note:"Its types of research notes feed straight into a matrix."},
     {book:"bhatt", where:"Chapter 3, “The Research Process”, section “Overview of the Research Process”", note:"The literature review paragraph mentions identifying gaps and summarising articles in tables."}
   ]
  },
  /* ───────────── LESSON 5 ───────────── */
  {id:"t4u5-l5", title:"Writing synthesis, not summary", minutes:55,
   hook:{q:"Which of these sentences is synthesis rather than summary? (All studies are invented.)", options:["Okafor (2019) measured air temperature on 40 streets in Lagos.","Lindqvist (2021) used satellite data from Stockholm.","Studies agree that tree-lined streets are cooler, but the size of the difference depends on what was measured (Lindqvist, 2021; Mendes, 2023; Okafor, 2019).","Tanaka (2020) is an interesting and useful study."], answer:2,
     reveal:"**The third.** It makes one claim, supports it with three sources and explains why their results differ. The first two each report one study, which is summary. The fourth gives an opinion without saying what the study shows. This lesson turns summaries into sentences like the third, and shows how to organise a whole review."},
   goals:["Explain the difference between summary and synthesis","Choose a thematic, chronological or methodological structure","Write and revise paragraphs that synthesise several sources with clear signposting"],
   learn:[
    {h:"Summary and synthesis", body:[
      {lead:"Summary tells the reader what one source says. Synthesis tells the reader what several sources show together."},
      "Summary is a useful skill: the writing guide for this track defines a summary as “a brief condensation or distillation of the main point and most important details of the original source”. In a review, you still summarise, but briefly, and in service of a point.",
      "[[synthesis|Synthesis]] combines sources to make a claim none of them makes alone: they agree, they disagree for a reason, they share a weakness, or together they leave a question open.",
      {fig:'<svg viewBox="0 0 340 380" role="img"><text x="170" y="20" text-anchor="middle">Summary: source by source</text><rect class="d-soft" x="10" y="32" width="320" height="34" rx="6" stroke-width="1.5"/><text class="s" x="170" y="54" text-anchor="middle">Okafor (2019) found… Then…</text><rect class="d-soft" x="10" y="74" width="320" height="34" rx="6" stroke-width="1.5"/><text class="s" x="170" y="96" text-anchor="middle">Lindqvist (2021) found… Then…</text><rect class="d-soft" x="10" y="116" width="320" height="34" rx="6" stroke-width="1.5"/><text class="s" x="170" y="138" text-anchor="middle">Tanaka (2020) found… Then…</text><path class="d-ink" d="M10 168H330" stroke-width="1" stroke-dasharray="4 4"/><text x="170" y="194" text-anchor="middle">Synthesis: idea by idea</text><rect class="d-sage" x="10" y="206" width="320" height="48" rx="6" stroke-width="1.5"/><text x="170" y="226" text-anchor="middle">Idea 1: trees cool streets</text><text class="s" x="170" y="244" text-anchor="middle">Lindqvist; Mendes; Okafor</text><rect class="d-sage" x="10" y="262" width="320" height="48" rx="6" stroke-width="1.5"/><text x="170" y="282" text-anchor="middle">Idea 2: size depends on measure</text><text class="s" x="170" y="300" text-anchor="middle">satellite vs street sensors</text><rect class="d-gold" x="10" y="318" width="320" height="48" rx="6" stroke-width="1.5"/><text x="170" y="338" text-anchor="middle">Idea 3: comfort rarely studied</text><text class="s" x="170" y="356" text-anchor="middle">Tanaka only → a gap</text></svg>', alt:"Top: three stacked boxes, each about one source: Okafor found, Lindqvist found, Tanaka found. Bottom: three boxes each about one idea: trees cool streets (Lindqvist, Mendes, Okafor); the size depends on the measure (satellite versus street sensors); comfort is rarely studied (Tanaka only, a gap).", cap:"The same five invented studies, organised two ways. Synthesis puts ideas in charge and brings sources in as evidence."},
      {key:"In synthesis, ideas lead and sources support them. In summary, sources lead and ideas follow."}
    ]},
    {h:"Organising the whole review", body:[
      "Before writing paragraphs, choose a structure for the body. Your matrix usually suggests one.",
      {table:[
        ["Structure","Sections are…","Works well when…"],
        ["Thematic","Themes or questions","Most reviews; when several ideas run through the literature"],
        ["Chronological","Periods or turning points","How thinking changed over time matters, e.g. after a new law or technology"],
        ["Methodological","Kinds of method or data","Different methods give different answers"],
        ["Theoretical","Competing theories or models","The field is organised around rival explanations"]
      ]},
      "Structures can be combined: a thematic review might be chronological inside one theme. Avoid “chronological” meaning only “in the order studies were published”; that is a list with dates. A useful chronological review is organised around **changes**.",
      {ex:"1. Introduction: why heat in cities matters; scope; how I searched\n2. Do street trees cool streets? (they do; the size varies)\n3. Why estimates differ: satellite vs street-level measures\n4. Conditions: water, street width, tree type\n5. What people feel: the missing evidence\n6. Conclusion: what is known, the gaps, my question", label:"Worked example: a thematic outline (invented review)"}
    ]},
    {h:"The synthesis paragraph", body:[
      "Most synthesis paragraphs follow a simple pattern (some writing centres call it MEAL: Main idea, Evidence, Analysis, Link):",
      {ol:[
        "**Claim.** A topic sentence stating the paragraph’s point in your words, about the literature, not about one source.",
        "**Evidence.** Sources that support the claim, often several in one citation.",
        "**Analysis.** Compare: where do they differ, why, and how strong is the evidence?",
        "**Link.** What this means for the review’s question or the next section."
      ]},
      "A quick test: cover the citations. If the paragraph still makes a point, it’s synthesis. If it becomes a list of “they did… they found…”, it’s still summary.",
      {tip:"In APA style, several sources in one parenthesis go in alphabetical order by first author, separated by semicolons: (Lindqvist, 2021; Mendes, 2023; Okafor, 2019). Other styles have their own rules."},
      {lab:"cl-apa-intext", t:"Practise: APA in-text citations"}
    ]},
    {h:"Before and after: city trees", body:[
      "Here is a summary-style paragraph and a synthesised version using the same invented studies.",
      {ex:"Okafor (2019) studied 40 streets in Lagos using air sensors. The study found that streets with trees were cooler. Lindqvist (2021) used satellite data in Stockholm. This study found large differences in temperature. Mendes (2023) also used sensors, in São Paulo, and found that tree-lined streets were slightly cooler. Tanaka (2020) surveyed residents in Osaka about comfort.", label:"Before: summary"},
      {ex:"Studies in very different climates agree that tree-lined streets are cooler than bare ones (Lindqvist, 2021; Mendes, 2023; Okafor, 2019), but how much cooler depends on what was measured. The largest difference comes from satellite estimates of surface temperature (Lindqvist, 2021), while street-level sensors measuring the air people breathe found smaller differences (Mendes, 2023; Okafor, 2019). Surface and air temperature can differ considerably, so satellite estimates may overstate the cooling people experience. Only one study asked residents how comfortable they felt (Tanaka, 2020), so the link between measured cooling and lived comfort remains largely untested.", label:"After: synthesis"},
      "What changed: the paragraph opens with a claim; sources are grouped by what they show; a difference is explained (measurement); a judgement is made (“may overstate”), with a reason; and it ends on a gap."
    ]},
    {h:"Before and after: clinic reminders", body:[
      "A second example, from health, again with invented studies.",
      {ex:"Silva (2018) tested text-message reminders in a clinic in Recife. Missed appointments fell. Nkemelu (2020) did a similar study in Enugu with phone calls. Missed appointments also fell. Rahman (2021) tested text reminders in Dhaka but found no change. Bergström (2022) reviewed costs.", label:"Before: summary"},
      {ex:"Reminders generally reduced missed appointments, whether sent by text (Silva, 2018) or made by phone call (Nkemelu, 2020). The exception, a trial in Dhaka (Rahman, 2021), sent reminders only in one language, and many patients reported not reading it, which suggests reminders work only when patients can understand them. Cost evidence is thin: one analysis suggests text reminders cost less than calls (Bergström, 2022), but no study compared both methods in the same clinic, so it remains unclear whether calls’ extra cost buys extra attendance.", label:"After: synthesis"},
      "Again: a claim first, sources grouped, the odd result explained by something in the studies (not guesswork), and a precise gap at the end."
    ]},
    {h:"Signposting and careful language", body:[
      "[[signposting|Signposting]] is language that tells readers where they are and how ideas connect. It matters even more in long reviews.",
      {table:[
        ["Job","Example phrases"],
        ["Agreement","Similarly… · Consistent with this… · Several studies report…"],
        ["Contrast","However… · In contrast… · Other studies found…"],
        ["Explaining differences","This may reflect… · One reason may be…"],
        ["Strength of evidence","Strong evidence suggests… · A single small study found…"],
        ["Gap","Little is known about… · No study I found compared…"],
        ["Moving on","Turning to… · A second theme concerns…"]
      ]},
      "Choose reporting verbs that match what the source did. *Found* or *showed* suits results; *argued* or *proposed* suits claims and theories; *suggested* fits tentative findings. Don’t write that a study *proved* something: single studies rarely prove anything.",
      "Match the strength of your words to the strength of the evidence. One small study “suggests”; several large, careful studies that agree “consistently show”."
    ]},
    {h:"Your voice in the review", body:[
      "A review is built from other people’s work, but readers want **your** judgement: which evidence is stronger, how differences can be explained, what matters most. That judgement is your voice.",
      {list:[
        "**Quote sparingly.** Paraphrase most material in your own words; quote only when the exact wording matters, such as a definition or a striking claim you will analyse.",
        "**Give reasons for judgements.** “This study is more convincing” needs a because: a larger sample, a comparison group, a longer follow-up.",
        "**Be fair to work you disagree with.** Describe it accurately before you critique it.",
        "**Check the conventions for “I”.** Many styles, including APA, allow the first person (“I searched…”), but fields and instructors differ, so check yours."
      ]},
      "Your voice is strongest at the start and end of paragraphs (the claim and the link) and in the analysis between sources. If those parts are yours and the middle is well-cited evidence, the balance is usually right."
    ]},
    {h:"Introduction, conclusion and revising", body:[
      "The **introduction** names the topic and why it matters, sets the scope and says briefly how you found sources (Lesson 3). The **conclusion** doesn’t just repeat; it states what is well supported, what is contested and what is missing, and leads to your question or recommendation.",
      "Revise with a reverse outline: write the main point of each paragraph in a few words in the margin. Then check:",
      {list:[
        "Does each paragraph make a claim about the literature, not about one source?",
        "How many sentences start with an author’s name? Many in a row usually means summary.",
        "Is every claim cited, and every source used accurately?",
        "Have you included work that disagrees, and explained it?",
        "Do the gaps follow from the evidence you discussed?"
      ]},
      {warn:"Paraphrase in your own words and cite every source you draw on, even when synthesising. Merging ideas from several authors without citations is still plagiarism."}
    ]}
   ],
   try:[
    {id:"t4u5-l5-x1", type:"spot", q:"Tap the sentences in this paragraph that are summary rather than synthesis. (All studies invented.)", ask:"is summary, not synthesis", parts:[
      {t:"Peer mentoring for first-year university students is linked to higher continuation rates in several countries (Ahmed, 2019; Kowalski, 2021; Osei, 2022).", flag:false, why:"A claim supported by three sources at once: synthesis."},
      " ",
      {t:"Kowalski (2021) studied 300 students in Kraków.", flag:true, why:"Reports one study’s details with no link to the point. Summary."},
      " ",
      {t:"The gains were largest where mentors were trained (Ahmed, 2019; Osei, 2022), suggesting training may matter more than simply having a mentor.", flag:false, why:"Compares sources and draws a cautious conclusion: synthesis."},
      " ",
      {t:"Osei (2022) used interviews.", flag:true, why:"A bare fact about one study, not connected to any claim."},
      " ",
      {t:"No study I found followed students beyond their second year.", flag:false, why:"A gap statement drawn from looking across all the studies, limited to what was found."}
    ]},
    {id:"t4u5-l5-x2", type:"order", q:"Put the sentences of this synthesis paragraph in the most logical order. (Studies invented.)", items:[
      {t:"Community health workers can improve blood pressure control, but results vary by setting.", why:"The claim comes first, in the writer’s words."},
      {t:"Three trials in rural districts reported clear improvements (Ito, 2019; Mwangi, 2020; Ruiz, 2021).", why:"Evidence supporting the first half of the claim."},
      {t:"In contrast, a city-based trial found no difference (Novak, 2022).", why:"The contrasting evidence, signposted with “In contrast”."},
      {t:"In the city trial, most patients already saw a doctor regularly, which may explain the smaller effect.", why:"Analysis: a possible reason for the difference."},
      {t:"It is therefore unclear whether the approach adds value where clinic access is already good, the question this study addresses.", why:"The link: from the evidence to the gap and the writer’s question."}
    ]},
    {id:"t4u5-l5-x3", type:"sort", q:"Which structure is each review outline using?", buckets:["Thematic","Chronological","Methodological"], items:[
      {t:"Sections: Effects on attendance · Effects on grades · Effects on wellbeing", b:0, why:"Each section is a theme or question."},
      {t:"Sections: Before smartphones (to 2007) · Early apps (2008–2015) · AI tools (2016 onwards)", b:1, why:"Organised around periods defined by changes in technology."},
      {t:"Sections: Evidence from experiments · Evidence from surveys · Evidence from interviews", b:2, why:"Organised by kind of method."},
      {t:"Sections: Cost · Access · Quality of care", b:0, why:"Themes again."},
      {t:"Sections: Lab studies · Field studies · Computer models", b:2, why:"Grouped by how the evidence was produced."},
      {t:"Sections: Ideas before the 1990 reform · Debates after the reform · Recent reassessments", b:1, why:"Organised around a turning point in time."}
    ]},
    {id:"t4u5-l5-x4", type:"match", q:"Match each signposting phrase to its job.", pairs:[
      ["In contrast,","Introduces disagreement","Signals that what follows differs from what came before."],
      ["Consistent with this,","Adds agreeing evidence","Shows the next source supports the same point."],
      ["This difference may reflect…","Explains why results differ","Moves from reporting to analysis."],
      ["Little is known about…","Points to a gap","Flags missing evidence."],
      ["A second theme concerns…","Moves to a new section or idea","Helps readers follow the structure."]
    ]},
    {id:"t4u5-l5-x5", type:"mcq", q:"Priya writes: “Mbeki (2020) proves that flexible deadlines reduce student stress.” The source is one survey of 45 students. What is the best revision?", options:[
      {t:"“A small survey suggests flexible deadlines may reduce student stress (Mbeki, 2020).”", ok:true, why:"Right. “Suggests” and “may” match one small survey; naming it as small tells readers how much weight it can bear."},
      {t:"“Mbeki (2020) clearly demonstrates that flexible deadlines reduce stress.”", why:"Still far too strong for a single small survey."},
      {t:"“Research proves flexible deadlines reduce stress.”", why:"Removes the citation and turns one study into “research” in general: less accurate, not more."},
      {t:"“Mbeki (2020) argued that flexible deadlines reduce stress.”", why:"“Argued” suits a claim or opinion; this was a finding from data. The verb misdescribes the source and still doesn’t show how limited the evidence is."}
    ]},
    {id:"t4u5-l5-x6", type:"mcq", q:"Tomás reverse-outlines his draft. Seven paragraphs in a row begin with an author’s name and each discusses one study. What does this most likely show, and what should he do?", options:[
      {t:"The draft is organised by source; he should regroup by theme, using his matrix, so each paragraph makes one claim across several studies", ok:true, why:"Yes. Paragraphs that each start with an author usually mean summary. Regrouping by idea turns them into synthesis."},
      {t:"Nothing is wrong; starting with the author is required in APA style", why:"APA allows narrative citations but doesn’t require them, and the issue here is structure, not citation format."},
      {t:"He should add more sources so each paragraph is longer", why:"More summaries make the list longer, not more synthetic."},
      {t:"He should remove all citations to make it read more smoothly", why:"Every source used must be cited. The fix is to organise by idea, not to drop citations."}
    ]}
   ],
   apply:{intro:"Write a short piece of your own review, using the matrix you built in Lesson 4. Use any word processor or notes app.", tasks:[
     {t:"Outline your review", how:["Look down your matrix columns and list the themes, debates and gaps you found.","Choose a structure (thematic, chronological, methodological or theoretical) and say why it fits.","Write section headings that make claims, not just labels, where you can."], write:"Structure chosen and why… Section 1… Section 2… Section 3… Gap the conclusion will end on…"},
     {t:"Write one synthesis paragraph", how:["Pick one theme with at least three sources.","Write a claim sentence first, in your own words.","Add the evidence, with several sources in one citation where they agree; then explain any difference; end with a link to your question.","Cover the citations and check the paragraph still makes a point."], write:"My paragraph…"},
     {t:"Revise a summary into synthesis", how:["Write (or find in your old notes) a paragraph that summarises sources one by one.","Rewrite it so ideas lead: claim, grouped evidence, analysis, link.","Compare the two and note what changed."], write:"Before… After… What changed…"}
   ], proof:"A review outline with a reasoned structure, one synthesis paragraph drawing on at least three sources, and a before-and-after revision of a summary paragraph."},
   read:[
     {book:"owg", where:"Section 13.5, “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”", note:"Includes the definition of summary quoted in this lesson."},
     {book:"owg", where:"Section 12.5, “Writing Process: Integrating Research”", note:"On weaving sources into your own argument."}
   ]
  }
  ],
  checkpoint:["t4u5-q02","t4u5-q06","t4u5-q11","t4u5-q14","t4u5-q17","t4u5-q21","t4u5-q24","t4u5-q29","t4u5-q32","t4u5-q36","t4u5-q40","t4u5-q44"],
  codex:[
   {id:"literature-review", title:"Literature review", aka:["lit review","review of the literature","background section"], tags:["research","reviews","writing"],
    summary:"An organised, evaluative account of what research says on a topic: what is known, how well, where it conflicts and what is missing.",
    levels:{
     starter:[
      "A literature review is your account of the conversation researchers have been having about a topic. It explains what has been studied, what was found, where people disagree and what nobody has answered yet.",
      "Think of arriving late to a long discussion: before adding your view, you listen, work out who said what, and notice what’s missing. A review does that in writing.",
      "“Literature” here means the body of work on a topic: journal articles, books, reports, theses and conference papers, not novels.",
      "A review is organised by ideas, not by source. One paragraph might bring together five studies that agree, then explain why a sixth found something different.",
      {key:"A literature review is an argument about the state of knowledge, built from sources."}
     ],
     builder:[
      "Reviews appear in many places: the introduction of a journal article (a few paragraphs), a thesis chapter, a stand-alone review article, a grant proposal or a policy brief. The core jobs are the same:",
      {ol:["Map what has been studied, where, with whom and how.","Weigh how strong the evidence is.","Show debates and explain them where possible.","Identify gaps.","Position a new study or decision against all of this."]},
      "Bhattacherjee’s methods textbook gives the review three purposes: surveying the current state of knowledge, identifying key authors, articles, theories and findings, and identifying gaps.",
      "A typical review moves like a funnel: an introduction with the topic, scope and (in formal reviews) the search method; a body organised by theme, time or method; and a conclusion that states what is established, contested and missing, then leads to a question.",
      "It differs from an [[annotated-bibliography|annotated bibliography]], which lists sources one at a time with a summary and evaluation of each. Many courses use the annotated bibliography as a stepping stone towards a review.",
      "The same skills apply outside universities. A clinical guideline group, a school leadership team choosing a reading programme or a charity planning a new service all need to know what the evidence says and how far to trust it. Their reviews may be shorter and plainer, but the moves are the same: find, weigh, connect, and say what is missing."
     ],
     pro:[
      "“Literature review” covers a family of methods, from expert narrative reviews to fully systematic reviews with meta-analysis (see {{review-types}}). In a thesis or article, the review is usually narrative but benefits from systematic habits: a stated scope, a recorded search, explicit reasons for inclusion and transparent judgements about quality.",
      "Experienced readers judge a review by:",
      {list:[
        "**Coverage:** does it include the main strands of work, including conflicting findings and work from different regions and languages where relevant?",
        "**Critical weighing:** are strong and weak studies treated differently, or is every source cited as equally authoritative?",
        "**Synthesis:** do paragraphs make claims across sources (see {{synthesis-writing}}), or is it a chain of summaries?",
        "**Honest gaps:** are gaps specific, limited to what was searched, and important (see {{research-gap}})?",
        "**Fit:** does the review set up the study’s question and justify its design?"
      ]},
      "Reviews date quickly. A review is a snapshot of the literature up to its search date; check when the search was run, not just when it was published, and look for newer studies before relying on it.",
      "Generative AI can produce fluent text resembling a review, sometimes with references that don’t exist or that are misdescribed. Every cited source must be one you have located and read, and policies on disclosing AI use vary by institution and publisher."
     ]},
    related:["review-types","synthesis-matrix","synthesis-writing","research-gap"],
    read:[{book:"bhatt", where:"Chapter 3, “The Research Process”, section “Overview of the Research Process”"},{book:"owg", where:"Chapter 14, “Annotated Bibliography: Gathering, Evaluating, and Documenting Sources”"}],
    sources:[{t:"Bhattacherjee, Social Science Research, Chapter 3: The Research Process (Lumen Learning copy)", url:"https://courses.lumenlearning.com/suny-hccc-research-methods/chapter/chapter-3-the-research-process/"},{t:"RMIT University: The purposes of a literature review", url:"https://rmit.pressbooks.pub/researchwritingmasterstudents/chapter/the-purposes-of-a-literature-review/"},{t:"University of Montana Writing Center: Literature reviews defined", url:"https://www.umt.edu/writing-center/writing-resources/writing-resources-files/literature-reviews-defined.pdf"}],
    checked:"2026-11"},

   {id:"review-types", title:"Kinds of literature review", aka:["review typology","types of evidence synthesis"], tags:["research","reviews"],
    summary:"Narrative, scoping, systematic, rapid and umbrella reviews and meta-analysis: what each is for and how they differ.",
    levels:{
     starter:[
      "Not all reviews are built the same way. Some are written by experts choosing what to discuss; others follow strict rules set in advance so anyone could repeat them.",
      "Like maps: a local’s sketch map is quick and insightful; a surveyed map follows rules so it can be checked. Both are useful for different jobs.",
      {list:[
        "**Narrative review:** an expert overview.",
        "**Scoping review:** a careful map of what research exists on a broad topic.",
        "**Systematic review:** a planned, thorough search and appraisal to answer a focused question.",
        "**Meta-analysis:** a statistical combination of results from several studies.",
        "**Rapid review:** a streamlined systematic review for urgent decisions.",
        "**Umbrella review:** a review of existing systematic reviews."
      ]},
      "When you read a review, check its methods section to see which kind it really is; titles are sometimes used loosely."
     ],
     builder:[
      {table:[
        ["Kind","Question","Key features"],
        ["Narrative","Broad, flexible","Selection by authors; search often not fully reported"],
        ["Scoping","What exists? How is it defined?","Protocol, thorough search, charting; quality appraisal optional"],
        ["Systematic","Focused, pre-specified","Protocol, comprehensive search, risk-of-bias appraisal, structured synthesis"],
        ["Meta-analysis","How big is the effect overall?","Statistical pooling; usually inside a systematic review"],
        ["Rapid","Focused, urgent","Systematic methods with reported shortcuts"],
        ["Umbrella","What do existing reviews show?","Units of analysis are systematic reviews"]
      ]},
      "Choose by question and resources. Use a scoping review to map a field or check whether a systematic review is feasible; a systematic review for a focused question (often about effectiveness, accuracy or risk); a rapid review when a decision cannot wait; an umbrella review when many reviews already exist; and a narrative review for history, theory or a broad introduction.",
      "Course essays and thesis chapters are usually narrative, but they gain credibility by borrowing systematic habits: stated scope, recorded searches and reasons for inclusion.",
      "Time and team size matter too. A full systematic review is a team project that commonly takes many months; a scoping review is similar in effort. A single student with a few weeks will usually write a narrative review, made more trustworthy by systematic habits. If you need a firm answer to a focused question, look first for an existing systematic review before starting your own."
     ],
     pro:[
      "Typologies differ. Grant and Booth (2009) described 14 review types; later work added more. Labels drift, so assess a review by its methods: was there a protocol? Was the search reproducible? Were studies appraised? Was synthesis explicit?",
      "Scoping reviews follow the Arksey and O’Malley (2005) framework as developed by JBI (JBI Manual for Evidence Synthesis, chapter on scoping reviews), use PCC (Population, Concept, Context) and report with PRISMA-ScR (Tricco and colleagues, 2018). JBI stresses they should be as rigorous as systematic reviews; they generally don’t make practice recommendations.",
      "Rapid reviews: a widely cited definition (Hamel and colleagues, 2021) calls them knowledge synthesis that accelerates a systematic review by streamlining or omitting methods. Cochrane has a Rapid Reviews Methods Group with published guidance. Every shortcut is a potential source of missed evidence, so reporting them matters.",
      "Umbrella reviews (JBI) or overviews of reviews (Cochrane) compile evidence from multiple systematic reviews. A known problem is overlap: the same primary study included in several reviews can be counted more than once unless overlap is checked.",
      "Other types exist, such as qualitative evidence synthesis, realist reviews, mapping reviews and living systematic reviews (continually updated as new evidence appears).",
      "When citing a review as evidence, describe it accurately: “a systematic review of 16 trials found…” tells readers far more than “research shows…”."
     ]},
    related:["systematic-reviews","prisma","literature-review","review-protocols"],
    sources:[{t:"JBI Manual for Evidence Synthesis: 10.1.2 Scoping reviews compared to other types of review", url:"https://jbi-global.atlassian.net/wiki/spaces/MANUAL/pages/355862573/10.1.2+Scoping+reviews+compared+to+other+types+of+review"},{t:"Weill Cornell Medicine Library: Scoping reviews", url:"https://med.cornell.libguides.com/systematicreviews/scopingreviews"},{t:"GRADE Working Group blog: No single definition of rapid review (Hamel et al. definition)", url:"https://usblog.gradeworkinggroup.org/2020/12/no-single-definition-of-rapid-review.html"}],
    checked:"2026-11"},

   {id:"systematic-reviews", title:"Systematic reviews and meta-analysis", aka:["systematic literature review","SR","evidence synthesis"], tags:["research","reviews","evidence"],
    summary:"Reviews that use pre-planned, explicit, reproducible methods to find, appraise and synthesise all eligible studies on a focused question; meta-analysis may pool their results.",
    levels:{
     starter:[
      "A systematic review tries to find **all** the studies that answer a specific question, using rules written down before starting. Then it checks how trustworthy each study is and combines what they found.",
      "Imagine a fair taste test. You decide the rules first (which dishes count, who tastes, how scores are recorded), then apply them to every dish. Nobody can quietly drop the dishes they dislike.",
      "Sometimes the numbers from several studies can be combined into one overall result. That statistical step is a **meta-analysis**. It’s optional: if studies are too different, they are compared in words and tables instead.",
      "Systematic reviews began in health care and are now used in education, social policy, environmental management and many other fields."
     ],
     builder:[
      "The Cochrane Handbook lists the key characteristics of a systematic review:",
      {ol:["a clearly stated set of objectives with pre-defined eligibility criteria;","an explicit, reproducible methodology;","a systematic search that attempts to identify all studies meeting the criteria;","an assessment of the validity of the included studies’ findings (for example, risk of bias);","a systematic presentation and synthesis of the included studies."]},
      "Typical steps: protocol and registration (see {{review-protocols}}) → searches of several databases and other sources → removal of duplicates → title and abstract screening → full-text screening with recorded reasons → data extraction → risk-of-bias appraisal → synthesis → reporting with PRISMA (see {{prisma}}).",
      "Two people usually screen and extract independently, resolving disagreements by discussion. Producers include Cochrane (health), the Campbell Collaboration (for example, education, social welfare, crime and justice) and the Collaboration for Environmental Evidence.",
      "A [[meta-analysis]] combines results statistically, giving more weight to larger, more precise studies, and shows them in a [[forest-plot|forest plot]]. Cochrane’s guidance warns that pooling studies that are too different can produce a meaningless result.",
      "Reading one critically: check the question and criteria, the search date, whether risk of bias was assessed and how it affected the conclusions, and whether the authors explain how confident they are in each finding.",
      "You can search for existing systematic reviews in the Cochrane Library (health), the Campbell Collaboration’s library (social sciences), PubMed with a systematic review filter, or any database by adding “systematic review” to your search."
     ],
     pro:[
      "Quality hinges on things readers can check: was the protocol registered before the search? Were searches comprehensive (several databases, [[grey-literature-term|grey literature]], registers, citation chasing) and reported in full? Were criteria applied by two people independently? Was risk of bias assessed with a recognised tool (for example RoB 2 for randomised trials, or JBI or CASP checklists for other designs)?",
      "Meta-analysis adds its own issues. **Heterogeneity** (how much results vary beyond chance) affects whether pooling is sensible and which model is used. **[[publication-bias|Publication bias]]** (positive results being likelier to be published) can inflate pooled effects; reviewers search registers and grey literature partly to counter it. A meta-analysis is only as good as the studies in it.",
      "When pooling isn’t appropriate, synthesis is done in structured text and tables; the SWiM (Synthesis Without Meta-analysis) reporting guideline describes how to report it transparently.",
      "Systematic reviews can also synthesise qualitative research (qualitative evidence synthesis) or combine qualitative and quantitative evidence (mixed-methods reviews; JBI has chapters on both).",
      "Reviews age: check the search date and whether an update exists. Some topics now have living systematic reviews that are updated as evidence appears.",
      "Many health reviews also rate the overall certainty of evidence for each outcome, commonly with the GRADE approach (high, moderate, low or very low certainty). A review can be well conducted and still conclude that the evidence is weak."
     ]},
    related:["review-types","prisma","review-protocols","synthesis-matrix"],
    sources:[{t:"NUS Libraries: Systematic reviews introduction (quoting Cochrane Handbook v6.5, Chapter 1)", url:"https://libguides.nus.edu.sg/sysreviews/introduction"},{t:"Cochrane: Introduction to meta-analysis", url:"https://www.cochrane.org/sites/default/files/Introduction%20to%20meta-analysis.pdf"},{t:"Cochrane Handbook for Systematic Reviews of Interventions, version 6.3 (archive)", url:"https://www.cochrane.org/authors/handbooks-and-manuals/handbook/archive/v6.3"}],
    checked:"2026-11"},

   {id:"prisma", title:"PRISMA and the flow diagram", aka:["PRISMA 2020","PRISMA statement","PRISMA-ScR"], tags:["research","reviews","reporting"],
    summary:"PRISMA 2020 is a reporting guideline for systematic reviews: a 27-item checklist and a flow diagram showing how records were found, screened and included.",
    levels:{
     starter:[
      "PRISMA stands for Preferred Reporting Items for Systematic reviews and Meta-Analyses. It is a checklist of what a systematic review should **tell readers**, so they can judge it.",
      "Its best-known part is the flow diagram: boxes and arrows showing how many records the searches found, how many were removed and why, and how many studies were finally included.",
      "Think of a receipt for the review: it shows what came in, what was set aside and what remained, and the numbers must add up.",
      "PRISMA is about reporting. It doesn’t tell you how to run a review step by step, and following it doesn’t automatically make a review good.",
      "You’ll find the flow diagram near the start of the results section of most systematic reviews."
     ],
     builder:[
      "PRISMA 2020 (Page and colleagues, published 2021) replaced the 2009 statement. It includes a 27-item checklist, a checklist for abstracts and revised flow diagrams for new and updated reviews.",
      "The flow diagram for a new review has three stages:",
      {list:[
        "**Identification:** records found in databases and registers; records removed before screening (duplicates, records marked ineligible by automation tools, other reasons).",
        "**Screening:** records screened and excluded; reports sought for retrieval and those not retrieved; reports assessed for eligibility and those excluded, with reasons.",
        "**Included:** studies included in the review, and reports of included studies."
      ]},
      {ex:"Databases 1,186 + registers 54 = 1,240 records\n− 312 duplicates = 928 screened\n− 841 excluded = 87 reports sought\n− 5 not retrieved = 82 assessed\n− 63 excluded = 19 reports, of 16 studies", label:"Worked example: checking the arithmetic (invented numbers)"},
      "A version of the diagram adds a second column for records found by other methods, such as websites, organisations or citation searching.",
      "The 27 checklist items run through the whole report: title, abstract, rationale and objectives, eligibility criteria, information sources and search strategy, selection and data collection processes, risk-of-bias methods, synthesis methods, results of each step, certainty of evidence, discussion, registration and protocol, funding and competing interests. Journals often ask authors to submit a completed checklist with the manuscript.",
      "Templates for the diagram and checklist are free to download from the PRISMA website, and translations exist in many languages."
     ],
     pro:[
      "PRISMA 2020 distinguishes **records** (titles and abstracts from searches), **reports** (documents such as articles or theses) and **studies** (the investigations themselves). One study may have several reports, so the final box gives both counts. Mixing these up is a common reporting error.",
      "Extensions cover other designs, including PRISMA-ScR for scoping reviews (Tricco and colleagues, 2018: 20 essential items and 2 optional ones), PRISMA-S for reporting literature searches and PRISMA-P for protocols. Check the official PRISMA website for the current list and templates.",
      "Because PRISMA is a reporting guideline, a fully “PRISMA-compliant” review can still have weak methods. Methodological quality is judged with other tools, for example AMSTAR 2 for systematic reviews of healthcare interventions.",
      "When reading a flow diagram, check that the numbers add up, that full-text exclusion reasons are specific, and whether the largest losses happen at a stage that suggests very broad searches (normal) or overly narrow criteria (worth questioning).",
      "Updated reviews use a different template that shows studies carried over from the previous version alongside new records. Living reviews may update the diagram many times.",
      "A good habit when you read any systematic review: find the flow diagram first. In under a minute it tells you how wide the search was, how strict the criteria were and how much evidence the conclusions rest on."
     ]},
    related:["systematic-reviews","review-types","review-protocols"],
    sources:[{t:"Page et al. (2021) The PRISMA 2020 statement (White Rose Research Online record)", url:"https://eprints.whiterose.ac.uk/173287/"},{t:"PRISMA: PRISMA for Scoping Reviews (PRISMA-ScR)", url:"https://www.prisma-statement.org/scoping"}],
    checked:"2026-11"},

   {id:"review-protocols", title:"Review protocols and registration", aka:["PROSPERO","OSF Registries","registering a review"], tags:["research","reviews","integrity"],
    summary:"A protocol sets out a review’s question and methods before it starts; registering it publicly (for example on PROSPERO or OSF Registries) makes changes visible and reduces duplication.",
    levels:{
     starter:[
      "A protocol is the written plan for a review, made before searching: the question, which studies count, where to search and how results will be combined.",
      "Registering means putting that plan on a public website with a date on it. Later, anyone can compare the plan with the finished review and see what changed.",
      "It’s like posting your recipe before you cook, so nobody can say you changed it to match how the dish turned out. It also tells other researchers that someone is already working on that question.",
      "Registration is free on the best-known registers. For small or student reviews, a dated written protocol you keep yourself already brings much of the benefit.",
      "Registers are searchable by anyone, so they are also a good place to check whether a review on your question is already planned."
     ],
     builder:[
      "A protocol usually covers: background and question; eligibility criteria; information sources and search strategy; screening process; data to extract; risk-of-bias appraisal; synthesis plan; and any planned subgroup analyses.",
      {table:[
        ["Register","Scope (check current rules)"],
        ["PROSPERO","Systematic reviews with a health-related outcome (human or animal studies). Doesn’t accept scoping reviews. Register before data extraction starts. Free."],
        ["OSF Registries","Any field and any review type, including scoping reviews. Free. Has a general systematic review registration template."]
      ]},
      "PROSPERO is developed and managed by the Centre for Reviews and Dissemination at the University of York and funded by the UK’s National Institute for Health and Care Research (NIHR). Its current version was launched in February 2025, with more automatic processing and checks for similar reviews already registered. PROSPERO’s guidance says Cochrane protocols should not be registered separately, to avoid duplicate records.",
      "Before registering, search the register for similar reviews already planned or under way; if one exists, consider whether your review would add anything, or contact the team. Registration typically asks for the review title, team and contacts, question, searches, criteria, outcomes, risk-of-bias and synthesis plans, and the anticipated dates. The record is time-stamped and, once published, changes are shown as dated versions.",
      "Scoping reviews can be registered on OSF Registries or published as protocols in some journals; JBI also encourages a published or registered protocol for scoping reviews.",
      "If your plans change after registration, update the record or explain the change in the final report; either way, readers can see what happened and why."
     ],
     pro:[
      "Registration protects against selective reporting: if outcomes or methods change after results are known, readers can see it. Deviations are allowed but should be reported and justified in the final review.",
      "Some teams publish protocols in journals that accept them, which adds peer review. Reporting guidance for protocols (PRISMA-P) lists what to include.",
      "Register rules and interfaces change; read the register’s current guidance before submitting. PROSPERO’s published guidance requires a complete protocol and submission before data extraction begins (a rule applied since October 2019).",
      "Outside health, registration is less universal, but it is increasingly expected for systematic and scoping reviews, and OSF’s template was designed to be discipline-agnostic and aligned with PRISMA.",
      "For student reviews, even an unregistered written protocol, dated and saved, improves transparency and makes the methods section easy to write.",
      "Common protocol weaknesses: vague criteria, outcomes not defined, no plan for what to do if studies are too different to pool, and no stated approach to risk of bias. Fixing these before searching saves time later.",
      "Some funders and journals now expect registration for systematic reviews, and editors and peer reviewers may compare the published review with its registered protocol to check for unexplained changes in outcomes or methods."
     ]},
    related:["systematic-reviews","prisma","review-types"],
    sources:[{t:"PROSPERO: Guidance for registering human studies (CRD, University of York)", url:"https://www.crd.york.ac.uk/prospero/documents/Guidance%20for%20registering%20human%20studies.pdf"},{t:"UNC Libraries: Evidence synthesis protocol and registration", url:"https://guides.lib.unc.edu/evidence-synthesis/protocol"},{t:"Center for Open Science: Generalized systematic review template joins OSF Registries", url:"https://www.cos.io/blog/generalized-systematic-review-template-joins-osf-registries"}],
    checked:"2026-11"},

   {id:"synthesis-matrix", title:"Synthesis matrix", aka:["literature matrix","review matrix","matrix method","evidence table"], tags:["research","reviews","notes"],
    summary:"A table with one row per source and one column per question or theme, used to compare sources and find patterns.",
    levels:{
     starter:[
      "A synthesis matrix is a table for comparing sources. Each **row** is one source. Each **column** is a question you’re asking, such as “where was it done?” or “what did it find about cost?”.",
      "It’s like a tasting panel’s score sheet: instead of separate reviews of each dish, you see every dish’s score for sweetness side by side.",
      "Reading **across a row** tells you about one source. Reading **down a column** shows how all your sources answer the same question, and that’s where patterns, disagreements and gaps appear.",
      "Any spreadsheet or a table in a document works, on a computer or a phone.",
      "You don’t need many sources to benefit: even four or five rows can reveal a pattern you hadn’t noticed."
     ],
     builder:[
      "Useful general columns: reference; setting and participants; design and methods; key findings; limitations. Then add a column for each theme or sub-question in your review.",
      {list:[
        "Keep cells short, in your own words.",
        "Put quotation marks and a page number on anything copied.",
        "Add columns as new issues appear, then go back and fill them for earlier sources.",
        "Leave cells empty when a source doesn’t address that column; empty columns often reveal gaps.",
        "Colour-code cells that say similar things to spot themes."
      ]},
      "In a systematic review, the matrix becomes a formal **data extraction form**, piloted and applied by two people. In a scoping review, it’s often called a charting table.",
      "A practical workflow:",
      {ol:["Draft 5–8 columns from your question.","Fill rows for two or three sources and adjust the columns.","Fill the rest, adding columns when something new matters.","Read down each column and write one sentence per column: what most sources show, and who differs.","Turn those sentences into section headings and topic sentences."]},
      "Spreadsheets are easiest for sorting and filtering (for example, sorting by design to see whether methods explain differences). A table in a document is easier to read on a small screen. Either is fine.",
      "Save your matrix with the date and keep old versions; it becomes a record of how your thinking developed."
     ],
     pro:[
      "Design columns from your question and your expected sources of variation: population, context, intervention or concept, comparison, outcome and how it was measured, timing, design, sample size, and risk-of-bias or quality notes. These are the variables most likely to explain disagreements.",
      "Separate **what the source reports** from **your judgement**. A “my comments” column prevents your interpretation from being mistaken for the authors’ findings later.",
      "For qualitative studies, columns may hold concepts, themes and illustrative quotations with page numbers; for quantitative studies, [[effect-size|effect sizes]] with their [[confidence-interval|confidence intervals]] and the comparison used.",
      "Keep the matrix linked to your reference manager (a citation key or DOI column) so citations stay accurate. If you use AI to draft cells, verify each against the source, especially numbers, populations and whether a result was statistically meaningful.",
      "Bhattacherjee’s textbook already noted that reviewed articles can be summarised in tables; the matrix is the working version of that idea.",
      "In published reviews, a cleaned-up version of the matrix often appears as a “characteristics of included studies” table, so readers can check the evidence behind each claim.",
      "Teams often pilot their extraction form on two or three studies, compare what each person extracted and clarify columns that people filled in differently, the same idea as piloting screening criteria."
     ]},
    related:["synthesis-writing","research-gap","literature-review"],
    read:[{book:"owg", where:"Section 13.5, “Research Process: Making Notes, Synthesizing Information, and Keeping a Research Log”"}],
    sources:[{t:"OpenStax Writing Guide 13.5: Making Notes, Synthesizing Information, and Keeping a Research Log", url:"https://openstax.org/books/writing-guide/pages/13-5-research-process-making-notes-synthesizing-information-and-keeping-a-research-log"},{t:"Bhattacherjee, Social Science Research, Chapter 3 (Lumen Learning copy)", url:"https://courses.lumenlearning.com/suny-hccc-research-methods/chapter/chapter-3-the-research-process/"}],
    checked:"2026-11"},

   {id:"research-gap", title:"Research gaps", aka:["gap in the literature","knowledge gap"], tags:["research","reviews","questions"],
    summary:"Something important that existing research hasn’t answered, or hasn’t answered well, often found by reading down a synthesis matrix.",
    levels:{
     starter:[
      "A research gap is a question that matters but hasn’t been answered well yet. Finding one is how many new research projects begin.",
      "Like a jigsaw with missing pieces: you only notice the holes once you have laid out the pieces you have. A literature review lays out the pieces.",
      "Gaps can be a topic no one has studied, a group or place that was left out, a weakness all the studies share, or results that conflict with no explanation.",
      "Be careful: “I didn’t find any studies” only covers where you searched. And an empty spot is only a worthwhile gap if filling it would matter to someone.",
      "Gaps are usually written in the conclusion of a review, and they lead straight to new research questions."
     ],
     builder:[
      {table:[
        ["Kind","What it looks like"],
        ["Knowledge gap","Little or no research on the question"],
        ["Population or context gap","Studied for some groups or places, not others"],
        ["Methodological gap","Studies share a design or measure with a weakness"],
        ["Conflicting findings","Results disagree, without an explanation"],
        ["Theoretical gap","Findings lack an explanation, or a theory is untested"],
        ["Practice gap","Practice differs from what evidence supports"]
      ]},
      "Where to look: empty or thin columns in your matrix; authors’ limitations and “future research” sections; conclusions of earlier reviews; and disagreements you can’t explain.",
      "State gaps precisely and within your search: “Of the 14 studies I found in three databases, none followed participants beyond six months.”",
      "Then check the gap is real and worth filling:",
      {list:["Search again with different words and in another tool; gaps sometimes disappear.","Check registers and recent preprints for studies under way.","Ask who would use the answer: practitioners, policy-makers, communities, other researchers.","Check that a study to fill it is feasible and ethical."]},
      "A useful gap statement names what is missing, for whom, and why it matters, in one or two sentences.",
      {ex:"“Of the 14 studies I found, all took place in large cities, and none measured temperatures at night. Because people in smaller towns and night-time heat both matter for health, a study of night-time street temperatures in small towns would address both gaps.”", label:"Worked example: a gap statement (invented review)"}
     ],
     pro:[
      "Gap taxonomies vary. One often-shared list (Miles, 2017, a doctoral workshop paper) names seven: evidence, knowledge, practical-knowledge conflict, methodological, empirical, theoretical and population gaps. Its labels differ from this unit’s: Miles uses “evidence gap” for findings that contradict each other or accepted conclusions, and “knowledge gap” for missing knowledge. Names matter less than precise description.",
      "A gap is a claim, so it needs evidence: a transparent search, enough coverage (several databases, grey literature, other languages where relevant) and honest wording. Absence of evidence is not evidence of absence: an unstudied effect isn’t thereby shown to be zero.",
      "Strong gap statements also explain consequences: why the missing knowledge matters for theory, practice or policy, and why existing evidence can’t simply be extrapolated.",
      "Beware “gap-spotting” for its own sake. Some scholars argue that the most valuable research questions challenge assumptions in the literature rather than filling small holes in it. Reviews can do both: show what’s missing and question what everyone has taken for granted.",
      "Turning a gap into a research question is covered in the research questions unit of this track.",
      "Gaps also exist in the voices represented: research may come mostly from a few countries or languages, or rarely include the people most affected. Naming these gaps accurately, without overstating, is part of a fair review.",
      "Finally, gaps can be in reviews themselves: perhaps the primary studies exist but nobody has synthesised them, or the last review is out of date. That is a legitimate reason to write a new review."
     ]},
    related:["synthesis-matrix","literature-review","synthesis-writing"],
    sources:[{t:"University of Manchester Lantern: Types of research gaps (citing Miles, 2017)", url:"https://lantern.humanities.manchester.ac.uk/?p=11666"},{t:"University of Montana Writing Center: Literature reviews defined", url:"https://www.umt.edu/writing-center/writing-resources/writing-resources-files/literature-reviews-defined.pdf"}],
    checked:"2026-11"},

   {id:"synthesis-writing", title:"Writing synthesis", aka:["synthesising sources","synthesis vs summary"], tags:["research","writing","reviews"],
    summary:"Writing that combines several sources to make claims none of them makes alone: organised by idea, with sources as evidence.",
    levels:{
     starter:[
      "Summary says what one source says. Synthesis says what several sources show **together**: where they agree, why they differ, what they leave out.",
      "Like a sports commentator who doesn’t just list each player’s moves but explains how the team is playing as a whole.",
      "A quick test: cover the citations in your paragraph. If it still makes a point, it’s synthesis. If it turns into “they did this, then they found that”, it’s summary.",
      {key:"Ideas lead; sources support."},
      "You still need summaries, but short ones, used where a detail helps your point. Most of each paragraph should be about what the sources show together.",
      "Synthesis is a habit you can practise with any group of sources: three news reports of the same event, three product reviews, three studies. Ask what they share, where they differ and why."
     ],
     builder:[
      "A synthesis paragraph usually has four moves: **claim** (a topic sentence about the literature), **evidence** (several sources, often in one citation), **analysis** (compare, explain differences, weigh strength) and **link** (to the review’s question or next section).",
      "Organise the body by **theme** (most common), **time** (around turning points, not just publication order), **method** (when methods give different answers) or **theory** (rival explanations).",
      "Use [[signposting]] to show connections: *similarly, in contrast, this may reflect, little is known about*. Choose reporting verbs that match the source: *found* for results, *argued* for claims, *suggested* for tentative findings. Avoid *proved*.",
      "In APA style, several sources in one parenthesis are listed alphabetically by first author and separated by semicolons.",
      {ex:"Summary: “Ito (2019) found gains. Ruiz (2021) also found gains. Novak (2022) found none.”\n\nSynthesis: “Two rural trials found gains (Ito, 2019; Ruiz, 2021), but a city trial did not (Novak, 2022), possibly because city patients already had good access to clinics.”", label:"Worked example (studies invented)"},
      "The synthesis version is no longer, but it groups the agreeing studies, contrasts the odd one out and offers a reason drawn from the studies.",
      "A synthesis matrix makes this much easier: each paragraph often grows from one matrix column, with the sentence you wrote when reading down that column becoming the topic sentence."
     ],
     pro:[
      "Calibrate language to evidence: a single small study “suggests”; consistent findings from several well-conducted studies “show”. Name study types or sizes when they matter (“two small pilot studies”, “a large trial”), so readers can weigh claims themselves.",
      "Explain disagreement with features you can point to in the studies (measures, populations, timing, definitions, quality), not speculation. If you can’t explain it, say so; that is itself a finding.",
      "Revision tools: reverse-outline each paragraph; count sentences that begin with an author’s name; check that each paragraph cites more than one source unless discussing a pivotal study; check that conclusions follow from the evidence presented.",
      "Integrity applies to synthesis too: paraphrase genuinely, cite every source whose ideas you use, and represent sources accurately even when they complicate your argument. Merging uncited ideas from several authors is still plagiarism.",
      "Balance matters at the level of the whole review too: give space in proportion to the strength and relevance of the evidence, not to how interesting a single study is. A striking but small study shouldn’t dominate a section that several large studies contradict.",
      "Finally, read the review as a whole: does each section end by linking to the next, and does the conclusion follow from what the sections showed? A reader should be able to state the review’s main argument in two or three sentences."
     ]},
    related:["synthesis-matrix","literature-review","research-gap"],
    read:[{book:"owg", where:"Section 12.5, “Writing Process: Integrating Research”"}],
    sources:[{t:"University of Montana Writing Center: Literature reviews defined", url:"https://www.umt.edu/writing-center/writing-resources/writing-resources-files/literature-reviews-defined.pdf"},{t:"OpenStax Writing Guide 13.5: Making Notes, Synthesizing Information, and Keeping a Research Log", url:"https://openstax.org/books/writing-guide/pages/13-5-research-process-making-notes-synthesizing-information-and-keeping-a-research-log"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"literature-review-term", term:"literature review", def:"An organised, evaluative account of the research on a topic: what is known, how strong the evidence is, where studies disagree and what is still missing.", codex:"literature-review"},
   {id:"annotated-bibliography", term:"annotated bibliography", def:"A list of sources, each with its full reference and a short note that summarises it and often evaluates it. Each entry stands alone, unlike a literature review.", codex:"literature-review"},
   {id:"narrative-review", term:"narrative review", def:"A review in which experts select and discuss the literature, usually without a pre-published plan or fully reported search. Good for overviews; its selection can’t easily be checked.", codex:"review-types"},
   {id:"systematic-review", term:"systematic review", def:"A review that uses explicit methods set in advance to find, appraise and synthesise all studies meeting set criteria, to answer a focused question.", codex:"systematic-reviews"},
   {id:"scoping-review", term:"scoping review", def:"A review that systematically maps the breadth of research on a topic (what exists, how concepts are defined, where the gaps are) rather than testing whether something works.", codex:"review-types"},
   {id:"rapid-review", term:"rapid review", def:"A systematic-style review that speeds things up by streamlining or leaving out some methods, for urgent decisions. Its shortcuts should be reported.", codex:"review-types"},
   {id:"umbrella-review", term:"umbrella review", def:"A review of existing systematic reviews, also called an overview of reviews.", codex:"review-types"},
   {id:"meta-analysis", term:"meta-analysis", def:"A statistical method that combines the numerical results of two or more studies into an overall estimate, usually as one step within a systematic review.", codex:"systematic-reviews"},
   {id:"forest-plot", term:"forest plot", def:"A chart showing each study’s result as a line (its estimate and confidence interval) and the combined meta-analysis result, usually as a diamond.", codex:"systematic-reviews"},
   {id:"risk-of-bias", term:"risk of bias", def:"How likely it is that flaws in a study’s design or conduct have pushed its results away from the truth. Systematic reviews assess it for each included study.", codex:"systematic-reviews"},
   {id:"review-protocol", term:"review protocol", def:"The written plan for a review, made before searching: question, eligibility criteria, search, screening, appraisal and synthesis methods. Often registered publicly.", codex:"review-protocols"},
   {id:"inclusion-criteria", term:"eligibility criteria", def:"The rules, set in advance, for which studies a review includes (inclusion criteria) and leaves out (exclusion criteria), such as population, setting, design or dates.", codex:"systematic-reviews"},
   {id:"prisma-term", term:"PRISMA", def:"Preferred Reporting Items for Systematic reviews and Meta-Analyses: a reporting guideline (PRISMA 2020 has a 27-item checklist and a flow diagram) for what a review report should include.", codex:"prisma"},
   {id:"synthesis-matrix-term", term:"synthesis matrix", def:"A table with one row per source and one column per question or theme, used to compare sources and spot patterns, disagreements and gaps.", codex:"synthesis-matrix"},
   {id:"synthesis", term:"synthesis", def:"Combining several sources to make a point none of them makes alone, such as a shared finding, an explained disagreement or a common gap.", codex:"synthesis-writing"},
   {id:"research-gap-term", term:"research gap", def:"An important question that existing research hasn’t answered, or hasn’t answered well, for example for some groups, with strong methods, or at all.", codex:"research-gap"},
   {id:"signposting", term:"signposting", def:"Words and phrases that show readers how ideas connect and where the text is going, such as “in contrast”, “similarly” or “a second theme concerns”.", codex:"synthesis-writing"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t4u5-q01", lesson:"t4u5-l1", level:1, q:"What is the main difference between an annotated bibliography and a literature review?", options:[
     {t:"A bibliography is organised by source; a review is organised by ideas that draw on several sources", ok:true, why:"Right. Annotations treat sources one at a time; a review connects them."},
     {t:"A bibliography includes evaluation; a review doesn’t", why:"Reviews evaluate evidence too, across sources. Many annotations also evaluate."},
     {t:"A review never includes summaries", why:"Reviews summarise briefly, but in service of a point about several sources."},
     {t:"There is no difference; the names are interchangeable", why:"They have different structures and purposes."}]},
   {id:"t4u5-q02", lesson:"t4u5-l1", level:1, q:"Which of these is NOT usually a job of a literature review?", options:[
     {t:"Collecting new data from participants", ok:true, why:"Correct: a review works with existing research. Collecting new data is the job of a primary study."},
     {t:"Identifying gaps in what is known", why:"Finding gaps is a core purpose of a review."},
     {t:"Showing where findings conflict", why:"Explaining debates is one of a review’s most useful jobs."},
     {t:"Positioning a new study against earlier work", why:"Reviews set up new research by showing how it fits."}]},
   {id:"t4u5-q03", lesson:"t4u5-l1", level:2, q:"Oluwaseun’s review includes only studies from the last two years. A classic study from 15 years ago shaped the whole field. What should he do?", options:[
     {t:"Include the classic study where it helps explain how ideas developed, alongside the recent work", ok:true, why:"Yes. Recent work matters, but foundational studies often belong, especially to explain where ideas came from."},
     {t:"Leave it out: only recent studies count", why:"“Newest is best” is a misconception; relevance and influence matter too."},
     {t:"Replace all recent studies with older ones", why:"Overcorrecting loses current evidence. Both have a place."},
     {t:"Mention it only in the reference list without discussing it", why:"Every reference should be used in the text; listing unused sources misleads readers."}]},
   {id:"t4u5-q04", lesson:"t4u5-l1", level:2, q:"Which sentence would most likely appear in the conclusion of a literature review?", options:[
     {t:"“Evidence for short-term benefits is consistent, but no study has followed participants beyond a year.”", ok:true, why:"States what is established and what is missing: exactly a review conclusion’s job."},
     {t:"“Garcia (2018) surveyed 200 nurses in Manila.”", why:"A detail about one study, which belongs (briefly) in the body if anywhere."},
     {t:"“This review searched three databases from 2010 to 2024.”", why:"That describes method, which belongs in the introduction or methods."},
     {t:"“Heat is an increasing problem in many cities.”", why:"A broad opening statement, typical of an introduction."}]},
   {id:"t4u5-q05", lesson:"t4u5-l1", level:3, q:"Mei asks an AI chatbot for a literature review on community gardens and wellbeing. It returns a fluent text with eight references. What should she do before using any of it?", options:[
     {t:"Find and read each referenced source herself, checking it exists and says what the text claims", ok:true, why:"Right. AI tools can invent references or misstate findings; only sources she has checked can be cited."},
     {t:"Use it as is, because the references look correctly formatted", why:"Correct formatting doesn’t prove a reference exists or is described accurately."},
     {t:"Remove the references and keep the text", why:"Then she would present uncited claims, which is both unsupported and possibly plagiarism."},
     {t:"Ask the chatbot whether its references are real", why:"The same tool can confidently confirm false information; checking the sources directly is the only reliable test."}]},
   {id:"t4u5-q06", lesson:"t4u5-l1", level:3, q:"A policy officer writing a review on youth employment schemes leaves out three studies that found no effect, “to keep the message clear”. What is the main problem?", options:[
     {t:"The review becomes biased: readers will think the evidence is more favourable than it is", ok:true, why:"Yes. Omitting conflicting studies distorts the state of knowledge, which a review exists to show."},
     {t:"The review will be too short", why:"Length isn’t the issue; accuracy is."},
     {t:"Studies with no effect are always low quality", why:"No-effect studies can be well designed; quality must be judged on design and conduct."},
     {t:"Policy reviews aren’t allowed to cite studies", why:"Policy reviews rely on studies; the problem is selective citation."}]},
   {id:"t4u5-q07", lesson:"t4u5-l1", level:1, q:"In “literature review”, what does “literature” mean?", options:[
     {t:"The body of written work on a topic, such as articles, books, reports and theses", ok:true, why:"Right. It means the research and scholarship on the topic."},
     {t:"Novels, poems and plays", why:"That’s literature in the artistic sense; here it means the research literature."},
     {t:"Only peer-reviewed journal articles", why:"Reviews often include books, reports, theses and grey literature too."},
     {t:"Only sources older than ten years", why:"Age has nothing to do with it."}]},
   {id:"t4u5-q08", lesson:"t4u5-l1", level:2, q:"Kenji’s draft review has paragraphs titled “Study 1”, “Study 2” and so on. What is the best first fix?", options:[
     {t:"Regroup the material under themes, so each section discusses several studies around one idea", ok:true, why:"Yes. Organising by idea is what turns a list into a review."},
     {t:"Add more studies, “Study 13” to “Study 20”", why:"More of the same makes a longer list, not a review."},
     {t:"Rename the headings with the authors’ names", why:"Still organised by source."},
     {t:"Shorten each summary", why:"Shorter summaries are still summaries; the structure is the problem."}]},
   {id:"t4u5-q09", lesson:"t4u5-l1", level:2, q:"Why does a literature review usually come before a new study is designed?", options:[
     {t:"It shows what is already known, so the study can fill a real gap and learn from earlier methods", ok:true, why:"Right. It prevents needless repetition and justifies the question and design."},
     {t:"Funders require exactly 50 references", why:"There is no such universal rule."},
     {t:"It replaces the need to collect data", why:"A review informs a new study; it doesn’t replace it (unless the review itself is the project)."},
     {t:"It guarantees the study will find significant results", why:"Nothing guarantees results; a review only makes the study better informed."}]},
   /* Lesson 2 */
   {id:"t4u5-q10", lesson:"t4u5-l2", level:1, q:"Which best defines a meta-analysis?", options:[
     {t:"A statistical method that combines the numerical results of several studies into an overall estimate", ok:true, why:"Correct. It is a technique, usually used inside a systematic review."},
     {t:"Any review that includes more than ten studies", why:"Number of studies doesn’t define it; statistical pooling does."},
     {t:"A review of other reviews", why:"That’s an umbrella review (or overview of reviews)."},
     {t:"An expert’s overview of a field", why:"That’s a narrative review."}]},
   {id:"t4u5-q11", lesson:"t4u5-l2", level:1, q:"Which feature is essential to a systematic review?", options:[
     {t:"Eligibility criteria and methods set out in advance", ok:true, why:"Pre-specified, explicit, reproducible methods are the defining feature."},
     {t:"A meta-analysis", why:"Meta-analysis is optional; many systematic reviews synthesise in words and tables."},
     {t:"Including only randomised trials", why:"Systematic reviews can include many designs, including qualitative studies."},
     {t:"Being written by a single expert", why:"Systematic reviews are usually team efforts, with independent screening."}]},
   {id:"t4u5-q12", lesson:"t4u5-l2", level:2, q:"Ana wants to know what research exists on how small museums use social media, and how “engagement” has been defined. Which kind of review fits?", options:[
     {t:"A scoping review", ok:true, why:"Mapping what exists and clarifying definitions are classic scoping aims."},
     {t:"A meta-analysis", why:"There’s no single numerical effect to pool; the question is about the shape of the field."},
     {t:"An umbrella review", why:"That needs several existing systematic reviews to combine, which is unlikely here."},
     {t:"A rapid review", why:"Nothing suggests urgency, and the question is about mapping, not a focused effect."}]},
   {id:"t4u5-q13", lesson:"t4u5-l2", level:2, q:"Why might a systematic review decide not to do a meta-analysis?", options:[
     {t:"The studies differ too much in participants, interventions or outcome measures for an average to be meaningful", ok:true, why:"Right. Pooling very different studies can produce a misleading result."},
     {t:"Meta-analysis is only allowed in medicine", why:"Meta-analysis is used in education, psychology, ecology and many other fields."},
     {t:"The review found too many studies", why:"Many studies is no barrier; similarity is what matters."},
     {t:"Systematic reviews are never allowed to use statistics", why:"Many systematic reviews include meta-analyses."}]},
   {id:"t4u5-q14", lesson:"t4u5-l2", level:3, q:"During a fast-moving outbreak, a health agency wants evidence on a treatment within two weeks. Which approach and caution fit best?", options:[
     {t:"A rapid review that reports its shortcuts, such as fewer databases or single screening", ok:true, why:"Rapid reviews streamline methods for urgent decisions, and transparency about the shortcuts keeps them trustworthy."},
     {t:"A full systematic review with every step, even if it takes a year", why:"Too slow for the decision; rapid methods exist for this situation."},
     {t:"A narrative review by whoever is available, without describing the search", why:"An unreported, unplanned selection is weak evidence for a treatment decision."},
     {t:"An umbrella review, because outbreaks always have many reviews", why:"New outbreaks often have few or no existing reviews to combine."}]},
   {id:"t4u5-q15", lesson:"t4u5-l2", level:1, q:"What does PCC stand for in scoping reviews?", options:[
     {t:"Population, Concept, Context", ok:true, why:"JBI recommends PCC for framing scoping review questions."},
     {t:"Problem, Cause, Cure", why:"Not a review framework."},
     {t:"Population, Comparison, Cost", why:"PICO uses comparison; PCC doesn’t include cost."},
     {t:"Protocol, Criteria, Checklist", why:"These are review elements, but not what PCC stands for."}]},
   {id:"t4u5-q16", lesson:"t4u5-l2", level:3, q:"Sione reads a paper titled “A systematic review of mindfulness apps”. Its methods section says the authors chose studies they found useful, with no stated criteria or search details. What should he conclude?", options:[
     {t:"It’s really a narrative review, whatever the title says, so its conclusions rest on an unchecked selection", ok:true, why:"Yes. The methods, not the title, define the review type."},
     {t:"It’s a systematic review because the title says so", why:"Titles are sometimes used loosely; the methods don’t meet the standard."},
     {t:"It must include a meta-analysis", why:"Nothing indicates statistical pooling, and that isn’t what’s missing."},
     {t:"It’s a scoping review", why:"Scoping reviews also need a stated search and criteria."}]},
   {id:"t4u5-q17", lesson:"t4u5-l2", level:2, q:"An umbrella review combines six systematic reviews. Two of those reviews included the same large trial. What is the risk?", options:[
     {t:"The trial could be counted twice, giving it too much influence", ok:true, why:"Right. Overlap between reviews is a known issue for umbrella reviews."},
     {t:"There is no risk; more reviews always mean better evidence", why:"Overlapping reviews can repeat the same evidence rather than add new evidence."},
     {t:"The trial must be removed from both reviews", why:"It should be counted once, not removed."},
     {t:"Umbrella reviews can’t include large trials", why:"They include reviews, which can include any trials."}]},
   {id:"t4u5-q18", lesson:"t4u5-l2", level:2, q:"What is publication bias?", options:[
     {t:"Studies with positive or striking results are more likely to be published, so published evidence can overstate effects", ok:true, why:"Correct, and it can make meta-analyses of published studies too optimistic."},
     {t:"Journals preferring authors from certain countries", why:"That may be another kind of bias, but it isn’t what publication bias means."},
     {t:"Reviewers citing their own publications", why:"That’s self-citation."},
     {t:"Older studies being harder to find online", why:"A search problem, not publication bias."}]},
   /* Lesson 3 */
   {id:"t4u5-q19", lesson:"t4u5-l3", level:1, q:"What is the main purpose of writing a review protocol before searching?", options:[
     {t:"To fix the question and methods in advance, so the results can’t steer the review", ok:true, why:"Right. It reduces bias and shows others the review is under way."},
     {t:"To make the review longer", why:"Length isn’t the aim."},
     {t:"To decide in advance what the conclusion will be", why:"The opposite: methods are fixed, conclusions are left to the evidence."},
     {t:"To avoid having to report the methods later", why:"The final review still reports methods, and any changes to the protocol."}]},
   {id:"t4u5-q20", lesson:"t4u5-l3", level:1, q:"In PRISMA 2020, what is a “record”?", options:[
     {t:"A title and abstract found by a search", ok:true, why:"Correct. Records are what searches return; duplicates are counted as separate records until removed."},
     {t:"An included study", why:"Studies are the investigations themselves."},
     {t:"A full-text article", why:"That’s a report."},
     {t:"A review protocol", why:"Protocols are plans, not search results."}]},
   {id:"t4u5-q21", lesson:"t4u5-l3", level:2, q:"Searches find 900 records in databases and 100 in registers. 250 duplicates are removed. How many records are screened?", options:[
     {t:"750", ok:true, why:"900 + 100 = 1,000; 1,000 − 250 = 750."},
     {t:"650", why:"That’s 900 − 250, leaving out the 100 register records."},
     {t:"1,000", why:"That’s before duplicates are removed."},
     {t:"1,250", why:"Duplicates are subtracted, not added."}]},
   {id:"t4u5-q22", lesson:"t4u5-l3", level:2, q:"Where must reasons for exclusion be given in a PRISMA flow diagram?", options:[
     {t:"For reports excluded after full-text assessment", ok:true, why:"Correct. At full text, each exclusion has a recorded reason, summarised in the diagram."},
     {t:"For every record excluded at title and abstract stage", why:"PRISMA asks for the number excluded at screening, not a reason for each one."},
     {t:"Only for duplicates", why:"Duplicates are counted; no reason is needed beyond being duplicates."},
     {t:"Nowhere; reasons are optional", why:"Full-text exclusion reasons are an expected part of the diagram."}]},
   {id:"t4u5-q23", lesson:"t4u5-l3", level:3, q:"Fatima plans a systematic review of school-based physical activity and children’s concentration. Her criteria include “studies of good quality”. What is the problem?", options:[
     {t:"It’s too vague for two screeners to apply consistently; quality should be appraised later with a stated tool", ok:true, why:"Yes. Eligibility criteria should be specific, and quality is assessed separately during appraisal."},
     {t:"Quality should never be considered in a review", why:"Quality matters a lot, but it’s assessed with a tool, not hidden in a vague criterion."},
     {t:"She should include only studies she agrees with", why:"That would bias the review."},
     {t:"Criteria are only needed for meta-analyses", why:"All systematic reviews need explicit eligibility criteria."}]},
   {id:"t4u5-q24", lesson:"t4u5-l3", level:2, q:"Which register would accept a systematic review protocol on teaching methods in secondary-school history, with no health outcome?", options:[
     {t:"OSF Registries", ok:true, why:"OSF accepts reviews in any field. PROSPERO requires an outcome relevant to health."},
     {t:"PROSPERO", why:"PROSPERO only accepts systematic reviews with a health-related outcome."},
     {t:"PRISMA", why:"PRISMA is a reporting guideline, not a register."},
     {t:"No register accepts non-health reviews", why:"OSF Registries does."}]},
   {id:"t4u5-q25", lesson:"t4u5-l3", level:1, q:"What is PRISMA 2020?", options:[
     {t:"A reporting guideline with a 27-item checklist and flow diagram", ok:true, why:"Correct. It sets out what a systematic review report should include."},
     {t:"A database of systematic reviews", why:"PRISMA is not a database."},
     {t:"A statistical software package", why:"It’s a reporting guideline."},
     {t:"A score that rates review quality", why:"PRISMA covers reporting; quality is judged with other tools."}]},
   {id:"t4u5-q26", lesson:"t4u5-l3", level:3, q:"Halfway through a review, Lucía realises one exclusion criterion was a mistake and changes it. What should she do?", options:[
     {t:"Apply the new criterion consistently, and report the change and the reason in the final review", ok:true, why:"Right. Protocols can change; transparency about deviations is what matters."},
     {t:"Hide the change so the review looks consistent with the protocol", why:"Hidden deviations undermine the whole point of a protocol."},
     {t:"Apply the new criterion only to studies screened from now on", why:"Inconsistent screening makes the results unreliable; re-check earlier decisions."},
     {t:"Abandon the review", why:"Reported, justified changes are acceptable."}]},
   {id:"t4u5-q27", lesson:"t4u5-l3", level:2, q:"Why do systematic reviews usually have two people screen records independently?", options:[
     {t:"To reduce errors and individual bias in deciding what is included", ok:true, why:"Independent screening catches mistakes and inconsistent judgements."},
     {t:"Because one person isn’t allowed to read abstracts", why:"No such rule; the goal is reliability."},
     {t:"To make the review take twice as long", why:"Time is a cost, not the purpose."},
     {t:"So that each person can include their favourite studies", why:"The opposite: it limits personal preference."}]},
   /* Lesson 4 */
   {id:"t4u5-q28", lesson:"t4u5-l4", level:1, q:"In a synthesis matrix, what does each row usually represent?", options:[
     {t:"One source", ok:true, why:"Rows are sources; columns are questions or themes."},
     {t:"One theme", why:"Themes are usually columns."},
     {t:"One paragraph of the final review", why:"The matrix is a working tool, not the text."},
     {t:"One search database", why:"Search sources go in a search log."}]},
   {id:"t4u5-q29", lesson:"t4u5-l4", level:2, q:"Reading down the “sample” column of his matrix, Dmitri sees that all ten studies used university students. What has he found?", options:[
     {t:"A population gap: little is known about other groups", ok:true, why:"Yes. The question was studied, but only for one group."},
     {t:"A theme showing the topic only matters to students", why:"The evidence covers students only; that doesn’t mean others are unaffected."},
     {t:"Proof that the results apply to everyone", why:"Results from one group can’t simply be generalised."},
     {t:"A methodological error in his matrix", why:"The matrix is working; it has revealed a pattern in the studies."}]},
   {id:"t4u5-q30", lesson:"t4u5-l4", level:1, q:"Which of these is a theme rather than a topic label?", options:[
     {t:"“Programmes run by trained staff report larger effects than volunteer-run ones”", ok:true, why:"It states a pattern across sources that can be supported or challenged."},
     {t:"“Staff”", why:"A label, with no claim."},
     {t:"“Effects”", why:"A label, with no claim."},
     {t:"“Programmes”", why:"A label, with no claim."}]},
   {id:"t4u5-q31", lesson:"t4u5-l4", level:3, q:"Two studies of a reading app disagree. One, in Nairobi, found gains; one, in Lima, didn’t. The matrix shows the Lima study gave the app only in English to Spanish-speaking children. What is the best interpretation?", options:[
     {t:"The language mismatch may explain the difference; the review should say so and flag it as something to test", ok:true, why:"Right. It’s a plausible, evidence-based reason, stated cautiously."},
     {t:"The app works in Africa but not in South America", why:"A sweeping regional claim; the matrix points to language, not continent."},
     {t:"The Lima study is wrong and should be dropped", why:"Disagreement isn’t error; explaining it is more useful."},
     {t:"The results cancel out, so the app has no effect", why:"Conflicting studies don’t simply cancel; the conditions differ."}]},
   {id:"t4u5-q32", lesson:"t4u5-l4", level:2, q:"Which gap statement is worded most carefully?", options:[
     {t:"“In the three databases I searched, I found no studies of this programme in rural schools.”", ok:true, why:"Specific and limited to what was searched."},
     {t:"“No one has ever studied this programme in rural schools.”", why:"An absolute claim no single search can support."},
     {t:"“The programme doesn’t work in rural schools, as no studies exist.”", why:"Absence of evidence isn’t evidence of no effect."},
     {t:"“Rural schools are a gap.”", why:"Too vague: a gap in what, exactly?"}]},
   {id:"t4u5-q33", lesson:"t4u5-l4", level:1, q:"Why should copied wording in a matrix cell be marked with quotation marks and a page number?", options:[
     {t:"So you don’t later reuse the authors’ words as your own by mistake, and can cite them correctly", ok:true, why:"Right. It protects against accidental plagiarism and makes quoting accurate."},
     {t:"Because matrices must only contain quotations", why:"Cells should mostly be your own brief notes."},
     {t:"To make the matrix look more academic", why:"Appearance isn’t the reason."},
     {t:"Page numbers are only needed for books", why:"Page or location numbers are needed for quotations from any source."}]},
   {id:"t4u5-q34", lesson:"t4u5-l4", level:3, q:"Priya uses an AI tool to fill matrix cells from PDFs she has uploaded. One cell says a study found a “large, significant” effect. What should she do?", options:[
     {t:"Check the paper’s results section to confirm the size and significance before relying on the note", ok:true, why:"Yes. AI summaries can misstate numbers and significance; the paper is the authority."},
     {t:"Trust it, since the tool read the PDF", why:"Tools can misread or overstate; verification is needed."},
     {t:"Delete the study from the matrix", why:"No reason to drop it; just verify the note."},
     {t:"Copy the AI’s sentence straight into her review", why:"Unverified and not her own words; both are problems."}]},
   {id:"t4u5-q35", lesson:"t4u5-l4", level:2, q:"Every study in a matrix measured outcomes only by asking people to rate themselves. What kind of gap is this?", options:[
     {t:"Methodological gap", ok:true, why:"All studies share a method with a known weakness (self-report)."},
     {t:"Population gap", why:"That would concern who was studied, not how."},
     {t:"Practice gap", why:"That would concern what practitioners do versus the evidence."},
     {t:"No gap: self-report is always fine", why:"Self-report has known limits; relying on it alone is a weakness worth noting."}]},
   {id:"t4u5-q36", lesson:"t4u5-l4", level:2, q:"Halfway through filling her matrix, Hana notices that some studies report results separately for night and day. What should she do?", options:[
     {t:"Add a “day vs night” column and go back to check the earlier studies for it", ok:true, why:"Right. Matrices grow as you read; going back keeps comparisons complete."},
     {t:"Ignore it, because the matrix columns were already decided", why:"Columns should change when new important issues appear."},
     {t:"Start a separate matrix for night-time studies only", why:"That splits the comparison; one extra column keeps everything together."},
     {t:"Drop the studies that don’t report night-time results", why:"Missing information is itself useful (it may be a gap)."}]},
   /* Lesson 5 */
   {id:"t4u5-q37", lesson:"t4u5-l5", level:1, q:"What is the key difference between summary and synthesis?", options:[
     {t:"Summary reports one source; synthesis combines several sources to make a point none makes alone", ok:true, why:"Right. Synthesis is about relationships between sources."},
     {t:"Summary is short; synthesis is long", why:"Length doesn’t define either."},
     {t:"Synthesis uses no citations", why:"Synthesis usually cites several sources at once."},
     {t:"Summary is always wrong in a review", why:"Brief summaries have a place; they just serve the synthesis."}]},
   {id:"t4u5-q38", lesson:"t4u5-l5", level:1, q:"In the claim–evidence–analysis–link pattern, what does the first sentence of a synthesis paragraph usually do?", options:[
     {t:"States a point about the literature in the writer’s own words", ok:true, why:"The topic sentence makes a claim the rest of the paragraph supports."},
     {t:"Names the author of the first study", why:"Starting with an author usually leads into summary."},
     {t:"Gives a direct quotation", why:"Quotations rarely make good topic sentences in reviews."},
     {t:"Lists the databases searched", why:"Search details belong in the introduction or methods."}]},
   {id:"t4u5-q39", lesson:"t4u5-l5", level:2, q:"A review on online learning has sections: “Before 2010”, “2010–2019”, “Since 2020”. When is this chronological structure most useful?", options:[
     {t:"When something changed between periods, such as new technology or a major event, that shaped the research", ok:true, why:"Yes. A useful chronological review is organised around changes."},
     {t:"Always; it’s the best structure for every review", why:"Thematic structure suits most reviews; chronology fits when change over time matters."},
     {t:"When the writer wants to list studies in publication order", why:"That’s a dated list, not an organised review."},
     {t:"Only when there are exactly three periods", why:"The number of periods is irrelevant."}]},
   {id:"t4u5-q40", lesson:"t4u5-l5", level:2, q:"In APA style, how should three sources be cited together in one parenthesis?", options:[
     {t:"Alphabetically by first author, separated by semicolons: (Lindqvist, 2021; Mendes, 2023; Okafor, 2019)", ok:true, why:"Correct APA 7 practice for multiple works in one parenthetical citation."},
     {t:"By year, newest first: (Mendes, 2023; Lindqvist, 2021; Okafor, 2019)", why:"APA orders multiple works alphabetically, not by date."},
     {t:"Separated by commas only: (Lindqvist 2021, Mendes 2023, Okafor 2019)", why:"APA uses semicolons between works and a comma between author and year."},
     {t:"In separate parentheses after every word", why:"Grouping supporting sources in one citation is clearer."}]},
   {id:"t4u5-q41", lesson:"t4u5-l5", level:3, q:"Tomás writes: “Several studies show that homework clubs raise grades (Ito, 2020).” Only one study is cited. What is wrong?", options:[
     {t:"The claim says “several studies” but cites one; either cite them all or say “one study suggests”", ok:true, why:"Right. The wording must match the evidence actually cited."},
     {t:"Nothing; one citation is enough for any claim", why:"Here the sentence claims more evidence than it shows."},
     {t:"The citation should come at the start of the sentence", why:"Placement is fine; the mismatch is the problem."},
     {t:"He should remove the citation", why:"That leaves an unsupported claim."}]},
   {id:"t4u5-q42", lesson:"t4u5-l5", level:2, q:"Which reporting verb best fits a source that put forward a new theory without testing it?", options:[
     {t:"proposed", ok:true, why:"“Proposed” (or “argued”) fits a claim or theory that wasn’t tested."},
     {t:"found", why:"“Found” suits results from data, which a theory paper doesn’t provide."},
     {t:"proved", why:"Single sources rarely prove anything, and an untested theory certainly doesn’t."},
     {t:"measured", why:"Nothing was measured."}]},
   {id:"t4u5-q43", lesson:"t4u5-l5", level:3, q:"Amara’s draft ends: “In conclusion, many studies have been done on this topic.” How should she strengthen it?", options:[
     {t:"State what is well supported, what is contested and what is missing, and link that to her question", ok:true, why:"Yes. A review conclusion draws the threads together and leads somewhere."},
     {t:"Add a list of all the studies again", why:"Repetition isn’t a conclusion."},
     {t:"End with a new study not mentioned earlier", why:"Conclusions shouldn’t introduce new evidence."},
     {t:"Remove the conclusion; reviews don’t need one", why:"The conclusion is where the review’s argument lands."}]},
   {id:"t4u5-q44", lesson:"t4u5-l5", level:3, q:"Kenji merges ideas from four authors into smooth paragraphs in his own words but adds no citations, saying “it’s synthesis, so the ideas are mine now”. What is the problem?", options:[
     {t:"Using others’ ideas without citing them is plagiarism, even when paraphrased and combined", ok:true, why:"Right. Synthesis adds your analysis; the sources still need credit."},
     {t:"None: synthesised ideas don’t need citations", why:"Combining ideas doesn’t make them yours; citation is still required."},
     {t:"He should copy their exact words instead", why:"Quoting also needs citation; the problem is the missing citations."},
     {t:"He should cite only the first author", why:"Every source whose ideas he uses should be cited."}]},
   {id:"t4u5-q45", lesson:"t4u5-l5", level:2, q:"Which phrase signals that the writer is about to explain why studies disagree?", options:[
     {t:"“This difference may reflect…”", ok:true, why:"It moves from reporting a difference to analysing it."},
     {t:"“Similarly,…”", why:"Signals agreement."},
     {t:"“A second theme concerns…”", why:"Signals a new section or idea."},
     {t:"“Little is known about…”", why:"Signals a gap."}]}
  ]
});
