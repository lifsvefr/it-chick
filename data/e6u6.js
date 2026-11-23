(function(){
/* World Englishes · Unit 6 (e6u6) · Africa and the Caribbean */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u6", track:"e6", n:6, title:"Africa and the Caribbean", icon:"🌍",
  blurb:"English is an official language in many countries of Africa and the Caribbean, and in each place it is used beside other languages. This unit visits West Africa (Nigeria, Ghana, Sierra Leone and Liberia) and East and Southern Africa (Kenya, Uganda, Tanzania and Zimbabwe). It sets out the debate between Chinua Achebe and Ngũgĩ wa Thiong’o about the language of African writing, and the debate about the language of school. Then it turns to Jamaica, Trinidad, Barbados and Guyana, where English and creoles are used side by side. You hear 14 real speakers from 13 places. The last lesson is a lab that compares them and does not rank anyone.",
  goals:[
    "Describe English in Nigeria, Ghana, Sierra Leone and Liberia: history with correct dates, and tendencies of sound, grammar and words, with hedges",
    "Describe English in Kenya, Uganda, Tanzania and Zimbabwe, and explain the difference between a national language and an official language",
    "Explain the Achebe–Ngũgĩ debate fairly, and the arguments about the language of school, using published evidence only",
    "Describe Caribbean English: its history, Standard Jamaican English beside Jamaican Creole, the creole continuum, and Caribbean English in Britain",
    "Listen across African and Caribbean Englishes, make careful claims about one speaker, and describe without ranking"
  ],
  read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, sections 10.2 “Language varies”, 10.6 “Sociolinguistic correlations: Place” and 10.9 “Sociolinguistic correlations: Ethnicity”; Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”; Chapter 3, Phonetics, sections 3.5 “Describing vowels” and 3.12 “Tone and intonation”", note:"Read the Chapter 10 sections beside Lessons 1, 2 and 4. Section 2.1 fits Lesson 3, and the Chapter 3 sections help with the listening lab in Lesson 5."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u6-l1", title:"English in West Africa", minutes:55,
   hook:{q:"A colleague from Ghana says “I’m coming”, stands up in a meeting and walks to the door. What does the colleague most likely mean?", options:["“I am about to arrive here.”","“I will be back soon.”","“I am leaving for good.”","“I do not agree with you.”"], answer:1, reveal:"**Most likely “I will be back soon.”** In Ghanaian English, and in other West African Englishes, *I’m coming* is often said by a person who steps out for a short time. Researchers describe more than one use, so a listener can ask to be sure. The phrase is not a mistake. It is a local meaning of an English expression."},
   goals:[
     "Say where English is official in West Africa, and give correct dates for Ghana, Nigeria, Sierra Leone and Liberia",
     "Describe tendencies of sound, grammar and words in Nigerian and Ghanaian English, with hedges",
     "Explain the difference between a feature of a variety and a mistake",
     "Say what is special about English in Liberia and in Sierra Leone, and name Krio and Nigerian Pidgin without describing them in full",
     "Use words such as *I’m coming*, *flash*, *chop* and *go-slow* with their local meanings"
   ],
   learn:[
    {h:"Four countries on one coast", body:[
      {lead:"English is an official language in Nigeria, Ghana, Sierra Leone and Liberia. In each country it is one language among many."},
      "Nigeria has more than 500 languages. Ghana, Sierra Leone and Liberia also have many. A person often uses one language at home, another at the market and English at school or at work. Some people also use a pidgin or a creole with friends. Nigerian Pidgin, Ghanaian Pidgin and Krio are systems of their own, and Unit 7 studies them. This lesson is about English.",
      "In Kachru’s model (Unit 1), these countries are in the {{we-kachru-circles|outer circle}}. English came with colonial rule or with settlers, and it stayed after independence. Today it is used in government, courts, schools and the news. For many people it is an additional language that they use every day. For some people it is the first language.",
      {tip:"This unit is about understanding, not imitating. You will not be asked to copy any accent or any pattern of grammar. Each variety is a full system, and no speaker in this unit speaks “broken English”."}
    ]},
    {h:"How English arrived and stayed", body:[
      {lead:"The four countries have different histories. The dates matter, because the history helps to explain how English is used today."},
      "On the coast of present-day Ghana, European traders built forts from the 1400s. Britain made the Gold Coast a colony in 1874, and Ghana became independent on 6 March 1957. Britain took Lagos in 1861 and joined the northern and southern protectorates into one colony of Nigeria in 1914. Nigeria became independent on 1 October 1960. Unit 2 tells more of both stories.",
      "Sierra Leone began in a different way. In 1792, about 1,200 Black Loyalists sailed from Nova Scotia and founded Freetown. They were people of African descent who had sided with Britain in the American Revolution. After 1807, Britain also settled in Freetown Africans who had been freed from slave ships. Sierra Leone became a British colony in 1808, and it became independent on 27 April 1961.",
      "Liberia was never ruled by a European power. From 1820, the American Colonization Society, an organization in the United States, sent free Black Americans to the coast of West Africa. Some of them had been enslaved before they were freed. The first lasting settlement, at Cape Mesurado near present-day Monrovia, began in 1822. The plan was debated at the time, including among Black Americans. People already lived in the region and spoke many languages. Liberia declared independence on 26 July 1847, and English is its official language.",
      {table:[["Country","English began with","Independence"],["Ghana","Gold Coast colony, 1874","6 March 1957"],["Nigeria","Lagos 1861; one colony 1914","1 October 1960"],["Sierra Leone","Freetown 1792; colony 1808","27 April 1961"],["Liberia","Settlers from the US, from 1820","26 July 1847"]]},
      {fig:'<svg viewBox="0 0 340 360"><text x="170" y="20" text-anchor="middle">From settlements to independence</text><line class="d-ink" x1="76" y1="40" x2="76" y2="338" stroke-width="2"/><text x="12" y="62">1792</text><circle class="d-sage" cx="76" cy="58" r="7" stroke-width="2"/><text x="96" y="58">Freetown founded</text><text class="s" x="96" y="75">Sierra Leone</text><text x="12" y="114">1820</text><circle class="d-gold" cx="76" cy="110" r="7" stroke-width="2"/><text x="96" y="110">First settlers sail</text><text class="s" x="96" y="127">Liberia, from the United States</text><text x="12" y="166">1847</text><circle class="d-gold" cx="76" cy="162" r="7" stroke-width="2"/><text x="96" y="162">Liberia declares independence</text><text class="s" x="96" y="179">26 July</text><text x="12" y="218">1957</text><circle class="d-rose" cx="76" cy="214" r="7" stroke-width="2"/><text x="96" y="214">Ghana is independent</text><text class="s" x="96" y="231">6 March</text><text x="12" y="270">1960</text><circle class="d-lup" cx="76" cy="266" r="7" stroke-width="2"/><text x="96" y="266">Nigeria is independent</text><text class="s" x="96" y="283">1 October</text><text x="12" y="322">1961</text><circle class="d-sage" cx="76" cy="318" r="7" stroke-width="2"/><text x="96" y="318">Sierra Leone is independent</text><text class="s" x="96" y="335">27 April</text></svg>', alt:"A vertical timeline with six dates: Freetown founded in 1792, first settlers sail to Liberia in 1820, Liberia declares independence in 1847, Ghana independent in 1957, Nigeria in 1960 and Sierra Leone in 1961.", cap:"Six dates from this lesson, in order."}
    ]},
    {h:"Sound: tendencies, not rules for people", body:[
      {lead:"Researchers describe [[we-nigerian-english|Nigerian English]] and [[we-ghanaian-english|Ghanaian English]] as varieties with their own sound systems."},
      "Two main sources are David Jowitt’s books on Nigerian English (1991 and 2019) and Magnus Huber’s chapter on Ghanaian English (2004), in *A Handbook of Varieties of English*, edited by Bernd Kortmann, Edgar Schneider and colleagues. The points below are tendencies in descriptions like these. Each point varies by speaker, because a speaker’s first language, school and travel all matter.",
      {table:[["Feature","What descriptions often say","Note"],["The *r* after a vowel","Not pronounced (non-rhotic), as in southern England","Some speakers do pronounce it"],["Vowels","Fewer vowel contrasts than in SSBE, so *beat* and *bit* may share one vowel","Described by Huber (2004) for Ghanaian English"],["Rhythm","A tendency toward syllable timing","The label is debated"],["Pitch","Many first languages use tone","Researchers still discuss the link"]]},
      "A [[we-tone-language|tone language]] uses pitch to tell words apart. Yoruba, Igbo, Hausa and Twi are tone languages. Some researchers ask whether this shapes the pitch of English in West Africa. The evidence is still being discussed, so treat it as an open question. For rhythm, see {{stress-timing-and-rhythm|stress timing and rhythm}} in How English Works. The labels *stress-timed* and *syllable-timed* describe tendencies, and researchers debate them.",
      {tip:"All the speakers in this course read the same paragraph. A reading shows pronunciation only. It cannot show grammar, and it cannot show which languages a person uses."},
      "The archive lists each speaker’s “native language”, which means the language that the person learned first. In West Africa, many people learn English at school from about age five and then use it every day. English came second for them, but it is fully their language too. A speaker whose first language is Igbo or Hausa is still a user of Nigerian English.",
      {ex:"Listen to a speaker from Lagos, Nigeria. Igbo is this speaker’s first language, and the speaker learned English at school from age five. The speaker has lived in Nigeria and the US. Notice the *r* in *store*, *her* and *brother*. There is no single right answer, and one speaker is one person.", label:"Listen: Lagos", listen:"e6u6-l1-a1"},
      {ex:"Listen to a speaker from Accra, Ghana (21, male). English is his first language, and he also speaks Twi and Ga. He has lived in Ghana and the US. Notice the vowels in *six*, *thick* and *big*.", label:"Listen: Accra", listen:"e6u6-l1-a2"},
      {ex:"Listen to a speaker from Benin City, Nigeria (29, female). English is her first language. She has lived in Nigeria and the US. Notice the words that you find easy and hard to hear.", label:"Listen: Benin City", listen:"e6u6-l1-a3"},
      {ex:"Listen to a speaker from Kano, Nigeria (49, male). Hausa is his first language, and he learned English at school from age seven. He has lived in Nigeria and the US. Notice the rhythm of the sentences.", label:"Listen: Kano", listen:"e6u6-l1-a4"},
      {ex:"Listen to a speaker from Maryland County, Liberia (59, female). English is her first language, and she also speaks Grebo. She has lived in Liberia and the US. Notice the *r* in *her* and *brother*.", label:"Listen: Maryland County", listen:"e6u6-l1-a5"}
    ]},
    {h:"Grammar: features, not mistakes", body:[
      {lead:"Some patterns of West African English differ from the textbook standard. Researchers record them as features."},
      "A feature is a pattern that many speakers share and that follows its own rules. [[we-ewave|eWAVE]], the World Atlas of Varieties of English, records grammar features for Nigerian English and Ghanaian English. It also lists Nigerian Pidgin and Ghanaian Pidgin as separate varieties. A teaching site at Ruhr University Bochum (WEGate) gives the first two examples below for Nigerian English.",
      {list:["**One tag for every sentence:** *You are coming, isn’t it?* Many varieties use one [[we-invariant-tag|invariant tag]], and you met this in Unit 5.","**A noun repeated by a pronoun:** *My sister, she works there.* The same pattern is common in informal speech in Britain and the US.","**The progressive with some stative verbs.** Descriptions of Nigerian English also report this pattern. Unit 5 shows that it appears in several outer-circle varieties."]},
      "These patterns are not random. Speakers use them in a regular way, and listeners from the same community expect them. That is why researchers call them features.",
      {warn:"“A documented feature” and “accepted in every setting” are different claims. An exam or a company may ask for one particular standard. A feature can be a regular part of a variety and still be marked down in some tests. Both statements can be true."}
    ]},
    {h:"Words and meanings", body:[
      {lead:"Every variety has words for local life. Some are borrowed, and some are English words with a new meaning."},
      {table:[["Expression","Meaning in local use","Reported in"],["*I’m coming*","“I will be back soon.” Researchers describe several uses.","Ghana, and elsewhere in West Africa"],["*to flash* someone","To call and hang up after one ring, so the other person calls back","Ghana and Nigeria"],["*chop*","To eat. A *chop bar* is a small local restaurant.","Ghana and Nigeria"],["*go-slow*","A traffic jam","Nigeria"],["*trotro*","A shared minibus","Ghana"],["*sorry*","Said to show sympathy, for example to a tired person. It does not always mean “I apologize”.","Nigeria, and East Africa (Lesson 2)"],["*next tomorrow*","The day after tomorrow","Nigeria"]]},
      "These words show how English changes in a new place. Speakers borrow words, give old words new meanings and make new combinations. This is [[we-nativization|nativization]], and Unit 5 showed it for India.",
      {ex:"Dr Amoako is from Ghana. He teaches information science at a university in Japan, and he has lived in Japan for twenty years. Suppose he stands up in a lab meeting, says “I’m coming” and leaves the room. A student who knows only the textbook meaning might wait for him to arrive. A short, friendly question solves the problem: “Do you mean that you will be back soon?” Nobody has made a mistake. Two good users of English have two different meanings for one expression.", label:"Imagined example: a meeting"}
    ]},
    {h:"Sierra Leone and Liberia", body:[
      {lead:"English is official in both countries, and each country has a language history of its own."},
      "In Sierra Leone, English is the official language of government, schools and the media. Krio, a creole with English-based words, is the language that most people use between ethnic groups in daily life. Many people use Krio and other Sierra Leonean languages as well as English. Krio is a language in its own right, and Unit 7 studies it.",
      "For Liberia, eWAVE lists two varieties: [[we-liberian-settler-english|Liberian Settler English]] and Vernacular Liberian English. Some scholars link Settler English to the speech of African Americans in the 1800s. This question is debated. For the lab in Lesson 5, one speaker comes from Maryland County in the southeast of Liberia. The archive does not say which variety she uses, and the paragraph shows pronunciation only, so no clip can show it."
    ]},
    {h:"Three common mistakes", body:[
      {ol:["**“West African English” is one accent.** It is not. Nigeria and Ghana differ from each other, and each country has many accents linked to first languages, regions and schools.","**Nigerian English and Nigerian Pidgin are the same thing.** They are not. Many people use both, and eWAVE lists them as separate varieties.","**A pattern that differs from the textbook is a mistake.** Researchers ask whether many fluent speakers use the pattern and whether it follows rules. If both answers are yes, it is a feature."]},
      {key:"A variety is a set of tendencies, and a speaker is a person. Describe what you hear, compare it with what researchers report, and do not rank."}
    ]}
   ],
   try:[
    M("e6u6-l1-x1","Which statement about English in Nigeria, Ghana, Sierra Leone and Liberia is the most accurate?",0,[
      ["English is an official language in all four, and in each country it is used beside many other languages.","Right. People often use several languages every day."],
      ["English is the only language that people speak in all four.","Each country has many languages, and Nigeria has more than 500."],
      ["English reached all four countries in the same way, through colonial rule.","Liberia was founded by settlers from the US and was not ruled by a European power."],
      ["English is official only in Nigeria.","English is official in all four."]
    ]),
    {id:"e6u6-l1-x2", type:"sort", q:"Which country does each fact belong to?", buckets:["Ghana","Nigeria","Sierra Leone","Liberia"], items:[
      {t:"Freetown was founded in 1792 by Black Loyalists from Nova Scotia", b:2, why:"This is the start of Freetown, in Sierra Leone."},
      {t:"Independence on 1 October 1960", b:1, why:"This is Nigeria’s date."},
      {t:"The American Colonization Society sent free Black Americans from 1820", b:3, why:"The settlers founded what became Liberia."},
      {t:"The Gold Coast became a colony in 1874", b:0, why:"The Gold Coast is the colonial name of Ghana."},
      {t:"Independence on 6 March 1957", b:0, why:"This is Ghana’s date."},
      {t:"Independence declared on 26 July 1847", b:3, why:"This is Liberia’s date."},
      {t:"Independence on 27 April 1961", b:2, why:"This is Sierra Leone’s date."},
      {t:"Britain took Lagos in 1861", b:1, why:"Lagos is a city in Nigeria."}
    ]},
    {id:"e6u6-l1-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Freetown is founded (1792)", why:"This is the earliest date in the list."},
      {t:"The first settlers sail for Liberia (1820)", why:"This came 28 years after Freetown."},
      {t:"Liberia declares independence (1847)", why:"This came 27 years after the first settlers sailed."},
      {t:"Ghana becomes independent (1957)", why:"Ghana’s independence came 110 years after Liberia’s."},
      {t:"Nigeria becomes independent (1960)", why:"This came three years after Ghana."},
      {t:"Sierra Leone becomes independent (1961)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u6-l1-x4", type:"match", q:"Match each expression to its meaning in West African English.", pairs:[
      ["*go-slow*","A traffic jam","This is a Nigerian expression."],
      ["*trotro*","A shared minibus","This is a Ghanaian word."],
      ["*next tomorrow*","The day after tomorrow","This is reported for Nigerian English."],
      ["*chop bar*","A small local restaurant","*Chop* means “to eat”."],
      ["*sorry* said to a tired person","A sign of sympathy, not an apology","It shows that the speaker notices the other person’s effort."]
    ]},
    {id:"e6u6-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Nigerian English and Nigerian Pidgin are the same variety.", flag:true, why:"They are separate. Many people use both, and eWAVE lists them separately."}, " ", {t:"Descriptions often say that Nigerian and Ghanaian English are non-rhotic.", flag:false, why:"Correct as a tendency. One speaker may differ."}, " ", {t:"*I’m coming* is a mistake for *I’m going*.", flag:true, why:"In Ghanaian English it has its own meaning, often “I will be back soon”."}, " ", {t:"The invariant tag *isn’t it?* is recorded as a feature of Nigerian English.", flag:false, why:"Correct. It is one of the patterns recorded for the variety."}, " ", {t:"A speaker who learned English at school is not a real user of English.", flag:true, why:"Using English every day makes a person a user, whatever the age of learning."}, " ", {t:"One recording cannot show how everyone in a country speaks.", flag:false, why:"Correct. One speaker is one person."}, "”"
    ]},
    {id:"e6u6-l1-x6", type:"number", q:"How many years passed between Liberia’s declaration of independence (1847) and Ghana’s independence (1957)?", answer:110, tol:0, unit:"years", why:"1957 − 1847 = 110.", wrongs:[{v:100, tol:0, why:"You rounded the answer. Subtract the years exactly."},{v:10, tol:0, why:"You subtracted only the last two digits (57 − 47). The two dates are in different centuries."}], hint2:"Subtract 1847 from 1957."},
    M("e6u6-l1-x7","You will hear a speaker from Accra, Ghana. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["This one speaker shows how all Ghanaians pronounce English.","One speaker is one person. A recording cannot show a whole country."],
      ["“I can describe what I hear in this speaker, compare it with what researchers report for Ghanaian English, and say that one speaker is one person.”","Right. It reports the evidence, compares it with research and adds a limit."],
      ["This speaker makes a mistake if the sounds differ from SSBE.","A difference from another variety is not a mistake. Each variety has its own system."],
      ["This speaker speaks Twi in the recording.","The speaker reads an English paragraph, so the recording cannot show another language."]
    ], {listen:"e6u6-l1-a2", hint:"The right answer does not depend on what this speaker does. Choose the claim that stays within the evidence."}),
    {id:"e6u6-l1-x8", type:"explain", q:"Kenji, a student in Osaka, reads that a Ghanaian colleague said “I’m coming” and then left the room. Kenji thinks the colleague made a mistake, because the colleague went away. Explain, kindly, what is going on.", size:"3–5 sentences", prompt:"Kenji could learn that …", hint:"Think about local meanings, about asking a friendly question and about the word *feature*.", points:["Says that in Ghanaian English, *I’m coming* often means “I will be back soon”","Says that the expression is not a mistake but a local meaning","Says that researchers describe several uses, so Kenji can ask","Suggests a friendly question and does not blame the speaker"], model:"In Ghanaian English, and in other West African Englishes, *I’m coming* often means “I will be back soon”. The colleague did not make a mistake. The expression has a local meaning that many fluent speakers share. Researchers describe more than one use, so Kenji can ask, “Do you mean that you will be back soon?” That question is polite, and it helps both people."}
   ],
   apply:{
    intro:"These tasks use free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read a short description of Nigerian English", how:[
       "Open the WEGate page on Nigeria at the Ruhr University Bochum (search for “WEGate Nigeria English”).",
       "Find three features of Nigerian English that the page names, one of sound, one of grammar and one of words if the page gives one.",
       "Write each feature as a plain statement, such as “Many speakers use one tag, *isn’t it?*, for all sentences”. Do not use the words *wrong* or *mistake*."
     ], write:"Sound… Grammar… Words… Did I avoid judgment words?"},
     {t:"Map a repertoire", how:[
       "Think of a person in Lagos, Accra or Freetown who uses three languages in a week. You can imagine the person, or you can think of someone you know.",
       "Make a table with columns for place (home, market, school or work, friends) and language.",
       "Write two sentences that explain why English is only one part of this person’s repertoire."
     ], write:"Home… market… school or work… friends… Two sentences…"}
    ],
    proof:"Three plain statements about features of Nigerian English, with no judgment words, and a repertoire table for one person."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"This section shows why every speaker and every variety shows variation, which is the idea behind this lesson."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u6-l2", title:"East and Southern Africa", minutes:55,
   hook:{q:"A visitor in Nairobi is told, “Take a matatu to the city center.” What is a matatu?", options:["A shared minibus taxi","A kind of food","A traditional greeting","A market stall"], answer:0, reveal:"**A shared minibus taxi.** The word *matatu* is widely used in Kenya, and it is often said to come from the Swahili word for “three”, because of the early fare. Words like this are part of Kenyan English, and they show how English, Kiswahili and other local languages meet."},
   goals:[
     "Give the main facts about English and Kiswahili in Kenya, Uganda, Tanzania and Zimbabwe, with correct dates",
     "Explain the difference between a national language and an official language, with examples",
     "Describe tendencies of East African English in sound, grammar and words, with hedges",
     "Say what Sheng is, and why code-switching is a skill",
     "Say why standards of English in East Africa are still being discussed"
   ],
   learn:[
    {h:"A region of many languages", body:[
      {lead:"In East and Southern Africa, most people use more than one language every day. English and Kiswahili both play large roles in Kenya, Uganda and Tanzania."},
      "Kiswahili is a Bantu language with a long history on the East African coast, and it has many words from Arabic. It was used in trade long before colonial rule, and today it links people across several countries. English came with British rule and stayed after independence. In Zimbabwe, Shona and Ndebele are the largest African languages. South Africa is in Unit 4.",
      "The table gives the main facts, and the sections below explain them. A law names a language. It does not say how many people speak it at home, or how well.",
      {table:[["Country","Independence","Languages and school"],["Kenya","12 December 1963","Kiswahili is the national language. Kiswahili and English are official (Constitution, 2010)."],["Uganda","9 October 1962","English is official. Kiswahili became a second official language in 2005."],["Tanzania","Tanganyika 1961; union with Zanzibar 1964","Kiswahili is the national language and the language of primary school. English is the main language of secondary school."],["Zimbabwe","18 April 1980","The Constitution of 2013 lists 16 official languages. English is the main language of teaching in practice."]]}
    ]},
    {h:"Colonial history in brief", body:[
      {lead:"English came to East and Southern Africa with British rule, and the paths of the four countries were different."},
      "Britain began to rule the area of Kenya from 1895, and it made Kenya a colony in 1920. Uganda was a British protectorate from the 1890s. Tanganyika was ruled by Germany until the First World War, and then by Britain. British settlers began to arrive in the area of Zimbabwe in 1890. In 1965, the white-minority government of the colony declared independence from Britain, and almost no country recognized this. Zimbabwe became independent under majority rule on 18 April 1980.",
      "Colonial rule took land and often used force. Independence movements ended it, and in Kenya and Zimbabwe the struggle included armed conflict. In schools, colonial governments often gave English a higher place than African languages. After independence, each country made its own choices. Kenya and Uganda kept English as an official language. Tanzania gave Kiswahili a stronger place than the others did."
    ]},
    {h:"National language and official language", body:[
      {lead:"The two terms sound alike, but they are different, and a country can have both."},
      "An [[we-official-language|official language]] is a language that the government uses for laws, courts and public services. A [[we-national-language|national language]] is a language that a country names as a symbol of its identity or as a common language for all citizens. They can be different languages, or they can be the same one.",
      "Kenya shows both. Its Constitution of 2010 names Kiswahili as the national language, and Kiswahili and English as official languages. In Uganda, English has been official since 1962, and Kiswahili was added in 2005. In Tanzania, Kiswahili is used for primary school and in much of public life, and English is the main language of secondary school and of the universities.",
      "Debates about the language of school continue in all three countries. Schmied (2012) notes that the debate about English and Kiswahili as the medium of teaching is especially strong in Tanzania. Lesson 3 comes back to this question, and it uses published evidence only."
    ]},
    {h:"East African English: sound, grammar and words", body:[
      {lead:"Researchers such as Josef Schmied (2012) describe [[we-east-african-english|East African English]] as a family of varieties in Kenya, Uganda and Tanzania, with shared tendencies."},
      "Each tendency below varies by speaker. A speaker’s first language, school and travel all matter, and so does the place.",
      {list:["**Rhythm.** Syllables tend to have more even length and stress than in British English. This is a tendency toward syllable timing, and the label is debated.","**Vowels.** Some descriptions report fewer vowel contrasts, so *beat* and *bit* may share one vowel. Kiswahili has five vowels, and a smaller set of vowels is common in languages of the region.","**The *r* after a vowel.** A summary of Kenyan English describes it as non-rhotic. Check each variety, because descriptions differ.","**/r/ and /l/.** In some speakers the two sounds are close or merged, because some languages of the region do not separate them. Japanese is a similar case, since it has one sound that covers both. A Japanese learner of English may find this pattern familiar."]},
      "Schmied also lists grammar features. Examples are mass nouns used in the plural (*advices*, *luggages*), the preposition in *discuss about the plan*, and the progressive with some stative verbs. Some of these patterns also appear in other outer-circle varieties and in learner English. In a variety, many fluent speakers use the pattern in a regular way. Schmied (2012) writes that the debate about standards of English in East Africa has hardly begun, so the line between a feature and a learner’s pattern is still discussed.",
      {table:[["Word","Meaning","Where"],["*matatu*","A shared minibus taxi","Kenya (*daladala* in Tanzania)"],["*boda boda*","A bicycle or motorcycle taxi","Uganda and Kenya"],["*harambee*","“Pulling together”: a call for shared effort","Kenya"],["*mitumba*","Second-hand clothes","East Africa"],["*ugali*, *posho*","Maize dishes","East Africa"],["*sorry*","Said to show sympathy for someone, for example a tired person","East Africa, and Nigeria (Lesson 1)"]]},
      {ex:"Listen to a speaker from Nairobi, Kenya (45, female). Kikuyu is her first language, and she also uses Kiswahili. She learned English at school from age five, and she has lived in Kenya and the US. Notice the rhythm of the list of items.", label:"Listen: Nairobi", listen:"e6u6-l2-a1"},
      {ex:"Listen to a speaker from Kampala, Uganda (34, male). Luganda is his first language, and he also speaks Swahili. He learned English at school from age five, and he has lived in Uganda and the US. Notice the vowel in *peas* and *cheese*.", label:"Listen: Kampala", listen:"e6u6-l2-a2"},
      {ex:"Listen to a speaker from Dar es Salaam, Tanzania (22, male). Kiswahili is his first language, and he also speaks Chagga. He learned English at school from age six and has spent four months in the US. Notice the vowel in *six*, *thick* and *big*.", label:"Listen: Dar es Salaam", listen:"e6u6-l2-a3"},
      {ex:"Listen to a speaker from Harare, Zimbabwe (20, female). Shona is her first language, and she learned English at school from age six. The archive says that she has lived in the US for nine years, so her speech may show both places. Notice the *r* in *her*.", label:"Listen: Harare", listen:"e6u6-l2-a4"}
    ]},
    {h:"Sheng and moving between languages", body:[
      {lead:"A person in Nairobi may use several languages in one day, and each one has a job."},
      "[[we-sheng|Sheng]] is a way of speaking used by many young people in Nairobi. It mixes Kiswahili, English and other Kenyan languages, and its words change quickly. Researchers study it as a variety with its own words and patterns, and not as a mistake. People move between Sheng, Kiswahili, English and home languages depending on the place and the listener.",
      "That skill is called [[code-switching]]. It is not “mixing up” languages. A speaker who changes language in the middle of a conversation needs to know the grammar and the social rules of each language. You met this skill in Unit 1 as part of a repertoire.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="20" text-anchor="middle">One person, four places, several languages</text><rect class="d-sage" x="20" y="36" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="60" text-anchor="middle">Home with family</text><text class="s" x="170" y="80" text-anchor="middle">A home language, such as Kikuyu or Luo</text><rect class="d-gold" x="20" y="108" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="132" text-anchor="middle">Street and friends</text><text class="s" x="170" y="152" text-anchor="middle">Sheng, Kiswahili, sometimes English</text><rect class="d-rose" x="20" y="180" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="204" text-anchor="middle">School and office</text><text class="s" x="170" y="224" text-anchor="middle">English and Kiswahili</text><rect class="d-lup" x="20" y="252" width="300" height="58" rx="8" stroke-width="2"/><text x="170" y="276" text-anchor="middle">Phone and online</text><text class="s" x="170" y="296" text-anchor="middle">Any of these, mixed by the listener</text></svg>', alt:"Four stacked boxes. Home with family uses a home language. Street and friends uses Sheng, Kiswahili and sometimes English. School and office uses English and Kiswahili. Phone and online uses any of them, mixed for the listener.", cap:"An example of a repertoire in Nairobi. Real people differ, and the example does not describe any one speaker."}
    ]},
    {h:"Zimbabwe and Southern Africa", body:[
      {lead:"Zimbabwe has more official languages than most countries, and English is one of them."},
      "The Constitution of 2013 lists 16 official languages: English, Shona, Ndebele and 13 others, including sign language. It says that the state must treat all of them fairly and promote their use. In practice, English is the main language of teaching. Shona and Ndebele are the largest African languages. Reliable counts of speakers by language are hard to find, so most numbers you read for Zimbabwe are estimates.",
      "English is the first language of a small group, including many white Zimbabweans, and an additional language for most others. eWAVE lists a variety called White Zimbabwean English. Any description must say which speakers it covers, because English is used by many other Zimbabweans too."
    ]},
    {h:"Three common mistakes", body:[
      {ol:["**Kiswahili came with colonial rule.** It did not. It was a language of trade on the coast long before.","**East African English is one accent.** It is not. Kenya, Uganda and Tanzania differ, and each has many accents linked to first languages and schools.","**Moving between languages shows weak language skills.** It shows the opposite: a speaker needs to know several systems well."]},
      {key:"A law can name a language, but a person uses a whole repertoire. Look at both the law and the lives of the speakers."}
    ]}
   ],
   try:[
    M("e6u6-l2-x1","Which statement about Tanzania is the most accurate?",1,[
      ["English is the language of primary school and Kiswahili is the language of secondary school.","The reverse is true: Kiswahili is the language of primary school and English of secondary school."],
      ["Kiswahili is the national language and the language of primary school. English is the main language of secondary school.","Right. The debate about English in secondary school and in universities is strong."],
      ["Kiswahili is not used in schools.","It is used in primary schools."],
      ["English is the only official language.","Kiswahili has a stronger public role than English."]
    ]),
    {id:"e6u6-l2-x2", type:"sort", q:"Which country does each fact belong to?", buckets:["Kenya","Uganda","Tanzania","Zimbabwe"], items:[
      {t:"The Constitution of 2013 lists 16 official languages", b:3, why:"Zimbabwe’s Constitution names 16 official languages."},
      {t:"Kiswahili became a second official language in 2005", b:1, why:"English had been official since 1962."},
      {t:"Independence on 12 December 1963", b:0, why:"This is Kenya’s date."},
      {t:"Kiswahili is the main language of primary school", b:2, why:"English comes in at secondary school."},
      {t:"Independence on 18 April 1980", b:3, why:"This is Zimbabwe’s date."},
      {t:"Independence on 9 October 1962", b:1, why:"This is Uganda’s date."},
      {t:"The Constitution of 2010 names Kiswahili the national language", b:0, why:"It also names Kiswahili and English as official languages."},
      {t:"Tanganyika and Zanzibar joined in 1964", b:2, why:"The union formed Tanzania."}
    ]},
    {id:"e6u6-l2-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Uganda becomes independent (1962)", why:"This is the earliest date in the list."},
      {t:"Kenya becomes independent (1963)", why:"This came one year after Uganda."},
      {t:"Tanganyika and Zanzibar form Tanzania (1964)", why:"This came the year after Kenya’s independence."},
      {t:"Zimbabwe becomes independent (1980)", why:"This came 16 years after the Tanzanian union."},
      {t:"Uganda adds Kiswahili as an official language (2005)", why:"This was a change to an existing constitution."},
      {t:"Kenya’s Constitution names Kiswahili the national language (2010)", why:"This came five years after Uganda’s change."},
      {t:"Zimbabwe’s Constitution lists 16 official languages (2013)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u6-l2-x4", type:"match", q:"Match each word to its meaning.", pairs:[
      ["*matatu*","A shared minibus taxi in Kenya","The word is often said to come from the Swahili word for “three”."],
      ["*daladala*","A shared minibus taxi in Tanzania","It is the Tanzanian word for a similar vehicle."],
      ["*boda boda*","A bicycle or motorcycle taxi","It is used in Uganda and Kenya."],
      ["*harambee*","“Pulling together”: shared effort","It is a Kenyan slogan."],
      ["*mitumba*","Second-hand clothes","The word is used in East Africa."]
    ]},
    {id:"e6u6-l2-x5", type:"spot", q:"A student wrote these notes after Lesson 2. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Kiswahili came to East Africa only with colonial rule.", flag:true, why:"It was a language of trade on the coast long before colonial rule."}, " ", {t:"A country can have a national language that is different from its official languages.", flag:false, why:"Correct. The two terms name different jobs."}, " ", {t:"East African English is one accent.", flag:true, why:"Kenya, Uganda and Tanzania differ, and so do speakers within each country."}, " ", {t:"Schmied (2012) lists *advices* and *luggages* among East African patterns.", flag:false, why:"Correct. They are examples of mass nouns used in the plural."}, " ", {t:"Zimbabwe has only one official language, English.", flag:true, why:"The Constitution of 2013 lists 16."}, " ", {t:"A law that names a language does not say how many people speak it at home.", flag:false, why:"Correct. A law and a census answer different questions."}, "”"
    ]},
    {id:"e6u6-l2-x6", type:"number", q:"English became an official language of Uganda in 1962. Kiswahili was added in 2005. For how many years was English the only official language? Subtract the years.", answer:43, tol:0, unit:"years", why:"2005 − 1962 = 43.", wrongs:[{v:44, tol:0, why:"You counted both end years. Subtract the two years."},{v:42, tol:0, why:"You started from 1963. English was official from 1962."}], hint2:"Subtract 1962 from 2005."},
    M("e6u6-l2-x7","A classmate listens to the speaker from Nairobi and writes, “This is the typical Kenyan accent.” What is the best response?",2,[
      ["“Yes. Anyone from Kenya sounds like this.”","One speaker cannot show how everyone in a country sounds."],
      ["“No. The speaker must be wrong, because the accent is not British.”","An accent is not wrong when it differs from another one."],
      ["“The archive gives one person’s place, age and languages. I can describe what I hear and compare it with research, and one speaker is one person.”","Right. It stays within the evidence."],
      ["“We cannot say anything about a recording.”","We can describe what we hear, with care."]
    ], {listen:"e6u6-l2-a1", hint:"The right answer does not depend on what this speaker does."}),
    {id:"e6u6-l2-x8", type:"explain", q:"Amara works in Nairobi. In one day she speaks Luo with her family, Sheng and Kiswahili with friends, and English at the office. A visitor says, “She is mixing up her languages.” Explain, kindly, why the visitor is not right.", size:"3–5 sentences", prompt:"Amara is not mixing up her languages, because …", hint:"Think about repertoire, code-switching and the jobs that each language does.", points:["Says that Amara uses each language in the place where it fits","Names the skill: code-switching or a repertoire","Says that Sheng is a variety with its own words and patterns, not a mistake","Says that switching needs knowledge of several systems"], model:"Amara is not mixing up her languages. She uses a repertoire, and each language has a job: Luo with family, Sheng and Kiswahili with friends, and English at the office. Moving between them is called code-switching, and it needs good knowledge of several systems. Sheng is a variety with its own words and patterns, so it is not a mistake. The visitor sees a skill, and not a problem."}
   ],
   apply:{
    intro:"These tasks use free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Find what a law says", how:[
       "Choose one country from this lesson: Kenya, Uganda, Tanzania or Zimbabwe.",
       "Search for its constitution on an official government or national law site. Find the part about languages.",
       "Write one sentence that names the official languages and one sentence that names the national language, if there is one. Note the year of the constitution."
     ], write:"Country… official languages… national language… year…"},
     {t:"Make a comparison table", how:[
       "Make a table with four rows (Kenya, Uganda, Tanzania, Zimbabwe) and three columns: official languages, national language, and the language of early primary school.",
       "Fill in what you know from the lesson. Write “not sure” where you do not know, and check one cell with a reliable source.",
       "Write two sentences that say how a law and daily life can differ."
     ], write:"My table… one cell checked in… two sentences…"}
    ],
    proof:"A sentence about what one constitution says about languages, and a table of four countries with at least one cell checked in a reliable source."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"This section shows how place and speech are linked, and it helps you read the differences between Kenya, Uganda and Tanzania."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u6-l3", title:"Writing in English, choosing languages", minutes:55,
   hook:{q:"Two African writers disagreed about the language of African literature. Which statement fits their debate best?", options:["Achebe said African writers must write only in English, and Ngũgĩ said only in French.","Achebe argued that English could be reshaped to carry African experience, and Ngũgĩ argued for writing in African languages.","Both writers said English should be banned from schools.","The two writers agreed on every point."], answer:1, reveal:"**They took the same question seriously and answered it in different ways.** Chinua Achebe (1965) argued that English could be changed to carry African experience. Ngũgĩ wa Thiong’o (1986) argued that African writers should write in African languages. This lesson presents both positions fairly, in paraphrase, and then looks at the same question for schools."},
   goals:[
     "Explain Achebe’s position (1965) and Ngũgĩ’s position (1986) in your own words, fairly",
     "Say where the two writers agree, where they differ, and what other writers did",
     "Describe the debate about the language of school, using published evidence only",
     "Explain why a language policy needs teachers and books as well as a decision",
     "Use the idea of a repertoire to describe language choice, without a verdict"
   ],
   learn:[
    {h:"Why this debate matters", body:[
      {lead:"When a writer chooses a language, the choice says something about readers, history and identity. For African writers, the choice came with a colonial past."},
      "After independence, many African countries used English in government and in school. Many writers learned English at school and wrote in it. Others asked whether this was right. A writers’ conference at Makerere University in Uganda in 1962 is often named as an early place where the question was raised.",
      "This lesson explains two answers in the [[we-achebe-ngugi-debate|Achebe–Ngũgĩ debate]]. It does not say that one writer was right. Your task is to describe each position fairly, in your own words. The lesson paraphrases the writers and does not quote them at length, so you should read the originals if you can."
    ]},
    {h:"Chinua Achebe: a new English", body:[
      {lead:"Chinua Achebe (1930–2013) was a Nigerian novelist. He wrote *Things Fall Apart* (1958) in English, and he wrote an essay in 1965 about that choice."},
      "The essay first appeared as “English and the African Writer” in the magazine *Transition* in 1965. It is better known as “The African Writer and the English Language”, the title it has in his collection *Morning Yet on Creation Day* (1975). Here is a paraphrase of its main points.",
      {list:["Nigeria has many languages. English was a language that writers and readers from different groups could share.","Giving up one’s own language for another can feel like a betrayal. Achebe said that, for him, there was no other real choice. English was the language he had been given, and he meant to use it.","English would have to change. He asked for an English that stays in touch with its origin, and that is altered to suit its new African surroundings."]},
      "His novels show how. Characters use Igbo proverbs and speech patterns inside English sentences, and the English of the book belongs to its place. This is the kind of local development that Unit 5 called nativization."
    ]},
    {h:"Ngũgĩ wa Thiong’o: writing in Gĩkũyũ", body:[
      {lead:"Ngũgĩ wa Thiong’o (1938–2025) was a Kenyan writer. His answer was different from Achebe’s."},
      "In the 1970s he took part in a community theater at Kamiriithu, near his home. The play *Ngaahika Ndeenda* (1977) was performed in Gĩkũyũ (also spelled Gikuyu or Kikuyu). After it, he was held without trial for nearly a year. In prison he decided to write his fiction in Gĩkũyũ. His novel *Caitaani Mũtharaba-inĩ* (1980) is in that language, and its English translation, *Devil on the Cross*, appeared in 1982.",
      "His book [[we-decolonising-the-mind|*Decolonising the Mind: The Politics of Language in African Literature*]] (1986) gives his reasons. He called the book his farewell to English as a language for his writing. Here is a paraphrase of its main points.",
      {list:["A language carries the memory, values and ways of seeing of a people.","In colonial schools, European languages stood above African languages. In his account, children were punished for speaking Gĩkũyũ at school.","Writing only in a European language keeps African literature tied to that history, and it keeps many African people away from their own literature.","African writers should write in African languages. Their work can then be translated, so that readers in other languages can read it too."]},
      "Ngũgĩ did not say that English is a bad language. His argument was about history, power and readers. *Decolonising the Mind* is itself written in English, and in later years he still published essays in English. His fiction and plays are where he kept to his choice most clearly."
    ]},
    {h:"Where they agree and where they differ", body:[
      {lead:"The two writers agree on more than the debate suggests."},
      "Both said that colonial rule changed the place of African languages, and that this change had a cost. Both cared about readers. They differ on what a writer should do about it.",
      {table:[["Question","Achebe (1965)","Ngũgĩ (1986)"],["Main claim","English can carry African experience if it is changed.","African literature should be written in African languages."],["Readers","Readers across language groups who share English","People who speak the African language, including farmers and workers"],["History","Colonial history gave English, and a writer can use it.","Colonial schools put African languages lower, and writers should reverse this."],["What a writer does","Changes English so that it carries African patterns","Writes in an African language, and translates when needed"]]},
      "Many writers do both. Some write in English and in an African language. Some translate their own work. Critics of each position have asked questions. Some ask whether English can ever stop carrying colonial structures. Others ask whether books in a language with a small market reach enough readers, and whether the choice is open to every writer.",
      {fig:'<svg viewBox="0 0 340 350"><defs><marker id="e6w1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-soft" x="110" y="12" width="120" height="40" rx="8" stroke-width="2"/><text x="170" y="38" text-anchor="middle">A writer chooses</text><path class="d-ink" d="M130 52L70 100" stroke-width="2" marker-end="url(#e6w1)"/><path class="d-ink" d="M170 52L170 100" stroke-width="2" marker-end="url(#e6w1)"/><path class="d-ink" d="M210 52L270 100" stroke-width="2" marker-end="url(#e6w1)"/><rect class="d-gold" x="12" y="104" width="104" height="110" rx="8" stroke-width="2"/><text x="64" y="128" text-anchor="middle">English,</text><text x="64" y="146" text-anchor="middle">changed</text><text class="s" x="64" y="170" text-anchor="middle">Achebe’s</text><text class="s" x="64" y="186" text-anchor="middle">position</text><rect class="d-sage" x="118" y="104" width="104" height="110" rx="8" stroke-width="2"/><text x="170" y="128" text-anchor="middle">An African</text><text x="170" y="146" text-anchor="middle">language</text><text class="s" x="170" y="170" text-anchor="middle">Ngũgĩ’s</text><text class="s" x="170" y="186" text-anchor="middle">position</text><rect class="d-rose" x="224" y="104" width="104" height="110" rx="8" stroke-width="2"/><text x="276" y="128" text-anchor="middle">Both, with</text><text x="276" y="146" text-anchor="middle">translation</text><text class="s" x="276" y="170" text-anchor="middle">Many writers</text><text class="s" x="276" y="186" text-anchor="middle">do this</text><rect class="d-panel" x="12" y="234" width="316" height="100" rx="8" stroke-width="2"/><text x="170" y="258" text-anchor="middle">Each choice has a cost</text><text class="s" x="170" y="280" text-anchor="middle">Readers: who can read the book?</text><text class="s" x="170" y="298" text-anchor="middle">History: what does the language carry?</text><text class="s" x="170" y="316" text-anchor="middle">Publishing: who can print and sell it?</text></svg>', alt:"A writer chooses between three paths: English changed to carry African experience, an African language, or both with translation. A box below lists three costs: who can read the book, what the language carries from history, and who can print and sell it.", cap:"Three paths for a writer. The questions below the paths apply to each one."}
    ]},
    {h:"The same question for schools", body:[
      {lead:"The writers’ debate has a school version. The choice of the [[we-language-of-instruction|language of instruction]] decides in which language a child learns to read."},
      "Many African children start school in a language that they do not speak at home. The World Bank report *Loud and Clear* (2021) estimates that nearly 37% of students in low- and middle-income countries are taught in a language that they do not understand. The report’s main message is that policies should support teaching in languages that students and teachers understand and speak best. It also says that a small number of added languages could bring large gains in learning.",
      "People make several arguments. Some say that children learn best when the first years of school use a language they already know, and that other languages can be added with care. Others say that parents want English for their children, because English opens study and work. Others point out that a classroom can hold children from several language groups, that books and teachers in many languages are costly, and that writing systems for some languages are still being developed. Philippine policy, in Unit 5, shows the same arguments in another country, as [[we-mtb-mle|mother tongue–based multilingual education]].",
      "Policy often changes. Anyidoho (2018) describes many changes in Ghana’s policy for the first years of primary school. For example, a reform of 1974 used a Ghanaian language for the first three years, a policy of 2002 asked for English only, and policies of 2004 and 2007 brought back bilingual models. Nigeria changed direction too. In 2022, it adopted a National Language Policy that asked for local languages as the language of teaching for the first six years of primary school. The policy also called for new materials and teacher training. In November 2025, the government cancelled it and made English the language of teaching at all levels. The minister pointed to poor exam results. Many Nigerian linguists and educators criticized the decision and asked for the policy to return. In Tanzania, the change from Kiswahili in primary school to English in secondary school is a point of debate (Schmied 2012).",
      {warn:"A policy on paper is not the same as a policy in a classroom. Teachers, books and training decide what happens. No single plan fits every country, because the number of languages in a classroom, the supply of teachers and families’ wishes differ."}
    ]},
    {h:"One person, many choices", body:[
      {lead:"Language choice is a question for writers and governments, and also for every multilingual person. Everyone who uses more than one language makes choices every day."},
      {ex:"Dr Amoako is from Ghana. He teaches information science at a university in Japan, and he has lived in Japan for twenty years. He uses Ghanaian English. He also speaks Japanese, including the local dialect of Shioura, a harbor town in Japan. For each listener, he can choose the language that fits. His choices are part of a repertoire, and each language has a job in his life. The debate in this lesson asks what such choices mean for a whole community.", label:"Example: a repertoire"},
      "When you read a text about language choice, you can ask four questions. Who is the reader? What does the language carry from history? Who can print and sell the work? What does the writer lose and gain? These questions help you to describe a position before you judge it.",
      {key:"Achebe and Ngũgĩ both took language seriously, and they answered differently. A fair summary names both answers, gives each one its reasons, and does not declare a winner."}
    ]}
   ],
   try:[
    M("e6u6-l3-x1","Which statement about Achebe’s 1965 position is the most accurate?",2,[
      ["Achebe said that African writers must never use African languages.","He did not say this. He argued that English could be changed to carry African experience."],
      ["Achebe said that English is better than African languages.","He did not argue that English is better. He argued that he could use it and change it."],
      ["Achebe said that English could carry African experience if it were altered to suit its new surroundings.","Right. This is the core of the essay, in paraphrase."],
      ["Achebe wrote his novels in Igbo.","His novels, such as *Things Fall Apart*, are in English."]
    ]),
    {id:"e6u6-l3-x2", type:"sort", q:"Which position is each statement closest to?", buckets:["Achebe (1965)","Ngũgĩ (1986)"], items:[
      {t:"English can carry African experience if it is changed to suit its new surroundings.", b:0, why:"This is the main claim of Achebe’s essay."},
      {t:"African literature should be written in African languages.", b:1, why:"This is the main claim of *Decolonising the Mind*."},
      {t:"A writer can use Igbo proverbs and speech patterns inside English sentences.", b:0, why:"This is how Achebe’s novels use English."},
      {t:"In colonial schools, European languages stood above African languages, and writers should reverse this.", b:1, why:"This is part of Ngũgĩ’s account of history."},
      {t:"Readers from different language groups can share English.", b:0, why:"This is part of Achebe’s reason for writing in English."},
      {t:"Fiction in Gĩkũyũ keeps readers who speak Gĩkũyũ at the center.", b:1, why:"This is why Ngũgĩ chose Gĩkũyũ for his fiction."}
    ]},
    {id:"e6u6-l3-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Achebe publishes *Things Fall Apart* (1958)", why:"This is the earliest date in the list."},
      {t:"Achebe writes his essay on English and the African writer (1965)", why:"This came seven years after the novel."},
      {t:"Ngũgĩ is held without trial after the Kamiriithu play (1977–78)", why:"This came 12 years after the essay."},
      {t:"Ngũgĩ publishes a novel in Gĩkũyũ, *Caitaani Mũtharaba-inĩ* (1980)", why:"He decided to write fiction in Gĩkũyũ while he was in prison. The English translation, *Devil on the Cross*, came in 1982."},
      {t:"Ngũgĩ publishes *Decolonising the Mind* (1986)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u6-l3-x4", type:"match", q:"Match each name to what it describes.", pairs:[
      ["Chinua Achebe","A Nigerian novelist whose 1965 essay is about English and the African writer","He wrote *Things Fall Apart*."],
      ["Ngũgĩ wa Thiong’o","A Kenyan writer who wrote *Decolonising the Mind* (1986)","He chose Gĩkũyũ for his fiction."],
      ["*Loud and Clear* (2021)","A World Bank report about the language of teaching","Its main message is to use languages that students and teachers understand and speak best."],
      ["Anyidoho (2018)","A study that lists changes in Ghana’s policy for early primary school","It shows that the policy changed several times."],
      ["2022 and 2025","Nigeria adopts local languages for the first six years of primary school, then cancels the policy","The policy of 2022 was cancelled in November 2025, and English became the language of teaching at all levels."]
    ]},
    {id:"e6u6-l3-x5", type:"spot", q:"A student wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Achebe said that African writers must never use African languages.", flag:true, why:"He did not say this. He argued that English could be changed to carry African experience."}, " ", {t:"Ngũgĩ called *Decolonising the Mind* his farewell to English as a language for his writing.", flag:false, why:"Correct. This is a paraphrase of his own description."}, " ", {t:"Ngũgĩ thought that English is a bad language.", flag:true, why:"His argument was about history, power and readers, and not about English as a language."}, " ", {t:"Both writers said that colonial rule changed the place of African languages.", flag:false, why:"Correct. This is a point on which they agree."}, " ", {t:"The evidence shows that one language policy is best for every country.", flag:true, why:"No single plan fits every country. The number of languages, the supply of teachers and the wishes of families differ."}, " ", {t:"Ghana changed its early primary school language policy several times.", flag:false, why:"Correct. Anyidoho (2018) describes changes, for example in 1974, 2002, 2004 and 2007."}, "”"
    ]},
    {id:"e6u6-l3-x6", type:"number", q:"Achebe’s essay is dated 1965. Ngũgĩ’s *Decolonising the Mind* was published in 1986. How many years apart are they?", answer:21, tol:0, unit:"years", why:"1986 − 1965 = 21.", wrongs:[{v:22, tol:0, why:"You counted both end years. Subtract the two years."},{v:11, tol:0, why:"You may have subtracted 76 from 87. Use the exact years, 1986 and 1965."}], hint2:"Subtract 1965 from 1986."},
    M("e6u6-l3-x7","A classmate says, “Ngũgĩ proved that African writers must not use English.” What is the best reply?",3,[
      ["“Yes. His book ended the debate.”","The debate has continued, and many writers still use English."],
      ["“No. Achebe proved the opposite.”","Achebe also gave an argument, and he did not claim to end the debate."],
      ["“Neither writer wrote anything on the subject.”","Both wrote a great deal about it."],
      ["“He argued for African languages, and Achebe argued for a changed English. Each had reasons, and the debate continues.”","Right. It names both positions and keeps to what each writer argued."]
    ], {hint:"Choose the reply that describes both positions and does not declare a winner."}),
    {id:"e6u6-l3-x8", type:"explain", q:"A friend asks you to explain the Achebe–Ngũgĩ debate in a few sentences, without saying which writer was right. Write your explanation.", size:"4–6 sentences", prompt:"The debate is about …", hint:"Name both writers and their years. Give each position its reasons. Say what they agree on.", points:["Names Achebe (1965) and Ngũgĩ (1986) and the question of the language of African literature","Gives Achebe’s position: English can be changed to carry African experience","Gives Ngũgĩ’s position: African literature should be written in African languages","Says that both agree that colonial rule changed the place of African languages, and does not declare a winner"], model:"The debate is about the language of African literature. Chinua Achebe (1965) argued that English could be changed to carry African experience, and that it could reach readers across many language groups. Ngũgĩ wa Thiong’o (1986) argued that African writers should write in African languages, because a language carries memory and history, and because colonial schools put African languages lower. Both agreed that colonial rule changed the place of African languages. They differ on what a writer should do about it, and many writers use both English and African languages."}
   ],
   apply:{
    intro:"These tasks use a library or free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read a page of each writer", how:[
       "Find a short passage of Achebe’s essay (in *Morning Yet on Creation Day*) and of Ngũgĩ’s *Decolonising the Mind*. A public library, a school library or a bookstore preview can help.",
       "If you cannot find the books, read an encyclopedia entry for each writer instead.",
       "Write three sentences for each writer in your own words. Do not copy long phrases, and do not use the words *right* or *wrong*."
     ], write:"Achebe… Ngũgĩ… Did I avoid right and wrong?"},
     {t:"Track your own language choices", how:[
       "For one day, write down each time you choose a language or a style of speaking. Include texting, family, work or school, and online.",
       "Make a table with three columns: the situation, the language or style, and the reason for the choice.",
       "Mark each choice as free or required. Write two sentences about what you notice."
     ], write:"Situation… language… reason… free or required… two sentences…"}
    ],
    proof:"Three paraphrased sentences for each writer with no judgment words, and a one-day table of your own language choices."
   },
   read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”", note:"This section links language and identity, which is the idea behind the debate in this lesson."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u6-l4", title:"Caribbean English", minutes:55,
   hook:{q:"A student says, “Jamaicans just speak broken English.” Which reply is the most accurate?", options:["“Yes. Jamaican Creole is English with mistakes.”","“Jamaican Creole has its own grammar, and many Jamaicans also use Standard Jamaican English.”","“Nobody in Jamaica speaks English.”","“Jamaican Creole is the same as Nigerian English.”"], answer:1, reveal:"**Jamaican Creole is a system with rules of its own.** For example, *Mi a ron* means “I am running”, and the small word *a* has a regular job. Many Jamaicans also use Standard Jamaican English, in school and in formal writing. The two are related, and many speakers move between them. The creole is not a set of mistakes."},
   goals:[
     "Give the main facts of Caribbean history that shaped English there: colonization, plantations, slavery and indentured labor",
     "Compare Standard Jamaican English and Jamaican Creole using examples of regular grammar",
     "Explain the creole continuum (DeCamp 1971) and the words *basilect*, *mesolect* and *acrolect*",
     "Describe Trinidad, Barbados and Guyana in a few hedged facts",
     "Describe the Windrush voyage (1948) and Multicultural London English in brief"
   ],
   learn:[
    {h:"Many islands, one history of contact", body:[
      {lead:"The English-speaking Caribbean includes Jamaica, Trinidad and Tobago, Barbados, the Bahamas and other islands. Guyana is on the mainland of South America, and it shares much of the same history."},
      "English is the official language in each of these places. Most people also use an English-based creole. A creole is a language that formed when speakers of different languages had to communicate, and that then became the first language of a community. Unit 7 studies creoles in full. This lesson introduces the ones that you need.",
      "“Caribbean English” is a short name for a wide range of speech. It runs from Standard English with a local accent to creoles with their own grammar. Speakers choose a point on this range by place, listener and topic."
    ]},
    {h:"History: colonization, plantations and slavery", body:[
      {lead:"The story of English in the Caribbean starts with colonization. It includes slavery, and the language cannot be understood without it."},
      "Indigenous peoples, such as the Taíno and the Kalinago, lived in the Caribbean before Europeans came. War, disease and forced labor reduced their numbers greatly. Spain reached the islands in 1492. English settlement began in the 1600s. England settled Barbados in 1627, and it took Jamaica from Spain in 1655. Britain took Trinidad from Spain in 1797, and it took control of the Dutch colonies in Guiana by 1814.",
      "In the 1600s and 1700s, planters grew sugar on large plantations. The work was done by enslaved Africans. Estimates from the Trans-Atlantic Slave Trade Database say that about 12.5 million Africans were forced onto slave ships, and that about 10.7 million survived the voyage to the Americas between 1526 and 1866. Many were taken to the Caribbean. They came from many places and spoke many languages.",
      "People who were enslaved needed a way to talk with each other and with English-speaking planters. They made new ways of speaking, and these became English-based creoles. Scholars agree that both English and West African languages shaped them. They still debate how much each one contributed. The languages are part of the history of slavery, and they are also a product of the skill of the people who made them.",
      "The Slavery Abolition Act of 1833 took effect on 1 August 1834. Formerly enslaved people then had to work as “apprentices”, without pay, for their former owners. The apprenticeship system ended in 1838 in Jamaica and Barbados. Britain paid £20 million in compensation to slave owners, and nothing to the people who had been enslaved.",
      "After abolition, planters looked for workers who would stay on the plantations. They recruited indentured workers, who signed a contract to work for a fixed time. [[we-indentured-labor|Indentured labor]] was usually paid very little, and many people faced hard conditions. Most workers came from India. The first workers from India reached British Guiana in 1838, and Trinidad and Jamaica received workers from the 1840s. Smaller numbers came from China and from Madeira, an island of Portugal. Recruitment in India ended in 1917. Words from Hindi and other Indian languages entered Caribbean English, especially in Guyana and Trinidad.",
      {table:[["Place","British rule began","Independence"],["Jamaica","Taken from Spain, 1655","6 August 1962"],["Trinidad and Tobago","Trinidad taken from Spain, 1797","31 August 1962"],["Guyana","British control of the Dutch colonies by 1814","26 May 1966"],["Barbados","English settlement from 1627","30 November 1966"]]}
    ]},
    {h:"Standard Jamaican English and Jamaican Creole side by side", body:[
      {lead:"In Jamaica, two related systems are used every day."},
      "[[we-standard-jamaican-english|Standard Jamaican English]] is the English used in school, law and formal writing in Jamaica, and it has a Jamaican accent. [[we-jamaican-creole|Jamaican Creole]], also called Patwa or Patois, is the first language of many Jamaicans. It has its own grammar. The examples below are for reading and for understanding the grammar. You will not be asked to speak or write the creole.",
      {table:[["Standard English","Jamaican Creole","What it shows"],["I am running.","*Mi a ron.*","*a* before a verb marks an action in progress"],["That is my book.","*Dat a fi mi buk.*","*a* before a noun phrase links two things, as in an identity"],["I am here.","*Mi de ya.*","*de* (also spelled *deh*) says where something is"],["He did not come.","*Im neva kom.*","*neva* marks a negative past"]]},
      "Three more points help you to read examples. *Mi* means “I” or “me”, *unu* means “you” for more than one person, and *dem* means “they” or “them”. The small words follow patterns. In these examples, *a* has two regular jobs, and *de* has one. (In other sentences, *de* can also mark an action in progress.) This is grammar, and it is not careless speech.",
      {tip:"Jamaican Creole has no single official spelling. This lesson uses a spelling that linguists use, based on the work of Frederic Cassidy and the Jamaican Language Unit at the University of the West Indies, Mona. In this spelling, *ron* is “run” and *kom* is “come”. You may see the same sentence spelled in other ways, such as *Mi a run*."},
      "English is the official language of Jamaica. The Jamaican Language Unit works on the writing and use of Jamaican Creole, and some scholars and activists argue that it should have a larger place in school and public life. Many Jamaicans use both systems, and they choose by setting: school, home, music or friends."
    ]},
    {h:"The creole continuum", body:[
      {lead:"Between the two ends there is no wall. Speakers use many forms in between, and linguists call this a continuum."},
      "DeCamp (1971) described Jamaican speech as a [[we-creole-continuum|post-creole continuum]]. It is a range of speech from forms close to English to forms far from English, with no sharp border. Linguists use three labels, [[we-basilect-mesolect-acrolect|acrolect, mesolect and basilect]], for points on the range. The *acrolect* is the end closest to standard English. The *basilect* is the end furthest from it. The *mesolect* is the wide middle.",
      "A speaker does not stay at one point. Most speakers move along the range, depending on who they talk to and where. The labels name points on a line, and they do not name types of people.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e6w2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">One range of speech</text><path class="d-ink" d="M30 60L310 60" stroke-width="2" marker-end="url(#e6w2)"/><path class="d-ink" d="M310 60L30 60" stroke-width="2" marker-end="url(#e6w2)"/><rect class="d-sage" x="14" y="84" width="96" height="70" rx="8" stroke-width="2"/><text x="62" y="108" text-anchor="middle">Acrolect</text><text class="s" x="62" y="128" text-anchor="middle">Closest to</text><text class="s" x="62" y="144" text-anchor="middle">standard English</text><rect class="d-gold" x="122" y="84" width="96" height="70" rx="8" stroke-width="2"/><text x="170" y="108" text-anchor="middle">Mesolect</text><text class="s" x="170" y="128" text-anchor="middle">The wide</text><text class="s" x="170" y="144" text-anchor="middle">middle</text><rect class="d-rose" x="230" y="84" width="96" height="70" rx="8" stroke-width="2"/><text x="278" y="108" text-anchor="middle">Basilect</text><text class="s" x="278" y="128" text-anchor="middle">Furthest from</text><text class="s" x="278" y="144" text-anchor="middle">standard English</text><rect class="d-panel" x="14" y="176" width="312" height="104" rx="8" stroke-width="2"/><text x="170" y="200" text-anchor="middle">Example of the two ends</text><text class="s" x="170" y="224" text-anchor="middle">Nearer the acrolect: I am running.</text><text class="s" x="170" y="244" text-anchor="middle">Nearer the basilect: Mi a ron.</text><text class="s" x="170" y="264" text-anchor="middle">Many forms lie in between.</text></svg>', alt:"A horizontal range from acrolect, closest to standard English, through mesolect, the wide middle, to basilect, furthest from standard English. A box gives an example of the two ends: I am running is nearer the acrolect, and Mi a ron is nearer the basilect.", cap:"The creole continuum. One speaker moves along the range."},
      "The continuum is a model, and models have limits. Some scholars see Jamaican Creole and English as two systems that touch. Others stress the continuous range. You met a similar idea in Unit 5, with [[we-speech-continuum|Platt’s speech continuum]] in Singapore."
    ]},
    {h:"Trinidad, Barbados and Guyana", body:[
      {lead:"Each country has its own history and its own English, and none of them is only a copy of Jamaica."},
      {list:["**Trinidad and Tobago.** English is the official language. Trinidadian Creole is also used, and Tobago has a creole of its own. *To lime* means to spend relaxed time with friends. Words from Indian languages came with indentured workers.","**Barbados.** English is the official language, and Bajan Creole is the everyday language of most people. Descriptions of Barbadian English say that it is rhotic, which is unusual in the region.","**Guyana.** English is the official language, and Guyanese Creole is widely used. People of Indian descent are a large part of the population, and Guyanese English has words from Hindi."]},
      "Descriptions of Caribbean accents are often based on Wells (1982, volume 3 of *Accents of English*). They give tendencies, and each tendency varies by speaker.",
      {table:[["Feature","What descriptions often say","Note"],["The *r* after a vowel","Often not pronounced (non-rhotic) in much of the region","Barbados is described as rhotic. Jamaica and Guyana are described as variable."],["FACE and GOAT vowels","Often a single vowel, with little glide, as in *snake* and *go*","Unlike many accents of Britain and the US"],["*th* sounds","Often *t* or *d*, as in *thick* and *this*","Also heard in many other varieties"]]},
      {ex:"Listen to a speaker from Kingston, Jamaica (23, male). English is his first language, and he also speaks Patois. He has always lived in Jamaica. The recording is a reading in English. Notice the vowels in *snake* and *go*. There is no single right answer.", label:"Listen: Kingston, 1", listen:"e6u6-l4-a1"},
      {ex:"Listen to a second speaker from Kingston (34, female). English is her first language. She has always lived in Jamaica. Notice the *r* in *her* and *brother*.", label:"Listen: Kingston, 2", listen:"e6u6-l4-a2"},
      {ex:"Listen to a speaker from St. Augustine, Trinidad (31, female). English is her first language. She has lived in Trinidad and the US. Notice the *th* in *three* and *thick*.", label:"Listen: St. Augustine", listen:"e6u6-l4-a3"},
      {ex:"Listen to a speaker from Bridgetown, Barbados (20, male). English is his first language, and he also speaks Spanish and French. He has always lived in Barbados. Notice the *r* in *store* and *her*.", label:"Listen: Bridgetown", listen:"e6u6-l4-a4"},
      {ex:"Listen to a speaker from Corriverton, Guyana (55, female). English is her first language, and she also speaks Hindi. She has lived in Guyana and the US. Notice the *r* in *her* and *brother*.", label:"Listen: Corriverton", listen:"e6u6-l4-a5"}
    ]},
    {h:"Caribbean English in Britain", body:[
      {lead:"People carry their languages with them. In 1948, a ship brought a new chapter of this story to England."},
      "In June 1948, the ship *Empire Windrush* arrived at Tilbury, near London, with hundreds of passengers from Jamaica and other Caribbean places. The British Nationality Act of 1948 gave people in the colonies the status of citizens of the United Kingdom and Colonies, and until 1962 Britain had no immigration control over them. Many people came in the following years. They are called the [[we-windrush|Windrush generation]]. In 2018, it became clear that some of them, who had lived in Britain legally for decades, had been wrongly treated as illegal immigrants. Some were detained, and some lost their jobs or rights.",
      "Caribbean English and creoles became part of British life, and they influenced British speech. Cheshire, Kerswill and colleagues (2011) studied a new way of speaking among young people in inner London from many backgrounds. They called it [[we-mle|Multicultural London English]], or MLE. It draws on Caribbean English and creoles, on varieties from South Asia and Africa, and on traditional London English. Researchers report that it is non-rhotic, as London speech is (Unit 3), and that it has its own words and tags, such as *innit*.",
      {warn:"Some people use a mocking nickname for MLE that suggests it is “fake Jamaican”. Researchers do not use it. The sources of MLE are wide, and its speakers come from many backgrounds. Use the name MLE."}
    ]},
    {h:"Three common mistakes", body:[
      {ol:["**Jamaican Creole is broken English.** It is not. It has regular grammar, such as the jobs of *a*, *de* and *neva*.","**Caribbean English is one thing.** It is not. Jamaica, Trinidad, Barbados and Guyana differ, and each has a range from creole to standard.","**A speaker has one place on the continuum.** Most speakers move along it."]},
      {key:"The English-speaking Caribbean has a painful history and a creative one. Describe the systems with care, and do not mock or rank them."}
    ]}
   ],
   try:[
    M("e6u6-l4-x1","Which statement about Jamaican Creole is the most accurate?",1,[
      ["It is English with random mistakes.","It has regular rules, such as the jobs of *a*, *de* and *neva*."],
      ["It has its own grammar, and many Jamaicans use it beside Standard Jamaican English.","Right. The two are related, and many speakers move between them."],
      ["It is the official language of Jamaica.","English is the official language."],
      ["It is spoken by nobody under 60.","This is not what research reports. Many Jamaicans of all ages use it."]
    ]),
    {id:"e6u6-l4-x2", type:"sort", q:"What does the small word in each example do?", buckets:["Marks an action in progress","Links two things (identity)","Says where something is","Marks a negative past"], items:[
      {t:"*a* in *Mi a ron*", b:0, why:"*A* before a verb marks an action in progress."},
      {t:"*a* in *Dat a fi mi buk*", b:1, why:"*A* before a noun phrase links two things."},
      {t:"*de* in *Mi de ya*", b:2, why:"*De* says where something is."},
      {t:"*neva* in *Im neva kom*", b:3, why:"*Neva* marks a negative past."},
      {t:"*a* in *Dem a kom*", b:0, why:"*A* before a verb marks an action in progress."},
      {t:"*a* in *Mi a di tiicha*", b:1, why:"*A* links *mi* and *di tiicha*, as in “I am the teacher”."}
    ]},
    {id:"e6u6-l4-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"England settles Barbados (1627)", why:"This is the earliest date in the list."},
      {t:"England takes Jamaica from Spain (1655)", why:"This came 28 years after the settlement of Barbados."},
      {t:"Britain takes Trinidad from Spain (1797)", why:"This came 142 years after the capture of Jamaica."},
      {t:"The Slavery Abolition Act takes effect (1834)", why:"This came 37 years after 1797."},
      {t:"*Empire Windrush* arrives at Tilbury (1948)", why:"This came 114 years after the Abolition Act took effect."},
      {t:"Jamaica becomes independent (1962)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u6-l4-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Acrolect","The end of the range closest to standard English","*Acro-* suggests the top of the range."],
      ["Basilect","The end of the range furthest from standard English","*Basi-* suggests the base."],
      ["Mesolect","The wide middle of the range","Most speech lies between the two ends."],
      ["Post-creole continuum (DeCamp 1971)","A range of speech with no sharp border between creole and standard","Speakers move along it."],
      ["Indentured labor","Work under a contract for a fixed time, often with hard conditions","Most workers who came to the Caribbean after abolition came from India."]
    ]},
    {id:"e6u6-l4-x5", type:"spot", q:"A student wrote these notes after Lesson 4. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Jamaican Creole is English with mistakes.", flag:true, why:"It is a system with its own rules."}, " ", {t:"In *Mi a ron*, the word *a* marks an action in progress.", flag:false, why:"Correct. This is one of the jobs of *a*."}, " ", {t:"A speaker stays at one point of the continuum for life.", flag:true, why:"Most speakers move along the range, depending on listener and place."}, " ", {t:"All Caribbean accents are non-rhotic.", flag:true, why:"Descriptions say that Barbados is rhotic, and that Jamaica and Guyana are variable."}, " ", {t:"The first Indian indentured workers reached British Guiana in 1838.", flag:false, why:"Correct. Workers reached Trinidad and Jamaica from the 1840s."}, " ", {t:"MLE grew among young people in inner London from many backgrounds.", flag:false, why:"Correct. Cheshire, Kerswill and colleagues (2011) describe this."}, "”"
    ]},
    {id:"e6u6-l4-x6", type:"number", q:"The database estimates that about 12.5 million Africans were forced onto ships, and that about 10.7 million survived the voyage. According to these estimates, how many million people did not survive?", answer:1.8, tol:0.05, unit:"million", why:"12.5 − 10.7 = 1.8. These are estimates, and each number stands for people.", wrongs:[{v:23.2, tol:0.05, why:"You added the two numbers. Subtract the survivors from the total."}], hint2:"Subtract 10.7 from 12.5."},
    M("e6u6-l4-x7","A listener hears the first Kingston recording and says, “I can hear Jamaican Creole.” The archive says that the speaker also uses Patois. What is the best response?",2,[
      ["“Yes. Anyone from Kingston is speaking Creole in every recording.”","A person who uses two systems does not use both in every setting."],
      ["“No. The speaker cannot use Patois, because the recording is clear.”","This confuses clarity with the system. A clear reading can come from a creole speaker."],
      ["“The speaker reads an English paragraph. A reading cannot show the grammar of the creole, so I will describe the accent and not guess.”","Right. It stays within the evidence."],
      ["“Creole always sounds the same as English.”","The two systems differ, but a reading in English shows only the accent."]
    ], {listen:"e6u6-l4-a1", hint:"Remember that the paragraph is read in English."}),
    {id:"e6u6-l4-x8", type:"explain", q:"A friend says, “Jamaicans just speak broken English.” Give a short, kind answer that uses what you know about Jamaican Creole.", size:"3–5 sentences", prompt:"You could say that …", hint:"Think about the small words *a*, *de* and *neva*, about Standard Jamaican English, and about the history.", points:["Says that Jamaican Creole has its own regular grammar, with an example","Says that many Jamaicans also use Standard Jamaican English","Gives a short historical reason: creoles formed in a history of contact and forced migration","Does not call the creole a mistake or a joke"], model:"You could say that Jamaican Creole has its own grammar. For example, *a* before a verb marks an action in progress, so *Mi a ron* means “I am running”. Many Jamaicans also use Standard Jamaican English, and they move between the two by setting. The creole formed in a history of contact and forced migration, and it is a system and not a set of mistakes."}
   ],
   apply:{
    intro:"These tasks use free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Read about the Jamaican Language Unit", how:[
       "Search for “Jamaican Language Unit UWI Mona” and open the unit’s own page.",
       "Find what the unit says about the writing of Jamaican Creole.",
       "Write three plain sentences about what you learned. Do not use the words *broken* or *slang*."
     ], write:"Sentence 1… Sentence 2… Sentence 3… Did I avoid judgment words?"},
     {t:"Make a timeline", how:[
       "Write the six dates of Try exercise 3 in order, and add one fact for each.",
       "Mark each event with S (slavery), I (indenture), L (language) or P (people and places).",
       "Check one date in an encyclopedia or another reliable source. Write the source and the date."
     ], write:"1627… 1655… 1797… 1834… 1948… 1962… One date checked in…"}
    ],
    proof:"Three plain sentences about the Jamaican Language Unit with no judgment words, and a six-date timeline with one date checked in a reliable source."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”", note:"Background reading. The section shows how speech and ethnicity are linked, and why linguists describe each variety by its own rules."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u6-l5", title:"Listening lab: Africa and the Caribbean", minutes:55,
   hook:{q:"You hear a speaker from Kingston and a speaker from Accra read the same paragraph. Which statement is the most careful?", options:["“The Kingston speaker and the Accra speaker show how all Jamaicans and all Ghanaians speak.”","“I can describe what I hear in each speaker, compare it with what researchers report, and say that one speaker is one person.”","“One of the two speakers has the better accent.”","“The two speakers are the same, because they read the same words.”"], answer:1, reveal:"**A careful claim has three parts:** what this speaker does, what researchers report as typical for the place, and a reminder that one speaker is one person. Reading the same words lets you compare sounds. It does not make speakers the same, and it does not rank them."},
   goals:[
     "Say what the paragraph can show (pronunciation) and what it cannot show (grammar, words, creoles)",
     "Use a table of tendencies to decide what to listen for, with hedges",
     "Describe the *r* after a vowel and rhythm as tendencies, not rules",
     "Compare speakers from West Africa, East and Southern Africa and the Caribbean without ranking them",
     "Write a careful claim with three parts"
   ],
   learn:[
    {h:"What a recording can and cannot show", body:[
      {lead:"In this lab you listen to speakers from West Africa, East and Southern Africa, and the Caribbean. They are people, and not countries."},
      "All the speakers in this unit read the same paragraph. The recordings come from the [[we-speech-accent-archive|Speech Accent Archive]] (Weinberger, George Mason University), shared under a Creative Commons license. The credit for each clip is shown beside its Listen button. Because the words are the same, the differences are in the sounds, and not in the message.",
      "A reading shows pronunciation only. It cannot show grammar, because the grammar is fixed by the text. It cannot show words, code-switching or a creole. Some speakers in this unit also speak Patois, Twi, Igbo or Hausa, but a reading in English cannot show that. The archive gives each speaker’s place, age and first languages. A first language is the language that a person learned first. Many of these speakers learned English at school and use it every day, so it is their language too. The archive does not give the variety that the speaker uses. Many speakers have also lived in the US, and their speech may show this. So no clip can show “the” accent of a country.",
      {tip:"The paragraph, for reference: “Please call Stella. Ask her to bring these things with her from the store: six spoons of fresh snow peas, five thick slabs of blue cheese, and maybe a snack for her brother Bob. We also need a small plastic snake and a big toy frog for the kids. She can scoop these things into three red bags, and we will go meet her Wednesday at the train station.”"}
    ]},
    {h:"What to listen for", body:[
      {lead:"Choose one or two features, and listen for them in the same words each time."},
      {table:[["Feature","Listen to these words","What descriptions often say"],["The *r* after a vowel","store, her, for, brother","Non-rhotic in most descriptions of Ghanaian, Nigerian and Kenyan English. Barbados is described as rhotic. Jamaica and Guyana are described as variable."],["Rhythm","The list: six spoons of fresh snow peas…","A tendency toward syllable timing in descriptions of Nigerian and East African English. For other places, listen and describe."],["The vowel in *six*, *thick*, *big*","six, thick, big","Some descriptions of West and East African English report fewer vowel contrasts, so *beat* and *bit* may share a vowel."],["*snake* and *go*","snake, snow, go","Often a single vowel in descriptions of Caribbean English."],["*th* in *thick* and *three*","thick, three, these","Often *t* or *d* in descriptions of Caribbean English. Also heard in many other varieties."]]},
      "Every cell in this table uses the words *often* and *descriptions*. A description is a summary of many speakers, and it cannot say what one person does. Some of the speakers in this lab will follow a tendency, and some will not. Both results are good observations.",
      {fig:'<svg viewBox="0 0 340 360"><text x="170" y="20" text-anchor="middle">The r after a vowel: descriptions</text><rect class="d-sage" x="14" y="34" width="150" height="150" rx="8" stroke-width="2"/><text x="89" y="56" text-anchor="middle">Described as rhotic</text><text class="s" x="89" y="82" text-anchor="middle">United States</text><text class="s" x="89" y="100" text-anchor="middle">Canada</text><text class="s" x="89" y="118" text-anchor="middle">Scotland, Ireland</text><text class="s" x="89" y="136" text-anchor="middle">Barbados</text><rect class="d-gold" x="176" y="34" width="150" height="150" rx="8" stroke-width="2"/><text x="251" y="56" text-anchor="middle">Described as non-rhotic</text><text class="s" x="251" y="82" text-anchor="middle">Ghana, Nigeria, Kenya</text><text class="s" x="251" y="100" text-anchor="middle">New Zealand</text><text class="s" x="251" y="118" text-anchor="middle">Most of England</text><text class="s" x="251" y="136" text-anchor="middle">Australia</text><rect class="d-rose" x="14" y="200" width="312" height="54" rx="8" stroke-width="2"/><text x="170" y="222" text-anchor="middle">Described as variable: Jamaica, Guyana</text><text class="s" x="170" y="242" text-anchor="middle">Some speakers pronounce the r, some do not.</text><rect class="d-panel" x="14" y="270" width="312" height="74" rx="8" stroke-width="2"/><text x="170" y="294" text-anchor="middle">Not covered here</text><text class="s" x="170" y="314" text-anchor="middle">Uganda, Tanzania and Zimbabwe: listen</text><text class="s" x="170" y="332" text-anchor="middle">and describe, and do not predict.</text></svg>', alt:"Two boxes and two notes. One box lists places described as rhotic: the United States, Canada, Scotland, Ireland and Barbados. The other lists places described as non-rhotic: Ghana, Nigeria, Kenya, New Zealand, most of England and Australia. A third box says that Jamaica and Guyana are described as variable. A note says that Uganda, Tanzania and Zimbabwe are not covered, so the learner should listen and describe.", cap:"Descriptions of the *r* after a vowel in Units 3, 4 and 6. These are tendencies of a place, not facts about one speaker."}
    ]},
    {h:"A plan for listening", body:[
      {lead:"A good listener does not try to catch everything. A good listener uses a plan."},
      {ol:["**Listen for the message.** Here the message is the same, so use the first pass to get used to the voice.","**Listen for one feature.** Choose from the table: the *r*, the rhythm, one vowel or the *th*.","**Write one careful claim,** with three parts: what this speaker does, what is typical for the place, and a reminder that one speaker is one person."]},
      {ex:"Mariya Seto is a student of English interpreting in Japan. Suppose she prepares to interpret a talk by a speaker from Nairobi. She listens to a recording three times. The first time, she listens for the message. The second time, she listens for words that may be new to her, such as *matatu* or *harambee*. The third time, she listens for rhythm and for the vowels. When a word is still unclear, she asks the speaker before the talk. A careful interpreter prepares, checks and asks, and does not blame the accent.", label:"Example: preparing to interpret"}
    ]},
    {h:"The lab: nine speakers", body:[
      {lead:"There is no single right answer for any speaker. Listen, notice, write one careful claim for each, and compare."},
      {ex:"Speaker 1 is from Lagos, Nigeria (35, male). Igbo is his first language, and he has lived in Nigeria and the US. Notice the *r* in *store*, *her* and *brother*.", label:"Speaker 1: Lagos", listen:"e6u6-l5-a1"},
      {ex:"Speaker 2 is from Accra, Ghana (21, male). He has lived in Ghana and the US. Notice the *r*, and notice the vowel in *six*, *thick* and *big*.", label:"Speaker 2: Accra", listen:"e6u6-l5-a2"},
      {ex:"Speaker 3 is from Nairobi, Kenya (45, female). She has lived in Kenya and the US. Notice the *r*, and the rhythm of the list.", label:"Speaker 3: Nairobi", listen:"e6u6-l5-a3"},
      {ex:"Speaker 4 is from Kampala, Uganda (34, male). He has lived in Uganda and the US. Notice the rhythm, and the vowel in *peas* and *cheese*.", label:"Speaker 4: Kampala", listen:"e6u6-l5-a4"},
      {ex:"Speaker 5 is from Harare, Zimbabwe (20, female). The archive says that she has lived in the US for nine years. Notice the *r*, and the vowel in *snake*.", label:"Speaker 5: Harare", listen:"e6u6-l5-a5"},
      {ex:"Speaker 6 is from Kingston, Jamaica (34, female). She has always lived in Jamaica. Notice the *r*, and the vowels in *snake* and *go*.", label:"Speaker 6: Kingston", listen:"e6u6-l5-a6"},
      {ex:"Speaker 7 is from St. Augustine, Trinidad (31, female). She has lived in Trinidad and the US. Notice the *th* in *thick* and *three*.", label:"Speaker 7: St. Augustine", listen:"e6u6-l5-a7"},
      {ex:"Speaker 8 is from Bridgetown, Barbados (20, male). He has always lived in Barbados. Notice the *r* in *store* and *her*.", label:"Speaker 8: Bridgetown", listen:"e6u6-l5-a8"},
      {ex:"Speaker 9 is from Corriverton, Guyana (55, female). She has lived in Guyana and the US. Notice the *r* in *her* and *brother*.", label:"Speaker 9: Corriverton", listen:"e6u6-l5-a9"},
      "Compare your notes with the clips from Units 3, 4 and 5. For example, compare the Kingston speaker with the London speaker in Unit 3, and the Nairobi speaker with one of the Cape Town speakers in Unit 4. You will probably find that some features are easy to hear and others are not. This is normal. Your task is to listen and describe, and not to prove a theory.",
      {key:"A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Describe, and do not rank."}
    ]},
    {h:"Understanding is shared work", body:[
      {lead:"When speakers of different Englishes meet, both sides can help."},
      "Unit 5 introduced [[we-intelligibility|intelligibility]], [[we-comprehensibility|comprehensibility]] and [[we-interpretability|interpretability]]. A listener understands more when the topic is known, when the listener has heard the variety before, and when the speaker uses clear examples. A speaker can help with a short pause, a clear example or a repeated key word. This is [[we-accommodation|accommodation]], and it works in both directions.",
      "If you do not understand something, you can say, “Could you say that again? I want to be sure that I understood.” This does not blame the speaker. Unit 7 will study pidgins and creoles in full, including Nigerian Pidgin and Krio. Unit 8 will look at English as a shared language, where these skills matter every day."
    ]},
    {h:"Three common mistakes in listening labs", body:[
      {ol:["**One clip shows how a country speaks.** It does not. A clip shows one person on one day, reading a text. The archive tells you the person’s place, age and languages, and nothing more.","**A description must be true for every speaker.** It need not be. A description gives a tendency of a group. A speaker who does not follow it has not made a mistake, and the description is not wrong.","**A hard clip means a hard accent.** Difficulty depends on the listener too. It falls when you know the topic, hear the voice again and know what to listen for."]},
      "If you avoid these three mistakes, your notes will describe sounds and not people. That is the aim of the lab, and it is the habit that Unit 9 builds on when it looks at attitudes to accents."
    ]}
   ],
   try:[
    M("e6u6-l5-x1","Which of these is the most careful claim about a recording from Kingston?",2,[
      ["“Jamaicans all drop their *r*.”","This overgeneralizes. Descriptions say that the *r* after a vowel varies in Jamaican English, and one speaker cannot show a rule."],
      ["“The Kingston speaker has the best accent in the unit.”","This ranks accents, and *best* has no meaning for an accent."],
      ["“I will note whether this speaker pronounces the *r* in *store*. Descriptions say that this varies in Jamaican English, and the clip shows one speaker only.”","Right. It reports what is heard, compares it with a description and adds a limit. It is true whatever the speaker does."],
      ["“The Kingston speaker uses Jamaican Creole in the recording.”","The recording is a reading in English, so it cannot show the creole."]
    ]),
    {id:"e6u6-l5-x2", type:"sort", q:"Sort each place by what descriptions say about the *r* after a vowel.", buckets:["Described as rhotic","Described as non-rhotic"], items:[
      {t:"Barbados", b:0, why:"Descriptions of Barbadian English say that it is rhotic."},
      {t:"Ghana", b:1, why:"Descriptions of Ghanaian English say that it is non-rhotic."},
      {t:"New Zealand", b:1, why:"New Zealand English is typically non-rhotic (Unit 4)."},
      {t:"Scotland", b:0, why:"Scottish English is described as rhotic (Unit 3)."},
      {t:"Nigeria", b:1, why:"Summaries of Nigerian English describe it as non-rhotic."},
      {t:"Canada", b:0, why:"English in Canada is typically rhotic (Unit 4)."},
      {t:"Kenya", b:1, why:"A summary of Kenyan English describes it as non-rhotic."},
      {t:"Australia", b:1, why:"Australian English is typically non-rhotic (Unit 4)."}
    ]},
    {id:"e6u6-l5-x3", type:"order", q:"Put the steps of a listening plan in the best order.", items:[
      {t:"Listen once for the message and to get used to the voice", why:"Start with the whole recording, and then narrow down."},
      {t:"Listen again for words that may be new", why:"Words such as *matatu* can block understanding, so find them early."},
      {t:"Listen a third time for one feature, such as the *r* or one vowel", why:"One feature at a time is easier than listening for everything."},
      {t:"Write one careful claim with three parts", why:"The claim comes last, after the evidence."}
    ]},
    {id:"e6u6-l5-x4", type:"match", q:"Match each feature to the words in the paragraph where you can listen for it.", pairs:[
      ["The *r* after a vowel","*store*, *her*, *brother*","These words have an *r* after a vowel."],
      ["The vowel in *kit*","*six*, *thick*, *big*","These words have the short *i* vowel."],
      ["The vowel in *face*","*snake*","*Snake* has the *face* vowel. *Train* and *station* have it too."],
      ["The vowel in *goat*","*snow*, *go*","These words have the *goat* vowel."],
      ["The vowel in *fleece*","*peas*, *cheese*, *meet*","These words have the long *ee* vowel."]
    ]},
    {id:"e6u6-l5-x5", type:"spot", q:"A classmate writes these notes after the lab. Tap each note that **ranks, overgeneralizes or judges**.", ask:"ranks, overgeneralizes or judges", parts:[
      "“", {t:"The Nairobi speaker has a lazy accent.", flag:true, why:"*Lazy* is a judgment. It does not describe a sound."}, " ", {t:"I could not hear an *r* in *store* in the Accra recording.", flag:false, why:"Fine. This reports what the classmate heard from one speaker."}, " ", {t:"All Kenyans pronounce *th* as *t*.", flag:true, why:"This overgeneralizes from a tendency to everyone."}, " ", {t:"The archive says the Harare speaker has lived in the US for nine years, so her speech may show both places.", flag:false, why:"Fine. This stays within the facts in the archive."}, " ", {t:"The Kingston speaker uses Jamaican Creole in the recording.", flag:true, why:"A reading in English cannot show the creole."}, " ", {t:"I needed three listenings for the Kampala recording.", flag:false, why:"Fine. This is a fact about the listener’s experience."}, "”"
    ]},
    {id:"e6u6-l5-x6", type:"number", q:"This unit has 14 speakers. Five are from West Africa (Lesson 1) and four are from East and Southern Africa (Lesson 2). The rest are from the Caribbean. How many speakers are from the Caribbean?", answer:5, tol:0, unit:"speakers", why:"5 + 4 = 9 speakers are from Africa. 14 − 9 = 5.", wrongs:[{v:9, tol:0, why:"This is the number of speakers from Africa."},{v:4, tol:0, why:"You may have counted one African speaker too many. Add 5 + 4 and subtract from 14."}], hint2:"Add the two African groups, and subtract from 14."},
    M("e6u6-l5-x7","Descriptions say that Barbadian English is rhotic. You will hear the speaker from Bridgetown, Barbados. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["“Every Barbadian pronounces the *r* after a vowel.”","One speaker cannot show this, and descriptions give tendencies."],
      ["“Descriptions say that Barbadian English is rhotic, so I listen for the *r* in *store*. Whatever I hear, I will report it and say that one speaker is one person.”","Right. It compares the evidence with a description and adds a limit."],
      ["“If the speaker does not pronounce the *r*, the speaker is not Barbadian.”","Place of birth does not depend on a sound feature, and one speaker can differ from a tendency."],
      ["“If the speaker pronounces the *r*, the speaker is copying American English.”","This is a guess about a person. The archive does not give a reason."]
    ], {listen:"e6u6-l5-a8", hint:"The right answer does not depend on what this speaker does."}),
    {id:"e6u6-l5-x8", type:"explain", q:"A friend listens to one recording from this unit and says, “Now I know how people from that country speak.” Explain, kindly, how to make a more careful claim.", size:"4–6 sentences", prompt:"A more careful claim has three parts …", hint:"Think about what this speaker does, about what is typical, and about the limit of one recording.", points:["Says that one speaker is one person and cannot show how a whole country speaks","Says that a careful claim reports what the speaker does","Says that it also compares with what researchers report as typical","Adds that the paragraph shows pronunciation only"], model:"A more careful claim has three parts. First, say what this speaker does, such as “I did not hear an *r* in *store*”. Second, say what researchers report as typical for the place, and compare. Third, add that one speaker is one person, and that a reading of the paragraph shows only pronunciation. This way you describe the evidence and do not claim more than it shows."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Make a listening table for the unit", how:[
       "Make a table with nine rows, one for each speaker in the lab. Add three columns: the *r* after a vowel, the vowel in *six*, *thick* and *big* or in *snake* and *go*, and one feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “r pronounced”, “r not heard” or “not sure”.",
       "Write two sentences about your table. Use the words *typical* and *one speaker*."
     ], write:"My table… two sentences with typical and one speaker…"},
     {t:"Compare with Units 3 to 5", how:[
       "Choose one speaker from this lab and one speaker from Unit 3, 4 or 5.",
       "Compare them on the *r* and on one more feature. Listen to each speaker twice.",
       "Write three sentences. Say where the two speakers are alike, where they differ, and what is typical for each place."
     ], write:"Speaker A… Speaker B… Alike in… different in… typical…"}
    ],
    proof:"A table of nine speakers with careful notes, two sentences that use *typical* and *one speaker*, and a three-sentence comparison with a speaker from another unit."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, sections 3.5 “Describing vowels” and 3.12 “Tone and intonation”", note:"Read them before the lab if you want to describe vowels and pitch with technical terms."}
   ]
  }
  ],
  checkpoint:["e6u6-q03","e6u6-q08","e6u6-q12","e6u6-q17","e6u6-q21","e6u6-q26","e6u6-q30","e6u6-q35","e6u6-q39","e6u6-q42","e6u6-q44","e6u6-q45"],
  cpBank:[
   Q("e6u6-cp01","e6u6-l1",1,"Which date is Sierra Leone’s independence?",2,[
     ["6 March 1957","This is Ghana’s date."],
     ["1 October 1960","This is Nigeria’s date."],
     ["27 April 1961","Right. Sierra Leone became independent on this date."],
     ["26 July 1847","This is the date on which Liberia declared independence."]]),
   Q("e6u6-cp02","e6u6-l1",2,"Which of these is a pattern that descriptions record for Nigerian English?",1,[
     ["A silent *h* in every word","This is not a documented pattern of Nigerian English."],
     ["One tag, such as *isn’t it?*, used for many kinds of sentence","Right. This is the invariant tag, a documented feature."],
     ["No use of the word *the*","This is not a documented pattern of Nigerian English."],
     ["A ban on the progressive","The progressive is used, sometimes with stative verbs."]]),
   Q("e6u6-cp03","e6u6-l1",3,"Tomás hears a Ghanaian colleague say, “I’m coming,” and leave the room. He says, “That was the wrong phrase.” What is the most accurate reply?",3,[
     ["“Yes. Ghanaians often make this mistake.”","This treats a local meaning as a mistake."],
     ["“No. The colleague meant that he was arriving.”","The more usual meaning is that he will be back soon."],
     ["“It does not matter what it means.”","Meaning matters, and it can be checked kindly."],
     ["“In Ghanaian English it often means ‘I will be back soon’. We can ask to be sure.”","Right. It is a local meaning, and a friendly question solves doubt."]]),
   Q("e6u6-cp04","e6u6-l2",1,"Which statement about Kenya’s Constitution of 2010 is correct?",0,[
     ["Kiswahili is the national language, and Kiswahili and English are official languages.","Right. The two terms name different jobs."],
     ["English is the only official language.","Kiswahili is official too."],
     ["Kiswahili is not named.","It is named as the national language."],
     ["It lists 16 official languages.","This describes Zimbabwe’s Constitution of 2013."]]),
   Q("e6u6-cp05","e6u6-l2",3,"Fatima’s friend in Kampala uses Luganda at home, English at work and Swahili with some colleagues. Which description is the best?",2,[
     ["The friend is confused between languages.","Using each language where it fits is a skill."],
     ["The friend is not a real user of English.","Using English at work every day makes a person a user."],
     ["The friend uses a repertoire, and each language has a job.","Right. This is how many multilingual people live."],
     ["The friend must choose one language.","Nobody must give up languages. A repertoire grows."]]),
   Q("e6u6-cp06","e6u6-l3",1,"In which year was *Decolonising the Mind* published?",1,[
     ["1965","This is the year of Achebe’s essay."],
     ["1986","Right. Ngũgĩ’s book appeared in 1986."],
     ["1958","This is the year of *Things Fall Apart*."],
     ["2022","This is the year of Nigeria’s language announcement."]]),
   Q("e6u6-cp07","e6u6-l3",2,"Which statement describes how Achebe used English in his novels?",0,[
     ["Characters use Igbo proverbs and speech patterns inside English sentences.","Right. The English of the novels is changed to suit its place."],
     ["He wrote the novels in Igbo and translated them himself.","His novels were written in English."],
     ["He avoided every African idea in the text.","He did the opposite."],
     ["He used only British vocabulary.","He wanted an English that carries African experience."]]),
   Q("e6u6-cp08","e6u6-l3",3,"Priya reads that a country will teach in local languages for the first six years of school. What else should she check before she judges the policy?",2,[
     ["Nothing, because an announcement is the same as a classroom.","A policy on paper is not the same as a policy in a classroom."],
     ["Only the name of the minister.","The name does not show how the policy works."],
     ["Whether books and teacher training exist for those languages.","Right. Materials and teachers decide what happens in school."],
     ["Whether all children live in the capital.","This does not decide how a language policy works."]]),
   Q("e6u6-cp09","e6u6-l4",1,"What does *neva* do in *Im neva kom*?",3,[
     ["It marks an action in progress.","That is one job of *a*."],
     ["It says where something is.","That is the job of *de*."],
     ["It links two nouns.","That is a job of *a*."],
     ["It marks a negative past.","Right. The sentence means “He or she did not come”."]]),
   Q("e6u6-cp10","e6u6-l4",3,"A student says, “Acrolect is a name for a kind of person.” What is wrong?",1,[
     ["Nothing is wrong.","The word names a point on a range of speech."],
     ["It names a point on a range of speech, and the same person can use several points.","Right. Speakers move along the continuum."],
     ["It names a country.","It does not name a country."],
     ["It names a school subject.","It is a term in the study of speech."]]),
   Q("e6u6-cp11","e6u6-l5",2,"Which words in the paragraph are useful for listening to the *kit* vowel?",0,[
     ["*six*, *thick* and *big*","Right. All three have the short *i* vowel."],
     ["*snake* and *go*","These are words for the *face* and *goat* vowels."],
     ["*store* and *her*","These are words for the *r* after a vowel."],
     ["*peas* and *cheese*","These are words for the *fleece* vowel."]]),
   Q("e6u6-cp12","e6u6-l5",3,"Oluwaseun writes, “The speaker from Trinidad proves that all Trinidadians say *th* as *t*.” What is wrong?",3,[
     ["Nothing is wrong.","One speaker cannot prove a rule about a whole place."],
     ["The speaker cannot be from Trinidad.","The archive says that the speaker is from Trinidad."],
     ["*Th* is never pronounced as *t*.","Many varieties have this pattern."],
     ["One speaker is one person, and descriptions give tendencies, not rules for everyone.","Right. A careful claim adds this limit."]])
  ],
  codex:[
   {id:"we-west-african-english", title:"English in West Africa", aka:["Nigerian English","Ghanaian English","Liberian English","English in Sierra Leone"], tags:["world englishes","africa"],
    summary:"English is official in Nigeria, Ghana, Sierra Leone and Liberia, beside many local languages. Researchers describe Nigerian and Ghanaian English as full varieties, with tendencies of sound, grammar and words.",
    levels:{
     starter:[
      "English is an official language in Nigeria, Ghana, Sierra Leone and Liberia. In each country it is used beside many other languages. A person may use one language at home, another at the market and English at school or at work.",
      "The histories differ. Britain ruled the Gold Coast (now Ghana), Lagos and the rest of Nigeria, and the colony of Sierra Leone. Liberia was founded by free Black Americans, who were sent from 1820 by an organization in the United States. Their first lasting settlement began in 1822, and Liberia declared independence in 1847.",
      "Researchers describe Nigerian English and Ghanaian English as varieties with their own patterns. Descriptions often say that the *r* after a vowel is not pronounced, that the rhythm tends toward syllable timing, and that there are fewer vowel contrasts than in southern British English. Each point is a tendency, and it varies by speaker.",
      "Some words have local meanings. *I’m coming* often means “I will be back soon”, *go-slow* means a traffic jam, and *chop* means to eat. These are features of a variety, and they are not mistakes.",
      {key:"English in West Africa is a set of varieties, and each one is a full system. Nigerian Pidgin, Ghanaian Pidgin and Krio are separate systems, and Unit 7 studies them."}
     ],
     builder:[
      "The table gives the dates from Lesson 1.",
      {table:[["Country","English began with","Independence"],["Ghana","Gold Coast colony, 1874","6 March 1957"],["Nigeria","Lagos 1861; one colony 1914","1 October 1960"],["Sierra Leone","Freetown 1792; colony 1808","27 April 1961"],["Liberia","Settlers from the US, from 1820","26 July 1847"]]},
      "Two main sources for the varieties are David Jowitt (*Nigerian English Usage*, 1991, and *Nigerian English*, 2019) and Magnus Huber (2004, “Ghanaian English: phonology”, in *A Handbook of Varieties of English*, edited by Kortmann, Schneider and colleagues). Summaries in teaching sites, such as WEGate at Ruhr University Bochum, describe Nigerian English as non-rhotic, with a tendency toward syllable timing and a reduced vowel system. Huber describes Ghanaian English with fewer vowel contrasts than SSBE, so some pairs, such as the vowels of *beat* and *bit*, can share a vowel.",
      "eWAVE, the World Atlas of Varieties of English, records grammar features such as the invariant tag *isn’t it?* for Nigerian English. It lists Nigerian Pidgin and Ghanaian Pidgin as separate varieties.",
      "In schools, English is the main language of teaching in the later years. The policy for the early years has changed. Anyidoho (2018) describes changes in Ghana, for example in 1974, 2002, 2004 and 2007. In 2022, Nigeria adopted local languages for the first six years of primary school. In November 2025, it cancelled that policy and made English the language of teaching at all levels.",
      "A listener should remember that a variety is a set of tendencies and a speaker is a person. A feature recorded in eWAVE can still be marked down in some exams."
     ],
     pro:[
      "Descriptions of rhythm need care. Early studies of Nigerian English described it as syllable-timed, but researchers have questioned whether any language is strictly syllable-timed or stress-timed. The safer statement is that descriptions report a tendency toward more even syllables than in southern British English. How English Works, Unit 3, explains why the labels are debated.",
      "Many first languages of the region are tone languages, such as Yoruba, Igbo, Hausa and Twi. Some researchers have asked whether the pitch patterns of these languages shape the pitch of English. The evidence is still being discussed, and a course statement should present it as an open question.",
      "On *I’m coming*, a pragmatic study of its use in Ghanaian interpersonal communication (in the *CLAREP Journal of English and Linguistics*) describes several uses, so “I will be back soon” is the best-known use and is not the only one. Words such as *go-slow*, *chop* and *trotro* are reported in several sources, and *sorry* as a sign of sympathy is reported for Nigerian English and for East African English (Schmied 2012).",
      "For Liberia, eWAVE lists Liberian Settler English and Vernacular Liberian English as separate varieties. Some scholars link Settler English with the speech of African Americans in the 1800s, and the question of origins is debated. The history of the Colonization Society’s plan was disputed at the time, including among Black Americans, and a careful summary says so.",
      "For listening, the Speech Accent Archive gives place, age, first languages and years in the US. Several speakers in this unit have lived in the US, so a clip cannot be treated as “the” accent of a country.",
      "Cross-link: Unit 2 for the colonial history, Unit 5 for features of outer-circle varieties and nativization, and Unit 7 for Nigerian Pidgin and Krio."
     ]},
    related:["we-east-southern-african-english","we-second-diaspora","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”"}],
    sources:[{t:"eWAVE: the electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"},{t:"WEGate: Nigerian English (Ruhr University Bochum)", url:"https://www.ruhr-uni-bochum.de/wegate/Africa/Nigeria.html"},{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"}],
    checked:"2026-11"},
   {id:"we-east-southern-african-english", title:"English in East and Southern Africa", aka:["Kenyan English","Ugandan English","Tanzanian English","Zimbabwean English","Sheng"], tags:["world englishes","africa"],
    summary:"English is official in Kenya, Uganda and Zimbabwe and has a large role in Tanzania. It is used beside Kiswahili and many other languages, and researchers describe East African English as a family of varieties.",
    levels:{
     starter:[
      "In Kenya, Uganda and Tanzania, most people use more than one language every day. Kiswahili is a Bantu language with a long history on the East African coast. English came with British rule and stayed after independence. In Zimbabwe, Shona and Ndebele are the largest African languages, and English is the main language of teaching in practice.",
      "Laws name the roles. Kenya’s Constitution of 2010 names Kiswahili as the national language, and Kiswahili and English as official languages. Uganda has had English as an official language since 1962, and added Kiswahili in 2005. In Tanzania, Kiswahili is used in primary school and English in secondary school. Zimbabwe’s Constitution of 2013 lists 16 official languages.",
      "Researchers describe East African English with tendencies, such as more even syllables and fewer vowel contrasts. They also record words such as *matatu* (a shared minibus taxi) and *harambee* (“pulling together”). Each tendency varies by speaker.",
      "Many young people in Nairobi use Sheng, which mixes Kiswahili, English and other languages. Moving between languages is a skill called code-switching.",
      {key:"A law can name a language, but a person uses a whole repertoire. A national language and an official language are different things."}
     ],
     builder:[
      "The terms need careful use. An *official language* is a language that the government uses for laws, courts and public services. A *national language* is a language that a country names as a symbol of identity or as a common language for all citizens. A country can have both, and they can be the same language.",
      {table:[["Country","Independence","Languages and school"],["Kenya","12 December 1963","Kiswahili is national; Kiswahili and English are official"],["Uganda","9 October 1962","English official; Kiswahili added in 2005"],["Tanzania","Tanganyika 1961; union 1964","Kiswahili in primary school; English in secondary school"],["Zimbabwe","18 April 1980","16 official languages in 2013; English main in teaching"]]},
      "Josef Schmied (2012), in a chapter on standards of English in East Africa, describes tendencies of sound, such as more even syllable length, levelled vowel length, and simplified final consonant clusters. He lists grammar patterns, such as *advices* and *luggages*, *discuss about*, and the progressive with some stative verbs. He also lists words such as *matatu*, *daladala*, *boda boda*, *harambee*, *mitumba*, *posho* and *ugali*, and *sorry* said to show sympathy.",
      "Schmied writes that the debate about standards in East Africa has hardly begun. Debate about English and Kiswahili as the language of teaching is strongest in Tanzania.",
      "A summary of Kenyan English at WEGate describes it as non-rhotic. Check the description for each variety before you generalize."
     ],
     pro:[
      "East African English is a convenient label for three countries with different histories. Britain began to rule the area of Kenya in 1895 and made it a colony in 1920. Uganda was a protectorate from the 1890s. Tanganyika was ruled by Germany and then by Britain. Language policy followed different paths after independence, and Tanzania gave Kiswahili the strongest public role of the three.",
      "Zimbabwe differs again. British settlers arrived from 1890, and the white-minority government declared independence from Britain in 1965, which almost no country recognized. Independence under majority rule came on 18 April 1980. Reliable counts by language are hard to find, so figures for the first-language and second-language users of English are usually estimates. eWAVE lists White Zimbabwean English as a variety, and any description must say which speakers it covers.",
      "Sheng is studied as a variety with its own words, and it changes quickly. Researchers debate how to classify it, because its grammar is often described as close to Kiswahili and its words come from several languages. Code-switching between Sheng, Kiswahili and English follows social rules and is a normal skill of multilingual people.",
      "The pairs of vowels that merge in some descriptions (*beat* and *bit*) and the closeness of /r/ and /l/ in some speakers reflect the sound systems of first languages in the region. The same patterns appear in learners from many other places, including Japan, which is why a feature in a variety and a pattern in a learner are not always easy to tell apart. The difference lies in whether fluent, experienced speakers use the pattern in a regular way.",
      "Cross-link: Unit 4, Lesson 5 for South Africa; Unit 5 for outer-circle features and nativization; Unit 7 for pidgins and creoles."
     ]},
    related:["we-west-african-english","we-african-writers-and-school-language","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"eWAVE: the electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"},{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"}],
    checked:"2026-11"},
   {id:"we-african-writers-and-school-language", title:"Writing in English and the language of school", aka:["Achebe and Ngũgĩ","Decolonising the Mind","language of instruction"], tags:["world englishes","africa","language policy"],
    summary:"Chinua Achebe (1965) argued that English could be changed to carry African experience. Ngũgĩ wa Thiong’o (1986) argued for writing in African languages. A similar question arises for the language of school.",
    levels:{
     starter:[
      "Two African writers gave different answers to the question of which language African literature should use.",
      "Chinua Achebe (1930–2013), a Nigerian novelist, wrote *Things Fall Apart* (1958) in English. In an essay of 1965, he argued that English could carry African experience if it were changed to suit its new surroundings. His characters use Igbo proverbs and speech patterns inside English sentences.",
      "Ngũgĩ wa Thiong’o (1938–2025), a Kenyan writer, decided in prison to write his fiction in Gĩkũyũ. In *Decolonising the Mind* (1986), he argued that a language carries a people’s memory and values, that colonial schools put European languages above African ones, and that African literature should be written in African languages.",
      "Both writers agreed that colonial rule changed the place of African languages. They differ on what a writer should do about it. Many writers use both English and African languages.",
      {key:"A fair summary names both positions, gives each its reasons, and does not declare a winner."}
     ],
     builder:[
      "The same question appears in schools: in which language should a child learn to read? The World Bank report *Loud and Clear* (2021) estimates that nearly 37% of students in low- and middle-income countries are taught in a language that they do not understand. Its main message is that policies should support teaching in languages that students and teachers understand and speak best, and that a small number of added languages could bring large gains in learning.",
      "People make several arguments. Some say that the first years of school should use a language that children already know. Others say that parents want English because it opens study and work. Others point to classrooms with several home languages, to the cost of books and teachers, and to writing systems that are still being developed.",
      "Policy changes often. Anyidoho (2018) describes changes in Ghana’s policy for the early years of primary school, for example in 1974, 2002, 2004 and 2007. In 2022, Nigeria adopted a National Language Policy with local languages for the first six years of primary school, and the policy called for new materials and teacher training. In November 2025, the government cancelled it and made English the language of teaching at all levels, citing exam results. Many Nigerian linguists and educators objected. In Tanzania, the change from Kiswahili to English at the start of secondary school is debated.",
      "A policy on paper is not the same as a policy in a classroom. No single plan fits every country."
     ],
     pro:[
      "Achebe’s essay first appeared as “English and the African Writer” in the magazine *Transition* (issue 18, 1965). It was later collected as “The African Writer and the English Language” in *Morning Yet on Creation Day* (1975). A careful summary paraphrases the essay and does not quote it from memory. Ngũgĩ’s *Decolonising the Mind: The Politics of Language in African Literature* (1986) gathers essays. He described it as his farewell to English as a language for his writing. His novel *Caitaani Mũtharaba-inĩ* (1980; in English *Devil on the Cross*, 1982) was written in Gĩkũyũ during his detention in 1977–78, after the Kamiriithu community play *Ngaahika Ndeenda*. He published essays in English in later years too.",
      "Critics of each position have raised questions. Some ask whether a language can be freed from the history it carries. Others ask about the market for books in languages with fewer readers, and about writers whose daily language is English or a pidgin. Each writer’s practice shows a point of the other: Ngũgĩ published essays in English, and Achebe’s English is shaped by Igbo.",
      "On school language, the evidence base is large but uneven. The World Bank (2021) reviews it. An early Nigerian experiment was the Ife Six-Year Primary Project, which began in 1970 at the University of Ife. Pupils in the project schools were taught in Yoruba for all six years of primary school. The project’s book, *Education in Mother Tongue* (Fafunwa, Macauley and Sokoya, 1989), reports that they did at least as well as pupils in ordinary schools, and that their English was no weaker. The project also produced new teaching materials in Yoruba, so a careful reader asks how much of the result came from language alone and how much from the extra support. The questions that a policy must answer are practical: which languages, which years, which teachers, and which books.",
      "Philippine policy offers a comparison in Unit 5: mother tongue–based multilingual education, used from 2009 and ended as the medium of instruction for kindergarten to Grade 3 in 2024.",
      "Cross-link: Unit 2 mentions the debate, Unit 5 for the Philippines, and Unit 9 for attitudes, identity and power."
     ]},
    related:["we-west-african-english","we-east-southern-african-english","we-second-diaspora"],
    read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”"}],
    sources:[{t:"World Bank: Loud and Clear: Effective Language of Instruction Policies for Learning (2021)", url:"https://www.worldbank.org/en/topic/education/publication/loud-and-clear-effective-language-of-instruction-policies-for-learning"}],
    checked:"2026-11"},
   {id:"we-caribbean-english", title:"Caribbean English, Standard Jamaican English and Jamaican Creole", aka:["Jamaican Patois","Patwa","West Indian English","Bajan"], tags:["world englishes","caribbean"],
    summary:"English is official in Jamaica, Trinidad and Tobago, Barbados and Guyana, and most people also use an English-based creole. Standard Jamaican English and Jamaican Creole are related systems, and speakers move along a continuum between them.",
    levels:{
     starter:[
      "English is the official language in Jamaica, Trinidad and Tobago, Barbados and Guyana. Most people there also use an English-based creole. A creole is a language that formed when speakers of different languages had to communicate, and that became the first language of a community.",
      "The history includes colonization, sugar plantations and slavery. By the estimates of the Trans-Atlantic Slave Trade Database, about 12.5 million Africans were forced onto ships in the transatlantic slave trade, and about 10.7 million survived the voyage to the Americas between 1526 and 1866. The Slavery Abolition Act took effect on 1 August 1834. After abolition, indentured workers, mostly from India, came to work on the plantations.",
      "In Jamaica, Standard Jamaican English is used in school, law and formal writing. Jamaican Creole, also called Patwa or Patois, is the first language of many Jamaicans, and it has its own grammar. In *Mi a ron* (“I am running”), the small word *a* marks an action in progress.",
      {key:"Jamaican Creole is a system with rules. It is not broken English. Many Jamaicans use both systems, and they choose by setting."}
     ],
     builder:[
      "The table gives the dates from Lesson 4.",
      {table:[["Place","British rule began","Independence"],["Jamaica","Taken from Spain, 1655","6 August 1962"],["Trinidad and Tobago","Trinidad taken from Spain, 1797","31 August 1962"],["Guyana","British control of the Dutch colonies by 1814","26 May 1966"],["Barbados","English settlement from 1627","30 November 1966"]]},
      "Examples of regular grammar in Jamaican Creole, in the Cassidy/JLU spelling used by linguists, are *Mi a ron* (action in progress), *Dat a fi mi buk* (identity), *Mi de ya* (location) and *Im neva kom* (negative past). The Jamaican Language Unit at the University of the West Indies, Mona, was set up in 2002, and its aims include a standard writing system for Jamaican.",
      "DeCamp (1971) described the range of Jamaican speech as a post-creole continuum. The *acrolect* is the end closest to standard English, the *basilect* is the end furthest from it, and the *mesolect* is the wide middle. Most speakers move along the range by listener and place.",
      "Descriptions of accents, many based on Wells (1982), report that much of the region is non-rhotic. Barbados is described as rhotic. Jamaica and Guyana are described as variable: one study of educated Jamaican speech found the *r* after a vowel about a fifth of the time (Rosenfelder 2009). FACE and GOAT are often single vowels, and *th* is often *t* or *d*.",
      "Indentured workers from India began to arrive in British Guiana in 1838, and in Trinidad and Jamaica in the 1840s. Smaller numbers came from China and from Madeira. Recruitment in India ended in 1917. Words from Hindi and other Indian languages entered Caribbean English, especially in Guyana and Trinidad."
     ],
     pro:[
      "Scholars agree that both English and West African languages shaped the creoles. They still debate how much each contributed, and which parts of the history matter most. A careful statement says so, and it does not give one origin.",
      "The continuum is a model. It describes the experience of speakers who can reach many points between two ends. Some scholars describe Jamaican Creole and English as two systems that touch, and the Jamaican Language Unit treats Jamaican as a language of its own. Unit 5 introduced a similar idea in Platt’s speech continuum and Gupta’s diglossia for Singapore.",
      "eWAVE lists Jamaican English and Jamaican Creole as separate varieties, and also Barbadian Creole (Bajan) and Trinidadian Creole. Its entries are the best place to check which grammar features are recorded for each.",
      "Spelling matters when you write examples. Jamaican Creole has no single official spelling, so a writer should say which system is used. Examples should be used to teach reading and understanding, and not as a mock performance.",
      "The wording of the history needs care. The Slavery Abolition Act of 1833 was followed by a period of “apprenticeship”, in which formerly enslaved people had to work without pay for their former owners. In Jamaica and Barbados it ended in 1838. Compensation of £20 million was paid to slave owners, and none to the people who had been enslaved.",
      "Cross-link: Unit 3 for London speech, Unit 5 for the speech continuum, Unit 7 for pidgins and creoles in full."
     ]},
    related:["we-caribbean-english-in-britain","we-west-african-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”"}],
    sources:[{t:"Jamaican Language Unit, The UWI, Mona: background", url:"https://www.mona.uwi.edu/dllp/node/177"},{t:"National Endowment for the Humanities: Transatlantic Slave Trade Database", url:"https://www.neh.gov/project/transatlantic-slave-trade-database"},{t:"eWAVE: the electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-caribbean-english-in-britain", title:"Caribbean English in Britain: Windrush and Multicultural London English", aka:["Windrush generation","MLE","Multicultural London English"], tags:["world englishes","caribbean","britain"],
    summary:"The Empire Windrush arrived in June 1948 with hundreds of passengers from the Caribbean. Caribbean English and creoles became part of British life, and they are one source of Multicultural London English.",
    levels:{
     starter:[
      "In June 1948, the ship *Empire Windrush* arrived at Tilbury, near London, with 1,027 passengers. Most were from the Caribbean, and many came to work and to help rebuild Britain.",
      "The British Nationality Act of 1948 took effect on 1 January 1949. It gave people born in Britain or its colonies the status of citizens of the United Kingdom and Colonies. Many more people came from the Caribbean in the 1950s. The Commonwealth Immigrants Act of 1962 introduced controls.",
      "People who came in these years are called the Windrush generation. In 2018, it became public that some of them, who had lived in Britain legally for decades, had been wrongly treated as illegal immigrants. Some were detained, and some lost their jobs or rights.",
      "Caribbean English and creoles changed British speech. Multicultural London English (MLE) is a way of speaking that grew among young people in inner London from many backgrounds.",
      {key:"MLE has many sources. It is not “fake Jamaican”, and researchers do not use that nickname."}
     ],
     builder:[
      "Cheshire, Kerswill and colleagues (2011) studied how MLE emerged. It draws on Caribbean English and creoles, on varieties from South Asia and Africa, and on traditional London English. Researchers describe it as a multiethnolect, a variety used by speakers of many ethnic backgrounds.",
      "Features reported for MLE include a non-rhotic accent, *th*-fronting and *th*-stopping, and *innit* as a tag. Some vowels differ from older London speech. Unit 3 describes the older speech of London, including T-glottaling.",
      "MLE is often called by other names, and some of them are mocking. Researchers use *Multicultural London English* because the sources are wide and the speakers come from many backgrounds. Many people use MLE together with other styles, depending on the setting.",
      "The wider history matters too. The National Archives notes that many Caribbean migrants faced discrimination at work, and that many had to take jobs below their skills. They responded by building community through clubs, carnival events and newspapers. Language was part of this community life, and speakers of Caribbean English and creoles kept their ways of speaking in Britain while they also used the English of their workplaces and schools.",
      "In a classroom, describe the Windrush story with dates, with the Act of 1948 and the Commonwealth Immigrants Act of 1962, and with the facts of 2018. Avoid words that suggest that the migrants were a problem."
     ],
     pro:[
      "The National Archives gives 1,027 passengers in total for the *Windrush*, more than 300 of them women, and describes them as a largely Caribbean group. Figures for the Caribbean passengers alone differ between accounts, so a careful summary says “hundreds” or gives the source of its number.",
      "Sources give the date of arrival as 21 or 22 June 1948. The passenger list gives 21 June, and 22 June is now marked as Windrush Day.",
      "The Windrush scandal of 2018 concerned the treatment of people who had the right to live in Britain, and who could not prove it. The wording of a classroom summary should stay close to the facts: some people were wrongly detained, denied work or services, or wrongly deported.",
      "On MLE, researchers describe the result of contact between speakers from many backgrounds, including learners of English as an additional language. Cheshire and colleagues (2011) speak of a *feature pool*: a set of features from many sources, from which speakers take features and combine them. Whether MLE is one variety or a set of styles is still discussed.",
      "Cross-link: Unit 3 for London, Unit 6 Lesson 4 for the Caribbean, and Unit 9 for attitudes and identity."
     ]},
    related:["we-caribbean-english","we-rp-ssbe","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.9 “Sociolinguistic correlations: Ethnicity”"}],
    sources:[{t:"The National Archives: Postwar Caribbean migration", url:"https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/postwar/postwar-caribbean-migration/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-tone-language", term:"Tone language", def:"A language that uses pitch to tell words apart. Yoruba, Igbo, Hausa and Twi are tone languages.", codex:"we-west-african-english"},
   {id:"we-nigerian-english", term:"Nigerian English", def:"The English used in Nigeria, where it is an official language beside more than 500 other languages. Researchers describe it as a variety with its own sounds, grammar and words.", codex:"we-west-african-english"},
   {id:"we-ghanaian-english", term:"Ghanaian English", def:"The English used in Ghana, where it is the official language. Researchers describe it as a variety with its own sounds, grammar and words, such as *trotro* and *I’m coming*.", codex:"we-west-african-english"},
   {id:"we-liberian-settler-english", term:"Liberian Settler English", def:"A variety of English in Liberia that some scholars link to the speech of African Americans in the 1800s. eWAVE lists it beside Vernacular Liberian English.", codex:"we-west-african-english"},
   {id:"we-east-african-english", term:"East African English", def:"A label for the varieties of English in Kenya, Uganda and Tanzania. They share tendencies, and they also differ from each other.", codex:"we-east-southern-african-english"},
   {id:"we-sheng", term:"Sheng", def:"A way of speaking used by many young people in Nairobi. It mixes Kiswahili, English and other Kenyan languages, and its words change quickly.", codex:"we-east-southern-african-english"},
   {id:"we-official-language", term:"Official language", def:"A language that the government uses for laws, courts and public services. A country can have more than one.", codex:"we-east-southern-african-english"},
   {id:"we-national-language", term:"National language", def:"A language that a country names as a symbol of its identity or as a common language for all citizens. It can be different from the official languages.", codex:"we-east-southern-african-english"},
   {id:"we-achebe-ngugi-debate", term:"Achebe–Ngũgĩ debate", def:"A debate about the language of African literature. Achebe (1965) argued that English could be changed to carry African experience. Ngũgĩ (1986) argued for writing in African languages.", codex:"we-african-writers-and-school-language"},
   {id:"we-decolonising-the-mind", term:"Decolonising the Mind", def:"A book by Ngũgĩ wa Thiong’o (1986) about the politics of language in African literature. He called it his farewell to English as a language for his writing.", codex:"we-african-writers-and-school-language"},
   {id:"we-language-of-instruction", term:"Language of instruction", def:"The language in which a school teaches its lessons. It is also called the medium of instruction.", codex:"we-african-writers-and-school-language"},
   {id:"we-indentured-labor", term:"Indentured labor", def:"Work done under a contract for a fixed time, usually for low pay. After the end of slavery, many indentured workers from India came to the Caribbean.", codex:"we-caribbean-english"},
   {id:"we-standard-jamaican-english", term:"Standard Jamaican English", def:"The English used in school, law and formal writing in Jamaica. It has a Jamaican accent and is related to Jamaican Creole.", codex:"we-caribbean-english"},
   {id:"we-jamaican-creole", term:"Jamaican Creole", def:"The first language of many Jamaicans, also called Patwa or Patois. It has its own grammar, and it is used beside Standard Jamaican English.", codex:"we-caribbean-english"},
   {id:"we-creole-continuum", term:"Post-creole continuum", def:"A range of speech between a creole and the standard language, with no sharp border. DeCamp (1971) described it for Jamaica.", codex:"we-caribbean-english"},
   {id:"we-basilect-mesolect-acrolect", term:"Basilect, mesolect and acrolect", def:"Three labels for points on a continuum. The acrolect is closest to standard English, the basilect is furthest from it, and the mesolect is the middle.", codex:"we-caribbean-english"},
   {id:"we-windrush", term:"Windrush generation", def:"People who came from the Caribbean to Britain in the years after the ship *Empire Windrush* arrived in June 1948.", codex:"we-caribbean-english-in-britain"},
   {id:"we-mle", term:"Multicultural London English (MLE)", def:"A way of speaking that grew among young people in inner London from many backgrounds. It draws on Caribbean English and on many other sources.", codex:"we-caribbean-english-in-britain"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u6-q01","e6u6-l1",1,"In how many of these four countries is English an official language: Nigeria, Ghana, Sierra Leone and Liberia?",0,[
     ["In all four","Right. English is official in all four, beside many local languages."],
     ["Only in Nigeria and Ghana","English is also official in Sierra Leone and Liberia."],
     ["Only in Nigeria","English is official in all four."],
     ["In none, because they use only local languages","English is official in all four."]]),
   Q("e6u6-q02","e6u6-l1",1,"Which date is Ghana’s independence?",2,[
     ["1 October 1960","This is Nigeria’s date."],
     ["27 April 1961","This is the date for Sierra Leone."],
     ["6 March 1957","Right. Ghana became independent on this date."],
     ["26 July 1847","This is the date on which Liberia declared independence."]]),
   Q("e6u6-q03","e6u6-l1",2,"Which statement about Liberia is the most accurate?",1,[
     ["It was a British colony until 1961.","Sierra Leone became independent in 1961. Liberia was never ruled by a European power."],
     ["Free Black Americans were sent there from 1820 by an organization in the US, and it declared independence in 1847.","Right. Local peoples also lived in the region."],
     ["It became independent in 1957.","This is the date for Ghana."],
     ["English is not an official language.","English is its official language."]]),
   Q("e6u6-q04","e6u6-l1",1,"What does *go-slow* mean in Nigerian English?",3,[
     ["A kind of food","*Chop* is a word for eating, and *go-slow* is not a food."],
     ["A slow walk for exercise","The word is about traffic."],
     ["A teacher’s rule","The word is about traffic."],
     ["A traffic jam","Right. It is a local word for a traffic jam."]]),
   Q("e6u6-q05","e6u6-l1",2,"A colleague from Accra says “I’m coming” and leaves the room. What is the best way to respond?",2,[
     ["Say that the phrase is a mistake","It is a local meaning, and it is not a mistake."],
     ["Wait for the colleague to arrive in the room","The colleague is most likely leaving for a short time."],
     ["Ask kindly, “Do you mean you will be back soon?”","Right. The question is polite and it removes doubt."],
     ["Ignore the phrase","A friendly question helps both people."]]),
   Q("e6u6-q06","e6u6-l1",2,"What is a *feature* of a variety?",0,[
     ["A pattern that many speakers share and that follows its own rules","Right. This is why researchers do not call it a mistake."],
     ["A mistake that a speaker makes once","One slip is not a feature."],
     ["A word that a dictionary has removed","This is not what the word means."],
     ["A sound that nobody uses","A feature is used by many speakers."]]),
   Q("e6u6-q07","e6u6-l1",3,"Obinna, from Lagos, says to Mei, “You are coming, isn’t it?” Mei thinks the grammar is wrong. What is the best reply?",1,[
     ["“Yes. Nigerians do not know the rule for tags.”","This is a judgment, and it is not accurate."],
     ["“Researchers record one tag for many sentences as a feature of Nigerian English. I can ask if I am not sure what you mean.”","Right. It names the pattern and keeps the conversation open."],
     ["“Please say it in standard English.”","This treats a feature as a problem."],
     ["“Nigerian English has no grammar.”","Every variety has grammar."]]),
   Q("e6u6-q08","e6u6-l1",3,"A manager says, “A feature of Nigerian English is in eWAVE, so no exam can mark it down.” What is wrong?",3,[
     ["Nothing is wrong.","Documented and accepted everywhere are different claims."],
     ["eWAVE does not record any features.","eWAVE records many grammar features."],
     ["Features never occur in exams.","Features can occur in many settings."],
     ["A documented feature can still be marked down in a setting that asks for one standard.","Right. Both statements can be true."]]),
   Q("e6u6-q09","e6u6-l1",1,"What is Krio?",2,[
     ["A dialect of Ghanaian English","Krio is used in Sierra Leone."],
     ["A word for a traffic jam","This is not what Krio is."],
     ["An English-based creole that many people in Sierra Leone use between ethnic groups","Right. Unit 7 studies it in full."],
     ["A school subject only","Krio is widely spoken in daily life."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u6-q10","e6u6-l2",1,"What is a *matatu*?",1,[
     ["A kind of food","It is not a food."],
     ["A shared minibus taxi in Kenya","Right. It is often said to come from the Swahili word for “three”."],
     ["A greeting","It is a vehicle."],
     ["A market stall","It is a vehicle."]]),
   Q("e6u6-q11","e6u6-l2",1,"Which language is the national language of Tanzania?",0,[
     ["Kiswahili","Right. It is also the main language of primary school."],
     ["English","English is the main language of secondary school."],
     ["Shona","Shona is a main language of Zimbabwe."],
     ["Luganda","Luganda is a major language of Uganda."]]),
   Q("e6u6-q12","e6u6-l2",2,"What is the difference between a national language and an official language?",2,[
     ["There is no difference.","A country can name them differently."],
     ["A national language is the language of the capital only.","The term is about identity or a common language for all citizens."],
     ["An official language is used by the government for laws and services. A national language is named as a symbol or common language of the country.","Right. They can be the same or different."],
     ["A national language is always English.","It is often an African language, as with Kiswahili."]]),
   Q("e6u6-q13","e6u6-l2",1,"When did Zimbabwe become independent under majority rule?",3,[
     ["9 October 1962","This is Uganda’s date."],
     ["12 December 1963","This is Kenya’s date."],
     ["1965","In 1965, the white-minority government declared independence, which almost no country recognized."],
     ["18 April 1980","Right. This is the date of independence under majority rule."]]),
   Q("e6u6-q14","e6u6-l2",2,"How many official languages does Zimbabwe’s Constitution of 2013 list?",2,[
     ["3","English, Shona and Ndebele are three of the languages on the list, but the list is longer."],
     ["11","This is not the number for Zimbabwe."],
     ["16","Right. The list includes English, Shona, Ndebele and sign language."],
     ["1","English is not the only official language."]]),
   Q("e6u6-q15","e6u6-l2",2,"Which of these is a pattern that Schmied (2012) lists for East African English?",1,[
     ["No use of any numbers","This is not a pattern of the variety."],
     ["A mass noun used in the plural, such as *advices*","Right. *Luggages* is another example."],
     ["A ban on the progressive","The progressive is used."],
     ["Only words from Arabic","The words come from many languages."]]),
   Q("e6u6-q16","e6u6-l2",3,"A visitor in Nairobi says that a young woman is “mixing up” Sheng, Kiswahili and English. What is the best reply?",0,[
     ["“She is using her repertoire. Moving between languages is a skill called code-switching.”","Right. Each language has a job."],
     ["“Yes. She does not know any of them well.”","Switching needs good knowledge of several systems."],
     ["“Sheng is a mistake in Kiswahili.”","Researchers study Sheng as a variety with its own words."],
     ["“She should pick one language.”","Nobody needs to give up languages."]]),
   Q("e6u6-q17","e6u6-l2",3,"A website says, “Kiswahili was brought to East Africa by the British.” What does this lesson say?",1,[
     ["The website is right.","Kiswahili is much older than British rule."],
     ["Kiswahili was a language of trade on the coast long before colonial rule.","Right. English came with British rule, and Kiswahili did not."],
     ["Kiswahili came from Zimbabwe.","Zimbabwe’s largest languages are Shona and Ndebele."],
     ["Kiswahili was invented in the 1960s.","It has a long history."]]),
   Q("e6u6-q18","e6u6-l2",3,"Why can a law that names a language be a poor guide to how people speak?",3,[
     ["Laws are always wrong.","A law is a record of a decision."],
     ["Laws are about spelling only.","Laws can name languages for many reasons."],
     ["Every citizen speaks all named languages.","This is not what a law says."],
     ["A law does not say how many people speak the language at home, or how well.","Right. A census and a law answer different questions."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u6-q19","e6u6-l3",1,"Who wrote the essay of 1965 about English and the African writer?",0,[
     ["Chinua Achebe","Right. He argued that English could be changed to carry African experience."],
     ["Ngũgĩ wa Thiong’o","He wrote *Decolonising the Mind* in 1986."],
     ["Josef Schmied","Schmied wrote about standards of English in East Africa."],
     ["Magnus Huber","Huber wrote about Ghanaian English."]]),
   Q("e6u6-q20","e6u6-l3",1,"Which book gives Ngũgĩ’s reasons for writing in Gĩkũyũ?",2,[
     ["*Things Fall Apart*","This is a novel by Achebe."],
     ["*Loud and Clear*","This is a World Bank report."],
     ["*Decolonising the Mind*","Right. It was published in 1986."],
     ["*Morning Yet on Creation Day*","This is a collection of essays by Achebe."]]),
   Q("e6u6-q21","e6u6-l3",2,"Which statement about Achebe’s position is the most accurate?",1,[
     ["English must never be used by African writers.","This is not his position."],
     ["English could carry African experience if it were changed to suit its new surroundings.","Right. His novels show Igbo patterns inside English."],
     ["English is better than African languages.","He did not say this."],
     ["African writers should stop writing.","This is not his position."]]),
   Q("e6u6-q22","e6u6-l3",2,"Which statement about Ngũgĩ’s position is the most accurate?",3,[
     ["English is a bad language.","His argument was about history, power and readers."],
     ["He never wrote in English.","He wrote essays in English, and his early works were in English."],
     ["Africans should stop reading.","This is not his position."],
     ["African literature should be written in African languages, and then translated.","Right. This is the main claim of *Decolonising the Mind*."]]),
   Q("e6u6-q23","e6u6-l3",2,"What do Achebe and Ngũgĩ agree on?",0,[
     ["Colonial rule changed the place of African languages, and this had a cost.","Right. They differ on what a writer should do."],
     ["English should be taught to nobody.","Neither writer said this."],
     ["Every African writer must use the same language.","Neither writer said this."],
     ["Colonial rule did not affect languages.","Both writers said that it did."]]),
   Q("e6u6-q24","e6u6-l3",3,"A friend says, “Ngũgĩ hated English.” What is the best reply?",2,[
     ["“Yes. He said English is bad.”","This misreads his argument."],
     ["“No. He wrote only in English.”","He chose Gĩkũyũ for his fiction."],
     ["“His argument was about history, power and readers, and he kept writing essays in English.”","Right. It keeps to what he argued."],
     ["“Nobody knows what he thought.”","He wrote about it at length."]]),
   Q("e6u6-q25","e6u6-l3",2,"What is the main message of the World Bank report *Loud and Clear* (2021)?",1,[
     ["Every country should teach only in English.","This is not the message."],
     ["Policies should support teaching in languages that students and teachers understand and speak best.","Right. It also says that a few added languages could bring large gains."],
     ["Children should not learn a second language.","The report supports adding some languages."],
     ["Language policy has no effect on learning.","The report says that policy affects learning."]]),
   Q("e6u6-q26","e6u6-l3",3,"In 2022, Nigeria adopted a policy of local languages for the first six years of primary school. What happened next, according to the lesson?",3,[
     ["It was in place in every school by the next year, with no further work needed.","The policy itself called for new materials and teacher training, and it was later cancelled."],
     ["It was extended to the universities.","The policy was about the first six years of primary school."],
     ["It is still in force, and nobody has debated it.","The policy was cancelled in 2025, and the decision was debated."],
     ["It was cancelled in November 2025, and English became the language of teaching.","Right. Many Nigerian linguists and educators criticized the decision. Policy can change quickly, and people disagree about the evidence."]]),
   Q("e6u6-q27","e6u6-l3",3,"A report says, “Ghana has had one stable language policy for schools since independence.” What does Anyidoho (2018) show?",1,[
     ["The report is right.","The policy changed several times."],
     ["The policy for the early years of primary school changed several times, for example in 1974, 2002, 2004 and 2007.","Right. Frequent change is one reason why putting a policy into practice is hard."],
     ["Ghana has no language policy.","Ghana has had several."],
     ["Ghana teaches only in French.","This is not the case."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u6-q28","e6u6-l4",1,"When did the Slavery Abolition Act take effect?",2,[
     ["1 August 1838","This is the date on which the apprenticeship system ended in Jamaica and Barbados."],
     ["1807","This is the year of the law on the slave trade."],
     ["1 August 1834","Right. The Act was passed in 1833 and took effect in 1834."],
     ["1917","This is the year in which the recruitment of indentured workers in India ended."]]),
   Q("e6u6-q29","e6u6-l4",1,"From which country did most indentured workers come to the Caribbean after abolition?",0,[
     ["India","Right. The first workers from India reached British Guiana in 1838."],
     ["Japan","Few workers came from Japan to these colonies."],
     ["Brazil","Brazil was not the main source of indentured workers."],
     ["Canada","Canada was not a source of indentured workers."]]),
   Q("e6u6-q30","e6u6-l4",2,"In *Mi a ron*, what does the small word *a* do?",3,[
     ["It says where something is.","That is the job of *de*."],
     ["It marks a negative past.","That is the job of *neva*."],
     ["It means “the”.","*Di* is the word for “the”."],
     ["It marks an action in progress.","Right. The sentence means “I am running”."]]),
   Q("e6u6-q31","e6u6-l4",1,"What is Standard Jamaican English?",1,[
     ["A creole with no relation to English","The two are related."],
     ["The English used in school, law and formal writing in Jamaica, with a Jamaican accent","Right. It is used beside Jamaican Creole."],
     ["A language of Spain","It is a variety of English."],
     ["A spelling reform","It is a variety of English."]]),
   Q("e6u6-q32","e6u6-l4",2,"What did DeCamp (1971) describe for Jamaica?",2,[
     ["A new alphabet","He described speech, not an alphabet."],
     ["A list of official languages","He described a range of speech."],
     ["A range of speech between creole and standard, with no sharp border","Right. It is called a post-creole continuum."],
     ["A school policy","He described speech, not policy."]]),
   Q("e6u6-q33","e6u6-l4",2,"Which label names the end of the continuum closest to standard English?",0,[
     ["Acrolect","Right. *Basilect* is the other end."],
     ["Basilect","This is the end furthest from standard English."],
     ["Mesolect","This is the wide middle."],
     ["Dialect","This is a general word, and it is not one of the three labels."]]),
   Q("e6u6-q34","e6u6-l4",3,"Kenji says, “A speaker uses the basilect or the acrolect, and never both.” What is wrong?",3,[
     ["Nothing is wrong.","Most speakers move along the range."],
     ["Nobody uses the acrolect.","Many speakers use forms close to standard English."],
     ["The labels name countries.","They name points on a range."],
     ["The labels name points on a range, and most speakers move along it by listener and place.","Right. They do not name types of people."]]),
   Q("e6u6-q35","e6u6-l4",2,"When did the *Empire Windrush* arrive at Tilbury?",1,[
     ["January 1949","This is when the British Nationality Act took effect."],
     ["June 1948","Right. The ship arrived with 1,027 passengers, most from the Caribbean."],
     ["1807","This is not the year of the Windrush voyage."],
     ["2018","In 2018, the Windrush scandal became public."]]),
   Q("e6u6-q36","e6u6-l4",3,"A website calls MLE “fake Jamaican”. What do researchers say?",2,[
     ["The website is right.","Researchers do not use this nickname."],
     ["MLE comes only from Jamaica.","Its sources are wider."],
     ["MLE draws on Caribbean English and creoles, on varieties from South Asia and Africa, and on traditional London English.","Right. Its speakers come from many backgrounds."],
     ["MLE does not exist.","Researchers have described it."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u6-q37","e6u6-l5",1,"What can the “Please call Stella” paragraph show?",0,[
     ["Pronunciation only","Right. The words are fixed, so grammar and words are not shown."],
     ["Grammar and code-switching","The text is fixed, so these are not shown."],
     ["Which creole a speaker uses","A reading in English cannot show this."],
     ["The speaker’s ethnicity","The archive does not give this."]]),
   Q("e6u6-q38","e6u6-l5",1,"Which word in the paragraph is a good place to listen for the *r* after a vowel?",2,[
     ["*Wednesday*","This word has no *r* after a vowel."],
     ["*snake*","This word has no *r*."],
     ["*store*","Right. *Her* and *brother* are other good words."],
     ["*thick*","This word has no *r*."]]),
   Q("e6u6-q39","e6u6-l5",2,"What are the three parts of a careful claim about a recording?",1,[
     ["A rank, a score and a name","This is not a careful claim."],
     ["What this speaker does, what is typical for the place, and a reminder that one speaker is one person","Right. This keeps the claim within the evidence."],
     ["A guess about the speaker’s ethnicity","The archive does not give this."],
     ["A joke, a name and a place","This is not a careful claim."]]),
   Q("e6u6-q40","e6u6-l5",2,"The archive says that the Harare speaker has lived in the US for nine years. Why does this matter for a listener?",3,[
     ["It shows that the speaker has no accent.","Every speaker has an accent."],
     ["It shows that the speaker is not from Zimbabwe.","The speaker is from Harare."],
     ["It shows that the speaker uses Creole.","The paragraph cannot show this."],
     ["Her speech may show both places, so one clip is not “the” accent of Zimbabwe.","Right. The facts of a speaker’s life limit what a clip can show."]]),
   Q("e6u6-q41","e6u6-l5",2,"Descriptions say that Ghanaian English is non-rhotic. Suppose a student hears an *r* after a vowel from a speaker from Accra. What is the best conclusion?",0,[
     ["It is a good observation: a tendency is not a rule, and one speaker is one person.","Right. Report it, and add the limit."],
     ["The speaker is not from Ghana.","Place does not depend on one feature."],
     ["The descriptions are wrong.","One speaker cannot show that a description is wrong."],
     ["The speaker made a mistake.","A pronounced *r* is not a mistake."]]),
   Q("e6u6-q42","e6u6-l5",3,"A listener says, “The Guyana speaker reads in English, so she cannot speak Hindi.” What is wrong?",2,[
     ["Nothing is wrong.","The archive says that she also speaks Hindi."],
     ["She does not read in English.","She reads the English paragraph."],
     ["A reading in English cannot show which other languages a person uses.","Right. The archive gives the languages, and the clip does not."],
     ["Hindi is a form of English.","Hindi is a different language."]]),
   Q("e6u6-q43","e6u6-l5",3,"Yuki finds a Nairobi clip hard to follow and says, “Kenyan English is too hard to understand.” What is the best reply?",1,[
     ["“You are right. It is hard for everyone.”","Difficulty depends on the listener’s experience."],
     ["“It was hard for you this time. Listen for the message first, then for one feature, and ask about new words.”","Right. It places the difficulty with the listener’s experience and gives a plan."],
     ["“Do not listen to it again.”","Repeated listening helps."],
     ["“Kenyans should change their English.”","Nobody needs to change an accent so that a listener can follow it."]]),
   Q("e6u6-q44","e6u6-l5",3,"Mariya, a student of English interpreting, wants to prepare for a talk by a speaker from Accra. What is the best plan?",2,[
     ["Wait and listen once on the day","A plan before the day reduces surprises."],
     ["Ask the speaker to talk in a different accent","Nobody should be asked to change an accent."],
     ["Listen to recordings in advance, note words that may be new, and ask the speaker about any word that is unclear","Right. Prepare, check and ask."],
     ["Learn only British words","The talk will use the speaker’s own words."]]),
   Q("e6u6-q45","e6u6-l5",3,"A classmate hears speakers from Lagos and Accra and says, “Both are non-rhotic in the descriptions, so West African English is the same in both places.” What is wrong?",0,[
     ["One shared feature does not define an accent. The two varieties differ in other ways, and one speaker is one person.","Right. Two varieties can share one feature and differ in others."],
     ["Nothing is wrong.","The conclusion goes beyond the evidence."],
     ["Both speakers must be rhotic.","The descriptions say non-rhotic for both."],
     ["Lagos and Accra are in the same country.","They are in two different countries."]])
  ]
});
})();
