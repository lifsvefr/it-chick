(function(){
/* World Englishes · Unit 8 (e6u8) · English as a shared language */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u8", track:"e6", n:8, title:"English as a shared language", icon:"🤝",
  blurb:"Most conversations in English today are between people who learned it as an additional language. This unit studies English as a lingua franca (ELF). It asks how speakers understand each other. It covers the pronunciation features that matter most (Jenkins’ Lingua Franca Core) and how speakers adjust to each other. Then it looks at English in East and Southeast Asia, at ASEAN, and at English in Japan, where katakana English and wasei-eigo are Japanese words and not mistakes. You hear ten real speakers who learned English at school. The last lesson is a lab that compares them and does not rank anyone.",
  goals:[
    "Explain what English as a lingua franca is, why it is common, and what ELF research (Firth, Jenkins, Seidlhofer) has found, with hedges",
    "Describe the Lingua Franca Core, give examples from the Please call Stella paragraph, and state its limits and the criticism of it",
    "Use accommodation strategies (rephrasing, checking, repair) to make talk easier for both sides",
    "Describe English in East and Southeast Asia and in ASEAN, and explain Kirkpatrick’s multilingual model",
    "Describe English in Japan, explain why katakana English is Japanese, and listen across speakers without ranking them"
  ],
  read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, sections 10.4 “Language conveys more than semantic meaning” and 10.6 “Sociolinguistic correlations: Place”; Chapter 3, Phonetics, sections 3.10 “Syllables”, 3.11 “Stress” and 3.12 “Tone and intonation”; Chapter 12, Adult Language Learning, sections 12.6 “Learning Phonetics and Phonotactics in a Later Language” and 12.7 “Learning Phonemes and Allophones in a Later Language”", note:"Read Chapter 3 beside Lesson 2, Chapter 10 beside Lessons 3 and 4, and Chapter 12 beside Lesson 5."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u8-l1", title:"English as a lingua franca", minutes:55,
   hook:{q:"A manager from Japan and an engineer from Mexico talk in English in a meeting in Bangkok. Nobody else is in the room. Which name fits their English best?", options:["English as a lingua franca (ELF)","Broken English","British English","Japanese English only"], answer:0, reveal:"**English as a lingua franca, or ELF.** A lingua franca is a language that people with different first languages use to talk to each other. Here English is the language that the two speakers share. Researchers study how people like these understand each other, and they do not treat the talk as a weaker copy of first-language English."},
   goals:[
     "Define lingua franca and ELF, and say why ELF talk is common, with a hedge on the numbers",
     "Name the main sources of ELF research: Firth (1996), Jenkins (2000, 2007), Seidlhofer (2011) and the VOICE corpus",
     "Explain Firth’s “let it pass” and “make it normal” with an example",
     "Say why ELF is a way of using English and not one fixed variety, and why ELF speakers are not “learners with errors”",
     "Make a careful claim about one recording"
   ],
   learn:[
    {h:"A language for people with different first languages", body:[
      {lead:"A [[we-lingua-franca|lingua franca]] is a language that people with different first languages use to talk to each other."},
      "The name comes from a mixed trade language that people used around the Mediterranean Sea in past centuries. Today the name covers any shared language of this kind. Latin was one in medieval Europe. Kiswahili is one in much of East Africa. English is now a lingua franca in many fields, such as science, business, aviation and online talk.",
      "When English is used this way, researchers write **English as a lingua franca**, or ELF. The idea is simple. Two or more people share no first language, and they use English because it is the language that they have in common.",
      {table:[["Term","What it describes","Example"],["First-language (L1) user","A person who learned English first","A student who grew up in Ohio"],["Foreign-language (EFL) learning","A way of learning: English as a school subject","A student in Osaka in an English class"],["ELF","A situation of use: English between people with other first languages","An engineer from Mexico and a manager from Japan in a meeting"]]},
      {tip:"ELF names a situation, not a level. The same person can be an EFL learner in class and an ELF speaker in a meeting. Beginners and experts can both be in an ELF conversation."}
    ]},
    {h:"How common is ELF talk?", body:[
      {lead:"Nobody has counted every conversation. Every number here is an estimate."},
      "David Crystal gave estimates in *English as a Global Language* (2nd edition, 2003) and in an article in the journal *English Today* (2008). In the article, he estimated about two billion users of English. He wrote that for every first-language speaker there were three or four people who use English as an additional language. Other writers give other numbers. The word *speaker* can mean someone who knows a few phrases or someone who works in English every day, and estimates vary with this choice. Treat each figure as an estimate and ask how it was counted.",
      "If the estimates are close, many conversations in English have no first-language speaker in them. Researchers call these conversations the main case of ELF. First-language speakers also take part in ELF talk when a group is mixed.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Who is in the conversation?</text><rect class="d-panel" x="10" y="34" width="320" height="70" rx="8" stroke-width="2"/><circle class="d-sage" cx="40" cy="69" r="15" stroke-width="2"/><text x="40" y="74" text-anchor="middle">A</text><circle class="d-sage" cx="86" cy="69" r="15" stroke-width="2"/><text x="86" y="74" text-anchor="middle">B</text><text x="118" y="64">Two first-language users</text><text class="s" x="118" y="84">Shared first language: not ELF</text><rect class="d-panel" x="10" y="114" width="320" height="70" rx="8" stroke-width="2"/><circle class="d-sage" cx="40" cy="149" r="15" stroke-width="2"/><text x="40" y="154" text-anchor="middle">A</text><circle class="d-gold" cx="86" cy="149" r="15" stroke-width="2"/><text x="86" y="154" text-anchor="middle">B</text><text x="118" y="144">A mixed pair</text><text class="s" x="118" y="164">No shared first language: ELF</text><rect class="d-gold" x="10" y="194" width="320" height="70" rx="8" stroke-width="2"/><circle class="d-gold" cx="40" cy="229" r="15" stroke-width="2"/><text x="40" y="234" text-anchor="middle">A</text><circle class="d-gold" cx="86" cy="229" r="15" stroke-width="2"/><text x="86" y="234" text-anchor="middle">B</text><text x="118" y="224">Two additional-language users</text><text class="s" x="118" y="244">No shared first language: ELF</text><text class="s" x="170" y="277" text-anchor="middle">Green: English is the first language.</text><text class="s" x="170" y="293" text-anchor="middle">Yellow: English is an additional language.</text></svg>', alt:"Three rows, each with two circles labeled A and B. Row 1: two first-language users, who share a first language, so it is not ELF. Row 2: a mixed pair with no shared first language, which is ELF. Row 3: two additional-language users with no shared first language, which is ELF.", cap:"Rows 2 and 3 are ELF talk. Estimates suggest that these rows are now common, and nobody has counted them exactly."}
    ]},
    {h:"What ELF researchers have studied", body:[
      {lead:"ELF research starts from what speakers do in real conversations. It does not start from a list of what first-language speakers do."},
      "Four sources are a good start. Each is a starting point for reading.",
      {list:[
        "**Firth (1996).** Alan Firth used conversation analysis to study recorded business talk between managers. None of them spoke English as a first language. His paper is in the *Journal of Pragmatics*, volume 26, pages 237–259.",
        "**Jenkins (2000, 2007).** Jennifer Jenkins studied pronunciation between additional-language speakers (Lesson 2). Her 2007 book, *English as a Lingua Franca: Attitude and Identity*, studies what teachers and learners think about accents.",
        "**Seidlhofer (2011).** Barbara Seidlhofer wrote *Understanding English as a Lingua Franca*. She led the team that built the VOICE corpus.",
        "**VOICE.** The Vienna-Oxford International Corpus of English is a set of about one million words of transcribed spoken ELF. It was recorded between 2001 and 2007 and released in 2009. A [[we-voice|corpus]] is a large collection of real language that researchers can search."
      ]},
      "Seidlhofer (2004) listed patterns that came up often in early VOICE data. Examples are leaving out the *-s* in *she go* and using *who* and *which* in the same way. Others are using one tag such as *isn’t it?* for every sentence, and using the articles *a* and *the* in different places from first-language speakers. Researchers report that these patterns usually did not stop speakers from understanding each other. Some of them also appear in [[we-ewave|eWAVE]], the atlas of grammar features used in this course.",
      {warn:"A pattern that is common in ELF talk is not a rule for every ELF speaker. An exam, an editor or a company can still ask for one standard. Learners should know both facts."}
    ]},
    {h:"What successful ELF speakers do", body:[
      {lead:"Firth (1996) found that the speakers in his data worked hard to keep the talk going. He described two habits, often called *let it pass* and *make it normal*, that other researchers later studied."},
      "The first habit is called [[we-let-it-pass|let it pass]]. A listener hears a word that is unclear and does not stop the talk to ask. The listener waits, because the meaning often becomes clear a few seconds later. The second habit is called [[we-make-it-normal|make it normal]]. When a form is unusual, speakers do not correct it or comment on it. They treat it as ordinary and continue.",
      {ex:"Priya writes to Dmitri: “I will send the file tomorrow, and then you can control it.” Dmitri replies: “Good. I will check it tomorrow.” Dmitri heard *control* as “check”, a meaning that the word has in several languages. He did not correct Priya. He used *check* in his own turn, and the talk went on.", label:"Example (invented): make it normal"},
      {ex:"Lucía says, “The workshop starts at nine in the *aula*.” Kenji does not know *aula*. He says, “OK, nine.” A minute later, Lucía says, “The room is on the second floor.” Now Kenji understands. He let the word pass, and the next sentence repaired it.", label:"Example (invented): let it pass"},
      "These habits are not the only ones. Mauranen (2006) studied how ELF speakers show that they did not understand and how they prevent trouble before it starts. Speakers repeat, rephrase and check each other’s meaning. Lesson 3 returns to these strategies.",
      {ex:"Listen to a speaker from Monterrey, Mexico (23, male). Spanish is his first language, and he also speaks German, French and Italian. He learned English from age seven and had not lived abroad when he was recorded. Listen to the whole reading first, and then to the words *six*, *spoons*, *snow* and *peas*. There is no single right answer, and one speaker is one person.", label:"Listen: Monterrey", listen:"e6u8-l1-a1"},
      {ex:"Listen to a speaker from Hanoi, Vietnam (23, male). Vietnamese is his first language. He learned English from age six and had not lived abroad when he was recorded. The two speakers in this lesson share no first language, but they read the same English text. Notice what is the same and what is different. There is no single right answer.", label:"Listen: Hanoi", listen:"e6u8-l1-a2"}
    ]},
    {h:"Is ELF a variety of English?", body:[
      {lead:"Researchers disagree about the best answer, and the debate is open."},
      "In Unit 1 you learned that a variety has its own community, its own norms and often a written description. ELF has no single community. A person in an ELF conversation in Bangkok on Monday can be in another one in Berlin on Friday, with different partners each time. The speakers bring their other languages, and each conversation can look different.",
      "For this reason, Seidlhofer (2011) describes ELF as a flexible resource that speakers shape as they talk. It is not a fixed code that anyone can list or teach as a whole. Jenkins has since written about English in a multilingual frame. In this view, ELF speakers are multilingual people who use English as one of their languages. Some critics prefer to describe ELF as a set of strategies and not as a form of the language. Others ask whether ELF research gives learners what exams ask for.",
      "A safe summary for a course is this. **ELF is a way of using English between people with different first languages. It is not a single variety with a fixed form, and it is not a mistake.** Speakers can also be proud of their own English, and many are.",
      {key:"ELF is a situation of use and a set of habits. The people in it are multilingual speakers who succeed in being understood. They are not first-language speakers with a missing skill."}
    ]},
    {h:"Three common mistakes", body:[
      {ol:[
        "**“ELF means simple or broken English.”** ELF talk can be very complex. Speakers use all the English that they know, and they add strategies and other languages.",
        "**“ELF is for speakers who did not learn real English.”** An additional-language speaker uses real English. Many first-language speakers also take part in ELF talk, and they adjust too.",
        "**“ELF means that nothing matters.”** Understanding matters a great deal. The research asks which choices help understanding (Lesson 2) and which strategies help (Lesson 3)."
      ]},
      "The next lesson asks a precise question: which features of pronunciation did Jenkins find most important for being understood?"
    ]}
   ],
   try:[
    M("e6u8-l1-x1","Which statement is the best definition of a lingua franca?",2,[
      ["A language that only first-language speakers may use","A lingua franca is a language that people share, and its users need not be first-language speakers."],
      ["A simple form of a language for beginners","A lingua franca can be used at any level, and it is not simple by definition."],
      ["A language that people with different first languages use to talk to each other","Right. English is one such language today, and others are Kiswahili and, in the past, Latin."],
      ["A language with no grammar","Every language used by people has grammar."]
    ]),
    {id:"e6u8-l1-x2", type:"sort", q:"Which of these conversations is ELF talk, because the speakers have no shared first language and use English?", buckets:["ELF talk","Not ELF talk"], items:[
      {t:"A manager from Brazil and a manager from Korea negotiate in English", b:0, why:"They share no first language, and English is what they have in common."},
      {t:"Two engineers from Germany talk in German", b:1, why:"They share a first language and they do not use English."},
      {t:"A teacher from Poland and a teacher from Italy chat in English at a conference", b:0, why:"Their first languages differ, and English connects them."},
      {t:"Two friends from Ohio talk in English", b:1, why:"English is the first language of both of them, so it is not a lingua franca between them."},
      {t:"A woman from Ghana, a man from Thailand and an Australian colleague plan a project in English", b:0, why:"ELF research includes mixed groups, because no first language is shared by everyone."},
      {t:"A student in Japan reads an English article alone", b:1, why:"ELF means talk between people, and this is reading alone."}
    ]},
    {id:"e6u8-l1-x3", type:"order", q:"Put these publications in the order in which they appeared, from earliest to latest.", items:[
      {t:"Firth, “The discursive accomplishment of normality” (1996)", why:"This is the earliest of the four."},
      {t:"Jenkins, *The Phonology of English as an International Language* (2000)", why:"This came four years after Firth."},
      {t:"Jenkins, *English as a Lingua Franca: Attitude and Identity* (2007)", why:"This came seven years after Jenkins’ first book."},
      {t:"Seidlhofer, *Understanding English as a Lingua Franca* (2011)", why:"This is the latest of the four."}
    ]},
    {id:"e6u8-l1-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["*let it pass*","A listener does not stop the talk for an unclear word and waits for the meaning","Firth (1996) described this habit."],
      ["*make it normal*","Speakers treat an unusual form as ordinary and do not correct it","Firth (1996) described this too."],
      ["*VOICE*","A corpus of about one million words of spoken ELF","It was released in 2009."],
      ["*ELF*","English used between people who have different first languages","It names a situation of use."],
      ["*corpus*","A large collection of real language that researchers can search","The plural is *corpora*."]
    ]},
    {id:"e6u8-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"ELF is a kind of simplified English for beginners.", flag:true, why:"ELF names a situation of use. Speakers at any level take part, and the talk can be complex."}, " ", {t:"First-language speakers can take part in ELF talk when a group is mixed.", flag:false, why:"Correct. The group has no shared first language."}, " ", {t:"Estimates of ELF talk are exact counts.", flag:true, why:"Nobody has counted every conversation. Estimates depend on what *speaker* means."}, " ", {t:"Firth (1996) described habits such as *let it pass*.", flag:false, why:"Correct. He studied business talk in which nobody spoke English as a first language."}, " ", {t:"Speakers who leave out *-s* in *she go* cannot be understood.", flag:true, why:"Researchers report that such patterns usually did not stop understanding."}, " ", {t:"ELF is one fixed variety with its own dictionary.", flag:true, why:"Seidlhofer (2011) describes ELF as a flexible resource, and it has no single fixed form."}, "”"
    ]},
    {id:"e6u8-l1-x6", type:"number", q:"Firth’s paper appeared in 1996. Seidlhofer’s book *Understanding English as a Lingua Franca* appeared in 2011. How many years are between them?", answer:15, tol:0, unit:"years", why:"2011 − 1996 = 15.", wrongs:[{v:5, tol:0, why:"You subtracted only the last digits (11 − 6). The years are in different centuries."},{v:25, tol:0, why:"You added 10 by mistake. Check: 1996 + 15 = 2011."}], hint2:"Subtract 1996 from 2011."},
    M("e6u8-l1-x7","You will hear a speaker from Jakarta, Indonesia. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["This speaker shows how all Indonesians speak English.","One speaker is one person. A recording cannot show a whole country."],
      ["“I can describe what I hear in this speaker, say that one speaker is one person, and not judge the speaker.”","Right. It reports the evidence, gives the limit and does not judge."],
      ["This speaker makes mistakes when the sounds differ from my own English.","A difference from another speaker is not a mistake."],
      ["This speaker uses Indonesian in the recording.","The speaker reads an English text, so the recording cannot show another language."]
    ], {listen:"e6u8-l1-a3", hint:"The right answer does not depend on what this speaker does. Choose the claim that stays within the evidence."}),
    {id:"e6u8-l1-x8", type:"explain", q:"A classmate says, “ELF is just bad English that people use when they cannot speak real English.” Explain, kindly, what is wrong with this claim.", size:"4–6 sentences", prompt:"ELF is better described as …", hint:"Think about what ELF names, about who takes part and about what Firth found.", points:["Says that ELF names a situation: English used between people with different first languages","Says that speakers at all levels take part, and first-language speakers can too","Says that research (for example Firth 1996) shows speakers working together to be understood","Does not blame the classmate and gives an example or a strategy"], model:"ELF is English used between people who have different first languages, for example an engineer from Mexico and a manager from Japan. It is a situation of use, and it is not a lower level of English. Speakers at every level take part, and first-language speakers can also join a mixed group. Firth (1996) found that speakers in these conversations work together. They let a small problem pass, or they treat an unusual form as normal, and the talk goes on. So ELF is not “bad English”. It is a normal way in which many people use English as one of their languages."}
   ],
   apply:{
    intro:"These tasks use your own notes and one free website. Nothing needs an account.",
    tasks:[
     {t:"Find ELF in your own week", how:[
       "Think about the last seven days. Write down every conversation in which you used English, or heard English used.",
       "For each conversation, write the first languages of the people if you know them. Mark each conversation that had no shared first language.",
       "Write two sentences. Say how many of your conversations were ELF talk, and what helped people to understand each other."
     ], write:"Conversation 1… first languages… ELF? … Two sentences…"},
     {t:"Look at the VOICE corpus", how:[
       "Search the web for “VOICE corpus”, and open the page of the project or of a corpus catalog.",
       "Find the size of the corpus in words and the years of recording. Compare them with this lesson.",
       "Write one sentence that says what a researcher can learn from a corpus and one sentence that says what a corpus cannot show."
     ], write:"Size… years… A corpus can show… A corpus cannot show…"}
    ],
    proof:"A list of your conversations with ELF talk marked. Two sentences about what helped understanding. Two sentences about what a corpus can and cannot show."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”", note:"This section shows that talk carries social meaning as well as content, which is part of why ELF speakers care about identity."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u8-l2", title:"What helps people understand each other: the Lingua Franca Core", minutes:55,
   hook:{q:"In Jenkins’ (2000) proposal, which change is more likely to make a word hard to understand for a listener from another country? Saying *think* with an *s* sound at the start, or leaving the *s* out of *snow* so that it sounds like *no*?", options:["Saying *think* with an *s* sound","Leaving the *s* out of *snow*","Both are equally likely to cause trouble","Neither can ever cause trouble"], answer:1, reveal:"**Leaving the *s* out of *snow*.** In Jenkins’ account, a changed *th* sound seldom stopped understanding between additional-language speakers, because listeners often work out *think* from context. Consonants at the start of a word, especially in clusters, carry a lot of information. Her account is a proposal, and other researchers have questioned parts of it (see below)."},
   goals:[
     "Explain why understanding depends on the listener, and why Jenkins studied talk between speakers of other languages",
     "List the main features of the Lingua Franca Core and the features that Jenkins treated as non-core",
     "Give examples from the Please call Stella paragraph for each feature",
     "Explain how the Core was meant to be used, and why it is a teaching proposal and not a rule for people",
     "Describe the main criticisms of the Core, with hedges"
   ],
   learn:[
    {h:"Understanding, from the listener’s side", body:[
      {lead:"A speaker is not understood or misunderstood alone. Understanding happens between a speaker and a listener."},
      "Unit 5 introduced [[we-intelligibility|intelligibility]], [[we-comprehensibility|comprehensibility]] and [[we-interpretability|interpretability]]. Intelligibility means recognizing words and sounds. Jennifer Jenkins asked a question that teachers often ask. Which parts of pronunciation matter most when two people with different first languages talk in English?",
      "She recorded pairs and groups of additional-language speakers who did tasks together. She noted the moments when understanding broke down, and then she looked at what had caused each break. In her data, pronunciation was a main cause of breakdown. She published the results in *The Phonology of English as an International Language* (2000), and she proposed a short list of features for teaching. The list is called the [[we-lfc|Lingua Franca Core]]. The speakers in her data came from several first languages.",
      {tip:"Jenkins studied talk between people who did not share a first language. Her proposal is about helping those listeners. It does not say anything about how any accent should sound to a first-language listener."}
    ]},
    {h:"What the Core includes", body:[
      {lead:"Jenkins proposed that learners who want to be understood by many listeners should give most attention to a small group of features."},
      "The table lists the main features in her proposal, with examples from the *Please call Stella* paragraph. Descriptions of the Core differ a little in detail, so check Jenkins (2000) before you quote a point.",
      {table:[["Feature","Example in the paragraph","Why it matters, in her account"],["Most consonant sounds","*bring*, *blue*, *big*, *frog*","Listeners need them to recognize words"],["A small puff of air after *p*, *t*, *k* at the start of a stressed syllable","*please*, *call*, *kids*","It keeps *p t k* different from *b d g*"],["Consonant clusters at the start of a word","*spoons*, *snow*, *scoop*, *plastic*, *train*","Dropping one sound changes the word"],["Short and long vowels stay different","*big* and *peas*","Length tells words apart"],["Nuclear stress: the main stress of a phrase","*Please call STELLA*","It shows the important word of the phrase"],["A pronounced *r* after a vowel","*store*, *her*","It is in her list, but this point is debated"]]},
      "Look at two of these features more closely. The first is a [[we-initial-cluster|cluster]] at the start of a word. In *snow*, *s* and *n* come together before the vowel. A speaker who leaves out the *s* says *no*, and the listener must guess which word was meant. In your own language, clusters may be different. The point is not that learners must copy a first-language sound, but that all the consonants should still be there.",
      "The second feature is [[we-nuclear-stress|nuclear stress]]. In a phrase, speakers put the strongest stress on one word, and this word carries the news. Say *Please call STELLA* and then *Please CALL Stella*. The words are the same, but the news is different. The first phrase says who to call. The second says to call, and not to write. Unit 3 of How English Works explains this idea in {{intonation-english|English intonation basics}}, and its term [[nucleus]] names the stressed syllable.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">The Core and the rest</text><rect class="d-sage" x="10" y="34" width="150" height="270" rx="8" stroke-width="2"/><text x="85" y="58" text-anchor="middle">Core</text><text class="s" x="85" y="76" text-anchor="middle">keep these clear</text><text class="s" x="85" y="110" text-anchor="middle">most consonants</text><text class="s" x="85" y="140" text-anchor="middle">p t k puff of air</text><text class="s" x="85" y="170" text-anchor="middle">word-start clusters</text><text class="s" x="85" y="200" text-anchor="middle">long and short vowels</text><text class="s" x="85" y="230" text-anchor="middle">nuclear stress</text><text class="s" x="85" y="260" text-anchor="middle">pronounced r</text><text class="s" x="85" y="288" text-anchor="middle">(debated)</text><rect class="d-gold" x="180" y="34" width="150" height="270" rx="8" stroke-width="2"/><text x="255" y="58" text-anchor="middle">Non-core</text><text class="s" x="255" y="76" text-anchor="middle">can vary</text><text class="s" x="255" y="110" text-anchor="middle">th sounds</text><text class="s" x="255" y="140" text-anchor="middle">dark l</text><text class="s" x="255" y="170" text-anchor="middle">weak forms</text><text class="s" x="255" y="200" text-anchor="middle">exact vowel quality</text><text class="s" x="255" y="230" text-anchor="middle">pitch movement</text><text class="s" x="255" y="260" text-anchor="middle">word stress (debated)</text></svg>', alt:"Two columns. The Core column lists most consonants, the puff of air after p, t and k, clusters at the start of words, long and short vowels, nuclear stress and a pronounced r, which is debated. The non-core column lists th sounds, dark l, weak forms, exact vowel quality, pitch movement and word stress, which is debated.", cap:"A simplified summary of Jenkins’ (2000) proposal. Some points are debated, as the text explains."}
    ]},
    {h:"What the Core leaves out, and why", body:[
      {lead:"The second half of the proposal is as important as the first. Jenkins argued that some features matter less for understanding between additional-language speakers."},
      "In her account, the two *th* sounds in *think* and *this* are not in the Core. Speakers often replace them with *s*, *f*, *t*, *d* or *z*, and in her data this seldom stopped understanding. Many first-language varieties also change *th*. Some speakers in England say *f* for *th*, and some speakers in Ireland say *t*. The other features that she left out are the dark *l* sound, weak forms such as *to* and *for*, the exact quality of most vowels, and pitch movement that shows attitude.",
      "The proposal also treated word stress and rhythm as less central than nuclear stress. This is one of the most debated points, and you will read about it below. For *weak forms*, see {{weak-forms-english|weak forms of English function words}}. For word stress, see {{word-stress-english|word stress in English}}.",
      {warn:"Non-core does not mean “wrong” or “never matters”. It means that in Jenkins’ data these features seldom caused a breakdown between additional-language speakers. A listener who expects one exact sound can still find a difference hard to follow."},
      {ex:"Listen to a speaker from Incheon, South Korea (19, female). Korean is her first language, and she learned English from age eight. She had not lived abroad when she was recorded. Listen for the words *spoons*, *snow*, *snack*, *snake* and *scoop*. There is no single right answer, and one speaker is one person.", label:"Listen: Incheon", listen:"e6u8-l2-a1"},
      {ex:"Listen to a speaker from Bangkok, Thailand (18, female). Thai is her first language, and she learned English from age six. She had not lived abroad when she was recorded. Listen for the phrase *Please call Stella* and say where you hear the main stress. Write what you hear. There is no single right answer.", label:"Listen: Bangkok", listen:"e6u8-l2-a2"}
    ]},
    {h:"How the Core was meant to be used", body:[
      {lead:"The Core is a proposal about priorities in teaching. It is not a ban on other sounds."},
      "Jenkins suggested that teachers could start with the Core for learners who mainly expect to speak English with other additional-language speakers. Learners could then add other features if they wished. The accent of the speaker, including the first-language accent, could stay. She argued that a first-language accent is part of a person’s identity, and that nobody should lose it for the sake of English.",
      "The proposal also changed how teachers can think about errors. If a feature is outside the Core, a different sound is a variation, and it need not be corrected as a mistake. This is a teaching decision. It does not say what exams must ask. An exam can ask for one standard, and a learner who wants to pass it should prepare for it.",
      "Understanding also depends on the listener. A listener who has heard a speaker’s first language before, or who knows the topic, will need fewer cues. Noise, speed and tiredness matter too. The Core cannot predict everything, and speakers can use the strategies in Lesson 3 whenever a gap appears."
    ]},
    {h:"Criticism and later research", body:[
      {lead:"Researchers have tested and questioned the Core. A fair account of it includes their views."},
      {list:[
        "**The data.** Critics point out that the proposal began with a limited set of recorded breakdowns, and that more speakers and more first languages should be studied.",
        "**New data.** David Deterding (2013) studied misunderstandings in ELF talk between speakers in Southeast Asia. In his summaries, pronunciation was a main cause. Mixing *l* and *r* and simplifying clusters at the start of a word caused trouble, but a *t* for *th* seldom did. This supports parts of the Core, and other points are still discussed.",
        "**Word stress and rhythm.** Some researchers think that word stress matters for understanding more than the proposal says. Others agree with her view.",
        "**The pronounced r.** The proposal suggests a pronounced *r* after a vowel, and this does not fit varieties in which *r* is not pronounced. Researchers debate how much this matters.",
        "**Learner choice.** Some learners want a first-language model, such as General American or Southern British English. Jenkins has written that learners should be free to choose a model."
      ]},
      "A fair summary is this. The Core is an influential, testable proposal, and the evidence is still being discussed. It is a good tool for thinking about priorities. It is not a complete list of what matters.",
      {key:"The Lingua Franca Core is a hypothesis about which features of pronunciation matter most between additional-language speakers. Use it to think about priorities. Do not use it to judge any person’s speech."}
    ]},
    {h:"Connections to other lessons", body:[
      "The Core connects to How English Works. Unit 2 has the phonemes and the [[minimal-pair|minimal pairs]] that make contrasts clear, and its vowel chart shows length. Unit 3 has {{stress-timing-and-rhythm|sentence stress and rhythm}}, where you can read why labels such as *stress-timed* are debated. In this course, Unit 5 introduced the same three ideas about understanding, and Lesson 5 of this unit applies them to Japanese users of English.",
      "In the listening lab, you will not decide which speakers “follow the Core”. You will notice features in the words of the paragraph and report what you hear with care."
    ]}
   ],
   try:[
    M("e6u8-l2-x1","Which of these is in the Lingua Franca Core, in Jenkins’ (2000) proposal?",1,[
      ["The *th* sounds in *think* and *this*","These are described as non-core."],
      ["Consonant clusters at the start of words, such as *sp* in *spoons*","Right. Dropping a sound at the start of a word changes the word."],
      ["Weak forms of *to* and *for*","These are described as non-core."],
      ["The exact quality of every vowel","Exact vowel quality is described as less central."]
    ]),
    {id:"e6u8-l2-x2", type:"sort", q:"Sort each feature by how Jenkins’ (2000) proposal treats it.", buckets:["In the Core","Non-core"], items:[
      {t:"A cluster at the start of a word, as in *plastic*", b:0, why:"Consonant clusters at the start of a word are in the Core."},
      {t:"The *th* in *thick*", b:1, why:"*Th* sounds are not in the Core."},
      {t:"A small puff of air after *p* in *please*", b:0, why:"This puff of air after *p*, *t*, *k* is in the Core."},
      {t:"The weak form of *to* in *ask her to bring*", b:1, why:"Weak forms are described as non-core."},
      {t:"The stress on the main word of the phrase *Please call Stella*", b:0, why:"Nuclear stress is in the Core."},
      {t:"A dark *l*", b:1, why:"The dark *l* is not in the Core."},
      {t:"The length difference between *big* and *peas*", b:0, why:"Keeping long and short vowels different is in the Core."}
    ]},
    {id:"e6u8-l2-x3", type:"order", q:"Put the steps of Jenkins’ method in a sensible order.", items:[
      {t:"Record additional-language speakers doing tasks together", why:"The data come first."},
      {t:"Note the moments when understanding broke down", why:"Next the researcher finds the problems."},
      {t:"Look at which feature caused each breakdown", why:"This links each problem to a feature."},
      {t:"Propose a short list of features for teaching", why:"The list comes from the pattern in the data."},
      {t:"Let other researchers test the proposal", why:"A proposal is useful when others can test it."}
    ]},
    {id:"e6u8-l2-x4", type:"match", q:"Match each word of the paragraph to the feature that you can listen for in it.", pairs:[
      ["*spoons*","A cluster at the start of a word","Two consonants come before the vowel."],
      ["*thick*","A *th* sound, which is non-core in Jenkins’ account","*Th* sounds can vary."],
      ["*store*","The *r* after a vowel","This is the pronounced *r* that is debated."],
      ["*peas*","A long vowel","Compare it with the short vowel in *big*."],
      ["*Stella*","A word that can carry the main stress of the phrase *Please call Stella*","It is a good place to listen for nuclear stress."]
    ]},
    {id:"e6u8-l2-x5", type:"spot", q:"A student wrote these notes after Lesson 2. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"The Core tells speakers to give up their first-language accent.", flag:true, why:"Jenkins argued that a first-language accent can stay. The Core is about priorities for understanding."}, " ", {t:"Jenkins studied talk between additional-language speakers.", flag:false, why:"Correct. She recorded people who did not share a first language."}, " ", {t:"*Th* sounds are non-core in her account.", flag:false, why:"Correct. They seldom stopped understanding in her data."}, " ", {t:"Non-core means that a feature is wrong.", flag:true, why:"Non-core means that the feature seldom caused a breakdown in the data. It is not a mistake."}, " ", {t:"All researchers agree with every point of the Core.", flag:true, why:"Researchers have tested the Core with new data and questioned some points."}, " ", {t:"The proposal has the final word on how exams are marked.", flag:true, why:"Exams and companies can ask for one standard, whatever the Core says."}, "”"
    ]},
    {id:"e6u8-l2-x6", type:"number", q:"Look at the phrase *a small plastic snake*. How many of its words begin with a consonant cluster?", answer:3, tol:0, unit:"words", why:"*Small* starts with *sm*, *plastic* starts with *pl* and *snake* starts with *sn*. The word *a* starts with a vowel sound. That makes 3.", wrongs:[{v:4, tol:0, why:"You counted *a* as well. It has no consonant at the start."},{v:2, tol:0, why:"You missed one word. Check *small*, *plastic* and *snake*."}], hint2:"Say each word and listen for two consonant sounds in a row before the vowel."},
    M("e6u8-l2-x7","You will hear a speaker from Wuhan, China. Whatever you hear, which statement is the most careful way to report it?",2,[
      ["This speaker follows the Lingua Franca Core, because the speaker is from China.","A place does not show how a person pronounces anything."],
      ["This speaker does not follow the Core, because I heard a difference.","A difference from a list is not a verdict on a person."],
      ["“I can describe what I hear in the words *spoons*, *snow* and *big*, and say that one speaker is one person.”","Right. It reports the evidence and adds the limit."],
      ["This speaker is easy or hard to understand for everybody.","Understanding depends on the listener too."]
    ], {listen:"e6u8-l2-a3", hint:"The right answer does not depend on what this speaker does. The Core is a proposal about features, and it does not grade people."}),
    {id:"e6u8-l2-x8", type:"explain", q:"A friend says, “Jenkins says that *th* does not matter, so teachers should ignore it.” Explain, kindly, what Jenkins’ proposal says and what it does not say.", size:"4–6 sentences", prompt:"Jenkins’ proposal says that …", hint:"Think about priorities, about the data, and about what teachers and exams may still ask.", points:["Says that th sounds are not in the Core because they seldom stopped understanding in Jenkins’ data","Says that non-core does not mean wrong or never useful","Says that the proposal sets priorities for talk between speakers of other languages","Adds that exams, learners’ wishes or critics’ evidence may still make teachers cover th"], model:"Jenkins proposed that *th* sounds are not in the Lingua Franca Core, because in her data a changed *th* seldom stopped understanding between additional-language speakers. This does not mean that *th* never matters, and it does not mean that teachers must ignore it. The proposal is about priorities, such as keeping clusters at the start of words and nuclear stress. A learner who wants to pass an exam, or who wants a first-language model, can still practice *th*. Other researchers have also questioned parts of the Core, so it is a proposal and not a rule."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Make a feature table for two speakers", how:[
       "Listen to the Incheon and Bangkok recordings twice each.",
       "Make a table with columns for the cluster words (*spoons*, *snow*, *snack*, *snake*, *scoop*), for the main stress in *Please call Stella* and for one feature of your choice.",
       "Write only what you hear, such as “both consonants heard”, “not sure” or “main stress on Stella”. Do not use the words *good*, *bad* or *wrong*."
     ], write:"Speaker 1… speaker 2… Did I avoid judgment words?"},
     {t:"Find the Core in a text", how:[
       "Write a sentence of about ten words from your own life, for example *Please bring three plastic bags to the train station*.",
       "Underline each word that begins with a consonant cluster and each word that has a *th* sound.",
       "Write two sentences. Say which underlined words are in the Core in Jenkins’ proposal, and which are not."
     ], write:"My sentence… clusters… th words… In the Core… not in the Core…"}
    ],
    proof:"A table of notes for two speakers with no judgment words, and a sentence of your own with clusters and *th* words marked and explained."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, sections 3.10 “Syllables”, 3.11 “Stress” and 3.12 “Tone and intonation”", note:"These sections help you to describe clusters, stress and pitch in this lesson."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u8-l3", title:"Accommodation: making talk easier for both sides", minutes:55,
   hook:{q:"You say to a partner who uses English as an additional language, “That’s a piece of cake.” The partner looks confused. What is the best next step?", options:["Say it again, but louder","Say “It is easy,” and go on","Say “You don’t know that idiom?”","Tell your partner to study more idioms"], answer:1, reveal:"**Say “It is easy,” and go on.** You rephrase in plain words, and you do not blame your partner. This is a small act of accommodation: you change your speech so that your listener can follow. Your partner can also help by asking, “What does that mean?” Both sides share the work."},
   goals:[
     "Define convergence, divergence and maintenance, and name the main source (Giles)",
     "Name practical strategies for speakers and for listeners, and use them in a repair",
     "Explain over-accommodation and under-accommodation, and why both can cause trouble",
     "Describe, with hedges, what research says about first-language speakers as partners in ELF talk",
     "Apply the ideas to a shared language other than English"
   ],
   learn:[
    {h:"Adjusting to the listener", body:[
      {lead:"People change their speech for the person in front of them. They do it with children, with friends and with strangers, and they usually do not notice."},
      "Howard Giles and colleagues began to study this in the 1970s. At first they called it speech accommodation theory. Today it is called [[we-cat|communication accommodation theory]], or CAT. Giles, Coupland and Coupland (1991) edited *Contexts of Accommodation*, a book that sets out the theory.",
      "CAT uses a few simple words. **Convergence** means that a speaker makes speech more like the partner’s speech. A speaker may slow down, choose words that both people know, or change the topic. **Divergence** means that a speaker makes speech different from the partner’s. This can show pride in one’s own group, and sometimes it keeps others out. **Maintenance** means that a speaker keeps the same way of speaking.",
      "People converge for several reasons. They want to be understood, they want to show respect, and they want the partner’s approval. People diverge or maintain for other reasons. They may want to keep an identity, or they may not need to adjust at all. None of these choices is wrong in itself.",
      "Accommodation can also go too far or not far enough. **Over-accommodation** happens when a speaker adjusts more than the listener needs. The speaker talks very slowly, very loudly, or with childish words, and the listener feels talked down to. **Under-accommodation** happens when a speaker does not adjust at all, for example with fast talk, slang and local jokes. The good level is the one that the listener, and not the speaker, can follow.",
      {tip:"In ELF talk, every speaker is also a listener. Accommodation is not a one-way favor from the “better” speaker. Both sides adjust, and both sides can ask."}
    ]},
    {h:"Strategies for speakers", body:[
      {lead:"A strategy is something you do on purpose to make understanding easier. These strategies work with any partner, and they do not change what you want to say."},
      {table:[["Strategy","Example","Why it helps"],["Choose clear words","“send” in place of “shoot over”","The listener has fewer words to guess"],["Avoid idioms and phrasal verbs when you can","“It is easy” in place of “It’s a piece of cake”","Idioms have meanings that the words do not show"],["Give the main point first","“The meeting is on Friday. The reason is …”","The listener knows what matters"],["Pause between ideas","A short pause after each point","The listener has time to process"],["Spell or write names, numbers and dates","“That is T-O-M-Á-S.”","Sounds can be hard to catch"],["Ask a question that needs an answer","“What will you do first?”","*Do you understand?* often gets *yes*, even when the answer is *no*"],["Use a second channel","A chat message, a picture or a gesture","Another channel can fill a gap"]]},
      "Notice that none of these strategies asks you to change your accent. You can keep your own way of speaking and still be easy to follow. Slowing down a little helps, but speaking very slowly can become over-accommodation.",
      "Spelling and writing deserve special attention. Names, numbers and times are often the most important words of a message, and the hardest to catch by ear. A short chat message at the same time as the call can protect them."
    ]},
    {h:"Strategies for listeners, and repair", body:[
      {lead:"A listener who does not understand has several good options, and they are all normal. Asking is a skill of a strong listener."},
      "A listener can ask for repetition (“Could you say that again?”), repeat what was heard (“Friday, before six?”), ask for an example (“Can you give me an example?”) or say what was understood (“So I should send it first, and then call you?”). The speaker can then repeat, rephrase, spell or write. This process is called repair.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e6u8m1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="60" y="20" width="200" height="50" rx="8" stroke-width="2"/><text x="160" y="42" text-anchor="middle">1 Say it clearly</text><text class="s" x="160" y="60" text-anchor="middle">short, main point first</text><path class="d-ink" d="M160 70L160 92" stroke-width="2" marker-end="url(#e6u8m1)"/><rect class="d-lup" x="60" y="94" width="200" height="50" rx="8" stroke-width="2"/><text x="160" y="116" text-anchor="middle">2 Check</text><text class="s" x="160" y="134" text-anchor="middle">ask a question or say it back</text><path class="d-ink" d="M160 144L160 166" stroke-width="2" marker-end="url(#e6u8m1)"/><rect class="d-gold" x="60" y="168" width="200" height="50" rx="8" stroke-width="2"/><text x="160" y="190" text-anchor="middle">3 Repair if needed</text><text class="s" x="160" y="208" text-anchor="middle">repeat, rephrase, spell, write</text><path class="d-ink" d="M160 218L160 240" stroke-width="2" marker-end="url(#e6u8m1)"/><rect class="d-softf" x="60" y="242" width="200" height="50" rx="8" stroke-width="2"/><text x="160" y="264" text-anchor="middle">4 Confirm and go on</text><text class="s" x="160" y="282" text-anchor="middle">both sides agree</text><path class="d-ink" d="M260 267L304 267L304 45L264 45" stroke-width="2" fill="none" marker-end="url(#e6u8m1)"/><text class="s" x="170" y="318" text-anchor="middle">Either person can start a repair at any step.</text></svg>', alt:"A loop of four boxes. Say it clearly, check, repair if needed, and confirm and go on. An arrow returns from the last box to the first.", cap:"A repair loop. Either speaker can start it, and it can repeat."},
      {ex:"Tomás: Can you send the report by EOD Friday? Mei: Sorry, EOD? Tomás: End of day. I mean Friday evening, before six. Mei: Friday, before six. I will send it then. Tomás: Great. Please send me a short message when it is done.", label:"Example (invented): a repair"},
      "In the example, Mei asked about one word and did not apologize for it. Tomás rephrased and gave the exact time. Mei then said the time back, so both could check it. Nobody was embarrassed, and the whole repair took four turns.",
      {ex:"Listen to a speaker from Hong Kong (21, female). Cantonese is her first language, and she also speaks Mandarin. She learned English from age three and had not lived abroad when she was recorded. Imagine that you must explain a change of schedule to this speaker in a real conversation. Which strategies from the table would you use? There is no single right answer.", label:"Listen: Hong Kong", listen:"e6u8-l3-a1"}
    ]},
    {h:"Is a first-language speaker always easier to understand?", body:[
      {lead:"Many people think so. The research is more careful than this."},
      "Smith and Rafiqzad (1979) played recordings of speakers of nine kinds of English to listeners in several countries. The speaker of American English, a first-language variety, was far from the easiest to understand. Bent and Bradlow (2003) tested listeners in a laboratory with recorded English sentences. For listeners with English as an additional language, a highly proficient speaker who shared their first language was as easy to understand as a first-language speaker. In some comparisons, this was also true of a speaker with a different first language. The authors called this the interlanguage speech intelligibility benefit. First-language listeners found the first-language speaker easiest.",
      "ELF researchers also report cases in which first-language speakers were hard to follow in international groups. The reasons were speed, idioms, jokes and references that only a local listener knows. Other first-language speakers adjust very well. They speak clearly, avoid idioms and check understanding, and they are among the easiest partners.",
      "These findings do not say that first-language speakers are worse partners. They say that being a first-language speaker does not decide how easy someone is to understand. Care, experience with the listener and willingness to adjust matter a great deal. Findings like these come from particular groups, tasks and listeners, so apply them with care.",
      {warn:"Do not use this section to rank people. A statement such as “native speakers are harder to understand” is as wrong as “native speakers are always the best model”. The facts depend on the person and the situation."}
    ]},
    {h:"The same ideas in any shared language", body:[
      {lead:"Accommodation is not special to English. The same strategies help in any language that two people share but do not both have as a first language."},
      {ex:"Imagine a break at a seafood plant in a harbor town in Japan. Dewi Rahayu is from Indonesia, and she works at the plant. Rodrigo Mondragón is from Mexico. He studies Japanese at a language school and works part-time on the packing line. Neither of them has Japanese as a first language. This scene is imagined. Suppose that Japanese is the language that they share at work, and that Dewi wants Rodrigo to carry the next boxes to the cold room. She says one short sentence, points to the boxes and says the place name slowly. Then she asks Rodrigo, “What will you do?” He says it back in his own words, and she nods.", label:"Example (imagined): a shared language that is not English"},
      "Dewi used five of the strategies in this lesson: a short sentence, the main point first, a gesture, a clear place name and a question that needs an answer. Rodrigo used one of the listener’s strategies by saying the task back. They did not need a first-language speaker of Japanese to be easily understood. This is the core idea of the lesson.",
      "Many people in many countries work with colleagues who are still learning the local language. The same habits help them too."
    ]},
    {h:"The limits of accommodation", body:[
      {ol:[
        "**Accommodation is not hiding.** A speaker can keep an accent, a name and a way of joking, and still adjust for clarity.",
        "**Power matters.** In meetings the person with less power often adjusts more. A fair group shares the work, and a leader can help by asking, “Did everyone follow that?”",
        "**More is not always better.** Over-accommodation can feel like an insult. Ask your partner what helps, and watch how the partner reacts.",
        "**Strategies do not replace practice.** They make a conversation easier, and they do not remove the need to listen with care."
      ]},
      {key:"Accommodation is shared work. Both people adjust, and both people ask. The goal is understanding between them, not a copy of someone else’s English."}
    ]}
   ],
   try:[
    M("e6u8-l3-x1","In communication accommodation theory, what is convergence?",2,[
      ["Keeping the same way of speaking whatever the partner does","This is maintenance."],
      ["Making your speech different from your partner’s, for example to show identity","This is divergence."],
      ["Making your speech more like your partner’s, for example by slowing down or choosing shared words","Right. People converge to be understood, to show respect or to win approval."],
      ["Speaking so slowly that the partner feels talked down to","This is over-accommodation."]
    ]),
    {id:"e6u8-l3-x2", type:"sort", q:"Does each action usually help shared understanding, or usually make it harder?", buckets:["Usually helps","Usually makes it harder"], items:[
      {t:"Rephrasing with simpler words after a puzzled look", b:0, why:"A different wording often helps when the first one failed."},
      {t:"Using an idiom such as *a piece of cake* with a new partner", b:1, why:"The meaning of an idiom is not in its words, so it is easy to miss."},
      {t:"Spelling a name letter by letter", b:0, why:"Names are hard to catch by ear."},
      {t:"Speaking much faster to save time", b:1, why:"Fast speech takes away the listener’s time to process."},
      {t:"Asking the listener, “What will you do first?”", b:0, why:"The answer shows what was understood."},
      {t:"Asking “Do you understand?” and treating “yes” as proof", b:1, why:"Many people say *yes* to be polite, even when they are not sure."},
      {t:"Sending a short chat message with the time and place", b:0, why:"A second channel protects the most important details."}
    ]},
    {id:"e6u8-l3-x3", type:"order", q:"Put these turns of a repair in the most natural order.", items:[
      {t:"“The deadline is EOD Friday.”", why:"The speaker uses a word that the listener may not know."},
      {t:"“Sorry, EOD?”", why:"The listener asks about one word."},
      {t:"“End of day. Friday evening, before six.”", why:"The speaker rephrases and gives the exact time."},
      {t:"“Friday, before six. OK.”", why:"The listener says it back to check."},
      {t:"“Yes, that is right.”", why:"The speaker confirms, and the repair is complete."}
    ]},
    {id:"e6u8-l3-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["*convergence*","Making your speech more like your partner’s","One of the main ideas of CAT."],
      ["*divergence*","Making your speech different from your partner’s","It can show identity, and it sometimes keeps others out."],
      ["*maintenance*","Keeping the same way of speaking","The speaker does not change."],
      ["*over-accommodation*","Adjusting more than the listener needs","The listener may feel talked down to."],
      ["*under-accommodation*","Not adjusting at all when the listener needs it","For example, fast speech full of local slang."]
    ]},
    {id:"e6u8-l3-x5", type:"spot", q:"A student wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Accommodation means that the speaker must hide an accent.", flag:true, why:"Speakers can keep an accent and still adjust for clarity."}, " ", {t:"Both partners in ELF talk can use repair strategies.", flag:false, why:"Correct. Either person can start a repair."}, " ", {t:"Speaking very slowly and loudly is always the best accommodation.", flag:true, why:"This can be over-accommodation, and a listener may feel talked down to."}, " ", {t:"Research proves that first-language speakers are always harder to understand in ELF talk.", flag:true, why:"The research shows that being a first-language speaker does not decide how easy a person is to understand. It does not rank all first-language speakers."}, " ", {t:"Asking “What will you do first?” checks understanding better than “Do you understand?”", flag:false, why:"Correct. The answer shows what the listener understood."}, " ", {t:"A repair needs a first-language speaker to start it.", flag:true, why:"Either speaker can start a repair."}, "”"
    ]},
    {id:"e6u8-l3-x6", type:"number", q:"Amara’s email has three idioms (*touch base*, *ballpark figure*, *hit the ground running*) and two slang words. She rewrites each one in plain words. How many changes does she make?", answer:5, tol:0, unit:"changes", why:"3 idioms + 2 slang words = 5 changes.", wrongs:[{v:3, tol:0, why:"You counted only the idioms. She also rewrites the two slang words."},{v:2, tol:0, why:"You counted only the slang words. She also rewrites the three idioms."}], hint2:"Add the idioms and the slang words."},
    M("e6u8-l3-x7","You will hear a speaker from Incheon, South Korea. A listener says, “I will use over-accommodation with this speaker, to be safe.” What is the best response?",3,[
      ["“Yes. The slower and louder, the better.”","A very slow and loud style can make a listener feel talked down to."],
      ["“The recording shows that this speaker needs it.”","One recording cannot show what a person needs in a real conversation."],
      ["“Nobody needs to adjust in ELF talk.”","Adjusting is a normal and useful part of ELF talk."],
      ["“Adjust only as much as the real listener needs. Start with clear words and a check, and watch how the speaker reacts.”","Right. The right level is the level that the listener finds useful."]
    ], {listen:"e6u8-l3-a2", hint:"The right answer does not depend on what this speaker does."}),
    {id:"e6u8-l3-x8", type:"explain", q:"A friend says, “I will never speak to my partner’s colleagues in English again. They are not native speakers, so they cannot understand idioms and fast talk.” Explain, kindly, what research and the strategies in this lesson suggest.", size:"4–6 sentences", prompt:"A more useful plan is …", hint:"Think about why a person might miss an idiom, about the strategies and about the fact that both sides adjust.", points:["Says that idioms and fast talk are hard for most listeners from other languages, whatever their level","Names two or three strategies, such as plain words, a check or spelling","Says that both partners share the work, and the listener can ask too","Does not judge the colleagues or the friend"], model:"Idioms and very fast talk are hard for many listeners who learned English as an additional language, and the cause is the idiom, not the person. A useful plan is to choose plain words, put the main point first, pause between ideas and check with a question such as “What will you do first?”. Your partner’s colleagues can also ask for a repeat or an example, so both sides share the work. This is the kind of accommodation that ELF research describes. Nobody needs to give up English, and nobody needs to hide an accent."}
   ],
   apply:{
    intro:"These tasks use your own writing and talk. Nothing needs an account.",
    tasks:[
     {t:"Rewrite a message in plain words", how:[
       "Choose a message that you wrote, or could write, in English. It can be an email, a chat message or a note. Choose one of at least five sentences.",
       "Underline every idiom, phrasal verb and slang word. Rewrite each one in plain words. Put the main point first.",
       "Write one sentence that tells your reader what to do, and add one question that checks the answer."
     ], write:"Original… plain version… check question…"},
     {t:"Make a repair card", how:[
       "Write six short phrases that you can use when you need help: two for asking someone to repeat, two for checking what you heard and two for rephrasing.",
       "Write each phrase in English. If you wish, add the same phrase in another language that you use.",
       "Choose the two phrases that you would find easiest to say aloud. Write when you would use each one."
     ], write:"Repeat… check… rephrase… my two favorite phrases… when I would use them…"}
    ],
    proof:"A message rewritten in plain words with a check question, and a card of six repair phrases with two chosen for use."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”", note:"This section shows how speakers use speech to signal who they are and to adjust to others, which is the idea behind accommodation."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u8-l4", title:"English in East and Southeast Asia", minutes:55,
   hook:{q:"ASEAN is a group of countries in Southeast Asia. Which statement about it is accurate?", options:["The ASEAN Charter says that the working language of ASEAN is English.","English is the official language of every ASEAN member state.","ASEAN meetings use Malay as the working language.","ASEAN has no working language."], answer:0, reveal:"**The ASEAN Charter says that the working language of ASEAN is English** (Article 34). A working language is the one that an organization uses for its daily work. It is different from an official language of a country. Each member state decides its own national and official languages."},
   goals:[
     "Describe English in China, South Korea, Hong Kong and Taiwan, with correct dates and hedges where policy has changed",
     "Give the main facts about ASEAN and say what Article 34 of the Charter says",
     "Explain the difference between a working language, a national language and an official language",
     "Explain Kirkpatrick’s (2010) multilingual model of English in ASEAN, with its main ideas and a limit",
     "Describe debates about English in school fairly, without ranking anyone"
   ],
   learn:[
    {h:"Many situations in one region", body:[
      {lead:"East and Southeast Asia have very different histories with English. A single statement about “Asia” would be wrong for most places."},
      "In Kachru’s model, some places in the region are in the [[we-outer-circle|outer circle]]. Unit 5 covered Singapore, the Philippines and Malaysia. Other places are in the [[we-expanding-circle|expanding circle]], where English is a foreign language in school and is used for trade, study, media and travel. Some places, such as Hong Kong, fit between the two, and researchers describe them in more than one way. A circle is a rough guide, not a label for a person.",
      {table:[["Place","A fact that is well documented","A fact to check"],["Hong Kong","Britain received Hong Kong Island in 1842. China took back control on 1 July 1997. The Basic Law lets English be used as an official language beside Chinese.","The Official Languages Ordinance of 1974 gave English and Chinese equal status. Check the text before you quote it."],["China","English is a school subject, and it is part of national exams.","The education ministry asked for English to start in grade 3 of primary school from about 2001. The start varies by place."],["South Korea","English is a school subject, and the language of many private lessons.","Most summaries give 1997 as the year when English became a regular subject from grade 3 of elementary school. Check a current source."],["Taiwan","English is taught in elementary schools, and the starting grade has changed.","In 2018, the government announced a plan to make Taiwan bilingual in Mandarin and English by 2030. Check how the plan has developed."]]},
      "The right-hand column is a reminder that policy changes, and that dates here come from summaries. Use an official source before you quote a policy in your own writing.",
      {ex:"Listen to a speaker from Wuhan, China (25, female). Mandarin is her first language, and she learned English from age thirteen. She had not lived abroad when she was recorded. Notice the words *six*, *spoons* and *three*. There is no single right answer, and one speaker is one person. She is not “the” sound of China.", label:"Listen: Wuhan", listen:"e6u8-l4-a1"},
      {ex:"Listen to a speaker from Hong Kong (21, female). Cantonese is her first language, and she also speaks Mandarin. She learned English from age three and had not lived abroad when she was recorded. Notice the words *thick*, *snack* and *brother*. There is no single right answer.", label:"Listen: Hong Kong", listen:"e6u8-l4-a2"}
    ]},
    {h:"ASEAN and a working language", body:[
      {lead:"ASEAN is a good example of ELF in an organization. Its members speak many languages, and the daily work is done in English."},
      "Five countries founded ASEAN in Bangkok on 8 August 1967: Indonesia, Malaysia, the Philippines, Singapore and Thailand. Brunei, Vietnam, Laos, Myanmar and Cambodia joined later. Timor-Leste joined on 26 October 2025 as the eleventh member. The ASEAN Charter was signed on 20 November 2007 and came into force on 15 December 2008. Article 34 says that the working language of ASEAN is English.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">ASEAN dates in this lesson</text><line class="d-ink" x1="76" y1="40" x2="76" y2="278" stroke-width="2"/><text x="12" y="62">1967</text><circle class="d-sage" cx="76" cy="58" r="7" stroke-width="2"/><text x="96" y="58">ASEAN founded, Bangkok</text><text class="s" x="96" y="75">Five founding members</text><text x="12" y="122">2007</text><circle class="d-gold" cx="76" cy="118" r="7" stroke-width="2"/><text x="96" y="118">Charter signed</text><text class="s" x="96" y="135">20 November</text><text x="12" y="182">2008</text><circle class="d-gold" cx="76" cy="178" r="7" stroke-width="2"/><text x="96" y="178">Charter in force</text><text class="s" x="96" y="195">15 December, Article 34</text><text x="12" y="242">2025</text><circle class="d-rose" cx="76" cy="238" r="7" stroke-width="2"/><text x="96" y="238">Timor-Leste joins</text><text class="s" x="96" y="255">26 October, 11th member</text></svg>', alt:"A timeline. 1967: ASEAN is founded. 2007: the Charter is signed. 2008: the Charter is in force. 2025: Timor-Leste joins as the 11th member.", cap:"Four dates from this lesson, in order."},
      "Three terms are easy to mix up. A **working language** is the language that an organization uses for its daily work, such as meetings and documents. An **official language** is a language that a government uses for laws, courts and public services. A **national language** is a language that a country names as a symbol of its identity. The Charter names a working language for ASEAN. It does not make English an official or national language of any member.",
      "In practice, most people who work in ASEAN meetings use English as an additional language, so much of the talk is ELF talk. The Charter gives a clear rule for the working language. Members keep their own languages for their own work.",
      {ex:"Cheska Ibabao is a master’s student from the Philippines. She studies in Japan, in a course that is taught in English. The Philippines is one of the five founding members of ASEAN, and English is an official language there beside Filipino. A Filipino student, a Thai student and an Indonesian student in her course can use English as the language that they share, in the same way as the staff in an ASEAN meeting.", label:"Example: a member country, a classroom"}
    ]},
    {h:"Kirkpatrick’s multilingual model", body:[
      {lead:"Andy Kirkpatrick studied English in ASEAN for many years. In 2010 he published *English as a Lingua Franca in ASEAN: A Multilingual Model* (Hong Kong University Press)."},
      "Summaries of the book give these main points. First, most English talk in the region is between multilingual speakers. Second, a good goal for learners is to become a competent multilingual speaker who can use English with other additional-language speakers, and not to copy a first-language speaker. Third, a local teacher who is multilingual can be an excellent model, because the teacher has done what the learners want to do. Fourth, learners should keep their own languages and learn about other cultures of the region as well as cultures of English-speaking countries.",
      "Kirkpatrick and colleagues also built a research resource, the Asian Corpus of English (ACE), which holds recordings of spoken English between Asian speakers. Researchers use it to study how people in the region solve problems of understanding.",
      "The model has its critics and its limits. Some ask how schools can add this goal to exams that use first-language norms. Others point out that policy depends on the country, that teachers need training and materials, and that some families want a first-language model. Kirkpatrick’s argument is a proposal for educators to weigh, not a rule for learners.",
      {warn:"Do not read “a multilingual model” as “no first-language speakers”. First-language teachers and models can be useful too. The proposal is that they should not be the only model."}
    ]},
    {h:"What speakers in the region often do", body:[
      {lead:"Researchers have looked for shared features of English among ASEAN speakers. Their findings are tendencies, and they vary by speaker."},
      "Deterding and Kirkpatrick (2006) recorded 20 speakers, two from each of the ten ASEAN countries of that time, in mixed groups. They described shared tendencies. Examples are a more even rhythm, full vowels in weak syllables, a *t* sound for *th*, and leaving out the *t* at the end of a word such as *next*. When pronunciation caused a breakdown, it was usually a feature that speakers from other countries did not share. These are tendencies, and they are not a description of every speaker.",
      "The features link to Lesson 2. Weak forms and *th* sounds are non-core in Jenkins’ proposal. Clusters at the start of words are in the Core, but the Core allows a sound to be left out of a cluster at the end of a word. Deterding (2013) studied misunderstandings in ELF talk in Southeast Asia, and this is a good source if you want to see how researchers test such questions.",
      {ex:"Listen to a speaker from Jakarta, Indonesia (29, female). Indonesian is her first language, and she learned English from age thirteen. She had not lived abroad when she was recorded. Notice the cluster words *spoons*, *snow* and *plastic*. There is no single right answer.", label:"Listen: Jakarta", listen:"e6u8-l4-a3"},
      {ex:"Listen to a speaker from Bangkok, Thailand (18, female). Thai is her first language, and she learned English from age six. She had not lived abroad when she was recorded. Notice the final sounds of *thick*, *snack* and *slabs*. There is no single right answer.", label:"Listen: Bangkok", listen:"e6u8-l4-a4"}
    ]},
    {h:"English in education: a fair description", body:[
      {lead:"In most of the region, governments treat English as an important school subject. People disagree about what this should mean."},
      "Supporters say that English opens study, work and travel, and that early lessons give children time. Others worry about unequal access, because families with more money can pay for private lessons. Some researchers also ask whether the time for English reduces time for the local languages. Where English is the language of teaching at university, students whose home language is different may need extra help with the first-year subjects.",
      "Governments change policies, and the change can be large. A policy on paper is also not the same as a policy in a classroom. The number of trained teachers, the size of classes and the materials all matter.",
      {tip:"When you read about English in education in one country, ask five questions. Who made the policy, and when? Which grades does it cover? What does the law say, and what happens in schools? Who is helped, and who may be left out? What evidence is given?"}
    ]},
    {h:"Putting it together", body:[
      "A speaker from Wuhan, a speaker from Hong Kong, a speaker from Jakarta and a speaker from Bangkok may meet in a meeting in English. They share no first language. They use English because it is the language that they all know. This is the situation that Lessons 1 to 3 describe, and it is the situation of many daily conversations in the region.",
      {key:"English in East and Southeast Asia is not one story. Places differ in history, law and school policy, and ASEAN shows how a group of multilingual countries uses English as a shared working language."}
    ]}
   ],
   try:[
    M("e6u8-l4-x1","What does Article 34 of the ASEAN Charter say?",1,[
      ["English is the official language of every ASEAN member state.","The Charter does not make English the official language of any member."],
      ["The working language of ASEAN is English.","Right. It is the language that the organization uses for its daily work."],
      ["Each member must teach English in primary schools.","The article is about the working language of ASEAN, not school policy."],
      ["ASEAN has no working language.","The Charter names one."]
    ]),
    {id:"e6u8-l4-x2", type:"sort", q:"Which does each fact belong to?", buckets:["ASEAN","Hong Kong"], items:[
      {t:"The Charter was signed on 20 November 2007", b:0, why:"This is a date in the history of ASEAN."},
      {t:"Control returned to China on 1 July 1997", b:1, why:"This is a date in the history of Hong Kong."},
      {t:"Founded on 8 August 1967 in Bangkok", b:0, why:"This is the founding of ASEAN."},
      {t:"Britain received Hong Kong Island in 1842", b:1, why:"This is the start of the colonial period in Hong Kong."},
      {t:"English is named as the working language", b:0, why:"Article 34 of the ASEAN Charter says this."},
      {t:"The Basic Law lets English be used as an official language beside Chinese", b:1, why:"The Basic Law is the law of Hong Kong."}
    ]},
    {id:"e6u8-l4-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Britain receives Hong Kong Island (1842)", why:"This is the earliest date in the list."},
      {t:"ASEAN is founded in Bangkok (1967)", why:"This came 125 years after 1842."},
      {t:"Control of Hong Kong returns to China (1997)", why:"This came 30 years after ASEAN’s founding."},
      {t:"The ASEAN Charter is signed (2007)", why:"This came ten years after 1997."},
      {t:"The ASEAN Charter comes into force (2008)", why:"This came about a year after the signing."},
      {t:"Timor-Leste joins ASEAN (2025)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u8-l4-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["*working language*","The language an organization uses for its daily work","ASEAN’s working language is English."],
      ["*official language*","A language that a government uses for laws, courts and public services","A country can have more than one."],
      ["*national language*","A language that a country names as a symbol of its identity","It can be different from the official languages."],
      ["*multilingual model*","Kirkpatrick’s proposal that learners aim to be competent multilingual speakers","It was published in 2010."],
      ["*ACE*","The Asian Corpus of English, recordings of spoken English between Asian speakers","Researchers search it for patterns."]
    ]},
    {id:"e6u8-l4-x5", type:"spot", q:"A student wrote these notes after Lesson 4. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Article 34 makes English the national language of every ASEAN member.", flag:true, why:"The article names a working language for ASEAN. National languages are decided by each country."}, " ", {t:"The ASEAN Charter came into force on 15 December 2008.", flag:false, why:"Correct. It was signed on 20 November 2007."}, " ", {t:"English in Asia has one history, and it is the same in every place.", flag:true, why:"Places differ in history, law and school policy."}, " ", {t:"Kirkpatrick proposed that learners should aim to be competent multilingual speakers.", flag:false, why:"Correct. This is the central idea of his multilingual model."}, " ", {t:"A school policy on paper shows what happens in every classroom.", flag:true, why:"Teachers, books and training decide what happens."}, " ", {t:"Timor-Leste joined ASEAN on 26 October 2025.", flag:false, why:"Correct. It became the eleventh member."}, "”"
    ]},
    {id:"e6u8-l4-x6", type:"number", q:"ASEAN was founded in 1967. Timor-Leste joined in 2025. How many years is that?", answer:58, tol:0, unit:"years", why:"2025 − 1967 = 58.", wrongs:[{v:48, tol:0, why:"You subtracted 10 too many. Check: 1967 + 58 = 2025."},{v:68, tol:0, why:"You added 10 by mistake. Check: 1967 + 58 = 2025."}], hint2:"Subtract 1967 from 2025."},
    M("e6u8-l4-x7","You will hear a speaker from Bangkok, Thailand. A student says, “Thailand’s English sounds like this speaker.” What is the best response?",2,[
      ["“Yes. A recording shows how a country speaks.”","One recording shows one person on one day."],
      ["“No. A Thai speaker has no real English.”","The speaker is a user of English, and her English is not less real."],
      ["“One speaker is one person. I can describe what I hear in the words, and I can compare it with what researchers report.”","Right. It reports evidence and adds the limit."],
      ["“The archive says that she speaks in Thai.”","She reads an English paragraph, so the recording cannot show Thai."]
    ], {listen:"e6u8-l4-a4", hint:"The right answer does not depend on what this speaker does."}),
    {id:"e6u8-l4-x8", type:"explain", q:"A friend says, “Article 34 means that English is the official language of Asia.” Explain, kindly, what Article 34 says and what it does not say.", size:"4–6 sentences", prompt:"Article 34 says that …", hint:"Think about working, official and national languages. ASEAN is one organization, not a country.", points:["Says that Article 34 names English as the working language of ASEAN","Says that a working language differs from an official or national language","Says that each member state decides its own languages and that Asia is not one country","Mentions that ASEAN has 11 members, so the talk is mostly between speakers with other first languages"], model:"Article 34 of the ASEAN Charter says that the working language of ASEAN is English. A working language is the language that an organization uses for its daily work. It does not make English an official or national language of any country, because each member state decides its own languages. ASEAN is one organization of 11 member states, and Asia is not one country. Most people in ASEAN meetings use English as an additional language, so the working language is also a clear example of ELF."}
   ],
   apply:{
    intro:"These tasks use free official websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read Article 34 in the Charter", how:[
       "Search the web for “ASEAN Charter text” and open the page on the ASEAN website (asean.org).",
       "Find Article 34. Copy its title and its sentence into your notes.",
       "Write two sentences. Say what the article gives to English, and what it does not give to English."
     ], write:"Title… sentence… What it gives… what it does not give…"},
     {t:"Compare two education policies", how:[
       "Choose two places from this lesson, or two places that you know. Search for the website of each government’s education ministry.",
       "Find one fact about English in school for each place: the grade where it starts, the hours, or the role in exams. Write the date of the page.",
       "Write three neutral sentences. Say how the two places are alike, how they differ, and what you could not find."
     ], write:"Place A… place B… alike… different… what I could not find…"}
    ],
    proof:"The wording of Article 34, with two sentences about it. Three neutral sentences that compare two education policies."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"This section shows how place and speech are linked, which helps you to read the differences between the places in this lesson."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u8-l5", title:"English in Japan, and Japanese users of English", minutes:60,
   hook:{q:"In Japanese, ノートパソコン (*nōto pasokon*) means a laptop computer. What is the best way to describe this word?", options:["A Japanese word that is made from English parts and has its own meaning","A mistake in English","A word that every English speaker knows","A wrong word, because *note* means paper"], answer:0, reveal:"**A Japanese word made from English parts.** Words of this kind are called *wasei-eigo*, or English-looking words made in Japan. They are normal words of Japanese, just as *tsunami* is a normal word of English. They are not mistakes in English. A problem appears only when a speaker uses one with a listener who does not know it, and then a plain English word or a short explanation solves it."},
   goals:[
     "Give a short, accurate history of English in Japan, and describe English in schools today, with hedges where needed",
     "Explain gairaigo, katakana English and wasei-eigo, and say why they are Japanese words",
     "Describe, as tendencies and without ranking, what many Japanese users of English find takes time, and why",
     "Explain the debate about “Japanese English”, and what being understood means",
     "Use a listening lab to compare ten speakers without ranking anyone"
   ],
   learn:[
    {h:"A short history of English in Japan", body:[
      {lead:"Japan was never a colony of Britain or the United States. English came through trade, study and contact, and it grew in importance over time."},
      "In the 1700s and early 1800s, Japanese scholars studied Western science through contacts with Dutch traders. After US ships arrived in 1853, contact with English speakers grew. The Meiji period began in 1868. Schools and universities then gave more attention to English, because it was a language of trade and of new knowledge. After the Second World War, English became the main foreign language in secondary schools, and it is part of the entrance exams of many schools and universities.",
      "School policy is set in a national document called the Course of Study (学習指導要領, *gakushū shidō yōryō*). The education ministry revises it about every ten years. The revision announced in 2017 started in elementary schools in 2020. Since then, English is a formal subject in grades 5 and 6, and foreign language activities start in grade 3. Foreign language activities were first required in grades 5 and 6 in 2011.",
      "People in Japan debate teacher training, class size, speaking tests and the role of English in entrance exams. This lesson does not take a side.",
      {tip:"Before you quote a date from this section, check it on the education ministry’s site."}
    ]},
    {h:"Katakana English and wasei-eigo", body:[
      {lead:"Japanese has taken thousands of words from other languages, most often English. A word taken from another language is called a [[we-gairaigo|gairaigo]]."},
      "Gairaigo are usually written in katakana. Katakana English is the name that some people use for these words. Some are close to the English word in sound and meaning, such as ホテル (*hoteru*, hotel). Some changed their meaning in Japanese, and some were made in Japan from English parts. The last group is called [[we-wasei-eigo|wasei-eigo]], or English-looking words made in Japan.",
      {table:[["Japanese word","Meaning in Japanese","What English speakers often say"],["ノートパソコン (*nōto pasokon*)","A laptop computer","*laptop*"],["コンセント (*konsento*)","A wall outlet for electricity","*outlet* (US), *socket*"],["ガソリンスタンド (*gasorin sutando*)","A gas station","*gas station* (US), *petrol station* (UK)"],["サイン (*sain*)","A signature or an autograph","*signature*, *autograph*"],["クレーム (*kurēmu*)","A complaint to a company","*complaint*"],["マンション (*manshon*)","An apartment building","*apartment building*, *condo*. In English, a *mansion* is a very large house."]]},
      "These words are not mistakes. They are regular words of Japanese, like *tsunami* and *karaoke* in English. Every language changes the meanings of some words that it takes from others.",
      "In an English conversation, the question is practical: does my listener know the word? If not, the speaker says *outlet* in place of *konsento*, or explains it (Lesson 3). Katakana is also a strength. Many katakana words are close to English words, so Japanese users of English already know thousands of English words in another sound shape.",
      {warn:"Do not call a gairaigo or a wasei-eigo “wrong English”. A word belongs to the language that uses it. The word is correct in Japanese, and in English you choose the word that your listener can follow."}
    ]},
    {h:"Sounds and rhythm: what often takes time, and why", body:[
      {lead:"Every language shapes the way that its speakers hear and say a new language. Researchers describe tendencies, and the tendencies are not faults."},
      "Japanese counts time in beats called [[hew-mora|morae]]. Most morae are a consonant and a vowel, or a single vowel. English words can have many consonants together, as in *strike*. A Japanese speaker who says *strike* may add vowels, so the word has five beats. You can see this in the katakana ストライク (*sutoraiku*), where each kana is one beat.",
      {fig:'<svg viewBox="0 0 340 230"><text x="170" y="20" text-anchor="middle">One English syllable, five Japanese beats</text><rect class="d-gold" x="22" y="36" width="296" height="48" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">strike</text><text class="s" x="170" y="76" text-anchor="middle">one syllable in English</text><rect class="d-sage" x="22" y="112" width="52" height="48" rx="8" stroke-width="2"/><text x="48" y="142" text-anchor="middle">ス</text><rect class="d-sage" x="82" y="112" width="52" height="48" rx="8" stroke-width="2"/><text x="108" y="142" text-anchor="middle">ト</text><rect class="d-sage" x="142" y="112" width="52" height="48" rx="8" stroke-width="2"/><text x="168" y="142" text-anchor="middle">ラ</text><rect class="d-sage" x="202" y="112" width="52" height="48" rx="8" stroke-width="2"/><text x="228" y="142" text-anchor="middle">イ</text><rect class="d-sage" x="262" y="112" width="52" height="48" rx="8" stroke-width="2"/><text x="288" y="142" text-anchor="middle">ク</text><text class="s" x="48" y="182" text-anchor="middle">su</text><text class="s" x="108" y="182" text-anchor="middle">to</text><text class="s" x="168" y="182" text-anchor="middle">ra</text><text class="s" x="228" y="182" text-anchor="middle">i</text><text class="s" x="288" y="182" text-anchor="middle">ku</text><text class="s" x="170" y="216" text-anchor="middle">Japanese counts beats (morae): ストライク has five.</text></svg>', alt:"A gold box labeled strike with the note one syllable in English. Below it, five green boxes with the katakana ス, ト, ラ, イ and ク and the readings su, to, ra, i and ku. A note says that Japanese counts beats called morae, and that ストライク has five.", cap:"In Japanese, ストライク is five beats (morae). In English, *strike* has one syllable."},
      "The table lists tendencies that researchers report for many Japanese users of English, with the reason in Japanese sound patterns. Each user is different, and experience and practice matter too.",
      {table:[["Tendency often described","Why, in Japanese sound patterns","Where to read more"],["A short vowel is added between or after consonants","Most Japanese syllables are a consonant and a vowel","How English Works, Unit 3: {{stress-timing-and-rhythm|rhythm}}"],["*l* and *r* may be heard as one sound","Japanese has one *r*-like sound","How English Works, Unit 2: {{minimal-pairs-practice|minimal pairs}}"],["Vowels such as the ones in *cap* and *cup* may be heard as one","Japanese has five vowels","How English Works, Unit 2: {{english-vowels|English vowels}}"],["Beats of similar length across a phrase","Japanese rhythm is built on morae","How English Works, Unit 3: [[mora-timing|mora timing]]"]]},
      "Compare this table with the Lingua Franca Core in Lesson 2. In Jenkins’ proposal, *l* and *r* and clusters at the start of words are in the Core, and an added vowel between consonants is allowed. Japanese has long and short vowels, so the length contrast in the Core is a familiar idea. Context also helps: in “Please turn on the light”, a listener rarely hears *right*. Every first language has tendencies of its own. Many Spanish speakers, for example, add a vowel before *s* and a consonant, as in *school*."
    ]},
    {h:"Is there a “Japanese English”?", body:[
      {lead:"Researchers disagree. The disagreement is about names and about norms, and it does not criticize speakers."},
      "In Kachru’s model, Japan is in the expanding circle. He called it norm-dependent, because learners have mostly looked to norms from outside, such as American or British English. Some scholars, for example Honna (2008), have argued that Japanese English can be described as a variety. They say that it has its own features and its own users. Others reply that it has no written standard and no community that sets norms. They prefer to speak of Japanese users of English. Seargeant (2009), in *The Idea of English in Japan*, studied the ideas about English that circulate in Japan.",
      "For a learner, the choice is practical. You can keep a Japanese accent, and you can also practice other sounds if you wish. Both choices are fine.",
      {ex:"Listen to a speaker from Osaka, Japan (45, male). Japanese is his first language. He learned English at school from age twelve and had not lived abroad when he was recorded. Notice which words you find easy to hear. There is no single right answer, and one speaker is one person.", label:"Listen: Osaka", listen:"e6u8-l5-a1"}
    ]},
    {h:"Being understood, with confidence", body:[
      {lead:"In ELF talk, the goal is to understand and to be understood. A first-language accent is not the goal."},
      "Mariya Seto is from Shiojima, a small island in Japan. She studies English because she wants to become an interpreter. She uses English with care, but speaking it makes her nervous. Suppose she prepares for a short talk with a visitor from another country. A useful plan has four parts. She chooses the main point first. She writes two or three short sentences. She keeps a card with a repair phrase, such as “Could you say that again, please?”. She also decides that a pause is allowed.",
      "A plan like this does not remove nerves, but it gives a speaker something to do. It also treats the listener as a partner. If the visitor does not understand, Mariya can rephrase, as Lesson 3 shows, and she does not need to apologize. If Mariya does not understand, she can ask, and the question is a sign of attention.",
      {key:"A Japanese user of English is a multilingual speaker. Katakana English and wasei-eigo are Japanese words. Success means understanding and being understood, in the way that suits the people in the conversation."}
    ]},
    {h:"Listening lab: ten speakers, no ranking", body:[
      {lead:"In this lab you listen to speakers from Japan, South Korea, China, Hong Kong, Vietnam, Indonesia, Thailand and Mexico. They are people, and not countries."},
      "All of them use English as an additional language. When they were recorded, eight had not lived in an English-speaking country, and two had spent two months or two years in the US. The paragraph is read aloud, so a recording shows pronunciation only. It cannot show grammar, vocabulary or the strategies of a real conversation.",
      "Use the plan from earlier lessons. Listen first for the message. Listen again for one or two features, and write only what you hear. Listen a third time to compare two speakers.",
      {table:[["Feature","Listen to these words"],["Clusters at the start of a word","spoons, snow, scoop, plastic, snake, train"],["The *r* after a vowel","store, her, brother"],["Short and long vowels","big, thick and peas, cheese"],["*Th* sounds","thick, three, these, brother"],["The main stress of a phrase","Please call Stella"]]},
      {ex:"Speaker 1 is from Osaka, Japan (45, male). Japanese is his first language, and he learned English at school from age twelve. He had not lived abroad. Notice the clusters in *spoons* and *snow*.", label:"Speaker 1: Osaka", listen:"e6u8-l5-a2"},
      {ex:"Speaker 2 is from Tokyo, Japan (21, female). Japanese is her first language, and she learned English from age twelve. She had spent two months in the US. Notice the *r* in *store* and *her*.", label:"Speaker 2: Tokyo", listen:"e6u8-l5-a3"},
      {ex:"Speaker 3 is from Tokyo, Japan (25, female). Japanese is her first language, and she learned English at school from age twelve. The archive says that she had spent two years in the US. Notice the vowels in *big* and *peas*.", label:"Speaker 3: Tokyo, 2", listen:"e6u8-l5-a4"},
      {ex:"Speaker 4 is from Incheon, South Korea (19, female). Korean is her first language, and she learned English from age eight. She had not lived abroad. Notice the clusters in *scoop* and *snake*.", label:"Speaker 4: Incheon", listen:"e6u8-l5-a5"},
      {ex:"Speaker 5 is from Wuhan, China (25, female). Mandarin is her first language, and she learned English from age thirteen. She had not lived abroad. Notice the *th* in *thick* and *three*.", label:"Speaker 5: Wuhan", listen:"e6u8-l5-a6"},
      {ex:"Speaker 6 is from Hong Kong (21, female). Cantonese is her first language, and she also speaks Mandarin. She learned English from age three and had not lived abroad. Notice the final sounds of *thick* and *snack*.", label:"Speaker 6: Hong Kong", listen:"e6u8-l5-a7"},
      {ex:"Speaker 7 is from Hanoi, Vietnam (23, male). Vietnamese is his first language, and he learned English from age six. He had not lived abroad. Notice the final sounds of *slabs* and *snack*.", label:"Speaker 7: Hanoi", listen:"e6u8-l5-a8"},
      {ex:"Speaker 8 is from Jakarta, Indonesia (29, female). Indonesian is her first language, and she learned English from age thirteen. She had not lived abroad. Notice the *r* in *store* and *her*.", label:"Speaker 8: Jakarta", listen:"e6u8-l5-a9"},
      {ex:"Speaker 9 is from Bangkok, Thailand (18, female). Thai is her first language, and she learned English from age six. She had not lived abroad. Notice the main stress in *Please call Stella*.", label:"Speaker 9: Bangkok", listen:"e6u8-l5-a10"},
      {ex:"Speaker 10 is from Monterrey, Mexico (23, male). Spanish is his first language, and he also speaks German, French and Italian. He learned English from age seven and had not lived abroad. Notice the *s* clusters in *spoons* and *snow*.", label:"Speaker 10: Monterrey", listen:"e6u8-l5-a11"},
      "After the third listening, write one sentence per speaker that begins “I heard …”. Then write one sentence that begins “One speaker cannot show …”.",
      {ol:["**One clip shows how a country speaks.** It does not. A recording shows one person on one day, reading a text.","**A difference is a fault.** It is not. A different sound is a different sound.","**A first language predicts everything.** It does not. Experience, practice and the listener matter too."]}
    ]}
   ],
   try:[
    M("e6u8-l5-x1","What is *wasei-eigo*?",0,[
      ["English-looking words made in Japan, which are regular words of Japanese","Right. They are Japanese words and not mistakes in English."],
      ["Words that Japanese learners get wrong in English","They are not errors. They are words of Japanese."],
      ["A special school subject for English","It names a kind of word, not a subject."],
      ["English words that are taken from Japanese, such as *tsunami*","Those are Japanese words in English. Wasei-eigo are English-looking words in Japanese."]
    ]),
    {id:"e6u8-l5-x2", type:"sort", q:"Sort each word by how its meaning in Japanese compares with the English word that it comes from.", buckets:["Close to the English meaning","Its own meaning, or made in Japan"], items:[
      {t:"ホテル (*hoteru*): a hotel", b:0, why:"The meaning is close to *hotel*."},
      {t:"コンセント (*konsento*): a wall outlet", b:1, why:"It has its own meaning in Japanese."},
      {t:"レストラン (*resutoran*): a restaurant", b:0, why:"The meaning is close to *restaurant*."},
      {t:"マンション (*manshon*): an apartment building", b:1, why:"In English a *mansion* is a very large house."},
      {t:"クレーム (*kurēmu*): a complaint to a company", b:1, why:"It has its own meaning in Japanese."},
      {t:"ガソリンスタンド (*gasorin sutando*): a gas station", b:1, why:"It was made in Japan from English parts."}
    ]},
    {id:"e6u8-l5-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"US ships arrive in Japan (1853)", why:"This is the earliest date in the list."},
      {t:"The Meiji period begins (1868)", why:"This came 15 years after 1853."},
      {t:"Foreign language activities start in elementary grades 5 and 6 (2011)", why:"This is the first of the two school changes."},
      {t:"English becomes a formal subject in elementary grades 5 and 6 (2020)", why:"This came nine years after 2011."}
    ]},
    {id:"e6u8-l5-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["*gairaigo*","A Japanese word taken from another language","For example マンション."],
      ["*wasei-eigo*","English-looking words made in Japan","For example ノートパソコン."],
      ["*mora*","A beat of Japanese rhythm, often one kana","ストライク has five."],
      ["*Course of Study*","The national document that sets school policy in Japan","It is revised about every ten years."],
      ["*expanding circle*","In Kachru’s model, places where English is a foreign language, such as Japan","It has no colonial history of English."]
    ]},
    {id:"e6u8-l5-x5", type:"spot", q:"A student wrote these notes after Lesson 5. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Wasei-eigo words are mistakes that Japanese people make in English.", flag:true, why:"They are normal Japanese words, and they are not mistakes in English."}, " ", {t:"Japan was a colony of Britain.", flag:true, why:"Japan was never a colony of Britain or the United States."}, " ", {t:"Since 2020, English is a formal subject in grades 5 and 6 of elementary school.", flag:false, why:"Correct. Foreign language activities start in grade 3."}, " ", {t:"Japanese speakers have the same pronunciation, because they share a first language.", flag:true, why:"Each speaker is different, and experience and practice matter."}, " ", {t:"Many katakana words are close to English words, so many Japanese users already know a lot of English words.", flag:false, why:"Correct. The sound shape is different, but the words are a resource."}, " ", {t:"A listener can say who is a good speaker from one recording.", flag:true, why:"A recording cannot rank a speaker, and this course does not rank anyone."}, "”"
    ]},
    {id:"e6u8-l5-x6", type:"number", q:"How many morae (beats) does ノートパソコン (*nōto pasokon*) have? Count each kana as one beat, and count the long-vowel mark ー as one beat.", answer:7, tol:0, unit:"morae", why:"The beats are ノ・ー・ト・パ・ソ・コ・ン, which is seven.", wrongs:[{v:6, tol:0, why:"You did not count the long-vowel mark ー. It is one beat."},{v:5, tol:0, why:"You counted English syllables in *notebook computer*. Count Japanese beats instead."}], hint2:"Write each symbol on its own, and count them."},
    M("e6u8-l5-x7","You will hear a speaker from Osaka, Japan. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["This speaker shows how all Japanese speakers pronounce English.","One speaker is one person."],
      ["“I can describe what I hear in the words of the paragraph, and say that one speaker is one person and that I cannot rank the speaker.”","Right. It reports evidence, gives the limit and does not rank."],
      ["This speaker makes errors, because the speaker did not live abroad.","Living abroad is not needed to use English well, and a difference is not an error."],
      ["This speaker speaks Japanese in the recording.","The speaker reads an English paragraph, so the recording cannot show Japanese."]
    ], {listen:"e6u8-l5-a12", hint:"The right answer does not depend on what this speaker does."}),
    {id:"e6u8-l5-x8", type:"explain", q:"A classmate says, “マンション is a mistake. Japanese people do not know what *mansion* means in English.” Explain, kindly, what is going on.", size:"4–6 sentences", prompt:"マンション is …", hint:"Think about gairaigo, about meaning in Japanese and about what a speaker can do in an English conversation.", points:["Says that マンション is a regular word of Japanese that comes from English","Says that it has its own meaning in Japanese, an apartment building, so it is not a mistake","Says that in an English conversation the speaker can choose a word such as apartment building or condo","Does not blame Japanese speakers"], model:"マンション is a regular word of Japanese. It comes from the English word *mansion*, and in Japanese it means an apartment building. It is a gairaigo, and it has its own meaning, so it is not a mistake. Many languages take words from English and change their meaning. When a speaker talks to someone who does not know the Japanese word, the speaker can say *apartment building* or *condo*. This is the same step that any speaker takes with a word from their own language."}
   ],
   apply:{
    intro:"These tasks use your own notes and the recordings in this lesson. Nothing needs an account.",
    tasks:[
     {t:"Make a table of gairaigo", how:[
       "Write down six words from your own life that are written in katakana, such as the name of a food, a device or a sport.",
       "For each word, write its meaning in Japanese and the English word that your listener will know. Mark each word that has its own meaning in Japanese.",
       "Write two sentences. Say what you would do if you used one of these words with a listener who did not know it."
     ], write:"Word 1… meaning… English word… Two sentences…"},
     {t:"Make a listening table for ten speakers", how:[
       "Make a table with ten rows, one for each speaker in the lab. Add three columns: clusters at the start of words, the *r* after a vowel, and one feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “both consonants heard”, “r not heard” or “not sure”.",
       "Write three sentences. Say what you heard most often, what was hard to hear, and why one speaker is one person."
     ], write:"My table… three sentences with one speaker is one person…"}
    ],
    proof:"Six katakana words with English equivalents and two sentences. A table for ten speakers with careful notes and three sentences."
   },
   read:[
    {book:"eling", where:"Chapter 12, Adult Language Learning, sections 12.6 “Learning Phonetics and Phonotactics in a Later Language” and 12.7 “Learning Phonemes and Allophones in a Later Language”", note:"These sections explain why a first language shapes the way that adults hear and say a new language, which is the idea behind this lesson."}
   ]
  }
  ],
  checkpoint:["e6u8-q03","e6u8-q08","e6u8-q12","e6u8-q17","e6u8-q21","e6u8-q26","e6u8-q30","e6u8-q35","e6u8-q39","e6u8-q42","e6u8-q44","e6u8-q45"],
  cpBank:[
   Q("e6u8-cp01","e6u8-l1",1,"What does ELF stand for?",0,[
     ["English as a lingua franca","Right. A lingua franca is a shared language between people with different first languages."],
     ["English for literature and fiction","This is not what the term means."],
     ["Easy language form","ELF is not a simple form of English."],
     ["European language framework","ELF is not tied to one continent."]]),
   Q("e6u8-cp02","e6u8-l1",3,"Kenji hears Lucía use a word that he does not know. He says nothing and waits, and the next sentence makes the meaning clear. Which habit is this?",2,[
     ["Make it normal","This habit treats an unusual form as ordinary."],
     ["Over-accommodation","Over-accommodation means adjusting more than the listener needs."],
     ["Let it pass","Right. Firth (1996) described this habit of waiting for the meaning."],
     ["Divergence","Divergence means making your speech different from your partner’s."]]),
   Q("e6u8-cp03","e6u8-l2",1,"Which of these features is in the Lingua Franca Core, in Jenkins’ (2000) proposal?",3,[
     ["The *th* sounds","These are described as non-core."],
     ["Weak forms of *to* and *for*","These are described as non-core."],
     ["Pitch movement that shows attitude","This is described as non-core."],
     ["Consonant clusters at the start of words","Right. A missing sound at the start of a word changes the word."]]),
   Q("e6u8-cp04","e6u8-l2",2,"Which words in the paragraph are good for listening to clusters at the start of a word?",1,[
     ["*store*, *her* and *brother*","*Her* has no cluster at the start. These are mainly words for the *r* after a vowel."],
     ["*spoons*, *snow* and *scoop*","Right. Each word begins with two consonants before the vowel."],
     ["*big* and *peas*","These are words for vowel length."],
     ["*thick* and *three*","*Thick* has no cluster at the start. These are mainly words for the *th* sounds."]]),
   Q("e6u8-cp05","e6u8-l2",3,"Ana says, “Jenkins proved that accent does not matter.” What is wrong?",2,[
     ["Nothing is wrong.","Jenkins made a proposal about priorities, and she did not say this."],
     ["Jenkins never studied pronunciation.","She studied pronunciation between additional-language speakers."],
     ["The proposal is about which features help understanding most, and other researchers have questioned parts of it.","Right. It is a proposal and not a proof."],
     ["Jenkins said that all accents must be copied from first-language speakers.","This is the opposite of her argument."]]),
   Q("e6u8-cp06","e6u8-l3",2,"Which question checks a partner’s understanding best?",0,[
     ["“What will you do first?”","Right. The answer shows what the partner understood."],
     ["“Do you understand?”","Many people say *yes* to be polite."],
     ["“Is it clear?”","This invites a short *yes*."],
     ["“Are you listening?”","This does not check meaning."]]),
   Q("e6u8-cp07","e6u8-l3",3,"A speaker talks very slowly and loudly to Mei, who studies in her second language. Mei feels talked down to. Which term fits?",3,[
     ["Convergence","Convergence is a helpful move toward the partner’s speech."],
     ["Maintenance","Maintenance means keeping the same way of speaking."],
     ["Under-accommodation","This means not adjusting at all."],
     ["Over-accommodation","Right. The speaker adjusted more than Mei needed."]]),
   Q("e6u8-cp08","e6u8-l4",1,"When did the ASEAN Charter come into force?",2,[
     ["8 August 1967","This is the date on which ASEAN was founded."],
     ["20 November 2007","This is the date on which the Charter was signed."],
     ["15 December 2008","Right. It came into force a year after it was signed."],
     ["26 October 2025","This is the date on which Timor-Leste joined."]]),
   Q("e6u8-cp09","e6u8-l4",3,"Dmitri says, “Article 34 makes English the national language of Thailand.” What is wrong?",1,[
     ["Nothing is wrong.","The article names a working language of ASEAN, not a national language."],
     ["Article 34 names the working language of ASEAN, and each country decides its own national language.","Right. The two decisions are separate."],
     ["Thailand is not a member of ASEAN.","Thailand is one of the five founding members."],
     ["English is the working language only in Singapore.","The article is about ASEAN as a whole."]]),
   Q("e6u8-cp10","e6u8-l5",1,"Which description of a gairaigo is correct?",1,[
     ["A mistake that learners make in English","Gairaigo are regular words of Japanese."],
     ["A Japanese word that was taken from another language","Right. Most gairaigo come from English."],
     ["A school exam in English","It names a kind of word."],
     ["A kind of katakana letter","Katakana is a writing system. Gairaigo are words."]]),
   Q("e6u8-cp11","e6u8-l5",2,"In the katakana word ストライク (*sutoraiku*), how many beats (morae) are there?",3,[
     ["One","This is the number of English syllables."],
     ["Three","Count each kana separately."],
     ["Four","The word has one more kana."],
     ["Five","Right. The beats are su, to, ra, i and ku."]]),
   Q("e6u8-cp12","e6u8-l5",3,"Hana writes, “The speaker who lived two months in the US is better than the speaker who never lived abroad.” What is wrong?",2,[
     ["Nothing is wrong.","A recording cannot rank a speaker, and the course does not rank anyone."],
     ["Two months is too long to compare.","The length of time is not the problem."],
     ["A recording of one reading cannot show who is better, and ranking people is not the goal. Understanding each other is.","Right. Describe what you hear and add the limit."],
     ["Nobody can live abroad.","This is not true."]])
  ],
  codex:[
   {id:"we-elf-research", title:"ELF research: Firth, Jenkins, Seidlhofer and VOICE", aka:["English as a lingua franca","ELF","VOICE corpus"], tags:["world englishes","ELF","research"],
    summary:"ELF research studies English between people with different first languages. It looks at what speakers do to understand each other, and it does not treat their English as a weaker copy of first-language English.",
    levels:{
     starter:[
      "A lingua franca is a language that people with different first languages use to talk to each other. When the language is English, researchers write ELF, for English as a lingua franca. Many conversations in English today have no first-language speaker in them, so ELF is a large field of use. Nobody has counted every conversation, and estimates vary.",
      "ELF researchers record real conversations and study them. They ask how speakers understand each other. They have found that speakers help each other. A listener may let a small problem pass and wait for the meaning. Speakers may treat an unusual form as ordinary and go on. Speakers also repeat, rephrase and check.",
      "ELF is not a simple or broken English. Speakers at all levels take part, and first-language speakers can join a mixed group.",
      {key:"ELF is a situation of use. The people in it are multilingual speakers who succeed in being understood."}
     ],
     builder:[
      "Four sources are the usual starting points. Alan Firth (1996) used conversation analysis on recorded work talk between managers who were not first-language speakers of English. His paper appeared in the *Journal of Pragmatics*, 26(2), pages 237–259, and it described habits such as *let it pass* and *make it normal*. Jennifer Jenkins (2000) studied pronunciation between additional-language speakers and proposed the Lingua Franca Core. Her 2007 book studies attitudes and identity. Barbara Seidlhofer (2011) wrote *Understanding English as a Lingua Franca*, and she led the team that built the VOICE corpus.",
      "VOICE, the Vienna-Oxford International Corpus of English, holds about one million words (1,023,043, according to the project’s description) of transcribed spoken ELF. It was recorded between 2001 and 2007 and released in 2009. Other corpora include ELFA, which studies academic ELF, and the Asian Corpus of English (ACE).",
      "Seidlhofer (2004) listed patterns that came up often in early VOICE data, such as dropping the *-s* of third person verbs, using *who* and *which* in the same way, one all-purpose tag question and different uses of articles. Researchers report that these patterns usually did not stop understanding.",
      "Mauranen (2006) studied how ELF speakers signal and prevent misunderstanding. She found that speakers use several strategies, including repeating and rephrasing, to prevent trouble before it starts."
     ],
     pro:[
      "ELF research has changed its framing. Early work looked for forms that ELF speakers share, and it sometimes spoke of an ELF variety. Seidlhofer (2011) describes ELF as a flexible resource that speakers shape as they talk, and later work by Jenkins moves toward a multilingual frame, in which ELF speakers use English as one resource among their languages. Critics ask whether the term *variety* fits, whether ELF research gives learners what exams ask for, and how much the forms in a corpus depend on the speakers who were recorded.",
      "A corpus has limits. The speakers in VOICE and in other corpora are not a random sample of all ELF users, and a form that is frequent in a corpus is not a rule for every speaker. For this reason, ELF researchers describe tendencies and strategies, and they avoid listing a complete grammar.",
      "For teaching, the research suggests that learners benefit from practice with strategies, such as checking and rephrasing, and from listening to many kinds of English. It does not remove the need to prepare learners for exams that use first-language norms, and teachers decide how to balance the two."
     ]},
    related:["we-lingua-franca-core-features","we-accommodation-theory","we-english-lingua-franca"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”"}],
    sources:[{t:"Vienna-Oxford International Corpus of English (VOICE), Corpus Resource Database", url:"https://varieng.helsinki.fi/CoRD/corpora/VOICE/index.html"},{t:"EMCA wiki: Firth (1996), citation and abstract", url:"https://emcawiki.net/Firth1996"},{t:"Crystal (2008), “Two thousand million?”, English Today", url:"https://core-cms.cambridgecore.org/core/services/aop-cambridge-core/content/view/68BFD87E5C867F7C3C47FD0749C7D417/S0266078408000023a.pdf/two-thousand-million.pdf"}], checked:"2026-11"},

   {id:"we-lingua-franca-core-features", title:"The Lingua Franca Core in detail", aka:["LFC","Jenkins’ core","core and non-core features"], tags:["world englishes","ELF","pronunciation"],
    summary:"Jenkins’ (2000) proposal lists the features of pronunciation that she found most important for understanding between additional-language speakers. It is a proposal about priorities, with a body of later criticism.",
    levels:{
     starter:[
      "Jennifer Jenkins recorded additional-language speakers who talked to each other in English. She noted where understanding broke down. In her data, many problems came from a small group of features. She called this group the Lingua Franca Core.",
      "The Core includes most consonant sounds, a small puff of air after *p*, *t* and *k* at the start of a stressed syllable, consonant clusters at the start of words, the difference between long and short vowels, nuclear stress, which is the main stress of a phrase, and a pronounced *r* after a vowel. The *th* sounds, weak forms and the exact quality of most vowels are not in the Core.",
      "The Core is a proposal for teachers. It does not tell a person to give up an accent. It does not rank speakers.",
      {key:"The Core is a hypothesis about which features matter most for understanding between additional-language speakers. Use it to think about priorities."}
     ],
     builder:[
      "The proposal appeared in *The Phonology of English as an International Language: New Models, New Norms, New Goals* (Oxford University Press, 2000). The table gives a simplified summary with examples from the *Please call Stella* paragraph. Sources differ in some details, so check the book before you quote a point.",
      {table:[["In the Core","Example","Not in the Core"],["Most consonants","*bring*, *blue*","The *th* sounds, dark *l*"],["A puff of air after *p*, *t*, *k*","*please*, *call*","Weak forms such as *to*"],["Clusters at the start of a word","*spoons*, *snow*","Exact quality of most vowels"],["Long and short vowels","*big*, *peas*","Pitch movement for attitude"],["Nuclear stress","*Please call STELLA*","Word stress and rhythm (debated)"],["Pronounced *r* after a vowel (debated)","*store*, *her*","Some features of connected speech"]]},
      "Why *th* is non-core: in her data, a changed *th* seldom stopped understanding. Listeners can often work out *think* from context. Many first-language varieties also change *th*, and they are not hard to understand.",
      "Why clusters are in the Core: a missing sound at the start of a word changes the word. *Snow* without the *s* sounds like *no*."
     ],
     pro:[
      "The proposal has drawn criticism and testing. Critics note that it began from a limited set of recorded breakdowns. Deterding (2013) studied misunderstandings in ELF talk in Southeast Asia. In his summaries, mixing *l* and *r* and simplifying initial clusters caused trouble, while a *t* for *th* seldom did, which supports parts of the Core. Researchers also debate word stress, rhythm and the proposed pronounced *r* after a vowel, which does not fit varieties in which *r* is not pronounced.",
      "The proposal is also easy to misread. *Non-core* means that a feature seldom caused breakdown in the data, and not that it is wrong or never useful. Jenkins has said that learners should be free to choose a model, and the Core is a set of priorities for those who mainly use English with other additional-language speakers.",
      "A second point concerns the listener. Intelligibility depends on both sides. A listener who knows the speaker’s first language, who knows the topic or who is not tired needs fewer cues. This is why the Core is a proposal about priorities and not a predictor for any one conversation."
     ]},
    related:["we-elf-research","we-english-lingua-franca","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 3, Phonetics, section 3.11 “Stress”"}],
    sources:[{t:"Jenkins (2000), The Phonology of English as an International Language, University of Southampton repository record", url:"https://eprints.soton.ac.uk/65985"},{t:"Lingua Franca Core, summary of the proposal and criticism", url:"https://en.wikipedia.org/wiki/Lingua_Franca_Core"}], checked:"2026-11"},

   {id:"we-accommodation-theory", title:"Communication accommodation theory and practical strategies", aka:["CAT","speech accommodation","convergence and divergence"], tags:["world englishes","communication","ELF"],
    summary:"Communication accommodation theory describes how speakers adjust their speech to each other. In ELF talk, adjusting for the listener and checking understanding are shared work.",
    levels:{
     starter:[
      "People change how they speak for the person in front of them. They speak more slowly to a child, and they use different words with a stranger. Communication accommodation theory (CAT) describes this. In convergence, speakers become more like each other. In divergence, a speaker makes speech different, for example to show identity. In maintenance, a speaker does not change.",
      "In ELF talk, accommodation is part of how people understand each other. A speaker can choose clear words, put the main point first and spell names. A listener can ask for repetition and say back what was heard.",
      "Accommodation can be too much. Over-accommodation, such as speaking very slowly and loudly, can make a listener feel talked down to.",
      {key:"Accommodation is shared work. Both people adjust, and both people can ask."}
     ],
     builder:[
      "Howard Giles and colleagues began this research in the 1970s under the name speech accommodation theory. Giles, Coupland and Coupland (1991) edited *Contexts of Accommodation: Developments in Applied Sociolinguistics* (Cambridge University Press).",
      "Motives for convergence include being understood, showing respect and winning approval. Motives for divergence include showing group identity. Under-accommodation means not adjusting when the listener needs it, and over-accommodation means adjusting more than the listener needs.",
      "Practical strategies for speakers include choosing clear words, avoiding idioms and phrasal verbs when possible, giving the main point first, pausing between ideas, spelling or writing names, numbers and dates, asking a question that needs an answer, and using a second channel such as chat or a picture. Strategies for listeners include asking for repetition, repeating what was heard, asking for an example and saying what was understood.",
      "Researchers also look at first-language speakers as partners. Smith and Rafiqzad (1979) found that a speaker of American English was far from the easiest to understand for listeners in several countries. Bent and Bradlow (2003) described an interlanguage speech intelligibility benefit. In their laboratory test, listeners with English as an additional language understood a highly proficient speaker who shared their first language as well as a first-language speaker."
     ],
     pro:[
      "CAT has been extended to many settings, for example work, health care and online talk, and it now covers more than speech. The extension is called communication accommodation theory because gesture, text and other behavior also adjust. Researchers also separate *subjective* accommodation, which is what a person thinks they do, from *objective* accommodation, which is what a researcher can measure, and the two do not always match.",
      "Power matters. In many settings, the person with less power adjusts more, and a group that wants fair talk can plan for shared work, for example by asking whether everyone followed.",
      "Findings about first-language and additional-language speakers come from particular groups, tasks and listeners. They do not support a general statement that any group is easier or harder to understand. They show that the label does not decide the result, and that care and experience matter."
     ]},
    related:["we-elf-research","we-lingua-franca-core-features","we-intelligibility-respect"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.4 “Language conveys more than semantic meaning”"}],
    sources:[{t:"Giles, Coupland and Coupland (eds.), Contexts of Accommodation (Cambridge University Press, 1991)", url:"https://www.cambridge.org/core/product/identifier/9780511663673/type/book"}], checked:"2026-11"},

   {id:"we-english-east-southeast-asia", title:"English in East and Southeast Asia, and ASEAN", aka:["ASEAN","ELF in ASEAN","Kirkpatrick’s multilingual model"], tags:["world englishes","asia","ASEAN"],
    summary:"English has different histories in China, South Korea, Hong Kong, Taiwan and Southeast Asia. ASEAN names English as its working language, and Kirkpatrick (2010) proposes a multilingual model for teaching it.",
    levels:{
     starter:[
      "The region has many different situations. Hong Kong was a British colony from 1842 to 1997, and English and Chinese are both used in law and government. In China, South Korea and Taiwan, English is a school subject and a language of study, trade and travel. In Southeast Asia, English is an official language in some places, such as Singapore and the Philippines, and a foreign language in others, such as Thailand and Vietnam.",
      "ASEAN, the Association of Southeast Asian Nations, was founded in Bangkok on 8 August 1967. Its Charter was signed on 20 November 2007 and came into force on 15 December 2008. Article 34 of the Charter says that the working language of ASEAN is English. A working language is not the same as an official language of a country.",
      {key:"Article 34 gives English a job in an organization. It does not make English the national language of any member."}
     ],
     builder:[
      "ASEAN has 11 members. The five founders were Indonesia, Malaysia, the Philippines, Singapore and Thailand. Brunei, Vietnam, Laos, Myanmar and Cambodia joined later, and Timor-Leste joined on 26 October 2025. Most people who use English in ASEAN meetings use it as an additional language, so much of the talk is ELF talk.",
      "Andy Kirkpatrick (2010) published *English as a Lingua Franca in ASEAN: A Multilingual Model* (Hong Kong University Press). He argues that the goal for learners should be to become competent multilingual speakers who can use English with other additional-language speakers, and that local multilingual teachers can be excellent models. He and colleagues also built the Asian Corpus of English (ACE).",
      "Deterding and Kirkpatrick (2006) described features that they heard in the English of speakers from several ASEAN countries. They are tendencies, and they vary by speaker.",
      "Policies about English in school differ by place and change over time. In Hong Kong, the Basic Law lets English be used as an official language beside Chinese. Summaries report that China asked for English from grade 3 from about 2001, that South Korea began English in grade 3 in 1997, and that Taiwan announced a bilingual plan for 2030 in 2018. Check an official source before you quote one."
     ],
     pro:[
      "ASEAN’s language rule shows a pattern. A multilingual group needs a shared working language, and a choice of English for this purpose is practical. The rule concerns the organization, and members keep their own national and official languages. The rule also has social effects. A person who is more at ease in English can take a larger part in meetings, and this is a matter of power as well as language.",
      "Kirkpatrick’s argument is also a proposal about teaching. Critics ask how it can fit exams that use first-language norms, how teachers can be trained and how families’ wishes can be respected. His proposal does not ban first-language models.",
      "Dates and policies need care. This entry gives the dates of ASEAN from the ASEAN Charter and from summaries, and it gives school policies as reported. Article 34 of the Charter says that the working language of ASEAN is English.",
      "Researchers who study the region also point out that many speakers use other languages in the same conversation, and that English is only one part of a multilingual repertoire."
     ]},
    related:["we-elf-research","we-singapore-english","we-philippine-english"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"ASEAN Secretariat: The ASEAN Charter", url:"https://asean.org/book/the-asean-charter-1st-reprint/"},{t:"Kirkpatrick (2010), English as a Lingua Franca in ASEAN: A Multilingual Model, NUS Press", url:"https://nuspress.nus.edu.sg/collections/language-literature/products/english-as-a-lingua-franca-in-asean"}], checked:"2026-11"},

   {id:"we-english-in-japan", title:"English in Japan, katakana English and wasei-eigo", aka:["gairaigo","wasei-eigo","Japanese users of English"], tags:["world englishes","japan","loanwords"],
    summary:"English has been important in Japan since the 1800s, and it is a school subject today. Katakana English and wasei-eigo are Japanese words, and they are not mistakes in English.",
    levels:{
     starter:[
      "Japan was never a colony of Britain or the United States. English came through trade, study and contact. After US ships arrived in 1853 and the Meiji period began in 1868, English became more important in schools and trade. Since 2020, English has been a formal subject in grades 5 and 6 of elementary school, and foreign language activities start in grade 3.",
      "Japanese has taken thousands of words from English, and they are written in katakana. A word taken from another language is called a gairaigo. A wasei-eigo word is an English-looking word made in Japan, such as ノートパソコン (*nōto pasokon*, a laptop). These are regular words of Japanese. They are not mistakes in English.",
      {key:"A word belongs to the language that uses it. In an English conversation, choose the word that your listener can follow."}
     ],
     builder:[
      "School policy is set in the Course of Study (学習指導要領, *gakushū shidō yōryō*), which the education ministry revises about every ten years. The revision announced in 2017 began in elementary schools in 2020. Foreign language activities were first required in grades 5 and 6 in 2011. The US International Trade Administration summarizes the 2020 changes, and the education ministry’s own pages give the official text.",
      "Some Japanese words from English have their own meanings. マンション (*manshon*) means an apartment building, and コンセント (*konsento*) means a wall outlet. In English, a *mansion* is a very large house. These differences are normal in loanwords. English *pizza* does not mean exactly what *pizza* means in Italian.",
      "Researchers describe tendencies in the English of many Japanese users that link to Japanese sound patterns. Japanese counts beats called morae, and most syllables are a consonant and a vowel, so a short vowel may be added between consonants. Japanese has one *r*-like sound, so *l* and *r* may be heard as one. Japanese has five vowels. These are tendencies of first-language influence, and every first language has them."
     ],
     pro:[
      "Scholars disagree about whether there is a Japanese English. Some, for example Honna (2008), have argued that it can be described as a variety. Others say that it has no written standard and no community that sets norms, so it is better to describe Japanese users of English. Kachru places Japan in the expanding circle. Seargeant (2009) studied the ideas about English that circulate in Japan.",
      "In terms of the Lingua Franca Core, Japanese users have strengths. Japanese has a length contrast in vowels, and katakana gives many users a large store of English words. The Core includes consonant contrasts such as *l* and *r* and clusters at the start of words, so these are the points that research on ELF suggests for priority. Context often helps listeners with *l* and *r*.",
      "Education policy is debated in the usual ways: teacher training, class size, speaking assessment and the place of English in entrance exams. Dates here come from summaries and from the sources below, so check the education ministry’s own pages before you quote one.",
      "A fair description does not rank. Japanese users of English are a varied group, and success in ELF talk means understanding and being understood."
     ]},
    related:["we-english-today","we-lingua-franca-core-features"],
    read:[{book:"eling", where:"Chapter 12, Adult Language Learning, section 12.6 “Learning Phonetics and Phonotactics in a Later Language”"}],
    sources:[{t:"US International Trade Administration: Japan education reform updates", url:"https://www.trade.gov/market-intelligence/japan-education-reform-updates"},{t:"Nippon.com: Chronic Reforms and the Crisis in English Education (2018)", url:"https://www.nippon.com/en/currents/d00412/chronic-reforms-and-the-crisis-in-english-education.html"}], checked:"2026-11"}
  ],
  terms:[
   {id:"we-voice", term:"VOICE corpus", def:"The Vienna-Oxford International Corpus of English: about one million words of transcribed spoken English between speakers with different first languages. It was released in 2009.", codex:"we-elf-research"},
   {id:"we-let-it-pass", term:"Let it pass", def:"A habit that Firth (1996) described in ELF talk. A listener does not stop the talk for an unclear word, and waits for the meaning to become clear.", codex:"we-elf-research"},
   {id:"we-make-it-normal", term:"Make it normal", def:"A habit that Firth (1996) described in ELF talk. Speakers treat an unusual form as ordinary and do not correct it.", codex:"we-elf-research"},
   {id:"we-initial-cluster", term:"Initial consonant cluster", def:"Two or more consonants at the start of a word before the vowel, such as *sp* in *spoons* and *str* in *strike*. Jenkins (2000) put them in the Lingua Franca Core.", codex:"we-lingua-franca-core-features"},
   {id:"we-nuclear-stress", term:"Nuclear stress", def:"The main stress of a phrase, on the word or syllable that carries the news. In *Please call STELLA*, it is on *Stella*. It is in the Lingua Franca Core.", codex:"we-lingua-franca-core-features"},
   {id:"we-aspiration", term:"Aspiration", def:"A small puff of air after *p*, *t* or *k* at the start of a stressed syllable, as in *please* and *call*. Jenkins (2000) put it in the Lingua Franca Core.", codex:"we-lingua-franca-core-features"},
   {id:"we-cat", term:"Communication accommodation theory (CAT)", def:"A theory, developed by Giles and colleagues from the 1970s, about how speakers adjust their speech to each other, for example by converging or diverging.", codex:"we-accommodation-theory"},
   {id:"we-convergence", term:"Convergence", def:"Making your speech more like your partner’s, for example by slowing down or choosing shared words.", codex:"we-accommodation-theory"},
   {id:"we-divergence", term:"Divergence", def:"Making your speech different from your partner’s, for example to show identity. It can also keep others out.", codex:"we-accommodation-theory"},
   {id:"we-over-accommodation", term:"Over-accommodation", def:"Adjusting more than the listener needs, for example by speaking very slowly and loudly. The listener may feel talked down to.", codex:"we-accommodation-theory"},
   {id:"we-repair", term:"Repair", def:"The steps that speakers take to fix a problem of understanding, such as repeating, rephrasing, spelling or writing. Either speaker can start a repair.", codex:"we-accommodation-theory"},
   {id:"we-working-language", term:"Working language", def:"The language that an organization uses for its daily work, such as meetings and documents. It is different from the official or national language of a country.", codex:"we-english-east-southeast-asia"},
   {id:"we-asean", term:"ASEAN", def:"The Association of Southeast Asian Nations, founded in Bangkok on 8 August 1967. It has 11 members. Timor-Leste joined on 26 October 2025.", codex:"we-english-east-southeast-asia"},
   {id:"we-asean-charter", term:"ASEAN Charter", def:"The founding legal document of ASEAN, signed on 20 November 2007 and in force on 15 December 2008. Article 34 names English as the working language.", codex:"we-english-east-southeast-asia"},
   {id:"we-multilingual-model", term:"Multilingual model (Kirkpatrick)", def:"Kirkpatrick’s (2010) proposal that learners in ASEAN should aim to be competent multilingual speakers, and that local multilingual teachers can be good models.", codex:"we-english-east-southeast-asia"},
   {id:"we-ace-corpus", term:"Asian Corpus of English (ACE)", def:"A corpus of spoken English between Asian speakers, built by a team that includes Kirkpatrick. Researchers use it to study ELF in Asia.", codex:"we-english-east-southeast-asia"},
   {id:"we-wasei-eigo", term:"Wasei-eigo", def:"English-looking words made in Japan, such as ノートパソコン (*nōto pasokon*, a laptop). They are regular words of Japanese and not mistakes in English.", codex:"we-english-in-japan"},
   {id:"we-course-of-study", term:"Course of Study (学習指導要領)", def:"The national document in Japan that sets what each school subject teaches. The education ministry revises it about every ten years.", codex:"we-english-in-japan"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u8-q01","e6u8-l1",1,"What is a lingua franca?",1,[
     ["A language that only first-language speakers may use","A lingua franca is shared by people with different first languages."],
     ["A language that people with different first languages use to talk to each other","Right. English is one such language today."],
     ["A simplified language for beginners","It can be used at any level."],
     ["A language with no written form","Many lingua francas are written."]]),
   Q("e6u8-q02","e6u8-l1",1,"Which conversation is ELF talk?",2,[
     ["Two engineers from Germany talk in German","They share a first language and do not use English."],
     ["Two friends from Ohio talk in English","English is their first language, so it is not a lingua franca between them."],
     ["A teacher from Poland and a teacher from Italy chat in English at a conference","Right. They share no first language, and English connects them."],
     ["A student in Japan reads an English article alone","ELF means talk between people."]]),
   Q("e6u8-q03","e6u8-l1",2,"Why do estimates of the number of English users vary?",0,[
     ["The word *speaker* can mean someone who knows a few phrases or someone who works in English every day","Right. Different definitions give different numbers."],
     ["Researchers do not use any data","Estimates use data, but definitions differ."],
     ["English changes its number of users every hour","The cause is the definition, not an hourly change."],
     ["Only first-language users can be counted","Estimates include additional-language users."]]),
   Q("e6u8-q04","e6u8-l1",1,"Who described the habits *let it pass* and *make it normal* in ELF talk?",3,[
     ["Kachru, in 1985","Kachru is known for the three circles."],
     ["Jenkins, in 2000","Jenkins proposed the Lingua Franca Core."],
     ["Giles, in 1991","Giles and colleagues studied accommodation."],
     ["Firth, in 1996","Right. His paper appeared in the *Journal of Pragmatics*."]]),
   Q("e6u8-q05","e6u8-l1",2,"Hana hears a word she does not know. She says nothing, and the next sentence makes the meaning clear. Which habit is this?",1,[
     ["Make it normal","This habit treats an unusual form as ordinary."],
     ["Let it pass","Right. The listener waits for the meaning to become clear."],
     ["Divergence","Divergence means making your speech different."],
     ["Over-accommodation","This means adjusting more than the listener needs."]]),
   Q("e6u8-q06","e6u8-l1",3,"In a meeting, Sione says, “She go to the office on Monday.” Nobody comments, and the meeting continues. What is the best description?",2,[
     ["The meeting failed, because the sentence had an error","The talk went on and everybody understood."],
     ["A first-language speaker should have corrected the sentence","Correcting is not a rule of ELF talk."],
     ["The group treated an unusual form as normal, and researchers report that such patterns usually do not stop understanding","Right. This is the habit *make it normal*."],
     ["Sione is not a user of English","Sione uses English every day in a meeting."]]),
   Q("e6u8-q07","e6u8-l1",1,"What is VOICE?",0,[
     ["A corpus of about one million words of spoken ELF","Right. It was released in 2009."],
     ["A pronunciation test","VOICE is a collection of recordings and transcripts."],
     ["A list of exam questions","It is a research resource."],
     ["A school subject in Austria","It is a corpus, not a subject."]]),
   Q("e6u8-q08","e6u8-l1",3,"A classmate says, “ELF is a variety with its own dictionary.” What is the best reply?",1,[
     ["“Yes. Every ELF speaker uses the same words.”","ELF speakers differ, and they use many resources."],
     ["“Seidlhofer (2011) describes ELF as a flexible resource that speakers shape as they talk, not a fixed code.”","Right. Researchers disagree, and this is one view."],
     ["“No. ELF is only a mistake.”","ELF is a normal way to use English."],
     ["“ELF is a language only for first-language speakers.”","ELF is for people with different first languages, and first-language speakers can join."]]),
   Q("e6u8-q09","e6u8-l1",2,"Which statement about first-language speakers and ELF is correct?",3,[
     ["First-language speakers cannot take part in ELF talk","They can take part in mixed groups."],
     ["First-language speakers decide who is understood","Understanding is shared work."],
     ["First-language speakers are always the easiest partners","The research does not say this."],
     ["First-language speakers can take part, and they adjust too","Right. A mixed group has no first language that everyone shares."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u8-q10","e6u8-l2",1,"Who proposed the Lingua Franca Core, and in which year?",2,[
     ["Kachru, 1985","Kachru proposed the three circles."],
     ["Seidlhofer, 2011","Seidlhofer wrote *Understanding English as a Lingua Franca*."],
     ["Jenkins, 2000","Right. The proposal is in *The Phonology of English as an International Language*."],
     ["Firth, 1996","Firth described habits such as *let it pass*."]]),
   Q("e6u8-q11","e6u8-l2",1,"Which of these is in the Core, in Jenkins’ (2000) proposal?",1,[
     ["The *th* sounds","These are described as non-core."],
     ["Nuclear stress, the main stress of a phrase","Right. It shows the important word of the phrase."],
     ["Weak forms","These are described as non-core."],
     ["Dark *l*","This is described as non-core."]]),
   Q("e6u8-q12","e6u8-l2",2,"Why did Jenkins treat the *th* sounds as non-core?",0,[
     ["In her data, a changed *th* seldom stopped people from understanding each other","Right. Listeners often work out the word from context."],
     ["Nobody uses *th*","Many speakers use *th*."],
     ["*Th* is wrong in every variety","Many varieties have *th*."],
     ["A first-language speaker must always correct it","The proposal does not ask for correction."]]),
   Q("e6u8-q13","e6u8-l2",2,"Which words of the paragraph begin with a consonant cluster?",3,[
     ["*store*, *her* and *brother*","*Her* has no cluster at the start, so the set is wrong. These are mainly words for the *r* after a vowel."],
     ["*big* and *peas*","These are words for vowel length."],
     ["*thick* and *three*","*Three* has a cluster, but *thick* does not, so the set is wrong."],
     ["*spoons*, *snow*, *scoop* and *plastic*","Right. Each begins with two consonants before the vowel."]]),
   Q("e6u8-q14","e6u8-l2",2,"What does nuclear stress do in *Please call STELLA*?",1,[
     ["It makes the phrase longer","Stress is about prominence, not length of the phrase."],
     ["It marks *Stella* as the word that carries the news","Right. The speaker puts the strongest stress on it."],
     ["It changes *Stella* into another name","The word stays the same."],
     ["It shows the speaker’s country","Stress does not show a country."]]),
   Q("e6u8-q15","e6u8-l2",3,"Oluwaseun says *think* with an *s* at the start in a meeting. A colleague asks whether this is a mistake. What is the best reply in terms of Jenkins’ proposal?",0,[
     ["In her data such changes seldom stopped understanding, so it is a variation. Context usually helps, and the speaker can still choose to practice *th*.","Right. This is a careful reading of the proposal."],
     ["Yes. It is always a serious mistake.","The proposal does not say this."],
     ["No. Nobody should ever practice *th*.","The proposal does not forbid practice."],
     ["It proves that Oluwaseun is a weak speaker.","One sound does not show a speaker’s ability."]]),
   Q("e6u8-q16","e6u8-l2",3,"Which statement about the Lingua Franca Core is the most accurate?",2,[
     ["It is a law that all learners must follow","It is a proposal."],
     ["It is a proof that accents do not matter","It is a proposal about priorities for understanding."],
     ["It is a proposal about priorities, and other researchers have questioned parts of it","Right. Researchers have tested it with new data."],
     ["It lists every feature of English pronunciation","It is a short list of priorities."]]),
   Q("e6u8-q17","e6u8-l2",2,"Which features of Jenkins’ proposal does Lesson 2 describe as debated?",3,[
     ["Clusters at the start of a word","The lesson does not describe these as debated."],
     ["The puff of air after *p*, *t* and *k*","This is in the Core."],
     ["Long and short vowels","These are in the Core."],
     ["Word stress and the pronounced *r* after a vowel","Right. Researchers discuss both."]]),
   Q("e6u8-q18","e6u8-l2",3,"Ana listens to a recording and writes, “This speaker does not follow the Core, so the speaker is hard to understand.” What is wrong?",1,[
     ["Nothing is wrong","The Core is a proposal about features, not a grade for people."],
     ["A recording of one reading cannot show that a person is hard to understand, and understanding depends on the listener too","Right. A careful claim describes what you hear and adds the limit."],
     ["The Core has no features","It has a short list of features."],
     ["Only first-language speakers can judge","Understanding depends on any listener, and this course does not judge."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u8-q19","e6u8-l3",1,"Who began the research on accommodation, and when?",2,[
     ["Jenkins, in 2000","Jenkins proposed the Lingua Franca Core."],
     ["Firth, in 1996","Firth described habits of ELF talk."],
     ["Giles and colleagues, from the 1970s","Right. They called it speech accommodation theory at first."],
     ["Seidlhofer, in 2011","Seidlhofer wrote about ELF."]]),
   Q("e6u8-q20","e6u8-l3",1,"What is divergence in communication accommodation theory?",0,[
     ["Making your speech different from your partner’s, for example to show identity","Right. It can also keep others out."],
     ["Making your speech more like your partner’s","This is convergence."],
     ["Keeping the same way of speaking","This is maintenance."],
     ["Speaking so slowly that the partner feels talked down to","This is over-accommodation."]]),
   Q("e6u8-q21","e6u8-l3",2,"Which question checks understanding best?",3,[
     ["“Do you understand?”","Many people say *yes* to be polite."],
     ["“Is that clear?”","This also invites a short *yes*."],
     ["“Are you listening?”","This does not check meaning."],
     ["“What will you do first?”","Right. The answer shows what the listener understood."]]),
   Q("e6u8-q22","e6u8-l3",2,"Which choice is an example of over-accommodation?",1,[
     ["Choosing plain words","This is a helpful strategy."],
     ["Speaking very slowly and loudly to an adult who understands well","Right. The listener may feel talked down to."],
     ["Spelling a name","This helps with names."],
     ["Asking the listener to say it back","This is a check."]]),
   Q("e6u8-q23","e6u8-l3",3,"Kenji says to Lucía, “Let’s touch base after lunch.” Lucía looks puzzled. What is the best repair?",2,[
     ["Say it again, louder","Volume does not change the meaning."],
     ["Say, “You do not know this idiom?”","This blames the listener."],
     ["Say, “Let’s talk after lunch,” and ask, “Is two o’clock good?”","Right. Plain words and a check close the repair."],
     ["Say nothing and leave","Silence leaves the plan unclear."]]),
   Q("e6u8-q24","e6u8-l3",3,"A speaker uses fast talk, slang and local jokes with a visitor who learned English at school. The visitor misses most of it. Which term fits?",3,[
     ["Convergence","Convergence means moving toward the partner’s speech."],
     ["Over-accommodation","This means adjusting too much."],
     ["Maintenance with no problem","Keeping the same style can be fine when the listener follows, but here the listener did not."],
     ["Under-accommodation","Right. The speaker did not adjust to what the listener needed."]]),
   Q("e6u8-q25","e6u8-l3",2,"What do Smith and Rafiqzad (1979) and Bent and Bradlow (2003) suggest?",0,[
     ["Being a first-language speaker does not decide how easy a person is to understand","Right. Care, experience and the listener also matter."],
     ["First-language speakers are always the hardest to understand","The research does not say this."],
     ["First-language speakers are always the easiest to understand","The research does not say this."],
     ["Listeners do not need to hear a speaker before they understand","Experience with a speaker helps."]]),
   Q("e6u8-q26","e6u8-l3",3,"Priya and Dmitri both work in a country where neither of them has the local language as a first language. They talk in the local language. Which statement is right?",1,[
     ["Accommodation strategies work only in English","The same strategies help in any shared language."],
     ["Short sentences, a gesture and a check question can help them in the local language too","Right. The lesson’s ideas apply to any shared language."],
     ["They need a first-language speaker to join every talk","They can understand each other without one."],
     ["They must not ask questions","Questions are normal and useful."]]),
   Q("e6u8-q27","e6u8-l3",3,"Why is “Do you understand?” a weak check?",2,[
     ["Because it is rude in every language","It is not rude in every language."],
     ["Because it has no verb","It has a verb."],
     ["Because many people say *yes* even when they are not sure, so the answer does not show understanding","Right. A question that needs an answer is better."],
     ["Because first-language speakers never answer it","They can answer it."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u8-q28","e6u8-l4",1,"When was ASEAN founded?",1,[
     ["20 November 2007","This is the date on which the Charter was signed."],
     ["8 August 1967","Right. The founding took place in Bangkok."],
     ["15 December 2008","This is the date on which the Charter came into force."],
     ["26 October 2025","This is the date on which Timor-Leste joined."]]),
   Q("e6u8-q29","e6u8-l4",1,"Which article of the ASEAN Charter names the working language?",3,[
     ["Article 4","The Charter names the working language in Article 34."],
     ["Article 14","The Charter names the working language in Article 34."],
     ["Article 24","The Charter names the working language in Article 34."],
     ["Article 34","Right. It says that the working language of ASEAN is English."]]),
   Q("e6u8-q30","e6u8-l4",2,"What is the difference between a working language and an official language?",0,[
     ["A working language is what an organization uses for daily work. An official language is what a government uses for laws, courts and public services.","Right. The two terms name different jobs."],
     ["They are the same thing","They name different jobs."],
     ["A working language is always a first language","It can be anyone’s additional language."],
     ["An official language is used only in schools","It is used in laws, courts and public services."]]),
   Q("e6u8-q31","e6u8-l4",1,"Which country joined ASEAN on 26 October 2025?",2,[
     ["Brunei","Brunei joined in 1984."],
     ["Cambodia","Cambodia joined in 1999."],
     ["Timor-Leste","Right. It became the eleventh member."],
     ["Vietnam","Vietnam joined in 1995."]]),
   Q("e6u8-q32","e6u8-l4",2,"Which statement about Hong Kong is correct?",1,[
     ["Britain received it in 1997","1997 is the year in which control returned to China."],
     ["Britain received Hong Kong Island in 1842, and control returned to China on 1 July 1997","Right. The Basic Law lets English be used as an official language beside Chinese."],
     ["It was never a British colony","It was a British colony."],
     ["English is the only official language","Chinese and English are both used."]]),
   Q("e6u8-q33","e6u8-l4",2,"What is the main idea of Kirkpatrick’s (2010) multilingual model?",2,[
     ["Learners should copy a first-language accent","The model proposes a different goal."],
     ["Learners should stop using their own languages","The model asks learners to keep them."],
     ["Learners should aim to be skilled multilingual speakers of English","Right. Local multilingual teachers can be good models."],
     ["English should not be taught in Asia","The model is about how to teach it."]]),
   Q("e6u8-q34","e6u8-l4",3,"Mei reads that a country will start English in grade 1 next year. What should she check before she judges the policy?",3,[
     ["Nothing, because an announcement is the same as a classroom","A policy on paper is not the same as a policy in a classroom."],
     ["Only the name of the minister","The name does not show how the policy works."],
     ["Whether all children are in the capital","This does not show how the policy works."],
     ["Whether there are trained teachers, books and time for the new lessons","Right. These decide what happens in school."]]),
   Q("e6u8-q35","e6u8-l4",3,"A student says, “English in Asia is all the same.” What is the best reply?",0,[
     ["Places differ in history, law and school policy. Hong Kong, Singapore, Japan and Thailand have different situations.","Right. A single statement about Asia would be wrong for most places."],
     ["Yes. Asia has one history of English.","Places have different histories."],
     ["No. English is not used in Asia.","English is used in many ways in Asia."],
     ["Only Hong Kong uses English.","English is used in many places."]]),
   Q("e6u8-q36","e6u8-l4",3,"A delegate from Thailand and a delegate from Vietnam discuss a plan in English at an ASEAN meeting. How is the talk best described?",1,[
     ["As British English","Nothing shows that either follows one variety."],
     ["As ELF talk, because neither shares a first language with the other and English is their working language","Right. This is a clear case."],
     ["As a mistake","Using a shared language is not a mistake."],
     ["As over-accommodation","Nothing in the description shows this."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u8-q37","e6u8-l5",1,"What is a gairaigo?",2,[
     ["A mistake in English","Gairaigo are regular words of Japanese."],
     ["A school exam","It names a kind of word."],
     ["A Japanese word that was taken from another language, most often English","Right. Most are written in katakana."],
     ["A kind of grammar","It names words, not grammar."]]),
   Q("e6u8-q38","e6u8-l5",1,"What has changed in Japanese elementary schools since 2020?",0,[
     ["English is a formal subject in grades 5 and 6, and foreign language activities start in grade 3","Right. Foreign language activities in grades 5 and 6 began in 2011."],
     ["English was banned","English became more important, not banned."],
     ["Elementary schools stopped teaching Japanese","This did not happen."],
     ["English became the language of all lessons","English is a subject, not the language of all lessons."]]),
   Q("e6u8-q39","e6u8-l5",2,"Which Japanese word has its own meaning that differs from the English word that it comes from?",1,[
     ["ホテル (*hoteru*)","It is close to *hotel*."],
     ["マンション (*manshon*)","Right. It means an apartment building, and an English *mansion* is a very large house."],
     ["レストラン (*resutoran*)","It is close to *restaurant*."],
     ["None of them","The meaning of マンション differs."]]),
   Q("e6u8-q40","e6u8-l5",2,"What is a mora?",3,[
     ["A kind of English vowel","It is a unit of Japanese rhythm."],
     ["A kind of katakana","Katakana is a writing system."],
     ["A school subject","It is a unit of rhythm."],
     ["A beat of Japanese rhythm, often one kana","Right. ストライク has five."]]),
   Q("e6u8-q41","e6u8-l5",3,"Tomás says *konsento* in an English conversation, and his visitor does not understand. What is the best next step?",2,[
     ["Say it again, louder","Volume does not change meaning."],
     ["Say, “This is the English word, and you do not know it.”","This blames the visitor."],
     ["Say *outlet* or *socket*, and point at the wall","Right. The word is Japanese, and the plain English word solves the problem."],
     ["Stop speaking English","A word problem does not need silence."]]),
   Q("e6u8-q42","e6u8-l5",3,"Mariya, a student of English interpreting, is nervous about speaking English with a visitor. Which plan is the most useful?",2,[
     ["Wait until she can sound like a first-language speaker","This goal is not needed for understanding."],
     ["Say nothing and let the visitor lead","This avoids the conversation."],
     ["Choose the main point first, write two or three short sentences, keep a repair phrase ready and allow pauses","Right. The plan gives her something to do."],
     ["Speak as fast as possible","Speed does not help understanding."]]),
   Q("e6u8-q43","e6u8-l5",2,"In Kachru’s model, which circle includes Japan?",1,[
     ["The inner circle","The inner circle includes countries such as the US and the UK."],
     ["The expanding circle","Right. English is a foreign language in Japan, with no colonial history of English."],
     ["The outer circle","The outer circle includes countries with a colonial history of English."],
     ["No circle","Kachru’s model includes Japan in the expanding circle."]]),
   Q("e6u8-q44","e6u8-l5",3,"A classmate listens to the lab and says, “I heard that the speakers from Japan all sound the same.” What is the best reply?",3,[
     ["“Yes. A first language fixes every sound.”","Experience and practice also matter."],
     ["“No. Japan has no speakers of English.”","Many people in Japan use English."],
     ["“You should rank them.”","This course does not rank speakers."],
     ["“One speaker is one person. Compare what you heard in each recording and say what you cannot know.”","Right. A careful claim reports the evidence and the limit."]]),
   Q("e6u8-q45","e6u8-l5",3,"Hana writes, “The Tokyo speaker with two months in the US must be better than the Osaka speaker who never lived abroad.” What is wrong?",0,[
     ["A reading of one text cannot show who is better, and the course does not rank speakers. Understanding each other is the goal.","Right. Describe what you hear and add the limit."],
     ["Nothing is wrong.","The claim ranks speakers on weak evidence."],
     ["Two months in the US is too short to count.","The length of time is not the problem."],
     ["Nobody can live abroad.","This is not true, and it is not the point."]])
  ]
});
})();
