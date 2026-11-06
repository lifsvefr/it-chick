/* Academic Language · Academic English Unit 3 (e1u3) · Writing academic texts */
ICA.addUnit({
  id:"e1u3", track:"e1", n:3, title:"Writing academic texts", icon:"📝",
  blurb:"The language of whole academic texts: the shapes of common essay types, building an argument with concession and rebuttal, bringing sources into your own sentences, writing introductions, abstracts and emails in clear moves, and editing your work, including using grammar checkers and AI tools honestly.",
  goals:[
    "Recognise argumentative, compare–contrast, cause–effect and problem–solution essays from the task, and plan each one’s shape with the right signal language",
    "Build a paragraph from claim, evidence and reasoning, and answer a counterargument using correct concession grammar",
    "Bring sources into your sentences with integral and non-integral citations, reporting verbs in the right grammatical pattern, and suitable tenses",
    "Write an introduction and an abstract in recognisable moves, and write a clear, polite email to a lecturer or supervisor",
    "Edit and proofread with a checklist and a personal error list, and use grammar checkers and AI tools in ways your institution allows, keeping your own voice"
  ],
  read:[
    {book:"owg", where:"Section 11.3 “Glance at Genre: Reasoning Strategies and Signal Words” and Section 11.5 “Writing Process: Reasoning Supported by Evidence”", note:"Cause and effect, comparison and contrast, problem and solution, with model paragraphs and signal words. Written for US college students; the lessons add the language focus."},
    {book:"owg", where:"Section 12.5 “Writing Process: Integrating Research” and Section 12.6 “Editing Focus: Integrating Sources and Quotations”", note:"Counterarguments, signal phrases and fitting quotations into your sentences."},
    {book:"phrasebank", where:"“Introducing work”, “Referring to sources”, “Being cautious”, “Comparing and contrasting”, “Explaining causality” and “Signalling transition”", note:"Free phrase lists, sorted by what you are doing in your text. Use them as a menu of patterns, not as text to copy."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e1u3-l1", title:"Essay types and their shapes", minutes:50,
   hook:{q:"In most essays written in English for universities, where do markers expect to find your main claim?", options:["Only in the last paragraph, after all the evidence","In the introduction, usually in a thesis statement","Nowhere: good readers should work it out","In the title only"], answer:1, reveal:"**In the introduction.** Most English-medium university essays state the main claim early, in a [[thesis-statement|thesis statement]], and then spend the essay supporting it. Some writing traditions build slowly towards the point instead; that isn’t wrong, it is a different convention. But in an English academic essay, a marker who can’t find your claim on the first page may decide you don’t have one. This lesson shows the usual shapes of four common essay types, and the language that holds each one together."},
   goals:[
     "Read an essay question and decide which essay type it asks for",
     "Plan the shape of an argumentative, compare–contrast, cause–effect or problem–solution essay",
     "Use comparison and contrast signals such as “whereas”, “similarly” and “in contrast” with correct grammar",
     "Use cause and effect language such as “because of”, “lead to” and “result from” in the right direction",
     "Describe a problem and evaluate solutions with cautious, conditional language"
   ],
   learn:[
    {h:"The question tells you the shape", body:[
      {lead:"Think of a recipe. “Bake”, “boil” and “fry” use the same kitchen, but each word tells you which steps come next. Essay questions work the same way."},
      "An **essay** at university is a piece of continuous writing that answers a question with a clear position, supported by evidence. Different questions ask for different kinds of thinking, so essays have a few common shapes. Each shape has a name, a usual order of paragraphs and some typical phrases. Knowing the shapes saves you planning time, and it helps your reader, because they recognise the pattern.",
      "The key is the **task word** (also called the instruction word or directive): the verb or phrase in the question that says what to do. Here are common ones and the shape they usually call for.",
      {table:[["The question says…","It usually asks for…"],["“To what extent…?”, “Do you agree…?”, “Evaluate…”","An argumentative essay: take a position and defend it"],["“Compare…”, “Contrast…”, “What are the similarities and differences…?”","A compare–contrast essay"],["“Explain the causes of…”, “What are the effects of…?”, “Why did…?”","A cause–effect essay"],["“How can … be solved?”, “Propose…”, “Suggest ways to…”","A problem–solution essay"],["“Discuss…”","Often an argument: weigh the views and reach a judgement. Check your course guidance."]]},
      "The table says “usually” for a reason. Lecturers and fields use task words differently, and many questions combine two shapes. “Compare two policies and decide which is more effective” is a compare–contrast essay that ends in an argument. When you are unsure, read the course handbook or marking criteria, or ask your lecturer. That is a normal question, not a sign of weakness.",
      {tip:"Underline the task word, circle the topic words, and put a box around any limits (a place, a time period, a number of examples). Then write one sentence: “This question asks me to…”. It takes a minute and prevents the most common problem in essays: answering a different question."}
    ]},
    {h:"Four common shapes", body:[
      "Here are the four essay types this lesson covers, side by side. Every one of them still has an introduction with a thesis and a conclusion; what changes is the middle.",
      {fig:'<svg viewBox="0 0 340 452"><text x="170" y="18" text-anchor="middle">The middle of the essay changes</text><rect class="d-lup" x="8" y="30" width="324" height="92" rx="8" stroke-width="2"/><text x="18" y="52">Argumentative</text><rect class="d-panel" x="18" y="62" width="70" height="48" rx="4"/><text class="s" x="53" y="83" text-anchor="middle">Reason 1</text><text class="s" x="53" y="99" text-anchor="middle">+ evidence</text><rect class="d-panel" x="96" y="62" width="70" height="48" rx="4"/><text class="s" x="131" y="83" text-anchor="middle">Reason 2</text><text class="s" x="131" y="99" text-anchor="middle">+ evidence</text><rect class="d-panel" x="174" y="62" width="70" height="48" rx="4"/><text class="s" x="209" y="83" text-anchor="middle">Counter-</text><text class="s" x="209" y="99" text-anchor="middle">argument</text><rect class="d-panel" x="252" y="62" width="70" height="48" rx="4"/><text class="s" x="287" y="83" text-anchor="middle">Rebuttal</text><text class="s" x="287" y="99" text-anchor="middle">(your reply)</text><rect class="d-sage" x="8" y="134" width="324" height="92" rx="8" stroke-width="2"/><text x="18" y="156">Compare–contrast</text><rect class="d-panel" x="18" y="166" width="148" height="48" rx="4"/><text class="s" x="92" y="187" text-anchor="middle">Block: all of A,</text><text class="s" x="92" y="203" text-anchor="middle">then all of B</text><rect class="d-panel" x="174" y="166" width="148" height="48" rx="4"/><text class="s" x="248" y="187" text-anchor="middle">Point by point: cost A/B,</text><text class="s" x="248" y="203" text-anchor="middle">access A/B, results A/B</text><rect class="d-gold" x="8" y="238" width="324" height="92" rx="8" stroke-width="2"/><text x="18" y="260">Cause–effect</text><rect class="d-panel" x="18" y="270" width="88" height="48" rx="4"/><text class="s" x="62" y="291" text-anchor="middle">Cause</text><text class="s" x="62" y="307" text-anchor="middle">(or causes)</text><path class="d-ink" d="M110 294 H130" stroke-width="2" marker-end="url(#a1)"/><rect class="d-panel" x="134" y="270" width="88" height="48" rx="4"/><text class="s" x="178" y="291" text-anchor="middle">Effect that</text><text class="s" x="178" y="307" text-anchor="middle">causes…</text><path class="d-ink" d="M226 294 H246" stroke-width="2" marker-end="url(#a1)"/><rect class="d-panel" x="250" y="270" width="72" height="48" rx="4"/><text class="s" x="286" y="291" text-anchor="middle">a further</text><text class="s" x="286" y="307" text-anchor="middle">effect</text><rect class="d-rose" x="8" y="342" width="324" height="92" rx="8" stroke-width="2"/><text x="18" y="364">Problem–solution</text><rect class="d-panel" x="18" y="374" width="70" height="48" rx="4"/><text class="s" x="53" y="403" text-anchor="middle">Situation</text><rect class="d-panel" x="96" y="374" width="70" height="48" rx="4"/><text class="s" x="131" y="403" text-anchor="middle">Problem</text><rect class="d-panel" x="174" y="374" width="70" height="48" rx="4"/><text class="s" x="209" y="403" text-anchor="middle">Solution(s)</text><rect class="d-panel" x="252" y="374" width="70" height="48" rx="4"/><text class="s" x="287" y="403" text-anchor="middle">Evaluation</text><text class="s" x="170" y="448" text-anchor="middle">Each one sits between an introduction and a conclusion.</text><defs><marker id="a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs></svg>', alt:"Four horizontal bands. Argumentative: reason 1 plus evidence, reason 2 plus evidence, counterargument, rebuttal. Compare–contrast: either block (all of A, then all of B) or point by point (cost, access and results for A and B in turn). Cause–effect: a cause leads to an effect, which causes a further effect. Problem–solution: situation, problem, solutions, evaluation.", cap:"The four shapes. The introduction (with your thesis) and the conclusion stay the same; the body is organised differently."},
      {key:"Same frame, different middle: introduction and thesis, then a body organised by the essay type, then a conclusion that answers the question."}
    ]},
    {h:"Argumentative essays", body:[
      "An [[argumentative-essay|argumentative essay]] takes a clear position on a question where reasonable people could disagree, and supports it with reasons and evidence. Its thesis is a claim, not a topic: “This essay argues that small, frequent tests improve long-term learning more than one final exam” is a claim; “This essay is about testing” is only a topic.",
      "A common plan is: introduction with thesis; one body paragraph per reason, each with evidence; a paragraph that presents the strongest opposing view (the [[counterargument]]) and answers it (the [[rebuttal]]); and a conclusion that returns to the thesis. The counterargument paragraph can also come earlier, or you can answer objections inside each body paragraph. Lesson 2 shows how to build these parts.",
      {ex:"Thesis: Although they cost more at first, solar-powered water pumps are a better long-term choice than diesel pumps for small farms in dry regions.\nReason 1: lower running costs over the pump’s life.\nReason 2: fewer breakdowns caused by fuel supply problems.\nCounterargument: the high purchase price excludes the poorest farmers.\nRebuttal: shared ownership and credit schemes can reduce the first cost.", label:"Worked example: an argumentative plan"},
      "Useful language: “This essay argues that…”, “The main reason is that…”, “A further reason is…”, “Critics argue that…; however,…”, “Overall, the evidence suggests that…”. Notice the cautious verb in the last one: “suggests”, not “proves”. That is [[hedging]], and it keeps your claim as strong as your evidence, no stronger."
    ]},
    {h:"Compare–contrast essays", body:[
      "A [[compare-contrast-essay|compare–contrast essay]] examines the similarities and differences between two or more things in order to make a point about them. The point matters. A list of similarities and differences isn’t yet an essay; a thesis such as “Both cities in this study cut car traffic, but only the one that lowered bus fares also reduced travel costs for low-income residents” is.",
      "There are two common ways to organise the body:",
      {table:[["Pattern","How it works","Good for"],["Block","All about A, then all about B, then a comparison","Short essays; two things with few points"],["Point by point","Point 1 for A and B, then point 2 for A and B…","Longer essays; keeps the comparison in view"]]},
      "The language of comparison is small but precise. Notice the grammar in each example.",
      {list:[
        "**Similarity:** “**Similarly**, the second plan…” and “**Likewise**,…” (adverbs that start a new sentence, followed by a comma); “**Both** A **and** B…”; “A, **like** B, …”.",
        "**Difference inside one sentence:** “Rural clinics rely on nurses, **whereas** urban clinics employ more doctors.” “**While** A…, B…” works the same way. These words join two [[clause|clauses]] (two subject–verb groups) in one sentence. The “whereas” clause can also come first: “**Whereas** rural clinics rely on nurses, urban clinics employ more doctors.”",
        "**Difference across two sentences:** “Rural clinics rely on nurses. **In contrast**, urban clinics employ more doctors.” “**On the other hand**” is used the same way, especially when weighing two sides.",
        "**Unlike + noun:** “**Unlike** rural clinics, urban clinics employ more doctors.” The noun after “unlike” must be the same kind of thing as the subject: clinics compared with clinics."
      ]},
      {warn:"Two common slips. “Whereas” is a conjunction, so it joins clauses inside one sentence; don’t start a separate sentence with “Whereas,” followed by a comma. And make sure you compare like with like: “The population of the capital is larger than the second city” compares a population with a city. Write “larger than **that of** the second city” or “the capital’s population is larger than the second city’s”."}
    ]},
    {h:"Cause–effect essays", body:[
      "A [[cause-effect-essay|cause–effect essay]] explains why something happened (causes), what happened because of it (effects), or both. Some essays focus mainly on causes, some mainly on effects, and some follow a **chain**, where each effect becomes the cause of the next step.",
      "Cause and effect language has a **direction**, and it is easy to reverse it by accident.",
      {table:[["Direction","Phrases","Example"],["Cause → effect","lead to, result in, cause, contribute to, give rise to","Deforestation **can lead to** soil erosion."],["Effect ← cause","result from, be caused by, stem from, arise from, be due to","Soil erosion **often results from** deforestation."]]},
      "The grammar after the linking word matters too:",
      {list:[
        "**because** + a clause: “The harvest failed **because** the rains came late.”",
        "**because of / due to / owing to** + a noun phrase: “The harvest failed **because of** the late rains.”",
        "**As a result, / Consequently, / Therefore,** start a new sentence (or follow a semicolon) and introduce the effect: “The rains came late. **As a result,** the harvest failed.”"
      ]},
      {warn:"“Due to” + a full clause (“due to the rains came late”) is a common error: add “the fact that”, or use “because”. And remember the spelling pair: **affect** is usually the verb (“Heat affects sleep”), **effect** is usually the noun (“Heat has an effect on sleep”)."},
      "Be careful with how strongly you claim a cause. Two things happening together (a [[correlation]]) doesn’t prove that one causes the other ({{correlation-causation}}). Academic writers often soften causal claims: “may contribute to”, “is likely to be one cause of”, “appears to be linked to”. This is [[hedging]] again, and the English for it is taught in depth in {{hedging-and-boosting|the hedging and boosting entry}}."
    ]},
    {h:"Problem–solution essays", body:[
      "A [[problem-solution-essay|problem–solution essay]] describes a problem, proposes one or more solutions, and judges how well they would work. The linguist Michael Hoey (1983) described a pattern that many texts like this follow: **Situation → Problem → Response (solution) → Evaluation**. The evaluation step is the one students most often forget, and it is where much of the thinking happens.",
      {ex:"**Situation:** Many first-year students in large courses commute long distances.\n**Problem:** As a result, a high proportion miss evening seminars, and their marks suffer.\n**Solution:** One possible solution would be to record seminars and add online discussion.\n**Evaluation:** This would improve access, although it might reduce live participation unless the online tasks are assessed.", label:"Worked example: the four steps in one paragraph"},
      "Notice the verbs in the solution and evaluation: “**would** improve”, “**might** reduce”, “**could** be”. Proposals describe things that haven’t happened yet, so English uses [[modal-verb|modal verbs]] and conditional forms (“If the university **introduced** recorded seminars, attendance problems **would** matter less”). Other useful phrases: “A major problem is that…”, “One way to address this would be to…”, “The main advantage of this approach is…”, “However, it would also…”.",
      {tip:"Evaluate every solution you propose: cost, who benefits, who might be left out, how long it takes, and what could go wrong. A solution with a fair evaluation is more convincing than a “perfect” solution."}
    ]},
    {h:"Real essays mix shapes, and fields differ", body:[
      "These four types are teaching models, not laws. Real essays combine them: a cause–effect section inside an argument, a comparison inside a problem–solution essay. Use the shape that answers the question.",
      "Fields differ too. Many science and engineering courses ask for **reports** organised by section headings (often [[imrad|IMRaD]]: Introduction, Methods, Results and Discussion) rather than essays. Some humanities courses expect longer essays with a more developed argument and fewer headings. Check what your course expects.",
      {table:[["Common belief","Closer to the truth"],["An essay always has five paragraphs.","The five-paragraph essay is a school model. University essays have as many paragraphs as the argument needs."],["Comparing means listing similarities, then differences.","Comparison needs a point: what do the similarities and differences show?"],["A cause–effect essay must prove causes.","It must show the evidence for causes and claim them as strongly as that evidence allows."],["A problem–solution essay needs one perfect solution.","Weighing several solutions fairly is usually stronger."]]},
      "For the wider picture of how thesis, paragraphs and signposting fit together in any academic text, see {{argument-structure}} in Research Skills. The next lesson zooms in on the argument itself.",
      {terms:["argumentative-essay","compare-contrast-essay","cause-effect-essay","problem-solution-essay"]}
    ]}
   ],
   try:[
    {id:"e1u3-l1-x1", type:"match", q:"Match each essay question to the essay type it most likely asks for.", pairs:[
      ["To what extent should cities ban private cars from their centres?","Argumentative","“To what extent” asks you to take and defend a position, usually somewhere between yes and no."],
      ["Compare the health systems of Costa Rica and Thailand.","Compare–contrast","“Compare” asks for similarities and differences, organised to make a point."],
      ["Explain the main causes of the 2008 global financial crisis.","Cause–effect","“Explain the causes” asks why something happened."],
      ["How can small island states reduce their dependence on imported fuel?","Problem–solution","“How can … reduce” asks you to propose and evaluate solutions to a problem."]
    ]},
    {id:"e1u3-l1-x2", type:"mcq", q:"Hana is comparing two water treatment methods on three points: cost, energy use and safety. Which plan is **point by point**?", options:[
      {t:"Paragraph 1: cost of both methods. Paragraph 2: energy use of both. Paragraph 3: safety of both.", ok:true, why:"Right. Each paragraph covers one point for both methods, so the comparison stays in view throughout."},
      {t:"Paragraph 1: everything about method A. Paragraph 2: everything about method B. Paragraph 3: comparison.", why:"That is the **block** pattern: all of A, then all of B. It is fine for short essays, but it isn’t point by point."},
      {t:"Paragraph 1: the history of water treatment. Paragraph 2: method A. Paragraph 3: method B.", why:"This is a block pattern with a background paragraph added. Point by point organises paragraphs by the points of comparison."},
      {t:"One long paragraph that mentions both methods in any order.", why:"That has no organising pattern at all. Readers need a clear structure to follow a comparison."}
    ]},
    {id:"e1u3-l1-x3", type:"mcq", q:"Which sentence uses comparison language correctly in formal academic writing?", options:[
      {t:"Rural schools often share teachers between classes, whereas urban schools usually have one teacher per class.", ok:true, why:"Correct. “Whereas” joins two clauses in one sentence and shows a contrast."},
      {t:"Rural schools often share teachers between classes. Whereas, urban schools usually have one teacher per class.", why:"“Whereas” is a conjunction: it joins two clauses inside one sentence. To start a new sentence, use “In contrast,” instead."},
      {t:"Rural schools often share teachers between classes. Similarly, urban schools usually have one teacher per class.", why:"“Similarly” signals a similarity, but these two facts are different. The signal must match the relationship."},
      {t:"Unlike rural schools, urban schools’ classes usually have one teacher each.", why:"“Unlike rural schools” must be followed by something comparable to schools, but the subject is “classes”, so it compares schools with classes. Write “Unlike rural schools, urban schools usually have one teacher per class.”"}
    ]},
    {id:"e1u3-l1-x4", type:"sort", q:"Sort each phrase by the direction it points: from cause to effect (“A ___ B”, where A is the cause), or from effect back to cause (“B ___ A”).", buckets:["Cause → effect","Effect ← cause"], items:[
      {t:"leads to", b:0, why:"“Smoking leads to lung disease”: the cause comes first."},
      {t:"results in", b:0, why:"“Drought results in crop losses”: cause first, effect second."},
      {t:"results from", b:1, why:"“Crop losses result from drought”: the effect comes first. Mixing up “result in” and “result from” reverses your meaning."},
      {t:"is caused by", b:1, why:"A passive form: the effect is the subject, the cause follows “by”."},
      {t:"contributes to", b:0, why:"“Noise contributes to stress”: the cause is the subject. “Contributes” also shows it is one cause among several."},
      {t:"stems from", b:1, why:"“The conflict stems from a land dispute”: the effect comes first, its source second."}
    ]},
    {id:"e1u3-l1-x5", type:"spot", q:"Mei wrote this cause–effect paragraph. Tap each **grammar or meaning error**. Some highlighted parts are correct.", ask:"error", parts:[
      {t:"Many coastal towns have lost beaches in recent decades.", flag:false, why:"Correct: a clear statement of the situation in the present perfect, which suits a change continuing up to now."},
      " ",
      {t:"This partly results from the removal of sand for construction.", flag:false, why:"Correct: “results from” puts the effect first and the cause after, and “partly” hedges the claim fairly."},
      " ",
      {t:"Due to sea levels are rising, storms also reach further inland.", flag:true, why:"“Due to” must be followed by a noun phrase, not a clause. Write “Because sea levels are rising,…” or “Due to rising sea levels,…”."},
      " ",
      {t:"As a result, waves wash more sand away each winter.", flag:false, why:"Correct: “As a result,” starts a new sentence and introduces an effect of the previous one."},
      " ",
      {t:"Losing beaches can also effect local tourism.", flag:true, why:"The verb is “affect”. “Effect” is usually the noun (“an effect on tourism”)."},
      " ",
      {t:"Fewer visitors leads from smaller beaches.", flag:true, why:"The direction is reversed and the verb doesn’t agree. Write “Smaller beaches lead to fewer visitors” or “Fewer visitors result from smaller beaches”."}
    ]},
    {id:"e1u3-l1-x6", type:"order", q:"Put these sentences into a problem–solution paragraph, following Situation → Problem → Solution → Evaluation.", items:[
      {t:"Many small shops in the market now accept mobile payments.", why:"Situation: the background the reader needs before the problem makes sense."},
      {t:"However, older customers without smartphones are finding it harder to shop there.", why:"Problem: “However” signals that the situation has created a difficulty."},
      {t:"One possible solution would be for the market association to keep a shared cash point open at the entrance.", why:"Solution: “would” marks it as a proposal, not something already done."},
      {t:"This would cost little to run, although shops would still need to keep some change for cash payments.", why:"Evaluation: it weighs a benefit (“cost little”) against a limitation (“although…”)."}
    ]},
    {id:"e1u3-l1-x7", type:"mcq", q:"Which is the strongest thesis for an essay that asks: “Compare the use of public libraries in two cities you know” (Ana chose two towns she calls Riverton and Hillside)?", options:[
      {t:"Libraries in both cities are well used, but Riverton’s longer evening hours draw more working adults than Hillside’s, which suggests that opening times matter as much as book collections.", ok:true, why:"Right. It names the comparison, states a specific difference and makes a point about what the difference shows, with a fair hedge (“suggests”)."},
      {t:"This essay will compare libraries in Riverton and Hillside.", why:"This announces a topic but makes no claim. A reader still doesn’t know what the comparison will show."},
      {t:"Libraries are important places in every city in the world.", why:"Too general and not arguable: almost nobody would disagree, and it doesn’t compare the two cities."},
      {t:"There are many similarities and many differences between libraries in Riverton and Hillside.", why:"This is true of almost any two things. A thesis needs to say which similarity or difference matters, and why."}
    ]}
   ],
   apply:{
    intro:"Use real essay questions: from your own course, an old exam paper, or a university study-skills site. Keep your notes; you’ll reuse them in later lessons.",
    tasks:[
     {t:"Decode three essay questions", how:[
       "Find three essay questions (your course, past papers, or a textbook’s end-of-chapter questions).",
       "For each, underline the task word, circle the topic words and box any limits.",
       "Write “This question asks me to…” and name the essay type, or the mix of types."
     ], write:"Question 1… task word… type… Question 2… Question 3…"},
     {t:"Plan a compare–contrast essay both ways", how:[
       "Choose two things you know well: two apps, two cities, two teaching methods, two recipes.",
       "Pick three points of comparison.",
       "Write a block plan and a point-by-point plan, then a one-sentence thesis that makes a point about the comparison."
     ], write:"Two things… Points… Block plan… Point-by-point plan… Thesis…"},
     {t:"Collect signal language from a real text", how:[
       "Open any academic article, textbook chapter or long report in your field.",
       "Find five phrases that show comparison or cause and effect (for example “whereas”, “in contrast”, “results in”, “owing to”).",
       "Copy each one with the words around it, and note its grammar: does it join two clauses, start a sentence, or come before a noun?"
     ], write:"Phrase… sentence it was in… its grammar…"}
    ],
    proof:"Notes with three decoded essay questions, two plans for one comparison with a thesis, and five signal phrases with their grammar."
   },
   read:[
    {book:"owg", where:"Section 11.3 “Glance at Genre: Reasoning Strategies and Signal Words”", note:"Defines cause and effect, comparison and contrast, problem and solution, and lists signal words for each."},
    {book:"owg", where:"Section 11.5 “Writing Process: Reasoning Supported by Evidence”", note:"Model paragraphs for each strategy, most of them written in two different structures."},
    {book:"phrasebank", where:"“Comparing and contrasting” and “Explaining causality”", note:"More phrases for this lesson. Notice the grammar around each phrase as you read."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e1u3-l2", title:"Building an argument: claims, evidence and concession", minutes:55,
   hook:{q:"Fatima’s essay argues for one side. Her tutor says: “Add the strongest argument *against* your position.” What will that most likely do, if she answers it well?", options:["Weaken her essay, because it helps the other side","Strengthen her essay, because it shows she has tested her claim","Make no difference to her mark","Force her to change her position"], answer:1, reveal:"**Strengthen it.** Readers of academic writing are trained to look for objections. If you raise the strongest one yourself and answer it fairly, you show that your claim survives a test. Ignoring obvious objections makes an argument look one-sided. This lesson shows how to build claims, evidence and reasoning, and how English signals concession: admitting a point before answering it."},
   goals:[
     "Tell a claim, evidence and reasoning apart in a paragraph, and add the reasoning that links them",
     "Introduce different kinds of evidence with suitable phrases",
     "Present a counterargument fairly and answer it with a rebuttal",
     "Use concession structures (although, while, despite, admittedly) with correct grammar",
     "Avoid a straw man and keep claims as strong as the evidence"
   ],
   learn:[
    {h:"Three parts: claim, evidence, reasoning", body:[
      {lead:"Picture a bridge. On one side is your evidence: facts, data, examples. On the other side is your claim. Your reasoning is the bridge: it shows the reader how to get from one to the other."},
      "A **claim** is a statement that you want the reader to accept, and that someone could question. **Evidence** is the information that supports it: data, research findings, examples, documents, expert views. **Reasoning** explains *why* this evidence supports this claim. Teachers often call this model [[claim-evidence-reasoning|claim, evidence, reasoning (CER)]].",
      "The idea is old. The philosopher Stephen Toulmin described it in *The Uses of Argument* (1958), with six parts: his **data** (or grounds) are your evidence, his **warrant** is close to what we call reasoning, and he added **backing** (support for the warrant), a **qualifier** (how sure you are) and a **rebuttal** (when the claim might not hold). You don’t need his full model to write well, but the core is the same.",
      {ex:"**Claim:** Free school meals can improve attendance in low-income areas.\n**Evidence:** In the district’s pilot schools, attendance rose from 86% to 91% in the first year, while it stayed the same in similar schools without the scheme.\n**Reasoning:** Because the comparison schools were similar and did not change, the rise is more likely to be linked to the meals than to a general trend, although other local changes cannot be ruled out.", label:"Worked example: one paragraph’s argument (invented data)"},
      "Notice that the reasoning does two jobs. It explains the link (the comparison with similar schools), and it is honest about limits (“more likely”, “cannot be ruled out”). That honesty is part of a good academic argument, not a weakness.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="70" y="8" width="200" height="50" rx="8" stroke-width="2"/><text x="170" y="30" text-anchor="middle">Claim</text><text class="s" x="170" y="47" text-anchor="middle">what you want readers to accept</text><rect class="d-gold" x="70" y="104" width="200" height="50" rx="8" stroke-width="2"/><text x="170" y="126" text-anchor="middle">Reasoning</text><text class="s" x="170" y="143" text-anchor="middle">why the evidence supports it</text><rect class="d-sage" x="70" y="200" width="200" height="50" rx="8" stroke-width="2"/><text x="170" y="222" text-anchor="middle">Evidence</text><text class="s" x="170" y="239" text-anchor="middle">data, studies, examples</text><path class="d-ink" d="M170 198 V158" stroke-width="2" marker-end="url(#a2)"/><path class="d-ink" d="M170 102 V62" stroke-width="2" marker-end="url(#a2)"/><text class="s" x="170" y="278" text-anchor="middle">Read from the bottom: evidence, through</text><text class="s" x="170" y="294" text-anchor="middle">reasoning, supports the claim.</text></svg>', alt:"Three stacked boxes. At the bottom, evidence (data, studies, examples). An arrow goes up to reasoning (why the evidence supports it). Another arrow goes up to the claim (what you want readers to accept).", cap:"The claim stands on the evidence only if the reasoning connects them."}
    ]},
    {h:"Bringing in evidence", body:[
      "Different kinds of evidence need slightly different language. Most of these phrases also work with a citation, which Lesson 3 covers in detail.",
      {table:[["Kind of evidence","Useful phrases"],["Numbers and data","“Data from the 2021 census show that…”, “The figures indicate that…”, “Nearly half of the respondents…”"],["Research findings","“A study of 400 farmers found that…”, “Several studies have reported…”"],["Examples and cases","“For example,…”, “This is illustrated by the case of…”, “A clear example is…”"],["Expert views","“As the World Health Organization notes,…”, “According to Rahman (2019),…”"]]},
      "Choose evidence that fits the claim. A single example can illustrate a point, but it can’t show that something is common: for that you need data or several studies. A general claim (“most…”, “often…”) needs general evidence.",
      {tip:"“Data” is grammatically plural in some fields and style guides (“the data show”) and singular in others (“the data shows”). Both are used; follow your field and stay consistent. The grammar unit covers this in {{grammar-trouble-spots}}."}
    ]},
    {h:"Reasoning: the step writers skip", body:[
      "The most common weakness in student arguments isn’t a lack of evidence. It is evidence dropped into a paragraph with no explanation, as if the reader will automatically see the point. Readers don’t always see it, and markers can’t give credit for reasoning that isn’t on the page.",
      {table:[["Without reasoning","With reasoning"],["Online courses are better for working adults. 62% of the survey respondents worked full time.","Online courses may suit working adults better. In the survey, 62% of the respondents who chose online study worked full time, **which suggests that** flexible timing was a key reason for their choice."]]},
      "Phrases that start reasoning include: “**This suggests that**…”, “**This indicates that**…”, “**This matters because**…”, “**In other words**,…”, “**This is likely to be because**…”, “**If this is the case**, then…”. After your evidence, ask yourself: *so what?* The answer is your reasoning sentence.",
      {key:"Evidence doesn’t speak for itself. One sentence of reasoning after each piece of evidence tells the reader what it shows and why it supports your claim."}
    ]},
    {h:"Counterarguments and rebuttals", body:[
      "A [[counterargument]] is a reasonable objection to your claim: a view that a thoughtful reader might hold. A [[rebuttal]] is your response to it. Together they show that your claim has been tested.",
      "Introduce the counterargument fairly, often with a reporting verb and some distance: “**Critics argue that**…”, “**Some researchers maintain that**…”, “**It could be argued that**…”, “**One objection is that**…”. Then turn to your response, usually with “However,” or “Nevertheless,”.",
      "There are three main ways to answer an objection:",
      {table:[["Strategy","What you say","Example"],["Refute","The objection is wrong or its evidence is weak.","“However, this study had only twelve participants.”"],["Limit","It is true, but only in some cases.","“This is true for rural areas, but less so in cities.”"],["Outweigh","It is true, but other factors matter more.","“The cost is real, but it is smaller than the savings over ten years.”"]]},
      {warn:"Avoid the **straw man**: describing the other side in a weak or silly form so that it is easy to knock down. “Some people think we should just ignore climate change” is a straw man if nobody serious argues that. Present the strongest version of the opposing view; your rebuttal is then worth reading."},
      "Conceding is allowed. Sometimes the honest answer is: “This is a real limitation, and the policy would need to address it.” A partial concession often makes your overall claim more believable."
    ]},
    {h:"The language of concession", body:[
      "**Concession** means admitting that something is true before you make your main point. English has several patterns for it, and each has its own grammar. Here is one idea expressed in each pattern: “The scheme is expensive, but it saves money over time.”",
      {table:[["Pattern","Followed by","Example"],["Although / Even though / While","a clause (subject + verb)","**Although** the scheme is expensive, it saves money over time."],["Despite / In spite of","a noun phrase or -ing","**Despite** its high cost, the scheme saves money. / **Despite** costing more,…"],["Despite the fact that","a clause","**Despite the fact that** the scheme is expensive,…"],["Admittedly, … However, …","two sentences","**Admittedly,** the scheme is expensive. **However,** it saves money over time."],["While it is true that","a clause","**While it is true that** the scheme is expensive, it saves money over time."]]},
      "Three grammar points cause most problems:",
      {ol:[
        "**Only one linking word per contrast.** “Although the scheme is expensive, **but** it saves money” uses two. Some languages pair words like these in one sentence; in English, choose “although” *or* “but”, not both.",
        "**“Despite” is never followed by “of”**, and it can’t be followed directly by a clause. Not “despite of the cost” and not “despite the cost was high”. Write “despite the cost”, “in spite of the cost” or “despite the fact that the cost was high”.",
        "**Put the point you want remembered in the main clause.** “Although the scheme saves money, it is expensive” leaves the reader thinking about the cost. “Although the scheme is expensive, it saves money” leaves them with the saving. The information after the concession usually carries more weight."
      ]},
      {tip:"“Even though” is a stronger form of “although” for facts. “Even if” is different: it introduces a possibility that may not be true. “Even if prices rise, demand may stay high” doesn’t say prices *will* rise."}
    ]},
    {h:"How strong should a claim be?", body:[
      "Strong arguments are not the same as strongly worded arguments. In most academic fields, readers trust a claim that matches its evidence: “The results **suggest** that…” after one study, “There is **strong evidence** that…” after many consistent studies. Words that make a claim sound more certain are called [[booster|boosters]] (“clearly”, “undoubtedly”), and they can only be used when the evidence really is that strong. See [[hedging]] and {{hedging-and-boosting}}.",
      "Many students ask whether they may write “I argue that…”. In many fields today, “I” or “we” is accepted: many science articles use “we”, and many humanities and social science writers use “I”. In other fields and courses, impersonal forms (“This essay argues…”) are still preferred. It varies by field, course and lecturer, so check your guidance (see [[academic-register]]).",
      {table:[["Common belief","Closer to the truth"],["Mentioning the other side weakens my essay.","Answering the strongest objection usually strengthens it."],["More evidence is always better.","Relevant evidence, clearly explained, is better than a long list."],["Strong words make a strong argument.","Accurate words make a strong argument. Overclaiming loses readers’ trust."],["Concession means giving up.","Concession shows you have weighed both sides; your main clause still carries your point."]]},
      {terms:["claim-evidence-reasoning","counterargument","rebuttal","concession"]}
    ]}
   ],
   try:[
    {id:"e1u3-l2-x1", type:"sort", q:"Kenji’s paragraph is split into parts. Is each part a claim, evidence or reasoning?", buckets:["Claim","Evidence","Reasoning"], items:[
      {t:"Shared e-scooters have probably reduced short car trips in the city centre.", b:0, why:"A statement the writer wants us to accept, hedged with “probably”. Someone could question it, so it is a claim."},
      {t:"A council survey found that 30% of scooter users said they would otherwise have driven.", b:1, why:"A specific finding from a source: evidence."},
      {t:"Traffic counts on the main shopping street fell by 8% in the year after scooters arrived.", b:1, why:"Measured data: evidence."},
      {t:"Because both the survey and the traffic counts point the same way, scooters are a likely cause, although the counts could also reflect other changes.", b:2, why:"This explains how the evidence supports the claim, and notes a limit. That is reasoning."},
      {t:"This suggests that scooters replaced some car journeys rather than only walking trips.", b:2, why:"“This suggests that” interprets the evidence: it tells the reader what the data show. That is reasoning."}
    ]},
    {id:"e1u3-l2-x2", type:"mcq", q:"Which sentence uses concession grammar correctly?", options:[
      {t:"Despite the high cost of the equipment, the clinic bought two new scanners.", ok:true, why:"Correct. “Despite” is followed by a noun phrase (“the high cost of the equipment”)."},
      {t:"Although the equipment was expensive, but the clinic bought two new scanners.", why:"This uses two linking words for one contrast. Use “Although…” *or* “…, but…”, not both."},
      {t:"Despite of the high cost, the clinic bought two new scanners.", why:"“Despite” is never followed by “of”. Use “despite the high cost” or “in spite of the high cost”."},
      {t:"Despite the equipment was expensive, the clinic bought two new scanners.", why:"“Despite” can’t be followed directly by a clause. Write “Although the equipment was expensive” or “Despite the fact that the equipment was expensive”."}
    ]},
    {id:"e1u3-l2-x3", type:"mcq", q:"Priya’s evidence: “In the trial, students who slept at least eight hours scored 6% higher on memory tests.” Her claim: “Sleep may support learning.” Which sentence adds the best **reasoning**?", options:[
      {t:"This suggests that sleep helps the brain store new information, although the trial measured only short-term memory.", ok:true, why:"Right. It explains how the evidence connects to the claim and notes a limit of the evidence. That is reasoning."},
      {t:"Sleep is very important for everyone.", why:"This is a vague general statement. It doesn’t explain what the trial result shows."},
      {t:"Another study found similar results with older adults.", why:"This is more evidence, which can help, but it doesn’t explain *why* the evidence supports the claim."},
      {t:"Therefore, all students must sleep eight hours a night.", why:"This jumps to a much stronger claim than the evidence supports (one trial, short-term memory) and doesn’t explain the link."}
    ]},
    {id:"e1u3-l2-x4", type:"match", q:"Match each rebuttal to the strategy it uses.", pairs:[
      ["“However, the survey that supports this view was answered by only 40 people.”","Refute: the objection’s evidence is weak","It attacks the quality of the evidence behind the objection."],
      ["“This is true in large cities, but in small towns the effect is much weaker.”","Limit: true only in some cases","It accepts the point but narrows where it applies."],
      ["“The start-up cost is real, but it is far smaller than the savings over ten years.”","Outweigh: other factors matter more","It accepts the point and argues something bigger matters more."]
    ]},
    {id:"e1u3-l2-x5", type:"order", q:"Put this counterargument paragraph in a logical order.", items:[
      {t:"Critics argue that a four-day working week would reduce productivity.", why:"Start by stating the counterargument fairly, with distance (“Critics argue”)."},
      {t:"They point out that some tasks, such as customer support, need staff every weekday.", why:"Next, give the strongest support for the objection, so the reader sees it is taken seriously."},
      {t:"However, in the trials discussed above, most firms reported that output stayed the same or rose.", why:"“However” turns to the rebuttal, using evidence."},
      {t:"Staggered schedules can also keep services open five days a week.", why:"“Also” adds a second answer, this time to the specific point about customer support, so it must follow the first answer."},
      {t:"The objection therefore applies to some jobs, but it does not undermine the overall case.", why:"Finish by stating what the rebuttal means for your main claim."}
    ]},
    {id:"e1u3-l2-x6", type:"spot", q:"Tap each sentence that has a **concession grammar error**. Some sentences are correct.", ask:"concession error", parts:[
      {t:"Although the sample was small, the results were consistent.", flag:false, why:"Correct: “Although” + clause, then the main clause."},
      " ",
      {t:"In spite of the delays, the project finished on budget.", flag:false, why:"Correct: “In spite of” + noun phrase."},
      " ",
      {t:"Even though the data were incomplete, but the trend was clear.", flag:true, why:"Two linking words for one contrast. Drop “but”: “Even though the data were incomplete, the trend was clear.”"},
      " ",
      {t:"While it is true that the method is slow, it is very accurate.", flag:false, why:"Correct: “While it is true that” + clause, then the main point."},
      " ",
      {t:"Despite the method is slow, many labs use it.", flag:true, why:"“Despite” can’t take a clause. Write “Although the method is slow” or “Despite being slow” or “Despite the fact that the method is slow”."},
      " ",
      {t:"Admittedly, the method is slow. However, many labs use it.", flag:false, why:"Correct: two sentences, “Admittedly” for the concession and “However” for the main point."}
    ]},
    {id:"e1u3-l2-x7", type:"mcq", q:"Tomás wants readers to remember that the new bus route **helps commuters**, while admitting it is **expensive**. Which sentence does that best?", options:[
      {t:"Although the new route is expensive, it helps thousands of commuters each day.", ok:true, why:"Right. The concession (cost) is in the “although” clause, and the point to remember (helping commuters) is in the main clause."},
      {t:"Although the new route helps thousands of commuters each day, it is expensive.", why:"This puts the cost in the main clause, so the reader is left thinking about the cost: the opposite of what Tomás wants."},
      {t:"The new route is expensive and it helps thousands of commuters each day.", why:"“And” presents the two facts as equal. It doesn’t show which one matters more."},
      {t:"Despite it is expensive, the new route helps thousands of commuters each day.", why:"The emphasis is right, but the grammar isn’t: “despite” can’t be followed by a clause. Write “Despite its cost,…” or “Although it is expensive,…”."}
    ]}
   ],
   apply:{
    intro:"Write about a topic from your own studies or work, or any question you care about. The goal is to practise the language of argument, so keep it short and check each part.",
    tasks:[
     {t:"Write one CER paragraph", how:[
       "Choose a claim you can support with evidence you already have (a reading, a dataset, a report).",
       "Write the claim in one sentence, with a hedge if the evidence is limited.",
       "Add one or two pieces of evidence, each with an evidence phrase from this lesson.",
       "After each piece of evidence, write one reasoning sentence (“This suggests that…”).",
       "Label each sentence C, E or R in the margin."
     ], write:"Claim… Evidence 1… Reasoning… Evidence 2… Reasoning…"},
     {t:"Add a counterargument and a rebuttal", how:[
       "Write the strongest objection to your claim, introduced fairly (“Critics argue that…”).",
       "Answer it using one strategy: refute, limit or outweigh. Name which one you used.",
       "Rewrite your answer as one sentence with “Although…” and once with “Despite…”, and check the grammar against the table."
     ], write:"Counterargument… Rebuttal (strategy: …)… “Although” version… “Despite” version…"}
    ],
    proof:"One labelled CER paragraph, plus a counterargument with a named rebuttal strategy and two correct concession sentences."
   },
   read:[
    {book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”", note:"A US college guide to claims, reasons and evidence in position arguments."},
    {book:"owg", where:"Section 12.5 “Writing Process: Integrating Research”: “Responding to Counterarguments”", note:"More on presenting and answering objections fairly."},
    {book:"phrasebank", where:"“Being critical” and “Signalling transition”", note:"Phrases for introducing other views, questioning evidence and moving to your answer."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e1u3-l3", title:"Using sources in your sentences", minutes:55,
   hook:{q:"Which of these is correct in standard written English?", options:["Chen (2019) describes that farmers share tools.","Chen (2019) describes how farmers share tools.","Chen (2019) describes about farmers sharing tools.","All three are equally correct."], answer:1, reveal:"**“Describes how…”.** “Describe” takes an object (“describes the system”, “describes how farmers share tools”, “describes this as…”), but not a “that” clause or “about”. Many reporting verbs have patterns like this, and they don’t always match similar verbs: you *argue that*, *discuss* something (not *discuss about*), and *describe X as Y*. This lesson covers the grammar of bringing sources into your sentences."},
   goals:[
     "Tell integral from non-integral citations and choose between them for focus",
     "Choose a reporting verb that matches what a source does and how you see it",
     "Use reporting verbs in the right grammatical pattern (that-clause, object, object + as, preposition)",
     "Choose suitable tenses for reporting sources, and know that conventions vary",
     "Combine sources in one sentence and fit quotations into your own grammar"
   ],
   learn:[
    {h:"Two ways to bring in a source", body:[
      {lead:"Think of a photograph. You can put a person in the centre of the picture, or you can put the scene in the centre with the person small in the corner. Citations work the same way."},
      "An [[integral-citation|integral citation]] puts the author’s name inside your sentence, as part of its grammar: usually as the subject of a reporting verb, but also inside a phrase such as “According to Mensah (2021),…” or “Mensah’s (2021) survey…”. A [[non-integral-citation|non-integral citation]] keeps the name out of the sentence, in brackets or as a number, so the focus stays on the idea. The linguist John Swales described these two types in *Genre Analysis* (1990), and the terms are now widely used.",
      {table:[["Type","Example (APA style)","Focus"],["Integral","**Mensah (2021)** found that rainwater tanks reduced water costs.","The researcher and what they did"],["Non-integral","Rainwater tanks can reduce household water costs **(Mensah, 2021)**.","The finding or idea"]]},
      "Both kinds are correct, and good writers mix them. Use integral citations when the person matters to your point: when you contrast two researchers’ views, when one study is central, or when you want to show that a claim is someone’s position, not an established fact. Use non-integral citations to state well-supported findings, or to group several sources behind one point.",
      {fig:'<svg viewBox="0 0 340 262"><text x="10" y="20">Integral: the author is in the sentence</text><rect class="d-lup" x="10" y="32" width="110" height="40" rx="6" stroke-width="2"/><text x="65" y="57" text-anchor="middle">Mensah (2021)</text><rect class="d-gold" x="126" y="32" width="62" height="40" rx="6" stroke-width="2"/><text x="157" y="57" text-anchor="middle">found</text><rect class="d-panel" x="194" y="32" width="136" height="40" rx="6"/><text x="262" y="50" text-anchor="middle">that tanks cut</text><text x="262" y="65" text-anchor="middle">water costs.</text><text class="s" x="65" y="90" text-anchor="middle">subject</text><text class="s" x="157" y="90" text-anchor="middle">reporting verb</text><text class="s" x="262" y="90" text-anchor="middle">what was reported</text><text x="10" y="138">Non-integral: the author is in brackets</text><rect class="d-panel" x="10" y="150" width="210" height="40" rx="6"/><text x="115" y="168" text-anchor="middle">Rainwater tanks can cut</text><text x="115" y="183" text-anchor="middle">household water costs</text><rect class="d-sage" x="226" y="150" width="104" height="40" rx="6" stroke-width="2"/><text x="278" y="175" text-anchor="middle">(Mensah, 2021).</text><text class="s" x="115" y="208" text-anchor="middle">the idea is the subject</text><text class="s" x="278" y="208" text-anchor="middle">source in brackets</text><text class="s" x="170" y="240" text-anchor="middle">In numbered styles: “Mensah [4] found…”</text><text class="s" x="170" y="256" text-anchor="middle">(integral) or “…water costs [4].” (non-integral)</text></svg>', alt:"Two sentence diagrams. Integral: “Mensah (2021)” as the subject, “found” as the reporting verb, then “that tanks cut water costs” as what was reported. Non-integral: “Rainwater tanks can cut household water costs” with “(Mensah, 2021)” in brackets at the end. A note says numbered styles work the same way: “Mensah [4] found” is integral and “water costs [4]” is non-integral.", cap:"The same source, two focuses. The citation style decides the format; your sentence decides the focus."},
      "The *format* (brackets, page numbers, where the year goes) depends on your [[citation-style|citation style]]: APA, MLA, Chicago, a numbered style or another. Research Skills teaches those formats in {{citation-styles}}. This lesson is about the *language* around them."
    ]},
    {h:"Choosing a reporting verb", body:[
      "In an integral citation, the reporting verb does a lot of work. It says what the source does (argues, describes, measures) and often how you see it. Unit 1 introduces [[reporting-verb|reporting verbs]] and [[stance]]; here is a quick reminder of how much the choice matters.",
      {table:[["Verb","What it tells the reader"],["states, notes, describes, reports","Neutral: the source said or recorded this."],["argues, claims, maintains, contends","The source takes a position that others could dispute. “Claims” can suggest you have doubts."],["shows, demonstrates, establishes","You accept the point as well supported. Use only when the evidence is strong."],["suggests, proposes, indicates","A tentative conclusion or an idea put forward for consideration."],["questions, challenges, disputes","The source disagrees with something."]]},
      "Compare “Okafor (2020) **shows** that the policy failed” with “Okafor (2020) **claims** that the policy failed”. The first tells your reader you accept Okafor’s conclusion; the second keeps your distance. Choose on purpose.",
      {tip:"“Says” is fine in speech but less common in formal academic writing; “states”, “notes” or “writes” usually fit better. “Tells” needs a person after it (“tells readers that…”), so it rarely works as a reporting verb."}
    ]},
    {h:"The grammar of reporting verbs", body:[
      "Reporting verbs don’t all follow the same pattern. This is where many writers, including first-language English speakers, make mistakes. Learn each verb with its pattern, as a [[collocation]].",
      {table:[["Pattern","Verbs","Example"],["verb + that-clause","argue, claim, suggest, find, show, note, conclude, report, state, observe","Lee (2018) **argues that** prices will fall."],["verb + object","describe, examine, discuss, investigate, analyse, outline, question, challenge","Ruiz (2020) **examines** rural migration."],["verb + object + as","describe, define, regard, characterise, see","Ali (2017) **describes** the reform **as** a turning point."],["verb + object + for","criticise, praise, blame","Wu (2019) **criticises** the study **for** its small sample."],["verb + preposition","focus on, comment on, refer to, object to","Diaz (2022) **focuses on** urban schools."]]},
      "Common errors, and their fixes:",
      {list:[
        "**discuss about** → **discuss**: “Ito (2016) discusses the risks.” (But the noun takes “about”: “a discussion about the risks”.)",
        "**describe that** → **describe how / describe X as**: “Chen describes how farmers share tools.”",
        "**emphasise on** → **emphasise**: “Rao emphasises the cost.” (But “put emphasis on” and “focus on” are correct.)",
        "**suggest someone to do** → **suggest that someone (should) do** or **suggest doing**: “Kaya suggests that teachers use shorter tests.”",
        "**According to X, X argues…** → choose one: “According to Diallo (2015), the reform worked.” or “Diallo (2015) argues that the reform worked.”"
      ]},
      {warn:"Watch the source of your subject. In “The study of Mensah found…”, write “Mensah’s study found…” or “A study by Mensah found…”. And keep the verb in agreement with its subject: “Mensah and Osei (2021) **argue**” (two authors: plural), “Mensah et al. (2021) **argue**” (several authors: plural), “The report **argues**” (one report: singular)."}
    ]},
    {h:"Tense with reporting verbs", body:[
      "Which tense should the reporting verb be in? There are three common choices, and each sends a slightly different message.",
      {table:[["Tense","Typical use","Example"],["Present simple","The idea is still relevant, or you discuss an author’s position or text","Mensah (2021) **argues** that tanks are under-used."],["Past simple","A specific study and what it did or found","Mensah (2021) **surveyed** 300 households and **found**…"],["Present perfect","Research in general, up to now, often without naming one author","Several studies **have shown** that…"]]},
      "These are tendencies, not rules. The Academic Phrasebank describes the same general pattern and says the patterns are “by no means rigid”. Style guides and fields differ. {{apa-style|APA Style}}, used in psychology, education and many social sciences, recommends the past or present perfect for describing others’ work (“Martin (2020) addressed…”, “Researchers have studied…”). In literature and many other humanities fields, writers usually discuss what authors and texts say in the present (“Achebe presents…”). See [[tense-in-academic-writing]] for tense across a whole paper.",
      {key:"Pick the tense that matches your message, follow your field’s or style guide’s habits, and stay consistent within a paragraph."}
    ]},
    {h:"Quotations, paraphrases and several sources in one sentence", body:[
      "When to quote, paraphrase or summarise, and how to do each honestly, is taught in Research Skills ({{quote-paraphrase-summary}}). Here are the sentence-level skills that go with them.",
      "**A quotation must fit your grammar.** The sentence should still be correct if you remove the quotation marks.",
      {ex:"Original sentence by Haddad: “We found the opposite in every district we studied.”\nAwkward: Haddad (2021) says “we found the opposite in every district we studied”. (Whose “we”? And no page number.)\nBetter: Haddad (2021) reports that the team “found the opposite in every district” it studied (p. 50).\nBetter: According to Haddad (2021), the pattern was reversed “in every district” studied (p. 50).", label:"Fitting a quotation into your sentence (invented example)"},
      "**A [[paraphrase]] still needs a citation**, and it must change the structure as well as the words. Swapping a few synonyms into the original sentence is [[patchwriting]], which is usually treated as [[plagiarism-term|plagiarism]].",
      "**Several sources can share one sentence.** This is part of [[synthesis]]: showing how sources relate to each other.",
      {list:[
        "Agreement: “**Both** Ito (2018) **and** Mwangi (2021) **found** that…” or “…, a pattern reported in several studies (Ito, 2018; Mwangi, 2021).”",
        "Disagreement: “**While** Ito (2018) argues that…, Mwangi (2021) suggests that…”",
        "Building on: “Mwangi (2021) **extends** Ito’s (2018) findings to rural areas.”"
      ]},
      {tip:"The words that introduce a source in your sentence (“Ito argues…”, “According to Mwangi…”) are also called a [[signal-phrase|signal phrase]]. Vary them, but only choose verbs whose meaning you intend."}
    ]},
    {h:"Putting it together", body:[
      "Here is one short paragraph that uses most of the skills in this lesson. The sources are invented.",
      {ex:"Household rainwater tanks have been promoted in many dry regions as a way to cut water costs (Mensah, 2021; Rao, 2019). Mensah (2021) surveyed 300 households in two towns and found that tank owners paid about a third less for water. However, Rao (2019) questions whether these savings last, noting that many tanks were not maintained after five years. Taken together, these studies suggest that tanks can reduce costs, but only where maintenance is supported.", label:"Worked example: sources in a paragraph"},
      {list:[
        "Sentence 1: non-integral citation of two sources, present perfect for the general picture.",
        "Sentence 2: integral citation, past simple for what one study did and found.",
        "Sentence 3: integral citation with an evaluative verb (“questions”) showing disagreement, plus “noting that” for its evidence.",
        "Sentence 4: the writer’s own synthesis and claim, hedged (“suggest”, “can”)."
      ]},
      "Notice that the final sentence has no citation: it is the writer’s own conclusion. Your voice belongs in your paragraphs too, usually at the start (the topic sentence) and the end.",
      {terms:["integral-citation","non-integral-citation"]}
    ]}
   ],
   try:[
    {id:"e1u3-l3-x1", type:"sort", q:"Is each citation integral (the author is part of the sentence) or non-integral (the author is outside it)?", buckets:["Integral","Non-integral"], items:[
      {t:"Nkosi (2020) argues that the tax is unfair to small firms.", b:0, why:"“Nkosi” is the subject of the verb “argues”: integral."},
      {t:"The tax may be unfair to small firms (Nkosi, 2020).", b:1, why:"The name is in brackets, outside the sentence’s grammar: non-integral."},
      {t:"According to Nkosi (2020), the tax is unfair to small firms.", b:0, why:"The name is part of the sentence (in the phrase “According to Nkosi”), so this is integral, even though the year is in brackets."},
      {t:"Several studies have examined the tax [3, 7].", b:1, why:"A numbered citation outside the grammar of the sentence: non-integral."},
      {t:"Nkosi’s (2020) survey of 200 firms found higher costs.", b:0, why:"The author’s name is part of the subject (“Nkosi’s survey”): integral."}
    ]},
    {id:"e1u3-l3-x2", type:"mcq", q:"Which sentence uses the reporting verb correctly?", options:[
      {t:"Ruiz (2020) describes the reform as a turning point for rural schools.", ok:true, why:"Correct. “Describe” takes an object and can add “as” + description: “describe X as Y”."},
      {t:"Ruiz (2020) describes that the reform was a turning point for rural schools.", why:"“Describe” doesn’t take a “that” clause. Use “describes the reform as…”, or a verb like “argues that”."},
      {t:"Ruiz (2020) discusses about the reform and its effects on rural schools.", why:"“Discuss” takes a direct object, with no “about”: “discusses the reform”."},
      {t:"Ruiz (2020) emphasises on the reform’s effects on rural schools.", why:"“Emphasise” takes a direct object, with no “on”: “emphasises the reform’s effects”."}
    ]},
    {id:"e1u3-l3-x3", type:"match", q:"Match each reporting verb to the pattern it is used with here.", pairs:[
      ["Lee (2018) argues…","…that prices will fall.","“Argue” is followed by a that-clause."],
      ["Wu (2019) criticises the study…","…for its small sample.","“Criticise X for Y” gives the reason for the criticism."],
      ["Ali (2017) defines resilience…","…as the ability to recover after a shock.","“Define X as Y” gives the definition."],
      ["Diaz (2022) focuses…","…on urban schools.","“Focus” takes the preposition “on”."]
    ]},
    {id:"e1u3-l3-x4", type:"mcq", q:"Amara has read a study and is convinced its finding is well supported. Which verb shows her readers that she **accepts** the finding?", options:[
      {t:"Osei (2022) demonstrates that the new seed variety needs less water.", ok:true, why:"Right. “Demonstrates” (like “shows” and “establishes”) tells the reader that the writer accepts the finding as well supported."},
      {t:"Osei (2022) claims that the new seed variety needs less water.", why:"“Claims” keeps a distance and can even suggest doubt: the opposite of what Amara wants."},
      {t:"Osei (2022) speculates that the new seed variety needs less water.", why:"“Speculates” suggests the idea is a guess without strong evidence."},
      {t:"Osei (2022) alleges that the new seed variety needs less water.", why:"“Alleges” is used for accusations that are not proven. It suggests doubt and sounds odd for a research finding."}
    ]},
    {id:"e1u3-l3-x5", type:"spot", q:"Tap each part with a **grammar error in how the source is reported**. Some parts are correct.", ask:"error", parts:[
      {t:"Rao (2019) questions whether the savings last,", flag:false, why:"Correct: “question” + a whether-clause."},
      " ",
      {t:"noting that many tanks were not maintained.", flag:false, why:"Correct: “noting that” + clause adds the source’s evidence."},
      " ",
      {t:"According to Rao’s study, it shows that costs rose later.", flag:true, why:"Two subjects for one idea (“According to Rao’s study” and “it shows”). Write “Rao’s study shows that…” or “According to Rao (2019), costs rose later.”"},
      " ",
      {t:"Mensah and Osei (2021) argues that training helps.", flag:true, why:"Two authors make a plural subject, so the verb is “argue”: “Mensah and Osei (2021) argue that…”."},
      " ",
      {t:"Diaz (2022) suggests that councils fund repairs.", flag:false, why:"Correct: “suggest that” + clause. (Not “suggests councils to fund”.)"},
      " ",
      {t:"Wu (2019) also mentions about the cost of spare parts.", flag:true, why:"“Mention” takes a direct object, with no “about”: “Wu (2019) also mentions the cost of spare parts.”"}
    ]},
    {id:"e1u3-l3-x6", type:"mcq", q:"Lucía is writing an APA-style literature review in psychology. She is reporting what one specific study did and found. Which sentence follows APA’s tense guidance?", options:[
      {t:"Park (2020) tested 80 adults and found that short naps improved recall.", ok:true, why:"Right. APA recommends the past tense (or present perfect) for describing others’ research, and the past simple suits one study’s procedure and results."},
      {t:"Park (2020) tests 80 adults and finds that short naps improved recall.", why:"The present tense is common in humanities writing about texts, but APA recommends past or present perfect for others’ research. It also mixes tenses (“finds… improved”)."},
      {t:"Park (2020) will test 80 adults and find that short naps improve recall.", why:"The future tense is for plans, such as in a proposal. This study has already been done."},
      {t:"Park (2020) had tested 80 adults and had found that short naps improved recall.", why:"The past perfect is for something earlier than another past time. Here there is no second past time, so the simple past is clearer."}
    ]},
    {id:"e1u3-l3-x7", type:"order", q:"Put these sentences into a short paragraph that moves from the general picture, to specific studies, to the writer’s own conclusion.", items:[
      {t:"Peer tutoring has been widely used in universities to support first-year students (Brown, 2017; Sato, 2020).", why:"General picture first, with a non-integral citation of two sources and the present perfect."},
      {t:"Brown (2017) compared tutored and untutored students and found higher pass rates in the tutored group.", why:"Then one specific study, integral, in the past simple."},
      {t:"However, Sato (2020) notes that the tutored students in Brown’s study were mostly those who already attended classes.", why:"“However” and “Brown’s study” point back to the previous sentence: a second, later source adds a limitation."},
      {t:"These findings suggest that peer tutoring helps, but only if it reaches students who are at risk of dropping out.", why:"The writer’s own synthesis comes last, hedged with “suggest”."}
    ]}
   ],
   apply:{
    intro:"Use a real article or chapter from your field. If you can’t access one, [[open-access-term|open-access]] articles are free to read (for example through a library search or a journal’s website).",
    tasks:[
     {t:"Build your own reporting verb table", how:[
       "Read the introduction or literature review of one article.",
       "Copy every sentence that reports a source (up to ten).",
       "For each, note: integral or non-integral; the reporting verb; its pattern (that-clause, object, as, preposition); its tense.",
       "Circle any verb that shows the author’s stance (accepting, doubting, disagreeing)."
     ], write:"Sentence… integral/non-integral… verb… pattern… tense… stance…"},
     {t:"Rewrite sentences both ways", how:[
       "Choose three findings from your reading.",
       "Write each one twice: once with an integral citation and once with a non-integral citation, in the style your course uses.",
       "For one of them, write a sentence that combines it with a second source (agreement or disagreement)."
     ], write:"Finding 1 integral… non-integral… Finding 2… Finding 3… Combined sentence…"}
    ],
    proof:"A table of up to ten reporting sentences analysed for citation type, verb pattern, tense and stance, plus three findings written both ways and one sentence combining two sources."
   },
   read:[
    {book:"phrasebank", where:"“Referring to sources”", note:"Includes phrases for referring to a previous study with the researcher, the time, the investigation or the topic prominent, and a short note on verb tenses."},
    {book:"owg", where:"Section 12.6 “Editing Focus: Integrating Sources and Quotations”", note:"“Select the Right Signal Phrase”, “Quote Smoothly and Correctly” and “Explain and Clarify Quotations”."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e1u3-l4", title:"Writing in moves: introductions, abstracts and emails", minutes:60,
   hook:{q:"The linguist John Swales studied many research article introductions in different fields. What did he find?", options:["Every introduction is unique, so there is no pattern to learn","Many follow a similar sequence of three “moves”","Most start by describing the method","Most start with the author’s personal story"], answer:1, reveal:"**Many follow a similar sequence of three moves.** In *Genre Analysis* (1990), Swales described how introductions often establish a research area, show a gap or problem in it, and then announce how the paper fills that gap. He called it the CARS model: “Create a Research Space”. Patterns like this make short, high-stakes texts easier to write. This lesson uses the idea of moves for introductions, abstracts and emails to lecturers."},
   goals:[
     "Explain what a rhetorical move is, and why short academic genres have typical moves",
     "Identify the three moves of the CARS model in an introduction and use language for each",
     "Identify the five common moves of an abstract and choose suitable tenses",
     "Write a clear, polite email to a lecturer or supervisor, with a suitable greeting for the context",
     "Make requests politely in English without sounding either demanding or unclear"
   ],
   learn:[
    {h:"What is a move?", body:[
      {lead:"Think of a wedding, a job interview or a phone call to a doctor’s surgery. The details change every time, but the steps are recognisable: a greeting, the business, a closing. People expect them, and they notice when one is missing."},
      "Written genres work the same way. A [[rhetorical-move|move]] is a section of a text that does one job for the reader, such as “show why this topic matters” or “ask for a meeting”. A move can be one sentence or several. Linguists who study [[genre-academic|academic genres]] describe the typical moves of each genre, and the order they usually come in.",
      "Moves are not a fixed template. Writers skip, repeat or reorder them, and fields differ. But knowing the usual moves gives you a checklist (“Have I shown the gap?”) and a set of phrases for each job. That is especially useful for short texts where every sentence counts: introductions, abstracts and emails."
    ]},
    {h:"Introductions: Create a Research Space", body:[
      "The [[cars-model|CARS model]] (Create a Research Space), from John Swales’s *Genre Analysis: English in Academic and Research Settings* (1990), describes three moves in research article introductions:",
      {fig:'<svg viewBox="0 0 340 300"><polygon class="d-lup" points="10,10 330,10 290,96 50,96" stroke-width="2"/><text x="170" y="40" text-anchor="middle">Move 1: Establish a territory</text><text class="s" x="170" y="60" text-anchor="middle">The topic matters; what is</text><text class="s" x="170" y="76" text-anchor="middle">already known</text><polygon class="d-gold" points="54,104 286,104 250,190 90,190" stroke-width="2"/><text x="170" y="134" text-anchor="middle">Move 2: Establish a niche</text><text class="s" x="170" y="154" text-anchor="middle">A gap, problem or</text><text class="s" x="170" y="170" text-anchor="middle">open question</text><polygon class="d-sage" points="94,198 246,198 216,284 124,284" stroke-width="2"/><text x="170" y="226" text-anchor="middle">Move 3:</text><text x="170" y="244" text-anchor="middle">Occupy the niche</text><text class="s" x="170" y="264" text-anchor="middle">This study’s aim</text></svg>', alt:"A funnel in three layers, wide at the top. Move 1, establish a territory: the topic matters and what is already known. Move 2, establish a niche: a gap, problem or open question. Move 3, occupy the niche: this study’s aim.", cap:"The CARS model as a funnel: from a broad, shared area down to what this paper will do (after Swales, 1990)."},
      {table:[["Move","Common steps (Swales, 1990)","Example language"],["1. Establish a territory","Claim the topic is important; make general statements; review previous research","“X is a growing concern in…”, “Recent studies have examined…”"],["2. Establish a niche","Counter-claim; indicate a gap; raise a question; continue a tradition","“However, little is known about…”, “Few studies have…”, “It remains unclear whether…”"],["3. Occupy the niche","State the purpose or describe the present research; announce main findings; outline the structure","“This study examines…”, “The aim of this paper is to…”, “Section 2 describes…”"]]},
      "Move 2 is the hinge. It often starts with a contrast word (“However,…”, “Yet…”, “Although…”) and uses negative or limiting words: “little”, “few”, “limited”, “remains unclear”, “has not been”. Research Skills explains how to find a real gap in the literature ({{research-gap}}); this is the language for announcing it.",
      "Two cautions. The CARS model describes **research article** introductions; a short student essay usually uses a simpler version: context, focus, then [[thesis-statement|thesis]] (and sometimes a plan). And Swales himself revised the model in later work, and later researchers found that fields differ, for example in how much previous research Move 1 reviews and whether Move 3 announces findings. Use it as a map, not a rule.",
      {ex:"[Move 1] Food waste has become a major concern for city governments, and several studies have estimated its costs for households. [Move 2] However, few studies have examined food waste in school canteens, where meals are planned in advance. [Move 3] This study measures plate waste in six primary schools and asks how menu planning affects it.", label:"Worked example: a three-sentence introduction (invented)"}
    ]},
    {h:"Abstracts: a whole paper in one paragraph", body:[
      "An [[abstract-paper|abstract]] is a short summary of a whole paper, often somewhere around 150–300 words (each journal, conference or course sets its own limit). Many people read only the abstract, so it must make sense on its own. The applied linguist Ken Hyland (2000) described five common [[abstract-moves|abstract moves]]:",
      {ol:[
        "**Introduction:** the context and why the research matters.",
        "**Purpose:** the aim, question or thesis.",
        "**Method:** what was done, with whom or what, and how.",
        "**Product:** the main findings or argument.",
        "**Conclusion:** what the findings mean, and implications or applications."
      ]},
      "Not every abstract has all five; many skip the introduction and start with the purpose. **Structured abstracts**, common in medicine and some sciences, put headings on the moves (Background, Methods, Results, Conclusions). Always follow the journal’s or course’s instructions.",
      "Tense often changes from move to move. A common pattern: **present** for the general context and for what the findings mean, **past** for what you did and found.",
      {ex:"[Introduction] School canteens produce large amounts of food waste. [Purpose] This study investigated how menu planning affects plate waste in primary schools. [Method] Waste was weighed after lunch for four weeks in six schools in two regions. [Product] Schools that let pupils choose portion sizes wasted about a quarter less food. [Conclusion] These results suggest that small changes to serving practices can reduce waste without increasing costs.", label:"Worked example: an abstract in five moves (invented)"},
      {tip:"Write the abstract last, when you know what the paper actually found. Then check: could a reader who sees only the abstract say what you did, what you found and why it matters?"}
    ]},
    {h:"Emails to lecturers and supervisors: the moves", body:[
      "An [[academic-email|email to a lecturer or supervisor]] is a short genre with moves too. It is often your first impression, and the reader may receive dozens of emails a day. A clear email is a polite email: it saves them time.",
      {ol:[
        "**Subject line:** the topic and what you need. “Extension request: Essay 2, Global Health module” beats “Question” or an empty subject.",
        "**Greeting:** title and family name, unless they have told you otherwise (see the next section).",
        "**Who you are:** if they might not know, give your name, course or module and group.",
        "**Purpose:** one sentence saying why you are writing. “I am writing to ask whether…”",
        "**Details:** only what they need to answer: dates, what you have already tried, attachments.",
        "**Request:** a clear, polite question they can answer.",
        "**Closing:** thanks and a sign-off (“Best regards,” “Kind regards,” “Thank you,”), then your full name."
      ]},
      {ex:"Subject: Request for a short meeting about my research proposal\n\nDear Dr Haddad,\n\nI am a first-year MSc student in Environmental Science (Dr Lin’s tutorial group). I am writing to ask whether you would have time for a 15-minute meeting about my research proposal.\n\nI would like to use your soil data for my project, and I have two questions about the sampling methods described in your 2021 report. I could come to your office hours on Monday 10 March, or meet online at another time that suits you.\n\nThank you for considering my request.\n\nKind regards,\nOluwaseun Adeyemi", label:"Worked example: a meeting request", mono:true},
      "Notice the dates: “Monday 10 March” can’t be misread. A date like “10/03” means 10 March in many countries but 3 October in others, including the United States."
    ]},
    {h:"Greetings and titles: there is no single world standard", body:[
      "How to address an academic depends on the country, the institution and the person. A form that is respectful in one place can feel cold, or too familiar, in another. Some examples:",
      {list:[
        "In the **United States and Canada**, “Professor” plus family name is widely used for university teachers in general, and “Dr” is also common.",
        "In the **United Kingdom, Ireland, Australia and New Zealand**, “Professor” is usually a senior rank, so many lecturers are addressed as “Dr” plus family name; many also invite students to use their first name.",
        "In **many other countries**, across parts of Europe, Asia, Africa and Latin America, academic titles are used more formally and consistently, and a first name may feel too familiar. When writing in English to someone there, use the title their staff page shows, with their family name (“Dear Professor Tanaka”, “Dear Dr Moreno”).",
        "In **some countries**, “Dear Sir” or “Respected Sir/Madam” is a normal polite opening. In international academic email, a title and name is safer, because it is specific and doesn’t guess the reader’s gender."
      ]},
      "A good rule anywhere: **start formal, then follow their lead.** Use their title and family name at first. If they sign their reply with their first name or tell you to use it, you can switch. If you don’t know whether someone has a doctorate, “Dear Professor [family name]” in North America, or “Dear Dr [family name]” in the UK system, is rarely a problem; checking their staff web page is even better.",
      {warn:"In a first email to a university lecturer, especially in countries such as the UK, the US or Australia, avoid “Hi teacher”, “Dear Teacher”, a first name alone, or “Hey”. Some expressions that are polite and normal in one variety of English, such as “Kindly revert” (meaning “please reply”) or “Please do the needful” (“please do what is necessary”) in parts of South Asia, may confuse readers elsewhere. They are not errors, but they don’t travel well. In an international email, a specific request (“Could you reply by Friday?”) is clearest."}
    ]},
    {h:"Polite requests in English", body:[
      "English often makes requests polite by making them **indirect**: asking about possibility or willingness instead of stating a want. Direct forms like “I want…” or “Send me…” are not rude in every culture, but in English academic email they can sound like demands.",
      {table:[["Too direct","More polite"],["I want an extension.","Would it be possible to have a short extension?"],["Send me the slides.","Could you let me know where I can find the slides?"],["Reply ASAP.","I would be grateful for a reply by Friday 14 March, if possible."],["You didn’t answer my email.","I am writing to follow up on my email of 3 March about…"]]},
      "Polite does not mean vague. Say exactly what you need and by when. If you get no reply, wait a few working days and send a short, friendly follow-up. In person, office hours are often the quickest way to resolve things ({{office-hours}} in Unit 4).",
      {tip:"Before you press send: Is the subject specific? Is the purpose in the first two sentences? Is there one clear question? Did you attach what you mentioned? Is your full name at the end? Research Skills’ {{email-writing}} entry covers general email skills."},
      {terms:["rhetorical-move","cars-model","abstract-moves","academic-email"]}
    ]}
   ],
   try:[
    {id:"e1u3-l4-x1", type:"order", q:"Put these sentences into the order of the CARS model.", items:[
      {t:"Urban heat is a serious health risk in many fast-growing cities.", why:"Move 1: establishes the territory by claiming the topic matters."},
      {t:"Previous studies have measured temperatures in city centres and parks.", why:"Move 1 continues: reviews what earlier research has done."},
      {t:"However, little is known about temperatures inside informal housing.", why:"Move 2: “However, little is known” indicates a gap."},
      {t:"This study recorded indoor temperatures in 40 homes over one hot season.", why:"Move 3: occupies the niche by describing the present research."}
    ]},
    {id:"e1u3-l4-x2", type:"mcq", q:"Which sentence most clearly does the job of **Move 2** (establishing a niche)?", options:[
      {t:"However, it remains unclear whether these programmes work for adult learners.", ok:true, why:"Right. “However” plus “it remains unclear whether” points to a gap: an open question this paper can address."},
      {t:"Literacy programmes have been studied in many countries.", why:"This reviews previous research, which is Move 1 (establishing the territory)."},
      {t:"This paper reports a study of 120 adult learners in two cities.", why:"This describes the present research, which is Move 3 (occupying the niche)."},
      {t:"Literacy is essential for full participation in society.", why:"This claims the topic is important, a typical first step of Move 1."}
    ]},
    {id:"e1u3-l4-x3", type:"match", q:"Match each abstract sentence to its move (Hyland’s five moves).", pairs:[
      ["Mobile banking has spread rapidly in many low-income countries.","Introduction","It sets the context and shows why the topic matters."],
      ["This study asked whether mobile banking changes how small traders save.","Purpose","It states the aim or question."],
      ["We interviewed 60 market traders in three towns.","Method","It says what was done and with whom."],
      ["Most traders saved more often, but in smaller amounts.","Product","It gives the main finding."],
      ["These results suggest that savings products should allow very small deposits.","Conclusion","It interprets the finding and points to an application."]
    ]},
    {id:"e1u3-l4-x4", type:"mcq", q:"In an abstract, which sentence uses the **most usual** tense for reporting what the researchers did?", options:[
      {t:"Participants completed a questionnaire about their sleep.", ok:true, why:"Right. What the researchers did is finished, so most abstracts use the past simple for the method and results."},
      {t:"Participants complete a questionnaire about their sleep.", why:"The present simple is common for general truths and for what results mean, but the procedure happened in the past."},
      {t:"Participants will complete a questionnaire about their sleep.", why:"The future suits a proposal for research not yet done, not an abstract of a finished study."},
      {t:"Participants are completing a questionnaire about their sleep.", why:"The present continuous describes something happening now. The study is finished."}
    ]},
    {id:"e1u3-l4-x5", type:"mcq", q:"Sione is emailing a lecturer he has never met, at a university in an English-speaking country. Her staff page says “Dr Mei Lin, Lecturer in Statistics”. Which opening is the best choice?", options:[
      {t:"Dear Dr Lin,", ok:true, why:"Right. Her title and family name, as shown on her staff page, is respectful and accurate. If she replies and signs “Mei”, he can follow her lead."},
      {t:"Hi Mei,", why:"Using a first name in a first email to a lecturer can seem too familiar in many places. Start formal and wait for her lead."},
      {t:"Dear Sir,", why:"This guesses the reader’s gender (wrongly here) and ignores the name and title he already knows."},
      {t:"Dear Teacher,", why:"University lecturers are rarely addressed this way in English-speaking countries. Her title and name are better."}
    ]},
    {id:"e1u3-l4-x6", type:"spot", q:"Dmitri wrote this email to his supervisor, Professor Okafor. Tap each part that is **unclear or too direct** for an academic email in English. Some parts are fine.", ask:"needs rewriting", parts:[
      {t:"Subject: question", flag:true, why:"Too vague: the supervisor can’t tell what it’s about or how urgent it is. Try “Feedback on Chapter 2 draft: deadline question”."},
      " ",
      {t:"Dear Professor Okafor,", flag:false, why:"Fine: a title and family name is a safe, respectful greeting."},
      " ",
      {t:"I am writing about the draft of Chapter 2 that I sent on Monday 3 March.", flag:false, why:"Fine: it states the purpose early and gives an unambiguous date."},
      " ",
      {t:"I want your comments by tomorrow.", flag:true, why:"Too direct, and the deadline is very short. Try “Would it be possible to have your comments by Friday 14 March? I would like to revise the chapter before the progress meeting.”"},
      " ",
      {t:"I have attached the draft again for convenience.", flag:false, why:"Fine: it saves the reader from searching for the earlier email."},
      " ",
      {t:"Thanks in advance, D.", flag:true, why:"The supervisor may need his full name to find his records. End with a closing and full name, for example “Kind regards, Dmitri Volkov”."}
    ]},
    {id:"e1u3-l4-x7", type:"mcq", q:"Which request is the clearest and most polite for an email to a lecturer?", options:[
      {t:"Would it be possible to submit my essay on Monday 17 March instead of Friday 14 March? I was ill this week, and I have attached a medical note.", ok:true, why:"Right. Indirect (“Would it be possible…”), specific (exact dates), with a reason and evidence attached."},
      {t:"I need an extension because I was ill.", why:"“I need” sounds like a demand, and it doesn’t say how long an extension or until when."},
      {t:"I was wondering if maybe it might be possible to perhaps have some more time, if that is not too much trouble.", why:"Very polite, but so vague and hedged that the lecturer can’t tell what is being asked."},
      {t:"Please give me until 17/3.", why:"Too direct for this request, and a date like “17/3” is clear only in day–month countries. Write the date in words."}
    ]}
   ],
   apply:{
    intro:"Use real texts from your field, and write about real or realistic situations. Keep your drafts private unless you choose to send them.",
    tasks:[
     {t:"Mark the moves in a real introduction and abstract", how:[
       "Find one open-access research article in your field.",
       "In the introduction, mark where each CARS move begins. Copy the sentence that shows the gap (Move 2).",
       "In the abstract, label each sentence with Hyland’s moves (Introduction, Purpose, Method, Product, Conclusion), and note its tense.",
       "Note any move that is missing, repeated or in a different order."
     ], write:"Article… Move 1 begins… Gap sentence… Abstract moves and tenses… Differences from the model…"},
     {t:"Draft an email to a lecturer or supervisor", how:[
       "Choose a realistic purpose: asking for a meeting, a short extension, feedback, or clarification of an assignment.",
       "Find out how people at your institution or in your country usually address lecturers (staff pages, a student handbook, or ask a classmate).",
       "Write the email using the seven moves from this lesson.",
       "Check it against the “before you press send” list."
     ], write:"Subject… Greeting… Who I am… Purpose… Details… Request… Closing…"}
    ],
    proof:"One introduction marked with CARS moves and a gap sentence, one abstract labelled with five moves and tenses, and one email draft that has all seven moves."
   },
   read:[
    {book:"phrasebank", where:"“Introducing work”", note:"Phrases for each job in an introduction: establishing importance, reviewing previous work, identifying a gap, stating the purpose and outlining the structure. Its introduction mentions Swales’s CARS model."},
    {book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Essentials of Business Communication” and “Email”", note:"Workplace email basics; the same habits help with academic email."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e1u3-l5", title:"Editing, proofreading and language tools", minutes:55,
   hook:{q:"Kenji’s grammar checker changes his sentence “These results may reduce costs” to “These results reduce costs”. The new sentence has no grammar errors. Is it a good change?", options:["Yes: shorter is always better","Yes: checkers know academic style best","No: it changes the meaning by removing the hedge","No: “reduce” is spelled wrong"], answer:2, reveal:"**No.** Both sentences are grammatical, but they say different things. “May reduce” is a careful claim; “reduce” states it as fact. If Kenji’s evidence is limited, the tool has made his writing less accurate. Grammar checkers and AI tools can be useful, but they don’t know what your evidence shows. This lesson covers editing and proofreading methods, and how to use language tools honestly and well."},
   goals:[
     "Tell editing from proofreading, and work from big problems to small ones",
     "Keep a personal error list and use it to check your own writing",
     "Use a checklist and techniques such as reading aloud and checking one problem at a time",
     "Describe what grammar checkers and AI tools do well and what they get wrong",
     "Use language tools within your institution’s rules, keep your own voice, and never present AI-generated text as your own work"
   ],
   learn:[
    {h:"Editing and proofreading are different jobs", body:[
      {lead:"Think of cleaning a room. First you decide where the furniture goes; then you dust. Dusting before you move the sofa wastes time."},
      "Research Skills describes three passes on a draft: revise, edit and proofread ({{revision-feedback}}). **Revising** fixes the argument and structure. [[editing|Editing]] improves paragraphs and sentences: clarity, flow, register, word choice, hedging. [[proofreading|Proofreading]] is the final check for surface errors: spelling, punctuation, small grammar slips, numbers, formatting and citations.",
      "This lesson focuses on the last two, because that is where language matters most. The order matters: there is no point correcting the commas in a paragraph you are about to delete.",
      {fig:'<svg viewBox="0 0 340 268"><defs><marker id="a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path class="d-inkf" d="M0 0 L10 5 L0 10 z"/></marker></defs><rect class="d-lup" x="20" y="8" width="300" height="62" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">Revise: the whole text</text><text class="s" x="170" y="52" text-anchor="middle">argument, structure, evidence</text><path class="d-ink" d="M170 72 V92" stroke-width="2" marker-end="url(#a5)"/><rect class="d-gold" x="50" y="96" width="240" height="62" rx="8" stroke-width="2"/><text x="170" y="120" text-anchor="middle">Edit: paragraphs, sentences</text><text class="s" x="170" y="140" text-anchor="middle">clarity, flow, register, hedging</text><path class="d-ink" d="M170 160 V180" stroke-width="2" marker-end="url(#a5)"/><rect class="d-sage" x="80" y="184" width="180" height="62" rx="8" stroke-width="2"/><text x="170" y="208" text-anchor="middle">Proofread: details</text><text class="s" x="170" y="228" text-anchor="middle">spelling, numbers, citations</text><text class="s" x="170" y="264" text-anchor="middle">Work from big to small.</text></svg>', alt:"Three boxes, each narrower than the one above, joined by downward arrows. Revise, the whole text: argument, structure, evidence. Edit, paragraphs and sentences: clarity, flow, register, hedging. Proofread, details: spelling, numbers, citations.", cap:"Three passes, from big to small. This lesson covers the last two."},
      {key:"Fix big things first. Edit sentences only after the structure is settled, and proofread last."}
    ]},
    {h:"Know your own patterns", body:[
      "Everyone makes the same few mistakes again and again. Writers whose first language isn’t English often have patterns linked to their other languages: for example, languages without articles can make “a/an/the” hard; languages that don’t mark plurals on nouns can make “-s” endings easy to forget. These patterns are normal. They are not a sign of poor ability.",
      "The most efficient way to improve is to find **your** patterns and check for them on purpose. Keep a personal **error list**:",
      {table:[["My error","Example from my work","Correct form"],["Missing article","Results show increase in…","Results show **an** increase in…"],["“informations”","The informations were…","The information **was**…"],["“discuss about”","Section 3 discusses about…","Section 3 discusses…"],["Verb agreement after a long subject","The cost of the new machines are…","The cost of the new machines **is**…"]]},
      "Build the list from feedback: every time a tutor, a writing centre or a checker marks the same type of problem twice, add it. Unit 2 explains the grammar behind the most common ones: [[article-grammar|articles]], [[countable-noun|countable and uncountable nouns]], [[subject-verb-agreement|subject–verb agreement]], [[run-on-sentence|run-on sentences]] and [[sentence-fragment|fragments]] ({{grammar-trouble-spots}}).",
      {tip:"Use your word processor’s search (often [[kbd:Ctrl]] + [[kbd:F]], or [[kbd:Cmd]] + [[kbd:F]] on a Mac) to hunt for your own errors: search for “informations”, “discuss about” or “the the”. A search finds every one in seconds."}
    ]},
    {h:"A checklist, one problem at a time", body:[
      "Your attention is limited. If you read once looking for everything, you will miss a lot. Many editors make several quick passes, each with one focus. Here is a checklist you can adapt.",
      {ol:[
        "**Task:** Does every paragraph help answer the question? Is the thesis clear in the introduction?",
        "**Paragraphs:** Does each one start with a clear [[topic-sentence|topic sentence]], and are links between them clear ([[transition-signal|transition signals]])?",
        "**Claims:** Is each claim as strong as its evidence, no stronger ([[hedging]])?",
        "**Sources:** Does every borrowed idea have a citation? Are reporting verbs in the right pattern (Lesson 3)?",
        "**Sentences:** Any run-ons or fragments? Any sentence you can’t read aloud in one breath?",
        "**Words and register:** Any informal words, contractions or vague words (“things”, “stuff”)? Any word you used without being sure of its meaning?",
        "**Your error list:** Check each item on it.",
        "**Details:** Spelling (one variety, used consistently), numbers, figure and table labels, and every in-text citation matching the reference list."
      ]},
      "US and UK spelling are both correct (“analyze/analyse”, “color/colour”, “program/programme” for a plan or course). Choose one, set your spelling checker to match, and stay consistent, unless your course or publisher requires one.",
      {warn:"Proofread the version you will submit, in the format you will submit. Converting to PDF or pasting into an online form can change line breaks, symbols and formatting."}
    ]},
    {h:"Techniques that help you see your own text", body:[
      "The hardest thing about proofreading your own work is that your brain knows what you *meant* to write, so it reads that instead of what is on the page. These techniques make your text look new again:",
      {list:[
        "**Read aloud**, slowly, or use your device’s or word processor’s read-aloud (text-to-speech) feature. Your ear notices missing words, repeated words and sentences that are too long.",
        "**Take a break** before proofreading: an hour helps, a day is better.",
        "**Change how it looks:** print it, change the font size, or read it on a different screen.",
        "**Read backwards, one sentence at a time**, from the last sentence to the first. Each sentence is separated from the flow of the argument, so you see its grammar.",
        "**Check numbers and names separately**, against your notes or sources.",
        "**Ask a reader:** a classmate, a writing group or your institution’s writing centre or language support. Many universities offer this free."
      ]},
      {tip:"If you record yourself reading a paragraph, keep the recording private. Listening back shows where you hesitate, and hesitation often marks a sentence that needs rewriting."}
    ]},
    {h:"Grammar checkers and AI tools: what they do well and badly", body:[
      "A [[grammar-checker|grammar checker]] is software that marks possible errors in spelling, grammar and punctuation and suggests corrections. Word processors have one built in, and there are standalone tools (some free, some paid). Many now use AI. General [[generative-ai|generative AI]] chatbots, built on [[large-language-model|large language models]], can also rewrite text, explain grammar or suggest phrases.",
      {table:[["Often helpful for","Often unreliable for"],["Typos and spelling","Whether your claim matches your evidence (they may remove or add hedges)"],["Many agreement and article errors","Technical terms in your field (they may “correct” them)"],["Explaining a grammar rule when you ask","Meaning: a fluent rewrite can say something different"],["Suggesting more concise or formal wording","Facts and sources: AI can invent them ([[hallucination]], [[hallucinated-citation|hallucinated citations]])"],["Spotting very long sentences","Your voice: rewrites tend to sound generic"]]},
      "Grammar checkers also mark correct English as wrong. They may flag a correct UK spelling if set to US English, or the reverse; flag a passive sentence that is the right choice in a method section ([[passive-voice]]); or suggest changes that suit one variety of English but not another. **A suggestion is a question, not an instruction.**",
      {ex:"Your sentence: “The data suggest that the policy may have reduced absences.”\nTool suggestion: “The data prove that the policy reduced absences.”\nProblem: the tool has removed two hedges and turned “suggest” into “prove”. The grammar is fine; the claim is now stronger than the evidence.", label:"Worked example: a “correction” that changes the claim"}
    ]},
    {h:"Using language tools honestly", body:[
      "Rules on AI and language tools **differ between institutions, courses and publishers, and they change**. Some allow grammar checking but not AI rewriting; some allow AI for brainstorming or language feedback if you declare it; some forbid it for certain assessments. So the first step is always to **read your institution’s and your course’s policy**, and ask if it is unclear.",
      "Whatever the policy, some principles hold almost everywhere:",
      {list:[
        "**Never present AI-generated text as your own work.** Submitting text a tool wrote, without permission and acknowledgement, is treated as academic misconduct in most institutions, much like copying from another person ({{plagiarism}}).",
        "**Disclose what the policy asks you to disclose:** which tool, what for, and how you checked it ([[ai-disclosure]]).",
        "**Keep your drafts and notes.** [[version-history|Version history]] shows how your work developed.",
        "**Check everything a tool gives you**, especially facts and references. Research Skills explains why in {{ai-chatbot-accuracy}} and covers research policies in {{ai-research-policies}}.",
        "**Protect other people’s data.** Don’t paste confidential material, interview data or someone else’s unpublished work into an online tool unless you are allowed to."
      ]},
      "Machine translation (writing in your first language and translating) is a language tool too, and policies often cover it. Even where it is allowed, check the result carefully: translation tools can choose the wrong technical term or lose a hedge.",
      "A good habit is to use tools to **learn**, not just to fix. Ask a tool to *explain* why a sentence is a run-on, then correct it yourself. Accept changes one at a time, never all at once. Add repeated problems to your error list. Over time you need the tool less, and your writing still sounds like you.",
      {warn:"AI-writing detectors are not reliable proof. A 2023 study by Liang and colleagues in the journal *Patterns* found that seven popular detectors, on average, wrongly labelled more than half of 91 essays that non-native speakers had written for the TOEFL English test as AI-generated, while judging essays by US school students almost perfectly. If you are ever questioned, your drafts, notes and version history are your best evidence."},
      {terms:["editing","proofreading","grammar-checker"]}
    ]}
   ],
   try:[
    {id:"e1u3-l5-x1", type:"order", q:"Put these tasks in the most efficient order for finishing an essay.", items:[
      {t:"Check that every section answers the question, and move or cut paragraphs if needed.", why:"Revising comes first: big structural changes would waste any earlier sentence-level work."},
      {t:"Improve topic sentences, transitions and hedging in each paragraph.", why:"Editing paragraphs and sentences comes once the structure is settled."},
      {t:"Check your personal error list item by item.", why:"Targeted checks for your own patterns come after the sentences are in their final form."},
      {t:"Proofread the final PDF for spelling, numbers and citations.", why:"Proofreading the exact version you’ll submit comes last, because conversion can introduce new problems."}
    ]},
    {id:"e1u3-l5-x2", type:"sort", q:"Is each task mainly **editing** or **proofreading**?", buckets:["Editing","Proofreading"], items:[
      {t:"Rewriting a long sentence as two clearer ones", b:0, why:"Improving clarity and flow is editing."},
      {t:"Replacing “a lot of” with “many” in a formal essay", b:0, why:"Changing word choice for register is editing."},
      {t:"Correcting “recieve” to “receive”", b:1, why:"Spelling is a surface error: proofreading."},
      {t:"Checking that “(Lopez, 2019)” matches the reference list", b:1, why:"Checking citation details is part of the final proofread."},
      {t:"Adding a hedge so a claim matches the evidence", b:0, why:"Adjusting the strength of claims is editing: it changes meaning, not just surface form."},
      {t:"Fixing a missing full stop at the end of a paragraph", b:1, why:"Punctuation slips are proofreading."}
    ]},
    {id:"e1u3-l5-x3", type:"spot", q:"Ana has “articles” on her error list. In this passage, tap **only the article errors**. Other parts are correct.", ask:"article error", parts:[
      "The survey asked ",
      {t:"a sample of 200 nurses", flag:false, why:"Correct: “a sample” is singular and countable, mentioned for the first time."},
      " about ",
      {t:"stress at work.", flag:false, why:"Correct: “stress” here means stress in general, an uncountable idea, so it takes no article."},
      " Most respondents reported ",
      {t:"increase in workload", flag:true, why:"“Increase” is a singular countable noun here, so it needs an article: “an increase in workload”."},
      " since ",
      {t:"the pandemic,", flag:false, why:"Correct: “the pandemic” refers to a specific event the reader can identify."},
      " and many described ",
      {t:"a unusually long working week.", flag:true, why:"Before a vowel sound, use “an”: “an unusually long working week”. The choice depends on the sound of the next word, not the noun."},
      " This suggests that ",
      {t:"hospitals need more staff.", flag:false, why:"Correct: a general plural (“hospitals” in general) usually takes no article."}
    ]},
    {id:"e1u3-l5-x4", type:"mcq", q:"Lucía writes in UK English. Her grammar checker underlines “analyse” and “behaviour” and suggests “analyze” and “behavior”. What should she do?", options:[
      {t:"Ignore the suggestions and set the checker’s language to UK English, since her spelling is correct and consistent.", ok:true, why:"Right. Both spellings are correct. The checker is set to US English, so it flags UK forms. Consistency is what matters, unless her course requires one variety."},
      {t:"Accept both changes, because the US spellings are the correct ones.", why:"Neither variety is “the correct one”. Accepting would also make her spelling inconsistent with the rest of her UK-spelled essay."},
      {t:"Accept one change and ignore the other, so the essay shows both spellings.", why:"Mixing varieties looks careless. Choose one and use it throughout."},
      {t:"Stop using a spelling checker altogether.", why:"The checker is still useful for real typos. She only needs to set it to the variety she uses."}
    ]},
    {id:"e1u3-l5-x5", type:"sort", q:"Under a typical policy, sort each action: **can be acceptable** if your institution’s policy allows it, or **presents work you didn’t write as your own** (misconduct under almost any policy).", buckets:["Can be acceptable if allowed","Presents others’ or AI work as yours"], items:[
      {t:"Asking a tool to explain why your sentence is a run-on, then fixing it yourself", b:0, why:"You do the writing; the tool helps you learn. Many policies allow this kind of language help, sometimes with disclosure."},
      {t:"Using the built-in spelling checker in your word processor", b:0, why:"Spelling checkers are widely accepted, though check rules for exams or language assessments."},
      {t:"Pasting a paragraph an AI chatbot wrote into your essay without saying so", b:1, why:"The text isn’t yours, and hiding its source presents it as your own work."},
      {t:"Getting feedback on your draft from your university’s writing centre", b:0, why:"Writing centres are designed for this: they comment, and you make the changes."},
      {t:"Running a published article through a paraphrasing tool and submitting the result as your own analysis", b:1, why:"The ideas and structure come from the article and the wording from the tool. Neither is your work, and it isn’t cited."},
      {t:"Asking an AI tool to write the whole essay and changing a few words", b:1, why:"Changing a few words doesn’t make the work yours. This is misconduct under almost any policy."}
    ]},
    {id:"e1u3-l5-x6", type:"match", q:"Match each tool problem to an example of it.", pairs:[
      ["Removes a hedge","Changes “may increase” to “increases”","The grammar stays correct but the claim becomes stronger than the evidence."],
      ["“Corrects” a technical term","Changes “ligand” to “legend” in a chemistry report","Specialist words are often missing from a checker’s dictionary."],
      ["Invents a source","Adds “(Smith, 2018)” to a sentence, but no such study exists","AI tools can produce references that look real but aren’t: a hallucinated citation."],
      ["Flattens your voice","Rewrites a clear personal argument into generic phrases","Rewrites tend towards common, general wording that sounds like everyone else."]
    ]},
    {id:"e1u3-l5-x7", type:"mcq", q:"Fatima’s course policy says: “You may use AI tools to check grammar, but you must say which tool you used.” She used an AI tool to correct grammar in her essay. What should she do?", options:[
      {t:"Add the disclosure the policy asks for (which tool, and that she used it for grammar), and keep her drafts.", ok:true, why:"Right. Her use is allowed, and disclosing it as the policy requires keeps her honest and protected. Drafts show how her work developed."},
      {t:"Say nothing, because grammar correction is too small to matter.", why:"The policy explicitly asks for disclosure. Leaving it out breaks the rule, even though the use itself is allowed."},
      {t:"Rewrite the essay without any tool, because AI is never allowed.", why:"Her course allows AI for grammar. Policies differ: read and follow the one that applies to you."},
      {t:"Also ask the tool to add some references, since it is already allowed.", why:"The policy allows grammar checking, not adding content. AI tools can also invent references, so every source must be one she has read."}
    ]}
   ],
   apply:{
    intro:"These tasks build habits you can use on every assignment. Keep your error list somewhere you’ll see it each time you write.",
    tasks:[
     {t:"Write and check a 150-word paragraph", how:[
       "Write a 150-word paragraph on a topic from your studies: a claim, evidence with a citation, reasoning, and a link to the next idea.",
       "Leave it for at least an hour.",
       "Check it with the eight-point checklist from this lesson, one point at a time.",
       "Read it aloud (or use read-aloud) and mark any place you hesitated."
     ], write:"My paragraph… Problems found at each checklist point… Places I hesitated…"},
     {t:"Start your personal error list", how:[
       "Collect feedback on two or three pieces of your writing (tutor comments, writing-centre notes, or a checker’s suggestions you agreed with).",
       "Group the problems by type and count them.",
       "Write your top five with an example and the correct form, as in the table in this lesson."
     ], write:"Error 1… example… correct form… Error 2… Error 3… Error 4… Error 5…"},
     {t:"Write your own tool rules", how:[
       "Find your institution’s or course’s policy on AI and language tools (student handbook, course page or academic integrity page). If you are not studying now, find a public policy from any university.",
       "Write down what is allowed, what is not, and what must be disclosed.",
       "Write three personal rules for how you will use tools while keeping your own voice."
     ], write:"Policy source… Allowed… Not allowed… Must disclose… My three rules…"}
    ],
    proof:"A checked 150-word paragraph with notes from each checklist pass, a personal top-five error list with examples and corrections, and a short summary of a real AI policy with three personal rules."
   },
   read:[
    {book:"owg", where:"Section 15.6 “Editing Focus: Words Often Confused”", note:"Homonyms, homographs and homophones: the kind of error a spelling checker often misses."},
    {book:"owg", where:"Section 6.7 “Evaluation: Conventions, Clarity, and Coherence”", note:"A rubric you can turn into an editing checklist."},
    {book:"phrasebank", where:"“Being cautious”", note:"Hedging phrases, useful when a tool or a draft has made a claim too strong."}
   ]
  }
  ],
  checkpoint:["e1u3-q02","e1u3-q06","e1u3-q11","e1u3-q15","e1u3-q20","e1u3-q24","e1u3-q29","e1u3-q32","e1u3-q35","e1u3-q38","e1u3-q41","e1u3-q44"],
  codex:[
   {id:"essay-types", title:"Essay types and their shapes", aka:["essay structure","rhetorical modes","patterns of organisation"], tags:["academic English","writing","essays"], summary:"Argumentative, compare–contrast, cause–effect and problem–solution essays: how to spot each from the question, how each is organised, and the language that holds it together.",
    levels:{
     starter:[
      "Most university essays answer a question with a clear position, supported by evidence. Different questions ask for different kinds of thinking, so essays have a few common shapes. The **task word** in the question usually tells you which: “To what extent…?” asks for an argument; “Compare…” asks for similarities and differences; “Explain the causes…” asks for causes and effects; “How can … be solved?” asks for problems and solutions.",
      "Every shape keeps the same frame: an introduction with a [[thesis-statement|thesis]], a body and a conclusion. What changes is how the body is organised. An argument gives reasons and answers objections. A comparison goes block by block or point by point. A cause–effect essay follows causes to effects. A problem–solution essay moves from situation to problem, solution and evaluation.",
      {key:"Read the task word first, choose the shape that answers the question, and keep your main claim near the start."}
     ],
     builder:[
      {table:[["Type","Typical body","Key language"],["Argumentative","Reasons with evidence; counterargument and rebuttal","“This essay argues that…”, “Critics argue…; however,…”"],["Compare–contrast","Block (A, then B) or point by point","whereas, while, in contrast, similarly, likewise, unlike"],["Cause–effect","Causes, effects, or a chain","lead to, result in, result from, because of, as a result"],["Problem–solution","Situation, problem, solution, evaluation","“One possible solution would be…”, “This would…, although…”"]]},
      "Grammar matters in the signal language. “Whereas” and “while” join two clauses in one sentence; “In contrast,” and “Similarly,” begin a new sentence. “Because” is followed by a clause, but “because of” and “due to” by a noun phrase. “Result in” points from cause to effect, “result from” from effect to cause; mixing them reverses your meaning.",
      "Comparisons need a point (what do the differences show?), and causal claims need care: a correlation is not proof of cause, so writers hedge (“may contribute to”). Problem–solution essays are strongest when every solution is evaluated: cost, who benefits, who might be left out.",
      "Real essays often mix shapes, and lecturers use task words differently. “Discuss” usually wants a judgement, not a neutral list. When in doubt, check the marking criteria or ask.",
      "A quick planning routine: underline the task word, circle the topic words, box any limits, then write “This question asks me to…”. Choose the shape, draft a one-sentence thesis that makes a point, and plan one paragraph per reason, point of comparison, cause or solution."
     ],
     pro:[
      "These shapes overlap with what composition textbooks call **reasoning strategies** or **rhetorical modes** (OpenStax’s *Writing Guide with Handbook* lists analogy, cause and effect, classification and division, comparison and contrast, problem and solution, and definition). In real texts they are usually combined: a classification inside an argument, a comparison inside a proposal.",
      "The problem–solution pattern has a long history in text linguistics. Michael Hoey (1983) described a common **Situation–Problem–Response–Evaluation** sequence across many kinds of text, not only essays. Its evaluation step explains why a strong problem–solution essay doesn’t stop at the proposal: it judges it, and may loop back to a new problem if the response fails.",
      "Disciplines shape genres. Many science and engineering programmes rarely set essays at all, preferring reports with [[imrad|IMRaD]] headings; many humanities programmes expect longer essays where the argument develops across sections with few headings; professional fields may set reflective writing or case analyses. Expectations about where the thesis appears also vary between writing cultures: English-medium university writing usually states it early, while other traditions may build towards it. Neither is wrong, but markers in English-medium institutions usually expect the early statement.",
      "The five-paragraph essay is a school teaching model. University essays have as many paragraphs as the argument needs, and paragraph length follows the idea, not a formula."
     ]},
    related:["building-an-argument","argument-structure","hedging-and-boosting"], read:[{book:"owg", where:"Section 11.3 “Glance at Genre: Reasoning Strategies and Signal Words”"}],
    sources:[{t:"OpenStax Writing Guide with Handbook, 11.3 Glance at Genre: Reasoning Strategies and Signal Words", url:"https://openstax.org/books/writing-guide/pages/11-3-glance-at-genre-reasoning-strategies-and-signal-words"},{t:"Academic Phrasebank (University of Manchester)", url:"https://www.phrasebank.manchester.ac.uk/"}], checked:"2026-11"},
   {id:"building-an-argument", title:"Building an argument: claim, evidence, reasoning", aka:["CER","Toulmin model","counterargument and rebuttal","concession"], tags:["academic English","writing","argument"], summary:"How claims, evidence and reasoning fit together, how to answer counterarguments, and the grammar of concession (although, despite, while it is true that).",
    levels:{
     starter:[
      "An academic argument has three basic parts. The **claim** is what you want readers to accept. The **evidence** is the information that supports it: data, findings, examples. The **reasoning** explains why that evidence supports that claim. Think of the reasoning as a bridge between the evidence and the claim.",
      "Good arguments also face objections. A **counterargument** is a reasonable view against your claim; a **rebuttal** is your answer to it. Raising the strongest objection yourself and answering it fairly makes your argument more convincing, not less.",
      "English signals this with **concession**: admitting a point before making yours. “Although the scheme is expensive, it saves money over time.” The main clause (after the comma) carries the point you want remembered.",
      {key:"Claim + evidence + reasoning, then the strongest objection and your answer."}
     ],
     builder:[
      "After each piece of evidence, add a reasoning sentence: “This suggests that…”, “This matters because…”, “In other words,…”. Evidence without reasoning leaves the reader to guess the link.",
      "Three ways to answer an objection: **refute** it (its evidence is weak), **limit** it (true only in some cases), or **outweigh** it (true, but other factors matter more). Avoid the straw man, a weak version of the other side that is easy to knock down.",
      {table:[["Concession pattern","Grammar","Example"],["Although / Even though / While","+ clause","Although the sample was small, the results were consistent."],["Despite / In spite of","+ noun phrase or -ing","Despite the small sample, …"],["Despite the fact that","+ clause","Despite the fact that the sample was small, …"],["Admittedly, … However, …","two sentences","Admittedly, the sample was small. However, …"]]},
      "The three most common errors: using two linking words for one contrast (“Although…, but…”), writing “despite of”, and putting a clause straight after “despite” (“despite the sample was small”).",
      "Keep claims as strong as the evidence: hedge with “suggests”, “may”, “is likely to”, and keep [[booster|boosters]] (“clearly”, “undoubtedly”) for strong, consistent evidence.",
      "Match the evidence to the claim. One example can illustrate a point but can’t show it is common; a general claim (“most”, “often”) needs data or several studies. Introduce each kind of evidence with suitable language: “Data from… show that…”, “A study of 400 farmers found that…”, “For example,…”, “As the World Health Organization notes,…”."
     ],
     pro:[
      "The claim–evidence–reasoning (CER) framework is widely used in science education. It simplifies the model of the philosopher Stephen Toulmin, *The Uses of Argument* (1958), whose parts include the **claim**, the **data** (grounds), the **warrant** (the general principle linking data to claim), **backing** for the warrant, a **qualifier** (how certain the claim is) and a **rebuttal** (conditions under which the claim would not hold). In academic English the qualifier is usually realised as hedging, and Toulmin’s rebuttal as the limitations a careful writer admits.",
      "Information structure matters in concession. English tends to put new or important information at the end of a sentence, so the main clause after a concessive clause usually carries the writer’s point. Reversing the clauses reverses the emphasis even when the facts stay the same.",
      "Concession and counterargument are also stance devices. Phrases like “It could be argued that…” or “Some researchers maintain that…” attribute a view to others and mark distance from it; “Admittedly” signals that the writer accepts a point in part. Choosing these carefully is part of writing a balanced, credible argument.",
      "Whether to write “I argue” varies: many fields and journals accept first person, others prefer impersonal forms. See [[academic-register]] and follow your field’s guidance.",
      "Where to put the counterargument is a choice. It can have its own paragraph near the end of the body, come early so the rest of the essay answers it, or be handled point by point inside each body paragraph. The important thing is that it is the strongest objection, stated fairly, and that the reader can see your answer."
     ]},
    related:["essay-types","argument-structure","hedging-and-boosting","using-sources-in-language"], read:[{book:"owg", where:"Section 10.3 “Glance at Genre: Thesis, Reasoning, and Evidence”"}],
    sources:[{t:"OpenStax Writing Guide with Handbook, 11.3 Glance at Genre: Reasoning Strategies and Signal Words", url:"https://openstax.org/books/writing-guide/pages/11-3-glance-at-genre-reasoning-strategies-and-signal-words"},{t:"Academic Phrasebank (University of Manchester)", url:"https://www.phrasebank.manchester.ac.uk/"}], checked:"2026-11"},
   {id:"using-sources-in-language", title:"Using sources in your sentences", aka:["reporting verbs","integral and non-integral citation","signal phrases","reporting tense"], tags:["academic English","writing","sources"], summary:"Integral and non-integral citations, the grammar patterns of reporting verbs, tense choices when reporting sources, and combining several sources in one sentence.",
    levels:{
     starter:[
      "There are two ways to bring a source into a sentence. An **integral citation** puts the author in your sentence: “Mensah (2021) found that tanks cut water costs.” A **non-integral citation** keeps the author in brackets or a number: “Tanks can cut water costs (Mensah, 2021).” The first puts the researcher in focus; the second puts the idea in focus. Both are correct.",
      "In integral citations, the **reporting verb** (argues, found, describes, suggests) tells the reader what the source does and, often, how you see it. “Shows” means you accept the finding; “claims” keeps a distance.",
      "Each reporting verb has its own grammar. You *argue that* something is true, *describe* something *as* something, and *discuss* something (not “discuss about”).",
      {key:"Choose the focus (author or idea), choose the verb for its meaning, and use the verb’s grammar pattern."}
     ],
     builder:[
      {table:[["Pattern","Verbs"],["+ that-clause","argue, claim, suggest, find, show, note, conclude, report, state"],["+ object","describe, examine, discuss, investigate, analyse, question"],["+ object + as","describe, define, regard, characterise, see"],["+ object + for","criticise, praise, blame"],["+ preposition","focus on, comment on, refer to, object to"]]},
      "Common errors: “discuss about”, “describe that”, “emphasise on”, “suggest someone to do”, “mention about”, and double subjects such as “According to Rao’s study, it shows…”.",
      "Tense: the **present** for an author’s position or a still-relevant idea (“Rao argues”), the **past** for what a specific study did and found (“Rao surveyed… and found”), and the **present perfect** for research in general (“Several studies have shown”). APA Style recommends past or present perfect for others’ research; many humanities writers use the present for texts and authors. Stay consistent within a paragraph.",
      "Several sources can share a sentence: “Both Ito (2018) and Mwangi (2021) found…”, “While Ito (2018) argues…, Mwangi (2021) suggests…”, or “(Ito, 2018; Mwangi, 2021)”.",
      "Quotations must fit the grammar of your sentence: if you removed the quotation marks, the sentence should still be correct. A paraphrase still needs a citation and must change the structure as well as the words, or it becomes patchwriting.",
      "Your own voice belongs in the paragraph too. After reporting sources, add a sentence that says what they mean together, usually at the start or end of the paragraph, without a citation, because it is your conclusion."
     ],
     pro:[
      "The integral/non-integral distinction was described by John Swales in *Genre Analysis* (1990) and has been used in many corpus studies since. Swales counted a citation as integral when the author’s name has a grammatical role in the sentence, so “According to Mensah (2021),…” is integral too. Corpus studies, such as Ken Hyland’s work across eight disciplines (1999), report that the balance varies by field: non-integral citations are common everywhere, but writers in many humanities and social science fields use integral citations more often, foregrounding authors and their positions, while writers in many sciences and engineering fields favour non-integral citations, foregrounding findings. Numbered citation styles show the same contrast (“Mensah [4] found…” versus “…costs [4].”).",
      "Reporting verbs are a major resource for stance. Researchers such as Ken Hyland have classified them by what they report (research acts like “measure”, cognition acts like “believe”, discourse acts like “argue”) and by the attitude they signal (for example accepting, neutral, tentative or critical). Because evaluation is built into the verb, swapping “demonstrates” for “claims” can change your argument without changing a single fact.",
      "The Academic Phrasebank’s “Referring to sources” page includes phrases for referring to a previous investigation with the researcher, the time, the investigation or the topic prominent. It notes that the general tense patterns are “by no means rigid”. Treat tense guidance as a set of options, and follow the style guide your course or journal requires.",
      "For learners of English, the practical lesson is to learn reporting verbs as whole patterns, not single words: “argue that”, “describe X as Y”, “criticise X for Y”, “focus on”. [[learner-dictionary|Learner dictionaries]] show these patterns with real examples, and collecting them from articles in your own field shows which verbs your field prefers."
     ]},
    related:["building-an-argument","quote-paraphrase-summary","citation-styles"], read:[{book:"phrasebank", where:"“Referring to sources”"}],
    sources:[{t:"Academic Phrasebank: Referring to sources", url:"https://www.phrasebank.manchester.ac.uk/referring-to-sources/"},{t:"APA Style: Verb tense", url:"https://apastyle.apa.org/style-grammar-guidelines/grammar/verb-tense"},{t:"OpenStax Writing Guide with Handbook, 12.6 Editing Focus: Integrating Sources and Quotations", url:"https://openstax.org/books/writing-guide/pages/12-6-editing-focus-integrating-sources-and-quotations"}], checked:"2026-11"},
   {id:"introductions-and-abstracts", title:"Introductions and abstracts: moves and language", aka:["CARS model","Create a Research Space","abstract moves","rhetorical moves"], tags:["academic English","writing","genre"], summary:"Swales’s CARS model for introductions, Hyland’s five abstract moves, and the language and tenses that go with each move.",
    levels:{
     starter:[
      "Short academic texts often follow a recognisable sequence of **moves**: sections that each do one job for the reader.",
      "Research article introductions often follow the **CARS model** (Create a Research Space), described by John Swales in 1990. **Move 1** shows the topic matters and what is known. **Move 2** shows a gap or problem (“However, little is known about…”). **Move 3** says what this paper does (“This study examines…”). It works like a funnel: from broad to specific.",
      "Abstracts compress a whole paper into one paragraph. A common pattern has five moves: introduction (context), purpose, method, product (findings) and conclusion.",
      {key:"Moves are a map, not a template: use them to check that your introduction shows a gap and your abstract says what you did and found."}
     ],
     builder:[
      {table:[["CARS move","Typical steps","Language"],["1. Establish a territory","claim importance; generalise; review research","“X has attracted growing attention…”"],["2. Establish a niche","counter-claim; indicate a gap; raise a question; continue a tradition","“However, few studies have…”, “It remains unclear whether…”"],["3. Occupy the niche","state the purpose or present research; announce findings; outline structure","“This paper aims to…”, “Section 3 presents…”"]]},
      "Ken Hyland (2000) described five abstract moves: **Introduction**, **Purpose**, **Method**, **Product** and **Conclusion**. Many abstracts omit the introduction. Structured abstracts (Background, Methods, Results, Conclusions) make the moves into headings.",
      "Tense often follows the moves: present for context and implications, past for method and results, present perfect for the state of research (“Studies have shown…”).",
      "A student essay introduction is usually simpler: context, focus, thesis, and sometimes a short plan.",
      "Move 2 is the hinge of an introduction. It usually begins with a contrast word (“However,”, “Yet”, “Although…”) and uses limiting words: “little”, “few”, “limited”, “remains unclear”, “has not been examined”. Check that your gap is real and specific: “No one has studied X” is a strong claim that is often untrue, so “Few studies have examined X in Y” is usually safer and more precise.",
      "Abstracts have their own checks: does the purpose sentence match the paper’s actual aim, are the main numbers the same as in the results, and does the conclusion claim no more than the findings support?"
     ],
     pro:[
      "Swales’s 1990 model lists steps under each move: in Move 1, claiming centrality, making topic generalisations and reviewing items of previous research; in Move 2, counter-claiming, indicating a gap, question-raising or continuing a tradition; in Move 3, outlining purposes or announcing present research, announcing principal findings and indicating the article’s structure. Swales revised the model in later work, and genre researchers have shown variation across disciplines and languages, for example in how much literature Move 1 reviews and whether Move 3 announces findings. Introductions in some fields and languages state the gap less directly.",
      "Move analysis is a method in genre research: analysts label each sentence of many texts by its function and look for patterns. Hyland’s five-move model of abstracts comes from this tradition (*Disciplinary Discourses*, 2000) and has been widely used to compare abstracts across fields.",
      "Practical use: draft your introduction’s Move 2 sentence early, because it defines your contribution; write the abstract last, when your findings are fixed; and check the target journal’s abstract format and word limit before you start. Research Skills covers finding a genuine gap in {{research-gap}}.",
      "Moves also help when reading. Skimming a paper’s introduction for its Move 2 sentence quickly tells you what problem the authors think they solve, and reading an abstract move by move tells you whether the method and findings are relevant to you before you read the whole paper."
     ]},
    related:["essay-types","using-sources-in-language","research-gap"], read:[{book:"phrasebank", where:"“Introducing work”"}],
    sources:[{t:"Academic Phrasebank: Introducing work", url:"https://www.phrasebank.manchester.ac.uk/introducing-work/"},{t:"Charles University Writing Point: Swales’ Create-a-Research-Space (CARS) model of research article introductions", url:"https://writing-point.fsv.cuni.cz/?p=721"},{t:"Example of Hyland’s (2000) five-move model in use (ERIC full text)", url:"https://files.eric.ed.gov/fulltext/EJ1076961.pdf"}], checked:"2026-11"},
   {id:"academic-emails", title:"Emails to lecturers and supervisors", aka:["academic email","email etiquette","writing to professors"], tags:["academic English","writing","communication"], summary:"The moves of a clear academic email, how forms of address differ between countries, and how to make requests politely in English.",
    levels:{
     starter:[
      "An email to a lecturer or supervisor is a short text with predictable parts: a **specific subject line**, a **greeting**, a line saying **who you are**, the **purpose**, the **details**, a **clear request**, and a **closing** with your full name.",
      "Greetings differ by country and person. A safe start is a title and family name (“Dear Dr Lin,” or “Dear Professor Lin,”). If they sign with their first name or invite you to use it, you can follow their lead.",
      "Polite English requests are often indirect: “Would it be possible to…?”, “Could you let me know…?”, “I would be grateful if…”. Polite also means clear: give exact dates and one clear question.",
      {key:"Start formal, be specific, ask one clear question, and sign with your full name."}
     ],
     builder:[
      {list:[
        "**United States and Canada:** “Professor” + family name is widely used for any university teacher; “Dr” is also common.",
        "**UK, Ireland, Australia, New Zealand:** “Professor” is usually a senior rank, so “Dr” + family name is common for lecturers, and many invite first names.",
        "**Many other countries:** titles are used more formally; use the title shown on the person’s staff page with their family name (“Dear Professor…”, “Dear Dr…”).",
        "**“Dear Sir”** is normal in some places but guesses gender; a title and name is safer internationally."
      ]},
      {table:[["Too direct","More polite"],["I want…","Would it be possible to…?"],["Send me…","Could you let me know where I can find…?"],["Reply ASAP.","I would be grateful for a reply by [date], if possible."]]},
      "Write dates in words (“Friday 14 March”): “14/03” and “03/14” are read differently in different countries. Wait a few working days before a short follow-up (“I am writing to follow up on my email of…”).",
      "Before sending, check: the subject says the topic and the request; the purpose is in the first two sentences; there is one clear question; attachments are attached; your full name, course and group are at the end. If the lecturer has said how they prefer to be contacted (email, a course forum, office hours), use that channel."
     ],
     pro:[
      "Forms of address carry social meaning that varies between and within cultures, institutions and generations. Some academics see first names as friendly and equal; others see titles as basic respect, and the same person may expect different forms from undergraduates and doctoral students. Varieties of English also have different polite formulas: “Kindly revert” (“please reply”), “Respected Sir/Madam” or “Please do the needful” are normal in some regions and unfamiliar in others. None is wrong; in international academic email, plain, specific requests travel best.",
      "Indirect requests in English often use past or conditional forms (“I was wondering whether…”, “Would it be possible…”) to soften the imposition. Too much softening, though, can hide the request. A useful test: can the reader answer in one line?",
      "Practical habits: use your institution’s email account; one topic per email; attach what you mention; check the course handbook or website first, so you don’t ask what is already answered; and never send an angry email the same day. For general email skills, see {{email-writing}}; for meeting in person, {{office-hours}}.",
      "Supervisors and lecturers also read tone in what is missing. An email with no greeting, no name or no context can seem abrupt even if every sentence is polite. Equally, a long apology before the request can hide what you need. A short greeting, one line of context, a clear request and thanks usually reads as respectful in most academic cultures."
     ]},
    related:["email-writing","office-hours","introductions-and-abstracts"], read:[{book:"wss", where:"Section 2.3 “Communication and Calendar Applications”: “Essentials of Business Communication” and “Email”"}],
    sources:[{t:"OpenStax Workplace Software and Skills", url:"https://openstax.org/details/books/workplace-software-skills"}], checked:"2026-11"},
   {id:"editing-proofreading", title:"Editing and proofreading your own writing", aka:["self-editing","error log","proofreading checklist"], tags:["academic English","writing","revision"], summary:"Working from big problems to small ones, keeping a personal error list, checking one thing at a time, and techniques such as reading aloud.",
    levels:{
     starter:[
      "**Editing** improves paragraphs and sentences: clarity, flow, word choice, register and how strongly claims are made. **Proofreading** is the final check for surface errors: spelling, punctuation, small grammar slips, numbers and citations. Both come after **revising**, which fixes the argument and structure.",
      "Work from big to small. Then check one thing at a time, because your attention is limited: one pass for your common errors, one for citations, one for spelling.",
      "Your brain reads what you meant to write, not what you wrote. Reading aloud, taking a break and changing how the text looks all help you see it fresh. Keep a short list of the mistakes you make most often, and check for those on purpose.",
      {key:"Big to small, one thing at a time, and look for your own patterns."}
     ],
     builder:[
      "Keep a **personal error list** built from feedback: your top errors, an example of each, and the correct form. Typical items for many learners: articles, plural -s, uncountable nouns (“informations”), subject–verb agreement after long subjects, run-on sentences, and reporting-verb patterns (“discuss about”).",
      {ol:["Task: every paragraph answers the question; the thesis is clear.","Paragraphs: clear topic sentences and transitions.","Claims: hedged to match the evidence.","Sources: every borrowed idea cited; reporting verbs in the right pattern.","Sentences: no run-ons or fragments.","Words: formal, precise, no vague words.","Your error list, item by item.","Details: one spelling variety, numbers, labels, citations matching references."]},
      "Use search ([[kbd:Ctrl]]/[[kbd:Cmd]] + [[kbd:F]]) to hunt for your own typical errors. Proofread the final file in the format you will submit, because conversion can change formatting and symbols.",
      "Helpful techniques: read aloud or use text-to-speech; take a break before proofreading; print the text or change its font; read sentences in reverse order to see each one’s grammar; check numbers and names against your notes; and ask a classmate, writing group or writing centre to read it.",
      "Proofread the final version, in the final format. Converting to PDF or pasting into an online form can change symbols, line breaks and formatting, and a last change made in a hurry often brings a new error with it."
     ],
     pro:[
      "Why one problem at a time? Proofreading for everything at once divides attention, and errors that don’t disrupt meaning (a missing article, a wrong preposition) are the easiest to read past. Targeted passes, and techniques that slow reading (reading aloud, reading sentences in reverse order), make those errors more visible.",
      "An error list also turns feedback into learning. Writers who notice their own recurring patterns can check for them deliberately, and the list shrinks over time. Patterns often relate to a writer’s other languages, which is normal and says nothing about ability.",
      "US and UK spellings are both correct; consistency matters more than variety, unless a course or publisher specifies one. Homophones (“their/there”, “affect/effect”, “principal/principle”) slip past spelling checkers because each is a real word, which is why OpenStax’s *Writing Guide* gives them a whole editing section. Writing centres and language support services at many universities offer free feedback that complements self-editing: they teach you to fix the problems rather than fixing them for you.",
      "Editing is also where register and stance are adjusted: replacing vague words, removing contractions in formal work, and checking that each claim is hedged or boosted to match the evidence. These changes alter meaning, which is why they belong in editing, not in a last-minute proofread."
     ]},
    related:["revision-feedback","ai-language-tools","grammar-trouble-spots"], read:[{book:"owg", where:"Section 15.6 “Editing Focus: Words Often Confused”"}],
    sources:[{t:"OpenStax Writing Guide with Handbook, 15.6 Editing Focus: Words Often Confused", url:"https://openstax.org/books/writing-guide/pages/15-6-editing-focus-words-often-confused"},{t:"Academic Phrasebank (University of Manchester)", url:"https://www.phrasebank.manchester.ac.uk/"}], checked:"2026-11"},
   {id:"ai-language-tools", title:"Grammar checkers and AI tools for language help", aka:["AI writing tools","grammar checkers","machine translation","AI detectors"], tags:["academic English","AI","integrity"], summary:"What grammar checkers and AI tools do well and badly for academic writing, how to use them within your institution’s rules, and why AI detectors are not proof.",
    levels:{
     starter:[
      "Grammar checkers mark possible errors and suggest fixes. AI chatbots can also rewrite sentences, explain grammar and suggest phrases. They are useful for typos, many grammar slips and explaining rules.",
      "But they don’t know what your evidence shows. A tool may remove a hedge (“may reduce” → “reduces”), change a technical term, flag correct UK or US spelling, or invent a source. Treat every suggestion as a question, not an instruction, and accept changes one at a time.",
      "Rules differ between institutions and courses. Read your policy first. Never present AI-generated text as your own work, disclose what the policy asks, and keep your drafts.",
      {key:"Use tools to learn and to check, not to write for you. Your institution’s policy decides what is allowed."}
     ],
     builder:[
      {table:[["Often helpful","Often unreliable"],["Typos, spelling","Strength of claims (hedges)"],["Agreement and article slips","Technical terms"],["Explaining a rule","Meaning in fluent rewrites"],["Suggesting concise wording","Facts and references"]]},
      "A good routine: write the draft yourself; ask the tool to **explain** problems rather than rewrite; accept changes one at a time; add repeated problems to your error list; check every fact and reference yourself; and record what you used if your policy requires disclosure ([[ai-disclosure]]).",
      "Don’t paste confidential data, interview material or others’ unpublished work into online tools unless you are allowed to. Machine translation is also a language tool and often covered by policies; check its output for terms and hedges.",
      "Common false alarms: correct UK spelling flagged by a checker set to US English (or the reverse); a passive sentence that is the right choice in a method section; technical terms missing from the tool’s dictionary; and features of other Englishes that are correct in their own variety. If you are unsure, check a [[learner-dictionary|learner dictionary]] or ask a tutor rather than accepting the change.",
      "Ask tools specific questions. “Is the article correct in this sentence, and why?” teaches more than “Improve this paragraph”, and it keeps the writing yours."
     ],
     pro:[
      "AI-writing detectors are not reliable proof of misconduct. Liang and colleagues (2023, *Patterns*) tested seven widely used detectors on 91 essays written by non-native English speakers for the TOEFL test: on average, the detectors wrongly classified more than half (61.3%) as AI-generated, and 97.8% were flagged by at least one detector, while 88 essays by US eighth-grade students were classified almost perfectly. When the researchers used ChatGPT to make the TOEFL essays’ word choices more varied, the average false-positive rate fell to 11.6%. The authors argue this puts non-native writers at particular risk of false accusations.",
      "Policies are changing quickly and differ by institution, course, assessment and publisher. Some distinguish language support (allowed, sometimes with disclosure) from content generation (often not allowed); language assessments may forbid tools entirely. Publishers’ research policies are covered in {{ai-research-policies}}, and the accuracy problems of chatbots in {{ai-chatbot-accuracy}}.",
      "Voice is also at stake. Fluent rewrites tend towards common phrasing, which can flatten an argument and blur the writer’s stance. Many writers in an additional language find their own, slightly less polished sentence communicates their meaning better than a smooth but generic one.",
      "If your work is ever questioned, the strongest evidence is a record of your process: dated drafts, notes, outlines, version history in your word processor, and any disclosure you made. Keeping these is a simple habit that protects honest writers."
     ]},
    related:["editing-proofreading","ai-research-policies","ai-chatbot-accuracy"],
    sources:[{t:"Liang et al. (2023), GPT detectors are biased against non-native English writers, Patterns 4(7), 100779", url:"https://doi.org/10.1016/j.patter.2023.100779"},{t:"Same article, free full text (PubMed Central)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC10382961/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"argumentative-essay", term:"argumentative essay", def:"An essay that takes a clear position on a question where people could disagree, and supports it with reasons, evidence and answers to objections.", codex:"essay-types"},
   {id:"compare-contrast-essay", term:"compare–contrast essay", def:"An essay that examines similarities and differences between two or more things to make a point about them, organised block by block or point by point.", codex:"essay-types"},
   {id:"cause-effect-essay", term:"cause–effect essay", def:"An essay that explains why something happened, what happened because of it, or a chain of causes and effects.", codex:"essay-types"},
   {id:"problem-solution-essay", term:"problem–solution essay", def:"An essay that describes a problem, proposes one or more solutions and evaluates them, often following situation, problem, solution, evaluation.", codex:"essay-types"},
   {id:"counterargument", term:"counterargument", def:"A reasonable objection to your claim: a view that a thoughtful reader might hold, which you present fairly and then answer.", codex:"building-an-argument"},
   {id:"rebuttal", term:"rebuttal", def:"Your answer to a counterargument: showing that it is wrong, true only in some cases, or outweighed by other factors.", codex:"building-an-argument"},
   {id:"claim-evidence-reasoning", term:"claim, evidence, reasoning (CER)", def:"A model of argument: a claim to be accepted, evidence that supports it, and reasoning that explains why the evidence supports the claim.", codex:"building-an-argument"},
   {id:"concession", term:"concession", def:"Admitting that a point is true before making your main point, for example with “although”, “despite” or “admittedly”.", codex:"building-an-argument"},
   {id:"integral-citation", term:"integral citation", def:"A citation where the author is part of your sentence, usually as the subject of a reporting verb (“Mensah (2021) found that…”) or in a phrase such as “According to Mensah (2021),…”.", codex:"using-sources-in-language"},
   {id:"non-integral-citation", term:"non-integral citation", def:"A citation kept outside your sentence’s grammar, in brackets or as a number, so the focus is on the idea: “…water costs (Mensah, 2021).”", codex:"using-sources-in-language"},
   {id:"rhetorical-move", term:"move (rhetorical move)", def:"A section of a text that does one job for the reader, such as showing a research gap or making a request. Genres have typical moves.", codex:"introductions-and-abstracts"},
   {id:"cars-model", term:"CARS model", def:"“Create a Research Space”: John Swales’s 1990 description of research article introductions in three moves: establish a territory, establish a niche, occupy the niche.", codex:"introductions-and-abstracts"},
   {id:"abstract-moves", term:"abstract moves", def:"The typical sections of an abstract. Hyland (2000) described five: introduction, purpose, method, product (findings) and conclusion.", codex:"introductions-and-abstracts"},
   {id:"academic-email", term:"academic email", def:"An email to a lecturer, supervisor or university office, usually with a specific subject, a respectful greeting, a clear purpose and request, and a closing with your full name.", codex:"academic-emails"},
   {id:"editing", term:"editing", def:"Improving a draft’s paragraphs and sentences: clarity, flow, word choice, register and the strength of claims. It comes after revising and before proofreading.", codex:"editing-proofreading"},
   {id:"proofreading", term:"proofreading", def:"The final check of a text for surface errors: spelling, punctuation, small grammar slips, numbers, formatting and citations.", codex:"editing-proofreading"},
   {id:"grammar-checker", term:"grammar checker", def:"Software that marks possible spelling, grammar and punctuation errors and suggests corrections. Its suggestions can be wrong, so each needs checking.", codex:"ai-language-tools"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   {id:"e1u3-q01", lesson:"e1u3-l1", level:1, q:"An essay question begins “To what extent…”. What kind of essay does it usually ask for?", options:[
     {t:"An argumentative essay that takes and defends a position", ok:true, why:"“To what extent” asks how far you agree, so you need a position supported by reasons and evidence."},
     {t:"A description with no position", why:"A description without a judgement doesn’t answer “to what extent”."},
     {t:"A list of all the facts you know about the topic", why:"Listing facts isn’t an answer. The question asks for a judgement."},
     {t:"A personal story about the topic", why:"Personal narrative is a different genre; this question asks for an argument."}]},
   {id:"e1u3-q02", lesson:"e1u3-l1", level:2, q:"Which sentence uses “whereas” correctly?", options:[
     {t:"Some species migrate in winter, whereas others hibernate.", ok:true, why:"Correct: “whereas” joins two contrasting clauses within one sentence."},
     {t:"Some species migrate in winter. Whereas, others hibernate.", why:"“Whereas” is a conjunction and doesn’t start a separate sentence with a comma. Use “In contrast,” there."},
     {t:"Some species migrate in winter, whereas hibernate.", why:"After “whereas” you need a full clause with a subject: “whereas others hibernate”."},
     {t:"Whereas some species migrate in winter, and others hibernate.", why:"This has two linking words (“whereas” and “and”) and no main clause. Drop “and”."}]},
   {id:"e1u3-q03", lesson:"e1u3-l1", level:2, q:"Which sentence keeps the cause and effect in the right direction?", options:[
     {t:"Higher fuel prices can result in higher food prices.", ok:true, why:"Right: “result in” goes from cause (fuel prices) to effect (food prices)."},
     {t:"Higher fuel prices can result from higher food prices.", why:"“Result from” puts the effect first, so this says food prices cause fuel prices: the reverse of the intended meaning."},
     {t:"Higher food prices can lead to higher fuel prices.", why:"“Lead to” is cause → effect, so this also reverses the relationship."},
     {t:"Higher fuel prices are caused by higher food prices.", why:"This also makes food prices the cause. The intended cause is fuel prices."}]},
   {id:"e1u3-q04", lesson:"e1u3-l1", level:1, q:"In a compare–contrast essay, what is the **block** pattern?", options:[
     {t:"Everything about the first item, then everything about the second, often followed by comparison", ok:true, why:"That is the block pattern. It suits short essays with few points."},
     {t:"One paragraph per point of comparison, covering both items in each", why:"That is the point-by-point pattern."},
     {t:"Similarities in one paragraph and nothing about differences", why:"A comparison can focus on similarities, but that isn’t what “block” means."},
     {t:"A table instead of paragraphs", why:"Essays use paragraphs; a table may help planning, but “block” describes paragraph order."}]},
   {id:"e1u3-q05", lesson:"e1u3-l1", level:2, q:"Which sentence is grammatically correct in formal writing?", options:[
     {t:"The flight was cancelled because of the storm.", ok:true, why:"Correct: “because of” is followed by a noun phrase (“the storm”)."},
     {t:"The flight was cancelled due to the storm was severe.", why:"“Due to” can’t be followed by a clause. Use “because the storm was severe”."},
     {t:"The flight was cancelled because of the storm was severe.", why:"“Because of” needs a noun phrase, not a clause. Use “because the storm was severe”."},
     {t:"The flight was cancelled because the storm.", why:"“Because” needs a clause with a verb: “because the storm was severe”, or use “because of the storm”."}]},
   {id:"e1u3-q06", lesson:"e1u3-l1", level:3, q:"Oluwaseun’s problem–solution essay describes a problem and proposes a solution, but his tutor says it is “incomplete”. What is most likely missing?", options:[
     {t:"An evaluation of how well the solution would work, including its limits", ok:true, why:"The evaluation step (situation → problem → solution → evaluation) is the one most often forgotten, and markers expect it."},
     {t:"A personal story", why:"Personal stories aren’t a standard part of a problem–solution essay."},
     {t:"A second problem unrelated to the first", why:"Adding an unrelated problem would weaken the focus, not complete the essay."},
     {t:"More boosters such as “clearly” and “undoubtedly”", why:"Boosters make claims stronger without evidence. They don’t replace evaluation."}]},
   {id:"e1u3-q07", lesson:"e1u3-l1", level:2, q:"In a proposal, which sentence best describes a solution that hasn’t happened yet?", options:[
     {t:"Introducing a night bus would help shift workers get home safely.", ok:true, why:"Right: “would” marks a hypothetical proposal and its expected result."},
     {t:"Introducing a night bus helped shift workers get home safely.", why:"The past tense says it already happened, which isn’t true of a proposal."},
     {t:"Introducing a night bus has helped shift workers get home safely.", why:"The present perfect also suggests it has already happened."},
     {t:"Introducing a night bus is helping shift workers get home safely.", why:"The present continuous says it is happening now."}]},
   {id:"e1u3-q08", lesson:"e1u3-l1", level:3, q:"Hana writes: “Cities with more parks have lower crime rates. Therefore parks cause lower crime.” What is the main language problem?", options:[
     {t:"She states a cause too strongly from evidence that only shows the two things occur together", ok:true, why:"A correlation doesn’t prove causation. A hedged claim fits better: “Parks may be one factor linked to lower crime.”"},
     {t:"“Therefore” is never used in academic writing", why:"“Therefore” is common and correct. The problem is the strength of the causal claim."},
     {t:"She should use “whereas” instead of “therefore”", why:"“Whereas” shows contrast, which isn’t the relationship here."},
     {t:"The sentences are too short", why:"Short sentences are fine. The problem is the overclaim."}]},
   {id:"e1u3-q09", lesson:"e1u3-l1", level:1, q:"Which is usually true of university essays?", options:[
     {t:"They have as many body paragraphs as the argument needs", ok:true, why:"The five-paragraph essay is a school model; university essays follow the argument."},
     {t:"They must have exactly five paragraphs", why:"That is a school teaching model, not a university requirement."},
     {t:"They never include a thesis", why:"Most university essays in English state a thesis early."},
     {t:"They are always organised with IMRaD headings", why:"IMRaD is common for reports and research articles in the sciences, not for most essays."}]},
   /* ---- Lesson 2 ---- */
   {id:"e1u3-q10", lesson:"e1u3-l2", level:1, q:"In the claim–evidence–reasoning model, what does the reasoning do?", options:[
     {t:"It explains why the evidence supports the claim", ok:true, why:"Reasoning is the bridge between evidence and claim."},
     {t:"It repeats the claim in different words", why:"Repeating the claim adds nothing; reasoning explains the link."},
     {t:"It adds a second piece of evidence", why:"More evidence is still evidence. Reasoning explains what the evidence shows."},
     {t:"It gives the reference list entry", why:"References are separate from the argument’s reasoning."}]},
   {id:"e1u3-q11", lesson:"e1u3-l2", level:2, q:"Which sentence is correct?", options:[
     {t:"In spite of the rain, the festival went ahead.", ok:true, why:"Correct: “in spite of” + noun phrase."},
     {t:"Despite of the rain, the festival went ahead.", why:"“Despite” is never followed by “of”."},
     {t:"Although the rain, the festival went ahead.", why:"“Although” needs a clause: “Although it rained,…”."},
     {t:"Despite it rained, the festival went ahead.", why:"“Despite” can’t be followed by a clause. Use “Although it rained” or “Despite the rain”."}]},
   {id:"e1u3-q12", lesson:"e1u3-l2", level:2, q:"Which sentence contains a concession error?", options:[
     {t:"Even though the survey was short, but many people skipped questions.", ok:true, why:"This is the error: “even though” and “but” both mark the same contrast. Use only one."},
     {t:"Even though the survey was short, many people skipped questions.", why:"This one is correct: one linking word, then the main clause."},
     {t:"The survey was short, but many people skipped questions.", why:"This one is correct: “but” alone joins the contrast."},
     {t:"Despite its short length, the survey had many skipped questions.", why:"This one is correct: “despite” + noun phrase."}]},
   {id:"e1u3-q13", lesson:"e1u3-l2", level:3, q:"Dmitri answers an objection by saying: “This is true in the dry season, but in the wet season the effect disappears.” Which rebuttal strategy is this?", options:[
     {t:"Limiting the objection to some cases", ok:true, why:"He accepts the point but narrows where it applies."},
     {t:"Refuting the objection’s evidence", why:"He doesn’t say the evidence is wrong; he accepts it for the dry season."},
     {t:"Outweighing the objection with a bigger factor", why:"He doesn’t introduce a more important factor; he restricts the objection’s scope."},
     {t:"Making a straw man", why:"A straw man misrepresents the other side. He states the objection and partly accepts it."}]},
   {id:"e1u3-q14", lesson:"e1u3-l2", level:1, q:"What is a “straw man” in an argument?", options:[
     {t:"A weak or distorted version of the opposing view, set up so it is easy to defeat", ok:true, why:"That is a straw man. Present the strongest opposing view instead."},
     {t:"The strongest counterargument to your claim", why:"Answering the strongest objection is the opposite of a straw man."},
     {t:"A claim supported by data", why:"That is just a supported claim."},
     {t:"A hedge such as “may” or “suggests”", why:"Hedges adjust certainty; they are not a straw man."}]},
   {id:"e1u3-q15", lesson:"e1u3-l2", level:3, q:"Mei wants to admit that a new app is hard to learn, but leave readers thinking about how much **time it saves**. Which sentence is best?", options:[
     {t:"Although the app is hard to learn at first, it saves staff several hours a week.", ok:true, why:"The concession is in the “although” clause, and the point to remember is in the main clause."},
     {t:"Although the app saves staff several hours a week, it is hard to learn at first.", why:"This puts the difficulty in the main clause, so readers remember the difficulty."},
     {t:"The app saves staff several hours a week and it is hard to learn at first.", why:"“And” gives both facts equal weight, ending on the difficulty."},
     {t:"Despite the app is hard to learn, it saves staff several hours a week.", why:"The emphasis is right, but “despite” can’t take a clause."}]},
   {id:"e1u3-q16", lesson:"e1u3-l2", level:2, q:"Which phrase best introduces a counterargument fairly in an academic essay?", options:[
     {t:"“Some researchers maintain that…”", ok:true, why:"It attributes the view to others and states it neutrally, ready for your answer."},
     {t:"“Only foolish people think that…”", why:"This insults the other side. Academic writing presents opposing views respectfully."},
     {t:"“Everyone knows that…”", why:"This overclaims and doesn’t signal an opposing view."},
     {t:"“It is obvious that…”", why:"This is a booster for your own view, not a fair way to introduce an objection."}]},
   {id:"e1u3-q17", lesson:"e1u3-l2", level:3, q:"Amara has one interview in which a farmer says a new seed failed. Which claim matches this evidence best?", options:[
     {t:"At least one farmer reported that the new seed failed, which suggests its performance may vary.", ok:true, why:"One interview can show that a problem exists, not how common it is. This claim stays within the evidence."},
     {t:"The new seed fails for most farmers.", why:"One case can’t show what happens to “most” farmers."},
     {t:"The new seed clearly does not work.", why:"“Clearly” is a booster unsupported by one interview."},
     {t:"Farmers always reject new seeds.", why:"This generalises far beyond the evidence, and to a different claim."}]},
   {id:"e1u3-q18", lesson:"e1u3-l2", level:2, q:"What is the difference between “even though” and “even if”?", options:[
     {t:"“Even though” concedes a fact; “even if” introduces a possibility that may not be true", ok:true, why:"“Even though prices rose” says they did; “even if prices rise” says they might."},
     {t:"There is no difference", why:"They differ: one is about facts, the other about possibilities."},
     {t:"“Even if” is more formal than “even though”", why:"The difference is meaning, not formality."},
     {t:"“Even though” is only used in speech", why:"“Even though” is common in academic writing."}]},
   /* ---- Lesson 3 ---- */
   {id:"e1u3-q19", lesson:"e1u3-l3", level:1, q:"Which is a **non-integral** citation?", options:[
     {t:"Urban gardens can improve diets (Rossi, 2018).", ok:true, why:"The author is in brackets, outside the sentence’s grammar."},
     {t:"Rossi (2018) found that urban gardens improved diets.", why:"Rossi is the subject of “found”: integral."},
     {t:"According to Rossi (2018), urban gardens improve diets.", why:"Rossi is named in the sentence: integral."},
     {t:"Rossi’s (2018) study of urban gardens found better diets.", why:"Rossi is part of the subject: integral."}]},
   {id:"e1u3-q20", lesson:"e1u3-l3", level:2, q:"Which sentence is correct?", options:[
     {t:"Kaya (2019) defines literacy as the ability to use written information.", ok:true, why:"Correct: “define X as Y”."},
     {t:"Kaya (2019) defines that literacy is the ability to use written information.", why:"“Define” doesn’t take a that-clause. Use “defines literacy as…”."},
     {t:"Kaya (2019) defines about literacy as the ability to use written information.", why:"“Define” takes a direct object without “about”."},
     {t:"Kaya (2019) defines literacy like the ability to use written information.", why:"The pattern is “define X as Y”, not “like”."}]},
   {id:"e1u3-q21", lesson:"e1u3-l3", level:2, q:"Which sentence uses “suggest” correctly?", options:[
     {t:"Silva (2020) suggests that schools start later.", ok:true, why:"Correct: “suggest that” + clause (here with the base form “start”)."},
     {t:"Silva (2020) suggests schools to start later.", why:"“Suggest” isn’t followed by object + to-infinitive. Use “suggests that schools start later”."},
     {t:"Silva (2020) suggests to schools starting later.", why:"This mixes patterns. Use “suggests that…” or “suggests starting later”."},
     {t:"Silva (2020) suggests about schools starting later.", why:"“Suggest” takes no “about”."}]},
   {id:"e1u3-q22", lesson:"e1u3-l3", level:1, q:"Which reporting verb shows that the writer **doubts** what the source says?", options:[
     {t:"claims", ok:true, why:"“Claims” keeps a distance and can suggest the writer is not convinced."},
     {t:"demonstrates", why:"“Demonstrates” shows the writer accepts the point as well supported."},
     {t:"shows", why:"“Shows” signals acceptance."},
     {t:"establishes", why:"“Establishes” signals strong acceptance."}]},
   {id:"e1u3-q23", lesson:"e1u3-l3", level:2, q:"To describe research in general up to now, without naming one study, which tense is most typical?", options:[
     {t:"Present perfect: “Several studies have shown that…”", ok:true, why:"The present perfect links past research to the present state of knowledge."},
     {t:"Future: “Several studies will show that…”", why:"The research has already been done."},
     {t:"Past perfect: “Several studies had shown that…”", why:"The past perfect needs a later past reference point, which isn’t present here."},
     {t:"Present continuous: “Several studies are showing that…”", why:"This is unusual for reporting established research."}]},
   {id:"e1u3-q24", lesson:"e1u3-l3", level:3, q:"Kenji writes: “According to Ahmed (2017), he argues that wages fell.” What is the problem?", options:[
     {t:"Two reporting frames for one idea; keep only one", ok:true, why:"Use “According to Ahmed (2017), wages fell” or “Ahmed (2017) argues that wages fell”."},
     {t:"The year should not be in brackets", why:"Author (year) is the normal APA integral format. The problem is the doubled frame."},
     {t:"“Argues” must be in the past tense", why:"Present tense is acceptable for an author’s position. The problem is the double subject."},
     {t:"There is no problem", why:"“According to Ahmed” and “he argues” repeat the same job."}]},
   {id:"e1u3-q25", lesson:"e1u3-l3", level:2, q:"Which sentence has correct subject–verb agreement?", options:[
     {t:"Okafor and Bello (2020) report that costs fell.", ok:true, why:"Two authors form a plural subject, so “report”."},
     {t:"Okafor and Bello (2020) reports that costs fell.", why:"A plural subject needs “report”, not “reports”."},
     {t:"The report by Okafor and Bello (2020) report that costs fell.", why:"The subject is “the report” (singular), so “reports”."},
     {t:"Okafor et al. (2020) reports that costs fell.", why:"“Et al.” means “and others”, a plural subject, so “report”."}]},
   {id:"e1u3-q26", lesson:"e1u3-l3", level:3, q:"Lucía wants to show that two studies disagree. Which sentence does this most clearly?", options:[
     {t:"While Ito (2018) argues that the tax reduced smoking, Mwangi (2021) suggests that prices had little effect.", ok:true, why:"“While” sets the two positions against each other in one sentence."},
     {t:"Both Ito (2018) and Mwangi (2021) found that the tax reduced smoking.", why:"This shows agreement, not disagreement."},
     {t:"The tax reduced smoking (Ito, 2018; Mwangi, 2021).", why:"Grouping the citations suggests both support the same claim."},
     {t:"Ito (2018) and Mwangi (2021) wrote about smoking.", why:"This mentions both but says nothing about how they relate."}]},
   {id:"e1u3-q27", lesson:"e1u3-l3", level:1, q:"Why might a writer choose an integral citation?", options:[
     {t:"To put the researcher or their position in focus, for example when contrasting two scholars", ok:true, why:"Integral citations foreground the author, which helps when who said it matters."},
     {t:"Because integral citations don’t need a year", why:"Author–date styles include the year either way."},
     {t:"Because non-integral citations are incorrect", why:"Both kinds are correct; good writers mix them."},
     {t:"To avoid citing the source at all", why:"Both kinds cite the source."}]},
   /* ---- Lesson 4 ---- */
   {id:"e1u3-q28", lesson:"e1u3-l4", level:1, q:"In the CARS model, what does Move 2 (“establish a niche”) do?", options:[
     {t:"Shows a gap, problem or open question in existing research", ok:true, why:"Move 2 creates the space the paper will fill."},
     {t:"Describes the method in detail", why:"Methods belong in the method section; Move 3 may only outline the research."},
     {t:"Thanks the funders", why:"Acknowledgements are separate from the introduction’s moves."},
     {t:"Summarises the conclusions", why:"Conclusions come at the end; Move 3 may announce main findings briefly."}]},
   {id:"e1u3-q29", lesson:"e1u3-l4", level:2, q:"Which sentence is most typical of **Move 3** (occupying the niche)?", options:[
     {t:"This paper examines how rent controls affect housing supply in two cities.", ok:true, why:"It announces what the present research does."},
     {t:"Housing costs are a major concern in many cities.", why:"This establishes the territory (Move 1)."},
     {t:"However, few studies have compared rent controls across cities.", why:"This indicates a gap (Move 2)."},
     {t:"Previous research has examined rent controls in single cities.", why:"This reviews previous research (Move 1)."}]},
   {id:"e1u3-q30", lesson:"e1u3-l4", level:1, q:"Hyland (2000) described five common moves in abstracts. Which list is right?", options:[
     {t:"Introduction, purpose, method, product, conclusion", ok:true, why:"These are Hyland’s five moves; “product” means the main findings or argument."},
     {t:"Title, author, date, keywords, references", why:"These are parts of a publication record, not abstract moves."},
     {t:"Greeting, purpose, request, thanks, signature", why:"These are closer to the moves of an email."},
     {t:"Territory, niche, occupation, gap, outline", why:"These mix up terms from the CARS model for introductions."}]},
   {id:"e1u3-q31", lesson:"e1u3-l4", level:2, q:"In an abstract, which sentence would usually be in the **present** tense?", options:[
     {t:"These findings suggest that peer feedback improves revision.", ok:true, why:"Interpreting what findings mean is usually in the present."},
     {t:"We interviewed 30 teachers.", why:"What the researchers did is usually in the past, as here."},
     {t:"Participants completed two writing tasks.", why:"Procedures are usually in the past, as here."},
     {t:"Most students revised more after peer feedback.", why:"Specific results are usually in the past, as here."}]},
   {id:"e1u3-q32", lesson:"e1u3-l4", level:3, q:"Priya is writing her first email to a lecturer at a university in the UK. The staff page says “Dr Ana Ruiz, Lecturer”. Which greeting is the safest choice?", options:[
     {t:"Dear Dr Ruiz,", ok:true, why:"Title and family name from the staff page: accurate and respectful. If she later signs “Ana”, Priya can follow her lead."},
     {t:"Hey Ana,", why:"Too informal for a first email, and uses her first name before being invited."},
     {t:"Dear Madam,", why:"This ignores the name and title Priya already knows, and is less personal."},
     {t:"Dear Teacher Ana,", why:"This form isn’t usual for university lecturers in the UK."}]},
   {id:"e1u3-q33", lesson:"e1u3-l4", level:2, q:"Which subject line is best for an email asking to change seminar groups?", options:[
     {t:"Request to change seminar group: Urban Geography, Week 3", ok:true, why:"It names the request and the course, so the reader knows what it is about before opening it."},
     {t:"Hello", why:"It says nothing about the topic."},
     {t:"URGENT!!!", why:"It sounds demanding and doesn’t say what the email is about."},
     {t:"(no subject)", why:"An empty subject line is easy to overlook and may be filtered."}]},
   {id:"e1u3-q34", lesson:"e1u3-l4", level:2, q:"Which request is most polite and clear in an email to a supervisor?", options:[
     {t:"Could we meet for 20 minutes next week to discuss my survey questions?", ok:true, why:"Indirect (“Could we…”), specific (20 minutes, next week, the topic) and easy to answer."},
     {t:"I want to meet you.", why:"“I want” sounds demanding in English academic email, and there is no topic or time."},
     {t:"We need to meet ASAP.", why:"“ASAP” sounds like a demand and gives no detail."},
     {t:"Maybe if it’s possible at some point we could perhaps talk?", why:"Polite but too vague to act on."}]},
   {id:"e1u3-q35", lesson:"e1u3-l4", level:3, q:"Tomás emailed his lecturer on Monday and has had no reply by Tuesday afternoon. What is the most appropriate next step?", options:[
     {t:"Wait a few working days, then send a short, friendly follow-up referring to his first email", ok:true, why:"Lecturers receive many emails. A polite follow-up after a few working days is normal."},
     {t:"Email again immediately, marked urgent", why:"One day is not long; an “urgent” follow-up can seem demanding."},
     {t:"Complain to the head of department", why:"Far too soon, and an escalation the situation doesn’t justify."},
     {t:"Write “You didn’t answer my email” in a new message", why:"This sounds like an accusation. “I am writing to follow up on my email of…” is better."}]},
   {id:"e1u3-q36", lesson:"e1u3-l4", level:1, q:"Why is “Friday 14 March” better than “14/3” in an email?", options:[
     {t:"Number-only dates are read in different orders in different countries", ok:true, why:"Day–month and month–day orders differ, so words avoid confusion."},
     {t:"Numbers are not allowed in emails", why:"Numbers are fine; the problem is the ambiguous order."},
     {t:"“14/3” is informal slang", why:"It isn’t slang; it is ambiguous."},
     {t:"Lecturers can’t read numbers", why:"The issue is the order of day and month, not reading numbers."}]},
   /* ---- Lesson 5 ---- */
   {id:"e1u3-q37", lesson:"e1u3-l5", level:1, q:"What is the main difference between editing and proofreading?", options:[
     {t:"Editing improves paragraphs and sentences; proofreading is the final check for surface errors", ok:true, why:"That is the distinction used in this lesson and in Research Skills."},
     {t:"They are the same thing", why:"They are different jobs, best done in order."},
     {t:"Proofreading comes first, then editing", why:"Proofreading comes last; edits could introduce new surface errors."},
     {t:"Editing is only for spelling", why:"Spelling belongs to proofreading."}]},
   {id:"e1u3-q38", lesson:"e1u3-l5", level:2, q:"Why check one problem at a time when proofreading?", options:[
     {t:"Attention is limited, so a focused pass catches more errors of that type", ok:true, why:"Looking for everything at once makes it easy to read past small errors."},
     {t:"Because checkers can only find one error per page", why:"That isn’t a property of checkers; the reason is human attention."},
     {t:"To make proofreading take less time overall", why:"Several passes may take longer; the aim is accuracy."},
     {t:"Because only one error is allowed per paragraph", why:"There is no such rule."}]},
   {id:"e1u3-q39", lesson:"e1u3-l5", level:2, q:"A grammar checker suggests changing “The results suggest” to “The results prove”. What is the best response?", options:[
     {t:"Reject it, unless the evidence really is conclusive", ok:true, why:"“Prove” is much stronger than “suggest”. The tool doesn’t know your evidence."},
     {t:"Accept it, because checkers know academic style", why:"Checkers can make claims stronger than the evidence."},
     {t:"Accept it, because shorter words are better", why:"Length isn’t the issue; meaning is."},
     {t:"Delete the sentence", why:"The original sentence was fine; just keep it."}]},
   {id:"e1u3-q40", lesson:"e1u3-l5", level:1, q:"Which statement about US and UK spelling in academic writing is accurate?", options:[
     {t:"Both are correct; use one consistently unless your course requires one", ok:true, why:"Neither variety is “the correct one”; consistency matters."},
     {t:"Only US spelling is accepted internationally", why:"UK spelling is widely accepted, as is US spelling."},
     {t:"Only UK spelling is academic", why:"US spelling is equally academic."},
     {t:"Mixing them shows a wide vocabulary", why:"Mixing looks careless."}]},
   {id:"e1u3-q41", lesson:"e1u3-l5", level:3, q:"Sione’s course allows AI tools for grammar checking with disclosure. Which use goes beyond that policy?", options:[
     {t:"Asking an AI tool to write a new paragraph and pasting it into his essay", ok:true, why:"That is content generation, not grammar checking, and presents AI text as his own."},
     {t:"Asking an AI tool to mark grammar errors in a paragraph he wrote", why:"This is grammar checking, which the policy allows with disclosure."},
     {t:"Asking an AI tool to check the verb tenses in a sentence he wrote", why:"This is grammar checking of his own writing, which the policy allows with disclosure."},
     {t:"Disclosing which tool he used for grammar", why:"Disclosure is what the policy requires."}]},
   {id:"e1u3-q42", lesson:"e1u3-l5", level:2, q:"Which is the best way to use a personal error list?", options:[
     {t:"Check your draft for each item on the list, one at a time, before submitting", ok:true, why:"A targeted check finds your most frequent errors efficiently."},
     {t:"Read it once at the start of the year", why:"It only helps if you use it while checking each piece of writing."},
     {t:"Give it to a tool and accept all its suggestions", why:"Accepting suggestions blindly can introduce new problems."},
     {t:"Hide it, because errors are embarrassing", why:"Errors are normal; the list is a learning tool."}]},
   {id:"e1u3-q43", lesson:"e1u3-l5", level:3, q:"Hana wrote her essay in Japanese and used a translation tool to make the English version. What should she check first?", options:[
     {t:"Whether her course policy allows machine translation, and then the output’s technical terms and hedges", ok:true, why:"Translation is a language tool often covered by policy, and its output can change terms or claim strength."},
     {t:"Nothing: translated text is always accurate", why:"Translation tools can choose wrong terms or lose hedges."},
     {t:"Only the word count", why:"Word count matters, but policy and accuracy matter more."},
     {t:"Whether the translation sounds more formal than her own English", why:"Formality isn’t the first concern; permission and meaning are."}]},
   {id:"e1u3-q44", lesson:"e1u3-l5", level:3, q:"What did Liang and colleagues (2023) find about AI-writing detectors?", options:[
     {t:"On average, they wrongly labelled more than half of a set of essays by non-native English writers as AI-generated", ok:true, why:"This is why detector results alone are not reliable proof, and why keeping drafts helps."},
     {t:"They never make mistakes", why:"The study found many false positives."},
     {t:"They were most accurate for non-native writers", why:"The opposite: non-native writers’ essays were often misclassified."},
     {t:"They can detect any kind of plagiarism", why:"The study tested AI-text detection, and found serious problems."}]},
   {id:"e1u3-q45", lesson:"e1u3-l5", level:1, q:"Which technique helps you notice missing or repeated words in your own writing?", options:[
     {t:"Reading the text aloud slowly, or using text-to-speech", ok:true, why:"Hearing the text makes missing and repeated words stand out."},
     {t:"Reading it quickly once straight after writing", why:"You tend to read what you meant, not what is on the page."},
     {t:"Only relying on the spelling checker", why:"Spelling checkers miss many errors, such as a missing “the” or a wrong word that is spelled correctly."},
     {t:"Making the font smaller", why:"This makes errors harder to see."}]}
  ]
});
