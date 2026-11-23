/* How English Works · Unit 5 (e5u5) · Vocabulary in use */
ICA.addUnit({
  id:"e5u5", track:"e5", n:5, title:"Vocabulary in use", icon:"🧩",
  blurb:"Knowing a word is more than knowing its meaning. You will learn which words go together (collocation), how phrasal verbs work, why idioms and ready-made phrases are worth learning in chunks, and how register and connotation change what a word says. You will end with loanwords and false friends, including katakana English such as マンション and クレーム, and with English words that come from Japanese.",
  goals:[
    "Explain what a collocation is, show why it cannot be worked out by logic, and check a doubtful one with a learner’s dictionary and a corpus",
    "Use phrasal and other multi-word verbs correctly: particles, separable and inseparable patterns, literal and idiomatic meanings, and formality",
    "Tell idioms from fixed phrases and chunks, choose safe idioms, and decide when an idiom will confuse an international listener",
    "Choose words for register and connotation, and use softeners to make requests and disagreement polite",
    "Explain loanwords, false friends and wasei-eigo kindly and accurately, and recognize English words that come from Japanese"
  ],
  read:[
    {book:"eling", where:"The Semantics chapter, sections “The mental lexicon” and “The nature of lexical meaning”; and the Historical Linguistics chapter, sections “Lexical change” and “Semantic change”", note:"Cited by topic. Read the Semantics sections after Lesson 1 and the Historical Linguistics sections after Lesson 5. The book is written for linguistics students, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u5-l1", title:"Collocation: words that go together", minutes:55,
   hook:{q:"The weather forecast says there will be a lot of rain tonight. Which phrase would a native speaker most likely use?", options:["strong rain","heavy rain","big rain","thick rain"], answer:1, reveal:"**Heavy rain.** *Strong* and *heavy* both express “a lot of”, but English connects each one to different nouns. We say *heavy rain* and *heavy traffic*, but *strong wind* and *strong coffee*. Nobody decided this by logic. Words have favorite partners. This lesson is about those partnerships, called collocations, and how to learn and check them."},
   goals:[
     "Explain what a collocation is and name its main patterns",
     "Use make, do, take and have with the usual nouns, and note US and UK differences",
     "Explain why collocations cannot be worked out from meaning or from translation",
     "Check a doubtful collocation with a learner’s dictionary and a free corpus, and describe what the evidence shows"
   ],
   learn:[
    {h:"Words have favorite partners", body:[
      {lead:"You can know every word in a sentence and still write something that sounds odd to a native speaker."},
      "Take *I did a big mistake in my report.* Every word is a real English word, and the grammar is fine. A reader will understand it at once. But it sounds foreign, because English speakers say *make a mistake*, not *do a mistake*. The word that causes the problem is *did*.",
      "A [[hew-collocation|collocation]] is a combination of words that often appear together, more often than chance would predict. *Heavy rain*, *make a decision*, *fully aware* and *a piece of advice* are collocations. The parts are called **collocates**: *heavy* is a collocate of *rain*.",
      "Collocations are not the same as grammar rules. A grammar rule tells you that *the cat* is possible and *cat the* is not. A collocation tells you something softer. *Strong rain* is possible in the sense that people will understand it. It is not what native speakers usually say. The usual choice is *heavy rain*.",
      {key:"A collocation is a habit of the language. Learning words means learning their usual partners, not only their meanings."},
      "This is why a learner’s English can be correct and still sound “translated”. The grammar is right. Some word choices are not the ones that speakers expect."
    ]},
    {h:"The main patterns", body:[
      "Collocations come in several patterns. It helps to learn them as whole phrases, not as separate words.",
      {table:[["Pattern","Examples","Notes"],["verb + noun","make a decision, take a risk, catch a cold, pay attention","The most common source of learner errors"],["adjective + noun","heavy traffic, strong wind, high price, fast food","The same meaning, different partners"],["adverb + adjective","fully aware, deeply grateful, highly unlikely, bitterly cold","Many adverbs go with only a few adjectives"],["verb + adverb","strongly recommend, firmly believe, sleep soundly","The adverb often adds degree or manner"],["noun + noun","a piece of advice, a round of applause, a sense of humor","Some help to count nouns such as *advice*, which has no plural"]]},
      "Some verbs help to form a very large number of collocations. They are **light verbs**: *make*, *do*, *take*, *have*, *give* and *get*. A [[hew-light-verb|light verb]] carries little meaning of its own. The noun carries the meaning. In *take a shower*, the action is in *shower*, and *take* only helps to build the phrase. That is why the verb is hard to guess. Nothing in the idea of a shower makes *take* more logical than *have* or *do*.",
      {h:"Make, do, take, have"},
      "These four verbs cause many errors. There are tendencies, but they are not rules. *Make* often goes with things that you create or produce: a plan, a noise, a cake, a decision. *Do* often goes with tasks and activities in general: the dishes, homework, research, a job. Many exceptions exist, so the safe way is to learn each phrase as a unit.",
      {table:[["Verb","Common collocations"],["make","a mistake, a decision, progress, a plan, an effort, a noise, money, a phone call, an appointment, a suggestion, a difference"],["do","homework, the dishes, the laundry, research, your best, a favor, damage, harm, business, an exercise"],["take","a break, a photo, a risk, a chance, a look, a nap, a test, a bus, medicine"],["have","a look, a break, lunch, a conversation, a good time, a headache, an idea"]]}
    ]},
    {h:"US and UK differences", body:[
      "Collocations differ between varieties too. US and UK English each have their own preferences. Dictionaries mark many of them. Here are some that are well documented.",
      {table:[["Idea","Usual in US English","Usual in UK English"],["wash your body","take a bath, take a shower","have a bath, have a shower (take is also heard)"],["decide","make a decision","make a decision, and also take a decision"],["fill in a form","fill out a form","fill in a form (fill out is also used)"],["be tested","take a test or an exam","sit an exam or take an exam"]]},
      "The safe habit is the same everywhere. If you write for readers in one place, choose the collocations of that place and use them consistently. If you are unsure, a dictionary shows which variety a phrase belongs to."
    ]},
    {h:"Why you cannot work it out", body:[
      {fig:'<svg viewBox="0 0 340 240"><text x="170" y="20" text-anchor="middle">Same meaning, different partners</text><text class="s" x="86" y="44" text-anchor="middle">Usual</text><text class="s" x="254" y="44" text-anchor="middle">Not usual</text><rect class="d-sage" x="10" y="54" width="152" height="34" rx="8" stroke-width="2"/><text x="86" y="76" text-anchor="middle">heavy rain</text><rect class="d-rose" x="178" y="54" width="152" height="34" rx="8" stroke-width="2"/><text x="254" y="76" text-anchor="middle">strong rain</text><rect class="d-sage" x="10" y="100" width="152" height="34" rx="8" stroke-width="2"/><text x="86" y="122" text-anchor="middle">heavy traffic</text><rect class="d-rose" x="178" y="100" width="152" height="34" rx="8" stroke-width="2"/><text x="254" y="122" text-anchor="middle">strong traffic</text><rect class="d-sage" x="10" y="146" width="152" height="34" rx="8" stroke-width="2"/><text x="86" y="168" text-anchor="middle">strong coffee</text><rect class="d-rose" x="178" y="146" width="152" height="34" rx="8" stroke-width="2"/><text x="254" y="168" text-anchor="middle">heavy coffee</text><rect class="d-sage" x="10" y="192" width="152" height="34" rx="8" stroke-width="2"/><text x="86" y="214" text-anchor="middle">high price</text><rect class="d-rose" x="178" y="192" width="152" height="34" rx="8" stroke-width="2"/><text x="254" y="214" text-anchor="middle">tall price</text></svg>', alt:"Two columns of four phrases. Usual: heavy rain, heavy traffic, strong coffee, high price. Not usual: strong rain, strong traffic, heavy coffee, tall price.", cap:"Words with a similar meaning have different partners."},
      "Learners often try to reason their way to the right word. That fails for two reasons.",
      {h:"Synonyms do not swap"},
      "Words with similar meanings do not share all their partners. *Tall* and *high* both describe height, yet we say *a tall man*, not *a high man*, and *a high price*, not *a tall price*. A building is usually *tall*, and a mountain is *high*. A *quick* look and a *fast* look are close in meaning, but *a quick look* is the usual phrase, and *fast food* is the usual phrase, not *quick food*.",
      {h:"Translation does not help"},
      "Each language has its own partnerships. The same idea can use different words in different languages, and a word-for-word translation often produces a collocation that does not exist.",
      {ex:"Japanese weather forecasts use 強い雨 (*tsuyoi ame*, “strong rain”) for heavy rain. The adjective 強い means “strong”, so many Japanese learners write *strong rain*. This is a sensible guess from Japanese, and it shows how collocations work: the partnership is real in Japanese and not in English. Another example: Japanese says 薬を飲む (*kusuri o nomu*, “drink medicine”), while English says *take medicine*. Neither language is more logical.", label:"Compared with Japanese"},
      "In both cases a learner is not making a “thinking error”. The learner has not yet met the partnership. The cure is exposure to real English and the habit of noting whole phrases."
    ]},
    {h:"Strong, weak and free combinations", body:[
      "Not every pair of words is equally tied. It is useful to see a scale.",
      {list:["**Free combinations.** Almost any partner works: *a red car*, *a green car*, *a new car*. The meaning is easy to guess from the parts.","**Collocations.** Some partners are much more usual than others: *heavy rain*, *make a decision*. The meaning is clear, but the choice of word is fixed by habit.","**Fixed phrases and idioms.** The words are locked, and sometimes the meaning is not the sum of the parts: *by the way*, *kick the bucket*. Lesson 3 returns to these."]},
      "Collocations are in the middle. They are the group where learners gain most from careful attention. Good writers also play with collocations on purpose. A poet may write *a tall silence*. This works because readers know the usual pattern and notice the change. You need to know the usual pattern before you can break it well."
    ]},
    {h:"How to learn and check collocations", body:[
      "Here are habits that work.",
      {ol:["**Write whole phrases.** In your notebook, write *make a mistake*, not *mistake*. Add a short example sentence.","**Learn the noun with its verbs.** When you meet *decision*, find out its partners: *make a decision*, *reach a decision*, *a difficult decision*.","**Read learner dictionaries closely.** Many entries in the Cambridge Dictionary and the Oxford Learner’s Dictionaries show typical partners in examples, and some entries have a box of collocations.","**Check a doubt with a corpus.** A [[hew-corpus|corpus]] is a large collection of real text. It lets you compare two candidates and see which one people use more."]},
      {tip:"If a phrase you wrote feels odd, try changing only one word and compare. For example, search both *heavy rain* and *strong rain*. Changing one word at a time shows you where the habit is."},
      "In the Corpus of Contemporary American English (COCA) at english-corpora.org (free registration needed), you can search for a phrase and see how many examples it has, or ask for the collocates of a word and look at the partners the corpus finds most often. The menus change from time to time, so look for an option named *Collocates* or *List*, and read the instructions on the site. For *rain*, you should expect *heavy* to be among the most common adjectives before it. For *strong rain*, you should expect far fewer results. Use these results as general evidence, and read the example lines yourself."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["There is a logical reason for each collocation.","Some have a history, but most are habits. You cannot work them out."],["A wrong collocation makes the sentence wrong.","The meaning is usually clear. The sentence sounds less natural, and it may lose marks in an exam or sound odd in a job application."],["Collocations are only verb + noun.","They also include adjectives, adverbs and nouns, and every pattern in the table."],["Synonyms always replace each other.","Synonyms share some partners, not all."],["Native speakers always agree.","Collocations vary between regions, and some phrases are changing. Check a dictionary or a corpus."]]},
      {terms:["hew-collocation","hew-light-verb","hew-corpus"]}
    ]},
    {h:"Why this matters to you", body:[
      "Collocation is where many fluent learners still sound a little “foreign”. Fixing it is one of the quickest ways to sound natural, because you only need to learn phrases. It also helps your listening and reading: when you know the usual partners, you can predict the next word.",
      "If you teach English, explain collocation early. Learners often think they have a vocabulary problem when they have a partner problem. Giving them the whole phrase helps more than giving them another word."
    ]}
   ],
   try:[
    {id:"e5u5-l1-x1", type:"mcq", q:"Which sentence sounds most natural?", options:[
      {t:"We had heavy traffic on the way home.", ok:true, why:"Right. *Heavy traffic* is the usual collocation."},
      {t:"We had strong traffic on the way home.", why:"*Strong* does not go with *traffic*. The meaning is understood, but it sounds foreign."},
      {t:"We had big traffic on the way home.", why:"*Big* does not go with *traffic* in English. We use *heavy*."},
      {t:"We had hard traffic on the way home.", why:"*Hard* is not a collocate of *traffic*. Choose *heavy*."}
    ]},
    {id:"e5u5-l1-x2", type:"sort", q:"Sort each noun by the verb that usually goes with it: *make* or *do*.", buckets:["make","do"], items:[
      {t:"a mistake", b:0, why:"*Make a mistake* is the fixed collocation."},
      {t:"homework", b:1, why:"*Do homework* is the usual phrase. *Make homework* is a common learner error."},
      {t:"a decision", b:0, why:"We *make* a decision. (UK English also uses *take a decision*.)"},
      {t:"the dishes", b:1, why:"*Do the dishes* means to wash them after a meal."},
      {t:"progress", b:0, why:"*Make progress* is the usual phrase."},
      {t:"research", b:1, why:"We *do* research. *Carry out research* is a formal alternative."},
      {t:"a phone call", b:0, why:"We *make* a phone call. We also *give someone a call* and *call* them."},
      {t:"your best", b:1, why:"*Do your best* is a fixed phrase."}
    ]},
    {id:"e5u5-l1-x3", type:"match", q:"Match each word to the noun it usually goes with.", pairs:[
      ["heavy","traffic","*Heavy traffic* is a very common collocation. *Strong traffic* is not used."],
      ["strong","coffee","*Strong coffee* means coffee with a lot of flavor and caffeine."],
      ["high","temperature","We say *a high temperature*. We do not say *a tall temperature*."],
      ["fast","food","*Fast food* is food that is prepared and served quickly. It is a very strong collocation."],
      ["tall","tree","We use *tall* for trees, people and many buildings."]
    ]},
    {id:"e5u5-l1-x4", type:"spot", q:"Kaito, a first-year student in information engineering, wrote this message to an exchange student. Tap each phrase that is **not the usual collocation**.", ask:"not the usual collocation", parts:[
      "Hi Emma, ",
      {t:"I did a mistake in my report", flag:true, why:"We say *make a mistake*."},
      ", so I need to ",
      {t:"take a photo", flag:false, why:"This is natural. *Take a photo* is the usual phrase."},
      " of the new data. Yesterday we had ",
      {t:"strong rain", flag:true, why:"The usual phrase is *heavy rain*. In Japanese 強い雨 is normal, so this is a natural first guess."},
      ", so I ",
      {t:"made my homework", flag:true, why:"We *do* homework."},
      " at home. Thank you for ",
      {t:"your advice", flag:false, why:"This is natural. *Thank you for your advice* is a common phrase."},
      ". Let’s ",
      {t:"take a break", flag:false, why:"This is natural. *Take a break* is the usual phrase."},
      " soon."
    ]},
    {id:"e5u5-l1-x5", type:"mcq", q:"Amara writes for a UK charity. Which sentence uses a collocation that is typical of UK English?", options:[
      {t:"I’m going to have a bath before dinner.", ok:true, why:"Right. *Have a bath* is the usual UK phrase. US speakers more often say *take a bath*."},
      {t:"I’m going to do a bath before dinner.", why:"*Do* does not go with *bath* in either variety."},
      {t:"I’m going to make a bath before dinner.", why:"*Make a bath* is not used. To prepare the water, we say *run a bath*."},
      {t:"I’m going to give a bath before dinner.", why:"*Give a bath* means to wash someone else, for example a baby or a dog."}
    ]},
    {id:"e5u5-l1-x6", type:"number", q:"This is an invented example for practice. In a practice corpus of 2,000,000 words, *heavy rain* appears 46 times and *strong rain* appears 2 times. How many times more often does *heavy rain* appear than *strong rain*?", answer:23, tol:0, unit:"times", why:"Divide 46 by 2 to get 23. Both phrases come from the same corpus, so you can compare the raw counts directly. In a real search, read the example lines too, because some hits may use the words in other ways.", wrongs:[
      {v:44, tol:0, why:"You subtracted (46 − 2). The question asks how many times more often, which is a division."},
      {v:48, tol:0, why:"You added the two counts. Divide instead to find how many times larger one is."},
      {v:0.04, tol:0.01, why:"You divided 2 by 46. That tells you how large *strong rain* is compared with *heavy rain*. Turn it around."}
    ]},
    {id:"e5u5-l1-x7", type:"order", q:"Put these steps in a good order for checking a doubtful collocation.", items:[
      {t:"Notice that a phrase feels odd, and write down the two or three alternatives", why:"Start by naming the candidates. You cannot compare what you have not written down."},
      {t:"Look up the noun in a learner’s dictionary and read its examples", why:"It is quick, and it shows the usual partners and any US or UK label."},
      {t:"Search the candidates in a corpus and compare how many examples each has", why:"A corpus gives evidence from real writing and speech."},
      {t:"Read some of the example lines and note the text types", why:"The numbers alone can mislead. The lines show how people use the phrase."},
      {t:"Write the whole phrase, with an example sentence, in your notebook", why:"The last step makes the result stay in your memory."}
    ]},
    {id:"e5u5-l1-x8", type:"explain", q:"Toby taught English in the Japanese countryside for two years and is now a master’s student in Japanese linguistics. One of his old students writes: “Why can’t I say *strong rain*? In Japanese we say 強い雨 (*tsuyoi ame*), and 強い means *strong*.” Write the explanation Toby could give.", size:"3–5 sentences", hint:"Is it a grammar rule or a habit? Does Japanese use the same partners as English? What would you tell the student to do?", model:"Your guess makes sense, because 強い雨 is a normal phrase in Japanese and *strong* is a usual translation of 強い. But collocations are habits of each language, not logic. English speakers say *heavy rain* and keep *strong* for things like *wind* and *coffee*. People will understand *strong rain*, so it is not a grammar error, but it sounds a little foreign. The best advice is to learn *heavy rain* as one phrase and to note other partners of *heavy*, such as *heavy traffic* and *heavy snow*. A dictionary or a corpus can confirm a phrase when you are unsure.", points:["Accepts that the guess is sensible, because the Japanese phrase exists","Says that a collocation is a habit of each language and not a grammar rule","Gives the English partners: *heavy rain*, with *strong* used for *wind* and *coffee*","Gives practical advice: learn the whole phrase, and check with a dictionary or corpus"]}
   ],
   apply:{
    intro:"Test collocations with real evidence. Everything here is free. COCA at english-corpora.org needs a free account, and free accounts may have daily search limits, so check the site’s current terms.",
    tasks:[
     {t:"Check two candidates in a dictionary", how:[
       "Open a free learner’s dictionary such as the Cambridge Dictionary, the Oxford Learner’s Dictionaries or Merriam-Webster.",
       "Look up *rain*, *traffic* and *decision*. Write down the adjectives and verbs that the examples or the collocation boxes show.",
       "Choose three phrases and write one short sentence for each."
     ], write:"rain: … traffic: … decision: … my three sentences…"},
     {t:"Run a corpus check", how:[
       "Register for free at english-corpora.org and open COCA.",
       "Search for *heavy rain* and then *strong rain*. Compare how many examples each phrase has. Read ten example lines for each.",
       "Then look for the collocates of *rain*, for example with the Collocates or List option. Write down the five adjectives that appear most often before it.",
       "Write what you found in general terms: which phrase is clearly more usual, and what kinds of text the examples come from."
     ], write:"Phrase 1… phrase 2… what I noticed… adjectives before rain… my conclusion and one limit of this evidence…"},
     {t:"Start a collocation page", how:[
       "In a notes app or notebook, make a page called “Make, do, take, have”.",
       "For one week, add every phrase with these four verbs that you meet in reading or listening. Write the full phrase and the place where you met it.",
       "At the end of the week, sort your phrases by verb and check any doubtful one in a dictionary."
     ], write:"make: … do: … take: … have: … phrases I was unsure about…"}
    ],
    proof:"A set of dictionary notes on three nouns and their partners. A short corpus comparison of *heavy rain* and *strong rain* that you can explain in general terms. A one-week page of make, do, take and have phrases."
   },
   read:[
    {book:"eling", where:"Background reading: the Semantics chapter, sections “The mental lexicon” and “The nature of lexical meaning”", note:"These sections explain how words are stored and what a word’s meaning includes."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u5-l2", title:"Phrasal and multi-word verbs", minutes:60,
   hook:{q:"Hana wants a heater switched off. Which of these is NOT possible in standard English?", options:["Turn the heater off.","Turn off the heater.","Turn it off.","Turn off it."], answer:3, reveal:"**“Turn off it.”** With a noun, you can put the object on either side of *off*: *turn off the heater* or *turn the heater off*. With a pronoun such as *it*, *them* or *her*, the pronoun must go in the middle: *turn it off*. Learners often meet this rule late. In this lesson you will see which verbs separate, which do not, and why the meaning of these verbs is so hard to guess."},
   goals:[
     "Name the three types of multi-word verb and give an example of each",
     "Place a pronoun or noun object correctly with separable and inseparable verbs",
     "Tell a literal use from an idiomatic use, and see that one verb can have many meanings",
     "Choose between a phrasal verb and a single verb for the right level of formality",
     "Look up a multi-word verb in a learner’s dictionary and read its pattern"
   ],
   learn:[
    {h:"Verbs with small words attached", body:[
      {lead:"*Give up*, *look after*, *put up with*: these are verbs that come with small words, and the small word changes the meaning."},
      "Many English verbs join with a short word such as *up*, *off*, *out*, *after* or *with*. The result often means something quite different from the verb alone. *Give* means to hand something over. *Give up* means to stop trying. *Look* is what you do with your eyes. *Look after* means to take care of. You cannot see the meaning in the parts, so you have to learn each one.",
      "Textbooks use several names for these verbs, and the names differ from book to book. In this course we use **multi-word verb** as the big term and divide it into three types.",
      {table:[["Type","Pattern","Examples","Object"],["[[hew-phrasal-verb|Phrasal verb]]","verb + adverb [[hew-particle|particle]]","turn off, pick up, give up, put off","Often can be separated"],["Prepositional verb","verb + preposition","look after, depend on, listen to, deal with","Never separated"],["Phrasal-prepositional verb","verb + particle + preposition","put up with, look forward to, run out of, get along with","Never separated"]]},
      "Many learner books call all three types “phrasal verbs”. That is fine in everyday use. The difference matters for word order, as the next sections show.",
      {tip:"A **particle** is a short word such as *up*, *off* or *out* that belongs to the verb. In *turn off the light*, *off* is a particle. In *look after the baby*, *after* is a preposition that links the verb to the noun phrase *the baby*."}
    ]},
    {h:"Literal, partly literal and idiomatic", body:[
      "Not every verb followed by a small word is a phrasal verb. Compare these sentences.",
      {table:[["Sentence","What is happening"],["She ran up the hill.","*Run* and *up* each keep their own meaning. This is an ordinary verb and a preposition. It is not a phrasal verb."],["She picked up the box.","*Pick up* is partly literal: you lift it. The particle adds the direction."],["She picked up some Spanish in Madrid.","Idiomatic: she learned it in an informal way, without a class. You cannot guess it from *pick* and *up*."]]},
      "One verb can have many meanings. A dictionary will list them separately. Here is *take off*.",
      {table:[["Meaning","Example"],["remove clothes or an object","Take off your coat."],["leave the ground (a plane)","The plane took off at noon."],["start to succeed quickly","Her new business took off."],["not work for a time","I’m taking Friday off."]]},
      "Particles do have common ideas. *Up* often shows a direction or a result that is finished (*eat up*, *use up*). *Off* often shows something separate or something that stops (*cut off*, *switch off*). *Out* often shows something leaving or going to an end (*run out*, *sort out*). These are only hints. They are not rules, and a particle can mean different things in different verbs.",
      {ex:"A teacher asks, “Who can help me hand out the papers?” A new learner hears *hand* and *out* and thinks of passing something outside the room. In this phrase *hand out* means “give one to each person”. The particle *out* here shows distribution, and the learner can work this out only after meeting a few examples.", label:"Worked example"},
      {h:"A quick stress test"},
      "In speech, there is a useful clue from stress, which you met in Unit 3. In a phrasal verb, the particle usually carries the stress: *pick it UP*, *give UP*. In a prepositional verb, the verb is usually stressed: *LOOK after her*, *LISTEN to it*. If you can say the verb with the particle stressed, the particle is probably an adverb and not a preposition."
    ]},
    {h:"Separable and inseparable", body:[
      {fig:'<svg viewBox="0 0 340 236"><text x="170" y="20" text-anchor="middle">Phrasal verb: turn off</text><rect class="d-sage" x="4" y="30" width="88" height="30" rx="7" stroke-width="2"/><text x="48" y="50" text-anchor="middle">turn</text><rect class="d-lup" x="98" y="30" width="88" height="30" rx="7" stroke-width="2"/><text x="142" y="50" text-anchor="middle">the light</text><rect class="d-sage" x="192" y="30" width="88" height="30" rx="7" stroke-width="2"/><text x="236" y="50" text-anchor="middle">off</text><text x="310" y="50" text-anchor="middle">OK</text><rect class="d-sage" x="4" y="68" width="88" height="30" rx="7" stroke-width="2"/><text x="48" y="88" text-anchor="middle">turn</text><rect class="d-sage" x="98" y="68" width="88" height="30" rx="7" stroke-width="2"/><text x="142" y="88" text-anchor="middle">off</text><rect class="d-lup" x="192" y="68" width="88" height="30" rx="7" stroke-width="2"/><text x="236" y="88" text-anchor="middle">the light</text><text x="310" y="88" text-anchor="middle">OK</text><rect class="d-sage" x="4" y="106" width="88" height="30" rx="7" stroke-width="2"/><text x="48" y="126" text-anchor="middle">turn</text><rect class="d-lup" x="98" y="106" width="88" height="30" rx="7" stroke-width="2"/><text x="142" y="126" text-anchor="middle">it</text><rect class="d-sage" x="192" y="106" width="88" height="30" rx="7" stroke-width="2"/><text x="236" y="126" text-anchor="middle">off</text><text x="310" y="126" text-anchor="middle">OK</text><rect class="d-sage" x="4" y="144" width="88" height="30" rx="7" stroke-width="2"/><text x="48" y="164" text-anchor="middle">turn</text><rect class="d-sage" x="98" y="144" width="88" height="30" rx="7" stroke-width="2"/><text x="142" y="164" text-anchor="middle">off</text><rect class="d-rose" x="192" y="144" width="88" height="30" rx="7" stroke-width="2"/><text x="236" y="164" text-anchor="middle">it</text><text x="310" y="164" text-anchor="middle">no</text><text class="s" x="170" y="200" text-anchor="middle">Pronoun objects go in the middle.</text><text class="s" x="170" y="220" text-anchor="middle">Noun objects can go on either side.</text></svg>', alt:"Four rows of three boxes showing word order with turn off. Turn, the light, off is OK. Turn, off, the light is OK. Turn, it, off is OK. Turn, off, it is not possible. A note says pronoun objects go in the middle and noun objects can go on either side.", cap:"With a phrasal verb, a noun object can go on either side of the particle. A pronoun object must go in the middle."},
      "Word order is the most practical difference between the three types.",
      {h:"Separable phrasal verbs"},
      "With most phrasal verbs that take an object, you can split the verb and the particle. A noun object can go in either place. A **pronoun** object (*it*, *them*, *her*, *me*, *this*) must go between them.",
      {list:["*She picked up the box.* / *She picked the box up.* / *She picked it up.* (not *She picked up it.*)","*They called off the match.* / *They called the match off.* / *They called it off.*","*Write down the number.* / *Write the number down.* / *Write it down.*"]},
      "Why does this happen? The pronoun is short and refers to something already known. English tends to place short, known information early and to stress the particle at the end: *pick it UP*. A long noun phrase works the other way. It sounds heavy in the middle, so it tends to go after the particle: *turn off the lights in the whole building* sounds better than *turn the lights in the whole building off*. This is a tendency, not a law.",
      {h:"Inseparable verbs"},
      "Prepositional verbs and phrasal-prepositional verbs never split. The preposition belongs with the noun phrase that follows it.",
      {list:["*She looks after her grandmother.* / *She looks after her.* (not *She looks her after.*)","*We ran into an old friend.* / *We ran into her.*","*I can’t put up with the noise.* / *I can’t put up with it.*"]},
      "Some phrasal verbs have no object at all, so there is nothing to split: *sit down*, *wake up*, *The plane took off*. A few have both uses. *Wake up* is intransitive in *I woke up* and transitive in *I woke her up*.",
      {h:"Three-word verbs and -ing"},
      "In *look forward to*, the word *to* is a preposition, not part of an infinitive. So the verb after it takes the -ing form: *I’m looking forward to meeting you*, not *looking forward to meet you*. This is a very common learner error. The same holds for *get used to*, *be committed to* and *object to*: after the preposition *to*, use a noun or an -ing form."
    ]},
    {h:"Formal and informal", body:[
      "Phrasal verbs are very common in speech and in informal writing. Many of them have a single-verb partner of similar meaning, often of Latin or French origin, that sounds more formal.",
      {table:[["Phrasal verb","Single verb","Note"],["find out","discover","*Discover* often suggests something new or unknown. *Find out* is also used for a simple fact: *find out the time*."],["put off","postpone","*Postpone* is more formal and always means to move to a later time."],["call off","cancel","*Call off* is less formal and fits an event: *call off the match*."],["look into","investigate","*Look into* is neutral. *Investigate* is formal and more serious."],["turn down","reject","*Turn down an offer* is polite and common. *Reject* is stronger."],["put up with","tolerate","*Tolerate* is formal. *Put up with* often suggests that you are annoyed."]]},
      "Do not conclude that the single verb is always better. Many phrasal verbs are normal in careful writing too: *carry out a study*, *point out*, *set up*, *rule out*. A corpus search can show whether a phrase appears in academic or news writing. If a reader’s style guide or your teacher asks for a formal tone, choose the single verb where the meaning is the same, but check the meaning first. *Find out* and *discover* are not always interchangeable.",
      {h:"US and UK differences"},
      "A few multi-word verbs differ between varieties. Dictionaries label them.",
      {table:[["Idea","More usual in US English","More usual in UK English"],["complete a form","fill out a form","fill in a form (fill out is also used)"],["telephone someone","call someone up","ring someone up, ring someone back"],["have a good relationship","get along with","get on with (get along with is also used)"]]}
    ]},
    {h:"How to learn them", body:[
      {ol:["**Learn them in a sentence.** *Give up* alone is hard to use. *I gave up smoking last year* shows the pattern.","**Note the pattern.** Dictionaries show *sth* (something) and *sb* (somebody). For example, an entry may show *turn sth off*, which shows you that the object can go in the middle. Look at the pattern each time.","**Test with a pronoun.** Try *it*, *them* or *her* in the middle. If *turn it off* is natural, the verb separates. If *look it after* is wrong, the verb does not.","**Learn the most common meanings first.** A verb such as *get*, *take* or *put* has many phrasal verbs, and most learners need only a small number. Choose the ones you hear or read often.","**Say the particle with stress.** In phrasal verbs, a stressed particle helps both your speech and your listening."]},
      {ex:"Compared with Japanese. Japanese has a similar habit with verb + verb compounds, such as 持ち上げる (*mochiageru*, “lift up”), 立ち上がる (*tachiagaru*, “stand up”) and 飛び出す (*tobidasu*, “rush out”). The second verb adds a direction or a result, much as an English particle does. But the second verb is fused to the first, and an English particle is a separate word that can move. This is why a Japanese speaker often finds the word order, not the meaning, harder.", label:"Compared with Japanese"}
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Phrasal verbs are slang.","Some are slang, but most are standard and some are formal enough for reports: *carry out*, *set up*, *point out*."],["The particle tells you the meaning.","It gives hints only. *Up* in *eat up* and *up* in *give up* do different jobs."],["All multi-word verbs separate.","Prepositional verbs never separate, and some phrasal verbs have no object, so there is nothing to separate."],["You should avoid them in writing.","Choose by reader and setting. A single verb is often more formal, but not always clearer."],["I can learn them from a list.","Lists help for review, but contexts and patterns help you use them."]]},
      {terms:["hew-phrasal-verb","hew-particle","hew-multi-word-verb"]}
    ]},
    {h:"Why this matters to you", body:[
      "Multi-word verbs are everywhere in everyday English: in films, work meetings, instructions and messages. If you miss them, you will miss a lot of the meaning. If you use them correctly, your English sounds much more natural.",
      "For teachers, the pronoun test is a quick and reliable way to explain word order, and it is better than a long list of rules."
    ]}
   ],
   try:[
    {id:"e5u5-l2-x1", type:"mcq", q:"Which sentence is **not** possible in standard English?", options:[
      {t:"Please write it down.", why:"This is correct. The pronoun *it* goes in the middle."},
      {t:"Please turn off it.", ok:true, why:"Right. A pronoun object cannot follow the particle. We say *turn it off*."},
      {t:"Please write down the number.", why:"This is correct. A noun object can follow the particle."},
      {t:"Please write the number down.", why:"This is correct. A noun object can go in the middle too."}
    ]},
    {id:"e5u5-l2-x2", type:"sort", q:"Sort each verb by where a pronoun object goes. Use the pronoun test.", buckets:["Separable: the pronoun goes in the middle","Inseparable: the pronoun comes after"], items:[
      {t:"pick up (*a book*)", b:0, why:"*Pick it up* is natural. *Pick up it* is not."},
      {t:"call off (*a meeting*)", b:0, why:"*Call it off* is the usual form."},
      {t:"write down (*a number*)", b:0, why:"*Write it down* is natural."},
      {t:"put off (*a decision*)", b:0, why:"*Put it off* is natural."},
      {t:"look after (*a child*)", b:1, why:"*Look after her*, never *look her after*. It is a prepositional verb."},
      {t:"get over (*an illness*)", b:1, why:"*Get over it*, not *get it over* in this meaning. The preposition belongs with the noun phrase."},
      {t:"run into (*an old friend*)", b:1, why:"*Run into her* is natural. The verb does not separate."},
      {t:"depend on (*the weather*)", b:1, why:"*Depend on it*. It is a prepositional verb, so it stays together."}
    ]},
    {id:"e5u5-l2-x3", type:"match", q:"Match each phrasal verb to a single verb that has a similar, more formal meaning.", pairs:[
      ["put off","postpone","Both mean to move something to a later time. *Postpone* is more formal."],
      ["call off","cancel","Both mean to stop a planned event. *Call off* is less formal."],
      ["look into","investigate","Both mean to examine a problem. *Investigate* is more formal and more serious."],
      ["turn down","reject","Both mean to say no to an offer. *Reject* is stronger."],
      ["put up with","tolerate","Both mean to accept something unpleasant. *Tolerate* is formal."]
    ]},
    {id:"e5u5-l2-x4", type:"spot", q:"Hana wrote these sentences in her notes. Tap each one that is **not correct**.", ask:"not correct", parts:[
      {t:"I’m looking forward to meeting you.", flag:false, why:"Correct. After the preposition *to*, we use an -ing form."},
      " ",
      {t:"Can you turn off it?", flag:true, why:"A pronoun object goes in the middle: *Can you turn it off?*"},
      " ",
      {t:"She looks after her grandmother.", flag:false, why:"Correct. *Look after* does not separate, and the noun follows the preposition."},
      " ",
      {t:"I’m looking forward to see you.", flag:true, why:"After *look forward to*, use the -ing form: *looking forward to seeing you*."},
      " ",
      {t:"We ran out of milk.", flag:false, why:"Correct. *Run out of* is a three-word verb with a fixed order."},
      " ",
      {t:"He ran out the money.", flag:true, why:"The phrase is *run out of* money. *Of* is part of the verb."}
    ]},
    {id:"e5u5-l2-x5", type:"mcq", q:"In which sentence does *take off* have a meaning that you could **not** guess from *take* and *off*?", options:[
      {t:"Take off your wet coat.", why:"You can guess this: remove something from your body."},
      {t:"He took his hat off.", why:"You can guess this: he removed his hat."},
      {t:"Sales took off after the new ad.", ok:true, why:"Right. Here *take off* means to start to grow quickly. You cannot work this out from the two words."},
      {t:"Take the lid off the pot.", why:"You can guess this: remove the lid."}
    ]},
    {id:"e5u5-l2-x6", type:"mcq", q:"Amara moves from London to Chicago. A clerk says, “Please fill out this form.” What does the clerk want?", options:[
      {t:"Amara should complete the form by writing on it.", ok:true, why:"Right. *Fill out* is the usual US phrase for *fill in*. The meaning is the same."},
      {t:"Amara should make the form bigger.", why:"*Fill out* can also mean to grow larger, but with a form it means to complete it."},
      {t:"Amara should leave the form empty.", why:"*Fill* means to put something in. The clerk wants information written in."},
      {t:"Amara should take the form outside.", why:"*Out* here does not show direction. It is part of the verb *fill out*."}
    ]},
    {id:"e5u5-l2-x7", type:"order", q:"Put these steps in a good order for learning a new multi-word verb.", items:[
      {t:"Meet the verb in a real sentence and write the whole sentence", why:"Meaning and pattern are clearest in context."},
      {t:"Look it up in a learner’s dictionary and choose the meaning that fits", why:"Most verbs have several meanings, so check which one you met."},
      {t:"Read the pattern: *sth* and *sb* and the order of the particle", why:"The pattern shows whether the object can go in the middle."},
      {t:"Test it with a pronoun and write your own sentence", why:"This turns the pattern into something you can use."},
      {t:"Say it aloud with the stress on the particle", why:"Speaking it makes the sound pattern familiar, and it helps you hear the verb later."}
    ]},
    {id:"e5u5-l2-x8", type:"explain", q:"Toby taught English in the Japanese countryside for two years. A student asks him: “I can say *turn off the TV* and *turn the TV off*, but why can’t I say *turn off it*?” Write the explanation Toby could give.", size:"3–5 sentences", hint:"What is different about a pronoun? Where does the stress go? Give a pattern the student can remember.", model:"With a noun, English lets you put the object on either side of the particle, so *turn off the TV* and *turn the TV off* are both fine. A pronoun such as *it* is short and refers to something we already know, so it goes in the middle: *turn it off*. In speech the stress goes on the particle: *turn it OFF*, and a weak pronoun does not usually follow a stressed particle. A simple rule to remember is “pronoun in the middle”. This works for most phrasal verbs, but not for verbs like *look after*, which never split.", points:["States that noun objects can go on either side and pronoun objects go in the middle","Gives a reason: pronouns are short and already known, and the particle carries the stress","Gives a simple pattern the student can use: pronoun in the middle","Notes that prepositional verbs such as *look after* do not split"]}
   ],
   apply:{
    intro:"Look closely at multi-word verbs in real English. You need a free learner’s dictionary and something to read or listen to for about ten minutes. COCA at english-corpora.org needs a free account.",
    tasks:[
     {t:"Collect and test ten verbs", how:[
       "Read a news article or listen to a podcast or video for ten minutes. Write down ten multi-word verbs with the full sentences.",
       "Mark each one as phrasal, prepositional or phrasal-prepositional. Use the pronoun test where there is an object.",
       "Look up three of them in the Cambridge Dictionary or the Oxford Learner’s Dictionaries and write down the pattern, such as *turn sth off*."
     ], write:"Sentence 1… type… pattern… (ten sentences)"},
     {t:"Run a corpus check on formality", how:[
       "Register for free at english-corpora.org and open COCA.",
       "Search for a pair such as *find out* and *discover*, or *put off* and *postpone*. Look at the frequency of each and at the text types (spoken, fiction, news, academic).",
       "Read at least ten example lines for each. Write what you found in general terms: which one is more usual in speech, and which one appears more in academic writing."
     ], write:"Pair… what I noticed… spoken vs academic… my conclusion and one limit…"},
     {t:"Write a short message with five verbs", how:[
       "Write a message to a friend or a coworker, about 60 words, about a plan that changed. Use five multi-word verbs, for example *call off*, *put off*, *look into*, *come up with* and *get back to*.",
       "Check each pronoun object. Check each preposition after *look forward to* or *get used to*.",
       "Rewrite one sentence for a formal email, using a single verb."
     ], write:"My message… my formal version of one sentence…"}
    ],
    proof:"A list of ten multi-word verbs with type and pattern. A short corpus comparison of one pair. A message with five multi-word verbs, all with correct word order."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Word order”", note:"It does not cover phrasal verbs by name. It explains why word order carries meaning in English."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u5-l3", title:"Idioms, fixed phrases and chunks", minutes:55,
   hook:{q:"Before a concert, a friend says to a violinist, “Break a leg!” What does the friend mean?", options:["I hope you hurt yourself","Good luck with your performance","Please play more loudly","Hurry up and begin"], answer:1, reveal:"**Good luck.** *Break a leg* is a traditional way to wish good luck to performers, and it is the opposite of what the words say. If you know every word in an idiom and still cannot understand it, you have met an idiom. This lesson sorts idioms, fixed phrases and chunks, and shows how to learn them and when to avoid them."},
   goals:[
     "Tell an idiom from a fixed phrase and from a chunk",
     "Explain why learning in chunks helps fluency and accuracy",
     "Choose idioms that are safe to use, and spot the ones that are risky",
     "Explain how idioms can confuse international listeners, and rewrite them in plain English",
     "Use a dictionary to look up an idiom and read its labels"
   ],
   learn:[
    {h:"What is an idiom?", body:[
      {lead:"An idiom is a phrase whose meaning is not the sum of its words."},
      "An [[hew-idiom|idiom]] is a fixed group of words with a meaning that you cannot work out from the separate words. *Spill the beans* does not mean that you drop beans. It means to tell a secret. *Under the weather* means slightly ill. *A piece of cake* means very easy.",
      {table:[["Idiom","Meaning","Notes"],["spill the beans","tell a secret","The meaning is figurative."],["under the weather","slightly ill","Often used for a cold or tiredness."],["a piece of cake","very easy","Informal."],["break the ice","make people feel relaxed at the start of a meeting","Used for first conversations."],["hit the nail on the head","say exactly the right thing","Used for a correct comment about a cause or a problem."],["kick the bucket","die","Informal and often humorous. Use it with care."]]},
      "Idioms are fixed. You cannot replace the words freely. *Spill the beans* does not become *spill the peas* and keep its meaning. You can change the tense (*she spilled the beans*), but most other changes break the idiom, or make it a joke.",
      "A good dictionary lists idioms inside the entry of one main word, usually the first noun or the main verb. For *spill the beans*, look under *bean* or *spill*. Entries often have an *Idioms* section, and labels such as *informal* tell you the tone."
    ]},
    {h:"Fixed phrases and chunks", body:[
      "Not every ready-made phrase is an idiom. Many are clear in meaning, but English speakers say them in one particular form.",
      {list:["**Greetings and politeness phrases:** *Nice to meet you*, *How’s it going?*, *Thanks a lot*, *No problem*.","**Connectors and discourse phrases:** *by the way*, *as a matter of fact*, *on the other hand*, *in other words*.","**Pairs in a fixed order:** *salt and pepper*, *black and white*, *ladies and gentlemen*, *back and forth*, *more or less*, *sooner or later*. English speakers say these in one order. *Pepper and salt* sounds strange.","**Sentence frames:** *It depends on …*, *I was wondering if …*, *As far as I know, …*, *Would you mind … -ing?*"]},
      "Linguists call this kind of phrase a [[hew-lexical-chunk|chunk]] when it is stored and used as one unit. A speaker does not build *as far as I know* word by word each time. The phrase comes ready-made, and only the slots change: *As far as I know, the shop is closed.*",
      {fig:'<svg viewBox="0 0 340 274"><defs><marker id="e5u5a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="170" y="16" text-anchor="middle">How easy is the meaning to guess from the words?</text><rect class="d-sage" x="40" y="26" width="294" height="52" rx="8" stroke-width="2"/><text x="52" y="46">Free combination</text><text class="s" x="52" y="66">a red car, a new book</text><rect class="d-lup" x="40" y="86" width="294" height="52" rx="8" stroke-width="2"/><text x="52" y="106">Collocation</text><text class="s" x="52" y="126">heavy rain, make a decision</text><rect class="d-gold" x="40" y="146" width="294" height="52" rx="8" stroke-width="2"/><text x="52" y="166">Fixed phrase or chunk</text><text class="s" x="52" y="186">by the way, as far as I know</text><rect class="d-rose" x="40" y="206" width="294" height="52" rx="8" stroke-width="2"/><text x="52" y="226">Idiom</text><text class="s" x="52" y="246">spill the beans, break a leg</text><path class="d-ink" d="M18 32V248" stroke-width="2" marker-end="url(#e5u5a1)"/><text class="s" x="4" y="268">harder</text></svg>', alt:"A vertical scale with four boxes from top to bottom: free combination such as a red car, collocation such as heavy rain, fixed phrase or chunk such as by the way, and idiom such as spill the beans. An arrow beside them points down and is labeled harder, meaning the meaning is harder to guess from the words.", cap:"From free combinations to idioms, the meaning is harder to work out from the separate words."},
      "Idioms, chunks and collocations overlap. Some fixed phrases are also idioms (*by and large*), and many chunks have a clear meaning. You do not need to sort every phrase exactly. The useful question is: can I build this from separate words, or must I learn it whole?"
    ]},
    {h:"Why learn in chunks?", body:[
      "A learner who builds every sentence from single words has to make many decisions and has little time. Fluent speakers have many ready-made pieces, so they can speak and listen faster. Learning chunks has three benefits.",
      {ol:["**Speed.** You say *I was wondering if you could …* without planning each word.","**Accuracy.** The grammar is inside the chunk. If you learn *Would you mind opening the window?* as a whole, you also learn that *mind* takes the -ing form.","**Naturalness.** You use the same phrase that native speakers use, so you avoid unusual collocations."]},
      "To learn a chunk, store it with its situation. *It depends on …* is for answering a question when the answer is “it varies”. *As far as I know …* is for saying that you are not fully certain.",
      {ex:"Compared with Japanese. Japanese has many chunks that do not translate word by word. よろしくお願いします (*yoroshiku onegaishimasu*) is used when you meet someone, when you ask for a favor, and at the end of a message. English has no single phrase for all of these. It uses *Nice to meet you*, *I’d appreciate your help*, *Thank you in advance* or *I look forward to working with you*, depending on the situation. Idioms differ too: 猫の手も借りたい (*neko no te mo karitai*, “I would even borrow a cat’s paw”) means “I am so busy that I need any help”. English uses *I’m swamped* or *I’m snowed under* for the same idea.", label:"Compared with Japanese"}
    ]},
    {h:"Which idioms are safe?", body:[
      "Idioms can add color to your English. They can also cause problems. A good question is whether an idiom is **safe** for you to use. These points help you decide.",
      {table:[["Safer idioms","Riskier idioms"],["Common and widely known: *a piece of cake*, *break the ice*, *in the long run*","Old-fashioned, or rare in everyday speech"],["Neutral in tone: *keep an eye on*, *give it a try*, *on the same page*","Informal or rude, or ones that need a joking tone: *kick the bucket*"],["Understood in both US and UK English","Tied to one variety: *a storm in a teacup* (UK), *a tempest in a teapot* (US)"],["Easy to explain if the listener does not know it","Tied to a sport or an activity: *out of left field*, *touch base* (baseball, US), *hit for six*, *a sticky wicket* (cricket, UK)"]]},
      "Also consider your goal. In an exam essay, in a report for your manager or in a message to a customer, plain words are often the best choice. In a chat with friends, idioms are welcome. A phrase like *it’s raining cats and dogs* is well known, but many native speakers treat it as a cliché and say *it’s pouring* instead.",
      {tip:"An idiom you use should be one that you have heard in real use, several times, from different people. If you only know it from a list, use it only in a low-risk situation, or check it in a dictionary first."}
    ]},
    {h:"Idioms and international listeners", body:[
      "English is used all over the world, often between two people who do not have English as a first language. The World Englishes elective looks at this in more detail. When a speaker from Japan, a speaker from Brazil and a speaker from Poland meet in English, a phrase such as *we need to touch base* may not be known to any of them. Idioms often come from one culture, one sport or one era, so they are among the most common reasons for confusion.",
      "A careful speaker has several choices. The aim is to be clear, not to remove all color.",
      {ol:["**Say it plainly first.** *Let’s talk briefly after the meeting* is clearer than *let’s touch base*.","**Add a plain follow-up.** If you use an idiom, follow it with the plain meaning: *We’re on the same page. We agree.*","**Check understanding.** Ask: *Does that make sense?*","**Do not stack idioms.** Two or three idioms in one sentence is a lot, even for a native listener.","**Accept that listeners may stop you.** It is normal to ask, “What does that mean?”"]},
      "Listeners help too. When you meet an idiom you do not know, you can ask. Native speakers usually enjoy explaining one."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Using idioms makes you sound fluent.","Using the right chunks makes you sound fluent. A wrong or odd idiom sounds worse than a plain phrase."],["Native speakers speak in idioms all the time.","They use many chunks and some idioms, but plain language is the base. The amount depends on the speaker and the setting."],["An idiom means what its words mean, plus a little.","The meaning may have no link to the words. You must learn it as a whole."],["If I know all the words, I know the idiom.","Not at all. This is exactly why idioms are hard."],["Every idiom is informal.","Many are neutral, and a few are formal. A dictionary label will tell you."]]},
      {terms:["hew-idiom","hew-lexical-chunk"]}
    ]},
    {h:"Why this matters to you", body:[
      "You will meet idioms in films, news, work and everyday talk. Knowing what an idiom is, and how to look it up, means you do not need to guess in silence. And chunks are probably the best investment in your vocabulary: each one saves you time in speaking and listening.",
      "If you teach, give learners phrases with a situation, not word lists. A learner who knows *It depends on …* can answer many more questions than a learner who knows the word *depend*."
    ]}
   ],
   try:[
    {id:"e5u5-l3-x1", type:"mcq", q:"A manager tells Mei, “The new project is a piece of cake for you.” What does she mean?", options:[
      {t:"The project will be very easy for you.", ok:true, why:"Right. *A piece of cake* is an idiom that means very easy."},
      {t:"The project will be a pleasant surprise.", why:"The idiom is about difficulty, not about surprise."},
      {t:"The project has a sweet reward.", why:"There is no reward in the meaning. The words are figurative."},
      {t:"The project is small and unimportant.", why:"It means easy. It does not say the project is small."}
    ]},
    {id:"e5u5-l3-x2", type:"match", q:"Match each idiom to its meaning.", pairs:[
      ["spill the beans","reveal a secret","The beans are a picture. The meaning is to tell what should stay hidden."],
      ["under the weather","slightly ill","It is used for a cold, tiredness or a mild illness."],
      ["break the ice","make people feel relaxed at the start","It is used for the first moments of a meeting or a party."],
      ["hit the nail on the head","say exactly the right thing","It means to be exact about a problem or a cause."],
      ["a piece of cake","very easy","It is informal. It says that a task takes little effort."]
    ]},
    {id:"e5u5-l3-x3", type:"sort", q:"Sort each phrase. Is it an idiom (the meaning is not in the words), or a chunk with a clear meaning?", buckets:["Idiom: the meaning is not in the words","Chunk: clear meaning, fixed form"], items:[
      {t:"kick the bucket", b:0, why:"The words do not give the meaning, which is “die”."},
      {t:"as far as I know", b:1, why:"The meaning is clear from the words, and the form is fixed."},
      {t:"spill the beans", b:0, why:"Figurative meaning: reveal a secret."},
      {t:"Would you mind if I opened the window?", b:1, why:"The meaning is clear. It is a ready-made polite frame."},
      {t:"under the weather", b:0, why:"The meaning, “slightly ill”, is not in the words."},
      {t:"It depends on the weather.", b:1, why:"A common frame, with a clear meaning."},
      {t:"a piece of cake", b:0, why:"Figurative: very easy."},
      {t:"I’d like to book a table.", b:1, why:"A ready-made request in restaurants, with a clear meaning."}
    ]},
    {id:"e5u5-l3-x4", type:"mcq", q:"Hana writes to colleagues in six countries. Her draft says: “Let’s touch base on Friday, and I’ll give you a ballpark figure.” Which rewrite is best for an international audience?", options:[
      {t:"“Let’s have a short call on Friday, and I’ll give you an approximate figure.”", ok:true, why:"Right. It keeps the meaning and uses plain words that most learners know."},
      {t:"“Let’s touch base on Friday, and I’ll give you a rough number.”", why:"*Touch base* is still an idiom that many listeners may not know."},
      {t:"“Let’s circle back on Friday, and I’ll give you a ballpark.”", why:"This replaces one business idiom with another, and *ballpark* is still unclear."},
      {t:"“Friday: call. Figure: approximate.”", why:"Short, but it is not polite and not a natural message."}
    ]},
    {id:"e5u5-l3-x5", type:"spot", q:"Lucía wrote a short message to an international team. Tap each phrase that could **confuse** a listener who learned English as a second language.", ask:"could confuse", parts:[
      "Hi all, the report is ready. ",
      {t:"Let’s touch base", flag:true, why:"A business idiom from baseball. A plain version is *Let’s talk briefly*."},
      " on Monday. Please send your comments ",
      {t:"by Friday", flag:false, why:"Clear and plain. No problem here."},
      ". The budget is ",
      {t:"a bit up in the air", flag:true, why:"An idiom that means not yet decided. A plain version is *not decided yet*."},
      ", but we will ",
      {t:"let you know", flag:false, why:"A common chunk with a clear meaning. It is easy to understand."},
      " soon. ",
      {t:"The ball is in your court", flag:true, why:"An idiom from tennis, meaning that it is your turn to act. Plain version: *It is your turn to act*."},
      " now. Thank you."
    ]},
    {id:"e5u5-l3-x6", type:"order", q:"Put these steps in a good order for dealing with an idiom you hear but do not know.", items:[
      {t:"Notice it and write down the whole phrase and the sentence", why:"You need the full form and its context."},
      {t:"Guess the meaning from the situation", why:"The context often gives a clear idea of the meaning."},
      {t:"Look it up in a learner’s dictionary, under its main word", why:"An idiom is usually listed under one of its main words, with a definition and labels."},
      {t:"Check the labels: informal, UK, US, old-fashioned", why:"The label tells you whether it is safe to use."},
      {t:"Decide whether to use it, or to keep it only for listening", why:"Understanding an idiom does not mean you must use it."}
    ]},
    {id:"e5u5-l3-x7", type:"mcq", q:"A British friend says, “Don’t worry, it’s a storm in a teacup.” An American friend would more likely say the same thing as:", options:[
      {t:"“It’s a tempest in a teapot.”", ok:true, why:"Right. Both idioms mean a big fuss about something small. US English more often uses *tempest in a teapot*."},
      {t:"“It’s a tornado in a bucket.”", why:"This is not an idiom. It only plays with the picture."},
      {t:"“It’s water under the bridge.”", why:"A different idiom. It means that something in the past no longer matters."},
      {t:"“It’s a drop in the ocean.”", why:"A different idiom. It means a very small amount compared with what is needed."}
    ]},
    {id:"e5u5-l3-x8", type:"explain", q:"A learner tells you: “I know every word in *It’s a piece of cake*, but I did not understand the sentence. Why? And how can I learn idioms without feeling lost?” Write your answer.", size:"3–5 sentences", hint:"What is special about an idiom? How can the learner find the meaning? What habits help?", model:"An idiom is a fixed phrase whose meaning is not the sum of its words, so knowing *piece* and *cake* does not help. *A piece of cake* means very easy, and the picture of food is only a figure of speech. The learner should note the whole phrase, guess from the situation, and check a learner’s dictionary under one of the main words. It is better to learn a few common idioms well, with an example sentence for each, than to memorize a long list. For speaking, choose idioms that you have heard several times, and use plain words when you are not sure.", points:["Says that the meaning of an idiom is not the sum of its words","Gives the meaning of the idiom and says it is figurative","Gives a way to find meaning: context and a learner’s dictionary","Gives practical advice: few idioms, whole phrases, safe use"]}
   ],
   apply:{
    intro:"Collect idioms and chunks from real English. You need a free dictionary, a notebook and about twenty minutes of listening or reading. No account is needed.",
    tasks:[
     {t:"Collect five idioms and five chunks", how:[
       "Watch a short video, listen to a podcast or read a news article for about twenty minutes.",
       "Write down five phrases that you think are idioms and five that are chunks. Write the whole sentence for each.",
       "Look up each idiom in a free dictionary (Cambridge, Oxford Learner’s or Merriam-Webster). Copy the meaning and any labels."
     ], write:"Idiom 1… meaning… label… (five) Chunk 1… (five)"},
     {t:"Rewrite for an international audience", how:[
       "Find or write a short message of about 50 words that has three idioms in it.",
       "Rewrite it in plain English for readers around the world. Keep the tone friendly.",
       "Add one sentence that explains which idiom you replaced and why."
     ], write:"Original… plain version… my reason…"},
     {t:"Check US and UK versions", how:[
       "Look up *a storm in a teacup*, *a tempest in a teapot*, *a skeleton in the cupboard* and *a skeleton in the closet* in the Cambridge Dictionary.",
       "Write down which ones the dictionary labels as UK or US.",
       "Search for one of them in COCA at english-corpora.org (free account needed) and read ten lines. Note the kinds of text in which you find it."
     ], write:"Phrase… label… what I found in the corpus…"}
    ],
    proof:"A page of five idioms and five chunks with meanings and labels. A plain-English rewrite of a short message. Notes on one US and UK pair."
   },
   read:[
    {book:"eling", where:"Background reading: the Semantics chapter, section “Compositionality: Why not just syntax?”", note:"It explains how the meaning of a phrase usually comes from its parts, which helps you see why idioms are the exception."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u5-l4", title:"Register and connotation", minutes:60,
   hook:{q:"Priya wants to give a friend a compliment about her body. Which word is she most likely to choose?", options:["skinny","slim","bony","scrawny"], answer:1, reveal:"**Slim.** All four words describe someone with little body fat, but they carry different feelings. *Slim* is usually positive. *Thin* is neutral. *Skinny* is often negative or too direct, and *bony* and *scrawny* are negative. The core meaning is the same, and the feeling is not. This lesson is about those feelings (connotation) and about the level of formality (register)."},
   goals:[
     "Explain the difference between the core meaning of a word (denotation) and its connotation",
     "Place words on a scale from informal to formal, and explain why many formal words come from French and Latin",
     "Choose words that suit a reader and a setting",
     "Make a request, a refusal or a disagreement polite with softeners, without sounding unclear",
     "Check register and connotation with dictionary labels and a corpus"
   ],
   learn:[
    {h:"Meaning and feeling", body:[
      {lead:"Two words can point at the same thing and still say different things about it."},
      "The **denotation** of a word is its core meaning, the thing it points at. The [[hew-connotation|connotation]] is the feeling or attitude that comes with it. *Slim*, *thin* and *skinny* have nearly the same denotation: a person with little body fat. Their connotations differ.",
      {table:[["Word","Denotation","Connotation"],["slim","having little body fat","positive: attractive, healthy"],["thin","having little body fat","neutral, a plain description"],["skinny","having little body fat","often negative: too thin; but *skinny jeans* is neutral"],["thrifty","careful with money","positive: sensible"],["stingy","unwilling to spend money","negative: not generous"],["curious","eager to learn or know","positive or neutral"],["nosy","too interested in other people’s affairs","negative, informal"]]},
      "When you choose a word, you choose its feeling too. A manager who calls a young employee *inexperienced* describes her. A manager who calls her *green* or *naive* judges her. Connotations can differ between people and change over time, so a dictionary label such as *approving* or *disapproving* is a good guide.",
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="18" text-anchor="middle">Connotation: same idea, different feeling</text><rect class="d-sage" x="10" y="28" width="100" height="36" rx="8" stroke-width="2"/><text x="60" y="51" text-anchor="middle">slim</text><rect class="d-soft" x="120" y="28" width="100" height="36" rx="8" stroke-width="2"/><text x="170" y="51" text-anchor="middle">thin</text><rect class="d-rose" x="230" y="28" width="100" height="36" rx="8" stroke-width="2"/><text x="280" y="51" text-anchor="middle">skinny</text><rect class="d-sage" x="10" y="72" width="100" height="36" rx="8" stroke-width="2"/><text x="60" y="95" text-anchor="middle">thrifty</text><rect class="d-soft" x="120" y="72" width="100" height="36" rx="8" stroke-width="2"/><text x="170" y="95" text-anchor="middle">careful</text><rect class="d-rose" x="230" y="72" width="100" height="36" rx="8" stroke-width="2"/><text x="280" y="95" text-anchor="middle">stingy</text><text class="s" x="60" y="124" text-anchor="middle">positive</text><text class="s" x="170" y="124" text-anchor="middle">neutral</text><text class="s" x="280" y="124" text-anchor="middle">negative</text><text x="170" y="160" text-anchor="middle">Register: same idea, different setting</text><rect class="d-gold" x="10" y="170" width="100" height="36" rx="8" stroke-width="2"/><text x="60" y="193" text-anchor="middle">guy</text><rect class="d-soft" x="120" y="170" width="100" height="36" rx="8" stroke-width="2"/><text x="170" y="193" text-anchor="middle">man</text><rect class="d-lup" x="230" y="170" width="100" height="36" rx="8" stroke-width="2"/><text x="280" y="193" text-anchor="middle">gentleman</text><rect class="d-gold" x="10" y="214" width="100" height="36" rx="8" stroke-width="2"/><text x="60" y="237" text-anchor="middle">a bit</text><rect class="d-soft" x="120" y="214" width="100" height="36" rx="8" stroke-width="2"/><text x="170" y="237" text-anchor="middle">a little</text><rect class="d-lup" x="230" y="214" width="100" height="36" rx="8" stroke-width="2"/><text x="280" y="237" text-anchor="middle">somewhat</text><text class="s" x="60" y="268" text-anchor="middle">informal</text><text class="s" x="170" y="268" text-anchor="middle">neutral</text><text class="s" x="280" y="268" text-anchor="middle">formal</text></svg>', alt:"Two groups of three columns. Top group is connotation: slim and thrifty are positive, thin and careful are neutral, skinny and stingy are negative. Bottom group is register: guy and a bit are informal, man and a little are neutral, gentleman and somewhat are formal.", cap:"Connotation is about feeling. Register is about the setting and the level of formality."}
    ]},
    {h:"Register: choosing the level", body:[
      "[[hew-register|Register]] is the level of formality of language. You use a different register to chat with a friend, to write an essay and to speak to a customer. Most learners need three levels.",
      {table:[["Level","Where you meet it","Examples"],["Informal","Talking with friends, texting, relaxed emails","gonna, kids, guy, pal, a bit, stuff"],["Neutral","Most speech and writing, news, general reading","going to, children, man, friend, a little, things"],["Formal","Reports, official letters, academic writing","commence, purchase, assist, require, sufficient, somewhat"]]},
      "Neutral is the safest middle. If you are unsure, neutral words are rarely wrong. A very formal word in a casual chat sounds odd, even funny: *I shall commence the cleaning* is a joke between friends. A very informal word in a formal setting can sound careless: *We’re gonna send you a new part* in a first letter to a customer.",
      {h:"Why so many formal words come from French and Latin"},
      "English has a layered vocabulary, and history explains much of it. After the Norman Conquest in 1066, French became the language of the court and of law in England for generations. Large numbers of French words entered English, and later many Latin words came in through writing and scholarship. The result is that everyday ideas often have a short Old English word and a longer French or Latin one.",
      {table:[["Everyday (Old English)","More formal (French or Latin)"],["start, begin","commence"],["help","assist"],["buy","purchase"],["need","require"],["tell","inform"],["show","demonstrate"],["enough","sufficient"]]},
      "A well-known example involves food. Farm animals have English names (*cow*, *pig*, *sheep*, *calf*), and the meat has French-origin names (*beef*, *pork*, *mutton*, *veal*). The usual explanation is that English-speaking workers raised the animals while the French-speaking upper class ate the meat.",
      {tip:"Origin is a hint, not a rule. Many French and Latin words are ordinary: *use*, *table*, *people*, *problem*, *money*, *question*. Check the label in a dictionary."},
      {ex:"Mariya studies English interpreting and gets nervous when she speaks English. She says: “My English sounds like a textbook. I say *purchase* and my friends say *buy*.” Her interpreting teacher tells her that an interpreter matches the register of the speaker. If the speaker in Japanese is casual, her English should be neutral or informal. If the speaker is a manager giving a formal speech, a word like *purchase* may fit. So she needs both levels, and she practices choosing between them.", label:"Worked example"}
    ]},
    {h:"Politeness and softeners", body:[
      "Register is about the setting. **Politeness** is about the relationship. English has no special verb forms for politeness. Japanese has a rich system called *keigo* (敬語), with respectful and humble forms of verbs. English uses other tools: modal verbs, the past tense, question forms and small words that make a statement softer. These are **softeners**, also called hedges.",
      {table:[["Blunt","Softer","Softest"],["Open the window.","Could you open the window?","I was wondering if you could open the window."],["That’s wrong.","I think that’s a mistake.","I’m not sure that’s quite right."],["I can’t come.","I’m afraid I can’t come.","I’m afraid I won’t be able to make it, I’m sorry."],["Send me the file.","Please send me the file.","Would you mind sending me the file when you have a moment?"]]},
      "The main tools are these.",
      {list:["**Modal verbs:** *could*, *would*, *might* are softer than *can*, *will*, *must*.","**The past tense for distance:** *I was wondering if …*, *I wanted to ask …*.","**Hedge words:** *a bit*, *sort of*, *perhaps*, *I think*, *I’m afraid*, *kind of*, *just* (as in *I just wanted to check*).","**Questions instead of commands:** *Would you mind …?*, *Is it OK if …?*"]},
      "Softeners help when you refuse, disagree or give a criticism. But more is not always better. *I was just wondering if maybe you might possibly be able to help me a little* sounds nervous, and it may hide what you want. The right level depends on the person, the place and the culture, so watch how the people around you speak.",
      {tip:"Tone also carries politeness. In speech, a falling tune on a request can sound sharp, and a rising tune can sound more open and friendly. Unit 3 looked at these tunes."},
      {h:"Euphemism"},
      "A [[hew-euphemism|euphemism]] is a gentler word used in place of a direct one: *pass away* for *die*, *let go* for *fire*, *between jobs* for *unemployed*. They are polite and sometimes useful. But overuse can hide the truth, and in news or legal writing a plain word is often better. Dictionaries often label them."
    ]},
    {h:"How to check register and connotation", body:[
      {ol:["**Read the dictionary labels.** Learner dictionaries mark words as *formal*, *informal*, *slang*, *old-fashioned*, *offensive*, *approving* or *disapproving*. The Cambridge Dictionary, the Oxford Learner’s Dictionaries and Merriam-Webster all do this in their own ways.","**Read the examples.** The sentences show who says it and where.","**Use a corpus.** In COCA you can compare a formal word with an everyday one, and look at the text types: spoken, fiction, news and academic. Expect a formal word such as *commence* to be rare in spoken text, and check it.","**Listen.** Notice how people speak in a workplace, in a shop and with friends. Copy what suits you."]},
      "Be careful with slang and offensive words. A word that is friendly between friends in one community may be rude in another. If a dictionary labels a word *offensive* or *taboo*, do not use it unless you are sure of the setting. When you cannot tell, choose a neutral word."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Formal words are better.","They are better in a formal setting. In a chat they sound stiff."],["Long words show a good vocabulary.","Clear words that suit the reader show good control."],["Informal means rude.","Informal is correct and friendly in the right setting."],["Softeners show weakness.","They show care for the other person. Too many hide your message."],["Synonyms mean the same thing.","They share a core meaning, but connotation and register often differ."]]},
      {terms:["hew-connotation","hew-register","hew-euphemism","hew-softener"]}
    ]},
    {h:"Why this matters to you", body:[
      "In real life, a message goes wrong more often because of tone than because of grammar. A reader forgives a missing article. A reader may not forgive a message that sounds rude or careless.",
      "If you teach, help learners to choose between at least a neutral and a more formal version of the words they use most. That one habit makes their English suit more settings."
    ]}
   ],
   try:[
    {id:"e5u5-l4-x1", type:"mcq", q:"Amara wants to say that her friend is attractively thin. Which word is the best choice?", options:[
      {t:"slim", ok:true, why:"Right. *Slim* usually has a positive feeling."},
      {t:"skinny", why:"*Skinny* often suggests too thin, so it may not sound like a compliment."},
      {t:"scrawny", why:"*Scrawny* is negative. It suggests thin and weak."},
      {t:"bony", why:"*Bony* suggests that you can see the bones. It is usually negative."}
    ]},
    {id:"e5u5-l4-x2", type:"sort", q:"Sort each word by register.", buckets:["Informal","Neutral","Formal"], items:[
      {t:"gonna", b:0, why:"A spoken, informal form of *going to*."},
      {t:"start", b:1, why:"Neutral. It fits speech and writing."},
      {t:"commence", b:2, why:"Formal. It is used in official or written English."},
      {t:"kids", b:0, why:"*Kid* is informal for *child*."},
      {t:"children", b:1, why:"Neutral. It is used everywhere."},
      {t:"purchase", b:2, why:"Formal. Neutral English says *buy*."},
      {t:"buy", b:1, why:"Neutral, and the usual word in speech and writing."},
      {t:"pal", b:0, why:"Informal for *friend*."}
    ]},
    {id:"e5u5-l4-x3", type:"match", q:"Match each word to its meaning and feeling.", pairs:[
      ["thrifty","careful with money, in a good way","Positive. It shows sensible habits."],
      ["stingy","unwilling to spend, in a bad way","Negative. It suggests meanness."],
      ["curious","eager to learn or know","Usually positive or neutral."],
      ["nosy","too interested in other people’s affairs","Negative and informal."],
      ["slim","thin in an attractive way","Usually positive."]
    ]},
    {id:"e5u5-l4-x4", type:"spot", q:"Hana wrote a first email to a customer about a broken lamp. Tap each part that is **too informal** for this message.", ask:"too informal", parts:[
      {t:"Hey!", flag:true, why:"Too casual for a first email to a customer. *Dear Ms. Lee,* or *Hello Ms. Lee,* fits better."},
      " ",
      {t:"Thank you for contacting us about your order.", flag:false, why:"A polite, neutral sentence that suits the message."},
      " ",
      {t:"We’re gonna send you a new one.", flag:true, why:"*Gonna* is informal. Write *We will send you a new one.*"},
      " ",
      {t:"Could you tell us your order number?", flag:false, why:"A polite request. *Could you* is softer than *Can you*."},
      " ",
      {t:"No worries, we’ll fix it.", flag:true, why:"*No worries* is informal and may sound careless in a first message."},
      " ",
      {t:"Best regards,", flag:false, why:"A neutral, polite closing used in business email."}
    ]},
    {id:"e5u5-l4-x5", type:"mcq", q:"Mariya is practicing interpreting. The Japanese speaker is a friendly shop owner who talks to a customer in a relaxed way and says that she will give a discount if the customer buys more. What register should Mariya use in English?", options:[
      {t:"Neutral and friendly, such as “If you buy more, I’ll give you a discount.”", ok:true, why:"Right. An interpreter matches the register of the speaker. Here that is relaxed and neutral."},
      {t:"Very formal, such as “Should you wish to purchase additional items, a reduction shall be applied.”", why:"This is much more formal than the speaker, so it changes the tone of the message."},
      {t:"Very informal, such as “Dude, buy more and I’ll cut you a deal.”", why:"This is too casual and changes how the shop owner sounds."},
      {t:"Silent, to avoid a mistake.", why:"Interpreters need to give the message. Silence helps nobody."}
    ]},
    {id:"e5u5-l4-x6", type:"order", q:"Put these requests in order from most direct to most polite (a typical order; tone and setting matter too).", items:[
      {t:"Open the window.", why:"A direct command. It is fine between close friends, but it can sound sharp."},
      {t:"Open the window, please.", why:"*Please* softens the command a little, but it is still an order."},
      {t:"Could you open the window, please?", why:"A question with *could* is an indirect request. It is more polite."},
      {t:"I was wondering if you could open the window.", why:"The past tense and a longer frame put more distance, so it is very polite."}
    ]},
    {id:"e5u5-l4-x7", type:"number", q:"This is an invented example for practice. In a practice corpus, *commence* appears 12 times per million words and *start* appears 600 times per million words. How many times more often does *start* appear than *commence*?", answer:50, tol:0, unit:"times", why:"Both numbers are rates per million words, so you can compare them directly. 600 ÷ 12 = 50. In a real corpus, the text types would also show where each word is used.", wrongs:[
      {v:588, tol:0, why:"You subtracted (600 − 12). The question asks how many times more often, which is a division."},
      {v:7200, tol:0, why:"You multiplied 600 by 12. Divide to compare the two rates."},
      {v:0.02, tol:0.005, why:"You divided 12 by 600. That compares *commence* with *start*. Turn it around."}
    ]},
    {id:"e5u5-l4-x8", type:"explain", q:"Tomás tells you: “I always choose the most formal word, such as *commence* or *purchase*, because I want to sound educated.” Explain what is right and what is wrong in this idea, and give better advice.", size:"3–5 sentences", hint:"Think about the reader, the setting, neutral words and the effect of a word in speech.", model:"Tomás is right that formal words are useful, because they fit reports, legal letters and academic writing. But register means choosing the word that suits the setting, so *commence* in a chat with friends sounds stiff or even funny. Neutral words such as *start* and *buy* are safe in most places and are still correct. Better advice is to learn both levels for common ideas, to read the dictionary label, and to match the register of the reader. Clear and suitable words show more control than long words.", points:["Says that formal words are useful in formal settings","Says that the right word depends on the setting and the reader","Mentions neutral words as the safe middle","Gives practical advice such as dictionary labels and matching the reader"]}
   ],
   apply:{
    intro:"Test register and connotation with real evidence. You need a free dictionary and a free COCA account at english-corpora.org. Free accounts may have daily search limits, so check the site’s terms.",
    tasks:[
     {t:"Read three entries for connotation", how:[
       "In the Cambridge Dictionary, the Oxford Learner’s Dictionaries or Merriam-Webster, look up *slim*, *skinny* and *thin*, or three other words with similar meanings.",
       "Copy the label and a short example for each. Write one sentence about the feeling each word gives.",
       "Say which word you would choose in a compliment and which you would avoid."
     ], write:"slim: … skinny: … thin: … my choice and reason…"},
     {t:"Run a corpus check on register", how:[
       "Register for free at english-corpora.org and open COCA.",
       "Search for a pair such as *commence* and *start*, or *purchase* and *buy*. Look at how often each appears and in which text types (spoken, fiction, news, academic).",
       "Read ten example lines for each word. Write down who uses each one and what kind of text it is.",
       "Write your conclusion in general terms: where is the formal word more common, and where is it rare?"
     ], write:"Pair… which is more frequent… text types… my conclusion and one limit…"},
     {t:"Soften three messages", how:[
       "Write three blunt messages: a request, a refusal and a disagreement.",
       "Rewrite each one at two levels of politeness, using modals, past tense and hedges.",
       "Read your versions aloud. Mark any that sound too nervous, and trim them."
     ], write:"Blunt… softer… softest… (three messages)"}
    ],
    proof:"Notes on three words with their labels and feelings. A short corpus comparison of one formal and one everyday word. Three messages written at two levels of politeness."
   },
   read:[
    {book:"eling", where:"Background reading: the Language Variation and Change chapter, section “Language conveys more than semantic meaning”", note:"It explains how a word can carry social meaning as well as its dictionary meaning."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u5-l5", title:"Loanwords and false friends", minutes:60,
   hook:{q:"A Japanese colleague says in English: “We got a claim from a customer yesterday.” What does she most likely mean?", options:["A customer complained","A customer asked us for money back by law","A customer won a prize","A customer said that he owned the building"], answer:0, reveal:"**A customer complained.** In Japanese, クレーム (*kurēmu*) is a borrowed word that means a complaint. The English word *claim* means to say that something is true, or to ask for something that is yours, such as an insurance payment. This is a good example of a loanword that took a new meaning when it moved to another language. In this lesson you will meet more of them and learn to explain them kindly."},
   goals:[
     "Explain what a loanword, a false friend and wasei-eigo are",
     "Give the Japanese meaning and the English meaning of common katakana words such as マンション, クレーム, スマート, テンション, ナイーブ, コンセント and サービス",
     "Explain these differences to a learner kindly, with a correct English word to use",
     "Describe how English borrows words from Japanese, and how they change in English"
   ],
   learn:[
    {h:"Words change when they travel", body:[
      {lead:"A borrowed word is not a copy. It becomes part of the new language and starts a new life there."},
      "A [[hew-loanword|loanword]] is a word taken from one language into another. English has borrowed a very large number of them: *restaurant* and *garage* from French, *piano* from Italian, *tsunami* from Japanese. When a word moves, its sound, its spelling and often its meaning change to suit the new language.",
      "Japanese has borrowed many words from English and from other languages. These are written in katakana, and linguists call them *gairaigo* (外来語, “words from outside”). Some look like English but are Japanese words with their own sounds and meanings. Others were built in Japan from English parts and do not exist in English at all. These are called *wasei-eigo* (和製英語, “Japan-made English”). *Nighter* for a night baseball game (ナイター *naitā*) and *skinship* (スキンシップ *sukinshippu*) for physical closeness are examples.",
      "A [[hew-false-friend|false friend]] is a word that looks or sounds like a word in another language but has a different meaning. For a Japanese speaker, many katakana words are false friends of English. For English speakers, many words in other languages are false friends too. Spanish *embarazada* means *pregnant*, not *embarrassed*. French *actuellement* means *at present*, not *actually*. German *Gift* means *poison*, not *a present*. Italian *parenti* means *relatives*, not *parents*.",
      {key:"A katakana word is a Japanese word. It is not “wrong English”. It becomes a false friend only when it is used as if it were an English word."},
      "Many katakana words match English well: ホテル (*hoteru*, hotel), コーヒー (*kōhī*, coffee), テレビ (*terebi*, TV). They differ only in sound. Others come from other languages: パン (*pan*, bread) comes from Portuguese, and アルバイト (*arubaito*, a part-time job) comes from German *Arbeit*, “work”. So do not assume that a katakana word comes from English or means what an English word means."
    ]},
    {h:"Seven famous cases and more", body:[
      "Here are the cases that most often cause confusion in English. For each one, the table gives the Japanese meaning, an English word to use, and the usual meaning of the English look-alike.",
      {table:[["Katakana","Meaning in Japanese","To say it in English","The English look-alike"],["マンション *manshon*","an apartment or condo building, usually larger and sturdier than an アパート (*apāto*)","*apartment building*; *condo* (US, if the units are owned); *block of flats* (UK)","*mansion*: a very large, grand house"],["クレーム *kurēmu*","a complaint from a customer","*complaint*","*claim*: to say that something is true, or to ask for something that is yours"],["スマート *sumāto*","slim, slender; also stylish or neat (スマートな方法, “a neat way”)","*slim*; *stylish*; *neat*","*smart*: intelligent (US and UK); in the UK also “neatly dressed”"],["テンション *tenshon*","energy or mood; テンションが高い means “in high spirits”","*energy*; *excited*; *in high spirits*","*tension*: nervous strain, stress, or a bad feeling between people"],["ナイーブ *naību*","sensitive, easily hurt (about feelings)","*sensitive*","*naive*: lacking experience, too trusting, often a criticism"],["コンセント *konsento*","a power outlet in the wall","*outlet* (US); *socket* (UK)","*consent*: permission or agreement"],["サービス *sābisu*","free of charge, an extra given free; also customer service in general","*free*; *on the house*; *complimentary*","*service*: work done for others. A *service charge* is an extra fee"]]},
      "Two more are common: ハンドル (*handoru*) is a car’s steering wheel, while the English *handle* is for a door or a cup, and a bicycle has *handlebars*. And バイキング (*baikingu*) is a buffet-style meal where you take what you like, while *Viking* is a person from medieval Scandinavia.",
      {fig:'<svg viewBox="0 0 340 262"><defs><marker id="e5u5a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text class="s" x="80" y="16" text-anchor="middle">English word</text><text class="s" x="260" y="16" text-anchor="middle">Japanese meaning</text><rect class="d-lup" x="6" y="24" width="148" height="44" rx="8" stroke-width="2"/><text x="80" y="43" text-anchor="middle">mansion</text><text class="s" x="80" y="60" text-anchor="middle">grand house</text><rect class="d-sage" x="186" y="24" width="148" height="44" rx="8" stroke-width="2"/><text x="260" y="43" text-anchor="middle">マンション</text><text class="s" x="260" y="60" text-anchor="middle">apartment building</text><path class="d-ink" d="M156 46H182" stroke-width="2" marker-end="url(#e5u5a2)"/><rect class="d-lup" x="6" y="76" width="148" height="44" rx="8" stroke-width="2"/><text x="80" y="95" text-anchor="middle">claim</text><text class="s" x="80" y="112" text-anchor="middle">say it is true</text><rect class="d-sage" x="186" y="76" width="148" height="44" rx="8" stroke-width="2"/><text x="260" y="95" text-anchor="middle">クレーム</text><text class="s" x="260" y="112" text-anchor="middle">complaint</text><path class="d-ink" d="M156 98H182" stroke-width="2" marker-end="url(#e5u5a2)"/><rect class="d-lup" x="6" y="128" width="148" height="44" rx="8" stroke-width="2"/><text x="80" y="147" text-anchor="middle">tension</text><text class="s" x="80" y="164" text-anchor="middle">nervous strain</text><rect class="d-sage" x="186" y="128" width="148" height="44" rx="8" stroke-width="2"/><text x="260" y="147" text-anchor="middle">テンション</text><text class="s" x="260" y="164" text-anchor="middle">energy, mood</text><path class="d-ink" d="M156 150H182" stroke-width="2" marker-end="url(#e5u5a2)"/><rect class="d-lup" x="6" y="180" width="148" height="44" rx="8" stroke-width="2"/><text x="80" y="199" text-anchor="middle">consent</text><text class="s" x="80" y="216" text-anchor="middle">permission</text><rect class="d-sage" x="186" y="180" width="148" height="44" rx="8" stroke-width="2"/><text x="260" y="199" text-anchor="middle">コンセント</text><text class="s" x="260" y="216" text-anchor="middle">power outlet</text><path class="d-ink" d="M156 202H182" stroke-width="2" marker-end="url(#e5u5a2)"/><text class="s" x="170" y="248" text-anchor="middle">Same sound, new meaning in the new language</text></svg>', alt:"Four rows, each with an English word on the left and a Japanese word on the right, joined by an arrow. Mansion means a grand house, and マンション means an apartment building. Claim means to say something is true, and クレーム means a complaint. Tension means nervous strain, and テンション means energy or mood. Consent means permission, and コンセント means a power outlet.", cap:"Each pair sounds alike. The meanings are different, because each language gave the word its own sense."},
      {tip:"The Japanese forms are real words with real uses. A Japanese reader who sees *konsento* does not think of permission, and that is correct in Japanese."}
    ]},
    {h:"How to explain a false friend kindly", body:[
      "Learners and teachers often meet these words in conversations, emails and presentations. An unkind reaction, such as a laugh or a comment like “That’s not English”, makes people stop speaking. A kind explanation gives the right word and keeps the speaker’s confidence.",
      {ol:["**Say back what the speaker meant.** *You mean a customer complained, right?*","**Say that the Japanese word is real and useful.** *クレーム is a normal Japanese word.*","**Give the English word for that idea.** *In English we say complaint.*","**Show what the English look-alike means.** *Claim usually means to say that something is true.*","**Let the speaker try it.** *Can you say your sentence again with complaint?*"]},
      {table:[["Do","Do not"],["Treat it as a natural result of how words move between languages","Laugh, or imitate the pronunciation"],["Give the English word and one short example","Say “That’s wrong” without giving a replacement"],["Say that many katakana words are fine in English too","Say that katakana words are “fake English” or use mocking labels"],["Check the context. The speaker’s meaning may be clear from the situation","Correct every word at once"]]},
      {ex:"Compared with Japanese. When the same thing happens in another direction, English speakers use Japanese words in their own way too. Many English speakers use *tsunami* for any huge wave of something: *a tsunami of emails*. The word has taken a wider, figurative use in English. This is the same kind of shift that gave Japanese *manshon* its own meaning.", label:"Compared with Japanese"},
      "When the person you talk to is also a learner, check meaning by asking, not by correcting. *Do you mean energy?* is often better than *That’s wrong*."
    ]},
    {h:"English words from Japanese", body:[
      "English has borrowed Japanese words too, and they change in English. Here are five that most speakers know. The pronunciations show how English adapts the words, and the dictionary will give both General American (GA) and Southern British (SSBE) forms.",
      {table:[["English word","Japanese source","Meaning in English","How it sounds in English"],["tsunami","津波 (*tsunami*), “harbor wave”","a very large sea wave caused by an earthquake or similar event; also used for any huge wave of something","GA /tsuˈnɑmi/, SSBE /tsuːˈnɑːmi/; stress on the second syllable. Some speakers start with /s/."],["emoji","絵文字 (*emoji*), “picture character”","a small picture used in text messages","GA /ɪˈmoʊdʒi/, SSBE /ɪˈməʊdʒi/; stress on the second syllable."],["karaoke","カラオケ (*karaoke*), “empty orchestra”","singing along to recorded music","GA /ˌkɛriˈoʊki/, SSBE /ˌkæriˈəʊki/; stress on the third syllable."],["tycoon","大君 (*taikun*), a title used for the shogun","a powerful and rich business person","GA /taɪˈkun/, SSBE /taɪˈkuːn/"],["honcho","班長 (*hanchō*), “squad leader”","a boss or a person in charge, informal, mostly US","GA /ˈhɑntʃoʊ/, SSBE /ˈhɒntʃəʊ/"]]},
      "Three things happen to a borrowed word.",
      {list:["**Sounds change.** English speakers add the stress and vowel patterns of English. Japanese *karaoke* (ka-ra-o-ke, with even beats) becomes *ker-ee-OH-kee* with one strong syllable. Unit 3 explains why.","**Meanings change.** *Tycoon* was a Japanese title. It now means a rich business person. *Honcho* came from a military term and became a casual word for a boss.","**Grammar adapts.** English gives *emoji* the plural *emoji* or *emojis*, and *tsunami* the plural *tsunamis* or *tsunami*."]},
      "*Emoji* is a good example of a false link in English. Many English speakers think it comes from *emotion* or *emoticon*. In fact it comes from Japanese *e* (picture) and *moji* (character). The match with *emotion* is an accident. Dictionaries such as Merriam-Webster give the origin in a short note at the end of the entry, and the Online Etymology Dictionary gives more.",
      "English also took *sushi*, *tofu*, *karate*, *origami*, *haiku*, *manga* and *anime* from Japanese. These words have mostly kept their meanings, because they name things that English did not already have a word for. One change: Japanese アニメ (*anime*) means any animated film or series, while English *anime* usually means animation from Japan."
    ]},
    {h:"Common misconceptions", body:[
      {table:[["Misconception","Closer to the truth"],["Katakana words are bad English.","They are Japanese words. They are only “wrong” if you use them as English."],["All katakana words come from English.","Many come from Portuguese, German, French or Dutch, such as パン and アルバイト."],["Japan-made English is a mistake.","It is creative word building, like English *brunch* or *smog*. It does not match English use."],["False friends are a Japanese problem.","Every language pair has them: Spanish, French, German, Italian and many more."],["If a katakana word sounds like English, it will be understood.","The sound may help, but the meaning may differ, so check the context."]]},
      {terms:["hew-loanword","hew-false-friend","hew-wasei-eigo"]}
    ]},
    {h:"Why this matters to you", body:[
      "False friends cause real misunderstandings in offices, shops and classrooms. A short, kind explanation clears them up in seconds. For teachers, a list of the ten most common cases is one of the most useful things to know.",
      "It also changes how you think about words. A word is not a fixed thing. It carries a history, and every language gives it a new shape. English has done this to French and Latin for centuries, and Japanese does it with English now."
    ]}
   ],
   try:[
    {id:"e5u5-l5-x1", type:"match", q:"Match each katakana word to its meaning in Japanese.", pairs:[
      ["マンション (*manshon*)","an apartment or condo building","The English *mansion* is a very large house. The Japanese word names a type of apartment building."],
      ["クレーム (*kurēmu*)","a complaint","Customers *make a complaint*. The English *claim* is something different."],
      ["コンセント (*konsento*)","a power outlet in the wall","The English *consent* means permission. In English we say *outlet* (US) or *socket* (UK)."],
      ["サービス (*sābisu*)","free of charge, or given free","The English *service* is work for others. *On the house* means free."],
      ["テンション (*tenshon*)","energy or mood","The English *tension* is nervous strain. Japanese *tenshon* is more about energy."]
    ]},
    {id:"e5u5-l5-x2", type:"mcq", q:"Haruka from Osaka tells her host family in the US, “I live in a mansion in Osaka.” What will the family most likely picture?", options:[
      {t:"A very large, grand house", ok:true, why:"Right. In English, *mansion* means a very large and expensive house."},
      {t:"An apartment in an apartment building", why:"This is what Haruka means, because Japanese *manshon* names an apartment building. But it is not what the English word says."},
      {t:"A hotel", why:"The word does not suggest a hotel."},
      {t:"A castle", why:"A castle is a different kind of building. *Mansion* means a large house."}
    ]},
    {id:"e5u5-l5-x3", type:"sort", q:"Sort each item by the direction the word traveled.", buckets:["A word that English took from Japanese","A word that Japanese took from English, with a new meaning"], items:[
      {t:"*tsunami* in an English news report", b:0, why:"From 津波 (*tsunami*). English news uses the word for a very large wave."},
      {t:"テンション (*tenshon*) meaning “energy”", b:1, why:"It comes from English *tension*, and Japanese gave it a different sense."},
      {t:"*emoji* in a text message", b:0, why:"From 絵文字 (*emoji*), “picture character”."},
      {t:"クレーム (*kurēmu*) meaning “complaint”", b:1, why:"It comes from English *claim*, with a new sense in Japanese."},
      {t:"*tycoon* in a business article", b:0, why:"From 大君 (*taikun*). English uses it for a powerful business person."},
      {t:"コンセント (*konsento*) meaning “power outlet”", b:1, why:"It looks like English *consent*, but it names an object in Japanese."},
      {t:"*karaoke* in an English-speaking country", b:0, why:"From カラオケ, “empty orchestra”."},
      {t:"サービス (*sābisu*) meaning “free of charge”", b:1, why:"It comes from English *service*, with the extra sense of a free gift."}
    ]},
    {id:"e5u5-l5-x4", type:"mcq", q:"Kenji is in a restaurant in the US. He wants to ask if the dessert costs extra. He says, “Is the dessert service?” What should he say to be clear?", options:[
      {t:"“Is the dessert free?” or “Is the dessert on the house?”", ok:true, why:"Right. *Free* and *on the house* both say that you do not pay. This is what Japanese サービス means in this context."},
      {t:"“Is the dessert consent?”", why:"*Consent* means permission and does not fit."},
      {t:"“Is the dessert a service charge?”", why:"A *service charge* is an extra fee that is added to a bill. It is nearly the opposite of what he means."},
      {t:"“Is the dessert tension?”", why:"*Tension* has nothing to do with price."}
    ]},
    {id:"e5u5-l5-x5", type:"spot", q:"A tutor drafted this explanation for a student who said “I live in a manshon.” Tap each part that is **unkind or inaccurate**.", ask:"unkind or inaccurate", parts:[
      {t:"In Japanese, *manshon* means an apartment building, so your sentence is clear.", flag:false, why:"Kind and accurate. It starts from what the student meant."},
      " ",
      {t:"Japanese people always use English words wrongly.", flag:true, why:"Inaccurate and unkind. Katakana words are Japanese words, and many match English well."},
      " ",
      {t:"In English, *mansion* means a very large, grand house.", flag:false, why:"Accurate. It gives the English meaning clearly."},
      " ",
      {t:"You can say *I live in an apartment building*, or *a condo* if you own it (US).", flag:false, why:"Accurate and useful. It gives a replacement word with a US label."},
      " ",
      {t:"That sounds so funny to English ears!", flag:true, why:"Unkind. It turns a helpful explanation into a joke."},
      " ",
      {t:"Katakana English is fake English.", flag:true, why:"Inaccurate and unkind. Katakana words belong to Japanese and follow Japanese rules."}
    ]},
    {id:"e5u5-l5-x6", type:"order", q:"Put these steps in a good order for explaining a false friend kindly.", items:[
      {t:"Say back what the speaker meant, in English", why:"This shows that you understood and that the speaker is not “wrong” in intent."},
      {t:"Say that the Japanese word is a real and useful word", why:"It respects the speaker’s language."},
      {t:"Give the English word for that meaning", why:"The speaker needs a replacement, not only a correction."},
      {t:"Show what the English look-alike means, with one short example", why:"The contrast helps the speaker remember the difference."},
      {t:"Invite the speaker to say the sentence again", why:"A second try turns the explanation into practice."}
    ]},
    {id:"e5u5-l5-x7", type:"mcq", q:"Which statement about the Japanese word アルバイト (*arubaito*, a part-time job) is accurate?", options:[
      {t:"It comes from the German word *Arbeit*, which means “work”.", ok:true, why:"Right. Not every katakana word comes from English."},
      {t:"It is short for the English phrase *a little bit*.", why:"There is no such origin. The word comes from German."},
      {t:"It is wasei-eigo built from English *all* and *buy*.", why:"This is not true. It is a loanword from German."},
      {t:"It is an English word that Japanese took with the same meaning.", why:"English does not use *arubaito* at all. In English, we say *part-time job*."}
    ]},
    {id:"e5u5-l5-x8", type:"explain", q:"Ayaka, a Japanese friend, writes in an English chat: “I have a lot of tension today!” She means that she is full of energy. Explain what happened, and write how you could respond kindly.", size:"3–5 sentences", hint:"Say what the Japanese word テンション means, what the English word *tension* means, and what Ayaka could say instead.", model:"In Japanese, テンション (*tenshon*) means energy or mood, so “my tension is high” means “I feel full of energy”. English *tension* means nervous strain, so a reader may think that Ayaka is stressed or worried. I would say, “You feel full of energy today, great! In English you can say *I have a lot of energy* or *I’m in high spirits*. *Tension* usually means stress.” This keeps her meaning, respects her Japanese, and gives her a word she can use.", points:["Explains the Japanese meaning of テンション as energy or mood","Explains that English *tension* means nervous strain","Gives a replacement such as *energy*, *excited* or *in high spirits*","Responds kindly: says the Japanese word is real and the meaning was clear"]}
   ],
   apply:{
    intro:"Explore loanwords with free tools. You need a free dictionary, a notebook and, if you like, the free Online Etymology Dictionary. COCA at english-corpora.org needs a free account.",
    tasks:[
     {t:"Check five katakana words", how:[
       "Choose five katakana words from your own life or from this lesson, such as マンション, ナイーブ, スマート, サービス and コンセント.",
       "For each word, write the Japanese meaning and the English look-alike. Look up the English word in a free learner’s dictionary and copy its main meaning.",
       "Write a short, kind sentence that you could say to a friend to explain the difference."
     ], write:"Word… Japanese meaning… English meaning… my kind explanation… (five)"},
     {t:"Find the origin of an English word from Japanese", how:[
       "Look up *tsunami*, *emoji* or *karaoke* in Merriam-Webster. Read the short note about the origin.",
       "Write the Japanese word, its parts and the English meaning.",
       "Look up the pronunciation in a dictionary that shows both US and UK forms, and write down one difference between how English and Japanese speakers say it."
     ], write:"English word… Japanese source… parts… English meaning… pronunciation notes…"},
     {t:"Run a corpus check", how:[
       "Register for free at english-corpora.org and open COCA.",
       "Search for *tsunami*. Look at the words that appear before and after it, and the text types where it is found. Read ten lines.",
       "Write down whether the word is used for real waves or for other things, such as *a tsunami of …*, and give one example of each."
     ], write:"What I searched… literal uses… figurative uses… one example of each…"}
    ],
    proof:"A list of five katakana words with Japanese and English meanings and a kind explanation for each. Notes on the origin of one English word from Japanese. A short corpus check of *tsunami*."
   },
   read:[
    {book:"eling", where:"The Historical Linguistics chapter, sections “Lexical change” and “Semantic change”", note:"They explain how words are borrowed and how their meanings shift over time."}
   ]
  }
  ],
  checkpoint:["e5u5-q02", "e5u5-q05", "e5u5-q07", "e5u5-q10", "e5u5-q14", "e5u5-q16", "e5u5-q18", "e5u5-q23", "e5u5-q28", "e5u5-q31", "e5u5-q36", "e5u5-q39"],
  cpBank:[
   {"id": "e5u5-cp01", "lesson": "e5u5-l1", "level": 1, "q": "Which adjective usually goes with *traffic*?", "options": [{"t": "heavy", "ok": true, "why": "Right. *Heavy traffic* is a collocation."}, {"t": "strong", "why": "*Strong traffic* is not used."}, {"t": "tall", "why": "*Tall* describes height, not traffic."}, {"t": "weak", "why": "*Weak traffic* is not used."}]},
   {"id": "e5u5-cp02", "lesson": "e5u5-l1", "level": 2, "q": "Which sentence uses a verb that is typical of US English?", "options": [{"t": "I’m going to do a shower.", "why": "*Do* does not go with *shower*."}, {"t": "I’m going to make a shower.", "why": "*Make* does not go with *shower*."}, {"t": "I’m going to put a shower.", "why": "*Put* does not go with *shower*."}, {"t": "I’m going to take a shower.", "ok": true, "why": "Right. US English more often says *take a shower*. UK English often says *have a shower*."}]},
   {"id": "e5u5-cp03", "lesson": "e5u5-l1", "level": 3, "q": "Dmitri writes “I did a big effort.” A teacher marks it. Which comment explains the problem best?", "options": [{"t": "The sentence has a grammar error that changes the meaning.", "why": "The meaning is clear. The choice of verb is unusual."}, {"t": "The word *effort* is not used in English.", "why": "*Effort* is a normal English word."}, {"t": "The phrase is *make an effort*. The verb is a habit of English, not a logical choice.", "ok": true, "why": "Right. It gives the correct phrase and the reason."}, {"t": "Native speakers say *do* with every noun.", "why": "*Do* is not used with every noun."}]},
   {"id": "e5u5-cp04", "lesson": "e5u5-l2", "level": 1, "q": "Which sentence follows the pronoun rule for phrasal verbs?", "options": [{"t": "She turned off it.", "why": "A pronoun cannot follow the particle."}, {"t": "She off turned it.", "why": "The particle does not come before the verb."}, {"t": "She turned it off.", "ok": true, "why": "Right. The pronoun goes in the middle."}, {"t": "Turned she it off.", "why": "English does not put the subject after the verb in a plain statement."}]},
   {"id": "e5u5-cp05", "lesson": "e5u5-l2", "level": 2, "q": "Which sentence has a prepositional verb?", "options": [{"t": "She picked up the box.", "why": "*Pick up* is a phrasal verb."}, {"t": "She looks after her grandmother.", "ok": true, "why": "Right. *Look after* does not split."}, {"t": "She turned off the light.", "why": "*Turn off* is a phrasal verb."}, {"t": "She wrote down the number.", "why": "*Write down* is a phrasal verb."}]},
   {"id": "e5u5-cp06", "lesson": "e5u5-l2", "level": 3, "q": "A student says, “I do not need phrasal verbs, because single verbs are always better.” What is the best reply?", "options": [{"t": "Single verbs are often more formal, but many phrasal verbs are normal in speech and in careful writing, and some have no single-verb match.", "ok": true, "why": "Right. It gives a balanced answer."}, {"t": "Single verbs are always better.", "why": "Not always. Many phrasal verbs are standard."}, {"t": "Phrasal verbs are always slang.", "why": "Most are standard."}, {"t": "Phrasal verbs are the same as idioms in every case.", "why": "Some are idiomatic, and some are literal."}]},
   {"id": "e5u5-cp07", "lesson": "e5u5-l3", "level": 1, "q": "Which phrase is an idiom?", "options": [{"t": "under the weather", "ok": true, "why": "Right. It means slightly ill. The words do not give that meaning."}, {"t": "as far as I know", "why": "This is a chunk with a clear meaning."}, {"t": "Nice to meet you.", "why": "This is a fixed polite phrase."}, {"t": "on the other hand", "why": "This is a connecting phrase with a clear meaning."}]},
   {"id": "e5u5-cp08", "lesson": "e5u5-l3", "level": 2, "q": "Which advice is best when you speak to listeners from many countries?", "options": [{"t": "Use as many idioms as you can.", "why": "This makes understanding harder."}, {"t": "Never use any phrase with more than one word.", "why": "This is not possible or useful."}, {"t": "Use only idioms from sports.", "why": "Sports idioms are often tied to one culture."}, {"t": "Use plain words first, and explain any idiom you use.", "ok": true, "why": "Right. It keeps the message clear."}]},
   {"id": "e5u5-cp09", "lesson": "e5u5-l4", "level": 1, "q": "Which pair shows the same denotation but different connotation?", "options": [{"t": "cat and dog", "why": "These have different meanings."}, {"t": "run and walk", "why": "These have different meanings."}, {"t": "hot and cold", "why": "These have opposite meanings."}, {"t": "slim and skinny", "ok": true, "why": "Right. Both mean having little body fat, but the feelings differ."}]},
   {"id": "e5u5-cp10", "lesson": "e5u5-l4", "level": 2, "q": "Which request is the most polite?", "options": [{"t": "Help me.", "why": "A direct command."}, {"t": "Can you help me?", "why": "Polite, but more direct than the others."}, {"t": "I was wondering if you could help me.", "ok": true, "why": "Right. The past tense and a longer frame make the request more indirect."}, {"t": "You must help me.", "why": "A strong demand."}]},
   {"id": "e5u5-cp11", "lesson": "e5u5-l5", "level": 1, "q": "Which Japanese word is correctly paired with its meaning?", "options": [{"t": "コンセント (*konsento*), permission", "why": "It means a power outlet."}, {"t": "マンション (*manshon*), a very large house", "why": "It means an apartment building."}, {"t": "サービス (*sābisu*), free of charge or given free", "ok": true, "why": "Right. It is one of the meanings of the Japanese word."}, {"t": "クレーム (*kurēmu*), to say something is true", "why": "It means a complaint."}]},
   {"id": "e5u5-cp12", "lesson": "e5u5-l5", "level": 2, "q": "Which English word comes from Japanese?", "options": [{"t": "garage", "why": "It comes from French."}, {"t": "karaoke", "ok": true, "why": "Right. It comes from カラオケ, “empty orchestra”."}, {"t": "piano", "why": "It comes from Italian."}, {"t": "pizza", "why": "It comes from Italian."}]}
  ],
  bank:[
   {"id": "e5u5-q01", "lesson": "e5u5-l1", "level": 1, "q": "What is a **collocation**?", "options": [{"t": "A combination of words that often appear together, more often than chance would predict.", "ok": true, "why": "Right. *Heavy rain* and *make a decision* are examples."}, {"t": "A grammar rule that fixes the order of words in a sentence.", "why": "That describes word order rules. A collocation is a habit about which words go with which."}, {"t": "A phrase whose meaning cannot be worked out from its words.", "why": "That describes an idiom. A collocation usually has a clear meaning."}, {"t": "A word that has two or more meanings.", "why": "That is a polysemous word. A collocation is about word partners."}]},
   {"id": "e5u5-q02", "lesson": "e5u5-l1", "level": 1, "q": "Which phrase uses the usual verb?", "options": [{"t": "do a mistake", "why": "*Do* does not go with *mistake*. This is a common learner error."}, {"t": "take a mistake", "why": "*Take* does not go with *mistake*."}, {"t": "put a mistake", "why": "*Put* does not form a collocation with *mistake*."}, {"t": "make a mistake", "ok": true, "why": "Right. *Make a mistake* is the fixed collocation."}]},
   {"id": "e5u5-q03", "lesson": "e5u5-l1", "level": 1, "q": "In the phrase *take a shower*, what does the term **light verb** tell you about *take*?", "options": [{"t": "It means to carry a shower from one place to another.", "why": "*Take* is not used in its literal sense here."}, {"t": "It is a verb that is said more quietly in speech.", "why": "*Light* has nothing to do with loudness. It means that the verb has little meaning."}, {"t": "It carries little meaning of its own, and the noun *shower* carries the meaning.", "ok": true, "why": "Right. Light verbs such as *take*, *make*, *have* and *do* help to build the phrase."}, {"t": "It is a verb that cannot be used in the past tense.", "why": "Light verbs have all tenses, for example *took a shower*."}]},
   {"id": "e5u5-q04", "lesson": "e5u5-l1", "level": 2, "q": "Hana writes, “I did a big decision yesterday.” What is the best correction?", "options": [{"t": "I took a big decision yesterday, because *take* is the only correct verb in all English.", "why": "*Take a decision* is typical of UK English. US English more often says *make a decision*."}, {"t": "I made a big decision yesterday.", "ok": true, "why": "Right. We *make* a decision. UK English also uses *take a decision*."}, {"t": "I had a big decision yesterday.", "why": "*Have* does not form a collocation with *decision* in this sense."}, {"t": "I did a big decision yesterday, because *did* is correct in speech.", "why": "*Do* does not go with *decision*."}]},
   {"id": "e5u5-q05", "lesson": "e5u5-l1", "level": 2, "q": "A British manager writes, “We need to take a decision by Friday.” Which statement is accurate?", "options": [{"t": "*Take a decision* is typical of UK English. US English more often says *make a decision*.", "ok": true, "why": "Right. Dictionaries label this difference between varieties."}, {"t": "It is a grammar error in every variety of English.", "why": "It is a normal collocation in UK English."}, {"t": "It means that the manager wants to steal a decision from someone.", "why": "*Take* here is a light verb, not the sense of stealing."}, {"t": "It is an American phrase and a British speaker would never say it.", "why": "It is the other way round. It is more typical of UK English."}]},
   {"id": "e5u5-q06", "lesson": "e5u5-l1", "level": 2, "q": "Both *tall* and *high* describe vertical size. Which phrase is natural?", "options": [{"t": "a high man", "why": "*High* does not describe a person’s height."}, {"t": "a tall price", "why": "*Tall* is not used for prices. The usual collocation is *a high price*."}, {"t": "a big-tall man", "why": "This is not a natural English phrase."}, {"t": "a tall man", "ok": true, "why": "Right. We use *tall* for people. We use *high* for things such as prices and mountains."}]},
   {"id": "e5u5-q07", "lesson": "e5u5-l1", "level": 3, "q": "Mei searches a corpus. *Heavy rain* has very many examples, and *strong rain* has very few. What is the best conclusion?", "options": [{"t": "*Strong rain* is a grammar error, and the corpus proves it.", "why": "It is not a grammar error. It is an unusual choice."}, {"t": "A corpus cannot say anything about word partners.", "why": "A corpus is one of the best tools for finding collocations."}, {"t": "*Heavy rain* is the usual collocation, and *strong rain* is rare, so I should read the few lines for *strong rain* to see how they are used.", "ok": true, "why": "Right. The corpus gives evidence about usage. The few examples also need to be read, because they may be about something else."}, {"t": "Both phrases are equally usual, because both appear.", "why": "Appearing is not enough. How often each one appears is the evidence."}]},
   {"id": "e5u5-q08", "lesson": "e5u5-l1", "level": 3, "q": "Tomás learns vocabulary from lists of single words. He writes, “I made a research on the topic.” What is the best advice?", "options": [{"t": "Learn more single words, because he has a small vocabulary.", "why": "The problem is not the number of words. It is the partner of the word."}, {"t": "Learn each noun with its usual verb, as a whole phrase: *do research*.", "ok": true, "why": "Right. Phrases carry the partner information that single words do not."}, {"t": "Always use *make*, because it is the most common verb.", "why": "*Make* is only one of several light verbs, and it is not right for *research*."}, {"t": "Avoid the word *research* in writing.", "why": "The word is fine. The verb is the problem."}]},
   {"id": "e5u5-q09", "lesson": "e5u5-l2", "level": 1, "q": "Which of these is a **prepositional verb**, which never splits?", "options": [{"t": "turn off", "why": "*Turn off* is a phrasal verb. *Turn it off* is possible."}, {"t": "look after", "ok": true, "why": "Right. *Look after her* keeps the preposition with the object."}, {"t": "pick up", "why": "*Pick up* is a phrasal verb. *Pick it up* is possible."}, {"t": "write down", "why": "*Write down* is a phrasal verb. *Write it down* is possible."}]},
   {"id": "e5u5-q10", "lesson": "e5u5-l2", "level": 1, "q": "Where does a pronoun object (*it*, *them*, *her*) go with a separable phrasal verb?", "options": [{"t": "Between the verb and the particle, as in *turn it off*.", "ok": true, "why": "Right. A pronoun object goes in the middle."}, {"t": "After the particle, as in *turn off it*.", "why": "This is not used. It is a common error."}, {"t": "At the start of the sentence only.", "why": "The pronoun stays near the verb and does not move to the start."}, {"t": "It can go anywhere in the sentence.", "why": "Word order here is fixed."}]},
   {"id": "e5u5-q11", "lesson": "e5u5-l2", "level": 1, "q": "Which stress pattern is typical for the phrasal verb in *pick it up*?", "options": [{"t": "PICK it up (the verb is stressed)", "why": "This pattern is typical of prepositional verbs such as *LOOK after*."}, {"t": "pick IT up (the pronoun is stressed)", "why": "A pronoun is weak. It is stressed only for contrast."}, {"t": "All three words are stressed equally.", "why": "English does not stress all words equally. Content words and particles are stronger."}, {"t": "pick it UP (the particle is stressed)", "ok": true, "why": "Right. In a phrasal verb the particle usually carries the stress."}]},
   {"id": "e5u5-q12", "lesson": "e5u5-l2", "level": 2, "q": "Which sentence is correct?", "options": [{"t": "We’re looking forward to hear from you.", "why": "After *look forward to*, use *hearing*. The *to* is a preposition."}, {"t": "We’re looking to forward hearing from you.", "why": "This changes the order of the words in the verb."}, {"t": "We’re looking forward to hearing from you.", "ok": true, "why": "Right. After the preposition *to*, we use an -ing form."}, {"t": "We’re looking forward hearing from you.", "why": "The word *to* is missing."}]},
   {"id": "e5u5-q13", "lesson": "e5u5-l2", "level": 2, "q": "Which sentence has a phrasal verb with **no object**, so nothing can split?", "options": [{"t": "Please turn it off.", "why": "This has the object *it*, which goes in the middle."}, {"t": "Please sit down.", "ok": true, "why": "Right. *Sit down* has no object."}, {"t": "Please write it down.", "why": "This has the object *it*."}, {"t": "Please look after her.", "why": "This is a prepositional verb with an object."}]},
   {"id": "e5u5-q14", "lesson": "e5u5-l2", "level": 2, "q": "A report to a committee says the group wants to delay an event. Which verb is most suitable in a formal report?", "options": [{"t": "postpone", "ok": true, "why": "Right. *Postpone* is more formal than *put off*."}, {"t": "put off", "why": "*Put off* is fine in speech and in neutral writing, but *postpone* is more formal."}, {"t": "kick back", "why": "*Kick back* means to relax. It does not mean to delay."}, {"t": "call up", "why": "*Call up* means to telephone or to order into service. It does not mean to delay."}]},
   {"id": "e5u5-q15", "lesson": "e5u5-l2", "level": 3, "q": "Ana looks up *take off* and finds four meanings in the dictionary. What should she do first?", "options": [{"t": "Choose the first meaning, because it is the most common.", "why": "The first meaning may not be the one in her sentence."}, {"t": "Translate each word and add the meanings together.", "why": "The meaning of a phrasal verb often cannot be built from its parts."}, {"t": "Ignore the verb and move on.", "why": "Multi-word verbs are everywhere. It is better to check the meaning."}, {"t": "Read the example sentences and choose the meaning that fits the sentence she met.", "ok": true, "why": "Right. A multi-word verb has many meanings, and context decides which one is meant."}]},
   {"id": "e5u5-q16", "lesson": "e5u5-l2", "level": 3, "q": "A student writes, “Please pick up it.” What is the best explanation to give?", "options": [{"t": "Both orders are fine with every object, so there is no mistake.", "why": "A pronoun object cannot follow the particle."}, {"t": "The verb should be *take* and not *pick*.", "why": "*Pick* is fine. The word order is the problem."}, {"t": "With a pronoun, the particle goes after it: *pick it up*. With a noun, both *pick up the box* and *pick the box up* are fine.", "ok": true, "why": "Right. It gives the rule and shows that nouns can go either side."}, {"t": "It is an informal use, so it is acceptable in speech.", "why": "It is not acceptable in speech or in writing."}]},
   {"id": "e5u5-q17", "lesson": "e5u5-l3", "level": 1, "q": "Which statement best describes an **idiom**?", "options": [{"t": "A phrase that only appears in formal writing.", "why": "Idioms appear in many registers. Many are informal."}, {"t": "A phrase that every native speaker uses every day.", "why": "Many idioms are rare or old-fashioned."}, {"t": "A fixed phrase whose meaning is not the sum of its words.", "ok": true, "why": "Right. *Spill the beans* means to tell a secret."}, {"t": "A phrase with the same meaning as its separate words.", "why": "The point of an idiom is that the meaning is different from the words."}]},
   {"id": "e5u5-q18", "lesson": "e5u5-l3", "level": 1, "q": "Which phrase is in its usual order?", "options": [{"t": "forth and back", "why": "This reverses the usual order."}, {"t": "back and forth", "ok": true, "why": "Right. English speakers say *back and forth*. The reverse is not usual."}, {"t": "later or sooner", "why": "The usual phrase is *sooner or later*."}, {"t": "pepper and salt", "why": "The usual order is *salt and pepper*."}]},
   {"id": "e5u5-q19", "lesson": "e5u5-l3", "level": 1, "q": "In this lesson, a **chunk** is:", "options": [{"t": "A group of words that is stored and used as one unit, such as *as far as I know*.", "ok": true, "why": "Right. The slots may change, but the phrase comes ready-made."}, {"t": "A big piece of text such as a paragraph.", "why": "A chunk is a short phrase, not a paragraph."}, {"t": "A word that is left out of a sentence.", "why": "A chunk is a group of words that is present."}, {"t": "A mistake in word order.", "why": "A chunk is a normal unit of language."}]},
   {"id": "e5u5-q20", "lesson": "e5u5-l3", "level": 2, "q": "Which idiom comes from baseball and may confuse an international listener?", "options": [{"t": "in the long run", "why": "This is a general phrase with no sport in it."}, {"t": "on the same page", "why": "This is a common phrase, and it is not tied to baseball."}, {"t": "a piece of cake", "why": "This is a food picture and not tied to baseball."}, {"t": "touch base", "ok": true, "why": "Right. *Touch base* comes from baseball and is used in US business English."}]},
   {"id": "e5u5-q21", "lesson": "e5u5-l3", "level": 2, "q": "What is the best reason to learn English in chunks?", "options": [{"t": "Chunks replace the need to learn any grammar.", "why": "Chunks help, but you still need grammar to build new sentences."}, {"t": "Chunks are always idioms, and idioms impress listeners.", "why": "Most chunks are not idioms, and idioms are not always safe."}, {"t": "A chunk includes grammar and word partners, so you speak faster and more naturally.", "ok": true, "why": "Right. When you learn *Would you mind opening …?* as a whole, you also learn the -ing form."}, {"t": "Chunks are shorter than words.", "why": "A chunk is longer than a word."}]},
   {"id": "e5u5-q22", "lesson": "e5u5-l3", "level": 2, "q": "The sentence “The project is up in the air” is for an international team. Which rewrite is the clearest?", "options": [{"t": "The project is in limbo.", "why": "*In limbo* is another figurative phrase."}, {"t": "We have not decided about the project yet.", "ok": true, "why": "Right. It keeps the meaning and uses plain words."}, {"t": "The project is in the balance.", "why": "This is also an idiom, so it is not clearer for an international team."}, {"t": "The project is up in the clouds.", "why": "This changes the idiom and the meaning is lost."}]},
   {"id": "e5u5-q23", "lesson": "e5u5-l3", "level": 3, "q": "In a meeting, a US colleague says, “Let’s table this issue.” A UK colleague says the same words. What may happen?", "options": [{"t": "In US English it usually means to postpone the discussion, and in UK English it can mean to put it forward for discussion.", "ok": true, "why": "Right. The same idiom can have opposite meanings in two varieties, which is a good reason to check."}, {"t": "Both will understand it in exactly the same way.", "why": "The two varieties use *table* with different meanings."}, {"t": "It will mean to remove the table from the room.", "why": "The words are figurative, not literal."}, {"t": "It is a grammar error in both varieties.", "why": "It is a normal idiom in both. The meanings differ."}]},
   {"id": "e5u5-q24", "lesson": "e5u5-l3", "level": 3, "q": "Mei will give a short talk to listeners from many countries. Which plan is best?", "options": [{"t": "Use as many idioms as possible, so the talk sounds fluent.", "why": "Many listeners will not know them, and the talk will become hard to follow."}, {"t": "Ask listeners to look up every idiom afterwards.", "why": "This puts the work on the listeners."}, {"t": "Speak very fast so there is no time to be confused.", "why": "Fast speech makes understanding harder."}, {"t": "Use plain words, and add a short plain explanation after any idiom she does use.", "ok": true, "why": "Right. This keeps the talk clear and still allows some color."}]},
   {"id": "e5u5-q25", "lesson": "e5u5-l4", "level": 1, "q": "What is **connotation**?", "options": [{"t": "The core dictionary meaning of a word.", "why": "That is its denotation."}, {"t": "The sound of a word.", "why": "Sound is a different feature."}, {"t": "The grammar class of a word.", "why": "That is its word class, such as noun or verb."}, {"t": "The feeling or attitude that a word carries in addition to its core meaning.", "ok": true, "why": "Right. *Slim* and *skinny* have a similar core meaning but different feelings."}]},
   {"id": "e5u5-q26", "lesson": "e5u5-l4", "level": 1, "q": "Which word is the most formal?", "options": [{"t": "start", "why": "*Start* is neutral."}, {"t": "begin", "why": "*Begin* is neutral."}, {"t": "commence", "ok": true, "why": "Right. *Commence* is formal. *Start* and *begin* are neutral."}, {"t": "kick off", "why": "*Kick off* is informal."}]},
   {"id": "e5u5-q27", "lesson": "e5u5-l4", "level": 1, "q": "Why do many formal English words come from French and Latin?", "options": [{"t": "English speakers invented them in the 1900s to sound educated.", "why": "The layers are much older than the 1900s."}, {"t": "After the Norman Conquest in 1066, French was the language of the court and law for generations, and Latin words came later through writing and scholarship.", "ok": true, "why": "Right. The result is pairs such as *help* and *assist*."}, {"t": "Old English had no words for formal ideas.", "why": "Old English had many words for formal ideas. French and Latin added a second layer."}, {"t": "A law passed in 1066 required formal words from Latin.", "why": "No such law exists."}]},
   {"id": "e5u5-q28", "lesson": "e5u5-l4", "level": 2, "q": "Which is the best softened version of “That’s wrong”?", "options": [{"t": "I’m not sure that’s quite right.", "ok": true, "why": "Right. The hedges *not sure* and *quite* soften the disagreement."}, {"t": "That’s absolutely wrong.", "why": "This is stronger, not softer."}, {"t": "That is wrong, I am telling you.", "why": "This is more direct and sounds sharp."}, {"t": "Wrong.", "why": "This is the bluntest version."}]},
   {"id": "e5u5-q29", "lesson": "e5u5-l4", "level": 2, "q": "A dictionary entry has the label *disapproving*. What does the label tell you?", "options": [{"t": "The word is only used in formal writing.", "why": "That is a *formal* label."}, {"t": "The word is rude and must never be used.", "why": "That would be an *offensive* or *taboo* label."}, {"t": "The word is old-fashioned.", "why": "That is an *old-fashioned* label."}, {"t": "The word usually shows a negative opinion of what it describes.", "ok": true, "why": "Right. For example, *nosy* shows disapproval of someone’s curiosity."}]},
   {"id": "e5u5-q30", "lesson": "e5u5-l4", "level": 2, "q": "Which word is a **euphemism** for *died*?", "options": [{"t": "collapsed", "why": "*Collapsed* describes a fall, not a death."}, {"t": "gone off", "why": "This does not mean that someone died."}, {"t": "passed away", "ok": true, "why": "Right. *Pass away* is a gentler way to say *die*."}, {"t": "deceased", "why": "*Deceased* is formal, but it is not the gentle phrase for the verb."}]},
   {"id": "e5u5-q31", "lesson": "e5u5-l4", "level": 3, "q": "Hana writes to her professor: “Hey Prof, I’m gonna be late for the meeting.” Which rewrite is best?", "options": [{"t": "“Dear Professor Lee, I shall commence my journey late and arrive after the appointed time.”", "why": "This is too stiff and unnatural."}, {"t": "“Dear Professor Lee, I’m sorry, but I will be late for the meeting.”", "ok": true, "why": "Right. It uses a neutral register, a polite opening and a small apology."}, {"t": "“Hi, late. Sorry.”", "why": "This is too short and not polite."}, {"t": "“Hey Prof, no worries, I’ll be a bit late!”", "why": "This is still informal and does not apologize."}]},
   {"id": "e5u5-q32", "lesson": "e5u5-l4", "level": 3, "q": "Mei wants to refuse a coworker’s request for help this week, but she wants to be kind. Which reply is best?", "options": [{"t": "“I’m afraid I can’t this week, but I could help next week.”", "ok": true, "why": "Right. It uses a softener and gives another option."}, {"t": "“No.”", "why": "This is very blunt."}, {"t": "“I was just wondering if maybe I might possibly be unable, perhaps.”", "why": "Too many softeners hide the message."}, {"t": "“That is impossible, so do not ask again.”", "why": "This is rude."}]},
   {"id": "e5u5-q33", "lesson": "e5u5-l5", "level": 1, "q": "What does **wasei-eigo** mean?", "options": [{"t": "Words and phrases made in Japan from English parts, often with a meaning that English does not have.", "ok": true, "why": "Right. The term means “Japan-made English”."}, {"t": "English words that were borrowed from Japanese.", "why": "That is the other direction, for example *tsunami*."}, {"t": "A way of writing English in katakana.", "why": "It is about vocabulary, not about writing."}, {"t": "A type of mistake that only learners make.", "why": "Wasei-eigo is a feature of Japanese vocabulary, not a learner mistake."}]},
   {"id": "e5u5-q34", "lesson": "e5u5-l5", "level": 1, "q": "In Japanese, ナイーブ (*naību*) usually describes a person who is:", "options": [{"t": "inexperienced and too trusting", "why": "That is the English meaning of *naive*."}, {"t": "very clever", "why": "That is not the sense of the Japanese word."}, {"t": "very wealthy", "why": "The word does not describe money."}, {"t": "sensitive and easily hurt", "ok": true, "why": "Right. The English *naive* means something else."}]},
   {"id": "e5u5-q35", "lesson": "e5u5-l5", "level": 1, "q": "In English, what does the word *consent* mean?", "options": [{"t": "A wall power outlet", "why": "That is the Japanese meaning of コンセント."}, {"t": "A kind of complaint", "why": "The English word for that is *complaint*."}, {"t": "Permission or agreement", "ok": true, "why": "Right. The Japanese コンセント (*konsento*) means a power outlet, which is a different thing."}, {"t": "Free of charge", "why": "The English phrase for that is *free* or *on the house*."}]},
   {"id": "e5u5-q36", "lesson": "e5u5-l5", "level": 2, "q": "Which English word or phrase means the same as Japanese コンセント (*konsento*)?", "options": [{"t": "*consent*", "why": "This means permission."}, {"t": "*outlet* (US) or *socket* (UK)", "ok": true, "why": "Right. These are the words for a wall power outlet."}, {"t": "*console*", "why": "A console is a control panel or a game machine."}, {"t": "*connection*", "why": "This is a general word and does not name the wall outlet."}]},
   {"id": "e5u5-q37", "lesson": "e5u5-l5", "level": 2, "q": "The English word *tsunami* comes from:", "options": [{"t": "Japanese 津波 (*tsunami*), “harbor wave”", "ok": true, "why": "Right. English borrowed the word with its meaning."}, {"t": "Chinese 海 (*hai*), “sea”", "why": "The word comes from Japanese."}, {"t": "Latin *tsunamus*", "why": "There is no such Latin word."}, {"t": "Portuguese *tsunamo*", "why": "There is no such Portuguese word."}]},
   {"id": "e5u5-q38", "lesson": "e5u5-l5", "level": 2, "q": "Yuki, a Japanese speaker, says in English, “My father is very smart.” She means that he is slim. What will most English speakers understand?", "options": [{"t": "That her father is slim", "why": "This is the Japanese meaning, not the usual English meaning."}, {"t": "That her father is rich", "why": "*Smart* does not mean rich."}, {"t": "That her father is shy", "why": "*Smart* does not mean shy."}, {"t": "That her father is intelligent", "ok": true, "why": "Right. In English, *smart* usually means intelligent. Yuki’s sense comes from Japanese スマート (*sumāto*)."}]},
   {"id": "e5u5-q39", "lesson": "e5u5-l5", "level": 3, "q": "A coworker says, “We got a claim from a customer.” You think she means a complaint. What is the kindest and clearest response?", "options": [{"t": "“That’s not English.”", "why": "It is unkind and gives no help."}, {"t": "“Oh no, a claim! Which law did we break?”", "why": "This takes the English meaning and confuses the speaker."}, {"t": "“You mean a customer complained? In English we say *complaint*. *Claim* means to say something is true.”", "ok": true, "why": "Right. It checks the meaning, respects her, and gives the word."}, {"t": "Say nothing, and hope she learns later.", "why": "The speaker may keep using the word and be misunderstood."}]},
   {"id": "e5u5-q40", "lesson": "e5u5-l5", "level": 3, "q": "Sione says, “*Emoji* comes from *emotion*.” What is the best correction?", "options": [{"t": "It comes from Latin *emoticus*.", "why": "No such Latin word is the source."}, {"t": "It comes from Japanese *e* (picture) and *moji* (character). The link with *emotion* is an accident.", "ok": true, "why": "Right. The origin is Japanese 絵文字."}, {"t": "It comes from English *emotion* and *icon*.", "why": "The English words look similar, but the origin is Japanese."}, {"t": "It comes from Korean *emo-ji*.", "why": "The word comes from Japanese."}]}
  ],
  codex:[
   {id:"collocation-english", title:"Collocation", aka:["word partnership","word partners","make and do"], tags:["vocabulary","collocation","usage"],
    summary:"The habit that some words appear together far more often than others, such as heavy rain and make a decision.",
    levels:{
     starter:[
      "Some words are partners. We say *heavy rain*, not *strong rain*. We say *make a decision*, not *do a decision*. We say *do homework*, not *make homework*. These combinations are called **collocations**.",
      "A collocation is not a grammar rule. If you break it, people usually still understand you. But your English sounds less natural, because native speakers expect the usual partner.",
      "You cannot work collocations out from logic or from your first language. *Heavy* and *strong* both mean “a lot of”, but each one has its own nouns. The only way to learn them is to meet them in real English and to learn whole phrases.",
      "Write *make a mistake* in your notebook, not just *mistake*. When you meet a new noun, look for the verbs and adjectives that go with it.",
      {key:"Learn words together with their partners. A phrase is easier to remember and to use than a single word."}
     ],
     builder:[
      "Collocations come in several patterns: verb + noun (*take a risk*), adjective + noun (*heavy traffic*), adverb + adjective (*deeply grateful*), verb + adverb (*strongly recommend*) and noun + noun (*a piece of advice*).",
      "Some verbs form a very large number of collocations: *make*, *do*, *take*, *have*, *give* and *get*. These are called light verbs, because the noun carries the meaning. There are tendencies (*make* often goes with creating something, *do* with activities), but many exceptions, so each phrase must be learned.",
      {h:"US and UK"},
      "Varieties differ. US English often says *take a shower* and *fill out a form*. UK English often says *have a shower* and *fill in a form*, and it also uses *take a decision*. Dictionaries label such differences.",
      {h:"How to check"},
      {list:["Read the examples and any collocation box in a learner’s dictionary such as the Cambridge Dictionary or the Oxford Learner’s Dictionaries.","Search a corpus such as COCA for two candidates and compare how often each appears.","Read the example lines, not only the numbers."]},
      {tip:"Change one word at a time when you compare. That shows exactly where the habit is."}
     ],
     pro:[
      "Corpus linguists define a collocation statistically: two words that occur together more often than their separate frequencies would predict. Measures such as mutual information and the t-score are used to rank collocates, and each one favors a different kind of partner. A tool may show *heavy* high in a list of collocates of *rain* by one measure and lower by another, so a list is always a view of the data and not a final answer.",
      "Phraseologists describe a scale from free combinations (*a red car*), through restricted collocations (*heavy rain*), to idioms (*kick the bucket*). The boundaries are not sharp. A useful practical test is substitution: if a near synonym sounds odd in the same frame, the combination is probably a collocation.",
      "Collocations are also a mark of register and genre. Academic writing has its own set (*conduct a study*, *draw a conclusion*, *raise an issue*), and news writing another. Studies of learner corpora often report collocation errors even in advanced writing. Readers notice them, although they rarely block understanding.",
      "In teaching, avoid giving a rule for *make* and *do*. Instead give a set of the most common phrases for each, and use a corpus to extend it. Encourage learners to record phrases by noun, with the verb and adjective partners beside it, and to review them in sentences."
     ]},
    related:["phrasal-verbs-english","idioms-and-chunks-english","register-and-connotation"],
    read:[{book:"eling", where:"The Semantics chapter, sections “The mental lexicon” and “The nature of lexical meaning”"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"}, {t:"English-Corpora.org: Corpus of Contemporary American English (COCA)", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"phrasal-verbs-english", title:"Phrasal and multi-word verbs", aka:["phrasal verbs","verb + particle","separable and inseparable verbs"], tags:["vocabulary","verbs","usage"],
    summary:"Verbs that combine with a small word, such as give up, look after and put up with, and the word-order rules that go with them.",
    levels:{
     starter:[
      "Many English verbs have a small word after them: *give up*, *turn off*, *look after*, *put up with*. The meaning is often different from the verb alone. *Give up* means to stop trying. *Look after* means to take care of.",
      "These are called **multi-word verbs**, and many books call them phrasal verbs. You have to learn each one with its meaning.",
      "Word order matters. With some verbs, you can put a noun object in two places: *turn off the light* or *turn the light off*. But if the object is a pronoun such as *it*, it must go in the middle: *turn it off*. With other verbs, such as *look after*, nothing can come between the parts: *look after her*.",
      "A good test: try the pronoun *it* in the middle. If *turn it off* sounds right, you can split the verb. If *look it after* sounds wrong, you cannot.",
      {key:"With a pronoun object, test the middle: turn it off. With verbs like look after, keep the parts together."}
     ],
     builder:[
      "There are three types. A **phrasal verb** is a verb with an adverb particle: *pick up*, *turn off*. It often separates. A **prepositional verb** is a verb with a preposition: *look after*, *depend on*. It does not separate. A **phrasal-prepositional verb** has a particle and a preposition: *put up with*, *look forward to*. It does not separate either.",
      "The pronoun object always goes in the middle of a separable phrasal verb. A noun object can go on either side, but a long noun phrase usually goes after the particle.",
      "In *look forward to*, the word *to* is a preposition, so the next word is a noun or an -ing form: *I’m looking forward to meeting you*.",
      "A verb can have many meanings: *take off* means to remove something, to leave the ground, to become successful or to have time away from work. A learner’s dictionary lists each sense separately.",
      {h:"Formality"},
      "Phrasal verbs are typical of speech and informal writing, and many have a more formal single-verb partner (*find out*, *discover*). But many are normal in careful writing too (*carry out*, *point out*, *set up*).",
      {tip:"Learn a phrasal verb in a whole sentence, and check the pattern in a dictionary: *turn sth off* shows that the object can go in the middle."}
     ],
     pro:[
      "Grammarians do not agree on the terms. Some reserve “phrasal verb” for verb + adverb combinations and use “multi-word verb” as the umbrella; others use “phrasal verb” for all three types. The syntactic tests are more useful than the names. A true particle can follow its object (*turn the light off*), it can be stressed (*turn it OFF*), and it does not form a unit with the noun phrase. A preposition forms a phrase with its noun phrase and cannot be separated from it.",
      "Particle placement is influenced by several factors that work together: pronouns must go in the middle, long or complex objects tend to come after the particle, and new information tends to come late. Stress follows the same pattern, with the particle stressed in phrasal verbs and the verb stressed in prepositional verbs (*LOOK after her*).",
      "Meaning ranges from literal (*take the lid off*), through aspectual (*eat up*, where *up* shows completion), to fully idiomatic (*give up*). The same particle forms different patterns in different verbs, which is why lists organized by particle help less than lists organized by frequency and by verb.",
      "There are regional differences in preference (*fill in* and *fill out*, *ring up* and *call up*), and new phrasal verbs enter the language continually. Many also give nouns (*to hand out* gives *a handout*). Learners meet some phrasal verbs far more often than others, so it makes sense to study the most frequent ones first and to check frequency in a corpus."
     ]},
    related:["collocation-english","idioms-and-chunks-english"],
    read:[{book:"eling", where:"Background reading: the Syntax chapter, section “Word order”"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"}, {t:"English-Corpora.org: Corpus of Contemporary American English (COCA)", url:"https://www.english-corpora.org/coca/"}], checked:"2026-11"},

   {id:"idioms-and-chunks-english", title:"Idioms, fixed phrases and chunks", aka:["formulaic language","lexical chunks","idiomatic expressions"], tags:["vocabulary","idioms","fluency"],
    summary:"Ready-made phrases: idioms whose meaning is not in the words, and chunks that speakers store and use as one unit.",
    levels:{
     starter:[
      "An **idiom** is a fixed phrase whose meaning is not the sum of its words. *Spill the beans* means to tell a secret. *A piece of cake* means very easy. If you know every word but you still do not understand, you have met an idiom.",
      "A **chunk** is a group of words that speakers store and use as one unit: *as far as I know*, *I was wondering if*, *It depends on*. The meaning is clear, but the phrase has a fixed form.",
      "Learning chunks is a good way to improve your English. You say them faster, and the grammar inside them is already correct.",
      "Idioms are different. Use them carefully. Choose those you have heard many times, and avoid those from one sport or one place when you talk to an international audience.",
      {key:"Learn phrases with the situation in which people say them, not as a list of words."}
     ],
     builder:[
      "Phrases form a scale. Free combinations (*a red car*) have no limits. Collocations (*heavy rain*) are partners that are usual. Fixed phrases and chunks (*by the way*) have a set form. Idioms (*kick the bucket*) have a figurative meaning that the words do not give.",
      "Fixed pairs often have a set order: *salt and pepper*, *back and forth*, *sooner or later*, *ladies and gentlemen*. A dictionary lists idioms under one of the main words, with labels for tone and region.",
      {h:"Safe use"},
      {list:["Safer: common, neutral, known in both US and UK English (*a piece of cake*, *break the ice*).","Riskier: informal or rude phrases, old or rare ones, and ones from one sport or place (*touch base*, *hit for six*, *a sticky wicket*).","Different between varieties: *a storm in a teacup* (UK) and *a tempest in a teapot* (US); *table an issue* means to postpone it in US English and to bring it up for discussion in UK English."]},
      "With an international audience, say it plainly first, and add a plain follow-up after any idiom you do use."
     ],
     pro:[
      "Idioms are not compositional: their meaning cannot be built from the meanings of the words and their grammar. They also vary in how fixed they are. *Spill the beans* allows tense (*spilled the beans*) and some passives (*the beans were spilled*) but not replacement of *beans*. Some idioms have a literal reading too (*kick the bucket*), which may be a source of jokes.",
      "Research on formulaic language suggests that a large part of fluent speech and writing is made of recurring sequences, which are sometimes called lexical bundles when identified statistically in a corpus (*I don’t know if*, *on the other hand*). They differ by register: conversation has bundles of one kind, academic prose another. Knowing them helps both production, because speakers do not need to plan every word, and comprehension, because listeners can predict what comes next.",
      "For learners, there is often a gap between recognizing an idiom and using it well. Misuse is more noticeable than avoidance. In communication between speakers who do not share a first language, idioms are a common source of misunderstanding, because they depend on cultural knowledge. Many successful speakers in these settings use plain phrases, check understanding and explain figurative language when they use it. This is a point that the World Englishes elective develops further.",
      "In teaching, choose a small set of high-frequency idioms and chunks, teach them in situations, recycle them over weeks, and teach learners to look them up. Treat idioms as part of reading and listening skills before speaking and writing skills."
     ]},
    related:["collocation-english","register-and-connotation"],
    read:[{book:"eling", where:"Background reading: the Semantics chapter, section “Compositionality: Why not just syntax?”"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}, {t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"}], checked:"2026-11"},

   {id:"register-and-connotation", title:"Register and connotation", aka:["formal and informal English","politeness","softeners"], tags:["vocabulary","register","politeness"],
    summary:"The level of formality of a word, the feeling it carries, and the small words that make English polite.",
    levels:{
     starter:[
      "Two words can have the same basic meaning and still feel different. *Slim* sounds positive. *Skinny* often sounds negative. This feeling is called **connotation**.",
      "Words also have a level of formality, called **register**. *Start* is neutral. *Commence* is formal. *Gonna* is informal. You choose the level to suit the reader and the situation.",
      "Many formal words come from French and Latin. Many everyday words come from Old English. So English often has pairs: *help* and *assist*, *buy* and *purchase*, *need* and *require*.",
      "English also has small tools to be polite: *could* instead of *can*, *I was wondering if* instead of a command, and words such as *a bit*, *perhaps* and *I think*.",
      {key:"Choose a word for its feeling and its level, not only its meaning."}
     ],
     builder:[
      "Dictionaries give labels for register and connotation: *formal*, *informal*, *slang*, *old-fashioned*, *offensive*, *approving*, *disapproving*, *humorous*. Read them every time you learn a new word.",
      "A useful scale has three levels. Informal: *kids*, *gonna*, *pal*. Neutral: *children*, *going to*, *friend*. Formal: *commence*, *purchase*, *assist*. Neutral is the safe middle.",
      {h:"Why the layers?"},
      "After the Norman Conquest of 1066, French was the language of the court and of law in England for a long time. French words entered English, and Latin words followed through writing and scholarship. This is one reason for pairs such as *cow* and *beef*. The origin is a hint, not a rule, because many French and Latin words are completely ordinary (*use*, *people*, *table*).",
      {h:"Politeness"},
      "Japanese has a grammar of politeness (*keigo*). English has no special verb forms, so it uses modal verbs (*could*, *would*), the past tense (*I was wondering*), questions and hedges. Too many softeners hide the message, so the level should fit the person and the setting.",
      {tip:"A corpus shows register: compare a formal word with an everyday one and look at the text types."}
     ],
     pro:[
      "Register is a feature of language use that varies with field (what is going on), tenor (the relationship between the speakers) and mode (spoken or written). It is not a property of single words alone: a word has a typical register, and register is realized through a whole set of choices in vocabulary, grammar and organization. Connotation is the evaluative or emotional meaning of a word beyond its denotation. It may be positive, negative or neutral, and it can change over time and across communities.",
      "Politeness has been described through the idea of face: speakers try not to threaten the other person’s wish to be free from imposition or the wish to be approved of. Requests, refusals and criticism threaten face, so speakers use indirectness and hedges. How much is expected varies a great deal between cultures, communities and workplaces. A learner who transfers the norms of one language to another may sound too direct or too indirect without any error in grammar.",
      "Euphemism and its opposite change quickly. A euphemism may become a plain word in time and then be replaced. For this reason, dictionaries and style guides must be checked for current usage.",
      "In translation and interpreting, matching register is a basic skill: the aim is to keep the tone and the level of the speaker, not just the content. For teaching, give learners a few common ideas at two or three levels and let them practice choosing among them for different readers."
     ]},
    related:["collocation-english","idioms-and-chunks-english","false-friends-and-wasei-eigo"],
    read:[{book:"eling", where:"The Language Variation and Change chapter, section “Language conveys more than semantic meaning”"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}, {t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"}], checked:"2026-11"},

   {id:"false-friends-and-wasei-eigo", title:"False friends and wasei-eigo", aka:["katakana English","Japan-made English","gairaigo"], tags:["vocabulary","Japanese","loanwords"],
    summary:"Words that look like English but mean something different in Japanese, and how to explain them kindly.",
    levels:{
     starter:[
      "When a word moves from one language to another, its meaning often changes. Japanese has taken many words from English and written them in katakana. Some have the same meaning. Some do not.",
      "For example, マンション (*manshon*) means an apartment building, but the English word *mansion* means a very large house. クレーム (*kurēmu*) means a complaint, but English *claim* means to say that something is true. These are called **false friends**.",
      "Some Japanese words were built in Japan from English parts. They are called **wasei-eigo**, “Japan-made English”.",
      "These words are Japanese words. They are not mistakes. They become a problem only when they are used as if they were English. When you explain a false friend, say that the Japanese word is real, give the English word to use, and let the speaker try again.",
      {key:"A katakana word is a Japanese word. Explain the difference kindly and give a replacement."}
     ],
     builder:[
      "Here are well-known cases.",
      {table:[["Katakana","Japanese meaning","Say in English"],["マンション *manshon*","apartment or condo building","apartment building, condo (US)"],["クレーム *kurēmu*","complaint","complaint"],["スマート *sumāto*","slim, stylish","slim, stylish"],["テンション *tenshon*","energy, mood","energy, excited, in high spirits"],["ナイーブ *naību*","sensitive","sensitive"],["コンセント *konsento*","power outlet","outlet (US), socket (UK)"],["サービス *sābisu*","free of charge","free, on the house, complimentary"]]},
      "Not all katakana words are false friends. *Hoteru* and *kōhī* match hotel and coffee. Some come from other languages: パン (*pan*) is from Portuguese and アルバイト (*arubaito*) is from German *Arbeit*.",
      "False friends exist between many languages: Spanish *embarazada* is “pregnant”, French *actuellement* is “at present”, German *Gift* is “poison”.",
      {tip:"Do not laugh, and do not use mocking labels. Give the English word and a short example."}
     ],
     pro:[
      "Japanese has two overlapping groups. *Gairaigo* is the general term for loanwords, including words from Portuguese, Dutch, German and French as well as English. *Wasei-eigo* names expressions that are formed in Japan from English elements and do not exist in English with that meaning, such as *naitā* (ナイター, a night game) and *sukinshippu* (スキンシップ, physical closeness). Many commonly cited false friends, such as *kurēmu*, are loanwords whose meaning narrowed or shifted after borrowing. Linguists treat all of these as normal results of borrowing, in which the source meaning is not kept.",
      "The usual mechanisms are narrowing (a word takes only one of its senses), shift (the meaning moves), clipping and combining (a word is shortened or joined to another), and phonological adaptation to the mora structure of Japanese. Shortening is common, as in *pasokon*, from *personal computer*. Unit 4 discusses clipping.",
      "For teaching, the best method is contrastive and respectful. Give the Japanese meaning, the English word that expresses it and the English word that looks the same, with short examples. It helps to teach the common cases early, since they affect real situations such as shopping, work and travel. In a mixed class, avoid singling out a learner.",
      "In professional contexts, a learner’s use of a katakana word may also reflect the jargon of a Japanese workplace. Ask what the speaker means before correcting. The speaker is more likely to remember a word that was given as a helpful replacement than one that was marked wrong."
     ]},
    related:["english-words-from-japanese","register-and-connotation"],
    read:[{book:"eling", where:"The Historical Linguistics chapter, sections “Lexical change” and “Semantic change”"}],
    sources:[{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}, {t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}, {t:"Oxford Learner’s Dictionaries", url:"https://www.oxfordlearnersdictionaries.com/"}], checked:"2026-11"},

   {id:"english-words-from-japanese", title:"English words from Japanese", aka:["Japanese loanwords in English","tsunami and emoji"], tags:["vocabulary","Japanese","loanwords"],
    summary:"Words such as tsunami, emoji and karaoke that English has borrowed from Japanese, and how they changed.",
    levels:{
     starter:[
      "English has borrowed many words from Japanese. You may use some of them every day: *tsunami*, *emoji*, *karaoke*, *sushi*, *tofu*, *origami*, *manga* and *anime*.",
      "When English borrows a word, it changes it. The sounds change to fit English. *Karaoke* is said *ker-ee-OH-kee* in English, with one strong syllable, and not with four even beats as in Japanese.",
      "The meaning can change too. *Tsunami* (津波) literally means “harbor wave”. In English it means a very large sea wave, and people also say *a tsunami of emails*. *Tycoon* comes from a title for the shogun and now means a powerful business person.",
      "*Emoji* does not come from *emotion*. It comes from Japanese *e* (picture) and *moji* (character).",
      {key:"English words from Japanese get English sounds, English stress and sometimes new meanings."}
     ],
     builder:[
      {table:[["English word","Japanese source","English meaning"],["tsunami","津波, “harbor wave”","a very large wave caused by an earthquake or similar event"],["emoji","絵文字, “picture character”","a small picture used in messages"],["karaoke","カラオケ, “empty orchestra”","singing along to recorded music"],["tycoon","大君 *taikun*","a powerful and rich business person"],["honcho","班長 *hanchō*, “squad leader”","a boss, informal, mostly US"]]},
      "Dictionaries show the origin of these words in a short note. Merriam-Webster’s entries include an origin note, and the Online Etymology Dictionary gives more history. For pronunciation, check a dictionary that gives both US and UK forms: *tsunami* is GA /tsuˈnɑmi/ and SSBE /tsuːˈnɑːmi/, and some speakers start the word with /s/.",
      "English also adapts the grammar of a borrowed word. *Emoji* has the plural *emoji* or *emojis*. *Tsunami* has *tsunamis* or *tsunami*.",
      {tip:"When you teach a Japanese speaker, these words are a good way to show how English stress and vowels work."}
     ],
     pro:[
      "Japanese borrowings into English arrived in several periods, through trade, travel, soldiers’ contact and, more recently, popular culture and technology. Examples are *soy*, *tycoon*, *honcho*, *karaoke*, *manga*, *anime* and *emoji*. Most are nouns and name things that English had no word for, which is the usual pattern for borrowed vocabulary.",
      "Adaptation operates at several levels. Phonologically, English imposes its stress system, reduces and changes vowels, and handles sounds such as /ts/ at the start of a word in different ways, which explains the variants of *tsunami*. Morphologically, borrowed nouns take English plural endings or stay unchanged. Semantically, the meanings may widen (*tsunami* applied to anything very large), narrow, or become more figurative. Some borrowed words are later used in new compounds or in forms that do not exist in Japanese.",
      "The form of a word in English may not match the Japanese form. English writes *Tokyo*, and Japanese romanization with macrons writes *Tōkyō*. When a word is cited for teaching, give the Japanese form with a macron romanization and the English form side by side.",
      "A caution applies to popular etymologies. Some stories about the origin of a word are widely repeated but not supported. Rely on a dictionary with an etymology note before giving an explanation to a learner."
     ]},
    related:["false-friends-and-wasei-eigo"],
    read:[{book:"eling", where:"The Historical Linguistics chapter, section “Lexical change”"}],
    sources:[{t:"Merriam-Webster Dictionary", url:"https://www.merriam-webster.com/"}, {t:"Online Etymology Dictionary", url:"https://www.etymonline.com/"}, {t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-collocation", term:"Collocation", def:"A combination of words that often appear together, such as *heavy rain* or *make a decision*. The usual partners are a habit of the language, not a logical rule.", codex:"collocation-english"},
   {id:"hew-light-verb", term:"Light verb", def:"A very common verb such as *make*, *do*, *take*, *have* or *give* that carries little meaning of its own in a phrase. The noun carries the meaning, as in *take a shower*.", codex:"collocation-english"},
   {id:"hew-corpus", term:"Corpus", def:"A large collection of real spoken or written text, kept on a computer, that you can search to see how words are used. The plural is *corpora*.", codex:"collocation-english"},
   {id:"hew-multi-word-verb", term:"Multi-word verb", def:"A verb that works together with a small word to make one meaning, such as *give up*, *look after* or *put up with*. The three types are phrasal, prepositional and phrasal-prepositional verbs.", codex:"phrasal-verbs-english"},
   {id:"hew-phrasal-verb", term:"Phrasal verb", def:"A verb plus an adverb particle, such as *turn off* or *pick up*. With an object, it can often be split, and a pronoun object goes in the middle: *turn it off*.", codex:"phrasal-verbs-english"},
   {id:"hew-particle", term:"Particle", def:"A short word such as *up*, *off* or *out* that works with a verb to give a new meaning. In speech, it is usually stressed in a phrasal verb.", codex:"phrasal-verbs-english"},
   {id:"hew-prepositional-verb", term:"Prepositional verb", def:"A verb plus a preposition, such as *look after* or *depend on*. The preposition stays with the noun phrase that follows, so the verb cannot be split.", codex:"phrasal-verbs-english"},
   {id:"hew-idiom", term:"Idiom", def:"A fixed phrase whose meaning is not the sum of its words, such as *spill the beans* (tell a secret) or *a piece of cake* (very easy).", codex:"idioms-and-chunks-english"},
   {id:"hew-lexical-chunk", term:"Chunk", def:"A group of words that speakers store and use as one unit, such as *as far as I know* or *I was wondering if*. The meaning is usually clear, but the form is fixed.", codex:"idioms-and-chunks-english"},
   {id:"hew-binomial", term:"Fixed pair", def:"Two words joined by *and* or *or* in a set order, such as *salt and pepper*, *back and forth* or *sooner or later*. Reversing the order sounds odd.", codex:"idioms-and-chunks-english"},
   {id:"hew-denotation", term:"Denotation", def:"The core meaning of a word, the thing it points at, without the feelings that come with it. Compare *connotation*.", codex:"register-and-connotation"},
   {id:"hew-register", term:"Register", def:"The level of formality of language, chosen to suit the reader and the setting. Informal, neutral and formal are the usual levels.", codex:"register-and-connotation"},
   {id:"hew-connotation", term:"Connotation", def:"The feeling or attitude that a word carries in addition to its core meaning. *Slim* is positive, and *skinny* is often negative.", codex:"register-and-connotation"},
   {id:"hew-softener", term:"Softener", def:"A word or phrase that makes a request, refusal or disagreement less direct, such as *could*, *I’m afraid*, *a bit* or *I was wondering if*. Also called a hedge.", codex:"register-and-connotation"},
   {id:"hew-euphemism", term:"Euphemism", def:"A gentler word used in place of a direct one, such as *pass away* for *die* or *let go* for *fire*.", codex:"register-and-connotation"},
   {id:"hew-loanword", term:"Loanword", def:"A word taken from one language into another, such as English *tsunami* from Japanese or Japanese パン (*pan*) from Portuguese. The sound and meaning often change.", codex:"false-friends-and-wasei-eigo"},
   {id:"hew-false-friend", term:"False friend", def:"A word that looks or sounds like a word in another language but has a different meaning, such as Japanese マンション (*manshon*, apartment building) and English *mansion* (a grand house).", codex:"false-friends-and-wasei-eigo"},
   {id:"hew-wasei-eigo", term:"Wasei-eigo", def:"“Japan-made English” (和製英語): words and phrases built in Japan from English parts that do not exist in English with that meaning, such as ナイター (*naitā*, a night game).", codex:"false-friends-and-wasei-eigo"},
   {id:"hew-gairaigo", term:"Gairaigo", def:"The Japanese word (外来語) for loanwords in general. They are written in katakana and come from English and from other languages such as Portuguese, German and French.", codex:"false-friends-and-wasei-eigo"}
  ]
});
