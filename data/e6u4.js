(function(){
/* World Englishes · Unit 4 (e6u4) · North America, Australia, New Zealand and South Africa */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u4", track:"e6", n:4, title:"North America, Australia, New Zealand and South Africa", icon:"🌏",
  blurb:"Settlers carried English to four regions, and in each one it grew into its own system. This unit visits the United States, Canada, Australia, New Zealand and South Africa. You learn the reference accent of the US, African American English and Chicano English, and Canadian raising. You also learn Australian and New Zealand vowels, rising pitch, te reo Māori words, and South African English. You hear 14 real speakers from 13 places. The last lesson is a lab that compares them with Unit 3, and it does not rank anyone.",
  goals:[
    "Say what General American is, and explain the *r* sound, flapping and the cot–caught merger",
    "Explain African American English as a system with rules. Describe Chicano English and bilingual speech",
    "Describe Canadian English: spelling, Canadian raising and *eh*. Say why no one description fits all",
    "Describe Australian and New Zealand English, rising pitch, Māori words and Aboriginal English",
    "Describe South African English, and compare the regions by the *r* sound and the BATH vowel, without ranking"
  ],
  read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, sections 10.2 “Language varies”, 10.6 “Sociolinguistic correlations: Place”, 10.7 “Sociolinguistic correlations: Social status” and 10.9 “Sociolinguistic correlations: Ethnicity”; Chapter 3, Phonetics, sections 3.5 “Describing vowels” and 3.12 “Tone and intonation”", note:"Read the Chapter 10 sections after Lessons 1 and 2, and section 3.5 before the listening lab. The book is written for linguistics students and is not about these regions only, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u4-l1", title:"American English", minutes:55,
   hook:{q:"A friend says, “Americans all speak General American, so they have no accent.” Which statement is the most accurate?", options:["Everyone in the US speaks General American.","General American is a label for accents with few strong regional features. Every speaker still has an accent, and many regional accents exist.","General American is the grammar of American English.","General American is the accent of one city."], answer:1, reveal:"**General American is a label for accents with few strong regional features.** Linguists use it as a reference accent. It is not the accent of one place, and nobody speaks without an accent."},
   goals:[
     "Say what General American (GA) is, and why it is used as a reference accent",
     "Explain rhoticity and flapping, and say which words show them",
     "Explain the cot–caught merger and say where it is found, with a hedge",
     "Explain how Noah Webster shaped American spelling",
     "Describe features of Southern, New York City and Boston speech, and explain Labov’s department-store study (1966)"
   ],
   learn:[
    {h:"One country, many accents", body:[
      {lead:"American English is not one accent. A listener can often tell whether a speaker comes from the South, the Northeast, the Midwest or the West."},
      "This lesson starts with the accent that dictionaries and textbooks use as a reference, and then visits three regional voices. In Unit 3 you met the same idea for Britain: a reference accent is a tool for description, and it is not a better accent.",
      {tip:"This unit is about understanding, not imitating. You will not be asked to copy any accent, and no variety here is “funny”, “lazy” or “wrong”. Each one is a regular system with its own rules."}
    ]},
    {h:"General American: a reference accent", body:[
      {lead:"[[accent-ga|General American]], or GA, is the accent that most American teaching materials describe."},
      "GA is not the accent of one city or state. John Wells (1982) described it mostly by what it lacks: it has none of the strongly marked features of eastern New England, New York City or the South. Many people link it with the Midwest and the West, but speakers in those areas also have regional accents. So GA is closer to a convenient label for a wide range than to a single accent that real people speak in exactly the same way.",
      "In Unit 2 of How English Works you met GA beside Southern Standard British English (SSBE), and the vowel charts are in {{english-vowels}}. Here is a short comparison of three features.",
      {table:[["Feature","GA","SSBE"],["*r* after a vowel (*car*, *store*)","Pronounced (rhotic)","Not pronounced (non-rhotic)"],["BATH words (*bath*, *ask*)","Short vowel /æ/","Long vowel /ɑː/"],["/t/ between vowels (*water*)","Often a flap [ɾ]","Usually [t]"]]},
      "A reference accent also hides variety. If you describe only GA, you miss most of the accents that Americans hear every day. The rest of this lesson, and Lesson 2, put that variety back."
    ]},
    {h:"Two features: rhoticity and flapping", body:[
      {lead:"Two features of GA are easy to describe and easy to hear: the *r* after a vowel, and the flap."},
      "An accent is [[rhotic]] when it pronounces the written *r* after a vowel, as in *car*, *her* and *store*. GA is rhotic, and so are most accents in the US and Canada. A few older regional accents are not, and you will meet them below. In Unit 3, Scottish and Irish English were the rhotic accents of the British Isles.",
      "[[flapping|Flapping]] is the second feature. In GA, a /t/ or /d/ between two vowels is often made with a very quick tap of the tongue against the ridge behind the teeth. The sound is a flap, written [ɾ]. It happens when the second vowel is unstressed, as in *water* [ˈwɑɾɚ], *city* [ˈsɪɾi] and *better*. In many accents, this makes *latter* and *ladder* sound the same. It does not happen in *attack*, because the /t/ comes before a stressed vowel.",
      "Flapping follows a rule, so it is not careless speech. Other varieties in this unit have it too: it is common in Canadian, Australian and New Zealand English. In Britain, the same /t/ is often a glottal stop in London (Unit 3), so the same place in the word gets a different sound in a different system."
    ]},
    {h:"Cot and caught", body:[
      {lead:"Many people say *cot* and *caught* in the same way. Others say them differently, and both groups are regular."},
      "In many accents, the vowel in *cot* is /ɑ/ (the LOT set) and the vowel in *caught* is /ɔ/ (the THOUGHT set). When the two sets have the same vowel, linguists call it the [[we-cot-caught-merger|cot–caught merger]]. Then *cot* and *caught*, *Don* and *dawn*, and *stock* and *stalk* sound alike.",
      "The *Atlas of North American English* (Labov, Ash and Boberg, 2006) reports that the merger is common in the western US and in much of Canada. It is also found in some other areas, such as Pittsburgh and parts of eastern New England. Many accents in the South and the Northeast keep the two vowels apart, and so do parts of the Midwest. Researchers say that the merger is spreading. How fast, and where, is still debated. So use *many* and *some*, and not *all*.",
      "A speaker who has the merger does not “miss” a difference. For that speaker, the two vowels are one sound. Context makes the meaning clear, as it does for *bank* (of a river) and *bank* (for money).",
      {ex:"Listen to a speaker from Los Angeles reading the “Please call Stella” paragraph. Notice the vowel in *call* and *also*, and then in *Bob*. Do they sound the same or different to you? There is no single right answer. Californian speech is often reported to have the merger, but this is one person, and you are practicing listening.", label:"Listen: Los Angeles", listen:"e6u4-l1-a2"}
    ]},
    {h:"Noah Webster and American spelling", body:[
      {lead:"American spelling has a known history. A teacher and writer named Noah Webster helped to set it."},
      "After the American Revolution, Webster wanted a national standard of English that was simple and different from Britain’s. He published a spelling book in 1783, which was used in schools for generations, and a large dictionary, *An American Dictionary of the English Language*, in 1828. He promoted shorter spellings, and many of them became the American norm. Not every idea worked, and some of the spellings were not new. Webster made them more widely known.",
      {table:[["US spelling","British spelling"],["color","colour"],["center","centre"],["defense","defence"],["theater","theatre"],["traveler","traveller"]]},
      "For the longer story of English spelling, see {{english-spelling-history|English spelling history}}. The point for this unit is that spelling is a human choice with a date and a reason, and it shows that a standard is made, not found."
    ]},
    {h:"Regional voices: the South, New York City and Boston", body:[
      {lead:"Three regional accents show how much the US varies."},
      "**The South.** Southern speech is a family of accents. They differ from state to state and between country and city. Several features are often described. One is *y’all*, a regular pronoun used mainly for more than one person, like *you guys* in other regions. Another is the vowel in *ride*, *time* and *my*. Many Southern accents make it a single long vowel [aː], and not a gliding diphthong /aɪ/, at least before voiced sounds and at the end of a word. Some speakers also merge the vowels of *pin* and *pen* before a nasal sound. Some use *might could*, a double modal that regional grammar studies document.",
      {ex:"Listen to a speaker from Birmingham, Alabama. Notice the vowel in *five*, which is the only /aɪ/ word in the paragraph, and the vowel in *Wednesday*. Do you hear a glide or one long vowel in *five*? There is no single right answer. Southern speakers differ, and one person may use the feature more or less.", label:"Listen: Birmingham, Alabama", listen:"e6u4-l1-a3"},
      "**New York City and Boston.** Traditionally, both cities had non-rhotic accents. *Car* and *park* had no *r* sound after the vowel. Today, younger speakers in both cities are generally more rhotic than older ones, though the picture varies by neighborhood and by person.",
      "William Labov’s study of New York City (1966) is the classic test of this feature. In 1962, he went to three department stores: Saks Fifth Avenue (higher prices and status), Macy’s (middle) and S. Klein (lower). He asked salespeople where a department was, knowing the answer would be “fourth floor”. Then he pretended not to hear, and they repeated the words more carefully. He counted the *r* in *fourth* and *floor*.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Labov’s department-store study (1966)</text><rect class="d-sage" x="20" y="34" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="54" text-anchor="middle">Saks: higher-status store</text><text class="s" x="170" y="70" text-anchor="middle">Salespeople said the most r after vowels</text><rect class="d-gold" x="20" y="92" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="112" text-anchor="middle">Macy’s: middle</text><text class="s" x="170" y="128" text-anchor="middle">In between</text><rect class="d-rose" x="20" y="150" width="300" height="44" rx="8" stroke-width="2"/><text x="170" y="170" text-anchor="middle">S. Klein: lower-status store</text><text class="s" x="170" y="186" text-anchor="middle">Salespeople said the least r after vowels</text><text class="s" x="170" y="222" text-anchor="middle">In every store, the careful repeat</text><text class="s" x="170" y="240" text-anchor="middle">had more r than the first answer.</text><text class="s" x="170" y="270" text-anchor="middle">Question: where are the women’s shoes?</text><text class="s" x="170" y="288" text-anchor="middle">Answer counted: fourth floor</text></svg>', alt:"Three boxes stacked: Saks, Macy’s and S. Klein, with the amount of r after vowels falling from top to bottom. Text below says the careful repeat had more r in every store.", cap:"The design and the broad result of Labov’s study. The point is the pattern, with no exact numbers."},
      "He found two patterns. The higher the store, the more often salespeople pronounced the *r*. And in every store, the careful repeat had more *r* than the first answer. So in 1960s New York, the *r* was a mark of prestige, and speakers moved toward it when they spoke carefully. The study shows that speech varies with social class and with style, and that the variation is regular. It also shows a method: Labov did not need long interviews, only a short, natural question and a count.",
      {ex:"Listen to a speaker from Brooklyn (38) and then a speaker from Boston (73), who read the same paragraph. Notice the *r* in *store*, *her* and *brother*. The lesson says that traditional New York and Boston speech is non-rhotic and that younger speakers are generally more rhotic. You may hear the *r* in both, in one or in neither. Describe what you hear. One speaker is one person.", label:"Listen: Brooklyn", listen:"e6u4-l1-a4"},
      {ex:"Now listen to the speaker from Boston, who is older. Notice the same words.", label:"Listen: Boston", listen:"e6u4-l1-a5"},
      {key:"GA is a reference label, and not the accent of a place. Rhoticity, flapping and the cot–caught merger are features that vary across the US, and each regional accent is a full system."}
    ]}
   ],
   try:[
    M("e6u4-l1-x1","Which statement about General American (GA) is the most accurate?",1,[
      ["GA is the accent of people in the state of Ohio.","GA is not tied to one state, and speakers in Ohio have regional features too."],
      ["GA is a label for accents without strongly marked regional features, and it is used as a reference accent.","Right. Wells (1982) described it mostly by what it lacks."],
      ["GA is the only correct American accent.","No accent is more correct than another."],
      ["GA is a form of American grammar.","GA is an accent. Grammar is a separate matter."]
    ]),
    {id:"e6u4-l1-x2", type:"sort", q:"In GA, is the /t/ or /d/ in each word usually a flap [ɾ]?", buckets:["Usually a flap","Not a flap"], items:[
      {t:"water", b:0, why:"The /t/ is between two vowels, and the second is unstressed."},
      {t:"city", b:0, why:"The /t/ comes between /ɪ/ and an unstressed /i/."},
      {t:"attack", b:1, why:"The /t/ comes before a stressed vowel, so it is not flapped."},
      {t:"ladder", b:0, why:"A /d/ between a stressed and an unstressed vowel is also flapped."},
      {t:"top", b:1, why:"The /t/ is at the start of the word, and it is not between vowels."},
      {t:"better", b:0, why:"The /t/ is between a stressed and an unstressed vowel."},
      {t:"hotel", b:1, why:"The /t/ comes before the stressed second syllable, so it is not flapped."},
      {t:"writer", b:0, why:"The /t/ is between a stressed and an unstressed vowel."}
    ]},
    {id:"e6u4-l1-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Webster publishes a spelling book (1783)", why:"This is the earliest date in the lesson."},
      {t:"Webster publishes *An American Dictionary of the English Language* (1828)", why:"The dictionary came 45 years after the spelling book."},
      {t:"Labov publishes his New York department-store study (1966)", why:"The study came in the 1960s."},
      {t:"Labov, Ash and Boberg publish the *Atlas of North American English* (2006)", why:"The atlas is the latest of the four."}
    ]},
    {id:"e6u4-l1-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Rhotic","The *r* after a vowel is pronounced, as in *car* and *store*","GA is rhotic."],
      ["Flapping","/t/ or /d/ between vowels becomes a quick tap [ɾ], as in *water*","It follows a rule and depends on stress."],
      ["Cot–caught merger","*Cot* and *caught* have the same vowel","It is common in the West and in Canada, and it is spreading."],
      ["Southern /aɪ/ pattern","The vowel in *ride* is a single long vowel [aː]","Often before voiced sounds and at the end of a word."],
      ["*Y’all*","A pronoun used mainly for more than one person","It is a regular pronoun of Southern grammar."]
    ]},
    {id:"e6u4-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Flapping is a sign of careless speech.", flag:true, why:"Flapping follows a rule, and it appears in many careful speakers. Calling it careless judges people and does not describe the sound."}, " ", {t:"GA is rhotic.", flag:false, why:"Correct. GA pronounces the *r* after a vowel."}, " ", {t:"Every person in New York City drops the *r*.", flag:true, why:"This goes too far. Traditional speech was non-rhotic, but younger speakers are more often rhotic."}, " ", {t:"Webster promoted many American spellings.", flag:false, why:"Correct. Some were not new, but he made them more widely known."}, " ", {t:"The cot–caught merger is found everywhere in the US in the same way.", flag:true, why:"The merger is common in some regions and rare in others, so the word *everywhere* is wrong."}, "”"
    ]},
    {id:"e6u4-l1-x6", type:"number", q:"How many flaps do you expect in GA in this sentence: “A city writer got better water.” Count only a /t/ or /d/ between two vowels, with the second vowel unstressed.", answer:4, tol:0, unit:"flaps", why:"The flaps are in *city*, *writer*, *better* and *water*. The /t/ in *got* is followed by *b*, a consonant, so it is not between vowels.", wrongs:[{v:5, tol:0, why:"You counted *got*. Its /t/ is followed by the consonant /b/, so it is not flapped here."},{v:3, tol:0, why:"You missed one word. Check *writer*: its /t/ is between a stressed and an unstressed vowel."}], hint2:"Check each /t/: is it between two vowels, with the second unstressed?"},
    M("e6u4-l1-x7","You will hear a speaker from Columbus, Ohio. As the lesson explains, GA and most accents of the Midwest are rhotic, so listen for the *r* in *store*, *her* and *brother*. Which description is the typical pattern for this region?",1,[
      ["The *r* after a vowel is usually not pronounced.","That describes non-rhotic accents, such as traditional Boston speech."],
      ["The *r* after a vowel is usually pronounced.","Right. This is the typical pattern for GA and the Midwest. The answer comes from the typical pattern, not from this one recording. Notice whether this speaker follows it."],
      ["The *r* is replaced by a glottal stop.","That is a pattern for /t/ in some accents of Britain. It is not a pattern for *r*."],
      ["The *r* is pronounced only in *brother*.","In a rhotic accent, the *r* after a vowel is pronounced in all of these words."]
    ], {listen:"e6u4-l1-a1", hint:"Use what the lesson says about GA. Then listen and compare. One speaker is one person and may not follow every typical pattern."}),
    {id:"e6u4-l1-x8", type:"explain", q:"A classmate says, “Labov’s department-store study was only about who is rich.” Explain in your own words what the study shows about speech.", size:"3–4 sentences", prompt:"The study shows that …", hint:"Think about the three stores and about the careful repeat.", points:["Says the study compared three stores of different status","Says the r after vowels was pronounced more in higher-status stores","Says the careful repeat had more r than the first answer in every store","Concludes that speech varies regularly with social class and with style"], model:"Labov asked salespeople in three department stores of different status, and he counted the r in *fourth floor*. The r was pronounced more often in the higher-status store. In every store, the careful repeat had more r than the first answer. So the study shows that speech varies in regular ways with social class and with style, and that the r was a mark of prestige in New York at that time."}
   ],
   apply:{
    intro:"These tasks use free dictionary sites and the recordings from the lesson. Nothing needs an account.",
    tasks:[
     {t:"Compare US and UK words", how:[
       "Open an online dictionary with US and UK audio. The Cambridge Dictionary is one.",
       "Look up *water, city, bath, ask, store* and *caught*. Listen to both recordings of each word.",
       "Write down which words differ in the *r*, in the flap and in the vowel."
     ], write:"water… city… bath… ask… store… caught… Which differ most?"},
     {t:"Describe a speaker in plain words", how:[
       "Listen to the Columbus recording twice. The first time, listen for the whole message. The second time, listen for one feature from the lesson.",
       "Write two observations, such as “I hear the *r* in *store*” or “I notice a short vowel in *ask*”. Use only words that describe sounds.",
       "Check that you did not write words such as *good*, *bad*, *normal* or *strong*."
     ], write:"Two observations… Did I use only sound words?"}
    ],
    proof:"A short table of six words with US and UK differences, and two plain-word observations about the Columbus speaker."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”", note:"This section shows how class and speech are linked. Labov’s New York work belongs here."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u4-l2", title:"More Englishes of the US", minutes:55,
   hook:{q:"In African American English, a speaker says, “She be working.” Which statement is the most accurate?", options:["It is a mistake for “She is working.”","It is a regular structure, and it usually means that she works regularly or habitually.","It means that she will work tomorrow.","It is slang that has no rules."], answer:1, reveal:"**It marks a habit.** Habitual *be* is a regular feature of African American English. *She be working* means something like “she usually works”, and *She working* means “she is working now”. Standard English has no single form for this contrast."},
   goals:[
     "Explain what African American English (AAE) is, and why linguists say it has rules",
     "Explain habitual *be* and copula absence, and use Labov’s rule",
     "Describe the Oakland resolution (1996) in neutral words, and say what linguists said",
     "Describe Chicano English as a native variety, and bilingual speech as a normal skill",
     "Explain why no recordings are used in this lesson"
   ],
   learn:[
    {h:"Why there are no recordings in this lesson", body:[
      {lead:"This lesson has no Listen buttons. The reason is about evidence, and it is a good example of careful claims."},
      "The Speech Accent Archive tells us where a speaker lives and how old the speaker is. It does not tell us the speaker’s ethnicity. If we played a clip and said, “This is African American English” or “This is Chicano English”, we would be guessing about a real person. Also, the archive records people who read a written paragraph, and a reading task shows only part of a person’s speech. So this lesson describes the varieties through research, and it does not use any recording as an example.",
      "A second reason is respect. These varieties are often judged harshly. The best answer to unfair judgment is accurate description, and this lesson gives you facts and tools."
    ]},
    {h:"African American English: a full system", body:[
      {lead:"African American English (AAE) is spoken by many African Americans. Linguists describe it as a regular system with its own rules."},
      "Other names exist. *African American Vernacular English* (AAVE) is common in research. *Black English* and *Ebonics* are also used, and people feel differently about each. This course uses *African American English*, as many linguists now do. Three points matter before the details.",
      {list:["**Not every African American speaker uses it, and some other speakers do.** Many speakers move between AAE and other varieties depending on where they are and who they talk to.","**It varies.** It differs by region, age, class and situation, like every variety.","**Its history is debated.** It developed from the forced migration of Africans to North America and from contact with many kinds of English. Some scholars argue for early creole roots, and others argue that it grew mainly from English dialects. The research continues, and many scholars think more than one process was involved."]},
      "Labov (1969), in the essay “The Logic of Nonstandard English”, argued against the idea that children who speak AAE have a language that is illogical or poor. He showed that its grammar has rules, and that the same kind of reasoning works in it as in any other variety. That was an early, strong statement of a principle you met in Unit 1: a variety is judged by its own system, and not by another variety’s system."
    ]},
    {h:"Habitual be and copula absence", body:[
      {lead:"Two features are often used to show that AAE has its own rules: habitual *be*, and the absence of *is* and *are* in some places."},
      "**Habitual *be*** marks an action or state that happens regularly. Compare two sentences. *She be working* means that she works regularly or often. *She working* means that she is working at this moment. Standard English has no single form that makes this contrast, and it uses extra words such as *usually* or *always*. So AAE has a distinction that standard English handles with adverbs.",
      "**Copula absence** means that AAE can leave out *is* and *are* in some sentences: *She working*, *He nice*, *They at home*. The word *copula* means a form of *be* that links a subject to a description. This is not random. Labov (1969, in a separate paper on the copula) showed that the same rule governs both contraction in standard English and deletion in AAE.",
      {key:"Labov’s rule, in simple terms: where standard English can contract *is* or *are* (*She’s tired*), AAE can leave it out (*She tired*). Where standard English cannot contract it, AAE cannot leave it out."},
      "Here are two examples. *She is tired* can be *She’s tired* in standard English, so AAE can say *She tired*. But *Yes, she is* cannot be *Yes, she’s*, and *I wonder where he is* cannot be *I wonder where he’s*. In AAE, you also cannot say *Yes, she* or *I wonder where he*. The same positions block both contraction and deletion, so deletion is a continuation of a process that standard English also has. A system with a rule that precise is not a failure of grammar.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Labov’s rule for is and are</text><text class="s" x="170" y="38" text-anchor="middle">Standard English can contract → AAE can leave out</text><rect class="d-sage" x="20" y="52" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="74" text-anchor="middle">She is tired.</text><text class="s" x="170" y="92" text-anchor="middle">She’s tired.  →  She tired.</text><text class="s" x="170" y="106" text-anchor="middle">Contraction is possible, so deletion is possible.</text><text class="s" x="170" y="140" text-anchor="middle">Standard English cannot contract → AAE cannot leave out</text><rect class="d-rose" x="20" y="154" width="300" height="60" rx="8" stroke-width="2"/><text x="170" y="176" text-anchor="middle">Yes, she is.</text><text class="s" x="170" y="194" text-anchor="middle">Not: Yes, she’s.   Not: Yes, she.</text><text class="s" x="170" y="208" text-anchor="middle">Contraction is blocked, so deletion is blocked.</text><text class="s" x="170" y="246" text-anchor="middle">Habitual be is a separate feature:</text><text class="s" x="170" y="264" text-anchor="middle">She be working = she works regularly.</text><text class="s" x="170" y="282" text-anchor="middle">She working = she is working now.</text></svg>', alt:"Two boxes. The first shows that where standard English can contract, as in She is tired to She’s tired, AAE can also leave out the verb: She tired. The second shows that where standard English cannot contract, as in Yes, she is, AAE cannot leave it out. Text below contrasts habitual be with the plain form.", cap:"Labov’s rule: deletion happens only where contraction is possible. Habitual *be* is a separate feature."},
      "Other features are also described in research. **Negative concord** (*I don’t have no pencil*) is used in AAE and in many other varieties, as in the English of Britain (Unit 3). **Completive *done*** (*I done finished*) stresses that something is complete, and it is also found in Southern speech. Final consonant clusters are often shortened, so *test* can sound like *tes’*. The same shortening occurs in every variety, for example in *last night*, and in AAE it follows regular patterns too."
    ]},
    {h:"The Oakland resolution (1996)", body:[
      {lead:"In December 1996, the school board of Oakland, California, passed a resolution about African American students and their home speech. It became a national debate."},
      "The resolution, written with a task force, said that the home speech of many African American students was a systematic language variety, which it called Ebonics. It proposed to recognize this speech and to use it as a bridge, so that students could learn Standard English better. The news coverage was heated. Some critics thought that schools would stop teaching Standard English. Supporters said that the aim was to teach it more effectively, as teachers do with other students who start from another home variety.",
      "The board revised the resolution in January 1997. In the same month, the Linguistic Society of America (LSA) issued a statement. In outline, the LSA said that such varieties are systematic and have rules. It said that they are not “slang” or “broken English”. It said that research supports using a student’s home variety to help teach Standard English. It also said that the line between a language and a dialect is largely social and political. You can read the whole statement online, and you should read it before you repeat any summary, including this one.",
      "For this course, you do not need to take a side on the school policy. You need to be able to say what was proposed, say what linguists said about the variety, and say that neither “slang” nor “bad grammar” describes AAE."
    ]},
    {h:"Chicano English and Spanish–English bilingualism", body:[
      {lead:"Chicano English is spoken by many Mexican Americans, mostly in the Southwest and in cities such as Los Angeles."},
      "The name is the one used in much research, for example by Carmen Fought in *Chicano English in Context* (2003). People use many other words about themselves, such as *Mexican American*, *Latino* or *Hispanic*, and you should use the word that a person uses. Chicano English is a **native variety**: many of its speakers learned English as their first language, and some do not speak Spanish at all. It is not “learner English” or Spanish with English words.",
      "Researchers describe features such as rhythm that is closer to syllable timing, some vowel differences, and some grammatical features, as in other dialects. Speakers vary a great deal, and the features are tendencies. Chicano English can be a sign of local identity, in the way that a Boston or Southern accent can be.",
      "Many people in the US are also bilingual in Spanish and English. According to US Census Bureau surveys, Spanish is the most common language other than English that people speak at home. Bilingual speakers often switch between languages inside one conversation or even one sentence. This is called code-switching. Some researchers use a wider term, [[we-translanguaging|translanguaging]], for the way bilingual people use all their languages. Poplack (1980) showed that it follows grammatical rules. Speakers do not switch at random. They switch at places where the grammar of both languages allows it, and it takes skill in both. Like every variety in this course, it is a system, and not a gap.",
      {key:"African American English, Chicano English and bilingual speech are rule-governed systems. Judging them by the rules of another variety is the mistake, and describing their own rules is the method."}
    ]}
   ],
   try:[
    M("e6u4-l2-x1","Which sentence best describes habitual *be* in African American English?",2,[
      ["It is a mistake for *is*.","It is a regular feature with a meaning of its own."],
      ["It marks something that happens only once.","It is the opposite: it marks something regular."],
      ["It marks something that happens regularly, as in *She be working* for “she works regularly”.","Right. *She working* would mean that she is working now."],
      ["It is the way that all Americans form the past.","It is a feature of AAE, and not of all varieties of American English."]
    ]),
    {id:"e6u4-l2-x2", type:"sort", q:"Look at the standard-English sentence. Can *is* or *are* be contracted here? Labov’s rule says that AAE can leave out the verb only where standard English can contract it.", buckets:["Can contract (so AAE can leave out the verb)","Cannot contract (so AAE cannot leave it out)"], items:[
      {t:"She is tired.", b:0, why:"*She’s tired* is possible, so *She tired* is possible in AAE."},
      {t:"Yes, she is.", b:1, why:"*Yes, she’s* is not possible, because the verb is stressed at the end of the sentence."},
      {t:"They are ready.", b:0, why:"*They’re ready* is possible."},
      {t:"I wonder where he is.", b:1, why:"*I wonder where he’s* is not possible. The verb is at the end of the clause."},
      {t:"Who is there?", b:0, why:"*Who’s there?* is possible."},
      {t:"Here he is!", b:1, why:"*Here he’s!* is not possible."},
      {t:"He is the one who called.", b:0, why:"*He’s the one who called* is possible."},
      {t:"That is what it is.", b:1, why:"The final *is* is stressed, and it cannot be contracted. The first *is* can."}
    ]},
    {id:"e6u4-l2-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Labov publishes his study of *r* in New York department stores (1966)", why:"This study was published in the mid-1960s."},
      {t:"Labov writes about the logic of nonstandard English and the copula (1969)", why:"The two works from 1969 follow the 1966 study."},
      {t:"The Oakland school board passes its resolution (December 1996)", why:"This is the first of the two events from the 1990s."},
      {t:"The board revises the resolution, and the LSA issues a statement (January 1997)", why:"These events followed the first resolution."}
    ]},
    {id:"e6u4-l2-x4", type:"match", q:"Match each feature or term to its description.", pairs:[
      ["Habitual *be*","*She be working* means that she works regularly","It marks a habit, and *She working* means that she is working now."],
      ["Copula absence","*She tired* for *She is tired*","It follows the same positions as contraction in standard English."],
      ["Negative concord","*I don’t have no pencil*","Two negatives, one negative meaning, as in many varieties."],
      ["Native variety","A variety that many speakers learned as a first language","Chicano English is described this way."],
      ["Code-switching","Moving between two languages inside one conversation","Poplack (1980) showed that it follows rules."]
    ]},
    {id:"e6u4-l2-x5", type:"spot", q:"A student wrote these notes after Lesson 2. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"AAE is lazy English with no rules.", flag:true, why:"AAE has regular rules, such as the link between contraction and deletion."}, " ", {t:"Not every African American uses AAE.", flag:false, why:"Correct. Use varies by speaker and by situation."}, " ", {t:"Chicano English is the English of people who are learning the language.", flag:true, why:"It is a native variety, and many speakers learned English first."}, " ", {t:"Labov’s rule links deletion in AAE to contraction in standard English.", flag:false, why:"Correct. Deletion happens where contraction is possible."}, " ", {t:"Switching between Spanish and English shows that a speaker does not know either language well.", flag:true, why:"Code-switching takes skill in both languages and follows grammatical rules."}, "”"
    ]},
    {id:"e6u4-l2-x6", type:"number", q:"Read these four standard-English sentences: (1) She is tired. (2) Yes, she is. (3) They are ready. (4) I know where it is. In how many of them can *is* or *are* be contracted, so that Labov’s rule allows deletion in AAE?", answer:2, tol:0, unit:"sentences", why:"Sentences 1 and 3 can be contracted (*She’s tired*, *They’re ready*). In sentences 2 and 4, the verb is stressed at the end, so contraction is not possible. The answer is 2.", wrongs:[{v:4, tol:0, why:"This counts all four. A verb at the end of a sentence or clause cannot be contracted."},{v:1, tol:0, why:"You found one. Check sentence 3: *They’re ready* is possible."}], hint2:"Ask: can the verb be written as ’s or ’re? Which verbs are at the end?"},
    M("e6u4-l2-x7","A classmate reads *He be at the store* and says, “That is wrong, because *be* does not agree with *he*.” Which reply is the best?",1,[
      ["“You are right. It is a mistake.”","This judges AAE by the rules of another variety."],
      ["“In AAE, *be* here marks a habit, as in *He is at the store regularly*. It follows its own rule. Agreement is a rule of standard English, and not of every variety.”","Right. It describes the feature and names the system that it belongs to."],
      ["“It means that he will go to the store tomorrow.”","This is not the meaning. Habitual *be* is about repeated events."],
      ["“Nobody says that.”","Many speakers use habitual *be* in AAE."]
    ]),
    {id:"e6u4-l2-x8", type:"explain", q:"A friend says, “African American English is just slang.” Explain, in your own words, two facts that show it is more than that.", size:"3–5 sentences", prompt:"AAE is more than slang because …", hint:"Think about habitual be and about Labov’s rule for the copula.", points:["Says AAE has regular grammatical features such as habitual be","Explains that habitual be marks a regular action and differs from the plain form","Mentions Labov’s link between contraction and deletion","Says AAE is a variety with its own system and is not slang"], model:"Slang is a set of informal words. AAE also has grammar. For example, habitual *be* marks a regular action, as in *She be working*, and *She working* means that she is working now. Labov showed that AAE leaves out *is* and *are* only where standard English can contract them, so the pattern follows a rule. These facts show a system, which is more than slang."}
   ],
   apply:{
    intro:"These tasks use free reading. Nothing needs an account, and you do not need to listen to any recording.",
    tasks:[
     {t:"Read the LSA statement", how:[
       "Search for “Linguistic Society of America Oakland Ebonics resolution”. Open the statement from the society or a university.",
       "Find two sentences about what linguists say the variety is, and two about teaching.",
       "Write the four sentences in your own words, and check that you changed no facts."
     ], write:"Two sentences about the variety… Two sentences about teaching…"},
     {t:"Apply Labov’s rule", how:[
       "Write six short English sentences with *is* or *are*. Make three where the verb can be contracted and three where it cannot.",
       "For each one, write the contracted form or say why contraction is not possible.",
       "Say what Labov’s rule predicts for AAE in each sentence."
     ], write:"Six sentences… contracted or not… prediction…"}
    ],
    proof:"Four sentences about the LSA statement in your own words, and six sentences with contraction notes and Labov’s prediction."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”", note:"This section looks at how ethnicity and speech are linked. Read it after the lesson."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u4-l3", title:"Canadian English", minutes:55,
   hook:{q:"A popular stereotype says that Canadians say the word *about* with the vowel of *boot*. What does research on Canadian English find?", options:["The stereotype is correct.","The vowel is still a gliding vowel, and it starts higher in the mouth than in much of the US. It is called Canadian raising.","Canadians have no special vowels.","Canadians say *about* in the same way as people in London."], answer:1, reveal:"**The vowel still glides, and it starts higher.** Canadian raising affects the start of the vowels in words such as *about*, *house* and *write*, but only before voiceless consonants. It is a regular rule, and it is not the vowel of *boot*."},
   goals:[
     "Describe Canadian English as a mix of US and British models, in spelling and words",
     "Explain Canadian raising with *write* and *ride*, and say why the stereotype about *about* is wrong",
     "Describe the cot–caught merger and the Canadian Shift, with hedging",
     "Describe the uses of *eh* as a discourse marker",
     "Explain why Canadian English is not uniform, with Newfoundland and Quebec as examples"
   ],
   learn:[
    {h:"A big country with many Englishes", body:[
      {lead:"Canadian English is the English of a very large country. It is easy to describe in general terms, and it is wrong to describe it as one thing."},
      "Canada has two official languages at the federal level, English and French. In the province of Quebec, French is the official language of the province, and English speakers there hear French all around them. Canada also has many Indigenous languages, and English in Indigenous communities has its own features. English in Newfoundland, which joined Canada in 1949, differs strongly from English in Ontario or British Columbia. When this lesson says “Canadian English”, it means the broad pattern that many English-speaking Canadians share, mostly from the large cities in Ontario and the West, and it points out the exceptions.",
      {tip:"In this unit you meet only a few speakers. A speaker from Vancouver and a speaker from Toronto are two people, and they cannot stand for all Canadians."}
    ]},
    {h:"Between two models: spelling and words", body:[
      {lead:"Canadian English is between two big models, and it borrows from both."},
      "The United States is next door, and its media reach every home. Britain was the colonial power, and its models shaped the school system. The result is a mix. Most Canadian dictionaries and style guides use *colour*, *centre* and *cheque*, as in Britain, and *-ize*, as in the US. They use *tire*, as in the US. Usage is mixed in practice, and many Canadians also use US spellings, especially in everyday writing and online.",
      {table:[["Word","US","Canada","Britain"],["color","color","colour","colour"],["center","center","centre","centre"],["realize","realize","realize","realise (often)"],["tire (on a car)","tire","tire","tyre"],["check (money)","check","cheque","cheque"]]},
      "Spoken words show the same mix. The last letter of the alphabet is *zed* for most Canadians, as in Britain, and *zee* in the US. Canadians say *washroom* for a public restroom, and *toque* for a knitted winter hat. The one-dollar coin is the *loonie* and the two-dollar coin is the *toonie*. These are commonly reported, and some are more regional than others.",
      "Canadian English is not a half-and-half copy. It is a system in its own right. Dictionaries differ in details, and spoken usage differs more, so treat the table as a guide to typical choices. The next section shows a feature that you will not find in either neighbor in the same form."
    ]},
    {h:"Canadian raising", body:[
      {lead:"In many Canadian accents, two diphthongs start higher in the mouth before voiceless consonants. Linguists call this Canadian raising."},
      "J. K. Chambers (1973) gave the feature this name. The two vowels are the one in *price* (/aɪ/) and the one in *mouth* (/aʊ/). Before a **voiceless** consonant (such as /t/, /s/, /f/ or /θ/), the vowel starts with a raised, mid sound. Before a **voiced** consonant, or at the end of a word, it starts with a lower, more open sound.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Canadian raising (simplified)</text><rect class="d-gold" x="20" y="34" width="300" height="100" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">Before a voiceless sound</text><text class="s" x="170" y="76" text-anchor="middle">The vowel starts higher in the mouth</text><text x="170" y="100" text-anchor="middle">write · life · house (noun)</text><text x="170" y="122" text-anchor="middle">about · outside · mouth</text><rect class="d-sage" x="20" y="150" width="300" height="100" rx="8" stroke-width="2"/><text x="170" y="172" text-anchor="middle">Before a voiced sound or at the end</text><text class="s" x="170" y="192" text-anchor="middle">The vowel starts lower and more open</text><text x="170" y="216" text-anchor="middle">ride · five · house (verb)</text><text x="170" y="238" text-anchor="middle">loud · how · my</text><text class="s" x="170" y="272" text-anchor="middle">Typical pattern. Speakers vary.</text><text class="s" x="170" y="290" text-anchor="middle">The vowel still glides in every word.</text></svg>', alt:"Two boxes. The first, before a voiceless sound, lists write, life, house as a noun, about, outside and mouth, with the vowel starting higher. The second, before a voiced sound or at the end of a word, lists ride, five, house as a verb, loud, how and my, with the vowel starting lower.", cap:"Canadian raising depends on the sound after the vowel."},
      "Pairs show the rule clearly. *Write* and *ride* differ in their vowels as well as in the final consonant. The noun *house* (/s/) and the verb *house* (/z/) have different vowel starts. Many North American speakers flap the /t/ in *writer* and the /d/ in *rider* (see {{we-american-english|Lesson 1}}). Then the two words have the same consonant, and the vowel tells them apart.",
      "A stereotype says that Canadians say *about* with the vowel of *boot*. That is not what research finds. The vowel in *about* is still a diphthong. It starts in a mid position and glides, and it differs from the vowel in much of the US only in where it starts. A listener from outside Canada may hear this difference as strange, and a Canadian hears the same difference in the other direction. Raising is also reported in parts of the northern US, so it is not a border line.",
      {tip:"The “Please call Stella” paragraph has no good test word for Canadian raising. It has *five*, but that has a voiced consonant after the vowel, so it is a contrast and not a test. The listening tasks for Canadian English therefore use other features."}
    ]},
    {h:"Cot and caught, and the Canadian Shift", body:[
      {lead:"Most English-speaking Canadians have the cot–caught merger from Lesson 1."},
      "Researchers report the merger as widespread in English-speaking Canada, although there are regional differences. When *cot* and *caught* become one vowel, other vowels in the system can move to keep sounds apart. The **Canadian Shift** is a pattern that Clarke, Elms and Youssef (1995) described. In it, the short front vowels, especially the vowel of *trap*, move lower and further back in the mouth. This is a tendency that has been studied in many speakers in Ontario and the West, and it is not found in every speaker.",
      {ex:"Listen to a speaker from Vancouver reading the “Please call Stella” paragraph. Notice the *r* in *store*, *her* and *brother*. Then notice the vowel in *call* and in *Bob*. Do they sound the same or different to you? There is no single right answer, and one speaker is one person.", label:"Listen: Vancouver", listen:"e6u4-l3-a1"}
    ]},
    {h:"The small word eh", body:[
      {lead:"Many people know *eh* as a sign of Canadian English. Linguists describe it as a discourse marker with several jobs."},
      "A [[we-discourse-marker|discourse marker]] is a small word that helps a conversation work. *Eh* can ask for agreement (*Nice day, eh?*), check that the listener is following, or mark a point in a story (*So I went to the store, eh, and …*). The same kind of word exists in other varieties. Some other varieties, such as New Zealand English and Scottish English, are also described as using *eh* in similar ways. So *eh* is a real feature, and it is not a joke.",
      "Studies also show that Canadians do not use *eh* all the time. How often a person uses it depends on age, region and situation, and many speakers use it rarely. So a good claim is “many Canadians use *eh* in some situations”, and not “Canadians say *eh* at the end of every sentence”."
    ]},
    {h:"Newfoundland, Quebec and the limits of one description", body:[
      {lead:"Newfoundland English and Quebec English show why a single description of Canadian English is not enough."},
      "**Newfoundland English** is often described as the most distinctive English in Canada. The island was settled by people from southwest England and from Ireland, and its English has features from both. Sandra Clarke (2010) describes grammar that is also found in Irish English, such as the *after*-perfect (*I’m after eating*) and habitual *do be*, which you met in Unit 3. Not every speaker uses these, and the use depends on age and place.",
      "**Quebec English** is the English of speakers in a mostly French-speaking province, often in contact with French every day. Many speakers in Montreal use words from French, such as *dépanneur*, a corner store, and many are bilingual. Their English is shaped by that contact, as the English of Spanish–English bilinguals is in the US.",
      "These examples show a rule for every variety in this unit. Say what is typical, say who it is typical of, and say that exceptions exist."
    ]}
   ],
   try:[
    M("e6u4-l3-x1","Which statement about Canadian raising is the most accurate?",2,[
      ["It makes *about* sound like *boot*.","The vowel is still a diphthong, and this is a stereotype."],
      ["It applies to every vowel in the language.","It affects two diphthongs, /aɪ/ and /aʊ/."],
      ["It raises the start of /aɪ/ and /aʊ/ before voiceless consonants, as in *write* and *house* (noun).","Right. Before voiced consonants, the start is lower."],
      ["It happens only in Canada, and in no other place.","Raising is also reported in parts of the northern US."]
    ]),
    {id:"e6u4-l3-x2", type:"sort", q:"In a typical Canadian accent, does the vowel in each word have a raised start?", buckets:["Raised start (before a voiceless sound)","Lower start (before a voiced sound or at the end)"], items:[
      {t:"write", b:0, why:"The vowel is before /t/, which is voiceless."},
      {t:"ride", b:1, why:"The vowel is before /d/, which is voiced."},
      {t:"life", b:0, why:"The vowel is before /f/, which is voiceless."},
      {t:"five", b:1, why:"The vowel is before /v/, which is voiced."},
      {t:"house (the noun)", b:0, why:"The final sound is /s/, which is voiceless."},
      {t:"house (the verb)", b:1, why:"The final sound is /z/, which is voiced."},
      {t:"how", b:1, why:"The vowel is at the end of the word."},
      {t:"mouth", b:0, why:"The vowel is before /θ/, which is voiceless."}
    ]},
    {id:"e6u4-l3-x3", type:"order", q:"Put the steps in the best order for predicting the vowel in a word such as *outside*.", items:[
      {t:"Find the diphthong /aʊ/ or /aɪ/ in the word", why:"The rule applies only to these two vowels."},
      {t:"Look at the sound that comes right after it", why:"The rule depends on the next sound."},
      {t:"Decide whether that sound is voiceless or voiced", why:"/t/ in *outside* is voiceless."},
      {t:"Predict a raised start before a voiceless sound, and a lower start otherwise", why:"This is the typical pattern, and speakers vary."}
    ]},
    {id:"e6u4-l3-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["*Zed*","The name of the letter *z* for most Canadians","Like Britain, and unlike the US *zee*."],
      ["Canadian raising","The start of /aɪ/ and /aʊ/ is higher before voiceless consonants","Chambers (1973) named it."],
      ["*Eh*","A discourse marker with several uses","It can ask for agreement or mark a point in a story."],
      ["Canadian Shift","Short front vowels, especially *trap*, move lower and further back","Described by Clarke, Elms and Youssef (1995)."],
      ["*Dépanneur*","A French word for a corner store, used by many English speakers in Montreal","It shows language contact in Quebec English."]
    ]},
    {id:"e6u4-l3-x5", type:"spot", q:"A student wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Canadian English is one uniform accent from coast to coast.", flag:true, why:"Newfoundland, Quebec and other regions differ from each other."}, " ", {t:"Many Canadians say *zed* for the letter z.", flag:false, why:"Correct. This is the usual form."}, " ", {t:"Canadians say *about* with the vowel of *boot*.", flag:true, why:"This is a stereotype. The vowel still glides, and it starts in a mid position."}, " ", {t:"The word *eh* is used for several purposes.", flag:false, why:"Correct. It can ask for agreement or mark a point in a story."}, " ", {t:"Canadians use *eh* at the end of every sentence.", flag:true, why:"Use of *eh* depends on the speaker and the situation."}, "”"
    ]},
    {id:"e6u4-l3-x6", type:"number", q:"Here are six words: *write, ride, life, five, house* (noun), *house* (verb). In a typical Canadian accent, how many of them have a raised start in the vowel?", answer:3, tol:0, unit:"words", why:"*Write*, *life* and the noun *house* have a voiceless sound after the vowel, so the start is raised. *Ride*, *five* and the verb *house* have a voiced sound, so the start is lower. The answer is 3.", wrongs:[{v:6, tol:0, why:"You counted all six. The raised start applies only before voiceless sounds."},{v:2, tol:0, why:"You missed one. Check *life*: the /f/ is voiceless."}], hint2:"Ask for each word: is the sound after the vowel voiceless?"},
    M("e6u4-l3-x7","You will hear a speaker from Toronto. As the lesson explains, English in Canada is typically rhotic, so listen for the *r* in *store*, *her* and *brother*. Which description is the typical pattern?",1,[
      ["The *r* after a vowel is usually not pronounced.","That describes non-rhotic accents, such as Australian English."],
      ["The *r* after a vowel is usually pronounced.","Right. This is the typical pattern for English in Canada. The answer comes from the typical pattern, and not from this one recording. Notice whether this speaker follows it."],
      ["The *r* is pronounced only before a consonant.","In a rhotic accent, the *r* is pronounced after a vowel, also at the end of a word."],
      ["The *r* is replaced by a glottal stop.","That is not a pattern for *r* in any of the accents in this unit."]
    ], {listen:"e6u4-l3-a2", hint:"Use what you know about Canadian and US English. Then listen and compare. One speaker is one person."}),
    {id:"e6u4-l3-x8", type:"explain", q:"A friend says, “Canadians all say *about* with the vowel of *boot*.” Explain what is wrong with this statement, and describe what Canadian raising really is.", size:"3–5 sentences", prompt:"The statement is wrong because …", hint:"Think about the vowel, where it starts, and what comes after it.", points:["Says the vowel in about is still a diphthong","Says the start is raised before voiceless consonants","Gives a pair such as write and ride","Says the stereotype is not what research finds"], model:"The statement is a stereotype. In Canadian raising, the vowels /aɪ/ and /aʊ/ start higher before voiceless consonants, as in *write* and *about*, and they still glide. Before voiced consonants, as in *ride*, the start is lower. So the vowel in *about* is not the vowel in *boot*. It is a regular pattern, and it is a difference in the start of a diphthong."}
   ],
   apply:{
    intro:"These tasks use free dictionary sites and the recordings from the lesson. Nothing needs an account.",
    tasks:[
     {t:"Find Canadian spellings", how:[
       "Open a free online dictionary that shows US and British spellings, such as the Cambridge Dictionary.",
       "Look up *color, center, realize, tire, check* and *program*.",
       "Write down which spelling is US, which is British, and which one a Canadian news website uses."
     ], write:"color… center… realize… tire… check… program… What did I find?"},
     {t:"Listen for raising", how:[
       "Find a short Canadian news or radio clip online that says *about* or *house*.",
       "Listen to the word in the clip, and then to the same word in a US dictionary recording.",
       "Write two plain observations about where the vowel starts, and use the word *typical* in one of them."
     ], write:"Two observations… typical…"}
    ],
    proof:"A table of six words with US, Canadian and British spellings, and two plain observations about the vowel in a Canadian clip."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"This section shows how place and speech are linked. Use it to see how researchers map a feature."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u4-l4", title:"Australian and New Zealand English", minutes:55,
   hook:{q:"A listener hears a speaker of Australian English end a statement with a rising pitch and decides, “She is unsure.” What do studies of this rising pitch suggest?", options:["The listener is right, because a rise always means doubt.","The rise has several uses, such as checking that the listener is following. It does not mean that the speaker is unsure.","The rise is a mistake that speakers should stop making.","The rise is used only by teenagers."], answer:1, reveal:"**The rise has several uses, and doubt is not the usual one.** It is called the high rising terminal. Studies describe uses such as checking that the listener is following and keeping the turn. It is found in many varieties of English."},
   goals:[
     "Say how Australian and New Zealand English formed, and name the peoples who were already there",
     "Describe the broad–general–cultivated scale (Mitchell and Delbridge, 1965) without ranking it",
     "Explain the high rising terminal (uptalk) and why it is not a sign of uncertainty",
     "Describe features of New Zealand vowels, and the place of te reo Māori words in New Zealand English",
     "Describe Aboriginal English as its own variety, and explain why this course has no clip of it"
   ],
   learn:[
    {h:"Two countries, one family of accents", body:[
      {lead:"Australian English and New Zealand English share a lot, and each has its own system. Both are non-rhotic, like Southern British English."},
      "Both were formed by settlers. British colonization of Australia began at Sydney in 1788. Settlement of New Zealand grew after the Treaty of Waitangi in 1840. Both places were already home to peoples with their own languages: Aboriginal and Torres Strait Islander peoples in Australia, and Māori in New Zealand (Unit 2 tells this history). The settlers came from many parts of Britain and Ireland, and their children’s speech mixed those dialects into a new one. Peter Trudgill (2004) calls this process new-dialect formation, which you met in Unit 2.",
      "Because both varieties are non-rhotic, *store* and *car* have no *r* sound after the vowel. As in Lesson 1, the /t/ in a word such as *water* is often a flap, and this is common in both countries. In Unit 3, you met other non-rhotic accents in England, so this feature alone does not tell Australia from England."
    ]},
    {h:"The Australian continuum", body:[
      {lead:"Linguists describe Australian English as a scale, with three named points: broad, general and cultivated."},
      "Mitchell and Delbridge (1965) studied the speech of Australian school students and described these three kinds. **Broad** is the most distinctive, and **cultivated** is the closest to British models. **General** is in the middle, and it is the form that most speakers use. Later studies report that cultivated speech has become much less common.",
      "The three labels are points on one scale, with no sharp lines between them. In the same way, you saw the scale of speech in the southeast of England in Unit 3. A person can move along the scale depending on the situation. The labels do not rank accents. Broad Australian English has sometimes been linked in stereotypes with working-class speech, and the stereotype is a judgment about people, not a fact about the sounds. The system is as regular as the others.",
      "Australian vowels have a few well-known features. The start of the vowels in *face*, *price* and *goat* is in a different place than in GA or SSBE, and the vowel in *goose* is often further forward. Most BATH words, such as *bath*, *ask* and *laugh*, have a long vowel, as in SSBE. Words such as *dance* and *plant* vary by region, as Unit 3 noted: the long vowel is more common in South Australia, and the short vowel elsewhere. Some everyday words are shortened, with the endings *-ie* or *-o*: *arvo* (afternoon), *brekkie* (breakfast) and *servo* (service station).",
      "Toby Whitlock is from Australia. He taught English at a school in the Japanese countryside for two years, and he is now a master’s student in Japanese linguistics. A teacher in his position can show students that Australian English follows rules, like the varieties on their audio recordings, and that no variety is the “real” English. This is a good habit for any teacher of English."
    ]},
    {h:"The high rising terminal", body:[
      {lead:"In many places, a statement can end with a rise in pitch. Linguists call this the high rising terminal (HRT), and the popular name is uptalk."},
      "Early studies in Australia (Guy and colleagues, 1986) and New Zealand (Britain, 1992) described the rise as a change that was spreading among younger speakers. Since then, it has been reported in many varieties, including Canadian, American and British English. It is also a long-standing feature in some Northern Irish accents, as Unit 3 noted for Belfast. So Australia and New Zealand are not the only places that have it.",
      "Many people think that a rise means that the speaker is unsure. Research does not support that as the general rule. Paul Warren (2016) summarizes the studies and lists several uses: checking that the listener is following, keeping the turn in a conversation, introducing new information and building a shared story. A speaker who is very sure of the facts can use it. Listeners also differ in how they judge it, and the criticism is often aimed at young speakers. That is a social reaction, and not a fact about meaning.",
      {fig:'<svg viewBox="0 0 340 280"><text x="170" y="18" text-anchor="middle">Two ways to end a statement</text><rect class="d-sage" x="20" y="34" width="300" height="86" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">Falling ending</text><path class="d-ink" d="M50 78Q110 70 170 82Q220 96 290 104" fill="none" stroke-width="3"/><text class="s" x="170" y="114" text-anchor="middle">I booked the tickets.</text><rect class="d-gold" x="20" y="136" width="300" height="86" rx="8" stroke-width="2"/><text x="170" y="158" text-anchor="middle">High rising terminal</text><path class="d-ink" d="M50 192Q110 188 170 194Q230 196 290 168" fill="none" stroke-width="3"/><text class="s" x="170" y="216" text-anchor="middle">I booked the tickets.</text><text class="s" x="170" y="246" text-anchor="middle">The rise often checks that the listener follows.</text><text class="s" x="170" y="264" text-anchor="middle">It does not usually mean doubt.</text></svg>', alt:"Two boxes. The first shows a line of pitch that falls at the end of the statement. The second shows a line of pitch that rises at the end of the same statement. Text below says the rise often checks that the listener is following and does not usually mean doubt.", cap:"A sketch of the pitch at the end of a statement. Real speech varies a great deal."},
      "A caution for the listening tasks: the speakers in this unit read a text aloud. In a reading, you can hear rises at the end of items in a list (*six spoons of fresh snow peas, five thick slabs of blue cheese …*), and that is normal in every variety. It is not the HRT. HRT is easier to study in conversation."
    ]},
    {h:"New Zealand vowels and the stereotype problem", body:[
      {lead:"New Zealand English has a well-known set of vowel changes. The system is regular, and jokes about it are a stereotype."},
      "Researchers describe a short front vowel shift (Gordon and colleagues, 2004). The vowel in *kit* is central, and closer to the schwa /ə/ than the *kit* vowel of GA, SSBE or Australian English. The vowels in *dress* and *trap* are raised, so that they are closer to the top of the mouth. Hearers from other countries may mishear one word for another, and this has produced jokes. We will not repeat those jokes. The system is regular, and speakers of New Zealand English understand each other well.",
      "Another change affects *near* and *square*. Many younger New Zealanders have merged the two vowels, so *beer* and *bear* sound alike. In the far south, in Southland and some parts of Otago, some speakers pronounce an *r* after a vowel (they are rhotic). Dunedin is in the south, so a speaker from there may or may not have it. The typical pattern for the country remains non-rhotic.",
      {ex:"Listen to a speaker from Sydney reading the “Please call Stella” paragraph. Notice the *r* in *store* and *her*. Then listen to the ends of the statements, and remember that the list in the paragraph has a list intonation. There is no single right answer. One speaker is one person.", label:"Listen: Sydney", listen:"e6u4-l4-a1"},
      {ex:"A speaker from Perth, Western Australia. Notice the vowel in *five* and in *snake*. Are they different from the vowels you hear in the speakers from the US and Canada? Describe what you hear, and avoid words such as *good* or *strange*.", label:"Listen: Perth", listen:"e6u4-l4-a2"},
      {ex:"A speaker from Auckland. Notice the vowel in *six*, *thick* and *big*, and in *fresh*, *red* and *Wednesday*. The lesson says that the first group has a central vowel in typical New Zealand English. Compare it with the Sydney speaker. One speaker is one person.", label:"Listen: Auckland", listen:"e6u4-l4-a3"},
      {ex:"A speaker from Dunedin. Notice the *r* in *store*, *her* and *brother*, and remember what the lesson says about the south of the country. Describe what you hear.", label:"Listen: Dunedin", listen:"e6u4-l4-a4"}
    ]},
    {h:"Te reo Māori in New Zealand English", body:[
      {lead:"New Zealand English has taken many words from te reo Māori, the language of the Māori people. Their use has grown over time."},
      "Te reo Māori became an official language of New Zealand in 1987, and New Zealand Sign Language in 2006. Everyday English in New Zealand has words such as *kia ora* (a greeting, also used to say thanks), *whānau* (extended family), *kai* (food), *mana* (authority and respect) and *Aotearoa*, a Māori name for the country. Many writers now use the macron, the line over the vowel, as in *Māori* and *whānau*. The long vowel is part of the word. Many New Zealanders also try to say Māori place names in a way that is close to te reo Māori. This has been changing over the past decades.",
      "This is language contact, as in Unit 2. The words are not “decoration”. They are part of how many New Zealanders talk about family, food, nature and community. English in Australia also has loan words from Aboriginal languages, such as *kangaroo*, and place names with Aboriginal origins. Other New Zealand words are not from Māori. Examples are *jandals* (flip-flops, called *thongs* in Australia), *dairy* (a corner store) and *chilly bin* (a cooler)."
    ]},
    {h:"Aboriginal English: its own variety", body:[
      {lead:"Aboriginal English is spoken by many Aboriginal and Torres Strait Islander people in Australia. It is not a poor version of other Australian English."},
      "The term covers a range of varieties. They differ by region and community. Traditional languages and Kriol, a creole language, have shaped them (Unit 7 covers creoles). Diana Eades (2013) and other researchers describe ways of using English that many Aboriginal speakers share. Two examples are indirect ways of asking for information, and a comfortable use of silence in conversation. Differences like these can lead to misunderstanding when speakers do not know each other’s rules, for example in schools, hospitals and courts. Some words, such as *deadly* (excellent) and *mob* (a group of people), are used in Aboriginal English and can be heard in wider Australian English.",
      "The Speech Accent Archive does not record the ethnicity of its speakers. So there is no clip of this variety in this unit, as in Lesson 2. The best way to learn about Aboriginal English is through the work of Aboriginal speakers and researchers."
    ]}
   ],
   try:[
    M("e6u4-l4-x1","Which statement about the broad–general–cultivated scale is the most accurate?",2,[
      ["It ranks speakers from the worst to the best.","The labels describe points on a scale, and they do not rank people."],
      ["It describes three separate languages.","The three are points on one scale, with no sharp lines."],
      ["It describes three points on one scale, and the general point is the form that most speakers use.","Right. Mitchell and Delbridge (1965) used these labels for a scale."],
      ["It describes the speech of New Zealand only.","It was developed for Australian English."]
    ]),
    {id:"e6u4-l4-x2", type:"sort", q:"Sort each feature by where the lesson describes it. Use *both* when the lesson says that it is common in both countries.", buckets:["Mainly Australia","Mainly New Zealand","Both"], items:[
      {t:"The broad–general–cultivated scale (Mitchell and Delbridge, 1965)", b:0, why:"This study described Australian speech."},
      {t:"A central vowel in *kit*", b:1, why:"This is part of the short front vowel shift in New Zealand English."},
      {t:"Non-rhotic speech as the typical pattern", b:2, why:"Both are mainly non-rhotic."},
      {t:"Official status for te reo Māori since 1987", b:1, why:"This is the status of te reo Māori in New Zealand."},
      {t:"A high rising terminal in statements", b:2, why:"It is described in both countries, and elsewhere too."},
      {t:"Merger of *near* and *square* among many younger speakers", b:1, why:"It is reported for New Zealand English."},
      {t:"Words such as *arvo* and *servo*", b:0, why:"These shortened words are described for Australian English."},
      {t:"A flap in the middle of *water*", b:2, why:"Flapping is common in both."}
    ]},
    {id:"e6u4-l4-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"British colonization begins at Sydney (1788)", why:"This is the earliest date in the lesson."},
      {t:"The Treaty of Waitangi (1840)", why:"This came after the colony at Sydney."},
      {t:"Mitchell and Delbridge publish their study of Australian speech (1965)", why:"This came in the middle of the 20th century."},
      {t:"Te reo Māori becomes an official language of New Zealand (1987)", why:"This is the latest of the four."}
    ]},
    {id:"e6u4-l4-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["High rising terminal","A rise in pitch at the end of a statement","It has several uses, and it does not usually mean doubt."],
      ["*Whānau*","A te reo Māori word for extended family, used in New Zealand English","It shows language contact."],
      ["*Arvo*","An Australian shortened word for *afternoon*","It follows a pattern with *-o* and *-ie* endings."],
      ["Southland","An area in the far south of New Zealand where some speakers are rhotic","It is an exception to the national pattern."],
      ["Aboriginal English","A variety spoken by many Aboriginal and Torres Strait Islander people","It has its own features and is not a poor version of other Australian English."]
    ]},
    {id:"e6u4-l4-x5", type:"spot", q:"A student wrote these notes after Lesson 4. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"A rising pitch at the end of a statement always means that the speaker is unsure.", flag:true, why:"Studies show several uses, and doubt is not the usual one."}, " ", {t:"Both Australian and New Zealand English are typically non-rhotic.", flag:false, why:"Correct. This is the typical pattern."}, " ", {t:"Broad Australian English is bad English.", flag:true, why:"Broad is a point on a scale. It is not worse than the others."}, " ", {t:"Te reo Māori words are part of everyday New Zealand English.", flag:false, why:"Correct. Words such as *kia ora* and *whānau* are common."}, " ", {t:"Aboriginal English is the same as the speech of all Australians.", flag:true, why:"It is a variety with its own features, and it differs from other Australian English."}, "”"
    ]},
    {id:"e6u4-l4-x6", type:"number", q:"Te reo Māori became an official language of New Zealand in 1987, and New Zealand Sign Language in 2006. How many years later did New Zealand Sign Language become official?", answer:19, tol:0, unit:"years", why:"2006 − 1987 = 19 years.", wrongs:[{v:29, tol:0, why:"This subtracts 1977 by mistake. Check the date: 1987."},{v:21, tol:0, why:"This subtracts 1985. Use 1987 as the starting year."}], hint2:"Subtract the earlier year from the later year."},
    M("e6u4-l4-x7","You will hear a speaker from Sydney. As the lesson explains, Australian English is typically non-rhotic, so listen for the *r* in *store* and *her*. Which description is the typical pattern?",1,[
      ["The *r* after a vowel is usually pronounced, as in Canadian English.","That describes rhotic accents. Australian English is typically non-rhotic."],
      ["The *r* after a vowel is usually not pronounced, and the vowel carries the difference.","Right. This is the typical pattern for Australian English. The answer comes from the typical pattern, and not from this one recording. Notice whether this speaker follows it."],
      ["The *r* is pronounced only at the end of a word.","Both the end of a word and the position before a consonant lack an *r* in the typical pattern."],
      ["The *r* is pronounced as a glottal stop.","That is not a pattern for *r* in Australian English."]
    ], {listen:"e6u4-l4-a5", hint:"Use what the lesson says about Australian English. Then listen and compare. One speaker is one person."}),
    {id:"e6u4-l4-x8", type:"explain", q:"When Toby taught English in the Japanese countryside, a student told him, “When you end a statement with a rising voice, I think you are not sure.” Give Toby a short, kind answer that uses what you know about the high rising terminal.", size:"3–5 sentences", prompt:"Toby could say that …", hint:"Think about the uses of the rise, other varieties and the words *typical* and *often*.", points:["Says the rise is called the high rising terminal","Says it often checks that the listener is following or keeps the turn","Says it does not usually mean doubt","Says it is found in many varieties of English"], model:"Toby could say that the rise is called the high rising terminal, and that many speakers of English use it, in Australia and in other places. Studies show that it often checks that the listener is following or keeps the turn in a conversation. It does not usually mean that the speaker is unsure. He could add that he is happy to say a sentence with a falling ending too, and that both are regular ways of speaking."}
   ],
   apply:{
    intro:"These tasks use free websites and the recordings from the lesson. Nothing needs an account.",
    tasks:[
     {t:"Compare four voices", how:[
       "Make a table with four rows: Sydney, Perth, Auckland and Dunedin. Add three columns: the *r* in *store*, the vowel in *six*, and one more feature of your choice.",
       "Listen twice to each recording. Write only what you hear, such as “r not pronounced” or “not sure”.",
       "Write two sentences about the table, and use the words *typical* and *one speaker*."
     ], write:"My table… two sentences with typical and one speaker…"},
     {t:"Find three Māori words", how:[
       "Open a New Zealand news website and find three words from te reo Māori in one article.",
       "For each word, use a free online Māori dictionary to find its meaning.",
       "Write each word with its meaning, and say whether the writer used a macron."
     ], write:"Word… meaning… macron or not…"}
    ],
    proof:"A table of four speakers with careful notes, two sentences with typical and one speaker, and three te reo Māori words with their meanings."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, section 3.12 “Tone and intonation”", note:"Read it for the idea of pitch movement on a sentence, which helps with the high rising terminal."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u4-l5", title:"South African English and a listening lab", minutes:60,
   hook:{q:"A visitor in South Africa is told, “The post office is just after the robot.” What does *robot* most likely mean?", options:["A machine that works in a factory","A traffic light","A road sign for trucks","A kind of taxi"], answer:1, reveal:"**A traffic light.** *Robot* for a traffic light is a well-known word in South African English. It is used in some neighboring countries too. Many words in this lesson show how English meets other languages."},
   goals:[
     "Describe the main varieties of South African English, and the contact with Afrikaans and Bantu languages",
     "Give examples of South African words, such as *robot*, *braai*, *now now* and *just now*",
     "State how many official languages South Africa has, and give the year of the latest change",
     "Compare the regions of this unit with Unit 3 on rhoticity and the BATH vowel, using careful claims",
     "Use the listening routine without ranking accents or treating one speaker as a whole region"
   ],
   learn:[
    {h:"English in a multilingual country", body:[
      {lead:"South Africa is a multilingual country, and English is one language among many. It is widely used in government, business, the media and education."},
      "The Cape was settled by the Dutch in 1652. Britain took control in the early 1800s, and a group of British settlers arrived at Algoa Bay, near today’s Gqeberha, in 1820. Gqeberha is the new name for Port Elizabeth, officially changed in 2021, and this unit uses both names. Indian workers began to arrive in Natal from 1860. Apartheid, the system of racial separation, was official policy from 1948, and it ended with the democratic elections of 1994.",
      "For most of the 20th century, English and Afrikaans were the official languages. Since 1994, South Africa has had 11 official languages. They are English, Afrikaans, isiZulu, isiXhosa, isiNdebele, Sesotho, Sesotho sa Leboa, Setswana, siSwati, Tshivenda and Xitsonga. In 2023, South African Sign Language became the 12th. English is the home language of a minority of South Africans, fewer than one in ten in recent censuses (Statistics South Africa publishes the current figures). Many people speak two or more languages every day, and English often works as a shared language between speakers of different languages.",
      {tip:"Some names for varieties here use racial labels, such as “White” or “Black”, because researchers have used them. These categories come from the history of apartheid, and they are not sharp. Use the words a person uses about themselves, and remember that a variety is a set of features and not a type of person."}
    ]},
    {h:"Varieties of South African English", body:[
      {lead:"Researchers describe several varieties. They overlap, and speakers often move between them."},
      {table:[["Variety","Who speaks it (typically)","Contact and history"],["White South African English","Many English-speaking white South Africans","Shaped by British settlers, including those of 1820, and by Afrikaans"],["Black South African English","Many Black South Africans, as a second, additional or first language","Shaped by Bantu languages such as isiZulu, isiXhosa and Setswana"],["Indian South African English","Many South Africans of Indian descent, many of them first-language speakers today","Descended from workers brought to Natal from 1860, who spoke Indian languages"],["Cape Flats English","Many speakers in the working-class communities of Cape Town","Strong contact with Afrikaans, and many speakers use both languages"]]},
      "These are broad groups. Within each, speakers differ by region, age, education and situation. Lanham and Macdonald (1979) described a scale of White South African English, with forms closer to British models at one end and more local forms at the other. The same warning applies as for Australia: the labels point to a scale and do not rank people. For Cape Flats English, some people use a historical apartheid category as a name for themselves, and others do not. Researchers often use the place name, as this course does.",
      "Black South African English is the least uniform of the four. Many of its speakers learned it at school, and others grew up with it. Researchers describe tendencies, such as a more syllable-based rhythm and fewer vowel contrasts than in other varieties. One reason is that many Bantu languages have fewer vowels than English. These are tendencies and not rules, and they differ greatly from speaker to speaker.",
      {ex:"Listen to a speaker from Cape Town reading the “Please call Stella” paragraph. Notice the *r* in *store* and *her*, and the vowel in *ask*. The Speech Accent Archive does not say which variety a speaker uses, so do not label the speaker. Describe the sounds. There is no single right answer.", label:"Listen: Cape Town, speaker 1", listen:"e6u4-l5-a1"},
      {ex:"A second speaker from Cape Town. Notice the same words. Are the two speakers alike or different in these features? One speaker is one person, and two people from one city can differ.", label:"Listen: Cape Town, speaker 2", listen:"e6u4-l5-a2"},
      {ex:"A speaker from Port Elizabeth (Gqeberha). Notice the *r*, and the vowel in *ask* and in *snack*. Describe what you hear in plain words.", label:"Listen: Port Elizabeth (Gqeberha)", listen:"e6u4-l5-a3"}
    ]},
    {h:"Words from contact", body:[
      {lead:"South African English has many words from Afrikaans and from Bantu languages. Some are well known, and each has a meaning that a visitor may not guess."},
      {table:[["Word","Meaning","Where it comes from"],["*robot*","A traffic light","English, with a local meaning"],["*braai*","A barbecue, or the act of grilling meat over a fire","Afrikaans"],["*lekker*","Nice, good, tasty","Afrikaans"],["*bakkie*","A pickup truck","Afrikaans"],["*indaba*","A meeting or a discussion","Zulu and Xhosa"],["*just now*","In a little while, not right away","English, with a local meaning"],["*now now*","Very soon, in a short time","English, with a local meaning"]]},
      "The time words are the ones that cause most surprise. In the use of many South Africans, *just now* means “in a little while”, and *now now* means “very soon”, and *now* means “immediately”. People do not all agree on exact differences, so the best advice is to ask. Speakers of other varieties may take *just now* to mean “right now”, so a misunderstanding is possible.",
      "Mariya Seto is a student of English interpreting. Imagine that she interprets for a South African visitor who says, “Turn left at the robot, and I’ll call you just now.” A good interpreter does not guess. She can say what she thinks the words mean and check with the speaker (“Do you mean the traffic light? And do you mean a little later?”). This habit is useful for every pair of varieties, and it is the same one that we use in Unit 1 for intelligibility.",
      "Contact also happens in the other direction. English words enter Afrikaans and the Bantu languages, and many South Africans use two or three languages in one conversation, the same skill that you met in Lesson 2."
    ]},
    {h:"Sounds of South African English", body:[
      {lead:"Descriptions of the sounds of South African English use tendencies, and the tendencies differ among the varieties."},
      "In descriptions of White South African English and Cape Flats English, the accent is typically non-rhotic, as in southern England. Some speakers, especially of broader forms, sometimes pronounce an *r*. In these descriptions, the BATH vowel is typically long (as in SSBE), so *dance* and *ask* have a long vowel. Reports for Black South African English are less uniform, and they depend on the speaker’s first language, on school and on situation. Some speakers pronounce an *r* in words where it is written, and some do not. This is why the lab below asks for careful claims and does not predict what a speaker will do.",
      {key:"A variety is a set of tendencies. A speaker is a person, and may follow some tendencies and not others."}
    ]},
    {h:"The listening lab: a tour of this unit", body:[
      {lead:"In this lab you listen to seven speakers from the five countries in this unit, and compare them with what you learned about Britain in Unit 3."},
      "All the speakers read the same paragraph, so differences in sound are not differences in words. The recordings come from the [[we-speech-accent-archive|Speech Accent Archive]] (Weinberger, George Mason University), shared under a Creative Commons license. The credit for each clip is shown beside its Listen button. They are seven people, not seven countries. Each one reads a text, and a clip is one slice of one person’s speech.",
      {tip:"The paragraph, for reference: “Please call Stella. Ask her to bring these things with her from the store: six spoons of fresh snow peas, five thick slabs of blue cheese, and maybe a snack for her brother Bob. We also need a small plastic snake and a big toy frog for the kids. She can scoop these things into three red bags, and we will go meet her Wednesday at the train station.”"},
      {table:[["Feature","Listen to these words","Typical pattern"],["*r* after a vowel","store, her, for, brother","Pronounced in the US and Canada, and in Scotland and Ireland (Unit 3). Usually not in Australia, New Zealand, White South African English, and most of England. Black South African English varies."],["BATH vowel","ask (compare snack, bags)","Short in the US and Canada, and in much of the north of England. Long in southern England, Australia, New Zealand and many White South African accents."],["*call* and *Bob*","call, also, Bob","The same vowel in many speakers in Canada and the western US. Different in many other places."],["The vowel in *kit*","six, thick, big","Central in typical New Zealand English. Different in the other places."]]},
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">The r after a vowel: typical patterns</text><rect class="d-sage" x="14" y="32" width="150" height="190" rx="8" stroke-width="2"/><text x="89" y="54" text-anchor="middle">Usually rhotic</text><text class="s" x="89" y="82" text-anchor="middle">United States</text><text class="s" x="89" y="102" text-anchor="middle">Canada</text><text class="s" x="89" y="122" text-anchor="middle">Scotland</text><text class="s" x="89" y="142" text-anchor="middle">Ireland</text><text class="s" x="89" y="162" text-anchor="middle">Northern Ireland</text><rect class="d-gold" x="176" y="32" width="150" height="190" rx="8" stroke-width="2"/><text x="251" y="54" text-anchor="middle">Usually non-rhotic</text><text class="s" x="251" y="82" text-anchor="middle">Most of England</text><text class="s" x="251" y="102" text-anchor="middle">South Wales</text><text class="s" x="251" y="122" text-anchor="middle">Australia</text><text class="s" x="251" y="142" text-anchor="middle">New Zealand</text><text class="s" x="251" y="162" text-anchor="middle">White South African</text><text class="s" x="251" y="182" text-anchor="middle">Cape Flats English</text><text class="s" x="170" y="248" text-anchor="middle">Exceptions: older New York and Boston,</text><text class="s" x="170" y="266" text-anchor="middle">the far south of New Zealand,</text><text class="s" x="170" y="284" text-anchor="middle">and a varied pattern in Black South African English.</text><text class="s" x="170" y="312" text-anchor="middle">Typical patterns. One speaker is one person.</text></svg>', alt:"Two columns. Usually rhotic: United States, Canada, Scotland, Ireland, Northern Ireland. Usually non-rhotic: most of England, south Wales, Australia, New Zealand, White South African English, Cape Flats English. Below, a note lists exceptions.", cap:"Typical patterns for the r after a vowel in this unit and in Unit 3. The exceptions matter as much as the pattern."},
      {ex:"A speaker from Columbus, Ohio, in the Midwest. Try the *r* in *store*, *her* and *brother*, and the vowel in *ask*.", label:"Speaker 1: Columbus, Ohio", listen:"e6u4-l5-a4"},
      {ex:"A speaker from Boston. Try the *r*. This speaker is 73, so older features are possible, but you may hear none of them.", label:"Speaker 2: Boston", listen:"e6u4-l5-a5"},
      {ex:"A speaker from Vancouver. Try the *r*, and compare *call* with *Bob*.", label:"Speaker 3: Vancouver", listen:"e6u4-l5-a6"},
      {ex:"A speaker from Sydney. Try the *r*, and the vowel in *ask* and in *snack*.", label:"Speaker 4: Sydney", listen:"e6u4-l5-a7"},
      {ex:"A speaker from Auckland. Try the *r*, and the vowel in *six*, *thick* and *big*.", label:"Speaker 5: Auckland", listen:"e6u4-l5-a8"},
      {ex:"A speaker from Cape Town. Try the *r*, and the vowel in *ask*.", label:"Speaker 6: Cape Town", listen:"e6u4-l5-a9"},
      {ex:"A speaker from Port Elizabeth (Gqeberha). Try the *r*, and the vowel in *ask*.", label:"Speaker 7: Port Elizabeth (Gqeberha)", listen:"e6u4-l5-a10"},
      "Compare your notes with the clips from Unit 3: London and Manchester (places with typically non-rhotic accents), and Edinburgh and Dublin (places with typically rhotic accents). You will probably find that the *r* is easy to hear in some speakers and weak in others, and that the vowel in *ask* is easy to hear in some. This is normal. Your task is to listen and describe, and not to prove a theory.",
      {key:"A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Describe, and do not rank."}
    ]}
   ],
   try:[
    M("e6u4-l5-x1","Which of these is the most careful claim about a recording?",2,[
      ["“South Africans have the best accent.”","This ranks accents, and *best* has no meaning for an accent."],
      ["“Everyone from Cape Town is non-rhotic.”","One speaker cannot show this, and speakers vary."],
      ["“I did not hear an *r* in *store* from this speaker from Sydney. That matches the typical pattern in Australia, but one speaker is one person.”","Right. It reports what the listener heard, compares it with the typical pattern and adds a limit."],
      ["“The Boston speaker has a lazy accent.”","*Lazy* is a judgment. It does not describe a sound."]
    ]),
    {id:"e6u4-l5-x2", type:"sort", q:"Sort each variety or place by the typical pattern for the *r* after a vowel.", buckets:["Usually rhotic","Usually non-rhotic"], items:[
      {t:"Toronto", b:0, why:"English in Canada is typically rhotic."},
      {t:"Sydney", b:1, why:"Australian English is typically non-rhotic."},
      {t:"White South African English", b:1, why:"It is typically non-rhotic in descriptions."},
      {t:"Dublin (Unit 3)", b:0, why:"Most accents in Ireland are rhotic."},
      {t:"Auckland", b:1, why:"New Zealand English is typically non-rhotic."},
      {t:"London (Unit 3)", b:1, why:"London speech is usually non-rhotic."},
      {t:"Columbus, Ohio", b:0, why:"The Midwest is typically rhotic."},
      {t:"Perth", b:1, why:"Australian English is typically non-rhotic."}
    ]},
    {id:"e6u4-l5-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"British settlers arrive at Algoa Bay (1820)", why:"This is the earliest date in the list."},
      {t:"Indian workers begin to arrive in Natal (1860)", why:"This came 40 years after the settlers of 1820."},
      {t:"Democratic elections end apartheid (1994)", why:"The 11 official languages date from this period."},
      {t:"South African Sign Language becomes the 12th official language (2023)", why:"This is the latest change."}
    ]},
    {id:"e6u4-l5-x4", type:"match", q:"Match each South African word to its usual meaning.", pairs:[
      ["*robot*","A traffic light","It is a local meaning of an English word."],
      ["*braai*","A barbecue","It comes from Afrikaans."],
      ["*bakkie*","A pickup truck","It comes from Afrikaans."],
      ["*just now*","In a little while, not right away","Speakers from other varieties may take it to mean *right now*."],
      ["*indaba*","A meeting or a discussion","It comes from Zulu and Xhosa."]
    ]},
    {id:"e6u4-l5-x5", type:"spot", q:"A classmate writes these notes after the listening lab. Tap each note that **ranks, overgeneralizes or judges**.", ask:"ranks or overgeneralizes", parts:[
      "“", {t:"The Cape Town speaker is a Black South African English speaker.", flag:true, why:"The archive gives no ethnicity or variety, so this is a guess about a real person."}, " ", {t:"I did not hear any difference between the *call* and *Bob* vowels in the Vancouver recording.", flag:false, why:"Fine. This note reports what the classmate heard about one speaker."}, " ", {t:"Australians all drop their *r*.", flag:true, why:"This overgeneralizes. The typical pattern is non-rhotic, and one recording cannot show it for everyone."}, " ", {t:"The Auckland accent is funnier than the Sydney accent.", flag:true, why:"This ranks two accents and it uses a judgment word."}, " ", {t:"I needed two listenings for the Port Elizabeth recording.", flag:false, why:"Fine. This is a fact about the listener’s experience, and not a judgment of the speaker."}, "”"
    ]},
    {id:"e6u4-l5-x6", type:"number", q:"This unit has 14 speakers. Three are from South Africa, two from Canada, two from Australia and two from New Zealand. The rest are from the United States. How many speakers are from the United States?", answer:5, tol:0, unit:"speakers", why:"3 + 2 + 2 + 2 = 9 speakers are from outside the US. 14 − 9 = 5.", wrongs:[{v:9, tol:0, why:"This is the number of speakers from outside the United States."},{v:4, tol:0, why:"You may have counted one speaker too many outside the US. Add 3 + 2 + 2 + 2 carefully."}], hint2:"Add the four other groups, and subtract from 14."},
    M("e6u4-l5-x7","Listen to this speaker from Cape Town, and listen for the *r* in *store* and *her*. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["Cape Town speakers are all non-rhotic.","One speaker cannot show this, and the typical pattern has exceptions."],
      ["If this speaker does not pronounce the *r* in *store* and *her*, that matches the typical pattern in descriptions of White South African English and Cape Flats English. It describes one speaker only, and the archive does not say which variety this speaker uses.","Right. It describes what is heard, compares it with a typical pattern and adds limits."],
      ["This speaker is hard to understand, so South African English is hard to understand.","Difficulty depends on the listener’s experience too. One listener’s difficulty is not a fact about a variety."],
      ["This speaker is a speaker of Black South African English.","The archive gives no ethnicity or variety, so this is a guess."]
    ], {listen:"e6u4-l5-a11", hint:"Listen more than once. The right answer does not depend on what this speaker does. Choose the claim that stays within the evidence. If you hear a weak *r* or a strong one, that is a good observation too."}),
    {id:"e6u4-l5-x8", type:"explain", q:"Mariya Seto, a student of English interpreting, hears a South African visitor say, “I’ll call you just now, and then we’ll go to the braai.” Describe how she can interpret well and respectfully.", size:"4–6 sentences", prompt:"Mariya could start by …", hint:"Think about *just now*, *braai*, checking with the speaker, and not assuming that a different use is a mistake.", points:["Says she should not assume that just now means right now","Explains that just now usually means in a little while, and braai means a barbecue","Says she can check with the speaker","Treats the usage as a regular feature of South African English"], model:"Mariya could start by remembering that *just now* in South African English usually means “in a little while”, and not “right now”. She can also remember that *braai* is a barbecue, from Afrikaans. If she is not sure, she can check with the speaker, for example by asking, “Do you mean later today?” She should treat these words as regular features of South African English, and not as mistakes. A clear check is more useful than a guess."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and one free website. Nothing needs an account.",
    tasks:[
     {t:"Make a listening table for the unit", how:[
       "Make a table with seven rows, one for each speaker in the lab. Add three columns: the *r* after a vowel, the vowel in *ask*, and one more feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “r pronounced”, “short vowel” or “not sure”.",
       "Write two sentences about your table. Use the words *typical* and *one speaker*."
     ], write:"My table… two sentences with typical and one speaker…"},
     {t:"Compare with Unit 3", how:[
       "Return to the Unit 3 listening lab, and listen again to the London and Edinburgh recordings.",
       "Choose one speaker from this lab and one from Unit 3. Compare them on the *r* and the vowel in *ask*.",
       "Write three sentences. Say where the two speakers are alike, where they differ and what is typical for each place."
     ], write:"Speaker A… Speaker B… Alike in… different in… typical…"}
    ],
    proof:"A table of seven speakers with careful notes. Two sentences that use *typical* and *one speaker*. A comparison with one speaker from Unit 3."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, section 3.5 “Describing vowels”", note:"Read it before the lab if you want to describe vowels with technical terms, such as front, back, high and low."}
   ]
  }
  ],
  checkpoint:["e6u4-q03","e6u4-q08","e6u4-q12","e6u4-q16","e6u4-q21","e6u4-q25","e6u4-q30","e6u4-q34","e6u4-q38","e6u4-q41","e6u4-q44","e6u4-q45"],
  cpBank:[
   Q("e6u4-cp01","e6u4-l1",1,"Which statement about rhoticity in the US is the most accurate?",0,[
     ["Most American accents are rhotic, and a few older regional accents are not.","Right. GA is rhotic, and traditional New York and Boston speech was not."],
     ["All American accents are non-rhotic.","Most are rhotic."],
     ["Rhoticity is a feature of grammar.","It is a feature of pronunciation."],
     ["Only the South is rhotic.","Rhoticity is found across most of the country."]]),
   Q("e6u4-cp02","e6u4-l1",2,"Ana hears a speaker say *writer* and *rider* with the same consonant in the middle. Which feature explains this?",2,[
     ["T-glottaling","That puts a glottal stop in place of /t/, and it is typical of some accents in Britain."],
     ["The cot–caught merger","This merger affects vowels, not the middle consonant."],
     ["Flapping","Right. Both /t/ and /d/ become a flap between vowels, so the vowels may be the only difference."],
     ["Rhoticity","This is about the *r* after a vowel."]]),
   Q("e6u4-cp03","e6u4-l1",3,"A student listens to one speaker from Brooklyn and writes, “I heard an *r* in *store*, so New Yorkers are rhotic.” What is wrong with the claim?",1,[
     ["Nothing is wrong.","The claim goes beyond the evidence."],
     ["One speaker cannot show a pattern for all New Yorkers, and speech there varies by age, neighborhood and style.","Right. Labov (1966) showed that the *r* varies in regular ways."],
     ["The speaker must be from Boston.","Nothing in the claim suggests this. The problem is the jump from one speaker to a whole city."],
     ["New York accents have no *r* in any word.","The pattern is variable, not absent."]]),
   Q("e6u4-cp04","e6u4-l2",1,"Which sentence uses copula absence in African American English?",3,[
     ["She be working every day.","That is habitual *be*, a different feature."],
     ["She has been working.","This is an ordinary perfect form."],
     ["She works.","This has no missing *be*."],
     ["She working now.","Right. The *is* is left out, as in *She’s working*."]]),
   Q("e6u4-cp05","e6u4-l2",2,"What do the sentences *She be tired* and *She tired* show about AAE?",1,[
     ["They mean the same thing.","The first marks a regular state. The second says that she is tired now."],
     ["They mark a difference between a regular state and a state at this moment.","Right. Standard English usually needs extra words to show this."],
     ["Both are mistakes.","Both are regular forms in AAE."],
     ["Only the second is used in AAE.","Both are used."]]),
   Q("e6u4-cp06","e6u4-l2",3,"Oluwaseun reads that a school board once proposed to use students’ home speech in teaching Standard English. Which summary is the most neutral and accurate?",2,[
     ["The board wanted to stop teaching Standard English.","The stated aim was to help students to learn it."],
     ["Linguists all agreed with every detail of the plan.","The statement from linguists supported the use of home varieties in teaching, and it did not decide every detail."],
     ["The board proposed to recognize students’ home speech and use it to help teach Standard English. The debate was heated, and the linguists’ society said such varieties are systematic.","Right. It states what was proposed and what linguists said."],
     ["The board wanted to replace English with another language.","This is not what the resolution proposed."]]),
   Q("e6u4-cp07","e6u4-l3",1,"Which spelling set is typical in Canadian dictionaries?",0,[
     ["*colour*, *centre* and *realize*","Right. It is a mix of British and US forms."],
     ["*color*, *center* and *realise*","This mixes the US forms with a British *-ise*."],
     ["*colour*, *center* and *tyre*","*Tyre* is British, and Canadians use *tire*."],
     ["*color*, *centre* and *cheque*","This is not a standard set."]]),
   Q("e6u4-cp08","e6u4-l3",2,"Which word has a raised vowel start in a typical Canadian accent?",3,[
     ["*ride*","The vowel is before a voiced consonant."],
     ["*how*","The vowel is at the end of the word."],
     ["*loud*","The vowel is before /d/, which is voiced."],
     ["*mouth*","Right. The vowel is before /θ/, which is voiceless."]]),
   Q("e6u4-cp09","e6u4-l4",1,"What is the name of the three-point scale used for Australian English?",2,[
     ["Standard, regional, local","These are not the names from the study."],
     ["Low, middle, high","These are not the names from the study."],
     ["Broad, general, cultivated","Right. Mitchell and Delbridge (1965) used these labels."],
     ["Old, middle, new","These are not the names from the study."]]),
   Q("e6u4-cp10","e6u4-l4",2,"Which statement about New Zealand English is the most accurate?",1,[
     ["The *kit* vowel is the same as in GA.","In New Zealand English it is central."],
     ["The *kit* vowel is central, and a few speakers in the far south pronounce the *r* after a vowel.","Right. Typical New Zealand English is non-rhotic, with exceptions in the south."],
     ["New Zealand English is rhotic everywhere.","It is typically non-rhotic."],
     ["New Zealand English has no words from te reo Māori.","Many are in everyday use."]]),
   Q("e6u4-cp11","e6u4-l5",2,"Which statement about official languages in South Africa is correct?",0,[
     ["There are 12, after South African Sign Language was added in 2023.","Right. There were 11 before."],
     ["There is only one, English.","South Africa has many official languages."],
     ["There are two, English and Afrikaans.","This was true for most of the 20th century."],
     ["There are 11, and the number has never changed.","It changed in 2023."]]),
   Q("e6u4-cp12","e6u4-l5",3,"Kenji hears a recording of a speaker from Cape Town and says, “This is Cape Flats English.” What is the best response?",3,[
     ["“Yes, all Cape Town speakers use it.”","This overgeneralizes about the city."],
     ["“No, it must be Black South African English.”","This is another guess about a person."],
     ["“It is not English at all.”","It is English, and all varieties here are full systems."],
     ["“The archive gives only the place and age, so we cannot name the variety. We can describe the sounds.”","Right. It stays within the evidence."]])
  ],
  codex:[
   {id:"we-american-english", title:"American English: General American and regional accents", aka:["General American","GA","American accents"], tags:["world englishes","north america"],
    summary:"General American is a reference accent with few strong regional features. Rhoticity, flapping and the cot–caught merger vary across the US, and regional accents such as Southern, New York City and Boston are full systems.",
    levels:{
     starter:[
      "**General American (GA)** is the name for the accent that most dictionaries and textbooks use to describe American English. It is not the accent of one city or state. Linguists describe it mostly by what it lacks: it has none of the strongly marked features of New England, New York City or the South.",
      "Three features are easy to hear. GA is **rhotic**: the *r* after a vowel is pronounced, as in *car* and *store*. GA has **flapping**: a /t/ or /d/ between two vowels is a quick tap, so *water* and *city* have a flap in the middle. Many Americans also have the **cot–caught merger**, so *cot* and *caught* sound the same.",
      "American spelling has a history too. Noah Webster published a spelling book in 1783 and a large dictionary in 1828, and he promoted forms such as *color* and *center*.",
      "Regional accents are full systems. Southern speech has *y’all* and often a long single vowel in *ride*. Traditional New York City and Boston speech was non-rhotic, and younger speakers are generally more rhotic.",
      {key:"GA is a reference label. Every American speaker has an accent, and no accent is more correct than another."}
     ],
     builder:[
      "John Wells (1982) described GA as a negative definition: an accent without the marked features of the eastern and southern regions. For teaching, GA is the usual American reference beside Southern Standard British English (SSBE). A short comparison: GA is rhotic and SSBE is not, GA has a short vowel in BATH words and SSBE a long one, and GA often flaps the /t/ in *water*.",
      {table:[["Feature","Where it is found (typical)","Example"],["Rhoticity","Most of the US","car, store, her"],["Flapping","General in North America","water, city, ladder"],["Cot–caught merger","Western US, Canada, some other areas","cot and caught"],["Southern /aɪ/ as [aː]","The South, often before voiced sounds","ride, time"]]},
      "The *Atlas of North American English* (Labov, Ash and Boberg, 2006) maps these features from telephone surveys. It reports that the cot–caught merger is widespread in the West and in Canada and is found in some other areas, and that it is spreading, with a debate about where and how fast.",
      "Labov’s study of New York City (1966) asked salespeople in three department stores where a department was. The *r* in *fourth floor* was pronounced more in the higher-status stores, and more in a careful repeat in every store. It showed that speech varies in regular ways with class and style.",
      "The word *flap* is also used for the tap in other languages, so give the context. Southern speech has its own features, such as *y’all*, and speakers vary within the South. Describe a speaker by features, and avoid words such as *good*, *lazy* or *normal*."
     ],
     pro:[
      "GA is better seen as an abstraction than as the speech of a community. It is useful in dictionaries because it removes regional marking, and that is also its weakness. Speakers of a Midwest accent have regional features of their own, such as the Northern Cities Shift in some areas, so “GA” may describe nobody exactly. The sound system of the reference accent is in the How English Works vowel charts.",
      "Flapping in GA depends on stress. The /t/ is flapped between a stressed vowel and an unstressed vowel (*city*, *water*) and not before a stressed vowel (*attack*). A flap also occurs across word boundaries (*get up*). The result is that *writer* and *rider* can differ only by the vowel. In Canadian speakers this difference is kept by Canadian raising.",
      "The cot–caught merger (the LOT–THOUGHT merger) affects the vowel systems that remain. Where speakers merge the vowels, the pattern of other vowels can shift, as in the Canadian Shift. Researchers report change over time, and the geography is still debated. The safe way to describe it is *common in the West and in Canada, found in some other areas, and spreading*.",
      "Labov’s department-store study is often taught as a model of method: a short, natural, anonymous exchange and a count of one variable. The study also shows a pattern called a sociolinguistic gradient, in which the use of a feature rises with the status of the group and with the care of the style. Later work suggests that rhoticity in New York has increased among younger speakers, but you should check recent studies before you make a claim about a particular group.",
      "Cross-link: How English Works Unit 2 for GA and SSBE; Unit 11 for English spelling history; Unit 3 of this course for rhoticity in Britain and Ireland."
     ]},
    related:["we-african-american-english","we-canadian-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"},{t:"Telsur Project and the Atlas of North American English (University of Pennsylvania)", url:"https://www.ling.upenn.edu/phono_atlas/"}],
    checked:"2026-11"},
   {id:"we-african-american-english", title:"African American English, Chicano English and bilingual speech", aka:["AAE","AAVE","Chicano English","code-switching"], tags:["world englishes","north america"],
    summary:"African American English and Chicano English are rule-governed varieties of English. Habitual be and copula absence are regular features of AAE, and bilingual speakers switch between languages by rules.",
    levels:{
     starter:[
      "**African American English (AAE)** is a variety of English spoken by many African Americans. Other names include *African American Vernacular English* and *Black English*. Linguists describe it as a regular, rule-governed system. It is not slang and it is not “broken English”.",
      "Two features show the rules. **Habitual *be*** marks something that happens regularly: *She be working* means that she works regularly, and *She working* means that she is working now. **Copula absence** means that *is* and *are* can be left out: *She tired*. William Labov (1969) showed that deletion happens only where standard English can contract, as in *She’s tired*. It does not happen where contraction is impossible, as in *Yes, she is*.",
      "**Chicano English** is a native variety of English spoken by many Mexican Americans, especially in the Southwest. It is not learner English. Many speakers do not speak Spanish.",
      "Many bilingual speakers switch between Spanish and English inside one conversation. This is called code-switching, and it follows grammatical rules.",
      {key:"These are full systems. Judging them by the rules of another variety is the mistake."}
     ],
     builder:[
      "Not every African American uses AAE, and some other speakers do. Use varies with region, age, class and situation, and many speakers move between styles. Its history is debated: some scholars see early creole roots, and others see mainly English dialects, with more than one process involved.",
      "Other features include negative concord (*I don’t have no pencil*), which is also found in many other dialects, completive *done* (*I done finished*), and the shortening of final consonant clusters (*test* as *tes’*). These follow patterns, and the last one is found in every variety.",
      "In December 1996, the Oakland school board passed a resolution that proposed to recognize students’ home speech and to use it to teach Standard English. It caused a national debate and was revised in January 1997. The Linguistic Society of America issued a statement in the same month that said that such varieties are “systematic and rule-governed”, that “slang” and “broken English” are wrong labels, and that the line between a language and a dialect is drawn more on social and political grounds than on linguistic ones.",
      "Carmen Fought (2003) describes Chicano English in detail. Poplack (1980) showed that code-switching follows grammatical constraints.",
      "Neither these varieties nor bilingual speech should be judged by what they lack."
     ],
     pro:[
      "Labov (1969) formulated the copula rule: wherever standard English can contract *is* or *are*, AAE can delete it, and where standard English cannot contract, AAE cannot delete. He argued that deletion is the next step after contraction in a single process. The rule predicts that stressed forms at the end of a clause (*Yes, she is*; *I wonder where he is*) never lose the verb. Later work has refined the details, but the link between contraction and deletion remains a standard example of regularity in a stigmatized variety.",
      "Habitual *be* is distinct from copula absence. In the research literature, it marks a habitual or repeated state, and the plain form without *be* describes a state at the time of speaking. The distinction is not available in standard English without adverbs such as *usually*. Researchers also describe stressed *been*, which refers to a state that began long ago, and the use of completive *done*. One should not generalize from these features to all speakers.",
      "Origins are debated: the view of early creole roots, the view of English-dialect roots, and positions that combine them. Evidence includes early written sources, recordings of former enslaved people and the grammar of related creoles, and scholars do not agree on how to weigh it. A course statement should say that the question is open.",
      "In an educational setting, the question is how to teach Standard English without devaluing a home variety. Approaches that compare the two systems explicitly are often called contrastive. The Oakland debate shows how quickly a technical term (*Ebonics*) can become a political one, so it helps to define terms in the first sentence.",
      "Chicano English is best described with research on a specific community and period, since Fought’s studies were of particular places. Code-switching research distinguishes between inserting a single word and switching between whole clauses, and constraints apply to both."
     ]},
    related:["we-american-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”"}],
    sources:[{t:"Linguistic Society of America resolution on the Oakland Ebonics issue (archived copy)", url:"https://web.stanford.edu/~rickford/ebonics/LSAResolution.html"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-canadian-english", title:"Canadian English", aka:["Canadian raising","eh","Canadian Shift"], tags:["world englishes","north america"],
    summary:"Canadian English mixes British and US spelling, has a rule called Canadian raising, and has the cot–caught merger. Newfoundland and Quebec differ from the broad pattern.",
    levels:{
     starter:[
      "**Canadian English** is the English of a large and varied country. Its spelling is a mix. Most Canadian dictionaries use *colour* and *centre*, as in Britain, and *-ize* and *tire*, as in the US. Most Canadians say *zed* for the letter z.",
      "A well-known feature is **Canadian raising**. The vowels in *price* and *mouth* start higher in the mouth before a voiceless sound. So *write* and *ride* differ in their vowels, and the noun *house* and the verb *house* differ too. A stereotype says that Canadians say *about* with the vowel of *boot*. Research does not find this.",
      "Many Canadians also have the **cot–caught merger**. The small word *eh* is a discourse marker with several uses, such as asking for agreement.",
      "Canada has two official languages at the federal level, English and French. English in Newfoundland and in Quebec differs from English in the large cities of Ontario and the West.",
      {key:"There is a broad Canadian pattern, and there are many exceptions."}
     ],
     builder:[
      "J. K. Chambers (1973) named Canadian raising. The raised start of /aɪ/ and /aʊ/ is a mid vowel before /p t k f s ʃ θ/, and a lower vowel elsewhere. Because many North American speakers flap /t/ and /d/, the raised vowel in *writer* is often the only difference from *rider*. Raising is also reported in parts of the northern US.",
      "The Canadian Shift (Clarke, Elms and Youssef, 1995) is a pattern in which the short front vowels, especially the vowel of *trap*, move lower and further back. It is described for many speakers in Ontario and the West, and it is often linked to the cot–caught merger.",
      "*Eh* can ask for agreement, check that the listener is following, or mark a point in a narrative. Use varies by speaker, age and situation.",
      "Newfoundland English, shaped by settlers from southwest England and Ireland, has features that are also found in Irish English, such as the *after*-perfect (Clarke, 2010). Many English speakers in Montreal use French loan words, such as *dépanneur* for a corner store.",
      "A listening note: the “Please call Stella” paragraph has no good test word for Canadian raising. Use it for the *r* after a vowel, and for the vowels in *call* and *Bob*, and say that one speaker is one person."
     ],
     pro:[
      "Raising is conditioned by the voicing of the following consonant, but the analysis has been debated. In many speakers, the raised variant is no longer predictable from the voicing alone, because flapping hides the context (*writer*, *rider*). For this reason, some analyses treat the raised vowel as a separate phoneme in these speakers. Some studies also report that /aɪ/ shows raising more reliably than /aʊ/ does. Check the study and the group of speakers before you generalize.",
      "The Canadian Shift involves the retraction and lowering of KIT, DRESS and TRAP, and some accounts link it to the merger of LOT and THOUGHT, which may have freed space in the system. Studies suggest differences between regions and between age groups, and some researchers question how uniform the pattern is.",
      "Spelling in Canada follows several traditions. The mix of *-our*, *-re* and *-ize* is documented in Canadian dictionaries and style guides, but practice varies, and many everyday writers use US forms. A statement should therefore say *dictionaries and style guides* and not *Canadians*.",
      "Discourse markers such as *eh* are studied with spoken corpora. Findings suggest that frequency varies by region and age, and that the marker has several functions at once. Similar tags exist in other varieties, so *eh* is not unique to Canada.",
      "Newfoundland and Labrador English is the most distinctive of the regional varieties of English in Canada in most descriptions, and Clarke’s (2010) volume is the standard overview. Quebec English is a contact variety whose features depend on how much French the speaker uses. A description that gives Toronto or Vancouver as “Canadian English” hides all of this."
     ]},
    related:["we-american-english","we-australian-nz-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-australian-nz-english", title:"Australian English, New Zealand English and Aboriginal English", aka:["Australian English","New Zealand English","uptalk","high rising terminal"], tags:["world englishes","oceania"],
    summary:"Australian and New Zealand English are non-rhotic varieties formed by settlers from many parts of Britain and Ireland. They have a speech continuum, a high rising terminal, te reo Māori words in New Zealand, and Aboriginal English as its own variety.",
    levels:{
     starter:[
      "**Australian English** and **New Zealand English** were formed by settlers who spoke many British and Irish dialects. Both are typically non-rhotic. Both were also shaped by the languages of the peoples already there: Aboriginal and Torres Strait Islander peoples in Australia, and Māori in New Zealand.",
      "Australian English is described as a scale with three named points: **broad**, **general** and **cultivated** (Mitchell and Delbridge, 1965). General is the form used by most speakers. The labels describe a scale, and they do not rank people.",
      "Both varieties have the **high rising terminal**, or uptalk: a statement that ends with a rise in pitch. Studies show that it has several uses, such as checking that the listener is following, and it does not usually mean doubt.",
      "New Zealand English has a central vowel in *kit*. Many words from te reo Māori are in everyday use, such as *kia ora* and *whānau*.",
      "**Aboriginal English** is a variety with its own features, and it is not a poor version of other Australian English.",
      {key:"Both varieties are full systems. A rise at the end of a statement is not a sign of doubt."}
     ],
     builder:[
      "Australian English formed after colonization began at Sydney in 1788, and New Zealand English formed after settlement grew following the Treaty of Waitangi in 1840. Peter Trudgill (2004) describes these as examples of new-dialect formation: children of settlers from many places formed a new, shared dialect.",
      "Typical Australian features include the starts of the vowels in *face*, *price* and *goat*, a fronted *goose* vowel, shortened words such as *arvo* and *servo*, a long vowel in most BATH words, and regional variation in words such as *dance*. The high rising terminal was described in Australia by Guy and colleagues (1986), and in New Zealand by Britain (1992). Paul Warren (2016) gives an overview of its uses.",
      "The New Zealand short front vowel shift (Gordon and others, 2004) centralizes *kit* and raises *dress* and *trap*. Many younger speakers merge *near* and *square*. Some speakers in Southland and parts of Otago are rhotic.",
      "Te reo Māori became an official language of New Zealand in 1987 and New Zealand Sign Language in 2006. Diana Eades (2013) describes Aboriginal English ways of using English, including silence and indirect questions.",
      "There are no clips of Aboriginal English here, because the Speech Accent Archive gives no ethnicity. When you describe the high rising terminal, remember that in a reading task a rise in a list is normal in every variety."
     ],
     pro:[
      "The Mitchell and Delbridge (1965) continuum was based on a large sample of school students, and it described Australian English as notably uniform across the country, with variation by social class and by style more than by region. Later work finds small regional differences, such as the vowel in *dance* and *plant*, and some vocabulary. The terms are descriptive, but they have been used in stereotyped ways, so give the labels with the warning that they describe a scale.",
      "HRT research distinguishes between a high rise and a low rise, and between uses by turn position. Warren (2016) and others argue that many functions are interactional, such as checking attention, and that the claim that a rise signals uncertainty is not well supported as a general rule. Speakers and listeners differ in how they interpret it, and studies of attitudes show that the form is often judged more harshly in young speakers. Other varieties use similar rises, including some accents of Northern Ireland, so the feature is not specific to Australasia.",
      "The New Zealand vowel system is a standard case of a rapid chain shift in a new-dialect setting, and the central KIT vowel is the best-known part. NEAR–SQUARE merging has been described as a change in progress. Descriptions of the rhotic area in the far south date from earlier studies, and the area has shrunk over time in some accounts, so check the study before you cite it.",
      "Aboriginal English is a cover term for many varieties. Work by Eades, and by researchers in education and law, shows that differences in pragmatics (how to ask, when to be silent, how to use eye contact) can cause misunderstanding even when the grammar is shared. Kriol and Torres Strait Creole are distinct languages, treated in Unit 7.",
      "Cross-link: Unit 2 of this course for the first diaspora; Unit 3 for the BATH vowel and for Belfast intonation."
     ]},
    related:["we-canadian-english","we-south-african-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 3, Phonetics, section 3.12 “Tone and intonation”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-south-african-english", title:"South African English", aka:["White South African English","Black South African English","Indian South African English","Cape Flats English"], tags:["world englishes","africa"],
    summary:"South African English is a family of varieties shaped by Afrikaans, Bantu languages and Indian languages. English is one of 12 official languages, and words such as robot, braai and now now show contact.",
    levels:{
     starter:[
      "**South African English** is the English of a multilingual country. South Africa has 12 official languages. Eleven were recognized after 1994, and South African Sign Language became the 12th in 2023. English is used widely in government, business and education, and it is the home language of a minority of people.",
      "Researchers describe several varieties: White South African English, Black South African English, Indian South African English and Cape Flats English. These are overlapping groups, and speakers move between them. The racial labels come from the history of apartheid and are not sharp.",
      "English in South Africa has many words from other languages. A *robot* is a traffic light. A *braai* is a barbecue. *Lekker* means nice and comes from Afrikaans. *Just now* means “in a little while”, and *now now* means “very soon”.",
      "White South African English and Cape Flats English are typically non-rhotic, and the BATH vowel is typically long. Black South African English varies more.",
      {key:"A variety is a set of tendencies. One speaker is one person."}
     ],
     builder:[
      "The Dutch settled the Cape in 1652. Britain took control in the early 1800s, and British settlers arrived at Algoa Bay in 1820, near what is now Gqeberha (Port Elizabeth). Indian workers began to arrive in Natal in 1860. Apartheid was official policy from 1948 and ended with democratic elections in 1994.",
      "Contact shaped the varieties. Cape Flats English has strong contact with Afrikaans. Black South African English is shaped by languages such as isiZulu, isiXhosa and Setswana, and researchers describe tendencies such as a more syllable-based rhythm and fewer vowel contrasts. Indian South African English developed from the English of the descendants of workers who spoke Indian languages.",
      {table:[["Word","Meaning","Source"],["robot","traffic light","local English meaning"],["braai","barbecue","Afrikaans"],["bakkie","pickup truck","Afrikaans"],["indaba","meeting","Zulu and Xhosa"]]},
      "The meanings of *just now* and *now now* vary by speaker, and the safest advice is to check what a speaker means.",
      "Rhoticity is also less uniform than a map suggests. White South African English and Cape Flats English are typically non-rhotic, but reports for Black South African English vary, and the archive does not say which variety a speaker uses. The BATH vowel is typically long in many accents, but individual speakers vary. For listening, use the same routine as in the lab: describe, compare with a typical pattern, and add a limit."
     ],
     pro:[
      "Lanham and Macdonald (1979) described White South African English as a scale from forms closer to British models to more local forms. A scale of this kind has the same strengths and weaknesses as the Australian continuum: it helps to describe variation, and it can be heard as a ranking. McCormick (2002) is a standard study of language in a Cape Town community, and Mesthrie (2002) edited a general survey of language in South Africa.",
      "Black South African English is a contact variety with a wide range, from the English of second-language learners to that of first-language speakers. For that reason, it is a mistake to list one set of features. Studies of rhoticity, vowel contrast and rhythm give different results for different groups, and a clip of one speaker cannot show which group the person belongs to.",
      "Language policy matters for this subject. The constitution recognizes 11 official languages, with South African Sign Language added in 2023 by the Constitution Eighteenth Amendment Act. In practice, English dominates in many formal settings, and debates about this are about access and equality, as well as about identity. Census figures for home language are published by Statistics South Africa. They show that English is the home language of fewer than one in ten people, so check the latest release before you quote a figure.",
      "The racial terms in research on South African English are historical categories. Many researchers explain them and then prefer place names or descriptions of the community, as this course does for Cape Flats English. The archive recordings give only the place and the age, so no clip is presented as a variety.",
      "Cross-link: Unit 2 (the first diaspora and the second), Unit 3 (non-rhotic and rhotic Britain), Unit 6 (Africa), Unit 7 (contact and creoles)."
     ]},
    related:["we-australian-nz-english","we-listening-accents","we-rp-ssbe"],
    read:[{book:"eling", where:"Chapter 3, Phonetics, section 3.5 “Describing vowels”"}],
    sources:[{t:"South African Government: signing of the South African Sign Language Bill (19 July 2023)", url:"https://www.gov.za/speeches/president-cyril-ramaphosa-signing-ceremony-south-african-sign-language-bill-19-jul-2023"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-cot-caught-merger", term:"Cot–caught merger", def:"The pronunciation of the vowels in *cot* and *caught* as one sound. It is common in the western US and in Canada, and it is found in some other areas.", codex:"we-american-english"},
   {id:"we-sociolinguistic-variable", term:"Sociolinguistic variable", def:"A feature of speech that has two or more forms, such as an *r* pronounced or not. Researchers count how often each form is used by different groups.", codex:"we-american-english"},
   {id:"we-aae", term:"African American English (AAE)", def:"A variety of English spoken by many African Americans. Linguists describe it as a regular, rule-governed system. It is also called African American Vernacular English.", codex:"we-african-american-english"},
   {id:"we-habitual-be", term:"Habitual be", def:"A feature of African American English. *She be working* means that she works regularly, and *She working* means that she is working now.", codex:"we-african-american-english"},
   {id:"we-copula-absence", term:"Copula absence", def:"Leaving out *is* or *are* in some sentences, as in *She tired*. In African American English, it happens only where standard English can contract the verb.", codex:"we-african-american-english"},
   {id:"we-negative-concord", term:"Negative concord", def:"The use of two or more negative words for one negative meaning, as in *I don’t have no pencil*. It is found in many varieties of English.", codex:"we-african-american-english"},
   {id:"we-chicano-english", term:"Chicano English", def:"A native variety of English spoken by many Mexican Americans, especially in the Southwest. It is not learner English.", codex:"we-african-american-english"},
   {id:"we-canadian-raising", term:"Canadian raising", def:"A rule in many Canadian accents that makes the vowels in *price* and *mouth* start higher before a voiceless consonant, as in *write* and *house* (the noun).", codex:"we-canadian-english"},
   {id:"we-discourse-marker", term:"Discourse marker", def:"A small word that helps a conversation work, such as *well* or *eh*. It does not add much to the content of a sentence.", codex:"we-canadian-english"},
   {id:"we-canadian-shift", term:"Canadian Shift", def:"A pattern in which the short front vowels, especially the vowel of *trap*, move lower and further back. It is described for many speakers in Ontario and the West.", codex:"we-canadian-english"},
   {id:"we-broad-general-cultivated", term:"Broad, general and cultivated", def:"Three named points on a scale of Australian English, described by Mitchell and Delbridge (1965). The labels describe a scale and do not rank speakers.", codex:"we-australian-nz-english"},
   {id:"we-hrt", term:"High rising terminal (uptalk)", def:"A rise in pitch at the end of a statement. It has several uses, such as checking that the listener is following, and it does not usually mean doubt.", codex:"we-australian-nz-english"},
   {id:"we-short-front-vowel-shift", term:"Short front vowel shift", def:"A change in New Zealand English in which *kit* becomes a central vowel and *dress* and *trap* are raised.", codex:"we-australian-nz-english"},
   {id:"we-te-reo-maori", term:"Te reo Māori", def:"The language of the Māori people of New Zealand. It became an official language in 1987, and many of its words are used in New Zealand English.", codex:"we-australian-nz-english"},
   {id:"we-aboriginal-english", term:"Aboriginal English", def:"A group of varieties of English spoken by many Aboriginal and Torres Strait Islander people in Australia. It has its own features and is not a poor version of other Australian English.", codex:"we-australian-nz-english"},
   {id:"we-sa-english-varieties", term:"Varieties of South African English", def:"A family of varieties shaped by contact with Afrikaans, Bantu languages and Indian languages. Researchers describe White, Black and Indian South African English and Cape Flats English.", codex:"we-south-african-english"},
   {id:"we-official-languages-sa", term:"Official languages of South Africa", def:"South Africa recognizes 12 official languages: the 11 named in 1994 and 1996, and South African Sign Language, added in 2023.", codex:"we-south-african-english"},
   {id:"we-department-store-study", term:"Labov’s department-store study", def:"A study, published in 1966, in which Labov asked salespeople in three New York department stores where a department was, and counted the *r* in *fourth floor*. It showed that speech varies in regular ways with class and style.", codex:"we-american-english"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u4-q01","e6u4-l1",1,"What does it mean to say that General American (GA) is a reference accent?",2,[
     ["It is the only correct American accent.","No accent is more correct than another."],
     ["It is the accent of one American city.","GA is not tied to one city."],
     ["It is a label that dictionaries use for American English, mostly by what it lacks in regional features.","Right. Wells (1982) described it this way."],
     ["It is a kind of American grammar.","GA is an accent, and grammar is a separate matter."]]),
   Q("e6u4-q02","e6u4-l1",1,"Which feature does General American have?",0,[
     ["The *r* after a vowel is pronounced.","Right. GA is rhotic, as in *car* and *store*."],
     ["The *r* after a vowel is never pronounced.","That describes non-rhotic accents."],
     ["A glottal stop replaces every /t/.","GA has flapping, and not a glottal stop in every word."],
     ["Every vowel is long.","Vowel length varies in GA."]]),
   Q("e6u4-q03","e6u4-l1",2,"Amara hears an American speaker say *water* with a very quick tap in the middle. What is the sound called?",1,[
     ["A glottal stop","A glottal stop closes the vocal folds. The tap here is made with the tongue."],
     ["A flap","Right. A /t/ or /d/ between vowels, with the second unstressed, is often a flap in GA."],
     ["A trill","A trill is a long vibration, as in some languages."],
     ["A lisp","A lisp is a speech difference, and this is a regular feature of the accent."]]),
   Q("e6u4-q04","e6u4-l1",1,"For a speaker who has the cot–caught merger, which pair sounds the same?",3,[
     ["*bath* and *path*","Both are BATH words, so they rhyme in every accent, but they start with different sounds. The merger is about LOT and THOUGHT words."],
     ["*pen* and *pin*","This is the *pin–pen* merger, a different feature."],
     ["*put* and *putt*","This is the FOOT–STRUT merger, a different feature."],
     ["*Don* and *dawn*","Right. Both have the same vowel for a speaker with the merger."]]),
   Q("e6u4-q05","e6u4-l1",1,"Who published *An American Dictionary of the English Language* in 1828?",1,[
     ["William Labov","Labov studied speech in the 20th century."],
     ["Noah Webster","Right. He also promoted spellings such as *color* and *center*."],
     ["John Wells","Wells wrote about accents in 1982."],
     ["Daniel Jones","Jones wrote about British pronunciation."]]),
   Q("e6u4-q06","e6u4-l1",2,"Which pair gives the US spelling first and the British spelling second?",2,[
     ["*theatre* and *theater*","This gives the British spelling first."],
     ["*colour* and *color*","This gives the British spelling first."],
     ["*center* and *centre*","Right. The US spelling is first."],
     ["*defence* and *defense*","This gives the British spelling first."]]),
   Q("e6u4-q07","e6u4-l1",2,"Which description matches the typical Southern pattern for the vowel in *ride*?",0,[
     ["A single long vowel [aː], especially before voiced sounds and at the end of a word","Right. Many Southern accents have this, and speakers vary."],
     ["A vowel that is always shorter than in *rid*","This is not the pattern."],
     ["A vowel that starts higher before voiceless sounds","That describes Canadian raising."],
     ["The same vowel as in *boot*","This is not the pattern."]]),
   Q("e6u4-q08","e6u4-l1",2,"What did Labov (1966) find in the New York department stores?",1,[
     ["Salespeople in every store pronounced the *r* in the same way.","The rate differed by store."],
     ["The *r* was pronounced more in higher-status stores, and more in a careful repeat.","Right. Speech varied in regular ways with class and style."],
     ["Only young salespeople pronounced the *r*.","The study compared stores and styles."],
     ["Nobody pronounced the *r*.","Many salespeople did, to different degrees."]]),
   Q("e6u4-q09","e6u4-l1",3,"Priya listens to one older speaker from Boston and says, “I heard an *r* in *store*, so Boston English is rhotic.” What is wrong with this claim?",2,[
     ["Nothing is wrong.","The claim goes beyond the evidence."],
     ["The speaker must be from New York.","The place is given in the archive."],
     ["One speaker cannot show a whole city. Traditional Boston speech was non-rhotic, and younger speakers are more often rhotic.","Right. A careful claim names one speaker, a typical pattern and a limit."],
     ["Boston speakers never pronounce the *r*.","The pattern is more varied."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u4-q10","e6u4-l2",1,"What does habitual *be* mean in *She be working*?",3,[
     ["She is working right now.","That would be *She working*."],
     ["She worked yesterday.","The sentence is not about the past."],
     ["She will work tomorrow.","The sentence is not about the future."],
     ["She works regularly.","Right. Habitual *be* marks a regular action."]]),
   Q("e6u4-q11","e6u4-l2",1,"Who wrote “The Logic of Nonstandard English” in 1969?",0,[
     ["William Labov","Right. He argued that nonstandard varieties have their own logic."],
     ["Noah Webster","Webster worked in the early 1800s."],
     ["Peter Trudgill","Trudgill is a British sociolinguist."],
     ["Diana Eades","Eades writes about Aboriginal English."]]),
   Q("e6u4-q12","e6u4-l2",2,"Which standard-English sentence has an *is* that AAE cannot leave out, according to Labov’s rule?",1,[
     ["She is tired.","*She’s tired* is possible, so deletion is possible."],
     ["Yes, she is.","Right. *Yes, she’s* is not possible, so deletion is not possible."],
     ["They are ready.","*They’re ready* is possible."],
     ["Who is there?","*Who’s there?* is possible."]]),
   Q("e6u4-q13","e6u4-l2",1,"Why does Lesson 2 have no recordings?",2,[
     ["The varieties have no rules, so a recording would not help.","They have rules, as the lesson shows."],
     ["The recordings were too long.","Length is not the reason."],
     ["The archive gives no ethnicity, so a clip could not be labeled as one of these varieties without guessing.","Right. A label for a real person should rest on evidence."],
     ["The varieties are not spoken today.","Many people speak them today."]]),
   Q("e6u4-q14","e6u4-l2",2,"Which sentence describes the Oakland resolution (1996) in the most neutral way?",1,[
     ["It was a plan to stop teaching English.","The stated aim was to help students learn Standard English."],
     ["It proposed to recognize students’ home speech and to use it to help teach Standard English, and it led to a national debate.","Right. It states what was proposed and what followed."],
     ["It was supported by every linguist on every detail.","The linguists’ society supported using home varieties in teaching. It did not endorse every detail."],
     ["It was only about spelling.","It was about speech and teaching."]]),
   Q("e6u4-q15","e6u4-l2",1,"How do linguists describe Chicano English?",0,[
     ["A native variety of English, and not learner English","Right. Many speakers learned English as a first language."],
     ["Spanish with a few English words","It is a variety of English."],
     ["A mistake that people make when they learn English","It is not a mistake or learner English."],
     ["The English of one city only","It is found in many places."]]),
   Q("e6u4-q16","e6u4-l2",2,"Lucía moves from Spanish to English in the middle of a sentence when she talks with her cousin. What does research on code-switching (Poplack, 1980) say?",3,[
     ["It shows that she does not know either language well.","Research finds the opposite."],
     ["It happens at random places.","Speakers switch at places that the grammar of both languages allows."],
     ["It happens only in the US.","It is found among bilingual speakers everywhere."],
     ["It follows grammatical rules and takes skill in both languages.","Right. It is a regular skill."]]),
   Q("e6u4-q17","e6u4-l2",3,"A teacher says, “*She be working* is bad grammar.” Which reply is the best?",2,[
     ["“Yes. It is a mistake for *is*.”","It is not a mistake for *is*. It has its own meaning."],
     ["“It means that she will work later.”","It is about regular action."],
     ["“In AAE, *be* marks a regular action. It follows its own rule, and agreement is a rule of standard English.”","Right. It describes the feature and the system it belongs to."],
     ["“Nobody says it.”","Many speakers use it."]]),
   Q("e6u4-q18","e6u4-l2",3,"Tomás’s classmate says, “Chicano English is just English that was learned wrongly.” What is the best response?",1,[
     ["“Yes, speakers should learn standard English.”","This repeats the judgment."],
     ["“Researchers describe it as a native variety with its own features. Many speakers learned English first.”","Right. It is a variety, and not a learner mistake."],
     ["“It is Spanish, not English.”","It is a variety of English."],
     ["“It has no rules.”","It has patterns, like every variety."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u4-q19","e6u4-l3",1,"Which statement about Canadian spelling is the most accurate?",1,[
     ["It is the same as US spelling in every word.","Canadian dictionaries use *colour* and *centre*."],
     ["Canadian dictionaries mix British and US forms, for example *colour* and *centre* with *-ize* and *tire*.","Right. Everyday usage varies."],
     ["It is the same as British spelling in every word.","*-ize* and *tire* follow US forms."],
     ["Canadians have no standard spelling.","Dictionaries and style guides give a standard."]]),
   Q("e6u4-q20","e6u4-l3",1,"What do most Canadians call the letter z?",2,[
     ["*zee*","This is the US form."],
     ["*zad*","This is not a standard name."],
     ["*zed*","Right. This is the usual Canadian form, as in Britain."],
     ["*zet*","This is not a standard name in English."]]),
   Q("e6u4-q21","e6u4-l3",2,"Which pair shows the difference caused by Canadian raising?",0,[
     ["*write* and *ride*","Right. The vowel starts higher before /t/ than before /d/."],
     ["*cot* and *caught*","This pair involves the cot–caught merger."],
     ["*bath* and *path*","Both have the same vowel type."],
     ["*zed* and *zee*","This is a difference in the name of a letter."]]),
   Q("e6u4-q22","e6u4-l3",1,"Who named Canadian raising, and when?",3,[
     ["Labov, 1966","Labov studied New York."],
     ["Wells, 1982","Wells named the lexical sets."],
     ["Webster, 1828","Webster published a dictionary."],
     ["Chambers, 1973","Right. J. K. Chambers used the name in 1973."]]),
   Q("e6u4-q23","e6u4-l3",2,"What does research say about the stereotype that Canadians say *about* with the vowel of *boot*?",1,[
     ["It is correct.","The vowel still glides."],
     ["It is not what research finds. The vowel is still a diphthong, and it starts higher than in much of the US.","Right. This is Canadian raising."],
     ["It is correct, but only in Newfoundland.","The lesson describes Newfoundland English as different, but not in this way. The stereotype is not what research finds."],
     ["It is correct for older speakers only.","Research does not report this."]]),
   Q("e6u4-q24","e6u4-l3",2,"What does the Canadian Shift involve?",2,[
     ["A change in the spelling of Canadian words","It is a change in sounds."],
     ["The loss of the *r* after vowels","This is a different feature."],
     ["The short front vowels, especially *trap*, moving lower and further back","Right. It was described by Clarke, Elms and Youssef (1995)."],
     ["A change of the Canadian flag","It has nothing to do with this subject."]]),
   Q("e6u4-q25","e6u4-l3",2,"Which sentence describes *eh* in Canadian English accurately?",0,[
     ["It is a discourse marker with several uses, such as asking for agreement.","Right. Its use varies by speaker and situation."],
     ["It is used at the end of every sentence.","Use varies, and many speakers use it rarely."],
     ["It is found only in Canada.","Similar words exist in other varieties."],
     ["It is a sign of poor grammar.","It is a regular feature of speech."]]),
   Q("e6u4-q26","e6u4-l3",3,"Mei hears one speaker from Toronto and writes, “This is how all Canadians speak.” What is the best response?",1,[
     ["“Yes. Canada has one accent.”","Canada has many varieties."],
     ["“One speaker is one person. Newfoundland, Quebec and other places differ, so say what this speaker does and what is typical.”","Right. It adds a limit."],
     ["“Toronto speakers have no accent.”","Every speaker has an accent."],
     ["“Only Vancouver speakers count.”","No place stands for the whole country."]]),
   Q("e6u4-q27","e6u4-l3",3,"Hana reads a story from Newfoundland in which a character says *I’m after eating*. What does this suggest?",3,[
     ["The author made a mistake.","It is a regular structure."],
     ["All Canadians say it.","It is a feature of some regional varieties."],
     ["The character is learning English.","The structure is a native feature."],
     ["Newfoundland English shares a feature with Irish English, which fits the settlement history.","Right. The *after*-perfect is documented in both."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u4-q28","e6u4-l4",1,"When did British colonization begin at Sydney?",1,[
     ["1688","This is too early."],
     ["1788","Right. Colonization began at Sydney in 1788."],
     ["1840","This is the year of the Treaty of Waitangi in New Zealand."],
     ["1901","This is the year of the Australian federation."]]),
   Q("e6u4-q29","e6u4-l4",1,"What are the three points on the scale used for Australian English?",0,[
     ["Broad, general and cultivated","Right. Mitchell and Delbridge (1965) used these labels."],
     ["Old, middle and new","These are not the labels."],
     ["North, central and south","The scale is not about regions."],
     ["Formal, informal and slang","These are not the labels."]]),
   Q("e6u4-q30","e6u4-l4",2,"Which statement about the high rising terminal is accurate?",2,[
     ["It is found only in Australia.","It is reported in many varieties."],
     ["It always means that the speaker is unsure.","Studies show several uses, and doubt is not the usual one."],
     ["It is a rise at the end of a statement that often checks that the listener is following.","Right. Warren (2016) lists several uses."],
     ["It is a mistake that teachers should correct.","It is a regular feature."]]),
   Q("e6u4-q31","e6u4-l4",1,"Which description of the *kit* vowel is typical for New Zealand English?",3,[
     ["It is a long back vowel.","This is not the pattern."],
     ["It is the same as in General American.","It is different in New Zealand English."],
     ["It is a diphthong.","It is a short vowel."],
     ["It is a central vowel, closer to schwa.","Right. This is part of the short front vowel shift."]]),
   Q("e6u4-q32","e6u4-l4",1,"In which year did te reo Māori become an official language of New Zealand?",1,[
     ["1840","This is the year of the Treaty of Waitangi."],
     ["1987","Right. This was the year of the Māori Language Act."],
     ["2006","This was the year that New Zealand Sign Language became official."],
     ["1965","This was the year of Mitchell and Delbridge’s study in Australia."]]),
   Q("e6u4-q33","e6u4-l4",2,"Which word is a New Zealand word that is not from te reo Māori?",0,[
     ["*jandals*","Right. It means flip-flops, and it is an English word that is local to New Zealand."],
     ["*whānau*","This is a te reo Māori word."],
     ["*kai*","This is a te reo Māori word."],
     ["*kia ora*","This is a te reo Māori greeting."]]),
   Q("e6u4-q34","e6u4-l4",2,"Why is there no clip of Aboriginal English in this unit?",2,[
     ["Aboriginal English is not a real variety.","It is a real variety with its own features."],
     ["It is the same as every other variety.","It differs from other Australian English."],
     ["The archive records no ethnicity, so a clip could not be labeled as this variety without guessing.","Right. The label must rest on evidence."],
     ["No Aboriginal people speak English.","Many speak English, and some use Aboriginal English."]]),
   Q("e6u4-q35","e6u4-l4",3,"Fatima hears a young Australian speaker end each statement with a rise and says, “She is always unsure.” What is the best response?",1,[
     ["“Yes. A rise always means doubt.”","Studies do not support this as a general rule."],
     ["“The rise has several uses, such as checking that the listener follows, and it is found in many varieties. It does not usually mean doubt.”","Right. It uses what research says."],
     ["“Young speakers should stop doing it.”","This is a judgment and not a description."],
     ["“It means that she is lying.”","There is no evidence for this."]]),
   Q("e6u4-q36","e6u4-l4",3,"A student asks Toby, who is from Australia, whether all Australians speak broad Australian English. Which reply is the most accurate?",3,[
     ["“Yes. Broad is the only kind.”","The scale has three points."],
     ["“No. Only the cultivated form is real.”","No form is more real than another."],
     ["“Yes, and general speakers are wrong.”","General is not wrong."],
     ["“No. The scale has three points, and the general form is the one that most speakers use, with each speaker moving along the scale.”","Right. This fits Mitchell and Delbridge (1965)."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u4-q37","e6u4-l5",1,"What does *robot* mean in South African English?",2,[
     ["A machine in a factory","This is the general meaning, not the South African one."],
     ["A pickup truck","This is a *bakkie*."],
     ["A traffic light","Right. It is a local meaning of the word."],
     ["A taxi","This is not the meaning."]]),
   Q("e6u4-q38","e6u4-l5",1,"How many official languages does South Africa have today?",1,[
     ["11","This was the number before 2023."],
     ["12","Right. South African Sign Language became the 12th in 2023."],
     ["2","English and Afrikaans were the two official languages for most of the 20th century."],
     ["9","This is not the number."]]),
   Q("e6u4-q39","e6u4-l5",2,"What does *just now* usually mean in South African English?",3,[
     ["Immediately","In South African English, *now* is closer to this."],
     ["Never","This is not the meaning."],
     ["Yesterday","This is not the meaning."],
     ["In a little while","Right. Speakers differ on details, so it is safest to check."]]),
   Q("e6u4-q40","e6u4-l5",1,"Which language does the word *braai* come from?",0,[
     ["Afrikaans","Right. It means a barbecue."],
     ["Zulu","*Indaba* is a word from Zulu and Xhosa."],
     ["Hindi","This is not the source."],
     ["French","This is not the source."]]),
   Q("e6u4-q41","e6u4-l5",2,"Which of these places is typically non-rhotic?",2,[
     ["Toronto","English in Canada is typically rhotic."],
     ["Columbus, Ohio","The Midwest is typically rhotic."],
     ["Auckland","Right. New Zealand English is typically non-rhotic."],
     ["Dublin","Most accents in Ireland are rhotic."]]),
   Q("e6u4-q42","e6u4-l5",2,"Which statement about the BATH vowel is the most accurate?",1,[
     ["It is long in all of the US.","The US has a short vowel."],
     ["It is typically short in the US and Canada, and long in southern England and in many White South African accents.","Right. In Australia, *ask* and *bath* are long, and words such as *dance* vary by region."],
     ["It is the same in every variety in this unit.","The varieties differ."],
     ["It is short in southern England.","Southern England has the long vowel."]]),
   Q("e6u4-q43","e6u4-l5",2,"Why must the racial labels in research on South African English be used with care?",3,[
     ["They are new words.","They come from the history of apartheid."],
     ["They are the names of languages.","They are not language names."],
     ["They are never used by researchers.","Researchers have used them."],
     ["They come from the history of apartheid, and they are not sharp. A variety is a set of features, and not a type of person.","Right. Use the words that a person uses about themselves."]]),
   Q("e6u4-q44","e6u4-l5",3,"Mariya, a student of English interpreting, hears a classmate say, “South African English is too hard to understand.” What is the best response?",2,[
     ["“You are right. It is hard for everyone.”","Difficulty depends on the listener’s experience."],
     ["“Do not listen to it again.”","Repeated listening helps."],
     ["“It was hard for you this time. Listen for the message first, then for one feature, and check words such as *robot* with the speaker.”","Right. It places the difficulty with the listener’s experience and gives a plan."],
     ["“South Africans should change their English.”","Nobody needs to change an accent so that a listener can follow it."]]),
   Q("e6u4-q45","e6u4-l5",3,"A classmate listens to an Auckland speaker and a Sydney speaker and says, “Both are non-rhotic, so the accents are the same.” What is wrong?",0,[
     ["One feature never defines an accent. The two varieties differ in other features, such as the *kit* vowel, and one speaker is one person.","Right. Two accents can share one feature and differ in others."],
     ["Nothing is wrong.","The conclusion goes beyond the evidence."],
     ["Both speakers must be rhotic.","The typical pattern for both is non-rhotic."],
     ["The two speakers are from the same city.","They are from different places."]])
  ]
});
})();
