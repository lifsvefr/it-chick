(function(){
/* World Englishes · Unit 5 (e6u5) · South and Southeast Asia */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u5", track:"e6", n:5, title:"South and Southeast Asia", icon:"🌏",
  blurb:"English is used every day in India, Pakistan, Sri Lanka, Bangladesh, Singapore, the Philippines and Malaysia, and in each place it has grown into its own system. This unit covers Indian English, the English of the rest of South Asia, Singapore English and its particles, Philippine English and Taglish, and Malaysian English. You hear 11 real speakers from 11 places. The last lesson is a listening lab on intelligibility, and it does not rank anyone.",
  goals:[
    "Describe Indian English: its history in brief, its official role, and its sounds, grammar and words, as features of a variety",
    "Compare English in Pakistan, Sri Lanka, Bangladesh and Nepal, and say why no single description fits them all",
    "Explain Standard and Colloquial Singapore English, the particles, and two models of the continuum between them",
    "Describe Philippine English, Taglish, Malaysian English and school language policy, with correct dates",
    "Use intelligibility, comprehensibility and interpretability to listen across Englishes, and describe a speaker without ranking"
  ],
  read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, sections 10.2 “Language varies” and 10.6 “Sociolinguistic correlations: Place”; Chapter 3, Phonetics, sections 3.5 “Describing vowels” and 3.12 “Tone and intonation”", note:"Read the Chapter 10 sections after Lessons 1 and 2, and section 3.12 before the listening lab. The book is written for linguistics students and is not about Asia, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u5-l1", title:"Indian English", minutes:55,
   hook:{q:"An email from a colleague in India says, “Please prepone the meeting.” What does *prepone* mean?", options:["To cancel the meeting","To move the meeting to an earlier time","To move the meeting to a later time","To make the meeting longer"], answer:1, reveal:"**To move it earlier.** *Prepone* is the opposite of *postpone*, and it is a regular word of Indian English. Many large dictionaries list it."},
   goals:[
     "Describe the official role of English in India, in careful words, and say who uses it",
     "Explain Kachru’s (1983) idea that Indian English is a nativized variety",
     "Describe retroflex sounds and other tendencies in pronunciation, with a hedge",
     "Give grammar features of Indian English that research documents, and say why they are features and not errors",
     "Use words such as *prepone*, *lakh*, *crore*, *do the needful* and *timepass*, and read numbers in lakh and crore"
   ],
   learn:[
    {h:"English in India today", body:[
      {lead:"In India, English is one language among many, and for millions of people it is part of daily life."},
      "India has a very large number of languages. The Constitution lists 22 of them in its Eighth Schedule, and people speak many more. Most Indians use more than one language every day. English is a language that they often learn at school and then use at work, in higher education and in national media.",
      "The official role of English is described in the Constitution of 1950. It named Hindi in the Devanagari script as the official language of the Union. It also allowed English to continue for official use for 15 years. Many people, especially in the south, did not want Hindi to replace English. The Official Languages Act of 1963 let English continue as an additional official language after 1965, An amendment in 1967 says that this can end only if every state that has not adopted Hindi, and both houses of Parliament, pass resolutions to end it. The legal details are complex, so check an official source before you quote them. States also have their own official languages.",
      "How many people use English? The Census of India of 2011 recorded English as the first language of a very small share of people, and as a second or third language of many more. In total, about one person in ten (about 10.6 percent) reported English as one of their languages. These numbers are self-reports, and estimates vary with the question that is asked. Most users of English in India are multilingual, so they are not “learners” who lack something. In Kachru’s model, India is in the [[we-outer-circle|outer circle]]. You can read about the model in {{we-kachru-circles}}."
    ]},
    {h:"A short history", body:[
      {lead:"English came to India through trade, then rule, and then schools."},
      "The East India Company began to trade on the coast in the early 1600s, and British rule grew over the next two centuries. Unit 2 tells this story in full, and {{we-second-diaspora}} gives the dates. Three dates matter here. In 1835, Thomas Macaulay wrote his *Minute on Indian Education*, and the government chose to spend its education money on teaching English. In 1857, the first universities opened in Calcutta, Bombay and Madras. In 1947, India became independent.",
      "After independence, India kept English for many tasks. The reasons were practical. English was already the language of the law, of higher education and of the civil service. It also gave people from different language areas a shared language, and it was not the first language of one large regional group. So English did not leave with the British. It became an Indian language of use, with Indian speakers as its main community."
    ]},
    {h:"Kachru and the Indianization of English", body:[
      {lead:"Braj Kachru was an Indian linguist who argued that Indian English is a variety in its own right."},
      "In his book *The Indianization of English: The English Language in India* (1983), Kachru described how English in India took on Indian forms, meanings and ways of speaking. Unit 2 calls this process [[we-nativization]]. Words, sounds and grammar from Indian languages entered English, and Indian writers used English for Indian life. Kachru also described a [[we-cline-of-bilingualism|cline of bilingualism]]: a scale from users with a little English to users who are very skilled in it. The scale is a reminder that users of English in India differ in skill, as users of any language do.",
      "The main idea is simple. If educated speakers in a community use a feature regularly, it is part of the variety. It is not a failed copy of another variety. This idea is the reason why this course says *feature* and not *mistake*. A feature is a pattern that is [[we-feature|systematic, shared and used by proficient speakers]]."
    ]},
    {h:"Sounds: tendencies, not rules", body:[
      {lead:"Indian English has many regional accents, and a few tendencies are often described."},
      "India has many first languages, and each one shapes the English of its speakers. A speaker whose first language is Tamil can sound different from one whose first language is Hindi or Bengali. So there is no single Indian accent. The following tendencies are described in the research (for example in Sailaja’s 2009 book *Indian English*), and each one applies to some speakers and not to others.",
      {list:[
        "**Retroflex /t/ and /d/.** Many speakers make /t/ and /d/ with the tip of the tongue curled back toward the roof of the mouth. A [[we-retroflex|retroflex]] sound is made this way. Many Indian languages have retroflex consonants, and English /t/ and /d/ are close to them.",
        "**/θ/ and /ð/.** Many speakers use a dental stop for the *th* of *thin* and *this*. The tongue touches the back of the upper teeth.",
        "**/v/ and /w/.** Many Indian languages do not separate these two sounds. For many speakers of Indian English, *vet* and *wet* have the same first sound, often a sound between /v/ and /w/. Other speakers keep the two apart.",
        "**The *r* sound.** Reports differ. Many speakers pronounce the *r* after a vowel, and some do not. The pattern depends on the speaker and the region.",
        "**Rhythm.** Many descriptions say that Indian English is more [[stress-timing|syllable-timed]] than General American. Unit 3 of How English Works explains that these labels describe tendencies and that researchers still debate them."
      ]},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Two ways to make /t/ (side view)</text><rect class="d-sage" x="20" y="30" width="300" height="120" rx="8" stroke-width="2"/><text x="170" y="50" text-anchor="middle">Alveolar /t/ (typical in GA)</text><path class="d-ink" d="M50 70Q150 62 290 84" fill="none" stroke-width="2"/><path class="d-lup" d="M60 128Q130 120 190 100Q215 90 225 84Q215 104 200 118Q130 140 60 128Z" stroke-width="2"/><text class="s" x="228" y="100">tip at the ridge</text><text class="s" x="228" y="116">behind the teeth</text><rect class="d-gold" x="20" y="162" width="300" height="120" rx="8" stroke-width="2"/><text x="170" y="182" text-anchor="middle">Retroflex /t/ (often described)</text><path class="d-ink" d="M50 202Q150 194 290 216" fill="none" stroke-width="2"/><path class="d-lup" d="M60 260Q130 252 190 236Q235 224 262 212Q250 232 220 244Q130 272 60 260Z" stroke-width="2"/><text class="s" x="52" y="222">teeth</text><text class="s" x="232" y="252">tip curled back</text></svg>', alt:"Two side views of the mouth, one above the other. In the first, the tongue tip touches the ridge behind the upper teeth. In the second, the tongue tip is curled back toward the roof of the mouth.", cap:"A simplified picture of the tongue. Real mouths are not this neat, and the difference is a matter of degree."},
      {ex:"Listen to a speaker from Mumbai reading the “Please call Stella” paragraph. The archive says that this speaker’s first language is English, that the speaker also uses Hindi-Urdu, and that the speaker has lived in India and the US. Notice the /t/ in *Stella* and *Wednesday*, and the *th* in *thick* and *these*. Do you hear the tongue touching the ridge, or further back? There is no single right answer. One speaker is one person.", label:"Listen: Mumbai", listen:"e6u5-l1-a1"},
      {ex:"A speaker from Chennai. The archive says that Tamil is the first language, that English came at school from age five, and that the speaker has spent two months in the US. Notice the same words. Then compare the speaker with Mumbai, and describe what is alike and what differs.", label:"Listen: Chennai", listen:"e6u5-l1-a2"},
      {ex:"A speaker from Thiruvananthapuram, Kerala (the archive uses the older name, Trivandrum). The first language is Malayalam, English came at school from age five, and the speaker has lived in the US for four and a half years. The paragraph is a reading, so it shows pronunciation only. Notice the *r* in *store* and *her*. Describe it in plain words.", label:"Listen: Thiruvananthapuram", listen:"e6u5-l1-a3"},
      {tip:"A speaker who says that Tamil is their first language is still a user of Indian English. In India, English is often learned at school and then used every day, so a person can be a full user of English without having it as the first language."}
    ]},
    {h:"Grammar: features that research documents", body:[
      {lead:"eWAVE (the [[we-ewave|electronic World Atlas of Varieties of English]]) lists many grammar features of Indian English. Here are four that descriptions of Indian English often mention."},
      "These patterns are reported for Indian English, and they are most common in speech. Educated speakers also write standard English, and many choose a different pattern in a formal letter. A speaker has a [[we-repertoire|repertoire]], and the choice depends on the setting.",
      {table:[["Feature","Example","Note"],["[[we-stative-progressive|Progressive with stative verbs]]","*She is knowing the answer.*","Also found in other varieties. *I’m loving this song* is common in the US."],["[[we-invariant-tag|Invariant tag]] *isn’t it?*","*You are coming tomorrow, isn’t it?*","One tag for every sentence. London English has *innit*."],["Emphatic *only*","*I live here only.* (right here)","It puts focus on the word before it."],["Emphatic *itself*","*He came yesterday itself.* (as early as yesterday)","It also puts focus on a time or place."]]},
      "Look at the first row. Standard English uses the simple present with verbs such as *know*, *have* and *love*, as in *She knows the answer.* But the progressive also appears with these verbs in many varieties, and in Indian English it is common. The pattern is regular. It is not random, and it is not a sign of weak English.",
      "How can you tell a feature from an error? Ask three questions. Is it systematic? Is it shared by a community? Do proficient speakers use it? If the answers are yes, linguists call it a feature of the variety. A slip that one person makes once, and corrects, is an error in that person’s speech."
    ]},
    {h:"Words and numbers", body:[
      {lead:"Indian English has its own words, and many come from Indian languages."},
      {table:[["Word","Meaning","Note"],["*prepone*","move to an earlier time","Formed on the pattern of *postpone*."],["*lakh*","100,000","From Hindi. Used in much of South Asia."],["*crore*","10,000,000 (100 lakh)","From Hindi."],["*do the needful*","do what is necessary","Common in formal letters. Some find it old-fashioned."],["*timepass*","an activity to pass the time, or light entertainment","Informal."]]},
      "*Lakh* and *crore* come with their own way of writing big numbers. Indian numbering, counting from the right, puts the first comma after three digits and then a comma after every two. So 1,234,567 is written 12,34,567, and it is read as “twelve lakh thirty-four thousand five hundred sixty-seven”. Learn to read both systems, because you meet them in Indian newspapers, prices and reports.",
      "A writer who sends a message abroad can choose to explain a local word, or to use a plainer one. Readers who know *do the needful* understand it at once. Readers who do not may need a clearer request, such as “please send me the file”. This is a matter of accommodation. It is not a correction. We look at accommodation in Unit 8."
    ]},
    {h:"What to remember", body:[
      "Indian English is a family of Englishes, and its speakers include people who learned English first and people who learned Hindi, Tamil, Bengali or another language first. It has an official role beside Hindi, a long history in schools, and features of sound, grammar and vocabulary that research describes.",
      {key:"A feature is a regular pattern that educated speakers share. Retroflex sounds, the *isn’t it?* tag, *prepone* and *crore* are features of Indian English. They are not mistakes, and no single speaker shows all of them."}
    ]}
   ],
   try:[
    M("e6u5-l1-x1","Which statement about English in India is the most accurate?",1,[
      ["English is the first language of most Indians.","Census figures show that only a very small share report English as the first language."],
      ["English has an official role beside Hindi, and it is used in education and business, mostly by people who also speak other languages.","Right. The 1963 Act let English continue as an additional official language."],
      ["English is used only by people who were born in the inner circle.","Most users of English in India were born in India."],
      ["English is spoken in India only in the cities of the south.","English is used in many parts of the country, and the debate about Hindi was strongest in the south."]
    ]),
    {id:"e6u5-l1-x2", type:"sort", q:"Is each item a feature of sound, a feature of grammar, or a word?", buckets:["Sound","Grammar","Word"], items:[
      {t:"Retroflex /t/ and /d/", b:0, why:"This describes how a consonant is made."},
      {t:"The tag *isn’t it?* for every sentence", b:1, why:"A tag is part of grammar."},
      {t:"*prepone*", b:2, why:"It is a single word with a clear meaning."},
      {t:"A progressive with a stative verb, as in *She is knowing*", b:1, why:"It is a choice of verb form."},
      {t:"*crore*", b:2, why:"It is a word for a number."},
      {t:"/v/ and /w/ as one sound for some speakers", b:0, why:"It describes consonant sounds."},
      {t:"Emphatic *only*, as in *I live here only*", b:1, why:"It is a pattern for placing focus in a sentence."},
      {t:"*timepass*", b:2, why:"It is a word with a local meaning."}
    ]},
    {id:"e6u5-l1-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Macaulay writes his *Minute on Indian Education* (1835)", why:"This is the earliest date in the list."},
      {t:"The first universities open in Calcutta, Bombay and Madras (1857)", why:"This came 22 years after the Minute."},
      {t:"India becomes independent (1947)", why:"This ended British rule."},
      {t:"The Constitution of India begins to work (1950)", why:"It came three years after independence."},
      {t:"Parliament passes the Official Languages Act (1963)", why:"This allowed English to continue after the first 15 years."},
      {t:"Kachru publishes *The Indianization of English* (1983)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u5-l1-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Retroflex","A sound made with the tongue tip curled back","Many Indian languages have retroflex consonants."],
      ["*prepone*","To move to an earlier time","It is formed on the pattern of *postpone*."],
      ["*lakh*","100,000","It is used in much of South Asia."],
      ["*crore*","10,000,000","It equals 100 lakh."],
      ["*do the needful*","To do what is necessary","It is common in formal writing."]
    ]},
    {id:"e6u5-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Indian English has one accent, the same for the whole country.", flag:true, why:"India has many first languages and regions, and English there has many accents."}, " ", {t:"The tag *isn’t it?* is documented in eWAVE as a feature of Indian English.", flag:false, why:"Correct. It is one of the features that eWAVE lists."}, " ", {t:"A person whose first language is Tamil is not a real user of Indian English.", flag:true, why:"In India, English is often learned at school and used every day, so a speaker with Tamil as the first language is a full user of Indian English."}, " ", {t:"A retroflex sound is made with the tongue tip curled back.", flag:false, why:"Correct. That is how the term is defined."}, " ", {t:"Speakers of Indian English cannot say the sound /w/.", flag:true, why:"This overgeneralizes. Some speakers use one sound for /v/ and /w/, and others keep them apart. Using one sound for both is a pattern, and it does not mean that a speaker cannot make a sound."}, "”"
    ]},
    {id:"e6u5-l1-x6", type:"number", q:"A news report says that a house costs 3.5 lakh rupees. How many rupees is that?", answer:350000, tol:0, unit:"rupees", why:"One lakh is 100,000. So 3.5 lakh is 3.5 × 100,000 = 350,000.", wrongs:[{v:35000, tol:0, why:"You may have used 10,000 for one lakh. One lakh is 100,000."},{v:3500000, tol:0, why:"This is 35 lakh. Check the decimal point: 3.5 lakh is 350,000."}], hint2:"Multiply 3.5 by 100,000."},
    M("e6u5-l1-x7","You will hear a speaker from Chennai. The archive says that Tamil is the first language and that English started at school at age five. As the lesson explains, there is no single Indian accent. Whatever you hear, which statement is the most careful?",2,[
      ["“This is how all Indian speakers sound.”","One speaker cannot show a pattern for a whole country."],
      ["“This speaker is not a real speaker of English, because Tamil is the first language.”","In India, English is often learned at school and used every day, so this speaker is a user of Indian English."],
      ["“I can describe what I hear in this one speaker, and it may not match the typical patterns I read about.”","Right. It describes the evidence and keeps to what one recording can show."],
      ["“The paragraph shows that this speaker uses the tag *isn’t it?*.”","The paragraph is a reading, so it shows pronunciation and not grammar."]
    ], {listen:"e6u5-l1-a4", hint:"Choose the claim that stays within the evidence. The right answer does not depend on what the speaker does."}),
    {id:"e6u5-l1-x8", type:"explain", q:"Lukas works in Germany. A colleague in India writes to him: “Please prepone the meeting to Tuesday, and kindly do the needful.” Lukas thinks the colleague made two mistakes. Explain, kindly, what is going on.", size:"3–5 sentences", prompt:"Lukas could reply that …", hint:"Think about *prepone*, *do the needful*, and the difference between a feature and a mistake.", points:["Says that prepone means to move the meeting earlier","Says that do the needful means to do what is necessary","Explains that both are regular words of Indian English, not mistakes","Suggests checking or using plainer words for a reader who does not know them"], model:"Lukas could explain that *prepone* means “move to an earlier time”, and *do the needful* means “do what is necessary”. Both are regular words in Indian English, and many educated speakers use them, so they are features of the variety and not mistakes. If Lukas is not sure, he can check, for example by asking, “Do you mean an earlier time on Tuesday?” When he writes back, he can also choose plain words that a wide range of readers know."}
   ],
   apply:{
    intro:"These tasks use free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Look up four words", how:[
       "Open a large online dictionary. Look up *prepone*, *lakh*, *crore* and *timepass*.",
       "For each word, write whether it is listed, and whether the dictionary labels it as Indian English or as South Asian English.",
       "Write one sentence of your own with each word that is listed."
     ], write:"prepone… lakh… crore… timepass… Listed? Labeled?"},
     {t:"Read numbers in two systems", how:[
       "Write these numbers in Indian style. Count from the right: put a comma after the first three digits and then after every two: 250000, 1500000, 20000000.",
       "Write each number in words using *lakh* or *crore*.",
       "Write one sentence that explains the difference between the two comma systems."
     ], write:"2,50,000 = 2.5 lakh… 15,00,000 = … 2,00,00,000 = …"}
    ],
    proof:"A table of four words with notes on how a dictionary lists them, and three numbers written in Indian style and in words."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"This section shows how place and speech are linked. Indian English has many regional accents, and the section helps you think about why."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u5-l2", title:"South Asia beyond India", minutes:55,
   hook:{q:"Nepal was never ruled by Britain. Yet English is widely taught and used there. Which statement is the most accurate?", options:["This is impossible, because English spreads only through colonial rule.","English can also spread through schools, trade, media and migration, without colonial rule.","English in Nepal is the first language of most people.","Nepal is in the inner circle."], answer:1, reveal:"**English can spread without colonial rule.** Nepal was not a British colony, but contact with British India, schools, media and work abroad made English widely used. Kachru’s model usually places Nepal in the expanding circle, and some scholars say that its use of English blurs the line."},
   goals:[
     "Compare the paths of English in Pakistan, Sri Lanka, Bangladesh and Nepal, with correct dates",
     "Explain what the South Asian countries share and where they differ, as tendencies",
     "Describe Sri Lankan English as its own scholars describe it, with a hedge",
     "Describe, in neutral words, how English and other languages are used in schools"
   ],
   learn:[
    {h:"One start, different paths", body:[
      {lead:"Pakistan, Sri Lanka and Bangladesh were all ruled by Britain, and each one now has its own language policy and its own English."},
      "Lesson 1 looked at India. In this lesson, we look at four more countries. Three of them were part of the British Empire, and the fourth was not. All four are multilingual, and in each one English has a different role. The table gives a first picture. The rows are simplified, so the text below adds detail.",
      {table:[["Country","Independence","Languages in law and policy"],["Pakistan","14 August 1947","Urdu is the national language. English may be used officially until replaced by Urdu."],["Sri Lanka","4 February 1948","Sinhala and Tamil are official languages. English is the link language."],["Bangladesh","Declared 26 March 1971","Bangla is the state language."],["Nepal","Never ruled by Britain","Nepali is the official language. Other mother tongues are national languages."]]},
      "Education is a part of all four stories, and so is the question of which language a family chooses for a child. Keep this in mind as you read: a country’s law and its daily use of English are not always the same."
    ]},
    {h:"Pakistan", body:[
      {lead:"In Pakistan, Urdu is the national language and English has a strong role in law, government, higher education and business."},
      "Pakistan became independent on 14 August 1947. The Constitution of 1973 names Urdu as the national language. Article 251 says that steps are to be taken to use Urdu for official purposes within 15 years, and that English may continue to be used for official purposes until arrangements are made to replace it with Urdu. In practice, English has stayed in many fields. Pakistan has many regional languages too, such as Punjabi, Sindhi, Pashto and Balochi, and Urdu is the first language of only a minority of people. Many more use it as a second language.",
      "Researchers have described Pakistani English as a variety with its own pronunciation, words and grammar. Its sounds and vocabulary share some tendencies with Indian English, because the two countries share a history and some languages. Mahboob and Ahmar (2004) wrote a well-known overview of its phonology. The two varieties are not the same, and the words that Pakistani English takes from Urdu and regional languages are one difference.",
      {ex:"Listen to a speaker from Islamabad. The archive says that Urdu is the first language, that English came at school from age four, and that the speaker has lived in the US for four years. Notice the *r* in *store* and *her*, and the vowel in *ask*. Describe what you hear. There is no single right answer, and one speaker is one person.", label:"Listen: Islamabad", listen:"e6u5-l2-a1"}
    ]},
    {h:"Sri Lanka", body:[
      {lead:"Sri Lanka is a small island with a long history of contact with outside powers, and its English has been described by its own scholars."},
      "Ceylon, as the island was then called, had long contact with outside powers. The Portuguese ruled coastal areas from the 1500s, and the Dutch took most of the coast in the 1600s. The kingdom of Kandy, in the center, stayed independent. Britain took the Dutch areas in 1796, and it took Kandy and ruled the whole island from 1815. Ceylon became independent on 4 February 1948, and it took the name Sri Lanka in 1972. English was the language of government and of the best-known schools.",
      "The language question was painful. In 1956, the Official Language Act, often called the Sinhala Only Act, made Sinhala the one official language. Many Tamil speakers saw this as unfair, and it was a cause of long disputes. The Thirteenth Amendment of 1987 made Sinhala and Tamil official languages, and it named English as the link language between the language communities. The word [[we-link-language|link language]] means a language that people with different first languages use to talk to each other. We saw the same idea in Unit 1, under *lingua franca*.",
      "Scholars in Sri Lanka have argued that Sri Lankan English is a variety with its own identity. Gunesekera (2005) and Meyler (2007, a dictionary of Sri Lankan English) are two well-known examples. Researchers report words from Sinhala and Tamil, and some from Portuguese and Dutch. They also report English words with a local meaning, such as *short eats* (small snacks). As in all varieties, speakers differ by first language, school and region.",
      {ex:"Listen to a speaker from Colombo. The archive says that Sinhala is the first language, that the speaker also uses Tamil, that English started at age 12, and that the speaker has lived in the US for five years. Notice the *r* and the vowels in *snack* and *ask*. Describe the sounds in plain words.", label:"Listen: Colombo", listen:"e6u5-l2-a2"}
    ]},
    {h:"Bangladesh", body:[
      {lead:"In Bangladesh, the story of the national language is also a story of English in school."},
      "Bangladesh was part of British India. From 1947 it was the eastern part of Pakistan, first called East Bengal and later East Pakistan. In 1952, students and others in Dhaka protested for Bangla to be a state language of Pakistan, and some of them were killed. This is the Language Movement, and 21 February is remembered each year as International Mother Language Day. Bangladesh declared independence on 26 March 1971, and the war ended on 16 December 1971. The Constitution says that the state language is Bangla.",
      "English is a required subject in school, and families can choose between several kinds of school, such as Bangla-medium and English-medium schools. English is used in higher education, business, law and some media. Fewer studies describe Bangladeshi English than Indian English. That is a limit of the research, so be careful with general claims.",
      {ex:"Listen to a speaker from Dhaka. The archive says that Bengali is the first language, that English started at school at age 16, and that the speaker has lived in the US for one year. Notice the same words. Describe what you hear. One speaker is one person, and one reading does not show how this person speaks in other settings.", label:"Listen: Dhaka", listen:"e6u5-l2-a3"}
    ]},
    {h:"Nepal", body:[
      {lead:"Nepal shows that English does not need a colonial past to become part of a country’s life."},
      "Britain never ruled Nepal, but the country had close contact with British India. English-medium schools, often private, became popular, and English is taught from the early years. English is also the language of much tourism, of work abroad and of the internet. Nepali is the official language, and since the 2015 Constitution all mother tongues are described as national languages. Nepal has more than a hundred languages.",
      "In Kachru’s model, Nepal is usually placed in the expanding circle, since English has no official role there. Some scholars say that its everyday use in schools and media is closer to the outer circle. The example shows that the circles are a simple model and that real countries do not always fit them (Unit 1, Lesson 4)."
    ]},
    {h:"What the countries share, and where they differ", body:[
      {lead:"A shared region gives shared tendencies, and each country adds its own."},
      "Researchers report some tendencies in several South Asian Englishes. One is the retroflex /t/ and /d/ from Lesson 1. Another is a dental stop for the *th* sounds. A third is the use of words from Urdu, Hindi, Bangla and other languages, such as *lakh*, which is used in much of the region. These tendencies are not the same in each place or for each speaker.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Dates in this lesson</text><line class="d-ink" x1="44" y1="34" x2="44" y2="316" stroke-width="2"/><circle class="d-sage" cx="44" cy="50" r="7" stroke-width="2"/><text x="64" y="55">1947 · Pakistan is independent</text><circle class="d-lup" cx="44" cy="88" r="7" stroke-width="2"/><text x="64" y="93">1948 · Ceylon is independent</text><circle class="d-gold" cx="44" cy="126" r="7" stroke-width="2"/><text x="64" y="131">1952 · Language Movement in Dhaka</text><circle class="d-rose" cx="44" cy="164" r="7" stroke-width="2"/><text x="64" y="169">1956 · Sinhala Only Act</text><circle class="d-sage" cx="44" cy="202" r="7" stroke-width="2"/><text x="64" y="207">1971 · Bangladesh is independent</text><circle class="d-lup" cx="44" cy="240" r="7" stroke-width="2"/><text x="64" y="245">1973 · Pakistan’s Constitution</text><circle class="d-gold" cx="44" cy="278" r="7" stroke-width="2"/><text x="64" y="283">1987 · Sri Lanka’s 13th Amendment</text><text class="s" x="64" y="306">Nepal: never ruled by Britain</text></svg>', alt:"A vertical timeline with seven dates: 1947 Pakistan is independent, 1948 Ceylon is independent, 1952 the Language Movement in Dhaka, 1956 the Sinhala Only Act, 1971 Bangladesh is independent, 1973 Pakistan’s Constitution, 1987 Sri Lanka’s 13th Amendment. A note says that Nepal was never ruled by Britain.", cap:"Key dates in this lesson. The dates of independence are the dates on which each state began to rule itself."},
      "The differences are real. The language mix is different in each country, so the contact languages are different. School systems are different, and so are the roles of English in law and government. For these reasons, do not describe a South Asian variety as “like Indian English” without saying what you mean. A careful claim names the feature and the place."
    ]},
    {h:"English and other languages in schools", body:[
      {lead:"Language in school is a topic on which people disagree, and each view has reasons."},
      "In India, the national education policy has long recommended a three-language formula, in which students study their regional language, Hindi or another language, and English. The National Education Policy of 2020 says that, wherever possible, the home language or a local language should be the medium of instruction at least until Grade 5. Education is shared between the central and state governments, so practice differs from state to state.",
      "In all the countries of this lesson, families often see English as a route to study and work. Others worry that English-medium schools usually cost more, so they may increase inequality, and that home languages can lose status. Researchers on language policy also point to evidence that children learn well in a language they know. Both concerns are real. A fair summary reports each view and the evidence for it, and it does not decide for the reader.",
      {key:"South Asian Englishes share a history and some tendencies, and they differ in law, schools and contact languages. A careful claim names the feature and the place."}
    ]}
   ],
   try:[
    M("e6u5-l2-x1","Which statement about Nepal and English is the most accurate?",1,[
      ["Nepal was a British colony, so English is an official language of the country.","Nepal was never ruled by Britain, and Nepali is the official language."],
      ["Nepal was not a British colony. English spread through schools, trade, media and work abroad, and Kachru’s model usually places it in the expanding circle.","Right. It shows that English can spread without colonial rule."],
      ["English is the first language of most people in Nepal.","Most people in Nepal speak Nepali or another local language as their first language."],
      ["English is not taught in Nepal.","English is taught in many schools, often from the early years."]
    ]),
    {id:"e6u5-l2-x2", type:"sort", q:"Which country does each fact belong to?", buckets:["Pakistan","Sri Lanka","Bangladesh"], items:[
      {t:"Article 251 says that English may be used officially until Urdu replaces it", b:0, why:"This is from the Constitution of 1973."},
      {t:"The Thirteenth Amendment of 1987 names English the link language", b:1, why:"It also made Sinhala and Tamil official languages."},
      {t:"The Language Movement of 1952 began in Dhaka", b:2, why:"Dhaka is now the capital of Bangladesh."},
      {t:"The Sinhala Only Act of 1956", b:1, why:"It made Sinhala the one official language."},
      {t:"Independence was declared on 26 March 1971", b:2, why:"The war ended on 16 December 1971."},
      {t:"Independence came on 14 August 1947", b:0, why:"This is the date of Pakistan’s independence."},
      {t:"The country was called Ceylon until 1972", b:1, why:"It took the name Sri Lanka in 1972."}
    ]},
    {id:"e6u5-l2-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Ceylon becomes independent (1948)", why:"This is the earliest date in the list."},
      {t:"The Language Movement in Dhaka (1952)", why:"This came four years after Ceylon’s independence."},
      {t:"The Sinhala Only Act (1956)", why:"This came four years after the Language Movement."},
      {t:"Bangladesh declares independence (1971)", why:"This came 15 years after the Sinhala Only Act."},
      {t:"Sri Lanka’s Thirteenth Amendment (1987)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u5-l2-x4", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Link language","A language that people with different first languages use to talk to each other","English has this role in Sri Lanka’s Thirteenth Amendment."],
      ["Language Movement","The protests of 1952 for Bangla","It is remembered on 21 February."],
      ["*short eats*","Small snacks, in reports on Sri Lankan English","It shows a local use of English words."],
      ["Article 251","The part of Pakistan’s Constitution about Urdu and English","It was written in 1973."],
      ["Expanding circle","Where English has no official role, such as Nepal in Kachru’s model","The model is a simplification."]
    ]},
    {id:"e6u5-l2-x5", type:"spot", q:"A student wrote these notes after Lesson 2. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Nepal was a British colony.", flag:true, why:"Nepal was never ruled by Britain, although it had contact with British India."}, " ", {t:"Sri Lankan scholars have argued that Sri Lankan English is a variety with its own identity.", flag:false, why:"Correct. Gunesekera (2005) is one example."}, " ", {t:"English is the first language of most people in Pakistan.", flag:true, why:"This is wrong. Most people in Pakistan have Urdu, Punjabi or another language as their first language."}, " ", {t:"All South Asian Englishes are the same as Indian English.", flag:true, why:"They share some tendencies, but each has its own contact languages, history and policies."}, " ", {t:"Bangladesh declared independence in 1971.", flag:false, why:"Correct. The date of the declaration is 26 March 1971."}, "”"
    ]},
    {id:"e6u5-l2-x6", type:"number", q:"Ceylon became independent in 1948. Sri Lanka’s Thirteenth Amendment was passed in 1987. How many years were there between the two dates?", answer:39, tol:0, unit:"years", why:"1987 − 1948 = 39 years.", wrongs:[{v:49, tol:0, why:"This adds 10 by mistake. Check: 1948 + 39 = 1987."},{v:29, tol:0, why:"This takes away 10 by mistake. Check: 1948 + 39 = 1987."}], hint2:"Subtract 1948 from 1987."},
    M("e6u5-l2-x7","You will hear a speaker from Colombo. The archive says that Sinhala is the first language, that the speaker also uses Tamil, that English started at age 12, and that the speaker has lived in the US for five years. Whatever you hear, which statement is the most careful?",3,[
      ["“This is the sound of Sri Lankan English.”","One speaker is not the sound of a whole country."],
      ["“This speaker’s accent comes only from Sinhala.”","An accent can be shaped by several languages, by school and by later experience. One recording cannot show which cause matters."],
      ["“This speaker has spent five years in the US, so the speaker has lost the Sri Lankan accent.”","Nobody can say this from a recording, and *lost* is a judgment. A speaker can keep features from several places."],
      ["“I can describe what I hear. Many things can shape one person’s speech, so I will not claim to know the cause.”","Right. It describes the evidence and avoids a claim that one recording cannot support."]
    ], {listen:"e6u5-l2-a4", hint:"The answer does not depend on what the speaker does. Choose the claim that stays within the evidence."}),
    {id:"e6u5-l2-x8", type:"explain", q:"A classmate says, “Indian English, Pakistani English and Sri Lankan English are all the same thing, because they are all South Asian.” Give a short, fair answer.", size:"3–5 sentences", prompt:"These varieties share some things, but …", hint:"Think about shared history, shared tendencies, and what is different in each country.", points:["Says that the varieties share some history and tendencies, such as retroflex sounds or some words","Says that each country has its own language mix and contact languages","Says that law and school policy differ between the countries","Concludes that a careful claim names the feature and the place"], model:"These varieties share some history, because all three countries were part of British India or the British Empire, and they share some tendencies, such as retroflex sounds and some words. But each country has its own mix of languages, so the contact languages differ. Their policies on schools, law and official languages differ too. For this reason, a careful claim names the feature and the place, for example “Sri Lankan English has *short eats* in the reports I read”, and it does not say that all of South Asia is the same."}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Make a country card", how:[
       "Choose one of the four countries in this lesson.",
       "Find its official languages on an official government page or a United Nations page. Write them down with the source.",
       "Write three sentences about the role of English there. Use *typical* or *often* where you are not sure."
     ], write:"Country… official languages… three sentences with typical or often…"},
     {t:"Compare two recordings", how:[
       "Listen again to two of the three recordings in this lesson. Choose the *r* in *store* and the vowel in *ask* as the two points to check.",
       "Write what you hear in plain words, for example “r pronounced” or “not sure”.",
       "Write one sentence that begins “I cannot conclude that … because …”."
     ], write:"Speaker A… Speaker B… I cannot conclude that…"}
    ],
    proof:"A country card with sources, and a short table of two recordings with one careful sentence about what the recordings cannot show."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"This section sets out why variation is regular. It helps when you compare the Englishes of neighboring countries."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u5-l3", title:"Singapore English", minutes:55,
   hook:{q:"A visitor in Singapore hears someone answer a question with just “Can!” What does this most likely mean?", options:["“I cannot do it.”","“Yes, that is possible.”","“Please say it again.”","“I do not know.”"], answer:1, reveal:"**“Yes, that is possible.”** *Can* is a full answer in colloquial Singapore English. It means yes, or it is allowed, or it is possible. *Cannot* is the matching answer for no. This is a regular feature of the variety."},
   goals:[
     "Describe the language situation in Singapore, and say what Standard and Colloquial Singapore English are",
     "Explain the continuum model (Platt 1975) and the diglossia model (Gupta 1994)",
     "Describe the particles *lah*, *leh* and *lor* with careful, hedged meanings",
     "Describe the Speak Good English Movement (2000) in neutral words, and place Singapore in Schneider’s model",
     "Say what a reading of the “Please call Stella” paragraph can and cannot show about Singapore English"
   ],
   learn:[
    {h:"A small country with many languages", body:[
      {lead:"Singapore is a small island with four official languages, and English is the one that people share."},
      "As Unit 2 explains, Stamford Raffles set up a trading post in 1819, and Singapore became independent on 9 August 1965. People came from southern China, Malaya, the Indian subcontinent and other places. Today the four official languages are English, Malay, Mandarin and Tamil, and Malay is the national language. Since the bilingual policy of 1966, children study English and a “mother tongue”, which is Mandarin, Malay or Tamil for most students.",
      "English is the main language of school, government and business. It is also the language that connects people of different backgrounds. Many families use English at home, and many use several languages. A single Singaporean can use English, a Chinese language such as Hokkien or Mandarin, and Malay or Tamil in one day. For this reason, researchers describe Singapore as a place where people have a rich [[we-repertoire|repertoire]]."
    ]},
    {h:"Two ends of a range", body:[
      {lead:"Most researchers describe two main kinds of English in Singapore: a standard one and a colloquial one."},
      "[[we-sse|Standard Singapore English]] (SSE) is the English of schools, news, formal writing and formal speech. Its grammar and most of its vocabulary are close to other standard Englishes, and it has a local pronunciation and some local words, such as *hawker centre* for an open-air food court.",
      "[[we-cse|Colloquial Singapore English]] (CSE) is the English of informal talk with friends and family. It has its own grammar patterns and particles. Many people call it *Singlish*. That name is popular, and some people like it as a sign of identity. Many scholars use CSE as a neutral technical term. This course uses both names and does not treat either as a judgment.",
      "Most Singaporeans move between the two ends. A person can use SSE in a job interview and CSE with friends after work. Moving between them is a skill, like [[code-switching]], and it shows that the speaker controls both."
    ]},
    {h:"Two models: a continuum and a diglossia", body:[
      {lead:"Scholars have used two models to describe how SSE and CSE relate."},
      "John Platt (1975) described a [[we-speech-continuum|speech continuum]]. At one end is the acrolect, the form closest to standard English. At the other end is the basilect, the most colloquial form. In between is the mesolect. Platt used the word *creoloid* for the basilect, which means something like “creole-like”. Some later scholars find that word controversial. The idea of the continuum is that the speech of most people falls somewhere along the line, and a person can move along it.",
      "Anthea Fraser Gupta (1994), in *The Step-Tongue*, argued for [[we-diglossia|diglossia]]. In this model, a community has two distinct varieties for different settings, a formal one and an informal one, and speakers learn which one fits which setting. She emphasized that speakers choose between them, and she described features that belong to one variety and not the other.",
      "The two models do not have to be rivals. A continuum emphasizes the many steps in between, and diglossia emphasizes the two clear ends. Both are tools. Many scholars use one or the other according to what they want to explain.",
      {fig:'<svg viewBox="0 0 340 320"><text x="170" y="18" text-anchor="middle">Two ways to picture Singapore English</text><rect class="d-sage" x="20" y="32" width="300" height="130" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">Continuum (Platt 1975)</text><path class="d-ink" d="M50 92H290" stroke-width="2"/><path class="d-inkf" d="M290 92l-9 -5v10z"/><circle class="d-sage" cx="70" cy="92" r="8" stroke-width="2"/><circle class="d-gold" cx="170" cy="92" r="8" stroke-width="2"/><circle class="d-rose" cx="270" cy="92" r="8" stroke-width="2"/><text class="s" x="70" y="122" text-anchor="middle">acrolect</text><text class="s" x="170" y="122" text-anchor="middle">mesolect</text><text class="s" x="270" y="122" text-anchor="middle">basilect</text><text class="s" x="170" y="148" text-anchor="middle">Many steps. A speaker can move along.</text><rect class="d-lup" x="20" y="176" width="300" height="130" rx="8" stroke-width="2"/><text x="170" y="196" text-anchor="middle">Diglossia (Gupta 1994)</text><rect class="d-soft" x="40" y="212" width="120" height="44" rx="6" stroke-width="2"/><text class="s" x="100" y="238" text-anchor="middle">Standard (formal)</text><rect class="d-soft" x="180" y="212" width="120" height="44" rx="6" stroke-width="2"/><text class="s" x="240" y="238" text-anchor="middle">Colloquial (informal)</text><text class="s" x="170" y="280" text-anchor="middle">Two clear varieties. Speakers</text><text class="s" x="170" y="296" text-anchor="middle">choose between them by setting.</text></svg>', alt:"Two panels. The top panel shows a line with three points named acrolect, mesolect and basilect, and says that a speaker can move along it. The bottom panel shows two boxes, standard for formal settings and colloquial for informal ones, and says that speakers choose between them.", cap:"Two models of the relation between standard and colloquial Singapore English. Both are simplified."}
    ]},
    {h:"Features of colloquial Singapore English", body:[
      {lead:"CSE has grammar patterns that researchers have described, and they follow rules."},
      "The patterns below are described in studies such as Lim (2004, a collection on the grammar of Singapore English) and Deterding (2007). They belong to informal speech. In formal writing, Singaporeans use the standard forms.",
      {table:[["Pattern","Example","Meaning"],["No *be* before an adjective","*This one very nice.*","This one is very nice."],["*already* for a finished event","*I eat already.*","I have eaten."],["*can* as a full answer","*Can!*","Yes, that is possible."],["Topic first","*This one, I like.*","I like this one."]]},
      "Scholars debate where these patterns come from. Some point to Chinese languages such as Hokkien and Cantonese, some to Malay, and some to patterns that appear in many languages that meet English. A likely answer is a mix, and the debate continues. Whatever the source, the patterns are regular and shared, so they are features of the variety."
    ]},
    {h:"Particles: lah, leh and lor", body:[
      {lead:"A [[we-discourse-particle|discourse particle]] is a short word at the end of a phrase that adds a feeling or a stance."},
      "Unit 4 introduced *eh* in Canadian English as a [[we-discourse-marker|discourse marker]]. Singapore English has several particles, and *lah*, *leh* and *lor* are the best known. Gupta (1992) wrote an early study of them. The meaning of a particle depends on tone, context and speaker, and researchers do not agree on every detail. These are cautious summaries.",
      {table:[["Particle","A cautious summary","Example"],["*lah*","Adds a friendly, firm or insistent tone. It can soften a refusal or stress a point.","*Can lah.* (Yes, it is fine.)"],["*leh*","Often softens a statement, and can add a mild request or complaint.","*Wait a bit leh.* (Please wait a little.)"],["*lor*","Often shows that something is obvious, or that the speaker accepts it.","*Okay lor.* (All right, then.)"]]},
      {tip:"This lesson asks you to understand the particles. It does not ask you to use them. Using a particle well depends on tone and on your relationship with the listener, and a visitor who copies them can sound unnatural. Listening and asking are better."},
      "A reading of the “Please call Stella” paragraph does not contain particles. The paragraph is a written text read aloud, so it shows pronunciation only. It cannot show grammar, particles or code-switching, which belong to talk between people."
    ]},
    {h:"The Speak Good English Movement, and Schneider’s model", body:[
      {lead:"Language in Singapore is a public topic, and the government has run campaigns about it."},
      "The Speak Good English Movement began in 2000. It is a government campaign that encourages Singaporeans to speak standard English that is understood around the world. Its supporters say that SSE helps in school, at work and in international business, and that it makes Singapore easier to understand abroad. Critics say that CSE is a real part of Singaporean identity, that most speakers can use both varieties, and that a campaign can make speakers of CSE feel judged. Both views have reasons, and a fair account reports them without choosing.",
      "In Schneider’s Dynamic Model (2003, 2007), which you met in Unit 2, Singapore English is usually placed in Phase 4, endonormative stabilization. Other scholars debate this placement, and the picture is not simple. The model is a tool, and Singapore is a good case for seeing both how useful it is and where it stops.",
      {ex:"Listen to a speaker from Singapore reading the “Please call Stella” paragraph. The archive says that English is the first language, that the speaker also uses Mandarin and Hainanese, and that this person has always lived in Singapore. Notice the end of words such as *thick* and *snack*, and the *th* in *these* and *thick*. There is no single right answer. One speaker is one person, and a reading is not casual talk.", label:"Listen: Singapore, speaker 1", listen:"e6u5-l3-a1"},
      {ex:"A second speaker from Singapore. The archive says that English is the first language, that the speaker also uses Mandarin, Hokkien, Cantonese and Hainanese, and that this person has always lived in Singapore. Notice the same words, and compare with the first speaker. Describe what is alike and what is different, in plain words.", label:"Listen: Singapore, speaker 2", listen:"e6u5-l3-a2"},
      {key:"Singapore English is a range from standard to colloquial, and speakers move along it. Colloquial Singapore English is a regular system with its own grammar and particles. It is not broken English."}
    ]}
   ],
   try:[
    M("e6u5-l3-x1","Which statement about colloquial Singapore English (CSE) is the most accurate?",2,[
      ["It is broken English that comes from a lack of education.","CSE is used by many educated people, and it has regular rules."],
      ["It is the only English that Singaporeans use.","Most Singaporeans also use Standard Singapore English."],
      ["It is a regular variety with its own grammar patterns and particles, and many speakers also use Standard Singapore English.","Right. Researchers describe it as a system, and speakers choose between the two."],
      ["It is the same as British English.","It has features that British English does not have, such as particles."]
    ]),
    {id:"e6u5-l3-x2", type:"sort", q:"Which scholar’s model does each statement belong to?", buckets:["Platt (1975)","Gupta (1994)"], items:[
      {t:"A line from acrolect to basilect, with a mesolect in the middle", b:0, why:"This is the continuum model."},
      {t:"Two distinct varieties for different settings, formal and informal", b:1, why:"This is the diglossia model."},
      {t:"The word *creoloid* for the most colloquial end", b:0, why:"Platt used this word in his title."},
      {t:"Speakers choose between two distinct varieties by setting", b:1, why:"Gupta emphasized the speaker’s choice."},
      {t:"The book *The Step-Tongue*", b:1, why:"Gupta wrote this book in 1994."},
      {t:"An article of 1975 in *Anthropological Linguistics*", b:0, why:"Platt published his article in that journal in 1975."}
    ]},
    {id:"e6u5-l3-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Raffles sets up a trading post (1819)", why:"This is the earliest date in the list."},
      {t:"Singapore becomes independent (1965)", why:"This came 146 years after 1819."},
      {t:"The bilingual education policy begins (1966)", why:"This came one year after independence."},
      {t:"Platt describes the speech continuum (1975)", why:"This came nine years after the bilingual policy."},
      {t:"Gupta publishes *The Step-Tongue* (1994)", why:"This came 19 years after Platt."},
      {t:"The Speak Good English Movement begins (2000)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u5-l3-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Standard Singapore English","The English of schools, news and formal speech","It has a local pronunciation and some local words."],
      ["Colloquial Singapore English","The English of informal talk, with its own grammar patterns and particles","Many people call it Singlish."],
      ["Discourse particle","A short word at the end of a phrase that adds a stance or a feeling","*Lah*, *leh* and *lor* are examples."],
      ["Acrolect","The end of the continuum closest to standard English","It is Platt’s term."],
      ["Basilect","The most colloquial end of the continuum","It is also Platt’s term."]
    ]},
    {id:"e6u5-l3-x5", type:"spot", q:"A student wrote these notes after Lesson 3. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Singlish is just broken English.", flag:true, why:"Researchers describe CSE as a regular system with its own rules, and many of its speakers also use standard English."}, " ", {t:"The particle *lah* has exactly one meaning.", flag:true, why:"Its meaning depends on tone, context and speaker."}, " ", {t:"The Speak Good English Movement began in 2000.", flag:false, why:"Correct. It is a government campaign."}, " ", {t:"Many Singaporeans use both Standard and Colloquial Singapore English, depending on the setting.", flag:false, why:"Correct. Moving between them is a skill."}, " ", {t:"A recording of the “Please call Stella” paragraph shows how a speaker uses *lah*.", flag:true, why:"The paragraph is a written text read aloud. It shows pronunciation and cannot show particles."}, "”"
    ]},
    {id:"e6u5-l3-x6", type:"number", q:"Platt described the Singapore speech continuum in 1975. Gupta published *The Step-Tongue* in 1994. How many years later was that?", answer:19, tol:0, unit:"years", why:"1994 − 1975 = 19 years.", wrongs:[{v:29, tol:0, why:"This adds 10 by mistake. Check: 1975 + 19 = 1994."},{v:9, tol:0, why:"This takes away 10 by mistake. Check: 1975 + 19 = 1994."}], hint2:"Subtract 1975 from 1994."},
    M("e6u5-l3-x7","You will hear a speaker from Singapore read the “Please call Stella” paragraph. Whatever the speaker does, which of these features can a reading of this paragraph show?",0,[
      ["How the speaker pronounces the words","Right. A reading shows pronunciation. It is the one thing that a recording of this kind can show."],
      ["Whether the speaker uses the particle *lah*","The paragraph has no particles, and a reading is not casual talk."],
      ["Whether the speaker leaves out *be* before an adjective","The written text already has the words, so the reader does not choose the grammar."],
      ["Whether the speaker mixes languages in a sentence","A reading follows a fixed text, so it cannot show code-switching."]
    ], {listen:"e6u5-l3-a3", hint:"Think about what a written text read aloud can and cannot show."}),
    {id:"e6u5-l3-x8", type:"explain", q:"A visitor to Singapore says, “Singlish is just broken English.” Give a short, fair answer that uses either the continuum model or the diglossia model.", size:"3–5 sentences", prompt:"Researchers describe Singlish as …", hint:"Think about rules, about the speakers who use both varieties, and about one of the two models.", points:["Says that researchers describe colloquial Singapore English as a regular system with rules","Says that many speakers also use Standard Singapore English and choose by setting","Uses the continuum or the diglossia model to describe the relation between the two","Avoids ranking the varieties"], model:"Researchers describe colloquial Singapore English as a regular system with its own grammar patterns and particles, so it is not broken. Many speakers, including many well-educated people, also use Standard Singapore English, and they choose between the two by setting. Gupta’s diglossia model describes this choice between a formal and an informal variety. Platt’s continuum model describes the many steps between the two ends. In both models, one variety is not worse than the other. They are used for different purposes."}
   ],
   apply:{
    intro:"These tasks use your own notes and one article of your choice. Nothing needs an account.",
    tasks:[
     {t:"Describe your own repertoire", how:[
       "Make a table with three columns: setting, language or variety, and reason.",
       "Fill in at least five settings from your own week, such as home, work or study, friends, a shop and a message to a teacher.",
       "Write two sentences about how you choose. Use the word *repertoire*."
     ], write:"Setting… language or variety… reason… two sentences with repertoire…"},
     {t:"Check claims about Singlish", how:[
       "Find one short article or video about Singlish. Choose one that you can read in a few minutes.",
       "List three claims that it makes. Mark each one as a fact that can be checked, an opinion, or a claim that needs a source.",
       "Write one sentence about which claims you would trust more, and why."
     ], write:"Claim 1… fact, opinion or needs a source… Claim 2… Claim 3…"}
    ],
    proof:"A table of your own repertoire with two sentences, and a list of three claims about Singlish with a mark and a reason for each."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, section 3.12 “Tone and intonation”", note:"Particles such as lah carry meaning through tone. This section explains how tone and intonation work in language."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u5-l4", title:"Philippine and Malaysian English", minutes:55,
   hook:{q:"A Filipino caller says on the phone, “For a while, please.” What does the caller most likely mean?", options:["“Please call again in a while.”","“Please wait a moment.”","“I will be away for a long time.”","“Please stay for a while.”"], answer:1, reveal:"**“Please wait a moment.”** *For a while* is a common phrase in Philippine English that means “hold on”. It is a regular use of the phrase in that variety, and it is not an error."},
   goals:[
     "Tell how English became a language of school in the Philippines, with correct dates",
     "Describe Philippine English, its words, and Taglish as a skill",
     "Describe Malaysian English and Manglish, and the changes in Malaysian school policy, with hedges",
     "Compare the two countries’ language policies in neutral words"
   ],
   learn:[
    {h:"English in the Philippines", body:[
      {lead:"The Philippines is the only country in this unit where English came mainly with an American government."},
      "Spain ruled the islands from the 1500s. After the war of 1898 and the Treaty of Paris, the United States took control. In 1901, the US government set up a public school system with English as the language of teaching. About 500 American teachers arrived in August 1901 on the ship *Thomas*, and they are called [[we-thomasites|Thomasites]]. The Philippines became independent on 4 July 1946, as you saw in Unit 2.",
      "Today the 1987 Constitution names Filipino as the national language, and Filipino and English as the official languages. Filipino is based mainly on Tagalog. The country has well over a hundred languages, and many people use two or three in a day.",
      "Cheska Ibabao, a master’s student from the Philippines, is a good example. She studies regional disaster and community studies in a program taught in English, on a scholarship. She grew up in a country where English has been a language of school for more than a century. She uses English in her studies. As for many Filipinos, English is one language in a repertoire, and it is an everyday language of school and work."
    ]},
    {h:"Philippine English", body:[
      {lead:"Philippine English is a variety with its own words, and it has been strongly influenced by American English."},
      "Researchers describe Philippine English as an outer-circle variety that is [[rhotic]], which means that speakers usually pronounce the *r* after a vowel, as General American does. This is a tendency, and individual speakers differ. Bautista (2000) argued that a standard Philippine English can be defined from the usage of educated speakers. Philippine English also has its own vocabulary. Many of its words are English words with a local meaning, or borrowings from Tagalog, other Philippine languages and Spanish.",
      {table:[["Word or phrase","Meaning","Note"],["*comfort room* (CR)","restroom","English words with a local meaning."],["*for a while*","please wait (on the phone)","A common way to ask a caller to hold."],["*open the light*, *close the light*","turn on the light, turn off the light","Follows the pattern of *buksan* and *isara* (open and close) in Tagalog."],["*merienda*","a snack in the afternoon","From Spanish."],["*pasalubong*","a gift that you bring home from a trip","From Tagalog."],["*batchmate*","a person who finished school in the same year as you","English words with a local meaning."]]},
      "A visitor can ask, “Which restroom do you mean?” and be understood, and a Filipino speaker can ask the same of a visitor’s word. Learning a word is a matter of meeting it. It is not a test of who is right.",
      {ex:"Listen to a speaker from Las Piñas, in Metro Manila. The archive says that English is the first language, that the speaker also uses Tagalog, and that this person has always lived in the Philippines. Notice the *r* in *store* and *her*, and the *th* in *thick* and *these*. There is no single right answer. One speaker is one person.", label:"Listen: Las Piñas", listen:"e6u5-l4-a1"},
      {ex:"A speaker from Quezon City. The archive says that English is the first language, that the speaker also uses Tagalog, and that this person has lived in the Philippines and in Canada. Notice the same words. Because the speaker has lived in two countries, you may hear features from both, and one clip cannot show which came from where.", label:"Listen: Quezon City", listen:"e6u5-l4-a2"}
    ]},
    {h:"Taglish: a skill, not a failure", body:[
      {lead:"Taglish is the mixing of Tagalog and English in one conversation or one sentence, and it is a skill of people who know both."},
      "Many Filipinos use Taglish with friends, in media and in advertising. Researchers describe regular patterns in this kind of [[code-switching]]. A speaker can put an English noun into a Tagalog sentence, or add a Tagalog verb form to an English word. Here is one teaching example.",
      {ex:"*Mag-submit ka ng report bukas.* The prefix *mag-* is Tagalog and *submit* is English. *Ka* means “you”, *ng* marks the thing, and *bukas* means “tomorrow”. In English: “Submit the report tomorrow.”", label:"Example sentence", mono:false},
      "To mix this way, a speaker must know the grammar of both languages. A person who has only a little of one language usually cannot do it well. So Taglish shows skill. It is not a sign that someone “cannot speak either language”, and it is not “broken” in either direction. People also choose to avoid it in some settings, such as a formal speech, and that is a skill too. Unit 1 called this whole ability a repertoire, and Unit 8 returns to it.",
      "Suppose Cheska uses English in her seminar and a Philippine language with a friend from home. She might mix the two in a message to a classmate who knows both. She would not be “mixing up” languages. She would be choosing the language that fits the person and the moment."
    ]},
    {h:"Language policy in Philippine schools", body:[
      {lead:"The medium of instruction in the Philippines has changed several times, and each change has had supporters and critics."},
      "A bilingual education policy from 1974 used English for subjects such as mathematics and science, and Filipino for others. From 2009, a mother tongue–based policy used a child’s first language in the first years of school, and the 2013 education law (K–12) put it into law. In October 2024, a new law, Republic Act 12027, ended the use of the mother tongue as the medium of instruction from kindergarten to Grade 3. It says that the medium reverts to Filipino and, until the law says otherwise, English. Regional languages are auxiliary languages, which means that teachers can use them to help.",
      "Supporters of the 2024 law say that it makes teaching simpler and helps students to learn English early, which families often want. Critics say that research shows that children learn well in a language they already know, and that dropping it can hurt children whose first language is not Filipino or English. Both views are about children’s learning. A fair summary reports both, and it does not decide for the reader. Some details of the policies are complex, so check the text of the law."
    ]},
    {h:"Malaysian English and Manglish", body:[
      {lead:"Malaysian English has a similar shape to Singapore English, and it has its own history."},
      "The British ruled parts of the Malay Peninsula from the late 1700s. Malaya became independent on 31 August 1957, and Malaysia was formed on 16 September 1963. The Constitution makes Malay the national language, and English remained important in law, business and higher education. People of Malay, Chinese, Indian and other backgrounds live in the country, and many use several languages.",
      "Researchers describe a more formal Malaysian English and a colloquial form, which many call *Manglish*. As in Singapore, many speakers use both and move between them. Manglish has particles such as *lah*, *meh* and *kan*, and words from Malay, Chinese languages and Tamil, such as *makan* (to eat) and *kopitiam* (a traditional coffee shop). *Lah* appears in Singapore and in Malaysia, and the two places share some features. Speakers and scholars also point out differences, so do not assume that a particle means the same thing in both.",
      {ex:"Listen to a speaker from Kuala Lumpur. The archive says that English is the first language, that the speaker also uses Mandarin, and that this person has lived in Singapore and in the US. Notice the *r* in *store* and *her*. Because the speaker has lived in several places, one clip cannot show how English in Kuala Lumpur sounds in general.", label:"Listen: Kuala Lumpur", listen:"e6u5-l4-a3"}
    ]},
    {h:"English in Malaysian schools", body:[
      {lead:"Malaysia has changed its school policy on English several times, so the dates need care."},
      {fig:'<svg viewBox="0 0 340 350"><text x="170" y="18" text-anchor="middle">Dates in this lesson</text><line class="d-ink" x1="44" y1="34" x2="44" y2="338" stroke-width="2"/><circle class="d-sage" cx="44" cy="50" r="7" stroke-width="2"/><text x="64" y="55">1898 · The US takes the Philippines</text><circle class="d-lup" cx="44" cy="90" r="7" stroke-width="2"/><text x="64" y="95">1901 · Thomasites arrive</text><circle class="d-gold" cx="44" cy="130" r="7" stroke-width="2"/><text x="64" y="135">1946 · Philippine independence</text><circle class="d-rose" cx="44" cy="170" r="7" stroke-width="2"/><text x="64" y="175">1957 · Malaya is independent</text><circle class="d-sage" cx="44" cy="210" r="7" stroke-width="2"/><text x="64" y="215">1963 · Malaysia is formed</text><circle class="d-lup" cx="44" cy="250" r="7" stroke-width="2"/><text x="64" y="255">1970 · Malay-medium phase-in starts</text><circle class="d-gold" cx="44" cy="290" r="7" stroke-width="2"/><text x="64" y="295">2003 · PPSMI starts in Malaysia</text><circle class="d-rose" cx="44" cy="328" r="7" stroke-width="2"/><text x="64" y="333">2024 · Philippine law RA 12027</text></svg>', alt:"A vertical timeline with eight dates: 1898 the US takes the Philippines, 1901 the Thomasites arrive, 1946 Philippine independence, 1957 Malaya is independent, 1963 Malaysia is formed, 1970 the Malay-medium phase-in starts, 2003 PPSMI starts in Malaysia, 2024 the Philippine law RA 12027.", cap:"Key dates in this lesson. The dates of the school policies are simplified, and the policies were applied in stages."},
      "In Malaya before independence, there were English-medium schools. From 1970, the government began to replace English-medium schools with Malay-medium schools, one school year at a time, and the change took more than a decade. Schools that teach in Chinese or Tamil in primary school remained. English stayed a school subject.",
      "In 2003, a policy known by its Malay initials, PPSMI, began to teach mathematics and science in English. After years of debate, the government decided to end it, and by the early 2010s schools were returning to Malay and the other school languages for these subjects. Later, a Dual Language Programme let some schools choose English for these subjects. Dates differ between sources, so check a current official source before you quote them.",
      "The debate has many sides. Some people say that English in science helps students at university and at work. Others say that students learn science better in a language they know well, and that the policy was hard for teachers and for students in rural areas. Both sides want students to do well.",
      {key:"The Philippines and Malaysia reached English by different paths, and both keep changing their school policies. Taglish and Manglish are skills of people who control more than one language."}
    ]}
   ],
   try:[
    M("e6u5-l4-x1","Which statement about Taglish is the most accurate?",1,[
      ["It shows that a speaker cannot speak English properly.","Mixing needs good control of both languages."],
      ["It is a regular pattern of code-switching, and it shows skill in two languages.","Right. Researchers describe regular patterns, and speakers choose when to use it."],
      ["It is a language that has no rules.","Researchers describe regular patterns of mixing."],
      ["It is used only by children.","Adults use it widely in talk, in media and in advertising."]
    ]),
    {id:"e6u5-l4-x2", type:"sort", q:"Where does each word or phrase come from, or how is it formed?", buckets:["From Spanish","From Tagalog","English words with a local meaning"], items:[
      {t:"*merienda*", b:0, why:"It comes from Spanish and means an afternoon snack."},
      {t:"*pasalubong*", b:1, why:"It is a Tagalog word for a gift from a trip."},
      {t:"*comfort room*", b:2, why:"The words are English, and the meaning is local."},
      {t:"*despedida* (a farewell party)", b:0, why:"It comes from Spanish."},
      {t:"*for a while* on the phone", b:2, why:"The words are English, and the use is local."},
      {t:"*open the light*", b:2, why:"The words are English, and the pattern follows Tagalog."}
    ]},
    {id:"e6u5-l4-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"The Thomasites arrive in the Philippines (1901)", why:"This is the earliest date in the list."},
      {t:"The Philippines becomes independent (1946)", why:"This came 45 years after the Thomasites."},
      {t:"Malaya becomes independent (1957)", why:"This came 11 years after the Philippines."},
      {t:"Malaysia begins to replace English-medium schools with Malay-medium schools (1970)", why:"This came 13 years after independence."},
      {t:"Malaysia starts PPSMI (2003)", why:"This came 33 years after the change of 1970."},
      {t:"The Philippines ends mother-tongue instruction from kindergarten to Grade 3 (2024)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u5-l4-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Thomasites","About 500 American teachers who arrived in 1901","They are named after the ship *Thomas*."],
      ["Taglish","Mixing Tagalog and English in talk","Researchers describe regular patterns."],
      ["Manglish","The colloquial English of Malaysia","It has particles such as *lah*, *meh* and *kan*."],
      ["Republic Act 12027","The 2024 law on the medium of instruction in the early grades","It says that the medium reverts to Filipino and English."],
      ["PPSMI","The Malaysian policy of teaching mathematics and science in English, from 2003","It was later ended."]
    ]},
    {id:"e6u5-l4-x5", type:"spot", q:"A student wrote these notes after Lesson 4. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Taglish shows that Filipinos cannot speak English properly.", flag:true, why:"Mixing needs skill in both languages, and Filipinos use English fully, for example in school and at work."}, " ", {t:"The Thomasites arrived in 1901.", flag:false, why:"Correct. About 500 teachers arrived in August 1901."}, " ", {t:"Philippine English is the same as American English.", flag:true, why:"American English had a strong influence, but Philippine English has its own words, grammar and usage."}, " ", {t:"Malaysia’s school policy on English has changed several times.", flag:false, why:"Correct. The changes of 1970, 2003 and later show this."}, " ", {t:"Open the light means to switch the light off.", flag:true, why:"It means to switch it on, and *close the light* means to switch it off."}, "”"
    ]},
    {id:"e6u5-l4-x6", type:"number", q:"The Thomasites arrived in the Philippines in 1901. The Philippines became independent in 1946. How many years were there between the two dates?", answer:45, tol:0, unit:"years", why:"1946 − 1901 = 45 years.", wrongs:[{v:55, tol:0, why:"This adds 10 by mistake. Check: 1901 + 45 = 1946."},{v:35, tol:0, why:"This takes away 10 by mistake. Check: 1901 + 45 = 1946."}], hint2:"Subtract 1901 from 1946."},
    M("e6u5-l4-x7","You will hear a speaker from Quezon City. The archive says that this speaker has lived in the Philippines and in Canada. Whatever you hear, which claim is the most careful?",2,[
      ["“This is how all Filipinos speak English.”","One speaker cannot show this."],
      ["“This speaker has a Canadian accent, so Philippine English has disappeared.”","Nothing in a clip can show this, and a speaker can keep features from both places."],
      ["“I can describe what I hear. A speaker who has lived in two countries may show features from both, so I will not use one clip to describe a country.”","Right. It describes the evidence and limits the claim."],
      ["“This speaker’s English is better than the English of a speaker who has lived in only one country.”","*Better* is a ranking, and a clip cannot support it."]
    ], {listen:"e6u5-l4-a4", hint:"The answer does not depend on what the speaker does. Choose the claim that stays within the evidence."}),
    {id:"e6u5-l4-x8", type:"explain", q:"A classmate named Daniel says, “People who mix Tagalog and English in one sentence are not good at either language.” Write a short, kind answer.", size:"3–5 sentences", prompt:"Researchers describe Taglish as …", hint:"Think about what a speaker must know to mix well, and about choosing a language for a setting.", points:["Says that mixing follows regular patterns","Says that the speaker needs good control of both languages","Says that speakers also choose when not to mix","Treats Taglish as a skill and does not rank it"], model:"Researchers describe Taglish as code-switching with regular patterns. To mix well, a speaker must know the grammar of both languages, so mixing shows skill and not a lack of it. The same speakers often choose to use only one language in settings such as a formal speech, and that choice is a skill too. So Taglish is not a failure in either language. It is one way of using a repertoire."}
   ],
   apply:{
    intro:"These tasks use free websites and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Make a word list", how:[
       "Choose three words from the table in this lesson, such as *comfort room*, *merienda* and *pasalubong*.",
       "Look each one up in a large online dictionary. Write whether it is listed, and whether it has a label for Philippine English.",
       "Write one sentence that explains each word to a visitor, in plain words."
     ], write:"Word… listed? labeled? … one sentence for a visitor…"},
     {t:"Compare two policy timelines", how:[
       "Make a timeline with two rows, one for the Philippines and one for Malaysia.",
       "Add at least four dates from this lesson to each row. Mark any date that you are not sure about with a question mark.",
       "Write two sentences about what the two timelines have in common and one difference."
     ], write:"Philippines… Malaysia… in common… one difference…"}
    ],
    proof:"A word list of three words with notes from a dictionary, and a timeline of two countries with at least eight dates and two comparison sentences."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"This section can help you think about why speakers have different ways of speaking for different people and settings."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u5-l5", title:"Listening across Englishes: a lab", minutes:60,
   hook:{q:"A listener hears every word of a sentence but does not know what it means. Which level of understanding is missing?", options:["Intelligibility","Comprehensibility","Accommodation","Rhoticity"], answer:1, reveal:"**Comprehensibility.** In the scheme of Smith and Nelson (1985), intelligibility is recognizing the words, and comprehensibility is knowing what the sentence means. A listener can have the first without the second."},
   goals:[
     "Explain intelligibility, comprehensibility and interpretability (Smith 1992), and give an example of each",
     "Say what affects understanding between speakers, with careful references to research",
     "Use a listening routine that describes sounds, compares them with typical patterns and adds a limit",
     "Compare the clips of this unit with Units 3 and 4 on rhoticity and rhythm, as tendencies",
     "Describe a speaker without ranking, and without treating one speaker as a whole country"
   ],
   learn:[
    {h:"Three levels of understanding", body:[
      {lead:"When people say “I could not understand her”, they can mean three different things."},
      "Larry Smith and Cecil Nelson (1985) proposed three levels, and Smith (1992) discussed them in a chapter on the spread of English. Unit 1 introduced them, and here you use them in practice.",
      {table:[["Level","What it means","Example"],["[[we-intelligibility|Intelligibility]]","Recognizing the words and sounds","You hear the word *prepone* and know that it is a word."],["[[we-comprehensibility|Comprehensibility]]","Knowing what the sentence means","You know that *prepone* means “move earlier”."],["[[we-interpretability|Interpretability]]","Seeing what the speaker wants or means by the words","You see that *Can lah* is a friendly reassurance."]]},
      "The levels are different, and a problem at one level needs a different fix. If the problem is at the first level, the listener may need to hear it again, or to hear the speaker for longer. If the problem is at the second, a word or a structure is new. If it is at the third, the listener may need to know more about the setting and the speaker’s purpose. In each case, the problem is a gap between speaker and listener. It is not a fault in the speaker."
    ]},
    {h:"What affects understanding?", body:[
      {lead:"Understanding depends on the listener as much as on the speaker."},
      "Research gives several findings, and each one comes with limits. Munro and Derwing (1995) studied speakers of English as a second language and listeners in Canada. They found that how strong an accent sounds is not the same as how well the speech is understood. A speaker with a noticeable accent can be fully understood. Clarke and Garrett (2004) found that, in laboratory tests, listeners adapted quickly to an unfamiliar accent after a short time of listening. These were studies with particular speakers and listeners, so they do not describe everyone. But they agree with a common experience: the first minute with a new accent is the hardest.",
      "Other things matter too. Noise, speed, topic knowledge and attitude affect understanding. A listener who expects difficulty often finds it. A listener who is curious often finds it easier. A speaker can also help, by speaking clearly, by avoiding local words with new listeners, and by checking. In Unit 8 this is called [[we-accommodation|accommodation]]. Understanding is a shared job."
    ]},
    {h:"A listening routine, and a cameo", body:[
      {lead:"A routine makes listening to new accents easier, and it keeps you from judging."},
      "Mariya Seto, from the island of Shiojima, studies English at a university in Japan because she wants to become an interpreter. An interpreter must follow many kinds of speakers, so she needs a routine that works for all of them. Here is a routine that anyone can use.",
      {ol:[
        "**Listen for the gist first.** What is the speaker doing: explaining, asking, telling a story?",
        "**Use the words you know.** Names, numbers and key nouns give a frame.",
        "**Listen again for one feature.** Choose one, such as the *r* after a vowel or the rhythm.",
        "**Describe it in plain words.** Write what you hear, such as “I hear an *r* in *store*”.",
        "**Compare it with a typical pattern, and add a limit.** Say what is typical, and remind yourself that one speaker is one person.",
        "**If it is a real conversation, check.** Say what you understood and ask whether it is right."
      ]},
      "Mariya’s routine ends with a check, because a good interpreter does not guess. She says what she understood and asks, “Do you mean …?” This is a respectful move. It tells the speaker that the problem is shared."
    ]},
    {h:"Tendencies to compare: the r and rhythm", body:[
      {lead:"Two features are easy to compare across the units: the *r* after a vowel and the rhythm."},
      "The first is whether speakers pronounce the *r* in words such as *store* and *her*. You met the term [[rhotic]] in Units 3 and 4. The second is rhythm. Many researchers describe English as stress-timed, and they describe several Asian Englishes as more syllable-timed. Unit 3 of How English Works explains that these are labels for tendencies, and that researchers still debate them ({{stress-timing-and-rhythm}}).",
      {table:[["Place","The *r* after a vowel (typical description)","Rhythm (as described)"],["London (Unit 3)","Usually not pronounced","Stress-timed tendency"],["General American (Unit 4)","Pronounced","Stress-timed tendency"],["Sydney (Unit 4)","Usually not pronounced","Stress-timed tendency"],["India","Varies by speaker and region","Often described as more syllable-timed"],["Singapore","Varies, and many speakers do not pronounce it","Often described as more syllable-timed"],["Philippines","Often described as pronounced","Often described as more syllable-timed"],["Malaysia","Varies by speaker","Often described as more syllable-timed"]]},
      {warn:"This table shows tendencies from descriptions. It does not tell you what a particular speaker does. People vary, and a speaker who has lived in another country may show features from there."},
      "Use the table as a question and not as an answer: “Do I hear what the descriptions say?” Any result is a good observation."
    ]},
    {h:"The listening lab", body:[
      {lead:"In this lab you listen to eight speakers, and you describe each one in plain words."},
      "All eight read the same paragraph, so you are comparing like with like. Listen to each clip twice, once for the gist and once for one feature. Write what you hear, and do not rank. Remember what the archive says: it gives the first language, the age at which English started and the time spent abroad. It does not tell you the variety. Several speakers have spent years in the US, so you may hear features from there.",
      {ex:"A speaker from Mumbai. English is the first language, and the archive says that the speaker has lived in India and the US. Listen for the *r*, and the *t* in *Stella*.", label:"Speaker 1: Mumbai", listen:"e6u5-l5-a1"},
      {ex:"A speaker from Chennai. Tamil is the first language. Listen for the *r*, and the *th* in *thick*.", label:"Speaker 2: Chennai", listen:"e6u5-l5-a2"},
      {ex:"A speaker from Islamabad. Urdu is the first language, and the speaker has spent four years in the US. Listen for the *r*, and the vowel in *ask*.", label:"Speaker 3: Islamabad", listen:"e6u5-l5-a3"},
      {ex:"A speaker from Colombo. Sinhala is the first language, and the speaker has spent five years in the US. Listen for the *r*, and the vowel in *snack*.", label:"Speaker 4: Colombo", listen:"e6u5-l5-a4"},
      {ex:"A speaker from Singapore. Listen for the *r*, and the end of *thick*.", label:"Speaker 5: Singapore, speaker 1", listen:"e6u5-l5-a5"},
      {ex:"A second speaker from Singapore. Listen for the same features, and compare with speaker 5.", label:"Speaker 6: Singapore, speaker 2", listen:"e6u5-l5-a6"},
      {ex:"A speaker from Las Piñas in the Philippines. Listen for the *r*, and the vowel in *ask*.", label:"Speaker 7: Las Piñas", listen:"e6u5-l5-a7"},
      {ex:"A speaker from Kuala Lumpur, who has also lived in Singapore and the US. Listen for the *r*, and the vowel in *snack*.", label:"Speaker 8: Kuala Lumpur", listen:"e6u5-l5-a8"},
      "Now compare your notes with the clips from Unit 3 (London, Edinburgh and Dublin) and Unit 4 (Columbus, Sydney and Auckland). You may find that the *r* is easy to hear in some speakers and weak or absent in others. Any result is normal. Your task is to listen and describe, and not to prove a theory."
    ]},
    {h:"Respect, not ranking", body:[
      {lead:"A careful description has three parts, and none of them is a ranking."},
      "The three parts are: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Words such as *good*, *bad*, *lazy*, *funny* or *strong* are judgments, and they do not describe a sound. Compare two careful notes with two careless ones.",
      {table:[["Careful","Careless"],["I did not hear an *r* in *store*. This is a typical pattern in many descriptions of this place, and one speaker is one person.","These speakers all drop their *r*."],["I needed two listenings for this clip.","This accent is hard, and the speaker is unclear."]]},
      "The second note in the careless column puts the problem in the speaker. The second note in the careful column puts it in the listening. The second way is more accurate, because understanding is shared.",
      {key:"A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person. Describe, and do not rank."}
    ]}
   ],
   try:[
    M("e6u5-l5-x1","Priya hears a colleague say, “Please prepone the meeting.” She recognizes every sound, but she does not know what *prepone* means. Which level of understanding is missing?",1,[
      ["Intelligibility","She recognized the words and sounds, so this level is present."],
      ["Comprehensibility","Right. She does not know the meaning of the word."],
      ["Interpretability","This is about the speaker’s purpose, and her problem is earlier: the meaning of a word."],
      ["Rhoticity","This is about the *r* sound and has nothing to do with the problem."]
    ]),
    {id:"e6u5-l5-x2", type:"sort", q:"Which level of understanding does each situation show?", buckets:["Intelligibility","Comprehensibility","Interpretability"], items:[
      {t:"A listener recognizes every word in *I eat already*.", b:0, why:"Recognizing the words is the first level."},
      {t:"A listener knows that *I eat already* means *I have eaten*.", b:1, why:"Knowing what the sentence means is the second level."},
      {t:"A listener sees that *Can lah* is a friendly reassurance and not just a plain yes.", b:2, why:"Seeing what the speaker means by the words is the third level."},
      {t:"A listener can repeat the sounds of a new word without knowing it.", b:0, why:"The listener recognizes the sounds only."},
      {t:"A listener understands that *do the needful* means *do what is necessary*.", b:1, why:"This is knowing what the phrase means."},
      {t:"A listener understands that a polite *maybe* in a message really means *no*.", b:2, why:"This is about the speaker’s purpose."}
    ]},
    {id:"e6u5-l5-x3", type:"order", q:"Put these publications in the order in which they appeared, from earliest to latest.", items:[
      {t:"Smith and Nelson on international intelligibility (1985)", why:"This is the earliest date in the list."},
      {t:"Smith on the spread of English and issues of intelligibility (1992)", why:"This came seven years later."},
      {t:"Munro and Derwing on accent, comprehensibility and intelligibility (1995)", why:"This came three years after Smith (1992)."},
      {t:"Clarke and Garrett on rapid adaptation to foreign-accented English (2004)", why:"This is the latest date in the list."}
    ]},
    {id:"e6u5-l5-x4", type:"match", q:"Match each term to its description.", pairs:[
      ["Intelligibility","Recognizing the words and sounds","It is the first level."],
      ["Comprehensibility","Knowing what the sentence means","It is the second level."],
      ["Interpretability","Seeing what the speaker means by the words","It is the third level."],
      ["Accommodation","A speaker or a listener adjusting to help understanding","Unit 8 looks at it in detail."],
      ["Gist","The main point of what the speaker is doing","It is the first step of the listening routine."]
    ]},
    {id:"e6u5-l5-x5", type:"spot", q:"A classmate writes these notes after the listening lab. Tap each note that **ranks, overgeneralizes or judges**.", ask:"ranks or overgeneralizes", parts:[
      "“", {t:"The Singapore speaker has a funnier accent than the Mumbai speaker.", flag:true, why:"This ranks two accents and uses a judgment word."}, " ", {t:"I did not hear a strong *r* in *store* in the Colombo recording.", flag:false, why:"Fine. This reports what the classmate heard from one speaker."}, " ", {t:"All Indians pronounce the *th* in *thick* as a *t*.", flag:true, why:"This overgeneralizes. Some speakers do, and the pattern depends on the speaker."}, " ", {t:"The speaker from Islamabad lived in the US for four years, so some features may come from there.", flag:false, why:"Fine. It is a careful reminder that the speaker has lived in more than one place."}, " ", {t:"The Kuala Lumpur speaker is hard to understand, so Malaysian English is hard to understand.", flag:true, why:"One listener’s difficulty is not a fact about a variety, and one speaker is not a country."}, "”"
    ]},
    {id:"e6u5-l5-x6", type:"number", q:"The lab has eight speakers. Four are from South Asia, two from Singapore, one from the Philippines and one from Malaysia. How many speakers are from Southeast Asia?", answer:4, tol:0, unit:"speakers", why:"Singapore, the Philippines and Malaysia are in Southeast Asia: 2 + 1 + 1 = 4.", wrongs:[{v:8, tol:0, why:"This is the total number of speakers, and it includes the four from South Asia."},{v:3, tol:0, why:"You may have counted countries and not speakers. Singapore has two speakers."}], hint2:"Add the speakers from Singapore, the Philippines and Malaysia."},
    M("e6u5-l5-x7","You will hear a speaker from Dhaka. The archive says that Bengali is the first language, that English started at school at age 16, and that the speaker has lived in the US for one year. Whatever you hear, which note is the most careful?",2,[
      ["“Bangladeshis do not pronounce the *r* after a vowel.”","One speaker cannot show a pattern for a whole country."],
      ["“This speaker started English late, so the speaker is a weak speaker of English.”","*Weak* is a judgment, and the age at which a person started does not show how well the person uses English now."],
      ["“I describe what I hear in this one recording, I compare it with a typical pattern, and I remember that one speaker is one person.”","Right. It has the three parts of a careful claim."],
      ["“This speaker sounds like an American, so the year in the US explains everything.”","A clip cannot show the cause of a feature, and a speaker can keep features from several places."]
    ], {listen:"e6u5-l5-a9", hint:"The answer does not depend on what the speaker does. Choose the note that has three parts: what I hear, what is typical, and a limit."}),
    {id:"e6u5-l5-x8", type:"explain", q:"Mariya Seto, a university student of English who wants to become an interpreter, gets a practice message in class. It comes from an office in India: “Please prepone the meeting to Tuesday and do the needful.” Describe how she can interpret the message well and respectfully.", size:"4–6 sentences", prompt:"Mariya could start by …", hint:"Think about *prepone*, *do the needful*, checking with the writer, and not treating a regular word as a mistake.", points:["Says that prepone means to move earlier and do the needful means do what is necessary","Treats both as regular words of Indian English and not as mistakes","Says that she can check with the writer","Chooses clear words for the reader of her interpretation"], model:"Mariya could start by remembering that *prepone* means “move to an earlier time”, and *do the needful* means “do what is necessary”. Both are regular words of Indian English, so she should not treat them as mistakes. In real work, if any part is unclear, she can check with the writer, for example by asking, “Do you mean an earlier time on Tuesday?” When she interprets, she can choose plain words that her listeners know, such as “please move the meeting earlier, to Tuesday, and do what is needed”. A clear check is more useful than a guess."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and your own notes. Nothing needs an account.",
    tasks:[
     {t:"Make a listening table for the unit", how:[
       "Make a table with eight rows, one for each speaker in the lab. Add three columns: the *r* after a vowel, the vowel in *ask* or *snack*, and one more feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “r pronounced”, “short vowel” or “not sure”.",
       "Write two sentences about your table. Use the words *typical* and *one speaker*."
     ], write:"My table… two sentences with typical and one speaker…"},
     {t:"Compare with Units 3 and 4", how:[
       "Return to the lab of Unit 3 or Unit 4, and listen again to one speaker there.",
       "Choose one speaker from this lab. Compare the two speakers on the *r* and on one more feature.",
       "Write three sentences. Say where the two speakers are alike, where they differ and what is typical for each place."
     ], write:"Speaker A… Speaker B… alike in… different in… typical…"}
    ],
    proof:"A table of eight speakers with careful notes, two sentences that use *typical* and *one speaker*, and a comparison with one speaker from Unit 3 or Unit 4."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, section 3.12 “Tone and intonation”", note:"Read it before the lab if you want to describe pitch and rhythm in more detail."}
   ]
  }
  ],
  checkpoint:["e6u5-q03","e6u5-q06","e6u5-q09","e6u5-q12","e6u5-q16","e6u5-q21","e6u5-q26","e6u5-q30","e6u5-q35","e6u5-q38","e6u5-q42","e6u5-q45"],
  cpBank:[
   Q("e6u5-cp01","e6u5-l1",1,"Which statement about *prepone* is the most accurate?",1,[
     ["It is a mistake for *postpone*.","It is a regular word of Indian English, formed on the pattern of *postpone*."],
     ["It means to move an event to an earlier time, and it is a regular word of Indian English.","Right. Many large dictionaries list it."],
     ["It means to cancel an event.","It does not mean cancel."],
     ["It is used only in writing by one company.","It is used widely by speakers of Indian English."]]),
   Q("e6u5-cp02","e6u5-l1",2,"A reader sees the price “4 crore rupees”. How many rupees is that?",2,[
     ["400,000","This is 4 lakh. A crore is 100 lakh."],
     ["4,000,000","This is 40 lakh. A crore is 10,000,000."],
     ["40,000,000","Right. One crore is 10,000,000, so 4 crore is 40,000,000."],
     ["400,000,000","This is 40 crore. Check the zeros."]]),
   Q("e6u5-cp03","e6u5-l1",3,"A student writes, “Indian English speakers say *isn’t it?* because they cannot learn English tags.” What is wrong with the claim?",3,[
     ["Nothing is wrong with it.","The claim judges the speakers and gives a cause without evidence."],
     ["The tag *isn’t it?* does not exist in any variety.","eWAVE documents it as a feature of Indian English."],
     ["Only speakers of Hindi use it.","Many speakers with different first languages use it."],
     ["The tag is a regular feature of Indian English, and the claim treats a feature as a failure.","Right. A feature is a systematic pattern that proficient speakers share."]]),
   Q("e6u5-cp04","e6u5-l2",1,"Which country in Lesson 2 was never ruled by Britain?",1,[
     ["Pakistan","Pakistan was part of British India until 1947."],
     ["Nepal","Right. Nepal had contact with British India, but it was not a colony."],
     ["Sri Lanka","Ceylon was a British colony until 1948."],
     ["Bangladesh","Bangladesh was part of British India, and then of Pakistan."]]),
   Q("e6u5-cp05","e6u5-l2",2,"What does it mean to call English the *link language* of Sri Lanka?",0,[
     ["It is a language that people with different first languages use to talk to each other.","Right. The Thirteenth Amendment of 1987 uses this term."],
     ["It is the only official language.","Sinhala and Tamil are the official languages."],
     ["It is the first language of most people.","Most people have Sinhala or Tamil as the first language."],
     ["It is a language that the law has banned.","English is not banned."]]),
   Q("e6u5-cp06","e6u5-l3",1,"Which statement about colloquial Singapore English is the most accurate?",2,[
     ["It is broken English.","Researchers describe it as a regular system."],
     ["It is the only English in Singapore.","Most Singaporeans also use a standard form."],
     ["It has its own grammar patterns and particles, and many speakers also use Standard Singapore English.","Right. Speakers choose between the two."],
     ["It is the same as British English.","It has features that British English does not have."]]),
   Q("e6u5-cp07","e6u5-l3",3,"A visitor hears a Singaporean friend say *Okay lor* and decides that the friend is angry. What is the best response?",1,[
     ["The visitor is right, because *lor* always shows anger.","Particles do not have one fixed meaning."],
     ["The visitor should not guess. The meaning of a particle depends on tone and context, and *lor* often shows acceptance, so the visitor can ask.","Right. It avoids a guess and treats the particle as part of the system."],
     ["The friend is making a mistake in English.","*Lor* is a regular particle of colloquial Singapore English."],
     ["The visitor should use *lor* in the reply to be polite.","A visitor who copies a particle can sound unnatural, and listening is better."]]),
   Q("e6u5-cp08","e6u5-l4",1,"Who were the Thomasites?",3,[
     ["Filipino teachers who left in 1901","They were American teachers who arrived."],
     ["British soldiers in Malaya","They were not soldiers, and they did not go to Malaya."],
     ["The first speakers of Taglish","They were teachers, and Taglish has a different history."],
     ["About 500 American teachers who arrived in the Philippines in 1901","Right. They are named after the ship *Thomas*."]]),
   Q("e6u5-cp09","e6u5-l4",3,"Daniel says, “Taglish speakers are not good at either language.” What is the best reply?",0,[
     ["Mixing follows regular patterns and needs good control of both languages, so it shows skill.","Right. Speakers also choose when not to mix."],
     ["He is right, because mixing means that the speaker does not know the words.","Mixing is a choice, and it needs knowledge of both grammars."],
     ["Taglish is used only by children.","Adults use it widely."],
     ["Taglish is not a real way of speaking.","It is a common way of speaking with regular patterns."]]),
   Q("e6u5-cp10","e6u5-l5",1,"In the scheme of Smith and Nelson, what is *comprehensibility*?",2,[
     ["Recognizing the words and sounds","This is intelligibility."],
     ["Seeing what the speaker wants","This is interpretability."],
     ["Knowing what the sentence means","Right. It is the second level of understanding."],
     ["Pronouncing the *r* after a vowel","This is rhoticity, and it is a different topic."]]),
   Q("e6u5-cp11","e6u5-l5",2,"Which note about a recording is the most careful?",1,[
     ["“This speaker is hard to understand, so this variety is hard.”","One listener’s difficulty is not a fact about a variety."],
     ["“I did not hear an *r* in *store*. That is typical in many descriptions of this place, but one speaker is one person.”","Right. It has what I hear, what is typical and a limit."],
     ["“All speakers from this place drop their *r*.”","This overgeneralizes from one speaker, and *drop* is a judgment."],
     ["“This accent is the funniest in the lab.”","This ranks an accent with a judgment word."]]),
   Q("e6u5-cp12","e6u5-l5",3,"Kenji hears a recording of a speaker from Colombo who has lived in the US for five years and says, “This is the sound of Sri Lankan English.” What is the best response?",3,[
     ["“Yes, all Sri Lankans sound like this.”","This overgeneralizes from one speaker."],
     ["“No, the speaker has lost the Sri Lankan accent.”","Nobody can say this from a recording, and *lost* is a judgment."],
     ["“It is not English at all.”","It is English, and all varieties here are full systems."],
     ["“This is how one speaker sounds. The speaker has also spent time in the US, so we cannot say what is typical of the country.”","Right. It stays within the evidence."]])
  ],
  codex:[
   {id:"we-indian-english", title:"Indian English", aka:["Indianization of English","South Asian English"], tags:["world englishes","south asia"],
    summary:"Indian English is a nativized variety with an official role beside Hindi. Retroflex sounds, the invariant tag isn’t it?, emphatic only and itself, and words such as prepone, lakh and crore are features of the variety.",
    levels:{
     starter:[
      "**Indian English** is the English used by many people in India, mostly as an additional language that they learn at school and use every day. It has an official role beside Hindi. India has many languages, so English also works as a link between regions.",
      "Indian English has many regional accents, because each first language shapes the English of its speakers. A few tendencies are often described. Many speakers make /t/ and /d/ with the tongue tip curled back. These are **retroflex** sounds. Many use a dental stop for the *th* sounds.",
      "It also has its own words. *Prepone* means to move earlier. A *lakh* is 100,000 and a *crore* is 10,000,000.",
      "Grammar features that researchers describe include the tag *isn’t it?* for every sentence and the emphatic *only* and *itself*.",
      {key:"A feature is a regular pattern that educated speakers share. In Indian English, retroflex sounds, *prepone* and *crore* are features, and they are not mistakes."}
     ],
     builder:[
      "The Constitution of 1950 named Hindi in the Devanagari script as the official language of the Union and allowed English for 15 years. The Official Languages Act of 1963 let English continue as an additional official language. A 1967 amendment says that this can end only if every state that has not adopted Hindi, and both houses of Parliament, pass resolutions to end it. Check the text of the law before you quote it. The Eighth Schedule lists 22 languages.",
      "Kachru (1983, *The Indianization of English*) described how English took on Indian forms, meanings and ways of speaking. He also described a cline of bilingualism, a scale from users with a little English to highly skilled users.",
      {table:[["Level","Tendency (some speakers)","Example"],["Sound","Retroflex /t d/","*Stella*, *Wednesday*"],["Sound","Dental stops for /θ ð/","*thick*, *these*"],["Grammar","Progressive with stative verbs","*She is knowing the answer.*"],["Grammar","Invariant tag","*You are coming, isn’t it?*"],["Words","Local words","*prepone*, *lakh*, *crore*, *timepass*"]]},
      "Rhythm is often described as more syllable-timed than in General American, and the *r* after a vowel varies by speaker and region. Describe one speaker by what you hear, and add that one speaker is one person."
     ],
     pro:[
      "Kachru’s model places India in the outer circle, where English has an institutional role and a history in education. Scholars also use the Dynamic Model of Schneider (2003, 2007) to place Indian English, and the placement is debated. The size and the diversity of the country mean that no single description fits the whole, so the phrase *Indian English* names a family of accents and styles.",
      "Studies of pronunciation, such as Sailaja (2009), report the retroflex consonants, the dental stops for /θ ð/, monophthong vowels in FACE and GOAT for many speakers, and less vowel reduction than in General American. The last feature contributes to the impression of syllable timing, which is a perceptual label that researchers still debate. These are tendencies, and speakers who learned English in an English-medium school from an early age often differ from speakers who learned it later.",
      "eWAVE and other descriptions report several grammar features in Indian English, including the progressive with stative verbs, the invariant tag *isn’t it?* (and *no?*), and the use of *only* and *itself* to mark focus. Many of these also appear in other outer-circle varieties, such as Singapore and Nigerian English, so they are better seen as shared tendencies of contact varieties than as peculiarities of one country. Such features are used more in speech than in formal writing, and many speakers have a repertoire that includes standard forms.",
      "The census figures on English are self-reports. The Census of India of 2011 recorded a very small share of people with English as the first language, and about one in ten (about 10.6 percent) who reported English as one of their languages. Check the current census tables before you quote a figure. Cross-link: Unit 2 (the second diaspora), Unit 8 (accommodation), and How English Works Unit 3 (rhythm)."
     ]},
    related:["we-south-asian-englishes","we-kachru-circles","we-second-diaspora"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"Constitution of India, Part XVII (Official Language)", url:"https://www.mea.gov.in/Images/pdf1/Part17.pdf"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-south-asian-englishes", title:"South Asia beyond India", aka:["Pakistani English","Sri Lankan English","Bangladeshi English","Nepali English"], tags:["world englishes","south asia"],
    summary:"Pakistan, Sri Lanka, Bangladesh and Nepal share some tendencies with India and differ in history, law, schools and contact languages. Nepal was never ruled by Britain.",
    levels:{
     starter:[
      "Four countries near India have their own Englishes. **Pakistan** became independent in 1947, and its Constitution names Urdu as the national language. **Sri Lanka** (then Ceylon) became independent in 1948, and English is its link language. **Bangladesh** declared independence in 1971, and Bangla is its state language. **Nepal** was never ruled by Britain, but English is widely taught.",
      "These Englishes share some tendencies, such as retroflex sounds and some words, because the countries share a history and some languages. They also differ. Each country has its own contact languages, school policy and way of using English.",
      {key:"A careful claim names the feature and the place. It does not say that all of South Asia is the same."}
     ],
     builder:[
      "Article 251 of Pakistan’s Constitution of 1973 names Urdu as the national language and says that English may continue to be used for official purposes until arrangements are made to replace it with Urdu. In Sri Lanka, the Sinhala Only Act of 1956 made Sinhala the one official language. The Thirteenth Amendment of 1987 made Sinhala and Tamil official languages and English the link language. In Bangladesh, the Language Movement of 1952 is remembered each year on 21 February.",
      {table:[["Country","Independence","English in law or policy"],["Pakistan","14 August 1947","May be used officially until replaced by Urdu (Article 251)"],["Sri Lanka","4 February 1948","Link language (1987)"],["Bangladesh","Declared 26 March 1971","A required school subject, widely used in higher education"],["Nepal","Never ruled by Britain","Taught from early years, with no official role"]]},
      "Scholars in Sri Lanka, for example Gunesekera (2005) and Meyler (2007), have described Sri Lankan English as a variety with its own identity and vocabulary. There are fewer studies of Bangladeshi and Nepali English, which is a limit of the research."
     ],
     pro:[
      "Mahboob and Ahmar (2004) wrote an overview of the phonology of Pakistani English, and research on Pakistani language policy examines the roles of Urdu, English and regional languages. Because English in Pakistan is tied to class, school type and access, any claim about it should name the group of speakers.",
      "Sri Lankan English has been described with words from Sinhala and Tamil and a smaller number from Portuguese and Dutch, and with features that scholars link to the languages of the island. Researchers also debate whether to treat Sri Lankan English as one variety or as several by community, and these debates are led by Sri Lankan scholars. Use their work for claims about the variety.",
      "Nepal is placed in the expanding circle in Kachru’s model, and some scholars argue that the use of English in private schools, work abroad and media is closer to outer-circle use. The case is evidence that the circles are a simplification. Cross-link: Unit 1 (limits of the circles) and Unit 2."
     ]},
    related:["we-indian-english","we-kachru-circles","we-second-diaspora"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”"}],
    sources:[{t:"Constitution of Pakistan, Part XII, Chapter 4 (Article 251)", url:"https://pakistani.org/pakistan/constitution/part12.ch4.html"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-singapore-english", title:"Singapore English", aka:["Singlish","Colloquial Singapore English","Standard Singapore English"], tags:["world englishes","southeast asia"],
    summary:"Singapore has a standard and a colloquial English. Platt (1975) described a continuum and Gupta (1994) described diglossia. Particles such as lah, leh and lor carry meaning through tone and context.",
    levels:{
     starter:[
      "**Singapore English** has two main ends. **Standard Singapore English** (SSE) is used in schools, news and formal speech. **Colloquial Singapore English** (CSE) is used in informal talk, and many people call it *Singlish*. Most Singaporeans use both and choose by setting.",
      "CSE has its own grammar patterns. For example, *Can!* is a full answer that means “yes, that is possible”. It also has particles such as *lah*, *leh* and *lor*, which add a stance through tone and context.",
      "Two models describe the range. Platt (1975) described a **continuum**. Gupta (1994) described **diglossia**.",
      {key:"CSE is a regular system. It is not broken English, and most of its speakers also use standard English."}
     ],
     builder:[
      "Singapore has four official languages, English, Malay, Mandarin and Tamil, and Malay is the national language. Since 1966, students study English and a mother tongue. English is the main language of school, government and business.",
      "Platt (1975) used the terms acrolect, mesolect and basilect for points along a line, and he called the basilect a *creoloid*, a word that later scholars find controversial. Gupta (1994, *The Step-Tongue*) argued that the community has two distinct varieties, and that speakers choose between them. The two models are two ways to describe the same range.",
      "The Speak Good English Movement began in 2000 as a government campaign to promote standard English. Supporters see it as help with international communication. Critics see CSE as part of Singaporean identity and fear that the campaign judges its speakers. A fair account reports both views.",
      "A reading of a written text shows pronunciation only. It cannot show particles, grammar or code-switching."
     ],
     pro:[
      "Gupta (1992) described the pragmatic particles of CSE and argued that each has a range of meanings that depends on tone and context. Many descriptions summarize *lah* as a particle that adds a friendly, firm or insistent tone, *leh* as one that often softens, and *lor* as one that often marks something obvious or accepted. These summaries are simplified, and researchers do not agree on every detail. The particles appear in Malaysian English too, but their uses may differ.",
      "Grammar features described for CSE include a zero copula before adjectives, *already* as a marker of a finished event, a topic-first structure, and *can* as a full answer. Lim (2004, ed.) and Deterding (2007) are standard references. The sources of these features are debated. Scholars point to Chinese languages such as Hokkien and Cantonese, to Malay, and to general patterns in contact languages, and the most likely answer is a mix.",
      "In Schneider’s Dynamic Model (2003, 2007), Singapore English is usually placed in Phase 4, endonormative stabilization, and the placement is debated. The English language policy and the bilingual education policy of 1966 are central to this placement. Cross-link: Unit 2 (Schneider), Unit 4 (discourse markers) and Unit 8."
     ]},
    related:["we-philippine-english","we-malaysian-english","we-schneider-dynamic-model"],
    read:[{book:"eling", where:"Chapter 3, Phonetics, section 3.12 “Tone and intonation”"}],
    sources:[{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"},{t:"Singlish (overview and references), Wikipedia", url:"https://en.wikipedia.org/wiki/Singlish"}],
    checked:"2026-11"},
   {id:"we-philippine-english", title:"Philippine English and Taglish", aka:["Taglish","Thomasites"], tags:["world englishes","southeast asia"],
    summary:"English became the language of school under US rule from 1901. Philippine English has its own words, is described as rhotic and American-influenced, and Taglish is a regular pattern of code-switching.",
    levels:{
     starter:[
      "In 1901, about 500 American teachers, the **Thomasites**, arrived in the Philippines and began to teach in English. The Philippines became independent on 4 July 1946. Today the Constitution of 1987 names Filipino and English as the official languages.",
      "**Philippine English** has its own words, such as *comfort room* for a restroom, *for a while* for “please wait” on the phone, and *open the light* for “turn on the light”. It is described as rhotic and influenced by American English.",
      "**Taglish** is the mixing of Tagalog and English. It follows regular patterns, and it is a skill of speakers who know both languages.",
      {key:"Mixing languages is a skill. It does not mean that a speaker is weak in either language."}
     ],
     builder:[
      "Bautista (2000) argued that a standard Philippine English can be defined from the usage of educated speakers. Words come from English with a local meaning (*comfort room*, *batchmate*), from Spanish (*merienda*, *despedida*) and from Tagalog and other Philippine languages (*pasalubong*).",
      "In Taglish, a speaker can put an English word into a Tagalog sentence, as in *Mag-submit ka ng report bukas* (“Submit the report tomorrow”). The speaker must know the grammar of both languages. Speakers also choose to avoid mixing in some settings.",
      "Policy has changed. A bilingual policy from 1974 used English and Filipino. A mother tongue–based policy began in 2009 and was put into law in 2013. Republic Act 12027, which lapsed into law on 10 October 2024, ended the mother tongue as the medium of instruction from kindergarten to Grade 3 and says that the medium reverts to Filipino and, until the law says otherwise, English. Regional languages are auxiliary."
     ],
     pro:[
      "The labels *rhotic* and *American-influenced* describe tendencies, and research on educated Philippine speech also reports local features of stress, vowels and grammar. Treat any description as a tendency and check the speaker group. A recording of a speaker who has lived abroad, for example in Canada or the US, cannot show what is typical of the country.",
      "Research on Taglish reports patterns in where speakers switch, and it treats switching as a sign of control of both languages. Attitudes differ by setting and by generation. Some people see Taglish as a mark of identity, and some prefer a more formal register for school or work. A description should report both attitudes without ranking them.",
      "School policy is a field of debate. Supporters of English or Filipino in the first grades point to the wishes of families and to the cost of materials in many languages. Critics point to studies in many countries which show that children learn well in a language they know. Cross-link: Unit 2 (the Philippines under US rule), Unit 8 and Unit 9."
     ]},
    related:["we-malaysian-english","we-singapore-english","we-second-diaspora"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”"}],
    sources:[{t:"Republic Act No. 12027 (2024), Lawphil", url:"https://lawphil.net/statutes/repacts/ra2024/ra_12027_2024.html"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-malaysian-english", title:"Malaysian English and Manglish", aka:["Manglish","PPSMI"], tags:["world englishes","southeast asia"],
    summary:"Malaysian English has a more formal and a colloquial form. Malay is the national language, and school policy on English has changed several times, so dates need care.",
    levels:{
     starter:[
      "**Malaysian English** is the English of a country with many languages. Malaya became independent on 31 August 1957, and Malaysia was formed on 16 September 1963. Malay is the national language, and English stayed important in law, business and higher education.",
      "Researchers describe a more formal Malaysian English and a colloquial form that many people call **Manglish**. Manglish uses particles such as *lah*, *meh* and *kan*, and words from Malay, Chinese languages and Tamil, such as *makan* and *kopitiam*.",
      {key:"Malaysian English and Singapore English share some features, but they are not the same. Check the place before you claim a meaning."}
     ],
     builder:[
      "English-medium schools were replaced by Malay-medium schools in stages from 1970. Schools that teach in Chinese or Tamil in the primary years remained. A policy known as PPSMI began in 2003 and taught mathematics and science in English. The government later decided to end it, and schools returned to Malay and the other school languages in the early 2010s. A Dual Language Programme later allowed some schools to teach these subjects in English.",
      "Dates differ between sources, and the policies were applied in stages, so check a current official source before you quote a year. Supporters of English in science point to university and work. Critics point to students’ learning in a language they know, and to teachers and rural schools. Both sides want students to do well."
     ],
     pro:[
      "As in Singapore, descriptions of Malaysian English use the ideas of a continuum and of two varieties, and the same warnings apply. A model is a tool. The particles that Malaysian English shares with Singapore English may differ in use, and researchers advise against assuming that a particle has the same meaning in both places.",
      "Malaysia is a multilingual country in which people of Malay, Chinese, Indian and other backgrounds use English with different first languages. For this reason, a single speaker in a recording is a weak basis for claims about the whole country, and this is also true when the speaker has lived in more than one place. Cross-link: Unit 2 and Unit 8."
     ]},
    related:["we-singapore-english","we-philippine-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"},{t:"Pengajaran dan Pembelajaran Sains dan Matematik Dalam Bahasa Inggeris (PPSMI), Wikipedia", url:"https://en.wikipedia.org/wiki/Pengajaran_dan_Pembelajaran_Sains_dan_Matematik_Dalam_Bahasa_Inggeris"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-cline-of-bilingualism", term:"Cline of bilingualism", def:"Kachru’s scale of users of English in India, from users with a little English to users who are very skilled in it.", codex:"we-indian-english"},
   {id:"we-retroflex", term:"Retroflex", def:"A sound made with the tongue tip curled back toward the roof of the mouth. Many Indian languages have retroflex consonants, and many speakers of Indian English use them for /t/ and /d/.", codex:"we-indian-english"},
   {id:"we-stative-progressive", term:"Progressive with stative verbs", def:"The use of *be + -ing* with verbs such as *know*, *have* and *love*, as in *She is knowing the answer*. It is documented in Indian English and in many other varieties.", codex:"we-indian-english"},
   {id:"we-invariant-tag", term:"Invariant tag", def:"A question tag that does not change with the sentence, such as *isn’t it?* in Indian English or *innit* in London English.", codex:"we-indian-english"},
   {id:"we-lakh-crore", term:"Lakh and crore", def:"South Asian words for numbers. A lakh is 100,000, and a crore is 10,000,000 (100 lakh).", codex:"we-indian-english"},
   {id:"we-link-language", term:"Link language", def:"A language that people with different first languages use to talk to each other. English is the link language of Sri Lanka in the Thirteenth Amendment of 1987.", codex:"we-south-asian-englishes"},
   {id:"we-sse", term:"Standard Singapore English (SSE)", def:"The English of schools, news and formal speech in Singapore. Its grammar is close to other standard Englishes, and it has a local pronunciation and some local words.", codex:"we-singapore-english"},
   {id:"we-cse", term:"Colloquial Singapore English (CSE)", def:"The English of informal talk in Singapore, with its own grammar patterns and particles. Many people call it Singlish.", codex:"we-singapore-english"},
   {id:"we-speech-continuum", term:"Speech continuum", def:"A range of varieties with no clear break between them. Platt (1975) used the terms acrolect, mesolect and basilect for points along the Singapore range.", codex:"we-singapore-english"},
   {id:"we-diglossia", term:"Diglossia", def:"A situation in which a community uses two distinct varieties for different settings, such as a formal one and an informal one. Gupta (1994) used this idea for Singapore.", codex:"we-singapore-english"},
   {id:"we-discourse-particle", term:"Discourse particle", def:"A short word at the end of a phrase that adds a stance or a feeling, such as *lah*, *leh* and *lor* in Singapore English. Its meaning depends on tone and context.", codex:"we-singapore-english"},
   {id:"we-sgem", term:"Speak Good English Movement", def:"A government campaign in Singapore, begun in 2000, that promotes standard English. Supporters and critics give different reasons for their views.", codex:"we-singapore-english"},
   {id:"we-thomasites", term:"Thomasites", def:"About 500 American teachers who arrived in the Philippines in August 1901 on the ship *Thomas* to set up a school system taught in English.", codex:"we-philippine-english"},
   {id:"we-taglish", term:"Taglish", def:"The mixing of Tagalog and English in one conversation or sentence. It follows regular patterns and is a skill of people who know both languages.", codex:"we-philippine-english"},
   {id:"we-mtb-mle", term:"Mother tongue–based multilingual education", def:"A school policy that uses the child’s first language in the early grades. The Philippines used it from 2009 and ended it as the medium of instruction for kindergarten to Grade 3 in 2024.", codex:"we-philippine-english"},
   {id:"we-manglish", term:"Manglish", def:"A popular name for colloquial Malaysian English, which has particles such as *lah*, *meh* and *kan* and words from Malay, Chinese languages and Tamil.", codex:"we-malaysian-english"},
   {id:"we-ppsmi", term:"PPSMI", def:"The Malaysian policy, begun in 2003, of teaching mathematics and science in English. It was later ended, and the details differ between sources.", codex:"we-malaysian-english"},
   {id:"we-smith-nelson-levels", term:"Three levels of understanding", def:"Smith and Nelson’s (1985) scheme: intelligibility (recognizing words), comprehensibility (knowing what the sentence means) and interpretability (seeing what the speaker means).", codex:"we-intelligibility-respect"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u5-q01","e6u5-l1",1,"What did Kachru (1983) argue about Indian English?",2,[
     ["That it is a poor copy of British English","Kachru argued the opposite."],
     ["That it exists only in writing","Indian English is spoken as well as written."],
     ["That English in India took on Indian forms and meanings, and is a variety in its own right","Right. His book is called *The Indianization of English*."],
     ["That it has no regional accents","Indian English has many regional accents."]]),
   Q("e6u5-q02","e6u5-l1",1,"What does the word *prepone* mean?",1,[
     ["To cancel an event","It does not mean cancel."],
     ["To move an event to an earlier time","Right. It is the opposite of *postpone*."],
     ["To move an event to a later time","This is the meaning of *postpone*."],
     ["To make an event longer","It is about time of day, not length."]]),
   Q("e6u5-q03","e6u5-l1",1,"How many rupees is 2 lakh rupees?",3,[
     ["2,000","A lakh is much larger than a thousand."],
     ["20,000","A lakh is 100,000, not 10,000."],
     ["2,000,000","This is 20 lakh."],
     ["200,000","Right. One lakh is 100,000, so 2 lakh is 200,000."]]),
   Q("e6u5-q04","e6u5-l1",2,"Which description of a retroflex /t/ is correct?",0,[
     ["The tongue tip is curled back toward the roof of the mouth.","Right. That is how the term is defined."],
     ["The sound is made with the lips.","It is made with the tongue."],
     ["The sound is made in the throat.","That describes a glottal stop."],
     ["The sound is a nasal sound.","A nasal sound is made through the nose."]]),
   Q("e6u5-q05","e6u5-l1",2,"Which statement is the most accurate about *isn’t it?* in Indian English?",1,[
     ["It is used only by learners of English.","Many proficient speakers use it."],
     ["It is an invariant tag that eWAVE documents as a feature of the variety.","Right. It is used for every kind of sentence."],
     ["It is a mistake in every setting.","A regular pattern shared by a community is a feature, not a mistake."],
     ["It means that the speaker is angry.","It is a question tag and does not show anger."]]),
   Q("e6u5-q06","e6u5-l1",2,"Meera’s first language is Malayalam. She learned English at school from age five and uses it every day in India. What is the most accurate statement?",2,[
     ["She is not a real user of Indian English.","Many users of Indian English learned it at school."],
     ["She is a user of English only when she is in an inner-circle country.","The circles describe countries, and she uses English every day in India."],
     ["She is a user of Indian English, and the first language label shows which language she learned first.","Right. The label does not show how well she uses English."],
     ["She should use only British forms.","No variety is more correct than another."]]),
   Q("e6u5-q07","e6u5-l1",3,"A manager abroad reads, “Kindly do the needful.” What is the best way to respond?",3,[
     ["Decide that the writer made a mistake.","It is a regular phrase of Indian English."],
     ["Ignore the message.","The writer wants something done."],
     ["Reply that the phrase is not English.","It is English, and many dictionaries and style guides discuss it."],
     ["Understand it as “please do what is necessary”, and check the details if they are not clear.","Right. It treats the phrase as a feature and keeps the communication clear."]]),
   Q("e6u5-q08","e6u5-l1",3,"A student hears one speaker from Chennai and writes, “Indian English speakers all have this accent.” What is wrong with the claim?",1,[
     ["Nothing is wrong with it.","One speaker cannot show a pattern for a whole country."],
     ["One speaker is one person, and India has many first languages and many accents of English.","Right. A careful claim names what this speaker does."],
     ["The speaker must be from Mumbai.","Nothing in the claim points to Mumbai."],
     ["Indian English has no accent.","Every variety has accents."]]),
   Q("e6u5-q09","e6u5-l1",2,"Which pair is correct?",0,[
     ["*lakh*, 100,000, and *crore*, 10,000,000","Right. A crore is 100 lakh."],
     ["*lakh*, 1,000, and *crore*, 100,000","A lakh is 100,000, and a crore is 10,000,000."],
     ["*lakh*, 10,000,000, and *crore*, 100,000","The two numbers are in the wrong order."],
     ["*lakh*, 100, and *crore*, 10,000","These numbers are far too small."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u5-q10","e6u5-l2",1,"When did Pakistan become independent?",2,[
     ["15 August 1947","This is the date for India."],
     ["4 February 1948","This is the date for Ceylon."],
     ["14 August 1947","Right. Pakistan became independent one day before India."],
     ["26 March 1971","This is the date on which Bangladesh declared independence."]]),
   Q("e6u5-q11","e6u5-l2",1,"What does the Thirteenth Amendment (1987) of Sri Lanka say about English?",0,[
     ["English is the link language","Right. Sinhala and Tamil are the official languages."],
     ["English is the only official language","Sinhala and Tamil are official."],
     ["English is banned in schools","English is not banned."],
     ["English is the national language of Sri Lanka","The amendment names it the link language."]]),
   Q("e6u5-q12","e6u5-l2",1,"What is the Language Movement of 1952?",0,[
     ["Protests in Dhaka for Bangla to be a state language of Pakistan","Right. It is remembered on 21 February."],
     ["A campaign for English in Pakistan","The protests were for Bangla."],
     ["A law that made English official in Nepal","Nepal did not have this law."],
     ["A school policy of Sri Lanka","It took place in Dhaka."]]),
   Q("e6u5-q13","e6u5-l2",2,"Which statement about Nepal is the most accurate?",3,[
     ["It was a British colony until 1947.","Nepal was never ruled by Britain."],
     ["English is not taught there.","English is taught in many schools."],
     ["English is the first language of most people.","Most people speak Nepali or another local language."],
     ["It had contact with British India, and English spread through schools, media and work abroad.","Right. English can spread without colonial rule."]]),
   Q("e6u5-q14","e6u5-l2",2,"The Sinhala Only Act was passed in",1,[
     ["1948","This is the year of Ceylon’s independence."],
     ["1956","Right. It made Sinhala the one official language."],
     ["1971","This is the year of Bangladesh’s independence."],
     ["1987","This is the year of the Thirteenth Amendment."]]),
   Q("e6u5-q15","e6u5-l2",2,"Article 251 of Pakistan’s Constitution of 1973 says that English",2,[
     ["is banned for official use","It allows English to continue."],
     ["is the national language","Urdu is the national language."],
     ["may continue to be used for official purposes until arrangements are made to replace it with Urdu","Right. This is a summary of clause 2."],
     ["must be used in all schools","The article is about official purposes."]]),
   Q("e6u5-q16","e6u5-l2",3,"A classmate says, “Pakistani English is just Indian English.” What is the best reply?",3,[
     ["“You are right, because the two countries are close.”","Closeness does not make two varieties the same."],
     ["“No, they share nothing.”","They share some tendencies."],
     ["“Pakistani English does not exist.”","Researchers have described it."],
     ["“They share some history and tendencies, and they differ in contact languages, policy and words. A careful claim names the feature.”","Right. It gives both sides."]]),
   Q("e6u5-q17","e6u5-l2",3,"Daniel hears a speaker from Dhaka who has lived in the US for one year, and says, “This is the sound of Bangladeshi English.” What is the best response?",0,[
     ["“This is one speaker, and the year abroad may matter, so we cannot say what is typical of the country.”","Right. It stays within the evidence."],
     ["“Yes, all Bangladeshis sound like this.”","This overgeneralizes."],
     ["“No, the speaker has lost the Bangladeshi accent.”","*Lost* is a judgment, and nobody can say this from a clip."],
     ["“Bangladeshi English is not real English.”","It is English, and every variety is a full system."]]),
   Q("e6u5-q18","e6u5-l2",2,"Which is the most careful summary of language in schools in these countries?",2,[
     ["Everybody agrees that English-medium schools are best.","People disagree, and each view has reasons."],
     ["Everybody agrees that home languages should replace English.","People disagree on this too."],
     ["Families often see English as a route to study and work, and others worry about cost, inequality and the status of home languages.","Right. A fair summary reports both."],
     ["School policy has no effect on the variety of English.","Policy shapes who learns English and how."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u5-q19","e6u5-l3",1,"Which are the four official languages of Singapore?",1,[
     ["English, Mandarin, Hokkien and Malay","Hokkien is not an official language."],
     ["English, Malay, Mandarin and Tamil","Right. Malay is the national language."],
     ["English, Hindi, Malay and Tamil","Hindi is not an official language."],
     ["English, Cantonese, Malay and Tamil","Mandarin, not Cantonese, is official."]]),
   Q("e6u5-q20","e6u5-l3",1,"What does *Can!* mean as a full answer in colloquial Singapore English?",0,[
     ["Yes, that is possible","Right. *Cannot* is the matching answer for no."],
     ["No, that is not possible","This is the meaning of *Cannot*."],
     ["Please say it again","It is an answer to a question."],
     ["I do not know","It is not an answer of doubt."]]),
   Q("e6u5-q21","e6u5-l3",1,"Who described the Singapore English speech continuum in 1975?",3,[
     ["Gupta","Gupta wrote about diglossia in 1994."],
     ["Kachru","Kachru wrote about India in 1983."],
     ["Schneider","Schneider’s model dates from 2003 and 2007."],
     ["Platt","Right. He used the terms acrolect, mesolect and basilect."]]),
   Q("e6u5-q22","e6u5-l3",2,"What is the main idea of Gupta’s diglossia model?",2,[
     ["There is only one variety of English in Singapore.","The model describes two."],
     ["Speakers cannot change variety.","Speakers choose by setting."],
     ["Speakers have two distinct varieties and choose between them by setting.","Right. Gupta emphasized the speaker’s choice."],
     ["Colloquial Singapore English is a mistake.","Gupta described it as a variety with its own features."]]),
   Q("e6u5-q23","e6u5-l3",2,"Which statement about the particle *lah* is the most accurate?",1,[
     ["It has one fixed meaning.","Its meaning depends on tone, context and speaker."],
     ["It adds a tone, such as friendly, firm or insistent, and the meaning depends on context.","Right. Researchers describe it with caution."],
     ["It is a mistake in grammar.","It is a regular particle."],
     ["It is used only in Malaysia.","It is used in Singapore and in Malaysia."]]),
   Q("e6u5-q24","e6u5-l3",2,"Which feature can a reading of the “Please call Stella” paragraph show?",0,[
     ["Pronunciation","Right. A reading shows pronunciation only."],
     ["The use of particles","The text has no particles, and a reading is not casual talk."],
     ["Code-switching","A reading follows a fixed text."],
     ["The use of *already* for a finished event","The reader does not choose the grammar of the text."]]),
   Q("e6u5-q25","e6u5-l3",2,"The Speak Good English Movement began in",3,[
     ["1819","This is the year of Raffles’ trading post."],
     ["1965","This is the year of independence."],
     ["1966","This is the year of the bilingual policy."],
     ["2000","Right. It is a government campaign to promote standard English."]]),
   Q("e6u5-q26","e6u5-l3",3,"A visitor says, “Singlish is broken English.” What is the best reply?",1,[
     ["“You are right, because it has no rules.”","Researchers describe its rules."],
     ["“Researchers describe it as a regular system. Many speakers also use standard English and choose by setting.”","Right. This fits both the continuum and the diglossia model."],
     ["“It is the same as British English.”","It has features that British English does not have."],
     ["“It is a secret language.”","It is an ordinary variety."]]),
   Q("e6u5-q27","e6u5-l3",3,"Which is the fairest summary of the debate about the Speak Good English Movement?",2,[
     ["Everyone supports it.","Critics have different views."],
     ["Everyone opposes it.","Supporters have reasons too."],
     ["Supporters see standard English as help with school, work and international communication, and critics see colloquial English as part of identity and fear that the campaign judges speakers.","Right. A fair summary reports both."],
     ["It had no effect on anyone.","The text does not say this, and it avoids both views."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u5-q28","e6u5-l4",1,"When did the Thomasites arrive in the Philippines?",2,[
     ["1898","This is the year of the Treaty of Paris."],
     ["1946","This is the year of independence."],
     ["1901","Right. About 500 teachers arrived in August 1901."],
     ["2024","This is the year of Republic Act 12027."]]),
   Q("e6u5-q29","e6u5-l4",1,"What does *comfort room* mean in Philippine English?",0,[
     ["A restroom","Right. It is often shortened to CR."],
     ["A room for rest","The phrase has a local meaning."],
     ["A bedroom","It is not a bedroom."],
     ["A waiting room","It is not a waiting room."]]),
   Q("e6u5-q30","e6u5-l4",1,"What do *open the light* and *close the light* mean?",3,[
     ["Open a window and close a window","They are about the light."],
     ["Make the light brighter and dimmer","They are about switching it."],
     ["Turn off the light and turn on the light","The order is reversed."],
     ["Turn on the light and turn off the light","Right. The pattern follows Tagalog verbs for open and close."]]),
   Q("e6u5-q31","e6u5-l4",2,"Which is a Taglish sentence pattern from the lesson?",1,[
     ["A sentence in only one language","Taglish mixes two."],
     ["*Mag-submit ka ng report bukas.* (a Tagalog frame with an English verb)","Right. The speaker needs both grammars."],
     ["A sentence with no verb","The lesson’s example has a verb."],
     ["A sentence in a third language","Taglish is Tagalog and English."]]),
   Q("e6u5-q32","e6u5-l4",2,"What does Republic Act 12027 (2024) say about the medium of instruction from kindergarten to Grade 3?",2,[
     ["It must be English only.","The medium reverts to Filipino and, until the law says otherwise, English."],
     ["It must be the mother tongue only.","The act ended the mother tongue as the medium."],
     ["It reverts to Filipino and, until the law says otherwise, English, and regional languages are auxiliary.","Right. This is a summary of Section 1."],
     ["It bans regional languages.","They are auxiliary languages."]]),
   Q("e6u5-q33","e6u5-l4",2,"Which statement about Malaysian school policy is the most careful?",0,[
     ["It has changed several times, so check the dates in a current official source.","Right. The policies were applied in stages."],
     ["It has never changed.","English-medium schools were replaced from 1970, and PPSMI began in 2003."],
     ["English was always the medium of all schools.","Malay is the national language and the main medium."],
     ["English has been banned.","English remains a school subject."]]),
   Q("e6u5-q34","e6u5-l4",2,"Which pair of dates is correct?",3,[
     ["Malaya became independent in 1946 and Malaysia was formed in 1957.","These dates are wrong."],
     ["Malaya became independent in 1963 and Malaysia was formed in 1957.","The order is reversed."],
     ["Malaya became independent in 1965 and Malaysia was formed in 1970.","These dates are wrong."],
     ["Malaya became independent on 31 August 1957 and Malaysia was formed on 16 September 1963.","Right. Singapore joined Malaysia in 1963 and left in 1965."]]),
   Q("e6u5-q35","e6u5-l4",3,"Cheska Ibabao, a master’s student from the Philippines, hears a classmate say, “If you mix Tagalog and English, you cannot speak either language well.” What is the best reply?",1,[
     ["“You are right.”","Mixing needs good control of both languages."],
     ["“Mixing follows regular patterns and shows skill in both, and speakers also choose when not to mix.”","Right. It treats code-switching as a skill."],
     ["“Only children mix languages.”","Adults mix too."],
     ["“Taglish is not a real way of speaking.”","It is a common way of speaking."]]),
   Q("e6u5-q36","e6u5-l4",3,"A learner hears a speaker from Quezon City who has also lived in Canada. Which claim is the most careful?",2,[
     ["“This is how all Filipinos speak.”","One speaker cannot show this."],
     ["“This speaker has lost Philippine English.”","*Lost* is a judgment that a clip cannot support."],
     ["“I can describe what I hear, but a speaker who lived in two countries may show features from both, so I cannot say what is typical of one.”","Right. It limits the claim."],
     ["“This speaker’s English is better because of Canada.”","*Better* is a ranking."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u5-q37","e6u5-l5",1,"What is intelligibility in the scheme of Smith and Nelson (1985)?",0,[
     ["Recognizing the words and sounds","Right. It is the first level."],
     ["Knowing what the sentence means","This is comprehensibility."],
     ["Seeing what the speaker wants","This is interpretability."],
     ["Speaking without an accent","Everybody has an accent."]]),
   Q("e6u5-q38","e6u5-l5",1,"What does interpretability mean?",2,[
     ["Recognizing the sounds of the words","This is intelligibility."],
     ["Knowing what a sentence means","This is comprehensibility."],
     ["Seeing what the speaker means or wants by the words","Right. It is the third level."],
     ["Translating a sentence into another language","Translating is a different skill."]]),
   Q("e6u5-q39","e6u5-l5",2,"Munro and Derwing (1995) found that",1,[
     ["a strong accent always makes speech hard to understand","They found that the two are separate."],
     ["how strong an accent sounds is not the same as how well the speech is understood","Right. A noticeable accent can be fully understood."],
     ["listeners cannot adapt to a new accent","Other work shows that listeners adapt."],
     ["accents have no effect on listeners","The finding is about the difference between accent and understanding."]]),
   Q("e6u5-q40","e6u5-l5",2,"Which is the first step of the listening routine in Lesson 5?",3,[
     ["Write down every sound","The routine starts with the gist."],
     ["Compare with a typical pattern","This comes later."],
     ["Decide whether the accent is good","The routine does not rank."],
     ["Listen for the gist","Right. What is the speaker doing?"]]),
   Q("e6u5-q41","e6u5-l5",2,"Which note is the most careful?",0,[
     ["“I needed two listenings for this clip.”","Right. It puts the problem in the listening and not in the speaker."],
     ["“This speaker is unclear.”","This puts the problem in the speaker."],
     ["“This accent is hard.”","It treats the difficulty as a fact about the accent."],
     ["“These speakers all drop the r.”","This overgeneralizes and uses a judgment word."]]),
   Q("e6u5-q42","e6u5-l5",2,"The table in Lesson 5 says that the *r* after a vowel is “often described as pronounced” in the Philippines. How should a learner use this?",1,[
     ["As proof that every Filipino speaker pronounces it","The table shows tendencies from descriptions."],
     ["As a question: “Do I hear what the descriptions say?”","Right. Any result is a good observation."],
     ["As a rule that a speaker must follow","Speakers vary."],
     ["As a way to rank the speakers","The routine does not rank."]]),
   Q("e6u5-q43","e6u5-l5",3,"Mariya hears a speaker say, “Please prepone the meeting.” She does not know the word. What should she do?",2,[
     ["Decide that the speaker made a mistake","*Prepone* is a regular word of Indian English."],
     ["Ignore the word and guess","An interpreter does not guess."],
     ["Check with the speaker, for example by asking, “Do you mean an earlier time?”","Right. A check treats the problem as shared."],
     ["Tell the speaker to say *postpone*","This changes the meaning and treats the word as an error."]]),
   Q("e6u5-q44","e6u5-l5",3,"A listener says, “I could not understand the speaker from Singapore, so Singapore English is hard to understand.” What is the best response?",3,[
     ["“Yes, it is hard.”","One listener’s difficulty is not a fact about a variety."],
     ["“The speaker should speak more clearly.”","The problem may be in the listening, and understanding is shared."],
     ["“Singapore English is not English.”","It is English, and every variety is a full system."],
     ["“It was hard for you this time. Listening to a new accent often takes a few minutes, and one speaker is not a whole country.”","Right. It avoids a judgment and points to adaptation."]]),
   Q("e6u5-q45","e6u5-l5",3,"A student compares the Columbus speaker (Unit 4) with the Colombo speaker (this unit) and writes, “The Colombo speaker did not pronounce the r, so Sri Lankans are non-rhotic.” What is the best correction?",1,[
     ["“Nothing needs to change.”","One speaker cannot show a pattern for a country."],
     ["“Say what this speaker does, say what descriptions report as typical, and add that one speaker is one person. This speaker also lived in the US for five years.”","Right. It uses the three parts of a careful claim."],
     ["“Say that the Columbus speaker is better.”","This ranks the speakers."],
     ["“Delete the comparison.”","A comparison is useful if the claim is careful."]])
  ]
});
})();
