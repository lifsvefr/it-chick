/* International Studies · Unit 3 · Research methods for international studies */
ICA.addUnit({
  id:"e4u3", track:"e4", n:3, title:"Research methods for international studies", icon:"🧪",
  blurb:"How IR scholars turn a puzzle into a study they can defend: explaining and understanding, concepts and units, case studies and process tracing, discourse, archives and elite interviews, the big datasets and what regression can and can’t show, and the path from question to master’s thesis.",
  goals:[
    "Turn an IR topic into a puzzle-driven research question, and say whether it asks for explanation or understanding",
    "Choose and justify cases (most-similar, most-different, typical, deviant, crucial) and trace a causal process with evidence tests",
    "Use discourse analysis, content analysis, archives, elite interviews and fieldwork, with source criticism and reflexivity",
    "Read the main IR datasets and regression results critically: what a coefficient means, and why correlation is not causation",
    "Plan an IR literature review, research proposal and master’s thesis, including the ethics of fieldwork abroad and on sensitive topics"
  ],
  read:[
    {book:"ipsrm", where:"Chapters 3–9, from “The Scientific Method” to “Research Ethics”", note:"A short, introductory methods textbook for political science. Its examples are mostly from US politics; read it alongside these lessons, which add the international cases and the debates."},
    {book:"bhatt", where:"Chapter 11, “Case Research”, and Chapter 12, “Interpretive Research”", note:"The general research-design background, if you want a second explanation of case studies and interpretive work."},
    {book:"hurst", where:"Chapter 6, “Reflexivity”, Chapter 11, “Interviewing”, and Chapter 16, “Archival and Historical Research”", note:"Practical detail on the qualitative methods used in Lesson 3."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e4u3-l1", title:"Designing research in IR: puzzles, philosophies and concepts", minutes:55,
   hook:{q:"In 1997 the political scientists David Collier and Steven Levitsky surveyed how researchers used the word “democracy” with an adjective attached (“illiberal democracy”, “electoral democracy” and so on). Roughly how many different subtypes did they find?", options:["About 12","About 50","More than 500","Exactly 3, one per region"], answer:2, reveal:"**More than 500.** Their article “Democracy with Adjectives” reported more than 550 of them in the literature. One word, hundreds of meanings: that is why IR research starts by pinning down its concepts. This lesson shows how, after first turning a topic into a puzzle and choosing whether you want to explain or to understand."},
   goals:[
     "Turn an IR topic into a research puzzle, and tell why, how, how-possible, descriptive and normative questions apart",
     "Explain Hollis and Smith’s distinction between explaining and understanding, and causal versus constitutive claims",
     "Describe positivism and interpretivism in plain words, using ontology, epistemology, methodology and methods",
     "Spot concept stretching and see how one concept (war, democracy, power) is measured differently by different projects",
     "Choose a unit of analysis (country-year, dyad-year, event, text) that matches the question"
   ],
   learn:[
    {h:"From topic to puzzle", body:[
      {lead:"Graduate seminars in IR ask one question again and again: “What’s your puzzle?”"},
      "A **topic** is an area of interest: ASEAN, peacekeeping, nuclear weapons. A [[research-question|research question]] asks something specific about it that evidence can help answer; the Research Skills track showed how to narrow one ({{research-questions}}). IR adds a third idea, the [[research-puzzle|puzzle]]: a question built around a **surprise**, something that happened, or failed to happen, that existing theories or common sense would not lead us to expect.",
      {table:[
        ["Topic","Question","Puzzle"],
        ["ASEAN","How does ASEAN make decisions?","Why has ASEAN lasted since 1967 when SEATO (the Southeast Asia Treaty Organization), a regional security organisation founded in 1954, was dissolved in 1977?"],
        ["Nuclear weapons","Which states have nuclear weapons?","Why have many states that could build nuclear weapons chosen not to?"],
        ["Peacekeeping","Where are UN peacekeepers deployed?","Why does peace last after some civil wars but break down after others?"]
      ]},
      "A good puzzle passes two tests. It says **what is surprising, and against which expectation** (a realist would expect…; most studies assume…). And **more than one answer is plausible**, so that research can tell the answers apart. Dina Zinnes built her 1980 presidential address to the International Studies Association around this idea, under the title “Three Puzzles in Search of a Researcher”.",
      "IR questions also come in different kinds, and each kind needs different evidence:",
      {list:[
        "**Why** questions ask for causes: why did this war start?",
        "**How** questions ask for a process: how did a ceasefire hold?",
        "[[how-possible-question|How-possible]] questions ask what made a policy thinkable. Roxanne Lynn Doty (1993) asked not why the United States pursued counterinsurgency in the Philippines in the 1940s and 50s but how official texts described Filipinos and Americans so that intervention seemed natural.",
        "**What** (descriptive) questions ask what happened or how often. They are research too: much of what we know about armed conflict comes from careful counting.",
        "**Should** questions are [[normative-theory|normative]]: what ought to be done. They are argued with reasons, not settled by data alone."
      ]}
     ]},
    {h:"Explaining and understanding", body:[
      "The IR primer introduced this pair ({{ir-theory}}). Here is why it matters for designing research.",
      "Martin Hollis and Steve Smith argued in *Explaining and Understanding International Relations* (1990) that there are always **two stories** to tell. The **explaining** story is told from the outside, modelled on the natural sciences: it looks for causes and regularities across many cases. The **understanding** story is told from the inside: it reconstructs what actions meant to the people taking them, in the tradition of history and interpretive social science. They argued that the two rest on different assumptions and do not merge neatly into one.",
      {table:[
        ["","Explaining","Understanding"],
        ["Typical question","Do regional organisations with a non-interference norm see fewer wars between members?","What did “non-interference” mean to ASEAN’s founders in 1967?"],
        ["Evidence","Patterns across cases, often counted","Texts, speeches, interviews, practices, read in context"],
        ["Good answer","A cause that holds across cases","A convincing reconstruction of meanings"]
      ]},
      "A related distinction comes from Alexander Wendt (1998). A **causal** claim says X brought about Y. A [[constitutive-claim|constitutive]] claim says what makes Y what it is: “a state is sovereign because other states recognise it” is not about a cause that came first, but about what sovereignty consists of. Many interpretive projects make constitutive claims, and judging them by causal standards (or the reverse) is a common seminar mistake."
     ]},
    {h:"Positivism and interpretivism in plain words", body:[
      "Behind the two stories lie different answers to four questions, which seminars name with four big words. Think of them as a stack: each layer shapes the one below.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u3-l1-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="20" y="10" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="34" text-anchor="middle">Ontology</text><text class="s" x="170" y="55" text-anchor="middle">What is the social world made of?</text><path class="d-ink" d="M170 72 L170 88" stroke-width="2" marker-end="url(#e4u3-l1-a)"/><rect class="d-gold" x="20" y="90" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="114" text-anchor="middle">Epistemology</text><text class="s" x="170" y="135" text-anchor="middle">How can we know about it?</text><path class="d-ink" d="M170 152 L170 168" stroke-width="2" marker-end="url(#e4u3-l1-a)"/><rect class="d-sage" x="20" y="170" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="194" text-anchor="middle">Methodology</text><text class="s" x="170" y="215" text-anchor="middle">What logic links evidence to claims?</text><path class="d-ink" d="M170 232 L170 248" stroke-width="2" marker-end="url(#e4u3-l1-a)"/><rect class="d-rose" x="20" y="250" width="300" height="70" rx="8" stroke-width="2"/><text x="170" y="274" text-anchor="middle">Methods</text><text class="s" x="170" y="294" text-anchor="middle">Which tools? Archives, interviews,</text><text class="s" x="170" y="310" text-anchor="middle">discourse analysis, regression…</text></svg>', alt:"Four boxes stacked from top to bottom with arrows between them: ontology (what is the social world made of?), epistemology (how can we know about it?), methodology (what logic links evidence to claims?) and methods (which tools, such as archives, interviews, discourse analysis or regression).", cap:"The research stack. Methods are tools; which tools make sense depends on the layers above."},
      "[[ontology|Ontology]] is about what exists: are there social facts “out there”, like the balance of power, or is the social world made of shared meanings? [[epistemology|Epistemology]] is about how we can know. [[methodology|Methodology]] is the logic that connects question, evidence and conclusion. **Methods** are the techniques.",
      "**Positivism** (see [[positivism]]) holds that the social world has regularities we can observe and test, much as natural scientists do, aiming at general explanations. Gary King, Robert Keohane and Sidney Verba’s *Designing Social Inquiry* (1994) argued that qualitative and quantitative research share one logic of inference. Critics replied in *Rethinking Social Inquiry* (Brady and Collier, eds., 2004) that good qualitative work has its own tools and should not be judged only as “small-sample statistics”.",
      "[[interpretivism|Interpretivism]] (the tradition the sociology unit called [[antipositivism]]) holds that the social world is made of meanings that people create and act on, so research must interpret them in context, as in Weber’s [[verstehen]]. In IR, approaches that question positivism are often grouped as **post-positivist**; Yosef Lapid called the argument the field’s “third debate” (1989).",
      "Many scholars sit between the poles. [[critical-realism|Critical realists]] hold that real structures exist even when we can’t observe them directly, and that explanation means finding the mechanisms that produce events.",
      {key:"Neither side is “the scientific one”. They answer different questions. A design is strong when the question, the philosophy and the methods fit together."}
     ]},
    {h:"Concepts: from big words to measures", body:[
      "You met conceptualisation and operationalisation in the Research Skills track ({{theory-hypotheses}}). IR concepts such as war, democracy, power and integration are especially slippery, because they travel across very different countries and centuries.",
      "Giovanni Sartori (1970) warned against [[concept-stretching|concept stretching]]: widening a concept to cover new cases until it means almost nothing. His [[ladder-of-abstraction|ladder of abstraction]] shows the trade-off. The more defining attributes a concept has, the fewer cases it covers; drop attributes and it covers more cases, but says less about each.",
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="e4u3-l1-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="60" y="15" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="38" text-anchor="middle">Political regime</text><text class="s" x="170" y="58" text-anchor="middle">any system of rule</text><rect class="d-gold" x="60" y="95" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="118" text-anchor="middle">Democracy</text><text class="s" x="170" y="138" text-anchor="middle">+ free, competitive elections</text><rect class="d-lup" x="60" y="175" width="220" height="56" rx="8" stroke-width="2"/><text x="170" y="198" text-anchor="middle">Liberal democracy</text><text class="s" x="170" y="218" text-anchor="middle">+ rights, rule of law, checks</text><path class="d-ink" d="M30 230 L30 20" stroke-width="2" marker-end="url(#e4u3-l1-b)"/><text class="s" transform="rotate(-90 22 125)" x="22" y="125" text-anchor="middle">more cases</text><path class="d-ink" d="M310 20 L310 230" stroke-width="2" marker-end="url(#e4u3-l1-b)"/><text class="s" transform="rotate(90 322 125)" x="322" y="125" text-anchor="middle">more attributes</text></svg>', alt:"Three boxes stacked like rungs of a ladder. Top: political regime, any system of rule. Middle: democracy, adding free and competitive elections. Bottom: liberal democracy, adding rights, rule of law and checks. An arrow on the left points up, labelled more cases. An arrow on the right points down, labelled more attributes.", cap:"Sartori’s ladder of abstraction. Moving down adds attributes and covers fewer cases; moving up covers more cases but says less."},
      "Different projects measure the same concept differently, so their numbers differ:",
      {table:[
        ["Concept","One measure","Another measure"],
        ["War","Correlates of War: at least 1,000 battle-related deaths","UCDP: armed conflict from 25 battle-related deaths a year; “war” from 1,000"],
        ["Democracy","V-Dem: many indices, from electoral to liberal and participatory","A simple yes/no: were there free, competitive elections?"],
        ["Power","Material capabilities (population, industry, military): the CINC score","Influence: getting others to do what they otherwise would not"]
      ]},
      {warn:"Before comparing studies, check that they define and measure the concept the same way. Two studies of “war” can disagree simply because they count different things."}
     ]},
    {h:"Units and levels of analysis", body:[
      "The primer’s [[levels-of-analysis|levels of analysis]] (individual, state, system) tell you **where** an explanation looks. The [[unit-of-analysis|unit of analysis]] tells you **what each observation is**. IR datasets use some distinctive units:",
      {list:[
        "[[country-year|Country-year]]: one row for each country in each year (Japan 1990, Japan 1991…). Most cross-national data look like this.",
        "[[dyad-year|Dyad-year]]: one row for each **pair** of countries in each year (India–Pakistan 1971). Needed for questions about relations between states.",
        "Events, leaders, treaties, votes, speeches or posts, for questions about those things."
      ]},
      "The unit must match the claim. The democratic peace is mainly a **dyadic** finding: pairs of democracies rarely fight each other. Whether democracies are less war-prone **in general** is a different, more contested, claim, tested with different units.",
      "The [[ecological-fallacy|ecological fallacy]] applies internationally too. If countries with more internet users show more support for free trade in national averages, that does not show that the internet users are the ones who support it.",
      {tip:"Write your unit into your question: “In dyad-years from 1950 to 2020, are pairs of countries with more trade less likely to have a militarised dispute?” A precise question almost designs itself."}
     ]},
    {h:"Common traps in IR research design", body:[
      {list:[
        "**A topic dressed as a question.** “China–Japan relations” is not yet research.",
        "**A question too big for the time.** “What explains world order?” fits a lifetime, not a master’s thesis.",
        "**An answer hidden in the question.** “Why did the sanctions fail?” assumes they failed; first show what failure means and that it happened.",
        "**Theory as decoration.** A theory chapter that is never used again in the analysis. Unit 2 of this track shows how to make a framework do work.",
        "**A method chosen before the question.** Learning regression is not a reason to use it; the question decides.",
        "**Sources you can’t reach.** Archives you can’t visit, languages you can’t read, people who won’t talk: check access early."
      ]},
      {key:"A strong IR design fits together: a puzzle, a clear type of question, a philosophy that suits it, well-defined concepts, the right unit, and methods and sources that can actually answer it."},
      {terms:["research-puzzle","how-possible-question","constitutive-claim","ontology","epistemology","methodology","interpretivism","critical-realism","concept-stretching","ladder-of-abstraction","country-year","dyad-year"]}
     ]}
   ],
   try:[
    {id:"e4u3-l1-x1", type:"sort", q:"Is each one a topic, a research question that isn’t yet a puzzle, or a puzzle?", buckets:["Topic","Question (not a puzzle)","Puzzle"], items:[
      {t:"The Pacific Islands Forum", b:0, why:"A subject area. It names what you are interested in, but asks nothing."},
      {t:"Which states have joined the Treaty on the Non-Proliferation of Nuclear Weapons?", b:1, why:"A clear descriptive question with a factual answer. Nothing in it is surprising."},
      {t:"Why have many states able to build nuclear weapons chosen not to, when realist theory expects states to seek the strongest means of security?", b:2, why:"It names a surprise against a stated expectation, and several answers (alliances, norms, cost, domestic politics) are plausible."},
      {t:"Climate diplomacy", b:0, why:"A broad area of interest, not a question."},
      {t:"How many UN peacekeeping operations are active this year?", b:1, why:"A counting question. Useful, but there is no puzzle until you ask why the number is what it is."},
      {t:"Why has ASEAN survived since 1967 when SEATO, founded earlier for the same region, was dissolved in 1977?", b:2, why:"A contrast that needs explaining, with rival answers to test."}
    ]},
    {id:"e4u3-l1-x2", type:"mcq", q:"Which of these is a “how-possible” question in Doty’s sense?", options:[
      {t:"How did official documents represent the people of a country so that intervening there seemed natural and necessary?", ok:true, why:"Right. It asks what made a policy thinkable, through the meanings in texts, rather than which cause produced it."},
      {t:"Why did the government decide to intervene in 1950 rather than in 1955?", why:"This is a why-question about timing and causes."},
      {t:"How many troops did the government send?", why:"This is a descriptive what/how-many question, even though it starts with “how”."},
      {t:"Should the government have intervened?", why:"This is a normative question about what ought to have been done."}
    ]},
    {id:"e4u3-l1-x3", type:"sort", q:"Is each research aim mainly explaining (causes across cases) or understanding (meanings from the inside)?", buckets:["Explaining","Understanding"], items:[
      {t:"Test whether alliances with a nuclear power reduce the chance that a state builds its own nuclear weapons.", b:0, why:"A causal claim tested across many states."},
      {t:"Reconstruct how diplomats at the 1955 Bandung Conference understood “peaceful coexistence”.", b:1, why:"It recovers what a concept meant to the actors, in context."},
      {t:"Estimate whether trade between two countries lowers the risk of a militarised dispute between them.", b:0, why:"A causal pattern across many pairs of countries."},
      {t:"Interpret what “face” and status meant to negotiators in a regional summit, from interviews and memoirs.", b:1, why:"Meanings and self-understanding from the inside."},
      {t:"Show how the meaning of “security” in a country’s defence white papers changed over thirty years.", b:1, why:"Tracing changing meanings in texts is interpretive work."}
    ]},
    {id:"e4u3-l1-x4", type:"match", q:"Match each layer of the research stack to the question it answers.", pairs:[
      ["Ontology","What is the social world made of?","Ontology is about what exists: social facts, structures, meanings."],
      ["Epistemology","How can we know about it?","Epistemology is about the grounds of knowledge."],
      ["Methodology","What logic connects evidence to conclusions?","Methodology is the reasoning that turns evidence into a defensible claim."],
      ["Methods","Which techniques will collect and analyse the evidence?","Methods are the concrete tools: archives, interviews, regression and so on."]
    ]},
    {id:"e4u3-l1-x5", type:"mcq", q:"Amara’s study of “democracy in Southeast Asia” counts every state that held any kind of election in a given year as a democracy, including states where opposition parties were banned. What is the main problem?", options:[
      {t:"Concept stretching: the definition drops so many attributes that “democracy” no longer distinguishes democracies from other regimes.", ok:true, why:"Right. Moving up Sartori’s ladder this far makes the concept cover cases that most definitions would exclude, so her findings would be about “regimes with elections”, not democracy."},
      {t:"The ecological fallacy: she infers individual attitudes from national data.", why:"Nothing here concerns individuals. The problem is the definition of the concept."},
      {t:"Her unit of analysis should be the dyad-year.", why:"Her question is about each country’s regime, so country-years fit. The unit is not the issue."},
      {t:"There is no problem, because every definition of democracy is equally valid.", why:"Definitions are choices, but they can still be too thin for the claims made. Elections without competition fail most definitions."}
    ]},
    {id:"e4u3-l1-x6", type:"number", q:"In one year, five fights between a government and a rebel group over territory caused these battle-related deaths: 20, 30, 400, 1,200 and 5,000. Using UCDP’s threshold for an armed conflict, how many of the five does UCDP record as armed conflicts that year?", answer:4, tol:0, unit:"conflicts", why:"UCDP records a state-based armed conflict from 25 battle-related deaths in a calendar year. Four (30, 400, 1,200 and 5,000) reach it; 20 does not. UCDP would class the two with 1,000 or more as “wars” and the other two as minor conflicts.", wrongs:[
      {v:2, tol:0, why:"That uses the 1,000-death threshold, which UCDP uses for the subcategory “war” and Correlates of War uses for wars. The question asked about armed conflicts, from 25 deaths."},
      {v:5, tol:0, why:"The fight with 20 deaths falls below UCDP’s 25-death threshold for that year."},
      {v:3, tol:0, why:"Check the threshold again: it is 25 battle-related deaths, so the fight with 30 counts."}
    ]},
    {id:"e4u3-l1-x7", type:"mcq", q:"Tomás wants to test the claim that pairs of democracies rarely go to war with each other. Which unit of analysis fits best?", options:[
      {t:"Dyad-years: each pair of countries in each year, coded for both regimes and for whether they fought.", ok:true, why:"Right. The claim is about pairs, so each observation should be a pair at a point in time."},
      {t:"Country-years: each country in each year, coded for regime and for any war.", why:"That tests whether democracies fight less in general (the “monadic” claim), which is a different and more contested question."},
      {t:"Individual voters in democracies, from opinion surveys.", why:"Survey attitudes might help explain a mechanism, but they can’t show whether pairs of states fought."},
      {t:"One detailed case study of a single war.", why:"A case can probe the mechanism, but a claim about how rarely something happens across all pairs needs many observations."}
    ]},
    {id:"e4u3-l1-x8", type:"spot", q:"A draft proposal paragraph. Tap the sentences that show a design trap.", ask:"a design trap", parts:[
      {t:"This thesis examines China–Japan relations.", flag:true, why:"A topic, not a question. What about the relations, when, and what is puzzling?"},
      " ",
      {t:"It asks why Japan’s aid programme failed in Southeast Asia.", flag:true, why:"The question assumes its answer. First define “failure” and show that it happened."},
      " ",
      {t:"Constructivism is summarised in Chapter 2 and is not mentioned again in the analysis.", flag:true, why:"Theory as decoration: a framework that is never used to shape the question, the evidence or the analysis."},
      " ",
      {t:"I will use official aid reports from 1977 to 2007, which are available online.", flag:false, why:"Fine. A defined source base and period, with access checked."},
      " ",
      {t:"The unit of analysis is the aid project.", flag:false, why:"Fine. Naming the unit is good practice."}
    ]}
   ],
   apply:{intro:"Practise the first moves of IR research design. You need only a notes box and, for one task, any open-access IR article.", tasks:[
     {t:"From topic to puzzle", how:["Pick an IR topic you care about.","Write one descriptive question about it.","Now find a surprise: something theories or common sense would not expect. Write it as a puzzle with “why” or “how”.","List two rival answers that research could tell apart."], write:"Topic… Descriptive question… Puzzle (and the expectation it goes against)… Rival answer 1… Rival answer 2…"},
     {t:"Read an abstract for its philosophy", how:["Find the abstract of any open-access IR article (journals such as Global Studies Quarterly are free to read).","Underline the question and the kind of evidence used.","Decide: is it mainly explaining or understanding? Causal or constitutive?","Note the words that told you."], write:"Article… Question… Evidence… Explaining or understanding, and why…"},
     {t:"Concept audit", how:["Choose one concept from your puzzle (for example security, integration, influence, soft power).","Write a one-sentence definition with its main attributes.","Place it on Sartori’s ladder: name a broader and a narrower version.","Propose two indicators and say what each misses."], write:"Concept and definition… Broader version… Narrower version… Indicator 1 and its blind spot… Indicator 2…"},
     {t:"Seminar questions", how:["Is a “how-possible” question research in the same sense as a “why” question, or a different kind of work?","Can a study be both explaining and understanding, or must it choose, as Hollis and Smith suggested?","When does a concept become so stretched that cross-national comparison is misleading? Use democracy or war as your example."], write:"A paragraph on one of the three questions…"}
   ], proof:"Notes with one puzzle and its rival answers, one abstract classified with reasons, one concept audited with two indicators, and a paragraph on a seminar question."},
   read:[
    {book:"ipsrm", where:"Chapter 3, section 3.1 “Philosophy of Science”, and Chapter 5, sections 5.1 “Conceptualization in Political Science” and 5.2 “Operationalization”", note:"Read it after this lesson for a second, gentler explanation of the philosophy of science and of turning concepts into measures."},
    {book:"ipsrm", where:"Chapter 4, section 4.5 “Units of Observation and Units of Analysis”", note:"The difference between what you observe and what you draw conclusions about."},
    {book:"bhatt", where:"Chapter 12, “Interpretive Research” (the parts on how it differs from positivist research)", note:"A clear side-by-side of positivist and interpretive designs."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e4u3-l2", title:"Case studies, comparison and process tracing", minutes:60,
   hook:{q:"In the Sherlock Holmes story “Silver Blaze” (1892), a racehorse is stolen from its stable at night. Which clue convinces Holmes that the thief was someone the stable dog knew?", options:["Muddy footprints by the door","The dog did not bark","A torn coat left on a nail","A witness who saw a stranger"], answer:1, reveal:"**The dog did not bark.** If a stranger had come, the dog would have barked; it didn’t, so the stranger theory fails. Evidence that *must* appear if an explanation is true, and doesn’t, can rule that explanation out. Process tracers use exactly this logic, and the political scientist David Collier used this story to teach it (2011). This lesson shows how."},
   goals:[
     "Say what a case is “a case of”, and define the universe of cases and scope conditions",
     "Design a most-similar or most-different comparison and explain the limits of Mill’s methods",
     "Choose typical, deviant, extreme or crucial (most-likely, least-likely) cases, and avoid selection bias",
     "Trace a causal process using hoop, smoking-gun, straw-in-the-wind and doubly decisive tests",
     "Judge a counterfactual argument by the minimal-rewrite rule"
   ],
   learn:[
    {h:"What is this a case of?", body:[
      {lead:"A case study is never only about the case. It is about a wider class of things the case belongs to."},
      "John Gerring (2004) defined a [[case-study|case study]] as an intensive study of a single unit for the purpose of understanding a larger class of similar units. So the first design question is always: **what is this a case of?** The answer defines the [[universe-of-cases|universe of cases]], the wider set your conclusions are meant to speak to.",
      "The same event can be a case of many things. Graham Allison’s *Essence of Decision* (1971; second edition with Philip Zelikow, 1999) treated the 1962 missile crisis as a case of government decision-making, and read it through three models: a unitary rational actor, organisational routines, and bargaining among bureaucracies. The same crisis is also a case of nuclear deterrence, of crisis bargaining and of great-power intervention in a small state.",
      "[[scope-conditions|Scope conditions]] state where your argument is meant to hold: “among states with nuclear weapons”, “in regional organisations that decide by consensus”, “since 1945”. They protect you from claiming too much, and they tell readers which cases would count as a fair test.",
      {tip:"Write one sentence that starts “This is a case of… within the universe of…”. If you can’t finish it, the design isn’t ready."}
     ]},
    {h:"Comparing a few cases: Mill’s methods", body:[
      "With a small number of cases ([[small-n|small-N]] research), comparison is the main tool. Its logic goes back to John Stuart Mill’s *A System of Logic* (1843):",
      {list:[
        "The [[method-of-agreement|method of agreement]]: cases with the same outcome are compared to find the one factor they share.",
        "The [[method-of-difference|method of difference]]: cases with different outcomes are compared to find the one factor that differs."
      ]},
      "Adam Przeworski and Henry Teune (*The Logic of Comparative Social Inquiry*, 1970) named two research designs that comparativists and IR scholars still use, and textbooks today usually link them to Mill’s two methods:",
      {table:[
        ["Design","The cases are…","You look for…"],
        ["[[most-similar-design|Most-similar systems]]","alike in as many ways as possible, but differ in outcome","the factor that differs, which may explain the different outcome (method of difference)"],
        ["[[most-different-design|Most-different systems]]","unlike in as many ways as possible, but share an outcome","the factor they share, which may explain the common outcome (method of agreement)"]
      ]},
      {ex:"Puzzle: two neighbouring island states with similar size, colonial history, economy and alliances took opposite positions on a regional fisheries agreement.\nMost-similar logic: because so much is held roughly constant, look for what differs (for example, the strength of the domestic fishing lobby) and test whether it explains the different positions.\nCaution: “roughly constant” is never perfectly constant. The next step is to trace the process inside each case.", label:"Worked example (invented)"},
      "Theda Skocpol’s *States and Social Revolutions* (1979) is the classic use of both methods together, comparing France, Russia and China with cases where revolutions did not happen."
     ]},
    {h:"The limits of Mill’s methods", body:[
      "Mill himself doubted that his methods could work for social questions, where many causes act at once. Later critics, such as Stanley Lieberson (1991), sharpened the problems:",
      {list:[
        "**Many variables, few cases.** Arend Lijphart (1971) named the basic problem: two or three cases always differ in more ways than one, so more than one factor could explain the outcome.",
        "**More than one road to the same outcome.** Different causes can produce the same result in different cases, which scholars call [[equifinality|equifinality]]. The method of agreement assumes one shared cause.",
        "**Causes that work only together.** A factor may matter only when another is present.",
        "**Measurement error.** With so few cases, one miscoded case can reverse the conclusion."
      ]},
      "Researchers respond in three main ways: they add **within-case** evidence (process tracing, below); they increase the number of cases; or they use [[qca|qualitative comparative analysis]] (QCA), developed by Charles Ragin (*The Comparative Method*, 1987), which compares combinations of conditions across a moderate number of cases using set logic."
     ]},
    {h:"Choosing cases on purpose", body:[
      "In small-N research, cases are chosen deliberately, and you must say why. Jason Seawright and John Gerring (2008) set out a menu that is now standard (typical, diverse, extreme, deviant, influential, most-similar and most-different cases), and Harry Eckstein added the idea of crucial cases (below). The most common choices are:",
      {table:[
        ["Case type","What it is","Good for"],
        ["[[typical-case|Typical]]","Fits the general pattern well","Showing how the expected mechanism works"],
        ["[[deviant-case|Deviant]]","Breaks the pattern","Finding what the theory misses"],
        ["Extreme","Very high or low on a key factor or outcome","Exploring a factor where it is strongest"],
        ["[[most-likely-case|Most-likely]]","Where a theory should certainly work","Damaging the theory if it fails even here"],
        ["[[least-likely-case|Least-likely]]","Where a theory should struggle","Strong support if it works even here"]
      ]},
      "Most-likely and least-likely cases are both [[crucial-case|crucial cases]], an idea from Eckstein’s 1975 essay “Case Study and Theory in Political Science”. Lijphart’s study of the Netherlands (*The Politics of Accommodation*, 1968) is a famous deviant case: a deeply divided society that was nonetheless a stable democracy, which led him to rethink existing theory.",
      {warn:"**Selecting on the dependent variable.** If you study only cases where the outcome happened (only wars, only states that built nuclear weapons), every factor they share looks like a cause, because you never see cases with the same factor and no outcome. Barbara Geddes (1990) and King, Keohane and Verba (1994) made this warning famous. It is most damaging when you want to estimate a cause’s effect across cases. David Collier and James Mahoney (1996) noted that it matters less for some goals, such as tracing how an outcome came about within a case."},
      "Random selection, the cure in large samples ({{sampling-methods}}), can backfire with three or four cases: a random draw may miss every interesting case. That is why small-N researchers justify each choice in writing."
     ]},
    {h:"Process tracing: following the causal chain", body:[
      "Comparison across cases tells you **that** a factor goes with an outcome. [[process-tracing-term|Process tracing]] looks **inside** a case for the steps that link them. Alexander George and Andrew Bennett (*Case Studies and Theory Development in the Social Sciences*, 2005) define it as using evidence from within a case to test whether the [[causal-mechanism|causal mechanism]] a theory proposes was actually at work.",
      "The key is to ask, for each piece of evidence, two things: would it **have to** appear if the explanation is true (is it certain?), and would it appear **only** if the explanation is true (is it unique)? Stephen Van Evera (1997) turned the answers into four tests, which Collier (2011) set out as a table:",
      {fig:'<svg viewBox="0 0 340 300"><rect class="d-panel" x="70" y="4" width="130" height="46" rx="6"/><text class="s" x="135" y="23" text-anchor="middle">Passing is</text><text class="s" x="135" y="40" text-anchor="middle">not enough</text><rect class="d-panel" x="205" y="4" width="130" height="46" rx="6"/><text class="s" x="270" y="23" text-anchor="middle">Passing is</text><text class="s" x="270" y="40" text-anchor="middle">enough to confirm</text><text class="s" x="34" y="100" text-anchor="middle">Passing</text><text class="s" x="34" y="116" text-anchor="middle">not</text><text class="s" x="34" y="132" text-anchor="middle">needed</text><text class="s" x="34" y="210" text-anchor="middle">Passing</text><text class="s" x="34" y="226" text-anchor="middle">needed</text><rect class="d-soft" x="70" y="56" width="130" height="114" rx="8" stroke-width="2"/><text x="135" y="84" text-anchor="middle">Straw in</text><text x="135" y="101" text-anchor="middle">the wind</text><text class="s" x="135" y="126" text-anchor="middle">weak evidence</text><text class="s" x="135" y="143" text-anchor="middle">either way</text><rect class="d-gold" x="205" y="56" width="130" height="114" rx="8" stroke-width="2"/><text x="270" y="84" text-anchor="middle">Smoking gun</text><text class="s" x="270" y="108" text-anchor="middle">pass: strong</text><text class="s" x="270" y="124" text-anchor="middle">support</text><text class="s" x="270" y="146" text-anchor="middle">fail: still alive</text><rect class="d-lup" x="70" y="176" width="130" height="114" rx="8" stroke-width="2"/><text x="135" y="204" text-anchor="middle">Hoop test</text><text class="s" x="135" y="228" text-anchor="middle">fail: ruled out</text><text class="s" x="135" y="250" text-anchor="middle">pass: still alive,</text><text class="s" x="135" y="266" text-anchor="middle">not proven</text><rect class="d-sage" x="205" y="176" width="130" height="114" rx="8" stroke-width="2"/><text x="270" y="204" text-anchor="middle">Doubly</text><text x="270" y="221" text-anchor="middle">decisive</text><text class="s" x="270" y="246" text-anchor="middle">pass: confirms,</text><text class="s" x="270" y="262" text-anchor="middle">rules out rivals</text></svg>', alt:"A two-by-two grid. Columns: passing is not enough to confirm, and passing is enough to confirm. Rows: passing not needed, and passing needed. Straw in the wind (not needed, not enough): weak evidence either way. Smoking gun (not needed, enough): passing gives strong support, failing leaves the explanation alive. Hoop test (needed, not enough): failing rules it out, passing keeps it alive but doesn’t prove it. Doubly decisive (needed and enough): passing confirms it and rules out rivals.", cap:"Four process-tracing tests (Van Evera 1997; Collier 2011). “Needed” means the evidence must appear if the explanation is true; “enough” means it would appear only if the explanation is true."},
      {ex:"Puzzle: why did a leader order a sudden military strike? Explanation A: to distract voters from a domestic scandal. Rival B: a real security threat.\nHoop: A requires that the leader knew of the scandal before the order. If records show the scandal broke only afterwards, A is out.\nSmoking gun: a diary entry that night saying the strike “will take the papers off the scandal” would strongly support A; its absence wouldn’t sink A, since leaders rarely write such things.\nStraw in the wind: the leader’s approval rose after the strike. That fits A, but also fits B.", label:"Worked example (invented)"},
      "Good process tracing states rival explanations first, sets out what evidence each predicts, and then looks. Andrew Bennett and others have shown that these tests are a version of Bayesian reasoning: each piece of evidence raises or lowers our confidence by an amount that depends on how expected it was under each explanation. In an Asia-Pacific example, Amitav Acharya (2004) traced how ASEAN members adapted outside ideas about cooperative security to their own norms when they built the ASEAN Regional Forum, and why a proposal for “flexible engagement” was turned down."
     ]},
    {h:"Counterfactuals: what if?", body:[
      "Every causal claim about a single case hides a [[counterfactual|counterfactual]]: “X caused Y” implies that without X, Y would not have happened (or would have been different). James Fearon (1991) argued that small-N researchers should make these counterfactuals explicit, because they can’t add cases to check them.",
      "Philip Tetlock and Aaron Belkin (*Counterfactual Thought Experiments in World Politics*, 1996) proposed tests for a good counterfactual. The best known is the **minimal-rewrite rule**: change as little of real history as possible. “If one message in the crisis had arrived an hour later…” is a minimal rewrite. “If the Industrial Revolution had started in another continent…” rewrites so much that nothing follows from it. A good counterfactual should also be clear about what changes, consistent with well-established facts and theories, and explicit about the chain of consequences.",
      {key:"Cases can show **how** a cause works and test theories hard. They can’t tell you how common something is. Their conclusions generalise to theory, within stated scope conditions, not statistically to a population."},
      {terms:["case-study","universe-of-cases","scope-conditions","small-n","method-of-agreement","method-of-difference","most-similar-design","most-different-design","equifinality","qca","typical-case","deviant-case","crucial-case","most-likely-case","least-likely-case","selecting-on-the-dependent-variable","process-tracing-term","causal-mechanism","hoop-test","smoking-gun-test","straw-in-the-wind-test","doubly-decisive-test","counterfactual"]}
     ]}
   ],
   try:[
    {id:"e4u3-l2-x1", type:"mcq", q:"Kenji is studying the 1997–98 Asian financial crisis in one country. His supervisor asks: “What is it a case of?” Which answer shows he understands the question?", options:[
      {t:"“It’s a case of how capital flight spreads between economies with fixed exchange rates; my universe is emerging economies hit by sudden capital outflows since the 1980s.”", ok:true, why:"Right. He names the wider class (and so the universe of cases) that his findings are meant to speak to."},
      {t:"“It’s a case of the 1997–98 crisis in this country.”", why:"That only repeats the case. The question asks which wider class of events it belongs to."},
      {t:"“It’s a case of economics.”", why:"Far too broad to define a universe of cases or a fair test."},
      {t:"“It isn’t a case of anything; it’s unique.”", why:"Every event is unique in detail, but a case study aims to learn something about a wider class. If it truly belonged to no class, there would be nothing to generalise."}
    ]},
    {id:"e4u3-l2-x2", type:"sort", q:"Is each comparison a most-similar or a most-different design?", buckets:["Most-similar","Most-different"], items:[
      {t:"Two neighbouring Pacific Island states with similar size, history and economy, which voted differently on a regional agreement.", b:0, why:"Similar on many factors, different in outcome: look for the factor that differs."},
      {t:"A small European state, a large African state and a mid-sized Asian state, all of which created a national human rights institution in the same decade.", b:1, why:"Very different cases with a shared outcome: look for what they share."},
      {t:"Two Southeast Asian states with similar regimes and income, one of which joined a trade agreement while the other stayed out.", b:0, why:"Holding much constant to isolate what explains the different outcome."},
      {t:"Three very different countries on three continents that all ended their military’s role in politics in the 1990s.", b:1, why:"Diverse cases with a common outcome: the method of agreement."}
    ]},
    {id:"e4u3-l2-x3", type:"match", q:"Match each case-selection reason to the type of case.", pairs:[
      ["It fits the general pattern well, so you can show the mechanism at work","Typical case","Typical cases are representative of the relationship you want to illustrate."],
      ["It breaks the pattern, so you can find what the theory misses","Deviant case","Deviant cases help refine or rethink a theory."],
      ["Conditions are so favourable that if the theory fails here, it is in trouble","Most-likely case","Failure in a most-likely case damages the theory."],
      ["Conditions are so unfavourable that success here is strong support","Least-likely case","Success where you least expect it is strong evidence."]
    ]},
    {id:"e4u3-l2-x4", type:"mcq", q:"Priya wants to know what makes states acquire nuclear weapons. She studies only the nine states that have them and finds that all nine had a powerful rival. What is the main problem with concluding that rivalry causes proliferation?", options:[
      {t:"She selected on the dependent variable: without states that had rivals and didn’t build weapons, she can’t tell whether rivalry makes a difference.", ok:true, why:"Right. Many states with powerful rivals never built nuclear weapons. Only a comparison that includes them can show whether rivalry raises the chances."},
      {t:"Nine cases is too few for any kind of study.", why:"Nine cases can support useful small-N work. The problem is which cases she chose, not how many."},
      {t:"She should have chosen a most-different design instead.", why:"Her cases already differ a lot. The problem is that the outcome doesn’t vary at all."},
      {t:"There is no problem; a factor shared by every case must be the cause.", why:"A factor can be shared by every case simply because it is common everywhere. You need cases without the outcome to know."}
    ]},
    {id:"e4u3-l2-x5", type:"sort", q:"Explanation A says a leader ordered a strike to distract voters from a scandal. Which test is each piece of evidence?", buckets:["Hoop","Smoking gun","Straw in the wind","Doubly decisive"], items:[
      {t:"Records show the leader knew of the scandal before giving the order (A requires this, but she would have known anyway).", b:0, why:"Necessary for A but not unique to it: passing keeps A alive; failing would have ruled it out."},
      {t:"A diary entry that night: “This will take the papers off the scandal.” (Leaders rarely write such things.)", b:1, why:"Strongly points to A if found, but its absence wouldn’t rule A out."},
      {t:"The leader’s approval rating rose after the strike.", b:2, why:"Consistent with A, but also with a genuine security threat. Weak either way."},
      {t:"A full recording of the meeting in which she rejects the military’s threat assessment and orders the strike only to change the headlines.", b:3, why:"If authentic, it confirms A and rules out the security-threat rival at once."},
      {t:"The scandal turns out to have broken only after the order was given.", b:0, why:"A required prior knowledge. This fails the hoop, so A is eliminated."}
    ]},
    {id:"e4u3-l2-x6", type:"order", q:"Put the steps of a process-tracing study in a sensible order.", items:[
      {t:"State the outcome to be explained and what it is a case of.", why:"First define what you are explaining and the wider class."},
      {t:"Set out the main explanation and at least one rival, each as a chain of steps.", why:"Without rivals, every fact can be made to fit one story."},
      {t:"Write down what evidence each explanation predicts, and how certain and unique it is.", why:"Deciding what counts before looking guards against reading evidence to fit."},
      {t:"Collect the evidence: documents, interviews, records.", why:"Now you know what to look for and where."},
      {t:"Apply the tests and weigh what passes and fails for each explanation.", why:"Hoops can eliminate; smoking guns can confirm."},
      {t:"State the conclusion, its scope conditions and the remaining uncertainty.", why:"Honest conclusions say where they hold and what could still change them."}
    ]},
    {id:"e4u3-l2-x7", type:"mcq", q:"Which counterfactual best follows the minimal-rewrite rule?", options:[
      {t:"If the ceasefire proposal had been delivered one day earlier, before the offensive began, fighting might have stopped sooner.", ok:true, why:"Right. It changes one small, plausible thing and keeps the rest of history intact, so its consequences can be reasoned about."},
      {t:"If the region had never been colonised, the war would never have happened.", why:"This rewrites centuries of history, so almost anything could follow. It can’t test a specific causal claim."},
      {t:"If both countries had been run by the same government, they would not have fought.", why:"A huge, implausible change: it removes the very thing being studied."},
      {t:"If nuclear weapons had been invented in 1800, the nineteenth century would have been peaceful.", why:"A massive rewrite with countless knock-on changes, so nothing follows clearly."}
    ]},
    {id:"e4u3-l2-x8", type:"mcq", q:"Lucía compares two states: one joined a regional organisation, one did not. They differ in regime type, income, language, alliances and geography. She concludes that regime type explains the difference. What is the main weakness?", options:[
      {t:"With two cases that differ in many ways, any of the other differences could explain the outcome just as well.", ok:true, why:"Right. This is Lijphart’s “many variables, small N” problem. She needs cases that hold more constant, more cases, or within-case process tracing."},
      {t:"She should have chosen two cases with the same outcome.", why:"A same-outcome design uses the method of agreement, which has its own limits. The weakness here is the number of rival differences."},
      {t:"Regime type can never explain foreign policy.", why:"It may well matter. The problem is that her design can’t separate it from the other differences."},
      {t:"Two cases are never enough for any research.", why:"Paired comparisons can be powerful when the cases are well matched or combined with process tracing."}
    ]}
   ],
   apply:{intro:"Design, don’t just read: these tasks build the case-selection and process-tracing parts of a real project.", tasks:[
     {t:"Three classes for one event", how:["Choose a well-documented event in international politics (a summit, a crisis, a treaty, a war’s end).","Write three different answers to “What is this a case of?”.","For each, name the universe of cases and one scope condition."], write:"Event… Case of (1)… universe… scope… Case of (2)… Case of (3)…"},
     {t:"Design a paired comparison", how:["Pick two countries in one region that differ in one outcome you care about.","List five background factors and mark which are similar and which differ.","Decide whether this is closer to a most-similar or most-different design, and name its weak spot."], write:"Cases and outcome… Similar factors… Differing factors… Design type… Weak spot…"},
     {t:"Plan the evidence tests", how:["For your puzzle, write the main explanation and one rival.","For each, list one piece of evidence that would be a hoop test and one that would be a smoking gun.","Note where you would look for it (archives, memoirs, interviews, news reports)."], write:"Explanation… Rival… Hoop evidence… Smoking-gun evidence… Where to look…"},
     {t:"Seminar questions", how:["Is selecting on the dependent variable always a mistake, or does it depend on the research goal?","Can a single case ever “test” a theory, or only illustrate it?","Pick a famous counterfactual about a war or crisis. Does it pass the minimal-rewrite rule?"], write:"A paragraph on one of the three questions…"}
   ], proof:"Notes with one event framed as three different cases, a paired comparison with its weak spot, an evidence-test plan with a rival explanation, and a seminar paragraph."},
   read:[
    {book:"ipsrm", where:"Chapter 7, section 7.5 “Case Studies”", note:"A short introduction; this lesson goes further into case selection and process tracing."},
    {book:"bhatt", where:"Chapter 11, “Case Research”", note:"How case research is designed and conducted, with a positivist and an interpretive reading of case studies."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e4u3-l3", title:"Texts, archives, elites and the field", minutes:60,
   hook:{q:"In the 1980s the scholar Carol Cohn spent about a year among nuclear strategists, listening to how they talked. What struck her most about their language?", options:["It was full of complex mathematics no outsider could follow","It used abstract, sometimes almost cosy words (such as “clean” bombs) that made talk of mass death sound ordinary","It was mostly in secret codes","It was openly emotional and fearful"], answer:1, reveal:"**Abstract, sometimes cosy words.** In “Sex and Death in the Rational World of Defense Intellectuals” (1987), Cohn described euphemisms, domestic and sexual imagery and technical abstraction that kept the human consequences out of view, and how she began to think in the same terms herself. It is a classic of two methods in this lesson: discourse analysis and ethnographic fieldwork, with a strong dose of reflexivity."},
   goals:[
     "Tell discourse analysis from content analysis, and use predication, presupposition and subject positioning",
     "Design a simple content analysis with a codebook and check intercoder reliability",
     "Find and critically read diplomatic archives and declassified records, noticing archival silences",
     "Plan elite interviews: sampling, access, attribution rules and triangulation",
     "Explain what ethnography adds to IR, and reflect on your own positionality"
   ],
   learn:[
    {h:"Texts as evidence", body:[
      {lead:"International politics produces mountains of text: treaties, speeches, white papers, UN resolutions, cables, communiqués, posts."},
      "Two families of method read those texts in different ways. **Content analysis** asks what is said and how often, using rules that another researcher could repeat. **Discourse analysis** asks how texts create meanings, identities and “common sense”, and so make some policies thinkable and others not. The first usually fits explaining; the second usually fits understanding (Lesson 1). Many projects use both: count first, then read closely.",
      "The sociology unit introduced [[content-analysis|content analysis]] in general, and the Research Skills track taught qualitative coding ({{qualitative-coding}}). Here the focus is on what is special about IR texts: they are often written for several audiences at once, translated, strategic, and backed by state power."
     ]},
    {h:"Discourse analysis", body:[
      "[[discourse-analysis-term|Discourse analysis]] treats language as action. Jennifer Milliken (1999) summed up its main commitments: discourses are systems of meaning that sort the world into categories (friend and enemy, developed and underdeveloped); they are **productive**, making some actions seem natural, necessary or unthinkable; and they are always contested and changing.",
      "Doty (1993) offered three practical tools that are easy to use on any text:",
      {table:[
        ["Tool","Ask","Example"],
        ["Predication","Which qualities does the text attach to each subject?","Rebels are “fanatical”; the government is “responsible”"],
        ["Presupposition","What does it take for granted without arguing?","That the region “needs” outside leadership"],
        ["Subject positioning","How are subjects placed in relation to each other?","A “junior partner” guided by an “elder brother”"]
      ]},
      "Lene Hansen’s *Security as Practice* (2006) showed how Western debates about the Bosnian war built identities of Self and Other, and stressed [[intertextuality]]: texts borrow from and answer other texts, so a speech must be read alongside the texts it quotes, echoes or rebuts. Jutta Weldes (*Constructing National Interests*, 1999) read the 1962 missile crisis this way. [[critical-discourse-analysis|Critical discourse analysis]], associated with Norman Fairclough, links close reading of language to power and social structure.",
      {tip:"How do readers know your reading isn’t just your opinion? Read widely (many texts, many authors, over time), quote generously, show the passages that don’t fit, and say how you chose your texts."}
     ]},
    {h:"Content analysis and text as data", body:[
      "Klaus Krippendorff, whose *Content Analysis* (1980; fourth edition 2019) is the standard text, defines it as a technique for making replicable and valid inferences from texts to the contexts of their use. The steps:",
      {ol:[
        "Define the **texts** (all UN General Assembly speeches by ASEAN members, 1990–2020) and the **unit** you code (speech, paragraph, sentence).",
        "Write a [[codebook]]: each category, its definition, examples and borderline rules.",
        "Train a second coder, code a sample independently and check [[intercoder-reliability|intercoder reliability]].",
        "Code everything, then count and compare."
      ]},
      "**Manifest** content is on the surface (does the speech mention climate change?). **Latent** content needs judgement (does it frame climate change as a security threat?). Latent coding is more interesting and less reliable, which is why the reliability check matters. Simple percentage agreement flatters coders, because some agreement happens by chance; measures such as Krippendorff’s alpha correct for this.",
      "[[text-as-data|Text as data]] methods let computers do part of the counting: word frequencies, dictionaries, topic models, and now language models. The **UN General Debate Corpus** (Jankin, Baturo and Dasandi, 2025) holds more than 10,000 speeches from 1946 onwards, and is free to download. Computers count fast; they still can’t tell you what a pattern means, catch sarcasm reliably, or see what was left unsaid."
     ]},
    {h:"Archives and declassified records", body:[
      "For diplomatic and international history, the archive is the laboratory. Marc Trachtenberg’s *The Craft of International History* (2006) is a widely used guide to reading documents to answer IR questions.",
      {list:[
        "**National archives and foreign ministry archives** keep cables, memos and minutes. Many governments open records after a set period, often 20 to 30 years, with exemptions and redactions. [[declassification|Declassification]] is the formal removal of secrecy restrictions.",
        "**Published collections** make the most important documents easy to reach. The US *Foreign Relations of the United States* series, published since 1861 by the State Department’s Office of the Historian, has a legal target of publication 30 years after events and is online.",
        "**Online archives** such as Japan’s JACAR (Japan Center for Asian Historical Records), opened in 2001 under the National Archives of Japan, give free online searching of digitised records from the National Archives, the Foreign Ministry’s Diplomatic Archives and the Defence Ministry’s military history collections, from the early Meiji period to 1945, with postwar records up to 1972 being added.",
        "**Multi-archival research** compares records from several countries. After 1991, Soviet and East European archives opened partly, which transformed Cold War history."
      ]},
      "Every document needs [[source-criticism|source criticism]]: who wrote it, when, for whom, and why? A cable written to impress a minister is evidence of what an official wanted the minister to believe, not necessarily of what happened.",
      "Archives also have silences. Michel-Rolph Trouillot (*Silencing the Past*, 1995) showed that silences enter at every stage: when records are created, when they are collected into archives, when they are retrieved, and when historians decide what matters. An [[archival-silence|archival silence]] is not proof that nothing happened. Colonial archives, for example, record administrators’ views far more fully than those of the people they governed."
     ]},
    {h:"Elite interviews", body:[
      "An [[elite-interview|elite interview]] is a research interview with someone who has, or had, power or specialist knowledge: a diplomat, minister, official, officer, negotiator, NGO leader or journalist. The interview skills from Research Skills apply ({{research-interviews}}, {{interview-guide}}); elites add their own challenges.",
      {list:[
        "**Sampling.** You need the people who were in the room, so sampling is [[purposive-sampling|purposive]] and often [[snowball-sampling|snowball]]. Oisín Tansey (2007) argued that for process tracing this is a strength, not a weakness.",
        "**Access.** Officials are busy and careful. Introductions, a short clear request, flexibility and the help of [[gatekeeper-research|gatekeepers]] matter.",
        "**Attribution.** Agree the terms in advance: on the record, not for attribution, or background only. The [[chatham-house-rule|Chatham House Rule]] lets participants use what they hear, but neither the identity nor the affiliation of any speaker may be revealed.",
        "**Accuracy.** Elites may polish their own role, misremember, or repeat the official line. Jeffrey Berry (2002) urged researchers to check what they hear against other sources."
      ]},
      "Lee Ann Fujii (2010) argued that rumours, inventions, denials, evasions and silences in interviews are themselves data: they show what people feel safe saying, and why. That is why interview evidence is strongest when combined with documents and other accounts, a form of [[triangulation]].",
      {fig:'<svg viewBox="0 0 340 280"><defs><marker id="e4u3-l3-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="10" y="10" width="100" height="60" rx="8" stroke-width="2"/><text x="60" y="36" text-anchor="middle">Archives</text><text class="s" x="60" y="55" text-anchor="middle">cables, minutes</text><rect class="d-gold" x="120" y="10" width="100" height="60" rx="8" stroke-width="2"/><text x="170" y="36" text-anchor="middle">Interviews</text><text class="s" x="170" y="55" text-anchor="middle">people present</text><rect class="d-sage" x="230" y="10" width="100" height="60" rx="8" stroke-width="2"/><text x="280" y="36" text-anchor="middle">Public texts</text><text class="s" x="280" y="55" text-anchor="middle">speeches, press</text><path class="d-ink" d="M60 72 L150 128" stroke-width="2" marker-end="url(#e4u3-l3-a)"/><path class="d-ink" d="M170 72 L170 126" stroke-width="2" marker-end="url(#e4u3-l3-a)"/><path class="d-ink" d="M280 72 L190 128" stroke-width="2" marker-end="url(#e4u3-l3-a)"/><rect class="d-panel" x="95" y="130" width="150" height="46" rx="8"/><text x="170" y="158" text-anchor="middle">Your claim</text><rect class="d-sage" x="10" y="200" width="155" height="70" rx="8" stroke-width="2"/><text x="87" y="224" text-anchor="middle">They agree</text><text class="s" x="87" y="244" text-anchor="middle">stronger claim</text><text class="s" x="87" y="260" text-anchor="middle">(if independent)</text><rect class="d-rose" x="175" y="200" width="155" height="70" rx="8" stroke-width="2"/><text x="252" y="224" text-anchor="middle">They clash</text><text class="s" x="252" y="244" text-anchor="middle">ask why: who gains</text><text class="s" x="252" y="260" text-anchor="middle">from each version?</text><path class="d-ink" d="M140 178 L100 198" stroke-width="2" marker-end="url(#e4u3-l3-a)"/><path class="d-ink" d="M200 178 L240 198" stroke-width="2" marker-end="url(#e4u3-l3-a)"/></svg>', alt:"Three boxes at the top, archives (cables, minutes), interviews (people present) and public texts (speeches, press), with arrows into a central box labelled your claim. From the claim, two arrows lead to two boxes: they agree, giving a stronger claim if the sources are independent; and they clash, prompting you to ask why and who gains from each version.", cap:"Triangulating sources. Agreement helps only if the sources are independent; disagreement is itself evidence."}
     ]},
    {h:"Ethnography and fieldwork in IR", body:[
      "[[ethnography|Ethnography]] means spending long periods with people, often through [[participant-observation|participant observation]], to understand their world from the inside. IR came to it late. Cohn’s study of defence intellectuals (1987) is one early classic. Séverine Autesserre’s *Peaceland* (2014) followed international peacebuilders in the Democratic Republic of the Congo and elsewhere, and showed how everyday habits (short postings, security rules, reliance on outside expertise) shaped what interventions could achieve.",
      "The [[practice-turn|practice turn]] in IR, associated with Emanuel Adler and Vincent Pouliot (*International Practices*, 2011), studies what diplomats, soldiers and officials actually **do** day to day, which pushed more scholars into observation and fieldwork. Wanda Vrasti (2008) warned that IR sometimes borrowed ethnography as a source of colourful detail without its deeper commitments to reflexivity and to the people studied."
     ]},
    {h:"Reflexivity and positionality", body:[
      "The Research Skills track introduced [[reflexivity]] and [[positionality]] ({{trustworthiness}}). In international research they work in specific ways:",
      {list:[
        "**Passport and nationality.** Officials may see you as a representative of your country, which opens some doors and closes others.",
        "**Language.** Reading or interviewing in translation adds a layer of interpretation; say who translated and how.",
        "**Gender, age and status.** These shape who will talk to you, and what they say.",
        "**Insider or outsider.** Studying your own country’s foreign policy gives access and context, and also blind spots.",
        "**Who benefits?** Researchers from wealthy institutions have been criticised for “extractive” research that takes knowledge from places without giving back. Partnership with local scholars and sharing results help."
      ]},
      {key:"Qualitative IR evidence is strongest when you say how you chose your texts, archives or interviewees, read each source critically, combine several kinds, and reflect openly on how your position shaped the research."},
      {terms:["discourse-analysis-term","intertextuality","critical-discourse-analysis","intercoder-reliability","text-as-data","declassification","source-criticism","archival-silence","elite-interview","gatekeeper-research","chatham-house-rule","practice-turn"]}
     ]}
   ],
   try:[
    {id:"e4u3-l3-x1", type:"sort", q:"Does each project mainly use content analysis or discourse analysis?", buckets:["Content analysis","Discourse analysis"], items:[
      {t:"Count how often each G20 communiqué from 2008 to 2024 mentions “climate”, using a codebook and two coders.", b:0, why:"Systematic, repeatable counting of manifest content."},
      {t:"Show how official speeches made a military intervention seem natural by describing the target country as “chaotic” and the intervener as “responsible”.", b:1, why:"It asks how language produces meanings that make a policy thinkable."},
      {t:"Measure the share of UN Security Council resolutions per decade that refer to human rights.", b:0, why:"Counting a defined feature across a defined set of texts."},
      {t:"Trace how a country’s defence white papers built an identity of the nation as a “peace-loving middle power” against a threatening Other.", b:1, why:"Identity construction through Self and Other is classic discourse analysis."},
      {t:"Use a topic model on 10,000 General Debate speeches to see which topics rose and fell.", b:0, why:"Computer-assisted counting of patterns is text-as-data content analysis."}
    ]},
    {id:"e4u3-l3-x2", type:"match", q:"Match each observation about a speech to Doty’s tool.", pairs:[
      ["The speech calls the protesters “misguided” and “manipulated”","Predication","Predication is the qualities a text attaches to a subject."],
      ["It takes for granted that the region cannot manage its own security, without arguing for it","Presupposition","Presupposition is the background a text treats as already true."],
      ["It describes one ally as a “younger sibling” to be guided by the speaker’s country","Subject positioning","Subject positioning places subjects in relation to each other."]
    ]},
    {id:"e4u3-l3-x3", type:"number", q:"Two coders independently code 50 UN speeches for whether each frames migration as a security issue. They agree on 42 speeches. What is their simple percentage agreement?", answer:84, tol:0.5, unit:"%", why:"42 ÷ 50 = 0.84, so 84%. Remember that simple agreement overstates reliability, because some agreement happens by chance; Krippendorff’s alpha corrects for that and will be lower.", wrongs:[
      {v:16, tol:0.5, why:"That is the disagreement rate (8 ÷ 50). The question asked for agreement."},
      {v:42, tol:0.5, why:"42 is the number of speeches they agreed on, not the percentage. Divide by 50."},
      {v:8, tol:0.5, why:"8 is the number of speeches they disagreed on."}
    ]},
    {id:"e4u3-l3-x4", type:"spot", q:"A student’s paragraph about an archival find. Tap the claims that a careful historian would question.", ask:"questionable", parts:[
      {t:"A 1965 cable from the ambassador reports that the foreign minister “fully supported” the plan.", flag:false, why:"Fine as a description of what the cable says."},
      " ",
      {t:"This proves that the foreign minister fully supported the plan.", flag:true, why:"The cable shows what the ambassador reported, perhaps to please his own government. It needs other sources, such as the minister’s side, to establish what he really thought."},
      " ",
      {t:"I found no record of objections in the file, so nobody objected.", flag:true, why:"An archival silence is not proof of absence. Objections may have been oral, filed elsewhere, destroyed or still classified."},
      " ",
      {t:"I compared the cable with the minister’s own ministry records, which are open for the same year.", flag:false, why:"Fine. Multi-archival comparison is exactly the right move."},
      " ",
      {t:"Because the document was once secret, it must be more truthful than public statements.", flag:true, why:"Secret documents can also be strategic, mistaken or self-serving. Secrecy changes the audience, not the need for source criticism."}
    ]},
    {id:"e4u3-l3-x5", type:"mcq", q:"Sione attended a regional security workshop held under the Chatham House Rule. Which sentence can he put in his thesis?", options:[
      {t:"“At a closed workshop in 2025, one participant argued that the agreement would not survive a change of government.”", ok:true, why:"Right. He may use the information, but must not reveal the identity or affiliation of the speaker."},
      {t:"“A senior official from the foreign ministry of the host country argued that…”", why:"That reveals the speaker’s affiliation, which the Rule forbids."},
      {t:"“Ambassador K. Tanaka argued that…”", why:"Naming the speaker breaks the Rule."},
      {t:"Nothing at all: the Rule forbids using anything said at the meeting.", why:"The Rule explicitly allows participants to use the information they receive; it protects identities."}
    ]},
    {id:"e4u3-l3-x6", type:"mcq", q:"Mei is studying how a 2015 regional trade deal was negotiated. Why is purposive and snowball sampling of interviewees appropriate here?", options:[
      {t:"Because she needs the specific people who took part in the negotiations, and each can point her to others who were in the room.", ok:true, why:"Right. For process tracing she needs well-placed informants, not a representative sample of the population."},
      {t:"Because random samples are never used in political science.", why:"Random samples are common in surveys. They just don’t fit a question about what a few dozen negotiators did."},
      {t:"Because snowball samples are always unbiased.", why:"Snowball samples can be biased towards one network. She should aim to include people from every delegation and side."},
      {t:"Because she only needs to interview one person.", why:"One account is rarely enough. She should cross-check several accounts against documents."}
    ]},
    {id:"e4u3-l3-x7", type:"mcq", q:"Oluwaseun, a national of one of the countries in his study, finds that officials of a neighbouring country give him only the official line. What is the most useful reflexive response?", options:[
      {t:"Record in his notes how his nationality may shape what officials say to him, look for other sources, and discuss this openly in his methods section.", ok:true, why:"Right. Reflexivity means noticing how your position shapes the data, adjusting the design where possible, and being transparent about it."},
      {t:"Hide his nationality from interviewees.", why:"Deceiving participants raises serious ethical problems and could put him at risk."},
      {t:"Drop the interviews because they are biased.", why:"All interviews are shaped by context. The official line is itself data about what officials want to present."},
      {t:"Ignore it, because a good researcher’s identity never affects the research.", why:"Positionality affects access and answers in every project. Ignoring it hides a limitation from readers."}
    ]}
   ],
   apply:{intro:"Try three qualitative sources yourself. Everything here is free online and needs no account.", tasks:[
     {t:"Discourse snapshot", how:["Find one short official speech on an international issue (the UN’s General Debate website publishes national statements).","Copy three sentences.","For each, note one predication, one presupposition or one subject position.","Write one sentence on what the text makes seem natural."], write:"Speech and date… Sentence 1 and what I noticed… Sentence 2… Sentence 3… What it makes seem natural…"},
     {t:"Read a declassified document critically", how:["Open a digitised archive such as the Office of the Historian’s *Foreign Relations of the United States* volumes or JACAR.","Choose one document about any country or region.","Answer: who wrote it, when, for whom, why? What can it prove, and what can’t it?","Note one thing the document is silent about."], write:"Document… Author, date, audience, purpose… What it can show… What it can’t… A silence…"},
     {t:"Plan three elite interviews", how:["For your puzzle, list three people (by role, not by name) whose accounts you would need.","For each, note how you might reach them and what attribution terms you would offer.","List one document that could check each account.","Write two sentences on how your own position might shape the interviews."], write:"Role 1, access, terms, cross-check… Role 2… Role 3… My positionality…"},
     {t:"Seminar questions", how:["Is discourse analysis a method, a theory, or both?","Should researchers trust a once-secret document more than a public speech? Why or why not?","What does ethnography reveal about international politics that archives and datasets can’t?"], write:"A paragraph on one of the three questions…"}
   ], proof:"Notes with a short discourse analysis of three sentences, a source-criticised archival document with one silence, an elite-interview plan with cross-checks and a positionality note, and a seminar paragraph."},
   read:[
    {book:"ipsrm", where:"Chapter 7, sections 7.2 “Interviews”, 7.3 “Exploring Documentary Sources” and 7.4 “Ethnographic Research”", note:"Introductory overviews of each method; this lesson adds the IR-specific issues."},
    {book:"hurst", where:"Chapter 16, “Archival and Historical Research”", note:"How to plan an archive visit, take notes and read documents critically."},
    {book:"hurst", where:"Chapter 6, “Reflexivity”", note:"Read after the last section: practical ways to write reflexively about your position."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e4u3-l4", title:"Numbers in IR: datasets, regression and causation", minutes:60,
   hook:{q:"After civil wars, UN peacekeepers are not sent at random. If you simply compare how long peace lasts with and without peacekeepers, what tends to happen, according to Virginia Page Fortna’s 2004 study?", options:["Peacekeeping looks more effective than it really is","Peacekeeping looks less effective than it really is","The comparison is exactly right","Peace always lasts longer without peacekeepers"], answer:1, reveal:"**It looks less effective than it really is.** Fortna found that peacekeepers tend to be sent to the harder cases, where peace is most fragile. A naive comparison mixes the effect of peacekeeping with the difficulty of those cases. Once she took this into account, peacekeeping was associated with a much lower risk of war restarting. Who gets “treated”, and why, is one of the big traps this lesson teaches you to see."},
   goals:[
     "Name the main IR datasets (UCDP, Correlates of War, V-Dem, WDI, UN Comtrade, SIPRI), what they cover and their access terms",
     "Read a codebook first: definitions, units, coverage, missing data, mirror statistics and versions",
     "Explain confounding, omitted variables, reverse causality and selection bias with IR examples",
     "Say in plain words what a regression coefficient means, and what a regression can’t show",
     "Describe how nested analysis combines a large-N analysis with case studies"
   ],
   learn:[
    {h:"Why count?", body:[
      {lead:"Some IR questions are about patterns across many cases: how often, how strongly, under what conditions."},
      "A [[large-n|large-N]] study uses many observations, often thousands of country-years or dyad-years, to find patterns that no single case can show. The democratic peace, trends in armed conflict and the effects of trade agreements were all studied this way. Fortna asked a classic question in this mode: “Does peacekeeping keep peace?” (2004).",
      "Numbers and cases are partners, not rivals. Large-N work shows **whether** and **how strongly** things go together across many cases; case studies (Lesson 2) show **how** they are connected. Many strong theses use both."
     ]},
    {h:"The datasets you will meet", body:[
      "These six come up again and again in IR seminars. Each is free to use for study, with conditions; always cite the dataset and its version as the maintainers ask.",
      {table:[
        ["Dataset","What it covers","Access (checked November 2026)"],
        ["**UCDP** (Uppsala Conflict Data Program at Uppsala University, Sweden, with PRIO in Oslo for the conflict list)","Organised violence: state-based armed conflict 1946–2025; non-state conflict and one-sided violence from 1989; a georeferenced event dataset","Free, CC BY 4.0, with the listed publications cited. Current version 26.1"],
        ["**Correlates of War**","Wars 1816–2007 (intra-state wars to 2014); National Material Capabilities 1816–2022 (version 7.0) with the CINC power score; alliances and more","Free to download; cite each dataset; no commercial use, and no passing the data on without permission"],
        ["**V-Dem** (Varieties of Democracy Institute at the University of Gothenburg, Sweden)","531 indicators and 251 indices of democracy, 1789–2025 (version 16, March 2026)","Free, CC BY-SA 4.0"],
        ["**World Development Indicators** (World Bank)","About 1,600 indicators for 217 economies, some series over 50 years long","Free, CC BY 4.0"],
        ["**UN Comtrade** (UN Statistics Division)","Trade by product and partner, annual from 1962, reported by close to 200 countries and areas","Free preview; a free account for downloads and API, with limits; paid premium for bulk files"],
        ["**SIPRI** (Stockholm International Peace Research Institute)","Military expenditure 1949–2025; transfers of major conventional arms 1950–2025","Free to download for study; commercial use needs a licence"]
      ]},
      "The IR primer explained how UCDP and Correlates of War count conflicts ({{war-and-conflict}}), and the data track showed how to judge any dataset ({{judging-datasets}}). The habits below are the IR-specific ones.",
      {warn:"Versions, coverage years and terms change. Check the maintainer’s own page and record the version you used (“UCDP/PRIO Armed Conflict Dataset version 26.1”)."}
     ]},
    {h:"Read the codebook before the numbers", body:[
      "Every serious dataset has a codebook or documentation: the [[data-dictionary|data dictionary]] for researchers. Read it before you analyse anything.",
      {list:[
        "**Definitions and thresholds.** UCDP counts an armed conflict from 25 battle-related deaths a year; Correlates of War counts a war from 1,000. Neither is wrong; they measure different things.",
        "**Units and coverage.** Country-years, dyad-years or events? Which countries and years are included? Who counts as a state?",
        "**Missing data that isn’t random.** States at war, closed economies and very poor countries often report less. If missing cases differ from the rest, results based on the reporting cases can mislead.",
        "**Special units.** SIPRI’s arms-transfer figures use a “trend-indicator value” (TIV), which measures the volume of military resources transferred, not the money paid. Don’t compare TIVs with sales figures.",
        "**Revisions.** Maintainers revise past years as better information arrives, so two versions can disagree."
      ]},
      {ex:"Country A reports exports to Country B of 120 million US dollars in a year. Country B reports imports from Country A of 132 million.\nWhy the gap? UN Comtrade notes that one country’s reported imports and its partner’s reported exports usually don’t match. Imports are usually valued including freight and insurance (CIF) and exports without them (FOB); goods can be recorded in different years or under different product codes; some trade passes through third countries.\nThese partner-reported figures, called [[mirror-statistics|mirror statistics]], are also used to fill gaps when a country doesn’t report.", label:"Worked example (invented figures): mirror statistics"}
     ]},
    {h:"Correlation is not causation: the IR versions", body:[
      "You met the general rule in the sociology unit ({{correlation-causation}}). In IR it usually fails in three ways:",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e4u3-l4-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">1 · Confounding</text><rect class="d-gold" x="120" y="28" width="100" height="40" rx="8" stroke-width="2"/><text x="170" y="53" text-anchor="middle">Z</text><rect class="d-lup" x="20" y="90" width="100" height="40" rx="8" stroke-width="2"/><text x="70" y="115" text-anchor="middle">X</text><rect class="d-sage" x="220" y="90" width="100" height="40" rx="8" stroke-width="2"/><text x="270" y="115" text-anchor="middle">Y</text><path class="d-ink" d="M140 70 L95 88" stroke-width="2" marker-end="url(#e4u3-l4-a)"/><path class="d-ink" d="M200 70 L245 88" stroke-width="2" marker-end="url(#e4u3-l4-a)"/><path class="d-ink" d="M122 110 L218 110" stroke-width="2" stroke-dasharray="5 4"/><text class="s" x="170" y="146" text-anchor="middle">Z drives both; X–Y link is spurious</text><text x="170" y="182" text-anchor="middle">2 · Reverse causality</text><rect class="d-lup" x="20" y="196" width="100" height="40" rx="8" stroke-width="2"/><text x="70" y="221" text-anchor="middle">X</text><rect class="d-sage" x="220" y="196" width="100" height="40" rx="8" stroke-width="2"/><text x="270" y="221" text-anchor="middle">Y</text><path class="d-ink" d="M218 216 L124 216" stroke-width="2" marker-end="url(#e4u3-l4-a)"/><text class="s" x="170" y="256" text-anchor="middle">Y may cause X, not X cause Y</text><text class="s" x="170" y="282" text-anchor="middle">(3 · Selection: who gets X is not random)</text></svg>', alt:"Two small diagrams. First, confounding: a box Z at the top with arrows down to box X and box Y; a dashed line between X and Y; caption Z drives both, so the X–Y link is spurious. Second, reverse causality: boxes X and Y with an arrow pointing from Y back to X; caption Y may cause X, not X cause Y. A note below adds a third trap: selection, where who gets X is not random.", cap:"Three reasons a correlation between X and Y may not mean that X causes Y."},
      {list:[
        "**Confounding.** A third factor causes both. Erik Gartzke (2007) argued that part of the democratic peace reflects shared economic development and interests, which make countries both democratic and peaceful towards each other. Leaving such a factor out produces [[omitted-variable-bias|omitted-variable bias]].",
        "**[[reverse-causality|Reverse causality]].** Trade and peace go together, but which way does it run? Omar Keshk, Rafael Reuveny and Brian Pollins (2010) found the effect running mainly from conflict to trade (fighting cuts trade); Håvard Hegre, John Oneal and Bruce Russett (2010) found that trade does promote peace too. The debate is about method as much as facts.",
        "**[[selection-bias|Selection bias]].** The cases that receive the “treatment”, or the cases that end up in the data, are not a random set. Peacekeepers, aid and sanctions go to particular places for particular reasons; Fortna’s finding in the hook is the classic IR example. A study that looks only at the cases that survived, were reported or were easy to observe can mislead in the same way."
      ]},
      "Researchers often group these problems under one word, [[endogeneity|endogeneity]]: the supposed cause is not independent of the other influences on the outcome, whether because of a left-out factor, reverse causality or selection."
     ]},
    {h:"What a regression can and can’t show", body:[
      "The data track taught simple regression: a line through a cloud of points ({{linear-regression}}). Most IR studies use [[multiple-regression|multiple regression]], which estimates the link between X and Y while **holding other measured factors constant**. Think of it as comparing like with like: dyads with the same distance, size and alliance status, but different amounts of trade. Each [[control-variable|control variable]] is a factor the model holds constant in this way.",
      {ex:"Row of a regression table (invented): Trade dependence (% of GDP) · coefficient −0.03 · standard error 0.01 · p < 0.01\nIn words: in these data, dyad-years with one percentage point more trade dependence had, on average, a slightly lower estimated chance of a militarised dispute, holding distance, alliances, regime type and capabilities constant. If the true link were zero, an estimate this far from zero would rarely arise by chance alone.\nWhat it doesn’t say: that trade caused the lower risk; that it would work for any particular pair of countries; or that the effect is large.", label:"Reading a coefficient"},
      {table:[
        ["A regression can…","A regression can’t…"],
        ["describe how X and Y go together across many cases, adjusting for measured factors","adjust for factors nobody measured"],
        ["say how uncertain the estimate is","tell which way causation runs on its own"],
        ["compare the size of associations","show the mechanism inside a case"],
        ["predict within the range of the data","tell you about one country, or about conditions far outside the data"]
      ]},
      "Two more cautions. A **statistically significant** result is not necessarily a large or important one ({{statistical-significance-basics}}). And observations of the same country across many years are not independent of each other, so serious studies adjust their standard errors; a table that ignores this can look more certain than it is.",
      "To get closer to causes, researchers look for designs where the “treatment” is as good as random: a [[natural-experiment|natural experiment]]; [[difference-in-differences]], which compares how an outcome changed in a group that was affected with how it changed in a similar group that wasn’t; or an [[instrumental-variable|instrumental variable]], a factor that shifts X, is itself as good as random, and has no other route to Y. Each rests on assumptions you should look for and question."
     ]},
    {h:"Mixed methods: numbers and cases together", body:[
      "Evan Lieberman (2005) proposed [[nested-analysis|nested analysis]]: start with a large-N analysis, then use it to choose cases. If the model fits well, study **on-the-line** cases to check that the proposed mechanism really works inside them. If it fits poorly, study **off-the-line** (deviant) cases to find what the model is missing, then go back to the numbers.",
      {fig:'<svg viewBox="0 0 340 260"><path class="d-ink" d="M40 220 L330 220" stroke-width="2"/><path class="d-ink" d="M40 220 L40 15" stroke-width="2"/><text class="s" x="185" y="248" text-anchor="middle">trade dependence (X)</text><text class="s" transform="rotate(-90 18 118)" x="18" y="118" text-anchor="middle">risk of dispute (Y)</text><path class="d-gold" d="M50 50 L320 200" stroke-width="3" fill="none"/><circle class="d-softf" cx="70" cy="70" r="5"/><circle class="d-softf" cx="95" cy="72" r="5"/><circle class="d-softf" cx="120" cy="95" r="5"/><circle class="d-softf" cx="160" cy="112" r="5"/><circle class="d-softf" cx="195" cy="136" r="5"/><circle class="d-softf" cx="240" cy="150" r="5"/><circle class="d-softf" cx="270" cy="178" r="5"/><circle class="d-softf" cx="300" cy="186" r="5"/><circle class="d-sage" cx="180" cy="122" r="9" stroke-width="2"/><text class="s" x="150" y="160" text-anchor="middle">on the line:</text><text class="s" x="150" y="174" text-anchor="middle">test the mechanism</text><circle class="d-rose" cx="270" cy="60" r="9" stroke-width="2"/><text class="s" x="270" y="24" text-anchor="middle">off the line:</text><text class="s" x="270" y="38" text-anchor="middle">what is missing?</text></svg>', alt:"A scatter plot with trade dependence on the horizontal axis and risk of dispute on the vertical axis. Dots fall roughly along a line sloping down from left to right. One dot on the line is circled and labelled on the line: test the mechanism. One dot far above the line on the right is circled and labelled off the line: what is missing?", cap:"Nested analysis (invented data). The large-N result picks the cases: typical cases test the mechanism, deviant cases improve the model."},
      "This is one form of the [[mixed-methods-term|mixed methods]] designs you met in Research Skills ({{mixed-methods}}). Fortna, for example, combined statistical analysis of ceasefires with interviews and fieldwork in her later book on the same question (*Does Peacekeeping Work?*, 2008).",
      {key:"Numbers show patterns and their uncertainty; cases show mechanisms and meaning. Read every dataset’s definitions first, never read a coefficient as a cause without a design that supports it, and let each method check the other."},
      {terms:["large-n","mirror-statistics","omitted-variable-bias","reverse-causality","selection-bias","endogeneity","multiple-regression","control-variable","difference-in-differences","instrumental-variable","nested-analysis","battle-related-deaths"]}
     ]}
   ],
   try:[
    {id:"e4u3-l4-x1", type:"match", q:"Match each research need to the dataset that best fits it.", pairs:[
      ["Count state-based armed conflicts each year since 1946, from 25 battle-related deaths","UCDP","UCDP’s armed conflict data start in 1946 and use the 25-death threshold."],
      ["Compare countries’ material capabilities since 1816 with a composite power score","Correlates of War (National Material Capabilities)","The NMC data give six indicators and the CINC score from 1816."],
      ["Track changes in electoral and liberal democracy since the nineteenth century","V-Dem","V-Dem’s indicators run from 1789 to 2025."],
      ["Find which products a country exports to which partners","UN Comtrade","Comtrade records trade by product and partner country."],
      ["Compare military spending as a share of GDP since 1949","SIPRI Military Expenditure Database","SIPRI’s spending data cover 1949–2025."]
    ]},
    {id:"e4u3-l4-x2", type:"mcq", q:"Hana wants to publish a cleaned version of a dataset alongside her thesis so others can check her work. For which dataset do the maintainer’s terms say she needs written permission before passing the data on?", options:[
      {t:"Correlates of War", ok:true, why:"Right. COW’s terms forbid passing the data to third parties without written permission from the COW director and the data host, and rule out commercial use."},
      {t:"UCDP", why:"UCDP data are licensed CC BY 4.0: she may redistribute them if she cites the listed publications."},
      {t:"V-Dem", why:"V-Dem is CC BY-SA 4.0: she may share an adapted version with attribution, under the same licence."},
      {t:"World Development Indicators", why:"WDI is CC BY 4.0: sharing with attribution is allowed."}
    ]},
    {id:"e4u3-l4-x3", type:"sort", q:"Each claim is followed by a critic’s objection. Which problem is the critic pointing to?", buckets:["Confounding","Reverse causality","Selection bias"], items:[
      {t:"“Opening embassies abroad makes a country richer.” Critic: “It’s the other way round: richer countries can afford to open more embassies.”", b:1, why:"The critic says the arrow runs from wealth to embassies, the reverse of the claim."},
      {t:"“Peace agreements reached with UN mediation last: almost every agreement in our study is still in force.” Critic: “The study collected only agreements still in force today, so the ones that collapsed are missing.”", b:2, why:"The cases in the data were filtered by the outcome itself (survival), so the sample can’t show how often agreements fail."},
      {t:"“Democracy keeps pairs of countries at peace.” Critic: “Wealth and shared economic interests could make countries both democratic and peaceful towards each other.”", b:0, why:"A third factor that drives both democracy and peace is a confounder."},
      {t:"“Sanctions usually work: in most cases in the study, the target gave in.” Critic: “The cases were collected from front-page news, and the press mostly covered sanctions that ended in a dramatic climbdown.”", b:2, why:"How the cases got into the data is linked to the outcome, so the sample over-represents successes."},
      {t:"“Trade causes peace.” Critic: “Fighting cuts trade, so peaceful pairs trade more.”", b:1, why:"The critic says conflict shapes trade, the reverse direction, as Keshk, Reuveny and Pollins argued."},
      {t:"“Alliances cause higher military spending.” Critic: “A shared threat makes states both form alliances and spend more.”", b:0, why:"The threat is a third factor behind both."}
    ]},
    {id:"e4u3-l4-x4", type:"mcq", q:"A regression of dyad-years finds a negative, statistically significant coefficient on “both countries are members of the same regional organisation”, holding distance, trade and regime type constant. Which reading is most accurate?", options:[
      {t:"In these data, pairs in the same organisation had a lower estimated chance of conflict on average, among pairs alike on the measured controls; this does not by itself show that membership caused the lower risk.", ok:true, why:"Right. It is an adjusted association. Unmeasured factors, or peaceful pairs being more likely to join together, could explain it."},
      {t:"Joining a regional organisation causes peace between any two members.", why:"A regression on observational data can’t establish cause on its own, and an average says nothing certain about any particular pair."},
      {t:"Because the result is significant, the effect must be large.", why:"Significance concerns uncertainty, not size. Check the coefficient and its practical meaning."},
      {t:"The controls guarantee that nothing else could explain the result.", why:"Controls only hold constant what was measured. Omitted factors can still bias the estimate."}
    ]},
    {id:"e4u3-l4-x5", type:"spot", q:"A news paragraph about a study. Tap the sentences that overstate what the evidence shows.", ask:"overstated", parts:[
      {t:"Researchers analysed data on 150 countries from 1990 to 2020.", flag:false, why:"Fine. A description of the data."},
      " ",
      {t:"They found that countries with more women in parliament spent less on the military, holding income and region constant.", flag:false, why:"Fine, as long as it is reported as an adjusted association."},
      " ",
      {t:"This proves that electing more women would cut any country’s military budget.", flag:true, why:"An average association in observational data doesn’t prove cause, and it can’t say what would happen in any particular country."},
      " ",
      {t:"The result was statistically significant, so the effect is huge.", flag:true, why:"Significance is about uncertainty, not size. A tiny effect can be significant in a large dataset."},
      " ",
      {t:"The authors note that countries with lower threat levels may both elect more women and spend less on defence.", flag:false, why:"Fine. That is a responsible note about possible confounding."}
    ]},
    {id:"e4u3-l4-x6", type:"number", q:"Country A reports exports of 120 million US dollars to Country B. Country B reports imports of 132 million from Country A for the same year. By what percentage is B’s import figure higher than A’s export figure?", answer:10, tol:0.2, unit:"%", why:"(132 − 120) ÷ 120 = 12 ÷ 120 = 0.10, so 10%. Gaps like this are normal in mirror statistics: imports usually include freight and insurance (CIF) while exports don’t (FOB), and timing and product codes can differ.", wrongs:[
      {v:9.1, tol:0.2, why:"That divides the gap by 132 (B’s figure). The question asks how much higher B’s figure is than A’s, so divide by A’s 120."},
      {v:12, tol:0.2, why:"12 is the gap in millions of dollars, not the percentage."},
      {v:110, tol:0.5, why:"That is B’s figure as a percentage of A’s (132 ÷ 120 × 100). The question asked how much higher, which is 10%."}
    ]},
    {id:"e4u3-l4-x7", type:"mcq", q:"In a nested analysis, Dmitri’s regression of 2,000 country-years fits well. He now wants to check that the proposed mechanism really operates inside countries. Which case should he study?", options:[
      {t:"A case that sits close to the regression line, where the model predicts well.", ok:true, why:"Right. Lieberman recommends on-the-line cases for model-testing: if the mechanism isn’t visible even where the model fits, that is a warning sign."},
      {t:"The case furthest from the line.", why:"Off-the-line cases help build or repair a model that fits poorly. For testing a well-fitting model’s mechanism, choose on-the-line cases."},
      {t:"Any case chosen because it is in the news this year.", why:"Convenience isn’t a reason. In nested analysis the large-N results guide the choice."},
      {t:"No case: a good regression makes case studies unnecessary.", why:"A regression can’t show the mechanism inside a case, which is exactly what the case study adds."}
    ]},
    {id:"e4u3-l4-x8", type:"mcq", q:"A regional organisation admitted three new members in one year. Ana wants to know whether membership increased their trade with existing members. Which design gives the most convincing causal estimate?", options:[
      {t:"Compare how trade changed for the new members before and after joining with how it changed, over the same years, for similar non-members (difference-in-differences).", ok:true, why:"Right. Comparing changes in both groups removes stable differences between them and shared trends, as long as the two groups would otherwise have moved in parallel."},
      {t:"Compare the new members’ trade after joining with all non-members’ trade in the same year.", why:"Members and non-members may have differed long before joining. A single after-only comparison can’t separate membership from those differences."},
      {t:"Look only at whether the new members’ trade rose after joining.", why:"Trade might have risen anyway, because of a global boom. Without a comparison group, you can’t tell."},
      {t:"Ask officials whether membership increased trade.", why:"Interviews can reveal mechanisms, but officials’ impressions are not an estimate of the effect."}
    ]}
   ],
   apply:{intro:"Handle real IR numbers. The sources here are free; none needs an account to view.", tasks:[
     {t:"Open a dataset and read its definitions", how:["Open the World Bank’s data site or SIPRI’s military expenditure database.","Pick one indicator (for example military expenditure as a share of GDP) and three countries from different regions.","Find the definition or notes: what exactly is counted, in which units, from which source?","Note one gap or caution, such as missing years or a change in method."], write:"Source and indicator… Definition in my words… Three countries and what I saw… One caution…"},
     {t:"Translate a regression row into words", how:["Find an open-access IR article with a regression table (look in journals such as Global Studies Quarterly or Research & Politics).","Choose one coefficient.","Write one sentence saying what it means, with “on average”, “in these data” and “holding … constant”.","Write one sentence on what it can’t show."], write:"Article… Variable and coefficient… What it means… What it can’t show…"},
     {t:"Correlation detective", how:["Find a news story claiming that one international factor is “linked to” another (aid and growth, sanctions and regime change, trade and peace).","List one possible confounder, one reverse-causality story and one selection problem.","Suggest a design that would test the claim better."], write:"The claim… Confounder… Reverse causality… Selection… Better design…"},
     {t:"Seminar questions", how:["Can large-N studies ever settle a debate like the democratic peace, or only sharpen it?","Do dataset definitions (25 or 1,000 deaths, a state or not a state) build theory into the data before analysis begins?","When should a thesis use a dataset it can’t share?"], write:"A paragraph on one of the three questions…"}
   ], proof:"Notes with one indicator defined and compared across three countries, one coefficient translated into words with its limits, one news claim diagnosed, and a seminar paragraph."},
   read:[
    {book:"ipsrm", where:"Chapter 4, section 4.1 “Correlation and Causation”, and Chapter 8, section 8.4 “Interpreting Statistical Tables in Political Science Articles”", note:"A gentle guide to reading the tables you will meet in IR journals."},
    {book:"openintro", where:"Chapter 9, “Multiple and logistic regression”, Section 9.1 “Introduction to multiple regression”", note:"For the mechanics behind “holding other variables constant”, if you want them; this lesson needs no maths."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e4u3-l5", title:"From question to master’s thesis", minutes:60,
   hook:{q:"A researcher interviews people in a country where criticising the government can lead to arrest. Which of these could put participants at the greatest risk?", options:["Recording oral consent without writing down names","A signed consent form with each person’s name, kept with the interview notes","Using code numbers instead of names in the notes","Storing transcripts in encrypted files"], answer:1, reveal:"**The signed form.** The standard protection in many ethics procedures, a signature, creates a written list linking named people to what they said, which is why many researchers in such settings record oral consent instead. Elisabeth Jean Wood’s much-cited article on her fieldwork during El Salvador’s civil war (2006) shows how consent, anonymity and the safe keeping of notes all have to be rethought where research records could endanger people. Ethics in international research means thinking about who could be harmed, and how, before you collect anything. This lesson turns that and the rest of the unit into a thesis plan."},
   goals:[
     "Organise an IR literature review around debates, schools and gaps, and know where to search",
     "Write an IR research proposal whose question, framework, method, sources, ethics and timeline fit together",
     "Plan the ethics of fieldwork abroad and on sensitive topics: do no harm, consent, data security, permits and safety",
     "Follow IR writing conventions on actors, dates, names, romanisation, contested places and primary documents",
     "Outline the chapters and timeline of a master’s thesis in international studies"
   ],
   learn:[
    {h:"The IR literature review", body:[
      {lead:"A literature review in IR is not a list of what you read. It is a map of an argument the field is having."},
      "The Research Skills track taught the general craft: kinds of review, the synthesis matrix and writing synthesis rather than summary ({{literature-review}}, {{synthesis-matrix}}, {{synthesis-writing}}). IR reviews have a typical shape: they are organised by **debates** and **schools**.",
      {ex:"Puzzle: why has ASEAN survived for decades with little formal enforcement?\nCamp 1, realist accounts: members cooperate when great-power pressure makes it useful.\nCamp 2, institutionalist accounts: ASEAN lowers the costs of cooperation and builds trust through repeated meetings.\nCamp 3, constructivist accounts: shared norms of consultation and non-interference created a regional identity.\nGap: most studies examine summits and official texts; few trace how working-level officials apply the norms.", label:"Worked example: a review organised by camps"},
      "Gaps come in three main kinds: **empirical** (a region, period or actor not yet studied), **theoretical** (an explanation not yet tested, or two theories never compared) and **methodological** (a question so far answered only with one kind of evidence). See {{research-gap}}.",
      "Where to look, besides the databases you already know ({{academic-databases}}):",
      {list:[
        "**Core general journals**, such as *International Organization*, *International Studies Quarterly*, *European Journal of International Relations*, *Review of International Studies*, *Security Studies* and *Journal of Peace Research*. *Global Studies Quarterly* is free to read.",
        "**Regional journals**, such as *International Relations of the Asia-Pacific*, *The Pacific Review*, *Asian Survey* and *Journal of East Asian Studies*.",
        "**Grey literature** from governments, international organisations and [[think-tank|think tanks]] ({{grey-literature}}). Check who funds a think tank before you lean on it.",
        "**Literatures in other languages.** Work published in Japanese, Chinese, Korean, Spanish or Arabic often answers questions the English-language literature hasn’t asked. The academic Japanese unit shows how to search Japanese research ({{finding-japanese-research}})."
      ]}
     ]},
    {h:"The research proposal", body:[
      "The Research Skills track set out a one-page proposal ({{research-proposal}}). An IR proposal has the same core, with extra weight on cases, sources and access:",
      {table:[
        ["Section","What IR readers look for"],
        ["Puzzle and question","A surprise, a clear question type (Lesson 1), and why it matters"],
        ["Literature and gap","The camps, and the gap your project fills"],
        ["Framework","The theory or concepts you will use, and what they lead you to expect"],
        ["Method and cases","Why this method fits; why these cases, period and unit (Lessons 2–4)"],
        ["Sources and access","Archives, datasets, texts or interviewees; languages; visas and permits; a plan B"],
        ["Ethics","Risks to participants and to you, consent, data security, approvals"],
        ["Timeline","Realistic stages, including time to get approvals and access"]
      ]},
      "Reviewers judge above all whether the parts **fit together**, sometimes called the golden thread:",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e4u3-l5-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-lup" x="40" y="8" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="35" text-anchor="middle">Puzzle and question</text><path class="d-ink" d="M170 54 L170 68" stroke-width="2" marker-end="url(#e4u3-l5-a)"/><rect class="d-gold" x="40" y="70" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="97" text-anchor="middle">Framework and expectations</text><path class="d-ink" d="M170 116 L170 130" stroke-width="2" marker-end="url(#e4u3-l5-a)"/><rect class="d-sage" x="40" y="132" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="159" text-anchor="middle">Method, cases and unit</text><path class="d-ink" d="M170 178 L170 192" stroke-width="2" marker-end="url(#e4u3-l5-a)"/><rect class="d-soft" x="40" y="194" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="221" text-anchor="middle">Sources you can reach</text><path class="d-ink" d="M170 240 L170 254" stroke-width="2" marker-end="url(#e4u3-l5-a)"/><rect class="d-rose" x="40" y="256" width="260" height="44" rx="8" stroke-width="2"/><text x="170" y="283" text-anchor="middle">Analysis that answers it</text><path class="d-ink" d="M302 278 L326 278 L326 30 L304 30" fill="none" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#e4u3-l5-a)"/><text class="s" x="170" y="322" text-anchor="middle">check: does the analysis answer the question?</text></svg>', alt:"Five boxes in a column joined by arrows: puzzle and question, framework and expectations, method cases and unit, sources you can reach, analysis that answers it. A dashed arrow loops from the last box back to the first. Caption below: check whether the analysis answers the question.", cap:"The golden thread. Each part follows from the one above; the last must answer the first."},
      {tip:"Ask a friend to read only your question and your methods section. If they can’t see why that method answers that question, the thread is broken."}
     ]},
    {h:"Ethics of fieldwork abroad and on sensitive topics", body:[
      "The Research Skills track covered ethics review, consent and data protection ({{ethics-review}}, {{consent-process}}, {{research-data-protection}}). International fieldwork raises the stakes. The first principle is [[do-no-harm|do no harm]]: to participants, to communities, to colleagues and to yourself.",
      {list:[
        "**Risk to participants.** In repressive or conflict settings, simply being seen with a foreign researcher can be dangerous. Wood (2006) and Lee Ann Fujii (“Research Ethics 101”, 2012) argued that ethics is a continuing relationship with the people you study, not a form you complete once.",
        "**Consent that fits the setting.** Oral consent, without names written down, may be safer than a signed form. Explain in plain language, in the participant’s language, and make refusal easy.",
        "**Data security.** Use codes instead of names, keep any key separately, encrypt devices, and think about where cloud files are stored and who could demand access ({{anonymisation}}).",
        "**Local rules.** Some countries require foreign researchers to hold a research permit or a specific visa, or to obtain local ethics approval. Check early: approvals can take months.",
        "**Your safety.** A risk assessment, a check-in plan with someone at home, and your government’s travel advice are part of your institution’s [[duty-of-care|duty of care]] and your own.",
        "**Research assistants, interpreters and fixers.** They often carry more risk than you. Pay fairly, plan for their safety, and credit their work.",
        "**After you leave.** What you publish can still harm people. Think about identifying details in quotes, photos and place names."
      ]},
      "The American Political Science Association adopted *Principles and Guidance for Human Subjects Research* in 2020, a useful checklist on consent, harm, confidentiality and the wider impact of research. Research with refugees and migrants has its own guidance, introduced in the migration unit ({{researching-migration-ethically}})."
     ]},
    {h:"Writing conventions in IR", body:[
      "The academic English units and Research Skills cover argument, hedging and citation ({{building-an-argument}}, {{hedging-and-boosting}}, {{citation-styles}}, {{academic-writing}}). IR adds its own habits:",
      {list:[
        "**Say who acted.** “Japan argued” is common shorthand, but when it matters say which part of the state: the prime minister, the foreign ministry, the delegation in Geneva.",
        "**Date anything that changes.** “As of November 2026…” for membership, leaders, figures and conflicts.",
        "**Names and romanisation.** Use one system consistently: [[hepburn|Hepburn]] for Japanese, Hanyu Pinyin for Mandarin Chinese, Revised Romanization for Korean, and follow your style guide on family-name order.",
        "**Contested names.** Where countries use different names for a place, many scholars give both on first use and explain their choice; the sea between Japan and the Korean Peninsula, for example, is called the Sea of Japan in Japan and the East Sea in South Korea.",
        "**Translations.** Say whose translation you are using, and give key terms in the original language.",
        "**Primary documents.** Cite UN documents by their symbol, such as Security Council resolution S/RES/1325 (2000), and treaties by their full title and date of signature.",
        "**Citation style.** Many IR journals use an author-date style; diplomatic history often uses notes. Your programme or journal decides."
      ]}
     ]},
    {h:"The shape and timeline of a master’s thesis", body:[
      "Programmes differ in length, credits and format ({{graduate-degrees}}, {{supervision}}), and your regulations set the rules. Most IR master’s theses still follow a recognisable shape:",
      {table:[
        ["Chapter","Its job"],
        ["Introduction","The puzzle, the question, your argument in brief, why it matters, and a roadmap"],
        ["Literature review","The camps and the gap"],
        ["Framework and design","Theory or concepts, expectations, method, cases, sources, ethics and limits (sometimes two chapters)"],
        ["Analysis chapters (often two or three)","The evidence, case by case or theme by theme, tied back to the framework"],
        ["Conclusion","The answer, what it means for the debates, the limits, and what future research should do"]
      ]},
      {ol:[
        "**Months 1–2:** refine the puzzle, read, draft the proposal; apply for ethics approval and any permits.",
        "**Months 3–5:** collect evidence (archives, interviews, data); keep notes and a research log.",
        "**Months 5–7:** analyse; draft analysis chapters first, while the material is fresh.",
        "**Months 7–9:** write the framework, introduction and conclusion; revise with supervisor feedback; check citations; submit."
      ]},
      {tip:"This example assumes about nine months of thesis work; scale it to your programme. Build in slack: archives close, interviews are cancelled and approvals arrive late."},
      {key:"A good IR thesis answers a real puzzle with a design that fits: a literature mapped as a debate, a framework that does work, methods and sources that can deliver, ethics planned from the start, and writing that is precise about who, when and where."},
      {terms:["do-no-harm","duty-of-care","think-tank","hepburn"]}
     ]}
   ],
   try:[
    {id:"e4u3-l5-x1", type:"sort", q:"What kind of gap does each sentence from a literature review identify?", buckets:["Empirical","Theoretical","Methodological"], items:[
      {t:"Studies of maritime disputes have focused on the South China Sea; disputes among Pacific Island states remain almost unstudied.", b:0, why:"A region or set of cases not yet studied is an empirical gap."},
      {t:"Realist and constructivist explanations of the alliance have each been argued, but never tested against each other on the same evidence.", b:1, why:"A missing test between theories is a theoretical gap."},
      {t:"Every study of the policy so far relies on official speeches; none uses archival records or interviews.", b:2, why:"Reliance on one kind of evidence is a methodological gap."},
      {t:"No study has examined how the norm spread after 2015.", b:0, why:"A period not yet covered is an empirical gap."},
      {t:"The literature measures influence only through votes; no study uses network data on who talks to whom.", b:2, why:"A gap in how something is measured or studied is methodological."}
    ]},
    {id:"e4u3-l5-x2", type:"order", q:"Put the parts of an IR research proposal in the usual order.", items:[
      {t:"Puzzle and research question", why:"Everything else follows from the question."},
      {t:"Literature review and gap", why:"Shows what is known and what your project adds."},
      {t:"Theoretical framework and expectations", why:"Says how you will think about the question."},
      {t:"Method, case selection and sources", why:"Shows how you will answer it, and with what evidence."},
      {t:"Ethics and risk", why:"Comes once you know whom and what you will study."},
      {t:"Timeline and references", why:"The practical plan closes the proposal."}
    ]},
    {id:"e4u3-l5-x3", type:"mcq", q:"Fatima’s question is “How did officials in two foreign ministries understand the meaning of ‘regional leadership’ between 2010 and 2020?” Her methods section proposes a regression of 160 countries’ voting in the UN General Assembly. What is the problem?", options:[
      {t:"The method doesn’t fit the question: an interpretive question about officials’ understandings needs texts, interviews or archives, not a cross-national regression.", ok:true, why:"Right. The golden thread is broken. Either the question or the method should change so that the two match."},
      {t:"Regression is never acceptable in IR.", why:"Regression is widely used in IR. It just doesn’t answer this question."},
      {t:"She needs more countries in her regression.", why:"More countries won’t help a question about what officials in two ministries understood."},
      {t:"There is no problem, because voting data are objective.", why:"Votes record what states did, not what officials meant. The question is about meanings."}
    ]},
    {id:"e4u3-l5-x4", type:"sort", q:"Fieldwork with activists in a country where dissent is risky. Is each practice good practice or a serious ethical problem?", buckets:["Good practice","Serious problem"], items:[
      {t:"Recording oral consent, with no names written down, after explaining the risks in the participant’s language.", b:0, why:"It protects participants while still making consent informed."},
      {t:"Keeping a spreadsheet of participants’ real names and phone numbers next to their interview transcripts on an unencrypted laptop.", b:1, why:"If the laptop is lost or seized, it links named people to what they said."},
      {t:"Checking whether the country requires a research permit before travelling.", b:0, why:"Local rules matter, and ignoring them can put you and your partners at risk."},
      {t:"Posting photos from meetings on social media to show the project’s progress.", b:1, why:"Photos can identify participants and places to the authorities."},
      {t:"Paying the local interpreter fairly and planning for their safety as well as your own.", b:0, why:"Research assistants often carry more risk than the researcher."},
      {t:"Telling participants their identities will be protected, then quoting them with job titles and towns in a blog post.", b:1, why:"Details like job and town can identify people, breaking the promise of confidentiality."}
    ]},
    {id:"e4u3-l5-x5", type:"spot", q:"A paragraph from a draft thesis. Tap the sentences that break IR writing conventions.", ask:"breaks a convention", parts:[
      {t:"In 2015, the Japanese government’s cabinet approved a new development cooperation charter.", flag:false, why:"Fine. It says which part of the state acted and when."},
      " ",
      {t:"Today the organisation has eleven members.", flag:true, why:"Membership changes. Write “As of November 2026, …” so the claim stays accurate."},
      " ",
      {t:"A senior official told me the policy was “a mistake” (my translation from Japanese).", flag:false, why:"Fine. It says the translation is the author’s own."},
      " ",
      {t:"The islands, which are obviously the rightful territory of Country A, were discussed at the summit.", flag:true, why:"This takes sides on a contested claim. Use neutral wording, give both names where they differ, and attribute positions to those who hold them."},
      " ",
      {t:"Security Council resolution S/RES/1325 (2000) is cited by its symbol and year.", flag:false, why:"Fine. That is how UN documents are cited."},
      " ",
      {t:"China thought this was unacceptable.", flag:true, why:"Too vague for analysis. Who thought so: the foreign ministry, a spokesperson, state media? Say who, and cite the source."}
    ]},
    {id:"e4u3-l5-x6", type:"match", q:"Match each thesis chapter to its job.", pairs:[
      ["Introduction","States the puzzle, the question, the argument in brief and a roadmap","Readers should know your answer and route from the first chapter."],
      ["Literature review","Maps the debate and shows the gap","It organises the field into camps and locates your contribution."],
      ["Framework and design","Sets out theory, expectations, method, cases and sources","It explains how the analysis will be done and why."],
      ["Analysis chapters","Present and interpret the evidence, tied back to the framework","They do the empirical work."],
      ["Conclusion","Gives the answer, its implications, limits and future research","It closes the loop opened in the introduction."]
    ]},
    {id:"e4u3-l5-x7", type:"mcq", q:"A local research assistant arranged most of Ana’s interviews, translated them and helped interpret what people meant. What should Ana do when she writes up?", options:[
      {t:"Acknowledge the assistant’s contribution as agreed with them, and discuss co-authorship if their intellectual contribution was substantial, while protecting their identity if naming them would be risky.", ok:true, why:"Right. Fair credit matters, and so does safety: some assistants want to be named, others must not be."},
      {t:"Leave the assistant out, because only the thesis author did research.", why:"Erasing the work of local collaborators is a long-criticised problem in international research."},
      {t:"Name the assistant in full in every chapter, without asking.", why:"In some settings being named could put the assistant at risk. Ask first."},
      {t:"Pay the assistant less, because they are local.", why:"Fair pay is part of ethical research practice."}
    ]}
   ],
   apply:{intro:"Put the unit together into the first pieces of a thesis. Keep these notes: they can become your proposal.", tasks:[
     {t:"Map the literature as a debate", how:["For your puzzle, name two or three camps that answer it differently.","For each, note one key work you could start from (author, year).","Write one sentence naming the gap and its kind (empirical, theoretical or methodological)."], write:"Puzzle… Camp 1 and a key work… Camp 2… Camp 3… The gap and its kind…"},
     {t:"Draft a one-page proposal and test the thread", how:["Write one or two sentences for each proposal section in the table.","Draw arrows between them in your notes: does the method fit the question? Can you reach the sources?","Change whichever part breaks the thread."], write:"Question… Framework… Method and cases… Sources and access… Ethics… Timeline… What I changed…"},
     {t:"Fieldwork risk check", how:["Imagine your project needed fieldwork in another country.","List three risks to participants, two to yourself and one to any assistant.","For each, write one step that reduces it.","Note which permits or approvals you would need to check."], write:"Risks to participants and steps… Risks to me… Risk to an assistant… Permits and approvals to check…"},
     {t:"Seminar questions", how:["Should IR theses always be puzzle-driven, or are descriptive and normative theses just as valuable?","Can ethics review boards designed for medical research judge the risks of political fieldwork abroad?","Is it possible to write neutrally about a contested territory? What choices does it involve?"], write:"A paragraph on one of the three questions…"}
   ], proof:"Notes with a literature map of two or three camps and a named gap, a one-page proposal checked for alignment, a fieldwork risk check, and a seminar paragraph."},
   read:[
    {book:"ipsrm", where:"Chapter 9, “Research Ethics”, sections 9.1–9.3 (“Ethics in Political Research”, “Research Ethics”, “Navigating Qualitative Data Collection”)", note:"Read it with the ethics section of this lesson."},
    {book:"ipsrm", where:"Chapter 1, section 1.5 “Research Paper Project Management”", note:"Practical planning for a long research project."},
    {book:"bhatt", where:"Chapter 3, “The Research Process”", note:"The research process from question to proposal, as background to the IR proposal here."}
   ]
  }
  ],
  checkpoint:["e4u3-q02","e4u3-q06","e4u3-q11","e4u3-q14","e4u3-q17","e4u3-q21","e4u3-q24","e4u3-q28","e4u3-q31","e4u3-q35","e4u3-q39","e4u3-q43"],
  codex:[
   {id:"research-puzzles", title:"Puzzles and research questions in IR", aka:["research puzzle","puzzle-driven research","how-possible questions"], tags:["research methods","international relations","research design"],
    summary:"How IR researchers turn a topic into a puzzle: a question built around a surprise, with several plausible answers, and a clear question type.",
    levels:{
     starter:[
      "A topic is something you are interested in, such as ASEAN or peacekeeping. A puzzle is a question about it that starts from a **surprise**: something that happened, or didn’t, that you wouldn’t expect from existing theories or common sense.",
      "“Why has ASEAN lasted since 1967 when SEATO, an earlier organisation in the same region, was dissolved in 1977?” is a puzzle. It names a contrast that needs explaining, and more than one answer is plausible.",
      "Puzzles make research focused. They tell you what evidence to look for (the evidence that would tell the rival answers apart) and they make your contribution easy to state: “Here is a surprise, and here is my explanation.”",
      {key:"A good puzzle says what is surprising, against which expectation, and has more than one plausible answer."}
     ],
     builder:[
      "IR questions come in several kinds, and each needs different evidence:",
      {table:[
        ["Kind","Asks","Typical evidence"],
        ["Why","What caused it?","Comparisons, process tracing, large-N data"],
        ["How","Through what process?","Within-case evidence, sequences"],
        ["How-possible","What made it thinkable?","Texts and discourses"],
        ["What","What happened, how often?","Careful description, counting"],
        ["Should","What ought to be done?","Normative argument"]
      ]},
      "Roxanne Lynn Doty (1993) proposed the how-possible question in a study of US counterinsurgency policy in the Philippines: instead of asking why the policy was chosen, she asked how official texts made it seem natural.",
      "To build a puzzle, write the expectation first (“Realists expect…”, “Most studies assume…”), then the fact that doesn’t fit. Check the literature to make sure the puzzle hasn’t already been solved, and check that you could reach the evidence.",
      {"ex": "Topic: fisheries diplomacy in the Pacific.\nExpectation: small states usually bargain weakly with large, distant powers.\nSurprise (to check in the sources): a group of small island states won better terms from foreign fishing fleets than some larger coastal states did.\nPuzzle: why did these small states do so well?\nRival answers: collective bargaining as a bloc; control of a scarce resource; outside allies; skilled negotiators.", "label": "Worked example (invented framing)"},
      "A quick checklist: the expectation is named; the surprising fact is verified; there are at least two rival answers; you know what evidence would tell them apart; and you can reach that evidence."
     ],
     pro:[
      "Dina Zinnes’s 1980 presidential address to the International Studies Association, “Three Puzzles in Search of a Researcher”, is often cited for the puzzle approach. Today puzzle-driven framing is a common expectation in IR theses and journal articles, though not universal: descriptive work (for example, building a conflict dataset) and normative theory are recognised contributions in their own right.",
      "Puzzles carry assumptions. A puzzle is only surprising relative to a theory, so the framing quietly privileges that theory. Interpretive scholars sometimes prefer “problematisation”: questioning what the field takes for granted, rather than explaining an anomaly within it.",
      "Two common faults in master’s proposals: a puzzle that is really a gap in the literature with no surprise (“no one has studied X”), and a puzzle that contains its own answer (“Why did the policy fail?” before showing failure). A useful test is to write the two or three rival answers and the evidence that would favour each; if you can’t, the puzzle needs work.",
      "The Research Skills track’s FINER criteria (feasible, interesting, novel, ethical, relevant) apply to IR puzzles as to any question ({{finer-pico}}).",
      "In interpretive work the puzzle is often a tension in meanings rather than an anomaly for a theory: how does a government describe itself as peace-loving while expanding its armed forces, and how is that combination made to seem coherent?"
     ]
    },
    related:["explaining-understanding","research-questions","finer-pico","ir-thesis"],
    read:[{book:"ipsrm", where:"Chapter 3, “The Scientific Method”"}],
    sources:[{t:"Introduction to Political Science Research Methods (LibreTexts)", url:"https://socialsci.libretexts.org/Bookshelves/Political_Science_and_Civics/Introduction_to_Political_Science_Research_Methods_(Franco_et_al.)"}], checked:"2026-11"},

   {id:"explaining-understanding", title:"Explaining and understanding", aka:["Hollis and Smith","two stories","causal and constitutive claims","Erklären and Verstehen"], tags:["research methods","international relations","philosophy of social science"],
    summary:"Hollis and Smith’s distinction between outside explanations (causes and regularities) and inside understanding (meanings), and the related difference between causal and constitutive claims.",
    levels:{
     starter:[
      "There are two ways to make sense of what states and people do. **Explaining** looks from the outside, like a natural scientist, for causes and patterns: what made the war more likely? **Understanding** looks from the inside, like a historian, at what actions meant to the people involved: what did “victory” mean to them?",
      "Martin Hollis and Steve Smith built *Explaining and Understanding International Relations* (1990) around this contrast, arguing that there are always two stories to tell.",
      "Neither story is better in general. They answer different questions, so a research design should be clear about which one it is telling.",
      {key:"Explaining asks what caused something; understanding asks what it meant."},
      "Example: explaining asks why some regional organisations last longer than others; understanding asks what “consensus” means to the diplomats who practise it."
     ],
     builder:[
      "The distinction shapes every part of a design:",
      {table:[
        ["","Explaining","Understanding"],
        ["Aim","General causal claims","Reconstruct meanings in context"],
        ["Evidence","Patterns across cases","Texts, speech, practices, interviews"],
        ["Typical methods","Comparison, statistics, process tracing","Discourse analysis, interpretive history, ethnography"],
        ["Success looks like","A cause that holds across cases","A reading others find convincing and well evidenced"]
      ]},
      "Alexander Wendt (1998) added a related distinction. **Causal** claims say X brought about Y. **Constitutive** claims say what makes Y what it is: a state is sovereign because others recognise it; a person is a refugee because a legal category defines them so. Constitutive claims aren’t weaker; they answer “what is it?” and “how is it possible?” rather than “what caused it?”.",
      "The IR primer introduced the triad of explaining, understanding and judging ({{ir-theory}}); this entry focuses on what it means for research.",
      "What each choice commits you to. If you are **explaining**, specify the cause or mechanism, the rival explanations, and the cases or data that let you compare them. If you are **understanding**, specify whose meanings you are reconstructing, from which texts or practices, how you will read them in their language and context, and how you will show readers that your reading is well founded.",
      "A thesis can tell both stories, for example an interpretive chapter on how leaders saw a threat followed by a causal chapter on what that perception led to. Say clearly which story each chapter tells."
     ],
     pro:[
      "Hollis and Smith linked the two stories to the levels of analysis, producing a grid of explanatory and interpretive accounts at the system and unit levels, and argued that the two kinds of account rest on different assumptions and do not combine neatly into one. Later work has debated whether that is right.",
      "Some argue that understanding can feed into explanation: actors’ reasons can be causes (a position associated with critical realism and with some rational-choice scholars). Others, following interpretive traditions from Weber’s *Verstehen* onwards, hold that meaning-making is not a cause like any other, because the researcher is interpreting interpretations.",
      "In seminars, a frequent confusion is to criticise an interpretive study for “not testing a hypothesis”, or a statistical study for “ignoring meaning”. The fair question is whether each study does well what it set out to do, and whether its question was worth asking.",
      "Patrick Thaddeus Jackson’s *The Conduct of Inquiry in International Relations* (2011) offers a more detailed map of these positions ({{positivism-interpretivism}}).",
      "Max Weber tried to join the two: he defined sociology as a science that seeks to understand social action interpretively and thereby to explain its course and effects causally. Whether such “explanatory understanding” is possible is one of the questions Hollis and Smith left open."
     ]
    },
    related:["positivism-interpretivism","ir-theory","research-puzzles","discourse-analysis"],
    read:[{book:"bhatt", where:"Chapter 12, “Interpretive Research”"}],
    sources:[{t:"E-International Relations: International Relations Theory (open textbook)", url:"https://www.e-ir.org/p/international-relations-theory"}], checked:"2026-11"},

   {id:"positivism-interpretivism", title:"Positivism, interpretivism and critical realism", aka:["ontology","epistemology","methodology","post-positivism","the third debate"], tags:["research methods","philosophy of social science","international relations"],
    summary:"The big philosophical positions behind IR research, explained through four layers: ontology, epistemology, methodology and methods.",
    levels:{
     starter:[
      "Every study rests on beliefs about what the social world is like and how we can know it. Seminars use four words for these layers: **ontology** (what exists), **epistemology** (how we can know), **methodology** (the logic linking evidence to claims) and **methods** (the tools).",
      "**Positivists** think the social world has regular patterns we can observe and test, much as natural scientists do. **Interpretivists** think it is made of meanings people create, so research must interpret them in context.",
      "Many researchers sit in between. Knowing where a study stands helps you judge it by the right standards.",
      {key:"Methods are tools. Which tools make sense depends on the philosophy behind the question."},
      "Picture two people studying the same football match. One counts passes and shots to find what predicts goals. The other asks what the match means to the fans and players. Same event, different assumptions about what is worth knowing and how to know it."
     ],
     builder:[
      {table:[
        ["","Positivism","Interpretivism"],
        ["The social world","Has regularities independent of the observer","Is made of shared meanings"],
        ["Aim","General explanation, testable hypotheses","Understanding in context"],
        ["Researcher","Should be as neutral as possible","Is part of the world studied; reflects on it"],
        ["Quality","Validity, reliability, replication","Transparency, reflexivity, plausibility of readings"]
      ]},
      "King, Keohane and Verba’s *Designing Social Inquiry* (1994) argued that qualitative and quantitative research share a single logic of inference. Brady and Collier’s edited *Rethinking Social Inquiry* (2004) replied that qualitative research has distinct tools, while sharing standards. Mahoney and Goertz (2006) described “a tale of two cultures” with different goals and habits.",
      "**Critical realism** holds that real structures and mechanisms exist even if not directly observable, and that research should identify them rather than only record regularities.",
      "Yosef Lapid (1989) called the arrival of post-positivist approaches in IR the field’s “third debate”.",
      "Each tradition has its own quality checklist.",
      {"list": ["**Positivist**: are concepts measured validly? Are hypotheses stated so that evidence could count against them? Are rival explanations controlled? Could someone else replicate the result?", "**Interpretive**: is the choice of material explained? Is each reading grounded in quoted evidence? Are language and history respected? Does the researcher reflect on their own position? Could readers follow the interpretive steps?"]}
     ],
     pro:[
      "Patrick Thaddeus Jackson (*The Conduct of Inquiry in International Relations*, 2011) proposed a more precise map based on two “wagers”: whether the mind and the world are separate (dualism) or not (monism), and whether knowledge is limited to what can be experienced (phenomenalism) or can reach beyond it (transfactualism). Crossing them gives four methodologies: **neopositivism**, **critical realism**, **analyticism** (associated with Weber’s ideal types) and **reflexivity** (associated with critical theory).",
      "Jackson’s point is that each methodology has its own internal standards of good work, so “science” in IR is plural. Critics reply that pluralism can become an excuse for not comparing approaches at all.",
      "In practice, master’s examiners look for **consistency**: a thesis that claims an interpretive stance but then talks about “testing variables”, or one that claims to test hypotheses but never says what evidence would count against them, will be marked down for incoherence rather than for its philosophy.",
      "The sociology unit introduced [[positivism]], [[antipositivism]] and [[verstehen]] in their original sociological context.",
      "“Post-positivist” is an umbrella for many positions: constructivist, critical theory, feminist, post-structuralist, postcolonial. They don’t all reject science. Alexander Wendt’s *Social Theory of International Politics* (1999) presented his constructivism as a “via media”, combining a scientific-realist epistemology with an ontology centred on ideas, which shows that the layers of the stack can be mixed in different ways."
     ]
    },
    related:["explaining-understanding","research-designs","qualitative-approach","mixed-methods"],
    read:[{book:"ipsrm", where:"Chapter 3, section 3.1 “Philosophy of Science”"},{book:"bhatt", where:"Chapter 12, “Interpretive Research”"}],
    sources:[{t:"Introduction to Political Science Research Methods, Chapter 3 (LibreTexts)", url:"https://socialsci.libretexts.org/Bookshelves/Political_Science_and_Civics/Introduction_to_Political_Science_Research_Methods_(Franco_et_al.)"}], checked:"2026-11"},

   {id:"concept-formation", title:"Concepts and measurement in IR", aka:["concept stretching","ladder of abstraction","Sartori","democracy with adjectives","measurement validity"], tags:["research methods","concepts","measurement"],
    summary:"How IR researchers define slippery concepts such as war, democracy and power, avoid concept stretching, and see why different datasets measure the same concept differently.",
    levels:{
     starter:[
      "Words like war, democracy and power seem obvious until you try to count them. Is a clash with 30 deaths a war? Is a country with elections but banned opposition parties a democracy?",
      "Researchers first decide what a concept means (its attributes), then how to observe it (its indicators). Different decisions produce different numbers, which is why two studies of “war” can disagree.",
      "Giovanni Sartori (1970) warned against **concept stretching**: widening a concept to fit new cases until it no longer distinguishes anything.",
      {key:"Always check how a study defines and measures its key concept before comparing its findings with another study."},
      "Another example: “regional integration” could mean trade between neighbours, shared institutions, people moving freely, or a shared identity. A study has to say which, or how it combines them."
     ],
     builder:[
      "Sartori’s **ladder of abstraction**: concepts with more attributes cover fewer cases; concepts with fewer attributes cover more. To compare widely, climb the ladder (use a more general concept) rather than stretching a narrow one.",
      "David Collier and Steven Levitsky (“Democracy with Adjectives”, 1997) found more than 550 subtypes of democracy in the literature. They showed how researchers add adjectives (“electoral”, “illiberal”) to keep the concept precise while covering new cases.",
      {table:[
        ["Concept","Example measures"],
        ["War","Correlates of War: 1,000 battle-related deaths; UCDP: armed conflict from 25 a year, war from 1,000"],
        ["Democracy","V-Dem’s indices (electoral, liberal, participatory, deliberative, egalitarian) or a simple elections-based rule"],
        ["Power","The CINC score from six material indicators, or influence over outcomes"]
      ]},
      "The Research Skills track covers conceptualisation and operationalisation in general ({{theory-hypotheses}}).",
      "A practical sequence, following Adcock and Collier (2001):",
      {"ol": ["Start from the **background concept**: the broad idea as it is used in debates.", "Write a **systematised concept**: your explicit definition and its attributes.", "Choose **indicators** for each attribute.", "Produce **scores** for each case, and check them against what you know of the cases."]},
      "Then ask: does each indicator capture an attribute? Is any attribute unmeasured? Would the measure mean the same thing in different countries and periods? An established measure helps comparison, but only if it fits your definition."
     ],
     pro:[
      "Robert Adcock and David Collier (2001) proposed a shared standard of measurement validity for qualitative and quantitative work, distinguishing the broad **background concept**, the researcher’s **systematised concept**, the **indicators** and the resulting **scores**. Validity problems can arise at each step.",
      "Gary Goertz (*Social Science Concepts*, 2006) contrasted concepts defined by **necessary and sufficient** conditions with **family resemblance** concepts, where a case qualifies by having enough of several attributes. Many democracy indices quietly mix the two.",
      "Measures can carry theory into the data. The CINC score treats power as material capability, which fits realist theory; it can’t capture influence, legitimacy or soft power. Battle-death thresholds exclude many deadly but low-intensity conflicts. A thesis should say why its measure suits its question, not only which one it used.",
      "Translation adds another layer: concepts such as “security” or “sovereignty” may not map one-to-one onto terms in other languages and political traditions.",
      "**Measurement equivalence** is a constant worry in cross-national work: the same indicator can mean different things in different places (whether “military personnel” includes paramilitary forces, for example). Good studies compare sources, report results under alternative measures (rerunning an analysis with both UCDP and Correlates of War definitions, say), and explain any differences."
     ]
    },
    related:["theory-hypotheses","ir-datasets","political-economic-datasets","war-and-conflict"],
    read:[{book:"ipsrm", where:"Chapter 5, “Conceptualization, Operationalization, Measurement”"}],
    sources:[{t:"Collier and Levitsky, “Democracy with Adjectives”, World Politics (1997)", url:"https://www.cambridge.org/core/journals/world-politics/article/abs/democracy-with-adjectives-conceptual-innovation-in-comparative-research/123102E4AC2E58D7A3EB6C5EAE6DB5BD"},{t:"Correlates of War: COW War Data, 1816–2007", url:"https://correlatesofwar.org/?p=347"},{t:"V-Dem: The V-Dem Dataset", url:"https://v-dem.net/data/the-v-dem-dataset/"}], checked:"2026-11"},

   {id:"case-study-research", title:"Case study research", aka:["case studies","small-N research","within-case analysis"], tags:["research methods","case studies","qualitative methods"],
    summary:"What a case study is, what a case is “a case of”, the universe of cases and scope conditions, and what case studies can and can’t show.",
    levels:{
     starter:[
      "A case study looks closely at one case, or a few, to learn something about a wider group of similar cases. A study of one peace process can teach us about peace processes in general.",
      "The first question is always: **what is this a case of?** The same event can be a case of different things. The 1962 missile crisis is a case of nuclear deterrence, of crisis decision-making and of great-power intervention.",
      "Case studies are good at showing how and why something happened. They are not good at saying how common something is.",
      {key:"A case study is about a wider class of cases. Say which class."},
      "Example: one country’s response to a sudden financial crisis can be studied closely to learn how countries in general respond to capital flight."
     ],
     builder:[
      "John Gerring (2004) defined a case study as an intensive study of a single unit for the purpose of understanding a larger class of similar units. Key terms:",
      {list:[
        "**Universe of cases**: the wider set your conclusions speak to.",
        "**Scope conditions**: where the argument is meant to hold (time, region, kind of actor).",
        "**Within-case analysis**: evidence from inside a case, such as sequences and documents (see {{process-tracing}}).",
        "**Cross-case analysis**: comparing several cases (see {{comparative-method}})."
      ]},
      "Graham Allison’s *Essence of Decision* (1971) is a classic IR case study, using one crisis to compare three models of government decision-making.",
      "Cases should be chosen on purpose and the choice justified ({{case-selection}}).",
      "Case-study designs range from a **single case** studied in depth, through a **paired comparison**, to **small-N** comparisons of perhaps three to ten cases. The evidence is usually mixed: documents, interviews, statistics about the case and sometimes observation.",
      "Whatever the size, the design should answer five questions: What is this a case of? Why this case? What are the rival explanations? What evidence within the case will tell them apart? Within which scope conditions will the conclusions hold?"
     ],
     pro:[
      "Case study findings generalise **analytically** (to a theory, within scope conditions) rather than **statistically** (to a population). Strong case studies say which other cases the argument should apply to, which makes it testable elsewhere.",
      "Alexander George’s method of **structured, focused comparison** (1979; developed with Andrew Bennett, 2005) asks the same set of questions of each case, focused on the research objective, so cases can be compared systematically.",
      "Arend Lijphart’s 1971 typology distinguished atheoretical, interpretative, hypothesis-generating, theory-confirming, theory-infirming and deviant case studies. Harry Eckstein (1975) argued that crucial cases can test theories, not only illustrate them.",
      "Critics of single-case designs point to the “many variables, small N” problem and to selection bias; defenders point to case studies’ strength in measuring concepts carefully, finding mechanisms and generating new hypotheses. Most methodologists now see case studies and large-N work as complementary.",
      "A single case can contain many observations: one crisis involves dozens of decisions, each of which can be checked against a theory’s expectations. The methodologist Donald Campbell, who had once dismissed the “one-shot” case study, argued in “Degrees of Freedom and the Case Study” (1975) that a theory usually predicts many things within a case, so a case can test it more than critics assumed."
     ]
    },
    related:["case-selection","comparative-method","process-tracing","field-research"],
    read:[{book:"ipsrm", where:"Chapter 7, section 7.5 “Case Studies”"},{book:"bhatt", where:"Chapter 11, “Case Research”"}],
    sources:[{t:"Review of George and Bennett, Case Studies and Theory Development in the Social Sciences (Perspectives on Politics)", url:"https://www.cambridge.org/core/journals/perspectives-on-politics/article/case-studies-and-theory-development-in-the-social-sciences/8CA6E1BDD7C587626D152C7E7F392813"}], checked:"2026-11"},

   {id:"case-selection", title:"Case selection", aka:["typical case","deviant case","crucial case","most-likely case","least-likely case","selection bias","selecting on the dependent variable"], tags:["research methods","case studies"],
    summary:"How and why researchers choose particular cases (typical, deviant, extreme, most-likely, least-likely) and the trap of selecting on the dependent variable.",
    levels:{
     starter:[
      "With only a few cases, which ones you pick shapes what you find. So case studies choose cases on purpose and explain why.",
      "A **typical** case fits the usual pattern. A **deviant** case breaks it. A **most-likely** case is where a theory should certainly work; a **least-likely** case is where it should struggle.",
      "The big trap is studying only cases where the outcome happened (only wars, only revolutions). Then you can’t tell whether the factors they share really make a difference.",
      {key:"Explain your case choice in writing, and include cases where the outcome didn’t happen when you want to know what causes it."},
      "Think of a doctor studying a disease: a typical patient shows how it usually works, an unusual recovery shows what might help, and a patient who should have recovered but didn’t shows what the textbook misses."
     ],
     builder:[
      "Jason Seawright and John Gerring (2008) set out a menu of techniques, several of which rely on a large-N analysis first:",
      {table:[
        ["Technique","Choose…","Use"],
        ["Typical","cases the general model fits well","illustrate or test the mechanism"],
        ["Diverse","cases covering the full range of values","represent variation"],
        ["Extreme","cases with unusually high or low values","explore a factor"],
        ["Deviant","cases the model predicts badly","find missing factors"],
        ["Influential","cases that drive the large-N result","check whether they are coded correctly"],
        ["Most-similar / most-different","pairs matched or contrasted on background factors","isolate causes"]
      ]},
      "Eckstein’s (1975) **crucial cases** come in two forms: most-likely (failure is damaging) and least-likely (success is impressive).",
      "Write the justification into the proposal: name the universe of cases, the selection technique, and what the case lets you learn. State practical reasons (language, access, time) honestly.",
      {"ex": "“Within the universe of Southeast Asian states from 1990 to 2020, Country X is a least-likely case for the socialisation argument: it joined the region’s organisation late and strongly defended non-interference. If socialisation is visible even here, the argument gains support.”", "label": "Example justification (invented)"},
      "Seawright and Gerring’s techniques assume a cross-case model to select from. Where none exists, choose using theory and existing knowledge, and say so."
     ],
     pro:[
      "**Selecting on the dependent variable** became a well-known warning through Barbara Geddes (1990) and King, Keohane and Verba (1994): if the outcome doesn’t vary, you can’t estimate a cause’s effect. David Collier and James Mahoney (1996) qualified the warning: for some goals, such as identifying necessary conditions or tracing the process within cases, cases with the outcome are exactly what you need, and the real issues are trade-offs among goals.",
      "Random selection, the remedy in large samples, is unreliable with few cases, because a random draw can easily miss the cases that matter. Purposive selection is therefore the norm, but it must be transparent.",
      "In practice, many theses choose cases for access or language. That is acceptable if stated honestly and if the analysis doesn’t claim more than the cases allow. Examiners penalise unacknowledged convenience more than acknowledged constraints.",
      "Lijphart’s Netherlands (1968) is the textbook deviant case: a stable democracy despite deep divisions, which led him to develop the theory of consociational democracy.",
      "Gerring’s later *Case Study Research: Principles and Practices* (2007) added the **pathway case**, in which the effect of the factor of interest can be seen separately from other causes, which makes it especially useful for tracing a mechanism."
     ]
    },
    related:["case-study-research","comparative-method","sampling-methods","regression-causal-inference"],
    sources:[{t:"Seawright and Gerring, “Case Selection Techniques in Case Study Research”, Political Research Quarterly (2008)", url:"https://journals.sagepub.com/doi/10.1177/1065912907313077"}], checked:"2026-11"},

   {id:"comparative-method", title:"Mill’s methods and small-N comparison", aka:["method of agreement","method of difference","most similar systems design","most different systems design","QCA","qualitative comparative analysis"], tags:["research methods","comparison","case studies"],
    summary:"The logic of comparing a few cases, from Mill’s methods of agreement and difference to most-similar and most-different designs and QCA, with their limits.",
    levels:{
     starter:[
      "Comparing a few cases is like a careful experiment you can’t run. If two countries are alike in almost every way but one, and their outcomes differ, that one difference is a good suspect.",
      "John Stuart Mill described two basic methods in 1843. The **method of difference** compares cases with different outcomes to find what differs. The **method of agreement** compares cases with the same outcome to find what they share.",
      "These ideas live on as the **most-similar** and **most-different** research designs.",
      {key:"Comparison narrows the suspects. It rarely convicts one without evidence from inside the cases."},
      "Example: two neighbouring states that are alike in almost every way choose differently about joining a trade agreement. What differs between them is the first place to look."
     ],
     builder:[
      "Przeworski and Teune (1970) set out the two designs:",
      {table:[
        ["Design","Cases","Logic"],
        ["Most-similar","Alike on background, different outcome","Method of difference"],
        ["Most-different","Unlike on background, same outcome","Method of agreement"]
      ]},
      "Theda Skocpol’s *States and Social Revolutions* (1979) combined both to compare revolutions in France, Russia and China with cases where revolution did not occur.",
      "Charles Ragin’s *The Comparative Method* (1987) introduced **qualitative comparative analysis** (QCA), which uses set logic to find combinations of conditions linked to an outcome across a moderate number of cases.",
      "Mill actually described five methods (sometimes called canons): agreement, difference, the **joint method** of agreement and difference, the method of **residues** (subtracting known effects to find what remains), and **concomitant variation** (things that vary together). Small-N researchers mostly use the first three.",
      {"ex": "Three states with very different regimes, economies and regions all created independent anti-corruption agencies in the same decade.\nMethod of agreement: what did they share? Perhaps each had just signed the same international convention.\nNext step: check states that signed the convention but did not create an agency, and trace the process in each case.", "label": "Worked example (invented)"},
      "Alexander George’s **structured, focused comparison** makes any comparison more rigorous by asking the same theoretically chosen questions of every case."
     ],
     pro:[
      "Limits: Mill doubted the methods suited social phenomena, where causes are plural and interact. Lijphart (1971) named the “many variables, small N” problem. Stanley Lieberson (1991) showed that Mill’s methods assume deterministic causes and error-free measurement, so with few cases one miscoded case can flip a conclusion.",
      "**Equifinality** (several paths to one outcome) and **conjunctural causation** (causes that matter only together) defeat the simple method of agreement; QCA was designed to handle them, but it has critics who question its sensitivity to coding choices and case selection.",
      "Modern practice combines cross-case comparison with within-case process tracing, uses comparison to eliminate rival explanations rather than to prove one, and states scope conditions.",
      "In IR, paired comparisons are common in foreign-policy and regional studies: two states’ responses to the same crisis, two regional organisations’ handling of the same norm.",
      "QCA comes in crisp-set (in or out of a set) and fuzzy-set (degrees of membership) versions. It builds a **truth table** of combinations of conditions and uses measures called consistency and coverage to judge how far a combination is sufficient for an outcome. Ragin introduced the fuzzy-set approach in *Fuzzy-Set Social Science* (2000) and developed it further in *Redesigning Social Inquiry: Fuzzy Sets and Beyond* (2008).",
      "In IR, paired comparisons are often combined with a “shadow” set of further cases discussed more briefly, to show that the pattern is not unique to the two cases studied in depth."
     ]
    },
    related:["case-study-research","case-selection","process-tracing"],
    read:[{book:"ipsrm", where:"Chapter 7, section 7.5 “Case Studies”"}],
    sources:[{t:"Seawright and Gerring (2008), Political Research Quarterly", url:"https://journals.sagepub.com/doi/10.1177/1065912907313077"}], checked:"2026-11"},

   {id:"process-tracing", title:"Process tracing", aka:["hoop test","smoking gun","straw in the wind","doubly decisive","causal mechanism","within-case analysis"], tags:["research methods","case studies","causal inference"],
    summary:"Using evidence from inside a case to test whether a proposed causal mechanism was at work, with Van Evera’s four tests.",
    levels:{
     starter:[
      "Process tracing is detective work. You have an outcome and some suspects (rival explanations). You ask: if this explanation is right, what else must we find? Then you look.",
      "Some evidence can rule an explanation out: if a stranger had entered, the dog would have barked. Other evidence can strongly support one: a signed confession. Most evidence is weaker and only nudges your confidence.",
      "Process tracing works best when you state rival explanations first and decide in advance what evidence would favour each.",
      {key:"For each clue, ask: must it appear if the explanation is true? Would it appear only if it is true?"}
     ],
     builder:[
      "George and Bennett (2005) define process tracing as using evidence within a case to test whether the causal mechanism a theory proposes was actually present. Van Evera (1997) and Collier (2011) give four tests:",
      {table:[
        ["Test","Passing","Failing"],
        ["Straw in the wind","slightly supports","slightly weakens"],
        ["Hoop (necessary)","keeps it alive","eliminates it"],
        ["Smoking gun (sufficient)","strongly confirms","doesn’t eliminate"],
        ["Doubly decisive","confirms and rules out rivals","eliminates it"]
      ]},
      "Collier’s 2011 article uses the Sherlock Holmes story “Silver Blaze” as a running example.",
      "A working sequence:",
      {"ol": ["Define the outcome and the case.", "State the explanation as a chain of steps, and at least one rival.", "List what each step should leave behind under each explanation, rating how certain and how unique each clue is.", "Collect the evidence.", "Apply the tests, step by step.", "Conclude, stating what remains uncertain."]},
      "Beach and Pedersen (2013) distinguish four kinds of evidence: **pattern** (statistical patterns), **sequence** (timing), **trace** (the existence of something, such as a meeting record) and **account** (the content of what people said or wrote).",
      "A good habit is to write the evidence table **before** opening the archive or starting interviews, then update it as you go. Reviewers trust conclusions more when they can see that the tests were set before the evidence was seen."
     ],
     pro:[
      "The tests are a qualitative version of **Bayesian updating**: how much a clue changes confidence depends on how likely it was under the explanation versus its rivals. Andrew Bennett and others have formalised this, which helps make the strength of evidence explicit rather than rhetorical.",
      "Common weaknesses: no rival explanations (so everything “fits”); vague mechanisms; reliance on a single kind of source; and treating actors’ public justifications as their real motives. Derek Beach and Rasmus Brun Pedersen (*Process-Tracing Methods*, 2013) and Bennett and Jeffrey Checkel (*Process Tracing: From Metaphor to Analytic Tool*, 2015) set out good-practice standards.",
      "Process tracing pairs naturally with elite interviews and archives ({{elite-interviews}}, {{archival-research}}). Oisín Tansey (2007) argued that purposive sampling of interviewees suits it, because you need the people who were in the room.",
      "Amitav Acharya’s 2004 study of how ASEAN members localised outside security ideas is an Asia-Pacific example of tracing how ideas travel and change.",
      "Beach and Pedersen also distinguish three variants: **theory-testing** process tracing (is a known mechanism present?), **theory-building** (what mechanism links X and Y?) and **explaining-outcome** (a full account of one historical outcome, often combining several mechanisms).",
      "Process tracing is also used in policy evaluation, alongside related approaches such as contribution analysis, where evaluators ask whether a programme plausibly contributed to an outcome."
     ]
    },
    related:["case-study-research","counterfactuals","alexander-george","elite-interviews"],
    sources:[{t:"Collier, “Understanding Process Tracing”, PS: Political Science & Politics 44(4), 2011", url:"https://www.cambridge.org/core/product/183A057AD6A36783E678CB37440346D1"},{t:"Review of George and Bennett (2005), Perspectives on Politics", url:"https://www.cambridge.org/core/journals/perspectives-on-politics/article/case-studies-and-theory-development-in-the-social-sciences/8CA6E1BDD7C587626D152C7E7F392813"}], checked:"2026-11"},

   {id:"counterfactuals", title:"Counterfactual reasoning", aka:["what-if history","minimal-rewrite rule","counterfactual thought experiments"], tags:["research methods","causal inference","history"],
    summary:"Why every causal claim about a single case implies a counterfactual, and how to judge counterfactual arguments with the minimal-rewrite rule.",
    levels:{
     starter:[
      "If you say “the assassination caused the war”, you are also saying “without the assassination, the war would not have happened then”. That “what if” is a counterfactual.",
      "Counterfactuals can’t be observed, but they can be argued well or badly. A good one changes very little about real history and reasons carefully about what would follow.",
      {key:"Make your counterfactual explicit, and change as little as possible."},
      "Example: the 1962 missile crisis ended after a public US pledge not to invade Cuba and a secret understanding about US missiles in Turkey. Would the Soviet leader have backed down without the secret part? Historians argue about this, using the documents.",
      "Counterfactuals are a tool of careful reasoning, not fantasy fiction."
     ],
     builder:[
      "James Fearon (1991) argued that small-N researchers should make counterfactuals explicit, because they can’t add cases to test claims. Philip Tetlock and Aaron Belkin (*Counterfactual Thought Experiments in World Politics*, 1996) proposed criteria, including:",
      {list:[
        "**Clarity**: say exactly what changes and what is held fixed.",
        "**Minimal rewrite**: change as little of actual history as possible.",
        "**Consistency** with well-established historical facts and theories.",
        "**Logical consistency (cotenability)**: spell out each step from the change to the result, and check that the steps fit with the change and with each other."
      ]},
      "A message arriving an hour later is a minimal rewrite; a different continent industrialising first is not.",
      "Two common uses: to **test** a causal claim about one case (would Y have happened without X?) and to judge **contingency** (how close did history come to another path?).",
      {"ol": ["State X and Y.", "Describe the smallest realistic change to X.", "Say what else is held fixed.", "Reason step by step, using established theory and evidence about the options actors actually considered (documents often show the alternatives that were discussed).", "State how confident you are."]},
      "In a thesis, a counterfactual paragraph often sits in the conclusion of a case chapter: having argued that X mattered, you consider the most plausible world without X and explain why the outcome would probably have differed."
     ],
     pro:[
      "Counterfactuals are central to debates about the end of the Cold War, the origins of the First World War and the role of nuclear weapons in the “long peace”. Richard Ned Lebow (*Forbidden Fruit*, 2010) argued that they also show how contingent outcomes were, against hindsight bias.",
      "Large-N causal inference is also counterfactual at heart: a causal effect is the difference between what happened and what would have happened without the treatment, estimated by comparing similar treated and untreated units ({{regression-causal-inference}}).",
      "A common thesis weakness is an implicit counterfactual (“the summit transformed relations”) with no discussion of what relations would have looked like without it. Making it explicit invites the reader to check it.",
      "Tetlock and Belkin’s six criteria are clarity, logical consistency (or cotenability), historical consistency (the minimal-rewrite rule), theoretical consistency, statistical consistency and **projectability**: the principles connecting the change to its result should imply other predictions that can be checked. Critics warn that a well-told counterfactual can feel more convincing than the evidence warrants, so treat vivid stories with caution.",
      "Counterfactual reasoning also helps against hindsight bias: knowing how events turned out makes them look inevitable, while the documents often show actors who expected something else."
     ]
    },
    related:["process-tracing","regression-causal-inference","case-study-research"],
    sources:[{t:"Collier, “Understanding Process Tracing” (2011)", url:"https://www.cambridge.org/core/product/183A057AD6A36783E678CB37440346D1"}], checked:"2026-11"},

   {id:"discourse-analysis", title:"Discourse and content analysis in IR", aka:["discourse analysis","content analysis","critical discourse analysis","predication","presupposition","subject positioning","text as data","intercoder reliability"], tags:["research methods","qualitative methods","texts"],
    summary:"Two ways of using texts as evidence: discourse analysis (how texts make policies thinkable) and content analysis (systematic, repeatable counting), with text-as-data tools.",
    levels:{
     starter:[
      "International politics is full of words: speeches, treaties, resolutions, cables, posts. Researchers use them in two main ways.",
      "**Content analysis** counts what is said, with clear rules: how often do UN speeches mention climate change, and has that changed?",
      "**Discourse analysis** asks how language shapes what seems normal or possible: how did leaders describe a country so that intervening there seemed necessary?",
      {key:"Content analysis counts; discourse analysis interprets. Many projects use both."},
      "Example: two newspapers describe the same people arriving by boat as “migrants” and as “invaders”. Content analysis could count which word each paper uses. Discourse analysis asks what each word makes seem reasonable to do about them.",
      "Both take texts seriously as evidence about politics."
     ],
     builder:[
      "Jennifer Milliken (1999) summarised discourse analysis in IR: discourses are systems of meaning; they are productive (they make some actions possible); and they are contested and changing. Roxanne Lynn Doty (1993) offered three tools: **predication** (qualities attached to subjects), **presupposition** (what is taken for granted) and **subject positioning** (how subjects are placed relative to each other). Lene Hansen (*Security as Practice*, 2006) stressed **intertextuality** and the construction of Self and Other.",
      "Content analysis, in Klaus Krippendorff’s definition, makes replicable and valid inferences from texts to their contexts. It needs a defined set of texts, a unit, a **codebook**, and a check of **intercoder reliability** (for example Krippendorff’s alpha, which corrects for chance agreement).",
      "The UN General Debate Corpus (Jankin, Baturo and Dasandi, 2025) holds more than 10,000 speeches from 1946 onwards, for text-as-data work.",
      "A small discourse analysis, step by step: choose a question and a defined body of texts (official speeches on one issue, 2010–2020, say); read for how subjects are described, what is assumed and how subjects are related; note links to other texts; look for change over time and for counter-discourses; present the analysis with plenty of quotation, so readers can judge your reading."
     ],
     pro:[
      "**Validity in discourse analysis** comes from the breadth and selection of texts (official and popular, over time), from showing passages that complicate the reading, and from explaining how texts were chosen. Hansen proposed explicit research designs: how many Selves, which intertextual models (official discourse only, or wider political debate, popular culture and marginal voices), which time frame and how many events.",
      "**Critical discourse analysis** (Norman Fairclough and others) links textual features to social structure and power more explicitly; post-structuralist discourse analysis tends to resist separating language from the “real” world at all.",
      "**Text as data** methods (dictionaries, topic models, word embeddings, language models) scale content analysis to millions of documents. They need validation against human coding, care with translation and with changing word meanings over time, and awareness that what is not said is invisible to word counts.",
      "Krippendorff suggests relying on variables with alpha of at least 0.800, and drawing only tentative conclusions from values between 0.667 and 0.800.",
      "Translation matters: where possible, analyse texts in the original language, since a translation can change exactly the predicates and presuppositions you are studying. Say whose translations you quote."
     ]
    },
    related:["qualitative-coding","secondary-data","explaining-understanding","archival-research"],
    read:[{book:"ipsrm", where:"Chapter 7, section 7.3 “Exploring Documentary Sources”"}],
    sources:[{t:"Jankin, Baturo and Dasandi, “Words to unite nations: The complete UN General Debate Corpus, 1946–present”, Journal of Peace Research (2025)", url:"https://academic.oup.com/jpr/article-abstract/62/4/1339/8324548"}], checked:"2026-11"},

   {id:"archival-research", title:"Archival research and declassified records", aka:["diplomatic archives","declassification","FRUS","JACAR","source criticism","archival silences"], tags:["research methods","history","archives"],
    summary:"Finding and reading diplomatic archives and declassified documents in IR: where they are, how they open, how to criticise them and how to notice silences.",
    levels:{
     starter:[
      "Archives hold the paper trail of international politics: cables between embassies and capitals, minutes of meetings, memos and drafts. Many governments open them after a set number of years.",
      "Archives are powerful evidence, but every document was written by someone, for someone, for a reason. A report to a minister may say what the writer wanted the minister to believe.",
      "Archives also have gaps. Not everything was written down, kept or released.",
      {key:"Ask of every document: who wrote it, when, for whom, and why? And what isn’t here?"},
      "Example: a historian reads the minutes of a cabinet meeting to see which options leaders discussed before a decision, evidence that public speeches rarely give. Comparing those minutes with the other government’s records shows how each side saw the same meeting."
     ],
     builder:[
      {list:[
        "**Foreign Relations of the United States** (FRUS): published since 1861 by the State Department’s Office of the Historian, with a legal target of publication 30 years after the events; volumes are online.",
        "**JACAR** (Japan Center for Asian Historical Records): opened on 30 November 2001 under the National Archives of Japan; digitised records from the National Archives, the Foreign Ministry’s Diplomatic Archives and the Defence Ministry’s National Institute for Defense Studies, from the early Meiji period to the end of the Second World War, with postwar records (currently up to 1972) added since 2017.",
        "**National archives** in many countries open records after periods such as 20 or 30 years, with exemptions; **freedom of information** laws let researchers request specific records in some countries."
      ]},
      "Marc Trachtenberg’s *The Craft of International History* (2006) shows how to use documents to answer IR questions. **Multi-archival research**, comparing several governments’ records of the same events, guards against seeing events through one government’s eyes.",
      "Before a visit: search the online catalogue, check registration rules, opening hours and photography rules, find out which files are closed, and order files in advance where you can."
     ],
     pro:[
      "Michel-Rolph Trouillot (*Silencing the Past*, 1995) argued that silences enter history at four moments: the making of sources, the making of archives, the making of narratives and the making of history in its final form. Postcolonial historians have shown how colonial archives document administrators’ fears and categories far better than colonised people’s lives, and have developed ways of reading “against the grain”.",
      "Declassification is uneven. Documents may be released with redactions, withdrawn, or released in one country and not another, which can skew which side of an interaction is visible.",
      "Practical habits: plan visits around opening hours and reading-room rules; photograph with permission; record full references (archive, collection, file, folio) at once; and keep a research log. Language skills often decide which archives a project can use.",
      "The Research Skills track covers documents as qualitative data ({{fieldnotes}}), and Hurst’s textbook has a full chapter on archival research.",
      "Digitisation changes the craft. Keyword search across digitised collections is fast, but it can hide context (the rest of the file a document came from) and favours whatever happened to be digitised. Note which collections were digitised, by whom and why, and read surrounding documents, not only search hits."
     ]
    },
    related:["process-tracing","elite-interviews","discourse-analysis","source-types"],
    read:[{book:"hurst", where:"Chapter 16, “Archival and Historical Research”"}],
    sources:[{t:"Office of the Historian: About the Foreign Relations of the United States Series", url:"https://history.state.gov/historicaldocuments/about-frus"},{t:"JACAR: An Overview of JACAR and Its Features", url:"https://www.jacar.go.jp/english/about/outline.html"}], checked:"2026-11"},

   {id:"elite-interviews", title:"Elite interviews", aka:["interviewing diplomats","interviewing officials","Chatham House Rule","on background","not for attribution"], tags:["research methods","interviews","qualitative methods"],
    summary:"Interviewing diplomats, officials, officers and other well-placed people: sampling, access, attribution rules, accuracy and triangulation.",
    levels:{
     starter:[
      "An elite interview is a research interview with someone who has, or had, power or special knowledge: a diplomat, minister, official, military officer, negotiator, NGO leader or journalist.",
      "They can tell you what happened behind closed doors. But they may also polish their own role, forget, or repeat the official line.",
      "Agree in advance how you may use what they say: with their name, without it, or only as background.",
      {key:"Elite interviews are strongest when checked against documents and other accounts."},
      "Example: to learn how a regional agreement was negotiated, a researcher interviews former negotiators from several delegations and compares their stories with the official records."
     ],
     builder:[
      {list:[
        "**Sampling**: purposive and snowball, aiming to cover every side and level, not only the most willing (Tansey, 2007).",
        "**Access**: introductions, a short clear request, flexibility on time and place, gatekeepers.",
        "**Preparation**: know the public record first; elites notice and respect it.",
        "**Attribution**: on the record; not for attribution (a description such as “a senior official”); background only; or under the **Chatham House Rule**, which reads: “When a meeting, or part thereof, is held under the Chatham House Rule, participants are free to use the information received, but neither the identity nor the affiliation of the speaker(s), nor that of any other participant, may be revealed.”"
      ]},
      "The general interview skills are in Research Skills ({{research-interviews}}, {{interview-guide}}).",
      "A simple running order for an elite interview:",
      {"ol": ["Broad questions about their role and responsibilities.", "Specific episodes, in time order.", "The alternatives that were considered, and who disagreed.", "“Who else should I speak to?” (snowball) and “Is there anything I should have asked?”."]},
      "Keep to the agreed time, send a short thank-you, and honour the agreed terms exactly.",
      "Gatekeepers, such as press officers or former officials, can open doors, but they may also steer you towards people who share one view. Keep track of who introduced whom, so you can see and correct that bias."
     ],
     pro:[
      "Jeffrey Berry (2002) discussed validity and reliability problems in elite interviewing: interviewees’ aims, the risk of being steered, and the need to cross-check. Status imbalances can run either way: officials may lecture a student, or speak more freely to an outsider.",
      "Lee Ann Fujii (2010) treated rumours, inventions, denials, evasions and silences as “meta-data” that reveal what people can safely say. That reading is especially useful after conflict or under authoritarian rule.",
      "Ethics still apply: consent, confidentiality and care with identifying details, since a job title can identify a person in a small ministry ({{fieldwork-ethics}}). Some institutions require ethics review even for interviews with officials speaking in their professional role; check your own rules.",
      "Record what was said as precisely as the agreed terms allow (notes, or a recording only with permission), and write a memo straight after each interview about context and impressions.",
      "Many officials decline to be recorded, so detailed notes written up the same day are common. Some researchers send quotations back to interviewees for checking where attribution has been agreed; this can improve accuracy but also invites withdrawal, so agree the approach in advance."
     ]
    },
    related:["research-interviews","process-tracing","archival-research","fieldwork-ethics"],
    read:[{book:"ipsrm", where:"Chapter 7, section 7.2 “Interviews”"},{book:"hurst", where:"Chapter 11, “Interviewing”"}],
    sources:[{t:"Chatham House: Chatham House Rule", url:"https://www.chathamhouse.org/about-us/chatham-house-rule"}], checked:"2026-11"},

   {id:"ir-fieldwork", title:"Fieldwork and ethnography in IR", aka:["ethnography in IR","participant observation","the practice turn","Peaceland"], tags:["research methods","ethnography","qualitative methods"],
    summary:"What ethnography and fieldwork add to IR, from Cohn’s defence intellectuals to Autesserre’s peacebuilders and the practice turn, with reflexivity.",
    levels:{
     starter:[
      "Ethnography means spending a long time with people to understand their world from the inside: their routines, language and assumptions.",
      "In IR this can mean spending time with diplomats, peacekeepers, aid workers, border officials or communities affected by international decisions.",
      "It shows things documents and statistics can’t: the everyday habits that shape big decisions.",
      {key:"Fieldwork shows how international politics is actually done, day to day."},
      "Fieldwork in IR need not mean a war zone. It can be time spent at a regional secretariat, at a border crossing, at a UN conference as an observer, or with a community affected by a foreign-funded dam. What makes it fieldwork is being there, watching and talking, over time."
     ],
     builder:[
      "Classic examples:",
      {list:[
        "Carol Cohn, “Sex and Death in the Rational World of Defense Intellectuals” (*Signs*, 1987): the abstract, euphemistic language of nuclear strategy, observed from the inside.",
        "Séverine Autesserre, *Peaceland* (2014): how international peacebuilders’ everyday practices in the Democratic Republic of the Congo and elsewhere shaped the results of interventions.",
        "The **practice turn** (Adler and Pouliot, *International Practices*, 2011): studying what practitioners actually do."
      ]},
      "The general methods are in the sociology and Research Skills units ({{field-research}}, {{fieldnotes}}).",
      "Planning questions:",
      {"list": ["What do I need to observe that I can’t learn any other way?", "How will I gain access: an internship, an observer pass, a local partner?", "What will my role be: observer, participant, or both?", "How will I record what I see ({{fieldnotes}}), and what ethics approval do I need?", "How long can I stay, and how will I combine observation with interviews and documents?"]},
      "Keep a reflexive journal alongside your fieldnotes: what surprised you, how people reacted to you, what you might be missing."
     ],
     pro:[
      "Wanda Vrasti (2008) criticised IR for borrowing ethnography as colourful detail without its commitments to reflexivity and to the people studied. Defenders reply that even partial ethnographic methods (participant observation at summits, short-term fieldwork) add evidence about practice that other methods miss.",
      "Access is the central practical problem: diplomatic and security settings are closed, and access often comes through employment, internships or personal networks, which raises questions about independence and confidentiality.",
      "Reflexivity is not optional: the researcher’s nationality, gender, language and institutional ties shape what they see and are told ({{trustworthiness}}). Multi-sited fieldwork, following a policy or a network across places, is common in international research.",
      "Remote and digital ethnography (online communities, virtual meetings) grew during the pandemic and raises its own consent and privacy questions.",
      "Ethnographers of international organisations have studied UN agencies, development banks and peacekeeping missions, showing how bureaucratic routines, reporting cycles and career incentives shape policy in ways official documents don’t reveal.",
      "Short visits are common in master’s research. They can still be valuable if they are focused: a week of observation at a regional meeting, combined with interviews and documents, can answer a well-defined question about practice. Be honest in the methods section about how long you were there and what you could and couldn’t see."
     ]
    },
    related:["field-research","elite-interviews","fieldwork-ethics","trustworthiness"],
    read:[{book:"ipsrm", where:"Chapter 7, section 7.4 “Ethnographic Research”"},{book:"hurst", where:"Chapter 13, “Participant Observation”"}],
    sources:[{t:"Introduction to Political Science Research Methods, Chapter 7 (LibreTexts)", url:"https://socialsci.libretexts.org/Bookshelves/Political_Science_and_Civics/Introduction_to_Political_Science_Research_Methods_(Franco_et_al.)"}], checked:"2026-11"},

   {id:"ir-datasets", title:"Conflict and security datasets: UCDP, Correlates of War, SIPRI", aka:["UCDP","Correlates of War","COW","CINC","SIPRI","arms transfers","military expenditure","TIV"], tags:["data","international relations","conflict"],
    summary:"The main datasets for war, power and armaments: what each covers, its units and thresholds, and its access terms, as checked in November 2026.",
    levels:{
     starter:[
      "Three sources supply much of the data in security studies:",
      {list:[
        "**UCDP**, the Uppsala Conflict Data Program at Uppsala University in Sweden, records armed conflicts and other organised violence.",
        "**Correlates of War** (COW), founded by J. David Singer in 1963, records wars since 1816 and countries’ material capabilities.",
        "**SIPRI**, the Stockholm International Peace Research Institute, records military spending and arms transfers."
      ]},
      "They define things differently, so their numbers differ. Always say which dataset and version you used.",
      {key:"Read the definitions before the numbers, and cite the version."},
      "Example: a “record number of conflicts” in UCDP data can include many small conflicts, while deaths may be lower than in earlier years. Counting conflicts and counting deaths answer different questions."
     ],
     builder:[
      {table:[
        ["Dataset","Coverage (as of November 2026)","Access"],
        ["UCDP (armed conflict list with PRIO)","State-based conflict 1946–2025; non-state and one-sided violence 1989–2025; version 26.1","Free, CC BY 4.0, cite the listed publications"],
        ["COW War Data","Wars 1816–2007 (intra-state to 2014)","Free to download; no commercial use; no passing on without permission"],
        ["COW National Material Capabilities","1816–2022 (version 7.0): population, urban population, iron and steel, energy, military personnel and spending; CINC score","As above"],
        ["SIPRI Military Expenditure","1949–2025, updated yearly","Free to download; commercial use needs a licence"],
        ["SIPRI Arms Transfers","Major conventional arms, 1950–2025","As above"]
      ]},
      "UCDP counts a state-based armed conflict from 25 battle-related deaths in a calendar year (and calls it a war from 1,000); COW counts a war from 1,000 battle-related deaths.",
      "Units differ too:",
      {"list": ["**UCDP** gives conflict-years, a dyadic version (a government against each armed group), and a georeferenced event dataset with dates and coordinates.", "**Correlates of War** includes a list of which entities count as states since 1816, wars and their participants, militarised interstate disputes (threats and uses of force short of war) and formal alliances.", "**SIPRI** gives military spending by country and year in local currency, in US dollars and as shares of GDP and of government spending."]}
     ],
     pro:[
      "**CINC** (Composite Index of National Capability) averages each state’s share of the system total on the six NMC indicators. It measures material capability, not influence, and weights a tonne of steel the same way across two centuries; scholars debate whether it still captures power in a service and technology economy.",
      "SIPRI’s **trend-indicator value** (TIV) measures the volume of military resources transferred, based on the known unit production costs of a core set of weapons; it is not the financial value of deals. SIPRI publishes separate estimates of the financial value of the arms trade.",
      "UCDP publishes best, low and high estimates of deaths and revises earlier years. Its Georeferenced Event Dataset allows sub-national analysis. COW’s data are hosted by a network of scholars; hosting arrangements changed in 2026, so check each dataset’s page for its current host and version.",
      "The IR primer explains how these counts show conflict trends ({{war-and-conflict}}); the data track explains how to judge any dataset ({{judging-datasets}}).",
      "Cite datasets as the maintainers ask: the dataset name, version, the publication they list, and the date you downloaded it. Keep a copy of the exact file you used, since later versions may differ."
     ]
    },
    related:["political-economic-datasets","concept-formation","war-and-conflict","judging-datasets"],
    sources:[{t:"UCDP Dataset Download Center", url:"https://ucdp.uu.se/downloads/"},{t:"Correlates of War: National Material Capabilities (v7.0)", url:"https://correlatesofwar.org/?p=326"},{t:"SIPRI Military Expenditure Database", url:"https://sipri.org/databases/milex"}], checked:"2026-11"},

   {id:"political-economic-datasets", title:"Democracy, development and trade datasets: V-Dem, WDI, UN Comtrade", aka:["V-Dem","Varieties of Democracy","World Development Indicators","WDI","UN Comtrade","mirror statistics","CIF","FOB"], tags:["data","international relations","development","trade"],
    summary:"Three widely used sources for regimes, development and trade: what they cover, access terms as of November 2026, and the traps in using them.",
    levels:{
     starter:[
      {list:[
        "**V-Dem** (Varieties of Democracy), run by the V-Dem Institute at the University of Gothenburg, Sweden, measures many aspects of democracy for most countries, some back to 1789.",
        "The **World Development Indicators** (World Bank) gather economic, social and environmental statistics for more than 200 economies.",
        "**UN Comtrade** (UN Statistics Division) records which goods countries trade with which partners."
      ]},
      "All three are free to use for study, with some conditions. They are used in thousands of studies, so learning their quirks pays off.",
      {key:"Check definitions, coverage and versions, and cite the source as its maintainer asks."},
      "Example: to compare military burdens, researchers divide spending (from SIPRI) by GDP (from the World Bank); to compare trade dependence, they divide trade (from Comtrade) by GDP."
     ],
     builder:[
      {table:[
        ["Dataset","Coverage","Access"],
        ["V-Dem version 16 (March 2026)","531 indicators and 251 indices, 1789–2025","Free, CC BY-SA 4.0"],
        ["World Development Indicators","About 1,600 indicators for 217 economies; some series over 50 years","Free, CC BY 4.0; web, API and bulk downloads"],
        ["UN Comtrade","Annual trade from 1962 by product and partner, close to 200 reporters","Free preview without an account; free registration for downloads and API (up to 100,000 records per call, 500 API calls a day); paid premium for bulk files"]
      ]},
      "WDI draws on national statistical systems and international agencies, so quality varies by country and year.",
      "Getting the data:",
      {"list": ["**WDI**: the World Bank’s DataBank website lets you choose countries, series and years and download a CSV file; there is also an API.", "**V-Dem**: whole datasets in several formats, with a long codebook explaining every indicator.", "**UN Comtrade**: choose a reporter, a partner, the flow (imports or exports), a product code (usually from the Harmonized System, HS) and a year."]},
      "Read each indicator’s definition before you merge sources.",
      "All three are revised: national statistics offices correct past figures, and V-Dem re-estimates earlier years with each version, so note the version and download date."
     ],
     pro:[
      "**V-Dem** combines factual coding with ratings by country experts, aggregated with a statistical model that estimates uncertainty; users should report the uncertainty, not just point estimates, and note that expert-coded data reflect the experts’ judgements.",
      "**Mirror statistics**: imports reported by one country usually don’t match exports reported by its partner. UN Comtrade lists causes such as different valuation (imports usually include freight and insurance, CIF; exports usually don’t, FOB), timing, product classification and trade routed through third countries. Partner data are also used to estimate missing reports.",
      "**WDI** comparisons across countries often need per-person or purchasing-power-parity figures; check whether an indicator is in current US dollars, constant dollars or PPP before comparing.",
      "Missing data are rarely random: conflict-affected and very poor countries report less, which can bias cross-national results.",
      "Merging sources is a common source of error. Country codes differ (ISO codes, Correlates of War codes, each project’s own IDs), so use a published crosswalk and check by hand the states that split or merged, such as the Soviet Union, Yugoslavia, and Sudan and South Sudan.",
      "Values reported as missing, zero or not applicable mean different things; read the codebook’s rules before treating a blank cell as zero."
     ]
    },
    related:["ir-datasets","concept-formation","open-data-sources","judging-datasets"],
    sources:[{t:"V-Dem: The V-Dem Dataset", url:"https://v-dem.net/data/the-v-dem-dataset/"},{t:"World Bank: About World Development Indicators", url:"https://datatopics.worldbank.org/world-development-indicators/about-world-development-indicators.html"},{t:"UN Comtrade Help Center: subscriptions", url:"https://comtradewiki.azurewebsites.net/?p=78"}], checked:"2026-11"},

   {id:"regression-causal-inference", title:"Regression and causal inference in IR", aka:["multiple regression","control variables","omitted-variable bias","reverse causality","endogeneity","selection bias","difference-in-differences","instrumental variables","nested analysis"], tags:["statistics","causal inference","research methods"],
    summary:"What a regression coefficient means in IR studies, why correlation is not causation (confounding, reverse causality, selection), designs that get closer to causes, and nested analysis.",
    levels:{
     starter:[
      "A regression draws a line through many data points to show how one thing tends to change with another. A **multiple** regression does this while holding other measured factors steady, so you compare like with like.",
      "Even then, a regression shows an **association**. A third factor might cause both things, the arrow might run the other way, or the cases might have been selected in a biased way.",
      "Fortna (2004) found that peacekeepers tend to be sent to harder cases; ignoring that would make peacekeeping look less effective than it is.",
      {key:"A coefficient describes a pattern in the data. A causal claim needs a design that rules out the alternatives."}
     ],
     builder:[
      "Reading a coefficient: “On average, in these data, a one-unit difference in X is associated with a [coefficient]-unit difference in Y, holding the controls constant.” Then ask:",
      {list:[
        "**Confounding / omitted-variable bias**: is there an unmeasured factor behind both?",
        "**Reverse causality**: could Y cause X? Keshk, Reuveny and Pollins (2010) argued that conflict reduces trade more than trade reduces conflict; Hegre, Oneal and Russett (2010) found that trade does promote peace.",
        "**Selection**: are the “treated” cases different to begin with, or did the way cases got into the data depend on the outcome?",
        "**Size and significance**: is the effect large enough to matter? ({{statistical-significance-basics}})"
      ]},
      "The simple-regression mechanics are in the data track ({{linear-regression}}).",
      "Reading a regression table: rows are variables; the numbers are coefficients, usually with standard errors in brackets; stars mark significance levels; the bottom rows give the number of observations and measures of fit. Check the outcome and its units first, then the sign, size and uncertainty of the coefficient you care about, then which controls are included and why.",
      "For yes-or-no outcomes (a dispute or no dispute), IR studies often use logistic or probit models. Their coefficients are not percentage-point changes, so look for the predicted probabilities the authors report."
     ],
     pro:[
      "Designs that get closer to causal effects: **natural experiments**; **difference-in-differences** (comparing changes in affected and unaffected groups, assuming parallel trends); **instrumental variables** (a factor that shifts X, is as good as random and has no other path to Y, assumptions that are often hard to defend in IR); **regression discontinuity**; and **matching**. Each trades assumptions for credibility; read the assumptions section first.",
      "Country-year and dyad-year data are not independent observations: the same country appears every year, and neighbouring countries influence each other. Studies adjust standard errors (for example by clustering) and sometimes model time and space explicitly.",
      "Evan Lieberman’s **nested analysis** (2005) links large-N and case work: after a robust large-N result, study on-the-line cases to test the mechanism; after a weak one, study off-the-line cases to build a better model.",
      "Gartzke (2007) argued that economic development and shared interests account for much of the democratic peace, an example of a confounding argument that reshaped a debate.",
      "Running many specifications and reporting the most striking one inflates false positives. Robustness checks, pre-specified analysis plans and transparent reporting help ({{questionable-research-practices}}).",
      "Regression results also depend on which cases are in the data: if conflict-affected countries have more missing values, the estimates describe the countries that reported, not the world."
     ]
    },
    related:["linear-regression","correlation-causation","ir-datasets","mixed-methods","counterfactuals"],
    read:[{book:"openintro", where:"Chapter 9, “Multiple and logistic regression”, Section 9.1"},{book:"ipsrm", where:"Chapter 8, section 8.4 “Interpreting Statistical Tables in Political Science Articles”"}],
    sources:[{t:"Hegre, Oneal and Russett, “Trade Does Promote Peace”, Journal of Peace Research (2010)", url:"https://www.prio.org/publications/4771"},{t:"Keshk, Reuveny and Pollins (2010), study summary", url:"https://www.eurekalert.org/news-releases/539595"},{t:"GSDRC summary of Fortna, “Does Peacekeeping Keep Peace?” (2004)", url:"https://gsdrc.org/document-library/does-peacekeeping-keep-peace-international-intervention-and-the-duration-of-peace-after-civil-war/"}], checked:"2026-11"},

   {id:"ir-thesis", title:"The IR master’s thesis: review, proposal and writing", aka:["IR literature review","research proposal in IR","thesis structure","writing conventions in IR"], tags:["research skills","thesis","international relations"],
    summary:"How an IR master’s thesis comes together: a literature review organised by debates, an aligned proposal, a typical chapter structure and IR writing conventions.",
    levels:{
     starter:[
      "An IR master’s thesis answers one research question with evidence. It usually has an introduction, a literature review, a framework and design chapter, two or three analysis chapters and a conclusion.",
      "Before writing it, most programmes ask for a proposal: the question, what is known, how you’ll answer it, with what sources, the ethics and a timeline.",
      "The most important quality is **fit**: the method must be able to answer the question, and the analysis must actually answer it.",
      {key:"Question, framework, method, sources and analysis should form one golden thread."},
      "Most programmes give a template and a word limit, and your supervisor helps you shape the question and the design. Check your own regulations early."
     ],
     builder:[
      "IR literature reviews are usually organised by **debates and schools** (realist, institutionalist and constructivist accounts of a puzzle), ending in a gap that is empirical, theoretical or methodological. Search core journals (*International Organization*, *International Studies Quarterly*, *European Journal of International Relations*, *Review of International Studies*), regional ones (*International Relations of the Asia-Pacific*, *The Pacific Review*, *Asian Survey*) and grey literature, checking think-tank funding.",
      "The general skills are in Research Skills: {{literature-review}}, {{research-proposal}}, {{academic-writing}} and {{graduate-degrees}}.",
      "A proposal in IR usually covers: the puzzle and question; the literature and gap; the framework and what it leads you to expect; the method, cases, period and unit; the sources and how you will reach them (languages, permits, a plan B); ethics and risks; a timeline; and key references.",
      "A common timeline runs from proposal and approvals, through collecting evidence, to analysis, then writing and revision. Analysis chapters are often drafted first, while the material is fresh."
     ],
     pro:[
      "IR writing conventions examiners notice:",
      {list:[
        "Say which part of a state acted, not just “China” or “Japan”, when it matters.",
        "Date changeable facts (“as of November 2026”).",
        "Use one romanisation system consistently (Hepburn, Hanyu Pinyin, Revised Romanization) and follow your style guide on name order.",
        "Give both names for contested places on first use and explain your choice; attribute positions to those who hold them.",
        "Cite UN documents by symbol, such as S/RES/1325 (2000); say whose translations you use."
      ]},
      "Common reasons for low marks: a literature review that summarises sources one by one; a theory chapter never used again; methods that can’t answer the question; and conclusions that claim more than the evidence shows. Writing analysis chapters first, while the material is fresh, then the framework and introduction, often produces a tighter thesis.",
      "State your **contribution** explicitly in one or two sentences, in both the introduction and the conclusion: new evidence, a new case, a test between theories, a new concept or measure. Examiners look for it, and it helps you decide what belongs in the thesis.",
      "A final self-check before submission: does the introduction’s question match the conclusion’s answer? Is every chapter needed for that answer? Are dates, names, translations and citations consistent throughout?"
     ]
    },
    related:["research-puzzles","literature-review","research-proposal","fieldwork-ethics","supervision"],
    read:[{book:"ipsrm", where:"Chapter 1, section 1.5 “Research Paper Project Management”"}],
    sources:[{t:"Introduction to Political Science Research Methods (LibreTexts)", url:"https://socialsci.libretexts.org/Bookshelves/Political_Science_and_Civics/Introduction_to_Political_Science_Research_Methods_(Franco_et_al.)"}], checked:"2026-11"},

   {id:"fieldwork-ethics", title:"Ethics of fieldwork abroad and on sensitive topics", aka:["do no harm","research in conflict zones","research in authoritarian settings","research permits","duty of care","research assistants"], tags:["ethics","fieldwork","research methods"],
    summary:"Protecting participants, assistants and yourself when researching in other countries, in conflict or repressive settings, or on sensitive topics.",
    levels:{
     starter:[
      "Research in other countries, or on sensitive topics such as conflict, migration or dissent, can put people at risk. The first rule is **do no harm**.",
      "Ask before you start: who could be harmed by taking part, by being seen with you, or by what you publish? What would happen if your notes were lost or seized?",
      "Plan consent, data security, local permissions and your own safety, and keep thinking about them during and after fieldwork.",
      {key:"Ethics is a relationship with the people you study, not a form you fill in once."},
      "Example: a list of interviewees’ names on an unlocked phone could be dangerous if the phone is taken at a checkpoint."
     ],
     builder:[
      {list:[
        "**Consent** that fits the setting: oral consent without names written down can be safer than a signed form where records could endanger people (see Elisabeth Jean Wood, 2006, on consent, anonymity and confidentiality in her fieldwork during El Salvador’s civil war).",
        "**Data security**: codes instead of names, keys stored separately, encrypted devices, awareness of where cloud data are held ({{anonymisation}}, {{research-data-protection}}).",
        "**Local rules**: some countries require research permits, specific visas or local ethics approval.",
        "**Safety**: risk assessment, check-ins, travel advice; your institution’s duty of care.",
        "**Assistants and interpreters**: fair pay, safety planning, credit."
      ]},
      "The American Political Science Association approved *Principles and Guidance for Human Subjects Research* in April 2020.",
      "A simple risk assessment lists each risk, who it affects, how likely and how serious it is, what reduces it, and who is responsible. Include:",
      {"list": ["participants being identified or punished;", "data being seized or hacked;", "the researcher being detained, injured or ill;", "an assistant being harassed after the researcher leaves;", "emotional distress, for participants and for the researcher hearing traumatic accounts."]},
      "Discuss the plan with your supervisor and ethics committee, and update it if the situation changes; a sudden protest, election or outbreak of fighting can turn a safe project into a risky one."
     ],
     pro:[
      "Lee Ann Fujii (“Research Ethics 101: Dilemmas and Responsibilities”, *PS: Political Science & Politics*, 2012) argued that ethical obligations go beyond what review boards require, and arise in everyday interactions in the field. Review boards modelled on medical research may not anticipate political risks, such as surveillance or retaliation, or may impose procedures (signed forms) that increase them.",
      "Debates continue about deception, about research with or on armed actors, about whether to study authoritarian regimes from inside at all, and about “extractive” research that takes knowledge without returning benefits. Partnership with local researchers, shared authorship where earned, and returning findings in accessible forms are increasingly expected.",
      "Digital risks have grown: messaging apps, cloud storage and social media can expose participants. Remote interviewing reduces travel risk but not necessarily participants’ risk.",
      "See also the migration unit’s guidance on researching refugees and migrants ({{researching-migration-ethically}}) and the Research Skills ethics unit ({{ethics-review}}, {{consent-process}}).",
      "Ask whether fieldwork is necessary at all. Published documents, existing datasets, interviews with people outside the country or remote methods can sometimes answer the question with much less risk."
     ]
    },
    related:["ethics-review","consent-process","research-data-protection","researching-migration-ethically","elite-interviews"],
    read:[{book:"ipsrm", where:"Chapter 9, “Research Ethics”"}],
    sources:[{t:"APSA: Principles and Guidance for Human Subjects Research", url:"https://connect.apsanet.org/hsr/?p=38"}], checked:"2026-11"},

   {id:"alexander-george", title:"Alexander L. George", aka:["Alexander George","structured, focused comparison"], tags:["thinker","international relations","research methods"],
    summary:"American political scientist (1920–2006) who shaped case-study methods (structured, focused comparison, process tracing) and the study of deterrence, coercive diplomacy and decision-making.",
    levels:{
     starter:[
      "Alexander L. George (1920–2006) was an American political scientist who wanted research on international politics to be both rigorous and useful to policymakers.",
      "He showed how to learn from a few carefully studied cases, and helped make **process tracing** a standard term in political science.",
      "His subjects were the big questions of the Cold War: how deterrence works, how threats can persuade without war, and how leaders make decisions in crises.",
      {key:"George’s legacy: case studies done systematically, to build theory that practitioners can use."},
      "He often worked with others, including his wife Juliette George, Richard Smoke, William Simons and Andrew Bennett.",
      "Many methods ideas used in IR theses today, including case selection and process tracing, trace back to his work."
     ],
     builder:[
      "Born in Chicago, George worked as a research analyst during the Second World War, spent twenty years at the RAND Corporation (1948–1968) and then taught political science at Stanford University from 1968 to 1990, later becoming a fellow at the United States Institute of Peace.",
      {list:[
        "*Woodrow Wilson and Colonel House* (1956, with Juliette George): a psychological study of a leader.",
        "*Deterrence in American Foreign Policy* (1974, with Richard Smoke), which won the Bancroft Prize in 1975.",
        "*Forceful Persuasion: Coercive Diplomacy as an Alternative to War* (1991).",
        "*Case Studies and Theory Development in the Social Sciences* (2005, with Andrew Bennett)."
      ]},
      "Other works seminars mention:",
      {"list": ["“The ‘Operational Code’” (1969), on studying leaders’ beliefs about politics.", "“The Case for Multiple Advocacy in Making Foreign Policy” (1972), on structuring advice so leaders hear competing views.", "*Presidential Decisionmaking in Foreign Policy: The Effective Use of Information and Advice* (1980).", "*The Limits of Coercive Diplomacy* (second edition with William E. Simons, 1994).", "*Bridging the Gap: Theory and Practice in Foreign Policy* (1993)."]}
     ],
     pro:[
      "George’s 1979 chapter on the method of **structured, focused comparison** argued that case studies should ask the same theoretically guided questions of each case, so that findings cumulate. He adopted the term **process tracing** from psychology at about the same time.",
      "His work on **coercive diplomacy** (using threats to persuade an opponent to stop or undo an action) and on the **operational code** of political leaders (their beliefs about politics and the best means to pursue goals) remains widely used in foreign policy analysis.",
      "Critics from quantitative traditions questioned how far small-N methods can generalise; George and Bennett’s 2005 book answered with a detailed defence of case studies’ strengths in measuring concepts, identifying mechanisms and handling complex causation, while acknowledging their limits.",
      "He also argued for “bridging the gap” between academic theory and policy practice, a theme that continues in debates about the policy relevance of IR.",
      "With Smoke, George argued that deterrence theory had to be judged against detailed historical cases of US deterrence efforts from the late 1940s to the early 1960s, an early demonstration of how structured case comparison could challenge an abstract theory."
     ]
    },
    related:["process-tracing","case-study-research","comparative-method"],
    sources:[{t:"Review of George and Bennett (2005), Perspectives on Politics", url:"https://www.cambridge.org/core/journals/perspectives-on-politics/article/case-studies-and-theory-development-in-the-social-sciences/8CA6E1BDD7C587626D152C7E7F392813"},{t:"Obituary: Alexander L. George (Mountain View Voice)", url:"https://obituaries.mv-voice.com/obituaries/print/alexander-l-george?o=941"}], checked:"2026-11"}
  ],
  terms:[
   {id:"research-puzzle", term:"Research puzzle", def:"A research question built around a surprise: something that happened, or didn’t, that existing theories or common sense would not lead us to expect, with more than one plausible answer.", codex:"research-puzzles"},
   {id:"how-possible-question", term:"How-possible question", def:"A question about what made a policy or practice thinkable, usually answered by studying the meanings in texts (Doty, 1993), rather than about which cause produced it.", codex:"research-puzzles"},
   {id:"constitutive-claim", term:"Constitutive claim", def:"A claim about what makes something what it is (for example, that recognition by others is part of what sovereignty is), as opposed to a claim about what caused it.", codex:"explaining-understanding"},
   {id:"ontology", term:"Ontology", def:"Assumptions about what exists: for example, whether the social world is made of observable regularities, unobservable structures or shared meanings.", codex:"positivism-interpretivism"},
   {id:"epistemology", term:"Epistemology", def:"Assumptions about how we can know things, and what counts as good evidence for a claim.", codex:"positivism-interpretivism"},
   {id:"methodology", term:"Methodology", def:"The logic that connects a research question, evidence and conclusions. Not the same as methods, which are the specific techniques used.", codex:"positivism-interpretivism"},
   {id:"interpretivism", term:"Interpretivism", def:"The view that the social world is made of meanings people create and act on, so research should interpret those meanings in context rather than only look for general laws.", codex:"positivism-interpretivism"},
   {id:"critical-realism", term:"Critical realism", def:"A philosophy of science holding that real structures and mechanisms exist even when not directly observable, and that explanation means identifying them.", codex:"positivism-interpretivism"},
   {id:"concept-stretching", term:"Concept stretching", def:"Widening a concept to fit new cases until it no longer distinguishes anything, a problem named by Giovanni Sartori (1970).", codex:"concept-formation"},
   {id:"ladder-of-abstraction", term:"Ladder of abstraction", def:"Sartori’s idea that concepts with more defining attributes cover fewer cases, and concepts with fewer attributes cover more.", codex:"concept-formation"},
   {id:"country-year", term:"Country-year", def:"A unit of analysis with one observation for each country in each year, as in most cross-national datasets.", codex:"ir-datasets"},
   {id:"dyad-year", term:"Dyad-year", def:"A unit of analysis with one observation for each pair of countries in each year, used for questions about relations between states such as war or trade.", codex:"ir-datasets"},
   {id:"universe-of-cases", term:"Universe of cases", def:"The wider set of cases that a study’s conclusions are meant to speak to.", codex:"case-study-research"},
   {id:"scope-conditions", term:"Scope conditions", def:"Statements of where an argument is meant to hold, such as a period, region or kind of actor.", codex:"case-study-research"},
   {id:"small-n", term:"Small-N research", def:"Research that studies a small number of cases in depth, usually by comparison and within-case analysis.", codex:"comparative-method"},
   {id:"large-n", term:"Large-N research", def:"Research that analyses many observations, often thousands of country-years or dyad-years, usually with statistics.", codex:"regression-causal-inference"},
   {id:"method-of-agreement", term:"Method of agreement", def:"Mill’s method of comparing cases with the same outcome to find the factor they share.", codex:"comparative-method"},
   {id:"method-of-difference", term:"Method of difference", def:"Mill’s method of comparing cases with different outcomes to find the factor that differs.", codex:"comparative-method"},
   {id:"most-similar-design", term:"Most-similar systems design", def:"A comparison of cases that are alike in many ways but differ in outcome, to find the factor that explains the difference.", codex:"comparative-method"},
   {id:"most-different-design", term:"Most-different systems design", def:"A comparison of cases that differ in many ways but share an outcome, to find the factor they have in common.", codex:"comparative-method"},
   {id:"equifinality", term:"Equifinality", def:"When different causes or paths lead to the same outcome in different cases.", codex:"comparative-method"},
   {id:"qca", term:"Qualitative comparative analysis (QCA)", def:"A method developed by Charles Ragin that uses set logic to find combinations of conditions linked to an outcome across a moderate number of cases.", codex:"comparative-method"},
   {id:"typical-case", term:"Typical case", def:"A case that fits the general pattern well, chosen to show how the expected mechanism works.", codex:"case-selection"},
   {id:"deviant-case", term:"Deviant case", def:"A case that breaks the general pattern, chosen to find what a theory misses.", codex:"case-selection"},
   {id:"crucial-case", term:"Crucial case", def:"A case chosen because it offers a hard test of a theory: either a most-likely or a least-likely case (Eckstein, 1975).", codex:"case-selection"},
   {id:"most-likely-case", term:"Most-likely case", def:"A case where a theory should certainly work; if it fails here, the theory is in trouble.", codex:"case-selection"},
   {id:"least-likely-case", term:"Least-likely case", def:"A case where a theory should struggle; if it works here, that is strong support.", codex:"case-selection"},
   {id:"selection-bias", term:"Selection bias", def:"Bias that arises when the cases studied, or the cases that receive a “treatment” such as aid or peacekeepers, differ systematically from the others in ways linked to the outcome.", codex:"regression-causal-inference"},
   {id:"selecting-on-the-dependent-variable", term:"Selecting on the dependent variable", def:"Choosing only cases where the outcome occurred, which makes it impossible to tell whether shared factors make any difference.", codex:"case-selection"},
   {id:"process-tracing-term", term:"Process tracing", def:"Using evidence from within a case to test whether the causal mechanism a theory proposes was actually at work.", codex:"process-tracing"},
   {id:"causal-mechanism", term:"Causal mechanism", def:"The chain of steps through which a cause produces its effect.", codex:"process-tracing"},
   {id:"hoop-test", term:"Hoop test", def:"A process-tracing test using evidence that must appear if an explanation is true: failing eliminates the explanation; passing keeps it alive but doesn’t prove it.", codex:"process-tracing"},
   {id:"smoking-gun-test", term:"Smoking-gun test", def:"A process-tracing test using evidence that would appear only if an explanation is true: passing strongly supports it; failing doesn’t rule it out.", codex:"process-tracing"},
   {id:"straw-in-the-wind-test", term:"Straw-in-the-wind test", def:"A process-tracing test using evidence that is neither required by nor unique to an explanation, so it only slightly raises or lowers confidence.", codex:"process-tracing"},
   {id:"doubly-decisive-test", term:"Doubly decisive test", def:"A process-tracing test using evidence that is both required by and unique to an explanation: passing confirms it and rules out rivals.", codex:"process-tracing"},
   {id:"counterfactual", term:"Counterfactual", def:"A claim about what would have happened if something had been different. Every causal claim about a single case implies one.", codex:"counterfactuals"},
   {id:"discourse-analysis-term", term:"Discourse analysis", def:"The study of how language and texts create meanings and identities, and so make some actions and policies seem natural, necessary or unthinkable.", codex:"discourse-analysis"},
   {id:"critical-discourse-analysis", term:"Critical discourse analysis", def:"A form of discourse analysis, associated with Norman Fairclough, that links features of language closely to power and social structure.", codex:"discourse-analysis"},
   {id:"intertextuality", term:"Intertextuality", def:"The way texts quote, echo and answer other texts, so that each one must be read alongside the texts it draws on.", codex:"discourse-analysis"},
   {id:"intercoder-reliability", term:"Intercoder reliability", def:"How far two or more coders, working independently, apply a codebook in the same way. Measures such as Krippendorff’s alpha correct for chance agreement.", codex:"discourse-analysis"},
   {id:"text-as-data", term:"Text as data", def:"Computer-assisted methods (word counts, dictionaries, topic models, language models) that analyse large collections of texts.", codex:"discourse-analysis"},
   {id:"declassification", term:"Declassification", def:"The formal removal of secrecy restrictions from government records, often after a set period and sometimes with parts blacked out.", codex:"archival-research"},
   {id:"source-criticism", term:"Source criticism", def:"Judging a document by asking who made it, when, for whom and why, and what it can and can’t show.", codex:"archival-research"},
   {id:"archival-silence", term:"Archival silence", def:"A gap in the record, because something was never written down, kept, catalogued or released. A silence is not proof that nothing happened.", codex:"archival-research"},
   {id:"elite-interview", term:"Elite interview", def:"A research interview with someone who has, or had, power or specialist knowledge, such as a diplomat, official, officer or negotiator.", codex:"elite-interviews"},
   {id:"gatekeeper-research", term:"Gatekeeper (in research)", def:"A person or office that controls access to people, places or records a researcher wants to reach.", codex:"elite-interviews"},
   {id:"chatham-house-rule", term:"Chatham House Rule", def:"A rule for meetings: participants may use the information received, but may not reveal the identity or affiliation of any speaker or participant.", codex:"elite-interviews"},
   {id:"practice-turn", term:"Practice turn", def:"A movement in IR, associated with Adler and Pouliot (2011), that studies what diplomats, soldiers and officials actually do day to day.", codex:"ir-fieldwork"},
   {id:"battle-related-deaths", term:"Battle-related deaths", def:"Deaths caused by fighting between the parties to a conflict. Datasets use thresholds of them (25 a year for UCDP armed conflicts, 1,000 for wars) to decide what counts.", codex:"ir-datasets"},
   {id:"mirror-statistics", term:"Mirror statistics", def:"Trade figures reported by a country’s partners, used to compare with or fill gaps in its own reports. One country’s imports and its partner’s exports rarely match exactly.", codex:"political-economic-datasets"},
   {id:"multiple-regression", term:"Multiple regression", def:"A regression with several explanatory variables, estimating the link between each one and the outcome while holding the others constant.", codex:"regression-causal-inference"},
   {id:"control-variable", term:"Control variable", def:"A factor included in an analysis so that its influence is held constant when estimating the link between the main variables.", codex:"regression-causal-inference"},
   {id:"omitted-variable-bias", term:"Omitted-variable bias", def:"Bias in an estimate that arises when a factor affecting both the explanatory variable and the outcome is left out of the analysis.", codex:"regression-causal-inference"},
   {id:"reverse-causality", term:"Reverse causality", def:"When the supposed effect actually causes the supposed cause, or both cause each other.", codex:"regression-causal-inference"},
   {id:"endogeneity", term:"Endogeneity", def:"An umbrella term for problems where the supposed cause is not independent of the other influences on the outcome (because of a left-out factor, reverse causality or selection), so a simple regression gives a biased estimate.", codex:"regression-causal-inference"},
   {id:"difference-in-differences", term:"Difference-in-differences", def:"A design that compares how an outcome changed in an affected group with how it changed in a similar unaffected group over the same period.", codex:"regression-causal-inference"},
   {id:"instrumental-variable", term:"Instrumental variable", def:"A factor that shifts the explanatory variable, is itself as good as random, and has no other route to the outcome, used to estimate a causal effect when confounding is likely.", codex:"regression-causal-inference"},
   {id:"nested-analysis", term:"Nested analysis", def:"A mixed-methods strategy (Lieberman, 2005): a large-N analysis first, then case studies chosen from its results, on or off the regression line.", codex:"regression-causal-inference"},
   {id:"do-no-harm", term:"Do no harm", def:"The basic principle of research ethics that participants, communities, colleagues and researchers should not be put at risk by the research.", codex:"fieldwork-ethics"},
   {id:"duty-of-care", term:"Duty of care", def:"An institution’s and researcher’s responsibility to plan for the safety and wellbeing of everyone involved in a project, including the researcher.", codex:"fieldwork-ethics"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e4u3-q01", lesson:"e4u3-l1", level:1, q:"What makes a research question a “puzzle” in the IR sense?", options:[
     {t:"It is built around a surprise relative to an expectation, and more than one answer is plausible", ok:true, why:"That is the core idea: a puzzle names what is unexpected and invites rival explanations that evidence can tell apart."},
     {t:"It is about a topic nobody has studied before", why:"A gap in the literature isn’t the same as a surprise. Many puzzles concern well-studied topics."},
     {t:"It can be answered with a single fact", why:"Questions with one factual answer are descriptive questions, not puzzles."},
     {t:"It uses statistics", why:"Puzzles can be answered with any method. The puzzle is about the question, not the tool."}
   ]},
   {id:"e4u3-q02", lesson:"e4u3-l1", level:2, q:"Mei asks: “How did official speeches portray a neighbouring country so that closing the border seemed the only sensible policy?” What kind of question is this?", options:[
     {t:"A how-possible question, best answered by analysing the meanings in texts", ok:true, why:"It asks what made a policy thinkable, which is Doty’s how-possible question."},
     {t:"A why question about the causes of the decision, best answered with a regression", why:"It isn’t asking which cause produced the decision, and a regression of many countries can’t read meanings in speeches."},
     {t:"A normative question about whether the border should have closed", why:"Nothing in it asks what ought to have been done."},
     {t:"A descriptive count of how many speeches mentioned the border", why:"Counting mentions might help, but the question asks how the portrayal made a policy seem sensible."}
   ]},
   {id:"e4u3-q03", lesson:"e4u3-l1", level:1, q:"In Hollis and Smith’s terms, what is the difference between explaining and understanding?", options:[
     {t:"Explaining looks from the outside for causes and regularities; understanding reconstructs from the inside what actions meant to the actors", ok:true, why:"That is their “two stories”: an outsider’s causal story and an insider’s interpretive story."},
     {t:"Explaining is for history and understanding is for economics", why:"Both stories are told across the social sciences; the difference is the kind of account, not the discipline."},
     {t:"Explaining uses theory and understanding doesn’t", why:"Interpretive work also uses theory; it is a different kind of theory and evidence."},
     {t:"There is no real difference; they are two words for the same thing", why:"Hollis and Smith argued the two rest on different assumptions and don’t merge neatly."}
   ]},
   {id:"e4u3-q04", lesson:"e4u3-l1", level:1, q:"Which pairing of term and question is correct?", options:[
     {t:"Epistemology: how can we know about the social world?", ok:true, why:"Epistemology concerns the grounds of knowledge."},
     {t:"Ontology: which statistical software should I use?", why:"Ontology concerns what exists. Software is a method-level choice."},
     {t:"Methods: what is the social world made of?", why:"That is ontology. Methods are the techniques you use."},
     {t:"Methodology: how many interviews can I afford?", why:"That is a practical planning question. Methodology is the logic linking evidence to claims."}
   ]},
   {id:"e4u3-q05", lesson:"e4u3-l1", level:2, q:"A study counts every country holding any election as a “democracy”, including one-party states. Which problem does Sartori’s work warn about?", options:[
     {t:"Concept stretching: the concept has lost the attributes that distinguish democracies from other regimes", ok:true, why:"Widening the concept to cover nearly every regime empties it of meaning."},
     {t:"The ecological fallacy", why:"That concerns inferring individual traits from group data, which isn’t happening here."},
     {t:"Reverse causality", why:"No causal claim is being made here; the problem is the definition."},
     {t:"Low intercoder reliability", why:"Coders may agree perfectly on a bad definition. The issue is the concept itself."}
   ]},
   {id:"e4u3-q06", lesson:"e4u3-l1", level:2, q:"In one year a government fights a rebel group, causing about 300 battle-related deaths. How would UCDP and Correlates of War treat it?", options:[
     {t:"UCDP records it as an armed conflict (25 or more deaths); it is below the 1,000-death threshold Correlates of War uses for a war", ok:true, why:"The two projects use different thresholds, which is why their counts differ."},
     {t:"Both record it as a war", why:"Neither does: 300 deaths is below the 1,000-death level both use for “war”."},
     {t:"Neither records it at all", why:"UCDP’s threshold for an armed conflict is 25 battle-related deaths a year, so UCDP records it."},
     {t:"Correlates of War records it, but UCDP doesn’t", why:"It is the other way round: UCDP’s threshold is lower."}
   ]},
   {id:"e4u3-q07", lesson:"e4u3-l1", level:2, q:"Kenji wants to test whether pairs of countries with a defence treaty are less likely to have a militarised dispute. Which unit of analysis fits?", options:[
     {t:"The dyad-year", ok:true, why:"The claim is about pairs of countries over time, so each observation should be a pair in a year."},
     {t:"The country-year", why:"Country-years describe single countries; the treaty and dispute are properties of pairs."},
     {t:"The individual voter", why:"Voters don’t sign treaties or fight disputes; the claim is about states."},
     {t:"The speech", why:"Speeches could help with mechanisms, but they can’t show how often pairs of states clashed."}
   ]},
   {id:"e4u3-q08", lesson:"e4u3-l1", level:3, q:"A thesis says: “I adopt an interpretive approach.” Its methods chapter then sets out hypotheses about independent and dependent variables, tested by regression. What would an examiner most likely say?", options:[
     {t:"The philosophy and the methods don’t fit: either the approach or the design needs to change so they are consistent", ok:true, why:"Examiners look for coherence between the stated philosophy, question and methods."},
     {t:"Interpretive research never uses evidence", why:"Interpretive research uses rich evidence; it just interprets meanings rather than estimating causal effects."},
     {t:"Regression is forbidden in IR theses", why:"Regression is widely used. The problem is the mismatch with the stated approach."},
     {t:"Nothing: you can claim any philosophy you like", why:"A stated philosophy should guide the design. A mismatch suggests the author hasn’t thought it through."}
   ]},
   {id:"e4u3-q09", lesson:"e4u3-l1", level:3, q:"Which research question contains its own answer, a common design trap?", options:[
     {t:"“Why did the sanctions against Country A fail?”", ok:true, why:"It assumes failure. The study must first define what failure means and show that it happened."},
     {t:"“Did the sanctions against Country A change its policy, and if so how?”", why:"This leaves the outcome open for the evidence to decide."},
     {t:"“How did officials in Country A interpret the sanctions?”", why:"An open interpretive question; it assumes nothing about the result."},
     {t:"“Under what conditions do sanctions change a target’s policy?”", why:"A general, open causal question with no answer built in."}
   ]},
   /* ---- Lesson 2 ---- */
   {id:"e4u3-q10", lesson:"e4u3-l2", level:1, q:"According to John Gerring (2004), a case study is…", options:[
     {t:"an intensive study of a single unit for the purpose of understanding a larger class of similar units", ok:true, why:"That is Gerring’s definition: the case is studied to learn about a wider class."},
     {t:"any study with fewer than ten interviews", why:"A case study is defined by its purpose and depth, not by a number of interviews."},
     {t:"a description of an event with no wider purpose", why:"Gerring’s point is that case studies aim to understand a larger class."},
     {t:"a random sample of countries", why:"Random samples are for large-N statistical studies; cases are usually chosen on purpose."}
   ]},
   {id:"e4u3-q11", lesson:"e4u3-l2", level:2, q:"Two neighbouring states have similar size, economy, history and alliances, but only one joined a regional agreement. Lucía compares them to find what differs. Which design is this?", options:[
     {t:"A most-similar systems design, using the method of difference", ok:true, why:"Cases alike on background but different in outcome point to the factor that differs."},
     {t:"A most-different systems design, using the method of agreement", why:"That compares very different cases with the same outcome."},
     {t:"A large-N regression", why:"Two cases compared in depth are small-N research."},
     {t:"A deviant case study", why:"A deviant case breaks a general pattern; this is a paired comparison."}
   ]},
   {id:"e4u3-q12", lesson:"e4u3-l2", level:1, q:"Which is a well-known limit of Mill’s methods for social research?", options:[
     {t:"They assume a single cause, but social outcomes often have several possible causes that also interact", ok:true, why:"Plural and interacting causes (equifinality, conjunctural causation) defeat the simple methods. Mill himself doubted they suited social questions."},
     {t:"They require thousands of cases", why:"They are designed for a few cases, which is part of why they struggle."},
     {t:"They can only be used with survey data", why:"They are logics of comparison, usable with any evidence."},
     {t:"They were invented after the Second World War", why:"Mill set them out in *A System of Logic* in 1843."}
   ]},
   {id:"e4u3-q13", lesson:"e4u3-l2", level:2, q:"A theory predicts that rich, stable democracies will always join regional human rights courts. Hana studies one rich, stable democracy that stayed out. Which kind of case is this?", options:[
     {t:"A most-likely case in which the theory failed, which is damaging evidence against it", ok:true, why:"Conditions were as favourable as possible, so failure here is a hard blow."},
     {t:"A least-likely case", why:"A least-likely case is where the theory should struggle; here it should have worked easily."},
     {t:"A typical case", why:"A typical case fits the pattern; this one breaks it."},
     {t:"An irrelevant case", why:"Cases that break a theory’s predictions in favourable conditions are among the most informative."}
   ]},
   {id:"e4u3-q14", lesson:"e4u3-l2", level:3, q:"Sione wants to know what causes military coups. He studies only ten countries that had coups and finds all had economic crises. Why can’t he conclude that crises cause coups?", options:[
     {t:"He selected on the dependent variable: without countries that had crises and no coup, he can’t tell whether crises make coups more likely", ok:true, why:"If crises are common everywhere, they will appear in every coup case whether or not they matter."},
     {t:"Ten cases are never enough for any study", why:"Ten cases can support useful work. The problem is that the outcome doesn’t vary."},
     {t:"He should have used a most-similar design with ten identical countries", why:"Identical countries don’t exist, and the core problem is still the lack of cases without coups."},
     {t:"Economic data are always unreliable", why:"Data quality matters, but it isn’t the main flaw here."}
   ]},
   {id:"e4u3-q15", lesson:"e4u3-l2", level:1, q:"In process tracing, what does a hoop test do?", options:[
     {t:"If the explanation fails it, the explanation is eliminated; passing keeps it alive but doesn’t prove it", ok:true, why:"Hoop evidence is necessary for the explanation but not unique to it."},
     {t:"Passing it proves the explanation beyond doubt", why:"That would be a doubly decisive or, in a weaker form, a smoking-gun test."},
     {t:"It barely changes confidence either way", why:"That describes a straw-in-the-wind test."},
     {t:"It measures intercoder reliability", why:"That is a content-analysis check, not a process-tracing test."}
   ]},
   {id:"e4u3-q16", lesson:"e4u3-l2", level:2, q:"Explanation A says a minister resigned because of a corruption inquiry. A private letter written the day before, saying “I must go before the inquiry reports”, is found. Leaders rarely leave such letters. What kind of evidence is it for A?", options:[
     {t:"A smoking gun: finding it strongly supports A, though not finding it would not have ruled A out", ok:true, why:"The letter is close to unique to A, but not certain to exist even if A is true."},
     {t:"A hoop test: A must pass it to survive", why:"A could be true without such a letter, so it isn’t required."},
     {t:"A straw in the wind: weak either way", why:"A direct statement of the motive just before the event is much stronger than that."},
     {t:"Not evidence at all, because it is private", why:"Private documents are often the most revealing evidence, after source criticism."}
   ]},
   {id:"e4u3-q17", lesson:"e4u3-l2", level:3, q:"Dmitri’s case study shows that every step of his favoured explanation can be found in the documents. A reviewer is unconvinced. What is the most likely reason?", options:[
     {t:"He didn’t set out rival explanations and the evidence each predicts, so the same documents might fit another story equally well", ok:true, why:"Process tracing gains its strength from comparing rival explanations against evidence that distinguishes them."},
     {t:"Documents can never be used in process tracing", why:"Documents are central to process tracing."},
     {t:"He should have used a regression instead", why:"Within-case evidence is the right kind for process tracing; the problem is the missing rivals."},
     {t:"Finding evidence for every step is a sign of fabrication", why:"Not necessarily. The issue is whether the evidence discriminates between explanations."}
   ]},
   {id:"e4u3-q18", lesson:"e4u3-l2", level:2, q:"Which counterfactual best follows Tetlock and Belkin’s minimal-rewrite rule?", options:[
     {t:"If the warning cable had reached the capital before the vote rather than after, the vote might have gone the other way", ok:true, why:"It changes one small, plausible detail and keeps the rest of history intact."},
     {t:"If the country had never existed, the crisis wouldn’t have happened", why:"Deleting a whole country rewrites far too much for anything to follow."},
     {t:"If all leaders had been pacifists, there would have been no war", why:"A sweeping, implausible change that can’t test a specific claim."},
     {t:"If the twentieth century had had no nationalism, borders would be different", why:"A vast rewrite with countless knock-on changes."}
   ]},
   /* ---- Lesson 3 ---- */
   {id:"e4u3-q19", lesson:"e4u3-l3", level:1, q:"What is the main difference between content analysis and discourse analysis?", options:[
     {t:"Content analysis systematically counts features of texts with repeatable rules; discourse analysis interprets how texts produce meanings that make actions thinkable", ok:true, why:"One counts and compares; the other interprets meaning-making. Many projects use both."},
     {t:"Content analysis studies speeches and discourse analysis studies treaties", why:"Both can study any kind of text."},
     {t:"Discourse analysis needs computers and content analysis doesn’t", why:"Content analysis is more often computer-assisted; discourse analysis is usually close reading."},
     {t:"They are the same method with different names", why:"They rest on different aims and standards."}
   ]},
   {id:"e4u3-q20", lesson:"e4u3-l3", level:2, q:"A speech repeatedly calls a group of protesters “foreign-funded” and “disloyal”. Which of Doty’s tools picks this out?", options:[
     {t:"Predication", ok:true, why:"Predication is the qualities a text attaches to a subject."},
     {t:"Presupposition", why:"Presupposition is what a text takes for granted as background, not the labels attached to a subject."},
     {t:"Intercoder reliability", why:"That is a content-analysis quality check, not a discourse tool."},
     {t:"Mirror statistics", why:"That is a trade-data concept."}
   ]},
   {id:"e4u3-q21", lesson:"e4u3-l3", level:2, q:"Two coders agree on 45 of 60 speeches. Why might Krippendorff’s alpha be lower than their 75% simple agreement?", options:[
     {t:"Because alpha corrects for the agreement expected by chance, which simple percentage agreement ignores", ok:true, why:"Some agreement happens by chance, especially when one category is common, so chance-corrected measures are lower."},
     {t:"Because alpha only counts disagreements", why:"Alpha compares observed with chance-expected disagreement; it doesn’t simply count disagreements."},
     {t:"Because alpha is always exactly half of simple agreement", why:"There is no fixed relationship; it depends on the distribution of codes."},
     {t:"Because simple agreement counts each speech twice", why:"It doesn’t. 45 ÷ 60 is 75%."}
   ]},
   {id:"e4u3-q22", lesson:"e4u3-l3", level:1, q:"What is JACAR?", options:[
     {t:"The Japan Center for Asian Historical Records, an online archive under the National Archives of Japan that opened in 2001", ok:true, why:"It provides digitised records from the National Archives, the Foreign Ministry’s Diplomatic Archives and the Defence Ministry’s military history collections."},
     {t:"A conflict dataset maintained in Sweden", why:"That describes UCDP."},
     {t:"The US State Department’s documentary series", why:"That is *Foreign Relations of the United States* (FRUS)."},
     {t:"A trade database run by the UN", why:"That is UN Comtrade."}
   ]},
   {id:"e4u3-q23", lesson:"e4u3-l3", level:3, q:"Tomás finds an ambassador’s cable saying the host government “warmly welcomed” a proposal, and writes that the host government supported it. What should a careful historian do first?", options:[
     {t:"Ask who wrote the cable, for whom and why, and check it against other sources, such as the host government’s own records", ok:true, why:"The cable shows what the ambassador reported, possibly to please his own ministry. Source criticism and multi-archival checks come first."},
     {t:"Accept it, because diplomatic cables are always accurate", why:"Cables are written by people with interests and audiences; they need source criticism."},
     {t:"Discard it, because cables are always biased", why:"Biased sources can still be valuable evidence, read critically."},
     {t:"Count how many times the word “welcomed” appears in the file", why:"Counting words won’t tell him whether the report was accurate."}
   ]},
   {id:"e4u3-q24", lesson:"e4u3-l3", level:2, q:"Priya finds no record of any objection to a policy in a foreign ministry file. What can she conclude?", options:[
     {t:"Only that no objection appears in this file; objections may have been oral, filed elsewhere, destroyed or still closed", ok:true, why:"An archival silence is not proof of absence. Trouillot showed how silences enter at every stage of making records and histories."},
     {t:"That nobody objected", why:"Absence from one file can’t establish that nothing happened."},
     {t:"That the file was falsified", why:"There is no evidence of that; silences are normal in archives."},
     {t:"That the archive is useless", why:"The file can still tell her much; she just can’t infer absence from silence."}
   ]},
   {id:"e4u3-q25", lesson:"e4u3-l3", level:2, q:"A workshop is held under the Chatham House Rule. Which use of what was said is allowed?", options:[
     {t:"Using the information without revealing who said it or their affiliation", ok:true, why:"That is exactly what the Rule permits."},
     {t:"Quoting a speaker by name if the quote is accurate", why:"Naming the speaker breaks the Rule, however accurate the quote."},
     {t:"Naming the speaker’s ministry but not the speaker", why:"The Rule protects affiliation as well as identity."},
     {t:"Nothing: the information can’t be used at all", why:"The Rule explicitly allows participants to use the information they receive."}
   ]},
   {id:"e4u3-q26", lesson:"e4u3-l3", level:3, q:"Ana interviews several retired negotiators, who all describe their own country’s side as flexible and the other side as rigid. What is the best way to treat these accounts?", options:[
     {t:"As evidence of how each side remembers and presents the talks, to be checked against documents and the other side’s accounts", ok:true, why:"Elite accounts are valuable but can be self-serving; triangulation and attention to what they choose to say are key."},
     {t:"As a reliable record, because they were in the room", why:"Being present doesn’t prevent memory errors, hindsight or self-justification."},
     {t:"As worthless, because elites always lie", why:"Elite interviews are an important source; they just need cross-checking."},
     {t:"As proof that the other side was rigid, since several people said so", why:"Several people from the same side can share the same perspective; agreement helps only if the sources are independent."}
   ]},
   {id:"e4u3-q27", lesson:"e4u3-l3", level:1, q:"Which study is a classic example of ethnographic fieldwork in IR?", options:[
     {t:"Séverine Autesserre’s *Peaceland* (2014), on the everyday practices of international peacebuilders", ok:true, why:"It is based on long fieldwork among interveners and shows how their routines shaped outcomes."},
     {t:"A regression of trade data from UN Comtrade", why:"That is large-N quantitative work, not ethnography."},
     {t:"Mill’s *A System of Logic* (1843)", why:"That is a work of logic and philosophy of science."},
     {t:"A count of UN General Debate speeches", why:"That is content analysis."}
   ]},
   /* ---- Lesson 4 ---- */
   {id:"e4u3-q28", lesson:"e4u3-l4", level:1, q:"Which pairing of dataset and coverage is correct (as of November 2026)?", options:[
     {t:"SIPRI Military Expenditure Database: military spending, 1949–2025", ok:true, why:"SIPRI’s database gives consistent series for 1949–2025."},
     {t:"V-Dem: trade by product and partner since 1962", why:"That describes UN Comtrade. V-Dem measures democracy, 1789–2025."},
     {t:"UCDP: wars since 1816", why:"That is Correlates of War. UCDP’s state-based conflict data start in 1946."},
     {t:"UN Comtrade: democracy indices since 1789", why:"That is V-Dem. Comtrade covers trade from 1962."}
   ]},
   {id:"e4u3-q29", lesson:"e4u3-l4", level:1, q:"What does SIPRI’s trend-indicator value (TIV) measure?", options:[
     {t:"The volume of military resources transferred, not the financial value of arms deals", ok:true, why:"TIVs are based on unit production costs of a core set of weapons, so they show volume trends, not sale prices."},
     {t:"The price paid for each arms sale", why:"SIPRI publishes separate estimates of financial value; TIVs are not prices."},
     {t:"The number of soldiers in each army", why:"Military personnel counts appear in other data, such as Correlates of War."},
     {t:"A country’s total military budget", why:"That is in SIPRI’s Military Expenditure Database."}
   ]},
   {id:"e4u3-q30", lesson:"e4u3-l4", level:2, q:"Country A reports exporting goods worth 200 million dollars to Country B; B reports importing 215 million from A in the same year. What is the most likely explanation?", options:[
     {t:"Normal mirror-statistics differences, for example imports valued with freight and insurance (CIF) and exports without (FOB), plus timing and classification differences", ok:true, why:"UN Comtrade notes that partner figures usually don’t match for these reasons."},
     {t:"One of the governments must be lying", why:"Gaps of this size are common and have ordinary technical causes."},
     {t:"The goods were destroyed in transit", why:"Possible in rare cases, but the usual reasons are valuation, timing and classification."},
     {t:"Comtrade made a calculation error", why:"Comtrade publishes what countries report; differences between reporters are expected."}
   ]},
   {id:"e4u3-q31", lesson:"e4u3-l4", level:3, q:"A study finds that countries receiving more foreign aid grow more slowly, and concludes that aid harms growth. Which objection is strongest?", options:[
     {t:"Selection: aid tends to go to countries already in difficulty, so recipients may differ from non-recipients before any aid arrives", ok:true, why:"If donors target struggling economies, recipients were different before any aid arrived, so the comparison mixes aid’s effect with those prior differences. (The same point can be put as reverse causality: slow growth attracts aid.)"},
     {t:"Aid data are never published", why:"Aid data are widely published, for example in the World Development Indicators."},
     {t:"Growth can’t be measured", why:"Growth is measured routinely; the problem is the causal inference."},
     {t:"There is no objection: a correlation in many countries proves causation", why:"Correlation across many cases still faces selection, confounding and reverse causality."}
   ]},
   {id:"e4u3-q32", lesson:"e4u3-l4", level:2, q:"A multiple regression reports a coefficient of −0.04 on “shared membership of a regional organisation”, holding distance, trade and regime type constant. What does “holding constant” mean here?", options:[
     {t:"The estimate compares pairs of countries that are alike on distance, trade and regime type, so those measured factors are not driving it", ok:true, why:"Controls make the comparison like with like on the measured factors, though not on unmeasured ones."},
     {t:"Distance, trade and regime type did not change during the study", why:"They can vary across cases and years; the model adjusts for them statistically."},
     {t:"Those factors have no effect on conflict", why:"They may have large effects; holding them constant separates their influence from membership’s."},
     {t:"Every possible cause has now been accounted for", why:"Only measured factors are held constant; unmeasured confounders remain possible."}
   ]},
   {id:"e4u3-q33", lesson:"e4u3-l4", level:2, q:"Keshk, Reuveny and Pollins (2010) argued about trade and conflict. What was their main claim?", options:[
     {t:"That the effect runs mainly from conflict to trade (conflict reduces trade), while evidence that trade brings peace is weak", ok:true, why:"They stressed reverse causality; Hegre, Oneal and Russett (2010) replied that trade does promote peace."},
     {t:"That trade always prevents war", why:"That is the strong liberal view they challenged."},
     {t:"That trade and conflict are unrelated in every dataset", why:"They found a strong link from conflict to trade."},
     {t:"That democracy has no effect on anything", why:"Their argument concerned the direction of the trade–conflict link."}
   ]},
   {id:"e4u3-q34", lesson:"e4u3-l4", level:1, q:"Which statement about statistical significance is correct?", options:[
     {t:"A significant result may still be small; significance concerns uncertainty, not importance", ok:true, why:"With large datasets, tiny effects can be statistically significant."},
     {t:"A significant result proves causation", why:"Significance says nothing about whether a design rules out confounding or reverse causality."},
     {t:"A significant result is always large", why:"Size and significance are different things."},
     {t:"Significance means the data were collected correctly", why:"Significance tests assume the data are sound; they don’t check it."}
   ]},
   {id:"e4u3-q35", lesson:"e4u3-l4", level:3, q:"In nested analysis, Fatima’s large-N model fits poorly: many countries are far from the regression line. What does Lieberman recommend next?", options:[
     {t:"Study off-the-line (deviant) cases to discover what the model is missing, then return to the large-N analysis", ok:true, why:"When the model is weak, model-building case studies of poorly predicted cases help improve it."},
     {t:"Study only on-the-line cases to confirm the model", why:"That suits a robust model; with a poor fit, the priority is to find missing factors."},
     {t:"Abandon the research entirely", why:"A poor fit is information; nested analysis is designed to use it."},
     {t:"Delete the cases far from the line", why:"Removing awkward cases to improve the fit would bias the results."}
   ]},
   {id:"e4u3-q36", lesson:"e4u3-l4", level:2, q:"Which design is a difference-in-differences comparison?", options:[
     {t:"Comparing how trade changed before and after a country joined an agreement with how it changed for similar non-joiners over the same years", ok:true, why:"It compares changes in an affected group with changes in an unaffected group."},
     {t:"Comparing joiners’ trade after joining with non-joiners’ trade in the same year", why:"That is a single after-only comparison; it can’t remove pre-existing differences."},
     {t:"Interviewing officials about whether trade rose", why:"Interviews can reveal mechanisms, but this is not a difference-in-differences design."},
     {t:"Counting how many agreements each country has signed", why:"A count is descriptive, not a causal design."}
   ]},
   /* ---- Lesson 5 ---- */
   {id:"e4u3-q37", lesson:"e4u3-l5", level:1, q:"How are IR literature reviews typically organised?", options:[
     {t:"By debates and schools of thought, ending with the gap the project fills", ok:true, why:"Grouping sources into camps that answer the puzzle differently is the usual IR shape."},
     {t:"One paragraph per source, in the order you read them", why:"That is an annotated list, not a review; it summarises rather than synthesises."},
     {t:"Alphabetically by author", why:"That is how a reference list is ordered, not a review."},
     {t:"Only by publication date, oldest first", why:"Chronology can help within a section, but reviews are organised around arguments."}
   ]},
   {id:"e4u3-q38", lesson:"e4u3-l5", level:2, q:"“Every existing study of this policy relies on official speeches; none uses archives or interviews.” What kind of gap is this?", options:[
     {t:"A methodological gap", ok:true, why:"It is about how the question has been studied: one kind of evidence only."},
     {t:"An empirical gap", why:"An empirical gap is a case, region or period not yet studied."},
     {t:"A theoretical gap", why:"A theoretical gap is an untested explanation or comparison of theories."},
     {t:"No gap at all", why:"Relying on one kind of evidence is a recognised gap."}
   ]},
   {id:"e4u3-q39", lesson:"e4u3-l5", level:3, q:"Oluwaseun’s question asks how often regional organisations in Africa and Asia have suspended members since 1990. His proposed method is three in-depth interviews with officials. What is the main problem?", options:[
     {t:"A “how often” question needs systematic data on all relevant cases; three interviews can’t establish frequency", ok:true, why:"The golden thread is broken: the method can’t answer the question. He needs a dataset or systematic document search (interviews could add context)."},
     {t:"Interviews are never allowed in IR", why:"Interviews are common in IR; they just don’t answer frequency questions."},
     {t:"Regional organisations never suspend members", why:"Some do; the African Union, for example, has suspended members after coups. The issue is the design."},
     {t:"He needs a least-likely case", why:"Case selection isn’t the issue; a frequency question needs coverage of all cases."}
   ]},
   {id:"e4u3-q40", lesson:"e4u3-l5", level:2, q:"Hana will interview activists in a country where criticising the government is dangerous. Which consent procedure is usually safest?", options:[
     {t:"Oral consent after a clear explanation, without writing down names", ok:true, why:"A signed form creates a record linking named people to the research, which could endanger them."},
     {t:"Signed consent forms stored with the transcripts", why:"This creates exactly the record that could identify participants if seized."},
     {t:"No consent, to protect participants", why:"Consent is still required; the question is how to record it safely."},
     {t:"Posting consent forms online for transparency", why:"That would expose participants publicly."}
   ]},
   {id:"e4u3-q41", lesson:"e4u3-l5", level:1, q:"Before planning fieldwork in another country, which check is essential?", options:[
     {t:"Whether the country requires a research permit, a specific visa or local ethics approval", ok:true, why:"Some countries do, and approvals can take months; ignoring them can endanger you and your partners."},
     {t:"Whether the country’s capital has a good airport", why:"Practical, but not an ethical or legal requirement for research."},
     {t:"Whether your favourite theory applies there", why:"The research should test the theory, not presuppose it."},
     {t:"Whether you can avoid ethics review by travelling as a tourist", why:"Deliberately evading ethics review and local rules is unethical and may be illegal."}
   ]},
   {id:"e4u3-q42", lesson:"e4u3-l5", level:2, q:"Which sentence follows IR writing conventions best?", options:[
     {t:"“As of November 2026, the foreign ministry’s position, stated by its spokesperson, was that talks should resume.”", ok:true, why:"It dates a changeable fact and says which part of the state spoke, and through whom."},
     {t:"“Today the country thinks talks should resume.”", why:"“Today” will date badly, and “the country thinks” doesn’t say who held the view."},
     {t:"“Everyone knows talks should resume.”", why:"Unsupported and vague; academic writing attributes positions."},
     {t:"“The country obviously wants peace.”", why:"“Obviously” asserts rather than evidences, and the actor is vague."}
   ]},
   {id:"e4u3-q43", lesson:"e4u3-l5", level:3, q:"A local research assistant did much of the translation and interpretation for Lucía’s interviews. Naming the assistant could put them at risk. What should Lucía do?", options:[
     {t:"Acknowledge the contribution in a way agreed with the assistant (for example without the full name) and discuss co-authorship if their intellectual input was substantial", ok:true, why:"Fair credit and safety both matter; agree with the assistant how they are credited."},
     {t:"Leave the assistant out entirely", why:"Erasing collaborators’ work is a long-criticised problem in international research."},
     {t:"Name them fully anyway, because credit always comes first", why:"Credit must not endanger the person it is meant to honour."},
     {t:"List herself as translator", why:"Claiming someone else’s work is a breach of research integrity."}
   ]},
   {id:"e4u3-q44", lesson:"e4u3-l5", level:1, q:"How should a thesis cite a UN Security Council resolution?", options:[
     {t:"By its document symbol and year, such as S/RES/1325 (2000)", ok:true, why:"UN documents are identified by their official symbols."},
     {t:"By the name of the news site that reported it", why:"Cite the primary document, not a secondary report."},
     {t:"By the date only", why:"Many documents share dates; the symbol identifies the document."},
     {t:"Resolutions don’t need citations", why:"Every source, including primary documents, needs a citation."}
   ]},
   {id:"e4u3-q45", lesson:"e4u3-l5", level:2, q:"Where countries use different names for a disputed place, what do many IR scholars do?", options:[
     {t:"Give both names on first use, explain the choice of name used afterwards, and attribute each claim to those who make it", ok:true, why:"This keeps the writing neutral and transparent."},
     {t:"Use only the name preferred by their own country", why:"That signals a position in the dispute without explaining it."},
     {t:"Avoid mentioning the place at all", why:"If it is relevant, it should be discussed; the issue is how to name it neutrally."},
     {t:"Invent a new neutral name", why:"Invented names confuse readers; established names with explanation are clearer."}
   ]}
  ]
});
