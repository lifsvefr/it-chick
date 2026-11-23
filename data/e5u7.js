(function(){
/* How English Works · Unit 7 (e5u7) · Tense and aspect */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u7", track:"e5", n:7, title:"Tense and aspect", icon:"⏳",
  blurb:"How English verbs show time, and where they do not. You separate tense (a form of the verb) from time (the world), see why many grammars say English has only two tenses, and learn what aspect adds. Then you use the perfect, the progressive and the main ways of talking about the future, and you learn how to explain them to Japanese speakers without mapping them one to one.",
  goals:[
    "Separate tense (a verb form) from time (when something happens), and explain why many descriptive grammars say English has two tenses, present and past",
    "Explain the teaching label “future tense” kindly, and name the forms English uses to talk about the future",
    "Describe aspect, and use the simple and progressive forms, including stative verbs and their real exceptions",
    "Choose between the present perfect and the past simple, including the US and UK differences",
    "Compare English forms with Japanese *-ta* and *-te iru*, and explain tense and aspect with timelines that help rather than mislead"
  ],
  read:[
    {book:"eling", where:"The Morphology chapter, section “Inflectional morphology”, and the Syntax chapter, section “Functional categories”", note:"Read these after Lesson 1. The first lists past and present as the only English tense inflections. The second shows auxiliaries and modals such as *will* and *would*, and the *have* of the perfect and the *be* of the progressive. The book is written for linguistics students."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u7-l1", title:"Time is not tense", minutes:55,
   hook:{q:"In *The train leaves at six tomorrow*, the verb *leaves* is in which tense?", options:["The future tense","The present tense","The past tense","It has no tense"], answer:1, reveal:"**The present tense.** The form *leaves* is a present-tense form: it has the *-s* of *she walks*. The sentence talks about tomorrow, but the verb form is still present. In grammar, tense is about the form of the verb. Time is about the world. This lesson separates the two, and it explains why you will meet the words “future tense” in textbooks."},
   goals:[
     "Say what tense is, and name the two tenses that English marks on the verb",
     "Show with examples that tense and time are different things",
     "Explain, kindly, why many grammars say English has no future tense, and what the teaching label means",
     "Name the forms that English uses instead, and say how 2 tenses, the perfect and the progressive make 8 verb forms"
   ],
   learn:[
    {h:"What tense is", body:[
      {lead:"Ask ten people what “tense” means and most will say “when something happens”. Grammar uses a narrower meaning, and the difference solves many puzzles."},
      "In descriptive grammar, [[hew-tense|tense]] is a choice of **verb form**. English verbs can take a present-tense form or a past-tense form. The choice is built into the verb itself: an ending, or a changed form.",
      {table:[["Verb","Present tense","Past tense"],["walk (regular)","walk, walks","walked"],["sing (irregular)","sing, sings","sang"],["be","am, is, are","was, were"],["can","can","could"],["will","will","would"]]},
      "Notice what is missing. There is no third column with a special form for the future. *Walked* is one word with a past ending. *Will walk* is two words. In *will walk*, the tense is carried by *will*, and *will* is a present-tense form. It is one of the auxiliary verbs that Unit 4 described. We come back to it below.",
      "The term **past tense** is used for *walked, sang, was*. Some grammars, including the *Cambridge Grammar of the English Language*, call it the **preterite**. It is the same thing.",
      {key:"Tense is a form of the verb: present (walk, walks) or past (walked). Time is when something happens in the world. The two often match, but they are different things."}
    ]},
    {h:"Tense and time do not always match", body:[
      "If tense meant time, a present-tense verb would always talk about now, and a past-tense verb would always talk about the past. They do not. Look at these real patterns.",
      {table:[["Sentence","Verb form","Time it points to"],["*The train leaves at six tomorrow.*","present","future"],["*Water boils at 100 degrees at sea level.*","present","always (a general fact)"],["*So she walks in and says hello.*","present","past (telling a story)"],["*She left at six.*","past","past"],["*If I knew the answer, I would tell you.*","past","now, but not real"],["*I wish I had more time.*","past","now, but not real"],["*Could you open the window?*","past","now, a polite request"],["*I was wondering if you could help.*","past","now, softer and more polite"]]},
      "The last four rows show something important. The past tense is used for more than past time. It is a form for **distance**. The distance can be in time (*she left*), in reality (*if I knew*), or in politeness (*could you*). This is why a past-tense form can sound more polite: the speaker steps back a little.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u7a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Tense is in the verb. Time is in the world.</text><rect class="d-sage" x="14" y="38" width="124" height="92" rx="8" stroke-width="2"/><text x="76" y="76" text-anchor="middle">present tense</text><text class="s" x="76" y="98" text-anchor="middle">walk, walks, leaves</text><path class="d-ink" d="M140 84H168" stroke-width="2" marker-end="url(#e5u7a)"/><rect class="d-soft" x="172" y="38" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="56" text-anchor="middle">now: She works here.</text><rect class="d-soft" x="172" y="72" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="90" text-anchor="middle">future: It starts at 9.</text><rect class="d-soft" x="172" y="106" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="124" text-anchor="middle">fact: Ice melts.</text><rect class="d-lup" x="14" y="158" width="124" height="92" rx="8" stroke-width="2"/><text x="76" y="196" text-anchor="middle">past tense</text><text class="s" x="76" y="218" text-anchor="middle">walked, was, could</text><path class="d-ink" d="M140 204H168" stroke-width="2" marker-end="url(#e5u7a)"/><rect class="d-soft" x="172" y="158" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="176" text-anchor="middle">past: She left at six.</text><rect class="d-soft" x="172" y="192" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="210" text-anchor="middle">unreal: I wish I knew.</text><rect class="d-soft" x="172" y="226" width="154" height="28" rx="6" stroke-width="2"/><text class="s" x="249" y="244" text-anchor="middle">polite: Could you help?</text><text class="s" x="170" y="280" text-anchor="middle">One form can point to several times.</text></svg>', alt:"Two boxes on the left: present tense (walk, walks, leaves) and past tense (walked, was, could). Arrows lead from each to three kinds of meaning. Present tense can mean now, the future, or a general fact. Past tense can mean the past, an unreal situation, or a polite request.", cap:"The verb form and the time are two separate things. One form can point to several kinds of time."}
    ]},
    {h:"So where is the future?", body:[
      "English has no verb ending for the future. There is nothing like *-ed* for the past. To talk about future time, English uses other means. The main ones are these:",
      {list:[
        "**will + base form**: *It will rain tomorrow.* *I’ll call you.*",
        "**be going to + base form**: *We’re going to move in June.*",
        "**the present progressive**: *I’m meeting Mei at six.*",
        "**the present simple**: *The film starts at nine.* (a schedule) and *When she arrives, call me.*",
        "**other forms**: *be about to, be to, shall*, and the modals *may* and *might* (*She may leave tomorrow.*)"
      ]},
      "Lesson 4 looks at the differences. Here we ask a simpler question. Is *will* a future-tense form? Most descriptive grammars say no, for good reasons.",
      {list:[
        "*Will* behaves like the other auxiliary verbs *can* and *must*. It has no *-s* (*she will*, not *she wills*). It is followed by a base form (*will go*). It passes the NICE tests that Unit 6 describes: *won’t*, *Will she?*, *She will, and he will too*.",
        "*Will* has its own present and past forms: *will* and *would*. A verb shows only one tense at a time. If *will* marked a future tense, it could not also have a past-tense form. But it does: *would*, as in *She said she would call*.",
        "*Will* does not always talk about the future. *That will be the postman* is a guess about now. *Accidents will happen* is a general truth. *The door won’t open* means the door refuses, and that is about now."
      ]},
      "So *will* is an auxiliary verb in the present tense whose meaning is usually about prediction, willingness or decision. It often points to the future because predicting and deciding look forward, but its meaning is wider than future time.",
      {h:"Compared with Japanese"},
      "Japanese also has no special future form. The plain form *taberu* (食べる) means “eat” or “will eat”, and context decides: *ashita taberu* (明日食べる) “I will eat tomorrow”. Grammars of Japanese usually call this the non-past form, and the form with *-ta* the past form. So a Japanese speaker already knows that a language can talk about the future without a future tense. Other languages, such as French (*mangera*) and Spanish (*comerá*), do have a verb ending for the future. Languages differ, and none is “missing” something."
    ]},
    {h:"The label “future tense”", body:[
      "You will see “future tense” or “future simple” in many textbooks, exams and apps, for *will + verb*. A teacher of English will meet both ways of speaking. It helps to understand why.",
      {table:[["","Descriptive grammar","Teaching label"],["Idea","Tense is a verb form. English has present and past.","Tense is a way to show time. English has past, present and future."],["*will go*","Present tense of *will*, plus a base form","The future tense (“future simple”)"],["Strength","Matches how the verbs really work","Easy to teach, and matches what learners expect from their own language"],["Risk","Can sound like it denies that English talks about the future","Hides that *will* is not the only way, and not always future"]]},
      "Neither side is foolish. The teaching label is a useful shortcut, and the descriptive view is more exact. A kind way to put it: “English talks about the future in several ways. Many books call *will + verb* the future tense. In descriptive grammar it is a present-tense auxiliary, and *future* names the time, not the tense.”",
      {tip:"With learners, use **future time** or **ways to talk about the future** when you can. If a student says “future tense”, there is no need to correct them. Say: “Yes, many books call it that.” Then show the forms."}
    ]},
    {h:"2 tenses, 2 aspects, 8 forms", body:[
      "After tense comes **aspect**. Lesson 2 explains it fully. For now, English has two aspects that you can add to any tense: the **perfect** (*have* + past participle) and the **progressive** (*be* + *-ing*). Each one is optional. That gives 2 × 2 × 2 = 8 combinations, shown here with *walk*.",
      {table:[["","Present tense","Past tense"],["Simple","she walks","she walked"],["Progressive","she is walking","she was walking"],["Perfect","she has walked","she had walked"],["Perfect + progressive","she has been walking","she had been walking"]]},
      "Many textbooks list 12 “tenses”: three times (past, present, future) with four kinds each. In the descriptive count, these are not 12 tenses. They are 8 forms of the verb, plus *will* with each of them (*will walk, will be walking, will have walked, will have been walking*). The textbook list and the descriptive list describe the same sentences with different names.",
      {h:"Common misconceptions"},
      {list:[
        "**“The present tense means now.”** It often does not: *Water boils at 100 degrees. The train leaves tomorrow.*",
        "**“The past tense is only for the past.”** It is also used for unreal and polite meanings: *If I knew… Could you…?*",
        "**“English has no way to talk about the future.”** It has many. It has no future *tense*, in the narrow sense.",
        "**“A learner who says ‘future tense’ is wrong.”** The label is a standard teaching term. Accept it, and teach the forms behind it."
      ]},
      "Unit 8 will look at *will*, *would* and the other modal verbs in more detail. Here we keep to the question of time."
    ]}
   ],
   try:[
    {id:"e5u7-l1-x1", type:"sort", q:"Sort each sentence by the **tense of the verb form in capitals**, not by the time it talks about.", buckets:["Present tense form","Past tense form"], items:[
      {t:"“The train LEAVES at six tomorrow.”", b:0, why:"*Leaves* has the present-tense *-s*. The time is future, but the form is present."},
      {t:"“If I KNEW the answer, I would tell you.”", b:1, why:"*Knew* is a past-tense form. It talks about an unreal situation now."},
      {t:"“COULD you open the window?”", b:1, why:"*Could* is the past form of *can*. It makes the request more polite."},
      {t:"“She SAYS she is tired.”", b:0, why:"*Says* is present tense, and it talks about now."},
      {t:"“Water BOILS at 100 degrees at sea level.”", b:0, why:"*Boils* is present tense. It states a general fact."},
      {t:"“He WALKED home.”", b:1, why:"*Walked* is past tense and talks about the past."},
      {t:"“I wish I HAD more time.”", b:1, why:"*Had* is a past-tense form. The wish is about now."}
    ]},
    M("e5u7-l1-x2","Why do many descriptive grammars say that English has no future tense?",1,[
      ["Because English speakers never talk about the future.","They do, all the time. The point is about the verb form, not about the ability to talk about the future."],
      ["Because English has no verb ending that marks the future. *Will* is an auxiliary verb, and it has present and past forms of its own.","Right. Tense is a form of the verb, and the future in English is made with auxiliary verbs and other forms."],
      ["Because *will* is always used for the present.","*Will* often points to the future. It is also used for guesses about now, so its meaning is wider, but it is not always about the present."],
      ["Because grammar books disagree, and nobody knows.","Grammars agree on the facts. They differ in the labels they use."]
    ]),
    {id:"e5u7-l1-x3", type:"match", q:"Match each sentence with what its verb form and time are.", pairs:[
      ["*The film starts at nine tonight.*","Present tense, future time","The verb *starts* is a present-tense form. *Tonight* shows the time."],
      ["*She walked home.*","Past tense, past time","Tense and time match here."],
      ["*If I had a car, I would drive.*","Past tense, unreal situation now","*Had* is past tense, but the situation is not real."],
      ["*Could you help me?*","Past tense form, polite request now","*Could* keeps distance, and that makes the request polite."]
    ]},
    {id:"e5u7-l1-x4", type:"spot", q:"Tap each verb form that is in the **past tense**.", ask:"is a past-tense form", parts:[
      "Priya ", {t:"asked", flag:true, why:"A regular past-tense form (*ask, asked*)."}, " whether anyone ", {t:"had", flag:true, why:"Past tense of *have*. It follows the past tense in the first clause."}, " a question. Tomás ", {t:"says", flag:false, why:"Present tense (*he says*). The change from past to present is allowed because he is speaking now."}, " he ", {t:"does", flag:false, why:"Present tense of *do*."}, ", and he ", {t:"will", flag:false, why:"Present tense. The past form is *would*."}, " ask it now."
    ]},
    {id:"e5u7-l1-x5", type:"number", q:"How many verb forms in this sentence are in the **past tense**? “She said she would call if she had time.”", answer:3, tol:0, unit:"forms", why:"*Said*, *would* and *had* are all past-tense forms. *Would* is the past form of *will*. *Call* is a base form. The sentence is about a possible future call, but the tense of the verbs is past, because the sentence reports what she said earlier: *will* and *have* shift back to *would* and *had*.", wrongs:[
      {v:1, tol:0, why:"This counts only *said*, which talks about the past. *Would* and *had* are also past-tense forms, even though they do not point to a past time."},
      {v:2, tol:0, why:"This leaves out *would*, because *will* seems to be a future word. *Would* is the past tense of *will*."}
    ], hint2:"Ask of each verb: is it *walk/walks*-type (present) or *walked*-type (past)? Time does not decide the answer."},
    {id:"e5u7-l1-x6", type:"order", q:"Put these steps in a sensible order when you decide the tense of a verb and the time of a sentence.", items:[
      {t:"Find the first verb in the verb phrase (the one that can change for tense).", why:"Tense is marked on this verb. In *will have gone*, it is *will*."},
      {t:"Look at its form: *walk(s)*, *can*, *will* (present) or *walked*, *could*, *would* (past).", why:"The form alone tells you the tense. Do not think about meaning yet."},
      {t:"Name the tense from the form.", why:"It is present or past. There is no third choice for the verb form."},
      {t:"Now ask separately what time the sentence points to.", why:"Time comes from the verb form together with the rest of the sentence, such as *tomorrow* or *if*."},
      {t:"Compare the two. If they differ, name the pattern: schedule, general fact, unreal, polite.", why:"The mismatch is useful information. It tells you what the form is doing."}
    ]},
    M("e5u7-l1-x7","A student says: “In *I’m meeting Mei tomorrow*, *meeting* is the future tense.” What is the best reply?",2,[
      ["“Correct. Any verb that talks about the future is in the future tense.”","This uses time to define tense. In descriptive grammar, tense is a verb form."],
      ["“Wrong. The sentence is in the past tense.”","*Am* is present, so the sentence is not past."],
      ["“The verb form is present tense (*am*) with the progressive. The time is future, and the sentence shows it with *tomorrow* and the plan.”","Right. This keeps the form and the time apart, and it is kind to the student’s idea."],
      ["“Forget grammar terms. They don’t matter.”","The terms matter. They help you explain why a sentence works."]
    ]),
    {id:"e5u7-l1-x8", type:"explain", q:"Hana says: “My textbook has twelve tenses, but my teacher says English has only two. Which one is right?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what each side means by “tense”, and show that they describe the same sentences.", model:"Both describe the same sentences with different words. The textbook uses “tense” to mean any way of showing time, so it counts past, present and future with simple, progressive, perfect and perfect progressive: 12 in all. Descriptive grammar uses “tense” only for the verb form, and English has two: present (*walk, walks*) and past (*walked*). The other things are aspects (the perfect and the progressive) and auxiliary verbs such as *will*. So *will walk* is not a third tense. It is the present tense of *will* plus a base form. The textbook list is useful for learning, and the two-tense view is more exact.", points:["Says that the two views use “tense” in different ways", "Names the two tenses in the descriptive view: present and past", "Explains that the other forms are aspects (perfect, progressive) or use auxiliaries such as *will*", "Is respectful to both: the textbook list is useful for learning"]}
   ],
   apply:{
    intro:"These tasks use a news article or any short text, and a free online dictionary. Nothing needs an account.",
    tasks:[
     {t:"Separate tense and time in ten sentences", how:[
       "Choose a news article of about 150 words. Copy ten sentences that have a main verb.",
       "For each one, write the tense of the first verb (present or past) from the form alone.",
       "Then write the time the sentence points to (past, now, future, always). Mark every sentence where the tense and the time do not match, and say why."
     ], write:"Sentence… tense: … time: … match? … reason…"},
     {t:"Check how a learner dictionary treats *will*", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org) and look up *will*. Find the modal verb entry.",
       "Write three of the uses that the entry lists. Which ones are about the future, and which are not?",
       "Write one sentence of your own for each use."
     ], write:"Use 1… my sentence… Use 2… Use 3… Not about the future: …"},
     {t:"Find three past-tense forms with no past meaning", how:[
       "Search a short text, a song or a chat for *could you, would you, I wish, if I had*.",
       "Write three sentences with a past-tense form that does not talk about the past.",
       "For each one, say whether the distance is in reality or in politeness."
     ], write:"Sentence… the distance is in… (reality or politeness)…"}
    ],
    proof:"A table of ten sentences with tense, time and a note on each mismatch. Notes on three uses of *will*. Three past-tense forms with no past meaning."
   },
   read:[
    {book:"eling", where:"The Morphology chapter, section “Inflectional morphology”", note:"Look for the list of English inflections: tense is past versus present, with no future."},
    {book:"eling", where:"The Syntax chapter, section “Functional categories”", note:"Look for the auxiliaries and the modals (*will, would, can, could*), which have present and past forms."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u7-l2", title:"Simple and progressive, and stative verbs", minutes:55,
   hook:{q:"Which sentence is natural English? (a) *I’m knowing the answer.* (b) *I’m having lunch.*", options:["Only (a)","Only (b)","Both","Neither"], answer:1, reveal:"**Only (b).** *Know* describes a state, and a state does not usually take the progressive. *Have* has two meanings: in *I have a car* it is a state (*I’m having a car* is not English), and in *I’m having lunch* it means *eating*, which is an activity. So the same verb can behave in two ways. This lesson explains the pattern and the exceptions."},
   goals:[
     "Explain aspect as a way of viewing a situation, and not as a kind of time",
     "Use the simple and progressive forms for habits, states, actions in progress and temporary situations",
     "Tell stative uses from dynamic uses of verbs, and explain why the same verb can be both",
     "Handle the real exceptions: *I’m loving it*, *I’m hoping*, *I was wondering*"
   ],
   learn:[
    {h:"What aspect is", body:[
      {lead:"Tense tells us the form of the verb. [[hew-aspect|Aspect]] tells us how the speaker looks at the situation."},
      "Imagine a camera. A wide shot shows an event from start to end, as one whole thing. A close-up shows a moment in the middle and does not show the start or the end. English can choose between these two views with the verb form.",
      {list:[
        "**Simple**: the situation is seen as a whole, or as a general fact. *Aoi wrote a report. She writes reports every week.*",
        "**Progressive**: the situation is seen from inside, as going on around a time. *Aoi was writing a report at 8:00.*"
      ]},
      "Both sentences can be about the same real events. The speaker chooses the view. The situation itself has not changed.",
      {fig:'<svg viewBox="0 0 340 276"><text x="170" y="22" text-anchor="middle">Simple: the whole situation</text><text class="s" x="170" y="42" text-anchor="middle">Aoi wrote a report.</text><rect class="d-sage" x="40" y="54" width="260" height="26" rx="6" stroke-width="2"/><text class="s" x="170" y="72" text-anchor="middle">all of it is in view</text><text class="s" x="40" y="100" text-anchor="middle">start</text><text class="s" x="300" y="100" text-anchor="middle">end</text><text x="170" y="148" text-anchor="middle">Progressive: a view from inside</text><text class="s" x="170" y="168" text-anchor="middle">Aoi was writing a report at 8:00.</text><rect class="d-lup" x="40" y="180" width="260" height="26" rx="6" stroke-width="2" stroke-dasharray="6 4"/><path class="d-ink" d="M170 172V216" stroke-width="2"/><text class="s" x="170" y="236" text-anchor="middle">8:00</text><text class="s" x="64" y="226" text-anchor="middle">start?</text><text class="s" x="276" y="226" text-anchor="middle">end?</text><text class="s" x="170" y="262" text-anchor="middle">Start and end are not in view.</text></svg>', alt:"Two bars. The top bar is solid and shows the whole situation from start to end, labeled Aoi wrote a report. The bottom bar has dashed edges and a vertical line at 8:00, labeled Aoi was writing a report at 8:00, with start and end marked by question marks.", cap:"The simple form shows the situation as a whole. The progressive form looks at one point inside it."}
    ]},
    {h:"The simple forms", body:[
      "The simple present is not mainly “what is happening now”. Its common uses are these:",
      {table:[["Use","Example"],["Habit or repeated action","*Priya walks to work.* *We eat at seven.*"],["A permanent or long-lasting state","*Tomás lives in Lima.* *She owns two bikes.*"],["A general fact","*Water boils at 100 degrees at sea level.*"],["A schedule or plan","*The class starts at nine.*"],["Short commentary and instructions","*She passes the ball.* *You add the eggs, then you stir.*"]]},
      "To describe an action that is happening right now, English uses the progressive: *Priya is walking to work.* Not *Priya walks to work now*, unless the speaker is giving commentary.",
      "The simple past views a finished situation as a whole: *She wrote the report. We arrived, ate and left.* In a story, a series of simple-past verbs shows a series of events, one after the other."
    ]},
    {h:"The progressive", body:[
      "The [[hew-progressive|progressive]] has the form **be + verb-ing**. It can be in the present (*is walking*) or the past (*was walking*). It has three common meanings.",
      {list:[
        "**In progress around a time.** *At 8:00, Aoi was writing a report.* We see the middle.",
        "**Temporary.** *Tomás is living in Osaka this year.* The situation will not last. Compare *Tomás lives in Lima*, which is long-term.",
        "**Background for another event.** *I was walking home when it started to rain.* The progressive is the background. The simple past is the event that happened in it."
      ]},
      "One more use: with *always*, the progressive can show annoyance or surprise: *She’s always losing her keys.* Compare *She always loses her keys*, which is a plain statement.",
      {table:[["Simple","Progressive","What is different"],["*I live in Osaka.*","*I’m living in Osaka.*","The second sounds temporary."],["*She wrote a letter.*","*She was writing a letter.*","The first is complete. The second does not say whether she finished."],["*He talks a lot.*","*He’s talking a lot today.*","The second is about today only."],["*It rains in July.*","*It’s raining.*","Habit or pattern versus now."]]},
      "The middle row shows an important point. *She was crossing the street* does not tell us that she reached the other side. *She crossed the street* does. The progressive looks inside the situation and says nothing about how it ended.",
      {h:"Compared with Japanese"},
      "Japanese *-te iru* (ている) often matches the English progressive: *ima tabete iru* (今食べている) “I am eating now”. But *-te iru* is wider. It also marks a state that results from a change: *kekkon shite iru* (結婚している) means “is married”, and not “is marrying”. Lesson 5 shows how this explains many learner mistakes."
    ]},
    {h:"Stative and dynamic verbs", body:[
      "Some verb senses describe **states**: they are not things that happen in steps. Others describe **events or activities**. The first kind is called [[hew-stative-verb|stative]]. The second is [[hew-dynamic-verb|dynamic]]. A stative sense does not normally take the progressive.",
      {table:[["Group","Stative examples","Natural"],["Knowing and believing","know, believe, understand, doubt, remember","*I know the answer.*"],["Feeling and wanting","like, love, hate, want, need, prefer","*She needs a break.*"],["Having and being","own, belong, contain, cost, be, have (possess)","*The box contains six cups.*"],["Seeming","seem, appear, resemble","*It seems easy.*"]]},
      "Learners from many languages say *I’m knowing*, *I’m having a car* or *She’s owning a shop*. These are not English. The simple present is the right form for a state: *I know, I have, she owns*.",
      "There is no short rule that sorts every verb. The question is about the **sense** in the sentence, not the word. Two checks help: Does the sense describe something that goes on in steps, or something that just is? And can you stop it and start it again? You can stop eating lunch. You cannot stop knowing your name for a minute.",
      {key:"Stative or dynamic is a property of a verb’s sense in a sentence, not of the word itself. Many common verbs have both kinds of sense."}
    ]},
    {h:"The exceptions are the interesting part", body:[
      "Real English uses the progressive with some “stative” verbs. These cases are not mistakes. Each has a reason.",
      {table:[["Pattern","Examples","What the progressive does"],["A different sense of the verb","*I’m having lunch. She’s thinking about it. He’s seeing the doctor. She’s tasting the soup. He’s being rude.*","Shows an activity, and the sense is dynamic."],["A change over time","*I’m liking this book more every day. I’m understanding more each week.*","Shows that the state is growing."],["Feeling in the moment","*I’m loving it. We’re loving the new apartment.*","Makes the feeling fresh and strong. Advertising and casual speech use it."],["Politeness and softening","*I’m hoping you can help. I was wondering if you could come. I’m thinking we should leave.*","Makes a request or idea less direct."]]},
      "The politeness uses follow from Lesson 1. A past or progressive form creates distance. *I was wondering* is more tentative than *I wonder*. It sounds careful and friendly, and not rude.",
      "Compare *He is rude* (his character) with *He is being rude* (his behavior now). *Be* is stative in the first and dynamic in the second. The second is usually said of behavior that a person can control: *He is being kind*, *She is being silly*.",
      "Do not tell learners “never use the progressive with *love*”. Say: “Normally, use the simple form. In informal speech you will hear *I’m loving it*, and it adds a feeling of the moment.”",
      {h:"Common misconceptions"},
      {list:[
        "**“The progressive means *now*.”** It means *in progress at the time we are talking about*. That time may be the past (*was walking*) or the future (*will be walking*).",
        "**“Simple means short and progressive means long.”** *She lived here for ten years* is simple and long. *The phone is ringing* is progressive and short.",
        "**“Stative verbs never take *-ing*.”** They do, in the cases above.",
        "**“The progressive is more polite.”** Only in a few set phrases, such as *I was wondering*. *I’m wanting a coffee* is not a more polite way to say *I want a coffee*, and many speakers find it odd."
      ]}
    ]}
   ],
   try:[
    {id:"e5u7-l2-x1", type:"sort", q:"Sort each use. Is the **simple form** the normal choice (a state), or is the **progressive** natural (an activity or event)?", buckets:["Simple form is normal","Progressive is natural"], items:[
      {t:"She owns two bikes.", b:0, why:"*Own* is a state. *She is owning* is not English."},
      {t:"They are having lunch.", b:1, why:"*Have lunch* means *eat*, which is an activity."},
      {t:"I understand the rule.", b:0, why:"A mental state. The progressive is unusual."},
      {t:"He is thinking about moving.", b:1, why:"*Think about* is a process in the mind, and it can be in progress."},
      {t:"The box contains six cups.", b:0, why:"*Contain* is a state of the box."},
      {t:"I’m seeing Dr. Lee on Friday.", b:1, why:"*See* here means *meet* or *visit*. It is an arranged event."}
    ]},
    M("e5u7-l2-x2","Which sentence is the most natural way to say that a person has a sister?",0,[
      ["*I have a sister.*","Right. *Have* in the sense of possession or relation is a state, so it takes the simple form."],
      ["*I’m having a sister.*","The progressive does not fit the state sense of *have*."],
      ["*I am have a sister.*","This is not English. After *am*, the verb needs *-ing*, and *have* is a state here, so the simple form is right."],
      ["*I had a sister now.*","The past tense does not suit a present situation, and *now* does not fit."]
    ]),
    {id:"e5u7-l2-x3", type:"match", q:"Match each sentence with the meaning that the form gives.", pairs:[
      ["*Tomás lives in Lima.*","Long-term situation","The simple present shows a permanent or long-term state."],
      ["*Tomás is living in Osaka this year.*","Temporary situation","The progressive shows a situation that will end."],
      ["*She was crossing the street when the bus came.*","Background to another event","The progressive gives the scene. The simple past gives the event."],
      ["*He’s always losing his keys.*","Annoyance at a repeated event","*Always* with the progressive often shows feeling."]
    ]},
    {id:"e5u7-l2-x4", type:"spot", q:"Lucía writes to a friend. Tap each verb form that is **not** natural English.", ask:"is not natural", parts:[
      "“Hi! I’m new in Osaka. ", {t:"I’m knowing", flag:true, why:"*Know* is a state. The natural form is *I know*."}, " a few people already. Right now ", {t:"I’m living", flag:false, why:"Natural. It shows a temporary situation (a few months or a year)."}, " with my cousin, and ", {t:"I’m having", flag:true, why:"In the sense of possession (*have a small room*) the simple form is needed: *I have*."}, " a small room. ", {t:"I think", flag:false, why:"Natural. *Think* in the sense of *have an opinion* is a state: *I think the area is lovely.*"}, " the area is lovely. ", {t:"I’m learning", flag:false, why:"Natural. *Learn* is an activity in progress."}, " Japanese too.”"
    ]},
    {id:"e5u7-l2-x5", type:"number", q:"How many verb forms in this passage are in the **progressive**? “Aoi is reading. Her friends are talking in the kitchen. The soup tastes good. Someone was singing earlier. I know them.”", answer:3, tol:0, unit:"forms", why:"*Is reading*, *are talking* and *was singing* are progressive (be + *-ing*). *Tastes* and *know* are simple present forms and describe states.", wrongs:[
      {v:2, tol:0, why:"This misses *was singing*. The progressive can be in the past tense."},
      {v:4, tol:0, why:"This counts *tastes*, which looks active. Here *taste* is a state of the soup, so it is simple. *Is tasting* would mean someone is trying the soup."}
    ], hint2:"The progressive always has a form of *be* followed by a verb with *-ing*."},
    {id:"e5u7-l2-x6", type:"order", q:"Put these steps in a sensible order when you decide whether the progressive is natural with a verb.", items:[
      {t:"Say what the verb means in this sentence, and not in general.", why:"The sense decides, because the same verb can have two senses."},
      {t:"Ask whether it describes a state (something that just is) or an activity (something that goes on in steps).", why:"This is the main question."},
      {t:"If it is a state, use the simple form.", why:"This is the normal case: *know, own, belong*."},
      {t:"If it is an activity, ask whether it is in progress at the time you talk about.", why:"If yes, the progressive fits: *is having lunch*."},
      {t:"Check for a special effect: change over time, strong feeling, or politeness.", why:"These are the reasons for exceptions such as *I’m loving it* and *I was wondering*."}
    ]},
    M("e5u7-l2-x7","Why is *I’m loving it* acceptable in informal English when *love* is normally stative?",3,[
      ["Because it is a mistake that has become common.","It is not a mistake. It follows a pattern that is used on purpose."],
      ["Because *love* is not a verb.","*Love* is a verb. It is a state verb in most uses."],
      ["Because the progressive always means *very much*.","The progressive does not always have this meaning. Most progressive uses have nothing to do with strength."],
      ["Because the progressive can show a feeling that is fresh, in the moment, and changing. It adds feeling, and it is used in informal speech and advertising.","Right. This is one of the reasons for an exception, along with a changed sense and politeness."]
    ]),
    {id:"e5u7-l2-x8", type:"explain", q:"Sione, a learner, asks: “Why can I say *I’m having lunch* but not *I’m having a car*? It is the same verb.” Explain what you would tell him.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say that the sense is different, and give a short test.", model:"It is the same word but two different senses. In *I’m having lunch*, *have* means *eat*, which is an activity that goes on for some time. It can be in progress, so the progressive is natural. In *I have a car*, *have* means *own*, which is a state. A state is not an activity in progress, so we use the simple form: *I have a car*. A quick test is to replace *have* with a clearer verb. *I’m eating lunch* works, but *I’m owning a car* does not. English has many verbs like this: *think, see* and *taste* also have a state sense and an activity sense.", points:["Says that the two uses of *have* have different senses", "Explains that the first is an activity and the second is a state", "Gives a test, such as replacing *have* with *eat* or *own*", "Mentions that other verbs behave in the same way, or that the rule is about sense, not the word"]}
   ],
   apply:{
    intro:"These tasks use a free dictionary and a short text or video with spoken English. Nothing needs an account.",
    tasks:[
     {t:"Collect progressive uses with state verbs", how:[
       "Listen to a podcast, a video or a sitcom clip for ten minutes, or read a chat transcript. Write down every use of the progressive that you hear or see.",
       "Mark any that use a verb of the state kind: *know, love, want, hope, think, wonder, have*.",
       "For each, say which reason fits: different sense, change over time, feeling in the moment, or politeness."
     ], write:"Sentence… verb… reason…"},
     {t:"Check two verbs in a learner dictionary", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org). Look up *have* and *think*. Find the entries that give more than one sense.",
       "Write the senses of each verb that are states, and the senses that are activities. Give the dictionary’s example for each.",
       "Write one correct sentence with the progressive for the activity sense of each verb."
     ], write:"Verb… state sense… activity sense… my sentence…"},
     {t:"Explain simple and progressive in your own words", how:[
       "Choose one pair, such as *I live in Osaka* and *I’m living in Osaka*.",
       "Write a three-sentence explanation for a learner at B1 level. Use the idea of a whole situation and a view from inside.",
       "Check that you used no more than one grammar term that the learner might not know, and that you explained it."
     ], write:"My explanation: …"}
    ],
    proof:"A list of heard or read progressive uses with the reason for each. A table with the state and activity senses of *have* and *think*. One short explanation for a learner."
   },
   read:[
    {book:"eling", where:"Background reading: the Semantics chapter, section “Individual- vs. stage-level predicates”", note:"The section is about adjectives such as *tall* and *bored*, not verbs. Its idea of lasting versus temporary properties is close to *I live in Lima* versus *I’m living in Osaka*. It is not the same as stative and dynamic."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u7-l3", title:"The perfect: present perfect and past simple", minutes:55,
   hook:{q:"Which sentence is correct? (a) *I have seen him yesterday.* (b) *I saw him yesterday.*", options:["Only (a)","Only (b)","Both are correct","Neither is correct"], answer:1, reveal:"**Only (b).** *Yesterday* names a finished time, and the present perfect does not go with a finished time. Learners often make this mistake, and in many languages, including Japanese, the equivalent sentence is fine. This lesson explains how the English perfect works, why it is more than “the past”, and where American and British English differ."},
   goals:[
     "Form the present perfect, the past perfect and the perfect progressive",
     "Explain the present perfect as a link between a past situation and now, and use it with *for, since, ever, never, already, yet and just*",
     "Choose between the present perfect and the past simple, and say why finished-time words such as *yesterday* block the perfect",
     "Describe the US and UK differences, including *Did you eat yet?* and *gotten*"
   ],
   learn:[
    {h:"What the perfect is", body:[
      {lead:"The [[hew-perfect|perfect]] is an aspect. It looks back from a point in time at something that came before."},
      "The form is **have + past participle**. The [[hew-past-participle|past participle]] is the form that follows *have*: *walked, seen, gone, been*. For regular verbs it looks like the past tense (*walked*). For many irregular verbs it is different (*saw* but *seen*).",
      {table:[["Name","Form","Example"],["Present perfect","have/has + past participle","*I have lost my keys.*"],["Past perfect","had + past participle","*I had lost my keys before the meeting.*"],["Present perfect progressive","have/has been + *-ing*","*I have been looking for them.*"],["Past perfect progressive","had been + *-ing*","*I had been looking for an hour.*"]]},
      "In the descriptive view, *have* carries the tense. In *has walked*, *has* is present tense. In *had walked*, *had* is past tense. The perfect aspect adds a view from a time that is already past or present, looking at what came before it.",
      "A note for teachers. Most teaching grammars call the perfect an aspect, and this unit does too. The *Cambridge Grammar of the English Language* treats the perfect as a kind of tense (“secondary tense”) and keeps the name *aspect* for the progressive. The facts are the same, and the labels differ. If you read both, you are not confused."
    ]},
    {h:"The present perfect is not “the past”", body:[
      "The present perfect connects a past situation with now. The speaker is talking about the present, and the past is background.",
      {table:[["Meaning","Example","Why the perfect"],["A result that is still true","*I’ve lost my keys.* *She’s broken her arm.*","The keys are still lost. The arm is still broken."],["A situation that began in the past and is not over","*I’ve lived here for ten years.* *We’ve known each other since 2019.*","The situation continues up to now."],["Experience up to now","*Have you ever been to Nara?* *I’ve never eaten natto.*","The question is about your whole life so far."],["A recent event that matters now","*She’s just left.* *They’ve already finished.*","*Just* and *already* link the event with now."],["News","*The mayor has resigned.*","The news is new. Later sentences often use the simple past."]]},
      {fig:'<svg viewBox="0 0 340 290"><defs><marker id="e5u7b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="22" text-anchor="middle">Past simple: a finished time</text><text class="s" x="170" y="42" text-anchor="middle">I lost my keys yesterday.</text><path class="d-ink" d="M24 90H316" stroke-width="2" marker-end="url(#e5u7b)"/><circle class="d-lup" cx="100" cy="90" r="9" stroke-width="2"/><text class="s" x="100" y="118" text-anchor="middle">yesterday</text><path class="d-ink" d="M250 72V108" stroke-width="2"/><text class="s" x="250" y="126" text-anchor="middle">now</text><text x="170" y="170" text-anchor="middle">Present perfect: linked to now</text><text class="s" x="170" y="190" text-anchor="middle">I’ve lost my keys.</text><path class="d-ink" d="M24 238H316" stroke-width="2" marker-end="url(#e5u7b)"/><rect class="d-sage" x="100" y="229" width="150" height="18" rx="6" stroke-width="2"/><circle class="d-lup" cx="100" cy="238" r="9" stroke-width="2"/><path class="d-ink" d="M250 220V256" stroke-width="2"/><text class="s" x="250" y="274" text-anchor="middle">now</text><text class="s" x="100" y="274" text-anchor="middle">earlier</text><text class="s" x="175" y="214" text-anchor="middle">the keys are still lost</text></svg>', alt:"Two timelines. In the top one, a point labeled yesterday is separate from a vertical line labeled now, for the sentence I lost my keys yesterday. In the bottom one, a bar joins an earlier point to the line labeled now, for the sentence I have lost my keys, with the note that the keys are still lost.", cap:"The past simple talks about a finished time that is separate from now. The present perfect joins an earlier situation to now."}
    ]},
    {h:"Present perfect or past simple?", body:[
      "The choice is about the **time frame** that the speaker has in mind.",
      {list:[
        "If the time frame is **finished** (*yesterday, last week, in 2018, two days ago, when I was young*), use the **past simple**.",
        "If the time frame **includes now** (*today, this week, so far, since 2019, for ten years, ever, never, recently*), use the **present perfect**.",
        "If no time is named, ask: does the speaker link it with now? Result, experience and news link with now. A story about a past moment does not."
      ]},
      {table:[["Past simple (a finished time)","Present perfect (time up to now)"],["*I saw her yesterday.*","*I’ve seen her this week.*"],["*I lived there in 2018.*","*I’ve lived here since 2018.*"],["*Did you go to Nara last year?*","*Have you ever been to Nara?*"],["*I had two coffees this morning.* (the morning is over)","*I’ve had two coffees today.* (the day is not over)"]]},
      "The question *When…?* asks about a finished time, so it takes the simple past: *When did you arrive?* not *When have you arrived?*",
      {warn:"The present perfect cannot be used with a word that names a finished time: *yesterday, last week, in 2018, two days ago, at six o’clock*. *I have seen him yesterday* is a very common learner error. Say *I saw him yesterday*."},
      {h:"Compared with Japanese"},
      "Japanese *-ta* (た) is used for both. *Kinō kare ni atta* (昨日彼に会った) “I met him yesterday” and *mō tabeta* (もう食べた) “I’ve already eaten” both use *-ta*. A Japanese learner can therefore say *I have seen him yesterday*, because *-ta* does not force a choice between a finished time and a link with now. English forces the choice. This is a difficulty that the grammar of Japanese explains, and not a sign that the learner is careless."
    ]},
    {h:"The past perfect and the perfect progressive", body:[
      "The **past perfect** looks back from a time in the past. It tells us that one situation came before another past situation or time.",
      {ex:"When Mei arrived, the film had started.\n(the film started first; Mei arrived second)\n\nShe was tired because she had been working all night.\n(the work came first and explains the tiredness)", label:"Worked example", mono:true},
      "The past perfect is often optional when the order is clear from words such as *before* and *after*: *After she left* and *After she had left* are both correct. It is needed when the order would not be clear otherwise: *When I got home, they ate* (they ate after I arrived) and *When I got home, they had eaten* (they finished before).",
      "The **perfect progressive** (*have been -ing*) puts the focus on an activity that continues up to now, or has just stopped with a visible result. *I’ve been waiting for an hour* stresses the activity and its length. *You’re wet. Have you been running?* asks about an activity with a result you can see. With state verbs and *for* or *since*, the simple perfect is usual: *I’ve known her since 2015.*",
      {tip:"A quick guide for *for* and *since*: use **for** with a length (*for ten years, for an hour*) and **since** with a starting point (*since 2019, since Monday, since I was ten*). Both go with the present perfect when the situation is not over."}
    ]},
    {h:"US and UK differences", body:[
      "American and British English both have the present perfect, and both use it for experience (*Have you ever…?*), for *for* and *since* situations, and for results. The difference is in recent events with *already, yet, just*, and in a few other places. The difference is a **tendency**, and it is not a border: both patterns are heard in both countries.",
      {table:[["","Typical in the US","Typical in the UK"],["Asking about a recent event","*Did you eat yet?* (also *Have you eaten yet?*)","*Have you eaten yet?*"],["With *already*","*I already ate.* (also *I’ve already eaten.*)","*I’ve already eaten.*"],["With *just*","*She just left.* (also *She’s just left.*)","*She’s just left.*"],["Participle of *get*","*I’ve gotten better at it.*","*I’ve got better at it.*"]]},
      "In American speech, *Did you eat yet?* is common and standard. It is not a learner error. In careful writing, many writers choose the perfect for these uses, in both countries.",
      "A related point is *have got* and *gotten*. In the US, *have got* means *have* (*I’ve got a car*) and *gotten* is the participle of *get* in the senses *obtain* and *become* (*She’s gotten a new job. It’s gotten cold.*). In the UK, *got* is used for both. This is part of the broader pattern of US and UK variation described in Unit 1.",
      {h:"Common misconceptions"},
      {list:[
        "**“The present perfect is a past tense.”** The form is present (*has*), and the meaning links with now.",
        "**“The perfect means finished.”** *I’ve lived here for ten years* is not finished.",
        "**“American English has no present perfect.”** It has the same forms. It uses the simple past a little more with *already, yet* and *just*.",
        "**“If you use the perfect with *yesterday*, people will not understand.”** They will understand. But it is non-standard, and teachers should correct it kindly."
      ]}
    ]}
   ],
   try:[
    {id:"e5u7-l3-x1", type:"sort", q:"Which form does each sentence need? Look at the time word.", buckets:["Past simple","Present perfect"], items:[
      {t:"“I ___ him yesterday.” (see)", b:0, why:"*Yesterday* is a finished time. Use *saw*."},
      {t:"“We ___ here since 2019.” (live)", b:1, why:"*Since 2019* links the past with now. Use *have lived*."},
      {t:"“She ___ two days ago.” (arrive)", b:0, why:"*Two days ago* is a finished time. Use *arrived*."},
      {t:"“___ you ever ___ to Nara?” (be)", b:1, why:"*Ever* asks about your life up to now. Use *Have you ever been*."},
      {t:"“I ___ two emails so far today.” (send)", b:1, why:"*So far today* includes now. Use *have sent*."},
      {t:"“They moved to Osaka in 2018, and I ___ them there in 2019.” (visit)", b:0, why:"*In 2019* is finished. Use *visited*."}
    ]},
    M("e5u7-l3-x2","Aoi, a master’s student in regional disaster and community studies, writes: “I have visited Nara last year.” What is the best explanation of the error?",1,[
      ["*Visited* is the wrong form. It should be *visit*.","The participle *visited* is correct. The problem is the combination with *last year*."],
      ["*Last year* names a finished time, and the present perfect links a situation with now. The sentence needs the simple past: *I visited Nara last year.*","Right. The present perfect does not go with a finished time."],
      ["*Have* must be changed to *has*.","*I have* is the correct form with *I*."],
      ["Nara needs an article, as in *the Nara*.","Names of cities do not take *the*."]
    ]),
    {id:"e5u7-l3-x3", type:"match", q:"Match each sentence with the meaning the perfect gives.", pairs:[
      ["*I’ve lost my keys.*","A result that is true now","The keys are still lost."],
      ["*We’ve lived here for ten years.*","A situation that is not over","*For ten years* counts up to now."],
      ["*Have you ever eaten natto?*","Experience up to now","*Ever* asks about the whole of your life so far."],
      ["*When I arrived, the film had started.*","Earlier than a past time","The past perfect looks back from the time of arrival."]
    ]},
    {id:"e5u7-l3-x4", type:"spot", q:"Tomás writes about himself. Tap each verb phrase that is **not** correct.", ask:"is not correct", parts:[
      "“", {t:"I have lived", flag:false, why:"Correct. *Since 2019* links the situation with now."}, " in Lima since 2019. ", {t:"I have visited", flag:true, why:"Not correct with *last year*. Use *I visited Cusco last year*."}, " Cusco last year. ", {t:"I’ve never eaten", flag:false, why:"Correct. *Never* covers his life up to now."}, " sushi. ", {t:"I have lost", flag:true, why:"Not correct with *two days ago*. Use *I lost my keys two days ago*."}, " my keys two days ago, but ", {t:"I’ve found", flag:false, why:"Correct. A result that is true now: the keys are found."}, " them.”"
    ]},
    {id:"e5u7-l3-x5", type:"number", q:"Mei started studying English in March 2019. It is now March 2026. How many years can she say she has studied English? “I’ve studied English for ___ years.”", answer:7, tol:0, unit:"years", why:"From March 2019 to March 2026 is seven years. *For* takes the length of time: *I’ve studied English for seven years.* With *since* she would say *since 2019*.", wrongs:[
      {v:8, tol:0, why:"This counts both 2019 and 2026 as whole years. The length from March to March is seven years."},
      {v:2019, tol:0, why:"2019 is the starting point, which goes with *since*. *For* needs a length."}
    ], hint2:"Subtract the starting year from the present year, and remember that *for* needs a length."},
    {id:"e5u7-l3-x6", type:"order", q:"Read the paragraph, then put the events in the order they happened. “Mei sat down at six. She had arrived at ten to six. She had taken the train from work, and before that she had finished her last email.”", items:[
      {t:"Mei finished her last email.", why:"The earliest event: *before that she had finished*."},
      {t:"Mei took the train from work.", why:"Next: *she had taken the train*."},
      {t:"Mei arrived at ten to six.", why:"The past perfect *had arrived* looks back from six o’clock."},
      {t:"Mei sat down at six.", why:"The simple past *sat* is the main event on the time line. The past perfect clauses are all earlier."}
    ]},
    M("e5u7-l3-x7","Mei, a student from Japan, visits New York. A friend asks her, “Did you eat yet?” What is the best description of this question?",2,[
      ["It is a grammar mistake, and she should correct it.","It is common, standard American speech."],
      ["It is British English.","British speakers more often say *Have you eaten yet?*"],
      ["It is natural everyday American English. The same speaker could also say *Have you eaten yet?*","Right. Both are standard in the US, and the simple past with *yet* is common in speech."],
      ["It means that the friend asks about the distant past.","It asks about a recent event, as *Have you eaten yet?* does."]
    ]),
    {id:"e5u7-l3-x8", type:"explain", q:"Aoi says: “In Japanese I can say *kyonen Nara ni itta* (去年奈良に行った), so why is *I have visited Nara last year* wrong in English?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what English forces the speaker to choose, and give a rule of thumb with an example.", model:"Japanese *-ta* covers both a finished past event and a result that matters now, so one form is enough. English splits them. The present perfect connects a situation with now, and it cannot be used with a finished time such as *last year*. A simple rule: if you say *when*, use the simple past (*I visited Nara last year*). If you do not name a time, but the experience matters now, use the perfect (*I’ve visited Nara twice*). The English rule is a choice that Japanese does not ask you to make, so the mistake is a normal transfer from her first language.", points:["Says that Japanese *-ta* covers both meanings and English separates them", "Says that the present perfect links with now and does not go with a finished time", "Gives a simple rule and an example for each form", "Is kind, and says the error is a normal result of her first language"]}
   ],
   apply:{
    intro:"These tasks use free corpora and a free dictionary. The Corpus of Contemporary American English (COCA) and GloWbE are at english-corpora.org, and are free after you register.",
    tasks:[
     {t:"Corpus check: *Did you eat yet?* and *Have you eaten yet?*", how:[
       "Go to english-corpora.org and open COCA (American English). Search for *did you eat yet* and then for *have you eaten yet*. Note how many results each gives, and the genres they appear in (spoken, fiction, and so on).",
       "Open GloWbE (web text from many countries) at the same site. Search for the same two phrases, and compare the US and GB results. Note that web text is not the same as speech.",
       "Write two or three sentences about what you found. Do not claim more than the numbers show, and say which comparison is fair (same corpus, same size) and which is not."
     ], write:"COCA: did you eat yet … have you eaten yet … GloWbE: US … GB … My conclusion in two sentences: …"},
     {t:"Check the perfect in a learner grammar", how:[
       "Open the Cambridge Dictionary grammar section (dictionary.cambridge.org) and find the pages on the present perfect and the past simple.",
       "Write the main uses of the present perfect that the page gives. Compare them with the table in this lesson.",
       "Note any US or UK comment on the page."
     ], write:"Uses on the page… Same as the lesson? … US/UK note…"},
     {t:"Correct ten sentences kindly", how:[
       "Write five correct perfect sentences and five with the *I have seen him yesterday* error, in a mixed order. Ask a friend to find the errors, or check them yourself a day later.",
       "For each error, write one sentence of explanation that you would say to a learner, with no grammar term that the learner has not met.",
       "Read your explanations. Which one is the clearest? Why?"
     ], write:"Error… correction… my explanation…"}
    ],
    proof:"A short table of corpus results with two or three sentences of careful conclusion. Notes comparing a learner grammar with this lesson. Five short explanations of errors."
   }
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u7-l4", title:"Talking about the future", minutes:55,
   hook:{q:"Which sentence is the usual choice for an arrangement you have already made? (a) *I will see my dentist at ten.* (b) *I’m seeing my dentist at ten.*", options:["Only (a)","Only (b)","Both are possible, but (b) is the more usual choice for an arrangement","Neither is possible"], answer:2, reveal:"**Both are possible, but (b) is the more usual choice for an arrangement.** English has no single future form. It has several, and each leans toward a different meaning. (a) is grammatical, but it sounds like a decision made just now, or a prediction. (b) sounds like a plan that is already fixed. This lesson shows the main forms and what each one leans toward. These are tendencies, not strict rules."},
   goals:[
     "Name the main forms for future time: *will*, *be going to*, the present progressive, the present simple, and a few others",
     "Describe what each form tends to mean, and say why the differences are tendencies and not rules",
     "Use the present simple in *if* and *when* clauses about the future",
     "Explain the choice of future form to a learner, including the US and UK differences"
   ],
   learn:[
    {h:"Many forms, no single future", body:[
      {lead:"Lesson 1 showed that English has no future tense. Here is what it has instead: a set of forms, each with its own flavor."},
      "Textbooks often give rules such as “use *will* for decisions and *going to* for plans”. These rules describe real tendencies. But native speakers often use either form. The rule tells you what is **more likely**, and it will not tell you what is **possible**. If a learner is told the rule is absolute, the first real conversation will contradict it.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Four common ways to look ahead</text><rect class="d-sage" x="14" y="36" width="108" height="50" rx="8" stroke-width="2"/><text x="68" y="66" text-anchor="middle">will</text><text class="s" x="132" y="55">I’ll carry that for you.</text><text class="s" x="132" y="75">offer, decision, prediction</text><rect class="d-lup" x="14" y="98" width="108" height="50" rx="8" stroke-width="2"/><text x="68" y="128" text-anchor="middle">be going to</text><text class="s" x="132" y="117">It’s going to rain.</text><text class="s" x="132" y="137">plan, or evidence now</text><rect class="d-gold" x="14" y="160" width="108" height="50" rx="8" stroke-width="2"/><text x="68" y="190" text-anchor="middle">be + -ing</text><text class="s" x="132" y="179">I’m meeting Mei at six.</text><text class="s" x="132" y="199">an arrangement</text><rect class="d-soft" x="14" y="222" width="108" height="50" rx="8" stroke-width="2"/><text x="68" y="252" text-anchor="middle">simple present</text><text class="s" x="132" y="241">The train leaves at 6:40.</text><text class="s" x="132" y="261">a schedule</text><text class="s" x="170" y="292" text-anchor="middle">Tendencies, not strict rules.</text></svg>', alt:"Four rows. The form will, with the example I’ll carry that for you, leans toward offer, decision and prediction. Be going to, with It’s going to rain, leans toward plan or present evidence. Be plus -ing, with I’m meeting Mei at six, leans toward an arrangement. The simple present, with The train leaves at 6:40, leans toward a schedule.", cap:"Each form leans toward a different meaning. Several can often be used in the same place."}
    ]},
    {h:"Will", body:[
      "*Will* is a modal auxiliary verb in the present tense (Lesson 1). In speech it is often *’ll*, and the negative is *won’t*. Its main meanings are these.",
      {list:[
        "**Prediction without strong present evidence.** *I think prices will rise next year. It’ll be sunny tomorrow* (a weather forecast).",
        "**A decision made as you speak, an offer or a promise.** *I’ll carry that for you. I’ll call you tonight. I’ll have the soup, please.*",
        "**Willingness or refusal.** *I’ll help if you like. The car won’t start.* The second is about now.",
        "**A guess about now.** *That’ll be the postman.* This is not future at all."
      ]},
      "Because *will* is often used for promises and offers, it can sound firm. *I will go to the festival* can sound like a promise or a strong decision. *I’m going to the festival* or *I’m planning to go* is more relaxed."
    ]},
    {h:"Be going to", body:[
      "*Be going to* has the form of the present progressive of *go*. Its meaning links the future to something true now. It has two main uses.",
      {list:[
        "**A plan or intention.** *We’re going to move in June. I’m going to ask for a raise.* The plan is already in the speaker’s mind.",
        "**A prediction from present evidence.** *Look at those clouds. It’s going to rain.* *Careful! You’re going to spill that.* The evidence is visible now."
      ]},
      "In speech *going to* is often said as *gonna*. Unit 3 explained this reduction. In writing, use *going to* in all but casual messages. For predictions, *will* and *going to* often work equally well: *It will rain tomorrow* and *It’s going to rain tomorrow* are both natural. The second tends to suggest some present sign."
    ]},
    {h:"The present progressive and the present simple", body:[
      "The **present progressive** is used for **arrangements**: things that are fixed by someone, with the time known. *I’m flying to Osaka on Friday. She’s meeting her tutor at four. We’re having dinner with Sione tonight.* It usually needs a time word or a clear context, so the learner can tell that the sentence is about the future. It usually does not suit predictions: many speakers find *It’s raining tomorrow* odd.",
      "The **present simple** is used for **schedules and timetables** (Americans usually say *schedule*; British speakers often say *timetable*). It is used when the events are fixed by a calendar or an institution, not by a person’s decision: *The film starts at nine. The train leaves at 6:40. Tomorrow is Friday.*",
      {warn:"The present simple is also the normal form for future time in clauses of time and condition. Say *When she arrives, call me* and *If it rains, we’ll stay home*. Do not say *When she will arrive* or *If it will rain*. The main clause can have *will*, but the clause with *when, if, as soon as, before, after* or *until* uses the present."},
      "There are a few exceptions. The most common is a polite use of *will* in an *if* clause: *If you’ll wait here, the doctor will see you now.* Here *will* means *are willing to*. Unit 8 returns to this."
    ]},
    {h:"Other forms, the past, and the differences between regions", body:[
      {table:[["Form","Example","Meaning"],["will be + -ing","*This time tomorrow I’ll be flying to Osaka.*","in progress at a future time"],["will have + participle","*By Friday I’ll have finished.*","complete before a future time"],["be about to","*The film is about to start.*","very soon"],["be to","*The president is to speak at nine.*","formal, an official arrangement"],["shall","*Shall I open the window?* *Shall we go?*","an offer or suggestion, common in the UK"]]},
      "In the US, *shall* is less common in speech. People tend to say *Should I open the window?* or *Do you want me to…?* Americans use *shall* mostly in formal and legal writing (*The tenant shall pay*). British speakers use it more in offers and suggestions. This is a tendency, and both groups understand both uses.",
      "To talk about the future **from a time in the past**, English uses *was going to* and *would*: *I was going to call, but I forgot. She said she would come.* Notice again that *would* is the past tense of *will*.",
      {h:"Compared with Japanese"},
      "Japanese uses the plain form (*iku* 行く “go, will go”) for future time and does not make a choice among forms like *will* and *going to*. Instead it adds words that show **intention or guess**. *Ikō to omou* (行こうと思う) means “I think I’ll go” or “I’m thinking of going”. *Ashita wa ame darō* (明日は雨だろう) means “It will probably rain tomorrow”. So Japanese also marks the speaker’s attitude to the future. It does not do it with forms that match *will* and *going to* one to one.",
      {h:"Common misconceptions"},
      {list:[
        "**“Use *will* for decisions, *going to* for plans, and never the other way.”** They are tendencies. *I think I’m going to have the soup* works for a decision as you speak, and *I’ll be there at six* works for a plan.",
        "**“The present progressive is always about now.”** With a future time word and an arrangement, it is about the future.",
        "**“The present simple cannot be used for the future.”** It is needed for schedules, and for clauses with *if* and *when*.",
        "**“*Will* is always future.”** It is also used for guesses about now and for willingness (*The car won’t start*)."
      ]}
    ]}
   ],
   try:[
    {id:"e5u7-l4-x1", type:"sort", q:"Sort each sentence by the main meaning it has.", buckets:["Offer or decision now","Plan or arrangement","Prediction","Schedule"], items:[
      {t:"“I’ll carry that for you.”", b:0, why:"An offer made as the speaker sees the need. *Will* is typical."},
      {t:"“I’ll have the soup, please.”", b:0, why:"A decision made as the speaker talks, in a restaurant."},
      {t:"“We’re seeing the house on Friday.”", b:1, why:"A fixed arrangement. The present progressive is typical."},
      {t:"“We’re going to move in June.”", b:1, why:"A plan that is already in the speaker’s mind."},
      {t:"“I think prices will rise next year.”", b:2, why:"A prediction without a visible sign."},
      {t:"“Look out! That shelf is going to fall.”", b:2, why:"A prediction based on evidence that you can see now."},
      {t:"“The museum opens at ten tomorrow.”", b:3, why:"A schedule, fixed by an institution. The present simple is typical."},
      {t:"“The last train leaves at 11:45.”", b:3, why:"A timetable (US: schedule). The present simple is typical."}
    ]},
    M("e5u7-l4-x2","Which sentence is standard English?",0,[
      ["*If it rains tomorrow, we’ll stay home.*","Right. In a clause with *if*, the present simple is used for future time. The main clause can have *will*."],
      ["*If it will rain tomorrow, we’ll stay home.*","In this kind of *if* clause, standard English uses the present simple for future time, not *will*."],
      ["*If it rain tomorrow, we’ll stay home.*","After *it*, the present simple needs *-s*: *it rains*. This is a form error, not a choice between tenses."],
      ["*If it would rain tomorrow, we’ll stay home.*","*Would* in the *if* clause belongs to a different kind of sentence, an unreal one."]
    ]),
    {id:"e5u7-l4-x3", type:"match", q:"Match each form with the meaning it most often leans toward.", pairs:[
      ["*will*","An offer, a decision as you speak, or a prediction","The meanings of *will* are about willingness and prediction."],
      ["*be going to*","A plan, or a prediction from evidence now","It links the future with the present."],
      ["present progressive","A fixed arrangement","*I’m meeting Mei at six.* Someone has arranged it."],
      ["present simple","A schedule or timetable","*The film starts at nine.* An institution or a calendar fixes it."]
    ]},
    {id:"e5u7-l4-x4", type:"spot", q:"Tap each verb form that talks about a time **after now**.", ask:"points to the future", parts:[
      "Mei’s train ", {t:"leaves", flag:true, why:"A schedule: the present simple, with a future meaning (*at 7:10 tomorrow*)."}, " at 7:10 tomorrow. She ", {t:"is packing", flag:false, why:"This is happening now."}, " now, and she ", {t:"’s meeting", flag:true, why:"An arrangement for the future: the present progressive with a future meaning."}, " Aoi at the station. Aoi ", {t:"likes", flag:false, why:"A present state."}, " trains. Mei ", {t:"will call", flag:true, why:"A promise or prediction about the future."}, " her mother when she ", {t:"arrives", flag:true, why:"A clause of time. The verb is present simple, but it talks about a later time."}, "."
    ]},
    {id:"e5u7-l4-x5", type:"number", q:"A speaker says these five things at noon. In how many of them does the verb form talk about the **future**? (1) “The film starts at nine tonight.” (2) “She walks to work every day.” (3) “I’m flying to Osaka on Friday.” (4) “Water freezes at 0 degrees Celsius.” (5) “If you need help, I’ll be here.”", answer:3, tol:0, unit:"sentences", why:"Sentences 1, 3 and 5 talk about a time after now: a schedule, an arrangement, and a future offer. Sentence 2 is a habit and sentence 4 is a general fact.", wrongs:[
      {v:2, tol:0, why:"This misses one of the three. Sentence 1 (a schedule) and sentence 3 (an arrangement) use present-tense forms, but both talk about the future, and so does sentence 5. Count the time, not the form."},
      {v:1, tol:0, why:"This counts only sentence 5, which has *will*. Sentences 1 and 3 also talk about the future."}
    ], hint2:"Ask of each sentence: does it talk about a time after now? The verb form does not decide this."},
    M("e5u7-l4-x6","What does *This time tomorrow I’ll be flying to Osaka* say?",1,[
      ["That the speaker will decide tomorrow whether to fly.","*Will be flying* does not describe a decision. It describes the situation at a future time."],
      ["That the flight will be in progress at the time mentioned tomorrow.","Right. *Will be + -ing* puts the speaker inside a future situation, in the same way as *was flying* puts the speaker inside a past one."],
      ["That the speaker has already finished the flight.","That would be *will have flown*."],
      ["That the speaker is flying now.","The sentence is about tomorrow, not now."]
    ]),
    M("e5u7-l4-x7","In the UK, someone might say *Shall I open the window?* An American is more likely to say…",2,[
      ["*Will I open the window?*","This does not work as an offer. *Will I* asks a question about the future."],
      ["*Do I open the window?*","This does not work as an offer in this form."],
      ["*Should I open the window?* or *Do you want me to open the window?*","Right. Americans tend to use *should* or another phrase for this offer. *Shall* is heard in the US but is less common in speech."],
      ["*Did I open the window?*","This asks about the past."]
    ]),
    {id:"e5u7-l4-x8", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, says: “I told my friend *I will go to the festival*, and she asked *Is that a promise?* I only wanted to say that I plan to go. What should I say?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what *will* often sounds like, and give her two other ways to say it.", model:"Your sentence is correct. But *will* often sounds like a decision or a promise, especially when you say it with feeling, so your friend heard a promise. To say it more lightly, you can say *I’m going to the festival* or *I’m planning to go*. These suggest a plan. In speech, *I’ll be there* sounds friendly and light, and a natural voice makes a big difference. This is a tendency and not a rule, so there is no need to worry about it.", points:["Says that her sentence is correct and kindly reassures her", "Says that *will* can sound like a promise or a firm decision", "Gives at least two other forms for a plan, such as *be going to* or the present progressive", "Says that this is a tendency, not a strict rule"]}
   ],
   apply:{
    intro:"These tasks use real examples and a free corpus. The Corpus of Contemporary American English (COCA) at english-corpora.org is free after you register.",
    tasks:[
     {t:"Collect ten real sentences about the future", how:[
       "Find ten sentences about the future in real texts: a weather forecast, a train or event schedule, a message about plans, a news article.",
       "For each one, write the form (*will, going to*, present progressive, present simple, or other).",
       "Sort them into schedules, arrangements, plans, predictions and offers. Which form was the most common for each meaning? Did anything surprise you?"
     ], write:"Sentence… form… meaning… My pattern: …"},
     {t:"Corpus check: *will*, *’ll* and *going to* by type of text", how:[
       "Open COCA at english-corpora.org. Search for *going to*, and look at the chart that shows the results in each type of text (spoken, fiction, news, academic and so on).",
       "Search for *will*, and look at the same chart. Which kinds of text have more of each? Notice that the sizes of the sets differ, so use the per-million figures and not the raw counts.",
       "Write two sentences about what you found. Say what you cannot tell from the chart."
     ], write:"going to is most common in… will is most common in… I cannot tell from this chart whether…"},
     {t:"Explain one choice to a learner", how:[
       "Choose a pair: *I’ll call you* and *I’m going to call you*. Write a short explanation for a B1 learner of when each is natural.",
       "Include the word *tendency*, and give one example in which either form is fine.",
       "Say whether your explanation would change for a learner who uses the label “future tense”."
     ], write:"My explanation: …"}
    ],
    proof:"A table of ten real sentences sorted by form and meaning. A short note on what the COCA chart shows. A short explanation for a learner."
   }
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u7-l5", title:"Explaining tense and aspect", minutes:55,
   hook:{q:"Japanese 結婚している (*kekkon shite iru*) uses *-te iru*, which often matches the English progressive. What is the natural English for “She is married”?", options:["She is marrying.","She is married.","She marries.","She was marrying."], answer:1, reveal:"**She is married.** Japanese *-te iru* has two main jobs. With an activity verb such as *taberu* (“eat”) it means “is eating”. With a verb of change such as *kekkon suru* (“marry”) it means a **state that results from the change**: “is married”. English does not use the progressive for this, so *She is marrying* would mean that the wedding is happening now. This lesson looks at these differences and at how to explain tense and aspect to learners."},
   goals:[
     "Compare Japanese *-ta* and *-te iru* with English tenses and aspects, with examples, and explain why they do not map one to one",
     "Choose timelines that help learners, and spot timelines and rules that mislead",
     "Diagnose common tense and aspect errors, and explain each one kindly in a few plain sentences",
     "Give a short, clear explanation of a tense or aspect point to a learner"
   ],
   learn:[
    {h:"Japanese -ta and -te iru", body:[
      {lead:"Japanese has two forms that learners often connect with English tenses. Neither one matches an English tense directly, and the way they differ explains many learner errors."},
      "Grammars of Japanese describe the plain verb form (*taberu*) as non-past, and the *-ta* form (*tabeta*) as a form for past and for completed situations. The *-te iru* form is built from the *-te* form of a verb and the verb *iru* (“be, exist”). Its meaning depends on the verb. These are tendencies, and linguists describe the details in different ways.",
      {table:[["Japanese","Meaning","Natural English"],["*kinō tabeta* (昨日食べた)","a past event","*I ate yesterday.* (past simple)"],["*mō tabeta* (もう食べた)","completed, with a link to now","*I’ve already eaten.* (US also *I already ate.*)"],["*Nara ni itta koto ga aru* (奈良に行ったことがある)","experience","*I’ve been to Nara.* (present perfect)"],["*A, atta!* (あ、あった！)","finding something; no past meaning","*Oh, here it is!* (present)"],["*ima tabete iru* (今食べている)","an action in progress","*I’m eating now.* (progressive)"],["*kekkon shite iru* (結婚している)","a state that follows a change","*I’m married.* (simple present of *be*)"],["*mainichi hashitte iru* (毎日走っている)","a repeated action","*I run every day.* (simple present)"],["*shitte iru* (知っている)","a state of knowing","*I know.* (simple present)"]]},
      "Look at the pattern. *-te iru* is progressive with an activity verb (*taberu, hashiru*). With a verb of change (*kekkon suru, shinu, aku*) it gives the state after the change: *shinde iru* (死んでいる) is “is dead”, and *mado ga aite iru* (窓が開いている) is “the window is open”. With a movement verb it also gives the result: *kite iru* (来ている) means “has come and is here”, and *itte iru* (行っている) means “has gone and is there”. And with *shiru* (“get to know”) it gives the state of knowing: *shitte iru* means “know”.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">Japanese forms and English meanings</text><rect class="d-sage" x="14" y="36" width="82" height="120" rx="8" stroke-width="2"/><text x="55" y="102" text-anchor="middle">-te iru</text><rect class="d-soft" x="108" y="36" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="52" text-anchor="middle">tabete iru</text><text class="s" x="217" y="67" text-anchor="middle">is eating (in progress)</text><rect class="d-soft" x="108" y="78" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="94" text-anchor="middle">kekkon shite iru</text><text class="s" x="217" y="109" text-anchor="middle">is married (resulting state)</text><rect class="d-soft" x="108" y="120" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="136" text-anchor="middle">mainichi hashitte iru</text><text class="s" x="217" y="151" text-anchor="middle">runs every day (repeated)</text><rect class="d-lup" x="14" y="174" width="82" height="120" rx="8" stroke-width="2"/><text x="55" y="240" text-anchor="middle">-ta</text><rect class="d-soft" x="108" y="174" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="190" text-anchor="middle">kinō tabeta</text><text class="s" x="217" y="205" text-anchor="middle">ate yesterday (past)</text><rect class="d-soft" x="108" y="216" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="232" text-anchor="middle">mō tabeta</text><text class="s" x="217" y="247" text-anchor="middle">has already eaten (perfect)</text><rect class="d-soft" x="108" y="258" width="218" height="36" rx="6" stroke-width="2"/><text class="s" x="217" y="274" text-anchor="middle">A, atta!</text><text class="s" x="217" y="289" text-anchor="middle">Oh, here it is! (finding)</text><text class="s" x="170" y="320" text-anchor="middle">No one-to-one match with English tenses.</text></svg>', alt:"Two groups. The form -te iru has three uses: tabete iru, meaning is eating, which is in progress; kekkon shite iru, meaning is married, which is a resulting state; and mainichi hashitte iru, meaning runs every day, which is repeated. The form -ta has three uses: kinō tabeta, meaning ate yesterday; mō tabeta, meaning has already eaten; and A, atta, meaning Oh, here it is, which is finding something.", cap:"Each Japanese form has several meanings, and each meaning is matched by a different English form."}
    ]},
    {h:"What goes wrong for learners", body:[
      "Because the Japanese forms cover several English forms, the errors are predictable. They are not careless. Each one follows a pattern from the first language.",
      {table:[["Error","What is behind it","Natural English"],["*I am knowing him.*","*shitte iru* is “is knowing” word for word, but English *know* is a state","*I know him.*"],["*My sister is marrying.*","*kekkon shite iru*, a resulting state, read as a progressive","*My sister is married.*"],["*I have seen him yesterday.*","*-ta* allows a finished time with a result","*I saw him yesterday.*"],["*I live here since 2020.*","*2020-nen kara sunde iru* (2020年から住んでいる) is a non-past form with *kara* “since”, so a present form seems right","*I’ve lived here since 2020.*"],["*If it will rain, we stay home.*","The learner adds *will* to mark the future, and leaves it out in the main clause","*If it rains, we’ll stay home.*"],["*She is married since 2019.*","*2019-nen kara kekkon shite iru* (2019年から結婚している): the same form with a starting point","*She’s been married since 2019.*"]]},
      "Use these patterns to **explain**, not to scold. A good explanation names the English rule in plain words and, when it helps, says what the Japanese form does. A learner who sees why the mistake was reasonable will remember the rule better than one who is only corrected."
    ]},
    {h:"Timelines that help, and timelines that mislead", body:[
      "Teachers draw timelines on boards and in slides. A good timeline shows the form and the meaning. A poor one teaches a rule that is false. Here is how to tell them apart.",
      {table:[["Timeline","Helps with","Misleads when"],["A line with a mark for *now* and a point or a segment for the situation","Past simple versus present perfect: finished time versus time up to now","The speaker’s time is not marked, so the learner cannot see which time frame the sentence uses"],["A wavy or dashed segment around a marked time","The progressive: the situation is in progress at that time","It is drawn long, and then learners think the progressive means long and simple means short"],["A bracket from an earlier point to *now*","The present perfect with *for* and *since*","It is drawn only to the left of *now*, so it looks like a past tense"],["A grid of three columns (past, present, future) and four rows","Remembering a list of 12 forms","It teaches that tense is time, and hides that *The train leaves tomorrow* is present tense"],["A point to the right of *now* labeled “future tense: will”","Showing that *will* often points ahead","It hides the other forms (present simple, present progressive, *going to*) and the guesses and decisions that *will* also expresses"]]},
      "Three good habits come from this. First, always mark **now** and the **time the speaker is talking about** (the reference time). Second, add a time word or a short example under each diagram, so the form is tied to a real sentence. Third, draw with the learner: ask “Is this time finished, or does it include now?” before you show the answer.",
      {tip:"If a rule of thumb is useful but not exact, say so. “*Yesterday, last week* and *in 2018* name finished times, so use the past simple” is true. “Use the present perfect when the time is not stated” is not always true, so say “often”."}
    ]},
    {h:"Giving a short explanation", body:[
      "A good explanation of a tense or aspect point is short, in plain words, and has one real example. It uses at most one new grammar term, and explains it.",
      {ex:"Question: Why can’t I say “I have seen him yesterday”?\n\nExplanation: The present perfect connects a past situation with now. “Yesterday” names a finished time, which is separate from now. So use the simple past: “I saw him yesterday.” If you do not name a time, the perfect is fine: “I’ve seen him.”", label:"Worked example", mono:true},
      "Here is a checklist you can use for any tense or aspect question.",
      {ol:[
        "Ask: **what time frame?** Is it finished, or does it include now?",
        "Ask: **what view?** Is the situation seen as a whole, or in progress?",
        "Say it in one or two sentences, with one example from the learner’s own sentence.",
        "If the learner’s first language is Japanese, check whether *-ta* or *-te iru* explains the error. If it does, say so kindly.",
        "End with a corrected version, and ask the learner to say one new sentence."
      ]},
      {h:"Common misconceptions"},
      {list:[
        "**“Japanese *-te iru* is the English progressive.”** Sometimes, with activity verbs. With verbs of change it is a resulting state.",
        "**“Japanese *-ta* is the English past tense.”** It covers the past simple, the present perfect and some uses that are present in English.",
        "**“A timeline is always clearer than words.”** A poor timeline can teach a false rule. Check it against real sentences.",
        "**“Correct every error at once.”** Choose the error that blocks understanding or happens most often, and teach that one."
      ]}
    ]}
   ],
   try:[
    {id:"e5u7-l5-x1", type:"sort", q:"Which English form is the most natural equivalent of each Japanese sentence?", buckets:["Progressive (be + -ing)","Simple present","Past simple","Present perfect"], items:[
      {t:"今、食べている (*ima, tabete iru*)", b:0, why:"An action in progress. English uses *I’m eating now.*"},
      {t:"結婚している (*kekkon shite iru*)", b:1, why:"A resulting state. English uses *is married*, the simple present of *be*."},
      {t:"昨日、食べた (*kinō, tabeta*)", b:2, why:"A past event with a finished time. English uses *I ate yesterday.*"},
      {t:"奈良に行ったことがある (*Nara ni itta koto ga aru*)", b:3, why:"Experience up to now. English uses *I’ve been to Nara.*"},
      {t:"窓が開いている (*mado ga aite iru*)", b:1, why:"A state after a change. English uses *The window is open.*"},
      {t:"知っている (*shitte iru*)", b:1, why:"The state of knowing. English uses *I know.*"}
    ]},
    {id:"e5u7-l5-x2", type:"match", q:"Match each Japanese phrase with the natural English.", pairs:[
      ["知っている (*shitte iru*)","I know","A state of knowing. English does not use *is knowing*."],
      ["住んでいる (*sunde iru*)","I live here","A long-term situation. English uses the simple present."],
      ["結婚している (*kekkon shite iru*)","She is married","A resulting state. English uses *be + adjective*."],
      ["食べている (*tabete iru*, said now)","He is eating","An action in progress. The progressive matches here."]
    ]},
    M("e5u7-l5-x3","A teacher draws a grid with three columns (past, present, future) and four rows (simple, progressive, perfect, perfect progressive). What is the main risk of teaching this grid first?",1,[
      ["It has too few forms.","It has too many, not too few. The list of 12 is a common teaching tool."],
      ["Learners may decide that tense is time, and expect the present forms never to talk about the future.","Right. The grid is easy to remember, but it hides *The train leaves tomorrow* and other mismatches."],
      ["It cannot be used with Japanese learners.","It can be used. It needs to be supplemented with the examples in this unit."],
      ["The grid has errors in its labels.","The labels are traditional. The problem is the idea that they all name times."]
    ]),
    {id:"e5u7-l5-x4", type:"spot", q:"Takumi introduces himself. Tap each sentence part that has a tense or aspect error.", ask:"has an error", parts:[
      "“Hello, I’m Takumi. ", {t:"I am living in Saitama since 2020.", flag:true, why:"A situation that began in the past and continues needs the present perfect: *I’ve lived in Saitama since 2020.*"}, " ", {t:"I have seen a movie yesterday.", flag:true, why:"*Yesterday* names a finished time. Use *I saw a movie yesterday.*"}, " ", {t:"I’m knowing many people here.", flag:true, why:"*Know* is a state. Use *I know many people here.*"}, " ", {t:"If it rains tomorrow, I’ll stay home.", flag:false, why:"Correct. The *if* clause uses the present simple for future time, and the main clause uses *will*."}, " ", {t:"I’m studying English.", flag:false, why:"Correct. It could mean a temporary activity or one that is in progress."}, "”"
    ]},
    {id:"e5u7-l5-x5", type:"number", q:"How many of these six sentences have a tense or aspect error? (1) I have seen him yesterday. (2) She is knowing the answer. (3) We’ve lived here since 2021. (4) If it will rain, we’ll stay in. (5) He’s been married for ten years. (6) I’m living here since 2020.", answer:4, tol:0, unit:"sentences", why:"Sentences 1, 2, 4 and 6 have errors: a finished time with the perfect, a state in the progressive, *will* in an *if* clause, and a progressive with *since*. Sentences 3 and 5 are correct.", wrongs:[
      {v:3, tol:0, why:"This misses one of the four errors. Check each sentence again, including 4 (an *if* clause uses the present simple for future time) and 6 (a situation that continues up to now needs the perfect)."},
      {v:5, tol:0, why:"This marks a correct sentence as wrong. Sentence 5 is a normal use of the present perfect with *for*, and sentence 3 is a normal use with *since*."}
    ], hint2:"Check each one for a finished time with the perfect, a state in the progressive, *will* in an *if* clause, or a situation that continues without the perfect."},
    {id:"e5u7-l5-x6", type:"order", q:"Put these steps in a sensible order when you explain a tense error to a learner.", items:[
      {t:"Read the learner’s whole sentence and find what they meant.", why:"You explain best when you know the meaning that the learner intended."},
      {t:"Ask what time frame it is: finished, or including now.", why:"This is the main question for the perfect and the past simple."},
      {t:"Say the rule in one or two plain sentences, using the learner’s sentence.", why:"One short rule and a real example work better than a list."},
      {t:"If the learner knows Japanese, say what the Japanese form does and how English is different.", why:"This shows that the error is reasonable, and it is kind."},
      {t:"Give the corrected sentence and ask for one new sentence.", why:"The learner practices the rule at once."}
    ]},
    M("e5u7-l5-x7","A learner writes “My sister is marrying” and means 結婚している (*kekkon shite iru*). What is the best explanation?",2,[
      ["English has no way to say this.","English says it with *is married*."],
      ["She should say *My sister has married* every time.","*Has married* means the marriage is recent news. It is not the usual way to state a status."],
      ["Japanese *-te iru* with *kekkon suru* gives a state, “is married”. English uses *be married*, and *is marrying* would mean the wedding is happening now.","Right. The explanation says what the Japanese does and what English needs."],
      ["The learner should use the past tense: *My sister married.*","This would mean that she married at some earlier time, and it does not describe her status now."]
    ]),
    {id:"e5u7-l5-x8", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a former student: “Is Japanese *-ta* the same as the English past tense?” Explain what Toby could say.", size:"4–6 sentences", prompt:"Toby could say: …", hint:"Give two or three uses of *-ta* with their English forms, and say why they differ.", model:"Not exactly. *-ta* often matches the English past simple: *kinō tabeta* is “I ate yesterday”. But it is also used for completion with a link to now, like *mō tabeta*, which is “I’ve already eaten” (or “I already ate” in American English). It is used for experience, as in *Nara ni itta koto ga aru*, “I’ve been to Nara”. It can even show finding something, as in *A, atta!*, “Oh, here it is!”, with no past meaning. English separates these meanings with the past simple and the present perfect, so a Japanese speaker has to choose a form that Japanese does not ask for. It is a good idea to show a few real pairs and let the student find the rule.", points:["Says that *-ta* matches the English past simple in some uses, but not in all", "Gives at least one use that matches the present perfect (completion or experience)", "Mentions that English forces a choice that Japanese does not", "Gives examples with Japanese and English, or suggests showing pairs"]}
   ],
   apply:{
    intro:"These tasks use real examples, a free dictionary and a corpus. The Corpus of Contemporary American English (COCA) at english-corpora.org is free after you register.",
    tasks:[
     {t:"Translate and compare six sentences", how:[
       "Write six Japanese sentences with *-ta* and *-te iru* (or take them from the table in this lesson). Include one with *kekkon shite iru* and one with *shitte iru*.",
       "For each one, write a natural English sentence. Do not translate word for word.",
       "Write which English form you used and why. Mark any sentence where the tense or aspect was different from the Japanese."
     ], write:"Japanese… natural English… form used… different from Japanese because…"},
     {t:"Corpus check: *be married* and *marrying*", how:[
       "Open COCA at english-corpora.org. Search for *is married* and then *is marrying*.",
       "Look at the results for *is marrying*. Is it about a present state? Look at the contexts, and note which ones are about a wedding that is happening or planned.",
       "Write two sentences about what you found, and one example you would show a learner."
     ], write:"is married … is marrying … contexts … my example for a learner: …"},
     {t:"Draw and test a timeline", how:[
       "Draw a timeline for the present perfect (for example *I’ve lived here for ten years*). Mark now and the time the speaker means.",
       "Test it. Show it to someone and ask: “Does it say the situation is finished?” If they say yes, change the drawing.",
       "Add one example sentence under the drawing, and one warning about what the drawing does not show."
     ], write:"My drawing and its example sentence. The warning: …"}
    ],
    proof:"Six sentences with natural English and notes on differences. A short note on corpus results and one example for a learner. A tested timeline with a sentence and a warning."
   }
  }
  ],
  checkpoint:["e5u7-q03","e5u7-q07","e5u7-q11","e5u7-q15","e5u7-q20","e5u7-q24","e5u7-q29","e5u7-q33","e5u7-q38","e5u7-q41","e5u7-q44","e5u7-q45"],
  cpBank:[
   Q("e5u7-cp01","e5u7-l1",1,"Which statement about English tense is correct in descriptive grammar?",2,[
     ["English has three tenses: past, present and future.","This is the teaching label. Descriptive grammar counts only the forms of the verb, and English has no future form."],
     ["Tense and time are the same thing.","They are different. Tense is a form, and time is when something happens."],
     ["English marks two tenses on the verb: present and past.","Right. These are the two forms, such as *walk(s)* and *walked*."],
     ["English has no way of talking about the future.","It has many ways, but they are not a tense."]]),
   Q("e5u7-cp02","e5u7-l1",2,"Which sentence has a past-tense verb form that does **not** talk about the past?",1,[
     ["She walked home yesterday.","Here the form and the time match."],
     ["I wish I had more time.","Right. *Had* is a past-tense form, and the wish is about now."],
     ["He says he is tired.","These are present-tense forms."],
     ["The train leaves at six.","*Leaves* is present tense."]]),
   Q("e5u7-cp03","e5u7-l2",1,"Which pair shows a difference of aspect?",0,[
     ["*She wrote* and *She was writing*","Right. The first is simple, and the second is progressive."],
     ["*She writes* and *She wrote*","This is a difference of tense."],
     ["*She writes* and *They write*","This is a difference of agreement."],
     ["*She writes* and *She will write*","This is a difference of the form used to talk about the future."]]),
   Q("e5u7-cp04","e5u7-l2",2,"Which sentence uses *have* in a stative sense?",3,[
     ["*We’re having a great time.*","Here *have* means *experience*, an activity in progress."],
     ["*She’s having a bath.*","*Have a bath* is an activity."],
     ["*They’re having lunch.*","*Have lunch* means *eat*, an activity."],
     ["*She has two sisters.*","Right. This is a state of possession or relation, and it takes the simple form."]]),
   Q("e5u7-cp05","e5u7-l2",3,"Hana writes: “I’m wanting a coffee.” What is the best advice?",1,[
     ["It is perfect English, and nothing needs to change.","It is not a typical form. *I want a coffee* is the standard form."],
     ["*Want* is normally stative, so *I want a coffee* is the usual choice. *I’m wanting* is rare and can sound odd.","Right. It is a tendency, and a few special uses of the progressive do exist, but not here."],
     ["The progressive is always wrong with verbs of feeling.","There are real exceptions, such as *I’m loving it* and *I’m hoping you can help*."],
     ["She should use the past tense.","The sentence is about now, so the tense should stay present."]]),
   Q("e5u7-cp06","e5u7-l3",1,"Which sentence is correct?",0,[
     ["*I saw her yesterday.*","Right. *Yesterday* is a finished time, so the simple past is needed."],
     ["*I have seen her yesterday.*","The present perfect does not go with a finished time."],
     ["*I am seeing her yesterday.*","The progressive does not fit a finished time."],
     ["*I see her yesterday.*","The present simple does not fit a finished time."]]),
   Q("e5u7-cp07","e5u7-l3",2,"At three in the afternoon, a speaker says *I’ve had two coffees today*. Why does the present perfect fit?",2,[
     ["Because *today* is only used with the present perfect.","*Today* can also go with the past simple, for example *I had two coffees today*, when the speaker sees the day as over."],
     ["Because the coffees are in the future.","The coffees were drunk before now."],
     ["Because the day is not over, so the time frame includes now.","Right. The present perfect fits a time frame that includes now."],
     ["Because the speaker is American.","British speakers say it too."]]),
   Q("e5u7-cp08","e5u7-l3",3,"An American teacher hears a student say “I already ate.” What is the best response?",3,[
     ["It is wrong. Only *I have already eaten* is correct.","In American English, *I already ate* is common and standard in speech."],
     ["It is wrong, because *already* only goes with the past perfect.","*Already* goes with several forms."],
     ["It is British, and it would be marked wrong in the US.","The pattern is more typical of the US than of the UK."],
     ["It is normal American English. The perfect is also fine, and British speakers tend to prefer it.","Right. These are tendencies and both forms are understood."]]),
   Q("e5u7-cp09","e5u7-l4",1,"Which form is typical for a fixed arrangement, such as a meeting?",1,[
     ["The past simple","This talks about the past."],
     ["The present progressive: *I’m meeting Mei at six.*","Right. It suggests that someone has arranged it."],
     ["The past perfect","This looks back from a past time."],
     ["The perfect progressive","This stresses an activity up to now."]]),
   Q("e5u7-cp10","e5u7-l4",2,"Which sentence correctly uses *as soon as* for a future event?",0,[
     ["*As soon as she arrives, I’ll tell her.*","Right. Clauses of time use the present simple for the future."],
     ["*As soon as she will arrive, I’ll tell her.*","A clause with *as soon as* uses the present simple."],
     ["*As soon as she arrived, I’ll tell her.*","The past tense does not fit a future meaning here."],
     ["*As soon as she is arriving, I’ll tell her.*","This changes the meaning to *in the middle of arriving*."]]),
   Q("e5u7-cp11","e5u7-l5",2,"Japanese 死んでいる (*shinde iru*) is “is dead”. Why is English not “is dying”?",2,[
     ["English cannot use the progressive with *die*.","*Is dying* exists, but it means that the person is in the process of dying."],
     ["Japanese does not have a progressive.","*-te iru* is often a progressive. It has other uses as well."],
     ["With a verb of change, *-te iru* gives the state after the change. *Is dead* names that state.","Right. This is the resulting state use of *-te iru*."],
     ["The two are the same, and only the translation differs.","The meanings are different: one is a state, and the other is a process."]]),
   Q("e5u7-cp12","e5u7-l5",3,"Which of these is a poor habit when you draw a timeline for the present perfect?",1,[
     ["Marking *now* and the time the speaker means","This is a good habit, because it shows the time frame."],
     ["Drawing the present perfect only to the left of *now*, so it looks like a past tense","Right. It hides the link with now."],
     ["Adding a sentence under each drawing","This is a good habit, because it ties the drawing to a real sentence."],
     ["Asking learners to help draw it","This is a good habit, because learners have to think about the time frame as they draw."]])
  ],
  codex:[
   {id:"tense-and-time-english", title:"Tense and time in English (and the “future tense”)", aka:["present and past tense","preterite","future tense","tense vs time"], tags:["grammar","tense","verbs"],
    summary:"In descriptive grammar, English marks two tenses on the verb, present and past. Tense is a form, and time is something else; the future is expressed in other ways.",
    levels:{
     starter:[
      "In everyday talk, “tense” means “when something happens”. In descriptive grammar it means a **form of the verb**. English verbs have a present-tense form (*walk, walks*) and a past-tense form (*walked*). That is all: two tenses.",
      "The form and the time often match. *She walked home* is a past form about the past. But they do not always match. *The train leaves at six tomorrow* has a present form and a future time. *If I knew the answer* has a past form and an unreal situation now. *Could you help me?* has a past form and a polite request now.",
      "English has no verb ending for the future. To talk about the future, it uses *will*, *be going to*, the present progressive (*I’m meeting Mei at six*) and the present simple (*The film starts at nine*), and other forms.",
      "Many textbooks still say “future tense”, usually for *will + verb*. This is a useful label, and teachers will meet it often. It is a label for the way of talking about the future, not a form of the verb.",
      {key:"Tense is the form of the verb: present or past. Time is when something happens. They often match, but not always."}
     ],
     builder:[
      "A descriptive grammar, such as the *Cambridge Grammar of the English Language* by Huddleston and Pullum, treats tense as a grammatical category marked on the verb by inflection. English has two tense forms: the **present tense** (base form, with *-s* in the third person singular) and the **past tense** (also called the **preterite**). Modal verbs have both too: *will* and *would*, *can* and *could*.",
      {table:[["Sentence","Tense form","Time"],["*The train leaves at six tomorrow.*","present","future"],["*Water boils at 100 degrees.*","present","general"],["*So she walks in and says hello.*","present (story-telling)","past"],["*If I knew…* / *I wish I had…*","past","unreal now"],["*Could you open the window?*","past","polite request now"]]},
      "The past tense is best seen as a form of **distance**: distance in time (*she left*), in reality (*if I knew*) or in politeness (*could you*).",
      "There are good reasons not to call *will + base* a future tense. *Will* is an auxiliary with the NICE properties (*won’t, Will she?*). It has present and past forms (*will, would*). And it does not always point to the future: *That’ll be the postman* is a guess about now. The teaching label “future tense” remains common. A kind way to say it is: “Many books call it the future tense. In descriptive grammar it is the present tense of *will*, and *future* names the time.”",
      "Textbooks list 12 “tenses” (past, present and future with simple, progressive, perfect and perfect progressive). In the descriptive count, 2 tenses × perfect or not × progressive or not give 8 verb forms, and *will* combines with each of them."
     ],
     pro:[
      "Analyses of English tense differ in what they count, not in the facts of the data. The binary view (present versus past) rests on morphology: only these two forms are inflectional. Under a looser, semantic view, a “tense” is any grammatical way of locating a situation in time, and then English has a future tense, expressed with *will*. Many teaching grammars and some theoretical accounts take this view. Descriptive and generative grammars generally take the morphological view.",
      "Evidence that *will* is not a pure future marker includes its epistemic uses (*That will be the postman*), its dispositional uses (*Accidents will happen; she will talk for hours*), its volitional uses (*I’ll help; the car won’t start*), and the fact that its past form *would* is used for habitual past (*Every summer we would go to the lake*) and for future in the past (*She said she would call*). Other languages show the range. French and Spanish have inflectional futures (*mangera, comerá*), Japanese has a non-past form with no separate future, and German uses *werden* with an infinitive and also the present for future time.",
      "The present tense is also the standard way of expressing future time in clauses of time and condition (*When she arrives*, *If it rains*) and for scheduled events. Some grammars describe the present as “non-past” for this reason. The past tense’s “remote” meanings (hypothetical, polite) are sometimes treated as a single abstract meaning of distance from the speaker’s present reality.",
      "For teachers: the descriptive facts are reliable, and the label is a choice. The *Essentials of Linguistics* lists only past and present as English tense inflections, and its syntax chapter treats tense as a functional category (T). Both fit the morphological view. If a student asks “Is English a language with a future tense?”, the accurate answer is: “It has no future inflection. It has several ways of referring to the future, and some books call one of them a tense.”"
     ]},
    related:["aspect-progressive-stative-english","future-forms-english"], read:[{book:"eling", where:"The Morphology chapter, section “Inflectional morphology”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"aspect-progressive-stative-english", title:"Aspect, the progressive and stative verbs", aka:["simple and progressive","continuous","stative and dynamic verbs","I’m loving it"], tags:["grammar","aspect","verbs"],
    summary:"Aspect is how a speaker views a situation. The simple form shows it as a whole, and the progressive shows it in progress. State verbs usually take the simple form, with real exceptions.",
    levels:{
     starter:[
      "**Aspect** is how the speaker looks at a situation. Imagine a camera. The simple form is a wide shot: the whole situation, from start to end. The progressive form is a close-up on the middle.",
      "*Aoi wrote a report* sees the whole event. *Aoi was writing a report at eight* looks at the moment, and does not say whether she finished. The progressive form is **be + verb-ing**.",
      "The simple present is used for habits (*She walks to work*), long-term states (*He lives in Lima*), general facts and schedules. For an action happening right now, use the progressive: *She is walking to work.*",
      "Some verb senses describe states, not actions: *know, own, belong, seem, contain*. They usually take the simple form: *I know the answer*, not *I’m knowing*. But there are exceptions, and the reasons are clear. *Have* can mean *eat* (*I’m having lunch*). A feeling can be fresh or growing (*I’m loving it; I’m liking it more*). And the progressive can soften a request (*I’m hoping you can help; I was wondering*).",
      {key:"Stative or dynamic belongs to the sense of the verb in the sentence, not to the word. Use the simple form for a state and the progressive for an activity in progress."}
     ],
     builder:[
      "English has two aspects that combine with tense: the **progressive** (*be* + *-ing*) and the **perfect** (*have* + past participle). The simple form is the form with neither. Aspect is not time. It describes the internal shape of a situation: complete or in progress.",
      {table:[["Contrast","Simple","Progressive"],["Duration","*I live in Lima.* (long-term)","*I’m living in Osaka.* (temporary)"],["Completion","*She crossed the street.* (finished)","*She was crossing the street.* (not stated)"],["Frame","*It rained.*","*It was raining when I left.* (background)"],["Feeling","*He loses his keys.*","*He’s always losing his keys.* (annoyance)"]]},
      "The stative/dynamic distinction is about senses. Typical stative groups include mental states (*know, believe*), emotions and wants (*like, love, need*), possession and being (*own, belong, be*), and appearance (*seem, resemble*). One check is whether the situation goes on in stages or simply holds.",
      "Real exceptions include: a different sense (*I’m having lunch; she’s tasting the soup; he’s being rude*), change over time (*I’m understanding more every week*), emotion in the moment (*I’m loving it*), and politeness (*I was wondering; I’m hoping*). The progressive in politeness uses a general effect of distance and tentativeness.",
      "Teaching tip: do not say “stative verbs never take *-ing*”. Say “usually”, and give the main reasons for exceptions."
     ],
     pro:[
      "Grammarians separate **situation type** (also called *Aktionsart* or lexical aspect: states, activities, accomplishments, achievements) from **viewpoint aspect** (simple versus progressive). Situation types come from the verb together with its arguments: *run* is an activity, *run a mile* is an accomplishment, *know* is a state, *reach the top* is an achievement. The progressive combines most naturally with activities and accomplishments. With achievements it often gives a pre-stage (*She’s reaching the top* means she is close), and with states it forces a reinterpretation (a temporary or changing state, or an activity).",
      "The imperfective paradox is a well-known point. *She was crossing the street* is true even if she was interrupted, so it does not entail *She crossed the street*. But *She was walking* does entail *She walked* (an activity). The difference depends on whether the situation has a built-in endpoint.",
      "Stative predicates are sometimes classified as **individual-level** (lasting properties, as in *be tall*) or **stage-level** (temporary, as in *be available*), a distinction that shows up in the semantics chapter of the *Essentials of Linguistics*. It overlaps with, but does not equal, the stative/dynamic distinction.",
      "Corpus studies show the progressive used with many verbs that textbooks list as stative, especially in spoken and informal registers. This supports a view of stativity as a tendency that depends on sense, register and pragmatic effect, and it explains why rules of the “never use *-ing* with *love*” type break down in real data."
     ]},
    related:["tense-and-time-english","perfect-present-perfect-english"], read:[{book:"eling", where:"The Semantics chapter, section “Individual- vs. stage-level predicates”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"perfect-present-perfect-english", title:"The perfect: present perfect and past simple", aka:["have + past participle","present perfect","past perfect","Did you eat yet?"], tags:["grammar","perfect","verbs"],
    summary:"The perfect links an earlier situation with a later reference time. The present perfect fits a time frame that includes now, and the past simple fits a finished one. US and UK usage differ in a few places.",
    levels:{
     starter:[
      "The **perfect** is formed with **have + past participle**: *I have lost my keys. We have lived here for ten years.* The past participle is the form that follows *have*: *walked, seen, gone*.",
      "The present perfect connects a past situation with now. It is used for a result that is still true (*I’ve lost my keys*), for a situation that is not over (*We’ve lived here since 2019*), for experience up to now (*Have you ever been to Nara?*) and for recent news (*The mayor has resigned*).",
      "The past simple talks about a finished time: *I saw him yesterday. She arrived two days ago.* The present perfect cannot be used with words that name a finished time: *yesterday, last week, in 2018, two days ago*. *I have seen him yesterday* is a common learner error.",
      "The past perfect (*had + participle*) looks back from a past time: *When Mei arrived, the film had started.*",
      "American and British English use the same forms. Americans use the simple past a little more with *already, yet* and *just*: *Did you eat yet? I already ate.* This is standard in American speech.",
      {key:"If the time is finished (yesterday, last year), use the past simple. If the time includes now (today, so far, since 2019), use the present perfect."}
     ],
     builder:[
      "In the descriptive view, the **present perfect** is the present tense of *have* plus the past participle, so it has a present reference time. The perfect gives a view from that time back to an earlier situation. The **past perfect** has a past reference time. Some grammars (including the *Cambridge Grammar*) call the perfect a “secondary tense”, and most teaching grammars call it an aspect. This is a difference in labels.",
      {table:[["Choose…","When the time frame…","Examples"],["Past simple","is finished: *yesterday, last week, in 2018, ago, when*","*I saw her yesterday. When did you arrive?*"],["Present perfect","includes now: *today, this week, so far, since, for, ever, never, recently*","*I’ve seen her this week. I’ve lived here for ten years.*"]]},
      "*Today* can go with either form, depending on whether the speaker thinks of the day as over: *I’ve had two coffees today* (the day continues) but *I had two coffees this morning* (the morning is over).",
      "**Perfect progressive:** *have been + -ing* stresses an activity that continues up to now or has just stopped with a visible result: *I’ve been waiting for an hour. You’re wet. Have you been running?* With state verbs, the simple perfect is used: *I’ve known her since 2015.*",
      "**US and UK:** both use the present perfect for experience and for *for/since* situations. For recent events with *already, yet* and *just*, American speech often uses the simple past (*Did you eat yet? I just got home*) and British speech more often uses the perfect (*Have you eaten yet? I’ve just got home*). Both patterns are heard in both countries. The US participle of *get* is *gotten* (*She’s gotten a new job*), and the British one is *got*."
     ],
     pro:[
      "A classic analysis treats the present perfect as expressing a state that holds at the time of speaking and results from an earlier situation, or a period that extends up to the speaker’s now (the “extended now”). This explains why it is incompatible with adverbs that locate the situation entirely at a past time (*yesterday, two days ago, at six*), and compatible with adverbs of the extended period (*so far, since 2019, for years*), with *ever* and *never*, and with *just* and *already*. It also explains why *When did you…?* takes the past simple: *When* asks for a past time.",
      "The ban on finished-time adverbs is not universal. The present perfect with a definite past-time adverbial (*I have seen him yesterday*) is reported in Indian English, and the German and Dutch perfects are used for past events much more freely than the English one. Within British and American English, the balance between the two forms may also be shifting. Some corpus studies suggest that the simple past has become more common in some contexts where the perfect was usual. Such results depend on the corpus and the register, so cite the data you use.",
      "The Japanese *-ta* form is better described as past or perfective depending on context, and the distinction that English draws between “finished time” and “linked to now” is not marked. A Japanese learner’s *I have seen him yesterday* is therefore a predictable transfer. Meanwhile, *-te iru* with verbs of change expresses a state that follows an event, which resembles the English resultative perfect, but the two are not equivalent: *kekkon shite iru* is English *be married*, not *has married*.",
      "The perfect also appears in non-finite forms and with modals (*may have left, should have called, having finished*), where the same ‘earlier than the reference time’ meaning is combined with modality. These are covered in Unit 8."
     ]},
    related:["tense-and-time-english","future-forms-english"],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"},{t:"Corpus of Contemporary American English", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"future-forms-english", title:"Talking about the future in English", aka:["will vs going to","future tense","future forms","present simple for schedules"], tags:["grammar","future","verbs"],
    summary:"English has no future inflection. It uses will, be going to, the present progressive and the present simple, and each form leans toward a different meaning. These are tendencies, not strict rules.",
    levels:{
     starter:[
      "English has no special ending for the future. It uses several forms, and each one leans toward a different meaning.",
      "**Will**: a prediction (*I think prices will rise*), a decision as you speak, an offer or a promise (*I’ll carry that for you*). **Be going to**: a plan (*We’re going to move in June*) or a prediction from evidence you can see now (*Look at those clouds. It’s going to rain*). **Present progressive**: a fixed arrangement (*I’m meeting Mei at six*). **Present simple**: a schedule (*The film starts at nine*).",
      "In clauses of time and condition, English uses the present simple for the future: *When she arrives, call me. If it rains, we’ll stay home.* Do not say *When she will arrive*.",
      "Do not teach the choices as strict rules. Speakers often use either *will* or *going to*, and the difference is often small.",
      {key:"For future time, choose a form by its usual meaning: will (decision, prediction), going to (plan, evidence), present progressive (arrangement), present simple (schedule)."}
     ],
     builder:[
      "The descriptive view: *will* is a modal auxiliary in the present tense, and *be going to* is a present-tense construction (*am/is/are* plus *going to*). The present progressive and the present simple are present-tense forms that can refer to the future when the context shows it. The future is a **time**, and English expresses it with a range of forms.",
      {table:[["Form","Leans toward","Example"],["*will* (*’ll, won’t*)","offer, decision as you speak, prediction without evidence, willingness","*I’ll have the soup. It’ll be sunny tomorrow.*"],["*be going to* (*gonna*)","plan, or prediction from evidence now","*We’re going to move. It’s going to rain.*"],["present progressive","arrangement, with a time word","*I’m flying to Osaka on Friday.*"],["present simple","schedule or timetable (US: schedule)","*The train leaves at 6:40.*"]]},
      "Other forms include *will be -ing* (*I’ll be flying at this time tomorrow*), *will have + participle* (*By Friday I’ll have finished*), *be about to*, *be to* (formal) and *shall* (offers, common in the UK: *Shall I open the window?*). To refer to the future from a past time, English uses *was going to* and *would*.",
      "The time-clause rule: after *when, if, as soon as, before, after, until*, the verb is present for future time. A polite use of *will* in an *if* clause means *be willing*: *If you’ll wait here…*. Unit 8 covers it.",
      "US and UK: *gonna* and *going to* are very common in American speech. *Shall* is uncommon in everyday American speech, where *Should I…?* and *Do you want me to…?* are more usual for offers, and it is mostly found in formal and legal writing. British speakers use *Shall I…?* and *Shall we…?* more often."
     ],
     pro:[
      "The standard textbook contrast, “*will* for spontaneous decisions and *going to* for prior plans”, describes a real tendency, but it has many counterexamples. Speakers use *will* for plans (*I’ll be there at six*), and *going to* for decisions made as they speak. The distinction that holds more firmly is that *going to* needs a link to the present (intention or evidence), and *will* does not, so *It will rain tomorrow* can be said with no sign, but *Look out! It will fall* sounds odd where *It’s going to fall* does not.",
      "The modal status of *will* is supported by its NICE behavior, by its morphological fixity (no *-s*, no non-finite forms), and by its meanings, which include dispositional and epistemic uses (*She’ll talk for hours; That will be Tomás*). Its past form *would* is used for future in the past, for habitual past and for hypotheticals, which is another reason not to call it a tense. The general view in descriptive grammar is that *will* has a **modal** meaning of prediction or willingness that is often used to refer to the future, and that its use for future time is its most common one.",
      "The present progressive for the future is mostly limited to situations that are planned or arranged, usually with a person responsible, so *It’s raining tomorrow* sounds odd to many speakers, but *The team is playing on Saturday* is natural. The present simple for the future is restricted to situations seen as fixed by a calendar or an institution (*The semester starts in April*), or to clauses of time and condition. Both are present-tense forms with a future time.",
      "The aspectual and modal forms combine: *will be -ing* often describes a situation seen as already arranged (*I’ll be seeing her tomorrow*, a softer, less intentional sentence than *I’ll see her tomorrow*), and *will have -ed* gives the future perfect, which is used for a prediction about an earlier situation (*They’ll have arrived by now*, a guess about now)."
     ]},
    related:["tense-and-time-english","perfect-present-perfect-english"], read:[{book:"eling", where:"The Syntax chapter, section “Functional categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"tense-aspect-japanese-english", title:"Japanese -ta and -te iru compared with English tense and aspect", aka:["-ta and -te iru","kekkon shite iru","Japanese learners and the perfect"], tags:["grammar","Japanese","tense","aspect"],
    summary:"Japanese -ta covers past, completion and experience, and -te iru covers progress, resulting state and repetition. Neither maps one to one onto an English tense, which explains common learner errors.",
    levels:{
     starter:[
      "Japanese has two forms that learners often connect with English tenses: *-ta* and *-te iru*. Neither one matches an English tense directly.",
      "*-ta* is used for a past event (*kinō tabeta*, “I ate yesterday”), for something finished with a link to now (*mō tabeta*, “I’ve already eaten”) and for experience (*Nara ni itta koto ga aru*, “I’ve been to Nara”). English uses the past simple for the first one and the present perfect for the others.",
      "*-te iru* is used for an action in progress (*ima tabete iru*, “I’m eating now”), for a state that follows a change (*kekkon shite iru*, “is married”) and for something repeated (*mainichi hashitte iru*, “runs every day”). English uses the progressive, *be* with an adjective, or the simple present.",
      "This explains common errors: *I have seen him yesterday* (from *-ta*), *I am knowing* (from *shitte iru*), and *My sister is marrying* (from *kekkon shite iru*). They are reasonable mistakes, and not signs of carelessness.",
      {key:"Do not tell a learner that -ta is the past tense and -te iru is the progressive. Say what the Japanese form means in the sentence, and then give the English form."}
     ],
     builder:[
      "Grammars of Japanese usually describe the plain form as non-past and *-ta* as the past or perfective form. In many sentences *-ta* matches the English past simple. But it also covers completion with a link to the present, which English expresses with the present perfect (or the American simple past with *already*).",
      {table:[["Japanese","Meaning","English"],["*kinō tabeta* (昨日食べた)","past event","*I ate yesterday.*"],["*mō tabeta* (もう食べた)","completed, relevant now","*I’ve already eaten.* / *I already ate.*"],["*Nara ni itta koto ga aru* (奈良に行ったことがある)","experience","*I’ve been to Nara.*"],["*ima tabete iru* (今食べている)","in progress","*I’m eating now.*"],["*kekkon shite iru* (結婚している)","resulting state","*I’m married.*"],["*shitte iru* (知っている)","state","*I know.*"]]},
      "The meaning of *-te iru* depends on the verb. Activity verbs (*taberu, hashiru*) give a progressive meaning. Verbs of change (*kekkon suru, shinu, aku*) give the state after the change (*shinde iru* “is dead”, *mado ga aite iru* “the window is open”). Movement verbs (*kuru, iku*) give the state of having arrived or left (*kite iru* “has come and is here”).",
      "For teachers: ask what the Japanese form means in the sentence before choosing an English form. Show real pairs. Do not teach “*-ta* equals past tense” or “*-te iru* equals the progressive”.",
      "In class, a short test helps: ask whether the learner means a finished time (past simple), up to now (present perfect), in progress (progressive) or a state (simple present)."
     ],
     pro:[
      "A classic description of Japanese aspect, by Kindaichi Haruhiko (1950), sorts verbs into four classes by how they behave with *-te iru*. **State verbs** (状態動詞 *jōtai dōshi*: *aru, iru, dekiru*) do not normally take *-te iru*. **Continuous verbs** (継続動詞 *keizoku dōshi*: *taberu, hashiru, yomu*) give a progressive. **Instantaneous verbs** (瞬間動詞 *shunkan dōshi*: *shinu, aku, kekkon suru*) give a resultant state. **Type 4 verbs** (第四種の動詞 *daiyonshu no dōshi*: *sobieru* “tower”, *niru* “resemble”) describe a state and appear almost only with *-te iru* (*sobiete iru, nite iru*). Later work has refined these classes, but they are still widely used in teaching. The resultative reading is not available in the same way in English, so translations need a state predicate: *is married, is dead, is open*.",
      "The *-ta* form is analyzed differently by different authors: as a past tense, as a perfective aspect marker, or as a perfect-like form that combines both. Evidence for a perfect-like use includes sentences like *A, atta!* (“Oh, here it is!”) and *Basu ga kita* (“The bus has come”), where the situation is taken as completed and relevant to now. Evidence for a plain past use includes sentences with a time adverb (*kinō, kyonen*). Because the same form does both jobs, learners do not need to choose between a finished time and a link with now.",
      "Such differences predict specific transfer patterns. Learners tend to overuse the present perfect with finished-time adverbs (*I have visited Nara last year*), to use the progressive with state verbs (*I’m knowing*), to use the progressive instead of a resulting state (*She is marrying*), and to use the simple present for situations that continue from the past (*I live here since 2020*). Research on Japanese learners reports these patterns, but how often each appears depends on the learner’s level and on the task, so a teacher should look at the learner’s own sentences.",
      "The Japanese system does mark things that English does not. For example, English has no verb form for the finding sense of *A, atta!*. It uses an interjection and the present tense (*Oh, here it is!*). Nor is the English future matched by a Japanese form: both languages express it with other means (*-ru* with a time word in Japanese; *will*, *going to* and the present forms in English)."
     ]},
    related:["perfect-present-perfect-english","aspect-progressive-stative-english"],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-tense", term:"Tense", def:"A form of the verb. English has two: the present (*walk, walks*) and the past (*walked*). Tense is a form, and time is when something happens.", codex:"tense-and-time-english"},
   {id:"hew-past-tense", term:"Past tense (preterite)", def:"The verb form that has a past ending or a changed form, such as *walked, sang, was, could*. It is used for the past, and also for unreal and polite meanings.", codex:"tense-and-time-english"},
   {id:"hew-future-time", term:"Future time", def:"Time after now. English talks about it with *will*, *be going to*, the present progressive, the present simple and other forms. Many books call *will + verb* the “future tense”.", codex:"future-forms-english"},
   {id:"hew-aspect", term:"Aspect", def:"The way a speaker views the time inside a situation: as a whole (simple), in progress (progressive) or in relation to a later time (perfect).", codex:"aspect-progressive-stative-english"},
   {id:"hew-progressive", term:"Progressive aspect", def:"The form *be* + *-ing*, such as *is walking* or *was writing*. It shows a situation in progress, temporary or in the background.", codex:"aspect-progressive-stative-english"},
   {id:"hew-perfect", term:"Perfect", def:"The form *have* + past participle, such as *has walked* or *had left*. It links an earlier situation with a later time.", codex:"perfect-present-perfect-english"},
   {id:"hew-past-participle", term:"Past participle", def:"The verb form that follows *have* in the perfect and *be* in the passive, such as *walked, seen, gone, been*.", codex:"perfect-present-perfect-english"},
   {id:"hew-stative-verb", term:"Stative verb sense", def:"A verb sense that describes a state, such as *know, own, belong, seem*. It usually takes the simple form, and not the progressive.", codex:"aspect-progressive-stative-english"},
   {id:"hew-dynamic-verb", term:"Dynamic verb sense", def:"A verb sense that describes an activity or an event, such as *eat, run, have lunch*. It can take the progressive.", codex:"aspect-progressive-stative-english"},
   {id:"hew-reference-time", term:"Reference time", def:"The time that a sentence is about, which may differ from the time of speaking or of the situation. In *When I arrived, the film had started*, it is the time of arriving.", codex:"perfect-present-perfect-english"},
   {id:"hew-resultant-state", term:"Resultant state", def:"The state that follows a change. Japanese *-te iru* with a verb of change gives it: *kekkon shite iru* is “is married”.", codex:"tense-aspect-japanese-english"},
   {id:"hew-time-clause", term:"Clause of time or condition", def:"A clause that begins with *when, if, as soon as, before, after* or *until*. For future time it uses the present simple: *When she arrives*.", codex:"future-forms-english"}
  ],
  bank:[
   /* ---- Lesson 1: time is not tense ---- */
   Q("e5u7-q01","e5u7-l1",1,"In descriptive grammar, what is tense?",1,[
     ["The time when a situation happens","This is time, not tense. The two are different things."],
     ["A form of the verb, such as *walks* or *walked*","Right. Tense is a form marked on the verb."],
     ["A word that shows the future","English has no single word or ending for this, and tense is not defined by time."],
     ["The way a speaker views a situation","This describes aspect."]]),
   Q("e5u7-q02","e5u7-l1",1,"How many tenses does English mark on the verb, in the descriptive view?",0,[
     ["Two: present and past","Right. *Walk(s)* and *walked*."],
     ["Three: past, present and future","This is the teaching view. English has no future form."],
     ["Four: simple, progressive, perfect and perfect progressive","These are combinations of tense and aspect."],
     ["Twelve","This is the number in many textbooks. It counts forms of tense and aspect together with *will*."]]),
   Q("e5u7-q03","e5u7-l1",2,"In *The film starts at nine tonight*, which statement is correct?",2,[
     ["*Starts* is the future tense.","English has no future form for the verb."],
     ["*Starts* is the past tense.","*Starts* has the present-tense *-s*."],
     ["*Starts* is a present-tense form, and the sentence talks about the future.","Right. The form is present, and *tonight* gives the time."],
     ["The sentence has no tense.","Every finite verb in English has a tense."]]),
   Q("e5u7-q04","e5u7-l1",2,"Which fact is **not** a reason for saying that *will* is not a future-tense form?",3,[
     ["It has no *-s* form, and it behaves like *can* and *must*.","This is a reason. It shows that it is an auxiliary verb."],
     ["It has a past form, *would*.","This is a reason. A future tense would not have a separate past form."],
     ["It can be used for guesses about now, such as *That will be the postman*.","This is a reason. It shows that *will* can be about something other than the future."],
     ["It is not used in English.","This is false. *Will* is very common, and the debate is about its label."]]),
   Q("e5u7-q05","e5u7-l1",2,"What does the past tense do in *If I knew the answer, I would tell you*?",1,[
     ["It talks about a time before now.","The sentence is about a situation now."],
     ["It shows that the situation is not real. It is distance from reality.","Right. This is the unreal use of the past tense."],
     ["It shows that the speaker is very polite.","Politeness is another use of the past tense, but not this one."],
     ["It shows the future.","The past form does not show the future."]]),
   Q("e5u7-q06","e5u7-l1",2,"Which sentence has a present-tense form that talks about the past?",2,[
     ["She walked home.","This is a past form about the past."],
     ["The train leaves at six.","This is a present form about the future or a schedule."],
     ["So she walks in and says hello, and then I say…","Right. In telling a story, the present can be used for past events."],
     ["Water boils at 100 degrees.","This is a general fact."]]),
   Q("e5u7-q07","e5u7-l1",3,"A student says, “My book calls *will + verb* the future tense. You said English has no future tense. Who is right?” What is the best reply?",3,[
     ["The book is wrong, and you should ignore it.","The label is a common teaching term, and it is useful."],
     ["You are right, and the book is wrong, because grammar is always settled.","Different books use different labels for the same facts."],
     ["Both can be right, because *will* is a present-tense verb in descriptive grammar.","This is true, but it leaves out the main point, which is that the two views use “tense” in different ways."],
     ["Both describe the same facts with different words. The book uses “tense” for any way of showing time, and descriptive grammar uses it for the verb form only.","Right. The label is useful for learning, and the descriptive view is more exact."]]),
   Q("e5u7-q08","e5u7-l1",2,"How many verb forms do you get when you combine 2 tenses with the perfect (yes or no) and the progressive (yes or no)?",2,[
     ["4","This counts only the aspects."],
     ["6","This leaves out some combinations."],
     ["8","Right. 2 × 2 × 2 = 8, for example *has been walking*."],
     ["12","The number 12 comes from the textbook list with a future row."]]),
   Q("e5u7-q09","e5u7-l1",3,"Which statement about Japanese and the future is accurate?",1,[
     ["Japanese has a future tense with its own ending.","Grammars usually describe the plain form as non-past."],
     ["Japanese uses the plain form (*taberu*) for “eat” and “will eat”, and context decides.","Right. It also has no separate future form, so the idea is not unusual."],
     ["Japanese cannot talk about the future.","It talks about the future in many ways."],
     ["Japanese uses the *-ta* form for the future.","*-ta* is used for the past and for completion."]]),
   /* ---- Lesson 2: simple and progressive ---- */
   Q("e5u7-q10","e5u7-l2",1,"What is aspect?",2,[
     ["The time when a situation happens","This is time."],
     ["The ending on a verb that shows past or present","This is tense."],
     ["How the speaker views a situation, for example as a whole or in progress","Right. The simple form and the progressive form give two views."],
     ["The word *very* before an adjective","This describes a degree word."]]),
   Q("e5u7-q11","e5u7-l2",1,"What is the form of the progressive?",0,[
     ["*be* + verb-*ing*","Right. For example *is walking, was writing*."],
     ["*have* + past participle","This is the perfect."],
     ["*will* + base form","This is a common way of talking about the future."],
     ["the base form of the verb","This is the simple form."]]),
   Q("e5u7-q12","e5u7-l2",2,"Which sentence most clearly shows a **temporary** situation?",1,[
     ["*Tomás lives in Lima.*","This sounds long-term."],
     ["*Tomás is living in Osaka this year.*","Right. The progressive and *this year* show a temporary situation."],
     ["*Tomás lived in Lima.*","This shows a finished situation."],
     ["*Tomás will live in Osaka.*","This is about the future."]]),
   Q("e5u7-q13","e5u7-l2",2,"Why is *I’m knowing the answer* not standard English?",3,[
     ["Because *know* is not a verb.","*Know* is a common verb."],
     ["Because the progressive is only for the past.","It is also used in the present."],
     ["Because *answer* is a mass noun.","*Answer* is a count noun, so this is not the reason."],
     ["Because *know* here describes a state, and a state normally takes the simple form.","Right. The standard sentence is *I know the answer.*"]]),
   Q("e5u7-q14","e5u7-l2",2,"In which sentence is *have* a dynamic (activity) sense?",2,[
     ["*She has a sister.*","A relation: a state."],
     ["*He has a cold.*","An illness: a state."],
     ["*They’re having lunch.*","Right. *Have lunch* means *eat*, an activity, so the progressive is natural."],
     ["*We have a car.*","Possession: a state."]]),
   Q("e5u7-q15","e5u7-l2",3,"Mei writes to a colleague: “I’m hoping you can send the file today.” What does the progressive do here?",1,[
     ["It shows that hoping takes a long time.","The effect is not about length."],
     ["It makes the request softer and less direct.","Right. This is the politeness use of the progressive, like *I was wondering*."],
     ["It makes the sentence about the past.","*Am* is present, so it is not about the past."],
     ["It makes the sentence wrong, because *hope* is stative.","The sentence is natural. The progressive here softens a request."]]),
   Q("e5u7-q16","e5u7-l2",2,"What does *She was crossing the street* tell us?",0,[
     ["She was in the middle of crossing. It does not say that she reached the other side.","Right. The progressive looks inside the situation and does not say how it ended."],
     ["She reached the other side.","That would be *She crossed the street.*"],
     ["She never crossed the street.","The sentence does not say this."],
     ["She crossed the street every day.","That would be a habit, for example *She crossed the street every day.*"]]),
   Q("e5u7-q17","e5u7-l2",3,"A student says: “The simple form is for short events and the progressive is for long ones.” What is the best reply?",2,[
     ["That is exactly right.","Length is not what decides the form."],
     ["That is wrong, and the opposite is true.","The opposite is not true either."],
     ["Not quite. *She lived here for ten years* is simple and long. *The phone is ringing* is progressive and short. The view decides the form.","Right. Simple shows a whole, and progressive shows a view from inside."],
     ["Aspect has no meaning.","Aspect has meaning, and it is a choice of view."]]),
   Q("e5u7-q18","e5u7-l2",3,"A learner writes *He is being kind today*. A teacher marks it wrong because *be* is stative. What is the best comment?",1,[
     ["The teacher is right. *Be* never takes the progressive.","It does, with a dynamic sense."],
     ["The sentence is correct. *Be* here means *behave*, a dynamic sense that can take the progressive.","Right. *He is being kind* is about behavior today, not about character."],
     ["The sentence is wrong because *kind* is a noun.","*Kind* is an adjective here."],
     ["The sentence needs *has been*.","The present progressive is the right form."]]),
   /* ---- Lesson 3: the perfect ---- */
   Q("e5u7-q19","e5u7-l3",1,"What is the form of the present perfect?",1,[
     ["*be* + verb-*ing*","This is the progressive."],
     ["*have/has* + past participle","Right. For example *has walked, have seen*."],
     ["*had* + past participle","This is the past perfect."],
     ["*will have* + verb","This is a future perfect."]]),
   Q("e5u7-q20","e5u7-l3",2,"Which time expression goes with the present perfect?",3,[
     ["yesterday","*Yesterday* names a finished time."],
     ["two days ago","*Ago* names a finished time."],
     ["in 2018","A finished time."],
     ["since 2018","Right. *Since* gives a starting point, and the time frame includes now."]]),
   Q("e5u7-q21","e5u7-l3",2,"Which sentence is **not** standard English?",2,[
     ["*I’ve lived here for ten years.*","Standard. The situation is not over."],
     ["*I saw her last week.*","Standard. *Last week* is a finished time."],
     ["*I’ve seen her last week.*","Right. The present perfect does not go with a finished time."],
     ["*Have you ever been to Nara?*","Standard. *Ever* asks about your life up to now."]]),
   Q("e5u7-q22","e5u7-l3",2,"In *When Mei arrived, the film had started*, which happened first?",0,[
     ["The film started.","Right. The past perfect shows that it came before the arrival."],
     ["Mei arrived.","The simple past *arrived* is the later point."],
     ["They happened at the same time.","The past perfect shows an earlier event."],
     ["We cannot tell.","The past perfect tells us the order."]]),
   Q("e5u7-q23","e5u7-l3",2,"Which sentence uses *for* and *since* correctly?",1,[
     ["*I’ve lived here since ten years.*","*Since* needs a starting point, and *ten years* is a length."],
     ["*I’ve lived here for ten years, and I’ve known Priya since 2019.*","Right. *For* goes with a length and *since* with a starting point."],
     ["*I’ve lived here for 2019.*","*For* needs a length."],
     ["*I live here for ten years.*","A situation that continues up to now needs the perfect."]]),
   Q("e5u7-q24","e5u7-l3",3,"At a party in the US, a friend asks Mei, “Did you eat yet?” What is the best description?",2,[
     ["It is a mistake, and the friend should say *Have you eaten yet?*","Both are standard in American speech."],
     ["It is typical British English.","British speakers more often say *Have you eaten yet?*"],
     ["It is normal American English. The friend could also say *Have you eaten yet?*","Right. The simple past with *yet* is common in the US."],
     ["It asks about a long time ago.","*Yet* makes it a question about the recent past or now."]]),
   Q("e5u7-q25","e5u7-l3",3,"Why do Japanese learners often say *I have seen him yesterday*?",0,[
     ["Japanese *-ta* covers both a finished past event and a link to now, so the learner has not had to choose between two forms.","Right. English requires a choice that Japanese does not."],
     ["They do not know the past participle.","They often know it well. The problem is the choice of form."],
     ["Japanese has no past tense.","Japanese has a past form, *-ta*."],
     ["They are careless.","The error follows a pattern, and it is reasonable."]]),
   Q("e5u7-q26","e5u7-l3",2,"Why do we say *I’ve had two coffees today* but *I had two coffees this morning*?",1,[
     ["*Today* is only used in the US.","Both are used everywhere."],
     ["The day is not over, so the time frame includes now. The morning is finished.","Right. The present perfect fits a time frame that includes now."],
     ["The first is about the future.","Neither sentence is about the future."],
     ["There is no difference.","There is a difference of time frame."]]),
   Q("e5u7-q27","e5u7-l3",3,"A student says: “American English has no present perfect.” What is the best response?",3,[
     ["That is correct.","Americans use the present perfect often."],
     ["That is correct, but only in speech.","The present perfect is used in speech and in writing."],
     ["That is wrong, because Americans never use the simple past.","This is not true either."],
     ["It is not true. American English uses the same forms, but it uses the simple past a little more with *already, yet* and *just*, especially in speech.","Right. The difference is a tendency, and both patterns are standard."]]),
   /* ---- Lesson 4: the future ---- */
   Q("e5u7-q28","e5u7-l4",1,"Which is **not** a common way to talk about the future in English?",3,[
     ["*will* + base form","This is common."],
     ["*be going to*","This is common."],
     ["the present progressive with a time word","This is common."],
     ["the past perfect with *tomorrow*","Right. The past perfect looks back from a past time."]]),
   Q("e5u7-q29","e5u7-l4",2,"Why is *The film starts at nine tonight* natural for a future event?",0,[
     ["Because the present simple is used for schedules and timetables.","Right. A calendar or an institution fixes the time."],
     ["Because *starts* is the future tense.","It is a present-tense form."],
     ["Because *tonight* changes the verb form.","*Tonight* shows the time. It does not change the form."],
     ["Because the speaker is unsure.","The simple present for a schedule sounds certain."]]),
   Q("e5u7-q30","e5u7-l4",2,"Which sentence is standard English?",1,[
     ["*When she will arrive, call me.*","A clause of time uses the present simple."],
     ["*When she arrives, call me.*","Right. After *when*, the present simple gives future meaning."],
     ["*When she arrived, call me.*","The past tense does not give a future meaning."],
     ["*When she is arriving, call me.*","This would mean that she is in the process of arriving."]]),
   Q("e5u7-q31","e5u7-l4",2,"What does *I’m meeting Mei at six* most often suggest?",2,[
     ["A guess without evidence","This would more likely use *will*."],
     ["A habit","The sentence is about one event."],
     ["A fixed arrangement","Right. The present progressive for the future suggests an arrangement."],
     ["A past event","*Am meeting* is a present form."]]),
   Q("e5u7-q32","e5u7-l4",3,"A speaker looks at dark clouds and says, “It’s going to rain.” Why is *going to* a natural choice?",1,[
     ["Because *will* can never be used for the weather.","*It will rain* is also natural."],
     ["Because the prediction is based on evidence the speaker can see now.","Right. *Going to* links the future to the present."],
     ["Because the speaker has made a plan.","Rain is not a plan."],
     ["Because *going to* is more polite.","Politeness is not the point."]]),
   Q("e5u7-q33","e5u7-l4",3,"In a restaurant a customer says, “I’ll have the soup, please.” Which statement fits best?",0,[
     ["*Will* is typical for a decision as you speak and for an offer or request.","Right. The customer decides at that moment."],
     ["*Will* is wrong, because the customer should say *I’m going to have the soup*.","*I’ll have* is the usual way to order."],
     ["*I’ll* is a past form.","*’ll* is the short form of *will*, a present-tense form."],
     ["The sentence is about the past.","It is about a choice that is being made now."]]),
   Q("e5u7-q34","e5u7-l4",2,"Which sentence uses *will* for a guess about now?",3,[
     ["*It will rain tomorrow.*","This is a prediction about the future."],
     ["*I’ll call you tonight.*","This is a promise about the future."],
     ["*I’ll carry that.*","This is an offer."],
     ["*That’ll be the postman at the door.*","Right. It is a guess about the present."]]),
   Q("e5u7-q35","e5u7-l4",2,"What does *I was going to call you, but I forgot* mean?",2,[
     ["The speaker called.","The speaker did not call."],
     ["The speaker will call later.","The sentence is about a plan in the past."],
     ["The speaker planned to call, but did not.","Right. *Was going to* shows a plan that was not carried out."],
     ["The speaker is calling now.","The call is not in progress."]]),
   Q("e5u7-q36","e5u7-l4",3,"A teacher says: “Always use *will* for decisions and *going to* for plans, and never swap them.” What is the best comment?",1,[
     ["It is a perfect rule.","Real speakers swap the two often."],
     ["It describes a tendency, but speakers use both forms in many places, so it is better to say “usually”.","Right. *I’ll be there at six* works for a plan."],
     ["It is wrong in all cases.","In many cases the tendency holds."],
     ["It is true only for British English.","The tendency is found in both varieties."]]),
   /* ---- Lesson 5: explaining ---- */
   Q("e5u7-q37","e5u7-l5",1,"What does *ima tabete iru* (今食べている) mean?",0,[
     ["“I am eating now.” The action is in progress.","Right. *-te iru* with an activity verb is progressive."],
     ["“I ate yesterday.”","That is *kinō tabeta*."],
     ["“I have eaten.” (a state)","The action is in progress here."],
     ["“I will eat.”","There is no future meaning."]]),
   Q("e5u7-q38","e5u7-l5",2,"What is the natural English for 結婚している (*kekkon shite iru*)?",2,[
     ["*is marrying*","This means that the wedding is happening now."],
     ["*has marrying*","This is not a form of English."],
     ["*is married*","Right. *-te iru* with a verb of change gives a state."],
     ["*marries*","This is a habit, or a statement about a future wedding."]]),
   Q("e5u7-q39","e5u7-l5",2,"Why is Japanese *-ta* not the same as the English past tense?",1,[
     ["Because *-ta* is only for the future.","*-ta* is not a future form."],
     ["Because *-ta* is also used for completion with a link to now and for experience, where English uses the present perfect.","Right. It covers several English forms."],
     ["Because Japanese has no past.","Japanese has a past form."],
     ["Because *-ta* is only used in writing.","It is common in speech."]]),
   Q("e5u7-q40","e5u7-l5",2,"Which timeline habit is most likely to teach a false rule?",3,[
     ["Marking *now* and the time the speaker is talking about","This is a good habit. It shows the time frame, so it does not teach a false rule."],
     ["Adding an example sentence under the drawing","This is a good habit. A real sentence ties the picture to the form."],
     ["Asking learners to help draw it","This is a good habit. Learners notice the time frame as they draw."],
     ["Drawing the present perfect only to the left of *now*, so that it looks like a past tense","Right. It hides the link with now."]]),
   Q("e5u7-q41","e5u7-l5",3,"A learner writes, “I live in Saitama since 2020.” What is the best explanation?",1,[
     ["*Since* is wrong. It should be *for*.","*Since 2020* gives a starting point, so *since* is right."],
     ["The situation began in the past and is still true, so English needs the present perfect: *I’ve lived in Saitama since 2020.*","Right. The Japanese equivalent uses the same form with or without a starting point."],
     ["The learner should use the past tense: *I lived in Saitama since 2020.*","The past tense ends the situation."],
     ["The sentence is correct.","It is not standard."]]),
   Q("e5u7-q42","e5u7-l5",3,"A learner writes, “I am knowing Mr. Tanaka.” Which explanation is best and kindest?",2,[
     ["“That is wrong. You must memorize that *know* has no *-ing* form.”","*Know* has an *-ing* form (*knowing*). The problem is the use of the progressive."],
     ["“Japanese has no progressive, so you cannot use it.”","Japanese has *-te iru*, which is related to the progressive."],
     ["“In Japanese, *shitte iru* uses *-te iru*. In English, *know* is already a state, so we use *I know*.”","Right. It explains the error and says what the Japanese form does."],
     ["“Just copy the correct sentence.”","This does not explain anything."]]),
   Q("e5u7-q43","e5u7-l5",2,"Which English form is closest to Japanese *Nara ni itta koto ga aru* (奈良に行ったことがある)?",1,[
     ["*I went to Nara yesterday.*","This names a finished time."],
     ["*I’ve been to Nara.*","Right. It is experience up to now, a use of the present perfect."],
     ["*I’m going to Nara.*","This is about the future."],
     ["*I go to Nara.*","This is a habit."]]),
   Q("e5u7-q44","e5u7-l5",3,"A learner’s paragraph has five errors: *I have seen him yesterday; I am knowing him; I live here since 2020; If it will rain…;* and a missing article. You have five minutes. What is the best plan?",2,[
     ["Correct all five at once, with a long grammar talk.","This overloads the learner."],
     ["Say nothing, because errors do not matter.","Some errors block understanding or happen often, and the learner needs help."],
     ["Pick the one or two errors that happen most often or block understanding, explain each in two plain sentences, and leave the rest for later.","Right. Short explanations with an example are easier to remember."],
     ["Give a list of the 12 tenses.","The list does not match the learner’s errors."]]),
   Q("e5u7-q45","e5u7-l5",3,"A learner asks, “Why can’t I say *I have seen him yesterday*?” Which answer is the best short explanation?",0,[
     ["“The present perfect links a past situation to now. *Yesterday* is a finished time, so use *I saw him yesterday*.”","Right. It is short, uses one term, and gives a corrected sentence."],
     ["“Because that is the rule.”","It gives no reason."],
     ["“Because the present perfect is the tense of the future.”","This is not true."],
     ["“Because American English forbids it.”","The rule applies to both varieties."]])
  ]
});
})();
