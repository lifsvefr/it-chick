(function(){
/* How English Works · Unit 9 (e5u9) · Nouns, articles and determiners */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u9", track:"e5", n:9, title:"Nouns, articles and determiners", icon:"🔤",
  blurb:"The small words in front of nouns are the biggest headache for many learners, and Japanese has nothing like them. This unit explains why. You learn which nouns can be counted, how a, an and the work, when English uses no article, how quantifiers such as few, a few, some and any behave, and how to explain all of this kindly and clearly.",
  goals:[
    "Use grammar tests, not meaning, to decide whether a noun is count or noncount, and handle nouns that are both (a coffee / coffee, an experience / experience)",
    "Choose a, an or the by asking whether the listener can identify the noun, and choose a or an by sound",
    "Use zero article for general statements, and compare Cats are…, The cat is… and A cat is…, and institutions such as in the hospital and in hospital",
    "Use quantifiers and determiners accurately: few and a few, little and a little, some and any, each and every, all and both",
    "Explain articles to Japanese speakers with short, kind explanations that work, and fix common errors such as I like dog"
  ],
  read:[
    {book:"eling", where:"The Semantics chapter, section “Countability”; the Syntax chapter, sections “Structure within the sentence: Phrases, heads, and selection” and “Functional categories”", note:"Cited by topic. The book is written for linguistics students, so use this unit’s explanations first and read the sections afterward."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u9-l1", title:"Count and noncount nouns", minutes:55,
   hook:{q:"Which sentence is correct in standard English?", options:["She gave me a good advice.","She gave me good advice.","She gave me good advices.","She gave me a good advices."], answer:1, reveal:"**She gave me good advice.** *Advice* is a noncount noun: no *a*, no plural. Many learners expect it to be countable, because *a suggestion* and *two suggestions* are fine. This lesson shows how English decides, and why the decision is about grammar, not about the world."},
   goals:[
     "Test a noun with *a/an*, plural *-s* and *many/much* to find out if it is count or noncount",
     "Explain why countability is a grammar fact and not a fact about things (*furniture, luggage, information*)",
     "Use nouns that are both, and say how the meaning changes (*coffee / a coffee*, *experience / an experience*)",
     "Use unit nouns (*a piece of advice*) and know some US and UK differences"
   ],
   learn:[
    {h:"The counting test", body:[
      {lead:"English makes you decide, for every noun, whether it is one of a kind that can be counted. The decision changes the words around it."},
      "A [[hew-count-noun|count noun]] can be one or many. It has a singular and a plural: *a chair, two chairs*. A [[hew-mass-noun|mass noun]] has no plural and is not counted one by one: *furniture, rice, advice*. Teachers usually say **countable** and **uncountable**. Linguists say **count** and **noncount** (or mass). The words are different, but the idea is the same. This course uses *count* and *noncount*.",
      "You do not need to guess from meaning. Use three tests.",
      {table:[["Test","Count noun (chair)","Noncount noun (furniture)"],["Can it follow *a/an*?","*a chair*","✗ *a furniture*"],["Can it take plural *-s*?","*chairs*","✗ *furnitures*"],["Which quantifier?","*many chairs, a few chairs*","*much furniture, a little furniture*"],["Number words","*three chairs*","✗ *three furnitures*"]]},
      "A singular count noun also needs a determiner. You cannot say *I bought chair*. You say *I bought a chair*, *the chair* or *my chair*. A plural count noun and a noncount noun can stand alone when the meaning is general: *I bought chairs. I bought furniture.* Lesson 3 explains this.",
      {key:"Countability is a property of the word in English grammar. Test the word; do not ask whether the thing can be counted."}
    ]},
    {h:"Why meaning does not decide", body:[
      "People often explain it like this: “Uncountable nouns are things you cannot count.” That fails quickly. You can count *furniture*: one chair, one table, one bed. You can count grains of *rice*. You can count *pieces of advice*. Yet English treats these words as noncount.",
      "Look at pairs where the world is the same and the grammar is different.",
      {table:[["Noncount","Count (same area of meaning)"],["*furniture*","*chairs, tables, desks*"],["*luggage* (also *baggage*)","*suitcases, bags*"],["*information*","*facts, details*"],["*advice*","*suggestions, tips*"],["*homework*","*assignments, exercises*"],["*equipment*","*tools, machines*"]]},
      "The left-hand words are collective or abstract. English looks at a whole group, or at an idea, as one mass. The right-hand words name the single items. Other languages make other choices. French *information* has a plural (*les informations*), and a French speaker may carry that habit into English. This is not a logic error. It is a different grammar.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e5u9a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Same things, two grammars</text><rect class="d-sage" x="14" y="34" width="312" height="58" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">a chair · two chairs · many chairs</text><text class="s" x="170" y="78" text-anchor="middle">count: single items you can number</text><path class="d-ink" d="M170 96V122" stroke-width="2" marker-end="url(#e5u9a)"/><text class="s" x="190" y="114">group them as one idea</text><rect class="d-lup" x="14" y="128" width="312" height="58" rx="8" stroke-width="2"/><text x="170" y="150" text-anchor="middle">furniture · much furniture</text><text class="s" x="170" y="172" text-anchor="middle">noncount: no a, no plural</text><path class="d-ink" d="M170 190V214" stroke-width="2" marker-end="url(#e5u9a)"/><text class="s" x="190" y="208">count it with a unit noun</text><rect class="d-gold" x="14" y="220" width="312" height="58" rx="8" stroke-width="2"/><text x="170" y="242" text-anchor="middle">a piece of furniture</text><text class="s" x="170" y="264" text-anchor="middle">two pieces of furniture</text></svg>', alt:"Three boxes joined by arrows. The first shows count nouns: a chair, two chairs, many chairs. An arrow labeled group them as one idea leads to the second box: furniture, much furniture, which is noncount with no a and no plural. A second arrow labeled count it with a unit noun leads to the third box: a piece of furniture, two pieces of furniture.", cap:"English can group single items into a noncount idea, and then count the idea again with a unit noun."},
      "When you need a number, use a **unit noun**: *a piece of advice, two pieces of furniture, an item of clothing, a loaf of bread, a glass of water, a bit of news*. The unit noun is count, and the noncount noun follows *of*.",
      {tip:"*Piece* is the safest unit noun for abstract and collective nouns: *a piece of information, a piece of advice, a piece of luggage*. Learn the whole chunk."},
      "Some nouns look plural but are noncount: *news* (*The news is good*), *physics, mathematics*. Others have only a plural form: *clothes, scissors, jeans, thanks*. *Clothes* is plural (*These clothes are new*), but *clothing* is noncount (*warm clothing*)."
    ]},
    {h:"Nouns that are both", body:[
      "Many nouns are noncount in one sense and count in another. This is normal, and it explains why a dictionary label such as [C] (count) or [U] (uncount) belongs to a **sense**, not to a whole word.",
      {table:[["Noun","Noncount sense","Count sense"],["*coffee*","*I like coffee.* (the drink)","*Two coffees, please.* (cups of coffee)"],["*experience*","*She has ten years of experience.* (skill)","*It was an amazing experience.* (an event)"],["*time*","*I have no time.*","*We had a good time. Three times.*"],["*work*","*I have a lot of work.*","*a work of art; the works of Mori Ōgai*"],["*paper*","*a sheet of paper* (material)","*a paper* (an essay, a newspaper)"],["*chicken*","*We ate chicken.* (meat)","*Two chickens ran away.* (animals)"],["*glass*","*The window is made of glass.*","*a glass of water; two glasses*"],["*hair*","*She has long hair.*","*There is a hair in my soup.* (one strand)"]]},
      "There are patterns. A drink or food noun can become count when it means **a serving** (*a coffee, two teas*) or **a kind** (*three cheeses from France*). A material noun can become count when it means **an object made of it** (*a glass, an iron, a paper*). An abstract noun can become count when it means **one event or example** (*an experience, a difficulty, a success*).",
      {ex:"I have a lot of experience in teaching.   (noncount: skill gained over time)\nTeaching in a village was an experience I will never forget.   (count: one event)\n\nMay I have a coffee?   (one cup: count)\nMay I have some coffee?   (an amount of the drink: noncount)\nCoffee is grown in many countries.   (the substance)", label:"Worked example"},
      "When you meet a new noun, look in a learner dictionary. It shows [C] or [U] for each sense, with examples. The Cambridge Dictionary uses these labels. The Oxford Learner’s Dictionaries write *countable* and *uncountable*."
    ]},
    {h:"US and UK differences, and small traps", body:[
      "Most countability is the same in American and British English. A few words differ.",
      {list:[
        "**accommodation.** In British English it is noncount: *Accommodation is expensive in London.* In American English the plural *accommodations* is common (*hotel accommodations*), and people often say *housing* or *a place to stay*.",
        "**luggage and baggage.** Both are noncount in both varieties. American English uses *luggage* and *baggage* for travel; British English mostly says *luggage* for what you carry and keeps *baggage* for the airline or the idea (*emotional baggage*).",
        "**mail and post.** American English uses *mail* (noncount). British English uses *post* and *mail* for the same idea.",
        "**jewelry (US) and jewellery (UK); trash (US) and rubbish (UK).** Both pairs are noncount."
      ]},
      "Two more traps. First, *less* and *fewer*. Traditional guidance says *fewer* goes with count nouns (*fewer mistakes*) and *less* with noncount nouns (*less time*). Many people say *less mistakes* in speech, and a supermarket sign may say *10 items or less*. Careful writing usually keeps the traditional pattern. Second, a noncount noun takes a singular verb: *The information is useful.* *Advice* is a noun and *advise* is a verb: *She advised me. Her advice helped.*",
      {warn:"Do not trust the idea “if I can count it, it is countable.” *Evidence, equipment, research, progress, knowledge, homework* and *software* are all noncount. Check a dictionary and learn the unit noun: *a piece of evidence, a piece of software*."},
      {h:"Compared with Japanese"},
      "Japanese nouns do not have a singular and a plural. 犬 (*inu*) can mean one dog or many dogs. To count, Japanese uses **counters** that depend on the shape or type of the thing. *Ippon* (一本) is “one” long thin thing, such as a pen. *Ichimai* (一枚) is “one” flat thing, such as a sheet of paper. *Sansatsu* (三冊) is “three” bound things, such as books. A counter is a little like an English unit noun. So you already know the idea of “counting through a helper word”. English has fewer helpers, and it also marks singular and plural on the noun itself.",
      "Be kind to yourself about the difference. Japanese 情報 (*jōhō*, “information”) and 家具 (*kagu*, “furniture”) have no plural form. A learner who says *an information* is not careless. The learner has seen *a chair* and *a piece of information*, and the rule needs a little time."
    ]}
   ],
   try:[
    {id:"e5u9-l1-x1", type:"sort", q:"Is the noun normally count, noncount, or both (with different senses)?", buckets:["Count","Noncount","Both"], items:[
      {t:"suitcase", b:0, why:"*A suitcase, two suitcases.* A single item with a plural."},
      {t:"luggage", b:1, why:"No *a*, no plural: *a lot of luggage*, *a piece of luggage*."},
      {t:"advice", b:1, why:"Noncount: *some advice*, *a piece of advice*. The verb *advise* is different."},
      {t:"idea", b:0, why:"*An idea, two ideas.* Count."},
      {t:"coffee", b:2, why:"Noncount for the drink (*coffee is hot*), count for a serving (*two coffees*)."},
      {t:"experience", b:2, why:"Noncount for skill (*work experience*), count for an event (*an experience*)."},
      {t:"furniture", b:1, why:"English treats it as one mass: *much furniture*, *a piece of furniture*."}
    ]},
    M("e5u9-l1-x2","Which statement about countability is the most accurate?",2,[
      ["A noun is uncountable when the things it names cannot be counted.","You can count pieces of furniture or advice, and the nouns are still noncount. Meaning does not decide."],
      ["Countability is the same in every language, so a translation shows it.","French *information* has a plural and Japanese nouns have no plural. Languages choose differently."],
      ["Countability is a grammar property of each noun (or each sense), shown by *a/an*, plural *-s* and *much/many*.","Right. Use the tests, and check a dictionary for the sense you need."],
      ["Only abstract nouns are uncountable.","*Furniture, rice* and *water* are concrete, and they are noncount."]
    ]),
    {id:"e5u9-l1-x3", type:"spot", q:"Kaito, a first-year undergraduate in information engineering, writes to a host family. Tap each phrase that needs a **change** in standard English.", ask:"needs a change", parts:[
      "“Thank you for the ", {t:"informations", flag:true, why:"*Information* is noncount, with no plural: *the information*. Use *pieces of information* if you need a count."}, " about the town. I have only one ", {t:"luggage", flag:true, why:"*Luggage* is noncount. Say *one suitcase* or *one piece of luggage*."}, ", and I will bring ", {t:"some rice", flag:false, why:"Correct. *Rice* is noncount, and *some* works with noncount nouns."}, " for you. Please give me ", {t:"an advice", flag:true, why:"*Advice* is noncount: *some advice* or *a piece of advice*."}, " about trains. I ", {t:"had a very good time", flag:false, why:"Correct. *A good time* is a count sense of *time*."}, " last year.”"
    ]},
    {id:"e5u9-l1-x4", type:"match", q:"Match each noncount noun with a unit noun that makes it countable.", pairs:[
      ["advice","a piece of advice","*Piece* works with most abstract nouns."],
      ["furniture","an item of furniture","*Item* and *piece* both work: *two pieces of furniture*."],
      ["bread","a loaf of bread","*Loaf* names the shape. You can also say *a slice of bread*."],
      ["water","a glass of water","The container is the unit: *a glass of, a bottle of*."],
      ["news","a bit of news","*A piece of news* and *a bit of news* are both common."]
    ]},
    M("e5u9-l1-x5","A waiter asks: “Anything to drink?” Which answer is natural, and why?",1,[
      ["“I would like coffee, a big.”","The word order is wrong. Adjectives come before the noun: *a big coffee*."],
      ["“I would like a coffee, please.”","Right. In this sense *coffee* means a cup of coffee, so it is count and takes *a*."],
      ["“I would like a coffees, please.”","*A* goes with a singular noun. The plural *coffees* needs *two* or *some*."],
      ["“I would like furniture, please.”","This is a different noun. *Furniture* is not something to drink."]
    ]),
    {id:"e5u9-l1-x6", type:"number", q:"How many of these nouns are normally **noncount**? *advice, idea, luggage, suitcase, information, news, answer, equipment*", answer:5, tol:0, unit:"nouns", why:"*Advice, luggage, information, news* and *equipment* have no *a* and no plural. *Idea, suitcase* and *answer* are count nouns.", wrongs:[{v:4, tol:0, why:"This leaves out one noun. The usual one is *news*, which ends in *-s* but is singular and noncount: *The news is good*, never *a news*."},{v:3, tol:0, why:"This misses *news* and *equipment*. Both are noncount."}], hint2:"Test each word with *a* and with a plural. *News* ends in *-s*, but there is no *a news* and no *newses*."},
    {id:"e5u9-l1-x7", type:"order", q:"Put these steps in a sensible order for deciding how to use a new noun.", items:[
      {t:"Read the sentence and decide which sense you mean.", why:"A noun can be count in one sense and noncount in another."},
      {t:"Try *a/an* and a plural form. Do both sound possible?", why:"This is the fastest first test, but it is not enough alone."},
      {t:"Check the [C] or [U] label in a learner dictionary.", why:"The dictionary labels each sense, and it gives examples."},
      {t:"If it is noncount, choose a unit noun for counting (*a piece of …*).", why:"A unit noun solves the problem of numbers."},
      {t:"Write a short example and keep the whole chunk in your notebook.", why:"A chunk such as *a piece of advice* is easier to remember than a rule."}
    ]},
    {id:"e5u9-l1-x8", type:"explain", q:"Mei writes: “In my first language, *information* has a plural. Why is *informations* wrong in English? It looks logical to me.” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say that it is a grammar choice, not logic. Give the test and a way to count.", model:"It is not a logic problem, because languages choose differently. In English, *information* is a noncount noun, so it has no plural and no *a*. We say *some information* or *much information*. If you need a number, use a unit noun: *a piece of information, two pieces of information*. A dictionary shows this with the label [U], and you can learn the whole chunk.", points:["Says that countability is a grammar choice of each language, not logic", "States that information is noncount (no plural, no a/an)", "Gives a way to count: a piece of information", "Mentions a dictionary label or a chunk as a way to learn it"]}
   ],
   apply:{
    intro:"These tasks use a free learner’s dictionary. Nothing needs an account.",
    tasks:[
     {t:"Check nouns in a learner dictionary", how:[
       "Open the Cambridge Dictionary or the Oxford Learner’s Dictionaries.",
       "Look up *experience, coffee, paper, work, time* and *glass*. For each, write the labels [C] and [U] (or *countable* and *uncountable*) and one example sentence for each sense.",
       "Choose the sense that surprised you most. Write one sentence about why."
     ], write:"experience… coffee… paper… work… time… glass… The surprise…"},
     {t:"Collect noncount nouns from your own reading", how:[
       "Read a page of news or a manual in English. Underline five nouns with *some, much, a lot of* or no article.",
       "For each, write a sentence with a unit noun (*a piece of …*, *a cup of …*).",
       "Check each noun in the dictionary. Mark any that you thought were countable."
     ], write:"My five nouns… My unit-noun sentences… The nouns I got wrong…"}
    ],
    proof:"A table of six nouns with their [C] and [U] senses and an example for each, and five sentences with unit nouns."
   },
   read:[
    {book:"eling", where:"The Semantics chapter, section “Countability”", note:"Look at how the book describes count and mass nouns. It uses linguists’ tests, which are close to the three tests in this lesson."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u9-l2", title:"A, an and the", minutes:55,
   hook:{q:"Amara says: “I bought a jacket and a hat. ___ jacket was expensive.” Which word goes in the gap?", options:["A","The","An","No word"], answer:1, reveal:"**The.** The jacket was mentioned in the first sentence, so the listener now knows which one. *A jacket* introduces it. *The jacket* points back to it. This lesson builds on one question: can the listener identify the noun?"},
   goals:[
     "Say what *a/an* and *the* tell the listener",
     "Give four reasons for using *the*: mentioned before, shared situation, unique, made specific",
     "Choose *a* or *an* by the first sound of the next word, not by the letter",
     "Say *the* as /ðə/ or /ði/ by sound, and avoid the most common beliefs about articles"
   ],
   learn:[
    {h:"One question behind the articles", body:[
      {lead:"An article answers a question for the listener: do you know which one I mean?"},
      "An [[hew-article|article]] is a small word, a kind of determiner, that comes at the start of a noun phrase. English has two: **the** (the definite article) and **a/an** (the indefinite article). When a noun phrase has no article at all, grammarians say it has the [[hew-zero-article|zero article]] (Lesson 3).",
      {table:[["","Meaning for the listener","Example"],["*the*","You can identify it. We both know which one.","*Please close the door.*"],["*a/an*","One of a kind. You cannot identify which one yet, or I do not say.","*I saw a dog in the park.*"],["no article","General: plural or noncount nouns, no single item picked out","*Dogs need exercise.*"]]},
      "The word for this is **definiteness**. A noun phrase is [[hew-definite|definite]] when the speaker thinks the listener can pick out the thing. It is [[hew-indefinite|indefinite]] when the speaker does not think so. The important point is the **listener’s** knowledge, as the speaker imagines it. Whether the speaker knows the thing is a different question.",
      {ex:"Yesterday I met a woman at the station.   (You do not know her yet. I introduce her.)\nThe woman works at the university.   (Now you know which woman: the one I just mentioned.)\n\nI met a friend of mine.   (I know her well, but you cannot identify her, so *a*.)", label:"Worked example"},
      {key:"Use *the* when the listener can identify the noun. Use *a/an* when the listener cannot, and the noun is singular and count."},
      "Also remember Lesson 1: *a/an* only go with singular count nouns. For plural and noncount nouns, the choice is between *the* and no article."
    ]},
    {h:"Four reasons to use the", body:[
      "Speakers use *the* for four main reasons. Often more than one applies at the same time.",
      {table:[["Reason","Example","Why the listener can identify it"],["1. Mentioned before","*I bought a hat. The hat was cheap.*","The text told you."],["2. Shared situation","*Can you pass the salt?*","There is one salt on the table, and you can see it."],["3. Unique in the context","*the sun, the moon, the president, the internet*","There is only one in the world, or in our group."],["4. Made specific by more words","*the girl who called, the end of the film*","The extra words point to one thing."]]},
      "Reason 2 covers the world of the people talking. *Let’s go to the station* is fine if both speakers know which station is near. *Is the manager in?* means the manager of this place. A newcomer to a group may not yet share the situation, and that is why they may need to ask *Which one?*",
      "Reason 3 depends on the context. *The president* is the president of the company, the club or the country that we are talking about. *The sun* is unique for everyone on Earth. Superlatives and words such as *same, only, first, next* and *last* also make a noun unique: *the best answer, the only reason, the next train*.",
      "There is also a link between things. *We stayed at a hotel. The staff were kind. The room was small.* Nobody mentioned *staff* or *room*, but a hotel has them, so the listener can identify them. Grammarians call this an **associated** or **bridging** use.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e5u9b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Choosing the article</text><rect class="d-panel" x="40" y="32" width="260" height="40" rx="8" stroke-width="2"/><text x="170" y="57" text-anchor="middle">Singular count noun?</text><path class="d-ink" d="M110 74V104" stroke-width="2" marker-end="url(#e5u9b)"/><text class="s" x="118" y="95">yes</text><path class="d-ink" d="M240 74V104" stroke-width="2" marker-end="url(#e5u9b)"/><text class="s" x="248" y="95">no</text><rect class="d-lup" x="14" y="108" width="190" height="40" rx="8" stroke-width="2"/><text x="109" y="125" text-anchor="middle">Can the listener</text><text x="109" y="141" text-anchor="middle">identify it?</text><rect class="d-gold" x="214" y="108" width="112" height="56" rx="8" stroke-width="2"/><text x="270" y="127" text-anchor="middle">plural or</text><text x="270" y="143" text-anchor="middle">noncount</text><path class="d-ink" d="M60 150V190" stroke-width="2" marker-end="url(#e5u9b)"/><text class="s" x="68" y="176">yes</text><path class="d-ink" d="M160 150V190" stroke-width="2" marker-end="url(#e5u9b)"/><text class="s" x="168" y="176">no</text><rect class="d-sage" x="14" y="194" width="92" height="40" rx="8" stroke-width="2"/><text x="60" y="219" text-anchor="middle">the</text><rect class="d-rose" x="114" y="194" width="92" height="40" rx="8" stroke-width="2"/><text x="160" y="219" text-anchor="middle">a / an</text><path class="d-ink" d="M270 168V194" stroke-width="2" marker-end="url(#e5u9b)"/><rect class="d-soft" x="214" y="198" width="112" height="56" rx="8" stroke-width="2"/><text x="270" y="219" text-anchor="middle">the, or no</text><text x="270" y="236" text-anchor="middle">article</text><text class="s" x="170" y="286" text-anchor="middle">General meaning: no article (Lesson 3)</text><text class="s" x="170" y="306" text-anchor="middle">Identified: the</text></svg>', alt:"A decision chart. First question: is it a singular count noun? If yes, ask whether the listener can identify it: yes leads to the, no leads to a or an. If it is plural or noncount, use the or no article: no article for a general meaning, the when it is identified.", cap:"A simple choice chart. It is a guide, not a law: always think about what the listener knows."},
      {warn:"The reason is not “important” or “I know it”. *Yesterday I met the woman* confuses a listener who has never heard of this woman, even if the speaker knows her well."}
    ]},
    {h:"When a or an is the right choice", body:[
      "*A/an* has three main jobs.",
      {list:[
        "**It introduces something new.** *There is a message for you. A man called.*",
        "**It classifies.** *She is a nurse. It was a good idea. Mt. Fuji is a volcano.* The noun says what kind of thing, and the listener does not need to find one particular item.",
        "**It means “per”.** *Twice a week, ten dollars a kilo.*"
      ]},
      "Note that *a* does not mean “any” in every case. *I need a pen* can mean any pen. *I met a man who knows you* means one particular man, but the listener cannot identify him yet. In both, the speaker is not asking the listener to find a known item.",
      {h:"A or an? Listen to the next sound"},
      "The choice between *a* and *an* depends on the **sound** of the next word, not its spelling. Use *an* before a vowel sound and *a* before a consonant sound. This keeps the speech easy to say.",
      {table:[["Word","First sound","Article","Why"],["*university*","/j/ as in *you*","*a university*","Starts with a consonant sound."],["*hour*","vowel (the *h* is silent)","*an hour*","No /h/ sound."],["*honest*","vowel","*an honest man*","The *h* is silent."],["*MRI*","/ɛm/ (the letter *M*)","*an MRI*","Say the letters: *em-ar-eye*."],["*FBI agent*","/ɛf/","*an FBI agent*","The letter *F* is said *eff*."],["*one-year plan*","/w/","*a one-year plan*","*One* starts with /w/."],["*umbrella*","/ʌ/","*an umbrella*","Vowel sound."],["*European*","/j/","*a European city*","Consonant sound /j/."]]},
      "A few words vary. Most Americans say *herb* without the /h/ (GA /ɝb/), so they say *an herb*. British speakers say the /h/, so they say *a herb*. Words such as *historic* and *hotel* are said with /h/ by most speakers today, so *a historic day* and *a hotel* are usual. *An historic* is still found in American and British English, mostly in formal writing and speeches, but *a historic* is far more common. The rule is simple: say the word, and use the sound that you really say.",
      {h:"The has two sounds too"},
      "*The* is usually /ðə/ before a consonant sound and /ði/ before a vowel sound: *the book* /ðə bʊk/, *the hour* /ði aʊɚ/, *the university* /ðə junəˈvɝsɪti/ (GA). Before a pause, or for emphasis, *the* has its strong form, GA /ði/, SSBE /ðiː/: *That is THE restaurant in town* means the best one. Compare Unit 3, Lesson 3 on weak forms.",
      {h:"Compared with Japanese"},
      "Japanese has no articles, but it does mark what the listener knows. Think of the start of a story: 昔々、あるところにおじいさんがいました。(*Mukashi mukashi, aru tokoro ni ojiisan ga imashita.*) “Long ago, in a certain place, there was an old man.” Then: おじいさんは山へ行きました。(*Ojiisan wa yama e ikimashita.*) “The old man went to the mountains.” The first mention often takes *ga*, and the second takes *wa*. Words such as *sono* (“that”) also point to something known. The match is rough, and *wa* also marks contrast and topic. But the idea is similar, and you already have it."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“The means specific, a means general.”** Not quite. *A* can be specific (*a man I know*). *The* can be about a whole class (*the tiger* in Lesson 3).",
        "**“Use the for important things.”** Importance does not matter. Identifiability does.",
        "**“Use the when I know it.”** The listener must know it too, or be able to work it out.",
        "**“A means one.”** Often, but *a* does not stress the number. If you stress it, say *one*: *I have one brother, not two.*",
        "**“A or an depends on the letter.”** It depends on the sound: *a university, an hour*.",
        "**“Native speakers always agree.”** Fixed phrases and personal style vary. A dictionary and a corpus settle most doubts."
      ]},
      "Most article mistakes do not stop a listener from understanding. They do show in careful writing, so learn the main patterns. Do not try to memorize every exception. Build the habit of asking: *Does my listener know which one?*"
    ]}
   ],
   try:[
    M("e5u9-l2-x1","“I bought a laptop and a bag. ___ laptop is very fast.” Why is *the* correct?",0,[
      ["The laptop was mentioned in the first sentence, so the listener can identify it.","Right. *Mentioned before* is the most common reason for *the*."],
      ["Laptops are important things.","Importance does not decide. A listener’s ability to identify the noun does."],
      ["The speaker owns the laptop.","The speaker’s knowledge is not enough. The listener must be able to identify it."],
      ["*The* always goes before the second noun in a text.","Not always. A new noun in a later sentence takes *a*."]
    ]),
    {id:"e5u9-l2-x2", type:"sort", q:"Which article comes before each phrase? Go by sound.", buckets:["a","an"], items:[
      {t:"university", b:0, why:"It starts with /j/, a consonant sound. *A university*."},
      {t:"hour", b:1, why:"The *h* is silent. *An hour*."},
      {t:"MRI scan", b:1, why:"*M* is said *em*, a vowel sound. *An MRI scan*."},
      {t:"one-day trip", b:0, why:"*One* starts with /w/. *A one-day trip*."},
      {t:"umbrella", b:1, why:"It starts with the vowel /ʌ/. *An umbrella*."},
      {t:"honest answer", b:1, why:"The *h* is silent. *An honest answer*."},
      {t:"European country", b:0, why:"It starts with /j/. *A European country*."},
      {t:"8-year-old", b:1, why:"*Eight* starts with a vowel sound. *An 8-year-old*."}
    ]},
    {id:"e5u9-l2-x3", type:"match", q:"Match each sentence to the reason for using *the*.", pairs:[
      ["I read a book and a magazine. The book was boring.","Mentioned before","*Book* was in the first sentence."],
      ["Could you open the window?","Shared situation","Both people can see the one window."],
      ["The sun was bright this morning.","Unique","There is only one sun for the speakers."],
      ["The woman who called you is outside.","Made specific","The words *who called you* point to one woman."],
      ["We rented a car. The engine was loud.","Associated with something mentioned","A car has an engine, so the listener can identify it."]
    ]},
    {id:"e5u9-l2-x4", type:"spot", q:"Tap each article that needs a **change** in standard English. The listener has not heard about the neighbor before, but knows the restaurant near the station.", ask:"needs a change", parts:[
      "“Yesterday I met ", {t:"the", flag:true, why:"The listener has not heard of this new person. Use *a*: *a new neighbor*."}, " new neighbor. ", {t:"A", flag:true, why:"The neighbor was just mentioned. Use *The*: *The neighbor works at a bank*."}, " neighbor works at ", {t:"a", flag:false, why:"Correct. This bank is new information for the listener."}, " bank. She wants to start ", {t:"an", flag:true, why:"*University* starts with /j/, so *a university course*."}, " university course. We ate at ", {t:"the", flag:false, why:"Correct if both speakers know which restaurant. It works with a shared situation."}, " restaurant near the station.”"
    ]},
    {id:"e5u9-l2-x5", type:"ipa", q:"Transcribe *hour* in GA. (It begins with a vowel sound.)", answer:["aʊɚ","aʊr","aʊər"], why:"The *h* is silent, and the word starts with the vowel /aʊ/: GA /aʊɚ/. That is why we say *an hour*.", wrongs:[{v:"haʊɚ", why:"This has an /h/ at the start, so it would sound like *how-er*. The word *hour* has no /h/ sound."}], stress:false},
    {id:"e5u9-l2-x6", type:"number", q:"How many articles must change to make this text correct? “A sun rose over the mountains. I ate an egg and drank the coffee. Then I took the umbrella.” Assume the listener knows the mountains, but has not heard about the egg, the coffee or the umbrella.", answer:3, tol:0, unit:"changes", why:"*A sun* becomes *The sun* (unique). *The coffee* becomes *a coffee* or *coffee*, because it is new. *The umbrella* becomes *an umbrella*, because it is new. *An egg* is correct, and *the mountains* is correct because the listener knows them.", wrongs:[{v:2, tol:0, why:"This finds two. Check *sun*, *coffee* and *umbrella*."},{v:4, tol:0, why:"This changes one phrase that is already correct. *An egg* is new information, so *an* is right. *The mountains* are known to the listener, so *the* is right."}], hint2:"Ask for each noun: can the listener identify it?"},
    M("e5u9-l2-x7","Which statement about *the* and *a* is correct?",1,[
      ["*The* means the speaker is sure. *A* means the speaker is not sure.","The article is about what the listener can identify, not the speaker’s certainty."],
      ["*The* is used when the listener can identify the noun. *A/an* is used for a singular count noun that the listener cannot identify yet, or that is only being classified.","Right. This is the core idea."],
      ["*A* is used for small things and *the* for large things.","Size does not matter."],
      ["*A* is only for the first mention in a story.","*A* is also used for classification (*She is a nurse*) and for “per” (*twice a week*)."]
    ]),
    {id:"e5u9-l2-x8", type:"explain", q:"Hana says: “My teacher told me to use *the* when something is important. Is that right?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Say what the real test is, and give one example.", model:"Not quite. Importance does not decide the article. The test is whether the listener can identify the noun. If I say *I bought a jacket*, the jacket is new for you, so I use *a*, even if it is very important to me. In the next sentence, *The jacket was expensive* works, because you now know which jacket. It also works for things that are obvious in the situation, such as *Please close the door*.", points:["Says that importance is not the test", "Names listener identification (known to both) as the test", "Gives a correct example with a first and a second mention", "Mentions another reason such as shared situation or uniqueness"]}
   ],
   apply:{
    intro:"These tasks use short texts that you choose. Nothing needs an account.",
    tasks:[
     {t:"Track the articles in a short text", how:[
       "Choose a short story or news paragraph in English (about 100 words).",
       "Underline every *a, an* and *the*. For each *the*, write which of the four reasons applies: mentioned before, shared situation, unique, or made specific.",
       "Find one noun that appears first with *a* and later with *the*. Copy both sentences."
     ], write:"My text… My reasons for each the… The noun with a, then the…"},
     {t:"Record the sound rule", how:[
       "Write ten noun phrases that begin with an unusual sound (*hour, university, MRI, one-year, FBI, honest, European, X-ray, 8%, umbrella*).",
       "Say each aloud and add *a* or *an*. Check them in a dictionary such as Merriam-Webster or the Cambridge Dictionary, which have audio.",
       "Write two sentences about the words that surprised you."
     ], write:"My ten phrases with a/an… The words that surprised me…"}
    ],
    proof:"A marked-up text showing the reason for each *the*, and a list of ten phrases with *a* or *an* checked in a dictionary."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Functional categories”", note:"The book does not teach articles in detail. It explains why determiners are a small, closed set of grammar words."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u9-l3", title:"No article, generic meaning and institutions", minutes:55,
   hook:{q:"Which sentence says something about cats in general?", options:["The cats are on the sofa.","Cats are good climbers.","My cat is sleeping.","A cat is on the roof."], answer:1, reveal:"**Cats are good climbers.** No article and a plural noun give a general meaning: all cats, or cats as a kind. The other three sentences talk about particular cats. This lesson covers general statements, the other ways to make them, and the places where English drops the article."},
   goals:[
     "Use no article (zero article) with plural and noncount nouns for general statements",
     "Compare *Cats are…*, *The cat is…* and *A cat is…*, and say when each is used",
     "Recognize common zero-article patterns: meals, transport, times, most names",
     "Explain *go to school / the school* and US and UK differences (*in the hospital / in hospital*, *go to college / university*)"
   ],
   learn:[
    {h:"No article is a real choice", body:[
      {lead:"When English uses no article, it is not leaving something out. The zero article carries a meaning of its own."},
      "A plural count noun or a noncount noun with no article usually has a **general** meaning, about a whole kind: *Cats are independent. Water is essential. Honesty matters.* A [[hew-generic|generic]] statement is about a class of things, not about particular ones. It allows exceptions: *Dogs bark* is true even though some dogs do not.",
      "Compare the same noun with *the*, and the meaning changes completely.",
      {table:[["No article (general)","With the (particular)"],["*Dogs are loyal.*","*The dogs next door are loud.*"],["*Life is hard.*","*The life of a sailor is hard.*"],["*I love music.*","*I love the music in this film.*"],["*Education is important.*","*The education she received was excellent.*"],["*Coffee keeps me awake.*","*The coffee here is awful.*"]]},
      "Here is the most common mistake in this area. Learners put *the* before every noun that feels important or known. They write *The life is hard* or *The nature is beautiful*, when they mean life or nature in general. The test: **am I talking about all of them, or about particular ones?** For all, use no article. For particular ones that the listener can identify, use *the*.",
      {tip:"If a sentence starts with a plural or noncount noun and states a general fact or opinion, try it without any article first."}
    ]},
    {h:"Three ways to make a general statement", body:[
      "With a singular count noun there are three patterns, and they are not the same.",
      {table:[["Pattern","Example","Use"],["Plural, no article","*Cats are independent.*","The most common. Natural in speech and writing."],["*The* + singular","*The cat is a small mammal. The tiger is endangered.*","Formal and scientific. Names a species or a type of thing."],["*A* + singular","*A cat is a small mammal. A triangle has three sides.*","Defining or explaining any one member of the class."]]},
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="20" text-anchor="middle">Talking about cats in general</text><rect class="d-sage" x="14" y="34" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="58" text-anchor="middle">Cats are independent.</text><text class="s" x="170" y="80" text-anchor="middle">plural, no article</text><text class="s" x="170" y="96" text-anchor="middle">everyday, the usual choice</text><rect class="d-lup" x="14" y="114" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="138" text-anchor="middle">The cat is a mammal.</text><text class="s" x="170" y="160" text-anchor="middle">the + singular</text><text class="s" x="170" y="176" text-anchor="middle">formal, science, the species</text><rect class="d-gold" x="14" y="194" width="312" height="70" rx="8" stroke-width="2"/><text x="170" y="218" text-anchor="middle">A cat is a mammal.</text><text class="s" x="170" y="240" text-anchor="middle">a + singular</text><text class="s" x="170" y="256" text-anchor="middle">definition, any one member</text></svg>', alt:"Three boxes. Cats are independent: plural with no article, everyday and the usual choice. The cat is a mammal: the plus singular, formal and scientific, naming the species. A cat is a mammal: a plus singular, used in definitions, about any one member.", cap:"All three can be generic. They differ in register and in how they look at the class."},
      "Be careful with the singular patterns. They are less flexible than the plural. *The tiger is endangered* talks about the species. *A tiger is endangered* is odd, because one tiger is not “endangered”. And *The cat is on the sofa* is not generic at all: it is one cat that both people can see. Context decides which meaning you get.",
      "The pattern *the* + singular is common with **inventions and instruments** (*The telephone changed daily life. She plays the piano.*). American English also often says *plays piano*, with no article. A related pattern, *the* + adjective, names **groups of people** (*the elderly, the rich, the Japanese*). It has a plural meaning and a plural verb: *The elderly need support.*",
      {warn:"*The cats are independent* is not generic. It means some particular cats. For all cats, use *Cats are independent*."}
    ]},
    {h:"Where English uses no article", body:[
      "Beyond general statements, there are regular places where English uses no article. Most are patterns that you can learn once.",
      {table:[["Area","No article","With the"],["Most personal and place names","*Maria, Japan, Nara, Lake Biwa, Mount Fuji*","*the United States, the Netherlands, the Philippines* (plural or *of*-names)"],["Seas, rivers, ranges","(none: these take the)","*the Pacific, the Nile, the Alps, the Himalayas*"],["Meals","*We have breakfast at eight.*","*The breakfast was excellent.* (a particular meal)"],["Transport with *by*","*by bus, by train, by air*","*I took the bus.*"],["Parts of the day and year","*at night, at noon, in summer, on Monday*","*in the morning, in the evening, in the summer* (also fine)"],["Languages and subjects","*She speaks Spanish. I study physics.*","*the Spanish language*"]]},
      "Names have small traps too. A title or a description can change the pattern: *Dr. Okafor* has no article, but *the doctor* does. A name used for a person you do not know can take *a*: *A Mr. Tanaka called for you* means a person you do not know. Names of buildings and institutions vary (*Tokyo Station, the Tokyo National Museum*), so check a real example when you are unsure.",
      "Parts of the day are an old puzzle. *In the morning, in the afternoon, in the evening*, but *at night*. There is no logic, so learn them as chunks. Seasons can go either way: *in summer* and *in the summer* are both usual. Weekends differ: American English *on the weekend*, British English *at the weekend*."
    ]},
    {h:"Institutions: go to school or go to the school?", body:[
      "A group of nouns names a **place and the activity that goes with it**: *school, church, bed, work, prison, hospital, college*. With the article, the noun names the building. With no article, it names the **purpose**: what people do there.",
      {table:[["No article (the purpose)","With the (the building)"],["*The children go to school.* (to study)","*I went to the school to meet the principal.* (the place)"],["*They go to church on Sunday.* (to worship)","*We met outside the church.* (the building)"],["*He is in bed.* (resting)","*The bed is too small.* (furniture)"],["*She goes to work at seven.* (to do her job)","*She went to the office.* (*work* has no building sense, so another noun names the place)"],["*He is in prison.* (serving a sentence)","*They visited the prison.* (a visitor)"]]},
      "The same logic helps with **hospital** and **university**, but American and British English make different choices.",
      {table:[["Idea","American English","British English"],["a patient in a hospital","*in the hospital, go to the hospital*","*in hospital, go to hospital, go into hospital*"],["a visitor","*the hospital*","*the hospital*"],["a student","*go to college, at the university*","*go to university, at university*"],["a person in jail","*in jail, go to jail, in prison*","*in prison, go to prison*"]]},
      "In American English the noun with *the* is the normal choice for *hospital*. Both *in the hospital* and *in hospital* are understood everywhere. In British English *in hospital* means “as a patient”, and *the hospital* still names the building. *College* in American English means a university-level school for undergraduates, so *She goes to college* is the usual phrase. In British English *college* often means a different kind of school, so *university* is used for the same idea. Dictionaries such as the Cambridge Dictionary record these differences.",
      {tip:"Learn institution phrases as chunks: *go to school, at school, in class, go to bed, at work, go home, at home*. Notice that *home* needs no *to* with *go*: *go home*, not *go to home*."}
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“Every noun needs an article.”** Plural and noncount nouns with general meaning take none.",
        "**“No article means the speaker forgot.”** In *Cats are independent*, the zero article is the correct choice.",
        "**“The + noun always means a particular one.”** Not always: *The tiger is endangered* is generic.",
        "**“Place words always need the.”** *School, church, bed, work, home* with a purpose meaning do not.",
        "**“British and American English are the same here.”** *In hospital* and *go to university* are British patterns. Americans say *in the hospital* and *go to college*."
      ]},
      "Remember that variety is normal. If a speaker uses the other variety’s pattern, listeners understand it. For your own writing, choose one variety and stay with it."
    ]}
   ],
   try:[
    {id:"e5u9-l3-x1", type:"sort", q:"Is the noun phrase **general** (about a whole kind) or **particular** (about identifiable ones)?", buckets:["General","Particular"], items:[
      {t:"“Dogs are loyal.”", b:0, why:"Plural, no article, a general fact about dogs."},
      {t:"“The dogs next door are loud.”", b:1, why:"*The* and *next door* point to particular dogs."},
      {t:"“Life is short.”", b:0, why:"Noncount, no article, general."},
      {t:"“The life of a sailor is hard.”", b:1, why:"*Of a sailor* makes it specific, so *the* is needed."},
      {t:"“I prefer tea to coffee.”", b:0, why:"Both are noncount with no article, so they are general."},
      {t:"“The coffee here is awful.”", b:1, why:"It refers to the coffee at this place. Particular."}
    ]},
    {id:"e5u9-l3-x2", type:"spot", q:"Tap each noun phrase that needs a **change** in standard English. The writer means life and nature in general, and means one particular teacher.", ask:"needs a change", parts:[
      "“", {t:"The life", flag:true, why:"This is a general statement, so no article: *Life is hard*."}, " is hard, but ", {t:"the nature", flag:true, why:"General meaning, so *nature*, with no article."}, " is beautiful. ", {t:"The teacher", flag:false, why:"Correct if the listener knows which teacher: a particular person."}, " said that ", {t:"children", flag:false, why:"Correct. A plural with no article is general: children as a group."}, " need ", {t:"the sleep", flag:true, why:"*Sleep* is noncount, and the meaning is general: *need sleep*."}, ".”"
    ]},
    M("e5u9-l3-x3","Which sentence is a natural **definition** of a word?",0,[
      ["“A triangle is a shape with three sides.”","Right. *A* + singular is the usual pattern for a definition of any one member."],
      ["“The triangles are shapes with three sides.”","*The triangles* points to particular triangles, so it is not a general statement."],
      ["“Triangle is shape with three sides.”","A singular count noun needs an article in each place: *A triangle is a shape…*."],
      ["“Triangles is shapes with three sides.”","The verb does not agree with a plural subject: *Triangles are shapes*."]
    ]),
    {id:"e5u9-l3-x4", type:"match", q:"Match each phrase to what it means.", pairs:[
      ["She is in the hospital. (US)","She is a patient, in American English","In the US, *the hospital* is the normal choice."],
      ["She is in hospital. (UK)","She is a patient, in British English","*In hospital* is the British idiom for a patient."],
      ["She goes to church.","She goes to worship","No article: the purpose of the institution."],
      ["She walked past the church.","She passed the building","With *the*, the noun names a building."],
      ["He goes to university. (UK)","He studies at a university","The British counterpart of American *go to college*."]
    ]},
    {id:"e5u9-l3-x5", type:"sort", q:"Does the name take no article, or *the*?", buckets:["No article","The"], items:[
      {t:"Japan", b:0, why:"Most countries have no article."},
      {t:"Philippines", b:1, why:"Plural names take *the*: *the Philippines*."},
      {t:"Mount Fuji", b:0, why:"Most single mountains have no article (an exception is *the Matterhorn*)."},
      {t:"Alps", b:1, why:"Mountain ranges take *the*: *the Alps*."},
      {t:"Lake Biwa", b:0, why:"Single lakes have no article."},
      {t:"Pacific Ocean", b:1, why:"Oceans, seas and rivers take *the*."},
      {t:"Netherlands", b:1, why:"It is a plural name: *the Netherlands*."}
    ]},
    M("e5u9-l3-x6","A British teacher says: “My uncle is in hospital.” An American friend would most naturally say:",1,[
      ["“My uncle is in hospitals.”","The plural changes the meaning. It would mean several hospitals."],
      ["“My uncle is in the hospital.”","Right. American English uses *the hospital* for a patient, and British English uses *in hospital*."],
      ["“My uncle is at hospital.”","Not a normal pattern for a patient in either variety."],
      ["“My uncle is in a hospital building.”","This is possible but unusual. It gives the building more weight than the normal phrase does."]
    ]),
    {id:"e5u9-l3-x7", type:"number", q:"How many of these sentences use a **general** meaning? “1. Cats are curious. 2. The cats are on my bed. 3. Rice is cheap here. 4. I like the rice. 5. Children need friends.”", answer:3, tol:0, unit:"sentences", why:"Sentences 1, 3 and 5 are general: *cats, rice, children* and *friends* have no article. Sentence 2 points to particular cats. Sentence 4 points to particular rice, such as the rice on the plate.", wrongs:[{v:2, tol:0, why:"This misses sentence 5. *Children need friends* is general."},{v:4, tol:0, why:"This counts sentence 4 too. *The rice* is particular rice, not rice in general."}], hint2:"Look for no article with a plural or noncount noun."},
    {id:"e5u9-l3-x8", type:"explain", q:"Mariya, who studies English interpreting and gets nervous speaking English, asks: “Why do we say *go to school* but *go to the store*? And my British teacher says *in hospital*. Which is right?” Explain what you would tell her.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what the missing article means, and give the US and UK facts.", model:"Both are right, and there is a reason. With *school*, *church* and *bed*, no article means the purpose of the place: you go there to study, worship or sleep. *Store* is just a building, so it takes *the*. For hospitals, American English says *in the hospital* and British English says *in hospital* for a patient. Both are understood everywhere, so choose the one that matches the English you are learning, and don’t worry.", points:["Explains no article as the purpose of an institution", "Explains that store is only a building so it takes the", "Gives the US and UK pattern for hospital", "Is kind and reassures her that both are understood"]}
   ],
   apply:{
    intro:"These tasks use free corpus tools and a dictionary. COCA at english-corpora.org is free with a registered account, and daily search limits apply. The Google Books Ngram Viewer needs no account.",
    tasks:[
     {t:"Corpus check: in the hospital or in hospital", how:[
       "Open the Google Books Ngram Viewer. Enter *in the hospital,in hospital*. Choose the corpus *American English* and then *British English* in the corpus menu, and compare the two lines.",
       "Optionally search COCA for *in hospital* and read ten lines. Do they have a UK writer, or a different meaning?",
       "Write two sentences about what you found and how sure you can be."
     ], write:"The American chart… The British chart… What I found…"},
     {t:"Find ten zero-article patterns", how:[
       "In a news article, find ten noun phrases with no article. Sort them: general plural or noncount, names, times, transport, institutions.",
       "For three of them, write a version with *the*. How does the meaning change?",
       "Check *go to school* and *go to university* in a dictionary."
     ], write:"My ten phrases… The version with the… The dictionary says…"}
    ],
    proof:"A short report with two charts or two lists (US and UK), and a list of ten zero-article phrases with their meanings."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Structure within the sentence: Phrases, heads, and selection”", note:"It does not teach articles by name. It shows how a noun phrase is built around a head with a determiner, which helps to see where the zero article fits."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u9-l4", title:"Quantifiers and other determiners", minutes:55,
   hook:{q:"What is the difference between *I have few friends here* and *I have a few friends here*?", options:["None. The meaning is the same.","*Few* means almost none (a negative feeling). *A few* means some (a positive feeling).","*Few* is British and *a few* is American.","*A few* means exactly three."], answer:1, reveal:"**Few** is “not many”, and the speaker sounds disappointed. **A few** is “some”, and the speaker sounds pleased. One small word *a* changes the attitude. The same pair exists for *little* and *a little*. This lesson sorts out the quantifiers and the other words that stand before nouns."},
   goals:[
     "Match quantifiers to count, noncount and both kinds of noun (*many, much, a lot of, some*)",
     "Explain *few / a few* and *little / a little*",
     "Use *some* and *any* by meaning, not by the rule “positive and negative”",
     "Use *each, every, all, both, whole* and the order of words before a noun"
   ],
   learn:[
    {h:"Determiners and quantifiers", body:[
      {lead:"A noun phrase often starts with a small word that says which one or how many. These words are determiners, and the ones about amount are quantifiers."},
      "A [[hew-determiner|determiner]] comes at the start of a noun phrase: *the, a, this, my, some, every, three*. A [[hew-quantifier|quantifier]] is a determiner (or a phrase) that gives an amount: *many, much, few, several, all, a lot of*. English sentences use them constantly, and they must agree with the type of noun from Lesson 1.",
      {table:[["Goes with","Quantifiers","Example"],["Plural count nouns only","*many, few, a few, several, both, fewer, a number of*","*many ideas, a few friends*"],["Noncount nouns only","*much, little, a little, less, a great deal of*","*much time, a little water*"],["Both","*some, any, a lot of, lots of, plenty of, enough, all, most, more, no*","*a lot of ideas, a lot of time*"],["Singular count only","*each, every, either, neither, another*","*each student, every day*"]]},
      "**Many** and **much** have a special pattern. In plain affirmative statements, *a lot of* is the normal choice: *We have a lot of time.* *Much* in a statement sounds formal or stiff. *Much* is common in questions, negatives, and after *so, too, as* and *how*: *How much time do we have? There isn’t much time. We have too much work.* *Many* is more flexible: *Many people agree* is normal in writing, and *How many?* is common in questions.",
      {ex:"Tomás has a lot of experience.   (not *much experience* in a plain statement)\nTomás doesn’t have much experience.   (normal after not)\nHow many students came?   (question)\nSo much homework!   (after so)", label:"Worked example"}
    ]},
    {h:"Few, a few, little and a little", body:[
      "These four words are about small amounts. The article *a* changes the attitude as well as the number.",
      {table:[["","Count nouns","Noncount nouns"],["Not many / not much (a problem)","*few* : *Few people came.*","*little* : *There is little hope.*"],["Some (enough, a positive view)","*a few* : *A few people came.*","*a little* : *Add a little salt.*"],["Very small","*very few* : *Very few people came.*","*very little* : *There is very little time.*"],["Larger than expected","*quite a few, a good few* (UK)","*quite a lot of, a good deal of*"]]},
      "Compare: *I have a few friends here, so I am not lonely.* and *I have few friends here, so I am lonely.* The number may be the same. The speaker’s feeling is different. *Few* and *little* are formal in many places. In ordinary speech, people often say *not many* and *not much*, or *hardly any*.",
      "*Quite a few* means a fairly large number, not a small one: *Quite a few people came* means a good turnout. And *only a few* is small: *Only a few came.*",
      {h:"Compared with Japanese"},
      "Japanese 少し (*sukoshi*, “a little, a few”) is close to *a little* and *a few*: it is neutral or positive. The English words for the negative view, *few* and *little*, are closer to 少ない (*sukunai*, “few, not much”). So 友達が少しいます (*tomodachi ga sukoshi imasu*) is *I have a few friends*, and 友達が少ない (*tomodachi ga sukunai*) is *I have few friends*. ほとんどいません (*hotondo imasen*, “there are hardly any”) is stronger: *I have hardly any friends*. This pair helps many learners.",
      {h:"Less and fewer"},
      "Traditional advice: *fewer* for count nouns (*fewer mistakes*), *less* for noncount (*less time*). Careful writing keeps this. In speech people often use *less* for count nouns, and supermarket signs may say *10 items or less*. Use *fewer* in formal writing."
    ]},
    {h:"Some and any", body:[
      "Many books say: “*Some* is for positive sentences, *any* is for negative sentences and questions.” It is a useful first rule, but it is not accurate. What matters is meaning.",
      {table:[["Word","Typical use","Examples that break “positive / negative”"],["*some*","Positive statements; offers and requests that expect “yes”","*Would you like some tea? Can I have some water?* (questions)"],["*any*","Negatives, ordinary questions, *if* clauses, words such as *hardly* and *without*","*I don’t have any. Do you have any questions? If you have any problems, call me. She left without any money.*"],["*any* (free choice)","Any one you like","*You can take any book. Any day is fine.* (positive)"]]},
      "Look at the questions. *Do you have any questions?* is a neutral question: the speaker does not know the answer. *Would you like some coffee?* is an offer. The speaker expects or hopes for “yes”. That is why we say *some*. The same happens in a request (*Could I have some more rice?*).",
      "*Any* has a second meaning, **free choice**. *Any student can apply* means every student can. *You can ask any question* means it does not matter which. This meaning works in positive sentences. In speech, *any* is often stressed in this meaning: *ANY day is fine.*",
      "*Some* refers to an amount or number that the speaker does not state: *I need some help. Some students were late.* With singular count nouns, *some* can show that the speaker does not know or care about the identity: *Some guy called* (informal). *Some of the* + noun is a part of a known set: *some of the students*.",
      {warn:"The pattern with *no* and *not any* is the same. *I have no time* and *I don’t have any time* mean the same. The versions with *any* are more usual in speech."}
    ]},
    {h:"Each, every, all, both and word order", body:[
      "*Each* and *every* both go with singular count nouns and take a singular verb. They differ in what they look at.",
      {table:[["Word","Looks at","Examples"],["*each*","one by one, as individuals","*Each student gets a certificate. Each of the students has a number. They cost $2 each.*"],["*every*","the whole group together","*Every student passed. Every day, I walk. Every one of them passed.*"],["*all*","the whole, plural or noncount","*All students must register. All the water was gone.*"],["*both*","two, taken together","*Both parents came. Both of them left.*"],["*whole*","one entire thing","*the whole cake, my whole life*"]]},
      "*Each* can be used for two or more; *every* is usually for three or more. After *each of* and *every one of*, the noun is plural: *each of the students*. Japanese has similar ideas: *sorezore* (それぞれ, “each”) and the prefix *mai-* in *mainichi* (毎日, “every day”).",
      {h:"Word order before a noun"},
      "Determiners come in a fixed order. A **predeterminer** such as *all, both* or *half* comes first. Then the central determiner (*the, my, these*). Then numbers and adjectives, then the noun.",
      {fig:'<svg viewBox="0 0 340 214"><text x="170" y="20" text-anchor="middle">Order inside a noun phrase</text><rect class="d-rose" x="8" y="34" width="62" height="44" rx="6" stroke-width="2"/><text x="39" y="61" text-anchor="middle">all</text><rect class="d-lup" x="76" y="34" width="62" height="44" rx="6" stroke-width="2"/><text x="107" y="61" text-anchor="middle">the</text><rect class="d-sage" x="144" y="34" width="62" height="44" rx="6" stroke-width="2"/><text x="175" y="61" text-anchor="middle">three</text><rect class="d-gold" x="212" y="34" width="62" height="44" rx="6" stroke-width="2"/><text x="243" y="61" text-anchor="middle">new</text><rect class="d-soft" x="280" y="34" width="52" height="44" rx="6" stroke-width="2"/><text x="306" y="61" text-anchor="middle">cars</text><text class="s" x="39" y="98" text-anchor="middle">pre-</text><text class="s" x="39" y="112" text-anchor="middle">determiner</text><text class="s" x="107" y="98" text-anchor="middle">determiner</text><text class="s" x="175" y="98" text-anchor="middle">number</text><text class="s" x="243" y="98" text-anchor="middle">adjective</text><text class="s" x="306" y="98" text-anchor="middle">noun</text><text x="170" y="150" text-anchor="middle">both my parents · half an hour</text><text x="170" y="172" text-anchor="middle">all the water · such a mess</text><text class="s" x="170" y="198" text-anchor="middle">Not allowed: the my book, a this idea</text></svg>', alt:"A row of five boxes: all (predeterminer), the (determiner), three (number), new (adjective), cars (noun). Below are examples: both my parents, half an hour, all the water, such a mess. A note says the my book and a this idea are not allowed.", cap:"Two central determiners cannot go together. Say my book, not the my book."},
      "You cannot put two central determiners together: *the my book*, *a this idea* and *some the people* are wrong. Use one, or switch to an *of* pattern: *some of the people, one of my books, a friend of mine*. These *of* patterns are the way to combine them."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“Many and much are the same.”** *Many* goes with count nouns and *much* with noncount nouns: *many people, much money*. Say *a lot of* in a plain positive sentence.",
        "**“A few and few are the same.”** *Few* is negative in feeling; *a few* is positive.",
        "**“Any is only for questions and negatives.”** *Any* also means free choice, and *some* is normal in offers and requests.",
        "**“Each and every are interchangeable.”** Often they are close, but *each* looks at individuals and *every* at the whole group.",
        "**“*All of the* and *all the* are different.”** They are nearly the same. *All of them* needs *of* before a pronoun."
      ]},
      "A learner who writes *much people* or *a lot of homeworks* is mixing up the noun type from Lesson 1. When a quantifier sounds wrong, go back to the noun and ask: count or noncount?"
    ]}
   ],
   try:[
    {id:"e5u9-l4-x1", type:"sort", q:"With which kind of noun does the quantifier go?", buckets:["Count (plural)","Noncount","Both"], items:[
      {t:"many", b:0, why:"*Many ideas*, not *many information*."},
      {t:"much", b:1, why:"*Much time*, *much money*."},
      {t:"a few", b:0, why:"*A few friends*, *a few ideas*."},
      {t:"a little", b:1, why:"*A little water*, *a little help*."},
      {t:"a lot of", b:2, why:"*A lot of ideas, a lot of time.*"},
      {t:"fewer", b:0, why:"*Fewer mistakes* (count)."},
      {t:"less", b:1, why:"*Less time* in careful writing."},
      {t:"enough", b:2, why:"*Enough chairs, enough time.*"}
    ]},
    M("e5u9-l4-x2","Dmitri says: “I have few friends in this city, so I feel lonely.” What does *few* tell us?",2,[
      ["He has exactly three friends.","*Few* does not give a number."],
      ["He has quite a lot of friends.","That would be *quite a few*."],
      ["He has not many friends, and he sees this as a problem.","Right. *Few* is negative in feeling. *A few* would sound positive."],
      ["He has no friends.","*No friends* would be *none*. *Few* means not many."]
    ]),
    {id:"e5u9-l4-x3", type:"match", q:"Match each sentence to the reason for the choice of *some* or *any*.", pairs:[
      ["Would you like some tea?","An offer that expects “yes”","*Some* is normal in offers and requests."],
      ["I don’t have any tea.","A negative sentence","*Any* is the usual word in a negative."],
      ["Do you have any questions?","A neutral question","The speaker does not know the answer."],
      ["Any day is fine.","Free choice","*Any* means it does not matter which."],
      ["She left without any money.","After *without*","*Any* follows words that are negative in meaning."]
    ]},
    {id:"e5u9-l4-x4", type:"spot", q:"Tap each word that needs a **change** in standard English.", ask:"needs a change", parts:[
      "“I have ", {t:"many", flag:true, why:"*Homework* is noncount. Use *a lot of homework* or *much homework* in a question or a negative."}, " homework today, and I need ", {t:"an", flag:true, why:"*Advice* is noncount. Use *some advice* or *a piece of advice*."}, " advice. There are ", {t:"few", flag:false, why:"Correct. *Few* is fine here, and it means not many and a problem."}, " clean chairs, so ", {t:"each", flag:false, why:"Correct. *Each* goes with a singular noun: *each person*."}, " person must bring a chair. I will bring ", {t:"the my", flag:true, why:"Two central determiners cannot go together. Use *my* alone: *my old chair*."}, " old chair.”"
    ]},
    {id:"e5u9-l4-x5", type:"order", q:"Put the words in a natural order to make a noun phrase about my two new teachers: *new / my / both / teachers*.", items:[
      {t:"both", why:"A predeterminer comes first."},
      {t:"my", why:"The central determiner comes after the predeterminer."},
      {t:"new", why:"Adjectives come before the noun."},
      {t:"teachers", why:"The noun comes last."}
    ]},
    M("e5u9-l4-x6","Which sentence sounds the most natural in everyday speech?",1,[
      ["“We have much time before the train.”","*Much* is unusual in a plain positive statement. It sounds stiff."],
      ["“We have a lot of time before the train.”","Right. *A lot of* is the normal choice in a positive statement."],
      ["“We have many time before the train.”","*Time* is noncount here, so *many* does not fit."],
      ["“We have a few time before the train.”","*A few* is for count nouns. Use *a little time*."]
    ]),
    {id:"e5u9-l4-x7", type:"number", q:"How many of these quantifiers can go with a **noncount** noun such as *water*? *much, many, a little, a few, a lot of, several, less, fewer*", answer:4, tol:0, unit:"words", why:"*Much, a little, a lot of* and *less* go with noncount nouns. *Many, a few, several* and *fewer* need plural count nouns.", wrongs:[{v:3, tol:0, why:"This leaves one out. *A lot of* goes with both kinds."},{v:5, tol:0, why:"This includes a count-only word. *Several* and *fewer* need plural count nouns."}], hint2:"Say each one with *water*: *much water*, *several water*."},
    {id:"e5u9-l4-x8", type:"explain", q:"A student says: “My book says *some* is for positive sentences and *any* is for negatives. But a waiter asked me *Would you like some coffee?* That is a question!” Explain what you would tell the student.", size:"3–5 sentences", prompt:"I would say: …", hint:"Say what the real contexts are for *some* and *any*, and give an example of each.", model:"The book gives a first rule that is not complete. *Any* is common in negatives, neutral questions and *if* sentences, such as *Do you have any questions?* But *some* is normal in offers and requests when the speaker expects or hopes for “yes”: *Would you like some coffee?* *Any* can also be positive when it means free choice: *Any day is fine.* So the rule depends on the meaning of the sentence, and positive or negative form is only a rough guide.", points:["Says that the positive/negative rule is only a rough guide", "Explains that offers and requests take some", "Explains that neutral questions, negatives and if-clauses take any", "Mentions free-choice any, or gives a correct example"]}
   ],
   apply:{
    intro:"These tasks use real texts and a free corpus. COCA at english-corpora.org is free with a registered account, and daily search limits apply.",
    tasks:[
     {t:"Corpus check: few or a few", how:[
       "Open COCA and sign in. Search *few friends* and then *a few friends*. Look at ten lines for each. The results for *few friends* also include *a few friends* and *quite a few friends*, so look at the word before *few* and skip those lines.",
       "Write down how the writer feels in each line: pleased, disappointed or neutral.",
       "Do the same with *little time* and *a little time*, again skipping the *a little time* lines in the first search."
     ], write:"few friends… a few friends… little time… a little time… What I noticed…"},
     {t:"Find the some and any contexts", how:[
       "Read a short interview or dialogue in English. Underline every *some* and *any*.",
       "For each, write the context: positive, negative, offer, request, neutral question, *if*, free choice.",
       "Find one that does not fit the “positive and negative” rule, and copy it."
     ], write:"My underlined words… their contexts… The one that breaks the rule…"}
    ],
    proof:"A list of corpus lines for *few / a few* with notes on attitude, and a table of *some* and *any* contexts from your text."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Functional categories”", note:"Look for how the book describes determiners as a closed category of small words that stand before nouns."},
    {book:"eling", where:"The Semantics chapter, section “Negative polarity items”", note:"It explains why words such as *any* appear after *not* and in *if* clauses. Compare it with this lesson’s *some* and *any* section."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u9-l5", title:"Explaining articles to Japanese speakers", minutes:55,
   hook:{q:"A Japanese learner writes: “I like dog.” What is the best first thing to tell the learner?", options:["“That is wrong. Never leave out the article.”","“You are talking about dogs in general, so use the plural: *I like dogs*.”","“Say *the dog*.”","“It is a small mistake, so ignore it.”"], answer:1, reveal:"**Use the plural: *I like dogs*.** The learner’s Japanese sentence 犬が好きです (*Inu ga suki desu*) has no number, and the idea is right: dogs in general. English asks for a plural to say “in general”. A short, kind explanation like this works better than a list of rules."},
   goals:[
     "Say what Japanese does and does not mark, and why articles feel hard",
     "Use three questions that help a learner choose a determiner",
     "Give kind, short explanations for the most common errors",
     "Plan feedback that fits your listener and your time"
   ],
   learn:[
    {h:"Why articles are hard, and why that is normal", body:[
      {lead:"Japanese has no articles and no required plural. English asks the speaker to make three small decisions for almost every noun."},
      "Look at what an English noun phrase needs. For *dog*, the speaker must decide: is it countable (yes), is it one or many (singular or plural), and does the listener know which one (*the* or *a*)? Japanese 犬 (*inu*) answers none of these. Context does the work. This is why learners at B1 and above, and even advanced speakers, still miss articles. It is a normal result of a different grammar and not a sign of carelessness.",
      "Many languages have no articles, for example Mandarin, Korean and Russian. Speakers of those languages often report the same difficulty. Speakers of languages with articles, such as French or German, find it easier at the start, but they meet other problems. For example, the article systems do not match exactly.",
      {key:"Japanese already tracks what the listener knows (*wa* and *ga*, *kono* and *sono*). English puts the same idea in a small word before the noun."},
      "Be direct and positive with learners. Article errors almost never stop a listener from understanding. They show most in formal writing and in presentations. So treat them as polish, not as a barrier. A learner who knows *why* a pattern works will improve faster than one who memorizes a long list of rules."
    ]},
    {h:"Three questions that help", body:[
      "A rule list is long and has exceptions. Three questions give a learner a method that works for most noun phrases. Ask them in this order.",
      {fig:'<svg viewBox="0 0 340 318"><defs><marker id="e5u9c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="20" text-anchor="middle">Three questions for every noun</text><rect class="d-rose" x="14" y="34" width="312" height="62" rx="8" stroke-width="2"/><text x="170" y="56" text-anchor="middle">1. Count or noncount?</text><text class="s" x="170" y="78" text-anchor="middle">Singular count nouns need a word before them.</text><path class="d-ink" d="M170 98V118" stroke-width="2" marker-end="url(#e5u9c)"/><rect class="d-lup" x="14" y="122" width="312" height="62" rx="8" stroke-width="2"/><text x="170" y="144" text-anchor="middle">2. One thing, or in general?</text><text class="s" x="170" y="166" text-anchor="middle">General: plural or noncount, no article.</text><path class="d-ink" d="M170 186V206" stroke-width="2" marker-end="url(#e5u9c)"/><rect class="d-sage" x="14" y="210" width="312" height="62" rx="8" stroke-width="2"/><text x="170" y="232" text-anchor="middle">3. Can the listener identify it?</text><text class="s" x="170" y="254" text-anchor="middle">Yes: the. No: a or an.</text><text class="s" x="170" y="298" text-anchor="middle">Then check the sound: a university, an hour.</text></svg>', alt:"Three boxes joined by arrows. 1: Count or noncount? Singular count nouns need a word before them. 2: One thing, or in general? General means plural or noncount with no article. 3: Can the listener identify it? Yes means the, no means a or an. A note at the bottom says to check the sound: a university, an hour.", cap:"A short method that a learner can use when writing or checking a sentence."},
      "Here is how the questions work on a real sentence. A learner writes: *I bought book at bookstore yesterday.*",
      {ex:"book: count, singular, one particular book that the listener has not heard of. → a book\nbookstore: count, one place. Does the listener know which one? Not yet. → a bookstore\n\nSo: I bought a book at a bookstore yesterday.\n(If both people know the store near the station: ...at the bookstore.)", label:"Worked example"}
    ]},
    {h:"Common errors and kind explanations", body:[
      "These patterns are common for Japanese speakers. Each one has a reason, and the reason is the best thing to share. Give the explanation as well as the correction.",
      {table:[["Learner sentence","What is going on","A short explanation"],["*I like dog.*","Japanese *inu* has no number.","“For dogs in general, English uses the plural: *I like dogs*.”"],["*I have cat.*","The count noun has no word before it.","“One cat: *a cat*. Two or more: *cats*.”"],["*He is teacher.*","Job names have no article in Japanese.","“A job is a kind of person, so use *a*: *a teacher*.”"],["*I need an advice.* / *informations*","The noun is noncount in English.","“Use *some advice* or *a piece of advice*.”"],["*The Japanese people like the rice.*","Too much *the* for a general idea.","“You mean people and rice in general: *Japanese people like rice*.”"],["*I went to the school to study.*","The place and the purpose are mixed up.","“For the purpose, no article: *go to school*.”"],["*Please open window.*","The listener can see which window.","“You both know which one: *the window*.”"]]},
      "Notice the last two rows. Some errors are *missing* articles, and some are *extra* ones. Many Japanese learners know that *the* is important and then use it too much. This is a normal stage. It shows that the learner is working on the system.",
      {tip:"Praise the correct part first: “Your idea is right. English wants a plural here.” Learners who feel safe notice patterns faster, and they take risks."},
      {h:"A note on the Japanese side"},
      "A Japanese sentence such as 本を買いました (*Hon o kaimashita*) can mean “I bought a book”, “I bought the book” or “I bought books”. English has to choose. You can say this to a learner directly: “Japanese lets context decide. English asks you to decide.” That is not a criticism of Japanese. It is a map of the difference.",
      "Another helpful link is *sono* (その). 「その本」 (*sono hon*) is “that book”, about a book that was mentioned or is known. It often matches English *the book*. The match is not perfect, because English *the* is also used for things like *the sun*, which Japanese does not mark.",
      "Do not tell a learner that Japanese speakers “cannot” learn articles. That is false and discouraging. They can, with time, noticing and feedback."
    ]},
    {h:"Short explanations that work", body:[
      "A good explanation for articles is short enough to remember. Here are five that work, with the reasons they work.",
      {list:[
        "**A/an:** “One, and you do not know which one yet.”",
        "**The:** “We both know which one.”",
        "**No article:** “In general: plural or noncount, with no single one in mind.”",
        "**Count test:** “Can you say *two* ___? If yes, it needs *a/an* (one) or *-s* (more than one).”",
        "**Sound rule:** “Say it aloud. A vowel sound takes *an*: *an hour*, *a university*.”"
      ]},
      "Give one or two explanations at a time, with a model sentence. Then give the learner a chance to produce a sentence of their own. Corrections work best when the learner writes first and you comment, or when you recast in conversation (*I like dog.* → *Oh, you like dogs? Me too.*).",
      {h:"Plan what to teach"},
      {list:[
        "**First:** count and noncount, and the plural for general statements. These errors change the meaning most often.",
        "**Next:** *a* and *the* for first and second mention, and the sound rule.",
        "**Later:** zero article with institutions, names and generic *the*. These are mostly chunks.",
        "**Always:** use real texts. Show how articles behave in a news story the learner has already read."
      ]},
      "When you give feedback in writing, mark the noun and write the question that fits, such as *Count or noncount?* or *Does the reader know which one?*. The learner then does the thinking and corrects it. This builds the habit that the learner needs when nobody is there to ask. In speaking, keep corrections short and warm, and let a mistake pass when the talk is going well.",
      "For self-study, make a checklist and apply it when you proofread: for each noun, ask the three questions. Keep a notebook of chunks (*a lot of, go to school, a piece of advice, in the morning*). Use a corpus, such as COCA, to check a doubtful phrase and read ten lines."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“Articles are small, so they are unimportant.”** They are among the most frequent words in English, and they carry the idea of what the listener knows. They are worth teaching, but errors rarely block understanding.",
        "**“Give the learner all the rules at once.”** A long list overwhelms. Teach the three questions first.",
        "**“Correct every missing article.”** Choose. Over-correction can silence a learner. Pick the pattern that matters for the goal.",
        "**“There is a rule for everything.”** Fixed phrases such as *in the morning* and *at night* are chunks.",
        "**“Japanese learners just need to stop translating.”** Translation helps in some places (*sono*, *wa*) and misleads in others. Explain the difference."
      ]}
    ]}
   ],
   try:[
    M("e5u9-l5-x1","A learner writes: “I have cat.” Which feedback is the best?",1,[
      ["“Wrong. You forgot the article.”","This is true but not helpful. It does not explain the choice."],
      ["“You mean one cat, so use *a*: *I have a cat*. For more than one: *I have two cats*.”","Right. It gives the reason and the two options, in plain words."],
      ["“English has an article rule for all nouns.”","This is too general. The learner cannot use it."],
      ["“Say *I have the cat*.”","*The cat* would mean a cat that the listener already knows."]
    ]),
    {id:"e5u9-l5-x2", type:"sort", q:"What kind of error is each learner sentence?", buckets:["Missing article or plural","Extra the","Noncount noun treated as count"], items:[
      {t:"“I like dog.”", b:0, why:"A general idea needs the plural: *dogs*."},
      {t:"“The life is difficult.”", b:1, why:"A general statement needs no article."},
      {t:"“I need an advice.”", b:2, why:"*Advice* is noncount: *some advice*."},
      {t:"“He is teacher.”", b:0, why:"A job needs *a*: *a teacher*."},
      {t:"“She gave me many informations.”", b:2, why:"*Information* is noncount, with no plural."},
      {t:"“The Japanese people like the rice.”", b:1, why:"Both are general. Use *Japanese people like rice*."}
    ]},
    {id:"e5u9-l5-x3", type:"match", q:"Match each learner error to a short explanation that a teacher could give.", pairs:[
      ["I like dog.","In general, use the plural.","*Dogs* tells the listener that you mean dogs as a kind."],
      ["He is teacher.","A job is a kind of person: use *a*.","Jobs follow *be* with *a/an* in the singular."],
      ["I need an advice.","*Advice* has no *a* and no plural.","It is noncount: use *some advice* or *a piece of advice*."],
      ["Please open window.","You both know which window: use *the*.","The shared situation makes it identifiable."],
      ["The nature is beautiful.","For nature in general, use no article.","General meaning with a noncount noun takes the zero article."]
    ]},
    {id:"e5u9-l5-x4", type:"spot", q:"Tap each word that needs a **change** in this short learner paragraph (about a visit).", ask:"needs a change", parts:[
      "“Last week I visited ", {t:"the", flag:true, why:"The listener cannot identify this place yet, so *a*: *a small town*."}, " small town. ", {t:"A", flag:true, why:"The town was just mentioned, so *The*."}, " town has ", {t:"beautiful", flag:false, why:"Correct. Adjectives need no change."}, " beaches. I bought ", {t:"a souvenir", flag:false, why:"Correct. A new, singular count noun."}, " for my mother and I heard ", {t:"a good news", flag:true, why:"*News* is noncount: *good news* or *a piece of good news*."}, " from my friend.”"
    ]},
    {id:"e5u9-l5-x5", type:"order", q:"Put these steps in a good order for checking the nouns in a piece of your own writing.", items:[
      {t:"Underline every noun in a sentence.", why:"You need to see them all before you can check them."},
      {t:"Ask: count or noncount?", why:"Question 1 decides if a singular needs a word before it."},
      {t:"Ask: one thing, or in general?", why:"General statements use the plural or noncount with no article."},
      {t:"Ask: can the listener identify it? Choose the or a/an.", why:"The last question sets the choice for a particular noun."},
      {t:"Check the sound of a/an, and look up any doubt in a dictionary.", why:"The final check catches *a university* and *an hour*."}
    ]},
    M("e5u9-l5-x6","Which statement about Japanese and articles is the most accurate?",2,[
      ["Japanese has no way to say that the listener knows something.","Japanese uses particles such as *wa* and *ga*, and words such as *sono*, for this."],
      ["Japanese speakers cannot learn articles.","They can, with practice and feedback."],
      ["Japanese does not use articles, but it tracks what the listener knows in other ways, which can help.","Right. The idea is similar. English puts it into a small word before the noun."],
      ["Japanese has the same articles as English.","It has no articles."]
    ]),
    {id:"e5u9-l5-x7", type:"explain", q:"Toby, who taught English in the Japanese countryside for two years and now studies Japanese linguistics, is asked by a former student: “I wrote *I like dog* and my friend corrected it to *dogs*. But I only mean dogs in general. Why do I need an -s?” Write the explanation Toby could give.", size:"3–5 sentences", prompt:"Toby could say: …", hint:"Connect to the Japanese sentence and say what the plural means in English.", model:"Your idea is exactly right: you mean dogs in general. In Japanese, 犬 (*inu*) does not show number, so it works for one dog or many. English must choose, and for a general idea about a kind, it uses the plural with no article: *I like dogs*. *I like a dog* would mean one particular dog, and *I like the dog* would mean one that we both know. So the -s here does not mean “many”. It says “dogs as a kind”.", points:["Agrees that the learner’s idea is right and does not blame the learner", "Links to Japanese, where the noun does not show number", "Explains that English uses the plural with no article for general statements", "Says what a dog or the dog would mean"]},
    {id:"e5u9-l5-x8", type:"explain", q:"A new teacher asks: “Should I give my students a list of all the article rules?” Explain what you would suggest.", size:"3–5 sentences", prompt:"I would suggest: …", hint:"Think about memory, exceptions, and what to teach first.", model:"I would not give the whole list at first, because the rules have many exceptions and students forget them. I would start with three questions: is the noun count or noncount, is it general, and can the listener identify it? Then I would add short models, such as *a/an means one and not known yet* and *the means we both know which*. I would teach fixed phrases such as *go to school* as chunks, and give students real texts to notice articles in. I would correct the errors that change meaning first.", points:["Advises against a long list of rules at the start", "Offers a short method or three questions", "Mentions chunks and noticing in real texts", "Suggests priorities in correction"]}
   ],
   apply:{
    intro:"These tasks use short writing and a free dictionary or corpus. Nothing needs an account, except COCA, which is free with registration and has daily search limits.",
    tasks:[
     {t:"Write three explanations", how:[
       "Choose three of the errors in the table: for example *I like dog*, *He is teacher* and *The life is hard*.",
       "For each, write an explanation of two sentences or fewer in plain English. Include one correct example.",
       "Read your explanations aloud. Remove any word that a B1 learner might not know."
     ], write:"Error 1 and my explanation… Error 2… Error 3…"},
     {t:"Edit a short paragraph", how:[
       "Write a paragraph of five sentences about your day, with the usual care. Leave out the articles on purpose, or ask a friend to write one this way.",
       "Apply the three questions to every noun and add the right word.",
       "Check two doubtful phrases in COCA (english-corpora.org) or in a learner’s dictionary, and copy one example line each."
     ], write:"My paragraph before and after… the two checks…"}
    ],
    proof:"Three short explanations in plain English, and a paragraph before and after editing with the three questions."
   },
   read:[
    {book:"eling", where:"Background reading: the Syntax chapter, section “Functional categories”", note:"Use it to see articles as one part of a small closed set of grammar words."}
   ]
  }
  ],
  checkpoint:["e5u9-q03","e5u9-q07","e5u9-q11","e5u9-q14","e5u9-q18","e5u9-q22","e5u9-q26","e5u9-q29","e5u9-q33","e5u9-q36","e5u9-q40","e5u9-q43"],
  cpBank:[
   Q("e5u9-cp01","e5u9-l1",1,"Choose the correct sentence about advice.",2,[
     ["“I need an advice.”","*Advice* is noncount, so it has no *a*."],
     ["“I need advices.”","*Advice* has no plural."],
     ["“I need some advice.”","Right. *Some* works with a noncount noun."],
     ["“I need a advice.”","This has the wrong article, and *advice* is noncount anyway."]]),
   Q("e5u9-cp02","e5u9-l1",2,"What is the best explanation of why *luggage* is noncount?",1,[
     ["Because you cannot count the things in a suitcase.","You can count the things. Meaning does not decide."],
     ["Because English grammar treats it as one mass, so it has no plural and no *a*.","Right. Countability is a grammar property. Use *a piece of luggage* or *a suitcase*."],
     ["Because it is a long word.","Length has no effect."],
     ["Because it is British.","*Luggage* is noncount in both varieties."]]),
   Q("e5u9-cp03","e5u9-l1",3,"A café sign says “Two coffees, please.” What is the best analysis?",0,[
     ["*Coffee* is count here, meaning cups of coffee.","Right. A serving makes the noun count."],
     ["The sign is an error, because *coffee* is always noncount.","Many drink nouns are count for a serving."],
     ["It is wrong, because a plural noun cannot follow *two*.","*Two* is followed by a plural noun: *two coffees*, *two chairs*."],
     ["It is correct only in British English.","It is normal in both varieties."]]),
   Q("e5u9-cp04","e5u9-l2",1,"Which article choice shows a first mention?",3,[
     ["“The man called.” (the listener has never heard of him)","*The* needs a listener who can identify the man."],
     ["“An sun rose.”","*Sun* is unique and starts with a consonant sound."],
     ["“I met the friend.” (new to the listener)","The listener cannot identify this friend."],
     ["“A man called.”","Right. *A* introduces a new, singular count noun."]]),
   Q("e5u9-cp05","e5u9-l2",2,"Choose the correct phrase with a vowel or consonant sound.",1,[
     ["a hour","*Hour* begins with a vowel sound, since *h* is silent."],
     ["an hour","Right. The sound decides: /aʊɚ/."],
     ["an university","*University* begins with /j/, a consonant sound."],
     ["a MRI scan","*M* is said *em*, a vowel sound, so *an MRI*."]]),
   Q("e5u9-cp06","e5u9-l2",3,"Priya says: “I told her about the problem.” The listener has never heard of this problem. What is the most helpful comment?",2,[
     ["It is correct because Priya knows the problem.","Priya’s knowledge is not enough. The listener must identify it."],
     ["It should be *a problem*, because *problem* is a negative word.","The meaning of the word does not decide the article. The listener’s knowledge does."],
     ["Use *a problem* here, because the listener cannot identify it. *The problem* works only when the listener knows which one.","Right. Definiteness depends on the listener."],
     ["It should have no article.","*Problem* is singular count and needs a word before it."]]),
   Q("e5u9-cp07","e5u9-l3",1,"Which sentence makes a general statement about students?",2,[
     ["“The students are late.”","*The students* are particular students."],
     ["“My students are late.”","*My students* are particular students."],
     ["“Students need sleep.”","Right. A plural and a noncount noun with no article are general."],
     ["“A student is outside.”","This is about one particular student."]]),
   Q("e5u9-cp08","e5u9-l3",2,"What is the difference between *go to school* and *go to the school*?",0,[
     ["*Go to school* is about the purpose (studying). *Go to the school* is about the building.","Right. The article changes the meaning."],
     ["There is no difference.","The meaning changes."],
     ["One is British and one is American.","Both are used in both varieties."],
     ["*Go to the school* is only used by teachers.","Anyone can use it, for example a visitor."]]),
   Q("e5u9-cp09","e5u9-l3",3,"A British friend says “my grandfather is in hospital.” What does this tell you?",3,[
     ["He works at a hospital.","This idiom means a patient, not a worker."],
     ["He is visiting someone.","A visitor would say *at the hospital* or *visiting the hospital*."],
     ["The grammar is wrong in any variety.","It is normal British English."],
     ["He is a patient, and Americans would say *in the hospital*.","Right. This is a UK and US difference."]]),
   Q("e5u9-cp10","e5u9-l4",1,"Which word goes with a noncount noun such as *money*?",1,[
     ["many","*Many* needs a plural count noun."],
     ["much","Right. *Much money*."],
     ["several","*Several* needs plural count nouns."],
     ["a few","*A few* needs plural count nouns."]]),
   Q("e5u9-cp11","e5u9-l4",2,"Which sentence expresses a **positive** view of a small number?",0,[
     ["“We have a few seats left.”","Right. *A few* is positive: there are some."],
     ["“We have few seats left.”","*Few* has a negative feeling: not enough."],
     ["“We have little seats left.”","*Little* goes with noncount nouns, not *seats*."],
     ["“We have much seats left.”","*Much* does not go with a plural count noun."]]),
   Q("e5u9-cp12","e5u9-l5",2,"What is the best short explanation for *I like dog* from a Japanese learner?",2,[
     ["“English always needs *the*.”","This is not true, and it would give a different meaning."],
     ["“Japanese is wrong.”","Japanese is not wrong. It works differently."],
     ["“For dogs in general, English uses the plural with no article: *I like dogs*.”","Right. It is short, kind and gives the reason."],
     ["“Use *a*: *I like a dog*.”","This means one particular dog."]])
  ],
  bank:[
   /* ---- Lesson 1: count and noncount ---- */
   Q("e5u9-q01","e5u9-l1",1,"What does it mean to say that a noun is **noncount**?",1,[
     ["It names something that nobody can count.","You can count pieces of furniture and the noun is still noncount. It is a grammar fact."],
     ["It has no plural form and does not take *a/an*, in that sense.","Right. These are the grammar tests."],
     ["It always names a liquid.","*Furniture* and *advice* are noncount and are not liquids."],
     ["It always names an abstract idea.","*Rice* and *luggage* are concrete and noncount."]]),
   Q("e5u9-q02","e5u9-l1",1,"Which of these is a **noncount** noun?",3,[
     ["suitcase","*A suitcase, two suitcases.* Count."],
     ["idea","*An idea, two ideas.* Count."],
     ["answer","*An answer, two answers.* Count."],
     ["furniture","Right. It has no plural and no *a*."]]),
   Q("e5u9-q03","e5u9-l1",1,"Which sentence is correct?",2,[
     ["“She gave me many advices.”","*Advice* has no plural."],
     ["“She gave me an advice.”","*Advice* does not take *a/an*."],
     ["“She gave me some advice.”","Right. *Some* works with noncount nouns."],
     ["“She gave me two advice.”","A number needs a unit noun: *two pieces of advice*."]]),
   Q("e5u9-q04","e5u9-l1",2,"How can you count *furniture*?",0,[
     ["Use a unit noun: *two pieces of furniture*.","Right. A unit noun is count and *of* joins the mass noun."],
     ["Add *-s*: *furnitures*.","*Furniture* has no plural."],
     ["Use *a*: *a furniture*.","*A furniture* is not standard."],
     ["You cannot count it in English.","You can, with a unit noun or by naming single items."]]),
   Q("e5u9-q05","e5u9-l1",2,"Which pair shows *experience* used in a noncount and a count sense?",1,[
     ["“Two experiences” and “three experiences”","Both are count uses."],
     ["“ten years of experience” and “an amazing experience”","Right. The first is skill over time and the second is one event."],
     ["“an experience” and “a experience”","The second has the wrong article. Neither shows a noncount sense."],
     ["“more experience” and “much experience”","Both are noncount uses."]]),
   Q("e5u9-q06","e5u9-l1",2,"Why is “The news are bad” wrong?",2,[
     ["*News* is a verb.","It is a noun."],
     ["*News* is always plural.","It ends in *-s* but is singular and noncount."],
     ["*News* is a noncount noun with a singular verb: *The news is bad*.","Right. The *-s* is not a plural ending here."],
     ["It is correct in British English.","British English also says *The news is bad*."]]),
   Q("e5u9-q07","e5u9-l1",2,"A waiter says “Two coffees, please.” What does *coffees* mean?",1,[
     ["Two kinds of beans only.","In a café it usually means cups."],
     ["Two cups or servings of coffee.","Right. A serving makes the drink noun count."],
     ["It is a mistake.","It is normal English."],
     ["Two shops that sell coffee.","This would need a different context."]]),
   Q("e5u9-q08","e5u9-l1",3,"Kaito writes: “I bought two furnitures.” What is the best correction and reason?",3,[
     ["“I bought two furniture.” Remove the *s* only.","The number still does not fit a noncount noun."],
     ["“I bought a furniture.” Singular is fine.","*Furniture* does not take *a*."],
     ["“I bought many furnitures.” *Many* fixes it.","The plural form is still wrong."],
     ["“I bought two pieces of furniture.” *Furniture* is noncount, so use a unit noun.","Right. The unit noun is count and holds the number."]]),
   Q("e5u9-q09","e5u9-l1",3,"Which statement about US and UK English is correct?",2,[
     ["*Luggage* is count in the US and noncount in the UK.","It is noncount in both."],
     ["*Accommodation* is plural-only in the UK.","In British English it is noncount. In American English the plural *accommodations* is common."],
     ["*Accommodation* is noncount in British English, and *accommodations* is common in American English.","Right. This is a known difference."],
     ["*Mail* is count in the US.","*Mail* is noncount."]]),
   /* ---- Lesson 2: a, an, the ---- */
   Q("e5u9-q10","e5u9-l2",1,"What does *the* tell the listener?",0,[
     ["“You can identify which one I mean.”","Right. The listener’s knowledge is the key."],
     ["“This is an important thing.”","Importance does not decide the article."],
     ["“I am sure about it.”","Certainty is not the point."],
     ["“There is only one in the world.”","Uniqueness is one reason, not the whole idea."]]),
   Q("e5u9-q11","e5u9-l2",1,"Which article goes before *university*?",1,[
     ["an","*University* starts with /j/, a consonant sound."],
     ["a","Right. The first sound is /j/."],
     ["the only","*The only* is not an article."],
     ["No article is possible.","A singular count noun needs a determiner."]]),
   Q("e5u9-q12","e5u9-l2",1,"Which phrase is correct?",3,[
     ["a hour","The *h* is silent."],
     ["a honest person","The *h* is silent, so a vowel sound follows."],
     ["an university","*University* starts with a consonant sound."],
     ["an hour","Right. *Hour* starts with a vowel sound."]]),
   Q("e5u9-q13","e5u9-l2",2,"“We rented a house. The kitchen was large.” Why *the kitchen*?",2,[
     ["Because kitchens are always unique.","A house usually has one kitchen, but the reason for *the* is the link to *a house*, not a general rule."],
     ["Because the speaker likes the kitchen.","Preference does not decide."],
     ["Because a house has a kitchen, so the listener can identify it.","Right. This is an associated or bridging use."],
     ["Because it is the second sentence.","It is a new noun, not a repeated one."]]),
   Q("e5u9-q14","e5u9-l2",2,"Which is the best reason for *the* in “Could you pass the salt?”",0,[
     ["Both people can see the one salt on the table.","Right. A shared situation."],
     ["Salt is a noncount noun.","This does not decide the article."],
     ["Salt was mentioned earlier.","In this sentence it was not mentioned earlier."],
     ["The speaker is the host.","This has no connection with the article."]]),
   Q("e5u9-q15","e5u9-l2",2,"Which sentence uses *a* to classify?",1,[
     ["“I saw a film last night.”","This introduces a new thing."],
     ["“She is a nurse.”","Right. It says what kind of person she is."],
     ["“I go twice a week.”","This is the *per* use."],
     ["“A man called.”","This introduces a new person."]]),
   Q("e5u9-q16","e5u9-l2",2,"How is *the* said before *hour*?",2,[
     ["/ðə/","This is the form before a consonant sound."],
     ["/θə/","This is not the sound of *the*."],
     ["/ði/","Right. Before a vowel sound: *the hour*."],
     ["/ðiː/ only","This is the SSBE strong form, used for emphasis or before a pause. Before a vowel sound the usual form is /ði/."]]),
   Q("e5u9-q17","e5u9-l2",3,"Hana says: “I know my friend well, so I will say *I met the friend of mine*.” What is the best reply?",3,[
     ["She is correct. If the speaker knows the friend, use *the*.","Speaker knowledge is not enough."],
     ["She should say *I met friend of mine*.","A singular count noun needs a determiner."],
     ["She should say *I met an friend of mine*.","*Friend* starts with a consonant, so *a*."],
     ["She should say *I met a friend of mine*, because the listener cannot identify which friend.","Right. The listener’s knowledge decides."]]),
   Q("e5u9-q18","e5u9-l2",3,"In Japanese, 昔々、おじいさんがいました。おじいさんは… (*Mukashi mukashi, ojiisan ga imashita. Ojiisan wa…*) Which comparison is the most accurate?",1,[
     ["*Ga* is always *a* and *wa* is always *the*.","The match is only rough: *wa* also marks contrast and topic."],
     ["*Ga* often introduces a new person and *wa* a known one, which is a rough parallel to *a* and *the*.","Right. Japanese tracks what the listener knows, but not with articles."],
     ["Japanese has the articles *ga* and *wa*.","These are particles, not articles."],
     ["Japanese does not mark known and new information.","It does, with particles and words such as *sono*."]]),
   /* ---- Lesson 3: zero article, generic, institutions ---- */
   Q("e5u9-q19","e5u9-l3",1,"Which noun phrase usually gives a **general** meaning?",2,[
     ["the books","*The books* are particular."],
     ["my cat","*My cat* is one particular cat."],
     ["books (plural, no article)","Right. A plural with no article is general."],
     ["a book","*A book* is one."]]),
   Q("e5u9-q20","e5u9-l3",1,"Which sentence is a general statement?",1,[
     ["“The water is cold.”","Particular water."],
     ["“Water is essential for life.”","Right. Noncount, no article."],
     ["“A water is on the table.”","*A water* means a serving of water, in a particular place."],
     ["“I drank the water.”","Particular water."]]),
   Q("e5u9-q21","e5u9-l3",1,"Which name needs *the*?",3,[
     ["Japan","Most countries take no article."],
     ["Mount Fuji","A single mountain takes no article."],
     ["Lake Biwa","A single lake takes no article."],
     ["Philippines","Right. A plural name takes *the*: *the Philippines*."]]),
   Q("e5u9-q22","e5u9-l3",2,"What is the difference between “Cats are mammals” and “The cat is a mammal”?",0,[
     ["Both are general. The second is more formal or scientific.","Right. Both can be generic, with different registers."],
     ["The first is general and the second is about one cat.","*The cat* can be generic, as in science writing."],
     ["The second is wrong.","It is standard."],
     ["There is no difference in any context.","The register is different."]]),
   Q("e5u9-q23","e5u9-l3",2,"Which sentence is a definition of any one member of a class?",2,[
     ["“The triangle is on the board.”","This is about one particular triangle."],
     ["“Triangles on the board are red.”","This is about particular triangles."],
     ["“A triangle has three sides.”","Right. *A* + singular defines any one member."],
     ["“Triangle has three sides.”","A singular count noun needs a determiner."]]),
   Q("e5u9-q24","e5u9-l3",2,"Why is “The life is hard” unusual when it is a general statement?",1,[
     ["*Life* is always countable.","*Life* in this sense is noncount."],
     ["A general statement with a noncount noun usually has no article.","Right. Say *Life is hard*."],
     ["*Hard* is not an adjective.","It is an adjective here."],
     ["*The* is never used with noncount nouns.","It is used when the noun is specific: *the life of a sailor*."]]),
   Q("e5u9-q25","e5u9-l3",2,"What does *I went to the church* suggest?",0,[
     ["I visited the building, not for worship.","Right. With *the*, the noun names the building."],
     ["I went to worship.","This would be *went to church*."],
     ["I am staying inside a church.","It does not say this."],
     ["I went to many churches.","*The church* is singular."]]),
   Q("e5u9-q26","e5u9-l3",3,"A British writer says “Her son goes to university.” What would an American writer more naturally say?",3,[
     ["“Her son goes to the university.”","This is possible for a particular university, but not the usual idiom."],
     ["“Her son goes to a university.”","This is possible but less usual."],
     ["“Her son goes to universities.”","This changes the meaning."],
     ["“Her son goes to college.”","Right. *Go to college* is the usual American idiom."]]),
   Q("e5u9-q27","e5u9-l3",3,"Mariya hears *at night* and *in the morning* and asks for the rule. What is the best answer?",1,[
     ["There is a clear logical rule that she should memorize.","There is no logical rule."],
     ["It is a fixed habit of the language, so learn the phrases as chunks.","Right. These are chunks, and chunks work better than rules."],
     ["*At night* is wrong and should be *in the night*.","*At night* is the normal phrase."],
     ["British and American speakers differ in every case.","They are the same here. The difference is in *at the weekend* and *on the weekend*."]]),
   /* ---- Lesson 4: quantifiers ---- */
   Q("e5u9-q28","e5u9-l4",1,"Which quantifier goes with a **singular count** noun?",2,[
     ["many","*Many* needs plural nouns."],
     ["much","*Much* needs noncount nouns."],
     ["each","Right. *Each student*."],
     ["a few","*A few* needs plural nouns."]]),
   Q("e5u9-q29","e5u9-l4",1,"Which sentence is correct?",3,[
     ["“There is many water.”","*Many* does not go with *water*."],
     ["“There are much people.”","*Much* does not go with *people*."],
     ["“There is a few water.”","*A few* needs plural count nouns."],
     ["“There is a little water.”","Right. *A little* goes with a noncount noun."]]),
   Q("e5u9-q30","e5u9-l4",1,"What does *a few* suggest, compared with *few*?",1,[
     ["A larger number than *few*, and a negative feeling.","*A few* is positive."],
     ["Some, with a positive feeling. *Few* feels negative.","Right. The article changes the attitude."],
     ["Exactly three.","*A few* is not a fixed number."],
     ["The same meaning as *few*.","The two differ in feeling."]]),
   Q("e5u9-q31","e5u9-l4",2,"Which sentence uses *some* correctly?",0,[
     ["“Would you like some tea?”","Right. *Some* is normal in offers."],
     ["“I don’t have some tea.”","A negative sentence normally takes *any*."],
     ["“Do you have some of tea?”","*Some of* needs a known set and a determiner."],
     ["“She left without some money.”","After *without*, use *any*."]]),
   Q("e5u9-q32","e5u9-l4",2,"In which sentence does *any* mean “it does not matter which”?",2,[
     ["“I don’t have any questions.”","This is a negative use."],
     ["“Do you have any questions?”","This is a neutral question."],
     ["“Any day is fine for me.”","Right. This is the free-choice meaning."],
     ["“If you have any problems, call me.”","This is an *if* use."]]),
   Q("e5u9-q33","e5u9-l4",2,"Which is the more natural sentence in everyday English?",1,[
     ["“We have much money.”","*Much* sounds stiff in a plain positive sentence."],
     ["“We have a lot of money.”","Right. *A lot of* is the usual choice."],
     ["“We have many money.”","*Many* does not go with *money*."],
     ["“We have a few money.”","*A few* does not go with *money*."]]),
   Q("e5u9-q34","e5u9-l4",2,"What is the difference between *each* and *every*?",3,[
     ["*Each* is for noncount nouns.","Both go with singular count nouns."],
     ["*Every* is always plural.","Both take a singular noun and verb."],
     ["There is no difference.","*Each* looks at individuals and *every* at the whole group."],
     ["*Each* looks at individuals one by one, and *every* looks at the whole group.","Right. *Each student* is one by one; *every student* is all of them together."]]),
   Q("e5u9-q35","e5u9-l4",3,"A student writes “the my book”. Which explanation is best?",2,[
     ["*Book* needs a plural.","The noun is fine."],
     ["*My* is not a determiner.","*My* is a determiner."],
     ["*The* and *my* are both central determiners, and they cannot go together. Use *my book*.","Right. Drop one, or use an *of* pattern such as *one of my books*."],
     ["It is correct in formal writing.","It is not standard."]]),
   Q("e5u9-q36","e5u9-l4",3,"Sione says: “Few people came, but a few of them stayed to help.” What is the best reading?",0,[
     ["*Few* gives a disappointed view of the turnout, and *a few* gives a positive view of the helpers.","Right. The article changes the attitude."],
     ["Sione contradicts himself, because both mean the same.","They differ in attitude."],
     ["Both mean exactly zero.","Neither means zero."],
     ["Sione made a grammar mistake with *few*.","Both are standard."]]),
   /* ---- Lesson 5: explaining ---- */
   Q("e5u9-q37","e5u9-l5",1,"What does Japanese lack that English has?",1,[
     ["A way to say that a noun is known to the listener.","Japanese has *wa*, *ga* and *sono*."],
     ["Articles and an obligatory singular and plural.","Right. Japanese nouns do not show number."],
     ["Nouns.","Japanese has nouns."],
     ["A way to count things.","Japanese uses counters."]]),
   Q("e5u9-q38","e5u9-l5",1,"Which are the three questions of this lesson?",2,[
     ["Past or present? Singular or plural? Formal or informal?","These are not the questions."],
     ["Noun or verb? Open or closed? Count or mass?","These belong to other lessons."],
     ["Count or noncount? One thing or general? Can the listener identify it?","Right. These three questions work for most noun phrases."],
     ["Which letter? How many syllables? What stress?","These are about sound, not articles."]]),
   Q("e5u9-q39","e5u9-l5",1,"Which sentence is most likely an over-use of *the* by a learner?",3,[
     ["“I saw a film.”","Correct. *Film* is new and singular, so *a* is right."],
     ["“She is a teacher.”","Correct. A job takes *a* in the singular."],
     ["“Please close the door.”","Correct in a shared situation."],
     ["“The honesty is important.”","Right. A general idea needs no article: *Honesty is important*."]]),
   Q("e5u9-q40","e5u9-l5",2,"“I have cat.” What is the best kind explanation?",1,[
     ["“You forgot the article.”","True but not helpful."],
     ["“One cat is *a cat*. For several, *cats*. English wants you to choose.”","Right. It gives a reason and two options."],
     ["“Japanese speakers cannot use articles.”","This is false and discouraging."],
     ["“Say *the cat*.”","That would mean a known cat."]]),
   Q("e5u9-q41","e5u9-l5",2,"Why does 本を買いました (*Hon o kaimashita*) cause trouble for English?",0,[
     ["It can mean a book, the book or books, and English must choose.","Right. Japanese lets context decide, and English asks for a choice."],
     ["It has no verb.","It has the verb *kaimashita*."],
     ["It is impolite.","It is a normal polite sentence."],
     ["It means only one book.","It does not show number."]]),
   Q("e5u9-q42","e5u9-l5",2,"Which approach is the best for most learners at first?",2,[
     ["Give a long list of all article rules.","It is too long and has exceptions."],
     ["Correct every article error in every sentence.","Over-correction can silence learners."],
     ["Teach a short method, use real texts, and correct the errors that change meaning first.","Right. It is short, uses real texts and sets priorities."],
     ["Ignore articles completely.","They matter in careful writing."]]),
   Q("e5u9-q43","e5u9-l5",2,"What does *sono hon* (その本) often match in English?",1,[
     ["*a book*","*Sono* points to a known book."],
     ["*the book* (a book that is known)","Right. The match is rough but useful."],
     ["*books*","*Sono* does not show plural."],
     ["*any book*","*Sono* does not mean any."]]),
   Q("e5u9-q44","e5u9-l5",3,"Toby’s former student wrote “I like dog” and asks why the plural is needed. What is the best part of a good answer?",3,[
     ["“Because grammar requires it.”","This gives no reason."],
     ["“Because you made a mistake.”","This does not help."],
     ["“Because Japanese is different.”","This is true but incomplete."],
     ["“Your meaning is right. English uses the plural with no article for dogs as a kind.”","Right. It affirms the idea and gives the reason."]]),
   Q("e5u9-q45","e5u9-l5",3,"A learner proofreads with the three questions. For “The life is hard” the learner decides the idea is general. What is the correct result?",2,[
     ["“A life is hard.”","This is odd as a general statement."],
     ["“The lives is hard.”","The noun and verb are wrong."],
     ["“Life is hard.”","Right. A general idea with a noncount noun takes no article."],
     ["“Lifes are hard.”","*Life* has the plural *lives* and is noncount here."]])
  ],
  codex:[
   {id:"countability-english", title:"Count and noncount nouns in English", aka:["countable and uncountable nouns","mass nouns","unit nouns"], tags:["grammar","nouns"],
    summary:"Whether a noun is count or noncount is a grammar fact about the word or sense, shown by a/an, plural -s and much/many.",
    levels:{
     starter:[
      "English nouns come in two main groups. A **count noun** can be one or many: *a chair, two chairs*. A **noncount noun** (also called mass or uncountable) has no plural and takes no *a/an*: *furniture, advice, rice*.",
      "The group is a fact about English grammar, not about the world. You can count pieces of furniture, but the word *furniture* is still noncount. French *information* has a plural, but English *information* does not.",
      "Use three tests. Can it follow *a/an*? Does it take plural *-s*? Does it go with *many* (count) or *much* (noncount)?",
      "To count a noncount noun, use a unit noun: *a piece of advice, two pieces of furniture, a loaf of bread, a glass of water*. Many nouns belong to both groups with different senses: *coffee* (the drink) and *a coffee* (a cup), *experience* (skill) and *an experience* (an event).",
      {key:"Test the word and the sense. Use a unit noun to count a noncount noun."}
     ],
     builder:[
      "Linguists use the terms *count* and *noncount* (or mass). The tests are grammatical. A singular count noun needs a determiner (*a chair, my chair*), takes plural *-s*, and goes with *many, few, several*. A noncount noun goes with *much, little, a little*, takes a singular verb, and has no plural.",
      {table:[["Type","Examples","Notes"],["Count","*chair, idea, answer, suitcase*","*a/an*, plural, *many*"],["Noncount (abstract)","*advice, information, knowledge, evidence, progress, news*","unit noun: *a piece of*"],["Noncount (collective)","*furniture, luggage, equipment, mail, clothing*","unit noun: *an item of, a piece of*"],["Noncount (substance)","*water, rice, bread, milk*","container or portion: *a glass of, a loaf of*"],["Both","*coffee, experience, time, work, paper, glass, hair*","check the sense in a dictionary"]]},
      "Dictionaries label each sense: the Cambridge Dictionary uses [C] and [U]. Common patterns for nouns that are both are **serving** (*a coffee*), **kind** (*three cheeses*), **object from material** (*a glass, an iron*) and **event or example** (*an experience, a success*).",
      "Some nouns look plural but are noncount (*news, physics*), and some have only a plural form (*clothes, scissors, jeans*). The word *clothing* is noncount, and *clothes* is plural.",
      "There are US and UK differences: British *accommodation* is noncount, while American English often uses the plural *accommodations*. Both varieties treat *luggage* and *information* as noncount. For *less* and *fewer*, traditional guidance gives *fewer* with count nouns and *less* with noncount nouns."
     ],
     pro:[
      "Countability is a property of **senses** of lexical items, and it is partly arbitrary. Collective noncount nouns such as *furniture* and *luggage* are sometimes called **fake mass** or **superordinate** nouns, because they group a set of different count items. The arbitrariness shows across languages: *furniture* is noncount in English but a count noun in many others, and Japanese nouns are not marked for number and are counted with classifiers.",
      "Many analyses treat the noun *coffee* in *two coffees* as a derived count sense, sometimes called the **packaging** or **universal packager** use: a mass noun is turned into a count noun meaning a portion. The reverse, the **universal grinder** use, turns a count noun into a mass noun meaning the stuff: *There is dog all over the road.* These processes are productive but have limits and varied acceptability.",
      "Determiners test countability and their distribution is not completely clean: *a lot of* and *some* go with both, *much* is restricted to certain contexts (see the quantifiers entry), and *less* with count nouns is common in speech. Corpus evidence from a large reference corpus shows how often a noun appears with a plural or with *a/an*, which helps to decide borderline cases such as *research* (*researches* is rare) and *accommodation*.",
      "The Semantics chapter of *Essentials of Linguistics* discusses countability in terms of boundedness: count nouns name bounded units, and mass nouns name unbounded stuff. It also says that each noun’s status is stored in the lexicon and that speakers can shift it. Boundedness does not predict every case: *furniture* names bounded items but is noncount."
     ]},
    related:["articles-english","quantifiers-english","word-classes-english"], read:[{book:"eling", where:"The Semantics chapter, section “Countability”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},
   {id:"articles-english", title:"The articles a, an and the", aka:["definite and indefinite articles","definiteness"], tags:["grammar","articles","determiners"],
    summary:"The tells the listener whether they can identify the noun: the means yes, a/an means not yet, and no article is used for general plural and noncount nouns.",
    levels:{
     starter:[
      "English has two articles. **The** is the definite article: the listener can identify the noun. **A/an** is the indefinite article: one of a kind, not yet identified. A noun with no article at all can also carry a meaning: a general one.",
      "Use *the* when the noun was mentioned before (*I bought a hat. The hat was cheap.*), when it is clear from the situation (*Please close the door*), when it is unique (*the sun*), or when the rest of the phrase points to one (*the girl who called*).",
      "Use *a/an* for a new singular count noun (*A man called*) and to say what kind of thing something is (*She is a nurse*). The choice of *a* or *an* depends on the **sound** of the next word: *a university, an hour*.",
      "What matters is the **listener’s** knowledge, as the speaker imagines it, not how important the thing is or how well the speaker knows it.",
      {key:"The: you can identify it. A/an: one, not yet identified. No article: general plural or noncount."}
     ],
     builder:[
      "A noun phrase is **definite** when the speaker expects the listener to identify its referent. Reasons include previous mention, shared situation, uniqueness in the context, and specification by modifiers (*the end of the film*). There are also bridging uses: *We stayed at a hotel. The staff were kind.*",
      "*A/an* has three main uses: introducing (*There is a message for you*), classifying (*She is a nurse*) and *per* (*twice a week*). It goes only with singular count nouns. Plural and noncount nouns have *the* or no article.",
      {table:[["Phrase","Pronunciation of the article","Reason"],["*a university*","/ə/","starts with /j/"],["*an hour*","/ən/","silent *h*, vowel sound"],["*the hour*","/ði/","vowel sound"],["*the book*","/ðə/","consonant sound"],["*an MRI*","/ən/","letter name *em*"]]},
      "Variation: Americans say *an herb* (no /h/), and British speakers say *a herb*. *A historic* is far more common today, but *an historic* is still found in formal writing and speeches.",
      "Japanese has no articles, but it marks known and new information with particles (*wa*, *ga*) and demonstratives (*sono*). The match is rough."
     ],
     pro:[
      "Descriptive grammars treat *the* as a determiner that marks **definiteness**, an area of semantics and pragmatics. Definiteness is not the same as specificity. *A* can introduce a specific referent that the listener cannot identify (*I met a man who knows you*), and *the* can occur with a non-specific description (*the winner will get a prize*).",
      "Uniqueness and familiarity both feature in theories. Uniqueness says the speaker presupposes exactly one thing that fits the description. Familiarity says the thing is already in the shared discourse. Bridging examples and *the best answer* show that neither explains every case alone, and many descriptions combine them.",
      "*The* also marks **generic** reference with singular nouns (*The tiger is endangered*), and appears in the *the + adjective* pattern for groups (*the elderly*). Fixed phrases and institutions (*go to school*, *in hospital*) are usually treated as lexicalized chunks with variation between varieties.",
      "Second language research reports that learners whose first language has no articles often use *the* and *a* with varied accuracy for a long time, and that errors of omission and of misuse of *the* are both common. Treat this as general background: individual learners vary widely, and good feedback uses explanation, noticing and practice with real texts."
     ]},
    related:["countability-english","generic-reference-english","articles-japanese-speakers"], read:[{book:"eling", where:"The Syntax chapter, section “Functional categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},
   {id:"generic-reference-english", title:"General statements, zero article and institutions", aka:["generic reference","zero article","go to school"], tags:["grammar","articles"],
    summary:"A plural or noncount noun with no article makes a general statement. The cat is and A cat is are other generic forms, and institution nouns drop the article for their purpose.",
    levels:{
     starter:[
      "When a plural or noncount noun has no article, the meaning is usually **general**: *Cats are independent. Water is essential. Honesty matters.* Add *the* and the meaning becomes particular: *The cats are on my bed.*",
      "A singular noun can also be general. *The cat is a mammal* is formal or scientific. *A cat is a mammal* defines any one member. *Cats are mammals* is the most common.",
      "Some noun phrases take no article for regular reasons: most names (*Japan, Mount Fuji*), meals (*have breakfast*), transport with *by* (*by bus*), and times (*at night*). Some take *the*: *the Alps, the Pacific, the Philippines*.",
      "Institution nouns such as *school, church, bed, work* and *prison* take no article when they mean the purpose (*go to school*) and *the* when they mean the building (*go to the school*).",
      {key:"No article is a meaning: in general. Look at whether you mean all of them or particular ones."}
     ],
     builder:[
      "**Generic** statements are about a kind and allow exceptions: *Dogs bark.* The three singular and plural forms differ in register and in use. *The* + singular suits species and types (*The tiger is endangered*), inventions and instruments (*The telephone changed our lives. She plays the piano*). *A* + singular suits definitions. The plural without article is the usual choice in speech.",
      {table:[["Idea","US","UK"],["patient","*in the hospital*","*in hospital*"],["student","*go to college*","*go to university*"],["prisoner","*in prison, in jail*","*in prison*"],["weekend","*on the weekend*","*at the weekend*"]]},
      "A common learner error is *the* before a general noun: *The life is hard.* A general statement uses no article: *Life is hard.* If the noun is specific (*the life of a sailor*), use *the*.",
      "Compare institution phrases with and without the article: *at school / at the school, in bed / on the bed, in prison / at the prison*."
     ],
     pro:[
      "Many formal analyses treat generic sentences as containing a silent generic operator. Generic sentences tolerate exceptions in a way that universal quantification does not: *Mosquitoes carry malaria* is true, although most mosquitoes do not. Bare plurals and bare mass nouns are the unmarked generic forms in English, while *the* + singular is restricted to **kind-denoting** nouns, which is why *The cat is on the sofa* is not generic and *The dodo is extinct* is generic.",
      "Institutional nouns form a closed set of mostly lexicalized patterns. The no-article form foregrounds the institution’s function, and the *the* form foregrounds the place. The set differs by variety: *hospital* and *university* are usually handled with the article in American English and without it in British English for the patient and student senses. Large corpora show variation within each variety, and the differences are tendencies.",
      "The bare plural also has an existential reading (*Dogs are barking outside*) that is not generic. Context and the predicate (individual-level or stage-level) decide the reading, a point discussed in the semantics literature. For teaching, give the generic and particular contrast with clear contrast pairs and use corpus lines to check idioms."
     ]},
    related:["articles-english","countability-english"], read:[{book:"eling", where:"The Syntax chapter, section “Structure within the sentence: Phrases, heads, and selection”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},
   {id:"quantifiers-english", title:"Quantifiers and determiners", aka:["few and a few","some and any","each and every"], tags:["grammar","determiners"],
    summary:"Quantifiers must agree with the noun type, and small differences such as few and a few, some and any, each and every change the meaning.",
    levels:{
     starter:[
      "A quantifier tells you how many or how much. Some go only with plural count nouns (*many, a few, several, both*), some only with noncount nouns (*much, a little*), and some with both (*some, a lot of, enough, all, most*). *Each* and *every* go with singular count nouns.",
      "**Few** means not many, and it sounds negative: *Few people came.* **A few** means some, and it sounds positive. The same is true for **little** and **a little**.",
      "**Some** is normal in positive statements, offers and requests (*Would you like some tea?*). **Any** is normal in negatives, neutral questions and *if* sentences (*Do you have any questions?*). *Any* also means “it does not matter which”: *Any day is fine.*",
      "**Each** looks at individuals one by one. **Every** looks at the whole group.",
      {key:"Check the noun type first. Then choose a quantifier that fits it."}
     ],
     builder:[
      "In plain positive statements, *a lot of* is the usual choice (*We have a lot of time*). *Much* is common in questions, negatives and after *so, too, as, how*. *Many* is more flexible, especially in writing.",
      {table:[["Word","Noun type","Notes"],["*many, few, several*","plural count","*fewer* for comparison"],["*much, little*","noncount","*less* for comparison"],["*some, any, enough, all, most, no*","both","*some of the* + plural"],["*each, every, another*","singular count","singular verb"]]},
      "Two central determiners cannot go together: *the my book* is wrong. Use *of*: *some of my books, a friend of mine*. A predeterminer comes first: *all the books, both my parents, half an hour.*",
      "Japanese 少し (*sukoshi*) is close to *a little* and *a few*. 少ない (*sukunai*) is close to *few* and *little*, and ほとんど〜ない (*hotondo … nai*) to *hardly any*."
     ],
     pro:[
      "*Any* is a **polarity-sensitive** item. Its distribution includes negation, interrogatives, conditionals, comparatives, and the scope of words such as *hardly, without* and *before*. A second use, **free-choice** *any*, occurs in modal and generic contexts (*Any student can apply*). Semantic theories explain these facts in terms of entailment and scale. Pedagogic rules that set *some* against *any* as positive and negative miss the offer, request and free-choice uses.",
      "The attitude contrast between *few* and *a few* is a matter of interpretation rather than quantity. Both can denote similar numbers. *Few* focuses attention on the shortfall (fewer than expected or hoped), while *a few* focuses on the ones that exist. Studies of quantifier meaning discuss this as a regular pragmatic effect.",
      "*Less* with count nouns has a long history in English, and the *fewer*/*less* rule is a prescriptive tradition that goes back to a usage comment in the 1700s. Many descriptive grammars treat both as standard in different contexts. A style guide or exam may still require *fewer*."
     ]},
    related:["countability-english","articles-english","small-words-english"], read:[{book:"eling", where:"The Syntax chapter, section “Functional categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"},{t:"Merriam-Webster", url:"https://www.merriam-webster.com/"}], checked:"2026-11"},
   {id:"articles-japanese-speakers", title:"Explaining articles to Japanese speakers", aka:["teaching articles","article errors"], tags:["teaching","articles","Japanese"],
    summary:"Japanese has no articles and no required plural. Three questions, short explanations and priorities for feedback make article errors easier to teach.",
    levels:{
     starter:[
      "Japanese has no articles, and nouns do not show singular and plural. 犬 (*inu*) can mean one dog or many dogs. English asks the speaker to decide for each noun, so article errors are common, and they are a normal result of a different grammar.",
      "Three questions help: **Is the noun count or noncount? Is it one thing or in general? Can the listener identify it?** Then check the sound: *a university, an hour*.",
      "Common errors: *I like dog* (use *dogs*), *He is teacher* (use *a teacher*), *an advice* (use *some advice*), *The life is hard* (use *Life is hard*), *Please open window* (use *the window*).",
      "Give a short reason with the correction. Start with what is right: the idea is correct, and English asks for one more choice.",
      {key:"Japanese tracks what the listener knows with wa, ga and sono. English puts the same idea into a small word before the noun."}
     ],
     builder:[
      "The error types fall in three groups: **missing** (*I have cat*), **extra** (*the nature*) and **wrong type** (*informations*). Teach in this order: count and noncount and the general plural first, then *a* and *the* for first and second mention, then zero article, institutions and generic *the*.",
      {table:[["Error","Short explanation"],["*I like dog.*","In general, use the plural."],["*He is teacher.*","A job is a kind of person: use *a*."],["*The life is hard.*","A general idea has no article."],["*Please open window.*","You both know which one: *the*."]]},
      "Japanese particles *wa* (known, topic) and *ga* (new) and *sono* (that) give a rough parallel to *the* and *a*. Say so, and say that it is only rough.",
      "Use real texts, chunks (*a piece of advice, go to school*), recasts in conversation, and a proofreading checklist. Do not give a list of all the rules at once."
     ],
     pro:[
      "Research on second language acquisition reports that learners with article-less first languages often show lasting variability with articles, including cases where they know the rule and still omit or misuse the article in fast production. Several explanations are discussed: the transfer of the first language’s features, the difficulty of the semantic distinction of definiteness and specificity, and the low salience of the unstressed article. Do not treat any one of these as settled.",
      "In feedback, direct correction, recasts and metalinguistic explanation have all been studied, and results depend on the learner, the task and the target. A reasonable course of action for teachers is to give brief explanations, give many examples from real texts, and revisit the same patterns over time.",
      "Cautions: avoid claims about Japanese speakers as a group. Many learners from Japan use articles accurately, and errors differ by proficiency, task and text type. Treat error lists as common patterns, not predictions."
     ]},
    related:["articles-english","countability-english","generic-reference-english"], read:[{book:"eling", where:"The Syntax chapter, section “Functional categories”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge Dictionary", url:"https://dictionary.cambridge.org/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-article", term:"Article", def:"A small determiner at the start of a noun phrase: *the* (definite) or *a/an* (indefinite). A noun phrase can also have no article.", codex:"articles-english"},
   {id:"hew-definite", term:"Definite", def:"Describes a noun phrase that the speaker expects the listener to identify, such as *the book* or *my sister*.", codex:"articles-english"},
   {id:"hew-indefinite", term:"Indefinite", def:"Describes a noun phrase that the listener cannot identify yet, such as *a book*, or that only says what kind of thing it is.", codex:"articles-english"},
   {id:"hew-zero-article", term:"Zero article", def:"The use of a noun with no article. With plural and noncount nouns it often has a general meaning: *Cats are independent.*", codex:"generic-reference-english"},
   {id:"hew-generic", term:"Generic reference", def:"Talking about a whole kind of thing, not particular ones: *Cats are independent*, *The tiger is endangered*.", codex:"generic-reference-english"},
   {id:"hew-quantifier", term:"Quantifier", def:"A determiner that gives an amount, such as *many, much, few, some, all* or *every*.", codex:"quantifiers-english"},
   {id:"hew-unit-noun", term:"Unit noun", def:"A count noun that lets you count a noncount noun: *a piece of advice, a loaf of bread, a glass of water*.", codex:"countability-english"},
   {id:"hew-noncount", term:"Noncount noun", def:"A noun with no plural and no *a/an* in the sense used, such as *advice* or *furniture*. Also called uncountable or mass.", codex:"countability-english"}
  ]
});
})();
