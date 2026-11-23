(function(){
/* World Englishes · Unit 7 (e6u7) · Pidgins and creoles */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u7", track:"e6", n:7, title:"Pidgins and creoles", icon:"🌴",
  blurb:"Pidgins and creoles are full languages that grew out of contact between groups with no shared language. This unit explains what they are, shows how their grammar works with sourced examples from Tok Pisin, Jamaican Creole and Krio, and compares creoles around the world. It also looks at their status, their place in school and the attitudes that surround them. You hear five real speakers reading English, and the last lesson is a listening lab that never ranks anyone.",
  goals:[
    "Define pidgin, expanded pidgin and creole, and explain lexifier and substrate",
    "Explain why “broken English” is the wrong description, with evidence from grammar",
    "Read example sentences from Tok Pisin, Jamaican Creole and Krio, and say what the small grammar words do",
    "Compare English-based, French-based and Iberian-based creoles, and describe the main ideas about how creoles form",
    "Describe the legal status of creoles and their place in school with careful, sourced claims, and listen to speakers without ranking them"
  ],
  read:[
    {book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”; Chapter 10, Language Variation and Change, sections 10.2 “Language varies” and 10.9 “Sociolinguistic correlations: Ethnicity”", note:"Read section 1.4 after Lesson 1 and section 10.2 after Lesson 4. The book is not about creoles, so use it for the ideas about standards and variation."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u7-l1", title:"What pidgins and creoles are", minutes:55,
   hook:{q:"A friend says, “Tok Pisin is just English with the grammar left out.” Which reply is the most accurate?", options:["“Yes. It has no grammar, only English words.”","“It has its own grammar. For example, it has two words for *we*, and English has one.”","“It is English that children speak badly.”","“It is a secret code with no speakers.”"], answer:1, reveal:"**It has its own grammar.** Tok Pisin takes many of its words from English, but its rules are different. One example is the choice between *yumi* (we, including you) and *mipela* (we, not including you). This unit shows how such rules work."},
   goals:[
     "Define pidgin, expanded pidgin and creole in plain words, and say who learns each one first",
     "Explain lexifier and substrate, using Tok Pisin as the example",
     "Describe the pidgin–creole “life cycle” of Hall (1966) and Mühlhäusler (1986), and say why it is only a rough guide",
     "Explain why “broken English” is the wrong description of a creole, and give two reasons",
     "Say where pidgins and creoles came from, and why that history is often a hard one"
   ],
   learn:[
    {h:"When people need a language they do not share", body:[
      {lead:"A [[we-pidgin|pidgin]] begins when people who share no language need to work or trade together."},
      "Picture a port town, a plantation or a trading ship. People arrive from many places, and each person has a different first language. They still need to buy, sell, give orders and explain. So they build a new way to talk, with words and sounds from the languages around them.",
      "Linguists call this a [[we-contact-language|contact language]]. A pidgin is a contact language for limited jobs. At first it has no native speakers, because everyone who uses it already has another first language. Its vocabulary is small at the start, and people use it for trade, work and daily needs.",
      "Pidgins have appeared wherever groups with no shared language met for long enough. Many disappeared when the contact ended. A few grew into main languages of whole countries.",
      "The history behind many of them is hard. Many pidgins and creoles grew on plantations and ships, where people worked under force and where enslaved people from many language groups were put together. These languages show what people can do under pressure. Speakers took what they knew and built a language that works."
    ]},
    {h:"Lexifier and substrate", body:[
      {lead:"A pidgin or creole has one main source of words and other sources of sounds and patterns."},
      "The [[we-lexifier|lexifier]] is the language that gives a pidgin or creole most of its words. For Tok Pisin, Krio and Jamaican Creole, the lexifier is English. For Haitian Creole it is French, as Lesson 3 shows. We say a language is *English-based* when English is its lexifier.",
      "The [[we-substrate|substrate]] languages are the first languages of the people who built the contact language. In Papua New Guinea, these are the many local languages of the workers. In Sierra Leone and the Caribbean, many are languages of West Africa. Some scholars use *superstrate* for the lexifier, but they do not all use the two terms in the same way.",
      "Words and grammar can come from different places. The words come mostly from the lexifier. The grammar patterns may come from the substrate, from the lexifier, or from general tendencies in how people learn languages. Scholars debate the balance, and Lesson 3 returns to this.",
      {table:[["Tok Pisin word","Source","Meaning"],["*haus*","English *house*","house"],["*bilong*","English *belong*","of, belonging to"],["*pinis*","English *finish*","finished, done"],["*tupela*","*two* + *fellow*","two"],["*bikpela*","*big* + *fellow*","big"]]},
      "Look at *bikpela haus* (“a big house”). The English words are easy to see. But the pattern is not English. The ending *-pela*, from *fellow*, marks the adjective, and Lesson 2 shows how. A reader who sees familiar words can think that the language is a form of English. It is a different language.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">How a contact language forms</text><rect class="d-sage" x="14" y="34" width="140" height="74" rx="8" stroke-width="2"/><text x="84" y="58" text-anchor="middle">Lexifier</text><text x="84" y="78" text-anchor="middle">English</text><text class="s" x="84" y="98" text-anchor="middle">gives most words</text><rect class="d-lup" x="186" y="34" width="140" height="74" rx="8" stroke-width="2"/><text x="256" y="58" text-anchor="middle">Substrate</text><text x="256" y="78" text-anchor="middle">local languages</text><text class="s" x="256" y="98" text-anchor="middle">may shape grammar</text><path class="d-ink" d="M84 110L84 128L140 144" fill="none" stroke-width="2"/><path class="d-inkf" d="M132 135L146 147L129 150z"/><path class="d-ink" d="M256 110L256 128L200 144" fill="none" stroke-width="2"/><path class="d-inkf" d="M208 135L194 147L211 150z"/><rect class="d-gold" x="50" y="152" width="240" height="64" rx="8" stroke-width="2"/><text x="170" y="178" text-anchor="middle">Pidgin</text><text class="s" x="170" y="198" text-anchor="middle">no native speakers at first</text><path class="d-ink" d="M170 218L170 238" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 232L170 246L178 232z"/><rect class="d-rose" x="50" y="250" width="240" height="64" rx="8" stroke-width="2"/><text x="170" y="276" text-anchor="middle">Expanded pidgin or creole</text><text class="s" x="170" y="296" text-anchor="middle">many jobs, some children first</text></svg>', alt:"A diagram with two boxes at the top, Lexifier (English, gives most words) and Substrate (local languages, may shape grammar). Arrows point from both to a box called Pidgin (no native speakers at first). An arrow leads down to a box called Expanded pidgin or creole (many jobs, some children first).", cap:"Words come mostly from the lexifier. Scholars debate how much the substrate shapes the grammar."}
    ]},
    {h:"Pidgin, expanded pidgin, creole", body:[
      {lead:"These three labels describe how a language is used and who learns it first."},
      {table:[["Label","Who learns it first?","How wide are its jobs?"],["Pidgin","Nobody. All speakers have another first language.","Narrow: trade, work orders, daily needs"],["Expanded pidgin","A few or some speakers, and many learn it as a second language","Wide: radio, church, school, parliament"],["Creole","Children of a community","All the jobs of a full language"]]},
      "A [[we-creole|creole]] is a contact language that children learn as a first language. It has all the jobs of any language: at home, in jokes, in songs, in arguments. An [[we-expanded-pidgin|expanded pidgin]] has grown to wide use and does most of those jobs, but many of its speakers still have another first language.",
      "Tok Pisin shows why the labels are hard. Jeff Siegel, who has written about it for many years, reports that more than 90 percent of its speakers have another first language. Yet when parents have different first languages, Tok Pisin is often their common language, and their children learn it first. Britannica calls it an expanded pidgin “as complex as a creole”, and Siegel says that it is debatable whether to call it a creole.",
      "Nigerian Pidgin has a similar story. Many people use it as a second language, and some use it as a first. Estimates of how many people use it vary widely. Scholars use *pidgin*, *creole* and *expanded pidgin* for it, and speakers often just call it Pidgin. The label is a choice made by researchers. It is not a ranking."
    ]},
    {h:"A life cycle, and its limits", body:[
      {lead:"The life-cycle idea is a useful picture, and it is not a law."},
      "In the 1960s, the American linguist Robert Hall described a pidgin–creole [[we-life-cycle|life cycle]] (Hall 1966). Contact starts a simple pidgin. Later, children learn it as a first language, and it becomes a creole. In the 1980s, Peter Mühlhäusler (1986) described stages inside the pidgin part: a loose jargon, a stable pidgin and an expanded pidgin.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">The life-cycle idea (simplified)</text><rect class="d-soft" x="60" y="32" width="220" height="44" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">1. Jargon</text><text class="s" x="170" y="68" text-anchor="middle">a few words, no fixed rules</text><path class="d-ink" d="M170 78L170 92" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 88L170 100L178 88z"/><rect class="d-sage" x="60" y="102" width="220" height="44" rx="8" stroke-width="2"/><text x="170" y="122" text-anchor="middle">2. Stable pidgin</text><text class="s" x="170" y="138" text-anchor="middle">shared rules, narrow jobs</text><path class="d-ink" d="M170 148L170 162" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 158L170 170L178 158z"/><rect class="d-gold" x="60" y="172" width="220" height="44" rx="8" stroke-width="2"/><text x="170" y="192" text-anchor="middle">3. Expanded pidgin</text><text class="s" x="170" y="208" text-anchor="middle">wide jobs, growing vocabulary</text><path class="d-ink" d="M170 218L170 232" fill="none" stroke-width="2"/><path class="d-inkf" d="M162 228L170 240L178 228z"/><rect class="d-rose" x="60" y="242" width="220" height="44" rx="8" stroke-width="2"/><text x="170" y="262" text-anchor="middle">4. Creole</text><text class="s" x="170" y="278" text-anchor="middle">children learn it first</text><text class="s" x="170" y="306" text-anchor="middle">Many pidgins stop early or disappear.</text><text class="s" x="170" y="322" text-anchor="middle">Some creoles may skip a stage.</text></svg>', alt:"A vertical diagram with four boxes joined by arrows: 1 Jargon, 2 Stable pidgin, 3 Expanded pidgin, 4 Creole. A note at the bottom says that many pidgins stop early or disappear and that some creoles may skip a stage.", cap:"The life cycle as a map of ideas. Real languages do not always follow it."},
      "The cycle has limits. Many pidgins never become creoles, and they disappear when the contact ends. Some creoles may have formed without a long, stable pidgin stage. Salikoko Mufwene, for example, argues that pidgins and creoles arise under different conditions. Records of the early stages are rare, so scholars often must argue from small pieces of evidence.",
      "Use the cycle as a map of ideas and not as a timetable. Never use it to say that one stage is “better” than another. Each stage is a working language for the people who use it."
    ]},
    {h:"Why “broken English” is the wrong idea", body:[
      {lead:"A creole has its own grammar, and its speakers follow it."},
      "People sometimes call a creole “broken English”. The description is wrong, for four reasons.",
      {ol:[
        "**It has rules.** Speakers agree on how to say things. A sentence can be right or wrong in the creole, and children learn the rules. Lesson 2 shows examples.",
        "**It can say things that English does not say.** Tok Pisin has two words for *we*, one that includes the listener and one that does not. English has one word.",
        "**It does many jobs.** According to Siegel, Tok Pisin is used on radio and television, in churches and in parliament.",
        "**Its speakers are not failing at English.** A person who speaks Jamaican Creole or Krio uses a language of their own. Many of these speakers also use English well, and they choose between the two systems for each setting."
      ]},
      "Some speakers also call their own language “broken English”. This usually reflects status and school history, and it is not a finding about the language. Unit 6 introduced Jamaican Creole next to Standard Jamaican English ({{we-caribbean-english}}), and Unit 2 gave the colonial history behind many of these languages. Unit 9 looks at attitudes in detail.",
      {warn:"A creole is not a “simpler” or “lazier” form of its lexifier. It is a different language. You will not be asked to speak or write one in this unit, and you will not see spellings that make speakers look foolish."}
    ]},
    {h:"What you will hear in this unit", body:[
      {lead:"In this unit you hear English and never the creole."},
      "The recordings come from the Speech Accent Archive. Every speaker reads the same English paragraph, “Please call Stella”. A reading in English can show how one person pronounces English words. It cannot show how that person speaks Tok Pisin, Krio or any other language, and it cannot show a grammar.",
      {ex:"Listen to a speaker from Madang, in Papua New Guinea. The archive says that Tok Pisin is the first language, that the speaker also uses Kuanua and Manem, that English began at age four at school, and that the speaker has spent six years in the US. The paragraph is English. Notice the *r* in *store* and *her*, and the *th* in *thick*. Describe what you hear in plain words. There is no single right answer, and one speaker is one person.", label:"Listen: Madang", listen:"e6u7-l1-a1"},
      {key:"A pidgin is a contact language with no native speakers at first. A creole is a language that children learn first. An expanded pidgin is between the two. All three have grammar, and none is broken English."}
    ]}
   ],
   try:[
    M("e6u7-l1-x1","Which statement is the best definition of a pidgin?",1,[
      ["A language that children learn first, with all the jobs of a full language","This describes a creole. A pidgin has no native speakers at first."],
      ["A contact language for limited jobs between groups who share no language, with no native speakers at first","Right. All its first speakers already have another first language."],
      ["A form of English with mistakes","No language is a mistake. A pidgin has its own rules."],
      ["A language that only traders can understand","Many pidgins grew far beyond trade, and some became the main language of a country."]
    ]),
    {id:"e6u7-l1-x2", type:"sort", q:"Which source does each item come from: the lexifier or the substrate?", buckets:["Lexifier","Substrate"], items:[
      {t:"The English word *house* in Tok Pisin *haus*", b:0, why:"English is the lexifier, and it gives most of the words."},
      {t:"The first languages of workers brought together on a plantation", b:1, why:"These are the substrate languages."},
      {t:"The language that gives a creole most of its vocabulary", b:0, why:"That is the definition of the lexifier."},
      {t:"Local languages that may shape the grammar of a pidgin", b:1, why:"The substrate may shape grammar, and scholars debate how much."},
      {t:"The English word *finish* in Tok Pisin *pinis*", b:0, why:"The word comes from English."},
      {t:"The home languages of the people who first built the contact language", b:1, why:"These are the substrate languages."}
    ]},
    {id:"e6u7-l1-x3", type:"order", q:"Put the stages of the simplified life-cycle idea in order, from the first stage to the last.", items:[
      {t:"Jargon: a few words with no fixed rules", why:"This is the first stage: people use a few words to get by."},
      {t:"Stable pidgin: shared rules for narrow jobs", why:"The language becomes steady, and speakers agree on rules."},
      {t:"Expanded pidgin: wide jobs and a growing vocabulary", why:"The pidgin grows to do more jobs, such as radio and church."},
      {t:"Creole: children learn it as a first language", why:"The last stage in the simplified idea is a language that children learn first."}
    ]},
    {id:"e6u7-l1-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Pidgin","A contact language with no native speakers at first","All its first speakers have another first language."],
      ["Creole","A language that children of a community learn as a first language","It has all the jobs of a full language."],
      ["Lexifier","The language that gives most of the words","For Tok Pisin and Krio, it is English."],
      ["Substrate","The first languages of the people who built the contact language","Scholars debate how much it shapes the grammar."],
      ["Expanded pidgin","A pidgin that has grown to wide use","Tok Pisin is often described this way."]
    ]},
    {id:"e6u7-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"A creole is a pidgin that has been corrected toward English.", flag:true, why:"A creole is a language of its own. It is not a corrected pidgin or a corrected form of English."}, " ", {t:"Tok Pisin gets most of its words from English.", flag:false, why:"Correct. English is the lexifier of Tok Pisin."}, " ", {t:"Every pidgin becomes a creole.", flag:true, why:"Many pidgins disappear when the contact ends, and some never get native speakers."}, " ", {t:"Pidgins often began where people with no shared language worked together, such as on plantations.", flag:false, why:"Correct. Plantations, ports and ships were common places."}, " ", {t:"Creoles are spoken by people who have not learned grammar.", flag:true, why:"Creoles have regular grammar, and children learn it as they learn any first language."}, " ", {t:"Linguists use the labels pidgin, creole and expanded pidgin in slightly different ways.", flag:false, why:"Correct. Tok Pisin and Nigerian Pidgin are described with different labels by different scholars."}, "”"
    ]},
    {id:"e6u7-l1-x6", type:"number", q:"Recruiting of Pacific islanders for work on Queensland plantations began in 1863. Papua New Guinea became independent in 1975. How many years were there between the two dates?", answer:112, tol:0, unit:"years", why:"1975 − 1863 = 112 years.", wrongs:[{v:102, tol:0, why:"This subtracts 10 too many. Check: 1863 + 112 = 1975."},{v:122, tol:0, why:"This adds 10 too many. Check: 1863 + 112 = 1975."}], hint2:"Subtract 1863 from 1975."},
    M("e6u7-l1-x7","You will hear a speaker from Port Moresby. The archive says that English is the first language and that the speaker also uses Tok Pisin. The paragraph is read in English. Whatever you hear, which claim is the most careful?",2,[
      ["“I can hear the grammar of Tok Pisin in this clip.”","A reading of an English paragraph cannot show the grammar of another language."],
      ["“This speaker’s Tok Pisin must be weak, because the English is clear.”","A clip of English says nothing about a person’s skill in another language."],
      ["“This is a reading in English. It shows how one person says English words, and it cannot show anything about Tok Pisin.”","Right. It stays within the evidence."],
      ["“All speakers from Papua New Guinea sound like this.”","One speaker is one person, and no clip shows a whole country."]
    ], {listen:"e6u7-l1-a2", hint:"The answer does not depend on what the speaker does. Think about what a reading in English can and cannot show."}),
    {id:"e6u7-l1-x8", type:"explain", q:"Your friend Ken says, “Tok Pisin is just English with the grammar left out.” Write a short, kind answer.", size:"3–5 sentences", prompt:"Tok Pisin takes many words from English, but …", hint:"Think about lexifier and substrate, the two words for *we*, and the jobs that Tok Pisin does.", points:["Says that English is the lexifier and gives many of the words","Says that Tok Pisin has its own grammar, with an example such as two words for *we*","Says that it does many jobs, such as radio, church and parliament","Does not say that the language is broken or simple"], model:"Tok Pisin takes many of its words from English, because English is its lexifier. But the grammar is its own. For example, it has two words for *we*: *yumi* includes the listener, and *mipela* does not. English has only one word. Tok Pisin is also used on radio, in churches and in parliament, so it is a full language with many jobs. It is a different language from English, and it is not English with something missing."}
   ],
   apply:{
    intro:"These tasks use free web pages and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read a short description of Tok Pisin", how:[
       "Open the Tok Pisin page by Jeff Siegel on the [Sato Center site](https://hawaii.edu/satocenter/langnet/definitions/tokpisin.html).",
       "Write down three facts about how Tok Pisin began, and two facts about how it is used today.",
       "Mark with a star the place where Siegel says that linguists disagree about a label. Write which label the disagreement is about."
     ], write:"Three facts about the beginning… two facts about use today… the label that scholars disagree on…"},
     {t:"Explain the life cycle in your own words", how:[
       "Draw the four stages of the life cycle on a sheet of paper, with an arrow between each stage.",
       "Under the drawing, write two reasons why the cycle is only a rough guide.",
       "Write one sentence that you could say to a friend who calls a creole “broken English”."
     ], write:"My drawing… two limits of the cycle… one sentence for a friend…"}
    ],
    proof:"A page with three facts about Tok Pisin and its label, a drawing of the life cycle with two limits, and one kind sentence for a friend."
   },
   read:[
    {book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”", note:"This section helps you think about why one variety is called “proper” and another is not."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u7-l2", title:"How creole grammar works", minutes:55,
   hook:{q:"In Tok Pisin there are two words for *we*: *yumi* and *mipela*. What is the difference?", options:["*Yumi* is formal and *mipela* is informal.","*Yumi* includes the person you are talking to, and *mipela* does not.","*Yumi* is singular and *mipela* is plural.","*Yumi* is for men and *mipela* is for women."], answer:1, reveal:"***Yumi* includes the listener, and *mipela* leaves the listener out.** English has only one *we*. Many languages of the world make this inclusive and exclusive difference, and Tok Pisin does too."},
   goals:[
     "Explain why a creole must be read for its grammar, because English-looking words can hide it",
     "Describe the Tok Pisin pronouns, including inclusive *yumi* and exclusive *mipela*, and the roles of *-im*, *i* and *-pela*",
     "Read example sentences from Jamaican Creole and Krio, and say what the small words *de*, *wehn*, *bin*, *dɔn* and *di* do",
     "Compare how three creoles mark time and aspect before or after the verb",
     "Say where each example sentence comes from, and why spelling differs between sources"
   ],
   learn:[
    {h:"Different rules, not fewer rules", body:[
      {lead:"A creole follows rules, and the rules are often different from the rules of its lexifier."},
      "A new reader of a creole often looks for English. This can hide the grammar. The word *bin* looks like English *been*, but in Tok Pisin and Krio it is a small [[we-tma-marker|marker of time or aspect]] before a verb. To read a creole well, ask what each small word does.",
      "Scholars debate how simple creole grammar is. McWhorter (2001) argued that creole grammars are among the simplest in the world, for example because they have few word endings. Others, such as Gil (2001) and Michel DeGraff, disagree. Both sides describe creoles as complete languages. A grammar can be simple in one way and rich in another.",
      "The examples in this lesson come from published descriptions, and each table says which. Spelling differs between sources, because most creoles have no single official spelling. You read these examples to understand the rules. You will not be asked to speak or write a creole."
    ]},
    {h:"Tok Pisin: two words for we", body:[
      {lead:"Tok Pisin makes a difference in its pronouns that English does not make."},
      "Tok Pisin is a common language between speakers of many different languages in Papua New Guinea. Its pronouns show how many people are meant, and whether the listener is one of them. Verhaar (1995) lists the forms below.",
      {table:[["Form","Meaning","Listener included?"],["*mi*","I","not applicable"],["*mitupela*","he or she and I","no"],["*mitripela*","both of them and I","no"],["*mipela*","all of them and I","no"],["*yumitupela*","you and I","yes"],["*yumitripela*","both of you and I","yes"],["*yumi*, *yumipela*","all of you and I","yes"],["*yu*, *yupela*","you (one person), you (four or more)","not applicable"]]},
      "Forms such as *-tupela* (*two* + *fellow*) and *-tripela* (*three* + *fellow*) show a dual (two people) and a trial (three people). English has no such forms. The Atlas of Pidgin and Creole Language Structures (APiCS) records the [[we-clusivity|inclusive and exclusive]] difference for Tok Pisin, in an entry by Geoff Smith and Jeff Siegel.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Two words for we in Tok Pisin</text><rect class="d-sage" x="14" y="34" width="312" height="116" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">yumi</text><circle class="d-gold" cx="100" cy="100" r="22" stroke-width="2"/><text x="100" y="105" text-anchor="middle">I</text><circle class="d-lup" cx="170" cy="100" r="22" stroke-width="2"/><text x="170" y="105" text-anchor="middle">you</text><circle class="d-soft" cx="240" cy="100" r="22" stroke-width="2"/><text x="240" y="105" text-anchor="middle">others</text><text class="s" x="170" y="140" text-anchor="middle">I + you (+ others)</text><rect class="d-rose" x="14" y="162" width="312" height="124" rx="8" stroke-width="2"/><text x="170" y="186" text-anchor="middle">mipela</text><circle class="d-gold" cx="100" cy="226" r="22" stroke-width="2"/><text x="100" y="231" text-anchor="middle">I</text><circle class="d-soft" cx="170" cy="226" r="22" stroke-width="2"/><text x="170" y="231" text-anchor="middle">others</text><text class="s" x="258" y="224" text-anchor="middle">you</text><text class="s" x="258" y="242" text-anchor="middle">not included</text><text class="s" x="170" y="274" text-anchor="middle">I + others, without you</text></svg>', alt:"A diagram with two panels. The top panel, yumi, shows three circles: I, you and others, and the note I plus you, and maybe others. The bottom panel, mipela, shows circles for I and others, and the note that you are not included.", cap:"Yumi includes the listener. Mipela does not."},
      "Real sentences show the difference. The Tok Pisin translation of the Universal Declaration of Human Rights gives Article 3 as *Yumi olgeta igat rait long stap laip, fri na sef* (“Everyone has the right to life, liberty and security”). The word *yumi* includes the reader. In a grammar of Tok Pisin, Woolford (1979) gives *Yumi ol Papua New Guinea* (“We Papua New Guineans”), which also includes the listener. APiCS lists *mipela* (also written *mipla*) as the exclusive form. Older texts sometimes use these words in other ways, so check the date and the spelling of any source."
    ]},
    {h:"Tok Pisin: verbs, adjectives and the marker i", body:[
      {lead:"Three small pieces carry a lot of grammar in Tok Pisin: *-im*, *i* and *-pela*."},
      "The verb ending **-im** comes from English *him*. It shows that the verb has an object. *Luk* (“look”) becomes *lukim* (“see”), and *kuk* (“cook”) becomes *kukim* before an object noun. The [[we-predicate-marker|marker]] **i** comes after the subject and before the predicate. It is not a pronoun and not a verb. The ending **-pela** (from *fellow*) appears on many adjectives, numbers and the word *dispela* (“this”).",
      {table:[["Tok Pisin","Meaning","What it shows"],["*kuk*, *kukim*","cook, cook (something)","*-im* is added when an object noun follows (Britannica)"],["*haus bilong mi*","my home","*bilong* marks possession (Wikibooks)"],["*Haus i bikpela.*","The building is big.","*i* links the subject and the adjective (Wikibooks, Tok Pisin)"],["*bikpela haus*","a big building","*-pela* on the adjective before the noun (Wikibooks)"],["*Kolpela wara*, *Wara i kol*","cold water, the water is cold","many adjectives keep *-pela* before a noun and drop it after *i* (Wikibooks)"],["*Na praim minista i bin tok olsem.*","And the prime minister spoke thus.","*bin* marks an earlier time (as quoted in Wikipedia)"],["*Em i lusim bot pinis.*","He had got out of the boat.","*pinis* after the verb marks that the action is finished (as quoted in Wikipedia)"]]},
      "The last two rows, and *Em i slip i stap* (“He or she is sleeping”), come from the English Wikipedia article on Tok Pisin. It credits Romaine (1991) and Mühlhäusler (1984) for them. The first rows come from Britannica and from the free Wikibooks text. Check the original books before you quote any of these sentences.",
      "Notice that the verb never changes its ending for time. The small words *bin* (earlier) and *pinis* (finished) do that job. English uses *-ed* and *has*, and Tok Pisin uses separate words."
    ]},
    {h:"Jamaican Creole: small words before the verb", body:[
      {lead:"Jamaican Creole marks time, place and number with small words, and its grammar differs from Standard Jamaican English."},
      "Unit 6 compared Jamaican Creole and Standard Jamaican English, and many Jamaicans use both. The examples below come from the Jamaican chapter in APiCS by Joseph Farquharson (2013). They are spelled in the Cassidy–JLU system, which linguists use. Patrick (2004) is a standard overview of the grammar.",
      {table:[["Jamaican Creole","Meaning","What it shows"],["*Piita de sing di sang.*","Peter is singing the song.","*de* before a verb marks an action in progress"],["*Jan wehn daans.*","John had danced.","*wehn* marks an earlier time"],["*Yu buk de pan im tiebl.*","Your book is on her table.","*de* also says where something is"],["*Jan sik.*","John is sick.","no word for *is* is needed before an adjective"],["*di tuu ogli man dem*","the two ugly men","*dem* after the noun marks a plural"]]},
      "Descriptions differ in some details. Unit 6 gave *a* for the progressive, as in *Mi a ron* (“I am running”). Farquharson gives *de* for the progressive and *a* for a habit, as in *wan plies we dem a plie haki mach* (“a place where they play hockey matches”). Speakers also differ by region and by setting, as the continuum in Unit 6 shows ({{we-caribbean-english}}).",
      {ex:"Listen to a speaker from Kingston, Jamaica. The archive says that English is the first language and that the speaker also uses Patois (Jamaican Creole). The paragraph is read in English, so you hear English only. Notice the *r* in *store* and *her*, and the vowel in *ask*. Describe what you hear. There is no single right answer.", label:"Listen: Kingston", listen:"e6u7-l2-a2"}
    ]},
    {h:"Krio: a language of Sierra Leone", body:[
      {lead:"Krio is the main language of Freetown, and many people in Sierra Leone use it as a common language."},
      "English is the official language of Sierra Leone. Krio is an English-based creole, and Malcolm Finney describes it in APiCS. Two accounts of its origin exist. Huber proposes that it grew from the creoles of groups of freed and resettled people who arrived on the Sierra Leone peninsula between 1787 and 1850. Hancock argues that it comes from a creole of the Upper Guinea coast of West Africa from the 1600s. Scholars still discuss both accounts.",
      "The examples below are from Finney in APiCS. There, Krio is written with the letters ɔ and ɛ, which stand for two vowel sounds that the writing system marks separately.",
      {table:[["Krio","Meaning","What it shows"],["*A bin du am.*","I did it.","*bin* marks an earlier time"],["*A bin dɔn du am.*","I had done it.","*dɔn* marks that the action is finished, and *bin* puts it earlier"],["*A tiŋk se dɛm dɔn kam.*","I think that they have arrived.","*dɔn* before *kam* (“come”) marks a finished action"],["*Di maŋgro di rɛp.*","The mango is getting ripe.","the second *di*, before the verb, marks an action in progress; the first *di* means “the”"],["*Wi go ebul du am tumara.*","We will be able to do it tomorrow.","*go* before the verb marks a later time"],["*pikin dɛm*","children","*dɛm* after the noun marks a plural"]]},
      "Compare the sentences. The verb *du* (“do”) has the same form in every sentence where it appears. The small words before it show the time and whether the action is finished. This is the regular grammar of Krio. It is not a set of mistakes.",
      {ex:"Listen to a speaker from Freetown, Sierra Leone. The archive says that Krio is the first language, that the speaker also uses Mandingo and Temne, that English began at age five, and that the speaker has spent time in Sierra Leone and in the US. The paragraph is English. Notice the *r* in *store* and the end of *thick*. Describe what you hear. There is no single right answer.", label:"Listen: Freetown", listen:"e6u7-l2-a1"}
    ]},
    {h:"The same jobs in different forms", body:[
      {lead:"English-based creoles often use small words, and not word endings, to mark time."},
      {table:[["Job","Tok Pisin","Krio","Jamaican"],["Earlier time","*bin*","*bin*","*wehn*"],["In progress","*i stap* after the verb","*di* before the verb","*de* before the verb"],["Finished","*pinis* after the verb","*dɔn* before the verb","not shown here"]]},
      "The forms look alike in some places and differ in others. The positions differ too: *pinis* comes after the verb, and *dɔn* comes before it. So these creoles are not copies of each other, and they are not copies of English.",
      {key:"In the examples of this lesson, small words mark time and aspect, and verbs keep one form. Every pattern is regular, and every language has its own set."}
    ]}
   ],
   try:[
    M("e6u7-l2-x1","A teacher tells a visiting inspector what the teachers at her school decided, and she uses the Tok Pisin word *mipela* for *we*. What does *mipela* tell you about the group?",1,[
      ["The group includes the inspector who is spoken to.","That would be *yumi*. *Mipela* leaves the listener out."],
      ["The group does not include the inspector who is spoken to.","Right. *Mipela* is the exclusive *we*."],
      ["The group has exactly two people.","That would be a dual form such as *mitupela*."],
      ["The group is all women.","The Tok Pisin pronouns in this lesson do not show gender."]
    ]),
    {id:"e6u7-l2-x2", type:"sort", q:"Which Tok Pisin word fits each situation: *yumi* or *mipela*?", buckets:["*yumi* (includes the listener)","*mipela* (does not include the listener)"], items:[
      {t:"A speaker tells a stranger what the speaker’s family did last week.", b:1, why:"The stranger is not part of the family, so the speaker uses the exclusive form."},
      {t:"A speaker says, “We Papua New Guineans …” to a room of Papua New Guineans.", b:0, why:"The listeners are part of the group, so the speaker uses the inclusive form."},
      {t:"A speaker makes a plan for the speaker and the listener to do together.", b:0, why:"The listener is part of the plan."},
      {t:"A worker tells a manager that the team finished its job, and the manager was not on the team.", b:1, why:"The manager is outside the group."},
      {t:"The UN text says that all of us have the right to life.", b:0, why:"The text speaks for everyone, including the reader, and uses *yumi olgeta*."},
      {t:"A speaker tells a visitor what the villagers eat, and the visitor does not live there.", b:1, why:"The visitor is not included."}
    ]},
    {id:"e6u7-l2-x3", type:"match", q:"Match each Tok Pisin item to what it does.", pairs:[
      ["*lukim* (from *luk*)","The ending *-im* shows that the verb has an object","*Luk* means “look”, and *lukim* means “see”."],
      ["*bikpela*","*-pela* on an adjective","It comes from English *big* + *fellow*."],
      ["*Haus i bikpela.*","*i* marks the predicate","It links the subject *haus* with *bikpela*."],
      ["*pinis*","A word after the verb that marks that the action is finished","*Em i lusim bot pinis* means “He had got out of the boat”."],
      ["*yumitupela*","“You and I”, two people, with the listener included","*-tupela* marks two people."]
    ]},
    {id:"e6u7-l2-x4", type:"sort", q:"Which creole does each example sentence come from?", buckets:["Tok Pisin","Jamaican Creole","Krio"], items:[
      {t:"*A bin du am.*", b:2, why:"This is a Krio sentence from Finney in APiCS."},
      {t:"*Jan wehn daans.*", b:1, why:"This is a Jamaican Creole sentence from Farquharson in APiCS."},
      {t:"*Em i lusim bot pinis.*", b:0, why:"*Pinis* and the marker *i* are Tok Pisin."},
      {t:"*Piita de sing di sang.*", b:1, why:"*De* before a verb is Jamaican, and the spelling follows Farquharson."},
      {t:"*Wi go ebul du am tumara.*", b:2, why:"This is a Krio sentence from Finney in APiCS, with *go* for a later time."},
      {t:"*Haus i bikpela.*", b:0, why:"*Bikpela* with *-pela* is Tok Pisin."}
    ]},
    {id:"e6u7-l2-x5", type:"order", q:"Put these Tok Pisin pronouns in order from the one that names the fewest people to the one that names the most.", items:[
      {t:"*mi* (I)", why:"One person."},
      {t:"*mitupela* (he or she and I)", why:"Two people, a dual form."},
      {t:"*mitripela* (both of them and I)", why:"Three people, a trial form."},
      {t:"*mipela* (all of them and I)", why:"Four or more people."}
    ]},
    {id:"e6u7-l2-x6", type:"number", q:"Count the Tok Pisin forms for *I* and *we* in the table of this lesson. How many different first-person forms does the table list, if *yumi* and *yumipela* count as one form?", answer:7, tol:0, unit:"forms", why:"The forms are *mi*, *mitupela*, *mitripela*, *mipela*, *yumitupela*, *yumitripela* and *yumi* (with *yumipela*). That is 7.", wrongs:[{v:8, tol:0, why:"You counted *yumi* and *yumipela* as two forms, but the question says to count them as one."},{v:2, tol:0, why:"This counts only *mi* and *mipela*. The table has dual, trial and inclusive forms too."}], hint2:"Count one row at a time, and skip the rows for *yu* and *yupela*."},
    M("e6u7-l2-x7","You will hear a speaker whose first language is Krio reading the English paragraph. A classmate says, “Now we can study Krio grammar from this clip.” Whatever you hear, which reply is the most careful?",2,[
      ["“Yes. The clip will show us how Krio marks time.”","The paragraph is English, so Krio grammar does not appear in it."],
      ["“Yes, but only if we listen for *bin* and *dɔn*.”","Those are Krio words, and the reader says English words."],
      ["“No. The clip is a reading in English. For Krio grammar we need a source that describes Krio.”","Right. It stays within the evidence."],
      ["“No. Krio does not have grammar to study.”","Krio has regular grammar, as Finney shows."]
    ], {listen:"e6u7-l2-a3", hint:"The answer does not depend on what the speaker does. A reading of an English paragraph is English."}),
    {id:"e6u7-l2-x8", type:"explain", q:"A classmate says, “Jamaican Creole has no grammar. People just say *Piita de sing di sang* because they leave words out.” Write a short, fair answer.", size:"3–5 sentences", prompt:"Jamaican Creole has its own grammar, because …", hint:"Think about what *de*, *wehn* and *dem* do, and about the English sentence *Peter is singing the song*.", points:["Says that *de* marks an action in progress, as a rule of the creole","Gives a second pattern, such as *wehn* or *dem*","Says that the creole is a different system and not English with words missing","Does not say that the speakers are making mistakes"], model:"Jamaican Creole has its own grammar. In *Piita de sing di sang*, the small word *de* marks an action in progress. Other small words follow rules too: *wehn* marks an earlier time, and *dem* after a noun marks a plural. These words are not missing pieces of English. They are the tools of a different system, and speakers use them in a regular way. Many Jamaicans also use Standard Jamaican English and choose between the two."}
   ],
   apply:{
    intro:"These tasks use the sentences in this lesson, and two free web pages. Nothing needs an account.",
    tasks:[
     {t:"Read one Tok Pisin sentence word by word", how:[
       "Take the sentence from the UN text: *Yumi olgeta igat rait long stap laip, fri na sef.* It means “Everyone has the right to life, liberty and security”.",
       "Write each word on its own line. Mark the words that look English, such as *rait*, *laip* and *fri*. Write the English word that you think each one comes from.",
       "Write one sentence about what *yumi* shows about the speaker and the reader."
     ], write:"yumi… olgeta… igat… rait… English words I found… what yumi shows…"},
     {t:"Compare time markers in three creoles", how:[
       "Open the APiCS chapters on [Krio](https://apics-online.info/surveys/15) and [Jamaican](https://apics-online.info/surveys/8). Find one sentence in each that has a small word for an earlier time.",
       "Make a table with three columns: Tok Pisin, Krio and Jamaican. Add the small word for an earlier time, and one example sentence for each language.",
       "Write two sentences about what the three languages have in common and one thing that is different."
     ], write:"Tok Pisin… Krio… Jamaican… in common… one difference…"}
    ],
    proof:"A word-by-word note on one Tok Pisin sentence, and a table with three creoles, their small words for an earlier time, and two comparison sentences."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"This section helps you think about how one speaker can use more than one system for different settings, as many speakers of Jamaican Creole do."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u7-l3", title:"Creoles around the world", minutes:55,
   hook:{q:"Haitian Creole takes most of its words from French. Papiamentu takes most of its words from Portuguese and Spanish. What does this show?", options:["Pidgins and creoles form in many places, with many different lexifiers.","Only English can be a lexifier.","All creoles are dialects of English.","Creoles formed only in Africa."], answer:0, reveal:"**Pidgins and creoles form wherever groups with no shared language need one, and the lexifier can be any language.** English, French, Portuguese, Spanish, Dutch and others have all been lexifiers. This is a general human process, and it is not a story about English alone."},
   goals:[
     "Name English-based, French-based and Iberian-based creoles, and say where each is spoken",
     "Describe where and how several creoles began: plantations, ports and the Pacific labor trade",
     "Describe Australian Kriol, and say how it differs from Aboriginal English",
     "Compare the main ideas about how creoles form (substrate, superstrate, bioprogram and founder principle), and say that scholars debate them",
     "Explain the debate about whether creole grammar is simple, without ranking any language"
   ],
   learn:[
    {h:"One process, many languages", body:[
      {lead:"Pidgins and creoles are found on many continents, and they form with many lexifiers."},
      "The Atlas of Pidgin and Creole Language Structures (APiCS), edited by Michaelis and others (2013), compares dozens of them with the same set of questions. The table lists some that this unit mentions. The *lexifier* column shows what scholars describe, and some details are still debated.",
      {table:[["Language","Where it is spoken","Lexifier"],["Tok Pisin","Papua New Guinea","English"],["Bislama","Vanuatu","English"],["Solomon Islands Pijin","Solomon Islands","English"],["Krio","Sierra Leone","English"],["Nigerian Pidgin","Nigeria","English"],["Jamaican Creole","Jamaica","English"],["Gullah","Coastal South Carolina and Georgia, USA","English"],["Hawaiʻi Creole English","Hawaiʻi","English"],["Australian Kriol","Northern Australia","English"],["Haitian Creole","Haiti","French"],["Papiamentu","Aruba, Bonaire and Curaçao","Portuguese and Spanish (debated)"]]},
      "Haitian Creole has most of its words from French, but its grammar has often been linked to languages of West Africa such as Fon (Lefebvre 1998). Papiamentu has most of its words from Iberian languages, and scholars still discuss whether Portuguese or Spanish came first. The same process worked with different languages, and the results are separate languages in each place."
    ]},
    {h:"Where and how they began", body:[
      {lead:"Many creoles began where people from many language groups were brought together to work, often under force."},
      "In the Pacific, the recruiting of island workers for Queensland plantations began in 1863, according to Jeff Siegel. Workers also went to plantations in Samoa from 1879 to 1912. A shared pidgin grew on the ships and plantations. Workers who returned home took it with them, and later it spread through plantation work in German New Guinea, the New Hebrides (now Vanuatu) and the Solomon Islands. Tok Pisin, Bislama and Solomon Islands Pijin have a common origin in this history. Many workers were tricked or forced into the work. Historians use the word *blackbirding* for the worst cases.",
      "In the Atlantic world, enslaved Africans from many language groups were brought to plantations. Unit 6 told part of this story for the Caribbean ({{we-caribbean-english}}). Gullah, on the coast of South Carolina and Georgia, grew in a similar setting. Lorenzo Dow Turner’s book *Africanisms in the Gullah Dialect* (1949) was an early study that showed words and names of African origin in Gullah.",
      "In West Africa, the story of Krio has two accounts. Huber proposes that Krio grew from the creoles of groups resettled on the Sierra Leone peninsula between 1787 and 1850. The first group, the Black Poor from Britain, arrived in 1787. After Britain ended its slave trade, the British also resettled Liberated Africans, people taken from slave ships, in Freetown from 1808. Hancock argues for an older creole of the Upper Guinea coast from the 1600s. The two accounts are still discussed.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Dates in this lesson</text><line class="d-ink" x1="44" y1="34" x2="44" y2="286" stroke-width="2"/><circle class="d-sage" cx="44" cy="52" r="7" stroke-width="2"/><text x="64" y="57">1787 · Settlers reach Sierra Leone</text><circle class="d-lup" cx="44" cy="100" r="7" stroke-width="2"/><text x="64" y="105">1808 · Resettling of Liberated</text><text class="s" x="64" y="121">Africans begins</text><circle class="d-gold" cx="44" cy="158" r="7" stroke-width="2"/><text x="64" y="163">1863 · Queensland recruiting begins</text><circle class="d-rose" cx="44" cy="206" r="7" stroke-width="2"/><text x="64" y="211">1879 · Workers go to Samoa</text><circle class="d-sage" cx="44" cy="264" r="7" stroke-width="2"/><text x="64" y="269">1949 · Turner’s book on Gullah</text></svg>', alt:"A vertical timeline with five dates: 1787 settlers reach Sierra Leone, 1808 the resettling of Liberated Africans begins, 1863 Queensland recruiting begins, 1879 workers go to Samoa, 1949 Turner’s book on Gullah.", cap:"Key dates in this lesson. Sources give these as the start of a long process, and exact dates differ."},
      "Papiamentu has a different story. Many linguists link it to Portuguese-based creoles of the West African coast, and trade and the Dutch colonial period in Curaçao shaped its later history. The details are debated."
    ]},
    {h:"Australian Kriol, and a question from Toby", body:[
      {lead:"Australia has an English-based creole too, and it is a language in its own right."},
      "Toby Whitlock, a master’s student in Japanese linguistics who comes from Australia, could tell the other housemates that his country has a creole. [[we-kriol|Australian Kriol]] is spoken by Aboriginal people in northern Australia. It grew from contact pidgins, and descriptions say that children began to learn it as a first language early in the 1900s, for example in mission communities such as Roper River. Accounts differ on details, and the numbers of speakers are estimates.",
      "Kriol is not the same as Aboriginal English. Unit 4 described [[we-aboriginal-english|Aboriginal English]] as a variety of English ({{we-australian-nz-english}}). Linguists describe Kriol as a language with its own grammar. Many speakers use more than one of these ways of speaking, and move between them by setting and by listener. If a classmate says that Kriol is only bad English, Toby can point to this: it has its own rules, and its speakers also use other ways of speaking."
    ]},
    {h:"How do creoles form? Four ideas", body:[
      {lead:"Scholars have several ideas about how a creole forms, and none has won."},
      {table:[["Idea","Main claim","Open question"],["Substrate view","Many grammar patterns come from the first languages of the people who built the creole (for example Lefebvre 1998).","Which languages were present, and when?"],["Superstrate view","Many features come from the lexifier, including its regional and nonstandard varieties.","Why do creoles differ so much from the lexifier?"],["Bioprogram (Bickerton 1981)","Children, with innate abilities, turn a rough pidgin into a full language.","Is the evidence from Hawaiʻi enough?"],["Founder principle (Mufwene 1996)","The first speakers in a new settlement have a large effect on the language that grows.","Do we have records of the first speakers?"]]},
      "Derek Bickerton argued in *Roots of Language* (1981) that children who grow up with a rough pidgin shape it into a full language, using abilities that all humans share. He used evidence from Hawaiʻi. Other scholars have questioned his evidence and his conclusions, but his [[we-bioprogram|bioprogram]] idea is still the best-known universalist account.",
      "Salikoko Mufwene (1996) described the [[we-founder-principle|founder principle]]. The people who arrive first in a new place have a large effect, because later arrivals learn the language from them. His view looks at the whole setting, with the people, the numbers and the timing.",
      "Many scholars now say that several of these factors worked together, and they differ on how much each one mattered. The question is open, and a careful answer says so."
    ]},
    {h:"Simple or complex?", body:[
      {lead:"The question of how simple creole grammar is has no single answer, and it has nothing to do with whether creoles are real languages."},
      "John McWhorter (1998) proposed that creoles share a set of features: few or no word endings, little or no tone that carries meaning, and word formation that is easy to see. He called this a [[we-creole-prototype|creole prototype]]. In 2001 he argued that creole grammars are among the simplest in the world. Other scholars disagree. David Gil (2001) argued that Riau Indonesian is simpler than Saramaccan, the creole that McWhorter used as his main example. Michel DeGraff (2003) and others reject the idea that creoles are unusual in any important way.",
      "Both sides agree on some things. Creoles are full languages. Children learn them as they learn any first language. Speakers can say anything in them. And no one has one number that measures the complexity of a whole language. So *simple* in a research paper means “has fewer of one kind of ending”. It does not mean “easy”, “childish” or “broken”.",
      {warn:"Do not use the debate to rank languages. A grammar with few word endings is not worse, and a grammar with many is not better."}
    ]},
    {h:"Two more English-based creoles", body:[
      {lead:"Gullah and Hawaiʻi Creole English are English-based creoles in the United States."},
      "[[we-gullah|Gullah]] has been spoken for a long time on the coast and the Sea Islands of South Carolina and Georgia. Estimates of its speakers are small and changing, and they differ between studies. A translation of the New Testament into Gullah was reported as complete in 2005.",
      "[[we-hawaii-creole-english|Hawaiʻi Creole English]], often called Pidgin in Hawaiʻi, grew on sugarcane plantations from the 1800s among workers from many countries, and children later learned it as a first language. A description in the English Wikipedia article gives sentences such as *Jesus wen cry* (“Jesus cried”), where *wen* marks the past, and *Da behbeh cute* (“The baby is cute”), where no word for *is* is needed. Lesson 4 returns to its status. Unit 4 introduced American English more widely ({{we-american-english}}).",
      {ex:"Listen to a speaker from Willemstad, Curaçao. The archive says that Papiamentu is the first language, that the speaker also uses Spanish and Dutch, that English began at age five, and that the speaker has spent five years in the US. Papiamentu is an Iberian-based creole, but the paragraph is English, so you hear English only. Notice the *r* in *store* and *her*, and the vowel in *snack*. Describe what you hear. There is no single right answer.", label:"Listen: Willemstad", listen:"e6u7-l3-a1"},
      {ex:"Listen to a speaker from Port Moresby. The archive says that English is the first language, that the speaker also uses Tok Pisin, and that the speaker has spent time in Papua New Guinea, the UK and the US. Because the speaker has been in several places, one clip cannot show which feature comes from where. Notice the same words, and describe what you hear.", label:"Listen: Port Moresby", listen:"e6u7-l3-a2"},
      {key:"Pidgins and creoles are a general human process. Many lexifiers and many places have produced them, and scholars debate how they form."}
    ]}
   ],
   try:[
    M("e6u7-l3-x1","Haitian Creole is described as a French-based creole. What does *French-based* mean?",2,[
      ["Haitian Creole is a dialect of French.","It is described as a separate language with grammar of its own."],
      ["Only people with French ancestors speak it.","The label is about the source of words, and not about ancestry."],
      ["French is the lexifier, which means that French gives most of its words.","Right. The grammar is not simply French."],
      ["It was invented by French teachers.","It formed through contact among many speakers, and teachers did not invent it."]
    ]),
    {id:"e6u7-l3-x2", type:"sort", q:"Which lexifier does each language have, according to the lesson?", buckets:["English","French","Portuguese and Spanish"], items:[
      {t:"Tok Pisin", b:0, why:"English is the lexifier of Tok Pisin."},
      {t:"Haitian Creole", b:1, why:"Most of its words come from French."},
      {t:"Papiamentu", b:2, why:"Its words come mainly from Portuguese and Spanish, and the exact balance is debated."},
      {t:"Krio", b:0, why:"English is the lexifier of Krio."},
      {t:"Gullah", b:0, why:"Gullah is an English-based creole."},
      {t:"Bislama", b:0, why:"Bislama is an English-based creole of Vanuatu."}
    ]},
    {id:"e6u7-l3-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"The first settlers reach the Sierra Leone peninsula (1787)", why:"This is the earliest date in the list."},
      {t:"The resettling of Liberated Africans in Sierra Leone begins (1808)", why:"This came 21 years after 1787."},
      {t:"Queensland recruiting of Pacific islanders begins (1863)", why:"This came 55 years after 1808."},
      {t:"Workers begin to go to Samoa’s plantations (1879)", why:"This came 16 years after 1863."},
      {t:"Turner publishes *Africanisms in the Gullah Dialect* (1949)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u7-l3-x4", type:"match", q:"Match each idea about how creoles form to its main claim.", pairs:[
      ["Substrate view","Many grammar patterns come from the first languages of the people who built the creole","Lefebvre (1998) linked Haitian Creole grammar to West African languages."],
      ["Superstrate view","Many features come from the lexifier, including its regional varieties","The question is why creoles differ so much from the lexifier."],
      ["Bioprogram","Children with innate abilities turn a rough pidgin into a full language","This is Bickerton’s (1981) idea."],
      ["Founder principle","The first speakers in a new settlement have a large effect on the language","This is Mufwene’s (1996) idea."]
    ]},
    {id:"e6u7-l3-x5", type:"spot", q:"A classmate wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Scholars agree that Bickerton’s bioprogram explains how all creoles formed.", flag:true, why:"Scholars do not agree. Other scholars have questioned his evidence, and other ideas exist."}, " ", {t:"Tok Pisin, Bislama and Solomon Islands Pijin have a common origin in Pacific plantation work.", flag:false, why:"Correct. The sources describe a shared pidgin that spread from ships and plantations."}, " ", {t:"Kriol is the same thing as Aboriginal English.", flag:true, why:"Linguists describe Kriol as a language with its own grammar, and Aboriginal English as a variety of English."}, " ", {t:"Creole grammar can be simple on some measures and still be a full language.", flag:false, why:"Correct. Even scholars who say creoles have few word endings treat them as full languages."}, " ", {t:"Only English-based creoles exist.", flag:true, why:"French-based and Iberian-based creoles exist, such as Haitian Creole and Papiamentu."}, "”"
    ]},
    {id:"e6u7-l3-x6", type:"number", q:"Huber proposes that Krio grew from the creoles of groups resettled in Sierra Leone between 1787 and 1850. How many years is that?", answer:63, tol:0, unit:"years", why:"1850 − 1787 = 63 years.", wrongs:[{v:53, tol:0, why:"This subtracts 10 too many. Check: 1787 + 63 = 1850."},{v:73, tol:0, why:"This adds 10 too many. Check: 1787 + 63 = 1850."}], hint2:"Subtract 1787 from 1850."},
    M("e6u7-l3-x7","You will hear a speaker whose first language is Papiamentu reading the English paragraph. A classmate says, “From the clip, I can tell whether Papiamentu comes from Portuguese or from Spanish.” Whatever you hear, which reply is the most careful?",1,[
      ["“Yes. The vowels in English will show the answer.”","A reading in English cannot answer a question about the history of another language."],
      ["“No. The clip is English. The question about Portuguese and Spanish is about the history of Papiamentu, and scholars still debate it.”","Right. A clip of English cannot settle a historical question."],
      ["“Yes, if the speaker has a Spanish accent in English.”","An accent in English does not show where a different language came from."],
      ["“No. Papiamentu has no connection to either language.”","Scholars describe a connection to Iberian languages."]
    ], {listen:"e6u7-l3-a3", hint:"The answer does not depend on what the speaker does. A history question needs historical evidence."}),
    {id:"e6u7-l3-x8", type:"explain", q:"In a seminar, a classmate says to Toby Whitlock, “Kriol is just Aboriginal English with bad grammar.” Help Toby give a short, fair answer.", size:"3–5 sentences", prompt:"Toby could say that Kriol …", hint:"Think about what linguists say Kriol is, how it began, and why “bad grammar” is the wrong idea.", points:["Says that Kriol is an English-based creole with its own grammar","Says that Aboriginal English is a variety of English, and that the two are not the same","Says that speakers may use more than one way of speaking","Does not use words such as bad or broken for any variety"], model:"Toby could say that Kriol is an English-based creole spoken in northern Australia, and linguists describe it as a language with its own grammar. It grew from contact pidgins, and children began to learn it as a first language in the early 1900s. Aboriginal English is a different thing: it is a variety of English. Many speakers use more than one way of speaking and choose by setting. So Kriol does not have “bad grammar”. It has a grammar of its own."}
   ],
   apply:{
    intro:"These tasks use the table in this lesson and one free web page. Nothing needs an account.",
    tasks:[
     {t:"Make a map table of five creoles", how:[
       "Choose five languages from the table in this lesson, and include at least one that is not English-based.",
       "Find each place on a map. For each language, write the country or region, the lexifier, and one fact from this lesson.",
       "Write one sentence that explains why the same process can give different results in different places."
     ], write:"Language… place… lexifier… one fact… one sentence…"},
     {t:"Compare two accounts of one creole", how:[
       "Open the history section of the APiCS chapter on [Krio](https://apics-online.info/surveys/15).",
       "Write the two accounts of Krio’s origin in two or three sentences each, with the names of the scholars.",
       "Write one question that a researcher would need to answer to choose between the accounts."
     ], write:"Account one… account two… one question that would help decide…"}
    ],
    proof:"A table of five creoles with places, lexifiers and facts, and a note that compares two accounts of the origin of Krio, with one question for researchers."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”", note:"This section looks at how language and group identity are linked, which helps with the history of creoles."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u7-l4", title:"Status, attitudes and school", minutes:55,
   hook:{q:"What does Article 5 of Haiti’s 1987 constitution say about Haitian Creole?", options:["It says that all Haitians are united by Creole, and that Creole and French are the official languages.","It says that French is the only official language.","It bans Creole from schools.","It says that Creole is a dialect of French."], answer:0, reveal:"**Creole and French are both official languages.** Article 5 also says that all Haitians are united by a common language: Creole. Haiti is one of the places where the law gives a creole an official role."},
   goals:[
     "Tell apart an official language, a national language and a language of instruction, with examples",
     "Report the status of Haitian Creole, Bislama, Tok Pisin and Papiamentu with wording that matches the sources, and say what is unclear",
     "Describe recognition without official status, for example for Nigerian Pidgin and Hawaiʻi Creole English, in careful words",
     "Describe what research says about creoles in school, and what it cannot show",
     "Explain mixed attitudes to creoles, and explain decreolization and the continuum"
   ],
   learn:[
    {h:"Official, national and the language of school", body:[
      {lead:"A language can have three different jobs in law, and the law can give it one, two or all three."},
      "An [[we-official-language|official language]] is a language that a government uses for laws and public business. A [[we-national-language|national language]] is a language that stands for the nation, and the law may give it a symbolic role. A [[we-language-of-instruction|language of instruction]] is the language that teachers use to teach. Unit 6 used these terms for Africa. Here they help us read what each constitution says.",
      {table:[["Place and language","What the source says","Note"],["Haiti, Haitian Creole","“All Haitians are united by a common language: Creole. Creole and French are the official languages of the Republic.” (Article 5, 1987 constitution)","Text as published by the Constitute project"],["Vanuatu, Bislama","The national language is Bislama. The official languages are Bislama, English and French. The principal languages of education are English and French. (Article 3)","Vanuatu became independent in 1980"],["Papua New Guinea, Tok Pisin","Siegel writes that the constitution recognizes it as one of the national languages. Reference works such as Britannica list it as one of three official languages, with English and Hiri Motu. PNG Sign Language was made official in 2015.","Sources describe the legal basis in different ways, so check an official text"],["Aruba, Curaçao and Bonaire, Papiamentu","Reported as official in Aruba since 2003, and in the Netherlands Antilles, which included Curaçao and Bonaire, from 2007","Check the current legal text"]]},
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="18" text-anchor="middle">Three jobs in Vanuatu (Article 3)</text><rect class="d-soft" x="14" y="30" width="312" height="30" rx="6" stroke-width="2"/><text x="24" y="50">Job</text><text x="172" y="50" text-anchor="middle">Bislama</text><text x="238" y="50" text-anchor="middle">English</text><text x="296" y="50" text-anchor="middle">French</text><rect class="d-sage" x="14" y="68" width="312" height="48" rx="6" stroke-width="2"/><text x="24" y="98">Official</text><text x="172" y="98" text-anchor="middle">yes</text><text x="238" y="98" text-anchor="middle">yes</text><text x="296" y="98" text-anchor="middle">yes</text><rect class="d-gold" x="14" y="124" width="312" height="48" rx="6" stroke-width="2"/><text x="24" y="154">National</text><text x="172" y="154" text-anchor="middle">yes</text><text x="238" y="154" text-anchor="middle">no</text><text x="296" y="154" text-anchor="middle">no</text><rect class="d-rose" x="14" y="180" width="312" height="48" rx="6" stroke-width="2"/><text x="24" y="204">Principal language</text><text x="24" y="220" class="s">of education</text><text x="172" y="210" text-anchor="middle">no</text><text x="238" y="210" text-anchor="middle">yes</text><text x="296" y="210" text-anchor="middle">yes</text></svg>', alt:"A grid with three rows and three columns for Bislama, English and French in Vanuatu. Official: yes for all three. National: yes for Bislama, no for English and French. Principal language of education: no for Bislama, yes for English and French.", cap:"The same law gives Bislama two jobs and does not give it the third."},
      "The grid shows why wording matters. A law can make a creole official and national, and still leave the language of school to other languages. Read the text before you say that a language is “recognized”."
    ]},
    {h:"Recognition without official status", body:[
      {lead:"A language can be widely used and valued, and the law can still say little about it."},
      "Nigerian Pidgin has no official status in Nigeria, where English is the official language. Yet it is heard in daily life and in the media. BBC News Pidgin, a BBC news service for West Africa, started in August 2017. In Jamaica, English is the official language, and the Jamaican Language Unit at the University of the West Indies, Mona, works on writing and research for Jamaican.",
      "Hawaiʻi has two official languages, English and Hawaiian. In late 2015, the US Census Bureau released language data from the American Community Survey for 2009 to 2013. For the first time, the Bureau released data on how many people speak Hawaiian and Hawaiian Pidgin at home in Hawaiʻi. The Hawaii State Data Center reports new entries called *Hawaiian Pidgin* and *Pidgin*. This is a count of speakers. It is not a law, and it does not make Pidgin an official language, even though some news headlines used the word *official*. Linguists call the language Hawaiʻi Creole English.",
      "Recognition can take other forms too. These include media, school courses, dictionaries and translations. Translations of parts of the Bible exist in several creoles, including Tok Pisin and Gullah (a New Testament in Gullah was reported as complete in 2005). Each form shows that people value the language, and none of them is the same as an official role."
    ]},
    {h:"Creoles in school", body:[
      {lead:"Many children arrive at school speaking a creole, and the language of teaching is English, French or another language."},
      "When a creole and its lexifier share many words, a teacher can think that a child’s speech is a mistake and not a different system. Jeff Siegel (2007) reviewed work on creoles and minority dialects in education. He renewed the call for more applied work on the obstacles that speakers of such varieties meet in school, and he gave examples from Hawaiʻi.",
      "Education policies differ from place to place. According to Siegel, a reform in Papua New Guinea lets communities choose the language for the first three years of elementary school, and many have chosen Tok Pisin. In Haiti, the Bernard Reform of the late 1970s (sources date it 1978 or 1979) tried to use Creole as the language of teaching in the first four years of primary school. One description says that, overall, it was not very successful. In Hawaiʻi, reports on one program, the Kamehameha Early Education Program (KEEP), describe changes in classroom talk and gains in reading, but they come from one program in one place. In Sierra Leone, Malcolm Finney writes that Krio was left out of early studies of local languages in school, and that pupils who used it at school could face strong discipline.",
      "People who support more use of the home language say that children learn ideas best in a language they know. People who are cautious say that parents want English or French for exams and jobs, and that materials, spelling and teacher training are often missing. Both groups want children to succeed.",
      {warn:"The evidence is limited and mixed. It comes from particular programs in particular places. A careful answer does not say that research shows that one approach always works."}
    ]},
    {h:"Attitudes and identity", body:[
      {lead:"Many people feel two things at once about a creole: pride and a low opinion that others have taught them."},
      "In his description of Krio, Malcolm Finney writes that Krio is a symbol of identity for Krios and many other Sierra Leoneans. He adds that it is also seen as a distortion, or an inferior form, of English. Siegel reports a similar mix for Tok Pisin. He writes that many people still feel that Tok Pisin is inferior to English, and he also calls it an important language of Papua New Guinean identity.",
      "These attitudes come from history and power, and not from grammar. A language does not have a low status because of its rules. It has a low status when the people who speak it have had less power. Unit 9 looks at this in detail. Speakers also use their whole repertoire ([[we-repertoire]]). A person can use Tok Pisin with a neighbor, English at work and the home language with the family, and each choice is skilled."
    ]},
    {h:"Decreolization and the continuum", body:[
      {lead:"Where a creole and its lexifier meet every day, speech often changes along a range between them."},
      "In Unit 6 you met DeCamp’s (1971) description of a post-creole continuum in Jamaica ({{we-caribbean-english}}). The two ends are the *basilect*, which is furthest from English, and the *acrolect*, which is closest. [[we-decreolization|Decreolization]] is the idea that a creole moves toward its lexifier through contact with school, media and the standard language. Bickerton (1975) studied this process in Guyana.",
      {fig:'<svg viewBox="0 0 340 250"><text x="170" y="18" text-anchor="middle">A continuum between creole and English</text><rect class="d-sage" x="30" y="44" width="280" height="18" rx="9" stroke-width="2"/><text x="30" y="84">Basilect</text><text class="s" x="30" y="100">furthest from English</text><text x="170" y="84" text-anchor="middle">Mesolect</text><text class="s" x="170" y="100" text-anchor="middle">the wide middle</text><text x="310" y="84" text-anchor="end">Acrolect</text><text class="s" x="310" y="100" text-anchor="end">closest to English</text><circle class="d-gold" cx="70" cy="53" r="9" stroke-width="2"/><circle class="d-lup" cx="170" cy="53" r="9" stroke-width="2"/><circle class="d-rose" cx="270" cy="53" r="9" stroke-width="2"/><rect class="d-panel" x="14" y="124" width="312" height="104" rx="8" stroke-width="2"/><text x="170" y="150" text-anchor="middle">One speaker moves along the line</text><text class="s" x="170" y="174" text-anchor="middle">with friends at home: nearer the basilect</text><text class="s" x="170" y="194" text-anchor="middle">in a job interview: nearer the acrolect</text><text class="s" x="170" y="214" text-anchor="middle">the setting changes the position</text></svg>', alt:"A horizontal bar with three points: basilect on the left, furthest from English, mesolect in the middle, and acrolect on the right, closest to English. A box below says that one speaker moves along the line: with friends at home nearer the basilect, in a job interview nearer the acrolect.", cap:"The continuum is a model. One speaker can use many points on it."},
      "Decreolization has limits as an idea. It describes one direction, but speakers move both ways, by setting and by listener. Some scholars see the continuum as a model of how speakers use two systems that touch, and not as a slide in one direction. So treat decreolization as one description among others, and do not use it to say that a creole is “disappearing” or “improving”.",
      {key:"Status is a matter of law, school and attitude, and each one needs separate evidence. A creole can be official, widely used, valued and taught, or any mix of these. None of this changes the fact that it is a full language."}
    ]}
   ],
   try:[
    M("e6u7-l4-x1","Which statement about Article 3 of the Vanuatu constitution, as quoted in this lesson, is correct?",1,[
      ["Bislama is the only official language.","The text names three official languages."],
      ["Bislama is the national language, and it is one of three official languages.","Right. English and French are the other two."],
      ["Bislama is a principal language of education.","The text names English and French as the principal languages of education."],
      ["Bislama is not mentioned in the constitution.","It is named in Article 3."]
    ]),
    {id:"e6u7-l4-x2", type:"sort", q:"According to this lesson, which of these languages has an official role in law, and which has none?", buckets:["Official role in law","No official status"], items:[
      {t:"Haitian Creole in Haiti", b:0, why:"Article 5 of the 1987 constitution names it as an official language with French."},
      {t:"Bislama in Vanuatu", b:0, why:"Article 3 names it as the national language and an official language."},
      {t:"Papiamentu in Aruba", b:0, why:"It is reported as official in Aruba since 2003."},
      {t:"Nigerian Pidgin in Nigeria", b:1, why:"It has no official status, and English is the official language."},
      {t:"Hawaiʻi Creole English in Hawaiʻi", b:1, why:"English and Hawaiian are the official languages. A Census category is not a law."},
      {t:"Krio in Sierra Leone", b:1, why:"English is the official language, and Krio is widely used as a common language."}
    ]},
    {id:"e6u7-l4-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Papua New Guinea becomes independent (1975)", why:"This is the earliest date in the list."},
      {t:"Vanuatu becomes independent and has a constitution (1980)", why:"This came five years after 1975."},
      {t:"Haiti’s constitution names Creole and French as official languages (1987)", why:"This came seven years after 1980."},
      {t:"Papiamentu is reported as official in Aruba (2003)", why:"This came 16 years after 1987."},
      {t:"BBC News Pidgin starts (2017)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u7-l4-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Official language","A language that a government uses for laws and public business","The law decides which languages have this role."],
      ["National language","A language that stands for the nation, often with a symbolic role","Bislama has this role in Vanuatu."],
      ["Language of instruction","The language that teachers use to teach","In Vanuatu, English and French are the principal ones."],
      ["Decreolization","The idea that a creole moves toward its lexifier","It is one description among others, and scholars discuss its limits."],
      ["Post-creole continuum","A range of speech between a creole and the standard language","DeCamp (1971) described it for Jamaica."]
    ]},
    {id:"e6u7-l4-x5", type:"spot", q:"A student wrote these notes after Lesson 4. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"A news headline said that Pidgin is official, so it is an official language of Hawaiʻi.", flag:true, why:"A Census category is not a law. English and Hawaiian are the official languages of Hawaiʻi."}, " ", {t:"Haiti’s constitution names Creole and French as official languages.", flag:false, why:"Correct. This is Article 5 of the 1987 constitution."}, " ", {t:"Research shows that teaching in a creole always raises test scores.", flag:true, why:"The evidence is limited and mixed, and it comes from particular programs."}, " ", {t:"Many speakers feel pride in a creole and also hear that it is “inferior”.", flag:false, why:"Correct. Finney and Siegel both describe this mix."}, " ", {t:"Decreolization is a one-way path that every speaker follows.", flag:true, why:"Speakers move along the continuum in both directions, depending on the setting."}, "”"
    ]},
    {id:"e6u7-l4-x6", type:"number", q:"Vanuatu became independent in 1980, and Haiti’s constitution names Creole as official in 1987. How many years were there between the two dates?", answer:7, tol:0, unit:"years", why:"1987 − 1980 = 7 years.", wrongs:[{v:17, tol:0, why:"This adds 10 too many. Check: 1980 + 7 = 1987."},{v:6, tol:0, why:"This is one year short. Check: 1980 + 7 = 1987."}], hint2:"Subtract 1980 from 1987."},
    M("e6u7-l4-x7","You will hear a speaker whose first language is Tok Pisin reading the English paragraph. A classmate says, “This speaker’s English must be poor, because Tok Pisin is a pidgin.” Whatever you hear, which reply is the most careful?",3,[
      ["“Yes. A pidgin speaker cannot learn English well.”","This is a stereotype, and nothing in the lesson supports it."],
      ["“No. The speaker’s English must be perfect, because Tok Pisin is a creole.”","The label of a first language does not predict skill in English either way."],
      ["“Yes. The clip will show the problems that come from pidgins.”","A clip shows how one person speaks English, and it cannot show problems that come from a label."],
      ["“A first language does not show how well someone uses English. This is one reading by one person, and I will describe what I hear without judging.”","Right. It stays within the evidence, and it does not rank."]
    ], {listen:"e6u7-l4-a1", hint:"The answer does not depend on what the speaker does. Look for the reply that does not judge a person from a label."}),
    {id:"e6u7-l4-x8", type:"explain", q:"A parent says to a teacher, “If my daughter uses Pidgin at school, she will never learn good English.” Write a short, kind answer that the teacher could give.", size:"3–5 sentences", prompt:"The teacher could say that …", hint:"Think about the parent’s wish, what research can and cannot show, and the idea that a child can learn English and keep a home language.", points:["Shows that the teacher understands and respects the parent’s wish for English","Says that research on creoles in school is limited and mixed, and does not promise one result","Says that a child can learn English and also keep the home language","Does not call the home language broken or bad"], model:"The teacher could say that she understands the wish for strong English, because English matters for exams and jobs. Research on creoles in school is limited and mixed, so nobody can promise one result. Some programs have used the home language to help children learn, and many children learn English well while they keep the language of their home. The aim is that her daughter learns English and is not made to feel that her home language is wrong. Both can grow together."}
   ],
   apply:{
    intro:"These tasks use two free web pages and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read two constitutions", how:[
       "Open [Haiti’s constitution](https://www.constituteproject.org/constitution/Haiti_2012?lang=en) and find Article 5. Then open [Vanuatu’s constitution](https://www.constituteproject.org/constitution/Vanuatu_2013) and find Article 3.",
       "Copy the sentences about languages. Under each one, write which of the three jobs it names: official, national, language of instruction.",
       "Write two sentences about one difference between the two texts."
     ], write:"Haiti… three jobs named… Vanuatu… three jobs named… one difference…"},
     {t:"Write a fair summary of a school-language debate", how:[
       "Choose one place from Lesson 4: Papua New Guinea, Haiti or Hawaiʻi.",
       "Write about 120 words. Give one reason that supporters give, one reason that cautious people give, and one thing that the evidence cannot show.",
       "Check your text for words that judge a language, such as *broken* or *bad*, and change any that you find."
     ], write:"Place… supporters say… cautious people say… evidence cannot show…"}
    ],
    proof:"A note that sorts the language sentences of two constitutions into the three jobs, and a fair summary of about 120 words with no judging words."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"Read it again after this lesson. It helps you see how one speaker can move between ways of speaking, depending on the setting."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u7-l5", title:"Listening lab: five speakers, one paragraph", minutes:60,
   hook:{q:"A speaker’s first language is Krio. What can you safely say about how this person reads an English paragraph?", options:["Nothing certain in advance. Listen and describe what you hear.","It will contain Krio grammar.","It will be hard to understand.","It will sound the same as every other Krio speaker."], answer:0, reveal:"**Nothing certain in advance.** A first language can influence how a person says English words, but speakers differ, and the paragraph is English. Listening and describing is a better method than guessing from a label."},
   goals:[
     "Say what a first language can and cannot tell you about a speaker’s English",
     "Explain why a reading of English cannot show the grammar of a creole",
     "Use a short routine to listen to five speakers and describe each one without ranking",
     "Compare the clips on one feature as a tendency, and add a limit to each claim",
     "Write a careful description with three parts: what I hear, what is typical, and a reminder that one speaker is one person"
   ],
   learn:[
    {h:"What you will hear, and what you will not", body:[
      {lead:"In this lab, you hear five people read English. You do not hear a creole."},
      "All five speakers read the same paragraph, “Please call Stella”, for the Speech Accent Archive. So you compare like with like. The archive gives each speaker’s first language, the age at which English began and the places where the person has spent time. It does not name a variety of English.",
      {table:[["Place","What the archive says"],["Madang, Papua New Guinea","Tok Pisin first, also Kuanua and Manem. English from age 4 at school. Six years in the US."],["Port Moresby, Papua New Guinea","English first, also Tok Pisin. Time in Papua New Guinea, the UK and the US."],["Freetown, Sierra Leone","Krio first, also Mandingo and Temne. English from age 5. Time in Sierra Leone and the US."],["Willemstad, Curaçao","Papiamentu first, also Spanish and Dutch. English from age 5. Five years in the US."],["Kingston, Jamaica","English first, also Patois (Jamaican Creole). Always in Jamaica."]]},
      "The paragraph is read aloud in English. So the clips show how one person says English words. They do not show grammar, small words such as *de* or *bin*, or any mixing of languages. A listener who says “I can hear the creole” is describing an idea, and not the recording."
    ]},
    {h:"What a first language can and cannot tell you", body:[
      {lead:"A first language is a useful fact, and it is not a prediction."},
      {table:[["It can suggest","It cannot show"],["Which languages the person knows","How skilled the person is in English"],["When and where the person learned English","How easy the person is to understand for you"],["Possible influences on English sounds, as tendencies","How the person speaks the creole"],["A reason to listen with care","What a whole country sounds like"]]},
      {fig:'<svg viewBox="0 0 340 262"><text x="170" y="18" text-anchor="middle">One reading of English</text><rect class="d-gold" x="60" y="30" width="220" height="40" rx="8" stroke-width="2"/><text x="170" y="55" text-anchor="middle">A speaker reads English aloud</text><path class="d-ink" d="M110 72L90 100" fill="none" stroke-width="2"/><path class="d-inkf" d="M84 90L86 104L98 96z"/><path class="d-ink" d="M230 72L250 100" fill="none" stroke-width="2"/><path class="d-inkf" d="M242 96L254 104L256 90z"/><rect class="d-sage" x="14" y="106" width="150" height="140" rx="8" stroke-width="2"/><text x="89" y="130" text-anchor="middle">A clip can show</text><text class="s" x="89" y="154" text-anchor="middle">English sounds</text><text class="s" x="89" y="174" text-anchor="middle">how one person</text><text class="s" x="89" y="190" text-anchor="middle">says one word</text><text class="s" x="89" y="214" text-anchor="middle">what you hear,</text><text class="s" x="89" y="230" text-anchor="middle">in plain words</text><rect class="d-rose" x="176" y="106" width="150" height="140" rx="8" stroke-width="2"/><text x="251" y="130" text-anchor="middle">A clip cannot show</text><text class="s" x="251" y="154" text-anchor="middle">creole grammar</text><text class="s" x="251" y="174" text-anchor="middle">skill in English</text><text class="s" x="251" y="194" text-anchor="middle">a whole country</text><text class="s" x="251" y="214" text-anchor="middle">which feature has</text><text class="s" x="251" y="230" text-anchor="middle">which source</text></svg>', alt:"A diagram with a box at the top, A speaker reads English aloud, and two boxes below. The left box, A clip can show, lists English sounds, how one person says one word, and what you hear in plain words. The right box, A clip cannot show, lists creole grammar, skill in English, a whole country, and which feature has which source.", cap:"A reading of English shows English sounds. It does not show a creole."},
      "Speakers differ a great deal. Two people with the same first language can sound very different in English, because of schooling, age, travel and the people they talk with. Four of the five speakers have spent time in the US, and some features may come from there. One clip cannot show which feature has which source.",
      "Understanding also depends on the listener. Unit 5 described three levels of understanding: [[we-intelligibility|intelligibility]], [[we-comprehensibility|comprehensibility]] and [[we-interpretability|interpretability]] ({{we-intelligibility-respect}}). When you do not understand a speaker, the problem is a gap between speaker and listener. It is not a fault in the speaker."
    ]},
    {h:"A listening routine, and a cameo", body:[
      {lead:"A short routine helps you describe a voice without judging it."},
      "Mariya Seto, a university student from the island of Shiojima, studies English interpreting. Interpreters meet many kinds of speakers, and some will use English as one of several languages, with a pidgin or a creole as another. Mariya cannot guess a person’s English from a list of languages. She listens, describes and checks. Here is a routine in the same spirit.",
      {ol:[
        "**Listen for the gist.** What is the speaker doing: reading, explaining, asking?",
        "**Choose one feature.** For example, the *r* after a vowel, or the *th* in *thick*.",
        "**Describe it in plain words.** Write “I hear an *r* in *store*” or “I am not sure”.",
        "**Compare it with a typical pattern and add a limit.** Say what descriptions of the place say, and remind yourself that one speaker is one person.",
        "**In a real conversation, check.** Say what you understood, and ask, “Do you mean …?”"
      ]},
      "The last step is respectful, because it treats the problem as shared. It is also how a good interpreter works: she does not guess."
    ]},
    {h:"The listening lab", body:[
      {lead:"Listen to each clip twice, once for the gist and once for one feature."},
      "Write what you hear in plain words. If you are not sure, write “not sure”. There is no single right answer for any clip, and a note that says “not sure” is a good note. Use the same two or three features for every speaker, so that your notes can be compared. Do not try to copy a voice, and do not guess which first language you think the speaker has. The table above already tells you.",
      "Keep one more rule in mind. The clips are the work of real people who gave their time to the archive. Describe them as you would like to be described: with care, with facts, and without jokes about how a person sounds.",
      {ex:"Speaker 1: Madang, Papua New Guinea. Tok Pisin is the first language, and the speaker has spent six years in the US. Listen for the *r* in *store* and *her*, and the *th* in *thick*.", label:"Speaker 1: Madang", listen:"e6u7-l5-a1"},
      {ex:"Speaker 2: Port Moresby, Papua New Guinea. English is the first language, and the speaker also uses Tok Pisin. Listen for the *r* in *store* and *her*, and the vowel in *ask*.", label:"Speaker 2: Port Moresby", listen:"e6u7-l5-a2"},
      {ex:"Speaker 3: Freetown, Sierra Leone. Krio is the first language, and English began at age five. Listen for the *r* in *store* and *her*, and the end of *thick*.", label:"Speaker 3: Freetown", listen:"e6u7-l5-a3"},
      {ex:"Speaker 4: Willemstad, Curaçao. Papiamentu is the first language, and the speaker has spent five years in the US. Listen for the *r* in *store* and *her*, and the vowel in *snack*.", label:"Speaker 4: Willemstad", listen:"e6u7-l5-a4"},
      {ex:"Speaker 5: Kingston, Jamaica. English is the first language, and the speaker also uses Patois. Listen for the *r* in *store* and *her*, and the vowel in *ask*. This is the same speaker as one of the Unit 6 clips.", label:"Speaker 5: Kingston", listen:"e6u7-l5-a5"},
      "Now compare your notes with clips from Unit 5 (for example Singapore or Colombo) and Unit 6 (for example Lagos or Nairobi). You may find that a feature is clear in some speakers and weak in others. Any result is a good result. Your task is to listen and describe, and not to prove a theory."
    ]},
    {h:"Respect, not ranking", body:[
      {lead:"A careful description has three parts, and none of them ranks anyone."},
      {table:[["Careful","Careless"],["I did not hear an *r* in *store*. This is one speaker, and the clip is English, so it cannot show the creole.","The speaker’s pidgin makes the English worse."],["I needed two listenings for this clip.","This speaker is hard to understand."]]},
      "The careless notes put the problem in the speaker or in the speaker’s first language. The careful notes put it in the listening, and they stay within the evidence.",
      "You have now met pidgins and creoles as full languages. They have rules, histories, official roles in some places, mixed attitudes in many, and speakers who often use more than one language every day. Unit 8 goes on to English as a shared language, where people from many language backgrounds use English with each other and adjust to help understanding.",
      {key:"A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Describe, and do not rank. A reading of English never shows a creole."}
    ]}
   ],
   try:[
    M("e6u7-l5-x1","A classmate says, “The speaker’s first language is Papiamentu, so the English will be hard to understand.” Which reply is the most accurate?",2,[
      ["“Yes. A creole as a first language always makes English harder.”","No such rule exists. Speakers differ a great deal."],
      ["“No. It will always be easy, because creole speakers learn English well.”","This is also a prediction from a label, and it can be wrong."],
      ["“A first language cannot predict this. How easy a speaker is to understand depends on the listener, the topic and the situation, as well as the speaker.”","Right. Understanding is shared between speaker and listener."],
      ["“The first language does not matter at all for how people speak English.”","A first language can influence English sounds as a tendency, so this goes too far."]
    ]),
    {id:"e6u7-l5-x2", type:"sort", q:"Can a recording of an English paragraph show each of these things?", buckets:["A clip can show it","A clip cannot show it"], items:[
      {t:"How one speaker pronounces the *r* in *store*", b:0, why:"This is a sound in English words, and it can be heard."},
      {t:"The grammar of Krio", b:1, why:"The paragraph is English, so Krio grammar does not appear."},
      {t:"How one speaker says the *th* in *thick*", b:0, why:"This is a sound in an English word."},
      {t:"How the speaker uses *de* or *bin* in a creole", b:1, why:"These are creole words, and the reader says English words."},
      {t:"How everyone from Jamaica speaks English", b:1, why:"One speaker is one person and cannot stand for a country."},
      {t:"How one speaker pronounces the *th* in *these*", b:0, why:"This is a sound in an English word, and it can be heard."}
    ]},
    {id:"e6u7-l5-x3", type:"order", q:"Put the steps of the listening routine in the order in which you do them.", items:[
      {t:"Listen for the gist", why:"First, find out what the speaker is doing."},
      {t:"Choose one feature to listen for", why:"One feature at a time is easier than many."},
      {t:"Describe what you hear in plain words", why:"Write what you hear, or write “not sure”."},
      {t:"Compare with a typical pattern and add a limit", why:"A claim needs a comparison and a limit."},
      {t:"In a real conversation, check what you understood", why:"The last step keeps the problem shared."}
    ]},
    {id:"e6u7-l5-x4", type:"match", q:"Match each piece of archive information to what it tells you.", pairs:[
      ["First language","The language that the speaker learned first, and not a variety of English","It is a fact about the person, and not a prediction."],
      ["English from age 5 at school","When the person began to learn English","It does not show how the person uses English now."],
      ["Six years in the US","A reminder that some features may come from there","One clip cannot show which feature has which source."],
      ["Also uses Patois","The speaker knows Jamaican Creole too","The paragraph is English, so the creole is not in the clip."]
    ]},
    {id:"e6u7-l5-x5", type:"spot", q:"A classmate writes these notes after the lab. Tap each note that **ranks, overgeneralizes or judges**.", ask:"ranks or overgeneralizes", parts:[
      "“", {t:"The Freetown speaker’s English is worse because Krio is a creole.", flag:true, why:"This judges a person from a label. A first language does not show how well someone uses English."}, " ", {t:"I could not hear a strong *r* in *store* in the Kingston recording.", flag:false, why:"Fine. It reports what the classmate heard from one speaker."}, " ", {t:"I could hear Tok Pisin grammar in the Madang clip.", flag:true, why:"The clip is English, so Tok Pisin grammar does not appear in it."}, " ", {t:"The Willemstad speaker has spent five years in the US, so some features may come from there.", flag:false, why:"Fine. It is a careful reminder that the speaker has spent time in more than one place."}, " ", {t:"All Jamaicans pronounce *store* like the Kingston speaker.", flag:true, why:"One speaker cannot show how a whole country speaks."}, "”"
    ]},
    {id:"e6u7-l5-x6", type:"number", q:"The archive lists a pidgin or creole as the first language for some of the five speakers. How many of the five have Tok Pisin, Krio or Papiamentu as the first language?", answer:3, tol:0, unit:"speakers", why:"Madang (Tok Pisin), Freetown (Krio) and Willemstad (Papiamentu). The other two speakers have English as the first language.", wrongs:[{v:5, tol:0, why:"This counts all five speakers. Two of them have English as the first language."},{v:2, tol:0, why:"You may have missed one. Count Madang, Freetown and Willemstad."}], hint2:"Check the first language of each speaker in the table."},
    M("e6u7-l5-x7","A listener hears the Kingston recording and says, “I can hear Jamaican Creole in this clip.” The archive says that the speaker also uses Patois. Whatever you hear, which reply is the most careful?",1,[
      ["“Yes. The speaker also uses Patois, so it must be in the clip.”","A person can know a creole and still read an English paragraph in English."],
      ["“The clip is a reading of an English paragraph. I can describe how one person says English words, and I cannot hear a creole in it.”","Right. It stays within the evidence."],
      ["“No. People from Kingston never use the creole.”","The archive says that this speaker also uses Patois, and many Jamaicans use both."],
      ["“Yes, because every Jamaican speaker has a creole accent in English.”","This is an overgeneralization, and the clip cannot show it."]
    ], {listen:"e6u7-l5-a6", hint:"The answer does not depend on what the speaker does. A reading of English is English."}),
    {id:"e6u7-l5-x8", type:"explain", q:"Mariya Seto, a student of English interpreting, will talk with a visitor from Papua New Guinea. The visitor’s first language is Tok Pisin, and the visitor speaks English with her. Describe how Mariya can listen well and respectfully.", size:"4–6 sentences", prompt:"Mariya could start by …", hint:"Think about not guessing from a first language, listening for the gist, and checking what she understood.", points:["Says that she should not guess the visitor’s English from the first language","Says that she can listen for the gist first","Says that she can check what she understood and ask politely","Treats any difficulty as shared between speaker and listener"], model:"Mariya could start by remembering that a first language does not predict how someone speaks English. She can listen for the gist first, and then listen for the details. If she is not sure, she can check by saying what she understood and asking, “Do you mean …?” Any difficulty is a gap between speaker and listener, and it is not a fault of the visitor. She does not need to say anything about Tok Pisin, and she should not treat it as a reason for a problem."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Make a listening table", how:[
       "Make a table with five rows, one for each speaker. Add three columns: the *r* after a vowel, the vowel in *ask* or *snack*, and one more feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “r pronounced”, “short vowel” or “not sure”.",
       "Write two sentences about your table. Use the words *typical* and *one speaker*."
     ], write:"My table… two sentences with typical and one speaker…"},
     {t:"Tell a friend about pidgins and creoles", how:[
       "Write five sentences that you could say to a friend who thinks that a creole is broken English. Use one example from Lesson 2.",
       "Check each sentence. Remove any word that judges a language or a speaker.",
       "Read your sentences aloud once. Change any sentence that is hard to say."
     ], write:"Sentence 1… sentence 2… sentence 3… sentence 4… sentence 5…"}
    ],
    proof:"A table of five speakers with careful notes and two sentences that use *typical* and *one speaker*, and five clear sentences for a friend, with one example from Lesson 2."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”", note:"Read it before the lab if you want to think about how language and group identity are linked, and about why a label is not a prediction."}
   ]
  }
  ],
  checkpoint:["e6u7-q03","e6u7-q06","e6u7-q09","e6u7-q12","e6u7-q17","e6u7-q21","e6u7-q26","e6u7-q30","e6u7-q34","e6u7-q38","e6u7-q42","e6u7-q45"],
  codex:[
   {id:"we-pidgins-and-creoles", title:"Pidgins and creoles", aka:["contact language","expanded pidgin","lexifier","substrate","broken English myth"], tags:["world englishes","pidgins and creoles"],
    summary:"A pidgin is a contact language with no native speakers at first. A creole is a language that children learn first. Both have grammar, and the labels describe use, not quality.",
    levels:{
     starter:[
      "A **pidgin** starts when people with no shared language need to work or trade together. Each person has another first language, so the pidgin has no native speakers at first. A **creole** is a contact language that children of a community learn as a first language. An **expanded pidgin** has grown to wide use and does many of the jobs of a full language.",
      "Most of the words come from the **lexifier**. For Tok Pisin, Krio and Jamaican Creole, the lexifier is English. The first languages of the people who built the language are its **substrate**, and they may shape its grammar.",
      "Many people call a creole “broken English”. This is wrong. A creole has regular grammar. Tok Pisin, for example, has two words for *we*, one that includes the listener and one that does not. English has one.",
      {key:"Pidgin, expanded pidgin and creole are labels for how a language is used and who learns it first. They are not labels for quality."}
     ],
     builder:[
      "Pidgins grow where groups with no shared language meet for a long time: ports, ships, plantations and mission stations. Many pidgins disappear when the contact ends. A few grow and become main languages of whole countries.",
      {table:[["Label","Who learns it first?","Jobs"],["Pidgin","Nobody","Narrow"],["Expanded pidgin","Some speakers","Wide"],["Creole","Children of a community","All the jobs of a full language"]]},
      "Hall (1966) described a pidgin–creole life cycle, and Mühlhäusler (1986) described stages within the pidgin part: jargon, stable pidgin and expanded pidgin. The cycle is a map of ideas. It is not a timetable, and many pidgins never become creoles.",
      "The labels are used in different ways by different scholars. Britannica calls Tok Pisin an expanded pidgin “as complex as a creole”. Siegel notes that many children learn it first, and that it is still debatable whether to call it a creole. Nigerian Pidgin is also described with all three labels.",
      "Many pidgins and creoles grew in settings of forced labor, including slavery and the Pacific labor trade. The languages are the work of the people who built them."
     ],
     pro:[
      "Scholars debate the sources of creole grammar. Substrate views stress the first languages of the founders (for example Lefebvre 1998). Superstrate views stress the lexifier and its nonstandard varieties. Bickerton (1981) proposed a bioprogram: children shape a rough pidgin into a language using innate abilities. Mufwene (1996) proposed the founder principle, which stresses the first speakers in a settlement. Many scholars accept that several factors worked together.",
      "McWhorter (1998) proposed a creole prototype with few or no word endings, little or no tone that carries meaning and easy-to-see word formation. In 2001 he argued that creole grammars are among the simplest in the world. Gil (2001) and DeGraff (2003) reject the claim. No single measure captures the complexity of a whole language.",
      "Terms such as *substrate* and *superstrate* are not used in the same way by all authors, and some scholars avoid them for creoles. When you read a source, check how it defines the labels it uses. For examples with glosses, see the Atlas of Pidgin and Creole Language Structures (APiCS), which describes dozens of languages with the same questions.",
      "Cross-link: Unit 6 (Jamaican Creole and the continuum), Unit 2 (colonial history) and Unit 9 (attitudes)."
     ]},
    related:["we-tok-pisin","we-krio","we-creole-genesis","we-creole-status-school","we-caribbean-english"],
    read:[{book:"eling", where:"Chapter 1, Human Language and Language Science, section 1.4 “Thinking about standards and “proper” grammar”"}],
    sources:[{t:"Tok Pisin (Jeff Siegel, Sato Center, University of Hawaiʻi)", url:"https://hawaii.edu/satocenter/langnet/definitions/tokpisin.html"},{t:"Tok Pisin (Encyclopaedia Britannica)", url:"https://www.britannica.com/topic/Tok-Pisin"},{t:"Atlas of Pidgin and Creole Language Structures Online (APiCS)", url:"https://apics-online.info/"}],
    checked:"2026-11"},
   {id:"we-tok-pisin", title:"Tok Pisin", aka:["Melanesian Pidgin","New Guinea Pidgin","Neo-Melanesian"], tags:["world englishes","pidgins and creoles","pacific"],
    summary:"Tok Pisin is an English-based expanded pidgin, or creole in some descriptions, and a common language of Papua New Guinea. It has inclusive and exclusive *we*, the verb ending -im, the marker i and -pela on adjectives.",
    levels:{
     starter:[
      "**Tok Pisin** is a language of Papua New Guinea. It grew from a pidgin used on plantations in the Pacific in the 1800s. Most of its words come from English, but its grammar is its own.",
      "It has two words for *we*. *Yumi* includes the listener, and *mipela* does not. A verb that has an object often ends in *-im*, as in *lukim* (“see”). A small word *i* marks the start of the predicate. Many adjectives end in *-pela*, as in *bikpela* (“big”).",
      "People use Tok Pisin on radio and television, in churches and in parliament. Many people in Papua New Guinea use it as a common language between speakers of different first languages. Many children whose parents have different first languages now learn it first.",
      {key:"Tok Pisin is a full language with regular grammar, and it is not English with something missing."}
     ],
     builder:[
      "According to Siegel, recruiting of island workers for Queensland plantations began in 1863, and workers went to Samoa’s plantations from 1879 to 1912. A shared pidgin grew on ships and plantations, and Tok Pisin, Bislama and Solomon Islands Pijin share this origin. Tok Pisin also has words from German and from Samoan.",
      {table:[["Pattern","Example","Source"],["*-im* on verbs","*luk* → *lukim*; *kuk* → *kukim*","Wikipedia; Britannica"],["marker *i*","*Wara i kol.* (The water is cold.)","Wikibooks"],["*-pela*","*bikpela haus*, *Haus i bikpela*","Wikibooks"],["inclusive *yumi*","*Yumi ol Papua New Guinea.* (We Papua New Guineans.)","Woolford 1979"]]},
      "Verhaar (1995) lists singular, dual, trial and plural forms: *mi*, *mitupela*, *mitripela*, *mipela* for the exclusive series and *yumitupela*, *yumitripela*, *yumi* for the inclusive series. Spelling differs a little between sources.",
      "Siegel writes that the constitution recognizes Tok Pisin as one of the national languages. Britannica and many other reference works list it as one of three official languages, with English and Hiri Motu, and PNG Sign Language was made official in 2015. The legal basis is described in different ways in different sources."
     ],
     pro:[
      "Siegel reports that more than 90 percent of speakers have another first language, but many children whose parents use Tok Pisin as their common language learn it first. He calls it debatable whether Tok Pisin can be called a creole. Britannica uses *expanded pidgin* and notes that it is as complex as a creole.",
      "Examples with glosses appear in Woolford (1979, *Aspects of Tok Pisin Grammar*, Pacific Linguistics B-66), in Verhaar (1995) and in Mihalic (1971, *The Jacaranda Dictionary and Grammar of Melanesian Pidgin*). Mihalic’s book is the classic dictionary and grammar. When you quote an example, cite the original book and check the spelling there.",
      "The inclusive and exclusive distinction is recorded for Tok Pisin in APiCS (feature 15, by Geoff Smith and Jeff Siegel). The distinction is common in the languages of the Pacific, and scholars often link it to the substrate. This is a view that you should check in the literature.",
      "Education reform in Papua New Guinea lets communities choose the language for the first three years of elementary school, according to Siegel, and many have chosen Tok Pisin. Check current policy documents before you quote a detail.",
      "Cross-link: Lessons 1 to 4 of this unit."
     ]},
    related:["we-pidgins-and-creoles","we-creole-genesis","we-creole-status-school"],
    sources:[{t:"Tok Pisin (Jeff Siegel, Sato Center, University of Hawaiʻi)", url:"https://hawaii.edu/satocenter/langnet/definitions/tokpisin.html"},{t:"Tok Pisin (Encyclopaedia Britannica)", url:"https://www.britannica.com/topic/Tok-Pisin"},{t:"APiCS: Inclusive/exclusive distinction in independent personal pronouns, Tok Pisin", url:"https://apics-online.info/valuesets/22-15"},{t:"Aspects of Tok Pisin Grammar (Woolford 1979), Pacific Linguistics B-66, ANU repository", url:"https://openresearch-repository.anu.edu.au/bitstream/1885/145060/1/PL-B66.pdf"}],
    checked:"2026-11"},
   {id:"we-krio", title:"Krio, Sierra Leone", aka:["Sierra Leone Krio"], tags:["world englishes","pidgins and creoles","west africa"],
    summary:"Krio is an English-based creole and the common language of Freetown and much of Sierra Leone. Scholars give two accounts of its origin, and small words such as bin, dɔn, di and go mark time and aspect.",
    levels:{
     starter:[
      "**Krio** is the main language of Freetown, the capital of Sierra Leone. It is an English-based creole, which means that most of its words come from English and that its grammar is its own. English is the official language of Sierra Leone, and many people use Krio as a common language.",
      "Krio marks time with small words before the verb. In *A bin du am* (“I did it”), *bin* marks an earlier time. In *Wi go ebul du am tumara* (“We will be able to do it tomorrow”), *go* marks a later time.",
      "Some people call Krio “broken English”, and others see it as a symbol of identity. Both views exist, and linguists describe it as a language with regular grammar.",
      {key:"Krio is a full language. Its small words are rules, and not mistakes."}
     ],
     builder:[
      "The sentences below come from Malcolm Finney’s chapter in APiCS.",
      {table:[["Krio","Meaning","Small word"],["*A bin du am.*","I did it.","*bin*: earlier"],["*A bin dɔn du am.*","I had done it.","*dɔn*: finished"],["*Di maŋgro di rɛp.*","The mango is getting ripe.","second *di*: in progress"],["*Wi go ebul du am tumara.*","We will be able to do it tomorrow.","*go*: later"],["*pikin dɛm*","children","*dɛm*: plural"]]},
      "Two accounts of the origin exist. Huber proposes that Krio grew from the creoles of groups resettled on the Sierra Leone peninsula between 1787 and 1850, from the Black Poor in 1787 to the Liberated Africans resettled from 1808. Hancock argues that it comes from a creole of the Upper Guinea coast from the 1600s.",
      "Finney describes mixed attitudes. Krio is a symbol of identity for many Sierra Leoneans, and it is also seen as a distortion, or an inferior form, of English."
     ],
     pro:[
      "APiCS gives Krio about 350,000 native speakers, and says that probably more than four million people use it as a common language. The numbers are estimates without a stated year, so use them with care. Finney also reports that work on a standard spelling is still going on.",
      "Finney’s page for the Sato Center reports that Krio was left out of pilot studies of local languages in formal education, because few people spoke it as a first language. It adds that its use by schoolchildren could lead to strong discipline. Treat this as one description and check the current situation.",
      "The letters ɔ and ɛ are part of the writing that linguists and many writers use. Other spellings exist, and Krio has no single universal standard in everyday use.",
      "Cross-link: Unit 6, Lesson 1 (English in West Africa), and Lesson 3 of this unit."
     ]},
    related:["we-pidgins-and-creoles","we-creole-genesis","we-west-african-english"],
    sources:[{t:"Krio (Malcolm Finney), APiCS survey chapter", url:"https://apics-online.info/surveys/15"},{t:"Krio (Malcolm Finney, Sato Center, University of Hawaiʻi)", url:"https://hawaii.edu/satocenter/langnet/definitions/krio.html"}],
    checked:"2026-11"},
   {id:"we-creole-genesis", title:"How creoles form: four ideas", aka:["creole genesis","bioprogram","founder principle","substrate and superstrate"], tags:["world englishes","pidgins and creoles"],
    summary:"Scholars debate how creoles form. The main ideas are the substrate view, the superstrate view, Bickerton’s bioprogram and Mufwene’s founder principle. Many scholars say that several factors worked together.",
    levels:{
     starter:[
      "Nobody has seen most creoles form, because the early records are few. So scholars use grammar, history and general ideas about language to argue about how it happened.",
      "One idea looks at the first languages of the people who built the creole. A second looks at the lexifier and its regional varieties. A third says that children turn a rough pidgin into a full language, with abilities that all humans share. A fourth says that the first speakers in a new settlement have a large effect on what grows there.",
      "No one idea has won. Many scholars think that several factors worked together.",
      {key:"The question of how creoles form is open. A careful answer says so."}
     ],
     builder:[
      {table:[["Idea","Main claim","Key names"],["Substrate","Grammar patterns come from the first languages of the founders","Lefebvre 1998"],["Superstrate","Features come from the lexifier and its varieties","several scholars"],["Bioprogram","Children’s innate abilities shape a pidgin into a language","Bickerton 1981"],["Founder principle","The first speakers have a large effect","Mufwene 1996"]]},
      "Bickerton used evidence from Hawaiʻi in *Roots of Language* (1981). Later scholars questioned his evidence and his conclusions, and his idea is still the best-known universalist account. Mufwene’s founder principle looks at the people, the numbers and the timing of a whole settlement.",
      "Each idea needs evidence about who was present and when. For some creoles this evidence is rich, and for others it is not."
     ],
     pro:[
      "Terms such as *substrate* and *superstrate* come from studies of language replacement, and some scholars say that they fit creoles poorly, because a creole often grew from many languages at once. Some scholars avoid them. Some theories stress relexification: speakers keep the grammar of their first language and put the words of the lexifier into it. Lefebvre (1998) argued this for Haitian Creole and the Fon language.",
      "Mufwene argues that pidgins and creoles arise independently, under different conditions, and that a creole need not come from a pidgin. This challenges the simple life cycle of Hall (1966).",
      "The question of creole simplicity is linked to genesis. McWhorter (1998, 2001) argued that creole grammars show signs of recent origin, and critics such as Gil (2001) and DeGraff (2003) disagree. A reader should keep the genesis question apart from the question of whether creoles are full languages. They are.",
      "Cross-link: Lesson 3 of this unit."
     ]},
    related:["we-pidgins-and-creoles","we-tok-pisin","we-krio"],
    sources:[{t:"Atlas of Pidgin and Creole Language Structures Online (APiCS)", url:"https://apics-online.info/"},{t:"Tok Pisin (Jeff Siegel, Sato Center, University of Hawaiʻi)", url:"https://hawaii.edu/satocenter/langnet/definitions/tokpisin.html"}],
    checked:"2026-11"},
   {id:"we-creole-status-school", title:"Status, school and attitudes", aka:["official language","language of instruction","decreolization","post-creole continuum"], tags:["world englishes","pidgins and creoles","education"],
    summary:"Creoles have very different legal status: official in Haiti and Vanuatu, widely used without official status in Nigeria and Hawaiʻi. Evidence on school programs is limited and mixed, and attitudes are often a mix of pride and low opinion.",
    levels:{
     starter:[
      "A language can be official, national or the language of school, and the law can give it one, two, three or none of these jobs. Haiti’s 1987 constitution says that Creole and French are the official languages. In Vanuatu, the constitution says that Bislama is the national language and one of three official languages. Nigerian Pidgin has no official status, but it is widely used.",
      "In school, many children speak a creole at home while the teaching language is English or French. Some programs use the home language to help children. The evidence is limited and mixed.",
      "People often feel two things about a creole: pride and a low opinion that others have taught them.",
      {key:"Say what the law says and what the evidence shows. Do not say more."}
     ],
     builder:[
      {table:[["Place","Language","What a source says"],["Haiti","Haitian Creole","Official with French (Article 5, 1987)"],["Vanuatu","Bislama","National and official, with English and French (Article 3)"],["Nigeria","Nigerian Pidgin","No official status"],["Hawaiʻi","Hawaiʻi Creole English","Not official. The US Census Bureau released language data with Pidgin entries in late 2015"]]},
      "Siegel (2007) reviewed creoles and minority dialects in education and renewed the call for more applied work, with examples from Hawaiʻi. In Papua New Guinea, according to Siegel, communities can choose the language for the first three years of elementary school, and many have chosen Tok Pisin.",
      "DeCamp (1971) described a post-creole continuum for Jamaica, and Bickerton (1975) studied decreolization in Guyana. Decreolization describes a move toward the lexifier, and it has limits as an idea, because speakers move along the continuum in both directions."
     ],
     pro:[
      "Read legal texts in the original. The Haitian text is Article 5 of the 1987 constitution, and Article 3 of Vanuatu’s constitution lists the national, official and principal education languages. The legal basis for Tok Pisin is described in different ways in different sources, so check an official text before you quote it.",
      "The US Census Bureau data for 2009 to 2013, released in late 2015, included new entries for Hawaiian Pidgin and Pidgin, according to the Hawaii State Data Center. This is a language-at-home count and not a legal status. Some news headlines used the word *official*, which is not correct.",
      "Studies of school programs differ in design, size and setting, and they rarely allow strong general claims. Reports include a Hawaiʻi program (KEEP, the Kamehameha Early Education Program) that changed classroom talk and reported gains in reading, and the Bernard Reform of the late 1970s in Haiti (dated 1978 or 1979 in different sources), which is described as not very successful overall. Check original evaluations before you quote any result.",
      "Attitudes: Finney reports for Krio that it is a symbol of identity and is also seen as a distortion, or an inferior form, of English. Siegel reports for Tok Pisin that many people still feel it is inferior to English, and he also calls it an important language of Papua New Guinean identity. Unit 9 returns to attitudes and power."
     ]},
    related:["we-pidgins-and-creoles","we-tok-pisin","we-caribbean-english"],
    sources:[{t:"Constitution of Haiti 1987 (rev. 2012), Constitute project", url:"https://www.constituteproject.org/constitution/Haiti_2012?lang=en"},{t:"Constitution of Vanuatu 1980 (rev. 2013), Constitute project", url:"https://www.constituteproject.org/constitution/Vanuatu_2013"},{t:"Creoles and minority dialects in education: An update (Siegel 2007)", url:"https://rune.une.edu.au/web/handle/1959.11/1664"},{t:"Hawaiian language and Pidgin data from the Census Bureau (NBC News, 2015)", url:"https://www.nbcnews.com/news/asian-america/hawaiian-language-pidgin-data-revealed-new-u-s-census-bureau-n495006"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-pidgin", term:"Pidgin", def:"A contact language for limited jobs between groups with no shared language. At first it has no native speakers, because everyone who uses it has another first language.", codex:"we-pidgins-and-creoles"},
   {id:"we-contact-language", term:"Contact language", def:"A language that develops when people with no shared language need to talk. Pidgins and creoles are contact languages.", codex:"we-pidgins-and-creoles"},
   {id:"we-lexifier", term:"Lexifier", def:"The language that gives a pidgin or creole most of its words. The lexifier of Tok Pisin and Krio is English, and the lexifier of Haitian Creole is French.", codex:"we-pidgins-and-creoles"},
   {id:"we-substrate", term:"Substrate", def:"The first languages of the people who built a contact language. They may shape its grammar and sounds, and scholars debate how much.", codex:"we-pidgins-and-creoles"},
   {id:"we-creole", term:"Creole", def:"A contact language that children of a community learn as a first language. It has all the jobs of a full language and its own regular grammar.", codex:"we-pidgins-and-creoles"},
   {id:"we-expanded-pidgin", term:"Expanded pidgin", def:"A pidgin that has grown to wide use and does many of the jobs of a full language, while many of its speakers still have another first language. Tok Pisin is often described this way.", codex:"we-pidgins-and-creoles"},
   {id:"we-life-cycle", term:"Pidgin–creole life cycle", def:"Hall’s (1966) idea that a contact language grows from a pidgin to a creole. It is a map of ideas, and many pidgins never become creoles.", codex:"we-pidgins-and-creoles"},
   {id:"we-clusivity", term:"Inclusive and exclusive *we*", def:"A difference that some languages make between *we* that includes the listener and *we* that leaves the listener out. Tok Pisin has *yumi* (inclusive) and *mipela* (exclusive).", codex:"we-tok-pisin"},
   {id:"we-predicate-marker", term:"Predicate marker", def:"A small word that marks the start of the predicate. In Tok Pisin, *i* comes after the subject, as in *Haus i bikpela*.", codex:"we-tok-pisin"},
   {id:"we-tma-marker", term:"Marker of time or aspect", def:"A small word, not a word ending, that shows when something happened or how it is going. Krio *bin* marks an earlier time, and *di* marks an action in progress.", codex:"we-krio"},
   {id:"we-bioprogram", term:"Bioprogram", def:"Bickerton’s (1981) idea that children use innate abilities to turn a rough pidgin into a full language. It is debated.", codex:"we-creole-genesis"},
   {id:"we-founder-principle", term:"Founder principle", def:"Mufwene’s (1996) idea that the first speakers in a new settlement have a large effect on the language that grows there.", codex:"we-creole-genesis"},
   {id:"we-creole-prototype", term:"Creole prototype", def:"McWhorter’s (1998) proposal that creoles share three features: few or no word endings, little or no tone that carries meaning, and word formation that is easy to see. Other scholars reject the idea.", codex:"we-creole-genesis"},
   {id:"we-decreolization", term:"Decreolization", def:"The idea that a creole moves toward its lexifier through contact with school, media and the standard language. It has limits as an idea, because speakers move in both directions.", codex:"we-creole-status-school"},
   {id:"we-kriol", term:"Australian Kriol", def:"An English-based creole spoken by Aboriginal people in northern Australia. Linguists describe it as a language with its own grammar, and it is not the same as Aboriginal English.", codex:"we-pidgins-and-creoles"},
   {id:"we-gullah", term:"Gullah", def:"An English-based creole of the coast and Sea Islands of South Carolina and Georgia. Turner (1949) documented many words of African origin in it.", codex:"we-pidgins-and-creoles"},
   {id:"we-hawaii-creole-english", term:"Hawaiʻi Creole English", def:"An English-based creole that grew on Hawaiʻi’s sugarcane plantations. People in Hawaiʻi often call it Pidgin. It is not an official language of the state.", codex:"we-creole-status-school"}
  ],
  cpBank:[
   Q("e6u7-cp01","e6u7-l1",1,"Which statement is the best description of a creole?",2,[
     ["A pidgin with mistakes taken out","A creole is a language of its own, and nobody corrects it into something else."],
     ["A language that only children use","Adults use creoles too."],
     ["A contact language that children of a community learn as a first language","Right. It has all the jobs of a full language."],
     ["A dialect of the lexifier","A creole has a grammar of its own, so it is not simply a dialect."]]),
   Q("e6u7-cp02","e6u7-l1",3,"Aiko reads that many pidgins disappear when contact ends, and that some creoles formed without a long pidgin stage. What should she conclude about the life-cycle idea?",1,[
     ["That it is a law that every language follows","The reading says the opposite, because many pidgins stop early."],
     ["That it is a useful map of ideas, and not a timetable","Right. Real languages do not always follow the stages."],
     ["That it is false and scholars never use it","Scholars still use it, with care."],
     ["That it shows which stage is the best one","Each stage is a working language, and none is better."]]),
   Q("e6u7-cp03","e6u7-l2",1,"What does *mipela* mean in Tok Pisin?",3,[
     ["You, more than one person","That is *yupela*."],
     ["We, including the listener","That is *yumi*."],
     ["They","That is *ol*."],
     ["We, not including the listener","Right. It is the exclusive *we*."]]),
   Q("e6u7-cp04","e6u7-l2",2,"In the Krio sentence *Wi go ebul du am tumara*, what does *go* show?",0,[
     ["A later time: “We will be able to do it tomorrow”","Right. *Go* before the verb marks a later time."],
     ["An earlier time: “I did it”","That is *bin*."],
     ["An action in progress","That is *di*."],
     ["A plural","That is *dɛm* after a noun."]]),
   Q("e6u7-cp05","e6u7-l2",3,"A student says that *Piita de sing di sang* is “English with words missing”. Which reply fits the lesson best?",2,[
     ["The student is right, because the sentence has no *is*.","Jamaican Creole does not use *is* in that sentence, and that is a rule, not a gap."],
     ["The sentence is a mistake that speakers should fix.","It is a regular sentence of Jamaican Creole in a published description."],
     ["*De* marks an action in progress, so the sentence follows a rule of its own.","Right. It is a different system, and not English with pieces missing."],
     ["The sentence is not Jamaican at all.","It comes from Farquharson’s chapter in APiCS."]]),
   Q("e6u7-cp06","e6u7-l3",1,"Which statement about Papiamentu is the most accurate?",1,[
     ["It is English-based.","Its words come mainly from Portuguese and Spanish."],
     ["It has Iberian languages as its lexifier, and scholars still discuss the details.","Right. The balance of Portuguese and Spanish is debated."],
     ["It is a dialect of Dutch.","Dutch influenced it later, but it is a language of its own."],
     ["It formed in the Pacific.","It is spoken in Aruba, Bonaire and Curaçao."]]),
   Q("e6u7-cp07","e6u7-l3",2,"What does the *substrate view* say about creole grammar?",0,[
     ["Many grammar patterns come from the first languages of the people who built the creole.","Right. Lefebvre (1998) is an example."],
     ["Children invent grammar with innate abilities.","That is the bioprogram idea of Bickerton."],
     ["The first speakers decide everything.","That is the founder principle of Mufwene."],
     ["All grammar comes from the lexifier.","That is closer to the superstrate view."]]),
   Q("e6u7-cp08","e6u7-l4",1,"What does Article 3 of Vanuatu’s constitution say about Bislama?",2,[
     ["It is the only language of education.","English and French are the principal languages of education."],
     ["It is not an official language.","The text names it among the official languages."],
     ["It is the national language, and one of the official languages.","Right. The other two are English and French."],
     ["It is banned in government.","Nothing of the kind appears in the article."]]),
   Q("e6u7-cp09","e6u7-l4",2,"Which statement about Pidgin in Hawaiʻi is the most accurate?",3,[
     ["It is an official language of the state.","English and Hawaiian are the official languages."],
     ["It was banned in 2015.","The Census data did not ban anything."],
     ["It does not exist, because it is only a way of speaking English.","Linguists describe Hawaiʻi Creole English as a creole."],
     ["It appeared as an entry in US Census language data in 2015, and this is not a legal status.","Right. It is a count of speakers."]]),
   Q("e6u7-cp10","e6u7-l4",3,"A parent worries that using a creole at school will harm English. Which reply is the most accurate and kind?",1,[
     ["“Research shows that creoles always help.”","The evidence is limited and mixed, so this goes too far."],
     ["“I understand the wish. The research is limited, and children can learn English and keep the home language.”","Right. It respects the parent and stays within the evidence."],
     ["“Creoles are a problem, and English is the solution.”","This judges the home language."],
     ["“Do not worry. Nothing matters in school.”","School matters, and this ignores the worry."]]),
   Q("e6u7-cp11","e6u7-l5",1,"A recording shows a reading of English. What can it show?",0,[
     ["How one speaker says English words","Right. It shows pronunciation of English words."],
     ["The grammar of the speaker’s first language","The paragraph is English, so that grammar does not appear."],
     ["How all people from the speaker’s country speak","One speaker is one person."],
     ["How skilled the speaker is in every language","A clip cannot show this."]]),
   Q("e6u7-cp12","e6u7-l5",3,"Ravi hears the Freetown clip and says, “This accent is unclear, so Krio must be a poor language.” What is the best response?",2,[
     ["“Yes. Unclear accents come from poor languages.”","Languages are not poor or rich, and the accent does not come from that."],
     ["“No. Krio is better than English.”","This is also a ranking."],
     ["“A listener’s difficulty is not a fact about a language. The clip is English, and Krio is a full language with its own grammar.”","Right. It puts the problem in the listening, and it stays within the evidence."],
     ["“I agree, but only for this speaker.”","The problem is not the speaker’s language or the speaker."]])
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u7-q01","e6u7-l1",1,"What is a lexifier?",2,[
     ["The first language of the workers","That is closer to the substrate."],
     ["A person who writes dictionaries","A lexifier is a language, not a person."],
     ["The language that gives a pidgin or creole most of its words","Right. For Tok Pisin and Krio, it is English."],
     ["A rule of grammar","A lexifier is a source of words."]]),
   Q("e6u7-q02","e6u7-l1",1,"Which statement describes a pidgin at the start?",0,[
     ["It has no native speakers, because everyone who uses it has another first language.","Right. Native speakers come later, if at all."],
     ["It is the first language of children.","That describes a creole."],
     ["It has all the jobs of a full language.","A pidgin starts with narrow jobs."],
     ["It is a form of English with mistakes.","No language is a form of mistakes."]]),
   Q("e6u7-q03","e6u7-l1",1,"Which statement about creoles is correct?",3,[
     ["They have no grammar.","Creoles have regular grammar."],
     ["They are spoken only by adults.","Children learn creoles as a first language."],
     ["They are corrected forms of pidgins.","A creole is a language of its own."],
     ["They have regular grammar, and children of a community learn them as a first language.","Right. This is the definition used in this unit."]]),
   Q("e6u7-q04","e6u7-l1",1,"What are the substrate languages?",1,[
     ["The languages that give the most words","That is the lexifier."],
     ["The first languages of the people who built the contact language","Right. They may shape grammar and sounds."],
     ["The languages of school","The term has nothing to do with school."],
     ["Languages that have disappeared","The term is about sources, not about loss."]]),
   Q("e6u7-q05","e6u7-l1",2,"Who described a pidgin–creole life cycle in 1966?",2,[
     ["Derek Bickerton","Bickerton is linked with the bioprogram (1981)."],
     ["Salikoko Mufwene","Mufwene is linked with the founder principle (1996)."],
     ["Robert Hall","Right. Hall (1966) described the cycle."],
     ["Braj Kachru","Kachru is linked with the three circles of English."]]),
   Q("e6u7-q06","e6u7-l1",2,"Scholars call Tok Pisin an expanded pidgin, and some call it a creole. What does this show?",1,[
     ["That one group of scholars is wrong","Both labels are used for good reasons."],
     ["That the labels depend on how the language is used and who learns it first, and scholars weigh these differently","Right. The labels describe use, not quality."],
     ["That Tok Pisin is not a real language","It is a full language under any label."],
     ["That the language is changing into English","Nothing in the evidence says this."]]),
   Q("e6u7-q07","e6u7-l1",2,"Which fact is the best evidence that Tok Pisin is not “English with the grammar left out”?",0,[
     ["It has two words for *we*, which English does not have.","Right. This is a difference in grammar."],
     ["It has some English words.","Borrowed words do not show that grammar is missing."],
     ["It is used in Papua New Guinea.","The place does not show anything about grammar."],
     ["It is written with the Latin alphabet.","Writing does not show anything about grammar."]]),
   Q("e6u7-q08","e6u7-l1",3,"Kenji says, “A creole is just a pidgin that grew up and got better.” Which reply fits the lesson best?",3,[
     ["“Yes. Pidgins are poor and creoles are rich.”","This ranks the labels, and the lesson does not."],
     ["“Yes. Every pidgin becomes a creole in time.”","Many pidgins disappear."],
     ["“No. A creole is a form of English.”","A creole is a language of its own."],
     ["“Each stage is a working language. The labels describe use and who learns it first, and not quality, and not every pidgin becomes a creole.”","Right. It uses the lesson’s ideas."]]),
   Q("e6u7-q09","e6u7-l1",3,"Lucía hears the Madang clip, where the first language is Tok Pisin, and says, “I can hear Tok Pisin grammar.” What is the best response?",1,[
     ["“Yes. A first language always shows in the grammar.”","The paragraph is English, and no grammar of another language appears."],
     ["“The clip is a reading in English. It shows how one person says English words, and it cannot show Tok Pisin grammar.”","Right. It stays within the evidence."],
     ["“No. Tok Pisin does not have grammar.”","Tok Pisin has regular grammar."],
     ["“Yes, but only if the speaker is a child.”","Age has nothing to do with the answer."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u7-q10","e6u7-l2",1,"Which Tok Pisin pronoun means “we” and includes the listener?",0,[
     ["*yumi*","Right. *Yumi* includes the listener."],
     ["*mipela*","This means “we” without the listener."],
     ["*yu*","This means “you”."],
     ["*ol*","This means “they”."]]),
   Q("e6u7-q11","e6u7-l2",1,"In the Krio sentence *A bin du am* (“I did it”), what does *bin* mark?",2,[
     ["A plural","A plural is marked by *dɛm* after a noun."],
     ["An action in progress","That is *di*."],
     ["An earlier time","Right. *Bin* marks an earlier time."],
     ["A question","The sentence is not a question."]]),
   Q("e6u7-q12","e6u7-l2",1,"What does the ending *-im* show on the Tok Pisin verb *lukim*?",1,[
     ["That the action is in the past","Time is shown by other words, such as *bin*."],
     ["That the verb has an object","Right. *Luk* means “look”, and *lukim* means “see”."],
     ["That there are two people","Dual forms use *-tupela*."],
     ["That the verb is a question","*-im* does not mark questions."]]),
   Q("e6u7-q13","e6u7-l2",2,"In *Piita de sing di sang* (“Peter is singing the song”), what does *de* mark?",3,[
     ["An earlier time","That is *wehn*."],
     ["A plural","That is *dem* after a noun."],
     ["A question","The sentence is not a question."],
     ["An action in progress","Right. This is how the source describes *de* here."]]),
   Q("e6u7-q14","e6u7-l2",2,"What does *A bin dɔn du am* mean in Krio, in Finney’s description?",0,[
     ["I had done it.","Right. *Dɔn* marks that the action is finished, and *bin* puts it at an earlier time."],
     ["I will do it.","A later time needs *go* before the verb, and this sentence has no *go*."],
     ["I am doing it.","An action in progress needs *di* before the verb, and this sentence has no *di*."],
     ["I did not do it.","The sentence has no negative word."]]),
   Q("e6u7-q15","e6u7-l2",2,"What does *dɛm* do in the Krio phrase *pikin dɛm* (“children”)?",2,[
     ["It marks an earlier time.","That is *bin*."],
     ["It marks a question.","It does not mark questions."],
     ["It marks a plural, after the noun.","Right. This is the pattern in Finney’s description."],
     ["It marks the listener.","It does not mark persons."]]),
   Q("e6u7-q16","e6u7-l2",2,"Why do sources spell the same creole in different ways?",1,[
     ["Because the speakers cannot agree on how it sounds","The reason is about writing, not about sound."],
     ["Because most creoles have no single official spelling","Right. Each source says which system it uses."],
     ["Because creoles are not written","Many creoles are written, including in newspapers and Bible translations."],
     ["Because spelling does not matter","A careful writer says which system is used."]]),
   Q("e6u7-q17","e6u7-l2",3,"Priya reads *Jan sik* (“John is sick”) in a description of Jamaican Creole and says, “A word is missing.” What is the best reply?",0,[
     ["In this description, no word for *is* is needed before an adjective, so nothing is missing.","Right. This is a rule of the grammar."],
     ["She is right. The sentence is a mistake.","It is a regular sentence in the source."],
     ["She is right, but speakers always add *is* in speech.","The source does not say this."],
     ["The sentence is not Jamaican.","It comes from Farquharson’s chapter."]]),
   Q("e6u7-q18","e6u7-l2",3,"A Tok Pisin speaker tells a visitor about a trip to the market, and uses *mipela* for “we”. Was the visitor part of the group that went?",1,[
     ["Yes, because *mipela* includes the listener","*Yumi* includes the listener, and *mipela* does not."],
     ["No, because *mipela* leaves the listener out","Right. It is the exclusive *we*."],
     ["We cannot tell from the pronoun","The pronoun tells you, because Tok Pisin has separate inclusive and exclusive forms."],
     ["Yes, because the speaker is talking to the visitor","Talking to someone does not put them in the group. *Mipela* leaves the listener out."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u7-q19","e6u7-l3",1,"Which of these is a French-based creole?",2,[
     ["Tok Pisin","Its lexifier is English."],
     ["Papiamentu","Its words come mainly from Portuguese and Spanish."],
     ["Haitian Creole","Right. Most of its words come from French."],
     ["Krio","Its lexifier is English."]]),
   Q("e6u7-q20","e6u7-l3",1,"Who published *Roots of Language* in 1981?",0,[
     ["Derek Bickerton","Right. It presents the bioprogram idea."],
     ["Peter Mühlhäusler","Mühlhäusler wrote about stages of pidgins in 1986."],
     ["Lorenzo Dow Turner","Turner wrote about Gullah in 1949."],
     ["Jeff Siegel","Siegel writes about Pacific pidgins and creoles in education."]]),
   Q("e6u7-q21","e6u7-l3",1,"Which statement describes the founder principle?",3,[
     ["Children invent grammar with innate abilities.","That is the bioprogram idea."],
     ["All grammar comes from the lexifier.","That is closer to the superstrate view."],
     ["Creoles are older than pidgins.","The principle is not about that."],
     ["The first speakers in a new settlement have a large effect on the language that grows.","Right. This is Mufwene’s (1996) idea."]]),
   Q("e6u7-q22","e6u7-l3",2,"What do Tok Pisin, Bislama and Solomon Islands Pijin have in common, according to the lesson?",1,[
     ["They are all spoken in one country.","They are spoken in three countries."],
     ["They have a common origin in a Pacific plantation pidgin.","Right. The pidgin spread from ships and plantations."],
     ["They have French as the lexifier.","Their lexifier is English."],
     ["They have no native speakers.","Many speakers have them as first languages, especially in towns."]]),
   Q("e6u7-q23","e6u7-l3",2,"Which statement about Australian Kriol is the most accurate?",2,[
     ["It is the same as Aboriginal English.","Linguists describe them as different things."],
     ["It is a French-based creole.","Its lexifier is English."],
     ["It is an English-based creole with its own grammar, and many speakers also use other ways of speaking.","Right. It has a grammar of its own."],
     ["It is spoken only in cities.","It is spoken in northern Australia."]]),
   Q("e6u7-q24","e6u7-l3",2,"Why is the debate about creole simplicity not a debate about whether creoles are real languages?",0,[
     ["Because both sides treat creoles as full languages","Right. They disagree about how to measure grammatical complexity."],
     ["Because creoles have no grammar","Creoles have regular grammar."],
     ["Because nobody has studied the question","Many scholars have studied it."],
     ["Because creoles are simpler than all other languages","This is the claim that some scholars debate."]]),
   Q("e6u7-q25","e6u7-l3",2,"Huber proposes that Krio grew from the creoles of groups resettled in Sierra Leone between which years?",3,[
     ["1600 and 1700","Hancock’s account places an older creole in the 1600s. This is not Huber’s span."],
     ["1863 and 1912","These dates belong to the Pacific labor trade."],
     ["1949 and 1975","These dates belong to Turner’s book and to independence in Papua New Guinea."],
     ["1787 and 1850","Right. This is the span in the APiCS chapter."]]),
   Q("e6u7-q26","e6u7-l3",3,"Mei says, “Papiamentu comes from Spanish, and the question is settled.” What is the best reply?",1,[
     ["“Yes. All scholars agree.”","Scholars still discuss Portuguese and Spanish."],
     ["“Scholars still discuss whether Portuguese or Spanish came first, so I would say the question is open.”","Right. It reports the state of the debate."],
     ["“No. It comes from Dutch.”","Dutch came later, and it does not settle the question."],
     ["“No. It has no lexifier.”","Scholars describe Iberian languages as the lexifier."]]),
   Q("e6u7-q27","e6u7-l3",3,"A classmate says to Toby Whitlock, a master’s student in Japanese linguistics from Australia, “Kriol is just Aboriginal English with bad grammar.” Which reply fits the lesson best?",2,[
     ["“You are right, because both are English.”","The lesson describes them as different, and no grammar is bad."],
     ["“Neither exists.”","Both are described by linguists."],
     ["“Kriol is an English-based creole with its own grammar. Aboriginal English is a variety of English, and many speakers use more than one.”","Right. It is accurate and fair."],
     ["“Kriol is a French-based creole.”","Its lexifier is English."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u7-q28","e6u7-l4",1,"According to Article 5 of Haiti’s 1987 constitution, which languages are the official languages?",1,[
     ["French only","The article names Creole as well."],
     ["Creole and French","Right. The article also says that all Haitians share Creole."],
     ["Creole only","French is named too."],
     ["English and French","English is not named."]]),
   Q("e6u7-q29","e6u7-l4",1,"What is a national language?",0,[
     ["A language that stands for the nation, often with a symbolic role","Right. It can differ from the official language."],
     ["A language that every citizen must speak","The term does not say this."],
     ["A language that is used only at home","The term is not about home."],
     ["A language that only the government uses","That is closer to an official language."]]),
   Q("e6u7-q30","e6u7-l4",1,"What is the legal status of Nigerian Pidgin in Nigeria, according to the lesson?",2,[
     ["It is the only official language.","English is the official language."],
     ["It is banned.","It is widely used, and it is not banned."],
     ["It has no official status, and it is widely used.","Right. The BBC began a Pidgin news service in 2017."],
     ["It is the language of instruction in all schools.","The lesson does not say this."]]),
   Q("e6u7-q31","e6u7-l4",2,"Which languages are the principal languages of education in Vanuatu, according to Article 3?",3,[
     ["Bislama and French","English is also named, and Bislama is not named for education."],
     ["Bislama only","The article names English and French for education."],
     ["Bislama, English and French","These are the official languages, which is a different list."],
     ["English and French","Right. Bislama is the national language and an official language."]]),
   Q("e6u7-q32","e6u7-l4",2,"What did the US Census Bureau do in late 2015, according to the lesson?",1,[
     ["It made Pidgin an official language of Hawaiʻi.","A Census category is not a law."],
     ["It released language data that included entries for Hawaiian Pidgin and Pidgin.","Right. This is a count of speakers."],
     ["It banned Pidgin from schools.","The data did not ban anything."],
     ["It said that Pidgin is the same as Hawaiian.","The data lists them as separate."]]),
   Q("e6u7-q33","e6u7-l4",2,"What did Siegel (2007) call for in his review of creoles and minority dialects in education?",2,[
     ["An end to teaching English","The review does not say this."],
     ["A ban on creoles in school","The review does not say this."],
     ["More applied work on the obstacles that speakers of these varieties meet in school","Right. He renewed this call, with examples from Hawaiʻi."],
     ["A single policy for all countries","The review does not propose this."]]),
   Q("e6u7-q34","e6u7-l4",2,"What does decreolization mean in the lesson?",0,[
     ["The idea that a creole moves toward its lexifier through contact with school, media and the standard","Right. It is one description, and it has limits."],
     ["The death of a creole","The term is about change toward the lexifier."],
     ["The creation of a new creole","The term describes a different process."],
     ["The spelling of a creole","The term is not about spelling."]]),
   Q("e6u7-q35","e6u7-l4",3,"A headline says that Pidgin has become an official language of Hawaiʻi. What should a careful reader do?",3,[
     ["Accept it, because headlines are always correct","A headline can simplify or overstate."],
     ["Ignore it, because Pidgin does not exist","Linguists describe Hawaiʻi Creole English as a creole."],
     ["Say that the state has three official languages","The state’s official languages are English and Hawaiian."],
     ["Check what the Census Bureau actually released, and note that a data category is not a law","Right. It stays within the evidence."]]),
   Q("e6u7-q36","e6u7-l4",3,"Sione reads that a school program used children’s home language and that reading improved. May he say that research shows this always works?",1,[
     ["Yes, because one program is enough","One program in one place cannot show a general rule."],
     ["No. The evidence is limited and mixed, and it comes from particular programs in particular places.","Right. A careful claim says so."],
     ["Yes, because teachers agree","Teachers differ, and agreement would not be evidence anyway."],
     ["No, because home languages never help","The lesson does not say this."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u7-q37","e6u7-l5",1,"What do you hear in this unit’s listening lab?",2,[
     ["Tok Pisin and Krio sentences","The lab clips are English readings."],
     ["Examples of creole grammar","The clips cannot show creole grammar."],
     ["Five people reading the same English paragraph","Right. The paragraph is “Please call Stella”."],
     ["Five people speaking only their first language","They read English."]]),
   Q("e6u7-q38","e6u7-l5",1,"What does the archive’s *first language* tell you about a speaker?",1,[
     ["How well the speaker uses English","A first language does not show this."],
     ["Which language the speaker learned first, and not a variety of English","Right. It is a fact about the person."],
     ["How the speaker’s whole country speaks","One speaker is one person."],
     ["Whether the speaker is easy to understand","This depends on the listener too."]]),
   Q("e6u7-q39","e6u7-l5",1,"Which part of a careful claim is the reminder that you cannot generalize?",0,[
     ["One speaker is one person","Right. This is the third part."],
     ["What I hear","This is the first part."],
     ["What is typical in the place","This is the second part."],
     ["The speaker’s age","Age is not one of the three parts."]]),
   Q("e6u7-q40","e6u7-l5",2,"Which of these can a clip of an English paragraph show?",3,[
     ["The grammar of the speaker’s first language","The paragraph is English."],
     ["How the speaker uses *de* and *bin* in a creole","These are creole words, and they do not appear."],
     ["How everyone in the speaker’s country speaks","One speaker cannot show this."],
     ["How one speaker says the *r* in *store*","Right. It is a sound in an English word."]]),
   Q("e6u7-q41","e6u7-l5",2,"Four of the five speakers have spent time in the US. What follows from this?",2,[
     ["That they all sound American","Speakers differ, and nothing follows like this."],
     ["That their first languages have changed","The facts do not show this."],
     ["That some features may come from there, and one clip cannot show which","Right. It is a reason for a limit in the claim."],
     ["That their English is better","This is a ranking."]]),
   Q("e6u7-q42","e6u7-l5",2,"What is the last step of the listening routine in Lesson 5?",1,[
     ["Choose a feature to listen for","This is an earlier step."],
     ["In a real conversation, check what you understood","Right. This step keeps the problem shared."],
     ["Decide whether the speaker is good","The routine never ranks."],
     ["Listen for the gist","This is the first step."]]),
   Q("e6u7-q43","e6u7-l5",3,"A classmate says, “I heard Tok Pisin grammar in the Madang clip.” What is the most careful reply?",0,[
     ["“The clip is a reading of English, so Tok Pisin grammar does not appear in it. We can describe the English sounds.”","Right. It stays within the evidence."],
     ["“Yes. Everyone who knows Tok Pisin shows it in English.”","This is an overgeneralization."],
     ["“No. Tok Pisin has no grammar.”","It has regular grammar."],
     ["“Yes, but only in the first sentence.”","The clip has no such grammar at all."]]),
   Q("e6u7-q44","e6u7-l5",3,"Kenji writes four notes. Which note is the most careful?",2,[
     ["“The Kingston speaker has a creole accent, so the English is worse.”","This judges a person from a label."],
     ["“All Jamaicans pronounce *store* like this.”","One speaker cannot show a country."],
     ["“I did not hear a strong *r* in *store* in the Kingston clip. This is one speaker, and I will compare with another clip.”","Right. It has what I hear, a limit and a next step."],
     ["“This speaker should speak more clearly.”","This puts the problem in the speaker, and it judges."]]),
   Q("e6u7-q45","e6u7-l5",3,"Lucía says, “The Willemstad speaker’s first language is a creole, so the English must be less correct.” What is the best response?",3,[
     ["“Yes. Creole first languages always make English worse.”","No such rule exists."],
     ["“No. Creole speakers always speak the most correct English.”","This is another prediction from a label."],
     ["“Nobody can describe the English of a person whose first language is a creole.”","A listener can describe what is heard in one recording, so this goes too far."],
     ["“A first language does not show how someone uses English. The clip is one person reading English, and I will describe what I hear.”","Right. It stays within the evidence and does not rank."]])
  ]
});
})();
