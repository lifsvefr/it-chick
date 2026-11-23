/* World Englishes · Unit 1 (e6u1) · One language, many Englishes */
ICA.addUnit({
  id:"e6u1", track:"e6", n:1, title:"One language, many Englishes", icon:"🌏",
  blurb:"Who uses English, and how? You will learn why counts of English users differ, and how linguists use the words accent, dialect, variety and language. You will study Kachru’s three circles, see where the model falls short, and meet the many Englishes of one small house in Japan.",
  goals:[
    "Tell first-language, second-language and foreign-language users of English apart, and explain why counts of users differ",
    "Use the words accent, dialect, variety, language and standard English accurately and without ranking them",
    "Describe Kachru’s inner, outer and expanding circles, and say what the model gets right",
    "Explain where the circles fall short: multilingual speakers, English as a lingua franca, and later models",
    "Describe intelligibility, and respond to unfamiliar Englishes with respect"
  ],
  read:[
    {book:"eling", where:"Chapter 10, “Language Variation and Change”, sections 10.1 “What is variationist sociolinguistics?” and 10.2 “Language varies”", note:"Read it after Lesson 2. The book is written for linguistics students and does not cover World Englishes models, so take it as background on variation."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u1-l1", title:"Who uses English?", minutes:50,
   hook:{q:"Which statement about English users around the world is the safest?", options:["Most users live in the United Kingdom and the United States.","By most estimates, people who use English as an additional language are at least as many as first-language users.","Experts agree on one exact number of English users.","English has more first-language speakers than any other language."], answer:1, reveal:"**The second statement.** Most estimates say that people who learned English as an additional language are at least as many as people who grew up with it. No exact number exists, because experts count in different ways. Mandarin Chinese usually ranks first for first-language speakers. This lesson explains who the users are and why the counts differ."},
   goals:[
     "Explain first-language (L1), second-language (L2) and foreign-language users, and why the boxes overlap",
     "Say why a person’s repertoire matters more than a single label",
     "Give three reasons why reports give different numbers of English users",
     "Read a statistic about English users with the right questions"
   ],
   learn:[
    {h:"Three ways of having English", body:[
      {lead:"A statement like “English is spoken by billions of people” hides very different lives."},
      "Linguists often sort English users into three groups. These groups describe **how** a person came to use English and **where** it is used in their community.",
      {table:[["Group","How English arrives","Example"],["[[we-l1-user|First-language (L1) user]]","Learned from birth, at home, as one of the first languages","A child growing up in Leeds, Dallas, Perth or Auckland"],["[[we-l2-user|Second-language (L2) user]]","Learned alongside other languages, and used in daily life, school, work or government in that country","A teacher in Lagos who speaks Yoruba at home; an office worker in Singapore"],["[[we-efl|Foreign-language (EFL) user]]","Learned mainly in class, and used with visitors, online or for work abroad","A student in Osaka; a nurse in São Paulo who reads research in English"]]},
      "“Second” does not mean “worse” or “learned later”. A child in Nigeria or India can start using English at age four. The word means **additional**: English is one of the languages in the person’s life. Many linguists now say *additional-language user* for this reason.",
      "You may also hear *native speaker*. It is a common term, but it suggests that a person owns English because of where they were born. It also hides skill: some first-language users write poorly, and many additional-language users write excellent English. This course says *first-language user* and *additional-language user*, and uses *native speaker* only when a source does.",
      {tip:"The three groups describe a situation, not a level. A foreign-language user can be more fluent than a first-language user."}
    ]},
    {h:"One person, many languages", body:[
      "Most people in the world use more than one language every week. A person who does this is **multilingual**, and the languages they use make up their **repertoire**.",
      {ex:"Oluwaseun lives in Lagos, Nigeria. He speaks Yoruba with his family. At university, lectures and exams are in English. With friends at the market he often uses Nigerian Pidgin. Which one is his “first” language? It depends on whom you ask and when.", label:"Worked example: a repertoire"},
      {fig:'<svg viewBox="0 0 340 250"><defs><marker id="e6a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-gold" x="95" y="8" width="150" height="48" rx="8" stroke-width="2"/><text x="170" y="29" text-anchor="middle">Oluwaseun</text><text class="s" x="170" y="46" text-anchor="middle">Lagos, Nigeria</text><path class="d-ink" d="M130 58L58 108" stroke-width="2" marker-end="url(#e6a1)"/><path class="d-ink" d="M170 58V108" stroke-width="2" marker-end="url(#e6a1)"/><path class="d-ink" d="M210 58L282 108" stroke-width="2" marker-end="url(#e6a1)"/><rect class="d-sage" x="6" y="112" width="104" height="82" rx="8" stroke-width="2"/><text x="58" y="138" text-anchor="middle">Yoruba</text><text class="s" x="58" y="158" text-anchor="middle">family</text><text class="s" x="58" y="176" text-anchor="middle">home</text><rect class="d-lup" x="118" y="112" width="104" height="82" rx="8" stroke-width="2"/><text x="170" y="138" text-anchor="middle">English</text><text class="s" x="170" y="158" text-anchor="middle">lectures</text><text class="s" x="170" y="176" text-anchor="middle">exams, work</text><rect class="d-rose" x="230" y="112" width="104" height="82" rx="8" stroke-width="2"/><text x="282" y="138" text-anchor="middle">Pidgin</text><text class="s" x="282" y="158" text-anchor="middle">friends</text><text class="s" x="282" y="176" text-anchor="middle">the market</text><text class="s" x="170" y="226" text-anchor="middle">One repertoire, three languages, three settings</text></svg>', alt:"Oluwaseun at the top, with three arrows to three boxes. Yoruba is used with family at home. English is used in lectures, exams and work. Nigerian Pidgin is used with friends at the market.", cap:"A repertoire: each language does a different job."},
      "Seen this way, a person does not belong in one box. English may be a home language for one family, a school language for the next, and a language for watching films in a third. The three groups are a way to describe **communities and situations**, and a single person can move between them in life.",
      "Toby Whitlock, from Australia, is now a master’s student in Japanese linguistics. Before that, he taught English in the Japanese countryside for two years. His students used English as a foreign language: in class, in exams and sometimes online. Toby’s own English is a first-language English from Australia."
    ]},
    {h:"Why the counts differ", body:[
      "Search for “how many people speak English” and you will find different numbers. This is not because someone made a mistake. It is because the question has no single answer. Each report has to decide four things.",
      {list:["**What counts as “using” English.** Is it a person who can say *hello*, hold a conversation, read a contract, or use English every day?","**Who answers.** Some national censuses ask about language, and many do not. Questions differ: “main language at home”, “languages you can speak”, or “languages you use at work”.","**How ability is measured.** Most surveys ask people to rate themselves. People judge themselves differently, and cultures differ in how modest they are.","**When the count was made.** Education programs and the internet change numbers fast, especially for younger people."]},
      "Here is an invented town of 1,000 adults. It shows how the same people produce three different totals.",
      {table:[["Definition used by the report","Adults counted"],["English is the main language at home","120"],["Can hold a simple conversation in English","380"],["Uses some English every week (work, online, travel)","640"]]},
      "All three reports are honest, and all three describe the same town. The right number depends on the question you want to answer."
    ]},
    {h:"Reading a statistic about English", body:[
      "Writers often quote big totals. David Crystal, a well-known British linguist, discussed this in a 2008 article, “Two thousand million?”. In 1985 he had settled on about one billion users. In 2008 he moved his estimate up, toward two billion, or about a third of the world’s population. He said clearly that the total depends on the level of English you count. Other researchers and databases give smaller totals, because they use stricter definitions. **Estimates vary**, and the honest way to quote them is with a range, a source and a year.",
      {key:"Ask three questions of any number: who counted, what counted as “using English”, and when."},
      "Most estimates agree on the shape of the picture. People who use English as an additional language are at least as many as first-language users, and the group is growing. That is why this course looks at the Englishes of many countries, and not only of the places where English is the first language.",
      {warn:"Do not turn a range into a fact. “About 1.5 billion” and “nearly 2 billion” are not mistakes. They answer slightly different questions."}
    ]},
    {h:"Common misunderstandings", body:[
      {list:["**“Second-language users are learners.”** Many use English every day for decades and shape how it is used in their country.","**“First-language users set the standard.”** They often are not the group that uses English most. Lesson 4 returns to this.","**“Each country has one kind of English user.”** Inside one country there are first-language, second-language and foreign-language users at the same time.","**“A bigger number means a better English.”** Counts show how many people use English. They say nothing about quality."]},
      "In the next lesson you will look at the words that describe the differences between Englishes: accent, dialect, variety and language."
    ]}
   ],
   try:[
    {id:"e6u1-l1-x1", type:"mcq", q:"Priya lives in Mumbai. She speaks Marathi at home and started English at school at age four. Today she uses English every day at work, and in her country it is an official language used in education. Which label fits her English best?", options:[
      {t:"Second-language (L2) use: English is an additional language used in daily life and institutions.", ok:true, why:"Right. She uses English every day in a community where it has an institutional role, but it is not her only home language."},
      {t:"Foreign-language use, because she did not speak it as a baby.", why:"Foreign-language use means English is mostly learned in class and used with visitors or online. Priya uses it every day at work."},
      {t:"First-language use, because she started so young.", why:"Her first home language is Marathi. Starting early does not change that, although in some families English does become a first language."},
      {t:"No label fits, so linguists cannot describe her.", why:"Labels are not exact, but second-language use describes her situation well."}
    ]},
    {id:"e6u1-l1-x2", type:"sort", q:"Which group does each situation describe best?", buckets:["First-language use","Second-language use","Foreign-language use"], items:[
      {t:"A child in Perth speaks English with her parents", b:0, why:"English is the home language from birth."},
      {t:"A bank clerk in Singapore uses English with customers all day", b:1, why:"English is an additional language with a daily role in work and institutions."},
      {t:"A student in Osaka practices English for an exam", b:2, why:"English is learned mainly in class, with few daily uses."},
      {t:"A civil servant in Accra writes government reports in English", b:1, why:"English has an official role in Ghana, and he uses it every day as an additional language."},
      {t:"A nurse in São Paulo reads English research papers", b:2, why:"English is used for one purpose, reading, and is not a language of daily community life."},
      {t:"A baby in Dallas hears English at home", b:0, why:"English is the home language from birth."}
    ]},
    {id:"e6u1-l1-x3", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Repertoire","All the languages and varieties a person uses","The set of languages one speaker has available, each for its own settings."],
      ["Multilingual","Using more than one language regularly","Most people in the world do this."],
      ["Foreign-language use","English learned mainly in class and used with visitors or online","It is common in countries where English has no official role."],
      ["Additional-language user","A person for whom English is one of several languages","This phrase avoids the idea that “second” means “worse”."]
    ]},
    {id:"e6u1-l1-x4", type:"mcq", q:"A news site says: “1.5 billion people speak English.” What is the best first question?", options:[
      {t:"Who counted, what counted as speaking English, and when?", ok:true, why:"Right. The definition, the source and the date explain why totals differ."},
      {t:"Is the number exactly right, to the last person?", why:"No such exact number exists. The question has no single answer."},
      {t:"Which country has the biggest share?", why:"This is an interesting question, but it does not test the claim."},
      {t:"Why do linguists want to make English look smaller?", why:"Nobody is trying to do that. Different definitions produce different totals."}
    ]},
    {id:"e6u1-l1-x5", type:"number", q:"An invented survey asks 2,000 adults in a town. 240 say English is the main language at home. 560 say they can hold a simple conversation in English. What percentage of the 2,000 can hold a simple conversation?", answer:28, tol:0, unit:"%", why:"Divide 560 by 2,000: 560 ÷ 2,000 = 0.28, which is 28%. The 240 who use English at home are 12%. Different definitions give different shares of the same town.", wrongs:[
      {v:12, tol:0, why:"This is 240 ÷ 2,000, the share who use English at home. The question asks about the conversation group."},
      {v:56, tol:0, why:"You divided by 1,000 instead of 2,000."},
      {v:280, tol:0, why:"You divided 560 by 2 and not by 2,000."}
    ]},
    {id:"e6u1-l1-x6", type:"spot", q:"Hana wrote this summary for a study group. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Foreign-language users learn English mainly in class.", flag:false, why:"Correct description of the group."},
      " ",
      {t:"Second-language users always speak worse English than first-language users.", flag:true, why:"The groups describe how English arrives and where it is used, not the level of skill."},
      " ",
      {t:"A person can use three languages every day.", flag:false, why:"This is normal for many people."},
      " ",
      {t:"There is one exact, agreed number of English users.", flag:true, why:"Estimates vary because reports define “use” differently, and they count in different years."},
      " ",
      {t:"Reports can differ because they use different definitions of a user.", flag:false, why:"This is the main reason for differences."}
    ]},
    {id:"e6u1-l1-x7", type:"order", q:"Put these steps in a sensible order for checking a statistic about English users.", items:[
      {t:"Find where the number first came from", why:"Start with the original source, not a page that repeats it."},
      {t:"Note how that source defines a “user”, and the year of its count", why:"Once you have the original source, its definition and date explain what the number measures."},
      {t:"Find a second source and note its definition and year", why:"You need the first source’s details before you can see how a second one differs."},
      {t:"Explain why the two totals differ", why:"Compare the two definitions and dates. This shows how much the total can change."},
      {t:"Quote it as a range, with source and year", why:"This last step records the result with its limits."}
    ]},
    {id:"e6u1-l1-x8", type:"explain", q:"A friend says: “Only people from the UK, the US and Australia speak real English. Everyone else is just learning it.” Reply to your friend in a kind, accurate way.", size:"3–5 sentences", hint:"Think about second-language users who use English every day, and about the word “learner”.", model:"Many people outside those countries use English every day, for study, work and government, and they have done so for generations. They are not “just learning”: in places such as Nigeria, India and Singapore, English is an additional language with an important role. Of course, some people are learners, and we can respect both groups. Most estimates say that additional-language users are at least as many as first-language users. So the idea that “real” English belongs only to a few countries does not fit how English is used in the world today.", points:["Says that many people outside those countries use English every day in an important role","Says that “second” or “additional” does not mean “just learning” or “worse”","Mentions that additional-language users are at least as many as first-language users, hedged with “most estimates”","Keeps a kind, respectful tone"]}
   ],
   apply:{
    intro:"You need a notebook or a notes app. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Map your own repertoire", how:[
       "List every language or variety you use in a normal week, including dialects, a school language and one you only read.",
       "Next to each, write who you use it with, where, and how often.",
       "Mark the ones that you would call first-language, second-language or foreign-language use. Note any that do not fit."
     ], write:"Language… with whom… where… how often… my label…"},
     {t:"Compare two statistics", how:[
       "Search the web for “number of English speakers in the world” and open two pages from different organizations.",
       "For each page, write the number, the year and how it defines a speaker or user.",
       "Write two sentences to explain why the two numbers are not the same."
     ], write:"Source 1: number, year, definition… Source 2… Why they differ…"}
    ],
    proof:"A repertoire map with at least three languages or varieties, each labeled. Two sources with their numbers, years and definitions, and two sentences about the difference."
   },
   read:[
    {book:"eling", where:"Background reading: Chapter 10, “Language Variation and Change”, section 10.1 “What is variationist sociolinguistics?”", note:"It shows why linguists study how real people use language across places and groups."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u1-l2", title:"Accent, dialect, variety, language", minutes:55,
   hook:{q:"Danish, Norwegian and Swedish speakers can often understand each other, yet these are called three languages. Mandarin and Cantonese speakers often cannot understand each other, yet both are often called Chinese. What helps to explain this?", options:["Only the structure of the languages decides it.","History, politics and identity matter as well as the structure of the languages.","Linguists voted on each case.","Written languages are always separate languages."], answer:1, reveal:"**History, politics and identity matter too.** How alike two varieties sound is one clue. People also ask: do they have separate written standards, separate governments, and a separate sense of identity? This is why linguists use the neutral word *variety* and avoid ranking one form above another."},
   goals:[
     "Use accent, dialect, variety, register and standard variety accurately",
     "Explain why “language or dialect?” has no clean answer",
     "Explain that English has several standards and not one",
     "Decide whether a form is a documented feature of a variety, and say what that means"
   ],
   learn:[
    {h:"Variety: the neutral word", body:[
      {lead:"When linguists want to talk about any form of a language without ranking it, they say variety."},
      "In *How English Works*, Unit 1 introduced accent, dialect and standard English. Here we use the same ideas for the whole world. A **variety** (also *lect*) is any form of a language that a group of people share. A variety can belong to a place, a social group, an age group or a situation.",
      {table:[["Word","What it covers","Example"],["[[accent]]","Only the sound of speech","Pronouncing the *r* at the end of *car*, or not"],["[[dialect]]","Words and grammar, and usually sound too","Saying *prepone* for “move to an earlier time”"],["Variety","Any form of a language, with no ranking","Indian English; Australian English; the English of a school"],["[[register]]","Changes with the situation, not the place","The same person writing an email and chatting"],["Standard variety","The form used in education, news and law","Standard American English; standard Australian English"]]},
      "The word *dialect* often carries a hidden meaning: “a lower form of a real language”. Linguists do not use it that way. A dialect is a full, rule-governed system, just as a standard is. For a refresher, see {{accents-dialects-variation}} and {{standard-english-explained}}.",
      {tip:"If you are not sure which word to use, *variety* is always safe."}
    ]},
    {h:"Language or dialect?", body:[
      "Is Cantonese a dialect of Chinese, or a language? Is Norwegian a language, or a dialect of Danish? These questions look simple, but no test gives a clean answer.",
      {list:["**Mutual intelligibility.** Can speakers understand each other without learning the other variety? It is a useful clue, but it is a matter of degree.","**Standardization.** Does the variety have its own written standard, dictionaries and schools?","**Politics and identity.** Does the community see itself as speaking a separate language, and does a state support it?"]},
      "The best known case is Scandinavia. Many Danish, Norwegian and Swedish speakers can follow each other, yet each has its own written standard and its own country, so they are called three languages. In China, the varieties Mandarin and Cantonese often cannot be understood by each other’s speakers, but they share one writing system and one country, so they are often called Chinese “dialects”.",
      "A well-known saying puts it this way: a language is a dialect with an army and a navy. The linguist Max Weinreich made it famous. He published it in Yiddish in 1945, and he said that he had heard it from a listener at one of his talks. It is a joke with a point: power and politics help to decide the names.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="22" text-anchor="middle">Four clues that people use</text><rect class="d-sage" x="10" y="36" width="150" height="70" rx="8" stroke-width="2"/><text x="85" y="62" text-anchor="middle">Understanding</text><text class="s" x="85" y="82" text-anchor="middle">Can speakers follow</text><text class="s" x="85" y="98" text-anchor="middle">each other?</text><rect class="d-lup" x="180" y="36" width="150" height="70" rx="8" stroke-width="2"/><text x="255" y="62" text-anchor="middle">Standard</text><text class="s" x="255" y="82" text-anchor="middle">Own spelling, books</text><text class="s" x="255" y="98" text-anchor="middle">and schools?</text><rect class="d-gold" x="10" y="120" width="150" height="70" rx="8" stroke-width="2"/><text x="85" y="146" text-anchor="middle">State</text><text class="s" x="85" y="166" text-anchor="middle">Does a government</text><text class="s" x="85" y="182" text-anchor="middle">back it?</text><rect class="d-rose" x="180" y="120" width="150" height="70" rx="8" stroke-width="2"/><text x="255" y="146" text-anchor="middle">Identity</text><text class="s" x="255" y="166" text-anchor="middle">Do speakers call it</text><text class="s" x="255" y="182" text-anchor="middle">their own language?</text><text x="170" y="222" text-anchor="middle">No single clue decides.</text><text class="s" x="170" y="246" text-anchor="middle">Norwegian and Swedish: high understanding,</text><text class="s" x="170" y="264" text-anchor="middle">but separate standards and states.</text><text class="s" x="170" y="288" text-anchor="middle">So they are called two languages.</text></svg>', alt:"Four boxes: understanding, standard, state and identity. A note says that no single clue decides. Norwegian and Swedish have high understanding, but separate standards and states, so they are called two languages.", cap:"Four clues that people use. None decides alone."}
    ]},
    {h:"English has several standards", body:[
      "A **standard variety** is the form that a community uses in education, news and law. It has dictionaries and style guides. It is a social choice, as Unit 1 of *How English Works* explained, and it is not a better or more logical English.",
      "Because English is used in many countries, it has **several standards**. American English, Australian English, South African English and Indian English each have their own widely accepted written and spoken forms. The International Corpus of English (ICE) project collects comparable samples of speech and writing from many countries, so researchers can describe each national standard with evidence.",
      "Standard is not the same as accent. Speakers of standard English have many accents. Received Pronunciation (RP) is an accent that a small share of people in England use, and it is not the standard of grammar. In the same way, a first-language user is not the only person who can speak a standard. A lawyer in Nairobi or a professor in Singapore may use standard English every day.",
      "Our course uses two reference accents for sounds, General American and Southern British (see *How English Works*, Unit 2). That is a teaching choice. It does not rank those accents above others."
    ]},
    {h:"Feature or error?", body:[
      "A linguist must often decide: is this form a **feature** of a variety, or an **error**? The answer depends on evidence. Being “different from the standard” does not make a form an error.",
      "The *electronic World Atlas of Varieties of English* ([eWAVE](https://ewave-atlas.org/), CC BY 3.0) records which grammar features are found in 77 Englishes: 51 varieties of English and 26 English-based pidgins and creoles. Researchers collected it from many sources. It lets you check whether a form is a regular pattern in some community.",
      {table:[["Form","Where researchers have documented it","Standard in exams?"],["*You are coming tomorrow, isn’t it?* (one tag for every sentence)","Many second-language Englishes, for example in South Asia and parts of Africa and Southeast Asia","No"],["*We bought new furnitures.* (a plural for a word that is uncountable in standard English)","Many second-language Englishes, for example in parts of Africa and Asia","No"],["*I am knowing the answer.* (progressive form with a state verb)","South Asian English and other second-language Englishes","No"],["*She be working.* (habitual *be*)","African American English","No"]]},
      "Four questions can help you decide.",
      {ol:["**Is it systematic?** Does the speaker use it the same way each time, and for the same meaning?","**Is it shared?** Do many people in a community use it, and not only one person?","**Is it used by proficient speakers?** Do educated speakers use it in their normal speech or writing?","**Is it documented?** Does a source such as eWAVE or a corpus record it?"]},
      "If the answer is *yes* to these, call it a **feature** of that variety. If a form is irregular and not shared, it may be a learner form, a slip, or a typing error. That is also normal, and it is not a moral failing. Do not call anything a feature or an error just because of a speaker’s origin.",
      {warn:"“A documented feature” and “accepted in every setting” are different claims. A feature of Nigerian English can still be marked down in an exam that asks for one particular standard. Both statements can be true at the same time."},
      {ex:"Listen to a speaker read a short paragraph, “Please call Stella…”, from the Speech Accent Archive. Every speaker in the archive reads the same paragraph. Notice only what you hear. Do not decide whether the speaker is “better” or “worse” than anyone else.", label:"Listen: speaker 1", listen:"e6u1-l2-a1"},
      {ex:"Now listen to a second speaker reading the same paragraph. What do you notice about the rhythm and the vowels? Which words do you recognize at once?", label:"Listen: speaker 2", listen:"e6u1-l2-a2"}
    ]}
   ],
   try:[
    {id:"e6u1-l2-x1", type:"mcq", q:"Which difference is a difference of **dialect** and not only of accent?", options:[
      {t:"One speaker says *prepone* and another says *move to an earlier time*.", ok:true, why:"Right. This is vocabulary, so it is a dialect difference."},
      {t:"One speaker pronounces *r* after a vowel and another does not.", why:"This is a difference of sound only, so it is an accent difference."},
      {t:"One speaker says *bath* with a longer vowel.", why:"A vowel difference is also a sound difference only."},
      {t:"One speaker speaks faster than another.", why:"Speed is a matter of style. It is not a dialect difference."}
    ]},
    {id:"e6u1-l2-x2", type:"sort", q:"Is each form a **documented feature** of some variety, or **not a feature of any variety** because it breaks basic patterns of English?", buckets:["Documented feature of some variety","Not a feature of any variety"], items:[
      {t:"*You are coming tomorrow, isn’t it?*", b:0, why:"A single tag for every sentence is documented in several second-language Englishes."},
      {t:"*We bought new furnitures.*", b:0, why:"A plural for an uncountable noun is documented in many second-language Englishes."},
      {t:"*Table the on sat cat black.*", b:1, why:"The word order does not follow the pattern of any variety of English."},
      {t:"*I am knowing the answer.*", b:0, why:"The progressive form with a state verb is documented in South Asian English and in other varieties."},
      {t:"*She be working* (usually works)", b:0, why:"Habitual *be* is a regular feature of African American English."},
      {t:"*Of go I yesterday to not store.*", b:1, why:"No variety of English orders words like this."}
    ]},
    {id:"e6u1-l2-x3", type:"match", q:"Match each term to what it covers.", pairs:[
      ["Accent","Sound only","It is the part of a variety that you hear."],
      ["Dialect","Words and grammar, and usually sound","It can be regional or social."],
      ["Register","Changes with the situation","One person uses several registers in a day."],
      ["Standard variety","Used in education, news and law","It is a social choice, not a better English."]
    ]},
    {id:"e6u1-l2-x4", type:"mcq", q:"Danish, Norwegian and Swedish speakers can often understand each other, yet they are called three languages. What is the best explanation?", options:[
      {t:"Separate standards, states and identities count as well as understanding.", ok:true, why:"Right. Mutual intelligibility is only one clue. History and politics matter too."},
      {t:"The three varieties cannot be understood at all.", why:"Speakers often can follow each other. That is why the case is interesting."},
      {t:"A group of linguists voted on it.", why:"No such vote took place. The names come from history and politics."},
      {t:"Only the length of their words differs.", why:"Word length is not the reason for calling them separate languages."}
    ]},
    {id:"e6u1-l2-x5", type:"mcq", q:"Which are good questions to ask when you decide whether a form is a **feature** of a variety? Choose all that apply.", options:[
      {t:"Is it used in a systematic way, with the same meaning each time?", ok:true, why:"Systematic use is a mark of a feature."},
      {t:"Do many people in a community use it?", ok:true, why:"Sharing by a community separates a feature from one person’s slip."},
      {t:"Do educated, proficient speakers use it in their normal speech or writing?", ok:true, why:"Proficient use shows that it is a stable part of the variety."},
      {t:"Does the speaker come from a country far from the UK?", why:"A speaker’s origin is not evidence about the form. Judge the form."}
    ]},
    {id:"e6u1-l2-x6", type:"spot", q:"Tap each statement in this forum post that is **inaccurate or unfair**.", ask:"inaccurate or unfair", parts:[
      {t:"Standard English is the English with a British accent.", flag:true, why:"Standard English is about grammar, words and spelling. It can be spoken with many accents."},
      " ",
      {t:"An accent is only about sound.", flag:false, why:"Correct. Dialect covers words and grammar too."},
      " ",
      {t:"Dialects are broken versions of real languages.", flag:true, why:"A dialect is a full, rule-governed system."},
      " ",
      {t:"English has several standard varieties.", flag:false, why:"Correct. Several countries have their own standard."},
      " ",
      {t:"If two varieties are mutually intelligible, they must be the same language.", flag:true, why:"Intelligibility is one clue. Norwegian and Swedish are often understood but are called two languages."}
    ]},
    {id:"e6u1-l2-x7", type:"order", q:"Put these steps in a sensible order for deciding whether a form is a feature or an error.", items:[
      {t:"Describe the form and its meaning", why:"Start from what the speaker actually says, before judging."},
      {t:"Check whether the speaker uses it systematically", why:"A regular pattern is the first sign of a feature."},
      {t:"Check whether many people in a community use it", why:"Sharing separates a feature from a personal slip."},
      {t:"Look for a record in a source such as eWAVE or a corpus", why:"Documentation gives outside evidence."},
      {t:"Label it for the setting you are in", why:"Last, decide whether it suits the exam, the report or the chat."}
    ]},
    {id:"e6u1-l2-x8", type:"explain", q:"A teacher marks *We have a lot of furnitures* as wrong. A student says it is a feature of her English. Explain how both can be true.", size:"3–5 sentences", hint:"Separate “documented in a variety” from “accepted in an exam”.", model:"Researchers have documented plurals of nouns such as *furniture* in many second-language Englishes, so the form can be a feature of a variety. It is systematic and shared by a community. The teacher is also right, because many exams and style guides ask for the form *furniture* with no plural. So the form can be a feature of one variety and still be marked down in a setting that asks for another standard. A kind way to say this is: “That is a regular form in your English, and in this exam we use this other form.”", points:["Says that the form is documented as a feature in some varieties","Says that an exam or style guide may require a different standard","Separates the facts (documentation) from the setting (the exam)","Uses a kind tone, and does not call either person wrong"]}
   ],
   apply:{
    intro:"You need a notebook and a web browser. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Sort ten words from your own life", how:[
       "Write ten words or phrases that you hear or use with friends, family or at work.",
       "Label each one: accent (sound only), dialect (word or grammar), or register (situation).",
       "Choose one that surprised you, and write why."
     ], write:"Word… label… why… The surprising one…"},
     {t:"Look up a feature in eWAVE", how:[
       "Open the eWAVE atlas (ewave-atlas.org) and choose a feature from the list that interests you.",
       "Note the name of the feature and three varieties where researchers found it.",
       "Write one sentence about what this tells you about the variety."
     ], write:"Feature… three varieties… my sentence…"},
     {t:"Listen without judging", how:[
       "Open the Speech Accent Archive (accent.gmu.edu) and listen to two speakers who read the same paragraph.",
       "Write three sound differences that you hear, with no words such as “bad” or “better”.",
       "Check that you understood every word of the paragraph. Write what helped you."
     ], write:"Speaker A… Speaker B… three differences… what helped me understand…"}
    ],
    proof:"Ten sorted words, one eWAVE feature with three varieties, and a list of three sound differences written without judging."
   },
   read:[
    {book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.2 “Language varies”", note:"It shows how regional and social varieties differ in a regular way. Take it slowly: the book is written for linguistics students."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u1-l3", title:"Kachru’s three circles", minutes:55,
   hook:{q:"In Kachru’s three-circles model, what decides which circle a country is placed in?", options:["How many people there speak English","How English arrived in the country, and what role it has there","How rich the country is","How close the local accent is to British English"], answer:1, reveal:"**How English arrived, and what role it has.** The model sorts countries by the history of English there and by its place in daily life: first language, institutional additional language, or foreign language. Numbers, wealth and accent do not decide it. This lesson looks at the model, at what it gets right, and at how to use it with care."},
   goals:[
     "Describe the inner, outer and expanding circles, with examples",
     "Explain norm-providing, norm-developing and norm-dependent",
     "Say how English reached each circle, in simple terms",
     "Explain what the model gets right, and why it is not a ranking"
   ],
   learn:[
    {h:"A picture from 1985", body:[
      {lead:"One simple drawing changed how many linguists talk about English: three circles, one inside the other."},
      "The linguist Braj Kachru (1985) proposed that the countries where English is used fall into three groups. He drew them as concentric circles. The model is called the **three circles of English**, and it is the best-known model in the study of World Englishes.",
      {table:[["Circle","English in the country","Examples","Norms"],["[[we-inner-circle|Inner]]","First language of most people; the traditional home of English, or places where settlers from Britain made it the main language","UK, USA, Ireland, Canada, Australia, New Zealand","[[we-norm-providing|Norm-providing]]"],["[[we-outer-circle|Outer]]","Additional language with an official or institutional role: courts, schools, government","India, Nigeria, Singapore, the Philippines, Ghana, Kenya","[[we-norm-developing|Norm-developing]]"],["[[we-expanding-circle|Expanding]]","Foreign language, used for trade, study and media; no official role","Japan, China, Brazil, Germany, Indonesia, Vietnam, Mexico","[[we-norm-dependent|Norm-dependent]]"]]},
      "*Norm* means a standard of what is correct. In the inner circle, Kachru said, norms come from within the circle, for example in dictionaries and school grammars. In the outer circle, norms are being developed locally. In the expanding circle, learners have mostly looked to norms from outside.",
      {fig:'<svg viewBox="0 0 340 392"><circle class="d-rose" cx="170" cy="170" r="150" stroke-width="2"/><circle class="d-gold" cx="170" cy="170" r="100" stroke-width="2"/><circle class="d-sage" cx="170" cy="170" r="50" stroke-width="2"/><text x="170" y="46" text-anchor="middle">Expanding circle</text><text class="s" x="170" y="63" text-anchor="middle">norm-dependent</text><text x="170" y="92" text-anchor="middle">Outer circle</text><text class="s" x="170" y="108" text-anchor="middle">norm-developing</text><text x="170" y="166" text-anchor="middle">Inner</text><text class="s" x="170" y="184" text-anchor="middle">norm-providing</text><text class="s" x="170" y="346" text-anchor="middle">Inner: UK, USA, Australia, Ireland</text><text class="s" x="170" y="364" text-anchor="middle">Outer: India, Nigeria, Singapore, Philippines</text><text class="s" x="170" y="382" text-anchor="middle">Expanding: Japan, China, Brazil, Vietnam</text></svg>', alt:"Three concentric circles. The inner circle is labeled inner, norm-providing. The middle ring is the outer circle, norm-developing. The outermost ring is the expanding circle, norm-dependent. Below, three lines give example countries for each circle.", cap:"Kachru’s three circles of English (1985), simplified."}
    ]},
    {h:"How English reached each circle", body:[
      "Each circle has a different history. Unit 2 tells these stories in detail. Here is the short version.",
      {list:["**Inner circle.** English speakers moved to new places, such as North America, Australia and New Zealand, and English became the main language there. Ireland is a special case: English spread there over several centuries, and the constitution names Irish as the national language and first official language.","**Outer circle.** English came with colonial rule. After independence, many countries kept English in schools, courts and government, because it was already in the institutions and many different local languages were in use.","**Expanding circle.** English arrived mainly through school, trade, science, tourism and media. These countries did not adopt English as an official language."]},
      "Cheska Ibabao, a master’s student from the Philippines, is a good example. Her program at a university in Japan is taught in English. The Philippines is in the outer circle: English arrived there with US rule, which began in 1898, and the country’s constitution names both Filipino and English as official languages. Japan is in the expanding circle. So two circles meet in one classroom. The model describes **countries and their histories**. It does not say how well any person uses English."
    ]},
    {h:"Outer-circle Englishes are not “learner English”", body:[
      "The most important point of the model is about the outer circle. Millions of people there use English every day, in education and work, and they have done so for generations. Over time, these communities have developed their own words, their own pronunciation and their own grammar patterns.",
      {table:[["Variety","An example of local development","What it shows"],["Indian English","*prepone* (the opposite of *postpone*): move to an earlier time","A new word that fills a gap"],["Philippine English","*comfort room* (or *CR*) for a restroom","A local word that is widely used"],["Ghanaian English","*trotro* for a shared minibus; *chop bar* for a small local restaurant","Words from local languages"]]},
      "Kachru argued that these varieties deserve to be studied and described on their own terms, as full varieties with their own norms in development. Before this, many people called them “deviant” or “interference” from the local languages. A word such as *prepone* is easy to understand and useful. Describing it as an error would miss the point.",
      {tip:"Ask whether a pattern is shared and systematic in its community. If so, treat it as a feature of the variety (Lesson 2)."}
    ]},
    {h:"What the model gets right", body:[
      {list:["**English has many centers.** No single country owns English. Millions of users live in the outer and expanding circles.","**It links variety to history.** It explains why English is an institutional language in some countries and a school subject in others.","**It gave outer-circle varieties a place in research.** Journals, conferences and corpus projects now study Indian, Nigerian, Singapore and other Englishes as varieties in their own right.","**It is simple to teach.** A learner can remember three circles and begin to ask better questions about English."]},
      "For these reasons, the three circles are the usual starting point for any course on World Englishes, including this one.",
      "Notice one more thing. The model does not say that one circle is “better”. The labels *inner*, *outer* and *expanding* describe a picture, with a center, and the center is about history and norms. It is not about skill, intelligence or the quality of the English."
    ]},
    {h:"Using the model with care", body:[
      "A model is a simplified picture. It helps you see some things and hides others. When you use it, remember three points.",
      {ol:["**It sorts countries, not people.** In India, some people use English as a first language at home, and others use none. In Japan, some people use English every day at work.","**The edges are blurred.** Writers disagree about where to put some places. Jamaica and South Africa are two examples that people place in different ways.","**The labels can mislead.** *Inner* may sound more important, and *norm-dependent* may sound like a weakness. Both are only technical terms."]},
      "In the next lesson you will look at where the circles fall short, and at models that try to do better."
    ]}
   ],
   try:[
    {id:"e6u1-l3-x1", type:"mcq", q:"Which statement describes the **outer circle** in Kachru’s model?", options:[
      {t:"Countries where English came with colonial rule and now has an official role in schools, courts or government.", ok:true, why:"Right. Examples are India, Nigeria, Singapore and the Philippines."},
      {t:"Countries where English is learned mainly in school and has no official role.", why:"This describes the expanding circle."},
      {t:"Countries where most people speak English as a first language.", why:"This describes the inner circle."},
      {t:"Countries with the largest number of English speakers.", why:"The model does not sort countries by number of speakers."}
    ]},
    {id:"e6u1-l3-x2", type:"sort", q:"Place each country in the circle where Kachru’s model usually puts it.", buckets:["Inner circle","Outer circle","Expanding circle"], items:[
      {t:"Ireland", b:0, why:"English is the main language, and it came through migration and long contact."},
      {t:"Australia", b:0, why:"English speakers settled there, and English is the main language."},
      {t:"India", b:1, why:"English came with colonial rule and has an official and institutional role."},
      {t:"Nigeria", b:1, why:"English came with colonial rule and is an official language."},
      {t:"Singapore", b:1, why:"English has a major institutional role, together with other official languages."},
      {t:"Japan", b:2, why:"English is learned mainly in school and used for trade, study and media."},
      {t:"Brazil", b:2, why:"English is a foreign language, taught in school."},
      {t:"Vietnam", b:2, why:"English is a foreign language, widely taught but without an official role."}
    ]},
    {id:"e6u1-l3-x3", type:"match", q:"Match each term to its meaning in the model.", pairs:[
      ["Norm-providing","Norms come from within the circle","This describes the inner circle."],
      ["Norm-developing","Local norms are being built","This describes the outer circle."],
      ["Norm-dependent","Learners look to norms from outside","This describes the expanding circle."],
      ["Kachru (1985)","The linguist who proposed the three circles","He drew them as concentric circles."]
    ]},
    {id:"e6u1-l3-x4", type:"mcq", q:"Cheska Ibabao, from the Philippines, studies in an English-taught program at a university in Japan. Which statement fits Kachru’s model?", options:[
      {t:"The model puts the Philippines in the outer circle and Japan in the expanding circle. It sorts countries by history and role.", ok:true, why:"Right. The model describes countries, not individual people or where someone studies."},
      {t:"Cheska now belongs to the expanding circle, because she lives in Japan.", why:"The model sorts countries, not where a person lives for a few years."},
      {t:"The model says Cheska’s English is weaker, because the outer circle is “outside”.", why:"The model says nothing about the quality of a person’s English."},
      {t:"The model cannot say anything about Cheska’s country.", why:"It places the Philippines in the outer circle."}
    ]},
    {id:"e6u1-l3-x5", type:"mcq", q:"Which is a **strength** of the three-circles model?", options:[
      {t:"It shows that English has many centers of use, and links each to its history.", ok:true, why:"Right. This is why it is still the usual starting point."},
      {t:"It measures how fluent speakers are in each country.", why:"It does not measure fluency. It describes history and roles."},
      {t:"It shows exactly how many people speak English in each country.", why:"The model has no numbers."},
      {t:"It proves that inner-circle English is best.", why:"The model makes no such claim. The circles describe history, not quality."}
    ]},
    {id:"e6u1-l3-x6", type:"spot", q:"A classmate wrote these notes about the model. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"The three circles were proposed by Kachru in 1985.", flag:false, why:"Correct."},
      " ",
      {t:"The inner circle has the best English.", flag:true, why:"The model describes history and roles. It says nothing about quality."},
      " ",
      {t:"Outer-circle countries often use English in courts and schools.", flag:false, why:"Correct. This is the institutional role."},
      " ",
      {t:"The circles are drawn by the number of speakers.", flag:true, why:"They are drawn by how English arrived and what role it has."},
      " ",
      {t:"The model sorts countries, not individual people.", flag:false, why:"Correct. This is one of its limits."}
    ]},
    {id:"e6u1-l3-x7", type:"number", q:"A teacher lists 12 countries for a class. 4 are inner circle (UK, USA, Ireland, Canada). 5 are outer circle (India, Nigeria, Singapore, Ghana, Kenya). 3 are expanding circle (Japan, Brazil, Germany). What percentage of the list is outer circle? Round to one decimal place.", answer:41.7, tol:0.1, unit:"%", why:"Divide 5 by 12: 5 ÷ 12 = 0.4167, which is 41.7%. The list shows only the teacher’s choice of examples. It says nothing about the real share of the world.", wrongs:[
      {v:5, tol:0, why:"This is the number of outer-circle countries. The question asks for a percentage."},
      {v:58.3, tol:0.2, why:"This is 7 ÷ 12, the share of all the other countries."},
      {v:25, tol:0, why:"This is 3 ÷ 12, the share of expanding-circle countries."}
    ]},
    {id:"e6u1-l3-x8", type:"explain", q:"A classmate says: “The outer circle means countries where people speak English badly because they were colonized.” Explain what is wrong with this and describe the outer circle correctly.", size:"3–5 sentences", hint:"Think about history, role and norms. Does the model rank skill?", model:"The model sorts countries by how English arrived and what role it has, not by how well people speak. In the outer circle, English came with colonial rule, but it now has an official or institutional role in education, law and government. Millions of people use it every day, and communities there have developed their own words and patterns, such as *prepone* in India. So these varieties are full varieties with norms in development, not “bad” English.", points:["Says that the model describes history and role, not skill","Says that outer-circle English has an institutional role (schools, courts, government)","Mentions that local norms and words have developed, with an example","Corrects the idea of “bad English” in a respectful way"]}
   ],
   apply:{
    intro:"You need a notebook and a web browser. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Place ten countries in the circles", how:[
       "Choose ten countries, at least two that you have lived in or visited, and at least two that you do not know well.",
       "Place each one in a circle. If you are not sure, write why.",
       "Search for the country’s official languages on a government or reference site, and check whether English has an official role."
     ], write:"Country… circle… why I am sure or unsure… official role of English…"},
     {t:"Find one local English word", how:[
       "Pick one outer-circle country (India, Nigeria, Ghana, Singapore or the Philippines).",
       "Find an English-language news site from that country and read one short article.",
       "Write down one word or phrase that you did not know or that is used differently from what you expected. Check its meaning."
     ], write:"Country… word… meaning… where it comes from…"}
    ],
    proof:"A table of ten countries with their circle and a reason, and one local English word with its meaning."
   },
   read:[
    {book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.6 “Sociolinguistic correlations: Place”", note:"Background on how language differs by place. The book does not cover Kachru’s model."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u1-l4", title:"Where the circles fall short", minutes:55,
   hook:{q:"Two people from expanding-circle countries talk in English, and neither is a first-language user. Which circle’s norms do they follow?", options:["The inner circle’s norms, because those are the standard","The outer circle’s norms, because English is an additional language for them","Often neither: they work out together what is clear","They cannot understand each other without a first-language user"], answer:2, reveal:"**Often neither.** Speakers in this situation adjust to each other. They slow down, repeat, check and choose words that both know. Kachru’s model has no place for this kind of talk, because it sorts countries and not conversations. This lesson looks at that gap and at newer models."},
   goals:[
     "Explain four limits of the three-circles model",
     "Define English as a lingua franca (ELF) and the Lingua Franca Core",
     "Describe Modiano’s centripetal circles and other models in one sentence each",
     "Explain why multilingual repertoires matter for any model of English"
   ],
   learn:[
    {h:"Four limits of the circles", body:[
      {lead:"A model is useful because it is simple. It also leaves things out."},
      "Linguists have praised Kachru’s circles, and they have also pointed out four limits. Many have written about them since the 1990s.",
      {ol:["**Countries are not uniform.** One country has first-language, second-language and foreign-language users at the same time. A single circle hides this.","**Countries change.** In Singapore’s census, the share of residents (aged 5 and over) who speak English most often at home rose from 32.3% in 2010 to 48.3% in 2020. The country does not fit one circle for every speaker.","**People move and mix.** Migrants, students and workers carry English across borders. Many speakers are multilingual and use several languages in one conversation.","**The norm labels can mislead.** *Norm-dependent* suggests that learners in the expanding circle can only copy norms from outside. In real conversations, many learners do not copy any single variety."]},
      "None of these limits make the model useless. They show that it is a picture of history and institutions, and not a complete picture of how people use English today."
    ]},
    {h:"English as a lingua franca", body:[
      "A **lingua franca** is a language that people with different first languages use to talk to each other. English as a lingua franca (**ELF**) is English used in this way. Researchers include Jennifer Jenkins and Barbara Seidlhofer. The Vienna-Oxford International Corpus of English (VOICE) is a collection of transcribed, naturally occurring ELF conversations, so that researchers can study them.",
      "Many researchers argue that a large share of conversations in English today are between people who both use it as an additional language. Nobody knows the exact share, and estimates vary.",
      {ex:"Suppose Sari, a factory worker from Indonesia, needs to check a detail with Tomás, a coworker from Mexico. They use English to be sure, and neither speaks it as a first language. They may speak more slowly, repeat key words, show a number on a phone, and ask: “Do you mean tomorrow?” Both are using English, and neither is “the guest” in the other’s English.", label:"Worked example: a conversation with no first-language user"},
      {fig:'<svg viewBox="0 0 340 300"><circle class="d-gold" cx="170" cy="150" r="46" stroke-width="2"/><text x="170" y="146" text-anchor="middle">English</text><text class="s" x="170" y="164" text-anchor="middle">shared</text><path class="d-ink" d="M98 66L134 114" stroke-width="2"/><path class="d-ink" d="M242 66L206 114" stroke-width="2"/><path class="d-ink" d="M98 234L134 186" stroke-width="2"/><path class="d-ink" d="M242 234L206 186" stroke-width="2"/><path class="d-ink" d="M118 46H222" stroke-width="2"/><path class="d-ink" d="M118 254H222" stroke-width="2"/><rect class="d-sage" x="10" y="26" width="108" height="46" rx="8" stroke-width="2"/><text x="64" y="46" text-anchor="middle">Mexico</text><text class="s" x="64" y="63" text-anchor="middle">Spanish</text><rect class="d-lup" x="222" y="26" width="108" height="46" rx="8" stroke-width="2"/><text x="276" y="46" text-anchor="middle">Indonesia</text><text class="s" x="276" y="63" text-anchor="middle">Indonesian</text><rect class="d-rose" x="10" y="228" width="108" height="46" rx="8" stroke-width="2"/><text x="64" y="248" text-anchor="middle">Japan</text><text class="s" x="64" y="265" text-anchor="middle">Japanese</text><rect class="d-soft" x="222" y="228" width="108" height="46" rx="8" stroke-width="2"/><text x="276" y="248" text-anchor="middle">Ghana</text><text class="s" x="276" y="265" text-anchor="middle">Akan, English</text></svg>', alt:"Four boxes at the corners: Mexico with Spanish, Indonesia with Indonesian, Japan with Japanese, and Ghana with Akan and English. Lines join the boxes to each other and to a circle in the middle labeled English, shared.", cap:"English as a lingua franca: speakers link through a shared language, whatever their first languages."},
      "In 2000, Jenkins proposed the **Lingua Franca Core (LFC)**. It is a set of pronunciation features that she found most important for being understood between speakers who use English as an additional language. According to her proposal, most consonant sounds, the length of vowels and the stress on the most important word matter a great deal. Other features, such as the *th* sounds, matter less for understanding. Unit 8 of this course studies the core in detail.",
      {warn:"The LFC is a research proposal about what helps people understand each other. It does not say that learners must give up their own accent, or that anyone should avoid first-language norms if they want them."}
    ]},
    {h:"Other models of English", body:[
      "Kachru was not the only person to draw English as a picture. Several later models try to show other parts of the story.",
      {table:[["Model","Main idea","What it helps to show"],["Kachru’s three circles (1985)","Countries in inner, outer and expanding circles, by history and role","Why English has many centers"],["McArthur’s Circle of World English (1987)","A hub of widely shared English, surrounded by regional standards and local varieties","The idea of a shared core"],["Modiano’s centripetal circles (1999)","Features that are widely understood are placed at the center, local ones further out","Communication between speakers, whatever their country"],["Schneider’s Dynamic Model (2003 paper; 2007 book *Postcolonial English*)","Five phases that new varieties pass through","How a variety changes over time (Unit 2)"]]},
      "The word *centripetal* means “moving toward the center”. Modiano’s idea is that people who use English in international settings tend to move toward the features that most users share and understand, and away from features that only a few understand. He wanted a picture that puts communication at the center, and not a country’s history.",
      "These models look different, but they share one idea: English is not a single object owned by one group. Each model answers a different question, so each is more useful for some tasks than for others."
    ]},
    {h:"Repertoires and translanguaging", body:[
      "A last limit of the circles is that they look at English alone. Real speakers use English together with other languages. They may switch, mix and borrow in a single conversation. Many researchers call this **translanguaging**, or *translingual practice*: using all the languages one knows as one repertoire.",
      "Think about a conversation between two Japanese colleagues who add English words to a Japanese sentence, and about a Nigerian speaker who uses Yoruba, English and Pidgin in the same hour. Neither person is “mixing up” languages. They use their whole repertoire, with skill.",
      "For learners, this has a practical meaning. The goal is not to copy a first-language user. The goal is to communicate: to be understood, and to understand, in the situations that matter to you."
    ]},
    {h:"What to take from this", body:[
      {list:["Keep the circles for **history and institutions**: they explain why English is where it is.","Use ELF research for **communication today**: it shows how speakers work together.","Use models of change, such as Schneider’s, for **how varieties grow** (Unit 2).","Remember that every model **simplifies**. Ask what it shows, and what it hides."]},
      "In the last lesson, you will see these ideas in one small house."
    ]}
   ],
   try:[
    {id:"e6u1-l4-x1", type:"mcq", q:"Sari, from Indonesia, and Tomás, from Mexico, use English to check one detail. Neither is a first-language user. What is the best description?", options:[
      {t:"They are using English as a lingua franca, and they will probably adjust to each other as they talk.", ok:true, why:"Right. This is the typical ELF situation: people with different first languages use English to understand each other."},
      {t:"They are using inner-circle English, because that is the only English.", why:"Neither speaker needs to follow an inner-circle norm. They need to be understood."},
      {t:"They must be making mistakes, because neither is a first-language user.", why:"Being a first-language user is not a requirement for clear communication."},
      {t:"They cannot understand each other.", why:"Many ELF conversations work well. Speakers adjust to each other."}
    ]},
    {id:"e6u1-l4-x2", type:"sort", q:"Is each statement a **strength** of the three-circles model, or a **limit** that critics point out?", buckets:["Strength","Limit"], items:[
      {t:"It links each group of countries to the history of English there", b:0, why:"This helps explain why English is where it is."},
      {t:"It sorts countries and not individual people", b:1, why:"Inside one country, users differ a great deal."},
      {t:"It gave outer-circle varieties a place in research", b:0, why:"Many later studies of Indian, Nigerian and Singapore English build on this."},
      {t:"It has no place for a conversation between two speakers who are both from the expanding circle", b:1, why:"The model sorts countries, and not conversations."},
      {t:"Countries such as Singapore do not fit neatly in one circle", b:1, why:"The use of English in a country changes over time."},
      {t:"It is easy to remember and teach", b:0, why:"A simple picture helps learners begin to ask good questions."}
    ]},
    {id:"e6u1-l4-x3", type:"match", q:"Match each model to its main idea.", pairs:[
      ["Kachru (1985)","Countries in three circles by history and role","Inner, outer and expanding circles."],
      ["Modiano (1999)","Widely understood features at the center, local ones further out","He called the circles centripetal."],
      ["Jenkins (2000)","A Lingua Franca Core of pronunciation features that matter for understanding","It comes from research on speakers who use English as an additional language."],
      ["Schneider (2003, 2007)","Five phases that new varieties pass through","It shows change over time."]
    ]},
    {id:"e6u1-l4-x4", type:"mcq", q:"What is **English as a lingua franca (ELF)**?", options:[
      {t:"English used between people who have different first languages.", ok:true, why:"Right. It describes how English is used, and who is talking."},
      {t:"A simplified, wrong form of English for beginners.", why:"ELF is used by proficient and less proficient speakers. It is not a wrong form."},
      {t:"English spoken only in the inner circle.", why:"It describes talk between people from many places, including inner-circle speakers."},
      {t:"A new language that has replaced English.", why:"ELF is a way of using English. It is not a separate language."}
    ]},
    {id:"e6u1-l4-x5", type:"mcq", q:"In an online meeting, a Brazilian engineer, a Thai manager and a German designer use English. The designer says, “Sorry, I did not follow the last point.” What is the most useful response?", options:[
      {t:"Say it again with simpler words and an example, then ask “Does that make sense?”", ok:true, why:"Right. Rephrasing and checking are standard ELF strategies, and they help everyone."},
      {t:"Say it again in exactly the same way but louder.", why:"Volume does not help. A new way of saying it might."},
      {t:"Tell the designer to improve his English.", why:"This is unkind and does not solve the problem."},
      {t:"Ask a first-language speaker to join the meeting.", why:"Nobody needs a first-language speaker. The three speakers can work it out."}
    ]},
    {id:"e6u1-l4-x6", type:"spot", q:"Tap each statement that is **inaccurate or misleading** about ELF and the Lingua Franca Core.", ask:"inaccurate or misleading", parts:[
      {t:"ELF means English used between people with different first languages.", flag:false, why:"Correct."},
      " ",
      {t:"Jenkins proposed the Lingua Franca Core in 2000.", flag:false, why:"Correct. It is a set of pronunciation features that matter for understanding."},
      " ",
      {t:"The LFC says that learners must lose their accent.", flag:true, why:"The LFC does not say this. It is about which sounds matter most for being understood."},
      " ",
      {t:"Nobody knows the exact share of English conversations that have no first-language user.", flag:false, why:"Correct. Researchers think that it is large, but estimates vary."},
      " ",
      {t:"ELF is a single new variety that all learners must copy.", flag:true, why:"ELF describes a way of using English. It is not one fixed variety, and nobody must copy it."}
    ]},
    {id:"e6u1-l4-x7", type:"order", q:"Put these developments in date order, earliest first.", items:[
      {t:"Kachru proposes the three circles (1985)", why:"The earliest of the five."},
      {t:"Modiano proposes centripetal circles (1999)", why:"The next one, in 1999."},
      {t:"Jenkins proposes the Lingua Franca Core (2000)", why:"Published in 2000."},
      {t:"Schneider publishes the Dynamic Model paper (2003)", why:"The 2003 paper came after the LFC."},
      {t:"Schneider publishes *Postcolonial English* (2007)", why:"The 2007 book is the last of the five."}
    ]},
    {id:"e6u1-l4-x8", type:"explain", q:"A student says: “Kachru’s circles are all you need to understand English in the world.” Explain two things that the circles do well and two things that they do not show.", size:"4–6 sentences", hint:"Think about history and institutions, and then about conversations, multilingual speakers and change.", model:"The circles are good at showing that English has many centers, and at linking each group of countries to the history of English there. They also gave outer-circle varieties a place in research. However, they sort countries, so they hide the differences between people in one country. They also have no place for conversations in which nobody is a first-language user, which is where English as a lingua franca matters. Other models, such as Modiano’s circles or Schneider’s phases, add communication and change over time. So the circles are a good start, but not all you need.", points:["Names two strengths, such as many centers and a link to history","Names two limits, such as countries versus people, and no place for ELF talk","Mentions that other models add something, for example change over time","Does not reject the model completely"]}
   ],
   apply:{
    intro:"You need a notebook. Keep your notes private unless you choose to share them. If you write about a real conversation, do not use real names.",
    tasks:[
     {t:"Describe a conversation without a first-language user", how:[
       "Remember a conversation in English between two or more people who all have a different first language. It can be at work, online or on a trip.",
       "Write what helped you understand each other: slower speech, repeating, examples, writing, pictures, checking.",
       "Write one thing you would do differently next time."
     ], write:"The situation… what helped… next time I would…"},
     {t:"Redraw the circles", how:[
       "Draw Kachru’s three circles on paper.",
       "Add what you think the model leaves out: for example arrows between countries, a shared center, or a few people who move between circles.",
       "Write three sentences to explain your drawing."
     ], write:"What I added… why… what my drawing still leaves out…"}
    ],
    proof:"Notes about one ELF conversation with three helpful strategies. A drawing of the circles with at least one change, and three sentences that explain it."
   },
   read:[
    {book:"eling", where:"Background reading: Chapter 10, “Language Variation and Change”, section 10.5 “Variationist methods and concepts”", note:"It explains how linguists collect evidence about how people really speak. The models in this lesson are not covered in the book."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u1-l5", title:"A house full of Englishes", minutes:55,
   hook:{q:"People with several different Englishes meet in one room. Which aim is the most useful and the most respectful?", options:["Everyone should change to the same accent.","Everyone understands each other, and nobody is told that their English is wrong.","Only first-language users decide what is clear.","Everyone should speak as little as possible."], answer:1, reveal:"**Understanding each other, with respect.** Clear communication is the goal, and it is shared work. Speakers and listeners both adjust. Telling someone that their variety is wrong does not help understanding, and it can hurt. This lesson uses one small house as a lab for these ideas."},
   goals:[
     "Describe how different Englishes meet in one small community",
     "Explain intelligibility, comprehensibility and interpretability",
     "Explain that accent strength and understanding are different things",
     "Use respectful strategies when you do not understand, or are not understood"
   ],
   learn:[
    {h:"Kamome House as a small lab", body:[
      {lead:"You do not need to travel to meet World Englishes. In many places they meet in a kitchen."},
      "Kamome House is a shared house in Shioura, a harbor town on the Sea of Japan. It is the setting of the story in this course. Students and workers from several countries live there or visit it. They all have different histories with English. The table lists a few of them, using only what we know from the start of the story.",
      {table:[["Person","Country (circle)","What we know about English in their life"],["Cheska Ibabao","Philippines (outer)","Master’s student. Her program is taught in English. She uses Philippine English."],["Toby Whitlock","Australia (inner)","Master’s student in Japanese linguistics. He taught English in the Japanese countryside for two years. He uses Australian English."],["Dr Amoako","Ghana (outer)","Has lived in Japan for twenty years and teaches information science. He uses Ghanaian English."],["Ngô Hải Yến","Vietnam (expanding)","Master’s student in information engineering. She worked four years at a software company in Japan."],["Mariya Seto","Japan (expanding)","Studies English, in an interpreting course."],["Rodrigo Mondragón","Mexico (expanding)","Studies Japanese at a language school."]]},
      "Dr Amoako is not a resident. He teaches at the university, and he is Yến’s supervisor. Each person’s circle is the circle of their **country**. It says nothing about how well they use English. Every person in the table also uses at least one other language every day.",
      {warn:"A table of this kind simplifies. A person from an outer-circle country may use English as a first language at home, and a person from an inner-circle country may know it less well than a classmate. Use the circle as a starting question."}
    ]},
    {h:"Listening with an open mind", body:[
      "The Speech Accent Archive (Weinberger, George Mason University) has recordings of people from all over the world reading the same short paragraph. Because the text is the same, you can compare sounds without being distracted by different content.",
      {ex:"Listen to a speaker of Ghanaian English read “Please call Stella…”. Write down two things you notice about vowels, rhythm or stress. Do not write “good” or “bad”.", label:"Listen: speaker 1", listen:"e6u1-l5-a1"},
      {ex:"Now listen to a speaker of Philippine English reading the same paragraph.", label:"Listen: speaker 2", listen:"e6u1-l5-a2"},
      {ex:"Last, listen to a speaker of Australian English reading the same paragraph.", label:"Listen: speaker 3", listen:"e6u1-l5-a3"},
      "Each speaker has a different system of vowels, stress and rhythm. Each system is regular. You may need a second listening to follow one of them. That is normal, and it shows how much **familiarity** matters. Listeners who hear a variety often understand it better. This is a fact about the listener’s experience and not a fault of the speaker.",
      {key:"Understanding depends on the listener as well as the speaker."}
    ]},
    {h:"Three levels of understanding", body:[
      "Larry Smith and Cecil Nelson (1985) separated understanding into three levels. The distinction is useful because people often say “I don’t understand” without saying which kind of trouble they have.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e6a5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="30" y="8" width="280" height="76" rx="8" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1. Intelligibility</text><text class="s" x="170" y="52" text-anchor="middle">Can I recognize the words?</text><text class="s" x="170" y="70" text-anchor="middle">“Is the window open?”</text><path class="d-ink" d="M170 86V108" stroke-width="2" marker-end="url(#e6a5)"/><rect class="d-lup" x="30" y="112" width="280" height="76" rx="8" stroke-width="2"/><text x="170" y="136" text-anchor="middle">2. Comprehensibility</text><text class="s" x="170" y="156" text-anchor="middle">Do I know what it means?</text><text class="s" x="170" y="174" text-anchor="middle">A question about the window</text><path class="d-ink" d="M170 190V212" stroke-width="2" marker-end="url(#e6a5)"/><rect class="d-gold" x="30" y="216" width="280" height="76" rx="8" stroke-width="2"/><text x="170" y="240" text-anchor="middle">3. Interpretability</text><text class="s" x="170" y="260" text-anchor="middle">Do I see what the speaker wants?</text><text class="s" x="170" y="278" text-anchor="middle">A polite request to close it</text></svg>', alt:"Three boxes joined by downward arrows. Level 1, intelligibility: can I recognize the words, for example Is the window open. Level 2, comprehensibility: do I know what it means, a question about the window. Level 3, interpretability: do I see what the speaker wants, a polite request to close it.", cap:"Three levels of understanding, after Smith and Nelson (1985)."},
      {table:[["Level","The question","Trouble looks like"],["[[we-intelligibility|Intelligibility]]","Can I recognize the words and sounds?","“I did not catch that word.”"],["[[we-comprehensibility|Comprehensibility]]","Do I know what the sentence means?","“I heard *prepone* but I don’t know the word.”"],["[[we-interpretability|Interpretability]]","Do I understand what the speaker intends?","“I understood the sentence, but why did he say it?”"]]},
      "Trouble can happen at any of the three levels. Sounds matter: that is why Jenkins studied pronunciation for the Lingua Franca Core (Lesson 4). Trouble also comes from words that are new to the listener, from different ways of being polite, or from different habits about what to say directly. Naming the level helps you choose what to ask."
    ]},
    {h:"Accent and understanding are different", body:[
      "Many people believe that a stronger accent means speech that is harder to understand. Researchers such as Tracey Derwing and Murray Munro, who studied this in the 1990s and later, found that these two things are related but not the same. A speaker can have a noticeable accent and still be fully understood. Another speaker can sound close to a reference accent and still be hard to follow, for example because of pace or unclear structure.",
      "So when you say “I can’t understand her accent”, ask what you mean. Did you miss a sound, a word, a meaning or an intention? The answer tells you what to ask.",
      {ex:"Suppose Dr Amoako gives a short talk in English to a group of students, most of whom use Japanese as their first language. Some of them know Ghanaian English well, and others have rarely heard it. What can the listeners do to prepare? What can he do? Listeners can read the slides first and keep a list of new words. He can show key terms on the slide, speak at a steady pace, and invite questions during the talk, not only at the end.", label:"Worked example: sharing the work"}
    ]},
    {h:"Respectful moves", body:[
      "Communication Accommodation Theory, developed by Howard Giles and colleagues, describes how speakers adjust their speech toward a listener (convergence) or away from a listener. In good conversations between different Englishes, **both** sides accommodate. Here are moves that help.",
      {list:["**Say what you understood.** “I understood the first part. I missed the last word.”","**Ask about the exact point.** “Could you say that another way?” works better than “I can’t understand you.”","**Check back.** “So the meeting moves to Friday?”","**Name words that might be new.** “We call this *comfort room*. Is it the restroom in your English?”","**Avoid idioms and long strings of phrasal verbs** when you speak to a mixed group, or explain them.","**Never correct an accent.** An accent is not an error, and it is not a topic for advice unless someone asks."]},
      "These moves are good habits in every conversation, with any speaker. In the next units, you will visit Britain and Ireland, North America, Asia, Africa and the Caribbean, and you will learn what is regular in each of their Englishes. In Unit 9, you will study attitudes to accents and the power behind them."
    ]}
   ],
   try:[
    {id:"e6u1-l5-x1", type:"mcq", q:"A listener hears every word of “Is the window open?” and knows that it is a question about the window. She does not see that the speaker wants her to close it. Which level of understanding is missing?", options:[
      {t:"Interpretability: seeing what the speaker intends.", ok:true, why:"Right. The words and meaning are clear, and the intention is missing."},
      {t:"Intelligibility: recognizing the words.", why:"She recognized every word."},
      {t:"Comprehensibility: knowing what the sentence means.", why:"She knew that it was a question about the window."},
      {t:"None, because the speaker had an accent.", why:"An accent was not the problem here. The missing piece is the intention."}
    ]},
    {id:"e6u1-l5-x2", type:"sort", q:"Is each move **helpful and respectful**, or **unhelpful**, when you do not understand a speaker?", buckets:["Helpful and respectful","Unhelpful"], items:[
      {t:"“Could you say that another way?”", b:0, why:"It asks politely and gives the speaker something to do."},
      {t:"Repeating the question louder", b:1, why:"Volume does not make the message clearer."},
      {t:"“So the meeting moves to Friday?”", b:0, why:"A check-back shows what you understood."},
      {t:"Correcting the speaker’s accent in front of others", b:1, why:"An accent is not an error, and this can embarrass the speaker."},
      {t:"Nodding and pretending to understand", b:1, why:"It leaves the problem in place, and it may cause a mistake later."},
      {t:"“I understood the first part. I missed the last word.”", b:0, why:"It shows exactly where the trouble is."}
    ]},
    {id:"e6u1-l5-x3", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Intelligibility","Recognizing the words and sounds","The first of Smith and Nelson’s three levels."],
      ["Comprehensibility","Knowing what the sentence means","Words that are new to the listener affect this level."],
      ["Interpretability","Seeing what the speaker intends","Politeness habits affect this level."],
      ["Accommodation","Adjusting speech toward the listener","Giles and colleagues describe this in Communication Accommodation Theory."]
    ]},
    {id:"e6u1-l5-x4", type:"mcq", q:"Suppose Cheska Ibabao, from the Philippines, says *comfort room*, a common Philippine English word for a restroom. A classmate has never heard it. What is the most respectful response?", options:[
      {t:"Ask, “What does comfort room mean? Is it the restroom?”", ok:true, why:"Right. It asks about the word, and it shows interest in the variety."},
      {t:"Say, “That is not English. Say restroom.”", why:"The word is widely used in Philippine English. It is a feature of the variety, not a mistake."},
      {t:"Laugh and repeat the word as a joke.", why:"This mocks the speaker. It is not respectful."},
      {t:"Say nothing and avoid the conversation.", why:"Avoiding the talk leaves the misunderstanding in place."}
    ]},
    {id:"e6u1-l5-x5", type:"mcq", q:"Which statement about accent and understanding is the most accurate?", options:[
      {t:"A noticeable accent and clear understanding can go together: they are related but different.", ok:true, why:"Right. Studies by Derwing and Munro, among others, support this."},
      {t:"A strong accent always makes speech impossible to understand.", why:"Many speakers with strong accents are fully understood."},
      {t:"Speakers with no accent are always understood.", why:"Every speaker has an accent, and other things, such as pace and structure, also affect understanding."},
      {t:"Understanding depends only on the speaker.", why:"The listener’s experience matters too."}
    ]},
    {id:"e6u1-l5-x6", type:"spot", q:"Tap each statement that is **inaccurate or unfair**.", ask:"inaccurate or unfair", parts:[
      {t:"Ghanaian English and Australian English are both full, rule-governed varieties.", flag:false, why:"Correct. Neither is a broken form of another."},
      " ",
      {t:"If I do not understand an accent, it is the speaker’s fault.", flag:true, why:"Understanding depends on the listener’s experience too."},
      " ",
      {t:"Listeners often understand a variety better after they hear it more.", flag:false, why:"Correct. Familiarity helps."},
      " ",
      {t:"New colleagues should be told to fix their accent before the first meeting.", flag:true, why:"An accent is not an error. This idea also treats one accent as the only correct one."},
      " ",
      {t:"Both speaker and listener can adjust.", flag:false, why:"Correct. This is what accommodation means."}
    ]},
    {id:"e6u1-l5-x7", type:"order", q:"You do not understand part of what a colleague just said. Put these steps in a respectful order.", items:[
      {t:"Say which part you understood", why:"This shows that you are following, and it narrows the problem."},
      {t:"Say which part you missed, for example the last word", why:"The speaker now knows exactly where to help."},
      {t:"Ask for another way to say it", why:"A new wording often works better than a repeat."},
      {t:"Repeat back what you now understand", why:"A check-back catches any remaining mistake."},
      {t:"Thank the speaker and continue", why:"A short thanks keeps the talk friendly."}
    ]},
    {id:"e6u1-l5-x8", type:"explain", q:"A new housemate says: “I find one speaker’s accent hard to follow. I think she should change it.” Give kind, practical advice.", size:"4–6 sentences", hint:"Think about the three levels, the listener’s part and respectful strategies.", model:"First, I would ask what exactly is hard: the sounds, some words, or the meaning behind what she says. Understanding depends on the listener too, and listeners often follow a variety much better after they have heard it more. An accent is not an error, so asking her to change it is not a good idea. A better plan is to say what you understood, ask about the exact part you missed, and check back what you understood. If it is a word you do not know, you can ask what it means.", points:["Separates the types of trouble: sounds, words, meaning","Says that understanding depends on the listener, and that familiarity helps","Does not tell the speaker to change her accent","Suggests specific respectful moves, such as asking about the exact part and checking back"]}
   ],
   apply:{
    intro:"You need a notebook and, for the second task, an internet connection. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Ask a person about their Englishes", how:[
       "Choose a classmate, colleague or friend who uses English with people from different countries. Ask for their permission, and do not write their name.",
       "Ask three questions: Which Englishes do you hear most often? When do you not understand someone? What helps?",
       "Write their answers in your own words, and note which level of understanding each problem belongs to."
     ], write:"Their Englishes… when it is hard… what helps… level 1, 2 or 3…"},
     {t:"Keep a listening log", how:[
       "Open the Speech Accent Archive (accent.gmu.edu) and choose three speakers from three different places.",
       "For each, write two things you notice about vowels, rhythm or stress. Use no words such as “good”, “bad” or “strange”.",
       "Mark whether you understood every word on the first listening."
     ], write:"Speaker (place)… two things I noticed… understood at once or not…"},
     {t:"Write your own list of respectful moves", how:[
       "Write five short phrases that you could use in a meeting or conversation when you do not understand, or when someone does not understand you.",
       "Beside each phrase, write which level of understanding it helps with."
     ], write:"Phrase… level…"}
    ],
    proof:"A short interview summary with levels marked, a log of three speakers with two observations each, and five respectful phrases."
   },
   read:[
    {book:"eling", where:"Chapter 2, “Language, Power, and Privilege”, section 2.1 “Language and identity”", note:"Read it after this lesson. It prepares you for Unit 9 on attitudes, identity and power."}
   ]
  }
  ],
  checkpoint:["e6u1-q01","e6u1-q04","e6u1-q07","e6u1-q12","e6u1-q16","e6u1-q20","e6u1-q25","e6u1-q29","e6u1-q34","e6u1-q37","e6u1-q39","e6u1-q43"],
  codex:[
   {id:"we-who-uses-english", title:"Who uses English? First, second and foreign language", aka:["ENL, ESL, EFL","English users","how many people speak English"], tags:["world englishes","users","statistics"],
    summary:"Three ways of describing English users by how and where they use it, and why counts of users differ.",
    levels:{
     starter:[
      "People use English in very different ways. Linguists often describe three groups. **First-language (L1) users** learned English from birth. **Second-language (L2) users** learned it alongside other languages and use it in daily life, school, work or government. **Foreign-language (EFL) users** learned it mainly in class and use it with visitors, online or for work abroad.",
      "The groups describe situations, not skill. A person who uses English every day in Lagos or Mumbai is not “just a learner”. Many linguists say *additional language* instead of *second language*, so that “second” does not sound like “worse”.",
      "Nobody knows exactly how many people use English. Reports count in different ways: some count only people who use English at home, and others count everyone who can hold a simple conversation. Different definitions give different totals, and the counts also change over the years.",
      {key:"Ask three questions of any number about English users: who counted, what counted as using English, and when."}
     ],
     builder:[
      "The three groups are often written ENL (English as a native language), ESL (English as a second language) and EFL (English as a foreign language). They are related to Kachru’s three circles (see the entry on the circles), but they are not the same thing. The circles describe **countries**. The groups describe **people and situations**, and inside one country you can find all three.",
      "Many people do not fit one box. A child in Auckland may speak Samoan at home and use English at school and with friends from age five. A teacher in Lagos may use Yoruba with family, English at work and Nigerian Pidgin with friends. For this reason many researchers describe a person’s **repertoire**, the set of languages and varieties used in different settings.",
      {h:"Why counts differ"},
      {list:["**Definition.** A report may count speakers who use English every day, or everyone who has some ability.","**Data.** Some censuses ask about language, and many do not. The questions differ.","**Self-report.** People rate their own ability, and they do so in different ways.","**Date.** The numbers change as education and the internet reach more people."]},
      "David Crystal discussed these problems in a 2008 article, “Two thousand million?” (*English Today*), and argued that the total depends on how “user” is defined. He moved his 1985 estimate of about one billion up, toward two billion, and he stressed that it is an estimate. Most estimates agree on the shape: additional-language users are at least as many as first-language users.",
      {tip:"When you quote a figure, give a range, the source and the year."}
     ],
     pro:[
      "The terms ENL, ESL and EFL came into wide use in applied linguistics and in language teaching. They have been criticized for three reasons. First, they treat a person’s relation to English as a single category. Second, *native* hides differences in proficiency and suggests an inborn right to the language. Third, they place people by country and not by use. Researchers on multilingualism prefer to describe repertoires and domains of use.",
      "Statistics on English use are hard to compare. Censuses may ask about the language most often spoken at home, languages spoken, or mother tongue. These are different quantities. Surveys of ability rely on self-rating, and cultural differences affect the answers. Estimates of totals in the literature vary because they combine such sources with assumptions. Crystal’s work (including the 2008 article) shows how the figure changes with the definition and with the level of English assumed, and he treats the numbers as estimates.",
      "The practical conclusion is that any single figure should be treated as an estimate. A good report names its definition, source and date. For teaching, the useful point is the **shape**: English is used by many more people as an additional language than as a first language, in a wide range of settings, and that fact affects what a course should teach.",
      "Relevant research areas include sociolinguistics, language contact and multilingualism. See the reading in this unit for background on variation."
     ]},
    related:["we-kachru-circles","we-english-lingua-franca","we-variety-accent-dialect"],
    read:[{book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.1 “What is variationist sociolinguistics?”"}],
    sources:[{t:"eWAVE: the electronic World Atlas of Varieties of English (CC BY 3.0)", url:"https://ewave-atlas.org/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"we-variety-accent-dialect", title:"Accent, dialect, variety and standard", aka:["variety of English","feature or error","language or dialect"], tags:["world englishes","variation","standard"],
    summary:"The words linguists use to describe differences between Englishes without ranking them, and how to tell a feature of a variety from an error.",
    levels:{
     starter:[
      "A **variety** is any form of a language that a group of people share. It is a neutral word: it does not say that one form is better than another. An **accent** is the sound of a variety. A **dialect** is a variety with its own words and grammar as well as sounds. A **standard variety** is the form used in education, news and law.",
      "English has several standard varieties, such as American, Australian and Indian English. They are social choices. They are not more logical than other varieties.",
      "Is something a *language* or a *dialect*? No test gives a clean answer. Mutual understanding is one clue. A written standard, a state and a feeling of identity matter too. Norwegian and Swedish are often understood by each other’s speakers, and they are called two languages.",
      {key:"A variety is a full, rule-governed system. Nobody’s English is a “broken” version of someone else’s."}
     ],
     builder:[
      "The **electronic World Atlas of Varieties of English (eWAVE)** records which grammar features are found in 77 varieties of English. You can use it to check whether a form is documented. Examples that researchers have documented in some varieties: a single question tag for every sentence (*You are coming tomorrow, isn’t it?*); a plural for a noun that is uncountable in some standards (*informations*); and progressive forms with state verbs (*I am knowing the answer*). Habitual *be* (*She be working*) is a feature of African American English.",
      {h:"Four questions"},
      {ol:["Is the form **systematic**: the same meaning and use each time?","Is it **shared** by a community?","Is it used by **proficient** speakers in normal speech or writing?","Is it **documented** in a source such as eWAVE or a corpus?"]},
      "If the answers are mostly yes, call it a **feature** of that variety. If the form is irregular and not shared, it may be a slip or a learner form. Both are normal and neither is a moral failing.",
      "Remember that a documented feature may still not suit every setting. An exam or a house style can ask for one form. The International Corpus of English (ICE) project collects comparable samples from many countries, so researchers can describe national standards with evidence.",
      {warn:"Do not label a form a “feature” or an “error” because of where the speaker comes from. Judge the form."}
     ],
     pro:[
      "The notion of a variety is deliberately theory-neutral. Sociolinguists distinguish varieties by region, social group, age and register, and they treat the boundaries as fuzzy. The distinction between language and dialect is a social and political one in large part, and the saying that a language is a dialect with an army and a navy points at this. Max Weinreich popularized it: he published it in Yiddish in 1945 and credited a listener at one of his lectures. Criteria such as mutual intelligibility, autonomy (the status of a variety as independent, with its own standard) and heteronomy (dependence on another standard) are used in the literature.",
      "In World Englishes research, the question “feature or error?” relates to the debate about **nativization** and about when a form is a stable part of a community’s norms. Researchers look for systematicity, frequency, spread across speakers (including educated speakers) and presence in published writing and in corpora. A form that is widely used in a community, including by educated speakers, is not usefully called an error in that community, even when it differs from another variety’s standard.",
      "eWAVE gives, for each feature and variety, a rating of how widespread the feature is, based on expert judgments. Its authors stress that the ratings are a summary and not a measurement of frequency. Corpus work gives frequencies, but corpora of second-language Englishes are still smaller than those for inner-circle varieties.",
      "In teaching, the standard of an exam or an organization decides what is expected in that setting. This is a decision about the setting, and it is separate from the linguistic description."
     ]},
    related:["we-who-uses-english","we-kachru-circles","accents-dialects-variation","standard-english-explained"],
    read:[{book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.2 “Language varies”"}],
    sources:[{t:"eWAVE: the electronic World Atlas of Varieties of English (CC BY 3.0)", url:"https://ewave-atlas.org/"}, {t:"Speech Accent Archive, George Mason University", url:"https://accent.gmu.edu/"}], checked:"2026-11"},

   {id:"we-kachru-circles", title:"Kachru’s three circles", aka:["inner, outer and expanding circles","three circles of English"], tags:["world englishes","models","Kachru"],
    summary:"A 1985 model that sorts English-using countries into inner, outer and expanding circles by how English arrived and what role it has.",
    levels:{
     starter:[
      "In 1985 the linguist Braj Kachru drew the English-using world as **three circles, one inside the other**. The **inner circle** is the group of countries where English is the first language of most people, such as the UK, the USA, Ireland, Canada, Australia and New Zealand. The **outer circle** is the group where English is an additional language with an official or institutional role, such as India, Nigeria, Singapore, the Philippines, Ghana and Kenya. The **expanding circle** is the group where English is a foreign language, learned in school and used for trade, study and media, such as Japan, China, Brazil, Germany and Vietnam.",
      "The model is about **countries and history**. It does not say how well any person speaks English, and it does not say that one circle is better.",
      "One important point of the model is that the outer-circle Englishes are not “learner English”. Millions of people use them every day, and they have developed their own words and patterns.",
      {key:"The circles describe how English arrived and what role it has. They do not rank skill or quality."}
     ],
     builder:[
      "Kachru presented the model in a chapter published in 1985 about standards and the English language in the outer circle. He linked the circles to **norms**. Inner-circle varieties are **norm-providing**: their norms come from within. Outer-circle varieties are **norm-developing**: local norms are being built. Expanding-circle varieties are **norm-dependent**: learners have looked to norms from outside.",
      {table:[["Circle","How English arrived","Role today"],["Inner","Home of English, or settlers from Britain","First language of most"],["Outer","Colonial rule, then kept after independence","Additional language in schools, courts, government"],["Expanding","School, trade, science, media","Foreign language, no official role"]]},
      "The model is still the usual starting point because it shows that English has many centers, and because it gave outer-circle varieties a place in research. It also has limits. It sorts countries, so it hides differences between people in a country. Countries change: in Singapore’s census, the share of residents aged 5 and over who speak English most often at home rose from 32.3% (2010) to 48.3% (2020). Some places, such as Jamaica and South Africa, are placed in different ways by different writers. And it has no place for conversations in which nobody is a first-language user.",
      {tip:"Use the circles for history and institutions, and other models for communication and change."}
     ],
     pro:[
      "Kachru’s circles are a **sociolinguistic and historical** classification. He tied them to two kinds of spread: the first diaspora (migration, which created the inner circle) and the second diaspora (colonial rule, which created the outer circle). The expanding circle includes countries where English has no colonial history and no official role. Kachru also wrote about the “three concentric circles” in terms of functions of English: the institutional functions in the outer circle include law, administration, education and literature, in addition to its use as a link language.",
      "The model has been criticized from several directions. Researchers note that the picture treats the inner circle as the source of norms, which may reinforce a hierarchy. Others note that the circles are not stable: in some outer-circle places, English is the first language of many young people; in some expanding-circle places, English is used so widely in business and education that the label “foreign” is questioned. Further, as the unit shows, much use of English today takes place between users from different circles, and for them a country-based model has little to say.",
      "Several alternatives and additions exist: McArthur’s Circle of World English (1987), Modiano’s centripetal circles (1999), Schneider’s Dynamic Model (2003; 2007) and research on English as a lingua franca. They answer different questions, and the circles remain a useful reference point.",
      "Dates and placements of particular countries vary between textbooks. When in doubt, cite the author and year, and name the criterion used."
     ]},
    related:["we-who-uses-english","we-english-lingua-franca"],
    read:[{book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"eWAVE: the electronic World Atlas of Varieties of English (CC BY 3.0)", url:"https://ewave-atlas.org/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}, {t:"Singapore Department of Statistics, Census of Population 2020, Statistical Release 1: Executive summary", url:"https://www.singstat.gov.sg/-/media/files/publications/cop2020/sr1/executive-summary.pdf"}], checked:"2026-11"},

   {id:"we-english-lingua-franca", title:"English as a lingua franca and later models", aka:["ELF","Lingua Franca Core","centripetal circles"], tags:["world englishes","ELF","models"],
    summary:"English used between people with different first languages, and the models that try to describe it.",
    levels:{
     starter:[
      "A **lingua franca** is a language that people with different first languages use to talk to each other. **English as a lingua franca (ELF)** is English used in this way: for example, an engineer from Thailand and a designer from Germany in an online meeting.",
      "Many researchers argue that a large share of conversations in English today have no first-language user in them. Nobody knows the exact share. In these conversations, speakers adjust to each other. They slow down, repeat, check and choose words that both know.",
      "Researchers such as Jennifer Jenkins and Barbara Seidlhofer have studied ELF. In 2000 Jenkins proposed the **Lingua Franca Core (LFC)**, a set of pronunciation features that matter most for being understood between users of English as an additional language.",
      {key:"In ELF, the goal is to understand each other. It is not to copy a first-language user."}
     ],
     builder:[
      "Kachru’s circles sort countries. They have no place for a conversation between two speakers from the expanding circle. ELF research fills this gap. The Vienna-Oxford International Corpus of English (VOICE) is a collection of transcribed, naturally occurring ELF conversations, so researchers can see what speakers actually do.",
      {h:"Other models"},
      {list:["**McArthur’s Circle of World English (1987), often called a wheel:** a hub of widely shared English surrounded by regional standards and local varieties.","**Modiano’s centripetal circles (1999):** widely understood features at the center, and more local features further out.","**Schneider’s Dynamic Model (2003 paper; 2007 book *Postcolonial English*):** five phases through which new varieties develop (Unit 2).","**Translanguaging:** speakers use all their languages as one repertoire."]},
      "The LFC proposes, for example, that most consonant sounds, vowel length and the stress on the most important word matter a great deal for understanding, and that features such as the *th* sounds matter less. It is a proposal based on research. It does not require anyone to give up an accent. Unit 8 returns to it.",
      {warn:"ELF is not a separate language, and it is not a variety that learners must copy. It describes how English is used in certain situations."}
     ],
     pro:[
      "ELF research began in the late 1990s and 2000s. Early work looked for features of pronunciation (Jenkins 2000) and grammar and vocabulary (for example, work with the VOICE corpus) that are frequent among ELF speakers and do not cause trouble in understanding. Seidlhofer’s book *Understanding English as a Lingua Franca* (2011) gives an overview. Later work shifted the focus from lists of features to processes: accommodation, negotiation of meaning, and the use of the whole repertoire, which links with research on translanguaging and translingual practice.",
      "Critics have raised several questions. Is ELF a variety or a way of using English? Do lists of ELF features risk creating a new norm? Does the LFC apply to speakers who want to sound like a first-language user? The ELF researchers’ own position is, in general, that ELF is a description of use, and that individual learners decide their own goals.",
      "Modiano’s centripetal circles (1999) model puts widely understood features at the center, and the idea has been used in discussions of “international English” in teaching. Like all of these models, it is a simplified picture, and it answers a different question from Kachru’s.",
      "For teaching, the practical lesson is that communication strategies (checking, rephrasing, asking about the exact point) are part of competence, along with accuracy. Unit 8 and Unit 10 return to these questions."
     ]},
    related:["we-kachru-circles","we-intelligibility-respect","we-who-uses-english"],
    read:[{book:"eling", where:"Chapter 10, “Language Variation and Change”, section 10.5 “Variationist methods and concepts”"}],
    sources:[{t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}, {t:"Speech Accent Archive, George Mason University", url:"https://accent.gmu.edu/"}], checked:"2026-11"},

   {id:"we-intelligibility-respect", title:"Intelligibility and respectful communication", aka:["intelligibility, comprehensibility, interpretability","accommodation"], tags:["world englishes","intelligibility","communication"],
    summary:"Three levels of understanding, why accent and understanding are different, and how to talk across Englishes with respect.",
    levels:{
     starter:[
      "When people say “I don’t understand”, they can mean three different things. **Intelligibility** is recognizing the words and sounds. **Comprehensibility** is knowing what the sentence means. **Interpretability** is seeing what the speaker wants or intends. Larry Smith and Cecil Nelson separated these levels in 1985.",
      "A strong accent does not always make speech hard to understand. Researchers such as Tracey Derwing and Murray Munro found that accent and understanding are related, but they are different things. Understanding also depends on the listener: listeners often follow a variety better after they have heard it more.",
      "Respectful moves help. Say what you understood. Ask about the exact point. Check back what you heard. Never correct someone’s accent.",
      {key:"Understanding is shared work. Speakers and listeners both adjust."}
     ],
     builder:[
      "The three levels help you say what kind of trouble you have. “I didn’t catch that word” is about intelligibility. “I heard *prepone* but don’t know it” is about comprehensibility. “I understood the sentence, but why did she say it?” is about interpretability. Trouble across Englishes can be at any level. Sounds matter (this is the focus of Jenkins’ Lingua Franca Core), and so do words that are new and different habits of politeness and directness.",
      "Howard Giles and colleagues developed **Communication Accommodation Theory**. It describes how speakers adjust their speech toward (convergence) or away from (divergence) a listener. Convergence helps when both sides do it. Some practical moves:",
      {list:["Say what you understood and what you missed.","Ask “Could you say that another way?”","Check back: “So the meeting moves to Friday?”","Name words that might be new, and explain idioms.","Share the work: slides and key terms before a talk, and questions during it."]},
      {tip:"“I can’t understand your accent” is less helpful than “I missed the last word”. The second one tells the speaker what to fix, and it does not blame."}
     ],
     pro:[
      "Smith and Nelson’s 1985 paper in the journal *World Englishes* proposed that intelligibility (word and utterance recognition), comprehensibility (meaning of the utterance) and interpretability (intention behind the utterance) are separate, and that they can be measured separately. Later work has shown that familiarity with a variety, the listener’s attitudes and the topic all affect results.",
      "Derwing and Munro’s research from the 1990s on (for example, Munro and Derwing 1995, in *Language Learning*), mostly with second-language speakers of English, separates **accentedness** (how strongly an accent is perceived), **comprehensibility** (how hard it is for a listener to understand, often rated by listeners) and **intelligibility** (how much of the message is understood, often tested by transcription). It found that these correlate but are not the same: speech can be rated as strongly accented and still be fully intelligible.",
      "Listener attitudes also matter. Experiments have shown that expectations about a speaker can change how well a listener understands, and sociolinguists use this to explain why accent bias is not a fair guide to understanding. Unit 9 returns to attitudes and power.",
      "For teaching and for professional communication, the implication is to set goals in terms of understanding in the situations that matter, and to train both speakers and listeners, for example in strategies and in exposure to many varieties."
     ]},
    related:["we-english-lingua-franca","we-variety-accent-dialect"],
    read:[{book:"eling", where:"Chapter 2, “Language, Power, and Privilege”, section 2.1 “Language and identity”"}],
    sources:[{t:"Speech Accent Archive, George Mason University", url:"https://accent.gmu.edu/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"we-world-englishes", term:"World Englishes", def:"The many varieties of English used around the world, and the study of them. The plural stresses that no single variety owns English.", codex:"we-kachru-circles"},
   {id:"we-l1-user", term:"First-language (L1) user", def:"A person who learned English from birth, at home. Many linguists prefer this phrase to *native speaker*.", codex:"we-who-uses-english"},
   {id:"we-l2-user", term:"Second-language (L2) user", def:"A person who uses English as an additional language in daily life, school, work or government. “Second” does not mean “worse”.", codex:"we-who-uses-english"},
   {id:"we-efl", term:"Foreign-language (EFL) user", def:"A person who learned English mainly in class and uses it with visitors, online or for work abroad.", codex:"we-who-uses-english"},
   {id:"we-multilingual", term:"Multilingual", def:"Using more than one language regularly. Most people in the world are multilingual.", codex:"we-who-uses-english"},
   {id:"we-repertoire", term:"Repertoire", def:"All the languages and varieties that a person uses, each for its own settings.", codex:"we-who-uses-english"},
   {id:"we-feature", term:"Feature (of a variety)", def:"A pattern that is systematic, shared by a community and used by proficient speakers, such as a grammar pattern recorded in eWAVE.", codex:"we-variety-accent-dialect"},
   {id:"we-ewave", term:"eWAVE", def:"The electronic World Atlas of Varieties of English, an open database of grammar features in 77 varieties of English (CC BY 3.0).", codex:"we-variety-accent-dialect"},
   {id:"we-inner-circle", term:"Inner circle", def:"In Kachru’s model, countries where English is the first language of most people, such as the UK, the USA and Australia.", codex:"we-kachru-circles"},
   {id:"we-outer-circle", term:"Outer circle", def:"In Kachru’s model, countries where English is an additional language with an official or institutional role, such as India, Nigeria and Singapore.", codex:"we-kachru-circles"},
   {id:"we-expanding-circle", term:"Expanding circle", def:"In Kachru’s model, countries where English is a foreign language, learned in school and used for trade, study and media, such as Japan and Brazil.", codex:"we-kachru-circles"},
   {id:"we-norm-providing", term:"Norm-providing", def:"Kachru’s word for the inner circle: its norms of correct English come from within the circle.", codex:"we-kachru-circles"},
   {id:"we-norm-developing", term:"Norm-developing", def:"Kachru’s word for the outer circle: local norms of English are being built.", codex:"we-kachru-circles"},
   {id:"we-norm-dependent", term:"Norm-dependent", def:"Kachru’s word for the expanding circle: learners have mostly looked to norms from outside.", codex:"we-kachru-circles"},
   {id:"we-lingua-franca", term:"Lingua franca (ELF)", def:"A language that people with different first languages use to talk to each other. English as a lingua franca (ELF) is English used this way.", codex:"we-english-lingua-franca"},
   {id:"we-lfc", term:"Lingua Franca Core (LFC)", def:"Jenkins’ 2000 proposal of pronunciation features that matter most for understanding between users of English as an additional language.", codex:"we-english-lingua-franca"},
   {id:"we-centripetal", term:"Centripetal circles", def:"Modiano’s 1999 model, which puts widely understood features of English at the center and more local features further out.", codex:"we-english-lingua-franca"},
   {id:"we-translanguaging", term:"Translanguaging", def:"Using all the languages one knows as one repertoire, switching and mixing as needed. It is a normal skill of multilingual speakers.", codex:"we-english-lingua-franca"},
   {id:"we-intelligibility", term:"Intelligibility", def:"The first level of understanding in Smith and Nelson’s (1985) scheme: recognizing the words and sounds.", codex:"we-intelligibility-respect"},
   {id:"we-comprehensibility", term:"Comprehensibility", def:"The second level of understanding: knowing what the sentence means.", codex:"we-intelligibility-respect"},
   {id:"we-interpretability", term:"Interpretability", def:"The third level of understanding: seeing what the speaker intends or wants.", codex:"we-intelligibility-respect"},
   {id:"we-accommodation", term:"Accommodation", def:"Adjusting your speech toward the listener, for example by slowing down or choosing shared words. In good conversations, both sides do it.", codex:"we-intelligibility-respect"}
  ],
  bank:[
   {"id": "e6u1-q01", "lesson": "e6u1-l1", "level": 1, "q": "Which group learned English mainly in class and uses it mostly with visitors, online or for work abroad?", "options": [{"t": "Foreign-language (EFL) users", "ok": true, "why": "Right. English has no daily role in their community, and they learn it mainly in school."}, {"t": "First-language (L1) users", "why": "They learned English from birth, at home."}, {"t": "Second-language (L2) users", "why": "They use English in daily life, school or government in their own country."}, {"t": "Repertoire users", "why": "A repertoire is the set of all languages a person uses. It is not a group of users."}]},
   {"id": "e6u1-q02", "lesson": "e6u1-l1", "level": 1, "q": "Why do many linguists prefer the phrase *additional-language user* to *second-language user*?", "options": [{"t": "It makes the speaker’s English sound less fluent.", "why": "The phrase says nothing about fluency."}, {"t": "It means that the person has learned exactly two languages.", "why": "An additional-language user may use three, four or more languages."}, {"t": "It only applies to people in the inner circle.", "why": "It describes a person’s situation anywhere in the world."}, {"t": "It avoids the idea that “second” means “worse” or “learned later”.", "ok": true, "why": "Right. English is one of several languages in the person’s life."}]},
   {"id": "e6u1-q03", "lesson": "e6u1-l1", "level": 1, "q": "What is a **repertoire**?", "options": [{"t": "A list of English words that a person knows", "why": "A repertoire includes whole languages and varieties, not only words."}, {"t": "The accent a person was born with", "why": "An accent is only the sound of speech."}, {"t": "All the languages and varieties that a person uses, each for its own settings", "ok": true, "why": "Right. Most people have a repertoire with more than one language."}, {"t": "A test score in English", "why": "A repertoire is not a score."}]},
   {"id": "e6u1-q04", "lesson": "e6u1-l1", "level": 2, "q": "Two reports give different totals for English users in the same town. What is the most likely reason?", "options": [{"t": "One report must be false.", "why": "Both can be honest. They answer slightly different questions."}, {"t": "They define “using English” in different ways, or count in different years.", "ok": true, "why": "Right. Definitions and dates change the total."}, {"t": "English changes its grammar between reports.", "why": "Grammar does not explain differences in counts."}, {"t": "People in the town change their language every day.", "why": "People do not change this fast. The definitions differ."}]},
   {"id": "e6u1-q05", "lesson": "e6u1-l1", "level": 2, "q": "In an invented town of 1,000 adults, 120 use English at home and 380 can hold a simple conversation. What does this show?", "options": [{"t": "The same people give different totals under different definitions.", "ok": true, "why": "Right. The definition decides which number you get."}, {"t": "The survey was done badly.", "why": "Both numbers can be correct for their definitions."}, {"t": "Only 120 people really speak English.", "why": "The 120 are those who use it at home. Many more can use it in other places."}, {"t": "380 is always the correct number.", "why": "No definition is correct in every case."}]},
   {"id": "e6u1-q06", "lesson": "e6u1-l1", "level": 2, "q": "Which set of questions is the best way to check a number about English users?", "options": [{"t": "Is the number big enough to impress?", "why": "Size does not tell you whether the number is reliable."}, {"t": "Does the number agree with my first guess?", "why": "Your guess is not evidence."}, {"t": "Is the website well designed?", "why": "Design says nothing about how a number was counted."}, {"t": "Who counted, what counted as “using English”, and when?", "ok": true, "why": "Right. These three questions explain what the number measures."}]},
   {"id": "e6u1-q07", "lesson": "e6u1-l1", "level": 3, "q": "Sione grew up in Auckland. His family speaks Samoan at home. He has used English at school and with friends since age five, and uses it every day. Which statement is the most accurate?", "options": [{"t": "He must be a foreign-language user.", "why": "He uses English every day in his community, not mainly in class."}, {"t": "He cannot be described by any label.", "why": "Labels are not exact, but they can still describe parts of his situation."}, {"t": "The labels overlap, so his whole repertoire describes him better than one label.", "ok": true, "why": "Right. Many people do not fit one box, and the three groups describe situations."}, {"t": "Only the language he spoke first counts.", "why": "Many linguists look at the whole repertoire and not only the first language."}]},
   {"id": "e6u1-q08", "lesson": "e6u1-l1", "level": 3, "q": "Mei must put one number about English users on a school poster. Which choice is the most honest?", "options": [{"t": "Use the biggest number, because it is more exciting.", "why": "This hides how the number was counted."}, {"t": "Give a range, say who produced it and in which year, and say that estimates vary.", "ok": true, "why": "Right. A range with a source and a date shows what the number means."}, {"t": "Use the first number from a search and give no source.", "why": "Without a source, readers cannot judge the number."}, {"t": "Leave out numbers and write that nobody knows anything.", "why": "Estimates exist, and a hedged estimate is useful."}]},
   {"id": "e6u1-q09", "lesson": "e6u1-l1", "level": 3, "q": "Amara says: “Only first-language users should decide what English is.” Which reply uses what you have learned?", "options": [{"t": "Most estimates say that additional-language users are at least as many. Their communities have also developed their own varieties.", "ok": true, "why": "Right. The claim leaves out most of the people who use English."}, {"t": "You are right, because they were born with it.", "why": "Being born with a language does not give anyone control of it."}, {"t": "First-language users are not important.", "why": "They are an important group. The point is that they are not the only one."}, {"t": "Nobody decides anything about English.", "why": "Communities, institutions and speakers all take part in decisions about use."}]},
   {"id": "e6u1-q10", "lesson": "e6u1-l2", "level": 1, "q": "Which difference is a difference of **accent** only?", "options": [{"t": "Saying *prepone* for “move to an earlier time”", "why": "This is a word, so it is a difference of dialect."}, {"t": "Using a different word order in questions", "why": "This is grammar, so it is a difference of dialect."}, {"t": "Writing *colour* or *color*", "why": "This is spelling, not pronunciation."}, {"t": "Pronouncing the *r* at the end of *car*, or not", "ok": true, "why": "Right. This is a difference of sound only."}]},
   {"id": "e6u1-q11", "lesson": "e6u1-l2", "level": 1, "q": "What does the word **variety** mean in this course?", "options": [{"t": "A form of English that is lower than the standard", "why": "Linguists do not use the word to rank."}, {"t": "A regional accent only", "why": "Varieties can also be social, or tied to age or situation."}, {"t": "Any form of a language that a group of people share, with no ranking", "ok": true, "why": "Right. It is a neutral word."}, {"t": "A word that one speaker invented", "why": "A variety is shared by a group."}]},
   {"id": "e6u1-q12", "lesson": "e6u1-l2", "level": 1, "q": "Which statement about a **standard variety** is accurate?", "options": [{"t": "It is the only correct accent.", "why": "Standard English can be spoken with many accents."}, {"t": "It is the form used in education, news and law, and it is a social choice.", "ok": true, "why": "Right. It does not make a variety more logical."}, {"t": "It is the oldest form of English.", "why": "Standard forms are chosen by communities. Age is not the reason."}, {"t": "It is used by every first-language speaker.", "why": "Many first-language speakers use other varieties in daily life."}]},
   {"id": "e6u1-q13", "lesson": "e6u1-l2", "level": 2, "q": "Two varieties are mutually intelligible. What does that show?", "options": [{"t": "It is one useful clue, but it does not settle whether they are one language or two.", "ok": true, "why": "Right. History, standards and identity also matter."}, {"t": "They are definitely the same language.", "why": "Norwegian and Swedish are often understood but are called two languages."}, {"t": "They are definitely different languages.", "why": "Understanding is a sign of closeness, not of difference."}, {"t": "One of them is a dialect of the other.", "why": "Mutual intelligibility does not say which is a dialect."}]},
   {"id": "e6u1-q14", "lesson": "e6u1-l2", "level": 2, "q": "Does English have a single standard variety?", "options": [{"t": "Yes, only the one used in England.", "why": "Other countries have their own standards."}, {"t": "Yes, the one used in the United States.", "why": "American English is one standard among several."}, {"t": "No, because a standard is a mistake.", "why": "A standard is a social choice. It is not a mistake."}, {"t": "No. Several countries have their own widely accepted standards.", "ok": true, "why": "Right. Examples are American, Australian and Indian standards."}]},
   {"id": "e6u1-q15", "lesson": "e6u1-l2", "level": 2, "q": "Which source can help you check whether a grammar feature is documented in a variety of English?", "options": [{"t": "A single opinion on a forum", "why": "One opinion is not documentation."}, {"t": "A list of spelling rules", "why": "Spelling rules do not document grammar features."}, {"t": "The eWAVE atlas", "ok": true, "why": "Right. eWAVE records grammar features in many varieties."}, {"t": "The first dictionary you find", "why": "A dictionary is mainly about words, and one dictionary is not enough."}]},
   {"id": "e6u1-q16", "lesson": "e6u1-l2", "level": 3, "q": "Kenji reads “We need more informations” in an email from a colleague in Lagos. How should he think about it?", "options": [{"t": "It is clearly a careless mistake.", "why": "It follows a pattern that is documented in many varieties."}, {"t": "It resembles a plural for an uncountable noun that researchers have documented in some second-language Englishes. A formal house style may still ask for *information*.", "ok": true, "why": "Right. A documented feature and an accepted form for one document are two different questions."}, {"t": "It must be accepted in every document.", "why": "House styles and exams can ask for a different form."}, {"t": "It shows that the colleague does not know English.", "why": "A single form says nothing about a person’s proficiency."}]},
   {"id": "e6u1-q17", "lesson": "e6u1-l2", "level": 3, "q": "A classmate says that Indian English is “bad grammar”. Which reply uses the four questions from the lesson?", "options": [{"t": "Ask whether the forms are systematic, shared, used by proficient speakers and documented. Many are, so they are features of a variety.", "ok": true, "why": "Right. This uses evidence and not first impressions."}, {"t": "Agree, because it is different from British English.", "why": "Different from one variety does not mean wrong."}, {"t": "Say that all forms of English are the same.", "why": "Varieties do differ, in regular ways."}, {"t": "Say that nobody can judge grammar.", "why": "Linguists can describe patterns using evidence."}]},
   {"id": "e6u1-q18", "lesson": "e6u1-l2", "level": 3, "q": "A student’s essay contains one odd form that appears only once and matches no pattern in any variety. What is the fairest label?", "options": [{"t": "A feature of the student’s country’s English", "why": "One odd form is not shared or systematic."}, {"t": "Proof that the student cannot write", "why": "One form says little about a person’s skill."}, {"t": "A new variety of English", "why": "One form is not a variety."}, {"t": "A slip or a learner form, not a documented feature", "ok": true, "why": "Right. Features are systematic and shared. This does not look like one."}]},
   {"id": "e6u1-q19", "lesson": "e6u1-l3", "level": 1, "q": "Who proposed the three circles of English, and when?", "options": [{"t": "Jennifer Jenkins, in 2000", "why": "Jenkins proposed the Lingua Franca Core."}, {"t": "Edgar Schneider, in 2003", "why": "Schneider proposed the Dynamic Model."}, {"t": "Braj Kachru, in 1985", "ok": true, "why": "Right. It is the model usually called Kachru’s three circles."}, {"t": "Marko Modiano, in 1999", "why": "Modiano proposed centripetal circles."}]},
   {"id": "e6u1-q20", "lesson": "e6u1-l3", "level": 1, "q": "Which list contains only inner-circle countries?", "options": [{"t": "India, Nigeria, Singapore, Ghana", "why": "These are usually placed in the outer circle."}, {"t": "UK, USA, Ireland, Australia", "ok": true, "why": "Right. English is the first language of most people there: the UK is its traditional home, and settlers brought it to the others."}, {"t": "Japan, Brazil, Germany, China", "why": "These are usually placed in the expanding circle."}, {"t": "UK, India, Japan, Brazil", "why": "This list mixes all three circles."}]},
   {"id": "e6u1-q21", "lesson": "e6u1-l3", "level": 1, "q": "Which circle is described as **norm-developing**?", "options": [{"t": "The outer circle", "ok": true, "why": "Right. Local norms are being built there."}, {"t": "The inner circle", "why": "This circle is called norm-providing."}, {"t": "The expanding circle", "why": "This circle is called norm-dependent."}, {"t": "None of them", "why": "The model gives a label to each circle."}]},
   {"id": "e6u1-q22", "lesson": "e6u1-l3", "level": 2, "q": "How did English usually reach outer-circle countries?", "options": [{"t": "Through school and media only, with no official role", "why": "This describes the expanding circle."}, {"t": "Through the migration of first-language speakers who became the majority", "why": "This describes the inner circle."}, {"t": "Through a vote of linguists", "why": "No such vote took place."}, {"t": "Through colonial rule, and it stayed in schools, courts and government after independence", "ok": true, "why": "Right. Many countries kept English as an institutional language."}]},
   {"id": "e6u1-q23", "lesson": "e6u1-l3", "level": 2, "q": "What does the three-circles model describe?", "options": [{"t": "How well each person speaks English", "why": "The model says nothing about individual skill."}, {"t": "Which accent is the best", "why": "It makes no such claim."}, {"t": "The history of English in countries and its role there", "ok": true, "why": "Right. It does not measure skill."}, {"t": "The exact number of speakers", "why": "The model has no numbers."}]},
   {"id": "e6u1-q24", "lesson": "e6u1-l3", "level": 2, "q": "Which is a **strength** of the model?", "options": [{"t": "It proves that inner-circle English is more correct.", "why": "The model makes no such claim."}, {"t": "It shows that English has many centers, and it gave outer-circle varieties a place in research.", "ok": true, "why": "Right. This is why courses still start with it."}, {"t": "It explains how every individual learns English.", "why": "It is about countries, not about learning."}, {"t": "It gives the exact number of English users.", "why": "It is not a counting tool."}]},
   {"id": "e6u1-q25", "lesson": "e6u1-l3", "level": 3, "q": "A teacher says: “Singapore must be inner circle, because English is used everywhere there.” What is the best reply?", "options": [{"t": "The model usually places it in the outer circle. English arrived with colonial rule and has an institutional role. More and more residents now speak it most often at home, so the case shows that countries change.", "ok": true, "why": "Right. Heavy use does not make a country inner circle, but the case shows that countries change."}, {"t": "You are right. Where English is used a lot, the country is inner circle.", "why": "The circles depend on how English arrived and its role, not only on how much it is used."}, {"t": "Singapore has no English.", "why": "English is widely used and has an official role."}, {"t": "The model has no outer circle.", "why": "The outer circle is one of its three parts."}]},
   {"id": "e6u1-q26", "lesson": "e6u1-l3", "level": 3, "q": "Mei says: “Expanding-circle English is worse English.” Which reply fits the model?", "options": [{"t": "You are right. Expanding means not yet good.", "why": "The word describes where English is spreading. It is not a grade."}, {"t": "The model proves that the outer circle is better.", "why": "The model does not rank circles."}, {"t": "Nobody in the expanding circle uses English.", "why": "Many people do, for study, work and media."}, {"t": "The model sorts countries by history and role. It says nothing about the quality of anyone’s English.", "ok": true, "why": "Right. Many expanding-circle users are highly proficient."}]},
   {"id": "e6u1-q27", "lesson": "e6u1-l3", "level": 3, "q": "Fatima finds Jamaica in the inner circle in one source and in the outer circle in another. What is the best explanation?", "options": [{"t": "One of the authors made a typing error.", "why": "Both placements have reasons."}, {"t": "Jamaica has no English.", "why": "English is widely used there."}, {"t": "The edges of the circles are blurred, and writers place some countries in different ways.", "ok": true, "why": "Right. Jamaica and South Africa are two cases that people place in different ways."}, {"t": "The circles change every day.", "why": "The circles are a model, and placing some countries is open to debate."}]},
   {"id": "e6u1-q28", "lesson": "e6u1-l4", "level": 1, "q": "What is a **lingua franca**?", "options": [{"t": "A language that only first-language users speak", "why": "This is the opposite of a lingua franca."}, {"t": "A language that people with different first languages use to talk to each other", "ok": true, "why": "Right. English as a lingua franca (ELF) is English used in this way."}, {"t": "A dead language", "why": "A lingua franca is a living language used in contact situations."}, {"t": "A language with no grammar", "why": "Every lingua franca has grammar."}]},
   {"id": "e6u1-q29", "lesson": "e6u1-l4", "level": 1, "q": "Which model puts widely understood features at the center and local features further out?", "options": [{"t": "Modiano’s centripetal circles (1999)", "ok": true, "why": "Right. The picture centers communication."}, {"t": "Kachru’s three circles (1985)", "why": "Kachru’s circles are about countries and history."}, {"t": "Schneider’s Dynamic Model (2003)", "why": "Schneider’s model has five phases of change."}, {"t": "Jenkins’ Lingua Franca Core (2000)", "why": "It is a set of pronunciation features, not a drawing of circles."}]},
   {"id": "e6u1-q30", "lesson": "e6u1-l4", "level": 1, "q": "What does **translanguaging** mean?", "options": [{"t": "Translating a text word for word", "why": "Translation is a different activity."}, {"t": "Forgetting one language while learning another", "why": "Translanguaging does not mean forgetting."}, {"t": "Speaking only one language in each setting", "why": "It is the opposite of this idea."}, {"t": "Using all the languages one knows as one repertoire, switching and mixing as needed", "ok": true, "why": "Right. It is a normal skill of multilingual speakers."}]},
   {"id": "e6u1-q31", "lesson": "e6u1-l4", "level": 2, "q": "Which is a limit of the three-circles model?", "options": [{"t": "It was published before 1985.", "why": "The model dates from 1985."}, {"t": "It has too many numbers.", "why": "The model has no numbers."}, {"t": "It sorts countries, so it hides differences between people in one country.", "ok": true, "why": "Right. It also has no place for ELF conversations."}, {"t": "It describes English only in the inner circle.", "why": "It describes all three circles."}]},
   {"id": "e6u1-q32", "lesson": "e6u1-l4", "level": 2, "q": "What did Jenkins propose in 2000?", "options": [{"t": "The three circles of English", "why": "This was Kachru, in 1985."}, {"t": "The Lingua Franca Core: pronunciation features that matter most for understanding between users of English as an additional language", "ok": true, "why": "Right. Unit 8 studies it in detail."}, {"t": "The Dynamic Model with five phases", "why": "This was Schneider."}, {"t": "A rule that learners must lose their accent", "why": "The core does not say this."}]},
   {"id": "e6u1-q33", "lesson": "e6u1-l4", "level": 2, "q": "Which statement about the Lingua Franca Core is accurate?", "options": [{"t": "It is a research proposal about which features help understanding, and it does not tell anyone to give up their accent.", "ok": true, "why": "Right. It is not an order."}, {"t": "It says that every learner must speak in the same way.", "why": "It describes what helps understanding. It does not give orders."}, {"t": "It is a set of grammar rules for exams.", "why": "It is mainly about pronunciation."}, {"t": "It was written in 1850.", "why": "It was proposed in 2000."}]},
   {"id": "e6u1-q34", "lesson": "e6u1-l4", "level": 3, "q": "A Thai engineer and a Brazilian engineer work together in English. Which circle’s norms do they follow?", "options": [{"t": "The inner circle’s norms, because those are the standard.", "why": "Neither speaker needs to follow them to be understood."}, {"t": "The outer circle’s norms, because English is an additional language.", "why": "Both are from expanding-circle countries, and the outer circle plays no part."}, {"t": "None, because they cannot communicate.", "why": "ELF conversations often work well."}, {"t": "Often neither. They work out together what is clear, and they adjust to each other.", "ok": true, "why": "Right. This is a typical ELF situation."}]},
   {"id": "e6u1-q35", "lesson": "e6u1-l4", "level": 3, "q": "Jamal proposes a training course that tells Japanese learners to copy an inner-circle accent “because the expanding circle is norm-dependent”. What is the best response?", "options": [{"t": "Agree. The model says that learners must copy the norms.", "why": "The model describes a pattern. It does not give instructions."}, {"t": "Reject all pronunciation teaching.", "why": "Pronunciation matters for understanding. The question is which goals suit the learners."}, {"t": "The label describes a historical pattern. Many users succeed without copying one accent, so the goals should depend on who learners will talk to.", "ok": true, "why": "Right. The model does not give orders."}, {"t": "Say that nobody can learn an accent.", "why": "Many people can, if they want to."}]},
   {"id": "e6u1-q36", "lesson": "e6u1-l4", "level": 3, "q": "A friend says: “Eighty percent of English conversations have no first-language speaker.” What is the best reply?", "options": [{"t": "Agree, because it is a well-known number.", "why": "A well-known number is not evidence."}, {"t": "Ask for the source. Researchers think that the share is large, but nobody knows the exact figure.", "ok": true, "why": "Right. The claim sounds precise, and the evidence is not."}, {"t": "Say that the share is zero.", "why": "This is not supported either."}, {"t": "Say that nobody uses English as a lingua franca.", "why": "Many people do."}]},
   {"id": "e6u1-q37", "lesson": "e6u1-l5", "level": 1, "q": "Which list gives Smith and Nelson’s three levels of understanding in order?", "options": [{"t": "Intelligibility, comprehensibility, interpretability", "ok": true, "why": "Right. The levels go from words, to meaning, to intention."}, {"t": "Comprehensibility, interpretability, intelligibility", "why": "The order is wrong. Recognizing words comes first."}, {"t": "Accent, dialect, variety", "why": "These are terms from Lesson 2."}, {"t": "Inner, outer, expanding", "why": "These are the three circles."}]},
   {"id": "e6u1-q38", "lesson": "e6u1-l5", "level": 1, "q": "In the table of Kamome House residents, what does the circle describe?", "options": [{"t": "How well the person speaks English", "why": "The circle says nothing about skill."}, {"t": "The person’s accent", "why": "An accent can differ within a country."}, {"t": "The person’s first language", "why": "A person’s first language may be different from the country’s main language."}, {"t": "The person’s country and the history of English there", "ok": true, "why": "Right. It does not describe a person’s skill."}]},
   {"id": "e6u1-q39", "lesson": "e6u1-l5", "level": 1, "q": "What does **accommodation** mean in the lesson?", "options": [{"t": "A place to stay in a house", "why": "This is another meaning of the word."}, {"t": "Copying the accent of the listener exactly", "why": "Accommodation is an adjustment, not a copy."}, {"t": "Speakers adjusting their speech toward the listener", "ok": true, "why": "Right. In good conversations both sides adjust."}, {"t": "Refusing to change one’s speech", "why": "This is the opposite of accommodation."}]},
   {"id": "e6u1-q40", "lesson": "e6u1-l5", "level": 2, "q": "Which statement about familiarity is accurate?", "options": [{"t": "Familiarity makes no difference.", "why": "Experience with a variety helps."}, {"t": "Listeners often understand a variety better after they hear it more.", "ok": true, "why": "Right. Understanding depends on the listener’s experience too."}, {"t": "Only first-language users benefit from familiarity.", "why": "Anyone can become familiar with a variety."}, {"t": "A speaker can remove the need for familiarity by speaking louder.", "why": "Volume does not replace experience."}]},
   {"id": "e6u1-q41", "lesson": "e6u1-l5", "level": 2, "q": "A colleague says, “I didn’t catch that word.” At which level of understanding is the problem?", "options": [{"t": "Intelligibility", "ok": true, "why": "Right. Recognizing the words is the first level."}, {"t": "Comprehensibility", "why": "This level is about the meaning of the sentence."}, {"t": "Interpretability", "why": "This level is about the speaker’s intention."}, {"t": "No level", "why": "The colleague has a real problem at one of the levels."}]},
   {"id": "e6u1-q42", "lesson": "e6u1-l5", "level": 2, "q": "A colleague says, “I understood the sentence, but why did she say it?” At which level is the problem?", "options": [{"t": "Intelligibility", "why": "The listener recognized the words."}, {"t": "Comprehensibility", "why": "The listener understood the meaning."}, {"t": "Accommodation", "why": "This is a way of adjusting speech, not a level."}, {"t": "Interpretability", "ok": true, "why": "Right. The listener is looking for the speaker’s intention."}]},
   {"id": "e6u1-q43", "lesson": "e6u1-l5", "level": 3, "q": "In a meeting, Ayesha’s colleague from Bengaluru says, “Let’s prepone the call.” Ayesha does not know the word. What is the best step?", "options": [{"t": "Say, “That is not a word.”", "why": "*Prepone* is widely used in Indian English, and it is clear in context."}, {"t": "Say nothing and agree.", "why": "This leaves a misunderstanding in place."}, {"t": "Ask, “What does prepone mean? Do you mean move it earlier?”", "ok": true, "why": "Right. It asks about the word and checks the meaning."}, {"t": "Ask the colleague to speak like an inner-circle speaker.", "why": "The problem is one word, not the colleague’s variety."}]},
   {"id": "e6u1-q44", "lesson": "e6u1-l5", "level": 3, "q": "A manager asks an employee to “work on his accent” before client calls, but clients have said that they understood everything. What is the best response?", "options": [{"t": "Agree, because everyone should have the same accent.", "why": "No one accent is required for understanding."}, {"t": "Ask what understanding problem exists. An accent is not an error, and the clients report no trouble.", "ok": true, "why": "Right. The useful question is about understanding, not accent."}, {"t": "Say that accents cannot be changed at all.", "why": "This is not the point. The point is that no problem was reported."}, {"t": "Say that clients are always wrong.", "why": "The clients said that they understood."}]},
   {"id": "e6u1-q45", "lesson": "e6u1-l5", "level": 3, "q": "After a talk, three students say they could not follow the speaker. What is the most useful next step?", "options": [{"t": "Ask each student which part was hard, and share the work: slides and key terms before the talk, questions during it.", "ok": true, "why": "Right. Understanding is shared work between speaker and listeners."}, {"t": "Tell the speaker to change his accent.", "why": "This ignores the listeners’ part, and it does not say what was hard."}, {"t": "Tell the students that they should just listen better.", "why": "This puts all the work on the listeners."}, {"t": "Cancel the talk.", "why": "The problem can be solved with simple steps."}]}
  ]
});
