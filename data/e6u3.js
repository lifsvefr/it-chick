(function(){
/* World Englishes · Unit 3 (e6u3) · Britain and Ireland */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u3", track:"e6", n:3, title:"Britain and Ireland", icon:"🍀",
  blurb:"English began in Britain, and it is still spoken there in many ways. This unit tours the accents and dialects of Britain and Ireland: Received Pronunciation and the southeast, the north–south divide in England, Scottish English and Scots, Welsh English, and Irish English, with its own grammar. The last lesson is a listening lab. You hear seven real speakers read the same paragraph, and you learn what to listen for without ranking anyone.",
  goals:[
    "Say what Received Pronunciation (RP) is, how few people speak it, and why Southern Standard British English (SSBE) is used as a reference accent",
    "Describe the north–south divide in England, using the lexical sets TRAP, BATH, FOOT and STRUT, and give examples of regional words and grammar",
    "Explain rhoticity and the Scottish Vowel Length Rule in simple terms, and present both views on whether Scots is a language or a dialect",
    "Describe features of Welsh English, Irish English and Northern Irish English, including the *after*-perfect, habitual *do be* and *amn’t*",
    "Listen to speakers from seven places and describe what you hear in plain terms, without ranking accents or treating one person as a whole region"
  ],
  read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, sections 10.2 “Language varies”, 10.6 “Sociolinguistic correlations: Place” and 10.7 “Sociolinguistic correlations: Social status”; Chapter 3, Phonetics, section 3.5 “Describing vowels”", note:"Read the Chapter 10 sections after Lessons 1 and 2, and section 3.5 before the listening lab. The book is written for linguistics students and is not about Britain only, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u3-l1", title:"Southern British English and “RP”", minutes:55,
   hook:{q:"Many people say “British accent” as if there were one. Which statement is the most accurate?", options:["There is one British accent, and the BBC defines it.","There are many accents in Britain, and the one called RP is spoken by only a small minority.","RP is the standard form of English grammar.","RP is the accent of every person born in London."], answer:1, reveal:"**Many accents, and RP is spoken by a small minority.** RP is an accent. It has a social history, and it is not tied to one place. It says nothing about grammar. Most people in Britain speak with a regional accent, and many of them are proud of it."},
   goals:[
     "Say what Received Pronunciation (RP) is, who first used the name, and why it is an accent and not a grammar",
     "Explain why SSBE is used as a reference accent in teaching, and compare it with General American using Wells’ lexical sets",
     "Describe four features of London speech: T-glottaling, TH-fronting, L-vocalization and H-dropping",
     "Explain why Estuary English is a debated label, and describe a speech continuum"
   ],
   learn:[
    {h:"One island, many accents", body:[
      {lead:"Britain is a small country with a very large number of accents. A listener can often tell a speaker’s city, and sometimes the part of the city."},
      "First, some words. **Britain** (Great Britain) is England, Scotland and Wales. The **United Kingdom** is those three plus Northern Ireland. **Ireland** is the island, and most of it is the Republic of Ireland, an independent state. Northern Ireland is part of the United Kingdom. These names have political meaning, so use them carefully. This unit talks about “Britain and Ireland” because the English of the two islands developed together.",
      "An [[accent]] is a way of pronouncing a language, and a [[dialect]] includes words and grammar as well (see {{we-variety-accent-dialect|Unit 1}}). Every speaker has an accent. Nobody speaks without one. In this lesson we start in the south of England, with the accent that textbooks and dictionaries have most often described.",
      {tip:"This unit is about understanding, not imitating. You will not be asked to copy an accent, and no accent here is “funny”, “lazy” or “wrong”. Each one is a regular system."}
    ]},
    {h:"What RP is, and how few people speak it", body:[
      {lead:"[[we-rp|Received Pronunciation]], or RP, is an accent of English. It is linked to social class and education, and it is not linked to one region."},
      "The phrase *received pronunciation* appears in the work of the phonetician Alexander J. Ellis in 1869. In this use, *received* means “accepted in good society”. In the early 1900s the phonetician Daniel Jones described the accent of English private boarding schools. His *English Pronouncing Dictionary* first used the name “Public School Pronunciation” in 1917, and he adopted “Received Pronunciation” in a later edition, in 1926. From the 1920s the BBC used the accent for its announcers, and many people still call it “BBC English”, though BBC speakers today have many accents.",
      "How many people speak RP? Nobody has an exact figure, because it depends on how narrowly you define the accent. One estimate that is often repeated comes from the sociolinguist Peter Trudgill. In 1974 he estimated that about 3 percent of people in Britain spoke RP. Other linguists have questioned even this figure. Treat it as a rough guide from an old estimate, not as a census result. All the estimates agree that RP is spoken by a small minority.",
      "The phonetician A. C. Gimson (1962) described three kinds: conservative RP (older, upper-class), general RP (the most common form in teaching) and advanced RP (younger speakers, with newer features). All three are points on a scale, and the boundaries are fuzzy.",
      {warn:"RP is an **accent**. [[standard-english|Standard English]] is a form of grammar and vocabulary that is used in writing and formal speech. A person can speak Standard English with a Yorkshire, Scottish or Nigerian accent. A person can have an RP accent and use non-standard grammar."}
    ]},
    {h:"SSBE: a reference accent for teaching", body:[
      {lead:"Many teaching materials use RP as a reference accent. Some scholars now prefer a newer name, because the old accent has changed."},
      "Linguists and teachers need an accent to describe when they compare accents or teach pronunciation. For British English they often use **Southern Standard British English (SSBE)**, which is a modern version of the RP tradition. Dictionaries show it as the “UK” pronunciation. In Unit 2 of How English Works you met SSBE beside General American (GA), and you can look back there for the vowel charts. Geoff Lindsey (2019), in *English after RP*, argues that the label RP is out of date and prefers the name Standard Southern British (SSB). The accent he describes is similar. The disagreement is about naming and about how much the old RP still matters.",
      "A reference accent is a tool. It is not a better accent, and it does not describe everyone in the south. To compare accents of English, John Wells (1982) in *Accents of English* gave names to groups of words that share a vowel. These are the **[[we-lexical-set|lexical sets]]**. Each set is named by a key word in capital letters, such as TRAP. The set is a group of words, not a single sound. Accents can then be compared set by set.",
      {table:[["Lexical set","Key word","SSBE","GA"],["TRAP","trap, bag, snack","æ","æ"],["BATH","bath, ask, grass","ɑː","æ"],["PALM","palm, spa, calm","ɑː","ɑ"],["LOT","lot, hot","ɒ","ɑ"],["STRUT","strut, cut, love","ʌ","ʌ"],["FOOT","foot, put, good","ʊ","ʊ"],["NURSE","nurse, bird","ɜː","ɝ"],["GOAT","goat, home","əʊ","oʊ"]]},
      "SSBE is **non-rhotic**: a written *r* is not pronounced unless a vowel sound follows, so *car* is /kɑː/ and *store* is /stɔː/ (see [[rhotic|rhotic accents]]). This is not a rule of “British English” as a whole. Scottish, Irish and some other accents are rhotic, as Lessons 3 and 4 show.",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Speech in the southeast: a continuum</text><rect class="d-sage" x="30" y="32" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="53" text-anchor="middle">More RP-like features</text><text class="s" x="170" y="72" text-anchor="middle">non-rhotic, /ɑː/ in bath, few glottal stops</text><rect class="d-gold" x="30" y="108" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="129" text-anchor="middle">A mixed middle: “Estuary”?</text><text class="s" x="170" y="148" text-anchor="middle">some London features, some RP features</text><rect class="d-rose" x="30" y="184" width="280" height="50" rx="8" stroke-width="2"/><text x="170" y="205" text-anchor="middle">More traditional London features</text><text class="s" x="170" y="224" text-anchor="middle">TH-fronting, L-vocalization, H-dropping</text><path class="d-ink" d="M18 36V230" stroke-width="2"/><path class="d-inkf" d="M12 44L18 32L24 44z"/><path class="d-inkf" d="M12 222L18 234L24 222z"/><text class="s" x="170" y="262" text-anchor="middle">Speakers move along the scale, even in one day.</text><text class="s" x="170" y="280" text-anchor="middle">The boundaries between the boxes are fuzzy.</text></svg>', alt:"A vertical scale with three boxes: RP-like features at the top, a mixed middle labeled Estuary, and traditional London features at the bottom. Arrows point both ways.", cap:"Speech in the southeast is a scale. The labels are conveniences, and the boundaries between them are fuzzy."}
    ]},
    {h:"London and the southeast: four features", body:[
      {lead:"London has many kinds of speech. Four features are often described, and each is also found in other places."},
      "**[[we-t-glottaling|T-glottaling]]** means that a /t/ is replaced by a glottal stop [ʔ], the closing of the vocal folds that you can feel in the middle of *uh-oh*. *Bottle* becomes [bɒʔl], *what* becomes [wɒʔ]. T-glottaling is old in London speech, and today it is heard in many cities and in the speech of many young people with little regional accent. Anne Fabricius (2002) found glottal stops spreading even among young speakers of RP-like accents. In RP-like speech they are most common at the end of a word before a consonant, as in *what chance*. Between vowels inside a word, as in *water*, they are much less common in RP-like speech than in London speech.",
      "**TH-fronting** replaces /θ/ by /f/ and /ð/ by /v/: *think* sounds like *fink*, *brother* like *bruvver*. **L-vocalization** makes a dark /l/ at the end of a syllable sound like a vowel or a /w/: *milk* sounds like *miuk*, *people* like *peopuh*. **H-dropping** means that the /h/ at the start of a word is not pronounced, as in *’appy*. H-dropping is old and widespread in English dialects. Nowadays the three features appear in many accents in southern England and beyond.",
      "Traditional London working-class speech is often called **Cockney**. A popular saying is that a true Cockney is born “within the sound of Bow Bells”, the church bells of St Mary-le-Bow. It is a folk definition. Linguists use *Cockney* for the traditional speech of the East End, and it is not the speech of all Londoners. Cockney rhyming slang, such as *apples and pears* for *stairs*, is a lively part of this tradition.",
      "Today many young Londoners, from many backgrounds, speak **Multicultural London English**. Cheshire, Kerswill and colleagues (2011) studied how it formed in neighborhoods where many languages meet. It shares features with older London speech and has its own vowels and words. It is a good example of a new variety forming from contact, the same process that Unit 2 of this course describes."
    ]},
    {h:"Estuary English: a debated label", body:[
      {lead:"In 1984 David Rosewarne used the name *Estuary English* for the speech of people near the River Thames and its estuary, in London, Kent and Essex."},
      "He said it was a mix of RP and London features, and that it was spreading. The press liked the name, and in 1993 Paul Coggle wrote a popular book about it. Other linguists questioned the idea. Some said that *Estuary English* is a useful name for a set of features that are spreading from London across the southeast. Others said that it is a label made by the media, and that what people hear is a normal range of southeastern speech: a continuum between traditional London speech and RP, where speakers move up and down depending on who they are with and what they are doing.",
      "This course uses the label as a name that people use and that scholars debate. It is not a box with clear walls. When you describe a speaker, it is safer to describe the features you hear (non-rhotic, T-glottaling, TH-fronting) than to give the speaker a label. Also keep in mind that people do not choose one fixed way of speaking. The same person may sound different at work, at home and on the phone to a grandparent. Linguists call this **style-shifting**.",
      {ex:"Listen to a speaker from London reading the “Please call Stella” paragraph from the Speech Accent Archive. Every speaker in the archive reads the same text, so you can compare like with like. Listen for the *r* in words such as *store*, *her* and *brother*. Listen also to the vowel in *ask*, and notice whether any *t* sounds are glottal stops, for example in *meet her*. You may hear all of these, or only some. One speaker is one person, and does not stand for the whole of London.", label:"Listen: London", listen:"e6u3-l1-a1"},
      {key:"RP is an accent with a social history, SSBE is a reference accent for teaching, and the speech of the southeast is a continuum. Labels are tools, and a speaker is more than a label."}
    ]}
   ],
   try:[
    M("e6u3-l1-x1","Which statement about RP is the most accurate?",1,[
      ["RP is the correct standard of English grammar.","RP is an accent. Grammar is a separate matter, and it is called Standard English when it is used in formal writing."],
      ["RP is an accent that is linked to social class and education, not to one region, and only a small minority speak it.","Right. It has a social history, and estimates of how many speak it are rough and low."],
      ["RP is the accent of everyone who lives in London.","Londoners have many accents, such as Cockney and Multicultural London English."],
      ["RP is the only accent used on the BBC today.","BBC speakers have many regional accents today."]
    ]),
    {id:"e6u3-l1-x2", type:"sort", q:"Wells (1982) gave names to groups of words that share a vowel. In SSBE, which lexical set does each word belong to?", buckets:["TRAP","BATH","PALM"], items:[
      {t:"bag", b:0, why:"*Bag* has the short vowel /æ/ in SSBE, as in *trap*."},
      {t:"ask", b:1, why:"*Ask* is in the BATH set. SSBE has /ɑː/, and GA has /æ/."},
      {t:"calm", b:2, why:"*Calm* is in the PALM set. Both SSBE and GA have a back vowel, /ɑː/ and /ɑ/."},
      {t:"grass", b:1, why:"*Grass* is a BATH word. It has /ɑː/ in SSBE."},
      {t:"snack", b:0, why:"*Snack* has /æ/, the TRAP vowel."},
      {t:"spa", b:2, why:"*Spa* is a PALM word, with /ɑː/ in SSBE."},
      {t:"path", b:1, why:"*Path* is a BATH word. It has /ɑː/ in SSBE."},
      {t:"man", b:0, why:"*Man* has the TRAP vowel."}
    ]},
    {id:"e6u3-l1-x3", type:"order", q:"Put these events in the order in which they happened, from earliest to latest.", items:[
      {t:"Ellis writes about “received pronunciation” (1869)", why:"The earliest use of the phrase in this lesson."},
      {t:"Jones’s dictionary uses “Public School Pronunciation” (1917)", why:"Jones first described the accent under this name."},
      {t:"Jones adopts “Received Pronunciation” in a later edition (1926)", why:"The name RP becomes the standard label."},
      {t:"Wells publishes *Accents of English* with the lexical sets (1982)", why:"The lexical sets give teachers a tool for comparing accents."},
      {t:"Rosewarne uses the name “Estuary English” (1984)", why:"The label comes after Wells’ book."}
    ]},
    {id:"e6u3-l1-x4", type:"match", q:"Match each feature of southeastern English to its description.", pairs:[
      ["T-glottaling","A glottal stop replaces /t/, as in *bottle* [bɒʔl]","The vocal folds close, and no air passes for a moment."],
      ["TH-fronting","/θ/ becomes /f/ and /ð/ becomes /v/, as in *think* and *brother*","The tongue does not touch the teeth."],
      ["L-vocalization","A dark /l/ at the end of a syllable sounds like a vowel, as in *milk*","This is why *milk* can sound like *miuk*."],
      ["H-dropping","The /h/ at the start of a word is not pronounced","*Hand* sounds like *’and*."],
      ["Non-rhotic","A written *r* is pronounced only before a vowel","*Car* has no *r* sound, but *red* does."]
    ]},
    {id:"e6u3-l1-x5", type:"spot", q:"A student wrote these notes after Lesson 1. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"RP is the right way to speak English.", flag:true, why:"No accent is more correct than another. RP is an accent with a social history."}, " ", {t:"RP is an accent, and Standard English is a kind of grammar and vocabulary.", flag:false, why:"Correct. They are two different things."}, " ", {t:"T-glottaling is a sign of lazy speech.", flag:true, why:"It is a regular feature of many accents. Calling it lazy is a judgment about people, not a description of the sound."}, " ", {t:"Estuary English is a label that linguists debate.", flag:false, why:"Correct. Some find it useful, and others see only a continuum."}, " ", {t:"All Londoners speak Cockney.", flag:true, why:"Cockney is the traditional speech of the East End. London has many other kinds of speech."}, "”"
    ]},
    {id:"e6u3-l1-x6", type:"number", q:"Trudgill’s rough estimate (1974) was that about 3 percent of people in Britain spoke RP. In a group of 200 people chosen at random, about how many would you expect to speak it? (Use the estimate only as a rough guide.)", answer:6, tol:1, unit:"people", why:"3 percent of 200 is 200 × 0.03 = 6. Because the estimate is rough, an answer from 5 to 7 is fine.", wrongs:[{v:60, tol:5, why:"This takes 30 percent. Check the decimal: 3 percent is 0.03."},{v:0.6, tol:0.2, why:"This takes 0.3 percent. 3 percent is 3 per 100, so 6 per 200."}], hint2:"Multiply 200 by 3, then divide by 100."},
    M("e6u3-l1-x7","You will hear a speaker from London. As the lesson explains, London accents are usually non-rhotic, so listen for the *r* in *store*, *her* and *brother*. Which description of the *r* is the typical pattern of London accents?",1,[
      ["The *r* is pronounced in every position, as in Scottish English.","That describes rhotic accents. London accents are usually non-rhotic."],
      ["The *r* is usually not pronounced after a vowel at the end of a word or before a consonant, and the vowel is lengthened or changed instead.","Right. This is the usual non-rhotic pattern of London speech. The answer comes from the typical pattern, not from this one recording. Notice whether this speaker follows it."],
      ["The *r* is replaced by a *w* in every word.","Some speakers use a [w]-like sound in a few cases, but that is not the pattern for *store* or *her*."],
      ["The *r* is pronounced only in the word *brother*.","The *r* before a vowel, as at the start of *red* or *bring*, is pronounced in every accent. The typical London pattern is no *r* after a vowel."]
    ], {listen:"e6u3-l1-a2", hint:"Use what the lesson says about London accents. Then listen and compare. One speaker is one person, and may not follow every typical pattern."}),
    {id:"e6u3-l1-x8", type:"explain", q:"A friend says, “Estuary English is a real accent, and people either speak it or they don’t.” Explain in your own words why linguists say the label is debated.", size:"3–4 sentences", prompt:"Linguists debate the label because …", hint:"Think about a scale between London speech and RP, and about style-shifting.", points:["Says the name was used in 1984 for a mix of RP and London features","Says some linguists see a continuum between London speech and RP, not a separate accent","Mentions that speakers move along the scale in different situations","Suggests describing features instead of using the label"], model:"Rosewarne used the name in 1984 for a mix of RP and London features in the southeast. Some linguists find the name useful because those features are spreading. Others say that the name comes from the media and that the real picture is a continuum between traditional London speech and RP. People also move along that continuum in different situations, so it is hard to say that a person speaks Estuary English or does not. It is safer to describe the features you hear."}
   ],
   apply:{
    intro:"These tasks use free dictionary sites and the recording from the lesson. Nothing needs an account.",
    tasks:[
     {t:"Compare UK and US pronunciations", how:[
       "Open an online dictionary that gives both UK and US audio for each word, such as the Cambridge Dictionary or Oxford Learner’s Dictionaries.",
       "Look up *bath, ask, trap, lot, water* and *store*. Listen to the UK and US recordings of each.",
       "Write down in which words the vowel differs, and in which the *r* differs."
     ], write:"bath… ask… trap… lot… water… store… Which words differ most?"},
     {t:"Describe a speaker in plain words", how:[
       "Listen to the London recording twice. The first time, listen for the whole message. The second time, listen for one feature from the lesson.",
       "Write two observations, such as “I hear no *r* in *store*” or “I notice a glottal stop in …”. Use only words that describe sounds.",
       "Check that you did not write words such as *good*, *bad*, *posh*, *lazy* or *strong*."
     ], write:"Two observations… Did I use only sound words?"}
    ],
    proof:"A short table of six words with UK and US differences, and two plain-word observations about the London speaker."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”", note:"This section shows how accent and class are linked, using studies in other places. Use it to see how social class and speech go together."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u3-l2", title:"The north–south divide in England", minutes:55,
   hook:{q:"A speaker from Manchester says *bath* with the same vowel as *trap*. A speaker from the south of England says it with a longer, back vowel. Which statement is the most accurate?", options:["The Manchester speaker is making a mistake.","Each speaker follows the regular system of a different accent, and the northern short vowel is the older form.","The southern speaker is more educated.","Both speakers have learned English badly."], answer:1, reveal:"**Each follows a regular system, and the northern short vowel is the older one.** In the 1600s and 1700s many southern speakers began to lengthen the vowel in words such as *bath* and *grass*. Most northern speakers never did. Neither group is wrong."},
   goals:[
     "Explain what an isogloss is and describe the north–south line in England as a transition, not a wall",
     "Describe the BATH–TRAP split and the FOOT–STRUT split and say which accents have them",
     "Name some northern features of vowels, and give examples of regional grammar and words",
     "Use the terms *feature*, *lexical set* and *merger* correctly when you compare two accents"
   ],
   learn:[
    {h:"A line across England?", body:[
      {lead:"Many people in England talk about “the north” and “the south”. Linguists can say where some of the sound differences are, and the picture is a gradual change."},
      "A line on a map that marks where one feature changes to another is an [[we-isogloss|isogloss]]. For some sound features, the isoglosses run roughly from the Severn estuary in the west to the Wash on the east coast, as John Wells (1982) noted. South of the lines, most accents have the feature, and north of them most do not. The lines are not exactly together, and they cross a wide zone in the Midlands where speakers use some features and not others. So “the north–south divide” is a useful way to talk, but it is not a wall.",
      "The north itself has many accents. Liverpool (Scouse), Manchester, Leeds, Newcastle (Geordie) and the countryside of Yorkshire sound different from each other. The north has features in common, and you will meet two of them in this lesson: the BATH vowel and the FOOT–STRUT pattern.",
      {warn:"A speaker who comes from the north and does not have the southern vowel has not “lost” it or “failed to learn” it. The northern system is older. The southern system changed."}
    ]},
    {h:"BATH and TRAP", body:[
      {lead:"In SSBE, *bath* has a long back vowel /ɑː/ and *trap* has a short front vowel /æ/. In most northern accents, both words have a short vowel like /a/."},
      "Wells (1982) named the set of words with the long vowel in the south the [[we-bath-trap|BATH lexical set]]. It includes *bath, path, grass, last, ask, dance, half* and *laugh*. The TRAP set includes *trap, cat, bag, snack* and *man*. In the south, the two sets sound different. In the north, they have the same vowel, so the northern *bath* has the same short vowel as *trap*.",
      "How did this happen? In the 1600s and 1700s, a short /æ/ before certain sounds (/f/, /θ/, /s/ and, in some words, a nasal followed by a consonant) became longer in southern speech, and later it moved back. Speakers in the north did not take part in the change. So the northern vowel is the older one. The change was not regular, which is why the BATH set is a list and not a rule. You can see this in pairs such as *glass* /ɑː/ and *gas* /æ/, or *class* /ɑː/ and *mass* /æ/ (in the sense of “amount”) in SSBE.",
      "This split is not the same in all of England, and it is not the same across the English-speaking world. General American has /æ/ in both sets. In Australia, the pattern varies by region. Toby Whitlock, a master’s student in Japanese linguistics, comes from Australia. Australian English is non-rhotic like SSBE, but Australian speakers do not all agree on *dance* or *castle*: in some parts of the country the vowel in these words is long, and in others it is short. Speakers in one country may fall on different sides of the same change.",
      {tip:"Check your idea of “British” against the evidence. A southern pronunciation of *bath* is not “the British pronunciation”. Many British people, including millions in the north, say *bath* with a short vowel."}
    ]},
    {h:"FOOT and STRUT", body:[
      {lead:"A second difference involves two vowels that southern speakers keep apart and many northern speakers do not."},
      "In SSBE, *put* /pʊt/ and *putt* /pʌt/ have different vowels, and so do *foot* and *cut*. Wells called the words of the first kind the FOOT set and the words of the second kind the STRUT set. In the north and much of the Midlands, speakers have only one vowel here, the one in FOOT. So *cut*, *bus* and *love* have the same vowel as *put*, and *putt* and *put* sound alike. Linguists say the two vowels did not split, or that they are **merged**.",
      "The history again shows that the south is the group that changed. In the 1500s English had one short vowel /ʊ/ in all of these words. In the 1600s, in the south, /ʊ/ changed to a more open vowel in many words, which became /ʌ/. Some words, such as *put* and *foot*, kept the old vowel. The split did not reach the north.",
      {fig:'<svg viewBox="0 0 340 330"><text x="170" y="18" text-anchor="middle">Two splits, and where they are found</text><text class="s" x="14" y="44">Word set</text><text class="s" x="120" y="44">Southern England</text><text class="s" x="240" y="44">Much of north</text><text x="14" y="76">TRAP</text><rect class="d-sage" x="116" y="56" width="70" height="28" rx="6" stroke-width="2"/><text x="151" y="76" text-anchor="middle">/æ/</text><rect class="d-gold" x="240" y="56" width="80" height="28" rx="6" stroke-width="2"/><text x="280" y="76" text-anchor="middle">/a/</text><text x="14" y="124">BATH</text><rect class="d-rose" x="116" y="104" width="70" height="28" rx="6" stroke-width="2"/><text x="151" y="124" text-anchor="middle">/ɑː/</text><rect class="d-gold" x="240" y="104" width="80" height="28" rx="6" stroke-width="2"/><text x="280" y="124" text-anchor="middle">/a/</text><text class="s" x="14" y="160">Same vowel in the north: TRAP = BATH</text><text x="14" y="204">FOOT</text><rect class="d-sage" x="116" y="184" width="70" height="28" rx="6" stroke-width="2"/><text x="151" y="204" text-anchor="middle">/ʊ/</text><rect class="d-gold" x="240" y="184" width="80" height="28" rx="6" stroke-width="2"/><text x="280" y="204" text-anchor="middle">/ʊ/</text><text x="14" y="252">STRUT</text><rect class="d-rose" x="116" y="232" width="70" height="28" rx="6" stroke-width="2"/><text x="151" y="252" text-anchor="middle">/ʌ/</text><rect class="d-gold" x="240" y="232" width="80" height="28" rx="6" stroke-width="2"/><text x="280" y="252" text-anchor="middle">/ʊ/</text><text class="s" x="14" y="288">Same vowel in the north: FOOT = STRUT</text><text class="s" x="170" y="316" text-anchor="middle">Typical patterns. Individual speakers vary.</text></svg>', alt:"A diagram with two columns, Southern England and Much of the north, and four rows: TRAP, BATH, FOOT and STRUT. In the south, TRAP has /æ/, BATH /ɑː/, FOOT /ʊ/ and STRUT /ʌ/. In much of the north, TRAP and BATH both have /a/, and FOOT and STRUT both have /ʊ/.", cap:"Typical patterns of vowels in southern and northern English. Many speakers are in between, especially in the Midlands."},
      "Not every northern speaker has exactly this pattern. Some speakers use a vowel between /ʊ/ and /ʌ/ in STRUT words, and many younger or educated speakers have a mix, because they hear other accents on television and when they move for study or work. Speakers in the Midlands may have one feature and not the other. That is why linguists say *typical* and *many*, and why one recording cannot stand for a region."
    ]},
    {h:"Other features, and how to talk about them", body:[
      "Other vowels also differ. In many northern accents, the vowels of FACE and GOAT are single vowels, [eː] and [oː], and not the gliding vowels /eɪ/ and /əʊ/ of SSBE. The accents of the north also differ from each other in how they treat *r*, *l* and the vowel of NURSE. In some parts of Yorkshire and the north, traditional speakers reduce *the* to a very short *t’* or to a glottal stop, as in *I’m going to t’ shop*. This feature is getting rarer.",
      "Compare these with the Lesson 1 features. T-glottaling, for example, is found in the north too, so “glottal stop” is not a southern or a northern feature. Features are best described one by one, with a place, a group of speakers and a time. A good habit is to say “many speakers in the north” and never “northerners”.",
      "To compare two accents you need a method. First, choose a lexical set. Second, say what each accent does with it. Third, say whether the two accents are the same (a **merger**) or different (a **split**) for that set. For example: “For BATH and TRAP, a typical Manchester speaker has a merger and a typical London speaker has a split.”"
    ]},
    {h:"Grammar in the dialects of England", body:[
      {lead:"Dialects differ in grammar as well as in sound. Many features that are not in Standard English are found in dialects all over England."},
      "Jenny Cheshire’s study of teenagers in Reading (1982) is a well-known example. She showed that features such as *we was*, *I never done it* and *them books* are used in regular patterns. The same speaker uses them with friends and not with a teacher, and young people used them more or less depending on the situation. They are not random mistakes. The Electronic World Atlas of Varieties of English ([[we-ewave|eWAVE]]) records many of them as features of varieties in England.",
      {table:[["Feature","Example","Plain description"],["Was/were leveling","We was late.","One form of *be* in the past, for all persons"],["*Never* as a past negator","I never went to school that day.","*Never* means “did not” on one occasion"],["Multiple negation","I didn’t see nothing.","Two negatives are used for one negative meaning"],["*Them* as a demonstrative","Pass me them books.","*Them* is used where Standard English has *those*"],["*Me* for *my*","Me mum is here.","A pronoun is used as a possessive"]]},
      "Some of these features have been in English for hundreds of years. Multiple negation was normal in the English of Chaucer and in Shakespeare’s time, and later grammar writers declared it “illogical” on the ground that two negatives make a positive. Many languages around the world use multiple negation. Speakers of these dialects have a rule, and when a teacher says “that is wrong”, the teacher is describing the standard, not the grammar of the dialect.",
      "A **regional word** can also show where a speaker is from. You can find fascinating variation in everyday words. Here are a few that are often reported, with the usual hedge that no word belongs to exactly one region.",
      {table:[["Meaning","Some words used","Mainly reported in"],["Narrow passage between houses","ginnel, snicket, jitty, entry","Different regions of the north and the Midlands"],["Bread roll","barm, cob, bap, batch","North-west, East Midlands, many places, Coventry area"],["Sulky, bad-tempered","mardy","The Midlands and the north"],["Child","bairn","The north of England and Scotland"]]},
      "The British Library’s *Sounds Familiar?* website and the BBC Voices project (2004 to 2005) collected recordings and words from many places. You can use them in the Apply tasks.",
      {ex:"Listen to a speaker from Manchester reading the “Please call Stella” paragraph. Listen for the vowel in *ask*, *bags* and *snack*. Many speakers in the north have the same short vowel in these words. Then listen to the vowel in *brother*. You may hear that it is different from the vowel of a speaker in the south. One speaker is one person, and a young speaker may have mixed features.", label:"Listen: Manchester", listen:"e6u3-l2-a1"},
      {ex:"Now listen again to the speaker from London. Compare the vowel in *ask* with the vowel in *snack*. In SSBE-like speech, the first is often longer and further back.", label:"Listen again: London", listen:"e6u3-l2-a2"}
    ]}
   ],
   try:[
    M("e6u3-l2-x1","A speaker has no FOOT–STRUT split. Which pair of words sounds the same for this speaker?",2,[
      ["*bath* and *path*","These two words rhyme in every accent, with or without the split. They are BATH words, so they tell you nothing about FOOT and STRUT."],
      ["*trap* and *tap*","These differ by one consonant. The split affects only FOOT and STRUT words."],
      ["*put* and *putt*","Right. Both have the FOOT vowel /ʊ/ for a speaker without the split."],
      ["*cat* and *cot*","These are different vowels in all the accents in this unit that have /æ/ or /a/ in *cat*."]
    ]),
    {id:"e6u3-l2-x2", type:"sort", q:"Which vowel does each word have in SSBE?", buckets:["/ɑː/ (BATH)","/æ/ (TRAP)"], items:[
      {t:"grass", b:0, why:"*Grass* is a BATH word."},
      {t:"gas", b:1, why:"*Gas* is a TRAP word, even though it looks like *grass*. The BATH set is a list, not a rule."},
      {t:"last", b:0, why:"*Last* is in the BATH set, before /s/ and a consonant."},
      {t:"dance", b:0, why:"*Dance* is in the BATH set, before a nasal and a consonant."},
      {t:"hat", b:1, why:"*Hat* has the TRAP vowel."},
      {t:"path", b:0, why:"*Path* is a BATH word, before /θ/."},
      {t:"lamp", b:1, why:"*Lamp* has /æ/. It has a nasal plus a consonant, like *dance*, but only some words of that shape (mostly with /n/, such as *dance* and *chant*) joined the BATH list. This is why the set is a list and not a rule."},
      {t:"half", b:0, why:"*Half* is a BATH word, before /f/."}
    ]},
    {id:"e6u3-l2-x3", type:"match", q:"Match each regional word to its meaning. These words are often reported, and none belongs to one place only.", pairs:[
      ["ginnel","A narrow passage between houses","Reported in the north of England; *snicket* and *jitty* are used elsewhere."],
      ["barm","A soft bread roll (a *barm cake*)","Reported mainly in the north-west of England."],
      ["mardy","Sulky or bad-tempered","Reported in the Midlands and parts of the north."],
      ["bairn","A child","Used in the north of England and in Scotland."],
      ["cob","A bread roll","Reported mainly in the East Midlands."]
    ]},
    M("e6u3-l2-x4","You will hear a speaker from Manchester. Most northern accents have no BATH–TRAP split, so listen to *ask*, *snack* and *bags*. Which statement describes the typical northern pattern?",0,[
      ["The vowel in *ask* is usually the same short vowel as in *snack*.","Right. Most northern accents have no BATH–TRAP split. The answer comes from the typical pattern. A young speaker may have mixed features, so notice what this speaker does."],
      ["The vowel in *ask* is always longer than in *snack*.","That describes the southern SSBE pattern."],
      ["The vowel in *snack* is always a long vowel /ɑː/.","TRAP words have a short vowel in all the accents of England."],
      ["The vowel in *ask* is not pronounced at all.","All speakers pronounce a vowel in *ask*."]
    ], {listen:"e6u3-l2-a3", hint:"Use what the lesson says about the north. Then listen and compare the vowel in *ask* with the vowel in *snack*. One speaker may not follow every typical pattern."}),
    {id:"e6u3-l2-x5", type:"spot", q:"A group chat about grammar in England includes these comments. Tap each comment that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"People who say *we was* just can’t be bothered to learn grammar.", flag:true, why:"Was/were leveling is a documented, regular feature of many dialects. Cheshire (1982) showed that speakers use it in patterns."}, " ", {t:"*I never went to school that day* can mean “I did not go”.", flag:false, why:"Correct. This use of *never* is documented in many English dialects."}, " ", {t:"Multiple negation is a modern mistake.", flag:true, why:"It was normal in earlier English, and many languages have it."}, " ", {t:"A speaker may use a feature with friends and not in a job interview.", flag:false, why:"Correct. Speakers shift style, as Cheshire’s study found."}, "”"
    ]},
    {id:"e6u3-l2-x6", type:"number", q:"Here are eight words: *ask, snack, gas, last, bags, dance, hat, path*. How many of them are in the BATH lexical set (with /ɑː/ in SSBE)?", answer:4, tol:0, unit:"words", why:"*Ask, last, dance* and *path* are BATH words. *Snack, gas, bags* and *hat* are TRAP words.", wrongs:[{v:5, tol:0, why:"This counts *gas*, which looks like *grass* but has /æ/ in SSBE."},{v:3, tol:0, why:"One BATH word was missed. Check *dance* (nasal plus consonant) and *path* (before /θ/)."}], hint2:"BATH words usually have /f/, /θ/, /s/ or a nasal plus a consonant after the vowel, but the set is a list."},
    {id:"e6u3-l2-x7", type:"order", q:"Put the steps of the FOOT–STRUT story in the order in which they happened.", items:[
      {t:"Early English has one short vowel /ʊ/ in *put* and *cut*", why:"This is the starting point. It is the system that the north kept."},
      {t:"In the 1600s, in the south, /ʊ/ opens to /ʌ/ in many words", why:"The change starts in the south."},
      {t:"Words such as *put* and *foot* keep /ʊ/", why:"The change does not reach every word, so two sets are left."},
      {t:"Today, southern speakers have *put* ≠ *putt*, and many northern speakers have *put* = *putt*", why:"The result is a difference between regions."}
    ]},
    {id:"e6u3-l2-x8", type:"explain", q:"A student from the south says to a friend from Leeds, “You say *bath* wrong.” Explain, in your own words, what is wrong with this statement.", size:"3–4 sentences", prompt:"The statement is wrong because …", hint:"Think about history, about what “wrong” means for an accent, and about the word *regular*.", points:["Says the northern short vowel is a regular system, not a mistake","Says the southern long vowel was a later change that began in the south","Says an accent can differ without being wrong","Suggests describing the difference neutrally"], model:"The Leeds speaker follows a regular system of a different accent. Most northern accents have a short vowel in *bath*, the same as in *trap*. The southern long vowel is a later change that began in the south and did not reach the north. An accent can differ from another without being wrong. The student can say, “We say it differently,” and describe the difference."}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Collect regional words", how:[
       "Open the British Library’s *Sounds Familiar?* website, or search for the BBC Voices project, and find a map or a list of words for a bread roll, an alley or a sulky child.",
       "Write three words from different regions, and where each is reported.",
       "Ask a friend or classmate which word they use, and note where they come from. Write one sentence about what you found."
     ], write:"Three words and their regions… My friend uses… Something I learned…"},
     {t:"Compare two speakers by lexical set", how:[
       "Listen to the Manchester and London recordings from this lesson.",
       "For the set BATH, write what each speaker seems to do. For the set STRUT (the word *brother*), write what you hear.",
       "Use the words *merger* and *split* in one sentence. Do not write whether either speaker is better."
     ], write:"BATH: Manchester… London… STRUT (brother)… One sentence with merger or split…"}
    ],
    proof:"Three regional words with places, and a short comparison of two speakers that uses the terms merger and split."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”", note:"The section uses examples from other places, but it shows how linguists map regional features."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u3-l3", title:"Scottish English and Scots", minutes:55,
   hook:{q:"Many Scottish speakers pronounce the *r* in words such as *car* and *store*. What is the usual term for this?", options:["Non-rhotic","Rhotic","T-glottaling","TH-fronting"], answer:1, reveal:"**Rhotic.** A rhotic accent pronounces the *r* after a vowel. Most Scottish accents are rhotic, and so are most Irish accents and General American. SSBE is non-rhotic."},
   goals:[
     "Tell apart Scots, Scottish Standard English and the speech that lies between them, and name the idea of a continuum",
     "Describe rhoticity and the vowels of many Scottish accents, such as the FOOT–GOOSE merger",
     "Explain the Scottish Vowel Length Rule in a simplified form, and say why it is simplified",
     "Give the arguments for and against calling Scots a language, without choosing a side"
   ],
   learn:[
    {h:"Scotland’s languages and its Englishes", body:[
      {lead:"Three languages are part of Scotland’s story: Scottish Gaelic, Scots, and English, which in Scotland has its own standard."},
      "**Scottish Gaelic** is a Celtic language, related to Irish. In the 2011 census, about 57,000 people in Scotland said they could speak it. **Scots** is a Germanic language, closely related to English, and it developed from the Northumbrian dialect of Old English. In the 2011 census, about 1.5 million people said that they could speak Scots. That figure comes from a question that many people understood in different ways, so treat it with care.",
      "**[[we-scottish-standard-english|Scottish Standard English]]** (SSE) is Standard English grammar and vocabulary with a Scottish accent and some Scottish words. Many educated Scots speak it in formal situations. Between SSE and broad Scots there are many kinds of speech, and most speakers move along this scale depending on where they are and whom they talk to. The linguist A. J. Aitken (1979) described this as a continuum, a scale with no clear break. This is the idea of a [[we-dialect-continuum|dialect continuum]].",
      {warn:"Do not call Scottish English “English with an accent” and Scots “slang”. Both are full systems, and many people speak both."}
    ]},
    {h:"Rhoticity and other sounds", body:[
      {lead:"Most Scottish accents are rhotic: they pronounce the *r* in *car*, *store* and *brother*."},
      "In Scottish English the *r* is often a tap [ɾ], made by one quick touch of the tongue tip, or an approximant [ɹ], like the *r* of General American. Some speakers use a trill. Speakers in some city areas, such as parts of Glasgow and Edinburgh, may weaken or drop the *r* after a vowel. See the chapters on Scottish English in Kortmann and Upton (2008) for details. So even in Scotland, rhoticity is a tendency and not a rule for every speaker.",
      "Why are Scottish and Irish accents rhotic when SSBE is not? Rhotic pronunciation is the older pattern. In the 1600s most speakers of English pronounced the *r* after a vowel. Southern England lost it, mostly in the 1700s and 1800s, and the change spread in England and to some places that English reached from there. Scotland and Ireland were not part of that change. Rhoticity is not a feature of “Celtic” speakers. It is a preserved feature, and each region has its own history.",
      "Other features often described for Scottish accents are these. The velar fricative [x] is used in some words, such as *loch*. Many speakers, especially in older and rural speech, make a difference between *which* and *witch*, with a breathy start in *which* [ʍ]. The vowels of FACE and GOAT are usually single vowels, [e] and [o]. In many accents, *pull* and *pool* have the same vowel, so the FOOT and GOOSE sets are merged. *Cot* and *caught* are the same or very close in many accents, but this varies. Glottal stops are common in the cities."
    ]},
    {h:"Vowel length: the Scottish Vowel Length Rule", body:[
      {lead:"In most English accents, a vowel is long or short as part of the vowel itself. In many Scottish accents, the length of many vowels depends on the sound that comes next."},
      "This is called the **[[we-svlr|Scottish Vowel Length Rule]]** (SVLR) or Aitken’s Law, after A. J. Aitken, who described it in 1981. In a simple form, the rule says that many vowels are **short** by default and are **long** in three places: before /r/, before a voiced fricative (/v/, /ð/, /z/ and /ʒ/), and at the end of a morpheme, such as a word or a suffix.",
      "Here are three pairs. In *leaf*, the vowel comes before /f/, a voiceless fricative, and it is short. In *leave*, it comes before /v/, a voiced fricative, and it is long. In *brood*, the vowel is before /d/ inside a word, and it is short. In *brewed*, the *-ed* is a suffix, so the vowel is at the end of the morpheme *brew* and it is long. The same is true of *tide* (short) and *tied* (long).",
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="18" text-anchor="middle">Vowel length in many Scottish accents</text><text class="s" x="14" y="42">Length of the vowel (a longer bar is a longer vowel)</text><text x="14" y="72">leaf</text><rect class="d-sage" x="100" y="58" width="50" height="20" rx="4" stroke-width="2"/><text class="s" x="162" y="73">before /f/</text><text x="14" y="104">leave</text><rect class="d-rose" x="100" y="90" width="120" height="20" rx="4" stroke-width="2"/><text class="s" x="232" y="105">before /v/</text><text x="14" y="148">brood</text><rect class="d-sage" x="100" y="134" width="50" height="20" rx="4" stroke-width="2"/><text class="s" x="162" y="149">inside a word</text><text x="14" y="180">brewed</text><rect class="d-rose" x="100" y="166" width="120" height="20" rx="4" stroke-width="2"/><text class="s" x="232" y="181">brew + -ed</text><text x="14" y="224">tide</text><rect class="d-sage" x="100" y="210" width="50" height="20" rx="4" stroke-width="2"/><text class="s" x="162" y="225">before /d/</text><text x="14" y="256">tied</text><rect class="d-rose" x="100" y="242" width="120" height="20" rx="4" stroke-width="2"/><text class="s" x="232" y="257">tie + -d</text><text class="s" x="170" y="288" text-anchor="middle">Simplified. Real speech has exceptions.</text></svg>', alt:"Three pairs of words with bars. The short bars are leaf, brood and tide. The long bars are leave, brewed and tied. Labels say before f, before v, inside a word, brew plus ed, before d and tie plus d.", cap:"The Scottish Vowel Length Rule in a simple form. The vowel is longer before /v/ and at the end of a morpheme."},
      {warn:"The SVLR is simplified here. Not all vowels follow it in the same way, and some do not follow it at all. The pattern is changing in some cities and among some younger speakers, and it differs between Scots and Scottish Standard English. Use it as a way to hear what is different, not as a rule for every speaker."},
      "Notice what the rule shows. It is a rule about what comes next in a word, and a linguist can test it. A pair such as *brood* and *brewed* has the same vowel in many accents. Many Scottish speakers say it with two lengths."
    ]},
    {h:"Words and grammar", body:[
      "Some words are well known across Britain. *Wee* means “small” and is also used in Northern Ireland and parts of the north of England. *Aye* means “yes”, and is also heard in the north of England and in Northern Ireland. *Bairn* means “child”. *Outwith* means “outside of”, and it is used in formal Scottish writing. *Kirk* means “church”. *Loch* means a lake or an arm of the sea.",
      "Broader Scots has more differences. A Scots speaker may say *I dinnae ken* where a Scottish Standard English speaker says *I don’t know*. The spelling of Scots is not fully standardized, so you will see *dinnae* and *dinna* and other spellings. Scots has many other words that are not used in English, and some that are used with a different meaning.",
      "Scottish English has some grammar features that people from other countries find surprising. *The car needs washed* means *The car needs to be washed*. *Will I open the window?* is a way to offer, where many speakers elsewhere would say *Shall I?*. These are not mistakes. Speakers of all backgrounds in Scotland use them, including educated speakers.",
      {ex:"Listen to a speaker from Edinburgh reading the “Please call Stella” paragraph. Listen for the *r* in *store*, *her* and *brother*. Listen for the vowels in *bring* and *snack*. You may hear a tapped *r*, another kind of *r*, or a weak *r*. One speaker is one person, and an Edinburgh speaker is not a model of all of Scotland.", label:"Listen: Edinburgh", listen:"e6u3-l3-a1"},
      {ex:"Now listen to a speaker from Glasgow reading the same paragraph. Compare the *r* and the rhythm with the Edinburgh speaker. Notice that two Scottish cities do not sound the same. Do not rank them.", label:"Listen: Glasgow", listen:"e6u3-l3-a2"}
    ]},
    {h:"Scots: a language or a dialect?", body:[
      {lead:"Scholars and speakers disagree about whether Scots is a language or a dialect of English. The question depends on what you count as a language, and both views have good support."},
      "**View 1: Scots is a language.** Scots grew from Northumbrian Old English, and it had its own literature from the late 1300s, such as John Barbour’s poem *The Brus*. For some centuries it was the written language of the Scottish court and of government. Robert Burns (1759 to 1796) wrote in it, and his first book, the Kilmarnock edition, was published in 1786. There is a large historical dictionary, the *Dictionary of the Scots Language*. When the UK ratified the European Charter for Regional or Minority Languages in 2001, it recognized Scots under Part II of the Charter. Scottish Gaelic, Welsh and Irish were also given the stronger protection of Part III. Scholars such as those who wrote *The Edinburgh Companion to Scots* (Corbett, McClure and Stuart-Smith, 2003) treat it as a language.",
      "**View 2: Scots is a dialect of English.** The two are close in grammar and in many words, and many people cannot say where Scots ends and Scottish English begins, because the speech between them is a continuum. Most Scots speakers also know Standard English and use it for writing. There is no single standard spelling or form of Scots that everyone uses. Many speakers describe their speech as “Scottish” or “English” and not as “Scots”, and some call it “slang”, a view that linguists say shows how low its status has been.",
      "Linguists use two ideas to look at this. The German linguist Heinz Kloss (1967) separated *Abstand*, the linguistic distance between two varieties, from *Ausbau*, the extent to which a variety has been built up for use in writing, schools and government. Scots has a small Abstand from English, which supports the dialect view, and a long written history, which supports the language view. You will remember from {{we-variety-accent-dialect|Unit 1}} that the line between language and dialect is partly a political choice.",
      "What can you do as a learner? You can describe both views and say who holds them. You can also use the name that speakers use. Many people say “Scots” and “the Scots language” for the whole range, and others say “Scottish English”. The kind way to talk is to ask, and to avoid calling anyone’s speech wrong or lazy.",
      {key:"Scots is a language or a dialect depending on the criteria, and serious scholars take both views. The sensible aim is to describe the evidence and respect the speakers."}
    ]}
   ],
   try:[
    M("e6u3-l3-x1","Which statement about Scottish Standard English (SSE) is the most accurate?",1,[
      ["SSE is the same thing as broad Scots.","Scots has more differences in words and grammar. SSE has Standard English grammar."],
      ["SSE has Standard English grammar and vocabulary, with a Scottish accent and some Scottish words.","Right. SSE is the form that many educated Scots use in formal situations."],
      ["SSE is spoken only in Edinburgh.","It is spoken across Scotland."],
      ["SSE has no features that are different from SSBE.","SSE has its own sounds, such as rhoticity, and some Scottish words and grammar."]
    ]),
    {id:"e6u3-l3-x2", type:"sort", q:"Which view does each statement support? (Some points can be used by both sides, so read each reason.)", buckets:["Supports “Scots is a language”","Supports “Scots is a dialect”"], items:[
      {t:"It has had its own literature since the late 1300s.", b:0, why:"A long written tradition is a point for the language view (Ausbau)."},
      {t:"It is close to English in grammar and many words.", b:1, why:"Small linguistic distance (Abstand) is a point for the dialect view."},
      {t:"There is a large historical dictionary, the *Dictionary of the Scots Language*.", b:0, why:"A dictionary shows that people have built up a record of the variety."},
      {t:"Speakers move smoothly between Scots and Scottish English.", b:1, why:"A continuum with no sharp break is a point for the dialect view."},
      {t:"The UK recognized it in 2001 under the European Charter for Regional or Minority Languages.", b:0, why:"The Charter protects languages, so recognition is a point for the language view."},
      {t:"There is no single standard spelling that everyone uses.", b:1, why:"This is often used for the dialect view. The other side answers that many languages have had no standard spelling for a long time."}
    ]},
    M("e6u3-l3-x3","You will hear a speaker from Edinburgh. Most Scottish accents are rhotic, so listen for the *r* in *store*, *her* and *brother*. Which description is the typical pattern for most Scottish accents?",2,[
      ["The *r* is not pronounced after a vowel.","That is the non-rhotic pattern of SSBE and of most London speech."],
      ["The *r* is pronounced only in the word *brother*.","Rhotic accents pronounce the *r* in all of these words."],
      ["The *r* is usually pronounced after the vowel, often as a tap or an approximant.","Right. This is the rhotic pattern. The answer comes from the typical pattern, not from this one recording. Some speakers in the cities weaken the *r*, so notice what this speaker does."],
      ["The *r* is replaced by a long vowel in every word.","That is a description of non-rhotic accents."]
    ], {listen:"e6u3-l3-a3", hint:"Use what the lesson says about Scottish accents. Then listen, and focus only on the *r*. One speaker may not follow every typical pattern."}),
    {id:"e6u3-l3-x4", type:"number", q:"Use the simplified Scottish Vowel Length Rule. Among these six words, how many have a **long** vowel: *brood, brewed, leaf, leave, tide, tied*?", answer:3, tol:0, unit:"words", why:"The vowel is long before a voiced fricative (*leave*) and at the end of a morpheme (*brewed*, *tied*). It is short in *brood*, *leaf* and *tide*. So 3 words have a long vowel.", wrongs:[{v:2, tol:0, why:"Probably *tied* or *brewed* was counted as short. In both, the vowel is at the end of a morpheme (*tie* + *d*, *brew* + *ed*)."},{v:6, tol:0, why:"Half of the words are short. The rule makes a vowel long only in particular places."}], hint2:"Look for a voiced fricative after the vowel, or a suffix after the vowel."},
    {id:"e6u3-l3-x5", type:"match", q:"Match each word to its meaning.", pairs:[
      ["wee","Small","Also used in Northern Ireland and in parts of the north of England."],
      ["aye","Yes","Also heard in the north of England and in Northern Ireland."],
      ["bairn","A child","Used in Scots and in the north of England."],
      ["outwith","Outside of","Used in formal Scottish writing."],
      ["ken","To know","A Scots verb. A Scottish Standard English speaker would say *know*."]
    ]},
    {id:"e6u3-l3-x6", type:"spot", q:"Here are comments about rhoticity. Tap each comment that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"A rhotic accent pronounces the *r* after a vowel, as in *car*.", flag:false, why:"Correct. That is the definition."}, " ", {t:"Scottish speakers pronounce the *r* because they are more careful speakers than people in London.", flag:true, why:"Rhoticity is not about care. It is a feature that Scotland kept, and southern England lost."}, " ", {t:"Every speaker in Scotland uses the *r* in exactly the same way.", flag:true, why:"Speakers differ. Some use a tap, some an approximant, and some city speakers weaken it."}, " ", {t:"General American is rhotic too.", flag:false, why:"Correct. GA has the *r* after a vowel."}, "”"
    ]},
    {id:"e6u3-l3-x7", type:"order", q:"Put these events in the order in which they happened.", items:[
      {t:"John Barbour writes *The Brus* in Scots (about 1375)", why:"An early long poem in Scots."},
      {t:"The crowns of Scotland and England are united under one king (1603)", why:"One king ruled both countries, but they still had separate parliaments."},
      {t:"The parliaments are united (1707)", why:"The Acts of Union made one state, Great Britain."},
      {t:"Burns’s first book, the Kilmarnock edition, appears (1786)", why:"Scots verse becomes famous, long after the union."},
      {t:"The UK recognizes Scots under the European Charter (2001)", why:"This is the modern political step in the story."}
    ]},
    {id:"e6u3-l3-x8", type:"explain", q:"Your friend asks, “So is Scots a language or a dialect?” Give a fair answer that presents both views.", size:"4–6 sentences", prompt:"Some scholars say … Others say …", hint:"Use the ideas of Abstand and Ausbau, and say what the evidence is on each side.", points:["Gives the case for a language: history, literature, dictionary, Charter recognition","Gives the case for a dialect: closeness to English, continuum, no single standard spelling","Mentions Abstand and Ausbau or says the answer depends on the criteria","Says speakers’ names and identity matter"], model:"Some scholars say Scots is a language. It came from Northumbrian Old English, it has a long literature from the late 1300s, it has a large dictionary, and the UK recognized it under the European Charter in 2001. Others say it is a dialect of English. It is close to English in grammar and words, speakers move along a continuum, and there is no single standard spelling. Heinz Kloss’s ideas of Abstand and Ausbau explain why the two sides weigh the evidence differently. The choice also depends on politics and identity. A fair answer describes both and uses the name that speakers prefer."}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Look up five Scots words", how:[
       "Open the online *Dictionary of the Scots Language* (dsl.ac.uk) and search for *bairn, ken, wee, kirk* and *outwith*.",
       "For each word, write the meaning and one kind of use that the dictionary shows, such as a place or a period.",
       "Write one sentence that says whether you think the dictionary treats these as words of a separate language or a dialect, and why you think so."
     ], write:"bairn… ken… wee… kirk… outwith… My sentence…"},
     {t:"Listen for the r in two Scottish accents", how:[
       "Listen to the Edinburgh and Glasgow recordings.",
       "For the words *store*, *her* and *brother*, write whether you hear an *r* after the vowel, and what kind of *r* it is, if you can tell (a tap, a smooth sound, or nothing).",
       "Write one sentence that begins “From these two speakers I cannot say …”."
     ], write:"Edinburgh… Glasgow… From these two speakers I cannot say…"}
    ],
    proof:"A list of five Scots words with meanings, and a short note on the *r* in two speakers that does not claim to describe all of Scotland."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”", note:"The section helps with the idea that varieties differ in many dimensions at once."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u3-l4", title:"Welsh English and Irish English", minutes:55,
   hook:{q:"In Irish English, a speaker says, “I’m after eating.” What does the speaker mean?", options:["I am going to eat soon.","I have just eaten.","I am eating right now.","I never eat."], answer:1, reveal:"**I have just eaten.** The *after*-perfect is a regular feature of Irish English. It follows the pattern of the Irish language, and it expresses a recent event. A speaker who says it is using a rule of Irish English, and is not making a mistake."},
   goals:[
     "Describe how Welsh and Irish shaped Welsh English and Irish English, and say why Irish English grammar is not “learner English”",
     "Explain the *after*-perfect, habitual *do be* and *amn’t* with examples, and say what is debated about their origin",
     "Give examples of Hiberno-English and Welsh English words and say where they are used",
     "Describe what makes Northern Irish English different from English in the Republic of Ireland"
   ],
   learn:[
    {h:"Wales, the Republic of Ireland and Northern Ireland", body:[
      {lead:"English in Wales and in Ireland grew up beside older languages. Welsh and Irish are still spoken, and they have left marks on English."},
      "**Welsh** (Cymraeg) is a Celtic language. In the 2021 census of Wales, about 538,000 people aged three and over (17.8 percent) said that they could speak it. Most people in Wales speak English as their first language, and many of them also speak or know some Welsh. **Irish** (Gaeilge) is a Celtic language, closely related to Scottish Gaelic. The Irish constitution names Irish as the first official language of the Republic of Ireland and English as the second. In the 2022 census of the Republic, about 1.87 million people (40 percent of those aged three and over) said that they could speak Irish. Only about 72,000 said that they spoke it every day outside the education system.",
      "In both places, English is today the main language of most people’s daily life. The English they speak is a full variety with its own history. It is not a copy of English from England. This lesson looks at three varieties: **Welsh English**, **Irish English** (often called **[[we-hiberno-english|Hiberno-English]]**) and **Northern Irish English**. Hiberno comes from the Latin name for Ireland.",
      {tip:"Be careful with the words that people use for Ireland and Northern Ireland. The Republic of Ireland is an independent state. Northern Ireland is part of the United Kingdom. People in Northern Ireland have different ideas about their identity, and a neutral way is to say “Northern Ireland” and “the Republic of Ireland”."}
    ]},
    {h:"Welsh English", body:[
      {lead:"Welsh English is the English of Wales. It is spoken by people who also know Welsh and by many who do not."},
      "Robert Penhallurick (2008) and others describe a number of features. Many are connected to the Welsh language, but speakers who have no Welsh may use them too. The rhythm of many Welsh English speakers is often described as more even from syllable to syllable than in SSBE, a pattern linked to Welsh. The vowels of FACE and GOAT are often single vowels, as in many northern accents of England. Many speakers in the south of Wales do not pronounce the *r* after a vowel, so those accents are non-rhotic, and the *r* is often a tap. The consonant spelled *ll* in Welsh place names, as in *Llandudno*, is a sound that English does not have, [ɬ].",
      "Some grammar patterns are also reported. Speakers may use a short tag such as *isn’t it?* with many verbs, as in *You’re coming, isn’t it?*. Some speakers move a part of the sentence to the front, to give it emphasis, as in *Fed up I am*. Many speakers use both patterns only some of the time, and many never use them. A stereotype of “Welsh English” as a set of phrases is unfair, and linguists describe how often and how regularly a feature is used.",
      "Welsh gave English some words. *Cwtch* means a cuddle or a cozy place and comes from Welsh. It is widely used in the south of Wales. *Bach* (“small”, used as a friendly word for a person) is used in parts of Wales. *Tidy* is used in the south to mean “good” or “fine”, and *lush* means “lovely”, a word that is also used in England. Welsh place names are part of English in Wales, and the pronunciation of these names is taught in schools.",
      {ex:"Listen to a speaker from Cardiff reading the “Please call Stella” paragraph. Listen for the *r* after a vowel in words such as *store* and *her*. Listen to the rhythm and the vowels of *Stella* and *snake*. One speaker is one person, and Cardiff is only one part of Wales.", label:"Listen: Cardiff", listen:"e6u3-l4-a1"}
    ]},
    {h:"Irish English: a short history", body:[
      {lead:"English first reached Ireland in the Middle Ages, and it became the main language of most people only in the last 200 to 300 years."},
      "In 1169 Anglo-Norman knights landed in Ireland, and English and French speakers settled some areas. In 1366 the Statutes of Kilkenny tried to stop English settlers from using Irish and Irish customs, which shows that many settlers had in fact taken up the local language. In the 1500s and 1600s, England sent many new settlers. The Plantation of Ulster began in 1609, and it brought many speakers of English and of Scots to the north of Ireland.",
      "From the 1700s and especially the 1800s, many families who spoke Irish moved to English. The reasons included schooling in English, trade, emigration and the pressure of the state. The Great Famine of the 1840s caused death and emigration, and the loss of many speakers in the west, where Irish had been strongest. Speakers who switched passed on the habits of Irish grammar in the way they used English. This is the process of [[we-language-shift|language shift]], and it is one reason why Irish English has features that are not found in England.",
      "Today Irish is taught in school and used in the media, and there are communities, the Gaeltacht areas, where it is a community language. Most people in Ireland speak English as their daily language."
    ]},
    {h:"Three grammar features of Irish English", body:[
      {lead:"The grammar of Irish English is a regular system. Three features are often mentioned in teaching."},
      "**The [[we-after-perfect|*after*-perfect]].** *I’m after eating* means “I have just eaten”. It is used for a recent event, often one that has a clear result now: *She’s after losing her keys*. The pattern follows Irish, where *tá mé tar éis ithe* is built with *tar éis*, “after”. The Irish structure is on the left in the diagram, and the English one is on the right.",
      {fig:'<svg viewBox="0 0 340 300"><defs><marker id="e6u3b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">The after-perfect and its Irish pattern</text><rect class="d-sage" x="14" y="32" width="312" height="64" rx="8" stroke-width="2"/><text x="26" y="54">Irish: Tá mé tar éis ithe.</text><text class="s" x="26" y="74">is I after eating = I have just eaten</text><text class="s" x="26" y="90">(a word-for-word gloss)</text><path class="d-ink" d="M170 100V130" stroke-width="2" marker-end="url(#e6u3b)"/><text class="s" x="184" y="120">same pattern</text><rect class="d-gold" x="14" y="134" width="312" height="64" rx="8" stroke-width="2"/><text x="26" y="156">Irish English: I’m after eating.</text><text class="s" x="26" y="176">be + after + -ing = recent past</text><text class="s" x="26" y="192">(he is after leaving)</text><path class="d-ink" d="M170 202V232" stroke-width="2" marker-end="url(#e6u3b)"/><text class="s" x="184" y="222">compare</text><rect class="d-rose" x="14" y="236" width="312" height="52" rx="8" stroke-width="2"/><text x="26" y="258">Standard English: I have just eaten.</text><text class="s" x="26" y="278">present perfect + just</text></svg>', alt:"Three boxes connected by arrows. Top: the Irish sentence Tá mé tar éis ithe with a gloss, is I after eating. Middle: the Irish English sentence I’m after eating. Bottom: Standard English I have just eaten.", cap:"The after-perfect in Irish English follows a pattern that exists in Irish. Both mean a recent event."},
      "**Habitual [[we-habitual-do-be|*do be*]].** *He does be late on Fridays* and *They do be working in the evenings* mean that something is habitual: it happens again and again. It is different from *He’s late*, which is about now. The pattern is like the habitual form of the verb *to be* in Irish, *bíonn*. Scholars debate the source. Some stress the influence of Irish, and others point to features of English dialects in the south-west of England and of earlier English. Many scholars think that several sources acted together.",
      "**Amn’t.** Standard English has no short form for “am not” in questions with *I*. Some speakers use *aren’t I?*, and others say *am I not?*. Irish English (and Scottish English) uses [[we-amnt|*amn’t*]], as in *Amn’t I allowed in?* and *I amn’t ready*. It fills the gap in the system and follows the same pattern as *isn’t* and *aren’t*.",
      "Other features have been described too. One is *youse*, the plural of *you*. Another is *Sure* at the start of a sentence, as a friendly way to open a point. eWAVE ([[we-ewave|the atlas of features]]) records the *after*-perfect and habitual *do be* as features of Irish English. It also says how common they are. Speakers vary in how much they use them, and the features are more common in informal speech.",
      {warn:"The stage Irishman, a comic figure in old plays and cartoons, is a stereotype. It puts a mocking set of spellings and phrases in the mouths of Irish people. Nothing in this unit is a joke. The features are real, regular and used with skill by speakers of Irish English."}
    ]},
    {h:"Sounds and words of Irish English", body:[
      "Most accents in Ireland are rhotic. A well-known feature of many Irish accents is that /θ/ and /ð/ are made with the tongue touching the teeth as stops, so *three* and *this* sound like [t̪] and [d̪] plus the vowel. Many accents also have a clear *l* in all positions. The vowels of FACE and GOAT are often single vowels. Dublin English is changing. Raymond Hickey (2005) describes how younger speakers in Dublin have newer vowels, and the speech of Cork, Galway and the border area are also different from each other.",
      "Hiberno-English has many words, from Irish and from older English. *Grand* means “fine”, *craic* means “fun” or “good conversation” (from the Irish *craic*), a *press* is a cupboard, *messages* are the shopping, *the guards* are the police (*An Garda Síochána*), and *yoke* means “a thing”. Use these as examples of what is reported, not as a guide to how everyone talks.",
      {ex:"Listen to a speaker from Dublin reading the “Please call Stella” paragraph. Listen for the *r* in *store* and *her*, and for the *th* in *three* and *thick*. One speaker is one person, and Dublin has a range of accents.", label:"Listen: Dublin", listen:"e6u3-l4-a2"}
    ]},
    {h:"Northern Irish English", body:[
      {lead:"Northern Irish English has two main roots: the English of Ireland and the Scots that settlers brought."},
      "From 1609, many settlers from Scotland and the north of England came to Ulster. Their speech met the Irish-influenced English that was already there. Today Northern Irish English has features from both. It is rhotic. *Wee* and *aye* are common. Many speakers use *youse*. Many use rising intonation at the end of statements, a pattern that Jarman and Cruttenden (1976) described for Belfast. It does not mean that the speaker is asking a question.",
      "**[[we-ulster-scots|Ulster Scots]]** is spoken by some people in Northern Ireland and nearby parts of Donegal. It is related to Scots. Some call it a variety of Scots and some call it a language, and the disagreement is the same as in Lesson 3. The 1998 Belfast (Good Friday) Agreement named Ulster-Scots, with Irish, as part of the cultural wealth of the island of Ireland. In 2001 the UK recognized it under Part II of the European Charter for Regional or Minority Languages.",
      {ex:"Listen to a speaker from Belfast reading the same paragraph. Listen for the *r*, for the rhythm and for the rise and fall at the ends of sentences. Do not rank the speaker against the others you have heard.", label:"Listen: Belfast", listen:"e6u3-l4-a3"}
    ]}
   ],
   try:[
    M("e6u3-l4-x1","In Irish English, *She’s after losing her keys* is a regular sentence. What does it mean?",1,[
      ["She is going to lose her keys.","The *after*-perfect is about a recent past event, not the future."],
      ["She has just lost her keys.","Right. It is the *after*-perfect, a regular feature of Irish English."],
      ["She loses her keys every day.","A habitual meaning is expressed by *does be* and not by *after*."],
      ["She never loses her keys.","The sentence says that she lost them, not that she never does."]
    ]),
    {id:"e6u3-l4-x2", type:"sort", q:"Which Irish English feature does each sentence show?", buckets:["*after*-perfect","Habitual *do be*","*Amn’t*"], items:[
      {t:"She’s after finishing the report.", b:0, why:"*Be* plus *after* plus *-ing* means “has just finished”."},
      {t:"They do be late on Fridays.", b:1, why:"*Do be* shows something that happens again and again."},
      {t:"Amn’t I allowed in?", b:2, why:"*Amn’t* is the short form of “am not” in a question."},
      {t:"I’m after losing my keys.", b:0, why:"*I’m after* plus *-ing* is the *after*-perfect."},
      {t:"He does be on the bus at eight.", b:1, why:"*Does be* is the habitual form, “he is usually on the bus”."},
      {t:"I amn’t ready yet.", b:2, why:"*Amn’t* appears in statements as well as in questions."}
    ]},
    {id:"e6u3-l4-x3", type:"match", q:"Match each word to its meaning. These are examples of what is reported, and not every speaker uses them.", pairs:[
      ["cwtch","A cuddle or a cozy place","From Welsh, widely used in the south of Wales."],
      ["press","A cupboard","Reported in Irish English."],
      ["messages","Shopping, such as groceries","Reported in Irish English, for example “I’m going for the messages”."],
      ["the guards","The police in the Republic of Ireland","From the name An Garda Síochána."],
      ["craic","Fun, or good conversation","From Irish, used widely in Ireland."]
    ]},
    M("e6u3-l4-x4","You will hear a speaker from Dublin. Most accents in Ireland are rhotic, so listen for the *r* in *store*, *her* and *brother*. Which description is the typical pattern for most accents of Ireland?",0,[
      ["The *r* is usually pronounced after the vowel. Irish accents are mostly rhotic.","Right. Rhoticity is the common pattern in Ireland. The answer comes from the typical pattern, not from this one recording. Dublin has a range of accents, so notice what this speaker does."],
      ["The *r* is never pronounced, as in London.","That is the non-rhotic pattern. Most Irish accents are rhotic."],
      ["The *r* is pronounced only at the start of words.","Rhotic accents pronounce it after a vowel as well."],
      ["The *r* is replaced by a glottal stop.","A glottal stop is related to /t/, not to /r/."]
    ], {listen:"e6u3-l4-a4", hint:"Use what the lesson says about accents in Ireland. Then listen and compare. One speaker may not follow every typical pattern."}),
    {id:"e6u3-l4-x5", type:"spot", q:"A student wrote these notes about Irish English. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"*I’m after eating* is a mistake that comes from learners translating from Irish.", flag:true, why:"It is a regular feature of Irish English, used by native speakers of English and recorded in eWAVE."}, " ", {t:"*Do be* shows a habitual action.", flag:false, why:"Correct. *He does be late* means he is often late."}, " ", {t:"All of the features come only from the Irish language.", flag:true, why:"The origin of some features is debated. Some may come from Irish, some from English dialects and some from both."}, " ", {t:"Everyone in Ireland uses these features all the time.", flag:true, why:"Speakers vary, and the features are more common in informal speech."}, " ", {t:"*Amn’t* is also used in Scottish English.", flag:false, why:"Correct. It is not only Irish."}, "”"
    ]},
    {id:"e6u3-l4-x6", type:"number", q:"The Statutes of Kilkenny were made in 1366, and the Plantation of Ulster began in 1609. How many years were there between the two?", answer:243, tol:0, unit:"years", why:"1609 − 1366 = 243 years.", wrongs:[{v:253, tol:0, why:"This is 10 too many. Check the subtraction: 1609 − 1366."},{v:343, tol:0, why:"This is 100 too many. Subtract 1300 first (309), then 66 (243)."}], hint2:"Subtract the earlier year from the later year."},
    M("e6u3-l4-x7","Which statement about Welsh English is the most accurate?",2,[
      ["It is English spoken badly by people who speak Welsh.","Most people in Wales speak English as a first language, and Welsh English is a full variety."],
      ["It is the same as English in the north of England.","They share some features, but they have different histories."],
      ["It is the English of Wales. It has features that are linked to Welsh, and it is used by people with and without Welsh.","Right. The influence of Welsh is real, but a speaker does not need to know Welsh to use the variety."],
      ["It is Welsh with a few English words.","That is not Welsh English."]
    ]),
    {id:"e6u3-l4-x8", type:"explain", q:"Explain the difference between *He’s late* and *He does be late* in Irish English. Say why the second is not a mistake.", size:"3–4 sentences", prompt:"*He’s late* means …, and *He does be late* means …", hint:"Think about now and habit, and about what a regular feature means.", points:["Says *He’s late* is about now","Says *He does be late* is habitual, again and again","Says it is a regular feature of Irish English, like the Irish habitual form","Mentions that the origin is debated"], model:"*He’s late* is about now: he is late at this moment. *He does be late* is habitual: he is late again and again. Irish English has this form as a regular part of its grammar, and it is similar to the habitual form of the verb *to be* in Irish. Scholars disagree about whether the source is only Irish or also English dialects. Because it is a rule used in a regular way, it is a feature of a variety and not a mistake."}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Find the features in eWAVE", how:[
       "Open the Electronic World Atlas of Varieties of English (ewave-atlas.org) and look for a variety such as Irish English or Welsh English.",
       "Find two grammar features that the atlas lists for that variety, and write their names and the example sentence.",
       "Write one sentence that explains each feature in your own words."
     ], write:"Variety… Feature 1… Example… Feature 2… Example…"},
     {t:"Describe three speakers, no ranking", how:[
       "Listen to the Cardiff, Dublin and Belfast recordings.",
       "For each speaker, write one sentence about the *r* and one sentence about rhythm or the vowels, using only words that describe sounds.",
       "Add the sentence “One speaker is one person.” at the end."
     ], write:"Cardiff… Dublin… Belfast… One speaker is one person."}
    ],
    proof:"Two eWAVE features with examples in your own words, and three short descriptions of speakers that describe sounds only."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.3 “Language changes”", note:"The section shows how change spreads, which helps with the story of how English came to Ireland and changed there."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u3-l5", title:"Listening lab: one paragraph, seven voices", minutes:55,
   hook:{q:"Suppose you listen to one speaker from Glasgow and notice that she pronounces the *r* after vowels. Which conclusion is the best supported?", options:["All people in Glasgow pronounce the *r* in exactly the same way.","This speaker pronounces the *r*, which matches the typical pattern in Scotland. It does not prove that every speaker does.","Scottish people are easier to understand than English people.","Her accent is better than a London accent."], answer:1, reveal:"**This speaker matches the typical pattern, and no more can be said.** One speaker is one person. A careful listener describes what is heard, compares it with what research says is typical, and does not rank accents."},
   goals:[
     "Use a simple listening routine: gist first, then one feature, then a careful claim",
     "Recognize rhoticity, the BATH vowel and vowel length in short recordings, and say what each pattern is typical of",
     "Write a claim about a speaker that is hedged and kept to the evidence",
     "Explain why listeners should describe and not rank accents"
   ],
   learn:[
    {h:"The same paragraph in seven voices", body:[
      {lead:"In this lesson you listen to seven real people. Each reads the same short paragraph, so differences in sound are not differences in words."},
      "The recordings come from the [[we-speech-accent-archive|Speech Accent Archive]], a free collection at George Mason University that was built by Steven Weinberger. Each speaker reads the paragraph “Please call Stella…”. The paragraph was written to contain most of the sounds of English. The recordings are shared under a Creative Commons license (CC BY-NC-SA 4.0), and the credit for each one appears beside its Listen button.",
      "The seven speakers are a speaker from London (22, female), Manchester (20, female), Edinburgh (35, male), Glasgow (22, female), Cardiff (20, female), Dublin (22, female) and Belfast (22, female). They are seven people, not seven regions. They read a text aloud, which is different from talking with friends. They differ in age and sex, and in how much they moved in their lives. Listening to them teaches you what to listen for. It does not give you facts about a whole region.",
      {tip:"The paragraph, for reference: “Please call Stella. Ask her to bring these things with her from the store: six spoons of fresh snow peas, five thick slabs of blue cheese, and maybe a snack for her brother Bob. We also need a small plastic snake and a big toy frog for the kids. She can scoop these things into three red bags, and we will go meet her Wednesday at the train station.”"}
    ]},
    {h:"What to listen for", body:[
      {lead:"A feature is easier to hear when you know which words to listen to."},
      {table:[["Feature","Listen to these words","Typical pattern"],["*r* after a vowel (rhoticity)","store, her, for, brother","Pronounced in Scotland, Ireland and Northern Ireland. Usually not in London, Manchester and southern Wales."],["BATH vowel","ask (compare snack, bags)","Long in the south of England, short in much of the north."],["Glottal stop for /t/","meet her, at the, plastic","Heard in many accents in Britain, in different amounts."],["Vowel length","peas, cheese, please (compare meet)","In many Scottish accents, longer before a voiced fricative such as /z/."],["*th* sounds","three, thick, these, brother","In many accents of Ireland, made with the tongue on the teeth as stops. In London, often /f/ or /v/."],["Intonation","the end of each sentence","Rising at the end of statements is common in Northern Ireland."]]},
      "These are typical patterns, not rules. A young speaker may have fewer local features than an older speaker. A person who has lived in several places may have a mixed accent. Reading aloud can make a speaker more careful than normal. If you hear a feature, write it. If you do not hear it, write that too. A missing feature is still a good observation.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e6u3c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">A listening routine</text><rect class="d-sage" x="30" y="30" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="52" text-anchor="middle">1  Listen for the message</text><text class="s" x="170" y="68" text-anchor="middle">What is being said? No judging yet.</text><path class="d-ink" d="M170 78V92" stroke-width="2" marker-end="url(#e6u3c)"/><rect class="d-gold" x="30" y="96" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="118" text-anchor="middle">2  Choose one feature</text><text class="s" x="170" y="134" text-anchor="middle">For example the r in store and her.</text><path class="d-ink" d="M170 144V158" stroke-width="2" marker-end="url(#e6u3c)"/><rect class="d-rose" x="30" y="162" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="184" text-anchor="middle">3  Listen again to its words</text><text class="s" x="170" y="200" text-anchor="middle">Write only what you hear.</text><path class="d-ink" d="M170 210V224" stroke-width="2" marker-end="url(#e6u3c)"/><rect class="d-soft" x="30" y="228" width="280" height="44" rx="8" stroke-width="2"/><text x="170" y="250" text-anchor="middle">4  Write a careful claim</text><text class="s" x="170" y="266" text-anchor="middle">This speaker … Typical … One speaker.</text><text class="s" x="170" y="300" text-anchor="middle">Describe. Do not rank.</text></svg>', alt:"Four boxes joined by arrows: 1 Listen for the message, 2 Choose one feature, 3 Listen again to its words, 4 Write a careful claim. A line below says describe, do not rank.", cap:"A routine for a listening task. The first step is the message, and the last step is a claim with limits."}
    ]},
    {h:"Seven recordings", body:[
      "Listen to each recording at least twice. First listen for the message. Then use the table in the last section to choose one feature. Write short notes in your own words. The notes for each speaker below say only what to try. The recordings may show a feature clearly, a little or not at all.",
      {ex:"A speaker from London. Try the *r* in *store*, *her* and *brother*, and the vowel in *ask*. Are there any glottal stops?", label:"Speaker 1: London", listen:"e6u3-l5-a1"},
      {ex:"A speaker from Manchester. Try the *r*, and compare the vowel in *ask* with the vowel in *snack* and *bags*.", label:"Speaker 2: Manchester", listen:"e6u3-l5-a2"},
      {ex:"A speaker from Edinburgh. Try the *r* in *store* and *her*. Listen to the length of the vowel in *peas* and *cheese*.", label:"Speaker 3: Edinburgh", listen:"e6u3-l5-a3"},
      {ex:"A speaker from Glasgow. Try the same words as for Edinburgh, and then compare the rhythm of the two speakers.", label:"Speaker 4: Glasgow", listen:"e6u3-l5-a4"},
      {ex:"A speaker from Cardiff. Try the *r* after a vowel, and listen to the rhythm of the sentences.", label:"Speaker 5: Cardiff", listen:"e6u3-l5-a5"},
      {ex:"A speaker from Dublin. Try the *r*, and the *th* in *three* and *thick*.", label:"Speaker 6: Dublin", listen:"e6u3-l5-a6"},
      {ex:"A speaker from Belfast. Try the *r*, and the rise and fall at the ends of sentences.", label:"Speaker 7: Belfast", listen:"e6u3-l5-a7"},
      "When you have listened to all seven, you will probably find that some features were easy to hear and some were not. This is normal. Linguists use recordings, software and many speakers to be sure of a pattern. Your task here is to learn to listen, not to prove a theory."
    ]},
    {h:"Describe, do not rank", body:[
      {lead:"People often judge speakers by accent, and the judgments are not fair or accurate."},
      "Attitude studies, beginning with work by Howard Giles and others in the 1970s, found that listeners rated speakers with RP as higher in status and speakers with regional accents as lower in status, though often as warmer or friendlier. The speaker’s skill, education or honesty has nothing to do with these ratings. They are the listeners’ own biases about accents. Unit 9 comes back to this.",
      "In this unit, a good observation says what you hear (“I hear a tapped *r* in *store*”). A poor observation judges (“a strong accent”, “hard to understand”, “posh”, “rough”). If a recording is hard to follow, say so as a fact about your own listening (“I needed two listenings”) and not as a fact about the speaker. Familiarity matters, as Unit 1 explained.",
      "Mariya Seto, a Japanese student of English interpreting, trains to follow many kinds of speakers. A useful habit for a listener in her position is to listen for the gist first and to name one feature on the second listening. Interpreters meet many accents at work, and the habit makes an unfamiliar accent less of a surprise.",
      {key:"A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person."}
    ]},
    {h:"From a recording to a careful claim", body:[
      "Here are three levels of claim about a speaker from Dublin. Suppose a listener hears the *r* after vowels. The claims are examples of form. They do not report what the recording in this lesson shows, so write your own from what you hear.",
      {list:["**Too strong:** “Dublin people pronounce every *r*.” One speaker cannot show this, and some Dublin speakers vary.","**Better:** “This speaker from Dublin pronounces the *r* after vowels.” It says what was heard.","**Best:** “This speaker from Dublin pronounces the *r* after vowels, which matches the typical pattern in Ireland. One speaker cannot tell us about every Dubliner.”"]},
      "You can use the same pattern for any feature. Notice that the best claim does not say anything about whether the speaker is easy or difficult to understand. When you cannot hear a feature, write “I did not hear …”. When two accents sound alike in one feature, write “These two speakers are alike in this feature, and different in …”.",
      "To finish, here is how the seven places usually differ for the *r*. London, Manchester and Cardiff are usually non-rhotic. Edinburgh, Glasgow, Dublin and Belfast are usually rhotic. Within the rhotic group, the *r* is not the same sound everywhere, and you may be able to hear some of those differences. Within the non-rhotic group, the vowels are not the same either. That is why a single feature never defines an accent."
    ]}
   ],
   try:[
    M("e6u3-l5-x1","Which of these is the most careful claim about a recording?",2,[
      ["“Scottish people say the *r* better.”","This ranks accents, and *better* has no meaning for an accent."],
      ["“All people in Cardiff are non-rhotic.”","One speaker cannot show this, and some speakers vary."],
      ["“This speaker from Belfast pronounces the *r* after vowels, which matches the typical pattern in Northern Ireland. One speaker is one person.”","Right. It says what was heard, compares it with the typical pattern and adds a limit."],
      ["“The Manchester speaker has a lazy accent.”","*Lazy* is a judgment. It does not describe a sound."]
    ]),
    {id:"e6u3-l5-x2", type:"sort", q:"Where is the *r* after a vowel (as in *store* and *her*) typically pronounced? Sort the places by the usual pattern.", buckets:["Usually rhotic","Usually non-rhotic"], items:[
      {t:"Edinburgh", b:0, why:"Most Scottish accents are rhotic."},
      {t:"London", b:1, why:"London speech is usually non-rhotic."},
      {t:"Dublin", b:0, why:"Most accents in Ireland are rhotic."},
      {t:"Manchester", b:1, why:"Manchester speech is usually non-rhotic."},
      {t:"Belfast", b:0, why:"Northern Irish English is rhotic."},
      {t:"Cardiff", b:1, why:"English in the south of Wales is usually non-rhotic."},
      {t:"Glasgow", b:0, why:"Glasgow speech is usually rhotic. Some city speakers weaken the *r*, so the pattern has exceptions."}
    ]},
    M("e6u3-l5-x3","Listen to this speaker from Glasgow, and listen for the *r* in *store* and *her*. Whatever you hear, which statement is the most careful way to report it?",1,[
      ["Glasgow speakers have no glottal stops.","One speaker cannot show this, and glottal stops are common in the cities of Scotland."],
      ["If this speaker pronounces the *r* in *store* and *her*, that matches the typical pattern in Scotland, and it describes one speaker only.","Right. It describes what is heard, compares it with the typical pattern and adds a limit."],
      ["This speaker is hard to understand, so Scottish English is hard to understand.","Difficulty depends on the listener’s experience too. One listener’s difficulty is not a fact about a variety."],
      ["This speaker sounds the same as the Edinburgh speaker.","Two speakers from two cities rarely sound the same, and the question here is about careful claims."]
    ], {listen:"e6u3-l5-a8", hint:"Listen more than once. The right answer does not depend on what this speaker does. Choose the claim that stays within the evidence. If you hear a weak *r* or none, that is a good observation too."}),
    {id:"e6u3-l5-x4", type:"match", q:"Match each feature to the words in the paragraph where you can listen for it.", pairs:[
      ["*r* after a vowel","store, her, for, brother","These words have an *r* after a vowel in the spelling."],
      ["BATH vowel","ask","*Ask* is in the BATH set. Compare it with *snack* and *bags*."],
      ["Glottal stop for /t/","meet her, at the","A /t/ at the end of a word before another word is where many speakers use a glottal stop."],
      ["Vowel length in many Scottish accents","peas, cheese, please","The vowel is before /z/, a voiced fricative."],
      ["*th* sounds","three, thick, these","These words start with /θ/ or /ð/."]
    ]},
    {id:"e6u3-l5-x5", type:"order", q:"Put the steps of the listening routine in the best order.", items:[
      {t:"Listen once for the message, without judging", why:"First understand what is said. Features are easier to hear after that."},
      {t:"Choose one feature to listen for", why:"Listening for one thing is easier than listening for everything."},
      {t:"Listen again to the words that show the feature", why:"A feature is easiest to hear in the right words."},
      {t:"Write what you heard in plain words", why:"A written note keeps you from remembering what you expected to hear."},
      {t:"Write a claim that says what is typical and that one speaker is one person", why:"The last step gives the claim its limits."}
    ]},
    {id:"e6u3-l5-x6", type:"number", q:"The seven speakers come from London, Manchester, Edinburgh, Glasgow, Cardiff, Dublin and Belfast. How many of these places are **usually rhotic**?", answer:4, tol:0, unit:"places", why:"Edinburgh, Glasgow, Dublin and Belfast are usually rhotic. London, Manchester and Cardiff are usually non-rhotic. So the answer is 4.", wrongs:[{v:3, tol:0, why:"This is the number of non-rhotic places. The question asks about rhotic places."},{v:5, tol:0, why:"Check Cardiff. English in the south of Wales is usually non-rhotic."}], hint2:"Count the places in Scotland, Ireland and Northern Ireland."},
    {id:"e6u3-l5-x7", type:"spot", q:"A classmate writes these notes after the listening lab. Tap each note that **ranks, overgeneralizes or judges**.", ask:"ranks or overgeneralizes", parts:[
      "“", {t:"The Edinburgh speaker has a nicer accent than the Manchester speaker.", flag:true, why:"This ranks two accents. *Nicer* is a personal reaction, not a description."}, " ", {t:"I did not hear any glottal stops in the Cardiff recording.", flag:false, why:"Fine. This note reports what the classmate heard, and a missing feature is still a good observation."}, " ", {t:"Everyone from Belfast raises their voice at the end of a sentence.", flag:true, why:"This overgeneralizes. Rising intonation is common in Northern Ireland, but not every speaker uses it every time."}, " ", {t:"The London speaker did not pronounce the *r* in *store*.", flag:false, why:"Fine. This note reports what the classmate heard about one speaker, and it does not rank or judge."}, "”"
    ]},
    {id:"e6u3-l5-x8", type:"explain", q:"Mariya, a Japanese student of English interpreting, will practice with recordings of speakers from several places in Britain and Ireland. Give her a short plan for listening that is useful and respectful.", size:"4–6 sentences", prompt:"Mariya could start by …", hint:"Use the routine from this lesson: gist, one feature, careful claim. Say what to avoid.", points:["Starts by listening for the message","Chooses one feature and listens to its words","Writes only what she hears, without judging words","Adds the limit that one speaker is one person"], model:"Mariya could start by listening for the message and writing the gist. On a second listening, she can choose one feature, such as the *r* after a vowel, and listen to the words that show it. She should write only what she hears, in plain words, and avoid words such as *good*, *bad* or *strong*. Her claim should say what this speaker does, what is typical in the place, and that one speaker is one person. If a speaker is hard to follow, she can note that she needed more listening, and she can practice with the same accent again, because familiarity helps."}
   ],
   apply:{
    intro:"These tasks use the recordings in this lesson and one free website. Nothing needs an account.",
    tasks:[
     {t:"Make a listening table", how:[
       "Make a table with seven rows, one for each speaker, and three columns: *r* after a vowel, the vowel in *ask*, and one more feature of your choice.",
       "Listen to each recording twice. Write only what you hear, such as “r pronounced”, “short vowel” or “not sure”.",
       "Write two sentences about your table. Use the words *typical* and *one speaker*."
     ], write:"My table… Two sentences with typical and one speaker…"},
     {t:"Hear another speaker", how:[
       "Open the Speech Accent Archive (accent.gmu.edu) and search for a speaker from another part of England, Scotland, Wales or Ireland.",
       "Listen to the same paragraph. Write one feature that you noticed, and say whether it matches what you learned.",
       "Check the speaker’s notes on the archive page, and write the place and age."
     ], write:"Speaker… Place and age… One feature I noticed… Does it match what is typical?"}
    ],
    proof:"A completed table of seven speakers with careful notes, two sentences that use typical and one speaker, and a note about one extra speaker from the archive."
   },
   read:[
    {book:"eling", where:"Chapter 3, Phonetics, section 3.5 “Describing vowels”", note:"Read it before the lab if you want to describe vowels with technical terms, such as front, back, high and low."}
   ]
  }
  ],
  checkpoint:["e6u3-q03","e6u3-q08","e6u3-q11","e6u3-q15","e6u3-q20","e6u3-q23","e6u3-q26","e6u3-q29","e6u3-q33","e6u3-q36","e6u3-q40","e6u3-q44"],
  cpBank:[
   Q("e6u3-cp01","e6u3-l1",1,"Which statement about RP and Standard English is correct?",2,[
     ["They are the same thing, because RP is the standard.","RP is an accent. Standard English is grammar and vocabulary."],
     ["RP is a dialect of Scotland.","RP is not tied to Scotland. It is linked to class and education in England."],
     ["RP is an accent, and Standard English is a form of grammar and vocabulary. A person can have one without the other.","Right. A person can speak Standard English with any accent."],
     ["Standard English can be spoken only with an RP accent.","Standard English is spoken with many accents."]]),
   Q("e6u3-cp02","e6u3-l1",2,"Maya hears a speaker say *bottle* with a glottal stop and *think* as *fink*. A friend says, “That’s just Estuary English.” What is the best reply?",1,[
     ["“Right. Those two features prove that she speaks a separate language.”","Neither feature proves that, and Estuary English is not a separate language."],
     ["“She has two features that are common in the southeast. The label is debated, so it is clearer to name the features.”","Right. Naming the features is more exact than using a debated label."],
     ["“Nobody really speaks like that.”","Many people do. Both features are common."],
     ["“It is lazy speech, and she should change it.”","This is a judgment, and it is not a description of the sounds."]]),
   Q("e6u3-cp03","e6u3-l1",1,"Wells (1982) used names such as TRAP and BATH for groups of words. What are these groups called?",0,[
     ["Lexical sets","Right. Each set shares a vowel, and a key word names it."],
     ["Isoglosses","An isogloss is a line on a map where a feature changes."],
     ["Dialect continua","A continuum is a scale of varieties with no clear break."],
     ["Minimal pairs","Minimal pairs are two words that differ by one sound."]]),
   Q("e6u3-cp04","e6u3-l2",2,"A speaker has the same vowel in *bath* and *trap*, and the same vowel in *put* and *cut*. Which statement is the most accurate?",3,[
     ["The speaker has learned two vowels wrongly.","These are regular patterns of many northern accents."],
     ["The speaker must be from the south of England.","The southern accents have both splits."],
     ["The speaker is from Scotland, because only Scottish accents have these mergers.","Many northern accents of England have both mergers, and so do some Scottish accents."],
     ["The speaker is likely to be from the north or the Midlands of England, which have no BATH–TRAP split and no FOOT–STRUT split in many accents.","Right. These are typical northern patterns, though one speaker can only suggest a region."]]),
   Q("e6u3-cp05","e6u3-l2",1,"Which word is in the BATH lexical set?",1,[
     ["gas","*Gas* has /æ/ in SSBE, so it is a TRAP word."],
     ["path","Right. *Path* has /ɑː/ in SSBE."],
     ["hat","*Hat* has the TRAP vowel."],
     ["lamp","*Lamp* has /æ/."]]),
   Q("e6u3-cp06","e6u3-l2",3,"In a study of teenagers, a speaker uses *we was* with friends and *we were* with a teacher. What does this show?",2,[
     ["The speaker does not know the rule.","The speaker uses each form in a regular way for each situation."],
     ["The speaker is lying to the teacher.","Style-shifting is normal, and it is not lying."],
     ["The speaker has a regular dialect feature and moves between forms depending on the situation.","Right. Cheshire (1982) showed this kind of pattern."],
     ["Nobody in England uses *we was*.","It is documented in many places in England."]]),
   Q("e6u3-cp07","e6u3-l3",2,"Which word pair is long and short in many Scottish accents, following the simplified Scottish Vowel Length Rule?",0,[
     ["*leave* (long) and *leaf* (short)","Right. The vowel is longer before the voiced fricative /v/."],
     ["*tide* (long) and *tied* (short)","It is the other way around: *tied* has the long vowel."],
     ["*brewed* (short) and *brood* (long)","*Brewed* has the long vowel, at the end of a morpheme."],
     ["*leaf* (long) and *leave* (short)","*Leave* is long before /v/."]]),
   Q("e6u3-cp08","e6u3-l3",3,"A teacher says, “Scots is only slang, and it is not a real language.” Which reply is the fairest?",1,[
     ["“You are right. Scots has no history.”","Scots has a long literary history."],
     ["“Scholars disagree. Some call Scots a language, with a literature, a dictionary and Charter recognition. Others see a dialect on a continuum with English. Neither view calls it slang.”","Right. It presents both views and the evidence."],
     ["“Scots is a language, and the other view is not worth discussing.”","Serious scholars hold the dialect view too."],
     ["“Nobody speaks Scots today.”","About 1.5 million people said in the 2011 census that they could speak it, though that figure needs care."]]),
   Q("e6u3-cp09","e6u3-l4",1,"What does the Irish English sentence *They do be working late on Fridays* mean?",2,[
     ["They are working now.","That would be *They’re working*."],
     ["They will work late soon.","The sentence is not about the future."],
     ["They usually work late on Fridays.","Right. *Do be* marks a habit."],
     ["They have just finished work.","That would be the *after*-perfect."]]),
   Q("e6u3-cp10","e6u3-l4",2,"Dylan reads that *amn’t* is used in Irish English and Scottish English. What does *amn’t* do in grammar?",1,[
     ["It is a short form of “have not”.","The short form of “have not” is *haven’t*."],
     ["It is a short form of “am not” that fills a gap, as in *Amn’t I allowed?*","Right. *Isn’t* and *aren’t* exist, and *amn’t* completes the set."],
     ["It means “I am never”.","It is a short form, not a different meaning."],
     ["It is used only by learners of English.","It is a feature of native speakers in Ireland and Scotland."]]),
   Q("e6u3-cp11","e6u3-l5",2,"A listener hears a speaker from Cardiff and writes, “This speaker did not pronounce the *r* in *store* or *her*.” Which comment is correct?",0,[
     ["It is a good observation if it is what the listener heard. It describes one speaker.","Right. It describes a feature and does not rank the speaker."],
     ["It is wrong, because all Welsh speakers pronounce the *r*.","Many speakers of Welsh English in the south are non-rhotic."],
     ["It proves that no one in Wales pronounces the *r*.","One speaker cannot prove that."],
     ["It means the speaker has an incorrect accent.","An accent is not incorrect."]]),
   Q("e6u3-cp12","e6u3-l5",3,"Mariya, a Japanese student of English interpreting, hears a classmate say, “I could not follow the Glasgow speaker, so Glasgow English is too hard to understand.” What is the best response?",3,[
     ["“You are right. It is hard for everyone.”","Difficulty depends on the listener’s experience, and not everyone finds it hard."],
     ["“Do not listen to it again.”","Repeated listening and exposure help."],
     ["“Glasgow speakers should change.”","Nobody needs to change an accent so that a listener can follow it."],
     ["“It was hard for you this time. Understanding depends on the listener too, so listen again for the message first and then for one feature.”","Right. It keeps the difficulty with the listener’s experience and suggests a useful strategy."]])
  ],
  codex:[
   {id:"we-rp-ssbe", title:"RP, SSBE and Estuary English", aka:["Received Pronunciation","Southern Standard British English","Estuary English"], tags:["world englishes","britain"],
    summary:"RP is an accent tied to class and education, SSBE is a reference accent for describing southern British English, and Estuary English is a debated label for features of the southeast.",
    levels:{
     starter:[
      "**Received Pronunciation (RP)** is an accent of English. It is linked to social class and education and not to one region. The name comes from the 1800s, when *received* meant “accepted in good society”. Only a small minority of people in Britain speak it, and estimates are rough.",
      "RP is an accent and not a kind of grammar. **Standard English** is a form of grammar and vocabulary that anyone can use with any accent. Linguists use a modern form of RP, **Southern Standard British English (SSBE)**, as a reference accent when they compare British and American English. Dictionaries show it as the “UK” pronunciation.",
      "**Estuary English** is a name for some features that spread in the southeast of England, near the River Thames. The label is debated. Many linguists prefer to describe the features, such as T-glottaling, and to say that speech in the southeast is a scale and not a set of boxes.",
      {key:"RP is an accent with a social history. It is not the correct English and it is not the English of all of Britain."}
     ],
     builder:[
      "A. J. Ellis used the phrase in 1869. Daniel Jones called the accent “Public School Pronunciation” in 1917 and adopted “Received Pronunciation” in a later edition, in 1926. A. C. Gimson (1962) described conservative, general and advanced RP. Geoff Lindsey (2019) argues that the label RP is out of date and prefers Standard Southern British (SSB).",
      {table:[["Lexical set","SSBE","GA"],["TRAP","æ","æ"],["BATH","ɑː","æ"],["LOT","ɒ","ɑ"],["NURSE","ɜː","ɝ"],["GOAT","əʊ","oʊ"]]},
      "SSBE is non-rhotic. Features that are common in London and the southeast include T-glottaling, TH-fronting, L-vocalization and H-dropping. Anne Fabricius (2002) described glottal stops spreading among young speakers with RP-like accents. David Rosewarne used the name Estuary English in 1984. Multicultural London English, described by Cheshire, Kerswill and colleagues (2011), formed through contact among speakers of many backgrounds.",
      "To describe a speaker, name the features you hear and avoid a label that is debated."
     ],
     pro:[
      "The relation between RP and Standard English is often confused. Trudgill has argued that Standard English is a dialect that can be spoken with any accent, and that the share of people in Britain with an RP accent is small: his rough estimate in 1974 was about 3 percent. That figure is old and has been questioned, and the definition of RP matters a great deal.",
      "RP is non-regional in the sense that it does not point to a place, but it is mostly a southern accent in its history. Gimson’s three types show change over time: conservative RP is older, and advanced RP has newer features, such as a lower TRAP vowel, closer to [a], in younger speech. These descriptions use a scale and not categories.",
      "On Estuary English, the main positions are as follows. Rosewarne (1984) and Coggle (1993) presented it as a new accent. Altendorf (2003) studied features in the southeast and found a leveling of speech between RP and London. Others argue that the same facts are part of the continuum that has always existed between London speech and RP, and that the media made the label popular. In teaching, a label should not replace an account of the features.",
      "Cross-link: How English Works Unit 2 gives the vowel charts of SSBE and GA. Unit 9 of this course returns to attitudes to accents."
     ]},
    related:["we-north-south-england","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.7 “Sociolinguistic correlations: Social status”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-north-south-england", title:"The north–south divide in English accents", aka:["BATH–TRAP split","FOOT–STRUT split"], tags:["world englishes","britain"],
    summary:"Many accents in the south of England have a BATH–TRAP split and a FOOT–STRUT split, and many accents in the north have neither. The divide is a transition zone and not a wall.",
    levels:{
     starter:[
      "In England, accents in the south and in the north differ in some vowels. Two differences are famous. In the south, *bath* has a long back vowel and *trap* has a short front vowel. In much of the north, both words have the same short vowel. In the south, *put* and *putt* have different vowels. In much of the north, they have the same vowel.",
      "The northern pattern is the older one. The southern pattern is a change that began in the south in the 1600s and 1700s and did not reach the north.",
      "A speaker from the north is not “missing” a vowel. Both systems are regular. The “line” between north and south is a wide zone in the Midlands, where speakers have one feature and not the other.",
      {key:"Different does not mean wrong. Each accent is a regular system with its own history."}
     ],
     builder:[
      "Wells (1982) used lexical sets to describe the differences. BATH words, such as *bath, grass, last, dance, path* and *ask*, have /ɑː/ in SSBE and /a/ in much of the north. The set is a list, and not a rule: *gas* has /æ/ in SSBE even though *grass* has /ɑː/.",
      {table:[["Set","Southern England","Much of the north"],["TRAP","æ","a"],["BATH","ɑː","a"],["FOOT","ʊ","ʊ"],["STRUT","ʌ","ʊ"]]},
      "Other northern features include single vowels in FACE and GOAT in many accents, and, in traditional speech in places, a very short form of *the*. Grammar features of dialects in England include was/were leveling, *never* as a past negator, multiple negation and *them* as a demonstrative. Cheshire (1982) showed that such features are regular in speech in Reading, and eWAVE records them. Regional words, such as *ginnel*, *barm*, *cob* and *mardy*, are reported for different areas."
     ],
     pro:[
      "Wells (1982) describes the north–south division in terms of isoglosses that run roughly from the Severn to the Wash. The lines for different features do not coincide, and speakers in the Midlands and in the north who move or who are exposed to southern speech may have intermediate vowels, for example a vowel between /ʊ/ and /ʌ/ in STRUT words.",
      "The historical account is that the short /ʊ/ opened to /ʌ/ in many words in the south in the 1600s (the FOOT–STRUT split) and that /æ/ lengthened before certain consonants and later backed (the BATH broadening). In both cases the south is the innovating area. The BATH set has exceptions, which come from the way the change spread through words.",
      "In studies of variation, the questions are how the features correlate with age, class and style, and whether the north–south boundary is moving. Some research suggests that the southern forms spread in some northern speech, while northern features persist in local identity. Using “northern” as a label for speakers is less exact than naming features and places.",
      "Cross-link: Lesson 5 gives words in the “Please call Stella” paragraph for listening to *ask*, *snack* and *brother*."
     ]},
    related:["we-rp-ssbe","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.6 “Sociolinguistic correlations: Place”"}],
    sources:[{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-scots-scottish-english", title:"Scottish English and Scots", aka:["Scots","Scottish Standard English","Aitken’s Law"], tags:["world englishes","scotland"],
    summary:"Scotland has Scottish Standard English and Scots, with a continuum between them. Most accents are rhotic, and many follow a vowel-length pattern called the Scottish Vowel Length Rule. Whether Scots is a language or a dialect is debated.",
    levels:{
     starter:[
      "Scotland has several kinds of English. **Scottish Standard English** uses Standard English grammar with a Scottish accent. **Scots** is a variety that developed from northern Old English, with more differences in words and grammar. Most speakers move between the two depending on the situation.",
      "Most Scottish accents are rhotic: they pronounce the *r* after a vowel in *car* and *store*. Many have a pattern in which vowel length depends on the next sound. *Leave* has a longer vowel than *leaf*.",
      "Is Scots a language or a dialect? Serious scholars disagree. Some stress its history, literature and dictionary. Others stress its closeness to English and the continuum between them.",
      {key:"The language or dialect question has two sides. Use the name that speakers use, and respect their speech."}
     ],
     builder:[
      "A. J. Aitken (1979) described a continuum from broad Scots to Scottish Standard English. In the 2011 census, about 1.5 million people said they could speak Scots, and about 57,000 said they could speak Gaelic. The question about Scots was understood in different ways, so the figure needs care.",
      "The Scottish Vowel Length Rule (Aitken, 1981) in a simplified form: many vowels are short, and they are long before /r/, before voiced fricatives and at the end of a morpheme. *Leaf* is short and *leave* is long. *Brood* is short and *brewed* is long. The rule is simplified: it has exceptions, and it differs between speakers and areas.",
      "Other features include the FOOT–GOOSE merger (*pull* and *pool*), single vowels in FACE and GOAT, [x] in *loch* and, for some speakers, a difference between *which* and *witch*. Words include *wee*, *aye*, *bairn* and *outwith*. Grammar includes *needs washed* and *Will I…?* for offers."
     ],
     pro:[
      "Scots descended from Northumbrian Old English. John Barbour’s *The Brus* (about 1375) is an early long poem. Scots was used in government and literature until the 1600s, and after the union of the crowns (1603) and of the parliaments (1707) written Standard English took over most formal uses. Robert Burns published the Kilmarnock edition in 1786. In 2001 the UK recognized Scots under Part II of the European Charter for Regional or Minority Languages.",
      "Kloss (1967) separated *Abstand*, linguistic distance, from *Ausbau*, elaboration for use in writing and institutions. By Abstand, Scots is close to English, which supports the dialect view. By Ausbau, Scots has a literary history and a dictionary, which supports the language view. Scholars such as those who edited *The Edinburgh Companion to Scots* (Corbett, McClure and Stuart-Smith, 2003) treat it as a language. Others stress the continuum.",
      "On rhoticity, Scottish accents are generally rhotic, with a tap, an approximant or a trill, but studies of urban speech in Glasgow and Edinburgh report weakened or lost *r* in some speakers. See the chapters on Scottish English in Kortmann and Upton (2008).",
      "Cross-link: Unit 1, Lesson 2, discusses the line between language and dialect."
     ]},
    related:["we-welsh-irish-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.2 “Language varies”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"},{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"}],
    checked:"2026-11"},
   {id:"we-welsh-irish-english", title:"Welsh English, Irish English and Northern Irish English", aka:["Hiberno-English","after-perfect","habitual do be","amn’t"], tags:["world englishes","ireland","wales"],
    summary:"Welsh and Irish left marks on the English of Wales and Ireland. Irish English has regular grammar features, including the after-perfect, habitual do be and amn’t.",
    levels:{
     starter:[
      "In Wales and Ireland, English grew up next to older Celtic languages. **Welsh English** and **Irish English** (Hiberno-English) are full varieties with their own words, sounds and grammar. Most people speak English as their daily language, and some also speak Welsh or Irish.",
      "Irish English has three grammar features that are often mentioned. The ***after*-perfect** means a recent event: *I’m after eating* means “I have just eaten”. **Habitual *do be*** means a habit: *He does be late* means “he is often late”. ***Amn’t*** is a short form of “am not”: *Amn’t I allowed?*",
      "Northern Irish English has roots in the English of Ireland and in the Scots that settlers brought from 1609. It is rhotic, and many speakers use *wee*, *aye* and *youse*.",
      {key:"These are regular features of varieties. They are not mistakes and not jokes."}
     ],
     builder:[
      "In the 2021 census, 17.8 percent of people in Wales aged three and over (about 538,000) said they could speak Welsh. In the Republic of Ireland’s 2022 census, about 1.87 million said they could speak Irish, and about 72,000 spoke it daily outside the education system. Welsh English features reported include rhythm that is more even from syllable to syllable than in SSBE, single vowels in FACE and GOAT, a tapped *r*, a short tag *isn’t it?* and the fronting of a phrase for emphasis. Words such as *cwtch* come from Welsh. Penhallurick (2008) describes the sounds.",
      "English came to Ireland with the Anglo-Normans in 1169. The Statutes of Kilkenny (1366) tried to stop settlers from using Irish. The Plantation of Ulster began in 1609. From the 1700s and 1800s many Irish speakers moved to English, and this language shift left grammar patterns from Irish in the English of Ireland. The *after*-perfect follows the Irish structure with *tar éis*, “after”.",
      "The origin of some features is debated. Habitual *do be* is like the Irish habitual *bíonn*, but some scholars also point to English dialects in the south-west of England. Filppula (1999) and Harris (1993) discuss these questions.",
      "Words include *grand*, *craic*, *press* (cupboard), *messages* (shopping) and *the guards* (police). Many Irish accents have dental stops for /θ/ and /ð/, a clear *l* and single vowels in FACE and GOAT."
     ],
     pro:[
      "Scholars treat the contact origin of Irish English with care. Some features have clear Irish models, such as the *after*-perfect, the use of *it is* clefts for focus (*It’s the bus I took*) and the use of the progressive with some verbs. Other features, such as *amn’t*, are also found in Scotland, and so contact with Irish is not the only explanation. A usual position is that several sources acted together: Irish, English dialects of the settlers, and Early Modern English.",
      "Northern Irish English was formed by contact between Ulster Scots and Irish-influenced English. Jarman and Cruttenden (1976) described rising intonation in Belfast statements. Ulster Scots was recognized in the 1998 Belfast (Good Friday) Agreement and under Part II of the European Charter for Regional or Minority Languages in 2001, and it has the same language–dialect debate as Scots.",
      "Dublin English is changing. Hickey (2005) describes a set of new vowels that began among younger, middle-class Dubliners in the late twentieth century and then spread, both in the city and beyond it. Traditional local Dublin speech is different again, and its *r* after vowels can be weak. A single speaker in a recording cannot stand for this range.",
      "eWAVE lists many of these features with notes on how widespread they are. Cite feature names only after checking them in the atlas."
     ]},
    related:["we-scots-scottish-english","we-listening-accents"],
    read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.3 “Language changes”"}],
    sources:[{t:"Electronic World Atlas of Varieties of English (eWAVE)", url:"https://ewave-atlas.org/"},{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"}],
    checked:"2026-11"},
   {id:"we-listening-accents", title:"Listening to accents: a careful method", aka:["listening lab","describe, do not rank"], tags:["world englishes","listening"],
    summary:"A routine for listening to recordings of speakers: gist first, then one feature, then a careful claim that says one speaker is one person.",
    levels:{
     starter:[
      "When you listen to an accent you do not know, you can learn a lot with a simple routine. First, listen for the message. Second, choose one feature, such as the *r* in *store*. Third, listen again to the words that show it. Fourth, write what you heard in plain words.",
      "A careful claim has three parts: what this speaker does, what is typical in the place, and a reminder that one speaker is one person.",
      "Do not use words such as *good*, *bad*, *strong*, *posh* or *lazy*. They describe the listener’s opinion and not the sounds.",
      {key:"Describe the sounds. Do not rank the speaker."}
     ],
     builder:[
      "The Speech Accent Archive (Weinberger, George Mason University) has speakers who read the same paragraph, so listeners can compare like with like. The recordings in this unit are shared under CC BY-NC-SA 4.0.",
      {table:[["Feature","Words to listen to","Typical pattern"],["*r* after a vowel","store, her, for, brother","Rhotic in Scotland and Ireland, non-rhotic in much of England"],["BATH vowel","ask","Long in the south of England, short in much of the north"],["Vowel length","peas, cheese","Longer before /z/ in many Scottish accents"],["*th* sounds","three, thick","Dental stops in many Irish accents"]]},
      "Limits to remember: one speaker, a reading task and not natural speech, and the speaker’s age and history. Listeners who know an accent better often understand it better."
     ],
     pro:[
      "Reading-aloud data has known limits. Speakers may use a more careful style than in conversation, and features that vary with style may show less. A research claim needs many speakers, many situations and a measure that others can check. A single recording is useful for teaching and for illustration.",
      "Attitude research, such as the work of Howard Giles and colleagues from the 1970s, shows that listeners link accents to ideas about status and warmth. These judgments say more about listeners than about speakers. Listening practice that asks only for description is one way to reduce the effect.",
      "For interpreters and other professionals who must follow many accents, a gist-first approach and regular exposure to the accents they meet at work help most. Communication Accommodation Theory (Giles) is the link to Unit 1: both speaker and listener adjust.",
      "Cross-link: Unit 1, Lesson 5, covers intelligibility, comprehensibility and interpretability."
     ]},
    related:["we-rp-ssbe","we-north-south-england","we-scots-scottish-english","we-welsh-irish-english"],
    read:[{book:"eling", where:"Chapter 3, Phonetics, section 3.5 “Describing vowels”"}],
    sources:[{t:"Speech Accent Archive (George Mason University)", url:"https://accent.gmu.edu/"}],
    checked:"2026-11"}
  ],
  terms:[
   {id:"we-rp", term:"Received Pronunciation (RP)", def:"An accent of English linked to social class and education, not to one region. Only a small minority of people in Britain speak it. It is an accent and not a kind of grammar.", codex:"we-rp-ssbe"},
   {id:"we-estuary-english", term:"Estuary English", def:"A name used since 1984 for features of speech in the southeast of England, near the Thames. Linguists debate whether it is a useful label or only part of a continuum.", codex:"we-rp-ssbe"},
   {id:"we-lexical-set", term:"Lexical set", def:"A group of words that share a vowel in a reference accent, named by a key word in capital letters, such as TRAP or BATH. John Wells introduced them in 1982.", codex:"we-rp-ssbe"},
   {id:"we-t-glottaling", term:"T-glottaling", def:"Saying /t/ as a glottal stop [ʔ], as in *bottle* [bɒʔl]. It is heard in many accents in Britain.", codex:"we-rp-ssbe"},
   {id:"we-isogloss", term:"Isogloss", def:"A line on a map that shows where one language feature changes to another.", codex:"we-north-south-england"},
   {id:"we-bath-trap", term:"BATH–TRAP split", def:"A difference between a long vowel in BATH words and a short vowel in TRAP words. Southern England has it. Much of the north does not.", codex:"we-north-south-england"},
   {id:"we-foot-strut", term:"FOOT–STRUT split", def:"A difference between the vowels of FOOT words (*put*) and STRUT words (*putt*). Southern England has it. Much of the north has one vowel for both.", codex:"we-north-south-england"},
   {id:"we-scottish-standard-english", term:"Scottish Standard English", def:"Standard English grammar and vocabulary with a Scottish accent and some Scottish words, used by many educated Scots.", codex:"we-scots-scottish-english"},
   {id:"we-dialect-continuum", term:"Dialect continuum", def:"A scale of varieties with no clear break between neighboring ones, such as the speech between broad Scots and Scottish Standard English.", codex:"we-scots-scottish-english"},
   {id:"we-svlr", term:"Scottish Vowel Length Rule", def:"A simplified rule, also called Aitken’s Law, that says many vowels in Scottish accents are short, except before /r/, before voiced fricatives and at the end of a morpheme.", codex:"we-scots-scottish-english"},
   {id:"we-hiberno-english", term:"Hiberno-English", def:"Another name for Irish English, the English of Ireland. *Hibernia* is the Latin name for Ireland.", codex:"we-welsh-irish-english"},
   {id:"we-after-perfect", term:"After-perfect", def:"An Irish English structure, as in *I’m after eating*, that means “I have just eaten”. It expresses a recent event.", codex:"we-welsh-irish-english"},
   {id:"we-habitual-do-be", term:"Habitual do be", def:"An Irish English structure, as in *He does be late*, that marks a habit: something that happens again and again.", codex:"we-welsh-irish-english"},
   {id:"we-amnt", term:"Amn’t", def:"A short form of “am not”, as in *Amn’t I allowed?*, used in Irish English and Scottish English.", codex:"we-welsh-irish-english"},
   {id:"we-ulster-scots", term:"Ulster Scots", def:"A variety related to Scots that is spoken by some people in Northern Ireland and in Donegal. Like Scots, it is called a language by some and a dialect by others.", codex:"we-welsh-irish-english"},
   {id:"we-speech-accent-archive", term:"Speech Accent Archive", def:"A free collection of recordings at George Mason University. Each speaker reads the same paragraph, “Please call Stella”, so accents can be compared.", codex:"we-listening-accents"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u3-q01","e6u3-l1",1,"What is Received Pronunciation (RP)?",1,[
     ["A kind of grammar used in writing","That is Standard English, which is a different matter."],
     ["An accent that is linked to social class and education, not to one region","Right. RP is an accent with a social history."],
     ["The accent of every person in London","Londoners have many accents."],
     ["A dialect of Scotland","RP has no link to Scotland."]]),
   Q("e6u3-q02","e6u3-l1",1,"Which scholar used the phrase *received pronunciation* in 1869?",2,[
     ["David Rosewarne","Rosewarne used the name Estuary English in 1984."],
     ["John Wells","Wells wrote *Accents of English* in 1982."],
     ["A. J. Ellis","Right. Ellis used the phrase, and Jones later made it standard."],
     ["Geoff Lindsey","Lindsey wrote *English after RP* in 2019."]]),
   Q("e6u3-q03","e6u3-l1",1,"Which lexical set has /ɑː/ in SSBE and /æ/ in General American?",1,[
     ["TRAP","TRAP has /æ/ in both."],
     ["BATH","Right. *Bath* has /ɑː/ in SSBE and /æ/ in GA."],
     ["STRUT","STRUT has /ʌ/ in both."],
     ["FOOT","FOOT has /ʊ/ in both."]]),
   Q("e6u3-q04","e6u3-l1",1,"SSBE is non-rhotic. What does that mean?",2,[
     ["It has no vowels.","Non-rhotic is about the *r* sound only."],
     ["It pronounces every written *r*.","That is rhotic."],
     ["A written *r* is pronounced only before a vowel sound.","Right. *Car* has no *r* sound, and *red* has one."],
     ["It drops every /t/.","That is a different feature."]]),
   Q("e6u3-q05","e6u3-l1",2,"Which example shows T-glottaling?",3,[
     ["*think* said as *fink*","That is TH-fronting."],
     ["*milk* said as *miuk*","That is L-vocalization."],
     ["*hand* said as *’and*","That is H-dropping."],
     ["*bottle* said as [bɒʔl]","Right. The /t/ is replaced by a glottal stop."]]),
   Q("e6u3-q06","e6u3-l1",2,"Why is SSBE called a reference accent in teaching?",0,[
     ["It gives teachers and learners a common accent to describe and compare, and it does not mean it is the best one.","Right. A reference accent is a tool."],
     ["It is the only accent that is correct.","No accent is more correct."],
     ["It is the accent of all people in Britain.","Most people have regional accents."],
     ["It has no regional features.","It has features of its own, such as non-rhoticity."]]),
   Q("e6u3-q07","e6u3-l1",2,"A friend says that RP is “the correct English”. What is the best reply?",1,[
     ["“Yes. Other accents are mistakes.”","No accent is a mistake."],
     ["“RP is an accent with a social history. Standard English is a form of grammar. Neither makes other accents wrong.”","Right. It separates accent from grammar and avoids ranking."],
     ["“RP is only used in Scotland.”","This is not true."],
     ["“Nobody speaks RP.”","A small minority do."]]),
   Q("e6u3-q08","e6u3-l1",3,"A student labels a speaker “Estuary English” after hearing one glottal stop. What is the best advice?",2,[
     ["Keep the label, because one feature is enough.","One feature does not define an accent, and the label is debated."],
     ["Change the label to “Cockney”, because it is more exact.","Cockney is a different label with its own limits."],
     ["Describe the feature that you heard, and say that the label is debated and one speaker is one person.","Right. Naming the feature is more exact."],
     ["Delete the note, because accents cannot be described.","They can be described, with care."]]),
   Q("e6u3-q09","e6u3-l1",3,"Which statement about T-glottaling is the best supported?",1,[
     ["It happens only in London.","It is heard in many accents in Britain."],
     ["It is found in many accents, and studies report it spreading among young speakers, with different amounts in different places.","Right. It is not limited to one place or class."],
     ["It always means the speaker is careless.","That is a judgment and not a description."],
     ["It is never used by RP speakers.","Fabricius (2002) found glottal stops spreading among speakers of RP-like accents."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u3-q10","e6u3-l2",1,"What is an isogloss?",0,[
     ["A line on a map where a language feature changes","Right. It marks a boundary of a feature."],
     ["A word that exists only in one town","That is a local word."],
     ["A kind of accent","An isogloss is a line, not an accent."],
     ["A group of words with the same vowel","That is a lexical set."]]),
   Q("e6u3-q11","e6u3-l2",1,"What is typical of many northern accents in England?",2,[
     ["A long /ɑː/ in *bath* and a different vowel in *trap*","That is the typical southern pattern."],
     ["A different vowel in *put* and *putt*","That is the typical southern pattern."],
     ["The same short vowel in *bath* and *trap*, and often the same vowel in *put* and *putt*","Right. These are typical northern patterns."],
     ["No vowels at all in these words","Every word has a vowel."]]),
   Q("e6u3-q12","e6u3-l2",1,"In the history of the FOOT–STRUT split, which area changed?",3,[
     ["The north changed, and the south kept the old vowel.","It was the other way around."],
     ["Both areas changed in the same way.","The north did not take part in the change."],
     ["Neither area changed.","The split came from a change."],
     ["The south changed, and many northern accents kept the older single vowel.","Right. The northern pattern is the older one."]]),
   Q("e6u3-q13","e6u3-l2",2,"Which of these words has /æ/ in SSBE, even though it looks like a BATH word?",1,[
     ["grass","*Grass* has /ɑː/."],
     ["gas","Right. *Gas* is a TRAP word, so the BATH set is a list and not a rule."],
     ["last","*Last* has /ɑː/."],
     ["dance","*Dance* has /ɑː/."]]),
   Q("e6u3-q14","e6u3-l2",2,"Which sentence shows *never* used as a past negator, a feature found in dialects of England?",0,[
     ["I never went to school that day. (= I did not go)","Right. *Never* means “did not” here."],
     ["I will never go.","This is *never* in its usual future sense."],
     ["I have never been there.","This is also the usual sense."],
     ["Never mind.","This is a fixed phrase."]]),
   Q("e6u3-q15","e6u3-l2",2,"Cheshire (1982) studied teenagers in Reading. What did she show about *we was* and similar forms?",2,[
     ["That they are random mistakes","She showed that they follow patterns."],
     ["That they are used in exactly the same way by everyone","Speakers differed with the situation."],
     ["That they are regular dialect features that speakers use more or less depending on the situation","Right. They are rule-governed and tied to style."],
     ["That they never occur in England","They are documented in many places."]]),
   Q("e6u3-q16","e6u3-l2",3,"A speaker from Manchester says *bath* with a short vowel. A student writes, “She says it wrong.” What is a better note?",1,[
     ["“She says it wrong, but only a little.”","Any kind of “wrong” is the same mistake."],
     ["“She has a short vowel, like most northern speakers. The southern long vowel developed later.”","Right. It describes the feature and its history."],
     ["“She is from the south.”","A short vowel is a northern pattern."],
     ["“She cannot say the long vowel.”","The note says nothing that the evidence supports."]]),
   Q("e6u3-q17","e6u3-l2",3,"Toby, an Australian master’s student in Japanese linguistics, learns that some Australians say *dance* with a long vowel and others with a short vowel. What does this show?",0,[
     ["Within one country, speakers can fall on different sides of the same change, so a national label is not exact.","Right. Variation exists inside every variety."],
     ["Australian English has no rules.","It has rules, and they vary by region."],
     ["All Australians are from the south of England.","This is not a conclusion from the facts."],
     ["The long vowel is always better.","No vowel is better."]]),
   Q("e6u3-q18","e6u3-l2",3,"Two students argue about the word for a bread roll: *barm* in one family, *cob* in another. How should you describe this?",3,[
     ["One family is right and the other is wrong.","Both are regional words."],
     ["Both families come from the same town.","The words are reported for different areas."],
     ["The words have no connection with place.","Regional words often show where a speaker is from."],
     ["Both are regional words that are often reported for different areas, and families may use both or neither.","Right. No word belongs to exactly one region."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u3-q19","e6u3-l3",1,"Which accent feature is typical of most Scottish accents?",1,[
     ["Non-rhoticity","Most Scottish accents are rhotic."],
     ["Rhoticity: the *r* is pronounced after a vowel","Right. It is the usual pattern."],
     ["A long /ɑː/ in *bath*","This is a southern English pattern."],
     ["No consonants","Every accent has consonants."]]),
   Q("e6u3-q20","e6u3-l3",1,"What is Scottish Standard English?",2,[
     ["The same as broad Scots","Scots has more differences in words and grammar."],
     ["Standard English spoken only in England","It is a Scottish form."],
     ["Standard English grammar and vocabulary with a Scottish accent and some Scottish words","Right. Many educated Scots use it."],
     ["A language with no connection to English","It is a form of English."]]),
   Q("e6u3-q21","e6u3-l3",2,"In the simplified Scottish Vowel Length Rule, which place makes a vowel long?",0,[
     ["Before a voiced fricative such as /v/","Right. *Leave* is long and *leaf* is short."],
     ["Before /t/","The vowel is short before /t/."],
     ["At the start of a word","The rule is about what comes after the vowel."],
     ["Before /p/","The vowel is short before /p/."]]),
   Q("e6u3-q22","e6u3-l3",2,"Why do Scottish and Irish accents keep the *r* after vowels, when SSBE does not?",3,[
     ["Speakers in these places are more careful.","Rhoticity is not about care."],
     ["Celtic languages force rhoticity.","The *r* is kept from earlier English, and each region has its own history."],
     ["SSBE never had an *r*.","Early English speakers pronounced it."],
     ["Rhoticity is the older pattern, and southern England lost it later.","Right. Scotland and Ireland were not part of that change."]]),
   Q("e6u3-q23","e6u3-l3",2,"Which word means “child” in Scots and in the north of England?",1,[
     ["outwith","*Outwith* means “outside of”."],
     ["bairn","Right. *Bairn* means “child”."],
     ["kirk","*Kirk* means “church”."],
     ["loch","*Loch* means a lake or an arm of the sea."]]),
   Q("e6u3-q24","e6u3-l3",2,"Which pair of ideas did Kloss (1967) use to look at the language–dialect question?",2,[
     ["Accent and register","These are different ideas."],
     ["Rhotic and non-rhotic","These are about the *r* sound."],
     ["Abstand (distance) and Ausbau (elaboration)","Right. They look at linguistic distance and at how far a variety is built up for use in writing and institutions."],
     ["Merger and split","These describe vowel changes."]]),
   Q("e6u3-q25","e6u3-l3",3,"A classmate says, “Scots is just English with funny words.” What is the fairest reply?",1,[
     ["“You are right. It has no history.”","Scots has a long literary history."],
     ["“Some scholars call it a dialect of English, and others call it a language. The two sides give different evidence, and speakers have their own names for it.”","Right. It gives both views and keeps respect for speakers."],
     ["“Scots is a language, and the question is closed.”","The question is debated by scholars."],
     ["“Nobody speaks Scots.”","Many people say they can speak it."]]),
   Q("e6u3-q26","e6u3-l3",3,"A listener hears one Glasgow speaker who weakens the *r* after vowels. What can the listener conclude?",2,[
     ["That no one in Scotland is rhotic","One speaker cannot show this."],
     ["That all Glasgow speakers weaken the *r*","One speaker cannot show this either."],
     ["That this speaker weakens the *r*, which can happen in some city speech, and that one speaker is one person","Right. It records what was heard and keeps the limit."],
     ["That the recording is wrong","Variation is normal."]]),
   Q("e6u3-q27","e6u3-l3",3,"Which point is most often used for the view that Scots is a language?",0,[
     ["A long written history, a large historical dictionary and recognition under the European Charter","Right. These are points for the language view."],
     ["It is close to English in grammar.","This supports the dialect view."],
     ["There is no single standard spelling.","This is often used for the dialect view."],
     ["Speakers move smoothly between Scots and Scottish English.","A continuum supports the dialect view."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u3-q28","e6u3-l4",1,"What does *I’m after eating* mean in Irish English?",1,[
     ["I am about to eat.","The *after*-perfect is about the recent past."],
     ["I have just eaten.","Right. It is the *after*-perfect."],
     ["I eat every day.","That would be habitual."],
     ["I will never eat.","The sentence says nothing like this."]]),
   Q("e6u3-q29","e6u3-l4",1,"What is Hiberno-English?",2,[
     ["The English of Wales","That is Welsh English."],
     ["The English of Scotland","That is Scottish English."],
     ["Another name for Irish English, the English of Ireland","Right. *Hibernia* is the Latin name for Ireland."],
     ["A language of Northern Ireland only","It is the English of Ireland as a whole."]]),
   Q("e6u3-q30","e6u3-l4",2,"What does the habitual *do be* show in *He does be late*?",0,[
     ["That it happens again and again","Right. It marks a habit."],
     ["That it happened once","The structure marks a repeated event."],
     ["That it will happen tomorrow","It is not about the future."],
     ["That the speaker is not sure","It is not about doubt."]]),
   Q("e6u3-q31","e6u3-l4",2,"Which statement about *amn’t* is correct?",3,[
     ["It is only used by learners.","It is used by native speakers in Ireland and Scotland."],
     ["It is a short form of “have not”.","The short form of “have not” is *haven’t*."],
     ["It has no use in grammar.","It fills a gap in the set of short forms."],
     ["It is a short form of “am not” used in Irish English and in Scottish English.","Right. *Amn’t I allowed?* is a regular sentence."]]),
   Q("e6u3-q32","e6u3-l4",2,"What led many families in Ireland to move from Irish to English in the 1700s and 1800s?",1,[
     ["The law forbade Irish in every home.","The reasons were not a single law. They included school, trade, emigration and state pressure."],
     ["A mix of schooling in English, trade, emigration and pressure from the state","Right. Several causes acted together."],
     ["Irish had no speakers.","Many people spoke Irish at that time."],
     ["The sound of Irish changed.","The shift was about language choice."]]),
   Q("e6u3-q33","e6u3-l4",2,"Which statement about Northern Irish English is the most accurate?",2,[
     ["It is the same as English in England.","It has its own history and features."],
     ["It has no connection to Scots.","Settlers from Scotland brought Scots from 1609."],
     ["It has roots in the English of Ireland and in the Scots that settlers brought from Scotland.","Right. Both are part of the story."],
     ["It is spoken only in Belfast.","It is spoken across Northern Ireland."]]),
   Q("e6u3-q34","e6u3-l4",3,"A tourist says, “I love how Irish people say *I’m after eating*. It’s such a funny mistake.” What is the best reply?",1,[
     ["“Yes, it is funny.”","It is not a mistake or a joke."],
     ["“It’s not a mistake. It’s a regular feature of Irish English that follows a pattern from Irish. People in Ireland use it as part of the grammar.”","Right. It corrects the idea and explains the feature."],
     ["“Only children say it.”","Adults use it too."],
     ["“It is English spoken badly.”","It is not spoken badly."]]),
   Q("e6u3-q35","e6u3-l4",3,"A scholar says *do be* may come from Irish, and another says it may come from English dialects. How should you describe this?",0,[
     ["The origin is debated, and many scholars think several sources acted together.","Right. A fair summary keeps the debate."],
     ["The first scholar is right and the second is wrong.","The debate is not settled."],
     ["Both scholars are wrong, because the feature does not exist.","The feature is documented."],
     ["The feature has no origin.","Every feature has some history."]]),
   Q("e6u3-q36","e6u3-l4",3,"A traveler hears “Is it yourself?” and several words such as *craic* and *messages* in Ireland. How should the traveler treat these?",2,[
     ["As proof that all Irish people speak the same way","Speakers vary a lot."],
     ["As jokes","They are normal words and phrases of Irish English."],
     ["As examples of reported features and words, and not as a guide to how everyone talks","Right. This keeps the description fair."],
     ["As mistakes","They are part of regular varieties."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u3-q37","e6u3-l5",1,"Where does the “Please call Stella” paragraph come from?",1,[
     ["A news website","The paragraph is from a research collection."],
     ["The Speech Accent Archive at George Mason University","Right. Every speaker reads the same text."],
     ["A language course for beginners","It is a research text."],
     ["A radio program","It is not from a radio program."]]),
   Q("e6u3-q38","e6u3-l5",1,"What is the first step of the listening routine?",0,[
     ["Listen for the message, without judging","Right. First understand what is said."],
     ["Decide whether the speaker is good","Judging is not part of the routine."],
     ["Write a claim about the whole region","Claims come last."],
     ["Compare the speaker with RP","The routine does not rank."]]),
   Q("e6u3-q39","e6u3-l5",2,"Which words in the paragraph help you to listen for the *r* after a vowel?",2,[
     ["Wednesday, station","These words do not have an *r* after a vowel."],
     ["snow, frog","*Frog* has an *r* before a vowel."],
     ["store, her, for, brother","Right. These words have an *r* after a vowel in the spelling."],
     ["slabs, snack","These words have no *r*."]]),
   Q("e6u3-q40","e6u3-l5",2,"Which statement is the best example of a careful claim?",3,[
     ["“Dublin people all say the *r*.”","This overgeneralizes."],
     ["“Glasgow speakers have a better accent.”","This ranks accents."],
     ["“This speaker’s accent is too strong.”","*Too strong* is a judgment."],
     ["“This speaker from Dublin pronounces the *r*, which matches the typical pattern in Ireland. One speaker is one person.”","Right. It describes, compares and adds a limit."]]),
   Q("e6u3-q41","e6u3-l5",2,"Which of these places is usually rhotic?",1,[
     ["London","London speech is usually non-rhotic."],
     ["Belfast","Right. Northern Irish English is rhotic."],
     ["Manchester","Manchester speech is usually non-rhotic."],
     ["Cardiff","English in the south of Wales is usually non-rhotic."]]),
   Q("e6u3-q42","e6u3-l5",2,"Why can a reading task show fewer local features than conversation?",2,[
     ["Readers cannot speak naturally.","Readers can, but style changes."],
     ["Local features do not exist in reading.","They can appear, but style affects them."],
     ["Speakers often use a more careful style when they read aloud.","Right. Style shifts with the situation."],
     ["Recording machines remove them.","Recording does not remove features."]]),
   Q("e6u3-q43","e6u3-l5",3,"After hearing Cardiff and Manchester, a student writes, “Both speakers sound non-rhotic, so the accents are the same.” What is wrong?",0,[
     ["Two accents can share one feature and differ in many others, such as vowels and rhythm.","Right. One feature does not define an accent."],
     ["The speakers are both rhotic.","The student heard no *r*."],
     ["Non-rhotic speakers are not real speakers.","They are real."],
     ["Nothing is wrong.","The conclusion goes beyond the evidence."]]),
   Q("e6u3-q44","e6u3-l5",3,"Mariya, a Japanese student of English interpreting, finds a Belfast speaker hard to follow on the first listening. Which plan is the most useful and respectful?",2,[
     ["Decide that the accent is too hard and skip it.","Exposure helps."],
     ["Ask the speaker to change the accent.","A speaker does not need to change."],
     ["Listen again for the message, then for one feature such as the *r* or the rise at the end of sentences, and practice with the accent again.","Right. Familiarity helps."],
     ["Write that Northern Irish English is unclear.","This turns the listener’s difficulty into a claim about the variety."]]),
   Q("e6u3-q45","e6u3-l5",3,"A classmate hears a London speaker and a Scottish speaker and says, “One of them has the right accent.” What is the best response?",1,[
     ["“Yes, the London one.”","No accent is right or wrong."],
     ["“Neither is right or wrong. They are two regular systems. We can describe what we hear in each.”","Right. It replaces ranking with description."],
     ["“Yes, the Scottish one.”","No accent is right or wrong."],
     ["“Neither is a real accent.”","Both are real."]])
  ]
});
})();
