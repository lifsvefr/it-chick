(function(){
/* World Englishes · Unit 10 (e6u10) · Teaching across Englishes */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u10", track:"e6", n:10, title:"Teaching across Englishes", icon:"🎓",
  blurb:"This last unit turns the course into practice. It is for teachers and for learners who choose a model of English for themselves. You compare the main models and learner goals, set priorities for pronunciation, plan listening to many Englishes, and decide when a form is a local feature and when it is a learner’s error. You also look at fair marking and feedback, build a plan for a class in Japan, and finish with a review of all ten units.",
  goals:[
    "Compare native-speaker, local-standard and lingua franca models, and choose one for a learner’s goals",
    "Use functional load and the Lingua Franca Core to set priorities for pronunciation, and say what a teacher can let go",
    "Plan a listening program that uses many speakers and never asks learners to rate a speaker",
    "Decide whether a form is a feature of a variety or a learner’s error, and give fair feedback and marks",
    "Build a short teaching plan for a class in Japan, and review the ideas of all ten units"
  ],
  read:[
    {book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”; Chapter 10, Language Variation and Change, sections 10.2 “Language varies” and 10.4 “Language conveys more than semantic meaning”", note:"Read section 1.4 before Lesson 1 and section 10.2 after Lesson 4. The book is not about teaching, so use it for the ideas about standards and variation."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u10-l1", title:"Which English should we teach?", minutes:55,
   hook:{q:"A teacher says, “We should teach only the English that the exam uses, so other Englishes can wait.” Which reply is the most accurate?", options:["“Exams should never decide anything about a class.”","“That is a choice of model. A class can teach one reference model and also let learners hear many Englishes.”","“Only first-language teachers can decide this.”","“Every variety must get the same number of lessons.”"], answer:1, reveal:"**A class can do both.** Choosing a reference model for speaking and writing does not stop a teacher from adding listening to many speakers. This lesson compares the models and shows how a learner’s goals help you choose."},
   goals:[
     "Explain what an instructional model is, and say why every class already has one",
     "Compare the native-speaker, local-standard and lingua franca models, with their strengths and limits",
     "Describe Kirkpatrick’s (2007) comparison, and the EIL work of McKay (2002) and Matsuda (2012), with hedges",
     "Use learners’ own goals to choose a model, and avoid four common mistakes"
   ],
   learn:[
    {h:"Every class already has a model", body:[
      {lead:"A class always teaches some kind of English, so it always has a model, even when nobody chose one."},
      "An [[we-instructional-model|instructional model]] is the variety of English that learners are asked to aim at. You can see it in the voices on the audio files, in the spelling of the textbook, in the words of the answer key and in the way the teacher speaks. Often nobody decides this on purpose. The publisher decided, or the exam did.",
      "This unit is the last of the course, and it asks a practical question. What do you do with nine units about many Englishes when you teach, or when you choose how to learn? The answer is not “teach everything”. The answer is to choose on purpose, to say why, and to prepare learners for the many Englishes they will meet.",
      "Two earlier ideas help. Unit 8 explained that many conversations in English today are between people who use it as an additional language, and that estimates of the numbers vary. Unit 1 showed that the three circles do not rank skill. Both ideas mean that “the” English to teach is not obvious."
    ]},
    {h:"Three kinds of model", body:[
      {lead:"Writers on teaching often describe three models. Each one has strengths and limits."},
      "Andy Kirkpatrick (2007) discusses them in *World Englishes: Implications for International Communication and English Language Teaching* (Cambridge University Press). A published review says that the last part of the book (chapter 13) compares three models. They are an exonormative native-speaker model, an endonormative nativized model and a lingua franca model. The chapter gives the advantages and disadvantages of each. In the first model, learners aim at a first-language variety from outside the country, such as British or American English. In the second, they aim at the local variety of their own country. In the third, the aim is successful communication with other speakers who use English as a shared language. Unit 2 introduced the words [[we-exonormative|exonormative]] (norms taken from outside the community) and [[we-endonormative|endonormative]] (norms made inside it).",
      {table:[["Model","What learners aim at","Strengths","Limits"],["Native-speaker (exonormative)","A first-language variety, such as General American or Southern British English","Clear standard. Many books, recordings and exams.","Which variety? Units 3 and 4 show there are many."],["Local standard (endonormative)","The educated English of the local community, such as Standard Singapore English","Matches what learners hear around them. Local teachers are models.","Needs a recognized standard and materials. Exams may not use it."],["Lingua franca","Being understood by many kinds of speaker, with clear priorities","Matches use between additional-language speakers","ELF is not one variety (Unit 8), so there is no fixed target to test."]]},
      "The table shows common points in this debate. It is not a summary of Kirkpatrick’s own argument, so read his chapters before you say which model he prefers.",
      "The local-standard model needs a variety that people have described and accepted. In Schneider’s model of postcolonial Englishes (Unit 2), this happens in a later phase, when a variety becomes a source of its own norms. His model does not describe the expanding circle. There, a described and accepted local standard is less common, so learners often use a first-language model or a lingua franca model."
    ]},
    {h:"EIL: the work of McKay and Matsuda", body:[
      {lead:"English as an international language, or EIL, is a teaching approach based on the fact that English belongs to no single country."},
      "[[we-eil|EIL]] and ELF overlap, and writers use the two names in different ways. In this course, ELF names a way of using English between people (Unit 8), and EIL names an approach to teaching English for that use.",
      "Sandra Lee McKay (2002) published *Teaching English as an International Language: Rethinking Goals and Approaches* (Oxford University Press). According to a published review (Gray 2003, in the journal *TESL-EJ*), she argues that an international language is not tied to one nation or culture. She describes learners as bilingual users of English, and she argues that a native-speaker model should not be the final goal. Her chapters cover standards (chapter 3), culture in teaching and teaching methods. This summary follows the review, so check the book before you quote her.",
      "Aya Matsuda edited *Principles and Practices of Teaching English as an International Language* (Multilingual Matters, 2012). Its first part has chapters on principles, for example on selecting an instructional variety, on teaching materials, on assessing proficiency and on teacher education. Its second part shows courses and classroom ideas, including a case from a high school English class in Japan.",
      "In broad terms, these books do not give one recipe. They give questions. Which variety is the base? Which other varieties do learners hear? Whose culture appears in the materials? How do we assess? The rest of this unit follows these questions."
    ]},
    {h:"Start from the learner’s goals", body:[
      {lead:"A teacher can choose a model only after asking what the learners need."},
      "A [[we-needs-analysis|needs analysis]] is a short study of what learners need English for. You can do it in ten minutes with questions on paper. Ask five things.",
      {ol:[
        "**Who will you speak or write to?** First-language users, additional-language users, or both?",
        "**Which skills matter most?** Reading, listening, speaking or writing?",
        "**Which exams or courses are coming?** What do their documents say about the variety and spelling?",
        "**Where will you use English?** At work, in study, when you travel, online?",
        "**What do you want your English to say about you?** Some learners want to sound like a first-language speaker, and others do not."
      ]},
      {table:[["Learner","Main goal","A reasonable plan"],["Ana, a nurse in a hospital with colleagues from many countries","Be understood by many speakers, every day","Lingua franca priorities for speaking, and wide listening"],["Kenji, who has an exam in six months","Pass a test with a stated standard","Use the test’s variety and spelling, and add some listening practice"],["Priya, who will study at a university abroad","Follow lectures and write essays","A first-language reference model for writing, and listening to local and international voices"]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Choosing a model, step by step</text><rect class="d-soft" x="30" y="30" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="51" text-anchor="middle">1. Who will learners talk to?</text><text class="s" x="170" y="69" text-anchor="middle">first-language users, others, or both</text><path class="d-ink" d="M170 82L170 96" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 92L170 104L178 92z"/><rect class="d-sage" x="30" y="106" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="127" text-anchor="middle">2. What do exams require?</text><text class="s" x="170" y="145" text-anchor="middle">read the test’s own guidance</text><path class="d-ink" d="M170 158L170 172" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 168L170 180L178 168z"/><rect class="d-lup" x="30" y="182" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="203" text-anchor="middle">3. What do you have?</text><text class="s" x="170" y="221" text-anchor="middle">materials, recordings, local teachers</text><path class="d-ink" d="M170 234L170 248" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 244L170 256L178 244z"/><rect class="d-gold" x="30" y="258" width="280" height="56" rx="8" stroke-width="2"/><text x="170" y="280" text-anchor="middle">4. Choose and explain</text><text class="s" x="170" y="298" text-anchor="middle">one reference model + wide listening</text></svg>', alt:"Four boxes in a column joined by arrows: who will learners talk to, what do exams require, what do you have, and choose one reference model with wide listening.", cap:"A short path from the learners’ goals to a model."}
    ]},
    {h:"A middle path, and four mistakes", body:[
      {lead:"A common choice is one reference model for speaking and writing, and many voices for listening."},
      "This choice has a reason. Learners need a clear target to practice, and they also need to understand speakers who sound different. A reference model gives the first, and wide listening gives the second. The next lessons build both. You can change the reference model later, because it is a teaching choice and not an identity.",
      "Four mistakes are common when people first meet World Englishes in teaching.",
      {ol:[
        "**“Teach every variety.”** Nobody can. Choose one reference model, and use the others for listening and for discussion.",
        "**“Teaching a standard is harmful.”** A standard helps with exams, formal writing and a shared target. The harm comes from saying that other Englishes are wrong.",
        "**“ELF means teaching errors.”** The Lingua Franca Core is a proposal about priorities, and learners may choose a first-language model if they prefer (Unit 8).",
        "**“Only a first-language speaker can be a model.”** Kirkpatrick (2010) proposes that local multilingual teachers can be good models, and Unit 8 described his argument as a proposal for educators to weigh. Unit 9 discussed this belief as native-speakerism (Holliday 2006) and the native-speaker fallacy (Phillipson 1992)."
      ]},
      {warn:"A model is a target for production. It is not a ranking of people. A learner who aims at a different model is not behind."},
      {key:"Choose a reference model on purpose, from the learners’ goals, and explain the choice. Teach it next to wide listening to other Englishes."}
    ]}
   ],
   try:[
    M("e6u10-l1-x1","In his comparison of models for teaching, Kirkpatrick (2007) discusses which three?",2,[
      ["The inner, outer and expanding circles","Those are Kachru’s three circles (Unit 1). They describe how English spread and what role it has, and they are not teaching models."],
      ["The basilect, the mesolect and the acrolect","Those are parts of a creole continuum (Unit 6)."],
      ["The native-speaker model, the nativized (local) model and the lingua franca model","Right. A published review of his book names an exonormative native-speaker model, an endonormative nativized model and a lingua franca model."],
      ["The pidgin, the expanded pidgin and the creole","Those are contact languages (Unit 7), not teaching models."]
    ]),
    {id:"e6u10-l1-x2", type:"sort", q:"Which model does each description fit best?", buckets:["Native-speaker model","Local-standard model","Lingua franca model"], items:[
      {t:"Learners aim at General American or Southern British English", b:0, why:"These are first-language reference varieties, so this is a native-speaker (exonormative) model."},
      {t:"Learners aim at the educated English of their own country, with local teachers as models", b:1, why:"The norms come from inside the community, so this is a local-standard (endonormative) model."},
      {t:"The goal is to be understood by many kinds of speaker, with priorities for the features that matter most", b:2, why:"This is the lingua franca idea from Unit 8."},
      {t:"Exams and textbooks name one first-language variety for spelling and sound", b:0, why:"A named first-language standard is the mark of a native-speaker model."},
      {t:"There is no single fixed target, because ELF is not one variety", b:2, why:"This is a limit of the lingua franca model, which Unit 8 explained."},
      {t:"The variety has been described in dictionaries and grammars and has accepted local norms", b:1, why:"A local standard needs this kind of description and acceptance."}
    ]},
    {id:"e6u10-l1-x3", type:"order", q:"Put the steps of a short plan for choosing a model in order, from first to last.", items:[
      {t:"Ask learners who they will speak and write to", why:"The audience comes first, because it shapes every other choice."},
      {t:"Read what the exam or course documents require", why:"Requirements are fixed, so you need to know them before you decide."},
      {t:"Check which materials, recordings and teachers you have", why:"A model is only useful if you can support it."},
      {t:"Choose one reference model and a listening plan", why:"Now you can decide, with reasons."},
      {t:"Explain the choice to learners and review it later", why:"Learners should know why, and goals can change."}
    ]},
    {id:"e6u10-l1-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Instructional model","The variety that learners are asked to aim at","It shows in audio, spelling and the teacher’s speech."],
      ["Exonormative","Norms taken from outside the community","Often a first-language variety from another country."],
      ["Endonormative","Norms made inside the community","A local standard that people accept."],
      ["EIL","A teaching approach for English as an international language","It does not belong to one nation or culture."],
      ["Needs analysis","A short study of what learners need English for","It starts with who they will talk to."]
    ]},
    {id:"e6u10-l1-x5", type:"spot", q:"A teacher wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Every class has a model, even if nobody chose it.", flag:false, why:"Correct. The audio, the spelling and the teacher’s speech show a model."}, " ", {t:"World Englishes teaching means that I must teach every variety.", flag:true, why:"Nobody can teach every variety. A teacher chooses a reference model and uses other varieties for listening."}, " ", {t:"A needs analysis starts by asking who learners will talk to.", flag:false, why:"Correct. The audience shapes the other choices."}, " ", {t:"A learner who aims at a local standard is behind a learner who aims at General American.", flag:true, why:"A model is a target, not a ranking. Different goals need different models."}, " ", {t:"The Lingua Franca Core means that learners must not use a first-language model.", flag:true, why:"The Core is a proposal about priorities, and learners may choose another model."}, " ", {t:"McKay (2002) describes learners as bilingual users of English.", flag:false, why:"Correct. A published review of her book gives this as one of her main ideas."}, "”"
    ]},
    {id:"e6u10-l1-x6", type:"number", q:"A teacher has 36 minutes of listening practice each month. She wants to use six speakers for the same amount of time. How many minutes does each speaker get?", answer:6, tol:0, unit:"minutes", why:"36 ÷ 6 = 6 minutes for each speaker.", wrongs:[{v:12, tol:0, why:"This divides by 3, as if there were three speakers."},{v:30, tol:0, why:"This subtracts 6 instead of dividing."}], hint2:"Divide the total minutes by the number of speakers."},
    M("e6u10-l1-x7","Hana is 15 and wants to study at a university abroad. She also takes a test in one year, and the test states the spelling it accepts. Which plan is the most sensible?",1,[
      ["Teach only the test and give no listening practice, because the test is the only goal.","The test is one goal. She also needs to follow lectures, which means listening to many speakers."],
      ["Use the test’s variety and spelling for writing, and add listening to many speakers.","Right. It meets the test requirement and her wider goal, and it keeps the model a choice."],
      ["Teach a different variety every week for speaking and writing.","This gives her no stable target, and it does not match the test."],
      ["Choose the model that the teacher speaks, whatever the test says.","The teacher’s habit is not a reason. The learner’s goals and the test come first."]
    ]),
    {id:"e6u10-l1-x8", type:"explain", q:"A colleague says, “Teaching World Englishes means we stop teaching a standard.” Write a short, kind answer.", size:"3–5 sentences", prompt:"Teaching about many Englishes does not mean …", hint:"Think about the reference model, wide listening and the goals of learners.", points:["Says that a class can keep one reference model for speaking and writing","Says that learners also hear many Englishes, because they will meet them","Says that the choice depends on the learners’ goals, and can change","Does not say that any variety is wrong"], model:"Teaching about many Englishes does not mean that we stop teaching a standard. A class can choose one reference model for speaking and writing, because learners need a clear target and exams often ask for one. The class can also add listening to many speakers, because learners will meet many Englishes. The choice depends on the learners’ goals, and it can change. No variety is called wrong."}
   ],
   apply:{
    intro:"These tasks use your own notes and one free web page. Nothing needs an account.",
    tasks:[
     {t:"Write a goal profile for one learner", how:[
       "Choose a real or imagined learner. Do not use a real person’s name in your notes if you plan to share them.",
       "Answer the five questions of a needs analysis for this learner, in one line each.",
       "Write the model you would choose and two reasons. Add one sentence about what the learner will hear."
     ], write:"The learner’s goals… the five answers… the model and two reasons…"},
     {t:"Read how an edited volume is organized", how:[
       "Open the table of contents of Matsuda (2012) on the [De Gruyter Brill page for the e-book](https://www.degruyterbrill.com/document/doi/10.21832/9781847697042/html).",
       "Choose two chapter titles that match your own goals.",
       "Write one question that each chapter might answer for you."
     ], write:"Two chapter titles… one question for each…"}
    ],
    proof:"A page with a learner’s goals, a chosen model with two reasons, and two chapter titles with one question each."
   },
   read:[
    {book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”", note:"This section helps you think about why one variety is treated as the model."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u10-l2", title:"Pronunciation for intelligibility", minutes:55,
   hook:{q:"According to the idea of functional load, which two English sounds separate more pairs of words: /p/ and /b/, or /θ/ and /ð/ (the two *th* sounds)?", options:["/p/ and /b/","/θ/ and /ð/","They separate the same number","Nobody has ever counted pairs"], answer:0, reveal:"**/p/ and /b/.** Pairs such as *pit* and *bit*, *pan* and *ban*, and *rope* and *robe* are easy to find. Pairs that differ only in the two *th* sounds are rare, for example *thigh* and *thy*. A contrast that separates many words has a high functional load, so a teacher may give it more time."},
   goals:[
     "Compare the nativeness principle and the intelligibility principle in pronunciation teaching",
     "Explain functional load, and describe what Munro and Derwing (2006) found, with hedges",
     "Use the Lingua Franca Core and functional load together to set priorities, and say what can vary",
     "Give feedback on pronunciation without telling a learner to lose an accent",
     "Say where this advice stops: exams, learner choice and the limits of the research"
   ],
   learn:[
    {h:"Two goals for pronunciation", body:[
      {lead:"A teacher can aim at a native-like accent or at being understood. These are different goals."},
      "John Levis (2005) named two ideas that have shaped pronunciation teaching. The [[we-nativeness-principle|nativeness principle]] says that learners should aim to sound like a first-language speaker. The [[we-intelligibility-principle|intelligibility principle]] says that the goal is to be understood, and that listeners can understand a speaker who has a noticeable accent.",
      "Research gives a reason to separate the two goals. Munro and Derwing (1995) recorded learners of English whose first language was Mandarin. Listeners whose first language was English rated the speech for accent and for ease of understanding, and they wrote down what they heard. The three measures were related but partly independent. Some speech that sounded strongly accented was still highly intelligible. Unit 1 introduced this finding, and Unit 9 described the study in detail.",
      "This lesson follows the intelligibility principle for most learners, because Unit 8 showed how many conversations in English are between additional-language speakers. It does not say that learners must give up a native-like goal. A learner who wants that goal can have it, with a teacher’s help."
    ]},
    {h:"Not every sound carries the same load", body:[
      {lead:"Some sound contrasts keep many words apart, and others keep very few."},
      "[[we-functional-load|Functional load]] is the amount of work that a contrast does to keep words apart. A simple way to measure it is to count [[minimal-pair|minimal pairs]]. These are pairs of words that differ in only that contrast. Catford (1987) made ranked lists of English contrasts from minimal-pair counts. Later summaries say that Adam Brown’s lists (1991) are more detailed, because they also consider how common the words are and whether the two words belong to the same word class. Researchers do not agree on one single way to measure functional load.",
      {table:[["Contrast","Minimal pairs you can find","How many pairs?"],["/p/ and /b/","*pit/bit*, *pan/ban*, *pear/bear*, *rope/robe*","Many"],["/s/ and /z/","*bus/buzz*, *ice/eyes*, *race/raise*, *Sue/zoo*","Many"],["/l/ and /r/","*light/right*, *lock/rock*, *collect/correct*","Many"],["/θ/ and /ð/","*thigh/thy*, *ether/either*, *teeth/teethe*","Few"]]},
      "The table gives examples and not a full count. The idea is easy to test with your own list of words.",
      "Munro and Derwing (2006) tested the idea in an exploratory study in the journal *System*. A small group of listeners whose first language was English heard sentences from speakers whose first language was Cantonese. Some sentences had consonant changes in high-load contrasts, and others in low-load contrasts. The listeners rated each sentence for accent and for comprehensibility. Sentences with high-load changes were rated as more accented and less comprehensible. Low-load changes had only a small effect on comprehensibility. One review (Sewell 2021) calls the result a preliminary confirmation of the idea. It was a small, early study, so treat it as a useful first result and not as a final answer.",
      {tip:"Functional load does not say that a low-load contrast never matters. It says that, on average, a learner’s limited practice time may do more good on a contrast that keeps many words apart."}
    ]},
    {h:"Priorities from the Core and from functional load", body:[
      {lead:"Two different kinds of evidence point to similar priorities, and they do not agree on everything."},
      "Unit 8 introduced the [[we-lfc|Lingua Franca Core]] (Jenkins 2000), which came from recorded talk between additional-language speakers. Functional load comes from counting words in a language. They are different methods, and both treat the two *th* sounds as less urgent. For other points, use the Core and your learners’ needs.",
      {table:[["Level","Features","Examples in the *Please call Stella* paragraph"],["Teach first","Most consonants, including the two in a word-start cluster. A puff of air after *p*, *t* and *k*. Long and short vowels. Nuclear stress.","*spoons*, *snow*, *please*, *big* and *peas*, *Please call STELLA*"],["Teach next","Word stress, and the rhythm of phrases (debated, see Unit 8). Understanding weak forms when you listen.","*brother*, *station*, *and* and *for*"],["Can vary","The two *th* sounds. Dark *l*. Weak forms when you speak. The exact quality of most vowels. Pitch that shows attitude.","*thick*, *with*, *bring*"]]},
      "Read the table as a plan for time. “Can vary” does not mean “wrong”, and “teach first” does not mean “never relax”. It means that a teacher with 20 minutes a week can begin with the first row.",
      "How English Works has the tools for this work. Unit 2 shows how sounds are made and has {{minimal-pairs-practice|minimal pairs and practicing hard contrasts}}. Unit 3 explains {{word-stress-english|word stress}}, {{weak-forms-english|weak forms}} and {{intonation-english|intonation}}.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">A plan for pronunciation time</text><rect class="d-sage" x="20" y="32" width="300" height="82" rx="8" stroke-width="2"/><text x="170" y="54" text-anchor="middle">Teach first</text><text class="s" x="170" y="74" text-anchor="middle">most consonants, word-start clusters</text><text class="s" x="170" y="92" text-anchor="middle">long and short vowels, nuclear stress</text><rect class="d-lup" x="20" y="126" width="300" height="82" rx="8" stroke-width="2"/><text x="170" y="148" text-anchor="middle">Teach next</text><text class="s" x="170" y="168" text-anchor="middle">word stress, rhythm (debated)</text><text class="s" x="170" y="186" text-anchor="middle">weak forms for listening</text><rect class="d-gold" x="20" y="220" width="300" height="82" rx="8" stroke-width="2"/><text x="170" y="242" text-anchor="middle">Can vary</text><text class="s" x="170" y="262" text-anchor="middle">th sounds, dark l, exact vowel quality</text><text class="s" x="170" y="280" text-anchor="middle">pitch that shows attitude</text></svg>', alt:"Three bands from top to bottom: teach first, teach next, and can vary, each with short examples.", cap:"Priorities for a learner whose goal is to be understood by many listeners."},
      {ex:"Listen to a speaker from Sydney, Australia (31, male). Listen to the first sentence, and then to the words *spoons* and *snow*. Write the consonants that you hear at the start of each word. There is no single right answer, and one speaker is one person.", label:"Listen: Sydney", listen:"e6u10-l2-a1"}
    ]},
    {h:"What to let go, and how to say it kindly", body:[
      {lead:"A teacher who lets some features go still has plenty to do. The task is to choose, and to say why."},
      "Many learners in Japan practice the contrast between /l/ and /r/, as Lesson 4 of How English Works Unit 2 describes. Both are consonants, so they stay in the first row. Unit 8 showed that a Japanese speaker may add vowels inside a cluster, as in *strike*. Katakana spellings put a vowel after most consonants, for example ストリート (*sutorīto*) for *street*. A teacher can show the cluster in the English word. These are examples of how a first language shapes learning, and they are not signs of poor ability.",
      "Feedback matters as much as the list. The table gives phrases that keep the learner’s identity safe.",
      {table:[["Instead of","Try"],["“Reduce your accent.”","“Everyone understood you. Now let’s make *street* easier to hear.”"],["“That is the wrong sound.”","“Which word did you want to say? Light or right?”"],["Correcting every sound","Choosing one feature in each lesson, and saying why"],["Silence when a listener is confused","A short model, then the learner says it again in a new sentence"]]},
      "A good routine has five steps: listen for meaning, check the context, ask a choice question, give a short model, and praise what worked. Praise should be specific. “Your *s* in *snow* was clear” teaches more than “good”.",
      "Pronunciation is also part of identity. Unit 9 looked at attitudes and identity in detail. For now, remember that nobody has to lose an accent to be understood, and that a teacher does not own the learner’s voice."
    ]},
    {h:"Where this advice stops", body:[
      {lead:"The Core and functional load are guides. They are not laws."},
      {list:[
        "**The evidence is partial.** The Core came from a limited set of recorded breakdowns, and critics have asked for more speakers and more first languages (Unit 8). Munro and Derwing’s (2006) study was exploratory.",
        "**Measures differ.** Researchers do not agree on one way to measure functional load, so two lists may rank a contrast differently.",
        "**Context matters.** A contrast with a low load can still matter in one sentence. A listener who knows the topic needs fewer cues.",
        "**Exams may ask for more.** A test can ask for a particular accent or particular sounds. A learner who wants to pass it should prepare for it.",
        "**Learners choose.** Some learners want a first-language accent as a goal. A teacher can support the goal and still explain the priorities."
      ]},
      "A teacher who knows these limits can use the ideas with confidence. The aim is to spend limited practice time where it helps listeners most, and to keep the learner’s respect.",
      {key:"Teach what keeps words apart and what helps listeners first, let low-load features vary, and give feedback that protects the learner’s identity."}
    ]}
   ],
   try:[
    M("e6u10-l2-x1","Which statement best defines functional load?",1,[
      ["The number of lessons that a teacher spends on a sound","This describes a teacher’s plan, and not a property of the language."],
      ["The amount of work that a sound contrast does to keep words apart","Right. A contrast that keeps many words apart has a high load."],
      ["How strongly an accent is heard by a listener","This is accentedness, which is a different idea (Units 1 and 9)."],
      ["The number of speakers who use a sound","Functional load is about words, and not about numbers of speakers."]
    ]),
    {id:"e6u10-l2-x2", type:"sort", q:"In the proposal of Unit 8, which items are a priority for intelligibility, and which can vary?", buckets:["Priority for intelligibility","Can vary"], items:[
      {t:"The cluster at the start of *snow*", b:0, why:"Dropping a sound at the start of a word changes the word, so this is in the Core."},
      {t:"The two *th* sounds", b:1, why:"In Jenkins’ account these seldom stopped understanding, so they are not in the Core."},
      {t:"The difference between the vowels in *big* and *peas*", b:0, why:"The Core includes long and short vowels."},
      {t:"Weak forms of words such as *for* when you speak", b:1, why:"Weak forms are outside the Core."},
      {t:"Nuclear stress in *Please call STELLA*", b:0, why:"Nuclear stress shows the important word of the phrase and is in the Core."},
      {t:"The exact quality of most vowels", b:1, why:"The Core leaves out the exact quality of most vowels."},
      {t:"The puff of air after *p* in *please*", b:0, why:"The Core includes this feature, because it keeps *p* apart from *b*."},
      {t:"Dark *l*", b:1, why:"Dark *l* is outside the Core."}
    ]},
    {id:"e6u10-l2-x3", type:"number", q:"A teacher wrote eight word pairs: pin/bin, thigh/thy, pat/bat, ice/eyes, ether/either, rope/robe, light/right, teeth/teethe. How many of the pairs differ in /p/ and /b/?", answer:3, tol:0, unit:"pairs", why:"The pairs pin/bin, pat/bat and rope/robe differ only in /p/ and /b/. Two of them have the sound at the start of the word, and rope/robe has it at the end.", wrongs:[{v:2, tol:0, why:"This counts only the pairs with the sound at the start. The contrast also counts at the end, as in rope/robe."},{v:8, tol:0, why:"This counts every pair. The other five pairs differ in other sounds."}], hint2:"Look for pairs that differ in /p/ and /b/ and in nothing else."},
    {id:"e6u10-l2-x4", type:"match", q:"Match each person or idea to what it says.", pairs:[
      ["Levis (2005)","Names the nativeness principle and the intelligibility principle","Two goals for pronunciation teaching."],
      ["Catford (1987)","Made ranked lists of contrasts from minimal-pair counts","An early source for functional load."],
      ["Munro and Derwing (2006)","An exploratory study of high-load and low-load changes","High-load changes were rated less comprehensible."],
      ["Jenkins (2000)","The Lingua Franca Core","It came from talk between additional-language speakers."],
      ["Munro and Derwing (1995)","Accent, comprehensibility and intelligibility are related but partly independent","Unit 9 described this study."]
    ]},
    {id:"e6u10-l2-x5", type:"order", q:"A learner says *rice* when she means *lice*. Put the teacher’s feedback steps in a sensible order.", items:[
      {t:"Listen for the meaning of the whole sentence", why:"Meaning comes first. The context may already show the word."},
      {t:"Check the context with the learner", why:"A short question shows whether there was a real misunderstanding."},
      {t:"Ask a choice question: “Rice or lice?”", why:"A choice keeps the focus on words and does not shame the learner."},
      {t:"Give a short model and let the learner say it again", why:"A model helps the learner hear and say the contrast."},
      {t:"Praise the part that worked", why:"Specific praise shows the learner what to keep."}
    ]},
    {id:"e6u10-l2-x6", type:"spot", q:"A teacher wrote these notes. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Functional load can be explored by counting minimal pairs.", flag:false, why:"Correct. This is a simple method, and researchers use more detailed ones."}, " ", {t:"A contrast with low functional load never matters.", flag:true, why:"A low-load contrast can matter in one sentence. The idea is about where practice time may do the most good."}, " ", {t:"Munro and Derwing (2006) gave final proof of the functional load principle.", flag:true, why:"Their study was exploratory, and one review calls the result a preliminary confirmation."}, " ", {t:"I can give feedback without telling a learner to lose an accent.", flag:false, why:"Correct. Feedback can focus on one feature and say why."}, " ", {t:"The two *th* sounds are low priority in both the Core and the functional load lists.", flag:false, why:"Correct. Both treat them as less urgent."}, " ", {t:"Learners must follow the Core, even when their exam asks for something else.", flag:true, why:"The Core is a proposal about priorities. A learner may prepare for an exam’s own demands."}, "”"
    ]},
    M("e6u10-l2-x7","You will hear a speaker from Sydney. Whatever you hear, which statement is the most careful?",2,[
      ["“This speaker has a low-load accent, so the speech must be easy to understand.”","Load belongs to contrasts, and not to a speaker. A clip cannot show how easy it is for every listener."],
      ["“This clip shows how all Australians say the clusters in *spoons* and *snow*.”","One speaker is one person, and a clip does not show a whole country."],
      ["“I can describe the consonants I hear at the start of *spoons* and *snow*, and I will not rank the speaker.”","Right. It describes what is heard and stays within the evidence."],
      ["“The clip shows which learners need most help.”","A clip of one speaker says nothing about learners."]
    ], {listen:"e6u10-l2-a1", hint:"The answer does not depend on what the speaker does. Think about what one recording can show."}),
    {id:"e6u10-l2-x8", type:"explain", q:"A learner says, “My teacher wants me to lose my accent.” Write a short answer for a teacher who follows the intelligibility principle.", size:"3–5 sentences", prompt:"My goal is that listeners understand you, and …", hint:"Think about accent and understanding, what you will practice first, and the learner’s choice.", points:["Says that accent and understanding are different things","Names one or two priorities, such as clusters, vowel length or nuclear stress","Says that features such as the two *th* sounds can vary","Says that the learner can choose a different goal"], model:"My goal is that listeners understand you, and an accent is normal. Accent and understanding are different things. We will practice a few features that keep words apart, such as the clusters at the start of words, long and short vowels and the main stress of a phrase. Features such as the two *th* sounds can vary. If you want a different goal, tell me, and we will plan it together."}
   ],
   apply:{
    intro:"These tasks use your own notes. You do not need an account or a recording.",
    tasks:[
     {t:"Test functional load with your own word list", how:[
       "Write ten pairs of English words that differ in /p/ and /b/. You may use a dictionary.",
       "Write ten pairs that differ in /θ/ and /ð/. Count how many you can find.",
       "Write one sentence about what your two counts suggest, and one sentence about what they cannot show."
     ], write:"The /p/ and /b/ pairs… the /θ/ and /ð/ pairs… what the counts suggest and cannot show…"},
     {t:"Plan feedback for one feature", how:[
       "Choose one feature from the first row of the priority table.",
       "Write the five steps of your feedback: meaning, context, choice question, model, praise.",
       "Write one sentence that tells the learner why this feature comes first."
     ], write:"The feature… the five steps… the reason…"}
    ],
    proof:"A page with two word lists and what they suggest, and a feedback plan for one feature."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”", note:"Read it for the idea that speech carries information about identity as well as words."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u10-l3", title:"Listening across Englishes", minutes:55,
   hook:{q:"A teacher plays six speakers reading the same paragraph and asks, “Which speaker is the easiest to understand?” What is the main problem with this task?", options:["It uses too many speakers","It asks learners to rank speakers, and ease of understanding depends on the listener, the task and what the listener already knows","It uses a paragraph that is too short","It should use only first-language speakers"], answer:1, reveal:"**It ranks people.** Understanding happens between a speaker and a listener (Unit 8). A ranking turns a personal experience into a score for a speaker. A better task asks what helped learners understand, and it is the same for every speaker."},
   goals:[
     "Explain why a class needs a listening plan with many speakers, with hedged evidence",
     "Apply five rules for a fair listening task",
     "Use this course’s recordings in a six-week plan, without rating or guessing about any speaker",
     "Teach learners what to do when they do not understand",
     "Check the license and the labels of listening materials"
   ],
   learn:[
    {h:"Why listening needs its own plan", body:[
      {lead:"Learners meet many Englishes before they speak any of them, so listening deserves its own plan."},
      "A learner in a class often hears one teacher and one set of recordings. Outside class, the learner may hear colleagues from several countries, videos from many places and travelers. If the class has taught only one voice, those other voices feel like a shock.",
      "Laboratory research suggests that hearing several voices helps. Bradlow and Bent (2008, in the journal *Cognition*) worked with listeners whose first language was American English. The listeners wrote down English sentences, played in noise, from talkers with what the study calls a Chinese accent. Listeners who trained with one talker did no better with a new talker than listeners who had only practiced the task. Listeners who trained with five talkers did better with a new talker who had the same accent. For a talker with a different accent, the training gave no extra help. This was one laboratory study, and its listeners were not learners of English. It is a reason to try a plan with several speakers, and not a proof that any class will gain.",
      "A plan has another benefit. Learners hear that many people succeed in English with many accents. This fits Units 3 to 8, where you listened to speakers from many places, and it fits the idea of Unit 1 that a variety is a full system.",
      "The word *exposure* alone is not enough. Learners need a task, support and a chance to think about what they heard."
    ]},
    {h:"Five rules for a fair listening task", body:[
      {lead:"A good task asks what a listener can do. A bad task asks learners to judge a speaker."},
      {ol:[
        "**One task, many voices.** Give every speaker the same task. Then the difference you notice comes from the voices and not from the task.",
        "**Start with a purpose.** Ask learners to listen for the gist, then for details, then to check with the text. The cycle is below.",
        "**Support first.** Teach three or four key words before the first play. Then listening practice is about sounds and not about hidden vocabulary.",
        "**Repeat over weeks.** Play different speakers again with the same kind of task. Listeners often follow a variety better after they have heard it more (Unit 1).",
        "**Never rate a speaker.** Do not ask who sounds best, who sounds educated or where the speaker is from. Ask what helped understanding."
      ]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">A listening cycle for one clip</text><rect class="d-soft" x="40" y="30" width="260" height="42" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">1. Predict from the topic</text><path class="d-ink" d="M170 74L170 86" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 82L170 94L178 82z"/><rect class="d-sage" x="40" y="96" width="260" height="42" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle">2. Listen for the gist</text><path class="d-ink" d="M170 140L170 152" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 148L170 160L178 148z"/><rect class="d-lup" x="40" y="162" width="260" height="42" rx="8" stroke-width="2"/><text x="170" y="188" text-anchor="middle">3. Listen for details</text><path class="d-ink" d="M170 206L170 218" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 214L170 226L178 214z"/><rect class="d-gold" x="40" y="228" width="260" height="42" rx="8" stroke-width="2"/><text x="170" y="254" text-anchor="middle">4. Check with the text</text><path class="d-ink" d="M170 272L170 284" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 280L170 292L178 280z"/><rect class="d-rose" x="40" y="294" width="260" height="32" rx="8" stroke-width="2"/><text x="170" y="315" text-anchor="middle">5. Say what helped</text></svg>', alt:"Five boxes in a column joined by arrows: predict from the topic, listen for the gist, listen for details, check with the text, and say what helped.", cap:"The cycle uses the same steps for every speaker."},
      "In the cycle, [[we-gist-listening|gist listening]] means listening for the main idea, and [[we-detail-listening|detail listening]] means listening for specific words or facts. The last step is a reflection that learners keep to themselves or share in words. It is not a score."
    ]},
    {h:"A six-week plan with this course’s recordings", body:[
      {lead:"The recordings in this course let a class compare many voices on one text."},
      "The Speech Accent Archive (Weinberger, George Mason University) has speakers who read the same English paragraph, “Please call Stella”. A learner can follow the printed text, so listening is about sounds and not about new words. The paragraph shows pronunciation only. It cannot show grammar or code-switching, and one speaker is one person.",
      "The table shows a plan with six speakers from Units 3 to 8. The bios are the archive’s labels.",
      {table:[["Speaker (recording)","Archive’s label","Unit"],["Edinburgh, Scotland","35, male","3"],["Columbus, Ohio, USA","30, male; close to General American","4"],["Singapore","25, male; English first, also Mandarin, Hokkien, Cantonese and Hainanese; always lived in Singapore","5"],["Quezon City, Philippines","43, male; English first, also Tagalog; Philippines and Canada","5"],["Accra, Ghana","21, male; English first, also Twi and Ga; Ghana and the US","6"],["Tokyo, Japan","21, female; Japanese first, English from 12; 2 months in the US","8"]]},
      {table:[["Week","Speakers","Task"],["1","Columbus and Edinburgh","Read the text first. Listen, and underline one word where you noticed a sound. Say which sound."],["2","Singapore and Accra","Cover the text. Write the food words you hear. Then check with the text."],["3","Quezon City and Tokyo","Listen twice. First, write what the text is about. Then write two things that helped you understand."],["4","None: a partner reads","Practice repair phrases (Unit 8) with a partner who reads one sentence quickly."],["5","A new pair of speakers","Use the week 1 task again."],["6","Any speaker","Write which strategy helped you most. Keep it private."]]},
      {ex:"Listen to a speaker from Edinburgh, Scotland (35, male). Read the paragraph, and then listen. Underline one word where you noticed a sound that your textbook audio does not have, or write that you noticed none. There is no single right answer, and one speaker is one person.", label:"Listen: Edinburgh", listen:"e6u10-l3-a1"},
      {ex:"Listen to a speaker from Singapore (25, male). English is his first language, and he also speaks Mandarin, Hokkien, Cantonese and Hainanese. He has always lived in Singapore. Cover the text and write the food words that you hear. Check them with the text.", label:"Listen: Singapore", listen:"e6u10-l3-a2"},
      {ex:"Listen to a speaker from Accra, Ghana (21, male). English is his first language, and he also speaks Twi and Ga. He has lived in Ghana and the US. Use the same task as for Singapore. Do not compare the two speakers. Compare your own results.", label:"Listen: Accra", listen:"e6u10-l3-a3"},
      {ex:"Listen to a speaker from Quezon City, Philippines (43, male). English is his first language, and he also speaks Tagalog. He has lived in the Philippines and Canada. Listen twice. First write what the text is about. Then write two things that helped you understand.", label:"Listen: Quezon City", listen:"e6u10-l3-a4"},
      {ex:"Listen to a speaker from Tokyo, Japan (21, female). Japanese is her first language, and she learned English from age 12. She had spent two months in the US. Use the same task as for Quezon City. Notice what helped you, and do not judge the speaker.", label:"Listen: Tokyo", listen:"e6u10-l3-a5"},
      {ex:"Listen to a speaker from Columbus, Ohio (30, male), who is close to General American. Use the same task as for Edinburgh: underline one word where you noticed a sound, or write that you noticed none. Then write one thing that helped you.", label:"Listen: Columbus", listen:"e6u10-l3-a6"}
    ]},
    {h:"What learners do when they do not understand", body:[
      {lead:"Teach learners what to do, and they will worry less about what they hear."},
      "Mariya Seto is from Shiojima, a small island an hour away by ferry. She studies English because she wants to become an interpreter, and speaking English makes her nervous. Imagine that she keeps a short notebook. She writes the date, the speaker’s place, one word she missed and what helped her to get it: the text, a second play, the topic or a pause. After a month, she has facts about her own listening.",
      "An interpreter needs to understand many speakers, so Mariya’s plan fits her goal. Other learners can use the same notebook. A teacher can give them a small set of repair moves, from Unit 8:",
      {list:[
        "ask for a repeat: “Could you say that again, please?”",
        "ask for a slower or shorter version",
        "ask the speaker to spell a name or a word",
        "say back what you understood: “You mean the second bus?”",
        "use the topic and the other words to guess the missing word"
      ]},
      "These moves share the work. They also keep the speaker from feeling blamed. Unit 5 introduced a similar idea, that understanding has three levels, and Unit 8 showed that both people adjust."
    ]},
    {h:"Choosing and checking materials", body:[
      {lead:"A listening plan is only as fair as its sources and its labels."},
      "Three open sources are useful. The Speech Accent Archive is licensed CC BY-NC-SA 4.0, so you credit the archive and the speaker, use it for non-commercial purposes and share any changes under the same license. Mozilla Common Voice is released under CC0, which means that it is free to use. Wikimedia Commons has a license for each file, so read the page of each file before you use it. If you record a visitor or a classmate, ask permission first.",
      "Use this checklist before a class.",
      {list:[
        "Is there a text or transcript for the first listening?",
        "Do the speakers come from several places, and are some of them additional-language speakers?",
        "Are the labels accurate? Say where a speaker lives and what the archive says. Never call one speaker “the accent of” a country.",
        "Is the task the same for each speaker?",
        "Does any task ask learners to rate or guess something about a speaker? If so, remove it."
      ]},
      "A careful claim about a clip has three parts, as Units 3 to 8 showed: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Teach learners to speak in this way.",
      {key:"Use one task with many voices, support the first listening, and ask what helped. Never ask learners to rank or guess about a speaker."}
    ]}
   ],
   try:[
    M("e6u10-l3-x1","Why does a plan with several speakers make sense, according to Bradlow and Bent (2008)?",1,[
      ["Because any amount of listening will teach all accents","The study did not show this. It looked at how listeners adapted to particular talkers."],
      ["Because training with several talkers helped listeners with a new talker, while training with one talker did not carry over","Right. The new talker had the same accent, and the listeners were first-language listeners. It was one laboratory study, so use it as a reason to try, and not as proof."],
      ["Because first-language speakers are always easier to understand","The study did not compare in this way, and ease depends on the listener."],
      ["Because learners should guess where each speaker is from","No study of this kind supports guessing, and it is a task to avoid."]
    ]),
    {id:"e6u10-l3-x2", type:"sort", q:"Which tasks belong in a fair listening class, and which should a teacher avoid?", buckets:["Fair task","Avoid"], items:[
      {t:"Ask what helped you understand each speaker", b:0, why:"This asks about the listener’s experience, and it does not rank anyone."},
      {t:"Ask learners to say which speaker is the best", b:1, why:"This ranks people."},
      {t:"Give every speaker the same task", b:0, why:"A shared task makes the comparison fair."},
      {t:"Ask learners to guess where each speaker is from", b:1, why:"Guessing about a real speaker turns listening into a judgment."},
      {t:"Teach three key words before the first play", b:0, why:"Support lets learners listen to sounds and not to hidden vocabulary."},
      {t:"Ask how educated each speaker sounds", b:1, why:"This asks learners to judge a person from speech."},
      {t:"Present one speaker as the accent of a whole country", b:1, why:"One speaker is one person, and a clip does not show a country."},
      {t:"Ask learners to check their notes with the text", b:0, why:"Checking with the text is a step in the listening cycle."}
    ]},
    {id:"e6u10-l3-x3", type:"order", q:"Put the steps of the listening cycle in order.", items:[
      {t:"Predict from the topic", why:"Prediction prepares the listener."},
      {t:"Listen for the gist", why:"The main idea comes before details."},
      {t:"Listen for details", why:"Details are easier once the gist is clear."},
      {t:"Check with the text", why:"The text lets the learner test what was heard."},
      {t:"Say what helped", why:"Reflection finishes the cycle, and it is not a score."}
    ]},
    {id:"e6u10-l3-x4", type:"match", q:"Match each source to the correct note.", pairs:[
      ["Speech Accent Archive","Licensed CC BY-NC-SA 4.0: credit it and use it non-commercially","Every speaker reads the same paragraph."],
      ["Mozilla Common Voice","Released under CC0, so it is free to use","Check the details of the data set before you use it."],
      ["Wikimedia Commons","Each file has its own license","Read the page of each file."],
      ["A recording of a visitor or classmate","Ask permission before you record or share it","Voices belong to the people who speak."]
    ]},
    {id:"e6u10-l3-x5", type:"spot", q:"A teacher wrote a plan. Tap each part that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Every speaker gets the same task.", flag:false, why:"Correct. A shared task makes the comparison fair."}, " ", {t:"Learners write a score from 1 to 5 for how easy each speaker is.", flag:true, why:"A score ranks people. Ask what helped, not how well the speaker did."}, " ", {t:"I teach four key words before the first play.", flag:false, why:"Correct. Support comes first."}, " ", {t:"Learners guess the country of each speaker from the voice.", flag:true, why:"Guessing about a real speaker is a judgment. The class should use the archive’s label."}, " ", {t:"I credit the Speech Accent Archive and the speaker.", flag:false, why:"Correct. The license requires a credit."}, " ", {t:"The clip of one speaker shows how everyone in that city speaks.", flag:true, why:"One speaker is one person."}, "”"
    ]},
    {id:"e6u10-l3-x6", type:"number", q:"A teacher plans two clips a week for six weeks. Each clip is played three times. How many plays are there in total?", answer:36, tol:0, unit:"plays", why:"2 clips × 6 weeks = 12 clips. 12 × 3 plays = 36 plays.", wrongs:[{v:12, tol:0, why:"This counts clips and forgets that each clip is played three times."},{v:18, tol:0, why:"This multiplies 6 weeks by 3 plays and forgets the two clips."}], hint2:"First find the number of clips, and then multiply by the number of plays."},
    M("e6u10-l3-x7","You will hear a speaker from Singapore. The archive says that English is his first language and that he always lived in Singapore. Whatever you hear, which claim is the most careful?",2,[
      ["“This clip shows the Singapore accent.”","One speaker is one person, and no clip shows a whole country."],
      ["“His English must be weaker, because he also speaks other languages.”","Speaking other languages does not make English weaker. This claim ranks a person."],
      ["“I can write the food words that I hear, and I will describe what helped me. I will not judge the speaker.”","Right. It describes the listener’s task and stays within the evidence."],
      ["“I can tell his grammar from this clip.”","A reading of a printed paragraph shows pronunciation only, not grammar."]
    ], {listen:"e6u10-l3-a2", hint:"The answer does not depend on what the speaker does. Think about what a clip can show."}),
    {id:"e6u10-l3-x8", type:"explain", q:"Design a ten-minute listening activity that uses two speakers and does not rate anyone. Write the steps.", size:"4–6 sentences", prompt:"First, learners …", hint:"Use the cycle, the same task for both speakers, a support step and a reflection.", points:["Gives the same task for both speakers","Includes support before the first play, such as key words","Uses at least two steps of the cycle, such as gist and check with the text","Ends with a reflection on what helped, and no score or ranking"], model:"First, learners read three key words and predict the topic. Then they listen to the first speaker for the gist and write what the text is about. Next they listen again for details and check their notes with the text. They repeat the same task with the second speaker. At the end, they write one thing that helped them understand, and nobody gives a score."}
   ],
   apply:{
    intro:"These tasks use your own notes and, if you like, the recordings in this unit.",
    tasks:[
     {t:"Keep a listening notebook for one week", how:[
       "Each day, listen to one clip for one or two minutes. Use this unit’s clips, or another open source whose license you have checked.",
       "Write the date, the speaker’s place from the label, one word you missed and what helped.",
       "At the end of the week, write which strategy helped you most."
     ], write:"Seven short notes… the strategy that helped most…"},
     {t:"Write a rule card for a listening class", how:[
       "Write the five rules of a fair listening task on one card, in your own words.",
       "Add one example task that follows the rules and one task that you would avoid.",
       "Write one sentence that you could say to a class about why you do not ask for ratings."
     ], write:"My five rules… a fair task and a task to avoid… the sentence for the class…"}
    ],
    proof:"A notebook of seven short notes, or a rule card with five rules and two example tasks."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"Read it for the idea that place matters for speech, and that a speaker is more than a place."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u10-l4", title:"Grammar, vocabulary and assessment", minutes:55,
   hook:{q:"A student writes, “You are coming tomorrow, isn’t it?” The task asks for a standard tag question. What is the most helpful first response?", options:["“That is wrong. Please fix it.”","“Many speakers use *isn’t it?* in this way, and it is recorded for Indian English. For this task, use *aren’t you?*.”","“Say nothing, because it is a variety feature.”","“Your English is poor.”"], answer:1, reveal:"**Name the feature and the task.** The invariant tag *isn’t it?* is documented for Indian English (Unit 5). The reply respects the variety and still prepares the student for the task."},
   goals:[
     "Separate a feature of a variety, a learner pattern and a slip, and ask four questions to decide",
     "Use eWAVE as a reference, and say what it can and cannot tell a teacher",
     "Teach local and shared words, and spelling, without calling a variety wrong",
     "Explain what tests reward, and why that does not make other forms wrong",
     "Mark fairly, and give feedback that does not “correct” someone’s variety"
   ],
   learn:[
    {h:"Three kinds of form that differ from the textbook", body:[
      {lead:"A form that differs from the textbook can be a feature of a variety, a learner pattern or a slip. The response is different for each."},
      {table:[["Kind","What it is","A typical sign"],["Feature of a variety","A regular pattern that many speakers share","It is documented, and many speakers use it the same way"],["Learner pattern","A rule that a learner is building","It appears often in one learner, and may come from the first language"],["Slip","A mistake that the writer would fix","It appears once, and the writer can correct it"]]},
      "The line between a feature and a pattern is not always clear. A learner in Japan who writes *isn’t it?* in every tag may have learned it from a book, from a teacher or from a first-language habit. The eWAVE atlas records varieties and communities, and it does not record every learner.",
      "A teacher can ask four questions. The diagram shows the order.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Four questions for a surprising form</text><rect class="d-soft" x="30" y="30" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="51" text-anchor="middle">1. Is it regular?</text><text class="s" x="170" y="69" text-anchor="middle">same form, same use, many times</text><path class="d-ink" d="M170 82L170 96" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 92L170 104L178 92z"/><rect class="d-sage" x="30" y="106" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="127" text-anchor="middle">2. Is it documented?</text><text class="s" x="170" y="145" text-anchor="middle">a variety, or a learner pattern</text><path class="d-ink" d="M170 158L170 172" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 168L170 180L178 168z"/><rect class="d-lup" x="30" y="182" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="203" text-anchor="middle">3. Does it block understanding?</text><text class="s" x="170" y="221" text-anchor="middle">for this reader or listener</text><path class="d-ink" d="M170 234L170 248" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 244L170 256L178 244z"/><rect class="d-gold" x="30" y="258" width="280" height="56" rx="8" stroke-width="2"/><text x="170" y="280" text-anchor="middle">4. What does the task need?</text><text class="s" x="170" y="298" text-anchor="middle">accept, explain, or teach the form</text></svg>', alt:"Four boxes in a column joined by arrows: is it regular, is it documented, does it block understanding, and what does the task need.", cap:"The first three questions describe the form. The fourth decides what to do."}
    ]},
    {h:"eWAVE as a reference", body:[
      {lead:"eWAVE is a good first place to check a grammar feature, and it does not decide what is right in a classroom."},
      "The [[we-ewave|electronic World Atlas of Varieties of English]] (eWAVE 3.0) maps 235 grammar features across 77 Englishes, which are 51 varieties of English and 26 English-based pidgins and creoles. It is edited by Bernd Kortmann, Kerstin Lunkenheimer and Katharina Ehret, and it is licensed CC BY 3.0. The earlier units used it for features of Irish, Indian, Nigerian and other Englishes.",
      {table:[["Example sentence","Documented as","A form a task may require"],["*You are coming tomorrow, isn’t it?*","The invariant tag *isn’t it?*, in Indian English (Unit 5)","*aren’t you?*"],["*She is having two brothers.*","The progressive with stative verbs, in Indian English (Unit 5)","*She has two brothers.*"],["*I’m after finishing the report.*","The *after*-perfect, in Irish English (Unit 3)","*I’ve just finished the report.*"],["*He doesn’t know nothing about it.*","Negative concord, in many varieties, including African American English (Unit 4)","*He doesn’t know anything about it.*"]]},
      "Read the table in two directions. The middle column says that each form is a regular feature of a community. The right column says what one task may need. Both are true at the same time.",
      "Be careful in two ways. First, eWAVE shows what speakers of a variety do, and it does not say that a learner who writes the form is a speaker of that variety. Second, it cannot say that a form is acceptable in a particular exam or a particular reader’s eyes. The task decides that."
    ]},
    {h:"Words and spelling", body:[
      {lead:"Vocabulary is the easiest place to show that local forms are normal and shared forms are useful."},
      "Earlier units gave many local words: *prepone*, *lakh* and *crore* in Indian English (Unit 5), *comfort room* in Philippine English (Unit 5), *robot* for a traffic light in South African English (Unit 4), *wee* in Scottish English (Unit 3) and *chop* in West African English (Unit 6). Each word is regular in its community, and a dictionary of that variety may list it.",
      "A teacher can use two aims. For listening and reading, learners should meet many local words, and a short gloss helps. For speaking and writing to a wide audience, learners should choose words that many listeners know, as Unit 8 explained for idioms and fast slang. This is the difference between [[we-receptive-productive|receptive and productive knowledge]]. A learner can understand a word without choosing to use it.",
      "Spelling follows the same idea. American and British spelling are both standard (Unit 4 and How English Works Unit 11). Choose one for a text and keep it. A learner who writes *colour* in one place and *color* in another has made an inconsistency, and a teacher can mark the inconsistency. A learner who writes *colour* consistently in a task that accepts it has not made an error.",
      "Japanese words in English talk need care too. Unit 8 showed that *wasei-eigo* words are Japanese words. In an English conversation, a listener may not know them, so the speaker can choose the English word."
    ]},
    {h:"What tests reward", body:[
      {lead:"A test is a tool with one purpose. Its documents say which English it rewards."},
      "A [[we-construct|construct]] is what a test claims to measure, for example writing for an academic reader. The test’s documents define a target. Some tests accept more than one variety of spelling and sound, and some ask for one. A teacher should read the test’s own guidance and not rely on rumors.",
      "This matters for fairness. If a test rewards one variety, a learner who wants to pass should prepare for that variety. That is a fact about the test. It is not a claim that other varieties are wrong. A teacher can say, “For this task, use X”, and later say, “In other places, Y is also used”.",
      "Matsuda’s (2012) edited volume has a chapter titled “Assessing Proficiency in EIL”, and McKay (2002) discusses standards in her third chapter. They raise questions that this lesson cannot settle. Should an EIL class test understanding between people? Should a test accept several varieties? Read them if you design assessments.",
      {warn:"“Not accepted in this task” and “wrong” are different messages. A mark can reflect the first without teaching the second."}
    ]},
    {h:"Fair marking and feedback", body:[
      {lead:"Fair marking is planned before the marking begins."},
      "A [[we-rubric|rubric]] is a table of criteria and marks. A fair rubric for writing separates the task, the organization and the language. It also lists in advance which forms the task requires and which it accepts. If two teachers mark the same text, they should agree on this list.",
      {list:[
        "**List accepted forms.** Write down which spelling system the task uses and which local forms you will accept.",
        "**Mark patterns once.** If the same feature appears five times, comment on the pattern and take marks off once. This is a practical suggestion, and you can adapt it.",
        "**Separate understanding from form.** Give marks for whether a reader can follow the writing, and then marks for the required form.",
        "**Use a second marker** for a sample, and talk about differences.",
        "**Give feedback that teaches.** Say what the task needs, and why."
      ]},
      {table:[["Instead of","Try"],["“Wrong.”","“This is a common form in many Englishes. This task needs *aren’t you?*.”"],["“Bad English.”","“Your meaning is clear. Let’s make the tag match the task.”"],["Marking every instance","Marking the pattern once, with an example"],["“Native speakers do not say that.”","“Many speakers say it, and readers of this report expect X.”"]]},
      "Feedback also protects the learner’s identity. A teacher can ask, “Who will read this?”. The answer shows which form to choose. Feedback gives information. It does not ask a learner to give up a variety.",
      {key:"Name the feature, name the task, and choose the form for the reader. Plan accepted forms before marking, and mark patterns once."}
    ]}
   ],
   try:[
    M("e6u10-l4-x1","A student writes, “She is having two brothers.” The first question a teacher should ask is:",1,[
      ["“Who taught you this mistake?”","This blames the learner and does not describe the form."],
      ["“Is this form regular, and is it documented for a variety?”","Right. The first questions describe the form. The progressive with stative verbs is documented for Indian English (Unit 5)."],
      ["“How many marks will I take off?”","The marks come at the end, after you know what the task needs."],
      ["“Which first-language speaker would say this?”","This question is about a person and not about the form."]
    ]),
    {id:"e6u10-l4-x2", type:"sort", q:"Is each form a feature of a variety that eWAVE or the earlier units document, or is it more likely a slip?", buckets:["Documented feature of a variety","Slip or inconsistency"], items:[
      {t:"The tag *isn’t it?* used for many subjects (Indian English)", b:0, why:"Documented in eWAVE for Indian English (Unit 5)."},
      {t:"*I’m after eating* for “I have just eaten” (Irish English)", b:0, why:"The *after*-perfect is a regular feature of Irish English (Unit 3)."},
      {t:"A writer types *the the* once in a long text", b:1, why:"A repeated word that appears once is a slip."},
      {t:"A writer writes *recieve* once and *receive* five times", b:1, why:"The writer knows the spelling, so the odd form is a slip."},
      {t:"Habitual *do be* (Irish English)", b:0, why:"A documented feature of Irish English (Unit 3)."},
      {t:"A writer uses *colour* in one line and *color* in the next", b:1, why:"Both spellings are standard. The inconsistency inside one text is the problem."}
    ]},
    {id:"e6u10-l4-x3", type:"order", q:"Put the teacher’s steps in order when a surprising form appears in a student’s work.", items:[
      {t:"Notice the form and see whether it is regular", why:"Regularity shows that the writer follows a rule."},
      {t:"Check whether it is documented for a variety", why:"eWAVE and the units can help with this."},
      {t:"Ask whether it blocks understanding for the reader", why:"Understanding is the main purpose of the text."},
      {t:"Check what the task and the reader need", why:"The task decides which form is needed."},
      {t:"Respond: accept, explain or teach the required form", why:"The response comes after all four checks."}
    ]},
    {id:"e6u10-l4-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["eWAVE","An atlas of grammar features of many Englishes","It lists 235 features and 77 Englishes."],
      ["Construct","What a test claims to measure","Read the test’s documents to see it."],
      ["Rubric","A table of criteria and marks","It should list accepted forms in advance."],
      ["Receptive knowledge","Understanding a word when you hear or read it","A learner may not choose to use it."],
      ["Productive knowledge","Using a word when you speak or write","It should suit the audience."]
    ]},
    {id:"e6u10-l4-x5", type:"spot", q:"A teacher wrote these marking notes. Tap each one that is **unfair or misleading**.", ask:"unfair or misleading", parts:[
      "“", {t:"Before marking, I list the spelling system and the local forms that I accept.", flag:false, why:"Correct. A list makes marking fair and clear."}, " ", {t:"If *isn’t it?* appears six times, I take off six marks.", flag:true, why:"A pattern is better marked once, with a comment."}, " ", {t:"A form that eWAVE documents is acceptable in every exam.", flag:true, why:"eWAVE shows what speakers do. Each task and test decides what it accepts."}, " ", {t:"I tell students that a form is not accepted in this task, and I do not say that it is wrong.", flag:false, why:"Correct. This keeps the message accurate."}, " ", {t:"I give marks for whether a reader can follow the writing.", flag:false, why:"Correct. Understanding is a separate criterion."}, " ", {t:"A student who writes *colour* consistently has made an error on a task that accepts both spellings.", flag:true, why:"Consistent spelling in an accepted system is not an error."}, "”"
    ]},
    {id:"e6u10-l4-x6", type:"number", q:"A writing task has 20 marks: 8 for the task, 6 for organization and 6 for language in the required form. A student gets full marks for the task and organization, and 4 out of 6 for language. What is the student’s total?", answer:18, tol:0, unit:"marks", why:"8 + 6 + 4 = 18 marks out of 20.", wrongs:[{v:14, tol:0, why:"This leaves out the 4 language marks. 8 + 6 = 14."},{v:16, tol:0, why:"This subtracts 4 from 20, as if 4 marks were lost. The student lost 2 marks."}], hint2:"Add the marks that the student earned in each part."},
    M("e6u10-l4-x7","Two essays are consistent in spelling. One uses *color*, and the other uses *colour*. The task says that both American and British spelling are accepted. What is the fair mark for spelling?",0,[
      ["The same mark for both, if each essay is consistent","Right. Both systems are accepted, so consistency is what counts."],
      ["A higher mark for *color*, because it is more common","The task accepts both, and a mark for a preference would be unfair."],
      ["A higher mark for *colour*, because it looks more formal","The task accepts both. A look of formality is not a criterion."],
      ["No mark for either, because each is a variety","Both are standard spellings, and the task accepts them."]
    ]),
    {id:"e6u10-l4-x8", type:"explain", q:"A student has written “You are coming tomorrow, isn’t it?” in a report. Write feedback in two or three sentences.", size:"2–4 sentences", prompt:"This form is common in many Englishes, and …", hint:"Name the feature, name the task and the reader, and say what to use.", points:["Says that the form is a regular feature in some varieties","Says what this task or reader needs","Gives the required form, for example *aren’t you?*","Does not call the student’s English wrong"], model:"This form is common in many Englishes, and it is a regular tag in Indian English. In this report, your reader expects the tag to match the verb, as in “You are coming tomorrow, aren’t you?”. Your meaning is clear, and this change helps your reader."}
   ],
   apply:{
    intro:"These tasks use your own notes and one free web page. Nothing needs an account.",
    tasks:[
     {t:"Check one feature in eWAVE", how:[
       "Open the [eWAVE atlas](https://ewave-atlas.org/) and find the page of features.",
       "Choose one feature that this course mentioned, such as the invariant tag or the *after*-perfect.",
       "Write where it is recorded, and one sentence about what the atlas cannot tell a teacher."
     ], write:"The feature… where it is recorded… what the atlas cannot tell a teacher…"},
     {t:"Write a short marking guide", how:[
       "Choose a short writing task, such as an email to a customer.",
       "List the spelling system, three accepted local forms and two forms that the task requires.",
       "Write four feedback sentences that follow the table in this lesson."
     ], write:"The task… the accepted and required forms… four feedback sentences…"}
    ],
    proof:"A page with one eWAVE feature, and a marking guide with accepted forms and four feedback sentences."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"Read it after this lesson for the idea that variation is normal in every language."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u10-l5", title:"Putting it together: a plan for a class, and ten units in one page", minutes:60,
   hook:{q:"A teacher has one 50-minute lesson each week and a set textbook. She wants to bring in the ideas of this course. Which plan fits best?", options:["Replace the textbook with recordings of many varieties","Add short routines to the existing lessons, and keep the textbook and the exam target","Stop all pronunciation teaching","Teach one new variety every week for speaking"], answer:1, reveal:"**Add short routines.** A teacher works inside a curriculum, a textbook and an exam. A routine of ten or fifteen minutes can add listening, priorities for pronunciation, repair phrases and careful feedback without replacing anything."},
   goals:[
     "Turn the ideas of Lessons 1 to 4 into a short plan for a class in Japan",
     "Adapt a plan to a curriculum, a textbook and an exam, without replacing them",
     "Answer common concerns from parents and colleagues in a neutral way",
     "Review the main ideas of all ten units, and say how each helps a teacher or a learner"
   ],
   learn:[
    {h:"From ideas to a plan", body:[
      {lead:"A plan needs six decisions, and the first four lessons of this unit gave you one decision each."},
      {table:[["Decision","Question","Lesson"],["Goal and model","Who will learners talk to, and which reference model fits?","1"],["Pronunciation","Which features come first, and which can vary?","2"],["Listening","Which speakers, which task, and how often?","3"],["Grammar and words","Which local forms do we accept, and which does the task need?","4"],["Assessment","What does the test reward, and how do we mark fairly?","4"],["Feedback","How do we give information without “correcting” a variety?","2 and 4"]]},
      "A plan does not have to be long. It has to be honest about its limits. The teacher works inside a curriculum, a textbook and often an exam. The plan adds to them. It does not replace them."
    ]},
    {h:"An example plan for a class in Japan", body:[
      {lead:"This example is a design, and it is not a description of any real school or program."},
      "Japan’s national curriculum states what each school subject teaches, and Unit 8 explained that the education ministry revises it about every ten years. Since 2020, English has been a formal subject in grades 5 and 6, and foreign language activities start in grade 3. A teacher in a school follows this curriculum. A teacher of adults has more freedom, but may still use a textbook and a test.",
      "The plan below suits a class of teenagers or adults who meet for one 50-minute lesson a week for eight weeks. Each week uses ten to fifteen minutes. The rest of the lesson follows the textbook.",
      {table:[["Week","Focus","Activity (about 15 minutes)"],["1","Who uses English","A needs analysis: learners write who they will speak English with (Units 1 and 8)"],["2","Listening, first round","Two speakers, the listening cycle, no ratings (Lesson 3)"],["3","Pronunciation priorities","Clusters and nuclear stress with *spoons*, *snow* and *Please call STELLA* (Lesson 2)"],["4","Katakana English and wasei-eigo","Compare Japanese words with English words, and choose the word a listener can follow (Unit 8)"],["5","Understanding each other","Repair phrases in pairs (Unit 8)"],["6","Feature or error?","Four sentences, with the response: accept, explain or teach the required form (Lesson 4)"],["7","Writing for a reader","A short email, with a rubric that lists accepted forms (Lesson 4)"],["8","Reflection","Learners write what helped, and the teacher reviews the plan (Lesson 1)"]]},
      "The plan has a pattern. Each week has one clear skill, one short task and one link to the course. The teacher can change the order, shorten the activities or repeat a week.",
      {tip:"Keep the exam target in view. If a test accepts one spelling system or one sound model, say so in week 1, and prepare for it. The plan adds understanding and listening, and it does not change the target."}
    ]},
    {h:"Toby plans a community class (imagined)", body:[
      {lead:"A teacher with experience can still choose to add other voices."},
      "Toby Whitlock grew up in Tasmania, Australia. He taught English at a country school in Japan for two years, and now he is a master’s student in Japanese linguistics. This scene is imagined. Suppose that a community group asks him to plan a short English class for adults in a small town.",
      "Toby knows that his own English is one variety among many, and Unit 4 described Australian English as a full system. He would not make it the only model. He would bring recorded voices from several places, and he would ask the adults who they expect to speak English with. If most of them expect to meet visitors from many countries, he would teach the priorities of Lesson 2 and practice the repair phrases of Unit 8. He would avoid idioms and fast slang in his own talk, as Unit 8 suggested.",
      "Toby would also remember his own learning of Japanese. A learner who speaks with care and asks for repetition is not weak. This helps him to give the adults the same kind of respect."
    ]},
    {h:"Answering the questions you will get", body:[
      {lead:"Parents, colleagues and learners will ask about the plan. A neutral answer uses what you have learned."},
      {table:[["Concern","A neutral reply","Basis"],["“Will this lower exam scores?”","“The plan adds short routines. The exam target stays the same, and we prepare for it.”","The test’s own documents (Lesson 4)"],["“We want a first-language model.”","“We teach a clear reference model. We also add listening to many voices, because learners will meet them.”","Lessons 1 and 3"],["“I am not a first-language speaker, so I am not a good model.”","“Learners need a clear model and many voices. Kirkpatrick (2010) proposes that local multilingual teachers can be good models.”","Unit 8, and Unit 9 on native-speakerism"],["“There is no time.”","“Ten minutes a week is enough to start: one clip, one task.”","Lesson 3"],["“Learners laugh at some accents.”","“We describe what helps understanding. We do not rank or mock speakers, and every variety is a full system.”","Unit 1 and Lesson 3"]]},
      "A neutral reply does not claim more than the evidence gives. Several ideas in this course are proposals or early results, such as the Core and functional load. Say so when you explain them."
    ]},
    {h:"Ten units in one page", body:[
      {lead:"The course has three parts. Each part gave you tools for the next."},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">The course in three parts</text><rect class="d-sage" x="14" y="30" width="312" height="84" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Part 1: How English became many Englishes</text><text class="s" x="170" y="74" text-anchor="middle">1 One language, many Englishes</text><text class="s" x="170" y="94" text-anchor="middle">2 How English spread</text><rect class="d-lup" x="14" y="124" width="312" height="104" rx="8" stroke-width="2"/><text x="170" y="146" text-anchor="middle">Part 2: A tour of the Englishes</text><text class="s" x="170" y="166" text-anchor="middle">3 Britain, Ireland · 4 North America and others</text><text class="s" x="170" y="186" text-anchor="middle">5 South and Southeast Asia · 6 Africa, Caribbean</text><text class="s" x="170" y="206" text-anchor="middle">7 Pidgins and creoles</text><rect class="d-gold" x="14" y="238" width="312" height="84" rx="8" stroke-width="2"/><text x="170" y="260" text-anchor="middle">Part 3: Using and teaching Englishes</text><text class="s" x="170" y="282" text-anchor="middle">8 English as a shared language · 9 Attitudes</text><text class="s" x="170" y="302" text-anchor="middle">10 Teaching across Englishes</text></svg>', alt:"Three bands from top to bottom. Part 1 has Units 1 and 2. Part 2 has Units 3 to 7. Part 3 has Units 8 to 10.", cap:"The course in three parts."},
      {table:[["Unit","The main idea","In teaching"],["1","Varieties are full systems. Circles describe history and role, not skill.","Do not rank learners or varieties."],["2","English spread through settlement, colonial rule and global media. Schneider’s model describes change.","Explain where a variety comes from."],["3","RP is one accent with a social history. Scottish and Irish English have their own features.","Use reference accents as tools, not as the standard of all English."],["4","General American, Canadian, Australian and other varieties are rule-governed.","Describe features, and do not mock them."],["5","Indian, Singapore and Philippine English have regular features and a range of styles.","Use eWAVE and sources to check a feature."],["6","African and Caribbean Englishes have their own histories. Language and school are linked.","Respect the whole repertoire of a learner."],["7","Pidgins and creoles are full languages with grammar.","Never call a creole “broken English”."],["8","ELF is a way of using English. The Core is a proposal about priorities. Accommodation is shared work.","Teach strategies, and plan priorities."],["9","Listeners judge accents, and identity and power matter.","Never ask learners to rank speakers."],["10","Choose a model on purpose, listen widely and mark fairly.","Plan with the learner’s goals."]]},
      "Unit 9 explained how listeners judge ways of speaking, for example with the matched-guise technique (Lambert and colleagues, 1960). It also looked at native-speakerism (Holliday 2006), at published studies of hiring, and at linguistic imperialism (Phillipson 1992) and its critics.",
      "Phillipson named five beliefs about teaching that he called fallacies: the monolingual, native-speaker, early-start, maximum-exposure and subtractive fallacies (Unit 9). This unit touches on three of them. Lesson 1 did not treat a first-language speaker as the only possible model. In week 4 of the plan, learners compare Japanese words with English words, so their first language has a place in the class. The early-start and maximum-exposure beliefs are about when English starts and how much of it a class gets. This unit does not take a side on them.",
      {key:"Many Englishes means many full systems. A teacher chooses a model on purpose, teaches for understanding, listens widely, and marks and gives feedback fairly."}
    ]}
   ],
   try:[
    M("e6u10-l5-x1","Which part of the plan for a class in Japan is the best fit for week 4?",1,[
      ["A needs analysis of what learners need English for","This is the activity for week 1."],
      ["Comparing Japanese words that come from English with the English words, and choosing the word a listener can follow","Right. Unit 8 explained katakana English and wasei-eigo as Japanese words."],
      ["A rubric with accepted forms for a writing task","This is week 7."],
      ["Repair phrases in pairs","This is week 5."]
    ]),
    {id:"e6u10-l5-x2", type:"sort", q:"In which part of the course does each idea belong?", buckets:["Part 1: how English became many Englishes (Units 1–2)","Part 2: a tour of the Englishes (Units 3–7)","Part 3: using and teaching Englishes (Units 8–10)"], items:[
      {t:"Kachru’s three circles", b:0, why:"The circles are in Unit 1."},
      {t:"Schneider’s Dynamic Model", b:0, why:"The model is in Unit 2."},
      {t:"The Scottish Vowel Length Rule", b:1, why:"It is in Unit 3, on Britain and Ireland."},
      {t:"Tok Pisin and Krio", b:1, why:"They are in Unit 7, on pidgins and creoles."},
      {t:"The Lingua Franca Core", b:2, why:"It is in Unit 8, on English as a shared language."},
      {t:"Functional load", b:2, why:"It is in this unit, Unit 10."},
      {t:"The matched-guise technique", b:2, why:"It belongs to Unit 9, on attitudes."},
      {t:"Philippine English and Taglish", b:1, why:"They are in Unit 5."}
    ]},
    {id:"e6u10-l5-x3", type:"match", q:"Match each unit to its main idea.", pairs:[
      ["Unit 1","Circles describe the history and role of English, not skill","The circles do not rank people."],
      ["Unit 4","General American, Canadian and Australian English are rule-governed varieties","Each is a full system."],
      ["Unit 6","African and Caribbean Englishes have their own histories","Language and school are linked."],
      ["Unit 7","Creoles are full languages with grammar","“Broken English” is the wrong description."],
      ["Unit 8","The Lingua Franca Core is a proposal about priorities","Accommodation is shared work."],
      ["Unit 10","A teacher chooses a model on purpose and marks fairly","Listening to many voices is part of the plan."]
    ]},
    {id:"e6u10-l5-x4", type:"order", q:"Put these steps of building a short plan in a sensible order.", items:[
      {t:"Ask what the learners need English for", why:"The goals shape every other decision."},
      {t:"Read what the curriculum, textbook and exam require", why:"These are fixed, and the plan must fit them."},
      {t:"Choose a reference model and pronunciation priorities", why:"Now you can choose a target for speaking and writing."},
      {t:"Add listening, repair phrases and feedback routines", why:"The routines support the target and prepare for other voices."},
      {t:"Review the plan after a few weeks", why:"Goals and needs can change, and the plan should change too."}
    ]},
    {id:"e6u10-l5-x5", type:"spot", q:"A teacher wrote these notes about the class plan. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"The plan adds short routines to the textbook lessons.", flag:false, why:"Correct. It does not replace them."}, " ", {t:"The plan lets me ignore the exam target.", flag:true, why:"The exam target stays. The plan adds listening and understanding."}, " ", {t:"I will not ask learners to rate speakers.", flag:false, why:"Correct. Ratings turn listening into a judgment."}, " ", {t:"Katakana English words are mistakes in English.", flag:true, why:"They are Japanese words. In an English conversation, a speaker can choose the English word."}, " ", {t:"A neutral reply to a parent does not claim more than the evidence gives.", flag:false, why:"Correct. Some ideas are proposals or early results."}, " ", {t:"This plan is the way that all classes in Japan teach.", flag:true, why:"It is an example design and not a description of any real school or program."}, "”"
    ]},
    {id:"e6u10-l5-x6", type:"number", q:"The routines in the plan take 15 minutes of each 50-minute lesson. The plan lasts 8 weeks. How many minutes do the routines take in total?", answer:120, tol:0, unit:"minutes", why:"15 × 8 = 120 minutes, which is two hours.", wrongs:[{v:400, tol:0, why:"This is 50 × 8, which counts the whole lessons."},{v:23, tol:0, why:"This adds 15 and 8, and it should multiply them."}], hint2:"Multiply the minutes of the routines by the number of weeks."},
    M("e6u10-l5-x7","In the imagined scene, Toby plans a community class for adults. Which choice fits the ideas of this unit best?",2,[
      ["He teaches only his own Australian English, because he knows it best.","This makes one voice the only model. Learners need other voices."],
      ["He tells the adults to lose their accents.","The unit teaches that accent and understanding are different, and feedback should protect identity."],
      ["He asks who the adults expect to speak English with, and adds recorded voices from several places.","Right. This follows a needs analysis and a listening plan."],
      ["He rates the recorded speakers and plays only the best.","Rating speakers is the task to avoid."]
    ]),
    {id:"e6u10-l5-x8", type:"explain", q:"Write the first paragraph of your own plan for a class or for your own study. Name the learners’ goal, the reference model and two routines.", size:"4–6 sentences", prompt:"My learners need English for …", hint:"Use the six decisions: goal and model, pronunciation, listening, grammar and words, assessment, and feedback.", points:["Names the learners’ goal and who they will speak to","Chooses a reference model and gives a reason","Names two routines, such as a listening cycle or repair phrases","Says how the plan fits the exam or textbook"], model:"My learners need English for work with colleagues from several countries. I will use General American as the reference model for speaking and writing, because our textbook and test use it. Each week I will add two routines: a listening cycle with two speakers and a pair task with repair phrases. The routines take fifteen minutes and fit inside the textbook lesson. We will not rate any speaker, and the test target stays the same."}
   ],
   apply:{
    intro:"These tasks use your own notes. They can describe a real class or an imagined one.",
    tasks:[
     {t:"Write a plan for eight weeks", how:[
       "Choose a class: teenagers, adults or yourself as a learner.",
       "Copy the table of the example plan, and change the focus and the activity for each week.",
       "Add one sentence per week that links to a lesson or a unit of this course."
     ], write:"The class… eight weeks with a focus and an activity… the links…"},
     {t:"Prepare answers to three concerns", how:[
       "Choose three concerns from the table that you are most likely to hear.",
       "Write a neutral reply for each, in two sentences or fewer.",
       "Mark which reply uses a proposal or an early result, and add a hedge."
     ], write:"Three concerns… three replies… the hedges…"}
    ],
    proof:"An eight-week plan with links to the course, and three neutral replies with hedges."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.3 “Language changes”", note:"Read it as a look back at the course: varieties change, and nobody’s English is frozen."}
   ]
  }
  ],
  checkpoint:["e6u10-q07","e6u10-q16","e6u10-q23","e6u10-q30","e6u10-q35","e6u10-q36","e6u10-q37","e6u10-q38","e6u10-q39","e6u10-q40","e6u10-q41","e6u10-q42"],
  codex:[
   {id:"we-which-english-to-teach", title:"Which English to teach: models and learner goals", aka:["instructional model","EIL","native-speaker model","local standard"], tags:["world englishes","teaching"],
    summary:"A class always has a model. Writers describe native-speaker, local-standard and lingua franca models, and learners’ goals help a teacher choose.",
    levels:{
     starter:[
      "Every English class has an **instructional model**: the variety that learners are asked to aim at. You hear it in the audio, see it in the spelling and notice it in the teacher’s speech. Often nobody chose it on purpose.",
      "Writers on teaching describe three models. In the **native-speaker model**, learners aim at a first-language variety such as General American or Southern British English. In the **local-standard model**, learners aim at the educated English of their own country. In the **lingua franca model**, learners aim at being understood by many kinds of speaker.",
      "A teacher can choose by asking what the learners need. Who will they talk to? Which exam is coming? What materials and teachers are there? A common choice is one reference model for speaking and writing, and many voices for listening. A model is a target, and it is not a ranking of people."
     ],
     builder:[
      "Kirkpatrick (2007) compares an exonormative native-speaker model, an endonormative nativized model and a lingua franca model in *World Englishes: Implications for International Communication and English Language Teaching* (Cambridge University Press). Each model has strengths and limits. A native-speaker model has many books and tests, but several first-language varieties exist. A local standard matches local use, but it needs a variety that people have described and accepted. A lingua franca model matches talk between additional-language speakers, but ELF is not one variety, so there is no fixed target to test.",
      "McKay (2002) and Matsuda (2012) write about English as an international language (EIL). A published review of McKay’s book says that she describes an international language as one that is not tied to one nation or culture, and that she treats learners as bilingual users of English. Matsuda’s edited volume has chapters on choosing an instructional variety, materials, assessment and teacher education, and it shows courses and classroom ideas.",
      "A needs analysis is a short study of what learners need. Five questions help: who will you speak or write to, which skills matter, which exams are coming, where will you use English, and what do you want your English to say about you? Then a teacher can choose a model and explain the choice."
     ],
     pro:[
      "The three-model scheme is a simplification. In practice, a class often mixes them. A textbook may use a first-language model for sound and spelling, the teacher may speak a local variety, and the learners may talk with additional-language speakers outside class. A useful question is which part of the mix is a choice and which part is an accident.",
      "Be careful with attributions. This entry gives only what a published review or a table of contents shows about the books. Read Kirkpatrick’s chapters before you say which model he prefers, and read McKay’s and Matsuda’s own arguments before you quote them. Kirkpatrick (2010) separately proposes a multilingual model for ASEAN (Unit 8).",
      "Two points need care. First, the local-standard model depends on codification and acceptance, which Schneider’s model (Unit 2) links to later phases of a variety’s development. Few expanding-circle countries have a variety in that position. Second, exams can fix the target. A teacher should read the test’s own documents, and should say “not accepted in this task” and not “wrong”.",
      "Holliday (2006) describes native-speakerism as a widespread ideology in English teaching. In it, “native-speaker” teachers are seen as representing a “Western culture”, which is treated as the source of the ideals of English and of teaching methods. Unit 9 discusses it, with published studies of hiring. A model for production does not need to be a person’s first language, and a teacher’s own variety does not have to be the only voice in the class."
     ]},
    related:["we-lingua-franca-core-features","we-english-in-japan"],
    read:[{book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”"}],
    sources:[{t:"Gupta’s review of Kirkpatrick (2007), World Englishes: Implications for International Communication and English Language Teaching, Asian EFL Journal", url:"https://www.asian-efl-journal.com/book-reviews/world-englishes-implications-for-international-communication-and-english-language-teaching/"},{t:"Matsuda (ed., 2012), Principles and Practices of Teaching English as an International Language, Multilingual Matters", url:"https://www.degruyterbrill.com/document/doi/10.21832/9781847697042/html"},{t:"Library record: McKay (2002), Teaching English as an International Language: Rethinking Goals and Approaches, Oxford University Press", url:"https://search.library.uitm.edu.my/Record/wils-310166/Description"}], checked:"2026-11"},
   {id:"we-functional-load-priorities", title:"Pronunciation priorities: functional load and the Lingua Franca Core", aka:["functional load","intelligibility principle","nativeness principle"], tags:["world englishes","teaching","pronunciation"],
    summary:"Functional load counts how many words a sound contrast keeps apart. With the Lingua Franca Core, it helps a teacher decide what to teach first.",
    levels:{
     starter:[
      "Some sound contrasts keep many words apart, and others keep very few. The idea is called **functional load**. The contrast between /p/ and /b/ separates many pairs, such as *pit* and *bit*. The contrast between the two *th* sounds separates very few, such as *thigh* and *thy*.",
      "A teacher with limited time can give more attention to contrasts that keep many words apart. The Lingua Franca Core (Jenkins 2000, Unit 8) gives another view. It lists features that mattered for understanding between additional-language speakers, such as most consonants, word-start clusters, vowel length and nuclear stress.",
      "Both views treat the two *th* sounds as less urgent. They are guides, and they do not say that any sound is wrong. Learners can choose a different goal, and exams may ask for more."
     ],
     builder:[
      "Levis (2005) named two ideas in pronunciation teaching. The nativeness principle says that learners should aim to sound like first-language speakers. The intelligibility principle says that the goal is to be understood, and that a speaker with a noticeable accent can be understood. Munro and Derwing (1995) found that accentedness, comprehensibility and intelligibility are related but partly independent.",
      "Functional load can be estimated by counting minimal pairs. Catford (1987) produced ranked lists, and later summaries say that Brown’s lists (1991) also consider how common the words are and whether the words belong to the same word class. Researchers do not agree on one way to measure it. Munro and Derwing (2006), in *System*, ran an exploratory study. Listeners whose first language was English rated sentences from speakers whose first language was Cantonese. Sentences with consonant changes in high-load contrasts were rated as more accented and less comprehensible than sentences with low-load changes.",
      "A teacher can use the two sources together. Teach first: most consonants, word-start clusters, the puff of air after *p*, *t* and *k*, long and short vowels, and nuclear stress. Teach next: word stress and rhythm, and weak forms for listening. Let vary: the two *th* sounds, dark *l*, weak forms in speech, the exact quality of most vowels, and pitch that shows attitude."
     ],
     pro:[
      "Limits matter. The Core came from a limited set of recorded breakdowns. Critics ask for more speakers and more first languages, and some researchers argue that word stress matters more than the proposal says (Unit 8). Functional load is a statistical idea. A contrast with a low load can still cause a breakdown in one sentence, and the measure depends on how you count.",
      "The Munro and Derwing (2006) study is described as exploratory, and a later review (Sewell 2021) calls its result a preliminary confirmation. Treat it as a first step. A teacher should not present the principle as a law.",
      "Feedback follows from the priorities. Listen for meaning first. Check the context. Ask a choice question, such as “light or right?”. Give a short model. Praise what worked. Do not tell a learner to lose an accent, and do not use the Core to judge any person’s speech. A learner who wants a first-language accent as a goal can have it, and the teacher can still explain the priorities.",
      "In Japan, katakana spellings add a vowel after most consonants, and a Japanese speaker may add vowels in a cluster such as *strike* (Unit 8). A teacher can show the cluster in the English word. How English Works Unit 2 (Lesson 4) and Unit 3 give the tools for minimal pairs, stress and weak forms."
     ]},
    related:["we-lingua-franca-core-features","we-elf-research"],
    sources:[{t:"Sewell (2021), Functional load and the teaching-learning relationship in L2 pronunciation, Frontiers in Communication (reviews Catford 1987, Brown 1991 and Munro and Derwing 2006)", url:"https://www.frontiersin.org/articles/10.3389/fcomm.2021.627378"},{t:"Munro and Derwing (2006), The functional load principle in ESL pronunciation instruction: an exploratory study, System 34(4), 520–531", url:"https://doi.org/10.1016/j.system.2006.09.004"}], checked:"2026-11"},
   {id:"we-listening-plan", title:"A listening plan across Englishes", aka:["listening cycle","perceptual adaptation"], tags:["world englishes","teaching","listening"],
    summary:"A fair listening plan uses one task with many voices, supports the first listening, repeats over weeks and never asks learners to rate a speaker.",
    levels:{
     starter:[
      "Learners meet many Englishes before they speak any of them, so listening needs a plan. A good plan uses many speakers, gives every speaker the same task, and asks what helped understanding.",
      "Use a short cycle for each clip: predict from the topic, listen for the gist, listen for details, check with the text, and say what helped. Teach three or four key words before the first play.",
      "Never ask learners to say who is best, who sounds educated or where a speaker is from. Understanding happens between a speaker and a listener, and a score for a speaker hides this. Teach repair moves too, such as “Could you say that again, please?”."
     ],
     builder:[
      "Bradlow and Bent (2008, *Cognition*) studied how listeners adapt to foreign-accented speech. Listeners whose first language was American English wrote down sentences, played in noise, from talkers with what the study calls a Chinese accent. Training with one talker did not help with a new talker more than practice with the task did. Training with five talkers helped with a new talker who had the same accent, but not with a talker who had a different accent. It was one laboratory study with first-language listeners, so use it as a reason to try a plan with several speakers and not as proof for a class.",
      "The Speech Accent Archive has speakers who read the same paragraph, “Please call Stella”. Because the text is fixed, learners can follow the printed words and listen to sounds. The paragraph shows pronunciation only. It does not show grammar or code-switching, and one speaker is one person.",
      "A six-week plan can pair speakers from different places, repeat one task across weeks, add a week of repair practice with a partner, and end with a private reflection. A notebook helps: date, speaker’s place from the label, one missed word and what helped."
     ],
     pro:[
      "Check the license of every source. The Speech Accent Archive is licensed CC BY-NC-SA 4.0, so credit the archive and the speaker, use it for non-commercial purposes and share any changes under the same license. Mozilla Common Voice is released under CC0. Wikimedia Commons has a license for each file, so read the page of each file. Ask permission before you record or share a visitor’s or a classmate’s voice.",
      "A careful claim about a clip has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Never present one speaker as the accent of a country, and do not use a clip to say anything about grammar when the speaker reads a fixed paragraph.",
      "Do not use a listening task to test learners’ attitudes toward speakers. Unit 9 describes research on how listeners judge accents, and the lesson from that research is to avoid tasks that invite such judgments. Ask about the listener’s strategies instead."
     ]},
    related:["we-listening-accents","we-accommodation-theory"],
    sources:[{t:"Bradlow and Bent (2008), Perceptual adaptation to non-native speech, Cognition 106(2)", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC2213510"},{t:"Speech Accent Archive (Weinberger, George Mason University)", url:"https://accent.gmu.edu/"}], checked:"2026-11"},
   {id:"we-feature-or-error-marking", title:"Feature or error? Marking and feedback across Englishes", aka:["eWAVE in the classroom","fair marking","rubric"], tags:["world englishes","teaching","assessment"],
    summary:"A teacher can ask four questions about a surprising form, use eWAVE as a reference, and mark fairly by listing accepted forms in advance.",
    levels:{
     starter:[
      "A form that differs from the textbook can be a feature of a variety, a learner pattern or a slip. A feature is a regular pattern that many speakers share. A learner pattern is a rule that one learner is building. A slip is a mistake that the writer would fix.",
      "Ask four questions. Is it regular? Is it documented? Does it block understanding? What does the task need? The first three describe the form, and the fourth decides what to do: accept, explain or teach the required form.",
      "When you give feedback, name the feature and the task. For example, “*Isn’t it?* is a common tag in many Englishes. This report needs *aren’t you?*.” Do not say “wrong” when you mean “not accepted in this task”."
     ],
     builder:[
      "eWAVE 3.0 maps 235 grammar features across 77 Englishes (51 varieties of English and 26 English-based pidgins and creoles), and it is licensed CC BY 3.0. Earlier units used it for features such as the invariant tag *isn’t it?* in Indian English, the progressive with stative verbs, the *after*-perfect in Irish English and negative concord. eWAVE shows what speakers of a variety do. It does not say that a learner who writes the form is a speaker of that variety, and it does not say what a task accepts.",
      "A rubric separates criteria such as task, organization and language. A fair rubric lists the spelling system and the accepted local forms in advance. Give marks for whether a reader can follow the writing, and give separate marks for the required form. If the same feature appears five times, comment on the pattern and take marks off once.",
      "Vocabulary and spelling follow the same idea. Learners should meet many local words and choose widely shared words for a wide audience. American and British spellings are both standard, and a mark can reflect inconsistency inside one text."
     ],
     pro:[
      "Tests have constructs, which are what they claim to measure. Read the test’s own documents to see which varieties and spellings it accepts. A test that rewards one variety is a fact about the test. It is not a claim that other varieties are wrong. Matsuda’s (2012) volume has a chapter titled “Assessing Proficiency in EIL”, and McKay (2002) discusses standards. Both raise questions that a class has to answer for itself.",
      "Reliability needs care. Two markers may differ on a form, so agree on a list and use a second marker for a sample. Keep a record of which forms you accepted, so that you treat all students the same way.",
      "Identity matters in feedback. Ask “Who will read this?”. The answer shows which form to use. Feedback gives information about a task, and it does not ask a learner to give up a variety."
     ]},
    related:["we-english-in-japan","we-listening-accents"],
    sources:[{t:"eWAVE 3.0: the electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"},{t:"Matsuda (ed., 2012), Principles and Practices of Teaching English as an International Language, table of contents", url:"https://www.degruyterbrill.com/document/doi/10.21832/9781847697042/html"}], checked:"2026-11"},
   {id:"we-teaching-plan-japan", title:"An example plan for a class in Japan", aka:["eight-week plan","teaching plan"], tags:["world englishes","teaching","Japan"],
    summary:"An eight-week plan adds short routines to a textbook and exam course: listening, pronunciation priorities, repair phrases, feature-or-error tasks and reflection.",
    levels:{
     starter:[
      "This plan is a design, and it is not a description of any real school or program. A teacher works inside Japan’s national curriculum, a textbook and often an exam. The plan adds to them and does not replace them.",
      "It uses ten to fifteen minutes of a 50-minute lesson each week for eight weeks. Week 1: who uses English. Week 2: listening, first round. Week 3: pronunciation priorities. Week 4: katakana English and wasei-eigo. Week 5: repair phrases. Week 6: feature or error. Week 7: writing for a reader. Week 8: reflection.",
      "If the exam asks for one variety or spelling system, say so in week 1 and prepare for it."
     ],
     builder:[
      "Japan’s national curriculum sets what each subject teaches, and the education ministry revises it about every ten years (Unit 8). Since 2020, English has been a formal subject in grades 5 and 6 of elementary school, and foreign language activities start in grade 3. Check the current official text before you plan.",
      "Each week has one skill, one short task and one link to the course. The listening weeks use the cycle of Lesson 3 and never ask for ratings. The pronunciation week uses clusters and nuclear stress. The katakana week treats wasei-eigo as Japanese words and asks learners to choose the English word a listener can follow. The feature-or-error week uses the four questions. The writing week uses a rubric that lists accepted forms.",
      "A teacher can answer concerns in a neutral way. To a worry about scores: the exam target stays the same. To a wish for a first-language model: teach a clear reference model, and add listening to many voices. To a worry about time: ten minutes a week is a start."
     ],
     pro:[
      "Adapt the plan to your setting. In a school, the curriculum, the approved textbook and the exam leave limited time, so choose two or three weeks. In an adult class, you can choose goals more freely after a needs analysis.",
      "Be honest about the evidence. The Core and functional load are proposals or early results. Bradlow and Bent (2008) is one laboratory study. Say so when you explain the plan to parents and colleagues, and do not promise gains.",
      "Review after a few weeks. Ask learners what helped, look at what they wrote in their notebooks, and change the order or the length of the routines. Do not ask them to rate speakers."
     ]},
    related:["we-english-in-japan","we-listening-plan"],
    sources:[{t:"Speech Accent Archive (Weinberger, George Mason University)", url:"https://accent.gmu.edu/"},{t:"eWAVE 3.0", url:"https://ewave-atlas.org/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"we-instructional-model", term:"Instructional model", def:"The variety of English that learners are asked to aim at. It shows in audio, spelling and the teacher’s speech.", codex:"we-which-english-to-teach"},
   {id:"we-eil", term:"English as an international language (EIL)", def:"A teaching approach based on the idea that English belongs to no single country. This course uses ELF for a way of using English and EIL for a way of teaching it.", codex:"we-which-english-to-teach"},
   {id:"we-needs-analysis", term:"Needs analysis", def:"A short study of what learners need English for. It asks who they will speak to, which skills and exams matter, and where they will use English.", codex:"we-which-english-to-teach"},
   {id:"we-nativeness-principle", term:"Nativeness principle", def:"Levis’s (2005) name for the idea that learners should aim to sound like first-language speakers.", codex:"we-functional-load-priorities"},
   {id:"we-intelligibility-principle", term:"Intelligibility principle", def:"Levis’s (2005) name for the idea that the goal is to be understood, and that a speaker with a noticeable accent can be understood.", codex:"we-functional-load-priorities"},
   {id:"we-functional-load", term:"Functional load", def:"The amount of work that a sound contrast does to keep words apart. A simple measure counts minimal pairs, and researchers do not agree on one way to measure it.", codex:"we-functional-load-priorities"},
   {id:"we-gist-listening", term:"Gist listening", def:"Listening for the main idea of a clip, before you listen for details.", codex:"we-listening-plan"},
   {id:"we-detail-listening", term:"Detail listening", def:"Listening for specific words or facts in a clip, usually after a first listening for the gist.", codex:"we-listening-plan"},
   {id:"we-perceptual-adaptation", term:"Perceptual adaptation", def:"A listener’s change in how they hear a speaker or an accent after exposure. Bradlow and Bent (2008) studied it in foreign-accented speech.", codex:"we-listening-plan"},
   {id:"we-learner-pattern", term:"Learner pattern", def:"A rule that a learner is building, which may come from the first language or from what the learner heard. It differs from a feature of a variety and from a slip.", codex:"we-feature-or-error-marking"},
   {id:"we-receptive-productive", term:"Receptive and productive knowledge", def:"Receptive knowledge is understanding a word or form when you hear or read it. Productive knowledge is using it when you speak or write.", codex:"we-feature-or-error-marking"},
   {id:"we-construct", term:"Construct (in testing)", def:"What a test claims to measure, such as writing for an academic reader. The test’s documents define it.", codex:"we-feature-or-error-marking"},
   {id:"we-rubric", term:"Rubric", def:"A table of criteria and marks for a task. A fair rubric lists accepted forms in advance.", codex:"we-feature-or-error-marking"},
   {id:"we-corrective-feedback", term:"Feedback on form", def:"Information that a teacher gives about a form in a learner’s speech or writing. Good feedback names the feature and the task, and does not call a variety wrong.", codex:"we-feature-or-error-marking"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u10-q01","e6u10-l1",1,"What is an instructional model?",2,[
     ["A textbook that a school buys","A textbook may carry a model, but the model is the variety, not the book."],
     ["A teacher who gives a demonstration","A person may demonstrate it, but the model is a variety of English."],
     ["The variety of English that learners are asked to aim at","Right. It shows in audio, spelling and the teacher’s speech."],
     ["A test that learners must pass","A test may fix the target, but it is not the model itself."]]),
   Q("e6u10-q02","e6u10-l1",1,"Which three models does Kirkpatrick (2007) compare for teaching?",0,[
     ["A native-speaker model, a nativized (local) model and a lingua franca model","Right. A published review of his book names these three."],
     ["A pidgin model, a creole model and a standard model","These are not teaching models. Pidgins and creoles are contact languages."],
     ["An inner-circle model, an outer-circle model and a dying model","The circles are Kachru’s, and no “dying” model belongs to this debate."],
     ["A spelling model, a grammar model and a vocabulary model","These are parts of language, and not the three models in the debate."]]),
   Q("e6u10-q03","e6u10-l1",1,"What does *exonormative* mean?",1,[
     ["Norms that the learner invents","A norm is a shared standard, and not a personal invention."],
     ["Norms that come from outside the community","Right. A first-language variety from another country is an example."],
     ["Norms that come from inside the community","This is the meaning of *endonormative*."],
     ["No norms at all","Every model has norms. This word says where they come from."]]),
   Q("e6u10-q04","e6u10-l1",2,"According to a published review of McKay (2002), how does she describe learners of an international language?",3,[
     ["As people who have failed to become first-language speakers","This is not her view. The review reports that she argues that a native-speaker model should not be the final goal."],
     ["As speakers of a single national culture","She argues that an international language is not tied to one nation or culture."],
     ["As beginners for life","This is not her description."],
     ["As bilingual users of English","Right. This is one of the main ideas that the review reports."]]),
   Q("e6u10-q05","e6u10-l1",2,"Which is a limit of a local-standard model?",2,[
     ["Learners never hear it","Learners often hear it around them. This is a strength."],
     ["Local teachers cannot use it","Local teachers can be its models. This is a strength."],
     ["It needs a variety that has been described and accepted, and exams may not use it","Right. Codification and acceptance matter, and exams can fix another target."],
     ["It is the same as a lingua franca model","The two are different. The local standard is tied to a community."]]),
   Q("e6u10-q06","e6u10-l1",2,"What is a good first question in a needs analysis?",1,[
     ["Which accent do you like best?","A preference may matter later, but it is not the first question."],
     ["Who will you speak or write English to?","Right. The audience shapes the other choices."],
     ["How many words do you know?","This is a test result, not a need."],
     ["Do you want to sound like a first-language speaker?","This is one possible goal. It comes after the audience."]]),
   Q("e6u10-q07","e6u10-l1",3,"Kenji has a test in six months. The test states which spelling it accepts. He also wants to follow online talks by speakers from many countries. Which plan is the most sensible?",2,[
     ["Use only the test’s variety, and give no listening practice.","The test is one goal. Following talks needs listening to many voices."],
     ["Ignore the test and practice with many accents only.","He needs to prepare for the test’s requirements."],
     ["Use the test’s spelling and model for writing, and add listening to many speakers.","Right. It meets both goals."],
     ["Change the model every week.","A stable target is needed for practice."]]),
   Q("e6u10-q08","e6u10-l1",3,"Ana is a nurse who works with colleagues from many countries. Her main goal is to be understood every day. Which model fits best?",0,[
     ["Lingua franca priorities for speaking, with wide listening","Right. This fits talk between speakers of many first languages."],
     ["A model that only uses idioms","Idioms can be hard for additional-language listeners (Unit 8)."],
     ["A model chosen by the textbook publisher, whatever Ana needs","The learner’s goals decide the choice."],
     ["No model at all","Every class has a model. The choice is whether to make it on purpose."]]),
   Q("e6u10-q09","e6u10-l1",2,"A colleague says, “Teaching a standard is harmful.” Which reply is the most accurate?",3,[
     ["“Yes. We should never teach a standard.”","A standard helps with exams, formal writing and a shared target."],
     ["“No. A standard is the only correct English.”","This ranks varieties. No variety is the only correct English."],
     ["“A standard is harmful only for adults.”","Age is not the issue."],
     ["“The harm comes from saying that other Englishes are wrong, and not from teaching a standard.”","Right. A standard and respect for other varieties can go together."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u10-q10","e6u10-l2",1,"What is functional load?",2,[
     ["How loud a sound is","Loudness is not the idea. Functional load is about words."],
     ["How many people use a sound","It is about the work of a contrast, not the number of speakers."],
     ["The amount of work that a sound contrast does to keep words apart","Right. A contrast that separates many pairs has a high load."],
     ["How strongly a listener hears an accent","This is accentedness (Units 1 and 9)."]]),
   Q("e6u10-q11","e6u10-l2",1,"What does the intelligibility principle say about pronunciation teaching?",1,[
     ["Learners should sound like first-language speakers","This is the nativeness principle."],
     ["The goal is to be understood, and a speaker with a noticeable accent can be understood","Right. This is the idea that Levis (2005) named."],
     ["Pronunciation should not be taught","The principle sets a goal for teaching. It does not ban it."],
     ["Only the *th* sounds matter","The *th* sounds are low priority in the Core and in load lists."]]),
   Q("e6u10-q12","e6u10-l2",2,"Which contrast has a higher functional load, in the examples of Lesson 2?",0,[
     ["/p/ and /b/, as in *pit* and *bit*","Right. Many pairs differ in only this contrast."],
     ["/θ/ and /ð/, as in *thigh* and *thy*","Few pairs differ only in these two sounds."],
     ["They are equal","The counts in the lesson differ."],
     ["Neither can be counted","Minimal pairs can be counted, although researchers do not agree on one measure."]]),
   Q("e6u10-q13","e6u10-l2",2,"What did Munro and Derwing (2006) find in their exploratory study?",3,[
     ["Low-load changes were rated as less comprehensible than high-load changes","This is the opposite of the reported result."],
     ["Functional load has no effect on understanding","The study reported a difference in the other direction."],
     ["The result is final proof for every class","The study was exploratory, and the result is preliminary."],
     ["Sentences with high-load changes were rated as less comprehensible than sentences with low-load changes","Right. A later review calls it a preliminary confirmation."]]),
   Q("e6u10-q14","e6u10-l2",2,"In the proposal of Unit 8, which feature is a priority for intelligibility?",1,[
     ["The two *th* sounds","They are outside the Core."],
     ["Consonant clusters at the start of words, such as *sn* in *snow*","Right. Dropping a sound at the start changes the word."],
     ["Weak forms in speech","Weak forms are outside the Core."],
     ["The exact quality of every vowel","The Core leaves out the exact quality of most vowels."]]),
   Q("e6u10-q15","e6u10-l2",1,"Which of these is something a teacher may let vary, if the goal is intelligibility?",2,[
     ["The cluster in *spoons*","Clusters at the start of words are a priority."],
     ["Nuclear stress in *Please call STELLA*","Nuclear stress is a priority."],
     ["Dark *l*","Right. Dark *l* is outside the Core."],
     ["Long and short vowels","Vowel length is in the Core."]]),
   Q("e6u10-q16","e6u10-l2",3,"A learner says *no* when she means *snow*. Which feedback fits the lesson best?",1,[
     ["“Your accent is a problem. Please reduce it.”","This is a feedback phrase to avoid. It does not say what to change."],
     ["“Everyone understood your idea. Let’s make the start of *snow* easier to hear: *sn*.”","Right. It names one priority feature, with a kind opening."],
     ["“That is the wrong word.”","It is not a wrong word. A sound at the start is missing."],
     ["No feedback, because accents do not matter.","The cluster is a priority, so feedback is useful."]]),
   Q("e6u10-q17","e6u10-l2",2,"Why is it correct to call the Core and functional load “guides, not laws”?",0,[
     ["The evidence is partial, measures differ and exams may ask for more","Right. These are all limits that the lesson names."],
     ["Because they are always wrong","They are useful guides. The point is that they are not complete."],
     ["Because nobody has studied them","Both have been studied, and the research continues."],
     ["Because teachers must ignore them","A teacher can use them to plan time."]]),
   Q("e6u10-q18","e6u10-l2",3,"A learner wants to keep her first-language accent, and her goal is to be understood by many listeners. Which plan is the most helpful?",2,[
     ["Ask her to give up her accent first","This is a goal she did not choose."],
     ["Teach the *th* sounds for most of the lesson","They are a low priority in both sources."],
     ["Practice a few priority features and let other features vary","Right. This protects the accent and supports understanding."],
     ["Give no feedback","Feedback on priorities helps her reach her goal."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u10-q19","e6u10-l3",1,"What did Bradlow and Bent (2008) report about listeners who trained with several talkers?",1,[
     ["They did worse with a new talker","This is the opposite of the report."],
     ["They did better with a new talker than listeners who trained with one talker","Right. The new talker had the same accent, and it was one laboratory study."],
     ["They stopped adapting","The study reported adaptation."],
     ["They could identify each talker’s country","The study was about recognition of speech."]]),
   Q("e6u10-q20","e6u10-l3",1,"Which rule helps to make a listening task fair for every speaker?",2,[
     ["Use a different task for each speaker","A different task makes comparison unfair."],
     ["Ask learners which speaker is best","This ranks people."],
     ["Give every speaker the same task","Right. The difference then comes from the voices and not from the task."],
     ["Play each speaker once, with no text","A text and support help learners to listen to sounds."]]),
   Q("e6u10-q21","e6u10-l3",1,"In the listening cycle, which step comes right after listening for the gist?",0,[
     ["Listen for details","Right. Details are easier once the gist is clear."],
     ["Say what helped","This is the last step."],
     ["Predict from the topic","This is the first step."],
     ["Give each speaker a score","Scoring is not part of the cycle."]]),
   Q("e6u10-q22","e6u10-l3",1,"Under which license is the Speech Accent Archive available?",3,[
     ["CC0","This is the license of Mozilla Common Voice."],
     ["All rights reserved","The archive uses an open license."],
     ["No license","Every source has a license, and you must check it."],
     ["CC BY-NC-SA 4.0","Right. Credit the archive, use it non-commercially and share under the same license."]]),
   Q("e6u10-q23","e6u10-l3",3,"A teacher asks learners to guess the country of each speaker from the voice. What is the best comment on this task?",1,[
     ["It is fine, because it is only a game.","It invites a judgment about a real person."],
     ["It turns listening into a judgment about real speakers, so use the archive’s labels instead","Right. Ask what helped understanding."],
     ["It is fine, if the learners are adults.","Age does not change the problem."],
     ["It is the best way to teach accents.","It does not teach anything about listening strategies."]]),
   Q("e6u10-q24","e6u10-l3",3,"Mariya, who studies English to become an interpreter, keeps a notebook with the date, the speaker’s place, one missed word and what helped. What is the main benefit?",2,[
     ["It shows which speakers are bad","The notebook is about the listener, and no speaker is rated."],
     ["It replaces listening practice","It supports practice and does not replace it."],
     ["It turns a worry into facts about her own listening","Right. She can see which strategies help."],
     ["It proves that all accents are the same","It does not prove this."]]),
   Q("e6u10-q25","e6u10-l3",2,"What are the three parts of a careful claim about a clip?",3,[
     ["The speaker’s age, job and country","The claim is about speech, not about a person’s job."],
     ["A score, a ranking and a guess","These are the things to avoid."],
     ["The speaker’s first language, the school and the exam","These are not the three parts."],
     ["What this speaker does, what is typical in the place, and a reminder that one speaker is one person","Right. This is the form used in Units 3 to 8."]]),
   Q("e6u10-q26","e6u10-l3",2,"What does a reading of the fixed “Please call Stella” paragraph show?",0,[
     ["Pronunciation only, from one person","Right. It cannot show grammar or code-switching."],
     ["The grammar of the speaker’s first language","A reading in English cannot show another language’s grammar."],
     ["How all people from that place speak","One speaker is one person."],
     ["How well the speaker uses English in daily life","A reading does not show this."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u10-q27","e6u10-l4",1,"What is the difference between a feature of a variety and a slip?",1,[
     ["There is no difference","They differ. A feature is regular, and a slip is a one-off mistake."],
     ["A feature is a regular pattern that many speakers share, and a slip is a mistake that the writer would fix","Right. The response is different for each."],
     ["A slip is documented in eWAVE","eWAVE documents features, not slips."],
     ["A feature always blocks understanding","A feature may or may not block understanding for a reader."]]),
   Q("e6u10-q28","e6u10-l4",1,"What does eWAVE record?",2,[
     ["The marks that each student got","eWAVE is an atlas of varieties, not a record of students."],
     ["The names of all speakers","It records features of Englishes."],
     ["Grammar features of many Englishes, including varieties and English-based pidgins and creoles","Right. eWAVE 3.0 maps 235 features across 77 Englishes."],
     ["The rules of every exam","It does not say what an exam accepts."]]),
   Q("e6u10-q29","e6u10-l4",2,"Which is the last of the four questions for a surprising form?",3,[
     ["Is it regular?","This is the first question."],
     ["Is it documented?","This is the second question."],
     ["Does it block understanding?","This is the third question."],
     ["What does the task need?","Right. This question decides what to do."]]),
   Q("e6u10-q30","e6u10-l4",3,"A student writes “I’m after finishing the report.” The task asks for a form that most readers expect. Which feedback fits the lesson best?",2,[
     ["“This is wrong English.”","The *after*-perfect is a regular feature of Irish English."],
     ["“Never write this.”","The message is too strong and does not name the task."],
     ["“This is a regular form in Irish English. For this report, write *I’ve just finished the report*.”","Right. It names the feature and the task."],
     ["No comment, because it is a feature","The student also needs to know what the task needs."]]),
   Q("e6u10-q31","e6u10-l4",3,"A task accepts both American and British spelling. One essay uses *color* throughout, and another uses *colour* throughout. What is fair?",0,[
     ["The same spelling mark for both","Right. Both spellings are accepted and consistent."],
     ["A higher mark for *color*","The task accepts both, so a preference is not a criterion."],
     ["A higher mark for *colour*","The task accepts both, so a preference is not a criterion."],
     ["A lower mark for both","Consistent, accepted spelling is not an error."]]),
   Q("e6u10-q32","e6u10-l4",2,"What is the difference between “wrong” and “not accepted in this task”?",1,[
     ["There is none","The two messages are different."],
     ["The second says that the task needs another form, and it does not say that the form is wrong everywhere","Right. It keeps the message accurate."],
     ["The first is kinder","“Wrong” is a stronger and often less accurate message."],
     ["The second means that the form is a slip","A form can be a regular feature and still not be accepted in a task."]]),
   Q("e6u10-q33","e6u10-l4",2,"The same local feature appears five times in an essay. What does the lesson suggest?",2,[
     ["Take marks off five times","This punishes one pattern many times."],
     ["Ignore it","The learner may need to know what the task needs."],
     ["Comment on the pattern and take marks off once","Right. It is a practical suggestion that you can adapt."],
     ["Ask the student to change variety","Feedback gives information. It does not ask a learner to give up a variety."]]),
   Q("e6u10-q34","e6u10-l4",1,"What is receptive knowledge of a word?",0,[
     ["Understanding it when you hear or read it","Right. A learner may not choose to use it."],
     ["Using it when you speak or write","This is productive knowledge."],
     ["Spelling it correctly","Spelling is one skill, and not the meaning of receptive knowledge."],
     ["Knowing its origin","Origin is not the meaning of the term."]]),
   /* ---- Lesson 5: wrap-up of Units 1-9, then the plan ---- */
   Q("e6u10-q35","e6u10-l5",1,"Unit 1. In Kachru’s model, which circle includes countries such as India, Nigeria and Singapore, where English is often used alongside other languages in daily life and has an official role?",1,[
     ["The inner circle","The inner circle has countries where English is the first language of most people, such as the UK and the US."],
     ["The outer circle","Right. English arrived through colonial history and still has a role there."],
     ["The expanding circle","The expanding circle has countries where English has no official role but is widely studied."],
     ["The creole circle","There is no such circle in Kachru’s model."]]),
   Q("e6u10-q36","e6u10-l5",1,"Unit 2. Which is the correct order of the five phases of Schneider’s Dynamic Model?",2,[
     ["Nativization, foundation, differentiation, exonormative stabilization, endonormative stabilization","Foundation is the first phase, and differentiation is the last."],
     ["Foundation, nativization, exonormative stabilization, differentiation, endonormative stabilization","Two pairs are swapped. Exonormative stabilization comes before nativization, and endonormative stabilization comes before differentiation."],
     ["Foundation, exonormative stabilization, nativization, endonormative stabilization, differentiation","Right. This is the order in Unit 2."],
     ["Differentiation, foundation, nativization, exonormative stabilization, endonormative stabilization","Differentiation is the last phase."]]),
   Q("e6u10-q37","e6u10-l5",2,"Units 3 and 4. Which statement about accents is the most accurate?",0,[
     ["A variety is a set of tendencies, and a speaker is a person who may follow some of them and not others","Right. Describe a feature, and do not rank or label a whole region from one speaker."],
     ["An accent can be ranked from best to worst by its distance from RP","Units 3 and 4 do not teach ranking. RP is one accent with a social history."],
     ["General American is the accent of every person in the US","It is a reference label and not the accent of a place."],
     ["One speaker shows how everyone in a city speaks","One speaker is one person."]]),
   Q("e6u10-q38","e6u10-l5",2,"Unit 5. How does Unit 5 describe Singapore English?",3,[
     ["As broken English","No variety is broken."],
     ["As one single style that all speakers use in the same way","Unit 5 describes a range of styles."],
     ["As the same as Indian English","They are different varieties."],
     ["As a range from standard to colloquial, with speakers moving along it, and with its own grammar and particles","Right. This is the Standard–Colloquial range of Unit 5."]]),
   Q("e6u10-q39","e6u10-l5",2,"Unit 6. Which is a fair summary of the Achebe–Ngũgĩ debate?",1,[
     ["Achebe was right and Ngũgĩ was wrong","A fair summary does not declare a winner."],
     ["Both took language seriously and answered differently, and a fair summary gives each side’s reasons","Right. This is the point of the Unit 6 key idea."],
     ["Both said that English should be removed from Africa","They gave different answers, and this does not describe either."],
     ["Neither one said anything about language","The debate was about language."]]),
   Q("e6u10-q40","e6u10-l5",1,"Unit 7. What is a creole?",2,[
     ["A pidgin with no native speakers","This is a pidgin at the start."],
     ["Broken English","A creole has its own grammar."],
     ["A contact language that children of a community learn as a first language","Right. It has all the jobs of a full language."],
     ["A dialect of French","Some creoles have a French lexifier, but a creole is a language of its own."]]),
   Q("e6u10-q41","e6u10-l5",2,"Unit 8. How does Unit 8 describe the Lingua Franca Core?",3,[
     ["As a rule that every learner must follow","It is a proposal and not a rule."],
     ["As a list of sounds that are wrong","It is about priorities, and not about wrong sounds."],
     ["As a test of how good a speaker is","The unit says not to use it to judge any person’s speech."],
     ["As a hypothesis about which features of pronunciation matter most between additional-language speakers","Right. Use it to think about priorities."]]),
   Q("e6u10-q42","e6u10-l5",2,"Unit 9. What does the matched-guise technique (Lambert and colleagues, 1960) study?",1,[
     ["How fast a speaker talks","Speed is not the topic."],
     ["Listeners’ attitudes, using one bilingual speaker in two guises","Right. The listeners did not know that it was the same person. In the Montreal study the guises were French and English. A difference in the ratings points to attitudes toward the guises."],
     ["How many words a learner knows","It does not test vocabulary."],
     ["Which accent is correct","It does not decide what is correct."]]),
   Q("e6u10-q43","e6u10-l5",2,"Unit 10. Which statement best sums up the teaching advice of the unit?",0,[
     ["Choose a model on purpose, teach for understanding, listen widely and mark fairly","Right. This is the summary of Unit 10."],
     ["Teach every variety in equal time","Nobody can, and the unit does not say so."],
     ["Stop teaching standards","The unit keeps a reference model."],
     ["Ask learners to rank speakers","The unit says never to do this."]]),
   Q("e6u10-q44","e6u10-l5",2,"In the example eight-week plan, which week uses repair phrases in pairs?",1,[
     ["Week 3","Week 3 is pronunciation priorities."],
     ["Week 5","Right. Week 5 is “Understanding each other”."],
     ["Week 7","Week 7 is writing for a reader."],
     ["Week 8","Week 8 is reflection."]]),
   Q("e6u10-q45","e6u10-l5",3,"A parent says, “We want a first-language model.” Which reply fits the unit best?",2,[
     ["“That is wrong. We will not teach one.”","The unit keeps a reference model."],
     ["“Only first-language teachers can do that.”","The unit does not support this claim."],
     ["“We teach a clear reference model, and we add listening to many voices, because learners will meet them.”","Right. It is neutral and keeps both goals."],
     ["“All accents are the same.”","The unit describes differences, and does not say that they are all the same."]])
  ]
});
})();
