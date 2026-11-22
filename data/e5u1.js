/* How English Works · Unit 1 (e5u1) · Rules, usage and myths */
ICA.addUnit({
  id:"e5u1", track:"e5", n:1, title:"Rules, usage and myths", icon:"📏",
  blurb:"What an English “rule” really is, and who decides. You will learn how grammar describes a language and does not make laws for it. You will see how dictionaries and corpora (large collections of real text) settle questions, and test five famous myths against the evidence. You will also separate real rules from style choices and house style, and see why English is many Englishes.",
    goals:[
    "Explain the difference between descriptive and prescriptive grammar, and say what “standard English” is and is not",
    "Explain how lexicographers and corpora decide what is in a dictionary, and read a short concordance",
    "Test five famous “rules” (split infinitives, ending with a preposition, starting with And or But, singular they, double negatives) against the evidence",
    "Tell a real grammar rule from a style choice or a house style, and handle US and UK conventions",
    "Describe accents, dialects and registers as normal variation, and explain English usage to a learner kindly and accurately"
  ],
  read:[
    {book:"eling", where:"The opening chapter on what linguistics is, the part on descriptive and prescriptive rules; and the chapter on language variation (sociolinguistics)", note:"Cited by topic, not number. Read the first after Lesson 1 and the second after Lesson 5. The book is written for linguistics students, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u1-l1", title:"Grammar describes; it doesn’t make laws", minutes:50,
   hook:{q:"Which of these is a rule of English that every native speaker follows, yet almost nobody was ever taught?", options:["Never end a sentence with a preposition","Adjectives go in a set order: a big old wooden table, not a wooden old big table","Never split an infinitive","Use whom, not who, for the object of a verb"], answer:1, reveal:"**The adjective order.** No teacher explains it, but native speakers almost never say *a wooden old big table*. It sounds wrong at once. The other three are “rules” that were taught, argued about and often broken by good writers. This lesson is about the difference between those two kinds of rule, and about who has the right to decide what is correct."},
   goals:[
     "Explain what a rule of grammar means to a linguist, and how that differs from a rule in a style book",
     "Tell descriptive from prescriptive statements about English",
     "Explain what “standard English” is, and why it is not the same as “good” or “correct” English",
     "Sort a “mistake” into three groups: not English, not standard, or only disputed"
   ],
   learn:[
    {h:"Two meanings of the word “rule”", body:[
      {lead:"A speed limit and the law of gravity are both called rules. They are very different things."},
      "A speed limit is a **command**. Someone made it, and you can break it. If you break it, you may pay a fine. The law of gravity is a **description**. Nobody made it. It says what happens, and you cannot break it.",
      "English has both kinds of “rule”, and people mix them up all the time. Some rules of English describe what every speaker does. Others are commands that someone wrote down at some point in history.",
      "Here is a rule of the first kind. Native speakers put adjectives in a fairly fixed order: opinion, size, age, shape, color, origin, material, purpose. So we say *a lovely small old round brown Italian wooden bowl*. Nobody says *a wooden Italian brown round old small lovely bowl*. No one teaches this order, and native speakers cannot usually say what it is. Yet they follow it.",
      "Other rules of the first kind are so basic that we forget they exist. *The cat sat* is English. *Cat the sat* is not. We say *an apple* but *a pear*. A speaker who breaks these rules is not “a little careless”. The words simply do not form English.",
      {key:"Many rules of English are patterns that speakers follow without knowing it. A linguist’s job is to find and describe them."}
    ]},
    {h:"Describing and prescribing", body:[
      "A [[descriptive-grammar|descriptive]] approach asks: *what do speakers actually do?* It works like a weather report. The reporter does not decide that it will rain. She looks at the evidence and says what is happening. A descriptive grammar of English records the patterns real speakers and writers use.",
      "A [[prescriptive-grammar|prescriptive]] approach asks: *what should speakers do?* It works like a speed limit. It says which forms are “right” and which are “wrong”, and it tries to change what people do. Many school grammar rules are prescriptive.",
      {fig:'<svg viewBox="0 0 340 236"><defs><marker id="e5a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="22" text-anchor="middle">Describing: the evidence comes first</text><rect class="d-sage" x="6" y="34" width="96" height="58" rx="8" stroke-width="2"/><text x="54" y="59" text-anchor="middle">People</text><text class="s" x="54" y="77" text-anchor="middle">speak and write</text><rect class="d-lup" x="122" y="34" width="96" height="58" rx="8" stroke-width="2"/><text x="170" y="59" text-anchor="middle">Linguist</text><text class="s" x="170" y="77" text-anchor="middle">records patterns</text><rect class="d-gold" x="238" y="34" width="96" height="58" rx="8" stroke-width="2"/><text x="286" y="59" text-anchor="middle">Description</text><text class="s" x="286" y="77" text-anchor="middle">“speakers do X”</text><path class="d-ink" d="M104 63H118" stroke-width="2" marker-end="url(#e5a1)"/><path class="d-ink" d="M220 63H234" stroke-width="2" marker-end="url(#e5a1)"/><text x="170" y="136" text-anchor="middle">Prescribing: the rule comes first</text><rect class="d-rose" x="6" y="148" width="96" height="58" rx="8" stroke-width="2"/><text x="54" y="173" text-anchor="middle">Rule-maker</text><text class="s" x="54" y="191" text-anchor="middle">decides</text><rect class="d-gold" x="122" y="148" width="96" height="58" rx="8" stroke-width="2"/><text x="170" y="168" text-anchor="middle">Rule</text><text class="s" x="170" y="184" text-anchor="middle">“speakers</text><text class="s" x="170" y="199" text-anchor="middle">should X”</text><rect class="d-sage" x="238" y="148" width="96" height="58" rx="8" stroke-width="2"/><text x="286" y="173" text-anchor="middle">People</text><text class="s" x="286" y="191" text-anchor="middle">asked to follow</text><path class="d-ink" d="M104 177H118" stroke-width="2" marker-end="url(#e5a1)"/><path class="d-ink" d="M220 177H234" stroke-width="2" marker-end="url(#e5a1)"/><text class="s" x="170" y="228" text-anchor="middle">Both can be useful. They do different jobs.</text></svg>', alt:"Two rows of three boxes joined by arrows. Top row, describing: people speak and write, then a linguist records patterns, then a description that says speakers do X. Bottom row, prescribing: a rule-maker decides, then a rule that says speakers should do X, then people are asked to follow it.", cap:"In describing, evidence leads to the statement. In prescribing, the statement comes first and speakers are asked to follow it."},
      {table:[["","Descriptive","Prescriptive"],["Question","What do people say?","What should people say?"],["Works like","A weather report","A speed limit"],["Based on","Evidence from real speech and writing","Opinion, tradition or a style book"],["Example","“Many US speakers use *gotten*.”","“Never use *gotten*.”"]]},
      "Neither approach is “bad”. They do different jobs. A dictionary editor or a linguist needs to describe. A person who writes a company manual or prepares students for an exam may need to prescribe, because readers expect a certain style. Trouble starts when a prescriptive opinion is presented as if it were a fact about the language.",
      {tip:"A quick test: if a statement says what people *do*, you can check it against evidence. If it says what people *should* do, ask who decided, and why."}
    ]},
    {h:"Where many prescriptive rules came from", body:[
      "Unlike French or Spanish, English has never had an official body that decides correct usage. The French Academy was founded in 1635. The Spanish Royal Academy was founded in 1713. In 1712 the writer Jonathan Swift proposed a similar body for English, but nothing came of it.",
      "Instead, English got **writers of guides**. In the 1700s many people wanted rules. Printing had spread. More people could read. A growing middle class wanted to speak and write like the educated. Writers answered with dictionaries and grammars: Samuel Johnson’s dictionary (1755), Robert Lowth’s *Short Introduction to English Grammar* (1762) and Lindley Murray’s *English Grammar* (1795), which was widely used in schools.",
      "Many of these writers admired Latin, which was seen as the model of a perfect, logical language. Some of their rules came from Latin grammar, even though English is built differently. You will see in Lesson 3 that several famous “rules” grew out of this habit.",
      "These writers were not fools. Some of their advice about clear writing is still good. But they were giving opinions, and often they did not check them against how people really spoke and wrote. Schools later repeated the opinions as if they were laws."
    ]},
    {h:"What “standard English” is, and what it is not", body:[
      "People often say “standard English” as if it means “correct English”. It does not. [[standard-english|Standard English]] is the variety of English used in education, government, news, publishing and business. It has a fairly fixed spelling and grammar, and it is the one taught to learners. It is a **social choice**, not a more logical or more beautiful form of English.",
      "Why does it exist? Imagine a country where every region wrote its own way. A letter from one town could be hard to read in another. A shared written standard solves this. Over several centuries, the written standard grew mostly out of the writing and speech of London and the area around it. It had prestige because those places had power, trade and the printing houses.",
      "Three points are easy to miss:",
      {list:["**Standard is not the same as an accent.** Standard English is about grammar, words and spelling. People with many different accents speak it.","**Standard is not the same as formal.** You can speak standard English in a relaxed, friendly way.","**Standard is not the only grammar.** Other varieties, such as African American English or Scots, have their own consistent grammar. Calling them “bad English” is a judgment about status, not about linguistics."]},
      "There are US and UK standards, and they differ in small ways (Lesson 4). So “the” standard really means a family of closely related standards. Both the General American (GA) and the Southern British (SSBE) accents that this course uses as reference accents are ways of speaking *standard* English. They are not the only ones."
    ]},
    {h:"Three kinds of “wrong”", body:[
      "When someone says “that is wrong”, they can mean three different things. Learning to tell them apart is the most useful skill in this unit.",
      {table:[["Kind","What it means","Example"],["1. Not English","No native speaker would say it, in any variety. It breaks a pattern of the language.","*Cat the black sat.*"],["2. Not standard","Many speakers say it, and it follows a pattern, but standard written English does not use it.","*I ain’t got none.* *We was late.*"],["3. Only disputed","Careful writers use it, but some people say it is wrong. The argument is about taste or tradition.","*to boldly go*; *Who did you meet?*"]]},
      "Kind 1 is a true error. Kind 2 is a matter of **context**: it is fine among friends in some communities and risky in an essay or a job application. Kind 3 is a matter of **opinion**, and Lesson 3 will test five famous cases against the evidence.",
      {ex:"Toby taught English in the Japanese countryside for two years. He is now a master’s student in Japanese linguistics. One day a student who liked a pop song asked him: “Is *ain’t* wrong?” Toby did not say yes or no. He said: “It’s real English. Lots of people say it, and it follows a pattern. But it isn’t standard, so don’t use it in your exam essay.” That answer is kind 2: not standard, but not “not English”.", label:"Worked example: a teacher’s answer"}
    ]},
    {h:"Compared with Japanese", body:[
      {tip:"This note is optional. Skip it if you prefer."},
      "Japanese has the same debate. Many speakers say *tabereru* (食べれる) for “can eat” instead of the older, standard *taberareru* (食べられる). The short form is called *ra-nuki kotoba* (ら抜き言葉), “words with *ra* left out”. Some teachers and style guides call it a mistake. Linguists note that large numbers of speakers use it, and it follows a clear pattern. That is the same split between prescribing and describing that you meet in English.",
      "If you speak Japanese, you already know the feeling. You can tell that a sentence is not Japanese at all (kind 1), that it is casual or regional (kind 2), or that some people dislike it (kind 3). English works the same way."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Grammar is a list of rules from teachers.","Grammar is first of all the system speakers already know. Teachers’ rules are only part of it."],["If it is not standard, it is wrong.","It is not standard. That tells you about the setting where it fits, not about whether it makes sense."],["Native speakers never make mistakes.","Native speakers slip in speech, like everyone. But they do not break the basic patterns, such as word order."],["Describing means “anything goes”.","No. A descriptive grammar is full of constraints: it records exactly what speakers do not say, too."],["Older rules are better.","Age is not evidence. Many “old” rules date from only the 1700s or 1800s."]]},
      {terms:["descriptive-grammar","prescriptive-grammar","standard-english"]}
    ]},
    {h:"Why this matters to you", body:[
      "If you learn or teach English, you will meet people who correct you or your students with great confidence. Some will be right. Many will be repeating an old opinion. If you know the three kinds of “wrong”, you can answer calmly: *Is it not English? Not standard? Or only disputed?*",
      "It also changes how you judge your own English. A form can be fully natural and still unwelcome in an academic essay. And a “rule” from school may not be a rule at all. The next lesson shows how dictionary editors and researchers find out what people really do."
    ]}
   ],
   try:[
    {id:"e5u1-l1-x1", type:"sort", q:"Each sentence has been called “wrong” by someone. Sort it into the right kind of “wrong”.", buckets:["Not English (breaks a basic pattern)","Not standard (a pattern, but not used in standard writing)","Only disputed (careful writers use it)"], items:[
      {t:"*Dog the barked loudly.*", b:0, why:"English puts the article before its noun. No variety of English allows *dog the*, so this breaks a basic pattern."},
      {t:"*We was waiting outside.*", b:1, why:"This follows a clear pattern found in several varieties. Standard written English uses *were*, so it is not standard."},
      {t:"*She wants to quickly finish.*", b:2, why:"A split infinitive. Good writers use it. Only some style books object."},
      {t:"*I don’t know nothing about it.*", b:1, why:"A double negative with a clear meaning. Many varieties use it, but standard writing does not."},
      {t:"*Who are you talking to?*", b:2, why:"Strict traditional style prefers *To whom are you talking?*, but *Who … to?* is normal in careful speech and writing. The objection is a matter of taste."},
      {t:"*A wooden old big table.*", b:0, why:"This breaks the adjective-order pattern that native speakers follow. In normal speech it sounds wrong in every variety."}
    ]},
    {id:"e5u1-l1-x2", type:"mcq", q:"Which statement is **descriptive**?", options:[
      {t:"In US English, *gotten* is a common past participle of *get*, as in *I’ve gotten a new phone*.", ok:true, why:"Right. It reports what speakers do, and you could check it against real data."},
      {t:"You should never say *gotten*.", why:"This says what people *should* do, and it gives no evidence. It is prescriptive."},
      {t:"Good writers avoid *gotten* because it sounds ugly.", why:"“Ugly” is an opinion about taste, so this is prescriptive."},
      {t:"Teachers must correct *gotten* in every essay.", why:"“Must” gives an order. It is a rule for teachers, not a report of usage."}
    ]},
    {id:"e5u1-l1-x3", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Descriptive grammar","A record of the patterns that speakers actually use","It reports what is, like a weather report."],
      ["Prescriptive grammar","Advice on which forms speakers should use","It tells people what to do, like a speed limit."],
      ["Standard English","The variety used in education, news and publishing","A social choice with prestige, not a “better” English."],
      ["Non-standard","A form that follows a pattern but is not used in standard writing","It is about setting and status, not about logic."]
    ]},
    {id:"e5u1-l1-x4", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"Jonathan Swift proposes an official body for English", why:"1712. Swift’s idea was never carried out."},
      {t:"Samuel Johnson’s dictionary", why:"1755. It recorded words with quotations, but did not control the language."},
      {t:"Robert Lowth’s *Short Introduction to English Grammar*", why:"1762. It gave many opinions about “correct” English that schools later repeated."},
      {t:"Lindley Murray’s *English Grammar*", why:"1795. It was widely used in schools and spread the rules."}
    ]},
    {id:"e5u1-l1-x5", type:"spot", q:"Amara wrote this note for a study group. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"A descriptive grammar records how people actually use the language.", flag:false, why:"Accurate. That is the main idea of the descriptive approach."},
      " ",
      {t:"English has an official academy that decides what is correct.", flag:true, why:"Inaccurate. English has never had one. French and Spanish do."},
      " ",
      {t:"Samuel Johnson, Robert Lowth and Lindley Murray wrote influential guides in the 1700s.", flag:false, why:"Accurate. Their books helped to spread opinions about correct English."},
      " ",
      {t:"Standard English is the most logical form of the language.", flag:true, why:"Misleading. It became standard through social history: trade, power, print and schools, not logic."},
      " ",
      {t:"Someone can speak standard English with any accent.", flag:false, why:"Accurate. Standard English is about grammar and words, not pronunciation."},
      " ",
      {t:"Because linguists describe, they think any sentence is fine.", flag:true, why:"Inaccurate. Descriptions record exactly what speakers do and do not say, such as *cat the*."}
    ]},
    {id:"e5u1-l1-x6", type:"mcq", q:"Hana hears a coworker say “I seen that film.” She asks whether this is “not English”. What is the best answer?", options:[
      {t:"It is non-standard: it follows a pattern used in some varieties, but standard writing uses *saw*.", ok:true, why:"Right. It is regular and understood, so it is not “not English”. It is a matter of setting."},
      {t:"It is not English, because no native speaker says it.", why:"Many native speakers do say it. It is common in some varieties."},
      {t:"It is perfectly standard, because it is common.", why:"Common does not make it standard. Standard written English uses *saw*."},
      {t:"It is only disputed, like the split infinitive.", why:"Careful writers do not defend *I seen*. It is a clear mark of non-standard English."}
    ]},
    {id:"e5u1-l1-x7", type:"mcq", q:"Which is the best explanation for why some English grammar rules were copied from Latin?", options:[
      {t:"Several 1700s writers saw Latin as the model of a logical language and applied its rules to English.", ok:true, why:"Right. Latin was the language of learning, so its grammar seemed the “right” pattern, even though English is built differently."},
      {t:"English is descended from Latin, so the same rules apply.", why:"English is a Germanic language. It borrowed many Latin words, but its grammar is not Latin’s."},
      {t:"A law passed by parliament in 1700 made English follow Latin.", why:"No such law exists. English has no official body or law that controls its grammar."},
      {t:"Native speakers asked for Latin rules to be added.", why:"The rules came from writers and schools, not from ordinary speakers."}
    ]},
    {id:"e5u1-l1-x8", type:"explain", q:"A learner tells you: “My teacher says *ain’t* is not English, but I hear it in songs all the time.” Explain what is true in both views, using the three kinds of “wrong”.", size:"3–4 sentences", hint:"Is it “not English”, “not standard”, or “disputed”?", model:"The learner is right that *ain’t* is real English: many native speakers say it, and it follows a clear pattern, so it is not “not English”. The teacher is right that it is not standard, so it is a poor choice for an exam essay or a formal email. So the useful label is “non-standard”, which is about the setting, not about whether it makes sense. I would tell the learner that it is fine to understand it and recognize it in songs, but to choose standard forms such as *am not* or *isn’t* in formal writing.", points:["Says that *ain’t* is real English with a clear pattern, not “not English”","Says that it is non-standard, so it is not suitable for formal writing","Explains that “non-standard” is about setting, not about logic","Gives practical advice for when to use or avoid it"]}
   ],
   apply:{
    intro:"Start noticing the difference between describing and prescribing in the English around you. You need nothing but a notebook or a notes app. Keep your notes private unless you choose to share them.",
    tasks:[
     {t:"Collect three “rules” and sort them", how:[
       "Ask two people, or search your memory, for three “rules of English” that someone taught you. Examples: “never start a sentence with *because*”, “always use *whom* after a preposition”.",
       "For each rule, write who taught it to you and when.",
       "Label each one: a pattern speakers always follow, a standard-English convention, or a disputed style opinion. Write one reason for each label."
     ], write:"Rule 1… taught by… my label and reason… Rule 2… Rule 3…"},
     {t:"Find a descriptive sentence and a prescriptive sentence", how:[
       "Open any news site, blog or learner website that discusses English usage. Find one sentence that says what people *do* and one that says what people *should* do.",
       "Copy both sentences in your own words.",
       "Next to each, write how you could check the claim, or who decided it."
     ], write:"Descriptive: … how to check it… Prescriptive: … who decided it…"},
     {t:"Notice your own variety", how:[
       "Listen to a podcast, video or conversation for five minutes. Write down two things a speaker said that a teacher might call “not standard”.",
       "For each, say whether it follows a pattern and whether you would use it in an essay."
     ], write:"Example 1… pattern… essay or not… Example 2…"}
    ],
    proof:"A list of three “rules” you were taught, each labeled with a reason. A pair of sentences, one descriptive and one prescriptive. Two non-standard examples that you noticed in real speech."
   },
   read:[
    {book:"eling", where:"The opening chapter on what linguistics is: the part on descriptive and prescriptive rules", note:"A short, clear explanation of the same distinction from a linguist’s point of view."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u1-l2", title:"How dictionaries and corpora decide", minutes:55,
   hook:{q:"In his 1755 dictionary, Samuel Johnson defined the word lexicographer, meaning the person who writes dictionaries. How did he describe the job?", options:["A judge who decides which words are allowed","A master of grammar and correct speech","A writer of dictionaries; a harmless drudge","A teacher who protects the language from change"], answer:2, reveal:"**“A writer of dictionaries; a harmless drudge.”** Johnson made a joke at his own expense. He saw the job as hard, patient work, not as the work of a judge. In his preface he also admitted that trying to fix a language for ever was like trying to “lash the wind”. Most modern dictionary editors agree with him. This lesson shows what they actually do, and how huge collections of real text now help them."},
   goals:[
     "Explain what a lexicographer does and why a dictionary describes rather than commands",
     "Explain what a corpus is and what it can and cannot tell you",
     "Read a short concordance and compare how often two forms are used",
     "Use a dictionary’s labels and usage notes, plus corpus evidence, to settle a usage question"
   ],
   learn:[
    {h:"A dictionary is a report, not a law", body:[
      {lead:"When a word is in the dictionary, that does not mean the dictionary approves of it. It means people use it."},
      "A person who writes or edits dictionaries is a **[[lexicographer]]**. The lexicographer’s main job is to collect evidence. Which words do people use? What do those words mean? In what kind of text do they appear? Then the lexicographer writes entries that sum up the evidence.",
      "This is the descriptive approach from Lesson 1, applied to words. The big dictionary projects work this way. The *Oxford English Dictionary* (OED) is a historical dictionary. It shows how each word and meaning has changed over time, with dated quotations. Its first full edition was finished in 1928. Volunteers all over the world helped by sending in quotations from their reading.",
      "Dictionaries also differ by purpose. A *general* dictionary tries to cover the whole language for native speakers. A *learner’s* dictionary is written for people who learn English as another language. It uses simpler definitions, gives many example sentences, and often shows the grammar of a word, such as whether a noun is countable. Learner’s dictionaries from Cambridge, Oxford and Collins are free online, and some show both British and American pronunciation.",
      {tip:"If you are learning English, a learner’s dictionary is usually the best first choice. Its definitions often use a limited list of simple words."}
    ]},
    {h:"From paper slips to corpora", body:[
      "For centuries, editors collected examples by hand, on paper slips. Today they also use a **corpus**. A [[corpus-language|corpus]] (plural: *corpora*) is a large collection of real texts that has been stored on a computer so that you can search it. The texts can be news, novels, speeches, blogs, textbooks or recordings of conversation that have been written out.",
      "Here are three well-known examples:",
      {list:["The **Brown Corpus**, built in the 1960s from American English texts printed in 1961. It has about one million words. It was one of the first computer corpora, and today it is tiny.","The **British National Corpus** (BNC), which has about 100 million words of British English collected in the early 1990s, written and spoken.","The **Corpus of Contemporary American English** (COCA), which has about a billion words from several kinds of text, and is free to use after you register."]},
      "In 1987 the publisher Collins released the first edition of the *COBUILD* dictionary. It was one of the first dictionaries for learners written from a corpus. The idea was simple. Instead of guessing what learners need, look at what real speakers and writers do, and show that.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e5a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><rect class="d-sage" x="40" y="8" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="31" text-anchor="middle">Real texts</text><text class="s" x="170" y="49" text-anchor="middle">news, books, blogs, speech</text><path class="d-ink" d="M170 62V84" stroke-width="2" marker-end="url(#e5a2)"/><rect class="d-lup" x="40" y="88" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="111" text-anchor="middle">Corpus</text><text class="s" x="170" y="129" text-anchor="middle">stored and searchable</text><path class="d-ink" d="M170 142V164" stroke-width="2" marker-end="url(#e5a2)"/><rect class="d-gold" x="40" y="168" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="191" text-anchor="middle">Lexicographer</text><text class="s" x="170" y="209" text-anchor="middle">reads lines, counts, decides</text><path class="d-ink" d="M170 222V244" stroke-width="2" marker-end="url(#e5a2)"/><rect class="d-rose" x="40" y="248" width="260" height="52" rx="8" stroke-width="2"/><text x="170" y="271" text-anchor="middle">Dictionary entry</text><text class="s" x="170" y="289" text-anchor="middle">meanings, labels, examples, notes</text><text class="s" x="170" y="322" text-anchor="middle">Judgment is still needed at every step.</text></svg>', alt:"Four boxes joined by downward arrows. Real texts such as news, books, blogs and speech lead to a corpus that is stored and searchable. A lexicographer reads lines, counts and decides. The result is a dictionary entry with meanings, labels, examples and notes.", cap:"How evidence becomes an entry. A corpus supplies evidence, but a person decides what it means."}
    ]},
    {h:"Reading a concordance", body:[
      "The most useful corpus tool is the **[[concordance]]**. It shows every example of a word, each on its own line, with the word in the middle and a little of its context on each side. Because the word is lined up in the middle, your eye quickly sees patterns on the left and right.",
      "The lines below are **invented for practice**, in the style of a corpus search for *data*. In a real search you would have thousands of lines.",
      {table:[["Left context","Word","Right context"],["In our study, the","data","are consistent across all three sites."],["I think the","data","is still on my old laptop."],["The","data","was collected in 2019 by a student."],["These","data","were checked twice before we published."],["All the","data","is backed up every night."],["Her","data","show a clear drop in noise."],["Most of the","data","is public, and anyone can download it."],["The","data","were not normally distributed."],["Where is the","data","from the last test?"],["No","data","has been lost."]]},
      "Look at the verb that goes with the word. Six lines treat *data* as singular (*is, was, has*). Four treat it as plural (*are, were, show*). So in this small sample, singular use is more common (6 of 10, or 60%). Notice also *where* each form appears. The plural lines sound like research reports. A real corpus lets you split the results by type of text, such as news, academic writing and speech.",
      {warn:"Ten lines are far too few to draw a conclusion about English. A real search needs hundreds of lines at least. Always ask: how many examples? From what kinds of text?"},
      "In real corpora, *data* is a good example of a form that is changing. Many writers use it as a singular, as in everyday speech. Some academic writers and style guides still prefer the plural. The right choice depends on your field and your readers, so check the guide you are asked to follow."
    ]},
    {h:"Counting: frequency and its limits", body:[
      "A corpus lets you count. To compare two corpora of different sizes, use a rate: the number of times a word appears **per million words**. If *whom* appears 120 times in a corpus of 4 million words, the rate is 120 ÷ 4 = 30 per million.",
      "Counting is powerful, but it has limits. Keep these four in mind:",
      {list:["**Frequent does not mean correct.** A spelling mistake, for example, can be very common.","**Rare does not mean wrong.** Some good words are rare, and a short corpus may miss them.","**The corpus must match your question.** A news corpus tells you little about a text message.","**A number needs a person.** The corpus shows what is *there*. Whether it suits your reader is a judgment."]},
      "Think of a corpus as a very large pile of evidence. A good lexicographer reads the lines, checks the sources, and compares several kinds of text before writing a word down."
    ]},
    {h:"Reading a dictionary entry well", body:[
      "A good entry holds more than a definition. Here are the parts that help you most with usage questions:",
      {table:[["Part","What it tells you"],["Headword and part of speech","The word, and whether it is a noun, verb, adjective and so on."],["Pronunciation","How to say it. Many learner’s dictionaries give both a British and an American form."],["Definitions","The meanings, usually with the most common meaning first in a learner’s dictionary."],["Examples","Real or realistic sentences that show the word in use."],["Register labels","Tags such as *formal*, *informal*, *slang*, *dated*, *offensive* or *nonstandard*."],["Usage note","A short comment on a debated or tricky use."]]},
      "Labels are the key to Lesson 1’s three kinds of “wrong”. A word with the label *nonstandard* is kind 2. A usage note that says “some people object, but it is widely used” signals kind 3.",
      {ex:"A learner reads that *irregardless* is in the dictionary and decides it must be correct. In many dictionaries the entry carries a label such as *nonstandard* and a note that many readers object to it. So the entry tells the learner two things: the word exists and people use it, and it is risky in careful writing. The dictionary describes the word. The label advises the learner.", label:"Worked example: reading an entry"},
      "Dictionary makers have been attacked for being too descriptive. In 1961 *Webster’s Third New International Dictionary* was widely criticized in the press as too permissive. It had dropped some of the labels that earlier editions used. The argument shows how many people still expect a dictionary to be a judge. The editors’ answer was that their job was to report what speakers do.",
      "Some dictionaries also have separate **usage guides**. For example, *Merriam-Webster’s Dictionary of English Usage* (first published in 1989) studies hundreds of disputed points with evidence from real text. Many of its conclusions are in Lesson 3."
    ]},
    {h:"A method for settling a usage question", body:[
      "Use this five-step method when you doubt a form:",
      {ol:["Look it up in a learner’s dictionary. Read the labels and any usage note.","Search a corpus. Read at least 30 lines, and note what kinds of text they come from.","Decide which setting your own text belongs to: an essay, a message, a talk, a report.","Check what your reader, style guide or teacher requires.","Choose, and be consistent."]},
      "The method turns an argument (“you can’t say that!”) into a short piece of research. It also helps you teach, because you can show students where your answer comes from.",
      {terms:["lexicographer","usage-note","frequency-per-million"]}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["If a word is in the dictionary, it is correct.","It means people use it. Check the label and the usage note."],["The dictionary decides what words mean.","Editors report what people mean. Meanings change, and so do entries."],["The most common form is always the best.","Common shows what people do. The best form depends on your reader and setting."],["A corpus gives a final answer.","It gives evidence. You still decide what suits your text."],["English dictionaries are all the same.","They differ in purpose, size, labels, and in US or UK spelling and pronunciation."]]}
    ]}
   ],
   try:[
    {id:"e5u1-l2-x1", type:"mcq", q:"Daniel finds the word *ain’t* in a dictionary. What can he conclude?", options:[
      {t:"The word is used by many speakers. The label and note will show how the editors view its status.", ok:true, why:"Right. Entry means use. The label (such as *nonstandard*) and the usage note tell him about status and setting."},
      {t:"The dictionary says that *ain’t* is correct in all writing.", why:"A dictionary entry is not a permission. Many dictionaries mark *ain’t* as informal or nonstandard."},
      {t:"The dictionary is making a mistake, because *ain’t* is not English.", why:"*Ain’t* is widely used in several varieties. A dictionary is right to list it."},
      {t:"He should use it in his essay because it is in the dictionary.", why:"Being listed and being suitable for an essay are two different things. Labels are there to help him choose."}
    ]},
    {id:"e5u1-l2-x2", type:"sort", q:"Can a corpus search alone answer each question, or is a human judgment also needed?", buckets:["A corpus can show this","A corpus cannot answer this alone"], items:[
      {t:"How many times per million words does *whom* appear in news writing?", b:0, why:"This is a count, and counting is what a corpus does well."},
      {t:"Which words most often appear right before *research*?", b:0, why:"A concordance or collocate list shows this directly."},
      {t:"Should a student use *whom* in a job application letter?", b:1, why:"The corpus shows what people write. Whether it suits this reader is a judgment about setting."},
      {t:"Is *data* used as a plural more often in academic journals than in blogs?", b:0, why:"If the corpus has both kinds of text, you can compare them."},
      {t:"Is a double negative “illogical”?", b:1, why:"“Logical” is not something a count can measure. A corpus can show how often double negatives appear and in which varieties, but the judgment needs more than numbers."},
      {t:"What do the words around *heavy* tell you about its meanings?", b:0, why:"Concordance lines show the contexts, such as *heavy rain* or *heavy smoker*."}
    ]},
    {id:"e5u1-l2-x3", type:"match", q:"Match each part of a dictionary entry to what it does for you.", pairs:[
      ["Register label (*informal*)","Tells you the setting where the word fits","Helps you avoid using a casual word in formal writing."],
      ["Example sentence","Shows the word in a natural context","Shows what words it goes with."],
      ["Usage note","Comments on a debated or tricky use","Often reports the evidence about a disputed form."],
      ["Part of speech","Says whether the word is a noun, verb or adjective","This tells you how the word works in a sentence."],
      ["Pronunciation","Shows how to say the word","Learner’s dictionaries often give British and American forms."]
    ]},
    {id:"e5u1-l2-x4", type:"order", q:"Put the steps of the usage-question method in order.", items:[
      {t:"Look the word up in a learner’s dictionary and read the labels and notes", why:"Start with the quickest, most reliable summary of the evidence."},
      {t:"Search a corpus and read at least 30 lines", why:"The corpus gives you more detail and shows the contexts."},
      {t:"Decide which setting your own text belongs to", why:"Now you can ask whether the evidence matches your situation."},
      {t:"Check what your reader or style guide requires", why:"Sometimes a house style overrides general usage."},
      {t:"Choose, and be consistent", why:"A clear choice, used the same way throughout, reads best."}
    ]},
    {id:"e5u1-l2-x5", type:"number", q:"In an invented corpus of 4,000,000 words, the word *whom* appears 120 times. How many times does it appear per million words?", answer:30, tol:0, unit:"per million words", why:"Divide the number of examples by the size of the corpus in millions: 120 ÷ 4 = 30 per million words. Using a rate lets you compare corpora of different sizes.", wrongs:[
      {v:120, tol:0, why:"This is the raw count. It is not a rate, so it cannot be compared with a corpus of a different size."},
      {v:480, tol:0, why:"You multiplied 120 by 4. To get a rate per million, you divide by the number of millions."},
      {v:3, tol:0, why:"You may have divided by 40, or moved the decimal point. 4,000,000 words is 4 million, so divide 120 by 4."}
    ]},
    {id:"e5u1-l2-x6", type:"spot", q:"Mei wrote these notes about corpora. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"A corpus is a large collection of real texts that you can search on a computer.", flag:false, why:"Accurate. That is the basic definition."},
      " ",
      {t:"If a word is in the dictionary, the dictionary says everyone must use it.", flag:true, why:"Inaccurate. A dictionary lists words that people use. Its labels help you decide where to use them."},
      " ",
      {t:"A concordance shows each example of a word with the words around it.", flag:false, why:"Accurate. This is why patterns are easy to see."},
      " ",
      {t:"A form that appears only rarely in the corpus must be a mistake.", flag:true, why:"Misleading. Rare forms can be perfectly good, and a small corpus can miss them."},
      " ",
      {t:"It is more helpful to compare rates per million words than raw counts when corpora differ in size.", flag:false, why:"Accurate. A rate puts different corpora on the same scale."},
      " ",
      {t:"Dictionary entries never change once they are written.", flag:true, why:"Inaccurate. Editors revise entries as evidence changes, and they add new words and meanings."}
    ]},
    {id:"e5u1-l2-x7", type:"mcq", q:"Mei compares two small invented corpora. In journal articles she finds *conduct research* 41 times, *do research* 6 times and *make research* 0 times. In blog posts she finds *do research* 80 times and *conduct research* 9 times. What is the best conclusion?", options:[
      {t:"*Conduct research* is the usual choice in journals, while *do research* is more common in blogs, so the best choice depends on the setting.", ok:true, why:"Right. The same question gives different answers in different kinds of text, which is why you should match the corpus to your own text."},
      {t:"*Do research* is wrong, because it is rare in journals.", why:"It is common in blogs, which suggests it is normal in a more relaxed setting. Rare in one setting does not mean wrong."},
      {t:"Only the biggest number counts, so *do research* is the best choice everywhere.", why:"Different corpora show different things. A count from blogs does not decide what a journal reader expects."},
      {t:"*Make research* must be correct, because it appears zero times in one corpus.", why:"Zero examples in one small corpus tells you nothing positive about the phrase."}
    ]},
    {id:"e5u1-l2-x8", type:"explain", q:"A friend says: “*Irregardless* is in the dictionary, so it’s correct to use in my report.” Explain what a dictionary entry does and does not show, and what you would suggest.", size:"3–4 sentences", hint:"Think about labels and usage notes.", model:"A dictionary entry shows that a word is used by real speakers, but it does not mean the word is right for every setting. Many dictionaries list *irregardless* with a label such as *nonstandard* and a usage note that some readers object to it. That label is advice about status. For a report I would suggest *regardless*, which no one will question. The dictionary has described the word. The label helps the writer decide.", points:["Says that a dictionary entry shows use, not approval","Mentions the label or usage note as the key advice","Recommends a safer form for a formal report","Explains that the dictionary describes while the writer chooses"]}
   ],
   apply:{
    intro:"Try the evidence method on a real question. Everything here is free. The English-corpora.org site needs you to register for COCA, and free accounts may have daily search limits, so check the site’s current terms.",
    tasks:[
     {t:"Read a dictionary entry closely", how:[
       "Open a free online dictionary, such as the Cambridge Dictionary, the Oxford Learner’s Dictionaries or Merriam-Webster.",
       "Look up three words: one formal (such as *whereas*), one informal (such as *gonna*) and one debated (such as *irregardless*).",
       "For each word, write the label and the usage note if there is one, and copy one example sentence."
     ], write:"Word 1… label… note… example… Word 2… Word 3…"},
     {t:"Run a corpus check", how:[
       "Register for free at english-corpora.org and open the Corpus of Contemporary American English (COCA).",
       "Search for a pair such as *data is* and *data are*. Look at the frequency numbers, and at the breakdown by type of text (spoken, fiction, news, academic).",
       "Read at least 20 example lines for each form.",
       "Write what you found: which is more common overall, and where each one is used."
     ], write:"Pair… overall result… by text type… my conclusion and one limit of this evidence…"},
     {t:"Settle a doubt of your own", how:[
       "Think of one English usage question that you or a friend have had (a word choice, a preposition, a plural).",
       "Use the five-step method from the lesson: learner’s dictionary, corpus, your setting, your reader, your choice.",
       "Write your decision in one sentence, with the reason."
     ], write:"The question… dictionary said… corpus showed… my setting… my choice…"}
    ],
    proof:"Notes on three dictionary entries with their labels. A short corpus comparison that names the form that is more common and the kinds of text where it appears. One usage question settled with evidence."
   },
   read:[
    {book:"eling", where:"Background reading: the opening chapter on what linguistics is, and its section on how linguists collect data about language", note:"The book does not teach corpora in detail. This is background on why linguists use evidence."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u1-l3", title:"Five famous myths, with the evidence", minutes:60,
   hook:{q:"“Never start a sentence with And.” In the King James Bible of 1611, how does the verse where God first speaks (Genesis 1:3) begin?", options:["“Let there be light”","“And God said, Let there be light”","“God said, Let there be light”","“Then God said, Let there be light”"], answer:1, reveal:"**“And God said, Let there be light.”** The verse is Genesis 1:3. Many sentences in that translation start with *And*. The “rule” against it is a teaching shortcut for children, not a law of English. In this lesson you will test five famous rules against the evidence: where each came from, what good writers do, and what a careful person can safely say."},
   goals:[
     "Test five famous “rules” (split infinitives, stranded prepositions, And and But at the start, singular they, double negatives) against historical and usage evidence",
     "Explain where each rule came from",
     "Give safe, practical advice for each, including when a house style or teacher still requires the “rule”",
     "Explain a myth to someone kindly, without making them feel foolish"
   ],
   learn:[
    {h:"How to test a “rule”", body:[
      {lead:"A myth, in this unit, is a rule that is taught as a law of English but that the evidence does not support."},
      "For each rule, ask four questions. Where did it come from? What do good writers actually do? What do major usage guides and corpora show? What is the safe advice for a real writer?",
      "The answers also use Lesson 1’s three kinds of “wrong”. Remember: *not English*, *not standard*, or *only disputed*. You will see that most famous rules are in the third group, and one is in the second.",
      {fig:'<svg viewBox="0 0 340 296"><rect class="d-lup" x="8" y="6" width="324" height="2" stroke-width="0"/><path class="d-ink" d="M62 18V262" stroke-width="2"/><circle class="d-sage" cx="62" cy="30" r="7" stroke-width="2"/><text x="52" y="35" text-anchor="end">1300s</text><text x="78" y="28">Singular they is in use;</text><text class="s" x="78" y="46">split infinitives also appear in the Middle Ages</text><circle class="d-gold" cx="62" cy="86" r="7" stroke-width="2"/><text x="52" y="91" text-anchor="end">1672</text><text x="78" y="84">Dryden objects to a</text><text class="s" x="78" y="102">preposition at the end</text><circle class="d-gold" cx="62" cy="142" r="7" stroke-width="2"/><text x="52" y="147" text-anchor="end">1762</text><text x="78" y="140">Lowth’s grammar: two</text><text class="s" x="78" y="158">negatives “cancel”; prefers a</text><text class="s" x="78" y="174">preposition before its word</text><circle class="d-gold" cx="62" cy="206" r="7" stroke-width="2"/><text x="52" y="211" text-anchor="end">1864</text><text x="78" y="204">Alford objects to the</text><text class="s" x="78" y="222">split infinitive</text><circle class="d-rose" cx="62" cy="262" r="7" stroke-width="2"/><text x="52" y="267" text-anchor="end">Today</text><text x="78" y="260">Corpora and usage guides</text><text class="s" x="78" y="278">test every one of these rules</text></svg>', alt:"A vertical timeline with five points. 1300s: singular they is in use, and split infinitives also appear in the Middle Ages. 1672: the poet Dryden objects to a preposition at the end of a clause. 1762: Lowth’s grammar says two negatives cancel and prefers a preposition before its word. 1864: Henry Alford objects to the split infinitive. Today: corpora and usage guides test these rules.", cap:"The objections are all younger than the usages they criticize."}
    ]},
    {h:"Myth 1: “Never split an infinitive”", body:[
      "An **[[infinitive]]** is the basic form of a verb, often with *to* in front: *to go, to finish, to understand*. A **split infinitive** puts a word, usually an adverb, between *to* and the verb: *to boldly go*, *to quickly finish*.",
      "**Where it came from.** The objection appeared in the 1800s. The writer Henry Alford objected to the split infinitive in his 1864 book *A Plea for the Queen’s English*, and others repeated the idea. People often explain the rule with Latin: there the infinitive is one word (*amare*, “to love”), so it cannot be split. Historians find little evidence that early critics used this argument, so treat it as a popular story. English infinitives are two words, and English speakers had split them for centuries before the 1800s.",
      "**What the evidence shows.** Split infinitives appear in English writing from the Middle Ages, and many respected writers have used them. Today they are normal in speech and in print. Sometimes the “fix” is worse. In *She decided to gradually change the plan*, moving the adverb gives *She decided gradually to change the plan* (did she decide gradually?), or *She decided to change the plan gradually* (a different stress). The famous opening of the 1960s TV series *Star Trek*, “to boldly go where no man has gone before”, is probably the best-known split infinitive in the language.",
      {ex:"Mariya studies English interpreting and is careful, and sometimes nervous, when she speaks English. At school she learned “never split an infinitive”. When she practices interpreting a speech, she sometimes stops in the middle of a sentence to find another way to say *to fully understand*. The stop costs her more than the “mistake” would. Her teacher says: “Say it the natural way. A split infinitive will not hurt your meaning, but a long pause can.” (Kind 3: only disputed.)", label:"Worked example: the nervous interpreter"},
      {tip:"Safe advice: split an infinitive when it sounds natural and clear. Avoid it only if a teacher, editor or house style asks, or if the split is very long and hard to follow."}
    ]},
    {h:"Myth 2: “Never end a sentence with a preposition”", body:[
      "A **[[preposition]]** is a short word such as *to, with, for, about, from* that shows a relationship. It usually comes before a noun: *with a friend*. When the noun moves to the front, the preposition can stay behind: *Who did you talk to?* Linguists call this **preposition stranding**.",
      "**Where it came from.** The poet John Dryden objected to a stranded preposition in 1672. His was not the very first objection, but it is the best known, and it made the idea popular. The word *preposition* itself comes from Latin and means “placed before”, and in Latin a preposition must come before its noun. When Robert Lowth wrote his grammar in 1762, he admitted that stranding is natural in conversation and informal writing. He said only that putting the preposition first is more graceful and suits a formal style. Later writers hardened that preference into a rule.",
      "**What the evidence shows.** Stranded prepositions are common in the speech and writing of educated people. Sometimes you cannot avoid them: *What are you looking at?* and *Which chair did he sit on?* sound natural, while *At what are you looking?* sounds stiff. A well-known joke has someone answer a correction with “That is something up with which I will not put.” The story is usually told about Winston Churchill, although historians doubt that he said it.",
      {tip:"Safe advice: put the preposition where the sentence sounds natural. In a very formal text, you may prefer *about which we spoke*, but do not do it when it makes the sentence stiff or odd."}
    ]},
    {h:"Myth 3: “Never start a sentence with And or But”", body:[
      "*And* and *but* are [[coordinating-conjunction|coordinating conjunctions]]: words that join ideas of equal weight. The rule says they may only join parts *inside* a sentence.",
      "**Where it came from.** Children often overuse *and* and *but*, and they write *And then we went home. And then we ate.* The rule most likely began as a simple teaching shortcut: do not start with them. Over time many people forgot that it was only a shortcut.",
      "**What the evidence shows.** Writers have started sentences this way for centuries. The King James Bible has many examples, including Genesis 1:3 (see the hook). The *Chicago Manual of Style*, a major American style guide, says that starting a sentence with *and* or *but* is acceptable. Good writers use *But* to show contrast quickly and *And* to add one more thing. A passage in which every sentence starts that way would sound repetitive, but that is a problem of style, not of grammar.",
      {tip:"Safe advice: it is fine in most writing. If a teacher forbids it, replace *But* with *However* or *Yet*, and *And* with *In addition*."}
    ]},
    {h:"Myth 4: “Singular they is new and wrong”", body:[
      "**Singular they** means using *they, them, their* for one person: *Someone left their umbrella. I hope they come back for it.* You use it when you do not know the person’s gender, when it does not matter, or when the person uses *they*.",
      "**Where the myth came from.** Some grammarians of the 1700s and 1800s said that *he* should stand for any person, and that *they* must be plural. People then taught this as if it were the only correct form.",
      "**What the evidence shows.** Singular *they* has been used in English since at least the 1300s. Shakespeare, Jane Austen and many other major writers used it. It is also quite ordinary in speech today. A good comparison is *you*. *You* was once only plural, with *thou* for one person. Over time *you* took over both jobs. In standard English we say *you are*, even for one person. In the same way, *they are* works for one person.",
      "Today, major style guides accept it. The American Psychological Association’s *Publication Manual* (7th edition) approves singular *they*. The American Dialect Society chose *they* as its word of the year for 2015, for its use as a singular pronoun for a person whose gender is unknown or not binary. In 2019, Merriam-Webster named *they* its word of the year.",
      {tip:"Safe advice: use singular *they* for people who use it, and use it as a normal, natural choice for a person of unknown gender. Respect the pronouns people ask you to use."}
    ]},
    {h:"Myth 5: “Double negatives are illogical”", body:[
      "A **double negative** uses two negative words in one clause: *I don’t want nothing*. The myth says that, just as in math two negatives make a positive, the sentence must really mean *I want something*.",
      "**Where it came from.** In 1762 Robert Lowth wrote that in English two negatives cancel each other. That sounds logical, but language is not arithmetic. Nobody who hears *I ain’t got no money* thinks the speaker is rich.",
      "**What the evidence shows.** Using more than one negative word to say one negative idea is called [[negative-concord]], and it is very common in the world’s languages. Spanish says *No vi a nadie* (“I did not see nobody”), and Italian says *Non ho visto nessuno* (the same). English did the same: in Chaucer’s *Canterbury Tales* (late 1300s), the Knight “nevere yet no vileynye ne sayde / In al his lyf unto no maner wight”. That is four negatives and a single meaning: he never said anything rude to anyone. Many varieties of English still use negative concord today, with perfectly regular rules.",
      "So where does the *standard* rule come from? Standard written English uses only one negative per clause, so *I don’t want nothing* is **non-standard** (kind 2). It is not “illogical” or “not English”.",
      {warn:"Some double negatives really do cancel, as a deliberate effect. *It’s not uncommon* means *It’s fairly common*. Saying something by denying its opposite like this is called litotes. *I can’t not laugh* (“I have to laugh”) is another deliberate double negative. Both are different from negative concord."}
    ]},
    {h:"The five at a glance", body:[
      {table:[["“Rule”","What the evidence shows","Kind of “wrong”"],["Never split an infinitive","Used for centuries; good writers use it","3. Only disputed"],["Never end with a preposition","Natural and common; a Latin-based preference","3. Only disputed"],["Never start with And or But","Used for centuries, including in the Bible","3. Only disputed"],["Singular they is new and wrong","In use since at least the 1300s; accepted by major guides","3. Only disputed, mostly settled"],["Double negatives are illogical","Common in many languages and varieties; not standard in writing","2. Not standard (but not illogical)"]]},
      "Notice what these have in common. Each one was repeated for generations, and none had much to do with whether the sentence is clear."
    ]},
    {h:"Why myths survive, and how to answer them kindly", body:[
      "Myths survive because people learn them young and from people they respect. They are short and easy to remember, and correcting others can feel like a sign of education. Often the person correcting you is trying to help.",
      "When you meet a myth, try these three steps. First, **acknowledge** the good intention: “I see why you learned that.” Second, **give one piece of evidence**: “The Bible and many good writers do it.” Third, **offer a practical rule**: “In your exam, follow your teacher’s style. Elsewhere, do what is clear.”",
      {warn:"Do not swing to the other extreme. “It’s a myth” does not mean “do whatever you like”. An editor, a teacher or a company may have a house style that avoids these forms, and a good writer follows it (Lesson 4)."},
      {terms:["infinitive","split-infinitive","preposition","preposition-stranding","singular-they","negative-concord"]}
    ]}
   ],
   try:[
    {id:"e5u1-l3-x1", type:"match", q:"Match each famous “rule” to where it came from.", pairs:[
      ["Never split an infinitive","1800s critics such as Alford (1864); often linked to Latin, though the evidence for that is weak","English infinitives are two words and were split long before."],
      ["Never end with a preposition","Latin prepositions come first, and Dryden (1672) objected to the stranded form","Lowth (1762) admitted that stranding is natural in speech."],
      ["Never start with And or But","A school shortcut for children who overused them","Good writers, and the King James Bible, have done it for centuries."],
      ["Singular they is new","Some 1700s and 1800s grammarians said *he* should stand for everyone","In fact it has been used since at least the 1300s."],
      ["Double negatives cancel","Lowth (1762) wrote that two negatives destroy each other","Many languages use negative concord, and English did too."]
    ]},
    {id:"e5u1-l3-x2", type:"sort", q:"Is each sentence fine in standard English, or not standard?", buckets:["Fine in standard English","Not standard"], items:[
      {t:"*She wants to boldly go where no one has gone before.*", b:0, why:"A split infinitive. Standard English allows it."},
      {t:"*Which team are you on?*", b:0, why:"A stranded preposition. It is the natural form."},
      {t:"*But nobody came.*", b:0, why:"Starting with *But* is fine in standard writing."},
      {t:"*Everyone should bring their own lunch.*", b:0, why:"Singular *they* is accepted in standard English."},
      {t:"*I haven’t seen nothing.*", b:1, why:"Negative concord is regular but not used in standard written English."},
      {t:"*We was late again.*", b:1, why:"A regular pattern in several varieties, but standard English uses *were*."},
      {t:"*Him and me goes there.*", b:1, why:"Non-standard in both the pronouns and the verb form."}
    ]},
    {id:"e5u1-l3-x3", type:"mcq", q:"Mariya says: “My school taught me never to split an infinitive. Now I stop to fix my sentences when I interpret. Is it really wrong?” What is the best reply?", options:[
      {t:"No. Split infinitives are normal English. Sometimes avoiding one makes a sentence worse. Follow a teacher’s house style only when asked.", ok:true, why:"Right. This gives evidence, a reassurance and practical advice. It is also kind to a nervous speaker."},
      {t:"Yes, it is wrong in all English, and you should never use one.", why:"This repeats the myth. Good writers have used split infinitives for centuries."},
      {t:"It is wrong in speech but fine in writing.", why:"It is fine in both. The rule was not about speech or writing."},
      {t:"It was only wrong before the year 1900.", why:"There was no “before and after”. Split infinitives were used both before and after the 1800s, and the objection came from a few writers."}
    ]},
    {id:"e5u1-l3-x4", type:"order", q:"Put these events in time order, earliest first.", items:[
      {t:"Singular *they* is in use in English writing", why:"From at least the 1300s."},
      {t:"John Dryden objects to a stranded preposition", why:"1672."},
      {t:"Robert Lowth’s grammar says two negatives cancel", why:"1762."},
      {t:"Henry Alford objects to the split infinitive in *A Plea for the Queen’s English*", why:"1864."},
      {t:"The American Dialect Society names *they* its word of the year", why:"For 2015."}
    ]},
    {id:"e5u1-l3-x5", type:"spot", q:"Tomás wrote this summary for his study group. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Split infinitives have appeared in English writing since the Middle Ages.", flag:false, why:"Accurate. The objection came much later."},
      " ",
      {t:"The rule against them exists because English infinitives are one word, as in Latin.", flag:true, why:"Inaccurate. Latin infinitives are one word, and that is why they cannot be split. English infinitives are two words."},
      " ",
      {t:"The *Chicago Manual of Style* says that starting a sentence with *and* or *but* is acceptable.", flag:false, why:"Accurate."},
      " ",
      {t:"Singular *they* was invented in the 21st century.", flag:true, why:"Inaccurate. It has been used since at least the 1300s."},
      " ",
      {t:"Chaucer’s English used several negatives in one clause to make a single negative meaning.", flag:false, why:"Accurate. Negative concord was normal in his English."},
      " ",
      {t:"Double negatives are always illogical, because in math two negatives make a positive.", flag:true, why:"Misleading. Language is not arithmetic. Negative concord is regular in many languages and varieties."}
    ]},
    {id:"e5u1-l3-x6", type:"mcq", q:"Which sentence contains a double negative that really means something positive, as a deliberate effect?", options:[
      {t:"*It isn’t uncommon for trains to be late in winter.*", ok:true, why:"Right. *Not uncommon* means *fairly common*. This effect is called litotes."},
      {t:"*I didn’t see nobody at the door.*", why:"This is negative concord. It still means that the speaker saw no one."},
      {t:"*She doesn’t know nothing about it.*", why:"Also negative concord, and it means she knows nothing."},
      {t:"*We never got no reply.*", why:"Another negative concord sentence. It means no reply came."}
    ]},
    {id:"e5u1-l3-x7", type:"mcq", q:"Lucía writes: “Someone left their bag on the bus. I hope they come back for it.” Her teacher marks *their* and *they* as wrong. What is the best response?", options:[
      {t:"Singular *they* is standard English. It has been used since at least the 1300s and major style guides accept it, but she should follow the teacher’s rule in that class.", ok:true, why:"Right. It states the evidence and respects the setting at the same time."},
      {t:"The teacher is right, because *they* can only be plural.", why:"*They* has had a singular use for centuries, in the same way that *you* is used for one person."},
      {t:"The teacher is wrong, so Lucía should ignore the correction.", why:"The usage is fine, but a teacher’s requirement matters in that class. A calm talk will work better than ignoring it."},
      {t:"Singular *they* is a recent change in language, so it is not yet standard.", why:"It is not recent, and the major guides already accept it."}
    ]},
    {id:"e5u1-l3-x8", type:"explain", q:"A friend says: “You must never end a sentence with a preposition.” Explain why this is a myth, and when it can still make sense to avoid a stranded preposition.", size:"3–5 sentences", hint:"Think about the Latin origin, what Lowth said, and house style.", model:"This rule grew from the Latin model, where a preposition goes before its noun, and from objections by writers such as Dryden (1672). Even Lowth (1762) admitted that stranding is natural in conversation and only said that putting the preposition first is more formal. Today educated speakers use stranded prepositions all the time, and fixing them can make a sentence stiff, as in *At what are you looking?* Still, in a very formal text, or when a teacher or house style asks for it, moving the preposition (*the topic about which we spoke*) is a reasonable choice.", points:["Gives the Latin or early-grammarian origin of the rule","Says that stranding is natural and common in educated English","Gives an example where avoiding it sounds stiff","Says that formal style or a house style can still call for the other order"]}
   ],
   apply:{
    intro:"Test these myths in real text. Everything here is free. COCA needs a free registration at english-corpora.org, and free accounts may have daily search limits.",
    tasks:[
     {t:"Find the myths in real text", how:[
       "Choose a short page from a news article, a novel or a textbook. A page of 300–400 words is enough.",
       "Read it and mark any sentence that starts with *And* or *But*, any split infinitive, and any sentence that ends with a preposition.",
       "Write down two or three examples of each you find. Note the author and the kind of text."
     ], write:"Source… sentences with And/But at the start… split infinitives… stranded prepositions…"},
     {t:"Check singular they in a corpus", how:[
       "Open COCA at english-corpora.org (register for free).",
       "Search for a few short phrases, such as *someone left their*, *everyone has their* or *somebody lost their*.",
       "Read ten lines for each and note what kinds of text they come from (spoken, news, fiction, academic).",
       "Write what you found. Is singular *their* used by educated writers? In which kinds of text?"
     ], write:"Phrases I searched… what I saw… kinds of text… my conclusion…"},
     {t:"Write a kind answer to a myth", how:[
       "Choose one of the five myths. Imagine a classmate or student who believes it.",
       "Write a reply of three or four sentences. Follow the three steps: acknowledge, give one piece of evidence, offer a practical rule.",
       "Read your reply aloud. Does it sound friendly and clear?"
     ], write:"The myth… my reply…"}
    ],
    proof:"A list of real examples of at least two of the five “rules” being broken by published writers. A short note on what COCA shows about singular their. A kind, clear reply to someone who believes one myth."
   },
   read:[
    {book:"eling", where:"Background reading: the opening chapter on what linguistics is, the part on descriptive and prescriptive rules", note:"It explains why linguists test rules against evidence. The five myths in this lesson are not covered in detail there."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u1-l4", title:"Real rules, style choices and house style", minutes:55,
   hook:{q:"In 2017 a US appeals court case about delivery drivers’ overtime pay turned on one tiny thing in a state law. What was it?", options:["A missing serial comma in a list","A spelling mistake in a name","A wrong date","A missing period at the end"], answer:0, reveal:"**A missing serial comma.** A Maine law listed activities that did not earn overtime, and one phrase read “packing for shipment or distribution of” with no comma between the two last items. The drivers argued the law was unclear, and the court agreed with them. The case shows two things. A comma can matter. And many “rules” of writing are really choices that a person or an organization makes."},
   goals:[
     "Separate real grammar rules from conventions and from style or house-style choices",
     "Choose a suitable register (formal, neutral or informal) for an audience",
     "Explain the serial comma and name who uses it",
     "Handle the main US and UK differences, and explain what style guides and house styles are for"
   ],
   learn:[
    {h:"Three layers of “rule”", body:[
      {lead:"When you edit a text, you meet three very different kinds of rule. They need different answers."},
      {fig:'<svg viewBox="0 0 340 272"><rect class="d-rose" x="10" y="8" width="320" height="72" rx="10" stroke-width="2"/><text x="170" y="32" text-anchor="middle">1. Grammar rules of the language</text><text class="s" x="170" y="52" text-anchor="middle">No variety breaks them. Example: the book,</text><text class="s" x="170" y="68" text-anchor="middle">not book the.</text><rect class="d-gold" x="10" y="94" width="320" height="72" rx="10" stroke-width="2"/><text x="170" y="118" text-anchor="middle">2. Conventions</text><text class="s" x="170" y="138" text-anchor="middle">A community or country agrees them.</text><text class="s" x="170" y="154" text-anchor="middle">Example: color (US), colour (UK).</text><rect class="d-sage" x="10" y="180" width="320" height="72" rx="10" stroke-width="2"/><text x="170" y="204" text-anchor="middle">3. Style choices and house style</text><text class="s" x="170" y="224" text-anchor="middle">A writer, school or company picks one form.</text><text class="s" x="170" y="240" text-anchor="middle">Example: serial comma, or no serial comma.</text><text class="s" x="170" y="268" text-anchor="middle">Top: fixed. Bottom: a choice you can change.</text></svg>', alt:"Three stacked boxes. The first, in rose, is grammar rules of the language, which no variety breaks, for example the book and not book the. The second, in gold, is conventions that a community or country agrees, for example color in the US and colour in the UK. The third, in green, is style choices and house style, for example using or not using the serial comma.", cap:"The higher the layer, the less it is a choice."},
      {table:[["Layer","Who decides","If you break it"],["Grammar rule","The language itself: all speakers","Readers cannot understand you, or think you are not a native speaker"],["Convention","A community, country or field","Readers notice, and may think you are careless or from elsewhere"],["Style or house style","A person, school, journal or company","An editor or teacher asks you to change it"]]},
      "Many arguments about English happen because people treat a layer 3 choice as if it were layer 1. “You must use the serial comma” sounds like a grammar law. It is a style choice. Knowing the layer tells you how much to worry."
    ]},
    {h:"Register: the right English for the right place", body:[
      "**[[register]]** is the level of formality of your language. The same message can be said in different registers, and each suits a different situation. Register depends on four things: who your reader is, your relationship, your purpose, and the medium (a message, a talk, a report).",
      {table:[["Register","Example","Where it fits"],["Formal","*I regret to inform you that the class is canceled.*","Letters to officials, reports, formal essays"],["Neutral","*Unfortunately, the class is canceled.*","Most emails, news, textbooks"],["Informal","*Bad news: no class today.*","Messages to friends, chat, casual speech"]]},
      "None of these is better. A friendly text message in formal English sounds cold. A message to a professor you do not know that says *hey, quick q* sounds too casual. Native speakers change register all day, without thinking.",
      "Learners often get one thing wrong: they learned a very formal register from textbooks and use it everywhere. *Dear Sir or Madam, I am writing to inquire* may be fine in a letter, but it sounds odd in a chat with a classmate. The opposite also happens. Slang from videos and songs can be a poor fit in an essay. A learner’s dictionary label such as *informal* or *formal* helps (Lesson 2).",
      {tip:"Contractions such as *don’t* and *it’s* are not wrong in formal writing. Many modern guides allow them. Some teachers, journals and companies prefer to avoid them, so check what your reader expects."},
      {h:"Compared with Japanese"},
      {tip:"This note is optional. Skip it if you prefer."},
      "Japanese builds formality into the grammar: *desu/masu* forms and keigo (honorific speech) change the verb. English has no such system. It changes register mainly through word choice (*ask* or *inquire*), contractions, and sentence length. So the skill is the same, but the tools are different, and many learners find them harder to see."
    ]},
    {h:"The serial comma", body:[
      "The **[[serial-comma]]** (also called the Oxford comma) is the comma before *and* or *or* in a list of three or more: *red, white, and blue*. Without it, you write *red, white and blue*.",
      "Both are standard. The *Chicago Manual of Style* and Oxford University Press style use it. The AP Stylebook, used by many American news organizations, generally leaves it out in simple lists, and uses it when it prevents confusion. So the two choices are a matter of style.",
      "A missing comma can make a list unclear. Compare:",
      {ex:"We thanked our teachers, Kenji and Mei.\n(Are Kenji and Mei the two teachers, or are there two more people?)\nWe thanked our teachers, Kenji, and Mei.\n(Now there are three groups: our teachers, Kenji, and Mei.)", label:"Worked example: when the comma changes the meaning", mono:true},
      "The Maine case in the hook is a real example. The practical rule is simple: **choose one style, use it every time, and add the comma whenever the list could be misread.**"
    ]},
    {h:"US and UK conventions", body:[
      "English has two big written standards, American and British, and they differ in small, regular ways. Many of the American forms were promoted by Noah Webster’s dictionaries in the early 1800s. Neither is more correct. This course uses US spelling and shows UK forms only for comparison.",
      {table:[["Area","American (US)","British (UK)"],["-or / -our","color, honor, neighbor","colour, honour, neighbour"],["-er / -re","center, theater, meter","centre, theatre, metre"],["-se / -ce","defense, offense","defence, offence"],["-ize / -ise","organize, recognize","organise or organize (both are used in the UK)"],["License","license (noun and verb)","licence (noun), license (verb)"],["Program","program","programme (but program for computers)"],["Past forms","learned, burned, gotten","learned or learnt, burned or burnt, got"],["Dates","11/23 means November 23","23/11 means 23 November"],["Quotation marks","“double” first, period and comma inside","often ‘single’ first; punctuation placed by logic"],["Words","apartment, truck, fall","flat, lorry, autumn"]]},
      "There are grammar differences too. In the US, *the team is* is the usual form. In the UK, *the team are* is also common, because the group is seen as people. In the US you can say *on the weekend*, in the UK *at the weekend*. And Americans use *gotten* as a past participle (*I’ve gotten better*), while British speakers use *got*.",
      {warn:"Dates are a real trap. In a form, 06/07/2025 means June 7 in the US and 6 July in the UK. A safe format is the international one: 2025-07-06, or a written month, such as 6 July 2025."},
      "Safe advice: pick one variety for each text and keep it. Set your spell-checker to match, and do not mix *color* and *colour* in the same document. If you write for a particular readership (for example, a UK journal), use their variety."
    ]},
    {h:"Style guides and house style", body:[
      "A **[[style-guide]]** is a book or website that makes writing choices for a group of writers: spelling, punctuation, capital letters, numbers, citations, and sometimes word choice and inclusive language. A **[[house-style]]** is one organization’s own set of choices, often a short document called a style sheet. Both exist for **consistency**: readers trust a text more when it does not change its habits.",
      {table:[["Guide","Often used for"],["*Chicago Manual of Style*","Book publishing, history and many humanities subjects"],["APA Publication Manual","Psychology, education and many social sciences"],["MLA Handbook","Language and literature"],["AP Stylebook","News writing in the US"],["*New Hart’s Rules*","Publishing in the UK"]]},
      "Different guides disagree, and that is not a problem. They answer different needs. The golden rule is: **follow the guide that applies to your reader.** If your teacher, journal or employer names a style, it beats your own taste and beats general usage.",
      {ex:"A company style sheet says: UK spelling, no serial comma, *email* with no hyphen, numbers under ten written as words. Ana, a new writer there, sends a draft with *color*, *a, b, and c* and *e-mail*. Her editor does not say the draft is bad English. It is simply not in the house style, so Ana changes three things and learns the sheet.", label:"Worked example: house style at work"},
      "Style guides are updated from time to time, as usage changes, so check you are using the current edition. And if you write often, keep your own short style sheet, as in the Apply tasks."
    ]},
    {h:"Where careful writers still disagree", body:[
      "Some questions have no clear winner. A good writer knows they are open, and chooses with the reader in mind.",
      {list:["***Who* or *whom*?** In speech, *whom* is now rare, and *Who did you see?* is normal. In formal writing, many readers still expect *whom* after a preposition: *to whom, with whom*.","***Less* or *fewer*?** Traditional guides say *fewer* for things you can count (*fewer cars*) and *less* for amounts (*less traffic*). In everyday speech, *less* is often used with counted things. Careful writing often keeps the traditional choice.","***Data is* or *data are*?** See Lesson 2. It depends on your field and reader."]},
      "For each of these, the corpus shows what people do, and the guide shows what a particular reader expects. You need both."
    ]},
    {h:"A decision method", body:[
      "When you doubt a form, ask five questions in this order:",
      {ol:["Is it English at all? If no native speaker would say it, change it (layer 1).","Is it standard? If it is non-standard, think about your setting (layers 1–2).","Is there a style guide, house style or teacher’s rule that I must follow? If yes, follow it (layer 3).","Who is my reader? Choose the register and variety that suits them.","Is it clear? If a choice could confuse, change it, whatever the “rule” says."]},
      {terms:["register","serial-comma","style-guide","house-style","writing-convention","litotes"]}
    ]}
   ],
   try:[
    {id:"e5u1-l4-x1", type:"sort", q:"Which layer does each “rule” belong to?", buckets:["Grammar rule of the language","Convention that varies by place or field","Style choice or house style"], items:[
      {t:"Articles come before their nouns: *the book*, not *book the*.", b:0, why:"No variety of English breaks this pattern."},
      {t:"Americans write *color*; the British write *colour*.", b:1, why:"A national spelling convention. Both are correct in their places."},
      {t:"Use a comma before *and* in a list of three.", b:2, why:"The serial comma is a style choice. Guides disagree about it."},
      {t:"In the US, 11/23 means November 23.", b:1, why:"A convention. Month first is the US habit. The UK writes the day first, so the same date is 23/11."},
      {t:"A company writes *email* without a hyphen in all its documents.", b:2, why:"This is a house-style decision that gives the company’s texts a consistent look."},
      {t:"*Very* comes before the adjective it describes: *very tall*, not *tall very*.", b:0, why:"No variety of English puts *very* after its adjective. It is a pattern of the language itself."}
    ]},
    {id:"e5u1-l4-x2", type:"mcq", q:"Hana, a new student, writes to a professor she has never met. Which opening suits the situation best?", options:[
      {t:"Dear Professor Okafor, I am writing to ask whether I may join your seminar.", ok:true, why:"Right. This is neutral to formal, polite and clear, which suits a first message to someone senior."},
      {t:"Hey prof, quick q: can I join your seminar?", why:"Too informal for a first message to a professor, and it may seem disrespectful."},
      {t:"Esteemed Professor, I most humbly beseech you to admit me to your esteemed seminar.", why:"Too formal and old-fashioned. It sounds odd, and readers may feel uncomfortable."},
      {t:"To whom it may concern: Join seminar.", why:"Too short and impersonal, and it is not polite. The professor’s name was available."}
    ]},
    {id:"e5u1-l4-x3", type:"match", q:"Match each style guide to the field where it is often used.", pairs:[
      ["AP Stylebook","News writing in the United States","Journalists use it for consistency across stories."],
      ["APA Publication Manual","Psychology, education and many social sciences","It also sets how to cite sources."],
      ["MLA Handbook","Language and literature studies","Often used in literature classes."],
      ["*Chicago Manual of Style*","Book publishing and many humanities subjects","Widely used in the US by editors and historians."],
      ["*New Hart’s Rules*","Publishing in the UK","A British style guide from Oxford University Press."]
    ]},
    {id:"e5u1-l4-x4", type:"mcq", q:"Which sentence is clearest about who is being thanked? The writer wants to thank her parents *and* two other people, Priya and Tomás.", options:[
      {t:"I thank my parents, Priya, and Tomás.", ok:true, why:"Right. The serial comma makes it clear that there are three separate groups: parents, Priya and Tomás."},
      {t:"I thank my parents, Priya and Tomás.", why:"Without the comma, readers might think Priya and Tomás *are* her parents."},
      {t:"I thank my parents Priya and Tomás.", why:"With no commas at all, this says that her parents are named Priya and Tomás."},
      {t:"I thank, my parents Priya and Tomás.", why:"The extra comma is misplaced. It does not make anything clearer."}
    ]},
    {id:"e5u1-l4-x5", type:"number", q:"A form says the meeting is on 06/07/2025. A US reader and a UK reader each read the date in their own way. How many days apart are the two dates they think of? (US: month first. UK: day first.)", answer:29, tol:0, unit:"days", why:"The US reader sees June 7, 2025. The UK reader sees 6 July 2025. From June 7 to July 7 is 30 days (June has 30 days), so July 6 is one day earlier: 29 days. Writing the date as 2025-07-06 or 6 July 2025 avoids the problem.", wrongs:[
      {v:30, tol:0, why:"You counted from June 7 to July 7. The UK date is July 6, one day before that."},
      {v:1, tol:0, why:"You may have compared the digits 06/07 and 07/06 as if they were a day apart. They are in different months."},
      {v:0, tol:0, why:"The two readers do not see the same date. The same digits mean different days in the two conventions."}
    ]},
    {id:"e5u1-l4-x6", type:"spot", q:"Kenji wrote this note for a class about style. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"The serial comma is a style choice, and guides disagree about it.", flag:false, why:"Accurate."},
      " ",
      {t:"Any text without the serial comma is a grammar mistake.", flag:true, why:"Inaccurate. Many guides, such as the AP Stylebook, generally leave it out. It is a style choice."},
      " ",
      {t:"A house style can override a writer’s personal preference.", flag:false, why:"Accurate. Following the guide that applies to your reader is the golden rule."},
      " ",
      {t:"American and British English are separate languages with different grammars.", flag:true, why:"Misleading. They are two written standards of one language, with small, regular differences."},
      " ",
      {t:"Dates such as 06/07/2025 can be read in two ways, so a clearer format is useful.", flag:false, why:"Accurate. US and UK conventions differ."},
      " ",
      {t:"A formal register is always better than an informal one.", flag:true, why:"Inaccurate. Register should fit the audience and the situation."}
    ]},
    {id:"e5u1-l4-x7", type:"mcq", q:"Ana’s company style sheet says: UK spelling, no serial comma. Her draft contains *center*, *color* and the list *apples, pears, and plums*. What should she do?", options:[
      {t:"Change them to *centre*, *colour* and *apples, pears and plums* to match the house style.", ok:true, why:"Right. The style sheet applies to her readers, so it beats her own habit."},
      {t:"Leave them, because American spelling is more modern.", why:"Neither variety is more modern or better. The company chose its style."},
      {t:"Leave the draft and tell the editor that the style sheet is wrong.", why:"A house style is a choice, not a mistake. Writers follow it for consistency."},
      {t:"Change *center* and *color* but keep the serial comma.", why:"The sheet covers punctuation too. Mixing styles is exactly what a style sheet prevents."}
    ]},
    {id:"e5u1-l4-x8", type:"explain", q:"A learner asks you: “My British teacher says *gotten* is wrong, but my American friends use it all the time. Who is right?” Explain what is going on, using the idea of conventions.", size:"3–5 sentences", hint:"Is this a grammar rule, a convention or a style choice?", model:"Neither is wrong: this is a convention that differs between American and British English. In the United States, *gotten* is the normal past participle of *get* in many uses, as in *I’ve gotten better*. In British English the usual form is *got*, so a British teacher may mark *gotten* as non-standard. The learner should pick one variety for each text, and be consistent. I would suggest using the form that matches the teacher’s variety in that class, and know that the other is normal elsewhere.", points:["Says that this is a US and UK convention, not a grammar mistake","Gives the US and UK forms (*gotten* and *got*)","Says that neither teacher nor friends are wrong in their variety","Gives practical advice: choose by audience and be consistent"]}
   ],
   apply:{
    intro:"Build your own small toolkit for choosing and keeping a style. You need only a notes app and a free online dictionary.",
    tasks:[
     {t:"Rewrite one message in three registers", how:[
       "Choose a real message that you might send: asking for an extension, inviting a friend, or reporting a problem to a landlord.",
       "Write it three times: formal, neutral and informal. Keep the meaning the same.",
       "Underline the words and phrases that changed. Note whether contractions, word choice or sentence length changed most."
     ], write:"Formal… Neutral… Informal… What changed most…"},
     {t:"Make a mini style sheet for yourself", how:[
       "Decide six things: which spelling variety you use (US or UK), whether you use the serial comma, your date format, your quotation marks, how you write *email*, and how you write numbers under ten.",
       "Check each choice in a free online dictionary or a free style guide page, such as the APA Style website’s grammar pages.",
       "Write the six decisions as short rules, with one example each. Then use them in your next piece of writing."
     ], write:"Spelling… serial comma… dates… quotation marks… email… numbers…"},
     {t:"Find the layer", how:[
       "Open a free style-guide page (for example, a page on the APA Style website) and pick three rules.",
       "For each rule, write which layer it belongs to: grammar rule, convention or style choice.",
       "Write one sentence about what would happen if you broke it."
     ], write:"Rule 1… layer… what would happen… Rule 2… Rule 3…"}
    ],
    proof:"The same message in three registers. A six-line style sheet with examples. Three rules from a style guide, each labeled with its layer."
   },
   read:[
    {book:"eling", where:"Background reading: the opening chapter on what linguistics is, the part on the kinds of rules that people apply to language", note:"It gives a linguist’s view of why some rules are patterns and others are conventions."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u1-l5", title:"One English, many Englishes", minutes:55,
   hook:{q:"Standard English has only one word, *you*, for one person or for many. What do many varieties of English do about that?", options:["They add a plural form, such as y’all, youse or you guys","They go back to using thou and ye","They say nothing and let the listener guess","They use they for the plural you"], answer:0, reveal:"**They add a plural form.** *Y’all* (from *you all*), *youse*, *you guys* and others fill a gap that standard English left. So these forms are not “lazy”. They solve a real problem, and they follow clear patterns. This lesson looks at why English varies from place to place, group to group and situation to situation, and why that is normal."},
   goals:[
     "Explain the difference between an accent and a dialect, and say why everyone has both",
     "Explain why “language or dialect?” has no clean answer",
     "Describe how a variety can have regular grammar that differs from standard English",
     "Explain why this course uses General American and Southern British as reference accents, and what that does not mean"
   ],
   learn:[
    {h:"Everyone speaks a variety", body:[
      {lead:"No one speaks “English in general”. Everyone speaks one particular variety of it."},
      "A **[[language-variety|variety]]** is any form of a language used by a group of people. It can be tied to a place, a social group, an age group or a situation. The word is useful because it is neutral. It does not say that one form is better.",
      "Two words need care. An **[[accent]]** is a way of *pronouncing* a language. A **[[dialect]]** is a variety that differs in *more* than sound: in words (vocabulary) and in grammar as well. So every dialect comes with an accent, but an accent is only part of a dialect.",
      {fig:'<svg viewBox="0 0 340 248"><rect class="d-lup" x="8" y="8" width="324" height="196" rx="14" stroke-width="2"/><text x="170" y="30" text-anchor="middle">A dialect (a variety of the language)</text><rect class="d-gold" x="24" y="46" width="292" height="44" rx="10" stroke-width="2"/><text x="170" y="73" text-anchor="middle">Vocabulary: lift or elevator</text><rect class="d-sage" x="24" y="98" width="292" height="44" rx="10" stroke-width="2"/><text x="170" y="125" text-anchor="middle">Grammar: I’ve gotten or I’ve got</text><rect class="d-rose" x="24" y="150" width="292" height="44" rx="10" stroke-width="2"/><text x="170" y="177" text-anchor="middle">Accent: the sounds of speech</text><text class="s" x="170" y="228" text-anchor="middle">An accent covers sound only. A dialect covers all three.</text></svg>', alt:"A large box labeled dialect, a variety of the language, holds three smaller boxes: vocabulary (lift or elevator), grammar (I have gotten or I have got), and accent, the sounds of speech.", cap:"An accent is one part of a dialect. Standard English is also a dialect: it can be spoken with many accents."},
      "Two facts follow. First, **everyone has an accent**. “No accent” really means “an accent like mine”. Second, **standard English is itself a dialect**, one that has high prestige and is written down. It can be spoken with many different accents, as Lesson 1 said."
    ]},
    {h:"“Language” or “dialect”? There is no clean line", body:[
      "People often say that two varieties are different languages if their speakers cannot understand each other, and dialects of one language if they can. This **mutual intelligibility** test sounds clear, but it fails often.",
      "Speakers of Swedish and Norwegian can usually understand each other well, yet we call them different languages. Many varieties that are called “dialects” of Chinese are so different in speech that their speakers cannot understand each other. So politics, history and national identity decide as much as sound does. The linguist Max Weinreich made a famous saying popular: “A language is a dialect with an army and a navy.”",
      "For English, the practical point is this: *variety* is a useful word, and “dialect” should not mean “a lesser form”.",
      {h:"Compared with Japanese"},
      {tip:"This note is optional. Skip it if you prefer."},
      "Japanese has the same idea. There is a standard form, called *hyōjungo* (標準語, “standard language”), which is closely tied to the speech of the Tokyo area. There are also many regional varieties, called *hōgen* (方言, “dialects”), such as Kansai-ben (関西弁). Many Japanese speakers move between them, using *hōgen* at home and *hyōjungo* at work or on TV. That is exactly what many English speakers do."
    ]},
    {h:"Why a language varies", body:[
      "Variation is not a mistake in the language. It is how a living language works. Five main causes:",
      {list:["**Place.** People in different regions develop different words and sounds.","**Social group.** Age, education, work, ethnicity and community all leave marks on speech.","**Situation.** The same person speaks differently to a friend and to a judge (register, Lesson 4).","**Time.** Languages change. *Awful* once meant “full of awe”, and *silly* once meant “happy” or “blessed”.","**Contact.** Where languages meet, they borrow words and patterns."]},
      "Change is a good reason not to treat today’s “mistake” as a permanent mistake. Many forms that people once called wrong are now standard. Remember *you*. It started as plural and polite, and it took over from *thou*."
    ]},
    {h:"The reference accents of this course", body:[
      "This course uses two **reference accents** for sounds, stress and examples. One is **General American (GA)**, a widely understood accent of the United States. The other is **Southern British (SSBE)**, the accent most often used in British teaching materials. Dictionary pronunciations and many learning materials use these two, which is why this course does too.",
      "Choosing a reference accent is a teaching decision. It does not mean that GA or SSBE is the “best” or “correct” accent. Millions of educated speakers have other accents, and the World Englishes elective in this course covers them.",
      {table:[["Word","GA","SSBE"],["car","/kɑr/","/kɑː/"],["bath","/bæθ/","/bɑːθ/"],["schedule","/ˈskɛdʒul/","/ˈʃedjuːl/"],["tomato","/təˈmeɪtoʊ/","/təˈmɑːtəʊ/"]]},
      {ex:"Listen to three words, one after the other: *car*, *bath*, *schedule*. First in General American, then in Southern British. You do not need to read the symbols yet: Unit 2 teaches them.", label:"Listen: the same words in two accents", listen:"e5u1-l5-a1"},
      "Look at *car*. The GA speaker pronounces the *r* at the end. The SSBE speaker does not. In *bath*, the vowel is different. In *schedule*, even the first consonant is different. Both are normal.",
      {ex:"Now listen to *tomato*, in General American and then Southern British.", label:"Listen: one more pair", listen:"e5u1-l5-a2"},
    ]},
    {h:"Other varieties have rules too", body:[
      "A variety that differs from standard English is not a broken form of it. Linguists who study such varieties find regular rules, with forms that cannot be used just anywhere. Three examples:",
      {table:[["Variety","Feature","What it means"],["African American English","Habitual *be*: *She be working.*","She usually works. A single, one-time event does not use *be*."],["Southern United States English","Double modals: *I might could help.*","I might be able to help."],["Irish English","*After* for a recent event: *I’m after eating.*","I have just eaten."]]},
      "Each of these is a clear, rule-based pattern. Each does something that is hard to say in standard English in as few words. They are non-standard in Lesson 1’s sense, which means they are not used in standard writing. They are not “not English”.",
      "This also explains why **accent bias** is unfair. People sometimes judge a speaker’s intelligence or education from an accent. Linguistics finds no support for that idea. An accent tells you where a person comes from, not how well they think.",
      {tip:"As a learner or teacher: understanding many varieties is a real skill. You do not have to speak them, but you should not call them wrong."}
    ]},
    {h:"Moving between varieties", body:[
      "Most people use more than one variety. Linguists call the switch **[[code-switching]]**: moving between languages or varieties depending on the person, the place or the topic. It is a sign of skill, not confusion.",
      {ex:"Cheska, a master’s student in regional disaster and community studies from the Philippines, studies in English on a scholarship. English is one of the official languages of the Philippines, with Filipino, and is used in schools, law and business. Cheska says: “At home we say *CR* for the bathroom. It stands for *comfort room*. In my seminar I say *restroom* or *bathroom*, because that’s what my classmates know. It is the same me.” She is not mixing up Englishes. She is choosing the one that fits.", label:"Worked example: one speaker, two choices"},
      "Philippine English is a variety with its own words and norms, used by educated speakers in daily life. Treating it as “mistakes in American English” would miss that.",
      "A useful rule for your own English: **choose the variety that suits your reader and your goal, and make sure you can be understood.** For many learners, the goal is not to sound like a native speaker. It is to be clear and confident."
    ]},
    {h:"What to take from this unit", body:[
      {list:["Grammar describes. Prescriptive rules are advice, and some of it is old opinion (Lesson 1).","Dictionaries and corpora report evidence. You still choose (Lesson 2).","Famous myths often fail the test of real usage (Lesson 3).","Separate real rules, conventions and style choices, and follow the guide that applies to your reader (Lesson 4).","English varies by place, group and situation, and that is normal (Lesson 5)."]},
      {key:"When someone says “that is wrong”, ask: wrong by what standard, for which reader, and on what evidence?"},
      {terms:["language-variety","dialect","code-switching","mutual-intelligibility","reference-accent"]}
    ]}
   ],
   try:[
    {id:"e5u1-l5-x1", type:"mcq", q:"Which difference is a difference of **dialect** and not only of accent?", options:[
      {t:"One speaker says *flat* and another says *apartment*.", ok:true, why:"Right. This is vocabulary. A dialect differs in words and grammar as well as in sound."},
      {t:"One speaker pronounces the *r* at the end of *car* and another does not.", why:"This is only a difference of pronunciation, so it is an accent difference."},
      {t:"One speaker says *bath* with a short vowel and another with a long vowel.", why:"This is also pronunciation only, so it is an accent difference."},
      {t:"One speaker says *to-MAY-toe* and another says *to-MAH-toe*.", why:"These are two pronunciations of the same word. It is an accent difference."}
    ]},
    {id:"e5u1-l5-x2", type:"sort", q:"Is each feature a difference of accent only, or a difference of dialect (words or grammar)?", buckets:["Accent (sound only)","Dialect (words or grammar too)"], items:[
      {t:"Pronouncing the *r* at the end of *car*", b:0, why:"A difference in how the word sounds."},
      {t:"Saying *lorry* for *truck*", b:1, why:"A different word, so it is vocabulary."},
      {t:"Saying *y’all* for the plural *you*", b:1, why:"A different word with a grammar job (the plural of *you*)."},
      {t:"Saying *schedule* as /ˈʃedjuːl/", b:0, why:"Only the pronunciation changes."},
      {t:"Saying *I’ve gotten* where another variety says *I’ve got*", b:1, why:"A different past-participle form, so it is grammar."},
      {t:"Saying *bath* with a long vowel", b:0, why:"A change of vowel sound only."}
    ]},
    {id:"e5u1-l5-x3", type:"match", q:"Match each feature to the variety and meaning.", pairs:[
      ["*She be working.*","African American English habitual *be*: she usually works","A regular pattern, not used for a single event."],
      ["*I might could help.*","Southern US double modal: I might be able to help","Several modal verbs can be used together."],
      ["*I’m after eating.*","Irish English: I have just eaten","*After* is used for a recent event."],
      ["*Let’s go to the CR.*","Philippine English: the bathroom (comfort room)","A widely used word in the Philippines."],
      ["*Y’all come back.*","A plural *you* from *you all*, common in the US South","It fills a gap in standard English."]
    ]},
    {id:"e5u1-l5-x4", type:"mcq", q:"At work, Priya’s manager says she has “bad English” because of her accent. In meetings, everything Priya says is clear, and her grammar is standard. What is the best description of the situation?", options:[
      {t:"The manager is treating an accent difference as if it were an error, but Priya’s English is clear and standard.", ok:true, why:"Right. An accent is a way of pronouncing. It is not a grammar or vocabulary error, and clear speech is what matters."},
      {t:"The manager is right, because everyone should speak with the same accent.", why:"There is no single accent that everyone shares. Everyone has one, and speakers with many accents are understood."},
      {t:"Priya should hide her accent completely, because accents are mistakes.", why:"Accents are normal parts of speech. Clarity is a good goal. Hiding identity is not."},
      {t:"The manager is describing a grammar rule that Priya has broken.", why:"No grammar rule is involved. The complaint is about pronunciation."}
    ]},
    {id:"e5u1-l5-x5", type:"order", q:"Put these steps in a good order for answering someone who says “that is wrong English”.", items:[
      {t:"Listen and thank them for the correction", why:"A calm start keeps the talk friendly."},
      {t:"Ask what they mean: not English, not standard, or only disputed", why:"The three kinds from Lesson 1 tell you what kind of claim it is."},
      {t:"Check evidence in a learner’s dictionary or a corpus", why:"Evidence settles questions better than opinions (Lesson 2)."},
      {t:"Check whether a style guide or house style applies", why:"If a guide applies to your reader, it can decide the matter (Lesson 4)."},
      {t:"Choose the form that suits your reader and keep it consistent", why:"The final choice depends on the reader and setting."}
    ]},
    {id:"e5u1-l5-x6", type:"spot", q:"Ana wrote these notes about variation. Tap each statement that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Everyone has an accent.", flag:false, why:"Accurate. “No accent” means “like mine”."},
      " ",
      {t:"Dialects are forms of English with no rules.", flag:true, why:"Inaccurate. Dialects have regular rules, such as habitual *be* in African American English."},
      " ",
      {t:"Standard English can be spoken with many different accents.", flag:false, why:"Accurate. Standard describes words and grammar, not pronunciation."},
      " ",
      {t:"Philippine English is just American English with mistakes.", flag:true, why:"Misleading. It is a variety with its own words and norms, used by educated speakers."},
      " ",
      {t:"Whether two varieties are separate languages depends partly on history and politics.", flag:false, why:"Accurate. Mutual intelligibility alone does not settle it."},
      " ",
      {t:"General American and Southern British are the only correct accents of English.", flag:true, why:"Inaccurate. They are reference accents chosen for teaching. Many other accents are fully correct."}
    ]},
    {id:"e5u1-l5-x7", type:"mcq", q:"Cheska says *CR* for the bathroom at home and *restroom* in her seminar. What is the best way to describe this?", options:[
      {t:"A normal skill: she chooses the variety and register that fit her listeners.", ok:true, why:"Right. This is code-switching, which many multilingual and multi-variety speakers do every day."},
      {t:"A sign that she has not learned which English is correct.", why:"Both words are normal in their settings. Choosing between them is a skill."},
      {t:"A problem that she should fix by only using one form everywhere.", why:"Using one form everywhere would make her less able to adapt. Adapting is the strength."},
      {t:"Proof that Philippine English cannot be used in academic settings.", why:"Her seminar is in English, and she uses her variety when it suits. Choosing words for her audience is normal."}
    ]},
    {id:"e5u1-l5-x8", type:"explain", q:"A student tells you: “I want to lose my accent so that I can speak correct English.” Explain what is true and what is not true in this idea, and give better advice.", size:"3–5 sentences", hint:"Think about accent versus errors, intelligibility, and reference accents.", model:"An accent is a way of pronouncing English, so having one is not a mistake, and everyone has one. “Correct” English is about grammar, words and setting, and those can be standard with any accent. What is true is that some features of pronunciation can make a speaker hard to understand, and it makes sense to work on those. A better goal is therefore to be clear and easy to understand. A learner can pick a reference accent such as General American or Southern British as a model for practice, without trying to erase their own identity.", points:["Explains that an accent is not an error and everyone has one","Separates accent from correct grammar and vocabulary","Says that being understood (intelligibility) is a good goal","Mentions choosing a model or reference accent for practice"]}
   ],
   apply:{
    intro:"Listen to the variety around you. You need a podcast, a video or a conversation, and a notes app. No account is needed.",
    tasks:[
     {t:"Collect words from two varieties", how:[
       "Choose a US and a UK news or magazine site, or two videos from speakers of different varieties.",
       "Find three words or phrases that differ between them (for example *flat* and *apartment*, or *autumn* and *fall*).",
       "Write them in a two-column list, and label each pair as vocabulary, spelling or grammar."
     ], write:"US form… UK form… type of difference… (three pairs)"},
     {t:"Listen for two accents", how:[
       "Listen to the clips in this lesson again: *car*, *bath*, *schedule*, *tomato*.",
       "Then find a short free recording online of an American speaker and a British speaker reading the same word list or passage.",
       "Write down two differences you can hear. Do not worry about the symbols."
     ], write:"Difference 1… Difference 2…"},
     {t:"Notice your own switching", how:[
       "Over one day, notice two moments when you changed your speech for a different person or place.",
       "For each, write what changed: words, grammar, formality or accent.",
       "Write one sentence about why."
     ], write:"Moment 1… what changed… why… Moment 2…"}
    ],
    proof:"A list of three US and UK pairs with their type. Two audible accent differences. Two examples of your own code-switching."
   },
   read:[
    {book:"eling", where:"The chapter on language variation (sociolinguistics): regional and social dialects, and attitudes to varieties", note:"Read it after this lesson. It uses many more examples from different languages."}
   ]
  }
  ],
  checkpoint:["e5u1-q02","e5u1-q07","e5u1-q12","e5u1-q14","e5u1-q19","e5u1-q22","e5u1-q23","e5u1-q27","e5u1-q29","e5u1-q36","e5u1-q39","e5u1-q40"],
  cpBank:[
   {"id":"e5u1-cp01","lesson":"e5u1-l1","level":1,"q":"Which sentence breaks a basic pattern of English that every variety follows (kind 1)?","options":[{"t":"*He don’t like it.*","why":"This is non-standard, but it follows a regular pattern in some varieties."},{"t":"*She bought a bag leather brown.*","ok":true,"why":"Right. In English the adjectives come before the noun, in a set order. No variety says *a bag leather brown*."},{"t":"*I ain’t going.*","why":"Non-standard, but a regular pattern in many varieties."},{"t":"*Who did she talk to?*","why":"This is normal English. Only a few people object to the stranded preposition."}]},
   {"id":"e5u1-cp02","lesson":"e5u1-l2","level":1,"q":"A dictionary entry carries the label *nonstandard*. What does the label tell you?","options":[{"t":"The form is used, but it is not accepted in standard written English.","ok":true,"why":"Right. The label is advice about status and setting."},{"t":"The form is not English.","why":"Nonstandard forms are used by many native speakers."},{"t":"The form is new.","why":"The label is about status, not age."},{"t":"The form is rare in all corpora.","why":"A nonstandard form can be very common in speech."}]},
   {"id":"e5u1-cp03","lesson":"e5u1-l3","level":1,"q":"Which myth is supported by the argument “the Latin infinitive is a single word”?","options":[{"t":"Never start a sentence with *And*.","why":"This was a school shortcut and has nothing to do with Latin infinitives."},{"t":"Singular *they* is incorrect.","why":"That myth is about pronouns and the idea that *he* stands for everyone."},{"t":"Double negatives are illogical.","why":"That comes from comparing language with arithmetic."},{"t":"Never split an infinitive.","ok":true,"why":"Right. People often defend the rule this way: a one-word Latin infinitive cannot be split. Historians doubt that this was the real origin, and English infinitives are two words anyway."}]},
   {"id":"e5u1-cp04","lesson":"e5u1-l4","level":2,"q":"A company style sheet says to write numbers under ten as words. Hana’s draft says “We have 3 offices.” What is the best step?","options":[{"t":"Leave it, because digits are easier to read.","why":"Ease of reading does not outrank a house style that the company uses."},{"t":"Write “3 (three)” to be safe.","why":"This breaks the style sheet in a different way and is not usual."},{"t":"Change it to “three”, because the house style applies to her readers.","ok":true,"why":"Right. A style sheet gives the company consistency."},{"t":"Change it only if the editor asks.","why":"Writers are expected to apply the house style, so the editor does not need to ask."}]},
   {"id":"e5u1-cp05","lesson":"e5u1-l5","level":2,"q":"At a conference, a speaker from Scotland and a speaker from Texas both give clear talks in standard English with different accents. Which statement is accurate?","options":[{"t":"Only one of them is speaking standard English.","why":"Standard English does not belong to one accent."},{"t":"Both are speaking standard English with different accents.","ok":true,"why":"Right. Standard English is about grammar and words, and it can be spoken with many accents."},{"t":"Neither is speaking standard English, because they have accents.","why":"Having an accent does not stop speech from being standard."},{"t":"Both are speaking different languages.","why":"The speakers can understand each other, and both use standard English."}]},
   {"id":"e5u1-cp06","lesson":"e5u1-l2","level":2,"q":"Corpus A has 90 examples of a phrase in 3 million words. Corpus B has 120 examples in 6 million words. Which statement is true?","options":[{"t":"The phrase is more frequent in Corpus A: 30 per million, against 20 in Corpus B.","ok":true,"why":"Right. Comparing rates per million words puts the corpora on the same scale."},{"t":"Corpus B has more, because 120 is larger than 90.","why":"Raw counts mislead when corpora differ in size. Compare rates."},{"t":"The corpora are equal, because 120 − 90 is a small difference.","why":"The rates are 30 and 20 per million, so they are not equal."},{"t":"Nothing can be said, because the corpora differ in size.","why":"A rate lets you compare corpora of different sizes."}]},
   {"id":"e5u1-cp07","lesson":"e5u1-l3","level":2,"q":"A teacher marks *to boldly go* as an error. Which reply uses evidence and respects the teacher?","options":[{"t":"“You are wrong. English has no rules.”","why":"This is the “anything goes” mistake. It is also unkind."},{"t":"“I will use it anyway, because the teacher is out of date.”","why":"It ignores the setting and gives no evidence."},{"t":"“I have never heard anyone say it.”","why":"The phrase is famous, and the answer is personal opinion, not evidence."},{"t":"“Split infinitives appear in respected writing, and the objection dates only from the 1800s. Is there a style rule in this class?”","ok":true,"why":"Right. It gives evidence, names the origin and asks about the class rule."}]},
   {"id":"e5u1-cp08","lesson":"e5u1-l4","level":2,"q":"Kenji searches a corpus and finds that *email* is more common than *e-mail*. His company’s style sheet says *e-mail*. What should he write in company documents?","options":[{"t":"*email*, because the corpus shows it is more common.","why":"Frequency helps general questions. A house style is a rule for one organization."},{"t":"Either one, whichever he prefers.","why":"Mixing forms is what a style sheet prevents."},{"t":"*e-mail*, because the house style applies to the company’s readers.","ok":true,"why":"Right. A house style beats general frequency."},{"t":"*E-mail*, but only in headings.","why":"House styles apply to the whole document unless they say otherwise."}]},
   {"id":"e5u1-cp09","lesson":"e5u1-l3","level":3,"q":"Tomás hears: “Nobody never helps me.” A friend says, “Two negatives make a positive, so he means that somebody helps.” What is the best reply?","options":[{"t":"Your friend is right, because logic always works that way in language.","why":"Language does not follow arithmetic. Spanish and Chaucer’s English use several negatives for one idea."},{"t":"This is negative concord. It is regular, and the meaning is clearly negative. It is non-standard in writing, but it is not illogical.","ok":true,"why":"Right. Language is not arithmetic, and listeners understand it as negative."},{"t":"It is not English, so nobody can understand it.","why":"Everyone understands it, and many speakers use it."},{"t":"It is litotes, so it really means “often”.","why":"Litotes is a deliberate effect like *not uncommon*. This sentence is not that."}]},
   {"id":"e5u1-cp10","lesson":"e5u1-l4","level":3,"q":"A UK charity asks a freelance writer from Texas to write a leaflet. Which approach is best?","options":[{"t":"Ask for the charity’s style sheet, and use its UK spelling, dates and house choices.","ok":true,"why":"Right. The guide that applies to the readers decides, and it avoids mixing varieties."},{"t":"Keep US spelling, because it is her own variety.","why":"The leaflet is for UK readers, who expect UK conventions."},{"t":"Mix US and UK forms, so that everyone is satisfied.","why":"Mixing forms looks careless. Consistency matters."},{"t":"Choose by corpus frequency, since a corpus is evidence.","why":"A corpus shows general usage. A charity’s house style is a specific instruction."}]},
   {"id":"e5u1-cp11","lesson":"e5u1-l5","level":3,"q":"A forum post says: “People who say *I might could help* are just speaking bad English.” Which reply best uses what you have learned?","options":[{"t":"The post is right, because only standard English is correct.","why":"Standard English is one variety. It is not the only valid one."},{"t":"The speaker made a grammar mistake that everyone makes.","why":"It is not a random slip. It is part of a regular system in some varieties."},{"t":"It is correct in all writing, because it is a dialect.","why":"Dialect features are usually not used in standard writing."},{"t":"It is a regular pattern, a double modal, in some Southern US varieties. It is non-standard in formal writing, but it is not “bad English”.","ok":true,"why":"Right. This describes the pattern, names the setting limit and avoids a value judgment."}]},
   {"id":"e5u1-cp12","lesson":"e5u1-l3","level":3,"q":"Hana wants evidence on whether singular *they* is used in published writing. Which plan is best?","options":[{"t":"Ask three friends what they think.","why":"Three opinions are not evidence about published writing."},{"t":"Check a single dictionary entry and stop.","why":"One entry is a useful start, but it does not show the range of use or what guides say."},{"t":"Search a large corpus for phrases like *someone left their*, read many lines from different text types, and check what major style guides say.","ok":true,"why":"Right. It combines evidence from usage with the advice of guides, and reads real lines."},{"t":"Count the examples in one blog and decide.","why":"One blog is a very small and narrow sample."}]}
  ],
  codex:[
   {id:"descriptive-prescriptive", title:"Descriptive and prescriptive grammar", aka:["descriptivism and prescriptivism","grammar rules"], tags:["grammar","usage","foundations"],
    summary:"Two ways to talk about a language: reporting what speakers do, and advising what they should do.",
    levels:{
     starter:[
      "Think of a weather report and a speed limit. A weather report **describes**: it tells you what is happening. A speed limit **prescribes**: it tells you what to do. Language has both.",
      "A **descriptive** grammar records how real people speak and write. It is built from evidence. A **prescriptive** grammar says which forms are “right” and “wrong”, and tries to change what people do. Many school rules are prescriptive.",
      "Neither is bad. A dictionary or a linguist needs to describe. An editor or a teacher may need to prescribe, because readers expect a certain style. Problems start when an opinion is presented as if it were a fact about English.",
      {key:"A statement about what people do can be checked. A statement about what people should do needs a reason, and an authority."}
     ],
     builder:[
      "Many rules of English are patterns that speakers follow without being taught. Native speakers say *a big old wooden table*, never *a wooden old big table*. A descriptive grammar finds and states such patterns. These rules cannot be broken by a native speaker without sounding “not English”.",
      "Other rules were written by people. In the 1700s, writers such as Robert Lowth (1762) and Lindley Murray (1795) wrote grammars that gave opinions about correct English, often influenced by Latin. Schools passed them on. Some are sensible advice about clear writing. Others have little support in real usage.",
      {h:"Three kinds of “wrong”"},
      {list:["**Not English.** No variety of English would say it: *cat the black sat*.","**Not standard.** A regular pattern in some varieties, but not in standard writing: *we was late*.","**Only disputed.** Careful writers use it, and some people object: *to boldly go*."]},
      "Asking which kind of “wrong” someone means is a good first step in any argument about usage.",
      {tip:"When you hear a rule, ask: who made it, when, and what do good writers actually do?"}
     ],
     pro:[
      "The descriptive and prescriptive approaches are often shown as a fight, but the contrast is more useful as a division of work. Descriptive linguistics aims at an accurate account of usage and of the mental system speakers have. In this second sense, “grammar” means the knowledge in speakers’ minds, and a “rule” is a generalization about it. Judgments of acceptability from native speakers, and large corpora, are the two main kinds of evidence.",
      "Prescription is not the opposite of science. Style advice can be stated honestly: “Many readers in this field expect X”. The error is to present it as a fact about the language, or to say that a form is illogical when it is only unfamiliar or non-standard. When this habit supports the social status of one variety, linguists call it standard-language ideology.",
      "Descriptivism is also not relativism. A description contains constraints, including facts about what speakers reject. It can be wrong and can be tested. A good descriptive grammar of English says that *the cat* is possible and *cat the* is not, and it can say how often educated writers use a disputed form.",
      "In teaching English, the practical position is to describe first, label the setting second, and prescribe only where a reader, exam or house style requires it. This keeps feedback fair and honest, and it helps learners make their own choices."
     ]},
    related:["standard-english-explained","english-usage-myths","how-dictionaries-decide"],
    read:[{book:"eling", where:"The opening chapter on what linguistics is: descriptive and prescriptive rules"}],
    sources:[{t:"Linguistic Society of America", url:"https://www.linguisticsociety.org/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"standard-english-explained", title:"Standard English", aka:["standard language","the standard"], tags:["variation","grammar","foundations"],
    summary:"The variety of English used in education, news, publishing and government. A social convention, not a “better” English.",
    levels:{
     starter:[
      "**Standard English** is the form of English used in schools, news, books, offices and government. It has fairly fixed spelling and grammar. It is the form that learners are usually taught.",
      "It is not “good English” or “correct English”. It is a **social choice**. A shared written standard helps strangers read each other’s writing. Over several centuries, the English standard grew mostly from the writing and speech of London and the area around it, where the power, trade and printing houses were.",
      "It is not an accent. Speakers with many different accents can speak standard English. It is not the same as formal either: you can use standard English in a relaxed chat.",
      {key:"Standard English is one variety among many. It has prestige because of history, not because it is more logical."}
     ],
     builder:[
      "Standard English is a variety with an unusual feature: it is written down, taught in schools and described in dictionaries and grammars. Other varieties may be as regular, but they are less often written and less often taught.",
      "There is no single standard. American and British standards differ in spelling (*color* and *colour*), some vocabulary and some grammar (*gotten* and *got*). Other places, such as Australia, India or the Philippines, have their own educated norms. This is why the plural *standards* is often more accurate.",
      {h:"What it is not"},
      {list:["Not an accent: no accent is the “standard” accent for grammar.","Not a synonym for formal: you choose register separately.","Not the only valid grammar: other varieties have regular rules too.","Not unchanging: standards change slowly, as usage changes."]},
      "In practice, writers use standard English where their readers expect it: in essays, reports, applications and formal messages."
     ],
     pro:[
      "Linguists describe standardization as a process: a variety is selected, its forms are fixed (often in dictionaries and grammars), it is accepted by a community, and it is used in new functions such as law, education and print. English had no academy to carry this out. In 1712 Jonathan Swift proposed one, and nothing came of it. Instead the work was done by printers, schoolteachers, dictionary makers and writers of grammars, which is one reason why English usage is argued about so much.",
      "Because standard English is defined by institutions rather than by structure, it is possible to speak a standard dialect with any accent, and non-standard dialects with the accent of a prestige variety. Linguists distinguish *dialect* (grammar and vocabulary) from *accent* (pronunciation) for this reason.",
      "The word “standard” also hides a range. A text can be standard in grammar and still mix US and UK spelling, and formal writing is not the same as grammatical writing. Learners and teachers should therefore treat “standard” as a package of conventions, and name the specific convention under discussion.",
      "For learners, the practical aim is to be able to produce standard English when the setting needs it, and to understand other varieties without judging the speakers."
     ]},
    related:["descriptive-prescriptive","accents-dialects-variation","us-uk-conventions"],
    read:[{book:"eling", where:"The chapter on language variation (sociolinguistics): standard varieties and attitudes"}],
    sources:[{t:"Linguistic Society of America", url:"https://www.linguisticsociety.org/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"how-dictionaries-decide", title:"How dictionaries decide what to include", aka:["lexicography","how a dictionary is made"], tags:["dictionaries","corpus","usage"],
    summary:"Dictionary editors collect evidence of real use and sum it up. An entry means “people use this”, not “this is approved”.",
    levels:{
     starter:[
      "A dictionary is a **report**, not a law. When a word is in the dictionary, it means that people use it. It does not mean that the dictionary approves of it.",
      "A person who writes dictionaries is a **lexicographer**. They collect examples of how words are used, decide how many meanings a word has, and write short definitions. Today they use corpora: huge collections of real text that they can search.",
      "Good entries also have **labels** (*informal*, *formal*, *slang*, *nonstandard*, *offensive*) and sometimes a **usage note**. These tell you where a word fits. Read them. They often answer the question you came with.",
      {key:"A word in the dictionary tells you it exists. The label tells you where to use it."}
     ],
     builder:[
      "Dictionaries have different jobs. A *general* dictionary tries to cover the language for native speakers. A *learner’s* dictionary is for people who use English as another language, and it has simple definitions, many examples and grammar information. A *historical* dictionary, such as the *Oxford English Dictionary*, shows the dated history of each word and meaning. A *usage guide*, such as *Merriam-Webster’s Dictionary of English Usage*, examines disputed points with evidence.",
      "To decide whether a word enters a dictionary, editors look for evidence over time, in many kinds of text, from many writers. One use is not enough. They also decide how to label it, using the evidence.",
      {h:"Reading an entry"},
      {list:["Headword and part of speech.","Pronunciation (many learner’s dictionaries give both British and American).","Definitions, usually with the most common first.","Examples: what words it goes with.","Labels and usage notes: where it fits."]},
      {tip:"Learner’s dictionaries from Cambridge, Oxford and Collins are free online and written in simple words."}
     ],
     pro:[
      "The historical record shows two traditions. Samuel Johnson’s dictionary (1755) supported its definitions with quotations from earlier writers, and Johnson himself doubted that a language could be fixed. The OED, whose first full edition was finished in 1928, built its quotation files partly from volunteers who read widely and sent in slips. Modern lexicography adds corpora. Collins COBUILD (1987) was among the first learner’s dictionaries written directly from a corpus.",
      "A corpus changes lexicography in three ways. It gives frequency, which helps to order senses and choose which words learners need. It shows collocations, which make examples realistic. And it shows variation by text type, which helps with labels. It does not remove the need for judgment: editors still choose which evidence counts, how to group senses and what label to use.",
      "The 1961 controversy over *Webster’s Third New International Dictionary* shows how strong the public wish is for a dictionary to be a judge. The book was widely attacked as too permissive, because it had dropped some labels used before. The editors’ position was descriptive: they were reporting use.",
      "For a learner or teacher, the practical lesson is to read the label and the usage note first, and to treat a dictionary as the first step of a short piece of research, followed by a corpus check and a look at what the reader expects."
     ]},
    related:["reading-a-concordance","descriptive-prescriptive","dictionaries-corpora"],
    read:[{book:"eling", where:"Background reading: the opening chapter on what linguistics is, on collecting evidence about language"}],
    sources:[{t:"Oxford English Dictionary", url:"https://www.oed.com/"}, {t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"reading-a-concordance", title:"Reading a concordance and counting in a corpus", aka:["KWIC","keyword in context","corpus search"], tags:["corpus","dictionaries","usage"],
    summary:"A concordance lines up every example of a word so that patterns are easy to see. Counting per million words lets you compare.",
    levels:{
     starter:[
      "A **corpus** is a large collection of real texts stored on a computer. A **concordance** is the result of a search in it: every example of a word, each on its own line, with the word in the middle.",
      "The word is in the middle and the words around it are on both sides. Your eye can see at once which words come before and after it. This is the quickest way to learn how a word is really used.",
      "Read the lines slowly. Ask: what comes before it? What comes after it? Do the lines come from speech, news, fiction or academic writing? A few lines will not tell you much. You need many.",
      {key:"A corpus shows what people do. You still decide what suits your reader."}
     ],
     builder:[
      "Well-known corpora include the Brown Corpus (about one million words of American English printed in 1961), the British National Corpus (about 100 million words, mostly from the 1980s and early 1990s) and the Corpus of Contemporary American English, COCA, with about a billion words and a free registration. Most corpora let you search by text type, such as spoken, fiction, news and academic.",
      "To compare corpora of different sizes, use a **rate**: the number of examples per million words. If a word appears 120 times in 4 million words, the rate is 120 ÷ 4 = 30 per million.",
      {h:"Four warnings"},
      {list:["Frequent does not mean correct, and rare does not mean wrong.","The corpus must match your question and your type of text.","A small sample can mislead: read many lines.","A count does not decide style. The reader and the setting do."]},
      "Start with a simple question, such as “which of these two phrases is more common in academic writing?”, and let the lines show you what else is going on."
     ],
     pro:[
      "A concordance is a keyword-in-context (KWIC) display. Most corpus tools also offer **collocates**: words that occur near the node word more often than chance. Association scores such as mutual information or log-likelihood rank them. These scores favor different things: some highlight rare but exclusive partners, others common ones. Read the method before trusting a list.",
      "Corpus design matters. A *reference* corpus aims at balance across many text types. A *specialized* corpus covers one genre, such as medical journals. A *learner* corpus holds the writing or speech of learners, and it shows what learners really do. The date range also matters, especially for slang and for words that are changing. Raw counts depend on tokenization (how the text is split into words) and on whether the search matches word forms or lemmas.",
      "There are limits that tools cannot remove. Corpora hold text, not speakers’ judgments, so they can show that a form occurs, but not that speakers reject a form that is missing. A missing form may simply be rare. Tools may also differ in the details of how they count and display, so compare with the help pages of the tool you use.",
      "For classroom work, three habits help: record the exact search and corpus, read at least 30 lines before drawing a conclusion, and report the result with its limits, for example “In the academic section of this corpus, form A is more frequent than form B, but this is one corpus and one period”."
     ]},
    related:["how-dictionaries-decide","dictionaries-corpora","english-usage-myths"],
    read:[{book:"eling", where:"Background reading: the opening chapter on what linguistics is, on collecting evidence"}],
    sources:[{t:"Corpus of Contemporary American English (COCA)", url:"https://www.english-corpora.org/coca/"}, {t:"English-Corpora.org", url:"https://www.english-corpora.org/"}], checked:"2026-11"},

   {id:"english-usage-myths", title:"Five famous usage myths", aka:["grammar myths","zombie rules"], tags:["usage","grammar","myths"],
    summary:"Split infinitives, stranded prepositions, And or But at the start, singular they and double negatives: where each “rule” came from, and what the evidence shows.",
    levels:{
     starter:[
      "Many “rules” of English are better called myths: they are taught as laws, but the evidence does not support them. Five famous ones are in this entry.",
      {list:["**Never split an infinitive** (*to boldly go*). An objection from the 1800s. People often blame Latin, where the infinitive is one word, but the evidence for that is weak.","**Never end a sentence with a preposition** (*Who did you talk to?*). A preference often linked to Latin, made popular by Dryden in 1672.","**Never start with And or But.** A school shortcut for children who overused them.","**Singular they is new.** It has been used since at least the 1300s.","**Double negatives are illogical.** Many languages use them. English did too."]},
      "Good writers break all five, and major style guides do not forbid them. But a teacher, journal or company may still have a house style that does."
     ],
     builder:[
      {table:[["Myth","Where it came from","Safe advice"],["Never split an infinitive","1800s critics such as Alford (1864); the Latin link is often claimed but weak","Split it when that is clear and natural"],["Never end with a preposition","Dryden (1672) made it popular; Lowth (1762) said stranding is natural in speech","Put the preposition where the sentence sounds natural"],["Never start with And or But","A school shortcut","Fine in most writing; do not overuse"],["Singular they is new","1700s and 1800s grammarians: he for everyone","Standard and widely accepted"],["Double negatives are illogical","Lowth (1762): two negatives destroy each other","Non-standard in writing, but regular"]]},
      "A good answer to a myth has three steps: **acknowledge** the good intention, **give one piece of evidence**, and **offer a practical rule** for the setting. Do not swing to “anything goes”: house style, exams and readers matter."
     ],
     pro:[
      "These five examples share one pattern. A preference of some writers is stated as a law, taught in school, and repeated for generations without checking. The usage it objects to is older than the objection: singular *they* is recorded since at least the 1300s, Chaucer used multiple negation (the Knight “nevere yet no vileynye ne sayde”), and split infinitives and stranded prepositions occur in English writing before the first objections.",
      "Each myth also has real material in it. A split can create a long gap between *to* and the verb, which is hard to read. A fronted preposition is natural in formal relative clauses (*the person to whom I spoke*). Overuse of *And* and *But* at the start does make writing choppy. Singular *they* can be ambiguous in a sentence with two people. And negative concord can mislead a listener who does not use it. Good advice keeps these true points and drops the false rule.",
      "Litotes, as in *not uncommon*, is a different thing from negative concord. In litotes, a negative of an opposite makes a deliberate, weaker positive. In negative concord, each negative word adds to one negative meaning.",
      "In 2015 the American Dialect Society chose singular *they* as its word of the year, and in 2019 Merriam-Webster named *they* its word of the year. The APA *Publication Manual* (7th edition) accepts singular *they*. These facts show where usage and guides stand, not that the question was ever hard."
     ]},
    related:["singular-they-history","descriptive-prescriptive","style-guides-house-style"],
    read:[{book:"eling", where:"Background reading: the opening chapter on what linguistics is, descriptive and prescriptive rules"}],
    sources:[{t:"APA Style: singular they", url:"https://apastyle.apa.org/style-grammar-guidelines/grammar/singular-they"}, {t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"singular-they-history", title:"Singular they", aka:["epicene they","they for one person"], tags:["pronouns","usage","history"],
    summary:"They, them and their used for one person: in English since at least the 1300s, and accepted by major style guides.",
    levels:{
     starter:[
      "**Singular they** means using *they, them* and *their* for one person. *Someone left their umbrella. I hope they come back for it.*",
      "People use it in three main ways. They use it when they do not know a person’s gender, when it does not matter, and for a person who uses *they* as their own pronoun.",
      "It is not new. It has been used in English since at least the 1300s, and famous writers such as Shakespeare and Jane Austen used it. In everyday speech today, it is very common.",
      {key:"*They* for one person is centuries old. The “rule” against it is the newer idea."}
     ],
     builder:[
      "A good comparison is *you*. *You* was once a plural and polite form, and *thou* was used for one person. Over time, *you* took over for both. In standard English, *you are* works for one person or many. In the same way, *they are* works for one person.",
      "Some 18th- and 19th-century grammarians argued that *he* should stand for any person and that *they* must be plural. People then taught this as a rule. Later, many writers and readers found the generic *he* unclear or unfair, and singular *they* became the common solution.",
      {list:["Use it for a person of unknown or unimportant gender: *Each student should bring their book.*","Use it for a person who uses *they*: *Alex said they would call.*","Keep the verb plural: *they are*, even for one person."]},
      "Major style guides now accept it. The APA *Publication Manual* (7th edition) endorses it, and Merriam-Webster named *they* its word of the year for 2019.",
      {tip:"Respect the pronouns that people ask you to use. In a document with a house style, check what the style says."}
     ],
     pro:[
      "Written evidence for singular *they* goes back to the Middle English period, with examples from the late 1300s, and it continued through the Early Modern period and later. It occurs in respected authors in many centuries, and it appears across registers.",
      "The objections date from the 1700s, when grammarians began to codify usage and to prefer a number-matching rule. The idea that the masculine *he* is the correct generic form became a school rule, and it was later criticized on grounds of both clarity and fairness. Experiments and discussions in the later 20th century raised doubts about whether *he* is read as truly generic.",
      "In recent decades the pronoun has taken on a second role: as the pronoun of a particular known person, including a nonbinary person. The American Dialect Society recognized this development with its 2015 word of the year. Guides differ in detail about when to use it and how to handle ambiguity, so for formal publication a writer should check the guide that applies.",
      "There is a practical agreement point worth teaching: the pronoun is plural in form but singular in reference, just as *you* is, so the verb is plural (*they are*), and reflexives vary: *themself* is increasingly used for a singular referent, while *themselves* is still common."
     ]},
    related:["english-usage-myths","descriptive-prescriptive"],
    read:[{book:"eling", where:"The chapter on language variation (sociolinguistics), on language change"}],
    sources:[{t:"APA Style: singular they", url:"https://apastyle.apa.org/style-grammar-guidelines/grammar/singular-they"}, {t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},

   {id:"style-guides-house-style", title:"Style guides, house style and the serial comma", aka:["style sheet","editorial style","Oxford comma"], tags:["style","writing","usage"],
    summary:"A style guide makes writing choices for a group. Follow the one that applies to your reader, and be consistent.",
    levels:{
     starter:[
      "A **style guide** is a book or website that decides writing choices for a group of writers: spelling, punctuation, capital letters, numbers, citations. A **house style** is one organization’s own set of choices, often in a short document called a style sheet.",
      "They exist for **consistency**. Readers trust a text more when it does not change its habits halfway.",
      "The **serial comma** is a good example. Some guides write *red, white, and blue*. Others write *red, white and blue*. Both are standard. It is a style choice, not a grammar rule.",
      {key:"Follow the guide that applies to your reader. When there is none, choose one style and use it every time."}
     ],
     builder:[
      {table:[["Guide","Often used for"],["*Chicago Manual of Style*","Book publishing; history and many humanities subjects"],["APA Publication Manual","Psychology, education and many social sciences"],["MLA Handbook","Language and literature"],["AP Stylebook","News writing in the US"],["*New Hart’s Rules*","Publishing in the UK"]]},
      "Guides disagree on purpose: they serve different readers. The *Chicago Manual of Style* and Oxford University Press style use the serial comma. The AP Stylebook generally leaves it out in simple lists and uses it when it prevents confusion. APA style uses it.",
      "A missing serial comma can make a list unclear: *We thanked our teachers, Kenji and Mei* can mean that Kenji and Mei are the teachers. In 2017 a US appeals court case about overtime pay for delivery drivers turned on a missing serial comma in a state law.",
      "Check that you use the current edition of a guide, since guides are revised from time to time."
     ],
     pro:[
      "Style guides mix three kinds of advice: conventions that the whole community accepts (such as how to cite), choices where reasonable guides differ (serial comma), and usage opinions (such as *which* and *that*). A careful editor separates them. Editors also keep a style sheet for each project, which records the decisions made for that text: spelling variety, hyphenation, capitalization, numbers, and treatment of names and terms.",
      "House style usually overrides a general guide, and a general guide overrides personal taste. If a guide itself is silent, editors fall back on a dictionary that the guide names, and then on consistency. This hierarchy is worth teaching, because it replaces arguments about “correctness” with a clear procedure.",
      "Style guides are also read as statements about audience. News style tends toward short, flexible rules suited to fast work. Academic guides give detailed rules for citation and structure. Inclusive-language sections, now common, reflect changes in usage and public discussion, and they too are choices that a publisher makes.",
      "The aim in teaching is not to memorize any one guide. It is to be able to identify the applicable guide, to look up a question quickly, and to apply the answer consistently across a whole document."
     ]},
    related:["us-uk-conventions","english-usage-myths","descriptive-prescriptive"],
    read:[{book:"eling", where:"Background reading: the opening chapter on what linguistics is, on kinds of rules"}],
    sources:[{t:"APA Style", url:"https://apastyle.apa.org/"}, {t:"The Chicago Manual of Style", url:"https://www.chicagomanualofstyle.org/"}], checked:"2026-11"},

   {id:"us-uk-conventions", title:"American and British written conventions", aka:["US and UK spelling","American vs British English"], tags:["spelling","variation","style"],
    summary:"Two written standards of one language: regular differences in spelling, dates, punctuation, vocabulary and a little grammar.",
    levels:{
     starter:[
      "American and British English are two written standards of the same language. They differ in small, regular ways, and neither one is more correct.",
      {table:[["","US","UK"],["Spelling","color, center, defense","colour, centre, defence"],["Dates","11/23 means November 23","23/11 means 23 November"],["Words","apartment, truck, fall","flat, lorry, autumn"]]},
      "Use one variety for each document, and do not mix them. This course uses US spelling.",
      {key:"Write 6 July 2025 or 2025-07-06 when your readers may be from either country. 06/07/2025 means two different days."}
     ],
     builder:[
      "Many of the American spellings were promoted by Noah Webster’s dictionaries in the early 1800s. Some British spellings are not fixed: *-ize* and *-ise* are both used in the UK, and Oxford University Press style prefers *-ize*.",
      {table:[["Area","US","UK"],["License","license (noun and verb)","licence (noun), license (verb)"],["Program","program","programme (program for computers)"],["Past forms","learned, burned, gotten","learned or learnt, burned or burnt, got"],["Quotation marks","double quotes first; period and comma inside","often single quotes first; punctuation by logic"],["Collective nouns","the team is","the team is or are"]]},
      "Grammar also varies a little: *on the weekend* (US) and *at the weekend* (UK); *I’ve gotten better* (US) and *I’ve got better* (UK).",
      {tip:"Set your spell-checker to the variety you have chosen. It will flag the other one."}
     ],
     pro:[
      "The differences are mostly historical accidents of standardization. British spelling kept many French-derived forms (*colour, centre, defence*), while American dictionaries from the early 1800s simplified some. The pairs are regular enough to teach as rules, but with exceptions: *-ise* verbs such as *advertise* and *revise* are spelled the same in both countries, and the UK uses *program* for computer programs.",
      "Punctuation differs in quotation placement. American practice places commas and periods inside quotation marks. British practice tends to place punctuation by logic, inside the marks only when it belongs to the quoted material. Both are conventions of the written standard.",
      "Differences in grammar are subtler. Both varieties accept both forms in many cases, but the frequencies differ. For example, the UK shows more use of plural verbs with collective nouns, while the US shows more use of *gotten*. Corpus comparison (for example, the US and UK sections of a large corpus) is a good way to test any claim you hear.",
      "For teaching, the main principle is consistency within a text and fit with the reader. Learners should be told that neither is wrong, that mixed spelling in one document looks careless, and that dates and numbers are the places where confusion has real costs."
     ]},
    related:["style-guides-house-style","standard-english-explained","accents-dialects-variation"],
    read:[{book:"eling", where:"The chapter on language variation (sociolinguistics)"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Oxford English Dictionary", url:"https://www.oed.com/"}], checked:"2026-11"},

   {id:"accents-dialects-variation", title:"Accents, dialects and variation", aka:["language variety","sociolinguistics of English"], tags:["variation","accents","dialects"],
    summary:"Everyone speaks a variety. An accent is how you sound; a dialect also includes words and grammar. Variation is normal and rule-governed.",
    levels:{
     starter:[
      "A **variety** is any form of a language used by a group: a region, a social group or a situation. An **accent** is a way of pronouncing a language. A **dialect** differs in words and grammar as well.",
      "Everyone has an accent. “No accent” means “an accent like mine”. And standard English is itself a dialect, one with high prestige, which people speak with many accents.",
      "Varieties that differ from standard English have regular rules. In African American English, *She be working* means “she usually works”. In Irish English, *I’m after eating* means “I have just eaten”. These are not broken English.",
      {key:"An accent tells you where someone is from. It does not tell you how well they think or how well they speak."}
     ],
     builder:[
      "There is no clean line between a language and a dialect. Swedish and Norwegian speakers often understand each other, yet these are called different languages. Many varieties of Chinese that are called dialects cannot be understood by each other. History, politics and identity matter as much as sound.",
      "Speakers often move between varieties depending on the person and place, which linguists call **code-switching**. A person might say *CR* (comfort room) at home in the Philippines and *restroom* in an international seminar. This is a skill.",
      {h:"This course’s reference accents"},
      "For sounds and stress this course uses General American (GA) and Southern British (SSBE). They were chosen because dictionaries and teaching materials use them. They are not the only correct accents. Other varieties are covered in the World Englishes elective.",
      {table:[["Word","GA","SSBE"],["car","/kɑr/","/kɑː/"],["bath","/bæθ/","/bɑːθ/"],["schedule","/ˈskɛdʒul/","/ˈʃedjuːl/"]]}
     ],
     pro:[
      "Sociolinguistic research finds that variation follows social structure: region, class, age, gender, ethnicity and network. It also finds that listeners hold strong attitudes about varieties, and that these attitudes are learned. Judgments such as “lazy” or “uneducated” about a variety are judgments about its speakers, and linguistic analysis finds no support for them. This is sometimes called language ideology, or, when it harms people, linguistic discrimination.",
      "The standard-language ideology holds that one variety is the correct form and others are corruptions of it. Linguists reject this as a description of language, while accepting that standard varieties have real social uses. Education systems often ask for standard English in writing and also respect students’ home varieties, because a learner who can use both has more choices.",
      "Linguists also note that varieties change. A feature that is non-standard in one century may be standard in the next, and the plural *you* shows how a gap in the standard is filled by *y’all*, *youse* and *you guys* in different varieties. Contact between languages, as in English around the world, produces new established varieties with their own norms, which is the topic of the World Englishes elective.",
      "In teaching English as an additional language, the main practical points are these: choose a model accent and variety for practice; aim first at intelligibility; do not treat an accent as an error; and teach learners to understand varieties other than the one they are practicing. For teachers who explain usage, the question to ask is always “wrong, for which reader and setting?”"
     ]},
    related:["standard-english-explained","us-uk-conventions","descriptive-prescriptive"],
    read:[{book:"eling", where:"The chapter on language variation (sociolinguistics)"}],
    sources:[{t:"Linguistic Society of America", url:"https://www.linguisticsociety.org/"}, {t:"Essentials of Linguistics (2nd edition), free web book", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"descriptive-grammar", term:"Descriptive grammar", def:"An account of the patterns that speakers and writers actually use. It reports what people do, as a weather report does.", codex:"descriptive-prescriptive"},
   {id:"prescriptive-grammar", term:"Prescriptive grammar", def:"Advice or rules about which forms people should use. It says what is “right” and “wrong”, as a speed limit does.", codex:"descriptive-prescriptive"},
   {id:"standard-english", term:"Standard English", def:"The variety of English used in education, news, publishing and government, with fairly fixed spelling and grammar. It is a social choice, not a more logical English.", codex:"standard-english-explained"},
   {id:"lexicographer", term:"Lexicographer", def:"A person who writes or edits dictionaries. Their main job is to collect evidence about words and sum it up in entries.", codex:"how-dictionaries-decide"},
   {id:"usage-note", term:"Usage note", def:"A short comment in a dictionary entry about a debated or tricky use of a word, often based on evidence from real text.", codex:"how-dictionaries-decide"},
   {id:"frequency-per-million", term:"Frequency per million words", def:"A rate that tells you how often a word appears in a corpus for each million words. It lets you compare corpora of different sizes.", codex:"reading-a-concordance"},
   {id:"infinitive", term:"Infinitive", def:"The basic form of a verb, often with *to* in front, such as *to go* or *to finish*.", codex:"english-usage-myths"},
   {id:"split-infinitive", term:"Split infinitive", def:"An infinitive with a word, usually an adverb, between *to* and the verb, as in *to boldly go*.", codex:"english-usage-myths"},
   {id:"preposition", term:"Preposition", def:"A short word such as *to*, *with*, *for* or *from* that shows a relationship between a noun and the rest of the sentence.", codex:"english-usage-myths"},
   {id:"preposition-stranding", term:"Preposition stranding", def:"Leaving a preposition at the end of a clause, away from its noun, as in *Who did you talk to?*", codex:"english-usage-myths"},
   {id:"singular-they", term:"Singular they", def:"The use of *they*, *them* and *their* for one person, as in *Someone left their umbrella*. It has been used in English since at least the 1300s.", codex:"singular-they-history"},
   {id:"negative-concord", term:"Negative concord", def:"The use of more than one negative word in a clause to express one negative meaning, as in *I don’t want nothing*. It is regular in many languages and varieties.", codex:"english-usage-myths"},
   {id:"litotes", term:"Litotes", def:"A deliberate way of saying something by negating its opposite, such as *not uncommon* for *fairly common*.", codex:"english-usage-myths"},
   {id:"register", term:"Register", def:"The level of formality of language, chosen to suit the reader, the relationship and the situation. Formal, neutral and informal are common levels.", codex:"style-guides-house-style"},
   {id:"serial-comma", term:"Serial comma", def:"The comma before *and* or *or* in a list of three or more, as in *red, white, and blue*. Also called the Oxford comma.", codex:"style-guides-house-style"},
   {id:"style-guide", term:"Style guide", def:"A book or website that makes writing choices for a group of writers, such as spelling, punctuation, capitals, numbers and citations.", codex:"style-guides-house-style"},
   {id:"house-style", term:"House style", def:"One organization’s own set of writing choices, often written in a style sheet. It applies to the people who write for that organization.", codex:"style-guides-house-style"},
   {id:"writing-convention", term:"Writing convention", def:"A way of writing that a community or country has agreed, such as US *color* and UK *colour*, or the order of day and month in dates.", codex:"us-uk-conventions"},
   {id:"language-variety", term:"Variety", def:"Any form of a language used by a group of people. It may be tied to a place, a social group, an age group or a situation.", codex:"accents-dialects-variation"},
   {id:"dialect", term:"Dialect", def:"A variety of a language that differs from others in vocabulary and grammar, as well as in sound. An accent is only one part of it.", codex:"accents-dialects-variation"},
   {id:"code-switching", term:"Code-switching", def:"Moving between languages or varieties depending on the person, the place or the topic. It is a normal skill of many speakers.", codex:"accents-dialects-variation"},
   {id:"mutual-intelligibility", term:"Mutual intelligibility", def:"The degree to which speakers of two varieties can understand each other. It is a useful clue, but it does not settle whether they are separate languages.", codex:"accents-dialects-variation"},
   {id:"reference-accent", term:"Reference accent", def:"An accent used as a model in teaching materials. This course uses General American (GA) and Southern British (SSBE). It does not mean that they are the best accents.", codex:"accents-dialects-variation"},
   {id:"accent-bias", term:"Accent bias", def:"Judging a person’s intelligence, education or skill from the accent they speak with. Linguistics finds no support for such judgments.", codex:"accents-dialects-variation"},
   {id:"prestige", term:"Prestige", def:"The social value that people give to a variety or a form, because of the power or status of the people who use it. It is not a measure of how good the variety is.", codex:"standard-english-explained"}
  ],
  bank:[
   {"id":"e5u1-q01","lesson":"e5u1-l1","level":1,"q":"What does a **descriptive** approach to grammar do?","options":[{"t":"It records the patterns that speakers and writers actually use.","ok":true,"why":"Right. It reports what is, like a weather report, and it can be checked against evidence."},{"t":"It lists the forms that every speaker must use.","why":"That describes a prescriptive approach, which gives commands."},{"t":"It decides which dialect of English is the best.","why":"Linguists do not rank dialects. Descriptive work records them."},{"t":"It corrects the mistakes in student writing.","why":"Correcting is a teacher’s task and is usually prescriptive. A description reports what people do."}]},
   {"id":"e5u1-q02","lesson":"e5u1-l1","level":1,"q":"Which is the best definition of **standard English**?","options":[{"t":"The most logical form of English.","why":"It became standard through history and power, not because it is more logical."},{"t":"The accent of the south of England.","why":"Standard English is about grammar, words and spelling. It can be spoken with many accents."},{"t":"The English used only in formal writing.","why":"Standard English can be spoken in a relaxed way too. It is not the same as formal."},{"t":"The variety used in education, news, publishing and government, with fairly fixed spelling and grammar.","ok":true,"why":"Right. It is a social choice with prestige, and it is not a more logical English."}]},
   {"id":"e5u1-q03","lesson":"e5u1-l1","level":1,"q":"Which statement describes a pattern that **every** native speaker follows?","options":[{"t":"A sentence must never end with a preposition.","why":"This is a disputed style opinion. Careful writers break it all the time."},{"t":"A sentence must never begin with *because*.","why":"This is a school shortcut. Good writers begin sentences with *because*."},{"t":"An adjective such as *big* goes before the noun in *a big house*, not after it.","ok":true,"why":"Right. No variety of English breaks this pattern, and nobody needs to be taught it."},{"t":"You must use *whom* after every preposition.","why":"This is a formal-style preference. Many educated speakers do not follow it in speech."}]},
   {"id":"e5u1-q04","lesson":"e5u1-l1","level":2,"q":"A coworker says, “We was late.” Mei asks whether this is “not English”. What is the best answer?","options":[{"t":"It is not English, because no native speaker says it.","why":"Many native speakers say it in everyday speech."},{"t":"It is non-standard: it follows a pattern used in some varieties, but standard writing uses *were*.","ok":true,"why":"Right. It is regular and clear, so it is not “not English”. It is a matter of setting."},{"t":"It is standard English, because it is common.","why":"Common does not make it standard. Standard written English uses *we were*."},{"t":"It is only disputed, like a split infinitive.","why":"Careful writers do not defend *we was* in formal writing. It is a mark of non-standard English."}]},
   {"id":"e5u1-q05","lesson":"e5u1-l1","level":2,"q":"Why did many 1700s writers produce rules for English grammar?","options":[{"t":"Many wanted to “fix” the language, and they saw Latin as a model of a logical language.","ok":true,"why":"Right. They copied ideas from Latin grammar and gave their opinions as rules."},{"t":"Parliament had ordered them to write an official grammar.","why":"English has never had an official body or law of this kind."},{"t":"Ordinary speakers had asked for a list of rules.","why":"The rules came from writers and schools, not from ordinary speakers."},{"t":"Before that time English had no grammar.","why":"English always had a grammar. Speakers followed it without a book."}]},
   {"id":"e5u1-q06","lesson":"e5u1-l1","level":2,"q":"Which statement is **prescriptive**?","options":[{"t":"Many speakers in the US use *gotten* as a past participle.","why":"This reports usage, so it is descriptive."},{"t":"The word *ain’t* appears often in song lyrics.","why":"This is an observation about usage, so it is descriptive."},{"t":"Most news writers in a sample used the serial comma.","why":"This is a count of what writers did. It is descriptive."},{"t":"Writers should avoid beginning a sentence with *because*.","ok":true,"why":"Right. “Should” tells people what to do. It does not report what they do."}]},
   {"id":"e5u1-q07","lesson":"e5u1-l1","level":3,"q":"Which statement makes the mistake of turning a description into a command?","options":[{"t":"“Many speakers say *ain’t*, but it is not standard in formal writing.”","why":"This keeps the description and adds a statement about setting. It is a fair summary."},{"t":"“A dictionary can list *ain’t* and label it nonstandard.”","why":"This is a correct description of how dictionaries work."},{"t":"“Many speakers say *ain’t*, so everyone should say it in every setting.”","ok":true,"why":"Right. A report about usage does not tell anyone what they must do, and setting matters."},{"t":"“A linguist records *ain’t* without saying where to use it.”","why":"Recording a word without ordering anyone to use it is what descriptive work does."}]},
   {"id":"e5u1-q08","lesson":"e5u1-l1","level":3,"q":"Sione writes in a job application: “Me and my team was responsible for the project.” Which comment is most accurate?","options":[{"t":"It is not English, so the application should be rejected.","why":"It is understandable. The problem is the setting, not whether it is English."},{"t":"The sentence has non-standard forms, and in an application the standard *My team and I were responsible* is a safer choice.","ok":true,"why":"Right. The forms are regular in some speech, but the setting calls for standard English."},{"t":"It is standard English, since it is common in speech.","why":"Common in speech does not make it standard in writing."},{"t":"It is only a disputed style choice, like a split infinitive.","why":"Careful writers do not disagree about *Me and my team was*. It is a clear non-standard form."}]},
   {"id":"e5u1-q09","lesson":"e5u1-l2","level":1,"q":"What is a **lexicographer**?","options":[{"t":"A person who writes or edits dictionaries.","ok":true,"why":"Right. The job is to collect evidence about words and sum it up in entries."},{"t":"A linguist who studies the sounds of speech.","why":"That is a phonetician, not a lexicographer."},{"t":"A teacher who corrects grammar mistakes.","why":"Lexicographers describe words. They do not mark student work."},{"t":"A judge who decides which words are allowed.","why":"Dictionary editors report use. No one can ban a word by leaving it out."}]},
   {"id":"e5u1-q10","lesson":"e5u1-l2","level":1,"q":"What is a **corpus**?","options":[{"t":"A list of rules for correct grammar.","why":"A corpus is evidence, not a list of rules."},{"t":"A dictionary written for learners.","why":"Some learner’s dictionaries are built from a corpus, but a corpus itself is a collection of text."},{"t":"A set of invented sentences for practice.","why":"A corpus is made of real texts, not invented examples."},{"t":"A large collection of real texts, stored so that you can search it.","ok":true,"why":"Right. It can include news, books, blogs and spoken language."}]},
   {"id":"e5u1-q11","lesson":"e5u1-l2","level":1,"q":"What does a **concordance** show?","options":[{"t":"A list of the most common words in a text.","why":"That is a frequency list. A concordance shows examples in context."},{"t":"The history of a word, with the date it first appeared.","why":"That is the job of a historical dictionary such as the OED."},{"t":"Every example of a word, each on its own line, with the word in the middle and its context on each side.","ok":true,"why":"Right. This layout makes patterns easy to see."},{"t":"A table of grammar rules.","why":"A concordance shows examples, not rules."}]},
   {"id":"e5u1-q12","lesson":"e5u1-l2","level":2,"q":"Daniel finds *irregardless* in a dictionary with the label *nonstandard*. What does this tell him?","options":[{"t":"The word is correct in all writing.","why":"A label of *nonstandard* means the opposite. It marks risk in careful writing."},{"t":"The word is used, but many readers do not accept it in careful writing.","ok":true,"why":"Right. The entry shows use. The label shows the status and gives advice about setting."},{"t":"The dictionary made a mistake by listing it.","why":"Dictionaries list words that people use, and they label the status."},{"t":"The dictionary forbids the word.","why":"Dictionaries do not forbid. They describe and advise."}]},
   {"id":"e5u1-q13","lesson":"e5u1-l2","level":2,"q":"A corpus of 5 million words has 150 examples of the word *whom*. What is the rate per million words?","options":[{"t":"30 per million words","ok":true,"why":"Right. 150 ÷ 5 = 30."},{"t":"750 per million words","why":"You multiplied 150 by 5. To get a rate per million, divide by the number of millions."},{"t":"150 per million words","why":"That is the raw count, not a rate."},{"t":"3 per million words","why":"This comes from dividing by 50. The corpus has 5 million words, so divide by 5."}]},
   {"id":"e5u1-q14","lesson":"e5u1-l2","level":2,"q":"In 20 invented lines of a corpus search for *whom*, 15 lines show it right after a preposition (*to whom*, *with whom*) and 5 show it elsewhere. What is the best conclusion?","options":[{"t":"*Whom* is required after every preposition in English.","why":"The sample cannot show a requirement, and it is only 20 lines."},{"t":"*Whom* is disappearing from English.","why":"A count of one sample cannot show change over time."},{"t":"Nobody uses *whom* outside prepositional phrases.","why":"Five lines show that it also appears elsewhere."},{"t":"In this small sample, *whom* mostly appears right after a preposition.","ok":true,"why":"Right. It reports what the sample shows, and it does not go further than the evidence."}]},
   {"id":"e5u1-q15","lesson":"e5u1-l2","level":3,"q":"Fatima wants to write *gonna* in the abstract of her research paper. The learner’s dictionary labels it *informal*. What should she conclude?","options":[{"t":"*Gonna* is a mistake in all English.","why":"The label says *informal*, not *wrong*. It is normal in speech."},{"t":"The dictionary has listed it, so it suits any text.","why":"A listing shows use. The label shows where it fits."},{"t":"The label advises against it in formal writing, so *going to* is the safer choice.","ok":true,"why":"Right. The label is advice about setting. *Gonna* is normal in speech and in casual writing."},{"t":"She should use it, because a research paper should sound like natural speech.","why":"The register of a research paper is formal. Natural speech is not the model for it."}]},
   {"id":"e5u1-q16","lesson":"e5u1-l2","level":3,"q":"Why is a corpus of newspaper articles a poor guide for deciding how to write a text message to a friend?","options":[{"t":"Newspapers use no real English.","why":"News articles use real, standard English. They simply suit another setting."},{"t":"It shows usage in a different register and setting from the one you want.","ok":true,"why":"Right. A corpus must match your question. News writing is more formal than texting."},{"t":"A corpus can only show words, not sentences.","why":"A corpus can show whole sentences and the contexts of words."},{"t":"Corpora are too small to be useful.","why":"Many are very large. The issue here is the match with your purpose."}]},
   {"id":"e5u1-q17","lesson":"e5u1-l3","level":1,"q":"What is a **split infinitive**?","options":[{"t":"A word, often an adverb, placed between *to* and the verb, as in *to quickly leave*.","ok":true,"why":"Right. English infinitives have two words, so a word can fit between them."},{"t":"An infinitive without *to*, as in *help him leave*.","why":"That is a bare infinitive. It has nothing to split."},{"t":"Two verbs joined by *and*.","why":"That is a pair of verbs, not an infinitive that has been split."},{"t":"A verb ending in *-ing*.","why":"That is a participle or gerund, a different form."}]},
   {"id":"e5u1-q18","lesson":"e5u1-l3","level":1,"q":"Where did the rule “never split an infinitive” come from?","options":[{"t":"From a law passed by parliament.","why":"English has no law of this kind."},{"t":"From the first English dictionaries in the Middle Ages.","why":"The objection is far younger, from the 1800s."},{"t":"From research that showed split infinitives are confusing.","why":"No such research supports the rule. Many split infinitives are clearer than the alternatives."},{"t":"From 19th-century writers, such as Henry Alford (1864), who felt that *to* and its verb belong together.","ok":true,"why":"Right. The objection is from the 1800s. People often link it to Latin, but historians find little evidence for that. English infinitives are two words, and had been split for centuries."}]},
   {"id":"e5u1-q19","lesson":"e5u1-l3","level":1,"q":"How long has singular *they* been in use in English?","options":[{"t":"It was invented in 2015.","why":"In 2015 the American Dialect Society named *they* its word of the year, but the use is centuries older."},{"t":"Since the 1950s.","why":"It is much older than that."},{"t":"Since at least the 1300s.","ok":true,"why":"Right. It is not new. Many major writers have used it."},{"t":"Only since the 19th century.","why":"It appears in writing before that time, from at least the 1300s."}]},
   {"id":"e5u1-q20","lesson":"e5u1-l3","level":2,"q":"Which sentence has a **stranded preposition**?","options":[{"t":"*On which team are you?*","why":"Here the preposition comes first, with its noun phrase."},{"t":"*Which team are you on?*","ok":true,"why":"Right. The preposition *on* stays at the end, away from *which team*."},{"t":"*She walked to the market.*","why":"*To* comes before its noun. Nothing is stranded."},{"t":"*He asked for help early.*","why":"*For* comes before *help*. The sentence does not end on it."}]},
   {"id":"e5u1-q21","lesson":"e5u1-l3","level":2,"q":"Why did teachers pass on the rule “never start a sentence with *And* or *But*”?","options":[{"t":"As a shortcut, because children often overused them.","ok":true,"why":"Right. It most likely began as a teaching tool, and later many people thought it was a law of English."},{"t":"Because Old English forbade it.","why":"Writers have long started sentences this way, including in the King James Bible."},{"t":"Because those words can only join two words, never two clauses.","why":"They join clauses and sentences all the time."},{"t":"Because style guides ban it.","why":"Major guides such as the *Chicago Manual of Style* accept it."}]},
   {"id":"e5u1-q22","lesson":"e5u1-l3","level":2,"q":"Which is the best description of *I didn’t see nobody*?","options":[{"t":"It is illogical, because the speaker really saw somebody.","why":"Listeners understand it as negative, as in Spanish or Chaucer’s English. It is not about arithmetic."},{"t":"It is not English.","why":"Many English speakers use it. It follows a regular pattern."},{"t":"It is a deliberate double negative that means yes, like *not uncommon*.","why":"That effect is litotes. Here every negative word adds to one negative idea."},{"t":"Negative concord: regular in many languages and varieties, but not used in standard written English.","ok":true,"why":"Right. The meaning is clear, and it is non-standard, not illogical."}]},
   {"id":"e5u1-q23","lesson":"e5u1-l3","level":3,"q":"A company’s house style says “Do not use split infinitives in client documents.” Ana thinks the rule is a myth. What should she do?","options":[{"t":"Ignore it, because the rule is a myth.","why":"A myth can still be a house rule. Following the style sheet is part of the job."},{"t":"Argue that the rule is a grammar mistake in her teachers’ English.","why":"The problem is not the grammar. It is a choice by the company."},{"t":"Follow the house style in client documents, and know that it is a style choice rather than a grammar law.","ok":true,"why":"Right. The guide that applies to her reader decides, and she keeps the evidence for other settings."},{"t":"Change all her other writing to avoid them, too.","why":"The house style covers client documents. It does not apply to everything she writes."}]},
   {"id":"e5u1-q24","lesson":"e5u1-l3","level":3,"q":"A teacher marks *Everyone brought their own lunch* wrong. Which evidence best supports the sentence?","options":[{"t":"Many people say it, so it must be right.","why":"That is weak on its own. Frequency alone does not settle setting or style."},{"t":"Singular *they* has been used since at least the 1300s and is accepted by major style guides.","ok":true,"why":"Right. It is evidence about history and about what guides say."},{"t":"Latin grammar allows it.","why":"The question is about English, and Latin grammar is not the test."},{"t":"Grammar is flexible, so nothing is ever wrong.","why":"This is the “anything goes” mistake. Some forms are wrong in some settings."}]},
   {"id":"e5u1-q25","lesson":"e5u1-l4","level":1,"q":"What is **register**?","options":[{"t":"The level of formality of language, chosen to suit the reader and situation.","ok":true,"why":"Right. The same message can be said in formal, neutral or informal register."},{"t":"A list of the words in a dictionary.","why":"That is a word list, not register."},{"t":"The accent a speaker uses.","why":"Accent is about pronunciation. Register is about the choice of words and style."},{"t":"The grammar of a dialect.","why":"Dialect grammar is a different idea. Register is about formality."}]},
   {"id":"e5u1-q26","lesson":"e5u1-l4","level":1,"q":"What is a **house style**?","options":[{"t":"A rule of grammar that all English speakers follow.","why":"That is a grammar rule. A house style is a choice."},{"t":"A style that only appears in houses and homes.","why":"The word refers to the “house” as a company or publisher."},{"t":"A law that controls how English may be written.","why":"No law controls English style. House styles bind only the writers who agree to them."},{"t":"One organization’s own set of writing choices, often written in a style sheet.","ok":true,"why":"Right. It exists for consistency, and it applies to the people who write for that organization."}]},
   {"id":"e5u1-q27","lesson":"e5u1-l4","level":1,"q":"Which is a **US** spelling?","options":[{"t":"*colour*","why":"This is the British spelling. The US spelling is *color*."},{"t":"*centre*","why":"This is British. The US spelling is *center*."},{"t":"*defense*","ok":true,"why":"Right. The British spelling is *defence*."},{"t":"*neighbour*","why":"This is British. The US spelling is *neighbor*."}]},
   {"id":"e5u1-q28","lesson":"e5u1-l4","level":2,"q":"Which style guide **generally uses** the serial comma?","options":[{"t":"The AP Stylebook, in simple lists","why":"AP generally leaves it out in simple lists, and adds it only to prevent confusion."},{"t":"The *Chicago Manual of Style*","ok":true,"why":"Right. Chicago and Oxford University Press style use it."},{"t":"No guide uses it.","why":"Several major guides use it."},{"t":"All style guides use it.","why":"Guides disagree. That is why it is a style choice."}]},
   {"id":"e5u1-q29","lesson":"e5u1-l4","level":2,"q":"Tomás is writing for a UK journal. His draft has *color* and *organize*. What is the best step?","options":[{"t":"Change *color* to *colour*, and check the journal’s guidelines on *-ize* or *-ise*.","ok":true,"why":"Right. UK journals usually want UK spelling, and some British styles accept both *-ize* and *-ise*."},{"t":"Leave everything, because US spelling is the international standard.","why":"Neither variety is “the” standard. Follow the readers’ conventions."},{"t":"Change only the words that he thinks look strange.","why":"This risks mixing styles. Use one variety throughout."},{"t":"Write to the journal that UK spelling is wrong.","why":"The journal has the right to set its style."}]},
   {"id":"e5u1-q30","lesson":"e5u1-l4","level":2,"q":"A form asks for the date, and you want US and UK readers to read it the same way. Which is the safest way to write the day after 2 April 2026?","options":[{"t":"03/04/2026","why":"In the US this means March 4. In the UK it means 3 April."},{"t":"04/03/2026","why":"In the US this means April 3. In the UK it means 4 March."},{"t":"3/4/26","why":"This is also open to both readings, and the short year adds more doubt."},{"t":"3 April 2026","ok":true,"why":"Right. A written month cannot be misread."}]},
   {"id":"e5u1-q31","lesson":"e5u1-l4","level":3,"q":"Mei sends her roommate this text: “Dear Roommate, I wish to inform you that the rice is finished.” What is the main problem?","options":[{"t":"It has a grammar error.","why":"There is no error. The sentence is grammatical."},{"t":"It uses British spelling.","why":"No spelling is involved here."},{"t":"The register is far too formal for a message to a roommate.","ok":true,"why":"Right. The grammar is fine, but the tone does not match the relationship."},{"t":"It is fine, because formal English is always safe.","why":"Being too formal can sound cold or funny. Register should fit the reader."}]},
   {"id":"e5u1-q32","lesson":"e5u1-l4","level":3,"q":"Your journal’s style sheet says “no serial comma”. A dictionary example that you copied uses one. What should you do in your article?","options":[{"t":"Keep the dictionary’s comma, because dictionaries set the standard.","why":"A dictionary example is not a style sheet for your article."},{"t":"Follow the journal’s sheet and leave out the serial comma, unless the list would be unclear.","ok":true,"why":"Right. The guide that applies to your reader decides, and clarity can still call for a comma."},{"t":"Use the comma sometimes and leave it out sometimes.","why":"Inconsistent use is what a style sheet prevents."},{"t":"Ignore the sheet, because the serial comma is grammatically correct.","why":"Both are correct. The question is which style your reader expects."}]},
   {"id":"e5u1-q33","lesson":"e5u1-l5","level":1,"q":"What is an **accent**?","options":[{"t":"A way of pronouncing a language.","ok":true,"why":"Right. Everyone has an accent."},{"t":"A way of using different words and grammar.","why":"That describes a dialect. An accent is only about sound."},{"t":"A mistake in pronunciation.","why":"An accent is not a mistake. It is a normal feature of speech."},{"t":"A formal style of speaking.","why":"That is register. Accent is about sounds."}]},
   {"id":"e5u1-q34","lesson":"e5u1-l5","level":1,"q":"What is a **dialect**?","options":[{"t":"A way of pronouncing words only.","why":"That describes an accent."},{"t":"A language that has no grammar rules.","why":"Dialects have regular rules."},{"t":"A less correct form of a language.","why":"This is a value judgment, not a linguistic definition."},{"t":"A variety of a language that differs in vocabulary and grammar, as well as in sound.","ok":true,"why":"Right. An accent is one part of a dialect."}]},
   {"id":"e5u1-q35","lesson":"e5u1-l5","level":1,"q":"What does **reference accent** mean in this course?","options":[{"t":"The only accents that are correct English.","why":"Many other accents are fully valid."},{"t":"The accents spoken by the majority of English speakers.","why":"The choice is made for teaching, not because most speakers use them."},{"t":"An accent used as a model for examples, such as General American or Southern British.","ok":true,"why":"Right. It is a teaching choice, and it does not mean that these accents are better."},{"t":"Accents that an official body approves.","why":"No official body exists for English."}]},
   {"id":"e5u1-q36","lesson":"e5u1-l5","level":2,"q":"Why does “mutual intelligibility” not settle whether two varieties are separate languages?","options":[{"t":"Because no two varieties can be understood by each other.","why":"Many can be understood. That is the point of the test."},{"t":"Speakers of Swedish and Norwegian often understand each other, yet these are called different languages.","ok":true,"why":"Right. History, politics and identity matter as well as sound."},{"t":"Because linguists do not use the word *language*.","why":"They do. The question is how to draw a boundary."},{"t":"Because dialects never differ in vocabulary.","why":"They often differ in vocabulary, and this has no bearing on the test."}]},
   {"id":"e5u1-q37","lesson":"e5u1-l5","level":2,"q":"Which statement about non-standard varieties of English is accurate?","options":[{"t":"Linguists find that they have regular rules, such as habitual *be* in African American English.","ok":true,"why":"Right. Non-standard does not mean without rules."},{"t":"They are broken forms of standard English.","why":"They are varieties with their own rules, not broken copies."},{"t":"They have no grammar.","why":"Every variety has a grammar."},{"t":"They can only be spoken by people with little education.","why":"Variety is not a sign of education. Many educated people use their own variety at home."}]},
   {"id":"e5u1-q38","lesson":"e5u1-l5","level":2,"q":"Hana speaks relaxed Kansai-ben at home and standard Japanese at work. Which term describes this best?","options":[{"t":"Mutual intelligibility.","why":"This is a test for whether speakers of two varieties can understand each other."},{"t":"Prescriptive grammar.","why":"That is about rules that say what people should do."},{"t":"Negative concord.","why":"That is about using more than one negative word for one negative idea."},{"t":"Code-switching: moving between varieties to suit the person and place.","ok":true,"why":"Right. It is a skill that many speakers use every day."}]},
   {"id":"e5u1-q39","lesson":"e5u1-l5","level":3,"q":"A student says: “I have no accent. My teacher has an accent.” What is the best response?","options":[{"t":"The student is right, because standard English is spoken without an accent.","why":"Standard English is spoken with many accents."},{"t":"Only people who speak a second language have an accent.","why":"Native speakers have accents too."},{"t":"Everyone has an accent. “No accent” usually means “an accent like mine”.","ok":true,"why":"Right. Accent is a normal part of speech for every speaker."},{"t":"The teacher should correct her accent immediately.","why":"An accent is not a mistake, and a clear accent needs no correction."}]},
   {"id":"e5u1-q40","lesson":"e5u1-l5","level":3,"q":"Which statement about General American and Southern British is accurate?","options":[{"t":"They are the only correct accents of English.","why":"Many educated speakers have other accents. “Correct” does not apply to accents."},{"t":"They are reference accents chosen for teaching, and many other accents are equally valid.","ok":true,"why":"Right. The World Englishes elective covers other accents in detail."},{"t":"They are spoken by most English speakers in the world.","why":"The choice is for teaching and materials, not because most speakers use them."},{"t":"They are approved by an official academy of English.","why":"English has no official academy."}]}
  ]
});
