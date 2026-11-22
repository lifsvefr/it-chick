(function(){
/* How English Works · Unit 3 (e5u3) · Stress, rhythm and connected speech */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e5u3", track:"e5", n:3, title:"Stress, rhythm and connected speech", icon:"🗣️",
  blurb:"How English sounds beyond single sounds. The topics are: word stress, which can change meaning; sentence stress and the rhythm it creates; weak forms of small words; how words join together in real speech; and the basic tunes of intonation. The aim is to hear what fluent speakers really say, and to explain it to others.",
  goals:[
    "Mark and predict word stress, including noun and verb pairs, compounds and suffixes that move stress, and write it in IPA with ˈ and ˌ",
    "Explain the difference between content words and function words, and show how sentence stress creates English rhythm. Describe stress timing and mora timing as tendencies",
    "Recognize and say the weak forms of common small words (to, of, can, and, for, from), and explain why learners often cannot hear them",
    "Describe linking, elision, assimilation and General American flapping, and understand informal forms such as gonna, wanna and whaddaya",
    "Use falling and rising tunes, and the new versus given information rule, and explain why katakana-style English can sound flat"
  ],
  read:[
    {book:"eling", where:"The phonetics chapter (sections “Syllables”, “Stress” and “Tone and intonation”) and the phonology chapter (section “Types of phonological rules”)", note:"Read each section after the matching lesson. The book is written for linguistics students, so use this unit’s explanations first."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e5u3-l1", title:"Word stress", minutes:55,
   hook:{q:"Say the word *present* two ways: a birthday present (a gift) and to present a prize (to give it). Does your mouth do the same thing both times?", options:["Yes, the two words sound exactly the same","No, the stress moves to a different part of the word","No, the spelling changes","No, only the last sound changes"], answer:1, reveal:"**The stress moves.** The gift is said PREZ-ent, with the force on the first part. The verb is said pre-ZENT, with the force on the second part. The vowels change too. English has many pairs like this, and listeners use stress to tell the words apart. This lesson shows how stress works, how it can change meaning, and how endings such as *-ic* and *-ity* move it."},
   goals:[
     "Say what word stress is and find the stressed syllable in a word",
     "Write stress in IPA with ˈ (main stress) and ˌ (secondary stress)",
     "Explain how stress separates noun and verb pairs such as *record* and compound words such as *greenhouse*",
     "Predict how endings such as *-ic*, *-ion*, *-ity* and *-ee* move stress, and say when to check a dictionary"
   ],
   learn:[
    {h:"What stress is", body:[
      {lead:"In English, one part of every long word is said with more force than the rest. That part is the stressed syllable."},
      "A **syllable** is one beat of a word. Each syllable has one vowel sound. The word *table* has two syllables (*ta-ble*). The word *banana* has three (*ba-na-na*). Try saying *banana*. You probably said *ba-NA-na*, with the middle beat stronger.",
      "That stronger beat is called [[hew-word-stress|word stress]]. A stressed syllable is not only louder. It is also **longer**, usually **higher in pitch**, and its vowel is **clear and full**. The other syllables are shorter, quieter and often use a weak vowel. The most common weak vowel is the short, neutral sound /ə/, called **schwa**. It is the first and last sound of *banana*.",
      "In a dictionary, stress is shown with a small mark ˈ in front of the stressed syllable. The word *banana* is written /bəˈnænə/ in General American (GA). In Southern British (SSBE) it is /bəˈnɑːnə/. The vowels differ, but the stress is in the same place. Learners often forget it, but a dictionary mark is the fastest way to learn it.",
      {ex:"banana\nGA /bəˈnænə/ · SSBE /bəˈnɑːnə/\nThree syllables: bə · ˈnæ · nə\nOnly the middle one is stressed. The first and last use schwa.", label:"Worked example", mono:true, listen:"e5u3-l1-a1"},
      "Every English word with two or more syllables has exactly one **primary stress**. Long words can also have a **secondary stress**, which is lighter. IPA marks it with ˌ. The word *photographic* has both: /ˌfoʊtəˈgræfɪk/ in GA. The main stress is on *graph*. The lighter stress is on *pho*.",
      {key:"Every English word with two or more syllables has one primary stress. Learn the word with its stress, like a spelling."},
      {h:"Compared with Japanese"},
      "Japanese words also have an “accent”, but it works differently. In standard Tokyo speech, the word *hashi* means “chopsticks” (箸) when the pitch falls after *ha*, and “bridge” (橋) when the pitch rises on *shi*. The difference is **pitch** alone. English stress uses pitch, length, loudness and vowel quality together. So a Japanese learner can hear that English words have a “strong place”, but the strong place also changes the vowels, and that is new."
    ]},
    {h:"Where does the stress go?", body:[
      "English stress is not marked in spelling, and it is not fixed to one position as in some languages. So you cannot work it out from the letters. There are patterns, but each pattern has exceptions. Here are the most useful tendencies.",
      {table:[["Pattern","Examples","Exceptions"],["Two-syllable nouns and adjectives: first syllable","ˈtable, ˈwindow, ˈhappy","hotel, police, guitar"],["Two-syllable verbs: second syllable","beˈgin, deˈcide, reˈlax","ˈanswer, ˈvisit, ˈlisten"],["Compound nouns: first part","ˈgreenhouse, ˈbookshop","some place names"]]},
      "Use these as a first guess, then check. Many learners guess from the way the word looks in their own language, or from how it sounds in katakana. That can be wrong. For example, the katakana *hoteru* has three beats of about the same size, but English says *hoˈtel*, with the force on the second syllable.",
      {tip:"When you learn a new word, learn its stress at the same time. Say it out loud with the stress, three times. Learning only the spelling is where most stress errors begin."},
      {fig:'<svg viewBox="0 0 340 292"><text x="170" y="22" text-anchor="middle">Stress moves when the word changes</text><circle class="d-lup" cx="40" cy="62" r="17" stroke-width="2"/><circle class="d-softf" cx="88" cy="62" r="8" stroke-width="2"/><circle class="d-softf" cx="136" cy="62" r="8" stroke-width="2"/><text class="s" x="206" y="66">photograph</text><text class="s" x="40" y="96" text-anchor="middle">pho</text><text class="s" x="88" y="96" text-anchor="middle">to</text><text class="s" x="136" y="96" text-anchor="middle">graph</text><circle class="d-softf" cx="40" cy="130" r="8" stroke-width="2"/><circle class="d-lup" cx="88" cy="130" r="17" stroke-width="2"/><circle class="d-softf" cx="136" cy="130" r="8" stroke-width="2"/><circle class="d-softf" cx="184" cy="130" r="8" stroke-width="2"/><text class="s" x="206" y="134">photography</text><circle class="d-softf" cx="40" cy="198" r="8" stroke-width="2"/><circle class="d-softf" cx="88" cy="198" r="8" stroke-width="2"/><circle class="d-sage" cx="136" cy="198" r="17" stroke-width="2"/><circle class="d-softf" cx="184" cy="198" r="8" stroke-width="2"/><text class="s" x="206" y="202">photographic</text><text class="s" x="170" y="246" text-anchor="middle">Big circle = main stress. Small circle = weaker syllable.</text><text class="s" x="170" y="268" text-anchor="middle">The big circle moves one step each time.</text></svg>', alt:"Three rows of circles, one circle per syllable. In photograph the first syllable circle is big. In photography the second circle is big. In photographic the third circle is big. A caption says the big circle marks the main stress and moves as the word changes.", cap:"One word family, three stress positions. The ending changes where the force falls."}
    ]},
    {h:"Stress can change meaning", body:[
      "Some pairs of words are spelled the same but differ in stress and in part of speech. The noun is usually stressed on the **first** syllable. The verb is usually stressed on the **second**. Listen to how the vowels change too.",
      {table:[["Word","Noun (stress first)","Verb (stress second)"],["record","GA /ˈrɛkɚd/ · SSBE /ˈrekɔːd/","GA /rɪˈkɔrd/ · SSBE /rɪˈkɔːd/"],["present","GA /ˈprɛzənt/ · SSBE /ˈprezənt/","GA /prɪˈzɛnt/ · SSBE /prɪˈzent/"],["permit","GA /ˈpɝmɪt/ · SSBE /ˈpɜːmɪt/","GA /pɚˈmɪt/ · SSBE /pəˈmɪt/"]]},
      {ex:"That is a new world record.   (noun: REcord)\nWe will record the song today.   (verb: reCORD)", label:"Hear the pair: record", mono:true, listen:"e5u3-l1-a2"},
      {ex:"She gave me a present.   (noun: PREsent)\nThey will present the prize.   (verb: preSENT)", label:"Hear the pair: present", mono:true, listen:"e5u3-l1-a6"},
      {ex:"You need a permit to park here.   (noun: PERmit)\nThey will not permit it.   (verb: perMIT)", label:"Hear the pair: permit", mono:true, listen:"e5u3-l1-a7"},
      "Not every word with two uses follows this rule. *Answer*, *visit* and *promise* have the same stress as noun and verb. But when a pair exists, a listener hears the stress first, so a wrong stress can make people pause and re-think what you said.",
      {h:"Compounds and phrases"},
      "A **compound** is two words that join to make one meaning. In most compounds, the first part is stressed. A *greenhouse* is a glass building for plants. A *green house* is any house painted green. A *HOT dog* is a food, but a *hot DOG* is a dog that feels hot.",
      {ex:"We grow tomatoes in the greenhouse.   (compound: GREENhouse)\nMy friends live in the green house on the corner.   (adjective + noun: green HOUSE)\n\nGA: greenhouse /ˈgrinˌhaʊs/ · SSBE /ˈgriːnhaʊs/\nA green house is two stressed words: /ˈgrin ˈhaʊs/ in GA.", label:"Hear the pair", mono:true, listen:"e5u3-l1-a3"},
      "In a phrase of adjective + noun, the noun usually keeps the main stress. In a compound, the first word does. This is one reason that *a BLACKbird* (a kind of bird) is different from *a black BIRD* (any bird that is black)."
    ]},
    {h:"Suffixes that move the stress", body:[
      "When you add some endings (suffixes) to a word, the stress moves. When you add others, it stays. Knowing this saves you from looking up every word.",
      {lead:"Some suffixes pull the stress to the syllable just before them."},
      {table:[["Ending","Stress falls on…","Examples (GA)"],["-ic, -ical","the syllable before the ending","ˌphotoˈgraphic, poˈlitical"],["-ion, -ian","the syllable before the ending","ˌinforˈmation, ˌpoliˈtician"],["-ity","the syllable before the ending","ˌpersoˈnality, eˌlecˈtricity"],["-ee, -eer, -ese","the ending itself","ˌtrainˈee, ˌengiˈneer, ˌJapaˈnese"]]},
      "Here is the family that gave this lesson its diagram.",
      {ex:"photograph   GA /ˈfoʊtəˌgræf/ · SSBE /ˈfəʊtəgrɑːf/\nphotography   GA /fəˈtɑgrəfi/ · SSBE /fəˈtɒgrəfi/\nphotographic   GA /ˌfoʊtəˈgræfɪk/ · SSBE /ˌfəʊtəˈgræfɪk/", label:"Worked example: one word family", mono:true, listen:"e5u3-l1-a4"},
      "Notice that in *photography* the first vowel changes from /oʊ/ to schwa. When the stress leaves a syllable, its vowel becomes weak. This is why a word like *photograph* and a word like *photography* sound so different, even though they share most of their letters.",
      {ex:"electric   GA /ɪˈlɛktrɪk/ · SSBE /ɪˈlektrɪk/\nelectricity   GA /ɪˌlɛkˈtrɪsəti/ · SSBE /ɪˌlekˈtrɪsəti/", label:"Another family", mono:true, listen:"e5u3-l1-a5"},
      {lead:"Other suffixes do not move the stress at all."},
      "Endings such as *-ing, -ed, -er, -ly, -ness* and *-ful* usually leave the stress where it was. So *ˈhappy* becomes *ˈhappiness*, and *ˈwonder* becomes *ˈwonderful*. The endings that move stress, such as *-ity* and *-ic*, mostly come from Latin and Greek. The everyday English endings usually do not.",
      {warn:"These patterns are strong tendencies, not laws. Words such as *television* (/ˈtɛləˌvɪʒən/ in GA) end in *-ion* but keep the stress early. When a stress matters, check the dictionary."},
      {h:"Why this matters"},
      "Stress is a major clue when people listen. If you move the stress in a long word, the listener may not recognize the word, even if every sound is correct. Teachers who explain English to others find this one of the most useful ideas to share: a wrong stress can hurt understanding as much as a different vowel."
    ]},
    {h:"Habits and misconceptions", body:[
      {list:[
        "**“Stress means louder.”** Loudness is only one clue. Length and pitch are often stronger clues, and the vowel in the stressed syllable is always clear.",
        "**“Each syllable gets the same time.”** That is how katakana words are written, with each beat (mora) about equal. In English, stressed syllables are much longer than weak ones.",
        "**“The stress is in the spelling.”** It is not. The noun *record* and the verb *record* have the same letters but different stress.",
        "**“A wrong stress is a small error.”** It can change which word the listener hears (*record* the verb or *record* the noun), or make the word hard to find.",
        "**“There are no rules, so I have to memorize everything.”** There are tendencies for nouns and verbs, compounds and suffixes. Learn these, then memorize the exceptions."
      ]},
      "Use a dictionary with audio, such as the Cambridge Dictionary or the Merriam-Webster website. You can hear each word and see the stress mark. Unit 2, Lesson 5 showed you how to read the entries. Now you can predict, hear and check."
    ]}
   ],
   try:[
    {id:"e5u3-l1-x1", type:"sort", q:"Where does the main stress fall in each word? Sort them. (GA and SSBE are the same here.)", buckets:["First syllable","Second syllable"], items:[
      {t:"table", b:0, why:"A two-syllable noun, with the force on the first syllable: /ˈteɪbəl/."},
      {t:"begin", b:1, why:"A two-syllable verb, with the force on the second: /bɪˈgɪn/."},
      {t:"garden", b:0, why:"A two-syllable noun again: /ˈgɑrdən/ in GA, /ˈgɑːdən/ in SSBE."},
      {t:"hotel", b:1, why:"An exception to the noun pattern. It is /hoʊˈtɛl/ in GA and /həʊˈtel/ in SSBE."},
      {t:"decide", b:1, why:"A verb, with force on the second syllable: /dɪˈsaɪd/."},
      {t:"answer", b:0, why:"A verb that keeps first-syllable stress: /ˈænsɚ/ in GA. It is one of the exceptions."}
    ]},
    {id:"e5u3-l1-x2", type:"ipa", q:"Transcribe the **verb** *record* (“We will record the song”) in GA. Mark the stress.", hearAfter:"e5u3-l1-a2", answer:["rɪˈkɔrd","rəˈkɔrd"], stress:true, why:"The verb has its stress on the second syllable, so the mark ˈ goes before *kɔrd*. The first syllable is weak and uses /ɪ/ or /ə/.", wrongs:[{v:"ˈrɛkɚd", why:"That is the **noun**, with the stress on the first syllable."},{v:"ˈrɛkərd", why:"That is the **noun**, with the stress on the first syllable."},{v:"rɪkɔrd", why:"The sounds are right, but there is no stress mark. This exercise tests stress, so add ˈ before the stressed syllable."}]},
    {id:"e5u3-l1-x3", type:"ipa", q:"Transcribe the **noun** *permit* (“You need a permit”) in GA. Mark the stress.", answer:["ˈpɝmɪt","ˈpɜrmɪt","ˈpərmɪt"], stress:true, why:"The noun is stressed on the first syllable. GA has the “r-colored” vowel /ɝ/ in *per*. The second syllable is weak: /mɪt/.", wrongs:[{v:"pɚˈmɪt", why:"That is the **verb** *permit*. It is stressed on the second syllable and has a weak first vowel."}]},
    {id:"e5u3-l1-x4", type:"match", q:"Match each word to the pattern of its stress. Capital letters show the stressed syllable.", pairs:[
      ["photograph","PHO-to-graph","The noun is stressed on the first syllable, with a lighter stress on the last."],
      ["photography","pho-TO-gra-phy","The ending *-graphy* puts the stress on the syllable just before it, the second syllable. The first vowel becomes weak."],
      ["photographic","pho-to-GRAPH-ic","The ending *-ic* pulls the stress to the syllable just before it."],
      ["trainee","trai-NEE","The ending *-ee* is stressed itself."]
    ]},
    M("e5u3-l1-x5","Which phrase has the main stress on the first word, so it is a **compound** (a single thing)?",2,[
      ["a green HOUSE (a house painted green)","Here the stress is on *house*. This is an adjective plus a noun."],
      ["a black BIRD (any bird that is black)","The stress is on *bird*. This is a phrase, not a compound."],
      ["a GREENhouse (a glass building for plants)","Right. When the first word is stressed, the two words work as one thing. A greenhouse is not necessarily green."],
      ["a hot DOG (a dog that is too warm)","The stress is on *dog*, so this phrase means a dog that is hot, not the food."]
    ]),
    {id:"e5u3-l1-x6", type:"spot", q:"Hana reads some sentences aloud, and a friend marks the stress. Tap each word whose stress is **in the wrong place** for the way it is used.", ask:"has the wrong stress", parts:[
      "“Prices will ", {t:"ˈincrease", flag:true, why:"This is a verb (“prices will grow”), so it should be inˈcrease, with the stress on the second syllable."}, " in May. The ", {t:"ˈincrease", flag:false, why:"This is a noun (“a rise”), so ˈincrease, with first-syllable stress, is correct."}, " will be small. Please ", {t:"reˈcord", flag:false, why:"A verb, so the stress on the second syllable is correct."}, " the number, and keep a ", {t:"reˈcord", flag:true, why:"This is a noun (“a record”, after *a*), so it should be ˈrecord, with the stress on the first syllable."}, " in the notebook.”"
    ]},
    {id:"e5u3-l1-x7", type:"explain", q:"Mariya, who studies English interpreting, says: “I say *record* the same way for the noun and the verb. In my head, it is just one word with one stress. Does it matter?” Explain what you would tell her.", size:"3–4 sentences", prompt:"I would say: …", hint:"Think about what a listener hears, and about the vowels.", model:"It does matter, because English uses stress to show the difference between the noun and the verb. The noun is stressed on the first syllable (REcord) and the verb on the second (reCORD), and the vowels change too: the unstressed part becomes weak. If Mariya uses one stress for both, a listener may need extra time to decide which word she means. I would suggest that she learn the pair as two words, and check each with the stress mark in a dictionary, for example GA /ˈrɛkɚd/ and /rɪˈkɔrd/.", points:["Says that the noun and verb have different stress (first vs second syllable)", "Mentions that the vowels also change, with a weak vowel in the unstressed syllable", "Explains the effect on the listener", "Suggests a practical step, such as checking the dictionary stress mark"]},
    {id:"e5u3-l1-x8", type:"number", q:"How many **syllables** does the word *electricity* have? (Count the beats you say, not the letters.)", answer:5, tol:0, unit:"syllables", why:"e-lec-tric-i-ty is five syllables: /ɪ·lɛk·ˈtrɪ·sə·ti/. The main stress falls on *tris*, the syllable just before *-ity*.", wrongs:[
      {v:7, tol:0, why:"Seven is the number of beats in the katakana word (e-re-ku-to-ri-shi-ti). English has fewer syllables because it does not add vowels after consonants."},
      {v:4, tol:0, why:"That misses one beat. Say it slowly: e-lec-TRI-ci-ty. There are five."}
    ], hint2:"Tap your finger once for each beat: e-lec-TRIS-i-ty."}
   ],
   apply:{
    intro:"These tasks use free online dictionaries and your own voice. Nothing needs an account. Keep your recordings private unless you choose to share them.",
    tasks:[
     {t:"Find the stress families", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org) or Merriam-Webster (merriam-webster.com) in your browser.",
       "Look up *economy, economic, economics, economical* in the Cambridge Dictionary. Play both the UK and US audio for each one.",
       "For each word, write the IPA with the stress mark, and circle the stressed syllable.",
       "Say what happens to the stress and the first vowel. Which ending moves the stress? Write one sentence."
     ], write:"Words and stress marks… The ending that moves the stress… What happens to the vowels…"},
     {t:"Collect five noun and verb pairs", how:[
       "Look up *import, export, contrast, object, desert* in a dictionary with audio.",
       "For each, write the noun form and the verb form in IPA with stress marks, in GA or SSBE (say which).",
       "Choose two pairs. Write a short sentence for each form, and read the sentences aloud."
     ], write:"Pair 1: noun /…/ verb /…/. Pair 2… My four sentences…"},
     {t:"Record yourself", how:[
       "Use any voice recorder on your phone or computer.",
       "Say the pairs *record, present, permit*, as noun and verb, in the sentences from this lesson.",
       "Listen back. Can you hear the stress move? Compare it with the model audio in the lesson, and with the dictionary audio.",
       "Write one thing that sounded right and one thing you want to improve."
     ], write:"What sounded right… What I will practice…"}
    ],
    proof:"A table of one stress family with IPA and stress marks. Five noun and verb pairs with sentences. A short recording of the pairs, with two notes on how it went."
   },
   read:[
    {book:"eling", where:"The phonetics chapter, sections “Syllables” and “Stress”", note:"Look for the parts on primary and secondary stress, and on stress that must be learned with each word."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e5u3-l2", title:"Sentence stress and rhythm", minutes:55,
   hook:{q:"Say this sentence at a natural speed: “The cats have chased the mice.” Then say “Cats chase mice.” Which one takes longer?", options:["The longer one, about twice as long","The longer one, but less than twice as long","Both take exactly the same time","The short one, because it is harder"], answer:1, reveal:"**Longer, but usually less than twice as long.** Both sentences have the same three stressed beats (*cats*, *chased*, *mice*), and the extra small words are squeezed in between. So the time grows less than the number of syllables. This tendency is a big part of English rhythm. It is also why English can sound fast to learners: not because people talk quickly, but because small words are short."},
   goals:[
     "Sort words into content words and function words, and say which are usually stressed",
     "Mark sentence stress in a sentence and explain how it creates English rhythm",
     "Describe stress timing and mora timing fairly, as tendencies that researchers still discuss",
     "Use contrastive stress to change what a sentence emphasizes"
   ],
   learn:[
    {h:"Not every word gets stress", body:[
      {lead:"In a normal English sentence, only some words are stressed. The rest are said quickly and quietly."},
      "Word stress is the stress inside one word (*banana*). **Sentence stress** is the stress of whole words inside a sentence. Speakers choose which words to stress, and the choice follows a simple idea: stress the words that carry the most meaning.",
      "English words fall into two groups. [[content-word|Content words]] carry the main meaning: nouns, main verbs, adjectives, adverbs, question words and negatives. [[function-word|Function words]] do the grammar work: articles, prepositions, pronouns, auxiliary verbs, conjunctions. They are small, common and usually short.",
      {table:[["Usually stressed (content)","Usually not stressed (function)"],["nouns: train, island, ticket","articles: a, an, the"],["main verbs: leave, want, finish","auxiliaries: can, is, have, will"],["adjectives, adverbs: late, quickly","prepositions: to, of, at, for"],["negatives, question words: no, never, where","pronouns, conjunctions: she, them, and, but"]]},
      {ex:"The TRAIN LEAVES at SEVEN.\nHANA WANTS to BUY a TICKET.\nWhat TIME does the SHOP OPEN?", label:"Worked example: stressed words in capitals", listen:"e5u3-l2-a1"},
      "The stressed words are also the ones you would keep in a short text message: *TRAIN LEAVES SEVEN*. The function words are the ones you could drop and still be understood. That is a good test for where stress falls.",
      {key:"In normal speech, stress the content words and say the function words quickly and quietly. Every stressed word is a place where the listener should pay attention."},
      {h:"Compared with Japanese"},
      "In Japanese, particles such as *wa*, *ga*, *o* and *ni* are said clearly and with the same length as other morae. In English, the small grammar words are very weak. So an English sentence often has far fewer clear beats than it has words. This is the first big difference to hear."
    ]},
    {h:"Rhythm: beats and squeezing", body:[
      "When only some syllables are stressed, the sentence has a series of strong **beats**. Many phoneticians describe English as **stress-timed**: the stressed beats tend to come at regular intervals, and the weak syllables between them are squeezed to fit.",
      {ex:"CATS CHASE MICE.\nThe CATS CHASE the MICE.\nThe CATS have CHASED the MICE.\nThe CATS will have been CHASING the MICE.", label:"Four sentences, three beats each", listen:"e5u3-l2-a2"},
      "These four sentences have very different numbers of syllables: three, five, six and nine. Yet each has three strong beats, so the time grows much less than the number of syllables. Try tapping a steady beat on the table and saying them. The small words fall in the gaps between your taps.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Beats stay steady; the gaps are squeezed</text><path class="d-soft" d="M80 36 V250 M170 36 V250 M260 36 V250" stroke-width="1"/><circle class="d-lup" cx="80" cy="62" r="12" stroke-width="2"/><circle class="d-lup" cx="170" cy="62" r="12" stroke-width="2"/><circle class="d-lup" cx="260" cy="62" r="12" stroke-width="2"/><text class="s" x="170" y="96" text-anchor="middle">CATS CHASE MICE</text><circle class="d-softf" cx="48" cy="132" r="5" stroke-width="2"/><circle class="d-lup" cx="80" cy="132" r="12" stroke-width="2"/><circle class="d-lup" cx="170" cy="132" r="12" stroke-width="2"/><circle class="d-softf" cx="215" cy="132" r="5" stroke-width="2"/><circle class="d-lup" cx="260" cy="132" r="12" stroke-width="2"/><text class="s" x="170" y="166" text-anchor="middle">the CATS CHASE the MICE</text><circle class="d-softf" cx="48" cy="202" r="5" stroke-width="2"/><circle class="d-lup" cx="80" cy="202" r="12" stroke-width="2"/><circle class="d-softf" cx="125" cy="202" r="5" stroke-width="2"/><circle class="d-lup" cx="170" cy="202" r="12" stroke-width="2"/><circle class="d-softf" cx="215" cy="202" r="5" stroke-width="2"/><circle class="d-lup" cx="260" cy="202" r="12" stroke-width="2"/><text class="s" x="170" y="236" text-anchor="middle">the CATS have CHASED the MICE</text><text class="s" x="170" y="276" text-anchor="middle">Each line is a tap on the table</text></svg>', alt:"Three rows of circles on three vertical tap lines. Large circles on the lines are the stressed words cats, chase or chased, and mice. In the second and third rows, small circles between or before the lines are the weak words the and have, which fit into the gaps.", cap:"Large circles are stressed beats. Small circles are weak syllables that fit in the gaps. More small words do not make the beats slower."},
      {h:"Two warnings, and a comparison"},
      "First, stress timing is a **tendency**, not a law, and researchers still debate it. When researchers measure the time between stressed syllables in real speech, the gaps are not equal. Many phoneticians doubt that any language is strictly stress-timed or syllable-timed. But many listeners do *hear* English as having a beat, and many teachers find rhythm practice useful.",
      "Second, Japanese is often described as **mora-timed**. A [[hew-mora]] is a small unit of sound length in Japanese. A short vowel like *bi* is one mora. A long vowel *bii* is two. So *biru* (“building”) has two morae, and *bīru* (“beer”) has three. In mora timing, each mora tends to take about the same time. So the number of morae, not syllables, is a good guide to how long a Japanese word is. This is also a tendency, and researchers still debate how best to describe it.",
      {table:[["","English (tendency)","Japanese (tendency)"],["Basic unit of timing","The stressed beat","The mora"],["Weak syllables","Short, squeezed, often schwa","Not squeezed: each mora keeps its length"],["Words in a sentence","Many have no stress","Each word keeps its own pitch pattern"]]},
      "So when a Japanese speaker gives every English syllable an equal beat, the sentence takes longer, and the important words do not stand out. A listener may find it hard to tell which words matter. This is not a fault in the learner. It is the natural result of timing English with the habits of another language."
    ]},
    {h:"Hearing the beat in everyday sentences", body:[
      {lead:"Once you know about beats, you start to hear them everywhere."},
      "Songs and children’s rhymes use English rhythm on purpose. Think of two lines of a well-known lullaby. Each line has four strong beats, although the words are very different.",
      {ex:"I’m GOing to the SHOP to GET some MILK.\nTWINkle, TWINkle, LITtle STAR.\nUP aBOVE the WORLD so HIGH.", label:"Four beats in each line", listen:"e5u3-l2-a4"},
      "Look at the first sentence. It has ten syllables, but only four are strong: *go, shop, get, milk*. The other six are weak, and they fit into the gaps between the beats. The words *to, the, to* and *some* are short, so they do not slow the sentence down. If a learner gives each of the ten syllables the same weight, the sentence takes much longer, and the four important words are no longer easy to find.",
      "Listeners use the beats as anchors. When speech is fast, they do not try to catch every sound. They catch the stressed syllables first, and then they guess the small words from the grammar. This is why a speaker with good rhythm can be easy to understand even with some wrong vowels, and why a speaker with perfect vowels but flat rhythm can be hard to follow.",
      {tip:"When you listen, try to catch only the stressed words first. Write them down. Then fill in the small words. This is how fluent listeners work, and it is much less tiring than trying to hear everything."},
      "Rhythm also explains why English speakers shorten some words in a sentence. In *a cup of tea*, the word *of* is very short because there is no room for it between two beats. The next lesson looks at these short forms of small words."
    ]},
    {h:"Choosing the stress: neutral and contrastive", body:[
      "In a neutral sentence, the **last content word** usually receives the strongest stress. *I want to go to the STORE.* You can say this out of the blue, and it sounds normal.",
      "But a speaker can move the strongest stress to a different word to show the contrast. This is called **contrastive stress**. The word that carries it is the one that differs from what the listener expected.",
      {ex:"SHE bought a red car — not her brother.\nShe BOUGHT a red car — she didn’t borrow it.\nShe bought a RED car — not a blue one.\nShe bought a red CAR — not a red bike.", label:"The same words, four meanings", listen:"e5u3-l2-a3"},
      "A good teacher can show that the words stay the same and the stress changes the meaning. This is also why simple written English sometimes needs extra words: in writing we cannot hear which word is stressed, so we use italics, capitals or a rephrased sentence.",
      {tip:"To find the right stress, ask: “What is the question this sentence answers?” The new part is the answer, and it takes the strongest stress."},
      {h:"Practice ideas"},
      {list:[
        "**Tap the beats.** Tap on the stressed words only. Say a sentence at a steady beat, and let the small words fall in between.",
        "**Mark a short text.** Underline the content words in a paragraph. Read it aloud, giving force only to the underlined words.",
        "**Shadow a speaker.** Play two seconds of a recording, pause, and copy the rhythm, not only the sounds.",
        "**Don’t race.** Rhythm needs short weak syllables, not fast speech. Keep the beats steady and squeeze the small words."
      ]}
    ]}
   ],
   try:[
    {id:"e5u3-l2-x1", type:"sort", q:"Is each word usually a **content word** (stressed) or a **function word** (weak) in a normal sentence?", buckets:["Content word (stressed)","Function word (weak)"], items:[
      {t:"ticket", b:0, why:"A noun carries meaning, so it is stressed."},
      {t:"the", b:1, why:"An article. It does grammar work and is normally very weak."},
      {t:"finish", b:0, why:"A main verb. It carries meaning, so it is stressed."},
      {t:"of", b:1, why:"A preposition. Weak in normal speech (see Lesson 3)."},
      {t:"never", b:0, why:"A negative adverb. It changes the meaning, so speakers stress it."},
      {t:"can", b:1, why:"An auxiliary verb before a main verb. It is weak, as in “I can swim”."},
      {t:"where", b:0, why:"A question word carries the point of the question, so it is stressed."},
      {t:"them", b:1, why:"A pronoun. Normally weak, unless the speaker wants to contrast it with someone else."}
    ]},
    {id:"e5u3-l2-x2", type:"spot", q:"Tap the words that carry stress when you say this sentence in a **normal, neutral** way: “Hana wants to buy a ticket to the island.”", ask:"carries stress", parts:[
      {t:"Hana", flag:true, why:"A name (a noun) carries meaning. It is stressed."}, " ", {t:"wants", flag:true, why:"A main verb, stressed."}, " ", {t:"to", flag:false, why:"A weak function word."}, " ", {t:"buy", flag:true, why:"A main verb, stressed."}, " ", {t:"a", flag:false, why:"An article. Weak in normal speech."}, " ", {t:"ticket", flag:true, why:"A noun, stressed."}, " ", {t:"to", flag:false, why:"A preposition. Weak."}, " ", {t:"the", flag:false, why:"An article, weak."}, " ", {t:"island", flag:true, why:"The last content word. It takes the strongest stress."}
    ]},
    {id:"e5u3-l2-x3", type:"number", q:"How many **stressed beats** are there in this sentence, said in a neutral way? “The teacher wants the students to finish the report.”", answer:5, tol:0, unit:"beats", why:"The content words are *teacher, wants, students, finish, report*. Each has one main stress, so there are five beats: The TEAcher WANTS the STUdents to FINish the rePORT.", wrongs:[
      {v:13, tol:0, why:"Thirteen is the number of syllables. Rhythm counts stressed beats, not syllables."},
      {v:9, tol:0, why:"Nine is the number of words. Function words (the, the, to, the) are weak, so they do not make beats."}
    ], hint2:"Underline the nouns, main verbs, adjectives and adverbs first."},
    {id:"e5u3-l2-x4", type:"match", q:"The question sets up the answer. Match each question to the answer with the stress in the right place.", pairs:[
      ["Who bought the car?","SHE bought the car.","The new information is *who*, so the stress goes on the person."],
      ["Did she borrow the car?","She BOUGHT the car.","The new information is the action, so the verb carries the stress."],
      ["What did she buy?","She bought a CAR.","The new information is *what*, so the stress goes on the noun."]
    ]},
    M("e5u3-l2-x5","Which statement about English and Japanese timing is **fair and accurate**?",1,[
      ["English is stress-timed and Japanese is mora-timed, and measurements prove this exactly.","Too strong. The terms describe tendencies, and measurements show gaps are not perfectly equal in any language."],
      ["English tends to be stress-timed and Japanese tends to be mora-timed, but researchers still debate how well the labels fit.","Right. They are useful descriptions of what listeners hear, and they are good for teaching, but they are not exact laws."],
      ["Japanese has no rhythm, while English does.","Every language has rhythm. Japanese rhythm is built on the mora."],
      ["Stress timing only appears in written English.","Timing is about speech, not writing."]
    ]),
    M("e5u3-l2-x6","Which word is stressed most strongly in the answer? Q: “Did you say you bought *three* tickets?” A: “No, I bought **two** tickets.”",0,[
      ["two","Right. *Two* is the word that corrects the other speaker. It carries contrastive stress."],
      ["bought","The verb is not in question. Both speakers agree that tickets were bought."],
      ["I","The speaker is not in question either."],
      ["tickets","This word was already mentioned (given), so it is not stressed in the answer."]
    ]),
    {id:"e5u3-l2-x7", type:"explain", q:"Toby, a master’s student in Japanese linguistics, taught English in the Japanese countryside for two years. He says: “My students read every word clearly, one by one, and then said they couldn’t follow natural English speech. Why does it sound so fast and ‘swallowed’?” Explain what is happening, and give one tip you would pass on.", size:"3–5 sentences", prompt:"I would say: …", hint:"Think about stressed and unstressed syllables, and about timing in English and Japanese.", model:"In English, only the content words get strong stress. The small function words are squeezed between the beats, and their vowels become weak. Japanese tends to give each mora about the same time, so the students expect every word to be clear and equal. When they hear English, the weak words seem to disappear, and the speech seems fast even when the speed is normal. A tip: tap a steady beat and say sentences so that only the content words land on the beat. The small words must fit between the taps.", points:["Says that only content words are stressed and function words are squeezed", "Mentions weak vowels or reduced small words", "Links the problem to different timing habits (stress vs mora), as tendencies", "Gives a practical tip such as tapping the beat or shadowing"]},
    {id:"e5u3-l2-x8", type:"order", q:"A teacher explains how to find the sentence stress. Put the steps in a sensible order.", items:[
      {t:"Say what question the sentence answers.", why:"First find out what the listener wants to know. The answer to that question is the new information."},
      {t:"Find the new information in the answer.", why:"Next, find the part of the sentence that is new. That is the part the listener needs."},
      {t:"Give the strongest stress to that word.", why:"Then put the main force there: on the content word that carries the new information."},
      {t:"Say the other content words with lighter stress, and squeeze the function words.", why:"Last, keep the rest of the rhythm: other content words are clear and function words are weak."}
    ]}
   ],
   apply:{
    intro:"These tasks need a short text and your own voice. Use any recording app. Keep your recordings private unless you choose to share them.",
    tasks:[
     {t:"Mark and read a paragraph", how:[
       "Choose a paragraph of about five sentences from a news site or a book you enjoy.",
       "Copy it. Underline the content words. Circle the last content word in each sentence.",
       "Read it aloud twice. First, say every word with equal weight. Then, say only the underlined words clearly, and squeeze the others.",
       "Record both readings. Which one sounds more like the audio from a speaker of English?"
     ], write:"My paragraph… What changed when I squeezed the small words…"},
     {t:"Tap the rhythm", how:[
       "Use the four sentences about cats and mice. Tap a steady beat on a table, about one tap per second.",
       "Say each sentence so the stressed words land on the taps.",
       "Make up two more sentences with three beats, one short and one long. Check that you can do both at the same tempo."
     ], write:"My two sentences… What was easy… What was hard…"},
     {t:"Change the meaning", how:[
       "Write a sentence of five or six words, such as “My brother lives in Nagoya.”",
       "Say it four times, with the strongest stress on a different content word each time.",
       "For each version, write the question it answers, such as “Who lives in Nagoya?”"
     ], write:"My sentence… The four stress places… The question each answers…"}
    ],
    proof:"A marked paragraph and two recordings. Two sentences tapped at the same tempo. Four versions of one sentence with the question each answers."
   },
   read:[
    {book:"eling", where:"The phonetics chapter, section “Stress”", note:"The section explains why many phoneticians doubt the simple split into “stress-timed” and “syllable-timed” languages."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e5u3-l3", title:"Weak forms", minutes:55,
   hook:{q:"Which sentence is a fluent speaker saying? You hear: /aɪ kən kʌm/. (Choose the best match.)", options:["I can come.","I can’t come.","I count come.","I could come."], answer:0, reveal:"**I can come.** In normal speech, *can* before a verb is weak: /kən/. The negative *can’t* keeps a full vowel: /kænt/ in GA, /kɑːnt/ in SSBE. A learner who listens for a clear “can” will miss the word, and may think the speaker said “can’t”. This lesson explains the weak forms of common words, and why you can learn to hear them."},
   goals:[
     "Explain what weak forms and strong forms are, and why English has both",
     "Say and recognize the weak forms of *to, of, can, and, for, from* and other common words",
     "Say when a strong form must be used, such as at the end of a sentence or for emphasis",
     "Explain why learners do not hear weak forms, and what to do about it"
   ],
   learn:[
    {h:"One word, two pronunciations", body:[
      {lead:"Most small grammar words have two ways to be said: a careful one and a relaxed one."},
      "In Lesson 2 you learned that function words are not stressed. Because they have no stress, their vowels shrink. Most become the short neutral vowel /ə/, called **schwa**. Some lose a consonant too. The relaxed pronunciation is the [[hew-weak-form|weak form]]. The careful, full pronunciation is the [[strong-form|strong form]].",
      "Listeners rarely notice a weak form in their own language. They hear the word. But a learner who has learned the *spelling* and the dictionary’s strong form may not recognize the weak form at all. For example, the word *to* is written *to*. It is said /tu/ when you say it alone. In a sentence, before a consonant, it is usually /tə/.",
      {table:[["Word","Strong form","Weak form (GA)","Example"],["to","/tu/","/tə/","going to the store"],["of","/ʌv/ or /ɑv/","/əv/","a cup of tea"],["can","/kæn/","/kən/","I can swim"],["and","/ænd/","/ənd/, /ən/ or /n/","bread and butter"],["for","/fɔr/","/fɚ/","a gift for her"],["from","/frʌm/ or /frɑm/","/frəm/","a letter from home"]]},
      "In SSBE the strong forms are /tuː/, /ɒv/, /kæn/, /ænd/, /fɔː/ and /frɒm/, and the weak forms are /tə/, /əv/, /kən/, /ənd/ or /ən/, /fə/ and /frəm/. The main difference from GA is *for*, which has no /r/ in SSBE (but see Lesson 4 on linking r).",
      {ex:"I can swim.     /aɪ kən ˈswɪm/\nI can’t swim.   GA /aɪ ˈkænt ˈswɪm/ · SSBE /aɪ ˈkɑːnt ˈswɪm/\n\na cup of tea     GA /ə ˈkʌp əv ˈti/ · SSBE /ə ˈkʌp əv ˈtiː/\nbread and butter     GA /ˈbrɛd n ˈbʌtɚ/ · SSBE /ˈbred n ˈbʌtə/", label:"Hear the weak forms", mono:true, listen:"e5u3-l3-a1"},
      "Notice that *can’t* is **not** weak. It always keeps its full vowel and it is usually stressed. So in everyday speech, the difference between *can* and *can’t* is not a small sound at the end of the word, but the whole shape of the word.",
      {key:"Weak forms are not “lazy” or “wrong”. They are the normal pronunciation of function words in speech, in both of our reference accents, and they are used even in careful news reading."}
    ]},
    {h:"When to use the strong form", body:[
      "Not every function word is weak every time. A strong form is used in a few clear situations:",
      {list:[
        "**At the end of a clause or sentence.** *What are you looking for?* has /fɔr/ at the end, because there is no word after it. Compare *I’m looking for a pen*, with weak /fɚ/.",
        "**For emphasis or contrast.** *Yes, I CAN.* *Is it from him or to him?*",
        "**When the word is said alone, quoted or spelled.** *The word “of” has two letters.*",
        "**In negative contractions**, such as *can’t, don’t, isn’t* and *won’t*. These have no weak form with schwa: they keep full vowels and are usually stressed."
      ]},
      {ex:"What are you looking for?     (strong: GA /fɔr/, SSBE /fɔː/)\nI’m looking for a pen.     (weak: GA /fɚ/, SSBE /fə/)\n\nI walked from the station to the school.     (weak /frəm/ and /tə/)", label:"Strong and weak in one sentence", mono:true, listen:"e5u3-l3-a2"},
      "A good test is: *is there a word right after it?* If a function word is followed by the word it belongs with, it is probably weak. If it ends the sentence, it is probably strong."
    ]},
    {h:"Why learners don’t hear them", body:[
      {lead:"Many learners can read English well but miss small words when they listen."},
      "Here are the usual reasons. First, **spelling gets in the way**. If you know the word as *of*, you listen for “of”, and /əv/ does not match. Second, **school pronunciation** often shows only the strong form. Third, each weak form is **very short**, and it is between two stressed beats, so the ear skips it.",
      "A fourth reason comes from Japanese. In Japanese, each mora tends to keep about the same length, and a small word such as *wa* or *o* is said clearly. English speakers do the opposite, so the learner’s “time slot” for a small word is too long. The weak form seems to be missing rather than shortened.",
      {h:"Compared with Japanese"},
      "Katakana words add vowels that English does not have, such as *kappu* for “cup”, with a final *u*. Weak forms work the other way. English *removes* or *reduces* vowels in small words: *a cup of tea* has four syllables but only two strong beats. Hearing this takes practice because your ear first tries to find all the syllables you expect.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="22" text-anchor="middle">What you read, and what you hear</text><rect class="d-panel" x="10" y="36" width="320" height="64" rx="8" stroke-width="2"/><text class="s" x="22" y="58">Spelling (strong forms)</text><text x="22" y="84">a   cup   of   tea   for   him</text><rect class="d-lup" x="10" y="116" width="320" height="64" rx="8" stroke-width="2"/><text class="s" x="22" y="138">Speech (GA)</text><text x="22" y="164">ə ˈkʌp əv ˈti fɚ ɪm</text><rect class="d-sage" x="10" y="196" width="320" height="64" rx="8" stroke-width="2"/><text class="s" x="22" y="218">What the ear catches</text><text x="22" y="244">· CUP · TEA ·  (two clear beats)</text><text class="s" x="170" y="284" text-anchor="middle">Small words sit between the beats as light, weak sounds.</text></svg>', alt:"Three boxes one under the other. The first shows the written words a cup of tea for him. The second shows the same phrase in IPA with weak forms. The third says that the ear catches two clear beats, cup and tea, with the small words weak in between.", cap:"The written phrase has six words. The ear catches two strong beats; the other words are weak forms."},
      "The fix is not to say every word faster. The fix is to **learn to hear** the weak forms: listen to short clips, read the transcript, and listen again. After a few weeks of practice, you start to hear *cup of tea* as one smooth group."
    ]},
    {h:"More weak forms", body:[
      "The six words in the table are only the start. Many other function words have weak forms, and the pattern is the same: a clear vowel becomes schwa, or a consonant is lost.",
      {table:[["Word","Strong form (GA)","Weak form (GA)","Example"],["a, an","/eɪ/, /æn/","/ə/, /ən/","a cup of tea"],["the","/ði/","/ðə/ before a consonant","the station"],["at","/æt/","/ət/","at home"],["was","/wʌz/ or /wɑz/","/wəz/","I was late"],["them","/ðɛm/","/ðəm/ or /əm/","give them a call"],["would","/wʊd/","/wəd/ or /əd/","she would help"]]},
      {ex:"I was at home.     /aɪ wəz ət ˈhoʊm/\nGive them a call.     /ˈgɪv ðəm ə ˈkɔl/\nShe said he would help.     /ʃi ˈsɛd hi wəd ˈhɛlp/", label:"Weak forms in short sentences (GA)", mono:true, listen:"e5u3-l3-a3"},
      "Function words that start with *h*, such as the pronouns *he, her, him* and the auxiliary *have*, often lose the /h/ in the middle of a sentence: *give him a call* is often said /ˈgɪv ɪm ə ˈkɔl/. The /h/ comes back at the start of a sentence or when the word is stressed.",
      "Many of these small words are also joined to the word before them in writing, as contractions: *I’d* (I would or I had), *she’ll*, *they’ve*. A contraction is a weak form that spelling has recorded. In speech, the same shortening happens even where the spelling does not show it."
    ]},
    {h:"Should I use weak forms when I speak?", body:[
      "Yes, if you want your speech to sound smooth and be easy for other people to follow. Weak forms help your rhythm (Lesson 2). A speaker who says every word in its strong form sounds careful but a little stiff. It may also be harder to understand, because the stress pattern is broken.",
      "But do not overdo it. You do not need to say all weak forms at once. A good plan is to start with the most common ones: *to, of, and, can, for, a, the*. Say them in short phrases such as *a cup of tea* and *going to the store*, and check them in a dictionary.",
      "Also remember that **writing** keeps the full forms. Do not write *cuppa* or *wanna* in an essay. Weak forms are about speech.",
      {warn:"Don’t confuse weak forms with a mistake in grammar. Saying /kən/ for *can* is the standard pronunciation. Saying /kæn/ every time is not a fault, but listeners may find it hard to tell *can* from *can’t* when you do."},
      "In a good learner dictionary you can often see both forms. The Cambridge Dictionary, for example, shows more than one pronunciation for words such as *for* and *can*, and has UK and US audio."
    ]}
   ],
   try:[
    {id:"e5u3-l3-x1", type:"ipa", q:"Transcribe the word *can* as it sounds in “I can swim” (GA). Use the weak form.", answer:["kən","kɪn"], why:"Before a verb, *can* is a function word and not stressed, so its vowel becomes schwa: /kən/.", wrongs:[{v:"kæn", why:"That is the strong form, used for emphasis (“Yes, I CAN”) or at the end of a sentence."},{v:"kænt", why:"That is *can’t*, a different word with the full vowel and a /t/."}]},
    {id:"e5u3-l3-x2", type:"ipa", q:"Transcribe the word *for* as it sounds in “a gift for her” (GA). Use the weak form.", answer:["fɚ","fər"], why:"The weak form of *for* in GA is /fɚ/, with the r-colored schwa. The strong form /fɔr/ is used mainly at the end of a clause, for emphasis, or when the word is said alone.", wrongs:[{v:"fɔr", why:"That is the strong form. Here *for* is followed by *her*, so it is weak."},{v:"fə", why:"This is the SSBE weak form. In GA the r-color stays: /fɚ/."}]},
    {id:"e5u3-l3-x3", type:"ipa", q:"Transcribe “a cup of tea” in GA, with the stress marks. Use the weak forms of *a* and *of*.", answer:["ə ˈkʌp əv ˈti","ə ˈkʌp əv ˈtiː"], stress:true, why:"Two content words get stress: *cup* and *tea*. The small words *a* and *of* are weak: /ə/ and /əv/. That gives /ə ˈkʌp əv ˈti/.", wrongs:[{v:"eɪ ˈkʌp ɑv ˈti", why:"These are strong forms. In normal speech *a* is /ə/ and *of* is /əv/."},{v:"ə kʌp əv ti", why:"The sounds are right, but the stress marks are missing. This exercise tests where the stress goes. Add ˈ before *kʌp* and *ti*."}]},
    {id:"e5u3-l3-x4", type:"sort", q:"In each sentence, is the function word in capitals normally said in its **weak form** or its **strong form**?", buckets:["Weak form (with /ə/)","Strong form (full vowel)"], items:[
      {t:"I CAN swim.", b:0, why:"*Can* before a verb is a normal function word. It is weak: /kən/."},
      {t:"Yes, I CAN.", b:1, why:"*Can* is the last word and carries the answer, so it takes the full vowel /kæn/."},
      {t:"What are you looking FOR?", b:1, why:"At the end of the sentence, *for* is strong: /fɔr/."},
      {t:"A present FOR her.", b:0, why:"*For* is followed by a noun. It is weak: /fɚ/ in GA."},
      {t:"Where are you FROM?", b:1, why:"*From* ends the question, so it keeps its full vowel."},
      {t:"A letter FROM home.", b:0, why:"A word follows *from*, so it is weak: /frəm/."}
    ]},
    M("e5u3-l3-x5","You hear a speaker say /aɪ kən ˈkʌm/ and a second speaker say /aɪ ˈkænt ˈkʌm/. Which statement is correct?",3,[
      ["Both mean “I can come”, with two different accents.","They are different words. The second has /t/ and a full vowel, so it is *can’t*."],
      ["The first means “I can’t come”.","/kən/ is the weak form of *can*. The negative has a full vowel and a /t/."],
      ["The second is a faster way to say “I can come”.","The full vowel and /t/ make it *can’t*, and it is stressed."],
      ["The first is “I can come”. The second is “I can’t come”.","Right. The positive uses weak /kən/. The negative keeps its full vowel (/kænt/ in GA) and carries stress."]
    ]),
    {id:"e5u3-l3-x6", type:"spot", q:"Kaito, a first-year undergraduate in information engineering, is reading a sentence aloud as slowly as he can. He says every word in its strong form. Tap the words that a fluent speaker would **normally say in a weak form**.", ask:"are normally weak", parts:[
      "“I want ", {t:"to", flag:true, why:"A function word. Normally /tə/."}, " go ", {t:"for", flag:true, why:"A function word followed by a noun. Normally /fɚ/ in GA."}, " a ", {t:"walk", flag:false, why:"A noun. It carries stress."}, " ", {t:"from", flag:true, why:"A function word followed by a noun. Normally /frəm/."}, " the ", {t:"station", flag:false, why:"A noun, stressed."}, ".”"
    ]},
    {id:"e5u3-l3-x7", type:"match", q:"Match each word to its common weak form in GA.", pairs:[
      ["to","/tə/","The vowel /u/ becomes schwa before a consonant."],
      ["of","/əv/","The vowel is reduced to schwa, but the /v/ stays."],
      ["and","/ən/","The vowel is schwa, and the /d/ often drops."],
      ["from","/frəm/","The vowel becomes schwa. The consonants stay."],
      ["for","/fɚ/","GA keeps the r-color on a weak vowel."]
    ]},
    M("e5u3-l3-x8","Which is the **best** advice for a learner who cannot hear the small words in fast speech?",0,[
      ["Listen to short clips with a transcript, find the weak forms in the transcript, and listen again.","Right. Seeing where the weak forms are, and hearing them again, trains the ear to expect them."],
      ["Ask people to speak slowly and clearly every time.","Slow speech uses strong forms, so it does not train you to hear the weak forms of real speech."],
      ["Ignore the small words. They are not important.","They carry grammar (tense, plural, negation). Missing /t/ in *can’t* changes the meaning."],
      ["Say every word in its strong form to make sure you are correct.","Strong forms are not wrong, but they make your rhythm stiff, and they do not help you to hear."]
    ])
   ],
   apply:{
    intro:"These tasks use free dictionaries and short recordings. You do not need an account. Keep your own recordings private unless you choose to share them.",
    tasks:[
     {t:"Look up weak forms", how:[
       "Open the Cambridge Dictionary (dictionary.cambridge.org). Look up *can*, *for* and *from*.",
       "Find the pronunciations in each entry. Many entries show a strong form and a weak form. Play the UK and US audio.",
       "Write the IPA for each, in GA or SSBE (say which)."
     ], write:"Word, strong form, weak form…"},
     {t:"Transcript listening", how:[
       "Find a short video or podcast clip (one or two minutes) with a transcript. A news report or a TED-style talk is fine.",
       "Read a sentence in the transcript. Circle the function words. Play the sentence two or three times.",
       "Write down five function words that sounded weaker than you expected, and what you thought you heard the first time."
     ], write:"Five words and what I heard…"},
     {t:"Say it smoothly", how:[
       "Pick five short phrases such as *a cup of tea, bread and butter, a letter from home, going to the store, a gift for her*.",
       "Say each one twice: first with strong forms, then with weak forms and only two or three beats.",
       "Record yourself. Compare the second version with the model audio in this lesson."
     ], write:"What changed when I used weak forms…"}
    ],
    proof:"A short table of three words with strong and weak forms. Five function words you heard as weak in a real recording. A recording of five phrases said with weak forms."
   },
   read:[
    {book:"eling", where:"Background reading: the phonetics chapter, sections “Syllables” and “Stress”", note:"The book has no section on weak forms. Read about stressed and unstressed syllables, and use this lesson for the weak forms themselves."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e5u3-l4", title:"Connected speech", minutes:55,
   hook:{q:"A friend from the US says something like [ˈwʌɾəjə ˈwɑnt] in a fast, relaxed way. What did she ask?", options:["What do you want?","Water you want?","What are you won’t?","Why did you want?"], answer:0, reveal:"**What do you want?** In fast speech, *what do you* shrinks to one rushed beat, written informally as “whaddaya”. Real speech does not sound like a list of separate words. This lesson shows the main ways that words join, lose sounds or change sounds when they meet, and how to hear and use them."},
   goals:[
     "Describe linking, elision and assimilation, with an example of each",
     "Explain General American flapping and say when it happens",
     "Explain informal forms such as gonna, wanna and whaddaya, and when each can be used",
     "Hear and say common connected-speech patterns, and explain them to other learners"
   ],
   learn:[
    {h:"Words are not islands", body:[
      {lead:"In a dictionary, each word stands alone. In speech, words are joined into long streams."},
      "When you say a sentence, you do not pause between words. Your mouth moves from one sound to the next, and the sounds at the edge of each word change. This is called [[connected-speech|connected speech]]. It happens in many languages, including Japanese, and it follows patterns. This lesson covers four of them: linking, elision, assimilation and flapping.",
      "Connected speech is not careless speech. A news reader, a teacher and a friend in a café all use it. What changes is how far they go. In slow, careful speech, they use less. In fast, relaxed speech, more.",
      {h:"Compared with Japanese"},
      "Japanese has connected speech too. A famous example: the moraic nasal *n* (ん) changes with the next sound. In *shinbun* (“newspaper”) it is said like an *m*, because the lips are about to close for *b*. This is the same idea as English *ten pounds* (below). So these changes are not strange. They are your mouth making the next sound easier.",
      "What is different is **where** the sounds join. Katakana writes every consonant with a vowel (*pikku*, *appu*), so each word looks like a separate block. English joins a consonant at the end of one word to the vowel at the start of the next."
    ]},
    {h:"Linking", body:[
      {lead:"[[linking|Linking]] means that a final consonant joins the vowel at the start of the next word."},
      "When a word ends in a consonant and the next word starts with a vowel, the consonant moves across. We hear it as if it began the next syllable. So *pick it up* is said *pi-ki-tup*, and *turn it off* is *tur-ni-toff*.",
      {ex:"Pick it up.     /pɪk ɪt ʌp/   sounds like  pi-ki-tup\nTurn it off.     GA /tɝn ɪt ɔf/ · SSBE /tɜːn ɪt ɒf/   sounds like  tur-ni-toff", label:"Consonant + vowel linking", mono:true, listen:"e5u3-l4-a1"},
      {lead:"Some accents also add a sound to link two vowels."},
      "In SSBE the letter *r* at the end of a word is not pronounced, unless a vowel follows. Then a linking /r/ appears: *far away* is /fɑːr əˈweɪ/, but *far* alone is /fɑː/. In GA the /r/ is always pronounced, so GA has no special linking /r/. Many SSBE speakers also add an /r/ where there is no *r* in the spelling, as in *the idea of it* /ði aɪˈdɪər əv ɪt/. This is called intrusive /r/. Some people dislike it, but it is very common.",
      "Between two vowels, English may also add a small glide: /j/ after a high front vowel, and /w/ after a rounded vowel. So *see it* can be /si jɪt/, and *go on* can be /goʊ wɑn/ in GA or /gəʊ wɒn/ in SSBE. You do not need to think about this. It is the natural way your tongue moves.",
      {ex:"far away     GA /fɑr əˈweɪ/ · SSBE /fɑːr əˈweɪ/ (linking r)\nthe idea of it     SSBE /ði aɪˈdɪər əv ɪt/ (intrusive r)\nsee it     /si jɪt/  ·  go on     GA /goʊ wɑn/ · SSBE /gəʊ wɒn/", label:"Linking r and glides", mono:true, listen:"e5u3-l4-a2"}
    ]},
    {h:"Elision: sounds that disappear", body:[
      {lead:"[[elision|Elision]] means that a sound is left out."},
      "The most common case is a /t/ or /d/ between two other consonants. In *next day*, the /t/ of *next* disappears: GA /nɛks deɪ/. In *last night*, many speakers say GA /læs naɪt/ or SSBE /lɑːs naɪt/. The sounds are hard to say all in a row, so the tongue skips one.",
      "A second kind of elision happens inside words. The word *different* has three written syllables, but we often say two: /ˈdɪfrənt/. The word *comfortable* often has three: /ˈkʌmftɚbəl/ in GA, not four. This is called syllable loss, and dictionaries often show the lost sound in brackets or with a second transcription.",
      {ex:"next day     GA /nɛks deɪ/ · SSBE /neks deɪ/     (the /t/ drops)\nlast night     GA /læs naɪt/ · SSBE /lɑːs naɪt/     (the /t/ drops)\ndifferent     /ˈdɪfrənt/     (two syllables, not three)", label:"Elision", mono:true, listen:"e5u3-l4-a3"},
      {warn:"Elision does not mean the speaker is careless. It means the speaker is following a normal pattern. But learners who add every missing sound can sound stiff and may break the rhythm."}
    ]},
    {h:"Assimilation: sounds that change", body:[
      {lead:"[[hew-assimilation|Assimilation]] means that a sound changes to be more like the sound next to it."},
      "The sounds /t/, /d/ and /n/ are made with the tongue tip. Before a lip sound (/p/, /b/, /m/) or a back sound (/k/, /g/), the tongue anticipates the next place, and the sound changes. So *ten pounds* is often /tɛm paʊndz/, and *good boy* is /gʊb bɔɪ/.",
      {table:[["Phrase","Careful (GA)","Fast speech (GA)","What changed"],["ten pounds","/tɛn paʊndz/","/tɛm paʊndz/","/n/ becomes /m/ before /p/"],["good boy","/gʊd bɔɪ/","/gʊb bɔɪ/","/d/ becomes /b/ before /b/"],["in case","/ɪn keɪs/","/ɪŋ keɪs/","/n/ becomes /ŋ/ before /k/"]]},
      {ex:"ten pounds     /tɛm paʊndz/\ngood boy     /gʊb bɔɪ/\nin case     /ɪŋ keɪs/", label:"Assimilation (GA transcription; listen for the changed sound)", mono:true, listen:"e5u3-l4-a4"},
      "There is a special kind of assimilation when a /t/ or /d/ meets the /j/ of *you*. The two sounds fuse into one: /tʃ/ or /dʒ/. This is called yod coalescence, or [[yod-coalescence|joining with /j/]].",
      {ex:"Did you?     /ˈdɪdʒu/\nWould you?     /ˈwʊdʒu/\nDon’t you?     GA /ˈdoʊntʃu/ · SSBE /ˈdəʊntʃu/\nMeet you.     GA /ˈmitʃu/ · SSBE /ˈmiːtʃu/", label:"Did you, would you, don’t you", mono:true, listen:"e5u3-l4-a5"},
      "This is why *Did you eat?* often sounds like “Didja eat?” You will hear it in films, in lectures and in the news."
    ]},
    {h:"General American flapping", body:[
      {lead:"In General American, a /t/ between vowels is often said as a quick tap."},
      "Say *water* the way an American does. The middle sound is not the sharp /t/ of *tea*. It is a very quick tap of the tongue tip, a **flap**, written [ɾ]. It sounds a bit like a quick /d/ or the Japanese *r* in *sora* (“sky”). This is called [[flapping|flapping]].",
      "Flapping happens when /t/ (or /d/) comes **after a vowel (or /r/) and before a vowel that is not stressed**. So *water, better, city, party* and *got it* are flapped. But *attack* is not, because /t/ starts a stressed syllable: /əˈtæk/. In a dictionary the word is still shown with /t/: /ˈwɔtɚ/. The flap is how it is said.",
      {ex:"water     GA /ˈwɔtɚ/ said [ˈwɔɾɚ] (some Americans say /ˈwɑtɚ/)\nbetter     GA /ˈbɛtɚ/ said [ˈbɛɾɚ]\ncity     GA /ˈsɪti/ said [ˈsɪɾi]\ngot it     GA /ˈgɑt ɪt/ said [ˈgɑɾɪt]", label:"GA flapping", mono:true, listen:"e5u3-l4-a6"},
      "Because /d/ is flapped in the same place, *latter* and *ladder* often sound the same in GA. *Writer* and *rider* come close too, but for many speakers the vowel before the flap is shorter, or a little different, in *writer*. SSBE keeps a clear /t/ in *water*: /ˈwɔːtə/. Flapping is one more reason that people hear GA and SSBE as different.",
      {fig:'<svg viewBox="0 0 340 296"><text x="170" y="22" text-anchor="middle">When does GA flap /t/?</text><rect class="d-lup" x="12" y="38" width="316" height="62" rx="8" stroke-width="2"/><text x="26" y="62">Stressed vowel + /t/ + weak vowel</text><text class="s" x="26" y="84">wa-ter · bet-ter · ci-ty · got it</text><rect class="d-sage" x="12" y="114" width="316" height="62" rx="8" stroke-width="2"/><text x="26" y="138">Flap [ɾ]: a very quick tongue tap</text><text class="s" x="26" y="160">Like a short /d/, or Japanese r in sora</text><rect class="d-rose" x="12" y="190" width="316" height="62" rx="8" stroke-width="2"/><text x="26" y="214">No flap: /t/ starts a stressed syllable</text><text class="s" x="26" y="236">a-ttack · to-day · tea</text></svg>', alt:"Three boxes. The first says that flapping happens after a stressed vowel and before a weak vowel, with examples. The second says a flap is a very quick tongue tap. The third says there is no flap when the t begins a stressed syllable, with examples attack, today and tea.", cap:"Flapping depends on stress, so it connects this lesson with Lesson 1."}
    ]},
    {h:"Gonna, wanna and whaddaya", body:[
      "Informal spellings such as *gonna* try to show how fast speech sounds. They are not new: you can find them in songs, scripts and chat. Each one joins two or three words into one. The spellings are informal, and the IPA below is only approximate, because these forms vary a lot between speakers.",
      {table:[["Written (informal)","Full form","Sounds roughly like","Note"],["gonna","going to","/ˈgʌnə/ (the vowel varies)","Only for future *going to* + verb"],["wanna","want to","GA /ˈwɑnə/ · SSBE /ˈwɒnə/","*Want to* + verb, or at the end: *Do you wanna?*"],["gotta","got to","GA [ˈgɑɾə]","Means “must”"],["whaddaya","what do you","GA [ˈwʌɾəjə]","A question word + auxiliary + pronoun"],["dunno","don’t know","GA /dəˈnoʊ/ · SSBE /dəˈnəʊ/","Very informal"]]},
      {ex:"I’m going to go.     /aɪm ˈgoʊɪŋ tə ˈgoʊ/  →  I’m gonna go.     /aɪm ˈgʌnə ˈgoʊ/\nDo you want to?     /də jə ˈwɑnt tu/  →  Do you wanna?     /də jə ˈwɑnə/\nWhat do you want?     /ˈwʌt də jə ˈwɑnt/  →  Whaddaya want?     [ˈwʌɾəjə ˈwɑnt]", label:"From careful to relaxed (IPA for GA, approximate)", mono:true, listen:"e5u3-l4-a7"},
      "There is one grammar rule to know. *Gonna* can replace *going to* only when *going to* is a future marker followed by a verb: *I’m gonna call you*. You cannot use it for the verb of movement: *I’m going to the market* has no *gonna* form, because there *to* is a preposition and *going* is the main verb.",
      "As for writing: use these spellings in dialogue, song lyrics or a message to a friend. In an essay, a report or an email to a stranger, use the full form. That is a choice of register (Unit 1), not a rule of correctness. When you speak, saying *gonna* is natural English. Saying *going to* is also natural, especially when you want to be careful.",
      {key:"Connected speech is regular. Sounds link, drop, change and flap in patterns that you can learn, hear and explain."}
    ]}
   ],
   try:[
    {id:"e5u3-l4-x1", type:"ipa", q:"Transcribe *water* in General American, the way it is said in everyday speech with a flap. You may write the flap [ɾ] or the dictionary /t/.", hearAfter:"e5u3-l4-a6", answer:["ˈwɔtɚ","ˈwɑtɚ","ˈwɔɾɚ","ˈwɑɾɚ","ˈwɔtər","ˈwɑtər","ˈwɔɾər","ˈwɑɾər"], why:"The /t/ comes after a stressed vowel and before a weak vowel, so it is flapped: [ˈwɔɾɚ]. Many Americans say /ɑ/ instead of /ɔ/ in the first syllable, because of the cot–caught merger. Both are accepted.", wrongs:[{v:"ˈwɔːtə", why:"That is the SSBE pronunciation, with a long vowel, a clear /t/ and no r-color. GA has /ɚ/ at the end."}]},
    {id:"e5u3-l4-x2", type:"ipa", q:"Transcribe *Did you?* as it sounds in fast, relaxed speech. The /d/ and /j/ join into one sound.", hearAfter:"e5u3-l4-a5", answer:["ˈdɪdʒu","ˈdɪdʒuː","ˈdɪdʒʊ","ˈdɪdʒə"], why:"The /d/ of *did* and the /j/ of *you* fuse into /dʒ/. The result is /ˈdɪdʒu/, with a weaker /ə/ in very fast speech.", wrongs:[{v:"dɪd ju", why:"That is the careful pronunciation, with two separate sounds. The fast pronunciation joins them into /dʒ/."}]},
    {id:"e5u3-l4-x3", type:"sort", q:"Which connected-speech process explains each example?", buckets:["Linking","Elision (a sound drops)","Assimilation (a sound changes)","Flapping (GA)"], items:[
      {t:"pick it up → pi-ki-tup", b:0, why:"The final /k/ and /t/ join the vowels that follow."},
      {t:"next day → /nɛks deɪ/", b:1, why:"The /t/ in the middle of a consonant group is left out."},
      {t:"ten pounds → /tɛm paʊndz/", b:2, why:"The /n/ takes the lip position of /p/, so it becomes /m/."},
      {t:"city → [ˈsɪɾi]", b:3, why:"A /t/ between a stressed and a weak vowel becomes a tap in GA."},
      {t:"turn it off → tur-ni-toff", b:0, why:"Another consonant-to-vowel link."},
      {t:"last night → /læs naɪt/", b:1, why:"The /t/ before /n/ drops."},
      {t:"in case → /ɪŋ keɪs/", b:2, why:"The /n/ becomes /ŋ/ before /k/."},
      {t:"better → [ˈbɛɾɚ]", b:3, why:"The same flap rule as in *water* and *city*."}
    ]},
    {id:"e5u3-l4-x4", type:"match", q:"Match each informal spelling to its full form.", pairs:[
      ["gonna","going to (plus a verb)","The *to* is followed by a verb, so the two words can join."],
      ["wanna","want to","*Want* and *to* join, and the /t/ sounds are often lost."],
      ["gotta","got to (must)","The two /t/ sounds join into one (a flap in GA), and *to* becomes /ə/."],
      ["whaddaya","what do you","Three words are squeezed into one quick group with one stress."],
      ["dunno","don’t know","The /t/ drops, and the vowel of *don’t* becomes schwa."]
    ]},
    M("e5u3-l4-x5","Which sentence **cannot** be changed to use *gonna*?",2,[
      ["I’m going to call you tonight.","Here *going to* shows the future and a verb follows, so *I’m gonna call you* is possible."],
      ["It’s going to rain.","Again *going to* is followed by a verb (*rain*), so *It’s gonna rain* is possible."],
      ["I’m going to the market.","Right. *Going* is the main verb of movement and *to* is a preposition. The sentence cannot become *I’m gonna the market*."],
      ["We’re going to be late.","Here *going to* is followed by *be*, so *We’re gonna be late* is possible."]
    ]),
    {id:"e5u3-l4-x6", type:"number", q:"In everyday GA speech, how many **syllables** does the word *comfortable* have when it is said /ˈkʌmftɚbəl/?", answer:3, tol:0, unit:"syllables", why:"Say /ˈkʌmf·tɚ·bəl/: three syllables. The spelling suggests four (com-for-ta-ble), but one weak vowel is lost. That is a type of elision.", wrongs:[
      {v:4, tol:0, why:"Four is the number of syllables in the spelling, and in careful speech. In everyday speech, the weak syllable disappears."},
      {v:5, tol:0, why:"Five is too many. Check each vowel that you actually say."}
    ], hint2:"Say the word as an American does and count the beats."},
    {id:"e5u3-l4-x7", type:"spot", q:"A teacher gives a short talk on flapping. Tap each claim that is **inaccurate or misleading**.", ask:"inaccurate or misleading", parts:[
      {t:"Flapping is common in everyday General American speech.", flag:false, why:"Accurate. It is one of the best-known features of GA."}, " ", {t:"A flap is a sign of lazy or poor speech.", flag:true, why:"Misleading. It is the normal pronunciation of most American speakers, including careful and educated ones, in the same way that linking is normal in every accent."}, " ", {t:"In *attack*, the /t/ is flapped as well.", flag:true, why:"Inaccurate. The /t/ starts a stressed syllable (/əˈtæk/), so it stays a clear /t/."}, " ", {t:"In GA, *latter* and *ladder* often sound the same.", flag:false, why:"Accurate. Both /t/ and /d/ become a flap between a stressed vowel and a weak one."}, " ", {t:"In dictionaries the word *water* is still written with /t/.", flag:false, why:"Accurate. Dictionaries use a broad transcription, so they show the sound as /t/, and learners are expected to know the flap rule."}
    ]},
    {id:"e5u3-l4-x8", type:"explain", q:"Tomás, who studies English, writes: “My teacher said never to say *gonna*. My friends say it all the time, and so do people in films. Who is right?” Explain what you would tell him.", size:"3–5 sentences", prompt:"I would say: …", hint:"Think about speech and writing, and about register.", model:"Both are right, because they are talking about different situations. *Gonna* is a normal, common way to say *going to* before a verb in relaxed speech, and it is used by educated speakers too. In careful writing, such as an essay or a formal email, the full form *going to* is the usual choice. So the teacher’s rule is really about register, not about correctness. Tomás can use *gonna* with friends, and *going to* when he wants to sound careful. He also needs to remember that *gonna* only replaces *going to* before a verb, not in *I’m going to the market*.", points:["Says that *gonna* is normal in relaxed speech", "Explains that formal writing prefers the full form (register)", "Avoids saying that either speaker is simply wrong", "Mentions the limit: only *going to* + verb, not the movement verb"]}
   ],
   apply:{
    intro:"These tasks use short recordings and the corpus tools from Unit 1. Everything is free. Keep your own recordings private unless you choose to share them.",
    tasks:[
     {t:"Catch connected speech", how:[
       "Choose a short clip, one or two minutes, with a transcript. A news report, a talk or an interview is fine.",
       "Read one sentence in the transcript, then play it three times. Note one place where words are linked, one where a sound drops and one where a sound changes. If you can’t find all three, one is enough.",
       "For each place, write the careful form and the fast form."
     ], write:"The sentence… Linking… Elision… Assimilation or flapping…"},
     {t:"Check gonna in a corpus", how:[
       "Open the Corpus of Contemporary American English (english-corpora.org, free with registration).",
       "Search for *gonna*, then for *going to*. Look at the sections (spoken, fiction, academic) for each.",
       "Write which sections have the most *gonna* and the most *going to*. What does this suggest about register?"
     ], write:"Where gonna is common… Where going to is common… What this suggests…"},
     {t:"Say it both ways", how:[
       "Choose five short sentences with *want to, going to, did you, would you* or a *t* between vowels.",
       "Record each one in careful speech, then in relaxed speech.",
       "Listen to both and note which patterns you could hear in your own voice."
     ], write:"The five sentences… The patterns I could hear…"}
    ],
    proof:"Three examples of connected speech from a real clip, with careful and fast forms. Notes on where *gonna* and *going to* are common in a corpus. A recording of five sentences said both ways."
   },
   read:[
    {book:"eling", where:"The phonology chapter, sections “Phonological rules” and “Types of phonological rules”", note:"Look for assimilation, deletion (including /r/ in non-rhotic English) and epenthesis, the added vowels you met in katakana words."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e5u3-l5", title:"Intonation basics", minutes:55,
   hook:{q:"Say “You’re coming” in two ways: once with your voice going down at the end, and once with it going up. What is the difference?", options:["Down is a statement, up is a question","There is no difference","Down is polite, up is rude","Only the spelling shows the difference"], answer:0, reveal:"**Down is usually a statement, and up is usually a question.** Your voice goes down on *coming* when you tell someone something. It goes up when you ask for confirmation: “You’re coming?” In writing we use a question mark. In speech, the tune does the job. This lesson shows the basic tunes of English and how they connect with the stress you have already learned."},
   goals:[
     "Describe the falling and rising tunes of English and say what each usually means",
     "Find the nucleus, the syllable where the main pitch change happens",
     "Use tunes for yes/no questions, wh-questions, lists and tag questions",
     "Use the new versus given information rule, and explain why English written in katakana style can sound flat"
   ],
   learn:[
    {h:"What intonation is", body:[
      {lead:"Intonation is the way your voice goes up and down across a phrase."},
      "Every time you speak, the pitch of your voice changes. [[hew-intonation|Intonation]] is the pattern of these changes over a phrase or a sentence. It is different from word stress (which syllable is strong) and from stress in the sentence (which word is strong). But the three work together.",
      "Speakers break speech into short chunks of a few words. Each chunk has one most important syllable, called the [[nucleus|nucleus]]. This is where the pitch moves. In a neutral sentence, it is the stressed syllable of the **last content word** in the chunk (Lesson 2). So in *I’m going to the STORE*, the voice moves on *store*.",
      "In this lesson we show the pitch movement with arrows: ↘ for a fall and ↗ for a rise. The nucleus is in capital letters.",
      {ex:"I’m LEAving ↘.     (a statement, a fall)\nAre you COMing ↗?     (a yes/no question, a rise)\nWhere are you GOing ↘?     (a wh-question, a fall)", label:"The basic tunes", listen:"e5u3-l5-a1"},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="22" text-anchor="middle">Two basic tunes</text><text class="s" x="14" y="52">Falling: statements, wh-questions</text><path class="d-ink" d="M20 112 L56 92 L92 100 L128 70 L172 124 L200 144" fill="none" stroke-width="2"/><circle class="d-lup" cx="128" cy="70" r="7" stroke-width="2"/><text class="s" x="14" y="172">I’m LEAV-ing ↘ (the nucleus is LEAV)</text><text class="s" x="14" y="196">Falling ends low: finished, certain</text><path class="d-ink" d="M20 270 L64 264 L108 268 L152 252 L196 232 L240 204" fill="none" stroke-width="2"/><circle class="d-sage" cx="152" cy="252" r="7" stroke-width="2"/><text class="s" x="14" y="224">Rising: yes/no questions, more to come</text><text class="s" x="14" y="244">Are you COM-ing ↗</text><text class="s" x="14" y="288">The big circle is the nucleus. The line shows the pitch.</text></svg>', alt:"Two pitch lines. The first line rises to a peak on the nucleus and then falls to the bottom, marked as a falling tune for statements and wh-questions. The second line starts low and rises at the end, marked as a rising tune for yes/no questions and for when more is coming. A circle marks the nucleus on each line.", cap:"A fall ends low and sounds finished. A rise ends high and sounds open. The nucleus is where the pitch starts to move."},
      {key:"A falling tune sounds finished or certain. A rising tune sounds open: a question, or “there is more”."},
      "A third tune, the **fall-rise** ↘↗, goes down and then up on the nucleus. It often means “yes, but…” or “I’m not sure”. For example, *It’s OK ↘↗* may suggest a doubt. We will not go further with this tune here.",
      {warn:"These are the default tunes in both GA and SSBE. Real speech varies: many speakers use rising tunes at the end of statements (“uptalk”), and some accents use more rises than others. It is a feature of those accents and not a mistake."}
    ]},
    {h:"Questions, lists and tags", body:[
      {lead:"Different sentence types usually use different tunes."},
      "A **yes/no question** usually rises: *Are you COMing ↗?* A **wh-question** (*who, what, where, when, why, how*) usually falls: *Where are you GOing ↘?* These are tendencies, not rules. Many yes/no questions fall, and a wh-question can rise when it sounds friendly or asks someone to repeat. Still, the tendency is useful: it means that the same words *you’re coming* can be a statement (↘) or a question (↗).",
      "In a **list**, each item except the last usually rises, which tells the listener that more is coming. The last item falls, which shows that the list is finished.",
      {ex:"We need EGGS ↗, MILK ↗, BREAD ↗ and RICE ↘.", label:"A list", listen:"e5u3-l5-a2"},
      "A **tag question** is a short question at the end of a statement, such as *isn’t it?* Its tune changes the meaning. With a **rise** the speaker really asks: *It’s cold, isn’t it ↗?* (“Is it? I’m not sure.”) With a **fall** the speaker expects agreement: *It’s cold, isn’t it ↘?* (“It is, isn’t it?”)",
      {table:[["Sentence type","Usual tune","Example"],["Statement","Fall ↘","I live in oSAka ↘."],["Yes/no question","Rise ↗","Do you LIVE here ↗?"],["Wh-question","Fall ↘","Where do you LIVE ↘?"],["List","Rise on each item, fall on the last","TEA ↗, COFfee ↗ or JUICE ↘"]]},
      "Tunes also carry attitude, but be careful: the same tune can mean different things in different situations. A fall can sound confident, but also cold. A rise can sound friendly, or unsure. Listeners combine the tune with the words and the situation.",
      {h:"New and given information"},
      "The nucleus normally goes on **new** information. Information that was just mentioned is **given**, and the speaker does not stress it again.",
      {ex:"Mei bought a CAMera.\nThe camera was exPENsive.", label:"New and given", listen:"e5u3-l5-a3"},
      "In the first sentence, *camera* is new, so it gets the nucleus. In the second, *camera* is given (it was just mentioned). The new information is *expensive*, so the nucleus moves there. A learner who stresses *camera* again may sound as if she is contrasting it with something else."
    ]},
    {h:"A worked example: marking a short conversation", body:[
      "Here is a short exchange. The nucleus is in capitals, and the arrows show the tune. Read it aloud, and check each choice against the rules above.",
      {ex:"A: Do you want some TEA ↗?\nB: Yes, PLEASE ↘.\nA: Would you like MILK ↗ or LEMon ↘?\nB: LEMon ↘, thanks.", label:"A short conversation", listen:"e5u3-l5-a5"},
      {list:[
        "*Do you want some TEA ↗?* is a yes/no question, so it rises. The nucleus is on *tea*, the last content word.",
        "*Yes, PLEASE ↘* is an answer. It falls, and *please* is the nucleus.",
        "*Would you like MILK ↗ or LEMon ↘?* offers a choice. The first option rises, because more is coming. The last option falls, because the list is finished. This works like the shopping list.",
        "*LEMon ↘, thanks.* answers the question. *Lemon* is new information, so it takes the nucleus. *Thanks* is a short extra word and is weak."
      ]},
      "Now try changing the situation. If A already thought that B wanted tea, A could say *You want TEA ↗?* These are the words of a statement, but the rise makes them a question. The meaning changes from “do you?” to “I think you do, am I right?” This is why tunes are part of the meaning of speech and not only decoration.",
      "Marking a short text in this way is a useful route to hearing tunes, for learners and for teachers who explain English to others. Do it with a text that you can also listen to, and check your marks against a native or expert speaker."
    ]},
    {h:"Why katakana-style English can sound flat", body:[
      {lead:"A flat sound comes from the way a mother-tongue pattern is used in a new language. It is not a fault."},
      "Katakana is a good way to write foreign words in Japanese. Its words follow the rules of Japanese sound. Those rules are different from English rules, and three differences make a spoken English sentence sound “flat”.",
      {h:"Added vowels"},
      "Japanese syllables usually end in a vowel (or *n*), so a consonant group such as /str/ in *strike* is spread out: ストライク *sutoraiku*. English *strike* /straɪk/ has **one** syllable. The katakana word has **five** morae: *su-to-ra-i-ku*. With more beats, the sentence gets longer, and the rhythm of Lesson 2 gets lost.",
      {ex:"strike     /straɪk/     one syllable\nsutoraiku     su · to · ra · i · ku     five morae", label:"One syllable or five beats", mono:true, listen:"e5u3-l5-a4"},
      {h:"Even timing"},
      "Japanese tends to give each mora about the same length (Lesson 2). English does not: stressed syllables are long, and weak syllables are short and squeezed. With even timing, there is no strong difference between important and unimportant words, and no weak forms (Lesson 3).",
      {h:"Pitch accent, not stress"},
      "In Japanese, pitch separates words: *hashi* “chopsticks” and *hashi* “bridge” differ only in pitch (Lesson 1). In English, pitch movement also falls on **stressed syllables** and marks **new information**. If a speaker keeps the Japanese habits, the pitch movement may fall in different places from the English stress. Then the listener may hear a rhythm with no clear center.",
      "None of this means that Japanese speakers cannot learn the English pattern. It means that the pattern is a new skill, and it can be learned like any other. The three changes to practice are: fewer vowels (say *strike* as one beat), uneven timing (long stressed, short weak), and pitch movement on the nucleus.",
      {h:"Practice"},
      {list:[
        "**Shadow.** Play a short clip and say it at the same time, copying the rise and fall.",
        "**Mark and read.** Write a short text. Put the nucleus in capitals and arrows at the end of each chunk. Read it aloud.",
        "**Record and compare.** Record yourself, then record a model, and compare where the pitch moves.",
        "**Look at the pitch (optional).** A free program called Praat (praat.org) can show the pitch of your voice as a line."
      ]}
    ]}
   ],
   try:[
    {id:"e5u3-l5-x1", type:"sort", q:"Does each sentence usually end with a **fall** ↘ or a **rise** ↗ in a neutral reading?", buckets:["Fall ↘","Rise ↗"], items:[
      {t:"Is it ready?", b:1, why:"A yes/no question usually rises."},
      {t:"Where do you live?", b:0, why:"A wh-question usually falls."},
      {t:"I’m finished.", b:0, why:"A statement usually falls."},
      {t:"Would you like some tea?", b:1, why:"A yes/no question again, so it rises."},
      {t:"Sit down.", b:0, why:"A command usually falls."},
      {t:"Is that your bag?", b:1, why:"A yes/no question, so it rises."}
    ]},
    M("e5u3-l5-x2","A speaker says “It’s cold, isn’t it?” with a **falling** tune on *isn’t it*. What does this mean?",1,[
      ["She does not know whether it is cold, and wants to find out.","That is the rising tag. A falling tag does not ask for information."],
      ["She believes it is cold and expects the listener to agree.","Right. A falling tune on the tag shows that the speaker is sure, and just invites the listener to agree."],
      ["She is angry.","The tune alone does not show anger. Other clues, such as words and voice quality, would do that."],
      ["She is asking a wh-question.","A tag question is not a wh-question, and a fall is not a sign of wh-questions here."]
    ]),
    {id:"e5u3-l5-x3", type:"spot", q:"Priya records her shopping list for a listening exercise. Tap the tune that is **not** what a neutral speaker would use.", ask:"is the wrong tune", parts:[
      "“I need ", {t:"eggs ↗", flag:false, why:"A rise on a non-final item shows that the list continues."}, ", ", {t:"milk ↗", flag:false, why:"Also correct: the list is not finished."}, ", ", {t:"bread ↗", flag:false, why:"Also correct."}, " and ", {t:"rice ↗", flag:true, why:"The last item should fall (rice ↘) to show that the list is finished. A rise sounds as if more items are coming."}, ".”"
    ]},
    M("e5u3-l5-x4","Mei bought a camera. The camera was expensive. In the **second** sentence, which word carries the nucleus (the main pitch movement)?",2,[
      ["camera","*Camera* is given information, because it was just mentioned. It is usually not stressed again."],
      ["the","An article is a function word, so it is weak."],
      ["expensive","Right. *Expensive* is the new information, so it takes the nucleus."],
      ["was","An auxiliary is a function word, so it is weak."]
    ]),
    {id:"e5u3-l5-x5", type:"match", q:"Match each tune to what it usually shows.", pairs:[
      ["Fall ↘","Finished and certain: statements, wh-questions, commands","The pitch ends low and signals that the speaker is done."],
      ["Rise ↗","Open: yes/no questions, or “more is coming”","The pitch ends high and invites an answer or a continuation."],
      ["Fall-rise ↘↗","“Yes, but…” or not sure","The pitch goes down and then up on the nucleus."]
    ]},
    {id:"e5u3-l5-x6", type:"number", q:"How many **morae** does the katakana word ストライク (*sutoraiku*, “strike”) have? Count each kana beat.", answer:5, tol:0, unit:"morae", why:"The word is su · to · ra · i · ku, which is five morae. The English word *strike* /straɪk/ has only one syllable. The extra vowels come from Japanese sound rules, which do not allow the consonant group /str/.", wrongs:[
      {v:4, tol:0, why:"Four counts *rai* as one beat, as in the English diphthong. Japanese gives *ra* and *i* one mora each."},
      {v:1, tol:0, why:"One is the number of syllables in the English word, not the number of morae in the katakana word."}
    ], hint2:"Say the word slowly and tap once for each kana: su, to, ra, i, ku."},
    {id:"e5u3-l5-x7", type:"ipa", q:"Transcribe the English word *strike* in GA. Remember that it has only one syllable.", hearAfter:"e5u3-l5-a4", answer:["straɪk"], why:"The word has one syllable: /s/ + /t/ + /r/ and then the vowel /aɪ/, then /k/. There are no vowels between the consonants.", wrongs:[{v:"stəraɪk", why:"The /ə/ between /t/ and /r/ is an extra vowel, a link with the katakana pronunciation. English says /str/ together."},{v:"sətraɪk", why:"The /ə/ after /s/ is an extra vowel. In English, /s/ and /t/ are said together."}]},
    {id:"e5u3-l5-x8", type:"explain", q:"Yuki, a learner in Japan, records herself reading a paragraph. She says: “Every sound is correct, but my English sounds flat and robotic.” Explain two reasons from this unit, and one thing she can practice.", size:"3–5 sentences", prompt:"I would say: …", hint:"Think about rhythm, weak forms and where the pitch moves.", model:"Correct sounds are only part of what makes speech sound natural. English tends toward stress timing, so Yuki should make stressed syllables longer and squeeze the weak ones, and she should use weak forms such as /tə/ and /əv/ instead of saying every word clearly. English also moves pitch on the stressed syllable of the most important word (the nucleus), but if every syllable has equal length and pitch, there is no clear center. She could practice by marking the nucleus in a short text, putting an arrow at the end of each chunk, and shadowing a model recording.", points:["Names rhythm or timing (stressed vs weak syllables) as a reason", "Names weak forms or squeezed function words, or added vowels", "Mentions pitch movement on the nucleus or the lack of it", "Suggests a practice step such as shadowing or marking the nucleus"]}
   ],
   apply:{
    intro:"These tasks use a short clip and your own voice. A free pitch tool is optional. Keep your recordings private unless you choose to share them.",
    tasks:[
     {t:"Mark the tunes in a clip", how:[
       "Choose a short clip with a transcript, about one minute, such as a news report or an interview.",
       "Take five sentences from the transcript. Put the nucleus in capitals, and add ↘ or ↗ at the end of each chunk.",
       "Play the clip again and check. Did you guess correctly? Fix your marks."
     ], write:"My five sentences with marks… What surprised me…"},
     {t:"New and given in your own writing", how:[
       "Write a two-sentence description of something you did this week. The second sentence should mention the same thing as the first.",
       "Mark the nucleus in each sentence. Check that the repeated word does not get the nucleus.",
       "Read both sentences aloud and record them."
     ], write:"My two sentences with nucleus marks…"},
     {t:"Look at your pitch (optional)", how:[
       "Download Praat from praat.org, or use another free pitch viewer.",
       "Record a yes/no question and a wh-question, such as *Are you coming?* and *Where are you going?*",
       "Look at the pitch line for each. Does the first end higher than the second?"
     ], write:"What the pitch lines looked like…"}
    ],
    proof:"Five sentences marked with nucleus and tune, checked against a real clip. A two-sentence example of new and given information, recorded. Optionally, a screenshot or a description of two pitch lines."
   },
   read:[
    {book:"eling", where:"The phonetics chapter, section “Tone and intonation”", note:"Look for how the book describes pitch, tone and intonation, and how it separates them."}
   ]
  }
  ],
  checkpoint:["e5u3-q02","e5u3-q07","e5u3-q11","e5u3-q16","e5u3-q20","e5u3-q24","e5u3-q29","e5u3-q33","e5u3-q37","e5u3-q40","e5u3-q43","e5u3-q45"],
  cpBank:[
   Q("e5u3-cp01","e5u3-l1",1,"Which statement about English word stress is correct?",1,[
     ["Stress is shown by the spelling of the word.","English spelling does not show stress. *Photograph* and *photography* have almost the same letters but different stress."],
     ["Every word with two or more syllables has one main stress.","Right. Learn it with each new word, and check the dictionary mark ˈ."],
     ["Stress is only about loudness.","Loudness is one clue. Length, pitch and a clear vowel also matter."],
     ["Short words like *table* have no stress.","Even a two-syllable word has a main stress: /ˈteɪbəl/."]]),
   Q("e5u3-cp02","e5u3-l1",2,"Hana says: “They will ˈrecord the song” with the stress on the first syllable of the verb. What would a listener probably think?",2,[
     ["The listener hears a clear verb with no problem.","The verb usually has second-syllable stress, so this one sounds like the noun."],
     ["The listener will think the speaker said *recorded*.","The word has no ending that changes. Only the stress has changed."],
     ["The word sounds like the noun *record*, so the listener may need a moment to work out the meaning.","Yes. The stress pattern points to the noun. The context usually helps, but there is extra work for the listener."],
     ["The listener hears a different language.","A stress error does not change the language. It changes how easy the word is to recognize."]]),
   Q("e5u3-cp03","e5u3-l1",2,"The word *politics* is /ˈpɑlətɪks/ in GA. Where does the main stress fall in *politician* (/ˌpɑləˈtɪʃən/)?",3,[
     ["On the first syllable, like *politics*.","The ending *-ian* pulls the stress forward, so it does not stay on the first syllable."],
     ["On the last syllable, *-ian*.","The ending *-ian* is not stressed. It pulls the stress to the syllable before it."],
     ["On the second syllable, *li*.","The syllable just before *-ian* is *ti*, the third syllable."],
     ["On the third syllable, *ti*, just before *-ian*.","Right. Endings such as *-ion, -ian, -ic* and *-ity* put the stress on the syllable before them."]]),
   Q("e5u3-cp04","e5u3-l2",1,"Which group is made up only of content words?",0,[
     ["ticket, finish, never","A noun, a main verb and a negative adverb all carry meaning, so they are stressed."],
     ["the, of, and","These are function words and are normally weak."],
     ["to, for, can","A preposition, a preposition and an auxiliary. All are function words."],
     ["she, them, a","Pronouns and an article. They are function words."]]),
   Q("e5u3-cp05","e5u3-l2",2,"Which sentence has the **same number of stressed beats** as “CATS CHASE MICE”?",2,[
     ["The DOG was in the GARden.","*Dog* and *garden* are the content words, so this sentence has two beats, not three."],
     ["She SAID that she would be LATE.","*Said* and *late* give two beats. The other words are weak."],
     ["The CATS have CHASED the MICE.","Right. *Cats*, *chased* and *mice* are three stressed beats, though there are six words."],
     ["Please COME to the PARty on FRIday.","*Come*, *party* and *Friday* give three beats, but *please* usually carries a fourth, so the total is four."]]),
   Q("e5u3-cp06","e5u3-l2",3,"A listener says: “Everyone says Japanese is mora-timed, and that is a fact proved by measurement.” What is the best reply?",1,[
     ["That is right, and English is proven stress-timed too.","Neither claim is that strong. The labels describe tendencies."],
     ["These labels describe tendencies that listeners hear, and researchers still debate how well they fit measured speech.","Right. It is a fair, careful summary that is good for teaching."],
     ["Japanese has no timing at all.","Every language has timing patterns. Japanese counts the mora."],
     ["The labels apply only to writing.","They are about speech."]]),
   Q("e5u3-cp07","e5u3-l3",1,"What is the usual GA weak form of *to* in “going to the store”?",0,[
     ["/tə/","Right. The vowel becomes schwa, since *to* has no stress there."],
     ["/tu/","This is the strong form, used when the word stands alone or at the end of a sentence."],
     ["/toʊ/","This is the vowel of *toe*. It is a different word."],
     ["/ɑv/","This is not a form of *to*. It is a GA strong form of *of*."]]),
   Q("e5u3-cp08","e5u3-l3",2,"A student says: “I can’t hear the word *of* in *a cup of tea*. Is something wrong with my hearing?” What is the best explanation?",3,[
     ["Yes, your hearing is probably weak.","The cause is not hearing. The cause is the weak form."],
     ["The speaker did not say the word.","The word is said, but in a short weak form /əv/."],
     ["The word is not important in English.","*Of* has an important job, but it is not stressed."],
     ["*Of* is a function word in a weak form, /əv/, between two stressed beats, so it is very short.","Right. Practicing with transcripts trains the ear to expect it."]]),
   Q("e5u3-cp09","e5u3-l3",3,"Which sentence needs the **strong** form of *for*?",2,[
     ["I bought a present for her.","*For* is followed by *her*. It is weak: /fɚ/ in GA."],
     ["It’s time for lunch.","*For* is followed by a noun and is weak."],
     ["What are you waiting for?","Right. *For* ends the question, so it keeps its full vowel."],
     ["She works for a bank.","*For* is followed by *a bank*. It is weak."]]),
   Q("e5u3-cp10","e5u3-l4",1,"Which is an example of **assimilation**?",1,[
     ["*Pick it up* said as pi-ki-tup","This is linking, not a change of sounds."],
     ["*Ten pounds* said as /tɛm paʊndz/","Right. The /n/ becomes /m/ before /p/, so it is more like the next sound."],
     ["*Next day* said as /nɛks deɪ/","This is elision, because a sound is dropped."],
     ["*Water* said as [ˈwɔɾɚ]","This is flapping, a GA process."]]),
   Q("e5u3-cp11","e5u3-l4",2,"Sione writes in a message to a friend: “I’m gonna go to the market.” Is the use of *gonna* grammatical?",2,[
     ["No. *Gonna* can never be used.","*Gonna* is used before a verb in informal speech and writing."],
     ["No. It is only possible in speech, never in writing.","In informal writing, such as messages and dialogue, *gonna* is common."],
     ["Yes. *Gonna* replaces *going to* before the verb *go*.","Right. It would not work in *I’m going to the market*, where *to* is a preposition."],
     ["No. It must be written *gunna*.","Both spellings appear, and *gonna* is more common. This is not a grammar matter."]]),
   Q("e5u3-cp12","e5u3-l5",2,"Which tune is usually used on the **last item** of a list?",0,[
     ["A fall, to show that the list is finished","Right. The earlier items rise to show that there is more, and the last one falls."],
     ["A rise, like the other items","A final rise suggests that more items are coming."],
     ["A fall-rise","The fall-rise has another meaning, such as “yes, but”."],
     ["A flat pitch with no movement","English speech usually has movement on the nucleus."]])
  ],
  codex:[
   {id:"word-stress-english", title:"Word stress in English", aka:["lexical stress","primary stress","syllable stress"], tags:["phonetics","stress"],
    summary:"One syllable of each long word is stronger than the others. It is longer, higher and clearer, and learners should learn it with each word.",
    levels:{
     starter:[
      "In English, every word with two or more syllables has one **main stress**. That syllable is longer, usually higher in pitch, and its vowel is clear. The other syllables are shorter and often use a weak vowel.",
      "Think of a word as a row of beats. In *banana* the middle beat is the strong one: ba-**NA**-na. In *table* the first beat is strong: **TA**-ble. Say these words aloud and you will feel the strong beat.",
      "Stress is not written in the spelling. A dictionary shows it with a small mark ˈ before the stressed syllable, as in /bəˈnænə/. The stress can also change meaning: the noun *record* has the stress on the first syllable, and the verb *record* has it on the second.",
      "Japanese words have a pitch accent, where pitch alone separates words such as *hashi* “chopsticks” and *hashi* “bridge”. English stress also uses length, loudness and vowel quality, which is one reason it takes practice.",
      {key:"Learn the stress with the word. The dictionary mark ˈ tells you where it goes."}
     ],
     builder:[
      "Stress helps listeners to find word boundaries and to recognize words. A wrong stress can make a word hard to recognize even when each sound is right.",
      {table:[["Pattern","Examples"],["Two-syllable nouns and adjectives: first syllable","ˈtable, ˈhappy"],["Two-syllable verbs: second syllable","beˈgin, deˈcide"],["Noun and verb pairs","ˈrecord (n) and reˈcord (v)"],["Compounds: first part","ˈgreenhouse, ˈbookshop"]]},
      "Suffixes matter. Some pull the stress to the syllable just before them: *-ic, -ical, -ion, -ian, -ity* and *-graphy*. So *photograph* /ˈfoʊtəˌgræf/ becomes *photography* /fəˈtɑgrəfi/ and *photographic* /ˌfoʊtəˈgræfɪk/. A few suffixes, such as *-ee, -eer* and *-ese*, take the stress themselves: *trainee, engineer, Japanese*. Everyday endings such as *-ing, -ness* and *-ful* usually leave the stress alone.",
      "When the stress leaves a syllable, its vowel usually becomes weak (schwa). This is why *photograph* and *photography* sound so different.",
      "These are tendencies with many exceptions. When in doubt, check a dictionary. Both the Cambridge Dictionary and Merriam-Webster have audio."
     ],
     pro:[
      "Phonologists describe English as having a metrical system. Syllables are grouped into feet, and stress marks the head of a foot. Primary stress (ˈ) and secondary stress (ˌ) show two levels. In *photographic*, /ˌfoʊtəˈgræfɪk/, the secondary stress falls on the first syllable and the primary on the third.",
      "In the classic account of English stress, the weight of a syllable matters. Syllables with a long vowel or a diphthong, or with a consonant group after the vowel, tend to attract stress. The part of speech matters too: in nouns, stress usually skips the final syllable, while verbs often stress a final heavy syllable (*deˈcide*, *reˈlax*). Many exceptions come from the history of borrowing, so rules differ for words from Germanic, Romance and Greek sources.",
      "Noun–verb stress pairs, such as *ˈconduct* and *conˈduct*, show a pattern that is partly productive, but not for every word. Some pairs (*ˈanswer*) do not follow it. The pairs *ˈrecord/reˈcord* also differ in vowel quality, because the unstressed syllable reduces.",
      "Stress shift happens in phrases too. A word with late stress may move its stress earlier before a stressed syllable: *ˌthirˈteen* but *ˌthirteen ˈmen* for many speakers. This is called the rhythm rule, and it shows that stress is organized above the word level.",
      "GA and SSBE differ in some words: *advertisement* SSBE /ədˈvɜːtɪsmənt/ and GA /ˌædvɚˈtaɪzmənt/, *ballet* SSBE /ˈbæleɪ/ and GA /bæˈleɪ/. Dictionaries show these as separate UK and US transcriptions."
     ]},
    related:["stress-timing-and-rhythm","weak-forms-english"], read:[{book:"eling", where:"The phonetics chapter, sections “Syllables” and “Stress”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge University Press & Assessment (publisher of the Cambridge Dictionary)", url:"https://www.cambridge.org/"}], checked:"2026-11"},

   {id:"stress-timing-and-rhythm", title:"Sentence stress and rhythm", aka:["stress-timed rhythm","mora timing","sentence stress"], tags:["phonetics","rhythm"],
    summary:"English stresses content words and squeezes function words, which gives a beat-like rhythm. Japanese tends to be timed by the mora. Both are tendencies.",
    levels:{
     starter:[
      "In a normal sentence, English speakers stress the **content words** (nouns, main verbs, adjectives, adverbs) and say the **function words** (articles, prepositions, auxiliaries, pronouns) quickly and quietly. So *The TRAIN LEAVES at SEVen* has three strong beats and three weak syllables (*the*, *at* and *-ven*).",
      "Because the strong beats tend to come at roughly regular times, a sentence with more weak syllables takes less extra time than you might expect, if it has the same number of stressed words. *CATS CHASE MICE* and *The cats have chased the mice* have three beats each.",
      "Japanese is often described as having a different timing: each **mora** takes about the same time. The word *biru* “building” has two morae and *bīru* “beer” has three.",
      "These are tendencies and not exact laws. But they help to explain why English can sound “fast” to learners and why every word sounds clear and equal when learners speak English with Japanese timing.",
      {key:"Stress the content words, squeeze the function words, and let the beats come at a steady pace."}
     ],
     builder:[
      "Researchers who measure speech find that the times between stressed syllables are not perfectly equal, in English or in any other language. So the labels *stress-timed*, *syllable-timed* and *mora-timed* are better seen as descriptions of what listeners hear and of how the language squeezes or keeps its syllables.",
      {table:[["","English (tendency)","Japanese (tendency)"],["Unit of timing","Stressed beat","Mora"],["Weak syllables","Short and reduced","Keep their length"],["Result","Uneven syllables, regular beats","Even morae"]]},
      "Contrastive stress moves the strongest stress to show a contrast: *SHE bought a red car* (not her brother) and *She bought a RED car* (not a blue one). To find the stress, ask which question the sentence answers. The new information takes the nucleus.",
      "To practice, tap a steady beat and say sentences so that stressed words land on the taps. Mark a text for content words and read it with force on those words only."
     ],
     pro:[
      "The terms *stress-timed* and *syllable-timed* come from Kenneth Pike (1945). Later, researchers described Japanese as *mora-timed*. Studies of measured speech (for example by Dauer in 1983 and by Ramus and colleagues in 1999) did not find exact isochrony (equal timing), and proposed other measures, such as the share of time taken by vowels and the variability of consonant intervals.",
      "Several scientists now describe rhythm as an effect of syllable structure and vowel reduction. English has many consonant groups and reduces unstressed vowels. Japanese has simple syllables and no vowel reduction of the same kind. The rhythm that listeners hear follows from these properties.",
      "Sentence prominence also involves accent placement. English has a default rule that puts the nucleus on the last content word of a phrase, and a rule of deaccenting given information. Narrow focus moves the accent to a contrasted word.",
      "In teaching, many teachers treat rhythm as being as important as single sounds, and practice with beats and weak forms is a common part of pronunciation work."
     ]},
    related:["word-stress-english","weak-forms-english"], read:[{book:"eling", where:"The phonetics chapter, section “Stress”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"weak-forms-english", title:"Weak forms of English function words", aka:["weak forms","strong forms","reduced vowels","schwa in function words"], tags:["phonetics","connected speech"],
    summary:"Small grammar words such as to, of, can, and, for and from have a short weak form with schwa in normal speech and a full strong form in a few cases.",
    levels:{
     starter:[
      "Many small English words have two pronunciations. The **strong form** is the full one, and the **weak form** is a short one with a neutral vowel /ə/ (schwa). In normal speech, most function words are weak.",
      "The word *to* is /tu/ when said alone, but /tə/ in *going to the store*. The word *of* is /əv/ in *a cup of tea*. The word *can* is /kən/ in *I can swim*.",
      "Many learners cannot hear weak forms, because they know the spelling and listen for the full word. The weak form is short, between two stressed beats.",
      "Use the strong form at the end of a sentence (*What are you looking for?*), for emphasis (*Yes, I CAN*) and when you say the word alone. The word *can’t* always keeps a full vowel, so the difference between *can* and *can’t* is clear.",
      {key:"Weak forms are standard English, not careless speech."}
     ],
     builder:[
      {table:[["Word","Strong form (GA)","Weak form (GA)","SSBE weak form"],["to","/tu/","/tə/","/tə/"],["of","/ʌv/","/əv/","/əv/"],["can","/kæn/","/kən/","/kən/"],["and","/ænd/","/ənd/, /ən/ or /n/","/ənd/, /ən/ or /n/"],["for","/fɔr/","/fɚ/","/fə/"],["from","/frʌm/","/frəm/","/frəm/"]]},
      "The rule of thumb: if a function word is followed by the word it belongs with, it is weak. If it ends the clause, it is strong. Both strong and weak forms are in good learner dictionaries.",
      "For your own speech, start with the most frequent weak forms (*to, of, and, a, the, can, for*) in set phrases. Use recordings with a transcript to train your ear. Do not write weak forms in formal writing.",
      "In Japanese, particles keep their mora length, so a Japanese listener expects a clear slot for each small word. The weak form seems to be missing when it is only short."
     ],
     pro:[
      "Weak forms are a type of vowel reduction that goes with lack of accent. They are lexically listed: the grammar words in English have a set of weak and strong allomorphs, and the choice depends on position in the phrase and on focus. In an unstressed position before a vowel, *to* may be [tʊ] or [tə], and *the* is [ðə] before a consonant but [ði] before a vowel in many speakers.",
      "Some weak forms lose consonants too: *and* [ən], [n̩], *have* [əv], *he* [i], *her* [ɚ] or [ər]. Pronouns that begin with /h/ often drop it except at the start of a phrase: *I told her* [aɪ ˈtoʊld ɚ].",
      "Function words in the strong form are also found at phrase end because of the stranded position, and in contrast. Auxiliary verbs with negative contraction (*can’t, don’t*) are not reduced to schwa because they carry the negative information.",
      "Many teachers see missed weak forms as a common cause of listening problems. Listening with a transcript and dictation are common ways to practice."
     ]},
    related:["word-stress-english","connected-speech-processes"], read:[{book:"eling", where:"Background reading: the phonetics chapter, sections “Syllables” and “Stress”"}],
    sources:[{t:"Cambridge University Press & Assessment (publisher of the Cambridge Dictionary)", url:"https://www.cambridge.org/"},{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"},

   {id:"connected-speech-processes", title:"Connected speech processes", aka:["linking","elision","assimilation","flapping","yod coalescence"], tags:["phonetics","connected speech"],
    summary:"In real speech, sounds join, drop or change where words meet. The main processes are linking, elision, assimilation and, in General American, flapping.",
    levels:{
     starter:[
      "Words in a dictionary stand alone. In speech, they flow together. **Linking** joins a final consonant to the next vowel: *pick it up* sounds like *pi-ki-tup*. **Elision** drops a sound: *next day* is /nɛks deɪ/. **Assimilation** changes a sound to be like its neighbor: *ten pounds* is /tɛm paʊndz/.",
      "In General American, **flapping** turns a /t/ between a stressed and a weak vowel into a quick tap: *water* sounds like *wadder*. SSBE keeps a clear /t/ in this position.",
      "Informal spellings such as *gonna* (going to), *wanna* (want to) and *whaddaya* (what do you) show how fast speech sounds.",
      "All of these are regular patterns. They are not mistakes, and similar patterns happen in many languages. Japanese does it too: the *n* in *shinbun* sounds like *m*.",
      {key:"Learn to hear these patterns. Use them in relaxed speech if you want to, and use full forms in careful writing."}
     ],
     builder:[
      {table:[["Process","Example","What happens"],["Linking","pick it up","Consonant joins the next vowel"],["Linking /r/ (SSBE)","far away","/r/ appears before a vowel"],["Elision","last night","/t/ drops between consonants"],["Assimilation","good boy → /gʊb bɔɪ/","/d/ becomes /b/ before /b/"],["Yod coalescence","did you → /ˈdɪdʒu/","/d/ + /j/ become /dʒ/"],["Flapping (GA)","water → [ˈwɔɾɚ]","/t/ between a stressed and a weak vowel becomes a tap"]]},
      "Flapping explains why *latter* and *ladder* can sound the same in GA. It does not happen at the start of a stressed syllable (*attack*).",
      "*Gonna* replaces *going to* only when it marks the future before a verb. *I’m going to the market* cannot become *I’m gonna the market*, because *to* is a preposition there.",
      "In listening, these patterns hide the word boundaries. The best training is a transcript and repeated listening."
     ],
     pro:[
      "Linking and elision belong to what phonologists call postlexical processes, which apply across word boundaries and depend on speech rate and style. The degree of assimilation can be partial: in *ten pounds*, the tongue tip gesture may be reduced and the lips close, so that the result is not categorically /m/. Studies of gestures (articulatory phonology) describe this as overlap and reduction of gestures.",
      "Intrusive /r/ in non-rhotic accents, as in *the idea of it*, is usually explained as an analogy with linking /r/. It occurs in many British accents and has been strongly commented on by prescriptive writers. A descriptive account treats it as a regular phonological process.",
      "Flapping in North American English applies to /t/ and /d/ in the environment V́ _ V (after a stressed vowel, or a stressed vowel + /r/ as in *party*, and before an unstressed vowel). Compare *atom* [ˈæɾəm] with *atomic* [əˈtɑmɪk]: the /t/ is flapped only when the next vowel is unstressed. In some Canadian and American accents, the vowel before the /t/ in *writer* is different from the vowel before /d/ in *rider*, which keeps the pair distinct.",
      "Reduced forms such as *gonna*, *wanna* and *hafta* are lexicalized in many speakers. The *wanna* contraction is blocked in some syntactic environments, for example in *Which team do you want to win?* (here *wanna* is not possible, because *which team* is the subject of *win*). This is a well-known case in syntactic theory."
     ]},
    related:["weak-forms-english","intonation-english"], read:[{book:"eling", where:"The phonology chapter, sections “Phonological rules” and “Types of phonological rules”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"},{t:"Cambridge University Press & Assessment (publisher of the Cambridge Dictionary)", url:"https://www.cambridge.org/"}], checked:"2026-11"},

   {id:"intonation-english", title:"English intonation basics", aka:["intonation","tunes","nucleus","pitch movement"], tags:["phonetics","intonation"],
    summary:"The voice moves up and down over a phrase. A fall usually sounds finished; a rise sounds open. The main movement happens on the nucleus, usually on new information.",
    levels:{
     starter:[
      "**Intonation** is the pitch pattern of a phrase. Speakers split speech into short chunks, and in each chunk the pitch moves most on one syllable, the **nucleus**. It is usually the stressed syllable of the last content word.",
      "The two basic tunes are the **fall** ↘ and the **rise** ↗. A fall sounds finished or certain, and a rise sounds open. So statements and wh-questions usually fall (*Where do you LIVE ↘?*), and yes/no questions usually rise (*Do you LIVE here ↗?*).",
      "In a list, each item except the last rises, and the last falls: *eggs ↗, milk ↗, bread ↗ and rice ↘*.",
      "New information takes the nucleus. Given information, which was just mentioned, does not: *Mei bought a CAMera. The camera was exPENsive.*",
      {key:"Put the nucleus on the new information. Fall when you are finished and rise when you are asking or continuing."}
     ],
     builder:[
      {table:[["Sentence type","Usual tune","Example"],["Statement","Fall","I’m LEAVing ↘."],["Yes/no question","Rise","Are you COMing ↗?"],["Wh-question","Fall","Where are you GOing ↘?"],["List","Rise, rise, fall","TEA ↗, COFfee ↗ or JUICE ↘"],["Tag question","Rise = asking, fall = expecting agreement","It’s cold, isn’t it ↘?"]]},
      "A third tune, the fall-rise, can show doubt or reservation (*It’s OK ↘↗*). Tunes depend on context, and the same tune can have different effects.",
      "Some speakers use rising tunes on statements (“uptalk”). This is a feature of some varieties of English and not a mistake.",
      "For Japanese speakers: katakana forms add vowels (*sutoraiku* has five morae, English *strike* one syllable) and give each mora equal time. English needs shorter weak syllables so the pitch movement can fall on the stressed one."
     ],
     pro:[
      "The British tradition (Halliday, Crystal, O’Connor and Arnold) describes intonation with tone units, a nucleus and tones such as fall, rise and fall-rise. The American tradition, which includes Pierrehumbert’s autosegmental-metrical model and the ToBI labeling system, describes tunes as sequences of high (H) and low (L) tones attached to accented syllables and phrase edges. The two systems cover similar facts in different ways.",
      "Pitch accents link to prominence, and a nuclear accent is the last one in a phrase. Deaccenting of given information is regular, but not absolute. Contrast and focus can place an accent on any word.",
      "The meaning of tunes is under debate. Some researchers describe a small set of meanings, such as “finality” and “continuation”. Others argue that tunes are made of small parts with their own meanings. All agree that tune and context work together.",
      "Both GA and SSBE use similar default tunes, but varieties differ. Northern Irish English and some other varieties often have rising tunes on statements, and Singapore English and Indian English have their own tune systems. These belong to the World Englishes elective."
     ]},
    related:["stress-timing-and-rhythm","connected-speech-processes"], read:[{book:"eling", where:"The phonetics chapter, section “Tone and intonation”"}],
    sources:[{t:"Essentials of Linguistics, 2nd ed. (eCampusOntario)", url:"https://ecampusontario.pressbooks.pub/essentialsoflinguistics2/"}], checked:"2026-11"}
  ],
  terms:[
   {id:"hew-word-stress", term:"Word stress", def:"The syllable of a word that is said with more force: it is longer, usually higher in pitch, and has a clear vowel. Every English word with two or more syllables has one primary stress.", codex:"word-stress-english"},
   {id:"primary-stress", term:"Primary stress", def:"The strongest stress in a word. IPA marks it with ˈ before the syllable, as in /bəˈnænə/.", codex:"word-stress-english"},
   {id:"secondary-stress", term:"Secondary stress", def:"A lighter stress in a long word, marked with ˌ. In /ˌfoʊtəˈgræfɪk/, the first syllable has secondary stress and the third has primary stress.", codex:"word-stress-english"},
   {id:"content-word", term:"Content word", def:"A word that carries the main meaning: a noun, main verb, adjective, adverb, question word or negative. Content words are usually stressed in a sentence.", codex:"stress-timing-and-rhythm"},
   {id:"function-word", term:"Function word", def:"A small word that does grammar work, such as an article, preposition, pronoun, auxiliary verb or conjunction. Function words are usually weak in speech.", codex:"weak-forms-english"},
   {id:"hew-sentence-stress", term:"Sentence stress", def:"The pattern of stressed and unstressed words in a sentence. Speakers stress content words, and the pattern gives English its rhythm.", codex:"stress-timing-and-rhythm"},
   {id:"stress-timing", term:"Stress timing", def:"The tendency of English to have stressed syllables at fairly regular intervals, with weak syllables squeezed between them. Researchers debate how exact this is.", codex:"stress-timing-and-rhythm"},
   {id:"hew-mora", term:"Mora", def:"A small unit of sound length in Japanese. A short vowel is one mora, a long vowel is two, and so is the syllable-final *n*. The word *biru* has two morae and *bīru* has three.", codex:"stress-timing-and-rhythm"},
   {id:"mora-timing", term:"Mora timing", def:"The tendency of Japanese to give each mora about the same time. It is a description of what listeners hear, and researchers still debate how well it fits measured speech.", codex:"stress-timing-and-rhythm"},
   {id:"contrastive-stress", term:"Contrastive stress", def:"Extra stress on a word to show a contrast, as in *She bought a RED car* (not a blue one).", codex:"stress-timing-and-rhythm"},
   {id:"hew-weak-form", term:"Weak form", def:"The short pronunciation of a function word in normal speech, usually with schwa. The weak form of *can* is /kən/.", codex:"weak-forms-english"},
   {id:"strong-form", term:"Strong form", def:"The full pronunciation of a function word, used at the end of a clause, for emphasis, or when the word is said alone. The strong form of *can* is /kæn/.", codex:"weak-forms-english"},
   {id:"connected-speech", term:"Connected speech", def:"The way sounds join, drop or change when words are said together in a stream. Linking, elision, assimilation and flapping are examples.", codex:"connected-speech-processes"},
   {id:"linking", term:"Linking", def:"A final consonant moving across to join the vowel at the start of the next word, so *pick it up* sounds like pi-ki-tup. SSBE also has a linking /r/ in *far away*.", codex:"connected-speech-processes"},
   {id:"elision", term:"Elision", def:"The loss of a sound in speech, such as the /t/ in *next day* /nɛks deɪ/ or the vowel in *different* /ˈdɪfrənt/.", codex:"connected-speech-processes"},
   {id:"hew-assimilation", term:"Assimilation", def:"A change in a sound so that it is more like a neighboring sound, as when *ten pounds* is said /tɛm paʊndz/.", codex:"connected-speech-processes"},
   {id:"yod-coalescence", term:"Yod coalescence", def:"The joining of /t/ or /d/ with the following /j/ into /tʃ/ or /dʒ/, as in *did you* /ˈdɪdʒu/ and *meet you* /ˈmitʃu/.", codex:"connected-speech-processes"},
   {id:"flapping", term:"Flapping", def:"In General American, the pronunciation of /t/ or /d/ between a stressed vowel and a weak vowel as a quick tongue tap [ɾ], as in *water* and *city*.", codex:"connected-speech-processes"},
   {id:"hew-intonation", term:"Intonation", def:"The pattern of rises and falls in pitch over a phrase or a sentence. A fall usually sounds finished, and a rise usually sounds open.", codex:"intonation-english"},
   {id:"nucleus", term:"Nucleus (of a phrase)", def:"The syllable in a phrase where the main pitch movement starts. It is usually the stressed syllable of the last content word, or of the word with new information.", codex:"intonation-english"}
  ],
  bank:[
   /* ---- Lesson 1: word stress ---- */
   Q("e5u3-q01","e5u3-l1",1,"What is word stress?",2,[
     ["A pause between two words","A pause is not stress. Stress is inside a word."],
     ["A mark in the spelling of a word","English spelling does not show stress. A dictionary mark does."],
     ["The syllable of a word that is said with more force, length and a clear vowel","Right. A stressed syllable is longer, usually higher, and has a clear vowel."],
     ["A sound that is added to the end of a word","Stress does not add a sound. It changes how a syllable is said."]]),
   Q("e5u3-q02","e5u3-l1",1,"In IPA, which mark shows the **main stress**?",0,[
     ["ˈ placed before the stressed syllable","Right. For example /bəˈnænə/, with the mark before *næ*."],
     ["ː placed after a vowel","That mark shows a long vowel, such as /iː/."],
     ["ˌ placed before the first syllable of every word","That mark shows secondary stress, and only in some words."],
     ["Capital letters","IPA does not use capitals for stress. We use capitals only in this course’s teaching examples."]]),
   Q("e5u3-q03","e5u3-l1",1,"Which word pair is spelled the same but has **noun stress first, verb stress second**?",3,[
     ["table and chair","These are two different words, not one word used as a noun and a verb."],
     ["happy and happily","The stress stays on *hap-* in both."],
     ["answer and visit","These keep first-syllable stress in both uses. They are exceptions."],
     ["record and record","Right. In GA the noun is /ˈrɛkɚd/ and the verb is /rɪˈkɔrd/."]]),
   Q("e5u3-q04","e5u3-l1",2,"Which pronunciation of *photography* has the correct stress?",1,[
     ["/ˈfoʊtəˌgræfi/","This puts the stress on the first syllable, as in *photograph*. The ending *-graphy* moves it."],
     ["/fəˈtɑgrəfi/","Right. The stress is on the second syllable, *-tog-*. The first vowel becomes weak."],
     ["/ˌfoʊtəˈgræfi/","That is not a normal English word. Stress falls before *-graphy*, on *tog*."],
     ["/foʊtəgrəˈfi/","The stress cannot fall on the last syllable here."]]),
   Q("e5u3-q05","e5u3-l1",2,"Which of these is a **compound** noun, with the main stress on the first part?",0,[
     ["a ˈgreenhouse for tomatoes","Right. First-part stress shows that the two words work as one thing."],
     ["a green ˈhouse on the corner","The stress is on *house*, so this is an adjective plus a noun."],
     ["a very big ˈhouse","Again, this is an adjective plus a noun, with stress on the noun."],
     ["to green ˈhouse","This is not a normal English phrase."]]),
   Q("e5u3-q06","e5u3-l1",2,"Where does the main stress fall in *information* (/ˌɪnfɚˈmeɪʃən/ in GA)?",2,[
     ["On *in-*, the first syllable","That is the secondary stress, a lighter one."],
     ["On *-tion*, the last syllable","*-tion* is never the stressed syllable."],
     ["On *ma*, the syllable before *-tion*","Right. The ending *-ion* pulls the stress to the syllable before it."],
     ["On *for*, the second syllable","That syllable is weak, with a schwa-like vowel."]]),
   Q("e5u3-q07","e5u3-l1",3,"Hana hears a classmate say *photographer* as /ˈfoʊtəˌgræfɚ/, with the stress on *pho*. The classmate is surprised that people look puzzled. What is the likely reason?",1,[
     ["The classmate said the wrong consonants.","The consonants are not the issue."],
     ["The stress is on the wrong syllable. The normal pronunciation is /fəˈtɑgrəfɚ/, with stress on *tog*.","Right. *Photographer* follows the same pattern as *photography*, with the stress on *tog*. A wrong stress can make a familiar word hard to recognize."],
     ["Nobody in English says *photographer*.","The word is common."],
     ["The classmate spoke too slowly.","Slow speech does not cause this problem. Stress placement does."]]),
   Q("e5u3-q08","e5u3-l1",2,"Which ending usually puts the stress on **the ending itself**?",3,[
     ["-ing","*-ing* is an everyday ending that does not move the stress."],
     ["-ness","*-ness* leaves the stress where it was, as in *ˈhappiness*."],
     ["-ity","*-ity* pulls the stress to the syllable before it."],
     ["-ee, as in *trainee*","Right. *-ee* (also *-eer* and *-ese*) is itself stressed."]]),
   Q("e5u3-q09","e5u3-l1",3,"A learner says: “I learn the spelling of each word, and then I put the stress where it feels right.” What is the best advice?",0,[
     ["Learn the stress with each new word, from the dictionary mark or audio.","Right. Stress is not in the spelling, so it must be learned along with the word."],
     ["Always stress the first syllable.","This works for many nouns, but not for verbs or for words with endings such as *-ic*."],
     ["Always stress the last syllable.","This is wrong for most English words."],
     ["Do not worry: stress never matters.","Stress helps listeners to recognize words, and it can change meaning."]]),

   /* ---- Lesson 2: sentence stress and rhythm ---- */
   Q("e5u3-q10","e5u3-l2",1,"Which kind of word is usually **stressed** in a normal English sentence?",1,[
     ["Articles such as *a* and *the*","Articles are function words and are weak."],
     ["Nouns and main verbs","Right. Content words carry the main meaning."],
     ["Prepositions such as *to* and *of*","Prepositions are function words and are normally weak."],
     ["Pronouns such as *she* and *them*","Pronouns are function words, and they are weak unless they are contrasted."]]),
   Q("e5u3-q11","e5u3-l2",2,"Which words are stressed in “The TRAIN LEAVES at SEVEN”? (This is a neutral reading.)",2,[
     ["The, at","These are function words, so they are weak."],
     ["Every word equally","English does not give every word equal stress."],
     ["train, leaves, seven","Right. A noun, a main verb and a number carry the meaning."],
     ["only seven","*Seven* has the strongest stress, but *train* and *leaves* are stressed too."]]),
   Q("e5u3-q12","e5u3-l2",1,"What does “stress-timed” mean when people describe English?",0,[
     ["The stressed syllables tend to come at fairly regular intervals","Right. The weak syllables are squeezed between the beats."],
     ["Every syllable has exactly the same length","That is closer to the idea of syllable timing or mora timing."],
     ["English has no weak syllables","English has many weak syllables, which is the reason for stress timing."],
     ["English is spoken faster than other languages","Stress timing is about rhythm, not about speaking speed."]]),
   Q("e5u3-q13","e5u3-l2",2,"The sentences “CATS CHASE MICE” and “The CATS have CHASED the MICE” are said at a natural speed. Which statement is most likely true?",3,[
     ["The second takes about twice as long, because it has twice as many words.","The time depends on the stressed beats, and both have three."],
     ["The second takes about three times as long.","The extra small words are squeezed in, so this is too much."],
     ["They take exactly the same time.","Rhythm is a tendency. The longer one is usually a little longer."],
     ["The second is longer, but much less than twice as long, because both have three stressed beats.","Right. The extra small words are squeezed into the gaps between the beats. This is a tendency, not an exact law."]]),
   Q("e5u3-q14","e5u3-l2",3,"Ren says each English word with the same length, as in Japanese morae. A listener finds it hard to follow. What is the best explanation?",1,[
     ["He is speaking too quietly.","Volume is not the main issue."],
     ["English listeners expect stressed syllables to stand out and weak ones to be short, and equal timing hides this pattern.","Right. Rhythm is part of what listeners use to find the important words."],
     ["Japanese morae cannot be used in English.","The learner can use English with Japanese timing habits. The problem is the pattern, not the possibility."],
     ["Ren pronounces every sound wrongly.","The sounds can be right. The problem is the timing."]]),
   Q("e5u3-q15","e5u3-l2",2,"“She bought a RED car.” What does the stress on *red* suggest?",2,[
     ["That she did not buy it herself","That would need stress on *she* or *bought*."],
     ["That she rented it","That would need stress on *bought*, to contrast with *rent*."],
     ["That it is red and not another color","Right. The stressed word is the one that contrasts with what the listener may expect."],
     ["That she bought a bike","That would need stress on *car*, or a different sentence."]]),
   Q("e5u3-q16","e5u3-l2",2,"Which sentence best describes mora timing?",0,[
     ["Each mora tends to take about the same time, so the number of morae gives a word its length.","Right. The word *biru* has two morae and *bīru* three."],
     ["Each stressed syllable takes the same time.","That describes stress timing."],
     ["Each word takes the same time.","Words differ in length, so this is not what the term means."],
     ["Japanese speakers pause after each mora.","The morae are joined without pauses."]]),
   Q("e5u3-q17","e5u3-l2",3,"Lucía says: “I can read English fast, but my own speech sounds slow and heavy.” According to this lesson, what could help?",3,[
     ["Speaking louder","Volume does not change the rhythm."],
     ["Pausing between every word","Pausing makes the rhythm even less natural."],
     ["Speaking at double speed","Speed does not fix it. Rhythm needs short weak syllables."],
     ["Practicing so that only the content words land on a steady beat","Right. Squeezing function words between beats makes speech sound lighter, without needing a faster speed."]]),
   Q("e5u3-q18","e5u3-l2",2,"Which test helps you decide where the main stress of a sentence goes?",1,[
     ["Find the longest word.","Word length does not decide sentence stress."],
     ["Ask what question the sentence answers. The new information takes the stress.","Right. The new information is what the listener needs."],
     ["Always stress the first word.","The stress depends on the content and the context."],
     ["Stress every noun with equal force.","Content words are stressed, but the strongest stress goes to the new information."]]),

   /* ---- Lesson 3: weak forms ---- */
   Q("e5u3-q19","e5u3-l3",1,"What is a weak form?",2,[
     ["A mistake in grammar","Weak forms are standard pronunciation, not a mistake."],
     ["A word said very quietly","Weak forms are short and use a weak vowel, but volume is not the key."],
     ["The short pronunciation of a function word in normal speech, often with schwa","Right. For example, *can* /kən/ and *of* /əv/."],
     ["A spelling that only appears in text messages","That is an informal spelling. A weak form is a pronunciation."]]),
   Q("e5u3-q20","e5u3-l3",1,"What is the most common weak vowel in English?",0,[
     ["/ə/ (schwa)","Right. Most weak forms contain schwa."],
     ["/i/","/i/ appears in some weak syllables, such as the end of *happy*, but schwa is more common."],
     ["/æ/","/æ/ is a full vowel, and it is the strong form of words such as *can* and *and*."],
     ["/u/","/u/ is a full vowel, and it is the strong form of *to*."]]),
   Q("e5u3-q21","e5u3-l3",2,"How is *and* usually said in *bread and butter* in GA?",1,[
     ["/ænd/, with a full vowel","This is the strong form, used for emphasis or when the word is alone."],
     ["/ən/ or /n/","Right. The vowel is weak, and the /d/ often drops."],
     ["/ɑnd/","This is not a form of *and* in GA."],
     ["/ænt/","This has a /t/ and a full vowel, which is not a form of *and*."]]),
   Q("e5u3-q22","e5u3-l3",2,"Which sentence uses the **strong** form of *from*?",3,[
     ["I got a letter from home.","*From* is followed by *home*, so it is weak: /frəm/."],
     ["She walked from the station.","*From* is followed by a noun, so it is weak."],
     ["Tea comes from Asia.","*From* is followed by *Asia*, so it is weak."],
     ["Where are you from?","Right. *From* ends the question, so it keeps its full vowel."]]),
   Q("e5u3-q23","e5u3-l3",3,"Amara hears /aɪ kən ˈkʌm/ in a recording and writes: “I can’t come.” What went wrong?",2,[
     ["She heard a /t/ that was not there.","The recording did not have a /t/, so she added one from expectation."],
     ["The speaker said it incorrectly.","The speaker said a normal weak form."],
     ["She expected a full vowel in *can*. The weak form /kən/ means “can”, and *can’t* would have a full vowel and /t/.","Right. In everyday speech, *can’t* has a clear full vowel, and positive *can* is weak."],
     ["The two words always sound the same.","They are different: /kən/ against /ˈkænt/."]]),
   Q("e5u3-q24","e5u3-l3",2,"Why is *can’t* **not** weak?",1,[
     ["Because *can’t* is a noun","*Can’t* is a negative auxiliary verb."],
     ["Because it carries the negative meaning, so it is stressed and keeps its full vowel","Right. It is not just a grammar word. It changes the meaning of the sentence."],
     ["Because it is spelled with an apostrophe","The apostrophe is not the cause."],
     ["Because it is always at the end of a sentence","*Can’t* can appear anywhere."]]),
   Q("e5u3-q25","e5u3-l3",2,"Which is the SSBE weak form of *for*?",0,[
     ["/fə/","Right. SSBE does not say /r/ unless a vowel follows. GA has /fɚ/."],
     ["/fɚ/","This is the GA weak form, with an r-colored vowel."],
     ["/fɔː/","This is the SSBE strong form."],
     ["/fɔr/","This is the GA strong form."]]),
   Q("e5u3-q26","e5u3-l3",3,"A tutor says: “Always say every word in its strong form, so your English is clear.” Which reply is best?",3,[
     ["The tutor is right, because weak forms are slang.","Weak forms are standard speech, not slang."],
     ["The tutor is wrong. Strong forms are always incorrect.","Strong forms are correct when they are needed, but not when every word has one."],
     ["Weak forms should only be used in writing.","Weak forms are about speech, not writing."],
     ["Strong forms are fine for careful speech, but using only strong forms makes the rhythm stiff and can hide the difference between *can* and *can’t*.","Right. A balance helps both speaking and listening."]]),
   Q("e5u3-q27","e5u3-l3",3,"A learner wants to improve listening to weak forms. Which plan fits the lesson best?",2,[
     ["Listen to slow, careful speech only.","That uses strong forms and does not train the ear for real speech."],
     ["Read the spelling many times.","Spelling does not show weak forms."],
     ["Listen to short clips with transcripts, find the weak forms, and listen again.","Right. Seeing where the weak forms are, then hearing them again, trains the ear."],
     ["Try to speak faster.","Speed does not train listening."]]),

   /* ---- Lesson 4: connected speech ---- */
   Q("e5u3-q28","e5u3-l4",1,"What is **linking**?",0,[
     ["A final consonant joins the vowel at the start of the next word","Right. *Pick it up* is said pi-ki-tup."],
     ["A sound is dropped","That is elision."],
     ["A sound changes to be like its neighbor","That is assimilation."],
     ["A /t/ is said as a quick tap","That is flapping."]]),
   Q("e5u3-q29","e5u3-l4",1,"Which is an example of **elision**?",1,[
     ["*Ten pounds* said as /tɛm paʊndz/","This is assimilation. The /n/ changes."],
     ["*Next day* said as /nɛks deɪ/","Right. The /t/ at the end of *next* is lost."],
     ["*Turn it off* said as tur-ni-toff","This is linking."],
     ["*Water* said as [ˈwɔɾɚ]","This is flapping."]]),
   Q("e5u3-q30","e5u3-l4",2,"When does General American flap a /t/?",2,[
     ["At the start of every word","A word-initial /t/ is a clear /t/, as in *tea*."],
     ["Only at the end of a sentence","Flapping depends on the sounds around the /t/, not on the sentence end."],
     ["Between a stressed vowel and a weak vowel, as in *water*","Right. The /t/ becomes a quick tap."],
     ["Before any stressed vowel, as in *attack*","Before a stressed vowel the /t/ stays clear."]]),
   Q("e5u3-q31","e5u3-l4",2,"*Did you* is often said /ˈdɪdʒu/. What is this process called?",3,[
     ["Linking","Linking joins a consonant to a vowel without changing the sound."],
     ["Flapping","Flapping affects /t/ and /d/ between vowels, producing a tap."],
     ["Elision","Nothing is simply dropped. Two sounds fuse into a new one."],
     ["Yod coalescence, a kind of assimilation","Right. /d/ and /j/ fuse into /dʒ/."]]),
   Q("e5u3-q32","e5u3-l4",2,"Which statement about *gonna* is correct?",1,[
     ["It can replace *going to* in every sentence.","It cannot replace *going to* when *to* is a preposition, as in *I’m going to the market*."],
     ["It can replace *going to* when a verb follows.","Right. For example, *I’m gonna call you*."],
     ["It is an error that educated speakers never use.","Educated speakers use it in relaxed speech."],
     ["It is the correct spelling for formal essays.","In formal essays, the full form is used."]]),
   Q("e5u3-q33","e5u3-l4",3,"Tomás writes in an essay: “Many people are gonna move to the city.” His tutor asks him to change it. What is the best explanation for the tutor?",0,[
     ["It is a good choice for speech, but an essay uses a more formal register, so use *going to* or *will*.","Right. The choice depends on register, not on right or wrong."],
     ["*Gonna* is not a word.","It is a recorded informal form, widely used."],
     ["*Gonna* is slower to say.","It is faster. The issue is register."],
     ["*Gonna* is only used by children.","Adults use it all the time."]]),
   Q("e5u3-q34","e5u3-l4",2,"In what way is Japanese connected speech similar to English?",3,[
     ["Japanese has none.","Japanese has connected speech too, as the lesson shows."],
     ["Japanese drops every vowel at the end of words.","Japanese words do not all lose their final vowels."],
     ["Japanese flaps /t/ in the same way.","Japanese has its own tap sound, but not this rule."],
     ["Japanese *n* changes before a lip sound, as in *shinbun*, like English *ten pounds*.","Right. In both languages, a sound becomes more like its neighbor."]]),
   Q("e5u3-q35","e5u3-l4",3,"A listener hears “Whaddaya want?” and does not understand. Which advice is best?",2,[
     ["Ask the speaker to say it in a more correct way.","The speaker is using a normal fast form."],
     ["Skip the sentence and move on.","It is better to learn to decode it."],
     ["Think of the full form *What do you want?* and practice hearing the three words as one rushed beat.","Right. Knowing the pattern helps the ear to expect it."],
     ["Decide that the speaker has a bad accent.","The form is common, and it is not an accent problem."]]),
   Q("e5u3-q36","e5u3-l4",3,"Two Americans say *latter* and *ladder*, and they sound the same. What explains this?",1,[
     ["Linking","Linking joins words, not sounds inside a word."],
     ["Flapping, which turns both /t/ and /d/ into the same tap between a stressed and a weak vowel","Right. In GA the two words can sound the same."],
     ["Elision","No sound is dropped in these words."],
     ["Stress timing","Rhythm is not the cause."]]),

   /* ---- Lesson 5: intonation ---- */
   Q("e5u3-q37","e5u3-l5",1,"What is intonation?",0,[
     ["The pattern of rises and falls in pitch over a phrase","Right. It works together with stress, but it is not the same."],
     ["The strength of one syllable in a word","That is word stress."],
     ["The length of Japanese vowels","That is vowel length, or morae."],
     ["The spelling of a question","Intonation is about speech, not spelling."]]),
   Q("e5u3-q38","e5u3-l5",1,"What tune does a **yes/no question** usually have?",1,[
     ["A fall","A fall is more common for statements and wh-questions."],
     ["A rise","Right. *Are you coming ↗?*"],
     ["A flat tune","English tunes move on the nucleus."],
     ["A rise on every word","The main rise is on the nucleus and the end."]]),
   Q("e5u3-q39","e5u3-l5",2,"What is the nucleus?",2,[
     ["The first word of a sentence","The nucleus can be anywhere, depending on the new information."],
     ["The longest word","Length does not decide it."],
     ["The syllable where the main pitch movement starts, usually on the last content word or new information","Right. In *I’m going to the STORE*, it is *STORE*."],
     ["A weak syllable at the end","The nucleus is a stressed syllable."]]),
   Q("e5u3-q40","e5u3-l5",2,"Which tune fits the list “eggs, milk, bread and rice” best?",3,[
     ["Every item falls.","That sounds as if each item is a separate, finished statement."],
     ["Every item rises, including the last.","That sounds as if the list is not finished."],
     ["All items are flat.","English lists use movement."],
     ["Each item except the last rises, and the last falls.","Right. The rises say “more to come”, and the last fall says “finished”."]]),
   Q("e5u3-q41","e5u3-l5",2,"“Mei bought a camera. The camera was expensive.” Why is *camera* not stressed strongly in the second sentence?",1,[
     ["Because it is a function word","*Camera* is a noun and a content word."],
     ["Because it is given information that was just mentioned","Right. The nucleus moves to the new information, *expensive*."],
     ["Because the speaker forgot it","This is a regular pattern in speech."],
     ["Because it has three syllables","Length does not decide this."]]),
   Q("e5u3-q42","e5u3-l5",3,"Mei says to Tomás: “You live in Lima, don’t you?” with a falling tune on *don’t you*. What does it most likely mean?",2,[
     ["Mei has no idea where Tomás lives.","A falling tag shows that the speaker is fairly sure."],
     ["Mei is asking a wh-question.","This is a tag question, not a wh-question."],
     ["Mei thinks Tomás lives in Lima and expects him to agree.","Right. A falling tag expects agreement. A rising tag would ask a real question."],
     ["Mei is angry.","The tune does not show anger by itself."]]),
   Q("e5u3-q43","e5u3-l5",2,"Why does the katakana word *sutoraiku* have more beats than English *strike*?",3,[
     ["Because English has fewer letters.","The count is about sounds, not letters."],
     ["Because Japanese speakers cannot say consonants.","Japanese has many consonants. It has different rules about how they combine."],
     ["Because the word is borrowed from Japanese.","*Strike* is an English word."],
     ["Because Japanese syllables normally end in a vowel, so a vowel is added between consonants, and each mora is counted.","Right. *Su-to-ra-i-ku* is five morae, but *strike* is one syllable."]]),
   Q("e5u3-q44","e5u3-l5",3,"A learner’s English sounds flat even though all the sounds are right. Which three changes are most likely to help, according to this lesson?",0,[
     ["Fewer added vowels, uneven timing with weak syllables, and pitch movement on the nucleus","Right. These match the three differences between katakana-style timing and English rhythm."],
     ["Speaking more loudly, speaking faster and using more rises","Loudness and speed do not fix the timing or the tune."],
     ["Learning more vocabulary","Words are not the cause of flat rhythm."],
     ["Stopping all practice with recordings","Recordings are a helpful tool."]]),
   Q("e5u3-q45","e5u3-l5",3,"A friend says that statements with a rising tune, “uptalk”, are always a mistake. What is the best reply?",2,[
     ["She is right. English statements only fall.","Many varieties use rising tunes on statements."],
     ["She is right, but only in writing.","Tunes are about speech."],
     ["It is a common feature in some varieties and speakers, so it is a difference, not a mistake.","Right. The default tunes are a guide, but real speech varies."],
     ["It happens only in Japanese.","It is not a Japanese feature."]])
  ]
});
})();
