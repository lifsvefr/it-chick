(function(){
/* World Englishes · Unit 2 (e6u2) · How English spread */
/* Helpers that only save typing: Q builds a bank question (correct option at index k), M builds an mcq exercise. */
function Q(id, lesson, level, q, k, opts){ return {id:id, lesson:lesson, level:level, q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1].length < 12 ? o[1] + " This matches the lesson." : o[1]}; if (i === k) r.ok = true; return r; })}; }
function M(id, q, k, opts, extra){ var e = {id:id, type:"mcq", q:q, options:opts.map(function(o, i){ var r = {t:o[0], why:o[1]}; if (i === k) r.ok = true; return r; })}; if (extra) for (var p in extra) e[p] = extra[p]; return e; }
ICA.addUnit({
  id:"e6u2", track:"e6", n:2, title:"How English spread", icon:"🗺️",
  blurb:"English began as the language of a few million people on one island. This unit follows English from Old English to 1600 and then around the world in two waves. In the first, settlers made new homes in North America, Australia, New Zealand and South Africa. In the second, colonial rule brought English to Asia and Africa. You will meet Schneider’s five-phase model, see why English stayed after independence, and look at English today beside other languages.",
  goals:[
    "Describe the main changes from Old English to Early Modern English, and the roles of Celtic, Latin, Norse and French",
    "Explain the first diaspora, the settler colonies. Name the peoples who were already there, and say plainly what happened to them",
    "Explain how English spread in India, Nigeria, Ghana, Singapore and the Philippines. Say why many countries kept it after independence",
    "Name the five phases of Schneider’s Dynamic Model in order, and place Singapore and the United States on it",
    "Describe English today: US influence, media, the internet, language shift and English in Japan"
  ],
  read:[
    {book:"eling", where:"Chapter 14, Historical Linguistics, sections 14.1 “Why do languages change?” and 14.2 “Lexical change”; Chapter 10, Language Variation and Change, section 10.3 “Language changes”; Chapter 9, Reclaiming Indigenous Languages, section 9.1 “Preserving Mohawk”", note:"Read the Chapter 14 sections after Lesson 1, and Chapter 9 after Lessons 2 and 5. The book is written for linguistics students, so take it slowly."}
  ],
  lessons:[
  /* ===================== LESSON 1 ===================== */
  {id:"e6u2-l1", title:"From Old English to Early Modern English", minutes:50,
   hook:{q:"Which of these everyday words came into English from French after 1066?", options:["beef","egg","house","water"], answer:0, reveal:"**Beef.** It comes from Anglo-Norman French. *House* and *water* are Old English words, and *egg* came from Old Norse. English took words from several languages before it ever left Britain, and the same thing happened again when it spread around the world."},
   goals:[
     "Name the four main periods of English and give a rough date for each",
     "Say which language gave English which kinds of words: Celtic, Latin, Old Norse and French",
     "Explain why 1066 changed the status of English and why the Great Vowel Shift matters for spelling",
     "Say why English around 1600 was a language of one island, and why colonial English did not “freeze”"
   ],
   learn:[
    {h:"Where the story starts", body:[
      {lead:"English did not begin as a world language. Around the year 1600 it was spoken by a few million people, mostly in England."},
      "Before English, the main languages of Britain were Celtic ones, such as the ancestors of Welsh, and Latin, which the Roman army and officials had used. Roman rule in Britain ended around the year 410. From the 5th century, groups from the northern coasts of Europe, usually called the Angles, Saxons and Jutes, settled in the island. Their Germanic dialects became the language we call [[we-old-english|Old English]].",
      "Old English looks like a foreign language to a modern reader. It had case endings on nouns, three grammatical genders and many verb forms, so word order was freer than today. Some words are easy to recognize and some are not.",
      {table:[["Old English","Modern English","Note"],["*hūs*","house","same word, older sound"],["*wæter*","water","almost the same"],["*fisc*","fish","spelled *sc* for the sound /ʃ/"],["*cild*","child","the plural was *cild* or *cildru*"],["*cyning*","king","the vowel and the ending changed"]]},
      "The word *Old English* covers the period from about 450 to about 1100. It names a group of regional dialects, not one language. Most surviving texts are in the West Saxon dialect. Dates for the periods of English are conventions that scholars use for teaching. Language change is gradual, and nobody woke up one morning speaking Middle English.",
      {ex:"Listen to a short passage of Old English read aloud. You do not need to understand it. Listen to the sounds and the rhythm, and notice how different they are from modern English.", label:"Listen: Old English read aloud", listen:"e6u2-l1-a1"}
    ]},
    {h:"Three languages that gave English words", body:[
      {lead:"Contact with other languages shaped English from the start. Each contact left a different mark."},
      "**Celtic.** The Celtic languages gave English surprisingly few everyday words. Their main mark is in place and river names, such as *Thames* and *Avon*. The reasons are debated. Historians agree that the Anglo-Saxon arrival changed the language of most of lowland Britain. They do not agree on how much of the earlier population was displaced and how much joined the new community.",
      "**Latin.** Latin words came in at different times. Christian missionaries arrived in Kent in 597, and church and school words followed, such as *school* and *candle*. Many more Latin and Greek words came much later, in the 1500s and 1600s.",
      "**Old Norse.** Viking raids began in the late 700s. From the 800s, Norse-speaking settlers lived in a large part of northern and eastern England, known as the Danelaw. Norse and Old English were related languages, and speakers could partly understand each other. This contact gave English *sky, egg, window* and *skirt*, and even the pronouns *they, them* and *their*, which spread into English in the Middle English period. Place names ending in *-by*, such as Whitby and Derby, are Norse in origin.",
      {tip:"A word is not “foreign” just because it came from another language. Linguists call such words [[hew-loanword|loanwords]]. Most English words in a dictionary have come from somewhere else, and *they* is one of the most common words in the language."}
    ]},
    {h:"1066 and the French layer", body:[
      {lead:"In 1066 William, Duke of Normandy, defeated King Harold at the Battle of Hastings. This is the best-known date in the history of English."},
      "William’s followers spoke a variety of French known as Anglo-Norman. For about two hundred years French was the language of the court, the law and the church hierarchy. The new rulers were a small group. Most people kept speaking English, and English was not forbidden. But the language of power had changed, and English was written less often.",
      "English took in many thousands of French words, especially about government, law, war and high-status living: *court, judge, jury, crime, army, parliament, noble*. Food words show the effect well. The animals have English names, such as *cow, pig* and *sheep*. The meats on a rich table have French names: *beef, pork, mutton*. A common explanation is that English-speaking farmers raised the animals and French-speaking lords ate the meat. It is a tidy story, and it is partly a simplification, but it is a good way to remember the pattern.",
      "Contact with Norse and French is also linked to a big grammatical change. In the Middle English period (about 1100 to 1500), most noun and verb endings faded, and word order became fixed: subject, verb, object. Scholars debate how much contact caused this and how much it was a natural change that was already under way.",
      {fig:'<svg viewBox="0 0 340 330"><defs><marker id="e6u2a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Four periods of English</text><rect class="d-sage" x="14" y="30" width="312" height="56" rx="8" stroke-width="2"/><text x="26" y="52">Old English · c. 450–1100</text><text class="s" x="26" y="73">Germanic dialects, case endings, Norse words</text><path class="d-ink" d="M170 90V108" stroke-width="2" marker-end="url(#e6u2a)"/><text class="s" x="184" y="104">1066</text><rect class="d-rose" x="14" y="112" width="312" height="56" rx="8" stroke-width="2"/><text x="26" y="134">Middle English · c. 1100–1500</text><text class="s" x="26" y="155">French layer, endings fade, Chaucer</text><path class="d-ink" d="M170 172V190" stroke-width="2" marker-end="url(#e6u2a)"/><text class="s" x="184" y="186">1476 printing</text><rect class="d-lup" x="14" y="194" width="312" height="56" rx="8" stroke-width="2"/><text x="26" y="216">Early Modern English · c. 1500–1700</text><text class="s" x="26" y="237">Vowel Shift, Shakespeare, King James Bible</text><path class="d-ink" d="M170 254V272" stroke-width="2" marker-end="url(#e6u2a)"/><text class="s" x="184" y="268">1607 Jamestown</text><rect class="d-gold" x="14" y="276" width="312" height="44" rx="8" stroke-width="2"/><text x="26" y="303">Modern English · c. 1700 to now</text></svg>', alt:"Four boxes joined by arrows, from top to bottom. Old English, about 450 to 1100. Middle English, about 1100 to 1500, after the arrow marked 1066. Early Modern English, about 1500 to 1700, after the arrow marked 1476 printing. Modern English, from about 1700 to now, after the arrow marked 1607 Jamestown.", cap:"The four conventional periods of English. The dates on the arrows are events that matter for this unit, not the boundaries between periods."}
    ]},
    {h:"English comes back, and printing arrives", body:[
      {lead:"By the 1300s English was rising in status again."},
      "A law of 1362, the Statute of Pleading, said that court cases should be argued in English so that people could understand them. The court records were still kept in Latin. In the late 1300s Geoffrey Chaucer wrote *The Canterbury Tales* in English. In the 1400s the royal offices in London developed a written form that scholars call Chancery Standard, and it helped to shape the written standard we know today.",
      "William Caxton set up a printing press at Westminster in 1476. Printing spread a London-based spelling across the country. At the same time pronunciation was changing fast. The **Great Vowel Shift** ([[hew-great-vowel-shift|see Unit 11 of How English Works]]) moved the long vowels over roughly 1400 to 1700. Words such as *mouse* and *house* once had a vowel like the one in modern *moose*. Spelling was being fixed while the sounds were moving, which is one reason English spelling is so irregular. Lesson 1 of that unit tells the story in detail: {{english-spelling-history|English spelling history}}."
    ]},
    {h:"Early Modern English: a growing vocabulary", body:[
      "The period from about 1500 to 1700 is called Early Modern English. It includes the writing of William Shakespeare (1564 to 1616) and the King James Bible (1611). Scholars and writers borrowed thousands of words from Latin and Greek, because English did not yet have enough words for science, medicine and law. Some of these words, such as *anatomy* and *encyclopedia*, are still in use. Others did not last.",
      "Many people say that Shakespeare invented hundreds of words. Careful research finds that some words were already in use, and that the surviving texts only show us where one writer used them first. The safe conclusion is that Shakespeare, like his readers, took part in a time of very fast vocabulary growth.",
      "Early Modern English also changed its grammar. The pronoun *thou* faded and *you* took over. Verb endings such as *-eth* gave way to *-s*. *Do* became part of questions and negatives (*Do you know?*, *I do not know*). In 1604 Robert Cawdrey published *A Table Alphabeticall*, one of the first English dictionaries. It was a small list of about 2,500 “hard words”. The kind of dictionary we use today came later."
    ]},
    {h:"English in 1600, and a common myth", body:[
      "Around 1600 English was a language of one island, and not even all of it. Welsh, Irish, Scottish Gaelic and Cornish were spoken in parts of Britain and Ireland, and Scots, a related variety, was used in Scotland. Estimates of the number of English speakers at that time are only a few million, and they vary.",
      "In 1607 English-speaking settlers founded Jamestown in Virginia. From this point the story of English becomes the story of many places. Lesson 2 begins there.",
      {warn:"A popular myth says that people in some American mountain areas or on some islands speak “pure Shakespearean English” because the language froze when their ancestors left. It is not true. English in England kept changing after 1607, and so did English in the colonies. Some features of colonial English, such as pronouncing the *r* in *car*, are older than the British accent of today. In the early 1600s most English speakers pronounced it. The non-rhotic pattern ([[rhotic|see rhotic accents]]) spread in southern England later. But colonial English also invented new words and sounds. Neither side stayed still."}
    ]}
   ],
   try:[
    {id:"e6u2-l1-x1", type:"sort", q:"Which language did each of these English words come from? Sort them by the main source.", buckets:["Old English","Old Norse","French (after 1066)","Latin"], items:[
      {t:"house", b:0, why:"*Hūs* was an Old English word, part of the oldest layer of English."},
      {t:"egg", b:1, why:"English took *egg* from Old Norse. The Old English form was different."},
      {t:"judge", b:2, why:"*Judge* is from French. The law words were mostly borrowed after 1066."},
      {t:"they", b:1, why:"The *th-* pronouns *they, them, their* came into English from Norse."},
      {t:"water", b:0, why:"*Wæter* was Old English. Basic words such as *water* kept their Old English form."},
      {t:"school", b:3, why:"*Scol* came into Old English from Latin *schola*, with the church and learning."},
      {t:"army", b:2, why:"French, like many words about war and government."},
      {t:"candle", b:3, why:"Old English *candel* was borrowed from Latin *candela*."}
    ]},
    M("e6u2-l1-x2","Which statement about the Norman Conquest of 1066 is the most accurate?",2,[
      ["English stopped being spoken, and French replaced it in all of England.","Most people kept speaking English. French was the language of the new ruling group, not of the whole population."],
      ["English changed only in spelling, because French and English were similar.","French and English are different languages. English took thousands of French words and also changed its grammar over the following centuries."],
      ["French became the language of the court and law for about two hundred years, while most people kept speaking English, which then borrowed thousands of French words.","Right. Both parts matter: the status of English fell for a time, and its vocabulary grew."],
      ["The conquerors made it illegal to write English.","There was no such ban. English was written less often, but writing in English continued."]
    ]),
    {id:"e6u2-l1-x3", type:"order", q:"Put these events in the correct order, from earliest to latest.", items:[
      {t:"Angles, Saxons and Jutes settle in Britain (from the 5th century)", why:"This is the start of Old English."},
      {t:"Norse-speaking settlers establish the Danelaw (800s)", why:"Norse contact comes before the Norman Conquest."},
      {t:"Battle of Hastings (1066)", why:"The start of the French layer in English."},
      {t:"Chaucer writes The Canterbury Tales (late 1300s)", why:"English is used for major literature again."},
      {t:"Caxton sets up a printing press at Westminster (1476)", why:"Printing helps to spread a London-based written standard."},
      {t:"Jamestown is founded (1607)", why:"The first lasting English settlement in North America, and the start of Lesson 2."}
    ]},
    {id:"e6u2-l1-x4", type:"match", q:"Match each period or contact with its main effect on English.", pairs:[
      ["Old English","Case endings on nouns and freer word order","The grammar looked more like modern German than modern English."],
      ["Norse contact","Pronouns such as *they, them, their*","A rare case of a basic grammar word being borrowed."],
      ["French after 1066","Law and government words such as *court* and *jury*","French was the language of the new ruling group."],
      ["Middle English","Endings fade and word order becomes fixed","Subject, verb, object became the normal order."],
      ["Early Modern English","Thousands of Latin and Greek borrowings","Writers needed words for science, law and learning."]
    ]},
    {id:"e6u2-l1-x5", type:"spot", q:"A student wrote these notes for a class on the history of English. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Old English was the same as modern English with older spelling.", flag:true, why:"Old English had different grammar and many words that modern readers cannot recognize. It needs to be learned like a foreign language."}, " ", {t:"Norse settlers gave English words such as *sky* and *egg*.", flag:false, why:"Correct. These are Norse loanwords."}, " ", {t:"After 1066 everyone in England began speaking French.", flag:true, why:"French was the language of a small ruling group. Most people kept speaking English."}, " ", {t:"English borrowed many French words about law and government.", flag:false, why:"Correct. *Court, judge* and *jury* are examples."}, " ", {t:"Printing began after the Great Vowel Shift had finished, so spelling matched the sounds.", flag:true, why:"The shift ran from about 1400 to 1700, and printing began in 1476. Spelling was fixed while sounds were still moving, so the two do not match."}, "”"
    ]},
    {id:"e6u2-l1-x6", type:"number", q:"How many years passed between the Battle of Hastings (1066) and Caxton’s printing press at Westminster (1476)?", answer:410, tol:0, unit:"years", why:"1476 − 1066 = 410 years.", wrongs:[{v:310, tol:0, why:"This subtracts 1066 from 1376, not 1476. Check the hundreds digit."},{v:510, tol:0, why:"This adds an extra hundred. Work it out as 1476 − 1000 = 476, then 476 − 66 = 410."}], hint2:"Subtract the earlier year from the later one."},
    M("e6u2-l1-x7","A friend says: “The English in the Appalachian Mountains is really Shakespeare’s English, because the settlers left in the 1600s and the language never changed.” What is the best reply?",1,[
      ["“You are right. Isolated groups keep an old language unchanged.”","No language stays unchanged, even in an isolated community. Speakers always change pronunciation, words and grammar."],
      ["“Some features are old, but English in Britain and in the colonies both kept changing after 1607.”","Right. For example, the early settlers mostly pronounced the *r* in *car*, as many American speakers still do, while many British accents later stopped. But no variety is frozen."],
      ["“The settlers changed their English completely in a single generation.”","This is also too strong. The change was gradual, and many features continued."],
      ["“Shakespeare’s English was the same as today’s English.”","Shakespeare used *thou* and verb endings such as *-eth*, and had a different system of vowels."]
    ]),
    {id:"e6u2-l1-x8", type:"explain", q:"English has many everyday words from Old English (*house, water, eat*) and many formal or legal words from French (*court, judge, residence*). Explain why, in your own words.", size:"3–4 sentences", prompt:"After 1066, …", hint:"Think about who spoke which language, and what each group talked about.", model:"After 1066 a small group of French-speaking rulers controlled the court, the law and government for about two hundred years. Most people kept speaking English at home, in the fields and in the market, so everyday words stayed English. English speakers then borrowed French words for law, government and war, because those were the areas where French was used. Over time the two vocabularies mixed, and English kept both layers.", points:["Says French was the language of the ruling group, court and law","Says most people kept speaking English for everyday life","Links the kind of word to the area where each language was used","Mentions that English borrowed and kept both layers"]}
   ],
   apply:{
    intro:"These tasks use free dictionary and recording sites. Nothing needs an account.",
    tasks:[
     {t:"Trace six words back in time", how:[
       "Open the Online Etymology Dictionary (etymonline.com) or another dictionary that shows word origins.",
       "Look up *beef, egg, school, window, they* and *house*.",
       "For each word, write the language it came from, and the period when English first used it."
     ], write:"beef… egg… school… window… they… house… Which language gave the most?"},
     {t:"Read a short sample of Old English", how:[
       "Search for a short Old English text with a modern translation. A common choice is the opening of *Beowulf*, and many university sites and recording sites have it.",
       "Find three words you can recognize and three you cannot. Write them down.",
       "Write one sentence about what is different from modern English: sounds, spelling or grammar."
     ], write:"Three words I could recognize… Three I could not… The biggest difference…"}
    ],
    proof:"A list of six word origins with the language and period for each, and a short note about what you noticed in the Old English sample."
   },
   read:[
    {book:"eling", where:"Chapter 14, Historical Linguistics, sections 14.1 “Why do languages change?” and 14.2 “Lexical change”", note:"The chapter is general (it covers many languages, not English alone). Use it to see how contact causes borrowing."}
   ]
  },
  /* ===================== LESSON 2 ===================== */
  {id:"e6u2-l2", title:"The first diaspora: settler colonies", minutes:55,
   hook:{q:"Australian English, New Zealand English and North American English all came from British and Irish English. Which statement is most accurate?", options:["Each is a copy of one British dialect, kept unchanged","Each formed in a new place, when speakers of many dialects mixed and their children created a new variety","Each is a mixture of British English and only the local Indigenous language","Each is a modern invention with no link to older English"], answer:1, reveal:"**Each formed in a new place from mixed dialects.** Settlers came from many parts of Britain and Ireland. In the new country their children and grandchildren made a shared variety. The local Indigenous languages added many words, but the grammar and basic vocabulary stayed English."},
   goals:[
     "Define diaspora and the terms first diaspora and second diaspora (Kachru)",
     "Give the key dates of settlement in North America, Australia, New Zealand and South Africa",
     "Say who already lived in these places, and describe plainly what happened to them and their languages",
     "Explain how new dialects formed from mixed British and Irish speech (Trudgill, 2004)"
   ],
   learn:[
    {h:"Two diasporas", body:[
      {lead:"A [[we-diaspora|diaspora]] is the movement of a group of people away from their homeland. Braj Kachru (1992) used the term to describe two big movements of English speakers."},
      "In the **first diaspora**, people from Britain and Ireland moved to places such as North America, Australia, New Zealand and South Africa. Many of them came to stay, build farms and towns, and raise families. Historians call these [[we-settler-colony|settler colonies]]. In the **second diaspora**, English came to Asia and Africa through trade and colonial government, and most of the population kept their own languages. Lesson 3 covers that second movement.",
      "This lesson follows the first one. It has two sides. One side is how English reached new places and became a new variety there. The other side is that these places were not empty. Every one of them already had people, languages and laws, and the arrival of settlers changed their lives, often by force.",
      {fig:'<svg viewBox="0 0 340 290"><text x="170" y="20" text-anchor="middle">The first diaspora: key dates</text><line class="d-ink" x1="40" y1="34" x2="40" y2="274" stroke-width="2"/><circle class="d-sage" cx="40" cy="52" r="7" stroke-width="2"/><text x="60" y="56">1607 · Jamestown, Virginia</text><circle class="d-soft" cx="40" cy="94" r="7" stroke-width="2"/><text x="60" y="98">1652 · Dutch station at the Cape</text><circle class="d-lup" cx="40" cy="136" r="7" stroke-width="2"/><text x="60" y="140">1776 · US declares independence</text><circle class="d-gold" cx="40" cy="178" r="7" stroke-width="2"/><text x="60" y="182">1788 · First Fleet, Sydney Cove</text><circle class="d-rose" cx="40" cy="220" r="7" stroke-width="2"/><text x="60" y="224">1840 · Treaty of Waitangi</text><circle class="d-sage" cx="40" cy="262" r="7" stroke-width="2"/><text x="60" y="266">1910 · Union of South Africa</text></svg>', alt:"A vertical line with six dots, from top to bottom: 1607 Jamestown, Virginia; 1652 Dutch station at the Cape; 1776 US declares independence; 1788 First Fleet at Sydney Cove; 1840 Treaty of Waitangi; 1910 Union of South Africa.", cap:"Six dates from the first diaspora. Each place already had Indigenous peoples and languages."}
    ]},
    {h:"North America", body:[
      "Before English arrived, hundreds of Indigenous nations lived in what are now Canada and the United States. They spoke many languages. English-speaking settlers tried to found a colony at Roanoke in the 1580s, and that attempt failed. The first lasting settlement was Jamestown, Virginia, founded in 1607. Plymouth followed in 1620. In 1619 the first recorded enslaved Africans were brought to Virginia. Over the next two hundred years, the Atlantic slave trade carried millions of people to the English-speaking colonies and to the Caribbean. Africans and African Americans created their own varieties of English and creoles. Unit 7 returns to this.",
      "Settlers took words from Indigenous languages for the plants and animals they did not know. *Raccoon, moose, skunk, chipmunk* and *hickory* come from Algonquian languages. Many place names do too, such as Massachusetts and Mississippi.",
      "The arrival of settlers was followed by epidemics of diseases that were new to the Americas, by wars, by the loss of land and by forced removals. In the 1830s, for example, the US government forced tens of thousands of people from the Cherokee, Choctaw, Muscogee, Chickasaw and Seminole nations to move west. Later, in both the United States and Canada, governments and churches ran boarding or residential schools. Indigenous children were taken from their families, and many were punished for speaking their own languages. The last federal residential school in Canada closed in 1996.",
      "The thirteen colonies declared independence on 4 July 1776. The Treaty of Paris of 1783 ended the war. In Canada, the 1763 treaty ended French rule in most of the area. The Dominion of Canada was formed in 1867, with English and French as the languages of Parliament. Noah Webster, a writer, published *An American Dictionary of the English Language* in 1828. He argued that the new country should have its own standards. He promoted spellings such as *color* and *center*, which is why US and UK spelling differ today."
    ]},
    {h:"Australia", body:[
      "Aboriginal and Torres Strait Islander peoples had lived in Australia for more than 60,000 years. At the time of British settlement they spoke about 250 languages, and estimates vary. In January 1788 the First Fleet arrived with 11 ships and about 1,400 people, more than half of them convicts, and founded a colony at Sydney Cove. British courts sent convicts to Australia until 1868.",
      "The British government claimed the whole continent. Settlers took the land, and frontier violence, massacres and new diseases killed many Aboriginal people. Later, from the 1800s until the 1970s, government policies took many Aboriginal and Torres Strait Islander children from their families. They are known as the Stolen Generations. The federal government apologized in 2008. Many of the original languages stopped being spoken, and today communities work to record and teach those that remain.",
      "The six colonies joined to form the Commonwealth of Australia in 1901. British law kept some links until the Australia Acts of 1986. Australian English took words such as *kangaroo, koala* and *boomerang* from Aboriginal languages.",
      "Toby Whitlock, an Australian master’s student in Japanese linguistics, speaks the variety that formed in this history. Its accent is not a copy of any one British accent. Linguists treat it as a full variety, with its own vowels, vocabulary and norms.",
      {ex:"Listen to a speaker of Australian English reading the same short paragraph that appears in the next two clips, from the Speech Accent Archive. You do not need to name sounds yet. Listen to the overall rhythm and the vowels.", label:"Listen: Australian English", listen:"e6u2-l2-a1"}
    ]},
    {h:"New Zealand", body:[
      "Māori settled Aotearoa, the Māori name for New Zealand, around the 13th century. European contact began with Abel Tasman’s visit in 1642 and James Cook’s first voyage in 1769. Sealers, whalers, missionaries and traders came next, and organized settlement began in the 1840s.",
      "On 6 February 1840 the British Crown and many Māori chiefs signed the Treaty of Waitangi. The English and Māori texts do not say exactly the same thing, and their meaning is still debated and argued in courts and in public life. Wars over land were fought from the 1840s to the 1870s, and land passed from Māori to settlers through war, confiscation and sale. For a long time, schools discouraged the Māori language. Māori-run “language nests”, kōhanga reo, began in 1982, and the Māori Language Act of 1987 made Māori an official language.",
      "New Zealand became a self-governing colony in 1856 and a dominion in 1907. It adopted the Statute of Westminster in 1947. New Zealand English has many Māori words, such as *kiwi, haka* and *whānau* (family).",
      {ex:"Now listen to a speaker of New Zealand English reading the same paragraph.", label:"Listen: New Zealand English", listen:"e6u2-l2-a2"}
    ]},
    {h:"South Africa", body:[
      "The Dutch East India Company set up a supply station at the Cape in 1652. Khoikhoi and San peoples already lived there, and Bantu-speaking peoples, such as the Xhosa and Zulu, lived to the east. The settlers’ Dutch changed into Afrikaans over time. Britain took control of the Cape in 1795 and again in 1806. About 4,000 British settlers arrived in 1820, and in 1822 English was made the official language of the Cape government.",
      "A long series of wars was fought on the eastern frontier and with the Zulu kingdom. Diamonds were found in 1867 and gold in 1886. The Anglo-Boer War of 1899 to 1902 was fought between Britain and the two Boer republics. The Union of South Africa was formed in 1910 as a self-governing dominion. In 1913 a law restricted African land ownership to small reserves. From 1948 to the early 1990s, the apartheid system separated people by law according to race. In 1976 school students in Soweto protested against a rule that some school subjects must be taught in Afrikaans, and many were killed by police. The first democratic election was held in April 1994.",
      "The 1996 constitution named eleven official languages, including English. In 2023 South African Sign Language became the twelfth. English is the main language of business and much of government and the media. A minority of South Africans speak it at home. White South African English, Black South African English and the English of South Africans of Indian descent are different varieties. The families of the last group came as workers from the 1860s.",
      {ex:"Listen to a speaker of South African English reading the same paragraph.", label:"Listen: South African English", listen:"e6u2-l2-a3"}
    ]},
    {h:"How new varieties formed", body:[
      {lead:"Why did settler English change, if people came from Britain?"},
      "One answer comes from Peter Trudgill (2004), who studied how new dialects form. Settlers came from many regions. In a new place, children heard a mixture of dialects. Rare features tended to drop out, features that were shared by many people tended to stay, and some forms were compromises. Linguists call this [[we-new-dialect-formation|new-dialect formation]]. Trudgill argues that it takes about two or three generations of speakers, and that the process is partly predictable. It helps to explain why Australian and New Zealand English are fairly uniform across large areas, compared with the many regional accents of Britain.",
      "Other forces also acted. The environment was new, so speakers needed new words, often borrowed from Indigenous languages. Contact with other settler groups, such as German, Dutch, Irish and Scots speakers, left marks. Distance from Britain meant that British changes arrived late or not at all. Over time local identity grew, and speakers began to value the local way of speaking. Lesson 4 shows how Schneider’s model describes this."
    ]}
   ],
   try:[
    {id:"e6u2-l2-x1", type:"match", q:"Match each event to its date.", pairs:[
      ["Jamestown, Virginia, is founded","1607","The first lasting English settlement in North America."],
      ["The Dutch East India Company sets up a station at the Cape","1652","The settlers’ Dutch later became Afrikaans."],
      ["The First Fleet founds a colony at Sydney Cove","1788","About 1,400 people arrived, more than half of them convicts."],
      ["The Treaty of Waitangi is signed","1840","It was signed by the British Crown and many Māori chiefs, and the two texts differ."],
      ["The Union of South Africa is formed","1910","A self-governing dominion of the British Empire."]
    ]},
    {id:"e6u2-l2-x2", type:"sort", q:"Each word came into English from a language of the place named. Sort the words by the region where English first took them.", buckets:["North America","Australia","New Zealand","South Africa"], items:[
      {t:"raccoon", b:0, why:"From an Algonquian language."},
      {t:"kangaroo", b:1, why:"From an Aboriginal language; Cook’s party recorded it in 1770."},
      {t:"kiwi", b:2, why:"From Māori."},
      {t:"veld", b:3, why:"From Afrikaans and Dutch, for open country."},
      {t:"moose", b:0, why:"From an Algonquian language."},
      {t:"boomerang", b:1, why:"From an Aboriginal language of the Sydney area."},
      {t:"haka", b:2, why:"A Māori word for a traditional dance."},
      {t:"trek", b:3, why:"From Afrikaans, meaning a long journey."}
    ]},
    M("e6u2-l2-x3","Which sentence best describes what the **first diaspora** means?",2,[
      ["English spreading through trade in Asia, with most people keeping their own languages","This is the second diaspora, covered in Lesson 3."],
      ["Indigenous people leaving their homelands","Many Indigenous peoples were forced from their lands, but the term first diaspora is about the movement of English speakers."],
      ["English speakers from Britain and Ireland moving to places such as North America and Australia, where many stayed for good","Right. These are the settler colonies."],
      ["The spread of English by the internet","The internet is much later. See Lesson 5."]
    ]),
    {id:"e6u2-l2-x4", type:"order", q:"Put these events in order, from earliest to latest.", items:[
      {t:"Jamestown is founded (1607)", why:"The earliest of the six."},
      {t:"The thirteen colonies declare independence (1776)", why:"4 July 1776."},
      {t:"The First Fleet reaches Sydney Cove (1788)", why:"The start of British settlement in Australia."},
      {t:"The Treaty of Waitangi is signed (1840)", why:"6 February 1840."},
      {t:"Canada becomes a Dominion (1867)", why:"The Dominion of Canada was formed in 1867."},
      {t:"The Commonwealth of Australia is formed (1901)", why:"The six colonies joined together."}
    ]},
    {id:"e6u2-l2-x5", type:"spot", q:"Toby Whitlock, from Australia, found this short summary of how English reached his country on a study website. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"English arrived with the First Fleet in 1788.", flag:false, why:"Correct. The First Fleet founded the colony at Sydney Cove in January 1788."}, " ", {t:"Australia was an empty land before the British came.", flag:true, why:"Aboriginal and Torres Strait Islander peoples had lived there for more than 60,000 years, with about 250 languages. The idea of an empty land is false."}, " ", {t:"The settlers and convicts all came from one English town, so Australian English copied its accent.", flag:true, why:"They came from many regions of Britain and Ireland. The mixing of their dialects helped to form a new variety."}, " ", {t:"Words such as *kangaroo* and *boomerang* came from Aboriginal languages.", flag:false, why:"Correct. English took them from Aboriginal languages."}, " ", {t:"Australian English is a full variety with its own norms.", flag:false, why:"Correct. It follows its own rules, like every variety."}, "”"
    ]},
    {id:"e6u2-l2-x6", type:"number", q:"How many years are there between the founding of Jamestown (1607) and the declaration of independence in 1776?", answer:169, tol:0, unit:"years", why:"1776 − 1607 = 169 years. That is about six generations of settlers.", wrongs:[{v:159, tol:0, why:"This is a borrowing slip. 1776 − 1600 = 176, and 176 − 7 = 169."},{v:179, tol:0, why:"This adds 10 by mistake. Check: 1607 + 169 = 1776."}], hint2:"Subtract the earlier year from the later one."},
    M("e6u2-l2-x7","Linguists say that Australian English is fairly uniform across a very large country, compared with the many accents of Britain. Which explanation fits Trudgill’s account of new-dialect formation?",1,[
      ["Everyone in Australia learned English from the same teacher.","There was no single teacher. The explanation is about mixing of dialects."],
      ["Settlers spoke many different British and Irish dialects. In the new place their children mixed them, and rare features dropped out.","Right. Mixing and leveling, over two or three generations, tend to produce a more uniform variety."],
      ["Aboriginal languages replaced the grammar of English.","Aboriginal languages gave words, but the grammar of Australian English is the grammar of English."],
      ["English was fixed by law in 1901.","No law fixes pronunciation. Language norms form through use."]
    ]),
    {id:"e6u2-l2-x8", type:"explain", q:"The settlers in New Zealand all spoke English. Explain why their English became different from the English they left behind.", size:"3–5 sentences", prompt:"Settlers came from many places, so…", hint:"Think about mixing, the new environment, and distance.", model:"Settlers came from many regions of Britain and Ireland, so children heard a mixture of dialects. Over two or three generations, rare features dropped out and shared ones stayed, and this made a new, fairly uniform variety. The settlers also needed words for new plants, animals and places, so they borrowed from Māori. Distance from Britain meant they did not follow every British change, and over time the local way of speaking became a sign of local identity.", points:["Says settlers spoke many dialects, which mixed in the children","Mentions leveling or loss of rare features over generations","Mentions new words from Indigenous languages for the new environment","Mentions distance or growing local identity"]}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Find the Indigenous names and languages of a place", how:[
       "Open the Native Land Digital map (native-land.ca) in a browser.",
       "Search for the town or city where you live, or choose one of the places in this lesson.",
       "Write down the names of the peoples and the languages the map shows. Treat the map as a starting point and read about the nations on their own websites.",
       "Write one sentence: is the local place name an Indigenous word? What does it mean?"
     ], write:"The place I chose… The peoples and languages… A place name that comes from one of them…"},
     {t:"Collect loanwords from a settler English", how:[
       "Choose one of the four regions in this lesson.",
       "Search a dictionary or a site such as Etymonline for ten words used in that region’s English and find out which language each came from.",
       "Mark each as a plant, an animal, a place name or a cultural word."
     ], write:"Region… Ten words and where each came from… The most common type of word…"}
    ],
    proof:"A short note about one place and its Indigenous peoples and languages, and a list of ten loanwords with their sources."
   },
   read:[
    {book:"eling", where:"Chapter 9, Reclaiming Indigenous Languages, section 9.1 “Preserving Mohawk”", note:"The chapter is about Canada and about languages that are being revived after a long period of suppression. It gives a human view of what this lesson describes."}
   ]
  },
  /* ===================== LESSON 3 ===================== */
  {id:"e6u2-l3", title:"The second diaspora: colonial Asia and Africa", minutes:55,
   hook:{q:"India became independent in 1947. How many people spoke English as a first language in the whole country at that time?", options:["Most people, because the British ruled for so long","Only a very small number; English was an additional language learned at school","Almost everyone in the cities","Everyone who could read"], answer:1, reveal:"**Only a very small number.** In the second diaspora, English was not carried by a large group of settlers. It spread through schools, offices, courts and trade, and it was learned as an additional language by a minority of the population. This lesson shows how it spread, and why it stayed after independence."},
   goals:[
     "Tell how English spread in India, Ghana, Nigeria, Singapore and the Philippines, with correct dates",
     "Say plainly what colonial rule involved, including violence and famine, and who could learn English",
     "Give independence dates: Philippines 1946, India 1947, Ghana 1957, Nigeria 1960, Singapore 1965",
     "Explain why many countries kept English after independence, and why some did not"
   ],
   learn:[
    {h:"A different kind of colony", body:[
      {lead:"The second diaspora was not a mass move of English speakers. A small number of administrators, soldiers, traders and teachers came, and ruled over millions of people who spoke other languages."},
      "A colony is a territory ruled by another country. [[we-colonialism|Colonialism]] in Asia and Africa was mostly about control of land, trade and labor. Colonial governments collected taxes, took resources, and often used force to put down resistance. English became the language of government, law, higher education and the best jobs. Schools, many of them run by Christian missions, taught English to a minority. Learning English opened doors, and also showed who was shut out.",
      "Kachru later called the places where English came this way the *outer circle* (Unit 1 explains the model). In these places English is usually an additional language for most speakers, and people also use it with each other in daily life."
    ]},
    {h:"India", body:[
      "The British East India Company received a royal charter in 1600 and traded with India. After the Battle of Plassey in 1757, the Company gained political control of Bengal, and then of much of the subcontinent. After the rebellion of 1857, the British Crown took over the government in 1858.",
      "In 1835 Thomas Macaulay, a British official, wrote his *Minute on Indian Education*. He argued that the government should spend its education money on teaching English, to make a class of Indians who would work for the colonial government. The government accepted this policy. English replaced Persian as the language of the higher courts in 1837, and universities teaching in English opened in Calcutta, Bombay and Madras in 1857.",
      "Colonial rule was often violent. In April 1919, British-led troops fired on an unarmed crowd at Jallianwala Bagh in Amritsar. The official British figure was 379 killed, and Indian estimates are higher. Famines under British rule, including the Bengal famine of 1943, killed millions of people, and estimates vary.",
      "India became independent on 15 August 1947, and Pakistan on 14 August 1947. The land was divided at the same time. The partition caused violence that killed very many people and forced millions to leave their homes. The Indian constitution of 1950 made Hindi the official language of the Union and allowed English for 15 years. Protests, especially in Tamil Nadu, showed that many people did not want Hindi as the only language. A law in 1963 let English continue as an additional official language. Today the central government has two official languages, Hindi and English. The constitution also lists 22 languages in its Eighth Schedule.",
      "Indian English has its own words. *Prepone* means to move an event earlier, the opposite of *postpone*. *Cousin-brother* means a male cousin. Sri Lanka became independent in 1948, and English is also widely used there as a link language.",
      {ex:"Listen to a speaker of Indian English reading the same paragraph from the Speech Accent Archive. English in India has many regional accents, so this is one speaker, not “the” Indian accent.", label:"Listen: Indian English", listen:"e6u2-l3-a1"}
    ]},
    {h:"Ghana and Nigeria", body:[
      "On the coast of present-day Ghana, European traders built forts from the 1400s, first for gold and then for the trade in enslaved people. Cape Coast Castle, held by the British, was one of the places where enslaved Africans were held before being shipped across the Atlantic. Britain made the Gold Coast a colony in 1874 and took over Asante by 1901. Kwame Nkrumah led the independence movement. Ghana became independent on 6 March 1957, and is often described as the first colony in sub-Saharan Africa to gain independence from European colonial rule. English is the official language. People also speak Akan (including Twi), Ewe, Ga and many other languages.",
      "Britain annexed Lagos in 1861. In 1900 it created the Protectorates of Northern and Southern Nigeria, and in 1914 it joined them into one colony. Nigeria became independent on 1 October 1960. A civil war followed from 1967 to 1970. More than 500 languages are spoken in Nigeria, and English is the official language. English is used in government, schools and media, and Nigerian Pidgin is widely used between people in daily life.",
      "West African English has its own words. *Go-slow* in Nigerian English means a traffic jam. In Ghana and Nigeria, *chop* means to eat, and a *chop bar* is a small restaurant.",
      {ex:"Listen to a speaker of Nigerian English reading the same paragraph.", label:"Listen: Nigerian English", listen:"e6u2-l3-a2"},
      {ex:"Now listen to a speaker of Ghanaian English reading the same paragraph.", label:"Listen: Ghanaian English", listen:"e6u2-l3-a3"}
    ]},
    {h:"Singapore", body:[
      "Stamford Raffles of the East India Company set up a trading post at Singapore in 1819. It joined the Straits Settlements in 1826 and became a British crown colony in 1867. The population grew by migration from southern China, Malaya, the Indian subcontinent and elsewhere, so English became the language that connected the groups. Japan occupied Singapore from 15 February 1942 to September 1945.",
      "Singapore gained self-government in 1959, joined Malaysia on 16 September 1963, and left it on 9 August 1965. That date is Singapore’s independence. In 1966 the government introduced a bilingual education policy. English is the main language of school, and each child also studies a “mother tongue”: Mandarin, Malay or Tamil. English is the language of administration and business, and the language that people from different groups usually share.",
      {ex:"Listen to a speaker of Singapore English reading the same paragraph.", label:"Listen: Singapore English", listen:"e6u2-l3-a4"}
    ]},
    {h:"The Philippines under US rule", body:[
      "Spain ruled the Philippines from the 1560s. In 1898 Filipino revolutionaries declared independence on 12 June, and Spain and the United States fought a short war. In the Treaty of Paris, signed on 10 December 1898, Spain gave the Philippines to the United States, which paid Spain 20 million dollars. Filipino forces did not accept this, and the Philippine–American War followed from 1899. The US government declared the war over in 1902, but fighting continued in some areas for years. Hundreds of thousands of Filipino civilians died from fighting, hunger and disease, and estimates vary.",
      "In 1901 the US colonial government set up a public school system with English as the language of teaching. About 500 American teachers arrived in August 1901. They are called Thomasites, after the ship *Thomas*. Cheska Ibabao, a master’s student from the Philippines, studies in Japan in a course taught in English. She comes from a country where English has been a language of school for more than a century. In 1937 the Commonwealth government chose Tagalog as the basis of a national language, now called Filipino.",
      "The Philippines became a self-governing Commonwealth in 1935. Japan occupied the country from 1942 to 1945. The Philippines became independent on 4 July 1946. Since 1962 the country has celebrated independence day on 12 June, the date of the 1898 declaration. The 1987 constitution makes Filipino and English the official languages. Education policy on the language of the early grades has changed several times.",
      {ex:"Listen to a speaker of Philippine English reading the same paragraph.", label:"Listen: Philippine English", listen:"e6u2-l3-a5"},
      {fig:'<svg viewBox="0 0 340 300"><text x="170" y="20" text-anchor="middle">Independence dates</text><line class="d-ink" x1="40" y1="34" x2="40" y2="280" stroke-width="2"/><circle class="d-sage" cx="40" cy="50" r="7" stroke-width="2"/><text x="60" y="54">1946 · Philippines · 4 July</text><circle class="d-lup" cx="40" cy="90" r="7" stroke-width="2"/><text x="60" y="94">1947 · India · 15 August</text><circle class="d-gold" cx="40" cy="130" r="7" stroke-width="2"/><text x="60" y="134">1957 · Ghana · 6 March</text><circle class="d-rose" cx="40" cy="170" r="7" stroke-width="2"/><text x="60" y="174">1960 · Nigeria · 1 October</text><circle class="d-soft" cx="40" cy="210" r="7" stroke-width="2"/><text x="60" y="214">1965 · Singapore · 9 August</text><text class="s" x="60" y="250">Dates are as celebrated or recognized</text><text class="s" x="60" y="268">by each country. Pakistan: 14 August 1947.</text></svg>', alt:"A vertical line with five dots, from top to bottom: 1946 Philippines, 4 July; 1947 India, 15 August; 1957 Ghana, 6 March; 1960 Nigeria, 1 October; 1965 Singapore, 9 August. A note says Pakistan became independent on 14 August 1947.", cap:"Five independence dates in order. Each country has a different history and a different path."}
    ]},
    {h:"After independence: why keep English?", body:[
      {lead:"Many new countries kept English as an official or working language. They had good reasons, and some people argued about them then and still do."},
      "First, new countries often had dozens or hundreds of languages. Choosing one would favor one group over the others, and this could cause conflict. English was not the first language of any large group, so it looked neutral. Second, law, universities, government files and school books were already in English, and changing everything would be expensive. Third, English gave access to international trade, science and travel.",
      "There are costs too. English is still learned mostly by people who go to better schools, so it can work as a barrier. Children who start school in a language they do not speak at home can fall behind. Writers disagree about English itself. Chinua Achebe, a Nigerian novelist, argued in 1965 that English could carry African experience if it were changed to suit new surroundings. Ngũgĩ wa Thiong’o, a Kenyan writer, decided in the 1970s to write in Gikuyu, and explained why in *Decolonising the Mind* (1986).",
      "Not every country made the same choice. Indonesia, a Dutch colony, chose a Malay-based national language, Indonesian. Malaysia, independent in 1957, made Malay its national language. Tanzania promoted Swahili in primary schools. In these countries English remained important in some areas, but it was not the main language of national life.",
      "Where English stayed, it kept changing. Local speakers used it with each other and gave it local words, grammar and sounds. Scholars document these features, for example in the *Electronic World Atlas of Varieties of English*, eWAVE (Kortmann et al.). Lesson 4 shows how Schneider describes this process."
    ]}
   ],
   try:[
    {id:"e6u2-l3-x1", type:"match", q:"Match each country to the date of its independence.", pairs:[
      ["The Philippines","4 July 1946","Independence from the United States."],
      ["India","15 August 1947","Pakistan became independent on 14 August 1947."],
      ["Ghana","6 March 1957","Often described as the first colony in sub-Saharan Africa to gain independence from European colonial rule."],
      ["Nigeria","1 October 1960","A civil war followed from 1967 to 1970."],
      ["Singapore","9 August 1965","The date it left the federation of Malaysia."]
    ]},
    {id:"e6u2-l3-x2", type:"sort", q:"Which country does each fact belong to?", buckets:["India","Ghana","Nigeria","Singapore","Philippines"], items:[
      {t:"Raffles set up a trading post in 1819", b:3, why:"This is the founding of British Singapore."},
      {t:"American teachers called Thomasites arrived in 1901", b:4, why:"They came to the Philippines to set up English-language schools."},
      {t:"Macaulay wrote a minute on English education in 1835", b:0, why:"The Minute on Indian Education."},
      {t:"Kwame Nkrumah led the independence movement", b:1, why:"He became Ghana’s first prime minister."},
      {t:"Two protectorates were joined into one colony in 1914", b:2, why:"Northern and Southern Nigeria."},
      {t:"A law of 1963 allowed English to continue as an additional official language", b:0, why:"The Official Languages Act of 1963."},
      {t:"A bilingual education policy began in 1966", b:3, why:"English plus a mother tongue."}
    ]},
    M("e6u2-l3-x3","Which sentence best explains why many countries in Asia and Africa kept English after independence?",1,[
      ["Because English was the first language of most people.","In most of these countries, English was the first language of a small minority."],
      ["Because there were many local languages, and English was already used in law, schools and trade and did not favor one local group.","Right. These are the usual reasons, though people debate whether English is neutral."],
      ["Because the former colonial government forced the new governments to do so.","New governments made their own decisions, and some chose other languages."],
      ["Because English is easier to learn than local languages.","No language is easier in itself, and the reasons were political and practical."]
    ]),
    {id:"e6u2-l3-x4", type:"order", q:"Put these independence dates in order, from earliest to latest.", items:[
      {t:"The Philippines (1946)", why:"4 July 1946."},
      {t:"India (1947)", why:"15 August 1947."},
      {t:"Ghana (1957)", why:"6 March 1957."},
      {t:"Nigeria (1960)", why:"1 October 1960."},
      {t:"Singapore (1965)", why:"9 August 1965."}
    ]},
    {id:"e6u2-l3-x5", type:"spot", q:"Cheska Ibabao, from the Philippines, found this short note about English in her country on a travel website. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"Spain ruled the Philippines before 1898.", flag:false, why:"Correct. Spanish rule began in the 1500s."}, " ", {t:"The United States set up an English-language school system in 1901.", flag:false, why:"Correct. About 500 American teachers arrived in August 1901."}, " ", {t:"The country became independent on 4 July 1946.", flag:false, why:"Correct. Since 1962 the country celebrates on 12 June, the date of the 1898 declaration."}, " ", {t:"English replaced every other language in the country.", flag:true, why:"The Philippines has many languages, and Filipino and English are both official. English did not replace the others."}, " ", {t:"Nobody resisted American rule.", flag:true, why:"Filipino forces fought the Philippine–American War from 1899. Fighting continued in some areas for years after 1902."}, "”"
    ]},
    {id:"e6u2-l3-x6", type:"number", q:"Raffles set up a trading post at Singapore in 1819. Singapore became independent in 1965. How many years is that?", answer:146, tol:0, unit:"years", why:"1965 − 1819 = 146 years. This includes the period of Japanese occupation, from 1942 to 1945.", wrongs:[{v:136, tol:0, why:"This is a subtraction slip of 10. Check: 1819 + 146 = 1965."},{v:156, tol:0, why:"This adds 10 by mistake. Work it out as 1965 − 1800 = 165, then 165 − 19 = 146."}], hint2:"Subtract the earlier year from the later one."},
    M("e6u2-l3-x7","A learner says, “Indian English words like *prepone* are mistakes.” What is the best reply?",2,[
      ["“You are right, because *prepone* is not in any dictionary.”","Large dictionaries do list *prepone* and label it Indian English."],
      ["“It is a mistake, because only British English words are correct.”","No variety is the standard for all the others. Each variety has its own rules."],
      ["“It is a regular word of Indian English, formed on the pattern of *postpone*. It is a feature of that variety, not an error.”","Right. Speakers formed *prepone* by analogy with *postpone*, and many Indian English speakers use it."],
      ["“It only appears in very old texts.”","*Prepone* is in current use."]
    ]),
    {id:"e6u2-l3-x8", type:"explain", q:"A friend says: “If India was ruled by Britain, then English must be the first language of most Indians.” Explain what is wrong with this idea, and how English spread in India.", size:"3–5 sentences", prompt:"English did not spread like that, because…", hint:"Think about who came, who learned English, and where.", model:"Britain ruled India with a small number of officials and soldiers, not with a large group of settlers who stayed. English spread through government, law, universities and schools, such as the policy that Macaulay supported in 1835. Only a minority of Indians learned it, and most people kept their own languages, so English became an additional language. After independence in 1947, English stayed as an official language alongside Hindi, but it is the first language of very few people.", points:["Says Britain ruled with a small number of officials, not a mass of settlers","Says English spread through schools, law and government","Says most people kept their own languages and English was an additional language","Mentions that English stayed after 1947 as an official language"]}
   ],
   apply:{
    intro:"These tasks use free websites. Nothing needs an account.",
    tasks:[
     {t:"Check the language policy of one country", how:[
       "Choose one country from this lesson.",
       "Open the Constitute project (constituteproject.org) and search for the country’s constitution. Find the section on languages.",
       "Write down which languages are official or national, and whether English is one of them."
     ], write:"The country… Official or national languages… Is English one of them?"},
     {t:"Look up two features of a variety in eWAVE", how:[
       "Open the eWAVE atlas (ewave-atlas.org).",
       "Choose one variety: Indian, Nigerian, Ghanaian, Singapore or Philippine English.",
       "Choose two features that the atlas says are common in that variety. Write them in plain words, with one example sentence for each.",
       "Remember: a feature of a variety is not an error. It is part of that variety’s rules."
     ], write:"The variety… Two features… My example sentences…"}
    ],
    proof:"A short note on one country’s language policy, and two features of one variety, with examples."
   },
   read:[
    {book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”", note:"Background reading on how languages are tied to identity and power. It does not cover colonial English directly."}
   ]
  },
  /* ===================== LESSON 4 ===================== */
  {id:"e6u2-l4", title:"Schneider’s Dynamic Model in five phases", minutes:55,
   hook:{q:"A new variety of English forms in a former colony. Schneider’s Dynamic Model says that the main driver of the change is…", options:["the number of English teachers","how people see themselves and each other (identity)","the distance from Britain","the size of the army"], answer:1, reveal:"**Identity.** Edgar Schneider argues that the language follows how the groups involved see themselves and each other. When settlers and local people begin to see themselves as members of one new community, a local variety of English grows and gains respect. Political and social conditions matter, but identity is at the center."},
   goals:[
     "Name Schneider’s five phases in the right order",
     "Explain exonormative and endonormative, and the settler and Indigenous strands",
     "Place Singapore and the United States on the model, with dates marked as approximate",
     "Say what the model explains well, and where it does not fit"
   ],
   learn:[
    {h:"A model for many Englishes", body:[
      {lead:"Lessons 2 and 3 told many different stories. Edgar Schneider asked whether they have something in common."},
      "In a 2003 article in the journal *Language*, Schneider compared English in many countries. The title was “The dynamics of New Englishes: from identity construction to dialect birth”. He expanded the work in his 2007 book *Postcolonial English: Varieties around the World*. He found that the details differ, but a similar pattern appears again and again. He called it the **Dynamic Model**. It has five phases. “Dynamic” means that the phases are not fixed boxes. They overlap, and a country can move forward slowly, or in different ways for different groups.",
      "The model rests on a simple idea. How people use language follows how they see themselves. A group that sees itself as part of a distant country will use that country’s norms. A group that sees itself as a new community will build its own norms.",
      {tip:"The five names are easy to mix up, so learn them in order from the table below. The two long names are a pair: *exo-* means “outside” and *endo-* means “inside”."}
    ]},
    {h:"Two strands and four parameters", body:[
      "Schneider describes two groups that meet in every case. The **settler strand** is the group that came from outside, such as British settlers or colonial officials. The **Indigenous strand** is the group already there. In each phase he asks the same four questions, called parameters. What is the **political background**? How do the groups **construct their identities**? What are the **sociolinguistic conditions**: who speaks what, and who is bilingual? What are the **linguistic effects** on English itself?",
      "Two words need explaining. A [[we-exonormative|exonormative]] standard is a norm that comes from outside the community. For a colony, it usually means British English. An [[we-endonormative|endonormative]] standard is a norm that comes from inside the community: the local educated speakers decide what is good English."
    ]},
    {h:"The five phases", body:[
      {fig:'<svg viewBox="0 0 340 340"><defs><marker id="e6u2b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="d-inkf" d="M0 0L10 5L0 10z"/></marker></defs><text x="170" y="18" text-anchor="middle">Schneider’s five phases</text><rect class="d-soft" x="14" y="30" width="230" height="50" rx="8" stroke-width="2"/><text x="26" y="52">1  Foundation</text><text class="s" x="26" y="70">English arrives; first contact</text><rect class="d-sage" x="34" y="84" width="250" height="50" rx="8" stroke-width="2"/><text x="46" y="106">2  Exonormative stabilization</text><text class="s" x="46" y="124">Outside norm; a stable colony</text><rect class="d-lup" x="54" y="138" width="270" height="50" rx="8" stroke-width="2"/><text x="66" y="160">3  Nativization</text><text class="s" x="66" y="178">Local identity; local features appear</text><rect class="d-gold" x="34" y="192" width="270" height="50" rx="8" stroke-width="2"/><text x="46" y="214">4  Endonormative stabilization</text><text class="s" x="46" y="232">Local norm accepted</text><rect class="d-rose" x="14" y="246" width="270" height="50" rx="8" stroke-width="2"/><text x="26" y="268">5  Differentiation</text><text class="s" x="26" y="286">Regional and social varieties</text><text class="s" x="170" y="318" text-anchor="middle">Phases overlap. Countries move at different speeds.</text></svg>', alt:"Five boxes in steps, from top to bottom: Foundation, Exonormative stabilization, Nativization, Endonormative stabilization and Differentiation, each with a short note. A line under them says that phases overlap and countries move at different speeds.", cap:"The five phases of the Dynamic Model. The step shape shows movement from outside norms to inside norms and then to variety within the country."},
      {table:[["Phase","What happens","Typical signs"],["1 Foundation","English arrives in a new territory with traders, settlers or officials","Settlers keep British norms; first loanwords, mostly place names and local plants"],["2 Exonormative stabilization","The colony becomes stable and English is used by more people","British English is the model; local forms are marked as wrong; Indigenous elites learn English in school"],["3 Nativization","Settlers and local people begin to see themselves as one new community","Local pronunciation, grammar and words spread; complaints that standards are falling"],["4 Endonormative stabilization","A local norm is accepted, often after political independence","Local dictionaries, local writers and teachers accept local English"],["5 Differentiation","The nation’s identity is secure, and smaller groups mark their own identity","Regional, ethnic and social varieties inside the country"]]},
      "**Phase 1, foundation.** English comes with settlers, soldiers, traders or officials. Settlers speak it among themselves and stay in close contact with home. Some local people learn a little English as translators or traders. The first result is borrowing: place names and words for local plants and animals.",
      "**Phase 2, exonormative stabilization.** The colony becomes politically stable, and more people learn English, often in school. Settlers think of themselves as people from the home country living abroad, so British English is the model and local ways of speaking are seen as mistakes. Local words increase.",
      "**Phase 3, nativization.** Schneider calls this the central phase. A cultural and linguistic break with the old country begins. People who used to think of themselves as “settlers” and “locals” begin to share a new identity. The language changes a lot in this period: new pronunciations, new grammar patterns and many local words appear. This often causes argument. Educated speakers may complain that standards are falling, which Schneider calls the *complaint tradition*.",
      "**Phase 4, endonormative stabilization.** This usually follows political independence. The country accepts its own English as a norm. People write local dictionaries and teaching materials. Writers use local English with pride, and the new variety is seen as a sign of national identity.",
      "**Phase 5, differentiation.** The country’s identity is now secure, so smaller groups look for their own identity. Regional, ethnic and social varieties appear inside the nation."
    ]},
    {h:"Example 1: Singapore", body:[
      "This is a simplified reading of Schneider’s account (2007), with approximate dates. English arrived in 1819 with Raffles’s trading post, which fits **foundation**. During the 1800s and early 1900s British colonial rule was stable, schools taught British English, and British English was the model, which fits **exonormative stabilization**. Later, people from different groups in the mixed community used English with each other more and more, and a local variety grew. This fits **nativization**.",
      "Schneider (2003, 2007) places Singapore English in Phase 4, **endonormative stabilization**, after independence in 1965 and the bilingual policy of 1966. Other scholars debate this placement, and the picture is not tidy. Many Singaporeans speak a colloquial variety known as Singlish and also a more formal Standard Singapore English. The government has promoted a standard close to international English, for example in the Speak Good English Movement, which began in 2000. Attitudes to Singlish are mixed and debated in public. The case shows that a country can show signs of more than one phase at the same time."
    ]},
    {h:"Example 2: the United States", body:[
      "The United States is a good example of a full cycle. The dates are approximate, and scholars disagree about the boundaries. The settlements from 1607 fit **foundation**. In the 1600s and 1700s, colonists used British norms: **exonormative stabilization**. The conflict with Britain that led to independence in 1776 also changed attitudes, which fits **nativization**. In the 1800s, Noah Webster’s dictionary (1828) and American writers promoted an American standard: **endonormative stabilization**. In the 1900s, scholars documented regional, ethnic and social varieties, which fits **differentiation**. Schneider (2003) counts American English as having reached this last phase.",
      "Schneider’s model describes the settler and Indigenous strands. But the histories of Native American peoples and of enslaved Africans and their descendants do not fit neatly into one cycle. Unit 7 looks at pidgins and creoles."
    ]},
    {h:"What the model does well, and its limits", body:[
      "The model helps in three ways. It shows that many countries follow a similar pattern. It explains why attitudes change: first the outside norm, then argument, then local acceptance. It makes clear that identity drives language change.",
      "It also has limits. Schneider presents it as a general pattern, not a law, and some places do not fit. It is built for postcolonial countries, so it does not describe English in countries such as Japan, where English has no colonial history (Unit 8 covers that). It treats the nation as the main unit, but many people live across borders. And it describes change over time without ranking varieties. A variety in Phase 5 is not “better” than one in Phase 2."
    ]}
   ],
   try:[
    {id:"e6u2-l4-x1", type:"order", q:"Put Schneider’s five phases in order.", items:[
      {t:"Foundation", why:"English first arrives in a new territory."},
      {t:"Exonormative stabilization", why:"The colony is stable, and the norm comes from outside."},
      {t:"Nativization", why:"Local identity grows and local features appear. This is the central phase."},
      {t:"Endonormative stabilization", why:"A local norm is accepted."},
      {t:"Differentiation", why:"Regional and social varieties appear inside the new nation."}
    ]},
    {id:"e6u2-l4-x2", type:"match", q:"Match each phase to its description.", pairs:[
      ["Foundation","English arrives; first loanwords for places and plants","The first contact between the two groups."],
      ["Exonormative stabilization","British English is the model, and local forms are marked as wrong","The norm is outside the community."],
      ["Nativization","Settlers and locals share a new identity, and local features spread","Often accompanied by the complaint tradition."],
      ["Endonormative stabilization","A local dictionary and local writers accept local English","The norm is inside the community."],
      ["Differentiation","Regional and ethnic varieties appear inside the country","The nation’s identity is secure."]
    ]},
    {id:"e6u2-l4-x3", type:"sort", q:"Is each clue typical of an **exonormative** or an **endonormative** setting?", buckets:["Exonormative","Endonormative"], items:[
      {t:"Teachers use textbooks from Britain as the model", b:0, why:"The norm comes from outside the community."},
      {t:"The country publishes its own dictionary of local English", b:1, why:"The local community decides what is good English."},
      {t:"Local forms are corrected as mistakes in school", b:0, why:"The outside norm is the measure."},
      {t:"Writers use local words and grammar with pride", b:1, why:"Local English is accepted as a norm."},
      {t:"Newsreaders are expected to sound like speakers in the old home country", b:0, why:"The outside accent is the model."},
      {t:"Educated local speakers decide what counts as good usage", b:1, why:"The norm is inside the community."}
    ]},
    M("e6u2-l4-x4","In which phase do settlers and local people start to share one new identity, and many local features appear?",2,[
      ["Foundation","In foundation the groups are still separate, and English has just arrived."],
      ["Exonormative stabilization","Here the model is still the outside norm, and local forms are seen as wrong."],
      ["Nativization","Right. This is the central phase of the model."],
      ["Differentiation","This is the last phase, when smaller groups within the nation mark their own identity."]
    ]),
    {id:"e6u2-l4-x5", type:"spot", q:"A student wrote about Schneider’s model. Tap each statement that **misuses the model**.", ask:"misuses the model", parts:[
      "“", {t:"The model has five phases, and they can overlap.", flag:false, why:"Correct. Schneider calls the model dynamic, and the phases overlap."}, " ", {t:"Phase 5 means that a variety has become worse than the variety of Phase 4.", flag:true, why:"The model describes change, not quality. No phase ranks above another."}, " ", {t:"Every country spends the same number of years in each phase.", flag:true, why:"Countries move at different speeds. Some move slowly or in different ways for different groups."}, " ", {t:"Identity construction is central in the model.", flag:false, why:"Correct. Schneider argues that how groups see themselves drives the change."}, " ", {t:"The model fully describes English in Japan.", flag:true, why:"The model is built for postcolonial settings. English in Japan has a different history."}, "”"
    ]},
    {id:"e6u2-l4-x6", type:"number", q:"Singapore became independent in 1965. The Speak Good English Movement began in 2000. How many years later was that?", answer:35, tol:0, unit:"years", why:"2000 − 1965 = 35 years.", wrongs:[{v:25, tol:0, why:"This is a subtraction slip of 10. Check: 1965 + 35 = 2000."},{v:45, tol:0, why:"This adds 10 by mistake. Work it out as 2000 − 1965: 2000 − 1900 = 100, then 100 − 65 = 35."}], hint2:"Subtract the earlier year from the later one."},
    M("e6u2-l4-x7","Which clue best shows a country has moved from Phase 2 to Phase 3?",1,[
      ["Teachers still say that local forms are mistakes, and British English is the only model.","This describes Phase 2, exonormative stabilization."],
      ["Local forms spread among educated speakers, and some people complain that standards are falling.","Right. These are signs of nativization and the complaint tradition."],
      ["English has just arrived with the first traders.","This is Phase 1, foundation."],
      ["Several regional dialects of the local English have their own names.","This suggests Phase 5, differentiation."]
    ]),
    {id:"e6u2-l4-x8", type:"explain", q:"In your own words, explain what exonormative and endonormative mean. Then say why identity matters for the shift between them.", size:"3–5 sentences", prompt:"Exonormative means…", hint:"Say whose norm is used, and what changes when people see themselves as a new community.", model:"An exonormative standard comes from outside the community. In a colony it is usually British English, and local speech is treated as wrong. An endonormative standard comes from inside. Educated local speakers decide what is good English, and the country’s own dictionaries and writers support it. The shift happens when people stop seeing themselves as outsiders from another country. They begin to see themselves as members of a new community. Schneider argues that language follows this change in identity.", points:["Defines exonormative as a norm from outside the community","Defines endonormative as a norm from inside the community","Says the shift follows a change in how people see themselves","Mentions an example of what changes, such as dictionaries, writers or teaching"]}
   ],
   apply:{
    intro:"These tasks need a browser. Nothing needs an account.",
    tasks:[
     {t:"Place a country on the model", how:[
       "Choose one country from Lessons 2 and 3 (not Singapore or the United States).",
       "Write one clue for each phase you think the country has passed through, with an approximate date.",
       "Decide which phase you think the country is in today and explain your choice in one or two sentences. Say where you are not sure."
     ], write:"The country… My clues for each phase… My choice and my doubts…"},
     {t:"Look for signs of a local norm", how:[
       "Pick one country, such as Singapore, India, the Philippines or Nigeria. Search for a local dictionary or style guide of its English.",
       "Write down whether you can find a local dictionary, local newspapers that use local words, or local writers who use local English.",
       "Write one sentence: what does this suggest about the phase of that country?"
     ], write:"The country… What I found… My conclusion…"}
    ],
    proof:"A short note that places one country on the five phases with clues, and a second note about evidence of a local norm."
   },
   read:[
    {book:"eling", where:"Chapter 10, Language Variation and Change, section 10.3 “Language changes”", note:"Background reading. The book does not describe Schneider’s model, but the section explains how new variants spread through a community."}
   ]
  },
  /* ===================== LESSON 5 ===================== */
  {id:"e6u2-l5", title:"English today: media, the internet and other languages", minutes:55,
   hook:{q:"Which of these English words came from Japanese?", options:["tsunami","mansion","salary","weekend"], answer:0, reveal:"**Tsunami** (津波). It came into English from Japanese, along with *karaoke* and *emoji*. *Mansion, salary* and *weekend* are English words. Word flows go both ways: English has also given Japanese words such as マンション (*manshon*, an apartment building). Language contact is never one-way."},
   goals:[
     "Describe how US influence, global media and the internet have spread English since 1945",
     "Explain language shift and endangerment, and why English is only one cause among several",
     "Present the debate about the spread of English fairly, including Phillipson (1992)",
     "Describe English in Japan neutrally: its history, school policy and loanwords"
   ],
   learn:[
    {h:"From empire to a US-centered century", body:[
      {lead:"The British Empire was at its largest in the early 1900s. English kept spreading after it ended, for different reasons."},
      "After the Second World War, the United States had the largest economy in the world. It also had the world’s biggest film industry, record companies, and many of its leading universities and research labs. The United Nations began in 1945. Its Secretariat uses English and French as working languages. English became the main language of many international organizations, of science and academic publishing, of aviation, of shipping and of international business. The reasons are mostly practical: once many people in a field use a language, everyone else has a strong reason to learn it.",
      "This is a different route from the second diaspora. Many people now learn English not because a colonial government taught it in schools, but because they want to study, work, travel or read what others have written. Kachru’s model places these countries in the *expanding circle* (Unit 1)."
    ]},
    {h:"Media and the internet", body:[
      "Hollywood films, television series, pop songs and, later, video games and streaming services carried English into homes around the world. In many countries, films and series are shown with subtitles, so people hear English every day. In others, they are dubbed into the local language.",
      "The early internet was built mostly in the United States. Its first systems used the English alphabet, and many websites and programming languages used English words. Unicode, which began in 1991, made it possible to write almost all the world’s scripts, and today web content exists in a very large number of languages. English remains the most common language of web content, but the share depends on how it is measured, and many other languages are growing online.",
      "On the internet, English is also changing fast. Abbreviations and memes spread across countries in days. Writers mix English with other languages in the same message, such as Hindi and English, or Tagalog and English. Machine translation tools now handle many language pairs, and nobody yet knows how much this will change why people learn English."
    ]},
    {h:"English alongside other languages", body:[
      {lead:"Most people in the world are multilingual. English is usually one language in a set, used for some purposes and not others."},
      "Linguists talk about **domains**: home, school, religion, work, friends, online. A person might speak Yoruba at home, English at university, and Nigerian Pidgin with friends. English often has a special place in domains such as higher education, law and international trade.",
      "When a community moves from its heritage language to another language, linguists call this [[we-language-shift|language shift]]. A common pattern, studied in many immigrant communities, takes about three generations (see the diagram). The first generation speaks the heritage language at home. Their children speak both. Their grandchildren speak mostly the majority language and understand a little of the heritage language. The pattern is not a law, and many families and communities keep the heritage language alive.",
      {fig:'<svg viewBox="0 0 340 280"><text x="170" y="20" text-anchor="middle">A common three-generation pattern</text><text class="s" x="14" y="46">Generation 1</text><rect class="d-sage" x="14" y="52" width="312" height="30" rx="6" stroke-width="2"/><text x="26" y="72">Heritage language at home; some English</text><text class="s" x="14" y="110">Generation 2</text><rect class="d-lup" x="14" y="116" width="312" height="30" rx="6" stroke-width="2"/><text x="26" y="136">Both languages: one at home, one at school</text><text class="s" x="14" y="174">Generation 3</text><rect class="d-gold" x="14" y="180" width="312" height="30" rx="6" stroke-width="2"/><text x="26" y="200">Mostly English; understands some heritage</text><text class="s" x="170" y="238" text-anchor="middle">Schools, jobs and prestige push the shift.</text><text class="s" x="170" y="256" text-anchor="middle">Family choices and community action can slow it.</text></svg>', alt:"Three boxes, one for each generation. Generation 1: heritage language at home, some English. Generation 2: both languages, one at home and one at school. Generation 3: mostly English, understands some heritage language. A note says that schools, jobs and prestige push the shift, and that family choices and community action can slow it.", cap:"A common pattern of language shift over three generations. Not every family follows it."},
      "Language shift has several causes: school in the majority language, jobs, migration, moves to cities, and the low status that societies have often given to minority languages. English is one cause among many. Mandarin, Spanish, Russian, Arabic, Hindi and Swahili have also taken the place of smaller languages in different regions.",
      "Ethnologue, a widely used catalog of the world’s languages, counts more than 7,100 living languages and classes more than four in ten of them as endangered. The figures change with each edition. Many communities work to revive their languages. Examples are the Māori language nests, the Hawaiian-language preschools (Pūnana Leo) that first opened in 1984, and the Mohawk programs described in Chapter 9 of *Essentials of Linguistics*."
    ]},
    {h:"A debate to present fairly", body:[
      "Scholars disagree about the global spread of English. Robert Phillipson, in *Linguistic Imperialism* (1992), argued that it serves the economic and political interests of English-speaking countries. He also argued that it puts other languages at risk. Other scholars, such as David Crystal in *English as a Global Language* (2003), describe the spread as the result of many practical choices. They argue that a global language can exist next to local languages. Many people hold views in between. Both sides use evidence about schools, jobs and media, and the picture differs from one country to another.",
      {tip:"When you explain a debate, say who argues what, and give each side its best reason. Do not decide for the reader."}
    ]},
    {h:"English in Japan", body:[
      "Japan was never a colony of Britain or the United States. In Kachru’s terms it is in the expanding circle. English is a foreign language with no official status. People use it to read, study, travel, do business and speak with visitors.",
      "Japanese people studied Western languages through Dutch contacts in the 1700s and 1800s. After the arrival of US ships in 1853, and especially after the Meiji period began in 1868, English became more important in education and trade. After the Second World War, English became the main foreign language in secondary schools, and it is part of the entrance exams for many schools and universities. Since 2020, English has been a formal subject in grades 5 and 6 of elementary school, and “foreign language activities” start in grade 3. Japan’s education ministry also sets goals for communication as well as for reading and grammar. Researchers and teachers debate class sizes, exams, teacher training and speaking practice. This course does not rank or judge those debates.",
      "Mariya Seto, from the island of Shiojima, studies English interpreting at a university in Japan. Interpreting is skilled work that connects speakers of different languages.",
      "Contact goes both ways. Japanese has taken thousands of English-based words, called *gairaigo*. Examples are マンション (*manshon*, an apartment building), サラリーマン (*sarariiman*, an office worker with a salary) and スマホ (*sumaho*, short for smartphone). Some are made-in-Japan combinations that do not exist in English, so they can confuse English speakers. English has also taken words from Japanese, such as *tsunami, karaoke* and *emoji*.",
      {ex:"Listen to English as used by a Japanese speaker, reading the same paragraph from the Speech Accent Archive. Japanese speakers of English have many different accents, and this is one speaker. Listen for how clearly the message comes across, not for things to correct.", label:"Listen: English from a Japanese speaker", listen:"e6u2-l5-a1"}
    ]},
    {h:"What happens next?", body:[
      "Nobody can say for sure. Two forces pull in different directions. Local varieties keep developing, as Schneider’s model describes, so there may be more Englishes. At the same time, more conversations take place between people who both use English as an additional language. This may push them to choose forms that many people understand. Unit 8 looks at English as a lingua franca. For now, remember that English today belongs to no single country."
    ]}
   ],
   try:[
    M("e6u2-l5-x1","Which statement best describes **language shift**?",1,[
      ["A language changes its grammar over a few hundred years.","This is language change. Shift is about speakers moving to another language."],
      ["A community slowly changes from its own language to another language, often over several generations.","Right. The heritage language is used less and less."],
      ["A speaker changes accent for a job interview.","This is style or accommodation. Shift is a long-term change for a community."],
      ["A language is borrowed into another language as a loanword.","Borrowing adds words. Shift changes which language people use."]
    ]),
    {id:"e6u2-l5-x2", type:"sort", q:"Which period of the spread of English does each fact belong to?", buckets:["Colonial period","US-centered period (after 1945)","Internet period"], items:[
      {t:"Macaulay’s Minute on Indian Education, 1835", b:0, why:"A colonial education policy."},
      {t:"Thomasite teachers arrive in the Philippines, 1901", b:0, why:"They arrived under US colonial rule."},
      {t:"The United Nations is founded in 1945", b:1, why:"English became one of its working languages."},
      {t:"Hollywood films and pop songs reach audiences in many countries", b:1, why:"US media were widely distributed after 1945."},
      {t:"Memes in English spread across countries in a few days", b:2, why:"Social media makes this possible."},
      {t:"Early web pages and programming languages use English words and letters", b:2, why:"The early internet was built mostly in the United States."}
    ]},
    {id:"e6u2-l5-x3", type:"match", q:"Match each term to its meaning.", pairs:[
      ["Language shift","A community moves from its heritage language to another language","It happens over generations."],
      ["Heritage language","The language of a family or community, often learned at home","For example, Māori or Welsh."],
      ["Domain","An area of life where a language is used, such as home or school","A person may use different languages in different domains."],
      ["Gairaigo","A word in Japanese that comes from another language, often English","For example, マンション."],
      ["Endangered language","A language that few children are learning","It may stop being spoken without support."]
    ]},
    {id:"e6u2-l5-x4", type:"order", q:"Put these steps of a common three-generation language shift in order.", items:[
      {t:"The first generation speaks the heritage language at home and learns some English.", why:"They grew up with the heritage language."},
      {t:"The second generation speaks the heritage language at home and English at school.", why:"They are bilingual."},
      {t:"The third generation speaks mostly English and understands some heritage language.", why:"English becomes the main language."},
      {t:"The next generation speaks little or none of it, unless the community acts to keep it.", why:"Revival programs try to prevent or reverse this."}
    ]},
    {id:"e6u2-l5-x5", type:"spot", q:"Mariya Seto, who studies English interpreting at a university in Japan, is checking some notes on English in Japan that she found online. Tap each statement that is **wrong or misleading**.", ask:"wrong or misleading", parts:[
      "“", {t:"English reached Japan through colonial rule.", flag:true, why:"Japan was not a colony of Britain or the United States. English spread there through trade, education and contact, not colonial rule."}, " ", {t:"Since 2020, English has been a formal subject in grades 5 and 6 of elementary school.", flag:false, why:"Correct. Foreign language activities start in grade 3."}, " ", {t:"Japanese has many words from English, such as スマホ (*sumaho*).", flag:false, why:"Correct. These are *gairaigo*."}, " ", {t:"English has taken nothing from Japanese.", flag:true, why:"English took *tsunami, karaoke* and *emoji*, among other words."}, " ", {t:"Everybody in Japan speaks fluent English.", flag:true, why:"This is a stereotype. Levels vary, as they do in any country, and English is a foreign language there."}, "”"
    ]},
    {id:"e6u2-l5-x6", type:"number", q:"Suppose a survey of 50 languages in one region finds that 40 percent are endangered. How many languages is that?", answer:20, tol:0, unit:"languages", why:"40 percent of 50 is 0.40 × 50 = 20 languages.", wrongs:[{v:40, tol:0, why:"This uses the percentage as if it were a count. Forty percent is a share of 50, not 40 languages."},{v:10, tol:0, why:"This is 20 percent of 50. Check: 10 ÷ 50 = 0.20, not 0.40."}], hint2:"Multiply 50 by 0.40."},
    M("e6u2-l5-x7","Which statement presents the debate about the global spread of English **fairly**?",2,[
      ["Everyone agrees that English spreads only because it is the best language.","No such agreement exists, and no language is better in itself."],
      ["Everyone agrees that English spreads only because of power, and that nobody chooses it.","This ignores the many people who choose to learn English for study, work and travel."],
      ["Phillipson (1992) argues that the spread helps English-speaking countries and threatens other languages. Crystal (2003) stresses practical choices and the survival of local languages.","Right. It names the sources and gives each side."],
      ["Researchers have shown that English will replace all other languages.","No research shows this. Multilingualism is the norm in most of the world."]
    ]),
    {id:"e6u2-l5-x8", type:"explain", q:"Explain why a community’s heritage language may be used less over three generations. Why is English not the only cause?", size:"3–5 sentences", prompt:"A heritage language can become less used because…", hint:"Think about schools, jobs, prestige and family choices. Say what else also causes shift.", model:"When children go to school in another language and need that language for jobs, they use the heritage language less each generation. Low status given to a minority language, migration and moves to cities add to this. Parents may also choose the school language for their children’s future. English is one cause among many, because languages such as Mandarin, Spanish or Swahili have also taken over from smaller ones. Communities can slow shift by teaching the language at home and in schools.", points:["Mentions schools or jobs in another language","Mentions status, migration or family choices","Says English is one cause among several, with another example","Mentions that communities can slow or reverse shift"]}
   ],
   apply:{
    intro:"These tasks use paper or a notes app. Nothing needs an account.",
    tasks:[
     {t:"Map your own languages by domain", how:[
       "Draw a table with the columns Home, School or work, Friends, Online, Travel.",
       "Write in each column the languages you use there, and how often.",
       "Write two sentences about what the table shows: where is English used, and where is it not?"
     ], write:"My table… What I notice…"},
     {t:"Collect loanwords in both directions", how:[
       "Choose a language you know well, or Japanese.",
       "List ten words that language took from English, and say how each is used or how the meaning changed.",
       "List three words that English took from that language, or from another language you know."
     ], write:"Ten words from English… Three words English took…"}
    ],
    proof:"A table of your languages by domain, and a list of loanwords in both directions."
   },
   read:[
    {book:"eling", where:"Chapter 9, Reclaiming Indigenous Languages, sections 9.1 “Preserving Mohawk” and 9.6 “One view on the future of Indigenous languages”", note:"The chapter is about Canada, and it shows what communities do to keep and revive languages."}
   ]
  }
  ],
  checkpoint:["e6u2-q03","e6u2-q08","e6u2-q12","e6u2-q15","e6u2-q18","e6u2-q21","e6u2-q26","e6u2-q30","e6u2-q34","e6u2-q36","e6u2-q39","e6u2-q44"],
  cpBank:[
   Q("e6u2-cp01","e6u2-l1",1,"Which language gave English words such as *court, judge* and *jury*?",2,[
     ["Old Norse","Norse gave words such as *egg* and *sky*, and the pronoun *they*."],
     ["Celtic","Celtic left few everyday words, mostly place and river names."],
     ["French","Right. French was the language of the court and the law after 1066."],
     ["Old English","These words were borrowed after Old English, from French."]]),
   Q("e6u2-cp02","e6u2-l1",2,"What is the best reason that English spelling and pronunciation do not match well?",0,[
     ["Spelling became fixed by printing while the Great Vowel Shift was still changing pronunciation.","Right. Printing began in 1476, and the shift ran from about 1400 to 1700."],
     ["English speakers never agreed on a spelling.","Printing led to a fairly stable spelling. The problem is that sounds kept moving."],
     ["French rulers forbade English spelling after 1066.","No such ban existed."],
     ["Old English spelling was already perfect, and later writers made mistakes.","There is no “perfect” spelling, and the sounds changed after the spelling was fixed."]]),
   Q("e6u2-cp03","e6u2-l2",1,"Which of these words came into English from an Algonquian language?",1,[
     ["kangaroo","This is from an Aboriginal language of Australia."],
     ["moose","Right. *Moose* and *raccoon* come from Algonquian languages."],
     ["kiwi","This is a Māori word."],
     ["veld","This is from Afrikaans and Dutch."]]),
   Q("e6u2-cp04","e6u2-l2",2,"Which statement about the Treaty of Waitangi is accurate?",3,[
     ["It was signed in 1788 by convicts and sailors.","1788 is the year of the First Fleet in Australia."],
     ["It was signed in 1907 when New Zealand became a dominion.","1907 is when New Zealand became a dominion."],
     ["It has one text, which everyone reads in the same way.","The English and Māori texts differ, and the meaning is still debated."],
     ["It was signed on 6 February 1840 by the British Crown and many Māori chiefs, and the meaning of the English and Māori texts is debated.","Right."]]),
   Q("e6u2-cp05","e6u2-l2",3,"Lena says: “Australian English is just a corrupted form of London English.” What is the best reply?",1,[
     ["“Yes, because all colonial varieties are worse than the original.”","No variety is worse. Varieties differ, and none is a corrupted form."],
     ["“It formed in Australia from a mix of British and Irish dialects, and it is a rule-governed variety with its own norms.”","Right. The mix of dialects and the new setting made a new variety."],
     ["“It is really a form of Aboriginal English.”","Aboriginal English is another variety. Australian English is not a form of it."],
     ["“It is identical to London English, with different spelling.”","It differs in accent, words and some grammar."]]),
   Q("e6u2-cp06","e6u2-l3",1,"Which country became independent on 1 October 1960?",2,[
     ["Ghana","Ghana’s date is 6 March 1957."],
     ["India","India’s date is 15 August 1947."],
     ["Nigeria","Right."],
     ["Singapore","Singapore’s date is 9 August 1965."]]),
   Q("e6u2-cp07","e6u2-l3",2,"After independence, why did many countries in Africa and Asia keep English?",0,[
     ["There were many local languages, English was already used in law and education, and it did not favor one local group.","Right. People also debate whether English is neutral."],
     ["Because every citizen already spoke English as a first language.","Most citizens spoke other languages at home."],
     ["Because international law required them to do so.","No such law exists. Governments made their own decisions."],
     ["Because English has the simplest grammar.","No language is simpler overall, and this was not the reason."]]),
   Q("e6u2-cp08","e6u2-l3",3,"A reader says that the British ruled India for 190 years in the same way throughout. Which description is most accurate?",1,[
     ["The East India Company ruled from 1600 until the Crown ended it in 1858, with no changes.","The Company began as a trading firm in 1600. Its political control grew after 1757."],
     ["Company rule grew after 1757, the Crown took over in 1858, and independence came in 1947. The period had many different phases and policies.","Right. Rule changed over time."],
     ["Britain took full control in 1600 and did not change policy.","Britain did not have political control in 1600."],
     ["The British left India in 1857.","1857 was a rebellion. Independence came in 1947."]]),
   Q("e6u2-cp09","e6u2-l4",1,"What does *endonormative* mean?",3,[
     ["Based on the norms of the old colonial country","This is exonormative."],
     ["Not following any norms","Endonormative means following local norms."],
     ["Based on the norms of the largest country in the world","Size does not decide it."],
     ["Based on norms that come from inside the community","Right."]]),
   Q("e6u2-cp10","e6u2-l4",2,"Which sequence is correct?",0,[
     ["Foundation, exonormative stabilization, nativization, endonormative stabilization, differentiation","Right."],
     ["Foundation, nativization, exonormative stabilization, endonormative stabilization, differentiation","Nativization comes after exonormative stabilization."],
     ["Exonormative stabilization, foundation, nativization, differentiation, endonormative stabilization","Foundation is first, and differentiation is last."],
     ["Foundation, differentiation, nativization, exonormative stabilization, endonormative stabilization","Differentiation is the last phase."]]),
   Q("e6u2-cp11","e6u2-l5",2,"Which statement about language shift is accurate?",2,[
     ["It happens only because of English.","Many majority languages cause shift, such as Mandarin, Spanish and Swahili."],
     ["It cannot be slowed or reversed.","Communities have revived languages, such as Māori and Hawaiian, with schools and programs."],
     ["It often takes several generations. Schools, jobs, migration and status all play a part.","Right."],
     ["It happens in one generation, in every case.","The usual pattern takes several generations, but it varies."]]),
   Q("e6u2-cp12","e6u2-l5",3,"A news article says that English is spreading because it is “naturally the best language for the world”. What is the best response?",1,[
     ["“Correct. Its grammar is simpler than other languages.”","No language has simpler grammar overall."],
     ["“That is not the explanation scholars give. They point to history, economic and political power, media, and the practical reasons people choose to learn it.”","Right. No language is naturally the best."],
     ["“It is correct because most people speak English as a first language.”","Most people do not speak English as a first language."],
     ["“It is correct, because nobody speaks another language online.”","Many languages are used online."]])
  ],
  codex:[
   {id:"we-english-to-1700", title:"From Old English to Early Modern English", aka:["history of English","Old English","Middle English"], tags:["history","world englishes"],
    summary:"English grew from Germanic dialects brought to Britain in the 400s and was changed by contact with Latin, Norse and French and by printing and the Great Vowel Shift.",
    levels:{
     starter:[
      "English began as the Germanic dialects of settlers from northern Europe who came to Britain from the 5th century. Scholars call their language **Old English** (about 450 to 1100). It had many more word endings than modern English, so it looks foreign to a modern reader.",
      "Other languages added words over time. Latin gave words about the church and learning. Norse-speaking settlers gave words such as *sky, egg* and even the pronouns *they, them* and *their*. After the Norman Conquest of 1066, French became the language of the court and law, and English took thousands of French words. This period is called **Middle English** (about 1100 to 1500).",
      "In the 1400s and 1500s, printing, a London-based written standard and the Great Vowel Shift changed the language again. By about 1600, the time of Shakespeare, **Early Modern English** was a language of one island, spoken by a few million people. In 1607 the first lasting English settlement in North America began. From then on English spread to many parts of the world.",
      {key:"English has always been a mixed and changing language. The same forces of contact and change continued when it spread."}
     ],
     builder:[
      "The usual periods are Old English (c. 450–1100), Middle English (c. 1100–1500), Early Modern English (c. 1500–1700) and Modern English (c. 1700 to now). The boundaries are conventions for teaching, because language change is gradual.",
      {table:[["Contact","Main period","Typical effect"],["Celtic languages","From before the Anglo-Saxon period","Few common words; place and river names such as *Thames*"],["Latin","From 597 (church) and later (Renaissance)","*school, candle*; later *anatomy*"],["Old Norse","From the late 700s; the Danelaw from the 800s","*sky, egg, window, they, them, their*; place names in *-by*"],["French","After 1066","*court, judge, jury, army, beef, pork*"]]},
      "Key dates: Battle of Hastings, 1066; the Statute of Pleading, 1362, which said court cases should be argued in English (records stayed in Latin); Chaucer’s *Canterbury Tales*, late 1300s; Caxton’s press at Westminster, 1476; Cawdrey’s *A Table Alphabeticall*, 1604; the King James Bible, 1611.",
      "The Great Vowel Shift moved the long vowels of English between about 1400 and 1700, for example the vowel of *mouse*, once close to modern *moose*. Printing fixed spelling during that time, which is one reason for irregular spelling today (see {{english-spelling-history}} in How English Works).",
      "Colonial English did not freeze. Early settlers often pronounced the *r* after a vowel, as did most people in England around 1600. Many southern British accents later lost it. Both varieties kept changing after 1607."
     ],
     pro:[
      "The scholarly debate about contact is lively. For the effect of Celtic on English, historians disagree about how much of the earlier population was displaced and how much joined the Anglo-Saxon community. The scarcity of Celtic loanwords in English has been explained by social inequality, demographic change or both, and some scholars argue that Celtic influence on English grammar is larger than the vocabulary suggests. The question is still open.",
      "The loss of inflection in Middle English is also debated. Some scholars stress contact between English and Norse in the north, and then with French, which may have simplified English grammar through adult learning. Others point out that the weakening of unstressed syllables was under way before 1066, and that the changes in different regions followed different timing. A balanced statement says that contact and internal change both played a part.",
      "Standardization was not the work of one event. Chancery documents of the 1400s show a written standard forming in London, and printing by Caxton and his successors helped to spread London-based spelling and forms. The relation between that written standard and spoken usage was loose, which is part of the reason for the later gap between spelling and sound.",
      "Claims about Shakespeare’s coinages should be checked against the Oxford English Dictionary and corpus evidence: many first citations come from his plays because his texts survive in large numbers and were closely read, but the same or similar words appear in earlier sources or in other writers of the time. The historical record for the 1500s and 1600s is partial, and estimates of speaker numbers around 1600 vary."
     ]},
    related:["english-spelling-history","we-first-diaspora"], read:[{book:"eling", where:"Chapter 14, Historical Linguistics, section 14.1 “Why do languages change?”"}],
    sources:[{t:"Encyclopaedia Britannica: English language", url:"https://www.britannica.com/topic/English-language"},{t:"Online Etymology Dictionary", url:"https://www.etymonline.com/"}], checked:"2026-11"},
   {id:"we-first-diaspora", title:"The first diaspora: settler colonies", aka:["settler Englishes","new-dialect formation"], tags:["history","world englishes","settler colonies"],
    summary:"English came to North America, Australia, New Zealand and South Africa with settlers who stayed, and new varieties formed from mixed dialects. These lands already had people and languages.",
    levels:{
     starter:[
      "Braj Kachru (1992) used the phrase **first diaspora** for the movement of English speakers from Britain and Ireland to places such as North America, Australia, New Zealand and South Africa. Many came to stay, so these places are called settler colonies.",
      "Key dates: Jamestown in Virginia, 1607; the Dutch settlement at the Cape, 1652, and British control from 1806; the First Fleet at Sydney Cove, January 1788; the Treaty of Waitangi, 6 February 1840. The United States declared independence on 4 July 1776, the Dominion of Canada began in 1867, the Commonwealth of Australia in 1901, and the Union of South Africa in 1910.",
      "These places were not empty. Indigenous peoples had lived there for thousands of years and spoke many languages. Settlement brought disease, war, loss of land and forced removals. Governments and churches took Indigenous children to boarding or residential schools, where many were punished for speaking their own languages. The last federal residential school in Canada closed in 1996.",
      "Settlers came from many dialect areas. Their children mixed these dialects and made new varieties, such as Australian and New Zealand English. Words from Indigenous languages, such as *kangaroo, moose* and *kiwi*, entered English.",
      {key:"Settler Englishes are new varieties made in new places. The places already had people and languages."}
     ],
     builder:[
      "Peter Trudgill (2004) describes **new-dialect formation**. In a new colony, speakers of many dialects meet. Rare features tend to be lost, features shared by many speakers tend to stay (leveling), and compromise forms sometimes appear. The process takes about two or three generations, and it helps to explain why Australian and New Zealand English are fairly uniform over large areas.",
      {table:[["Place","Settlement","Indigenous peoples and languages","Later milestones"],["North America","Jamestown 1607","Hundreds of nations and languages","1776 US independence; 1867 Canada"],["Australia","First Fleet 1788","Aboriginal and Torres Strait Islander peoples; about 250 languages","1901 federation; Australia Acts 1986"],["New Zealand","Treaty of Waitangi 1840","Māori","1907 dominion; Māori Language Act 1987"],["South Africa","Dutch 1652; British 1806","Khoikhoi, San and Bantu-speaking peoples","1910 Union; 1994 first democratic election"]]},
      "The word *diaspora* is used by Kachru for the movements of English speakers. Some scholars point out that the settlers of the first diaspora also included convicts, indentured workers and enslaved people, who did not choose to move, so the picture is more complex than a movement of free settlers.",
      "Loanwords from Indigenous languages mostly name plants, animals and places. Grammar changes in settler English came more from contact among English dialects and from local innovation than from Indigenous languages."
     ],
     pro:[
      "Trudgill’s *New-Dialect Formation: The Inevitability of Colonial Englishes* (2004) proposes a deterministic model with stages: rudimentary leveling, extreme variability, and focusing, in which a new focused variety emerges in the speech of the children of the first locally born generation. The model has been influential for Australian, New Zealand and South African English, and it has been criticized for placing too little weight on social factors, on contact with other languages, and on the role of identity, which Schneider’s model (Lesson 4) emphasizes.",
      "Indigenous languages have been affected unequally. In Australia, many of the roughly 250 languages in use at the time of British settlement are no longer spoken, while others are being documented and taught. In New Zealand, Māori became an official language in 1987 after the “language nest” (kōhanga reo) movement of 1982. In Canada and the United States, boarding and residential school systems, which operated across the 1800s and 1900s, had large effects on intergenerational transmission of languages. The scale and the date of each case should be cited from specialist sources.",
      "Terminology also varies. Schneider distinguishes a settler strand and an Indigenous strand, and the first diaspora in Kachru’s sense is a set of cases with different demographic histories. In South Africa, the speakers of English include people of British descent, Indian descent, and the Black and Coloured communities, who use different varieties. No single story fits them all.",
      "Statistics about speaker numbers and language endangerment vary by source and year. Ethnologue, UNESCO and national censuses give different counts, and any figure in a lesson should be given with its source and date."
     ]},
    related:["we-english-to-1700","we-second-diaspora","we-schneider-dynamic-model"], read:[{book:"eling", where:"Chapter 9, Reclaiming Indigenous Languages, section 9.1 “Preserving Mohawk”"}],
    sources:[{t:"The Canadian Encyclopedia: Residential Schools in Canada (plain language summary)", url:"https://www.thecanadianencyclopedia.ca/en/article/residential-schools-in-canada-plain-language-summary"},{t:"National Centre for Truth and Reconciliation", url:"https://nctr.ca/"},{t:"Encyclopaedia Britannica: English language", url:"https://www.britannica.com/topic/English-language"}], checked:"2026-11"},
   {id:"we-second-diaspora", title:"The second diaspora: English in colonial Asia and Africa", aka:["outer-circle colonies","English after independence"], tags:["history","world englishes","colonialism"],
    summary:"In colonial Asia and Africa a few officials, teachers and traders ruled many people who spoke other languages. English spread through schools and government, and many countries kept it after independence.",
    levels:{
     starter:[
      "In the **second diaspora**, English came to Asia and Africa through trade and colonial rule. Few English speakers settled there. A small number of officials, soldiers, teachers and traders governed millions of people who spoke other languages. English became the language of government, law, universities and the best jobs, and a minority learned it at school.",
      "Colonial rule often used force. In April 1919, British-led troops fired on an unarmed crowd at Amritsar. The official British figure was 379 killed, and Indian estimates are higher. Famines under British rule, including the Bengal famine of 1943, killed millions. In Ghana, forts such as Cape Coast Castle were used in the Atlantic slave trade.",
      "Independence dates: the Philippines from the United States, 4 July 1946; India, 15 August 1947 (Pakistan, 14 August 1947); Ghana, 6 March 1957; Nigeria, 1 October 1960; Singapore, 9 August 1965. Many new countries kept English as an official or working language, because they had many local languages and English was already used in law and education.",
      {key:"English was spread by colonial governments and schools. It stayed after independence for practical and political reasons, and people still debate that choice."}
     ],
     builder:[
      {table:[["Country","Colonial rule","Independence","English today"],["India","East India Company from 1757; Crown from 1858","15 August 1947","Official with Hindi at the national level"],["Ghana","Gold Coast colony 1874","6 March 1957","Official language"],["Nigeria","Lagos 1861; one colony 1914","1 October 1960","Official language; Nigerian Pidgin widely used"],["Singapore","Trading post 1819; crown colony 1867","9 August 1965","Main school and administrative language, with mother-tongue study"],["The Philippines","Spain from the 1560s; US from 1898","4 July 1946","Official with Filipino"]]},
      "Language policy differed. The Indian constitution of 1950 allowed English for 15 years beside Hindi. A law of 1963 let it continue. Singapore adopted a bilingual policy in 1966. The Philippines chose a Tagalog-based national language in 1937, and its 1987 constitution makes Filipino and English official. Indonesia and Malaysia chose Indonesian and Malay as national languages.",
      "English users in these countries developed local varieties, documented in the *Electronic World Atlas of Varieties of English* (eWAVE). Examples are the Indian English words *prepone* and *cousin-brother* and the West African English words *go-slow* and *chop*. These are regular features of local varieties.",
      "Writers have argued about whether to write in English. Chinua Achebe (1965) argued that English could carry African experience if it were changed to suit its new surroundings. Ngũgĩ wa Thiong’o (1986) argued for writing in African languages."
     ],
     pro:[
      "Dates should be checked against specialist histories. The Philippine independence of 1946 is dated from the Treaty of Manila on 4 July 1946, and the country’s official independence day has been 12 June, the date of the 1898 declaration, since 1962. For India, the Company’s rule grew in stages after 1757, and the transfer to the Crown followed the rebellion of 1857. Death tolls and displacement numbers for partition, the Bengal famine and the Philippine–American War are estimates, and they vary widely between scholars.",
      "English-medium education was a tool of colonial administration as well as a path of social mobility. The principle in Macaulay’s 1835 Minute was to create an intermediary class, and the introduction of English to the higher courts and universities in the 1830s to 1850s made it a language of status. Historians debate how much the policy changed the education of the majority of the population. Most children were not in English-medium schools, and English remained a language of elites.",
      "After independence, language planning interacted with identity and conflict. The anti-Hindi protests in Tamil Nadu in the 1960s are one example; the Nigerian civil war of 1967 to 1970 and the question of national language in Nigeria are another. English was sometimes considered neutral between groups, and sometimes considered a barrier that favored those with access to good schools. Both views have evidence.",
      "In terms of the Dynamic Model, many of these varieties have been described as in nativization or endonormative stabilization. Kachru’s *outer circle* is the label for countries where English has an institutional role and many speakers use it as an additional language."
     ]},
    related:["we-first-diaspora","we-schneider-dynamic-model","we-english-today"], read:[{book:"eling", where:"Chapter 2, Language, Power, and Privilege, section 2.1 “Language and identity”"}],
    sources:[{t:"Encyclopaedia Britannica: Jallianwala Bagh Massacre", url:"https://www.britannica.com/event/Jallianwala-Bagh-Massacre"},{t:"Michigan in the World: A brief history of the Thomasites", url:"https://philippines.michiganintheworld.history.lsa.umich.edu/s/exhibit/page/a-brief-history-of-the-thomasites"},{t:"eWAVE: Electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"}], checked:"2026-11"},
   {id:"we-schneider-dynamic-model", title:"Schneider’s Dynamic Model", aka:["Dynamic Model of postcolonial Englishes","five phases"], tags:["world englishes","models"],
    summary:"Edgar Schneider (2003, 2007) describes five phases through which English in former colonies tends to pass: foundation, exonormative stabilization, nativization, endonormative stabilization and differentiation.",
    levels:{
     starter:[
      "Edgar Schneider’s **Dynamic Model** describes how English develops in places where it arrived through colonial history. He published it in an article in *Language* in 2003 and in the book *Postcolonial English* in 2007. The model says that the language follows how people see themselves.",
      "There are five phases, in this order: **foundation**; **exonormative stabilization**; **nativization**; **endonormative stabilization**; **differentiation**. In the early phases, people use the norms of the old home country (exonormative means “from outside”). Later, they accept their own norms (endonormative means “from inside”). In the last phase, smaller groups inside the country develop their own varieties.",
      "Schneider places Singapore English in Phase 4, endonormative stabilization, though other scholars debate this. He counts American English as having reached Phase 5, differentiation. The dates of each phase are approximate.",
      {key:"The model describes change and does not rank varieties. No phase is better than another."}
     ],
     builder:[
      "Schneider compares two strands: the **settler strand** (those who came) and the **Indigenous strand** (those already there). He examines four parameters in each phase: political background, identity construction, sociolinguistic conditions and linguistic effects.",
      {table:[["Phase","Core idea","Typical language effects"],["1 Foundation","English arrives in a new place","Place names and borrowings for plants and animals"],["2 Exonormative stabilization","Stable colony; outside norm","Local words increase; local forms marked as errors"],["3 Nativization","A new shared identity forms","Structural and pronunciation innovations; complaint tradition"],["4 Endonormative stabilization","A local norm is accepted","Local dictionaries, literature and teaching materials"],["5 Differentiation","Subgroups mark identity","Regional and social varieties within the nation"]]},
      "Phase 3 is often called the heart of the model, because identity and language change together. The phases overlap and move at different speeds in different countries and groups. Schneider presents the model as a general pattern, not a law."
     ],
     pro:[
      "The model builds on Kachru’s three circles and on work in contact linguistics. Its central idea is that identity construction drives linguistic outcomes. This is a change from older models that focused on the transfer of features from local languages to English, and from models that treated each variety as a separate case.",
      "The model has been applied to many countries. In each case scholars must argue where on the model the variety sits, and they often find that a country shows features of two phases. Singapore is one example. Official policies, such as the Speak Good English Movement (2000), favor an international standard, while Singlish serves as a marker of local identity. Such tensions between official norms and local use show that the phases do not arrive in a neat sequence.",
      "Criticisms include the following. The model is built for postcolonial settings, so it does not directly cover English in places such as Japan. The nation is the main unit, which can hide differences between communities within a nation and ties across borders. The histories of Indigenous peoples and of enslaved people are not fully captured by the two-strand design. And the model’s phases are descriptive generalizations, not a theory that predicts exactly when change will happen.",
      "Work on English as a lingua franca (Unit 8) and on the Modiano and Kachru models (Unit 1) gives other ways to see English in the world. The Dynamic Model fits best where a variety has developed within a community that uses English daily, and less well where English is mostly used between speakers of other languages."
     ]},
    related:["we-first-diaspora","we-second-diaspora","we-english-today"], read:[{book:"eling", where:"Chapter 10, Language Variation and Change, section 10.3 “Language changes”"}],
    sources:[{t:"Schneider (2007), Postcolonial English: Varieties around the World, Cambridge University Press, Chapter 1", url:"https://www.cambridge.org/core/books/abs/postcolonial-english/introduction/A8EB7EC16B4DCEE6FFC84C15B372642D"},{t:"eWAVE: Electronic World Atlas of Varieties of English", url:"https://ewave-atlas.org/"}], checked:"2026-11"},
   {id:"we-english-today", title:"English today: US influence, media and other languages", aka:["global English","language shift"], tags:["world englishes","globalization","language shift"],
    summary:"Since 1945 English has spread through US economic power, media and the internet, and it is used beside other languages. It is one cause of language shift among several.",
    levels:{
     starter:[
      "After the Second World War, the United States had the world’s largest economy, a large media industry and many leading universities. English became the main language of many international organizations, of science, of aviation and of business. Films, songs, games and the internet carried it into daily life.",
      "Most people in the world speak more than one language. English is one language in a set, used in some areas of life, called domains, and not in others. When a community moves from its heritage language to another language over several generations, linguists call it **language shift**. English is one cause of shift. Mandarin, Spanish, Russian, Arabic and Swahili have also taken the place of smaller languages.",
      "In Japan, English is a foreign language, with no official status. Since 2020, English has been a formal subject in grades 5 and 6 of elementary school, and foreign language activities start in grade 3. Japanese has many English-based words (*gairaigo*), and English has words from Japanese, such as *tsunami* and *karaoke*.",
      {key:"English today belongs to no single country, and it exists beside many other languages."}
     ],
     builder:[
      "Scholars disagree about the effects of the spread. Robert Phillipson’s *Linguistic Imperialism* (1992) argues that the spread serves the interests of English-speaking countries and threatens other languages. David Crystal’s *English as a Global Language* (2003) describes many practical choices and argues that a global language can exist beside local languages. Present both views with their sources.",
      "Language shift commonly takes about three generations in immigrant communities: heritage language at home, then bilingual children, then mostly the majority language. Schools, jobs, migration and the low status of minority languages push the shift. Family choices and community programs, such as Māori language nests and Hawaiian-language preschools, can slow or reverse it.",
      "Estimates of living languages and endangered languages differ between sources, and they change with each edition. Ethnologue counts more than 7,100 living languages and classes more than four in ten of them as endangered, and UNESCO also maintains an atlas of endangered languages. Quote any figure with its source and year.",
      "Japan’s education ministry introduced the 2020 changes in elementary schools, with goals that stress communication. Teachers and researchers debate class sizes, exams, teacher training and speaking practice."
     ],
     pro:[
      "Two forces are often described. One is divergence: local varieties keep developing, as in Schneider’s Dynamic Model. The other is convergence: more interactions in English take place between people who both use it as an additional language, and this may favor forms that are widely understood. Research on English as a lingua franca (Jenkins 2000 and later) studies the second force. Neither force predicts a single outcome.",
      "Claims about the online share of English depend on how content is measured. Surveys of web content, studies of social media and counts of scientific publications give different pictures, and the picture changes year by year. English remains the most common single language of web content in several surveys, but the number of languages online grows.",
      "Studies of language shift stress that it is a social process. Decisions are made by families and communities under pressure from schools, markets and states, and revival is also a social process, requiring teachers, materials and support from the wider society. Case studies include Māori, Hawaiian and Mohawk, and the cases differ in history and in results.",
      "In Japan, the contact situation is long. Western learning through Dutch contacts predates English, and English became important after 1853 and the Meiji period. Wasei-eigo, English-looking words made in Japan, are one part of a larger set of *gairaigo*. These words are regular lexical items of Japanese, not mistakes in English."
     ]},
    related:["we-second-diaspora","we-schneider-dynamic-model"], read:[{book:"eling", where:"Chapter 9, Reclaiming Indigenous Languages, section 9.6 “One view on the future of Indigenous languages”"}],
    sources:[{t:"Ethnologue: Languages of the World", url:"https://www.ethnologue.com/"},{t:"UNESCO Atlas of the World’s Languages in Danger", url:"https://www.unesco.org/languages-atlas/"},{t:"US International Trade Administration: Japan education reform updates", url:"https://www.trade.gov/market-intelligence/japan-education-reform-updates"}], checked:"2026-11"}
  ],
  terms:[
   {id:"we-old-english", term:"Old English", def:"The language of the Anglo-Saxon period, from about 450 to 1100. It had many noun and verb endings and looks foreign to a modern reader.", codex:"we-english-to-1700"},
   {id:"we-diaspora", term:"Diaspora", def:"The movement of a group of people away from their homeland. Kachru used *first diaspora* and *second diaspora* for two movements of English speakers.", codex:"we-first-diaspora"},
   {id:"we-settler-colony", term:"Settler colony", def:"A colony where many people from the ruling country came to stay and make a new home, such as Australia or New Zealand. The land already had Indigenous peoples.", codex:"we-first-diaspora"},
   {id:"we-new-dialect-formation", term:"New-dialect formation", def:"The process, described by Trudgill (2004), in which speakers of many dialects meet in a new place and their children make a new, shared variety, usually over two or three generations.", codex:"we-first-diaspora"},
   {id:"we-colonialism", term:"Colonialism", def:"Rule over another people’s land by an outside state, for control of land, trade and labor. It often used force and changed the languages of education and government.", codex:"we-second-diaspora"},
   {id:"we-exonormative", term:"Exonormative", def:"Based on norms that come from outside the community. In a colony, usually the standards of the old home country.", codex:"we-schneider-dynamic-model"},
   {id:"we-endonormative", term:"Endonormative", def:"Based on norms that come from inside the community. Local educated speakers decide what counts as good usage.", codex:"we-schneider-dynamic-model"},
   {id:"we-language-shift", term:"Language shift", def:"A community’s gradual move from its heritage language to another language, often over three generations.", codex:"we-english-today"},
   {id:"we-nativization", term:"Nativization", def:"The third phase of Schneider’s model, when settlers and local people share a new identity and local features of English spread.", codex:"we-schneider-dynamic-model"},
   {id:"we-dynamic-model", term:"Dynamic Model", def:"Edgar Schneider’s model (2003, 2007) of five phases through which English in former colonies tends to pass.", codex:"we-schneider-dynamic-model"},
   {id:"we-gairaigo", term:"Gairaigo", def:"A Japanese word borrowed from another language, most often English, such as マンション (*manshon*).", codex:"we-english-today"},
   {id:"we-heritage-language", term:"Heritage language", def:"The language of a family or community, often learned at home, that is not the main language of the wider society.", codex:"we-english-today"}
  ],
  bank:[
   /* ---- Lesson 1 ---- */
   Q("e6u2-q01","e6u2-l1",1,"Which period of English is usually dated from about 1100 to 1500?",1,[
     ["Old English","Old English is dated from about 450 to 1100."],
     ["Middle English","Right. It includes Chaucer."],
     ["Early Modern English","Early Modern English is dated from about 1500 to 1700."],
     ["Modern English","Modern English is dated from about 1700 to now."]]),
   Q("e6u2-q02","e6u2-l1",1,"Which group of speakers gave English the pronouns *they, them* and *their*?",2,[
     ["Celtic speakers of Roman Britain","Celtic left few everyday words."],
     ["Latin-speaking missionaries","Latin gave church and school words."],
     ["Norse-speaking settlers","Right. The Danelaw settlers spoke Old Norse."],
     ["Norman French rulers","French gave law and government words."]]),
   Q("e6u2-q03","e6u2-l1",2,"Which statement about the Norman Conquest of 1066 is the most accurate?",3,[
     ["Everyone in England switched to French.","Most people kept speaking English."],
     ["English stopped being a written language.","English was written less often, but it was still written."],
     ["French and English grammar became the same.","The two languages remained different."],
     ["French became the language of the court and law, and English took thousands of French words.","Right."]]),
   Q("e6u2-q04","e6u2-l1",1,"What did the Great Vowel Shift change?",0,[
     ["The pronunciation of long vowels, over about 1400 to 1700","Right. The spelling did not change with it."],
     ["The spelling of every word in the 1800s","The shift changed sounds, not spelling."],
     ["The grammar of verbs in the 1100s","It was a change in vowels."],
     ["The alphabet","The alphabet did not change."]]),
   Q("e6u2-q05","e6u2-l1",1,"Who set up a printing press at Westminster in 1476?",1,[
     ["Geoffrey Chaucer","Chaucer wrote in the late 1300s."],
     ["William Caxton","Right."],
     ["Robert Cawdrey","Cawdrey published a word list in 1604."],
     ["William Shakespeare","Shakespeare lived from 1564 to 1616."]]),
   Q("e6u2-q06","e6u2-l1",2,"Sara says: “English is a Germanic language, so almost all its words come from Germanic sources.” What is the best reply?",2,[
     ["“Yes. Borrowed words are rare in English.”","English borrowed thousands of words."],
     ["“No. English has no Germanic words.”","The oldest and most common words are Germanic."],
     ["“English is Germanic in its basic grammar and common words. It has also borrowed thousands of words from other languages.”","Right."],
     ["“It depends on the speaker.”","This is a fact about the language’s history, not about one speaker."]]),
   Q("e6u2-q07","e6u2-l1",2,"What did the Statute of Pleading (1362) say?",0,[
     ["Court cases should be argued in English, although records were still kept in Latin.","Right."],
     ["English was banned in court.","The law did the opposite."],
     ["All books must be printed in English.","Printing did not reach England until 1476."],
     ["The king must speak French.","The law is about the language of court proceedings."]]),
   Q("e6u2-q08","e6u2-l1",3,"A tour guide says: “Americans say *r* after a vowel, as in *car*, because their English is frozen in the 1600s.” Which reply is the most accurate?",1,[
     ["“Yes. Nothing has changed in American English since 1607.”","American English has kept changing."],
     ["“Around 1600 most English speakers pronounced that *r*, and many accents in England later lost it. American English also kept changing in other ways.”","Right. The *r* is an older feature, but the variety is not frozen."],
     ["“No one pronounced that *r* in England in 1600.”","Most speakers did."],
     ["“American English borrowed the *r* from French.”","This is not the explanation."]]),
   Q("e6u2-q09","e6u2-l1",3,"A learner asks which words in a text are the “real English”. The text has *house, water* (Old English), *egg, sky* (Norse) and *court, jury* (French). What is the best reply?",3,[
     ["Only the Old English words are real English.","Words that English borrowed are now part of English."],
     ["Only the French words, because they are more formal.","Formality does not decide it."],
     ["Only the Norse words, because they are old.","Age does not decide it."],
     ["All of them are English now. English is a mixed language, and borrowing is how it has grown.","Right."]]),
   /* ---- Lesson 2 ---- */
   Q("e6u2-q10","e6u2-l2",1,"Which place was the first lasting English settlement in North America (1607)?",2,[
     ["Plymouth","Plymouth was founded in 1620."],
     ["Roanoke","Roanoke failed in the 1580s."],
     ["Jamestown","Right."],
     ["Sydney Cove","Sydney Cove is in Australia."]]),
   Q("e6u2-q11","e6u2-l2",1,"The Treaty of Waitangi was signed in…",1,[
     ["1788","1788 is the year of the First Fleet in Australia."],
     ["1840","Right. 6 February 1840."],
     ["1907","1907 is when New Zealand became a dominion."],
     ["1947","1947 is when New Zealand adopted the Statute of Westminster."]]),
   Q("e6u2-q12","e6u2-l2",2,"Which statement about Australia before British settlement is accurate?",2,[
     ["It was uninhabited.","Aboriginal and Torres Strait Islander peoples had lived there for more than 60,000 years."],
     ["Its people all spoke a single language.","About 250 languages were spoken, and estimates vary."],
     ["Aboriginal and Torres Strait Islander peoples lived there with about 250 languages.","Right."],
     ["Its people spoke only English.","English arrived in 1788."]]),
   Q("e6u2-q13","e6u2-l2",1,"What is a *settler colony*?",0,[
     ["A colony where many people from the ruling country came to stay and make a home","Right."],
     ["A colony ruled only by soldiers","A settler colony has many settlers, not only soldiers."],
     ["A colony without Indigenous people","The lands already had Indigenous peoples."],
     ["A trade port with no local population","This describes a trade colony."]]),
   Q("e6u2-q14","e6u2-l2",1,"Who wrote about *new-dialect formation* in settler Englishes (2004)?",3,[
     ["Braj Kachru","Kachru is known for the circles and the diaspora terms."],
     ["Edgar Schneider","Schneider wrote the Dynamic Model."],
     ["Jennifer Jenkins","Jenkins wrote about the Lingua Franca Core."],
     ["Peter Trudgill","Right."]]),
   Q("e6u2-q15","e6u2-l2",3,"Nao says: “The word *kangaroo* proves that Aboriginal languages changed English grammar.” What is the best reply?",1,[
     ["“Yes. Every loanword changes grammar.”","Loanwords add vocabulary. They do not change grammar by themselves."],
     ["“A loanword adds vocabulary. Australian English grammar is English grammar, with its own local features.”","Right."],
     ["“Kangaroo is not an Aboriginal word.”","It comes from an Aboriginal language."],
     ["“Australian English has no loanwords.”","It has many."]]),
   Q("e6u2-q16","e6u2-l2",2,"Which statement about residential schools for Indigenous children in the US and Canada is accurate?",2,[
     ["Indigenous families chose the schools, and children could use their own languages freely.","Children were taken from their families, and many were punished for speaking their languages."],
     ["The schools closed in 1850.","The last federal residential school in Canada closed in 1996."],
     ["Many children were taken from their families, and many were punished for speaking their own languages.","Right."],
     ["The schools only existed in Australia.","Such schools existed in North America. Australia had its own policies."]]),
   Q("e6u2-q17","e6u2-l2",2,"Which list of events is in the correct order?",3,[
     ["First Fleet, Jamestown, US independence","Jamestown (1607) is before the First Fleet (1788)."],
     ["US independence, Jamestown, First Fleet","Jamestown is before US independence (1776)."],
     ["Treaty of Waitangi, First Fleet, Jamestown","Jamestown is the earliest, and the First Fleet is before the Treaty."],
     ["Jamestown, US independence, First Fleet, Treaty of Waitangi","Right: 1607, 1776, 1788, 1840."]]),
   Q("e6u2-q18","e6u2-l2",3,"Which sentence about English in South Africa is accurate?",1,[
     ["English is the only official language.","South Africa has twelve official languages: eleven from 1996, and South African Sign Language from 2023."],
     ["English is one of twelve official languages. It is widely used, but a minority speak it at home.","Right."],
     ["English is not used in government.","English is widely used in government."],
     ["English arrived with the Dutch in 1652.","The Dutch arrived in 1652. British control came in 1806."]]),
   /* ---- Lesson 3 ---- */
   Q("e6u2-q19","e6u2-l3",1,"When did Ghana become independent?",1,[
     ["15 August 1947","This is India’s date."],
     ["6 March 1957","Right."],
     ["1 October 1960","This is Nigeria’s date."],
     ["9 August 1965","This is Singapore’s date."]]),
   Q("e6u2-q20","e6u2-l3",1,"When did the Philippines become independent from the United States?",0,[
     ["4 July 1946","Right. Since 1962 the country celebrates on 12 June."],
     ["12 June 1898","This is the date of the 1898 declaration, not of independence from the US."],
     ["10 December 1898","This is the date of the Treaty of Paris."],
     ["15 August 1947","This is India’s date."]]),
   Q("e6u2-q21","e6u2-l3",2,"What was Macaulay’s *Minute on Indian Education* (1835) about?",2,[
     ["A plan to ban English in Indian schools","The Minute supported English."],
     ["A plan to make Persian the main language","The government replaced Persian in the courts in 1837."],
     ["An argument that education money should be spent on teaching English in India","Right."],
     ["A plan for Indian independence","The Minute was a colonial education policy."]]),
   Q("e6u2-q22","e6u2-l3",1,"Which country became independent on 9 August 1965?",3,[
     ["India","India became independent in 1947."],
     ["Nigeria","Nigeria became independent in 1960."],
     ["Ghana","Ghana became independent in 1957."],
     ["Singapore","Right. It left the federation of Malaysia."]]),
   Q("e6u2-q23","e6u2-l3",2,"Why is it wrong to say that English is the first language of most people in India?",1,[
     ["Because English is banned in India.","English is an official language."],
     ["English spread through schools and government to a minority, and most people have other first languages.","Right."],
     ["Because Indian people cannot learn English.","Many Indians use English well."],
     ["Because India was never ruled by Britain.","India was ruled by the East India Company and then the Crown."]]),
   Q("e6u2-q24","e6u2-l3",2,"Which statement about Amritsar in April 1919 is accurate?",0,[
     ["British-led troops fired on an unarmed crowd, and the official British figure was 379 killed.","Right. Indian estimates are higher."],
     ["It was a peaceful meeting that ended without injuries.","Troops fired on the crowd."],
     ["It happened in 1947.","It happened in 1919."],
     ["It happened in Nigeria.","It happened in India."]]),
   Q("e6u2-q25","e6u2-l3",3,"Gabriela asks why many people in the Philippines are comfortable studying in English. Which answer is the most accurate?",2,[
     ["English was always the main language in all the islands.","Many languages are spoken, and Filipino and English are official."],
     ["The Japanese government introduced English there in 1942.","Japan occupied the country from 1942 to 1945, and English schools began earlier, in 1901."],
     ["The US colonial government opened English-medium public schools in 1901. English stayed official after independence, with Filipino.","Right."],
     ["English was brought by the Spanish in the 1500s.","Spain brought Spanish."]]),
   Q("e6u2-q26","e6u2-l3",2,"Which is a reason many countries kept English after independence?",1,[
     ["English is the first language of most of their citizens.","It is the first language of a minority."],
     ["They had many local languages, English was already used in law and education, and it did not favor one local group.","Right. People still debate this choice."],
     ["No other language can be used in a law court.","Other languages can be used."],
     ["The old colonial government ordered them to keep it.","Governments made their own choices."]]),
   Q("e6u2-q27","e6u2-l3",2,"Which statement about Indonesia is accurate?",3,[
     ["It was a British colony and chose English as its national language.","It was a Dutch colony, and it chose Indonesian."],
     ["It has no national language.","It has a national language, Indonesian."],
     ["It chose Tagalog as its national language.","Tagalog is the basis of Filipino."],
     ["It was a Dutch colony and chose a Malay-based national language, Indonesian.","Right."]]),
   /* ---- Lesson 4 ---- */
   Q("e6u2-q28","e6u2-l4",1,"What are Schneider’s five phases, in order?",2,[
     ["Nativization, foundation, differentiation, exonormative stabilization, endonormative stabilization","This order is wrong. Foundation comes first."],
     ["Foundation, nativization, exonormative stabilization, differentiation, endonormative stabilization","Nativization comes after exonormative stabilization."],
     ["Foundation, exonormative stabilization, nativization, endonormative stabilization, differentiation","Right."],
     ["Foundation, exonormative stabilization, endonormative stabilization, nativization, differentiation","Nativization comes before endonormative stabilization."]]),
   Q("e6u2-q29","e6u2-l4",1,"What does *exonormative* mean?",0,[
     ["Based on norms from outside the community","Right."],
     ["Based on norms from inside the community","This is endonormative."],
     ["Without norms","Exonormative means following outside norms."],
     ["Based on norms of the largest city","Size does not decide it."]]),
   Q("e6u2-q30","e6u2-l4",2,"Which phase does Schneider treat as the central phase of the model?",2,[
     ["Foundation","Foundation is the first phase."],
     ["Exonormative stabilization","This phase keeps the outside norm."],
     ["Nativization","Right. A new shared identity and many local features appear."],
     ["Differentiation","This is the last phase."]]),
   Q("e6u2-q31","e6u2-l4",1,"Which book by Schneider (2007) presents the Dynamic Model in full?",1,[
     ["*English as a Global Language*","This is by Crystal."],
     ["*Postcolonial English: Varieties around the World*","Right."],
     ["*Linguistic Imperialism*","This is by Phillipson."],
     ["*New-Dialect Formation*","This is by Trudgill."]]),
   Q("e6u2-q32","e6u2-l4",2,"Which is a sign of endonormative stabilization?",3,[
     ["Teachers use British textbooks as the only model","This is exonormative."],
     ["Local forms are corrected as mistakes in school","This is exonormative."],
     ["English has just arrived with the first traders","This is foundation."],
     ["The country publishes its own dictionary of local English","Right."]]),
   Q("e6u2-q33","e6u2-l4",2,"According to Schneider, what drives the changes between phases?",1,[
     ["The number of English teachers","Teachers matter, but they are not the main driver."],
     ["How the groups see themselves and each other (identity)","Right."],
     ["The size of the country","Size does not decide it."],
     ["The date of independence","Independence matters, but identity is central."]]),
   Q("e6u2-q34","e6u2-l4",3,"Letters in a country’s newspapers complain that young people’s English is getting worse. Local pronunciations and grammar patterns are spreading. Which phase does this suggest?",2,[
     ["Foundation","English has just arrived in this phase."],
     ["Exonormative stabilization","Here, local forms are mostly seen as errors, and they are less widespread."],
     ["Nativization","Right. This is the complaint tradition."],
     ["Differentiation","Here, subgroups mark identity within a secure national identity."]]),
   Q("e6u2-q35","e6u2-l4",3,"A student says: “A variety in Phase 5 is better English than a variety in Phase 2.” What is the best reply?",0,[
     ["“The model describes change over time. It does not rank varieties.”","Right."],
     ["“Yes. Later phases are always better.”","No phase ranks above another."],
     ["“Phase 2 is better, because it follows British English.”","This also ranks varieties."],
     ["“Nobody can say, because the model is not about English.”","The model is about English."]]),
   Q("e6u2-q36","e6u2-l4",3,"Which setting does Schneider’s Dynamic Model fit **least** well?",3,[
     ["Singapore","The model was applied to Singapore."],
     ["The United States","The model was applied to the United States."],
     ["Nigeria","The model fits postcolonial settings."],
     ["A country with no colonial history of English, where English is only a foreign language, such as Japan","Right. The model is built for postcolonial settings."]]),
   /* ---- Lesson 5 ---- */
   Q("e6u2-q37","e6u2-l5",1,"Which of these words did English take from Japanese?",2,[
     ["mansion","Japanese took *manshon* from English."],
     ["salary","Japanese took *sarariiman* from English."],
     ["karaoke","Right."],
     ["smartphone","Japanese made *sumaho* from English."]]),
   Q("e6u2-q38","e6u2-l5",1,"What is *language shift*?",1,[
     ["A change in a speaker’s accent","This is accent change."],
     ["A community’s gradual move from its heritage language to another language","Right."],
     ["The borrowing of one word","This is borrowing."],
     ["The spelling reform of a language","This is spelling reform."]]),
   Q("e6u2-q39","e6u2-l5",2,"Which scholar argued in 1992 that the spread of English helps English-speaking countries and harms other languages?",3,[
     ["David Crystal","Crystal described practical choices and the coexistence of languages."],
     ["Jennifer Jenkins","Jenkins is known for the Lingua Franca Core."],
     ["Edgar Schneider","Schneider is known for the Dynamic Model."],
     ["Robert Phillipson","Right. The book is *Linguistic Imperialism*."]]),
   Q("e6u2-q40","e6u2-l5",2,"Since 2020, in which elementary grades is English a formal subject in Japan?",1,[
     ["Grades 1 and 2","Not in grades 1 and 2."],
     ["Grades 5 and 6","Right. Foreign language activities start in grade 3."],
     ["Only in secondary school","English has been a school subject earlier since 2020."],
     ["Grades 3 and 4 as a formal graded subject","Grades 3 and 4 have foreign language activities."]]),
   Q("e6u2-q41","e6u2-l5",2,"What is *gairaigo*?",0,[
     ["A Japanese word borrowed from another language, often English","Right."],
     ["A Japanese word with no foreign origin","This is the opposite."],
     ["A Japanese grammar rule","It is vocabulary."],
     ["An English word borrowed from Japanese","This is a loanword in English."]]),
   Q("e6u2-q42","e6u2-l5",3,"In a family, the grandparents speak a heritage language, the parents speak both, and the grandchildren speak mostly English. What is the best description?",2,[
     ["The grandchildren are not intelligent enough to learn the heritage language.","Intelligence is not the issue. Social conditions are."],
     ["English alone causes this, in every case.","Other majority languages cause shift too, and schools and jobs also matter."],
     ["A common pattern of language shift over three generations, caused by schools, jobs and status. Families and communities can slow it.","Right."],
     ["This pattern never happens.","It is a common pattern."]]),
   Q("e6u2-q43","e6u2-l5",3,"A news article says: “Soon everyone will speak English and all other languages will disappear.” What is the best evaluation?",1,[
     ["It is correct, because English is the best language.","No language is naturally the best."],
     ["There is no evidence for it. Most people are multilingual, many languages are growing, and shift has many causes besides English.","Right."],
     ["It is correct, because the internet only uses English.","The internet has content in very many languages."],
     ["It is correct, because 100 percent of people already speak it.","Most people do not speak English."]]),
   Q("e6u2-q44","e6u2-l5",2,"In Kachru’s terms, where does Japan belong?",3,[
     ["The inner circle","The inner circle includes the UK and the US, where English is a first language."],
     ["The outer circle","The outer circle has a colonial past, with English used in government and schools."],
     ["Outside all circles","Kachru places foreign-language countries in the expanding circle."],
     ["The expanding circle","Right. English is a foreign language, with no official status."]]),
   Q("e6u2-q45","e6u2-l5",2,"Which statement about the early internet is accurate?",0,[
     ["It was built mostly in the United States, and its early systems used the English alphabet.","Right. Unicode later made it possible to write most scripts."],
     ["It was built in Japan and used Japanese characters first.","It was built mostly in the United States."],
     ["It could never be used for any other language.","Unicode and other systems later made it possible."],
     ["It had no connection to English.","Early systems used the English alphabet and English words."]])
  ]
});
})();
