(function(){
/* How English Works · Unit 8 (e5u8) · Modality, conditionals and voice */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u8", track:"e5", n:8, title:"Modality, conditionals and voice", icon:"🔀",
  blurb:"How English talks about what might be, must be and could have been, and who does what in a sentence. You learn what modal verbs mean and how strong each one is. You describe conditionals by meaning, not by number. Then you see how the passive and the get-passive work, and how leaving out the doer changes who seems responsible.",
  goals:[
    "Tell epistemic, deontic and dynamic meanings of a modal verb apart, in plain words, and use paraphrase tests to decide between them",
    "Compare must, have to, should, had better and might for strength and politeness, and say why had better can sound like a warning",
    "Describe conditionals by meaning (real or unreal, and the time they refer to), use first, second and third as a teaching shortcut, and handle mixed conditionals, if + will, and were or was",
    "Form the passive and the get-passive in any tense, say which verbs allow a passive, and decide when the passive is the better choice",
    "Explain how agentless passives and similar structures remove the doer, and rewrite a sentence so that the doer is named"
  ],
  read:[
    {book:"eling", where:"The Semantics chapter (sections “Linguistic meaning” and “Events and thematic roles”), the Pragmatics chapter (sections “Conversational implicatures” and “Illocutionary meaning”) and the Syntax chapter (section “Changing argument structure: Causatives and passives”)", note:"Read each section after the matching lesson. The book is written for linguistics students and has no section on modal verbs or conditionals, so use this unit’s explanations first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u8-l1", title:"The modal verbs and what they mean", minutes:55,
   hook:{q:"Mei looks at a tired friend and says: *You must be tired.* What does *must* mean here?", options:["You are required to be tired","I conclude that you are tired","You are allowed to be tired","You are able to be tired"], answer:1, reveal:"**I conclude that you are tired.** Here *must* is a guess based on evidence, not a rule. In *You must be at work by nine*, the same word is a rule. One modal verb can do both jobs, and this lesson gives you tests to tell them apart."},
   goals:[
     "List the core modal verbs and say how they differ in form from ordinary verbs",
     "Explain epistemic, deontic and dynamic meanings in plain words",
     "Use paraphrase tests and grammar clues to decide which meaning a sentence has",
     "Handle the tricky negatives: can’t, mustn’t, don’t have to"
   ],
   learn:[
    {h:"What a modal verb is", body:[
      {lead:"Modal verbs are small helper words that add a speaker’s view to a sentence: how sure they are, what is allowed, what is possible."},
      "The core modals are **can, could, may, might, will, would, shall, should** and **must**. Grammars also count *ought to* and, in some uses, *need* and *dare*. A [[hew-modal-verb|modal verb]] is a kind of auxiliary verb (Lesson 3 of Unit 4). The word [[hew-modality|modality]] names the meanings they express.",
      "Modals behave differently from ordinary verbs. This is a form test, like the tests in Unit 4.",
      {table:[["Feature","Modal: *can*","Ordinary verb: *walk*"],["Third person","*She can swim.* No *-s*","*She walks.* Takes *-s*"],["Next verb","Base form: *can swim*","Takes *to*: *wants to swim*"],["Question","*Can she swim?* Moves first","*Does she walk?* Needs *do*"],["Negative","*She can’t swim.* No *do*","*She doesn’t walk.* Needs *do*"],["Other forms","No *to can*, no *canning*, no *has can*","*to walk, walking, has walked*"]]},
      "Because modals lack other forms, English uses substitutes when it needs them. For *can* in the future we say *will be able to*. For *must* in the past we say *had to*. These substitutes, such as *be able to*, *have to* and *be going to*, are called [[hew-semi-modal|semi-modals]]. They act like modals in meaning but like ordinary verbs in form.",
      {tip:"The pairs *can/could*, *may/might*, *will/would* and *shall/should* were once present and past. Today they often are not. *She might come tomorrow* is about the future, not the past. Do not teach *might* as “the past of *may*”."}
    ]},
    {h:"Three kinds of meaning", body:[
      "Modal meanings fall into three families. The names come from Greek and Latin. The ideas are simple.",
      {table:[["Kind","Plain words","Examples"],["[[hew-epistemic|Epistemic]]","How sure the speaker is: a guess, a conclusion, a chance","*It may rain. She must be home. That can’t be right.*"],["[[hew-deontic|Deontic]]","Rules and permission: what someone must or may do","*You must wear a helmet. Students may leave early.*"],["[[hew-dynamic|Dynamic]]","What the subject is able or willing to do","*Mei can speak four languages. I couldn’t open the jar.*"]]},
      "**Epistemic** modals are about knowledge. The speaker says how likely something is, based on evidence. **Deontic** modals are about duty and freedom. Someone, such as a rule, a boss or the speaker, decides what is required or allowed. **Dynamic** modals are about the subject’s own ability or willingness, and nobody gives permission.",
      "Each family has a strong and a weak side. *Must* is strong and *may* is weak, in both the epistemic and the deontic family.",
      {table:[["","Strong (necessity)","Weak (possibility)"],["Epistemic","*She must be home.* I am nearly sure.","*She may be home.* Perhaps."],["Deontic","*You must sign.* It is required.","*You may sign.* It is allowed."]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">Three questions behind a modal</text><rect class="d-lup" x="14" y="34" width="312" height="82" rx="10" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Epistemic: how sure am I?</text><text class="s" x="170" y="80" text-anchor="middle">She must be home. (a conclusion)</text><text class="s" x="170" y="100" text-anchor="middle">It may rain. (a chance)</text><rect class="d-gold" x="14" y="126" width="312" height="82" rx="10" stroke-width="2"/><text x="170" y="150" text-anchor="middle">Deontic: what is required or allowed?</text><text class="s" x="170" y="172" text-anchor="middle">You must wear a helmet. (a rule)</text><text class="s" x="170" y="192" text-anchor="middle">You may leave now. (permission)</text><rect class="d-sage" x="14" y="218" width="312" height="82" rx="10" stroke-width="2"/><text x="170" y="242" text-anchor="middle">Dynamic: what can the subject do?</text><text class="s" x="170" y="264" text-anchor="middle">Mei can speak four languages.</text><text class="s" x="170" y="284" text-anchor="middle">I couldn’t open the jar.</text></svg>', alt:"Three stacked boxes. Epistemic asks how sure the speaker is, with examples She must be home and It may rain. Deontic asks what is required or allowed, with examples You must wear a helmet and You may leave now. Dynamic asks what the subject can do, with examples Mei can speak four languages and I couldn’t open the jar.", cap:"The same modal word can fit in more than one box. The question behind the sentence decides which one."}
    ]},
    {h:"One modal, several jobs", body:[
      "Most modals work in more than one family. This is why learners cannot just memorize “can = ability”.",
      {table:[["Modal","Meanings you will meet"],["*can*","ability (*I can swim*), permission (*You can park here*), general possibility (*It can get cold here*)"],["*could*","past ability (*I could swim at five*), a polite request (*Could you help?*), a possibility (*It could be a bug*)"],["*may*","permission, formal (*You may enter*), possibility (*It may snow*)"],["*might*","possibility (*She might be late*), a softer suggestion (*You might ask Ana*)"],["*must*","obligation (*You must register*), a conclusion (*He must be tired*)"],["*will*","a prediction (*It will rain*), willingness (*I’ll help*), a guess about now (*That’ll be Mei at the door*)"],["*should*","advice (*You should rest*), an expectation (*The bus should be here soon*)"]]},
      "How do you decide? Use **paraphrase tests**. Replace the modal with a longer phrase and see which one keeps the meaning.",
      {list:[
        "Epistemic: *It is likely / certain / possible that…* *She must be home* → *It is nearly certain that she is home.*",
        "Deontic: *You are required / allowed to…* *You must sign* → *You are required to sign.*",
        "Dynamic: *… is able to…* *Mei can speak four languages* → *Mei is able to speak four languages.*"
      ]},
      "Grammar also gives clues.",
      {list:[
        "**Perfect after the modal.** *must have left, can’t have known, might have lost*: a past event judged now. This is almost always epistemic. *You must have called* is a conclusion about the past.",
        "**A state or a progressive.** *He must be tall. She must be working.* These suggest a conclusion. Rules and permission are usually about actions you can do or not do: *You must wait.*",
        "**A person who can decide.** If someone has power over the action (a teacher, a rule), the meaning is often deontic."
      ]},
      {ex:"Same words, two meanings\n\nHe must be at the station.\n  Epistemic: I conclude that he is there. (His coat is in the hall, and the train leaves soon.)\n  Deontic: He is required to be there. (The manager told him to wait.)\n\nIt is the situation that decides. In writing, a sentence alone can be unclear.", label:"Worked example", mono:true}
    ]},
    {h:"Negatives need care", body:[
      "The negative of a modal does not always negate the same part of the meaning. Three pairs cause the most trouble.",
      {table:[["Sentence","Meaning"],["*He can’t be at home.*","Epistemic. I am sure he is **not** at home. (A conclusion about what is impossible.)"],["*He mustn’t be at home.*","Usually a rule: he is not allowed to be at home. In American English, *He must not be home* is also used as a weaker conclusion (“I guess he is not home”)."],["*You mustn’t park here.*","Deontic. Parking is forbidden."],["*You don’t have to park here.*","Deontic. Parking here is not required. You may park elsewhere."],["*You needn’t park here.*","The same as *don’t have to*. *Needn’t* is more common in British English. Americans usually say *don’t need to*."],["*She may not come.*","Epistemic: perhaps she will not come. It can also be deontic: she is not allowed to come."]]},
      {key:"*Mustn’t* means “forbidden”. *Don’t have to* means “not required”. They are not the same, and learners who mix them can give the wrong instruction."},
      {warn:"For a conclusion that something is impossible, use *can’t* (*That can’t be Tomás; he is in Lima*). *Mustn’t* is not used this way in British English, so *can’t* is the safe choice everywhere."},
      {h:"Compared with Japanese"},
      "Japanese uses separate endings for these meanings. *-kamoshirenai* (かもしれない) is epistemic “might”. *-ni chigainai* (にちがいない) is strong epistemic “must be”. *-nakereba naranai* (なければならない) is deontic “must, have to”. *-te mo ii* (てもいい) is permission, “may”. *-te wa ikenai* (てはいけない) is prohibition, “must not”. And *dekiru* (できる) is dynamic, “can”. The Japanese ending tells you the kind of meaning. The English modal does not, so learners need the tests above."
    ]},
    {h:"Talking about the past, and common myths", body:[
      "A modal followed by *have* and a past participle reaches into the past. The meaning depends on the family.",
      {table:[["Form","Meaning","Example"],["*must have* + participle","a conclusion: I am nearly sure it happened","*She must have missed the bus.*"],["*can’t have* + participle","a conclusion: it cannot have happened","*He can’t have known.*"],["*might / could have* + participle","a possibility, or an unreal chance that did not happen","*It might have been a mistake. We could have won.*"],["*should have* + participle","a duty that was not met; often criticism or regret","*You should have called me.*"],["*would have* + participle","an unreal result (Lesson 3)","*I would have helped.*"]]},
      "For one clear, completed event in the past, English uses *was able to*, not *could*: *I was able to finish the report* (and I did). *I could finish it* sounds like a general ability. In the negative both work: *I couldn’t finish it*.",
      {h:"Myths to drop"},
      {list:[
        "**“Can is ability and may is permission, so *Can I sit here?* is wrong.”** Both are used for permission. *May* is more formal. Everyday English uses *can* freely.",
        "**“*Might* is the past of *may*.”** Not in modern use. *Might* is a weaker, more tentative possibility, and the difference between *may*, *might* and *could* is often small.",
        "**“*Will* is the future tense.”** *Will* is a modal. Unit 7 explains why many grammars say English has no future tense, and why teachers still use the label.",
        "**“*Shall* has disappeared.”** It is rare in everyday American English. It remains in offers (*Shall I open the window?*) and in some legal texts."
      ]},
      "A short rule helps in class: do not translate a modal by its word. Ask first what the sentence is doing: guessing, ruling or describing an ability."
    ]}
   ],
   try:[
    {id:"e5u8-l1-x1", type:"sort", q:"Sort each sentence by the kind of meaning its modal has.", buckets:["Epistemic (how sure)","Deontic (rule or permission)","Dynamic (ability)"], items:[
      {t:"“She must be at home. Her car is outside.”", b:0, why:"The speaker uses evidence (the car) to reach a conclusion. Epistemic."},
      {t:"“You must wear a helmet on this site.”", b:1, why:"A rule requires it. Deontic."},
      {t:"“Mei can speak four languages.”", b:2, why:"It describes what the subject is able to do. Dynamic."},
      {t:"“It may rain this afternoon.”", b:0, why:"*May* here marks a chance. Nobody gives permission to rain. Epistemic."},
      {t:"“Students may borrow six books.”", b:1, why:"The library allows it. Deontic permission."},
      {t:"“That can’t be Tomás. He is in Lima.”", b:0, why:"A conclusion that something is impossible. Epistemic."},
      {t:"“Visitors must sign in at the desk.”", b:1, why:"A rule for visitors. Deontic."},
      {t:"“I couldn’t open the jar.”", b:2, why:"It is about the speaker’s own ability. Dynamic."}
    ]},
    M("e5u8-l1-x2","Which sentence says the speaker is **sure that something is not true**?",1,[
      ["*He shouldn’t be at home.*","This is advice, or a weak expectation (“I don’t expect him to be there”). It is not a firm conclusion."],
      ["*He can’t be at home.*","Right. *Can’t* is the usual epistemic negative of *must*: I am sure he is not there."],
      ["*He doesn’t have to be at home.*","This is deontic. It says being at home is not required."],
      ["*He may be at home.*","This says it is possible that he is there. It is not a negative conclusion."]
    ]),
    {id:"e5u8-l1-x3", type:"match", q:"Match each sentence with the paraphrase that keeps its meaning.", pairs:[
      ["You must have seen the sign.","I conclude that you saw the sign.","*Must have* + participle is an epistemic conclusion about the past."],
      ["You should have called me.","You had a duty to call me, and you did not.","*Should have* shows a duty that was not met. It often sounds like mild criticism."],
      ["She could swim at the age of four.","She was able to swim at the age of four.","This is dynamic past ability."],
      ["That’ll be Mei at the door.","I guess that it is Mei at the door.","*Will* can express a guess about the present. It is epistemic, not about the future."]
    ]},
    {id:"e5u8-l1-x4", type:"spot", q:"Read this notice from a community center. Tap each **modal verb**.", ask:"is a modal verb", parts:[
      "Visitors ", {t:"must", flag:true, why:"A modal: it is followed by a base form (*sign*) and has no *-s*."}, " sign in at the desk. They ", {t:"may", flag:true, why:"A modal of permission, followed by a base form (*use*)."}, " use the ", {t:"free", flag:false, why:"An adjective that describes *Wi-Fi*."}, " Wi-Fi. Staff ", {t:"will", flag:true, why:"A modal: it expresses a promise or prediction and is followed by a base form (*help*)."}, " help you if you ", {t:"have", flag:false, why:"An ordinary main verb here (*have a question*). It takes *-s* (*she has*) and needs *do* in questions."}, " a question. Lost items ", {t:"can", flag:true, why:"A modal: it means possibility here (*can be collected*)."}, " be collected on Friday."
    ]},
    {id:"e5u8-l1-x5", type:"number", q:"How many modal verbs are in this sentence? “You should call Mei, because she might be worried, and she can’t reach you.”", answer:3, tol:0, unit:"modals", why:"The modals are *should*, *might* and *can’t*. *Call*, *be* and *reach* are ordinary verbs in the base form after a modal. The *n’t* in *can’t* is the negative, not a separate modal.", wrongs:[
      {v:2, tol:0, why:"This misses *can’t*. The form *can’t* is *can* plus *not*, so it counts as a modal."},
      {v:4, tol:0, why:"This counts *be* as a modal. *Be* is the verb that comes after *might*. It is an ordinary verb here."}
    ], hint2:"A modal has no *-s* in the third person and is followed directly by a base form."},
    {id:"e5u8-l1-x6", type:"order", q:"Put these steps in a sensible order for deciding the meaning of a modal in a sentence.", items:[
      {t:"Read the whole sentence and the situation around it.", why:"The same modal word has different meanings in different situations, so context comes first."},
      {t:"Try the epistemic paraphrase: “It is likely, certain or possible that…”", why:"If this fits, the speaker is judging how true something is."},
      {t:"Try the deontic paraphrase: “You are required or allowed to…”", why:"If someone or something decides what is required or allowed, the meaning is deontic."},
      {t:"Try the dynamic paraphrase: “… is able to…”", why:"If the sentence describes the subject’s own ability, this fits."},
      {t:"Check the grammar clues: *have* + participle, a progressive, a state verb.", why:"These clues often settle a case that two paraphrases both fit."}
    ]},
    M("e5u8-l1-x7","Tomás writes: “She cans swim very well, and he must to go now.” What is the best explanation of the two errors?",2,[
      ["Modals need *to* before the next verb, and the *-s* goes on the verb after the modal.","This is the reverse. Modals take no *to* and no *-s*."],
      ["*Can* and *must* are not modal verbs, so they follow ordinary verb rules.","They are core modals. That is why they do not follow ordinary verb rules."],
      ["A modal has no third-person *-s* and is followed by a base form without *to*: *She can swim. He must go.*","Right. These are two of the form tests for modals."],
      ["The sentence is correct in informal speech.","*Cans* and *must to* are not used in standard English, formal or informal."]
    ]),
    {id:"e5u8-l1-x8", type:"explain", q:"Mei asks: “If someone says *You must be joking*, why does that not mean I am forced to joke?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Name the two kinds of meaning of *must*, say which one this is, and give a clue.", model:"*Must* has two main meanings. It can be deontic, a rule, as in *You must register by Friday*. It can also be epistemic, a conclusion, as in *You must be joking*, where the speaker is sure that you are joking because the facts point that way. In *You must be joking*, nobody gives an order. The clue is the state verb *be* and the situation: the speaker is reacting to something surprising. A good test is to replace *must* with *I conclude that*: *I conclude that you are joking*.", points:["Says that *must* has both a rule meaning (deontic) and a conclusion meaning (epistemic)","Says that this sentence is epistemic: the speaker draws a conclusion from evidence","Gives a clue or a test (a state verb, the situation, or a paraphrase)","Explains clearly that nobody is ordering Mei to joke"]}
   ],
   apply:{
    intro:"These tasks use real texts and a free online dictionary. Nothing needs an account.",
    tasks:[
     {t:"Collect and label ten modals", how:[
       "Find ten sentences with a modal verb in signs, emails, instructions or a news article. Copy each sentence.",
       "Label each one epistemic, deontic or dynamic. Write the paraphrase that you used to decide.",
       "Mark any sentence where two meanings are possible, and say what extra information would settle it."
     ], write:"Sentence… kind… paraphrase test… other possible meaning…"},
     {t:"Check the senses in a dictionary", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org) and look up *must*, *can* and *may*.",
       "Count the numbered senses of each modal. Read the labels and examples.",
       "Match three of the dictionary examples to epistemic, deontic or dynamic meaning. Write one sentence on how the dictionary marks the difference."
     ], write:"must: … senses. One example of each kind: …"},
     {t:"Choose the English modal for Japanese endings", how:[
       "Take these five Japanese ideas: *ame ga furu kamoshirenai*, *Tarō wa uchi ni iru ni chigainai*, *kyō wa kaeranakereba naranai*, *koko de tabete mo ii*, *Mei wa piano ga hikeru*.",
       "Write an English sentence for each, using a modal. Say whether you chose an epistemic, deontic or dynamic meaning.",
       "Check each answer by adding a paraphrase from the lesson."
     ], write:"Japanese idea… my English sentence… kind of meaning… paraphrase…"}
    ],
    proof:"A list of ten labeled modal sentences with paraphrase tests, a dictionary note on three modals, and five sentences that show how Japanese endings map to English modals."
   },
   read:[
    {book:"eling", where:"The Semantics chapter, section “Linguistic meaning”", note:"The book has no section on modal verbs. Read this section for the idea that the meaning of a sentence depends on the situation, then return to the tests in this lesson."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u8-l2", title:"Strength and politeness: must, have to, should, had better, might", minutes:55,
   hook:{q:"A manager says to a colleague of equal rank: *You’d better check the figures.* How does it probably sound?", options:["Like a friendly, gentle suggestion","Like a warning that something bad may follow","Like a polite question","Like a request for permission"], answer:1, reveal:"**Like a warning.** *Had better* gives advice, and it also suggests an unpleasant result if the advice is ignored. Said to a colleague, it can sound bossy or even like a threat. *You should check the figures* or *You might want to check the figures* is softer. This lesson compares the common words of advice and duty."},
   goals:[
     "Place must, have to, need to, should, had better and might on a scale of strength",
     "Explain the real differences between must and have to, including the negatives",
     "Explain why had better can sound rude, and when it does not",
     "Choose a request or a suggestion with the right level of politeness"
   ],
   learn:[
    {h:"A scale from suggestion to duty", body:[
      {lead:"English has many ways to tell someone what to do. They differ in strength, in who has the authority, and in tone."},
      "The table below is a rough scale. It is not exact, because tone also depends on voice, relationship and situation. A friend who says *You must try this cake* is not giving an order.",
      {table:[["Form","Typical meaning","Tone"],["*might want to / could*","a soft suggestion: *You might want to book early.*","Very polite. The listener can easily refuse."],["*should / ought to*","advice or an expectation: *You should rest.*","Mild. Can feel critical in the perfect: *You should have called.*"],["*need to*","necessity from the situation: *We need to leave.*","Neutral."],["*have to*","an obligation from outside: *I have to work on Saturday.*","Neutral. The most common choice in speech."],["*must*","a strong obligation from rules or the speaker: *Passengers must wear seat belts.*","Formal in rules. Strong if said to a person."],["*had better*","strong advice with a warning inside: *You’d better hurry.*","Direct. Can sound like a threat to others."]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">A rough scale of strength</text><rect class="d-softf" x="20" y="36" width="150" height="38" rx="8" stroke-width="2"/><text x="32" y="60">might want to</text><rect class="d-sage" x="20" y="84" width="190" height="38" rx="8" stroke-width="2"/><text x="32" y="108">should / ought to</text><rect class="d-lup" x="20" y="132" width="230" height="38" rx="8" stroke-width="2"/><text x="32" y="156">need to / have to</text><rect class="d-gold" x="20" y="180" width="270" height="38" rx="8" stroke-width="2"/><text x="32" y="204">had better</text><rect class="d-rose" x="20" y="228" width="300" height="38" rx="8" stroke-width="2"/><text x="32" y="252">must (in rules)</text><text class="s" x="20" y="288">weaker: the listener can choose</text><text class="s" x="320" y="306" text-anchor="end">stronger: the listener has little choice</text></svg>', alt:"Five horizontal bars that get longer from top to bottom: might want to, should or ought to, need to or have to, had better, and must in rules. A note says the short bars are weaker and the listener can choose, and the long bars are stronger and the listener has little choice.", cap:"The order is a guide, not a measurement. A friendly voice can soften any of them, and a cold voice can sharpen any of them."}
    ]},
    {h:"Must and have to: where the difference is real", body:[
      "Many textbooks say that *must* comes from the speaker (*I must call her*) and *have to* comes from outside (*I have to call her; my boss said so*). This is a useful tendency. It is weaker than the books suggest. Corpus studies report that in everyday speech, especially in American English, *have to* is much more common than *must* for obligation. *Must* appears most in written rules, signs and formal speech. In many sentences the two are interchangeable.",
      "These differences are firm.",
      {table:[["Point","Must","Have to"],["Negative","*You mustn’t go.* Forbidden.","*You don’t have to go.* Not required."],["Past","No past form. Use *had to*.","*I had to leave.*"],["Future, infinitive, perfect","None. Use *will have to*, *to have to*.","*I will have to leave. I have had to wait.*"],["Where you see it","Signs, rules, contracts, formal writing","Everyday speech and writing"],["As a conclusion (epistemic)","*She must be tired.*","*She has to be tired.* Also used, especially in American speech."]]},
      {warn:"*Must not* and *don’t have to* are not the same. *Employees must not use this door* forbids it. *Employees don’t have to use this door* allows both doors."},
      "Spoken English also has *have got to* (British and American) and the spoken form *gotta* (*I gotta go*). They are informal forms of *have to*. In writing, use *have to* or *must*.",
      "US government plain-language guidance recommends *must* for a requirement and advises against *shall*, because *shall* is unclear to many readers. Some legal texts still use *shall* for duties."
    ]},
    {h:"Should and ought to", body:[
      "*Should* gives advice or states an expectation. *You should see a doctor* is advice. *The package should arrive on Tuesday* is an expectation, and it is epistemic. *Ought to* has the same meanings. In current usage it is less frequent than *should* and often sounds a little formal.",
      "*Should* is mild, but it is not always gentle. Three cases show the range.",
      {list:[
        "**Friendly advice.** *You should try the soup.*",
        "**A reminder of a duty.** *You should wear a helmet.* The speaker agrees with a rule.",
        "**Criticism after the event.** *You should have told me.* The duty was not met, and the speaker is not pleased."
      ]},
      "The negative *shouldn’t* advises against something: *You shouldn’t stay up so late.* It does not forbid it. For a forbidding use *mustn’t* or *can’t*."
    ]},
    {h:"Had better: advice with a warning inside", body:[
      "*Had better* is the form that surprises learners most. Its form is odd: *had*, but with a present or future meaning, and a base verb with no *to*. In speech it is nearly always *’d better*. The negative is *had better not*.",
      {ex:"You’d better take an umbrella. (Present or future, not past.)\nWe’d better leave now.\nYou’d better not touch that.\nI’d better go.", label:"Form", mono:true},
      "The meaning is advice plus a consequence. *You’d better take an umbrella* means “or you will get wet”. The unpleasant result may not be said, but the listener hears it. That is why the sentence can sound like a warning, and a warning from someone who seems to hold power over you can sound like a threat.",
      {table:[["Sentence","Who says it","How it sounds"],["*I’d better go.*","the speaker, about themselves","Neutral. A plan with a reason."],["*We’d better hurry.*","a group, including the speaker","Neutral. A shared warning."],["*You’d better take a coat.*","a friend or a parent","Caring. The result is mild."],["*You’d better be on time tomorrow.*","a boss or a teacher","A threat. The result is a penalty."],["*You’d better stop talking.*","a classmate to a classmate","Rude. It sounds like an order with a warning."]]},
      "Mariya, a student of English interpreting, practices a pharmacy dialogue. The pharmacist says in Japanese *Shokuji no ato ni nonda hō ga ii desu* (食事の後に飲んだほうがいいです). She writes *You had better take it after meals*, then stops. Her teacher’s first comment is kind: the sentence is correct, but the pharmacist would sound strict. *You should take it after meals* matches the Japanese better.",
      {h:"Compared with Japanese"},
      "Japanese advice with *-ta hō ga ii* (〜たほうがいい, “it is better to…”) is a common, fairly soft suggestion, and with *desu* it is polite. Many textbooks translate it as *had better*. In English the match is not close, because *had better* is stronger and adds a warning. In most cases *should* or *it’s a good idea to* is the better translation."
    ]},
    {h:"Might, could and softening", body:[
      "Modals can make a sentence softer. In American workplaces, *You might want to check the figures* is often a polite instruction: the speaker expects the listener to check. A listener who reads *might* literally may think the check is optional. This matters when you interpret or teach, because a hedge is easy to lose in translation.",
      "Requests also form a ladder. The more indirect the sentence, the more polite it usually is.",
      {table:[["Request","Level"],["*Open the window.*","Direct. Fine with friends or in an emergency."],["*Can you open the window?*","Neutral and common."],["*Could you open the window?*","A little more polite. The past form adds distance."],["*Would you mind opening the window?*","Polite. The *-ing* form follows *mind*."],["*I was wondering if you could open the window.*","Very polite and indirect."]]},
      "More is not always better. A very long, indirect request to a close friend can sound cold or even sarcastic. Match the sentence to the relationship.",
      {h:"Habits that cause trouble"},
      {list:[
        "**“Must is always stronger than have to.”** In rules, yes. In speech, *I have to go* is as firm as *I must go*.",
        "**“Mustn’t and don’t have to mean the same.”** They are close to opposites for the listener.",
        "**“Should is a safe, weak word.”** *You should have called* can be sharp criticism.",
        "**“Had better is the strongest polite advice.”** It is advice with a warning, so it is not the polite choice.",
        "**“Being more polite is always better.”** Too many softeners hide the message, which matters in a safety instruction."
      ]}
    ]}
   ],
   try:[
    {id:"e5u8-l2-x1", type:"sort", q:"Sort each sentence by how strong it is.", buckets:["Soft suggestion","Advice","Warning inside","Duty"], items:[
      {t:"“You might want to book early.”", b:0, why:"*Might want to* is a very soft suggestion. The listener can easily refuse."},
      {t:"“You could ask Mei about it.”", b:0, why:"*Could* offers an option. It does not push."},
      {t:"“You should rest today.”", b:1, why:"*Should* is mild advice."},
      {t:"“You ought to apologize.”", b:1, why:"*Ought to* is advice or a moral expectation. It is as mild as *should* or a little stronger."},
      {t:"“You’d better leave now, or you’ll miss the train.”", b:2, why:"*Had better* with a stated result is a warning."},
      {t:"“You’d better not be late again.”", b:2, why:"*Had better not* from someone with power sounds like a threat."},
      {t:"“Passengers must show a ticket.”", b:3, why:"*Must* in a rule is a duty."},
      {t:"“I have to finish this report today.”", b:3, why:"*Have to* states an obligation from outside."}
    ]},
    M("e5u8-l2-x2","A sign says: *You mustn’t use the side door.* What does it mean?",0,[
      ["Using the side door is forbidden.","Right. *Mustn’t* is a prohibition."],
      ["Using the side door is not required.","That is *don’t have to*. *Mustn’t* is much stronger."],
      ["You should use the side door if you can.","That would be a *should* sentence, with the opposite direction."],
      ["It is not possible to use the side door.","This is about ability. *Mustn’t* is about rules."]
    ]),
    {id:"e5u8-l2-x3", type:"match", q:"Match each sentence with the situation where it is most likely.", pairs:[
      ["Visitors must report to reception.","A written rule on a notice","*Must* is the usual form in signs and rules."],
      ["I’ve got to run. My bus leaves in five minutes.","A friend leaving a conversation","*Have got to* is informal spoken *have to*."],
      ["You’d better not touch that.","A warning to a child near a hot stove","*Had better not* gives a warning, and the result is clear."],
      ["You might want to check the date.","A polite instruction from a colleague","*Might want to* softens a request that the listener is expected to follow."]
    ]},
    {id:"e5u8-l2-x4", type:"spot", q:"Tomás is writing to a colleague of the same rank. Tap each phrase that could sound like **a warning or an order**.", ask:"sounds like a warning or order", parts:[
      "Hi Ana, ", {t:"you’d better check section 3", flag:true, why:"*Had better* adds a warning. To a colleague of equal rank it can sound like a threat."}, ". ", {t:"You might want to add a title", flag:false, why:"*Might want to* is a soft suggestion."}, ". Also, ", {t:"you must send the draft by Friday", flag:true, why:"*Must* to a colleague of equal rank sounds like an order. *We need the draft by Friday* would be milder."}, ". ", {t:"You should ask Mei for her notes", flag:false, why:"*Should* is mild advice."}, ". ", {t:"Could you reply by noon?", flag:false, why:"*Could you* is a polite request."}
    ]},
    {id:"e5u8-l2-x5", type:"number", q:"How many of these five sentences say that staying is **not required**? 1) You must stay. 2) You don’t have to stay. 3) You needn’t stay. 4) You mustn’t stay. 5) You shouldn’t stay.", answer:2, tol:0, unit:"sentences", why:"Sentences 2 and 3 say that staying is not required (*don’t have to*, *needn’t*). Sentence 1 says staying is required. Sentence 4 forbids it. Sentence 5 advises against it, and the listener may still choose to stay.", wrongs:[
      {v:1, tol:0, why:"This counts only *don’t have to*. *Needn’t* means the same thing."},
      {v:3, tol:0, why:"This adds *shouldn’t*. That sentence is advice not to stay, so it is not the same as “not required”."}
    ], hint2:"Ask for each one: if you stayed anyway, would you break a rule or ignore advice?"},
    {id:"e5u8-l2-x6", type:"order", q:"Order these requests from the most direct to the most indirect.", items:[
      {t:"Open the window.", why:"A direct command, with no softening."},
      {t:"Can you open the window?", why:"A question form that asks for ability, which is the common neutral request."},
      {t:"Could you open the window?", why:"The past form adds distance and a little more politeness."},
      {t:"Would you mind opening the window?", why:"This asks about the listener’s feelings, which gives more choice."},
      {t:"I was wondering if you could open the window.", why:"The most indirect form. It does not even ask a question."}
    ]},
    M("e5u8-l2-x7","Hana wants to tell a classmate to hand in a form soon, in a friendly way. Which sentence is best?",2,[
      ["*You had better hand in the form soon.*","This adds a warning that something bad will follow. A friendly classmate would not usually say it."],
      ["*You must hand in the form soon.*","This sounds like an order from someone with authority."],
      ["*You should hand in the form soon, or you could ask Mei if she can help.*","Right. *Should* is mild advice, and *could* offers an option. Nothing in it is a threat."],
      ["*You will hand in the form soon.*","This is a prediction or an order, not friendly advice."]
    ]),
    {id:"e5u8-l2-x8", type:"explain", q:"Hana says: “In class I told a classmate, *You’d better stop talking*. She looked upset. My teacher says it was a correct sentence. Why did she look upset?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what *had better* adds to advice, and give a gentler choice.", model:"The sentence is grammatical, but *had better* carries a warning, so it sounds like “stop talking, or something bad will happen”. Between classmates, who have equal rank, that sounds like an order or a threat, and it is rude. A gentler choice is *Could you stop talking?* or *Maybe we should be quiet*. *You might want to stop talking* is also softer. The grammar was right, and the effect on the listener was wrong.", points:["Says that the sentence is grammatical, so the problem is tone, not form","Says that *had better* adds a warning or a consequence","Says that equal rank makes the warning sound rude","Gives a gentler alternative (*could you*, *should*, *might want to*)"]}
   ],
   apply:{
    intro:"These tasks need a free corpus or dictionary account, or none. COCA needs a free registration. The Cambridge and Merriam-Webster sites do not.",
    tasks:[
     {t:"Rewrite five messages at three strengths", how:[
       "Take five orders: *Send me the file. Close the door. Be quiet. Pay now. Call her back.*",
       "Rewrite each in three ways: one with a request (*could you*), one with advice (*should* or *might want to*), one with a duty (*must* or *have to*).",
       "Mark which of your 15 sentences you would say to a friend, a colleague and a stranger. Say why you chose each."
     ], write:"Order… request… advice… duty… I would say it to…"},
     {t:"Corpus check: who says had better?", how:[
       "Go to English-Corpora.org and open the Corpus of Contemporary American English (COCA). A free account is needed after a few searches.",
       "Search for *had better*. Then try the short form *’d better*, typed with a straight apostrophe ('d better). If the short form gives no results, work with *had better* only. Look at the sample lines and note who the subject is in 20 of them: *I*, *we*, *you* or someone else.",
       "Write what you see. Is *you’d better* more common than *I’d better* in your sample? What follows it? Which lines sound like warnings? Do not guess before you look."
     ], write:"20 sample lines: I… we… you… other… Lines that sound like warnings…"},
     {t:"Look up must and have to in a dictionary", how:[
       "Open the Merriam-Webster entries for *must* and *have to*, and the Cambridge entry for *must*.",
       "Find any note about when the words are used in speech, in writing or in rules.",
       "Write three sentences with *must* and three with *have to* that you could use in real life. Say which kind of text each one comes from."
     ], write:"Dictionary note… my six sentences… where I would use each…"}
    ],
    proof:"A table of five orders at three strengths, a note from your own COCA search on *had better* with what you saw, and six sentences with *must* and *have to* labeled by use."
   },
   read:[
    {book:"eling", where:"The Pragmatics chapter, sections “Conversational implicatures” and “Illocutionary meaning”", note:"The book has no section on modal verbs. Read these sections to see how a hearer reads more than the words say, as with the warning in *had better*."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u8-l3", title:"Conditionals: real and unreal", minutes:55,
   hook:{q:"Which sentence is **not** about something imagined? (a) *If I had a car, I would drive you.* (b) *If she was at the party, I didn’t see her.*", options:["Only (a)","Only (b)","Both are imagined","Neither is imagined"], answer:1, reveal:"**Only (b).** *Was* here is a plain past form. The speaker does not know if she was at the party, so the condition is open. In (a), *had* is a past form that marks an imagined, untrue situation. The same past form can mean past time or distance from reality. This lesson sorts conditionals by meaning."},
   goals:[
     "Describe a conditional by two questions: is it real or unreal, and what time does it refer to",
     "Use zero, first, second and third as a teaching shortcut, and say where the labels fail",
     "Form and explain mixed conditionals",
     "Say when if + will is grammatical",
     "Explain were and was in unreal conditions"
   ],
   learn:[
    {h:"Start with meaning, not numbers", body:[
      {lead:"A [[hew-conditional|conditional]] sentence says that one thing depends on another. The *if* part is the condition, and the other part is the result."},
      "Textbooks usually teach “zero, first, second and third conditional”. The labels are a useful teaching shortcut, and most learner books use them. But they hide the logic. Two questions explain nearly every case.",
      {list:[
        "**Is the situation real or unreal?** A [[hew-real-conditional|real conditional]] treats the condition as open: it may be true, as far as the speaker knows. An [[hew-unreal-conditional|unreal conditional]] treats the condition as imagined, untrue or unlikely.",
        "**What time does it refer to?** General time, the future, the present, or the past."
      ]},
      {table:[["Teaching label","Meaning","Pattern","Example"],["Zero","real, general","*if* + present, present","*If you heat ice, it melts.*"],["First","real, future","*if* + present, *will*","*If it rains, we’ll stay home.*"],["Second","unreal, present or future","*if* + past, *would*","*If I had a car, I would drive you.*"],["Third","unreal, past","*if* + past perfect, *would have*","*If I had left earlier, I would have caught the train.*"]]},
      "The numbers do not show everything. The next sections add the cases the numbers miss."
    ]},
    {h:"Real conditionals", body:[
      "In a real conditional, the speaker treats the condition as possible. The *if* clause uses the **present simple** even when the time is future: *If it rains tomorrow*, not *If it will rain tomorrow*. This is the main rule that learners must remember.",
      {table:[["Kind","Example","What it says"],["General truth (zero)","*If you mix blue and yellow, you get green.*","Whenever the condition is true, the result follows. *If* can be replaced by *when* or *whenever*."],["Future possibility (first)","*If the bus is late, I’ll walk.*","One possible future event and its result."],["Advice or instruction","*If you see Mei, tell her about the meeting.*","The main clause can be an imperative."],["Other modals","*If it rains, we might cancel. If you finish early, you can leave.*","The result clause can use *may, might, can, should*."],["Past, open","*If she was at the party, I didn’t see her.*","A real condition about the past: the speaker does not know the facts."]]},
      {warn:"A past form in an *if* clause does not always mean “unreal”. In *If she was upset, she hid it well*, *was* is simply past, and the condition may be true."},
      "**If or when?** *If* is for something uncertain, and *when* is for something that will happen. *Call me when you arrive* means “you will arrive”. *Call me if you arrive late* means “you may or may not”. Japanese *-tara* can mean both, and learners often choose the wrong English word."
    ]},
    {h:"Unreal conditionals and the “past” that is not past", body:[
      "In unreal conditionals, English uses a **past form to show distance from reality**. The form is past, but the time is present or future. *If I had a car* talks about now: I do not have one. This idea is called remoteness, and it also works in *I wish I had a car* and *It’s time we left*.",
      {table:[["Time","Pattern","Example","Reality"],["Present or future","*if* + past, *would* + base verb","*If I knew her number, I would call.*","I do not know it."],["Past","*if* + past perfect, *would have* + participle","*If we had known, we would have helped.*","We did not know."],["Unlikely future","*if* + past, *would*","*If you won the lottery, what would you do?*","It may happen, but the speaker thinks it unlikely."]]},
      "The result clause can also use *could* or *might* instead of *would*. *If I had a car, I could drive you* says “I would be able to”. *If I had a car, I might drive you* says “maybe”.",
      "The second conditional is not always impossible. It is used for the imagined, the unlikely and the hypothetical. This is why the label “second = impossible” is wrong.",
      {fig:'<svg viewBox="0 0 340 320"><defs><marker id="e5u8c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Distance from reality</text><rect class="d-sage" x="14" y="34" width="312" height="60" rx="10" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Open: if + present</text><text class="s" x="170" y="80" text-anchor="middle">If it rains, we’ll stay home.</text><path class="d-ink" d="M170 96V116" stroke-width="2" marker-end="url(#e5u8c)"/><rect class="d-gold" x="14" y="120" width="312" height="60" rx="10" stroke-width="2"/><text x="170" y="144" text-anchor="middle">Remote: if + past</text><text class="s" x="170" y="166" text-anchor="middle">If I had a car, I would drive you.</text><path class="d-ink" d="M170 182V202" stroke-width="2" marker-end="url(#e5u8c)"/><rect class="d-rose" x="14" y="206" width="312" height="60" rx="10" stroke-width="2"/><text x="170" y="230" text-anchor="middle">Past and untrue: if + had done</text><text class="s" x="170" y="252" text-anchor="middle">If we had known, we would have helped.</text><text class="s" x="170" y="296" text-anchor="middle">Each step moves the verb one step back in time,</text><text class="s" x="170" y="312" text-anchor="middle">which signals one step farther from fact.</text></svg>', alt:"Three boxes connected by downward arrows. The first, open, uses if plus the present: If it rains, we’ll stay home. The second, remote, uses if plus the past: If I had a car, I would drive you. The third, past and untrue, uses if plus had done: If we had known, we would have helped. A note says each step moves the verb one step back in time, which signals one step farther from fact.", cap:"The tense in the if clause shows how far the speaker is from the facts, as well as when the event happens."}
    ]},
    {h:"Mixed conditionals", body:[
      "A [[hew-mixed-conditional|mixed conditional]] joins two different times. The pattern follows the meaning of each clause, so no new rule is needed. There are two common types.",
      {table:[["Type","Pattern","Example"],["Past condition, present result","*if* + past perfect, *would* + base","*If I had taken that job, I would be living in Osaka now.*"],["Present state, past result","*if* + past, *would have* + participle","*If I were taller, I would have joined the team.*"]]},
      "Ask what time each clause is about. In the first, the condition is in the past (*had taken*) and the result is now (*would be living*). In the second, the condition is a present state (*I am not tall*), and the result belongs to the past (*would have joined*).",
      "The same idea works with *wish* and *if only*. *I wish I had asked* regrets the past. *If only I knew the answer* regrets the present."
    ]},
    {h:"If … will: when it is fine", body:[
      "Teachers often say “never use *will* after *if*”. This is a good rule for *future time*, but it is not absolute. *Will* is grammatical after *if* in these cases.",
      {table:[["Case","Example","Meaning of will"],["Willingness (a polite request)","*If you’ll wait here, I’ll get the manager.*","*If you are willing to…*"],["Insistence (*will* is stressed; more common in British English)","*If you will eat so much, no wonder you feel sick.*","*If you insist on…* It sounds annoyed."],["A later result (a prediction)","*If it will help, I’ll come early.* *If this system will save us time, we should buy it.*","*If it is true that it will help.* The helping comes after the coming early."],["*If* means *whether*","*I don’t know if it will rain.*","*Whether it will rain.* This is a question inside a sentence, not a condition."]]},
      "*Would* works in the same way for politeness: *If you would sign here, please*. The wrong use is the one that only marks the future time of the condition. *If it will rain tomorrow, we will stay home* is not standard. Use *If it rains tomorrow*.",
      {tip:"A quick test: ask what *will* adds. If it means willingness, insistence or a prediction about a later result, it is fine. If it only says that the condition is in the future, use the present simple. When *if* means *whether* (*I wonder if it will rain*), the clause is a question, so *will* is fine."}
    ]},
    {h:"Were or was?", body:[
      "With *I*, *he*, *she* and *it* in an unreal condition, speakers use both forms: *If I were you* and *If I was you*. *Were* is the older, traditional [[hew-were-subjunctive|subjunctive]] form, and it is the safer choice in formal writing and exams. *Was* is very common in informal speech. For *you*, *we* and *they*, only *were* is possible.",
      {table:[["Context","Choice"],["Giving advice: *If I ___ you…*","*were* (traditional and fixed). *Was* is heard in informal speech."],["Formal writing: *If the committee ___ to decide…*","*were* is expected."],["Real past condition: *If I ___ rude, I apologize.*","*was* only. This is not unreal, so *were* is wrong."],["After *wish*: *I wish it ___ Friday.*","both *were* and *was* are used. *Were* is more formal."]]},
      "In formal English, *were* can begin the sentence without *if*: *Were I to leave, who would take over?* Similarly, *Had I known, I would have called* means *If I had known*. These forms sound formal, and they are not needed in everyday speech.",
      "Toby, who taught English in the Japanese countryside for two years, remembers a student who asked why *If I were a bird, I would fly* does not say *was*. “*Was* is the past of *am*,” the student said. The answer Toby now gives is that *were* here is not past tense. It is a form that marks an imagined situation, and *was* has taken over in much informal speech.",
      {h:"Compared with Japanese"},
      "Japanese has four common conditional forms: *-tara* (たら), *-ba* (ば), *-to* (と) and *-nara* (なら). English uses *if* for all of them, so the choice shifts to the verb forms. *-To* often matches the zero conditional, as in *Haru ni naru to, sakura ga saku* (春になると、桜が咲く, “When spring comes, the cherries bloom”). A *-ba* ending can express regret, as in *Benkyō shite ireba yokatta* (勉強していればよかった, “If only I had studied”), which English renders with *if only* or *I should have*. The mapping is not one to one, so teach each English pattern by meaning."
    ]}
   ],
   try:[
    {id:"e5u8-l3-x1", type:"sort", q:"Sort each conditional by what it says.", buckets:["Real (open or true)","Unreal now or future","Unreal past"], items:[
      {t:"“If you mix blue and yellow, you get green.”", b:0, why:"A general truth. The condition is real."},
      {t:"“If the bus is late, I’ll walk.”", b:0, why:"An open future possibility."},
      {t:"“If I had a bigger kitchen, I would bake more.”", b:1, why:"The past form *had* marks an imagined present situation."},
      {t:"“If she was at the party, I didn’t see her.”", b:0, why:"A real past condition. *Was* is a plain past form, and the speaker does not know the facts."},
      {t:"“If I had left earlier, I would have caught the train.”", b:2, why:"The past perfect marks an untrue past: I did not leave earlier."},
      {t:"“If I were you, I would call her.”", b:1, why:"*Were* marks an imagined situation: I am not you."},
      {t:"“If we had known, we would have helped.”", b:2, why:"Unreal past: we did not know."},
      {t:"“If you won the lottery, what would you do?”", b:1, why:"A past form marks an unlikely or imagined future event."}
    ]},
    M("e5u8-l3-x2","Which sentence uses *will* after *if* correctly?",1,[
      ["*If it will rain tomorrow, we’ll cancel the picnic.*","This uses *will* for future time in the condition. Use *If it rains tomorrow*."],
      ["*If you’ll wait here, I’ll get the manager.*","Right. Here *will* means willingness: *if you are willing to wait*. It is a polite request."],
      ["*If I will have time, I’ll call you.*","This is *will* for future time again. Use *If I have time*."],
      ["*If she will arrive late, start without her.*","Same error. Use *If she arrives late*."]
    ]),
    {id:"e5u8-l3-x3", type:"match", q:"Match each sentence with the times it refers to.", pairs:[
      ["If I had taken that job, I would be living in Osaka now.","Past condition, present result","This is a mixed conditional. *Had taken* is the past; *would be living* is now."],
      ["If I were taller, I would have joined the team.","Present state, past result","This is the second type of mixed conditional."],
      ["If you heat ice, it melts.","A general truth","*If* works like *whenever*. No particular time."],
      ["If it rains tomorrow, we will cancel.","A real future possibility","The present simple stands for future time inside an *if* clause."]
    ]},
    {id:"e5u8-l3-x4", type:"spot", q:"Tomás wrote this paragraph. Tap each part that is **not standard**.", ask:"is not standard", parts:[
      "“", {t:"If it will be sunny tomorrow", flag:true, why:"This uses *will* for future time in the condition. Standard English says *If it is sunny tomorrow*."}, ", we ", {t:"go", flag:true, why:"In a real future conditional, the result clause usually needs *will* (or another modal): *we will go*."}, " to the beach. ", {t:"If I had more time", flag:false, why:"This is correct. *Had* is a past form that marks a situation that is not real now."}, ", I ", {t:"would come", flag:false, why:"This is correct. *Would* + base verb is the result of an unreal present condition."}, " too. ", {t:"If you’ll wait", flag:false, why:"This is correct if *will* means willingness: *if you are willing to wait*."}, " a minute, I ", {t:"will check", flag:false, why:"This is a correct result for a real condition."}, ".”"
    ]},
    {id:"e5u8-l3-x5", type:"number", q:"How many of these five sentences are **unreal** conditionals? 1) If I had a ladder, I could fix the roof. 2) If you leave now, you’ll arrive by six. 3) If Ana had called, I would have answered. 4) If the baby sleeps, we can eat. 5) If I were rich, I’d travel.", answer:3, tol:0, unit:"sentences", why:"Sentences 1, 3 and 5 are unreal. They use *had*, *had called* and *were* to mark situations that are not true. Sentences 2 and 4 use the present simple and describe open possibilities.", wrongs:[
      {v:2, tol:0, why:"This misses one unreal sentence. Check which sentences have a result clause with *could*, *would have* or *would*."},
      {v:5, tol:0, why:"This counts every sentence. Sentences 2 and 4 use the present simple, which marks an open condition."}
    ], hint2:"Look at the verb in the *if* clause. A present simple form marks an open condition."},
    M("e5u8-l3-x6","Sione writes to a friend who will arrive at six: “Please call me if you arrive.” What is the better word, and why?",0,[
      ["*When*, because the arrival is certain, not uncertain.","Right. *If* marks an uncertain event. Here the arrival is expected, so *when* is right."],
      ["*If* is correct, because *if* is always more polite.","Politeness is not the issue. *If* says that the arrival may not happen."],
      ["*Unless*, because it is a polite request.","*Unless* means “if not”. It would reverse the meaning."],
      ["*Whether*, because it follows *call*.","*Whether* does not fit this sentence. It would introduce a question."]
    ]),
    M("e5u8-l3-x7","Which sentence is a **real** conditional about the past?",2,[
      ["*If I had known, I would have told you.*","This is unreal. It means I did not know."],
      ["*If I were you, I would apologize.*","This is unreal and present. I am not you."],
      ["*If he was late, nobody mentioned it.*","Right. The speaker does not know if he was late. *Was* is a plain past form."],
      ["*If she had a car, she could drive.*","This is unreal and present. She does not have a car."]
    ]),
    {id:"e5u8-l3-x8", type:"explain", q:"When Toby taught English in Japan, a student asked him: “*Was* is the past of *am*. Why do you say *If I were a bird*?” Explain what you would tell the student.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what *were* marks here, and say that both forms exist.", model:"In an unreal condition, *were* is not a past tense. It is an old form that marks a situation as imagined, and it is the traditional choice, especially in *If I were you*. In everyday speech many people say *If I was*, and both are heard, but *were* is safer in formal writing and exams. With *you*, *we* and *they*, *were* is the only form. A real past condition such as *If I was rude, I apologize* takes *was*, because it is not imagined.", points:["Says that *were* in this use marks an imagined situation, not past time","Says that both *were* and *was* are used, with *were* more formal","Gives the safe choice for formal writing or exams","Mentions that *was* is the only choice in real past conditions, or that *you/we/they* always use *were*"]}
   ],
   apply:{
    intro:"These tasks use your own sentences and two free tools. The Google Books Ngram Viewer needs no account.",
    tasks:[
     {t:"Write conditionals about your own life", how:[
       "Write six sentences about your own life: one general truth, one real future, one unreal present, one unreal past, and two mixed conditionals.",
       "Label each by meaning (real or unreal, and the time). Add the teaching label if there is one.",
       "Check each with the two questions from the lesson. Which sentence was the hardest to label? Why?"
     ], write:"Sentence… real or unreal… time… teaching label…"},
     {t:"Corpus check: if I were or if I was?", how:[
       "Open the Google Books Ngram Viewer (books.google.com/ngrams). Type *if I were,if I was* (a comma separates the two phrases). Choose the American English corpus and tick “case-insensitive”, so that lines starting with *If* are counted too. Look at the lines from 1900 to the latest year shown.",
       "Then open COCA at English-Corpora.org and search *if I was*. Look at 20 sample lines. Note whether they are unreal conditionals or real past conditions.",
       "Write what you see: which form is more frequent in books, and what does the COCA sample show? Do not guess before you look."
     ], write:"Ngram: which line is higher… COCA sample: unreal / real past…"},
     {t:"Translate Japanese conditionals", how:[
       "Write English for these: *Ame ga futtara, ikimasen.* *Haru ni naru to, sakura ga saku.* *Moshi okane ga areba, ryokō shitai.* *Benkyō shite ireba yokatta.*",
       "For each one, choose *if* or *when* and the tense pattern. Say whether it is real or unreal.",
       "Explain in one sentence why a word-for-word translation would not work."
     ], write:"Japanese… my English… real or unreal… why *if* or *when*…"}
    ],
    proof:"Six labeled conditionals from your own life, a short note on your Ngram and COCA results for *if I were* and *if I was*, and four translated Japanese conditionals with notes."
   },
   read:[
    {book:"eling", where:"The Semantics chapter, section “Linguistic meaning”", note:"The book has no section on conditionals. Read this section for the idea that the same words carry different meanings in different situations."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u8-l4", title:"The passive and the get-passive", minutes:55,
   hook:{q:"Which is the passive? (a) *The storm damaged the roof.* (b) *The roof was damaged.* (c) *The roof was shaking.*", options:["(a) only","(b) only","(c) only","(b) and (c)"], answer:1, reveal:"**(b) only.** In (b) the subject, *the roof*, receives the action, and the verb is *be* + a past participle. In (c) *was shaking* is a progressive: the subject does the shaking. Many sentences with *was* look like passives and are not. This lesson shows how to build the passive and how to test for it."},
   goals:[
     "Explain active and passive voice as a choice of subject",
     "Form the passive in any tense or with a modal",
     "Say which verbs can and cannot be passive, and why",
     "Describe the get-passive and how it differs from the be-passive",
     "Decide when the passive is the better choice and when it is not"
   ],
   learn:[
    {h:"Voice: who is the subject?", body:[
      {lead:"The same event can be described in two ways, depending on which participant comes first."},
      "[[hew-voice|Voice]] is the grammar choice that decides who or what is the subject. In an **active** sentence, the subject is the **agent**, the one who does the action: *The storm damaged the roof.* In a **passive** sentence, the subject is the one that receives the action: *The roof was damaged by the storm.* The agent moves to a *by*-phrase, or it disappears.",
      {fig:'<svg viewBox="0 0 340 290"><defs><marker id="e5u8d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Active</text><rect class="d-rose" x="12" y="30" width="98" height="40" rx="8" stroke-width="2"/><text x="61" y="55" text-anchor="middle">The storm</text><rect class="d-gold" x="121" y="30" width="98" height="40" rx="8" stroke-width="2"/><text x="170" y="55" text-anchor="middle">damaged</text><rect class="d-sage" x="230" y="30" width="98" height="40" rx="8" stroke-width="2"/><text x="279" y="55" text-anchor="middle">the roof</text><text class="s" x="61" y="86" text-anchor="middle">agent = subject</text><text class="s" x="279" y="86" text-anchor="middle">object</text><path class="d-ink" d="M170 100V140" stroke-width="2" marker-end="url(#e5u8d)"/><text class="s" x="180" y="124">swap the two ends</text><text x="170" y="170" text-anchor="middle">Passive</text><rect class="d-sage" x="12" y="180" width="98" height="40" rx="8" stroke-width="2"/><text x="61" y="205" text-anchor="middle">The roof</text><rect class="d-gold" x="121" y="180" width="98" height="40" rx="8" stroke-width="2"/><text x="170" y="205" text-anchor="middle">was damaged</text><rect class="d-rose" x="230" y="180" width="98" height="40" rx="8" stroke-width="2"/><text x="279" y="205" text-anchor="middle">by the storm</text><text class="s" x="61" y="236" text-anchor="middle">subject</text><text class="s" x="279" y="236" text-anchor="middle">agent (optional)</text><text class="s" x="170" y="274" text-anchor="middle">be + past participle</text></svg>', alt:"Two rows of three boxes. In the active row, The storm (the agent and subject), damaged, and the roof (the object). An arrow labeled swap the two ends points down to the passive row: The roof (subject), was damaged, and by the storm (the agent, optional). A note says the verb is be plus a past participle.", cap:"The meaning stays the same. The passive moves the object into the subject slot and puts the agent in an optional phrase."},
      "In the passive, the verb changes from a single verb to *be* + a **past participle**, the *-ed* or *-en* form: *damaged, taken, written, broken*. The word *be* carries the tense. The agent is **optional**. Corpus studies of English report that most passives do not name the doer, and this fact is the topic of Lesson 5."
    ]},
    {h:"Form: be + past participle", body:[
      "To make a passive, follow three steps. Move the object to the subject position. Use *be* in the tense of the original verb, then the past participle. Put the old subject after *by*, or drop it.",
      {table:[["Time or form","Active","Passive"],["Present simple","*They build bridges.*","*Bridges are built.*"],["Past simple","*Someone wrote the report.*","*The report was written.*"],["Present perfect","*They have finished it.*","*It has been finished.*"],["Present progressive","*They are repairing the road.*","*The road is being repaired.*"],["Future","*They will announce the winner.*","*The winner will be announced.*"],["Modal","*Someone must clean the room.*","*The room must be cleaned.*"],["Perfect modal","*Someone should have told her.*","*She should have been told.*"],["Infinitive or -ing","*I want them to help me.*","*I want to be helped.*"]]},
      "Progressive passives with *being* are normal in the present and past (*is being built, was being built*). Longer forms such as *has been being built* are rare, and most writers avoid them.",
      {h:"Which verbs can be passive?"},
      "The ordinary passive needs a **transitive** verb, a verb that has an object in the active sentence. *Build, write, give* and *see* are transitive. Some other cases also work.",
      {list:[
        "**Two objects.** *She gave me a key* gives two passives: *I was given a key* and *A key was given to me.* English lets the recipient become the subject. Japanese learners often avoid the first.",
        "**Verb + preposition.** *Someone looked after the child → The child was looked after.* *Everyone talked about her → She was talked about.*",
        "**Phrasal verbs.** *They called off the meeting → The meeting was called off.*"
      ]},
      "Verbs with no object have no passive. *Happen, arrive, die, seem, fall* and *exist* are intransitive. A few verbs with objects, such as *have, fit, resemble* and *cost*, also resist the passive. *Ten dollars is cost by the book* is not English.",
      {warn:"A common error is *The accident was happened yesterday*. *Happen* has no object, so it cannot be passive. The correct sentence is *The accident happened yesterday*."},
      {h:"Compared with Japanese"},
      "Japanese passives with *-(r)areru* ((ら)れる) include direct ones, like *Tarō wa sensei ni homerareta* (太郎は先生にほめられた, “Tarō was praised by the teacher”), which match English well. They also include the **affected passive**, used even with verbs that have no object: *Ame ni furareta* (雨に降られた, “I was rained on”, meaning the rain bothered me) and *Kodomo ni nakareta* (子どもに泣かれた, “The child cried, and it troubled me”). English cannot copy this with an intransitive verb. Learners write *I was rained* or *I was cried by my baby*. English says *I got rained on*, *We were caught in the rain*, or *My baby cried all night and I couldn’t sleep*."
    ]},
    {h:"The get-passive", body:[
      "English also has a [[hew-get-passive|get-passive]]: *get* + past participle. *He got fired. My bike got stolen. We got invited.* It is common in informal speech and less common in formal writing.",
      {table:[["","*Be*-passive","*Get*-passive"],["Tone","Neutral. Used in all styles.","Informal. Common in speech."],["Focus","The result or the state, or the event","The event or the change"],["Agent with *by*","Possible, though most have none","Rare"],["Subject","Any thing","Usually someone or something affected"],["Example","*The door was closed.*","*The door got closed.*"]]},
      "Four points help in teaching.",
      {list:[
        "**It shows an event, not a state.** *The door was closed* can mean “someone closed it” or “it was shut”. *The door got closed* is only the event.",
        "**The subject is often affected, usually badly.** Many get-passives report something unwanted: *He got fired. My bike got stolen. She got hurt.* Good news also works (*She got promoted*), but the get-passive is a common way to talk about bad luck.",
        "**It can show some responsibility.** *He got himself arrested* says that he caused it.",
        "**It needs an action or a change.** With state verbs it sounds odd: *The answer was known*, not *The answer got known*. Many *get* + participle combinations are fixed: *get married, get dressed, get lost, get used to*."
      ]},
      "The get-passive is not “incorrect”. It is informal, and writers choose it for tone."
    ]},
    {h:"When the passive is the better choice", body:[
      "The passive is a tool, not an error. It is useful in five situations.",
      {table:[["Reason","Example"],["The doer is unknown","*My bike was stolen.*"],["The doer is obvious or unimportant","*The suspect was arrested. English is spoken in many countries.*"],["The receiver is the topic","*Maria joined the company in 2020. She was promoted last year.* The second sentence keeps *she* as the topic."],["A long agent goes at the end","*The proposal was rejected by a committee of senior staff who had reviewed every budget line.*"],["A formal or impersonal style","*Samples were stored at 4 °C. Visitors are asked to sign in.*"]]},
      "Flow is a good test. Read two versions of a short paragraph.",
      {ex:"Active only:\nA famous architect designed the library. Fire destroyed it in 1950. Workers rebuilt it in 1955.\n\nWith passives:\nThe library was designed by a famous architect. It was destroyed by fire in 1950 and rebuilt in 1955.\n\nIn the second version, *the library* stays the topic, and the sentences connect.", label:"Worked example", mono:true},
      "The passive is a worse choice when the doer matters and the reader wants to know who it was, when the sentence is long and awkward (*It was decided that the report would be written*), or when a chain of passives makes the reader work. Writing guides often say “avoid the passive”. That advice is a style choice, not a grammar rule. Guides also often mislabel sentences: *It was raining* and *She was tired* are not passives."
    ]},
    {h:"Testing for a passive", body:[
      "Do not decide by looking for *was*. Use three tests.",
      {list:[
        "**Can you add *by* + a doer that fits the action?** *The roof was damaged by the storm* works. *The room was empty by the manager* does not, because *empty* is an adjective.",
        "**Can you rewrite it as an active sentence?** *Someone damaged the roof* keeps the meaning. *Someone emptied the room* is a different idea from *The room was empty*.",
        "**Can *very* come before the participle?** *Very* goes with adjectives. *The guests were very bored* works, so *bored* is acting as an adjective and describes a state. *The guests were very invited* is not English, so *invited* is a passive participle."
      ]},
      "Some sentences are ambiguous. *The shop is closed on Sundays* can be a state (it is shut) or a passive (someone closes it). Dictionaries treat many such participles as adjectives. Both analyses exist, and the tests above settle most cases."
    ]}
   ],
   try:[
    {id:"e5u8-l4-x1", type:"sort", q:"Is each sentence a passive?", buckets:["Passive","Not passive"], items:[
      {t:"“The meeting was canceled.”", b:0, why:"*Be* + past participle, with the meeting as the receiver of the action."},
      {t:"“She was reading a novel.”", b:1, why:"*Was reading* is a progressive. The subject does the action."},
      {t:"“A new bridge is being built.”", b:0, why:"A progressive passive: *is being built*."},
      {t:"“She was very tired.”", b:1, why:"*Tired* is an adjective after *was*. It describes a state."},
      {t:"“He got fired.”", b:0, why:"A get-passive: *get* + past participle."},
      {t:"“We were walking home.”", b:1, why:"A progressive. The subject does the walking."},
      {t:"“The road was closed by police.”", b:0, why:"A passive with a *by*-agent."},
      {t:"“It was raining all day.”", b:1, why:"A progressive. *Raining* is not a past participle."}
    ]},
    M("e5u8-l4-x2","What is the correct passive of *Someone has stolen my bike*?",2,[
      ["*My bike has stolen.*","The passive needs *be*: *has been stolen*."],
      ["*My bike was been stolen.*","This mixes two forms. The present perfect passive is *has been stolen*."],
      ["*My bike has been stolen.*","Right. The present perfect *has* + *been* + the participle *stolen*."],
      ["*My bike is stealing.*","This is a progressive active form and the wrong participle."]
    ]),
    {id:"e5u8-l4-x3", type:"order", q:"Put these steps in order for turning *The manager approved the plan* into a passive.", items:[
      {t:"Find the object of the active sentence: *the plan*.", why:"Only an object can become the subject of a passive."},
      {t:"Move it to the front as the new subject: *The plan …*", why:"The receiver of the action is now the subject."},
      {t:"Find the tense of the active verb: past simple.", why:"The tense will go on *be*, not on the main verb."},
      {t:"Write *be* in that tense and the past participle: *was approved*.", why:"Past simple of *be* is *was*, and the participle is *approved*."},
      {t:"Put the old subject after *by*, or drop it: *by the manager*.", why:"The agent is optional. Keep it only if the reader needs it."}
    ]},
    {id:"e5u8-l4-x4", type:"match", q:"Match each active sentence with its passive.", pairs:[
      ["They are repairing the road.","The road is being repaired.","The present progressive passive uses *is being* + participle."],
      ["Someone must clean the room.","The room must be cleaned.","A modal passive keeps the modal and uses *be* + participle."],
      ["Nobody told her.","She wasn’t told.","The negative passive uses *wasn’t* + participle."],
      ["They will announce the winner tomorrow.","The winner will be announced tomorrow.","The future passive is *will be* + participle."]
    ]},
    {id:"e5u8-l4-x5", type:"spot", q:"Hana wrote this short story. Tap each sentence that **has an error** with the passive.", ask:"has a passive error", parts:[
      {t:"The accident was happened yesterday.", flag:true, why:"*Happen* has no object, so it cannot be passive. The correct form is *The accident happened yesterday.*"}, " ", {t:"I was rained on the way home.", flag:true, why:"*Rain* has no object, so English cannot copy the Japanese affected passive. Only *rain on* someone can be passive: *I got rained on during my walk home*, or *I was caught in the rain on the way home.*"}, " ", {t:"The bridge was built in 1998.", flag:false, why:"A correct passive. The agent is not important."}, " ", {t:"My phone was stolen.", flag:false, why:"A correct passive. The doer is unknown."}
    ]},
    {id:"e5u8-l4-x6", type:"number", q:"How many of these six verbs can normally be used in a passive sentence? *arrive, build, seem, write, resemble, give*", answer:3, tol:0, unit:"verbs", why:"*Build, write* and *give* take objects, so they have passives (*The house was built*, *It was written*, *I was given a key*). *Arrive* and *seem* have no object. *Resemble* has an object but resists the passive.", wrongs:[
      {v:4, tol:0, why:"This counts *resemble*. A few verbs with objects, such as *resemble*, *have* and *fit*, do not form a passive."},
      {v:2, tol:0, why:"This misses *give*. The verb *give* has two passives (*I was given a key*, *A key was given to me*)."}
    ], hint2:"Test each verb: does it have an object in an active sentence? Can you say *X was ___ed*?"},
    M("e5u8-l4-x7","Which version of the second sentence flows best after *Maria joined the company in 2020.*?",1,[
      ["*The manager promoted her last year.*","This is grammatical, but the topic switches from *Maria* to *the manager*."],
      ["*She was promoted last year.*","Right. *She* stays the topic. The manager’s role is not important here."],
      ["*Last year somebody promoted her.*","*Somebody* adds an empty doer. English often uses the passive for this."],
      ["*She got promoted last year by the manager.*","The get-passive rarely has a *by*-agent, so this sounds odd."]
    ]),
    {id:"e5u8-l4-x8", type:"explain", q:"Mei says: “My writing teacher says never use the passive. But my chemistry textbook says *The samples were heated to 60 °C*. Which is right?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say that the advice is about style, and give a reason the passive suits a method.", model:"Both are right, because “never use the passive” is a style tip, not a grammar rule. The passive is useful when the doer is unknown, obvious or unimportant. In a method section, the reader needs to know what happened to the samples, not who did it. So *The samples were heated to 60 °C* is normal in science writing. Writing teachers warn against passives because chains of them can hide the doer and make the text heavy. I would tell Mei to use the passive when the receiver is the topic and the doer does not matter.", points:["Says that “never use the passive” is style advice, not a grammar rule","Gives a reason the passive suits the method (the doer is unimportant or obvious)","Mentions a risk of overuse (hidden doer, heavy text)","Gives a rule of thumb for choosing"]}
   ],
   apply:{
    intro:"These tasks use real texts from a news site, a textbook or a notice. Nothing needs an account.",
    tasks:[
     {t:"Find ten passives", how:[
       "Choose a news article, a science text or a set of rules. Find ten passives. Copy each one.",
       "Mark the tense or modal of each, and whether it is a *be*-passive or a *get*-passive. Does it name the doer with *by*?",
       "Count how many of the ten have a *by*-agent. Write one sentence on what you notice."
     ], write:"Sentence… form… be or get… by-agent: yes or no…"},
     {t:"Rewrite for flow", how:[
       "Write a short paragraph of four active sentences about an event, such as a trip, a repair or a project.",
       "Rewrite it twice: once with all active sentences, and once with two or three passives that keep one topic across the paragraph.",
       "Read both aloud. Which version flows better, and why? Is there a place where the passive would hurt?"
     ], write:"Version 1… Version 2… The better one is… because…"},
     {t:"Fix Japanese-style passives", how:[
       "Write English for these: *Ame ni furareta.* *Tomodachi ni kaban o torareta.* *Kodomo ni nakareta.*",
       "Say which ones can become a normal English passive (*my bag was taken*), and which need a different structure (*I got rained on*, *My baby cried all night*).",
       "Look up *get* in the Cambridge Dictionary and read the senses that mean “become”. Which of your sentences could use *get*?"
     ], write:"Japanese… my English… passive or other structure… why…"}
    ],
    proof:"A list of ten passives with notes on form and agent, two versions of one paragraph with a note on flow, and three fixed sentences with the structure used."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Changing argument structure: Causatives and passives”", note:"Look at how the book describes what happens to the object and the subject in a passive."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u8-l5", title:"Voice and responsibility: when the doer disappears", minutes:55,
   hook:{q:"A news report says: *The files were deleted.* What does the sentence tell you?", options:["That someone deleted the files, and who it was","That the files were deleted, with no word on who did it","That the files deleted themselves","That the writer does not know English well"], answer:1, reveal:"**That the files were deleted, with no word on who did it.** The sentence is true and complete in grammar. The doer is left out, and the reader cannot tell if the writer does not know, does not care or prefers not to say. This lesson looks at how English removes the doer, when that is natural, and when a reader should ask “by whom?”."},
   goals:[
     "Name five ways English can leave the doer out of a sentence",
     "Explain the phrase “mistakes were made” and why people comment on it",
     "Tell natural agentless passives from ones that avoid responsibility",
     "Rewrite a sentence so that the doer is named",
     "Teach this topic without saying that the passive is bad"
   ],
   learn:[
    {h:"The doer can disappear", body:[
      {lead:"Every action has a doer. English offers several ways to leave the doer out."},
      "Lesson 4 showed that the passive can drop the agent. An [[hew-agentless-passive|agentless passive]] is only one of the ways. Take one event: a manager deleted a file.",
      {table:[["Version","Doer shown?","What is left out"],["*The manager deleted the file.*","Yes, as subject","Nothing"],["*The file was deleted by the manager.*","Yes, in a *by*-phrase","Nothing, but the file comes first"],["*The file was deleted.*","No","The doer (agentless passive)"],["*The deletion of the file took place.*","No","The doer, now inside a noun"],["*The file got deleted.* / *The file disappeared.*","No","The doer, or the idea that there is one"]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">How visible is the doer?</text><rect class="d-sage" x="14" y="32" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="52">The manager deleted the file.</text><text class="s" x="26" y="70">doer is the subject</text><rect class="d-lup" x="14" y="88" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="108">The file was deleted by the manager.</text><text class="s" x="26" y="126">doer is in a by-phrase</text><rect class="d-gold" x="14" y="144" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="164">The file was deleted.</text><text class="s" x="26" y="182">no doer: agentless passive</text><rect class="d-rose" x="14" y="200" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="220">The deletion of the file took place.</text><text class="s" x="26" y="238">doer hidden in a noun</text><rect class="d-softf" x="14" y="256" width="312" height="48" rx="8" stroke-width="2"/><text x="26" y="276">The file disappeared.</text><text class="s" x="26" y="294">no doer at all</text><text class="s" x="170" y="322" text-anchor="middle">top: doer clear   bottom: doer gone</text></svg>', alt:"Five boxes from top to bottom. The manager deleted the file: the doer is the subject. The file was deleted by the manager: the doer is in a by-phrase. The file was deleted: no doer, an agentless passive. The deletion of the file took place: the doer is hidden in a noun. The file disappeared: no doer at all. A note says the top is clearer about the doer and the bottom has no doer.", cap:"All five can be true. They differ in how much they tell the reader about who acted."},
      "Linguists call the fourth type a **nominalization**: a verb turned into a noun (*delete → deletion*). A sentence such as *There was a failure of oversight* also names no one. Other ways are a vague subject (*The situation developed*) and a non-agentive verb (*The vase broke*, *the file disappeared*), where the verb leaves no space for a doer."
    ]},
    {h:"“Mistakes were made”", body:[
      "The best-known agentless passive in English is *mistakes were made*. It is a common phrase in political and business language, and writers use it as the standard example of a sentence that admits an error without naming anyone.",
      "One often-cited use is from US President Ronald Reagan’s State of the Union Address of January 27, 1987, about the Iran-Contra affair: “But we did not achieve what we wished, and serious mistakes were made in trying to do so.” Other speakers have used the phrase before and since, and many commentators treat it as a model of the “non-apology”. It is sometimes called the *past exonerative*, a joking grammar term for a past-tense form that clears the speaker.",
      "Look at what the sentence leaves out.",
      {table:[["Version","What the reader learns"],["*Mistakes were made.*","That mistakes happened. Not who made them."],["*I made mistakes.*","That the speaker takes the blame."],["*We made mistakes.*","That a group takes the blame."],["*Our staff made mistakes in the billing.*","Who, and in what area."],["*I made mistakes, and I will fix the billing by Friday.*","Who, what, and what follows."]]},
      "The grammar is correct in every row. The difference is in what the reader can know and ask. In the first row, the reader must ask: “Made by whom?”",
      {key:"An agentless passive is not wrong. It leaves a question open. A careful reader asks: “Who did it? Does the writer know? Would I want to know?”"}
    ]},
    {h:"Not every agentless passive hides someone", body:[
      "It would be wrong to teach that the agentless passive is dishonest. Most passives with no agent are natural. A better skill is to ask why the doer is missing.",
      {table:[["Reason the doer is missing","Example","Is it a problem?"],["The doer is unknown","*My bike was stolen.*","No. The writer does not know."],["The doer is obvious","*The suspect was arrested.* (by police)","No. Everyone knows."],["The doer does not matter","*Samples were heated to 60 °C. Rice is grown in many countries.*","No. The result or the process matters."],["The receiver is the point","*Thousands of homes were damaged.*","No. The focus is on those affected."],["The doer is known and important, and the sentence avoids naming them","*Mistakes were made. The warning was sent late.*","Yes, a reader should ask who."]]},
      "A simple check has three questions.",
      {ol:[
        "**Does the writer know who acted?** If not, the passive is honest.",
        "**Would the reader want to know?** If the reader needs the doer to judge the event or to act, the doer matters.",
        "**Is the doer responsible for something that went wrong?** The passive is most often questioned here."
      ]},
      "If the answers are yes, yes and yes, the missing doer is worth a question. If the answer to the first is no, or the doer does not matter, the passive is a fair choice. A writer who uses an agentless passive is not necessarily trying to avoid blame, and a reader should not decide so from the grammar alone.",
      "Cheska, a master’s student in regional disaster and community studies, reads incident reports for her seminar. She notices lines like *The warning was sent late* and *The gate was left open*. She does not decide that the writer is hiding something. She writes a question in the margin for each one: who sent it, who left it, and does the report say elsewhere? The grammar tells her where to look. The rest of the report tells her what happened."
    ]},
    {h:"News and policy language", body:[
      "News headlines have their own grammar, often called headlinese. They drop *be* and use the present tense: *Man shot, Three hurt in crash, Mayor questioned*. These are passives with no *be* and no agent. The space is short, and the receiver is the story.",
      "Headlines show how choice of subject changes the picture. Both of these are true descriptions of the same invented event.",
      {table:[["Headline","Who is first"],["*Pedestrian struck by car*","The pedestrian. A car, not a driver, is the agent."],["*Driver hits pedestrian*","The driver."],["*Cyclist injured in collision*","The cyclist. The collision has no doer."],["*Two vehicles collide*","The vehicles. The people disappear."]]},
      "Reporters often do not know who did something when they publish, so a passive can be accurate. Reporters also choose a subject for brevity and for the angle. Psychology experiments suggest that such choices can matter. In one well-known study, Fausey and Boroditsky (2010) found that English speakers gave more blame and higher fines when an accident was described with a doer (*she ignited the napkin*) than without one (*the napkin ignited*). Results depend on the wording and the case, so treat this as a reason to read carefully, not a law.",
      "Policy and corporate language use the same tools. *Decisions will be reviewed*, *Layoffs are expected* and *An error occurred* tell the reader what will happen and not who decides. A reader can ask who will review, who expects the layoffs and who made the error.",
      "The active voice can also hide things. *The company let 200 workers go* and *The police opened fire* are active, and each one chooses words that soften or limit what the reader learns. A euphemism hides a doer or a harm with a gentler word, with no passive needed. Voice is one tool among many."
    ]},
    {h:"Rewriting, and teaching it fairly", body:[
      "To name the doer, follow four steps.",
      {ol:[
        "Ask “who?” of the verb. *The warning was sent late.* Who sent it?",
        "Find the answer in the text or in your own knowledge. If you do not have one, say so: *We do not yet know who sent the warning.*",
        "Make the doer the subject and use an action verb: *The duty officer sent the warning late.*",
        "Add what comes next, if it matters: *We will change the checklist by Friday.*"
      ]},
      {table:[["Original","Rewrite"],["*Mistakes were made.*","*My team made mistakes in the billing.*"],["*The deadline was missed.*","*We missed the deadline because the data arrived late.*"],["*There was a failure of oversight.*","*Nobody checked the numbers before we published.*"],["*I’m sorry if anyone was upset.*","*I am sorry that I upset you.*"],["*The gate was left open.*","*A guard left the gate open.* or *We do not know who left the gate open.*"]]},
      "The rewrites are not always better. A writer who does not know the doer, or who must protect a name for a good reason, should say that and not guess. Some documents, such as safety reports, use roles (*the shift supervisor*) instead of names.",
      {h:"Teaching this well"},
      {list:[
        "**Do not teach “passive = bad”.** Teach the question: “Who did it, and does the reader need to know?”",
        "**Use real or realistic texts.** Ask learners to compare two versions and say what each tells the reader.",
        "**Include fair uses.** Show methods, instructions and unknown doers, so that learners hear that the passive is a normal tool.",
        "**Look at all the ways to remove a doer.** A learner who only avoids the passive can still write *A failure occurred*.",
        "**Keep it about writing and reading, not about people.** A sentence can be vague for many reasons, and you cannot know the reason from the grammar."
      ]}
    ]}
   ],
   try:[
    {id:"e5u8-l5-x1", type:"sort", q:"Does each sentence name the doer?", buckets:["Doer named","Doer not named"], items:[
      {t:"“The file was deleted by the manager.”", b:0, why:"The doer is in the *by*-phrase."},
      {t:"“The file was deleted.”", b:1, why:"An agentless passive. We do not learn who."},
      {t:"“The file disappeared.”", b:1, why:"The verb has no doer at all."},
      {t:"“We deleted the file.”", b:0, why:"The doer is the subject: *we*."},
      {t:"“There was a deletion.”", b:1, why:"The verb became a noun, and the doer went with it."},
      {t:"“A technician deleted the file.”", b:0, why:"The doer is the subject."},
      {t:"“The file got deleted.”", b:1, why:"A get-passive without an agent."},
      {t:"“The file was deleted by mistake.”", b:1, why:"*By mistake* is not a doer. It says how it happened."}
    ]},
    M("e5u8-l5-x2","A report says: *The deadline was missed.* Which rewrite names the doer and keeps the meaning?",2,[
      ["*The deadline was not met by anyone.*","This is still a passive. *By anyone* does not say who."],
      ["*A missed deadline happened.*","This is a nominalization with no doer."],
      ["*Our team missed the deadline.*","Right. The doer is the subject, and the verb is an action."],
      ["*The deadline passed.*","The verb *pass* has no doer, so this leaves out who missed it."]
    ]),
    {id:"e5u8-l5-x3", type:"match", q:"Match each sentence with the way the doer is removed.", pairs:[
      ["The warning was sent late.","An agentless passive","*Be* + participle with no *by*-phrase."],
      ["There was a failure of oversight.","A nominalization","The verb (*oversee*, *fail*) became a noun, and no doer is named."],
      ["The vase broke.","A non-agentive verb","The verb *break* here has no room for a doer."],
      ["The situation developed.","A vague subject","*The situation* takes the place of a person or group."]
    ]},
    {id:"e5u8-l5-x4", type:"spot", q:"Cheska is reading an invented incident report about a storm. Tap each sentence where **a person or group must have acted, but is not named**.", ask:"leaves out a doer who must exist", parts:[
      {t:"The gate was left open.", flag:true, why:"A person left it open, and the report does not say who."}, " ", {t:"Rain fell for two days.", flag:false, why:"No person is needed. Rain is a natural event."}, " ", {t:"The warning was sent late.", flag:true, why:"Someone sent it. The report does not say who or why it was late."}, " ", {t:"The river rose by two meters.", flag:false, why:"A natural event with no person needed."}, " ", {t:"Residents were told to stay home.", flag:true, why:"Someone told them. The report does not say who."}
    ]},
    {id:"e5u8-l5-x5", type:"number", q:"How many of these six sentences do **not** name the doer? 1) The window was broken. 2) Mei broke the window. 3) The window broke. 4) The window was broken by a ball. 5) There was a breakage. 6) A ball broke the window.", answer:3, tol:0, unit:"sentences", why:"Sentences 1, 3 and 5 do not name the doer. In sentence 1, the passive has no agent. In 3, *broke* has no doer. In 5, the verb became a noun. Sentences 2, 4 and 6 name Mei or the ball.", wrongs:[
      {v:2, tol:0, why:"This misses one. Sentence 5 changes the verb *break* into the noun *breakage*, so the doer also disappears."},
      {v:4, tol:0, why:"This counts sentence 4 as a doer-less sentence. *By a ball* is a *by*-phrase that names the doer."}
    ], hint2:"A ball is a doer here, because it caused the breaking. A *by*-phrase names it."},
    {id:"e5u8-l5-x6", type:"order", q:"Put these steps in order for rewriting a sentence so that it names the doer.", items:[
      {t:"Ask “who?” of the verb in the original sentence.", why:"The question tells you what is missing."},
      {t:"Find the answer in the text, or say that it is not known.", why:"Do not guess. If the doer is unknown, an honest sentence says so."},
      {t:"Make the doer the subject with an action verb.", why:"The subject position gives the doer the most visibility."},
      {t:"Add what happens next, if the reader needs it.", why:"A good rewrite often includes a fix or a next step."},
      {t:"Read it again and ask if the active version is clearer and fair.", why:"The aim is a clear, fair sentence, not the active voice for its own sake."}
    ]},
    M("e5u8-l5-x7","A lab report says: *The samples were stored at 4 °C overnight.* What is the best comment?",0,[
      ["This is a natural passive. The method matters, and the person who stored the samples does not.","Right. The doer is unimportant here, so the agentless passive is a fair choice."],
      ["This hides who stored the samples and should always be rewritten as *I stored*.","A method section does not need the doer. The rule “always name the doer” is too strong."],
      ["This is not a passive, because there is no *by*-phrase.","A passive does not need a *by*-phrase. *Be* + participle is enough."],
      ["This is wrong, because science texts should not use *were*.","Science writing often uses the passive for methods."]
    ]),
    {id:"e5u8-l5-x8", type:"explain", q:"Mei says: “*Mistakes were made* is a grammatical sentence. So why do people complain about it?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what the sentence leaves out, and when that matters.", model:"The sentence is grammatical, and people complain about what it leaves out. It is an agentless passive, so it says that mistakes happened and does not say who made them. When the speaker is the person who made the mistakes, or is responsible for them, leaving out the doer can sound like a way to avoid blame. A reader should ask: made by whom? The same grammar is fine when the doer is unknown or unimportant, so the complaint is about the situation and not the passive itself.", points:["Says that the sentence is grammatical","Says that the doer is missing and the reader cannot tell who made the mistakes","Says that the problem is when the speaker is responsible, or the doer is known and matters","Says that the agentless passive is not always a problem"]}
   ],
   apply:{
    intro:"These tasks use short real texts and the three questions from the lesson. Nothing needs an account.",
    tasks:[
     {t:"Rewrite three headlines", how:[
       "Find three news headlines that have no named doer. Copy them.",
       "For each one, write: who the doer might be, whether the writer probably knows, and what you would need to check.",
       "Rewrite one headline so that it names the doer. Write one sentence on whether the rewrite is fair with the facts available."
     ], write:"Headline… possible doer… does the writer know… my rewrite… is it fair…"},
     {t:"Rewrite an official notice", how:[
       "Write or find a short notice with three or four passive sentences, such as *Your account has been closed* or *Decisions will be reviewed*.",
       "Mark each passive. Say who the doer is. Rewrite the notice with the doers named and one next step for the reader.",
       "Compare the two versions. Which one is clearer? Is there any sentence where the passive was the better choice?"
     ], write:"Original… doers… my rewrite… the better version is…"},
     {t:"Look up an expression and its history", how:[
       "Search for the phrase *mistakes were made* and read two articles that discuss it. Choose articles from news sites or a university site.",
       "Note two facts that the articles agree on. Are the quotes given in full, with a date and place?",
       "Write a short note: how do the articles describe the grammar, and do they say anything that this lesson does not?"
     ], write:"Two facts… quote with date… my note on the grammar…"}
    ],
    proof:"Three rewritten headlines with notes on what you would need to check, an official notice rewritten with named doers, and a short note on how two articles discuss *mistakes were made*."
   },
   read:[
    {book:"eling", where:"The Semantics chapter, section “Events and thematic roles”, and the Pragmatics chapter, section “Conversational implicatures”", note:"The book has no section on voice and blame. The first section explains the agent and other roles in an event. The second shows how hearers infer what a speaker leaves out."}
   ]
  }
  ],
  checkpoint:["e5u8-q03","e5u8-q06","e5u8-q10","e5u8-q14","e5u8-q19","e5u8-q22","e5u8-q25","e5u8-q29","e5u8-q32","e5u8-q38","e5u8-q40","e5u8-q44"],
  cpBank:[
   Q("e5u8-cp01","e5u8-l1",1,"Which statement about modal verbs is correct?",2,[
     ["They add *-s* in the third person: *she cans*.","Modals do not take *-s*: *she can*."],
     ["They are followed by *to* and the base verb: *must to go*.","A modal is followed by the base form with no *to*."],
     ["They have no *-s* form and are followed by a base verb: *She can swim*.","Right. These are two form tests for modals."],
     ["They need *do* in questions: *Do she can swim?*","Modals move to the front on their own: *Can she swim?*"]]),
   Q("e5u8-cp02","e5u8-l1",3,"Ana sees a coat on a chair and says: “Tomás must be here.” What kind of meaning does *must* have?",1,[
     ["Deontic: Tomás is required to be here.","No one is giving an order. Ana is judging from evidence."],
     ["Epistemic: Ana concludes that Tomás is here.","Right. The coat is evidence, and *must* expresses a conclusion."],
     ["Dynamic: Tomás is able to be here.","Dynamic meaning is about ability, and the sentence is not about ability."],
     ["It has no modal meaning.","*Must* always has a modal meaning."]]),
   Q("e5u8-cp03","e5u8-l2",2,"What does *You don’t have to sign* mean?",0,[
     ["Signing is not required.","Right. *Don’t have to* says there is no obligation."],
     ["Signing is forbidden.","That is *You mustn’t sign*."],
     ["It is impossible to sign.","That would be *You can’t sign*."],
     ["You should sign, but you may refuse.","*Should* gives advice. It is not the meaning of *don’t have to*."]]),
   Q("e5u8-cp04","e5u8-l2",3,"A learner tells a classmate: “You’d better stop talking.” Why might the classmate be upset?",3,[
     ["The grammar is wrong, because *had* cannot be used with *better*.","*Had better* is a standard form."],
     ["*Had better* is a request for permission.","It is advice with a warning."],
     ["*Had better* is a very polite form, and it sounds old-fashioned.","It is not especially polite or old-fashioned."],
     ["*Had better* implies that something bad may follow, so it sounds like a warning or order.","Right. Between equals it can sound rude."]]),
   Q("e5u8-cp05","e5u8-l3",1,"Which sentence is a real conditional about the future?",1,[
     ["*If I had time, I would help.*","This is unreal. It means I do not have time."],
     ["*If it rains tomorrow, we’ll stay home.*","Right. It uses the present simple in the *if* clause and *will* in the result."],
     ["*If I had known, I would have come.*","This is an unreal past conditional."],
     ["*If I were you, I would wait.*","This is an unreal present conditional."]]),
   Q("e5u8-cp06","e5u8-l3",2,"What is the main reason for the past form in *If I had a car*?",2,[
     ["The event happened in the past.","The time is present: I do not have a car now."],
     ["The speaker is being polite.","Politeness is not the reason in this sentence."],
     ["The past form shows distance from reality.","Right. The form is past, and the meaning is imagined."],
     ["It is a spelling variant of *have*.","*Had* is a different tense form, not a spelling variant."]]),
   Q("e5u8-cp07","e5u8-l3",3,"Hana writes: “If I will see Mei tomorrow, I’ll tell her.” Which correction is best?",0,[
     ["*If I see Mei tomorrow, I’ll tell her.*","Right. The present simple stands for future time inside an *if* clause."],
     ["*If I would see Mei tomorrow, I’ll tell her.*","*Would* does not fix it. The condition needs the present simple."],
     ["*If I saw Mei tomorrow, I’ll tell her.*","The past form is unreal and does not match the result."],
     ["No correction is needed.","In this sentence *will* does not mean willingness, so the sentence is not standard."]]),
   Q("e5u8-cp08","e5u8-l4",2,"Which sentence is a passive?",3,[
     ["*They were walking home.*","This is a progressive. The subject does the walking."],
     ["*She was very tired.*","*Tired* is an adjective here."],
     ["*It was raining.*","This is a progressive."],
     ["*The letter was posted yesterday.*","Right. *Was* + the participle *posted*, with the letter as the receiver."]]),
   Q("e5u8-cp09","e5u8-l4",3,"A student writes “My baby was cried all night.” What is the best explanation?",1,[
     ["*Cry* is a transitive verb, so it must be passive.","*Cry* has no object here, so it cannot be passive."],
     ["*Cry* has no object, so it has no passive. Say *My baby cried all night*.","Right. The affected passive of Japanese does not copy into English."],
     ["The sentence needs *by*: *My baby was cried by all night*.","*By* does not repair it."],
     ["The sentence is correct in informal English.","It is not used in standard English."]]),
   Q("e5u8-cp10","e5u8-l5",1,"Which description fits an agentless passive?",2,[
     ["A passive that names the doer in a *by*-phrase","That has an agent."],
     ["An active sentence with no object","That is an intransitive clause."],
     ["A passive with no *by*-phrase, so the doer is not named","Right. *The file was deleted* is an example."],
     ["A sentence with no verb","It must have a verb."]]),
   Q("e5u8-cp11","e5u8-l5",2,"Which sentence leaves the doer unnamed?",0,[
     ["*The decision was made last week.*","Right. It is an agentless passive."],
     ["*The board made the decision last week.*","The board is the doer."],
     ["*The decision was made by the board.*","The *by*-phrase names the doer."],
     ["*We made the decision last week.*","*We* is the doer."]]),
   Q("e5u8-cp12","e5u8-l5",3,"A teacher says: “The agentless passive is always a way to avoid blame.” What is the best reply?",1,[
     ["That is true, because the doer is missing.","A missing doer has many reasons, such as unknown or unimportant doers."],
     ["Not always: the doer may be unknown, obvious or unimportant, so ask who, and ask if the reader needs to know.","Right. The grammar alone does not show the writer’s reason."],
     ["That is false, because passives never leave out the doer.","Most passives do leave the doer out."],
     ["That is true only in news.","The same question applies in every kind of text."]])
  ],
  codex:[
   {id:"modal-verbs-english", title:"Modal verbs and modality in English", aka:["modals","epistemic and deontic","can, may, must"], tags:["grammar","modality","verbs"],
    summary:"Modal verbs express how sure the speaker is, what is allowed or required, and what the subject can do. Most modals have more than one of these meanings.",
    levels:{
     starter:[
      "**Modal verbs** are *can, could, may, might, will, would, shall, should* and *must*. They are helper verbs. They have no *-s* in the third person, and the next verb is a base form without *to*: *She can swim.*",
      "They express **modality**: the speaker’s view of the action. Three families of meaning cover most uses.",
      {list:[
        "**Epistemic**: how sure the speaker is. *She must be home. It may rain.*",
        "**Deontic**: what is required or allowed. *You must sign. Students may leave.*",
        "**Dynamic**: what the subject is able or willing to do. *Mei can swim.*"
      ]},
      "One modal often has several meanings. *Must* can be a rule (*You must register*) or a conclusion (*He must be tired*). The situation, and some grammar clues, tell you which one it is.",
      "A useful test is to replace the modal with a longer phrase: *It is likely that…*, *You are required to…*, *… is able to…*. The phrase that keeps the meaning shows the family.",
      {key:"A modal word does not carry one fixed meaning. Ask what the sentence is doing: guessing, ruling, or describing an ability."}
     ],
     builder:[
      "Modals form a closed class of auxiliary verbs. They have the NICE properties (Unit 6): they take *n’t* directly, invert in questions, appear in short answers (*Yes, she can*) and take no *do*. They have no *to*-infinitive, no *-ing* form and no third-person *-s*. English fills the gaps with semi-modals: *be able to, have to, be going to*, *had better*, *be supposed to*.",
      {table:[["Modal","Common meanings"],["can","ability, permission, general possibility"],["could","past ability, polite request, possibility"],["may","permission (formal), possibility"],["might","possibility (weaker), soft suggestion"],["will / would","prediction, willingness, habit (would), politeness"],["shall","offers (*Shall I…?*), legal duty"],["should / ought to","advice, expectation"],["must","obligation, strong conclusion"]]},
      "Modals with *have* + participle refer to the past: *must have left* (a conclusion), *should have called* (an unmet duty), *could have won* (an unreal chance). Epistemic meanings often take a state verb or a progressive (*must be tired, must be working*). Deontic meanings usually take action verbs (*must wait*).",
      "Negatives need care. *Can’t* is the usual epistemic negative of *must* (*He can’t be home*). *Mustn’t* forbids. In American English, *must not* is also used for a weaker negative conclusion (*He must not be home*). *Don’t have to* says there is no requirement. *May not* can mean either “perhaps not” or “not allowed”.",
      "For one completed event in the past, English prefers *was able to* to *could*: *I was able to finish*. Teaching tip: avoid the myths that *might* is the past of *may*, and that *Can I…?* is wrong for permission."
     ],
     pro:[
      "Linguists also use the terms *root modality* (deontic and dynamic together) and *epistemic modality*. Some grammars treat dynamic modality with deontic, as “root”. Huddleston and Pullum’s descriptive grammar uses the labels epistemic, deontic and dynamic and notes that the same modal can show all three.",
      "Epistemic and root readings differ in scope and in what they allow. Epistemic modals are usually about the whole proposition and sit outside tense: *She must have left* is a present judgment about a past event. Root modals are usually about the subject or the situation and can interact with tense: *He had to leave*. This difference explains why *must* has *had to* as a past in the deontic reading, and no matching past in the epistemic one.",
      "The pairs *can/could, may/might, will/would, shall/should* come from present and past forms of the same verbs. In current English the past forms have mostly developed their own meanings, such as tentativeness and politeness. *Might* is more than a past of *may*. In indirect speech and conditionals, the old past/present relation still appears (*She said she would come*).",
      "Modal strength is a matter of degree. *Must, will* and *can’t* are at the strong end of the epistemic scale. *Should* and *ought to* come lower. *May, might* and *could* express possibility, and the differences among them are small and depend on speaker and context. Corpus studies show that regional usage varies. For example, *shall* is less common in American English than in British English, and *needn’t* is mainly British.",
      "Cross-linguistic work shows that many languages mark modality with verb endings or particles instead of auxiliary verbs. Japanese *-kamoshirenai, -ni chigainai* and *-nakereba naranai* are examples. Translators need to work out the family before they choose an English modal."
     ]},
    related:["obligation-politeness-english","conditionals-english"], read:[{book:"eling", where:"The Semantics chapter, section “Linguistic meaning”"}],
    sources:[{t:"Cambridge Dictionary: English Grammar Today", url:"https://dictionary.cambridge.org/"},{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"obligation-politeness-english", title:"Must, have to, should, had better and politeness", aka:["obligation and advice","had better","you might want to"], tags:["grammar","modality","politeness"],
    summary:"The words for duty and advice differ in strength and tone. Must and have to differ most in their negatives, and had better carries a warning.",
    levels:{
     starter:[
      "English has a range of words for telling people what to do. In order of strength: *might want to, could* (soft suggestion), *should* (advice), *need to, have to* (obligation from the situation), *must* (strong obligation, common in rules), *had better* (advice with a warning).",
      "The most important differences are these. *Must not* means “forbidden”. *Don’t have to* means “not required”. *Had better* says what to do and suggests that something bad will follow if you do not, so it can sound like a threat. *You should have called* is mild but can still be criticism.",
      "In everyday speech, especially in American English, *have to* is much more common than *must* for obligation. *Must* is common in signs and rules: *Visitors must sign in.*",
      "For polite requests, the more indirect the form, the more polite it usually is: *Open the window* < *Can you…?* < *Could you…?* < *Would you mind…?* < *I was wondering if you could…*",
      {key:"Choose the word for the relationship, not only the meaning. The same duty can be said gently or sharply."}
     ],
     builder:[
      "**Must and have to.** The old rule says *must* comes from the speaker and *have to* from outside. It is a tendency only. The reliable differences are in form: *must* has no past, future or infinitive (use *had to, will have to, to have to*), and the negatives differ in meaning. *Have to* is the normal word in speech. In epistemic use, *must be* and *has to be* both appear (*That has to be Mia*).",
      "**Should and ought to.** They give advice (*You should rest*) and state expectations (*The bus should be here soon*). With *have* + participle, they say a duty was not met: *You should have told me.*",
      "**Had better.** The form is *had/’d better* + base verb, with present or future meaning, and *had better not* in the negative. First-person uses (*I’d better go*) are neutral. With *you*, it warns. From a boss or a parent it can be a threat. Japanese *-ta hō ga ii* (〜たほうがいい) is common, fairly soft advice, so *should* is usually a better translation than *had better*, which is stronger.",
      "**Might and could as softeners.** *You might want to check the figures* is often an instruction in disguise. Listeners from other cultures may read *might* literally. When you teach or interpret, tell learners what the hedge usually means.",
      "**Politeness.** Indirectness, past forms (*could, would*) and questions about the listener’s feelings (*Would you mind…*) raise politeness. Too much indirectness in an emergency or a safety instruction can hide the message."
     ],
     pro:[
      "Geoffrey Leech and colleagues compared matched corpora of written British and American English from 1961 and the early 1990s (see Leech, Hundt, Mair and Smith, *Change in Contemporary English*, 2009). *Must* fell by about 30 percent in both varieties, *shall* fell further, and *need to* more than doubled. *Have to* changed little in writing. Descriptive grammars read this as a long change in progress and not as an error. In legal and regulatory writing, *shall* remains common for duties, though US plain-language guidance recommends *must* for requirements and advises against *shall*.",
      "*Must* and *have to* also differ in how they interact with other grammar. *Must* is a modal and takes the NICE properties directly. *Have to* is a semi-modal and behaves like an ordinary verb in questions and negatives (*Do I have to…? I don’t have to…*). This is why the negatives diverge: *mustn’t* negates the action (it is forbidden), and *don’t have to* negates the obligation (it is not required).",
      "The warning in *had better* can be described as a conversational implicature, in the sense of Grice: the listener infers a consequence that the speaker does not state. Some grammars treat the warning as part of the meaning of *had better* itself. Either way, the threat comes from who controls the consequence. That explains why *I’d better* is neutral and *you’d better* depends on rank.",
      "Politeness work by Brown and Levinson describes indirect requests as strategies that save the listener’s face. Modals are a main tool: *could* and *would* mark distance, and *might want to* turns an instruction into a suggestion. The same forms are read differently across cultures and workplaces, so interpreters and teachers should state the intended force as well as the literal form.",
      "A caution for translators: Japanese politeness often shows up in the verb ending and in the choice of *-te kudasai*, *-te itadakemasu ka* and so on. The English translation of each depends on the relationship, and the match with modals is not one to one."
     ]},
    related:["modal-verbs-english"], read:[{book:"eling", where:"The Pragmatics chapter, sections “Conversational implicatures” and “Illocutionary meaning”"}],
    sources:[{t:"Federal Plain Language Guidelines: Use “must” to indicate requirements (plainlanguage.gov)", url:"https://www.plainlanguage.gov/guidelines/conversational/use-must-to-indicate-requirements/"},{t:"Geoffrey Leech, Recent grammatical change in English (Lancaster University)", url:"https://lancaster.ac.uk/fass/projects/corpus/ZJU/xpapers/Leech_grammatical_change.pdf"},{t:"Corpus of Contemporary American English (English-Corpora.org)", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"conditionals-english", title:"Conditionals: real, unreal, mixed", aka:["if clauses","zero, first, second and third conditional","if I were"], tags:["grammar","conditionals","tense"],
    summary:"Conditionals are best described by meaning: real or unreal, and the time they refer to. The numbered labels are a shortcut that misses mixed cases.",
    levels:{
     starter:[
      "A conditional sentence says that one thing depends on another: *If it rains, we’ll stay home.* The *if* part is the condition, and the other part is the result.",
      "Ask two questions. Is the situation **real** (possible, as far as the speaker knows) or **unreal** (imagined or untrue)? And what time does it refer to?",
      {list:[
        "**Real, general:** *If you heat ice, it melts.* (zero)",
        "**Real, future:** *If it rains tomorrow, we’ll stay home.* (first)",
        "**Unreal, present or future:** *If I had a car, I would drive you.* (second)",
        "**Unreal, past:** *If I had left earlier, I would have caught the train.* (third)"
      ]},
      "In unreal conditionals, English uses a past form to show distance from reality, not to show past time. *If I had a car* is about now.",
      "Use the present simple in an *if* clause for the future: *If it rains tomorrow*, not *If it will rain tomorrow*.",
      {key:"The labels first, second and third help you start. Meaning (real or unreal, and time) explains every case, including mixed ones."}
     ],
     builder:[
      "**Real conditionals** treat the condition as open. A past form can still be real: *If she was at the party, I didn’t see her* does not say she was not there. *If* suggests uncertainty, and *when* suggests certainty: *Call me when you arrive.*",
      "**Unreal conditionals** use *would, could* or *might* in the result. The *if* clause uses *were* or a past form (present or future time) or the past perfect (past time). The result can be *would have* + participle for the past.",
      "**Mixed conditionals** combine times: *If I had taken that job, I would be living in Osaka now* (past condition, present result). *If I were taller, I would have joined the team* (present state, past result).",
      "***If* + *will*** is not allowed for the time of the condition, but it is fine in these cases: willingness (*If you’ll wait here…*), stressed insistence (*If you will eat so much…*), a prediction about a later result (*If it will help, I’ll do it*) and when *if* means *whether* (*I don’t know if it will rain*).",
      "***Were* or *was*?** *If I were you* is traditional and the safer choice in formal writing. *If I was you* is common in speech. For *you, we, they*, only *were* is used. In a real past condition, only *was* is possible. Formal inversion: *Were I to leave…*, *Had I known…*"
     ],
     pro:[
      "The numbered system comes from teaching grammar. Huddleston and Pullum separate **open** conditionals (where the condition may be true) from **remote** ones (where it is counter to fact or unlikely) and treat the past form in remote conditionals as a marker of remoteness, which is also used for politeness (*Could you help?*) and for wishes. This explains why the same form appears in *If I had a car*, *I wish I had a car* and *Could I ask something?*",
      "The second conditional covers a range from impossible (*If I were a bird*) to unlikely (*If you won the lottery*) to polite hypotheticals (*If you’d like to sit down, I’ll bring a chair*). A rule that says “second = impossible” is therefore too strong.",
      "The past perfect in the third conditional adds a second step of remoteness. The result clause can use *would have, could have* or *might have* and can also use the mixed form *would be* for present results.",
      "*If … will* is explained by what *will* means. In the willingness use, *will* is a dynamic modal and is not about time. In *If it will help, I’ll do it*, *will* expresses a prediction about the condition itself (“if it turns out to help”), which is why the sentence is acceptable. The rule “no *will* in an *if* clause” is a useful simplification of the ban on *will* for future time in the condition.",
      "*Were* in unreal conditions is a remnant of the English subjunctive. Today *was* competes with *were* for singular subjects, and both appear in print. Corpus-based grammars report that *were* is more frequent in writing and in fixed expressions (*If I were you*), and *was* appears more in speech. Other conditional links include *unless, as long as, provided that* and *in case*, which usually means “because of the chance that” (*Take an umbrella in case it rains*)."
     ]},
    related:["modal-verbs-english"], read:[{book:"eling", where:"The Semantics chapter, section “Linguistic meaning”"}],
    sources:[{t:"Cambridge Dictionary: English Grammar Today", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster: Usage notes", url:"https://www.merriam-webster.com/"},{t:"Google Books Ngram Viewer", url:"https://books.google.com/ngrams"}], checked:"2026-11"},

   {id:"passive-voice-english", title:"The passive and the get-passive", aka:["active and passive","be + past participle","got fired"], tags:["grammar","voice","verbs"],
    summary:"The passive makes the receiver of the action the subject, with be and a past participle. The get-passive is its informal relative. Both leave the doer out in most uses.",
    levels:{
     starter:[
      "**Voice** is the choice of subject. In an **active** sentence, the subject is the doer: *The storm damaged the roof.* In a **passive** sentence, the subject is the receiver: *The roof was damaged (by the storm).*",
      "The passive uses *be* + a past participle (*damaged, taken, written*). The *be* carries the tense: *is built, was built, has been built, will be built, must be built*.",
      "The doer is optional. Most passives do not name it.",
      "Only verbs with an object can be passive: *The report was written.* Verbs such as *happen, arrive* and *seem* cannot: *The accident was happened* is wrong.",
      "The **get-passive** uses *get* + participle: *He got fired. My bike got stolen.* It is informal and shows an event.",
      {key:"Use the passive when the doer is unknown, obvious or unimportant, or when the receiver is the topic. It is a normal tool, not an error."}
     ],
     builder:[
      "To build a passive: move the object to the subject; write *be* in the tense of the active verb; add the past participle; drop the old subject or put it after *by*. Examples: *They are repairing the road → The road is being repaired.* *Someone should have told her → She should have been told.*",
      "Verbs with two objects have two passives (*I was given a key. A key was given to me.*). English also allows passives of verb + preposition (*She was talked about*) and phrasal verbs (*The meeting was called off*).",
      "The get-passive suggests that the subject was affected, and it often involves a change or an unexpected event, very often an unwanted one (*got fired, got stolen, got hurt*). It rarely has a *by*-agent. Many *get* + participle phrases are fixed (*get married, get lost*). The sentence *The door was closed* can describe an event or a state, and *The door got closed* is only an event.",
      "Do not decide by looking for *was*. A progressive (*was walking*) and an adjective (*was tired*) are not passives. Tests: can you add *by* + a fitting doer, and can you rewrite it as an active sentence with the same meaning?",
      "For Japanese learners, remember that Japanese *-(r)areru* includes an affected passive with intransitive verbs (*Ame ni furareta*). English cannot copy it: use *I got rained on* or *I was caught in the rain*."
     ],
     pro:[
      "The passive is usually described as a change in argument structure. The object of the active clause becomes the subject, the old subject becomes an optional *by*-adjunct, and the verb takes a *be* + participle form. Huddleston and Pullum separate this **be-passive** from the **get-passive**.",
      "Corpus studies find that passives are much more frequent in academic and news writing than in conversation, and that most passives have no *by*-phrase. When a *by*-phrase is present, it often carries new or heavy information (end focus and end weight), which links the passive to information flow (Unit 10).",
      "Some verbs resist the passive for semantic reasons: stative verbs of possession and similarity (*have, resemble, fit, lack*) and verbs whose object is not affected. Some sentences with a participle after *be* are ambiguous between a dynamic passive and a stative reading (*The shop is closed*), and many participles are adjectives (*very tired, quite broken*).",
      "The get-passive appears more in informal speech and in reports of events that affect the subject. Analysts note that it often suggests that the subject had some involvement (*He got himself arrested*) or was affected in a way the speaker has feelings about.",
      "Style advice that says “avoid the passive” treats a tool as a fault. Guides often mislabel sentences as passive that are not. A useful teaching rule is to ask who the doer is and whether the reader needs the name."
     ]},
    related:["agentless-passive-responsibility","modal-verbs-english"], read:[{book:"eling", where:"The Syntax chapter, section “Changing argument structure: Causatives and passives”"}],
    sources:[{t:"Cambridge Dictionary: English Grammar Today", url:"https://dictionary.cambridge.org/"},{t:"Purdue Online Writing Lab", url:"https://owl.purdue.edu/owl/"},{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"agentless-passive-responsibility", title:"Agentless passives and responsibility", aka:["mistakes were made","past exonerative","hiding the doer"], tags:["grammar","voice","discourse"],
    summary:"An agentless passive leaves the doer out. That is natural when the doer is unknown or unimportant, and a reader should ask who when the doer is known and responsible.",
    levels:{
     starter:[
      "Every action has a doer, and English has several ways to leave the doer out. An **agentless passive** has no *by*-phrase: *The file was deleted.* A **nominalization** turns the verb into a noun: *There was a deletion.* A non-agentive verb has no doer at all: *The file disappeared.*",
      "These forms are not wrong. Use them when the doer is unknown (*My bike was stolen*), obvious (*The suspect was arrested*) or unimportant (*Samples were heated to 60 °C*).",
      "The phrase *mistakes were made* is the standard example of the form that can avoid blame. It says that mistakes happened and does not say who made them. A reader can compare it with *I made mistakes*.",
      "A good habit is to ask three questions: Does the writer know who did it? Would the reader want to know? Is the doer responsible for something that went wrong?",
      {key:"The grammar does not show why a doer is missing. Ask “who?” and look at the rest of the text."}
     ],
     builder:[
      "US President Ronald Reagan used this phrase about the Iran-Contra affair in his State of the Union Address on January 27, 1987: “But we did not achieve what we wished, and serious mistakes were made in trying to do so.” Commentators have used the phrase, which has older uses, as a model for non-apologies. Do not claim a single origin: the phrase appears in several speeches.",
      "News headlines use a bare passive without *be* (*Man shot*) and often choose a subject that is an object or a thing (*Pedestrian struck by car*). Two headlines for one event may differ in who comes first (*Driver hits pedestrian*).",
      "To name the doer: ask “who?”, find the answer or say that it is unknown, make the doer the subject with an action verb, and add the next step. *Mistakes were made → My team made mistakes in the billing, and we will fix them by Friday.*",
      "Teach a method, not a rule. “The passive is bad” is wrong, and learners will remove fair uses. Show fair uses next to questionable ones and ask learners what each tells the reader.",
      "The active voice can hide things too, through word choice: *The company let 200 workers go* is active."
     ],
     pro:[
      "Critical discourse analysis uses the terms *agency* and *transitivity* to describe how clauses present who acts. The agentless passive, the nominalization and the intransitive (*The vase broke*) are standard tools in this analysis. Studies of news language examine how these choices vary with the people involved.",
      "Experimental work with English speakers has examined whether non-agentive descriptions of events change the blame readers assign. Fausey and Boroditsky (2010) gave readers agentive and non-agentive versions of the same accident reports. Agentive wording led to more blame and higher fines. Their non-agentive versions used intransitive verbs (*the napkin ignited*), not passives, so the result concerns leaving out the doer in general. Later replication attempts have tested the effect, and findings can differ with materials and wording, so a teacher should present this as evidence that wording can matter and not as a fixed effect.",
      "The political analyst William Schneider suggested the name *past exonerative* for this use. Wikipedia’s article on the phrase lists earlier uses than 1987, including President Grant’s 1876 message to Congress (“mistakes have been made”) and a 1973 statement by a White House press secretary during Watergate. Check any such claim in the primary source before you repeat it.",
      "A responsible reading separates three questions: what the grammar allows (a missing doer), what the context shows (is the doer known and responsible), and what the writer intends (which the grammar alone cannot show). Responsible writers in safety and quality work often use roles (*the shift supervisor*) to name responsibility without naming people.",
      "In teaching, the topic fits a lesson on source criticism: students compare versions of a sentence, ask who is missing, and look for the answer elsewhere in the text."
     ]},
    related:["passive-voice-english"], read:[{book:"eling", where:"The Pragmatics chapter, section “Conversational implicatures”"}],
    sources:[{t:"Address Before a Joint Session of Congress on the State of the Union, January 27, 1987 (Ronald Reagan Presidential Library)", url:"https://www.reaganlibrary.gov/research/speeches/012787a"},{t:"Fausey and Boroditsky, How much for a transitive? Subtle linguistic cues influence blame and punishment (Cognitive Science Society, 2010)", url:"https://escholarship.org/content/qt1582p8r0/qt1582p8r0.pdf"},{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-modal-verb", term:"Modal verb", def:"A helper verb such as *can, may, must, should* or *will*. It has no *-s* in the third person and is followed by a base verb without *to*.", codex:"modal-verbs-english"},
   {id:"hew-modality", term:"Modality", def:"The meanings a speaker adds to a sentence about how sure something is, what is allowed or required, and what someone is able to do.", codex:"modal-verbs-english"},
   {id:"hew-semi-modal", term:"Semi-modal", def:"An expression that works like a modal in meaning but like an ordinary verb in form, such as *have to, be able to* or *had better*.", codex:"modal-verbs-english"},
   {id:"hew-epistemic", term:"Epistemic meaning", def:"A modal meaning about how sure the speaker is, based on evidence: *She must be home. It may rain.*", codex:"modal-verbs-english"},
   {id:"hew-deontic", term:"Deontic meaning", def:"A modal meaning about rules, duty and permission: *You must sign. Students may leave early.*", codex:"modal-verbs-english"},
   {id:"hew-dynamic", term:"Dynamic meaning", def:"A modal meaning about what the subject is able or willing to do: *Mei can speak four languages.*", codex:"modal-verbs-english"},
   {id:"hew-conditional", term:"Conditional", def:"A sentence in which one thing depends on another, usually with *if*: *If it rains, we’ll stay home.*", codex:"conditionals-english"},
   {id:"hew-real-conditional", term:"Real (open) conditional", def:"A conditional that treats the condition as possible or true, as far as the speaker knows: *If you heat ice, it melts.*", codex:"conditionals-english"},
   {id:"hew-unreal-conditional", term:"Unreal (remote) conditional", def:"A conditional that treats the condition as imagined, untrue or unlikely. It uses a past form to show distance from reality: *If I had a car, I would drive you.*", codex:"conditionals-english"},
   {id:"hew-mixed-conditional", term:"Mixed conditional", def:"A conditional that joins two times, such as a past condition with a present result: *If I had taken that job, I would be living in Osaka now.*", codex:"conditionals-english"},
   {id:"hew-were-subjunctive", term:"Were-subjunctive", def:"The use of *were* with *I, he, she* or *it* in unreal conditions and wishes: *If I were you…* In speech, *was* is also common.", codex:"conditionals-english"},
   {id:"hew-voice", term:"Voice", def:"The grammar choice that decides which participant is the subject. In the active voice the subject is the doer. In the passive voice it is the receiver.", codex:"passive-voice-english"},
   {id:"hew-get-passive", term:"Get-passive", def:"A passive with *get* and a past participle, as in *He got fired.* It is informal and often shows a change that affects the subject.", codex:"passive-voice-english"},
   {id:"hew-agentless-passive", term:"Agentless passive", def:"A passive sentence with no *by*-phrase, so the doer is not named: *The file was deleted.*", codex:"agentless-passive-responsibility"},
   {id:"hew-agent", term:"Agent", def:"The doer of an action. In an active sentence it is usually the subject. In a passive sentence it may appear in a *by*-phrase or be left out.", codex:"passive-voice-english"},
   {id:"hew-nominalization", term:"Nominalization", def:"Turning a verb or adjective into a noun, such as *delete* into *deletion*. The doer often disappears in the noun form.", codex:"agentless-passive-responsibility"}
  ],
  bank:[
   /* ---- Lesson 1: modal verbs ---- */
   Q("e5u8-q01","e5u8-l1",1,"Which word is a modal verb?",2,[
     ["*wants*","This is an ordinary verb. It takes *-s* and *to*: *wants to go*."],
     ["*doing*","This is an *-ing* form of an ordinary verb."],
     ["*must*","Right. It has no *-s* and takes a base verb with no *to*."],
     ["*to be*","This is an infinitive, not a modal."]]),
   Q("e5u8-q02","e5u8-l1",1,"What does an epistemic modal express?",0,[
     ["How sure the speaker is about something","Right. *She must be home* and *It may rain* are examples."],
     ["What the subject is able to do","This is a dynamic meaning."],
     ["What is required or allowed","This is a deontic meaning."],
     ["When an event happened","Modals are not tense markers. Tense is shown elsewhere."]]),
   Q("e5u8-q03","e5u8-l1",1,"In *Mei can speak four languages*, what kind of meaning does *can* have?",3,[
     ["Epistemic: a conclusion","Nobody is concluding anything from evidence."],
     ["Deontic: permission","No one is giving permission. It is about Mei’s skill."],
     ["Deontic: a rule","There is no rule involved."],
     ["Dynamic: ability","Right. It describes what the subject can do."]]),
   Q("e5u8-q04","e5u8-l1",2,"What does *He can’t be at home* usually mean?",1,[
     ["He is not allowed to be at home.","That is deontic, and it is usually said with *mustn’t* or *can’t* about a rule."],
     ["I am sure he is not at home.","Right. This is the epistemic negative of *must*."],
     ["He is not able to be at home.","*Be at home* is not an ability, so this is unlikely."],
     ["He does not have to be at home.","That would be *doesn’t have to*."]]),
   Q("e5u8-q05","e5u8-l1",2,"A sign says: *You don’t have to wear a tie.* What does it mean?",2,[
     ["Wearing a tie is forbidden.","That would be *You mustn’t wear a tie*."],
     ["You should wear a tie.","*Should* gives advice, which is not what the sign says."],
     ["Wearing a tie is not required.","Right. *Don’t have to* removes the obligation. You may still wear one."],
     ["You are unable to wear a tie.","The sign is about rules, not ability."]]),
   Q("e5u8-q06","e5u8-l1",3,"Ana sees an empty desk and says: “Tomás must have left.” Which description fits?",0,[
     ["An epistemic conclusion about the past","Right. *Must have* + participle is a conclusion drawn from evidence."],
     ["A deontic rule: Tomás was required to leave","No rule is stated. Ana is judging from the empty desk."],
     ["A dynamic ability: Tomás was able to leave","This sentence is not about ability."],
     ["A future prediction","*Must have* is about a past event."]]),
   Q("e5u8-q07","e5u8-l1",2,"Which statement about *might* is most accurate?",3,[
     ["It is always the past tense of *may*.","In current use, *might* is mostly about possibility now or later, not the past."],
     ["It is incorrect in formal writing.","It is common in formal writing."],
     ["It always means “permission”.","Permission is usually *may* or *can*."],
     ["It expresses possibility, often a little weaker than *may*, and can soften a suggestion.","Right. The difference from *may* and *could* is small."]]),
   Q("e5u8-q08","e5u8-l1",3,"Hana says: “My teacher told me *Can I sit here?* is wrong, because *can* means ability.” What is the best reply?",2,[
     ["She is right, because *may* is the only modal for permission.","*Can* is used for permission in everyday English."],
     ["She is right in formal writing and speech.","Even in formal situations, many speakers use *can*. *May* sounds more formal."],
     ["*Can* is widely used for permission. *May* is more formal, and neither is wrong.","Right. The “rule” is a usage preference, not a fact about meaning."],
     ["Both are wrong. The correct form is *Do I sit here?*","That is not a request for permission."]]),
   Q("e5u8-q09","e5u8-l1",2,"Which sentence uses the right form for one completed event in the past?",1,[
     ["*Yesterday I could finish the report.*","For one completed event, English prefers *was able to*. *Could* suggests a general ability."],
     ["*Yesterday I was able to finish the report.*","Right. *Was able to* describes one event that happened."],
     ["*Yesterday I can finish the report.*","*Can* is present. It does not fit *yesterday*."],
     ["*Yesterday I must finish the report.*","*Must* has no past form. Use *had to*."]]),
   /* ---- Lesson 2: strength and politeness ---- */
   Q("e5u8-q10","e5u8-l2",1,"Which phrase is the softest way to give advice?",0,[
     ["*You might want to check the date.*","Right. *Might want to* is a very soft suggestion."],
     ["*You’d better check the date.*","*Had better* adds a warning."],
     ["*You must check the date.*","*Must* is strong."],
     ["*You have to check the date.*","*Have to* states an obligation."]]),
   Q("e5u8-q11","e5u8-l2",2,"What is the main difference between *You mustn’t go* and *You don’t have to go*?",3,[
     ["There is no difference in meaning.","They are close to opposites for the listener."],
     ["*Mustn’t* is polite and *don’t have to* is rude.","Politeness is not the difference."],
     ["*Mustn’t* gives advice and *don’t have to* gives an order.","The reverse: neither is advice."],
     ["*Mustn’t* forbids going, and *don’t have to* says going is not required.","Right. One is a prohibition and the other removes a duty."]]),
   Q("e5u8-q12","e5u8-l2",1,"What time does *You’d better go now* refer to?",2,[
     ["The past","Despite *had*, the sentence is not about the past."],
     ["Only a habit","It is a single piece of advice."],
     ["The present or the near future","Right. *Had better* has a present or future meaning."],
     ["It has no time reference.","Every sentence like this has one: now or soon."]]),
   Q("e5u8-q13","e5u8-l2",2,"Why can *You’d better be on time tomorrow* sound like a threat from a boss?",1,[
     ["Because *better* is a rude word","The word *better* is not rude. The structure carries the warning."],
     ["Because *had better* suggests an unpleasant result if the listener does not obey, and the boss controls it","Right. The warning is part of the meaning."],
     ["Because it is in the future","The future is not the reason."],
     ["Because the sentence is ungrammatical","The sentence is grammatical."]]),
   Q("e5u8-q14","e5u8-l2",3,"Mariya is interpreting a pharmacist’s advice, Japanese *-ta hō ga ii desu*. Which English is most natural?",0,[
     ["*You should take it after meals.*","Right. *Should* gives ordinary advice, like the Japanese."],
     ["*You had better take it after meals.*","This adds a warning that the Japanese does not carry."],
     ["*You must take it after meals.*","This is stronger than the Japanese advice."],
     ["*You may take it after meals.*","This gives permission, not advice."]]),
   Q("e5u8-q15","e5u8-l2",2,"Which request is the most indirect?",3,[
     ["*Open the window.*","A direct command."],
     ["*Can you open the window?*","A common, direct question."],
     ["*Would you mind opening the window?*","More indirect, but there is still a question."],
     ["*I was wondering if you could open the window.*","Right. It does not ask a direct question at all."]]),
   Q("e5u8-q16","e5u8-l2",3,"A manager says: “You might want to double-check the figures.” What should a listener new to American workplaces understand?",1,[
     ["That checking the figures is optional","It is usually a polite instruction. Treating it as optional can cause a problem."],
     ["That the manager expects the figures to be checked, in a polite way","Right. *Might want to* often softens an instruction."],
     ["That the manager is asking if the listener is able to check","*Might want to* does not ask about ability."],
     ["That the manager is threatening the listener","A threat is more typical of *had better*."]]),
   Q("e5u8-q17","e5u8-l2",2,"What does *You should have called me* usually express?",2,[
     ["An offer","It does not offer anything."],
     ["A prediction about the future","*Should have* refers to the past."],
     ["A duty that was not met, with mild criticism","Right. It looks back at what should have happened."],
     ["Permission to call","Permission would use *may* or *can*."]]),
   Q("e5u8-q18","e5u8-l2",3,"A factory sign says *Employees must not use this door*. A new worker says, “That only means it is better not to.” What is the best reply?",1,[
     ["She is right, because *must* is weak in American English.","*Must not* is a prohibition in rules."],
     ["No. *Must not* in a rule forbids the action. *Don’t have to* would only say it is not required.","Right. The negative of *must* is a prohibition."],
     ["She is right, because the sign has no *shall*.","*Shall* is not needed for a prohibition."],
     ["No. The sign is a suggestion, because signs are always polite.","Signs are not always polite, and this one states a rule."]]),
   /* ---- Lesson 3: conditionals ---- */
   Q("e5u8-q19","e5u8-l3",1,"Which pattern is the real future conditional (the “first conditional”)?",0,[
     ["*if* + present simple, *will* + base verb","Right. *If it rains, we’ll stay home.*"],
     ["*if* + past simple, *would* + base verb","This is the unreal present or future pattern."],
     ["*if* + past perfect, *would have* + participle","This is the unreal past pattern."],
     ["*if* + *will*, *will*","*Will* is not used for future time in the *if* clause."]]),
   Q("e5u8-q20","e5u8-l3",1,"In *If I knew her number, I would call her*, what does the past form *knew* show?",2,[
     ["That the event happened in the past","The time is now. I do not know her number."],
     ["That the speaker is being polite","Politeness is not the main point here."],
     ["That the situation is imagined or not real","Right. The past form signals distance from reality."],
     ["That the verb is irregular","The form is irregular, but that does not explain its use."]]),
   Q("e5u8-q21","e5u8-l3",2,"Which sentence is standard for a future condition?",1,[
     ["*If it will rain tomorrow, we’ll cancel.*","*Will* is not used for the future time of the condition."],
     ["*If it rains tomorrow, we’ll cancel.*","Right. The present simple stands for future time in an *if* clause."],
     ["*If it would rain tomorrow, we’ll cancel.*","*Would* does not fix it."],
     ["*If it rained tomorrow, we’ll cancel.*","The past form does not match the result."]]),
   Q("e5u8-q22","e5u8-l3",2,"Which sentence is a mixed conditional?",3,[
     ["*If I have time, I’ll call you.*","A real future conditional."],
     ["*If I had time, I would call you.*","An unreal present conditional."],
     ["*If I had had time, I would have called you.*","An unreal past conditional. Both clauses are in the past."],
     ["*If I had taken that job, I would be living in Osaka now.*","Right. A past condition with a present result."]]),
   Q("e5u8-q23","e5u8-l3",3,"Tomás says: “If she was upset, she hid it well.” Is this an unreal conditional?",1,[
     ["Yes, because *was* is a past form.","A past form can be a plain past tense. It is not always unreal."],
     ["No. The speaker does not know if she was upset, so the condition is open.","Right. It is a real conditional about the past."],
     ["Yes, because the result is in the past.","A past result does not make it unreal."],
     ["No, because it uses *hid*.","*Hid* is just the past tense of *hide*."]]),
   Q("e5u8-q24","e5u8-l3",2,"Why is *If you’ll wait here, I’ll get the manager* acceptable?",0,[
     ["*Will* means willingness, and it is a polite request.","Right. *If you are willing to wait here…*"],
     ["Because the sentence is about the past","It is about a request now."],
     ["Because *will* is always allowed after *if*","*Will* is not allowed for the time of the condition."],
     ["Because *if* here means *unless*","*Unless* would reverse the meaning."]]),
   Q("e5u8-q25","e5u8-l3",2,"Which statement about *were* and *was* in an unreal conditional is most accurate?",2,[
     ["Only *were* is correct.","Both are used. *Were* is more formal."],
     ["Only *was* is correct.","*Were* is the traditional form and is normal in formal writing."],
     ["Both are used with *I*, and *were* is the safer choice in formal writing.","Right. For *you, we, they*, only *were* is possible."],
     ["*Were* is used for the past and *was* for the present.","Neither form marks time here."]]),
   Q("e5u8-q26","e5u8-l3",3,"Dmitri writes: “If I will have time, I will help.” What is the best correction and reason?",3,[
     ["*If I would have time, I will help.* *Would* is more polite.","*Would* does not repair the future time problem."],
     ["No correction. *Will* is always fine after *if*.","*Will* is not standard for the time of the condition."],
     ["*If I had time, I will help.* The past form is needed.","The past form would change the meaning to unreal and does not match *will*."],
     ["*If I have time, I will help.* The present simple stands for future time in the condition.","Right. This is the usual form of a real future conditional."]]),
   Q("e5u8-q27","e5u8-l3",2,"A learner book says: “The second conditional is for impossible situations.” What is the best comment?",1,[
     ["That is exactly right.","It is too narrow."],
     ["It is too narrow. The second conditional also covers unlikely and imagined situations, such as *If you won the lottery*.","Right. It marks distance from reality, which includes the unlikely."],
     ["It is wrong, because the second conditional is about the past.","It is about the present or future."],
     ["It is wrong, because the second conditional has no *would*.","It normally has *would*, *could* or *might*."]]),
   /* ---- Lesson 4: the passive ---- */
   Q("e5u8-q28","e5u8-l4",1,"What is the usual form of the passive?",2,[
     ["*have* + base verb","This does not form a passive."],
     ["*be* + *-ing*","This is the progressive."],
     ["*be* + past participle","Right. The *be* carries the tense."],
     ["*do* + past participle","*Do* is used for questions and negatives, not for the passive."]]),
   Q("e5u8-q29","e5u8-l4",2,"What is the passive of *They are repairing the road*?",0,[
     ["*The road is being repaired.*","Right. The present progressive passive is *is being* + participle."],
     ["*The road is repaired.*","This is the present simple passive. It loses the progressive."],
     ["*The road was repairing.*","The tense and participle are wrong."],
     ["*The road repairs.*","This is not a passive."]]),
   Q("e5u8-q30","e5u8-l4",2,"Which verb cannot normally be passive?",3,[
     ["*build*","It takes an object: *The house was built.*"],
     ["*write*","It takes an object: *The letter was written.*"],
     ["*give*","It takes objects and has two passives."],
     ["*arrive*","Right. It has no object, so it has no passive."]]),
   Q("e5u8-q31","e5u8-l4",2,"Which statement about the get-passive is correct?",1,[
     ["It is the only passive that can have a *by*-agent.","A *be*-passive often has a *by*-agent. A get-passive rarely does."],
     ["It is informal and shows an event that affects the subject.","Right. *He got fired* is a typical example."],
     ["It is incorrect in standard English.","It is standard, but informal."],
     ["It is the same as the progressive.","The progressive uses *be* + *-ing*."]]),
   Q("e5u8-q32","e5u8-l4",3,"Hana writes: “I was rained on the way home.” What is the best explanation and fix?",0,[
     ["*Rain* has no object, so it has no passive. Use *rain on*: *I got rained on during my walk home*, or say *I was caught in the rain.*","Right. English cannot copy the Japanese affected passive. Only *rain on* someone can be passive."],
     ["The sentence is correct in English.","It is not a standard sentence."],
     ["The verb needs *by*: *I was rained by the clouds.*","This does not repair it."],
     ["The tense is wrong. Say *I am rained.*","The tense is not the problem."]]),
   Q("e5u8-q33","e5u8-l4",2,"Which situation is a good reason to use the passive?",2,[
     ["The reader needs to know who made the mistake.","Then the doer matters, and the active is clearer."],
     ["The sentence is short and the doer is the topic.","The active is natural here."],
     ["The doer is unknown, as in *My bike was stolen.*","Right. Nobody can name the doer."],
     ["You want to avoid every use of *by*.","This is not a reason to choose the passive."]]),
   Q("e5u8-q34","e5u8-l4",3,"Sione writes: “Maria joined the company in 2020. The manager promoted her last year.” His teacher suggests changing the second sentence. Why?",1,[
     ["Because *promoted* is not a passive","The change is about flow, not about the verb form."],
     ["To keep *Maria* as the topic: *She was promoted last year.*","Right. The passive keeps one topic, and the manager’s role is not needed."],
     ["Because the active voice is wrong in a paragraph","The active voice is correct. The change improves flow."],
     ["To add a *by*-agent","The agent is not needed."]]),
   Q("e5u8-q35","e5u8-l4",1,"What is the agent in *The roof was damaged by the storm*?",3,[
     ["*the roof*","The roof receives the action."],
     ["*was damaged*","This is the verb."],
     ["*damaged*","This is the past participle."],
     ["*the storm*","Right. The agent is the doer, and here it follows *by*."]]),
   Q("e5u8-q36","e5u8-l4",3,"Which test shows that *She was very tired* is **not** a passive?",2,[
     ["It uses *was*.","*Was* appears in many sentences that are not passive."],
     ["It has a subject.","Every clause has a subject."],
     ["*Tired* is an adjective: it follows *very*, and you cannot add *by* + a doer that fits the action.","Right. These tests show that the participle works as an adjective."],
     ["It is in the past tense.","The passive is not defined by tense."]]),
   /* ---- Lesson 5: voice and responsibility ---- */
   Q("e5u8-q37","e5u8-l5",1,"What is an agentless passive?",1,[
     ["A passive that has a *by*-phrase","That names the doer, so it is not agentless."],
     ["A passive with no *by*-phrase, so the doer is not named","Right. *The file was deleted* is an example."],
     ["An active sentence with no object","That is an intransitive active clause."],
     ["A sentence with no verb","Every sentence needs a verb."]]),
   Q("e5u8-q38","e5u8-l5",2,"Which sentence does **not** name the doer?",0,[
     ["*The window was broken.*","Right. It is an agentless passive."],
     ["*Mei broke the window.*","*Mei* is the doer."],
     ["*The window was broken by a ball.*","The *by*-phrase names the doer."],
     ["*A ball broke the window.*","*A ball* is the doer."]]),
   Q("e5u8-q39","e5u8-l5",2,"What does *Mistakes were made* leave out?",2,[
     ["That mistakes happened","The sentence does say that."],
     ["The time of the mistakes","The sentence does not give a time, but this is not the main point."],
     ["Who made the mistakes","Right. It is an agentless passive."],
     ["The verb","The verb is *were made*."]]),
   Q("e5u8-q40","e5u8-l5",3,"Cheska reads an incident report that says *The warning was sent late.* What is the best response?",1,[
     ["Decide that the writer is hiding the doer","The grammar alone does not show why the doer is missing."],
     ["Note the question “who sent it, and why late?” and look for the answer elsewhere in the report","Right. The passive shows where to look. The rest of the report may answer."],
     ["Rewrite it as *The warning sent late.*","This is not a standard sentence."],
     ["Ignore it, because all passives are the same","Context decides whether the missing doer matters."]]),
   Q("e5u8-q41","e5u8-l5",2,"In which sentence is an agentless passive the most natural choice?",3,[
     ["*Mistakes were made by me in the billing.*","The speaker is the doer, and the passive makes that harder to see."],
     ["*A decision was made by our team to close the office.*","The doer is known and relevant, so the active is clearer."],
     ["“*I’m sorry the window was broken*,” said by the child who broke it.","The speaker is the doer and is responsible, so *I’m sorry I broke the window* is clearer."],
     ["*Samples were stored at 4 °C overnight.*","Right. In a method, the process matters and the doer does not."]]),
   Q("e5u8-q42","e5u8-l5",3,"A student says: “Passive voice is always a way to avoid blame.” What is the best teaching response?",2,[
     ["Agree, and tell the student never to use it","This removes fair uses of the passive."],
     ["Disagree, because passives never leave the doer out","Most passives do leave the doer out."],
     ["Show fair and questionable uses side by side and ask who is missing, whether the writer knows and whether the reader needs it","Right. This teaches a method instead of a rule."],
     ["Say the question is not about grammar","The grammar of the choice is part of the topic."]]),
   Q("e5u8-q43","e5u8-l5",2,"Which sentence uses a nominalization that hides the doer?",1,[
     ["*The team failed to check the numbers.*","This names the doer and uses a verb."],
     ["*There was a failure of oversight.*","Right. The verb *fail* became a noun, and no doer is named."],
     ["*We missed the deadline.*","*We* is the doer."],
     ["*Mei broke the window.*","*Mei* is the doer."]]),
   Q("e5u8-q44","e5u8-l5",3,"Two headlines describe one invented event: *Pedestrian struck by car* and *Driver hits pedestrian*. What is the best comment?",0,[
     ["Both can be true, and they put different participants first","Right. The grammar of each places a different person or thing as the subject."],
     ["Only the first is grammatical","Both are grammatical."],
     ["Only the second is accurate","Both can describe the same event accurately."],
     ["They mean the same in every way","They do not. The first puts the pedestrian first and names a car, not a person."]]),
   Q("e5u8-q45","e5u8-l5",2,"What is the first step in rewriting a sentence so that it names the doer?",1,[
     ["Change the verb to the past tense","Tense is not the issue."],
     ["Ask “who?” of the verb","Right. The question shows what is missing."],
     ["Delete the sentence","This removes information."],
     ["Add *very* to the verb","This does not name the doer."]])
  ]
});
})();
