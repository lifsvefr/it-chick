(function(){
/* How English Works · Unit 10 (e5u10) · Joining ideas */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u10", track:"e5", n:10, title:"Joining ideas", icon:"🔗",
  blurb:"How English clauses and sentences fit together. You learn the difference between joining equals and joining a dependent clause, and how to avoid comma splices. You build relative clauses with the right commas and pronouns. You report what people said, with the right verbs and word order. You decide what to put first and last in a sentence. Then you link whole paragraphs, and compare all of this with Japanese.",
  goals:[
    "Tell coordination from subordination, and fix comma splices and run-ons in writing",
    "Build defining and non-defining relative clauses with who, which, that and whose, and decide when to use commas and when to leave the pronoun out",
    "Report statements and questions with the right word order, and choose reporting verbs with the right patterns (suggest, insist, tell, explain)",
    "Use end focus, end weight, clefts, there sentences and the passive to put new information in the best place",
    "Link sentences with pronouns, this plus a noun and linking adverbs, and explain how this differs from Japanese -te chains and long sentences"
  ],
  read:[
    {book:"eling", where:"The Syntax chapter (sections “Clausal embedding” and “Embedded content questions and relative clauses”) and the Pragmatics chapter (section “At-issue vs. non-at-issue meaning”)", note:"Read each section after the matching lesson. The book is written for linguistics students, so use this unit’s explanations first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u10-l1", title:"Coordination, subordination and the comma splice", minutes:55,
   hook:{q:"Is this a correct sentence in formal writing? *It was late, we went home.*", options:["Yes, a comma can join two clauses","No, it needs a conjunction or other punctuation","Yes, but only in spoken English","No, because it is too short"], answer:1, reveal:"**No: in formal writing it is a comma splice.** Two full clauses are side by side with only a comma between them. Writers fix it with *so* (*It was late, so we went home*), with a period, with a semicolon, or with *because*. Said aloud, the sentence is fine, because speech has no commas. The problem belongs to written style. This lesson shows the two ways to join clauses and the rules that keep your punctuation clear."},
   goals:[
     "Explain the difference between coordination and subordination, and use the movement test",
     "Choose the right coordinator or subordinator for reason, contrast, result and time",
     "Place commas correctly before and after joined clauses",
     "Find and fix comma splices, run-ons and fragments, and say why they are a written-style matter"
   ],
   learn:[
    {h:"Two ways to join clauses", body:[
      {lead:"A [[hew-clause|clause]] has a subject and a verb. When you join two clauses, you have a choice: join them as equals, or make one depend on the other."},
      "**Coordination** joins clauses of the same rank. Each could stand alone as a sentence. The joining word is a coordinator: *and, but, or, so, yet, for, nor*. In *It rained, and we stayed in*, both clauses are equal partners.",
      "**Subordination** makes one clause depend on the other. The dependent clause cannot stand alone. The joining word is a subordinator, which is a kind of [[hew-conjunction|conjunction]]: *because, although, while, when, if, unless, after, since*. In *We stayed in because it rained*, the part *because it rained* is a [[hew-subordinate-clause|subordinate clause]]. It does a job inside the main clause: it gives the reason.",
      {table:[["","Coordination","Subordination"],["Joining words","*and, but, or, so, yet, for, nor*","*because, although, while, when, if, unless, after*"],["Rank of clauses","Equal: each can stand alone","Unequal: one is a main clause, one depends on it"],["Example","*It rained, so we stayed in.*","*Because it rained, we stayed in.*"],["Order of clauses","Fixed: the coordinator stays between them","Flexible: the subordinate clause can come first or last"]]},
      "Teachers sometimes give the memory word **FANBOYS** for the seven coordinators: *for, and, nor, but, or, yet, so*. It is a useful teaching tool. A descriptive grammar treats *for* and *so* as borderline cases, because they are less regular than *and* and *but*. For everyday writing, the list works well.",
      {key:"Coordination joins equals and keeps the order. Subordination makes one clause depend on the other and lets you move it."}
    ]},
    {h:"The movement test", body:[
      "How can you tell which kind of joining you have? Try to move the clause to the front of the sentence.",
      {ex:"Subordination: the clause can move.\nWe stayed in because it rained.\nBecause it rained, we stayed in.\n\nCoordination: the clause cannot move.\nIt rained, so we stayed in.\nNot possible: So we stayed in, it rained.", label:"Worked example", mono:true},
      "A subordinate clause can come first, because it is only a part of the main clause, like an adverb of reason. A coordinated clause cannot come first, because the coordinator belongs to the second clause and links back to the first one.",
      "The test also shows why one word can be tricky. *While* can mean *at the same time* (*She read while he cooked*) or *but, in contrast* (*Hana likes tea, while Tomás likes coffee*). Both uses are subordination: you can say *While he cooked, she read*. But *while* is not a coordinator, so it does not follow the comma rule for *and* and *but*.",
      {h:"Choosing the word"},
      {table:[["Relation","Coordinator","Subordinator"],["Addition","*and*","no true subordinator (*as well as* + *-ing* is a preposition)"],["Contrast","*but, yet*","*although, though, whereas, while*"],["Reason","*for* (formal)","*because, since, as*"],["Result","*so*","*so that* (purpose), *such that*"],["Choice or condition","*or* (*Hurry, or you’ll miss it*)","*unless, if*"],["Time","*and then*","*when, after, before, until, as soon as*"]]},
      "*So* and *because* are opposites in order. *Because* introduces the reason. *So* introduces the result. *It rained, so we stayed in.* *We stayed in because it rained.* Learners sometimes swap them.",
      {fig:'<svg viewBox="0 0 340 262"><text x="170" y="20" text-anchor="middle">Two ways to join clauses</text><rect class="d-sage" x="14" y="32" width="312" height="92" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Coordination: equal partners</text><rect class="d-panel" x="28" y="64" width="110" height="38" rx="6" stroke-width="2"/><text x="83" y="88" text-anchor="middle">It rained</text><text x="170" y="88" text-anchor="middle">, so</text><rect class="d-panel" x="202" y="64" width="110" height="38" rx="6" stroke-width="2"/><text x="257" y="88" text-anchor="middle">we stayed in</text><text class="s" x="170" y="116" text-anchor="middle">neither clause can move to the front</text><rect class="d-gold" x="14" y="136" width="312" height="112" rx="8" stroke-width="2"/><text x="170" y="156" text-anchor="middle">Subordination: one depends on the other</text><rect class="d-panel" x="28" y="168" width="284" height="64" rx="6" stroke-width="2"/><text x="170" y="188" text-anchor="middle">We stayed in</text><rect class="d-softf" x="64" y="196" width="212" height="28" rx="6" stroke-width="2"/><text x="170" y="215" text-anchor="middle">because it rained</text></svg>', alt:"Two panels. In the first, two equal boxes, It rained and we stayed in, are joined by a comma and so. In the second, a small box, because it rained, is inside a larger box, We stayed in.", cap:"Coordination puts two equal clauses side by side. Subordination puts one clause inside the other."}
    ]},
    {h:"Commas with joined clauses", body:[
      "Punctuation follows the grammar. The rules below are for standard written English in the United States. Style guides differ in small ways, so check the one that your school or employer uses (see Unit 1).",
      {list:[
        "**Two full clauses joined by a coordinator:** put a comma before the coordinator. *It rained, and we stayed in.* A writer may drop the comma when both clauses are very short and closely linked: *It rained and we stayed in.*",
        "**Subordinate clause first:** put a comma after the whole clause. *Because it rained, we stayed in.*",
        "**Subordinate clause last:** usually no comma. *We stayed in because it rained.* A comma is fine before a clear contrast clause: *We went out, although it rained.*",
        "**Two verbs sharing one subject:** no comma. *We stayed in and watched a movie.* There is only one clause here, so there is nothing to separate."
      ]},
      "The last rule catches many writers. *We stayed in, and watched a movie* puts a comma in the wrong place, because the second part has no subject of its own."
    ]},
    {h:"Comma splices and run-ons", body:[
      "A **[[hew-comma-splice|comma splice]]** joins two independent clauses with only a comma. *It was late, we went home.* A **[[hew-run-on|run-on sentence]]** (also called a fused sentence) joins them with nothing at all. *It was late we went home.*",
      "The word *run-on* has two uses. Many teachers use it for any very long sentence. The strict meaning, used here, is two clauses fused with no punctuation or conjunction.",
      "Why do these count as errors? A comma is a weak mark. It tells the reader to pause, but it does not tell them that one clause has ended. A reader needs a stronger signal. Five fixes work.",
      {table:[["Fix","Example"],["Use a period","*It was late. We went home.*"],["Use a semicolon","*It was late; we went home.*"],["Add a coordinator after the comma","*It was late, so we went home.*"],["Make one clause subordinate","*Because it was late, we went home.*"],["Use a colon (the second clause explains the first)","*We went home: it was late.*"]]},
      "Choose by meaning. If the clauses are closely linked, the semicolon is neat. If you want to show a reason or result, add a word that says it. If the ideas are not closely linked, use a period.",
      {h:"This is a written-style rule"},
      "Comma splices are not “wrong English”. People speak in clauses with no commas, and no one can hear a splice. Published writers also use them on purpose. A series of very short parallel clauses (*I came, I saw, I conquered*) is an accepted style. Formal academic and business writing treats the splice as an error, and many readers notice it. So ask a different question: *does this reader expect it?* Toby, who taught English in the Japanese countryside for two years, told his students the same: the sentence is fine when you say it, and in an essay it needs one more mark.",
      {h:"Fragments, and doubled connectors"},
      "The opposite problem is a **fragment**: a subordinate clause written alone. *Because it was late.* This is not a full sentence, because it asks a question: because it was late, what happened? It is natural in speech (*Why did you leave? Because it was late.*), and in writing it is usually joined to a main clause.",
      "Another common learner pattern is a doubled connector: *Although it rained, but we went out* or *Because it rained, so we stayed in*. In English one joining word is enough for each link. Choose *although* or *but*, not both. Learners from several first languages do this, so it is not special to Japanese.",
      {h:"Compared with Japanese"},
      "In Japanese the comma (the *tōten*, 、) is a flexible mark for a pause. A Japanese sentence can run through many clauses with *-te* forms and *ga* or *kedo*, and only the last verb ends the sentence. A writer may put 、 after each clause. In English the same habit creates a splice, because English clauses each carry their own subject and tense. Lesson 5 compares this in detail."
    ]}
   ],
   try:[
    {id:"e5u10-l1-x1", type:"sort", q:"Is each joining word a coordinator or a subordinator?", buckets:["Coordinator","Subordinator"], items:[
      {t:"and", b:0, why:"*And* joins equals and cannot move: *It rained, and we stayed in.*"},
      {t:"although", b:1, why:"*Although it rained, we went out* works, so the clause can move. Subordinator."},
      {t:"so", b:0, why:"*So* introduces a result and keeps its place between the clauses: *It rained, so we stayed in.*"},
      {t:"because", b:1, why:"*Because it rained, we stayed in.* The clause can move to the front. Subordinator."},
      {t:"yet", b:0, why:"*Yet* works like *but*: *It was small, yet it was loud.* It stays between the clauses."},
      {t:"unless", b:1, why:"*Unless you hurry, we will be late.* The clause can come first. Subordinator."}
    ]},
    {id:"e5u10-l1-x2", type:"sort", q:"Decide whether each written sentence is correct, a comma splice or a run-on (fused sentence).", buckets:["Correct","Comma splice","Run-on (fused)"], items:[
      {t:"The shop closes at six, we can still buy bread.", b:1, why:"Two full clauses, joined only by a comma. Splice."},
      {t:"The shop closes at six we should hurry.", b:2, why:"Two full clauses with no punctuation and no joining word. In the strict sense this is a fused sentence."},
      {t:"The shop closes at six, so we should hurry.", b:0, why:"A comma plus a coordinator joins two equal clauses. Correct."},
      {t:"Because the shop closes at six, we should hurry.", b:0, why:"A subordinate clause first, followed by a comma. Correct."},
      {t:"The shop closes at six; we should hurry.", b:0, why:"A semicolon can join two closely linked clauses. Correct."},
      {t:"Maria opened the door, she walked in.", b:1, why:"Two full clauses, each with its own subject, joined only by a comma. Splice."}
    ]},
    M("e5u10-l1-x3","Which test shows that *although* in *We went out although it rained* is a subordinator and not a coordinator?",1,[
      ["It has more than three letters.","Length of a word has nothing to do with its class."],
      ["The clause can move to the front: *Although it rained, we went out.*","Right. Only subordinate clauses move freely. A coordinated clause cannot be fronted with its coordinator."],
      ["It always follows a comma.","A subordinate clause at the end often has no comma, as in *We stayed in because it rained*."],
      ["It joins two nouns.","*Although* joins clauses. Nouns are joined by *and* and *or*."]
    ]),
    {id:"e5u10-l1-x4", type:"spot", q:"Kaito, a first-year student in information engineering, wrote part of a lab report. Tap each sentence that needs fixing for formal writing.", ask:"needs fixing", parts:[
      {t:"The battery was new, but the sensor stopped on Monday. ", flag:false, why:"Fine. A comma plus *but* joins two equal clauses."},
      {t:"Although the battery was new, but the sensor stopped. ", flag:true, why:"Doubled connector: *although* and *but* both link the same two ideas. Keep one."},
      {t:"We replaced it on Tuesday, it worked again. ", flag:true, why:"A comma splice. Add *and* or *so*, or use a period."},
      {t:"After the change, the data was stable. ", flag:false, why:"Fine. A short phrase at the start with a comma after it."},
      {t:"Because the new sensor worked. ", flag:true, why:"A fragment: a subordinate clause alone. Join it to a main clause."},
      {t:"The data was stable and the team was relieved.", flag:false, why:"Acceptable. Two short, closely linked clauses may drop the comma before *and*."}
    ]},
    {id:"e5u10-l1-x5", type:"number", q:"How many **main (independent) clauses** are in this sentence? “Mei checked the data, and she found an error because the sensor had failed, so she told the team.”", answer:3, tol:0, unit:"main clauses", why:"The main clauses are *Mei checked the data*, *she found an error* and *she told the team*. *Because the sensor had failed* is a subordinate clause inside the second one. *And* and *so* join equal clauses.", wrongs:[
      {v:4, tol:0, why:"You counted *because the sensor had failed* as a main clause. It depends on *she found an error*, so it is subordinate."},
      {v:2, tol:0, why:"You may have missed one of the clauses linked by *and* or *so*. Each of them joins a new clause with its own subject and verb."}
    ], hint2:"Find every subject and verb. Then ask which clauses could stand alone."},
    {id:"e5u10-l1-x6", type:"order", q:"Put these steps in a sensible order for checking a long sentence in your own writing.", items:[
      {t:"Find each verb and its subject, and mark where each clause starts.", why:"You cannot judge the joins until you can see the clauses."},
      {t:"Ask whether each clause could stand alone as a sentence.", why:"Clauses that can stand alone are independent. Those that cannot are subordinate."},
      {t:"Look at each join: is there a coordinator, a subordinator, or only a comma?", why:"A comma alone between two independent clauses is a splice."},
      {t:"Decide the relation: addition, contrast, reason, result or time.", why:"The meaning tells you which joining word to choose."},
      {t:"Repair the join and read the sentence aloud.", why:"Reading aloud confirms that the new sentence sounds right and the pauses match the commas."}
    ]},
    {id:"e5u10-l1-x7", type:"match", q:"Match each comma splice to the fix that suits it best.", pairs:[
      ["*The train was late, I missed the meeting.* (reason)","Make one clause subordinate","*Because the train was late, I missed the meeting.* The relation is a reason, so a subordinator shows it."],
      ["*I like this city, the winters are long.* (contrast)","Add a coordinator after the comma","*I like this city, but the winters are long.* *But* shows the contrast."],
      ["*The results are clear, they need no explanation.* (closely linked)","Use a semicolon","*The results are clear; they need no explanation.* A semicolon suits two clauses with a close link."],
      ["*Submit the form today, the office closes at five.* (a separate point)","Use a period","*Submit the form today. The office closes at five.* Separate points can stand as two sentences."]
    ]},
    {id:"e5u10-l1-x8", type:"explain", q:"Hana says: “My teacher wrote *comma splice* next to *It was raining, we stayed home.* But I see sentences like this in novels. Is my teacher wrong?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say whether it is a grammar problem or a style problem, and explain who the reader is.", model:"Your teacher is not wrong, and the novel is not wrong either. A comma splice is not a grammar mistake, because people speak this way all the time. It is a rule of formal written style: a comma is too weak to mark the end of a clause. Novelists sometimes use splices on purpose for rhythm. In an essay or a report the reader expects a stronger join, so you would write *It was raining, so we stayed home* or use a period or semicolon. Know the rule so that you can choose it.", points:["Says the sentence is a style problem for formal writing, not a grammar error in the language","Explains why a comma is a weak join for two independent clauses","Accepts that published writers can break the rule on purpose","Gives one or two fixes (coordinator, period, semicolon, subordinate clause)"]}
   ],
   apply:{
    intro:"These tasks use a piece of your own writing (an email, an essay or a post) and a free grammar reference. Nothing needs an account.",
    tasks:[
     {t:"Audit your own joins", how:[
       "Choose about 150 words that you wrote. Underline every place where two clauses meet.",
       "For each join, write C if it uses a coordinator, S if it uses a subordinator, or P if it uses only punctuation.",
       "Check each P. Is it a splice? Rewrite it with one of the five fixes from this lesson."
     ], write:"Number of joins… C… S… P… Splices I found and my fixes…"},
     {t:"Move the clause", how:[
       "Write six sentences with *because, although, when, so, but* and *and*.",
       "Try to move the clause that follows the joining word to the front of each one. Mark which ones allow it and which do not.",
       "Add commas where the rules require them."
     ], write:"Sentence… moved version or ‘cannot move’… word class of the joiner…"},
     {t:"Fix a long sentence", how:[
       "Find or write a sentence of 40 words or more that has several clauses.",
       "Split it into two or three sentences, keeping the meaning.",
       "Say in one line which version a reader would find easier, and why."
     ], write:"Original… Rewrite… Why it is easier…"}
    ],
    proof:"A marked paragraph with every join labeled C, S or P, with each splice fixed. Six moved or unmovable clauses. One long sentence and its rewrite."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Clausal embedding”", note:"Look for how the book describes one clause inside another (an embedded clause) and the small words that introduce it."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u10-l2", title:"Relative clauses", minutes:55,
   hook:{q:"Which sentence is correct? (a) *My brother, that lives in Nara, is a chef.* (b) *My brother, who lives in Nara, is a chef.*", options:["Only (a)","Only (b)","Both are correct","Neither is correct"], answer:1, reveal:"**Only (b).** The clause *who lives in Nara* is set off by commas, and with commas English does not use *that*. It uses *who* for a person. This lesson explains the two kinds of relative clause, why commas change the meaning, and when you may leave the pronoun out."},
   goals:[
     "Build relative clauses with who, which, that, whose, where, when and why",
     "Tell defining from non-defining clauses, and use commas to match the meaning",
     "Know when the relative pronoun can be left out, and when it must stay",
     "Place prepositions in relative clauses, and know when whom is the right word",
     "Explain why learners say *the book that I read it*, and compare with Japanese"
   ],
   learn:[
    {h:"What a relative clause does", body:[
      {lead:"A [[hew-relative-clause|relative clause]] is a clause that gives more information about a noun. It comes right after the noun, and it usually starts with a relative pronoun."},
      "The noun that it describes is the **antecedent**. In *the book that I read*, the antecedent is *book*, and the relative clause is *that I read*. Inside the clause, the relative pronoun *that* stands for *the book*, and it has a job there: it is the object of *read*. That is why the clause has a gap. You say *I read the book*, but *the book that I read ___*.",
      {table:[["Pronoun","Used for","Example"],["who","people (subject, and often object)","*the woman who lives next door*"],["whom","people, as object (formal)","*the woman whom I met*"],["which","things and animals","*the bag which was on the chair*"],["that","people or things, in defining clauses only","*the bag that was on the chair*"],["whose","possession, for people or things","*the student whose bike was stolen*"],["where, when, why","place, time, reason","*the town where she grew up*, *the day when we met*, *the reason why he left*"]]},
      "Two points. First, *who* is the usual word for people, and *that* for a person is also common: *the man that called*. Some style guides prefer *who* for people in careful writing. Second, *what* is not a relative pronoun in standard English: *the thing what I need* is not standard. Use *the thing that I need* or *what I need*."
    ]},
    {h:"Defining and non-defining clauses", body:[
      "There are two kinds of relative clause, and commas show which one you mean.",
      "A **defining** clause (also called restrictive) tells you **which one**. It identifies the noun. Without it, the listener would not know which person or thing you mean. There are no commas. *The students who finished early left.* Only some students left: those who finished early.",
      "A **non-defining** clause (also called non-restrictive) adds **extra information** about a noun that is already clear. It is set off by commas. *The students, who finished early, left.* All the students finished early, and all left.",
      {ex:"Defining (no commas)\nMy sister who lives in Osaka is a nurse.\nMeaning: I have more than one sister. The clause tells you which one.\n\nNon-defining (commas)\nMy sister, who lives in Osaka, is a nurse.\nMeaning: I have one sister. Where she lives is extra information.", label:"Worked example", mono:true},
      "This is a good example of punctuation that changes meaning. It is more than a style choice. The commas work like parentheses: you could remove the clause, and the main sentence would still say who is meant. In speech, a non-defining clause often has its own pause and lower pitch.",
      {h:"Rules that go with the commas"},
      {list:[
        "**Use *that* only in defining clauses.** *The bag that I lost was red.* But *My bag, which I lost, was red.*",
        "**You can leave out the pronoun only in defining clauses** (and only in the cases below). A non-defining clause always keeps its pronoun.",
        "**Names and one-of-a-kind nouns usually take non-defining clauses.** *Mount Fuji, which is 3,776 meters high, …* We already know which mountain.",
        "**A clause with *which* can refer to a whole idea.** *The train was late, which surprised nobody.* Here *which* means *the fact that the train was late*, and it always has a comma."
      ]},
      "A note on *which* and *that* in defining clauses. US style guides such as *The Chicago Manual of Style* and the AP Stylebook prefer *that* for defining clauses and keep *which* for non-defining ones. This is a house style, and it makes writing consistent. But *which* in a defining clause (*the car which I bought*) is common and standard, especially in British English. Follow the guide of your reader, and keep the comma rule: no comma, no problem; with a comma, use *which* or *who*, never *that*.",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="20" text-anchor="middle">Commas change the meaning</text><rect class="d-sage" x="14" y="32" width="312" height="94" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Defining: no commas</text><text x="170" y="76" text-anchor="middle">The students who finished early left.</text><text class="s" x="170" y="98" text-anchor="middle">Only some students left:</text><text class="s" x="170" y="116" text-anchor="middle">the ones who finished early.</text><rect class="d-gold" x="14" y="138" width="312" height="94" rx="8" stroke-width="2"/><text x="170" y="158" text-anchor="middle">Non-defining: commas</text><text x="170" y="182" text-anchor="middle">The students, who finished early, left.</text><text class="s" x="170" y="204" text-anchor="middle">All the students left.</text><text class="s" x="170" y="222" text-anchor="middle">They all finished early: extra information.</text></svg>', alt:"Two panels. Without commas, the students who finished early left means only some students left. With commas, the students, who finished early, left means all the students left and all finished early.", cap:"The same words with commas and without commas give two different meanings."}
    ]},
    {h:"Leaving out the pronoun, and whom", body:[
      "In everyday English, the relative pronoun is often left out. The rule is simple. **You can drop the pronoun when it is the object of the relative clause, and the clause is defining.** If the pronoun is the subject of the clause, it must stay.",
      {table:[["Sentence","Pronoun's job in the clause","Can you drop it?"],["*The book that I read was long.*","Object of *read*","Yes: *The book I read was long.*"],["*The man who I met is a pilot.*","Object of *met*","Yes: *The man I met is a pilot.*"],["*The woman who lives next door is a nurse.*","Subject of *lives*","No: *The woman lives next door* means something else."],["*The student whose bike was stolen called.*","Possessive","No: *whose* always stays."],["*My bag, which I lost, was red.*","Object, but non-defining","No: commas mean the pronoun stays."]]},
      "A quick test: after the antecedent, is the next word a subject (*I, she, the teacher*)? If yes, the pronoun was an object, and you can drop it. If the next word is a verb (*lives, was*), the pronoun was the subject, and it stays.",
      {h:"Whom and prepositions"},
      "*Whom* is the object form of *who*. It is correct in formal writing: *the woman whom I met*. In ordinary speech and writing, most people use *who* or leave the pronoun out: *the woman who I met, the woman I met*. After a preposition, *whom* is required in formal style: *the person to whom I spoke*.",
      "English lets you place the preposition in two ways. Neither is a mistake (Unit 1 already looked at the “rule” against ending with a preposition).",
      {table:[["Style","Example"],["Formal: preposition first, then *whom* or *which*","*the person to whom I spoke, the chair on which she sat*"],["Neutral: preposition at the end, pronoun dropped","*the person I spoke to, the chair she sat on*"],["Informal: preposition at the end, with *who*","*the person who I spoke to*"]]},
      "Do not mix the two: *the person to who I spoke* and *the chair on that she sat* are not standard. After a fronted preposition use *whom* or *which*, never *who* or *that*.",
      "**Agreement.** The verb in the relative clause agrees with the antecedent: *She is one of the people who work here* (the antecedent is *people*, so *work*). *She is the only person who works here* uses a singular verb."
    ]},
    {h:"Learner patterns and Japanese", body:[
      "The most frequent error is the extra pronoun: *The book that I read it was long.* The word *that* already stands for the book, so *it* is a copy. Learners from many languages do this. The fix is to leave the gap: *the book that I read* or *the book I read*.",
      "Other patterns to watch: the wrong pronoun (*the thing who happened*, because *who* is for people), and a missing comma that changes the meaning. Another is a missing preposition: *the town which I was born*. Say *the town where I was born* or *the town I was born in*.",
      {h:"Compared with Japanese"},
      "In Japanese the relative clause comes **before** the noun, and there is no relative pronoun at all. *Watashi ga yonda hon* (私が読んだ本) is “the book that I read”. The verb *yonda* (read, past) comes right before *hon* (book). *Kinō atta hito wa sensei desu* (昨日会った人は先生です) is “The person I met yesterday is a teacher.” Because Japanese leaves a gap in the same way, a Japanese speaker may find it natural to drop the pronoun in English, which is correct for objects. The difficulty is the order: in English the clause follows the noun, and the pronoun marks where it starts. Some learners may also add *it* because the clause feels unfinished to them without a word in the gap.",
      {key:"A relative clause follows its noun in English, starts with a pronoun that stands for the noun, and leaves a gap where the noun would be."}
    ]}
   ],
   try:[
    {id:"e5u10-l2-x1", type:"sort", q:"Is the relative clause (in capitals) defining or non-defining?", buckets:["Defining","Non-defining"], items:[
      {t:"The students WHO FINISHED EARLY left. (only some left)", b:0, why:"It identifies which students. No commas. Defining."},
      {t:"My mother, WHO IS A DOCTOR, works nights.", b:1, why:"Extra information about a person we already know. Commas. Non-defining."},
      {t:"The app THAT I USE EVERY DAY crashed.", b:0, why:"It tells us which app. *That* is possible only in a defining clause."},
      {t:"Tokyo, WHICH HAS MANY TRAINS, is easy to cross.", b:1, why:"The city is already clear. The clause adds information. Non-defining."},
      {t:"The woman WHOSE BAG WAS STOLEN called the police.", b:0, why:"It says which woman. No commas. Defining."},
      {t:"The test was canceled, WHICH SURPRISED EVERYONE.", b:1, why:"*Which* refers to the whole idea. This always takes a comma. Non-defining."}
    ]},
    M("e5u10-l2-x2","Which sentence is correct?",2,[
      ["*The report, that she wrote, was long.*","*That* cannot follow a comma in a non-defining clause. Use *which*."],
      ["*The man whom lives next door is friendly.*","*Whom* is the object form. The pronoun here is the subject of *lives*, so use *who*."],
      ["*The report she wrote was long.*","Right. The pronoun is an object, the clause is defining, and it can be dropped."],
      ["*The report, she wrote, was long.*","As a relative clause, this does not work: a clause with commas must keep its pronoun. (Read another way, *she wrote* is a comment that means she wrote that the report was long. That is a different sentence.)"]
    ]),
    {id:"e5u10-l2-x3", type:"sort", q:"Can the relative pronoun be left out? (Think: is it an object in a defining clause?)", buckets:["Can be left out","Must stay"], items:[
      {t:"The film that we watched was slow.", b:0, why:"*That* is the object of *watched*, and the clause is defining."},
      {t:"The film that won the prize was slow.", b:1, why:"*That* is the subject of *won*. Without it, there is no subject."},
      {t:"The student whose phone rang apologized.", b:1, why:"*Whose* is possessive and always stays."},
      {t:"Our teacher, who we like, is leaving.", b:1, why:"The clause is non-defining, because of the commas. The pronoun stays."},
      {t:"The woman who I spoke to is the manager.", b:0, why:"*Who* is the object of the preposition *to*, and the clause is defining. *The woman I spoke to.*"},
      {t:"The man who answered the phone was rude.", b:1, why:"*Who* is the subject of *answered*."}
    ]},
    {id:"e5u10-l2-x4", type:"spot", q:"A learner wrote this paragraph about her apartment. Tap each place that is **not** standard English.", ask:"is not standard", parts:[
      "I live in a small apartment ", {t:"that it has two rooms", flag:true, why:"An extra pronoun. *That* already stands for the apartment. Say *that has two rooms*."}, ". My landlord, ", {t:"who is very kind", flag:false, why:"Correct: a non-defining clause for a person, with commas."}, ", repaired the window ", {t:"that I broke", flag:false, why:"Correct: a defining clause with *that* and no commas."}, ". The neighbor ", {t:"what lives upstairs", flag:true, why:"*What* is not a relative pronoun. Use *who* or *that*."}, " plays the piano. The room ", {t:"I use for study", flag:false, why:"Correct: the pronoun is dropped because it is the object of *use* in a defining clause."}, " has a big window."
    ]},
    {id:"e5u10-l2-x5", type:"number", q:"In how many places can the relative pronoun be left out? “The woman who lives next door has a dog that barks. The dog, which we call Max, is a friend of the cat that I adopted. The students whose bikes were stolen met the officer who I know.”", answer:2, tol:0, unit:"places", why:"Only *that I adopted* and *who I know* can lose the pronoun: each is a defining clause and the pronoun is an object. *Who lives* and *that barks* have subject pronouns. *Which we call Max* is non-defining. *Whose* always stays.", wrongs:[
      {v:3, tol:0, why:"You counted *which we call Max*. It is an object relative, but it is non-defining, so the pronoun must stay."},
      {v:1, tol:0, why:"You found one of the two. Look again at the second sentence and the last sentence: each has a defining clause whose pronoun is an object."}
    ], hint2:"First, find the subject pronouns: they always stay. Then ignore anything with commas."},
    {id:"e5u10-l2-x6", type:"match", q:"Match each sentence to its meaning or its problem.", pairs:[
      ["*The man who lives here is a chef.*","The pronoun is the subject, so it must stay","Without *who*, the clause has no subject: *the man lives here* is a new sentence."],
      ["*The person to whom I spoke was kind.*","A formal pattern with the preposition first","After a fronted preposition, English uses *whom* or *which*."],
      ["*The person I spoke to was kind.*","A neutral pattern: pronoun dropped, preposition last","This is the most common form in speech and everyday writing."],
      ["*The book that I read it was long.*","An extra pronoun that should be removed","*That* already stands for the book. *It* is a copy and the sentence should not have it."]
    ]},
    {id:"e5u10-l2-x7", type:"order", q:"Put these steps in a good order for deciding the punctuation of a relative clause.", items:[
      {t:"Find the noun that the clause describes.", why:"The clause belongs to a noun, so start there."},
      {t:"Ask: does the clause tell me which one, or add extra information?", why:"This is the main question. It decides the meaning."},
      {t:"If it tells which one, write it with no commas. If it adds information, use commas.", why:"Punctuation follows the meaning."},
      {t:"Check the pronoun: in a clause with commas, use *who* or *which*, not *that*.", why:"*That* belongs only to defining clauses."},
      {t:"If the clause is defining and the pronoun is an object, decide whether to drop it.", why:"This last choice is a style choice. It is not available in a non-defining clause."}
    ]},
    {id:"e5u10-l2-x8", type:"explain", q:"Toby taught English in the Japanese countryside for two years. A former student of his writes: “Why is *The book that I read it* wrong? In Japanese I say 私が読んだ本 (*watashi ga yonda hon*), and I thought *it* helped.” Write the explanation Toby could give.", size:"3–5 sentences", prompt:"Toby could say: …", hint:"Say what *that* already does, and say what the Japanese pattern shows about the gap.", model:"Your idea is natural, because the Japanese phrase has no word to mark the end of the clause, and an extra word can feel helpful. In English the pronoun *that* already stands for the book. It is the object of *read*, so the clause has a gap after *read*: *the book that I read*. Adding *it* fills the gap twice. You can also drop *that* and say *the book I read*, which is close to your Japanese pattern. The main difference is the order: in English the clause follows the noun.", points:["Accepts that the learner’s guess is natural","Explains that the relative pronoun stands for the noun, so *it* is a copy","Shows the gap: *the book that I read*, or *the book I read*","Mentions that English puts the clause after the noun, and Japanese before it"]}
   ],
   apply:{
    intro:"These tasks use a text that you like and a free corpus or dictionary. COCA at english-corpora.org is free with a registered account and has a daily search limit.",
    tasks:[
     {t:"Collect twelve relative clauses", how:[
       "Open a news story or a chapter of a book. Find twelve relative clauses.",
       "For each one, write the noun it describes, the pronoun, and whether it is defining or non-defining.",
       "Check each one against the comma rule. Which pronoun did the writer choose when they dropped it, and when did they keep it?"
     ], write:"Noun… clause… pronoun or none… defining or not… commas yes or no…"},
     {t:"Corpus check: that or which", how:[
       "Open COCA at english-corpora.org and sign in. Search for *the book that* and then *the book which*.",
       "Compare the number of hits. Then use the chart or genre view, and note whether academic writing and spoken English differ.",
       "Look up *which* in Merriam-Webster and read any usage note about *that* and *which*. Write two sentences on what the evidence says."
     ], write:"Hits for that… for which… Genres… What the usage note says…"},
     {t:"Rewrite with and without the pronoun", how:[
       "Write six defining relative clauses, three with a subject pronoun and three with an object pronoun.",
       "Drop the pronoun where you can. Mark where you cannot.",
       "Write one of them in Japanese order (clause before the noun) and in English order. Say what changes."
     ], write:"Sentence… pronoun dropped? Yes or no… Why…"}
    ],
    proof:"A list of twelve relative clauses with class and punctuation. Corpus counts for *the book that* and *the book which*. Six sentences with the pronoun dropped or kept, with reasons."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Embedded content questions and relative clauses”", note:"Look for how the book describes the gap inside a relative clause, and its note on *that* and *which*."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u10-l3", title:"Reported speech", minutes:55,
   hook:{q:"On Monday Mei says: “I live in Kobe.” It is Friday, and she still lives there. Which report is correct?", options:["Mei said she lives in Kobe.","Mei said she lived in Kobe.","Both are correct","Neither is correct"], answer:2, reveal:"**Both are correct.** Many textbooks say that the verb must “go back one tense” in reported speech. This is a habit, not a law. When the fact is still true, you may keep the present: *Mei said she lives in Kobe*. The past form (*lived*) is also correct, and it is the safer choice when the fact may have changed. This lesson shows what changes in reported speech, what is optional, and which reporting verbs take which patterns."},
   goals:[
     "Turn direct speech into reported speech, and change pronouns and time words from the reporter’s point of view",
     "Explain that backshift is optional when the information is still true, and say when it is the better choice",
     "Use reporting verbs with their correct patterns: *tell someone that*, *suggest doing*, *insist that*, *promise to*",
     "Report questions with statement word order, and use *if* and *whether*",
     "Compare with Japanese, where the quoted verb does not shift"
   ],
   learn:[
    {h:"Direct speech and reported speech", body:[
      {lead:"When you tell someone what a person said, you have two choices. You can quote the exact words (direct speech), or you can report them in your own sentence (reported speech)."},
      "A reported sentence has two parts: a **reporting clause** (*Mei said*) and a **reported clause** (*she lived in Kobe*). The reporting clause has a [[hew-reporting-verb|reporting verb]], such as *say, tell, ask, suggest*.",
      {table:[["","Example"],["Direct speech","Mei said, “I’m tired.”"],["Reported speech","Mei said (that) she was tired."]]},
      "Three kinds of word can change when you report. They depend on **who is speaking now, and when and where**, not on a fixed rule.",
      {list:[
        "**Pronouns.** The reporter looks from a new point of view. *“I’m tired,” said Mei* becomes *Mei said she was tired.* If Mei were speaking to you, it would be *Mei told me she was tired.*",
        "**Time and place words.** *Now, today, tomorrow, yesterday, here, this* point to the moment and place of speaking. If you report at a different time or place, they change: *now* becomes *then*, *today* becomes *that day*, *tomorrow* becomes *the next day*, *yesterday* becomes *the day before*, *here* becomes *there*. If you report on the same day and in the same place, they stay: *Amara said she would call tomorrow* is correct on the same day.",
        "**Verb forms.** This is called **[[hew-backshift|backshift]]**, and it is optional, as the next section shows."
      ]}
    ]},
    {h:"Backshift: optional, not a law", body:[
      "Backshift means that the verb in the reported clause moves one step into the past: *is* becomes *was*, *will* becomes *would*, *can* becomes *could*. It is common, because many reports describe things that were true in the past.",
      {table:[["Direct speech","Reported speech with backshift"],["*I live here.* (present)","*She said she lived there.*"],["*I’m working.*","*She said she was working.*"],["*I’ve finished.* (present perfect)","*She said she had finished.*"],["*I finished.* (past simple)","*She said she had finished* or *she finished.*"],["*I will help.*","*She said she would help.*"],["*I can swim.*","*She said she could swim.*"],["*I must go.*","*She said she had to go* or *she must go.*"],["*I would, could, should, might, ought to…*","These stay the same."]]},
      "Now the important point. A descriptive grammar does not call backshift a rule. It is a choice, and the choice follows meaning.",
      {list:[
        "**The fact is still true, and you are reporting it soon:** you may keep the present. *The guide said the museum opens at nine.* *Tomás said water boils at a lower temperature on a mountain.*",
        "**The fact may not be true now, or you are not sure:** use the past. *Yuki told me last year that she worked at a bank.* (She may have changed jobs.)",
        "**The event is over:** use the past. *The forecast said it would rain on Saturday.* (Reported on Sunday.)",
        "**You want distance from the claim:** the past can show that you are only passing on the words. *He said he was innocent.*"
      ]},
      "A speaker often backshifts out of habit, and a listener does not hear a mistake in either form. The ones that sound wrong are those that mix times inside one report: *Mei said she lives in Kobe last year*. If you teach this, say that both forms are possible, and show when each is the better choice.",
      {key:"Backshift is a choice. Keep the present when the information is still true. Use the past when it may no longer be true, or when the event is finished."},
      {h:"Mariya practices"},
      "Mariya studies English interpreting and gets nervous when she speaks English. She practices by listening to a short meeting recording and then reporting it to a classmate. The speaker says: “We’re launching in March, and I can confirm the date.” Mariya can report it two ways. *The speaker said they’re launching in March* is natural if the plan is still current. *The speaker said they were launching in March and that he could confirm the date* is the more usual report of a recording. Both are accurate, and she can choose by asking: is this plan still current for my listener?",
      {fig:'<svg viewBox="0 0 340 262"><text x="170" y="20" text-anchor="middle">Should the verb move back?</text><rect class="d-panel" x="14" y="32" width="312" height="44" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Mei: “I live in Kobe.”</text><text class="s" x="170" y="69" text-anchor="middle">said on Monday</text><rect class="d-sage" x="14" y="92" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="112" text-anchor="middle">Reported on Friday, still true</text><text x="170" y="134" text-anchor="middle">Mei said she lives in Kobe.</text><text x="170" y="152" text-anchor="middle">Mei said she lived in Kobe.</text><rect class="d-gold" x="14" y="176" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="196" text-anchor="middle">Reported later, she has moved</text><text x="170" y="218" text-anchor="middle">Mei said she lived in Kobe.</text><text class="s" x="170" y="236" text-anchor="middle">the past form is the clear choice</text></svg>', alt:"Mei says she lives in Kobe. When the report is made on Friday and it is still true, either she lives or she lived is possible. When she has moved, only she lived is clear.", cap:"Both forms are possible while the fact is still true. The past form is the clear choice when the fact has changed."}
    ]},
    {h:"Reporting verbs and their patterns", body:[
      "*Say* is the neutral reporting verb, and learners use it for everything. Other verbs add meaning (*promise, admit, warn, claim*) and each has its own pattern. The pattern is part of the verb, so it must be learned with it.",
      {table:[["Pattern","Verbs","Example"],["verb + (that) clause","*say, explain, mention, announce, claim*","*She said (that) she was late.*"],["verb + person + (that) clause","*tell, inform, remind, warn, assure*","*She told me (that) she was late.*"],["verb + person + *to*-infinitive","*tell, ask, advise, warn, remind, order, invite*","*She told me to wait.*"],["verb + *to*-infinitive (no person)","*agree, promise, offer, refuse, threaten, decide*","*He promised to call.*"],["verb + *-ing*","*suggest, recommend, admit, deny, mention*","*She suggested leaving early.*"],["verb + person + preposition + *-ing*","*thank (for), blame (for), accuse (of), congratulate (on)*","*They accused him of lying.*"]]},
      {h:"Patterns that learners often get wrong"},
      {list:[
        "**Say and tell.** *Tell* needs a person: *She told me that she was tired.* *Say* does not: *She said that she was tired.* If you add a person to *say*, use *to*: *She said to me that…* The forms *She said me* and *She told that she…* are not standard.",
        "**Suggest.** It takes a clause or *-ing*, and it **does not take a person followed by *to*.** Say *She suggested that we leave*, or *She suggested leaving*. Never *She suggested me to leave* or *She suggested to leave*. The same is true of *recommend* (*recommended that I go*, *recommended going*).",
        "**Explain.** The person comes with *to*: *He explained the rule to me* and *He explained to me that…*. *He explained me the rule* is not standard.",
        "**Insist.** It has two uses. It can report a demand, with a clause that uses the base form, which is usual in American English: *She insisted that he come.* British English often uses *should come*. It can also report a firm statement, with a normal tense: *She insisted that she was right.* With an *-ing* verb, use *on*: *She insisted on paying.*"
      ]},
      "The form *suggest that he go* (base form, with no *-s*) is called the **mandative subjunctive**. It is more common in American English. British English more often uses *should*: *suggest that he should go*. *Suggest that he goes* is also heard, mainly in informal British English. In formal American writing, the base form is the safe choice."
    ]},
    {h:"Reported questions and requests", body:[
      "In a direct question the helping verb comes before the subject: *Where did you live?* In a reported question, the clause returns to **statement word order**, and there is no *do*-support (see Unit 6) and no question mark.",
      {table:[["Direct question","Reported question"],["*Where do you live?*","*She asked where I lived.*"],["*What time does it start?*","*He asked what time it started.*"],["*Are you ready?*","*She asked if I was ready.* / *whether I was ready.*"],["*Did you call him?*","*He asked whether I had called him.*"]]},
      "Yes/no questions need *if* or *whether*. *Whether* is a little more formal, and it is needed before *or not* and after a preposition: *She asked whether or not I agreed. I talked about whether to go.*",
      "The same order is needed in **polite direct questions**, because they contain an embedded question: *Could you tell me where the station is?* (not *where is the station*). A learner who says *She asked me where did I go* has used the direct order inside a reported clause.",
      "Requests and commands become a *to*-infinitive after *tell, ask* or *order*: *“Please wait,” she said → She asked me to wait.* *“Don’t touch it,” he said → He told me not to touch it.*",
      {h:"Choosing a reporting verb"},
      "The verb you choose adds a view. *She said the bridge was safe* only reports. *She claimed the bridge was safe* may suggest doubt. *She admitted she had made a mistake* suggests that she was at fault. News writers choose these verbs with care, and readers should notice them. Unit 8 looked at a similar choice when the agent disappears from a passive.",
      {h:"Compared with Japanese"},
      "Japanese quotes a sentence with *to* (と) and does not shift the verb. *Kare wa raishū kuru to itta* (彼は来週来ると言った) means “He said he would come next week.” The verb *kuru* (come) stays in its plain present form inside the quotation, as it was in the original words. Japanese also has no *do*-support or inversion in questions: *Kare wa nanji ni hajimaru no ka kiita* (彼は何時に始まるのか聞いた) “He asked what time it starts.” So a Japanese speaker does not meet backshift or question inversion in Japanese. This helps explain why backshift feels like a new idea, and why *She asked me where did I go* appears, because the learner is applying the English direct-question order."
    ]}
   ],
   try:[
    {id:"e5u10-l3-x1", type:"sort", q:"Each report is made soon after the speech, unless the item says otherwise. Which verb form is the better choice?", buckets:["The present can stay","Backshift is the better choice"], items:[
      {t:"The guide said, “The museum opens at nine.” (still true)", b:0, why:"The fact is still true and the report is recent, so *the museum opens at nine* is fine."},
      {t:"Yuki told me last year, “I work at a bank.” (she has since moved)", b:1, why:"The fact may have changed. *Yuki told me she worked at a bank* is clearer."},
      {t:"The forecast said, “It will rain on Saturday.” (reported on Sunday)", b:1, why:"The event is over, so *would rain* is the right form."},
      {t:"Tomás said, “Water boils at a lower temperature on a mountain.”", b:0, why:"A general fact. It does not change, so the present is natural."},
      {t:"Hana said, “I can swim.” (reported the same day, still true)", b:0, why:"The ability is still true, so *Hana said she can swim* is fine. *Could* is also fine."},
      {t:"The manager said, “I’ll call you.” (he never did)", b:1, why:"The promise is in the past, so *he said he would call* fits."}
    ]},
    M("e5u10-l3-x2","Which sentence is **not** standard English?",1,[
      ["*She suggested that we leave early.*","This is standard. *Suggest* takes a *that*-clause."],
      ["*She suggested me to leave early.*","Right. *Suggest* does not take a person plus *to*-infinitive. Use *suggested that I leave* or *suggested leaving*."],
      ["*She suggested leaving early.*","This is standard. *Suggest* takes an *-ing* form."],
      ["*She suggested to me that we leave early.*","This is standard. *To* plus a person can follow *suggest* before a *that*-clause."]
    ]),
    {id:"e5u10-l3-x3", type:"match", q:"Match each reporting verb to its pattern.", pairs:[
      ["*suggest*","-ing form or *that*-clause","*She suggested leaving.* *She suggested that we leave.*"],
      ["*promise*","*to*-infinitive","*He promised to call.* No person is needed before *to*: the one who calls is the one who promises."],
      ["*tell*","person + *to*-infinitive (or person + *that*)","*She told me to wait.* *She told me that she was late.*"],
      ["*explain*","*to* + person, then the clause","*He explained to me that it was closed.* The person always comes with *to*."]
    ]},
    {id:"e5u10-l3-x4", type:"spot", q:"Mariya wrote a summary of a meeting for her class. The meeting was this morning and the plans have not changed. Tap each phrase that is **not** standard English.", ask:"is not standard", parts:[
      "The manager told us that the launch ", {t:"will be", flag:false, why:"Fine. The plan is still current, so the present-time form can stay."}, " in March. She ", {t:"suggested us to prepare", flag:true, why:"*Suggest* does not take a person plus *to*. Say *suggested that we prepare* or *suggested preparing*."}, " early. Tomás ", {t:"asked where the room was", flag:false, why:"Correct. The reported question has statement word order."}, ". Amara ", {t:"asked when did the meeting start", flag:true, why:"The reported question must have statement order: *when the meeting started*."}, ". The manager ", {t:"explained the plan to us", flag:false, why:"Correct. *Explain* takes *to* before the person: *explain something to someone*."}, ", and ", {t:"insisted on starting", flag:false, why:"Correct. *Insist* takes *on* before an *-ing* form."}, " on time."
    ]},
    {id:"e5u10-l3-x5", type:"number", q:"How many of these reported questions have the correct word order? (1) She asked where I lived. (2) He asked what time did the bus leave. (3) They asked if I wanted tea. (4) She wondered why was he late. (5) I asked her whether she had a pen. (6) He asked me did I know the way.", answer:3, tol:0, unit:"correct sentences", why:"Sentences 1, 3 and 5 have statement order after the question word or *if/whether*. Sentences 2, 4 and 6 keep the direct-question order (*did the bus*, *was he*, *did I*).", wrongs:[
      {v:6, tol:0, why:"You accepted all of them. Sentences 2, 4 and 6 keep question word order inside the reported clause."},
      {v:2, tol:0, why:"You may have rejected *whether* in sentence 5. *Whether* is correct there, and sentences 1 and 3 are also correct."}
    ], hint2:"A reported question has no helping verb before the subject. Check where *did*, *was* and *did* appear."},
    {id:"e5u10-l3-x6", type:"order", q:"Put these steps in a good order for turning “Tomás said, ‘I will bring my laptop tomorrow.’” into reported speech.", items:[
      {t:"Choose the reporting verb and the person who is speaking (*Tomás said*).", why:"The reporting clause comes first and sets the point of view."},
      {t:"Change the pronouns to fit your point of view (*my* becomes *his*).", why:"*My laptop* belongs to Tomás, so a reporter says *his laptop*."},
      {t:"Decide whether the time word still fits (*tomorrow* or *the next day*).", why:"If you report on the same day, *tomorrow* stays. Otherwise change it."},
      {t:"Decide whether to backshift (*will* or *would*).", why:"The plan may still be true or not. The choice is yours."},
      {t:"Check the final sentence for sense and tense.", why:"A last read ensures the times agree: *Tomás said he would bring his laptop the next day.*"}
    ]},
    M("e5u10-l3-x7","Which sentence is correct?",2,[
      ["*She said me that she was tired.*","*Say* does not take a person directly. Use *told me* or *said to me*."],
      ["*She told that she was tired.*","*Tell* needs a person here: *She told me that…*."],
      ["*She told me that she was tired.*","Right. *Tell* takes a person, then the clause."],
      ["*She told to me that she was tired.*","*Tell* takes the person directly, with no *to*."]
    ]),
    {id:"e5u10-l3-x8", type:"explain", q:"Amara is learning English. Her teacher wrote *suggest him to go* in red. She asks: “Why is it wrong? *Tell him to go* is correct, and *suggest* means almost the same.” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say that each verb has its own pattern, give the two patterns for *suggest*, and give a way to remember them.", model:"Your logic is sensible, because *tell* and *suggest* are close in meaning. But each reporting verb has its own pattern, and you must learn it with the verb. *Tell* takes a person and a *to*-infinitive. *Suggest* does not. After *suggest* you use a *that*-clause (*suggested that he go*) or an *-ing* form (*suggested going*). So you can say *I suggested that he go* or *I suggested going*, but not *I suggested him to go*. A dictionary entry shows the patterns for each verb, so check it when you learn a new one.", points:["Accepts that the two verbs are close in meaning","Says that each reporting verb has its own pattern","Gives the two patterns for *suggest*: a *that*-clause or *-ing*","Suggests checking the dictionary entry for the patterns"]}
   ],
   apply:{
    intro:"These tasks use short recordings or texts that you choose, and a free dictionary or corpus. COCA at english-corpora.org is free with a registered account and has a daily search limit.",
    tasks:[
     {t:"Report a short interview", how:[
       "Find a two-minute interview or news clip with a person speaking. Write down five things they say, word for word.",
       "Report each one in writing in two ways: with backshift and without it. Say which one is better for you, and why.",
       "Change the pronouns and time words, and note which ones you changed."
     ], write:"Original words… report with backshift… without… which is better and why…"},
     {t:"Corpus check: the suggest patterns", how:[
       "Open COCA and sign in. Search for *suggested that he go*, *suggested that he goes* and *suggested that he should go*.",
       "Compare the hits, and use the genre view to see whether newspapers, academic writing and fiction differ.",
       "Search for *suggested him to*. Write one sentence on what you find."
     ], write:"Hits for go… goes… should go… suggested him to… What the evidence says…"},
     {t:"Check patterns in a dictionary", how:[
       "Look up *suggest, insist, promise, explain, admit* and *tell* in the Cambridge Dictionary or Merriam-Webster.",
       "For each one, copy the pattern and one example sentence.",
       "Write six reported sentences of your own using those verbs."
     ], write:"Verb… pattern… my sentence…"}
    ],
    proof:"Five reported sentences, each with and without backshift, with reasons. Corpus counts for the three *suggest that* forms. A table of six verbs with patterns and sentences."
   },
   read:[
    {book:"eling", where:"The Syntax chapter, section “Embedded content questions and relative clauses”", note:"Look for how the book describes questions inside another clause."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u10-l4", title:"Given and new information", minutes:55,
   hook:{q:"Mei built a small robot for the science fair. Which sentence follows it best?", options:["A panel of three teachers judged it.","It was judged by a panel of three teachers.","Both are equally good","Neither is grammatical"], answer:1, reveal:"**The second one flows better.** Both are grammatical. But *it* is already known, so it is a good start for the sentence, and the long new information (*a panel of three teachers*) comes last. English tends to move from known to new, and from short to long. This lesson shows the tools that let you place information: end focus, end weight, clefts, *there* sentences and the passive."},
   goals:[
     "Explain given and new information, and say why many sentences start with what the reader already knows",
     "Use end focus and end weight to place new and long information last",
     "Build and use it-clefts and wh-clefts, and say what each one does",
     "Use *there* sentences and the passive to improve flow",
     "Compare English word order with the Japanese particles wa and ga"
   ],
   learn:[
    {h:"Given before new", body:[
      {lead:"A sentence carries two kinds of information. Some of it is **given**: the reader or listener already knows it, or can guess it. The rest is **new**: it is the reason for saying the sentence."},
      "In plain English sentences, the two kinds usually come in the same order: given first, new last. You can test this. Read two possible second sentences for the same first sentence.",
      {ex:"Amara bought a used bicycle last week.\n\n(a) It needs a new chain.\n(b) A new chain is what it needs.\n\nBoth are possible. (a) starts with *it*, which is given, and ends with the new detail. It reads as the natural next sentence.", label:"Worked example", mono:true},
      "The starting point of a sentence is often called the **topic** or theme: what the sentence is about. The rest says something new about it. A good paragraph keeps a chain: the new information of one sentence becomes the given information that starts the next.",
      {ex:"Amara bought a used bicycle last week. The bicycle needs a new chain. The chain costs about twelve dollars. That is cheap enough to buy today.", label:"Worked example: a chain of given and new", mono:true},
      "This is not a grammar rule that you can break and be wrong. It is a pattern that readers expect. When it is missing, the text feels hard to follow even if each sentence is correct."
    ]},
    {h:"End focus and end weight", body:[
      "**End focus** is the tendency to put the most important new information at the **end** of a clause. In speech, the main stress usually falls on the last important word (Unit 3 called this sentence stress). *She bought a CAR.* The listener hears the car as the news.",
      "A speaker can move the stress to show a contrast, as in *SHE bought a car (not him).* But the default is the end. This is why *Amara gave the manager a LETTER* sounds normal: the letter is the news.",
      "**[[hew-end-weight|End weight]]** is a second tendency: **long, heavy phrases go last.** A heavy phrase has many words or a clause inside it. English is happier with a short phrase before a long one.",
      {table:[["Heavy phrase too early","Heavy phrase last"],["*She handed the man who had come to repair the roof the keys.*","*She handed the keys to the man who had come to repair the roof.*"],["*That she won the prize surprised everyone.*","*It surprised everyone that she won the prize.*"],["*To check the data twice is important.*","*It is important to check the data twice.*"]]},
      "The last two rows use the dummy subject *it* (see Unit 6). English moves a long clause to the end and puts *it* in the subject position. Writers do this all the time. A long subject makes the reader wait for the verb.",
      {key:"Put the known and the short first. Put the new and the long last."},
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="20" text-anchor="middle">A chain of given and new</text><rect class="d-sage" x="14" y="32" width="150" height="38" rx="6" stroke-width="2"/><text x="89" y="56" text-anchor="middle">Amara bought</text><rect class="d-gold" x="176" y="32" width="150" height="38" rx="6" stroke-width="2"/><text x="251" y="56" text-anchor="middle">a used bicycle</text><rect class="d-sage" x="14" y="92" width="150" height="38" rx="6" stroke-width="2"/><text x="89" y="116" text-anchor="middle">The bicycle needs</text><rect class="d-gold" x="176" y="92" width="150" height="38" rx="6" stroke-width="2"/><text x="251" y="116" text-anchor="middle">a new chain</text><rect class="d-sage" x="14" y="152" width="150" height="38" rx="6" stroke-width="2"/><text x="89" y="176" text-anchor="middle">The chain costs</text><rect class="d-gold" x="176" y="152" width="150" height="38" rx="6" stroke-width="2"/><text x="251" y="176" text-anchor="middle">about twelve dollars</text><text class="s" x="89" y="212" text-anchor="middle">given: starts the sentence</text><text class="s" x="251" y="212" text-anchor="middle">new: comes last</text><text class="s" x="170" y="238" text-anchor="middle">each new part becomes the next given part</text></svg>', alt:"Three rows of two boxes. On the left, the given part: Amara bought, The bicycle needs, The chain costs. On the right, the new part: a used bicycle, a new chain, about twelve dollars. The new part of each row becomes the given part of the next.", cap:"In a flowing paragraph, the new information of one sentence becomes the starting point of the next."}
    ]},
    {h:"Clefts", body:[
      "A **[[hew-cleft|cleft sentence]]** splits one clause into two parts so that one part gets special focus. English has two main kinds.",
      {table:[["Kind","Pattern","Example"],["it-cleft","*It* + *be* + focus + *who/that* clause","*It was Mei who found the error.*"],["wh-cleft (pseudo-cleft)","*What* clause + *be* + focus","*What I need is a break.*"],["reversed wh-cleft","focus + *be* + *what* clause","*A break is what I need.*"]]},
      "A cleft does two jobs. It puts the focus on one item, and it takes for granted the rest. *It was Mei who found the error* takes for granted that someone found the error, and it says that the person was Mei. That is why clefts are used to **correct** or **contrast**: *No, it was Mei who found the error, not Kaito.*",
      "A wh-cleft is useful for introducing a new point that you want to put last. *What worried us was the delay.* The listener hears the known frame (*what worried us*) first and the news (*the delay*) last.",
      "Clefts can also focus other parts. *It was in March that the plan changed* focuses the time. *It was the delay that worried us* focuses the thing. Use *who* for people and *that* for others, and *that* for people is also acceptable.",
      "Don't mix up a cleft with the dummy *it* of *It is raining*. In a cleft there is a *who/that* clause, and you can rebuild the plain sentence: *Mei found the error.*",
      {h:"Compared with Japanese"},
      "Japanese has a close match, the pattern *no wa … desu* (のは…です). *Kita no wa Yamada-san desu* (来たのは山田さんです) is “It was Yamada who came”, or “The one who came was Yamada.” The part before *wa* is the given frame. The part before *desu* is the focus. The match is useful when you teach clefts: it shows that the English structure has a Japanese counterpart."
    ]},
    {h:"There sentences and the passive for flow", body:[
      "The existential [[hew-existential-there|*there*]] (Unit 6) has a second job: it puts new information after the verb. Compare these.",
      {table:[["Without *there*","With *there*"],["*A man is at the door.*","*There is a man at the door.*"],["*Three buses go to the airport.*","*There are three buses to the airport.*"],["*A problem exists with the server.*","*There is a problem with the server.*"]]},
      "The noun after *there is* is usually new, so it is usually indefinite (*a man*, *three buses*). *There is the man at the door* sounds odd in its existential use, though it is fine in a list (*What can I eat? There’s the leftover pasta*). The *there* sentence lets the sentence begin with an empty subject and end on the news.",
      "The **passive** (Unit 8) does a similar job for flow. It moves the known thing to the subject position and pushes the doer to the end, or removes it. *The bridge was built in 1920 by a local firm that had no earlier experience with steel.* The bridge is the topic, and the long agent is last, which fits end weight.",
      {list:[
        "Use the **passive** when the known thing should start the sentence: *Mei built a robot. It was judged by three teachers.*",
        "Use the **active** when the doer is the known thing: *Three teachers judged the robot. They gave it first prize.*",
        "Use the **passive without an agent** when the doer is unknown or unimportant: *The window was broken.* Unit 8 explains how this can also hide responsibility."
      ]},
      {h:"Compared with Japanese: wa and ga"},
      "Japanese marks given and new information with particles. In general, *wa* (は) marks the topic, often something known, and *ga* (が) marks a subject that is new or in focus. A classic story opening shows it. *Mukashi mukashi, aru tokoro ni ojīsan to obāsan ga imashita. Ojīsan wa yama e shibakari ni ikimashita.* (昔々、あるところにおじいさんとおばあさんがいました。おじいさんは山へ芝刈りに行きました。) “Once upon a time there lived an old man and an old woman. The old man went to the mountain to cut brushwood.” In the first sentence the characters are new, so they take *ga*. In the second they are known, so the old man takes *wa*.",
      "English has no such particles. It uses other tools for the same job: **articles** (*a* for new, *the* for known), **word order**, **stress**, **there sentences**, the **passive** and **clefts**. The English version of the story above uses *there lived* and then *the old man*. This is useful when you explain articles (Unit 9) and when you notice why a Japanese learner’s sentence feels “out of order”: the learner may be using the logic of *wa* and *ga* in English word order."
    ]}
   ],
   try:[
    M("e5u10-l4-x1","Tomás wrote a report on the new bus route. Which sentence follows it best?",1,[
      ["*A group of residents who live near the old station read it.*","Grammatical, but it starts with the new, heavy phrase and puts the known *it* at the end."],
      ["*It was read by a group of residents who live near the old station.*","Right. The known *it* starts the sentence, and the long new information comes last."],
      ["*Read by a group of residents who live near the old station it was.*","This word order is not natural in standard prose."],
      ["*Residents read it, a group who live near the old station.*","This is awkward. The new information is split, and *a group* is left loose at the end."]
    ]),
    {id:"e5u10-l4-x2", type:"sort", q:"Which structure is each sentence?", buckets:["it-cleft","wh-cleft","there sentence","passive"], items:[
      {t:"It was Mei who found the error.", b:0, why:"*It* + *was* + focus + *who* clause. An it-cleft."},
      {t:"What I need is a break.", b:1, why:"A *what* clause + *is* + focus. A wh-cleft."},
      {t:"There is a problem with the server.", b:2, why:"Existential *there* introduces new information after the verb."},
      {t:"The bridge was built in 1920 by a local firm.", b:3, why:"*Was built* with an agent in a *by*-phrase. A passive."},
      {t:"It was in March that the plan changed.", b:0, why:"An it-cleft that focuses on the time."},
      {t:"What worried us was the delay.", b:1, why:"A wh-cleft that puts the news last."}
    ]},
    M("e5u10-l4-x3","Which sentence follows the principle of end weight?",1,[
      ["*She handed the man who had come to repair the roof the keys.*","The long phrase comes before a short one, so the reader waits for the keys."],
      ["*She handed the keys to the man who had come to repair the roof.*","Right. The short phrase comes first and the long phrase last."],
      ["*She handed to the man who had come to repair the roof the keys.*","The long phrase still comes before the short object, and the word order is awkward."],
      ["*The keys to the man who had come to repair the roof she handed.*","This word order is not natural in standard prose."]
    ]),
    {id:"e5u10-l4-x4", type:"spot", q:"Read this short paragraph. Tap each sentence that has the long, new information in the wrong place.", ask:"has heavy new information too early", parts:[
      {t:"The town has a small harbor. ", flag:false, why:"Fine. A short, simple opening that introduces the topic."},
      {t:"A ferry that takes people and bicycles to the island across the bay leaves from it every hour. ", flag:true, why:"The new, heavy subject comes first, and the known *harbor* (*it*) comes at the end. Try: *Every hour a ferry leaves from it, taking people and bicycles to the island.*"},
      {t:"The ferry is popular with tourists. ", flag:false, why:"Fine. It starts with the known *ferry* and ends with the new detail."},
      {t:"That the crossing is cheap and the view is beautiful is part of the reason. ", flag:true, why:"A long clause as subject makes the reader wait. Say: *Part of the reason is that the crossing is cheap and the view is beautiful.*"},
      {t:"Many visitors come back every year.", flag:false, why:"Fine. A short sentence with the news at the end."}
    ]},
    {id:"e5u10-l4-x5", type:"number", q:"How many of these sentences are clefts? (1) It was Mei who found the error. (2) What worried us was the delay. (3) It is raining. (4) There is a bus at six. (5) It was in March that the plan changed. (6) The error was found by Mei.", answer:3, tol:0, unit:"clefts", why:"Sentences 1, 2 and 5 are clefts. Sentence 3 has a dummy *it* with no clause to split, sentence 4 is a *there* sentence, and sentence 6 is a passive.", wrongs:[
      {v:4, tol:0, why:"You counted *It is raining*. The *it* there is a dummy subject, and you cannot rebuild a plain sentence from it."},
      {v:2, tol:0, why:"You missed one. Sentence 5 is a cleft on the time. You can rebuild *The plan changed in March.*"}
    ], hint2:"A cleft has a clause that you can put back into a plain sentence: *It was Mei who found…* gives *Mei found…*"},
    {id:"e5u10-l4-x6", type:"match", q:"Match each sentence to what it does best.", pairs:[
      ["*It was Mei who found the error.*","Corrects or contrasts: not someone else","The cleft takes for granted that someone found it, and names the person."],
      ["*What I need is a break.*","Gives the known frame first and the news last","The *what* clause is the frame, and *a break* is the new information."],
      ["*There is a problem with the server.*","Introduces something new after the verb","*There* fills the subject place, and the new noun comes last."],
      ["*The report was written by a team from three universities.*","Keeps the known topic first and the long agent last","This is the passive used for flow and end weight."]
    ]},
    {id:"e5u10-l4-x7", type:"order", q:"Put these sentences in the order that makes the paragraph flow, with the new information of each sentence becoming the start of the next.", items:[
      {t:"Amara started a small garden behind her apartment.", why:"It introduces the topic: the garden."},
      {t:"The garden grew tomatoes, beans and herbs.", why:"It starts with the known *garden* and adds the new crops."},
      {t:"These vegetables fed her family all summer.", why:"*These vegetables* picks up *tomatoes, beans and herbs* and adds the new result."},
      {t:"In the fall she shared the extra with her neighbors.", why:"*She* is known, and *the extra* refers back. The new information is the sharing."}
    ]},
    {id:"e5u10-l4-x8", type:"explain", q:"Hana, who studies English, says: “In Japanese I use *wa* and *ga* to show what is old and what is new. English has no particles. How does English do it?” Write an explanation.", size:"4–5 sentences", prompt:"I would say: …", hint:"Give three or four English tools, and give one short example of each.", model:"English uses word order and a few other tools for the same job. The known information usually comes first, and the new information comes last, so a sentence starts with *it* or *the robot* and ends with the news. Articles help: *a* usually shows something new and *the* something known. *There* sentences, such as *There is a problem*, put the new noun after the verb. The passive lets the known thing be the subject, as in *The robot was judged by three teachers*. Clefts, such as *It was Mei who found the error*, give extra focus to one part. The tools are different, but the idea is close to *wa* and *ga*.", points:["Says that English uses word order: the known comes first and the new comes last","Mentions articles (*a* for new, *the* for known)","Gives at least two more tools from *there* sentences, the passive and clefts","Connects the English tools to the Japanese particles"]}
   ],
   apply:{
    intro:"These tasks use paragraphs that you choose. Everything is free. A news site or a textbook works well.",
    tasks:[
     {t:"Mark given and new", how:[
       "Copy a paragraph of five to eight sentences from a news story or textbook.",
       "In each sentence, underline the given information once and the new information twice.",
       "Check: does the new part of one sentence become the given part of the next? Write down where the chain breaks."
     ], write:"Sentence… given… new… where the chain breaks…"},
     {t:"Find clefts, there sentences and passives", how:[
       "Search a news article or a long blog post for *It was … who/that*, *What … is* and *There is/are*.",
       "Copy two examples of each. Rewrite each as a plain sentence and say what you lose.",
       "Mark every passive in the same text, and say whether it keeps a known thing first or removes the doer."
     ], write:"Example… plain sentence… what changes…"},
     {t:"Fix a heavy sentence", how:[
       "Find or write three sentences with a long subject or a long phrase before a short one.",
       "Rewrite each one with the heavy part last, using *it*, a *there* sentence or the passive.",
       "Read both versions aloud. Which one is easier to follow?"
     ], write:"Original… rewrite… tool used… which is easier…"}
    ],
    proof:"One marked paragraph with given and new parts. Two examples each of clefts, *there* sentences and passives with plain rewrites. Three heavy sentences with rewrites."
   },
   read:[
    {book:"eling", where:"The Pragmatics chapter, section “At-issue vs. non-at-issue meaning”", note:"Look for how the book separates the main point of a sentence from information that is taken for granted. A cleft does this, too."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u10-l5", title:"Linking across sentences", minutes:55,
   hook:{q:"Is this sentence correct? *The train was late, however, we arrived on time.*", options:["Yes, however is a conjunction","No, however is not a conjunction, so the comma is too weak","Yes, but only in speech","No, because however cannot be used in the middle"], answer:1, reveal:"**No: *however* is not a conjunction.** It is a linking adverb. It connects ideas across sentences, but it cannot join two clauses with only a comma. Write *The train was late; however, we arrived on time*, or start a new sentence with *However,*, or use a real conjunction: *The train was late, but we arrived on time.* This lesson shows how a paragraph is held together and where linking words belong."},
   goals:[
     "Name the main cohesive devices: reference, substitution and ellipsis, repetition and synonyms, and linking words",
     "Use *this* plus a noun to point back, and avoid a vague *this*",
     "Tell linking adverbs (*however, therefore, moreover*) from conjunctions (*but, so, and*), and punctuate each correctly",
     "Avoid over-linking, and let word order and given-new order carry the logic",
     "Compare with Japanese *-te* chains, zero subjects and long sentences, and explain the differences kindly"
   ],
   learn:[
    {h:"What holds a text together", body:[
      {lead:"A text is more than a row of correct sentences. Its sentences must **connect**: the reader needs to see how each one follows from the one before. The word for this is [[hew-cohesion|cohesion]]."},
      "Grammar offers a small set of cohesive tools. Learn to name them. They explain why one paragraph reads smoothly and another feels like a list.",
      {table:[["Device","What it does","Example"],["Reference","A pronoun or *this/that/the* points back to something already named","*Amara bought a bicycle. It needs a new chain.*"],["Substitution and ellipsis","A short word or a gap replaces words already given","*Hana likes tea, and Tomás coffee.* (ellipsis) *I want a red one.* (substitution)"],["Repetition and related words","The same word, a synonym or a more general word","*the car … the vehicle … the machine*"],["Linking words","Words that say how two ideas relate","*however, therefore, for example, in addition*"]]},
      "Cohesion is also helped by the given-new order from Lesson 4. When each sentence starts with something already known, the reader does not have to search."
    ]},
    {h:"Reference, and this plus a noun", body:[
      "**Pronouns** are the simplest way to refer back. They need a clear **antecedent**, which is the noun they stand for. A pronoun with two possible antecedents confuses the reader. *The manager told Amara that she had to finish the report.* Who is *she*? Repeat the noun or rewrite: *The manager told Amara to finish the report.*",
      "**This and that** point back to an idea as well as to a noun. A bare *this* with no noun is a common problem in student writing. In *The council raised prices, the shops lost customers, and the harbor closed. This is a problem*, the word *this* can mean any of the three events, or all of them. Add a noun that names the idea: *This decline* or *This chain of events*.",
      {ex:"Vague:  The study found a link between sleep and memory. This is important.\nClear:  The study found a link between sleep and memory. This finding is important.\n\nThe noun after this is a summary word: this finding, this decision, this problem, this approach, this change.", label:"Worked example", mono:true},
      "A *this* + noun phrase is a strong cohesive tool, because the noun **packages** the previous idea into one name, and the reader can build on it. A good writer chooses the noun with care, because it also gives a judgment: *this success* and *this failure* package the same event in different ways.",
      {h:"Same word or a synonym?"},
      "Repeating a word is not a mistake. In technical writing, a repeated term is clearer than a series of synonyms, because a reader may think that a new word means a new thing. In an essay about *sensors*, do not change to *devices* and then *units* unless you mean something different."
    ]},
    {h:"Linking adverbs and conjunctions", body:[
      "Linking words come from two different classes, and they follow different punctuation rules. This is the main point of this lesson.",
      "**Conjunctions** join clauses in one sentence: *and, but, or, so, yet* (coordinators) and *because, although, while, if* (subordinators). Lesson 1 gave their rules.",
      "**Linking adverbs** (also called conjunctive adverbs) show a link between ideas, but they are adverbs. They cannot join two clauses with only a comma. Examples: *however, therefore, moreover, furthermore, nevertheless, instead, otherwise, besides, meanwhile, thus, then, also*.",
      {table:[["Meaning","Conjunction (one sentence, comma)","Linking adverb (needs a period or semicolon)"],["Contrast","*but, yet, although*","*however, nevertheless, instead*"],["Result","*so*","*therefore, thus, as a result, consequently*"],["Addition","*and*","*moreover, furthermore, in addition, besides*"],["Time","*and then, when, after*","*then, meanwhile, afterward*"]]},
      "A simple test tells you the class. A linking adverb can move inside its clause, and a conjunction cannot. *It was late. We, however, stayed.* *It was late. We stayed, however.* A conjunction stays in one place: *We stayed but* and *We but stayed* are not possible. The word *however* also has an adverb use meaning *no matter how*, with no link between sentences: *However hard she tried, she failed.* That one is not a linking word.",
      {h:"Three ways to punctuate a linking adverb"},
      {table:[["Pattern","Example"],["Period, then the adverb with a comma","*The train was late. However, we arrived on time.*"],["Semicolon, then the adverb with a comma","*The train was late; however, we arrived on time.*"],["Adverb in the middle, between commas","*The train was late. We, however, arrived on time.*"]]},
      "A comma alone is a splice: *The train was late, however, we arrived on time.* Notice that the same fix applies to *therefore*: *It rained, therefore we stayed in* is a splice, and *It rained, so we stayed in* is correct. The word *so* is a conjunction, and *therefore* is not.",
      {fig:'<svg viewBox="0 0 340 238"><text x="170" y="20" text-anchor="middle">Which punctuation fits?</text><rect class="d-sage" x="14" y="32" width="312" height="90" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Conjunction: but, so, and</text><text x="170" y="76" text-anchor="middle">It rained, so we stayed in.</text><text class="s" x="170" y="100" text-anchor="middle">comma + conjunction joins</text><text class="s" x="170" y="116" text-anchor="middle">two clauses in one sentence</text><rect class="d-gold" x="14" y="134" width="312" height="90" rx="8" stroke-width="2"/><text x="170" y="154" text-anchor="middle">Linking adverb: however, therefore</text><text x="170" y="178" text-anchor="middle">It rained. Therefore, we stayed in.</text><text class="s" x="170" y="202" text-anchor="middle">needs a period or a semicolon</text><text class="s" x="170" y="218" text-anchor="middle">a comma alone is a splice</text></svg>', alt:"Two panels. Conjunctions such as but, so and and join two clauses with a comma. Linking adverbs such as however and therefore need a period or a semicolon, and a comma alone makes a splice.", cap:"Conjunctions and linking adverbs mean similar things but need different punctuation."}
    ]},
    {h:"Not too many connectors", body:[
      "Many learners are taught a list of linking words and use them in every sentence: *Firstly, … Moreover, … Furthermore, … In addition, … Therefore,*. The result sounds mechanical. A link word should say something that the order of the sentences does not already say.",
      {list:[
        "If the second sentence obviously follows the first, you often need no connector. *The harbor closed. Shops lost customers.* A reader sees the result.",
        "Use a connector when the relation could be missed, and especially for **contrast** (*however*) and **result** (*as a result*). These are the relations that readers most need to see.",
        "Vary the tools. Use a *this* plus noun, a subordinate clause, or a given-new link, and use a linking adverb less often.",
        "Put the connector where it helps: at the start of the sentence is common, and in the middle (*We, however, …*) is more formal and can feel lighter."
      ]},
      "Speech works differently. People link with small words like *so, well, anyway, but* and by tone and pauses. Written linking adverbs such as *moreover* are rare in conversation, and using them in speech can sound stiff.",
      {h:"Compared with Japanese"},
      "Japanese joins many clauses in one sentence with the **-te form** and with *ga* or *kedo*. *Asa okite, kao o aratte, asagohan o tabete, gakkō ni ikimashita.* (朝起きて、顔を洗って、朝ごはんを食べて、学校に行きました。) means “I got up, washed my face, ate breakfast and went to school.” Only the last verb has the tense. The earlier verbs share it.",
      "English can do this when the subject stays the same and the verbs are in a list, as the translation shows. The trouble starts when the subject changes. *Ame ga futte kite, shiai ga chūshi ni natte, minna kaerimashita.* (雨が降ってきて、試合が中止になって、みんな帰りました。) A word-for-word English version, *Rain started, the game was canceled, everyone went home*, has three clauses with only commas, so it reads as a splice. English needs a clearer link: *It started to rain, so the game was canceled, and everyone went home*, or two sentences with a linking word: *It started to rain. As a result, the game was canceled, and everyone went home.*",
      {list:[
        "**Each English clause has its own subject.** Japanese often leaves the subject out (Unit 6). In a long English sentence, the reader needs the subjects to follow.",
        "**Each English verb has its own tense.** A *-te* chain gives the tense once, at the end. In English, each verb is marked, and the forms should match: *got up, washed, ate and went*.",
        "***Ga* and *kedo* are loose.** They often show contrast: *Ame ga futte ita ga, dekaketa* (雨が降っていたが、出かけた) “It was raining, but I went out.” But they can also be a soft link with no contrast: *Sumimasen ga, eki wa doko desu ka* (すみませんが、駅はどこですか) “Excuse me, where is the station?” English has no single word with both uses, so the writer must choose: *although* or *but* for contrast, *and* or a new sentence for a simple link.",
        "**Japanese connectors at the start of a sentence** match English linking adverbs. *Shikashi* (しかし) is like *however*, and *dakara* (だから) is like *so* or *therefore*. *Soshite* (そして) is like *and then*."
      ]},
      "None of this is a flaw in Japanese. It is a different way to build a sentence. For a learner, the practical advice is simple: when an English sentence has more than three clauses, or when the subject changes, stop and split it into sentences."
    ]}
   ],
   try:[
    {id:"e5u10-l5-x1", type:"sort", q:"Is the word a conjunction (it can join two clauses with a comma) or a linking adverb (it needs a period or semicolon)?", buckets:["Conjunction","Linking adverb"], items:[
      {t:"but", b:0, why:"A coordinator: *It was late, but we stayed.*"},
      {t:"however", b:1, why:"An adverb. *It was late; however, we stayed.* A comma alone makes a splice."},
      {t:"so", b:0, why:"A coordinator: *It rained, so we stayed in.*"},
      {t:"therefore", b:1, why:"An adverb. *It rained. Therefore, we stayed in.*"},
      {t:"yet", b:0, why:"A coordinator that works like *but*: *It was small, yet it was loud.*"},
      {t:"nevertheless", b:1, why:"An adverb. It needs a period or a semicolon before it."}
    ]},
    {id:"e5u10-l5-x2", type:"sort", q:"Is each written sentence correct or a comma splice?", buckets:["Correct","Comma splice"], items:[
      {t:"It rained; however, we went out.", b:0, why:"A semicolon, then the adverb with a comma. Correct."},
      {t:"It rained, however, we went out.", b:1, why:"*However* cannot join two clauses with only a comma. Splice."},
      {t:"It rained. However, we went out.", b:0, why:"A period, then the adverb. Correct."},
      {t:"It rained, but we went out.", b:0, why:"A comma and a coordinator. Correct."},
      {t:"It rained, therefore we stayed in.", b:1, why:"*Therefore* is an adverb, not a conjunction. Splice."},
      {t:"It rained, so we stayed in.", b:0, why:"*So* is a conjunction. Correct."}
    ]},
    M("e5u10-l5-x3","A paragraph describes three events: a fire, a flood and a power cut. The last sentence says *This is a problem.* What is the best fix?",2,[
      ["Delete the sentence, because it adds nothing.","The writer may need the point. A better choice is to say clearly what the problem is."],
      ["Change *This* to *That*.","The same vagueness remains, because *that* has no noun either."],
      ["Add a noun that names the idea, such as *This series of events is a problem for the town.*","Right. A *this* plus noun packages the three events and makes the reference clear."],
      ["Add *however* before it.","*However* signals contrast, which the paragraph does not need. It does not fix the unclear *this*."]
    ]),
    {id:"e5u10-l5-x4", type:"spot", q:"Tap each word or phrase that makes the reference **unclear**.", ask:"is unclear", parts:[
      "The manager met Amara after the meeting. ", {t:"She", flag:true, why:"Two people are possible: the manager or Amara. The reader cannot tell. Repeat a name."}, " said the report had to be done by Friday. ", {t:"The deadline", flag:false, why:"Clear. A noun phrase that names the thing."}, " had already moved twice. ", {t:"This", flag:true, why:"A bare *this* could mean the moved deadline, the Friday date or the whole situation. Try *This delay*."}, " worried the team. ", {t:"They", flag:false, why:"Clear. *The team* is the only plural group, and *They* refers to it."}, " asked for more time."
    ]},
    {id:"e5u10-l5-x5", type:"number", q:"How many **linking adverbs** are in this passage? “The bus was late. However, we arrived on time, because the road was empty. Therefore, we did not miss the start, and the tickets were cheap, so nobody complained. Besides, the weather was perfect.”", answer:3, tol:0, unit:"linking adverbs", why:"The linking adverbs are *However*, *Therefore* and *Besides*. The words *because*, *and* and *so* are conjunctions.", wrongs:[
      {v:6, tol:0, why:"You counted every connecting word. *Because*, *and* and *so* are conjunctions, so they follow different rules."},
      {v:4, tol:0, why:"You counted one conjunction as an adverb. Check *so*: *The tickets were cheap, so nobody complained* has a comma plus a conjunction."}
    ], hint2:"Ask: could the word join two clauses with only a comma? Conjunctions can. Linking adverbs cannot."},
    {id:"e5u10-l5-x6", type:"match", q:"Match each cohesive device to its example.", pairs:[
      ["Reference with a pronoun","*Amara bought a bicycle. It needs a new chain.*","*It* points back to the bicycle."],
      ["*This* plus a noun","*The study found a link. This finding is important.*","*This finding* packages the earlier idea in one noun phrase."],
      ["Ellipsis","*Hana likes tea, and Tomás coffee.*","The verb *likes* is left out in the second part."],
      ["Synonym or general word","*I bought a car. The vehicle is old.*","*Vehicle* is a more general word for *car*."]
    ]},
    {id:"e5u10-l5-x7", type:"order", q:"Put the sentences in the order that makes a clear paragraph.", items:[
      {t:"Many towns have closed their old libraries.", why:"It sets the situation."},
      {t:"However, one town kept its library open.", why:"*However* shows the contrast with the first sentence."},
      {t:"This decision cost money.", why:"*This decision* packages the previous idea in a noun phrase."},
      {t:"As a result, the council asked residents for donations.", why:"*As a result* links the cost to the response."}
    ]},
    {id:"e5u10-l5-x8", type:"explain", q:"Kenji writes in English: “I woke up, I washed my face, I ate breakfast, I went to school.” His teacher marks it as a comma splice. Kenji says: “In Japanese, 朝起きて、顔を洗って、朝ごはんを食べて、学校に行きました is perfectly fine.” Write an explanation for him.", size:"4–5 sentences", prompt:"I would say: …", hint:"Say what the *-te* forms do, and what English needs instead. Give one or two repairs.", model:"Your Japanese sentence is correct. The *-te* forms link the clauses and share one tense, which appears on the last verb. The *-te* forms do the joining, and the commas only mark pauses. In English every clause has its own subject and tense, and a comma alone is too weak to join full clauses, so four clauses with commas look like a splice. When the subject is the same, you can use one subject with a list of verbs: *I woke up, washed my face, ate breakfast and went to school.* You can also use periods or words such as *then* and *after that*. English needs that extra signal at each boundary.", points:["Accepts that the Japanese sentence is correct","Explains that *-te* forms share the tense and link the clauses in Japanese","Says that English clauses need a stronger link than a comma","Gives a repair: one subject with a list of verbs, or separate sentences with a linking word"]}
   ],
   apply:{
    intro:"These tasks use paragraphs of your own, and a news article or an essay of your choice. Nothing needs an account.",
    tasks:[
     {t:"Map the links", how:[
       "Copy a paragraph of six to eight sentences from an article or an essay.",
       "Mark every link: circle pronouns and *this* + noun phrases, underline linking words, and put a box around repeated or related words.",
       "Count how many sentences have a linking word at the start. Is it too many? Write one line about the style."
     ], write:"Pronouns… this + noun… linking words… repeated words… My comment on the style…"},
     {t:"Fix a vague this", how:[
       "Find or write five sentences that start with a bare *This* or *That*.",
       "Rewrite each one with a noun after *this* that names the earlier idea.",
       "Say whether the new noun adds any judgment (*this success*, *this failure*)."
     ], write:"Original… with this + noun… what the noun adds…"},
     {t:"Turn a Japanese -te chain into English", how:[
       "Write a five-clause sentence in Japanese with *-te* forms. Use a day of your own: getting up, traveling, working.",
       "Write an English version with a list of verbs for one subject, and then another version with separate sentences and a linking word.",
       "Check each linking word: is it a conjunction or a linking adverb, and is the punctuation right?"
     ], write:"Japanese… English version 1… version 2… the linking words I used and their class…"}
    ],
    proof:"One paragraph with every link marked. Five repaired sentences with this plus a noun. A Japanese chain with two English versions and a note on each linking word."
   }
  }
  ],
  checkpoint:["e5u10-q02","e5u10-q05","e5u10-q10","e5u10-q13","e5u10-q18","e5u10-q22","e5u10-q25","e5u10-q31","e5u10-q34","e5u10-q38","e5u10-q42","e5u10-q44"],
  cpBank:[
   Q("e5u10-cp01","e5u10-l1",1,"Which sentence uses subordination?",2,[
     ["*It was cold, and we wore coats.*","*And* joins two equal clauses. This is coordination."],
     ["*It was cold, so we wore coats.*","*So* is a coordinator. The clauses are equal."],
     ["*We wore coats because it was cold.*","Right. *Because it was cold* depends on the main clause, and it can move to the front."],
     ["*It was cold, but we went out.*","*But* joins two equal clauses. This is coordination."]]),
   Q("e5u10-cp02","e5u10-l1",2,"Which sentence needs a punctuation fix for formal writing?",0,[
     ["*The shop was open we went in.*","Right. This is a run-on (fused sentence): two clauses with no mark between them."],
     ["*The shop was open, so we went in.*","A comma plus a coordinator. Correct."],
     ["*Because the shop was open, we went in.*","A subordinate clause first, then a comma. Correct."],
     ["*The shop was open; we went in.*","A semicolon can join two linked clauses. Correct."]]),
   Q("e5u10-cp03","e5u10-l1",3,"A student writes: *Because the bus was late, so we missed the start.* What is the best advice?",1,[
     ["Add a comma before *so*.","The comma is not the problem. Two connectors are doing the same job."],
     ["Keep one connector: *Because the bus was late, we missed the start*, or *The bus was late, so we missed the start*.","Right. *Because* and *so* both show the reason and result, so one is enough."],
     ["Replace *because* with *although*.","*Although* shows contrast, and the meaning here is reason and result."],
     ["Nothing. Both words are needed in English.","They are not. A doubled connector is a common learner pattern."]]),
   Q("e5u10-cp04","e5u10-l2",1,"Which sentence has a non-defining relative clause?",3,[
     ["*The students who finished early left.* (only some left)","This clause says which students. It is defining."],
     ["*The bag that I lost was red.*","This clause says which bag. It is defining."],
     ["*I know a woman who speaks four languages.*","This clause identifies the woman. It is defining."],
     ["*My brother, who lives in Nara, is a chef.*","Right. The commas show extra information about a person we already know."]]),
   Q("e5u10-cp05","e5u10-l2",2,"In which sentence can the relative pronoun be left out?",2,[
     ["*The man who called me is a pilot.*","*Who* is the subject of *called*. It must stay."],
     ["*The student whose phone rang apologized.*","*Whose* is possessive. It always stays."],
     ["*The film that we watched was slow.*","Right. *That* is the object of *watched*, and the clause is defining."],
     ["*My bag, which I lost, was red.*","The clause is non-defining. The pronoun must stay."]]),
   Q("e5u10-cp06","e5u10-l2",3,"A learner writes: *The man what lives next door is kind.* What is the best correction and reason?",1,[
     ["*The man whom lives next door*, because *whom* is formal.","*Whom* is for objects. Here the pronoun is the subject of *lives*."],
     ["*The man who lives next door*, because *what* is not a relative pronoun in standard English.","Right. *Who* (or *that*) is the standard pronoun for a person."],
     ["*The man which lives next door*, because *which* is the main relative pronoun.","*Which* is normally for things, not people."],
     ["No change. *What* works here in all writing.","It is heard in some dialects, but it is not standard in writing."]]),
   Q("e5u10-cp07","e5u10-l3",1,"A friend said last week, “I will visit you.” You report it today, and the visit has not happened. Which report fits best?",0,[
     ["*She said she would visit me.*","Right. *Would* is the backshifted form, and it works when the plan is in the past of the report."],
     ["*She said me she will visit.*","*Say* does not take a person directly, and the tense does not fit."],
     ["*She told that she would visit me.*","*Tell* needs a person: *told me*."],
     ["*She said, she visited me.*","The verb is in the wrong tense, and the comma is not needed."]]),
   Q("e5u10-cp08","e5u10-l3",2,"Which sentence has the correct verb pattern?",3,[
     ["*He suggested me to rest.*","*Suggest* does not take a person plus *to*."],
     ["*He explained me the rule.*","*Explain* needs *to*: *explained the rule to me*."],
     ["*She promised me calling.*","*Promise* takes a *to*-infinitive: *promised to call*."],
     ["*She asked me to wait.*","Right. *Ask* takes a person plus a *to*-infinitive."]]),
   Q("e5u10-cp09","e5u10-l3",3,"Which report of “Where do you live?” is standard?",2,[
     ["*She asked me where did I live.*","This keeps the direct-question order."],
     ["*She asked me where do I live?*","This keeps the order and adds a question mark."],
     ["*She asked me where I lived.*","Right. Statement order, no *do*, no question mark."],
     ["*She asked me that where I lived.*","The word *that* does not introduce a reported question."]]),
   Q("e5u10-cp10","e5u10-l4",2,"Which sentence puts a long phrase in the best place?",1,[
     ["*That she won the prize in the final round surprised everyone.*","A long clause is the subject, so the reader waits for the verb."],
     ["*It surprised everyone that she won the prize in the final round.*","Right. The long clause comes last, and *it* holds the subject place."],
     ["*Surprised everyone that she won the prize in the final round.*","This has no subject."],
     ["*She won the prize in the final round, everyone surprised.*","This is not a standard pattern."]]),
   Q("e5u10-cp11","e5u10-l5",2,"Which of these sentences avoids a comma splice?",3,[
     ["*It was late, however, we stayed.*","*However* is an adverb, and a comma alone is a splice."],
     ["*It was late, therefore we left.*","*Therefore* is an adverb. A comma alone is a splice."],
     ["*It was late however; we stayed.*","The punctuation is in the wrong place."],
     ["*It was late; however, we stayed.*","Right. A semicolon, then the adverb with a comma."]]),
   Q("e5u10-cp12","e5u10-l5",3,"A report ends a paragraph with *This is a problem.* The paragraph described a fire, a flood and a power cut. What should the writer do?",0,[
     ["Add a noun that names the idea, such as *This series of events*.","Right. The noun packages the earlier ideas and makes the reference clear."],
     ["Use *that* instead of *this*.","*That* has the same problem. It points to an idea but does not name it."],
     ["Add *Moreover* at the start.","*Moreover* adds a new point, and it does not fix the reference."],
     ["Delete the paragraph.","The writer only needs a clearer reference, not a new paragraph."]])
  ],
  codex:[
   {id:"coordination-subordination-english", title:"Coordination, subordination and comma splices", aka:["joining clauses","FANBOYS","run-on sentences","fused sentences"], tags:["grammar","punctuation","clauses"],
    summary:"Clauses can be joined as equals (coordination) or with one depending on the other (subordination). A comma alone is too weak to join two independent clauses in formal writing.",
    levels:{
     starter:[
      "There are two main ways to join clauses. In **coordination**, two equal clauses are joined by *and, but, or, so* or *yet*: *It rained, so we stayed in.* In **subordination**, one clause depends on the other: *We stayed in because it rained.*",
      "The two kinds behave differently. A subordinate clause can move to the front (*Because it rained, we stayed in*). A coordinated clause cannot (*So we stayed in, it rained* is not possible).",
      "A **comma splice** joins two full clauses with only a comma: *It was late, we went home.* A **run-on** (fused sentence) has no mark at all. In formal writing both are treated as errors, because a comma is too weak to show where one clause ends. Spoken English has no commas, so the splice is a matter of written style, not of grammar. Writers sometimes use splices on purpose for effect.",
      "Five fixes: a period, a semicolon, a coordinator after the comma, a subordinate clause, or a colon.",
      {key:"Equals can share a comma and a coordinator. A dependent clause needs a subordinator. A comma alone does not join two full clauses."}
     ],
     builder:[
      "Descriptive grammars treat the coordinators as a small class led by *and, or* and *but*. The teaching word FANBOYS lists *for, and, nor, but, or, yet, so*. *For* and *so* are less typical, because they are more restricted in what they can do.",
      {table:[["Relation","Coordinator","Subordinator"],["Addition","and","none (*as well as* + *-ing* is a preposition)"],["Contrast","but, yet","although, whereas, while"],["Reason","for","because, since, as"],["Result","so","so that"],["Condition","or (*Hurry or you’ll miss it*)","if, unless"],["Time","and then","when, after, before, until"]]},
      "**Commas.** Use a comma before a coordinator that joins two full clauses (it may be dropped when both are short). Use a comma after a subordinate clause that comes first. Usually no comma when a subordinate clause comes last, and none between two verbs that share a subject.",
      "**Fragments** are subordinate clauses written alone (*Because it was late.*). They are natural in speech, as answers, and are usually joined to a main clause in writing. A doubled connector (*Although it rained, but we went*) is common among learners of many first languages. Keep one.",
      "**Japanese.** Japanese joins clauses with *-te* forms and *ga* or *kedo*, and places a comma (*tōten*) at the writer’s choice. English clauses carry their own subjects and tenses, so the same comma habit produces a splice."
     ],
     pro:[
      "The coordinate/subordinate division is a matter of syntactic behavior. A coordinated clause cannot be fronted, and the coordinator is attached to the second conjunct. A subordinate clause can be fronted and is part of the host clause, often as an adjunct (*because it rained*) or as a complement (*that it rained*). Some words, such as *for* and *so*, behave partly like both, and some grammars treat them as prepositions or as adverbs. Teaching lists simplify this, and the list is useful in practice.",
      "The comma splice has a long history in good writing. Many published authors use it, especially in fiction and in informal essays, and style guides differ on how strictly to treat it. A common view is that splices between short, closely parallel clauses are acceptable, and splices between longer or unrelated clauses are not. Linking adverbs (*however, therefore*) make the problem more likely, because writers treat them as conjunctions. They are adverbs and can move inside their clause (Lesson 5).",
      "The word *run-on* is used in two ways. In teaching, it often means any over-long sentence. In grammar handbooks, it means the fused sentence. In an assignment, check which one the teacher intends.",
      "For learners, the useful exercise is to find the clause boundaries by marking subjects and verbs, then to ask for each join: which word joins these clauses, and is it the right class? This method is explicit and works for all writers."
     ]},
    related:["relative-clauses-english","cohesion-linking-english"], read:[{book:"eling", where:"The Syntax chapter, section “Clausal embedding”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"relative-clauses-english", title:"Relative clauses", aka:["who which that whose","defining and non-defining","restrictive clauses","whom"], tags:["grammar","clauses","relative clauses"],
    summary:"A relative clause follows a noun and gives more information about it. Commas show whether the clause says which one or only adds information.",
    levels:{
     starter:[
      "A **relative clause** comes after a noun and tells us more about it: *the book that I read, the woman who lives next door, the student whose bike was stolen.* The pronouns are *who* (people), *which* (things), *that* (people or things in defining clauses) and *whose* (possession).",
      "There are two kinds. A **defining** clause tells you which one, and has no commas: *The students who finished early left.* Only some students left. A **non-defining** clause adds extra information, and it has commas: *The students, who finished early, left.* All the students finished early and all left.",
      "You can leave out the pronoun when it is the object of the clause in a defining clause: *the book (that) I read*. You cannot leave it out when it is the subject (*the woman who lives next door*) or when the clause has commas.",
      "Do not add an extra pronoun: *the book that I read it* is not standard. The relative pronoun already stands for the book.",
      {key:"Commas change the meaning. No commas means which one. Commas mean extra information. Use *that* only without commas."}
     ],
     builder:[
      {table:[["Pronoun","Use","Example"],["who","people","*the woman who called*"],["whom","people, object, formal","*the woman whom I called*"],["which","things","*the car which broke down*"],["that","people or things, defining only","*the car that broke down*"],["whose","possession","*the student whose bike was stolen*"],["where/when/why","place, time, reason","*the town where she grew up*"]]},
      "**Whom and prepositions.** After a preposition, formal English uses *whom* or *which*: *the person to whom I spoke, the chair on which she sat.* In neutral English the preposition moves to the end and the pronoun is dropped: *the person I spoke to.* *The person who I spoke to* is informal. Mixed forms such as *to who* are not standard.",
      "**That and which.** US style guides such as *The Chicago Manual of Style* and the AP Stylebook prefer *that* for defining clauses and *which* for non-defining ones. This is a house-style choice. *Which* in a defining clause is common and standard, especially in British English. The firm rule is the comma rule: with commas, use *which* or *who*.",
      "**Agreement.** The verb agrees with the antecedent: *one of the people who work here* (plural), *the only person who works here* (singular).",
      "**Japanese.** Japanese puts the clause before the noun and has no relative pronoun: *watashi ga yonda hon* (私が読んだ本) “the book I read”. Learners may add *it* in English because the pronoun is new to them."
     ],
     pro:[
      "Relative clauses are analyzed as a modifier with a gap, where the gap corresponds to the function the pronoun has inside the clause. In *the book that I read ___*, the gap is the object. The relative pronoun in many analyses has moved to the front of the clause, and in the reduced form (*the book I read*) no pronoun is pronounced. This is why only some functions can be left out. A subject gap needs the pronoun to mark the clause, because *the woman lives next door* would be a complete sentence.",
      "Non-defining clauses are called appositive or supplementary in some grammars. Semantically they add a separate comment to the main statement, which is often discussed as not-at-issue content (the Pragmatics chapter, “At-issue vs. non-at-issue meaning”, explains this idea with other examples). They cannot take *that* and cannot drop the pronoun. Proper names usually take them, because a name already picks out one referent.",
      "A *which* clause can also modify a whole clause: *The train was late, which surprised nobody.* Prescriptive guides sometimes warn that the antecedent of *which* may be unclear in such cases. The unclear case is a style issue, not a grammar error.",
      "Teachers should note that *that* for people (*the man that called*) is established usage. Advice that it is wrong is a style choice, not a fact about English. Corpus searches in COCA show how each choice varies by genre."
     ]},
    related:["coordination-subordination-english","clauses-finite-nonfinite-english"], read:[{book:"eling", where:"The Syntax chapter, section “Embedded content questions and relative clauses”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"reported-speech-english", title:"Reported speech, backshift and reporting verbs", aka:["indirect speech","backshift","sequence of tenses","reported questions"], tags:["grammar","reported speech","verbs"],
    summary:"Reported speech tells what someone said in the reporter’s own words. Backshift is optional when the information is still true, and every reporting verb has its own pattern.",
    levels:{
     starter:[
      "In **reported speech** (indirect speech), you tell what someone said without quoting. *Mei said, “I’m tired.”* becomes *Mei said she was tired.* Pronouns change to fit the reporter, and time and place words change if the time or place is different.",
      "Many textbooks say that the verb goes back one tense (**backshift**: *is* to *was*, *will* to *would*). This is a habit, not a law. If the fact is still true, you may keep the present: *Mei said she lives in Kobe.* Use the past when the fact may have changed or the event is over.",
      "Reported questions have **statement order** and no *do*: *She asked where I lived.* Use *if* or *whether* for yes/no questions.",
      "Verbs have patterns. *Tell* needs a person (*told me that*). *Suggest* takes *that* or *-ing* (*suggested leaving*), and not a person plus *to*. *Promise* takes *to* (*promised to call*). *Explain* takes *to* before the person (*explained to me*).",
      {key:"Backshift is a choice. Each reporting verb has its own pattern. Reported questions use statement order."}
     ],
     builder:[
      {table:[["Direct","Reported (backshifted)"],["*I live here.*","*She said she lived there.*"],["*I’m working.*","*She said she was working.*"],["*I’ve finished.*","*She said she had finished.*"],["*I will help.*","*She said she would help.*"],["*I can swim.*","*She said she could swim.*"],["*I must go.*","*She said she had to go.* (or *must*)"]]},
      "Modals such as *would, could, should, might* and *ought to* do not change. Time words follow the reporter’s situation: *tomorrow* stays if you report on the same day, and becomes *the next day* if you report later.",
      "**Patterns.** *say, explain, mention, claim* + (*that*) clause. *tell, inform, remind, warn* + person + clause or *to*-infinitive. *agree, promise, offer, refuse* + *to*. *suggest, recommend, admit, deny* + *-ing* or *that* clause. *Insist* can report a demand (*insisted that he come*) or a firm claim (*insisted that she was right*), and it takes *on* before *-ing*.",
      "The mandative subjunctive (*suggested that he go*, with the base verb) is more common in American English. British English more often uses *should*: *suggested that he should go*. *That he goes* is also heard, mainly in informal British English.",
      "**Japanese.** The quoted verb keeps its form from the original speech, inside *to* (と). There is no backshift and no question inversion in Japanese, which is why both are new ideas for learners."
     ],
     pro:[
      "Backshift is best treated as a pattern of tense agreement that depends on the reporter’s view. A present form in the reported clause is possible when the situation holds at the time of reporting (the “still true” or “double access” reading), and a past form is the neutral choice that does not commit the reporter to that. In some contexts the present is odd, for example when a report is about a past state that no longer holds: *Yuki said she works at a bank* implies that she still works there.",
      "Reporting verbs are chosen for stance. *Claim, allege, insist* and *admit* carry a view of the speaker, and *say* is neutral. Reports in news writing often use these verbs to give a view without stating it. A reader can compare the verb with the evidence. This connects to the study of agentless passives in Unit 8.",
      "Reported questions use an embedded-question structure. The question word or *if/whether* begins the subordinate clause, and subject-auxiliary inversion does not apply (see Unit 6). Learners often produce the inverted form in speech (*She asked me where did I go*). The same structure appears in polite questions (*Could you tell me where the station is?*).",
      "Teachers should show reporting as a skill, and as more than a transformation exercise. Real reports rarely change a sentence word by word. They summarize, and they choose a reporting verb and a point of view."
     ]},
    related:["tense-and-time-english","cohesion-linking-english"], read:[{book:"eling", where:"The Syntax chapter, section “Embedded content questions and relative clauses”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"information-structure-english", title:"Given and new information: end focus, clefts and there sentences", aka:["information structure","end weight","cleft sentences","topic and focus"], tags:["grammar","discourse","word order"],
    summary:"English tends to put known information first and new information last, and short phrases before long ones. Clefts, there sentences and the passive are tools for placing information.",
    levels:{
     starter:[
      "A sentence has **given** information, which the reader already knows, and **new** information, which is the point. English usually puts given first and new last: *Amara bought a bicycle. The bicycle needs a new chain.*",
      "**End focus** means that the new, most important information goes at the end, where the main stress also falls. **End weight** means that long phrases go last: *She handed the keys to the man who had come to repair the roof.*",
      "**Clefts** give extra focus. *It was Mei who found the error* names the person and takes for granted that someone found the error. *What I need is a break* puts the news last. **There sentences** introduce something new: *There is a problem with the server.* The **passive** can keep the known thing first: *The robot was judged by a panel of three teachers.*",
      "Japanese uses *wa* for known topics and *ga* for new subjects. English uses word order, articles, stress and these structures for the same job.",
      {key:"Known and short first. New and long last."}
     ],
     builder:[
      "Information structure is a tendency, and a text can break it for effect. When a writer breaks it, the reader may need more effort, and the text feels abrupt. A smooth paragraph often makes the new information of one sentence the starting point of the next (a chain).",
      {table:[["Tool","Pattern","What it does"],["it-cleft","*It was Mei who found the error.*","Focus on one item, often a correction"],["wh-cleft","*What worried us was the delay.*","Frame first, news last"],["there sentence","*There are three buses.*","Introduces a new thing after the verb"],["passive","*The report was written by a team of…*","Keeps the known thing first, the agent last"],["extraposition","*It is clear that the plan failed.*","Moves a long clause to the end"]]},
      "**Stress.** The main stress usually falls on the last content word (see Unit 3), which fits end focus. A speaker can put it elsewhere to show contrast.",
      "**Japanese.** *Wa* and *ga* mark topic and new subject (*mukashi mukashi … ojīsan to obāsan ga imashita. Ojīsan wa …*). The cleft pattern *no wa … desu* is a close match for the English cleft (*kita no wa Yamada-san desu*)."
     ],
     pro:[
      "Terms vary between traditions. Some grammars use *theme* and *rheme*, or *topic* and *comment*, or *given* and *new*. They overlap, but they are not the same. *Given* can mean mentioned before, or only known to the hearer. A cleft focuses a part of the sentence and also takes for granted the rest, and in many accounts the content of the *who/that* clause is a presupposition. Because of that, an it-cleft is odd when the presupposition is false: *It was Mei who found the error* is a misleading answer if nobody found it.",
      "Existential *there* sentences show a restriction. The noun after the verb is usually indefinite, and definite nouns are acceptable in some contexts (lists, reminders), so *There is the leftover pasta* is possible as a list item. Because of this, the restriction is better described as a strong tendency about new information than as a hard rule.",
      "End weight is often explained as a processing effect. Readers may parse a long phrase more easily at the end of a clause, because the parser has already identified the verb and its arguments. Extraposition and heavy-phrase shift are common ways to follow it. Writers who break it often produce an awkward center-embedded sentence.",
      "Corpus studies generally find that subjects are usually short and given, and that new information is more often found after the verb. The pattern is a statistical one, so teach it as a tendency."
     ]},
    related:["passive-voice-english","cohesion-linking-english"], read:[{book:"eling", where:"The Pragmatics chapter, section “At-issue vs. non-at-issue meaning”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"},

   {id:"cohesion-linking-english", title:"Cohesion and linking words", aka:["cohesive devices","however and therefore","conjunctive adverbs","linking adverbs","this plus noun"], tags:["grammar","discourse","writing"],
    summary:"Cohesion is how sentences connect. Pronouns, this plus a noun, repetition and linking words build it. Linking adverbs such as however are not conjunctions.",
    levels:{
     starter:[
      "A text holds together through **cohesion**. The main tools are **reference** (pronouns, *this, that, the*), **substitution and ellipsis** (*one*, a missing verb), **repetition and related words**, and **linking words**.",
      "A pronoun needs a clear antecedent. *The manager told Amara that she had to finish the report* is unclear. A bare *this* can also be vague. Use *this* plus a noun that names the idea: *this finding, this decision*.",
      "**Conjunctions** (*and, but, so, because*) join clauses in one sentence. **Linking adverbs** (*however, therefore, moreover*) link ideas across sentences and cannot join clauses with only a comma. Write *It rained. Therefore, we stayed in.* or *It rained; therefore, we stayed in.* or *It rained, so we stayed in.*",
      "Do not use a connector in every sentence. A good order of ideas often needs no connector.",
      {key:"However and therefore are adverbs. A comma alone is a splice. Use a period or a semicolon."}
     ],
     builder:[
      {table:[["Meaning","Conjunction","Linking adverb"],["Contrast","but, yet, although","however, nevertheless, instead"],["Result","so","therefore, thus, as a result"],["Addition","and","moreover, besides, in addition"],["Time","and then, when","then, meanwhile, afterward"]]},
      "**Test.** A linking adverb can move: *We, however, stayed.* *We stayed, however.* A conjunction cannot. **Punctuation.** Period, semicolon, or the adverb in the middle between commas.",
      "**This plus noun.** A noun such as *finding, decision, trend* or *problem* packages an earlier idea in one phrase. It also adds a judgment, so choose it with care.",
      "**Repetition.** In technical writing, repeat the term. Changing the word suggests that the thing is different.",
      "**Japanese.** *-te* chains give one tense at the end, and subjects are often left out. English needs a subject and a tense for each clause, and a clear link. *Shikashi* (しかし) matches *however*, *dakara* (だから) matches *so* or *therefore*. *Ga* and *kedo* are looser than any English connector, so the writer must choose *although, but* or *and*."
     ],
     pro:[
      "Cohesion was described in detail by M. A. K. Halliday and Ruqaiya Hasan in *Cohesion in English* (1976). They listed five types: reference, substitution, ellipsis, conjunction and lexical cohesion. Cohesion is a property of the text, and it is different from **coherence**, which is the reader’s sense that a text makes sense. A text can be cohesive and still incoherent, if its links do not lead anywhere. A text can be coherent with few explicit links, if the reader can infer the relations.",
      "Linking adverbs are a heterogeneous group. They are adverbs by position and behavior: they can move within a clause, and they can occur with a conjunction (*and therefore, but nevertheless*), which shows that they are not themselves conjunctions. Writing guides in the US class them as conjunctive adverbs. The ‘however’ of contrast must also be separated from the *however* of degree (*however hard she tried*), which starts a subordinate clause and is not a linking word.",
      "Research on learner writing often finds overuse of explicit connectors such as *moreover* and *furthermore*, and underuse of other devices such as this plus a noun or well-planned given-new order. Teachers can help by asking writers to remove a connector and test whether the link is still clear.",
      "Contrasts across languages should be described with care. One tendency in learner English is to carry over clause chaining and subject omission. This is a transfer pattern. It is not a feature of every Japanese writer."
     ]},
    related:["coordination-subordination-english","information-structure-english"],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-coordination", term:"Coordination", def:"The joining of clauses or phrases of equal rank with a coordinator such as *and, but, or* or *so*.", codex:"coordination-subordination-english"},
   {id:"hew-subordination", term:"Subordination", def:"The use of a subordinator such as *because* or *although* to make one clause depend on another.", codex:"coordination-subordination-english"},
   {id:"hew-comma-splice", term:"Comma splice", def:"Two independent clauses joined with only a comma, as in *It was late, we went home.* It is an error in formal writing.", codex:"coordination-subordination-english"},
   {id:"hew-run-on", term:"Run-on sentence (fused sentence)", def:"Two independent clauses joined with no mark at all, as in *It was late we went home.* Some teachers use the term for any very long sentence.", codex:"coordination-subordination-english"},
   {id:"hew-relative-pronoun", term:"Relative pronoun", def:"A word such as *who, which, that* or *whose* that begins a relative clause and stands for the noun the clause describes.", codex:"relative-clauses-english"},
   {id:"hew-antecedent", term:"Antecedent", def:"The noun that a pronoun or a relative clause refers back to. In *the book that I read*, the antecedent is *book*.", codex:"relative-clauses-english"},
   {id:"hew-defining-clause", term:"Defining relative clause", def:"A relative clause that tells you which one is meant. It has no commas: *The students who finished early left.*", codex:"relative-clauses-english"},
   {id:"hew-non-defining-clause", term:"Non-defining relative clause", def:"A relative clause that adds extra information about a noun that is already clear. It has commas and cannot use *that*.", codex:"relative-clauses-english"},
   {id:"hew-reported-speech", term:"Reported speech", def:"A report of what someone said in the reporter’s own words, with changes to pronouns, time words and sometimes verb forms. Also called indirect speech.", codex:"reported-speech-english"},
   {id:"hew-reporting-verb", term:"Reporting verb", def:"A verb such as *say, tell, ask, suggest* or *promise* that introduces reported speech. Each one has its own pattern.", codex:"reported-speech-english"},
   {id:"hew-backshift", term:"Backshift", def:"The change of a verb in reported speech to an earlier tense form, such as *will* to *would*. It is optional when the information is still true.", codex:"reported-speech-english"},
   {id:"hew-given-information", term:"Given and new information", def:"Given information is already known to the hearer. New information is the point of the sentence. English tends to put given first and new last.", codex:"information-structure-english"},
   {id:"hew-end-focus", term:"End focus", def:"The tendency to put the most important new information at the end of a clause, where the main stress also falls.", codex:"information-structure-english"},
   {id:"hew-end-weight", term:"End weight", def:"The tendency to put long, heavy phrases after short ones, at the end of a clause.", codex:"information-structure-english"},
   {id:"hew-cleft", term:"Cleft sentence", def:"A sentence that splits one clause in two to focus one part, such as *It was Mei who found the error* or *What I need is a break*.", codex:"information-structure-english"},
   {id:"hew-cohesion", term:"Cohesion", def:"The links that connect the sentences of a text, such as pronouns, repeated words and linking words.", codex:"cohesion-linking-english"},
   {id:"hew-linking-adverb", term:"Linking adverb", def:"An adverb such as *however, therefore* or *moreover* that links ideas across sentences. It is not a conjunction and cannot join two clauses with only a comma.", codex:"cohesion-linking-english"}
  ],
  bank:[
   /* ---- Lesson 1: coordination, subordination, comma splices ---- */
   Q("e5u10-q01","e5u10-l1",1,"What is coordination?",1,[
     ["Making one clause depend on another","That is subordination."],
     ["Joining clauses or phrases of equal rank, for example with *and, but* or *or*","Right. Each coordinated clause could stand alone."],
     ["Joining a verb and its object","That is not coordination. It is part of one clause."],
     ["Putting a comma between two nouns","A comma is a mark of punctuation, and coordination is a grammatical relation."]]),
   Q("e5u10-q02","e5u10-l1",1,"Which word is a subordinator?",2,[
     ["*and*","A coordinator."],
     ["*but*","A coordinator."],
     ["*because*","Right. It begins a clause that depends on a main clause."],
     ["*or*","A coordinator."]]),
   Q("e5u10-q03","e5u10-l1",1,"What is a comma splice?",0,[
     ["Two independent clauses joined with only a comma","Right. A comma alone is too weak to join two full clauses in formal writing."],
     ["A sentence with too many commas","The number of commas is not the point. A splice is a type of join."],
     ["A comma before *and* in a list","This is the serial comma, which is a different issue."],
     ["A fragment written alone","That is a fragment. A splice has two full clauses."]]),
   Q("e5u10-q04","e5u10-l1",2,"*We stayed in because it rained.* Which test shows that *because it rained* is subordinate?",3,[
     ["It starts with a letter *b*.","Spelling is not a test."],
     ["It always follows a comma.","It follows no comma here, and a test must work in every case."],
     ["It cannot move.","It can move, and that movement is the test for subordination."],
     ["It can move to the front: *Because it rained, we stayed in.*","Right. Only a subordinate clause can move freely."]]),
   Q("e5u10-q05","e5u10-l1",2,"Which is **not** a good repair for the splice *It was late, we went home.*?",2,[
     ["*It was late, so we went home.*","A coordinator after the comma works."],
     ["*Because it was late, we went home.*","A subordinate clause works."],
     ["*It was late we went home.*","Right. This removes the comma and makes a run-on (fused) sentence."],
     ["*It was late; we went home.*","A semicolon works for closely linked clauses."]]),
   Q("e5u10-q06","e5u10-l1",2,"Which sentence is punctuated correctly?",1,[
     ["*Because it rained we stayed in.*","A comma is expected after a subordinate clause that comes first."],
     ["*Because it rained, we stayed in.*","Right. A comma follows the subordinate clause."],
     ["*We stayed in, because it rained.*","The comma is not usually needed when the clause comes last."],
     ["*We stayed in and, watched a movie.*","A comma should not split two verbs that share a subject."]]),
   Q("e5u10-q07","e5u10-l1",3,"Mei writes: *Although the shop was closed, but we waited.* What is the best correction?",0,[
     ["Delete *but*: *Although the shop was closed, we waited.*","Right. *Although* already shows the contrast, so *but* is a doubled connector."],
     ["Replace the comma with a semicolon.","A semicolon does not remove the doubled connector."],
     ["Add *so* after the comma.","This adds a third connector and changes the meaning."],
     ["No change. Both words are needed.","One connector is enough for one link."]]),
   Q("e5u10-q08","e5u10-l1",3,"Toby, who taught English in Japan for two years, once told a student: “This sentence is fine when you say it, but in an essay it needs one more mark.” What was he saying about *It rained, we stayed in*?",3,[
     ["It is incorrect English in every situation.","He says it is fine when spoken."],
     ["It is correct in formal writing too.","He says that an essay needs a stronger mark."],
     ["It has too many words.","The number of words is not the issue."],
     ["It is a style problem for formal writing, not a spoken-grammar problem.","Right. A comma is too weak for a formal reader, but speakers produce the same clauses with no comma."]]),
   Q("e5u10-q09","e5u10-l1",3,"A report says: *The team repaired the sensor, and tested it.* What is wrong?",2,[
     ["The sentence is a fragment.","It has a subject and a verb. It is a full sentence."],
     ["*And* must be replaced by *but*.","The meaning is addition, so *and* is right."],
     ["The comma separates two verbs that share one subject.","Right. There is only one clause, so no comma is needed."],
     ["The word *tested* must be first.","The order of the actions is correct."]]),
   /* ---- Lesson 2: relative clauses ---- */
   Q("e5u10-q10","e5u10-l2",1,"What does a relative clause do?",1,[
     ["It joins two equal clauses","That is coordination."],
     ["It gives more information about a noun","Right. It follows the noun and describes it."],
     ["It reports what someone said","That is reported speech."],
     ["It asks a question","A relative clause is not a question."]]),
   Q("e5u10-q11","e5u10-l2",1,"Which pronoun cannot be used in a non-defining clause?",3,[
     ["*who*","*Who* is the normal choice for people with commas."],
     ["*which*","*Which* is the normal choice for things with commas."],
     ["*whose*","*Whose* works with commas: *Mei, whose bike was stolen, …*"],
     ["*that*","Right. *That* is used only in defining clauses."]]),
   Q("e5u10-q12","e5u10-l2",2,"What does *My sister, who lives in Osaka, is a nurse* suggest?",0,[
     ["I have one sister, and where she lives is extra information.","Right. The commas show a non-defining clause."],
     ["I have several sisters, and this one lives in Osaka.","That reading needs no commas: *My sister who lives in Osaka*."],
     ["My sister lives in several cities.","The sentence says nothing about several cities."],
     ["I do not have a sister.","The sentence assumes one."]]),
   Q("e5u10-q13","e5u10-l2",2,"When can the relative pronoun be left out?",2,[
     ["When it is the subject of the clause","A subject pronoun must stay."],
     ["When the clause has commas","A non-defining clause keeps its pronoun."],
     ["When it is the object of a defining clause","Right. *The book I read.*"],
     ["Always, in informal speech","Even in informal speech, a subject pronoun stays."]]),
   Q("e5u10-q14","e5u10-l2",2,"Which phrase is formal and correct?",1,[
     ["*the person to who I spoke*","After a preposition, use *whom*, not *who*."],
     ["*the person to whom I spoke*","Right. A fronted preposition takes *whom*."],
     ["*the person whom I spoke*","The preposition *to* is missing."],
     ["*the person that to I spoke*","This word order is not standard."]]),
   Q("e5u10-q15","e5u10-l2",2,"Which sentence has the correct verb?",3,[
     ["*She is one of the people who works here.*","The antecedent is *people*, so the verb is plural."],
     ["*She is one of the people who is here.*","The antecedent is *people*, so use *are*."],
     ["*She is the only person who work here.*","The antecedent is *the only person*, so the verb is singular: *works*."],
     ["*She is one of the people who work here.*","Right. The verb agrees with *people*."]]),
   Q("e5u10-q16","e5u10-l2",3,"A learner writes *The film that I watched it was long.* What is the best explanation?",0,[
     ["The relative pronoun *that* already stands for the film, so *it* is a copy.","Right. Leave the gap: *the film that I watched*."],
     ["The word *that* must be removed and *it* kept.","Dropping *that* is fine, but *it* is still a copy."],
     ["The verb *watched* must be in the present tense.","The tense is fine."],
     ["The sentence needs a comma after *film*.","A comma would make the clause non-defining and would not remove *it*."]]),
   Q("e5u10-q17","e5u10-l2",3,"Only some students passed the test. Which sentence is correct?",2,[
     ["*The students, who passed the test, celebrated.*","The commas say that all the students passed."],
     ["*The students, that passed the test, celebrated.*","*That* cannot follow a comma here, and the commas change the meaning."],
     ["*The students who passed the test celebrated.*","Right. No commas: the clause tells which students."],
     ["*The students whom passed the test celebrated.*","*Whom* is an object form, and the pronoun here is a subject."]]),
   Q("e5u10-q18","e5u10-l2",3,"An editor says: “Use *that* for defining clauses and *which* for non-defining ones.” How should you describe this advice?",1,[
     ["A fixed grammar rule that all writers follow","Real usage is wider, and *which* is common in defining clauses."],
     ["A house-style choice that makes writing consistent, although real usage is wider","Right. Follow the guide, but know that it is a choice."],
     ["A mistake that no style guide recommends","Many US style guides recommend it."],
     ["A rule that only applies to speech","It is a rule about writing."]]),
   /* ---- Lesson 3: reported speech ---- */
   Q("e5u10-q19","e5u10-l3",1,"What is true about backshift?",2,[
     ["It is required in every report","The present may stay when the fact is still true."],
     ["It is wrong in standard English","It is common and correct."],
     ["It is optional when the information is still true","Right. The choice follows the meaning."],
     ["It applies only to questions","It applies to statements and questions."]]),
   Q("e5u10-q20","e5u10-l3",1,"Which word order is used in a reported question?",0,[
     ["Statement order, as in *where I lived*","Right. There is no *do* and no inversion."],
     ["Question order, as in *where did I live*","This is the direct-question order."],
     ["Order with a question mark at the end","A reported question has no question mark."],
     ["Any order","The order matters."]]),
   Q("e5u10-q21","e5u10-l3",1,"Which verb needs a person directly after it in *She ___ me that she was late*?",3,[
     ["*said*","*Say* does not take a person directly."],
     ["*explained*","*Explain* takes *to* before the person."],
     ["*suggested*","*Suggest* does not take a person plus *that* in this way."],
     ["*told*","Right. *Tell* takes a person."]]),
   Q("e5u10-q22","e5u10-l3",2,"Which pattern can follow *suggest*?",1,[
     ["a person plus a *to*-infinitive, as in *suggested him to go*","This is not standard."],
     ["an *-ing* form, as in *suggested going*","Right. A *that*-clause also works."],
     ["a bare noun and *to*, as in *suggested me to*","This is not standard."],
     ["*of* plus a noun, as in *suggested of leaving*","*Of* does not follow *suggest*."]]),
   Q("e5u10-q23","e5u10-l3",2,"Amara says on Monday: “I’ll call you tomorrow.” On Wednesday you report it. Which report fits best?",2,[
     ["*She said she will call me tomorrow.*","From Wednesday, *tomorrow* means Thursday, and *will* suggests the call is still ahead."],
     ["*She said she called me tomorrow.*","The tense and the time word do not match."],
     ["*She said she would call me the next day.*","Right. *Would* and *the next day* fit a later report."],
     ["*She said she would call me today.*","*Today* is Wednesday, but she meant Tuesday."]]),
   Q("e5u10-q24","e5u10-l3",2,"Which sentence uses *insist* to report a demand?",0,[
     ["*She insisted that he come.*","Right. The base form *come* reports a demand."],
     ["*She insisted that she was right.*","This reports a firm claim, not a demand."],
     ["*She insisted that it rained.*","This reports a firm claim."],
     ["*She insisted that he was late.*","This reports a firm claim."]]),
   Q("e5u10-q25","e5u10-l3",3,"Last month a manager said, “We will hire two people.” Nobody has been hired. Mariya reports it today. Which report is best?",3,[
     ["*The manager said we will hire two people.*","The present suggests that the plan still stands."],
     ["*The manager said us to hire two people.*","*Say* does not take a person directly, and the pattern is wrong."],
     ["*The manager told that they would hire two people.*","*Tell* needs a person."],
     ["*The manager said they would hire two people.*","Right. The past form fits a plan from last month, and it does not claim that the plan is still current."]]),
   Q("e5u10-q26","e5u10-l3",3,"Why can backshift feel like a new idea to a Japanese speaker?",1,[
     ["Japanese also uses backshift","Japanese quotations keep the verb as in the original speech."],
     ["Japanese does not shift the tense of a quoted verb, as in *kuru to itta*","Right. The quoted verb stays in its form."],
     ["Japanese has no past tense","Japanese has a past tense (*-ta*)."],
     ["Japanese never quotes speech","Japanese quotes with *to* (と)."]]),
   Q("e5u10-q27","e5u10-l3",3,"A learner writes *She asked me where did I go.* What is the best correction and reason?",2,[
     ["*She asked me where I did go.*, because *did* must follow the subject","*Did* is not needed in a reported question."],
     ["*She asked me where go I.*, because the verb goes last","This is not English word order."],
     ["*She asked me where I went.*, because a reported question has statement order and no *do*","Right. The helper *did* belongs to direct questions."],
     ["No change. This is correct","The direct order is not standard in a reported question."]]),
   /* ---- Lesson 4: information structure ---- */
   Q("e5u10-q28","e5u10-l4",1,"What is given information?",0,[
     ["Information that the hearer already knows or can guess","Right. It often starts the sentence."],
     ["Information that is new and surprising","That is new information."],
     ["Information that is always at the end","The end usually holds new information."],
     ["Information that comes from a teacher","Given has nothing to do with the source."]]),
   Q("e5u10-q29","e5u10-l4",1,"What does end weight mean?",2,[
     ["Short phrases go last","The opposite."],
     ["The verb goes last","Not in English."],
     ["Long, heavy phrases tend to go last","Right. *She handed the keys to the man who had come to repair the roof.*"],
     ["The stress falls on the first word","End focus puts the main stress near the end."]]),
   Q("e5u10-q30","e5u10-l4",1,"What does an it-cleft such as *It was Mei who found the error* do?",1,[
     ["It makes the sentence a question","It does not."],
     ["It focuses one part and takes the rest for granted","Right. It names the person and takes for granted that someone found it."],
     ["It changes the tense","The tense is the same."],
     ["It removes the subject","The subject is *it*, with the focus after *was*."]]),
   Q("e5u10-q31","e5u10-l4",2,"Which *there* sentence is the most natural?",3,[
     ["*There is the cat on the roof.*","The noun after existential *there* is normally new, so *the* sounds odd."],
     ["*There are the three buses to the airport.*","The same problem."],
     ["*There is everyone at the door.*","*Everyone* is not a new indefinite noun here, and this order is unnatural."],
     ["*There is a cat on the roof.*","Right. The noun is new and indefinite."]]),
   Q("e5u10-q32","e5u10-l4",2,"When is the passive a good choice for flow?",0,[
     ["When the known thing should start the sentence and the doer is long or unimportant","Right. The passive keeps the topic first."],
     ["Always, because it sounds more formal","Many writers prefer the active when it is clear."],
     ["Never, because the passive is an error","The passive is standard English."],
     ["Only in questions","The passive is used in statements as well."]]),
   Q("e5u10-q33","e5u10-l4",2,"In *What I need is a break*, which part is the focus?",2,[
     ["*What I need*","This is the known frame."],
     ["*is*","The verb *is* links the two parts."],
     ["*a break*","Right. The news comes last."],
     ["*I*","The pronoun is part of the frame."]]),
   Q("e5u10-q34","e5u10-l4",3,"Someone says that Ana broke the window. Dmitri knows that Tomás did it. Which reply fits best?",1,[
     ["*Tomás broke it? What?*","This does not correct the claim."],
     ["*It was Tomás who broke it.*","Right. An it-cleft corrects the claim and names the person."],
     ["*There was Tomás at the window.*","This is not a correction."],
     ["*The window was broken.*","A passive removes the doer, which does not correct anything."]]),
   Q("e5u10-q35","e5u10-l4",3,"A Japanese story opens with *ojīsan to obāsan ga imashita*. Which English tool matches the new characters?",3,[
     ["*The old man and the old woman lived there.*","*The* shows known information, so it does not suit the first mention."],
     ["*An old man and an old woman, they lived.*","This repeats the subject and is not standard."],
     ["*Lived an old man and an old woman.*","This is not natural in standard prose."],
     ["*Once there lived an old man and an old woman.*","Right. *There* and *a* mark the new characters."]]),
   Q("e5u10-q36","e5u10-l4",3,"Which version has the better end weight?",0,[
     ["*They gave the prize to a student who had never entered a contest before.*","Right. The short phrase comes first and the long one comes last."],
     ["*They gave a student who had never entered a contest before the prize.*","The long phrase comes before a short one."],
     ["*A student who had never entered a contest before was given by them the prize.*","This is awkward and unclear."],
     ["*The prize gave they to a student who had never entered a contest before.*","This has an error."]]),
   /* ---- Lesson 5: cohesion and linking ---- */
   Q("e5u10-q37","e5u10-l5",1,"What is cohesion?",1,[
     ["The speed of a text","Cohesion is not about speed."],
     ["The links that connect the sentences of a text","Right. Pronouns, repeated words and linking words are examples."],
     ["The length of a sentence","Length is a different feature."],
     ["The spelling of linking words","Spelling is not cohesion."]]),
   Q("e5u10-q38","e5u10-l5",1,"Which word is a linking adverb?",2,[
     ["*and*","A coordinator."],
     ["*because*","A subordinator."],
     ["*therefore*","Right. It links ideas across sentences and is not a conjunction."],
     ["*so*","A coordinator."]]),
   Q("e5u10-q39","e5u10-l5",1,"Why use *this* plus a noun, such as *this decision*?",0,[
     ["The noun names the earlier idea, so the reference is clear","Right. It packages the earlier idea."],
     ["It makes the sentence longer","Length is not the aim."],
     ["It avoids pronouns","It uses a pronoun-like word and adds a noun."],
     ["It makes the sentence a question","It does not."]]),
   Q("e5u10-q40","e5u10-l5",2,"Which sentence is correctly punctuated?",3,[
     ["*It was late, however we stayed.*","A comma alone cannot join the clauses."],
     ["*It was late however, we stayed.*","The punctuation is in the wrong place."],
     ["*It was late. However we stayed.*","A comma is expected after the adverb in this position."],
     ["*It was late. However, we stayed.*","Right. A period, then the adverb with a comma."]]),
   Q("e5u10-q41","e5u10-l5",2,"Why is *It rained, therefore we stayed in* a problem?",1,[
     ["*Therefore* is a noun","It is an adverb."],
     ["*Therefore* is an adverb, so a comma alone is a splice","Right. Use a period, a semicolon, or *so*."],
     ["*Rained* is the wrong tense","The tense is fine."],
     ["The sentence has too few words","Length is not the issue."]]),
   Q("e5u10-q42","e5u10-l5",2,"How do *so* and *therefore* differ?",2,[
     ["They have different meanings","They have the same meaning of result."],
     ["*So* is an adverb and *therefore* is a conjunction","The reverse."],
     ["*So* is a conjunction that can follow a comma, and *therefore* is an adverb that cannot join clauses with a comma","Right. *It rained, so we stayed in* is correct. *It rained, therefore we stayed in* is a splice."],
     ["Both are conjunctions","*Therefore* is an adverb."]]),
   Q("e5u10-q43","e5u10-l5",3,"A student’s paragraph begins every sentence with *Moreover, Furthermore, In addition* or *Therefore*. What is the best advice?",0,[
     ["Keep a connector only where the relation could be missed, and use other links such as *this* plus a noun","Right. Too many connectors sound mechanical."],
     ["Add more connectors to make it more academic","This makes the problem worse."],
     ["Remove all links, including pronouns","Pronouns and other links are needed."],
     ["Change every connector to *and*","This loses the relations."]]),
   Q("e5u10-q44","e5u10-l5",3,"A Japanese chain says *Ame ga futte kite, shiai ga chūshi ni natte, minna kaerimashita.* Which English version is clearest?",1,[
     ["*Rain started, the game was canceled, everyone went home.*","Three clauses with commas only read as a splice."],
     ["*It started to rain, so the game was canceled, and everyone went home.*","Right. The connectors show reason and sequence."],
     ["*It started to rain the game was canceled everyone went home.*","This is a run-on."],
     ["*Starting to rain, canceled the game, going home everyone.*","This is not standard English."]]),
   Q("e5u10-q45","e5u10-l5",3,"Why must an English writer make a choice when translating *Ame ga futte ita ga, dekaketa*?",2,[
     ["English has no word for contrast","English has *but* and *although*."],
     ["The Japanese sentence is a fragment","It is a full sentence."],
     ["*Ga* joins the clauses loosely, and English connectors say the relation: *although, but* or *and*","Right. English asks for the relation to be named."],
     ["English forbids two clauses in one sentence","English allows them with a proper join."]])
  ]
});
})();
