/* Track 4 · Unit 6 · Research questions and design */
ICA.addUnit({
  id:"t4u6", track:"t4", n:6, title:"Research questions and design", icon:"🧪",
  blurb:"Every good study starts as a clear question and a plan that can really answer it. Turn a topic into a focused question, link it to theory and measurement, choose a design and a sample that fit, judge validity and reliability, and put it all on one page as a proposal.",
  goals:[
    "Narrow a topic into a focused research question, name its type, and check it with FINER and, where it fits, PICO, PECO, SPIDER or PCC",
    "Explain how theory, concepts, variables and measures connect, and write clear, testable hypotheses with the right unit of analysis",
    "Choose between experiments, quasi-experiments, cross-sectional, longitudinal, case study, ethnographic and mixed methods designs to fit a question",
    "Pick a sampling method, explain sample size in plain terms, and tell random sampling apart from random assignment",
    "Judge a study’s internal, external and construct validity and the reliability of its measures, and write a one-page research proposal"
  ],
  read:[
    {book:"bhatt", where:"Chapters 2–8: “Thinking Like a Researcher”, “The Research Process”, “Theories in Scientific Research”, “Research Design”, “Measurement of Constructs”, “Scale Reliability and Validity” and “Sampling”", note:"Written in 2012 (a revised edition from the University of Southern Queensland, on Pressbooks, keeps the same chapter numbers and titles). The core ideas still hold. Since then, preregistration, open data and replication studies have become much more common, online participant panels and digital trace data are widely used, and mixed methods has its own well-developed designs. The lessons add these."},
    {book:"soc", where:"Chapter 2, “Sociological Research”: Sections 2.1 “Approaches to Sociological Research” and 2.2 “Research Methods” (on LibreTexts: 2.2 and 2.3)", note:"A short, friendly introduction to the same ideas, with sociology examples, mostly from the United States."},
    {book:"hurst", where:"Chapter 2 (the qualitative research design process), Chapter 4 (finding a research question) and Chapter 5, “Sampling”", note:"For the qualitative side of design: from topic to question, choosing cases and participants, and how many."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"t4u6-l1", title:"From topic to research question", minutes:50,
   hook:{q:"Amara wants to research “climate change and farming”. What is the biggest problem with starting there?", options:["Climate change is too controversial to study","It’s a topic, not a question: there is no way to tell when it has been answered","Farming has already been studied enough","She needs a hypothesis before she can have a topic"], answer:1, reveal:"**It’s a topic, not a question.** A topic names an area; a research question names one thing you will find out, about whom, where and when, so you know what evidence would answer it. Thousands of studies sit inside “climate change and farming”. This lesson shows how to narrow a topic step by step and check the question you end up with."},
   goals:[
     "Tell a topic, a problem, a research question, an aim and objectives apart",
     "Narrow a broad topic into a focused question by adding who, what, where and when",
     "Classify questions as descriptive, comparative, relational, causal or exploratory",
     "Check a question with the FINER criteria",
     "Structure questions with PICO, PECO, SPIDER or PCC, and know where each came from"
   ],
   learn:[
    {h:"Topics, problems and questions", body:[
      {lead:"A topic is a place on a map. A research question is an address you can actually walk to."},
      "Most projects start with a **topic**: an area you care about, such as “mobile money”, “nurse burnout” or “river pollution”. A topic is a good start, but you can’t answer it. There is no point at which “river pollution” is finished.",
      "Between the topic and the question sits a **problem**: something that is puzzling, worrying or unknown. “Small towns along this river have no data on whether their wells are safe” is a problem. It tells you why the work is worth doing.",
      "A [[research-question|research question]] is the one thing your study will find out, written so that evidence could answer it. Around it, proposals usually add:",
      {list:[
        "**An aim**: the overall purpose in one sentence (“to find out whether wells near farms are more often contaminated”).",
        "**Objectives**: the concrete steps that achieve the aim (“test 60 wells”, “compare wells near and far from farms”, “interview well owners about their worries”).",
        "**Sub-questions**: smaller questions that together answer the main one."
      ]},
      {ex:"Topic: river pollution\nProblem: towns along one river have no data on well safety\nQuestion: Are wells within 500 m of farmland more often contaminated with nitrates than wells further away, in the towns along this river?\nAim: to compare nitrate contamination in wells near and far from farmland\nObjectives: sample wells in both zones; test them with one standard method; compare the results", label:"Worked example (invented study)"},
      {key:"The question comes first. The design, the sample, the measures and the analysis are all chosen to answer it."}
    ]},
    {h:"Narrowing a topic", body:[
      "Narrowing is the skill most new researchers find hardest. The usual instinct is to keep the topic big so nothing interesting is left out. But a big question needs a big study, and a small project with a big question ends up answering nothing well.",
      "You narrow by adding detail. Ask:",
      {list:[
        "**Who?** Which people, organisations or things: first-year nursing students, family-owned shops, primary schools, wells.",
        "**What exactly?** Which aspect: not “mental health” but “sleep”, not “technology” but “mobile money for paying school fees”.",
        "**Where?** A country, a region, a city, one hospital.",
        "**When?** A period, a season, before and after a change.",
        "**Which angle?** Your field’s way of looking: cost, experience, history, policy, design."
      ]},
      "Reading is the other half of narrowing. A quick look at what has already been published (Unit 2 shows how to search and Unit 5 how to write a {{literature-review}}) shows you which parts of a topic are well studied and where the gaps are. A good question usually sits in a gap, or tests a known finding somewhere new.",
      {fig:"<svg viewBox=\"0 0 340 392\"><defs><marker id=\"t4u6-l1-ar\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"d-lup\" x=\"10\" y=\"8\" width=\"320\" height=\"62\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"170\" y=\"30\" text-anchor=\"middle\">1 Topic</text><text class=\"s\" x=\"170\" y=\"48\" text-anchor=\"middle\">Hygiene in primary schools</text><rect class=\"d-gold\" x=\"30\" y=\"92\" width=\"280\" height=\"62\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"170\" y=\"114\" text-anchor=\"middle\">2 Focus</text><text class=\"s\" x=\"170\" y=\"132\" text-anchor=\"middle\">Handwashing after break,</text><text class=\"s\" x=\"170\" y=\"148\" text-anchor=\"middle\">in one district</text><rect class=\"d-sage\" x=\"50\" y=\"176\" width=\"240\" height=\"62\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"170\" y=\"198\" text-anchor=\"middle\">3 Gap</text><text class=\"s\" x=\"170\" y=\"216\" text-anchor=\"middle\">Cheap soap stations</text><text class=\"s\" x=\"170\" y=\"232\" text-anchor=\"middle\">have not been tested</text><rect class=\"d-rose\" x=\"70\" y=\"260\" width=\"200\" height=\"80\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"170\" y=\"282\" text-anchor=\"middle\">4 Question</text><text class=\"s\" x=\"170\" y=\"300\" text-anchor=\"middle\">Do soap stations by the</text><text class=\"s\" x=\"170\" y=\"316\" text-anchor=\"middle\">door raise handwashing</text><text class=\"s\" x=\"170\" y=\"332\" text-anchor=\"middle\">after break?</text><path class=\"d-ink\" d=\"M170 72 L170 89\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l1-ar)\"/><path class=\"d-ink\" d=\"M170 156 L170 173\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l1-ar)\"/><path class=\"d-ink\" d=\"M170 240 L170 257\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l1-ar)\"/><text class=\"s\" x=\"170\" y=\"364\" text-anchor=\"middle\">Invented example. Each step adds</text><text class=\"s\" x=\"170\" y=\"382\" text-anchor=\"middle\">who, what, where or when.</text></svg>", alt:"Four boxes stacked like a funnel, each narrower than the one above, joined by downward arrows. 1 Topic: hygiene in primary schools. 2 Focus: handwashing after break, in one district. 3 Gap: cheap soap stations have not been tested. 4 Question: do soap stations by the door raise handwashing after break? Note: invented example; each step adds who, what, where or when.", cap:"Narrowing a topic into a question. Each step makes the study smaller and the answer clearer."},
      {tip:"Write your question down, then write the answer you might get (“Yes, wells near farms were three times as likely to exceed the limit”). If you can’t imagine what an answer would look like, the question isn’t focused yet."}
    ]},
    {h:"Five kinds of question", body:[
      "Questions come in different kinds, and the kind decides much of the design. One common way to group them:",
      {table:[
        ["Type","What it asks","Example (all invented)"],
        ["Descriptive","What is happening, how much, how often?","What share of market traders in one city accept mobile payments?"],
        ["Comparative","Do groups, places or times differ?","Do rural and urban clinics differ in waiting times?"],
        ["Relational","Do two things go together?","Is commuting time related to sleep among factory workers?"],
        ["Causal","Does one thing change another?","Does a text-message reminder raise vaccination rates?"],
        ["Exploratory","What is going on here, and how do people make sense of it?","How do new teachers in remote schools cope with isolation?"]
      ]},
      "**Descriptive** questions need careful measurement and a sample that represents the population. **Comparative** and **relational** questions need enough cases in each group and good measures of both variables. **Causal** questions are the hardest: a [[correlation]] isn’t enough, so they need designs that rule out other explanations (Lesson 3, and {{correlation-causation}}). **Exploratory** questions usually start with “how” or “what” and suit qualitative designs, where you don’t know enough yet to measure.",
      {warn:"Watch the verbs. “Does X **improve** Y?” is a causal question. If your design can only show that X and Y go together, ask a relational question instead (“Is X associated with Y?”), or change the design."}
    ]},
    {h:"Is it a good question? FINER", body:[
      "A widely used checklist comes from *Designing Clinical Research*, a textbook by Stephen Hulley, Steven Cummings and colleagues. Its acronym, **[[finer-criteria|FINER]]**, works in any field:",
      {table:[
        ["Letter","Ask yourself","Warning sign"],
        ["F Feasible","Do I have the time, money, skills, access and enough participants?","“I’ll survey every teacher in the country” on a student budget"],
        ["I Interesting","Does it interest me, and people who could use the answer?","You’d struggle to explain why anyone should care"],
        ["N Novel","Does it confirm, refute or extend what is known?","Repeating a settled finding with nothing new about place, people or method"],
        ["E Ethical","Can it be done without undue risk to anyone?","It needs deception, pressure or data people wouldn’t agree to share"],
        ["R Relevant","Will the answer matter for knowledge, practice or policy?","Nobody would act differently whatever you found"]
      ]},
      "**Novel** doesn’t mean nobody has ever studied anything like it. Testing a known finding with a different population, in another country or with a better method adds real knowledge. Replications are valuable.",
      "**Feasible** is where most student projects fail. Before you commit, list what you need: people who will take part, permission to enter a site, data that actually exists, equipment, a translator. If one of these is doubtful, narrow again or change the design.",
      {ex:"First draft: “Does social media harm young people’s mental health worldwide?”\nF: not feasible for one person; “worldwide” and “harm” are huge.\nI and R: yes, very.\nN: thousands of studies exist; what would this add?\nE: involves young people, so extra safeguards are needed.\nRevised: “Among 16–18-year-olds at three schools in one city, is time spent on social media after 10 p.m. associated with self-reported sleep quality?”\nNarrower, measurable, feasible, still relevant, and honest that it’s relational, not causal.", label:"Worked example: a FINER check"}
    ]},
    {h:"Structured questions: PICO and its relatives", body:[
      "In health research, questions are often broken into parts with **[[pico-framework|PICO]]**. The University of Oxford’s Centre for Evidence-Based Medicine credits a 1995 paper by W. Scott Richardson and colleagues in *ACP Journal Club* as the first use of PICO to build a clinical question.",
      {list:[
        "**P**: Population, patient or problem. Who are we asking about?",
        "**I**: Intervention. What treatment, programme or action?",
        "**C**: Comparison. Compared with what: usual care, nothing, another option?",
        "**O**: Outcome. What result will we measure?"
      ]},
      {ex:"P: adults with type 2 diabetes in rural clinics\nI: monthly group education sessions\nC: usual one-to-one advice\nO: blood sugar control (HbA1c) after 12 months\nQuestion: In adults with type 2 diabetes attending rural clinics, do monthly group sessions, compared with usual one-to-one advice, improve blood sugar control after 12 months?", label:"Worked example: PICO (invented)"},
      "Some people add **T** for time frame (PICOT). Other fields adapted the idea for questions PICO doesn’t fit:",
      {table:[
        ["Framework","Parts","Best for"],
        ["PECO","Population, Exposure, Comparator, Outcome","Exposures nobody chooses or assigns: air pollution, noise, a workplace chemical. Set out by Morgan and colleagues in *Environment International* (2018)"],
        ["SPIDER","Sample, Phenomenon of Interest, Design, Evaluation, Research type","Searching for qualitative and mixed methods studies. Proposed by Cooke, Smith and Booth in *Qualitative Health Research* (2012)"],
        ["PCC","Population (or Participants), Concept, Context","Scoping reviews, which map a field rather than test an effect. Recommended by JBI (formerly the Joanna Briggs Institute)"]
      ]},
      "These tools were built to help people search for and review evidence (Units 2 and 5). They also help when designing a study, because they force you to name who, what and compared with what.",
      {tip:"Outside health, you can borrow the logic without the acronym. An education question might name the learners, the teaching approach, what it is compared with and the learning outcome. A history question might name the people, the place, the period and the kind of source."}
    ]},
    {h:"Common traps", body:[
      "Most weak questions fail in one of a few predictable ways:",
      {table:[
        ["Trap","Example","Better"],
        ["Too broad","How does tourism affect islands?","How has holiday-rental growth changed rents in two towns on one island since 2015?"],
        ["Already obvious","Do people with no internet use online banking less?","Which offline banking services do older adults in one region still rely on, and why?"],
        ["A value question","Should schools ban phones?","How did pupils’ break-time activity change after one school’s phone ban?"],
        ["Two questions in one","Do cooperatives raise farmers’ income and improve soil?","Split into two questions, or pick one"],
        ["Built-in assumption","Why do young people no longer read newspapers?","How do 18–25-year-olds in one city get their news?"]
      ]},
      "A **value question** (“should…?”) can’t be settled by evidence alone, because it depends on what people think is good. Research can inform it by answering factual parts: what happens, to whom, at what cost.",
      "Your question may change as you read and plan. That’s normal. What matters is that the final question, the design and the analysis match each other. Lesson 5 calls this alignment."
    ]}
   ],
   try:[
    {id:"t4u6-l1-x1", type:"sort", q:"Is each of these a topic, or a research question someone could answer with evidence?", buckets:["Topic (still too open)","Research question"], items:[
      {t:"Food waste in restaurants", b:0, why:"It names an area but says nothing about what will be found out, about whom, or where."},
      {t:"How much edible food do 20 restaurants in one city throw away in a typical week, by type of food?", b:1, why:"It says what will be measured, for which restaurants, where and over what period."},
      {t:"Women in engineering", b:0, why:"An important area, but there is no specific question yet: careers? pay? education? which country?"},
      {t:"Is the share of women among engineering graduates in one country different in 2024 from 2004?", b:1, why:"A comparative question with a clear group, place and two time points; existing statistics could answer it."},
      {t:"Traditional medicine", b:0, why:"A topic with no stated aspect, place, group or question."},
      {t:"How do patients at one rural clinic decide whether to use traditional remedies alongside prescribed medicine?", b:1, why:"An exploratory question with a clear group and setting, suitable for interviews."}
    ]},
    {id:"t4u6-l1-x2", type:"match", q:"Match each invented question to its type.", pairs:[
      ["What share of households in one district have a working toilet?","Descriptive","It asks how much or how common something is in one population."],
      ["Do apprentices and university graduates in the same trade earn different starting salaries?","Comparative","It compares two groups on one outcome."],
      ["Is the number of trees on a street related to summer street temperature?","Relational","It asks whether two variables go together, without claiming that one causes the other."],
      ["Does adding a free lunch to an adult literacy class increase how many people finish it?","Causal","It asks whether one change produces another, which needs a design that rules out other explanations."],
      ["How do refugee families experience their first school year in a new country?","Exploratory","It asks about experiences and meanings that aren’t yet known well enough to measure."]
    ]},
    {id:"t4u6-l1-x3", type:"mcq", q:"Tomás is a student with six months and no budget. Which version of his question passes the **Feasible** test best?", options:[
      {t:"How do part-time students at his own college balance paid work and study? (about 15 interviews)", ok:true, why:"Yes. He can reach these students, 15 interviews fit in six months, and it needs no money beyond his time."},
      {t:"How do all university students in his country balance work and study?", why:"A national study needs a large random sample, funding and a team. Interesting, but not feasible for one student in six months."},
      {t:"Does part-time work cause lower grades among students worldwide?", why:"A worldwide causal question would need huge data and a strong causal design. Not feasible here, and the causal claim would be hard to support."},
      {t:"What have students thought about work throughout history?", why:"Far too broad: no clear group, place, period or sources."}
    ]},
    {id:"t4u6-l1-x4", type:"match", q:"A study asks: “In adults with long-term back pain (1), does a weekly online exercise class (2), compared with an exercise leaflet (3), reduce pain scores after three months (4)?” Match each numbered part to its PICO letter.", pairs:[
      ["(1) Adults with long-term back pain","P: population","These are the people the question is about."],
      ["(2) A weekly online exercise class","I: intervention","This is the action being tested."],
      ["(3) An exercise leaflet","C: comparison","This is what the intervention is compared with."],
      ["(4) Pain scores after three months","O: outcome","This is the result that will be measured."]
    ]},
    {id:"t4u6-l1-x5", type:"mcq", q:"Lucía wants to review what is known about how long-distance truck drivers experience fatigue, using interview and focus-group studies. Which framework fits her search best?", options:[
      {t:"SPIDER", ok:true, why:"Right. SPIDER (Sample, Phenomenon of Interest, Design, Evaluation, Research type) was designed for finding qualitative and mixed methods studies about experiences."},
      {t:"PICO", why:"PICO suits questions about the effect of an intervention compared with something else. Lucía has no intervention or comparison; she wants experiences."},
      {t:"PECO", why:"PECO is for the effect of an exposure on an outcome, such as noise on blood pressure. Her question is about experiences, not effects."},
      {t:"FINER", why:"FINER checks whether a question is a good one; it doesn’t break a question into searchable parts."}
    ]},
    {id:"t4u6-l1-x6", type:"spot", q:"Kenji drafted this plan. Tap each part with a **problem**.", ask:"a problem", parts:[
      {t:"Topic: community gardens in one city.", flag:false, why:"Starting from a topic is fine; it just needs narrowing, which he goes on to do."},
      " ",
      {t:"Question: Should the council fund more community gardens?", flag:true, why:"A value question. Evidence can inform it, but can’t settle it. A researchable version: “What do gardeners say they gain from the three council-funded gardens?” or “Who uses the gardens, and how often?”"},
      " ",
      {t:"Sub-question: Who uses the three gardens, and how often?", flag:false, why:"A clear descriptive question he could answer by counting visits or with a short survey."},
      " ",
      {t:"Sub-question: Do gardens cause better health and lower crime in the city?", flag:true, why:"Two questions in one, both causal and city-wide. His small study of three gardens can’t support either claim."},
      " ",
      {t:"Method: short interviews with 12 gardeners who agree to take part.", flag:false, why:"A reasonable, feasible method for learning what gardens mean to the people who use them."}
    ]},
    {id:"t4u6-l1-x7", type:"mcq", q:"Fatima’s question is: “Does owning a dog increase how much older adults walk?” She plans one survey asking older adults whether they own a dog and how much they walk. What is the best advice?", options:[
      {t:"Reword it as a relational question (“Is dog ownership associated with walking?”), or choose a design that can test cause.", ok:true, why:"Yes. One survey at one time can show that the two go together, but not which causes which, or whether something else (such as health) explains both."},
      {t:"Keep the question; a large enough survey proves cause.", why:"Size doesn’t fix the problem. A huge survey still shows only an association."},
      {t:"Drop the walking part, because walking can’t be measured.", why:"Walking can be measured (questions, step counters). The issue is the causal wording."},
      {t:"Add “in the world” so the question is more relevant.", why:"That makes it less feasible and doesn’t fix the mismatch between a causal question and a one-time survey."}
    ]}
   ],
   apply:{intro:"Use a topic you genuinely care about, from work, study, your community or your curiosity. You will build on it through the rest of this unit.", tasks:[
     {t:"Narrow your topic in four steps", how:["Write your topic in two to five words.","Add who, what aspect, where and when, one at a time, rewriting the topic after each.","Do a five-minute search (any free search tool) to see whether people have studied your version. Note one thing that seems unknown.","Write your research question in one sentence, then an aim and two or three objectives."], write:"Topic… After who… after what… after where/when… What seems unknown… My question… Aim… Objectives…"},
     {t:"Name the type and run a FINER check", how:["Decide whether your question is descriptive, comparative, relational, causal or exploratory.","Check that its verbs match: is it claiming cause?","Go through F, I, N, E and R, writing one honest sentence for each.","Revise the question if any letter is weak."], write:"Type… F… I… N… E… R… Revised question…"},
     {t:"Structure it", how:["If your question is about an intervention, write it as PICO. If it’s about an exposure, use PECO. If it’s about experiences, use SPIDER. If you want to map a whole field, use PCC.","If none fits, list the people, the thing you’re studying, the comparison (if any) and the outcome or focus.","Turn the parts into a list of search words you could use later (Unit 2)."], write:"Framework… Each part… Search words…"}
   ], proof:"In your notes: your topic, each narrowing step, a one-sentence research question with its type, an aim and objectives, a FINER check, and the question broken into its parts."},
   read:[
    {book:"bhatt", where:"Chapter 3, “The Research Process”", note:"Research paradigms, then an overview of the research process from questions and reading through design to data collection and reporting (it suggests writing a proposal), and finally common mistakes researchers make."},
    {book:"soc", where:"Chapter 2, Section 2.1 “Approaches to Sociological Research” (on LibreTexts: 2.2)", note:"The first steps of the research cycle: asking a question and reviewing the literature."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"t4u6-l2", title:"Theory, concepts and hypotheses", minutes:55,
   hook:{q:"Two studies of the same town are published in the same year. One says 12% of households are poor; the other says 31%. Neither made a mistake in its sums. How can both be right?", options:["One of them must have used fake data","They defined and measured “poor” differently","Poverty changes too fast to measure","The larger number is always the correct one"], answer:1, reveal:"**They defined and measured “poor” differently.** One might count households below an income line; the other might count households lacking several basics, such as enough food, safe water and schooling. Both are reasonable [[operational-definition|operational definitions]] of one concept. This lesson shows how researchers move from big ideas to things they can measure, and why every step is a choice to explain."},
   goals:[
     "Explain what a theory does in a study, and tell theory-testing from theory-building research",
     "Turn a concept into variables and indicators through conceptualisation and operationalisation",
     "Name levels of measurement and the unit of analysis, and avoid the ecological fallacy",
     "Identify confounding variables, and write clear, testable hypotheses"
   ],
   learn:[
    {h:"What theory does in research", body:[
      {lead:"Data tell you what happened. A theory offers a reason why."},
      "In everyday talk, “theory” means a hunch. In research, a [[theory-research|theory]] is a set of connected ideas that explains how and why something happens, and under what conditions. Bhattacherjee’s textbook describes it as a system of constructs (concepts) and propositions (relationships between them) that together explain a phenomenon, within certain assumptions and boundary conditions. The sociology unit defined [[theory]] for society; the idea is the same in every field.",
      "Theories you may meet:",
      {list:[
        "**The theory of planned behaviour** (Icek Ajzen, 1991): people’s intentions, and so their behaviour, depend on their attitudes, on what they think others expect of them, and on how much control they feel they have. Health researchers use it to study things like hand hygiene or exercise.",
        "**Diffusion of innovations** (Everett Rogers, first published in 1962): new ideas and technologies spread through a population over time, adopted first by a few and later by most. It has been used to study everything from new seeds to mobile payments."
      ]},
      "Theory gives a study three things. It tells you **what to look at** (which variables matter), **what to expect** (hypotheses), and **what your result means** (does it support, challenge or extend the explanation?). A study without any theory can still describe, but it struggles to explain.",
      "Research relates to theory in two directions. **Theory-testing** (deductive) research starts from a theory, derives a prediction and checks it against data. **Theory-building** (inductive) research starts from data, often qualitative, and builds an explanation from patterns it finds. Many projects do both, which is why research is often drawn as a cycle ({{scientific-method-sociology}}).",
      {tip:"In proposals you will see “theoretical framework” (an existing theory you apply) and “conceptual framework” (your own map of the concepts and how you expect them to connect). Usage varies between fields and supervisors, so check what yours expects."}
    ]},
    {h:"Concepts, and saying what you mean", body:[
      "Theories are built from [[concept-research|concepts]]: abstract ideas such as trust, food security, workload, resilience or digital skills. Some textbooks, including Bhattacherjee’s, call concepts built specifically for research **constructs**.",
      "Concepts are slippery. Ask ten people what “digital skills” means and you’ll get ten answers. So before measuring anything, researchers do **[[conceptualisation|conceptualisation]]**: they write down precisely what they mean, usually drawing on earlier studies.",
      "Many concepts have **dimensions**: separate parts that together make up the whole. One researcher might define digital skills as four dimensions: finding information, communicating, staying safe online and creating content. Another might include only the first two. Neither is wrong, but readers need to know which you used, and your results only apply to your definition.",
      {ex:"Concept: job stress (nurses)\nConceptual definition: the strain nurses feel when the demands of their work exceed the resources they have to meet them\nDimensions: workload; lack of control over shifts; conflict with colleagues; emotional demands of patient care", label:"Worked example (invented study)"},
      {warn:"A common slip is to jump straight from a concept to a survey question. If you skip conceptualisation, you may measure only one dimension (say, workload) and then claim to have measured the whole concept (stress)."}
    ]},
    {h:"From concept to measurement", body:[
      "Next comes **operationalisation**: deciding exactly how each concept will be observed or measured. The result is an [[operational-definition|operational definition]], which you met in the sociology unit. Each measurable piece is a [[variable]], and the specific question, test, count or observation you use is an **indicator**.",
      {fig:"<svg viewBox=\"0 0 340 372\"><defs><marker id=\"t4u6-l2-ar\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><text class=\"s\" x=\"30\" y=\"16\" text-anchor=\"middle\">abstract</text><path class=\"d-ink\" d=\"M30 170 L30 30\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l2-ar)\"/><path class=\"d-ink\" d=\"M30 190 L30 330\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l2-ar)\"/><text class=\"s\" x=\"30\" y=\"350\" text-anchor=\"middle\">concrete</text><rect class=\"d-lup\" x=\"62\" y=\"6\" width=\"270\" height=\"66\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"197\" y=\"28\" text-anchor=\"middle\">Theory</text><text class=\"s\" x=\"197\" y=\"46\" text-anchor=\"middle\">Social ties help people</text><text class=\"s\" x=\"197\" y=\"62\" text-anchor=\"middle\">find work</text><rect class=\"d-gold\" x=\"62\" y=\"100\" width=\"270\" height=\"66\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"197\" y=\"122\" text-anchor=\"middle\">Concept</text><text class=\"s\" x=\"197\" y=\"140\" text-anchor=\"middle\">Social ties</text><text class=\"s\" x=\"197\" y=\"156\" text-anchor=\"middle\">(“social capital”)</text><rect class=\"d-sage\" x=\"62\" y=\"194\" width=\"270\" height=\"66\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"197\" y=\"216\" text-anchor=\"middle\">Variable</text><text class=\"s\" x=\"197\" y=\"234\" text-anchor=\"middle\">Size of a person’s</text><text class=\"s\" x=\"197\" y=\"250\" text-anchor=\"middle\">job-help network</text><rect class=\"d-rose\" x=\"62\" y=\"288\" width=\"270\" height=\"66\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"197\" y=\"310\" text-anchor=\"middle\">Indicator (measure)</text><text class=\"s\" x=\"197\" y=\"328\" text-anchor=\"middle\">“How many people could help</text><text class=\"s\" x=\"197\" y=\"344\" text-anchor=\"middle\">you find a job?” 0 / 1–2 / 3+</text><path class=\"d-ink\" d=\"M110 74 L110 96\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l2-ar)\"/><text class=\"s\" x=\"124\" y=\"90\" text-anchor=\"start\">pick a concept</text><path class=\"d-ink\" d=\"M110 168 L110 190\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l2-ar)\"/><text class=\"s\" x=\"124\" y=\"184\" text-anchor=\"start\">conceptualise</text><path class=\"d-ink\" d=\"M110 262 L110 284\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l2-ar)\"/><text class=\"s\" x=\"124\" y=\"278\" text-anchor=\"start\">operationalise</text></svg>", alt:"A ladder of four boxes from abstract at the top to concrete at the bottom, with a double arrow on the left labelled abstract and concrete. Theory: social ties help people find work. Arrow labelled pick a concept. Concept: social ties (social capital). Arrow labelled conceptualise. Variable: size of a person’s job-help network. Arrow labelled operationalise. Indicator: the survey item how many people could help you find a job, with answers 0, 1 to 2, 3 or more.", cap:"From theory to measure. Each step down is a choice that readers need to see."},
      "Good practice is to use **several indicators** for important concepts, because any single question is a rough measure. It also helps to reuse measures that other researchers have tested, so results can be compared, but check that they were tested with people like yours and in your language (Lesson 5).",
      "Variables differ in their **[[levels-of-measurement|level of measurement]]**, a scheme set out by the psychologist S. S. Stevens in 1946. The level decides which summaries and analyses make sense:",
      {table:[
        ["Level","What the numbers mean","Example"],
        ["Nominal","Categories with no order","Language spoken at home; type of school"],
        ["Ordinal","Ordered categories, uneven gaps","Never / sometimes / often; education level"],
        ["Interval","Equal gaps, no true zero","Temperature in °C; calendar year"],
        ["Ratio","Equal gaps and a true zero","Income; distance; number of children"]
      ]},
      "You can’t sensibly average nominal categories (the “average language” means nothing). Whether you may average [[ordinal-data|ordinal]] answers, such as agreement scales, is debated; Unit 8 returns to this."
    ]},
    {h:"Units of analysis and the ecological fallacy", body:[
      "The [[unit-of-analysis|unit of analysis]] is the “who” or “what” your study draws conclusions about: individual people, households, classrooms, firms, villages, countries, news articles, social media posts, laws. It isn’t always the same as the thing you collect data from. You might interview head teachers (people) to learn about schools (the unit of analysis).",
      "Mixing up levels leads to a classic error, the **[[ecological-fallacy|ecological fallacy]]**: concluding something about individuals from data about groups. The sociologist W. S. Robinson showed in 1950, using US census data, that a correlation across states can differ hugely from, and even reverse, the correlation among the individuals living in them.",
      {ex:"Finding: districts with more internet cafés have higher average exam scores.\nTempting conclusion: students who use internet cafés score higher.\nProblem: the data are about districts, not students. Wealthier districts may have both more cafés and better-funded schools, while the students who actually use the cafés may score lower.", label:"Worked example: the ecological fallacy (invented)"},
      "The opposite error, assuming that what is true of individuals is true of groups or whole societies, also happens. The cure for both is the same: keep your conclusions at the level of your data."
    ]},
    {h:"Variables and what else could explain a result", body:[
      "You met [[independent-variable|independent]] and [[dependent-variable|dependent]] variables in the sociology unit. Real studies need a few more roles:",
      {table:[
        ["Role","What it is","Example (invented)"],
        ["Confounding variable","Affects both the presumed cause and the effect, creating a misleading link","Age affects both reading glasses and income; it can make the two look related"],
        ["Control variable","Measured so its influence can be held constant in the analysis","Recording age and income in a study of exercise and health"],
        ["Mediator","The route by which a cause has its effect","Mentoring raises attendance **because** it raises students’ sense of belonging"],
        ["Moderator","Changes how strong an effect is, or for whom it occurs","A tutoring scheme helps younger pupils more than older ones"]
      ]},
      "A [[confounder|confounding variable]] is the third variable behind a [[spurious-correlation|spurious correlation]], like the one between ice cream and sunscreen in the sociology unit. Good designs either neutralise confounders (random assignment, Lesson 3) or measure and control for the ones they can think of. Controls never cover confounders nobody measured."
    ]},
    {h:"Writing hypotheses", body:[
      "A [[hypothesis]] states the relationship you expect between variables, in a form that evidence could show to be wrong. Good hypotheses come from theory or earlier findings, name the variables and the population, and say which direction you expect:",
      {list:[
        "**Directional:** “Among first-year students, those who sleep less than six hours on weeknights have lower exam scores than those who sleep more.”",
        "**Non-directional:** “Weeknight sleep is related to exam scores among first-year students.” (Use this when theory doesn’t predict a direction.)",
        "**Null hypothesis:** in statistical testing, researchers also state that there is no difference or no relationship. Tests then ask how surprising the data would be if that were true. Unit 3 explains what [[p-value|p-values]] do and don’t tell you."
      ]},
      {table:[
        ["Weak hypothesis","Why it’s weak"],
        ["Social media affects people.","No population, no direction, “affects” isn’t a variable"],
        ["Students who study well get good results.","True by definition: there’s nothing to test"],
        ["Some people may prefer local food.","Can’t be proven wrong: “some” and “may” cover everything"]
      ]},
      "Not every study needs a hypothesis. Descriptive and exploratory studies, and most qualitative research, work from **research questions** instead. That isn’t a weakness: in an [[interpretive-framework|interpretive]] study, a hypothesis fixed in advance could stop you seeing what participants actually experience.",
      {key:"Theory says why. Concepts say what. Operational definitions say how you’ll know. Hypotheses say what you expect to find."}
    ]}
   ],
   try:[
    {id:"t4u6-l2-x1", type:"order", q:"Put these steps in the order a theory-testing (deductive) study follows them.", items:[
      {t:"Choose a theory that might explain the problem", why:"Deductive research starts from an existing explanation."},
      {t:"Derive a hypothesis: what the theory predicts should happen in your setting", why:"The prediction comes from the theory, so it can only be written once a theory is chosen."},
      {t:"Operationalise: define the concepts in the hypothesis and choose indicators to measure them", why:"Before collecting anything, you decide exactly how each concept in the prediction will be measured."},
      {t:"Collect data with those measures", why:"Data collection uses the indicators you chose."},
      {t:"Analyse the data to see whether the prediction holds", why:"Analysis compares what you found with what the hypothesis predicted."},
      {t:"Decide what the result means for the theory", why:"Last, the result supports, challenges or refines the theory, which closes the cycle."}
    ]},
    {id:"t4u6-l2-x2", type:"match", q:"Match each variable to its level of measurement.", pairs:[
      ["Country of birth","Nominal","Categories with no order."],
      ["Satisfaction: very unhappy / unhappy / neutral / happy / very happy","Ordinal","The categories are ordered, but the gaps between them aren’t known to be equal."],
      ["Water temperature in °C","Interval","Equal steps, but 0 °C isn’t “no temperature”, so you can’t say 20 °C is twice as hot as 10 °C."],
      ["Number of days absent from work","Ratio","Equal steps and a true zero: 10 days is twice 5 days."]
    ]},
    {id:"t4u6-l2-x3", type:"mcq", q:"Priya finds that countries with higher average chocolate consumption have more Nobel prize winners per person. She concludes that eating chocolate makes individuals more likely to win a Nobel prize. What is the main error?", options:[
      {t:"The ecological fallacy: country-level data can’t show what happens to individuals.", ok:true, why:"Yes. Her data are about countries. Nothing shows that the individual winners ate more chocolate; national wealth could also drive both."},
      {t:"Reverse causation: Nobel prizes make people eat chocolate.", why:"Reverse causation is worth considering, but the more basic problem is that she draws an individual conclusion from country averages."},
      {t:"The sample is too small, because there are fewer than 200 countries.", why:"The number of countries isn’t the main problem. Even with more countries, group data can’t show individual effects."},
      {t:"Nobel prizes can’t be counted.", why:"They can be counted easily. The issue is the level of the data."}
    ]},
    {id:"t4u6-l2-x4", type:"sort", q:"Sort each hypothesis: is it testable as written, or does it need work?", buckets:["Testable as written","Needs work"], items:[
      {t:"In two cities, households with a rainwater tank use less piped water per person than households without one.", b:0, why:"Named population, two measurable variables and a direction. Data could show it’s wrong."},
      {t:"Art is good for the soul.", b:1, why:"“Good for the soul” isn’t defined or measurable, and no population is named."},
      {t:"Among small shops in one region, those that accept mobile payments have higher monthly sales than those that don’t.", b:0, why:"Clear groups, a measurable outcome and a direction."},
      {t:"Some teachers might sometimes find some training useful.", b:1, why:"So hedged that no result could contradict it."},
      {t:"Nurses on 12-hour shifts report more fatigue at the end of a shift than nurses on 8-hour shifts.", b:0, why:"Measurable variables, a comparison and a direction."},
      {t:"Climate affects everything.", b:1, why:"No specific variables, population or direction, so nothing could count against it."}
    ]},
    {id:"t4u6-l2-x5", type:"mcq", q:"Researchers find that people who carry a lighter are more likely to develop lung disease. Which is the best explanation?", options:[
      {t:"Smoking is a confounding variable: it makes people carry lighters and causes lung disease.", ok:true, why:"Right. Smoking affects both the presumed cause (carrying a lighter) and the effect (lung disease), creating a misleading link."},
      {t:"Lighters give off fumes that damage lungs.", why:"That would be a direct causal claim with no evidence. The obvious third variable explains the pattern."},
      {t:"Lung disease is a mediator between lighters and smoking.", why:"A mediator is the route from cause to effect. Here lung disease is the outcome, not a route."},
      {t:"Carrying a lighter is a moderator.", why:"A moderator changes the strength of an effect. It doesn’t explain a misleading link."}
    ]},
    {id:"t4u6-l2-x6", type:"mcq", q:"Hana is studying whether schools with sports clubs have fewer pupils leaving early. She interviews each school’s head teacher. What is her unit of analysis?", options:[
      {t:"The school", ok:true, why:"Yes. Her conclusions are about schools (having clubs, early-leaving rates). Head teachers are her source of information, not what she draws conclusions about."},
      {t:"The head teacher", why:"Head teachers provide the data, but the question is about schools, not about head teachers themselves."},
      {t:"Each pupil", why:"She isn’t collecting data about individual pupils; early-leaving is measured as a school rate."},
      {t:"The sports club", why:"Having a club is a variable describing each school, not the unit being studied."}
    ]},
    {id:"t4u6-l2-x7", type:"spot", q:"Oluwaseun wrote this measurement plan for an invented study. Tap each part with a **problem**.", ask:"a problem", parts:[
      {t:"Concept: food security, defined as households having reliable access to enough safe and nutritious food.", flag:false, why:"A clear conceptual definition is exactly the right first step."},
      " ",
      {t:"Dimensions: having enough food, and its quality.", flag:false, why:"Naming dimensions is good practice; he could add more, but these are reasonable."},
      " ",
      {t:"Indicator: “Is your household food secure? Yes/No.”", flag:true, why:"It just repeats the concept. People understand “food secure” differently. Use concrete questions, such as how often in the past month anyone skipped meals because there wasn’t enough food."},
      " ",
      {t:"I’ll then report the average answer to “Which region do you live in?”", flag:true, why:"Region is nominal. You can report how many people are in each region, but an average region means nothing."},
      " ",
      {t:"I’ll also ask how many meals each person ate yesterday.", flag:false, why:"A concrete, countable indicator of one dimension of food security."}
    ]}
   ],
   apply:{intro:"Keep working with the research question you wrote in Lesson 1, or pick a new topic you know well.", tasks:[
     {t:"Map one concept down to measures", how:["Choose the most important concept in your question.","Write a one-sentence conceptual definition, and list two to four dimensions.","For each dimension, write one concrete indicator (a question, a count or an observation).","Note the level of measurement of each indicator."], write:"Concept… Definition… Dimensions… Indicators and their levels…"},
     {t:"Find the theory in a real study", how:["Use a free search tool (for example Google Scholar, CORE or the Directory of Open Access Journals) to find one open-access study close to your topic.","Read the abstract and the introduction. Find the theory or framework the authors use, if any.","Note whether the study tests a theory or builds one, and what its unit of analysis is."], write:"Study (author, year, title)… Theory or framework… Testing or building?… Unit of analysis…"},
     {t:"Write your hypotheses or questions", how:["If your study is testing something, write one directional hypothesis and name its independent and dependent variables.","List two possible confounding variables and how you might deal with them.","If your study is exploratory, write two open research questions instead, and say why a hypothesis would not fit."], write:"Hypothesis or questions… Variables… Possible confounders… How I’d handle them…"}
   ], proof:"In your notes: one concept mapped to dimensions and indicators with their levels, the theory and unit of analysis of a real study, and your own hypotheses (with variables and confounders) or open research questions."},
   read:[
    {book:"bhatt", where:"Chapter 2, “Thinking Like a Researcher”", note:"Units of analysis, concepts, constructs and variables, propositions and hypotheses, and induction versus deduction."},
    {book:"bhatt", where:"Chapter 4, “Theories in Scientific Research”; Chapter 6, “Measurement of Constructs”", note:"What a theory is and what makes a good one; then conceptualisation, operationalisation and levels of measurement."},
    {book:"soc", where:"Chapter 2, Section 2.1 “Approaches to Sociological Research” (on LibreTexts: 2.2)", note:"Hypotheses, variables and operational definitions in plain words."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"t4u6-l3", title:"Choosing a research design", minutes:60,
   hook:{q:"In 1854, during a cholera outbreak in London, John Snow compared deaths in households whose water came from two different companies. One took its water from a part of the Thames polluted by sewage; the other had moved its intake upstream. Nobody was assigned to a company by a researcher. What kind of study was this?", options:["A randomised controlled trial","A natural experiment","A case study of one household","A survey of opinions about water"], answer:1, reveal:"It was a **[[natural-experiment|natural experiment]]**. Households in the same streets got different water for reasons unrelated to their health, so the companies’ customers were comparable in most other ways, almost as if someone had assigned them. Deaths were far higher among households supplied with the polluted water, strong evidence that cholera spread through water. This lesson is about choosing designs like that: the plan that lets your data answer your question."},
   goals:[
     "Explain what a research design decides, and how quantitative, qualitative and mixed approaches differ",
     "Explain why random assignment makes experiments strong, and how quasi-experiments and natural experiments work without it",
     "Tell cross-sectional, repeated cross-sectional, panel, cohort and case-control designs apart",
     "Describe what case studies and ethnography offer, and the three core mixed methods designs",
     "Match a research question to a design that can answer it"
   ],
   learn:[
    {h:"What a design decides", body:[
      {lead:"A [[research-design-term|research design]] is the blueprint that connects your question to your evidence."},
      "Bhattacherjee calls it a comprehensive plan for data collection. It answers practical questions before you start: What data? From whom, and how many? Collected once, or several times? Will anything be changed on purpose (an intervention), or only observed? Where and when?",
      "Designs are often grouped into three broad approaches:",
      {list:[
        "**[[quantitative-research|Quantitative research]]** collects numerical data to measure, compare and test relationships across many cases.",
        "**[[qualitative-research|Qualitative research]]** collects words, observations and images to understand meanings, experiences and processes in depth, usually with fewer cases.",
        "**[[mixed-methods-term|Mixed methods research]]** collects and deliberately combines both."
      ]},
      "Bhattacherjee adds a useful warning: “quantitative” and “qualitative” describe **data**, while “positivist” (theory-testing) and “interpretive” (theory-building) describe **approaches**. They usually travel together, but not always. A case study can count things; a survey can include open questions. (The sociology unit calls these kinds of data [[quantitative-data|quantitative]] and [[qualitative-data|qualitative data]].)",
      {key:"There is no best design, only a design that fits the question, the setting, the ethics and your resources."}
    ]},
    {h:"Experiments and random assignment", body:[
      "In an [[experiment]], the researcher changes something (the intervention) for one group and not for another, then compares outcomes. The power comes from **[[random-assignment|random assignment]]**: using chance, such as a computer’s random numbers, to decide who goes in which group.",
      "Chance spreads everything else evenly between the groups, on average: age, motivation, health, and even things nobody thought to measure. So if the groups differ at the end, the intervention is the most likely cause. In health this design is called a **randomised controlled trial**, and the group without the intervention is the [[control-group|control group]].",
      {ex:"Question: does a weekly text reminder help adult learners finish an online literacy course?\nDesign: 600 people who enrol are randomly assigned by computer: 300 get the reminders, 300 don’t.\nOutcome: the share in each group who finish within 12 weeks.\nWhy it works: because chance decided who got reminders, the groups should be alike in everything else, on average.", label:"Worked example: a field experiment (invented)"},
      "Experiments run in labs (strong control, artificial setting) or in the field: in schools, clinics, villages and online platforms. The sociology unit’s {{experiments-sociology}} entry covers their limits: some things can’t ethically be assigned (poverty, smoking, divorce), lab results may not carry over to real life, and people may behave differently because they know they’re being studied (the [[hawthorne-effect|Hawthorne effect]])."
    ]},
    {h:"Quasi-experiments and natural experiments", body:[
      "When random assignment isn’t possible, researchers use a **[[quasi-experiment|quasi-experiment]]**: there is still a comparison, but groups are formed some other way. Bhattacherjee puts it simply: if random assignment is not followed, the design becomes quasi-experimental. Common forms:",
      {list:[
        "**Comparison group with before-and-after measures:** a school that starts a reading scheme is compared with a similar school that doesn’t, measuring both before and after.",
        "**Interrupted time series:** many measurements before and after a change, such as monthly road deaths for years before and after a new speed limit, to see whether the trend breaks.",
        "**Cut-off designs (regression discontinuity):** when a programme is given to everyone just above a threshold (a test score, an income line), people just above and just below are compared, because they are otherwise very similar.",
        "**[[natural-experiment|Natural experiments]]:** an event or rule, not the researcher, creates comparable groups, as with Snow’s water companies or a lottery for school places."
      ]},
      "The main weakness is **selection**: groups may differ before the intervention. The school that chose the reading scheme may have keener teachers. Good quasi-experiments measure groups beforehand and choose comparisons carefully, but they can never fully rule out differences nobody measured."
    ]},
    {h:"Observing over time: cross-sectional and longitudinal designs", body:[
      "Most research can’t change anything; it observes. The key design choice is **time**:",
      {fig:"<svg viewBox=\"0 0 340 440\"><defs><marker id=\"t4u6-l3-ar\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><text x=\"10\" y=\"18\" text-anchor=\"start\">Cross-sectional</text><text class=\"s\" x=\"10\" y=\"36\" text-anchor=\"start\">one snapshot of many people</text><path class=\"d-ink\" d=\"M30 70 L322 70\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><text class=\"s\" x=\"80\" y=\"90\" text-anchor=\"middle\">Time 1</text><text class=\"s\" x=\"180\" y=\"90\" text-anchor=\"middle\">Time 2</text><text class=\"s\" x=\"280\" y=\"90\" text-anchor=\"middle\">Time 3</text><circle class=\"d-lup\" cx=\"64\" cy=\"56\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"80\" cy=\"56\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"96\" cy=\"56\" r=\"6\" stroke-width=\"1.5\"/><text x=\"10\" y=\"120\" text-anchor=\"start\">Repeated cross-sections</text><text class=\"s\" x=\"10\" y=\"138\" text-anchor=\"start\">new people each time</text><path class=\"d-ink\" d=\"M30 172 L322 172\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><text class=\"s\" x=\"80\" y=\"192\" text-anchor=\"middle\">Time 1</text><text class=\"s\" x=\"180\" y=\"192\" text-anchor=\"middle\">Time 2</text><text class=\"s\" x=\"280\" y=\"192\" text-anchor=\"middle\">Time 3</text><circle class=\"d-lup\" cx=\"64\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"80\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"96\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"164\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"180\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"196\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-sage\" cx=\"264\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-sage\" cx=\"280\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-sage\" cx=\"296\" cy=\"158\" r=\"6\" stroke-width=\"1.5\"/><text x=\"10\" y=\"222\" text-anchor=\"start\">Panel or cohort</text><text class=\"s\" x=\"10\" y=\"240\" text-anchor=\"start\">the same people, again and again</text><path class=\"d-ink\" d=\"M30 274 L322 274\" stroke-width=\"1.5\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><text class=\"s\" x=\"80\" y=\"294\" text-anchor=\"middle\">Time 1</text><text class=\"s\" x=\"180\" y=\"294\" text-anchor=\"middle\">Time 2</text><text class=\"s\" x=\"280\" y=\"294\" text-anchor=\"middle\">Time 3</text><circle class=\"d-rose\" cx=\"64\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"80\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"96\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"164\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"180\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"196\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"264\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"280\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-rose\" cx=\"296\" cy=\"260\" r=\"6\" stroke-width=\"1.5\"/><path class=\"d-rose\" d=\"M98 260 L162 260 M198 260 L262 260\" stroke-width=\"1.5\" fill=\"none\" stroke-dasharray=\"4 4\"/><text x=\"10\" y=\"324\" text-anchor=\"start\">Experiment</text><text class=\"s\" x=\"10\" y=\"342\" text-anchor=\"start\">random assignment, then compare</text><circle class=\"d-panel\" cx=\"30\" cy=\"372\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-panel\" cx=\"46\" cy=\"372\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-panel\" cx=\"30\" cy=\"388\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-panel\" cx=\"46\" cy=\"388\" r=\"6\" stroke-width=\"1.5\"/><path class=\"d-ink\" d=\"M58 374 L118 356\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><path class=\"d-ink\" d=\"M58 388 L118 408\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><circle class=\"d-gold\" cx=\"132\" cy=\"354\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"148\" cy=\"354\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"132\" cy=\"410\" r=\"6\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"148\" cy=\"410\" r=\"6\" stroke-width=\"1.5\"/><text class=\"s\" x=\"162\" y=\"358\" text-anchor=\"start\">change</text><text class=\"s\" x=\"162\" y=\"414\" text-anchor=\"start\">no change</text><path class=\"d-ink\" d=\"M226 356 L268 374\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><path class=\"d-ink\" d=\"M232 410 L268 392\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-ar)\"/><text class=\"s\" x=\"302\" y=\"388\" text-anchor=\"middle\">compare</text></svg>", alt:"Four timelines. Cross-sectional: one group of dots at time 1 only, labelled one snapshot of many people. Repeated cross-sections: dots of a different shade at times 1, 2 and 3, labelled new people each time. Panel or cohort: dots of the same shade at times 1, 2 and 3 linked by dashed lines, labelled the same people again and again. Experiment: a pool of dots is randomly split by arrows into a group that gets a change and a group with no change, and arrows lead from both to compare.", cap:"How common designs use time. Only the panel follows the same people; only the experiment assigns a change."},
      {table:[
        ["Design","What it does","Good for"],
        ["[[cross-sectional|Cross-sectional]]","Measures many cases once","How common something is now; associations"],
        ["Repeated cross-sectional (trend)","Measures new samples of the same population at several times","How a population changes, such as opinion over decades"],
        ["[[panel-study|Panel]]","Measures the same people or households repeatedly","How individuals change; which came first"],
        ["[[cohort-study|Cohort]]","Follows a group that shares a starting point, such as a birth year or an exposure","Life courses; how early factors relate to later outcomes"],
        ["[[case-control-study|Case-control]]","Starts from people with an outcome (cases) and without (controls), looking back at earlier exposures","Rare diseases or events"]
      ]},
      "A cross-sectional study is quick and cheap but measures cause and effect at the same moment, so it can rarely say which came first. [[longitudinal|Longitudinal]] designs (panel and cohort) can establish time order, but they are slow and costly, and people drop out over the years (**attrition**), which can bias results if those who leave differ from those who stay.",
      "Two well-known cohort studies: the **Dunedin Study** in New Zealand has followed 1,037 babies born in one city in 1972–73 through repeated assessments into middle age; **Young Lives**, based at the University of Oxford, has followed about 12,000 children in Ethiopia, India (Andhra Pradesh and Telangana), Peru and Vietnam since 2002.",
      "The terms overlap between fields. In medicine, a “cohort study” usually means following exposed and unexposed people forward to see who develops an outcome; social scientists often use “panel” and “cohort” more loosely. Check how each paper defines its design."
    ]},
    {h:"Case studies and ethnography", body:[
      "A [[case-study|case study]] examines one case, or a few, in depth and in context: one hospital’s switch to digital records, a city’s flood response, a family firm across three generations. It usually combines several sources (interviews, documents, observation, records). Cases are chosen on purpose because they are typical, unusual or especially revealing, not at random.",
      "An [[ethnography]] goes further into daily life: the researcher spends a long time in a community or organisation, often through [[participant-observation|participant observation]], to understand it from the inside. Bhattacherjee also lists **action research**, where researchers work with a community to change something and study the change as it happens.",
      "These designs can’t tell you how common something is in a population. Their strength is explaining **how** and **why**: the mechanisms, meanings and context behind a pattern. Their findings generalise to theory (“this case shows how a process can work”) rather than statistically to a population. Unit 7 covers qualitative methods in detail; {{field-research}} gives a short overview."
    ]},
    {h:"Mixed methods", body:[
      "Mixed methods research combines quantitative and qualitative strands **on purpose**, so that each answers something the other can’t. Simply doing a survey and some interviews isn’t enough; the point is **integration**, bringing the two together to reach conclusions neither would reach alone.",
      "The most widely used textbook, John Creswell and Vicki Plano Clark’s *Designing and Conducting Mixed Methods Research* (3rd edition 2018; 4th edition published December 2025), describes three **core designs**:",
      {fig:"<svg viewBox=\"0 0 340 330\"><defs><marker id=\"t4u6-l3-mm\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><text x=\"10\" y=\"18\" text-anchor=\"start\">Convergent</text><rect class=\"d-lup\" x=\"10\" y=\"30\" width=\"96\" height=\"32\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"58\" y=\"51\" text-anchor=\"middle\">QUAN</text><rect class=\"d-gold\" x=\"10\" y=\"72\" width=\"96\" height=\"32\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"58\" y=\"93\" text-anchor=\"middle\">QUAL</text><path class=\"d-ink\" d=\"M108 46 L148 62\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><path class=\"d-ink\" d=\"M108 88 L148 72\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><rect class=\"d-sage\" x=\"152\" y=\"48\" width=\"178\" height=\"36\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"241\" y=\"71\" text-anchor=\"middle\">Compare, merge</text><text x=\"10\" y=\"136\" text-anchor=\"start\">Explanatory sequential</text><rect class=\"d-lup\" x=\"10\" y=\"148\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"56\" y=\"170\" text-anchor=\"middle\">QUAN</text><path class=\"d-ink\" d=\"M104 165 L122 165\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><rect class=\"d-gold\" x=\"124\" y=\"148\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"170\" text-anchor=\"middle\">QUAL</text><path class=\"d-ink\" d=\"M218 165 L236 165\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><rect class=\"d-sage\" x=\"238\" y=\"148\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"284\" y=\"170\" text-anchor=\"middle\">Interpret</text><text x=\"10\" y=\"222\" text-anchor=\"start\">Exploratory sequential</text><rect class=\"d-gold\" x=\"10\" y=\"234\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"56\" y=\"256\" text-anchor=\"middle\">QUAL</text><path class=\"d-ink\" d=\"M104 251 L122 251\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><rect class=\"d-sage\" x=\"124\" y=\"234\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"256\" text-anchor=\"middle\">Build</text><path class=\"d-ink\" d=\"M218 251 L236 251\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l3-mm)\"/><rect class=\"d-lup\" x=\"238\" y=\"234\" width=\"92\" height=\"34\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"284\" y=\"256\" text-anchor=\"middle\">QUAN</text><text class=\"s\" x=\"170\" y=\"298\" text-anchor=\"middle\">QUAN = quantitative strand</text><text class=\"s\" x=\"170\" y=\"316\" text-anchor=\"middle\">QUAL = qualitative strand</text></svg>", alt:"Three rows of boxes. Convergent: a QUAN box and a QUAL box side by side, with arrows into a box labelled compare, merge. Explanatory sequential: QUAN, then an arrow to QUAL, then an arrow to interpret. Exploratory sequential: QUAL, then an arrow to build, then an arrow to QUAN. A note says QUAN means the quantitative strand and QUAL the qualitative strand.", cap:"The three core mixed methods designs."},
      {table:[
        ["Design","How it works","Example (invented)"],
        ["Convergent","Collect both kinds of data in the same phase, analyse each, then compare or merge","Survey 400 farmers on irrigation use while interviewing 20, then check where the two agree and disagree"],
        ["Explanatory sequential","Quantitative first, then qualitative to explain the results","Exam data show one school improved most; interviews there explain why"],
        ["Exploratory sequential","Qualitative first, then use what you learned to build something (a survey, a measure, an intervention) and test it","Focus groups on what “safe at work” means to domestic workers shape a survey that is then tested with a larger sample"]
      ]},
      "Earlier editions named more designs (the 2nd edition, for example, listed six). The 3rd edition also describes ways of building the core designs into larger studies, such as intervention trials, case studies, programme evaluations and participatory research; the 4th edition has a chapter on such “hybrid” designs. Other authors use different names, so describe your own design in words, not only by its label."
    ]},
    {h:"Matching the question to the design", body:[
      {table:[
        ["Question type","Designs that often fit"],
        ["Descriptive","Cross-sectional survey of a random sample; secondary data; content analysis"],
        ["Comparative or relational","Cross-sectional or longitudinal survey; secondary data"],
        ["Causal","Randomised experiment; quasi-experiment; natural experiment; panel data with careful controls"],
        ["Exploratory","Interviews; case study; ethnography; exploratory sequential mixed methods"],
        ["“What happened and why?”","Explanatory sequential mixed methods; case study"]
      ]},
      "Practical limits matter as much as the ideal. A student with six months can’t run a ten-year cohort study, but may be able to analyse an existing one: many large longitudinal datasets are available to researchers through data archives, usually after registration ([[secondary-data|secondary data]]).",
      {warn:"The most common design mistake is a mismatch: a causal question answered with a one-off cross-sectional survey, or a “how common?” question answered with eight interviews. Check the match before collecting any data."}
    ]}
   ],
   try:[
    {id:"t4u6-l3-x1", type:"mcq", q:"Why does **random assignment** make an experiment such a strong test of cause?", options:[
      {t:"Chance makes the groups alike on average in everything else, including things nobody measured, so a difference afterwards is most likely due to the intervention.", ok:true, why:"Exactly. That is what lets experiments rule out confounding variables, even unknown ones."},
      {t:"It makes the sample represent the whole population.", why:"That’s random **sampling**, which is about generalising. Random assignment is about fair comparison between groups (Lesson 4 compares the two)."},
      {t:"It makes the experiment cheaper.", why:"Random assignment costs almost nothing extra, but saving money isn’t why it’s powerful."},
      {t:"It guarantees participants don’t know they’re in a study.", why:"Participants usually do know, and must consent. Random assignment is about who gets the intervention, not secrecy."}
    ]},
    {id:"t4u6-l3-x2", type:"sort", q:"Is each study a **true experiment** (random assignment) or a **quasi-experiment** (comparison without random assignment)?", buckets:["True experiment","Quasi-experiment"], items:[
      {t:"A computer randomly decides which of 200 enrolled clinics get a new training course.", b:0, why:"Chance decides which clinics get the course: random assignment."},
      {t:"Two towns that chose to install street lights are compared with two towns that didn’t.", b:1, why:"The towns chose for themselves, so they may differ in other ways: no random assignment."},
      {t:"Monthly hospital admissions for asthma are tracked for three years before and after a city bans diesel buses.", b:1, why:"An interrupted time series. The change wasn’t randomly assigned."},
      {t:"Students who applied for a scholarship are compared on either side of the score that decided who got it.", b:1, why:"A cut-off (regression discontinuity) design: strong, but the groups were formed by a rule, not by chance."},
      {t:"Volunteers are given one of two versions of a website by coin toss, and their task times are compared.", b:0, why:"A coin toss is random assignment."}
    ]},
    {id:"t4u6-l3-x3", type:"match", q:"Match each invented study to its design.", pairs:[
      ["A national survey asks 3,000 adults about their sleep and their screen use, once.","Cross-sectional","Many people, measured at one point in time."],
      ["The same 1,500 households are interviewed every year for ten years about income and spending.","Panel","The same households are measured repeatedly."],
      ["Babies born in one hospital in one year are assessed every few years into adulthood.","Cohort","A group sharing a starting point (birth year and place) is followed over time."],
      ["People with a rare skin cancer and similar people without it are asked about past sun exposure.","Case-control","It starts from the outcome (cases versus controls) and looks back at exposures."],
      ["A new random sample of voters is asked the same questions every four years.","Repeated cross-sectional","Same questions and population, but new people each time: it shows change in the population, not in individuals."]
    ]},
    {id:"t4u6-l3-x4", type:"mcq", q:"Mei surveyed 800 office workers once. Those who exercise more report less stress. Why can’t her cross-sectional design show that exercise reduces stress?", options:[
      {t:"Both were measured at the same time, so stress might reduce exercise, and other factors (like free time) might drive both.", ok:true, why:"Right. A single snapshot can’t establish time order or rule out confounders. A panel or an experiment would be needed for a causal claim."},
      {t:"800 people is too few for any conclusion.", why:"800 is a reasonable sample for an association. The problem is the design, not the size."},
      {t:"Stress can only be studied with interviews.", why:"Stress can be measured with validated questionnaires. The issue is timing and confounding."},
      {t:"Cross-sectional studies can’t find associations.", why:"They can and do find associations. They just can’t show which came first."}
    ]},
    {id:"t4u6-l3-x5", type:"order", q:"Put the stages of an **exploratory sequential** mixed methods study in order.", items:[
      {t:"Interview a small group to learn how they understand the issue", why:"This design starts qualitative, because too little is known to measure well."},
      {t:"Analyse the interviews for key ideas and the words people use", why:"The qualitative findings must be analysed before they can shape anything."},
      {t:"Build a survey from those ideas and words", why:"The “build” step turns qualitative findings into a measure."},
      {t:"Pilot and then run the survey with a larger sample", why:"The quantitative strand tests how widely the ideas apply."},
      {t:"Interpret what the second phase adds to the first", why:"Integration: explain how the two strands together answer the question."}
    ]},
    {id:"t4u6-l3-x6", type:"sort", q:"Which design fits each invented question best?", buckets:["Randomised experiment","Cross-sectional survey","Case study or ethnography","Explanatory sequential mixed methods"], items:[
      {t:"Does a free bus pass increase older adults’ attendance at a day centre? (The centre can offer passes to a random half of new members.)", b:0, why:"A causal question, and random assignment is possible and ethical here."},
      {t:"What share of small businesses in one country accept card payments?", b:1, why:"A descriptive “how common” question needs a representative sample measured once."},
      {t:"How did one fishing village organise itself after a cyclone?", b:2, why:"A how-and-why question about one setting calls for in-depth study of that case."},
      {t:"First analyse a region’s test results to find the schools that improved most, then interview staff and pupils in those schools to explain why.", b:3, why:"Numbers come first and pick out the pattern; the qualitative phase then explains it. That is the explanatory sequential sequence."},
      {t:"How do apprentices learn the unwritten rules of a construction site?", b:2, why:"Learning unwritten rules is best seen up close over time: ethnography."},
      {t:"Is household income associated with internet use among adults in one region?", b:1, why:"A relational question that a survey of a random sample can answer."}
    ]},
    {id:"t4u6-l3-x7", type:"mcq", q:"Sione runs a survey and interviews in the same month, writes up each in separate chapters, and never compares them. What is missing for this to count as good mixed methods research?", options:[
      {t:"Integration: bringing the two strands together to reach conclusions neither gives alone.", ok:true, why:"Yes. Collecting both types isn’t enough; mixed methods means deliberately comparing, connecting or building one strand on the other."},
      {t:"A larger survey sample.", why:"Sample size might matter for the survey, but it doesn’t make the study mixed methods."},
      {t:"Doing the interviews first.", why:"Convergent designs collect both strands at the same time; the order isn’t the problem."},
      {t:"A hypothesis for the interviews.", why:"Qualitative strands usually work from questions, not hypotheses. That isn’t what’s missing."}
    ]}
   ],
   apply:{intro:"Use your own research question from Lessons 1 and 2. This is planning on paper; no data collection yet.", tasks:[
     {t:"Design it three ways", how:["Sketch three different designs that could address your question, for example a cross-sectional survey, a longitudinal or experimental design, and a qualitative case study.","For each, write one sentence on what it could show and one on what it couldn’t.","Choose the design that fits your question and resources best, and say why."], write:"Design 1… can show… can’t show… Design 2… Design 3… My choice and why…"},
     {t:"Identify the design of a published study", how:["Find one open-access empirical study in your field with any free search tool.","Read the methods section. Note the design the authors name, and whether you agree with their label.","Note how they handled time (once or repeatedly) and whether anything was assigned."], write:"Study… Design named… My view… Time… Assignment…"},
     {t:"Plan a mixed methods version", how:["Decide which core design would add most to your question: convergent, explanatory sequential or exploratory sequential.","Draw it as boxes and arrows, like the diagram in this lesson.","Write one sentence on how you would integrate the two strands."], write:"Design… What each strand does… How I’d integrate them…"}
   ], proof:"In your notes: three possible designs for your question with their strengths and limits and your choice, the design of one published study, and a sketch of a mixed methods version with an integration plan."},
   read:[
    {book:"bhatt", where:"Chapter 5, “Research Design”", note:"Key attributes of a good design, and the main designs: experiments, field surveys, secondary data analysis, case research, focus groups, action research and ethnography."},
    {book:"bhatt", where:"Chapter 10, “Experimental Research”; Chapter 11, “Case Research”; Chapter 12, “Interpretive Research”", note:"More detail on experiments and quasi-experiments, case research, and interpretive designs such as ethnography."},
    {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3)", note:"Surveys, field research, experiments and secondary data, with sociology examples."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"t4u6-l4", title:"Sampling: who and how many", minutes:55,
   hook:{q:"Before the 1936 US presidential election, the magazine *Literary Digest* polled its readers and others on lists it compiled, and received over two million replies. Pollsters such as George Gallup used far smaller samples. Who predicted the winner correctly?", options:["*Literary Digest*, because two million replies is enormous","Both got it right","Gallup and the other small-sample pollsters","Neither: elections can’t be predicted"], answer:2, reveal:"**Gallup and the other small-sample pollsters.** The *Digest* predicted that Alf Landon would beat Franklin Roosevelt; Roosevelt won by a landslide. Its huge sample came from lists and returns that didn’t represent all voters, and size can’t fix a biased way of choosing people. This lesson is about choosing samples well, and then about how many you need."},
   goals:[
     "Distinguish the target population, the sampling frame and the sample",
     "Describe simple random, systematic, stratified, cluster and multistage sampling",
     "Describe convenience, volunteer, quota, purposive and snowball sampling, and when each is appropriate",
     "Explain the difference between random sampling and random assignment",
     "Explain sample size in plain terms, without false precision"
   ],
   learn:[
    {h:"Population, frame and sample", body:[
      {lead:"You taste a spoonful to judge a pot of soup. It works only if you stir first."},
      "The [[population-research|population]] is everyone (or everything) your question is about: all nurses in a region, all small farms in a district, all news articles about floods in 2025. A [[sample]] is the part you actually study. Sampling is the stirring: how you choose the part decides whether it can stand for the whole.",
      "Between the two sits the **[[sampling-frame|sampling frame]]**: the actual list or source you draw from, such as a staff register, an electoral roll, a list of licensed businesses, or a map of every village. Frames are never perfect. A phone directory misses people without listed numbers; a business register misses informal traders. People missing from the frame can never be chosen, whatever method you use. This is **[[coverage-error|coverage error]]**.",
      {ex:"Question: how do street food vendors in one city get their supplies?\nPopulation: all street food vendors in the city\nPossible frame: the city’s licence register\nProblem: many vendors trade without a licence, so the frame misses them\nFix: map vendors street by street in a sample of neighbourhoods and build your own frame", label:"Worked example (invented)"},
      "Sampling choices fall into two families. In **[[probability-sampling|probability sampling]]** every member of the frame has a known, non-zero chance of being chosen, decided by a random process. In **[[non-probability-sampling|non-probability sampling]]** people are chosen some other way, by convenience, judgement or referral."
    ]},
    {h:"Probability sampling", body:[
      "Probability samples are the basis of most official statistics, because chance selection lets researchers estimate how close their results are likely to be to the true population value.",
      {fig:"<svg viewBox=\"0 0 340 352\"><rect class=\"d-panel\" x=\"6\" y=\"6\" width=\"160\" height=\"160\" rx=\"10\" stroke-width=\"1\"/><text x=\"86\" y=\"28\" text-anchor=\"middle\">Simple random</text><circle class=\"d-lup\" cx=\"30\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"58\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"86\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"114\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"142\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"142\" cy=\"50\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"30\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"30\" cy=\"76\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"58\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"86\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"114\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"114\" cy=\"76\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"142\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"30\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"58\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"86\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"86\" cy=\"102\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"114\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"142\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"30\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"58\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"58\" cy=\"128\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"86\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"114\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"142\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><text class=\"s\" x=\"86\" y=\"156\" text-anchor=\"middle\">equal chance for all</text><rect class=\"d-panel\" x=\"174\" y=\"6\" width=\"160\" height=\"160\" rx=\"10\" stroke-width=\"1\"/><text x=\"254\" y=\"28\" text-anchor=\"middle\">Systematic</text><circle class=\"d-lup\" cx=\"198\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"254\" cy=\"50\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"282\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"50\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"198\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"226\" cy=\"76\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"254\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"76\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"198\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"198\" cy=\"102\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"226\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"102\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"310\" cy=\"102\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"198\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"282\" cy=\"128\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"310\" cy=\"128\" r=\"7\" stroke-width=\"1.5\"/><text class=\"s\" x=\"254\" y=\"156\" text-anchor=\"middle\">every 4th, random start</text><rect class=\"d-panel\" x=\"6\" y=\"186\" width=\"160\" height=\"160\" rx=\"10\" stroke-width=\"1\"/><text x=\"86\" y=\"208\" text-anchor=\"middle\">Stratified</text><circle class=\"d-lup\" cx=\"30\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"58\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"58\" cy=\"230\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"86\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"114\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"114\" cy=\"230\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-lup\" cx=\"142\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"30\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"58\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"86\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"114\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"142\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"142\" cy=\"256\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-gold\" cx=\"30\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"58\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"58\" cy=\"282\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-gold\" cx=\"86\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"114\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"142\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"30\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"30\" cy=\"308\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-gold\" cx=\"58\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"86\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-gold\" cx=\"114\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-ink\" cx=\"114\" cy=\"308\" r=\"11\" fill=\"none\" stroke-width=\"2\"/><circle class=\"d-gold\" cx=\"142\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><path class=\"d-ink\" d=\"M14 269 L158 269\" stroke-width=\"1.5\" fill=\"none\" stroke-dasharray=\"5 4\"/><text class=\"s\" x=\"86\" y=\"336\" text-anchor=\"middle\">pick within each group</text><rect class=\"d-panel\" x=\"174\" y=\"186\" width=\"160\" height=\"160\" rx=\"10\" stroke-width=\"1\"/><text x=\"254\" y=\"208\" text-anchor=\"middle\">Cluster</text><circle class=\"d-lup\" cx=\"198\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"230\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"198\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"256\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"198\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"282\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"198\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"226\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"254\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"282\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><circle class=\"d-lup\" cx=\"310\" cy=\"308\" r=\"7\" stroke-width=\"1.5\"/><rect class=\"d-ink\" x=\"184\" y=\"244\" width=\"140\" height=\"24\" rx=\"8\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><rect class=\"d-ink\" x=\"184\" y=\"296\" width=\"140\" height=\"24\" rx=\"8\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text class=\"s\" x=\"254\" y=\"336\" text-anchor=\"middle\">whole groups picked</text></svg>", alt:"Four panels, each a grid of 20 dots. Simple random: five scattered dots circled, captioned equal chance for all. Systematic: every fourth dot in reading order circled, captioned every 4th, random start. Stratified: the top two rows are one shade and the bottom two rows another, separated by a dashed line, with three dots circled in each group, captioned pick within each group. Cluster: two whole rows enclosed by dashed boxes, captioned whole groups picked.", cap:"Four kinds of probability sample, drawn from the same population."},
      {table:[
        ["Method","How it works","Watch out for"],
        ["[[simple-random-sampling|Simple random]]","Every member has an equal chance, e.g. random numbers from a list","Needs a complete list; small groups may be missed by chance"],
        ["[[systematic-sampling|Systematic]]","Every kth member from a random start (every 20th file)","Lists with a repeating pattern, e.g. every 20th flat is a corner flat"],
        ["[[stratified-sampling|Stratified]]","Split into groups (strata), such as regions or ages, then sample randomly within each","Needs information on everyone’s group in the frame"],
        ["[[cluster-sampling|Cluster]]","Randomly pick whole groups (villages, schools), then include everyone in them","Cheaper to reach, but people in a cluster are alike, so precision falls"],
        ["Multistage","Combine steps: pick districts, then villages, then households","Common in national household surveys; analysis must reflect the design"]
      ]},
      "Stratified sampling also lets you **oversample** small groups (for example a minority language group) so there are enough of them to analyse; the analysis then gives them less weight so the overall results still represent the population.",
      {tip:"You can draw a simple random sample with a spreadsheet: number your list, add a column with `=RAND()` (it works in Excel, Google Sheets and LibreOffice Calc), sort by that column, and take the first n rows."}
    ]},
    {h:"Non-probability sampling", body:[
      "Non-probability samples are cheaper and quicker, and sometimes they are the only possible choice. They are also the right choice for most qualitative research, whose aim is depth and understanding rather than estimating how common something is.",
      {table:[
        ["Method","How it works","Fits when"],
        ["[[convenience-sample|Convenience]]","Whoever is easy to reach: your classmates, people at one market","Piloting a questionnaire; very early exploration"],
        ["Volunteer (self-selected)","People choose to respond, as in an open online poll","Rarely good evidence of a population: volunteers often differ"],
        ["[[quota-sampling|Quota]]","Fill set numbers in each group (50 women, 50 men) by any means","Quick market or opinion research; still not random within groups"],
        ["[[purposive-sampling|Purposive]]","Choose cases deliberately for what they can show: typical, extreme, or varied","Interviews and case studies"],
        ["[[snowball-sampling|Snowball]]","Participants refer others like them","Hidden or hard-to-reach groups, such as undocumented workers"]
      ]},
      "Qualitative researchers often use **maximum variation** sampling (choosing people who differ in important ways, to see the range of experiences) and **theoretical sampling** (choosing the next participants based on what earlier interviews revealed).",
      {warn:"The problem with non-probability samples isn’t that they’re “unscientific”. It’s that you can’t use them to estimate how common something is in a population, or calculate a [[margin-of-error|margin of error]]. Say so in your limitations, and don’t generalise numbers from them."}
    ]},
    {h:"Random sampling is not random assignment", body:[
      "These two sound alike and are constantly confused. They solve different problems:",
      {table:[
        ["","Random sampling","Random assignment"],
        ["What chance decides","Who gets into the study","Which group each participant joins"],
        ["What it protects","External validity: results can be generalised to the population","Internal validity: differences between groups can be put down to the intervention"],
        ["Typical use","Surveys","Experiments"]
      ]},
      "A study can have one, both or neither. Many medical trials use random assignment with volunteers who weren’t randomly sampled: the comparison is fair, but the volunteers may not represent all patients. A national survey uses random sampling without assigning anything: it represents the population, but can’t prove cause. Lesson 5 builds on this.",
      {key:"Random sampling lets you generalise. Random assignment lets you claim cause."}
    ]},
    {h:"How many? Sample size in plain terms", body:[
      "There is no single right number. The sample you need depends on the question, the design, how precise you need to be and what you can afford. Some plain truths:",
      {list:[
        "**Precision grows slowly.** For a simple random sample and a yes/no question, the margin of error at 95% confidence is at most about 1 divided by the square root of the sample size (it is largest when answers split about 50/50; Unit 8 shows the full formula). That gives about ±10 percentage points with 100 people, ±5 with 400 and ±3 with about 1,000. To halve the margin, you need four times as many people.",
        "**The population’s size barely matters** once it is large. About 1,000 randomly chosen people give much the same precision for a city of 500,000 as for a country of 50 million. It’s a myth that you need, say, 10% of the population.",
        "**Subgroups need their own numbers.** If you want to compare five regions, each region needs enough people, not just the total.",
        "**Real surveys are less precise than the formula.** Clustering, weighting and non-response widen the margins, which is why survey reports state their own margin of error.",
        "**Plan for non-response and drop-out.** If you expect half to reply, invite twice as many as you need, and remember that the people who don’t reply may differ from those who do."
      ]},
      "For experiments, researchers do a **[[statistical-power|power]]** calculation before starting: how many participants are needed to have a good chance of detecting the smallest effect that would matter. Small effects need much larger samples. Free tools such as G*Power do the arithmetic, but the inputs (the effect you care about, how variable the outcome is) are judgements you must justify.",
      "Qualitative studies don’t use these formulas. Researchers justify their numbers by their aims: how specific the question is, how varied the participants are, how rich each interview is. Many stop when new interviews no longer add new insights ([[data-saturation|saturation]], a widely used but debated idea), and report how they decided.",
      {warn:"Beware rules of thumb presented as laws, such as “30 participants is always enough”. Numbers like that come from particular statistical situations, not from your study. Explain how you chose your sample size instead."}
    ]},
    {h:"Bias that a bigger sample can’t fix", body:[
      "A bigger sample shrinks random error, the chance wobble between samples. It does nothing about **bias**: systematic error from the way people were chosen or who replied. The *Literary Digest* had both a huge sample and a biased one.",
      "Common sources of bias:",
      {list:[
        "**Coverage:** the frame misses people (no internet, no fixed address, not on the register).",
        "**Self-selection:** people who choose to answer have stronger views or more time.",
        "**Non-response:** people who are invited but don’t reply differ from those who do. Unit 8 covers response rates and what to do about them.",
        "**Survivorship:** you only see the cases that “survived”, such as businesses still trading, and miss those that closed."
      ]},
      "Large online panels and opt-in samples are now very common, and they often adjust (weight) their results to match known population totals, such as age and region. That helps, but only for the characteristics that are measured. Read the methods section to see how any sample was built before trusting its numbers ({{survey-research}} has more)."
    ]}
   ],
   try:[
    {id:"t4u6-l4-x1", type:"sort", q:"Probability or non-probability sampling?", buckets:["Probability sample","Non-probability sample"], items:[
      {t:"A computer picks 300 numbers at random from a complete list of a city’s 12,000 licensed taxi drivers.", b:0, why:"Simple random sampling: every driver on the list had the same known chance."},
      {t:"A researcher interviews the first 50 shoppers who agree to stop outside one supermarket.", b:1, why:"Convenience: whoever was there and willing. Their chance of selection isn’t known."},
      {t:"Ten villages are chosen at random from a district list, and every household in them is visited.", b:0, why:"Cluster sampling: the villages were chosen by chance."},
      {t:"A health worker asks each participant to introduce other carers they know.", b:1, why:"Snowball sampling: selection depends on people’s networks, not chance."},
      {t:"Schools are split by region, and 5 schools are randomly chosen in each region.", b:0, why:"Stratified random sampling: random selection within each region."},
      {t:"An interviewer must find 40 people under 30 and 40 over 30, choosing anyone willing.", b:1, why:"Quota sampling: the groups are fixed, but people within them aren’t chosen randomly."}
    ]},
    {id:"t4u6-l4-x2", type:"number", q:"Ana has a list of 6,000 patient records and wants a systematic sample of 300. What sampling interval should she use (take every __th record after a random start)?", answer:20, tol:0, unit:"th record", why:"Interval = population ÷ sample size = 6,000 ÷ 300 = 20. She picks a random starting point between 1 and 20, then takes every 20th record after it.", wrongs:[
      {v:300, tol:0, why:"300 is the sample size, not the interval. Divide the list size by the sample size."},
      {v:0.05, tol:0.001, why:"That’s 300 ÷ 6,000, the sampling fraction (5%). The interval is the other way round: 6,000 ÷ 300."},
      {v:5, tol:0, why:"5 is the sampling fraction written as a percentage. The interval is 6,000 ÷ 300 = 20."}
    ], hint2:"Divide the number of records on the list by the number you want in the sample."},
    {id:"t4u6-l4-x3", type:"number", q:"Using the rule of thumb that the margin of error for a simple random sample is about 1 ÷ √n, what is the margin of error with **400** people, in percentage points?", answer:5, tol:0.2, unit:"percentage points", why:"√400 = 20, and 1 ÷ 20 = 0.05, which is 5 percentage points. So a result of 50% would mean roughly 45% to 55%. (This rough rule is for a yes/no question, 95% confidence and a simple random sample, and gives the largest margin, for a 50/50 split; the exact formula gives 4.9 points. Real surveys are usually a little less precise.)", wrongs:[
      {v:0.05, tol:0.002, why:"That’s the proportion. Multiply by 100 to express it in percentage points: 5."},
      {v:20, tol:0.1, why:"20 is √400. The margin is 1 divided by that: 1 ÷ 20 = 0.05, or 5 points."},
      {v:0.25, tol:0.01, why:"That’s 100 ÷ 400. The rule uses the square root of the sample size: 1 ÷ √400."}
    ], hint2:"Find the square root of 400 first, then divide 1 by it and turn the result into a percentage."},
    {id:"t4u6-l4-x4", type:"mcq", q:"Dmitri says: “The country has 40 million adults, so a survey of 1,500 randomly chosen adults can’t tell us anything.” What is the best reply?", options:[
      {t:"Precision depends mainly on the sample size, not the population size; 1,500 random adults gives a margin of only a few percentage points.", ok:true, why:"Right. Once a population is large, its size makes almost no difference. How people are chosen, and how many, is what counts."},
      {t:"He’s right: you need at least 10% of the population.", why:"That’s a common myth. 10% of 40 million is 4 million people, far more than needed for good precision."},
      {t:"He’s right unless the survey is done online.", why:"Mode isn’t the issue here; random selection and size are."},
      {t:"Any sample over 1,000 is perfectly accurate.", why:"No sample is perfectly accurate; there is always a margin of error, and bias can still creep in."}
    ]},
    {id:"t4u6-l4-x5", type:"match", q:"Match each invented study to the most suitable sampling approach.", pairs:[
      ["Estimating what share of households in a country have a bank account","Multistage probability sampling","A national estimate needs chance selection, and multistage designs make reaching households across a country affordable."],
      ["Interviewing people who have recovered from a rare illness, found through patient groups and referrals","Snowball","A hard-to-reach group is best found through people’s networks."],
      ["Choosing three schools that differ sharply in size and location to compare how they use tablets","Purposive (maximum variation)","Cases are picked deliberately for contrast and depth, not to estimate a percentage."],
      ["Comparing three regions, one of which is small, with enough people from each","Stratified, oversampling the small region","Strata guarantee each region is represented; oversampling gives the small one enough cases."],
      ["Testing whether a draft questionnaire is easy to understand","Convenience","For piloting, any few willing people from the target group will reveal unclear questions."]
    ]},
    {id:"t4u6-l4-x6", type:"mcq", q:"A trial randomly assigns 200 volunteers from one city to a new exercise programme or to usual activity. What can it support, and what can’t it?", options:[
      {t:"It can support a causal claim for people like these volunteers, but not automatically generalise to all adults, because the volunteers weren’t randomly sampled.", ok:true, why:"Yes. Random assignment gives internal validity; the lack of random sampling limits external validity."},
      {t:"It can generalise to all adults, because assignment was random.", why:"Random assignment makes the comparison fair; it doesn’t make volunteers represent everyone."},
      {t:"It can’t support any causal claim, because the volunteers weren’t randomly sampled.", why:"Causal claims rest on random assignment, which the trial has. Sampling affects who the result applies to."},
      {t:"It shows only a correlation, like a survey.", why:"Because chance decided who got the programme, it can test cause, unlike a survey."}
    ]},
    {id:"t4u6-l4-x7", type:"spot", q:"Mei wrote this sampling plan for an invented survey of teachers’ workload in her country. Tap each part with a **problem**.", ask:"a problem", parts:[
      {t:"Population: all secondary-school teachers in the country.", flag:false, why:"A clear population that matches the question."},
      " ",
      {t:"Frame: the education ministry’s register of schools, with staff lists from each sampled school.", flag:false, why:"A sensible frame. She should check it includes private schools if they are part of the population."},
      " ",
      {t:"I’ll post a link in a teachers’ social media group and use whoever replies.", flag:true, why:"Self-selected: teachers in that group who choose to reply may be the most overworked or most online. This contradicts the probability frame she just described."},
      " ",
      {t:"Because there are 300,000 teachers, I need to survey 30,000 (10%).", flag:true, why:"The 10% rule is a myth. Precision depends on the sample size; a well-drawn random sample of a few thousand would be ample."},
      " ",
      {t:"I’ll invite extra teachers because I expect some not to reply.", flag:false, why:"Good planning for non-response, though she should also check whether those who don’t reply differ from those who do."}
    ]}
   ],
   apply:{intro:"Plan the sample for your own question, and practise drawing a random sample.", tasks:[
     {t:"Write a sampling plan", how:["Name your target population precisely.","Name a realistic sampling frame and who it misses.","Choose a sampling method, probability or non-probability, and justify it from your question.","Say roughly how many people or cases you need and why, without inventing precision. Include how many you would invite."], write:"Population… Frame and who it misses… Method and why… How many, and how I decided…"},
     {t:"Draw a random sample in a spreadsheet", how:["Open any free spreadsheet app (Google Sheets, LibreOffice Calc, or Excel, including the free web and mobile versions). A computer is easiest; phone apps can do it too, but menus differ.","In column A, type the numbers 1 to 40 (type 1 and 2, select both, and drag down; on a phone you can type them).","In B1 type `=RAND()` and copy it down to B40.","Select both columns and sort by column B (look for Sort in the Data menu on a computer, or in the menu that appears when you select cells on a phone). The first 8 rows are a simple random sample of 8.","Repeat once (the random numbers change each time the sheet recalculates) and notice that the sample changes."], write:"My first sample… My second sample… What I noticed…"},
     {t:"Check a real sample", how:["Find a news report of a survey or poll.","Look for who was sampled, how, how many, and the stated margin of error. These details are often in a methods note or at the bottom of the article.","Decide whether the sample can support the headline."], write:"Report… Who, how, how many… Margin of error… Does the sample support the headline?…"}
   ], proof:"In your notes: a sampling plan with population, frame, method and a justified size; two random samples drawn in a spreadsheet; and your check of one published survey’s sample."},
   read:[
    {book:"bhatt", where:"Chapter 8, “Sampling”", note:"The sampling process, probability and non-probability methods, and sampling statistics."},
    {book:"soc", where:"Chapter 2, Section 2.2 “Research Methods” (on LibreTexts: 2.3), the part on surveys", note:"Populations, samples and random samples, with examples."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"t4u6-l5", title:"Validity, reliability and the proposal", minutes:60,
   hook:{q:"A well-run trial shows that a new teaching method raised reading scores among 9-year-olds in 40 city schools. A rural district wants to use it for 14-year-olds. What does the trial tell them?", options:["It will definitely work for them, because the trial was well run","Nothing at all, because the trial was in cities","It’s good evidence that the method worked for those pupils, but whether it carries over to older, rural pupils is a separate question","The trial must have been badly designed, or it would apply everywhere"], answer:2, reveal:"A study can be convincing about **what happened inside it** ([[internal-validity|internal validity]]) and still leave open **whether it carries over** to other people, places and times ([[external-validity|external validity]]). They are different questions with different evidence. This lesson sets out the main kinds of validity, how measures are checked for reliability, and how to put your whole plan on one page."},
   goals:[
     "Explain internal, external, construct and statistical conclusion validity, with examples",
     "Recognise the main threats to internal validity and the designs that guard against them",
     "Describe how the reliability and validity of measures are checked, and how qualitative research judges trustworthiness",
     "Write a one-page research proposal whose question, design, sample and analysis match"
   ],
   learn:[
    {h:"Questions to ask of any study", body:[
      {lead:"“Is this study valid?” is really several questions in one."},
      "In the sociology unit, [[validity]] meant whether a measure captures what it should. Research design uses the word more widely. A classic scheme, developed by Donald Campbell and colleagues and set out by Shadish, Cook and Campbell in 2002, names four kinds, and Bhattacherjee’s Chapter 5 uses the same four:",
      {fig:"<svg viewBox=\"0 0 340 452\"><defs><marker id=\"t4u6-l5-ar\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path class=\"d-inkf\" d=\"M0 0 L10 5 L0 10 Z\"/></marker></defs><rect class=\"d-gold\" x=\"40\" y=\"6\" width=\"260\" height=\"72\" rx=\"10\" stroke-width=\"1.5\"/><text x=\"170\" y=\"28\" text-anchor=\"middle\">Construct validity</text><text class=\"s\" x=\"170\" y=\"48\" text-anchor=\"middle\">Do X and Y really capture</text><text class=\"s\" x=\"170\" y=\"64\" text-anchor=\"middle\">the ideas we meant?</text><path class=\"d-ink\" d=\"M170 80 L170 104\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l5-ar)\"/><rect class=\"d-panel\" x=\"10\" y=\"108\" width=\"320\" height=\"150\" rx=\"12\" stroke-width=\"1.5\"/><text x=\"170\" y=\"130\" text-anchor=\"middle\">The study</text><circle class=\"d-lup\" cx=\"100\" cy=\"172\" r=\"24\" stroke-width=\"2\"/><text x=\"100\" y=\"177\" text-anchor=\"middle\">X</text><circle class=\"d-sage\" cx=\"240\" cy=\"172\" r=\"24\" stroke-width=\"2\"/><text x=\"240\" y=\"177\" text-anchor=\"middle\">Y</text><path class=\"d-ink\" d=\"M126 172 L212 172\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l5-ar)\"/><text class=\"s\" x=\"170\" y=\"220\" text-anchor=\"middle\">Internal validity: did X cause Y</text><text class=\"s\" x=\"170\" y=\"238\" text-anchor=\"middle\">here, or did something else?</text><path class=\"d-ink\" d=\"M80 260 L50 316\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l5-ar)\"/><path class=\"d-ink\" d=\"M170 260 L170 316\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l5-ar)\"/><path class=\"d-ink\" d=\"M260 260 L290 316\" stroke-width=\"2\" fill=\"none\" marker-end=\"url(#t4u6-l5-ar)\"/><rect class=\"d-rose\" x=\"8\" y=\"320\" width=\"100\" height=\"52\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"58\" y=\"342\" text-anchor=\"middle\">Other</text><text x=\"58\" y=\"360\" text-anchor=\"middle\">people</text><rect class=\"d-rose\" x=\"120\" y=\"320\" width=\"100\" height=\"52\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"170\" y=\"342\" text-anchor=\"middle\">Other</text><text x=\"170\" y=\"360\" text-anchor=\"middle\">places</text><rect class=\"d-rose\" x=\"232\" y=\"320\" width=\"100\" height=\"52\" rx=\"8\" stroke-width=\"1.5\"/><text x=\"282\" y=\"342\" text-anchor=\"middle\">Other</text><text x=\"282\" y=\"360\" text-anchor=\"middle\">times</text><text class=\"s\" x=\"170\" y=\"400\" text-anchor=\"middle\">External validity: does it hold</text><text class=\"s\" x=\"170\" y=\"418\" text-anchor=\"middle\">beyond this study?</text></svg>", alt:"At the top, a box labelled construct validity: do X and Y really capture the ideas we meant? An arrow leads down to a large box labelled the study, containing a circle X with an arrow to a circle Y, and the text internal validity: did X cause Y here, or did something else? Three arrows lead from the study box down to boxes labelled other people, other places and other times, with the text external validity: does it hold beyond this study?", cap:"Three of the four kinds of validity. Each asks a different question of the same study."},
      {table:[
        ["Kind","The question it asks"],
        ["[[internal-validity|Internal]]","Did X really cause the change in Y, here, or could something else explain it?"],
        ["[[external-validity|External]]","Would the result hold for other people, places, settings and times?"],
        ["[[construct-validity|Construct]]","Do the measures and the intervention really capture the concepts we meant?"],
        ["Statistical conclusion","Do the statistics support the claimed relationship (or lack of one), or could chance or the wrong analysis explain it?"]
      ]},
      "The four can pull against each other. A tightly controlled lab experiment can have high internal validity and low external validity; a large field survey the reverse. Good researchers say which they prioritised and why."
    ]},
    {h:"Threats to internal validity", body:[
      "Internal validity is about ruling out other explanations. Methods textbooks list standard threats, so you can check a design against each:",
      {table:[
        ["Threat","What happens","Invented example"],
        ["History","Something else happens at the same time","A clinic’s new appointment system starts the month a new bus route opens; attendance rises. Which caused it?"],
        ["Maturation","People change naturally over time","Children’s vocabulary grows over a school year with or without the new app"],
        ["Testing","Taking a test changes later scores","People do better on the second quiz because they’ve seen the first"],
        ["Instrumentation","The measure changes","A new data system starts recording more minor injuries"],
        ["Regression to the mean","Extreme scores drift back towards average","A support scheme for the worst-scoring pupils “works” partly because unusually low scores tend to rise anyway"],
        ["Selection","Groups differed from the start","Keen volunteers join the programme; the comparison group didn’t want to"],
        ["Attrition","People drop out unevenly","The least satisfied participants leave the study before the end"],
        ["Unclear time order","It’s unclear which came first","Do lonely people use social media more, or does use make them lonelier?"]
      ]},
      "Designs answer these threats in different ways. A **control group** handles history, maturation and testing, because both groups experience them. **Random assignment** handles selection. **Several measurements before the change** (time series) show existing trends and regression. Tracking drop-outs, and analysing everyone as originally assigned, limits attrition bias. No design removes every threat, so honest studies discuss the ones that remain."
    ]},
    {h:"External validity: who, where and when", body:[
      "External validity asks whether results travel. Three questions help:",
      {list:[
        "**People:** were participants like the people you care about? Results from young adult volunteers may not hold for older adults or children.",
        "**Settings:** a programme run by enthusiastic researchers in well-resourced schools may work differently when rolled out by busy staff everywhere.",
        "**Times:** findings about technology use, prices or attitudes can date quickly."
      ]},
      "One well-known warning came from Joseph Henrich, Steven Heine and Ara Norenzayan in 2010: much behavioural science has relied on participants from Western, educated, industrialised, rich and democratic (“WEIRD”) societies, who are often unusual compared with the rest of humanity. Studies with samples from more places, replications in different settings and random samples of real populations all improve external validity.",
      {tip:"Statistical generalisation (from a random sample to its population) is only one kind. Case studies and qualitative work generalise to **theory**, and qualitative researchers talk about **transferability**: giving enough detail about the setting for readers to judge whether findings fit theirs."}
    ]},
    {h:"Measures you can trust", body:[
      "Construct validity and [[reliability]] both concern measurement. Researchers gather several kinds of evidence:",
      {table:[
        ["Check","Question","How it’s done"],
        ["Test–retest reliability","Same result twice, when nothing has changed?","Give the measure to the same people two weeks apart"],
        ["Inter-rater reliability","Do different observers agree?","Two coders rate the same material and agreement is measured"],
        ["Internal consistency","Do the items of a scale hang together?","Statistics such as Cronbach’s alpha across a scale’s questions"],
        ["Face and content validity","Does it look right, and cover every dimension of the concept?","Review by experts and by people like the participants"],
        ["Criterion validity","Does it agree with an established measure, or predict a later outcome?","Compare a short screening question with a full clinical assessment"],
        ["Convergent and discriminant validity","Does it relate to what it should, and not to what it shouldn’t?","A stress scale should correlate with sleep problems, not with height"]
      ]},
      "Reliability is necessary but not enough: a measure can be consistently wrong. And a measure checked in one language or culture needs testing again elsewhere. Careful translation, back-translation and testing with local participants are standard before using a scale in a new country.",
      "Qualitative research uses its own criteria. A widely cited set from Yvonna Lincoln and Egon Guba (1985) speaks of **[[trustworthiness-term|trustworthiness]]**: credibility, transferability, dependability and confirmability. Practices include keeping a clear record of decisions, [[triangulation]] (checking one source or method against another), and [[reflexivity]]: reflecting on how the researcher’s position shaped the findings. Unit 7 explains these ({{trustworthiness}})."
    ]},
    {h:"Planning a proposal", body:[
      "A [[research-proposal-term|research proposal]] sets out what you will study, why, and how, before you start. You write one to get a place on a programme, approval from a supervisor, money from a funder or permission from an ethics committee. Each has its own template and length (a few pages to many), so always follow the one you are given. The core is the same everywhere, and it fits on one page:",
      {ex:"Title: says the topic, population and setting\nBackground and problem (3–4 sentences): what is known, what isn’t, why it matters\nResearch question(s) and aim; hypotheses if the study tests any\nTheory or conceptual framework (1–2 sentences)\nDesign: approach and design, and why it fits the question\nParticipants and sampling: population, frame, method, size and how you chose it\nData collection: measures, interview guide or sources; how and when\nAnalysis: how you will turn the data into an answer\nEthics: consent, privacy, risks, approvals needed\nLimitations: the main threats to validity, and what you will do about them\nTimeline and resources: key stages, costs, skills or access needed\nKey references: the 3–5 most important sources", label:"A one-page proposal outline"},
      "The most important quality is **alignment**: each part follows from the one before. A causal question needs a design that can support cause; a “how common?” question needs a probability sample; the analysis must use the data you plan to collect. Reviewers often call this the golden thread.",
      {key:"A strong proposal isn’t the most ambitious one. It’s the one where the question, the design, the sample and the analysis clearly fit together, and the limits are stated honestly."}
    ]},
    {h:"Checking your plan", body:[
      "Before you share a proposal, test it with these questions:",
      {ol:[
        "Could someone who has never met you say, after one reading, exactly what you will find out?",
        "Does the design match the question type (Lesson 3)?",
        "Is every concept defined and operationalised (Lesson 2)?",
        "Does the sample fit what you want to claim (Lesson 4)?",
        "Which threats to validity remain, and have you said so?",
        "Is it feasible in your time, with your money and access?",
        "Have you planned consent, privacy and ethics review (Unit 9)?"
      ]},
      "Research practice has also changed since Bhattacherjee’s 2012 textbook. Many researchers now **preregister** their questions, hypotheses and analysis plans in a public registry before collecting data, share their data and code where it’s safe to do so, and treat replication studies as valuable. Clinical trials are expected to be registered in a public trial registry before the first participant joins (the ICMJE, a group of medical journal editors, makes this a condition of publication). Unit 9 covers these practices and why they spread.",
      {warn:"A proposal is a plan, not a promise. Plans change once you meet real data and people. Keep a short log of what changed and why; you’ll need it when you write up."}
    ]}
   ],
   try:[
    {id:"t4u6-l5-x1", type:"match", q:"Match each worry about an invented study to the kind of validity it concerns.", pairs:[
      ["The patients who improved were also the ones whose doctors chose to give them the new treatment.","Internal validity","Selection: the groups may have differed from the start, so the treatment may not be the cause."],
      ["The study only included university students in one country.","External validity","It’s about whether the result holds for other people and places."],
      ["“Wellbeing” was measured with one question about income.","Construct validity","The measure doesn’t capture the concept the study claims to measure."],
      ["The researchers ran 60 tests and reported only the 3 that came out significant.","Statistical conclusion validity","Running many tests and reporting only the “hits” makes chance findings look real."]
    ]},
    {id:"t4u6-l5-x2", type:"sort", q:"Each invented study has an internal validity problem. Which threat is it mainly?", buckets:["History","Maturation","Selection","Attrition"], items:[
      {t:"Sales rose after a shop redesigned its window, but a big festival opened in town the same week.", b:0, why:"An outside event happened at the same time as the change."},
      {t:"Toddlers’ speech improved over six months of a parenting programme, with no comparison group.", b:1, why:"Toddlers’ speech develops rapidly anyway; without a comparison you can’t separate the programme from natural growth."},
      {t:"Staff who signed up for a wellbeing course reported less stress than staff who didn’t.", b:2, why:"People chose themselves; those who signed up may have differed from the start."},
      {t:"Half the participants in a diet study left before the end, mostly those who weren’t losing weight.", b:3, why:"Uneven drop-out makes the remaining group look more successful than the whole group was."},
      {t:"Crime fell after a youth club opened, in the same month the police doubled patrols.", b:0, why:"Another change happened at the same time."},
      {t:"Pupils who chose an optional coding club scored higher on logic tests than pupils who didn’t.", b:2, why:"Pupils who opt in may already be stronger at logic."}
    ]},
    {id:"t4u6-l5-x3", type:"number", q:"A two-year study starts with 800 participants. 560 complete it. What is the **attrition** (drop-out) rate, as a percentage?", answer:30, tol:0.1, unit:"%", why:"Drop-outs = 800 − 560 = 240. Attrition = 240 ÷ 800 × 100 = 30%. Whether that is a problem depends on whether those who left differ from those who stayed, so studies compare the two groups at the start.", wrongs:[
      {v:70, tol:0.1, why:"70% is the retention rate (560 ÷ 800). Attrition is the share who left: 240 ÷ 800."},
      {v:240, tol:0, why:"240 is the number who dropped out. Divide by 800 and multiply by 100 to get a percentage."},
      {v:0.3, tol:0.01, why:"That’s the proportion. Multiply by 100 for a percentage: 30%."},
      {v:42.9, tol:0.2, why:"You divided by the 560 who completed. Attrition is measured against the 800 who started."}
    ], hint2:"Work out how many left, then divide by the number who started."},
    {id:"t4u6-l5-x4", type:"mcq", q:"Two trained observers watch the same 20 classroom videos and count “student questions”. They agree on fewer than half the counts. What does this show first of all?", options:[
      {t:"Poor inter-rater reliability: the coding rules need clarifying and the observers more practice.", ok:true, why:"Yes. When observers disagree about the same material, the measure isn’t consistent. Clear definitions and practice usually fix this."},
      {t:"Poor external validity.", why:"External validity concerns generalising to other settings; this is about whether the measurement is consistent."},
      {t:"That the videos are biased.", why:"The same videos were shown to both. The disagreement comes from the coding, not the material."},
      {t:"That student questions can’t be studied.", why:"They can, once “question” is defined clearly enough for observers to agree."}
    ]},
    {id:"t4u6-l5-x5", type:"order", q:"Put these parts of a one-page proposal in a sensible order.", items:[
      {t:"Background and problem", why:"First explain what is known and what is missing, so readers see why the study matters."},
      {t:"Research question and aim", why:"The question follows from the gap the background identified."},
      {t:"Design", why:"The design is chosen to answer that question."},
      {t:"Participants and sampling", why:"With the design chosen, say who will take part and how they are chosen."},
      {t:"Data collection and analysis", why:"Then how the data will be gathered and turned into an answer."},
      {t:"Ethics, limitations and timeline", why:"Finally, show the plan is safe, honest about its limits and achievable."}
    ]},
    {id:"t4u6-l5-x6", type:"spot", q:"Fatima drafted this proposal summary. Tap each part where the **alignment** breaks.", ask:"an alignment problem", parts:[
      {t:"Question: What share of households in her district use solar lamps?", flag:false, why:"A clear descriptive question."},
      " ",
      {t:"Design: a cross-sectional household survey.", flag:false, why:"A one-off survey fits a “what share?” question."},
      " ",
      {t:"Sample: the 25 households in her own street.", flag:true, why:"A convenience sample of one street can’t estimate a district-wide share. She needs a probability sample across the district."},
      " ",
      {t:"Measure: “Does your household use a solar lamp at least once a week?”", flag:false, why:"A clear, concrete indicator."},
      " ",
      {t:"Conclusion she plans to draw: solar lamps cause children to study longer.", flag:true, why:"A causal claim about a different outcome, which her descriptive survey doesn’t measure or test."}
    ]},
    {id:"t4u6-l5-x7", type:"mcq", q:"Kenji’s qualitative study has 18 interviews with nurses in one hospital. A reviewer asks how his findings could apply elsewhere. What is the best answer?", options:[
      {t:"Describe the setting and participants in rich detail so readers can judge transferability, and link the findings to theory.", ok:true, why:"Yes. Qualitative studies don’t generalise statistically; they support transferability and theoretical generalisation through detail and connection to existing ideas."},
      {t:"Claim the findings apply to all nurses, because 18 is a large number of interviews.", why:"18 interviews in one hospital can’t represent all nurses statistically, however rich they are."},
      {t:"Add a margin of error to the interview themes.", why:"Margins of error need a probability sample and numerical estimates; they don’t apply to interview themes."},
      {t:"Say that qualitative research never needs to consider other settings.", why:"Readers rightly want to know where findings might apply. Qualitative research answers that with transferability, not by ignoring it."}
    ]}
   ],
   apply:{intro:"Bring together everything from this unit into a plan you could show a teacher, supervisor or colleague.", tasks:[
     {t:"Audit a study’s validity", how:["Pick a study reported in the news or one open-access paper you found in Lesson 3.","Write one sentence each on its internal, external and construct validity.","Name the biggest remaining threat, and one change to the design that would reduce it."], write:"Study… Internal… External… Construct… Biggest threat… Design fix…"},
     {t:"Write your one-page proposal", how:["Use the outline in this lesson and your notes from Lessons 1–4.","Keep each section to one to three sentences; the whole thing should fit on one page.","Check alignment: underline the question, then check that the design, sample, measures and analysis all serve it.","List the two biggest threats to validity and what you would do about them."], write:"Title… Background… Question and aim… Theory… Design… Sample… Data collection… Analysis… Ethics… Limitations… Timeline…"},
     {t:"Get feedback", how:["Ask a friend, colleague or family member to read your proposal (they don’t need research experience).","Ask them to tell you, in their own words, what you will find out and how.","Note anything they found unclear, and revise."], write:"What they said I’d find out… What was unclear… What I changed…"}
   ], proof:"In your notes: a validity audit of one study, a one-page proposal with all the sections in the outline, and a revised version after feedback."},
   read:[
    {book:"bhatt", where:"Chapter 5, “Research Design”: the section on internal, external, construct and statistical conclusion validity", note:"A compact version of the four-validity scheme, with the key attributes of a good design."},
    {book:"bhatt", where:"Chapter 7, “Scale Reliability and Validity”", note:"How measures are tested: kinds of reliability and validity evidence."},
    {book:"soc", where:"Chapter 2, Section 2.1 “Approaches to Sociological Research” (on LibreTexts: 2.2)", note:"Short definitions of reliability and validity. (The sociology unit notes one slip in this section’s wording about reliability.)"}
   ]
  }
  ],
  checkpoint:["t4u6-q02","t4u6-q06","t4u6-q11","t4u6-q15","t4u6-q19","t4u6-q22","t4u6-q26","t4u6-q30","t4u6-q33","t4u6-q37","t4u6-q41","t4u6-q44"],
  codex:[
   {id:"research-questions", title:"Research questions", aka:["formulating a research question","topic to question","aims and objectives","question types"], tags:["research","design"],
    summary:"How a broad topic becomes a focused, answerable question, and how the kind of question shapes the rest of a study.",
    levels:{
     starter:[
      "A topic is an area (“plastic waste”). A [[research-question|research question]] is one specific thing you will find out, written so that evidence could answer it (“How much plastic do households in two neighbourhoods throw away in a week, and of what kinds?”).",
      "You get from one to the other by narrowing: adding **who**, **what exactly**, **where** and **when**. Reading what others have already found helps you spot a gap worth filling.",
      "A good test: can you imagine what an answer would look like? If not, keep narrowing.",
      {ex:"Topic: youth unemployment\nNarrower: young people who left school at 16 in one town\nNarrower still: how they looked for their first job\nQuestion: How did school leavers aged 16–18 in one town look for their first job in the past two years, and which routes led to work?", label:"Example (invented)"},
      {key:"Everything else in a study (design, sample, measures, analysis) is chosen to answer the question. Get the question right first."}
     ],
     builder:[
      "Questions come in kinds, and the kind drives the design:",
      {table:[
        ["Type","Asks","Typical designs"],
        ["Descriptive","What, how much, how often?","Survey of a random sample; secondary data"],
        ["Comparative","Do groups or times differ?","Survey; secondary data; quasi-experiment"],
        ["Relational","Do two things go together?","Cross-sectional or longitudinal survey"],
        ["Causal","Does X change Y?","Experiment; quasi-experiment; panel data"],
        ["Exploratory","How do people experience or make sense of this?","Interviews; case study; ethnography"]
      ]},
      "Proposals usually pair the question with an **aim** (the overall purpose) and **objectives** (concrete steps). Large projects split the main question into sub-questions, each answered by part of the design.",
      "Check the verbs. “Improve”, “reduce”, “cause” and “effect” make a question causal; a design that only observes once can’t support that. Value questions (“should…?”) can’t be settled by evidence alone; research can answer the factual parts of them.",
      "Use checklists such as FINER and structures such as PICO to test and sharpen a draft ({{finer-pico}}).",
      "A quick self-test for any draft question:",
      {list:["Could evidence answer it, and can you picture what an answer would look like?","Is every key term clear, or defined somewhere in your plan?","Does it say who, where and when?","Is its scope matched to your time, money and access?","Does it avoid assuming its own answer?"]},
      "Your position matters too. Insiders (a teacher studying her own school, a nurse his own ward) gain access and understanding, but must think carefully about power, confidentiality and seeing only what they expect."
     ],
     pro:[
      "Experienced researchers treat the question as something refined iteratively, alongside the literature review and early design work. A question often changes after a pilot study shows what data can realistically be collected.",
      "Qualitative questions are usually open and process-oriented (“how”, “what is it like”) and may be refined during fieldwork. Saying so in advance is normal in qualitative proposals.",
      "Common reviewer criticisms: the question is too broad for the resources; the question and design don’t match; key terms are undefined; the question’s answer is already known; or the study tries to answer several unrelated questions at once.",
      "In funding applications, reviewers look for a short, explicit chain: the gap in knowledge, the question that addresses it, the design that answers it, and the contribution the answer will make. Writing that chain in four sentences is a good test of a draft.",
      "In evidence synthesis (systematic and scoping reviews) the question also defines inclusion criteria, so it needs to be fixed and written down in a protocol before searching. Changing it afterwards needs to be reported.",
      "Good practice now includes stating questions and hypotheses publicly before collecting data (preregistration), so readers can tell planned questions from ones added after seeing the results. Bhattacherjee’s 2012 textbook predates the wide spread of this practice."
     ]
    },
    related:["finer-pico","theory-hypotheses","research-designs","research-proposal"],
    read:[{book:"bhatt", where:"Chapter 3, “The Research Process”"}],
    sources:[{t:"Centre for Evidence-Based Medicine, University of Oxford: What makes a good clinical question?", url:"https://www.cebm.ox.ac.uk/resources/top-tips/what-makes-a-good-clinical-question"},{t:"Regatieri, Alves & Rocha (2019), Medical acumen and scientific approach meet the FINER method, Arquivos Brasileiros de Oftalmologia", url:"https://new.scielo.br/j/abo/a/hnPLjgHmYvvbkZdPsFh8Fdc/?lang=en"}], checked:"2026-11"},

   {id:"finer-pico", title:"FINER, PICO and other question frameworks", aka:["FINER criteria","PICO","PICOT","PECO","SPIDER","PCC"], tags:["research","design","health"],
    summary:"A checklist for judging a research question (FINER) and templates for breaking one into parts (PICO, PECO, SPIDER, PCC).",
    levels:{
     starter:[
      "**[[finer-criteria|FINER]]** is a checklist: is your question **F**easible, **I**nteresting, **N**ovel, **E**thical and **R**elevant? It is associated with *Designing Clinical Research*, a textbook by Stephen Hulley, Steven Cummings and colleagues, but it works in any field.",
      "**[[pico-framework|PICO]]** breaks a question into parts: the **P**opulation, the **I**ntervention, what it is **C**ompared with, and the **O**utcome. “In older adults with knee pain (P), does a home exercise programme (I), compared with advice alone (C), reduce pain (O)?”",
      "Naming each part makes it obvious what you will study and helps you choose search words later.",
      "For questions about experiences rather than effects, other templates exist, such as SPIDER for qualitative studies. You don’t have to use any template, but naming each part of your question is always a good habit.",
      {key:"FINER asks whether a question is worth doing. PICO and its relatives make the question precise."}
     ],
     builder:[
      "The Centre for Evidence-Based Medicine at Oxford credits W. Scott Richardson and colleagues’ 1995 article “The well-built clinical question: a key to evidence-based decisions” (*ACP Journal Club*) as the first use of PICO to build a clinical question. A **T** for time frame is often added (PICOT).",
      "Variants fit other kinds of questions:",
      {table:[
        ["Framework","Parts","Use"],
        ["PECO","Population, Exposure, Comparator, Outcome","Exposures that aren’t chosen or assigned, such as pollution or a workplace hazard (Morgan et al., 2018)"],
        ["SPIDER","Sample, Phenomenon of Interest, Design, Evaluation, Research type","Finding qualitative and mixed methods studies (Cooke, Smith & Booth, 2012)"],
        ["PCC","Population (or Participants), Concept, Context","Scoping reviews, as recommended by JBI"]
      ]},
      "In FINER, **novel** includes confirming, refuting or extending earlier findings, so a careful replication in a new population counts. **Feasible** covers participants, skills, time, money and access; it is where most small projects run into trouble.",
      "PICO parts also become search blocks (Unit 2): synonyms for each part are joined with OR, and the parts are joined with AND. Many search guides advise building the search mainly from the population and intervention blocks and leaving outcome terms out, at least at first, because outcomes are often not mentioned in titles and abstracts, so outcome terms can make you miss relevant studies.",
      {ex:"P: secondary-school pupils\nI: peer tutoring in mathematics\nC: usual lessons\nO: mathematics test scores\nSearch blocks: (pupils OR students OR adolescents) AND (“peer tutoring” OR “peer-assisted learning”) AND (mathematics OR maths OR math)", label:"Example (invented): PICO in education"}
     ],
     pro:[
      "The frameworks were built mainly to structure searches and reviews. The SPIDER authors, in their 2012 *Qualitative Health Research* article, concluded that their tool needed further testing before it could be considered a viable alternative to PICO, and many review teams still search with PICO-style terms plus qualitative filters. Use frameworks as aids, not rules.",
      "PECO was set out by Rebecca Morgan, Paul Whaley, Kristina Thayer and Holger Schünemann in *Environment International* (2018) for questions about the link between exposures and health outcomes in environmental, occupational and nutrition research, including animal studies. It helps define review objectives and inclusion criteria, and judge how directly the evidence answers the question.",
      "PCC suits scoping reviews, which map what kinds of evidence exist rather than estimating an effect; it deliberately avoids an intervention and comparison. JBI’s manual for evidence synthesis is the main reference and is updated online, so cite the version you used.",
      "Outside health, the same logic applies under different names: education research often specifies learners, intervention, comparison and learning outcome; policy questions name the population, policy, counterfactual and outcome. What matters is that each element is explicit.",
      "FINER’s judgements are partly subjective. **Relevant** and **interesting** depend on audience; a funder and a community may weigh them differently. Involving people affected by the research in shaping questions (public or community involvement) is increasingly expected by funders."
     ]
    },
    related:["research-questions","research-designs","research-proposal"],
    sources:[{t:"Richardson, Wilson, Nishikawa & Hayward (1995), The well-built clinical question (record)", url:"https://iro.uiowa.edu/esploro/outputs/editorial/The-well-built-clinical-question-a-key/9984359950602771"},{t:"PubMed: Beyond PICO: the SPIDER tool for qualitative evidence synthesis (2012)", url:"https://pubmed.ncbi.nlm.nih.gov/22829486/"},{t:"Lancaster University: Identifying the PECO (Morgan et al., 2018)", url:"https://eprints.lancs.ac.uk/id/eprint/127179"}], checked:"2026-11"},

   {id:"theory-hypotheses", title:"Theory, concepts and hypotheses", aka:["conceptualisation","operationalisation","constructs","levels of measurement","unit of analysis","ecological fallacy"], tags:["research","design","measurement"],
    summary:"How theories, concepts, variables, indicators and hypotheses connect, from abstract ideas to things you can measure.",
    levels:{
     starter:[
      "A [[theory-research|theory]] explains why something happens. A [[concept-research|concept]] is an idea inside it, such as trust or workload. To study a concept you must say what you mean (**conceptualisation**) and how you will measure it (**operationalisation**, giving an [[operational-definition|operational definition]]).",
      "A [[hypothesis]] then states what you expect to find between [[variable|variables]], in a way evidence could prove wrong.",
      "Example: the theory that social ties help people find work leads to the concept of social ties, a variable (size of someone’s job-help network) and an indicator (“How many people could help you find a job?”).",
      "Not every study tests a hypothesis. Exploratory and qualitative research often starts with open questions and builds its ideas from what it finds.",
      {key:"Every step from idea to measure is a choice. Write each one down so readers can judge it."}
     ],
     builder:[
      "**Levels of measurement** (S. S. Stevens, 1946) decide which summaries make sense: nominal (categories), ordinal (ordered categories), interval (equal steps, no true zero) and ratio (equal steps and a true zero).",
      "The [[unit-of-analysis|unit of analysis]] is what your conclusions are about: people, households, schools, countries, documents. Reasoning from group data to individuals is the [[ecological-fallacy|ecological fallacy]].",
      "Variable roles beyond independent and dependent:",
      {list:[
        "**[[confounder|Confounder]]**: influences both cause and effect, creating a misleading link.",
        "**Control variable**: measured so its influence can be held constant.",
        "**Mediator**: the route through which a cause works.",
        "**Moderator**: changes the strength or direction of an effect for different groups."
      ]},
      "Hypotheses can be directional (“higher X goes with higher Y”) or non-directional (“X is related to Y”). In statistical testing there is also a null hypothesis of no relationship. Exploratory and qualitative studies use open research questions instead.",
      {ex:"Theory: the theory of planned behaviour (Ajzen, 1991)\nConcept: perceived behavioural control\nVariable: confidence in being able to exercise regularly\nIndicator: agreement from 1 to 5 with “I am confident I could exercise three times a week if I wanted to”\nHypothesis: among office workers, higher confidence predicts more exercise sessions over the next month", label:"The whole chain (invented study)"},
      "Write hypotheses before collecting data and keep them fixed. If new ideas come from the data, report them as new, exploratory findings for future studies to test."
     ],
     pro:[
      "Bhattacherjee distinguishes concepts from **constructs** (concepts deliberately chosen or created to explain a phenomenon) and describes a theory as a system of constructs and propositions that explains a phenomenon within certain assumptions and boundary conditions. Testing a theory means testing hypotheses derived from its propositions; one failed hypothesis may reflect poor measurement rather than a wrong theory.",
      "Multi-item measures for important constructs reduce the impact of any single poor question. Reusing validated scales aids comparison, but check evidence of validity in your population and language (see {{validity-types}}).",
      "Whether ordinal data such as agreement scales may be treated as interval (averaged) is a long-running debate; many researchers do so for multi-item scales, while others prefer methods designed for ordered categories. State your choice.",
      "W. S. Robinson’s 1950 paper on ecological correlations showed that group-level and individual-level correlations can differ greatly. Multilevel models now let researchers analyse individuals within groups at the same time.",
      "Concepts don’t always travel between countries and languages. “Household”, “employment” and even “urban” are defined differently by different national statistics offices, so comparative studies harmonise definitions and say how they did it.",
      "Beyond induction and deduction, many researchers describe **abduction**: starting from a surprising finding and reasoning to the explanation that would best account for it, then testing that explanation. Much qualitative and mixed methods work moves this way."
     ]
    },
    related:["research-questions","validity-types","scientific-method-sociology","correlation-causation"],
    read:[{book:"bhatt", where:"Chapter 2, “Thinking Like a Researcher”; Chapter 4, “Theories in Scientific Research”; Chapter 6, “Measurement of Constructs”"}],
    sources:[{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Approaches to Sociological Research", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.02%3A_Approaches_to_Sociological_Research"},{t:"Bhattacherjee, Social Science Research (revised edition, University of Southern Queensland): Research design", url:"https://usq.pressbooks.pub/socialscienceresearch/?p=65"}], checked:"2026-11"},

   {id:"research-designs", title:"Research designs", aka:["experimental design","quasi-experiment","natural experiment","cross-sectional study","longitudinal study","panel study","cohort study","case-control study","case study design"], tags:["research","design","methods"],
    summary:"The main blueprints for a study, from randomised experiments to cross-sectional, longitudinal, case study and ethnographic designs, and what each can show.",
    levels:{
     starter:[
      "A [[research-design-term|research design]] is the plan that links your question to your evidence: what data, from whom, when, how many times, and whether anything is changed on purpose.",
      "Designs that **change** something: experiments (with [[random-assignment|random assignment]]) and quasi-experiments (without). Designs that **observe**: [[cross-sectional|cross-sectional]] (once) and [[longitudinal|longitudinal]] (over time). Designs that go **deep**: [[case-study|case studies]] and [[ethnography]].",
      "Each design can answer some questions well and others poorly. A one-off survey can describe how common something is, but can’t usually show cause; an experiment can test cause, but only for what can ethically be changed.",
      "Example (invented): to learn whether a new bus route helps people reach jobs, you could survey residents once, follow the same residents for two years, compare neighbourhoods on and off the route before and after it opened, or spend months riding the route and talking with passengers. Each answers a slightly different question.",
      {key:"Choose the design that fits your question, not the one you know best."}
     ],
     builder:[
      {table:[
        ["Design","Strength","Main limit"],
        ["Randomised experiment","Strongest test of cause (internal validity)","Not everything can be assigned; may not generalise"],
        ["[[quasi-experiment|Quasi-experiment]]","Tests change in real settings","Groups may differ beforehand (selection)"],
        ["[[natural-experiment|Natural experiment]]","Chance-like groups created by events or rules","Rare; must argue the groups are comparable"],
        ["Cross-sectional","Quick, describes a population","Can’t establish time order"],
        ["[[panel-study|Panel]] / [[cohort-study|cohort]]","Follows change; time order","Slow, costly; attrition"],
        ["[[case-control-study|Case-control]]","Efficient for rare outcomes","Recall and selection of controls can bias results"],
        ["Case study / ethnography","Depth, context, mechanisms","Can’t estimate how common something is"]
      ]},
      "Quasi-experimental forms include a comparison group with before-and-after measures, interrupted time series and cut-off (regression discontinuity) designs. A classic natural experiment is John Snow’s 1854 comparison of cholera deaths among London households supplied by two water companies.",
      "Bhattacherjee’s Chapter 5 lists experimental studies, field surveys, secondary data analysis, case research, focus group research, action research and ethnography as popular designs.",
      "**Secondary analysis** of existing data is a design choice in its own right: many national surveys, censuses and cohort studies can be reanalysed for new questions, saving time and avoiding new burdens on participants ({{secondary-data}}).",
      "When choosing, ask four questions: Does the design fit the question type? Can it rule out the most plausible alternative explanations? Will the results apply to the people I care about? Is it ethical and feasible with my time and resources?"
     ],
     pro:[
      "Terminology varies by field. In epidemiology, a cohort study follows people classified by exposure forward in time, and case-control studies sample on the outcome; in social science, “panel” usually means the same respondents re-interviewed, and “cohort” a group sharing a starting point such as birth year. Read each paper’s definition.",
      "Well-known cohorts include the Dunedin Multidisciplinary Health and Development Study (1,037 babies born in Dunedin, New Zealand, in 1972–73, assessed repeatedly into middle age) and Young Lives (about 12,000 children in Ethiopia, India, Peru and Vietnam since 2002). Many such datasets can be used by registered researchers, making longitudinal analysis possible without new data collection.",
      "Observational designs strengthen causal inference by establishing time order, measuring and adjusting for confounders, using within-person change (fixed effects), and comparing trends before and after a change in treated and untreated groups (difference-in-differences). None removes bias from unmeasured confounders as random assignment does.",
      "Randomised trials have their own threats: drop-out, people not following their assigned group, and spill-over between groups. Analysing everyone as randomised (intention to treat) is the standard safeguard. Trials are expected to be registered in a public registry (for example one listed by the WHO International Clinical Trials Registry Platform) before recruitment, and many other studies now preregister too.",
      "Case study methodologists stress that cases are selected for what they can reveal (typical, extreme, deviant or critical cases), and that generalisation is analytic (to theory) rather than statistical."
     ]
    },
    related:["mixed-methods","validity-types","experiments-sociology","field-research","correlation-causation"],
    read:[{book:"bhatt", where:"Chapter 5, “Research Design”; Chapter 10, “Experimental Research”; Chapter 11, “Case Research”"}],
    sources:[{t:"Bhattacherjee, Social Science Research (revised edition, University of Southern Queensland): Research design", url:"https://usq.pressbooks.pub/socialscienceresearch/?p=65"},{t:"Encyclopedia.com: Quasi-experimental research designs", url:"https://encyclopedia.com/social-sciences/encyclopedias-almanacs-transcripts-and-maps/quasi-experimental-research-designs"},{t:"Atlas of Longitudinal Datasets: Dunedin Multidisciplinary Health and Development Study", url:"https://atlaslongitudinaldatasets.ac.uk/datasets/dmhds"}], checked:"2026-11"},

   {id:"mixed-methods", title:"Mixed methods research", aka:["convergent design","explanatory sequential design","exploratory sequential design","integration","QUAN and QUAL"], tags:["research","design","methods"],
    summary:"Studies that deliberately combine quantitative and qualitative strands, and the three core designs for doing so.",
    levels:{
     starter:[
      "[[mixed-methods-term|Mixed methods research]] combines numbers and words in one study, on purpose, so each covers what the other misses. A survey can show how many people do something; interviews can show why.",
      "The key idea is **integration**: bringing the two kinds of evidence together to reach conclusions neither would give alone. Doing a survey and some interviews and reporting them separately isn’t really mixed methods.",
      "Example (invented): a survey finds that half of new parents in a town don’t use the free baby clinic; interviews with some of those parents then reveal the reasons, such as opening hours and transport.",
      "Mixed methods is used in many fields: evaluating health programmes, studying how farmers adopt new practices, understanding why some schools improve, or developing questionnaires that make sense to the people who will answer them.",
      {key:"Mixed methods is about combining, not just collecting both."}
     ],
     builder:[
      "John Creswell and Vicki Plano Clark’s *Designing and Conducting Mixed Methods Research* (3rd edition 2018; 4th edition 2025) describes three **core designs**:",
      {list:[
        "**Convergent:** collect quantitative and qualitative data in the same phase, analyse each, then compare or merge them to see where they agree, add to or contradict each other.",
        "**Explanatory sequential:** quantitative first; then qualitative work to explain particular results, such as surprising findings or outliers.",
        "**Exploratory sequential:** qualitative first, to explore; then use what you learn to build something quantitative (a survey, a measure, an intervention) and test it more widely."
      ]},
      "Researchers often write the strands as QUAN and QUAL, with arrows (→) for sequence and plus signs (+) for strands done at the same time.",
      "Choose the design from your purpose: comparing perspectives (convergent), explaining numbers (explanatory), or developing a measure or intervention where little is known (exploratory).",
      {table:[["Design","Invented example"],["Convergent","A city surveys 500 cyclists about road safety while running four focus groups, then compares where concerns match and differ"],["Explanatory sequential","Clinic records show one clinic has far fewer missed appointments; interviews with its staff and patients explain why"],["Exploratory sequential","Interviews with fishers about “income security” produce survey questions that are then tested with fishers in several ports"]]},
      "Sampling links the strands: in sequential designs the second sample is often drawn from the first (interviewing survey respondents with particular results), which makes integration easier."
     ],
     pro:[
      "Creswell and Plano Clark’s third edition also describes complex applications that embed core designs within intervention trials, case studies, participatory and social justice frameworks, and programme evaluations; the fourth edition (published December 2025) has a chapter on “hybrid” designs and a chapter on joint displays and metainferences (the conclusions drawn from combining the strands). Earlier editions used other names and longer lists, so match a paper’s labels to the edition it cites.",
      "Integration can happen at several points: in the design (one strand shapes the other), in sampling (interviewees chosen from survey respondents), in analysis (data transformed or compared) and in interpretation. **Joint displays**, tables or figures that set the two kinds of findings side by side, are a common way to show it.",
      "When strands disagree, that is a finding to explain, not a failure. Possible reasons include different samples, different meanings of a concept, or a real complexity the numbers alone hid.",
      "Mixed methods needs skills in both traditions and usually more time. Teams often combine people with different methodological strengths. Reporting should state the design, the priority of each strand, the timing and exactly how integration was done.",
      "Mixed methods is distinct from **multimethod** research, which uses several methods of the same kind (for example, two quantitative methods) without combining qualitative and quantitative strands."
     ]
    },
    related:["research-designs","sampling-methods","validity-types"],
    sources:[{t:"Sage: Designing and Conducting Mixed Methods Research, 3rd edition (contents)", url:"https://collegepublishing.sagepub.com/products/241842"},{t:"Sage: Designing and Conducting Mixed Methods Research, 4th edition (contents)", url:"https://collegepublishing.sagepub.com/products/designing-and-conducting-mixed-methods-research-4-269004"}], checked:"2026-11"},

   {id:"sampling-methods", title:"Sampling methods and sample size", aka:["probability sampling","non-probability sampling","stratified sampling","cluster sampling","snowball sampling","purposive sampling","sample size"], tags:["research","design","sampling"],
    summary:"How researchers choose who or what to study, the main probability and non-probability methods, and how to think about sample size.",
    levels:{
     starter:[
      "A [[sample]] is the part of a [[population-research|population]] you actually study. How you choose it decides what you can claim.",
      "In **[[probability-sampling|probability sampling]]**, chance decides who is picked, and everyone on the list has a known chance. That lets you generalise to the population and estimate a margin of error. In **[[non-probability-sampling|non-probability sampling]]** people are picked by convenience, judgement or referral; it is fine for many purposes, but you can’t use it to estimate how common something is.",
      "Bigger samples reduce random error, but no size fixes a biased way of choosing people.",
      "Example (invented): to estimate how many households in a district have a water filter, a team picks villages at random and then households at random within them. To understand why some households stopped using their filters, they instead choose a few households deliberately, including some that kept using them, for in-depth interviews.",
      {key:"How you choose matters more than how many you choose."}
     ],
     builder:[
      {table:[
        ["Probability","Non-probability"],
        ["[[simple-random-sampling|Simple random]]: equal chance for all","[[convenience-sample|Convenience]]: whoever is easy to reach"],
        ["[[systematic-sampling|Systematic]]: every kth from a random start","Volunteer: people choose to take part"],
        ["[[stratified-sampling|Stratified]]: random within groups","[[quota-sampling|Quota]]: fixed numbers per group, not random"],
        ["[[cluster-sampling|Cluster]]: random whole groups","[[purposive-sampling|Purposive]]: chosen for what they can show"],
        ["Multistage: several random steps","[[snowball-sampling|Snowball]]: participants refer others"]
      ]},
      "The **[[sampling-frame|sampling frame]]** is the list you sample from; people missing from it can’t be selected ([[coverage-error|coverage error]]).",
      "**Sample size, plainly:** for a simple random sample and a yes/no question, the 95% [[margin-of-error|margin of error]] is at most about 1 ÷ √n (its value for a 50/50 split): about ±10 points for 100 people, ±5 for 400, ±3 for about 1,000. Quadrupling the sample halves the margin. Population size hardly matters once it is large. Real surveys have wider margins because of clustering, weighting and non-response.",
      "Experiments use **[[statistical-power|power]]** calculations; qualitative studies justify numbers by their aims and the richness of the data.",
      "Match the method to the claim. If you want to say “about 30% of nurses in the region…”, you need a probability sample. If you want to say “here are the ways nurses experience night shifts”, a purposive sample chosen for variety is the right tool, and percentages from it would mislead.",
      "Whatever the method, report it fully: the population, the frame, how people were selected, how many were invited, how many took part, and how the size was decided."
     ],
     pro:[
      "Statistics Canada’s data quality guidelines define probability sampling as giving all units of the survey population known and positive inclusion probabilities, and describe stratification, multi-stage and two-phase designs. Complex designs need analysis that accounts for weights, strata and clusters; treating them as simple random samples understates uncertainty.",
      "The **design effect** compares a complex design’s precision with a simple random sample of the same size; cluster samples usually have design effects above 1 because people in a cluster resemble each other.",
      "Non-probability online panels are now widely used. Weighting to population totals reduces bias only for measured characteristics, so their accuracy varies by topic and needs checking against benchmarks.",
      "Qualitative sample size is justified by aims, not formulas. Concepts include [[data-saturation|saturation]] (stopping when new data stop changing the analysis) and Malterud, Siersma and Guassora’s “information power” (2016): the narrower the aim, the more specific the sample, the more it draws on established theory and the stronger the interview dialogue, the fewer participants are needed. Report how you decided.",
      "For experiments, power depends on the smallest effect worth detecting, the outcome’s variability, the significance level and the design (paired or clustered designs differ). Underpowered studies often miss real effects, and those that do find something tend to overstate its size.",
      "Respondent-driven sampling, a structured form of snowball sampling that tracks who recruited whom and adjusts estimates accordingly, is used to study hidden populations, though its assumptions are often hard to meet in practice."
     ]
    },
    related:["survey-research","research-designs","validity-types"],
    read:[{book:"bhatt", where:"Chapter 8, “Sampling”"}],
    sources:[{t:"Statistics Canada, Data Quality Guidelines: Sampling", url:"https://www150.statcan.gc.ca/n1/pub/12-539-x/steps-etapes/4058330-eng.htm"},{t:"Pew Research Center: Methods 101, random sampling", url:"https://www.pewresearch.org/methods/2017/05/12/methods-101-video-random-sampling/"},{t:"Australian Bureau of Statistics: Census and sample", url:"https://www.abs.gov.au/statistics/understanding-statistics/statistical-terms-and-concepts/census-and-sample"}], checked:"2026-11"},

   {id:"validity-types", title:"Validity and reliability in research design", aka:["internal validity","external validity","construct validity","statistical conclusion validity","threats to validity","trustworthiness"], tags:["research","design","quality"],
    summary:"The four kinds of validity a study is judged on, the classic threats to them, and how measures are checked for reliability and validity.",
    levels:{
     starter:[
      "Three questions to ask of any study:",
      {list:[
        "**[[internal-validity|Internal validity]]:** did X really cause the change in Y here, or could something else explain it?",
        "**[[external-validity|External validity]]:** would the result hold for other people, places and times?",
        "**[[construct-validity|Construct validity]]:** did the study measure the ideas it says it measured?"
      ]},
      "[[reliability|Reliability]] asks whether a measure gives consistent results. A measure can be reliable but still wrong.",
      "Example (invented): a study finds that a cooking class improved families’ diets. Internal validity asks whether something else, such as a new market opening, could explain it. External validity asks whether it would work in another town. Construct validity asks whether “diet” was really measured, or only how many vegetables people said they bought.",
      "No study scores perfectly on all of these. Good studies say which they prioritised and what remains uncertain.",
      {key:"Random assignment protects internal validity. Random sampling protects external validity. Careful measurement protects construct validity."}
     ],
     builder:[
      "A fourth kind, **statistical conclusion validity**, asks whether the statistics support the claimed relationship. The four-type scheme comes from Donald Campbell’s work, set out by Shadish, Cook and Campbell (2002), and is used in Bhattacherjee’s Chapter 5.",
      "Classic threats to internal validity: **history** (another event at the same time), **maturation** (natural change), **testing** (effects of earlier tests), **instrumentation** (the measure changes), **regression to the mean**, **selection** (groups differed from the start), **attrition** (uneven drop-out) and unclear time order.",
      "Measures are checked for reliability (test–retest, inter-rater, internal consistency) and for validity evidence (face, content, criterion, convergent and discriminant).",
      "Qualitative research often uses Lincoln and Guba’s (1985) **[[trustworthiness-term|trustworthiness]]** criteria: credibility, transferability, dependability and confirmability ({{trustworthiness}}).",
      {table:[["Protection","Mainly helps with"],["Control or comparison group","History, maturation, testing"],["Random assignment","Selection and unknown confounders"],["Several measurements before a change","Existing trends; regression to the mean"],["Tracking and analysing drop-outs","Attrition"],["Random sampling; diverse settings","External validity"],["Tested, multi-item measures","Construct validity and reliability"]]},
      "When reading a study, check its limitations section against this list. Honest authors name the threats that remain; be cautious when a paper names none.",
      "Keep two uses of “validity” apart: the validity of a **measure** (does this scale capture stress?) and the validity of a **study’s conclusions** (did the programme cause the change?). A valid measure can sit inside a weak design, and a strong design can use a poor measure."
     ],
     pro:[
      "The types trade off. Tight control raises internal validity but can make settings artificial; broad field studies gain external validity but face more confounding. Researchers state priorities and build evidence across several studies with different strengths.",
      "Henrich, Heine and Norenzayan (2010) argued that much behavioural science relies on participants from Western, educated, industrialised, rich and democratic societies, limiting external validity. Multi-site studies and replications in diverse settings respond to this.",
      "Construct validity applies to interventions too: was the programme delivered as designed (fidelity), and did participants receive what researchers think they received?",
      "Modern measurement theory treats validity as an argument built from several kinds of evidence about a particular use of a measure, rather than a fixed property of a test. Cross-cultural use needs translation, back-translation and testing for equivalence.",
      "Statistical conclusion validity is weakened by low [[statistical-power|power]], many unplanned tests, and flexible analysis choices. Preregistration and transparent reporting address these; Unit 9 discusses them as research integrity issues.",
      "[[reporting-guideline|Reporting guidelines]] help readers judge validity. Health research uses checklists such as CONSORT for randomised trials and STROBE for observational studies; the EQUATOR Network collects these and many others for different designs."
     ]
    },
    related:["research-designs","sampling-methods","theory-hypotheses","scientific-method-sociology"],
    read:[{book:"bhatt", where:"Chapter 5, “Research Design”; Chapter 7, “Scale Reliability and Validity”"}],
    sources:[{t:"Encyclopedia.com: Quasi-experimental research designs (validity types and threats)", url:"https://encyclopedia.com/social-sciences/encyclopedias-almanacs-transcripts-and-maps/quasi-experimental-research-designs"},{t:"Bhattacherjee, Social Science Research (revised edition, University of Southern Queensland): Research design", url:"https://usq.pressbooks.pub/socialscienceresearch/?p=65"}], checked:"2026-11"},

   {id:"research-proposal", title:"Writing a research proposal", aka:["research plan","study protocol","thesis proposal","one-page proposal","alignment"], tags:["research","design","writing"],
    summary:"What a research proposal contains, a one-page outline, and how to make the question, design, sample and analysis fit together.",
    levels:{
     starter:[
      "A [[research-proposal-term|research proposal]] explains what you will study, why it matters and how you will do it, before you begin. You might write one to apply for a course, ask a supervisor for approval, request funding or apply for ethics review.",
      "A one-page version covers: background and problem; research question and aim; theory; design; participants and sampling; data collection; analysis; ethics; limitations; timeline and resources; key references.",
      "Think of it as a map you can show others before the journey. It lets a supervisor, funder or ethics committee spot problems while they are still cheap to fix.",
      "Example (invented): Mei’s one-page proposal asks how market traders in her city decided whether to accept mobile payments. Her design is semi-structured interviews with 15 traders chosen for variety in age, goods and market; her ethics section explains consent and how she will protect traders’ identities.",
      {key:"The best proposals are clear and aligned, not the most ambitious."}
     ],
     builder:[
      "**Alignment** (sometimes called the golden thread) means each part follows from the last: the gap motivates the question; the question type fits the design; the design fits the sample; the measures operationalise the concepts; the analysis answers the question with the data collected.",
      "Common weaknesses reviewers point out:",
      {list:[
        "A question too broad for the time and money",
        "A causal claim from a design that can’t support it",
        "Undefined key concepts",
        "No justification for the sample size or method",
        "Ethics treated as an afterthought",
        "No honest account of limitations"
      ]},
      "Templates differ. Thesis proposals usually include a fuller literature review; funders add budgets, impact and team sections; ethics applications focus on participants, consent, data protection and risk. Always use the template you are given.",
      "A simple timeline helps: list the main stages (reading, ethics approval, piloting, data collection, analysis, writing), estimate each, add a buffer, and note which stages must wait for others. A table or a bar chart by month is enough.",
      "Ask someone outside your field to read the one-page version. If they can say back what you will find out and how, your proposal is clear.",
      "Length varies: one page is ideal for a first conversation with a possible supervisor; course and programme applications often ask for a few pages; theses and large grants need much more. The one-page version stays useful as a summary throughout."
     ],
     pro:[
      "Many funders now ask for a data management plan, plans for open access publication and data sharing, and, for health research, public or patient involvement. Clinical trials and many other studies should be registered before recruitment, and some journals offer **registered reports**, in which the introduction and methods are peer reviewed before data collection.",
      "A timeline should show dependencies (ethics approval before recruitment; a pilot before the main data collection) and include buffers, since access and recruitment usually take longer than planned.",
      "Writing the limitations section early is a design tool: listing the threats to internal, external and construct validity often shows a cheap design change that removes one.",
      "For qualitative and mixed methods proposals, explain flexibility explicitly: which decisions are fixed (aims, ethics, broad sample) and which will be made during fieldwork (later participants, refined questions), and how you will document them.",
      "Bhattacherjee’s textbook (2012) treats proposal writing within the research process; since then, open science requirements from funders and journals have become far more common, so check current policies.",
      "Budgets should be honest and specific: participant thank-you payments (where allowed), travel, transcription, translation, equipment, software and open access fees. Under-costing is a common reason funded projects later struggle."
     ]
    },
    related:["research-questions","research-designs","sampling-methods","validity-types","research-ethics"],
    read:[{book:"bhatt", where:"Chapter 3, “The Research Process”"}],
    sources:[{t:"Bhattacherjee, Social Science Research (revised edition, University of Southern Queensland): Research design", url:"https://usq.pressbooks.pub/socialscienceresearch/?p=65"},{t:"OpenStax Introduction to Sociology 3e (LibreTexts mirror): Approaches to Sociological Research", url:"https://socialsci.libretexts.org/Bookshelves/Sociology/Introduction_to_Sociology/Introductory_Sociology_3e_(OpenStax)/02%3A_Sociological_Research/2.02%3A_Approaches_to_Sociological_Research"}], checked:"2026-11"}
  ],
  terms:[
   {id:"research-question", term:"Research question", def:"The specific question a study sets out to answer, written so that evidence could answer it: who, what, where and when.", codex:"research-questions"},
   {id:"finer-criteria", term:"FINER criteria", def:"A checklist for judging a research question: is it Feasible, Interesting, Novel, Ethical and Relevant?", codex:"finer-pico"},
   {id:"pico-framework", term:"PICO", def:"A way to structure a question about an intervention: Population, Intervention, Comparison, Outcome. Variants include PICOT, PECO, SPIDER and PCC.", codex:"finer-pico"},
   {id:"theory-research", term:"Theory (in research)", def:"A set of connected ideas that explains how and why something happens, and under what conditions, which research can test or build.", codex:"theory-hypotheses"},
   {id:"concept-research", term:"Concept (in research)", def:"An abstract idea a study is about, such as trust, workload or food security, which must be defined before it can be measured. Concepts created for a theory are often called constructs.", codex:"theory-hypotheses"},
   {id:"conceptualisation", term:"Conceptualisation", def:"Stating precisely what you mean by a concept, including its dimensions, before deciding how to measure it.", codex:"theory-hypotheses"},
   {id:"levels-of-measurement", term:"Levels of measurement", def:"How much information a variable’s values carry: nominal (categories), ordinal (ordered), interval (equal steps) or ratio (equal steps and a true zero).", codex:"theory-hypotheses"},
   {id:"unit-of-analysis", term:"Unit of analysis", def:"The “who” or “what” a study draws conclusions about: people, households, schools, countries, documents and so on.", codex:"theory-hypotheses"},
   {id:"ecological-fallacy", term:"Ecological fallacy", def:"Wrongly concluding something about individuals from data about groups, such as regions or countries.", codex:"theory-hypotheses"},
   {id:"research-design-term", term:"Research design", def:"The overall plan linking a research question to evidence: what data, from whom, when, how often, and whether anything is changed on purpose.", codex:"research-designs"},
   {id:"quantitative-research", term:"Quantitative research", def:"Research that collects and analyses numerical data to measure, compare and test relationships, usually across many cases.", codex:"research-designs"},
   {id:"qualitative-research", term:"Qualitative research", def:"Research that collects and analyses words, observations and images to understand meanings, experiences and processes in depth.", codex:"research-designs"},
   {id:"mixed-methods-term", term:"Mixed methods research", def:"Research that collects both quantitative and qualitative data and deliberately integrates them to answer a question.", codex:"mixed-methods"},
   {id:"experiment-design", term:"Experimental design", def:"A design in which the researcher introduces a change for some participants, ideally assigned at random, and compares outcomes with a group that didn’t get it.", codex:"research-designs"},
   {id:"random-assignment", term:"Random assignment", def:"Using chance to decide which group each participant joins in an experiment, so the groups are alike on average in everything except the intervention.", codex:"research-designs"},
   {id:"control-group", term:"Control group", def:"The group in an experiment that doesn’t receive the intervention (or receives usual care), used for comparison.", codex:"research-designs"},
   {id:"quasi-experiment", term:"Quasi-experiment", def:"A study that compares groups or time periods to test the effect of a change, but without random assignment.", codex:"research-designs"},
   {id:"natural-experiment", term:"Natural experiment", def:"A study in which an event, rule or accident, not the researcher, creates comparable groups that differ in exposure to something.", codex:"research-designs"},
   {id:"cross-sectional", term:"Cross-sectional study", def:"A study that measures many cases once, at a single point in time: a snapshot.", codex:"research-designs"},
   {id:"longitudinal", term:"Longitudinal study", def:"A study that collects data at several points in time, often from the same people, to see change and which things came first.", codex:"research-designs"},
   {id:"panel-study", term:"Panel study", def:"A longitudinal study that measures the same people or households repeatedly.", codex:"research-designs"},
   {id:"cohort-study", term:"Cohort study", def:"A study that follows a group sharing a starting point, such as a birth year or an exposure, over time.", codex:"research-designs"},
   {id:"case-control-study", term:"Case-control study", def:"A study that compares people with an outcome (cases) and people without it (controls), looking back at earlier exposures.", codex:"research-designs"},
   {id:"probability-sampling", term:"Probability sampling", def:"Choosing a sample by a random process in which every member of the sampling frame has a known, non-zero chance of selection.", codex:"sampling-methods"},
   {id:"non-probability-sampling", term:"Non-probability sampling", def:"Choosing a sample without a random process, for example by convenience, judgement, quotas or referrals.", codex:"sampling-methods"},
   {id:"simple-random-sampling", term:"Simple random sampling", def:"A probability method in which every member of the list has the same chance of selection, for example using random numbers.", codex:"sampling-methods"},
   {id:"systematic-sampling", term:"Systematic sampling", def:"Choosing every kth member of a list after a random start, where k is the list size divided by the sample size.", codex:"sampling-methods"},
   {id:"stratified-sampling", term:"Stratified sampling", def:"Dividing a population into groups (strata), such as regions, and sampling randomly within each.", codex:"sampling-methods"},
   {id:"cluster-sampling", term:"Cluster sampling", def:"Randomly choosing whole groups, such as villages or schools, and studying everyone (or a sample) within them.", codex:"sampling-methods"},
   {id:"convenience-sample", term:"Convenience sample", def:"A sample of whoever is easiest to reach. Quick and cheap, but it can’t represent a population.", codex:"sampling-methods"},
   {id:"quota-sampling", term:"Quota sampling", def:"Filling set numbers of people in each group (for example by age and gender) without choosing them randomly within the groups.", codex:"sampling-methods"},
   {id:"purposive-sampling", term:"Purposive sampling", def:"Deliberately choosing people or cases for what they can reveal, such as typical, unusual or varied cases. Common in qualitative research.", codex:"sampling-methods"},
   {id:"snowball-sampling", term:"Snowball sampling", def:"Asking participants to refer others like them, useful for reaching hidden or hard-to-reach groups.", codex:"sampling-methods"},
   {id:"internal-validity", term:"Internal validity", def:"How confidently a study can say that the presumed cause, and not something else, produced the effect it observed.", codex:"validity-types"},
   {id:"external-validity", term:"External validity", def:"How far a study’s results hold for other people, places, settings and times.", codex:"validity-types"},
   {id:"construct-validity", term:"Construct validity", def:"How well a study’s measures and interventions capture the concepts they are meant to represent.", codex:"validity-types"},
   {id:"research-proposal-term", term:"Research proposal", def:"A document set out before a study begins that explains its question, why it matters, and how it will be done.", codex:"research-proposal"}
  ],
  bank:[
   /* Lesson 1 */
   {id:"t4u6-q01", lesson:"t4u6-l1", level:1, q:"Which of these is a research question rather than a topic?", options:[
     {t:"How do first-time voters in one city decide which candidate to support?", ok:true, why:"It names who, where and what will be found out, so evidence could answer it."},
     {t:"Elections and young people", why:"An area of interest with no specific question."},
     {t:"Voting", why:"Far too broad: no group, place, period or question."},
     {t:"Politics in my country", why:"A broad topic; it doesn’t say what will be found out."}]},
   {id:"t4u6-q02", lesson:"t4u6-l1", level:2, q:"“Does a free school breakfast improve pupils’ concentration in the morning?” What type of question is this?", options:[
     {t:"Causal", ok:true, why:"“Improve” claims that one thing changes another, so it’s a causal question."},
     {t:"Descriptive", why:"A descriptive question asks how much or how often, not whether one thing changes another."},
     {t:"Exploratory", why:"Exploratory questions ask how people experience or make sense of something; this one asks about an effect."},
     {t:"Relational", why:"A relational question asks whether two things go together, without claiming cause. “Improve” makes this causal."}]},
   {id:"t4u6-q03", lesson:"t4u6-l1", level:1, q:"In FINER, what does the N stand for, and what does it include?", options:[
     {t:"Novel: it confirms, refutes or extends what is known, so a careful replication can count", ok:true, why:"Right. Novel doesn’t mean never studied; adding new evidence about a known finding counts."},
     {t:"Necessary: the study must be required by law", why:"N stands for novel, not necessary."},
     {t:"Neutral: the researcher must have no opinion", why:"N stands for novel. Neutrality is a separate issue."},
     {t:"Numerical: the study must use numbers", why:"FINER applies to qualitative studies too; N stands for novel."}]},
   {id:"t4u6-q04", lesson:"t4u6-l1", level:2, q:"A review asks: “In adults living near busy roads, is long-term traffic noise, compared with living in quiet areas, associated with high blood pressure?” Which framework fits best?", options:[
     {t:"PECO", ok:true, why:"Traffic noise is an exposure people aren’t assigned to, so Population, Exposure, Comparator, Outcome fits."},
     {t:"PICO", why:"PICO suits interventions someone deliberately provides. Noise is an exposure, which is what PECO was designed for."},
     {t:"SPIDER", why:"SPIDER is for finding qualitative and mixed methods studies about experiences."},
     {t:"PCC", why:"PCC is for scoping reviews that map a field; this question asks about an exposure–outcome link."}]},
   {id:"t4u6-q05", lesson:"t4u6-l1", level:1, q:"Which source does Oxford’s Centre for Evidence-Based Medicine credit as the first use of PICO to build a clinical question?", options:[
     {t:"A 1995 article by W. Scott Richardson and colleagues in ACP Journal Club", ok:true, why:"Yes: “The well-built clinical question: a key to evidence-based decisions”."},
     {t:"The JBI manual for scoping reviews", why:"JBI recommends PCC for scoping reviews; PICO came earlier."},
     {t:"A 2012 article in Qualitative Health Research", why:"That 2012 article proposed SPIDER as an alternative to PICO."},
     {t:"A 2018 article in Environment International", why:"That article set out PECO for exposure questions."}]},
   {id:"t4u6-q06", lesson:"t4u6-l1", level:3, q:"Priya, a nurse, drafts: “Should hospitals use more volunteers?” Which revision makes it a researchable question?", options:[
     {t:"“How do patients and staff on two wards describe the effect of volunteer visitors on patients’ days?”", ok:true, why:"It replaces a value question with one evidence can answer, and names who and where."},
     {t:"“Should all hospitals in the world use more volunteers?”", why:"Still a value question, and even broader."},
     {t:"“Are volunteers good?”", why:"Still a value judgement with no group, setting or measurable focus."},
     {t:"“Why are volunteers the best way to help patients?”", why:"It assumes the answer (that volunteers are best) instead of finding out."}]},
   {id:"t4u6-q07", lesson:"t4u6-l1", level:3, q:"Tomás wants to know whether a new fertiliser increases maize yields. His plan is to ask farmers once whether they use it and how good their harvest was. What is the main mismatch?", options:[
     {t:"A causal question with a one-off survey that can show only an association", ok:true, why:"Farmers who choose the fertiliser may differ in many ways (land, money, skill). A trial or careful comparison over time is needed for a causal claim."},
     {t:"Maize yields can’t be measured", why:"Yields can be measured in weight per area. The problem is the design."},
     {t:"The question is too narrow to be interesting", why:"A focused question about one crop and one input is a strength."},
     {t:"Farmers shouldn’t be asked questions", why:"Asking farmers is fine with consent; the issue is what one survey can show."}]},
   {id:"t4u6-q08", lesson:"t4u6-l1", level:2, q:"Which is the best example of an **objective** (rather than an aim or a question)?", options:[
     {t:"Interview 15 market traders about how they set prices", ok:true, why:"An objective is a concrete step that helps achieve the aim."},
     {t:"To understand how market traders set prices", why:"That is an aim: the overall purpose."},
     {t:"How do market traders set prices?", why:"That is a research question."},
     {t:"Markets in West Africa", why:"That is a topic."}]},
   {id:"t4u6-q09", lesson:"t4u6-l1", level:3, q:"Kenji’s question is: “Does tourism damage island cultures and economies?” A supervisor says it fails the F in FINER. What is the best fix?", options:[
     {t:"Narrow it to one aspect, place and period, such as rental prices in two towns on one island since 2015", ok:true, why:"Narrowing who, what, where and when makes it feasible for one researcher."},
     {t:"Add more islands so the results are more general", why:"That makes it even less feasible."},
     {t:"Remove the word “Does” so it’s a statement", why:"A statement isn’t a question, and the scope is still huge."},
     {t:"Keep it, but promise to work harder", why:"Feasibility is about scope and resources, not effort."}]},
   /* Lesson 2 */
   {id:"t4u6-q10", lesson:"t4u6-l2", level:1, q:"What is operationalisation?", options:[
     {t:"Deciding exactly how a concept will be observed or measured", ok:true, why:"It turns an abstract concept into concrete indicators."},
     {t:"Deciding which theory to use", why:"Choosing a theory comes earlier; operationalisation is about measurement."},
     {t:"Running the statistical analysis", why:"Analysis happens after data are collected."},
     {t:"Getting ethics approval", why:"Important, but a different step."}]},
   {id:"t4u6-q11", lesson:"t4u6-l2", level:2, q:"Mei records each participant’s highest education level as “none / primary / secondary / university”. What level of measurement is this?", options:[
     {t:"Ordinal", ok:true, why:"The categories have a clear order, but the gaps between them aren’t equal units."},
     {t:"Nominal", why:"Nominal categories have no order; education levels do."},
     {t:"Interval", why:"Interval data have equal steps between values; these categories don’t."},
     {t:"Ratio", why:"Ratio data have equal steps and a true zero, like years of schooling counted in numbers."}]},
   {id:"t4u6-q12", lesson:"t4u6-l2", level:1, q:"What is a unit of analysis?", options:[
     {t:"The who or what a study draws its conclusions about", ok:true, why:"For example people, households, schools or countries."},
     {t:"The unit a variable is measured in, such as kilograms", why:"That’s a unit of measurement, not of analysis."},
     {t:"The chapter of a thesis that contains the analysis", why:"Not a research design term."},
     {t:"The software used to analyse data", why:"Software is a tool; the unit of analysis is what conclusions are about."}]},
   {id:"t4u6-q13", lesson:"t4u6-l2", level:3, q:"Regions with more doctors per person have higher recorded rates of cancer. Ana concludes that seeing a doctor gives people cancer. What is the best explanation for the pattern?", options:[
     {t:"More doctors find and record more cancers, and older populations need more doctors and have more cancer, so the link more likely reflects confounding and detection than cause", ok:true, why:"Detection and population age can link the two. Region-level data also can’t show anything about individual patients."},
     {t:"Doctors spread cancer between patients", why:"There’s no evidence for this; the pattern has obvious alternative explanations."},
     {t:"The correlation proves cause because it’s based on whole regions", why:"Group-level correlations are especially risky for conclusions about individuals."},
     {t:"Cancer causes doctors to move to a region, so the study is fine", why:"Reverse causation may play a small part, but it doesn’t support Ana’s claim."}]},
   {id:"t4u6-q14", lesson:"t4u6-l2", level:2, q:"Which hypothesis is best written?", options:[
     {t:"Among delivery riders in one city, those working more than 50 hours a week report more road near-misses than those working fewer hours.", ok:true, why:"It names the population, two measurable variables and the expected direction, and data could show it’s wrong."},
     {t:"Work affects safety.", why:"No population, no direction, and “work” isn’t defined."},
     {t:"Some riders might have accidents.", why:"So vague nothing could contradict it."},
     {t:"Delivery work is dangerous because it is unsafe.", why:"Circular: it explains danger with danger."}]},
   {id:"t4u6-q15", lesson:"t4u6-l2", level:3, q:"Oluwaseun finds that pupils with more books at home get better grades. A colleague says household income may explain both. In this situation, income is a…", options:[
     {t:"Confounding variable", ok:true, why:"It may influence both the presumed cause (books) and the effect (grades), creating a misleading link."},
     {t:"Dependent variable", why:"Grades are the dependent variable here."},
     {t:"Mediator", why:"A mediator lies on the path from cause to effect; income is suggested as a cause of both."},
     {t:"Unit of analysis", why:"The unit of analysis is the pupil."}]},
   {id:"t4u6-q16", lesson:"t4u6-l2", level:2, q:"A mentoring scheme raises attendance mainly by making students feel they belong at school. Here, “sense of belonging” is a…", options:[
     {t:"Mediator", ok:true, why:"It is the route through which mentoring affects attendance."},
     {t:"Moderator", why:"A moderator changes how strong an effect is for different groups; belonging is the pathway itself."},
     {t:"Confounder", why:"A confounder causes both variables independently; here belonging is caused by mentoring."},
     {t:"Control group", why:"A control group is a set of participants, not a variable."}]},
   {id:"t4u6-q17", lesson:"t4u6-l2", level:1, q:"Which statement about theory-building and theory-testing research is correct?", options:[
     {t:"Theory-testing research is usually deductive; theory-building research is usually inductive, and many projects do both", ok:true, why:"Testing starts from theory and checks predictions; building starts from data and develops explanations."},
     {t:"Only theory-testing research counts as real research", why:"Theory-building research, often qualitative, is equally legitimate."},
     {t:"Theory-building research always uses experiments", why:"It usually uses qualitative data such as interviews and observation."},
     {t:"Theory is only needed in the natural sciences", why:"Every field uses theory to explain why things happen."}]},
   {id:"t4u6-q18", lesson:"t4u6-l2", level:3, q:"Hana defines “digital skills” only as being able to search for information, then reports that “older adults lack digital skills”. What is the main weakness?", options:[
     {t:"Her measure covers one dimension, but her claim is about the whole concept", ok:true, why:"Digital skills also include communicating, staying safe and creating; she should limit her claim or measure more dimensions."},
     {t:"Older adults can’t be studied", why:"They can, with appropriate consent and methods."},
     {t:"Searching for information isn’t a digital skill", why:"It is one; the issue is that it’s only one."},
     {t:"She should have used no definition at all", why:"Without a definition there’s nothing to measure."}]},
   /* Lesson 3 */
   {id:"t4u6-q19", lesson:"t4u6-l3", level:1, q:"What makes a true experiment different from a quasi-experiment?", options:[
     {t:"Participants are assigned to groups by chance", ok:true, why:"Random assignment is the defining feature; without it the design is quasi-experimental."},
     {t:"It takes place in a laboratory", why:"True experiments can happen in the field; the setting isn’t what defines them."},
     {t:"It has a larger sample", why:"Sample size doesn’t make a design experimental."},
     {t:"It measures outcomes with numbers", why:"Both designs usually measure numerically."}]},
   {id:"t4u6-q20", lesson:"t4u6-l3", level:2, q:"A country changes its minimum driving age. Researchers compare crash rates of drivers born just before and just after the cut-off date. What kind of design is this?", options:[
     {t:"A quasi-experiment using a cut-off (a natural experiment)", ok:true, why:"A rule, not the researcher, created comparable groups on either side of the cut-off."},
     {t:"A randomised controlled trial", why:"Nobody was randomly assigned by the researchers."},
     {t:"An ethnography", why:"Ethnography means long-term immersion in a community; this compares crash statistics."},
     {t:"A case-control study", why:"Case-control studies start from people with and without an outcome; this starts from birth dates."}]},
   {id:"t4u6-q21", lesson:"t4u6-l3", level:1, q:"Which design measures the same people repeatedly over time?", options:[
     {t:"Panel study", ok:true, why:"A panel re-measures the same individuals or households."},
     {t:"Cross-sectional study", why:"That measures many cases once."},
     {t:"Repeated cross-sectional study", why:"That measures new samples each time."},
     {t:"Case-control study", why:"That compares people with and without an outcome, usually looking back."}]},
   {id:"t4u6-q22", lesson:"t4u6-l3", level:2, q:"A researcher surveys a district’s farmers once, finds which crops they grow, then interviews eight farmers whose choices were most unusual to understand why. Which mixed methods design is this?", options:[
     {t:"Explanatory sequential", ok:true, why:"The quantitative survey comes first; the qualitative interviews then explain particular results."},
     {t:"Exploratory sequential", why:"That starts with qualitative work and uses it to build a quantitative phase."},
     {t:"Convergent", why:"Convergent designs collect both strands in the same phase; here one follows from the other."},
     {t:"Cross-sectional only", why:"There is a cross-sectional survey, but the planned qualitative follow-up makes it mixed methods."}]},
   {id:"t4u6-q23", lesson:"t4u6-l3", level:3, q:"Fatima wants to know whether long night shifts lead to weight gain among factory workers over several years. Which design fits best, given that shifts can’t ethically be assigned?", options:[
     {t:"A longitudinal panel following night and day workers, measuring weight and other factors each year", ok:true, why:"It shows time order and can track change in the same people, while measuring confounders such as age and diet."},
     {t:"A single cross-sectional survey", why:"It can’t show whether weight gain followed the shifts or came first."},
     {t:"A randomised experiment assigning people to night shifts for years", why:"Assigning harmful work patterns for years wouldn’t be ethical."},
     {t:"Eight interviews with one worker’s family", why:"Useful for experiences, but it can’t estimate changes in weight across workers."}]},
   {id:"t4u6-q24", lesson:"t4u6-l3", level:2, q:"What is the main strength of a case study?", options:[
     {t:"Explaining how and why something happened, in depth and in context", ok:true, why:"Case studies reveal mechanisms and meanings using several sources."},
     {t:"Estimating how common something is in a population", why:"That needs a representative sample; case studies aren’t designed for it."},
     {t:"Proving cause through random assignment", why:"Case studies don’t randomly assign anything."},
     {t:"Being quick and cheap to run with thousands of cases", why:"Case studies are usually detailed studies of one or a few cases."}]},
   {id:"t4u6-q25", lesson:"t4u6-l3", level:3, q:"Dmitri runs a cohort study of 2,000 people for ten years. By the end, 40% have dropped out, mostly those in poorer health. Which problem should worry him most?", options:[
     {t:"Attrition bias: the people who stayed are healthier than those who left", ok:true, why:"Uneven drop-out can make the remaining group unrepresentative and distort results."},
     {t:"The Hawthorne effect", why:"Possible, but the scenario points to uneven drop-out."},
     {t:"The ecological fallacy", why:"He studies individuals, not groups, so that isn’t the issue."},
     {t:"Too large a sample", why:"Large samples aren’t a problem; losing a particular kind of participant is."}]},
   {id:"t4u6-q26", lesson:"t4u6-l3", level:2, q:"What does “integration” mean in mixed methods research?", options:[
     {t:"Deliberately combining the quantitative and qualitative strands to reach conclusions neither gives alone", ok:true, why:"It is what distinguishes mixed methods from simply collecting two kinds of data."},
     {t:"Using the same software for both kinds of data", why:"Software choices don’t create integration."},
     {t:"Converting all interview data into numbers", why:"That is one possible technique, but integration is broader."},
     {t:"Collecting data from both men and women", why:"That concerns the sample, not the mixing of methods."}]},
   {id:"t4u6-q27", lesson:"t4u6-l3", level:1, q:"What can a cross-sectional study usually **not** establish?", options:[
     {t:"Which of two related variables came first", ok:true, why:"Both are measured at the same time, so time order is unclear."},
     {t:"How common something is", why:"Cross-sectional studies are good at describing prevalence."},
     {t:"Whether two variables are associated", why:"They can show associations."},
     {t:"Differences between groups at one time", why:"They can compare groups measured at the same time."}]},
   /* Lesson 4 */
   {id:"t4u6-q28", lesson:"t4u6-l4", level:1, q:"What is a sampling frame?", options:[
     {t:"The actual list or source from which a sample is drawn", ok:true, why:"For example a register of businesses or a list of schools."},
     {t:"The final group of people who took part", why:"That is the sample."},
     {t:"The time period of the study", why:"Not a sampling term."},
     {t:"The theory behind the study", why:"That is the theoretical framework."}]},
   {id:"t4u6-q29", lesson:"t4u6-l4", level:2, q:"Lucía randomly chooses 20 schools from a national list and surveys every teacher in them. What kind of sample is this?", options:[
     {t:"Cluster sample", ok:true, why:"Whole groups (schools) are chosen at random and everyone in them is included."},
     {t:"Stratified sample", why:"Stratified sampling picks people within every group; here only some groups are chosen."},
     {t:"Snowball sample", why:"Snowball samples grow through referrals, not random selection."},
     {t:"Quota sample", why:"Quotas fill set numbers without random selection."}]},
   {id:"t4u6-q30", lesson:"t4u6-l4", level:2, q:"Roughly what happens to the margin of error of a simple random sample when the sample size is multiplied by four?", options:[
     {t:"It is roughly halved", ok:true, why:"The margin falls with the square root of the sample size: √4 = 2."},
     {t:"It falls to a quarter", why:"Precision grows with the square root of n, not with n itself."},
     {t:"It doubles", why:"More people means more precision, so the margin shrinks."},
     {t:"It doesn’t change", why:"Larger random samples do give smaller margins."}]},
   {id:"t4u6-q31", lesson:"t4u6-l4", level:1, q:"Which statement about random sampling and random assignment is correct?", options:[
     {t:"Random sampling supports generalising to a population; random assignment supports causal claims", ok:true, why:"They solve different problems: who is in the study versus which group they join."},
     {t:"They are two names for the same thing", why:"A study can have one without the other."},
     {t:"Random assignment makes a sample represent the population", why:"That is the job of random sampling."},
     {t:"Surveys need random assignment", why:"Surveys usually need random sampling; assignment belongs to experiments."}]},
   {id:"t4u6-q32", lesson:"t4u6-l4", level:3, q:"Sione wants to interview people who sell goods informally at a border crossing; there is no list of them. Which approach is most suitable?", options:[
     {t:"Snowball or purposive sampling, starting with a few trusted contacts and seeking varied participants", ok:true, why:"Without a list, probability sampling isn’t possible, and the aim is understanding, which suits purposive approaches."},
     {t:"Simple random sampling from the official traders’ register", why:"Informal traders aren’t on the register, so they’d be missed entirely."},
     {t:"A national random telephone survey", why:"It would reach very few of this specific group."},
     {t:"Stratified sampling by tax band", why:"Informal traders aren’t recorded in tax bands."}]},
   {id:"t4u6-q33", lesson:"t4u6-l4", level:3, q:"A website poll gets 80,000 votes on a local transport plan. A random sample of 1,000 residents gives a different answer. Which should you trust more for what residents think, and why?", options:[
     {t:"The random sample, because self-selected votes can be biased however many there are", ok:true, why:"Size reduces random error but not selection bias; random selection is what makes a sample representative."},
     {t:"The website poll, because 80,000 is far larger", why:"A biased sample stays biased however large it is."},
     {t:"Neither, because polls can never be useful", why:"Well-designed random samples are very useful."},
     {t:"Both equally, because they used the same question", why:"The way people were chosen differs, and that matters most."}]},
   {id:"t4u6-q34", lesson:"t4u6-l4", level:2, q:"Why might a researcher deliberately oversample a small group in a stratified sample?", options:[
     {t:"To have enough people from that group to analyse it, then weight results so the overall figures still represent the population", ok:true, why:"Oversampling plus weighting gives precise subgroup results without distorting totals."},
     {t:"To make the overall results favour that group", why:"Weighting corrects for oversampling, so totals aren’t distorted."},
     {t:"Because small groups are easier to reach", why:"They are often harder to reach; that is part of why oversampling is needed."},
     {t:"To avoid needing a sampling frame", why:"Stratified sampling still needs a frame with group information."}]},
   {id:"t4u6-q35", lesson:"t4u6-l4", level:1, q:"How do qualitative researchers usually justify how many people to interview?", options:[
     {t:"By their aims and the richness of the data, often stopping when new interviews stop adding new insights, and reporting how they decided", ok:true, why:"Qualitative sample size is about depth and variation, not statistical formulas."},
     {t:"By using a margin-of-error formula", why:"Margins of error apply to probability samples and numerical estimates."},
     {t:"Always exactly 30 people", why:"No fixed number fits every study."},
     {t:"As many as possible, regardless of time", why:"More isn’t always better; depth of analysis matters."}]},
   {id:"t4u6-q36", lesson:"t4u6-l4", level:3, q:"Amara plans a trial expecting only a small effect of a new app on sleep. A colleague warns her sample of 40 may be too small. What is the colleague’s concern?", options:[
     {t:"Low statistical power: with a small effect, 40 people give a poor chance of detecting it even if it’s real", ok:true, why:"Small effects need larger samples; a power calculation would show roughly how many."},
     {t:"40 people can’t give informed consent", why:"Consent doesn’t depend on sample size."},
     {t:"Small samples always produce biased results", why:"Small samples are imprecise, not necessarily biased."},
     {t:"Trials must have at least 1,000 participants", why:"There is no fixed minimum; it depends on the effect size and variability."}]},
   /* Lesson 5 */
   {id:"t4u6-q37", lesson:"t4u6-l5", level:1, q:"Internal validity is about…", options:[
     {t:"Whether the presumed cause, not something else, produced the observed effect", ok:true, why:"It concerns ruling out alternative explanations within the study."},
     {t:"Whether results apply to other places", why:"That is external validity."},
     {t:"Whether the measures capture the intended concepts", why:"That is construct validity."},
     {t:"Whether the report is well written", why:"Writing quality isn’t a type of validity."}]},
   {id:"t4u6-q38", lesson:"t4u6-l5", level:2, q:"A study of a new reading app compares pupils before and after one school year, with no comparison group. Scores rise. Which threat is most obvious?", options:[
     {t:"Maturation: pupils’ reading improves over a year anyway", ok:true, why:"Without a comparison group, normal growth can’t be separated from the app’s effect."},
     {t:"Ecological fallacy", why:"The data are about individual pupils; the issue is natural change over time."},
     {t:"Coverage error", why:"That concerns who is missing from a sampling frame."},
     {t:"Inter-rater disagreement", why:"Nothing suggests raters disagreed."}]},
   {id:"t4u6-q39", lesson:"t4u6-l5", level:2, q:"Pupils chosen for extra support because they scored lowest on a test score higher on the next test, even before the support starts. What best explains this?", options:[
     {t:"Regression to the mean: unusually extreme scores tend to move back towards average", ok:true, why:"Some of the lowest scores were partly bad luck on the day, so they tend to rise on retesting."},
     {t:"The support worked before it began", why:"The rise happened before any support, so it can’t be the cause."},
     {t:"History", why:"No outside event is mentioned; the pattern comes from selecting extreme scores."},
     {t:"Attrition", why:"Nobody dropped out in this scenario."}]},
   {id:"t4u6-q40", lesson:"t4u6-l5", level:1, q:"Which check tests whether two observers agree when coding the same material?", options:[
     {t:"Inter-rater reliability", ok:true, why:"It measures agreement between different coders or raters."},
     {t:"Test–retest reliability", why:"That checks consistency over time for the same people."},
     {t:"External validity", why:"That concerns generalising to other people and places."},
     {t:"Criterion validity", why:"That compares a measure with an established standard or later outcome."}]},
   {id:"t4u6-q41", lesson:"t4u6-l5", level:3, q:"A happiness scale developed in one country is translated word for word and used in another. What should researchers do before trusting the results?", options:[
     {t:"Check translation (for example with back-translation) and test whether the items work the same way with local participants", ok:true, why:"A scale valid in one culture and language may not measure the same concept elsewhere."},
     {t:"Nothing: a validated scale is valid everywhere", why:"Validity is about a particular use with particular people; it doesn’t transfer automatically."},
     {t:"Double the sample size", why:"More people won’t fix a measure that captures the wrong thing."},
     {t:"Drop all questions about feelings", why:"That would remove what the scale is meant to measure."}]},
   {id:"t4u6-q42", lesson:"t4u6-l5", level:2, q:"What does “alignment” mean in a research proposal?", options:[
     {t:"The question, design, sample, measures and analysis all fit together and serve the question", ok:true, why:"Each part should follow from the last; mismatches are a common reason proposals are rejected."},
     {t:"All headings are lined up on the page", why:"It’s about logic, not layout."},
     {t:"The study agrees with the supervisor’s opinion", why:"Alignment is internal consistency, not agreement with anyone’s views."},
     {t:"The proposal uses the same citation style throughout", why:"Consistent citation is good, but that isn’t alignment."}]},
   {id:"t4u6-q43", lesson:"t4u6-l5", level:3, q:"A memory study run entirely with first-year psychology students in one country finds a strong effect. What is the most reasonable reading?", options:[
     {t:"The effect may be real for that group, but external validity is uncertain until it is tested with other people and settings", ok:true, why:"A narrow sample limits how far results can be generalised, whatever the internal validity."},
     {t:"The effect applies to all humans, because memory is universal", why:"That assumes generalisation instead of testing it."},
     {t:"The study is worthless", why:"It can be valid for its sample; its reach is the open question."},
     {t:"The effect must be due to selection bias", why:"Nothing suggests the groups compared inside the study differed, so there’s no reason to dismiss the effect. The open question is how far it generalises beyond students like these."}]},
   {id:"t4u6-q44", lesson:"t4u6-l5", level:3, q:"Tomás’s proposal asks whether a community radio programme changed farmers’ planting decisions. He plans to interview 12 farmers who listened, once. A reviewer says the design doesn’t support his question. What is the best revision?", options:[
     {t:"Either reword the question to explore how listeners describe the programme’s influence, or add a comparison of listeners and non-listeners before and after", ok:true, why:"Both fix the mismatch: one changes the question to fit the design, the other changes the design to fit a causal question."},
     {t:"Interview 24 farmers instead of 12", why:"More interviews with listeners only still can’t show what would have happened without the programme."},
     {t:"Remove the ethics section to save space", why:"Ethics is essential and unrelated to the mismatch."},
     {t:"Add a hypothesis to the interviews", why:"A hypothesis doesn’t give the design a comparison."}]},
   {id:"t4u6-q45", lesson:"t4u6-l5", level:1, q:"Which set of criteria is widely used to judge the trustworthiness of qualitative research?", options:[
     {t:"Credibility, transferability, dependability and confirmability (Lincoln and Guba)", ok:true, why:"These parallel internal validity, external validity, reliability and objectivity."},
     {t:"Feasible, interesting, novel, ethical and relevant", why:"That is FINER, for judging research questions."},
     {t:"Population, intervention, comparison and outcome", why:"That is PICO, for structuring questions."},
     {t:"Nominal, ordinal, interval and ratio", why:"Those are levels of measurement."}]}
  ]
});
